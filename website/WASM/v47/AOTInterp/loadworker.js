
console.log("going to load WsTranslatorLoader.worker.js", location);
importScripts(["../WsTranslatorLoader.worker.js"]);
console.log("after load WsTranslatorLoader.worker.js");

function requireSync(files, f) {
    if (files.length == 0) f()
    else
        requirejs(files.slice(0,1), function() { requireSync(files.slice(1), f); });
}

requirejs(["/FShUI/WebSharper/WebSharper.Core.JavaScript/Runtime.min.js"], function() {
    $      = {};
    requireSync([
         "/FShUI/WebSharper/WebSharper.Main.js?h=1127374076"
        ,"/FShUI/WebSharper/WebSharper.Collections.js?h=-598830617"
        ,"/FShUI/WebSharper/WebSharper.Control.js?h=-1010165157"
    ], function() {
        IntelliFactory.Runtime.ScriptBasePath = 'FShUI/WebSharper/';
        IntelliFactory.Runtime.Start();
    });
});

var _appendBuffer = function(buffer1, buffer2) {
    var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
    tmp.set(new Uint8Array(buffer1), 0);
    tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
    return tmp.buffer;
  };


  function getBinaryPromise() {
    // If we don't have the binary yet, try to to load it asynchronously.
    // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
    // See https://github.com/github/fetch/pull/92#issuecomment-140665932
    // Cordova or Electron apps are typically loaded from a file:// url.
    // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
    if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
      if (typeof fetch === 'funxction' // Abe: ALWAYS FALSE 
        && !isFileURI(wasmBinaryFile)
      ) {
        return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
          if (!response['ok']) {
            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
          }
          return response['arrayBuffer']();
        }).catch(function () {
            return getBinary(wasmBinaryFile);
        });
      }
      else {
        if (readAsync) {
          // fetch is not available or url is file => try XHR (readAsync uses XHR internally)
          return new Promise(function(resolve, reject) {
            readAsync(  wasmBinaryFile + '1', function(response1) { 
              var   buffer1 = new Uint8Array(/** @type{!ArrayBuffer} */(response1));
              readAsync(wasmBinaryFile + '2', function(response2) { 
                var buffer2 = new Uint8Array(/** @type{!ArrayBuffer} */(response2));
                resolve(_appendBuffer(buffer1, buffer2));
              }, reject)
            }, reject)
          });
        }
      }
    }
      
    // Otherwise, getBinary should be able to get it synchronously
    return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
  }
  
// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
    // prepare imports
    var info = {
      'env': asmLibraryArg,
      'wasi_snapshot_preview1': asmLibraryArg,
    };
    // Load the wasm module and create an instance of using native support in the JS engine.
    // handle a generated wasm instance, receiving its exports and
    // performing other necessary setup
    /** @param {WebAssembly.Module=} module*/
    function receiveInstance(instance, module) {
      var exports = instance.exports;
  
      Module['asm'] = exports;
  
      wasmMemory = Module['asm']['memory'];
      assert(wasmMemory, "memory not found in wasm exports");
      // This assertion doesn't hold when emscripten is run in --post-link
      // mode.
      // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
      //assert(wasmMemory.buffer.byteLength === 134217728);
      updateGlobalBufferAndViews(wasmMemory.buffer);
  
      wasmTable = Module['asm']['__indirect_function_table'];
      assert(wasmTable, "table not found in wasm exports");
  
      removeRunDependency('wasm-instantiate');
    }
    // we can't run yet (except in a pthread, where we have a custom sync instantiator)
    addRunDependency('wasm-instantiate');
  
    // Async compilation can be confusing when an error on the page overwrites Module
    // (for example, if the order of elements is wrong, and the one defining Module is
    // later), so we save Module and check it later.
    var trueModule = Module;
    function receiveInstantiatedSource(output) {
      // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
      // receiveInstance() will swap in the exports (to Module.asm) so they can be called
      assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
      trueModule = null;
      // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
      // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
      receiveInstance(output['instance']);
    }
  
    function instantiateArrayBuffer(receiver) {
      return getBinaryPromise().then(function(binary) {
        return WebAssembly.instantiate(binary, info);
      }).then(receiver, function(reason) {
        err('failed to asynchronously prepare wasm: ' + reason);
  
        abort(reason);
      });
    }
  
    // Prefer streaming instantiation if available.
    function instantiateAsync() {
      if (!wasmBinary &&
          typeof WebAssembly.instantiateStreaming === 'funxction' && //ABE: always false
          !isDataURI(wasmBinaryFile) &&
          // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
          !isFileURI(wasmBinaryFile) &&
          typeof fetch === 'function') {
        return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
          var result = WebAssembly.instantiateStreaming(response, info);
          return result.then(receiveInstantiatedSource, function(reason) {
              // We expect the most common failure cause to be a bad MIME type for the binary,
              // in which case falling back to ArrayBuffer instantiation should work.
              err('wasm streaming compile failed: ' + reason);
              err('falling back to ArrayBuffer instantiation');
              return instantiateArrayBuffer(receiveInstantiatedSource);
            });
        });
      } else {
        return instantiateArrayBuffer(receiveInstantiatedSource);
      }
    }
  
    // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
    // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
    // to any other async startup actions they are performing.
    if (Module['instantiateWasm']) {
      try {
        var exports = Module['instantiateWasm'](info, receiveInstance);
        return exports;
      } catch(e) {
        err('Module.instantiateWasm callback failed with error: ' + e);
        return false;
      }
    }
  
    instantiateAsync();
    return {}; // no exports yet; we'll fill them in later
  }
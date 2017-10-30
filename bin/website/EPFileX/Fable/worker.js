//importScripts('build/bundle.min.js');

// performance polyfill for Safari (see #902) from
// https://gist.github.com/paulirish/5438650
(function(){
  if ("performance" in self == false) {
      self.performance = {};
  }
  Date.now = (Date.now || function () {  // thanks IE8
	  return new Date().getTime();
  });
  if ("now" in self.performance == false){
    var nowOffset = Date.now();
    if (performance.timing && performance.timing.navigationStart){
      nowOffset = performance.timing.navigationStart
    }
    self.performance.now = function now(){
      return Date.now() - nowOffset;
    }
  }
})();

var checker = null;
var metadata = {}

// Files have .txt extension to allow gzipping in Github Pages
var references = [
    "mscorlib.dll",
    "System.dll",
    "System.Core.dll",
    "System.Data.dll",
    "System.IO.dll",
    "System.Xml.dll",
    "System.Numerics.dll",
    "FSharp.Core.sigdata",
    "FSharp.Core.dll",
    "Fable.Core.dll",
    "Fable.Import.Browser.dll"
    // When loading the REPL the browser console always shows: "Cannot find type System.ValueTuple`1"
    // However, adding the following reference prevents opening System namespace
    // See https://github.com/fable-compiler/Fable/issues/1152#issuecomment-330315250
    // "System.ValueTuple.dll",
];

function isSigdata(ref) {
    return ref.indexOf(".sigdata") >= 0;
}

function getFileBlob(key, url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url + ".txt");
    xhr.responseType = "arraybuffer";
    xhr.onload = function (oEvent) {
      var arrayBuffer = xhr.response;
      if (arrayBuffer) {
        metadata[key] = new Uint8Array(arrayBuffer);
      }
    };
    xhr.onerror = function (oEvent) {
      console.log('Error loading ' + url);
    };
    xhr.send();
};

references.map(function(fileName){
    getFileBlob(fileName, 'metadata/' + fileName);
});

function compile(source, replacements, callback) {
    try {
        if (checker === null) {
            if (Object.getOwnPropertyNames(metadata).length < references.length) {
                setTimeout(() => compile(source, replacements, callback), 200);
                return;
            }
            var readAllBytes = function (fileName) { return metadata[fileName]; }
            var references2 = references.filter(x => !isSigdata(x)).map(x => x.replace(".dll", ""));
            checker = Fable.createChecker(readAllBytes, references2);
        }
        var com = Fable.makeCompiler(replacements);

        var fileName = "stdin.fsx"
        let fsharpAst = Fable.parseFSharpProject(checker, com, fileName, source);
        var babelAst = Fable.compileAst(com, fsharpAst, fileName);
        var options = {
          plugins: [
            //babelPlugins.transformMacroExpressions,
            //babelPlugins.removeUnneededNulls,
          ],
	  presets: [ "es2015", "stage-0", "react" ],
          filename: 'repl',
          babelrc: false,
        };
	var jsonAst = Fable.convertToJson(babelAst);
        var ast = JSON.parse(jsonAst);
	console.log(ast);
        var transformed = Babel.transformFromAst(ast , null, options);
	console.log(transformed);
        callback(transformed.code);

    }
    catch (err) {
        console.log({ error: { message: err.message, stack: err.stack }});
    }
}

onmessage = function (e) {
    compile(e.data.source, e.data.replacements);
}

  var babelPlugins = (function () {
    var template = Babel.template;
    /**
     * Removes unnecessary null statements (e.g. at the end of constructors)
     */
    var removeUnneededNulls = {
        visitor: {
            // Remove `null;` statements (e.g. at the end of constructors)
            ExpressionStatement: function (path) {
                if (path.node.expression.type === "NullLiteral") {
                    path.remove();
                }
            }
        }
    };
    /**
     * Custom plugin to simulate macro expressions.
     */
    var transformMacroExpressions = {
        visitor: {
            StringLiteral: function (path) {
                var node = path.node;
                if (!node.macro || !node.value) {
                    return;
                }
                var buildArgs = {}, macro = node.value;
                try {
                    var args = node.args;
                    for (var i = 0; i < args.length; i++) {
                        buildArgs["$" + i] = args[i];
                    }
                    macro = macro
                        .replace(/\$(\d+)\.\.\./, function (m, i) {
                        var rep = [], j = parseInt(i, 10);
                        for (; j < args.length; j++) {
                            rep.push("$" + j);
                        }
                        return rep.join(",");
                    })
                        .replace(/\{\{\$(\d+)\?(.*?)\:(.*?)\}\}/g, function (_, g1, g2, g3) {
                        var i = parseInt(g1, 10);
                        return i < args.length && args[i].value ? g2 : g3;
                    })
                        .replace(/\{\{([^\}]*\$(\d+).*?)\}\}/g, function (_, g1, g2) {
                        var i = parseInt(g2, 10);
                        return i < args.length ? g1 : "";
                    });
                    var buildMacro = template(macro);
                    path.replaceWithMultiple(buildMacro(buildArgs));
                }
                catch (err) {
                  err.message =
                    "BABEL ERROR: Failed to parse macro: " + macro + "\n" +
                    "MACRO ARGUMENTS: " + Object.getOwnPropertyNames(buildArgs).join() + "\n" +
                    err.message;
                  throw err;
                }
            }
        }
    };

    return {
      removeUnneededNulls: removeUnneededNulls,
      transformMacroExpressions: transformMacroExpressions
    }
  })();



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
        console.log("LOADED WEBSHARPER BASICS");
        IntelliFactory.Runtime.ScriptBasePath = 'FShUI/WebSharper/';
        IntelliFactory.Runtime.Start();
    });
});
#nowarn "3242"
////-d:FSharpStation1592310559857 -d:TEE -d:WEBSHARPER
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Web.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Main.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Web.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Control.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\WsTranslator.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\FSharp.Compiler.Service.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Compiler.dll"
//#nowarn "3242"
/// Root namespace for all code
//#define FSharpStation1592310559857
#if !NOFSROOT
#if INTERACTIVE
module FsRoot   =
#else
#if DLL
namespace FsRootDll
#else
namespace FsRoot
#endif
#endif
#endif
    #if !NETSTANDARD20
    
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Web.dll"
    
    #if WEBSHARPER
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461"
    
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Main.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Web.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Control.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
    #endif
    #endif
    #if WEBSHARPER
    //#nowarn "3242" 
    
    open WebSharper
    //open WebSharper.JavaScript
    open WebSharper.UI
    open WebSharper.UI.Client
    type on   = WebSharper.UI.Html.on
    type attr = WebSharper.UI.Html.attr
    #else
    /// dummy WebSharper definition in order to avoid having to use #if WEBSHARPER all the time
    module WebSharper =
        type RpcAttribute() =
            inherit System.Attribute()
            let a = 1
        type JavaScriptAttribute(translate:bool) =
            inherit System.Attribute()
            let a = 1
            new() = JavaScriptAttribute true
        type JavaScriptExportAttribute(translate:bool) =
            inherit System.Attribute()
            let a = 1
            new() = JavaScriptExportAttribute true
        type InlineAttribute(code:string) =
            inherit System.Attribute()
            let a = 1
            new() = InlineAttribute ""
        type DirectAttribute(code:string) =
            inherit System.Attribute()
            let a = 1
    
    open WebSharper
    
    #endif
    
        /// Essentials that can be converted to JavaScript with WebSharper
        [< JavaScriptExport ; AutoOpen >]
        module Library = 
            let Error = Result.Error
        
            let [<Inline>] inline swap f a b = f b a
            
            /// swap: for use with operators: [1..5] |> List.map (__ (/) 2)
            let [<Inline>] inline __   f a b = f b a
            
            /// call a function but return the input value
            /// for logging, debugging
            /// use: (5 * 8) |> tee (printfn "value = %d") |> doSomethingElse
            let [<Inline>] inline tee f v = f v ; v
            
            /// tee: call a function but return the input value
            /// for logging, debugging
            /// use: (5 * 8) |!> printfn "value = %d" |> doSomethingElse
            let [<Inline>] inline  (|>!) v f   = f v ; v
            let [<Inline>] inline  (>>!) g f   = g >> fun v -> f v ; v
            
            let inline print v = 
                match box v with
                | :? string as s -> printfn "%s" s
                | __             -> printfn "%A" v
            
            //#define TEE
            type System.String with
                member this.Substring2(from, n) = 
                    if   n    <= 0           then ""
                    elif from >= this.Length then ""
                    elif from <  0           then this.Substring2(0, n + from)
                    else this.Substring(from, min n (this.Length - from))
                member this.Left             n  = if n < 0 
                                                  then this.Substring2(0, this.Length + n)
                                                  else this.Substring2(0, n              )
                member this.Right            n  = this.Substring2(max 0 (this.Length - n), this.Length)
                //member this.toUnderscore        = this |> Seq.mapi(fun i c -> if i > 0 && System.Char.IsUpper(c) then [ '_' ; c ] else [ c ])  |> Seq.collect id |> Seq.toArray |> System.String
            
            module String =
                let splitByChar (c: char) (s: string) = s.Split c
                let splitInTwoO spl txt = 
                    let i = (txt:string).IndexOf (spl:string)
                    if  i = -1 then None else
                    (txt.Left(i), txt.Substring (i + spl.Length) )
                    |> Some
                let delimitedO  op cl txt =
                    splitInTwoO op txt
                    |> Option.bind(fun (bef, sec) ->
                        splitInTwoO cl sec
                        |> Option.map(fun (mid, aft) -> bef, mid, aft)
                    )
                let contains     sub  (whole: string) = whole.Contains sub
                let trim                  (s: string) = s.Trim()
                let left  n (s:string) = s.Left  n
                let right n (s:string) = s.Right n
                let append     (a: string)(b: string) =  a + b
                let skipFirstLine (txt:string) = txt.IndexOf '\n' |> fun i -> if i < 0 then "" else txt.[i + 1..]
                let unindent (s:string) =
                    let lines = s.Split '\n'
                    let n     = lines 
                                |> Seq.tryFind (fun l -> l.Trim() <> "")
                                |> Option.defaultValue ""
                                |> Seq.tryFindIndex ((<>) ' ') 
                                |> Option.defaultValue 0
                    lines 
                    |> Seq.map    (fun l -> if l.Length <= n then "" else l.Substring n)
                    |> Seq.filter (fun s -> s.StartsWith "# 1 " |> not)
                let indent n (s:string) =
                    s.Split '\n'
                    |> Seq.map ((+) (String.replicate n " "))
                let unindentStr = unindent >> String.concat "\n"
                let indentStr i = indent i >> String.concat "\n" 
                let skipLastLine =
                       splitByChar '\n' 
                    >> fun s -> s.[0 .. (max 0 (s.Length - 2)) ]
                    >> String.concat "\n"
                let (|StartsWith|_|) (start:string) (s:string) = if s.StartsWith start then Some s.[start.Length..                          ] else None
                let (|EndsWith  |_|) (ends :string) (s:string) = if s.EndsWith   ends  then Some s.[0           ..s.Length - ends.Length - 1] else None
                let (|WhiteSpace|_|) (s:string) = if s |> Seq.exists (System.Char.IsWhiteSpace >> not) then None else Some()
                
                let thousands n =
                    let v = (if n < 0 then -n else n).ToString()
                    let r = v.Length % 3 
                    let s = if r = 0 then 3 else r
                    [   yield v.[0.. s - 1]
                        for i in 0..(v.Length - s)/ 3 - 1 do
                            yield v.[i * 3 + s .. i * 3 + s + 2]
                    ] 
                    |> String.concat ","
                    |> fun s -> if n < 0 then "-" + s else s
            
            
            module ParseO =
                let tryParseWith tryParseFunc = tryParseFunc >> function
                        | true, v    -> Some v
                        | false, _   -> None
            
            
                /// Javascript adds time zone information when parsing a date and that can change the result
                let parseDateO2  = (fun s -> s + "T00:00:00") >> tryParseWith System.DateTime.TryParse
                let parseDateO   = tryParseWith System.DateTime.TryParse
                let parseIntO    = tryParseWith System.Int32   .TryParse
                let parseInt64O  = tryParseWith System.Int64   .TryParse
                let parseSingleO = tryParseWith System.Single  .TryParse
                let parseDoubleO = tryParseWith System.Double  .TryParse
                let parseGuidO   = tryParseWith System.Guid    .TryParse
                // etc.
                
                // active patterns for try-parsing strings
                let (|Date  |_|) = parseDateO
                let (|Int   |_|) = parseIntO
                let (|Int64 |_|) = parseInt64O
                let (|Single|_|) = parseSingleO
                let (|Double|_|) = parseDoubleO
                let (|Guid  |_|) = parseGuidO
                
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER 
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            module Pojo =
                let addProp prop (pojo:JSObject) = pojo.Add prop ; pojo
                
                let newPojo props =
                    let pojo = JSObject()
                    if IsClient then
                        props |> Seq.iter (swap addProp pojo >> ignore)
                    pojo
            
                let newPojoOpt (propOs : seq<string * obj option>) =
                    propOs
                    |> Seq.choose(fun (n,vO) -> vO |> Option.map(fun v -> n,v))
                    |> newPojo
            
    
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\WsTranslator.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\FSharp.Compiler.Service.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Compiler.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades\netstandard.dll"
    
    //#define WEBSHARPER
    [< JavaScriptExport >]
    module WasmLoader =
        open WebSharper
        open WebSharper.JavaScript
        open WebSharper.UI
        open WebSharper.UI.Html
    
        open FsRoot.WsTranslator
    
        let mainMessage = Var.Create "Wasm not loaded yet."
        let detailsV    = Var.Create ""
        let fsErrsV     = Var.Create [||]
        let wsErrsV     = Var.Create [||]
        let wsWrnsV     = Var.Create [||]
        let codeV       = Var.Create "printfn \"Hello\""
        let optsV       = Var.Create "/tmp/source.fsx\n-o:source.exe\n--simpleresolution\n--nowarn:3186\n--optimize-\n--noframework\n--fullpaths\n--warn:3\n--target:exe\n-r:/tmp/FSharp.Core.dll\n-r:/tmp/mscorlib.dll\n-r:/tmp/netstandard.dll\n-r:/tmp/System.dll\n-r:/tmp/System.Core.dll\n-r:/tmp/System.IO.dll\n-r:/tmp/System.Runtime.dll\n-r:/tmp/System.Net.Http.dll\n-r:/tmp/System.Threading.dll\n-r:/tmp/WebAssembly.Bindings.dll\n-r:/tmp/WebAssembly.Net.WebSockets.dll\n-r:/tmp/System.Numerics.dll"
    
        let appendMsg (txt:string) =
            Console.Log txt
            let pre = detailsV.Value
            pre + (if pre = "" then "" else "\n") + txt
            |> detailsV.Set
    
        module Remoting =
            open WebSharper.JavaScript
    
            [< Inline "$global.WASM_WsTranslator_FsRoot_WsTranslator_runRpc($header, $data)" >]
            let runRpc (header:string) (data:string) = runRpc(header, data)
    
            let getHeaderRpc headers : string = headers?("x-websharper-rpc")
    
            let private originalProvider = WebSharper.Remoting.AjaxProvider
    
            module ReturnQueue  = 
                let queues = new System.Collections.Generic.Dictionary<string, ((string -> unit) * (exn -> unit)) [] >()
                let tryGetS md  = ParseO.tryParseWith queues.TryGetValue md
                let add(md, fs) = 
                    let narr =  match tryGetS md with
                                | Some arr   -> queues.Remove md |> ignore
                                                Array.append arr [| fs |]
                                | None       ->                  [| fs |]
                    queues.Add(md, narr)
                let tryGet  md =
                    tryGetS md
                    |> Option.bind(fun arr ->
                        match Seq.tryHead arr with
                        | None    -> None
                        | Some fs ->
                        let narr = arr.[1..]
                        queues.Remove md |> ignore
                        queues.Add(md, narr)
                        Some fs
                    )
    
            let returnValue (md, v:string) = ReturnQueue.tryGet md |> Option.iter(fun (ok, er) -> ok v )
            let returnExnExn(md, e:exn   ) = ReturnQueue.tryGet md |> Option.iter(fun (ok, er) -> er e )
            let returnExn   (md, e:string) = returnExnExn(md, exn e)
    
            type CustomXhrProvider () =
                interface WebSharper.Remoting.IAjaxProvider with
                    member this.Async url headers data ok err = 
                        async {
                            let md = getHeaderRpc headers
                            ReturnQueue.add(md, (ok, err))
                            try 
                                runRpc md data
                            with e -> returnExnExn(md, e)
                        } |> Async.Start
                    member this.Sync url headers data = failwith "CustomXhrProvider.Sync not suppported"
                    
            let installBearer() =
                WebSharper.Remoting.AjaxProvider <- CustomXhrProvider()
    
    
        module WasmLoad =
            open WebSharper.Core.Resources
    
            let rootPath = "/WASM/publish/"
    
            [< Require(typeof<BaseResource>, "//cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js") >]
            type Require() =
                [< Inline "requirejs($files, $f1)" >]
                static member requireJSM(files:string[], f1 : obj -> unit) = ()
    
            let requireJsA fs =
                Async.FromContinuations(fun (ok, ko, ca) ->
                    Require.requireJSM(fs |> Seq.toArray, ok)
                )
    
            [< Inline "$global.Module.mono_bind_static_method($methodRef)" >]
            let monoBindStaticMethod (methodRef:string) = ()
    
            let bindStaticMethod(assmbly, path:string, methd) =
                JS.Window?(sprintf "WASM_%s_%s_%s" assmbly (path.Replace(".", "_")) methd ) <- 
                    sprintf "[%s]%s:%s" assmbly path methd
                    |> monoBindStaticMethod
    
            let bindWasm() =
                [
                    //"WsTranslator", "FsRoot.WsTranslator", "translateToJs"
                    //"WsTranslator", "FsRoot.WsTranslator", "dir"
                    "WsTranslator", "FsRoot.WsTranslator", "runRpc"
                ] |> Seq.iter bindStaticMethod
    
            type Global() =
                [< Inline "$global.Module" >]
                static member Module = X<_>
    
            module FS =
                [< Inline "$global.FS.mkdir($path)" >]
                let mkdir path = X<_>
                [< Inline "$global.FS.createPreloadedFile($pathTo, $file, $pathFrom, $op1, $op21)">]
                let createPreloadedFile(pathTo:string, file:string, pathFrom:string, op1:int, op2:int) = X<_>
    
            let filesToPreload = [
                rootPath + "dlls", "/tmp", [|
                    "WebSharper.Main.dll"
                    "WebSharper.Collections.dll"
                    "WebSharper.Control.dll"
                    "WebSharper.Web.dll"
                    "WebSharper.Sitelets.dll"
                    "WebSharper.UI.dll"
                    "WebSharper.UI.Templating.Runtime.dll"
                    "WebSharper.Data.dll"            
                |]
                rootPath + "managed", "/tmp"
                , optsV.Value.Split '\n' |> Array.choose(function String.StartsWith "-r:/tmp/" f -> Some f |_-> None )
            ]
    
            let preloadFiles() =
                let asyncLoad url onload onerror =
                    let xhr : XMLHttpRequest = JS.Inline("new $global.XMLHttpRequest()", [||])
                    xhr.Open("GET", url, true);
                    xhr.ResponseType <- XMLHttpRequestResponseType.Arraybuffer
                    xhr.Onload <- (fun ev ->
                        if (xhr.Status = 200 || xhr.Status = 0 && xhr.Response <> null) then
                            onload(new Uint8Array(xhr.Response :?> byte[]))
                        else
                            onerror())
                    xhr.Onerror <- System.Action<_> (fun _ -> onerror())
                    xhr.Send null
                JS.Window?Browser <- Pojo.newPojo [
                    "init"     , ignore    :> obj
                    "asyncLoad", System.Action<_,_,_> asyncLoad :> obj
                ]
                let loadFiles(pathFrom, pathTo, files) =
                    try FS.mkdir pathTo
                    with e -> ()
                    for file in files do
                        FS.createPreloadedFile(pathTo, file, pathFrom + "/" + file, 1, 1);
                Global.Module?preloadPlugins <- [||]
                //loadFiles(rootPath + config.vfs_prefix, App.preloadTo, config.file_list.filter(f => !App.morefiles.includes(f)));
                for from, toPath, files in filesToPreload do
                    loadFiles(from, toPath, files)
    
            //module Load =
    
            let loadWasm = 
                lazy
                    printfn "Loading Dlls metadata. Hold on this will take a while..."
                    Async.FromContinuations(fun (ok, ko, ca) ->
                        let init () =
                            bindWasm()
                            printfn         "WASM Initialized!"
                            mainMessage.Set "WASM Initialized!"
                            ok()
                        async {
                            mainMessage.Set "WASM Loading..."
                            do! Async.Sleep 50
                            Remoting.installBearer()
                            JS.Window?App <- Pojo.newPojo [
                                                "init", init
                                            ]
                            let! v = requireJsA [| rootPath + "mono-config.js" |]
                            let! v = requireJsA [| rootPath + "runtime.js" |]
                            Global.Module?print    <- appendMsg
                            Global.Module?printErr <- appendMsg
                            Global.Module?preRun   <- [| preloadFiles |]
                            let! v = requireJsA [| rootPath + "dotnet.js" |]
                            ()
                        } |> Async.Start
                    ) |> Async.StartAsTask
    
    
        let parseAndCheckProject(projectName, opts, code)  = async {
            let! errs, deps, crit = parseAndCheckProjectRpc projectName opts code
            fsErrsV.Set (Seq.toArray errs)
            (crit, deps)
            |> sprintf "%A"
            |> detailsV.Set
        }
    
        let translateToJs(projectName, opts, code)  = async {
            let! fsErrs, wsO = translateFsToJsRpc projectName opts code
            fsErrsV.Set fsErrs
            match wsO with
            | Some (js, errs, wrns) -> 
                detailsV.Set js
                wsErrsV .Set (Seq.toArray errs)
                wsWrnsV .Set (Seq.toArray wrns)
            | None -> 
                detailsV.Set ""
                wsErrsV .Set [||]
                wsWrnsV .Set [||]
        }
    
        let inline callWasmA f p = 
            async {
                do! Async.Sleep 50
                do! Async.AwaitTask WasmLoad.loadWasm.Value
                do! f p
            } |> Async.Start
    
        let getParms() = ("WasmTest", ("fsc.exe\n" + optsV.Value).Split '\n', codeV.Value)
    
        let mainDoc() =
            div     [] [
                h1  [] [ text "HELLO WASM!" ]
                h2  [] [ text mainMessage.V ]
                div [] [
                    Doc.InputArea [] codeV
                    Doc.InputArea [] optsV
                ]
                span [] [
                    Doc.Button "Check"     [] (fun ()-> callWasmA parseAndCheckProject (getParms()))
                    Doc.Button "Translate" [] (fun ()-> detailsV.Set ""
                                                        appendMsg "Initiating translation:"
                                                        callWasmA translateToJs        (getParms())
                                                )
                    Doc.Button "Dir"       [] (fun () -> callWasmA dir "/")
                    Doc.Button "Clean"     [] (fun () -> detailsV.Set "")
                ]
                ol [] [ fsErrsV.View |> Doc.BindSeqCached(fun x -> li [] [ text <| sprintf "%A" x ] ) ]
                ol [] [ wsErrsV.View |> Doc.BindSeqCached(fun x -> li [] [ text <| sprintf "%A" x ] ) ]
                ol [] [ wsWrnsV.View |> Doc.BindSeqCached(fun x -> li [] [ text <| sprintf "%A" x ] ) ]
                div [ attr.style "font-family: monospace; white-space:pre" ] [
                    text detailsV.V
                ]
            ]
    
        [< SPAEntryPoint >]
        let main() = mainDoc() |> Doc.Run JS.Document.Body
    
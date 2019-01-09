////-d:FSharpStation1546539619997 -d:WEBSHARPER
//#I @"..\packages\WebSharper\lib\net461"
//#I @"..\packages\WebSharper.UI\lib\net461"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Core.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Main.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Web.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Control.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
/// Root namespace for all code
//#define FSharpStation1546539619997
#if INTERACTIVE
module FsRoot   =
#else
namespace FsRoot
#endif

    #if WEBSHARPER
    //#define NOFRAMEWORK --noframework
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    
    //#I @"..\packages\WebSharper\lib\net461"
    //#I @"..\packages\WebSharper.UI\lib\net461"
    
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Core.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Main.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Web.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Control.dll"
    //#r @"..\packages\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
    //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
    //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
    //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
    //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
    
    open WebSharper
    open WebSharper.JavaScript
    open WebSharper.UI
    open WebSharper.UI.Client
    type on   = WebSharper.UI.Html.on
    type attr = WebSharper.UI.Html.attr
    #else
    /// dummy WebSharper definition in order to avoid having to use #if WEBSHARPER all the time
    module WebSharper =
        type RpcAttribute() =
            let a = 1
        type JavaScriptAttribute(translate:bool) =
            let a = 1
            new() = JavaScriptAttribute true
        type InlineAttribute(code:string) =
            let a = 1
            new() = InlineAttribute ""
        type DirectAttribute(code:string) =
            let a = 1
    
    open WebSharper
    
    #endif
    
        /// Essentials that can be converted to JavaScript with WebSharper
        [< JavaScript ; AutoOpen >]
        module Library =
            let Error = Result.Error
            /// returns a function that delays its execution
            /// runs only once even if multiple calls happen before the delay
            let delayed delay doF =
                let cancellationTokenSourceO = ref None
                fun parm -> 
                    let asy = async {
                        do! Async.Sleep delay
                        doF parm
                    } 
                    !cancellationTokenSourceO |> Option.iter (fun (tokenSource:System.Threading.CancellationTokenSource) -> tokenSource.Cancel())
                    cancellationTokenSourceO := Some <| new System.Threading.CancellationTokenSource()
                    Async.Start(asy, cancellationToken = (!cancellationTokenSourceO).Value.Token)
            
            
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            let (|REGEX|_|) (expr: string) (opt: string) (value: string) =
                if value = null then None else
                try 
                    match JavaScript.String(value).Match(RegExp(expr, opt)) with
                    | null         -> None
                    | [| |]        -> None
                    | m            -> Some m
                with e -> None
            
            let rexGuid = """([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})"""
            
            module REGEX =
                let getStartWord (line:string) ch =
                    match line.Substring(0, ch) with
                    | REGEX @"([a-zA-Z_]\w*)$" "g" [| txt |] -> txt
                    | _                                      -> ""          
                
                let getEndWord (line:string) ch =
                    match line.Substring(ch) with
                    | REGEX @"^([a-zA-Z_]\w*)" "g" [| txt |] -> txt
                    | _                                      -> ""          
            
                let (|Identifier|_|) =
                    function
                    | REGEX "^[$a-zA-Z_][0-9a-zA-Z_\.\-$]*$" "" [| id |] -> Some id
                    | _                                                  -> None
            
    
        //#define WEBSHARPER
        
        [< JavaScriptExport >]
        module TestingJS =
        
        
            module WasmFscServices =
                open WebSharper.UI
                open WebSharper.UI.Html
            
                type WorkerEvent() =
                    do ()
                    [< Inline "$this.data"  >] member evt.Data = evt?data
                    
                type WebWorker [< Inline "new Worker($file)" >] (file:string) =
                    do ()
                    [< Inline "$this.onmessage = $f"  >] member this.SetOnMessage(f:System.Action<WorkerEvent>) = ()
                    [< Inline "$this.onerror   = $f"  >] member this.SetOnError  (f:System.Action<WorkerEvent>) = ()
                    [< Inline "$this.postMessage($m)" >] member this.PostMessage (m:obj                       ) = ()
            
            
                [< SPAEntryPoint >]
                let main() =
                    let rexV    = Var.Create """(Err|Warn|Info) \((\d+)\,\s*(\d+)\) - \((\d+)\,\s*(\d+)\)\: "([^"]+?)"\.""" //"
                    let parmsV  = Var.Create "g"
                    let inputV  = Var.Create "Err (1, 7) - (1, 12): \"This shows over there as an error\".\nWarn (2, 7) - (2, 12): \"This shows over there as a warning\".\nInfo (3, 7) - (3, 12): \"This shows over there as information\"."
                    let inputsV = Var.Create ("", "", "")
            
                    //let wx = new WebWorker("/WASM/Markdown/MarkdownWorker.js")
                    let ww = new WebWorker("/WASM/FscServices/FscServicesWorker.js")
                    printfn "%A" ww
                    System.Action<WorkerEvent>(fun ev -> 
                        printfn "%A" ev.Data
                        //printfn "%A" ev.Data?message
                        match ev.Data?message with
                        | "listDir"      -> printfn "%A" ev.Data?dir
                        | _              -> ()
                    ) |> ww.SetOnMessage
            
                    let startParseFile (v:string) = 
                        let o = JSObject()
                        [ "message", "parseFile"
                          "text"   , v ] 
                        |> Seq.iter o.Add
                        ww.PostMessage o
                        
                    let listDir () = 
                        let o = JSObject()
                        [ "message", "listDir" ] 
                        |> Seq.iter o.Add
                        ww.PostMessage o
                        
                    inputV.View |> View.Sink (fun txt -> startParseFile txt)
            
                    View.Map3 (fun inp rx opt -> inp, rx, opt) inputV.View rexV.View parmsV.View 
                    |> View.Sink (delayed 180 inputsV.Set)
                    div [] [
                        div [] [ div [] [ text "RegEx:"    ] ; Doc.InputAreaV [ attr.style "width: 1000px; height:80px " ; attr.id "regex" ] rexV.V   ]
                        div [] [          text "Options: "   ; Doc.InputV     [ attr.style "width: 700px"                ; attr.id "parms" ] parmsV.V ]
                        div [] [ div [] [ text "Input:"    ] ; Doc.InputAreaV [ attr.style "width: 1000px; height:80px " ; attr.id "input" ] inputV.V ]
                        div [] [
                            inputsV.View |> View.Map (fun (inp, rx, opt) ->
                                ul [ attr.id "output" ] 
                                   [ match inp with
                                     | REGEX rx opt m -> yield! m |> Array.map (text >> List.singleton >> (li []))
                                     | _              -> yield  text "<no match>" 
                                   ]
                                ) 
                            |> Doc.BindView id
                        ]
                    ]
                    |> Doc.Run JS.Document.Body
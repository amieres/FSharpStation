#nowarn "3180"
#nowarn "1178"
#nowarn "1182"
////-d:FSharpStation1546447678146 -d:WEBSHARPER
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
//#r @"..\projects\LayoutEngine\bin\LayoutEngine.dll"
//#nowarn "3180"
//#nowarn "1178"
//#nowarn "1182"
/// Root namespace for all code
//#define FSharpStation1546447678146
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
            /// Extensible type for error messages, warnings and exceptions
            type ResultMessage<'M> =
                | NoMsg
                | ErrorMsg  of string
                | Warning   of string
                | Info      of string
                | Message   of 'M
                | ExceptMsg of string * string
                | RMessages of ResultMessage<'M> []
                with 
                override msg.ToString() =
                    match msg with
                    | NoMsg          ->  ""
                    | ErrorMsg  m    ->  m      |> sprintf "Error    : %s"
                    | Warning   m    ->  m      |> sprintf "Warning  : %s"
                    | Info      m    ->  m
                    | Message   m    ->  m      |> sprintf "%O"
                    | ExceptMsg(m,p) -> (m, p) ||> sprintf "Exception: %s, %s"
                    | RMessages ms   ->  ms     |> Seq.filter (function NoMsg -> false |_-> true) |> Seq.map (fun m -> m.ToString()) |> String.concat "\n"
            
            [< AutoOpen >]
            module ResultMessageHelpers =
                let errorMsgf fmt = Printf.ksprintf ErrorMsg fmt
                let warningf  fmt = Printf.ksprintf Warning  fmt
                let infof     fmt = Printf.ksprintf Info     fmt
            
            module ResultMessage =
            
                let inline noMsg    msg = msg |> function NoMsg -> true |_-> false
                let inline exclnoMsg ms = ms |> Seq.filter (noMsg >> not)
                /// converts Messages to other type of ResultMessage
                let rec bindMessage f msg = 
                    match msg with
                    | NoMsg          ->  NoMsg
                    | Message   m    ->  f         m
                    | ErrorMsg  m    ->  ErrorMsg  m
                    | Info      m    ->  Info      m
                    | Warning   m    ->  Warning   m
                    | ExceptMsg(m,p) ->  ExceptMsg(m,p)
                    | RMessages ms   ->  ms     |> Array.map (bindMessage f) |> RMessages
            
                /// a Message is converted to ErrorMsg
                let freeMessageF f msg = msg |> bindMessage f
                /// a Message is converted to ErrorMsg
                let freeMessage    msg = msg |> freeMessageF (sprintf "%O" >> ErrorMsg)
                /// a Message is converted to Warning
                let freeMessageW   msg = msg |> freeMessageF (sprintf "%O" >> Warning )
                /// a Message is converted to Info
                let freeMessageI   msg = msg |> freeMessageF (sprintf "%O" >> Info    )
            
                let rec isInfoF f msg =
                    match msg with
                    | Info      _    ->  true
                    | Message   m    ->  f m
                    | RMessages ms   ->  ms |> exclnoMsg |> Seq.forall (isInfoF f)
                    | _              ->  false
                /// a Message is not considered Info
                let isInfo  msg = msg |> isInfoF (fun _ -> false)
                /// a Message is considered Info
                let isInfoI msg = msg |> isInfoF (fun _ -> true )
            
                let rec isWarningOrInfoF f msg =
                    match msg with
                    | Warning   _    ->  true
                    | Message   m    ->  f m
                    | RMessages ms   ->  ms |> exclnoMsg |> Seq.forall (fun m -> isWarningOrInfoF f m || isInfoF f m)
                    | _              ->  false
                /// a Message is not considered a Warning
                let isWarningOrInfo  msg = msg |> isWarningOrInfoF (fun _ -> false)
                /// a Message is considered a Warning
                let isWarningOrInfoW msg = msg |> isWarningOrInfoF (fun _ -> true )
            
                let rec isFatalF f msg =
                    match msg with
                    | NoMsg
                    | Info      _    
                    | Warning   _    ->  false
                    | Message   m    ->  f m
                    | RMessages ms   ->  ms |> Seq.exists (isFatalF f)
                    | _              ->  true
                    //|>! printfn "%A = %A" msg
                /// a Message is considered fatal
                let isFatal  msg = msg |> isFatalF (fun _ -> true )
                /// a Message is not considered fatal
                let isFatalW msg = msg |> isFatalF (fun _ -> false)
            
                let rec countF f msg =
                    match msg with
                    | NoMsg          ->  0, 0, 0
                    | Info      _    ->  0, 0, 1
                    | Warning   _    ->  0, 1, 0
                    | Message   m    ->  f m
                    | RMessages ms   ->  ms |> exclnoMsg |> Seq.map (countF f) |> Seq.fold (fun (f, w, i) (fm, wm, im) -> f + fm, w + wm, i + im) (0, 0, 0)
                    | _              ->  1, 0, 0
            
                /// a Message is considered an error
                let count  msg = msg |> countF (fun _ -> 1, 0, 0)
                /// a Message is considered a Warning
                let countW msg = msg |> countF (fun _ -> 0, 1, 0)
                /// a Message is considered Info
                let countI msg = msg |> countF (fun _ -> 0, 0, 1)
                
                let addMsg a b =
                    match a, b with
                    | NoMsg        , c
                    | c            , NoMsg         ->  c
                    | RMessages mas, RMessages mbs ->  Array.append    mas      mbs   |> RMessages
                    |           ma , RMessages mbs ->  Array.append [| ma |]    mbs   |> RMessages
                    | RMessages mas,           mb  ->  Array.append    mas   [| mb |] |> RMessages
                    |           ma ,           mb  ->               [| ma   ;   mb |] |> RMessages
            
                let reduceMsgs ms = (NoMsg, ms) ||> Seq.fold addMsg
            
                let summaryF f msg =
                    match countF f msg with
                    | 0, 0, _
                    | 1, 0, 0
                    | 0, 1, 0 -> ""
                    | e, 0, _ -> sprintf "Errors   : %d\n" e
                    | 0, w, _ -> sprintf "Warnings : %d\n" w
                    | e, w, _ -> sprintf "Errors   : %d, Warnings: %d\n" e w
            
                /// returns a string with a count of errors and warnings, if more than one
                let summarizedF f msg = [ msg.ToString() ; summaryF f msg ] |> Seq.filter ((<>) "") |> String.concat "\n"
                /// a Message is considered an error
                let summarized  msg = msg |> summarizedF (fun _ -> 1, 0, 0)
                /// a Message is considered a Warning
                let summarizedW msg = msg |> summarizedF (fun _ -> 0, 1, 0)
                /// a Message is considered Info
                let summarizedI msg = msg |> summarizedF (fun _ -> 0, 0, 1)
                
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
            
            
            type System.String with
                member this.Substring2(from, n) = 
                    if   n    <= 0           then ""
                    elif from <  0           then this.Substring2(0, n + from)
                    elif from >= this.Length then ""
                    else this.Substring(from, min n (this.Length - from))
                member this.Left             n  = this.Substring2(0, n)
                member this.Right            n  = this.Substring2(max 0 (this.Length - n), this.Length)
            
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
                
            
    
        //#r "..\projects\LayoutEngine\bin\LayoutEngine.dll"
        //#define WEBSHARPER
        [< AutoOpen ; JavaScriptExport >]
        module PlugIns =
            open WebSharper
            open FsRoot
            open WebSharper.UI
            open WebSharper.UI.Html
            module AF = AppFramework
        
            //#nowarn "3180"
            //#nowarn "1178"
            //#nowarn "1182"
            module MarkdownPlugIn =
                module LE = LayoutEngine
                
                let htmlV = Var.Create "<h1>Markdown Content</h1>"
            
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
            
                    //let callMarkdown() = 
                    //    AF.tryGetQry "FSharpStation" "PropertyRA" |> Option.iter(fun pqy ->
                    //        let getPropertyRA p =  pqy.qryFunction (box p) |> unbox<Async<Result<string, ResultMessage<obj>>>>
                    //        async {
                    //            let! htmlR = getPropertyRA "htmlMarkdown"
                    //            match htmlR with
                    //            | Ok b when b <> htmlV.Value -> htmlV.Set b
                    //            |_-> ()
                    //        } |> Async.Start
                    //        AF.tryGetAct "FSharpStation" "ActionClick" |> Option.iter (fun pac -> 
                    //            async {
                    //                let! baseSnippetR = getPropertyRA "BaseSnippet"
                    //                match baseSnippetR with
                    //                | Ok b when b.Contains "TranslateMarkdown" -> AF.callFunction "RefreshMarkdown" () pac.actFunction
                    //                |_-> ()
                    //            } |> Async.Start
                    //    ))
            
                    let getPropertyRA =
                        match AF.tryGetQry "FSharpStation" "PropertyRA" with 
                        | Some pqy -> fun p -> pqy.qryFunction (box p) |> unbox<Async<Result<string, ResultMessage<obj>>>>
                        | None     -> fun _ -> async { return ErrorMsg "Could not find: FSharpStation.PropertyRA" |> Error }
            
                    let setProperty   =
                        match AF.tryGetAct "FSharpStation" "setCurrentProperty" with 
                        | Some act -> fun p v -> act.actFunction |> AF.callFunction p v
                        | None     -> fun _ _ -> printfn "Could not find FSharpStation.SetCurrentProperty"
            
                    let cidO() = AF.tryGetWoW "FSharpStation" "CurrentSid" |> Option.bind View.TryGet
            
                    let ww = new WebWorker("Bolero/publish/worker.js")
                    printfn "%A" ww
                    System.Action<WorkerEvent>(fun ev -> 
                        printfn "%A" ev.Data
                        printfn "%A" ev.Data?message
                        match ev.Data?message with
                        | "markdownHtml" -> if  Some(ev.Data?sid) = cidO() then
                                                let html = (ev.Data?html)
                                                htmlV.Set html
                                                setProperty "htmlMarkdown" html
                        | _              -> ()
                    ) |> ww.SetOnMessage
            
            
                    let startMarkdownTranslate (sid:string) (v:string) = 
                        let o = JSObject()
                        [ "message", "markdownHtml"
                          "sid"    , sid
                          "text"   , v ] 
                        |> Seq.iter o.Add
                        ww.PostMessage o
            
                                         
                    let callMarkdown txt = 
                        async {
                            let!  htmlR = getPropertyRA "htmlMarkdown"
                            match htmlR with
                            | Ok b when b <> htmlV.Value -> htmlV.Set b
                            |_-> ()
                            let!  baseSnippetR = getPropertyRA "BaseSnippet"
                            match baseSnippetR, cidO() with
                            | Ok b, Some cid when b.Contains "TranslateMarkdown" -> startMarkdownTranslate cid txt
                            |_-> ()
                        } |> Async.Start
                    let callMarkdownD  = delayed 200 callMarkdown
            
                    let bindContentDoc() =
                        let mutable priorText  = ""
                        let mutable toggleText = "-"
                        AF.tryGetVar "FSharpStation" "Content"  
                        |> Option.map (fun cntV ->
                            cntV.varVar.View 
                            |> View.Map (fun txt ->
                                if txt <> priorText then
                                    callMarkdownD txt
                                    toggleText   <- match toggleText with
                                                    | @"-"  -> @"\"
                                                    | @"\"  -> @"|"
                                                    | @"|"  -> @"/"
                                                    |  _    -> @"-"
                                toggleText
                            ) |> Doc.TextView 
                        )
                        |> Option.defaultValue (h1 [] [text "Error: Could not bind to FSharpStation.Content"])
                    AF.addPlugIn {
                        AF.plgName    = "Markdown"
                        AF.plgVars    = [| AF.newVar  "html"         htmlV
                                        |]  
                        AF.plgViews   = [|
                                        |]  
                        AF.plgDocs    = [| yield  AF.newDoc  "bindContentDoc" <| lazy bindContentDoc()
                                           yield  AF.newDoc  "htmlDoc"        <| lazy Doc.BindView Doc.Verbatim htmlV.View            
                                        |]  
                        AF.plgActions = [|
                                           AF.newActF   "showHtml"     <| AF.FunAct1 ((fun msg -> msg |> unbox |> Json.Deserialize |> htmlV.Set), "htmlMarkdown")
                                        |]
                        AF.plgQueries = [|                                               
                                        |]
                    }
                    
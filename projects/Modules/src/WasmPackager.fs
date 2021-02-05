#nowarn "3242"
////-d:FSharpStation1612100328464 -d:TEE -d:WASMPACKAGER -d:WEBSHARPER -d:WsTranslatorWASM
////#cd @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\src"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Owin\lib\net40"
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
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Reactive\lib\net46\System.Reactive.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Control.Reactive\lib\net46\FSharp.Control.Reactive.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Data\lib\net461\WebSharper.Data.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\FShUIAssemblyData.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\WebSharper.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\WebSharper.Compiler.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\WebSharper.Compiler.FSharp.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\System.Reflection.Metadata.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\FSharp.Compiler.Service.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\Mono.Cecil.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\Mono.Cecil.Pdb.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\Mono.Cecil.Mdb.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Owin\lib\net40\Owin.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/projects/Modules/bin/WsCompileDll.dll"
//#nowarn "3242"
/// Root namespace for all code
//#define FSharpStation1612100328464
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
    ////#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Web.dll"
    
    #if WEBSHARPER
    #if WEBSHARPER47
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper\lib\net461"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper.UI\lib\net461"
    
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper\lib\net461\WebSharper.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper\lib\net461\WebSharper.Collections.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper\lib\net461\WebSharper.Main.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper\lib\net461\WebSharper.JQuery.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper\lib\net461\WebSharper.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper\lib\net461\WebSharper.Web.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper\lib\net461\WebSharper.Sitelets.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper\lib\net461\WebSharper.Control.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper.UI\lib\net461\WebSharper.UI.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp47\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
    #else
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
                let inline errorMsgf fmt = Printf.ksprintf ErrorMsg fmt
                let inline warningf  fmt = Printf.ksprintf Warning  fmt
                let inline infof     fmt = Printf.ksprintf Info     fmt
            
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
                
            [< AutoOpen >]
            module Monads =
                module Seq =    
                    let rtn = Seq.singleton
                    let insertO  vSO              = vSO |> Option.map(Seq.map Some) |> Option.defaultWith(fun () -> rtn None)
                    let insertR (vSR:Result<_,_>) = vSR |> function | Error m -> rtn (Error m) | Ok v -> Seq.map Ok v
                    let absorbO  vOS              = vOS |> Seq.choose id
                    let absorbR  vOS              = vOS |> Seq.choose (function Ok v -> Some v |_-> None)
                    let ofOption vO = 
                        match vO with
                        | Some v -> Seq.singleton v
                        | None   -> Seq.empty    
                
                    type SplitByOption = Exclude | IncludeFirst | IncludeSecond
                
                    let splitBy (f: 'a -> bool) opt (s: 'a seq) = //: 'a seq seq =
                        (0, s)
                        ||> Seq.mapFold(fun i a -> 
                            match f a with
                            | false         -> Some(a, i    ), i
                            | true          ->
                            (match opt with
                            | Exclude       -> None          
                            | IncludeFirst  -> Some(a, i    )
                            | IncludeSecond -> Some(a, i + 1) 
                            ), i + 1
                        )
                        |> fst
                        |> Seq.choose   id
                        |> Seq.groupBy snd
                        |> Seq.map    (snd >> Seq.map fst)
                
                /// Extensions to Async
                module Async =
                    let [< Inline >] inline rtn   v    = async.Return v
                    let [< Inline >] inline bind  f vA = async.Bind(  vA, f)
                    let [< Inline >] inline map   f    = bind (f >> rtn)
                    /// Executes f Synchronously
                    [< Inline "throw 'iterS cannot be used in JavaScript!'" >] 
                    let inline iterS (f: 'a->unit) = map f >> Async.RunSynchronously
                    /// Executes f Asynchronously
                    let [< Inline >] inline iterA f             = map f >> Async.Start
                    let apply fA vA = async {
                        let! fChild = Async.StartChild fA
                        let! vChild = Async.StartChild vA
                        let! f = fChild
                        let! v = vChild 
                        return f v 
                    }
                    let sleepThen f milliseconds = async {
                        do! Async.Sleep milliseconds
                        return f()
                    }
                    let (>>=)                              v f = bind f v
                    let traverseSeq             f           sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                                 Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq                  sq = traverseSeq id sq
                    [< Inline "throw 'traverseSeqS cannot be used in JavaScript!'" >]
                    let traverseSeqS (f: 't->Async<_>) (t: 't seq) = async {
                                                                 let! ct = Async.CancellationToken
                                                                 return seq {
                                                                     use enum = t.GetEnumerator ()
                                                                     while enum.MoveNext() do
                                                                         yield Async.RunSynchronously (f enum.Current, cancellationToken = ct) }}
                    let inline sequenceSeqS          sq = traverseSeqS id sq
                    let insertO  vAO                           = vAO |> Option.map(map Some) |> Option.defaultWith(fun () -> rtn None)
                    let insertR (vAR:Result<_,_>)              = vAR |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                
                
                module Result =
                    open Result
                
                    let errorf fmt = Printf.ksprintf Error fmt
                
                    let rtn                          = Ok
                    let join                       r = Result.bind id r
                    let flatten                    r = Result.bind id r
                    let toOption                   r = r   |> function Ok v -> Some v |       _ -> None
                    let defaultWith              f r = r   |> function Ok v ->      v | Error e -> f e
                    let defaultValue             d r = r   |> function Ok v ->      v | Error _ -> d
                    let failIfTrue               m v = if     v then m |> Error  else Ok () 
                    let failIfFalse              m v = if not v then m |> Error  else Ok () 
                    let iter                  fE f r = r   |> map  f |> defaultWith fE                                                 : unit
                    let get                        r = r   |>          defaultWith (string >> failwith)
                    let ofOption              f   vO = vO  |> Option.map Ok           |> Option.defaultWith (f >> Error)
                    let insertO                  vRO = vRO |> Option.map(map Some)    |> Option.defaultWith(fun () -> Ok None)
                    let absorbO               f  vOR = vOR |> bind (ofOption f)
                    let (>>=)                    r f = bind f r
                    let traverseSeq           f   sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                       Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq        sq = traverseSeq id sq
                        
                    
                    type Builder() =
                        member inline this.Return          x       = rtn  x
                        member inline this.ReturnFrom      x       =     (x:Result<_,_>)
                        member        this.Bind           (w , r ) = Result.bind  r w
                        member inline this.Zero           ()       = rtn ()
                        member inline this.Delay           f       = f
                        member inline this.Combine        (a, b)   = bind b a
                        member inline this.Run             f       = Ok () |> bind f
                        member this.TryWith   (body, handler     ) = try body() with e -> handler     e
                        member this.TryFinally(body, compensation) = try body() finally   compensation()
                        member this.Using     (disposable, body  ) = using (disposable:#System.IDisposable) body
                        member this.While(guard, body) =
                            let rec whileLoop guard body =
                                if guard() then body() |> bind (fun () -> whileLoop guard body)
                                else rtn   ()
                            whileLoop guard body
                        member this.For(sequence:seq<_>, body) =
                            this.Using(sequence.GetEnumerator(),fun enum -> 
                                this.While(enum.MoveNext, 
                                    this.Delay(fun () -> body enum.Current)))
                                    
                    let result = Builder()
                    
                    module Operators =
                        let inline (|>>) v f   = map   f v
                        let inline (>>=) v f   = bind  f v
                        let inline (>>>) f g v = f v |>> g
                        let inline (>=>) f g v = f v >>= g
                        let inline rtn   v     = rtn    v
                        let result = result
                
                
                    
                    let freeMessage                r = r   |> function Ok v -> Ok v   | Error e -> ResultMessage.freeMessage e |> Error
                    /// bind version that protects against exceptions
                    let bindP                 f    r = match r with
                                                        | Ok   v -> try   f v
                                                                    with  e -> ExceptMsg (e.Message, e.StackTrace) |> Error
                                                        | Error e ->      e                                        |> Error
                    /// map version that protects against exceptions
                    let inline mapP           f    m = bindP (f >> rtn) m            
                    let iterP                 fE f r = r   |> mapP f |> defaultWith fE                                                 : unit    
                    
                    type BuilderP() =
                        member inline this.Return          x       = rtn  x
                        member inline this.ReturnFrom      x       =     (x:Result<_,_>)
                        member        this.Bind           (w , r ) = Result.bind  r w
                        member inline this.Zero           ()       = rtn ()
                        member inline this.Delay           f       = f
                        member inline this.Combine        (a, b)   = bind b a
                        member inline this.Run             f       = Ok () |> bindP f
                        member this.TryWith   (body, handler     ) = try body() with e -> handler     e
                        member this.TryFinally(body, compensation) = try body() finally   compensation()
                        member this.Using     (disposable, body  ) = using (disposable:#System.IDisposable) body
                        member this.While(guard, body) =
                            let rec whileLoop guard body =
                                if guard() then body() |> bind (fun () -> whileLoop guard body)
                                else rtn   ()
                            whileLoop guard body
                        member this.For(sequence:seq<_>, body) =
                            this.Using(sequence.GetEnumerator(),fun enum -> 
                                this.While(enum.MoveNext, 
                                    this.Delay(fun () -> body enum.Current)))
                                    
                    let resultP = BuilderP()
                    
                    
                type AsyncResult<'v, 'm> = Async<Result<'v, 'm>>
                
                /// A computation expression to build an Async<Result<'ok, 'error>> value
                module AsyncResult =
                    let mapError fE v  = v |> Async.map (Result.mapError fE)
                    let freeMessage v  = v |> Async.map  Result.freeMessage
                
                    let rtn        v   = async.Return(Ok v  )
                    let rtnR       vR  = async.Return    vR
                    let iterS fE f vRA = Async.iterS (Result.iter fE f) vRA
                    let iterA fE f vRA = Async.iterA (Result.iter fE f) vRA
                    let bind  fRA  vRA = async { 
                        let! vR       = vRA
                        match   vR with
                        | Ok    v -> return! fRA v
                        | Error m -> return  Error m 
                    }
                    let bindP (fRA:'a -> Async<Result<'b,ResultMessage<'c>>>)  (vRA: Async<Result<'a,ResultMessage<'c>>>) : Async<Result<'b,ResultMessage<'c>>>= async {
                        try 
                            let!  vR = vRA
                            match vR with
                            | Ok    v -> return! fRA   v
                            | Error m -> return  Error m
                        with  e -> return  ExceptMsg (e.Message, e.StackTrace) |> Error
                    }
                    let inline map  f m = bind  (f >> rtn) m            
                    let inline mapP f m = bindP (f >> rtn) m
                    let inline getResult (v:AsyncResult<_,_>) = v |> Async.map Result.Ok
                    let rec whileLoop cond fRA =
                        if   cond () 
                        then fRA  () |> bind (fun () -> whileLoop cond fRA)
                        else rtn  ()
                    let (>>=)                       v f = bind f v
                    let        traverseSeq         f sq = let folder tail head = f head >>= (fun h -> tail >>= (fun t -> Seq.append t (Seq.singleton h) |> rtn))
                                                          Seq.fold folder  (rtn Seq.empty) sq
                    let inline sequenceSeq           sq = traverseSeq id sq
                    /// uses Async.RunSynchronously
                    /// handleError - handles individual error messages. true = continue, false = stop
                    [< Inline "throw 'traverseSeqS cannot be used in JavaScript!'" >]
                    let traverseSeqS (f: 't->AsyncResult<'u, _>) handleError (t: 't seq)  = async {
                        let! ct = Async.CancellationToken
                        return seq {
                                use enum = t.GetEnumerator ()
                                let mutable stillOk = true
                                while enum.MoveNext() do
                                    match Async.RunSynchronously (f enum.Current, cancellationToken = ct) with
                                    | Ok v -> yield v
                                    | Error msg -> stillOk <- handleError msg
                                } 
                            |> Ok
                        }
                    let inline sequenceSeqS          sq = traverseSeqS id sq
                    let insertO   vRAO                  = vRAO |> Option.map(map Some) |> Option.defaultWith(fun () -> rtn None)
                    let insertR ( vRAR:Result<_,_>)     = vRAR |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                    let absorbR   vRRA                  = vRRA |> Async.map  Result.join
                    let absorbO f vORA                  = vORA |> Async.map (Result.absorbO  f)
                
                    let tryWith    hnd (fRA:unit -> AsyncResult<_,_>) : Async<Result<'a  , 'm>> = async { try return! fRA() with e -> return! hnd e  }
                    let tryFinally fn  (fRA:unit -> AsyncResult<_,_>) : Async<Result<'a  , 'm>> = async { try return! fRA() finally   fn  () }
                
                
                type AsyncResultBuilder() =
                    member __.ReturnFrom vRA        : Async<Result<'v  , 'm>> =                       vRA
                    member __.ReturnFrom vR         : Async<Result<'v  , 'm>> = AsyncResult.rtnR      vR
                    member __.Return     v          : Async<Result<'v  , 'm>> = AsyncResult.rtn       v  
                    member __.Zero       ()         : Async<Result<unit, 'm>> = AsyncResult.rtn       () 
                    member __.Bind      (vRA,  fRA) : Async<Result<'b  , 'm>> = AsyncResult.bind fRA  vRA
                    member __.Bind      (vR ,  fRA) : Async<Result<'b  , 'm>> = AsyncResult.bind fRA (vR  |> AsyncResult.rtnR)
                    member __.Combine   (vRA,  fRA) : Async<Result<'b  , 'm>> = AsyncResult.bind fRA  vRA
                    member __.Combine   (vR ,  fRA) : Async<Result<'b  , 'm>> = AsyncResult.bind fRA (vR  |> AsyncResult.rtnR)
                    member __.Delay            fRA                            = fRA
                    member __.Run              fRA                            = AsyncResult.rtn () |> AsyncResult.bind fRA
                    member __.TryWith   (fRA , hnd) : Async<Result<'a  , 'm>> = async { try return! fRA() with e -> return! hnd e  }
                    member __.TryFinally(fRA , fn ) : Async<Result<'a  , 'm>> = async { try return! fRA() finally   fn  () }
                    member __.Using(resource , fRA) : Async<Result<'a  , 'm>> = async.Using(resource,       fRA)
                    member __.While   (guard , fRA) : Async<Result<unit, 'a>> = AsyncResult.whileLoop guard fRA 
                    member th.For  (s: 'a seq, fRA) : Async<Result<unit, 'b>> = th.Using(s.GetEnumerator (), fun enum ->
                                                                                    th.While(enum.MoveNext,
                                                                                      th.Delay(fun () -> fRA enum.Current)))
                let asyncResult = AsyncResultBuilder()
                
                type AsyncResultBuilderP() =
                    member __.ReturnFrom vRA        : Async<Result<'v  , ResultMessage<_>>> =                       vRA
                    member __.ReturnFrom vR         : Async<Result<'v  , ResultMessage<_>>> = AsyncResult.rtnR      vR
                    member __.Return     v          : Async<Result<'v  , ResultMessage<_>>> = AsyncResult.rtn       v  
                    member __.Zero       ()         : Async<Result<unit, ResultMessage<_>>> = AsyncResult.rtn       () 
                    member __.Bind      (vRA,  fRA) : Async<Result<'b  , ResultMessage<_>>> = AsyncResult.bindP fRA  vRA
                    member __.Bind      (vR ,  fRA) : Async<Result<'b  , ResultMessage<_>>> = AsyncResult.bindP fRA (vR  |> AsyncResult.rtnR)
                    member __.Combine   (vRA,  fRA) : Async<Result<'b  , ResultMessage<_>>> = AsyncResult.bindP fRA  vRA
                    member __.Combine   (vR ,  fRA) : Async<Result<'b  , ResultMessage<_>>> = AsyncResult.bindP fRA (vR  |> AsyncResult.rtnR)
                    member __.Delay            fRA                                          = fRA
                    member __.Run              fRA                                          = AsyncResult.rtn () |> AsyncResult.bindP fRA
                    member __.TryWith   (fRA , hnd) : Async<Result<'a  , ResultMessage<_>>> = async { return! try fRA() with e -> hnd e  }
                    member __.TryFinally(fRA , fn ) : Async<Result<'a  , ResultMessage<_>>> = async { return! try fRA() finally   fn  () }
                    member __.Using(resource , fRA) : Async<Result<'a  , ResultMessage<_>>> = async.Using(resource,       fRA)
                    member __.While   (guard , fRA) : Async<Result<unit, ResultMessage<_>>> = AsyncResult.whileLoop guard fRA 
                    member th.For  (s: 'a seq, fRA) : Async<Result<unit, ResultMessage<_>>> = th.Using(s.GetEnumerator (), fun enum ->
                                                                                              th.While(enum.MoveNext,
                                                                                                th.Delay(fun () -> fRA enum.Current)))
                let asyncResultP = AsyncResultBuilderP()
                
                [<AutoOpen>]
                module Extensions =      
                    // Having Async<_> members as extensions gives them lower priority in
                    // overload resolution between Async<_> and Async<Result<_,_>>.
                    type AsyncResultBuilder with
                      member __.ReturnFrom (vA: Async<'a>     ) : Async<Result<'a, 'b>> =                       Async.map Ok vA
                      member __.Bind       (vA: Async<'a>, fRA) : Async<Result<'b, 'c>> = AsyncResult.bind fRA (Async.map Ok vA)
                      member __.Combine    (vA: Async<'a>, fRA) : Async<Result<'b, 'c>> = AsyncResult.bind fRA (Async.map Ok vA)
                
                    type AsyncResultBuilderP with
                      member __.ReturnFrom (vA: Async<'a>     ) : Async<Result<'a, ResultMessage<_>>> =                        Async.map Ok vA
                      member __.Bind       (vA: Async<'a>, fRA) : Async<Result<'b, ResultMessage<_>>> = AsyncResult.bindP  fRA (Async.map Ok vA)
                      member __.Combine    (vA: Async<'a>, fRA) : Async<Result<'b, ResultMessage<_>>> = AsyncResult.bindP fRA (Async.map Ok vA)
                
                
                
        /// Essentials that cannot run in Javascript (WebSharper)
        [< AutoOpen >]
        module LibraryNoJS =
            [< AutoOpen >]
            module Regex =
                open System.Text.RegularExpressions
            
                let (|Regex|_|) pattern input =
                    if input = null then None else
                    try 
                        let m = Regex.Match(input, pattern)
                        if m.Success then Some(List.tail [ for g in m.Groups -> g.Value ])
                        else None
                    with e -> None
            
                let (|Regexs|) pattern input =
                    if input = null then [| |] else
                    try 
                        let ms = Regex.Matches(input, pattern)
                        [| for m in ms do yield (List.tail [ for g in m.Groups -> g.Value ]) |] 
                    with e -> [| |]
            
                module p =
            
                    let lit(v:string) = 
                        v 
                        |> Seq.collect (
                            function
                            | '_'                                -> [       '_' ]
                            | c when System.Char.IsSymbol      c -> [ '\\' ; c  ]  
                            | c when System.Char.IsPunctuation c -> [ '\\' ; c  ] 
                            | c                                  -> [        c  ]
                        ) 
                        |> Seq.toArray 
                        |> fun ar ->  new System.String(ar)
                    let cr            = @"\r"
                    let nl            = @"\n"
                    let anychar       =  "."
                    let tab           = @"\t"
                    let blank         = @"\s"
                    let noblank       = @"\S"
                    let capt          = sprintf "(%s)"
                    let nocapt        = sprintf "(?:%s)"
                    let opt           = nocapt >> sprintf "%s?"
                    module g =
                        let inline anything mny        = mny anychar
                        let inline blanks   mny        = mny blank
                        let inline noblanks mny        = mny noblank
                        let inline spaceaft mny  x     = x + blanks mny
                        let inline listof1  mny0 x sep = x + mny0(sep + x)
            
                    module e =
                        let inline many0 a = nocapt a + "*"
                        let inline many1 a = nocapt a + "+"
            
                    module e1 =
                        let many                = e.many1
                        let anything            = g.anything  many
                        let blanks              = g.blanks    many
                        let noblanks            = g.noblanks  many
                        let spaceaft            = g.spaceaft  many
                        let inline listof x sep = g.listof1 e.many0 x sep
            
                    module e0 =
                        let many                = e.many0
                        let anything            = g.anything many
                        let blanks              = g.blanks   many
                        let noblanks            = g.noblanks many
                        let spaceaft            = g.spaceaft many
                        let inline listof x sep = e1.listof x sep |> opt
            
                    module l =
                        let many0 a   = e.many0 a + "?"
                        let many1 a   = e.many1 a + "?"
            
                    module l1 =
                        let many                = l.many1
                        let anything            = g.anything  many
                        let blanks              = g.blanks    many
                        let noblanks            = g.noblanks  many
                        let spaceaft            = g.spaceaft  many
                        let inline listof x sep = g.listof1 l.many0 x sep
            
                    module l0 =
                        let many                = l.many0
                        let anything            = g.anything many
                        let blanks              = g.blanks   many
                        let noblanks            = g.noblanks many
                        let spaceaft            = g.spaceaft many
                        let inline listof x sep = l1.listof x sep |> opt
            
                    let repl    n = Seq.replicate n >> String.concat ""
                    let either patterns = patterns |> String.concat "|" |> nocapt
                    let word      = sprintf "\\b%s\\b"
                    let oneof     = sprintf "[%s]"
                    let noneof    = sprintf "[^%s]"
                    let caseins   = sprintf "(?i)%s(?-i)"
            
                    let multiline  = either [ cr ; nl ; anychar ] |> l.many0
                    let letter     = oneof "_a-zA-Z"
                    let digit      = oneof "0-9"
                    let letters    = e.many1 letter
                    let digits     = e.many1 digit
                    let ident      = letter + (either [letter ; digit] |> l.many0) |> word
                    let dottedid   = e1.listof ident (e0.spaceaft "\.")
                    let typename   = dottedid + opt (@"<" + e1.listof dottedid (e0.spaceaft ",") + "\>")
                    /// match whole string
                    let full       = sprintf "^%s$"
            
                    let regmatch regex = function Regex regex ms -> Some ms |_-> None
            
                module r =
                    open p
            
                    let remove patterns = p.either patterns, ""
            
                    let tabs     = p.tab                , "    "
                    let comments = @"\/\/" + e1.anything, "\n"
            
                    let regexReplaceFunc f (regex:string) (input:string) =
                        System.Text.RegularExpressions
                            .Regex(regex)
                            .Replace(input, MatchEvaluator(fun m -> f m.Value))
            
                    let regexReplaceGroups f (regex:string) (input:string) =
                        System.Text.RegularExpressions
                            .Regex(regex)
                            .Replace(input, MatchEvaluator(fun m -> [ for g in m.Groups -> g.Value ] |> f))
            
                    let regexReplace (regex:string) (repl:string) (input:string) = 
                        System.Text.RegularExpressions
                            .Regex(regex)
                            .Replace(input, repl)
            
                    let replaceToF (regex, repl) = regexReplace regex repl
                    let replacesToFs rs = rs |> Seq.map replaceToF
                    /// a replace function for multiple replacements applied in sequence
                    let replace0 repls inp = repls |> Seq.fold (fun txt (regex, repl) -> regexReplace txt regex repl) inp
                    /// same as replace0: a function for multiple replacements
                    let replace1 v = replacesToFs v |> Seq.reduce (>>)
            
                    /// find a section (like: module XXX = ..) and capture its name, make replacements using that sections name
                    let byLine init st f (inp:string) =
                        inp.Split '\n'
                        |> Array.mapFold (fun md ln -> 
                            match st ln with
                            | Some nm -> ln     , nm
                            |_        -> f md ln, md
                        ) init
                        |> fst
                        |> String.concat "\n"
            
            
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Reactive\lib\net46\System.Reactive.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Control.Reactive\lib\net46\FSharp.Control.Reactive.dll"
            module RunProcess =
                open System.Diagnostics
                open System.Text
                open FSharp.Control.Reactive
                open FSharp.Control.Reactive.WaitHandle
                open FSharp.Control
            
                let startProcess p ops =
                    let procStart   = ProcessStartInfo(p, ops)
                    let proc        = new Process(StartInfo = procStart)
                    proc.Start() 
                
                let startProcessDir p ops dir =
                    let procStart   = ProcessStartInfo(p, ops, WorkingDirectory = dir)
                    let proc        = new Process(StartInfo = procStart)
                    proc.Start() 
                
                type ShellResponse =
                    | ShellDidNotStart 
                    | ShellExit                  of int * stdout: string * stderr:string
                    | ShellNoExit                of       stdout: string * stderr:string
                    | ShellCrashed               of       stdout: string * stderr:string
                    with 
                    override msg.ToString() = 
                        match msg with
                        | ShellDidNotStart                 -> [ "Shell did not start" ]
                        | ShellExit        (cod, out, err) -> [ if cod <> 0 then yield sprintf "exit(%d)" cod
                                                                yield                          out ; if err <> "" then yield "ERROR:" ; yield err ]
                        | ShellCrashed     (     out, err) -> [ yield "Shell crashed!" ; yield out ; if err <> "" then yield "ERROR:" ; yield err ]
                        | ShellNoExit      (     out, err) -> [ yield                          out ; if err <> "" then yield "ERROR:" ; yield err ]
                        |> String.concat "\n"
                
                type ShellEx(startInfo: ProcessStartInfo, ?outHndl, ?errHndl, ?priorityClass) =
                    let bufferOutput                      = new StringBuilder()
                    let bufferError                       = new StringBuilder()
                    let append  (sb: StringBuilder) txt   = sb.Append(txt + "\n")                       |> ignore
                    let consume (sb: StringBuilder)       = sb.ToString() |>! (fun _ -> sb.Clear()      |> ignore)
                    let dataHandler handler               = DataReceivedEventHandler(fun sender args -> try handler args.Data with _ -> ())
                    let outputHandler                     = append bufferOutput |> dataHandler
                    let errorHandler                      = append bufferError  |> dataHandler
                    do  startInfo.RedirectStandardInput  <- true
                        startInfo.RedirectStandardOutput <- true
                        startInfo.RedirectStandardError  <- true
                        startInfo.UseShellExecute        <- false
                    let proc                              = new Process(
                                                                StartInfo           = startInfo
                                                              , EnableRaisingEvents = true     )
                    do  outputHandler                    |>             proc.OutputDataReceived.AddHandler
                        errorHandler                     |>             proc.ErrorDataReceived .AddHandler
                        Option.map dataHandler outHndl   |> Option.iter proc.OutputDataReceived.AddHandler
                        Option.map dataHandler errHndl   |> Option.iter proc.ErrorDataReceived .AddHandler
                //        proc.Exited            .AddHandler(System.EventHandler     (fun sender args -> try proc.Close()                                    with _ -> () ))
                      
                    new          (program, args, ?priorityClass) = let startInfo                     = new ProcessStartInfo()
                                                                   do  startInfo.FileName           <- program
                                                                       startInfo.Arguments          <- args
                                                                   new ShellEx(startInfo, ?priorityClass = priorityClass)
                    member ____.Start                         () = let r = proc.Start() 
                                                                   priorityClass |> Option.iter (fun p -> proc.PriorityClass <- p)
                                                                   proc.BeginOutputReadLine()
                                                                   proc.BeginErrorReadLine ()
                                                                   r
                    member ____.WaitToFinish                  () = proc.WaitForExit()
                                                                   let    output  = (consume bufferOutput).Trim()
                                                                   let    error   = (consume bufferError ).Trim()
                                                                   ((if proc.HasExited then proc.ExitCode else -99999), output, error)
                    member ____.WaitForInputIdle              () = proc.WaitForInputIdle()
                    member this.StartAndWait                  () = let _started = this.Start()
                                                                   this.WaitToFinish()
                    member this.StartAndWaitS                 () = this.StartAndWait()
                                                                   |>! fun _ -> (this :> System.IDisposable).Dispose()
                                                                   |> ShellExit
                    member this.stdOutErr2Result exit out errs   = if exit <> 0
                                                                   then Result.Error <| ErrorMsg(
                                                                           [| if out  <> ""              then yield "stdout: " + out           
                                                                              if errs <> ""              then yield errs                       
                                                                              if errs  = "" || exit <> 1 then yield sprintf "ExitCode: %d" exit
                                                                           |] |> String.concat "\n")
                                                                   else Result.Ok (out, errs)
                    member this.StartAndWaitR                 () = let r = this.StartAndWait()
                                                                   (this :> System.IDisposable).Dispose()
                                                                   r |||> this.stdOutErr2Result
                    member this.RunToFinish                   () = this.StartAndWaitS().ToString()
                    member this.RunOutputToFileR            file = proc.OutputDataReceived.RemoveHandler outputHandler
                                                                   use stream  = new System.IO.FileStream(file, System.IO.FileMode.Create)
                                                                   let _started = proc.Start() 
                                                                   proc.BeginErrorReadLine ()
                                                                   proc.StandardOutput.BaseStream.CopyTo stream
                                                                   this.WaitToFinish()
                                                                   |> ShellExit
                    member this.RunOutputToFile             file = this.RunOutputToFileR file
                                                                   |> fun v -> v.ToString() 
                    member ____.Send                (txt:string) = proc.StandardInput.WriteLine txt
                    member ____.Output                        () = consume bufferOutput
                    member ____.Error                         () = consume bufferError
                    member ____.Response(out:string, err:string) = match out.Trim(), err.Trim() with
                                                                   | good, ""  -> Result.Ok    <| good               
                                                                   | good, bad -> Result.Error <| Message(ShellNoExit(good, bad))
                    member this.Response                      () = this.Response(this.Output(), this.Error())
                    member this.SendAndWait (send, wait, ?onErr) =
                        let waitOnError = defaultArg onErr false
                        let obsWait   = if waitOnError then proc.ErrorDataReceived else proc.OutputDataReceived
                                          |> Observable.choose (fun evArgs -> try evArgs.Data |> (fun v -> if v.Contains wait then Some <| Result.Ok v else None) with _ -> None)
                        let obsAll    = Observable.merge obsWait  (Event.map (fun _ -> Result.Error <| Message (ShellCrashed(this.Output(), this.Error()))) proc.Exited)
                        asyncResult {
                            //do! Result.tryProtection()
                            async { 
                                do!    Async.Sleep 20 
                                this.Send send        } |> Async.Start
                            let!  waited = Observable.wait (obsAll |> Observable.take 1) 
                            do!   Async.Sleep 200
                            return! if waitOnError
                                    then this.Response(this.Output(), this.Error() |> fun msg -> msg.Split([| waited |], System.StringSplitOptions.None) |> Array.head)
                                    else this.Response()
                        }
                    member ____.HasExited = try proc.HasExited with _ -> true
                    member ____.Abort()   = try proc.Kill   () with _ -> ()
                    member ____.Process   = proc
                    interface System.IDisposable with
                        member ____.Dispose () =
                            try proc.Close  ()
                                proc.Kill   ()
                                proc.Dispose() 
                            with _ ->       ()
                
                
                let runAndWaitS p ops =
                    let procStart   = ProcessStartInfo(p, ops)
                    let shell       = new ShellEx(procStart)
                    shell.StartAndWaitS() 
                
                let runToFinish p ops =
                    let procStart   = ProcessStartInfo(p, ops)
                    let shell       = new ShellEx(procStart, printfn "%s", eprintfn "%s")
                    shell.RunToFinish() 
                
                let runOutputToFile p ops file =
                    let procStart   = ProcessStartInfo(p, ops)
                    let shell       = new ShellEx(procStart)
                    shell.RunOutputToFile file 
                
                
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER 
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Data\lib\net461\WebSharper.Data.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.dll"
            
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\FShUIAssemblyData.dll"
            
            [< JavaScriptExport >]
            module FShUI_AssemblyData2 =
                open FsRoot.LibraryJS.FShUI_AssemblyData
                open FSharp.Data
            
                type AsmJson = JsonProvider<"""
                    { "asName"            : "ss"
                    , "dependencies"      : ["ref1"]
                    , "resources"         : ["res"]
                    , "modules"           : 
                        [{ "moName"        : "mm"
                        , "methods"       : 
                            [{ "meName"    : "me"
                            , "isField"   : 1
                            , "type"      : 
                                { "tName" : "tn"
                                , "asm"   : "asm"
                                }
                            , "parms" :
                                [{ "tName" : "tn"
                                , "asm"   : "asm"
                                }]
                            }]
                        }]
                    , "jsModules" :
                                [{ "jsName" : "jn"
                                , "code"   : "code"
                                }]
                    }""", RootName="asm">
            
                [< JavaScript false ; AutoOpen >]
                module CreateJson =
                    let typeToJson (ty: TypeRef) =
                        AsmJson.Type(   tName        = ty.name.Id,
                                        asm          = ty.asm .Id
                        )
            
                    let jsToJson   (js: string, code: JSCode) =
                        AsmJson.JsModule(jsName      = js,
                                            code        = code.Id
                        )
            
                    let methodToJson (me: MethodDef) =
                        AsmJson.Method( meName       = me.name.Id,
                                        isField      = (if me.isField then 1 else 0           ),
                                        ``type``     = ( typeToJson me.retType                ),
                                        parms        = (me.parms |> Array.map typeToJson      ) 
                        )
            
                    let moduleToJson (md: ModuleDef) =
                        AsmJson.Module( moName       = md.name.Id,
                                        methods      = (md.methods |> Array.map methodToJson)
                        )
            
                    let asmToJson (asmDef:AssemblyDef) =
                        AsmJson.Asm(    asName       = asmDef.name      .Id,
                                        jsModules    = (asmDef.javaScripts  |> Array.map jsToJson ),
                                        dependencies = (asmDef.dependencies |> Array.map (fun r -> r.Id)),
                                        resources    = (asmDef.resources    |> Array.map (fun r -> r.Id)),
                                        modules      = (asmDef.modules      |> Array.map moduleToJson)
                        )
            
                    [< JavaScript false >]
                    let writeAsm fname (asm:AssemblyDef) =
                        System.IO.File.WriteAllText(fname, (asmToJson asm).JsonValue.ToString())
                        
                    [< JavaScript false >]
                    let convertDll fin fout = CreateAsm.readDll fin |> writeAsm fout
            
            (*
            
            module Test =
                open FsRoot
                open FShUI_AssemblyData.CreateAsm
                open FShUI_AssemblyData2
            
                let PathOut = @"D:\Abe\CIPHERWorkspace\FSharpStation\website\EPFileX\Assemblies\"
                let Folder  = "/EPFileX/Assemblies/"
            
                let dlls = 
                    [
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\FShUIAssemblyData.dll"
                        //@"D:\Abe\CIPHERWorkspace\FSharpStation\website\EPFileX\Assemblies\Covid.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\WsTranslatorLoader.dll" //|> readDll |> printfn "%A"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\bin\testing.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\WsTranslator.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Main.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Web.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Control.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Data\lib\net461\WebSharper.Data.dll"
                    ]
                    //|> Seq.take 1
            
                dlls
                |> Seq.iter (fun dll ->
                    let fn = System.IO.Path.GetFileNameWithoutExtension dll
                    convertDll dll (PathOut + fn + ".asm")
                )
            
            //*)
            
    
    //#cd @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\src"
    
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Owin\lib\net40"
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
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Reactive\lib\net46\System.Reactive.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Control.Reactive\lib\net46\FSharp.Control.Reactive.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\WebSharper.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\WebSharper.Compiler.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\WebSharper.Compiler.FSharp.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\System.Reflection.Metadata.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\FSharp.Compiler.Service.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\Mono.Cecil.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\Mono.Cecil.Pdb.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\Mono.Cecil.Mdb.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Owin\lib\net40\Owin.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation/projects/Modules/bin/WsCompileDll.dll"
    //#define WASMPACKAGER
    
    //#cd @"..\projects\Modules\src"
    //#define WsTranslatorWASM
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\FShUIAssemblyData.dll"
    
    
    module WasmPackager =
        open FsRoot
        
        module Fusion = FusionAsyncM
        open System.IO
        open Fusion
        open CommArgCollection
    
        type ExecMode = Interp  | Aot | AotInterp
        type CopyMode = Always  | IfNewer
        type LinkMode = SDKOnly | All 
    
        open Regex
    
        let toUnix0 =
            let convertDrive = function [ _ ; (l:string) ] -> sprintf "/mnt/%s" (l.ToLower()) | v ->failwithf "could no convert %A" v
            p.capt p.letter + p.lit ":"  |> r.regexReplaceGroups convertDrive
            >> r.replace1 [ p.lit @"\", "/" ]
    
        let mutable toUnix1 = id
    
        let toUnix v = toUnix1 v
    
        let flagArg   arg v = if v then "--" + arg else ""
        let boolArg   arg v = sprintf "--%s%s" (if v then "" else "no-") arg
        let stringArg arg v = if v <> "" then sprintf "--%s=%s" arg v else ""
        let fileArg   arg v = if v <> "" then sprintf "--%s=%s" arg (toUnix v) else ""
        let filesArg  arg v = v |> List.map Path.GetFileNameWithoutExtension |> String.concat "," |> stringArg arg
        let idArg     arg v = v
    
        let argExecMode  = 
            function 
            | Interp    -> "" 
            | Aot       -> "--aot"
            | AotInterp -> "--aot-interp"
        let argLinkMode  = 
            function 
            | SDKOnly -> "sdkonly" 
            | All     -> "all"     
            >> stringArg "link-mode"
        let  argCopyMode  =
            function
            | Always  -> "always"
            | IfNewer -> "ifnewer"
            >> stringArg "copy"
    
        let wpkPackagerDir    = CommArg.New("WasmSdk"        , true , sprintf "%s/packager.exe" >> toUnix  ) // location of packager.exe
    
        let wpkDll            = CommArg.New("Dll"            , false, sprintf   "%s"            >> toUnix  ) // Include foo.dll as one of the root assemblies
        let wpkSearchPath     = CommArg.New("search-path"    , false, fileArg   "search-path"              ) // search-path=x Add specified path 'x' to list of paths used to resolve assemblies
        let wpkNativeLib      = CommArg.New("native-lib"     , false, fileArg   "native-lib"               ) // Link the native library 'x' into the final executable.
    
        /// this need to be files inside the builddir
        let wpkPreloadFile    = CommArg.New("preload-file"   , false, fileArg   "preload-file"             ) // Preloads the file or directory 'x' into the virtual filesystem.
        let wpkEmbedFile      = CommArg.New("embed-file"     , false, fileArg   "embed-file"               ) // Embeds the file or directory 'x' into the virtual filesystem.    
    
    
        let wpkBuildDir       = CommArg.New("builddir"       , true , fileArg   "builddir"                 )
        let wpkHelp           = CommArg.New("help"           , true , flagArg   "help"                     ) // Show command arguments
        let wpkExecMode       = CommArg.New("execMode"       , true , argExecMode                          ) //  
        let wpkPrefix         = CommArg.New("prefix"         , true , stringArg "prefix"                   ) // Set the input assembly prefix to 'x' (default to the current directory )
        let wpkOut            = CommArg.New("wpkOut"         , true , fileArg   "out"                      ) // out           Set the output directory to 'x' (default to the current directory )
        let wpkMonoSdkdir     = CommArg.New("mono-sdkdir"    , true , fileArg   "mono-sdkdir"              ) // mono-sdkdir=x Set the mono sdk directory to 'x'
        let wpkEmscriptSdkdir = CommArg.New("emscript-sdkdir", true , fileArg   "emscripten-sdkdir"        ) // mono-sdkdir=x Set the mono sdk directory to 'x'
        let wpkDeploy         = CommArg.New("deploy"         , true , fileArg   "deploy"                   ) // deploy        Set the deploy prefix to 'x' (default to 'managed'  )
        let wpkVfs            = CommArg.New("vfs"            , true , fileArg   "vfs"                      ) // vfs           Set the VFS prefix to 'x' (default to 'managed'  )
        let wpkTemplate       = CommArg.New("template"       , true , stringArg "template"                 ) // template      Set the template name to  'x' (default to 'runtime.js'       )
        let wpkAsset          = CommArg.New("asset"          , true , fileArg   "asset"                    ) // asset         Add specified asset 'x' to list of assets to be copied
        let wpkCopy           = CommArg.New("copy"           , true , argCopyMode                          ) // copy=always|ifnewer        Set the type of copy to perform.
        let wpkProfile        = CommArg.New("profile"        , true , stringArg "profile"                  ) // profile       Enable the 'x' mono profiler.
        let wpkAotAssemblies  = CommArg.New("aot-assemblies" , true , filesArg  "aot-assemblies"           ) // List of assemblies to AOT in AOT+INTERP mode.
        let wpkLinkMode       = CommArg.New("link-mode"      , true , argLinkMode                          ) // 'sdkonly' only link the Core libraries  (default sdkonly) 'all' link Core and User assemblies.
        let wpkPinvokeLibs    = CommArg.New("pinvoke-libs"   , true , filesArg  "pinvoke-libs"             ) // DllImport libraries used.
        let wpkDebug          = CommArg.New("debug"          , true , boolArg   "debug"                    ) // (enable c# debugging) type: bool  default: false
        let wpkDebugrt        = CommArg.New("debugrt"        , true , boolArg   "debugrt"                  ) // (enable debug runtime) type: bool  default: false
        let wpkLinker         = CommArg.New("linker"         , true , boolArg   "linker"                   ) // (enable the linker) type: bool  default: false
        let wpkBinding        = CommArg.New("binding"        , true , boolArg   "binding"                  ) // (enable the binding engine) type: bool  default: true
        let wpkLinkIcalls     = CommArg.New("link-icalls"    , true , boolArg   "link-icalls"              ) // (link away unused icalls) type: bool  default: false
        let wpkIlStrip        = CommArg.New("il-strip"       , true , boolArg   "il-strip"                 ) // (strip IL code from assemblies in AOT mode) type: bool  default: true
        let wpkLinkerVerbose  = CommArg.New("linker-verbose" , true , boolArg   "linker-verbose"           ) // (set verbose option on linker) type: bool  default: false
        let wpkZlib           = CommArg.New("zlib"           , true , boolArg   "zlib"                     ) // (enable the use of zlib for System.IO.Compression support) type: bool  default: false
        let wpkEnableFs       = CommArg.New("enable-fs"      , true , boolArg   "enable-fs"                ) // (enable filesystem support —through Emscripten's file_packager.py in a later phase) type: bool  default: false
        let wpkThreads        = CommArg.New("threads"        , true , boolArg   "threads"                  ) // (enable threads) type: bool  default: false    
        let wpkDynamicRuntime = CommArg.New("dynamic-runtime", true , boolArg   "dynamic-runtime"          ) // (enable dynamic runtime (support for Emscripten's dlopen)) type: bool  default: false
        let wpkNativeStrip    = CommArg.New("native-strip"   , true , boolArg   "native-strip"             ) // (strip final executable) type: bool  default: true
        let wpkSimd           = CommArg.New("simd"           , true , boolArg   "simd"                     ) // (enable SIMD support) type: bool  default: false
        let wpkLinkerExcl     = CommArg.New("linker-excl"    , true , boolArg   "linker-exclude-deserialization" ) // (Link out .NET deserialization support) type: bool  default: true
        let wpkCollation      = CommArg.New("collation"      , true , boolArg   "collation"                ) // (enable unicode collation support) type: bool  default: false
    
        let wpkConvertToUnix  = CommArg.New("toUnix"         , true , flagArg   "toUnix"                   ) // convert file names to unix
    
        let wpkPreCommand     = CommArg.New("preCmd"         , false, idArg     "preCmd"                   ) // command to be executed before
        let wpkPostCommand    = CommArg.New("postCmd"        , false, idArg     "postCmd"                  ) // command to be executed before
        
    
        let wpkIds = Set [
            //wpkPackagerDir   .CommArg.cargId DO NOT include this parameter as a parameter for packager
            // wpkConvertToUnix
            wpkDll           .CommArg.cargId
            wpkSearchPath    .CommArg.cargId
            wpkNativeLib     .CommArg.cargId
            wpkPreloadFile   .CommArg.cargId
            wpkEmbedFile     .CommArg.cargId
            wpkHelp          .CommArg.cargId
            wpkExecMode      .CommArg.cargId
            wpkPrefix        .CommArg.cargId
            wpkOut           .CommArg.cargId
            wpkMonoSdkdir    .CommArg.cargId
            wpkEmscriptSdkdir.CommArg.cargId
            wpkDeploy        .CommArg.cargId
            wpkVfs           .CommArg.cargId
            wpkTemplate      .CommArg.cargId
            wpkAsset         .CommArg.cargId
            wpkCopy          .CommArg.cargId
            wpkProfile       .CommArg.cargId
            wpkAotAssemblies .CommArg.cargId
            wpkLinkMode      .CommArg.cargId
            wpkPinvokeLibs   .CommArg.cargId
            wpkDebug         .CommArg.cargId
            wpkDebugrt       .CommArg.cargId
            wpkLinker        .CommArg.cargId
            wpkBinding       .CommArg.cargId
            wpkLinkIcalls    .CommArg.cargId
            wpkIlStrip       .CommArg.cargId
            wpkLinkerVerbose .CommArg.cargId
            wpkZlib          .CommArg.cargId
            wpkEnableFs      .CommArg.cargId
            wpkThreads       .CommArg.cargId
            wpkDynamicRuntime.CommArg.cargId
            wpkNativeStrip   .CommArg.cargId
            wpkSimd          .CommArg.cargId
            wpkLinkerExcl    .CommArg.cargId
            wpkCollation     .CommArg.cargId
            wpkBuildDir      .CommArg.cargId
        ]
        let isWpk (arg,_) = Set.contains arg.cargId wpkIds
    
        let invokePackager() = FusionM.fusion {
            let! unix   = getBoolRm false wpkConvertToUnix
            toUnix1    <- if unix then toUnix0 else id
            let! exec   = buildArgRm wpkPackagerDir
            let! ops    = argumentsRm      isWpk
            let! pres   = argumentsRm  (fun (arg,_) -> arg.cargId = wpkPreCommand .CommArg.cargId)
            let! posts  = argumentsRm  (fun (arg,_) -> arg.cargId = wpkPostCommand.CommArg.cargId)   
            let  ops2   = ops   |> String.concat "  "
            let  pres2  = pres  |> String.concat "\n"
            let  posts2 = posts |> String.concat "\n"
            let! show   = getBoolRm false FsCode.intShowArgs
            if unix then 
                return sprintf "copy paste in Unix (run WSL as Administrator):\n\n%s\nmono %s %s\n%s\n" pres2 exec ops2 posts2
            else
                if show then printfn "%s %s"  exec ops2
                let txt  = RunProcess.runToFinish exec ops2
                if txt.Contains "Could not find a part of the path" then
                    printfn "\n\nTypical packager error. Trying again...\n"
                    RunProcess.runToFinish exec ops2 |> ignore
                return  "Success!"
        }
    
        let compileAndPackage show snpName = fusion {
            printfn "in compileAndPackage"
            let! info  = WsCompileDll.compileSnippetRm show snpName
            let  dirs  = info.assemblies |> Seq.map System.IO.Path.GetDirectoryName |> Seq.append info.prepIs |> Seq.distinct |> Seq.filter (fun s -> s.Trim() <> "")
            let! out   = ofFusionM <| getValueRm FsCode.fscOutput
            do!          ofFusionM <| addPairsRm (dirs |> Seq.map (fun v -> wpkSearchPath /= v))
            do!          ofFusionM <| addPairsRm (seq [
                                        wpkDll              /= getValueRm FsCode.fscOutput
                                        wpkPackagerDir      /= @"D:\Abe\CIPHERWorkspace\FSharpStation/../Repos/WasmRepo/wasm-sdk"
                                        wpkEmscriptSdkdir   /= @"D:\Abe\CIPHERWorkspace\FSharpStation/../mono/sdks/builds/toolchains/emsdk"
                                        wpkDebug            /= true
                                        wpkDebugrt          /= true
                                    ])
            let! res   = ofFusionM <| invokePackager()
            return res
        }
    
        open FsCode
    
        let wasmSnippetCompile            show snpName args =
            fusion {
                printfn "Started packager %s"  snpName
                return! compileAndPackage show snpName
                //return sprintf "Finished packager %s" snpName
            }
            |> Fusion.mapReader args
            |> Fusion.iterResultPrint
    
    
        let runPackager args =
            invokePackager() 
            |> FusionM.iterReader print print args
    
        open FusionM.Operators
    
        let fromString (m:string) : ExecMode = 
            match m.ToLower() with 
            | "aot" -> ExecMode.Aot
            | "aotinterp" -> ExecMode.AotInterp
            | _ -> ExecMode.Interp
            
        let settingsWsTranslator45() =
            [
                wpkBuildDir       /= @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\buildFStation"
                wpkOut            /= @"D:\Abe\CIPHERWorkspace\FSharpStation/website/wasm/publish"
                fscDefine         /= "WASM45"
            ]
    
        let settingsWsTranslator47() =
            [
                wpkBuildDir       /= @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\build47"
                wpkOut            /= @"D:\Abe\CIPHERWorkspace\FSharpStation/website/wasm/publish47"
                intWsFscExe       /= @"D:\Abe\CIPHERWorkspace\FSharpStation\..\WebSharper4.7\packages\WebSharper.FSharp\tools\net461\wsfsc.exe"
                fscDefine         /= "WASM47"
                fscDefine         /= "WEBSHARPER47"
            ]
    
        let packager_WsTranslator settings parmSnpPath modeS =
            let mode = fromString modeS
            printfn "MODE: %A" mode
            [
                yield fscDefine         /= ("EXECMODE_" + modeS.ToUpper())
                yield intShowCommand    /= true
                //yield wpkPreloadFile    /= @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\buildFStation\WsTranslator.fs"
                //yield wpkEmbedFile      /= @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\buildFStation\paket.dependencies"
                yield wpkCopy           /= Always
                yield wpkExecMode       /= mode
                yield wpkConvertToUnix  /= true
    
                yield wpkPreCommand     /= (rtn (toUnix >> sprintf "cd %s/..") <*> gS wpkBuildDir)
                yield wpkPostCommand    /= (rtn (toUnix >> sprintf "cd %s"   ) <*> gS wpkBuildDir)
                yield wpkPostCommand    /= "sed -i 's/monolinker.exe -out/monolinker.exe -x ..\/Linker.xml -out/' build.ninja"
                yield wpkPostCommand    /= "sed -i 's/--gen-icall-table \$runtime_table \$in > \$out/--gen-icall-table \$runtime_table \$in | grep -v \"uint64_t ves_icall_System_Threading_Thread_VolatileRead8 (int);\" | grep -v \"void ves_icall_System_Threading_Thread_VolatileWrite8 (int,uint64_t);\" > \$out/' build.ninja"
                yield wpkPostCommand    /= "ninja -v -j 1"
    
                if mode <> ExecMode.Interp then
                    yield wpkAotAssemblies  /= [ "mscorlib.dll" ; "FSharp.Compiler.Service.dll" ; "System.dll" ; "FSharp.Core.dll" ; "WebSharper.Core.dll" ; "WebSharper.Compiler.FSharp.dll" ; "WebSharper.Compiler.dll" ; "WebSharper.Web.dll" ; "WsTranslator.dll"]
                    yield wpkIlStrip        /= false
                    yield wpkLinkIcalls     /= true
                    yield wpkLinker         /= false
                    yield wpkNativeStrip    /= false
                    yield wpkDynamicRuntime /= true
                  //yield wpkZlib           /= true  // it is not necessary, System.dll needs to be compiled
                  //yield wpkBinding        /= false // this doesn't even start
            ] @ settings()
            |> CommArgCollection 
            |> wasmSnippetCompile true parmSnpPath
    
    module WasmLoader =
        open FsRoot
    
        open Library.CommArgRoot.CommArgCollection
        open WsCompileDll
        open FsCode
        open FusionAsyncM
        open System.IO
        open LibraryJS.FShUI_AssemblyData
        open FShUI_AssemblyData2
    
        //let  WASMDir   = "/WASM/publish/"
    
        let isWorker (fn:string) = fn.EndsWith ".worker.js"
    
        let processAsm fix dll fileTo =
            printfn "extracting %s" dll
            let asm =  CreateAsm.readDll dll
            { asm with javaScripts = 
                            asm.javaScripts 
                            |> Array.filter(fst >> isWorker >> not)
                            |> Array.map(fun (nm, code) -> nm, fix code.Id |> JSCode) }
            |> writeAsm fileTo
            asm
    
        let compileWASMLoader settings show snp =
            fusion {
                //FSharpStationClient.fsharpStationAddress <- WebSockets.Address "FSharpStation1612100328464"
                let! _         = compileSnippetRm show snp
                let! out       = ofFusionM <| getValueRm FsCode.fscOutput
                let! name      = ofFusionM <| getValueRm FsCode.intName
                let! wasmDir0  = ofFusionM <| getValueRm  WasmPackager.wpkOut
                let  path      = "D:\Abe\CIPHERWorkspace\FSharpStation/website/" |> Path.GetFullPath
                let  wasmDir   = (Path.GetFullPath wasmDir0).Replace(path, "/") |> WasmPackager.toUnix
    
                let fixJs name (txt:string) = txt.Replace(sprintf ".ScriptPath(%A," name, sprintf ".ScriptPath(\"..%s\"," wasmDir )        
                let asm        = sprintf @"%s\EPFileX\Assemblies\%s.asm" path name
                                |>  processAsm (fixJs name) out
    
                asm.javaScripts
                |> Array.filter(fst >> isWorker)
                |> Array.iter(fun (fn, JSCode js) ->
                    let fileTo = path + wasmDir + "/" + fn
                    printfn "converting worker %s" fileTo
                    js.Split '\n'
                    |> fun lines -> 
                        match lines |> Seq.tryFindIndex(fun l -> l.Contains "importScripts" && l.Contains "require.min.js")
                            ,lines |> Seq.tryFindIndex(fun l -> l.Contains "importScripts" && l.Contains "jquery") with
                        | Some first, Some last -> Seq.append  lines.[..first]  lines.[last + 1..]
                        |_                      -> Seq.ofArray lines
                        |> String.concat "\n"
                    |> fun txt   -> File.WriteAllText(fileTo, txt)
                )
            } 
            |> mapReader (settings() |> CommArgCollection)
            |> iterResult print id
    
    
    
    (*
    MODIFICATIONS TO
    ninja.build:
    rule linker
      command = mono $tools_dir/monolinker.exe -x ../Linker.xml -out $builddir/linker-out -l none --deterministic --disable-opt unreachablebodies --exclude-feature com,remoting,etw $linker_args || exit 1; mono $tools_dir/wasm-tuner.exe --gen-empty-assemblies $out
    
    rule gen-icall-table
      command = mono $tools_dir/wasm-tuner.exe --gen-icall-table $runtime_table $in | grep -v "uint64_t ves_icall_System_Threading_Thread_VolatileRead8 (int);" | grep -v "void ves_icall_System_Threading_Thread_VolatileWrite8 (int,uint64_t);" > $out
    
    
    try
        FsRoot.Library2.FSharpStationClient.fsharpStationAddress <- FsRoot.Library2.WebSockets.Address "FSharpStation1611569356546"
        FsRoot.WasmPackager.packager_WsTranslator "FsRoot/Applications/WsTranslator"
    with e -> printfn "------%A" e
    
    module Test =
        open FsRoot
        open WasmPackager
        open System.IO
        open FusionM
        open CommArgCollection
    
        
        |> addPairs [
            wpkSearchPath  /= "wasm-sdk/framework"
            wpkSearchPath  /= "wasm-sdk/wasm-bcl/wasm/Facades"
            wpkSearchPath  /= "wasm-sdk/wasm-bcl/wasm"
            wpkSearchPath  /= "packages/FSharp.Core/lib/netstandard2.0"
            wpkSearchPath  /= "packages/System.Reflection.Metadata/lib/netstandard2.0"
            wpkSearchPath  /= "packages/System.Collections.Immutable/lib/netstandard2.0"
            wpkSearchPath  /= "packages/WebSharper/lib/netstandard2.0"
            wpkSearchPath  /= "packages/WebSharper.Compiler.FSharp/lib/netstandard2.0"
            wpkSearchPath  /= "packages/WebSharper.Compiler.Common/lib/netstandard2.0"
            wpkSearchPath  /= "CodeDom"
            wpkSearchPath  /= "packages/Mono.Cecil/lib/netstandard2.0"
        ]
        |> runPackager
    
    //*)
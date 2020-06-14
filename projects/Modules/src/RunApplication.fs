#nowarn "3242"
////-d:FSharpStation1592020998181 -d:TEE -d:WEBSHARPER
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
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Owin\lib\net40\Owin.dll"
//#nowarn "3242"
/// Root namespace for all code
//#define FSharpStation1592020998181
#if INTERACTIVE
module FsRoot   =
#else
#if DLL
namespace FsRootDll
#else
namespace FsRoot
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
            
            let [< Inline "new Date(0).getTime()" >] Utc1970_01_01                 = System.DateTime(1970,1,1,0,0,0,System.DateTimeKind.Utc)
            let [< Inline "$d"                    >] date2Long (d:System.DateTime) = d.Subtract(Utc1970_01_01).Ticks / 10000L
            let [< Inline "$l"                    >] long2Date (l:int64          ) = Utc1970_01_01.Add(System.TimeSpan(l * 10000L) )
            
            
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
                    
                    
                type FusionM<'T, 'S, 'M> = FM of ('S * ResultMessage<'M> -> 'T option * 'S * ResultMessage<'M>)
                
                module FusionM =
                    let inline rtn               v   = FM(fun (s ,r ) -> Some v, s, NoMsg)
                    let        bind              f m = FM(fun (s1,m1) -> 
                                                          try
                                                              let (FM fm1)  = m
                                                              let v2O, s2, m2 = fm1 (s1, m1)
                                                              match v2O with
                                                              | None    -> None, s2, m2
                                                              | Some v2 ->
                                                              let (FM fm2) = f v2
                                                              let v3O, s3, m3 = fm2 (s2, ResultMessage.addMsg m1 m2)
                                                              v3O, s3,                       ResultMessage.addMsg m2 m3
                                                          with e ->
                                                              let me = ExceptMsg(e.Message, e.StackTrace)
                                                              None, s1,                      ResultMessage.addMsg m1 me
                                                       )
                    let inline map          f     m  = bind (f >> rtn) m
                
                    let inline wrap               f  = FM f
                    let inline getFun         (FM f) =    f
                    let inline from                m = m : FusionM<_, _, _>
                
                    let inline run               s m = getFun m (s, NoMsg)
                
                    let inline OkF               v   = FM(fun (s,r) -> Some v , s , NoMsg)
                    let inline OkFMsg            v m = FM(fun (s,r) -> Some v , s , m    )
                    let inline ErrorF              m = FM(fun (s,r) -> None   , s , m    )
                
                    let inline getS               () = FM(fun (s,r) -> Some s , s , NoMsg)
                    let inline getR               () = FM(fun (s,r) -> Some r , s , NoMsg)
                    let inline putS               s1 = FM(fun (s,r) -> Some (), s1, NoMsg)
                    let inline check              () = FM(fun (s,r) -> (if ResultMessage.isFatal    r then None else Some ())  , s , NoMsg)
                
                    let inling getOption          m  = FM(fun (s1,m1) ->
                                                           try
                                                               let (FM fm1)  = m
                                                               let        v2O, s2, m2 = fm1 (s1, m1)
                                                               Some v2O, s2, m2
                                                           with e ->
                                                               let me = ExceptMsg(e.Message, e.StackTrace)
                                                               None, s1, ResultMessage.addMsg m1 me
                                                       )
                
                
                    let inline ofResultRM          r = match r with Ok   v -> OkF    v  | Error e -> ErrorF                           e
                    let inline ofResultM           r = match r with Ok   v -> OkF    v  | Error e -> ErrorF (Message                  e)
                    let inline ofResultS           r = match r with Ok   v -> OkF    v  | Error e -> ErrorF (ErrorMsg                 e)
                    let inline ofResult            r = match r with Ok   v -> OkF    v  | Error e -> ErrorF (ErrorMsg <| sprintf "%A" e)
                    let inline ofOption         f  o = match o with Some v -> OkF    v  | None    -> ErrorF (f()                       )
                    let inline ofMessage           m =                        OkFMsg ()                     (Message                  m)
                    let inline ofResultMessage     m =                        OkFMsg ()                                               m
                    let inline ofFusionM           m = from m
                
                    let        freeMessageF     f  m = FM(fun (s1,m1) -> 
                                                          try
                                                              let (FM fm1)  = m
                                                              let v2O, s2, m2 = fm1 (s1, ResultMessage.freeMessage    m1)
                                                              v2O, s2,                   ResultMessage.freeMessageF f m2
                                                          with e ->
                                                              let me = ExceptMsg(e.Message, e.StackTrace)
                                                              None, s1,                      ResultMessage.addMsg m1 me |> ResultMessage.freeMessage
                                                       )
                    let inline freeMessage         m = m |> freeMessageF (sprintf "%O" >> ErrorMsg )
                    let inline freeMessageW        m = m |> freeMessageF (sprintf "%O" >> Warning  )
                
                    let mapState           get set m = FM(fun (s1, r) -> 
                                                            let vO, s2, r = getFun m (get s1, r)
                                                            vO, set s1 s2, r
                                                        )
                
                    let iterReader     fM f  v     m  = m |> map f |> run v |> fun (vO, _, m) -> vO |> Option.iter id ; if m <> NoMsg then fM m
                
                    let memoizeRm      getStore fRm p = FM(fun (r:'r, m) ->
                                                            let (checkO:'p->'v option), (getOrAdd:'p->('p->'v)->'v) = getStore r
                                                            let store p v = getOrAdd p (fun _ -> v)
                                                            checkO p 
                                                            |> Option.map rtn 
                                                            |> Option.defaultWith (fun () -> fRm p |> map (store p) )
                                                            |> run r
                                                        )
                
                    let inline apply           fR    vR = fR |> bind (swap map  vR)
                    let (>>=)                       v f = bind f v
                    let traverseSeq            f     sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                          Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq           sq = traverseSeq id sq
                    
                    let inline readerFun             f  = getS() |> map f
                    let mapReader           v      m  = m |> mapState (fun _ -> v) (fun s _ -> s)
                    let runReader           v      m  = m |> run v |> fun (vO, _, m) -> vO |> Option.map(fun v -> v, m) |> Result.ofOption (fun () -> m)
                    let runResult                  m  = m |> runReader        ()
                    let iterResult          fM f   m  = m |> iterReader  fM f ()
                    let iterResultPrint            m  = m |> iterReader  (ResultMessage.summarized >> print) print ()
                    
                    let inline insertO  vvO                           = vvO   |> Option.map(map Some) |> Option.defaultWith(fun () -> rtn None)
                    let inline insertR (vvR:Result<_,_>)              = vvR   |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                    let inline insertFst (fst, vRm)                   = vRm   |> map (fun v -> fst, v)
                    let inline insertSnd (vRm, snd)                   = vRm   |> map (fun v -> v, snd)
                    let inline absorbR (vvRm)                         = vvRm  |> bind ofResultRM
                    let inline absorbO f vORm                         = vORm  |> map (Result.ofOption  f) |> absorbR
                    
                    module Operators =
                        let inline (<*>) f v   = apply f v
                        let inline (|>>) v f   = map   f v
                        let inline (>>=) v f   = bind  f v
                        let inline (>>>) f g v = f v |>> g
                        let inline (>=>) f g v = f v >>= g
                        let inline rtn   v     = rtn    v
                    
                    module Builder =
                        type Builder() =
                            member inline __.Return      x                  = rtn     x
                            member inline __.ReturnFrom  x                  = from    x
                            member        __.Bind       (w , r )            = bind    r w
                            member inline __.Zero       ()                  = rtn ()
                            member inline __.Delay       f                  = f
                            member inline __.Combine    (a, b)              = bind b a
                            member inline __.Run         f                  = wrap(fun m -> f() |> getFun <|m )
                            member __.While(guard, body) =
                                let rec whileLoop guard body =
                                    if guard() then body() |> bind (fun () -> whileLoop guard body)
                                    else rtn   ()
                                whileLoop guard body
                            member this.TryWith   (body, handler     ) = wrap(fun r -> try body() |> getFun <| r with e -> handler     e            )
                            member this.TryFinally(body, compensation) = wrap(fun r -> try body() |> getFun <| r finally   compensation()           )
                            member this.Using     (disposable, body  ) = //wrap(fun r -> using (disposable:#System.IDisposable) (fun u -> body u |> getFun <| r) )
                                        let body' = fun () -> body disposable
                                        this.TryFinally(body', fun () -> if disposable :> obj <> null then (disposable:#System.IDisposable).Dispose() )
                            member this.For(sequence:seq<_>, body) =
                                this.Using(sequence.GetEnumerator(),fun enum -> 
                                    this.While(enum.MoveNext, 
                                        this.Delay(fun () -> body enum.Current)))
                    
                    let fusion = Builder.Builder()
                        
                    
                    
                type FusionAsyncM<'T, 'S, 'M> = FAM of ('S * ResultMessage<'M> -> Async<'T option * 'S * ResultMessage<'M> >)
                
                module FusionAsyncM =
                    let inline rtn               v   = FAM(fun (s ,r ) -> async.Return (Some v, s, NoMsg) )
                    let        bind              f m = FAM(fun (s1,m1) -> async {
                                                           try
                                                               let (FAM fm1)  = m
                                                               let! v2O, s2, m2 = fm1 (s1, m1)
                                                               match v2O with
                                                               | None    -> return None, s2, m2
                                                               | Some v2 ->
                                                               let    (FAM fm2) = f v2
                                                               let! v3O, s3, m3 = fm2 (s2, ResultMessage.addMsg m1 m2)
                                                               return v3O, s3,            ResultMessage.addMsg m2 m3
                                                           with e ->
                                                               let me = ExceptMsg(e.Message, e.StackTrace)
                                                               return None, s1,           ResultMessage.addMsg m1 me
                                                        })
                    let inline map          f     m  = bind (f >> rtn) m
                
                    let inline wrap               f  = FAM f
                    let inline getFun        (FAM f) =    f
                    let inline from                m = m : FusionAsyncM<_, _, _>
                
                    let inline run               s m = getFun m (s, NoMsg)
                
                    let inline OkF               v   = FAM(fun (s,r) -> async.Return (Some v , s , NoMsg) )
                    let inline OkFMsg            v m = FAM(fun (s,r) -> async.Return (Some v , s , m    ) )
                    let inline ErrorF              m = FAM(fun (s,r) -> async.Return (None   , s , m    ) )
                
                    let inline getS               () = FAM(fun (s,r) -> async.Return (Some s , s , NoMsg) )
                    let inline getR               () = FAM(fun (s,r) -> async.Return (Some r , s , NoMsg) )
                    let inline putS               s1 = FAM(fun (s,r) -> async.Return (Some (), s1, NoMsg) )
                    let inline check              () = FAM(fun (s,r) -> async.Return ((if ResultMessage.isFatal    r then None else Some ())  , s , NoMsg) )
                
                    let inline getOption          m  = FAM(fun (s1,m1) -> async {
                                                           try
                                                               let (FAM fm1)  = m
                                                               let!        v2O, s2, m2 = fm1 (s1, m1)
                                                               return Some v2O, s2, m2
                                                           with e ->
                                                               let me = ExceptMsg(e.Message, e.StackTrace)
                                                               return None, s1, ResultMessage.addMsg m1 me
                                                        })
                
                    let inline ofResultRM         r  = match r with Ok   v -> OkF    v  | Error e -> ErrorF                           e
                    let inline ofResultM          r  = match r with Ok   v -> OkF    v  | Error e -> ErrorF (Message                  e)
                    let inline ofResultS          r  = match r with Ok   v -> OkF    v  | Error e -> ErrorF (ErrorMsg                 e)
                    let inline ofResult           r  = match r with Ok   v -> OkF    v  | Error e -> ErrorF (ErrorMsg <| sprintf "%A" e)
                    let inline ofOption        f  o  = o  |> Option.map OkF |> Option.defaultWith (f >> ErrorF)
                    let inline ofMessage          m  =                        OkFMsg ()                      (Message                  m)
                    let inline ofResultMessage    m  =                        OkFMsg ()                                                m
                    let inline ofAsync            a  = FAM(fun (s, r) -> a |> Async.map (fun v -> Some v, s, NoMsg) )
                    let inline ofAsyncResultRM    a  = a |> ofAsync |> bind ofResultRM
                    let inline ofFusionM     (FM fm) = FAM(fun (s, r) -> async.Return (fm (s, r)) )
                
                    let        freeMessageF     f  m = FAM(fun (s1,m1) -> async {
                                                          try
                                                              let   (FAM fm1)  = m
                                                              let! v2O, s2, m2 = fm1 (s1, ResultMessage.freeMessage    m1)
                                                              return v2O, s2,             ResultMessage.freeMessageF f m2
                                                          with e ->
                                                              let me = ExceptMsg(e.Message, e.StackTrace)
                                                              return None, s1,            ResultMessage.addMsg m1 me |> ResultMessage.freeMessage
                                                       })
                    let mapState           get set m = FAM(fun (s1, r) -> async {
                                                            let! vO, s2, r = getFun m (get s1, r)
                                                            return vO, set s1 s2, r
                                                        })
                
                    let iterReader     fM f  v     m  = m |> map f |> run v |> Async.iterS (fun (vO, _, m) -> vO |> Option.iter id ; if m <> NoMsg then fM m)
                    let iterReaderA    fM f  v     m  = m |> map f |> run v |> Async.iterA (fun (vO, _, m) -> vO |> Option.iter id ; if m <> NoMsg then fM m)
                
                    let memoizeRm      getStore fRm p = FAM(fun (r:'r, m) -> async {
                                                            let (checkO:'p->'v option), (getOrAdd:'p->('p->'v)->'v) = getStore r
                                                            let store p v = getOrAdd p (fun _ -> v)
                                                            return! checkO p 
                                                                    |> Option.map rtn 
                                                                    |> Option.defaultWith (fun () -> fRm p |> map (store p) )
                                                                    |> run r
                                                        })
                
                    let inline apply           fR    vR = fR |> bind (swap map  vR)
                    let (>>=)                       v f = bind f v
                    let traverseSeq            f     sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                          Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq           sq = traverseSeq id sq
                    
                    let inline freeMessage         m = m |> freeMessageF (sprintf "%O" >> ErrorMsg )
                    let inline freeMessageW        m = m |> freeMessageF (sprintf "%O" >> Warning  )
                    
                    let inline readerFun          f  = getS() |> map f
                    let inline insertO  vvO                           = vvO   |> Option.map(map Some) |> Option.defaultWith(fun () -> rtn None)
                    let inline insertR (vvR:Result<_,_>)              = vvR   |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                    let inline insertFst (fst, vRm)                   = vRm   |> map (fun v -> fst, v)
                    let inline insertSnd (vRm, snd)                   = vRm   |> map (fun v -> v, snd)
                    
                    let inline absorbR (vvRm)                         = vvRm  |> bind ofResultRM
                    let inline absorbO f vORm                         = vORm  |> map (Result.ofOption  f) |> absorbR
                    
                    
                    let mapReader           v      m  = m |> mapState (fun _ -> v) (fun s _ -> s)
                    let runReader           v      m  = m |> run v |> Async.map (fun (vO, _, m) -> vO |> Option.map(fun v -> v, m) |> Result.ofOption (fun () -> m))
                    let runResult                  m  = m |> runReader        ()
                    let iterResult          fM f   m  = m |> iterReader  fM f ()
                    let iterResultA         fM f   m  = m |> iterReaderA fM f ()
                    let iterResultPrint            m  = m |> iterReader  (ResultMessage.summarized >> print) print ()
                    let iterResultPrintA           m  = m |> iterReaderA (ResultMessage.summarized >> print) print ()
                    
                    module Operators =
                        let inline (<*>) f v   = apply f v
                        let inline (|>>) v f   = map   f v
                        let inline (>>=) v f   = bind  f v
                        let inline (>>>) f g v = f v |>> g
                        let inline (>=>) f g v = f v >>= g
                        let inline rtn   v     = rtn    v
                    
                    module Builder =
                        type Builder() =
                            member inline __.Return      x                  = rtn     x
                            member inline __.ReturnFrom  x                  = from    x
                            member        __.Bind       (w , r )            = bind    r w
                            member inline __.Zero       ()                  = rtn ()
                            member inline __.Delay       f                  = f
                            member inline __.Combine    (a, b)              = bind b a
                            member inline __.Run         f                  = wrap(fun m -> f() |> getFun <|m )
                            member __.While(guard, body) =
                                let rec whileLoop guard body =
                                    if guard() then body() |> bind (fun () -> whileLoop guard body)
                                    else rtn   ()
                                whileLoop guard body
                            member __.TryWith   (body, handler     ) = (fun (s,m) -> async.TryWith   (body() |> getFun <| (s, m),   handler                ) ) |> wrap
                            member __.TryFinally(body, compensation) = (fun (s,m) -> async.TryFinally(body() |> getFun <| (s, m),   compensation           ) ) |> wrap
                            member __.Using     (disposable, body  ) = (fun (s,m) -> async.Using((disposable:#System.IDisposable), fun u -> body u |> getFun <| (s, m)) ) |> wrap
                            member this.For(sequence:seq<_>, body) =
                                this.Using(sequence.GetEnumerator(),fun enum -> 
                                    this.While(enum.MoveNext, 
                                        this.Delay(fun () -> body enum.Current)))
                    
                    let fusion = Builder.Builder()
                        
                    
                    
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
                member this.toUnderscore        = this |> Seq.mapi(fun i c -> if i > 0 && System.Char.IsUpper(c) then [ '_' ; c ] else [ c ])  |> Seq.collect id |> Seq.toArray |> System.String
            
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
            
            
            [< Inline "$a + '/' + $b" >]
            let inline (+/+) a b = System.IO.Path.Combine(a, b)
            
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
                
            [<System.Runtime.CompilerServices.Extension >]
            type MailboxProcessorExt =
                [<System.Runtime.CompilerServices.Extension ; Inline "throw 'PostAndReply not available in JavaScript'" >]
                static member PostAndReply     (agent:MailboxProcessor<_>, msg, ?timeout) = agent.PostAndReply     ((fun reply -> reply, msg), ?timeout= timeout)
                [<System.Runtime.CompilerServices.Extension>]
                static member PostAndAsyncReply(agent:MailboxProcessor<_>, msg, ?timeout) = agent.PostAndAsyncReply((fun reply -> reply, msg), ?timeout= timeout)
            //    [<System.Runtime.CompilerServices.Extension>]
            ///    static member PostF(agent:MailboxProcessor<_>, f, ?timeout) = agent.Post(fun v -> async { return f v })
            
            module Mailbox =
            
                /// A simple Mailbox processor to serially process Async tasks
                /// use:
                ///      let logThisMsgA = Mailbox.iterA (printfn "%A") (fun msg -> async { printfn "Log: %s" msg } )
                ///      logThisMsgA.Post "message Async"
                ///      
                let iterA hndl f =
                    MailboxProcessor.Start(fun inbox ->
                        async {
                            while true do
                                try       let!   msg = inbox.Receive()
                                          do!  f msg
                                with e -> hndl e
                        }
                    )
                    
                /// A simple Mailbox processor to serially process tasks
                /// use:
                ///      let logThisMsg = Mailbox.iter (printfn "%A") (printfn "Log: %s")
                ///      logThisMsg.Post "message"
                ///      
                let iter hndl f = iterA hndl (fun msg -> async { f msg } )
                
                /// A simple Mailbox processor to serially and synchronously process tasks
                /// use:
                ///      let toUpperCaseA = Mailbox.callA (fun (msg:string) -> 
                ///                                async { return msg.ToUpper() } )
                ///
                ///      toUpperCaseA.PostAndReply(fun reply -> reply, "message") 
                ///      |> printfn "%s"
                ///
                ///      toUpperCaseA.PostAndReply "message"
                ///      |> printfn "%s"
                ///
                ///      async {
                ///          let! res = toUpperCaseA.PostAndAsyncReply(fun reply -> 
                ///                                                        reply, "message")
                ///          printfn "Async: %s" res
                ///      } |> Async.RunSynchronously
                ///
                ///      async {
                ///          let! res = toUpperCaseA.PostAndAsyncReply "message"
                ///          printfn "Async: %s" res
                ///      } |> Async.RunSynchronously    
                ///      
                let callA hndl f = iterA hndl (fun ((replyChannel: AsyncReplyChannel<_>), msg) -> async {
                    let! r = f msg
                    replyChannel.Reply r
                })
                
                /// A simple Mailbox processor to serially and synchronously process tasks
                /// use:
                ///      let toUpperCase = Mailbox.call (fun (msg:string) -> msg.ToUpper() )
                ///      
                ///      toUpperCase.PostAndReply(fun reply -> reply, "message") 
                ///      |> printfn "%s"
                ///      
                ///      toUpperCase.PostAndReply "message"
                ///      |> printfn "%s"
                ///      
                ///      async {
                ///          let! res = toUpperCase.PostAndAsyncReply(fun reply -> 
                ///                                                       reply, "message")
                ///          printfn "Async: %s" res
                ///      } |> Async.RunSynchronously
                ///      
                ///      async {
                ///          let! res = toUpperCase.PostAndAsyncReply "message"
                ///          printfn "Async: %s" res
                ///      } |> Async.RunSynchronously
                ///      
                let call hndl f = callA hndl (fun msg -> async { return f msg } )
                
                /// A Mailbox processor that maintains a state
                let foldA hndl f initState =
                    MailboxProcessor.Start(fun inbox ->
                        let rec loop state : Async<unit> = async {
                            try       let! msg      = inbox.Receive()
                                      let! newState = f state msg
                                      return! loop newState
                            with e -> return! loop (hndl e state)
                        }
                        loop initState
                    )
            
                /// A Mailbox processor that maintains a state
                let fold hndl f initState = foldA hndl (fun state msg -> async { return f state msg } ) initState
                
                /// A Mailbox processor that maintains a state (pass an error handler not a folder function)
                /// use: 
                ///      agent |> Mailbox.StateFull.apply (fun state -> state + 1)
                ///      agent |> Mailbox.StateFull.getState
                let stateFull hndl initState =
                    MailboxProcessor.Start(fun inbox ->
                        let rec loop state : Async<unit> = async {
                            try       let! f        = inbox.Receive()
                                      let! newState = f state
                                      return! loop newState
                            with e -> return! loop (hndl e state)
                        }
                        loop initState
                    )
                    
                let defHandler ex st = print ex ; st
                    
                module StateFull =
                    let getStateA     (agent: MailboxProcessor<'a->Async<'a>>) = agent.PostAndAsyncReply(fun (reply:AsyncReplyChannel<_>) -> fun v -> async { reply.Reply v ; return v })
                    let setState    v (agent: MailboxProcessor<'a->Async<'a>>) = agent.Post(fun _ -> async { return    v })
                    let applyA      f (agent: MailboxProcessor<'a->Async<'a>>) = agent.Post(fun v -> async { return! f v })
                    let apply       f (agent: MailboxProcessor<'a->Async<'a>>) = agent |> applyA (fun v -> async { return  f v })
                    let applyReplyA f (agent: MailboxProcessor<'a->Async<'a>>) = agent.PostAndAsyncReply(fun (reply:AsyncReplyChannel<'r>) -> 
                                                                                                fun v -> async {
                                                                                                    let! st, r = f v
                                                                                                    reply.Reply r
                                                                                                    return st 
                                                                                                })
                    let applyReply  f (agent: MailboxProcessor<'a->Async<'a>>) = agent |> applyReplyA (fun v -> async { return  f v })
                    [< Inline "throw 'getState not available in JavaScript'" >]
                    let getState      (agent: MailboxProcessor<'a->Async<'a>>) = agent.PostAndReply     (fun (reply:AsyncReplyChannel<_>) -> fun v -> async { reply.Reply v ; return v })
                    /// synchronous version pf applyReply
                    [< Inline "throw 'applyReplyS not available in JavaScript'" >]
                    let applyReplyS f (agent: MailboxProcessor<'a->Async<'a>>) = agent.PostAndReply(fun (reply:AsyncReplyChannel<'r>) -> 
                                                                                                fun v -> async {
                                                                                                    let st, r = f v
                                                                                                    reply.Reply r
                                                                                                    return st 
                                                                                                })
            
            [< AutoOpen >]
            module CommArgRoot =
                open FusionM
                open Operators
            
                type CommArgId = CommArgId of System.Guid
                
                type CommArgBuild = obj -> string
            //        | TInt    of (int    -> string)
            //        | TString of (string -> string)
            //        | TBool   of (bool   -> string)
            //        | TFloat  of (float  -> string)
                
                type CommArg = {
                    cargId : CommArgId
                    name   : string
                    unique : bool
                    build  : CommArgBuild
                }
                type CommArgValue<'T,  'M> = FusionM<'T, CommArgCollection<     'M>, 'M>
                and  ArgValueTuple<    'M> = CommArg *   CommArgValue<obj,      'M>
                and  CommArgCollection<'M> = CommArgCollection of ArgValueTuple<'M> seq
                    with 
                        member oo.CommArgs = match oo with CommArgCollection v -> v
                
                type TypedCommArg<'T> = TypedCommArg of CommArg
                    with
                    member oo.CommArg = match oo with TypedCommArg v -> v
                    static member (/=) (arg: TypedCommArg<'T>, v:                        'T    ) : ArgValueTuple<'M> = match arg with TypedCommArg arg -> (arg, rtn v        |>> box)
                    static member (/=) (arg: TypedCommArg<'T>, v: CommArgValue<          'T, _>) : ArgValueTuple<'M> = match arg with TypedCommArg arg -> (arg,     v        |>> box)
                    static member (/=) (arg: TypedCommArg<'T>, f: CommArgCollection<'M>->'T    ) : ArgValueTuple<'M> = match arg with TypedCommArg arg -> (arg, getS() |>> f |>> box)
                
                module CommArg  =
                    let New (name, unique, build: 'T -> _) : TypedCommArg<'T> = 
                        {
                            cargId = CommArgId <| System.Guid.NewGuid()
                            name   = name
                            unique = unique
                            build  = unbox >> build
                        }  |> TypedCommArg
                    let NewInt   (name, unique, build) : TypedCommArg<int   > = New(name, unique, build)
                    let NewString(name, unique, build) : TypedCommArg<string> = New(name, unique, build)
                    let NewBool  (name, unique, build) : TypedCommArg<bool  > = New(name, unique, build)
                    let NewFloat (name, unique, build) : TypedCommArg<float > = New(name, unique, build)
                    let argumentRm (a:CommArg) (vRm:CommArgValue<obj,_>) = fusion {
                        let! v = vRm
                        return a.build v
                    }
                    let inline argumentTRm(a,v) = argumentRm a v
                    let getValueR (a: TypedCommArg<'T>) (o:obj) : Result<'T,_> = unbox<'T> o |> Ok
                    let inline getIntR    a o : Result<int   ,_> = getValueR a o
                    let inline getStringR a o : Result<string,_> = getValueR a o
                    let inline getBoolR   a o : Result<bool  ,_> = getValueR a o
                    let inline getFloatR  a o : Result<float ,_> = getValueR a o
                
                module CommArgCollection =
                
                    let trueForAll                        _ = true
                    let contains      (TypedCommArg arg) (CommArgCollection args) = args |> Seq.map (fun (a,_) -> a.cargId) |> Seq.contains arg.cargId
                    let argsRm                           () = readerFun(fun (CommArgCollection args) -> args                 )
                    let existsRm                          f = readerFun(fun (CommArgCollection args) -> args |> Seq.exists f )
                    let filterRm                          p = readerFun(fun (CommArgCollection args) -> args |> Seq.filter p )
                    let argumentsRm                  filter = filterRm filter >>= traverseSeq CommArg.argumentTRm
                    let containsAnyOfRm (ids:CommArgId Set) = readerFun(fun (CommArgCollection args) -> args |> Seq.exists (fun (a,_) -> Set.contains a.cargId ids) )
                    let argumentNotFound  targ = fun () -> match targ with | TypedCommArg arg -> sprintf "argument not found: %s" arg.name |> ErrorMsg
                    let tryFindArgO   (TypedCommArg arg) (CommArgCollection args) = Seq.tryFind (fun (a,_) -> a.cargId = arg.cargId) args 
                    let tryFindArgORm     targ = readerFun(fun coll -> tryFindArgO targ coll |> Option.map insertFst |> insertO ) >>= id
                    let tryGetValueORm    targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getValueR  targ o)) |>> Result.insertO >>= ofResultRM
                    let tryGetIntORm      targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getIntR    targ o)) |>> Result.insertO >>= ofResultRM
                    let tryGetStringORm   targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getStringR targ o)) |>> Result.insertO >>= ofResultRM
                    let tryGetBoolORm     targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getBoolR   targ o)) |>> Result.insertO >>= ofResultRM
                    let tryGetFloatORm    targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getFloatR  targ o)) |>> Result.insertO >>= ofResultRM
                    let findArgRm         targ = tryFindArgORm   targ >>= ofOption (argumentNotFound targ)
                    let getValueRm        targ = tryGetValueORm  targ >>= ofOption (argumentNotFound targ)
                    let getIntRm          targ = tryGetIntORm    targ >>= ofOption (argumentNotFound targ)
                    let getStringRm       targ = tryGetStringORm targ >>= ofOption (argumentNotFound targ)
                    let getFloatRm        targ = tryGetFloatORm  targ >>= ofOption (argumentNotFound targ)
                    let getBoolRm   def   targ = tryGetBoolORm   targ |>> Option.defaultValue def
                    //[< Inline "throw 'getBoolR not available in JavaScript'" >]
                    let getBoolR def targ args = getBoolRm def targ |> run args |> fun (bO, _, m) -> bO |> Result.ofOption (fun () -> m)   //|> Async.RunSynchronously //|> Result. Option.defaultValue false
                
                    let addPair(commArg:CommArg, vRm:FusionM<obj, CommArgCollection<_>, _>) (CommArgCollection args) =
                        args
                        |> if commArg.unique then Seq.filter (fun (a,_) -> a.cargId <> commArg.cargId) else id
                        |> Seq.append <| [ commArg, vRm ]
                        |> Seq.toArray
                        |> Seq.ofArray
                        |> CommArgCollection
                    let append (args1: CommArgCollection<'M>) (args2: CommArgCollection<'M> ) = args2.CommArgs |> Seq.fold (swap (unbox >> addPair)) args1
                    let addPairs pairs collection = append collection (CommArgCollection pairs)
                        
                //    let produceRm = ReaderM(fun (CommArgCollection args) ->
                //        args
                //        |> ReaderM.traverseSeq (fun (a, vRm) -> CommArg.produceRm a vRm |> ReaderM.map (fun v -> a, v))
                //        |> ReaderM.map Seq.toArray
                //        |> ReaderM.run (CommArgCollection args)
                //    )
                
                type  CommArgCollection<'M> with
                    static member (+) (args: CommArgCollection<_>, args2                    ) = args |> CommArgCollection.addPairs args2
                    static member (+) (args: CommArgCollection<_>, arg                      ) = args |> CommArgCollection.addPair  arg  
                    static member (+) (args: CommArgCollection<_>, (CommArgCollection args2)) = args |> CommArgCollection.addPairs args2
                
                
            type FsCode = FsCode of string
            
            module FsCode =
            
                type PreproDirective =
                | PrepoCd     of string
                | PrepoR      of string
                | PrepoDefine of string
                | PrepoLoad   of string
                | PrepoLine   of string //* int
                | PrepoNoWarn of string
                | PrepoI      of string
                | PrepoIf     of string
                | PrepoElIf   of string
                | PrepoElse   
                | PrepoEndIf
                | PrepoLight  of bool
                | PrepoOther  of string
                | NoPrepo
                
                let extractDefines(FsCode code) = 
                    if code.StartsWith "////-d:" 
                    then code.[4..code.IndexOf '\n' - 1]
                    else ""
            
                let separatePrepros (code:string[]) =
                    let  quoted (line:string) = line.Trim().Split([| "\""       |], System.StringSplitOptions.RemoveEmptyEntries) |> Seq.tryLast |> Option.defaultValue line
                    let  rest   (line:string) = line.Trim() |> String.splitInTwoO " " |> Option.map snd |> Option.defaultValue "" |> fun s -> s.Trim()
                    let  comment = ((+)"//") 
                    let  prepro (line:string) = 
                        match true with 
                        | true when line       .StartsWith("#define") -> (comment line, line |> rest   |> PrepoDefine)
                        | true when line       .StartsWith("#cd"    ) -> (comment line, line |> quoted |> PrepoCd    )
                        | true when line       .StartsWith("#r"     ) -> (comment line, line |> quoted |> PrepoR     )
                        | true when line       .StartsWith("#load"  ) -> (comment line, line |> quoted |> PrepoLoad  )
                        | true when line       .StartsWith("#nowarn") -> (comment line, line |> quoted |> PrepoNoWarn)
                        | true when line.Trim().StartsWith("# "     ) -> (comment line, line |> quoted |> PrepoLine  )
                        | true when line.Trim().StartsWith("#line"  ) -> (comment line, line |> quoted |> PrepoLine  )
                        | true when line       .StartsWith("#I"     ) -> (comment line, line |> quoted |> PrepoI     )
                        | true when line       .StartsWith("#if"    ) -> (        line, line |> rest   |> PrepoIf    )
                        | true when line       .StartsWith("#elif"  ) -> (        line, line |> rest   |> PrepoElIf  )
                        | true when line       .StartsWith("#else"  ) -> (        line,                   PrepoElse  )
                        | true when line       .StartsWith("#endif" ) -> (        line,                   PrepoEndIf )
                        | true when line       .StartsWith("#light" ) -> (        line, false          |> PrepoLight )
                        | true when line       .StartsWith("#"      ) -> (comment line, line           |> PrepoOther )
                        | _                                           -> (        line,                   NoPrepo    ) 
                    code |> Array.map prepro
            
                type PrepState = 
                | LevelZero
                | TrueValue of PrepState
                | Looking   of PrepState
                | Found     of PrepState
            
                let isActive = function
                | LevelZero
                | TrueValue _ -> true
                | Looking   _ -> false
                | Found     _ -> false
            
                let prev = function
                | LevelZero    -> LevelZero
                | TrueValue pr -> pr
                | Looking   pr -> pr
                | Found     pr -> pr
            
                let filterPreps (preps:PreproDirective seq) =
                    let  defines  = preps |> Seq.choose (function | PrepoDefine d -> Some d | _ -> None) |> Seq.distinct |> Seq.toArray
                    let isDefined (def:string) =    defines |> Seq.contains (def.Replace("!","").Trim()) |> (if def.Trim().StartsWith "!" then not else id)
                    (LevelZero, preps) 
                    ||> Seq.mapFold(fun st prep ->
                        match st, prep with
                        | TrueValue _ , PrepoIf    def             
                        | LevelZero   , PrepoIf    def -> None     , if isDefined def then TrueValue st else Looking st
                        | Looking   _ , PrepoIf    _             
                        | Found     _ , PrepoIf    _   -> None     , Found st
                        |           _ , PrepoEndIf     -> None     , prev  st
                        | TrueValue pr, PrepoElIf  _
                        | TrueValue pr, PrepoElse      -> None     , Found     pr
                        | Looking   pr, PrepoElIf  def -> None     , if isDefined def then TrueValue st else Looking pr
                        | Looking   pr, PrepoElse      -> None     , TrueValue pr
                        | Found     pr, PrepoElIf  _
                        | Found     pr, PrepoElse      -> None     , Found     pr
                        | TrueValue _ , _             
                        | LevelZero   , _              -> Some prep, st
                        | _                            -> None     , st
                        )
                    |>  fst
                    |>  Seq.choose id
                    |>  Seq.toArray
            
                let getTopDirectives (fsNass:(string * PreproDirective) seq) =
                    let  directs  = fsNass |> Seq.map snd |> Seq.filter (function 
                                        | PrepoDefine _
                                        | PrepoR      _ 
                                        | PrepoI      _
                                        | PrepoNoWarn _
                                        | PrepoCd     _ 
                                        | PrepoIf     _
                                        | PrepoEndIf  
                                        | PrepoElIf   _
                                        | PrepoElse    -> true
                                        |_             -> false) |> Seq.toArray
                    let  code     = fsNass |> Seq.map fst |> Seq.toArray
                    code, directs
                    
                let separateDirectives (fsNass:PreproDirective seq) =
                    let  defines  = fsNass |> Seq.choose (function | PrepoDefine d      -> Some d      | _ -> None) |> Seq.distinct |> Seq.toArray
                    let  preps    = filterPreps fsNass
                    let  assembs  = preps  |> Seq.choose (function | PrepoR      assemb -> Some assemb | _ -> None) |> Seq.distinct |> Seq.toArray
                    let  prepoIs  = preps  |> Seq.choose (function | PrepoI      d      -> Some d      | _ -> None) |> Seq.distinct |> Seq.toArray
                    let  nowarns  = preps  |> Seq.choose (function | PrepoNoWarn d      -> Some d      | _ -> None) |> Seq.distinct |> Seq.toArray
                    let  cd       = preps  |> Seq.choose (function | PrepoCd     dir    -> Some dir    | _ -> None) |> Seq.tryHead
                    assembs, defines, prepoIs, nowarns, cd
                    
                let getSourceDir srcDir (lines:string[]) =
                    match lines.[0], Array.tryItem 1 lines with
                    |         String.StartsWith "////#cd @\"" dirq, _ 
                    | _, Some(String.StartsWith "////#cd @\"" dirq) ->  dirq.Trim()
                                                                        |> function
                                                                        | String.EndsWith "\"" dir
                                                                        |                      dir ->
                                                                        match dir with
                                                                        | String.StartsWith "\\" _
                                                                        | String.StartsWith "/"  _            -> dir
                                                                        | _ when Seq.tryItem 1 dir = Some ':' -> dir
                                                                        | _ -> srcDir  +/+                       dir
                    | _                                                     -> srcDir
            
            
            type SnippetId = SnippetId of System.Guid with member x.Id = match x with SnippetId id -> id
                                                           static member Empty = SnippetId System.Guid.Empty
            
            type Snippet = {
                snpId           : SnippetId    
                snpName         : string
                snpContent      : string
                snpParentIdO    : SnippetId option
                snpPredIds      : SnippetId Set
                snpProperties   : (string* string) []
                snpModified     : System.DateTime
            }
            
            type SnippetReference =
            | RefSnippetId   of SnippetId
            | RefSnippetPath of string[]
            
            type Reduced = ((SnippetId * string * int * int) [] * string [] * FsCode.PreproDirective [] ) option
            
            type SnippetCollection = {
                generation       : System.DateTime
                ordered          : Snippet seq
                fetcher          : SnippetId -> Snippet Option
                predecesorsCache : unit -> ((SnippetId -> SnippetId list option) * (SnippetId -> (SnippetId -> SnippetId list) -> SnippetId list))
                reducedCache     : unit -> (((bool * SnippetId * Set<SnippetId>) -> Reduced option) * ((bool * SnippetId * Set<SnippetId>) -> ((bool * SnippetId * Set<SnippetId>) -> Reduced) -> Reduced))
                prepCode         : Snippet -> string                             
            }
            
            module Snippet =
                open System
                open FusionM
                open Operators
            
                let getNextModified() = DateTime.Now
                //let getNextGeneration, setGeneration = 
                //    let mutable generation  = 1
                //    (fun () -> generation <- generation + 1 ; generation)
                //  , (fun n  -> generation <- n                          )  
                let New name content parentO = 
                    {
                        snpId           = SnippetId <| System.Guid.NewGuid()   
                        snpName         = name
                        snpContent      = content
                        snpParentIdO    = parentO
                        snpPredIds      = Set.empty
                        snpProperties   = Array.empty
                        snpModified     = getNextModified()
                    }
                let defaultSnippet              = {
                    snpId           = SnippetId <| System.Guid.Empty
                    snpName         = ""
                    snpContent      = ""
                    snpParentIdO    = None
                    snpPredIds      = Set.empty
                    snpProperties   = Array.empty
                    snpModified     = Utc1970_01_01
                }    
                let snippetName name (content: string) =
                    if name <> "" then name else 
                    content.Split([| '\n' |], System.StringSplitOptions.RemoveEmptyEntries)
                    |> Seq.map    (fun l -> l.Trim())
                    |> Seq.filter (fun l -> not (l.StartsWith("#") || l.StartsWith("[<") || l.StartsWith("//")))
                    |> Seq.tryHead
                    |> Option.defaultValue "<empty>"    
                let nameSanitized snp =
                    let illegal = [|'"'   ; '<'   ; '>'   ; '|'   ; '\000'; '\001'; '\002'; '\003'; '\004'; '\005'; '\006';
                                    '\007'; '\b'  ; '\009'; '\010'; '\011'; '\012'; '\013'; '\014'; '\015';
                                    '\016'; '\017'; '\018'; '\019'; '\020'; '\021'; '\022'; '\023'; '\024';
                                    '\025'; '\026'; '\027'; '\028'; '\029'; '\030'; '\031'; ':'   ; '*'   ; '?';
                                    '\\'  ; '/'|] //"
                    snp.snpName 
                    |> String.filter (fun c -> not <| Array.contains c illegal)
                    |> fun c -> c + " " + snp.snpId.Id.ToString()
                let propertyO       n snp = snp.snpProperties |> Array.tryPick (fun (name, value) -> if name = n then Some value else None)
                let tieFighter            = "|" + "-" + "|"
                let propertyPair      prv = (prv:string).Split([| tieFighter |], StringSplitOptions.None) |> fun vs -> vs.[0], vs |> Array.tryItem 1 |> Option.defaultValue vs.[0]
                let propertyPairO   n snp = propertyO n snp |> Option.map propertyPair
                let snippetORm        sid = readerFun (fun { fetcher    = ftch } -> ftch sid                                               )
                let parentORm         snp = readerFun (fun { fetcher    = ftch } -> snp.snpParentIdO |> Option.bind ftch                   )
                let predecessorsRm    snp = readerFun (fun { fetcher    = ftch } -> snp.snpPredIds   |> Seq.choose  ftch                   )
                let maxGenerationRm   ()  = readerFun (fun { ordered    = snps } -> snps |> Seq.map (fun s -> s.snpModified  ) |> Seq.max  )
                let modifiedRm        snp = readerFun (fun { generation = gen  } -> snp.snpModified   > gen                                )
                let childrenRm        sid = readerFun (fun { ordered    = snps } -> snps |> Seq.filter(fun s -> s.snpParentIdO = Some sid) )
                let orderedRm         ()  = readerFun (fun { ordered    = snps } -> snps                                                   )
                let prepareCodeRm     snp = readerFun (fun { prepCode   = prep } -> prep snp                                               )
                let snippetRm         sid = snippetORm sid |> absorbO (fun () -> sprintf "Snippet not found %A" sid |> ErrorMsg)
                let snippetNameRm     sid = snippetRm  sid |>> (fun snp -> snippetName snp.snpName snp.snpContent)
                let rec pathRm        sid = snippetORm sid 
                                            |>> Option.map parentORm 
                                            >>= insertO 
                                            |>> Option.bind id
                                            |>> Option.map (fun prn -> pathRm prn.snpId |>> fun rest -> prn.snpId :: rest ) 
                                            >>= insertO 
                                            |>> Option.defaultValue []
                let snippetFromPathORm pth = fusion {
                    let! snps = orderedRm()
                    return
                        snps
                        |> Seq.mapFold (fun (path, prntO) snp -> 
                                           if path |> Array.length = 0                       then None    , ([||]      , prntO         ) else
                                           let name = snippetName snp.snpName snp.snpContent
                                           if  name <> path.[0] || snp.snpParentIdO <> prntO then None    , (path      , prntO         ) else
                                           if path |> Array.length > 1                       then None    , (path.[1..], Some snp.snpId) else
                                                                                                  Some snp, ([||]      , prntO         )                               
                                       ) 
                                       (pth, None)
                        |> fst
                        |> Seq.choose id
                        |> Seq.tryHead
                }
                let snippetFromRefORm     = function
                                            | RefSnippetId   sid -> snippetORm         sid
                                            | RefSnippetPath pth -> snippetFromPathORm pth
                let predsLRm (sid : SnippetId) = fusion {
                        let mutable ins  = [sid]  
                        let mutable outs = [   ]
                        while not ins.IsEmpty do
                            match ins with
                            | []         -> ()
                            | hd :: rest -> if outs |> List.contains hd then
                                                ins  <- rest
                                            else
                                                let! snpO  = snippetORm hd
                                                let  preds = snpO 
                                                             |> Option.map(fun snp -> Seq.toList snp.snpPredIds @ Option.toList snp.snpParentIdO ) 
                                                             |> Option.defaultValue []
                                                ins  <- rest @ preds
                                                outs <- hd::outs
                        return outs
                    }
                let predsLRmMemo()        = memoizeRm (fun c -> c.predecesorsCache()) predsLRm 
            //    let predsLRmMemo<'m>  : SnippetId -> ReaderMResult<SnippetId list,SnippetCollection,'m>        
            //        = ReaderM.memoizeRm (fun c -> c.predecesorsCache()) predsLRm 
            //#if FIX_GENERIC
            //    (predsLRmMemo : (SnippetId -> Monads.ReaderMonads.ReaderMResult<SnippetId list,SnippetCollection,string>) )
            //#endif    
                let uniquePredsRm     snp = predsLRmMemo() snp.snpId
                let predsGenerationRm snp = fusion {
                                                let! preds = uniquePredsRm snp >>= traverseSeq snippetRm
                                                return preds (* |> Seq.append [ snp ] *) |> Seq.map (fun snp -> snp.snpModified  ) |> Seq.max 
                                            }
                let rec modifiedRecRm snp = fusion {
                    let! modified         = modifiedRm     snp
                    if modified then return true else
                    let! predIds          = uniquePredsRm  snp
                    let! predOs           = predIds |> Seq.map snippetORm                  |> sequenceSeq
                    let! mods             = predOs  |> Seq.choose id |> Seq.map modifiedRm |> sequenceSeq
                    return Seq.contains true mods
                }
                let rec propertyHierORm n snp = fusion {
                    match propertyO n snp with
                    | Some v -> return Some (snp, propertyPair v)
                    | None   -> let! parentO = parentORm   snp
                                match parentO with
                                | Some p -> let!   propO = propertyHierORm n p
                                            return propO |> Option.map(fun (sn, (_, next)) -> sn, (next, next) )
                                | None   -> return None
                }
                let indentRm          snp =
                    let rec indentMeChildNextRm          snp = fusion {
                        let  propIndentChildren = "IndentChildren"
                        let  currO, nextO       = propertyPairO propIndentChildren snp |> function Some (curr, next) ->  ParseO.parseIntO curr, ParseO.parseIntO next | _-> None, None 
                        let! parentO            = parentORm   snp
                        match parentO with
                        | Some p -> let! _, (me, next) = indentMeChildNextRm p
                                    return me, (me + (currO |> Option.defaultValue next), nextO |> Option.defaultValue next)
                        | None   -> return 0 , (      currO |> Option.defaultValue 4    , nextO |> Option.defaultValue 4   )
                    }
                    indentMeChildNextRm snp |>> fst
                let levelRm           snp = 
                    let rec levelRm2 snp lv = fusion {
                        let!  parentO = parentORm snp
                        match parentO with
                        | None   -> return  lv
                        | Some p -> return! levelRm2 p (lv + 1)
                    }
                    levelRm2 snp 0
                let ancestorsRm   snp = 
                    let rec  ancestorsRm2 snp lst = fusion {
                        let! parentO = parentORm snp
                        match parentO with
                        | Some p -> return! ancestorsRm2 p <| p::lst
                        | None   -> return  lst
                    }
                    ancestorsRm2 snp []
                let separateCodeRm snp = fusion {
                    let! indent        = indentRm snp
                    let  indentF, prfx = if indent = 0         then (id, "") else (Array.map    (fun (l, pr) -> String.replicate indent " " + l, pr), sprintf"(%d)" indent)
                    let! code          = prepareCodeRm snp
                    //let  name          = nameSanitized snp
                    let  code, directs =
                        code.Split('\n')
                        |> FsCode.separatePrepros
                        |> indentF
                        |> FsCode.getTopDirectives
                    return
                        [| snp.snpId, snippetName snp.snpName snp.snpContent, code.Length, indent |] , code, directs
                }
                let addSeps (lines1:(SnippetId*string*int*int)[], code1:string[], directs1:FsCode.PreproDirective[])
                            (lines2:(SnippetId*string*int*int)[], code2:string[], directs2:FsCode.PreproDirective[]) =
                    Array.append lines1   lines2
                  , Array.append code1    code2
                  , Array.append directs1 directs2
                let reducedCodeRm  snippets = fusion {
                    let! parts    = snippets |> traverseSeq separateCodeRm
                    let  reduced  = parts
                                    |> fun snps -> if snps |> Seq.isEmpty then seq [ [||],  [||],  [||] ] else snps
                                    |> Seq.reduce addSeps
                                    |> fun (lines, code                                         , directs) ->
                                           (lines, code |> String.concat "\n" |> Array.singleton, directs)
                    return reduced
                }
                let finishCode (lines:(SnippetId*string*int*int)[],code:string[], directs:FsCode.PreproDirective[]) =
                    let assembs, defines, prepIs, nowarns, cdO = FsCode.separateDirectives directs
                    let config = defines |> Seq.sort |> Seq.map ((+)"-d:") |> String.concat " "
                    let part1  =
                      [ if config <> "" then yield "////" + config
                        if cdO.IsSome   then yield sprintf "////#cd @\"%s\"" cdO.Value
                        yield! prepIs  |> Seq.map (sprintf "#I @\"%s\""    )
                        yield! assembs |> Seq.map (sprintf "#r @\"%s\""    )
                        yield! nowarns |> Seq.map (sprintf "#nowarn \"%s\"" )
                      ]
                    Seq.append part1 code |> String.concat "\n"
                  , lines 
                    |> Seq.mapFold (fun firstLine (id, name, len, ind) -> ((id, name), (ind, firstLine, firstLine + len)), firstLine + len) part1.Length
                    |> fst
                    |> Seq.toArray
                //let codeAndStartsRm   snpIds = reader {
                //    let! snippets = orderedRm() |>> Seq.filter(fun snp -> snpIds |> Seq.contains snp.snpId)
                //    let! reduced  = reducedCodeRm snippets
                //    return finishCode reduced
                //}
                //let codeFsxRm         snippets = codeAndStartsRm snippets |> ReaderM.map fst
                let reducedOthersORm (before, snpId, snpIds) = fusion {
                    let  skipTake = if before then Seq.takeWhile else Seq.skipWhile
                    let! snippets = orderedRm() |>> skipTake (fun snp -> snp.snpId <> snpId) |>> Seq.filter(fun snp -> snp.snpId <> snpId && snpIds |> Set.contains snp.snpId) 
                    if snippets |> Seq.isEmpty then return None else
                    let! reduced = reducedCodeRm snippets
                    return Some reduced
                }
                let reducedOthersORmMemo() = memoizeRm (fun c -> c.reducedCache()) reducedOthersORm 
            //    let reducedOthersORmMemo<'m> : bool * SnippetId * Set<SnippetId> -> ReaderMResult<Reduced,SnippetCollection,'m> 
            //        = ReaderM.memoizeRm (fun c -> c.reducedCache()) reducedOthersORm 
                let fastReducedRm  curIdO lastIdO = fusion {
                    let!  curSnippetO  = curIdO  |> Option.map snippetORm |> insertO
                    let! lastSnippetO  = lastIdO |> Option.map snippetORm |> insertO
                    match (Option.bind id curSnippetO, Option.bind id lastSnippetO) with
                    | _              , None
                    | None           , _                -> return! reducedCodeRm Seq.empty
                    | Some curSnippet, Some lastSnippet ->
                    let! preds = uniquePredsRm lastSnippet
                    let  preds = Set preds
                    let! reducedBeforeO = reducedOthersORmMemo() (true , curSnippet.snpId, preds)
                    let! reducedAfterO  = reducedOthersORmMemo() (false, curSnippet.snpId, preds)
                    let! currentCode    = separateCodeRm           curSnippet
                    let part1 = reducedBeforeO |> Option.map (swap addSeps currentCode) |> Option.defaultValue currentCode
                    return      reducedAfterO  |> Option.map (     addSeps part1      ) |> Option.defaultValue part1
                }
                let fastCodeRm  curIdO lastIdO = fusion {
                    let! reduced  = fastReducedRm curIdO lastIdO
                    return finishCode reduced
                }
                let codeFsxRm    curId = fastCodeRm  (Some curId) (Some curId) |>> fst
                
        /// Essentials that cannot run in Javascript (WebSharper)
        [< AutoOpen >]
        module LibraryNoJS =
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
                
                
            module CopyIfMust =
                open System.IO
                
                let copyIfNotExistsToFile from dest =
                    let fit = FileInfo dest
                    if not fit.Exists then
                        File.Copy(from, dest, true )
                
                let toFile from dest =
                    let fit = FileInfo dest
                    let must = 
                        match fit.Exists with 
                        | false -> true
                        | true  ->
                            let fif = FileInfo dest
                            fif.Length <> fit.Length || fif.LastWriteTime <> fit.LastWriteTime
                    if must then
                        File.Copy(from, dest, true )
                
                let toDir from destDir =
                    let dest = Path.Combine(destDir, Path.GetFileName(from))
                    toFile from dest
                
            module FsCode =
                open CommArg
                open CommArgCollection
                open FsCode
                open System.IO
                    
                let flag t f p = function true -> p + t |_-> p + f
                let flagpm   p = flag "+" "-" p
            
                let intRootDir       = NewString("RootDir"      , true , sprintf  "++root:%s"        )
                let intSnippet       = NewString("Snippet"      , true , sprintf  "++snippet:%s"     )
                let intCreateDir     = NewBool  ("CreateDir"    , true , fun v ->  if v then "++createdirectory" else "")
                let intDirectory     = NewString("Directory"    , true , sprintf  "++directory:%s"   )
                let intName          = NewString("Name"         , true , sprintf  "++name:%s"        )
                let intExtension     = NewString("Extension"    , true , sprintf  "++extension:%s"   )
                let intFileName      = NewString("Filename"     , true , sprintf  "++filename:%s"    )
                let intOutputFile    = NewString("OutputFile"   , true , sprintf  "++fileout:%s"     )
                let intConfig        = NewString("Config"       , true , sprintf  "++config:%s"      )
                let intCopyConfig    = NewBool  ("CopyConfig"   , true , flagpm   "++copyconfig"     )
                let intWebSharper    = NewBool  ("WebSharper"   , true , flagpm   "++websharper"     )
                let intStaticLinkAll = NewBool  ("StaticLinkAll", true , flagpm   "++staticlinkall"  )
                let intCopyAssem     = NewBool  ("CopyAssem"    , true , flagpm   "++copyassemblies" )
                let intShowArgs      = NewBool  ("ShowArgs"     , true , flagpm   "++showargs"       )
                let intRemLineDir    = NewBool  ("RemLineDir"   , true , flagpm   "++remlinedir"     )
                
                let internalArgs = 
                    Set [
                        intSnippet      .CommArg.cargId
                        intDirectory    .CommArg.cargId
                        intName         .CommArg.cargId
                        intExtension    .CommArg.cargId
                        intFileName     .CommArg.cargId
                        intOutputFile   .CommArg.cargId
                        intConfig       .CommArg.cargId
                        intWebSharper   .CommArg.cargId
                        intStaticLinkAll.CommArg.cargId
                        intCopyAssem    .CommArg.cargId
                        intShowArgs     .CommArg.cargId
                    ]
            
                let fscIOption     = NewString("IOption"    , false, sprintf "-I:%A"          )
                let fscReference   = NewString("Reference"  , false, sprintf "-r:%A"          )
                let fscSource      = NewString("Source"     , false, sprintf "%A"             )
                let fscTarget      = NewString("Target"     , true , sprintf "--target:%s"    )
                let fscPlatform    = NewString("Platform"   , true , sprintf "--platform:%s"  )
                let fscOutput      = NewString("Output"     , true , sprintf "-o:%A"          )
                let fscDebug       = NewString("Debug"      , true , sprintf "--debug:%s"     )
                let fscDefine      = NewString("Define"     , false, sprintf "--define:%s"    )
                let fscStaticLink  = NewString("StaticLink" , false, sprintf "--staticlink:%s")
                let fscGenFSharp1  = NewString("GenFSharp1" , false, sprintf "-%s"            )
                let fscGenFSharp2  = NewString("GenFSharp2" , false, sprintf "--%s"           )
                let fscNoFramework = NewBool  ("NoFramework", true , function true -> "--noframework" |_-> "" )
                
                let FSharpArgs = 
                    Set [
                          fscIOption    .CommArg.cargId
                          fscReference  .CommArg.cargId
                          fscSource     .CommArg.cargId
                          fscTarget     .CommArg.cargId
                          fscPlatform   .CommArg.cargId
                          fscOutput     .CommArg.cargId
                          fscDebug      .CommArg.cargId
                          fscDefine     .CommArg.cargId
                          fscStaticLink .CommArg.cargId
                          fscGenFSharp1 .CommArg.cargId
                          fscGenFSharp2 .CommArg.cargId
                          fscNoFramework.CommArg.cargId
                ] 
                
                let wscWebSite      = NewString("Website"     , true , sprintf "--wsoutput:%A"              )
                let wscProjectFile  = NewString("WsProject"   , true , sprintf "--project:%A"               )
                let wscProjectType  = NewString("ProjectType" , true , sprintf "--ws:%s"                    )
                let wscGenWSharper  = NewString("GenWSharper" , false, sprintf "--%s"                       )
                let wscJSMap        = NewBool  ("JSMap"       , false, flagpm  "--jsmap"                    )
                let wscDeadCodeElim = NewBool  ("DeadCodeElim", false, flagpm  "--dce"                      )
                let wscWarnOnly     = NewBool  ("WarnOnly"    , false, flagpm  "--wswarnonly"               )
                let wscDownloadResc = NewBool  ("DownloadResc", false, flagpm  "--dlres"                    )
                let wscPrintJS      = NewBool  ("PrintJS"     , false, flagpm  "--printjs"                  )
                let wscClosures     = NewBool  ("Closures"    , false, flagpm  "--closures"                 )
                let wscClosrMoveTop = NewBool  ("ClosrMoveTop", false, flag    "--closures:movetotop" "" "" )
                let wscJsOutput     = NewString("JsOutput"    , true , sprintf "--jsoutput:%A"              )
            
                let WebSharpArgs = 
                    Set [
                          wscWebSite     .CommArg.cargId
                          wscProjectFile .CommArg.cargId
                          wscProjectType .CommArg.cargId
                          wscGenWSharper .CommArg.cargId
                          wscJSMap       .CommArg.cargId
                          wscDeadCodeElim.CommArg.cargId
                          wscWarnOnly    .CommArg.cargId
                          wscDownloadResc.CommArg.cargId
                          wscPrintJS     .CommArg.cargId
                          wscClosures    .CommArg.cargId
                          wscClosrMoveTop.CommArg.cargId
                          wscJsOutput    .CommArg.cargId
                    ] 
                
                let dllOptions   () = CommArgCollection [ fscTarget      /= "library"                                                                     ] 
                let exeOptions   () = CommArgCollection [ fscTarget      /= "exe"     ; intCopyAssem /= true ; intCopyConfig /= true ]
                let winExeOptions() = CommArgCollection [ fscTarget      /= "winexe"  ; intCopyAssem /= true ; intCopyConfig /= true ]
                
                open FusionM
                open Operators
                
                let gS v = getStringRm     v
                let gB v = getBoolRm false v
            
                let genericOptions () = 
                  CommArgCollection
                    [
            //           intSnippet     /= "Test"
                        intRootDir     /= Path.GetFullPath ".."
                        intName        /= (rtn (fun s     -> String.splitByChar '/' s |> Array.last ) <*> gS intSnippet                                       )
                        intDirectory   /= (rtn (fun r     -> r                                      ) <*> gS intRootDir                                       )
                        intFileName    /= (rtn (fun d n   -> d +/+ "src" +/+ n + ".fs"              ) <*> gS intDirectory  <*> gS intName                     )
                        fscOutput      /= (rtn (fun d n e -> d +/+ "bin" +/+ n + "." + e            ) <*> gS intDirectory  <*> gS intName <*> gS intExtension )
                        intExtension   /= (rtn (function "library" -> "dll" |_-> "exe"              ) <*> gS fscTarget                                        )
                        intOutputFile  /= (rtn               Path.GetFileName                         <*> gS fscOutput                                        )
                        intConfig      /= (rtn (fun o     -> o + ".config"                          ) <*> gS intOutputFile                                    )
                        intWebSharper  /=       containsAnyOfRm WebSharpArgs
                        fscSource      /=       gS intFileName
                        fscNoFramework /=  fusion {
                                                let!   args  = filterRm (fun (a,v) -> a.cargId = fscReference.CommArg.cargId)
                                                let!   args2 = args |> traverseSeq (fun (a,b) -> argumentRm a b)
                                                return args2 
                                                       |> Seq.map(fun s -> s.ToLower()) 
                                                       |> Seq.exists(fun s -> s.Contains("fsharp.core.dll") || s.Contains("mscorlib.dll") )
                                            }
                    ]
                    
                let siteOptions ()=
                  CommArgCollection
                    [|
                       wscProjectType /=       "Site"
                       wscWebSite     /= (rtn (fun d   -> d +/+ "website"  ) <*> gS intDirectory )
                       wscJsOutput    /= (rtn (fun d n -> d +/+ n + "0.js" ) <*> gS wscWebSite  <*> gS intName )
                       wscProjectFile /=       gS intName
                       wscJSMap       /=       true
                    |] 
                 
                let wsProjectOptions ()=
                  CommArgCollection
                    [|
                       wscProjectFile /= gS intName
                    |] 
                 
                let debugOptions() = 
                  CommArgCollection
                    [|
                       fscGenFSharp1  /= "g"
                       fscDebug       /= "full"
                       fscDefine      /= "DEBUG"
                       fscDefine      /= "TRACE"
                       fscGenFSharp2  /= "optimize-"
                       fscGenFSharp2  /= "tailcalls-"
                    |]
                
                let otherOptions () =
                  CommArgCollection
                    [|
                       //@"--noframework"
                       fscGenFSharp2  /= "warn:3"
                       fscGenFSharp2  /= "nowarn:1178"
                       fscGenFSharp2  /= "nowarn:1182"
                       fscGenFSharp2  /= "nowarn:52"
                       fscGenFSharp2  /= "warnaserror:76"
                       fscGenFSharp2  /= "vserrors"
                       fscGenFSharp2  /= "utf8output"
                       fscGenFSharp2  /= "fullpaths"
                       fscGenFSharp2  /= "flaterrors"
                       fscGenFSharp2  /= "subsystemversion:6.00"
                       fscGenFSharp2  /= "highentropyva+"
                       intRemLineDir  /= true
                    |]
                
                let compileOptionsDll (snp:string) = 
                    genericOptions()
                    + dllOptions  ()
                    + otherOptions()
                    + intSnippet     /= snp
                    
                let compileOptionsDllDebug   (snp:string) = compileOptionsDll      snp + debugOptions ()       
                let compileOptionsExeDebug    snp         = compileOptionsDllDebug snp + exeOptions   ()
                let compileOptionsWinExeDebug snp         = compileOptionsDllDebug snp + winExeOptions()
                    
                let prepOptions (args:CommArgCollection<_>) (assembs : string [], defines : string [], prepoIs : string []) =
                    let staticLinksAll = CommArgCollection.getBoolR false intStaticLinkAll args
                    args + [
                        yield! prepoIs |> Array.map ((/=) fscIOption  ) 
                        yield! assembs |> Array.map ((/=) fscReference)
                        yield! defines |> Array.map ((/=) fscDefine   )
                        if staticLinksAll = Ok true then 
                            yield! assembs |> Array.map (fun f -> fscStaticLink /= System.IO.Path.GetFileNameWithoutExtension f)
                    ]
                    
                let processArgs code assembs nowarns = fusion {        
                    let! show      = gB intShowArgs
                    if show      then let! args = argumentsRm (fun _ -> true)
                                      args |> Seq.sort |> Seq.iter (printfn "%s")
                    let! workDir   = getStringRm intDirectory
                    let! fileName  = gS intFileName
                    let! output    = gS fscOutput
                    let! copyAssem = gB intCopyAssem
                    let! createDir = gB intCreateDir
                    let  srcDir    = Path.GetDirectoryName fileName
                    let  outDir    = Path.GetDirectoryName output
                    if createDir then 
                                     Directory.CreateDirectory workDir |> ignore
                                     Directory.CreateDirectory  srcDir |> ignore
                                     Directory.CreateDirectory  outDir |> ignore
                    let  code2     = [
                                        yield! nowarns |> Seq.distinct |> Seq.map (sprintf "#nowarn \"%s\"")
                                        yield! code 
                                     ] |> String.concat "\n"
                    do               File.WriteAllText(fileName, code2)
                    if copyAssem then assembs |> Array.iter (fun f -> outDir |> CopyIfMust.toDir f)      
                }
                
            module WsCompiler =
                open FusionAsyncM
                open System.IO
                open CommArg
                open FsCode
                open CommArgCollection
                
                let compileRm() = fusion {
                    let  allArgIds  = Set.union WebSharpArgs FSharpArgs 
                    let! args       = ofFusionM <| argumentsRm (fun (arg,_) -> Set.contains arg.cargId allArgIds )
                    let! createDir  = ofFusionM <| getBoolRm false intCreateDir
                    if   createDir then let! site = ofFusionM <| getStringRm wscWebSite
                                        Directory.CreateDirectory(site) |> ignore
                    let! out, err   = args
                                      |> String.concat "  "
                                      |> fun ops -> (new RunProcess.ShellEx(@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\wsfsc.exe", ops, priorityClass = System.Diagnostics.ProcessPriorityClass.RealTime)).StartAndWaitR()
                                      |> ofResult
                    return if out = "" then "Compiled!" else out + err
                }
                let compile args = 
                    compileRm() 
                    |> runReader args
                    |> Async.RunSynchronously
                    //|> fun (sO, _, m) -> sO |> Option.defaultValue "" + m
                
        /// Essentials that part runs in Javascript and part runs in the server
        [< AutoOpen >]
        module Library2 =
            [<WebSharper.JavaScript>]
            module WebSockets =
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
                //#define WEBSHARPER
                open WebSharper
                
                let MessageBrokerId  = "<MessageBroker>"
                
                type Address = Address of address:string
                with member this.txt = match this with Address txt -> txt
                
                let MessageBrokerAddress = Address MessageBrokerId
                
                /// Requests made to Message Broker
                [< NamedUnionCases "type" >]
                type BrokerRequest = 
                    | BRGetConnections  /// request for list of connections
                    | BRGetProcessId    /// request PID of broker process
                
                /// Replies from Message Broker
                [< NamedUnionCases "type" >]
                type BrokerReply = 
                    | BRConnections  of string[]
                    | BRPid          of int
                    | BRString       of string
                  //  | BRPleaseClose  
                
                [< NamedUnionCases "type" >]
                type MessageType = 
                    | MsgInformation             // does not expect a reply, payload may or may not be structured
                    | MsgRequest                 // expects a reply, structured payload
                    | MsgReply                   // structured payload.
                    | MsgFromBroker              // Payload is BrokerMessage. Only Broker should use this
                    | MsgRequestForId            // expects reply as Information with id
                    | MsgRequestForEcho          // expects reply as Information with same payload
                
                /// Replies from Message Broker
                [< NamedUnionCases "type" >]
                type BrokerMessage = 
                    | BMOk
                    | BMOnlyBrokerShouldUse
                    | BMDestinationNotFound of Address  
                    | BMWebSocketError      of string
                    | BMReceiverCantReply
                    | BMUnexpectedMsgType   of MessageType
                    | BMUnexpectedResponse  of string
                
                [< NamedUnionCases "type" >]
                type Replier = 
                    | NoReply
                    | Broker
                    | Receiver
                
                [< NamedUnionCases "type" >]
                type MessageGeneric = {
                    from          : Address
                    destination   : Address
                    msgType       : MessageType
                    subtype       : string      // free short string that provides information to deserialize payload
                    id            : System.Guid
                    payload       : string
                    replier       : Replier
                }
                
                [< Inline >]
                let inline processPayload f (payload:string) : string =
                    if payload = "" then Unchecked.defaultof<_> else Json.Deserialize payload
                    |> f
                    |> Json.Serialize
                            
                [<  Inline >]
                let newMsgSerialized dst payload = {
                    from          = Address ""
                    destination   = dst
                    msgType       = MsgRequest
                    subtype       = ""
                    id            = System.Guid.NewGuid()
                    payload       = payload
                    replier       = NoReply
                }
                
                [< Inline >]
                let inline payload        pl  msg = { msg with payload       = Json.Serialize pl }
                let inline from           frm msg = { msg with from          = frm               }
                let inline destination    dst msg = { msg with destination   = dst               }
                let inline msgType        typ msg = { msg with msgType       = typ               }
                let inline subtype        sub msg = { msg with subtype       = sub               }
                let inline replier        rpl msg = { msg with replier       = rpl               }
                let inline msgId          id  msg = { msg with id            = id                }
                
                [<  Inline >]
                let inline newMsg dst payload = Json.Serialize payload |> newMsgSerialized dst
                
                [<  Inline >]
                let inline msgPayload msg = Json.Deserialize msg.payload
                
                let mapPayload f msg = { msg with payload = f msg.payload }
                
                let inline makeReply msg =
                    msg
                    |> msgType MsgReply
                    |> replier NoReply
                
                [<  Inline >]
                let inline respond pyld msg =
                    msg
                    |> makeReply
                    |> payload  pyld
                
                type IServer =
                    abstract member Post  : MessageGeneric -> unit
                    abstract member Close : unit           -> unit
                
                type CMessage<'C2S> = WebSharper.Owin.WebSocket.Client.Message<'C2S>
                
                
                open System
                open System.Threading
                open System.Net.WebSockets
                
                [< JavaScript false >]
                module Client =
                    let startStateFull receive initAndfolder =
                        async {
                            let! initState, folder = initAndfolder
                            let agentBox = Mailbox.foldA (fun ex st -> print ex; st) folder initState
                            let finish a = agentBox.Post CMessage.Close ; printfn "%A" a
                            let error  a = agentBox.Post CMessage.Error ; finish a
                            Async.StartWithContinuations(receive agentBox, finish, error, error)
                        }
                
                    type WebSocketServer<'S2C, 'C2S>(uri:string) =
                        let conn = new ClientWebSocket()
                        let chunkSize = 8192
                        let send (txt:string)  =
                            async {
                                let buffer = System.Text.Encoding.UTF8.GetBytes txt
                                let chunks = buffer.Length / chunkSize
                                for i = 0 to chunks do
                                    let last = i = chunks
                                    let size = if last then buffer.Length % chunkSize else chunkSize
                                    do! conn.SendAsync(new ArraySegment<byte>(buffer, i * chunkSize, size), WebSocketMessageType.Binary, last, CancellationToken.None) |> Async.AwaitTask
                            }
                        let receive (receiverBox:MailboxProcessor<CMessage<'S2C>>) =
                            let buffer : byte[] = Array.create chunkSize 0uy
                            let builder         = System.Text.StringBuilder()
                            let keepgo          = ref true
                            async {
                                receiverBox.Post CMessage.Open
                                while conn.State = WebSocketState.Open && !keepgo do
                                    let! result = conn.ReceiveAsync(ArraySegment buffer, CancellationToken.None) |> Async.AwaitTask
                                    match result.MessageType with
                                    | WebSocketMessageType.Close -> keepgo := false
                                    | WebSocketMessageType.Text ->
                                        let txt = System.Text.Encoding.UTF8.GetString buffer.[0..result.Count - 1]
                                        builder.Append txt |> ignore
                                        if result.EndOfMessage then
                                            let txt = builder.ToString()
                                            builder.Clear() |> ignore
                                            Json.Deserialize txt |> CMessage.Message |> receiverBox.Post
                                    | _ -> ()
                                return "WebSocketServer receive Closed."
                            }
                        let brokerBox = Mailbox.iterA print (Json.Serialize >> send)
                        let connect initAndfolder =
                            async {
                                printfn "Connecting %s" uri
                                do! conn.ConnectAsync(new Uri(uri), CancellationToken.None) |> Async.AwaitTask
                                printfn "Connected %A" WebSocketState.Open
                                do! startStateFull receive initAndfolder
                            }
                        member this.WebSocket        = conn
                        member this.Post (msg: 'C2S) = brokerBox.Post msg
                        member this.Connect          = connect
                
                    let ConnectStateful<'S2C, 'C2S> uri getInitAndfolder =
                        async {
                            let  server          = WebSocketServer uri
                            do!  server.Connect (getInitAndfolder server)
                            return server
                        }
                
                    let ConnectStatefulFS uri clientId (f:IServer -> _) =
                        let uri2 = sprintf "ws://%s?ClientId=%s" uri clientId
                        let func (serverP:WebSocketServer<MessageGeneric, MessageGeneric>) =
                            f { new IServer with
                                  member this.Post  v = serverP.Post v
                                  member this.Close() = serverP.WebSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, null, CancellationToken.None) 
                                                        |> Async.AwaitTask |> Async.RunSynchronously            
                               }
                        ConnectStateful uri2 func
                        |> Async.map ignore
                        
                //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Owin\lib\net40"
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Owin\lib\net40\Owin.dll"
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
                
                open System
                open WebSharper.Owin.WebSocket
                open WebSharper.Owin.WebSocket.Client
                
                //#define FSS_SERVER
                //#define WEBSHARPER
                
                type  Server = WebSocketServer<MessageGeneric,MessageGeneric>
                
                type ClientTypeFSharp    = FSharp
                #if WEBSHARPER
                type ClientTypeFSStation = FSStation
                type ClientTypeJScript   = JScript
                
                [< Inline >]
                let ConnectStatefulJS uri clientId (f:IServer -> Async<'state * ('state -> CMessage<MessageGeneric> -> Async<'state>)>) =
                    let uri2 = sprintf "ws://%s?ClientId=%s" uri clientId
                    let func (serverP:WebSocketServer<MessageGeneric,MessageGeneric>) =
                        f { new IServer with
                              member this.Post  v = serverP.Post v
                              member this.Close() = serverP.Connection.Close 1000 // Normal Closure
                           }
                    let  endPoint = Endpoint.CreateRemote(uri2, JsonEncoding.Readable)
                    ConnectStateful endPoint func
                    |> Async.map ignore
                #endif
                
                module ReplyHandler =
                    type WaitForReplyMsg =
                        | Add    of Guid * ((MessageGeneric -> unit) * (exn -> unit) * (OperationCanceledException -> unit))
                        | Reply  of Guid *   MessageGeneric
                        | Excpn  of Guid *   exn
                        | Cancel of Guid *   OperationCanceledException
                        
                    type Handler (defProc) =
                        let waitingAgent =    
                            Mailbox.fold Mailbox.defHandler (fun waitingForReply action ->
                                let exec key f def  = Map.tryFind key     waitingForReply |> Option.map f |> Option.defaultWith def
                                                      Map.remove  key     waitingForReply
                                match action with
                                | Add   (key, fns) -> Map.add     key fns waitingForReply
                                | Reply (key, msg) -> exec        key (fun (f,_,_) -> f msg) (fun () -> defProc msg)
                                | Excpn (key, exn) -> exec        key (fun (_,f,_) -> f exn)  ignore
                                | Cancel(key, cnl) -> exec        key (fun (_,_,f) -> f cnl)  ignore
                            ) Map.empty
                        member __.Add    key fns = Add   (key, fns) |> waitingAgent.Post
                        member __.Reply  key msg = Reply (key, msg) |> waitingAgent.Post
                        member __.Raise  key exn = Excpn (key, exn) |> waitingAgent.Post
                        member __.Cancel key cnl = Cancel(key, cnl) |> waitingAgent.Post
                
                [< Inline "window.location.href" >]
                let getEndPoint() = 
                #if FSS_SERVER
                    "No Endpoint required, should use WSMessagingClient with FSStation parameter not FSharp"
                #else
                    "http://localhost:9005/#/Snippet/f47f01df-d24a-4836-b6e2-752b74635c83"
                #endif
                
                let extractEndPoint() = 
                    let ep : string = getEndPoint()
                    let ep2 = ep.Substring(ep.IndexOf "//" + 2)
                    ep2.Split('/').[0]
                
                type WSMessagingClient(connectStateful: string -> string -> (IServer -> Async<int * (int -> CMessage<MessageGeneric> -> Async<int>)>) -> Async<unit>
                        , clientId:string, ?timeout:int, ?endPoint:string) =    
                    let wsEndPoint    = defaultArg endPoint (extractEndPoint() + "/ws")
                    let clientAddress = Address clientId
                    let wsTimeout     = defaultArg timeout 60000
                
                    let mutable out = printfn "%s"
                    //let printoutfn out     = 0 // just to catch printoutfn out that should not be around 
                    let mutable serverO : IServer option = None
                    let mutable payloadProcessorO : (string -> Async<string>) option = None
                    let waiting = ReplyHandler.Handler (fun msg -> printfn "Reply from '%s': %s" msg.from.txt msg.payload)
                
                    let reply msg = serverO |> Option.iter (fun server -> msg |> from clientAddress |> destination msg.from |> server.Post)
                    let close ()  = serverO |> Option.iter (fun server -> server.Close() ; serverO <- None                                )
                
                    let processReply      msg = waiting.Reply msg.id msg
                    let mapPayloadWrap (fW: _ -> Async<_> ) msg =
                        async {
                            let! r  = fW msg.payload
                            return msg |> mapPayload (fun _ -> r)
                        }
                    let processMessage msg =
                        //printfn "%A" msg
                        match msg.msgType with
                        | MsgFromBroker     
                        | MsgReply           -> processReply msg
                        | MsgInformation     -> printfn "Information from '%s': %s" msg.from.txt (msgPayload msg)
                        | MsgRequest         -> match payloadProcessorO with 
                                                | None           -> if msg.replier = Receiver then () // requires a reply but cannot give one, ask broker to handle it
                                                | Some processor ->
                                                msg |> mapPayloadWrap processor |> Async.iterA (makeReply >> reply) 
                        | MsgRequestForEcho  -> msg |> mapPayload     id        |> msgType MsgInformation |> reply
                        | MsgRequestForId    -> msg |> respond        clientId  |> msgType MsgInformation |> reply
                    
                    let connectToWebSocketServer() =
                        printfn "in connectToWebSocketServer"
                        async {
                            do! connectStateful wsEndPoint clientId <| fun (server: IServer) -> async {
                                return 0, fun state wsmsg -> async {
                                    try match wsmsg with
                                        | CMessage.Message msg -> processMessage msg
                                        | CMessage.Open        -> printfn "WebSocket %s connection open."   clientId ; serverO <- Some server
                                        | CMessage.Close       -> printfn "WebSocket %s connection closed." clientId ; close()
                                        | CMessage.Error       -> printfn "WebSocket %s connection error!"  clientId
                                    with e -> printfn "msg: %A \nexn:%A" wsmsg e 
                                    return state
                                }
                            }
                            printfn "connectToWebSocketServer with server"
                            
                        }
                
                    let checkServer = Mailbox.callA print ( fun () -> async {
                        //printfn "getServer"
                        if serverO.IsNone then
                            printfn "getServer Connecting"
                            do! connectToWebSocketServer()
                            do! Async.Sleep 200
                        return serverO |> Result.ofOption (fun () -> ErrorMsg "could not connect to Server")
                    })        
                
                    let getServer() : AsyncResult<IServer, _> = checkServer.PostAndAsyncReply(fun reply -> reply, ())
                        
                    let postR (server: IServer) rpl msg = 
                        let m = msg |> from clientAddress |> replier rpl 
                        try       server.Post m
                        with e -> serverO <- None
                                  raise e
                
                    let sendAndForget msg = asyncResult {
                        let! server = getServer()
                        msg |> postR server NoReply
                    }
                        
                    let sendAndReply rpl msg = asyncResult {
                        let! server  = getServer()
                        let  replyA  = Async.FromContinuations(fun fns -> 
                            waiting.Add msg.id fns
                            msg |> postR server rpl
                            if wsTimeout > 0 then
                                async {
                                    do! Async.Sleep wsTimeout
                                    waiting.Raise msg.id (TimeoutException(sprintf "Did not receive reply in %d seconds for Message: %A" (wsTimeout / 1000) msg) :> exn)
                                } |> Async.Start
                        )
                        return! replyA
                    }
                        
                    let sendAndVerify msg = asyncResult {
                        let! reply   = sendAndReply Broker msg 
                        do!  match reply.msgType with
                             | MsgFromBroker  -> let  bm = msgPayload reply
                                                 if   bm = BMOk 
                                                 then Result.Ok    () 
                                                 else Result.Error <| ResultMessage.Message bm
                             | _              ->      Result.Error <| ResultMessage.Message (BMUnexpectedMsgType reply.msgType)
                    }
                    
                    let sendGetReply msg =
                        asyncResult {
                            let! reply   = sendAndReply Receiver msg 
                            let! result =
                                match reply.msgType with
                                | MsgReply      -> Result.Ok     reply.payload
                                | MsgFromBroker -> let bm = msgPayload reply
                                                   Result.Error <| ResultMessage.Message bm
                                | _             -> Result.Error <| ResultMessage.Message (BMUnexpectedMsgType reply.msgType)
                            return result
                        }
                
                    let getListeners() =
                        asyncResult {
                            let  msg    = newMsg MessageBrokerAddress BRGetConnections
                            let! reply  = sendGetReply msg
                            match Json.Deserialize<BrokerReply> reply with
                            | BRConnections listeners -> return listeners
                            | r -> return! Result.Error <| ResultMessage.Message (BMUnexpectedResponse <| sprintf "%A" r)
                        } 
                        
                    let getProcessId() =
                        asyncResult {
                            let  msg    = newMsg MessageBrokerAddress BRGetProcessId
                            let! reply  = sendGetReply msg
                            match Json.Deserialize<BrokerReply> reply with
                            | BRPid pid -> return pid
                            | r -> return! Result.Error <| ResultMessage.Message (BMUnexpectedResponse <| sprintf "%A" r)
                        } 
                        
                    let sendMsg msg =
                        asyncResult {
                            if msg.replier = NoReply
                            then do!     sendAndForget msg
                                 return  ""
                            else return! sendGetReply  msg
                        }
                    member this.MBListeners            = getListeners()
                    member this.MBProcessId            = getProcessId()
                    member this.EndPoint               = wsEndPoint
                    member this.ClientId               = clientId
                    member this.SendMsg           msg  = sendMsg msg
                    [<  Inline >]
                    member this.SendAndForget dst pyld = newMsg dst pyld |> sendAndForget
                    [<  Inline >]
                    member this.SendAndVerify dst pyld = newMsg dst pyld |> sendAndVerify
                    [<  Inline >]
                    member this.SendGetReply  dst pyld = newMsg dst pyld |> sendGetReply  |> AsyncResult.map Json.Deserialize
                    member this.Out with set fout      = out <- fout
                    [<  Inline >]
                    member this.ProcessIncoming   pro  = payloadProcessorO <- Some (Json.Deserialize >> pro >> (Async.map Json.Serialize))
                                                         newMsg MessageBrokerAddress "Registering Processor" 
                                                         |> msgType MsgInformation
                                                         |> sendAndForget |> AsyncResult.iterA (string >> failwith) id
                    interface IDisposable with
                        member this.Dispose() = close()
                
                #if FSS_SERVER   
                    [< JavaScript false >]
                    new (clientId:string, FSStation, ?timeout, ?endPoint) = new WSMessagingClient(Broker.ConnectStatefulFSS, clientId, ?timeout = timeout, ?endPoint = endPoint)
                #endif
                    [< JavaScript false >]
                    new (clientId:string, FSharp   , ?timeout, ?endPoint) = new WSMessagingClient(Client.ConnectStatefulFS , clientId, ?timeout = timeout, ?endPoint = endPoint)
                #if WEBSHARPER
                    new (clientId:string,            ?timeout, ?endPoint) = new WSMessagingClient(       ConnectStatefulJS , clientId, ?timeout = timeout, ?endPoint = endPoint)
                #endif
                
                
            [< JavaScript >]
            type FSMessage =
            | MsgGetId
            | MsgGetSnippets     of SnippetReference[]
            | MsgGetCode         of SnippetReference
            | MsgGetPredecessors of SnippetReference
            | MsgAction          of string[]
            | MsgGetUrl
            | MsgGetValue        of string
            | MsgSetValue        of string * string
            | MsgGetModified     of SnippetReference
            
            [< JavaScript >]
            type FSResponse =
            | RespString         of string
            | RespSnippets       of Snippet[]
            | RespDateTime       of System.DateTime
            
            module FSharpStationClient =
                open WebSockets
            
                let mutable fsharpStationAddress = Address "FSharpStation1592020998181"
            
                let [< Rpc >] setAddress address = async { 
                    fsharpStationAddress <- address 
                    printfn "set %A" fsharpStationAddress
                }
            
                let fsharpStationClient, sendMessage : WSMessagingClient * (FSMessage -> AsyncResult<FSResponse, _>) = 
                    let client =
            #if WEBSHARPER 
                        if IsClient then 
                            new WSMessagingClient("FSharpStationClientJS"       )
                        else
            #endif            
            #if FSS_SERVER            
                            new WSMessagingClient("FSharpStationClientFSStation", FSStation)
            #else
                            new WSMessagingClient("FSharpStationClientFSharp"   , FSharp)
            #endif
                    client, fun m -> client.SendGetReply fsharpStationAddress m |> AsyncResult.absorbR
            
                let respString response = asyncResult { 
                    match response with
                    | RespString code -> return code
                    | _               -> return! Error <| ErrorMsg (sprintf "Unexpected %A" response)
                }
            
                let respDateTime response = asyncResult { 
                    match response with
                    | RespDateTime time -> return time
                    | _                 -> return! Error <| ErrorMsg (sprintf "Unexpected %A" response)
                }
            
                let respSnippet response = asyncResult { 
                    match response with
                    | RespSnippets [| snp |] -> return snp
                    | _                      -> return! Error <| ErrorMsg (sprintf "Unexpected %A" response)
                }
            
                let getCode path = 
                    path
                    |> String.splitByChar '/'
                    |> RefSnippetPath
                    |> MsgGetCode
                    |> sendMessage
                    |> AsyncResult.bind respString
            
                let getModified path = 
                    path
                    |> String.splitByChar '/'
                    |> RefSnippetPath
                    |> MsgGetModified
                    |> sendMessage
                    |> AsyncResult.bind respDateTime
            
                let getSnippet path = 
                    path
                    |> String.splitByChar '/'
                    |> RefSnippetPath
                    |> Array.singleton
                    |> MsgGetSnippets
                    |> sendMessage
                    |> AsyncResult.bind respSnippet
            
                let getUrl      () = MsgGetUrl            |> sendMessage |> AsyncResult.bind respString
                let getValue vrw   = MsgGetValue vrw      |> sendMessage |> AsyncResult.bind respString
                let setValue var v = MsgSetValue (var, v) |> sendMessage |> AsyncResult.bind respString
            
                let execJS      js          = sendMessage (MsgAction [| "ExecJS"      ; js              |]) |> AsyncResult.bind respString
                let setProperty path prop v = sendMessage (MsgAction [| "SetProperty" ; path ; prop ; v |]) |> AsyncResult.bind respString
                let sendOutput  txt         = sendMessage (MsgAction [| "AddOutput"   ; txt             |])
                let actionCall0 act         = sendMessage (MsgAction [|  act                            |])
                let actionCall1 act p1      = sendMessage (MsgAction [|  act          ; p1              |])
                let actionCall2 act p1 p2   = sendMessage (MsgAction [|  act          ; p1   ; p2       |])
                                        
                let getBrokerProcessId() = fsharpStationClient.MBProcessId
    
    module RunApplication =
        open FusionAsyncM
        open Operators
        
        open System.IO
        open RunProcess
        open WsCompiler
        open FsCode
        open CommArgCollection
        
        let killProcess excludeId name =
            System.Diagnostics.Process.GetProcessesByName name
            |> Seq.filter (fun worker -> worker.Id <> excludeId)
            |> Seq.iter (fun worker ->
                 worker.Kill       ()
                 worker.WaitForExit()
                 worker.Dispose    ())
    
        let compileNRun compile run  fs assembs nowarns exclPid = fusion  {
            do!                ofFusionM <| processArgs fs assembs nowarns
            let! name        = ofFusionM <| getValueRm intName
            do                 killProcess exclPid name
            if compile then
                let! res         = compileRm() 
                do                 print res
            if run then
                let! site0       = ofFusionM <| getStringRm wscWebSite
                let  site        = Path.GetFullPath site0
                let! exeFile0    = ofFusionM <| getStringRm fscOutput
                let  exeFile     = Path.GetFullPath      exeFile0
                let  startDir    = Path.GetDirectoryName exeFile0
                let  url         = @"http://localhost:9006"
                let  parms       = sprintf "%A %A" url site 
                do!                ofResultMessage <| Info (sprintf "Starting %s %s" exeFile parms)
                do                 startProcessDir   exeFile parms startDir |> ignore
                do                 startProcess      url     ""             |> ignore
        }
    
        let wsCompileSnippetArgs compile run snpName (args:CommArgCollection<_>) = 
            fusion {
                let! code            = ofAsyncResultRM <| FSharpStationClient.getCode snpName      |> freeMessage
                let! exclPid         = ofAsyncResultRM <| FSharpStationClient.getBrokerProcessId() |> freeMessage
                let  defines0        = (FsCode.extractDefines <| FsCode code).Split([| " " ; "-d:" |], System.StringSplitOptions.RemoveEmptyEntries) |> Array.map PrepoDefine
                //let  fs, assembs, defines1, prepIs, nowarns, cdO = separatePrepros (String.splitByChar '\n' code) |> separateDirectives
                let  fs, directs0    = separatePrepros (String.splitByChar '\n' code) |> getTopDirectives
                //let  assembs         = Array.append assembs0 [| @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\fsharp.core\lib\net45\FSharp.Core.dll" |]
                let  directs         = Array.append directs0 defines0
                let  assembs, defines, prepIs, nowarns, cdO = separateDirectives directs
                let  args2           = prepOptions args (assembs, defines, prepIs)
                do!                    compileNRun compile run  fs assembs nowarns exclPid |> mapReader args2
                return ""
            } 
            |> iterResultPrint
        
        let wsCompileSnippet compile run snpName = 
            compileOptionsExeDebug snpName
                + siteOptions()
                +   [   intShowArgs   /= true
                        intCreateDir  /= true
                        fscGenFSharp2 /= "noframework"
                        fscReference  /= @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
                        fscReference  /= @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
                        fscReference  /= @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
                    ]
            |> wsCompileSnippetArgs compile run snpName
    
        //wsCompileSnippet "FsRoot/Applications/FSharpStation/FSharpStation"
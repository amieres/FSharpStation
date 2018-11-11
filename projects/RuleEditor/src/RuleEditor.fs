#nowarn "52"
////-d:FSS_SERVER -d:FSharpStation1541588788569 -d:WEBSHARPER
////#cd @"..\projects\RuleEditor\src"
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
//#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
//#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
//#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
//#r @"..\..\LayoutEngine\bin\LayoutEngine.dll"
//#r @"..\packages\Owin\lib\net40\Owin.dll"
//#r @"..\packages\Microsoft.Owin.Hosting\lib\net451\Microsoft.Owin.Hosting.dll"
//#r @"..\packages\Microsoft.Owin.Host.HttpListener\lib\net451\Microsoft.Owin.Host.HttpListener.dll"
//#r @"..\packages\WebSharper.Owin\lib\net461\WebSharper.Owin.dll"
//#r @"..\packages\WebSharper.Owin\lib\net461\HttpMultipartParser.dll"
//#r @"..\packages\Microsoft.Owin.StaticFiles\lib\net451\Microsoft.Owin.StaticFiles.dll"
//#r @"..\packages\Microsoft.Owin.FileSystems\lib\net451\Microsoft.Owin.FileSystems.dll"
//#nowarn "52"
/// Root namespace for all code
//#define FSharpStation1541588788569
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
            
            [< Inline "(function (n) { return n.getFullYear() + '-' + ('0'+(n.getMonth()+1)).slice(-2) + '-' +  ('0'+n.getDay()).slice(-2) + ' '+('0'+n.getHours()).slice(-2)+ ':'+('0'+n.getMinutes()).slice(-2)+ ':'+('0'+n.getSeconds()).slice(-2)+ ':'+('00'+n.getMilliseconds()).slice(-3) })(new Date(Date.now()))" >]
            let nowStamp() = 
                let t = System.DateTime.UtcNow // in two steps to avoid Warning: The value has been copied to ensure the original is not mutated
                t.ToString("yyyy-MM-dd HH:mm:ss.fff", System.Globalization.CultureInfo.InvariantCulture)
            
            let [<Inline>] inline traceT t v = tee (sprintf "%A" >> (fun s -> s.[..100]) >> printfn "%s %s: %A" (nowStamp()) t) v
            let [<Inline>] inline trace   v = traceT "trace" v
            let [<Inline>] inline traceI  v = trace          v |> ignore
            
            module Log =
                let [<Inline>] inline In     n f   =      (traceT (sprintf "%s in " n)) >> f
                let [<Inline>] inline Out    n f   = f >> (traceT (sprintf "%s out" n))
                let [<Inline>] inline InA    n f p = async { return! In  n f p }
                let [<Inline>] inline OutA   n f p = async { return! Out n f p }
                let [<Inline>] inline InOut  n     = In  n >> Out  n
                let [<Inline>] inline InOutA n f p = async {
                    let!   r = InA n f  p
                    do         Out n id r |> ignore
                    return r 
                  }
            
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
            
            module ResultMessage =
            
                let inline noMsg    msg = msg |> function NoMsg -> true |_-> false
                let inline exclnoMsg ms = ms |> Seq.filter (noMsg >> not)
                /// converts Messages to other type of ResultMessage
                let rec bindMessage f msg = 
                    match msg with
                    | NoMsg          ->  NoMsg
                    | Message   m    ->  f m
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
            
                let reduceMsgs ms = ms |> Seq.fold addMsg NoMsg
            
                let summaryF f msg =        
                    match countF f msg with
                    | 0, 0, _
                    | 1, 0, 0
                    | 0, 1, 0 -> ""
                    | e, 0, _ -> sprintf "Errors   : %d\n" e
                    | 0, w, _ -> sprintf "Warnings : %d\n" w
                    | e, w, _ -> sprintf "Errors   : %d, Warnings: %d\n" e w
            
                /// returns a string with a count of errors and warnings, if more than one
                let summarizedF f msg = summaryF f msg + msg.ToString()
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
                    
                module Option =
                    open Option
                    
                    let rtn    = Some
                    let iter f = map f >> Option.defaultValue ()
                
                    let join o = Option.bind id o
                    
                    let apply fO  vO =
                        match fO, vO with
                        | Some f, Some v -> f v |> Some
                        | _     , _      -> None
                
                    /// Same as defaultWith
                    let mapNone  f o = Option.defaultWith f o
                    let bindNone f o = match o with | Some v -> Some v |_-> f()
                    
                    let (>>=)                              v f = bind f v
                    let traverseSeq            f            sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                                 Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq                  sq = traverseSeq id sq
                    let insertR (vOR:Result<_,_>)              = vOR |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                    let absorbR  vRO                           = vRO |> function Some(Ok v) -> Some v |_-> None
                    
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
                    let insertO  vAO                           = vAO |> Option.map(map Some) |> Option.defaultWith(fun () -> rtn None)
                    let insertR (vAR:Result<_,_>)              = vAR |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                
                
                module Result =
                    open Result
                
                    let freeMessage                r = r   |> function Ok v -> Ok v   | Error e -> ResultMessage.freeMessage e |> Error
                    let rtn                          = Ok
                    let toOption                   r = r   |> function Ok v -> Some v |       _ -> None
                    let defaultWith              f r = r   |> function Ok v ->      v | Error e -> f e
                    let defaultValue             d r = r   |> function Ok v ->      v | Error _ -> d
                    let failIfTrue               m v = if     v then m |> Error  else Ok () 
                    let failIfFalse              m v = if not v then m |> Error  else Ok () 
                    /// bind version that protects against exceptions
                    let bindP                 f    r = match r with
                                                       | Ok    v -> try   f v
                                                                    with  e -> ExceptMsg (e.Message, e.StackTrace) |> Error
                                                       | Error e ->       e                                        |> Error
                    /// map version that protects against exceptions
                    let inline mapP           f    m = bindP (f >> rtn) m            
                    let iter                  fE f r = r   |> mapP f |> defaultWith fE                                                 : unit
                    let get                        r = r   |>          defaultWith (string >> failwith)
                    let ofOption              f   vO = vO  |> Option.map Ok           |> Option.defaultWith (f >> Error)
                    let insertO                  vRO = vRO |> Option.map(map Some)    |> Option.defaultWith(fun () -> Ok None)
                    let absorbO               f  vOR = vOR |> bindP (ofOption f)
                    let (>>=)                    r f = bind f r
                    let traverseSeq           f   sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                       Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq        sq = traverseSeq id sq
                        
                    
                    type Builder() =
                        member inline this.Return          x       = rtn  x
                        member inline this.ReturnFrom      x       =     (x:Result<_,_>)
                        member        this.Bind           (w , r ) = bindP  r w
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
                                    
                    let result = Builder()
                    
                    module Operators =
                        let inline (|>>) v f   = mapP  f v
                        let inline (>>=) v f   = bindP f v
                        let inline (>>>) f g v = f v |>> g
                        let inline (>=>) f g v = f v >>= g
                        let inline rtn   v     = rtn    v
                        let result = result
                
                
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
                    let inline ofFusionM     (FM fm) = FAM(fun (s,r) -> async.Return (fm (s, r)) )
                    let inline ofAsync            a  = FAM(fun (s ,r ) -> a |> Async.map (fun v -> Some v, s, NoMsg) )
                    let inline ofAsyncResultRM    a  = a |> ofAsync |> bind ofResultRM
                
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
                        
                    
                    
            module ParseO =
                let tryParseWith tryParseFunc = tryParseFunc >> function
                        | true, v    -> Some v
                        | false, _   -> None
                
                let parseDateO   = tryParseWith System.DateTime.TryParse
                let parseIntO    = tryParseWith System.Int32   .TryParse
                let parseSingleO = tryParseWith System.Single  .TryParse
                let parseDoubleO = tryParseWith System.Double  .TryParse
                let parseGuidO   = tryParseWith System.Guid    .TryParse
                // etc.
                
                // active patterns for try-parsing strings
                let (|Date  |_|) = parseDateO
                let (|Int   |_|) = parseIntO
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
            
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            module View =
                let insertWO = 
                    function
                    | Some v -> View.Map Some v
                    | None   -> View.Const None
                let [<Inline>] inline consistent   (vl:View<_>)  = 
                    let prior      = ref <| Var.Create Unchecked.defaultof<_>
                    let setPrior v = if (!prior).Value <> v then (!prior).Value <- v 
                    View.Sink setPrior vl
                    !prior |> View.FromVar
            
                let bind = View.Bind
                let map  = View.Map
                let rtn  = View.Const
            
                let (>>=)                              v f = bind f v
                let rec    traverseSeq     f            sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                             Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                let inline sequenceSeq                  sq = traverseSeq id sq
            
            module Var =
                let mutable private counter = 1
                let freshId () =
                    counter <- counter + 1
                    "varuid" + string counter
                        
                let lensView get update view0 (var: Var<_>) =
                    let id   = freshId()
                    let view = View.Map2 (fun v _ -> get v) var.View view0
                    { new Var<'V>() with
                        member this.Get        () = get (var.Get())
                        member this.Set         v = var.Update(fun t -> update t v)
                        member this.SetFinal    v = this.Set(v)
                        member this.Update      f = var.Update(fun t -> update t (f (get t)))
                        member this.UpdateMaybe f = var.UpdateMaybe(fun t -> Option.map (fun x -> update t x) (f (get t)))
                        member this.View          = view
                        member this.Id            = id
                    }
            
            module ListModel =
                let lensInto' (m:ListModel<_,_>) (get: 'T       -> 'V) (update: 'T -> 'V -> 'T) (key : 'Key) (view: View<'V>) : Var<'V> =
                    let id = Var.freshId()
                    { new Var<'V>() with
                        member r.Get         () = m.FindByKey key |> get
                        member r.Set         v  = m.UpdateBy (fun i -> v          |>             update i |> Some) key
                        member r.Update      f  = m.UpdateBy (fun i -> get i |> f |>             update i |> Some) key
                        member r.UpdateMaybe f  = m.UpdateBy (fun i -> get i |> f |> Option.map (update i)       ) key
                        member r.SetFinal    v  = r.Set v
                        member r.View           = view
                        member r.Id             = id
                    }
                let lensIntoO'(m: ListModel<_,_>) (get: 'T option -> 'V) (update: 'T -> 'V -> 'T) (key : 'Key) (view: View<'V>) : Var<'V> =
                    let id = Var.freshId()
                    { new Var<'V>() with
                        member r.Get         () = m.TryFindByKey key |> get
                        member r.Set         v  = m.UpdateBy (fun i -> v                  |>             update i |> Some) key
                        member r.Update      f  = m.UpdateBy (fun i -> Some i |> get |> f |>             update i |> Some) key
                        member r.UpdateMaybe f  = m.UpdateBy (fun i -> Some i |> get |> f |> Option.map (update i)       ) key
                        member r.SetFinal    v  = r.Set v
                        member r.View           = view
                        member r.Id             = id
                    }
                let docLensMapView      mapView (f: 'Key -> Var<'T> -> 'V) (m:ListModel<_,_>) =
                    let get k v = f k (lensInto' m   id                        (fun _ -> id) k v)
                    Doc.BindSeqCachedViewBy m.Key get (View.Map mapView m.View)
                let docLensMapViewO def mapView (f: 'Key -> Var<'T> -> 'V) (m:ListModel<_,_>) =
                    let get k v = f k (lensIntoO' m (Option.defaultValue def)  (fun _ -> id) k v)
                    Doc.BindSeqCachedViewBy m.Key get (View.Map mapView m.View)
                let lensDef def k (m:ListModel<_,_>) =
                    let get = Option.defaultValue def
                    lensIntoO' m get (fun _ -> id) k (m.TryFindByKeyAsView k |> View.Map get)
            
                let currentLensUpd def curr upd (model:ListModel<_,_>) = 
                    curr 
                    |> Var.lensView (Option.bind (model.TryFindByKey) >> Option.defaultValue def) 
                                    (fun kO v -> kO |> Option.iter (upd v) ; kO)
                                    model.View
                let currentLensUpd' def curr upd (model:ListModel<_,_>) = 
                    let view = curr |> View.Map2 (fun _mdl kO -> kO |> Option.bind model.TryFindByKey |> Option.defaultValue def) model.View
                    Var.Make view upd
                let currentLens def curr (model:ListModel<_,_>) = 
                    model 
                    |> currentLensUpd' def curr (fun v -> model.UpdateBy (fun _ -> model.TryFindByKey (model.Key v) |> Option.map (fun _ -> v) ) <| model.Key v)
                
            
        /// Essentials that part runs in Javascript and part runs in the server
        [< AutoOpen >]
        module Library2 =
            [<WebSharper.JavaScript>]
            module WebSockets =
                //#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
                //#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
                //#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
                
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
                
                
                type SMessage<'S2C> = WebSharper.Owin.WebSocket.Server.Message<'S2C>
                
                [< JavaScript false >]
                module Broker =
                    open WebSharper
                    open WebSharper.Owin.WebSocket.Server
                    open System.Collections.Generic
                    
                    type SomeState = {
                        info       : string
                    }
                    
                    type IClient =
                        abstract member Post : MessageGeneric -> unit
                        abstract member Ip   : unit           -> string
                        abstract member Id   : unit           -> string
                        abstract member Close: unit           -> unit
                
                    type BrokerAgent(_epWebSocket: WebSharper.Owin.WebSocket.Endpoint<MessageGeneric,MessageGeneric>) =
                #if FSS_SERVER                          
                        static let mutable fssWebSocketO : BrokerAgent option = None
                #endif
                        do printfn "WebSocket server start"
                        let addConnection, removeConnection, getConnections =
                            let connectionsAgent = Mailbox.stateFull (fun ex st -> print ex ; st) Map.empty
                            (fun   clientAddress uniqueId client -> connectionsAgent |> Mailbox.StateFull.apply (Map.add clientAddress (uniqueId, client))       )
                           ,(fun                 uniqueId        -> connectionsAgent |> Mailbox.StateFull.apply (Map.filter (fun _ (uid, _) -> uid <> uniqueId)) )
                           ,(fun ()                              -> connectionsAgent |> Mailbox.StateFull.getState                                               )
                        let processBrokerRequest req = 
                            match req with
                            | BRGetConnections -> getConnections() |> Map.toSeq |> Seq.map (fun (Address cl, _) -> cl) |> Seq.toArray |> BRConnections 
                            | BRGetProcessId   -> System.Diagnostics.Process.GetCurrentProcess().Id |> BRPid
                            
                        let respondFromBroker pyld msg =
                            msg
                            |> respond     pyld
                            |> msgType     MsgFromBroker
                            |> subtype     "FromBroker"
                
                        let post reply msg =
                            match getConnections() |> Map.tryFind msg.destination with
                            | None                      -> msg |> respondFromBroker (BMDestinationNotFound msg.destination) |> reply
                            | Some(_, clientTo:IClient) -> msg |> clientTo.Post
                            
                        let clientConnect (client: IClient) = async {
                            let clientId = client.Id()
                            printfn "clientConnect: %A" clientId
                            let uniqueId = System.Guid.NewGuid()
                            printfn "New Connection from %s" clientId                           
                            let clientAddress = Address clientId
                            getConnections()
                            |> Seq.filter(fun kp -> kp.Key = clientAddress)
                            |> Seq.iter  (fun (kp:KeyValuePair<_, _ * IClient>) -> 
                                printfn "Closing old connection from %s" clientId
                                kp.Value 
                                |> fun (_, conn) -> conn.Close()
                            )
                            addConnection clientAddress uniqueId client
                            
                            let reply msg = msg |> from MessageBrokerAddress |> destination clientAddress |> client.Post
                            let checkReply msg = if msg.replier = Broker then
                                                        msg |> respondFromBroker BMOk |> reply
                            let forward msg = msg |> from clientAddress |> post reply
                                              checkReply msg
                            let respondMsg (msg:MessageGeneric) =
                                checkReply msg
                                printfn "%A" msg
                                match msg.msgType with
                                | MsgInformation    -> printfn "Information from '%s': %s" msg.from.txt (msgPayload msg)
                                | MsgReply          -> printfn              "Reply %s: %s" msg.from.txt  msg.payload
                                | MsgRequest        -> msg |> respond (msgPayload msg  |> processBrokerRequest)  |> reply
                                | MsgRequestForId   -> msg |> respond  MessageBrokerId |> msgType MsgInformation |> reply
                                | MsgRequestForEcho -> msg |> mapPayload id            |> msgType MsgInformation |> reply
                                | MsgFromBroker     -> ()
                            let clientIp = client.Ip()
                            return Unchecked.defaultof<_>, fun state wsmsg -> async {
                                printfn "Received message %A from %s - %s" state clientIp clientId
                                match wsmsg with
                                | Message msg ->
                                    if   msg.msgType     = MsgFromBroker        then msg |> respondFromBroker BMOnlyBrokerShouldUse |> reply
                                    elif msg.destination = MessageBrokerAddress then respondMsg msg
                                    else                                             forward    msg     
                                    return state
                                | Error exn -> 
                                    printfn "Error in WebSocket server connected to %s - %s: %s" clientIp clientId (exn.ToString())
                                    newMsg clientAddress (BMWebSocketError exn.Message) |> msgId System.Guid.Empty |> msgType MsgFromBroker |> msgType MsgFromBroker |> reply
                                    return state
                                | Close ->
                                    printfn "Closed connection to %s - %s" clientIp clientId
                                    removeConnection uniqueId
                                    return state
                            }
                        }
                        member this.Post msg = post (fun m -> printfn "%s" m.payload) msg
                        member this.Start (client : WebSocketClient<MessageGeneric,MessageGeneric>) =
                            let inline tryGetValue key (dict) =
                                dict 
                                :> System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<_, _>> 
                                |> Seq.tryPick (fun kp -> if kp.Key = key then Some kp.Value else None)
                            clientConnect { new IClient with
                                                member this.Post v  = client.Post v
                                                member this.Ip()    = client.Connection.Context.Request.RemoteIpAddress
                                                member this.Id()    = client.Connection.Context.Request.Query 
                                                                      |> tryGetValue  "ClientId" 
                                                                      |> Option.bind         Array.tryHead 
                                                                      |> Option.defaultValue ""
                                                member this.Close() = client.Connection.Close(System.Net.WebSockets.WebSocketCloseStatus.NormalClosure, null) |> Async.AwaitTask |> Async.Start
                                          }
                #if FSS_SERVER
                        static member FssWebSocketO                = fssWebSocketO
                        static member FssWebSocketO with set value = fssWebSocketO <- value
                        member this.ConnectLocal clientId receiver = 
                            clientConnect { new IClient with
                                                member this.Post v  = receiver v 
                                                member this.Ip()    = "(server)"
                                                member this.Id()    = clientId
                                                member this.Close() = () // probably shouldn't be called at all
                                          }
                
                    let ConnectStatefulFSS uri clientId (f:IServer -> Async<int * (int -> CMessage<MessageGeneric> -> Async<int>)>) =
                        async {
                            match BrokerAgent.FssWebSocketO with 
                            | None -> raise (exn "FssWebSocketO is not set")
                            | Some serverP ->
                            let  mutable clientBoxO : MailboxProcessor<CMessage<MessageGeneric>> option = None
                            let  receiver msg                = clientBoxO |> Option.iter (fun cbox -> cbox.Post (CMessage.Message msg))
                            let! brokerInitState, brokerFunc = serverP.ConnectLocal clientId receiver
                            let  brokerBox                   = Mailbox.foldA Mailbox.defHandler brokerFunc brokerInitState
                            let! clientInitState, clientFunc = f { new IServer with
                                                                       member this.Post msg = brokerBox.Post (Owin.WebSocket.Server.Message msg)
                                                                       member this.Close()  = ()
                                                                 }
                            let  clientBox    = Mailbox.foldA Mailbox.defHandler clientFunc clientInitState
                            clientBoxO <- Some clientBox
                            clientBox.Post CMessage.Open
                        }
                #endif        
                        
                        
    
    module CalculationModel =
        [< JavaScript >]
        module CalculationModel =
            open System
            
            type DimType =
                | DtDataType
                | DtTime
                | DtVersion
                | DtTCalc
                | DtCalc
                | DtMeasure
                | DtOther
            
            type CubeType =
                | CtOther
                | CtCalc
                | CtFreeze
            
            type AttType =
                | AtString
                | AtNumber
            
            type ElmType =
                | EtString
                | EtNumber
            
            type ModId = ModId of Guid with member x.Id = match x with ModId id -> id
            type AttId = AttId of Guid with member x.Id = match x with AttId id -> id
            type ElmId = ElmId of Guid with member x.Id = match x with ElmId id -> id
            type CubId = CubId of Guid with member x.Id = match x with CubId id -> id
            type DimId = DimId of Guid with member x.Id = match x with DimId id -> id
            type CalId = CalId of Guid with member x.Id = match x with CalId id -> id
            type TotId = TotId of Guid with member x.Id = match x with TotId id -> id
            type ForId = ForId of Guid with member x.Id = match x with ForId id -> id
            type RulId = RulId of Guid with member x.Id = match x with RulId id -> id
            
            type Attribute = {
                attId          : AttId
                attName        : string
                attType        : AttType
                attTableNum    : int
            }
            
            type Element = {
                elmId          : ElmId
                elmDim         : DimId
                elmType        : ElmType
                elmName        : string
                elmDescription : string
                elmAttributes  : Map<AttId, string> 
                elmParents     : ElmId     []
            } 
            
            type Dimension = {
                dimId               : DimId
                dimName             : string
                dimPrefix           : string
                dimOrder            : string
                dimExclude          : bool
                dimFreeze           : bool
                dimType             : DimType
                defaultElm          : ElmId     option
                mutable dimElements : Element   []
                dimAttributes       : Attribute []
                isCalcDim           : bool
            }
            
            type UnaryOp = 
                | UoMinus
                | UoPlus
                
            type Operator = 
                | OpAdd      
                | OpSubtract 
                | OpMultiply 
                | OpDivide   
                | OpEQ    
                | OpNE
                | OpGT       
                | OpGE       
                | OpLT       
                | OpLE       
                | OpAnd      
                | OpOr           
            
            type Function = Function of string
            
            type ElmReference =
                | ElemFixed   of DimId * ElmId
                | ElemDynamic of DimId * ExpressionText
                    
            and  ExpressionText =
                | ExtNA
                | ExtStet
                | ExtSlice      of Slice
                | ExtString     of string
                | ExtDimElement of DimId
                | ExtDimName    of DimId
                | ExtFunction   of Function         * ExpressionAny []
                | ExtIf         of ExpressionNumber * ExpressionText   * ExpressionText
            
            and  ExpressionNumber =
                | ExnNA
                | ExnStet
                | ExnSlice      of Slice
                | ExnNumber     of float
                | ExnOperationN of Operator         * ExpressionNumber * ExpressionNumber
                | ExnUnaryN     of UnaryOp          * ExpressionNumber
                | ExnOperationT of Operator         * ExpressionText   * ExpressionText
                | ExnOperationI of Operator         * ExpressionAny    * ExpressionAny
                | ExnFunction   of Function         * ExpressionAny []
                | ExnIf         of ExpressionNumber * ExpressionNumber * ExpressionNumber
                | ExnIsNA       of ExpressionNumber
                | ExnIsNAt      of ExpressionText
                | ExnIsNAa      of ExpressionAny
                
            and ExpressionAny =    
                | ExiNA
                | ExiStet
                | ExiSlice      of Slice
                | ExNumeric     of ExpressionNumber
                | ExText        of ExpressionText
                | ExiIf         of ExpressionNumber * ExpressionAny * ExpressionAny
                
            and  Slice = {
                sliDims     : Map<DimId, ElmReference>   
                calculation : CalId option
                cube        : CubId option
            } 
            
            type ForType = 
                | ForBase
                | ForConsolidated
                | ForAll
            
            type Formula = {
                forId          : ForId
                forDestDecl    : Map<DimId, string>
                forDestination : ElmReference list
                forDescription : string
                forText        : string
                forExpression  : ExpressionAny
                forType        : ForType
                forOrder       : string
            }
            
            type Calculation = {
                calId          : CalId
                calName        : string
                calDescription : string
                calOrder       : string
                format         : string
                isText         : bool
                isInput        : bool
                isBalance      : bool
                calDims        : Set<DimId>
                calFormulas    : Formula []
                cubIdO         : CubId   option
                properties     : Map<string, string>
            }
            
            type NodeId =
                | Calc of CalId
                | Tot  of TotId
            
            type Total = {
                totId          : TotId
                totName        : string
                totOrder       : string
                totFormat      : string
                children       : (float * NodeId) []
            }
            
            type RuleKey = 
                | RuleKey     of RulId
                | CalcRuleKey of CalId
                | FormulaKey  of ForId
                | ForTextKey  of ForId
                | ActualRuleKey 
                | InputRuleKey
                | ConsolidatedRuleKey
            
            type Cube = {
                cubId          : CubId
                cubName        : string
                cubRules       : Map<RuleKey, Rule option>
                cubRuleXmls    : Map<RuleKey, string>
                cubDims        : DimId []
                measureDim     : DimId option
                cubType        : CubeType
            }
            
            and  Rule = {
                rulId          : RulId
                rulSourceId    : IComparable
                rulDescription : string
                rulDestination : ElmReference list
                rulExpression  : ExpressionAny
                rulType        : ForType
                rulOrder       : string
                rulXml         : string
            }
            
            type RuleMsg =
            | GetInitModelStats
            | GetRulesForCube of CubId
            
            type ReplyMsg =
            | ReplyInformation of string
            | ReplyRules       of (RuleKey * string) []
            
            [<NoComparison ; NoEquality>]
            type Model = {
                modId           : ModId
                server          : string
                actualElem      : string
                modDims         : Dimension   []
                modCubes        : Cube        []
                modCalculations : Calculation []
            } 
            
            let Xmodel = 
              {
                modId           = ModId <| Guid.NewGuid()
                server          = @"local\Budget"
                actualElem      = "Actual"
                modDims         = [||]
                modCubes        = [||]
                modCalculations = [||]
              }
                
            let Map_adds kvs map = Seq.append (map |> Map.toSeq) kvs |> Map
            let calcSlice calc : Slice = 
                     {
                         sliDims       = Map.empty
                         calculation   = Some calc.calId
                         cube          = None
                     }
                
            type HelperTypeN = HelperTypeN with
                static member (&%>)  (HelperTypeN, a :     bool             ) : ExpressionNumber = ExnNumber <| if    a then 1.0 else 0.0
                static member (&%>)  (HelperTypeN, a :     int              ) : ExpressionNumber = ExnNumber <| float a
                static member (&%>)  (HelperTypeN, a :     float            ) : ExpressionNumber = ExnNumber          a
                static member (&%>)  (HelperTypeN, a :     Slice            ) : ExpressionNumber = ExnSlice           a
                static member (&%>)  (HelperTypeN, a :     Calculation      ) : ExpressionNumber = ExnSlice  <| calcSlice a
                static member (&%>)  (HelperTypeN, a :     ExpressionNumber ) : ExpressionNumber =                    a
                
            let [< Inline >] inline toExpN v : ExpressionNumber = HelperTypeN &%>  v
            
            type HelperTypeT = HelperTypeT with
                static member (&&>)  (HelperTypeT, a :     string           ) : ExpressionText   = ExtString          a 
                static member (&&>)  (HelperTypeT, a :     Dimension        ) : ExpressionText   = ExtDimName         a.dimId 
                static member (&&>)  (HelperTypeT, a :     Slice            ) : ExpressionText   = ExtSlice           a
                static member (&&>)  (HelperTypeT, a :     Calculation      ) : ExpressionText   = ExtSlice  <| calcSlice a
                static member (&&>)  (HelperTypeT, a :     ExpressionText   ) : ExpressionText   =                    a
            
            let [< Inline >] inline toExpT  v : ExpressionText = HelperTypeT &&>  v
            
            type HelperTypeA = HelperTypeA with
                [< Inline >]
                static member (&>>)  (HelperTypeA, a :     ExpressionNumber) : ExpressionAny = ExNumeric          a 
                [< Inline >]
                static member (&>>)  (HelperTypeA, a :     ExpressionText  ) : ExpressionAny = ExText             a
                [< Inline >]
                static member (&>>)  (HelperTypeA, a :     Slice           ) : ExpressionAny = ExiSlice           a
                [< Inline >]
                static member (&>>)  (HelperTypeA, a :     Calculation     ) : ExpressionAny = ExiSlice <| calcSlice a
                [< Inline >] 
                static member (&>>)  (HelperTypeA, a :     bool            ) : ExpressionAny = toExpN             a |> ExNumeric
                [< Inline >] 
                static member (&>>)  (HelperTypeA, a :     int             ) : ExpressionAny = toExpN             a |> ExNumeric
                [< Inline >] 
                static member (&>>)  (HelperTypeA, a :     float           ) : ExpressionAny = toExpN             a |> ExNumeric
                [< Inline >] 
                static member (&>>)  (HelperTypeA, a :     string          ) : ExpressionAny = toExpT             a |> ExText
                [< Inline >]
                static member (&>>)  (HelperTypeA, a :     ExpressionAny   ) : ExpressionAny =                    a
            
            let [< Inline >] inline toExpA  v : ExpressionAny = HelperTypeA &>>  v
        
            type Message =
                | DimensionNotFound      of DimId
                | DimensionHasNoElements of string
                | ElementNotFound        of string * ElmId
                | CubeNotFound           of CubId
                | CubeHasNoMeasureDim    of string
                | CalculationNotFound    of CalId
                | CalculationHasNoCube   of string
        
            let ofOptF f = Result.ofOption (fun () -> Message <| f())
            let ofOptS s = Result.ofOption (fun () -> Message <| s  )
        
            module internal Model0 =
                let getCubeO    cubId mdl = mdl.modCubes        |> Seq.tryFind (fun cub -> cub.cubId   =  cubId)
                let getDimO       dId mdl = mdl.modDims         |> Seq.tryFind (fun d   ->   d.dimId   =    dId)
                let getDimR       dId mdl = getDimO  dId mdl |> Result.ofOption (fun () -> DimensionNotFound   dId)
        
            module Element  =
                let newElement name = 
                  {
                    elmId          = ElmId <| Guid.NewGuid()
                    elmDim         = DimId <| Guid.NewGuid()
                    elmType        = EtString
                    elmName        = name
                    elmDescription = name
                    elmAttributes  = Map.empty
                    elmParents     = [||]
                  }
        
            module ElmReference =
                let dimId elr =
                    match elr with
                    | ElemFixed  (id, _)
                    | ElemDynamic(id, _) -> id
        
            module Slice =
                let newSlice ds = {
                         sliDims       = ds |> Seq.map (fun dr -> ElmReference.dimId dr, dr) |> Map 
                         calculation   = None
                         cube          = None
                }
                let forAll = {
                         sliDims       = Map.empty
                         calculation   = None
                         cube          = None
                }
                let addRef      elr slc = { slc with sliDims = slc.sliDims |> Map.add (ElmReference.dimId elr) elr }
                let containsDim did slc = slc.sliDims |> Map.containsKey did
           
            module Dimension =
                let getElementO      eId dim = dim.dimElements |> Seq.tryFind (fun e -> e.elmId = eId)    
                let getElementR      eId dim = getElementO eId dim |> Result.ofOption (fun () -> ElementNotFound(dim.dimName, eId))
                let newDimension id name isCalcDim =
                      {
                        dimId          = id 
                        dimName        = name
                        dimPrefix      = ""
                        dimOrder       = ""
                        dimExclude     = false
                        dimFreeze      = false
                        dimType        = DtOther
                        defaultElm     = None
                        dimElements    = [|  |]
                        dimAttributes  = [|  |]      
                        isCalcDim      = isCalcDim
                      }
                let newDimensionNonCalc id name  = newDimension id name false
                let newDimensionCalc    id name  = newDimension id name true 
                let New                    name  = newDimension (DimId <| Guid.NewGuid()) name false
                let [< Inline >] inline getElmReference it dim =
                    match toExpT it with 
                    | ExtString s1 -> let s2 = s1.Replace("_", " ")
                                      let elm =
                                         dim.dimElements                                 
                                         |> Seq.tryFind (fun e -> e.elmName = s2)
                                         |> Option.defaultWith (fun () -> 
                                             let newE = Element.newElement s2
                                             dim.dimElements <- Array.append dim.dimElements [| newE |]
                                             newE
                                         )
                                      ElemFixed  (dim.dimId, elm.elmId) 
                    | exp          -> ElemDynamic(dim.dimId, exp      )  
        //        member inline this.Item (it) = getElmReference it this
                //member inline this.__     it     = this.Item it
                //member inline this.M      it     = this.Item it
                //member inline this.E      it     = this.Item it
                //member inline this.I      it     = this.Item it
                let prefix  pr   dim  = { dim with dimPrefix = pr   }
                let dType   dt   dim  = { dim with dimType   = dt   }
                let setName name dim  = { dim with dimName   = name }
                let filter     dtypes : (Dimension seq -> Dimension seq) = Seq.filter (fun d -> dtypes |> Seq.contains d.dimType)
                let sort             (ds:Dimension seq)                  = ds |> Seq.sortBy (fun d -> d.dimOrder)
                let filterSort dtypes : (Dimension seq -> Dimension seq) = filter dtypes >> sort
        
            type Dimension with
                [< Inline >] 
                member inline this.Item (it) = Dimension.getElmReference it this
        
        
            module Cube =
                let slice cub : Slice  = 
                     {
                         sliDims       = Map.empty
                         calculation   = None
                         cube          = Some cub.cubId
                     }
                let containsDim dimId         cub = cub.cubDims |> Seq.contains dimId
                let isCalcCube                cub = cub.cubType = CtCalc    
                let newCubeId id name dims mDimO cType = 
                        {
                          cubId       = id
                          cubName     = name
                          cubDims     = dims
                          cubRules    = Map.empty
                          cubRuleXmls = Map.empty
                          measureDim  = mDimO
                          cubType     = cType
                        }
                let newCube     name            = newCubeId <| CubId (Guid.NewGuid()) <| name
                let newCubeCalc name dims mDimO = newCube name  dims mDimO CtCalc 
                let newCubeDims name dims mDimO = newCube name (dims |> Seq.map (fun d -> d.dimId) |> Seq.toArray) mDimO CtOther
                let New()                       = newCube "" [||] None CtOther
                let addRule     key rule  cub   = { cub with cubRules =                                              Map.add key rule         cub.cubRules }
                let addRules        rules cub   = { cub with cubRules = rules |> Seq.fold (fun rulesN (key, rule) -> Map.add key rule rulesN) cub.cubRules }
                //member inline this.Calc ()    = { this with cubType = CtCalc } 
                let forElr (es: ElmReference list) cub = { slice cub with sliDims = Map_adds (List.map (fun (e:ElmReference) -> ElmReference.dimId e, e) es) (slice cub).sliDims } 
                let dims            model cub   = model.modDims |> Array.filter(fun d -> cub.cubDims |> Array.exists ((=) d.dimId) )
                let measureDimO     model cub   = cub.measureDim    |> Option.bind (swap Model0.getDimO model)
                let measureDimR     model cub   = cub.measureDim         |> Result.ofOption (fun () -> CubeHasNoMeasureDim cub.cubName) |> Result.bind (swap Model0.getDimR model)
                let measureDimNameR model cub   = measureDimR model cub  |> Result.map (fun dim -> dim.dimName)
                
            module Calculation =
                let slice calc = calcSlice calc
                let calcType calc = if calc.isInput then "INPUT" else "CALC"    
                let newInput id (name: string) dims  =
                     {
                        calId          = id
                        calName        = name.Replace("_", " ").Trim()
                        calDescription = ""
                        calOrder       = ""
                        format         = "#,##0.00"
                        isText         = false
                        isInput        = true
                        isBalance      = false
                        calDims        = dims |> Set 
                        calFormulas    = [||]
                        cubIdO         = None
                        properties     = Map.empty
                     }
                let newCalc id name dims      = { newInput id name dims     with isInput     = false  }
                let New        ()             =   newInput (CalId <| Guid.NewGuid()) ""   []
                let setName    name      calc = { calc                   with calName     = name   }
                let setIsText  istext    calc = { calc                   with isText      = istext }
                let setOrder   order     calc = { calc                   with calOrder    = order  }
                let addFormula frml      calc = { calc                   with calFormulas = Array.append calc.calFormulas [| frml |] }
                let forSlice (es: ElmReference list) calc = { slice calc with sliDims = Map_adds (List.map (fun e -> ElmReference.dimId e, e) es) (slice calc).sliDims } 
                let addFormulas fs calc = if Seq.isEmpty fs then calc else { calc with calFormulas = fs |> Seq.toArray |> Array.append calc.calFormulas } 
                let withCube (model: Model) calc f = calc.cube |> Option.bind (swap Model0.getCubeO model) |> Option.bind f
                let [< Inline >] getElemRefO(model: Model) calc =
                    calc.cubIdO 
                    |> Option.bind (swap Model0.getCubeO model)
                    |> Option.bind (fun cub ->  cub.measureDim) 
                    |> Option.bind (swap Model0.getDimO  model)
                    |> Option.map  (Dimension.getElmReference calc.calName)
                let cubeR           c = c.cubIdO        |> ofOptF (fun () -> sprintf "Calculation '%s' has no cube" c.calName)
                let [< Inline >] getElemRefR   m c = getElemRefO m c |> ofOptF (fun () -> sprintf "Calcuation '%s' has no ElemRef" c.calName) 
                let sort             (cs:Calculation seq)                  = cs |> Seq.sortBy (fun c -> c.calOrder)
        
            module Total =
                let newTotal name  = {
                    totId          = TotId  <| System.Guid.NewGuid()
                    totName        = name
                    totOrder       = ""
                    totFormat      = ""
                    children       = [||]
                }
                let New() = newTotal ""
                
            module Model =
                let mergeBy f a b = Array.append (Seq.toArray a) (Array.filter (fun e -> a |> Seq.map f |> Seq.contains (f e) |> not ) b)
                let addCalcs     cs   mdl = { mdl with modCalculations = mergeBy (fun c -> c.calId) cs mdl.modCalculations }
                let addDims      ds   mdl = { mdl with modDims         = mergeBy (fun c -> c.dimId) ds mdl.modDims         }
                let addCubes     cs   mdl = { mdl with modCubes        = mergeBy (fun c -> c.cubId) cs mdl.modCubes        }
                let addForms     fs   mdl = { mdl with modCalculations = mdl.modCalculations |> Array.map (fun cal -> fs |> Seq.filter (fst >> (=) cal.calId) |> Seq.map snd |> Calculation.addFormulas <| cal) }
                let addCalc      calc mdl = { mdl with modCalculations = Array.append mdl.modCalculations [| calc |] }
                let addDim       dim  mdl = { mdl with modDims         = Array.append mdl.modDims         [| dim  |] }
                let addCube      cube mdl = { mdl with modCubes        = Array.append mdl.modCubes        [| cube |] }
                let addForm  cid frm  mdl = { mdl with modCalculations = mdl.modCalculations |> Array.map (fun cal -> if cal.calId = cid then Calculation.addFormula frm cal else cal) }
                let getDimO               = Model0.getDimO
                let getDimR               = Model0.getDimR
                let getCalcO      cId mdl = mdl.modCalculations |> Seq.tryFind (fun c   ->   c.calId   =    cId)
                let getCubeO              = Model0.getCubeO
                let getCalcR      cId mdl = getCalcO cId mdl |> Result.ofOption (fun () -> CalculationNotFound cId)
                let getCubeR      cId mdl = getCubeO cId mdl |> Result.ofOption (fun () -> CubeNotFound        cId)
                let pickCubeO      ct mdl = mdl.modCubes        |> Seq.tryPick (fun c   ->   if c.cubType = ct then Some c else None)
                let pickDimO       dt mdl = mdl.modDims         |> Seq.tryPick (fun d   ->   if d.dimType = dt then Some d else None)
                let pickCalcO      cn mdl = mdl.modCalculations |> Seq.tryPick (fun c   ->   if c.calName = cn then Some c else None)
                let freezeCubeO       mdl = pickCubeO CtFreeze   mdl
                let tCalcDimO         mdl = pickDimO  DtTCalc    mdl 
                let dataTypeDimO      mdl = pickDimO  DtDataType mdl
                let timeDimO          mdl = pickDimO  DtTime     mdl
                let versionDimO       mdl = pickDimO  DtVersion  mdl
                let isActualCalcO     mdl = pickCalcO "IsActual" mdl 
                let getCalcCube dims  mdl = 
                    mdl.modCubes 
                    |> Seq.filter  Cube.isCalcCube
                    |> Seq.tryFind (fun cub -> 
                        cub.cubDims 
                        |> Seq.filter (fun d -> Some d <> cub.measureDim) 
                        |> Set = dims )
                let setCube cubeN model = { model with modCubes = model.modCubes |> Array.map (fun cub -> if cub.cubId = cubeN.cubId then cubeN else cub ) }
                let withDimsO mdl cube f =
                    let (<*>)   = Option.apply
                    let dimMeaO = cube.measureDim |> Option.bind (swap getDimO mdl) 
                    Some f <*> dimMeaO <*> dataTypeDimO mdl <*> versionDimO mdl <*> timeDimO mdl |> Option.join
                let withDims mdl cube f = withDimsO mdl cube (fun a b c d -> f a b c d |> Some)
                let dimCombinations model =
                    model.modCalculations
                    |>  Seq.map (fun c -> c.calDims)
                    |>  Seq.distinct 
                let cubePrefix    = "Z"
                let measurePrefix = "M"
                let orderedDims dimIds model =
                        model.modDims 
                        |>  Seq.filter (fun d -> dimIds |> Seq.exists ((=) d.dimId) ) 
                let autoName dimIds model =
                    let nameBase =
                        model
                        |> orderedDims dimIds
                        |> Seq.map (fun d -> d.dimPrefix)
                        |>  String.concat ""
                    let similar =
                        model.modCubes
                        |> Seq.choose (fun c -> 
                            match cubePrefix + nameBase with
                            | n when c.cubName          = n -> Some -1
                            | n when c.cubName.StartsWith n -> c.cubName.[nameBase.Length + 1..] |> ParseO.parseIntO
                            | _                             -> None
                        ) 
                    nameBase
                  + if similar |> Seq.isEmpty then "" else similar |> Seq.max |> ((+) 1) |> sprintf "%d"
            
                let dimIds           model = model.modDims |> Array.map (fun d -> d.dimId)
                let fixForDimensions model =
                    //this.modCubes        <- this.modCubes        |>> fun cub -> { cub with cubDims = cub.cubDims |> Array.filter (fun d -> Seq.exists ((=) d) this.DimIds) }
                    let calcs = model.modCalculations |> Array.map (fun cal -> { cal with calDims = cal.calDims |> Set.filter   (fun d -> Seq.exists ((=) d) (dimIds model)) } )
                    { model with modCalculations = calcs }
                let newCalcCube dimIds model =
                    let name = autoName dimIds model
                    let mDim = Dimension.newDimensionCalc <| DimId (Guid.NewGuid()) <| measurePrefix + name
                    let orderedDimIds = 
                        model
                        |> orderedDims dimIds
                        |> Seq.append <| [ mDim ]
                        |> Seq.map (fun d -> d.dimId)
                        |> Seq.toArray
                    let dims  = Array.append model.modDims  [| mDim                                                                 |]
                    let cubes = Array.append model.modCubes [| Cube.newCubeCalc (cubePrefix + name) orderedDimIds (Some mDim.dimId) |]
                    { model with modDims = dims ; modCubes = cubes }
                let fixCalcsAndCubes model =
                    let calNoCube = model.modCalculations |> Array.filter (fun c -> c.cubIdO |> Option.bind (swap getCubeO model) |> Option.isNone)
                    if Seq.isEmpty calNoCube then model else
                        let modelN =
                            calNoCube
                            |> Seq.map      (fun c -> c.calDims)
                            |> Seq.distinct
                            |> Seq.filter   ((swap getCalcCube  model) >> Option.isNone)
                            |> Seq.fold      (swap newCalcCube) model
                        let calcs =
                            modelN.modCalculations
                            |> Array.map (fun oldC ->
                                    calNoCube 
                                    |> Seq.tryFind (fun newC -> newC.calId = oldC.calId)
                                    |> Option.map  (fun newC -> { newC with Calculation.cubIdO = (getCalcCube newC.calDims modelN) |> Option.map (fun cub -> cub.cubId) } )
                                    |> Option.defaultValue oldC
                              )
                        { modelN with modCalculations = calcs }
                let prepareModel model =
                    model
                    |> fixForDimensions 
                    |> fixCalcsAndCubes
                let addRules rules model =
                    rules
                    |> Seq.groupBy (fun (cubId, _, _) -> cubId)
                    |> Seq.fold (fun mdl (cubId, rules) ->
                        getCubeO cubId mdl
                        |> Option.map(fun cube ->
                            rules 
                            |> Seq.map (fun (_, key, rule) -> key, rule)
                            |> Cube.addRules <| cube
                            |> swap setCube mdl
                        )
                        |> Option.defaultValue mdl
                    ) model
                    
            
            module Formula =
                let [< Inline >] inline newFormula id dest exp  typ =
                      {
                          forId          = id
                          forDestDecl    = Map.empty
                          forDestination = dest
                          forDescription = ""
                          forText        = ""
                          forExpression  = toExpA exp
                          forType        = typ
                          forOrder       = ""
                      }
                let [< Inline >] inline newBase    id expr      = newFormula id []   expr ForBase        
                let [< Inline >] inline newBaseFor id expr dest = newFormula id dest expr ForBase        
                let [< Inline >] inline newCons    id expr      = newFormula id []   expr ForConsolidated
                let [< Inline >] inline newConsFor id expr dest = newFormula id dest expr ForConsolidated
                let [< Inline >] inline newAll     id expr      = newFormula id []   expr ForAll         
                let [< Inline >] inline newAllFor  id expr dest = newFormula id dest expr ForAll         
                let [< Inline >] inline New        ()        =
                      {
                          forId          = ForId <| Guid.NewGuid()
                          forDestDecl    = Map.empty
                          forDestination = []
                          forDescription = ""
                          forText        = ""
                          forExpression  = ExiStet
                          forType        = ForBase
                          forOrder       = ""
                      }
                let [< Inline >] inline forId      f         = f.forId
                let                     conso      frm       = { frm with forType  = ForConsolidated }
                let                     setText    txt  frm  = { frm with forText  = txt             }
                let                     setOrder   ord  frm  = { frm with forOrder = ord             }
                let getDimDest dim frm = 
                    frm.forDestination 
                    |> swap Seq.tryPick <| fun er -> if ElmReference.dimId er = dim.dimId then Some er else None
                
        
            module Rule =
                let [< Inline >] inline newRule0     dest exp typ order =
                      {
                          rulId          = RulId <| Guid.NewGuid()
                          rulDestination = dest
                          rulDescription = ""
                          rulExpression  = exp
                          rulType        = typ
                          rulOrder       = order
                          rulSourceId    = None
                          rulXml         = ""
                      }
                let [< Inline >] inline newRule     dest exp typ order = newRule0     dest (toExpA exp) typ order
                let [< Inline >] inline newRuleDest dest exp typ = newRule (dest.sliDims |> Map.toList |> List.map snd) exp typ
                let New() = newRule0 [] ExiStet ForBase ""
                let conso rul = { rul with rulType = ForConsolidated }    
            
            module Attribute =
                let New() = 
                    {
                        attId            = AttId <| Guid.NewGuid()
                        attName          = ""
                        attTableNum      = 1
                        attType          = AtString
                    }
            
    //#cd @"..\projects\RuleEditor\src"
    //#define WEBSHARPER
    [< JavaScript >]
    module RuleEditor =
        //#r "..\..\LayoutEngine\bin\LayoutEngine.dll"
        //#nowarn "1178" "1182" "3180" "52"
        
        [< AutoOpen >]
        module Templating =
            open WebSharper.UI.Templating
            let [< Literal >] rootdir = @"..\website"
        
            let [< Literal >] TemplatesFileName = rootdir + @"\Templates.html"
            type TemplateLib  = Template< TemplatesFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
            
            if IsClient then printfn "%s" TemplatesFileName
         
        //#r @"Compiled\CalculationModelDll\CalculationModelDll.dll"
        open CalculationModel.CalculationModel
        
        //type Selection  = (TreeNodeId * (ForId option)) option
        
        type Version = {
            major     : int
            minor     : int
            majorDate : string
            minorDate : string
        }
        
        module Version =
            let New() = {
                major     = 0
                minor     = 0
                majorDate = ""
                minorDate = ""
            }
            let incrementMinor v = { v with minor = v.minor + 1; minorDate = nowStamp() }
            let incrementMajor v = {        major = v.major + 1; majorDate = nowStamp()
                                            minor = 0          ; minorDate = nowStamp() }
        
        type ModelUI = {
            //treeHierarchy : Var<TreeNode []>
            calculations  : ListModel<CalId        , Calculation>
            totals        : ListModel<TotId        , Total      >
            dimensions    : ListModel<DimId        , Dimension  >
            cubes         : ListModel<CubId        , Cube       >
            globalDefs    : Var<string>
            server        : Var<string>
            //selection     : Var<Selection>
            selectedDim   : Var<DimId option>
            selectedCube  : Var<CubId option>
            collapsed     : ListModel<TotId * TotId list, TotId * TotId list>
            cubePrefix    : Var<string>
            measurePrefix : Var<string>
            outputMsgs    : Var<string>
            codeFS        : Var<string>
            parserMsgs    : Var<string>
            fileName      : Var<string>
            version       : Var<Version>
        }
        
        type MsgModel =
        | AddTotal
        | SelectTotal       of TotId
        | RemoveTotal       of TotId
        | AddCalculation
        | RemoveCube        of CubId
        | RenameCube        of CubId * string
        | AddCube           of         string * Set<DimId>
        | RemoveCalculation of CalId
        | SelectCalculation of CalId
        | AddFormula        of CalId
        | RemoveFormula     of ForId
        | SelectFormula     of ForId
        //| SelectFormNode    of ForId * TreeNodeId
        //| SelectNode        of         TreeNodeId
        //| ExpandNode        of bool  * TreeNodeId
        //| IndentNode        of bool  * TreeNodeId
        //| MoveNode          of bool  * TreeNodeId * TreeNodeId
        | AddDimension
        | RemoveDimension   of DimId
        | SelectDimension   of DimId
        | AddFormDim        of ForId * DimId * string
        | RemoveFormDim     of ForId * DimId
        | RemoveCalcDim     of CalId * DimId
        | AddCalcDim        of CalId * DimId
        | RemoveForDest     of CalId * ForId * DimId 
        | SetForDest        of CalId * ForId * DimId * string
        | NoOp
        
        module ModelUI =
            //let isNodeSelected    nid (sel:Selection) = sel |> Option.map (fst >> ((=) nid) ) |> Option.defaultValue false
            let selectedString txt (selectedV:View<bool>) = V(if selectedV.V then txt else "") 
            
            let nonTotal        = { Total      .New()                with totId = TotId System.Guid.Empty }
            let nonCalculation  = { Calculation.New()                with calId = CalId System.Guid.Empty } 
            let nonFormula      = { Formula    .New()                with forId = ForId System.Guid.Empty }
            //let nonDestination  = newDestination nonFormula.id (DimId System.Guid.Empty)
            
            let nonTotalV       = Var.Create nonFormula     |> Var.Lens <| id <| (fun v _ -> v)
            let nonCalculationV = Var.Create nonCalculation |> Var.Lens <| id <| (fun v _ -> v)
            let nonFormulaV     = Var.Create nonFormula     |> Var.Lens <| id <| (fun v _ -> v)
            
            //let isNodeFormSelected fid nid (sel:Selection) = sel = Some(nid, Some fid)
        
            let refreshView, refreshNow =
                let refresh = Var.Create ()
                refresh.View, fun () -> refresh.Value <- ()
            //let setHierarchy model (nodes: TreeNode seq) =
            //    nodes
            //    |> Seq.map (fun n -> parents.Remove n.nid |> ignore ; n)
            //    |> Seq.toArray
            //    |> model.treeHierarchy.Set
        
            let [<Inline>] inline mapIds f vls = vls |> View.Map (Seq.map f >> Seq.toArray) |> View.consistent
        
            let getDimsCubeO cubes = cubes
            
            
        [< AutoOpen >]
        module Global =
            let model = {
                //treeHierarchy = Var.Create [||]
                calculations  = ListModel.Create (fun v -> v.calId) [||]
                totals        = ListModel.Create (fun v -> v.totId) [||]
                dimensions    = ListModel.Create (fun v -> v.dimId) [||]
                cubes         = ListModel.Create (fun v -> v.cubId) [||]
                globalDefs    = Var.Create ""
                server        = Var.Create ""
                //selection     = Var.Create None
                selectedDim   = Var.Create None
                selectedCube  = Var.Create None
                collapsed     = ListModel.Create id [||]
                cubePrefix    = Var.Create "Z"
                measurePrefix = Var.Create "M"
                outputMsgs    = Var.Create ""
                codeFS        = Var.Create ""
                parserMsgs    = Var.Create ""
                fileName      = Var.Create "NewFile.json"
                version       = Var.Create <| Version.New()
            }
            
            let mutable processor = fun (msg:MsgModel) -> ()
            
            let appendText (var:Var<string>) msg = 
                match var.Value, msg with
                | "", m 
                | m , "" -> m
                | v , m  -> v + "\n" + m
                |> var.Set
                
            let inline appendMsgs   msg = appendText model.outputMsgs msg
            let inline appendParser msg = appendText model.parserMsgs msg
        
        module TableDimensions =
            open Templating
        
            let dtypes =   [ 
                DtDataType
                DtTime
                DtVersion
                DtOther    ] 
        
            let tableDimensions () =
                TemplateLib.DimensionTable()
                    .TBody(
                        model.dimensions |> ListModel.docLensMapView (Dimension.filterSort dtypes) (fun did dimV ->
                            //let selDimW = V (model.selectedDim.V = Some did)
                            TemplateLib.DimensionRow()
                                .Name(          Lens dimV.V.dimName       )
                                .Abbreviation(  Lens dimV.V.dimPrefix     )
                                .Order(         Lens dimV.V.dimOrder      )
                                .Type(         (Lens dimV.V.dimType       ).Lens (sprintf "%A" >> fun s -> s.[2..]) (fun _ s -> match s with |"DataType" -> DtDataType |"Time" -> DtTime |"Version" -> DtVersion | _ -> DtOther) )
                                .ExcludeName(   Lens dimV.V.dimExclude    )
                                .IncludeFreeze( Lens dimV.V.dimFreeze     )
                                .Remove(        fun _ -> RemoveDimension did |> processor )
                                .Select(        fun _ -> SelectDimension did |> processor )
                                .Doc()        
                        )
                    )
                    .Doc()
        module MainProgram =
            open FusionAsyncM
            open Operators
            open Templating
        
            open FsRoot
            module AF = AppFramework 
        
            let RuleEditorLyt = "RuleEditorLyt"
        
            let scrollToBottom (e:Dom.Element) (_:obj) = 
                async { 
                    do! Async.Sleep 100
                    do  e.ScrollTop <- e.ScrollHeight
                } |> Async.Start
        
        //    let mainLayout() =
        //        TemplateLib.Layout()
        //            .CalculationTable( tableCalculations()                  )
        //            .FormulaDetail(    details          ()                  )
        //            .DimsSelected(     dimsSelected     ()                  )
        //            .DimensionTable(   tableDimensions  ()                  )
        //            .GlobalText(       globalDefs       ()                  )
        //            .Server(           model.server                         )
        //            .Output(           model.outputMsgs                     )
        //            .FSCode(           model.codeFS                         )
        //            .Parser(           model.parserMsgs                     )
        //            .Filename(         model.fileName                       )
        //            .AddCalculation(   fun _ -> AddCalculation |> processor )
        //            .AddTotal(         fun _ -> AddTotal       |> processor )
        //            .NewDimension(     fun _ -> AddDimension   |> processor )
        //            .SaveAs(           fun _ -> SaveLoad.saveAsFile()       )
        //            .LoadFileChanged(  fun e -> SaveLoad.loadFile e.Target  )
        //            .LoadFileClear(    fun e -> e.Target?value <- ""        )
        //            .UpdateRules(      fun _ -> UpdateAlea.updateModel()    )        
        //            .IndentIn(         fun _ -> model.selection.Value |> Option.map fst |> Option.iter (fun nid -> IndentNode(true , nid) |> processor) )
        //            .IndentOut(        fun _ -> model.selection.Value |> Option.map fst |> Option.iter (fun nid -> IndentNode(false, nid) |> processor) )
        //        //    .Reorder(          fun _ -> reorder()                                    )
        //            .JumpRef(ParseFS.jumpToRef)
        //            .OutputAfterRender(fun e -> model.outputMsgs.View |> View.Sink (scrollToBottom e))
        //            .Doc()
        
            [< WebSharper.Sitelets.Website >]    
            let mainProgram() =
                AF.addPlugIn {
                    AF.plgName    = "RuleEditor"
                    AF.plgVars    = [| //AF.newVar  "fileName"        LoadSave.fileName
                                       //AF.newVar  "SnippetName"     (Lens Snippets.currentSnippetV.V.snpName)
                                       //AF.newVar  "Content"         (Lens Snippets.currentSnippetV.V.snpContent)
                                       //AF.newVar  "Output"          outputMsgs
                                       //AF.newVar  "Parser"          FStation.annotationsV
                                    |]  
                    AF.plgViews   = [| //AF.newViw  "FsCode"          Snippets.FsCodeW
                                       //AF.newViw  "SaveNeeded"      Snippets.SaveAsClassW
                                       //AF.newViw  "CurrentPath"     Snippets.currentPathW
                                    |]  
                    AF.plgDocs    = [| //AF.newDoc  "mainDoc"         (lazy mainDoc()                 )
                                       //AF.newDoc  "editor"          (lazy (WebSharper.UI.Html.div [] [ Monaco.getEditorConfigO() |> Option.map Monaco.render |> Option.defaultValue Doc.Empty ]) )
                                       //AF.newDoc  "Snippets"        (lazy RenderSnippets  .render() )
                                       //AF.newDoc  "Properties"      (lazy RenderProperties.render() )
                                       //AF.newDoc  "ButtonsRight"    (lazy buttonsRight           () )
                                       AF.newDoc  "Dimensions"      (lazy TableDimensions.tableDimensions() )
                                    |]  
                    AF.plgActions = [| //AF.newAct  "AddSnippet"      Snippets.newSnippet
                                       //AF.newAct  "RemoveSnippet"   deleteSnippet       
                                       //AF.newAct  "IndentIn"        Snippets.indentIn       
                                       //AF.newAct  "IndentOut"       Snippets.indentOut
                                       //AF.newAct  "AddProperty"     RenderProperties.addProperty
                                       //AF.newAct  "SaveAs"          LoadSave.saveAs
                                       //AF.newAct  "RunFS"           runFsCode
                                       //AF.newAct  "AbortFsi"        FsiAgent.abortFsiExe
                                       //AF.newAct  "DisposeFsi"      FsiAgent.disposeFsiExe
                                       //AF.newActF "LoadFile"        <| AF.FunAct1 ((fun o -> unbox o |> LoadSave.loadTextFile   ), "FileElement")
                                       //AF.newActF "Import"          <| AF.FunAct1 ((fun o -> unbox o |> Importer.importFile     ), "FileElement")
                                       //AF.newActF "JumpTo"          <| AF.FunAct1 ((fun o -> unbox o |> JumpTo.jumpToRef        ), "textarea"   )
                                       //AF.newActF "ButtonClick"     <| AF.FunAct1 ((fun o -> unbox o |> CustomAction.buttonClick), "button"     )
                                       //AF.newActF "ActionClick"     <| AF.FunAct1 ((fun o -> unbox o |> CustomAction.actionClick), "name"       )
                                       AF.newAct  "AddDimension"    (fun () -> AddDimension   |> processor)
                                    |]
                    AF.plgQueries = [|                                               
                                    |]
                }
                """
                    menuEditor       horizontal  65       menuLogo                  editorMessages
                    double           horizontal  0-50-100 AppFramework.AppFwkClient menuEditor
                    menuLogo         vertical    350      logo                      menu
                    logo             span       "margin:0; color:gray; font-size: 55px; font-weight:530" "F# Station"
                    editorMessages   horizontal 10-83-100 editorButtons             messages
                    messages         vertical   0-50-100  messagesLeft              messagesRight
                    editorButtons    vertical -200 snippetsSnippet buttons
                    buttons div      "overflow: hidden; display: grid; grid-template-columns: 100%; grid-template-rows: repeat(15, calc(100% / 15)); bxackground-color: #eee; box-sizing: border-box; padding : 5px; grid-gap: 5px; margin-right: 21px" btnSaveAs none x btnAddSnippet btnDeleteSnippet btnIndentIn btnIndentOut none x btnRunFS none x btnAbortFsi
                    snippetsSnippet  vertical   0-20-100  snippets                  editorProperties
                    snippets         horizontal 20        "${FSharpStation.CurrentPath}" FSharpStation.Snippets
                    editorProperties vertical   0-100-100 snippet                   properties
                    properties       div        ""        FSharpStation.Properties
                    snippet          horizontal 35        Name                      FSharpStation.editor
                    menu             span  "" btnLoad btnImport
        
                    btnSaveAs        button FSharpStation.SaveAs         "class=btn ${FSharpStation.SaveNeeded}" "Save as...    "
                    btnAddDimension  button RuleEditor.AddDimension      ""                  "Add Dimension "
                    btnDeleteSnippet button FSharpStation.RemoveSnippet  ""                  "Delete Snippet"
                    btnIndentIn      button FSharpStation.IndentIn       ""                  "Indent In  >> "
                    btnIndentOut     button FSharpStation.IndentOut      ""                  "Indent Out << "
                    btnRunFS         button FSharpStation.RunFS          ""                  "Run F#        "
                    btnAbortFsi      button FSharpStation.AbortFsi       ""                  "Abort Fsi     "
        
                    messagesLeft     wcomp-tabstrip                      ""                  Output FsCode
                    messagesRight    wcomp-tabstrip                      ""                  Parser
        
                    Output           textarea  FSharpStation.Output      "tabname=Output ; placeholder=Output messages ; spellcheck=false" 
                    FsCode           textarea  FSharpStation.FsCode      "tabname=F# Code; placeholder=F# Code         ; spellcheck=false" 
                    Parser           textarea  FSharpStation.Parser      "tabname=Parser ; placeholder=Parser messages; dblclick=${FSharpStation.JumpTo} ; spellcheck=false" 
                    Name             Doc       InputLabel                ""     "Name:"        FSharpStation.SnippetName
                    btnLoad          Doc       InputFile                 ""     "Load File..." FSharpStation.LoadFile  FileName
                    btnImport        Doc       InputFile                 ""     "Import..."    FSharpStation.Import    ""
                    FileName         div                                 "class=form-control"  FSharpStation.fileName
                """
                |> String.unindentStr
                |> LayoutEngine.newLyt RuleEditorLyt
                |> LayoutEngine.addLayout
        
                None
                |> Option.defaultValue RuleEditorLyt
                |> AF.mainDocV.Set
        
                async {
                  //do! Monaco.loader
                  //WcSplitter.init horizontal vertical
                  //WcTabStrip.init()
                  //let editor = Monaco.getEditorConfigO() |> Option.map Monaco.render |> Option.defaultValue Doc.Empty
                  return AF.getMainDoc.Value
                } |> Doc.Async            
                
        //#r @"..\packages\Owin\lib\net40\Owin.dll"
        //#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
        //#r @"..\packages\Microsoft.Owin.Hosting\lib\net451\Microsoft.Owin.Hosting.dll"
        //#r @"..\packages\Microsoft.Owin.Host.HttpListener\lib\net451\Microsoft.Owin.Host.HttpListener.dll"
        //#r @"..\packages\WebSharper.Owin\lib\net461\WebSharper.Owin.dll"
        //#r @"..\packages\WebSharper.Owin\lib\net461\HttpMultipartParser.dll"
        //#r @"..\packages\Microsoft.Owin.StaticFiles\lib\net451\Microsoft.Owin.StaticFiles.dll"
        //#r @"..\packages\Microsoft.Owin.FileSystems\lib\net451\Microsoft.Owin.FileSystems.dll"
        //#define FSS_SERVER
        [< JavaScript false >]
        module Server =
            open global.Owin
            open Microsoft.Owin.Hosting
            open Microsoft.Owin.StaticFiles
            open Microsoft.Owin.FileSystems
            open WebSharper.Owin
            open WebSharper.Sitelets
            open WebSharper.UI.Server
            open WebSharper.UI.Templating
            open WebSharper.UI.Html
            open WebSharper.Owin.WebSocket
            open WebSharper.Owin.WebSocket.Client
            open WebSharper.Owin.WebSocket.Server
            open WebSockets
        
            type EndPointServer = | [< EndPoint "/" >] EP
        
            let content (ctx:Context<EndPointServer>) (endpoint:EndPointServer) : Async<Content<EndPointServer>> =
                Content.Page(Title = "Main Page" 
                           , Body  = [
                                Html.client <@ MainProgram.mainProgram() @>
                                Doc.Verbatim (System.IO.File.ReadAllText TemplatesFileName)
                             ])
        
            [< EntryPoint >]
            let Main args =
                printfn "Usage: FSharpStation URL ROOT_DIRECTORY MaxMessageSize"
                let url           = args |> Seq.tryItem 0 |>                   Option.defaultValue "http://localhost:9005/"
                let rootDirectory = args |> Seq.tryItem 1 |>                   Option.defaultValue @"..\website"
                let max           = args |> Seq.tryItem 2 |> Option.map int |> Option.defaultValue 1_000_000
                let epWebSocket = Endpoint.Create(url, "/ws", JsonEncoding.Readable)
                let broker = Broker.BrokerAgent epWebSocket
                Broker.BrokerAgent.FssWebSocketO <- Some broker
                use server = WebApp.Start(url, fun appB ->
                    appB.UseWebSharper(WebSharperOptions(ServerRootDirectory = rootdir
                                                       , Sitelet             = (Some <| Application.MultiPage content)
                                                       , BinDirectory        = "."
                                                       , Debug               = true))
                        .UseStaticFiles(StaticFileOptions(FileSystem = PhysicalFileSystem(rootDirectory)))
                        .UseWebSocket(  epWebSocket, broker.Start, maxMessageSize = max)
                    |> ignore)
                stdout.WriteLine("Listening on {0}, hit enter to finish", url)
                stdin.ReadLine() |> ignore
                0
        
        
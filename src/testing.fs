////-d:FSharpStation1548758124776 -d:WEBSHARPER
//#I @"..\packages\WebSharper\lib\net461"
//#I @"..\packages\WebSharper.UI\lib\net461"
//#I @"..\packages\Owin\lib\net40"
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
//#r @"..\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
//#r @"..\projects\modules\bin\FSharpStationClient.dll"
//#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
//#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
//#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
//#r @"..\packages\Owin\lib\net40\Owin.dll"
//#r @"..\projects\LayoutEngine\bin\LayoutEngine.dll"
/// Root namespace for all code
//#define FSharpStation1548758124776
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
                        
                    
                    
            type System.String with
                member this.Substring2(from, n) = 
                    if   n    <= 0           then ""
                    elif from <  0           then this.Substring2(0, n + from)
                    elif from >= this.Length then ""
                    else this.Substring(from, min n (this.Length - from))
                member this.Left             n  = if n < 0 
                                                  then this.Substring2(0, this.Length + n)
                                                  else this.Substring2(0, n              )
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
                
            
            [< Inline "$a + '/' + $b" >]
            let inline (+/+) a b = System.IO.Path.Combine(a, b)
            
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
                    let  define (line:string) = line.Trim().Split([| "#define " |], System.StringSplitOptions.RemoveEmptyEntries) |> Seq.tryHead |> Option.defaultValue ""
                    let  comment = ((+)"//") 
                    let  prepro (line:string) = match true with 
                                                | true when line.StartsWith("#define"       ) -> (comment line, line |> define |> PrepoDefine)
                                                | true when line.StartsWith("#cd"           ) -> (comment line, line |> quoted |> PrepoCd    )
                                                | true when line.StartsWith("#r"            ) -> (comment line, line |> quoted |> PrepoR     )
                                                | true when line.StartsWith("#load"         ) -> (comment line, line |> quoted |> PrepoLoad  )
                                                | true when line.StartsWith("#nowarn"       ) -> (comment line, line |> quoted |> PrepoNoWarn)
                                                | true when line.Trim().StartsWith("# "     ) -> (comment line, line |> quoted |> PrepoLine  )
                                                | true when line.Trim().StartsWith("#line"  ) -> (comment line, line |> quoted |> PrepoLine  )
                                                | true when line.StartsWith("#I"            ) -> (comment line, line |> quoted |> PrepoI     )
                                                | true when line.StartsWith("#if"           ) -> (        line, line           |> PrepoIf    )
                                                | true when line.StartsWith("#else"         ) -> (        line,                   PrepoElse  )
                                                | true when line.StartsWith("#endif"        ) -> (        line,                   PrepoEndIf )
                                                | true when line.StartsWith("#light"        ) -> (        line, false          |> PrepoLight )
                                                | true when line.StartsWith("#"             ) -> (comment line, line           |> PrepoOther )
                                                | _                                           -> (        line,                   NoPrepo    ) 
                    code |> Array.map prepro
                    
                let separateDirectives (fsNass:(string * PreproDirective) seq) =
                    let  assembs  = fsNass |> Seq.choose (snd >> (function | PrepoR assemb -> Some assemb | _ -> None)) |> Seq.distinct |> Seq.toArray
                    let  defines  = fsNass |> Seq.choose (snd >> (function | PrepoDefine d -> Some d      | _ -> None)) |> Seq.distinct |> Seq.toArray
                    let  prepoIs  = fsNass |> Seq.choose (snd >> (function | PrepoI      d -> Some d      | _ -> None)) |> Seq.distinct |> Seq.toArray
                    let  nowarns  = fsNass |> Seq.choose (snd >> (function | PrepoNoWarn d -> Some d      | _ -> None)) |> Seq.distinct |> Seq.toArray
                    let  cd       = fsNass |> Seq.choose (snd >> (function | PrepoCd   dir -> Some dir    | _ -> None)) |> Seq.tryHead
                    let  code     = fsNass |> Seq.map     fst                                                                           |> Seq.toArray
                    code, assembs, defines, prepoIs, nowarns, cd
                    
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
                snpGeneration   : int
            }
            
            type SnippetReference =
            | RefSnippetId   of SnippetId
            | RefSnippetPath of string[]
            
            type Reduced = ((SnippetId * string * int * int) [] * string [] * string [] * string [] * string [] * string [] * string option) option
            
            type SnippetCollection = {
                generation       : int
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
            
                let getNextGeneration, setGeneration = 
                    let mutable generation  = 1
                    (fun () -> generation <- generation + 1 ; generation)
                  , (fun n  -> generation <- n                          )  
                let New name content parentO = 
                    {
                        snpId           = SnippetId <| System.Guid.NewGuid()   
                        snpName         = name
                        snpContent      = content
                        snpParentIdO    = parentO
                        snpPredIds      = Set.empty
                        snpProperties   = Array.empty
                        snpGeneration   = getNextGeneration()
                    }
                let defaultSnippet              = {
                    snpId           = SnippetId <| System.Guid.Empty
                    snpName         = ""
                    snpContent      = ""
                    snpParentIdO    = None
                    snpPredIds      = Set.empty
                    snpProperties   = Array.empty
                    snpGeneration   = 0
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
                let propertyPairO   n snp = propertyO n snp |> Option.map(fun v -> v.Split([| tieFighter |], StringSplitOptions.RemoveEmptyEntries) |> fun vs -> vs.[0], vs |> Array.tryItem 1 |> Option.defaultValue vs.[0])
                let snippetORm        sid = readerFun (fun { fetcher    = ftch } -> ftch sid                                               )
                let parentORm         snp = readerFun (fun { fetcher    = ftch } -> snp.snpParentIdO |> Option.bind ftch                   )
                let predecessorsRm    snp = readerFun (fun { fetcher    = ftch } -> snp.snpPredIds   |> Seq.choose  ftch                   )
                let maxGenerationRm   ()  = readerFun (fun { ordered    = snps } -> snps |> Seq.map (fun s -> s.snpGeneration) |> Seq.max  )
                let modifiedRm        snp = readerFun (fun { generation = gen  } -> snp.snpGeneration > gen                                )
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
                                                return preds (* |> Seq.append [ snp ] *) |> Seq.map (fun snp -> snp.snpGeneration) |> Seq.max 
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
                    | Some v -> return Some (snp, v.Split([| @"|-|" |], StringSplitOptions.RemoveEmptyEntries) |> fun vs -> vs.[0], if vs.Length > 1 then vs.[1] else vs.[0])
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
                    let  code, assembs, defines, prepIs, nowarns, cdO =
                        code.Split('\n')
                        |> FsCode.separatePrepros
                        |> indentF
                        |> FsCode.separateDirectives
                    return
                        [| snp.snpId, snippetName snp.snpName snp.snpContent, code.Length, indent |] , code, assembs, defines, prepIs, nowarns,cdO
                }
                let addSeps (lines1:(SnippetId*string*int*int)[], code1:string[], assembs1:string[], defines1:string[], prepIs1:string[], nowarns1:string[], cdO1:string option)
                            (lines2:(SnippetId*string*int*int)[], code2:string[], assembs2:string[], defines2:string[], prepIs2:string[], nowarns2:string[], cdO2:string option) =
                    Array.append lines1   lines2
                  , Array.append code1    code2
                  , Seq  .append assembs1 assembs2 |> Seq.distinct |> Seq.toArray
                  , Seq  .append defines1 defines2 |> Seq.distinct |> Seq.toArray
                  , Seq  .append prepIs1  prepIs2  |> Seq.distinct |> Seq.toArray
                  , Seq  .append nowarns1 nowarns2 |> Seq.distinct |> Seq.toArray
                  , cdO1 |> function None -> cdO2 |_-> cdO1
                let reducedCodeRm  snippets = fusion {
                    let! parts    = snippets |> traverseSeq separateCodeRm
                    let  reduced  = parts
                                    |> fun snps -> if snps |> Seq.isEmpty then seq [ [||],  [||],  [||],  [||],  [||],  [||], None ] else snps
                                    |> Seq.reduce addSeps
                                    |> fun (lines, code                                         , assembs, defines, prepIs, nowarns, cdO) ->
                                           (lines, code |> String.concat "\n" |> Array.singleton, assembs, defines, prepIs, nowarns, cdO)
                    return reduced
                }
                let finishCode (lines:(SnippetId*string*int*int)[],code:string[], assembs:string[], defines:string[], prepIs:string[], nowarns:string[], cdO: string option) =
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
            module Ping =
                open System.Net.NetworkInformation
            
                let ping (ip:string) =
                    let reply = (new Ping()).Send ip
                    reply.Status, reply.Address, reply.RoundtripTime
                    
                let pingAsync (ip:string) =
                    async {
                        let pinger = new Ping()
                        try
                            let! reply = pinger.SendPingAsync(ip, 9000, "Hello!"B) |> Async.AwaitTask 
                            return reply.Status.ToString(), reply.Address, reply.RoundtripTime, System.Text.Encoding.ASCII.GetString reply.Buffer
                        with e -> 
                            return e.GetBaseException().GetBaseException().Message, System.Net.IPAddress(0L), 0L, ""
                    }
            
                let pingOneAsync name ip =
                    async {
                        let! status, address, roundtripTime, buffer = pingAsync ip
                        return status, (name, ip), (address, roundtripTime, buffer)
                    }
            
                let pingSeveral list = 
                    list
                    |> Seq.sort
                    |> Seq.map (fun (n, ip) -> pingOneAsync n ip)
                    |> Seq.map (Async.map 
                                   (function 
                                    | "Success", (name, ip), (address, time, buffer) -> printfn "Success %-15s %-15s %-25s %4d %s "     name ip (address.ToString()) time buffer
                                    | msg      , (name, ip), (address, time, buffer) -> printfn "%-15s %-15s %-15s %-25s "  msg name ip (address.ToString())                 
                               ))
                    |> Async.Parallel 
                    |> Async.RunSynchronously
            
            
    
        module Ping =
            open Ping
        
            type Computer = {
                name    : string
                ip      : string option
                sshPort : int    option
                mac     : string option
                user    : string option
            } with 
                static member New nm = {
                    name    = nm
                    ip      = None
                    sshPort = None
                    mac     = None
                    user    = None
                }
                static member New (nm, ip) = {
                    name    = nm
                    ip      = Some ip
                    sshPort = None
                    mac     = None
                    user    = None
                }
                static member New (nm, ip, mac) = {
                    name    = nm
                    ip      = Some ip
                    sshPort = None
                    mac     = Some mac
                    user    = None
                }
                static member New (nm, ip, port) = {
                    name    = nm
                    ip      = Some ip
                    sshPort = Some port
                    mac     = None
                    user    = None
                }
                static member New (nm, ip, port, mac) = {
                    name    = nm
                    ip      = Some ip
                    sshPort = Some port
                    mac     = Some mac
                    user    = None
                }
                static member New (nm, ip, port, mac, user) = {
                    name    = nm
                    ip      = Some ip
                    sshPort = Some port
                    mac     = Some mac
                    user    = Some user
                }
        
            let computersData =
                [
                    Computer.New("ABEASUS"       , "ABEASUS"      , "60:57:18:8E:F1:02") // "9C:EB:E8:1B:29:35" wired
                    Computer.New("NeoRouter"     , "192.168.195.1")
                    Computer.New("Router1"       , "192.168.5.1"  , "9c:d3:6d:b7:cb:e6") // WNR1000v3
                    Computer.New("Router2"       , "192.168.5.3"  , "E0:91:F5:DE:F4:EC") // WNDR3400v1
                    Computer.New("Router2"       , "192.168.5.40" , "E0:91:F5:DE:F4:ED") // WNDR3400v1 Internet Port
                    Computer.New("OOMA"          , "192.168.5.2"  )
                    Computer.New("EXSi"          , "192.168.5.5"  )
                    Computer.New("Modem"         , "192.168.100.1")
                    Computer.New("ABEHOME"       , "192.168.5.4"  )
                    Computer.New("ABEHOME"       , "ABEHOME"      )
                    Computer.New("AbeRaspi"      , "192.168.5.41"  , 2200, "80:1F:02:D3:77:3D", "pi")
                    Computer.New("AbeRaspiNr"    , "192.168.195.42", 2200, "b8:27:eb:1a:ad:21", "pi")
                    Computer.New("OldHTC"        , "192.168.5.39"  , 2222, "D8:B3:77:56:42:3E", "Abe")
                    Computer.New("AbeWCam"       , "192.168.5.127" )
                    Computer.New("JJJGarage"     , "192.168.15.242")
                    Computer.New("FILESERVER1"   , "FILESERVER1"   )
                    Computer.New("AbeRainMachine", "192.168.5.240" )
                    Computer.New("Thermo-Abajo"  , "192.168.5.252" , "44a7cf5e3548")
                    Computer.New("Thermo-Arriba" , "192.168.5.253" , "5cdad4fdb7d1")
                    Computer.New("Google DNS"    , "8.8.8.8"       )
                ]
        
            let computers         = computersData |> List.map   (fun c -> c.name, c.ip |> Option.defaultValue c.name)
            let computer        n = computersData |> Seq.tryFind(fun c -> c.name = n                                )
            let computerIp      n = computer n    |> Option.map (fun c -> c.ip         |> Option.defaultValue c.name)
            let computerSshPort n = computer n    |> Option.bind(fun c -> c.sshPort                                 )
            let computerMac     n = computer n    |> Option.bind(fun c -> c.mac                                     )
        
            let getIpPortUser   c = c.ip.Value, c.sshPort.Value, c.user.Value
        
            //#if WEBSHARPER
            //#else
            let OldHtcComputer                       = computer "OldHTC"   |> Option.get
            let AbeRaspi                             = computer "AbeRaspi" |> Option.get
            let OldHtcIp  , OldHtcPort  , OldHtcUser = getIpPortUser OldHtcComputer
            let AbeRaspiIp, AbeRaspiPort, AbeUser    = getIpPortUser AbeRaspi
            //#endif
        
            let pingOne c = computers |> List.filter (fst >> ((=) c)) |> pingSeveral 
            let All    () = computers |> pingSeveral
        
        //#I @"..\packages\Owin\lib\net40"
        //#r @"..\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
        //#r @"..\projects\modules\bin\FSharpStationClient.dll"
        //#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
        //#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
        //#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
        //#r @"..\packages\Owin\lib\net40\Owin.dll"
        module Thermostats =
            open FsRoot
            open System.Net
            open System.IO
            open FSharp.Data.HttpRequestHeaders
            open FSharp.Data.JsonExtensions
            open FSharp.Data
            open Ping
        
            [< JavaScript >]
            type ThermostatMessage = THMData of name:string * values:(string * string) []
        
            let ThermoAbajoIp  = computer "Thermo-Abajo"  |> Option.get |> fun c -> c.ip.Value
            let ThermoArribaIp = computer "Thermo-Arriba" |> Option.get |> fun c -> c.ip.Value
        
            type Tstat = JsonProvider<"""{"temp":74.00,"tmode":1,"fmode":0,"override":1,"hold":1,"t_heat":73.00,"tstate":0,"fstate":0,"time":{"day":1,"hour":14,"minute":13},"t_type_post":0}""">
        
        //    let messaging = new WSMessagingClient("Thermostats")
        //    printfn "%A" messaging.EndPoint
        
            let thermostats =
                [ "Arriba", ThermoArribaIp
                  "Abajo" , ThermoAbajoIp
                ]
        
            let makeUri ip cmd = sprintf "http://%s/%s" ip cmd
        
            let rec json2props cmd (json: JsonValue) =
                json.Properties
                |> Array.collect (fun (p, v) ->
                    let cmd2 = cmd + "/" + p
                    if v.Properties.Length > 0 
                    then json2props cmd2 v
                    else [| cmd2, v.ToString() |]
                )
                
            let forThermostat tname = 
                thermostats
                |> Seq.filter (fun (n, _) -> n = tname || tname = "*")
        
            let queryThermoStat cmd tname =
                forThermostat tname
                |> Seq.map    (fun (n,ip) -> 
                    makeUri ip cmd
                    |> Tstat.AsyncLoad 
                    |> Async.bind (fun m -> 
                        json2props cmd m.JsonValue
                        |>  fun data -> THMData(n, data)
                        |>! print
                        |>  fun msg -> msg |> Json.Serialize |> FSharpStationClient.actionCall1 "Thermostats.processData" 
                        //|>  iterResultPrint 
                    )
                )
                |> Async.Parallel
                |> Async.RunSynchronously
                |> ignore
        
            let postThermostat cmd body tname =
                forThermostat tname
                |> Seq.iter (fun (n, ip) ->
                    Http.RequestString( makeUri ip cmd
                                    , headers = [ ContentType HttpContentTypes.Json ]
                                    , body    = TextRequest body
                                    )
                    |> printfn "%s"
                    queryThermoStat cmd n       
                )
                
            let postTstat parm value tname =
                sprintf "{%A:%s}" parm value
                |> postThermostat "tstat"      <| tname
        
            let setCurrentTime () =
                System.DateTime.Now
                |> (fun now -> sprintf "{ %A: %d, %A: %d }" "hour" now.Hour "minute" now.Minute)
                |> postThermostat "tstat/time" <| "*"
        
            let setTmode mode = postTstat "tmode" mode "*"
            let setFmode mode = postTstat "fmode" mode "*"
                
            let getNetwork () = queryThermoStat "sys/network" "*"
            let getSystem  () = queryThermoStat "sys"         "*"
            
        //#r "..\projects\LayoutEngine\bin\LayoutEngine.dll"
        //#define WEBSHARPER
        [< AutoOpen ; JavaScriptExport >]
        module PlugIns =
            open WebSharper
            open FsRoot
            open WebSharper.UI
            open WebSharper.UI.Html
            module AF = AppFramework
        
            module ThermostatsPlugIn =
                open Thermostats
                open FusionAsyncM
                open Operators
                module LE = LayoutEngine
                
                let weather (snp : Snippet) =
                    let cityId        = snp.snpProperties |> Seq.tryFind (fst >> (=) "CityId"       ) |> Option.map snd |> Option.defaultValue "4711801"
                    let openWeatherId = snp.snpProperties |> Seq.tryFind (fst >> (=) "OpenWeatherId") |> Option.map snd |> Option.defaultValue "1b76ef58915a2c784ce5dcb7899b81f2"    
                    div [] [
                        div [ attr.style "height: 1em"] []
                        div [ attr.id "openweathermap-widget" ] []
                        script [ attr.src "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js" ] []
                        script [] [ text (sprintf "window.myWidgetParam = [{id: 15,cityid: '%s',appid: '%s',units: 'imperial',containerid: 'openweathermap-widget',  }];" cityId openWeatherId) ]
                        script [ attr.src "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js" ] []
                    ]
            
                [<NoComparison ; NoEquality>]
                type ThermostatData = {
                    name : string 
                    data : Var<Map<string, Var<string>>>
                } 
            
                let setData k v therm = 
                    match therm.data.Value |> Map.tryFind k with
                    | None     -> therm.data.Value <- therm.data.Value |> Map.add k (Var.Create v)
                    | Some dat -> dat      .Value <- v
                    
                let getData key (therm: ThermostatData) =
                    View.Do {
                        let!   map   = therm.data.View
                        let    dataO = map |> Map.tryFind key
                        match  dataO with 
                        | None       -> return "" 
                        | Some dataV -> 
                        let!   data  = dataV.View
                        return data
                    }
            
                let time2Str day hour minute =
                    match day with
                    | 0 -> "Mon"
                    | 1 -> "Tue"
                    | 2 -> "Wed"
                    | 3 -> "Thu"
                    | 4 -> "Fri"
                    | 5 -> "Sat"
                    | 6 -> "Sun"
                    | _ -> "---"
                    |> sprintf "%s, %02d:%02d" <| hour <| minute
            
                let postTstat parm value therm =
                    AF.tryGetAct "FSharpStation" "ActionClick" |> Option.iter (fun pac -> AF.callFunction (sprintf ":postTstat %A %A %A " parm value therm.name) () pac.actFunction)
                    JS.Alert(sprintf "setting %s = %A" parm value)
            
                let setHold v therm = async {
                    let parm  = "hold"
                    let value = if v then "1" else "0"
                    therm |> setData   parm (if v then "1" else "0")
                    therm |> postTstat parm value
                }
            
                let thermostatDisplay(therm:ThermostatData) =
                    let setData    k v = setData k v therm
                    let getData    k   = getData k   therm
                    let temp           = getData "tstat/temp"        |> View.Map (float >> sprintf "%A°F")
                    let mode           = getData "tstat/tmode"       |> View.Map (function | "1" -> "Heat"     | "2" -> "Cool"      | _ -> "Off")
                    let state          = getData "tstat/tstate"      |> View.Map (function | "1" -> "Heating"  | "2" -> "Cooling"   | _ -> ""   )
                    let fanState       = getData "tstat/fstate"      |> View.Map (function | "1" -> "Fan:On"   |                      _ -> ""   )
                    let hold           = getData "tstat/hold"
                    let day            = getData "tstat/time/day"    |> View.Map int
                    let hour           = getData "tstat/time/hour"   |> View.Map int
                    let minute         = getData "tstat/time/minute" |> View.Map int
                    let time           = View.Map3 time2Str day hour minute
                    let getSettingParm = 
                        View.Do { 
                            let!  mode = mode
                            match mode with
                            | "Heat" -> return Some "tstat/t_heat"
                            | "Cool" -> return Some "tstat/t_cool"
                            | _      -> return None
                        }
                    let getSettingVar =
                        Var.Make
                           (View.Do {
                                let!  keyO = getSettingParm
                                match keyO with
                                | Some key -> let!   setting = getData key
                                              return setting
                                | None     -> return  "--"
                            })
                            (fun v -> getSettingParm |> View.Get(Option.iter(fun key -> setData key v)))
                    let setSetpoint = async {
                        let!  parmO = getSettingParm |> View.GetAsync
                        match parmO with
                        | None -> ()
                        | Some parm ->
                        let! value  = getData parm |> View.GetAsync
                        let parm2 = parm.["tstat/".Length..]
                        therm |> postTstat parm2 value
                    }
            
            
                    //let set         = getSettingVar therm
                    let title       =   div [] [ 
                                            h2 [] [ text therm.name ]
                                            text time.V
                                        ]
                    let information =   div [] [ 
                                            h3  [] [          text temp    .V   ]
                                            h4  [] [ div [] [ text state   .V ] ]
                                            div [] [          text fanState.V   ]
                                        ]
                    let settings    =   div [] [
                                            div [] [
                                                button [ on.click (fun _ _ -> setSetpoint |> Async.Start) ] [ text "Set:" ]
                                                Doc.Input [] getSettingVar
                                            ]
                                            label [ attr.``class`` "checkbox-inline" ] [
                                                Doc.Element "input" 
                                                    [   attr.``type`` "checkbox"
                                                        on.click       (fun e _ -> therm |>             setHold e?``checked`` |> Async.Start)
                                                        on.afterRender (fun e   -> hold  |> View.Sink (fun v -> e?``checked`` <- v = "1")   )
                                                        attr.style "bottom: 7px ; width: 18px;"
                                                    ] []
                                                text "Hold" 
                                            ]
                                        ]
                    div [ attr.style "grid-gap: 0px  ; margin: 10px" 
                          attr.classDyn <| View.Map (sprintf "shadow panel thermostat Mode%s") mode 
                      ] [
                        LE.fixedSplitter    true  50.0 true information settings
                        |> LE.fixedSplitter false 50.0 true title
                        Doc.Element "style" [] [ text  """
                              .thermostat {
                                  text-align      : center     ; 
                                  height          : 100px      ;
                              }
                              .thermostat h2, .thermostat h3, .thermostat h4  {
                                  color           : white   ;
                                  margin-top      : 3px     ; 
                                  margin-left     : 5px     ; 
                                  margin-bottom   : 0px     ; 
                              }
                              .thermostat input {
                                  width           : 50px ;
                              }
                              .thermostat.ModeCool {
                                  background-color: blue; 
                                  color: white;
                              }
                              .thermostat.ModeCool button, .thermostat.ModeCool input {
                                  background-color: navy; 
                                  color: white;
                              }
                              .thermostat.ModeHeat {
                                  background-color: firebrick; 
                                  color: white;
                              }
                              .thermostat.ModeHeat button, .thermostat.ModeHeat input {
                                  background-color: darkred; 
                                  color: white;
                              }
                        """ ]
                    ]
            
                let newThermostat n   = { name = n ; data = Var.Create Map.empty }
            
                let Thermostats =
                    [|  newThermostat "Arriba"
                        newThermostat "Abajo"
                    |]
                    
                let getThermostat nm = Thermostats |> Array.tryFind (fun t -> t.name = nm)
            
                let processData (THMData(name, data: (string * string) [])) = 
                    printfn "Thermostats: %A %A" name data
                    fusion {
                        data
                        |> Array.iter (fun (cmd, dat) ->
                            let key = sprintf "%s(%s)" name cmd
                            getThermostat name |> Option.iter (setData cmd  dat)
                            //currentSnpO        |> Option.iter (fun snp   -> snp.properties |> Dict.add key  dat)
                        )
                        return "got it!"
                    } |> iterResultPrintA
            
                [< SPAEntryPoint >]
                let main() =
                    AF.addPlugIn {
                        AF.plgName    = "Thermostats"
                        AF.plgVars    = [| //AF.newVar  "testVar"         var
                                        |]  
                        AF.plgViews   = [|
                                        |]  
                        AF.plgDocs    = [| yield  AF.newDoc  "openWeather"                            <| lazy weather (Snippet.New "" "" None)
                                           yield! Thermostats |> Seq.map (fun th -> AF.newDoc th.name <| lazy thermostatDisplay th)
                                        |]  
                        AF.plgActions = [| //AF.newAct  "Refresh"         refresh
                                           AF.newActF   "processData"      <| AF.FunAct1 ((fun msg -> msg |> unbox |> Json.Deserialize |> processData), "ThermostatMessage")
                                        |]
                        AF.plgQueries = [|                                               
                                        |]
                    }
                    AF.tryGetAct "FSharpStation" "ActionClick" |> Option.iter (fun pac -> AF.callFunction "Refresh" () pac.actFunction)
                    
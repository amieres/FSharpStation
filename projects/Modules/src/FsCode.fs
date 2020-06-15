////-d:FSharpStation1592212925139 -d:TEE
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Web.dll"
/// Root namespace for all code
//#define FSharpStation1592212925139
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
            
            
            [< Inline "$a + '/' + $b" >]
            let inline (+/+) a b = System.IO.Path.Combine(a, b)
            
            [< AutoOpen >]
            module CommArgRoot =
                open FusionM
                open Operators
            
                type CommArgId = CommArgId of System.Guid
                
                type CommArg = {
                    cargId : CommArgId
                    name   : string
                    unique : bool
                    build  : obj -> string
                }
                type CommArgValue<'T,  'M> = FusionM<'T, CommArgCollection<     'M>, 'M>
                and  ArgValueTuple<    'M> = CommArg *   CommArgValue<obj,      'M>
                and  CommArgCollection<'M> = CommArgCollection of ArgValueTuple<'M> seq
                    with 
                        member oo.CommArgs = match oo with CommArgCollection v -> v
            
                let CommArgCollection agvts = Seq.cache agvts |> CommArgCollection
            
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
                    let argumentRm show (a:CommArg) (vRm:CommArgValue<obj,_>) = fusion {
                        let! v = vRm
                        let  r = a.build v
                        if show then printfn "%s %s" a.name r
                        return r
                    }
                    let inline argumentTRm show (a,v) = argumentRm show a v
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
                    let argumentsRm      show        filter = filterRm filter >>= traverseSeq (CommArg.argumentTRm show) |>> Seq.filter ((<>) "")
                    let containsAnyOfRm (ids:CommArgId Set) = readerFun(fun (CommArgCollection args) -> args |> Seq.exists (fun (a,_) -> Set.contains a.cargId ids) )
                    let argumentNotFound  targ = fun () -> match targ with | TypedCommArg arg -> sprintf "argument not found: %s" arg.name |> ErrorMsg
                    let tryFindArgO   (TypedCommArg arg) (CommArgCollection args) = Seq.tryFind (fun (a,_) -> a.cargId = arg.cargId) args 
                    let tryFindArgORm     targ = readerFun(fun coll -> tryFindArgO targ coll |> Option.map insertFst |> insertO) >>= id
                    let tryGetValueORm    targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getValueR  targ o)) |>> Result.insertO >>= ofResultRM
                    let tryGetIntORm      targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getIntR    targ o)) |>> Result.insertO >>= ofResultRM
                    let tryGetStringORm   targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getStringR targ o)) |>> Result.insertO >>= ofResultRM
                    let tryGetBoolORm     targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getBoolR   targ o)) |>> Result.insertO >>= ofResultRM
                    let tryGetFloatORm    targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getFloatR  targ o)) |>> Result.insertO >>= ofResultRM
                    let tryBuildArgORm    targ = tryFindArgORm   targ |>> (Option.map (fun (c, o) -> c.build                 o)) 
                    let findArgRm         targ = tryFindArgORm   targ >>= ofOption (argumentNotFound targ)
                    let getValueRm        targ = tryGetValueORm  targ >>= ofOption (argumentNotFound targ)
                    let getIntRm          targ = tryGetIntORm    targ >>= ofOption (argumentNotFound targ)
                    let getStringRm       targ = tryGetStringORm targ >>= ofOption (argumentNotFound targ)
                    let getFloatRm        targ = tryGetFloatORm  targ >>= ofOption (argumentNotFound targ)
                    let getBoolRm   def   targ = tryGetBoolORm   targ |>> Option.defaultValue def
                    let buildArgRm        targ = tryBuildArgORm  targ >>= ofOption (argumentNotFound targ)
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
            
                    let appendRm args2 = fusion {
                        let! args1 = getS()
                        do!         putS(append args1 args2)
                    }
                    let addPairsRm pairs = fusion {
                        let! args = getS()
                        do!         putS(addPairs pairs args)
                    }
                        
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
                open System
            
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
                    then code.[4.. (match code.IndexOf '\n' with -1 -> code.Length | n -> n)  - 1]
                    else ""
            
                let separatePrepros (code:string[]) =
                    let  quoted (line:string) = line.Trim().Split([| "\"" |], System.StringSplitOptions.RemoveEmptyEntries) |> Seq.tryLast |> Option.defaultValue line
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
                    let definesFirstLine = 
                        Seq.tryHead fsNass 
                        |> Option.map (fst >> FsCode >> extractDefines>> fun s-> s.Split([| " " ; "-d:" |], StringSplitOptions.RemoveEmptyEntries) ) 
                        |> Option.defaultValue [||]
                        |> Seq.map PrepoDefine
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
                                        |_             -> false) 
                                        |> Seq.append definesFirstLine
                                        |> Seq.toArray
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
            
            
        /// Essentials that cannot run in Javascript (WebSharper)
        [< AutoOpen >]
        module LibraryNoJS =
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
                        fscNoFramework /= fusion {
                                            let!    args  = filterRm (fun (a,v) -> a.cargId = fscReference.CommArg.cargId)
                                            let!    args2 = args |> traverseSeq (fun (a,b) -> getValueR fscReference b |> FusionM.ofResult)
                                            return  args2
                                                    |> Seq.map   (fun s -> s.ToLower()) 
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
                    
                let prepOptionsRm (assembs : string [], defines : string [], prepoIs : string []) = fusion {
                    let! staticLinksAll = getBoolRm false intStaticLinkAll
                    return [
                        yield! prepoIs |> Array.map ((/=) fscIOption  ) 
                        yield! assembs |> Array.map ((/=) fscReference)
                        yield! defines |> Array.map ((/=) fscDefine   )
                        if staticLinksAll then 
                            yield! assembs |> Array.map (fun f -> fscStaticLink /= System.IO.Path.GetFileNameWithoutExtension f)
                    ]
                }
                    
                let processArgs code assembs nowarns = fusion {        
                    let! nofrwk    = gB fscNoFramework
                    printfn "%b && %b" nofrwk  (assembs |> Seq.exists (fun (a:string) -> a.EndsWith "mscorlib.dll" ) |> not)
                    if nofrwk && (assembs |> Seq.exists (fun (a:string) -> a.EndsWith "mscorlib.dll" ) |> not) then
                        do!          addPairsRm [ fscReference /= "mscorlib.dll" ]
                        printfn "adding mscorlib.dll"
                    let! show      = getBoolRm false intShowArgs
                    if   show then 
                        let! args  = argumentsRm show (fun _ -> true)
                        ()
                    let! workDir   = gS intDirectory
                    let! fileName  = gS intFileName
                    let! output    = gS fscOutput
                    let! copyAssem = gB intCopyAssem
                    let! createDir = gB intCreateDir
                    let  srcDir    = Path.GetDirectoryName fileName
                    let  outDir    = Path.GetDirectoryName output
                    if   createDir then 
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
                
                type PreparedCode = {
                    assemblies : string []
                    defines    : string []
                    prepIs     : string []
                    nowarns    : string []
                    cd         : string option
                    code       : FsCode
                }
            
                let prepareCodeRm (FsCode codeFs) = fusion {
                    let  fs, directs                            = codeFs.Split '\n' |> separatePrepros |> getTopDirectives
                    let  assembs, defines, prepIs, nowarns, cdO = separateDirectives directs
                    let! args2                                  = prepOptionsRm (assembs, defines, prepIs)
                    do!                                           addPairsRm  args2
                    do!                                           processArgs fs assembs nowarns
                    return {
                        assemblies = assembs
                        defines    = defines
                        prepIs     = prepIs
                        nowarns    = nowarns
                        cd         = cdO
                        code       = FsCode codeFs
                    }
                }
            
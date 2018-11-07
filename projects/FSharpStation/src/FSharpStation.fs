#nowarn "52"
////-d:FSS_SERVER -d:FSharpStation1541586030091 -d:WEBSHARPER
////#cd @"..\projects\FSharpStation\src"
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
//#r @"..\packages\System.Reactive\lib\net46\System.Reactive.dll"
//#r @"..\packages\FSharp.Control.Reactive\lib\net46\FSharp.Control.Reactive.dll"
//#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
//#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
//#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
//#r @"..\packages\Owin\lib\net40\Owin.dll"
//#r @"..\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
//#r @"..\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
//#r @"..\packages\NewtonSoft.JSon\lib\net45\NewtonSoft.JSon.dll"
//#r @"..\..\LayoutEngine\bin\LayoutEngine.dll"
//#r @"..\packages\Microsoft.Owin.Hosting\lib\net451\Microsoft.Owin.Hosting.dll"
//#r @"..\packages\Microsoft.Owin.Host.HttpListener\lib\net451\Microsoft.Owin.Host.HttpListener.dll"
//#r @"..\packages\WebSharper.Owin\lib\net461\WebSharper.Owin.dll"
//#r @"..\packages\WebSharper.Owin\lib\net461\HttpMultipartParser.dll"
//#r @"..\packages\Microsoft.Owin.StaticFiles\lib\net451\Microsoft.Owin.StaticFiles.dll"
//#r @"..\packages\Microsoft.Owin.FileSystems\lib\net451\Microsoft.Owin.FileSystems.dll"
//#nowarn "52"
/// Root namespace for all code
//#define FSharpStation1541586030091
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
                
            module Memoize =
            
            
                /// creates a Dictionary to store memoized values
                /// returns 3 functions:
                ///    checkO  : ('p->'v option) 
                ///    getOrAdd: ('p->('p->'v)->'v) 
                ///    clear   : (unit->unit)
                [<Inline>]
                let getStore() =
                    let cache        = System.Collections.Generic.Dictionary<_, _>()
                    let checkO v     = let mutable res = Unchecked.defaultof<_>
                                       let ok          = cache.TryGetValue(v, &res)
                                       if  ok then Some res else None
                    let store  v res = cache.[v] <- res
                                       res
                    let getOrAdd p f = checkO p |> Option.defaultWith (fun () -> f p |> store p )
                    (checkO, getOrAdd), cache.Clear
            
                /// Memoizes function f using the provided cache
                /// getCache() returns 1 function:
                ///    getOrAdd: ('p->('p->'v)->'v) 
                [< Inline >]
                let memoizeStore (getCache:unit->('key -> ('key -> 'value) -> 'value) ) f =
                    let getOrAdd = getCache()
                    fun p -> getOrAdd p f
            
            
                /// Memoizes the function f using a Dictionary
                /// Returns the memoized function and a clear() function
                /// The dictionary can be reset using the clear() function
                [< Inline >]
                let memoizeResetable f =
                    let (check, getOrAdd), clear = getStore()
                    let memoF = memoizeStore (fun () -> getOrAdd) f
                    memoF, clear
            
                /// Memoizes the function f using a Dictionary
                [<Inline>]
                let memoize f = memoizeResetable f |> fst
            
            
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
                        return! match   vR with
                                | Ok    v -> fRA v
                                | Error m -> async { return Error m }
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
                    let rec whileLoop cond fRA =
                        if   cond () 
                        then fRA  () |> bind (fun () -> whileLoop cond fRA)
                        else rtn  ()
                    let (>>=)                              v f = bind f v
                    let rec    traverseSeq     f            sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                                 Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq                  sq = traverseSeq id sq
                    let insertO   vRAO                         = vRAO |> Option.map(map Some) |> Option.defaultWith(fun () -> rtn None)
                    let insertR ( vRAR:Result<_,_>)            = vRAR |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                    let absorbR   vRRA                         = vRRA |> Async.map (Result.bindP   id)
                    let absorbO f vORA                         = vORA |> Async.map (Result.absorbO  f)
                
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
                    member __.Run              fRA                            = fRA ()
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
                let (|StartsWith|_|) start (s:string) = if s.StartsWith start then Some s.[start.Length..                          ] else None
                let (|EndsWith  |_|) ends  (s:string) = if s.EndsWith   ends  then Some s.[0           ..s.Length - ends.Length - 1] else None
                
            
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
            
            type ResourceAgentState<'R, 'C> = {
                useCount      : int
                limitCount    : int
                resource      : 'R
                configuration : 'C
            }
            
            type ResourceAgent<'R, 'C when 'C : equality>(maxUseCount, ctor: 'C -> 'R, configuration, ?cleanup, ?isAlive, ?respawnAfter) =
                let clean                          = defaultArg cleanup ignore
                let alive                          = defaultArg isAlive (fun _ -> true)
                let initConfig                     = configuration
                let respawnRightAfter              = defaultArg respawnAfter true
                let respawn                  state = clean state.resource
                                                     { state with useCount = 0 ; resource = ctor state.configuration }
                let check                cfg state = if state.useCount < state.limitCount && alive state.resource && cfg = state.configuration
                                                     then state 
                                                     else respawn { state with configuration = cfg }
                let increment                state = { state with useCount = state.useCount + 1 }
                                                     |> if respawnRightAfter then (check state.configuration) else id
                let agent                          = Mailbox.stateFull (fun ex st -> print ex ; respawn st)  
                                                        {   useCount      = 0
                                                            limitCount    = maxUseCount
                                                            configuration = initConfig
                                                            resource      = ctor initConfig
                                                        }
                member __.AsyncProcessA(work,?cfg) = agent 
                                                    |> Mailbox.StateFull.applyReplyA(fun st -> async { 
                                                         let  st2 = st |> check (defaultArg cfg st.configuration) 
                                                         let! res = work st2.resource
                                                         return increment st2, res 
                                                     })
                member oo.ProcessA     (work,?cfg) = oo.AsyncProcessA((fun v -> async { return work v }), ?cfg=cfg)
                [< Inline "throw 'ResourceAgent.Process not available in JavaScript'" >]
                member oo.Process      (work,?cfg) = oo.ProcessA(work, ?cfg=cfg) |> Async.RunSynchronously
                member __.State                    = agent |> Mailbox.StateFull.getState
                member oo.LimitCount    with get() = oo.State.limitCount
                member oo.Configuration with get() = oo.State.configuration
                member __.LimitCount    with set n = agent |> Mailbox.StateFull.apply(fun s -> { s with limitCount    = n })
                member oo.Configuration with set c = if c <> oo.Configuration then agent |> Mailbox.StateFull.apply(fun s -> respawn { s with configuration = c})
                member __.Respawn               () = agent |> Mailbox.StateFull.apply respawn
                interface System.IDisposable with
                    member this.Dispose () = try clean this.State.resource with _ -> ()
            
            
            
            
            
            
            
            
            
            module AgentReaderM =
                open FusionAsyncM
                open Operators
            
                let createAgentRm                         f  v = readerFun(fun  (agent:ResourceAgent<_,_>, cfg)     -> agent.AsyncProcessA((fun resource -> f resource v)  , cfg) ) >>= ofAsync
                let ofResourceRm                     (FAM f)   = FAM      (fun ((agent:ResourceAgent<_,_>, cfg), m) -> 
                                                                            agent.AsyncProcessA((fun resource -> async {
                                                                                    let! vO, _, m = f(resource, m) 
                                                                                    return vO, (agent, cfg), m 
                                                                                }), cfg) 
                                                                            )
                let run            agent cfg                 m = runReader (agent,       cfg          ) m
                let runSameConfig (agent:ResourceAgent<_,_>) m = runReader (agent, agent.Configuration) m
            
            [< AutoOpen >]
            module CommArgRoot =
                open FusionM
                open Operators
            
                type CommArgId = CommArgId of System.Guid
                
                type CommArgBuild =
                    | TInt    of (int    -> string)
                    | TString of (string -> string)
                    | TBool   of (bool   -> string)
                    | TFloat  of (float  -> string)
                
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
                    let New0 (name, unique, build) = {
                        cargId = CommArgId <| System.Guid.NewGuid()
                        name   = name
                        unique = unique
                        build  = build
                    }
                    let NewInt   (name, unique, build): TypedCommArg<int   > = New0(name, unique, build |> TInt   ) |> TypedCommArg
                    let NewString(name, unique, build): TypedCommArg<string> = New0(name, unique, build |> TString) |> TypedCommArg
                    let NewBool  (name, unique, build): TypedCommArg<bool  > = New0(name, unique, build |> TBool  ) |> TypedCommArg
                    let NewFloat (name, unique, build): TypedCommArg<float > = New0(name, unique, build |> TFloat ) |> TypedCommArg
                    let argumentRm (a:CommArg) (vRm:CommArgValue<obj,_>) = fusion {
                        let! v = vRm
                        return
                            match a.build with
                            | TInt    f -> unbox<int   > v |> f
                            | TString f -> unbox<string> v |> f
                            | TBool   f -> unbox<bool  > v |> f
                            | TFloat  f -> unbox<float > v |> f
                    }
                    let argumentTRm(a,v) = argumentRm a v
                    let getIntR    (TypedCommArg a) (o:obj) = 
                        match a.build with
                        | TInt    _ -> unbox<int   > o |> Ok
                        | _         -> Error <| ErrorMsg "expecting TInt"
                    let getStringR (TypedCommArg a) (o:obj) = 
                        match a.build with
                        | TString _ -> unbox<string> o |> Ok
                        | _         -> Error <| ErrorMsg "expecting TString"
                    let getBoolR   (TypedCommArg a) (o:obj) = 
                        match a.build with
                        | TBool   _ -> unbox<bool  > o |> Ok
                        | _         -> Error <| ErrorMsg "expecting TBool"
                    let getFloatR  (TypedCommArg a) (o:obj) = 
                        match a.build with
                        | TFloat  _ -> unbox<float > o |> Ok
                        | _         -> Error <| ErrorMsg "expecting TFloat"
                
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
                    let tryGetIntORm      targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getIntR    targ o)) |>> Result.insertO >>= ofResultRM
                    let tryGetStringORm   targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getStringR targ o)) |>> Result.insertO >>= ofResultRM
                    let tryGetBoolORm     targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getBoolR   targ o)) |>> Result.insertO >>= ofResultRM
                    let tryGetFloatORm    targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getFloatR  targ o)) |>> Result.insertO >>= ofResultRM
                    let findArgRm         targ = tryFindArgORm   targ >>= ofOption (argumentNotFound targ)
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
                
            /// Adapted from here http://fssnip.net/7V5   Usage:
            /// let abs n = if n >= 0 then n else Hole ? TODO_AbsForNegativeValue    
            ///         
            /// abs  1 |> printfn "%A" // 1
            /// abs -1 |> printfn "%A" // System.NotImplementedException: Incomplete hole 'TODO_AbsForNegativeValue : System.Int32'
            type Hole = Hole with
                [< Inline ; CompilerMessage("Incomplete hole", 130) >]
                static member inline (?) (Hole, id) : 'T = 
                    sprintf "Incomplete hole '%s'" id        
                    |> exn
                    |> raise
                    
            
            /// Tree structure to implement a hierarchical user interface but using readerMonad
            module TreeReader =
                open FusionM
                open Operators
            
                type Node<'I, 'R, 'T> = {
                    id                : unit                 -> 'I
                    isExpandedRm      : unit                 -> FusionM<bool                   , 'R, 'T>
                    canHaveChildrenRm : unit                 -> FusionM<bool                   , 'R, 'T>
                    childrenRm        : unit                 -> FusionM<Node<'I, 'R, 'T> seq   , 'R, 'T>
                    pathRm            : unit                 -> FusionM<'I list                , 'R, 'T>  // list of parents excluding itself
                    parentORm         : Node<'I, 'R, 'T> seq -> FusionM<Node<'I, 'R, 'T> option, 'R, 'T>
                    newChildrenRm     : Node<'I, 'R, 'T> []  -> FusionM<Node<'I, 'R, 'T>       , 'R, 'T>  // set new children, make sure to exclude children not listed and maintain the order of the children (if desirable)
                }
            
                let [<Inline>] inline toNode    (o: obj) = o :?> Node<_,_,_>
                let [<Inline>] inline toSeqNode  os      = os |> Seq.map toNode
            
                let rec listNodes level (nodes: Node<_,_,_> seq) =
                    nodes
                    |> Seq.map(fun node -> 
                        node.isExpandedRm() 
                        >>= (fun exp -> if exp then node.childrenRm() |>> Seq.toArray >>= listNodes (level + 1) else rtn Seq.empty)
                        |>> (fun nodes -> Seq.append [ node, level ] nodes)
                    ) 
                    |> sequenceSeq
                    |>> Seq.collect id
            
                let removeNode (node:Node<_,_,_>) nodes = fusion { // better use version removeNode2
                    let! path = node.pathRm()
                    let rec chRemove (n:Node<_,_,_>) = fusion {
                        if                  n.id() = node.id() then return  None
                        elif List.contains (n.id())  path      then return! n.childrenRm()
                                                                            |>> Seq.toArray
                                                                            |>> Seq.map chRemove 
                                                                            >>= sequenceSeq 
                                                                            |>> Seq.choose id 
                                                                            |>> Seq.toArray
                                                                            >>= n.newChildrenRm  
                                                                            |>> Some
                        else                                        return  Some n
                    }
                    return! nodes |> Seq.map chRemove |> sequenceSeq |>> Seq.choose id
                }
            
                let removeNodes p nodes = fusion {
                    let rec folder pair (n:Node<_,_,_>) = fusion {
                        let! children, noparent = pair
                        let! children2 = n.childrenRm() |>> Seq.toArray
                        let! ch, np = children2 |> Seq.fold folder (rtn ([], noparent) )
                        if p n then return (        children, ch @ np)
                               else let! xxx = n.newChildrenRm (ch |> Seq.rev |> Seq.toArray)
                                    return ( xxx :: children,      np)
                    }
                    let! res, noparent = nodes |> Seq.fold folder (rtn ([], []) )
                    return noparent @ res |> List.rev
                }
            
                let addNodeToSeq after p node (nodes:Node<_,_,_> seq)  =
                    seq [ for n in nodes do
                            if p n then
                                if after then yield n    ; yield node
                                else          yield node ; yield n
                            else              yield n
                    ]
                    
                let addToParent after p (node:Node<_,_,_>) (parent :Node<_,_,_>) (nodes:Node<_,_,_> seq)  = nodes |> addNodeToSeq after p node |> Seq.toArray |> parent.newChildrenRm
            
                let addSibling  after   (node:Node<_,_,_>) (sibling:Node<_,_,_>) (nodes:Node<_,_,_> seq) = 
                    let theSibling (n:Node<_,_,_>) = n.id() = sibling.id()
                    sibling.pathRm() >>= function
                    | [   ]          -> rtn <| addNodeToSeq after theSibling node nodes 
                    | parent :: path -> 
                    let rec mapAdd (n:Node<_,_,_>) =
                        if                  n.id() = parent then     n.childrenRm() |>> Seq.toArray >>= addToParent after theSibling node n
                        elif List.contains (n.id()) path    then     n.childrenRm() |>> Seq.toArray |>> Seq.map mapAdd >>= sequenceSeq |>> Seq.toArray >>= n.newChildrenRm 
                        else                                     rtn n
                    nodes |> Seq.map mapAdd |> sequenceSeq
            
                let tryFind p (nodes:Node<_,_,_> seq) = 
                    let rec folder resRm (node:Node<_,_,_>) =
                        resRm >>= function
                        | Some v -> rtn (Some v)
                        | None   ->
                        if p node then rtn <| Some node else 
                        node.childrenRm() >>= Seq.fold folder (rtn None)
                    nodes                 |>  Seq.fold folder (rtn None)
                    
                let tryFindId (id:'I) (nodes:Node<_,_,_> seq) = tryFind (fun n -> n.id() = id) nodes
            
                let moveToSibling after (node:Node<_,_,_>) (sibling:Node<_,_,_>) (nodes:Node<_,_,_> seq) = 
                    nodes
                    |>  removeNode node
                    >>= addSibling after node sibling
            
                let moveToSibling2 after (nodeId:'I) (siblingId:'I) (nodes:Node<_,_,_> seq) = fusion {
                    let!  nodeO = nodes |> tryFindId nodeId
                    match nodeO with
                    | None         -> return nodes
                    | Some node    ->
                    let!  siblingO = nodes |> tryFindId siblingId
                    match siblingO with
                    | None         -> return nodes
                    | Some sibling -> return! moveToSibling after node sibling nodes
                }
            
                let addChild append (node:Node<_,_,_>) (parentN:Node<_,_,_>) (nodes:Node<_,_,_> seq) = fusion {
                    let! path = parentN.pathRm()
                    let rec mapAppend (n:Node<_,_,_>) =
                        if   n.id() = parentN.id()       then 
                            if append                    then n.childrenRm() |>> Seq.toArray |>> swap Seq.append [ node ]                         |>> Seq.toArray >>= n.newChildrenRm
                            else                              n.childrenRm() |>> Seq.toArray |>>      Seq.append [ node ]                         |>> Seq.toArray >>= n.newChildrenRm
                        elif List.contains (n.id()) path then n.childrenRm() |>> Seq.toArray |>>      Seq.map mapAppend   >>= sequenceSeq |>> Seq.toArray >>= n.newChildrenRm
                        else                                  rtn n
                    return! nodes |> Seq.map mapAppend |> sequenceSeq
                }
            
                let indentNode (node:Node<_,_,_>) (nodes:Node<_,_,_> seq) = 
                    node.parentORm nodes >>= function
                    | None        -> rtn nodes
                    | Some parent -> parent.childrenRm() |>> (Seq.toArray >> Seq.ofArray)
                    |>> Seq.takeWhile (fun              n -> node.id() <> n.id())
                    >>= Seq.fold      (fun newParentORm n -> n.canHaveChildrenRm() >>= (fun can -> if can then rtn(Some n) else newParentORm)) (rtn None)
                    >>= function
                    | None           -> rtn nodes
                    | Some newParent ->
                    nodes
                    |>  removeNode node 
                    >>= addChild true node newParent
            
                let outdentNode (node:Node<_,_,_>) (nodes:Node<_,_,_> seq) =
                    node.parentORm nodes
                    |>> Option.map          (fun parent -> moveToSibling true node parent nodes )
                    >>= Option.defaultValue (rtn nodes)
                    
                let removeNodeOutdentChildren (node:Node<_,_,_>) (nodes:Node<_,_,_> seq) =
                    node.childrenRm()
                    |>> Seq.toArray
                    >>= Seq.fold (fun nodes node -> nodes >>= (outdentNode node) ) (rtn nodes)
                    >>= removeNode node
                    
                
        /// Essentials that cannot run in Javascript (WebSharper)
        [< AutoOpen >]
        module LibraryNoJS =
            //#r @"..\packages\System.Reactive\lib\net46\System.Reactive.dll"
            //#r @"..\packages\FSharp.Control.Reactive\lib\net46\FSharp.Control.Reactive.dll"
            module RunProcess =
                open System.Diagnostics
                open System.Text
                open FSharp.Control.Reactive
                open FSharp.Control.Reactive.WaitHandle
                open FSharp.Control
            
                let startProcess p ops =
                    let procStart   = ProcessStartInfo(p, ops)
                    let proc        = new Process()
                    proc.StartInfo <- procStart
                    proc.Start() 
                
                let startProcessDir p ops dir =
                    let procStart   = ProcessStartInfo(p, ops, WorkingDirectory = dir)
                    let proc        = new Process()
                    proc.StartInfo <- procStart
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
                    let proc                              = new Process()
                    let bufferOutput                      = new StringBuilder()
                    let bufferError                       = new StringBuilder()
                    let append  (sb: StringBuilder) txt   = sb.Append(txt + "\n")                  |> ignore
                    let consume (sb: StringBuilder)       = sb.ToString() |>! (fun _ -> sb.Clear() |> ignore)
                    let dataHandler handler               = DataReceivedEventHandler(fun sender args -> try handler args.Data with _ -> ())
                    let outputHandler                     = append bufferOutput |> dataHandler
                    let errorHandler                      = append bufferError  |> dataHandler
                    do  startInfo.RedirectStandardInput  <- true
                        startInfo.RedirectStandardOutput <- true
                        startInfo.RedirectStandardError  <- true
                        startInfo.UseShellExecute        <- false
                        proc.StartInfo                   <- startInfo
                        proc.EnableRaisingEvents         <- true
                        outputHandler                    |>             proc.OutputDataReceived.AddHandler
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
            
                let fscIOption     = NewString("IOption"   , false, sprintf "-I:%A"          )
                let fscReference   = NewString("Reference" , false, sprintf "-r:%A"          )
                let fscSource      = NewString("Source"    , false, sprintf "%A"             )
                let fscTarget      = NewString("Target"    , true , sprintf "--target:%s"    )
                let fscPlatform    = NewString("Platform"  , true , sprintf "--platform:%s"  )
                let fscOutput      = NewString("Output"    , true , sprintf "-o:%A"          )
                let fscDebug       = NewString("Debug"     , true , sprintf "--debug:%s"     )
                let fscDefine      = NewString("Define"    , false, sprintf "--define:%s"    )
                let fscStaticLink  = NewString("StaticLink", false, sprintf "--staticlink:%s")
                let fscGenFSharp1  = NewString("GenFSharp1", false, sprintf "-%s"            )
                let fscGenFSharp2  = NewString("GenFSharp2", false, sprintf "--%s"           )
                
                let FSharpArgs = 
                    Set [
                          fscIOption   .CommArg.cargId
                          fscReference .CommArg.cargId
                          fscSource    .CommArg.cargId
                          fscTarget    .CommArg.cargId
                          fscPlatform  .CommArg.cargId
                          fscOutput    .CommArg.cargId
                          fscDebug     .CommArg.cargId
                          fscDefine    .CommArg.cargId
                          fscStaticLink.CommArg.cargId
                          fscGenFSharp1.CommArg.cargId
                          fscGenFSharp2.CommArg.cargId
                ] 
                
                let wscWebSite      = NewString("Website"     , true , sprintf "--wsoutput:%A"              )
                let wscProjectPath  = NewString("WsProject"   , true , sprintf "--project:%A"               )
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
                          wscProjectPath .CommArg.cargId
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
                    ]
                    
                let siteOptions ()=
                  CommArgCollection
                    [|
                       wscProjectType /=       "Site"
                       wscWebSite     /= (rtn (fun d -> d +/+ "website" ) <*> gS intDirectory )
                       wscProjectPath /=       gS intName
                       wscJSMap       /=       true
                       wscJsOutput    /= (rtn (fun d n   -> d +/+ n + "0.js" ) <*> gS wscWebSite    <*> gS intName                     )
                    |] 
                 
                let wsProjectOptions ()=
                  CommArgCollection
                    [|
                       wscProjectPath /= gS intName
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
                
            module FsiEvaluator =
                open System.Diagnostics
                open RunProcess
                
                
                let inline (+/+) a b = System.IO.Path.Combine(a, b)
            
                [< Literal >]
                let endToken = "xXxY" + "yYyhH"
                type FsiExe(config:string, workingDir, ?outHndl, ?errHndl) =
                    let silent                     = ref false
                    let fsiexe                     = @"..\packages\FSharp.Compiler.Tools\tools" +/+ if config.Contains "-d:FSI32BIT" then "fsi.exe" else "fsianycpu.exe"
                    let startInfo                  = ProcessStartInfo(fsiexe, config, WorkingDirectory= workingDir)
                    let outHndlS                   = outHndl |> Option.map(fun outh v -> if !silent then () else outh v)
                    let errHndlS                   = errHndl |> Option.map(fun errh v -> if !silent then () else errh v)
                    let shell                      = new ShellEx(startInfo, ?outHndl = outHndlS, ?errHndl = errHndlS)  // --noninteractive
                    do  startInfo.CreateNoWindow  <- false
                        shell.Start() |> ignore
                    member __.Eval (FsCode code)   = asyncResult {
                                                         shell.Send code
                                                         shell.Send ";;"
                                                         return! shell.SendAndWait("printfn \"" + endToken + "\";;", endToken)
                                                     }
                    member __.IsAlive              = not shell.HasExited
                    member __.Abort()              = shell.Abort()
                    member __.Process              = shell.Process
                    member oo.EvalSilent code      = asyncResult {
                                                        try     silent := true
                                                                return! oo.Eval code
                                                        finally silent := false
                                                     }
                    interface System.IDisposable with
                        member this.Dispose ()     = (shell :> System.IDisposable).Dispose()
            
                open FusionAsyncM
                open Operators
            
                let evaluateRm   code = getS() >>= (fun (fsi:FsiExe) -> fsi.Eval       code |> ofAsyncResultRM) 
                let evalSilentRm code = getS() >>= (fun (fsi:FsiExe) -> fsi.EvalSilent code |> ofAsyncResultRM) 
            
            module FsiCodePresence =
                open FusionAsyncM
                open FsiEvaluator
                open Operators
            
                let installPresenceRm() = 
                    """
                    module CodePresence =
                        let mutable present : Map<string, string>  = Map.empty
                        let presenceOf    k   = present |> Map.tryFind k |> Option.defaultValue "--" |> printfn "%s"
                        let addPresenceOf k v = present <- present |> Map.add k v ; printfn "ok"
                    """
                    |>  String.unindentStr
                    |>  FsCode
                    |>  evalSilentRm 
                    |>> ignore
            
                let addPresenceRm (name:string) (v:string) = fusion {
                    let  code = sprintf "CodePresence.addPresenceOf %A %A" (name.Replace("\"", "\\\"")) v |> FsCode
                    let! res  = evalSilentRm code |>> String.splitByChar '\n' |>> Seq.head
                    match res with
                    | "ok"   -> ()
                    |_       -> do! installPresenceRm()
                                do! evalSilentRm code |>> ignore
                }
                        
                let getPresenceRm (name:string)   = fusion {
                    let! res = sprintf "CodePresence.presenceOf    %A" (name.Replace("\"", "\\\""))
                               |> FsCode
                               |> evalSilentRm
                               |>> String.splitByChar '\n' |>> Seq.head
                               |> getOption
                    match res with
                    | None                     -> do! installPresenceRm()
                                                  return None
                    | Some v when v = endToken -> do! installPresenceRm()
                                                  return None
                    | Some "--"                -> return None
                    | Some v                   -> return Some v
                }
            
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            module Promise =
                let ofAsyncResult (v: Async<Result<'a,'b>>) : Promise<'a> =
                    new Promise<'a>(fun (resolve, reject) ->
                        Async.StartWithContinuations(v, (function Ok ok -> resolve ok | Error er -> reject <| sprintf "%A" er), reject, reject)
                    )
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
            
            /// binds an Editor with a Var<string> to avoid annoying jumps to the end when fast typing
            /// onChange gets called when the editor changes but not when the var changes
            let bindVarEditor setEvent getVal setVal onChange (var:Var<string>) =
                let editorChanged = ref 0L
                let varChanged    = ref 0L
                setEvent(fun _ ->
                    let v = getVal() 
                    if var.Value <> v then editorChanged := !editorChanged + 1L; var.Value <- v; onChange() 
                )
                var.View |> View.Sink (fun _ ->
                    if  !editorChanged > !varChanged then varChanged := !editorChanged
                    elif getVal() <> var.Value then setVal var.Value
                )
            
            [< Inline """(!$v)""">]
            let isUndefined v = v.GetType() = v.GetType()
                
            
            module Serializer =
                
                type SerS<'T> = ('T  -> string)        //      Serialization function
                type SerD<'T> = (obj -> 'T    )        //    deSerialization function
                type Ser< 'T> = SerS<'T> * SerD<'T>    // both Serialization functions
                
                let inline ifUndef  def v   = if isUndefined v then def   else   v
                let inline ifUndefF def f v = if isUndefined v then def v else f v
                
                let (|Exists|_|) field o = if isUndefined o?(field) then None else Some o?(field)
                
                let deserGuid = ifUndef (System.Guid "00000000-0000-0000-0000-000000000000")
            
                let [< Inline >] inline sprintU v = sprintf "%A"       v
                let [< Inline >] inline sprintQ v = sprintf "\"%A\""   v
                let              inline sprintA v = String.concat ", " v |> sprintf "[%s]"
                
                let serFloat  : Ser<float > = sprintU        , (unbox >> ifUndef 0.0   )
                let serInt    : Ser<int   > = sprintU        , (unbox >> ifUndef 0     )
                let serBool   : Ser<bool  > = sprintU        , (unbox >> ifUndef false )
                let serString : Ser<string> = Json.Serialize , (unbox >> ifUndef ""    )
            
                let [< Inline >] inline serId  (get: 'a->System.Guid) (set:System.Guid->'a) (print: 'a->string) : Ser<'a> =
                    let s           = System.Guid.Empty |> set |> print |> fun (s:string) -> s.Split ' ' |> Array.head
                    let sQ          = sprintf "%A" s
                    let serialize   = fun id       -> get id |> sprintf "{%10s :%A}" sQ
                    let deserialize = fun (x: obj) -> x?(s) |> deserGuid |> set
                    serialize, deserialize
            
                let serField (name:string) (get:'D->'e) (set:'e->'D->'D) (serFuncs:('e->string) * (obj->'e)) : string * SerS<'D> * ('D -> SerD<'D>) = 
                    serFuncs |> fun (ser, deser) -> name, get >> ser, (fun rc o -> set (deser o) rc) 
                    
                let [< Inline >] serRecord init (fields: #seq<(string * SerS<'D> * ('D -> SerD<'D>))>) : Ser<'D> =
                    let serialize   dim = fields |> Seq.map  (fun     (n,  ser, _deser) -> sprintf "%A: %s" n (ser dim)) |> String.concat ", " |> sprintf "{%s}"
                    let deserialize o   = if isUndefined o then init else fields |> Seq.fold (fun dim (n, _ser,  deser) ->  deser dim (o?(n)) )   init
                    serialize, deserialize
                
                let serSeq (ser:Ser<'D>) : Ser<'D seq     > = (Seq   .map (fst ser) >> sprintA                   ) , (unbox<obj[]> >> ifUndefF (fun _ -> Seq.empty) (Seq.map (snd ser))               )
                let serArr (ser:Ser<'D>) : Ser<'D []      > = (Array .map (fst ser) >> sprintA                   ) , (unbox<obj[]> >> ifUndefF (fun _ -> Seq.empty) (Seq.map (snd ser)) >> Seq.toArray)
                let serLst (ser:Ser<'D>) : Ser<'D list    > = (List  .map (fst ser) >> sprintA                   ) , (unbox<obj[]> >> ifUndefF (fun _ -> Seq.empty) (Seq.map (snd ser)) >> Seq.toList )
                let serSet (ser:Ser<'D>) : Ser<Set<'D>    > = (Set   .map (fst ser) >> sprintA                   ) , (unbox<obj[]> >> ifUndefF (fun _ -> Seq.empty) (Seq.map (snd ser)) >> Set        )
                let serOpt (ser:Ser<'D>) : Ser<'D option  > = (Option.map (fst ser) >> Option.defaultValue "null") , (unbox<obj  > >> ifUndefF (fun _ -> None     ) (         snd ser   >> Some      ))
                let serDup serFst serSnd : Ser<'a * 'b    > = (fun (f,s) -> sprintf "[%s, %s]" (fst serFst f) (fst serSnd s)), (unbox<obj[]> >> ifUndefF (fun _ -> snd serFst null, snd serSnd null ) (fun os -> snd serFst os.[0], snd serSnd os.[1] ) )
                let serMap serKey serElm : Ser<Map<'k, 'e>> = serDup serKey serElm |> serSeq |> (fun serKVPs -> (Seq.map (fun kvp -> kvp.Key, kvp.Value) >> fst serKVPs) , (snd serKVPs >> Map)       )
            
                let serVarField (name:string) (var:'D->Var<'e>) (serFuncs:Ser<'e>) : string * SerS<'D> * ('D -> SerD<'D>) = 
                    serFuncs |> fun (ser, deser) -> name, (var >> Var.Get >> ser), (fun rc o -> var rc |> Var.Set <| deser o ; rc)
            
                let serLMdField (name:string) (lmd:'D->ListModel<_,'e>) serE  : string * SerS<'D> * ('D -> SerD<'D>) = 
                    let serS              = serSeq serE
                    let serializer   rc   = lmd rc |> (fun lm -> lm.Value) |> fst serS
                    let deserializer rc b = lmd rc |> (fun lm -> lm.Set  ) <| snd serS b ; rc
                    name, serializer, deserializer
            
            module LoadFiles =
            
                let createScript fn =
                    let fileRef = JS.Document.CreateElement("script")
                    fileRef.SetAttribute("type", "text/javascript"  )
                    fileRef.SetAttribute("src" , fn                 )
                    fileRef
                
                let createCss fn =
                    let fileRef = JS.Document.CreateElement("link")
                    fileRef.SetAttribute("rel" , "stylesheet"     )
                    fileRef.SetAttribute("type", "text/css"       )
                    fileRef.SetAttribute("href", fn               )
                    fileRef
                
                let createHtml fn =
                    let fileRef = JS.Document.CreateElement("link")
                    fileRef.SetAttribute("rel" , "import"         )
                    fileRef.SetAttribute("type", "text/html"      )
                    fileRef.SetAttribute("href", fn               )
                    fileRef
                
                let LoadFile(file: string) =
                    let (|EndsWith|_|) s (fn:string) = if fn.EndsWith s then Some() else None
                    match file with
                    | EndsWith ".js"   ()
                    | EndsWith ".fsx"  ()
                    | EndsWith ".fs"   () when isUndefined <| JS.Document.QuerySelector("script[src='" + file + "']") ->
                                            createScript file |> Some
                    | EndsWith ".css"  ()-> createCss    file |> Some
                    | EndsWith ".html" ()-> createHtml   file |> Some
                    | _                  -> None
                    |> Option.map         (fun ref -> 
                        Async.FromContinuations <| 
                            fun (cont, econt, _ccont) -> 
                                try 
                                    ref?onload <- cont
                                    JS.Document.Head.AppendChild ref |> ignore
                                with e -> econt e
                    )
                    |> Option.defaultWith (fun ()  -> async { return () })
                
                let LoadFilesAsync(files: string []) =
                    async {
                        if IsClient then
                            for file in files do
                                do! LoadFile file
                    }
                
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
            
            [< JavaScript >]
            module Hoverable =
                open WebSharper.UI.Html
            
                [<NoComparison ; NoEquality>]
                type Hoverable         = { hover : Var<bool>        } with
                    static member  New() = { hover = Var.Create false }
                    member inline this.Attributes = [ attr.classDynPred (View.Const "hovering") this.hover.View
                                                      on.mouseEnter (fun _ _ -> this.hover.Value <- true )
                                                      on.mouseLeave (fun _ _ -> this.hover.Value <- false)
                                                    ]   
                    member inline this.Content    (ds: Doc seq) = div this.Attributes ds
                    member inline this.Content    ( e: Elt    ) = e.OnMouseEnter(fun _ _ -> e.AddClass    "hovering") // THIS ONE ADDS ONE EXTRA SPACE
                                                                   .OnMouseLeave(fun _ _ -> e.RemoveClass "hovering") // THAT THIS ONE DOES NOT REMOVE      
                    //member inline this.Content    ( e: Elt    ) = e.WithAttrs this.Attributes
                    static member  Demo  = Hoverable.New().Content(Elt.div [ attr.style "flex-flow: column;" ] [ text "Hover over me!" ])
            
                let hoverable (e:Elt) = Hoverable.New().Content e
                
            [< JavaScript >]
            module ResizeObserver =
            
                [< Inline "try { return !!(ResizeObserver) } catch(e) { return false }" >] 
                let implementedResizeObserver() = false
                
                [< Inline "new ResizeObserver($_f)" >]
                let newResizeObserver (_f: unit->unit) = X<_> 
                
                [< Inline "$_ro.observe($_el)" >]
                let RObserve _ro (_el:Dom.Element) = X<_> 
                
                let mutable observers : obj list = []
                
                let domRect2Tuple (r:Dom.DomRect) = (r.Top, r.Left, r.Width, r.Height)
                
                let [< Inline "$_el.isConnected" >] isValidElement (_el:Dom.Element) = true
                
                let dimsChanged (el:Dom.Element) = 
                    let dims = ref <| el.GetBoundingClientRect()
                    fun () ->
                        let ndims = el.GetBoundingClientRect()
                        if domRect2Tuple !dims = domRect2Tuple ndims then false
                        else dims := ndims    ; true
                
                let addResizeObserver f el =
                    if implementedResizeObserver() then
                        let ro =  newResizeObserver f
                        observers <- ro::observers
                        RObserve ro el
                    else
                        let changed = dimsChanged el
                        async {
                            while isValidElement el do
                                do! Async.Sleep 110
                                if changed() then f()
                        } |> Async.Start
                        
            [< JavaScriptExport >]
            module WebComponent =
            
                [< Inline """return Reflect.construct($global.HTMLElement, [], this.__proto__.constructor);""" >]
                let ReflectConstruct () = X<_>
                
                [< Inline """console.log('defineWebComponent: ' + $_nm);
                            Object.setPrototypeOf($_c.prototype, $global.HTMLElement.prototype);
                            Object.setPrototypeOf($_c, $global.HTMLElement);
                            Object.setPrototypeOf($_o.prototype, $_c.prototype);
                            $global.customElements.define($_nm, $_o)""" >]
                let defineWebComponent _nm _o _c = X<_>
            
                module WcTabStrip =
                    open WebSharper.UI.Html
                    //open TabStrip
                    open Hoverable
                
                    let css = @"
                .tab-panel {
                 overflow  : hidden   ;
                 display   : flex     ;
                 flex-flow : column   ;
                 background: lightgray;
                 height    : 100%    ;
                 width     : 100%    ;
                }
                .tab-content {
                 flex      : 1 1     ;
                 overflow  : auto    ;
                 position  : relative;
                }
                .tab-children {
                 height    : 100%    ;
                 width     : 100%    ;
                 position  : absolute;
                 display   : grid    ;
                }
                .tab-strip {
                 padding   : 0pt     ;
                 flex      : 0 0     ;
                }
                .tab {
                 border     : 0.2pt solid transparent;
                 padding    : 0pt 4pt;
                 display    : inline-block;
                 font-family: sans-serif;
                 font-weight: 200;
                 font-size  : small;
                 color      : #666;
                 cursor     : pointer;
                }
                .top>.tab {
                 border-radius: 2pt 2pt 0pt 0pt;
                 border-bottom-width: 0pt;
                 vertical-align: bottom;
                }
                .bottom>.tab {
                 border-top-width: 0pt;
                 border-radius: 0pt 0pt 2pt 2pt;
                 vertical-align: top;
                }
                .horizontal>.tab:not(:first-child) {
                 border-left-width: 0pt;
                }
                .tab.hovering {
                 background: red;
                }
                .tab.selected {
                 background: white;
                 border-left-width: 0.2pt;
                 color: black;
                 font-weight: 500;
                 border-color: black;
                }
                .horizontal>.tab.selected {
                 border-left-width: 0.2pt;
                }
                ::slotted(*              ) { 
                 width : 100%;
                 height: 100%;
                }
                        "
                
                    let tabStrip (selected:Var<int>) top horizontal tabs content =
                        let strip =
                            div [ attr.``class`` <| sprintf "tab-strip %s %s"
                                                        (if top        then "top"        else "bottom"  ) 
                                                        (if horizontal then "horizontal" else "vertical")
                                ]
                                [ for i, (txt, _) in  tabs |> Seq.indexed  do
                                      yield Hoverable.New().Content (
                                          Elt.div [ attr.classDyn <| View.Map (fun sel -> "tab" + (if sel = i + 1 then " selected" else "")) selected.View
                                                    attr.draggable "true"
                                                    on.click   (fun _  _  -> selected.Value <- i + 1 ) 
                                                  ]
                                                  [ text txt ]) :> Doc
                                ] 
                        div [ attr.``class`` "tab-panel" 
                                //on.dragOver(fun _  ev -> ev.PreventDefault()                                      )
                                //on.drop    (fun _e ev -> ev.PreventDefault() ; this.reorder this.tabs.Value.Length)
                            ]
                            [   if     top then yield strip
                                yield div [ attr.``class`` "tab-content" ] [ content ]
                                if not top then yield strip
                                yield Elt.Element "style" [] [ text css ] :> Doc
                                yield Elt.Element "style" [] 
                                        [ Doc.TextView <| View.Map (sprintf """
                                              ::slotted(*              ) { display: none }
                                              ::slotted(*:nth-child(%d)) { display: grid }
                                           """) selected.View 
                                        ] 
                                    :> Doc
                            ]
                
                    type WcTabStripT () =
                        let mutable added = false
                        let selected = Var.Create 1
                        do printfn "WcTabStripT initializer"
                        [< Inline """$global.FsRoot.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New""" >] static member NewPointer = X<_>
                        static member Constructor() = 
                            let this = ReflectConstruct()
                            WcTabStripT.NewPointer?call this
                            this
                        member this.connectedCallback() = 
                            //printfn "my-el connected %A %A" added this?outerHTML
                            if not added then
                                let el : Dom.Element = this |> box |> unbox
                                let shadowRoot       = el.AttachShadow (Dom.ShadowRootInit Dom.ShadowRootMode.Open)
                                let elsh = JS.Document.CreateElement "div"
                                shadowRoot.AppendChild elsh |> ignore
                                let addTab () =
                                    //printfn "my-el modified %A %A" added this?outerHTML
                                    let top  = el.HasAttribute "bottom" |> not
                                    let tabs = [ for i in 1..el.ChildNodes.Length do 
                                                    let node = el.ChildNodes.[i - 1]
                                                    if node.NodeType = Dom.NodeType.Element then
                                                        let elem = node :?> Dom.Element
                                                        let tabName = if elem.HasAttribute "tabname" then elem.GetAttribute "tabname" else sprintf "Tab %d" i
                                                        yield (tabName, elem)
                                                ]
                                    while elsh.ChildNodes.Length > 0 do
                                        elsh.RemoveChild elsh.LastChild |> ignore
                                    Elt.Element "slot" [] []
                                    |> tabStrip selected top true tabs
                                    |> Doc.Run elsh
                                addTab()
                                el.AddEventListener("DOMSubtreeModified", delayed 50 addTab)
                                added <- true
                    let init =
                        lazy
                            let x = WcTabStripT().connectedCallback
                            if IsClient then defineWebComponent "wcomp-tabstrip" WcTabStripT.Constructor WcTabStripT.NewPointer
                    
                module WcSplitter =    
                    open ResizeObserver
                    
                    type Layout = View<string> -> (Dom.Element -> unit) -> (Dom.Element -> unit) -> (Dom.MouseEvent -> unit) -> View<string> -> Doc
                    
                    let mutable layoutHorizontal : Layout = fun partSizes afterRender afterRenderSp mouseDown gap -> Doc.Empty
                    let mutable layoutVertical   : Layout = fun partSizes afterRender afterRenderSp mouseDown gap -> Doc.Empty
                    
                    type WcSplitterT () =
                        let mutable added = false
                        do printfn "WcSplitterT initializer"
                        [< Inline """$global.FsRoot.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New""" >] static member NewPointer = X<_>
                        static member Constructor() = 
                            let this = ReflectConstruct()
                            WcSplitterT.NewPointer?call this
                            this
                        member this.connectedCallback() = 
                            //printfn "my-el connected %A %A" added this?outerHTML
                            if not added then
                                let el : Dom.Element = this |> box |> unbox
                                let shadowRoot  = el.AttachShadow (Dom.ShadowRootInit Dom.ShadowRootMode.Open)
                                let elsh        = JS.Document.CreateElement "div"
                                let minV        = if el.HasAttribute "min"      then el.GetAttribute "min"   |> JS.ParseFloat else  4.0
                                let maxV        = if el.HasAttribute "max"      then el.GetAttribute "max"   |> JS.ParseFloat else 96.0
                                let value       =(if el.HasAttribute "value"    then el.GetAttribute "value" |> JS.ParseFloat else 50.0)|> Var.Create
                                let first       =    el.HasAttribute "second"   |> not
                                let vertical    =    el.HasAttribute "vertical"
                                let size        = ref        (0.0, 0.0)
                                let padding     = ref         0.0
                                let gap         = Var.Create  0.0
                                let sizeCalc (sh:Dom.Element) : float * float =
                                    let p1, p2, gp = if vertical then "padding-left", "padding-right" , "grid-column-gap"
                                                                 else "padding-top" , "padding-bottom", "grid-row-gap" 
                                    let pt   = JQuery.JQuery(sh.ParentElement.ParentElement).Css p1 |> (+) "0" |> JS.ParseFloat
                                    let pb   = JQuery.JQuery(sh.ParentElement.ParentElement).Css p2 |> (+) "0" |> JS.ParseFloat
                                    gap.Set   (JQuery.JQuery(sh.ParentElement.ParentElement).Css gp |> (+) "0" |> JS.ParseFloat)
                                    padding := pt + pb
                                    el.GetBoundingClientRect() 
                                    |> fun r -> 
                                         match vertical, first with
                                         | true , true  ->  r.Width , r.Height 
                                         | true , false -> -r.Width , r.Height
                                         | false, true  ->  r.Height, r.Width
                                         | false, false -> -r.Height, r.Width
                                let dragging : bool               ref = ref false   
                                let startP   : float              ref = ref 0.0
                                let start    : float              ref = ref 0.0
                                let domElem  : Dom.Element option ref = ref None                 
                                let mouseCoord (ev: Dom.MouseEvent) = if vertical then float ev.ClientX else float ev.ClientY
                                let drag (ev: Dom.Event) =
                                    ev :?> Dom.MouseEvent
                                    |> mouseCoord
                                    |> fun m   -> (m - !start) * 100.0 / (fst !size) + !startP
                                    |> fun v   -> value.Value <- min maxV (max minV v)
                                   
                                let rec finishDragging (_: Dom.Event) =
                                    if !dragging then
                                        dragging := false
                                        JS.Window.RemoveEventListener("mousemove", drag          , false) 
                                        JS.Window.RemoveEventListener("mouseup"  , finishDragging, false)
                                let startDragging (ev: Dom.MouseEvent) =
                                    if not !dragging then
                                        dragging := true
                                        startP   := value.Value
                                        start    := mouseCoord ev
                                        size     := !domElem |> Option.map sizeCalc |> Option.defaultValue (100.0, 500.0)
                                        JS.Window.AddEventListener("mousemove", drag          , false) 
                                        JS.Window.AddEventListener("mouseup"  , finishDragging, false) 
                                        ev.PreventDefault()
                                    //div [
                                    //    SomeAttr  <| on.mouseDown startDragging
                                    //    SomeAttr  <| on.afterRender (fun el -> domElem := Some el; size := sizeCalc vertical el ; value.Set value.Value)
                                    //    style     <| styleSplitter !gap
                                    //    style        "z-index: 10; background-color: #eef"
                                    //]
                                let partSizes sz gap pad spl = (sz - gap - pad) *          spl  / 100.0          
                                                             , (sz - gap - pad) * (100.0 - spl) / 100.0
                                let styleSections (p1:float, p2:float) = sprintf " %.2fpx %.2fpx ; %s : %.2fpx; " p1 p2 (if vertical then "height" else "width") (snd !size)
                                let styleSizes           spl = partSizes (fst !size) gap.Value !padding spl |> styleSections
                                //div [ 
                                //    style <| sprintf "display: grid; grid-template-areas: 'one' 'two' ; %s" styleRest
                                //    style <| Val.map styleSizes value
                                //    slot [                   div [ style "background-color: red ; grid-area: one" ] ]
                                //    slot [ name "part2"    ; div [ style "background-color: blue; grid-area: two" ] ]
                                //    slot [ name "splitter" ; splitter                                               ]
                                //]
                                let recalc() = !domElem |> Option.iter (fun sh -> size := sizeCalc sh); value.Set value.Value
                                //addResizeObserver recalc el
                                (if vertical then layoutVertical else layoutHorizontal)
                                    <| View.Map styleSizes value.View
                                    <| fun (sh:Dom.Element) -> addResizeObserver recalc el ; recalc()
                                    <| fun  sp              -> domElem :=          Some sp ; recalc()
                                    <| fun  me              -> startDragging me
                                    <| View.Map (sprintf "%Apx") gap.View
                                |> Doc.Run elsh
                                shadowRoot.AppendChild elsh.FirstChild |> ignore
                                added <- true
                    let init layoutH layoutV =
                        let x = WcSplitterT().connectedCallback
                        layoutHorizontal <- layoutH
                        layoutVertical   <- layoutV
                        if IsClient then defineWebComponent "wcomp-splitter" WcSplitterT.Constructor WcSplitterT.NewPointer
                    
            module Monaco =
                open WebSharper.UI.Html
            
                type Position = {
                    column     : int
                    lineNumber : int
                }
                type Range = {
                    startColumn     : int
                    endColumn       : int
                    startLineNumber : int
                    endLineNumber   : int
                }
                type Uri = {
                    authority : string
                    fragment  : string
                    fsPath    : unit->string
                    path      : string
                    query     : string
                    scheme    : string
                }  with
                    [< Inline "$global.monaco.Uri.parse($_s)" >] static member Parse(_s)      : Uri   = X<_>
                    [< Inline "$global.monaco.Uri.file($_f)"  >] static member File(_f)       : Uri   = X<_>
                type Location = {
                    range : Range
                    uri   : Uri
                }
                type FindMatch = {
                    matches : string []
                    range   : Range
                }
                type WordAtPosition = {
                    endColumn   : int
                    startColumn : int
                    word        : string
                }
                type Model = {
                    uri         : Uri
                }
                  with
                    [< Inline "$mo.findMatches($_s, $_o, $_r, $_c, $_w, $_p, $_l)" >] member mo.FindMatches(_s: string, _o: bool, _r: bool, _c: bool, _w: string, _p: bool, _l: int): FindMatch[] = X<_>
                    [< Inline "$mo.getWordAtPosition($_p)                        " >] member mo.GetWordAtPosition(_p: Position) : WordAtPosition = X<_>
                    [< Inline "$mo.getLineContent($_l)                           " >] member mo.GetLineContent(   _l: int     ) : string         = X<_>
                    [< Inline "$mo.getValue()                                    " >] member mo.GetValue()                      : string         = X<_>
                    [< Inline "$mo.setValue($_v)                                 " >] member mo.SetValue(_v:string)             : unit           = X<_>
                    [< Inline "$mo.dispose()                                     " >] member mo.Dispose()                       : unit           = X<_>
                    
                type MarkDownString = {
                    value      : string
                    isTrusted  : bool
                }
                type MarkerSeverity =
                | Error   = 8
                | Hint    = 1
                | Info    = 2
                | Warning = 4
                type MarkerData = {
                    startColumn        : int
                    endColumn          : int
                    startLineNumber    : int
                    endLineNumber      : int
                    severity           : MarkerSeverity
                    message            : string
                    //code : string
                    //relatedInformation : string
                    //source             : string
                    //tags               : MarkerTag[]
                }
                type CompletionItemKind =
                | Class       = 6
                | Color       = 15
                | Constructor = 3
                | Enum        = 12
                | Field       = 4
                | File        = 16
                | Folder      = 18
                | Function    = 2
                | Interface   = 7
                | Keyword     = 13
                | Method      = 1
                | Module      = 8
                | Property    = 9
                | Reference   = 17
                | Snippet     = 14
                | Text        = 0
                | Unit        = 10
                | Value       = 11
                | Variable    = 5
                type CompletionItem = {
                    kind                : CompletionItemKind
                    label               : string
                    //additionalTextEdits : string
                    //command             : string
                    //commitCharacters    : string
                    detail              : string
                    //documentation       : string
                    //filterText          : string
                    //insertText          : string
                    //range               : string
                    //sortText            : string
                    //textEdit            : string
                }
                type Hover = {
                    contents   : MarkDownString []
                    range      : Range
                }
                
                open WebSharper.Core.Resources
            
                type MonacoResources() =
                    inherit BaseResource(@"/EPFileX/monaco/package/min/vs/loader.js")
            
                [< Require(typeof<MonacoResources>) >]
                type Editor() =
                    do ()
                  with
                    [< Inline "$global.require.config({ paths: { 'vs': '/EPFileX/monaco/package/min/vs' }});" >] static member RequireConfig ()     : unit    = X<_>
                    [< Inline "$global.require(['vs/editor/editor.main'], $_s, $_f)"                          >] static member Require(_s, _f)      : unit    = X<_>
                    [< Inline "$global.monaco.editor.create($_elt, $_op, $_ov)"                               >] static member Create _elt _op _ov  : Editor  = X<_>
                    [< Inline "$global.monaco.editor.createModel($_t, $_l, $_u)">] static member CreateModel(_t:string, _l:string, _u:Uri)          : Model   = X<_>
                    [< Inline "$global.monaco.editor.getModel($_u)"             >] static member GetModel(_u:Uri)                                   : Model   = X<_>
                    [< Inline "$global.monaco.editor.getModels()"               >] static member GetModels()                                        : Model[] = X<_>
                    [< Inline "$global.monaco.editor.setModelLanguage($_m, $_l)">] static member SetModelLanguage(_m:Model, _l:string)              : unit    = X<_>
                    [< Inline "$global.monaco.editor.setTheme($_t)"                                           >] static member SetTheme(_t:string)  : unit    = X<_>
                    [< Inline "$global.monaco.languages.registerHoverProvider($_l, $_p)"          >] static member RegisterHoverProvider         (_l: string, _p: obj): System.IDisposable   = X<_>
                    [< Inline "$global.monaco.languages.registerDefinitionProvider($_l, $_p)"     >] static member RegisterDefinitionProvider    (_l: string, _p: obj): System.IDisposable   = X<_>
                    [< Inline "$global.monaco.languages.registerCompletionItemProvider($_l, $_p)" >] static member RegisterCompletionItemProvider(_l: string, _p: obj): System.IDisposable   = X<_>
                    [< Inline "$global.monaco.editor.setModelMarkers($_m,$_o,$_k)"       >] static member SetModelMarkers(_m:Model, _o:string, _k:MarkerData[]):unit = X<_>
                    
                    [< Inline "$monc.getValue()                  " >] member monc.GetValue()                                  : string          = X<_>
                    [< Inline "$monc.setValue($_v)               " >] member monc.SetValue(_v:string)                         : unit            = X<_>
                    [< Inline "$monc.onDidChangeModelContent($_f)" >] member monc.OnDidChangeModelContent(_f:obj->unit)       : unit            = X<_>
                    [< Inline "$monc.getModel()                  " >] member monc.GetModel()                                  : Model           = X<_>  
                    [< Inline "$monc.setModel($_m)               " >] member monc.SetModel(_m:Model)                          : unit            = X<_>  
                    [< Inline "$monc.layout()                    " >] member monc.Layout()                                    : unit            = X<_>
                    [< Inline "$monc.updateOptions($_o)"           >] member monc.UpdateOptions(_o:obj)                       : unit            = X<_>
                    [< Inline "$monc.setPosition($_p)            " >] member monc.SetPosition(_p:Position)                    : unit            = X<_>
                    [< Inline "$monc.focus()                     " >] member monc.Focus()                                     : unit            = X<_>
                    
            //        [< Inline "$monc.refresh()"                 >] member monc.Refresh()                                   : unit            = X<_>
            //        [< Inline "$monc.setOption($_o, $_v)"       >] member monc.SetOption(_o:string, _v:obj)                : unit            = X<_>
            //        [< Inline "$monc.getOption($_o)"            >] member monc.GetOption(_o:string)                        : obj             = X<_>
            //        //[< Inline "$monc.getCursor()"               >] member monc.GetCursor()                                 : Pos             = X<_>
            //        [< Inline "$monc.performLint()"             >] member monc.PerformLint()                               : unit            = X<_>
            //        [< Inline "$monc.focus()"                   >] member monc.Focus()                                     : unit            = X<_>
            //        [< Inline "$monc.getLine($_l)"              >] member monc.GetLine(_l:int)                             : string          = X<_>
            //        [< Inline "$monc.getDoc().clearHistory()"   >] member monc.ClearHistory()                              : unit            = X<_>
            //        [< Inline "$monc.on($_event, $_f)"          >] member monc.On(_event: string, _f:(Editor * obj)->unit) : unit            = X<_>
            //        [< Inline "$monc.on($_event, $_f)"          >] member monc.On(_event: string, _f: Editor       ->unit) : unit            = X<_>
            //        [< Inline "$monc.addKeyMap($_keyMap)"       >] member monc.AddKeyMap(_keyMap: obj)                     : unit            = X<_>
            //        [< Inline "$monc.getWrapperElement()"       >] member monc.GetWrapperElement()                         : Dom.Element     = X<_>
            //        [< Inline "$monc.replaceSelection($_v, $_s)">] member monc.ReplaceSelection(_v:string, _s:string)                        = ()
            //        [< Inline "while($monc.getAllMarks().length > 0) { $monc.getAllMarks()[0].clear() }" >] member monc.RemoveMarks() : unit = X<_>
            //        [< Inline "$monc.getDoc().markText({line:$_fl, ch:$_fc}, {line:$_tl, ch:$_tc}, {className: $_className, title: $_title})" >]
            //        member monc.MarkText (_fl:int,_fc:int) (_tl:int,_tc:int) (_className: string) (_title: string): unit       = X<_>
                
                [<NoComparison ; NoEquality>]
                type MonacoConfig = {
                    var             : Var<string>
                    onChange        : (unit   -> unit)
                    onRender        : (Editor -> unit) option
                    mutable editorO :  Editor option
                    disabled        : View<bool>
                    options         : obj
                    overrides       : obj
                }
                
                [< Inline "var m = $global.require('vs/base/common/lifecycle'); return new m.ImmortalReference($_v);" >]
                let newImmortalReference _v = X<_>
                
                let newVar var    = 
                    { var         = var 
                      onChange    = ignore
                      onRender    = None
                      editorO     = None
                      disabled    = V false
                      options     = null
                      overrides   = null
                    }
                //let includes = [| @"/EPFileX/monaco/package/min/vs/loader.js" |]
                let loader = async {
                    if IsClient then
                        //do! LoadFiles.LoadFilesAsync includes
                        Editor.RequireConfig()
                        do! Async.FromContinuations(fun (success, failed, cancelled) -> Editor.Require(success, failed))
                }
                let render monc             =
                    div [ on.afterRender (fun elchild ->
                             async {
                                 do! loader
                                 let editor        = Editor.Create elchild.ParentElement monc.options monc.overrides
                                 ResizeObserver.addResizeObserver editor.Layout elchild.ParentElement
                                 elchild.ParentNode.RemoveChild elchild |> ignore
                                 monc.editorO     <- Some editor
                                 monc.onRender |> Option.iter (fun onrender -> onrender editor)
                                 monc.var |> bindVarEditor editor.OnDidChangeModelContent editor.GetValue editor.SetValue monc.onChange
                                 //monc.disabled |> View.Sink (fun dis -> editor.SetOption("readOnly", if dis then "nocursor" :> obj else false :> obj) )
                             } |> Async.Start
                          )    
                        ] []
                let inline setVar   v   monc = { monc with var       = v      }
                let inline onChange f   monc = { monc with onChange  = f      }
                let inline onRender f   monc = { monc with onRender  = Some f }
                let inline disabled dis monc = { monc with disabled  = dis    }
                let inline var          monc = monc.var
                let newText(v:string)             = newVar (Var.Create v)
                let newVarO(v:Var<string option>) = Var.Lens v (Option.defaultValue "") (fun sO s -> sO |> Option.map (fun _ -> s) )
                                                    |> newVar
                                                    |> disabled(V (Option.isNone v.V))
            
        /// Essentials that part runs in Javascript and part runs in the server
        [< AutoOpen >]
        module Library2 =
            module FsiAgent =
                open FusionAsyncM
                open FsiEvaluator
                open FsiCodePresence
                open Operators
            
                [< JavaScript >]
                type Config = Config of workDir:string * parms:string
            
                let queueOutput send =
                    let output        = new System.Text.StringBuilder()
                    let append    txt = output.Append((if output.Length = 0 then "" else "\n") + txt) |> ignore
                    let consume   ()  = let v = output.ToString()
                                        output.Clear() |> ignore
                                        v
                    let queue         = Mailbox.iter print (fun msg -> 
                                            match msg with
                                            | Some txt -> append txt
                                            | None     -> let txt2send =  consume()
                                                          if  txt2send <> "" then send txt2send
                                        )
                    fun          txt -> txt |> Some |> queue.Post
                                        async { do! Async.Sleep 100
                                                queue.Post None } |> Async.Start
            
                let mutable outHndl      = ignore
                let mutable errHndl      = ignore
            
                let setQueueHandlers send =
                    let queue = queueOutput send 
                    outHndl <-                  queue
                    errHndl <- ((+) "Err: ") >> queue
            
                let ctor, aborter, disposer, getIdO =
                    let mutable fsiO = None
                    let ctor (Config (workDir, config)) =
                        let fsi = new FsiExe(config, workDir, outHndl, errHndl)
                        fsiO <- Some fsi
                        fsi
                    ctor
                  , (fun () -> fsiO |> Option.iter (fun fsi ->  fsi                       .Abort  ()  ) )
                  , (fun () -> fsiO |> Option.iter (fun fsi -> (fsi :> System.IDisposable).Dispose()  ) )
                  , (fun () -> fsiO |> Option.map  (fun fsi ->  fsi                       .Process.Id ) )
            
                let fsiExeL = lazy new ResourceAgent<_, _>( 70
                                                         , ctor
                                                         , Config (".", "--nologo --quiet")
                                                         , (fun fsi    -> (fsi :> System.IDisposable).Dispose())
                                                         , (fun fsi    ->  fsi.IsAlive                         )
                                                         )
            
                [< JavaScript >]
                let extractConfig workDir (FsCode fsCode) = 
                    Config(
                        FsCode.getSourceDir workDir <| String.splitByChar '\n' fsCode
                      , FsCode.extractDefines (FsCode fsCode)
                        |> ((+) " --nologo --quiet ")
                    )
            
                [< Rpc >]
                let evalCode workDir code = 
                    evaluateRm code
                    |> AgentReaderM.ofResourceRm
                    |> AgentReaderM.run fsiExeL.Value (extractConfig workDir code)
            
                [< Rpc >]
                let evalCodeSameConfig code = 
                    evaluateRm code
                    |> AgentReaderM.ofResourceRm |> id
                    |> AgentReaderM.runSameConfig fsiExeL.Value
                
                [< Rpc >]
                let evalCodeWithPresence workDir presenceKey presenceValue presenceCode code = 
                    let presenceConfig = extractConfig workDir presenceCode
                    fusion {    
                        let! currentValueO  = getPresenceRm presenceKey
                        if   currentValueO <> Some presenceValue then
                            do!  evaluateRm    presenceCode |>> ignore
                            do!  addPresenceRm presenceKey presenceValue
                        return! evaluateRm code
                    }
                    |> AgentReaderM.ofResourceRm
                    |> AgentReaderM.run fsiExeL.Value presenceConfig
             
                [<Rpc>]    
                let abortFsiExe  () = aborter()
                
                [<Rpc>]    
                /// like abortFsiExe but prevents respawning until next command
                let disposeFsiExe() = disposer()
            
            
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
                        
                //#I @"..\packages\Owin\lib\net40"
                //#r @"..\packages\Owin\lib\net40\Owin.dll"
                //#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
                //#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
                //#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
                
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
                    "http://localhost:9005/#"
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
                        printfn "getServer"
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
            
            [< JavaScript >]
            type FSResponse =
            | RespString         of string
            | RespSnippets       of Snippet[]
            
            module FSharpStationClient =
                open WebSockets
            
                let mutable fsharpStationAddress = Address "FSharpStation1541586030091"
            
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
            
                let getCode path = 
                    path
                    |> String.splitByChar '/'
                    |> RefSnippetPath
                    |> MsgGetCode
                    |> sendMessage
                    |> AsyncResult.bind respString
            
                let getUrl () = sendMessage MsgGetUrl |> AsyncResult.bind respString
            
                let execJS      js          = sendMessage (MsgAction [| "ExecJS"      ; js              |]) |> AsyncResult.bind respString
                let setProperty path prop v = sendMessage (MsgAction [| "SetProperty" ; path ; prop ; v |]) |> AsyncResult.bind respString
                let sendOutput  txt         = sendMessage (MsgAction [| "AddOutput"   ; txt             |])
                let actionCall0 act         = sendMessage (MsgAction [|  act                            |])
                let actionCall1 act p1      = sendMessage (MsgAction [|  act          ; p1              |])
                let actionCall2 act p1 p2   = sendMessage (MsgAction [|  act          ; p1   ; p2       |])
                                        
                let getBrokerProcessId() = fsharpStationClient.MBProcessId
            module FsAutoComplete =
                [<JavaScript ; AutoOpen >]
                module CommTypes =
                    type ResponseError =
                        {
                          Code: int
                          Message: string
                          //AdditionalData: 'T
                        }
                    type Location =
                      {
                        File: string
                        Line: int
                        Column: int
                      }
                    type CompletionResponse =
                      {
                        Name: string
                        ReplacementText: string
                        Glyph: string
                        GlyphChar: string
                      }
                    //type ProjectResponse =
                    //  {
                    //    Project: ProjectFilePath
                    //    Files: List<SourceFilePath>
                    //    Output: string
                    //    References: List<ProjectFilePath>
                    //    Logs: Map<string, string>
                    //  }
                    type OverloadDescription =
                      {
                        Signature: string
                        Comment  : string
                        Footer   : string
                      }
                    type OverloadParameter =
                      {
                        Name : string
                        CanonicalTypeTextForSorting : string
                        Display : string
                        Description : string
                      }
                    type Overload =
                      {
                        Tip : OverloadDescription list list
                        TypeText : string
                        Parameters : OverloadParameter list
                        IsStaticArguments : bool
                      }
                    type Parameter = {
                        Name : string
                        Type : string
                      }
                    type SignatureData = {
                        OutputType : string
                        Parameters : Parameter list list
                      }
                    type MethodResponse =
                      {
                        Name : string
                        CurrentParameter : int
                        Overloads : Overload list
                      }
                    type SymbolUseRange =
                      {
                        FileName: string
                        StartLine: int
                        StartColumn: int
                        EndLine: int
                        EndColumn: int
                        IsFromDefinition: bool
                        IsFromAttribute : bool
                        IsFromComputationExpression : bool
                        IsFromDispatchSlotImplementation : bool
                        IsFromPattern : bool
                        IsFromType : bool
                      }
                    type SymbolUseResponse =
                      {
                        Name: string
                        Uses: SymbolUseRange list
                      }
                    type HelpTextResponse =
                      {
                        Name: string
                        Overloads: OverloadDescription list list
                      }
                    type CompilerLocationResponse =
                      {
                        Fsc: string
                        Fsi: string
                        MSBuild: string
                      }
                    type FSharpErrorInfo =
                      {
                        FileName    : string
                        StartLine   : int
                        EndLine     : int
                        StartColumn : int
                        EndColumn   : int
                        Severity    : string
                        Message     : string
                        Subcategory : string
                      }
                    type ErrorResponse =
                      {
                        File: string
                        Errors: FSharpErrorInfo []
                      }
                    type Colorization =
                      {
                    //    Range: Range
                        Kind: string
                      }
                    type Declaration =
                      {
                        UniqueName: string
                        Name: string
                        Glyph: string
                        GlyphChar: string
                        IsTopLevel: bool
                    //  Range     : Utils.Range
                    //    BodyRange : Utils.Range
                        File : string
                        EnclosingEntity: string
                        IsAbstract: bool
                      }
                    type DeclarationResponse = {
                        Declaration : Declaration;
                        Nested : Declaration []
                    }
                    type OpenNamespace = {
                      Namespace : string
                      Name : string
                      Type : string
                      Line : int
                      Column : int
                      MultipleNames : bool
                    }
                    type QualifySymbol = {
                      Name : string
                      Qualifier : string
                    }
                    type ResolveNamespaceResponse = {
                      Opens : OpenNamespace []
                      Qualifies: QualifySymbol []
                      Word : string
                    }
                    type UnionCaseResponse = {
                      Text : string
                    //  Position : Pos
                    }
                    type Kind = 
                    | KInfo             of string
                    | KError            of ResponseError
                    | KHelpText         of HelpTextResponse
                    | KCompletion       of CompletionResponse  []
                    | KSymbolUse        of SymbolUseResponse
                    | KHelp             of string
                    | KMethod           of MethodResponse
                    | KErrors           of ErrorResponse
                    | KColorizations    of Colorization list
                    | KFindDecl         of Location
                    | KDeclarations     of DeclarationResponse []
                    | KToolTip          of OverloadDescription [][]
                    | KTypeSig          of string
                    | KSignatureData    of SignatureData
                    | KCompilerLocation of CompilerLocationResponse
                    | KNamespaces       of ResolveNamespaceResponse
                    | KUnionCase        of UnionCaseResponse
                    | KMultiple         of Kind                []
                    
                //#r @"..\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
                //#r @"..\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
                //#r @"..\packages\NewtonSoft.JSon\lib\net45\NewtonSoft.JSon.dll"
                
                open System.Net
                open System.Text
                open System.IO
                open FSharp.Data
                open FSharp.Data.JsonExtensions
                open Newtonsoft.Json
                
                open Utils
                
                [<JavaScript ; AutoOpen >]
                module MsgTypes =
                
                    type ParseRequest         = { FileName  : string ; IsAsync    : bool   ; Lines : string[]           ; Version : int                                            }
                    type DeclarationsRequest  = { FileName  : string ;                       Lines : string[]           ; Version : int                                            }
                    type CompletionRequest    = { FileName  : string ; SourceLine : string ; Line  : int                ; Column  : int ; Filter : string; IncludeKeywords : bool  }
                    type PositionRequest      = { FileName  : string ;                       Line  : int                ; Column  : int ; Filter : string                          }
                    type ProjectRequest       = { FileName  : string                                                                                                               }
                    type LintRequest          = { FileName  : string                                                                                                               }
                    type HelptextRequest      = { Symbol    : string                                                                                                               }
                    type WorkspacePeekRequest = { Directory : string ; Deep       : int    ; ExcludedDirs : string []                                                              }
                
                    type FARequest =
                        | FarParse         of ParseRequest         
                        | FarDeclarations  of DeclarationsRequest  
                        | FarCompletion    of CompletionRequest    
                        | FarPosition      of PositionRequest      
                        | FarProject       of ProjectRequest       
                        | FarLint          of LintRequest          
                        | FarHelptext      of HelptextRequest      
                        | FarWorkspacePeek of WorkspacePeekRequest    
                
                let toJson =
                    function
                    | FarParse         data -> JsonConvert.SerializeObject data 
                    | FarDeclarations  data -> JsonConvert.SerializeObject data 
                    | FarCompletion    data -> JsonConvert.SerializeObject data 
                    | FarPosition      data -> JsonConvert.SerializeObject data 
                    | FarProject       data -> JsonConvert.SerializeObject data 
                    | FarLint          data -> JsonConvert.SerializeObject data 
                    | FarHelptext      data -> JsonConvert.SerializeObject data 
                    | FarWorkspacePeek data -> JsonConvert.SerializeObject data    
                
                let fromJson<'a> json = JsonConvert.DeserializeObject(json, typeof<'a>) :?> 'a
                let jsonData2Obj item = item?Data.ToString() |> fromJson
                
                let HttpRequestCall (url:string) (data:string) =
                    async {
                        //printfn "RpcCall %s" (extract 100 data)
                        let req = WebRequest.Create(url) :?> HttpWebRequest 
                        req.Timeout         <- 300_000
                        req.ProtocolVersion <- HttpVersion.Version10
                        req.Method          <- "POST"
                        req.ContentType     <- "application/json"
                        let postBytes = Encoding.ASCII.GetBytes(data)
                        //printfn "<---\n%s\n" data
                        req.ContentLength <- int64 postBytes.Length
                        let reqStream = req.GetRequestStream() 
                        reqStream.Write(postBytes, 0, postBytes.Length);
                        reqStream.Close()
                        use resp   = req.GetResponse() 
                        use stream = resp.GetResponseStream() 
                        use reader = new StreamReader(stream)
                        let msg    = reader.ReadToEnd()
                        //print msg
                        //printfn "\n----> \n%s\n" (extract 100 msg)
                        let jsonV  = JsonValue.Parse msg
                        return       jsonV
                    }
                
                let KindError msg = KError { Code = 0 ; Message = msg }
                
                let json2Kind (v:JsonValue) = 
                    let item =JsonValue.Parse <| v.AsString()
                    match item?Kind.AsString() with
                    | "info"             -> jsonData2Obj item |> KInfo
                    | "error"            -> jsonData2Obj item |> KError
                    | "errors"           -> jsonData2Obj item |> KErrors
                    | "tooltip"          -> jsonData2Obj item |> KToolTip
                    | "typesig"          -> jsonData2Obj item |> KTypeSig
                    | "completion"       -> jsonData2Obj item |> KCompletion
                    | "signature"        -> jsonData2Obj item |> KTypeSig
                    | "signatureData"    -> jsonData2Obj item |> KSignatureData
                    | "finddecl"         -> jsonData2Obj item |> KFindDecl
                    | "compilerlocation" -> jsonData2Obj item |> KCompilerLocation
                    | "helptext"         -> jsonData2Obj item |> KHelpText
                    | "declarations"     -> jsonData2Obj item |> KDeclarations
                    | "symboluse"        -> jsonData2Obj item |> KSymbolUse
                    | _                  -> KindError <| v.ToString()
                
                let UrlAddress = "http://localhost:9001/"
                
                [< Rpc >]
                let FSAutocompleteCall0 cmd (req: FARequest) : Async<Result<Kind [],ResultMessage<Kind[]>>> = asyncResult {
                        let  data          = req |> toJson
                        let! jsonV         = HttpRequestCall (UrlAddress + cmd) data
                        return               jsonV.AsArray() |> Array.map json2Kind
                    } 
                
                [<JavaScript ; AutoOpen>]
                module Calls =
                    let FSAutocompleteCall cmd f req = asyncResult {
                            let! several       = FSAutocompleteCall0 cmd req
                            let  goods, others = several |> Array.partition (f >> Option.isSome)
                            let! good          = goods   |> Seq.choose f |> Seq.tryHead |> Result.ofOption (fun () -> others |> Message)
                            return               good, others
                        } 
                    
                    let parseCode        file code asy ver   = FSAutocompleteCall "parse"               (function KErrors        v -> Some v |_-> None)
                                                                     <| FarParse       { FileName        = file
                                                                                         IsAsync         = asy   
                                                                                         Lines           = code           
                                                                                         Version         = ver
                                                                                       }
                    let toolTip          file lin col filter = FSAutocompleteCall "tooltip"             (function KToolTip       v -> Some v |_-> None)
                                                                     <| FarPosition    { FileName        = file
                                                                                         Line            = lin         
                                                                                         Column          = col
                                                                                         Filter          = filter
                                                                                       }
                    let signature        file lin col filter = FSAutocompleteCall "signature"           (function KTypeSig v -> Some v |_-> None)
                                                                     <| FarPosition    { FileName        = file
                                                                                         Line            = lin         
                                                                                         Column          = col
                                                                                         Filter          = filter
                                                                                       }
                    let signatureData    file lin col filter = FSAutocompleteCall "signatureData"       (function KSignatureData v -> Some v |_-> None)
                                                                     <| FarPosition    { FileName        = file
                                                                                         Line            = lin         
                                                                                         Column          = col
                                                                                         Filter          = filter
                                                                                       }
                    let completion  tx kw file ln col filter = FSAutocompleteCall "completion"          (function KCompletion    v -> Some v |_-> None)
                                                                      <| FarCompletion { FileName        = file
                                                                                         Line            = ln         
                                                                                         Column          = col
                                                                                         Filter          = filter
                                                                                         SourceLine      = tx
                                                                                         IncludeKeywords = kw
                                                                                        }
                    
                    let findTypeDecl     file lin col filter = FSAutocompleteCall "findtypedeclaration" (function KFindDecl    v -> Some v |_-> None)
                                                                      <| FarPosition    { FileName       = file
                                                                                          Line           = lin         
                                                                                          Column         = col
                                                                                          Filter         = filter
                                                                                        }
                    let findDeclaration  file lin col filter = FSAutocompleteCall "finddeclaration"     (function KFindDecl    v -> Some v |_-> None)
                                                                      <| FarPosition    { FileName       = file
                                                                                          Line           = lin         
                                                                                          Column         = col
                                                                                          Filter         = filter
                                                                                        }
                    let declarations    file code ver        = FSAutocompleteCall "declarations"       (function KDeclarations v -> Some v |_-> None)
                                                                      <| FarDeclarations{ FileName       = file
                                                                                          Lines          = code         
                                                                                          Version        = ver
                                                                                        }
                    let helpText               symbol        = FSAutocompleteCall "helptext"            (function KHelpText     v -> Some v |_-> None)
                                                                      <| FarHelptext    { Symbol         = symbol
                                                                                        }
                    let symbolUse       file lin col filter  = FSAutocompleteCall "symboluse"           (function KSymbolUse     v -> Some v |_-> None)
                                                                     <| FarPosition    { FileName        = file
                                                                                         Line            = lin         
                                                                                         Column          = col
                                                                                         Filter          = filter
                                                                                       }
                    let symbolUseProject file lin col filter = FSAutocompleteCall "symboluseproject"    (function KSymbolUse     v -> Some v |_-> None)
                                                                     <| FarPosition    { FileName        = file
                                                                                         Line            = lin         
                                                                                         Column          = col
                                                                                         Filter          = filter
                                                                                       }
                    
                    
    
    //#cd @"..\projects\FSharpStation\src"
    //#define WEBSHARPER
    [< JavaScript >]
    module FSharpStation =
        //#r "..\..\LayoutEngine\bin\LayoutEngine.dll"
        //#nowarn "1178" "1182" "3180" "52"
        module FStation =
        
            let [< Rpc >] getRootDir() = async {
                //let res = let dir = System.Environment.CurrentDirectory
                          //if dir.EndsWith @"\bin" |> not then dir else
                          //dir.[0..dir.Length - 5] |>! fun set -> System.Environment.CurrentDirectory <- set
                return System.Environment.CurrentDirectory //res
            }
        
            [< Inline "(Date.now())" >]
            let now() = 0
            let id = "FSharpStation" + (now() |> string)
        
            let mutable rootDir  = "."
            let mutable srcDir   = "."
            async {
                let! dir = getRootDir()
                rootDir   <- dir +/+ ".."
                srcDir    <- dir +/+ "..\\src"
                printfn "fileName = %s\\%s.fsx" srcDir id
            } |> Async.Start
            
            let annotationsV = Var.Create ""
            let outputMsgs   = Var.Create ""
        
            let appendText (var:Var<string>) msg = 
                match var.Value, msg with
                | "", m 
                | m , "" -> m
                | v , m  -> v + "\n" + m
                |> var.Set
                
            let inline appendMsgs   msg = appendText outputMsgs msg
        
        
        module Snippets =
            open TreeReader
            open FusionM
            open Operators
            
            let private snippets               = ListModel<SnippetId, Snippet> (fun s -> s.snpId)
            let private hierarchy              = Var.Create [||]
            let private generation             = Var.Create 5
            let private currentSnippetIdOV     = Var.Create (None:SnippetId option)
            let private codeSnippetIdOV        = Var.Create (None:SnippetId option)
            let private collapsedV             = Var.Create Set.empty
            
            let predsCache , clearPreds        = Memoize.getStore()
            let reducCache , clearReduc        = Memoize.getStore()
            let parentCache, clearParent       = Memoize.getStore()
            let clearPredsCache ()             = clearPreds ()
                                                 clearReduc ()
                                                 clearParent()
            let prepCode                   snp = snp.snpContent
                                                    .Replace("##" + "FSHARPSTATION_ID" + "##"      , FStation.id            )
                                                    .Replace("##" + "FSHARPSTATION_ENDPOINT" + "##", JS.Window.Location.Href)
            let snippetsColl                () = { generation       = generation.Value
                                                   ordered          = snippets.Value
                                                   fetcher          = snippets.TryFindByKey
                                                   predecesorsCache = fun _ -> predsCache
                                                   reducedCache     = fun _ -> reducCache
                                                   prepCode         = prepCode
                                                   }
            let handleError                 er = (er:ResultMessage<string>) |> string |> exn |> raise
            let iterReader                  rm = rm |> iterReader  handleError id (snippetsColl())
            let runReaderResult             rm = rm |> runReader                  (snippetsColl()) |> Result.map fst
            let runReader            handle rm = rm |> runReaderResult |> Result.defaultWith handle
               
            let setCurrentSnippetIdO snpIdO    = currentSnippetIdOV.Set snpIdO
            let setSnippet                 snp = if snp.snpId.Id <> System.Guid.Empty then snippets.Add { snp with snpGeneration = (runReader (fun e -> print e; 999) <| Snippet.maxGenerationRm()) + 1 }
            let getSnippetsGen              () = snippets.Value, generation.Value, collapsedV.Value
        
            let getParentIdONotMemo      snpId = snippets.TryFindByKey snpId |> Option.bind(fun s -> s.snpParentIdO)
            let getParentIdO                   = getParentIdONotMemo |> Memoize.memoizeStore (fun () -> snd parentCache) 
            let rec isDescendantOf ancId snpId = if snpId = ancId  then false else
                                                 getParentIdO snpId
                                                 |> Option.map (fun prnId -> prnId = ancId || isDescendantOf ancId prnId)
                                                 |> Option.defaultValue false
        
            if IsClient then
                currentSnippetIdOV.View |> View.Sink (
                    function
                    | None       -> ()
                    | Some curId ->
                    match codeSnippetIdOV.Value with
                    | None       -> codeSnippetIdOV.Set (Some curId)
                    | Some codId ->
                    codId
                    |>  Snippet.snippetORm
                    |>> Option.map Snippet.uniquePredsRm 
                    >>= insertO
                    |>> Option.toList
                    |>> List.collect  id
                    |>> List.contains curId
                    |>> function false -> codeSnippetIdOV.Set (Some curId) |_->()
                    |>  iterReader
                    clearPredsCache()
                )
        
            if IsClient then
                hierarchy.View |> View.Map (Array.map (fun n -> n.id()) ) |> View.consistent |> View.Sink (fun ids ->
                    clearPredsCache()
                    [| for sid in ids do
                        yield  snippets.FindByKey sid
                        yield! snippets.Value |> Seq.filter(fun snp -> isDescendantOf sid snp.snpId)
                    |]
                    |> snippets.Set
                )
        
            let CurrentSnippetIdW              = currentSnippetIdOV.View |> View.Map (fun sidO -> sidO |> Option.defaultValue Snippet.defaultSnippet.snpId)
            let currentSnippetW                = currentSnippetIdOV.View  |> View.Bind (Option.map snippets.TryFindByKeyAsView >> View.insertWO) |> View.Map (Option.bind id >> Option.defaultValue Snippet.defaultSnippet)
            let    codeSnippetW                =    codeSnippetIdOV.View  |> View.Bind (Option.map snippets.TryFindByKeyAsView >> View.insertWO) |> View.Map (Option.bind id >> Option.defaultValue Snippet.defaultSnippet)
            let currentSnippetV                = Var.Make currentSnippetW setSnippet
            let selectedClassW           snpId = V (if Some snpId = currentSnippetIdOV.V then "selected"    else "")
            let codeSnippetClassW        snpId = V (if Some snpId =    codeSnippetIdOV.V then "codeSnippet" else "")
            let findSnippetW             snpId = snippets.TryFindByKeyAsView snpId |> View.Map (Option.defaultValue Snippet.defaultSnippet)
            let findSnippetV             snpId = Var.Make (findSnippetW snpId) setSnippet
            let getHierarchyW                  = hierarchy.View 
                                                 |> View.Map2(fun _ -> TreeReader.listNodes 0 >> runReader  handleError) collapsedV.View
                                                 |> View.Map (Seq.map (fun (tn,l) -> tn.id(), l) ) 
                                                 |> View.Map  Seq.toArray
            //let codeAndStartsRm            snp =  >>= Snippet.codeAndStartsRm 
            let codeAndStartsW                 = (codeSnippetW, snippets.View) 
                                                 ||> View.MapAsync2 (fun _ _ -> async {
                                                    do! Async.Sleep 350
                                                    return
                                                       Snippet.fastCodeRm currentSnippetIdOV.Value codeSnippetIdOV.Value
                                                       |> runReader handleError
                                                 }) 
            let FsCodeW                        = codeAndStartsW |> View.Map fst
            let codeStartsW                    = codeAndStartsW |> View.Map snd
            let hasChangedW                snp = V (generation.V < snp.snpGeneration )
            let SaveAsClassW                   = View.Map2 (fun snps gen -> if Seq.exists (fun snp -> snp.snpGeneration > gen) snps then "btn-primary" else "") 
                                                    snippets  .View 
                                                    generation.View
            let currentPathW                   = currentSnippetW
                                                 |> View.Map (fun snp -> 
                                                        fusion { 
                                                            let! path  = Snippet.pathRm snp.snpId
                                                            let! names = snp.snpId :: path |> traverseSeq Snippet.snippetNameRm
                                                            return names |> Seq.rev |> String.concat "/"
                                                        } |> runReader (fun _ -> "") )
        
            let currentLayoutDW                =  
                currentSnippetW
                |> View.Map (fun snp -> 
                    fusion {
                        let! btnsO = Snippet.propertyHierORm "Buttons" snp
                                        |>> Option.map(fun(snB, (txB, _)) ->
                                        let ls, ats = txB.Trim().Split('\n')
                                                      |> fun ls ->  if ls.[0].StartsWith "\""
                                                                    then ls.[1..], ls.[0] 
                                                                    else ls      , "\"\""
                                        let ss      = ls
                                                      |> Seq.filter(fun s -> s.Trim() <> "")
                                                      |> Seq.mapi (fun i btn -> 
                                                            if btn.StartsWith ":" 
                                                            then btn.[1..]
                                                            else sprintf "button \"click=${FSharpStation.ButtonClick}\" %A" btn
                                                            |> sprintf "btn%d %s" i
                                                        )
                                        "Snp_" + (string snB.snpId.Id).Replace("-", "")
                                        , [ yield "editorButtons vertical 0-85-100 FStationLyt.menuEditor buttons"
                                            yield! ss
                                            yield [ 0.. Seq.length ss - 1 ] 
                                                    |> Seq.map (sprintf "btn%d") 
                                                    |> String.concat " " 
                                                    |> sprintf "buttons div %s %s " ats
                                        ] |> String.concat "\n"
                                    )
                        return!      Snippet.propertyHierORm "Layout"  snp 
                                        |>> Option.map (fun (snL, (txL, _)) ->
                                        "Snp_" + (string snL.snpId.Id).Replace("-", "")
                                        , btnsO |> Option.map (fun (snB, lyB) -> 
                                            [ txL ; lyB ] |> String.concat "\n")
                                        |> Option.defaultValue txL)
                                        |>> Option.bindNone (fun () -> btnsO)
                    } |> runReader (fun _ -> None)
                ) 
            let currentLayoutJSDW                =  
                currentSnippetW
                |> View.Map (fun snp -> 
                    Snippet.propertyHierORm "LayoutJS"  snp 
                    |>> Option.map (fun (snL, (txL, _)) -> snL.snpId, txL)
                    |> runReader (fun _ -> None)
                )
                                                    
            let setChildrenRm snpId ch = fusion {
                let chIds = ch |> Array.map (fun s -> s.id())
                snippets
                |> Seq.filter (fun s -> s.snpParentIdO <> Some snpId && (chIds |> Array.contains s.snpId))
                |> Seq.map    (fun s -> { s with snpParentIdO = Some snpId })
                |> Seq.iter    setSnippet
                snippets
                |> Seq.filter (fun s -> s.snpParentIdO = Some snpId && (chIds |> Array.contains s.snpId |> not))
                |> Seq.map    (fun s -> { s with snpParentIdO = None })
                |> Seq.iter    setSnippet
                clearPredsCache()
                let descendants, others = snippets.Value |> Seq.toArray |> Array.partition (fun s -> s.snpId |> isDescendantOf snpId)
                let index = others |> Array.findIndex (fun s -> s.snpId = snpId)
                [| yield! others.[0..index]
                   for chid in chIds do
                       yield  descendants |> Seq.find   (fun s -> s.snpId =                 chid)
                       yield! descendants |> Seq.filter (fun s -> s.snpId |> isDescendantOf chid)
                   yield! others.[index+1..]
                |]
                |> snippets.Set
            }
        
            let rec treenode (snpId:SnippetId) =
                {
                    id                 = fun () -> snpId
                    isExpandedRm       = fun () -> rtn (not <| Set.contains snpId collapsedV.Value)
                    canHaveChildrenRm  = fun () -> rtn true
                    childrenRm         = fun () -> Snippet.childrenRm snpId |>> Seq.map (fun snp -> treenode snp.snpId)
                    newChildrenRm      = fun ch -> setChildrenRm snpId ch   |>> fun () -> 
                                                   treenode      snpId
                    parentORm          = fun _ns-> Snippet.snippetORm snpId |>> Option.bind (fun x -> x.snpParentIdO) |>> Option.map treenode
                    pathRm             = fun () -> Snippet.pathRm snpId
                }
                
            let isIndirectPredecessorW snpId = 
                currentSnippetW 
                |> View.Map (fun snp -> Snippet.uniquePredsRm snp
                                        |>> Seq.contains snpId
                                        |>  runReader (fun _ -> false))
            
            let isIncludedPredecessorW snpId = 
                codeSnippetW 
                |> View.Map (fun snp -> Snippet.uniquePredsRm snp
                                        |>> Seq.contains snpId
                                        |>  runReader (fun _ -> false))
            
            let togglePredecessor predId =
                let preds = Lens currentSnippetV.V.snpPredIds
                preds.Value
                |> (if Set.contains predId preds.Value then Set.remove else Set.add) predId
                |> preds.Set
                clearPredsCache()
                
            let expandClassRm snpId =
                Snippet.childrenRm snpId        >>= fun chs -> 
                if Seq.isEmpty chs then rtn "" else
                (treenode snpId).isExpandedRm() |>> fun exp -> 
                if exp then "expanded" else "collapsed"
            
            let expandClassW snpId = snippets.View |> View.Map2 (fun _ _ -> expandClassRm snpId |> runReader handleError) collapsedV.View
            
            let deleteCurrentSnippet _ =
                currentSnippetIdOV.Value
                |> Option.iter (fun snpId ->
                    hierarchy.Value
                    |>  TreeReader.removeNodeOutdentChildren (treenode snpId)
                    |>> Seq.toArray
                    |>> hierarchy.Set
                    |>> fun () -> snippets.RemoveByKey snpId
                    |>  iterReader
                )
                
            let indentIn _ =
                currentSnippetIdOV.Value
                |> Option.iter(fun snpId ->
                    hierarchy.Value
                    |>  TreeReader.indentNode (treenode snpId)
                    |>> Seq.toArray
                    |>> hierarchy.Set
                    |>  iterReader
                )
                   
            let indentOut _ =
                currentSnippetIdOV.Value
                |> Option.iter(fun snpId ->
                    hierarchy.Value
                    |>  TreeReader.outdentNode (treenode snpId)
                    |>> Seq.toArray
                    |>> hierarchy.Set
                    |>  iterReader
                )
                   
            let moveNode fnid tnid =
                hierarchy.Value
                |>  TreeReader.moveToSibling2 false fnid tnid
                |>> Seq.toArray
                |>> hierarchy.Set
                |>  iterReader
        
            let updateGeneration() =
                fusion {
                    let! max = Snippet.maxGenerationRm()
                    generation.Set max
                } |> iterReader
        
            let setSnippetsGen snps coll =
                collapsedV.Set coll
                snippets  .Set snps
                updateGeneration()
                snps 
                |>  Seq.map(fun snp -> Snippet.parentORm snp |>> function None -> Some snp |_-> None )
                |>  sequenceSeq
                |>> Seq.choose id
                |>> Seq.map (fun snp -> treenode snp.snpId)
                |>> Seq.toArray
                |>> hierarchy.Set
                |>  iterReader
        
            let addSnippetRm snp = 
                snippets.Add snp
                let hier = hierarchy.Value |> Seq.append [| treenode snp.snpId |]
                currentSnippetIdOV.Value
                |>  Option.map Snippet.snippetORm |> insertO |>> Option.bind id
                >>= function
                | None     -> hier |> rtn
                | Some sbl -> hier |> TreeReader.moveToSibling2 true snp.snpId sbl.snpId
                |>> Seq.toArray
                |>> hierarchy.Set
                
            let newSnippet _ =
                let snp = Snippet.New "" "" None
                addSnippetRm snp
                |>> fun () -> currentSnippetIdOV.Set (Some snp.snpId)
                |>  iterReader
                
            let toggleCollapse snpId =
                if Set.contains snpId collapsedV.Value then Set.remove else Set.add
                <| snpId
                <| collapsedV.Value
                |> collapsedV.Set
        
            let expandParents snpId =
                Snippet.pathRm snpId
                |>> (fun path -> collapsedV.Value - Set path |> collapsedV.Set)
                |> iterReader
            
            let setProperty snp prop v =
                { snp with snpProperties =  snp.snpProperties
                                            |> Seq.filter(fst >> (<>) prop)
                                            |> Seq.append <| [ prop, v ]
                                            |> Seq.toArray
                }
                |> setSnippet
        module DragDrop =
        
            type DragInfo = 
                | DragNone
                | DragNode of SnippetId
            
            let mutable drag        = DragNone
            let setDragNone ()      = drag <- DragNone
            let setDragNode tnid    = drag <- DragNode tnid
            
            let getDragNIdO  tnId    = match drag with DragNode  dnid        when dnid <>       tnId               -> Some dnid | _ -> None
            
            let [< Inline >] inline moveItem dropId elems getId item =
                elems
                |> Seq.filter (getId >> ((<>) (getId item)) )
                |> Seq.toArray
                |> (fun s -> let fst, snd =  s |> Array.splitAt (s |> Array.findIndex (getId >> ((=) dropId)) )
                             [fst ; [| item |] ; snd])
                |> Seq.collect id
                |> Seq.toArray
            
            let [< Inline >] inline value (x: ^T)   = (^T : (member Value : #seq<'U>        )  x    )
            let [< Inline >] inline set   (x: ^T) v = (^T : (member Set   : #seq<'U> -> unit) (x, v))
            
            let [< Inline >] inline moveItemInListModel dropId lm getId itemO = itemO |> Option.iter( moveItem dropId (value lm) getId >> (set lm) )
            
        [< AutoOpen >]
        module Templating =
            open WebSharper.UI.Templating
            let [< Literal >] rootdir = @"..\website"
        
            let [< Literal >] TemplatesFileName = rootdir + @"\Templates.html"
            type TemplateLib  = Template< TemplatesFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
            
            if IsClient then printfn "%s" TemplatesFileName
        
        module RenderSnippets =
            open Snippets
            
            let scrollIntoView selW (e:Dom.Element) = selW |> View.Sink (fun s -> if s then e?scrollIntoViewIfNeeded()) 
            
            let snippets () = 
                Snippets.getHierarchyW
                |> Doc.BindSeqCached (fun (snpId, l) ->
                    let snpW     = findSnippetW snpId
                    let nameW    = View.Do {
                                        let! snp     = snpW
                                        let! changed = Snippets.hasChangedW snp
                                        let  name    = Snippet.snippetName snp.snpName snp.snpContent
                                        return (if changed then "*" else "") + name
                                    }
                    //let pathW = V( Snippets.getHierarchyW |> (fun _ -> (Snippets.treenode snpId).path () |> Seq.map (fun n -> string n.Id) |> String.concat " - ") )
                    let predW    = V(if currentSnippetV.V.snpPredIds |> Set.contains snpId then "direct-predecessor"   else
                                     if (isIndirectPredecessorW snpId).V                   then "indirect-predecessor" else 
                                     if (isIncludedPredecessorW  snpId).V                  then "included-predecessor" else "" )
                    let errorW   = FStation.annotationsV.View |> View.Map (String.contains <| snpId.Id.ToString() >> function true -> "ErrorMsg" |_-> "" )
                    TemplateLib.Snippet()
                        .Name(          nameW                                                                                        )
                        .Indent(        string l                                                                                     )
                        .Parent(        expandClassW snpId                                                                           )
                        .Predecessor(   predW                                                                                        )
                        .Selected(    [ (selectedClassW snpId).V ; (codeSnippetClassW snpId).V ] |> String.concat " "                )
                        .ErrorMsg(      errorW                                                                                       )
                        .Select(        fun _  -> setCurrentSnippetIdO <| Some snpId                                                 )
                        .AfterRender(   scrollIntoView <| View.Map ((<>) "") (Snippets.selectedClassW snpId)                         )
                        .TogglePred(    fun ev -> togglePredecessor snpId                                                            )
                        .ToggleCollapse(fun ev -> Snippets.toggleCollapse snpId                                                      )
                        .Drag(          fun ev ->     DragDrop.setDragNode snpId            ; ev.Event.StopPropagation()             )
                        .DragOver(      fun ev -> if (DragDrop.getDragNIdO snpId).IsSome then ev.Event.PreventDefault ()             )
                        .Drop(          fun ev -> do                                          ev.Event.PreventDefault () 
                                                  DragDrop.getDragNIdO snpId |> Option.iter(fun fr -> moveNode fr snpId)             )
                      .Doc()
                )
            
            let render() = TemplateLib.SnippetList().Snippets( snippets() ).Doc()
        module RenderProperties =
            open Snippets
            
            let addProperty () = Snippets.currentSnippetV.Set 
                                    { Snippets.currentSnippetV.Value with snpProperties = Array.append Snippets.currentSnippetV.Value.snpProperties 
                                                                                                       [| "","" |]                                              }
            let remProperty i = Snippets.currentSnippetV.Set 
                                    { Snippets.currentSnippetV.Value with snpProperties = Array.append Snippets.currentSnippetV.Value.snpProperties.[0  .. i-1] 
                                                                                                       Snippets.currentSnippetV.Value.snpProperties.[i+1..    ] }
            let properties() =
                let propsV = Lens Snippets.currentSnippetV.V.snpProperties
                let setName  i newName = propsV.Value.[i] <- (newName, snd propsV.Value.[i]) 
                                         propsV.Value |> propsV.Set
                let setValue i newVal  = if (snd propsV.Value.[i]).Length > 1000 then () else
                                         propsV.Value.[i] <- (fst propsV.Value.[i], newVal) 
                                         propsV.Value |> propsV.Set
                V([| 0.. propsV.V.Length - 1|])
                |> Doc.BindSeqCached (fun i ->
                    let nameV  = Var.Make <| V( fst propsV.V.[i])
                                          <| setName  i
                    let valueV = Var.Make <| V( let v = snd propsV.V.[i]
                                                if v.Length > 1000 then sprintf "%s...<%d chars>" v.[0..100] v.Length else v)
                                          <| setValue i
                    TemplateLib.Property()
                        .Name(   nameV                   )
                        .Value(  valueV                  )
                        .Remove( fun ev -> remProperty i )
                      .Doc()
                )
        
            let render() = 
                TemplateLib.PropertyTable()
                    .Properties(  properties()           )
                    .AddProperty( fun _ -> addProperty() )
                    .Doc()    
        [< JavaScript false >]
        module Markdown =
            open System.Text.RegularExpressions
        
            let private stringReplacePatterns =
                [ "&lt;"      , "<"
                  "&gt;"      , ">"
                  "&quot;"    , "\""
                  "&apos;"    , "'"
                  "&amp;"     , "&"
                  "<summary>" , "**Description**\n\n"
                  "</summary>", "\n"
                  "<para>"    , "\n"
                  "</para>"   , "\n"
                  "<remarks>" , ""
                  "</remarks>", "\n" ]
            let private regexReplacePatterns =
                let r               pat = Regex(pat, RegexOptions.Compiled ||| RegexOptions.IgnoreCase)
                let unquote  (s:string) = s.Substring(1, s.Length - 2)
                let returns     strings = Array.item 0 strings |>                     sprintf "\n**Returns**\n\n%s"
                let param       strings = Array.item 0 strings |> unquote |> fun s -> sprintf "* `%s`: %s" s strings.[1]
                let link        strings = Array.item 0 strings |> unquote
                let code        strings = Array.item 0 strings |> fun s -> if String.contains "\n" s then "```forceNoHighlight" + s + "```" else "`" + s + "`"
                [ r "<c>((?:(?!<c>)(?!<\/c>)[\s\S])*)<\/c>"                                              , code
                  r """<see\s+cref=(?:'[^']*'|"[^"]*")>((?:(?!<\/see>)[\s\S])*)<\/see>"""                , code
                  r """<param\s+name=('[^']*'|"[^"]*")>((?:(?!<\/param>)[\s\S])*)<\/param>"""            , param
                  r """<typeparam\s+name=('[^']*'|"[^"]*")>((?:(?!<\/typeparam>)[\s\S])*)<\/typeparam>""", param
                  r """<exception\s+cref=('[^']*'|"[^"]*")>((?:(?!<\/exception>)[\s\S])*)<\/exception>""", param
                  r """<a\s+href=('[^']*'|"[^"]*")>((?:(?!<\/a>)[\s\S])*)<\/a>"""                        , link
                  r """<returns>((?:(?!<\/returns>)[\s\S])*)<\/returns>"""                               , returns
                ] // "
        
            /// Helpers to create a new section in the markdown comment
            let private suffixXmlKey (tag : string) (value : string) (str : string) = 
                match str.IndexOf(tag) with
                | x when x <> -1 -> let insertAt = if str.Chars(x - 1) = ' ' 
                                                   then x - 1
                                                   else x
                                    str.[0..insertAt] + value + str.[insertAt + 1..]
                | _              -> str
        
            let private suffixTypeparam = suffixXmlKey "<typeparam" "\n**Type parameters**\n\n"
            let private suffixException = suffixXmlKey "<exception" "\n**Exceptions**\n\n"
            let private suffixParam = suffixXmlKey "<param" "\n**Parameters**\n\n"
        
            /// Replaces XML tags with Markdown equivalents.
            /// List of standard tags: https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/xml-documentation
            let private replaceXml (str: string) : string =
                let str =
                    str
                    |> suffixTypeparam
                    |> suffixException
                    |> suffixParam
        
                let res = regexReplacePatterns
                          |> List.fold (fun res (regex: Regex, formatter: string[] -> string) ->
                              // repeat replacing with same pattern to handle nested tags, like `<c>..<c>..</c>..</c>`
                              let rec loop res : string =
                                  match regex.Match res with
                                  | m when m.Success -> m.Groups
                                                        |> Seq.cast<Group>
                                                        |> Seq.map (fun g -> g.Value)
                                                        |> Seq.toArray
                                                        |> Array.splitAt 1
                                                        |> function 
                                                           | [| firstGroup |], otherGroups -> loop <| res.Replace(firstGroup, formatter otherGroups)
                                                           |                              _-> res
                                  |                                                       _-> res
                              loop res
                          ) str
                stringReplacePatterns
                |> List.fold (fun (res: string) (oldValue, newValue) ->
                    res.Replace(oldValue, newValue)
                ) res
        
            [< Rpc >]
            let createCommentBlock (comment: string) = async {
                return
                    comment
                    |> replaceXml
            }
        module Monaco =
            open WebSharper.UI
            open WebSharper.UI.Html
            open FsAutoComplete
            open Monaco
            
            let startsV  = Var.Create [||]
            
            let defaultStart = Option.defaultValue((SnippetId.Empty, ""), (0, 1, 0))
            let getIndentAndFirst () =
                let currId = Snippets.currentSnippetV.Value.snpId
                let _, (indent, first, _) = startsV.Value |> Seq.tryFind (fst >> fst >> (=) currId) |> defaultStart
                indent, first
        
            let getSnipIdIndentAndFirst line =
                let (snpId, _), (indent, first, _) = startsV.Value |> Seq.tryFind (fun (_, (_, first, last)) -> line >= first && line <= last) |> defaultStart
                snpId, indent, first
        
            let getModelUri txt uri =
                let model = Editor.GetModel uri 
                            |> fun model -> if isUndefined model then None else Some model
                            |> Option.defaultWith (fun () -> Editor.CreateModel("", "fsharp", uri) )
                if model.GetValue() <> txt then
                    model.SetValue txt
                model
        
            let getSnippetModel (sid:SnippetId) =
                Uri.Parse("snpId:" + sid.Id.ToString())
                |> getModelUri (Snippet.snippetRm sid |> Snippets.runReader (string >> failwith)).snpContent
        
            let fixMarkDown v =
                v
                |> String.splitByChar '\n'
                |> Seq.map (fun l -> l.Replace("\t", "- "))
                |> Seq.map (fun l -> let i = l |> Seq.takeWhile ((=) ' ') |> Seq.length
                                     String.replicate i "&nbsp;" + l.[i..] )
                |> String.concat "\n\n"
                
            let overDescriptions descs =
                                  descs 
                                  |> Seq.collect id 
                                  |> Seq.collect (fun (d:CommTypes.OverloadDescription) ->
                                      [ if d.Signature |> isUndefined |> not then yield "```\n" + d.Signature + "\n```" |> Async.rtn
                                        if d.Comment   |> isUndefined |> not then yield Markdown.createCommentBlock d.Comment |> Async.map fixMarkDown
                                        if d.Footer    |> isUndefined |> not then yield d.Footer |> fixMarkDown |> Async.rtn] )
                                  |> Async.sequenceSeq
            
            let mutable fileName = "none.fsx"
        
            type HoverProvider(ed:Editor) =
                do()
               with
                  member __.provideHover(model:Model, pos:Position, token:obj) =
                    asyncResult {
                      let indent, first = getIndentAndFirst()
                      let! descs, other = toolTip fileName (pos.lineNumber + first) (pos.column + indent) ""
                      let! desc = overDescriptions descs 
                      return
                          {
                              contents = desc |> Seq.map (fun d -> { value = d |>! print ; isTrusted = true }) |> Seq.toArray
                              range    = (box null |> unbox)
                          }
                    } |> Promise.ofAsyncResult
        
            let convertGlyphChar =
                function
                | "C" -> CompletionItemKind.Class
                | "E" -> CompletionItemKind.Enum
                | "S" -> CompletionItemKind.Value
                | "I" -> CompletionItemKind.Interface
                | "N" -> CompletionItemKind.Module
                | "M" -> CompletionItemKind.Method
                | "P" -> CompletionItemKind.Property
                | "F" -> CompletionItemKind.Field
                | "T" -> CompletionItemKind.Class
                | "K" -> CompletionItemKind.Keyword
                | _   -> 0 |> unbox
        
            type CompletionItemProvider(ed:Editor) =
                do()
               with
                  member __.provideCompletionItems(model:Model, pos:Position, token:obj, context: obj) =
                    asyncResult {
                      let indent, first = getIndentAndFirst()
                      let txt = String.replicate indent " " + model.GetLineContent(pos.lineNumber)
                      let! comps, other = completion txt true fileName (pos.lineNumber + first) (pos.column + indent) "Contains"
                      return comps 
                             |> Array.map(fun (comp:CommTypes.CompletionResponse) -> 
                                 { kind   = convertGlyphChar comp.GlyphChar
                                   label  = comp.Name
                                   detail = ""
                                 } )
                    } |> Async.map (function Ok v -> v | Error m -> failwith <| sprintf "%A" m ) |> Promise.OfAsync
                  member __.resolveCompletionItem(item: CompletionItem, token: obj) =
                    asyncResult {
                      let! comp, other = helpText item.label
                      let  desc =  (comp:CommTypes.HelpTextResponse).Overloads 
                                   |> Seq.collect id
                                   |> Seq.collect (fun d -> 
                                         [ if d.Signature |> isUndefined |> not then yield d.Signature
                                           if d.Comment   |> isUndefined |> not then yield d.Comment
                                           if d.Footer    |> isUndefined |> not then yield d.Footer ]
                                   )
                                   |> String.concat "\n" 
                      return  { item with detail = desc}
                    } |> Async.map (function Ok v -> v | Error m -> failwith <| sprintf "%A" m ) |> Promise.OfAsync
        
            type DefinitionProvider(ed:Editor) =
                do()
               with
                  member __.provideDefinition(model: Model, pos: Position, token: obj): Promise<Location> =
                    asyncResult {
                      let indent, first = getIndentAndFirst()
                      let! decl, others = findDeclaration fileName (pos.lineNumber + first) (pos.column + indent) ""
                      let  decl : CommTypes.Location = decl
                      let snpId, indent2, first2 = getSnipIdIndentAndFirst decl.Line
                      let uri           = Monaco.Uri.Parse <| "snpId:" + snpId.Id.ToString()
                      getSnippetModel snpId |> ignore
                      return 
                          { range = { startColumn     = decl.Column - indent2
                                      endColumn       = decl.Column - indent2
                                      startLineNumber = decl.Line   - first2
                                      endLineNumber   = decl.Line   - first2
                                    }
                            uri   = uri
                          }
                    } |> Async.map (function Ok v -> v | Error m -> failwith <| sprintf "%A" m ) |> Promise.OfAsync
        
            let transformAnnotations snp msgs =
                let rex  = """(Err|Warn|Info|Hint) \((\d+)\,\s*(\d+)\) - \((\d+)\,\s*(\d+)\).*\(""" + rexGuid + """\) "([^"]+?)"\.""" //"
                match msgs with
                | REGEX rex "g" m -> m
                | _               -> [||]
                |> Array.choose (fun v ->
                    match v with
                    | REGEX rex "" [| _; ty;     fl;     fc;     tl;     tc; guid; msg |] 
                                -> Some (ty, int fl, int fc, int tl, int tc, guid, msg)
                    | _      -> None
                )
                |> Array.choose (fun (ty, fl, fc, tl, tc, guid, msg) ->
                    if ParseO.parseGuidO guid |> Option.map SnippetId <> Some snp.snpId then None else
                        Some {  message  = msg
                                severity = match ty with "Err" -> MarkerSeverity.Error | "Warn" -> MarkerSeverity.Warning  | "Hint" -> MarkerSeverity.Hint |_-> MarkerSeverity.Info
                                startColumn     = fc
                                endColumn       = tc
                                startLineNumber = fl
                                endLineNumber   = tl
                        }
                  )        
                    
            type MonacoOptions  = {
                fontSize   : int
                lineHeight : int
            }
            
            let addProp prop (pojo:JSObject) = pojo.Add prop ; pojo
            
            let newPojo props =
                let pojo = JSObject()
                if IsClient then
                    props |> Seq.iter (swap addProp pojo >> ignore)
                pojo
        
            let gotoEditor (ed:Editor) codeId line col = async {
                Snippets.expandParents codeId
                Snippets.setCurrentSnippetIdO <| Some codeId
                do! Async.Sleep 200
                ed.Focus()
                ed.SetPosition            { Monaco.Position.lineNumber = line ; Monaco.Position.column = col }
                ed?revealPositionInCenter { Monaco.Position.lineNumber = line ; Monaco.Position.column = col }
            }
        
            let openCodeEditor (input:obj, ed:Editor, sideBySide) =
                async {
                    match input?resource?path with
                    | ParseO.Guid guid -> 
                         do! gotoEditor ed (SnippetId guid) input?options?selection?startLineNumber input?options?selection?startColumn
                         return  ed  
                    |_-> return (null |> unbox<Editor>)
                } |> Promise.OfAsync
        
            [< Inline "var m = require('vs/editor/standalone/browser/standaloneServices');
                       var n = new m.StaticServices.codeEditorService._factory();
                       n.openCodeEditor = FsRoot.FSharpStation.Monaco.openCodeEditor;
                       return n;" >]
            let getCodeEditorServiceImpl () = X<_>
                
            type ITextModelService  = {
                setEditor                        : Editor -> unit
                //registerTextModelContentProvider : obj
                createModelReference             : obj
            }
            
            let textModelResolverService() =
                let mutable editorO = None
                {
                    setEditor            = fun e   -> editorO <- Some e
                    createModelReference = fun uri -> 
                        async {
                            let model = getSnippetModel uri
                            return Monaco.newImmortalReference(model)
                        } |> Promise.OfAsync
                }
        
            let monacoNew        (var           : Var<string>                         ) 
                                 (annotationsWO : View<MarkerData []>           option) 
                                 (showToolTipO  :(string -> int -> int -> unit) option) 
                                 (getHintsO     :(((string * string * string) [] -> int * int -> int * int -> unit) 
                                               -> string -> int -> int -> unit) option) =
            
                let setDirtyCond() = ()
                let getHints    _  = ()
                
                Monaco.newVar var
                |> fun config -> 
                    { config with options   = 
                                      newPojo [   "fontSize"   => 12
                                                  "lineHeight" => 14 
                                              ] 
                                  //overrides = 0 
                                  overrides = 
                                      newPojo [ 
                                          "codeEditorService"        => getCodeEditorServiceImpl()
                                          "textModelResolverService" => textModelResolverService()
                                          ]
                    }
                |> onRender(fun ed -> 
                    Editor.SetModelLanguage(ed.GetModel(), "fsharp")
                    Editor.SetTheme("vs")
                    //ed.UpdateOptions { fontSize   = 12 ; lineHeight = 14 }        
                    let hp = new HoverProvider         (ed)
                    let cp = new CompletionItemProvider(ed)
                    let dp = new DefinitionProvider    (ed)
                    hp.provideHover |> print
                    cp.provideCompletionItems |> print
                    cp.resolveCompletionItem  |> print
                    dp.provideDefinition      |> print
                    Editor.RegisterHoverProvider         ("fsharp", hp ) |> ignore
                    Editor.RegisterCompletionItemProvider("fsharp", cp ) |> ignore
                    Editor.RegisterDefinitionProvider    ("fsharp", dp ) |> ignore
                    annotationsWO
                    |> Option.iter( View.Sink (fun ms -> Editor.SetModelMarkers(ed.GetModel(), "annotations", ms)) )
                )
        
            let parse (code: string, starts: ((SnippetId * string) * (int * int * int)) []) =
              asyncResult {
                FStation.annotationsV.Value
                |> String.skipFirstLine
                |> (+) "Parsing...\n"
                |> FStation.annotationsV.Set
                startsV.Set starts
                let lines         = String.splitByChar '\n' code
                fileName         <- FsCode.getSourceDir FStation.srcDir lines +/+ FStation.id + ".fsx"
                let! errs, others = parseCode fileName lines true 0
                (errs:CommTypes.ErrorResponse).Errors
                |> Seq.map (fun v ->
                   let (sid, name), (indent, first, _) = starts |> Seq.tryFind(fun (_, (indent, first, last)) -> v.StartLine > first && v.StartLine <= last) |> defaultStart
                   sprintf "%s (%d, %d) - (%d, %d) %s(%s) \"%s: %s\"."
                    <| match v.Severity with "Error" -> "Err" |_-> "Warn"
                    <|  v.StartLine    - first
                    <|  v.StartColumn  - indent
                    <|  v.EndLine      - first
                    <|  v.EndColumn    - indent
                    <|    name
                    <|    sid.Id.ToString()
                    <|  v.Subcategory
                    <|  v.Message
                )
                |> Seq.append [ "Parsed!" ]
                |> String.concat "\n"
                |> FStation.annotationsV.Set
                others |> Seq.iter print 
                ()
              } |> AsyncResult.iterA print print
        
            let mutable editorConfigO : MonacoConfig option = None
            
            let getEditorConfigO () =
                if IsClient 
                then monacoNew <| Lens Snippets.currentSnippetV.V.snpContent
                               <| Some ( (Snippets.currentSnippetW, FStation.annotationsV.View) ||> View.Map2 transformAnnotations )
                               <| None
                               <| None
                     |> Some
                else None
                |>! fun edO -> editorConfigO <- edO
        
            if IsClient then
                Snippets.CurrentSnippetIdW |> View.Sink(fun sid ->
                    try
                        editorConfigO
                        |> Option.bind(fun config -> config.editorO                         )
                        |> Option.iter(fun editor -> getSnippetModel sid |> editor.SetModel 
                                                     FStation.annotationsV.Set FStation.annotationsV.Value
                        )
                    with _ -> ()
                )
        
            let goto codeId line col = async {
                match editorConfigO |> Option.bind (fun cfg -> cfg.editorO) with
                | Some ed -> do! gotoEditor ed codeId line col
                | _       -> ()
            }
        
                
        
        
        module JumpTo =
        
            let rexGuid = """\((\d+)\,\s*(\d+)\) - \((\d+)\,\s*(\d+)\).*([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})"""
            
            let jumpToLine = 
                function
                | REGEX rexGuid "" [| _ ; line ; col ; _ ; _ ; guid |] -> Monaco.goto <| SnippetId (System.Guid guid) <| int line <| int col 
                                                                          |> Async.Start
                | _                                                    -> ()
                
            let jumpToRef (e:Dom.Element) =
                let v : string = e?value |> unbox
                let s : int    = e?selectionStart |> unbox
                let lines = v.Split '\n'
                lines 
                |> Seq.mapFold (fun total line -> (line, total, total + line.Length + 1), total + line.Length + 1) 0 
                |> fst
                |> Seq.pick (fun (line, from, to_) -> if s >= from && s < to_ then Some line else None)
                |> jumpToLine        
        module CustomAction =
            open FusionAsyncM
            open Operators
            open FStation
        
            let propO snp p = snp |> Snippet.propertyHierORm p |> ofFusionM |>> Option.map (function (_, (v, _)) -> v)
        //    let [< Inline "Object.constructor('return function(button) { return `' + $template + '`}')()($p)" >] translateTemplate (template: string) p = ""
        
            let translateString f (code: string) =
                let rec translate acc (s: string) =
                    String.delimitedO "${" "}" s
                    |> function
                    | None -> acc + s
                    | Some (bef, var, aft) ->
                    translate (acc + bef) (f var + aft)
                translate "" code
        
            let getBaseSnippet() = fusion {
                let     snp     = Snippets.currentSnippetV.Value
                let!    snpRefO = propO snp "BaseSnippet"
                return! snpRefO
                        |>  Option.map(fun ref -> 
                                SnippetReference.RefSnippetPath (ref.Split '/') 
                                |> Snippet.snippetFromRefORm
                                |> ofFusionM)
                        |>  insertO
                        |>> Option.flatten
                        |>> Option.defaultValue snp
            }
        
            let getCode snp name = fusion {
                let!  openProp  = propO snp "Open" |>> Option.map (__ (+) "\n") |>> Option.defaultValue ""
                let!  namecodeO = propO snp  name
                match namecodeO with
                | Some code -> return openProp + code
                | None      ->
                if name.StartsWith ":" then return openProp + name.[1..] else 
                let! template  = propO snp "action-template" |>> Option.defaultValue "${button}() |> printfn \"%A\""
                return openProp + template |> String.indentStr 4 |> sprintf "module Call%s =\n%s" (string <| FStation.now())
            }
        
            module AF = FsRoot.LibraryJS.AppFramework
        
            let fetchValue button v =
                if v = "button" then button else
                "Snp_" + (string Snippets.currentSnippetV.Value.snpId.Id).Replace("-", "")
                |> swap AF.splitName v
                ||> AF.tryGetWoW
                |> Option.bind View.TryGet
                |> Option.defaultWith (fun () -> sprintf "$[not found:%s]" v)
        
            let actionClickRm name = fusion {
                outputMsgs.Set  <| sprintf "Action %s ..." name
                let! snp       = getBaseSnippet()
                let! code      = getCode snp name |>> translateString (fetchValue name)
                do!     ofAsync <| FSharpStationClient.setAddress (WebSockets.Address FStation.id)
                let! preCode   = Snippet.fastCodeRm (Some snp.snpId) (Some snp.snpId) |> ofFusionM |>> fst
                let! gen       = ofFusionM <| Snippet.predsGenerationRm snp
                return! ofAsync <| FsiAgent.evalCodeWithPresence FStation.srcDir (sprintf "%A" snp.snpId) (string gen) (FsCode preCode) (FsCode code)
            }
            
            let actionClick name            = actionClickRm  name  |> iterReaderA  print print (Snippets.snippetsColl())
            let buttonClick (e:Dom.Element) = e.TextContent.Trim() |> actionClick
        
        module Serializer =
            open Serializer
        
            let serSnippetId      = serId (fun (SnippetId      v) -> v) SnippetId      (sprintf "%A")     
        
            let serSnippet   : Ser<Snippet  > = 
                [|
                    serSnippetId                                         |> serField "snpId"         (fun s -> s.snpId        ) (fun v s -> { s with snpId         = v } )
                    serString                                            |> serField "snpName"       (fun s -> s.snpName      ) (fun v s -> { s with snpName       = v } )
                    serString                                            |> serField "snpContent"    (fun s -> s.snpContent   ) (fun v s -> { s with snpContent    = v } )
                    serSnippetId                     |> serOpt           |> serField "snpParentIdO"  (fun s -> s.snpParentIdO ) (fun v s -> { s with snpParentIdO  = v } )
                    serSnippetId                     |> serSet           |> serField "snpPredIds"    (fun s -> s.snpPredIds   ) (fun v s -> { s with snpPredIds    = v } )
                    serString              |> serDup serString |> serArr |> serField "snpProperties" (fun s -> s.snpProperties) (fun v s -> { s with snpProperties = v } )
                    serInt                                               |> serField "snpGeneration" (fun s -> s.snpGeneration) (fun v s -> { s with snpGeneration = v } )
                |] |> serRecord (Snippet.New "" "" None)
            
            type Model = {
                snippets   : Snippet []
                generation : int
                collapsed  : SnippetId Set
            }
        
            let getModel(snippets, gen, coll) =  { snippets = snippets |> Seq.toArray ;  generation = gen ; collapsed = coll}
        
            let serModel : Ser<Model> =
                [|
                    serSnippet                       |> serArr           |> serField "snippets"   (fun m -> m.snippets  ) (fun v m -> { m with snippets   = v } )
                    serInt                                               |> serField "generation" (fun m -> m.generation) (fun v m -> { m with generation = v } )
                    serSnippetId                     |> serSet           |> serField "collapsed"  (fun m -> m.collapsed ) (fun v m -> { m with collapsed  = v } )
                |] |> serRecord { snippets = [||] ; generation = 0 ; collapsed = Set.empty}
                
        
        module LoadSave =
        
            let fileName  = Var.Create ""
            let canLoad() = Snippets.SaveAsClassW |> View.TryGet = Some "" || JS.Confirm "Changes have not been saved, do you really want to load?"
        
            let parseText txt =
                try       txt
                          |> Json.Parse
                          |> snd Serializer.serModel 
                          |> fun mdl -> Snippets.setSnippetsGen mdl.snippets mdl.collapsed
                with e -> JS.Alert <| e.ToString()
                          printfn "%A" e
        
            let loadTextFile element  =
                if canLoad() then
                    FileList.OfElement element
                    |> fun files ->
                        if files.Length > 0 then
                            let reader = TextFileReader()
                            reader.Onload <- fun e -> e.Target?result |> parseText
                            fileName.Set files.[0].Name
                            files.[0] |> reader.ReadAsText
        
            [< Inline "saveAs(new Blob([$_txt], {type: 'text/plain;charset=utf-8'}), $_name)" >]
            let saveAsJavaScript (_name:string) (_txt:string) = ()
        
            let saveAs() = 
                let name = match fileName.Value.Split [| '/' ; '\\' |] |> Seq.last with 
                           | ""    -> "noname.snippets" 
                           | fname -> fname
                Snippets.getSnippetsGen()
                |> Serializer.getModel
                |> fst Serializer.serModel
                |> saveAsJavaScript name
                Snippets.updateGeneration()
        
        module Importer =
            open Serializer
        
            let serSnippetId2 : Ser<SnippetId> = sprintU, fun (x: obj) -> x?Item |> deserGuid |> SnippetId
        
            let serSnippet2   : Ser<Snippet  > = 
                [|
                    serSnippetId2                                        |> serField "id"           (fun s -> s.snpId                     ) (fun v s -> { s with snpId         = if v = SnippetId.Empty then SnippetId <| System.Guid.NewGuid() else v } )
                    serString                                            |> serField "name"         (fun s -> s.snpName                   ) (fun v s -> { s with snpName       = v } )
                    serString                                            |> serField "content"      (fun s -> s.snpContent                ) (fun v s -> { s with snpContent    = v } )
                    serSnippetId2                    |> serOpt           |> serField "parent"       (fun s -> s.snpParentIdO              ) (fun v s -> { s with snpParentIdO  = if v = Some SnippetId.Empty then None else v } )
                    serSnippetId2                    |> serArr           |> serField "predecessors" (fun s -> s.snpPredIds |> Seq.toArray ) (fun v s -> { s with snpPredIds    = Set v } )
                    //serString                        |> serMap serString |> serField "properties"   (fun s -> s.snpProperties) (fun v s -> { s with snpProperties = v } )
                |] |> serRecord (Snippet.New "" "" None)
            
            let serSnippets = serSnippet2 |> serArr
        
            let parseText txt =
                try       txt
                          |> Json.Parse
                          |> snd serSnippets
                          |> fun snps -> Snippets.setSnippetsGen snps Set.empty
                with e -> JS.Alert <| e.ToString()
                          printfn "%A" e
        
            let importFile element  =
                if LoadSave.canLoad() then
                    FileList.OfElement element
                    |> fun files ->
                        if files.Length > 0 then
                            let reader = TextFileReader()
                            reader.Onload <- fun e -> e.Target?result |> parseText
                            files.[0] |> reader.ReadAsText
        
        module MainProgram =
            open WebComponent
            open FusionAsyncM
            open Operators
            open FStation
            
            let runFsCode () = 
                let out (v:string) = appendMsgs <| v.Replace(FsiEvaluator.endToken, "Done!")
                Snippets.FsCodeW 
                |> View.TryGet 
                |> Option.iter (fun code ->
                    fusion {
                        outputMsgs.Set "Running F#..."
                        do!     ofAsync <| FSharpStationClient.setAddress (WebSockets.Address FStation.id)
                        return! ofAsync <| FsiAgent.evalCode FStation.srcDir (FsCode code)
                    } |> iterResultA (sprintf "Error:\n%A" >> out) ignore
                )
        
            let deleteSnippet() =
                let snp = Snippets.currentSnippetV.Value
                if  snp.snpId <> SnippetId.Empty 
                && JS.Confirm (sprintf "Do you want to delete %s?" <| Snippet.snippetName snp.snpName snp.snpContent) then 
                    Snippets.deleteCurrentSnippet()
        
            open FsRoot
            module AF = AppFramework 
        
            let FStationLyt = "FStationLyt"
        
            let hookVar plug name func obj =
                AF.tryGetVar plug name
                |> Option.map        (fun var -> printfn "Var    %s.%s hooked"    plug name ;  func obj var.varVar                  )
                |> Option.defaultWith(fun ()  -> printfn "Var    %s.%s not found" plug name ;       obj                             )
        
            let hookViw plug name func obj =
                AF.tryGetViw plug name
                |> Option.map        (fun viw -> printfn "View   %s.%s hooked"    plug name ;  func obj viw.viwView                 )
                |> Option.defaultWith(fun ()  -> printfn "View   %s.%s not found" plug name ;       obj                             )
        
            let hookAct plug name func obj =
                AF.tryGetAct plug name
                |> Option.map        (fun act -> printfn "Action %s.%s hooked"    plug name ;  func obj (fun _-> act.actFunction |> AF.callFunction () () ) )
                |> Option.defaultWith(fun ()  -> printfn "Action %s.%s not found" plug name ;       obj                             )
        
            let hookDoc plug name func obj =
                AF.tryGetDoc plug name
                |> Option.map        (fun doc -> printfn "Doc    %s.%s hooked"    plug name ;  func obj (AF.mainDocV.View |> View.Map (fun _ -> AF.getLazyDoc doc) |> Doc.EmbedView) )
                |> Option.defaultWith(fun ()  -> printfn "Doc    %s.%s not found" plug name ;       obj                             )
        
            let buttonsRight() =
                TemplateLib.ButtonsRight()
                |> hookAct "FSharpStation" "AddSnippet"    (fun tmp    -> tmp.AddSnippet                  )
                |> hookAct "FSharpStation" "RemoveSnippet" (fun tmp    -> tmp.RemoveSnippet               )
                |> hookAct "FSharpStation" "IndentIn"      (fun tmp    -> tmp.IndentIn                    )
                |> hookAct "FSharpStation" "IndentOut"     (fun tmp    -> tmp.IndentOut                   )
                |> hookAct "FSharpStation" "RunFS"         (fun tmp    -> tmp.RunFS                       )
                |> (fun tmp -> tmp.Doc())
        
            if IsClient then
                Snippets.codeAndStartsW |> View.Sink (delayed 300 Monaco.parse)
        
                View.Sink (fun m -> 
                    JS.Window.Onbeforeunload <- 
                        if m <> "" then System.Action<Dom.Event>(fun (e:Dom.Event) -> e?returnValue  <- "Changes you made may not be saved.")
                        else null
                ) Snippets.SaveAsClassW 
        
            let mainDoc() =
                TemplateLib.Layout()
                    .LoadFileChanged(  fun ev -> LoadSave.loadTextFile ev.Target)
                    .LoadFileClear(    fun ev -> ev.Target?value <- ""          )
                    .ImportFileChanged(fun ev -> Importer.importFile ev.Target  )
                    .ImportFileClear(  fun ev -> ev.Target?value <- ""          )
                    .JumpRef(          fun ev -> JumpTo.jumpToRef ev.Target     )
                    //|> hookVar "FSharpStation" "Content"     (fun tmp -> tmp.Content     )
                    |> hookVar "FSharpStation" "fileName"      (fun tmp    -> tmp.Filename                    )
                    |> hookVar "FSharpStation" "SnippetName"   (fun tmp    -> tmp.Name                        )
                    |> hookVar "FSharpStation" "Output"        (fun tmp    -> tmp.Output                      )
                    |> hookVar "FSharpStation" "Parser"        (fun tmp    -> tmp.Parser                      )
                    |> hookViw "FSharpStation" "FSCode"        (fun tmp vw -> tmp.FSCode (Var.Make vw ignore) )
                    |> hookViw "FSharpStation" "SaveNeeded"    (fun tmp    -> tmp.SaveAsClass                 )
                    |> hookAct "FSharpStation" "SaveAs"        (fun tmp    -> tmp.SaveAs                      )
                    |> hookDoc "FSharpStation" "editor"        (fun tmp    -> tmp.CodeEditor                  )
                    |> hookDoc "FSharpStation" "Snippets"      (fun tmp    -> tmp.Snippets                    )            
                    |> hookDoc "FSharpStation" "Properties"    (fun tmp    -> tmp.Properties                  )            
                    |> hookDoc "FSharpStation" "ButtonsRight"  (fun tmp    -> tmp.ButtonsRight                )            
                    |> (fun tmp -> tmp.Doc())
        
            
            [< WebSharper.Sitelets.Website >]    
            let mainProgram() =
                AF.addPlugIn {
                    AF.plgName    = "FSharpStation"
                    AF.plgVars    = [| AF.newVar  "fileName"        LoadSave.fileName
                                       AF.newVar  "SnippetName"     (Lens Snippets.currentSnippetV.V.snpName)
                                       AF.newVar  "Content"         (Lens Snippets.currentSnippetV.V.snpContent)
                                       AF.newVar  "Output"          outputMsgs
                                       AF.newVar  "Parser"          FStation.annotationsV
                                    |]  
                    AF.plgViews   = [| AF.newViw  "FsCode"          Snippets.FsCodeW
                                       AF.newViw  "SaveNeeded"      Snippets.SaveAsClassW
                                       AF.newViw  "CurrentPath"     Snippets.currentPathW
                                    |]  
                    AF.plgDocs    = [| AF.newDoc  "mainDoc"         (lazy mainDoc()                 )
                                       AF.newDoc  "editor"          (lazy (WebSharper.UI.Html.div [] [ Monaco.getEditorConfigO() |> Option.map Monaco.render |> Option.defaultValue Doc.Empty ]) )
                                       AF.newDoc  "Snippets"        (lazy RenderSnippets  .render() )
                                       AF.newDoc  "Properties"      (lazy RenderProperties.render() )
                                       AF.newDoc  "ButtonsRight"    (lazy buttonsRight           () )
                                    |]  
                    AF.plgActions = [| AF.newAct  "AddSnippet"      Snippets.newSnippet
                                       AF.newAct  "RemoveSnippet"   deleteSnippet       
                                       AF.newAct  "IndentIn"        Snippets.indentIn       
                                       AF.newAct  "IndentOut"       Snippets.indentOut
                                       AF.newAct  "AddProperty"     RenderProperties.addProperty
                                       AF.newAct  "SaveAs"          LoadSave.saveAs
                                       AF.newAct  "RunFS"           runFsCode
                                       AF.newAct  "AbortFsi"        FsiAgent.abortFsiExe
                                       AF.newAct  "DisposeFsi"      FsiAgent.disposeFsiExe
                                       AF.newActF "LoadFile"        <| AF.FunAct1 ((fun o -> unbox o |> LoadSave.loadTextFile   ), "FileElement")
                                       AF.newActF "Import"          <| AF.FunAct1 ((fun o -> unbox o |> Importer.importFile     ), "FileElement")
                                       AF.newActF "JumpTo"          <| AF.FunAct1 ((fun o -> unbox o |> JumpTo.jumpToRef        ), "textarea"   )
                                       AF.newActF "ButtonClick"     <| AF.FunAct1 ((fun o -> unbox o |> CustomAction.buttonClick), "button"     )
                                       AF.newActF "ActionClick"     <| AF.FunAct1 ((fun o -> unbox o |> CustomAction.actionClick), "name"       )
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
                    btnAddSnippet    button FSharpStation.AddSnippet     ""                  "Add Snippet   "
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
                |> LayoutEngine.newLyt FStationLyt
                |> LayoutEngine.addLayout
        
                Snippets.currentLayoutJSDW
                |> View.consistent
                |> View.Sink(fun lytO ->
                    lytO
                    |> Option.iter (fun (sid, js) ->
                        try
                            JavaScript.JS.Apply JavaScript.JS.Window "eval" [| "CIPHERSpaceLoadFilesDoAfter(function(){IntelliFactory.Runtime.Start()})" |]
                            JavaScript.JS.Apply JavaScript.JS.Window "eval" [| js                                                          |]
                        with e -> print e
                    )
                )
        
                Snippets.currentLayoutDW
                |> View.consistent
                |> View.Sink(fun lytO ->
                    lytO
                    |> Option.bind (fun (name, txt) ->
                        txt 
                        |> LayoutEngine.newLyt    name
                        |> LayoutEngine.addLayout 
                        if txt = "" then None else 
                        Some name
                    )
                    |> Option.defaultValue FStationLyt
                    |> AF.mainDocV.Set
                )
        
                async {
                  do! Monaco.loader
                  //WcSplitter.init horizontal vertical
                  //WcTabStrip.init()
                  let editor = Monaco.getEditorConfigO() |> Option.map Monaco.render |> Option.defaultValue Doc.Empty
                  return AF.getMainDoc.Value
                } |> Doc.Async
        
        
        //#define FSS_SERVER
        module Messaging =
            open FStation
            open FusionM
            open Operators
            open MainProgram
        
            open FsRoot
            module AF = AppFramework 
        
            let wsStationClient = if IsClient then new WebSockets.WSMessagingClient(FStation.id) else new WebSockets.WSMessagingClient("FStation.id", WebSockets.FSStation)
        
            let actionCall actN p1 p2 = fusion {
                match actN |> AF.splitName FStationLyt ||> AF.tryGetAct with
                | None     -> return! ofResultRM <| Error (ErrorMsg (sprintf "Action %s not found" actN) )
                | Some act -> AF.callFunction p1 p2 act.actFunction
                              return FSResponse.RespString "Ok"
            }
        
        
            let processMessage (msg: FSMessage) : Async<Result<FSResponse,ResultMessage<string>>>= 
                fusion {
                    match msg with
                    | MsgGetId                          -> return  RespString FStation.id
                    | MsgGetSnippets               snrs -> let!    snps = snrs |> FusionM.traverseSeq Snippet.snippetFromRefORm
                                                           return  snps |> Seq.choose id |> Seq.toArray |> RespSnippets
                    | MsgGetCode                   snr  -> Snippets.clearPredsCache ()
                                                           let!    snp  = Snippet.snippetFromRefORm snr |> absorbO (fun () -> ErrorMsg <| sprintf "Snippet not found %A" snr)
                                                           return! Snippet.fastCodeRm (Some snp.snpId) (Some snp.snpId) |>> fst |>> RespString
                    | MsgGetPredecessors           snr  -> Snippets.clearPredsCache ()
                                                           return  Hole ? TODO_GetPredecessors
                    | MsgAction [| "AddOutput" ; txt |] -> appendMsgs txt
                                                           return  FSResponse.RespString "Ok"
                    | MsgAction [| "ExecJS"    ; js  |] -> let v = JS.Apply JS.Window "eval" [| js |] |> function null -> "" |s->s 
                                                           return  FSResponse.RespString "Ok"
                    | MsgAction [| "SetProperty"; path ; prop ; v  |] -> 
                                                           let! res  = Snippet.snippetFromRefORm (RefSnippetPath <| path.Split '/')
                                                                       |>> Option.map (fun snp -> Snippets.setProperty snp prop v ; "Ok")
                                                                       |>  absorbO (fun () -> ErrorMsg <| sprintf "Snippet not found: %s" path)
                                                           return  FSResponse.RespString res
                    | MsgAction [| actN              |] -> return! actionCall actN () ()
                    | MsgAction [| actN ; p1         |] -> return! actionCall actN p1 ()
                    | MsgAction [| actN ; p1 ; p2    |] -> return! actionCall actN p1 p2
                    | MsgGetUrl                         -> return  FSResponse.RespString JS.Document.BaseURI
                    | _                                 -> return  Hole ?(sprintf "TODO message: %A" msg)
                } |> Snippets.runReaderResult |> Async.rtn
            
            if IsClient then
                async {
                    do! Async.Sleep 1000
                    while true do
                        try         wsStationClient.ProcessIncoming processMessage
                                    do! Async.Sleep 60000
                        with   e -> printfn "%s" e.Message
                                    do! Async.Sleep 1000
                } |> Async.Start
                
        
            if not IsClient then
                FsiAgent.setQueueHandlers (fun (txt:string)  -> txt.Replace(FsiEvaluator.endToken, "Done!") 
                                                                |> FSharpStationClient.sendOutput 
                                                                |> AsyncResult.iterS print print)
        //#r @"..\packages\Owin\lib\net40\Owin.dll"
        //#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
        //#r @"..\packages\Microsoft.Owin.Hosting\lib\net451\Microsoft.Owin.Hosting.dll"
        //#r @"..\packages\Microsoft.Owin.Host.HttpListener\lib\net451\Microsoft.Owin.Host.HttpListener.dll"
        //#r @"..\packages\WebSharper.Owin\lib\net461\WebSharper.Owin.dll"
        //#r @"..\packages\WebSharper.Owin\lib\net461\HttpMultipartParser.dll"
        //#r @"..\packages\Microsoft.Owin.StaticFiles\lib\net451\Microsoft.Owin.StaticFiles.dll"
        //#r @"..\packages\Microsoft.Owin.FileSystems\lib\net451\Microsoft.Owin.FileSystems.dll"
        
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
        
        
////-d:FSharpStation1543377169543 -d:WEBSHARPER
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
//#define FSharpStation1543377169543
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
            
            
            [< AutoOpen >]
            module Monads =
                module Seq =    
                    let rtn = Seq.singleton
                    let insertO  vSO              = vSO |> Option.map(Seq.map Some) |> Option.defaultWith(fun () -> rtn None)
                    let insertR (vSR:Result<_,_>) = vSR |> function | Error m -> rtn (Error m) | Ok v -> Seq.map Ok v
                    let absorbO  vOS              = vOS |> Seq.choose id
                    let absorbR  vOS              = vOS |> Seq.choose (function Ok v -> Some v |_-> None)
                    
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
                
                
                /// Taken from Nick Palladino's https://github.com/palladin/Eff
                [< AutoOpen >]
                module Eff =
                    open System
                
                    type Effect = abstract UnPack     : Lambda         -> Effect 
                    and  Lambda = abstract Invoke<'X> : ('X -> Effect) -> ('X -> Effect)
                
                    type Eff<'U, 'A when 'U :> Effect> = Eff of (('A -> Effect) -> Effect) 
                        with  member this.Cont = match this with Eff cont -> cont
                
                    type Done<'A>(v : 'A) =
                        member self.Value = v
                        interface Effect with member self.UnPack(_ : Lambda) : Effect = self :> _ //new Done<'A>(v) :> _
                
                    let inline rtn  v = Eff (fun k -> k v)
                    let bind  (f: 'a -> Eff<'U, 'b>) (effA: Eff<'U, 'a>) : Eff<'U, 'b> = 
                                        Eff (fun k -> 
                                                let (Eff effKa) = effA
                                                effKa (fun v -> 
                                                    let (Eff effKb) = f v
                                                    effKb k
                                                )
                                            )
                
                    module Eff =
                //        [< Inline "$effect.UnPack({FsRoot_Library_Monads_Eff_Lambda$Invoke:function(k) { return function(p) { return $loop(k(p)) }; }})" >]
                //        let unpack loop (effect:Effect) = effect.UnPack { new Lambda with member self.Invoke<'X> (k' : 'X -> Effect) =  k' >> loop }
                
                        type LambdaT(loop) =
                            interface Lambda with
                                member __.Invoke<'X> (k : 'X -> Effect) : ('X -> Effect) = k >> loop 
                        let unpack loop (effect:Effect) = effect.UnPack (new LambdaT(loop))
                        let done' (v :  'A) : Effect                           = new Done<'A>(v) :> _ 
                        let return' v  = Eff( fun _ -> done' v )
                        let run<'U, 'A when 'U :> Effect> (eff: Eff<'U, 'A>) : 'A =
                            match eff.Cont done' with
                            | :? Done<'A> as done' -> done'.Value
                            | v                    -> failwithf "Unhandled effect %A" v
                        let runResult<'U, 'A when 'U :> Effect> (eff: Eff<'U, 'A>) = 
                            try
                                match eff.Cont done' with
                                | :? Done<'A> as done' -> Ok done'.Value
                                //| v                    -> box v |> unbox<NoOp<_>> |> fun noop -> noop.K () |> loop
                                | v                    -> Error <| errorMsgf "Unhandled effect %A expecting" v //typedefof<'A>
                            with e -> 
                                Error <| ResultMessage.ExceptMsg(e.Message, e.StackTrace)
                
                
                    let inline map   f  m  = bind (f >> rtn) m
                    let inline apply fR vR = fR |> bind (fun f -> map f vR)
                    
                    [< AutoOpen >]
                    module Operators =
                        let inline (<*>) f v   = apply f v
                        let inline (|>>) v f   = map   f v
                        let inline (>>=) v f   = bind  f v
                        let inline (>>>) f g v = f v |>> g
                        let inline (>=>) f g v = f v >>= g
                        let inline rtn   v     = rtn    v
                    
                    let traverseSeq            f     sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                          Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq           sq = traverseSeq id sq
                    
                    let inline insertO    vvO               = vvO   |> Option.map(map Some) |> Option.defaultWith(fun () -> rtn None)
                    let inline insertR   (vvR:Result<_,_>)  = vvR   |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                    let inline insertFst (fst, vEf)         = vEf   |> map (fun v -> fst, v)
                    let inline insertSnd (vEf, snd)         = vEf   |> map (fun v -> v, snd)
                    
                    type EffBuilder() = 
                        member self.Zero      (                 ) = rtn ()
                        member self.Return    (v   :         'A ) = rtn v
                        member self.ReturnFrom(eff : Eff<'U, 'A>) = eff
                        member self.Bind      (eff, f           ) = bind f eff
                        member self.Combine (first : Eff<'U, unit>, second : Eff<'U, 'B>) : Eff<'U, 'B> =  self.Bind(first, fun () -> second)
                        member self.Delay (f : unit -> Eff<'U, 'A>) : Eff<'U, 'A> =  Eff (fun k -> let (Eff cont) = f () in cont k)
                    //    member inline __.Delay       f                  = f
                        member __.While(guard, body) =
                            let rec whileLoop guard body =
                                if guard() then body() |> bind (fun () -> whileLoop guard body)
                                else rtn   ()
                            whileLoop guard body
                        member this.TryWith   (body, handler     ) = Eff(fun k -> try body() |> function Eff(f) -> f k with e -> handler e |> function Eff(f) -> f k)
                        member this.TryFinally(body, compensation) = Eff(fun k -> try body() |> function Eff(f) -> f k finally   compensation()           )
                        member this.Using     (disposable, body  ) = //wrap(fun r -> using (disposable:#System.IDisposable) (fun u -> body u |> getFun <| r) )
                                    let body' = fun () -> body disposable
                                    this.TryFinally(body', fun () -> if disposable :> obj <> null then (disposable:#System.IDisposable).Dispose() )
                        member this.For(sequence:seq<_>, body) =
                            this.Using(sequence.GetEnumerator(),fun enum -> 
                                this.While(enum.MoveNext, 
                                    fun () -> this.Delay(fun () -> body enum.Current)))
                    
                    
                    let eff = new EffBuilder()
                    
                    module Reader = 
                        type Reader<'E> = inherit Effect
                        type Ask<'E>(k : 'E -> Effect) =
                            member self.K = k
                            interface Reader<'E> with
                                member self.UnPack(lambda : Lambda) : Effect = new Ask<'E>(lambda.Invoke<'E> k) :> _
                    
                        let ask<'U, 'E when 'U :> Reader<'E>>() : Eff<'U, 'E> = Eff (fun k -> new Ask<'E>(k) :> _)
                    
                        let rec readerHandler<'U, 'E, 'A when 'U :> Reader<'E>> (env:'E) (eff: Eff<'U, 'A>) : Eff<'U, 'A> = 
                            let rec loop : Effect -> Effect = function
                                | :? Ask< 'E> as ask   -> ask.K env          |>            loop 
                                | effect               -> effect             |> Eff.unpack loop 
                            Eff (fun doneK             -> eff.Cont Eff.done' |>            loop )
                    
                        type EffReader<'a> = inherit Reader<'a>
                    
                    module Rsl = 
                        type Rsl<'M> = inherit Effect
                    
                        type Fail<    'M>(v : 'M, k : unit -> Effect) =
                            member self.Value = v
                            member self.K     = k
                            interface Rsl<'M> with member self.UnPack(lambda : Lambda) : Effect = new Fail<    'M>(v, lambda.Invoke<unit> k) :> _
                    
                    
                        let fail<'U, 'M when 'U :> Rsl<'M>> (s:'M) : Eff<'U, unit> = Eff (fun k -> new Fail<    'M>(s, k) :> _)
                        let inline ofResult (res:Result<'a,'b>) : Eff<'c,'a> = eff {
                            match res with
                            | Ok    v   -> return v
                            | Error msg -> let! m = fail msg
                                           return box () |> unbox
                        }
                    
                        
                        let rec RslHandler<'U, 'M, 'A when 'U :> Rsl<'M>> (eff: Eff<'U, 'A>) : Eff<'U, _> = 
                            let rec loop (doneK:(Result<'A,'M>) -> Effect) : Effect -> Effect = function
                                | :? Done<    'A> as done' -> doneK (Ok    done'.Value)
                                | :? Fail<    'M> as fail  -> doneK (Error fail .Value)
                                | effect                   -> effect             |> Eff.unpack (loop doneK)
                            Eff (fun doneK                 -> eff.Cont Eff.done' |>             loop doneK)
                    
                        let inline absorbR     vvEf             = vvEf  |> bind ofResult
                        let inline absorbO   f vOEf             = vOEf  |> map (Result.ofOption  f) |> absorbR
                    
                module EffReaderRsl =
                    type EffReaderRsl<'read, 'err> = inherit Reader.Reader<'read> inherit Rsl.Rsl<'err>
                
                    let run                 rsc Ef = Ef |> Reader.readerHandler rsc |> Rsl.RslHandler |> (Eff.run : (Eff<EffReaderRsl<_,_>,_> -> _) )
                
                    let iter     fM f  v  m  = m |> map f |> run v |> fun vR -> vR |> Result.iter fM id
            /// Tree structure to implement a hierarchical user interface but using Eff Reader and Rsl monad
            module TreeEff =
            
                type Node<'I, 'Eff when 'Eff :> Effect> = {
                    id                : unit               -> 'I
                    isExpandedEf      : unit               -> Eff<'Eff, bool                 >
                    canHaveChildrenEf : unit               -> Eff<'Eff, bool                 >
                    childrenEf        : unit               -> Eff<'Eff, Node<'I, 'Eff> seq   >
                    pathEf            : unit               -> Eff<'Eff, 'I list              >  // list of parents excluding itself
                    parentOEf         : Node<'I, 'Eff> seq -> Eff<'Eff, Node<'I, 'Eff> option>
                    newChildrenEf     : Node<'I, 'Eff> []  -> Eff<'Eff, Node<'I, 'Eff>       >  // set new children, make sure to exclude children not listed and maintain the order of the children (if desirable)
                }
            
                let [<Inline>] inline toNode    (o: obj) = o :?> Node<_,_>
                let [<Inline>] inline toSeqNode  os      = os |> Seq.map toNode
            
                let rec listNodes level (nodes: Node<_,_> seq) =
                    nodes
                    |> Seq.map(fun node -> 
                        node.isExpandedEf() 
                        >>= (fun exp -> if exp then node.childrenEf() |>> Seq.toArray >>= listNodes (level + 1) else rtn Seq.empty)
                        |>> (fun nodes -> Seq.append [ node, level ] nodes)
                    ) 
                    |> sequenceSeq
                    |>> Seq.collect id
            
                let removeNode (node:Node<_,_>) nodes = eff { // better use version removeNode2
                    let! path = node.pathEf()
                    let rec chRemove (n:Node<_,_>) = eff {
                        if                  n.id() = node.id() then return  None
                        elif List.contains (n.id())  path      then return! n.childrenEf()
                                                                            |>> Seq.toArray
                                                                            |>> Seq.map chRemove 
                                                                            >>= sequenceSeq 
                                                                            |>> Seq.choose id 
                                                                            |>> Seq.toArray
                                                                            >>= n.newChildrenEf  
                                                                            |>> Some
                        else                                        return  Some n
                    }
                    return! nodes |> Seq.map chRemove |> sequenceSeq |>> Seq.choose id
                }
            
                let removeNodes p nodes = eff {
                    let rec folder pair (n:Node<_,_>) = eff {
                        let! children, noparent = pair
                        let! children2 = n.childrenEf() |>> Seq.toArray
                        let! ch, np = children2 |> Seq.fold folder (rtn ([], noparent) )
                        if p n then return (        children, ch @ np)
                               else let! xxx = n.newChildrenEf (ch |> Seq.rev |> Seq.toArray)
                                    return ( xxx :: children,      np)
                    }
                    let! res, noparent = nodes |> Seq.fold folder (rtn ([], []) )
                    return noparent @ res |> List.rev
                }
            
                let addNodeToSeq after p node (nodes:Node<_,_> seq)  =
                    seq [ for n in nodes do
                            if p n then
                                if after then yield n    ; yield node
                                else          yield node ; yield n
                            else              yield n
                    ]
                    
                let addToParent after p (node:Node<_,_>) (parent :Node<_,_>) (nodes:Node<_,_> seq)  = nodes |> addNodeToSeq after p node |> Seq.toArray |> parent.newChildrenEf
            
                let addSibling  after   (node:Node<_,_>) (sibling:Node<_,_>) (nodes:Node<_,_> seq) = 
                    let theSibling (n:Node<_,_>) = n.id() = sibling.id()
                    sibling.pathEf() >>= function
                    | [   ]          -> rtn <| addNodeToSeq after theSibling node nodes 
                    | parent :: path -> 
                    let rec mapAdd (n:Node<_,_>) =
                        if                  n.id() = parent then     n.childrenEf() |>> Seq.toArray >>= addToParent after theSibling node n
                        elif List.contains (n.id()) path    then     n.childrenEf() |>> Seq.toArray |>> Seq.map mapAdd >>= sequenceSeq |>> Seq.toArray >>= n.newChildrenEf 
                        else                                     rtn n
                    nodes |> Seq.map mapAdd |> sequenceSeq
            
                let tryFind p (nodes:Node<_,_> seq) = 
                    let rec folder resEf (node:Node<_,_>) =
                        resEf >>= function
                        | Some v -> rtn (Some v)
                        | None   ->
                        if p node then rtn <| Some node else 
                        node.childrenEf() >>= Seq.fold folder (rtn None)
                    nodes                 |>  Seq.fold folder (rtn None)
                    
                let tryFindId (id:'I) (nodes:Node<_,_> seq) = tryFind (fun n -> n.id() = id) nodes
            
                let moveToSibling after (node:Node<_,_>) (sibling:Node<_,_>) (nodes:Node<_,_> seq) = 
                    nodes
                    |>  removeNode node
                    >>= addSibling after node sibling
            
                let moveToSibling2 after (nodeId:'I) (siblingId:'I) (nodes:Node<_,_> seq) = eff {
                    let!  nodeO = nodes |> tryFindId nodeId
                    match nodeO with
                    | None         -> return  nodes
                    | Some node    ->
                    let!  siblingO = nodes |> tryFindId siblingId
                    match siblingO with
                    | None         -> return  nodes
                    | Some sibling -> return! moveToSibling after node sibling nodes
                }
            
                let addChild append (node:Node<_,_>) (parentN:Node<_,_>) (nodes:Node<_,_> seq) = eff {
                    let! path = parentN.pathEf()
                    let rec mapAppend (n:Node<_,_>) =
                        if   n.id() = parentN.id()       then 
                            if append                    then n.childrenEf() |>> Seq.toArray |>> swap Seq.append [ node ]                         |>> Seq.toArray >>= n.newChildrenEf
                            else                              n.childrenEf() |>> Seq.toArray |>>      Seq.append [ node ]                         |>> Seq.toArray >>= n.newChildrenEf
                        elif List.contains (n.id()) path then n.childrenEf() |>> Seq.toArray |>>      Seq.map mapAppend   >>= sequenceSeq |>> Seq.toArray >>= n.newChildrenEf
                        else                                  rtn n
                    return! nodes |> Seq.map mapAppend |> sequenceSeq
                }
            
                let indentNode (node:Node<_,_>) (nodes:Node<_,_> seq) = 
                    node.parentOEf nodes >>= function
                    | None        -> rtn nodes
                    | Some parent -> parent.childrenEf() |>> (Seq.toArray >> Seq.ofArray)
                    |>> Seq.takeWhile (fun              n -> node.id() <> n.id())
                    >>= Seq.fold      (fun newParentOEf n -> n.canHaveChildrenEf() >>= (fun can -> if can then rtn(Some n) else newParentOEf)) (rtn None)
                    >>= function
                    | None           -> rtn nodes
                    | Some newParent ->
                    nodes
                    |>  removeNode node 
                    >>= addChild true node newParent
            
                let outdentNode (node:Node<_,_>) (nodes:Node<_,_> seq) =
                    node.parentOEf nodes
                    |>> Option.map          (fun parent -> moveToSibling true node parent nodes )
                    >>= Option.defaultValue (rtn nodes)
                    
                let removeNodeOutdentChildren (node:Node<_,_>) (nodes:Node<_,_> seq) =
                    node.childrenEf()
                    |>> Seq.toArray
                    >>= Seq.fold (fun nodes node -> nodes >>= (outdentNode node) ) (rtn nodes)
                    >>= removeNode node
                    
                
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
        
            module TreeEff =
                open TreeEff
            
                type SnippetId = SnippetId of System.Guid with 
                    member x.Id = match x with SnippetId id -> id
                    static member Empty = SnippetId System.Guid.Empty
            
                type Snippet = {
                    snpId           : SnippetId    
                    snpName         : string
                    snpContent      : string
                    snpParentIdO    : SnippetId option
                }    
            
                type SnippetCollection = {
                    ordered          : Snippet seq
                    fetcher          : SnippetId -> Snippet Option
                }
            
                let readerFun f = Reader.ask() |> map f 
            
                module Snippet =
                    open System
                
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
                        }
                    let defaultSnippet              = {
                        snpId           = SnippetId <| System.Guid.Empty
                        snpName         = ""
                        snpContent      = ""
                        snpParentIdO    = None
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
                    let snippetOEf        sid = readerFun (fun { fetcher    = ftch } -> ftch sid                                               )
                    let parentOEf         snp = readerFun (fun { fetcher    = ftch } -> snp.snpParentIdO |> Option.bind ftch                   )
                    let childrenEf        sid = readerFun (fun { ordered    = snps } -> snps |> Seq.filter(fun s -> s.snpParentIdO = Some sid) )
                    let orderedEf         ()  = readerFun (fun { ordered    = snps } -> snps                                                   )
                    let snippetEf         sid = snippetOEf sid |> Rsl.absorbO (fun () -> sprintf "Snippet not found %A" sid |> ErrorMsg)
                    let snippetNameEf     sid = snippetEf  sid |>> (fun snp -> snippetName snp.snpName snp.snpContent)
                    let rec pathEf        sid = snippetOEf sid 
                                                |>> Option.map parentOEf 
                                                >>= insertO 
                                                |>> Option.bind id
                                                |>> Option.map (fun prn -> pathEf prn.snpId |>> fun rest -> prn.snpId :: rest ) 
                                                >>= insertO 
                                                |>> Option.defaultValue []
                    let snippetFromPathOEf pth = eff {
                        let! snps = orderedEf()
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
                    let levelEf           snp = 
                        let rec levelEf2 snp lv = eff {
                            let!  parentO = parentOEf snp
                            match parentO with
                            | None   -> return  lv
                            | Some p -> return! levelEf2 p (lv + 1)
                        }
                        levelEf2 snp 0
                    let ancestorsEf   snp = 
                        let rec  ancestorsEf2 snp lst = eff {
                            let! parentO = parentOEf snp
                            match parentO with
                            | Some p -> return! ancestorsEf2 p <| p::lst
                            | None   -> return  lst
                        }
                        ancestorsEf2 snp []
            
                let private snippets               = ListModel<SnippetId, Snippet> (fun s -> s.snpId)
                let private hierarchy              = Var.Create [||]
                let private generation             = Var.Create 5
                let private currentSnippetIdOV     = Var.Create (None:SnippetId option)
                let private codeSnippetIdOV        = Var.Create (None:SnippetId option)
                let private collapsedV             = Var.Create Set.empty
                
                let parentCache, clearParent       = Memoize.getStore()
                let clearCaches ()                 = clearParent()
                let snippetsColl                () = { ordered          = snippets.Value
                                                       fetcher          = snippets.TryFindByKey
                                                       }
                let handleError                 er = (er:ResultMessage<string>) |> string |> exn |> raise
                let iterReader                  Ef = Ef |> EffReaderRsl.iter handleError id (snippetsColl())
                let runReaderResult             Ef = Ef |> EffReaderRsl.run (snippetsColl()) 
                let runReader            handle Ef = Ef |> runReaderResult |> Result.defaultWith handle
                   
                let setCurrentSnippetIdO snpIdO    = currentSnippetIdOV.Set snpIdO
                let setSnippet                 snp = if snp.snpId.Id <> System.Guid.Empty then snippets.Add snp 
                let getSnippetsGen              () = snippets.Value, generation.Value, collapsedV.Value
            
                let getParentIdONotMemo      snpId = snippets.TryFindByKey snpId |> Option.bind(fun s -> s.snpParentIdO)
                let getParentIdO                   = getParentIdONotMemo |> Memoize.memoizeStore (fun () -> snd parentCache) 
                let rec isDescendantOf ancId snpId = if snpId = ancId  then false else
                                                     getParentIdO snpId
                                                     |> Option.map (fun prnId -> prnId = ancId || isDescendantOf ancId prnId)
                                                     |> Option.defaultValue false
            
                if IsClient then
                    hierarchy.View |> View.Map (Array.map (fun n -> n.id()) ) |> View.consistent |> View.Sink (fun ids ->
                        clearCaches()
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
                                                     |> View.Map2(fun _ -> TreeEff.listNodes 0 >> runReader handleError) collapsedV.View
                                                     |> View.Map (Seq.map (fun (tn,l) -> tn.id(), l) ) 
                                                     |> View.Map  Seq.toArray
                //let codeAndStartsEf            snp =  >>= Snippet.codeAndStartsEf 
                let currentPathW                   = currentSnippetW
                                                     |> View.Map (fun snp -> 
                                                            eff { 
                                                                let! path  = Snippet.pathEf snp.snpId
                                                                let! names = snp.snpId :: path |> traverseSeq Snippet.snippetNameEf
                                                                return names |> Seq.rev |> String.concat "/"
                                                            } |> runReader handleError)
            
                                                        
                let setChildrenEf snpId ch = eff {
                    let chIds = ch |> Array.map (fun s -> s.id())
                    snippets
                    |> Seq.filter (fun s -> s.snpParentIdO <> Some snpId && (chIds |> Array.contains s.snpId))
                    |> Seq.map    (fun s -> { s with snpParentIdO = Some snpId })
                    |> Seq.iter    setSnippet
                    snippets
                    |> Seq.filter (fun s -> s.snpParentIdO = Some snpId && (chIds |> Array.contains s.snpId |> not))
                    |> Seq.map    (fun s -> { s with snpParentIdO = None })
                    |> Seq.iter    setSnippet
                    clearCaches()
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
                        isExpandedEf       = fun () -> rtn (not <| Set.contains snpId collapsedV.Value)
                        canHaveChildrenEf  = fun () -> rtn true
                        childrenEf         = fun () -> Snippet.childrenEf snpId |>> Seq.map (fun snp -> treenode snp.snpId)
                        newChildrenEf      = fun ch -> setChildrenEf snpId ch   |>> fun () -> 
                                                       treenode      snpId
                        parentOEf          = fun _ns-> Snippet.snippetOEf snpId |>> Option.bind (fun x -> x.snpParentIdO) |>> Option.map treenode
                        pathEf             = fun () -> Snippet.pathEf snpId
                    }
                    
                let expandClassEf snpId =
                    Snippet.childrenEf snpId        >>= fun chs -> 
                    if Seq.isEmpty chs then rtn "" else
                    (treenode snpId).isExpandedEf() |>> fun exp -> 
                    if exp then "expanded" else "collapsed"
                
                let expandClassW snpId = snippets.View |> View.Map2 (fun _ _ -> expandClassEf snpId |> runReader handleError) collapsedV.View
                
                let deleteCurrentSnippet _ =
                    currentSnippetIdOV.Value
                    |> Option.iter (fun snpId ->
                        hierarchy.Value
                        |>  TreeEff.removeNodeOutdentChildren (treenode snpId)
                        |>> Seq.toArray
                        |>> hierarchy.Set
                        |>> fun () -> snippets.RemoveByKey snpId
                        |>  iterReader
                    )
                    
                let indentIn _ =
                    currentSnippetIdOV.Value
                    |> Option.iter(fun snpId ->
                        hierarchy.Value
                        |>  TreeEff.indentNode (treenode snpId)
                        |>> Seq.toArray
                        |>> hierarchy.Set
                        |>  iterReader
                    )
                       
                let indentOut _ =
                    currentSnippetIdOV.Value
                    |> Option.iter(fun snpId ->
                        hierarchy.Value
                        |>  TreeEff.outdentNode (treenode snpId)
                        |>> Seq.toArray
                        |>> hierarchy.Set
                        |>  iterReader
                    )
                       
                let moveNode fnid tnid =
                    hierarchy.Value
                    |>  TreeEff.moveToSibling2 false fnid tnid
                    |>> Seq.toArray
                    |>> hierarchy.Set
                    |>  iterReader
            
                let setSnippetsGen snps coll =
                    collapsedV.Set coll
                    snippets  .Set snps
                    snps 
                    |>  Seq.map(fun snp -> Snippet.parentOEf snp |>> function None -> Some snp |_-> None )
                    |>  sequenceSeq
                    |>> Seq.choose id
                    |>> Seq.map (fun snp -> treenode snp.snpId)
                    |>> Seq.toArray
                    |>> hierarchy.Set
                    |>  iterReader
            
                let addSnippetEf snp = 
                    snippets.Add snp
                    let hier = hierarchy.Value |> Seq.append [| treenode snp.snpId |]
                    currentSnippetIdOV.Value
                    |>  Option.map Snippet.snippetOEf |> insertO |>> Option.bind id
                    >>= function
                    | None     -> hier |> rtn
                    | Some sbl -> hier |> TreeEff.moveToSibling2 true snp.snpId sbl.snpId
                    |>> Seq.toArray
                    |>> hierarchy.Set
                    
                let newSnippet _ =
                    let snp = Snippet.New "" "" None
                    addSnippetEf snp
                    |>> fun () -> currentSnippetIdOV.Set (Some snp.snpId)
                    |>  iterReader
                    
                let toggleCollapse snpId =
                    if Set.contains snpId collapsedV.Value then Set.remove else Set.add
                    <| snpId
                    <| collapsedV.Value
                    |> collapsedV.Set
            
                let expandParents snpId =
                    Snippet.pathEf snpId
                    |>> (fun path -> collapsedV.Value - Set path |> collapsedV.Set)
                    |> iterReader
            
            module Window =
                open WebSharper.UI
                open WebSharper.UI.Html
            
                [< SPAEntryPoint >]
                let main() =
                    let rexV   = Var.Create """(Err|Warn|Info) \((\d+)\,\s*(\d+)\) - \((\d+)\,\s*(\d+)\)\: "([^"]+?)"\.""" //"
                    let parmsV = Var.Create "g"
                    let inputV = Var.Create "Err (1, 7) - (1, 12): \"This shows over there as an error\".\nWarn (2, 7) - (2, 12): \"This shows over there as a warning\".\nInfo (3, 7) - (3, 12): \"This shows over there as information\"."
                    div [] [
                        div [] [ div [] [ text "RegEx:"    ] ; Doc.InputAreaV [ attr.style "width: 1000px; height:80px " ] rexV.V   ]
                        div [] [          text "Options: "   ; Doc.InputV     [ attr.style "width: 700px"                ] parmsV.V ]
                        div [] [ div [] [ text "Input:"    ] ; Doc.InputAreaV [ attr.style "width: 1000px; height:80px " ] inputV.V ]
                        div [] [
                            View.Map3 (fun inp rx opt ->
                                ul [] 
                                   [ match inp with
                                     | REGEX rx opt m -> yield! m |> Array.map (text >> List.singleton >> (li [])) //|> Seq.map (fun x -> x :> Doc)
                                     | _              -> yield  text "<no match>" 
                                   ]
                                ) inputV.View rexV.View parmsV.View
                            |> Doc.BindView id
                        ]
                    ]
                    |> Doc.Run JS.Document.Body
            
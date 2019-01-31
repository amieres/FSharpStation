#nowarn "52"
////-d:FSS_SERVER -d:FSharpStation1548758124776 -d:WEBSHARPER
////#cd @"..\projects\StackOverflow\src"
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
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
//#r @"..\..\LayoutEngine\bin\LayoutEngine.dll"
//#r @"..\packages\Owin\lib\net40\Owin.dll"
//#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
//#r @"..\packages\Microsoft.Owin.Hosting\lib\net451\Microsoft.Owin.Hosting.dll"
//#r @"..\packages\Microsoft.Owin.Host.HttpListener\lib\net451\Microsoft.Owin.Host.HttpListener.dll"
//#r @"..\packages\WebSharper.Owin\lib\net461\WebSharper.Owin.dll"
//#r @"..\packages\WebSharper.Owin\lib\net461\HttpMultipartParser.dll"
//#r @"..\packages\Microsoft.Owin.StaticFiles\lib\net451\Microsoft.Owin.StaticFiles.dll"
//#r @"..\packages\Microsoft.Owin.FileSystems\lib\net451\Microsoft.Owin.FileSystems.dll"
//#nowarn "52"
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
                
            module Memoize =
            
                /// returns 3 functions:
                ///    checkO  : ('p->'v option) 
                ///    getOrAdd: ('p->('p->'v)->'v) 
                ///    clear   : (unit->unit)
                [<Inline>]
                let getStoreWithDict (cache: System.Collections.Generic.Dictionary<_, _>) =
                    let checkO v     = let mutable res = Unchecked.defaultof<_>
                                       let ok          = cache.TryGetValue(v, &res)
                                       if  ok then Some res else None
                    let store  v res = cache.[v] <- res
                                       res
                    let getOrAdd p f = checkO p |> Option.defaultWith (fun () -> f p |> store p )
                    (checkO, getOrAdd), cache.Clear
            
                /// creates a Dictionary to store memoized values
                /// returns 3 functions:
                ///    checkO  : ('p->'v option) 
                ///    getOrAdd: ('p->('p->'v)->'v) 
                ///    clear   : (unit->unit)
                [<Inline>]
                let getStore() = getStoreWithDict (System.Collections.Generic.Dictionary<_, _>() )
            
                /// Memoizes function f using the provided cache
                /// getCache() returns 1 function:
                ///    getOrAdd: ('p->('p->'v)->'v) 
                [< Inline >]
                let memoizeStore (getOrAdd:('key -> ('key -> 'value) -> 'value) ) f =
                    fun p -> getOrAdd p f
            
            
                /// Memoizes the function f using a Dictionary
                /// Returns the memoized function and a clear() function
                /// The dictionary can be reset using the clear() function
                [< Inline >]
                let memoizeResetable f =
                    let (check, getOrAdd), clear = getStore()
                    let memoF = memoizeStore getOrAdd f
                    memoF, clear
            
                /// Memoizes the function f using the provided Dictionary
                [<Inline>]
                let memoizeWithDict dict f =
                    let (check, getOrAdd), clear = getStoreWithDict dict
                    let memoF = memoizeStore getOrAdd f
                    memoF
            
                /// Memoizes the function f and returns Dictionary
                [<Inline>]
                let memoizeDict f =
                    let dict = System.Collections.Generic.Dictionary<_, _>() 
                    let (check, getOrAdd), clear = getStoreWithDict dict
                    let memoF = memoizeStore getOrAdd f
                    memoF, dict
            
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
                //        [< Inline "$effect.FsRoot_Library_Monads_Eff_Effect$UnPack({FsRoot_Library_Monads_Eff_Lambda$Invoke:function(k) { return function(p) { return $loop(k(p)) }; }})" >]
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
                    
                    module State = 
                        type State<'S> = inherit Effect
                        type Put<  'S>(v : 'S, k : unit -> Effect) =
                            member self.Value = v
                            member self.K = k
                            interface State<'S> with
                                member self.UnPack(lambda : Lambda) : Effect = new Put<'S>(v, lambda.Invoke<unit> k) :> _
                    
                        type Get<  'S>(k : 'S -> Effect) =
                            member self.K = k
                            interface State<'S> with
                                member self.UnPack(lambda : Lambda) : Effect = new Get<'S>(lambda.Invoke<'S> k) :> _
                    
                        let get<'U, 'S when 'U :> State<'S>> (    ) : Eff<'U, 'S  > = Eff (fun k -> new Get<'S>(k   ) :> _)
                        let put<'U, 'S when 'U :> State<'S>> (s:'S) : Eff<'U, unit> = Eff (fun k -> new Put<'S>(s, k) :> _)
                    
                        let rec stateHandler<'U, 'S, 'A when 'U :> State<'S>> (state: 'S) (eff: Eff<'U, 'A>) : Eff<'U, 'S * 'A> = 
                            let rec loop (doneK:'S * 'A -> Effect) (state:'S) : Effect -> Effect = function
                                | :? Done<'A> as done'  -> doneK (state, done'.Value)
                                | :? Put< 'S> as put    -> put.K ()           |>             loop doneK put.Value
                                | :? Get< 'S> as get    -> get.K state        |>             loop doneK state 
                                | effect                -> effect             |> Eff.unpack (loop doneK state)
                            Eff (fun doneK              -> eff.Cont Eff.done' |>             loop doneK state)
                    
                        let rec refHandler<'U, 'S, 'A when 'U :> State<'S>> (state: 'S) (eff: Eff<'U,'A>) : Eff<'U, 'A> = 
                            let valueRef = ref state
                            let rec loop : Effect -> Effect = function
                                | :? Put< 'S> as put     -> valueRef := put.Value
                                                            put.K ()           |>            loop 
                                | :? Get< 'S> as get     -> get.K !valueRef    |>            loop  
                                | effect                 -> effect             |> Eff.unpack loop
                            Eff (fun _                   -> eff.Cont Eff.done' |>            loop )
                    
                    
                    module GenericType =
                        open Microsoft.FSharp.Quotations
                        open Microsoft.FSharp.Quotations.Patterns
                    
                    //    let ( |GenericType|_| ) =
                    //        (* methodinfo for typedefof<_> *)
                    //        let tdo = 
                    //            let (Call(None,t,[])) = <@ typedefof<_> @>
                    //            t.GetGenericMethodDefinition()
                    //        (* match type t against generic def g *)
                    //        let rec tymatch t (g:Type) =
                    //            if t = typeof<obj> then None
                    //            elif g.IsInterface then
                    //                let ints = if t.IsInterface then [|t|] else t.GetInterfaces()
                    //                ints |> Seq.tryPick (fun t -> if (t.GetGenericTypeDefinition() = g) then Some(t.GetGenericArguments()) else None)
                    //            elif t.IsGenericType && t.GetGenericTypeDefinition() = g then
                    //                Some(t.GetGenericArguments())
                    //            else
                    //                tymatch (t.BaseType) g
                    //        fun (e:Expr<Type>) (t:Type) ->
                    //            match e with
                    //            | Call(None,mi,[]) ->
                    //                if (mi.GetGenericMethodDefinition() = tdo) then
                    //                    let [|ty|] = mi.GetGenericArguments()
                    //                    if ty.IsGenericType then
                    //                        let tydef = ty.GetGenericTypeDefinition()
                    //                        tymatch t tydef
                    //                    else None
                    //                else
                    //                    None
                    //            | _ -> None
                    
                    module Log = 
                        type Log<'S> = inherit Effect
                    
                        type LogEntry<'S>(v : 'S, k : unit -> Effect) =
                            member self.Value = v
                            member self.K     = k
                            interface Log<'S> with
                                member self.UnPack(lambda : Lambda) : Effect = new LogEntry<'S>(v, lambda.Invoke<unit> k) :> _
                    
                        let log<'U, 'S when 'U :> Log<'S>> (s:'S) : Eff<'U, unit> = Eff (fun k -> new LogEntry<'S>(s, k) :> _)
                        let logf fmt = Printf.ksprintf log<_, string> fmt
                        
                        open GenericType
                    
                        let rec pureLogHandler<'U, 'S, 'A when 'U :> Log<'S>> (eff: Eff<'U, 'A>) : Eff<'U, 'A * list<'S>> = 
                            let rec loop (s: list<'S>) (doneK:('A * list<'S>) -> Effect) : Effect -> Effect = function
                                | :? Done<    'A> as done' -> doneK (done'.Value, s)
                                | :? LogEntry<'S> as log   -> log.K ()           |>             loop (log.Value :: s) doneK 
                                | effect                   -> effect             |> Eff.unpack (loop s                doneK)
                            Eff (fun doneK                 -> eff.Cont Eff.done' |>             loop []               doneK)
                    
                        let rec consoleLogHandler<'U, 'S, 'A when 'U :> Log<'S>> (eff: Eff<'U, 'A>) : Eff<'U, 'A> = 
                            let rec loop : Effect -> Effect = function
                                | :? LogEntry<'S> as log     -> printfn "Log: %A" log.Value
                                                                log.K ()           |>            loop
                                | effect                     -> effect             |> Eff.unpack loop
                            Eff (fun _                       -> eff.Cont Eff.done' |>            loop )
                    
                        let rec ignoreLogHandler<'U, 'S, 'A when 'U :> Log<'S>> (eff: Eff<'U, 'A>) : Eff<'U, 'A> = 
                            let rec loop : Effect -> Effect = function
                                | :? LogEntry<'S> as log     -> log.K ()           |>            loop
                                | effect                     -> effect             |> Eff.unpack loop
                            Eff (fun _                       -> eff.Cont Eff.done' |>            loop )
                    
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
                    
                type ResultM<'v, 'm> = ResultM of Option<'v> * ResultMessage<'m>
                
                let inline OkM              v    = ResultM (Some v, NoMsg)
                let inline OkMWithMsg       v m  = ResultM(Some v, m)
                //let inline OkMWithMsgs      v ms = ms |> ResultMessage.reduceMsgs |> OkMWithMsg v
                
                let inline ErrorM             m  = ResultM (None  , m    )
                //let inline ErrorMWithMsgs     ms = ms |> ResultMessage.reduceMsgs |> ErrorM
                let (|OkM|ErrorM|)             r = match r with
                                                    | ResultM(Some v, m) -> OkM   (v, m)
                                                    | ResultM(None  , e) -> ErrorM e
                module ResultM =
                
                    type CheckError<'T> = CheckErrorF of ('T -> bool)
                    let checkError   () = CheckErrorF (fun _ -> true )
                    let checkErrorW  () = CheckErrorF (fun _ -> false)
                
                    let inline rtn                 v = OkM v
                    let inline rtnM                m = OkMWithMsg () m
                    let inline rtnr               vR = vR  |> Result.map OkM          |> Result.defaultWith       ErrorM
                    let freeMessage                r = r   |> function Ok v -> Ok v   | Error e -> ResultMessage.freeMessage e |> Error
                    let inline toResult            r = match r with
                                                       | ResultM(Some v, _) -> Ok     v
                                                       | ResultM(None  , e) -> Error  e
                    let inline toResultD           r = match r with
                                                       | ResultM(Some v, m) -> Ok    (v, m)
                                                       | ResultM(None  , e) -> Error  e
                    let toOption                   r = r   |> function ResultM (v,_) -> v
                    let defaultWith              f r = r   |> toResult |> Result.defaultWith   f
                    let defaultValue             d r = r   |> toResult |> Result.defaultValue  d
                    let map         f  (ResultM (v, m)) = ResultM (v |> Option.map f, m)
                    let mapMessage  fM (ResultM (v, m)) = ResultM (v, fM m)
                    let bind                  f    r = match r with
                                                       | ResultM(Some v, m) -> f v |> mapMessage (ResultMessage.addMsg m)
                                                       | ResultM(None  , e) -> ResultM(None  , e)
                    /// bind version that protects against exceptions
                    let bindP                 f    r = match r with
                                                       | ResultM(Some v, m) -> try f v |> mapMessage (ResultMessage.addMsg m)
                                                                               with  e -> ExceptMsg (e.Message, e.StackTrace) |> ErrorM
                                                       | ResultM(None  , e) -> ResultM(None  , e)
                    let bindM                 f    m = rtnM m |> bindP f
                
                    let check (CheckErrorF k) vR = vR |> function ResultM(Some _, m) when ResultMessage.isFatalF k m -> ErrorM m |_-> vR
                
                    /// map version that protects against exceptions
                    let inline mapP           f    m = bindP (f >> rtn) m
                    let iter                  fM f r = r   |> mapP f |> function | ResultM(Some (), m) -> () | ResultM(None, m) -> fM m  : unit
                    let get                        r = r   |>          defaultWith (string >> failwith)
                    let ofOption              f   vO = vO  |> Option.map OkM          |> Option.defaultWith (f >> ErrorM)
                    let ofResult                  vR = vR  |> rtnr
                    let insertO                  vRO = vRO |> Option.map(map Some)    |> Option.defaultWith(fun () -> OkM None)
                    let absorbO               f  vOR = vOR |> bindP (ofOption f)
                    let addMsg                  m  r = r |> mapMessage (ResultMessage.addMsg m)
                    let failIfFatalMsgF         f  r = r |> function OkM (v, m) when ResultMessage.isFatalF f m -> ErrorM m |_-> r
                    let failIfFatalMsg             r = r |> function OkM (v, m) when ResultMessage.isFatal    m -> ErrorM m |_-> r
                    let failIfFatalMsgW            r = r |> function OkM (v, m) when ResultMessage.isFatalW   m -> ErrorM m |_-> r
                    let (>>=)                    r f = bind f r
                    let rec    traverseSeq    f   sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                       Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq        sq = traverseSeq id sq
                        
                    
                    type Builder() =
                        member inline __.Return          x       = rtn  x
                        member inline __.ReturnFrom      x       =     (x:Result<_,_>)
                        member inline __.ReturnFrom      x       = rtnM x
                        member        __.Bind           (w , r ) = bindP  r w
                        member        __.Bind           (w , r ) = bindM  r w
                        member inline __.Zero           ()       = rtn ()
                        member inline __.Delay           f       = f
                        member inline __.Combine        (a, b)   = a |> bind b
                        member inline __.Run             f       = OkM () |> bindP f
                        member __.TryWith   (body, handler     ) = try body() with e -> handler     e
                        member __.TryFinally(body, compensation) = try body() finally   compensation()
                        member __.Using     (disposable, body  ) = using (disposable:#System.IDisposable) body
                        member __.While(guard, body) =
                            let rec whileLoop guard body =
                                if guard() then body() |> bind (fun () -> whileLoop guard body)
                                else rtn   ()
                            whileLoop guard body
                        member this.For(sequence:seq<_>, body) =
                            this.Using(sequence.GetEnumerator(),fun enum -> 
                                this.While(enum.MoveNext, 
                                    this.Delay(fun () -> body enum.Current)))
                                    
                    module Operators =
                        let inline (|>>) v f   = mapP  f v
                        let inline (>>=) v f   = bindP f v
                        let inline (>>>) f g v = f v |>> g
                        let inline (>=>) f g v = f v >>= g
                        let inline rtn   v     = rtn    v
                
                [< AutoOpen >]
                module ResultMAutoOpen =
                    open ResultM
                    
                    let resultM = Builder()
                    
                
                
                type AsyncResultM<'v, 'm> = Async<ResultM<'v, 'm>>
                
                /// A computation expression to build an Async<Result<'ok, 'error>> value
                module AsyncResultM =
                    let mapError fE v  = v |> Async.map (ResultM.mapMessage fE)
                    let freeMessage v  = v |> Async.map  ResultM.freeMessage
                
                    let rtn         v   = async.Return(OkM v  )
                    let rtnr        vR  = async.Return(ResultM.rtnr vR)
                    let rtnR        vR  = async.Return    vR
                    let rtnM        vM  = async.Return(ResultM.rtnM vM)
                    let rtnrA       vrA = vrA |> Async.map    ResultM.ofResult
                    let iterS  fE f vRA = Async.iterS (ResultM.iter fE f) vRA
                    let iterA  fE f vRA = Async.iterA (ResultM.iter fE f) vRA
                    let iterpS    f vRA = vRA |> iterS (ResultMessage.summarized >> print) f
                    let iterpA    f vRA = vRA |> iterA (ResultMessage.summarized >> print) f
                    let bind  (fRA:'a -> Async<ResultM<'b,'c>>)  (vRA: Async<ResultM<'a,'c>>) : Async<ResultM<'b,'c>>= async {
                        try 
                            let!  vR = vRA
                            match vR with
                            | OkM   (v, m) -> return! fRA   v |> Async.map (ResultM.addMsg m)
                            | ErrorM    m  -> return  ErrorM m
                        with  e -> return ExceptMsg (e.Message, e.StackTrace) |> ErrorM
                    }
                    let inline bindr  f a  = rtnr   a |> bind f : AsyncResultM<_,_>
                    let inline bindM  f a  = rtnM   a |> bind f : AsyncResultM<_,_>
                    let inline bindrA f a  = rtnrA  a |> bind f : AsyncResultM<_,_>
                    let inline bindR  f a  = rtnR   a |> bind f : AsyncResultM<_,_>
                    let inline map    f m = bind  (f >> rtn) m            
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
                    type AsyncResultMBuilder() =
                        member __.ReturnFrom vRA        : Async<ResultM<'v  , 'm>> =           vRA
                        member __.ReturnFrom vR         : Async<ResultM<'v  , 'm>> = rtnr      vR
                        member __.ReturnFrom vR         : Async<ResultM<unit, 'm>> = rtnM      vR
                        member __.ReturnFrom vR         : Async<ResultM<'v  , 'm>> = rtnR      vR
                        member __.ReturnFrom vR         : Async<ResultM<'v  , 'm>> = rtnrA     vR
                        member __.Return     v          : Async<ResultM<'v  , 'm>> = rtn       v  
                        member __.Zero       ()         : Async<ResultM<unit, 'm>> = rtn       () 
                        member __.Bind      (vRA,  fRA) : Async<ResultM<'b  , 'm>> = bind fRA  vRA
                        member __.Bind       (w , r )                              = bindr   r w
                        member __.Bind       (w , r )                              = bindM   r w
                        member __.Bind       (w , r )                              = bindR   r w
                        member __.Bind       (w , r )                              = bindrA  r w
                        member __.Combine   (vRA,  fRA) : Async<ResultM<'b  , 'm>> = bind fRA  vRA
                        member __.Combine   (vR ,  fRA) : Async<ResultM<'b  , 'm>> = bind fRA (vR  |> rtnR)
                        member __.Delay            fRA                             = fRA
                        member __.Run              fRA                             = rtn () |> bind fRA
                        member __.TryWith   (fRA , hnd) : Async<ResultM<'a  , 'm>> = async { try return! fRA() with e -> return! hnd e  }
                        member __.TryFinally(fRA , fn ) : Async<ResultM<'a  , 'm>> = async { try return! fRA() finally   fn  () }
                        member __.Using(resource , fRA) : Async<ResultM<'a  , 'm>> = async.Using(resource,       fRA)
                        member __.While   (guard , fRA) : Async<ResultM<unit, 'a>> = whileLoop guard fRA 
                        member th.For  (s: 'a seq, fRA) : Async<ResultM<unit, 'b>> = th.Using(s.GetEnumerator (), fun enum ->
                                                                                        th.While(enum.MoveNext,
                                                                                            th.Delay(fun () -> fRA enum.Current)))
                
                [<AutoOpen>]
                module AsyncResultMAutoOpen =
                    open AsyncResultM
                
                    let asyncResultM = AsyncResultMBuilder()
                
                    // Having Async<_> members as extensions gives them lower priority in
                    // overload resolution between Async<_> and Async<Result<_,_>>.
                    type AsyncResultMBuilder with
                    member __.ReturnFrom (vA: Async<_>     ) : Async<ResultM<_,_>> =           Async.map OkM vA
                    member __.Bind       (vA: Async<_>, fRA) : Async<ResultM<_,_>> = bind fRA (Async.map OkM vA)
                    member __.Combine    (vA: Async<_>, fRA) : Async<ResultM<_,_>> = bind fRA (Async.map OkM vA)
                
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
                
            
            ///    let ls = [ "d1d"; "a"; "b"; "c"; "a3a"; "b2b"; "c1c"]
            ///    
            ///    ls |> List.sortWith ( asc Seq.length)            |> print // ["a"; "b"; "c"; "dd"; "aa"; "bb"; "cc"]
            ///    ls |> List.sortWith (desc Seq.length &> asc (Seq.tryItem 1) &> asc  id) |> print // ["aa"; "bb"; "cc"; "dd"; "a"; "b"; "c"]
            ///    ls |> List.sortWith ( asc Seq.length &> desc id) |> print // ["c"; "b"; "a"; "dd"; "cc"; "bb"; "aa"]
            module SortWith =
                let asc   f    a b = compare (f a) (f b)
                let desc  f    a b = compare (f b) (f a)
                let (&>) c1 c2 a b = match c1 a b with 0 -> c2 a b | r -> r
            
    
    //#cd @"..\projects\StackOverflow\src"
    
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
    
    //#define WEBSHARPER
    
    [< JavaScript >]
    module StackOverflow =
        //#r "..\..\LayoutEngine\bin\LayoutEngine.dll"
        //#nowarn "1178" "1182" "3180" "52"
        
        [< AutoOpen >]
        module Templating =
            open WebSharper.UI.Templating
            let [< Literal >] rootdir = @"..\website"
        
            let [< Literal >] TemplatesFileName = rootdir + @"\Templates.html"
            type TemplateLib  = Template< TemplatesFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
        
            let [< Literal >] LoginFileName = rootdir + @"\Login.html"
            type TemplateLogin  = Template< LoginFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
        
            if IsClient then printfn "%s" TemplatesFileName
         
        type IdAliado = IdAliado of string
        
        type TipoAliado =
        | Master
        | Regular
        
        type Pais =
        | USA
        | Venezuela 
        | Argentina
        | OtroP of string
        
        type State =
        | Texas
        | Florida
        | OtroS of string
        
        type Territorio =
        | State of State
        
        type Emisor =
        | Pais       of Pais
        | Territorio of Territorio
        
        type Documento =
        | Pasaporte        of string
        | Cedula           of string
        | LicenciaConducir of string
        
        type Identificacion = {
            emisor    : Emisor
            documento : Documento
            emision   : Date
            vence     : Date
        }
        
        type Banco          = Banco of string
        type NumeroCuenta   = NumeroCuenta of string
        type RoutingNumber  = RoutingNumber of string
        type TipoCuenta     = 
        | Ahorro
        | Corriente
        | Otra of string
        type CuentaBancaria = {
            banco   : Banco
            tipo    : TipoCuenta
            numero  : NumeroCuenta
            routing : RoutingNumber
        }
        
        type StatusAliado =
        |   Activo
        | Inactivo
        
        type ConceptoPago =
        | PagoAfiliacion
        | PagoComision
        | Otro of string
        
        type Transaccion = {
            fechaPago      : Date
            ano            : int
            periodo        : int
            monto          : int
            idAliado       : IdAliado
            concepto       : ConceptoPago
            transaccion    : string
        }
        
        type TipoDireccion = 
        | Habitacion
        | Oficina
        | ServicioPostal
        | Otro of string
        
        type ZonaPostal = ZonaPostal of string
        
        type Direccion = {
            tipoDireccion : TipoDireccion
            linea1        : string
            linea2        : string
            ciudad        : string
            pais          : Pais
            zonaPostal    : ZonaPostal
        }
        
        type CorreoElectronico = EMail    of string
        type TipoTelefono =
        | Movil
        | Oficina
        | Habitacion
        | Voip
        
        type Telefono          = {
            tipoTelefono : TipoTelefono
            codigoPais   : int
            codigoArea   : int
            numero       : int
            mensajes     : bool
        }
        
        type Contacto =
        | Direccion         of Direccion
        | CorreoElectronico of CorreoElectronico
        | Telefono          of Telefono
        | Mensajeria        of string
        | PaginaWeb         of string
        | SocialMedia       of string
        
        type Nacionalidad = Pais of Pais
        type Genero =
        | Masculino
        | Femenino
        | Empresa
        
        type DatosPersonales = {
            titulo          : string option
            nombre1         : string
            nombre2         : string
            apellido1       : string
            apellido2       : string
            nacionalidad    : Nacionalidad
            genero          : Genero
            fechaNacimiento : System.DateTime
            contactos       : Contacto[]
        }
        
        type FormaPago =
        | CuentaBancaria of CuentaBancaria
        | TransferenciaElectronica of string
        
        type TipoMensaje = 
        | Alerta
        | Informacion
        | Saludo
        
        type Remitente =
        | Prozper
        | Aliado of IdAliado
        | OtroR  of string
        
        type Mensaje ={
            tipo      : TipoMensaje
            leido     : System.DateTime option
            fecha     : System.DateTime
            texto     : string
            remitente : Remitente
        }
        
        type Aliado = {
            id              : IdAliado
            idPadreO        : IdAliado option
            identificacion  : Identificacion []
            datosPersonales : DatosPersonales
            formasPago      : FormaPago []
            transacciones   : Transaccion []
            mensajes        : Mensaje     []
            isInternal      : bool
            status          : StatusAliado
            tipo            : TipoAliado
            fechaRegistro   : System.DateTime
            fechaStatus     : System.DateTime
            nReferidos      : int
            nRefActivos     : int
            nDescendientes  : int
            nDescActivos    : int
            comision        : int
            nivel           : int
        }
        
        type PremisasCalculo = {
            comisionReferidosRegular     : int
            comisionReferidosMaster      : int
            comisionDescendientesMaster  : int
            comisionDescendientesRegular : int
            montoAliliacion              : int
            numeroReferidosMaster        : int
            diaCorte1                    : int
            diaCorte2                    : int
        }
        
        let premisasCalculo = {
            comisionReferidosRegular     = 15
            comisionReferidosMaster      = 25
            comisionDescendientesMaster  = 25
            comisionDescendientesRegular =  0
            montoAliliacion              = 75
            numeroReferidosMaster        = 31
            diaCorte1                    = 15
            diaCorte2                    = 22
        }
        
        type Modelo = {
            idAliado      : IdAliado
            aliados       : Aliado []
            anoActual     : int
            periodoActual : int
            premisas      : PremisasCalculo
        }
        
        module Aliado =
            open Eff
            open Operators
        
            let periodoActualEf ()       =  State.get() |>> (fun modelo ->  modelo.anoActual, modelo.periodoActual     )
            let aliadoEf        ()       =  State.get() >>= (fun modelo ->  modelo.aliados 
                                                                            |> Array.tryFind (fun al -> al.id = modelo.idAliado)
                                                                            |> Result.ofOption (fun () -> sprintf "Cannot find aliado %A" modelo.idAliado )
                                                                            |> Rsl.ofResult)
        
            let statusActual ano mes al  =
                al.transacciones
                |> Array.tryFind (fun t -> t.idAliado = al.id 
                                        && t.ano      = ano
                                        && t.periodo  = mes
                                        && t.concepto = PagoAfiliacion)
                |> Option.map    (fun _ ->  Activo )
                |> Option.defaultValue    Inactivo
        
            open System.Collections.Generic
        
            let premisas pre al =
                let comRef, comDes = match al.tipo  with
                                     | Regular -> pre.comisionReferidosRegular, pre.comisionDescendientesRegular
                                     | Master  -> pre.comisionReferidosMaster , pre.comisionDescendientesMaster
                match al.status with
                | Activo -> comRef, comDes
                | _      -> 0     , 0
        
            let comision pre al = 
                let comRef, comDes = premisas pre al
                al.nRefActivos * comRef, al.nDescActivos * comDes
        
            type Buscar = {
                hijosDe        : (IdAliado -> IdAliado [])
                nivelDe        : (IdAliado option -> int)
                aliado         : (IdAliado -> Aliado)
                aliadoO        : (IdAliado -> Aliado option)
                hijos          : (Aliado -> Aliado [])
                descendientes  : (Aliado -> Aliado [])
            }
        
            let busqueda aliados =
                let padres               = aliados 
                                           |> Seq.map(fun al -> al.idPadreO, al.id) 
                                           |> Seq.groupBy fst 
                                           |> Seq.map(fun (pO, ch) -> pO, ch |> Seq.map snd |> Seq.toArray) |> Map
                let aliadosMap           = aliados |> Seq.map (fun al -> al.id, al) |> Map
                let aliadoO          id  = match aliadosMap.TryGetValue id with
                                           | true, al -> Some al
                                           | _        -> None
                let aliado           id  = try aliadosMap.[id] with e -> failwithf "buscarAliado failed: %A" id
                let hijosDe          idO = match padres.TryGetValue (Some idO) with
                                           | true, hijos -> hijos
                                           | _           -> [||]
                let rec nivelDe      idO = idO |> Option.bind aliadoO |> Option.map (fun al -> 1 + nivelDe al.idPadreO) |> Option.defaultValue 0
                let hijos             al = hijosDe al.id |> Array.choose aliadoO
                let rec descendientes al =
                    [|
                        for h in hijos al do
                            yield                      h
                            yield! descendientes h
                    |]
                {
                    hijosDe       = hijosDe       
                    nivelDe       = nivelDe       
                    aliado        = aliado        
                    aliadoO       = aliadoO       
                    hijos         = hijos         
                    descendientes = descendientes 
                }
        
        
            let actualizarAliados modelo =
                let  buscar            = busqueda modelo.aliados
                let pre                = modelo.premisas
                let rec aliadoActualizado alid =
                    let al             = buscar.aliado alid
                    let hijos          = buscar.hijosDe al.id |> Seq.map aliadoActualizadoM |> Seq.cache
                    let status         = al.status //statusActual modelo.anoActual modelo.periodoActual al
                    let nReferidos     = hijos |> Seq.length
                    let nRefActivos    = hijos |> Seq.filter (fun al -> al.status = Activo && al.tipo = Regular) |> Seq.length
                    let nDescendientes = hijos |> Seq.sumBy  (fun al -> al.nDescendientes + al.nReferidos )
                    let nDescActivos   = hijos |> Seq.sumBy  (fun al -> al.nDescActivos   + al.nRefActivos)
                    let tipo           = if nRefActivos >= pre.numeroReferidosMaster then Master else Regular
                    let nivel          = 1 + buscar.nivelDe al.idPadreO
                    let al' =
                        { al with
                            status         = status
                            tipo           = tipo
                            nReferidos     = nReferidos    
                            nRefActivos    = nRefActivos   
                            nDescendientes = nDescendientes
                            nDescActivos   = nDescActivos  
                            fechaStatus    = System.DateTime.Now
                            nivel          = nivel
                        }
                    let comRef, comDes = comision pre al'
                    { al' with comision = comRef + comDes}
                and aliadoActualizadoM = Memoize.memoize aliadoActualizado
        
                modelo.aliados 
                |> Seq.map (fun al -> al.id)
                |> Seq.map aliadoActualizadoM
                |> Seq.toArray
        
            //let actualizarModelEf () = eff {
            //    let! modelo     = State.get()
            //    do! State.put { modelo with aliados = actualizarAliados modelo }
            //    ()
            //}
        
        
        [< JavaScript false >]
        module Sample =
            let data = """
        Alvarado, Rossana	Interview Group
        Andreac	Interview Group
        Bustamante, Patricia	Interview Group
        Calderon, Ailyn	Interview Group
        De Copello, Isbelia	Interview Group
        Life Beyond Borders	Interview Group
        Moya, Adelaida	Interview Group
        Nava, Jeylin	Interview Group
        Villarreal, Lola	Ocanto, Blas
        Zapata, Martha Liliana	Ocanto, Blas
        Ocanto, Blas	Interview Group
        Rendiles, Geline	Interview Group
        Abou Asaff, Amir	Segovia, Liseth
        Alejandra Espinoza, Maria	Segovia, Liseth
        Aleman, Robert	Segovia, Liseth
        ., Mabelis	Barreto, Bianeys
        Barreto, Bianeys	Segovia, Liseth
        Bracho, Julio	Segovia, Liseth
        Bukowitz, Silvia	Segovia, Liseth
        Ciccolella, Enzo	Segovia, Liseth
        Colmenares, Oscar	Segovia, Liseth
        Cortese, Enza	Segovia, Liseth
        Cristina Petrill, Maria	Segovia, Liseth
        De Los Angeles Pache, Maria	Segovia, Liseth
        Enrique Leal Jimenez, Walfredo	Segovia, Liseth
        Fernanda Pirela, Maria	Esperanza Rubiano, Maria
        Esperanza Rubiano, Maria	Segovia, Liseth
        Espina, Marien	Segovia, Liseth
        Espina, Sagrario	Segovia, Liseth
        Estrada, Sorena	Segovia, Liseth
        Fernanda Molero, Maria	Segovia, Liseth
        Fernandez, Lidiana	Segovia, Liseth
        Acosta, Francis	Garcia, Javier
        Eduardo Garcia, Javier	Garcia, Javier
        Orozco, David	Garcia, Javier
        Virginia Mago Beaufo, Maria	Garcia, Javier
        Garcia, Javier	Segovia, Liseth
        Glenn, Estepfanny	Segovia, Liseth
        Hans Rojas, Otto	Segovia, Liseth
        Leonarduzzi, Gianluca	Segovia, Liseth
        Martinez Noguera, Rossy	Segovia, Liseth
        Molleda, Marilyn	Segovia, Liseth
        Nardelli, Claudia	Molleda, Rosalyn
        Urdaneta, Dayana	Molleda, Rosalyn
        Villalobos, Andreus	Molleda, Rosalyn
        Molleda, Rosalyn	Segovia, Liseth
        Nayvely	Segovia, Liseth
        Olivieri, Giuseppe	Segovia, Liseth
        Pachano, Maria	Segovia, Liseth
        Paez, Endrys	Segovia, Liseth
        Paz, Misleny	Segovia, Liseth
        Pedroza, Manuel	Segovia, Liseth
        Perozo Romero, Liz	Segovia, Liseth
        Pina, Yanetsy	Segovia, Liseth
        Representaciones Continental Internacional 	Segovia, Liseth
        Romero, Roman	Segovia, Liseth
        Roo, Leonardo	Segovia, Liseth
        Soto, Ileana	Segovia, Liseth
        Suarez, Veronica	Segovia, Liseth
        Tepeyac Travel C.a	Segovia, Liseth
        Ucros, Luz	Segovia, Liseth
        Valbuena, Hilda	Segovia, Liseth
        Vasquez, Irvanis	Segovia, Liseth
        Segovia, Liseth	Interview Group
        A Menegaldo, Jose	V Boscan, Gretha
        Adolfo Velasquez De, Gustavo	V Boscan, Gretha
        Al Aaias, Feras	V Boscan, Gretha
        America Beck	V Boscan, Gretha
        Antunez, Victor	V Boscan, Gretha
        Arraiz, Jenniffer	V Boscan, Gretha
        Arribas, Francisco	V Boscan, Gretha
        Aseca Internacional 	V Boscan, Gretha
        Bastidas, Genesis	V Boscan, Gretha
        Alfredo Ocando, Luis	Belloso, Linaura
        Matos Villalobos, Sofia	Avila, Naivelin
        Avila, Naivelin	Belloso, Linaura
        Delgado, Rodolfo	Belloso, Linaura
        Herrera, Omar	Belloso, Linaura
        Martinez, Marielina	Belloso, Linaura
        Montiel, Mercedes	Belloso, Linaura
        Petit, Bianca	Belloso, Linaura
        Romero, Ana	Belloso, Linaura
        Belloso, Linaura	V Boscan, Gretha
        Belloso, Lizbecth	V Boscan, Gretha
        Boscan, Gretha	V Boscan, Gretha
        Briceno, Guido	V Boscan, Gretha
        Camacho, Clara	V Boscan, Gretha
        Cecilia Araguainamo, Maria	V Boscan, Gretha
        Cesar Tabares Ramire, Paulo	V Boscan, Gretha
        Dagnino, Patricia	V Boscan, Gretha
        David Rincon, Jose	V Boscan, Gretha
        Garces, Militza	V Boscan, Gretha
        Garcia, Andreina	V Boscan, Gretha
        Gonzalez, Maria	V Boscan, Gretha
        Guerrero, Karttier	V Boscan, Gretha
        Bracho, Monica	Hernandez, Alejandro
        Paz, Vanessa	Hernandez, Alejandro
        Hernandez, Alejandro	V Boscan, Gretha
        Hernandez, Valentina	V Boscan, Gretha
        Inciarte, Martin	V Boscan, Gretha
        Inciarte, Milagros	V Boscan, Gretha
        Iragorry, Eduardo	V Boscan, Gretha
        Jimenez, Graciela	V Boscan, Gretha
        Jose Gonzalez, Maria	V Boscan, Gretha
        Jose Negron Briceno, Egdo	V Boscan, Gretha
        Leal, Edith	V Boscan, Gretha
        Linares, Marcos	V Boscan, Gretha
        Machado, Mairim	V Boscan, Gretha
        Marina Sideregts, Luz	V Boscan, Gretha
        Martinez, Edgar	V Boscan, Gretha
        Martinez, Fernando	V Boscan, Gretha
        Matos, Humberto	V Boscan, Gretha
        Acosta, Patricia	Ocando, Ricardo
        Leon, Andres	Ocando, Ricardo
        Ocando, Andres	Ocando, Ricardo
        Perez, Alirio	Ocando, Ricardo
        Ocando, Ricardo	V Boscan, Gretha
        Osorio Tudares, Elizabeth	V Boscan, Gretha
        Ozuna, Marilen	V Boscan, Gretha
        Alvarado Leal, Yuneira	Requena, Franklin
        Andrea Avila, Maria	Requena, Franklin
        Castellanos, Jorge	Requena, Franklin
        Cruz, Ligmari	Requena, Franklin
        Monroy, Cindy	Requena, Franklin
        Sanchez, Anamaria	Requena, Franklin
        Requena, Franklin	V Boscan, Gretha
        Reyes, Gabriel	V Boscan, Gretha
        Veneturismo C.a	Romero, Anasofia
        Romero, Anasofia	V Boscan, Gretha
        Socorro, Elena	V Boscan, Gretha
        Soto, Gelinotte	V Boscan, Gretha
        Urdaneta, Fernando	V Boscan, Gretha
        Montiel, Maria	Zambrano, Aliana
        Zambrano, Aliana	Velasquez, Daniel
        Velasquez, Daniel	V Boscan, Gretha
        Velasquez, Elizabeth	V Boscan, Gretha
        Vicente Matos, Jose	V Boscan, Gretha
        Xiomara Morillo, Yris	V Boscan, Gretha
        Zerpa, Maiher	V Boscan, Gretha
        V Boscan, Gretha	Interview Group
        Interview Group	Prozper
            """
        
            let keys = """
        212 Universal Group
        America Travel Inc.
        Asegura International
        Barreto, Cesar
        Bianchi, Isabel
        Bracho, Willian
        Buloz Asesores De Se, Gamez
        Caribbean Life
        Caribbean Vacations By Cbinc
        Castro, Lizber
        Cma Global Partners
        Crown Consulting Av
        Crown Consulting Group
        Dream Of Liberty Llc
        Echeverria Seguros
        Erasmus Travel Assistance
        Everest International Group
        Family Global Care
        Global Axis 3000 Llc 
        Global Group
        Global Latinoamerica
        Global Solutions Services Llc
        Globalsi
        Guanchez, Kelly
        Guatemala Best Assurance
        Imna International Group
        Inprofis Group
        Interview Group
        Itp Travel
        Jaimes, ManuelDavid
        Jose Jimenez M, Maria
        Joubert, Johann
        Leonardo Colmenares, Jose
        Life And Health Global Group Lp
        Manzini, Flor
        Mas Ota
        Melian, Jennifer
        Orange Ta
        Orange Travel Assist Co
        Paez, Amaryllis
        Paseo Vacations
        Producers Financial Group 
        Protector Plan
        Quorum Corretaje De Seguros
        Rivas, Mireya
        Silva, Vaneska
        Stg Travel
        Suarez, Margarita
        Todo Seguros
        Uno, AgenteDe Prueba
        Unsiter
        Vega Corp
        Vitality Insurance
        Weston Travel Services
        Yv Travels
        305 Venezuela
        360 Travelers
        360 Travelers
        A Gonzalez R, JesÚs
        A Ocando, Ricardo
        A Rodriguez, Jesus
        A. Gomez, Pedro
        Abbate, Anibal
        Abc Travel
        Abilahoud, Luis
        Abiros Corp.
        Abp Advisors Llc
        Advanced Financial Partners
        Afredo Kretschmar Ri, Carlos
        Agencia Macs - Mauricio Alfonso
        Agencias Carlos Zapata
        Aguiar, Milagros
        Aguirre, Luisana
        Alargentina
        Alba Tours
        Alberto Bello Quijad, Julio
        Alejandra Arcay Corr, Maria
        Alexis Torres, Yury
        Alfonzo, Raquel
        Alpe Viajes
        Alse Group
        Alvarado, Lisbeth
        Alvarado, Rossana
        Alvarez, Elimar
        Alvarez, Luz
        Alvarez, Manuel
        Alzolay, Rossana
        Amena Corp
        Anais Delnardo International Group
        Andina Tour Ltda.
        Andrade, Mario
        Andrade, Reinardo
        Andreac
        Andreina Lopez, Maria
        Angelica Materan B., Ma.
        Angelicam
        Angulo, Fabiola
        Antares Viajes Y Turismo 
        Antonieta Zapata Rot, Maria
        Antonini, Victor
        Antonio Joseph Furia, Jose
        Antonio Urbina Ceden, Edgar
        Aredondo Seguros
        Arguinzones, Michell
        Ariza, Hilda
        Armando Garcia Perez, Adner
        Arturo Osorio Torne, Noel
        Aserfin Alliance
        Asesores Profesionales Del Turismo
        Asociacion De Golfistas Senior De Colombia
        Av1
        Av11
        Av19
        Av2
        Av21
        Av33
        Av34
        Av43 
        Av44
        Av56
        Av59
        Av69
        Av70
        Av75
        Av78
        Av81
        Av82
        Av83
        Av90
        Av94
        Av98
        Av99
        Aves Tours Ltda
        Azuaje, Daniel
        Barcha Trails Ltda
        Barrondo, Edurne
        Bart Travel, Vip
        Bautista, Ervis
        Bautista, Valeria
        Beacon Travel
        Belisa Traveling
        Benic, Yoris
        Bethke, Hildegard
        Bianchi Insurance Group
        Blanco, Alberto
        Blanco, Nadeska
        Blasioli Tedeschi, Antonionicolas
        Blaya Corredores De Seguros 
        Bolivia, Julio
        Booking Assistance
        Boos, Brent
        Boscan O, Maribel
        Boscan, Isabel
        Boscan, Katherine
        Boscan, Maribel
        Botello, Marco
        Bracamonte, Anais
        Bravo Alvarez, JoseRafael
        Briceno, Migdalia
        Buen Viento &amp; Buena Mar
        Buompatre, Judith
        Bustamante, Patricia
        C. Hadjian, Keny
        C.a .asesores De Seguros Y Riesgos
        Ca, Yo Soy Tu Asesor
        Cabrera Mesa, Antoniojose
        Calderon, Ailyn
        Camacho Parra, Alexisabraham
        Camacho, Victor
        Capital Assurance
        Caraballo, Miroslaba
        Cardenas, Maribel
        Caribbean Life No
        Carlos Venegas, Juan
        Carlosvgr
        Carrion, Marlene
        Casiero, Miguel
        Centro De Cruceros Sas
        Cerpa, Erika
        Chang, Jean
        Chim Lam, Gricel
        Choconta, Maryory
        Chuao Corp
        Cobo, Adonai
        Comparaonline Colombia
        Consorcio Isic
        Constanza Alvarado G, Ilse
        Contreras, Karen
        Coplan Salud
        Corban, Daniella
        Corona, Carlos
        Coronado &amp; Corporation 
        Corp Travel Colombia S.a.s
        Cristina Molina Caru, Yoseph
        Cruceros Selectos Internacionales Bog
        Cruceros Selectos Internacionales Sas
        Cruzando Fronteras
        Ctm - S.a.s
        Cvecuador
        D Rubio Blanco, Jessica
        D&amp;f International
        Daniel Aular Malave, Jorge
        Dario Montes Sanchez, Ruben
        Dary Duran Florez, Luz
        Davila S., Judith
        De Copello, Isbelia
        De Vida, Pan
        Del Nardo, Gracia
        Del Pilar Camargo, Maria
        Del Valle, Luathany
        Deluxe Reps Sas
        Diaz, Francia
        Dominguez, Elainer
        Doral Travel
        Dreams Travel, Ca
        Duxan&#039;s
        E Diaz, Omaira
        E Gonzalez S, Mercedes
        Edval Seguros
        Elias Flores Zerpa, Campo
        Elvira Lucena Colmen, Maria
        Enrique Gil Gutierre, Jorge
        Enrique Villegas Jim, Gonzalo
        Enterprise, Katsil
        Entrenamiento Colombia
        Envoys
        Esis, Omer
        Espino, Yajilke
        Espinoza, Marlene
        Estrada, Carmeneugenia
        Eugenia Altuve Brice, Maria
        Express Turismo &amp; Marketing
        Extravaganza Viajes Y Turismo
        Fenix Eventos Viajes Y Turismo
        Fernandez, Virginia
        Fernando Ortiz B., David
        Filice, MariaTeresa
        Florida Insurance Usa
        Fontana, Maria
        Fossi, Luis
        Francia Chile
        Franco, Pancho
        Frascione, Enza
        Fuenmayor, Eduardo
        G&amp;b Corredores De Seguros
        Gabriela Benezra, Maria
        Gabriela Sanguinetti, Maria
        Gannem, Omar
        Garces Jaramillo, JoseJaime
        Gaviria L., Liliana
        Gcali
        Gerencia Patrimonial
        Gilberto Roche Marqu, Daniel
        Global Advisors
        Global De Seguros
        Global Protection Advisers Ldt
        Globalsi Barquisimeto
        Globalsi Caracas
        Globalsi Maracaibo
        Globalsi Oriente
        Globalsi Valencia
        Godoy, Griset
        Goldman, Mauricio
        Gonzalez Coll, Francisco
        Gonzalez, Jimmy
        Gonzalez, Wissleyla
        Graciela Alzuru, Maria
        Gsc Asesoria Corporativa De Seguros
        Guanchez Col, Kelly
        Guanchez, Luis
        Guateasistencias
        Guerrero, Alianaamarilis
        Gustavo Espinoza Bos, Pedro
        Gutierrez Solano, Gerardo
        Gutierrez, Margarita
        Gutierrez, Nestor
        Guzman G., Suleyma
        Harmony Travels
        Hc Seguros
        Heras, Carlos
        Hernandez Bozo, Iria
        Hernandez Mederos, DouglasAntonio
        Hernandez, Cesar
        Herrera, Mauricio
        Herrera, Veronica
        Hidalgo, Gabriela
        Horizons Insurance And Financial Services Inc
        Hugo Morales Garcia, Victor
        Hung, Azael
        Idealtour Ltda
        Indaloasesores C,a
        Ines Luna, Maria
        Integra Mayorista
        Integral Group Solution Sas
        Integro AsesorÍas Y Servicios
        Inversiones Emenco Inc
        Isaac Fernandez, Anamercedes
        Isabel Bejarano, Maria
        It Representaciones Turisticas
        Javier Bracho, Eli
        Jesus, Romero
        Jimenez, Pedro
        Jiron, Carlos
        Jl Camejo Asesores De Seguros
        Joania Tours
        Jose Gomez Velasquez, Miguel
        Jose Gonzalez, Gustavo
        Jose Jimenez, Maria
        Jose Torrealba Ramir, Wilmer
        Jpg Associates
        Kristina Antonorsi Asegurate
        Kubler, Erika
        Kugler, Mariluz
        L&amp;m International
        Lairet, Santos
        Larrazabal, Andreina
        Leader Life
        Lechin Associates
        Leon, Evencio
        Lets Go Travel
        Levip
        Life Beyond Borders
        Lillys Travel Assist
        Lilue, Cynthia
        Lodeiro De Dopazo, Susana
        Lon, Martin
        Lopez Corredor De Se, Gustavo
        Lopez, Sherllys
        Loreto, Jorge
        Lugo, Julio
        Luis Chambuco, Jose
        Luis Della Sala, Jorge
        Luis Pena Agencia
        Luis Perez Pena, Pedro
        M Anton R, Jindy
        Madrugale.com
        Magallanes, Ana
        Malave, Yelitza
        Manuela Goncalves, Maria
        Maria Angarita C, Olga
        Maribel Ortiz Perez, Fulvia
        Marmol, Ninoska
        Martinez De Oropeza, Yanna
        Martinez, Eglee
        Martinez, JoseRaul
        Martinez, Rachel
        Mata Asesores, Machado
        Mata, Alejandro
        Mater Dei
        Medigases S.a.s
        Medina, Luis
        Megatiquete.com
        Melo, Fridel
        Melul, Salomon
        Mena, Lisbeth
        Meneses, Karina
        Mikkelson &amp; Gomez
        Milagros Pastran, Maria
        Minaya, Luissana
        Mjpp Vzla
        Mjs &amp; Asociados
        Mm Insurance 
        Molina Lovera, Rita
        Molina, Hania
        Molina, Janette
        Morales, Mariela
        Moya, Adelaida
        Mujica, Velis
        Mundial De Asistencias S.a.s
        Mundial De Cruceros 
        Nava, Jeylin
        Net Insurance Inc
        Netbrokers
        New Port Sas
        Now Insured
        Nunez Gonzalez, Isabel
        NuÑez, Oscar
        O&amp;j Agencia De Viaje Virtual 
        Ocanto, Blas
        Olivares Gil, AngelicaMaria
        Operando Viajes &amp; Turismo Ltda
        Orangereps
        Orangetravelcol
        Ordaz, Douglas
        Organizacion Park Way Viajes Y Turismo Sas
        Ortiz Corredor De Se, Eduardo
        Ospina Y., Elizabeth
        Otaiza Ferrer, Phyllys
        Pablo Hernandez Fons, Juan
        Pacheco, Ivory
        Padilla, Gustavo
        Panama, Evelyn
        Panamericana De Viajes
        Paqarina Go Travel S.a.s
        Paris Travel C.a
        Pelaez, Adriana
        Pena, Luis
        Penuela, Natalia
        Perez De Castillo, Eglee
        Peru, Karla
        Pina, Andreina
        Pirela, Lara
        Planchart, Celia
        Planes Turisticos.com
        Plazas, Sol
        Polanco, Oswaldo
        Prado, Marcel
        Preferred International&amp;associates
        Price Agencies
        Prius Reinsurance Brokers, N. V.
        Promotora Neptuno
        Protector Plan Av
        Quispe Vargas, Raul
        Rada, Gabriela
        Rahn, Kathleen
        Ramirez Sanchez, Carlosarturo
        Ramirez, Zuday
        Ramos, Emil
        Rangel, NaylethYoconda
        Ranuarez, Griselda
        Rendiles, Geline
        Representur Ltda
        Reserveya.com
        Resguarda Usa
        Reyes, Gladys
        Reyes, Oswaldo
        Rhino Travel Assist
        Rivas, Merly
        Rivero, Enania
        Rodil Sojo, Rosa
        Rodriguez Casado, Alonso
        Rodriguez, Fernando
        Rodriguez, Pavell
        Rojas, Deisy
        Rojas, R
        Rojas, Ricardo
        Rojask
        Romano, Filomena
        Romero Fajardo, Narmary
        Ros Diaz, Cristina
        Rosa Rodriguez, Maria
        Rosa Segovia Seg.
        Rosas, Monica
        Rosmarca Corp
        Rtravel
        Rubio, German
        Ruiz, Anamaria
        Ruta Gay Colombia S.a.s
        Saavedra Salcedo, Guillermo
        Saez, Carladaniela
        Sagarzazu Rodriguez, Carlosrafael
        Salazar Vergel, Marlon
        San Telmo Tours
        Sanchez, Alirio
        Sanchez, Williams
        Santa Cruz, Elisa
        Santana, Pablo
        Sarmiento Polo, Juliana
        Sat Mayorista
        Segovia, Liseth
        Segovia, Rosa
        Segura Arias, Carolina
        Seguros Chiapas
        Siempreco
        Sierra Barrios, Johan
        Sigma International Insurance Brokers
        Simon Hernandez Bozo, Luis
        Simon Ricardo, Lic
        Sira, Carlos
        Smm - Col
        Sol Travel Services
        Solorzano, Simon
        Soluciones Integrales Jtf
        Spg Travel S.a.s
        Stagno, Franchesca
        Stella Maris Turismo
        Stelluti, Enza
        T Corrente, Claudia
        Tarcisio Silva L, Darwin
        Ten Assist, Ten Assist
        The Gallery Travel 
        Tibari, Edmundo
        Tickets And Travel
        Tours Travel And Business Ltda
        Travel Alliances
        Travel Coach By Sa
        Travel Link S.a.s
        Treasure Viajes
        Triana, Alvaro
        Trip Ya, Orlando
        Trujillo, Patricia
        Tu Agente De Viajes Pzo
        Tu Agente Online
        Tudela, Andrea
        Turishuila S.a.s
        Turistas.com
        Tutiquete Express
        Umanchuk, Jorge
        V Boscan, Gretha
        Vacaciones Por El Mundo
        Valderrama, Natalia
        Valero, Yuraima
        Valles, Luis
        Vargas, Marbelys
        Vasquez, Karla
        Vc World Wide Group
        Velazco, Justiniano
        Velez Tours Sas
        Velice Financial Services Ltd
        Venesolution Corp.
        Venezuela Travel Assist
        Vespa, Luis
        Viaja Seguro
        Viajando Representaciones
        Viajes Country S.a.s
        Viajes Horizonte
        Viajes Meridiano Ltda
        Viajes Mora
        Viajes Oneresglobe Ca
        Viajes Y Eventos 360
        Vialibre
        Vieras, Mirtha
        Villaroel, Ricardo
        Villas Multiservices
        Villegas, Angelo
        Villegas, Enrique
        Villegas, JulioCesar
        Villegas, Mauricio
        Wheeler, Linda
        Yajure, Daniella
        Yaniris Gil Centeno, Ennys
        Yepez, Carlos
        Yisbel Torres Rodrig, Oneida
        Zambrano, Evelin
        Zapata Rotundo, Carlosfrancisco
        Zoturvenca
        Zubillaga Jimenez, Antoniojose
        ., Luzmary
        ., Montezelba
        A Menegaldo, Jose
        Abetancourt Seguros
        Abou Asaff, Amir
        Acevedo, Rosangely
        Acurero Mudafar, Elvis
        Adolfo Velasquez De, Gustavo
        Agencia, YouTravel
        Aguilar, Julio
        Aguilera, Patricia
        Aguilera, Syl
        Agutierrez Seguros
        Al Aaias, Feras
        Alacayo, Abigail
        Alejandra Espinoza, Maria
        Alejandra Tovar L., Maria
        Aleman, Robert
        Alfredo Matos, Jose
        Aliendres Ortega, RicciVinicia
        Almao, Marion
        Almao, Vanessa
        Alvarez, Margy
        Amado, Douglas
        Amador, Silvia
        Ambato Travel
        America Beck
        Angel, Fuentes
        Angelica PiÑero, Maria
        Antonio Zuloaga Yane, Ramon
        Antunez, Victor
        Araujo, Rolando
        Arc Seguros
        Arce Gomez, DouglasEulises
        Arguinzones, Alfredo
        Arias, Douglas
        Armas, Laura
        Arraiz, Jenniffer
        Arribas, Francisco
        Arroyo, Xioeli
        Artico Travel C.a 
        Arvelo, Haydi
        Aseca Internacional 
        Aurelis, Zamora
        Avilan, Marbelys
        Avilan, Oswaldo
        Avioteles
        Awak, Georges
        Aymerich 
        Baena, Andrea
        Baena, Silvia
        Bandres, Gloria
        Barreto, Bianeys
        Barrondo S., Maite
        Bastidas, Genesis
        Bello, Mariadela
        Belloso, Linaura
        Belloso, Lizbecth
        Belmonte, JoseGabriel
        Bermudez, Daniela
        Bermudez, Ligia
        Biztravel
        Blanco G, Mili
        Bonnefil L, Dominique
        Borges Insurance Ser, Bermudez
        Boscan, Gretha
        Bracho, Julio
        Brandt, Nerwill
        Brea Borges, Irving
        Briceno, Guido
        BriceÑo, Lorena
        Briceno, Marianela
        Briceno, Maribel
        Brito, Luis
        Buchin Insurance
        Bukowitz, Silvia
        Bulhosen, Yaccutt
        Burkert, Carmen
        Calima, Over
        Calvo, Luis
        Camacho, Clara
        Cantabriatur
        Cantunez Seguros
        Canualka Travel C.a
        Capobianco, Maria
        Caraballo, Mayerlin
        Carballido, Diego
        Cardona, Vivian
        Carolina Mendoza, Haydee
        Carrillo, Marlit
        Carrillo, Yesica
        Cartagena Travel &amp; Tours
        Castaneda De Daniel., Ana
        Castillo Travel
        Castillo, Alexandra
        Cecilia Araguainamo, Maria
        Cedeno, Karina
        Celi, JorgeL
        Centeno, Daniela
        Cesar Tabares Ramire, Paulo
        Christianm
        Ciccolella, Enzo
        Clarity
        Colmenares, Oscar
        Colon Travel
        Concepcion Hilders, Maria
        Concord Travel
        Contrataciones Turisticas
        Contreras, Daisy
        Coronado, Claudia
        Coronel
        Correa, Marianela
        Cortese, Enza
        Corti Guerrero, Carolina
        Credondo Seguros
        Cristina Pantoja
        Cristina Petrill, Maria
        Cundancin, Rubjuly
        Dagnino, Patricia
        Dao, Maria
        David Rincon, Jose
        De La Cruz, Sergio
        De La Rosa, Silvia
        De Los Angeles Pache, Maria
        De Olival, Diana
        De Oliveira, Maikel
        De Paz, Sabrina
        Delgado, Jessica
        Diaz
        Dib, Sheila
        Digitravel
        Dominguez, Monica
        Duarte, David
        Duque, Luz
        Duran, MarcosAgoturismo
        E, Maria
        Ecua Explorer
        Edg Mentors
        Eduardom
        Ee Seguros De Viaje
        El Principito Travel &amp; Services C.a
        Elatravel
        Elena Lilue, Maria
        Elena Villalobos Riv, Daisy
        Enrique Leal Jimenez, Walfredo
        Escalante, Annie
        Escobar, Angela
        Esperanza Rubiano, Maria
        Espina, Marien
        Espina, Sagrario
        Espinoza, Lisbeth
        Esther Andrade, Maria
        Estrada, Sorena
        Evasquez Seguros
        Fantasy Vacations Club, C.a.
        Febres, Jesus
        Fernanda Molero, Maria
        Fernandez, Frank
        Fernandez, Leonel
        Fernandez, Lidiana
        Fernandez, Zoraida
        Fernando Alizo, Luis
        Ferrer, Kathie
        Fineworld 
        Frias, Luis
        Frivas Seguros
        Gabriela Delgado, Maria
        Galem Travel
        Gallardo, Ana
        Gamboa, Dubraska
        Garces, Militza
        Garcia, Andreina
        Garcia, Antonio
        Garcia, German
        Garcia, Hermes
        Garcia, Jaime
        Garcia, Javier
        Garcia, Luis
        Garcia, Sebastian
        Garcia, Yaribet
        Garrido, Vaneska
        Gelves, Adrian
        Geronimo Perez, Luis
        Gerstel, Irma
        Ggonzalez Seguros
        Gil, Ana
        Ginestra, Noel
        Glenn, Estepfanny
        Gold Vip
        Golden Tours
        Goldman, David
        Gonzalez, Adriana
        Gonzalez, Auristela
        Gonzalez, Carlos
        Gonzalez, Maria
        Gonzalez, Yaneth
        Gregorio Silva Alvar, Jorge
        Grima, Marjorie
        Grupo Peru Viajes
        Guerra, Auristela
        Guerrero, Karttier
        Hans Rojas, Otto
        Hb Viajes
        He, WenlianWen
        Hernandez, Alejandro
        Hernandez, Lourdes
        Hernandez, Valentina
        Hernandez, Wilkerman
        Herrera, Bertha
        Hilario Gomez, Luis
        Hugo Santamaria Mila, Victor
        Huncrisr
        Hurtado, Domingo
        Idarraga, Isabel
        Iglesias, Miguel
        Ilumina Travel
        Imaginate Viajes
        Inciarte, Martin
        Inciarte, Milagros
        Invierta Seguros Corp
        Iragorry, Eduardo
        Iriarte, Joselyn
        Isasis, Emily
        Iturbe, Carlos
        Iventurella Seguros
        Izaguirre, Alex
        Jbarrington Seguros
        Jcaceres Seguros
        Jcastillo Seguros
        Jcermeno Seguros
        Jenny, Perozo
        Jhernandez Seguros
        Jimenez, Graciela
        Jimenez, Moises
        Jnc Tours
        Jose Gonzalez, Maria
        Jose Negron Briceno, Egdo
        Landaeta, Sonia
        Larez, Alcirelis
        Lbg Insurance
        Leal, Edith
        Leben Insurance Brokers
        Leon, Benny
        Leonarduzzi, Gianluca
        Lewisjime
        Lgil Seguros
        Linares, Marcos
        Lmartinez Seguros
        Lopez Zamora, Omar
        Lopez, Belkis
        Loyo, German
        Lozano, Desire
        Lozano, Marco
        Lsanchez
        Lsarmiento Seguros
        Machado, Mairim
        Manuel
        Marbel Travel Assist
        Maria, Suarez
        Marielba
        Marin Moncada, Nattaly
        Marin, Sandra
        Marina Sideregts, Luz
        Maritere
        Marliseth8aa
        Marmol, Victor
        Marquez Teran, Yolimar
        Martin Fakes &amp; Asociados
        Martin, Virginia
        Martinez Noguera, Rossy
        Martinez, Ambar
        Martinez, Edgar
        Martinez, Fernando
        Martinez, Javier
        Martinez, Yuly
        Marve Renta Car
        Marychinchilla
        Marzo C, Damian
        Massiani, Gustavo
        Master One
        Matilde Martin, Ester
        Matos, Humberto
        Maurera, Yanira
        Mauricio, Luis
        Maxi Tours
        Maxi Travel Assist
        Mcupare Seguros
        Medina, Alexis
        Medinas
        Melean, Mariela
        Mendez Corretaje
        Mercys Tours Ca
        Michelle Travel Assist
        Migueltravel
        Miki Travel
        Millan, Yusbeth
        Miranda, Alberto
        Mk Agencia De Viaje
        Mmarquez Seguros
        Mmillan
        Mmundarain Seguros
        Molleda, Marilyn
        Molleda, Rosalyn
        Monica Travel
        Montes, Carolina
        Monteverde, Mercedes
        Montoya, Patricia
        Morales, Alexandra
        Moraos, Anamercedes
        Moreno Asesor De Vid, Luis
        Mota, Luzmary
        Mpacheco
        Mujica, Damaris
        Mujica, Gabriela
        Mundirama
        Mundo Viajes
        Naser, Lilian
        Nass, Carlos ReneVillasmil
        Nayvely
        Nc Ferrer Seguros
        Newage Promotion
        Nievesa Tours S.a.c 
        Noguera, Angela
        Notaria
        Nucete, Rafael
        Nunez, Dulce
        Nunez, Ninoska
        Obrett Seguros
        Ocando, Ricardo
        Oceanic Travel
        Odriozola, Nekane
        Ojeda, Iranell
        Okarinac
        Olivieri, Giuseppe
        Ordaz, Andreina
        Oronoz, Yelitza
        Orta, Ailiva
        Osorio Tudares, Elizabeth
        Osuna Lopez, Sergio
        Ozuna, Marilen
        Pachano, Maria
        Padovan, Kathiuska
        Paez, Endrys
        Paez, Yasibit
        Pages, Jaime
        Palacios, Raquel
        Palma, Carlos
        Parraga, Rebeca
        Pascal, Tibisay
        Pasquale, Kenia
        Paul Ginestra, Jean
        Paula Esis, Maria
        Paulina Travel Assist
        Paz, Heliangelus
        Paz, Josie
        Paz, Misleny
        Pedroza Casas, Alfredo
        Pedroza, Manuel
        Pelaez, Josandra
        Peraza, Rebeca
        Perez Von Seggern, Ernesto
        Perez, Gustavo
        Perez, Mariluz
        Perez, Rebeca
        Perez, Urquia
        Perozo Romero, Liz
        Perozo, Jenny
        Pimentel, Isabel
        Pina, Yanetsy
        Pineda, Gledys GregoriaGutierrez
        Platinium Travel Llc
        Plaza, Isabela
        Ponte, Asia
        Portillo, Petra
        Prieto, Adolfo
        Princeturismo C.a.
        Qsuarez
        Quijada, Omary
        Quintanar, Ana
        Quovadis
        Rada, Desiree
        Rafael Gamus, Jose
        Ramirez, Angela
        Ramon Hernandez D, Orasil
        Ramos
        Rams Motors
        Regueiro Ignasi, Andreina
        Representaciones Continental Internacional 
        Requena, Franklin
        Reyes, Gabriel
        Reyna, Dubraska
        Rincon, Milagros
        Rios, Orangel
        Rivas, Rebeca
        Roble, Maria
        Robledo, Raquel
        Roblex Group
        Rodriguez, Alvaro
        Rodriguez, Eduardo
        Rodriguez, Ernesto
        Rodriguez, Jeannette
        Rojas, Carlos
        Rojas, Henry
        Rojas, Jose
        Rojas, Rosa
        Rojas, Roxana
        Roldan, Carolina
        Romero Zaffaroni, Carlos
        Romero, Adriannys
        Romero, Anasofia
        Romero, Roman
        Rondon, Virginia
        Roo, Leonardo
        Rovero, Sandra
        Roymar Viajes Y Turismo
        Rubio, CristinaDe
        Salamia, Lis
        Salazar, Ana
        Salazar, Gustavo
        Salazar, Lissett
        Salcedoc
        Salinas, MariaAmericana
        Salomon, Mauricio
        Samantha Farias
        Sanchez J, Ilcia
        Sanchez, Felix
        Sanchez, Juan
        Sanchez, Karem
        Sandra Del Valle Marin Int.
        Sanguino, Gregori
        Santa Paula Travel
        Santos, RicardoYagual
        Secura Group
        Serrano, Gabriela
        Shoda, Michelle
        Sibada, Marianny
        Siso, Susan
        Skyline Tours
        Socorro, Elena
        Solano, Madeleine
        Solutions Life
        Soto, Gelinotte
        Soto, Ileana
        Stella Berlingeri, Maris
        Suarez, Veronica
        Sue, Rafael
        Super Nice Renta Car
        Tepeyac Travel C.a
        Thamt
        The Dream Maker
        Time To Travel
        Tinoco Y Asociados
        Toro, Marisabel
        Torres, MiguelA
        Torres, RobertoGuarin
        Tovar, Ismael
        Tovar, Luirene
        Travel Kruiz
        Travel Live
        Ucros, Luz
        Ugarit
        Urbina, JuanCarlos
        Urdaneta, Fernando
        Urdaneta, Tahiry
        Valbuena, Hilda
        Valderrama Rosales, Nelly
        Vasquez, Irvanis
        Velasquez, Daniel
        Velasquez, Elizabeth
        Venezia Travel
        Viajes Royal Global
        Viaxum Travel Peru
        Vicente Matos, Jose
        Villamizar, Jonathan
        Villarreal, Lola
        Villegas, Laura
        Virginia Gonzalez, Maria
        Wilkermanp
        Xiomara Morillo, Yris
        Y. Brandt, Nerwill
        Yagual, ReynaAsesor
        Yaisi
        Yanes, Carmen
        Yanira Linares Marti, Karem
        Yelitzaoro
        Yvelice Silva Aguirr, Josefina
        Zadra, Juan
        Zamora, Aureliz
        Zapata, Martha Liliana
        Zdelgado Seguros
        Zerpa, Maiher
        Zhen, Shengquan
        Zulimart
        , Nelson
        ., Johana
        ., Mabelis
        ., Nuriluz
        Acero, Nicolay
        Acl Soluciones, C.a
        Acosta, Francis
        Acosta, Patricia
        Aerotravel
        Aeroworld Peru
        Afreites Seguros
        Agencia Esther Paez
        Alfonzo, Laura
        Alfredo Ocando, Luis
        Alvarado Leal, Yuneira
        Andrea Avila, Maria
        Andreina Dominguez R, Samantha
        Ann Shaw, Mery
        Arianysa
        Atencio, Carlos
        Avila, Naivelin
        Azuaje, Joselyn
        Barillas, Morena
        Bcd Travel - Turvisa Zona 10
        Bello, Pablo
        Beltran, Yolanda
        Benitez, Benjamina
        Black Miles
        Bob Travel 1 Inc
        Bonadies, Rafael
        Boscan, Ada
        Bracho, Monica
        Briceno &amp; Asociados
        Brivas Seguros
        C. Morello, Carmen
        Cabrera, Hector
        Campos, Oskarina
        Capo, Alonso
        Caraco, Cristina
        Carrero, Raul
        Castellanos, Jorge
        Castillejo, Andrew
        Cedeno, Joseluis
        Ceibal Tours
        Cespinoza Seguros
        Cianci, Assunta
        City Travel
        Cmoessati Seguros
        Colina, Karina
        Cordoba, Alejandro
        CorporaciÓn Cyl 22
        Costa Del Mar Travel And Services
        Cruz, Ligmari
        Da Costa, Mariela
        Davila, Sandra
        De Aguiar, Cesarina
        De Los Angeles Baden, Maria
        Delgado, Rodolfo
        Devora&#039;s Travel
        Diaz Otero &amp; Asociados
        Dmendez Seguros
        Eduardo Garcia, Javier
        Erodriguez Seguros
        Escalona, Carlos
        Estrada, Andres
        Exchange, Friendly
        Express Tours
        Falen Travel Agency
        Felipe Rodriguez, Ramon
        Fernanda Pirela, Maria
        Fertur Travel
        Galindez, Gilmerth
        Gdemma Seguros
        Gil, Dusady
        Gmalave Seguros
        Godoy, Gustavo
        Gonzalez, Raul
        Granes, Katty
        Guatemala Nature
        Gutierrez, Breddy
        Gutierrez, Emiro
        Halvarez Seguros
        Hernandez, Andrea
        Hernandez, Marisela
        Hernandez, Miguel
        Herrera, Omar
        Ibarra, Eduardo
        Inamet
        Insurance Agency Llc, Svalencia
        Jarace Seguros
        Jbrea &amp; Asociados
        Jimenez, Andreina
        Jimenez, Leomary
        JordoÑez Seguros
        Jose Amado, Douglas
        Jsalazar Seguros
        Karina Rojas, Karla
        Kenny Travel
        La Nusta
        Laneve, Rosa
        Latin Spirit Travel
        Leal, Alvaro
        Leal, Anauris
        Lebran 
        Leon, Andres
        Lguzman Seguros
        Lopez, Iscarel
        Lopez, Lignery
        Lores, Lis
        Los Campitos Tours
        Lpacheco
        Machado, Carlos
        Marquez, Angelica
        Marquis, Oscar
        Marte&#039;s Tax Services
        Martinez, Cris
        Martinez, Kisbel
        Martinez, Marielina
        Matos, Luis
        Maxima Travel
        Mendez, Deborah
        Meneses, Laura
        Merida Travel Services Llc
        Mluces Seguros
        Moncada, Carlos
        Monroy, Cindy
        Montiel, Mercedes
        Montiel, Veronica
        Morales, Mayra
        Morales, Nilfida
        Multidestinos
        Mundo Turismo
        Nancy´s Travel
        Nardelli, Claudia
        Natera, Zullyra
        Netcomtravel
        Norelikac
        Noriega &amp; Asociados
        Ocando, Andres
        Ochoa, Cesar
        Ochoa, Marianela
        Orozco, David
        Ortega, Erika
        Ortega, Marianella
        Pacheco, Mireya
        Palacios, Anamaria
        Paz, Vanessa
        Perdomo, Yanny
        Pereira &amp; Asociados
        Perez, Alberto
        Perez, Alirio
        Petit, Bianca
        Pinango, Olga
        Ponce, Ericson
        Prisko Tours
        Punto Ecuador
        Punto Multiservices
        Quinones, Nataly
        Regardiz, Eleumarys
        Renatours
        Renwick, Rafael
        Reyes, Jolbelys
        Rlengua
        Rodriguez, Ángel
        Rodriguez, Aura
        Rodriguez, Katia
        Rodriguez, Katiana
        Rodriguez, Leonardo
        Rojas, Morela
        Romero, Ana
        Romero, Sonia
        Ronel Tours
        Ruiz, Joe
        Rumbos Tours
        Salazar Alcala, Daniella
        Salcedo, Carmenvictoria
        Samara Tours
        Sanchez &amp; Asociados
        Sanchez, Anamaria
        Sanchez, Jim
        Seguros Krmaura
        Seguros, Lrivera
        Silva, Mariangela
        Soles, Lorena
        Suarez, Eoliberth
        Suarez, Neyma
        Surga, Jeannette
        Surga, Yelizta
        T&amp;h Multiservices
        Tours Y Eventos Vip
        Turismo Inkaiko
        Urdaneta, Dayana
        Utrera, Friendherlyn
        Vanegash, Robinson
        Vasquez, Cristobal
        Velasquez, Santiago
        Veneturismo C.a
        Viajes Panamericana
        Viajes Primavera
        Viajesjf
        Vicente Gonzalez Gar, Jose
        Villalobos, Andreus
        Villasmil, Ruthmary
        Virginia Mago Beaufo, Maria
        Viva Operador
        Volare
        Vuela Club
        Wilsons Travel And Services
        Zambrano, Aliana
        Alejandra Figueira, Maria
        Aracay Tours
        Campitos Tours
        Carolines Travel
        Matos Villalobos, Sofia
        Matos, Deyanira
        Montiel, Maria
        Pianezzola, Sandra
        Pineda, Marianyeli
        Rivero, Iskra
        Ruta Carlucci, Guiseppe
        Terrone Ruta, Nunzio
        Visbal, Debora
        Prozper
        """
        
            let statuss = """
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        """
        
            let getLines = String.splitByChar '\n'
                        >> Seq.map String.trim
                        >> Seq.filter ((<>) "")
        
            let statuses =
                Seq.zip (getLines keys) (getLines statuss) |> Map
        
            let aliados =
                getLines data
                |> Seq.map (String.splitByChar '\t')
                |> Seq.map (fun p -> p.[0], Seq.last p)
                |> Seq.map (fun (p1, p2) -> 
                    try statuses.[p1]
                    with e -> printfn "not found %A" p1 ; "INACTIVO"
                    , p1, p2)
                |> Seq.map (fun (sta, p1, p2) ->
                    let apellido, nombre, genero = 
                        match p1.Split ',' with
                        | [| ap ; nm |] -> ap.Trim(), nm.Trim(), Femenino
                        | _             -> ""       , p1.Trim(), Empresa
                    {
                        id              = IdAliado p1
                        idPadreO        = IdAliado p2 |> Some
                        identificacion  = [||]
                        datosPersonales = {
                                            titulo          = None
                                            nombre1         = nombre
                                            nombre2         = ""
                                            apellido1       = apellido
                                            apellido2       = ""
                                            nacionalidad    = Pais Venezuela
                                            genero          = genero
                                            fechaNacimiento = System.DateTime.Now
                                            contactos       = [||]
        
                        }
                        formasPago      = [||]
                        transacciones   = [||]
                        mensajes        = [||]
                        isInternal      = false
                        status          = if sta = "ACTIVO" then Activo else Inactivo
                        tipo           = Regular
                        fechaRegistro   = System.DateTime.Now
                        fechaStatus     = System.DateTime.Now
                        nReferidos      = 0
                        nRefActivos     = 0
                        nDescendientes  = 0
                        nDescActivos    = 0
                        comision        = 0
                        nivel           = 0
                    }
                )
        
            let modelo = {
                idAliado      = IdAliado ":"
                aliados       = aliados |> Seq.toArray
                anoActual     = 2019
                periodoActual = 1
                premisas      = premisasCalculo
            }
        
            //Aliado.actualizarAliados modelo
            //|> Seq.iter print
        
        
        //#define NOFMK --noframework
        [< JavaScript false >]
        module Rpc =
        
            let printResult operation arm = async {
                let! rm = arm
                printfn "%s %A" operation rm
                return! arm
            }
        
            let userIsAliado user al =
                al.datosPersonales.apellido1 = user
             || al.datosPersonales.nombre1   = user
        
            let checkUserPwd user password =
                if user <> password then false else
                if user = ""        then false else
                if user = "admin"   then true  else
                Sample.aliados |> Seq.exists (userIsAliado user)
        
            [< Rpc >]
            let loginUser (user:string) (password:string) : AsyncResultM<unit, string> = 
                let ctx = Web.Remoting.GetContext()
                asyncResultM {
                    if checkUserPwd user password then
                        do! ctx.UserSession.LoginUser user
                } (**)|> printResult "loginUser"
        
            [< Rpc >]
            let logoutUser ()  : AsyncResultM<unit, string> = 
                let ctx = Web.Remoting.GetContext()
                asyncResultM {
                    do! ctx.UserSession.Logout()
                } (**)|> printResult "logoutUser"
        
            [< Rpc >]
            let leerDataModelo() : AsyncResultM<Modelo, string> = 
                let  ctx  = Web.Remoting.GetContext()
                asyncResultM {
                    let! userO = ctx.UserSession.GetLoggedInUser()
                    match userO with
                    | None      ->  do! Error(ErrorMsg "User not logged in.")
                                    return Sample.modelo
                    | Some user ->
                    let aliados = Sample.modelo |> Aliado.actualizarAliados
                    let buscar = Aliado.busqueda aliados
                    if user = "admin" then return { Sample.modelo with aliados = aliados } else
                    let al = aliados |> Seq.find (userIsAliado user)
                    let subAliados = (if al.tipo = Master then buscar.descendientes else buscar.hijos) al
                    return { Sample.modelo with aliados = Array.append [| al |] subAliados }
                }
        
            [< JavaScript >]
            let iterA arm = AsyncResultM.iterA (ResultMessage.summarized >> JS.Alert) id arm
        module ModeloUI =
            let modeloV = Var.Create {
                idAliado      = IdAliado ":"
                aliados       = [||]
                anoActual     = System.DateTime.Now.Year
                periodoActual = System.DateTime.Now.Month
                premisas      = premisasCalculo
            }
        
            let rec separate s parts =
                match s with
                | "" -> parts |> String.concat ","
                | _  -> separate (s.Left -3) (s.Right 3 :: parts)
        
            let money (m:int) = "$" + separate (string m) []
        
        
        module RenderAliados =
            open SortWith
        
            let aliados() =
                let expandidos = Var.Create None
                let hijosDeO   = Var.Create None
        
                let hijosDe id = hijosDeO.Value |> Option.map (fun f -> f id) |> Option.defaultValue [||]
        
                let nombre dp = 
                    let titulo   = dp.titulo |> Option.map ((+) " ") |> Option.defaultValue ""
                    let apellido = if dp.apellido1 = "" then "" else dp.apellido1 + ", "
                    titulo + apellido + dp.nombre1 
                let referidos al =
                    if al.nReferidos = 0 then "-" else
                    sprintf "%d/%d" al.nRefActivos al.nReferidos
                let descendientes al =
                    if al.nDescendientes = 0 then "-" else
                    sprintf "%d/%d" al.nDescActivos al.nDescendientes
                let comision v = if v = 0 then "-" else ModeloUI.money v 
                let expandido id =
                    expandidos.View
                    |> View.Map (fun exp -> 
                        if hijosDe id |> Seq.isEmpty then "" else
                        if exp |> Option.map (Set.contains id) = Some true then "Expandido" else "Colapsado") 
                let expandir  id =
                    if expandidos.Value |> Option.map (Set.contains id) = Some true then Set.remove else Set.add
                        <| id 
                        <| (expandidos.Value |> Option.defaultValue Set.empty)
                    |> Some
                    |> expandidos.Set
                let seleccionar id = 
                    { ModeloUI.modeloV.Value with idAliado = id }
                    |> ModeloUI.modeloV.Set
                let sortAliados als =
                    let als = als |> Seq.sortWith (desc (fun al -> al.comision                       )
                                                &>  asc (fun al -> al.status                         )
                                                &> desc (fun al -> al.nRefActivos , al.nReferidos    )
                                                &> desc (fun al -> al.nDescActivos, al.nDescendientes)
                                                &>  asc (fun al -> nombre al.datosPersonales         ) )
                    let buscar = Aliado.busqueda als
                    hijosDeO.Set <| Some buscar.hijosDe
                    let nivel = try als |> Seq.map (fun al -> al.nivel) |> Seq.min with _ -> 1
                    let raiz = als |> Seq.filter (fun al -> al.nivel = nivel)
                    if raiz |> Seq.isEmpty then
                        expandidos.Set None
                    elif expandidos.Value.IsNone then
                        raiz |> Seq.map (fun al -> al.id) |> Set |> Some |> expandidos.Set
                        raiz |> Seq.map (fun al -> al.id) |> Seq.tryHead |> Option.iter seleccionar
                    let rec buscarExpandidos al = seq {
                        yield al
                        if expandidos.Value |> Option.map (Set.contains al.id) |> Option.defaultValue false then
                            for hijo in buscar.hijos al do
                                yield! buscarExpandidos hijo
                    }
                    seq {
                        for al in raiz do
                            yield! buscarExpandidos al
                    }
                
                TemplateLib.TablaAliados()
                    .TBody(
                        V ModeloUI.modeloV.V.aliados
                        |> View.Map2 (fun _ -> sortAliados) expandidos.View
                        |> Doc.BindSeqCachedViewBy (fun al -> al.id) (fun alid alv ->
                            TemplateLib.FilaAliado()
                                .nombre(              nombre        alv.V.datosPersonales)
                                .status(              sprintf "%A"  alv.V.status         )
                                .tipo(                sprintf "%A"  alv.V.tipo           )
                                .nivel(               string        alv.V.nivel          )
                                .referidos(           referidos     alv.V                )
                                .descendientes(       descendientes alv.V                )
                                .comision(            comision      alv.V.comision       )
                                .expandido(           expandido     alid                 )
                                .expandir(   fun _ -> expandir      alid                 )
                                .seleccionado( if alid = ModeloUI.modeloV.V.idAliado then "seleccionado" else "" )
                                .seleccionar(fun _ -> seleccionar   alid                 )
                                .Doc()
                        )
                    ).Doc()
        module RenderAliado =
        
            let alvO = View.Do {
                let! modelo = ModeloUI.modeloV.View
                return modelo.aliados |> Seq.tryFind (fun al -> al.id = modelo.idAliado )
            }
        
            let calculo() =
        
                let prem = V ModeloUI.modeloV.V.premisas
        
                let nombre dp = 
                    let titulo   = dp.titulo |> Option.map ((+) " ") |> Option.defaultValue ""
                    titulo + dp.nombre1 + " " + dp.apellido1
                let comision v = if v = 0 then "-" else sprintf "%5d$" v
                
                let alvO = 
                    let aliados = V ModeloUI.modeloV.V.aliados
                    let alid    = V ModeloUI.modeloV.V.idAliado
                    V (Seq.tryFind (fun al -> al.id = alid.V) aliados.V)
        
                let calculoDoc (alv: View<Aliado>) =
                    let comisionV = V (Aliado.comision prem.V alv.V)
                    let premisasV = V (Aliado.premisas prem.V alv.V)
                    TemplateLib.Calculo()
                        .referidos(        sprintf "%d"    alv.V.nReferidos                    )
                        .refActivos(       sprintf "%d"    alv.V.nRefActivos                   )
                        .comReferido(      sprintf "%d"   (alv.V.nRefActivos )                 )
                        .descendientes(    sprintf "%d"    alv.V.nDescendientes                )
                        .desActivos(       sprintf "%d"    alv.V.nDescActivos                  )
                        .comision(         ModeloUI.money (fst comisionV.V + snd comisionV.V ) )
                        .comReferido(      ModeloUI.money (fst comisionV.V                   ) )
                        .comDescendiente(  ModeloUI.money (snd comisionV.V                   ) )
                        .porReferido(      ModeloUI.money (fst premisasV.V                   ) )
                        .porDescendiente(  ModeloUI.money (snd premisasV.V                   ) )
                        .Doc() 
        
                alvO |> View.Map ( function
                    | Some al -> V (Option.get alvO.V) |> calculoDoc
                    | None    -> Doc.Empty
                ) |> Doc.BindView id
        
            let aliado() =
        
                let nombre dp = 
                    let titulo   = dp.titulo |> Option.map ((+) " ") |> Option.defaultValue ""
                    titulo + dp.nombre1 + " " + dp.apellido1
                let comision v = if v = 0 then "-" else sprintf "%5d$" v
                
                let aliadoDoc (alv: View<Aliado>) =
                    TemplateLib.Aliado()
                        .nombre(           nombre        alv.V.datosPersonales)
                        .status(           sprintf "%A"  alv.V.status         )
                        .tipo(             sprintf "%A"  alv.V.tipo           )
                        .contacto(         sprintf "%s@hotmail.com"  alv.V.datosPersonales.apellido1)
                        .Calculo(          calculo()                          )
                        .Doc() 
        
                alvO |> View.Map ( function
                    | Some al -> V (Option.get alvO.V) |> aliadoDoc
                    | None    -> Doc.Empty
                ) |> Doc.BindView id
        
        
        module MainProgram =
            open Templating
        
            open FsRoot
            module AF = AppFramework 
        
            let layoutName = "ProzperLyt"
        
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
        
            let mesToString =
                function
                |  1 -> "Ene"            
                |  2 -> "Feb"            
                |  3 -> "Mar"            
                |  4 -> "Abr"            
                |  5 -> "May"            
                |  6 -> "Jun"            
                |  7 -> "Jul"            
                |  8 -> "Ago"            
                |  9 -> "Sep"            
                | 10 -> "Oct"            
                | 11 -> "Nov"            
                | 12 -> "Dic"
                | _  -> "---"
        
            let logout () = 
                asyncResultM {
                    do! Rpc.logoutUser()
                    JS.Window.Location.Reload()
                } |> Rpc.iterA 
        
            [< WebSharper.Sitelets.Website >]    
            let mainProgram() =
                let titleV     = Var.Create "Prozper"
                let mesActualW = V (mesToString ModeloUI.modeloV.V.periodoActual )
                let anoActualW = V (string      ModeloUI.modeloV.V.anoActual     )
        
                AF.addPlugIn {
                    AF.plgName    = "Prozper"
                    AF.plgVars    = [| AF.newVar  "title"        titleV
                                    |]  
                    AF.plgViews   = [| AF.newViw  "mesActual"          mesActualW
                                       AF.newViw  "anoActual"          anoActualW
                                    |]  
                    AF.plgDocs    = [| AF.newDoc  "Aliados"        (lazy RenderAliados.aliados() )
                                       AF.newDoc  "Aliado"         (lazy RenderAliado .aliado () )
                                       AF.newDoc  "Calculo"        (lazy RenderAliado .calculo() )
                                    |]  
                    AF.plgActions = [| AF.newAct  "Logout"      logout
                                       //AF.newAct  "RemoveSnippet"   deleteSnippet       
                                       //AF.newAct  "IndentIn"        <| fun () -> model.selection.Value |> Option.map fst |> Option.iter (fun nid -> IndentNode(true , nid) |> processor)
                                       //AF.newAct  "IndentOut"       <| fun () -> model.selection.Value |> Option.map fst |> Option.iter (fun nid -> IndentNode(false, nid) |> processor)
                                       //AF.newAct  "AddProperty"     RenderProperties.addProperty
                                       //AF.newAct  "RunFS"           runFsCode
                                       //AF.newAct  "AbortFsi"        FsiAgent.abortFsiExe
                                       //AF.newAct  "DisposeFsi"      FsiAgent.disposeFsiExe
                                       //AF.newActF "LoadFile"        <| AF.FunAct1 ((fun o -> unbox o |> LoadTextFile |> processor  ), "FileElement")
                                       //AF.newActF  "SaveAs"          <| AF.FunAct1 ((fun o -> unbox o |> SaveTextFile |> processor  ), "FileElement")
                                       //AF.newActF "Import"          <| AF.FunAct1 ((fun o -> unbox o |> Importer.importFile     ), "FileElement")
                                       //AF.newActF "JumpTo"          <| AF.FunAct1 ((fun o -> unbox o |> JumpTo.jumpToRef        ), "textarea"   )
                                       //AF.newActF "ButtonClick"     <| AF.FunAct1 ((fun o -> unbox o |> CustomAction.buttonClick), "button"     )
                                       //AF.newActF "ActionClick"     <| AF.FunAct1 ((fun o -> unbox o |> CustomAction.actionClick), "name"       )
                                       //AF.newAct  "AddCalculation"  (fun () -> AddCalculation |> processor)
                                       //AF.newAct  "AddTotal"        (fun () -> AddTotal       |> processor)
                                       //AF.newAct  "AddDimension"    (fun () -> AddDimension   |> processor)
                                    |]
                    AF.plgQueries = [|                                               
                                    |]
                }
                match JS.Document.GetElementById("GlobalLayout") with
                | null ->
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
                | e -> e.TextContent
                |> LayoutEngine.newLyt layoutName
                |> LayoutEngine.addLayout
        
                None
                |> Option.defaultValue layoutName
                |> AF.mainDocV.Set
        
                asyncResultM {
                    let! data = Rpc.leerDataModelo()
                    ModeloUI.modeloV.Set data
                } |> Rpc.iterA
        
                TemplateLib()
                    .MainContent( AF.getMainDoc.Value )
                    .Bind()
                titleV.View |> View.Sink (fun t -> JS.Document.Title <- t)
                
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
        
            type Data = { Usuario: string ;  Password:string }
        
            type EndPointServer =  | [< EndPoint "/" >] EP
                                   | [< EndPoint "POST /demo" ; FormData >] DATA of Data
        
            let content (ctx:Context<EndPointServer>) (endpoint:EndPointServer) : Async<Content<EndPointServer>> =
                printfn "%A" endpoint
                match ctx.UserSession.GetLoggedInUser() |> Async.RunSynchronously with
                | Some user ->
                (**)printfn "Serving Main page: %s" user
                    Content.Page(
                        TemplateLib()
                            .Initializer( Html.client <@  MainProgram.mainProgram(); Doc.TextNode "Initialized" @> )
                            .Elt(keepUnfilled = true)
                    )
                | None ->
                (**)printfn "Serving Login page"
                    Content.Page(
                        TemplateLogin()
                            .Brand("Prozper") 
                            .madeby(    "CIPHERBsc")
                            .madebylink("cipherbsc.com")
                            .Login(fun e -> 
                                if e.Vars.Username.Value <> "" && e.Vars.Password.Value <> "" 
                                then asyncResultM {
                                        do! Rpc.loginUser e.Vars.Username.Value e.Vars.Password.Value
                                        JS.Window.Location.Reload()
                                     } |> Rpc.iterA 
                            ) 
                            .Doc()
                    )
        
            [< EntryPoint >]
            let Main args =
                printfn "Usage: FSharpStation URL ROOT_DIRECTORY MaxMessageSize"
                let url           = args |> Seq.tryItem 0 |>                   Option.defaultValue "http://localhost:9005/"
                let rootDirectory = args |> Seq.tryItem 1 |>                   Option.defaultValue @"..\website"
                let max           = args |> Seq.tryItem 2 |> Option.map int |> Option.defaultValue 1_000_000
                //let epWebSocket = Endpoint.Create(url, "/ws", JsonEncoding.Readable)
                //let broker = Broker.BrokerAgent epWebSocket
                //Broker.BrokerAgent.FssWebSocketO <- Some broker
                use server = WebApp.Start(url, fun appB ->
                    appB
                        .UseWebSharperRemoting(rootdir)
                        .UseWebSharper(WebSharperOptions(ServerRootDirectory = rootdir
                                                       , Sitelet             = (Some <| Application.MultiPage content)
                                                       , BinDirectory        = "."
                                                       , Debug               = true))
                        .UseStaticFiles(StaticFileOptions(FileSystem = PhysicalFileSystem(rootDirectory)))
                        //.UseWebSocket(  epWebSocket, broker.Start, maxMessageSize = max)
                    |> ignore)
                stdout.WriteLine("Listening on {0}, hit enter to finish", url)
                stdin.ReadLine() |> ignore
                0
        
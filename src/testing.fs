#nowarn "52"
////-d:FSharpStation1553156972976 -d:WEBSHARPER
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
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\LayoutEngine.dll"
//#nowarn "52"
/// Root namespace for all code
//#define FSharpStation1553156972976
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
                    let ofOption vO = 
                        match vO with
                        | Some v -> Seq.singleton v
                        | None   -> Seq.empty
                
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
                
                    let errorf fmt = Printf.ksprintf Error fmt
                
                    let freeMessage                r = r   |> function Ok v -> Ok v   | Error e -> ResultMessage.freeMessage e |> Error
                    let rtn                          = Ok
                    let join                       r = Result.bind id r
                    let flatten                    r = Result.bind id r
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
                        member inline __.ReturnFrom      x       =     (x:ResultM<_,_>)
                        member inline __.ReturnFrom      x       =     (x:Result< _,_>)
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
                
            
            module Array =
            
                /// Non-mutable element replace
                /// produces a new array with the new element
                let replace i item (array: _[]) = 
                    seq {
                        if i > 0            then yield! array.[.. i - 1]
                        yield item
                        if i < array.Length then yield! array.[i + 1 ..]
                    } |> Seq.toArray
            
                let remove i (array: _[]) = 
                    seq {
                        if i > 0            then yield! array.[.. i - 1]
                        if i < array.Length then yield! array.[i + 1 ..]
                    } |> Seq.toArray
            
            ///    let ls = [ "d1d"; "a"; "b"; "c"; "a3a"; "b2b"; "c1c"]
            ///    
            ///    ls |> List.sortWith ( asc Seq.length)            |> print // ["a"; "b"; "c"; "dd"; "aa"; "bb"; "cc"]
            ///    ls |> List.sortWith (desc Seq.length &> asc (Seq.tryItem 1) &> asc  id) |> print // ["aa"; "bb"; "cc"; "dd"; "a"; "b"; "c"]
            ///    ls |> List.sortWith ( asc Seq.length &> desc id) |> print // ["c"; "b"; "a"; "dd"; "cc"; "bb"; "aa"]
            module SortWith =
                let asc   f    a b = compare (f a) (f b)
                let desc  f    a b = compare (f b) (f a)
                let (&>) c1 c2 a b = match c1 a b with 0 -> c2 a b | r -> r
            
            module ParseO =
                let tryParseWith tryParseFunc = tryParseFunc >> function
                        | true, v    -> Some v
                        | false, _   -> None
            
            
                /// Javascript adds time zone information when parsing a date and that can change the result
                let parseDateO2  = (fun s -> s + "T00:00:00") >> tryParseWith System.DateTime.TryParse
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
                
        /// Essentials that cannot run in Javascript (WebSharper)
        [< AutoOpen >]
        module LibraryNoJS =
            let rec getNamespace (t:System.Type) =
                match t.DeclaringType with
                | null -> match t.Namespace with null -> "" | ns -> ns + "."
                | dt   -> getNamespace dt + dt.Name + "."
            
            let rec getTypeName (t:System.Type) =
                if t.IsArray then getTypeName (t.GetElementType()) + "[]" else
                let ns    = getNamespace t
                let name  = if   t.Name = "FSharpOption`1"                then "Option"
                            elif t.Name = "FSharpList`1"                  then "List"
                            elif ns     = "Microsoft.FSharp.Core."
                              || ns     = "Microsoft.FSharp.Collections." then t.Name   
                            else  ns + t.Name
                let name2 = name.Split('`').[0]
                let parms = t.GenericTypeArguments |> Seq.map getTypeName |> String.concat ","
                if parms = "" then name2 else sprintf "%s<%s>" name2 parms
            
            module DiscUnion =
                open FSharp.Reflection
            
                let simple<'U> =
                    FSharpType.GetUnionCases typeof<'U>
                    |> Seq.filter (fun c -> c.GetFields() |> Seq.isEmpty )
                    |> Seq.map (fun c -> c.Name)
                    |> Seq.toArray
            
                let caseTuple (v:'T) = 
                    let c, vs = FSharpValue.GetUnionFields(v, typeof<'T>)
                    let types = c.GetFields() |> Array.map (fun p -> p.PropertyType)
                    if types.Length = 1 then c.Name, types.[0], vs.[0] else
                    let ttype = FSharpType.MakeTupleType(types)
                    c.Name, ttype, FSharpValue.MakeTuple(vs, ttype)
            
                let caseArray (v:'T) = 
                    let c, vs = FSharpValue.GetUnionFields(v, typeof<'T>)
                    let types = c.GetFields() |> Array.map (fun p -> p.PropertyType.FullName)
                    c.Name, Array.zip types vs
            
                let caseInfos<'T>            = FSharpType.GetUnionCases typeof<'T>
                let caseInfo< 'T> (s:string) = caseInfos<'T> |> Seq.find (fun c -> c.Name = s)
            
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            module Date =
                let toYYYYMMDD sep (date:System.DateTime) = sprintf "%d%s%02d%s%02d" date.Year sep  date.Month sep date.Day
    
    //#cd @"..\projects\StackOverflow\src"
    
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
    
    //#define WEBSHARPER
    
    [< JavaScript >]
    module StackOverflow =
        //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
        //#r "D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\LayoutEngine.dll"
        //#nowarn "1178" "1182" "3180" "52"
        
        [< AutoOpen >]
        module Templating =
            open WebSharper.UI.Templating
            let [< Literal >] rootdir = @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\StackOverflow\website"
        
            let [< Literal >] TemplatesFileName = rootdir + @"\Templates.html"
            type TemplateLib  = Template< TemplatesFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
        
            let [< Literal >] LoginFileName = rootdir + @"\Login.html"
            type TemplateLogin  = Template< LoginFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
        
            if IsClient then printfn "%s" TemplatesFileName
        
        [< AutoOpen >]
        module TypesV0 =
            type LatestType = TypeV0
        
            type IdAliado     = IdAliado     of string          with member this.Id = match this with IdAliado    id -> id
            type IdAuthorize  = IdAuthorize  of string          with member this.Id = match this with IdAuthorize id -> id
            type IdAddress    = IdAddress    of string          with member this.Id = match this with IdAddress   id -> id
            type IdPayment    = IdPayment    of string          with member this.Id = match this with IdPayment   id -> id
        
            type StatusAliado =
            | CuentaCreada
            | DatosBancariosIngresados
            | Activo
            | Inactivo
                with
                    override this.ToString() = sprintf "%A" this
        
            type TipoAliado =
            | Master
            | Regular
                with
                    override this.ToString() = sprintf "%A" this
        
            type Pais =
            | USA
            | Venezuela 
            | Argentina
            | OtroP of string
                with 
                    static member tryParse (s:string) = 
                        match s.Trim().ToUpper() with
                        | ""               -> None    
                        | "EEUU" | "UNITED STATES"  | "UNITED STATES OF AMERICA" | "US" | "E.E.U.U." | "AMERICA"
                        | "USA"            -> Some <| USA
                        | "VENEZUELA"      -> Some <| Venezuela
                        | "ARGENTINA"      -> Some <| Argentina
                        | _                -> Some <| (OtroP <| s.Trim() )
                    override this.ToString() = match this with OtroP s -> s | v -> sprintf "%A" v
        
            type Estado =
            | Texas
            | Florida
            | OtroS of string
                with 
                    static member tryParse (s:string) = 
                        match s.Trim().ToUpper() with
                        | ""               -> None    
                        | "TX"
                        | "TEXAS"          -> Some <| Texas
                        | "FL"
                        | "FLORIDA"        -> Some <| Florida
                        | _                -> Some <| (OtroS <| s.Trim() )
                    override this.ToString() = match this with OtroS s -> s | v -> sprintf "%A" v
        
            type Territorio =
            | Estado of Estado
        
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
                emision   : System.DateTime
                vence     : System.DateTime
            }
        
            type NumeroCuenta   = NumeroCuenta  of string       with member this.Id = match this with NumeroCuenta  id -> id
            type NumeroTarjeta  = NumeroTarjeta of string       with member this.Id = match this with NumeroTarjeta id -> id
            type Expiracion     = Expiracion    of string       with member this.Id = match this with Expiracion    id -> id
            type RoutingNumber  = RoutingNumber of string       with member this.Id = match this with RoutingNumber id -> id 
        
            type TipoTarjeta     = 
            | Visa
            | MasterCard
            | Amex
            | Otra of string
                with 
                    static member tryParse (s:string) = 
                        match s.Trim().ToUpper() with
                        | ""                 -> None    
                        | "VISA"             -> Some <| Visa
                        | "MASTERCARD"       -> Some <| MasterCard
                        | "AMEX"
                        | "AMERICAN EXPRESS" -> Some <| Amex
                        | _                  -> Some <| (Otra <| s.Trim() )
                    override this.ToString() = match this with Otra s -> s | v -> sprintf "%A" v
        
            type TipoCuenta     = 
            | Ahorro
            | Corriente
            | Otra of string
                with 
                    static member tryParse (s:string) = 
                        match s.Trim().ToUpper() with
                        | ""               -> None    
                        | "SAVINGS"
                        | "AHORRO"         -> Some <| Ahorro
                        | "CHECKING"
                        | "CORRIENTE"      -> Some <| Corriente
                        | _                -> Some <| (Otra <| s.Trim() )
                    override this.ToString() = match this with Otra s -> s | v -> sprintf "%A" v
        
            type CuentaBancaria = {
                titular     : string
                banco       : string
                tipo        : TipoCuenta
                numero      : NumeroCuenta
                routing     : RoutingNumber
            }
        
            type TarjetaCredito = {
                titular     : string
                tipoTarjeta : TipoTarjeta
                numero      : NumeroTarjeta
                expiracion  : Expiracion
            }
        
            type ConceptoPago =
            | PagoAfiliacion
            | PagoComision
            | Otro of string
                with
                    override this.ToString() = match this with Otro s -> s | v -> sprintf "%A" v
        
            type Transaccion = {
                fechaPago      : System.DateTime
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
                with 
                    static member tryParse (s:string) = 
                        match s.Trim() with
                        | ""               -> None    
                        | "Habitacion"     -> Some <| Habitacion
                        | "Oficina"        -> Some <| Oficina
                        | "ServicioPostal" -> Some <| ServicioPostal
                        | s                -> Some <| Otro s
                    override this.ToString() = match this with Otro s -> s | v -> sprintf "%A" v
        
            type ZonaPostal = ZonaPostal of string
                with 
                    static member tryParse (s:string) = if s.Trim() <> "" then Some (ZonaPostal <| s.Trim()) else None
                    override this.ToString() = match this with ZonaPostal s -> s
        
            type Direccion = {
                authorizeIdR  : Result<IdAddress, string>
                tipoDireccion : TipoDireccion
                linea1        : string
                linea2        : string
                ciudad        : string
                estado        : Estado
                pais          : Pais
                zonaPostal    : ZonaPostal
            }
        
            type CorreoElectronico = EMail    of string
                with override this.ToString() = match this with EMail c -> c
                
            type TipoTelefono =
            | Movil
            | Oficina
            | Habitacion
            | Voip
                with 
                    static member tryParse = function
                        | "Movil"      -> Some Movil
                        | "Oficina"    -> Some Oficina
                        | "Habitacion" -> Some Habitacion
                        | _            -> None    
                    override this.ToString() = sprintf "%A" this
        
            type Telefono          = {
                tipoTelefono : TipoTelefono
                codigoPais   : string
                codigoArea   : string
                numero       : string
                extension    : string
                mensajes     : bool
            }
        
            type Contacto =
            | Direccion         of Direccion
            | CorreoElectronico of CorreoElectronico
            | Telefono          of Telefono
            | Mensajeria        of string
            | PaginaWeb         of string
            | SocialMedia       of string
        
            type Genero =
            | Masculino
            | Femenino
            | Empresa
                with 
                    static member tryParse (s:string) = 
                        match s.Trim() with
                        | "Masculino"      -> Some <| Masculino
                        | "Femenino"       -> Some <| Femenino
                        | "Empresa"        -> Some <| Empresa
                        | _                -> None    
        
            type DatosPersonales = {
                titulo          : string option
                nombre1         : string
                nombre2         : string
                apellido1       : string
                apellido2       : string
                nacionalidad    : Pais
                genero          : Genero
                fechaNacimiento : System.DateTime
            }
        
            type CuentaPago =
            | CuentaBancaria            of CuentaBancaria
            | TarjetaCredito            of TarjetaCredito
            | TransferenciaElectronica  of string
        
            type StatusFormaPago =
            | NuevaFormaPago
            | Registrada      of          System.DateTime option
            | RegistroFallido of string * System.DateTime option
        
            type FormaPago = {
                nombre          : string
                authorizeIdR    : Result<IdPayment, string>
                cuentaPago      : CuentaPago
            }
        
            type TipoMensaje = 
            | Alerta
            | Informacion
            | Saludo
        
            type Remitente =
            | Prozper
            | Aliado of IdAliado
            | OtroR  of string
        
            type Mensaje = {
                tipo      : TipoMensaje
                leido     : System.DateTime option
                fecha     : System.DateTime
                texto     : string
                remitente : Remitente
            }
        
            type Aliado = {
                id              : IdAliado
                idPadreO        : IdAliado option
                datosPersonales : DatosPersonales
                contactos       : Contacto       []
                identificacion  : Identificacion []
                formasPago      : FormaPago      []
                transacciones   : Transaccion    []
                mensajes        : Mensaje        []
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
                montoAfiliacion              : int
                numeroReferidosMaster        : int
                diaCorte1                    : int
                diaCorte2                    : int
            }
        
            let premisasCalculo = {
                comisionReferidosRegular     = 15
                comisionReferidosMaster      = 25
                comisionDescendientesMaster  = 25
                comisionDescendientesRegular =  0
                montoAfiliacion              = 75
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
                nevento       : int64
            }
        
            let telVacio = {            
                tipoTelefono = Movil
                codigoPais   = ""
                codigoArea   = ""
                numero       = ""
                extension    = ""
                mensajes     = false
            }
        
            let dirVacio = {
                authorizeIdR  = Error ""
                tipoDireccion = TipoDireccion.Habitacion
                linea1        = ""
                linea2        = ""
                ciudad        = ""
                estado        = OtroS ""
                pais          = OtroP ""
                zonaPostal    = ZonaPostal ""
            }
        
            let tarVacio = {            
                tipoTarjeta  = Visa
                numero       = NumeroTarjeta ""
                expiracion   = Expiracion    ""
                titular      = ""
            }
        
            let ctaVacio = {            
                banco        = ""
                numero       = NumeroCuenta ""
                tipo         = Ahorro
                titular      = ""
                routing      = RoutingNumber ""
            }
        
        [< AutoOpen >]
        module TypesV1 =
            type LatestType = TypeV1
        
            type CorreoElectronico = {
                email       : string
                enviado     : System.DateTime option
                recibido    : System.DateTime option
            }
                with override this.ToString() = this.email
        
            type Contacto =
            | Direccion         of Direccion
            | CorreoElectronico of CorreoElectronico
            | Telefono          of Telefono
            | Mensajeria        of string
            | PaginaWeb         of string
            | SocialMedia       of string
        
            type Aliado = {
                id              : IdAliado
                authorizeIdR    : Result<IdAuthorize, string>
                idPadreO        : IdAliado     option
                datosPersonales : DatosPersonales
                contactos       : Contacto       []
                identificacion  : Identificacion []
                formasPago      : FormaPago      []
                transacciones   : Transaccion    []
                mensajes        : Mensaje        []
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
        
            type Modelo = {
                idAliado      : IdAliado
                aliados       : Aliado []
                anoActual     : int
                periodoActual : int
                premisas      : PremisasCalculo
                nevento       : int64
            }
        
            let correoVacio = {
                email       = ""
                enviado     = None
                recibido    = None
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
                            fechaStatus    = System.DateTime()
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
        
            let empty = {
                datosPersonales = {
                                        titulo          = None
                                        nombre1         = ""
                                        nombre2         = ""
                                        apellido1       = ""
                                        apellido2       = ""
                                        nacionalidad    = USA
                                        genero          = Masculino
                                        fechaNacimiento = System.DateTime(2000, 1, 1)
                                    }
                id              =  IdAliado ""
                authorizeIdR    =  Error ""
                idPadreO        =  None
                contactos       =  [||]
                identificacion  =  [||]
                formasPago      =  [||]
                transacciones   =  [||]
                mensajes        =  [||]
                isInternal      =  false
                status          =  Inactivo
                tipo            =  Regular
                fechaRegistro   =  System.DateTime(2000, 1, 1)
                fechaStatus     =  System.DateTime(2000, 1, 1)
                nReferidos      =  0
                nRefActivos     =  0
                nDescendientes  =  0
                nDescActivos    =  0
                comision        =  0
                nivel           =  0
            }
        
            let nombre dp = 
                let titulo   = dp.titulo |> Option.map ((+) " ") |> Option.defaultValue ""
                let apellido = if dp.apellido1 = "" then "" else (dp.apellido1 + " " + dp.apellido2).Trim() + ", "
                titulo + apellido + dp.nombre1 + " " + dp.nombre2
        
            let nombre2 dp = 
                let titulo   = dp.titulo |> Option.map ((+) " ") |> Option.defaultValue ""
                titulo + (dp.nombre1 + " " + dp.nombre2).Trim() + " " + (dp.apellido1 + " " + dp.apellido2).Trim()
        
        type DataEvento =
        | AgregarAliados            of (Aliado[]                                                   )
        | AgregarAliado             of (Aliado                                                     )
        | InvitarPotencialesAliados of (IdAliado * string []                                       )
        | RegistroNuevo             of (IdAliado * DatosPersonales * IdAliado option * Contacto [] )
        | ActualizarDatosPersonales of (IdAliado * DatosPersonales                                 )
        | ActualizarContactos       of (IdAliado * Contacto  []                                    )
        | ActualizarFormasPago      of (IdAliado * FormaPago []                                    )
        | CorreoVerificacionEnviado of (IdAliado * string                                          )
        | CorreoVerificado          of (IdAliado * string                                          )
        | ActualizarAuthorizeId     of (IdAliado * Result<IdAuthorize, string>                     )
        | ActualizarPagoAuthorizeId of (IdAliado * CuentaPago * Result<IdPayment, string>          )
        
        type Evento = {
            nevento : int64
            aliadoO : IdAliado option
            data    : DataEvento
        }
        
        type Respuesta =
        | ROk
        | NuevoRegistro        of string
        | Mensaje              of string
        
        
        [< JavaScript false >]
        module Eventos =
        
            type TipoDatos = TipoDatos of nombre:string * tipos:string
        
            type ResultadoManejador = Modelo -> ResultM<Modelo * Respuesta, unit>
        
            type ObjetoDatos<'T> = {
                tipoDatos : TipoDatos
                datos     : 'T
            }
        
            type ManejadorDatos<'T> = {
                tipoDatos  : TipoDatos
                manejadorF : ObjetoDatos<'T> -> ResultadoManejador
            }
        
            let Manejadores = System.Collections.Generic.Dictionary<TipoDatos, ManejadorDatos<obj>>()
        
            let deDatosGen (msg: ObjetoDatos<obj>) : ObjetoDatos<_> = {
                tipoDatos = msg.tipoDatos
                datos     = unbox msg.datos
            }    
        
            let registrarManejador nombre (manejadorF:ObjetoDatos<'T> -> ResultadoManejador) =
                let manejador  = {
                    tipoDatos  = TipoDatos (nombre, typeof<'T> |> getTypeName) |>! print
                    manejadorF = deDatosGen >> manejadorF
                }
                Manejadores.Add(manejador.tipoDatos, manejador )
        
            let registrarManejadorf nombre (manejadorF:'T -> ResultadoManejador) =
                registrarManejador  nombre (fun oDatos -> manejadorF oDatos.datos)
        
            let manejadorGenerico (msg:ObjetoDatos<obj>) : ResultadoManejador =
                match Manejadores.TryGetValue msg.tipoDatos with
                | false, _         -> failwithf "No Handler for message: %A" msg
                | true , manejador -> manejador.manejadorF msg
        
            let addNewAliados (als1: Aliado []) (als2: Aliado []) : Aliado [] =
                als1 |> Seq.filter(fun a -> als2 |> Seq.exists (fun b -> a.id = b.id ) |> not ) |> Seq.append als2 |> Seq.toArray
        
            let registroNuevo (idA, datos:DatosPersonales, padre, contactos) (modelo: Modelo) : ResultM<Modelo * Respuesta, unit> = resultM {
                match   contactos
                        |> Seq.tryPick(function CorreoElectronico email -> Some email |_-> None ) with
                | None        -> return! errorMsgf "No se encontro Correo Electronico: %A" datos |> ErrorM
                | Some correo ->
                if  modelo.aliados
                    |> Seq.exists(fun al ->
                        al.contactos
                        |> Seq.exists(function CorreoElectronico correo2 -> correo = correo2 |_-> false ) 
                    )
                    then return! errorMsgf "Correo Electronico ya esta registrado: %A" correo |> ErrorM
                else
                if modelo.aliados |> Seq.exists (fun al -> al.id = idA) 
                    then return! errorMsgf "Id ya esta en uso: %A" idA                        |> ErrorM
                else
                let now = System.DateTime.Now
                let aliado = {
                    datosPersonales =  datos
                    id              =  idA
                    authorizeIdR    =  Error ""
                    idPadreO        =  padre
                    contactos       =  contactos
                    identificacion  =  [||]
                    formasPago      =  [||]
                    transacciones   =  [||]
                    mensajes        =  [||]
                    isInternal      =  false
                    status          =  CuentaCreada
                    tipo            =  Regular
                    fechaRegistro   =  now
                    fechaStatus     =  now
                    nReferidos      =  0
                    nRefActivos     =  0
                    nDescendientes  =  0
                    nDescActivos    =  0
                    comision        =  0
                    nivel           =  0
                }
                return
                    { modelo with aliados = Array.append modelo.aliados [| aliado |] }
                ,   [ datos.nombre1 ; datos.nombre2 ; datos.apellido1 ; datos.apellido2 ] 
                    |> String.concat " "
                    |> NuevoRegistro  
            }
        
            let cambiaAliado ida   f (modelo:Modelo) = { modelo with aliados    = modelo.aliados    |> Array.map (fun al -> if al.id = ida then f al else al )}
            let cambiaCorreo email f (aliado:Aliado) = { aliado with contactos  = aliado.contactos  |> Array.map (function CorreoElectronico c when c.email = email -> f c |> CorreoElectronico | co -> co )}
            let cambiaFormaPago cp f (aliado:Aliado) = { aliado with formasPago = aliado.formasPago |> Array.map (fun fp -> if fp.cuentaPago = cp then f fp else fp ) }
            let cambiaStatusCorreo ida email f = cambiaAliado ida (cambiaCorreo email  f)
        
            let actualizarDatosPersonales (idA, datos:DatosPersonales) (modelo: Modelo) : ResultM<Modelo * Respuesta, unit> = resultM {
                return
                    cambiaAliado idA (fun al -> { al with datosPersonales = datos }) modelo
                ,   Mensaje <| "Datos personales actualizados!" 
            }
        
            let actualizarAuthorizeId   (idA, authorizeIdR) (modelo: Modelo) : ResultM<Modelo * Respuesta, unit> = resultM {
                return
                    cambiaAliado idA (fun al -> { al with authorizeIdR = authorizeIdR }) modelo
                ,   Mensaje <| "AuthorizeId actualizada" 
            }
        
            let actualizarPagoAuthorizeId (idA, cuenta, paymentIdR : Result<IdPayment, string> )  (modelo: Modelo) : ResultM<Modelo * Respuesta, unit> = resultM {
                return
                    cambiaAliado idA (cambiaFormaPago cuenta (fun fp -> { fp with authorizeIdR = paymentIdR }) ) modelo
                ,   Mensaje <| "AuthorizeId actualizada" 
            }
        
            let actualizarContactos (idA, contactos:Contacto[]) (modelo: Modelo) : ResultM<Modelo * Respuesta, unit> = resultM {
                return
                    cambiaAliado idA (fun al -> { al with contactos = contactos }) modelo
                ,  Mensaje <| "Contactos actualizados!" 
            }
        
            let actualizarFormasPago (idA, formasPago:FormaPago[]) (modelo: Modelo) : ResultM<Modelo * Respuesta, unit> = resultM {
                return
                    cambiaAliado idA (fun al -> { al with formasPago = formasPago }) modelo
                ,  Mensaje <| "Formas de pago actualizadas!" 
            }
        
            let agregarAliado  aliado  modelo = resultM { return { modelo with Modelo.aliados = addNewAliados [| aliado  |] modelo.aliados }, ROk }
            let agregarAliados aliados modelo = resultM { return { modelo with Modelo.aliados = addNewAliados    aliados    modelo.aliados }, ROk }
        
            let correoVerificacionEnviado (ida, correo)  (modelo: Modelo) : ResultM<Modelo * Respuesta, unit> = resultM {
                return
                    cambiaStatusCorreo ida correo (fun c -> { c with enviado = Some System.DateTime.Now }) modelo
                ,   ROk
            }
        
            let correoVerificado          (ida, correo)  (modelo: Modelo) : ResultM<Modelo * Respuesta, unit> = resultM {
                return
                    cambiaStatusCorreo ida correo (fun c -> { c with recibido = Some System.DateTime.Now }) modelo
                ,   ROk
            }
        
            let actualizarEstado (evento: Evento) (modelo: Modelo) : ResultM<Modelo * Respuesta, unit> = resultM {
                if modelo.nevento <> -1L && modelo.nevento + 1L <> evento.nevento then 
                    failwithf "Evento fuera de secuencia: %d %d" modelo.nevento evento.nevento
                let case, tuple, data = DiscUnion.caseTuple evento.data
                let objData           = {
                    tipoDatos         = TipoDatos(case, tuple |> getTypeName)
                    datos             = data
                }
                return! manejadorGenerico objData modelo
            }
        
            let actualizarGenerico (nevento, aliadoO, objData) (modelo: Modelo) : ResultM<Modelo * Respuesta, unit> = resultM {
                if modelo.nevento <> -1L && modelo.nevento + 1L <> nevento then 
                    printfn "Evento fuera de secuencia: %d %d" modelo.nevento nevento
                return! manejadorGenerico objData modelo
            }
        
            let eventoNoImplementado ev (modelo: Modelo) : ResultM<Modelo * Respuesta, unit> = resultM {
                return! errorMsgf "Evento no Implementado: %A" ev |> ErrorM
            } 
        
            let invitarPotencialesAliados ev = eventoNoImplementado ev
        module EstadoActual =
            open WebSharper
            open WebSharper.JavaScript
            open WebSharper.Sitelets
        
            let estado() = async {
                let x : RequestOptions = RequestOptions()
                x.Mode <- RequestMode.No_cors
                let! resp = JS.Fetch("http://localhost:7071/api/hello", x) |> Promise.AsAsync
                let! text = resp.Text() |> Promise.AsAsync
                return Json.Deserialize<Modelo> text
            }
        
        module Rpc =
        
            let printResult operation arm = async {
                let! rm = arm
                printfn "%s %A" operation rm
                return! arm
            }
        
            let userIsAliado user al =
                al.datosPersonales.apellido1 = user
             || al.datosPersonales.nombre1   = user
        
            //let checkUserPwd user password =
            //    if user <> password then None       else
            //    if user = ""        then None       else
            //    if user = "admin"   then Some user  else
            //    (EstadoActual.estado()).aliados 
            //    |> Seq.tryFind (userIsAliado user) 
            //    |> Option.map (fun al -> match al.id with | IdAliado s -> s)
        
            //[< Rpc >]
            let loginUser (user:string) (password:string) : AsyncResultM<unit, string> =  AsyncResultM.rtn ()
            //    let ctx = Web.Remoting.GetContext()
            //    asyncResultM {
            //        match checkUserPwd user password with
            //        | Some aid -> do! ctx.UserSession.LoginUser aid
            //        | None -> ()
            //    } (**)|> printResult "loginUser"
        
            //[< Rpc >]
            let logoutUser ()  : AsyncResultM<unit, string> =  AsyncResultM.rtn ()
            //    let ctx = Web.Remoting.GetContext()
            //    asyncResultM {
            //        do! ctx.UserSession.Logout()
            //    } (**)|> printResult "logoutUser"
        
        
            //[< Rpc >]
            let leerDataModelo (idO : IdAliado option) : AsyncResultM<Modelo, string> = 
                //let  ctx  = Web.Remoting.GetContext()
                asyncResultM {
                    //let! userO = ctx.UserSession.GetLoggedInUser()
                    let userO = Some "admin"
                    match userO, idO with
                    | None, None -> do! Error(ErrorMsg "User not logged in.")
                                    let! modelo = EstadoActual.estado()
                                    return { 
                                        modelo with 
                                            aliados  = [| |]
                                    }
                    | None, Some ida -> 
                        let! modelo = EstadoActual.estado()
                        let al = modelo.aliados |> Seq.tryFind (fun al -> al.id = ida) |> Option.defaultValue {
                            Aliado.empty with id = IdAliado "Prozper" ; datosPersonales = { Aliado.empty.datosPersonales with nombre1 = "Prozper" }
                        }
                        let! modelo = EstadoActual.estado()
                        return {
                            modelo with 
                                idAliado = al.id
                                aliados  = [| { Aliado.empty with
                                                    id = al.id
                                                    datosPersonales = al.datosPersonales } 
                                            |]
                        }
                    | Some user, _ ->
                    let! modelo = EstadoActual.estado()
                    let aliados = modelo |> Aliado.actualizarAliados
                    let buscar = Aliado.busqueda aliados
                    if user = "admin" then return { modelo with aliados = aliados } else
                    let al = aliados |> Seq.find (fun al -> al.id = IdAliado user)
                    let subAliados = (if al.tipo = Master then buscar.descendientes else buscar.hijos) al
                    return { modelo with 
                                idAliado = al.id
                                aliados  = Array.append [| al |] subAliados 
                            }
                }
        
            //[< Rpc >]
            let ejecutarEvento (evento:DataEvento) = AsyncResultM.rtn (ROk )
                //let ctxO =             
                //    try 
                //        Some <| Web.Remoting.GetContext()
                //    with e when e.Message = "No remoting context available." ->
                //        None
                //let usuarioO = 
                //    match ctxO with
                //    | None     -> Some "Server"
                //    | Some ctx -> ctx.UserSession.GetLoggedInUser() |> Async.RunSynchronously
                //asyncResultM {
                //    let  estado   = EstadoActual.estado()
                //    let  aliadoO  = usuarioO |> Option.map IdAliado
                //    let _, respR  = 
                //        EstadoActual.actualizarModelo {
                //            aliadoO = aliadoO
                //            nevento = estado.nevento + 1L
                //            data    = evento 
                //        } estado
                //    let! resp             = respR
                //    return!                 EstadoActual.llamarEvento (usuarioO |> Option.defaultValue "") evento
                //}
        
            //[< Rpc >]
            let obtenerUnions() = async {
                return [||] //DiscUnion.simple<Pais          >
                     , [||] //DiscUnion.simple<Estado        >
                     , [||] //DiscUnion.simple<TipoDireccion >
                     , [||] //DiscUnion.simple<TipoTelefono  >
                     , [||] //DiscUnion.simple<Genero        >
                     , [||] //DiscUnion.simple<TipoCuenta    >
                     , [||] //DiscUnion.simple<TipoTarjeta   >
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
                nevento       = -2L
            }
        
            let selAliadoIdOV = Var.Create None
        
            let refAliadoIdOV = Var.Create None
        
            let rec separate s parts =
                match s with
                | "" -> parts |> String.concat ","
                | _  -> separate (s.Left -3) (s.Right 3 :: parts)
        
            let money (m:int) = "$" + separate (string m) []
        
            type EndPoint =
            | [< EndPoint "" >] DefaultEP
            |                   Content of string
        
            open Sitelets.InferRouter
            open FsRoot
            module AF = AppFramework 
        
            let endPointV = if IsClient then Router.Infer() |> Router.InstallHash DefaultEP else Var.Create DefaultEP
        
            let contentVar =
                Var.Lens endPointV 
                    (function
                    | DefaultEP          -> "ProzperLyt.mainContent"
                    | Content     lyt    -> lyt)
                    (fun _ -> function
                    | "ProzperLyt.mainContent"  -> DefaultEP
                    | lyt                       -> Content lyt)
        
            let aliadoIdDoc fDoc =
                View.Do {
                    let! modelo   = modeloV      .View
                    let  aid      = modelo.idAliado
                    let  aliadoO  = modelo.aliados |> Seq.tryFind (fun al -> al.id = aid)
                    return 
                        match aliadoO with
                        | None    -> Doc.Empty
                        | Some al -> View.Const al |> fDoc
                } |> Doc.BindView id
        
            let aliadoW =
                View.Do {
                    let! modelo   = modeloV      .View
                    let  aid      = modelo.idAliado
                    let  aliadoO  = modelo.aliados |> Seq.tryFind (fun al -> al.id = aid)
                    return 
                        match aliadoO with
                        | None    -> Aliado.empty
                        | Some al -> al
                }
        
            let selAliadoIdDoc fDoc =
                View.Do {
                    let! modelo   = modeloV      .View
                    let! selAlIdO = selAliadoIdOV.View
                    let  aliadoO  = selAlIdO |> Option.bind (fun aid -> modelo.aliados |> Seq.tryFind (fun al -> al.id = aid) )
                    return 
                        match aliadoO with
                        | None    -> Doc.Empty
                        | Some al -> View.Const al |> fDoc
                } |> Doc.BindView id
        
            let refrescarData() =
                asyncResultM {
                    let! data = Rpc.leerDataModelo refAliadoIdOV.Value
                    modeloV.Set data
                } |> Rpc.iterA
        
        
            module VariousUI = 
            
                let alertIfNone name vO f = 
                    match vO with
                    | None   -> JS.Alert ("Error not caught: " + name)
                                None
                    | Some v -> f v
            
                let paises   = Var.Create [||]
                let estados  = Var.Create [||]
                let tiposDir = Var.Create [||]
                let tiposTel = Var.Create [||]
                let generos  = Var.Create [||]
                let tiposCta = Var.Create [||]
                let tiposTar = Var.Create [||]
            
                async {
                    let! p, e, td, tl, g, tc, tt = Rpc.obtenerUnions()
                    paises  .Set p
                    estados .Set e
                    tiposDir.Set td
                    tiposTel.Set tl
                    generos .Set g
                    tiposCta.Set tc
                    tiposTar.Set tt
                } |> Async.Start
            
                let crearOption  n  = Html.Elt.option [] [ Html.text n] :> Doc
                let crearOptions ns = ns |> Seq.map crearOption |> Doc.Concat
            
                let removeButton f doc = 
                    Html.form [] 
                        [   doc 
                            Doc.Button "-" [ Html.attr.title "borrar" ] f
                        ]
            
            
            module Telefono =
                open VariousUI
            
                let formaDoc (telOV : Var<Telefono option>) = 
                    let forma =
                        TemplateLib.Telefono()
                            .Tipos(    V( crearOptions tiposTel.V ).V )
                            .Create()
            
                    telOV.View 
                    |> View.Sink (function
                        | None     -> ()
                        | Some tel -> 
                        forma.Vars.CodigoArea  .Set <|              tel.codigoArea  
                        forma.Vars.CodigoPais  .Set <|              tel.codigoPais
                        forma.Vars.Telefono    .Set <|              tel.numero    
                        forma.Vars.Extension   .Set <|              tel.extension
                        forma.Vars.TipoTelefono.Set <| sprintf "%O" tel.tipoTelefono
                    )
                    let requeridosW =
                        V(  [   forma.Vars.CodigoPais  .V.Trim() = "" , "CodigoPais"
                                forma.Vars.Telefono    .V.Trim() = "" , "Telefono"
                                forma.Vars.TipoTelefono.V.Trim() = "" , "TipoTelefono"
                            ]
                            |> Seq.filter fst
                            |> Seq.map    snd
                        )
                    V (
                        if not (Seq.isEmpty requeridosW.V)  then None else
                        forma.Vars.TipoTelefono.V.Trim() |> TipoTelefono.tryParse |> alertIfNone "TipoTelefono" <| fun tipo ->                
                        Some {
                            codigoArea   = forma.Vars.CodigoArea  .V.Trim()
                            codigoPais   = forma.Vars.CodigoPais  .V.Trim()
                            numero       = forma.Vars.Telefono    .V.Trim()
                            extension    = forma.Vars.Extension   .V.Trim()
                            tipoTelefono = tipo
                            mensajes     = false
                        }
                    ) |> View.Sink (fun v -> if telOV.Value <> v then telOV.Set v)
                    requeridosW, forma.Doc
             
            module CorreoElectronico =
                open VariousUI
            
                let formaDoc (corV : Var<CorreoElectronico option>) =
                    let mensaje = Var.Create ""
            
                    let forma =
                        TemplateLib.Correo()
                            .Mensaje( mensaje.V )
                            .Create()
                    match corV.Value with | None -> () | Some v -> forma.Vars.ConfirmarCorreo.Set <| v.ToString()
                    V (
                        if     forma.Vars.Correo         .V.Trim() = "" 
                            || forma.Vars.ConfirmarCorreo.V.Trim() = ""
                            || forma.Vars.Correo         .V.Trim()
                             = forma.Vars.ConfirmarCorreo.V.Trim() 
                            then "" 
                            else "Correos no son iguales"
                    ) |> View.Sink mensaje.Set
                    corV.View 
                    |> View.Sink (function
                        | None     -> ()
                        | Some cor -> 
                        forma.Vars.Correo.Set <| cor.email
                        //forma.Vars.ConfirmarCorreo.Set <| cor.ToString()
                    )
                    let requeridosW =
                        V(  [   forma.Vars.Correo         .V.Trim() =  "" , "Correo"
                                forma.Vars.ConfirmarCorreo.V.Trim() =  "" , "ConfirmarCorreo"
                                mensaje                   .V        <> "" , mensaje.V
                            ]
                            |> Seq.filter fst
                            |> Seq.map    snd
                        )
                    V (
                        if not (Seq.isEmpty requeridosW.V)  then None else
                        corV.Value
                        |> Option.orElse (Some correoVacio)
                        |> Option.map    (fun v -> { v with email = forma.Vars.Correo.V } )
                    ) |> View.Sink (fun v -> if corV.Value <> v then corV.Set v)
                    requeridosW, forma.Doc
            
            
            module Direccion =
                open VariousUI
            
                let formaDoc (dirV : Var<Direccion option>) =
                    let forma =
                        TemplateLib.Direccion()
                            .Paises(   V( crearOptions paises  .V ).V )
                            .Estados(  V( crearOptions estados .V ).V )
                            .Tipos(    V( crearOptions tiposDir.V ).V )
                            .Create()
            
                    dirV.View 
                    |> View.Sink (function
                        | None     -> ()
                        | Some dir -> 
                        forma.Vars.Direccion1   .Set <| dir.linea1  
                        forma.Vars.Direccion2   .Set <| dir.linea2  
                        forma.Vars.Ciudad       .Set <| dir.ciudad    
                        forma.Vars.Estado       .Set <| sprintf "%O" dir.estado
                        forma.Vars.Pais         .Set <| sprintf "%O" dir.pais
                        forma.Vars.CodigoPostal .Set <| sprintf "%O" dir.zonaPostal
                        forma.Vars.TipoDireccion.Set <| sprintf "%O" dir.tipoDireccion
                    )
                    let requeridosW = 
                        V( 
                            [
                                forma.Vars.Direccion1   .V.Trim() = "" , "Direccion1"
                                forma.Vars.Ciudad       .V.Trim() = "" , "Ciudad"
                                forma.Vars.Estado       .V.Trim() = "" , "Estado"
                                forma.Vars.Pais         .V.Trim() = "" , "Pais"
                                forma.Vars.CodigoPostal .V.Trim() = "" , "CodigoPostal"
                                forma.Vars.TipoDireccion.V.Trim() = "" , "TipoDireccion"
                            ]
                            |> Seq.filter fst
                            |> Seq.map    snd
                        )
                    V (
                        if not (Seq.isEmpty requeridosW.V)  then None else
                        forma.Vars.TipoDireccion.V.Trim() |> TipoDireccion.tryParse |> alertIfNone "TipoDireccion" <| fun tipo   ->                
                        forma.Vars.Estado       .V.Trim() |> Estado       .tryParse |> alertIfNone "Estado"        <| fun estado -> 
                        forma.Vars.Pais         .V.Trim() |> Pais         .tryParse |> alertIfNone "Pais"          <| fun pais   -> 
                        forma.Vars.CodigoPostal .V.Trim() |> ZonaPostal   .tryParse |> alertIfNone "CodigoPostal"  <| fun codigo -> 
                        Some {
                            tipoDireccion = tipo
                            linea1        = forma.Vars.Direccion1.V.Trim()
                            linea2        = forma.Vars.Direccion2.V.Trim()
                            ciudad        = forma.Vars.Ciudad    .V.Trim()
                            estado        = estado
                            pais          = pais
                            zonaPostal    = codigo
                            Direccion.authorizeIdR  = dirV.V |> Option.map (fun dir -> dir.authorizeIdR) |> Option.defaultValue (Error "")
                        }            
                    ) |> View.Sink (fun v -> if dirV.Value <> v then dirV.Set v)
                    requeridosW, forma.Doc
            
            module CuentaBancaria =
                open VariousUI
            
                let formaDoc (ctaV  : Var<CuentaBancaria * string>) =
                    let forma =
                        TemplateLib.CuentaBancaria()
                            .TiposCuenta( V( crearOptions tiposCta.V ).V )
                            .Mensaje(     V( snd          ctaV    .V ).V ) 
                            .Create()
            
                    ctaV .View 
                    |> View.Sink (fun (cta, _) -> 
                        forma.Vars.Titular      .Set <| cta.titular
                        forma.Vars.Banco        .Set <| cta.banco
                        forma.Vars.TipoCuenta   .Set <| sprintf "%O" cta.tipo
                        forma.Vars.Numero       .Set <| match cta.numero  with NumeroCuenta  s -> s
                        forma.Vars.Routing      .Set <| match cta.routing with RoutingNumber s -> s
                    )
                    let requeridosW = 
                        V( 
                            [
                                forma.Vars.Titular      .V.Trim() = "" , "Titular"
                                forma.Vars.Banco        .V.Trim() = "" , "Banco"
                                forma.Vars.Numero       .V.Trim() = "" , "Numero de Cuenta"
                                forma.Vars.Routing      .V.Trim() = "" , "ABA/Routing Number"
                            ]
                            |> Seq.filter fst
                            |> Seq.map    snd
                        )
                    V (
                        if not (Seq.isEmpty requeridosW.V)  then None else
                        forma.Vars.TipoCuenta   .V.Trim() |> TipoCuenta   .tryParse |> alertIfNone "TipoCuenta"   <| fun tipoCta ->
                        Some {
                            banco         = forma.Vars.Banco  .V.Trim()
                            titular       = forma.Vars.Titular.V.Trim()
                            numero        = forma.Vars.Numero .V.Trim() |> NumeroCuenta
                            routing       = forma.Vars.Routing.V.Trim() |> RoutingNumber
                            tipo          = tipoCta
                        }            
                    ) |> View.Sink (function |None -> () | Some v -> if fst ctaV .Value <> v then ctaV .Set (v, "") )
                    requeridosW, forma.Doc
            
                let formaDocO (ctaOV  : Var<(CuentaBancaria * string) option>) =
                    formaDoc (Var.Lens ctaOV (Option.defaultValue (ctaVacio, "") ) (fun _ v -> Some v ))
            
            module TarjetaCredito =
                open VariousUI
            
                let formaDoc (tarV  : Var<(TarjetaCredito * string)>) =
                    let forma =
                        TemplateLib.TarjetaCredito()
                            .TiposTarjeta( V( crearOptions tiposTar.V ).V )
                            .Mensaje(      V( snd          tarV    .V ).V )
                            .Create()
            
                    tarV .View 
                    |> View.Sink (fun (tar, mensaje) -> 
                        forma.Vars.Titular      .Set <| tar.titular
                        forma.Vars.TipoTarjeta  .Set <| sprintf "%O" tar.tipoTarjeta
                        forma.Vars.Numero       .Set <| match tar.numero     with NumeroTarjeta s -> s
                        forma.Vars.Expiracion   .Set <| match tar.expiracion with Expiracion    s -> s
                    )
                    let requeridosW = 
                        V( 
                            [
                                forma.Vars.Titular      .V.Trim() = "" , "Titular"
                                forma.Vars.TipoTarjeta  .V.Trim() = "" , "TipoTarjeta"
                                forma.Vars.Numero       .V.Trim() = "" , "Numero"
                                forma.Vars.Expiracion   .V.Trim() = "" , "Expiracion"
                            ]
                            |> Seq.filter fst
                            |> Seq.map    snd
                        )
                    V (
                        if not (Seq.isEmpty requeridosW.V)  then None else
                        forma.Vars.TipoTarjeta.V.Trim() |> TipoTarjeta.tryParse |> alertIfNone "Tipo Tarjeta" <| fun tipoTar ->
                        Some {
                            tipoTarjeta   = tipoTar
                            titular       = forma.Vars.Titular   .V.Trim()
                            numero        = forma.Vars.Numero    .V.Trim() |> NumeroTarjeta
                            expiracion    = forma.Vars.Expiracion.V.Trim() |> Expiracion
                        }            
                    ) |> View.Sink (function |None -> () | Some v -> if fst tarV .Value <> v then tarV .Set (v, "") ) 
                    requeridosW, forma.Doc
            
                let formaDocO (tarOV  : Var<(TarjetaCredito * string) option>) =
                    formaDoc (Var.Lens tarOV (Option.defaultValue (tarVacio, "") ) (fun _ v -> Some v ))
            
            module DatosPersonales =
                open VariousUI
            
                let formaDoc (datosV : Var<DatosPersonales option>) =
                    let forma    = 
                        TemplateLib.DatosPersonales()
                            .Generos(        V( crearOptions generos.V ).V            )
                            .Create()
                    datosV.View
                    |> View.Sink (function
                        | None     -> ()
                        | Some dat -> 
                        forma.Vars.Nombres        .Set <| (dat.nombre1   + " " + dat.nombre2   ).Trim()
                        forma.Vars.Apellidos      .Set <| (dat.apellido1 + " " + dat.apellido2 ).Trim()
                        forma.Vars.FechaNacimiento.Set <| Date.toYYYYMMDD "-"   dat.fechaNacimiento
                        forma.Vars.Genero         .Set <| sprintf "%A" dat.genero
                    )                
                    let requeridosW =
                        V(  [   forma.Vars.Nombres        .V.Trim() = "" , "Nombres"
                                forma.Vars.Apellidos      .V.Trim() = "" , "Apellidos"
                                forma.Vars.FechaNacimiento.V.Trim() = "" , "Fecha de Nacimiento"
                                forma.Vars.Genero         .V.Trim() = "" , "Genero"
                            ]
                            |> Seq.filter fst
                            |> Seq.map    snd
                        ) 
                    V (
                        if not (Seq.isEmpty requeridosW.V)  then None else
                        forma.Vars.Genero         .V |> Genero.tryParse    |> alertIfNone "Genero"           <| fun genero ->
                        forma.Vars.FechaNacimiento.V |> ParseO.parseDateO2 |> alertIfNone "Fecha incorrecta" <| fun fecha  ->
                        Some {
                            titulo          = None
                            nombre1         = forma.Vars.Nombres  .V.Trim().Split(' ').[0  ]
                            nombre2         = forma.Vars.Nombres  .V.Trim().Split(' ').[1..] |> String.concat " "
                            apellido1       = forma.Vars.Apellidos.V.Trim().Split(' ').[0  ]
                            apellido2       = forma.Vars.Apellidos.V.Trim().Split(' ').[1..] |> String.concat " "
                            nacionalidad    = OtroP ""
                            genero          = genero
                            fechaNacimiento = fecha
                        }            
                    ) |> View.Sink (fun v -> if datosV.Value <> v then datosV.Set v)
            
                    requeridosW, forma.Doc
            
            
            module FormaRegistro = 
            
                let formaDoc() =
                    let mensajes      = Var.Create ""
                    let mostrar       = Var.Create false
                    let datosOV       = Var.Create None
                    let correoOV      = Var.Create None
                    let telefonoOV    = Var.Create None
                    let direccionOV   = Var.Create None
            
                    let datReqsW, datosDoc     = DatosPersonales  .formaDoc datosOV
                    let corReqsW, correoDoc    = CorreoElectronico.formaDoc correoOV
                    let telReqsW, telefonoDoc  = Telefono         .formaDoc telefonoOV
                    let dirReqsW, direccionDoc = Direccion        .formaDoc direccionOV
                    let forma    =
                        TemplateLib.FormaRegistro()
                            .Mensajes(       if mostrar.V then mensajes     .V else "")
                            .DatosPersonales(datosDoc                                 )
                            .Correo(         correoDoc                                )
                            .Telefono(       telefonoDoc                              )
                            .Direccion(      direccionDoc                             )
                            .Registrarse(fun ev ->
                                mostrar.Set true
                                let m =  mensajes.Value
                                if m.Trim() <> "" then JS.Alert m else 
                                    match datosOV    .Value
                                        , correoOV   .Value
                                        , telefonoOV .Value
                                        , direccionOV.Value
                                            with
                                    | Some datos, Some correo, Some telefono, Some direccion ->
                                        asyncResultM {
                                            let contactos = [|    
                                                CorreoElectronico correo
                                                Telefono          telefono
                                                Direccion         direccion 
                                            |]
                                            let  nid  = System.Guid.NewGuid().ToString().Replace("-", "").Substring(0,20) |> IdAliado
                                            let! resp = (nid, datos, Some modeloV.Value.idAliado, contactos) |> RegistroNuevo |> Rpc.ejecutarEvento
                                            refrescarData()
                                            sprintf "%A" resp|> JS.Alert
                                        } |> AsyncResultM.iterA (ResultMessage.summarized >> JS.Alert) id
                                    | _ -> JS.Alert "Error not caught FormaRegistro"
                            )
                            .Create()
                    V(  seq {
                            yield! datReqsW.V
                            yield! corReqsW.V
                            yield! telReqsW.V
                            yield! dirReqsW.V
                        }
                        |> String.concat ", "
                        |> fun es -> if es <> "" then "Campos requeridos: " + es else ""
                    )   |> View.Sink mensajes.Set
                    forma.Doc
            
            
            module FormaDatos =
            
                let formaAliado (aliadoW: View<Aliado>) =
                    let mensajes      = Var.Create ""
                    let mostrar       = Var.Create false
                    let datosOV       = Var.Create None
                    
                    aliadoW
                    |> View.Map  (fun a -> a.datosPersonales )
                    |> View.Sink (Some >> datosOV.Set)
            
                    let datReqsW, datosDoc     = DatosPersonales.formaDoc datosOV
                    let forma =
                        TemplateLib.FormaDatosPersonales()
                            .Mensajes(       if mostrar.V then mensajes     .V else ""                                     )
                            .Changed(        if Some aliadoW.V.datosPersonales = datosOV.V then "" else "mui-btn--primary" )
                            .DatosPersonales(datosDoc                                                                      )
                            .Salvar(fun ev ->
                                mostrar.Set true
                                let m =  mensajes.Value
                                if m.Trim() <> "" then JS.Alert m else 
                                    match datosOV.Value, View.TryGet aliadoW with
                                    | Some datos, Some al ->
                                        asyncResultM {
                                            let! resp = ActualizarDatosPersonales (al.id, datos) |> Rpc.ejecutarEvento
                                            refrescarData()
                                            sprintf "%A" resp|> JS.Alert
                                        } |> AsyncResultM.iterA (ResultMessage.summarized >> JS.Alert) id
                                    | _ -> JS.Alert "Error not caught FormaDatos"
                            )
                            .Create()
            
                    V(  seq {
                            yield! datReqsW.V
                        }
                        |> String.concat ", "
                        |> fun es -> if es <> "" then "Campos requeridos: " + es else ""
                    )   |> View.Sink mensajes.Set
                    forma.Doc
            
                let formaDoc() = aliadoIdDoc formaAliado
            
            module FormaGenerica =
            
                let forma(mensajeW: View<string>) (cambioW: View<bool>) (contenido : Doc) salvar =
                    let mensajes      = Var.Create ""
                    let mostrar       = Var.Create false
                    
                    let forma =
                        TemplateLib.FormaGenerica()
                            .Mensajes(if mostrar.V then mensajeW.V else ""    )
                            .Changed( if cambioW.V then "" else "mui-btn--primary" )
                            .Content( contenido            ) 
                            .Salvar(  fun _ -> salvar())
                            .Create()
            
                    forma.Doc
            
            module FormaContactos =
                open VariousUI
            
                let ftel = (function Telefono          tel -> Some tel |_-> None), Telefono
                let fcor = (function CorreoElectronico cor -> Some cor |_-> None), CorreoElectronico
                let fdir = (function Direccion         dir -> Some dir |_-> None), Direccion        
            
                let formaTelefonos (aliadoW: View<Aliado>) =
                    let contactosV    = Var.Create [||]
                    
                    aliadoW
                    |> View.Map  (fun a -> a.contactos)
                    |> View.Sink contactosV.Set
            
                    let contactosIV = V( contactosV.V |> Seq.indexed )
            
                    let makeVar (f, fr) i = 
                        Var.Make (V(contactosV.V |> Seq.tryItem i |> Option.bind f )) 
                                (function Some nv -> Array.replace i (fr nv) contactosV.Value |> contactosV.Set |_-> () )
                    
                    let tels = V( contactosIV.V |> Seq.choose (fun (i, c) -> fst ftel c |> Option.map (fun _ -> i) ) )
                    let cors = V( contactosIV.V |> Seq.choose (fun (i, c) -> fst fcor c |> Option.map (fun _ -> i) ) )
                    let dirs = V( contactosIV.V |> Seq.choose (fun (i, c) -> fst fdir c |> Option.map (fun _ -> i) ) )
            
                    let telDocs = tels |> Doc.BindSeqCachedBy id (makeVar ftel >> Telefono         .formaDoc >> snd )
                    let corDocs = cors |> Doc.BindSeqCachedBy id (makeVar fcor >> CorreoElectronico.formaDoc >> snd )
                    let dirDocs = dirs |> Doc.BindSeqCachedBy id (makeVar fdir >> Direccion        .formaDoc >> snd )
            
                    FormaGenerica.forma
            
            
                let formaContactos (aliadoW: View<Aliado>) =
                    let mensajes      = Var.Create ""
                    let mostrar       = Var.Create false
                    let contactosV    = Var.Create [||]
                    
                    aliadoW
                    |> View.Map  (fun a -> a.contactos)
                    |> View.Sink contactosV.Set
            
                    let contactosIV = V( contactosV.V |> Seq.indexed )
            
                    let makeVar (f, fr) i = 
                        Var.Make (V(contactosV.V |> Seq.tryItem i |> Option.bind f )) 
                                (function Some nv -> Array.replace i (fr nv) contactosV.Value |> contactosV.Set |_-> () )
                    
                    let ftel = (function Telefono          tel -> Some tel |_-> None), Telefono
                    let fcor = (function CorreoElectronico cor -> Some cor |_-> None), CorreoElectronico
                    let fdir = (function Direccion         dir -> Some dir |_-> None), Direccion        
            
                    let tels = V( contactosIV.V |> Seq.choose (fun (i, c) -> fst ftel c |> Option.map (fun _ -> i) ) )
                    let cors = V( contactosIV.V |> Seq.choose (fun (i, c) -> fst fcor c |> Option.map (fun _ -> i) ) )
                    let dirs = V( contactosIV.V |> Seq.choose (fun (i, c) -> fst fdir c |> Option.map (fun _ -> i) ) )
            
                    let telDocs = tels |> Doc.BindSeqCachedBy id (fun i -> makeVar ftel i |> Telefono         .formaDoc |> snd |> removeButton (fun _ -> contactosV.Value |> Array.remove i |> contactosV.Set ) )
                    let corDocs = cors |> Doc.BindSeqCachedBy id (fun i -> makeVar fcor i |> CorreoElectronico.formaDoc |> snd |> removeButton (fun _ -> contactosV.Value |> Array.remove i |> contactosV.Set ) )
                    let dirDocs = dirs |> Doc.BindSeqCachedBy id (fun i -> makeVar fdir i |> Direccion        .formaDoc |> snd |> removeButton (fun _ -> contactosV.Value |> Array.remove i |> contactosV.Set ) )
            
                    let forma =
                        TemplateLib.FormaContactos()
                            .Mensajes(    if mostrar.V then mensajes     .V else ""                             )
                            .Changed(     if aliadoW.V.contactos = contactosV.V then "" else "mui-btn--primary" )
                            .Telefonos(   telDocs              ) 
                            .Correos(     corDocs              ) 
                            .Direcciones( dirDocs              ) 
                            .MasTelefono( fun _ -> contactosV.Value |> Array.append <| [| Telefono          telVacio    |] |> contactosV.Set)
                            .MasCorreo(   fun _ -> contactosV.Value |> Array.append <| [| CorreoElectronico correoVacio |] |> contactosV.Set)
                            .MasDireccion(fun _ -> contactosV.Value |> Array.append <| [| Direccion         dirVacio    |] |> contactosV.Set)
                            .Salvar(fun ev ->
                                mostrar.Set true
                                let m =  mensajes.Value
                                if m.Trim() <> "" then JS.Alert m else 
                                    match View.TryGet aliadoW with
                                    | Some al ->
                                        asyncResultM {
                                            let! resp = ActualizarContactos (al.id, contactosV.Value) |> Rpc.ejecutarEvento
                                            refrescarData()
                                            sprintf "%A" resp|> JS.Alert
                                        } |> AsyncResultM.iterA (ResultMessage.summarized >> JS.Alert) id
                                    | _ -> JS.Alert "Error not caught FormaDatos"
                            )
                            .Create()
            
                    forma.Doc
            
                let formaDoc() = aliadoIdDoc formaContactos
            
            module FormaFormasPago =
                open VariousUI
            
            
            
            
            
                let msg ({ FormaPago.authorizeIdR = idR }) = match idR with | Error m -> m | Ok _ -> "" 
            
                let ftar = (fun cp -> match cp.cuentaPago with TarjetaCredito tar -> Some (tar, msg cp) |_-> None), fun fp v -> { fp with cuentaPago = TarjetaCredito v ; authorizeIdR = Error "" }
                let fcta = (fun cp -> match cp.cuentaPago with CuentaBancaria cta -> Some (cta, msg cp) |_-> None), fun fp v -> { fp with cuentaPago = CuentaBancaria v ; authorizeIdR = Error "" }
            
                let formaFormasPago (aliadoW: View<Aliado>) =
                    let mensajes      = Var.Create ""
                    let mostrar       = Var.Create false
                    let formasPagoV   = Var.Create [||]
                    
                    aliadoW
                    |> View.Map  (fun a -> a.formasPago)
                    |> View.Sink formasPagoV.Set
            
                    let formasPagoIV = V( formasPagoV.V |> Seq.indexed )
            
                    let makeVar (f: (FormaPago -> ('a * string) option) , fr : (FormaPago -> 'a -> FormaPago)) i = 
                        Var.Make (V(formasPagoV.V |> Seq.tryItem i |> Option.bind f )) 
                                (function Some nv -> Array.replace i (fr formasPagoV.Value.[i] (fst nv) ) formasPagoV.Value |> formasPagoV.Set |_-> () )
                    
                    let tars = V( formasPagoIV.V |> Seq.choose (fun (i, c) -> fst ftar c |> Option.map (fun _ -> i) ) )
                    let ctas = V( formasPagoIV.V |> Seq.choose (fun (i, c) -> fst fcta c |> Option.map (fun _ -> i) ) )
            
                    let tarDocs = tars |> Doc.BindSeqCachedBy id (fun i -> makeVar ftar i |> TarjetaCredito.formaDocO |> snd |> removeButton (fun _ -> formasPagoV.Value |> Array.remove i |> formasPagoV.Set ) )
                    let ctaDocs = ctas |> Doc.BindSeqCachedBy id (fun i -> makeVar fcta i |> CuentaBancaria.formaDocO |> snd |> removeButton (fun _ -> formasPagoV.Value |> Array.remove i |> formasPagoV.Set ) )
            
                    let fp cp = {
                        cuentaPago   = cp
                        authorizeIdR = Error ""
                        nombre       = ""
                    }
            
                    let forma =
                        TemplateLib.FormaCuentas()
                            .Mensajes(    if mostrar.V then mensajes.V else ""                                    )
                            .Changed(     if aliadoW.V.formasPago = formasPagoV.V then "" else "mui-btn--primary" )
                            .Tarjetas(    tarDocs              ) 
                            .Cuentas(     ctaDocs              ) 
                            .MasTarjeta(  fun _ -> formasPagoV.Value |> Array.append <| [| TarjetaCredito tarVacio |> fp |] |> formasPagoV.Set)
                            .MasCuenta(   fun _ -> formasPagoV.Value |> Array.append <| [| CuentaBancaria ctaVacio |> fp |] |> formasPagoV.Set)
                            .Salvar(fun ev ->
                                mostrar.Set true
                                let m =  mensajes.Value
                                if m.Trim() <> "" then JS.Alert m else 
                                    match View.TryGet aliadoW with
                                    | Some al ->
                                        asyncResultM {
                                            let! resp = ActualizarFormasPago (al.id, formasPagoV.Value) |> Rpc.ejecutarEvento
                                            refrescarData()
                                            sprintf "%A" resp|> JS.Alert
                                        } |> AsyncResultM.iterA (ResultMessage.summarized >> JS.Alert) id
                                    | _ -> JS.Alert "Error not caught FormaDatos"
                            )
                            .Create()
            
                    forma.Doc
            
                let formaDoc() = aliadoIdDoc formaFormasPago
            
            module RenderAliados =
                open SortWith
            
                let aliados() =
                    let expandidos = Var.Create None
                    let hijosDeO   = Var.Create None
            
                    let hijosDe id = hijosDeO.Value |> Option.map (fun f -> f id) |> Option.defaultValue [||]
            
                    let referidos al =
                        if al.nReferidos = 0 then "-" else
                        sprintf "%d/%d" al.nRefActivos al.nReferidos
                    let descendientes al =
                        if al.nDescendientes = 0 then "-" else
                        sprintf "%d/%d" al.nDescActivos al.nDescendientes
                    let comision v = if v = 0 then "-" else money v 
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
                    let seleccionar id =  Some id |> selAliadoIdOV.Set
                    let sortAliados als =
                        let als = als |> Seq.sortWith (desc (fun al -> al.comision                       )
                                                    &>  asc (fun al -> al.status                         )
                                                    &> desc (fun al -> al.nRefActivos , al.nReferidos    )
                                                    &> desc (fun al -> al.nDescActivos, al.nDescendientes)
                                                    &>  asc (fun al -> Aliado.nombre al.datosPersonales  ) )
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
                            V modeloV.V.aliados
                            |> View.Map2 (fun _ -> sortAliados) expandidos.View
                            |> Doc.BindSeqCachedViewBy (fun al -> al.id) (fun alid alv ->
                                TemplateLib.FilaAliado()
                                    .nombre(              Aliado.nombre alv.V.datosPersonales)
                                    .status(              sprintf "%A"  alv.V.status         )
                                    .tipo(                sprintf "%A"  alv.V.tipo           )
                                    .nivel(               string        alv.V.nivel          )
                                    .referidos(           referidos     alv.V                )
                                    .descendientes(       descendientes alv.V                )
                                    .comision(            comision      alv.V.comision       )
                                    .expandido(           expandido     alid                 )
                                    .expandir(   fun _ -> expandir      alid                 )
                                    .seleccionado( if Some alid = selAliadoIdOV.V then "seleccionado" else "" )
                                    .seleccionar(fun _ -> seleccionar   alid                 )
                                    .Doc()
                            )
                        ).Doc()
            module RenderAliado =
            
                let calculo() =
            
                    let prem = V modeloV.V.premisas
            
                    let comision v = if v = 0 then "-" else sprintf "%5d$" v
                    
                    let alvO = 
                        let aliados = V modeloV.V.aliados
                        let alid    = V modeloV.V.idAliado
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
                            .comision(         money (fst comisionV.V + snd comisionV.V ) )
                            .comReferido(      money (fst comisionV.V                   ) )
                            .comDescendiente(  money (snd comisionV.V                   ) )
                            .porReferido(      money (fst premisasV.V                   ) )
                            .porDescendiente(  money (snd premisasV.V                   ) )
                            .Doc() 
            
                    selAliadoIdDoc calculoDoc
            
                let aliado() =
            
                    let comision v = if v = 0 then "-" else sprintf "%5d$" v
            
                    let correo al = 
                        al.contactos
                        |> Seq.tryPick (function CorreoElectronico{ email = c } -> Some c |_-> None)
                        |> Option.defaultValue "correo no encontrado!"
                    
                    let aliadoDoc (alv: View<Aliado>) =
                        TemplateLib.Aliado()
                            .nombre(           Aliado.nombre2 alv.V.datosPersonales)
                            .status(           sprintf "%A"   alv.V.status         )
                            .tipo(             sprintf "%A"   alv.V.tipo           )
                            .contacto(         correo         alv.V                )
                            .Calculo(          calculo()                           )
                            .Doc() 
            
                    selAliadoIdDoc aliadoDoc
            
            
        module MainProgram =
            open Templating
            open ModeloUI
        
            open FsRoot
            module AF = AppFramework 
        
            let layoutName = "ProzperLyt"
        
            let scrollToBottom (e:Dom.Element) (_:obj) = 
                async { 
                    do! Async.Sleep 100
                    do  e.ScrollTop <- e.ScrollHeight
                } |> Async.Start
        
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
                    JS.Window.Location.Replace "/" |> ignore
                } |> Rpc.iterA 
        
            let getContentDoc() =
                ModeloUI.contentVar.View
                |> View.Map(fun content ->
                    LayoutEngine.splitName "Prozper" content
                    ||> AF.tryGetDoc
                    |>  Option.map (LayoutEngine.getDocFinal [])
                    |>  Option.defaultWith (fun () -> sprintf "Doc not found %s" content |> LayoutEngine.errDoc)
                )
                |> Doc.EmbedView
        
            [< SPAEntryPoint >]    
            let mainProgram() =
                let titleV          = Var.Create "Prozper"
                let mesActualW      = V (mesToString    ModeloUI.modeloV.V.periodoActual  )
                let anoActualW      = V (string         ModeloUI.modeloV.V.anoActual      )
                let nombreAliadoW   = V (Aliado.nombre2 ModeloUI.aliadoW.V.datosPersonales)
                let statusAliadoW   = V (string         ModeloUI.aliadoW.V.status         )
                let comisionAliadoW = V (string         ModeloUI.aliadoW.V.comision       )
                let datosAliadoW    = V (string         ModeloUI.aliadoW.V.nReferidos     )
        
                AF.addPlugIn {
                    AF.plgName    = "Prozper"
                    AF.plgVars    = [| AF.newVar  "title"        titleV
                                       AF.newVar  "contentVar"   ModeloUI.contentVar
                                    |]  
                    AF.plgViews   = [| AF.newViw  "mesActual"          mesActualW
                                       AF.newViw  "anoActual"          anoActualW
                                       AF.newViw  "aliado"             nombreAliadoW
                                       AF.newViw  "status"             statusAliadoW
                                       AF.newViw  "comision"           comisionAliadoW
                                       AF.newViw  "datos"              datosAliadoW
                                    |]  
                    AF.plgDocs    = [| AF.newDoc  "Aliados"         (lazy RenderAliados  .aliados () )
                                       AF.newDoc  "Aliado"          (lazy RenderAliado   .aliado  () )
                                       AF.newDoc  "Calculo"         (lazy RenderAliado   .calculo () )
                                       AF.newDoc  "FormaRegistro"   (lazy FormaRegistro  .formaDoc() )
                                       AF.newDoc  "FormaDatos"      (lazy FormaDatos     .formaDoc() )
                                       AF.newDoc  "FormaContactos"  (lazy FormaContactos .formaDoc() )
                                       AF.newDoc  "FormaFormasPago" (lazy FormaFormasPago.formaDoc() )
                                       AF.newDoc  "contentDoc"      (lazy getContentDoc           () )
                                    |]  
                    AF.plgActions = [| AF.newAct  "Logout"      logout
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
        
                ModeloUI.refrescarData()
        
                TemplateLib()
                    .MainContent( AF.getMainDoc.Value )
                    .Bind()
                titleV.View |> View.Sink (fun t -> JS.Document.Title <- t)
        
            let mainProgramLoggedOff refId =
                ModeloUI.refAliadoIdOV.Set <| Some refId
                mainProgram()
        
        
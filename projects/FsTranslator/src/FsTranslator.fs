#nowarn "1178"
#nowarn "1182"
#nowarn "40"
#nowarn "25"
////#cd @"..\projects\FsTranslator\src"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\WebSharper.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\WebSharper.Compiler.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\WebSharper.Compiler.FSharp.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\System.Reflection.Metadata.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\FSharp.Compiler.Service.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\Mono.Cecil.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\Mono.Cecil.Pdb.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\Mono.Cecil.Mdb.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
//#nowarn "1178"
//#nowarn "1182"
//#nowarn "40"
//#nowarn "25"

//#cd @"..\projects\FsTranslator\src"
//#nowarn "1178"
//#nowarn "1182"
//#nowarn "40"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
#if INTERACTIVE
//#I @"../WebServer/bin"
module FSSGlobal   =
#else
namespace FSSGlobal
#endif

// Code to be evaluated using FSI: `Evaluate F#`
#if WEBSHARPER
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\WebSharper.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\WebSharper.Compiler.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\WebSharper.Compiler.FSharp.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\System.Reflection.Metadata.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\FSharp.Compiler.Service.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\Mono.Cecil.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\Mono.Cecil.Pdb.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\Mono.Cecil.Mdb.dll"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461"
  
  open WebSharper
  open WebSharper.JavaScript
  open WebSharper.UI
  open WebSharper.UI.Client
  type on   = WebSharper.UI.Html.on
  type attr = WebSharper.UI.Html.attr
#endif
#if WEBSHARPER
  [<WebSharper.JavaScript>]
#endif
  module Useful =
    let extract n (s:string) = s.Substring(0, min n s.Length)
    
#if WEBSHARPER
    [< Inline "(function (n) { return n.getFullYear() + '-' +(n.getMonth() + 1) + '-' +  n.getDate() + ' '+n.getHours()+ ':'+n.getMinutes()+ ':'+n.getSeconds()+ ':'+n.getMilliseconds() })(new Date(Date.now()))" >]
#endif
    let nowStamp() = 
        let t = System.DateTime.UtcNow // in two steps to avoid Warning: The value has been copied to ensure the original is not mutated
        t.ToString("yyyy-MM-dd HH:mm:ss.fff", System.Globalization.CultureInfo.InvariantCulture)
    
    module Async =
        let map f va = 
            async { 
                let! a = va
                return f a 
            } 
        let iter f va = 
            async { 
                let! a = va
                do f a 
            } 
    
        let retn x = async.Return x
    
        let apply fAsync xAsync = async {
            let! fChild = Async.StartChild fAsync
            let! xChild = Async.StartChild xAsync
            let! f = fChild
            let! x = xChild 
            return f x 
            }
    
        let bind f va = async.Bind(va, f)
        let sleepThen f milliseconds =
            async {
                do! Async.Sleep milliseconds
                do  f()
            }
    
    module KeyVal =
        //let inline getEnumerator dict = (^a : (member get_Enumerator : _) (dict, ()))
        let inline tryGetValue key (dict) =
            dict 
            :> System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<_, _>> 
            |> Seq.tryPick (fun kp -> if kp.Key = key then Some kp.Value else None)
    
    
    module String =
        let splitByChar (c: char) (s: string) = s.Split c
        let trim                  (s: string) = s.Trim()
        let append     (a: string)(b: string) =  a + b
        
        
    open System
//#nowarn "1178"
         
    module Option =
        let defaultValue v =
            function
            | Some x -> x
            | None   -> v
    
        let defaultWith f =
            function
            | Some x -> x
            | None   -> f()
    
        let call v = 
            function
            | None   -> None
            | Some f -> f v |> Some
    
        let iterF v = 
            function
            | None   -> ()
            | Some f -> f v
    
        let iterFO vO fO = 
            match vO, fO with
            | Some v, Some f -> f v
            | _     , _      -> ()
    
        let apply vO fO =
            match vO, fO with
            | Some v, Some f -> f v |> Some
            | _     , _      -> None
    
        let modify modifier = Option.map (fun f -> modifier f) >> defaultValue id
          
    
//#nowarn "25"
    type ErrMsg = 
        abstract member ErrMsg   : string
        abstract member IsWarning: bool
    
#if WEBSHARPER
    [<JavaScript>]
#endif
    type ExceptionThrown(exn:Exception) =
        interface ErrMsg with
            member this.ErrMsg   : string = sprintf "%A" exn
            member this.IsWarning: bool   = false
        override this.ToString() = (this :> ErrMsg).ErrMsg
    
#if WEBSHARPER
    [<JavaScript>]
#endif
    type ErrOptionIsNone() =
        interface ErrMsg with
            member this.ErrMsg   : string = "Option is None"
            member this.IsWarning: bool   = false
        override this.ToString() = (this :> ErrMsg).ErrMsg
    
    type ErrSimple(msg, warning) =
        interface ErrMsg with
            member this.ErrMsg   : string = msg
            member this.IsWarning: bool   = warning
        override this.ToString() = (this :> ErrMsg).ErrMsg
    
    type Result< 'TSuccess> = Result  of 'TSuccess option * ErrMsg    []     
    type ResultS<'TSuccess> = ResultS of 'TSuccess option * ErrSimple []
    
    module Result =
        let inline succeed             x       = Result (Some x           , [|  |]             )
        let inline succeedWithMsg      x  m    = Result (Some x           , [|m |]             )
        let inline succeedWithMsgs     x  ms   = Result (Some x           ,   ms               )
        let inline fail                   m    = Result (None             , [|m |]             )
        let inline failWithMsgs           ms   = Result (None             ,   ms               )
        let inline map       f (Result(o, ms)) = Result (o |> Option.map f,   ms               )
        let inline mapErr    f (Result(o, ms)) = Result (o                ,   ms |> Array.map f)
        let inline mapMsg    f (Result(o, ms)) =        (o                ,   ms |> Array.map f)
        let inline mapMsgs   f (Result(o, ms)) =        (o                ,   ms |>           f)
        let inline getOption   (Result(o, _ )) =         o                   
        let inline getMsgs     (Result(_, ms)) =                             ms
        let inline mergeMsgs              ms r = Result (r |> mapMsgs   (Array.append ms) )
        let inline combine     (Result(o, ms)) (rb: unit -> Result<_>) = o |> Option.map (fun _ -> rb() |> mergeMsgs ms) |> Option.defaultValue (Result(None, ms))
        let inline bind      f (Result(o, ms)) = 
            match o with
            | Some x   -> match f x with Result(o2, ms2) -> Result(o2, Array.append ms ms2)
            | None     -> Result(None, ms)
        let inline apply (Result(fO, fMs))  (Result(o , ms)) = 
            match fO, o with
            | Some f, Some x -> Result(f x |> Some, Array.append fMs ms)
            | _              -> Result(None       , Array.append fMs ms)
            
        let inline failSimpleError   m = (m, false) |> ErrSimple |> fail 
        let inline failSimpleWarning m = (m, true ) |> ErrSimple |> fail 
    
    
        let (|Success|Failure|) =
            function 
            | Result(Some x, ms) -> Success (x, ms) 
            | Result(None  , ms) -> Failure     ms  
    
    //    let successTee f result =                           // given an RopResult, call a unit function on the success branch
    //        let fSuccess (x,msgs) =                         // and pass thru the result
    //            f (x,msgs)
    //            Success (x,msgs) 
    //        either fSuccess Failure result
    //
    //    let fFailure2 f errs = 
    //        f errs
    //        Failure errs 
    //    let failureTee f result =                           /// given an RopResult, call a unit function on the failure branch
    //        either Success (fFailure2 f) result
    //
    //    let mapMessagesR f result =                         /// given an RopResult, map the messages to a different error type
    //        match result with 
    //        | Success (x,msgs) -> 
    //            let msgs' = List.map f msgs
    //            Success (x, msgs')
    //        | Failure errors -> 
    //            let errors' = List.map f errors 
    //            Failure errors' 
    //
    //    let valueOrDefault f result =                       /// given an RopResult, in the success case, return the value.
    //        match result with                               /// In the failure case, determine the value to return by 
    //        | Success (x,_) -> x                            /// applying a function to the errors in the failure case
    //        | Failure errors -> f errors
    //
    //    let failIfNone message = function                   /// lift an option to a RopResult.
    //        | Some x -> succeed x                           /// Return Success if Some
    //        | None -> fail message                          /// or the given message if None
    //
    //    let failIfNoneR message = function                  /// given an RopResult option, return it
    //        | Some rop -> rop                               /// or the given message if None
    //        | None -> fail message 
    
        let failException e = ExceptionThrown(e) :> ErrMsg
    
    ///            tryCall: (exn -> Result<'b>) ->  ('a -> Result<'b>) -> 'a -> Result<'b> =
        let inline tryCall (f:'a -> Result<'b>) (v:'a) : Result<'b> = try f v with e -> failException e |> fail
    
        type ropBuilder() =
            member inline this.Return     (x)                       = succeed x
            member inline this.ReturnFrom (x)                       = x
            member        this.Bind       (w:Result<'a>, r: 'a -> Result<'b>) = bind (tryCall r) w
            member inline this.Zero       ()                        = succeed ()
            member inline this.Delay      (f)                       = f
            member inline this.Combine    (a, b)                    = combine a b
            member inline this.Run        (f)                       = f()
            member this.While(guard, body) =
                if not (guard()) 
                then this.Zero() 
                else this.Bind( body(), fun () -> 
                    this.While(guard, body))  
            member this.TryWith(body, handler) =
                try this.ReturnFrom(body())
                with e -> handler e
            member this.TryFinally(body, compensation) =
                try this.ReturnFrom(body())
                finally compensation()
            member this.Using(disposable:#System.IDisposable, body) =
                let body' = fun () -> body disposable
                this.TryFinally(body', fun () -> if disposable :> obj <> null then disposable.Dispose() )
            member this.For(sequence:seq<_>, body) =
                this.Using(sequence.GetEnumerator(),fun enum -> 
                    this.While(enum.MoveNext, 
                        this.Delay(fun () -> body enum.Current)))              
    
        let result = ropBuilder()
    //    let inline flow_ () = new ropBuilder ()
    
    //    let fromChoice context c =  context?????
        let fromChoice c =
            match c with | Choice1Of2 v -> succeed v
                         | Choice2Of2 e -> fail    e
    
        let fromOption m =
            function | None   -> fail    m
                     | Some v -> succeed v
    
        let toOption   (Result(o, _ )) = o
        let toOptionMs (Result(o, ms)) = o, ms
    
        let tryProtection() : Result<unit> = succeed ()
    
        let failIfFalse m v : Result<unit>  = if v then succeed () else m |> fail 
        let failIfTrue  m v : Result<unit>  = if v then m |> fail  else succeed () 
                
        let ifError   def (Result(o, _ )) = o |> Option.defaultValue            def
        let withError f   (Result(o, ms)) = o |> Option.defaultWith  (fun () -> f ms)
    
    //    let processMessages mtype (msgs: PossibleMessages list) =
    //        msgs
    //        |> List.iter (fun o -> WebSharper.JavaScript.JS.Alert     <| mtype + ": " + (sprintf "%A" o)
    //                               WebSharper.JavaScript.Console.Log o)
    //
    //    let notifyMessages R =
    //        match R with | Success (_, m) -> processMessages "N" m
    //                     | Failure     m  -> processMessages "E" m
    //
    //    let messagesDo f =
    //        function | Success (_, ms) -> f false ms
    //                 | Failure     ms  -> f true  ms
    
        let seqCheck s = 
            s 
            |> (fun elems -> match      elems |> Seq.exists(function | Failure _    -> true    | _ -> false) with
                             | true  -> elems |> Seq.pick  (function | Failure ms   -> Some ms | _ -> None ) |> failWithMsgs
                             | false -> elems |> Seq.map   (function | Result (vO,_)-> vO.Value            ) |> succeed
            )
    
        let msgs2String   (ms: ErrMsg []) = ms |> Array.map (fun m -> m.ErrMsg)
        let getMessages   (ms: ErrMsg []) = ms |> msgs2String |> String.concat "\n"
        let countMessages (ms: ErrMsg []) =
            if ms = [||] then "" else
            let errors   = ms |> Array.filter(fun m -> m.IsWarning |> not)
            let warnings = ms |> Array.filter(fun m -> m.IsWarning       )
            match errors.Length, warnings.Length with
            | 0, 0 -> sprintf "%s"
            | 1, 0 -> sprintf "%s"
            | 0, 1 -> sprintf "%s"
            | 1, 1 -> sprintf "1 error, 1 warning\n%s"
            | e, 0 -> sprintf "%d errors\n%s" e
            | 0, w -> sprintf "%d warnings\n%s" w
            | e, w -> sprintf "%d errors, %d warnings\n%s" e w
            <| getMessages ms
    
        let result2String res =
            match res with
            | Result(vO, msgs) -> Array.append [| vO |> Option.defaultValue "Failed: " |] (msgs2String msgs)
            |> String.concat "\n"
    
        let fromResultS (ResultS(v, ms)) = Result (v, ms |> Array.map (fun m -> m :> ErrMsg                     ))
        let toResultS   (Result( v, ms)) = ResultS(v, ms |> Array.map (fun m -> ErrSimple(m.ErrMsg, m.IsWarning)))
    
    open Result
    
    module ResultS =
        let fromResult = Result.toResultS
        let toResult   = Result.fromResultS
    
    type Wrap<'T> =
    | WResult of Result<'T>
    | WAsync  of Async<'T>
    | WAsyncR of Async<Result<'T>>
    | WSimple of 'T
    | WOption of 'T option
    
    module Wrap =
        let errOptionIsNone = ErrOptionIsNone() :> ErrMsg
    
        let wb2arb ms = 
            function
            | WAsync       ab  -> async { let!   b = ab
                                          return succeedWithMsgs b               ms }
            | WAsyncR     arb  -> async { let!   rb = arb                               
                                          return rb |> mergeMsgs                 ms }
            | WResult      rb  -> async { return rb |> mergeMsgs                 ms }
            | WSimple       b                                                           
            | WOption (Some b) -> async { return succeedWithMsgs b               ms }
            | WOption None     -> async { return failWithMsgs      (Array.append ms [| errOptionIsNone |] )}
    
        let tryCall (f: 'a -> Wrap<'b>) (a:'a) = 
            try f a 
            with e -> failException e |> fail |> WResult
    
        let bind (f: 'a -> Wrap<'b>) (wa: Wrap<'a>) :Wrap<'b> =
            match wa with
            | WSimple         a       
            | WOption(Some    a)       
            | WResult(Success(a, [||])) -> tryCall f a
            | WOption None            -> None            |> WOption
            | WResult(Failure    ms ) -> failWithMsgs ms |> WResult 
            | WResult(Success(a, ms)) -> tryCall f a
                                         |> function
                                         | WSimple         b              
                                         | WOption(Some    b       ) -> succeedWithMsgs b               ms                   |> WResult 
                                         | WOption None              -> failWithMsgs (Array.append ms [| errOptionIsNone |] )|> WResult
                                         | WResult(Success(b, [||])) -> succeedWithMsgs b               ms                   |> WResult 
                                         | WResult(Success(b, m2  )) -> succeedWithMsgs b (Array.append ms m2)               |> WResult 
                                         | WResult(Failure    m2  )  -> failWithMsgs      (Array.append ms m2)               |> WResult 
                                         | WAsync  ab                -> async { let!  b = ab
                                                                                return succeedWithMsgs b ms
                                                                        } |> WAsyncR
                                         | WAsyncR arb               -> async { let! rb = arb
                                                                                return mergeMsgs ms rb
                                                                        } |> WAsyncR
            | WAsync         aa       -> async {
                                             let! a  = aa
                                             return! tryCall f a |> wb2arb [||]
                                         } |> WAsyncR
            | WAsyncR       ara       -> async {
                                             let! ar  = ara
                                             let  arb = match ar with
                                                        | Success(a, ms) -> tryCall f a |> wb2arb ms
                                                        | Failure    ms  -> async { return failWithMsgs ms }
                                             return! arb
                                         } |> WAsyncR
        let Return = WSimple 
        let map  (f: 'a -> 'b  ) = bind (f >> Return)     
        let inline getAsyncR (wb: Wrap<'T>) =
            match wb with
            | WAsync      va  -> async {
                                   let! v = va
                                   return      succeed                           v}
            | WSimple     v   -> async.Return (succeed                           v)
            | WOption     v   -> async.Return (Result.fromOption errOptionIsNone v)
            | WResult     v   -> async.Return                                    v
            | WAsyncR     vra -> vra
            
            
        let inline getAsyncWithDefault f w = getAsyncR w |> Async.map (Result.withError f)
        let inline getAsync              w = getAsyncWithDefault (fun ms -> raise (exn(getMessages ms))) w
    
        let toAsync            w = getAsync  w
        let toAsyncResult      w = getAsyncR w
        let toAsyncOption      w = getAsyncR w |> Async.map Result.toOption
        let toAsyncOptionMs    w = getAsyncR w |> Async.map Result.toOptionMs
        let toAsyncWithDefault w = getAsyncWithDefault w
    
    //    let call wb = wb |> getR Rop.notifyMessages
        let startV (processVal: ('t option * string) ->unit) (w: Wrap<'t>) =
            w
            |> getAsyncR
            |> fun asy -> Async.StartWithContinuations
                            (asy 
                           , Result.mapMsgs Result.getMessages  >> processVal
                           , sprintf "%O" >> (fun m -> None, m) >> processVal
                           , sprintf "%O" >> (fun m -> None, m) >> processVal)
                           
        let start (printMsg: string->unit) (w: Wrap<unit>) = 
            startV (function
                    | Some (), msgs ->               msgs |> printMsg 
                    | None   , msgs -> "Failed!\n" + msgs |> printMsg) w
    
        let wrapper2Async (f: 'a -> Wrap<'b>) a : Async<Result<'b>> =
            let wb = tryCall f a
            match wb with
            | WSimple _
            | WOption _               -> wb |> wb2arb [||]
            | WResult (Result(_, ms)) -> wb |> wb2arb ms
            | WAsync  ab              -> async { let!   b = ab
                                                 return succeed b }
            | WAsyncR arb             -> arb
    
        let addMsgs errOptionIsNone ms wb =
            if ms = [||] then wb else
            match wb with
            | WSimple          v       
            | WOption (Some    v)      -> WResult (succeedWithMsgs                        v ms)
            | WOption (None     )      -> WResult (fail errOptionIsNone |> Result.mergeMsgs ms)
            | WResult r                -> WResult (r                    |> Result.mergeMsgs ms)
            | WAsync           va      -> async {
                                            let! v = va
                                            return succeedWithMsgs v ms
                                          } |> WAsyncR
            | WAsyncR          vra     -> async {
                                            let! vr = vra
                                            return vr                    |> Result.mergeMsgs ms
                                          } |> WAsyncR
    
        let combine errOptionIsNone wa (wb: unit -> Wrap<_>) =
            match wa with
            | WSimple             _
            | WOption(       Some _)
            | WResult(Result(Some _,[||]))-> wb()
            | WResult(Result(Some _, ms ))-> wb() |> addMsgs errOptionIsNone ms
            | WAsync           aa         -> async { let!   _a = aa
                                                     let!   br = wb() |> toAsyncResult
                                                     return br
                                                    } |> WAsyncR
            | WAsyncR          ara        -> async { let!  ar = ara
                                                     match ar with
                                                     | Failure    ms -> return Result.failWithMsgs ms
                                                     | Success(_, ms)-> let! br = wb() |> toAsyncResult
                                                                        return br |> Result.mergeMsgs ms
                                                   } |> WAsyncR
            | WOption(       None     )   -> WOption None
            | WResult(Result(None, ms))   -> Result.failWithMsgs ms |> WResult
            
        let rec whileLoop pred body =
            if pred() then body() |> bind (fun () -> whileLoop pred body)
            else WSimple ()
            //while pred() do
            //    body() //|> ignore
            //WSimple ()
    
    
        type Builder() =
    //        member        this.Bind (wrapped: Async<Result<'a>>, restOfCExpr: 'a -> Wrap<'b>) = wrapped |> WAsyncR |> bind restOfCExpr //<< cannot differentiate from next 
            member        this.Bind (wrapped: Wrap<'a>         , restOfCExpr: 'a -> Wrap<'b>) = wrapped            |> bind restOfCExpr 
            member        this.Bind (wrapped: Async<'a>        , restOfCExpr: 'a -> Wrap<'b>) = wrapped |> WAsync  |> bind restOfCExpr  
            member        this.Bind (wrapped: Result<'a>       , restOfCExpr: 'a -> Wrap<'b>) = wrapped |> WResult |> bind restOfCExpr 
            member        this.Bind (wrapped: 'a option        , restOfCExpr: 'a -> Wrap<'b>) = wrapped |> WOption |> bind restOfCExpr 
            member inline this.Zero         ( ) = WSimple ()
            member inline this.Return       (x) = WSimple x
            member inline this.ReturnFrom   (w) = w
    //        member inline this.ReturnFrom   (w) = WAsync  w
    //        member inline this.ReturnFrom   (w) = WResult w
    //        member inline this.ReturnFrom   (w) = WOption w        
            member inline this.Delay        (f) = f
            member this.Run(f) = f()
            member        this.Combine   (a, b) = combine errOptionIsNone a b
            member        this.While(guard, body) = whileLoop guard body
            member this.TryWith(body, handler) =
                async {
                    let! r = body() |> toAsyncResult |> Async.Catch 
                    return
                        match r with
                        | Choice1Of2 v -> v
                        | Choice2Of2 e -> handler e
                } |> WAsyncR
            member this.TryFinally(body, compensation) =
                async {
                    let! r1 = body() |> toAsyncResult |> Async.Catch 
                    let _r2 = compensation()     
                    return
                        match r1 with
                        | Choice1Of2 v -> v
                        | Choice2Of2 e -> raise e
                } |> WAsyncR
            member this.Using(disposable:#System.IDisposable, body) =
                let body' = fun () -> body disposable
                this.TryFinally(body', fun () -> if disposable :> obj <> null then disposable.Dispose() )
            member this.For(sequence:seq<_>, body) =
                this.Using(sequence.GetEnumerator(),fun enum -> 
                    this.While(enum.MoveNext, 
                        this.Delay(fun () -> body enum.Current)))            
        let wrap    = Builder()
        let wrapper = Builder()  // deprecated use wrap instead
    
        let getResult callback (wb: Wrap<'T>) =
            match wb with
            | WSimple      s  -> s               |> succeed                                              |> callback
            | WOption(Some s) -> s               |> succeed                                              |> callback
            | WOption None    -> errOptionIsNone |> fail                                                 |> callback
            | WResult      rb -> rb                                                                      |> callback
            | WAsync       ab -> Async.StartWithContinuations(ab , (fun v   -> succeed v                 |> callback), 
                                                                   (fun exc -> failException exc |> fail |> callback), 
                                                                    fun can -> failException can |> fail |> callback)
            | WAsyncR     arb -> Async.StartWithContinuations(arb,                                          callback , 
                                                                   (fun exc -> failException exc |> fail |> callback), 
                                                                    fun can -> failException can |> fail |> callback)
    
    
#if WEBSHARPER
        [< Inline "console.log('runSynchronously should not be used in Javascript')" >]                       
#endif
        let runSynchronouslyR (w: Wrap<_>) =
            w
            |> getAsyncR
            |> Async.RunSynchronously
        let runSynchronouslyO count (w: Wrap<_>) =
            w
            |> runSynchronouslyR
            |> (Result.mapMsgs (if count then Result.countMessages else Result.getMessages))
        let runSynchronouslyS count (w: Wrap<_>) =
            w
            |> runSynchronouslyO count
            |> function
               | Some r, msgs -> sprintf "%O\n%s" r    msgs
               | None  , msgs -> sprintf "Failed!\n%s" msgs
               
    type Wrap<'T> with
        static member Start           (w:Wrap<_   >,           ?cancToken) = Async.Start           (Wrap.getAsync  w,                                ?cancellationToken= cancToken)
        static member StartAsTask     (w:Wrap<'T  >, ?options, ?cancToken) = Async.StartAsTask     (Wrap.getAsyncR w, ?taskCreationOptions= options, ?cancellationToken= cancToken)
#if WEBSHARPER
        [< Inline "console.log('RunSynchronously should not be used in Javascript')" >]                       
#endif
        static member RunSynchronouslyR(w:Wrap<'T  >, ?timeout, ?cancToken) = Async.RunSynchronously(Wrap.getAsyncR w, ?timeout            = timeout, ?cancellationToken= cancToken)
#if WEBSHARPER
        [< Inline "console.log('RunSynchronously should not be used in Javascript')" >]                       
#endif
        static member RunSynchronously( w:Wrap<'T  >, ?timeout, ?cancToken) = Async.RunSynchronously(Wrap.getAsync  w, ?timeout            = timeout, ?cancellationToken= cancToken)
    
  module UsefulDotNet =
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
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
            [| for m in ms do yield m.Value |] 
        with e -> [| |]
    
    open Microsoft.FSharp.Compiler.SourceCodeServices
    open Microsoft.FSharp.Compiler
    open Useful
    
    type FSharpErrors =
        | WarningFSharp                 of string
        | ErrFSharp                     of string
    with interface ErrMsg with
            member this.ErrMsg    = sprintf "%A"this
            member this.IsWarning = match this with | WarningFSharp _ -> true | _ -> false
    
    let getIndentFile input =
        match input with
        | Regex "^\\((\\d+)\\)\\s(.*)$" [_ ; indent ; file] -> int indent, file
        | _                                                 -> 0         , input
       
    let fSharpError2TranspilerError (error : FSharpErrorInfo) =
        let indent, file = System.IO.Path.GetFileNameWithoutExtension error.FileName |> getIndentFile  
        sprintf "%s (%d,%d) - (%d,%d) %s %d: %s" 
           file 
           error.StartLineAlternate (error.StartColumn - indent) 
           error.EndLineAlternate   (error.EndColumn   - indent) 
           error.Subcategory error.ErrorNumber error.Message
        |> (if   error.Severity = FSharpErrorSeverity.Error  
            then ErrFSharp     
            else WarningFSharp
           )
        :> ErrMsg
        
        
  module FsTranslator =
    
    module Translator =
        open Useful
        open UsefulDotNet
        open System
        open System.IO
        open System.Reflection
        
        module Re = WebSharper.Core.Resources
        module P  = WebSharper.PathConventions
        open WebSharper.Compiler
        open WebSharper.Compiler.FrontEnd
        open WebSharper.Core
        open WebSharper.Core.Resources
        open WebSharper.Compiler.CommandTools
        open Microsoft.FSharp.Compiler.SourceCodeServices
        open Microsoft.FSharp.Compiler
        
        type WebSharperError = AST.SourcePos option * CompilationError
        type TranslatorError =
            | MustProvideAssemblyOutputPath
            | MustProvideProjectPath
            | ErrWebSharper                 of string
            | NothingToTranslateToJavaScript
            | OutputAssemblyNotFound        of string
        with interface ErrMsg with
                member this.ErrMsg =
                    if this = NothingToTranslateToJavaScript then "WebSharper found nothing that required translation to JavaScript. Possibly a [< JavaScript >] attribute is missing." else
                    sprintf "%A"this
                member this.IsWarning = false
        
        let webSharperError2TranspilerError: WebSharperError -> ErrMsg =
            fun                              (posO, error)   ->
                posO 
                |> Option.map (fun pos -> sprintf "%s %A - %A " pos.FileName pos.Start pos.End )
                |> Option.defaultValue ""
                |>  sprintf "%s%s" <| error.ToString()
                |> ErrWebSharper
                :> ErrMsg
                
        let PrintGlobalError err = eprintfn "WebSharper error FS9001: %s" (ErrorPrinting.NormalizeErrorString err)
                
        module M = WebSharper.Core.Metadata

        let compile(logger, checker:FSharpChecker, prevMeta : System.Threading.Tasks.Task<option<M.Info>>, argv, config: WsConfig, assemblyName) = 
            stdout.WriteLine("About to compile, hit enter to continue")
            stdin.ReadLine() |> ignore
            let path = config.ProjectFile
            
            let projectOptionsOpt =
                try
                    checker.GetProjectOptionsFromCommandLineArgs(path, argv) |> Some
                with e ->
                    None

            match projectOptionsOpt with
            | None -> None
            | Some projectOptions ->

            let checkProjectResults = 
                projectOptions
                |> checker.ParseAndCheckProject 
                |> Async.RunSynchronously

            TimedStage "Checking project"

            try
                prevMeta.Wait()
                prevMeta.Result
            with :? System.AggregateException as exn ->
                exn.InnerExceptions
                |> Seq.map (sprintf "%O")
                |> String.concat "\r\n"
                |> failwith
            |> function
            | None -> None
            | Some refMeta ->

            TimedStage "Waiting on merged metadata"

            if checkProjectResults.Errors |> Array.exists (fun e -> e.Severity = FSharpErrorSeverity.Error) then
                if assemblyName = "WebSharper.Main" || config.ProjectType = Some BundleOnly then
                    printfn "%A" checkProjectResults.Errors
                None
            else
            
            let comp = 
                WebSharper.Compiler.FSharp.ProjectReader.transformAssembly
                    (WebSharper.Compiler.Compilation(refMeta, true))
                    assemblyName
                    config
                    checkProjectResults

            WebSharper.Compiler.Translator.DotNetToJavaScript.CompileFull comp
            
            //if this.UseVerifier then
            //    comp.VerifyRPCs()
                
            TimedStage "WebSharper translation"

            Some comp
            
        let CompileToJsW: WsConfig -> Wrap<string> =
            fun           config   -> Wrap.wrapper {
                do!  config.ProjectFile  = null       |> Result.failIfTrue  MustProvideProjectPath
                do!  config.AssemblyFile = null       |> Result.failIfTrue  MustProvideAssemblyOutputPath
                let  fsharpChecker       = FSharpChecker.Create(keepAssemblyContents = true)
                let! errors, exitCode    = fsharpChecker.Compile(config.CompilerArgs)
                let  fsErrors            = errors |> Array.map fSharpError2TranspilerError 
                do!  (if exitCode = 0 then Result.succeedWithMsgs () else Result.failWithMsgs) <| fsErrors
                do!  File.Exists config.AssemblyFile  |> Result.failIfFalse (OutputAssemblyNotFound config.AssemblyFile)
                let  assemblyBytes       = File.ReadAllBytes config.AssemblyFile
                do   System.IO.File.Delete config.AssemblyFile
                let  paths               = [   for r in config.References -> 
                                                   Path.GetFullPath r
                                               yield Path.GetFullPath config.AssemblyFile
                                           ]        
                let  aR                  = AssemblyResolver.Create().SearchPaths(paths)
                let  loader              = Loader.Create aR (printfn "%s")
                let  refs                = [ for r in config.References -> loader.LoadFile(r, false) ]
                let wsRefsMeta =
                    System.Threading.Tasks.Task.Run(fun () ->
                        let mutable refError = false
                        let wsRefs, metas = 
                            refs |> List.choose (fun r -> 
                                match TryReadFromAssembly FullMetadata r with
                                | None -> None
                                | Some (Ok m) -> Some (r, m)
                                | Some (Error e) ->
                                    refError <- true
                                    PrintGlobalError e
                                    None
                            ) |> List.unzip
                        if refError then None
                        elif List.isEmpty metas then Some ([], [], WebSharper.Core.Metadata.Info.Empty) 
                        else
                            try
                                Some (
                                    wsRefs, metas,
                                    { 
                                        WebSharper.Core.Metadata.Info.UnionWithoutDependencies metas with
                                            Dependencies = WebSharper.Core.DependencyGraph.Graph.NewWithDependencyAssemblies(metas |> Seq.map (fun m -> m.Dependencies)).GetData()
                                    }
                                )
                            with e ->
                                refError <- true
                                PrintGlobalError ("Error merging WebSharper metadata: " + e.Message)
                                None
                    )
                let refMeta = wsRefsMeta.ContinueWith(fun (t: System.Threading.Tasks.Task<_>) -> 
                                match t.Result with 
                                | Some (_, _, m) -> Some m 
                                | _ -> None )
                let  referencedAsmNames     = paths
                                              |> Seq.map (fun i -> 
                                                  let n = Path.GetFileNameWithoutExtension(i)
                                                  n, i
                                              ) |> Map.ofSeq
                let  thisName               = Path.GetFileNameWithoutExtension config.AssemblyFile
                let  assemblyResolveHandler = ResolveEventHandler(fun _ e ->
                        //printfn "assemblyResolveHandler %s" e.Name
                        let assemblyName    = AssemblyName(e.Name).Name
                        match Map.tryFind assemblyName referencedAsmNames with
                        | Some p when assemblyName = "FSharp.Core" -> typeof<option<_>>.Assembly
                        | Some p when assemblyName = thisName      -> Assembly.Load assemblyBytes
                        | Some p                                   -> Assembly.LoadFrom(p)
                        | _                                        -> null
                    )
                System.AppDomain.CurrentDomain.add_AssemblyResolve(assemblyResolveHandler)
                let! comp        = compile(printfn "%s", fsharpChecker, refMeta, config.CompilerArgs, config, config.ProjectFile) 
                let  wsErrors    = comp.Errors |> Seq.map webSharperError2TranspilerError |> Seq.toArray
                do! if wsErrors |> Seq.isEmpty then Result.succeed () else
                    Result.failWithMsgs wsErrors
                let  assem       = loader.LoadRaw assemblyBytes None
                let  getRefMeta()= match wsRefsMeta.Result with | Some (_, _, m) -> m | _ -> WebSharper.Core.Metadata.Info.Empty
                let jsO, currentMeta, sources = ModifyAssembly (Some comp) 
                                                  (getRefMeta()) 
                                                  (comp.ToCurrentMetadata(config.WarnOnly)) 
                                                  config.SourceMap config.AnalyzeClosures assem
                let! js, jsMin   = jsO |> Result.fromOption NothingToTranslateToJavaScript
                let  thisProject = Path.GetFileNameWithoutExtension config.ProjectFile
                use  stringW     = new System.IO.StringWriter()
                use  writer      = new HtmlTextWriter(stringW)
                let  pu          = P.PathUtility.VirtualPaths("/")
                let ctx : Resources.Context =
                    {
                        WebRoot                 = ""
                        DebuggingEnabled        = true
                        DefaultToHttp           = false
                        GetSetting              = fun (name: string) -> None //printfn "GetSetting %s" name ; None
    
                        GetAssemblyRendering    = fun name ->
                            //printfn "GetAssemblyRendering %s" name
                            if name = thisProject || name = config.ProjectFile
                            then WebSharper.Core.Resources.Rendering.Skip else
                            name
                            |> P.AssemblyId.Create
                            |> pu.JavaScriptPath 
                            |> Re.RenderLink
                        GetWebResourceRendering = fun ty resource ->
                            //printfn "GetWebResourceRendering %A" ty
                            let id = P.AssemblyId.Create(ty)
                            let kind =
                                if resource.EndsWith(".js") || resource.EndsWith(".ts")
                                    then P.ResourceKind.Script
                                    else P.ResourceKind.Content
                            P.EmbeddedResource.Create(kind, id, resource)
                            |> pu.EmbeddedPath
                            |> Re.RenderLink
                        RenderingCache          = System.Collections.Concurrent.ConcurrentDictionary()
                        ResourceDependencyCache = System.Collections.Concurrent.ConcurrentDictionary()
                        ScriptBaseUrl = None
                    }            
                comp.Graph.Nodes |> comp.Graph.GetDependencies |> comp.Graph.GetResources |> Seq.iter(fun r -> r.Render ctx (fun _ -> writer) )
                //js.RenderDependencies(ctx, writer)
                let  includes = stringW.ToString()
                let  incs     = includes.Split([| "src="; "href=" ; "<" ; ">" |], System.StringSplitOptions.RemoveEmptyEntries)
                                |> Seq.choose(fun v -> if v.[0] = '"' then v.Split([| '"' |], System.StringSplitOptions.RemoveEmptyEntries).[0] |> sprintf "%A" |> Some else None)
                                |> String.concat ", "
                let! f        = Result.succeedWithMsgs js.[1..js.Length - 7] (comp.Warnings |> Seq.map (fun v -> (sprintf "%A" v, true) |> ErrSimple :> ErrMsg) |> Seq.toArray)
                return          sprintf "CIPHERSpaceLoadFiles([%s], %s);" incs f
            }
        
        let compileMainW: string[] -> Wrap<string> =
          fun             argv     ->
            let resSplit (r:string) = 
                match r.Split(',') with 
                | [| res           |] -> (res, None         )
                | [| res; fullName |] -> (res, Some fullName)
                | _ -> argError ("Unexpected value --resource:" + r)
            let wsArgs    = ref WsConfig.Empty
            let refs      = ResizeArray()
            let resources = ResizeArray()
            let fscArgs   = ResizeArray()
            let cArgv     =
                [|
                    let isRNext = ref false
                    for a in argv do
                        match a with
                        | "-r" ->
                            isRNext := true
                        | _ ->
                            if !isRNext then
                                isRNext := false   
                                yield "-r:" + a
                            else
                                yield a
                |]
            for a in cArgv do
                let setProjectType t = wsArgs := { !wsArgs with ProjectType = Some t }
                try
                    match a with
                    | "--wig"                          -> setProjectType WIG
                    | "--bundle"                       -> setProjectType Bundle
                    | "--html"                         -> setProjectType Html
                    | "--site"                         -> setProjectType Website
                    | StartsWith "--ws:" wsProjectType ->
                        match wsProjectType.ToLower() with
                        | "site" 
                        | "web" 
                        | "website" 
                        | "export"                     -> setProjectType Website
                        | "extension"                  
                        | "interfacegenerator"         -> setProjectType WIG
                        | "bundle"                     -> setProjectType Bundle
                        | "html"                       -> setProjectType Html
                        | "ignore"                     -> ()
                        | "library"                    -> ()
                        | _                            -> invalidArg "type" ("Invalid project type: " + wsProjectType)
                    | StartsWith "--project:"        p -> wsArgs := { !wsArgs with ProjectFile   = p      } //Path.Combine(Directory.GetCurrentDirectory(), p) }
                    | StartsWith "--wsoutput:"       o -> wsArgs := { !wsArgs with OutputDir     = Some o }
                    | StartsWith "--keyfile:"        k -> wsArgs := { !wsArgs with KeyFile       = Some k }
                    | "--jsmap"                        -> wsArgs := { !wsArgs with SourceMap     = true   } 
                    | "--dts"                          -> wsArgs := { !wsArgs with TypeScript    = true   } 
                    | "--wswarnonly"                   -> wsArgs := { !wsArgs with WarnOnly      = true   } 
                    | "--printjs"                      -> wsArgs := { !wsArgs with PrintJS       = true   }
                    | "--debug"                      
                    | "--debug+"                     
                    | "--debug:full"                 
                    | "-g"                           
                    | "-g+"                          
                    | "-g:full"                        -> wsArgs := { !wsArgs with IsDebug       = true   } ; fscArgs.Add a
                    | "--vserrors"                     -> wsArgs := { !wsArgs with VSStyleErrors = true   } ; fscArgs.Add a
                    | StartsWith "-o:"               o 
                    | StartsWith "--out:"            o -> wsArgs := { !wsArgs with AssemblyFile = o       } ; fscArgs.Add a
                    | StartsWith "--doc:"            d -> wsArgs := { !wsArgs with Documentation = Some d } ; fscArgs.Add a
                    | StartsWith "-r:"               r             
                    | StartsWith "--reference:"      r -> refs.Add      r                                   ; fscArgs.Add a
                    | StartsWith "--resource:"       r -> resources.Add (resSplit r)                        ; fscArgs.Add a
                    | _                                ->                                                     fscArgs.Add a  
                with e ->
                    failwithf "Parsing argument failed: '%s' - %s" a e.Message
            fscArgs.Add "--define:FSHARP41"
            wsArgs := 
                { !wsArgs with 
                    References   = refs |> Seq.map (fun s -> s.ToLower()) |> Seq.distinct |> Array.ofSeq
                    Resources    = resources.ToArray()
                    CompilerArgs = fscArgs  .ToArray() 
                }
            CompileToJsW !wsArgs
    
        let Process args =  
            compileMainW args 
            |> Wrap.runSynchronouslyR
            |> fun (Result(jsO, msgs)) -> 
                   jsO |> Option.iter (printfn "%s")
                   if msgs |> Seq.isEmpty |> not then Result.getMessages msgs |> eprintfn "%O"
                   match jsO with
                   | Some js -> 0
                   | None    -> 1
                   
        let endToken = sprintf "//---------------%s-----------------" "EOF"
    
        [< EntryPoint >]
        let Main args =
            Console.SetIn(new StreamReader(Console.OpenStandardInput 30000))
            let mutable cycle = true
            if args = [| "++loop" |] 
            then while cycle do
                   let line = Console.ReadLine()
                   if line = null ||  line = "++end" then cycle <- false else
                   let argsL = match line with Regexs "(\".*?\"|\S+)" ms -> ms |> Array.map (function | Regex "(\"(.*)\")" [_ ; m] | m -> m)
                   if Process argsL = 0 then "success" else "fail"
                   |> printfn "//%s"
                   eprintfn "%s" endToken
                 0
            else Process args 
//#
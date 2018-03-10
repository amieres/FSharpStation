////-d:INTERACTIVE
#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
#I @"..\packages\WebSharper\lib\net40"
#r @"..\packages\WebSharper\lib\net40\WebSharper.Core.dll"
#r @"..\packages\WebSharper\lib\net40\WebSharper.Core.JavaScript.dll"
#r @"..\packages\WebSharper\lib\net40\WebSharper.Collections.dll"
#r @"..\packages\WebSharper\lib\net40\WebSharper.InterfaceGenerator.dll"
#r @"..\packages\WebSharper\lib\net40\WebSharper.Main.dll"
#r @"..\packages\WebSharper\lib\net40\WebSharper.JQuery.dll"
#r @"..\packages\WebSharper\lib\net40\WebSharper.JavaScript.dll"
#r @"..\packages\WebSharper\lib\net40\WebSharper.Web.dll"
#r @"..\packages\WebSharper\lib\net40\WebSharper.Sitelets.dll"
#r @"..\packages\WebSharper\lib\net40\WebSharper.Control.dll"
#r @"..\packages\WebSharper.UI.Next\lib\net40\WebSharper.UI.Next.dll"
// # 1  "required for nowarns to work"
#nowarn "40"
#nowarn "1178"
#nowarn "68"
// # 1  @"bf864f3c-1370-42f2-ac8a-565a604892e8 FSSGlobal.fsx"
//#nowarn "1182"
//#nowarn "40"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
//#r @"D:\Abe\CIPHERWorkspace\CIPHERPrototype\WebServer\bin\FSharp.Core.dll"
#if INTERACTIVE
//#I @"../WebServer/bin"
module FSSGlobal   =
#else
namespace FSSGlobal
#endif

// # 1  @"edbbf11e-4698-4e33-af0c-135d5b21799b F# Code.fsx"
// Code to be evaluated using FSI: `Evaluate F#`
  // # 1  @"(2)60bffe71-edde-4971-8327-70b9f5c578bb open WebSharper.fsx"
  #if INTERACTIVE
  //#I @"..\packages\WebSharper\lib\net40"
  
  //#r @"..\packages\WebSharper\lib\net40\WebSharper.Core.dll"
  //#r @"..\packages\WebSharper\lib\net40\WebSharper.Core.JavaScript.dll"
  //#r @"..\packages\WebSharper\lib\net40\WebSharper.Collections.dll"
  //#r @"..\packages\WebSharper\lib\net40\WebSharper.InterfaceGenerator.dll"
  //#r @"..\packages\WebSharper\lib\net40\WebSharper.Main.dll"
  //#r @"..\packages\WebSharper\lib\net40\WebSharper.JQuery.dll"
  //#r @"..\packages\WebSharper\lib\net40\WebSharper.JavaScript.dll"
  //#r @"..\packages\WebSharper\lib\net40\WebSharper.Web.dll"
  //#r @"..\packages\WebSharper\lib\net40\WebSharper.Sitelets.dll"
  //#r @"..\packages\WebSharper\lib\net40\WebSharper.Control.dll"
  //#r @"..\packages\WebSharper.UI.Next\lib\net40\WebSharper.UI.Next.dll"
  
  open WebSharper
  open WebSharper.JavaScript
  open WebSharper.UI.Next
  open WebSharper.UI.Next.Client
  type on   = WebSharper.UI.Next.Html.on
  type attr = WebSharper.UI.Next.Html.attr
  #endif
  // # 1  @"(2)7c4a82bc-58cd-48a7-bd7e-79de148a1cf0 Useful.fsx"
  #if INTERACTIVE
  [<WebSharper.JavaScript>]
  #endif
  module Useful =
    // # 1  @"(4)7a655466-e218-4121-a7b6-f9c70a922e07 extract, now, Async, String.fsx"
    let extract n (s:string) = s.Substring(0, min n s.Length)
    
    #if INTERACTIVE
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
        
        
    // # 1  @"(4)368caae7-6a67-4063-9af3-978c25b81ac2 Result, Wrap.fsx"
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
    
    #if INTERACTIVE
    [<JavaScript>]
    #endif
    type ExceptionThrown(exn:Exception) =
        interface ErrMsg with
            member this.ErrMsg   : string = sprintf "%A" exn
            member this.IsWarning: bool   = false
        override this.ToString() = (this :> ErrMsg).ErrMsg
    
    #if INTERACTIVE
    [<JavaScript>]
    #endif
    type ErrOptionIsNone() =
        interface ErrMsg with
            member this.ErrMsg   : string = "Option is None"
            member this.IsWarning: bool   = false
    
    type ErrSimple(msg, warning) =
        interface ErrMsg with
            member this.ErrMsg   : string = msg
            member this.IsWarning: bool   = warning
        override this.ToString() = (this :> ErrMsg).ErrMsg
    
    type Result< 'TSuccess> = Result  of 'TSuccess option * ErrMsg    list     
    type ResultS<'TSuccess> = ResultS of 'TSuccess option * ErrSimple list
    
    module Result =
        let inline succeed             x       = Result (Some x           , [  ]             )
        let inline succeedWithMsg      x  m    = Result (Some x           , [m ]             )
        let inline succeedWithMsgs     x  ms   = Result (Some x           ,  ms              )
        let inline fail                   m    = Result (None             , [m ]             )
        let inline failWithMsgs           ms   = Result (None             ,  ms              )
        let inline map       f (Result(o, ms)) = Result (o |> Option.map f,  ms              )
        let inline mapMsg    f (Result(o, ms)) =        (o                ,  ms |> List.map f)
        let inline mapMsgs   f (Result(o, ms)) =        (o                ,  ms |>          f)
        let inline getOption   (Result(o, _ )) =         o                   
        let inline getMsgs     (Result(_, ms)) =                             ms
        let inline mergeMsgs              ms r = Result (r |> mapMsgs   ((@) ms) )
        let inline combine     (Result(_, ms)) = mergeMsgs ms
        let inline bind      f (Result(o, ms)) = 
            match o with
            | Some x   -> match f x with Result(o2, ms2) -> Result(o2, ms @ ms2)
            | None     -> Result(None, ms)
        let inline apply (Result(fO, fMs))  (Result(o , ms)) = 
            match fO, o with
            | Some f, Some x -> Result(f x |> Some, fMs @ ms)
            | _              -> Result(None       , fMs @ ms)
            
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
    
        let msgs2String   (ms: ErrMsg list) = ms |> List.map (fun m -> m.ErrMsg)
        let getMessages   (ms: ErrMsg list) = ms |> msgs2String |> String.concat "\n"
        let countMessages (ms: ErrMsg list) =
            if ms = [] then "" else
            let errors   = ms |> List.filter(fun m -> m.IsWarning |> not)
            let warnings = ms |> List.filter(fun m -> m.IsWarning       )
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
            | Result(vO, msgs) -> [ vO |> Option.defaultValue "Failed: " ] @ msgs2String msgs
            |> String.concat "\n"
    
        let fromResultS (ResultS(v, ms)) = Result (v, ms |> List.map (fun m -> m :> ErrMsg                     ))
        let toResultS   (Result( v, ms)) = ResultS(v, ms |> List.map (fun m -> ErrSimple(m.ErrMsg, m.IsWarning)))
    
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
                                          return succeedWithMsgs b                   ms }
            | WAsyncR     arb  -> async { let!   rb = arb                               
                                          return rb |> mergeMsgs                     ms }
            | WResult      rb  -> async { return rb |> mergeMsgs                     ms }
            | WSimple       b                                                           
            | WOption (Some b) -> async { return succeedWithMsgs b                   ms }
            | WOption None     -> async { return failWithMsgs      (errOptionIsNone::ms)}
    
        let tryCall (f: 'a -> Wrap<'b>) (a:'a) = 
            try f a 
            with e -> failException e |> fail |> WResult
    
        let bind (f: 'a -> Wrap<'b>) (wa: Wrap<'a>) :Wrap<'b> =
            match wa with
            | WSimple         a       
            | WOption(Some    a)       
            | WResult(Success(a, [])) -> tryCall f a
            | WOption None            -> None            |> WOption
            | WResult(Failure    ms ) -> failWithMsgs ms |> WResult 
            | WResult(Success(a, ms)) -> tryCall f a
                                         |> function
                                         | WSimple         b              
                                         | WOption(Some    b     ) -> succeedWithMsgs b  ms             |> WResult 
                                         | WOption None            -> failWithMsgs (errOptionIsNone::ms)|> WResult
                                         | WResult(Success(b, [])) -> succeedWithMsgs b  ms             |> WResult 
                                         | WResult(Success(b, m2)) -> succeedWithMsgs b (ms @ m2)       |> WResult 
                                         | WResult(Failure    m2)  -> failWithMsgs      (ms @ m2)       |> WResult 
                                         | WAsync  ab              -> async { let!  b = ab
                                                                              return succeedWithMsgs b ms
                                                                      } |> WAsyncR
                                         | WAsyncR arb             -> async { let! rb = arb
                                                                              return mergeMsgs ms rb
                                                                      } |> WAsyncR
            | WAsync         aa       -> async {
                                             let! a  = aa
                                             return! tryCall f a |> wb2arb []
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
                           , sprintf "%A" >> (fun m -> None, m) >> processVal
                           , sprintf "%A" >> (fun m -> None, m) >> processVal)
                           
        let start (printMsg: string->unit) (w: Wrap<unit>) = 
            startV (function
                    | Some (), msgs ->               msgs |> printMsg 
                    | None   , msgs -> "Failed!\n" + msgs |> printMsg) w
    
        let wrapper2Async (f: 'a -> Wrap<'b>) a : Async<Result<'b>> =
            let wb = tryCall f a
            match wb with
            | WSimple _
            | WOption _               -> wb |> wb2arb []
            | WResult (Result(_, ms)) -> wb |> wb2arb ms
            | WAsync  ab              -> async { let!   b = ab
                                                 return succeed b }
            | WAsyncR arb             -> arb
    
        let addMsgs errOptionIsNone ms wb =
            if ms = [] then wb else
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
            | WSimple          _
            | WOption (Some    _)
            | WResult (Result (_, [])) -> wb()
            | WAsync           aa      -> async { let!   _a = aa
                                                  let!   br = wb() |> toAsyncResult
                                                  return br
                                                 } |> WAsyncR
            | WAsyncR          ara     -> async { let! ar = ara
                                                  match ar with
                                                  | Failure    ms
                                                  | Success(_, ms)->
                                                  let! br = wb() |> toAsyncResult
                                                  return br |> Result.mergeMsgs ms
                                                } |> WAsyncR
            | WOption (None     )      -> wb() |> addMsgs errOptionIsNone [errOptionIsNone]
            | WResult (Result(_, ms))  -> wb() |> addMsgs errOptionIsNone ms
            
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
            member inline this.Zero         ()  = WSimple ()
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
    
    
    #if INTERACTIVE
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
    #if INTERACTIVE
        [< Inline "console.log('RunSynchronously should not be used in Javascript')" >]                       
    #endif
        static member RunSynchronouslyR(w:Wrap<'T  >, ?timeout, ?cancToken) = Async.RunSynchronously(Wrap.getAsyncR w, ?timeout            = timeout, ?cancellationToken= cancToken)
    #if INTERACTIVE
        [< Inline "console.log('RunSynchronously should not be used in Javascript')" >]                       
    #endif
        static member RunSynchronously( w:Wrap<'T  >, ?timeout, ?cancToken) = Async.RunSynchronously(Wrap.getAsync  w, ?timeout            = timeout, ?cancellationToken= cancToken)
    
    // # 1  @"(4)aa485846-7b78-4ca8-ae22-84ba0c42d962 Mailbox.fsx"
    module Mailbox =
    
        /// A simple Mailbox processor to serially process tasks
        let iter f =
            MailboxProcessor.Start(fun inbox ->
                async {
                    while true do
                        try       let!   msg = inbox.Receive()
                                  do!  f msg
                        with e -> printfn "%A" e
                }
            )
        
        /// A simple Mailbox processor to serially and synchronously process tasks
        /// invoke f with: agent.PostAndReply     (fun reply -> reply, parm)
        ///         or     agent.PostAndReplyAsync(fun reply -> reply, parm)
        let call f = iter (fun ((replyChannel: AsyncReplyChannel<_>), msg) -> async {
            let! r = f msg
            replyChannel.Reply r
        })
        
        /// A Mailbox processor that maintains a state
        let fold f initState =
            MailboxProcessor.Start(fun inbox ->
                let rec loop state : Async<unit> = async {
                    try       let! msg      = inbox.Receive()
                              let! newState = f state msg
                              return! loop newState
                    with e -> printfn "%A" e
                              return! loop state
                }
                loop initState
            )
    
    // object expressions work only on types not objects
    //
    //    /// A simple Mailbox processor to serially process tasks
    //    /// with a Flush option
    //    let iterFlushable f =
    //        let ff msg = match msg with 
    //                     | Some m -> f m 
    //                     | None   -> async { () }
    //        let mailbox = iter ff
    //        { new mailbox with member this.Flush() = mailbox.Post None }  
    //
    //    let foldFlushable f initState =
    //        let ff msg = match msg with 
    //                     | Some m -> f m 
    //                     | None   -> async { () }
    //        let mailbox = fold ff initState
    //        { new mailbox with member this.Flush() = mailbox.Post None }
    //        
    // # 1  @"(4)657c8f34-c917-4659-825d-c9ead206efcf swap.fsx"
    let inline swap f a b = f b a
    let inline __   f a b = f b a
    
    
    // # 1  @"(4)8efdcd5a-95c4-4212-9c75-1ebedce83dd8 memoize.fsx"
    #if INTERACTIVE
    [< Inline >]
    #endif
    let memoize f = 
        let cache = System.Collections.Generic.Dictionary<_, _>()
        fun x -> 
            let mutable res = Unchecked.defaultof<_>
            let ok = cache.TryGetValue(x, &res)
            if ok then res 
            else let res = f x
                 cache.[x] <- res
                 res
                 
    type ResetableMemoize(f) =             
        let cache = System.Collections.Generic.Dictionary<_, _>()
        member this.ClearCache() = cache.Clear()
        #if INTERACTIVE
        [< Inline >]
        #endif
        member this.Call x =
            let mutable res = Unchecked.defaultof<_>
            let ok = cache.TryGetValue(x, &res)
            if ok then res 
            else let res = f x
                 cache.[x] <- res
                 res
        
// # 1  @"7479dc9d-94cd-4762-a1b8-cf6e09436c3f WebSharper Code.fsx"
//#define INTERACTIVE
(*
 Code to be Compiled to Javascript and run in the browser
 using `Compile WebSharper` or `Run WebSharper`
*)

  // # 1  @"(2)495bce0a-4fb6-48fa-9158-c242d5965baa HtmlNode.fsx"
  
  [<JavaScript>]
  module HtmlNode      =
  
    // # 1  @"(4)0f5719f0-e95e-498d-ab88-f89ff1440e32 Val.fsx"
    [<NoComparison>]
    type Val<'a> =
        | Constant  of 'a
        | DynamicV  of IRef<'a>
        | Dynamic   of View<'a>
      with member this.ValTypeMember = 0
    
    module Val =
        
        let mapV : ('a -> 'b) -> Val<'a> -> Val<'b> =
            fun    f             va      ->
                match va with
                | Constant  a -> f a                   |> Constant
                | Dynamic  wa -> wa      |> View.Map f |> Dynamic 
                | DynamicV va -> va.View |> View.Map f |> Dynamic 
    
        let iterV : ('a -> unit) -> Val<'a> -> unit = //f v = toView v |> View.Get f
            fun     f               va      ->
                match va with
                | Constant  a ->          f  a                  
                | Dynamic  wa -> View.Get f wa 
                | DynamicV va ->          f va.Value 
    
        let toView v =
            match v with
            | Constant  a -> View.Const a
            | Dynamic  wa -> wa
            | DynamicV va -> va.View
    
        let getAsync v =
            match v with
            | Constant  a -> async.Return   a
            | Dynamic  wa -> View.GetAsync wa
            | DynamicV va -> async.Return  va.Value
    
        let bindV : ('a -> Val<'b>) -> Val<'a> -> Val<'b> =
            fun     f                  v       -> 
                match v with
                | Constant  a -> f a
                | Dynamic  wa -> wa      |> View.Bind (f >> toView) |> Dynamic 
                | DynamicV va -> va.View |> View.Bind (f >> toView) |> Dynamic 
    
        let inline map2V f = // : ('a -> 'b -> 'c) -> Val<'a> -> Val<'b> -> Val<'c> =
            //fun     f                ->
            let inline swap f a b = f b a
            let inline fv vb = bindV (swap (f >> mapV) vb)
            swap fv
    
        let inline map3V f3 v1 v2 v3    = map2V f3 v1 v2    |> map2V (|>) v3
        let inline map4V f3 v1 v2 v3 v4 = map3V f3 v1 v2 v3 |> map2V (|>) v4
        
        let tagDoc: ('a -> Doc) -> Val<'a> -> Doc =
            fun     tag            va      ->
                match va with
                | Constant  a -> tag   a
                | Dynamic  wa -> wa      |> View.Map tag |> Doc.EmbedView
                | DynamicV va -> va.View |> View.Map tag |> Doc.EmbedView
    
        let tagElt: ('a -> Elt) -> Val<'a> -> Doc =
            fun     tag            va     ->
                match va with
                | Constant  a -> tag   a :> Doc
                | Dynamic  wa -> wa      |> View.Map tag |> Doc.EmbedView
                | DynamicV va -> va.View |> View.Map tag |> Doc.EmbedView
    
        let attrVO att       vao     =
                match vao with
                | Constant (Some a)-> Attr.Create      att   a
                | Constant  None   -> Attr.DynamicPred att  (View.Const false              ) (View.Const                      ""         )
                | Dynamic       wa -> Attr.DynamicPred att  (View.Map Option.isSome wa     ) (View.Map   (Option.defaultValue "") wa     )
                | DynamicV      va -> Attr.DynamicPred att  (View.Map Option.isSome va.View) (View.Map   (Option.defaultValue "") va.View)
    
        let attrV att       va      =
                match va with
                | Constant  a -> Attr.Create  att   a
                | Dynamic  wa -> Attr.Dynamic att  wa
                | DynamicV va -> Attr.Dynamic att  va.View    
    
        type HelperType = HelperType with
            static member (&>) (HelperType, a :     string option   ) = Constant  a
            static member (&>) (HelperType, a :     string          ) = Constant  a
            static member (&>) (HelperType, a :     bool            ) = Constant  a
            static member (&>) (HelperType, a :     int             ) = Constant  a
            static member (&>) (HelperType, a :     float           ) = Constant  a
            static member (&>) (HelperType, a :     Doc             ) = Constant  a
            static member (&>) (HelperType, va: Val<string option>  ) =          va
            static member (&>) (HelperType, va: Val<string       >  ) =          va
            static member (&>) (HelperType, va: Val<bool         >  ) =          va
            static member (&>) (HelperType, va: Val<int          >  ) =          va
            static member (&>) (HelperType, va: Val<float        >  ) =          va
            static member (&>) (HelperType, va: Val<Doc          >  ) =          va
            static member (&>) (HelperType, va: Val<_            >  ) =          va
            static member (&>) (HelperType, vr: IRef<_           >  ) = DynamicV vr
            static member (&>) (HelperType, vw: View<_           >  ) = Dynamic  vw
    
    (*    [< Inline @"(
                typeof($v) == 'function' ? {$:2, $0:$v} // View
                :   typeof($v) == 'object'
                          ? typeof($v.$) != 'undefined' // Val
                                ? $v 
                                : typeof($v.Id) == 'number' || typeof($v.i) == 'number' || typeof($v.RView == 'function')// Var
                                     ? {$:1, $0:$v}
                                     : typeof($v.docNode) != 'undefined'
                                         ? {$:0, $0:$v} // Doc
                                         : {$:2, $0:$v} // View?
                          : {$:0, $0:$v}) // other
                                         " >]
        let fixit0 v = Constant v
        let fixit2 v = let result = fixit0 v
                       result
                       
        [< Direct "FSSGlobal.HtmlNode.Val.fixit2($v)" >]
        //[< Inline >]
        let inline fixit v = HelperType &> v
    *)
        let toVal (o: obj) =
            match o with
            | :?      string   as t   -> Val.Constant t 
            | :?      int      as t   -> Val.Constant t |> As<Val<string>> 
            | :?      bool     as t   -> Val.Constant t |> As<Val<string>>  
            | :?      Doc      as t   -> Val.Constant t |> As<Val<string>>  
            | :? Val< string>  as v   ->              v        
            | :? Var< string>  as v   -> Val.DynamicV v        
            | v when JS.In "RSet" v   -> Val.DynamicV (As<IRef<string>> v)
            | :? Function      as vw  -> Val.Dynamic  (As<View<string>> vw)        
            | _ when o?get_ValTypeMember() = 0 -> o |> As<Val<string>> 
            | _                       -> failwith <| sprintf "Could not convert %A" o
    
        [< Direct "$_f($v)" >]
        let inline fixitF _f v = HelperType &> v
        let inline fixit    v = fixitF toVal v
    
        let [<Inline>] inline bindIRef0 (f: 'a->IRef<'b>) (view: View<'a>) = 
            let contentVar = Var.Create Unchecked.defaultof<'b>
            let changingIRefO : IRef<'b> option ref = ref None
            let contentVarChanged = ref 0L
            let refVarChanged     = ref 0L
        
            contentVar.View 
            |> View.Sink (fun _ -> 
                !changingIRefO 
                |> Option.iter (fun r -> 
                    if  !contentVarChanged  > !refVarChanged   then refVarChanged := !contentVarChanged
                    elif r.Value           <> contentVar.Value then refVarChanged := !refVarChanged       + 1L ; r.Value         <-  contentVar.Value
                   )
               )
        
            view |> View.Bind (fun cur ->
                let r = f cur
                changingIRefO    := Some r
                refVarChanged    := !contentVarChanged + 100L
                contentVar.Value <- r.Value
                r.View
            ) |> View.Sink (fun _ -> 
                !changingIRefO 
                |> Option.iter (fun r -> 
                    if  !refVarChanged  > !contentVarChanged then contentVarChanged := !refVarChanged
                    elif r.Value       <> contentVar.Value   then contentVarChanged := !contentVarChanged + 10L; contentVar.Value  <-  r.Value
                   )
                )
            contentVar
            
        let inline toDoc         v           = toView            (fixit v ) |> Doc.EmbedView
        let [<Inline>] inline bindIRef f  v           = bindIRef0 f (fixit v   |> toView)
        let inline iter       f  v           = iterV           f (fixit v )
        let inline bind       f  v           = bindV           f (fixit v )
        let inline map        f  v           = mapV            f (fixit v )
        let inline map2       f  v1 v2       = map2V           f (fixit v1) (fixit v2)
        let inline map3       f  v1 v2 v3    = map3V           f (fixit v1) (fixit v2) (fixit v3)
        let inline map4       f  v1 v2 v3 v4 = map4V           f (fixit v1) (fixit v2) (fixit v3) (fixit v4)
    
        let inline apply      va vf          = bindV(fun f-> mapV f va) vf
      
        let inline iter2      f  v1 v2       = map2            f v1 v2       |> iterV id
        let inline iter3      f  v1 v2 v3    = map3            f v1 v2 v3    |> iterV id
        let inline iter4      f  v1 v2 v3 v4 = map4            f v1 v2 v3 v4 |> iterV id
      
        let inline mapAsync   f  v           = View.MapAsync   f (fixit v |> toView) |> Dynamic
        let inline sink       f  v           = View.Sink       f (fixit v |> toView) 
        let inline mapCached  f  v           = View.MapCached  f (      v |> toView) |> Dynamic
    
        let [<Inline>] inline consistent   (vl:Val<_>)  = 
            let prior      = ref <| Var.Create Unchecked.defaultof<_>
            let setPrior v = if (!prior).Value <> v then (!prior).Value <- v 
            let vw         = toView vl
            View.Sink setPrior vw
            !prior :> IRef<_> |> DynamicV
    
        type valBuilder() =
            member inline this.Return     (x)                            = Constant x
            member inline this.ReturnFrom (x)                            = x
            member        this.Bind       (w:Val<'a> , r: 'a -> Val<'b>) = bind r w
            member        this.Bind       (w:Var<'a> , r: 'a -> Val<'b>) = bind r w
            member        this.Bind       (w:View<'a>, r: 'a -> Val<'b>) = bind r w
            member inline this.Zero       ()                             = Constant ()
            member inline this.Delay      (f)                            = f()
        
        let valFlow = valBuilder()
    
    // # 1  @"(4)d9124644-0af6-4a7f-a711-ef76ca77f0de HtmlNode.fsx"
    [<NoComparison ; NoEquality>]
    type HtmlNode =
        | HtmlElement    of name: string * children: HtmlNode seq
        | HtmlElementF   of func:(Attr seq -> Doc seq -> Doc) * children: HtmlNode seq
        | HtmlElementV   of Val<HtmlNode>
        | HtmlAttribute  of name: string * value:    Val<string>
        | HtmlAttributeO of name: string * value:    Val<string option>
        | HtmlText       of Val<string>
        | HtmlEmpty
        | SomeDoc        of Doc
        | SomeAttr       of Attr
        
    let addClassX    (classes:string) (add:string) = classes.Split ' ' |> Set.ofSeq |> Set.union  (Set.ofSeq <| add.Split ' ') |> String.concat " "
    //let removeClass (classes:string) (rem:string) = classes.Split ' ' |> Set.ofSeq |> Set.remove               rem            |> String.concat " "
    
    //let callAddClassX = addClassX "a" "b" // so that WebSharper.Collections.js is included
    
    let inline chooseAttr node = 
        match node with
        | HtmlAttribute (name, value   ) when name <> "class" && name <> "style" 
                                         -> Some <| Val.attrV    name value
        | HtmlAttributeO(name, valueO  ) when name <> "class" && name <> "style" 
                                         -> Some <| Val.attrVO   name valueO
        | SomeAttr             attr      -> Some <| attr
        | _                              -> None
    
    let chooseThisAttr this node =
        match node with
        | HtmlAttribute (att, value) when att = this -> Some value
        | _                                          -> None
    
    let concat s a b = a + s + b
    let groupAttr name sep children = 
        children 
        |> Seq.choose (chooseThisAttr name)
        |> (fun ss -> if ss |> Seq.isEmpty 
                      then None 
                      else ss |> Seq.reduce (Val.map2 <| concat sep ) |> Val.attrV name |> Some)
    
    let inline getAttrsFromSeq children =
        children 
        |> Seq.choose chooseAttr
        |> Seq.append (List.choose id [ children |> groupAttr "class" " " ; children |> groupAttr "style" "; " ])
    
    let rec chooseNode node =
        match node with
        | HtmlElement (name, children) -> Some <| (Doc.Element name (getAttrsFromSeq children) (children |> Seq.choose chooseNode) :> Doc)
        | HtmlElementF(func, children) -> Some <| (func             (getAttrsFromSeq children) (children |> Seq.choose chooseNode)       )
        | HtmlElementV vnode           -> Some <| (vnode |> Val.toView |> Doc.BindView (chooseNode >> Option.defaultValue Doc.Empty))
        | HtmlText     vtext           -> Some <| Val.tagDoc WebSharper.UI.Next.Html.text vtext
        | SomeDoc      doc             -> Some <| doc
        | _                            -> None
    
    let getAttrChildren attr =
        Seq.tryPick (function 
                    | HtmlAttribute(a, v) when a = attr -> Some v 
                    | _                                 -> None)
        >> Option.defaultValue (Constant "")
    
    let rec mapHtmlElement (f:string -> seq<HtmlNode> -> string * HtmlNode seq) (element:HtmlNode) :HtmlNode =
        match element with
        | HtmlElement (name, children) -> f name  children                    |> HtmlElement
        | HtmlElementV vnode           -> vnode |> Val.map (mapHtmlElement f) |> HtmlElementV
        | _                            -> element
    
    //let getAttr attr element =
    //    match element with
    //    | HtmlElement(_, children) -> children
    //    | _                        -> seq []
    //    |> getAttrChildren attr
    //
    //let getClass = getAttr "class"
    //let getStyle = getAttr "style"
    
    //let replaceAttribute att (children: HtmlNode seq) newVal =
    //    HtmlAttribute(att, newVal)
    //    :: (children
    //        |> Seq.filter (function HtmlAttribute(old, _) when old = att -> false | _ -> true)
    //        |> Seq.toList
    //       )
    //
    //let replaceAtt att node newVal = mapHtmlElement (fun n ch -> n, replaceAttribute att ch newVal |> Seq.ofList) node
    
    let inline htmlElement    name ch = HtmlElement   (name, ch           )
    let inline htmlElementF   func ch = HtmlElementF  (func, ch           )
    let inline htmlAttribute  name v  = HtmlAttribute (name, Val.fixit v  )
    let inline htmlAttributeO name v  = HtmlAttributeO(name, Val.fixit v  )
    let inline htmlText       txt     = HtmlText      (      Val.fixit txt)
    let inline str            txt     = HtmlText      (      Val.fixit txt)
    let inline someElt        elt     = SomeDoc       (elt :> Doc         )    
      
    let inline addChildren    add (h:HtmlNode) = h |> mapHtmlElement (fun n ch -> n, Seq.append ch   add)
    let inline insertChildren add (h:HtmlNode) = h |> mapHtmlElement (fun n ch -> n, Seq.append add  ch )
    let inline addClass       c    h           = h |> addChildren [ htmlAttribute  "class" c ] 
    let inline addClassIf     c v              = addClass <| Val.map (fun b -> if b then c else "") (Val.fixit v)
    
    let out (ps:HtmlNode list) =
        match ps with
        | [ ]            -> [ ]
        | [h]            -> [h]
        | h :: p :: tail -> addChildren [h] p :: tail
        
    let rec indent2Level lvl chn  (ps:HtmlNode list) =
        match ps with
        | l when l.Length < lvl -> chn :: l
        | _                     -> indent2Level lvl chn <| out ps        
    
    type HtmlNode with
        member inline this.toDoc = 
            match this with
            | HtmlAttribute _
            | HtmlEmpty       -> Doc.Empty
            | _               -> chooseNode this |> Option.defaultValue Doc.Empty
        // member inline   this.Class          clas = Val.fixit clas |> replaceAtt "class" this
        member          this.AddChildren    add  = this |> addChildren    add
        member          this.InsertChildren add  = this |> insertChildren add
        member inline   this.AddClass       c    = this |> addClass       c
        static member ( - ) (ps:HtmlNode list, chn : HtmlNode) : HtmlNode list = 
            match ps with 
            | h :: tail -> h.AddChildren [chn] :: tail
            | []        -> []        
        static member ( --- ) (ps:HtmlNode list, chn) : HtmlNode list = 
            match ps with 
            | [ ]            -> [ ]
            | [h]            -> [ h.AddChildren [                 chn ] ]
            | h :: p :: tail ->   p.AddChildren [ h.AddChildren [ chn ] ] :: tail
        static member ( +  ) (ps:HtmlNode list, r:HtmlNode) : (HtmlNode list) =   r :: ps
        static member ( --                   ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  2 chn ps
        static member ( ----                 ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  3 chn ps    
        static member ( ------               ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  4 chn ps    
        static member ( --------             ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  5 chn ps    
        static member ( ----------           ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  6 chn ps    
        static member ( ------------         ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  7 chn ps    
        static member ( --------------       ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  8 chn ps    
        static member ( ----------------     ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  9 chn ps    
        static member ( ------------------   ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level 10 chn ps    
        static member ( -------------------- ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level 11 chn ps    
    
    let rec finishO (ps:HtmlNode list) =
        match ps with
        | [ ]               -> None
        | [h]               -> Some h
        | _h :: _p :: _tail -> finishO <| out ps        
    
    let endHtmlIndent ps = finishO ps |> Option.defaultWith (fun () -> htmlText "Malformed HTMLNode")
    let ( !! ) (p:HtmlNode seq -> HtmlNode) l = [ p l ]
    
    let renderDoc = chooseNode >> Option.defaultValue Doc.Empty
        
    // # 1  @"(4)c3755c07-1385-495d-bad7-a5b0fa54ac9b HTML Elements & Attributes.fsx"
    let inline atr att v = Val.attrV  att (Val.fixit v)
    let inline tag tag v = Val.tagDoc tag (Val.fixit v)
    
    let inline _class       v = atr "class"       v
    let inline _type        v = atr "type"        v
    let inline _style       v = atr "style"       v
    let inline _placeholder v = atr "placeholder" v
    let inline textV        v = tag  Html.text    v
    
    let inline a           ch = htmlElement   "a"           ch
    let inline p           ch = htmlElement   "p"           ch
    let inline ul          ch = htmlElement   "ul"          ch
    let inline li          ch = htmlElement   "li"          ch
    let inline br          ch = htmlElement   "br"          ch
    let inline hr          ch = htmlElement   "hr"          ch
    let inline h1          ch = htmlElement   "h1"          ch
    let inline h2          ch = htmlElement   "h2"          ch
    let inline h3          ch = htmlElement   "h3"          ch
    let inline h4          ch = htmlElement   "h4"          ch
    let inline h5          ch = htmlElement   "h5"          ch
    let inline h6          ch = htmlElement   "h6"          ch
    let inline div         ch = htmlElement   "div"         ch
    let inline img         ch = htmlElement   "img"         ch
    let inline span        ch = htmlElement   "span"        ch
    let inline form        ch = htmlElement   "form"        ch
    let inline table       ch = htmlElement   "table"       ch
    let inline thead       ch = htmlElement   "thead"       ch
    let inline th          ch = htmlElement   "th"          ch
    let inline tr          ch = htmlElement   "tr"          ch
    let inline td          ch = htmlElement   "td"          ch
    let inline tbody       ch = htmlElement   "tbody"       ch
    let inline label       ch = htmlElement   "label"       ch
    let inline button      ch = htmlElement   "button"      ch
    let inline script      sc = htmlElement   "script"      sc
    let inline styleH      st = htmlElement   "style"       st
    let inline fieldset    ch = htmlElement   "fieldset"    ch
    let inline link        sc = htmlElement   "link"        sc
    let inline iframe      at = htmlElement   "iframe"      at
    let inline body        ch = htmlElement   "body"        ch
    let inline section     ch = htmlElement   "section"     ch
    let inline strong      at = htmlElement   "strong"      at
    
    
    let inline target      v  = htmlAttribute  "target"      v
    let inline href        v  = htmlAttribute  "href"        v
    let inline hrefO       vO = htmlAttributeO "href"        vO
    let inline rel         v  = htmlAttribute  "rel"         v
    let inline charset     v  = htmlAttribute  "charset"     v
    let inline src         v  = htmlAttribute  "src"         v
    let inline ``class``   v  = htmlAttribute  "class"       v
    let inline ``type``    v  = htmlAttribute  "type"        v
    let inline width       v  = htmlAttribute  "width"       v
    let inline title       v  = htmlAttribute  "title"       v
    let inline Id          v  = htmlAttribute  "id"          v
    let inline frameborder v  = htmlAttribute  "frameborder" v
    let inline spellcheck  v  = htmlAttribute  "spellcheck"  v
    let inline draggable   v  = htmlAttribute  "draggable"   v
    let inline style       v  = htmlAttribute  "style"       v
    let inline placeholder v  = htmlAttribute  "placeholder" v
    
    let inline style1    n v  = style <| Val.map ((+) (n + ":")) v
    
    type HtmlNode with
        member inline   this.Style          sty  = this.AddChildren([ style sty ])
    
    let inline css         v  = styleH [ htmlText v ] 
    
    let inline classIf cls v = ``class`` <| Val.map (fun b -> if b then cls else "") (Val.fixit v)
    
    let inline ``xclass`` v  = 
        match Val.fixit v with
        | Constant c  -> Attr.Class        c       
        | Dynamic  cw -> Attr.DynamicClass "class_for_view_not_implemented" cw      ((<>)"")
        | DynamicV cv -> Attr.DynamicClass cv.Value                         cv.View ((<>)"")
        |> SomeAttr
    
    let style2pairs (ss:string) : (string * string) [] =
        ss.Split(';') 
        |> Array.map   (fun s -> s.Split(':') ) 
        |> Array.filter(fun d -> d.Length = 2 )
        |> Array.map   (fun d -> d.[0].Trim(), d.[1].Trim() )
    
    let string2Styles = style2pairs >> Array.map (fun (n, v) -> Attr.Style n v |> SomeAttr)
    
    //let composeDoc elt dtl dtlVal = dtlVal |> Val.toView |> Doc.BindView (Seq.append dtl >> elt >> renderDoc) |> SomeDoc
    
    let inline bindHElem hElemF v  = Val.map hElemF  (Val.fixit v) |> HtmlElementV
    
    let createIFrame f =
        let cover = Var.Create true
        div [ style           "position: relative; overflow: hidden; height: 100%; width: 100%;" 
              iframe 
                [ style       "position: absolute; width:100%; height:100%;"
                  frameborder "0"
                  SomeAttr <| on.afterRender f
                  SomeAttr <| on.mouseLeave (fun _ _ -> cover.Value <- true)
                ]
              div 
                [ style       "position: absolute;"
                  classIf     "iframe-cover" (Val.map id cover)               
                  SomeAttr <| on.mouseEnter (fun _ _ -> Input.Mouse.MousePressed 
                                                        |> View.Get (fun pressed -> if not pressed then cover.Value <- false))
                ]          
              styleH [ htmlText ".iframe-cover { top:0; left:0; right:0; bottom:0; background: blue; opacity: 0.04; z-index: 2; }" ]
            ]
    
    [< Inline """(!$v)""">]
    let isUndefined v = v.GetType() = v.GetType()
    
    let  findRootElement (e:Dom.Element) =
        if isUndefined e.GetRootNode then JS.Document.Body
        else
            let root = e.GetRootNode()
            if isUndefined root?body 
            then root.FirstChild :?> Dom.Element
            else root?body  |> unbox<Dom.Element>
    
  // # 1  @"(2)3709b431-1507-48ed-9487-dd49ce7be748 open HtmlNode.fsx"
  open HtmlNode
  // # 1  @"(2)e9ac2d66-474a-46a6-95fa-d369e6d703d1 Template.fsx"
  [<JavaScript>]
  module Template      =
    // # 1  @"(4)c7841be7-5cd5-40f3-b91c-c107b487bc0c Hoverable.fsx"
    [<NoComparison ; NoEquality>]
    type Hoverable = {
        hover      : IRef<bool>
    } with
      static member  New   = 
        let hover      = Var.Create false
        { 
            hover      = hover     
        }
      member inline this.Content    (c: HtmlNode seq) = 
        [ classIf "hovering" this.hover
          SomeAttr <| on.mouseEnter (fun _ _ -> this.hover.Value <- true )
          SomeAttr <| on.mouseLeave (fun _ _ -> this.hover.Value <- false)
        ] 
        |> Seq.append  c
        |> div
      member inline this.Content    (c:HtmlNode) = 
          c.AddChildren 
              [ classIf "hovering" this.hover
                SomeAttr <| on.mouseEnter (fun _ _ -> this.hover.Value <- true )
                SomeAttr <| on.mouseLeave (fun _ _ -> this.hover.Value <- false)
              ] 
      static member  Demo  = Hoverable.New.Content(div [ style "flex-flow: column;" ])
      
    let hoverable (c:HtmlNode) = Hoverable.New.Content c
    
    // # 1  @"(4)0a11766b-f227-4b38-88a3-919d964387bf Panel.fsx"
    [<NoComparison ; NoEquality>]
    type Panel = {
        _class   : Val<string>
        _style   : Val<string>
        title    : Val<string>
        header   : HtmlNode seq
        content  : HtmlNode seq
        disabled : Val<bool>
    } with
      static member  New   = { _class   = Val.fixit <| "panel panel-default shadow"
                               _style   = Val.fixit <| "text-align:center" 
                               title    = Val.fixit <| "Panel"        
                               header   =          [ htmlText "Some text"    ] 
                               content  =          [ htmlText "Some Content" ] 
                               disabled = Val.fixit <| Var.Create false
                             }
      member        this.Render          =  
        fieldset [ SomeAttr <| attr.disabledDynPred (View.Const "")  (this.disabled |> Val.toView)
                   div [ ``class`` this._class
                         div (Seq.append
                                  [ ``class`` "panel-heading"
                                    label [ ``class``  "panel-title text-center" ; htmlText this.title ]
                                  ]
                                  this.header)
    
                         div (Seq.append
                                  [ ``class`` "panel-body"
                                    style     this._style 
                                  ]
                                  this.content)
                       ] 
                 ]
      member inline this.Class       clas = { this with _class   = Val.fixit clas }
      member inline this.Style       sty  = { this with _style   = Val.fixit sty  }
      member inline this.Title       txt  = { this with title    = Val.fixit txt  }
      member inline this.Header      h    = { this with header   =       h        }
      member inline this.Content     c    = { this with content  =       c        }
      member inline this.Disabled    dis  = { this with disabled =       dis      }
    
  // # 1  @"(2)e2ca8cb1-fb1e-4793-855f-55e3ca07b8f5 RunCode.fsx"
  [<JavaScript>]
  module RunCode       =
    // # 1  @"(4)f2571ac9-37ec-4d7c-9ead-9e5f79ae1be1 type RunNode(nodeName, clearNode bool, useShadowRootbool) =.fsx"
    type RunNode(nodeName, ?clearNode: bool, ?useShadowRoot:bool) =
      let bClearNode    = defaultArg clearNode     true
      let useShadowRoot = defaultArg useShadowRoot true
      let createNode() =
          let e = JS.Document.CreateElement "div"
          e?style <- "height: 100%; width: 100%;"
          e
      let createBaseNode () =
          let el = JS.Document.CreateElement "div"
          el.SetAttribute("id", nodeName)
          JS.Document.Body.AppendChild el |> ignore
          el
      let baseNode = 
          match JS.Document.GetElementById nodeName with
          | null -> createBaseNode()
          | node -> node
      let runNode =
          if not useShadowRoot then baseNode else
          match baseNode.ShadowRoot with
          | null -> let p = createNode()
                    baseNode.AttachShadow(Dom.ShadowRootInit(Dom.ShadowRootMode.Open)).AppendChild p |> ignore
                    let e = createNode()
                    p.AppendChild e |> ignore
                    e
          | root -> root.FirstChild :?> Dom.Element
      do if bClearNode then runNode.InnerHTML <- ""
    with
      new(?clearNode: bool, ?useShadowRoot:bool) = RunNode("TestNode", ?clearNode = clearNode, ?useShadowRoot = useShadowRoot)
      member this.RunNode   = runNode
    
    // # 1  @"(4)081bac32-e739-4124-87eb-eb7d6f2220bc AddBootstrap.fsx"
      member this.AddBootstrap =
        JS.Document.CreateElement "div"
        |> fun el -> 
            el.InnerHTML <- 
              @"<script src='http://code.jquery.com/jquery-3.1.1.min.js' type='text/javascript' charset='UTF-8'></script>
                <script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' type='text/javascript' charset='UTF-8'></script>
                <link type='text/css' rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
                <link type='text/css' rel='stylesheet' href='/EPFileX/css/main.css'>
               "
            runNode.ParentElement.AppendChild el |> ignore
        this
    // # 1  @"(4)6332dfb8-b57a-40de-b669-f796820883db AddFontAwesome.fsx"
      member this.AddFontAwesome =
        JS.Document.CreateElement "div"
        |> fun el -> 
            el.InnerHTML <-  @"<link type='text/css' rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>"
            runNode.ParentElement.AppendChild el |> ignore
        this
    // # 1  @"(4)47bf25cf-e7f5-452a-9247-156146348a14 AddBulma.fsx"
      member this.AddBulma =
        JS.Document.CreateElement "div"
        |> fun el -> 
            el.InnerHTML <-  @"<link type='text/css' rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css'>"
            runNode.ParentElement.AppendChild el |> ignore
        this
    // # 1  @"(4)c110a9c9-bc3b-4be7-8e5d-f43cc75f93ed RunDoc.fsx"
      member inline this.RunDoc doc = doc :> Doc |> Doc.Run this.RunNode
    // # 1  @"(4)3038cd62-093c-4385-aa9b-799297bd379c RunHtml.fsx"
      member inline this.RunHtml node = node |> renderDoc |> this.RunDoc
      
    // # 1  @"(4)bf400a85-8264-4540-9381-f3be0c968c94 ShowHtmlResult.fsx"
      member inline this.ShowHtmlResult res =
        this.AddBootstrap |> ignore
        div [ ``class`` "container"
              Template.Panel.New
                .Title("Result:")
                .Header([])
                .Content([ h3 res ; style "font-family:monospace;" ])
                .Render
         ] |> this.RunHtml
      member inline this.ShowHtmlResult res = this.ShowHtmlResult [res]
    
    // # 1  @"(4)c47adc01-4550-4830-8df5-e1ebedaee7d0 ShowResult.fsx"
      member inline this.ShowResult res = htmlText (sprintf "%A" res) |> this.ShowHtmlResult
    
  // # 1  @"(2)be49e291-252c-4064-a3d6-bc61b39895fa Calculation Editor Code.fsx"
  [< JavaScript >]
  module CalcEditor = 
    // # 1  @"(4)58a9fc2a-df09-42ef-ba7a-54e780167009 CalculationModel.fsx"
    module CalculationModel =
        open Useful
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
        
        type ModId = ModId of Guid
        type AttId = AttId of Guid
        type ElmId = ElmId of Guid
        type CubId = CubId of Guid
        type DimId = DimId of Guid
        type CalId = CalId of Guid
        type ForId = ForId of Guid
        type RulId = RulId of Guid
        
        type Attribute = {
            attId                  : AttId
            mutable attName        : string
            mutable attType        : AttType
            mutable attTableNum    : int
        }
        
        type Element = {
            elmId                  : ElmId
            elmDim                 : DimId
            mutable elmType        : ElmType
            mutable elmName        : string
            mutable elmDescription : string
            mutable elmAttributes  : Map<AttId, string> 
            mutable elmParents     : ElmId     []
        } 
        with
            static member New name = 
              {
                elmId          = ElmId <| Guid.NewGuid()
                elmDim         = DimId <| Guid.NewGuid()
                elmType        = EtString
                elmName        = name
                elmDescription = name
                elmAttributes  = Map.empty
                elmParents     = [||]
              }
        
        type Dimension = {
            dimId                  : DimId
            mutable dimName        : string
            mutable dimPrefix      : string
            mutable dimType        : DimType
            mutable defaultElm     : ElmId     option
            mutable dimElements    : Element   []
            mutable dimAttributes  : Attribute []
            isCalcDim              : bool
        } with
            member this.GetElement       eId = this.dimElements |> Seq.find (fun e -> e.elmId = eId)
        
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
        
        type Function = Function
        
        type ElmReference =
            | ElemFixed   of DimId * ElmId
            | ElemDynamic of DimId * ExpressionText
          with
            member this.DimId =
                match this with
                | ElemFixed  (id, _)
                | ElemDynamic(id, _) -> id
                
        and  ExpressionText =
            | ExtNA
            | ExtStet
            | ExtSlice      of Slice
            | ExtString     of string
            | ExtDimElement of DimId
            | ExtDimName    of DimId
            | ExtFunction   of Function * ExpressionAny []
            | ExtIf         of ExpressionNumber * ExpressionText   * ExpressionText
            | ExtSubSt      of ExpressionText   * ExpressionNumber * ExpressionNumber
        
        and  ExpressionNumber =
            | ExnNA
            | ExnStet
            | ExnSlice      of Slice
            | ExnNumber     of float
            | ExnOperationN of Operator * ExpressionNumber * ExpressionNumber
            | ExnOperationT of Operator * ExpressionText   * ExpressionText
            | ExnOperationI of Operator * ExpressionAny    * ExpressionAny
            | ExnFunction   of Function * ExpressionAny []
            | ExnIf         of ExpressionNumber * ExpressionNumber * ExpressionNumber
            | ExnMax        of ExpressionNumber * ExpressionNumber
            | ExnMin        of ExpressionNumber * ExpressionNumber
            | ExnDeIsChild  of ExpressionText   * ExpressionText   * ExpressionText  
            
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
        } with 
            static member New ds = {
                     sliDims       = ds |> Seq.map (fun (dr:ElmReference) -> dr.DimId, dr) |> Map 
                     calculation   = None
                     cube          = None
            }
            static member ForAll = {
                     sliDims       = Map.empty
                     calculation   = None
                     cube          = None
            }
        
        
        type ForType = 
            | ForBase
            | ForConsolidated
            | ForAll
        
        type Formula = {
            forId                  : ForId
            mutable forDestination : ElmReference list
            mutable forDescription : string
            mutable forExpression  : ExpressionAny
            mutable forType        : ForType
        }
        
        type Calculation = {
            calId                  : CalId
            mutable calName        : string
            mutable calDescription : string
            mutable format         : string
            mutable isText         : bool
            mutable isInput        : bool
            mutable isBalance      : bool
            mutable calDims        : Set<DimId>
            mutable calFormulas    : Formula []
            mutable cube           : CubId   option
            properties             : System.Collections.Generic.Dictionary<string, string>
        } with
            member this.Slice : Slice = 
                 {
                     sliDims       = Map.empty
                     calculation   = Some this.calId
                     cube          = None
                 }
            member this.Type = if this.isInput then "INPUT" else "CALC"
        
        type RuleKey = 
            | RuleKey     of RulId
            | CalcRuleKey of CalId
            | FormulaKey  of ForId
            | ForTextKey  of ForId
            | ActualRuleKey 
            | InputRuleKey
            | ConsolidatedRuleKey
        
        type Cube = {
            cubId                  : CubId
            mutable cubName        : string
            mutable cubRules       : Map<RuleKey, Rule option>
            cubDims                : DimId []
            measureDim             : DimId option
            cubType                : CubeType
        } with
            member this.Slice : Slice = 
                 {
                     sliDims       = Map.empty
                     calculation   = None
                     cube          = Some this.cubId
                 }
            member this.ContainsDim dimId = this.cubDims |> Seq.contains dimId
            member this.IsCalcCube        = this.cubType = CtCalc
        
        and  Rule = {
            rulId                  : RulId
            rulSourceId            : IComparable
            mutable rulDescription : string
            mutable rulDestination : ElmReference list
            mutable rulExpression  : ExpressionAny
            mutable rulType        : ForType
            mutable rulOrder       : string
        }
        
        type Model = {
            modId                   : ModId
            mutable server          : string
            mutable modDims         : Dimension   []
            mutable modCubes        : Cube        []
            mutable modCalculations : Calculation []
        } 
        with
            member this.GetDim        dId   = this.modDims         |> Seq.find    (fun d   ->   d.dimId   =    dId)
            member this.GetCalc       cId   = this.modCalculations |> Seq.find    (fun c   ->   c.calId   =    cId)
            member this.GetCube     cubId   = this.modCubes        |> Seq.tryFind (fun cub -> cub.cubId   =  cubId)
            member this.PickCube       ct   = this.modCubes        |> Seq.tryPick (fun c   ->   if c.cubType = ct then Some c else None)
            member this.PickDim        dt   = this.modDims         |> Seq.tryPick (fun d   ->   if d.dimType = dt then Some d else None)
            member this.PickCalc       cn   = this.modCalculations |> Seq.tryPick (fun c   ->   if c.calName = cn then Some c else None)
            member this.FreezeCube          = this.PickCube CtFreeze
            member this.TCalcDim            = this.PickDim  DtTCalc
            member this.DataTypeDim         = this.PickDim  DtDataType
            member this.TimeDim             = this.PickDim  DtTime    
            member this.VersionDim          = this.PickDim  DtVersion 
            member this.IsActualCalc        = this.PickCalc "IsActual"
            member this.GetCalcCube dims    = 
                this.modCubes 
                |> Seq.filter  (fun cub -> cub.IsCalcCube   ) 
                |> Seq.tryFind (fun cub -> 
                    cub.cubDims 
                    |> Seq.filter (fun d -> Some d <> cub.measureDim) 
                    |> Set = dims )
            member this.withDims f =
                this.TCalcDim                         |> swap Option.bind <| fun tCalcDim    ->
                this.DataTypeDim                      |> swap Option.bind <| fun dataTypeDim ->
                f tCalcDim dataTypeDim
        
        let model = 
          {
            modId           = ModId <| Guid.NewGuid()
            server          = @"local\Budget"
            modDims         = [||]
            modCubes        = [||]
            modCalculations = [||]
          }
            
        type HelperTypeN = HelperTypeN with
            static member (&%>)  (HelperTypeN, a :     bool             ) : ExpressionNumber = ExnNumber <| if    a then 1.0 else 0.0
            static member (&%>)  (HelperTypeN, a :     int              ) : ExpressionNumber = ExnNumber <| float a
            static member (&%>)  (HelperTypeN, a :     float            ) : ExpressionNumber = ExnNumber          a
            static member (&%>)  (HelperTypeN, a :     Slice            ) : ExpressionNumber = ExnSlice           a
            static member (&%>)  (HelperTypeN, a :     Calculation      ) : ExpressionNumber = ExnSlice           a.Slice
            static member (&%>)  (HelperTypeN, a :     ExpressionNumber ) : ExpressionNumber =                    a
            
        let inline toExpN v : ExpressionNumber = HelperTypeN &%>  v
        
        type HelperTypeT = HelperTypeT with
            static member (&&>)  (HelperTypeT, a :     string           ) : ExpressionText   = ExtString          a 
            static member (&&>)  (HelperTypeT, a :     Dimension        ) : ExpressionText   = ExtDimName         a.dimId 
            static member (&&>)  (HelperTypeT, a :     Slice            ) : ExpressionText   = ExtSlice           a
            static member (&&>)  (HelperTypeT, a :     Calculation      ) : ExpressionText   = ExtSlice           a.Slice
            static member (&&>)  (HelperTypeT, a :     ExpressionText   ) : ExpressionText   =                    a
        
        let inline toExpT  v : ExpressionText = HelperTypeT &&>  v
        
        type HelperTypeA = HelperTypeA with
            static member (&>>)  (HelperTypeA, a :     ExpressionNumber) : ExpressionAny = ExNumeric          a 
            static member (&>>)  (HelperTypeA, a :     ExpressionText  ) : ExpressionAny = ExText             a
            static member (&>>)  (HelperTypeA, a :     Slice           ) : ExpressionAny = ExiSlice           a
            static member (&>>)  (HelperTypeA, a :     Calculation     ) : ExpressionAny = ExiSlice           a.Slice
            static member (&>>)  (HelperTypeA, a :     bool            ) : ExpressionAny = toExpN             a |> ExNumeric
            static member (&>>)  (HelperTypeA, a :     int             ) : ExpressionAny = toExpN             a |> ExNumeric
            static member (&>>)  (HelperTypeA, a :     float           ) : ExpressionAny = toExpN             a |> ExNumeric
            static member (&>>)  (HelperTypeA, a :     string          ) : ExpressionAny = toExpT             a |> ExText
            static member (&>>)  (HelperTypeA, a :     ExpressionAny   ) : ExpressionAny =                    a
        
        let inline toExpA  v : ExpressionAny = HelperTypeA &>>  v
        
        type Formula with
            static member inline New(dest, exp, typ) =
                  {
                      forId          = ForId <| Guid.NewGuid()
                      forDestination = dest
                      forDescription = ""
                      forExpression  = toExpA exp
                      forType        = typ
                  }
            member this.Conso = { this with forType = ForConsolidated }
           //static member inline Base(formula      ) = Formula.New([]  , formula, ForBase        )        
           //static member inline Base(formula, dest) = Formula.New(dest, formula, ForBase        )        
           //static member inline Cons(formula      ) = Formula.New([]  , formula, ForConsolidated)  
           //static member inline Cons(formula, dest) = Formula.New(dest, formula, ForConsolidated)  
           //static member inline All (formula      ) = Formula.New([]  , formula, ForAll         )    
           //static member inline All (formula, dest) = Formula.New(dest, formula, ForAll         )    
           
        
        let Map_adds kvs map = Seq.append (map |> Map.toSeq) kvs |> Map
        
        type Calculation with
            static member Input (name: string) dims  =
                let c =
                  {
                    calId          = CalId <| Guid.NewGuid()
                    calName        = name.Replace("_", " ").Trim()
                    calDescription = ""
                    format         = "#,##0.00"
                    isText         = false
                    isInput        = true
                    isBalance      = false
                    calDims        = dims |> Seq.map (fun d -> d.dimId) |> Set 
                    calFormulas    = [||]
                    cube           = None
                    properties     = System.Collections.Generic.Dictionary<string, string>()
                  }
                model.modCalculations <- Array.append model.modCalculations [| c |]
                c
            static member Calc name dims = 
                let c = Calculation.Input name dims
                c.isInput <- false
                c 
            member        this.Name name           = this.calName     <- name                                                                         ; this
            member inline this.Add (formula      ) = this.calFormulas <- Array.append this.calFormulas [| formula                                  |] ; this 
            member inline this.Base(expr         ) = this.calFormulas <- Array.append this.calFormulas [| Formula.New([]  , expr, ForBase        ) |] ; this 
            member inline this.Base(expr   , dest) = this.calFormulas <- Array.append this.calFormulas [| Formula.New(dest, expr, ForBase        ) |] ; this 
            member inline this.Cons(expr         ) = this.calFormulas <- Array.append this.calFormulas [| Formula.New([]  , expr, ForConsolidated) |] ; this 
            member inline this.Cons(expr   , dest) = this.calFormulas <- Array.append this.calFormulas [| Formula.New(dest, expr, ForConsolidated) |] ; this 
            member inline this.All (expr         ) = this.calFormulas <- Array.append this.calFormulas [| Formula.New([]  , expr, ForAll         ) |] ; this 
            member inline this.All (expr   , dest) = this.calFormulas <- Array.append this.calFormulas [| Formula.New(dest, expr, ForAll         ) |] ; this 
            member inline this.For (es: ElmReference list) = { this.Slice with sliDims = Map_adds (List.map (fun (e:ElmReference) -> e.DimId, e) es) this.Slice.sliDims } 
            member        this.AddFormulas fs = Array.append this.calFormulas (fs |> Seq.toArray)
            member        this.withCube (model: Model) f = this.cube |> Option.bind model.GetCube |> swap Option.bind <| f
        
        type Dimension with 
            static member New(name, isCalcDim) =
                let d =
                  {
                    dimId          = DimId <| Guid.NewGuid()
                    dimName        = name
                    dimPrefix      = ""
                    dimType        = DtOther
                    defaultElm     = None
                    dimElements    = [|  |]
                    dimAttributes  = [|  |]      
                    isCalcDim      = isCalcDim
                  }
                model.modDims <- Array.append model.modDims [| d |]
                d
            static member New     name  = Dimension.New(name, false)
            static member NewCalc name  = Dimension.New(name, true )
            member inline this.Item (it) : ElmReference = 
                match toExpT it with 
                | ExtString s1 -> let s2 = s1.Replace("_", " ")
                                  let elm =
                                     this.dimElements
                                     
                                     |> Seq.tryFind (fun e -> e.elmName = s2)
                                     |> Option.defaultWith (fun () -> 
                                         let newE = Element.New s2
                                         this.dimElements <- Array.append this.dimElements [| newE |]
                                         newE
                                     )
                                  ElemFixed  (this.dimId, elm.elmId) 
                | exp          -> ElemDynamic(this.dimId, exp                         )  
            //member inline this.__     it     = this.Item it
            //member inline this.M      it     = this.Item it
            //member inline this.E      it     = this.Item it
            //member inline this.I      it     = this.Item it
            member        this.Prefix pr     = this.dimPrefix <- pr   ; this
            member        this.DType  dt     = this.dimType   <- dt   ; this
            member        this.Name   name   = this.dimName   <- name ; this
                
        type Rule with
            static member inline New(dest, exp, typ) =
                  {
                      rulId          = RulId <| Guid.NewGuid()
                      rulDestination = dest
                      rulDescription = ""
                      rulExpression  = toExpA exp
                      rulType        = typ
                      rulOrder       = "A"
                      rulSourceId    = None
                  }
            static member inline New(dest, exp, typ) = Rule.New(dest.sliDims |> Map.toList |> List.map snd, exp, typ)
            member this.Conso = { this with rulType = ForConsolidated }    
        
        type Cube with
            static member New(name, dims, mDimO, cType) = 
                let c =
                    {
                      cubId      = CubId <| Guid.NewGuid()
                      cubName    = name
                      cubDims    = dims
                      cubRules   = Map.empty
                      measureDim = mDimO
                      cubType    = cType
                    }
                model.modCubes <- Array.append model.modCubes [| c |]
                c
            static member NewCalc(name, dims, mDimO) = Cube.New(name, dims                                             , mDimO, CtCalc )
            static member New    (name, dims, mDimO) = Cube.New(name, dims |> Seq.map (fun d -> d.dimId) |> Seq.toArray, mDimO, CtOther) 
            member inline this.AddRule key rule      = this.cubRules <- Map.add key rule this.cubRules ; this 
            //member inline this.Calc ()    = { this with cubType = CtCalc } 
            member inline this.For (es: ElmReference list) = { this.Slice with sliDims = Map_adds (List.map (fun (e:ElmReference) -> e.DimId, e) es) this.Slice.sliDims } 
        
        
    // # 1  @"(4)4f4d9d79-09fe-4df1-8af2-0ba6a4fffa2c CalculationSyntax.fsx"
    //#nowarn "68"
    module CalculationSyntax = 
        open CalculationModel
        let And = (&&)
    
        let inline ( +   ) x y = ExnOperationN (OpAdd     , toExpN    x      , toExpN    y)
        let inline ( -   ) x y = ExnOperationN (OpSubtract, toExpN    x      , toExpN    y)
        let inline ( *   ) x y = ExnOperationN (OpMultiply, toExpN    x      , toExpN    y)
        let inline ( /   ) x y = ExnOperationN (OpDivide  , toExpN    x      , toExpN    y)
        let inline ( =   ) x y = ExnOperationN (OpEQ      , toExpN    x      , toExpN    y)
        let inline ( <>  ) x y = ExnOperationN (OpNE      , toExpN    x      , toExpN    y)
        let inline ( >   ) x y = ExnOperationN (OpGT      , toExpN    x      , toExpN    y)
        let inline ( >=  ) x y = ExnOperationN (OpGE      , toExpN    x      , toExpN    y)
        let inline ( <   ) x y = ExnOperationN (OpLT      , toExpN    x      , toExpN    y)
        let inline ( <=  ) x y = ExnOperationN (OpLE      , toExpN    x      , toExpN    y)
        let inline ( &&  ) x y = ExnOperationN (OpAnd     , toExpN    x      , toExpN    y)
        let inline ( ||  ) x y = ExnOperationN (OpOr      , toExpN    x      , toExpN    y)
         
        let inline ( &=  ) x y = ExnOperationT (OpEQ      , toExpT    x      , toExpT    y)
        let inline ( &<> ) x y = ExnOperationT (OpNE      , toExpT    x      , toExpT    y)
        let inline ( &>  ) x y = ExnOperationT (OpGT      , toExpT    x      , toExpT    y)
        let inline ( &>= ) x y = ExnOperationT (OpGE      , toExpT    x      , toExpT    y)
        let inline ( &<  ) x y = ExnOperationT (OpLT      , toExpT    x      , toExpT    y)
        let inline ( &<= ) x y = ExnOperationT (OpLE      , toExpT    x      , toExpT    y)
         
        let inline ( ?   ) (d:Dimension) e = d.[ toExpT e ]
        let inline ( !   ) (d:Dimension)   = ExtDimElement d.dimId
        
        
        let inline IF          (cond, thenR , elseR) = ExnIf       (toExpN cond, toExpN thenR , toExpN elseR)
        let inline MAX         (v1  , v2           ) = ExnMax      (toExpN v1  , toExpN v2                  )
        let inline MIN         (v1  , v2           ) = ExnMin      (toExpN v1  , toExpN v2                  )
        let inline DE_ISCHILD  (dim , parent, child) = ExnDeIsChild(toExpT dim , toExpT parent, toExpT child)
        
        let inline IFt  (cond, thenR, elseR) = ExtIf   (toExpN cond, toExpT thenR, toExpT elseR)
        let inline IFa  (cond, thenR, elseR) = ExiIf   (toExpN cond, toExpA thenR, toExpA elseR)
        let inline SUBST(txt , from , len  ) = ExtSubSt(toExpT txt , toExpN from , toExpN len  )
        
        let ForAll = {
                     sliDims       = Map.empty
                     calculation   = None
                     cube          = None
        }
        
        let inline toForm0 e = Formula.New([], toExpA e, ForBase)
        let inline addFormula  (c:Calculation) f dest forT = c.Add({ f with forDestination = dest ; forType = forT })
        let inline addFormulaE (c:Calculation) e           = addFormula c (toForm0 e)
        let inline toRule0 e = Rule.New([], toExpA e, ForBase)
        let inline addRule     (c:Cube       ) r dest rulT = c.AddRule (RuleKey r.rulId) (Some { r with rulDestination = dest ; rulType = rulT })
        let inline addRuleE    (c:Cube       ) e           = addRule c (toRule0 e)
        
    (*    let elmRef2ElmId r =
            match r with
            | ElemFixed  (d, eId) -> d, eId
            | ElemDynamic(d, exp) -> failwith <| sprintf "dynamic references not allowed: %O" (d, exp)
            
        let elmRefs2ElmIds rs = rs |> List.map elmRef2ElmId
    *)    
    //    type HelperForm = HelperForm with
    //        static member (?<-) (c:Cube       , HelperForm, l : ElmReference list) = fun dest rulT f -> addRule    c f l rulT
    //        static member (?<-) (c:Calculation, HelperForm, f : Formula          ) = addFormula  c f 
    //        static member (?<-) (c:Calculation, HelperForm, e : ExpressionNumber ) = addFormulaE c e 
    //        static member (?<-) (c:Calculation, HelperForm, e : ExpressionText   ) = addFormulaE c e
    //        static member (?<-) (c:Calculation, HelperForm, e : Slice            ) = addFormulaE c e
    //        static member (?<-) (c:Calculation, HelperForm, e : Calculation      ) = addFormulaE c e
    //        static member (?<-) (c:Calculation, HelperForm, e : bool             ) = addFormulaE c e
    //        static member (?<-) (c:Calculation, HelperForm, e : int              ) = addFormulaE c e
    //        static member (?<-) (c:Calculation, HelperForm, e : float            ) = addFormulaE c e
    //        static member (?<-) (c:Calculation, HelperForm, e : string           ) = addFormulaE c e
    //        static member (?<-) (c:Calculation, HelperForm, e : ExpressionAny    ) = addFormulaE c e 
    //        static member (?<-) (c:Calculation, HelperForm, l : ElmReference list) = fun dest forT f -> addFormula c f l forT
    //    
    //    let inline (<<|  )  c e = (c?(HelperForm)<-e) [] ForBase
    //    let inline (<<|* )  c e = (c?(HelperForm)<-e) [] ForConsolidated
    //    
    //    type HelperForm2 = HelperForm2 with
    //        static member (?<-) (add :Rule    -> Cube       , HelperForm2, r : Rule             ) = add(r        )
    //        static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : ExpressionNumber ) = add(toRule0 f) 
    //        static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : ExpressionText   ) = add(toRule0 f)
    //        static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : Slice            ) = add(toRule0 f)
    //        static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : Calculation      ) = add(toRule0 f)
    //        static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : bool             ) = add(toRule0 f)
    //        static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : int              ) = add(toRule0 f)
    //        static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : float            ) = add(toRule0 f)
    //        static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : string           ) = add(toRule0 f)
    //        static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : ExpressionAny    ) = add(toRule0 f) 
    //        static member (?<-) (add :Formula -> Calculation, HelperForm2, f : Formula          ) = add(f        )
    //        static member (?<-) (add :Formula -> Calculation, HelperForm2, f : ExpressionNumber ) = add(toForm0 f) 
    //        static member (?<-) (add :Formula -> Calculation, HelperForm2, f : ExpressionText   ) = add(toForm0 f)
    //        static member (?<-) (add :Formula -> Calculation, HelperForm2, f : Slice            ) = add(toForm0 f)
    //        static member (?<-) (add :Formula -> Calculation, HelperForm2, f : Calculation      ) = add(toForm0 f)
    //        static member (?<-) (add :Formula -> Calculation, HelperForm2, f : bool             ) = add(toForm0 f)
    //        static member (?<-) (add :Formula -> Calculation, HelperForm2, f : int              ) = add(toForm0 f)
    //        static member (?<-) (add :Formula -> Calculation, HelperForm2, f : float            ) = add(toForm0 f)
    //        static member (?<-) (add :Formula -> Calculation, HelperForm2, f : string           ) = add(toForm0 f)
    //        static member (?<-) (add :Formula -> Calculation, HelperForm2, f : ExpressionAny    ) = add(toForm0 f) 
    //    
    //    let inline (<<<)  p e = p?(HelperForm2)<-e
        
        let Calc  = Calculation.Calc
        let Input = Calculation.Input
        let NA    = ExnNA
        
        
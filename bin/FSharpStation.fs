#nowarn "1182"
#nowarn "40"
#nowarn "1178"
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

  // Code to be evaluated using FSI: `Evaluate F#`
    #if WEBSHARPER
    //#I @"..\packages\Zafir\lib\net40"
    
    //#r @"WebSharper.Core.dll"
    //#r @"WebSharper.Core.JavaScript.dll"
    //#r @"WebSharper.Collections.dll"
    //#r @"WebSharper.Main.dll"
    //#r @"WebSharper.JQuery.dll"
    //#r @"WebSharper.JavaScript.dll"
    //#r @"WebSharper.Web.dll"
    //#r @"WebSharper.Sitelets.dll"
    //#r @"..\packages\Zafir.UI.Next\lib\net40\WebSharper.UI.Next.dll"
    
    open WebSharper
    open WebSharper.JavaScript
    open WebSharper.UI.Next
    open WebSharper.UI.Next.Client
    type on   = WebSharper.UI.Next.Html.on
    type attr = WebSharper.UI.Next.Html.attr
    #endif
    #if WEBSHARPER
    [<WebSharper.JavaScript>]
    #endif
    module Useful =
      open System
      //#nowarn "1178"
      #if WEBSHARPER
      [<JavaScript>]
      #endif
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
      
      #if WEBSHARPER
      [<JavaScript>]
      #endif
      type ErrSimple(msg, warning) =
          interface ErrMsg with
              member this.ErrMsg   : string = msg
              member this.IsWarning: bool   = warning
          override this.ToString() = (this :> ErrMsg).ErrMsg
      
      #if WEBSHARPER
      [<JavaScript>]
      #endif
      type Result<'TSuccess> = Result of 'TSuccess option * ErrMsg list     
      
      #if WEBSHARPER
      [<JavaScript>]
      #endif
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
      
      
          let (|Success|Failure|) =
              function 
              | Result(Some x, ms) -> Success (x, ms) 
              | Result(None  , ms) -> Failure     ms  
      
          let x = function
                    | Success (x, ms) -> "yes"
                    | Failure     ms  -> "No"
      
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
              member inline this.Using      (disposable, restOfCExpr) = using disposable restOfCExpr
              member inline this.Zero       ()                        = succeed ()
              member inline this.Delay      (f)                       = f()
              member inline this.Combine    (a, b)                    = combine a b
      //        member this.Run        (f)                       = f
      //        member this.While(guard, body) =
      //            if not (guard()) 
      //            then this.Zero() 
      //            else this.Bind( body(), fun () -> 
      //                this.While(guard, body))  
      //        member this.For(sequence:seq<_>, body) =
      //            this.Using(sequence.GetEnumerator(),fun enum -> 
      //                this.While(enum.MoveNext, 
      //                    this.Delay(fun () -> body enum.Current)))
      
          let result = ropBuilder()
      //    let inline flow_ () = new ropBuilder ()
      
          let fromChoice context c =
              match c with | Choice1Of2 v -> succeed v
                           | Choice2Of2 e -> fail    e
      
          let fromOption m =
              function | None   -> fail    m
                       | Some v -> succeed v
      
          let toOption (Result(o, _)) = o
      
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
      
          let getMessages   (ms: ErrMsg list) = ms |> List.map (fun m -> m.ErrMsg) |> String.concat "\n"
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
       
      open Result
      
      type Wrap<'T> =
      | WResult of Result<'T>
      | WAsync  of Async<'T>
      | WAsyncR of Async<Result<'T>>
      | WSimple of 'T
      | WOption of 'T option
      
      #if WEBSHARPER
      [<JavaScript>]
      #endif
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
      
          let wrapper2Async (f: 'a -> Wrap<'b>) a : Async<Result<'b>> =
              let wb = tryCall f a
              match wb with
              | WSimple _
              | WOption _               -> wb |> wb2arb []
              | WResult (Result(_, ms)) -> wb |> wb2arb ms
              | WAsync  ab              -> async { let!   b = ab
                                                   return succeed b }
              | WAsyncR arb              -> arb
      
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
      
          let combine errOptionIsNone wa wb =
              match wa with
              | WSimple          _
              | WOption (Some    _)
              | WResult (Result (_, []))
              | WAsync           _       -> wb
              | WAsyncR          _       -> wb
              | WOption (None     )      -> wb |> addMsgs errOptionIsNone [errOptionIsNone]
              | WResult (Result(_, ms))  -> wb |> addMsgs errOptionIsNone ms
      
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
              member inline this.Delay        (f) = f()
              member        this.Combine   (a, b) = combine errOptionIsNone a b
              member        this.Using (resource, body: 'a -> Wrap<'b>) =
                  async.Using(resource, wrapper2Async body) |> WAsyncR
                          
          let wrapper = Builder()
      
          let getResult callback (wb: Wrap<'T>) =
              match wb with
              | WSimple      s  -> s               |> succeed                                      |> callback
              | WOption(Some s) -> s               |> succeed                                      |> callback
              | WOption None    -> errOptionIsNone |> fail                                         |> callback
              | WResult      rb -> rb                                                              |> callback
              | WAsync       ab -> Async.StartWithContinuations(ab , (fun v   -> succeed v         |> callback), 
                                                                     (fun exc -> failException exc |> fail |> callback), 
                                                                      fun can -> failException can |> fail |> callback)
              | WAsyncR     arb -> Async.StartWithContinuations(arb,                                          callback , 
                                                                     (fun exc -> failException exc |> fail |> callback), 
                                                                      fun can -> failException can |> fail |> callback)
      
          let inline getAsyncR (wb: Wrap<'T>) =
              match wb with
              | WAsync      va  -> async {
                                     let! v = va
                                     return      succeed                           v}
              | WSimple     v   -> async.Return (succeed                           v)
              | WOption     v   -> async.Return (Result.fromOption errOptionIsNone v)
              | WResult     v   -> async.Return                                    v
              | WAsyncR     vra -> vra
              
          let inline getAsyncWithDefault f (wb: Wrap<'T>) = 
              async {
                  let!   vR = getAsyncR wb
                  return vR |> Result.withError f
              }
      
          let inline getAsync w =
              match w with
              | WAsync      va  ->              va
              | WSimple     v   -> async.Return v
              | WOption     vo  -> async {
                                      return
                                          match vo with 
                                          | Some v         -> v
                                          | None           -> raise (exn(getMessages [errOptionIsNone]))
                                   }
              | WResult     vr  -> async {
                                      return
                                          match vr with 
                                          | Success (v, _) -> v
                                          | Failure ms     -> raise (exn(getMessages ms))
                                   }
              | WAsyncR     vra -> async {
                                      let! vr = vra
                                      return
                                          match vr with 
                                          | Success (v, _) -> v
                                          | Failure ms     -> raise (exn(getMessages ms))
                                   }
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
                 
      
      #if WEBSHARPER
      [<JavaScript>]
      #endif
      type Wrap<'T> with
          static member Start           (w:Wrap<_   >,           ?cancToken) = Async.Start           (Wrap.getAsync  w,                                ?cancellationToken= cancToken)
          static member StartAsTask     (w:Wrap<'T  >, ?options, ?cancToken) = Async.StartAsTask     (Wrap.getAsyncR w, ?taskCreationOptions= options, ?cancellationToken= cancToken)
      #if WEBSHARPER
          [< Inline "console.log('RunSynchronously should not be used in Javascript')" >]                       
      #endif
          static member RunSynchronously(w:Wrap<'T  >, ?timeout, ?cancToken) = Async.RunSynchronously(Wrap.getAsyncR w, ?timeout            = timeout, ?cancellationToken= cancToken)
      
      let extract n (s:string) = s.Substring(0, min n s.Length)
      
      #if WEBSHARPER
      [< Inline "(function (n) { return n.getFullYear() + '-' +(n.getMonth() + 1) + '-' +  n.getDate() + ' '+n.getHours()+ ':'+n.getMinutes()+ ':'+n.getSeconds()+ ':'+n.getMilliseconds() })(new Date(Date.now()))" >]
      #endif
      let nowStamp() = System.DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss.fff", System.Globalization.CultureInfo.InvariantCulture)
      
      module Async =
          let map f va = 
              async { 
                  let! a = va
                  return f a 
              } 
      #if WEBSHARPER
      
      let (|REGEX|_|) (expr: string) (opt: string) (value: string) =
          if value = null then None else
          try 
              match JavaScript.String(value).Match(RegExp(expr, opt)) with
              | null         -> None
              | [| |]        -> None
              | m            -> Some m
          with e -> None
      #endif
      
      let inline swap f a b = f b a
      
      #if WEBSHARPER
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
          #if WEBSHARPER
          [< Inline >]
          #endif
          member this.Call x =
              let mutable res = Unchecked.defaultof<_>
              let ok = cache.TryGetValue(x, &res)
              if ok then res 
              else let res = f x
                   cache.[x] <- res
                   res
          
      type PreproDirective =
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
      
      let separatePrepros removePrepoLine (code:string[]) =
          let  quoted (line:string) = line.Trim().Split([| "\""       |], System.StringSplitOptions.RemoveEmptyEntries) |> Seq.tryLast |> Option.defaultValue line
          let  define (line:string) = line.Trim().Split([| "#define " |], System.StringSplitOptions.RemoveEmptyEntries) |> Seq.tryHead |> Option.defaultValue ""
          let  comment = ((+)"//") 
          let  preL    = if removePrepoLine then comment else id 
          let  prepro (line:string) = match true with 
                                      | true when line.StartsWith("#define") -> (comment line, line |> define |> PrepoDefine)
                                      | true when line.StartsWith("#r"     ) -> (comment line, line |> quoted |> PrepoR     )
                                      | true when line.StartsWith("#load"  ) -> (comment line, line |> quoted |> PrepoLoad  )
                                      | true when line.StartsWith("#nowarn") -> (comment line, line |> quoted |> PrepoNoWarn)
                                      | true when line.StartsWith("# "     ) -> (preL    line, line |> quoted |> PrepoLine  )
                                      | true when line.StartsWith("#line"  ) -> (preL    line, line |> quoted |> PrepoLine  )
                                      | true when line.StartsWith("#I"     ) -> (comment line, line |> quoted |> PrepoI     )
                                      | true when line.StartsWith("#if"    ) -> (        line, line           |> PrepoIf    )
                                      | true when line.StartsWith("#else"  ) -> (        line,                   PrepoElse  )
                                      | true when line.StartsWith("#endif" ) -> (        line,                   PrepoEndIf )
                                      | true when line.StartsWith("#light" ) -> (        line, false          |> PrepoLight )
                                      | true when line.StartsWith("#"      ) -> (comment line, line           |> PrepoOther )
                                      | _                                    -> (        line,                   NoPrepo    ) 
          code |> Array.map prepro
          
      let separateDirectives (fsNass:(string * PreproDirective) seq) =
          let  assembs  = fsNass |> Seq.choose (snd >> (function | PrepoR assemb -> Some assemb | _ -> None)) |> Seq.distinct |> Seq.toArray
          let  defines  = fsNass |> Seq.choose (snd >> (function | PrepoDefine d -> Some d      | _ -> None)) |> Seq.distinct |> Seq.toArray
          let  prepoIs  = fsNass |> Seq.choose (snd >> (function | PrepoI      d -> Some d      | _ -> None)) |> Seq.distinct |> Seq.toArray
          let  nowarns  = fsNass |> Seq.choose (snd >> (function | PrepoNoWarn d -> Some d      | _ -> None)) |> Seq.distinct |> Seq.toArray
          let  code     = fsNass |> Seq.map     fst                                                                           |> Seq.toArray
          code, assembs, defines, prepoIs, nowarns
      
      
    module UsefulDotNet =
      open Useful
      
      type ResourceAgent<'T, 'C when 'C : equality>(restartAfter:int, ctor: 'C option ->'T, ?cleanup, ?isAlive, ?configuration: 'C) =
          let mutable configuration = configuration
          let mutable resource = ctor configuration
          let respawn() =
              cleanup |> Option.iter (fun clean -> clean resource) 
              resource <- ctor configuration
          let agent    = 
              MailboxProcessor.Start(fun inbox ->
                  async {
                     while true do
                       try
                           for i in 1 .. restartAfter do
                               let! config, work = inbox.Receive()
                               isAlive |> Option.iter (fun alive -> if not (alive resource) then respawn())
                               if config <> configuration then
                                  configuration <- config
                                  respawn()
                               do!  work resource
                           respawn()
                       with _ -> respawn() 
                  }
              )
          do agent.Error.AddHandler <| Handler (fun _ _ -> respawn())
          member x.Process (work:'T -> Wrap<'a>, ?config) =
              agent.PostAndAsyncReply
                  (fun reply ->
                       (config, fun resource ->
                                async {
                                     let! res = work resource |> Wrap.getAsyncR
                                     reply.Reply res
                                } 
                       )
                  )
          interface System.IDisposable with
              member this.Dispose () =
                  try cleanup |> Option.iter (fun clean -> clean resource) with _ -> ()
      
      type TempFileName(fn) =
          new () = new TempFileName(System.IO.Path.GetTempFileName())
          member this.Name = fn
          interface System.IDisposable with
              member this.Dispose() = if System.IO.File.Exists fn then System.IO.File.Delete fn
              
              
      open System.Diagnostics
      open System.Text
      open Useful
      
      let runProcess p ops =
          let procStart   = ProcessStartInfo(p, ops)
          let proc        = new Process()
          proc.StartInfo <- procStart
          proc.Start() 
      
      type ShellExError =
          | ShellExitCode              of int
          | ShellOutput                of string
          | ShellErrors                of string
          | ShellFailWithMessage       of string
          | ShellFinishedWithNoMessage 
          | ShellDidNotStart 
          | ShellCrashed               of string
      with interface ErrMsg with
              member this.ErrMsg    = 
                  match this with 
                  | ShellFailWithMessage msg   -> msg  
                  | ShellFinishedWithNoMessage -> "warning - No output"
                  | ShellOutput          msg   -> msg
                  | ShellCrashed         msg   -> "Crashed " + msg
                  | msg                        -> sprintf "%A" msg
              member this.IsWarning =
                  match this with 
                  | ShellFinishedWithNoMessage
                  | ShellOutput _              -> true
                  | _                          -> false 
      
      
      type ShellEx(startInfo: ProcessStartInfo) =
          let proc                              = new Process()
          let bufferOutput                      = new StringBuilder()
          let bufferError                       = new StringBuilder()
          let consume (sb: StringBuilder)       = 
              let v = sb.ToString()
              sb.Clear() |> ignore
              v
          do  startInfo.RedirectStandardInput  <- true
              startInfo.RedirectStandardOutput <- true
              startInfo.RedirectStandardError  <- true
              startInfo.UseShellExecute        <- false
              proc.StartInfo                   <- startInfo
              proc.EnableRaisingEvents         <- true
              proc.OutputDataReceived.AddHandler(DataReceivedEventHandler(fun sender args -> try bufferOutput.Append(args.Data + "\n") |> ignore with _ -> () ))
              proc.ErrorDataReceived .AddHandler(DataReceivedEventHandler(fun sender args -> try bufferError .Append(args.Data + "\n") |> ignore with _ -> () ))
      //        proc.Exited            .AddHandler(System.EventHandler     (fun sender args -> try proc.Close()                                    with _ -> () ))
          new (program, args) =             
              let startInfo                         = new ProcessStartInfo()
              do  startInfo.FileName               <- program
                  startInfo.Arguments              <- args
              new ShellEx(startInfo)
          member this.Start() = 
              let r = proc.Start() 
              proc.BeginOutputReadLine()
              proc.BeginErrorReadLine ()
              r
          member this.StartAndWait() =
              let started = this.Start()
              proc.WaitForExit()
              let    output  = (consume bufferOutput).Trim()
              let    error   = (consume bufferError ).Trim()
              (output, error, if proc.HasExited then proc.ExitCode else -99999)
          member this.StartAndWaitR() =
              let out, errs, exit = this.StartAndWait()
              if exit <> 0
              then Result.failWithMsgs
                      [ if out  <> ""              then yield ErrSimple ("stdout: " + out           , true ) :> ErrMsg
                        if errs <> ""              then yield ErrSimple (errs                       , false) :> ErrMsg
                        if errs  = "" || exit <> 1 then yield ErrSimple (sprintf "ExitCode: %d" exit, false) :> ErrMsg
                      ]
              else Result.succeedWithMsgs out 
                      [ if errs <> ""              then yield ErrSimple (errs                       , false) :> ErrMsg ]
          member this.Send(txt: string)   = proc.StandardInput.WriteLine txt
          member this.Output  ()          = consume bufferOutput
          member this.Error   ()          = consume bufferError
          member this.Response(out:string, err:string)  = 
              match out.Trim(), err.Trim() with
      //        | ""  , ""  -> None
              | good, ""  -> Some( Result.succeed        good                             )
              | ""  , bad -> Some( Result.fail                <| ShellFailWithMessage bad )
              | good, bad -> Some( Result.succeedWithMsg good <| ShellFailWithMessage bad )
          member this.Response()          = this.Response(this.Output(), this.Error())
          member this.SendAndWait(send, wait, ?onError) =
              let eventWait = 
                  if defaultArg onError false then proc.ErrorDataReceived else proc.OutputDataReceived
                  |> Event.choose (fun evArgs -> try evArgs.Data |> (fun v -> if v.Contains wait then Some <| Result.succeed v else None) with _ -> None)
              let eventAll = Event.merge eventWait  (Event.map (fun _ -> Result.fail <| ShellCrashed startInfo.FileName) proc.Exited)
              Wrap.wrapper {
                  do! Result.tryProtection()
                  async { 
                      do!    Async.Sleep 20 
                      this.Send send        } |> Async.Start
                  let!   waitedR = Async.AwaitEvent eventAll
                  let!   waited  = waitedR
                  do!    Async.Sleep 200
                  let!   res =
                         if defaultArg onError false then 
                             this.Response(this.Output(), this.Error() |> fun msg -> msg.Split([| waited |], System.StringSplitOptions.None) |> Array.head)
                         else this.Response()
                         |> Option.defaultWith (fun () -> Result.succeedWithMsg "" ShellFinishedWithNoMessage)
                  return res
              }
          member this.HasExited = try proc.HasExited with _ -> true
          interface System.IDisposable with
              member this.Dispose () =
                  try proc.Kill   () with _ -> ()
                  try proc.Close  () with _ -> ()
                  try proc.Dispose() with _ -> ()
      
      
      let runProcess2 p ops =
          let procStart   = ProcessStartInfo(p, ops)
          let shell       = new ShellEx(procStart)
          shell.StartAndWaitR() 
      
      
      open System.IO
      
      let copyIfNotExistsToFile from dest =
          let fit = FileInfo dest
          if not fit.Exists then
              File.Copy(from, dest, true )
      
      let copyIfMustToFile from dest =
          let fit = FileInfo dest
          let must = 
              match fit.Exists with 
              | false -> true
              | true  ->
                  let fif = FileInfo dest
                  fif.Length <> fit.Length || fif.LastWriteTime <> fit.LastWriteTime
          if must then
              File.Copy(from, dest, true )
      
      let copyIfMustToDir from destDir =
          let dest = Path.Combine(destDir, Path.GetFileName(from))
          copyIfMustToFile from dest
          
      let inline (+/+) a b = System.IO.Path.Combine(a, b)
      module CompOptionsModule = // needs to be in a module so (?) operator does not collide with websharper
          
          type CompOptionClass = 
              | OpFSharp
              | OpWebSharper
              | OpInternal
          
          type CompOption = 
              {
                  name   : string
                  unique : bool
                  opClass: CompOptionClass  
                  prefix : string
              }
          with
              static member (/=) (op: CompOption, v: CompOptionValue) = op,           v
              static member (/=) (op: CompOption, v                 ) = op, OpVText   v
              static member (/=) (op: CompOption, v                 ) = op, OpVTextOF v
          
          and CompOptionValue =
              | OpVText   of                string
              | OpVTextOF of (CompOptions -> string)
          with 
              member this.Value ops = 
                  match this with
                  | OpVText   v  -> v
                  | OpVTextOF fo -> fo ops
          
          and CompOptions = CompOptions of (CompOption * CompOptionValue) []
          with
              member this.Pairs             =  this |> function CompOptions ops ->  ops
              member this.Exists   f        =  this.Pairs |> Array.exists f 
              member this.Find     name     =  this.Pairs |> Array.find (fun (opT, opV) -> name = opT.name)
              member this.FindV    name     = (this.Find name |> snd).Value this
              member this.Contains co       =  this.Exists (fun (opT, opV) -> co   = opT                           )
              member this.Contains v        =  this.Exists (fun (opT, opV) -> v    = opT.prefix + (opV.Value this) )
              member this.Get      f        =  this.Pairs |> Array.filter f |> Array.map (fun (opT, opV) ->        opT.prefix + (opV.Value this) )
              static member FSharpOptions   = fun ({opClass=cls}, _) -> cls = OpFSharp
              static member WSharperOptions = fun ({opClass=cls}, _) -> cls = OpFSharp || cls = OpWebSharper
              static member (?) (ops: CompOptions, name: string) = ops.FindV name
              static member (+) (os1: CompOptions, a2: (CompOption * CompOptionValue) seq) = 
                  match os1 with 
                  | CompOptions a1 -> 
                      a1
                      |> Array.filter (fun (opT, _) -> (not opT.unique) || (a2 |> Seq.exists (fst >> (=) opT) |> not) )
                      |> Seq.append <| a2
                      |> Seq.toArray
                      |> CompOptions
              static member (+) (ops: CompOptions, o:   CompOption * CompOptionValue      ) = ops + [| o |]
              static member (+) (os1: CompOptions, os2: CompOptions                       ) = match os2 with | CompOptions a2 -> os1 + a2
          
          let (?) (ops:CompOptions) name = ops.FindV name
          
          let opSnippet     = { name = "Snippet"     ; unique = true  ; opClass = OpInternal   ; prefix = "++snippet:"   }
          let opDirectory   = { name = "Directory"   ; unique = true  ; opClass = OpInternal   ; prefix = "++directory:" }
          let opName        = { name = "Name"        ; unique = true  ; opClass = OpInternal   ; prefix = "++name:"      }
          let opExtension   = { name = "Extension"   ; unique = true  ; opClass = OpInternal   ; prefix = "++extension:" }
          let opFileName    = { name = "Filename"    ; unique = true  ; opClass = OpInternal   ; prefix = "++filename:"  }
          let opConfig      = { name = "Config"      ; unique = true  ; opClass = OpInternal   ; prefix = "++config:"    }
          let opGenInternal = { name = "GenInternal" ; unique = false ; opClass = OpInternal   ; prefix = "++"           }
          let opWebSharper  = { name = "WebSharper"  ; unique = true  ; opClass = OpInternal   ; prefix = "++websharper:"}
              
          let opIOption     = { name = "IOption"     ; unique = false ; opClass = OpFSharp     ; prefix = "-I:"          }
          let opReference   = { name = "Reference"   ; unique = false ; opClass = OpFSharp     ; prefix = "-r:"          }
          let opSource      = { name = "Source"      ; unique = false ; opClass = OpFSharp     ; prefix = ""             }
          let opTarget      = { name = "Target"      ; unique = true  ; opClass = OpFSharp     ; prefix = "--target:"    }
          let opOutput      = { name = "Output"      ; unique = true  ; opClass = OpFSharp     ; prefix = "-o:"          }
          let opDebug       = { name = "Debug"       ; unique = true  ; opClass = OpFSharp     ; prefix = "--debug:"     }
          let opDefine      = { name = "Define"      ; unique = false ; opClass = OpFSharp     ; prefix = "--define:"    }
          let opGenFSharp1  = { name = "GenFSharp1"  ; unique = false ; opClass = OpFSharp     ; prefix = "-"            }
          let opGenFSharp2  = { name = "GenFSharp2"  ; unique = false ; opClass = OpFSharp     ; prefix = "--"           }
          
          let opWebSite     = { name = "Website"     ; unique = true  ; opClass = OpWebSharper ; prefix = "--wsoutput:"  }
          let opGenWSharper = { name = "GenWSharper" ; unique = false ; opClass = OpWebSharper ; prefix = "--"           }
          
          let dllOptions     = CompOptions [| opTarget      /= "library"                                                                     |]  
          let exeOptions     = CompOptions [| opTarget      /= "exe"     ; opGenInternal /= "copyassemblies" ; opGenInternal /= "copyconfig" |]
          let winExeOptions  = CompOptions [| opTarget      /= "winexe"  ; opGenInternal /= "copyassemblies" ; opGenInternal /= "copyconfig" |]
          
          let genericOptions = 
            CompOptions
              [|
                 opSnippet     /= "Test"
                 opName        /= fun os -> (os?Snippet : string).Split('/') |> Array.last
                 opDirectory   /= fun os -> "Compiled" +/+ os?Name
                 opExtension   /= fun os -> match os?Target with | "library" -> "dll" | _ -> "exe"
                 opFileName    /= fun os -> os?Directory +/+ os?Name + ".fs"
                 opSource      /= fun os -> os?Filename
                 opOutput      /= fun os -> System.IO.Path.ChangeExtension(os?Source, os?Extension)
                 opConfig      /= fun os -> os?Output + ".config"
                 opWebSharper  /= fun os -> if (os:CompOptions).Exists (fun (opT, opV) -> opT.opClass = OpWebSharper) then "1" else "0"
              |]
              
          let siteOptions =
            CompOptions
              [|
                 opGenWSharper /= "ws:Site"
                 opWebSite     /= fun os -> os?Directory +/+ "website"
                 opGenWSharper /= fun os -> sprintf "project:%s"  os?Name
              |] 
           
          let wsProjectOptions =
            CompOptions
              [|
                 opGenWSharper /= fun os -> sprintf "project:%s"  os?Name
              |] 
           
          let debugOptions = 
            CompOptions
              [|
                 opGenFSharp1  /= "g"
                 opDebug       /= "full"
                 opDefine      /= "DEBUG"
                 opDefine      /= "TRACE"
                 opGenFSharp2  /= "optimize-"
                 opGenFSharp2  /= "tailcalls-"
              |]
          
          let otherOptions =
            CompOptions
              [|
                 //@"--noframework"
                 opGenFSharp2  /= "warn:3"
                 opGenFSharp2  /= "warnaserror:76"
                 opGenFSharp2  /= "vserrors"
                 opGenFSharp2  /= "utf8output"
                 opGenFSharp2  /= "fullpaths"
                 opGenFSharp2  /= "flaterrors"
                 opGenFSharp2  /= "subsystemversion:6.00"
                 opGenFSharp2  /= "highentropyva+"
                 opGenInternal /= "removelinedirectives"
              |]
          
          let compileOptionsDll (snp:string) = 
              genericOptions
              + dllOptions
              + otherOptions
              + opSnippet     /= snp
              
          let compileOptionsDllDebug (snp:string) = compileOptionsDll snp + debugOptions        
          let compileOptionsExeDebug    snp = compileOptionsDllDebug snp + exeOptions   
          let compileOptionsWinExeDebug snp = compileOptionsDllDebug snp + winExeOptions
              
          let prepOptions (options:CompOptions) (code : string [], assembs : string [], defines : string [], prepoIs : string [], nowarns : string []) =
              let  code2 =
                 [
                    yield! nowarns |> Seq.distinct |> Seq.map (sprintf "#nowarn \"%s\"")
                    yield! code 
                 ] |> String.concat "\n"
              let  fileName = options?Filename
              do   System.IO.File.WriteAllText(fileName, code2)
              let  options2 = 
                   options  + [|
                                 yield! prepoIs |> Array.map ((/=) opIOption  ) 
                                 yield! assembs |> Array.map ((/=) opReference)
                                 yield! defines |> Array.map ((/=) opDefine   )
                                 if options.Contains "++staticlinkall" then 
                                     yield! assembs |> Array.map (System.IO.Path.GetFileNameWithoutExtension >> ((+) "staticlink:") >> ((/=) opGenFSharp2 ))         
                              |]
              if options.Contains "++copyassemblies" then 
                  assembs |> Array.iter (fun f -> System.IO.Path.GetDirectoryName(fileName) |> copyIfMustToDir f)      
              if options2.Contains "++showoptions"    then printfn "%s" (options2.Get (fun _ -> true) |> String.concat "\n")               
              options2
          
      
    module FsEvaluator =
      open Useful
      
      module Evaluator =
          open System.Diagnostics
          open UsefulDotNet
          
          type FsiExe(config) =
              let startInfo                 = ProcessStartInfo(@"fsiAnyCPU.exe", config |> String.concat " ")             
              let shell                     = new ShellEx(startInfo)  // --noninteractive
              let endToken                  = "xXxY" + "yYyhH"
              do  startInfo.CreateNoWindow <- false
                  shell.Start() |> ignore
              member this.Eval txt =
                  Wrap.wrapper {
                      do! Result.tryProtection()
                      shell.Send txt 
                      shell.Send ";;"
                      let! res = shell.SendAndWait(endToken + ";;", endToken, true)
                      return res
                  }
              member this.IsAlive = not shell.HasExited
              interface System.IDisposable with
                  member this.Dispose () = 
                      (shell :> System.IDisposable).Dispose()
          
          let fsiExe = lazy new ResourceAgent<_, string> (20, (fun config -> new FsiExe(["--nologo" ; "--quiet" ; defaultArg config ""] )), (fun fsi -> (fsi :> System.IDisposable).Dispose()), (fun fsi -> fsi.IsAlive), "")
      
          let extractConfig (code:string[]) = if code.[0].StartsWith "////-d:" then code.[0].[4..] else ""
      
          let evalFsiExe (code:string) =
              Wrap.wrapper {
                  let config = extractConfig (code.Split '\n')
                  let! resR = fsiExe.Value.Process(fun fsi -> 
                      Wrap.wrapper {
                        do! Result.tryProtection()
                        let! res = fsi.Eval code 
                        return res
                      }
                  , config)
                  let! res = resR
                  return res
              }
      
      //#define WEBSHARPER
      open WebSharper
      
      [< Rpc >]
      let evaluateAS source =
          async {
              let!    res  = Evaluator.evalFsiExe source |> Wrap.getAsyncR 
              return  res |> Result.mapMsgs (Seq.map (fun (e:ErrMsg) -> e.ErrMsg, e.IsWarning) >> Seq.toArray)
          }
          
      [< JavaScript >]
      let evaluateAR source =
          async {
              let!   vO, msgs = evaluateAS source
              return  Result (vO,  msgs |> Seq.map (fun (msg, wrn) -> ErrSimple(msg, wrn) :> ErrMsg) |> Seq.toList)
          }
          
    #if WEBSHARPER
    [<WebSharper.JavaScript>]
    #endif
    module FsStationShared =
    
      //#define FSS_SERVER
      
      #if FSS_SERVER
      open FSSGlobal.UsefulDotNet
      open FSSGlobal.UsefulDotNet.Messaging
      //#r @"Compiled\RemotingDll\RemotingDll.dll"
      //#r @"..\packages\FSharp.Data\lib\net40\FSharp.Data.dll"
      //#r @"..\packages\FSharp.Data\lib\net40\FSharp.Data.DesignTime.dll"
      #else
      
      //#r "remote.dll"
      open CIPHERPrototype.Messaging
      #endif
      open WebSharper
      open Useful
      //open UsefulFewJS
      //open UsefulFewJS.Messaging
      
      #if WEBSHARPER
      [< Inline "true" >]
      #endif          
      let inJavaScript = false
      
      let selectF fj fn =
          match inJavaScript with
          | true  -> fj
          | false -> fn
          
      #if WEBSHARPER
      let AsyncStart asy     = Async.StartWithContinuations(asy, id, (fun e -> JS.Alert(e.ToString()) ), fun c -> JS.Alert(c.ToString()))    
      [< Inline "" >]
      let awaitRequestForRpc = awaitRequestForRpc
      [< Inline "" >]
      let sendRequestRpc     = sendRequestRpc
      [< Inline "" >]
      let replyToRpc         = replyToRpc
      #else
      let AsyncStart asy = Async.Start asy
      #endif          
      
      let  AddressId = AddressId
      
      let awaitRequestForF = selectF awaitRequestFor awaitRequestForRpc
      let sendRequestF     = selectF sendRequest         sendRequestRpc
      let replyToF         = selectF replyTo                 replyToRpc
      let AsyncStartF      = selectF AsyncStart             Async.Start
      
      type MessagingClient(clientId, ?timeout, ?endPoint:string) =
          let wsEndPoint = endPoint    |> Option.defaultValue "http://localhost:9010/"
          let tout       = timeout     |> Option.defaultValue 100_000
          let fromId     = AddressId clientId
          do WebSharper.Remoting.EndPoint <- wsEndPoint 
          let awaitMessage respond =
              async {
                  while true do
                      printfn "%s awaitRequest %s" (nowStamp()) clientId
                      let! msgA  = Async.StartChild(awaitRequestForF fromId, tout)
                      try
                          let! msg   = msgA
                          let! resp  = respond clientId msg.content
                          do!          replyToF msg.messageId.Value resp
                      with 
                      | :? System.TimeoutException -> ()
                      | e                          -> printfn "%A" e
              } 
              |> AsyncStartF
          let sendMessage  toId msg = sendRequestF toId fromId msg
          let poMsg checkResponse msg =
              async {
                  let! resp = sendMessage (AddressId "WebServer:PostOffice") (Json.Serialize<POMessage> msg)
                  return checkResponse (Json.Deserialize<POResponse> resp)
              }
          let poString resp =
                      match resp with
                      | POString  v  -> v
                      | POStrings vs -> sprintf "%A" vs
          let poStrings resp =
                      match resp with
                      | POString  v  -> [| sprintf "unexpected response: %s" v |]
                      | POStrings vs -> vs
        with 
          member this.AwaitMessage respond  = awaitMessage (fun clientId request -> async { return respond clientId request })
          member this.AwaitMessage respondA = awaitMessage respondA
          member this.SendMessage toId msg  = sendMessage toId msg
          member this.POMessage        msg  = poMsg id        msg
          member this.POListeners      ()   = poMsg poStrings POListeners
          member this.EndPoint              = wsEndPoint
          member this.ClientId              = clientId
          static member EndPoint_           = "http://localhost:9010/"
          
      open Useful
      
      let snippetName name (content: string) =
          if name <> "" then name else 
          content.Split([| '\n' |], System.StringSplitOptions.RemoveEmptyEntries)
          |> Seq.map    (fun l -> l.Trim())
          |> Seq.filter (fun l -> not (l.StartsWith("#") || l.StartsWith("[<") || l.StartsWith("//")))
          |> Seq.tryHead
          |> Option.defaultValue "<empty>"
      
      let sanitize n =
          let illegal = [|'"'   ; '<'   ; '>'   ; '|'   ; '\000'; '\001'; '\002'; '\003'; '\004'; '\005'; '\006';
                          '\007'; '\b'  ; '\009'; '\010'; '\011'; '\012'; '\013'; '\014'; '\015';
                          '\016'; '\017'; '\018'; '\019'; '\020'; '\021'; '\022'; '\023'; '\024';
                          '\025'; '\026'; '\027'; '\028'; '\029'; '\030'; '\031'; ':'   ; '*'   ; '?';
                          '\\'  ; '/'|] //"
          n |> String.filter (fun c -> not <| Array.contains c illegal)
      
      type CodeSnippetId = CodeSnippetId of System.Guid   
      with static member New = CodeSnippetId <| System.Guid.NewGuid()
           member this.Text  = match this with CodeSnippetId guid -> guid.ToString()
      
      type CodeSnippet = {
          name         : string
          content      : string
          parent       : CodeSnippetId option
          predecessors : CodeSnippetId list
          id           : CodeSnippetId
          expanded     : bool
          level        : int
          properties   : System.Collections.Generic.Dictionary<string, string>
      } with
          member this.Name = snippetName this.name this.content
          member this.NameSanitized =
              this.Name
              |> sanitize
              |> (fun c -> this.id.Text + " " + c + ".fsx")
      //    member this.ContentIndented addLinePrepos =
      //        let indent        = this.level * 2
      //        let indentF, prfx = if indent = 0         then (id, "") else (Array.map    (fun (l, pr) -> String.replicate indent " " + l, pr), sprintf"(%d)" indent)
      //        let addLinePs     = if not addLinePrepos  then  id      else  Array.append [| sprintf "# 1 @\"%s%s\"" prfx this.NameSanitized |] 
      //        this.content.Split('\n') 
      //        |> addLinePs
      //        |> separatePrepros (not addLinePrepos)
      //        |> indentF
      //      , indent
      
      // tail recursion does not optimize
      let rec preds fetcher outs (ins : CodeSnippetId list) : CodeSnippetId list =
          match ins with
          | []         -> outs
          | hd :: rest -> List.collect id [ rest ; hd |> fetcher |> Option.toList |> List.collect (fun s -> s.parent |> Option.toList |> List.append <| s.predecessors) ]
                          |> preds fetcher (if outs |> Seq.contains hd then outs else hd::outs)
      
      let predsL fetcher (ins : CodeSnippetId list) : CodeSnippetId list =
          let mutable ins  = ins 
          let mutable outs = []
          while not ins.IsEmpty do
              match ins with
              | []         -> ()
              | hd :: rest -> if outs |> Seq.contains hd then
                                  ins  <- rest
                              else
                                  ins  <- List.collect id [ rest ; hd |> fetcher |> Option.toList |> List.collect (fun s -> s.parent |> Option.toList |> List.append <| s.predecessors) ]
                                  outs <- hd::outs
          outs
      
      type CodeSnippet with
          member this.UniquePredecessors (fetcher: CodeSnippetId -> CodeSnippet option) = predsL fetcher [ this.id ]        
          static member TryFindByKey  snps key = snps |> Seq.tryFind (fun snp        -> snp.id = key)
          member this.SeparateCode addLinePrepos =
              let indent        = this.level * 2
              let indentF, prfx = if indent = 0         then (id, "") else (Array.map    (fun (l, pr) -> String.replicate indent " " + l, pr), sprintf"(%d)" indent)
              let addLinePs     = if not addLinePrepos  then  id      else  Array.append [| sprintf "# 1 @\"%s%s\"" prfx this.NameSanitized |]
              let code, assembs, defines, prepIs, nowarns  =
                  this.content.Split('\n') 
                  |> addLinePs
                  |> separatePrepros (not addLinePrepos)
                  |> indentF
                  |> separateDirectives
              [| this.NameSanitized, code.Length, indent |] , code, assembs, defines, prepIs, nowarns
          static member AddSeps (lines1:(string*int*int)[], code1:string[], assembs1:string[], defines1:string[], prepIs1:string[], nowarns1:string[])
                                (lines2:(string*int*int)[], code2:string[], assembs2:string[], defines2:string[], prepIs2:string[], nowarns2:string[]) =
              Array.append lines1   lines2
            , Array.append code1    code2
            , Seq  .append assembs1 assembs2 |> Seq.distinct |> Seq.toArray
            , Seq  .append defines1 defines2 |> Seq.distinct |> Seq.toArray
            , Seq  .append prepIs1  prepIs2  |> Seq.distinct |> Seq.toArray
            , Seq  .append nowarns1 nowarns2 |> Seq.distinct |> Seq.toArray
          static member ReducedCode  addLinePrepos (snippets: CodeSnippet seq) =
              snippets
              |> Seq.map(fun snp -> snp.SeparateCode addLinePrepos)
              |> fun snps -> if snps |> Seq.isEmpty then seq [ [||],  [||],  [||],  [||],  [||],  [||] ] else snps
              |> Seq.reduce CodeSnippet.AddSeps
              |> fun (lines, code, assembs, defines, prepIs, nowarns) ->
                 (lines, code |> String.concat "\n" |> Array.singleton, assembs, defines, prepIs, nowarns)
          static member FinishCode addLinePrepos (lines:(string*int*int)[],code:string[], assembs:string[], defines:string[], prepIs:string[], nowarns:string[]) =
              let config = defines |> Seq.sort |> Seq.map ((+)"-d:") |> String.concat " "
              let part1  =
                [ if config <> "" then yield "////" + config
                  yield! prepIs  |> Seq.map (sprintf "#I @\"%s\""    )
                  yield! assembs |> Seq.map (sprintf "#r @\"%s\""    )
                  if addLinePrepos && (nowarns |> Seq.isEmpty |> not) then yield "# 1 \"required for nowarns to work\""
                  yield! nowarns |> Seq.map (sprintf "#nowarn \"%s\"")
                ]
              Seq.append part1 code |> String.concat "\n"
            , lines 
              |> Seq.mapFold (fun firstLine (name, len, ind) -> (name, (ind, firstLine, firstLine + len)), firstLine + len) part1.Length
              |> fst
              |> Seq.toArray
          static member CodeAndStarts   addLinePrepos (snippets:CodeSnippet seq) =
              CodeSnippet.ReducedCode   addLinePrepos snippets
              |> CodeSnippet.FinishCode addLinePrepos
          static member CodeFsx         addLinePrepos snps = CodeSnippet.CodeAndStarts addLinePrepos snps |> fst
      //    static member CodeMerged  addLinePrepos (snippets: CodeSnippet seq) =
      //        let bySnippet = 
      //            snippets
      //            |> Seq.map(fun snp -> 
      //                let code, indent = snp.ContentIndented addLinePrepos
      //                snp, indent, code
      //            )
      //        (bySnippet, bySnippet |> Seq.collect (function _, _, code -> code))
      //    static member CodeParts addLinePrepos snippets =
      //        let bySnippet, merged                        = CodeSnippet.CodeMerged addLinePrepos snippets
      //        let code, assembs, defines, prepIs, nowarns  = separateDirectives merged
      //        let config = defines |> Seq.distinct |> Seq.sort |> Seq.map ((+)"-d:")             |> String.concat " "
      //        [   if config <> "" then yield "////" + config
      //            yield! prepIs  |> Seq.distinct             |> Seq.map (sprintf "#I @\"%s\""    )
      //            yield! assembs |> Seq.distinct             |> Seq.map (sprintf "#r @\"%s\""    )
      //            if addLinePrepos && (nowarns |> Seq.isEmpty |> not) then yield "# 1 \"required for nowarns to work\""
      //            yield! nowarns |> Seq.distinct             |> Seq.map (sprintf "#nowarn \"%s\"")
      //        ], code, bySnippet
      //    static member CodeFsx0 addLinePrepos (cur, snippets) =
      //        let part1, part2, bySnippet = CodeSnippet.CodeParts addLinePrepos (Array.append snippets [| cur |])
      //        [ yield! part1 ; yield! part2 ] |> String.concat "\n"
      
      
      type FSMessage =
          | GetIdentification
          | GenericMessage        of string
          | GetSnippetContentById of CodeSnippetId
          | GetSnippetCodeById    of CodeSnippetId
          | GetSnippetPredsById   of CodeSnippetId
          | GetSnippetById        of CodeSnippetId
          | GetSnippetContent     of string []
          | GetSnippetCode        of string []
          | GetSnippetPreds       of string []
          | GetSnippet            of string []
          | GetSnippetJSCode      of string []
          | GetWholeFile
          | RunSnippetUrlJSById   of CodeSnippetId * string
          | RunSnippetUrlJS       of string []     * string
      
      type FSSeverity =
          | FSError
          | FSWarning
          | FSInfor
      
      type FSResponse =
          | IdResponse        of string
          | StringResponse    of string option
          | SnippetResponse   of CodeSnippet option
          | SnippetsResponse  of CodeSnippet []
          | StringResponseR   of string option * (string * FSSeverity)[]
      
      
      
      type FsStationClientErr =
          | FSMessage             of string * FSSeverity
          | ``Snippet Not Found`` of string
      with interface ErrMsg with
              member this.ErrMsg    = 
                  match this with 
                  | FSMessage (msg, sev    )   -> sprintf "%A %s" sev msg
                  | msg                        -> sprintf "%A"        msg
              member this.IsWarning =     
                  match this with 
                  | FSMessage (_  , FSError)   -> true
                  | msg                        -> false
      
      type FsStationClient(clientId, ?fsStationId:string, ?timeout, ?endPoint) =
          let fsIds      = fsStationId |> Option.defaultValue "FSharpStation1508994284112"
          let msgClient  = MessagingClient(clientId, ?timeout= timeout, ?endPoint= endPoint)
          let toId       = AddressId fsIds
          let stringResponseR response =
              match response with
              | StringResponseR (Some code, msgs) -> Result.succeedWithMsgs code (msgs |> Seq.map (fun v -> FSMessage v :> ErrMsg) |> Seq.toList)
              | _                                 -> Result.fail    (``Snippet Not Found`` <| response.ToString()) 
          let stringResponse  response =
              match response with
              | StringResponse (Some code)    -> Result.succeed code
              | _                             -> Result.fail    (``Snippet Not Found`` <| response.ToString()) 
          let snippetsResponse response =
              match response with
              | SnippetsResponse snps         -> Result.succeed snps
              | _                             -> Result.fail    (``Snippet Not Found`` <| response.ToString()) 
          let snippetResponse response =
              match response with
              | SnippetResponse  snp          -> Result.succeed snp
              | _                             -> Result.fail    (``Snippet Not Found`` <| response.ToString()) 
          [< Inline >]
          let sendMsg toId (msg: FSMessage) (checkResponse: FSResponse -> Result<'a>) =
              Wrap.wrapper {
                  let!   response = msgClient.SendMessage toId (msg |> Json.Serialize)
                  let!   resp     = checkResponse (Json.Deserialize<FSResponse> response)
                  return resp
              } 
        with 
          member this.SendMessage     (toId2,  msg:FSMessage) = sendMsg toId2  msg    Result.succeed   
          member this.SendMessage     (        msg:FSMessage) = sendMsg toId   msg    Result.succeed   
          member this.RequestSnippet  (    snpPath:string   ) = sendMsg toId  (GetSnippet          (snpPath.Split '/'     ))    snippetResponse  
          member this.RequestCode     (    snpPath:string   ) = sendMsg toId  (GetSnippetCode      (snpPath.Split '/'     ))    stringResponse   
          member this.RequestJSCode   (    snpPath:string   ) = sendMsg toId  (GetSnippetJSCode    (snpPath.Split '/'     ))    stringResponseR  
          member this.RequestPreds    (    snpPath:string   ) = sendMsg toId  (GetSnippetPreds     (snpPath.Split '/'     ))    snippetsResponse 
          member this.RequestPredsById(      snpId          ) = sendMsg toId  (GetSnippetPredsById  snpId                  )    snippetsResponse 
          member this.RequestWholeFile(                     ) = sendMsg toId   GetWholeFile                                     stringResponse   
          member this.GenericMessage  (        txt:string   ) = sendMsg toId  (GenericMessage       txt                    )    stringResponse   
          member this.RunSnippet      (url,snpPath:string   ) = sendMsg toId  (RunSnippetUrlJS     (snpPath.Split '/', url))    stringResponseR
          member this.FSStationId                             = fsIds
          member this.MessagingClient                         = msgClient    
          static member FSStationId_                          = "FSharpStation1508994284112"
      
      
    module FsTranslator =
      module TranslatorCaller =
          open Useful
          open UsefulDotNet
          open CompOptionsModule
          open System
          open System.IO
          open System.Diagnostics
          
          type TranslatorExe(config) =
              let startInfo                 = ProcessStartInfo(@"Compiled\FsTranslator\FsTranslator.exe", config |> String.concat " ")             
              let shell                     = new ShellEx(startInfo)  // --noninteractive
              let endToken                  = sprintf "//---------------%s-----------------" "EOF"
              do  startInfo.CreateNoWindow <- false
                  shell.Start() |> ignore
              member this.Translate txt =
                  Wrap.wrapper {
                      do! Result.tryProtection()
                      let! res1 = shell.SendAndWait(txt, endToken, true)
                      let! res2 = if res1.EndsWith "//success" then Result.succeed res1 else Result.fail (ErrSimple ("Translator Failed", false))
                      return res2
                  }
              member this.IsAlive = not shell.HasExited
              interface System.IDisposable with
                  member this.Dispose () = 
                      (shell :> System.IDisposable).Dispose()    
      
          let translator = lazy new ResourceAgent<_, string> (20, (fun config -> new TranslatorExe(["++loop"; defaultArg config ""] )), (fun exe -> (exe :> System.IDisposable).Dispose()), (fun exe -> exe.IsAlive), "")
          
          let extractConfig (code:string[]) = if code.[0].StartsWith "////-d:" then code.[0].[4..] else ""
      
          let getJSW (minified:bool) (options0 : (CompOption * CompOptionValue) seq) (fsCode:string) =
              Wrap.wrapper {
                  do!  Result.tryProtection()
                  let  code           = fsCode.Split '\n'
                  let  defines0       = (extractConfig code).Split([| " " ; "-d:" |], StringSplitOptions.RemoveEmptyEntries) 
                  let  fs, assembs, defines1, prepIs, nowarns = separatePrepros false code |> separateDirectives
                  let  defines        = Array.append defines0 defines1
                  let  codeBase       = Path.GetFullPath "bin"
                  let  name           = "Temp_" + Path.GetFileNameWithoutExtension(Path.GetRandomFileName())
                  let  options1       = compileOptionsDll name
                                        + opDirectory   /= Path.GetDirectoryName(codeBase)
                                        + opGenWSharper /= "project:FSharpStation"
                                       // + opIOption   /= @"D:\Abe\CIPHERWorkspace\CIPHERPrototype\WebServer\bin"
                                        + options0
                  let  options2       = prepOptions options1 (fs, assembs, defines, prepIs, nowarns)
                  use  toErase        = new TempFileName(options2?Source)
                  let  ops            = options2.Get CompOptions.WSharperOptions
                                        |> Seq.append [ "IGNORED" ]
                                        |> Seq.map (sprintf "%A")
                                        |> String.concat " "
                  let! jsR            = translator.Value.Process (fun tra -> tra.Translate ops)
                  let! js             = jsR
                  return js
              }
      
      
      
      open Useful
      open WebSharper
      
      [< Rpc >]
      let translateAS source minified = 
          async {
              let!    res  = TranslatorCaller.getJSW minified [] source |> Wrap.getAsyncR
              return  res |> Result.mapMsgs (Seq.map (fun (e:ErrMsg) -> e.ErrMsg, e.IsWarning) >> Seq.toArray)
          }
          
      [< JavaScript >]
      let translateAR source minified = 
          async {
              let!   vO, msgs = translateAS source minified
              return  Result (vO,  msgs |> Seq.map (fun (msg, wrn) -> ErrSimple(msg, wrn) :> ErrMsg) |> Seq.toList)
          }
          
    module FSAutoCompleteIntermediary =
    
      //#r @"..\packages\FSharp.Data\lib\net40\FSharp.Data.dll"
      //#r @"..\packages\FSharp.Data\lib\net40\FSharp.Data.DesignTime.dll"
      //#r @"..\packages\NewtonSoft.JSon\lib\net45\NewtonSoft.JSon.dll"
      
      open System.Net
      open System.Text
      open System.IO
      open FSharp.Data
      open FSharp.Data.JsonExtensions
      open Useful
      open Useful.Result
      open Newtonsoft.Json
      
      open Utils
      
      #if WEBSHARPER
      [<WebSharper.JavaScript>]
      #endif
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
              Comment: string
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
              FileName: string
              StartLine:int
              EndLine:int
              StartColumn:int
              EndColumn:int
             // Severity:FSharpErrorSeverity
              Message:string
              Subcategory:string
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
          
          type ACMessage =
          | ACMIdentification
          | ACMEcho             of string
          | ACMToolTip          of string * int * int
          | ACMToolTip2         of string * int * int *  string
          | ACMSignature        of string * int * int
          | ACMSignature2       of string * int * int *  string
          | ACMFindDeclaration  of string * int * int
          | ACMFindDeclaration2 of string * int * int *  string
          | ACMComplete         of string * int * int *  string
          | ACMComplete2        of string * int * int *  string *  string
          | ACMParse            of string * string    * (string * (int * int * int)) []
          | ACMMustParse        of string * string
      
      open CommTypes
      
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
      with
        member this.Json =
          match this with 
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
      
      let UrlAddress = "http://localhost:9001/"
      
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
              
              // Obtain response and download the resulting page 
              // (The sample contains the first & last name from POST data)
              use resp   = req.GetResponse() 
              use stream = resp.GetResponseStream() 
              use reader = new StreamReader(stream)
              let msg    = reader.ReadToEnd()
              printfn "\n----> \n%s\n" (extract 100 msg)
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
          | "signatureData"    -> jsonData2Obj item |> KSignatureData
          | "finddecl"         -> jsonData2Obj item |> KFindDecl
          | "compilerlocation" -> jsonData2Obj item |> KCompilerLocation
          | _                  -> KindError <| v.ToString()
      
      let FSAutocompleteCall cmd f (req: FARequest) =
          Wrap.wrapper {
              let  data         = req.Json
              let! jsonV        = HttpRequestCall (UrlAddress + cmd) data
              let  several      = jsonV.AsArray() |> Array.map json2Kind
              let  good, others = several |> Array.partition f
              let  msgs         = others  |> Seq.map (fun v -> (v.ToString(), match v with | KInfo _ -> true | _ -> false) |> ErrSimple :> ErrMsg) |> Seq.toList
              let! result       = Result (Seq.tryHead good, msgs) 
              return result
          } 
      
      let parseCode file code =
          Wrap.wrapper {
              let!  result = FSAutocompleteCall "parse" (function | KErrors _ -> true | _ -> false) <|
                                   FarParse
                                       { FileName   = System.IO.Path.GetFullPath file
                                         IsAsync    = false   
                                         Lines      = code           
                                         Version    = 0
                                       }
              return result
          } 
      
      let toolTip file lin col filter =
          Wrap.wrapper {
              let!  result = FSAutocompleteCall "tooltip" (function | KToolTip _ -> true | _ -> false) <|
                                   FarPosition
                                       { FileName   = System.IO.Path.GetFullPath file
                                         Line       = lin         
                                         Column     = col
                                         Filter     = filter
                                       }
              return result
          } 
      
      let signature file lin col filter =
          Wrap.wrapper {
              let!  result = FSAutocompleteCall "signatureData" (function | KSignatureData _ -> true | _ -> false) <|
                                   FarPosition
                                       { FileName   = System.IO.Path.GetFullPath file
                                         Line       = lin         
                                         Column     = col
                                         Filter     = filter
                                       }
              return result
          } 
      
      let completion file lin col lineText filter =
          Wrap.wrapper {
              let!  result = FSAutocompleteCall "completion" (function | KCompletion _ -> true | _ -> false) <|
                                   FarCompletion
                                       { FileName        = System.IO.Path.GetFullPath file
                                         Line            = lin         
                                         Column          = col
                                         Filter          = filter
                                         SourceLine      = lineText 
                                         IncludeKeywords = false                                     
                                       }
              return result
          } 
      
      type FsAutoCompleteErr =
          | ``Code has not been parsed, use Parse F#``
          | ``This snippet has not been previosuly parsed, use Parse F#``
          | ``Cached typecheck results not yet available``
          | ``Error FileCheckerOptions`` of string
      with interface ErrMsg with
              member this.ErrMsg    = match this with | msg -> sprintf "%A" msg
              member this.IsWarning = false    
              
      /// this converts from Result to Rop.Result
      let fromResult' f = 
          function 
          | Failure s  -> Result.fail <| f s
          | Success v  -> Result.succeed v
      
      type Responder2() =
          //let commands = Commands()
          let starts : Map<string, Map<string, int * int * int>> ref = ref Map.empty
          
          let getDelta fname snpIdO =
              Wrap.wrapper {
                  do!  Result.tryProtection()
                  let  file = System.IO.Path.GetFullPath fname
                  match snpIdO with
                  | Some snpId -> let! fileMap          = (!starts) |> Map.tryFind file         |> Result.fromOption ``Code has not been parsed, use Parse F#``
                                  let! ind, first, last = fileMap   |> Map.tryFind snpIdO.Value |> Result.fromOption ``This snippet has not been previosuly parsed, use Parse F#``
                                  return file, first, ind
                  | None       -> return file, 0    , 0 
              }
          let getDeltaBack fname line =
              Wrap.wrapper {
                  do!  Result.tryProtection()
                  let  file             = System.IO.Path.GetFullPath fname
                  let! fileMap          = (!starts) |> Map.tryFind file |> Result.fromOption ``Code has not been parsed, use Parse F#``
                  let! snp, first, ind  = fileMap 
                                          |> Seq.map     (fun kv -> kv.Key, kv.Value) 
                                          |> Seq.tryPick (fun (snp, (ind, first, last)) -> if line >= first && line < last then Some (snp, first, ind) else None) 
                                          |> Result.fromOption ``This snippet has not been previosuly parsed, use Parse F#``
                  return snp, first, ind                        
              }
          let mustParse fname snpId =
              getDelta fname (Some snpId)
              |> Wrap.map              (fun _ -> false)
              |> Wrap.RunSynchronously 
              |> Result.withError      (fun _ -> true )
      
          let findDeclaration file lin col filter =
              Wrap.wrapper {
                  File.WriteAllText(file, " ")
                  let!  result = FSAutocompleteCall "finddeclaration" (function | KFindDecl _ -> true | _ -> false) <|
                                       FarPosition
                                           { FileName   = System.IO.Path.GetFullPath file
                                             Line       = lin         
                                             Column     = col
                                             Filter     = filter
                                           }
                  File.Delete file                         
                  match result with
                  | KFindDecl decl -> let! snp, dln, dcol = getDeltaBack decl.File decl.Line
                                      let resultAdj = 
                                       {  File    = snp
                                          Line    = decl.Line   - dln
                                          Column  = decl.Column - dcol
                                       } |> KFindDecl
                                      return resultAdj
                  | _              -> return result
              } 
      
          let getPosition (getKind: string -> int -> int -> string -> Wrap<Kind>) fname ln col (snpIdO:string option) =
              Wrap.wrapper {
                  let! file, dln, dcol = getDelta fname snpIdO
                  let! res             = getKind fname (ln + dln) (col + dcol) ""
                  return res
              } 
              |> Wrap.RunSynchronously
              |> Result.withError (Result.getMessages >> KindError)
      
          let getCompletion fname ln col lineText (snpIdO:string option) =
              Wrap.wrapper {
                  let! file, dln, dcol = getDelta fname snpIdO
                  let! res             = completion fname (ln + dln) (col + dcol) ((String.replicate dcol " ") + lineText) "Contains"
                  return res
              } 
              |> Wrap.RunSynchronously
              |> Result.withError (Result.getMessages >> KindError)
              
          member this.Respond (msg:ACMessage) =
              match msg with
              | ACMIdentification              -> KInfo "FSAutoCompleteIntermedirary"
              | ACMEcho   txt                  -> KInfo txt 
              | ACMMustParse(fname, snpId    ) -> mustParse fname snpId |> sprintf "%b" |> KInfo
              | ACMParse    (fname, code, sts) ->
                  async {
                      let  file = System.IO.Path.GetFullPath (fname)
                      do   starts := !starts |> Map.add file (Map sts)
                      //printfn "\n%A\n" sts
                      let! errors = parseCode file (code.Split '\n') |> Wrap.getAsync
                      let  fixedErrors =
                          match errors with
                          | KErrors ers -> 
                                KErrors { ers with 
                                            Errors = ers.Errors 
                                              |> Array.map (fun err ->
                                                sts 
                                                |> Array.tryFind (fun (snpNm, (ind, first, last)) -> err.StartLine >= first && err.StartLine < last)
                                                |> Option.map    (fun (snpNm, (ind, first, last)) -> 
                                                    { err with FileName    = snpNm
                                                               StartLine   = err.StartLine   - first
                                                               EndLine     = err.EndLine     - first
                                                               StartColumn = err.StartColumn - ind
                                                               EndColumn   = err.EndColumn   - ind   }) 
                                                |> Option.defaultValue err)
                                        } 
                          | _ -> errors
                      return fixedErrors 
                  }
                  |> Async.RunSynchronously
              | ACMToolTip         (fname, ln, col)             -> getPosition   toolTip         fname ln col None
              | ACMToolTip2        (fname, ln, col,      snpId) -> getPosition   toolTip         fname ln col (Some snpId)
              | ACMSignature       (fname, ln, col)             -> getPosition   signature       fname ln col None
              | ACMSignature2      (fname, ln, col,      snpId) -> getPosition   signature       fname ln col (Some snpId)
              | ACMFindDeclaration (fname, ln, col)             -> getPosition   findDeclaration fname ln col None
              | ACMFindDeclaration2(fname, ln, col,      snpId) -> getPosition   findDeclaration fname ln col (Some snpId)
              | ACMComplete        (fname, ln, col, txt)        -> getCompletion                 fname ln col txt None
              | ACMComplete2       (fname, ln, col, txt, snpId) -> getCompletion                 fname ln col txt (Some snpId)
      
      
      open Useful
      open FsStationShared
      open WebSharper
      open WebSharper.Remoting
      
      #if FSS_SERVER
      
      let responder = Responder2()
      
      [< Rpc >]
      let sendMessageRpc msg = async { return responder.Respond msg }
      
      [< JavaScript >]
      let sendMessage  (msg:ACMessage) : Async<Kind> = 
          async {
              let!   res = sendMessageRpc (msg |> box |> unbox)
              return res                       |> box |> unbox
          }
      #endif
      
      #if WEBSHARPER
      [< JavaScript >]
      #endif
      type FSAutoCompleteIntermediaryClient(clientId, ?endPoint:string) =
           #if FSS_SERVER
           #else
           let msgClient = MessagingClient(clientId, ?endPoint = endPoint)
           let toId      = AddressId "FSAutoComplete"
           let sendMessage (msg:ACMessage) =
               Wrap.wrapper {
                   let! resp = msgClient.SendMessage toId (Json.Serialize msg)
                   let  acr  = resp |> Json.Deserialize<CommandResponse.Kind>
                   return acr
               } |> Wrap.getAsyncWithDefault (Result.getMessages >> CommandResponse.KError)
           #endif
           let Async_map f aa = 
               async { 
                   let! a = aa
                   return f a
               }
           let rec comp2Strings comp =
               match comp with 
               | KCompletion cs -> cs |> Array.map (fun cs -> cs.Name, cs.ReplacementText, cs.Glyph, cs.GlyphChar)
               | KHelpText   _  -> [||]
               | KMultiple   ks -> ks |> Array.collect comp2Strings 
               | m              -> [| sprintf "%A" m, "", "ErrorMsg", "E" |] 
           let tip2String tip =
               match tip with 
               | KToolTip ts -> ts |> Seq.collect id |> Seq.collect (fun t -> [ t.Signature ; t.Comment ] ) |> String.concat "\n"
               | m           -> sprintf "%A" m 
           let errors2String errs =
               match errs with 
               | KErrors  es -> 
                   es.Errors 
                   |> Seq.map (fun er -> sprintf "ErrFSharp \"F# %s.fsx (%d,%d) - (%d,%d) %s:%s\"" 
                                            er.FileName er.StartLine er.StartColumn er.EndLine er.EndColumn er.Subcategory er.Message) 
                   |> String.concat "\n"
               | m           -> sprintf "%A" m 
           let info2Bool inf =
               match inf with
               | KInfo "true" -> true
               | _            -> false
              
         with
           member this.MustParse(fname,                 sId) = sendMessage (ACMMustParse       (fname,                  sId)) |> Async_map info2Bool
           member this.Parse    (fname, txt , sts          ) = sendMessage (ACMParse           (fname, txt , sts           )) |> Async_map errors2String
           member this.Parse    (fname, txt                ) = sendMessage (ACMParse           (fname, txt , [||]          )) |> Async_map errors2String
           member this.ToolTip  (fname, line, col          ) = sendMessage (ACMToolTip         (fname, line, col           )) |> Async_map tip2String
           member this.ToolTip  (fname, line, col,      sId) = sendMessage (ACMToolTip2        (fname, line, col ,      sId)) |> Async_map tip2String
           member this.Complete (fname, txt, line, col     ) = sendMessage (ACMComplete        (fname, line, col , txt     )) |> Async_map comp2Strings
           member this.Complete (fname, txt, line, col, sId) = sendMessage (ACMComplete2       (fname, line, col , txt, sId)) |> Async_map comp2Strings
           member this.FindDecl (fname, line, col          ) = sendMessage (ACMFindDeclaration (fname, line, col           )) |> Async_map id
           member this.FindDecl (fname, line, col,      sId) = sendMessage (ACMFindDeclaration2(fname, line, col ,      sId)) |> Async_map id
      
  //#define WEBSHARPER
  (*
   Code to be Compiled to Javascript and run in the browser
   using `Compile WebSharper` or `Run WebSharper`
  *)
  
    
    [<JavaScript>]
    module HtmlNode      =
    
      [<NoComparison>]
      type Val<'a> =
          | Constant  of 'a
          | DynamicV  of IRef<'a>
          | Dynamic   of View<'a>
        with member this.FooBar = 0
      
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
                  | Dynamic  wa -> wa     |> View.Map tag |> Doc.EmbedView
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
              | _                       -> failwith <| sprintf "Could not convert %A" o
      
          [< Direct "$f($v)" >]
          let inline fixitF f v = HelperType &> v
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
          
          let inline toDoc       v           = toView      (fixit v ) |> Doc.EmbedView
          let [<Inline>] inline bindIRef f  v           = bindIRef0 f (fixit v   |> toView)
          let inline iter     f  v           = iterV     f (fixit v )
          let inline bind     f  v           = bindV     f (fixit v )
          let inline map      f  v           = mapV      f (fixit v )
          let inline map2     f  v1 v2       = map2V     f (fixit v1) (fixit v2)
          let inline map3     f  v1 v2 v3    = map3V     f (fixit v1) (fixit v2) (fixit v3)
          let inline map4     f  v1 v2 v3 v4 = map4V     f (fixit v1) (fixit v2) (fixit v3) (fixit v4)
          let inline sink     f  v           = fixit v |> toView |> View.Sink f
      
          let inline iter2    f  v1 v2       = map2      f v1 v2       |> iterV id
          let inline iter3    f  v1 v2 v3    = map3      f v1 v2 v3    |> iterV id
          let inline iter4    f  v1 v2 v3 v4 = map4      f v1 v2 v3 v4 |> iterV id
      
          let inline mapAsync f  v           = View.MapAsync f (fixit v |> toView) 
      
      
      [<NoComparison ; NoEquality>]
      type HtmlNode =
          | HtmlElement    of name: string * children: HtmlNode seq
          | HtmlAttribute  of name: string * value:    Val<string>
          | HtmlAttributeO of name: string * value:    Val<string option>
          | HtmlText       of Val<string>
          | HtmlEmpty
          | HtmlElementV   of Val<HtmlNode>
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
          | HtmlText     vtext           -> Some <| Val.tagDoc WebSharper.UI.Next.Html.text vtext
          | SomeDoc      doc             -> Some <| doc
          | HtmlElementV vnode           -> Some <| (vnode |> Val.toView |> Doc.BindView (chooseNode >> Option.defaultValue Doc.Empty))
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
      let inline htmlAttribute  name v  = HtmlAttribute (name, Val.fixit v  )
      let inline htmlAttributeO name v  = HtmlAttributeO(name, Val.fixit v  )
      let inline htmlText       txt     = HtmlText      (      Val.fixit txt)
      let inline someElt        elt     = SomeDoc       (elt :> Doc         )    
        
      let inline addChildren    add (h:HtmlNode) = h |> mapHtmlElement (fun n ch -> n, Seq.append ch   add)
      let inline insertChildren add (h:HtmlNode) = h |> mapHtmlElement (fun n ch -> n, Seq.append add  ch )
      let inline addClass       c    h           = h |> addChildren [ htmlAttribute  "class" c ] 
      let inline addClassIf     c v              = addClass <| Val.map (fun b -> if b then c else "") (Val.fixit v)
      
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
      
      let renderDoc = chooseNode >> Option.defaultValue Doc.Empty
          
      let inline atr att v = Val.attrV  att (Val.fixit v)
      let inline tag tag v = Val.tagDoc tag (Val.fixit v)
      
      let inline _class       v = atr "class"       v
      let inline _type        v = atr "type"        v
      let inline _style       v = atr "style"       v
      let inline _placeholder v = atr "placeholder" v
      let inline textV        v = tag  Html.text    v
      
      let inline a           ch = htmlElement   "a"           ch
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
      let isUndefined v = true
      
      let  findRootElement (e:Dom.Element) =
          let root = e.GetRootNode()
          if isUndefined root?body 
          then root.FirstChild :?> Dom.Element
          else root?body  |> unbox<Dom.Element>
      
      [< Inline >]
      let inline storeVar<'T> storeName (var:IRef<_>) =
          JS.Window.LocalStorage.GetItem storeName |> fun v -> if v <> null then           var.Value <- Json.Deserialize<'T> v
          Val.sink (fun v -> JS.Window.LocalStorage.SetItem (storeName, Json.Serialize v)) var
      
      
      [< Inline "CIPHERSpaceLoadFiles($files, $cb)" >]
      let LoadFiles (files: string []) (cb: unit -> unit) : unit = X<_>
    open HtmlNode
    [<JavaScript>]
    module Template      =
      [<NoComparison ; NoEquality>]
      type Button = {
          _class  : Val<string>
          _type   : Val<string>
          style   : Val<string>
          text    : Val<string>
          onClick : Dom.Element -> Dom.MouseEvent -> unit
          disabled: Val<bool>
          id      : string
      } with
        static member inline New txt = 
            { _class   = Val.fixit "btn" 
              _type    = Val.fixit "button" 
              style    = Val.fixit ""
              text     = Val.fixit txt
              onClick  = fun _ _ -> ()
              disabled = Val.fixit false
              id       = ""
            }
        member        this.Render     =         
          button [ ``type``  <| this._type
                   ``class`` <| this._class
                   Id        <| this.id  
                   style     <| this.style
                   SomeAttr  <| attr.disabledDynPred (View.Const "") (this.disabled |> Val.toView)
                   SomeAttr  <| on.click <@ this.onClick @>
                   HtmlText  <| this.text 
                 ]
        member inline this.Id          id   = { this with id       = id             }
        member inline this.Class       clas = { this with _class   = Val.fixit clas }
        member inline this.Type        typ  = { this with _type    = Val.fixit typ  }
        member inline this.Style       sty  = { this with style    = Val.fixit sty  }
        member inline this.Text        txt  = { this with text     = Val.fixit txt  }
        member inline this.Disabled    dis  = { this with disabled = Val.fixit dis  }
        member inline this.OnClick     f    = { this with onClick  = f              }
      [<NoComparison ; NoEquality>]
      type Input = {
          _type       : Val<string>
          _class      : Val<string>
          style       : Val<string>
          placeholder : Val<string>
          id          : string
          var         : IRef<string>
          prefix      : HtmlNode
          suffix      : HtmlNode
          content     : Attr seq
          prefixAdded : bool
          suffixAdded : bool
      } with
        static member  New(var) = { _class      = Val.fixit "form-control" 
                                    _type       = Val.fixit "text" 
                                    style       = Val.fixit "" 
                                    placeholder = Val.fixit "Enter text:"
                                    id          = ""
                                    content     = []
                                    prefix      = HtmlEmpty
                                    prefixAdded = false
                                    suffix      = HtmlEmpty
                                    suffixAdded = false
                                    var         = var   
                                  }
        static member  New(v)   = Input.New(Var.Create v)
        member        this.Render    =         
          let groupClass det = match det with HtmlText _  -> "input-group-addon" | _ -> "input-group-btn"
          div [
              if this.prefixAdded || this.suffixAdded then
                  yield ``class`` "input-group"
              if this.prefixAdded then
                  yield  span     [ ``class`` <| groupClass this.prefix 
                                    this.prefix       ]
              yield Doc.Input ([_type            this._type
                                _class           this._class
                                _style           this.style
                                attr.id          this.id  
                                _placeholder     this.placeholder ] |> Seq.append this.content)
                                this.var
                    :> Doc |> SomeDoc
              if this.suffixAdded then
                  yield  span     [ ``class`` <| groupClass this.suffix 
                                    this.suffix       ]
            ]
        member inline this.Class       clas = { this with _class      = Val.fixit clas                  }
        member inline this.Type        typ  = { this with _type       = Val.fixit typ                   }
        member inline this.Style       sty  = { this with style       = Val.fixit sty                   }
        member inline this.Placeholder plc  = { this with placeholder = Val.fixit plc                   }
        member inline this.Id          id   = { this with id          =       id                        }
        member inline this.Content     c    = { this with content     =       c                         }
        member inline this.Prefix      p    = { this with prefix      =       p    ; prefixAdded = true }
        member inline this.Suffix      s    = { this with suffix      =       s    ; suffixAdded = true }
        member inline this.SetVar      v    = { this with var         = v                               }
        member inline this.Var              = this.var
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
      
      [<NoComparison ; NoEquality>]
      type TextArea = {
          _class      : Val<string>
          placeholder : Val<string>
          title       : Val<string>
          spellcheck  : Val<bool>
          id          : string
          var         : IRef<string>
      } with
        static member  New(var) = { _class      = Val.fixit "form-control"
                                    placeholder = Val.fixit "Enter text:"
                                    title       = Val.fixit ""
                                    spellcheck  = Val.fixit false
                                    id          = ""
                                    var         = var 
                                  }
        static member  New(v)   = TextArea.New(Var.Create v)
        member        this.RenderWith  more  =    
          Doc.InputArea
              ([ 
                _class              this._class
                attr.id             this.id  
                atr "spellcheck" <| Val.map (fun spl -> if spl then "true" else "false") this.spellcheck
                atr "title"         this.title
                atr "style"        "height: 100%;  width: 100%; box-sizing: border-box; "
                _placeholder        this.placeholder 
              ] @ more)
              this.var
          |> someElt 
          |> Seq.singleton 
          //|> Seq.append [ style "height: 100%;  width: 100%; box-sizing: border-box; " ] 
          |> div
        member        this.Render           = this.RenderWith []    
        member inline this.Class       clas = { this with _class      = Val.fixit clas }
        member inline this.Placeholder plc  = { this with placeholder = Val.fixit plc  }
        member inline this.Title       ttl  = { this with title       = Val.fixit ttl  }
        member inline this.Spellcheck  spl  = { this with spellcheck  = spl            }
        member inline this.Id          id   = { this with id          = id             }
        member inline this.SetVar      v    = { this with var         = v              }
        member inline this.Var              = this.var
        
      let codeMirrorIncludes =
         [| "/EPFileX/codemirror/scripts/codemirror/codemirror.js"             
            "/EPFileX/codemirror/scripts/intellisense.js"                      
            "/EPFileX/codemirror/scripts/codemirror/codemirror-intellisense.js"
            "/EPFileX/codemirror/scripts/codemirror/codemirror-compiler.js"    
            "/EPFileX/codemirror/scripts/codemirror/mode/fsharp.js"            
            "/EPFileX/codemirror/scripts/addon/search/searchcursor.js"          
            "/EPFileX/codemirror/scripts/addon/search/search.js"          
            "/EPFileX/codemirror/scripts/addon/search/jump-to-line.js"          
            "/EPFileX/codemirror/scripts/addon/dialog/dialog.js"          
            "/EPFileX/codemirror/scripts/addon/edit/matchbrackets.js"          
            "/EPFileX/codemirror/scripts/addon/selection/active-line.js"       
            "/EPFileX/codemirror/scripts/addon/display/fullscreen.js"          
            "/EPFileX/codemirror/scripts/addon/hint/show-hint.js"          
            "/EPFileX/codemirror/scripts/addon/lint/lint.js"          
      //      "/EPFileX/codemirror/scripts/codemirror/mode/markdown.js"                 
         |]
      type CodeMirrorPos = { line: int ; ch  : int }
      let inline cmPos(l, c) = { line = l ; ch  = c }
      
      type CodeMirrorEditor() =
          let a = 1
        with
          [< Inline "CodeMirror($elt, {
      	    theme        : 'rubyblue'
      	  , lineNumbers  : true
      	  , matchBrackets: true
            , gutters      : ['CodeMirror-lint-markers']
            , extraKeys    : {
      		    Tab  : function (cm) { cm.replaceSelection('    ', 'end'); }
      		  , 'F11': function (cm) { cm.setOption('fullScreen', !cm.getOption('fullScreen')); }
              }
      })"    >]
      //    [< Inline "setupEditor($elt)" >]
          static member SetupEditor elt                                     : CodeMirrorEditor = X<_>
          [< Inline "$this.getValue()"              >]      
          member this.GetValue()                                            : string           = X<_>
          [< Inline "$this.setValue($v)"            >]      
          member this.SetValue(v:string)                                    : unit             = X<_>
          [< Inline "$this.setOption($o, $v)"       >]      
          member this.SetOption(o:string, v:obj)                            : unit             = X<_>
          [< Inline "$this.getCursor()"             >]      
          member this.GetCursor()                                           : CodeMirrorPos    = X<_>
          [< Inline "$this.setCursor($line, $col)"  >]      
          member this.SetCursor(line:int, col:int)                          : unit             = X<_>
          [< Inline "$this.focus()"                 >]      
          member this.Focus()                                               : unit             = X<_>
          [< Inline "$this.getLine($l)"             >]      
          member this.GetLine(l:int)                                        : string           = X<_>
          [< Inline "$this.getDoc().markText({line:$fl, ch:$fc}, {line:$tl, ch:$tc}, {className: $className, title: $title})" >]
          member this.MarkText (fl:int, fc:int) (tl:int, tc:int) (className: string) (title: string): unit       = X<_>
          [< Inline "while($this.getAllMarks().length > 0) { $this.getAllMarks()[0].clear() }" >]
          member this.RemoveMarks() : unit       = X<_>
          [< Inline "$this.getDoc().clearHistory()" >]
          member this.ClearHistory()                                        : unit             = X<_>
          [< Inline "$this.on($event, $f)"          >]
          member this.On(event: string, f:(CodeMirrorEditor * obj) -> unit) : unit             = X<_>
          [< Inline "$this.addKeyMap($keyMap)"      >]
          member this.AddKeyMap(keyMap: obj)                                : unit              = X<_>
          [< Inline "$this.getWrapperElement()"     >]
          member this.GetWrapperElement()                                   : Dom.Element       = X<_>
      
      [<NoComparison ; NoEquality>]
      type CodeMirror = {
          _class          : Val<string>
          style           : Val<string>
          id              : string
          var             : IRef<string>
          onChange        : (unit             -> unit)
          onRender        : (CodeMirrorEditor -> unit) option
          mutable editorO : CodeMirrorEditor option
      } with
      
        static member  New(var) = 
            { _class   = Val.fixit "" 
              style    = Val.fixit "" 
              id       = ""
              var      = var 
              onChange = ignore
              onRender = None
              editorO  = None
            }
        static member  New(v)   = CodeMirror.New(Var.Create v)
        member        this.Render    =
          div [ 
                ``class``            this._class
                SomeAttr <| attr.id  this.id 
                style "position: relative; height: 300px"
                style                this.style
                div [
                      style "height: 100%; width: 100%; position: absolute;"
                      SomeAttr <| on.afterRender (fun el ->
                        LoadFiles codeMirrorIncludes
                          (fun () ->                       
                             let editor = CodeMirrorEditor.SetupEditor el
                             this.editorO <- Some editor
                             this.onRender |> Option.iter (fun onrender -> onrender editor)
                             let editorChanged = ref 0L
                             let varChanged    = ref 0L
                             editor.On("changes", fun (cm, change) ->
                                 let v = editor.GetValue() 
                                 if this.var.Value <> v then editorChanged := !editorChanged + 1L; this.var.Value <- v; this.onChange() 
                             )
                             this.var.View |> View.Sink (fun _ ->
                                 if  !editorChanged      > !varChanged    then varChanged := !editorChanged
                                 elif editor.GetValue() <> this.var.Value then editor.SetValue this.var.Value ; editor.ClearHistory()
                             )
                          )
                      )    
                    ]
                link [ href "/EPFileX/codemirror/content/editor.css"                   ; ``type`` "text/css" ; rel "stylesheet" ]
                link [ href "/EPFileX/codemirror/content/codemirror.css"               ; ``type`` "text/css" ; rel "stylesheet" ]
                link [ href "/EPFileX/codemirror/content/theme/rubyblue.css"           ; ``type`` "text/css" ; rel "stylesheet" ]
                link [ href "/EPFileX/codemirror/scripts/addon/display/fullscreen.css" ; ``type`` "text/css" ; rel "stylesheet" ]
                link [ href "/EPFileX/codemirror/scripts/addon/dialog/dialog.css"      ; ``type`` "text/css" ; rel "stylesheet" ]
                link [ href "/EPFileX/codemirror/scripts/addon/hint/show-hint.css"     ; ``type`` "text/css" ; rel "stylesheet" ]
                link [ href "/EPFileX/codemirror/scripts/addon/lint/lint.css"          ; ``type`` "text/css" ; rel "stylesheet" ]
                css  ".CodeMirror { height: 100% }"
           ]
        member inline this.Class    clas = { this with _class    = Val.fixit clas }
        member inline this.Id       id   = { this with id        =       id       }
        member inline this.SetVar   v    = { this with var       = v              }
        member inline this.Style    sty  = { this with style     = Val.fixit sty  }
        member inline this.OnChange f    = { this with onChange  = f              }
        member inline this.OnRender f    = { this with onRender  = Some f         }
        member inline this.Var           = this.var
      
      
      type Hint = {
          text        : string
          displayText : string
          className   : string
      }
      
      type HintResponse  = {
          list           : Hint []
          from           : CodeMirrorPos   
          ``to``         : CodeMirrorPos   
      }
      
      type HintFunc      = FuncWithArgs<CodeMirrorEditor * (HintResponse -> unit) * obj,  unit>
      
      type HintOptions   = {
          hint           : HintFunc
          completeSingle : bool   
          container      : Dom.Element
      }
      
      [< Inline "($v.hint.async = 1, $ed.showHint($v))"          >]
      let showHint_ (ed:CodeMirrorEditor) v   : unit       = X<_>
      let showHints (ed:CodeMirrorEditor) getHints completeSingle _ =
          showHint_ ed
              {  completeSingle = completeSingle
                 hint           = HintFunc getHints
                 container      = ed.GetWrapperElement() |> findRootElement
              }
      
      type LintResponse  = {
          message        : string
          severity       : string
          from           : CodeMirrorPos   
          ``to``         : CodeMirrorPos   
      }
      
      type LintFunc      = FuncWithArgs<string * (LintResponse[] -> unit) * obj * CodeMirrorEditor,  unit>
      
      [< Inline "($ed.setOption('lint', { async: 1, getAnnotations: $f, container: $elm }))"          >]
      let setLint_(ed:CodeMirrorEditor) (f:LintFunc) (elm:Dom.Element)  : unit = X<_>
      let setLint (ed:CodeMirrorEditor) getAnnotations       = 
          setLint_ ed (LintFunc getAnnotations) (ed.GetWrapperElement() |> findRootElement)
      
      
      [<NoComparison ; NoEquality>]
      type HtmlMeasure =
      | Percentage of Val<float>
      | Pixel      of Val<float>
      
      [<NoComparison ; NoEquality>]
      type SplitterBar = {
          value            : IRef<float>
          min              : Val<float>
          max              : Val<float>
          vertical         : Val<bool>
          node             : HtmlNode
          children         : HtmlNode seq
          after            : bool
          mutable dragging : bool
          mutable startVer : bool 
          mutable startP   : float 
          mutable start    : float 
          mutable size     : float 
          mutable domElem  : Dom.Element option
      }
      with
          static member New(var) = 
              {
                  value    = var
                  min      = Val.fixit   5.0
                  max      = Val.fixit  95.0
                  vertical = Val.fixit  true  
                  node     = div [ ``class`` "Splitter" ]
                  children = []
                  after    = true
                  dragging = false
                  startVer = true
                  startP   = 0.0
                  start    = 0.0
                  size     = 0.0
                  domElem  = None
              }
          static member New(value)    = SplitterBar.New(Var.Create value)
          member        this.Var      = this.value
          member        this.GetValue = this.value |> Val.map2 max this.min |> Val.map2 min this.max
          member        this.Render   =
              let mouseCoord (ev: Dom.MouseEvent) = if this.startVer then float ev.ClientX else float ev.ClientY
              let size () : float =
                  match this.domElem with
                  | None    -> 100.0
                  | Some el -> 
                   el.ParentElement.GetBoundingClientRect() 
                   |> fun r -> 
                       match this.startVer, this.after with
                       | true , true  ->  r.Width  
                       | true , false -> -r.Width 
                       | false, true  ->  r.Height
                       | false, false -> -r.Height
              let drag (ev: Dom.Event) =
                  ev :?> Dom.MouseEvent
                  |> mouseCoord
                  |> fun m   -> (m - this.start) * 100.0 / this.size + this.startP
                  |> fun v   -> this.value.Value <- v // ; JS.Inline("console.log($0)", this)
                 
              let rec finishDragging (_: Dom.Event) =
                  if this.dragging then
                      this.dragging <- false
                      JS.Window.RemoveEventListener("mousemove", drag          , false) 
                      JS.Window.RemoveEventListener("mouseup"  , finishDragging, false) 
                      //printfn "mouseup"
              let startDragging _ (ev: Dom.MouseEvent) =
                  if not this.dragging then
                      Val.map2 (fun startP dirV ->
                          this.dragging <- true
                          this.startVer <- dirV
                          this.startP   <- startP
                          this.start    <- mouseCoord ev
                          this.size     <- size()
                          JS.Window.AddEventListener("mousemove", drag          , false) 
                          JS.Window.AddEventListener("mouseup"  , finishDragging, false) 
                          ev.PreventDefault()
                      ) this.GetValue this.vertical
                      |> Val.iter id
              this.node
                .AddChildren(
                [
                  ``class`` <| Val.map (fun ver -> if ver then "Vertical" else "Horizontal") this.vertical 
                  SomeAttr  <| on.mouseDown startDragging
                  SomeAttr  <| on.afterRender (fun el -> this.domElem <- Some el)
                  css "
                      .Splitter.Vertical   { cursor: col-resize; background-color: #eef ; width : 5px ; margin-left:-7px; }
                      .Splitter.Horizontal { cursor: row-resize; background-color: #eef ; height: 5px ; margin-top :-7px; }
                  "
                ])
                .AddChildren this.children
          member inline this.Value       v =   this.value.Value <- v  ; this
          member inline this.Node     node = { this with node         = node                        }
          member inline this.Min         v = { this with min          = Val.fixit v                 }
          member inline this.Max         v = { this with max          = Val.fixit v                 }
          member inline this.Vertical    v = { this with vertical     = Val.fixit v                 }
          member inline this.Horizontal  v = { this with vertical     = Val.fixit v |> Val.map not  }
          member inline this.Vertical   () = { this with vertical     = Val.fixit true              }
          member inline this.Horizontal () = { this with vertical     = Val.fixit false             }
          member inline this.Before        = { this with after        =           false             }
          member inline this.After         = { this with after        =           true              }
          member inline this.Children   ch = { this with children     = ch                          }
          
      [< Inline "new ResizeObserver($f)" >]
      let newResizeObserver (f: unit->unit) = X<_> 
      
      [< Inline "$ro.observe($el)" >]
      let RObserve ro (el:Dom.Element) = X<_> 
      
      let mutable observers : obj list = []
      
      let addResizeObserver f el =
          let ro =  newResizeObserver f
          observers <- ro::observers
          RObserve ro el
      [<NoComparison ; NoEquality>]
      type Area =
      | Auto     of SplitterBar
      | Fixed    of HtmlMeasure
      | Splitter of SplitterBar
      
      type SectionType =
      | StVariable
      | StFixedPx
      | StFixedPerc
      
      [<NoComparison ; NoEquality>]
      type Grid = {
          padding       : float
          gap           : float
          content       : (string option * HtmlNode) []
          cols          : Area []
          rows          : Area []
          width         : IRef<float>
          height        : IRef<float>
          lastSplitter  : (int * bool) option
      }
      with
          static member New = {
             padding       = 9.0
             gap           = 9.0
             cols          = [| |]
             rows          = [| |]
             content       = [| |]
             width         = Var.Create 1000.0
             height        = Var.Create  100.0
             lastSplitter  = None
          }
          member this.NewSplitter  (f: float)  col =
              let spl = SplitterBar.New(f)
              if col then
                  { this with lastSplitter = Some (this.cols.Length, col) ; cols = Array.append this.cols  [| spl              |> Splitter |] }
              else 
                  { this with lastSplitter = Some (this.rows.Length, col) ; rows = Array.append this.rows  [| spl.Horizontal() |> Splitter |] }
          member inline this.ColFixedPx   f              = { this with cols    = Array.append this.cols    [| Pixel     (Val.fixit f)              |> Fixed    |] }
          member inline this.ColFixed     f              = { this with cols    = Array.append this.cols    [| Percentage(Val.fixit f)              |> Fixed    |] }
          member inline this.ColVariable (s:SplitterBar) = { this with cols    = Array.append this.cols    [| s                                    |> Splitter |] }
          member inline this.ColVariable (f:float)       = this.NewSplitter f true
          member inline this.ColAuto     (f:float)       = { this with cols    = Array.append this.cols    [| SplitterBar.New(     f)              |> Auto     |] }
          member inline this.RowFixedPx   f              = { this with rows    = Array.append this.rows    [| Pixel     (Val.fixit f)              |> Fixed    |] }
          member inline this.RowFixed     f              = { this with rows    = Array.append this.rows    [| Percentage(Val.fixit f)              |> Fixed    |] }
          member inline this.RowVariable (s:SplitterBar) = { this with rows    = Array.append this.rows    [| s                                    |> Splitter |] }
          member inline this.RowVariable (f:float)       = this.NewSplitter f false
          member inline this.RowAuto     (f:float)       = { this with rows    = Array.append this.rows    [| SplitterBar.New(     f).Horizontal() |> Auto     |] }
          member        this.Content (area, html)        = { this with content = Array.append this.content [| Some area, html                                  |] }
          member        this.Content        html         = { this with content = Array.append this.content [| None     , html                                  |] }
          member inline this.Padding      f              = { this with padding = f                                                                                }
          member inline this.Gap          f              = { this with gap     = f                                                                                }
          member this.changeSplitter f =
              this.lastSplitter
              |> Option.iter (fun (pos, col) ->
                  if col then
                      match this.cols.[pos] with
                      | Splitter spl -> this.cols.[pos] <- Splitter <| f spl 
                      | _            -> ()
                  else 
                      match this.rows.[pos] with
                      | Splitter spl -> this.rows.[pos] <- Splitter <| f spl 
                      | _            -> ()
              )
              this
          member        this.Before                = this.changeSplitter (fun spl -> spl.Before     )
          member inline this.Max                 v = this.changeSplitter (fun spl -> spl.Max       v)
          member inline this.Min                 v = this.changeSplitter (fun spl -> spl.Min       v)
          member inline this.Children           ch = this.changeSplitter (fun spl -> spl.Children ch)
          member this.style    (areas:Area[]) size =
              if areas.Length = 0 then Val.Constant "100%" else
              let pcs, pxs = 
                  areas 
                  |> Seq.fold (fun (pcs, pxs) a ->
                      match a with
                      | Auto              spl -> (                          pcs,                pxs)          
                      | Splitter          spl -> (Val.map2 (+) spl.GetValue pcs,                pxs) 
                      | Fixed (Percentage v)  -> (Val.map2 (+) v            pcs,                pxs)
                      | Fixed (Pixel      v)  -> (                          pcs, Val.map2 (+) v pxs)
                  ) (Val.Constant 0.0, Val.Constant 0.0)
              let finalPerc = Val.map2 (fun v size -> (size - this.padding * 2. - this.gap * ((float areas.Length) - 1.) - v) / (size - this.padding * 2.)) pxs size
              let autoPct   = Val.map  ((-) 100.0)  pcs 
              let perc   pc = Val.map2 (fun finalPerc pc -> finalPerc * pc |> max 0.0 |> sprintf "%f%%") finalPerc pc
              let pixel  px = Val.map  (fun           px ->             px |> max 0.0 |> sprintf "%fpx")           px
              areas
              |> Seq.foldBack (fun a state ->
                  match a with
                  |  Auto              spl -> perc  autoPct          
                  |  Splitter          spl -> perc  spl.GetValue
                  |  Fixed (Percentage v)  -> perc  v
                  |  Fixed (Pixel      v)  -> pixel v
                  |> Val.map2(fun state v -> v::state) state
                 )  <| (Val.Constant [])
              |> Val.map (String.concat " ")
          member this.styles() =
              [ style1 "grid-template-columns" <| this.style this.cols this.width
                style1 "grid-template-rows"    <| this.style this.rows this.height
              ]
          member this.GridTemplate() =
              [ 
                  yield!
                      this.content
                      |> Seq.map (fun (area, html) ->
                          match area with
                          | None   -> html
                          | Some a -> html.AddChildren([ style <| sprintf "grid-area: %s" a ])
                         )
                  yield!
                      this.cols
                      |> Seq.indexed
                      |> Seq.choose (function
                          | i, Auto     spl -> None           
                          | i, Splitter spl -> Some <| spl.Render.InsertChildren( 
                                                  [ style1 "grid-column" (string (i + if spl.after then 2 else 1))
                                                    style1 "grid-row"    (sprintf "1 / %d" (this.rows.Length + 1)) ] ) 
                          | i, Fixed    _   -> None
                     )
                  yield!
                      this.rows
                      |> Seq.indexed
                      |> Seq.choose (function
                          | i, Auto     spl -> None           
                          | i, Splitter spl -> Some <| spl.Render.InsertChildren( 
                                                  [ style1 "grid-row"    (string (i + if spl.after then 2 else 1))
                                                    style1 "grid-column" (sprintf "1 / %d" (this.cols.Length + 1)) ] ) 
                          | i, Fixed    _   -> None
                     )
                  yield! this.styles() 
                  yield style    <| sprintf "display: grid; grid-gap: %fpx; padding: %fpx; box-sizing: border-box" this.gap this.padding 
                  yield SomeAttr <| on.afterRender(fun el   -> 
                      let setVar (vr:IRef<_>) vl = if vr.Value <> vl then vr.Value <- vl 
                      let setDimensions () =
                          el.GetBoundingClientRect()
                          |> fun r ->  
                              setVar this.width  r.Width
                              setVar this.height r.Height
                      async {
                          do! Async.Sleep 60
                          do  setDimensions()
                      } |> Async.Start
                      addResizeObserver setDimensions el
                    ) 
              ]
          member this.Render =
              div <| this.GridTemplate()
          static member inline NewBisect(first, secT, ver, per:float, ch1, ch2) =
              let sect, auto, areas = 
                  if ver then match secT with
                              | StVariable  -> fun (g:Grid) -> g.ColVariable per
                              | StFixedPx   -> fun (g:Grid) -> g.ColFixedPx  per
                              | StFixedPerc -> fun (g:Grid) -> g.ColFixed    per
                             ,                (fun (g:Grid) -> g.ColAuto 50.0)
                             ,                 fun (g:Grid) -> g.Content( style "grid-template-areas: 'one   two' " )
                         else match secT with
                              | StVariable  -> fun (g:Grid) -> g.RowVariable per
                              | StFixedPx   -> fun (g:Grid) -> g.RowFixedPx  per
                              | StFixedPerc -> fun (g:Grid) -> g.RowFixed    per
                             ,                (fun (g:Grid) -> g.RowAuto 50.0)
                             ,                 fun (g:Grid) -> g.Content( style "grid-template-areas: 'one' 'two' " )
              Grid.New.Content("one", ch1)
                      .Content("two", ch2).Padding(0.0)
              |> areas
              |> (if first then sect >> auto
                           else auto >> sect)
              
      let reorderList (ts:'a list) drag drop =
          if drop < drag then
             ts.[0       ..drop - 1     ]
           @    [      ts.[drag]        ]
           @ ts.[drop    ..drag - 1     ]
           @ ts.[drag + 1..ts.Length - 1]
          else
             ts.[0..drag - 1            ]
           @ ts.[drag + 1..drop         ]
           @    [      ts.[drag]        ]
           @ ts.[drop + 1..ts.Length - 1]
      
      let reorderArray (ts:'a []) drag drop =
         (if drop < drag then
            [|
             ts.[0       ..drop - 1     ]
             [|        ts.[drag]       |]
             ts.[drop    ..drag - 1     ]
             ts.[drag + 1..ts.Length - 1]
            |]
          else
            [|
             ts.[0..drag - 1            ]
             ts.[drag + 1..drop         ]
             [|        ts.[drag]       |]
             ts.[drop + 1..ts.Length - 1]
            |]
         )|> Array.collect id 
      
      
      [< NoComparison >]
      type TabStrip =
          { selected  : IRef<int>
            tabs      : IRef<(System.Guid * (string * HtmlNode)) []>
            top       : bool
            horizontal: bool
            id        : System.Guid
          } 
      
      let draggedTab: (TabStrip * int) option ref = ref None
      
      let uid2s (uid: System.Guid) = "X" + uid.ToString().Replace("-", "")
      
      let selectedPanels: Var<Map<System.Guid, System.Guid>> = Var.Create Map.empty 
      
      let setSelectedPanel group panelO = 
          selectedPanels.Value <- 
              match panelO with
              | Some panel -> selectedPanels.Value.Add    (group, panel)
              | None       -> selectedPanels.Value.Remove  group
      
      let mutable TabMoved : ((TabStrip * TabStrip) -> unit) option = None
      let RaiseTabMoved fromS toS = TabMoved |> Option.iter (fun f -> f (fromS, toS))
      
      type TabStrip with
          member this.moveTab from drag drop =
              let ts = this.tabs.Value
              let ft = from.tabs.Value
              let newTabsT =
                  [|
                   ts.[0       ..drop - 1     ]
                   [|        ft.[drag]       |]
                   ts.[drop    ..ts.Length - 1]
                  |]
                  |> Array.collect id
              let newTabsF =
                  [|
                   ft.[0       ..drag - 1     ]
                   ft.[drag + 1..ft.Length - 1]
                  |]
                  |> Array.collect id
              from.tabs.Value     <- newTabsF
              this.tabs.Value     <- newTabsT
              this.selected.Value <- drop
              if from.selected.Value >= newTabsF.Length then from.selected.Value <- 0
              RaiseTabMoved from this
      
          member this.reorder drop =
              match !draggedTab with
              | None                                     -> ()
              | Some(from, drag) when from.id <> this.id -> this.moveTab from drag drop
              | Some(from, drag)                         ->
              this.tabs.Value     <- reorderArray this.tabs.Value drag drop
              let sel = this.selected.Value
              this.selected.Value <- if    sel = drag                then drop
                                     elif (sel < drag && sel < drop)
                                       || (sel > drag && sel > drop) then sel 
                                     elif  sel < drag                then sel + 1
                                     else                                 sel - 1
                                     
          static member New(tabs)    =
              { selected   = Var.Create 0
                tabs       = tabs 
                top        = false 
                horizontal = true
                id         = System.Guid.NewGuid() 
              } 
          static member New(tabs) = TabStrip.New(tabs |> Seq.map (fun def -> System.Guid.NewGuid(), def) |> Seq.toArray |> Var.Create)
          member this.Top         = { this with top        = true  }
          member this.Bottom      = { this with top        = false }
          member this.Horizontal  = { this with horizontal = true  }
          member this.Vertical    = { this with horizontal = false }
          member this.Selected    = Val.map2 (fun tabs sel -> tabs |> Seq.tryItem sel |> Option.map fst) this.tabs this.selected
          member this.Select    n = this.selected.Value <- n
          member this.Select   nm = this.tabs.Value |> Seq.indexed |> Seq.tryPick (fun (i, (_ , (tn, _))) -> if tn = nm then this.selected.Value <- i ; Some true else None) |> Option.defaultValue false
          member this.Select   gi = this.tabs.Value |> Seq.indexed |> Seq.tryPick (fun (i, (ti, (_ , _))) -> if ti = gi then this.selected.Value <- i ; Some true else None) |> Option.defaultValue false
          member this.Render      =
              let strip =
                  this.tabs
                  |> bindHElem (
                      fun tabs ->
                          div [ yield ``class`` <| sprintf "tab-strip %s %s"
                                                      (if this.top        then "top"        else "bottom"  ) 
                                                      (if this.horizontal then "horizontal" else "vertical")
                                
                                for i, (uid, (txt, _)) in  tabs |> Seq.indexed  do
                                    yield Hoverable.New.Content(
                                          div [ htmlText txt
                                                ``class`` <| Val.map (fun sel -> "tab" + (if sel = i then " selected" else "")) this.selected
                                                draggable "true"
                                                SomeAttr <| on.dragOver(fun _ ev -> ev.PreventDefault()                            )
                                                SomeAttr <| on.drag    (fun _ _  ->                     draggedTab := Some(this, i))
                                                SomeAttr <| on.drop    (fun e ev -> ev.PreventDefault(); ev.StopPropagation() ; this.reorder i )
                                                SomeAttr <| on.click   (fun _ _  ->                       this.selected.Value <- i ) 
                                              ])
                              ]
                  )
              Val.sink (setSelectedPanel this.id) this.Selected  
              let content = 
                  this.tabs
                  |> bindHElem (fun tabs ->
                      div [
                        yield  ``class`` "tab-children"
                        yield  Id <| uid2s this.id
                        yield!
                            tabs
                            |> Seq.map (fun (uid, (txt, sub)) -> 
                                sub.AddChildren(
                                  [ style <| Val.map (fun sels -> if sels |> Map.toSeq |> Seq.map snd |> Seq.contains uid then "" else "display : none") selectedPanels
                                    Id    <| uid2s uid
                                  ]))
                      ] 
                   )
              div [ ``class`` "tab-panel"
                    (if     this.top then strip else HtmlEmpty)
                    div [ content ; ``class`` "tab-content" ]
                    (if not this.top then strip else HtmlEmpty)
                    SomeAttr <| on.dragOver(fun _ ev -> ev.PreventDefault()                                      )
                    SomeAttr <| on.drop    (fun e ev -> ev.PreventDefault() ; this.reorder this.tabs.Value.Length)
                    css @"
      
      .tab-panel {
       overflow  : hidden   ;
       display   : flex     ;
       flex-flow : column   ;
       background: lightgray;
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
      "]
      //#nowarn "1178"
      type SplitterNode = | SplitterNode of Var<SplitterStructure>
      and  SplitterStructure =
          | SHtmlNode of HtmlNode
          | STabStrip of TabStrip
          | Split     of SplitterNode * SplitterNode * (SplitterNode -> SplitterNode -> HtmlNode)
      
      let rec renderSplitterNode      sn = match sn with SplitterNode chV -> bindHElem (fun ch -> renderSplitterStructure ch) chV 
      and     renderSplitterStructure ss =
              match ss with
              | SHtmlNode node        -> node
              | STabStrip strip       -> strip.Render  
              | Split   (ch1, ch2, f) -> f ch1 ch2
      
      let renderSplitter (per:float) ver ch1 ch2 = Grid.NewBisect(true, StVariable, ver, per, renderSplitterNode ch1, renderSplitterNode ch2).Render
      
      type SplitterStructure with    
          static member New(vertical : bool, child1, child2, per) = Split(SplitterNode (Var.Create              child1), SplitterNode (Var.Create              child2), renderSplitter per  vertical)
          static member New(vertical : bool, child1, child2     ) = Split(SplitterNode (Var.Create              child1), SplitterNode (Var.Create              child2), renderSplitter 50.0 vertical)
          static member New(vertical : bool, child1, child2, per) = Split(SplitterNode (Var.Create <| SHtmlNode child1), SplitterNode (Var.Create <| SHtmlNode child2), renderSplitter per  vertical)
          static member New(vertical : bool, child1, child2, per) = Split(SplitterNode (Var.Create <| STabStrip child1), SplitterNode (Var.Create <| STabStrip child2), renderSplitter per  vertical)
          static member New(ss1, ss2, f                    ) = Split(SplitterNode (Var.Create ss1                ), SplitterNode (Var.Create ss2                ), f                      )
          static member New(strip                          ) = STabStrip strip
          static member New(node                           ) = SHtmlNode node
      
      type SplitterNode with
          static member New        ss           = SplitterNode <| Var.Create ss
          static member New       (ss:HtmlNode) = SplitterNode <| Var.Create (SplitterStructure.New(ss))
          static member New       (ss:TabStrip) = SplitterNode <| Var.Create (SplitterStructure.New(ss))
          member this.Render                    = renderSplitterNode this
          member this.Var                       = match this with SplitterNode chV -> chV
          member this.Value                     = this.Var.Value
          member this.SplitMe(first, ver, node) =
              this.Var.Value <- if first then SplitterStructure.New(ver, node      , this.Value) 
                                         else SplitterStructure.New(ver, this.Value, node      )
          member this.SplitMe(first, ver, node:TabStrip) = this.SplitMe(first, ver, STabStrip node      )
          member this.SplitMe(first, ver, node:HtmlNode) = this.SplitMe(first, ver, SHtmlNode node      )
          member this.SplitMe(first, ver               ) = this.SplitMe(first, ver, TabStrip.New([||])  )
          member this.Navigate recFun                    =
              match this.Value with
              | SHtmlNode _           
              | STabStrip _           -> recFun this.Value
              | Split   (ch1, ch2, f) -> ch1.Navigate recFun || ch2.Navigate recFun
          member this.SelectTab  (nm: string)            = this.Navigate (function | STabStrip strip -> strip.Select nm | _ -> false) 
          member this.IsEmpty                            =
              match this.Value with
              | SHtmlNode HtmlEmpty   -> true
              | SHtmlNode _           -> false
              | STabStrip strip       -> strip.tabs.Value.Length = 0
              | Split   (ch1, ch2, f) -> ch1.IsEmpty && ch2.IsEmpty
          member this.UnSplitEmpties()                   =
              if                                    this.IsEmpty then this.Var.Value <- SplitterStructure.New(TabStrip.New([||])) else
              match this.Value with
              | Split   (ch1, ch2, f) -> if   ch1.IsEmpty then ch2.UnSplitEmpties() ; this.Var.Value <- ch2.Value 
                                         elif ch2.IsEmpty then ch1.UnSplitEmpties() ; this.Var.Value <- ch1.Value 
                                                          else ch1.UnSplitEmpties()
                                                               ch2.UnSplitEmpties()
              | _                     -> ()  
      
      let inline menuEntry content   = li [ content ]
      let inline private ref       content r = a  [ content ; hrefO r ] 
      let inline refText   txt     r = bindHElem (fun t -> if t = "" then HtmlEmpty else ref (htmlText t) r) txt
      let inline entryTxt  txt     r = menuEntry (refText  txt  r)
        
      let inline entries    ch cl    =  ul ch |> addClass cl
      let inline nav        ch       =  entries ch "nav navbar-nav"
      let inline dropdown   ch       =  entries ch "dropdown-menu"
      let navbar brand center right  =
          div [ ``class``                     "navbar navbar-default"
                div [ ``class``               "container-fluid"
                      div [ ``class``         "navbar-header"
                            div [ ``class``   "navbar-brand"
                                  brand
                                ]
                          ]
                      div [ ``class``         "navbar-collapse collapse"
                            center
                            right |> addClass "navbar-right"
                          ]
                    ]
          ]
          
      //#nowarn "1178"    
      
      type MenuEntry = {
          text       : Val<string>
          ref        : Val<string option>
          active     : Val<bool>
          disabled   : Val<bool>
          subMenu    : Menu option
          toolTip    : string option
          divider    : bool
          onClick    : (Dom.Element -> Dom.MouseEvent -> unit) option
      } with
          static member inline New txt = { 
              text      = Val.fixit  txt
              active    = Val.fixit  false 
              ref       = Val.Constant None
              toolTip   = None
              subMenu   = None
              onClick   = None
              divider   = false
              disabled  = Val.fixit false
          } 
          static member inline New(txt, ref) = { MenuEntry.New(txt) with ref      = Val.map Some ref }
          member this.Render           = 
              entryTxt this.text this.ref |> addClassIf "active" this.active |> addClassIf "disabled" this.disabled
              |> match this.subMenu with | None  -> id | Some m -> addChildren [ ``class`` "dropdown" ; m.Render ]
              |> match this.onClick with | None  -> id | Some f -> addChildren [ SomeAttr  <| on.click <@ f @>   ; style "cursor : pointer" ]
              |> match this.divider with | false -> id | true   -> addClass    "divider"
          member inline this.Divider      = { this with divider  = true                           }
          member inline this.OnClick  f   = { this with onClick  = Some f                         }
          member inline this.Disabled dis = { this with disabled = Val.fixit dis                  }
          member inline this.SubMenu  es  = { this with subMenu  = Some <| Menu.New( es).DropDown } 
          member inline this.SubMenu  es  = { this with subMenu  = Some <| Menu.New2(es).DropDown } 
          member        this.MenuNode     = MenuEntry this
      and MenuNode =
          | MenuHtml  of HtmlNode
          | MenuEntry of MenuEntry 
        with
          member this.Render = match this with | MenuHtml h -> h | MenuEntry e -> e.Render
      and Menu = {
          entries  : MenuNode seq
          dropdown : bool
      } with
          static member New es : Menu = { 
              entries = es
              dropdown = false
          }    
          static member New2 es : Menu = Menu.New(es |> Seq.map MenuEntry) 
          member this.DropDown        = { this      with dropdown = true  }
          member this.Render          =
              (if this.dropdown then dropdown else nav) <|
                  seq [
                      for entry in this.entries -> 
                          entry.Render
                  ]
      type Action = {
          text       : Val<string>
          highlight  : Val<bool>
          disabled   : Val<bool>
          toolTip    : string option
          onClick    : (Dom.Element -> Dom.MouseEvent -> unit) option
      } with
          static member inline New txt = { 
              text      = Val.fixit  txt
              highlight = Val.fixit  false 
              disabled  = Val.fixit  false
              toolTip   = None
              onClick   = None
          } 
          member inline this.OnClick   f   = { this with onClick   = Some f        }
          member inline this.OnClick2  f   = { this with onClick   = Some (f this) }
          member inline this.Disabled  dis = { this with disabled  = Val.fixit dis }
          member inline this.Highlight h   = { this with highlight = Val.fixit h   }
          member        this.MenuEntry     = {
              MenuEntry.text      = this.text
              MenuEntry.active    = this.highlight 
              MenuEntry.disabled  = this.disabled
              MenuEntry.toolTip   = this.toolTip
              MenuEntry.onClick   = this.onClick
              MenuEntry.ref       = Val.Constant None
              MenuEntry.divider   = false
              MenuEntry.subMenu   = None
          }
          member        this.Button       = {
              Button.text      = this.text
              Button.disabled  = this.disabled
              Button.onClick   = this.onClick |> Option.defaultValue (fun _ _ -> ())
      //        Button.toolTip   = this.toolTip
              Button._class    = Val.map (fun h -> if h then "btn btn-primary" else "btn") this.highlight 
              Button._type     = Val.fixit "button" 
              Button.style     = Val.fixit ""
              Button.id        = ""
            }
      
      let Do  f p = (fun     _ _ -> f     p)
      let Do2 f p = (fun act _ _ -> f act p)
    [<JavaScript>]
    module RunCode       =
      let completeJS js = 
        """
          CIPHERSpaceLoadFileGlobalFileRef = null;
          CIPHERSpaceLoadFile = function (filename, callback) {
              if (filename.slice(-3) == ".js" || filename.slice(-4) == ".fsx" || filename.slice(-3) == ".fs") { //if filename is a external JavaScript file
                  var fileRef = null;
                  var pre = document.querySelector('script[src="' + filename + '"]')
                  if (!pre) {
                      fileRef = document.createElement('script')
                      fileRef.setAttribute("type", "text/javascript")
                      fileRef.setAttribute("src", filename)
                  }
                  else callback();
              }
              else if (filename.slice(-4) == ".css") { //if filename is an external CSS file
                  var pre = document.querySelector('script[src="' + filename + '"]')
                  if (!pre) {
                      fileRef = document.createElement("link")
                      fileRef.setAttribute("rel", "stylesheet")
                      fileRef.setAttribute("type", "text/css")
                      fileRef.setAttribute("href", filename)
                  }
                  else callback();
              }
              else if (filename.slice(-5) == ".html") { //if filename is an external HTML file
                  var pre = document.querySelector('script[src="' + filename + '"]')
                  if (!pre) {
                      fileRef = document.createElement("link")
                      fileRef.setAttribute("rel", "import")
                      fileRef.setAttribute("type", "text/html")
                      fileRef.setAttribute("href", filename)
                  }
                  else callback();
              }
              if (!!fileRef) {
                  CIPHERSpaceLoadFileGlobalFileRef = fileRef;
      			fileRef.onload = function () { fileRef.onload = null;  callback(); }
                  document.getElementsByTagName("head")[0].appendChild(fileRef);
              }
          }
          CIPHERSpaceLoadFiles = function (files, callback) {
              var newCallback = callback
              if (!!CIPHERSpaceLoadFileGlobalFileRef && !!(CIPHERSpaceLoadFileGlobalFileRef.onload)) {
                  var oldCallback = CIPHERSpaceLoadFileGlobalFileRef.onload;
                  CIPHERSpaceLoadFileGlobalFileRef.onload = null;
                  newCallback = function () {
                      callback();
                      oldCallback();
                  }
              }
              var i = 0;
              loadNext = function () {
                  if (i < files.length) {
                      var file = files[i];
                      i++;
                      CIPHERSpaceLoadFile(file, loadNext);
                  }
                  else newCallback();
              };
              loadNext();
      	}
          CIPHERSpaceLoadFiles(['https://code.jquery.com/jquery-3.1.1.min.js'], function() {}); 
      	CIPHERSpaceLoadFilesDoAfter = function (callback) {
      		var newCallback = callback
      		if (!!CIPHERSpaceLoadFileGlobalFileRef) {
      			if (!!(CIPHERSpaceLoadFileGlobalFileRef.onload)) {
      				var oldCallback = CIPHERSpaceLoadFileGlobalFileRef.onload;
      				CIPHERSpaceLoadFileGlobalFileRef.onload = null;
      				newCallback = function () {
      					oldCallback();
      					callback();
      				}
      			}
      		}
      		else CIPHERSpaceLoadFileGlobalFileRef = {};
      		CIPHERSpaceLoadFileGlobalFileRef.onload = newCallback;
      	}
      
      CIPHERSpaceLoadFilesDoAfter(function() { 
        if (typeof IntelliFactory !=='undefined')
          IntelliFactory.Runtime.Start();
        for (key in window) { 
          if (key.startsWith("StartupCode$")) 
            try { window[key].$cctor(); } catch (e) {} 
        } 
      })
                       """ + js
      type RunNode(nodeName, ?clearNode: bool) =
        let bClearNode    = defaultArg clearNode true
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
            match baseNode.ShadowRoot with
            | null -> let p = createNode()
                      baseNode.AttachShadow(Dom.ShadowRootInit(Dom.ShadowRootMode.Open)).AppendChild p |> ignore
                      let e = createNode()
                      p.AppendChild e |> ignore
                      e
            | root -> root.FirstChild :?> Dom.Element
        do if bClearNode then runNode.InnerHTML <- ""
      with
        new(?clearNode: bool) = RunNode("TestNode", ?clearNode = clearNode)
        member this.RunNode   = runNode
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
        member inline this.RunDoc doc = doc :> Doc |> Doc.Run this.RunNode
        member inline this.RunHtml node = node |> renderDoc |> this.RunDoc
        
    module FSharpStation =
    
      open Template
      open FsStationShared
      open System.Collections.Generic
      open Useful
      
      #if FSS_SERVER
      open FsTranslator
      open FsEvaluator
      #endif
      
      [< JavaScript >]
      module FsGlobal =
          [< Inline >]
          let inline storeVarCodeEditor name = storeVar <| "CodeEditor." + name
          
          //let codeSnippetsStorage = WebSharper.UI.Next.Storage.LocalStorage "CodeSnippets" Serializer.Typed<CodeSnippet>
          //let codeSnippets        = ListModel.CreateWithStorage<CodeSnippetId, CodeSnippet> (fun s -> s.id) codeSnippetsStorage
          let codeSnippets        = ListModel.Create<CodeSnippetId, CodeSnippet> (fun s -> s.id) []
      
          [< Inline "(Date.now())" >]
          let now() = 0
          let fsIds  = "FSharpStation" + (now() |> string)
          
          let tryPickI f s = s |> Seq.indexed |> Seq.filter f |> Seq.tryHead
          
          type CodeSnippet 
              with
              static member PickIO       id   = codeSnippets.Value    |> tryPickI (fun (_, snp) -> snp.id = id)
              static member FetchO       id   = codeSnippets.TryFindByKey id
              static member FetchL       id   = CodeSnippet.FetchO id |> Option.toList
              static member New(            pred    , cnt) = CodeSnippet.New("", None   , pred, [], cnt)
              static member New(        pa, pred    , cnt) = CodeSnippet.New("", Some pa, pred, [], cnt)
              static member New(        pa,           cnt) = CodeSnippet.New("", Some pa, []  , [], cnt)
              static member New(                      cnt) = CodeSnippet.New("", None   , []  , [], cnt)
              static member New(    nm, pa, pred, co, cnt) = CodeSnippet.New(codeSnippets.Length, nm, pa, pred, co, cnt)
              static member New(od, nm, pa, pred, co, cnt) =
                  let newS =
                      {
                          name         = nm
                          content      = cnt
                          parent       = pa
                          predecessors = pred
                          id           = CodeSnippetId.New
                          expanded     = true
                          level        = 0
                          properties   = System.Collections.Generic.Dictionary<string, string>()
                      }
                  match od, codeSnippets.Length with
                  | _, 0            -> codeSnippets.Append newS
                  | 0, _            -> codeSnippets.Set <| Seq.append [| newS |] codeSnippets.Value
                  | i, n when i < n -> codeSnippets.Value 
                                          |> Seq.toArray
                                          |> Array.splitAt od
                                          |> fun (fst, snd) -> Array.append fst <| Array.append [| newS |] snd
                                          |> codeSnippets.Set 
                  | _, _            -> codeSnippets.Append newS
                  newS
              member this.Level =
                  let rec level out snp = 
                      snp.parent
                      |> Option.bind CodeSnippet.FetchO
                      |> Option.map (level <| out + 1) 
                      |> Option.defaultValue out
                  level 0 this
              member this.PrepareSnippet   = { this with level   = this.Level
                                                         content = this.content
                                                                        .Replace("##" + "FSHARPSTATION_ID" + "##"      , fsIds                  )
                                                                        .Replace("##" + "FSHARPSTATION_ENDPOINT" + "##", JS.Window.Location.Href) }
              member this.Predecessors     () =
                  let preds = this.UniquePredecessors CodeSnippet.FetchO |> Seq.toArray
                  codeSnippets.Value
                  |> Seq.filter (fun snp -> preds |> Array.contains snp.id)
                  |> Seq.map    (fun snp -> snp.PrepareSnippet)
                  |> Seq.toArray
              member this.GetCodeAndStarts addLinePrepos = this.Predecessors() |> CodeSnippet.CodeAndStarts addLinePrepos
              member this.GetCodeFsx       addLinePrepos = this.GetCodeAndStarts addLinePrepos |> fst
              member this.IsDescendantOf antId =
                  let rec isDescendantOf snp =
                      match snp.parent with
                      | None       -> false
                      | Some parId ->
                      if parId = antId then true else
                      CodeSnippet.FetchO parId
                      |> Option.map isDescendantOf
                      |> Option.defaultValue false
                  isDescendantOf this
              static member FetchByPathO names      = 
                  let tryFindByName      snps name  = snps |> Seq.filter (fun (snp:CodeSnippet) -> snp.Name = name) |> Seq.tryHead
                  let rec tryFindByPath  snps names = 
                      let first = names |> Seq.tryHead |> Option.bind (tryFindByName snps)
                      if names |> Seq.length <= 1 then first else
                      first
                      |> Option.bind (fun f ->
                          names 
                          |> Seq.tail
                          |> tryFindByPath  (codeSnippets.Value |> Seq.filter (fun snp -> snp.parent = Some f.id))
                      )
                  names 
                  |> tryFindByPath (codeSnippets.Value |> Seq.filter (fun snp -> snp.parent.IsNone))
              member this.propValue p =
                  if this.properties.ContainsKey p 
                  then Some this.properties.[p]
                  else this.parent |> Option.bind CodeSnippet.FetchO |> Option.bind (fun par -> par.propValue p)
          
          type Position =
              | Below
              | Right
              | Tab
              | NewBrowser
              
          
          type ErrCompiler =
              | JsCompilerMsg  of string * bool
              | ``Snippet Missing``
              | ``Could not open new browser, Popup blocker may be active``
              interface ErrMsg with
                  member this.ErrMsg   : string = 
                      match this with 
                      | JsCompilerMsg(msg, err) -> sprintf "%s" msg
                      | _                       -> sprintf "%A" this
                  member this.IsWarning: bool   = 
                      match this with 
                      | JsCompilerMsg(msg, err) -> not err
                      | _                       -> false
                      
          [< Inline "saveAs(new Blob([$txt], {type: 'text/plain;charset=utf-8'}), $name)" >]
          let saveAs (txt:string) (name:string) = ()
          
          type KeyMapAutoComplete = { 
              F2              : Template.CodeMirrorEditor -> unit 
              LeftDoubleClick : Template.CodeMirrorEditor -> unit
              ``Ctrl-Space``  : Template.CodeMirrorEditor -> unit
          }
          
          type Property(setDirty: unit->unit, props: Dictionary<string, string>, keyP: string) =
              let mutable key = keyP
              let getK () = key
              let setK k  = props.Add(k, props.[key]) ; props.Remove key |> ignore ; key <- k ; setDirty()
              let getV () = props.[key]
              let setV v  = props.[key] <- v ; setDirty()
              interface IRef<string> with
                 member this.Id  = "?"
                 member this.Set                                   v = setK v
                 member this.Value                        with set v = setK v
                 member this.Get ()                                  = getK()
                 member this.Value                                   = getK()
                 member this.Update      (f:string -> string       ) = getK() |> f |>             setK
                 member this.UpdateMaybe (f:string -> string option) = getK() |> f |> Option.iter setK
                 member this.View                     : View<string> = getK() |> View.Const
              member this.KeyVar   = this :> IRef<string>  
              member this.ValueVar =  PropValue this
              member this.GetK     = getK
              member this.SetK     = setK
              member this.GetV     = getV
              member this.SetV     = setV
              member this.Remove() = props.Remove key |> ignore ; setDirty()
      
          and PropValue(prop: Property) =
              let get  = prop.GetV
              let set  = prop.SetV
              interface IRef<string> with
                 member this.Id  = "?"
                 member this.Set                                   v = set v
                 member this.Value                        with set v = set v
                 member this.Get ()                                  = get()
                 member this.Value                                   = get()
                 member this.Update      (f:string -> string       ) = get() |> f |>             set
                 member this.UpdateMaybe (f:string -> string option) = get() |> f |> Option.iter set
                 member this.View                     : View<string> = get() |> View.Const
      
      open FsGlobal                
      
      
      [< JavaScript >]
      let FSharpStationClient (loadFromUri: string) =
      
        
        let missingVar  = Var.Create ""
        let missing def find lens k =
            match find k with
            | Some _ -> lens k
            | None   -> missingVar.Lens (fun _ -> def) (fun _ _ -> "")
            
        let currentCodeSnippetId  = Var.Create <| CodeSnippetId.New
        
        storeVarCodeEditor "currentCodeSnippetId" currentCodeSnippetId
        
        let refresh       = Var.Create()
        let refreshView b = refresh.Value <- b
        
        let currentCodeSnippetO = Val.map2 (fun k () -> codeSnippets.TryFindByKey k) currentCodeSnippetId refresh
        
        let curSnippetNameOf k = missing ""        codeSnippets.TryFindByKey <| codeSnippets.LensInto (fun s -> s.Name      ) (fun s n -> { s with name       = n }) <| k
        let curSnippetCodeOf k = missing ""        codeSnippets.TryFindByKey <| codeSnippets.LensInto (fun s -> s.content   ) (fun s n -> { s with content    = n }) <| k
        let curSnippetPrpsOf k = missing (System.Collections.Generic.Dictionary<string, string>()) codeSnippets.TryFindByKey <| codeSnippets.LensInto (fun s -> s.properties) (fun s p -> { s with properties = p }) <| k
            
        let positionTxt v =
            match v with
            | Below      -> "Below"
            | Right      -> "Right"
            | Tab        -> "In Tab"
            | NewBrowser -> "New Browser"
            
        let position = Var.Create Below
        storeVarCodeEditor "position" position
        
        let directionVertical    = 
            Val.map (fun pos -> 
                match pos with
                | Right -> true
                | _     -> false
            ) position
            
        ()    
        
        
        let noSelection cur = CodeSnippet.FetchO cur = None
        let noSelectionVal  = Val.map noSelection currentCodeSnippetId
        
        let disableGenericVal f =
            currentCodeSnippetId
            |> Val.map 
                (CodeSnippet.FetchO
                 >> Option.map f
                 >> Option.defaultValue true
                )
        
        let disablePropertyVal p = disableGenericVal <| fun snp -> snp.propValue p |> Option.map ((<>) "0") |> Option.defaultValue false
        
        let disableParseVal      = disablePropertyVal "DisableParse" 
        let disableFSIVal        = disablePropertyVal "DisableFSI"        |> Val.map2 (||) disableParseVal  
        let disableWebSharperVal = disablePropertyVal "DisableWebSharper" |> Val.map2 (||) disableParseVal 
            
        let mutable lastCodeAndStarts : (CodeSnippetId * bool * ((string * int * int) [] * string [] * string [] * string [] * string [] * string [])) option = None
        
        let getPredecessors curO =
            curO
            |> Option.map (fun (snp:CodeSnippet) -> snp.UniquePredecessors CodeSnippet.FetchO |> HashSet)
            |> Option.defaultValue (System.Collections.Generic.HashSet())
        
        let getPredecessorsM = Useful.ResetableMemoize(getPredecessors)
        
        let codeFS         = Var.Create ""
        let codeJS         = Var.Create ""
        let parserMsgs     = Var.Create ""
        let outputMsgs     = Var.Create ""
        let mutable parsed = false
        let dirty          = Var.Create false 
        let setDirtyPart() = parsed            <- false
                             dirty.Value       <- true       
        let setDirty()     = lastCodeAndStarts <- None
                             setDirtyPart               ()
        let setDirtyPred() = setDirty                   ()
                             getPredecessorsM.ClearCache()
                             refreshView                ()
        let setClean()     = getPredecessorsM.ClearCache()
                             dirty.Value       <- false
                             lastCodeAndStarts <- None
                             
        
        //storeVarCodeEditor "dirty" dirty
        let appendMsg (var:IRef<string>) msg =
            if isUndefined msg then () else
            let newM =
                match var.Value, msg.ToString() with
                | null, m 
                | ""  , m
                | m   , null
                | m   , ""   -> m
                | m1  , m2   -> m1 + "\n" + m2
            if newM <> var.Value then
                var.Value  <- newM
        
        let addOutMsg msg = appendMsg outputMsgs msg
        let addPrsMsg msg = appendMsg parserMsgs msg
        
        let getFSCode () =
            CodeSnippet.FetchO currentCodeSnippetId.Value 
            |> Option.iter (fun snp -> codeFS.Value <- snp.GetCodeFsx true )
        
        do Val.sink (fun m -> 
            JS.Window.Onbeforeunload <- 
                if m then System.Action<Dom.Event>(fun (e:Dom.Event) -> e?returnValue  <- "Changes you made may not be saved.")
                else null
            ) dirty 
        
        //let evalIFrameJS success failure js =
        //    createIFrame (fun frame ->
        //        try
        //             let window   = frame?contentWindow
        //             let eval   s = JS.Apply window "eval" [| s |]
        //             eval js           |> success
        //        with e -> e.ToString() |> failure
        //    )
        //    |> RunCode.RunNode().RunHtml
        //
        //let evalWindowUrlJS (url:string) success failure js =
        //    let window       = JS.Apply JS.Window "open" [| url |]
        //    match window with
        //    | null -> failure "could not open new browser. Popup blocker may be active."
        //    | _    ->
        //    800 
        //    |> JS.SetTimeout (fun () -> 
        //        try
        //             let eval   s = JS.Apply window   "eval" [| s |]
        //             //printfn "Evaluating..."
        //             JS.Apply window   "focus" [|  |]
        //             eval js           |> success
        //        with e -> e.ToString() |> failure)
        //    |> ignore
        //
        //let runUrlJS url pos msgs js =
        //    sendMsg "Running JavaScript..."
        //    match pos with
        //    | NewBrowser -> evalWindowUrlJS url
        //    | _          -> evalIFrameJS
        //    <| (fun res  -> sendMsg "Done!"   ; sendMsg res ; sendMsg msgs) 
        //    <| (fun res  -> sendMsg "Failed!" ; sendMsg res ; sendMsg msgs)
        //    <| js
        //
        //let processSnippet getCode msg processCode =
        //    CodeSnippet.FetchO currentCodeSnippetId.Value 
        //    |> Option.iter (fun snp -> 
        //        codeMsgs.Value <- msg
        //        codeJS.Value   <- ""
        //        let code = getCode snp
        //        codeFS.Value   <- code
        //        processCode       code
        //    )
        //
        //let compileSnippet fThen fFail = 
        //    processSnippet (fun snp -> snp.GetCodeFsx true) "Compiling to JavaScript..." (RunCode.compile (fun msgs js -> codeJS.Value <- js ; fThen msgs js) fFail)
        //
        //let compileRunP pos = compileSnippet (runJS pos)                                         sendMsg
        //let compileRun  ()  = compileRunP           position.Value
        //let justCompile ()  = compileSnippet (fun msgs _ -> sendMsg "Compiled!" ; sendMsg msgs)  sendMsg
        
        let reorderSnippet toId fromId =
            let trySnippet id = tryPickI (fun (_, snp) -> snp.id = id) 
            let moving, others = codeSnippets.Value |> Seq.toArray |> Array.partition (fun snp -> snp.id = fromId || snp.IsDescendantOf fromId)
            match trySnippet fromId moving, trySnippet toId others with
            | Some(_, snp), Some(ti, tsn) ->
                [| others.[0..ti - 1] ; moving ; others.[ti..] |]
                |> Array.collect id
                |> codeSnippets.Set
                codeSnippets.UpdateBy (fun c -> Some { c with parent = tsn.parent }) snp.id
            | _ -> ()
            setDirtyPred()
        
        let indentCodeIn () =
            CodeSnippet.PickIO currentCodeSnippetId.Value
            |> Option.iter (fun (j, snp) ->
                let rec doPriorUntil f i =
                    if i < 0 then () else
                    if codeSnippets.Value |> Seq.item i |> f then () else
                    doPriorUntil f (i - 1)
                j - 1 |> doPriorUntil (fun pri ->
                    if pri.parent = snp.parent 
                    then codeSnippets.UpdateBy (fun c -> Some { c with parent = Some pri.id }) snp.id
                         true
                    else false
                )
                setDirtyPred()
            )
        
        let indentCodeOut () =
            CodeSnippet.FetchO currentCodeSnippetId.Value
            |> Option.iter (fun snp ->
                let newP = snp.parent
                           |> Option.bind CodeSnippet.FetchO
                           |> Option.bind (fun p -> p.parent)
                codeSnippets.UpdateBy (fun c -> Some { c with parent = newP }) snp.id
                setDirtyPred()
            )
        
        let mutable draggedId   = CodeSnippetId.New
        
        ()
        let compileSnippetW (snpO: CodeSnippet option) =
            Wrap.wrapper {
                let!   snp         = snpO |> Result.fromOption ``Snippet Missing``
                outputMsgs.Value  <- "Compiling to JavaScript..."
                codeJS.Value      <- ""
                let    code        = snp.GetCodeFsx true
                codeFS.Value      <- code
                let!   jsR         = translateAR code false
                let!   js          = jsR
                let    jsc         = RunCode.completeJS js
                codeJS.Value      <- jsc
                addOutMsg            "Compiled!"
                return jsc
            }
            
        let newWindow url = 
            JS.Apply JS.Window "open"  [| url |]
            |> function
               | null   -> Result.fail    ``Could not open new browser, Popup blocker may be active``
               | window -> Result.succeed window
            
        let eval  window js = JS.Apply window "eval"  [| js  |]
        let focus window    = JS.Apply window "focus" [|     |] |> ignore
        
        let evalWindowUrlJSW (url:string) js =
            Wrap.wrapper {
                do!    Result.tryProtection()
                let!   window       = newWindow url
                do     focus window
                do!    Async.Sleep 800 
                let    res : string = eval window js
                return res
            }
        
        let createIFrameA () =
            Async.FromContinuations
                (fun (cb, errF: exn -> unit, canF: System.OperationCanceledException -> unit) ->
                    try
                        createIFrame cb |> RunCode.RunNode().RunHtml     
                    with e -> errF e
                )
        
        let evalIFrameJSW js =
            Wrap.wrapper {
                do!    Result.tryProtection()
                let!   frame        = createIFrameA () 
                let    window       = frame?contentWindow
                window?document?body?style?margin <- "0px"
                let    res : string = eval window js
                return res
            }
        
        let compileRunUrlW url pos snpO =
            Wrap.wrapper {
                let! js  = compileSnippetW snpO
                outputMsgs.Value <-  "Running JavaScript..."
                let! res = match pos with
                           | NewBrowser -> evalWindowUrlJSW url js
                           | _          -> evalIFrameJSW        js
                addOutMsg res
                addOutMsg "Done!"
                return  pos, res
            }
        
        let getSnpO () = CodeSnippet.FetchO currentCodeSnippetId.Value
        
        let evaluateSnippetW (snpO: CodeSnippet option) =
            Wrap.wrapper {
                let!   snp        = snpO |> Result.fromOption ``Snippet Missing``
                outputMsgs.Value <- "Evaluating F# code..."
                let    code       = snp.GetCodeFsx true
                codeFS.Value     <- code
                let! resR         = evaluateAR code
                let! res          = resR
                addOutMsg res
                addOutMsg "Done!"
                return  res
            }
        
        let compileRunW = compileRunUrlW (JS.Window.Location.Origin + "/Main.html") 
        
        let compileRunP pos = getSnpO() |> compileRunW pos  //|> Wrap.map ignore |> Wrap.start addOutMsg
        let justCompile     = getSnpO   >> compileSnippetW  //>> Wrap.map ignore >> Wrap.start addOutMsg
        let evaluateFS      = getSnpO   >> evaluateSnippetW //>> Wrap.map ignore >> Wrap.start addOutMsg
        let compileRun  ()  = compileRunP position.Value
        
        ()
        #if NOMESSAGING
        #else
        
        let fsStationClient = FsStationClient(fsIds, fsIds, endPoint = JS.Window.Location.Href)
        
        let transMsgs (msgs: ErrMsg list)  =  msgs |> Seq.map (fun e -> e.ErrMsg, if e.IsWarning then FSWarning else FSError) |> Seq.toArray
        
        let result2response res = 
            match res with 
            | Result (a, b) -> StringResponseR (a |> Option.map snd, b |> Seq.map (fun err -> err.ErrMsg, if err.IsWarning then FSWarning else FSError) |> Seq.toArray ) 
        
        let respond fromId (msg:FSMessage) : Async<FSResponse> =
            async {
                match msg with
                | GetWholeFile                     -> return  codeSnippets.Value            |> Seq.toArray |> Json.Serialize |> Some                                   |> StringResponse       
                | GetSnippetContentById sId        -> return  CodeSnippet.FetchO       sId  |> Option.map (fun snp -> snp.content        )                             |> StringResponse       
                | GetSnippetCodeById    sId        -> return  CodeSnippet.FetchO       sId  |> Option.map (fun snp -> snp.GetCodeFsx true)                             |> StringResponse 
                | GetSnippetPredsById   sId        -> return  CodeSnippet.FetchO       sId  |> Option.map (fun snp -> snp.Predecessors ()) |> Option.defaultValue [||] |> SnippetsResponse
                | GetSnippetById        sId        -> return  CodeSnippet.FetchO       sId                                                                             |> SnippetResponse 
                | GetSnippetContent     path       -> return  CodeSnippet.FetchByPathO path |> Option.map (fun snp -> snp.content        )                             |> StringResponse
                | GetSnippetCode        path       -> return  CodeSnippet.FetchByPathO path |> Option.map (fun snp -> snp.GetCodeFsx true)                             |> StringResponse
                | GetSnippetJSCode      path       -> match   CodeSnippet.FetchByPathO path with
                                                      | Some snp -> let!    jsR = translateAR (snp.GetCodeFsx true) false
                                                                    return (jsR |> Result.map RunCode.completeJS |> Result.getOption, jsR |> Result.getMsgs |> transMsgs)      |> StringResponseR
                                                      | None     -> return (None, [| "Snippet not found" , FSError |] )                                                |> StringResponseR
                | GetSnippetPreds       path       -> return  CodeSnippet.FetchByPathO path |> Option.map (fun snp -> snp.Predecessors ()) |> Option.defaultValue [||] |> SnippetsResponse
                | GetSnippet            path       -> return  CodeSnippet.FetchByPathO path                                                                            |> SnippetResponse 
                | GenericMessage        txt        -> return  (Some <| "Message received: " + txt)                                                                     |> StringResponse
                | GetIdentification                -> return  fromId                                                                                                   |> IdResponse  
                | RunSnippetUrlJSById  (sId , url) -> return! CodeSnippet.FetchO       sId  |> compileRunUrlW url NewBrowser |> Wrap.getAsyncR |> Async.map result2response
                | RunSnippetUrlJS      (path, url) -> return! CodeSnippet.FetchByPathO path |> compileRunUrlW url NewBrowser |> Wrap.getAsyncR |> Async.map result2response
            }     
             
        let respondMessage fromId txt =
            async {
                let  msg = Json.Deserialize txt 
                let! res = respond fromId msg
                return Json.Serialize res
            }
        
        async {
            do! Async.Sleep 1000
            do fsStationClient.MessagingClient.AwaitMessage respondMessage
        } |> Async.Start
        
        #endif
        let isDirectPredecessor pre curO =
            curO
            |> Option.map (fun snp -> snp.predecessors |> List.contains pre)
            |> Option.defaultValue false
        
        
        let curPredecessors = Val.map getPredecessorsM.Call currentCodeSnippetO
        
        let isIndirectPredecessor pre (predecessors: HashSet<CodeSnippetId>) = predecessors.Contains pre //predecessors |> Set.contains pre
        
        //let isIndirectPredecessorT (preId, curId) = getPredecessors curId |> Set.contains preId            // horrible performance
        //let isIndirectPredecessorM  preId  curId  = (Useful.memoize isIndirectPredecessorT) (preId, curId) // horrible performance
        
        let togglePredecessorForCur (pre:CodeSnippet) curO =
            curO |> Option.iter (fun cur ->
                if cur = pre || isIndirectPredecessor cur.id (pre.UniquePredecessors CodeSnippet.FetchO |> HashSet) then () else
                let preds = 
                    if cur.predecessors |> List.contains pre.id
                    then List.filter ((<>) pre.id)
                    else fun l -> pre.id :: l
                    <| cur.predecessors
                codeSnippets.UpdateBy  (fun c -> Some { c with predecessors = preds }) cur.id
                setDirtyPred()
            )
        
        let toggleExpanded snp =
            codeSnippets.UpdateBy  (fun c -> Some { c with expanded = not c.expanded }) snp.id
            refreshView()
        
        let listEntry isParent isExpanded code =
            Template.Hoverable.New
                .Content( [ ``class`` "code-editor-list-tile"
                            classIf   "selected"              <| Val.map ((=)                    code.id) currentCodeSnippetId
                            classIf   "direct-predecessor"    <| Val.map (isDirectPredecessor    code.id) currentCodeSnippetO
                            classIf   "indirect-predecessor"  <| Val.map (isIndirectPredecessor  code.id) curPredecessors
                            draggable "true"
                            SomeAttr <| on.dragOver(fun _ ev -> ev.PreventDefault()                                              )
                            SomeAttr <| on.drag    (fun _ _  ->                                              draggedId <- code.id)
                            SomeAttr <| on.drop    (fun _ ev -> ev.PreventDefault() ; reorderSnippet code.id draggedId           )
                            span    [ ``class`` "node"
                                      classIf   "parent"   isParent
                                      classIf   "expanded" isExpanded
                                      SomeAttr <| on.click(fun _ _ -> if isParent then toggleExpanded code)
                                      title    <| if isParent then (if isExpanded then "collapse" else "expand") else ""
                                      htmlText <| if isParent then (if isExpanded then "-"        else "+"     ) else ""
                                    ]
                            div     [ ``class`` "code-editor-list-text"
                                      style1 "text-indent" (sprintf "%dem" <| code.Level)
                                      style  "white-space: pre"
                                      htmlText <| Val.map2 snippetName (curSnippetNameOf code.id) (curSnippetCodeOf code.id)
                                      SomeAttr <| on.click (fun _ _ -> currentCodeSnippetId.Value <- code.id)
                                    ]
                            span    [ ``class``   "predecessor"
                                      title       "toggle predecessor"
                                      SomeAttr <| on.click(fun _ _ -> Val.iter (togglePredecessorForCur code) currentCodeSnippetO)
                                      htmlText    "X"
                                    ]
                            ])
        
        let mutable topScrollList = 0.0
        
        let listEntries snps =
            let list =
              div [ 
                yield style "overflow: auto"
                yield! 
                    snps
                    |> Seq.indexed
                    |> Seq.mapFold (fun expanded (i, snp) ->
                        if snp.parent |> Option.map (fun p -> Set.contains p expanded) |> Option.defaultValue true then 
                            let isParent    = codeSnippets |> Seq.tryItem (i + 1) |> Option.map (fun nxt -> nxt.parent = Some snp.id) |> Option.defaultValue false
                            let isExpanded  = isParent && snp.expanded
                            (listEntry isParent isExpanded snp |> Some, if isExpanded then Set.add snp.id expanded else expanded)
                        else  (None, expanded)
                    )  (Set [])
                    |> fst
                    |> Seq.choose id
                yield SomeAttr <| on.scroll      (fun e _ -> topScrollList <- e.ScrollTop   )
                yield SomeAttr <| on.afterRender (fun e   -> e.ScrollTop   <- topScrollList )
              ]
            list
        
        ()    
        let inline ifUndef def v = if isUndefined v then def else v
        let obj2CodeSnippetId o = 
            if isUndefined o then
                System.Guid("00000000-0000-0000-0000-000000000000")
            else
                o?Item
            |> CodeSnippetId 
        
        let obj2CodeSnippetIdO o = // the json representation of an option is different from the internal representation
            if isUndefined o then
                None
            else
                Some <| obj2CodeSnippetId o
        
        let obj2Map o =
            let dict = System.Collections.Generic.Dictionary<string, string>()
            if isUndefined o then
                dict
            else
                JS.GetFields o |> Array.map (fun (f, v) -> f, v :?> string ) |> Seq.iter dict.Add
                dict
        
        let deserializeCodeSnipets v = 
            try
                let objs= WebSharper.Json.Parse v |> unbox<obj[]>
                printfn "%A" <| Array.length objs
                let snps =
                    objs
                    |> Array.choose (fun o ->
                         if isUndefined o then None else
                         {
                            name         = o?name         |> ifUndef ""
                            content      = o?content      |> ifUndef ""
                            parent       = o?parent       |> obj2CodeSnippetIdO
                            predecessors = o?predecessors |> ifUndef [||] |> Array.map  obj2CodeSnippetId |> Seq.toList
                            id           = o?id           |> obj2CodeSnippetId
                            expanded     = o?expanded     |> ifUndef false
                            level        = o?level        |> ifUndef 0
                            properties   = o?properties   |> obj2Map
                          } |> Some)
                snps
            with _ -> [||]
            
        ()    
        let addCode   ()   =
            CodeSnippet.PickIO currentCodeSnippetId.Value
            |> Option.map (fun (i, snp) -> CodeSnippet.New(i + 1, "", snp.parent, [], [], ""))
            |> Option.defaultWith (fun _ -> CodeSnippet.New "")
            |> fun n -> currentCodeSnippetId.Value <- n.id
            setDirty()
            refreshView()
        
        
        let deleteCode () =
            CodeSnippet.FetchO currentCodeSnippetId.Value
            |> Option.iter (fun snp -> 
                if JS.Confirm (sprintf "Do you want to delete %s?" snp.Name) then
                    currentCodeSnippetId.Value <- CodeSnippetId.New
                    codeSnippets.Remove snp
                    setDirty()
                    refreshView()
            )
            
        let justFileName (f:string) = f.Split [| '/' ; '\\' |] |> Seq.last
        
        let fileName  = Var.Create ""
        let emptyFile = Val.map (fun v -> v = "") fileName
        
        let loadTextFile element (f: string -> unit) =
            let files = element |> FileList.OfElement 
            if files.Length > 0 then
                let  reader  = TextFileReader()
                reader.Onload <- (fun e -> f e.Target?result)
                reader.ReadAsText files.[0] 
        
        let parseText txt =
            try
                txt
                |> deserializeCodeSnipets
                |> codeSnippets.Set
                setClean()
                refreshView()
            with e -> JS.Alert <| e.ToString()
        
        let fileInputElementId = "CodeEditorFileSel"
        let loadFile (e: Dom.Element) =
            if (not dirty.Value) || JS.Confirm "Changes have not been saved, do you really want to load?" then
              let root = findRootElement e
              loadTextFile 
                  <| root.QuerySelector("#" + fileInputElementId)
                  <| parseText
        
        let downloadFile() = // Save as...
            codeSnippets.Value
                |> Seq.toArray
                |> Json.Serialize
                |> saveAs <| match justFileName fileName.Value with | "" -> "snippets.fsjson" | fname -> fname
            setClean()
        
        let loadFileElement =
            Template.Input.New(fileName.Lens justFileName (fun prev n -> prev) )
                .Prefix( label [ ``class`` "btn btn-primary" ; htmlText "Load File..." 
                                 Template.Input.New(fileName)
                                         .Type("file")
                                         .Style("display: none")
                                         .Content([ on.change (fun el _ -> loadFile el   )
                                                    on.click  (fun el _ -> el?value <- "")
                                                  ])
                                         .Id(fileInputElementId)
                                         .Render 
                                ]
                        )
                        
        let do_LoadFile (e:Dom.Element) _ =          
            let root = findRootElement e
            (root.QuerySelector("#" + fileInputElementId))?click()
        
        if loadFromUri <> "" then
            async {
                do! Async.Sleep 3000
                printfn "loading %s..." loadFromUri
                let  r = JQuery.JQuery.GetJSON(loadFromUri)
                r.Done (fun () -> parseText r.ResponseText) |> ignore
            } |> Async.Start
            
            
        let autoCompleteClient = FSAutoCompleteIntermediary.FSAutoCompleteIntermediaryClient("FSharpStation", endPoint = JS.Window.Location.Href)
        
        #if FSS_SERVER
        let parseFile = fsIds + ".fsx"
        #else
        let parseFile = "..\\" + fsIds + ".fsx"
        #endif
        
        let setDirtyCond() =
            match lastCodeAndStarts with
            | Some (pId, _, red) when pId = currentCodeSnippetId.Value -> setDirtyPart()
            | _                                                        -> setDirty    ()
        
        let getCodeAndStartsFast msgF (snp:CodeSnippet) addLinePrepos =
            let red0, cur = 
                match lastCodeAndStarts with
                | Some (pId, alp, red) when pId = snp.id && alp = addLinePrepos -> msgF "Reparsing..."; red, snp.PrepareSnippet
                | _ -> 
                msgF "Parsing..."
                let preds = snp.Predecessors()
                let red = CodeSnippet.ReducedCode addLinePrepos preds.[0..preds.Length - 2]
                let cur = preds.[preds.Length - 1]
                lastCodeAndStarts <- Some(cur.id, addLinePrepos, red)
                red, cur
            let red1 = CodeSnippet.ReducedCode addLinePrepos [| cur |]
            CodeSnippet.AddSeps red0 red1
            |> CodeSnippet.FinishCode addLinePrepos
        
        let mutable parseRun = 1
        
        let parseFSA silent =
            async {
                let msgF = if silent then ignore else fun txt -> parserMsgs.Value <- txt
                match CodeSnippet.FetchO currentCodeSnippetId.Value with 
                | None     -> ()
                | Some cur ->
                let runN           = parseRun + 1
                parseRun          <- runN
                let  code, starts  = getCodeAndStartsFast msgF cur false
                parsed            <- true
                let! res           = autoCompleteClient.Parse(parseFile, code, starts)
                if not silent && runN = parseRun && parsed then
                    addPrsMsg res
                    addPrsMsg "Parsed!"
            }
        
        let parseFS() = 
            Wrap.wrapper {
                lastCodeAndStarts <- None
                do! parseFSA false
            }
        
        
        let mustParse (cur:CodeSnippet) =
            async {
                if not parsed then return true 
                else
                    let! must = autoCompleteClient.MustParse(parseFile, cur.NameSanitized)
                    return must
            }
        
        let parseIfMustThen silent =
            async {
                let! disabled = disableParseVal |> Val.toView |> View.GetAsync 
                if disabled then () else
                match CodeSnippet.FetchO currentCodeSnippetId.Value with 
                | None     -> ()
                | Some cur ->
                let! must = mustParse cur
                if must then 
                    do! parseFSA silent
            }
        
        let getStartWord (line:string) ch =
            match line.Substring(0, ch) with
            | REGEX @"([a-zA-Z_]\w*)$" "g" [| txt |] -> txt
            | _                                      -> ""          
        
        let getEndWord (line:string) ch =
            match line.Substring(ch) with
            | REGEX @"^([a-zA-Z_]\w*)" "g" [| txt |] -> txt
            | _                                      -> ""          
        
        let showToolTip (ed:Template.CodeMirrorEditor) =
            async {
                match CodeSnippet.FetchO currentCodeSnippetId.Value with 
                | None     -> ()
                | Some cur ->
                do!  parseIfMustThen false
                let  pos   = ed.GetCursor()
                let  l     = ed.GetLine pos.line
                let  sub   = (getStartWord l pos.ch |> String.length)   
                let  add0  = (getEndWord   l pos.ch |> String.length)    
                let  add   = if sub = 0 && add0 = 0 then 2 else add0 
                let! tip   = autoCompleteClient.ToolTip  (parseFile, pos.line + 1, pos.ch + 1, cur.NameSanitized)
                addPrsMsg <| sprintf "InfoFSharp \"%s %A - %A %s \"" cur.NameSanitized (pos.line + 1, pos.ch - sub + 1) (pos.line + 1, pos.ch + add + 1) (tip.Replace("\"","''"))
            } |> Async.Start
        
        let getHints (ed:Template.CodeMirrorEditor, cb, _) =
            async {
                match CodeSnippet.FetchO currentCodeSnippetId.Value with 
                | None     -> ()
                | Some cur ->
                do!  parseIfMustThen true
                let  pos    = ed.GetCursor()
                let  l      = ed.GetLine pos.line
                let  word   = getStartWord l pos.ch     
                let! com    = autoCompleteClient.Complete(parseFile, l, pos.line + 1, pos.ch + 1, cur.NameSanitized)
                cb { Template.list   = com 
                                       |> Array.map (fun (dis, rep, cls, chr) -> 
                                            { text        = rep
                                              displayText = chr + "| " + dis
                                              className   = cls                              
                                            })
                     Template.from   = { pos with ch = pos.ch - word.Length }
                     Template.``to`` = pos 
                   }
            } |> Async.Start
            
        let rex1 = """\((\d+)\) F# (.+).fsx\((\d+)\,(\d+)\): (error|warning) ((.|\b)+)"""
        let rex2 = """(Err|Warning|Info)(FSharp|WebSharper)\s+"(\((\d+)\) ?)?F?#? ?(.+?)(.fsx)? \((\d+)\,\s*(\d+)\) - \((\d+)\,\s*(\d+)\) ((.|\s)+?)""" + "\""
        let rex = rex1 + "|" + rex2
        
        let getAnnotations (txt, cb, _, ed:Template.CodeMirrorEditor) =
            async {
                match CodeSnippet.FetchO currentCodeSnippetId.Value with 
                | None     -> ()
                | Some cur ->
                do!  parseIfMustThen false
                match parserMsgs.Value with
                | REGEX rex "g" m -> m
                | _               -> [||]
                |> Array.choose (fun v ->
                    match v with
                    | REGEX rex2 "" [| _ ; sev; from;  _; indent; file; _; fl; fc; tl; tc; msg; _ |] -> Some (file, indent, int fl, int fc    , int tl, int tc, sev, from , msg)
                    | REGEX rex1 "" [| _ ;                indent; file   ; fl; fc;    sev; msg; _ |] -> Some (file, indent, int fl, int fc - 1, int fl, int fc, sev, "fsi", msg)
                    | _ -> None
                )
                |> Array.choose (fun (file, indent, fl, fc, tl, tc, sev, from, msg) ->
                    if file.StartsWith cur.id.Text || file = sanitize cur.name then
                        let ind = if int indent > 0 then int indent else 0
                        { Template.LintResponse.message  = msg
                          Template.LintResponse.severity = (if sev.ToUpper().StartsWith("ERR") then "error" elif sev.ToUpper().StartsWith("INFO") then "info" else "warning")
                          Template.LintResponse.from     = Template.cmPos(fl - 1, fc - 1 - ind) 
                          Template.LintResponse.``to``   = Template.cmPos(tl - 1, tc - 1 - ind)
                        } |> Some
                    else     None
                  )
                |> cb
            } |> Async.Start
        
        let codeMirror = 
            Template.CodeMirror.New(Val.bindIRef curSnippetCodeOf currentCodeSnippetId)
                .OnChange(setDirtyCond)
                .OnRender(fun ed ->
                  ed.AddKeyMap({  F2              = showToolTip            
                                  LeftDoubleClick = showToolTip
                                  ``Ctrl-Space``  = Template.showHints ed getHints false
                               })
                  Template.setLint ed getAnnotations 
                )
                .Style("height: 100%")
        
        let rec expandParents snp = 
            snp.parent
            |> Option.bind CodeSnippet.FetchO
            |> Option.iter (fun me -> 
                expandParents me
                if not me.expanded then toggleExpanded me)
        
        let goto codeId line col =
            async {
                currentCodeSnippetId.Value <- codeId
                CodeSnippet.FetchO codeId |> Option.iter expandParents
                do! Async.Sleep 200
                codeMirror.editorO 
                |> Option.iter (fun ed -> 
                    ed.SetCursor(line - 1, col - 1) 
                    ed.Focus()
                )
            } |> Async.Start
        
        let rexGuid = """([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}).+?\((\d+)\,\s*(\d+)\)"""
        
        let jumpToLine (line:string) = 
            match line with
            | REGEX rexGuid "" [| _ ; guid ; line ; col |] -> goto <| CodeSnippetId (System.Guid guid) <| int line <| int col
            | _                                            -> ()
        
        let gotoDefinition () =
            async {
                match CodeSnippet.FetchO currentCodeSnippetId.Value with 
                | None     -> ()
                | Some cur ->
                match codeMirror.editorO  with
                | None     -> () 
                | Some ed  ->
                let  pos   = ed.GetCursor()
                let  l     = ed.GetLine pos.line
                let! kind  = autoCompleteClient.FindDecl(parseFile, pos.line + 1, pos.ch + 1, cur.NameSanitized)
                match kind with
                | FSAutoCompleteIntermediary.CommTypes.KFindDecl decl -> jumpToLine <| sprintf "%s (%d, %d) - (%d, %d)" decl.File decl.Line decl.Column decl.Line decl.Column
                | FSAutoCompleteIntermediary.CommTypes.KError    err  -> JS.Alert   <| sprintf "%A" err
                | _                                                   -> JS.Alert   <| sprintf "%A" kind
            } |> Async.Start
        
        let codeMirrorRender = 
            codeMirror.Render.AddChildren [ 
                SomeAttr <| on.dblClick (fun _ _ -> showToolTip codeMirror.editorO.Value)  
                htmlElement "menu" [  // does not work anymore. support for this was dropped by Chrome
                    ``type`` "context"
                    Id       "right-menu"
                    htmlElement "menuitem" [ 
                        htmlAttribute "label" "Goto Definition"
                        SomeAttr <| on.click (fun _ _ -> gotoDefinition() )  
                    ] 
                ]
                htmlAttribute "contextmenu" "right-menu"
            ]
        
        parserMsgs
        |> Val.sink (fun msgs ->
            async {
                if not parsed then () else
                match codeMirror.editorO  with
                | None    -> () 
                | Some ed ->
                match CodeSnippet.FetchO currentCodeSnippetId.Value with 
                | None     -> ()
                | Some cur ->
                let! must = autoCompleteClient.MustParse(parseFile, cur.NameSanitized)
                if must       then () else
                ed?performLint() |> ignore
            } |> Async.Start      
        )
        //let mutable prior = "", ""
        //Val.map2 (fun msgs curO -> msgs, curO) codeMsgs currentCodeSnippetO
        //|> Val.sink (fun (msgs, curO) ->
        //    async {
        //        match codeMirror.editorO  with
        //        | None        -> () 
        //        | Some editor ->
        //            match curO with 
        //            | None -> () 
        //            | Some cur ->
        //            curSnippetNameOf cur.id
        //            |> Val.iter (fun name ->
        //                printfn "RemoveMarks: %s" name
        //                if prior = (msgs, name) then () else
        //                prior   <- (msgs, name)
        //                editor.RemoveMarks()
        //                match msgs with
        //                | REGEX rex "g" m -> m
        //                | _               -> [||]
        //                |> Array.choose (fun v ->
        //                    match v with
        //                    | REGEX rex2 "" [| _ ; sev; from;  _; indent; file; _; fl; fc; tl; tc; msg; _ |] -> Some (file, int fl, int fc - int indent    , int tl, int tc - int indent, sev, from , msg)
        //                    | REGEX rex1 "" [| _ ;                indent; file   ; fl; fc;    sev; msg; _ |] -> Some (file, int fl, int fc - int indent - 1, int fl, int fc - int indent, sev, "fsi", msg)
        //                    | _ -> None
        //                )
        //                |> Array.iter (fun (file, fl, fc, tl, tc, sev, from, msg) ->
        //                    printfn "inside -%s-%s-" file (sanitize name)
        //                    if file.StartsWith cur.id.Text || file = sanitize name then
        //                        100
        //                        |> JS.SetTimeout (fun () ->
        //                            editor.MarkText (fl - 1, fc - 1) (tl - 1, tc - 1) (if sev.ToUpper().StartsWith("ERR") then "Error" else "Warning")  msg)
        //                        |> ignore
        //    
        //                )
        //            )
        //    } |> Async.Start
        //)
        
        let styleEditor    =
             """
        body { margin: 0px }     
             
        div textarea {
        font-family: monospace;
        }
        .code-editor-list-tile {
        white-space: nowrap; 
        border-style: solid none none;
        border-color: white;
        border-width: 1px;
        background-color: #D8D8D8;
        display: flex;
        }
        .code-editor-list-text{
        padding: 1px 10px 1px 5px;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        flex: 1;
        }
        
        .code-editor-list-tile.direct-predecessor {
        font-weight: bold;
        }
        .code-editor-list-tile.indirect-predecessor {
        color: blue;
        }
        .code-editor-list-tile.selected {
        background-color: #77F;
        color: white;
        }
        .code-editor-list-tile.hovering {
        background: lightgray;
        }
        .code-editor-list-tile.hovering.selected {
        background:  blue;
        }
        .code-editor-list-tile>.predecessor {
        font-weight: bold;
        border-style: inset;
        border-width: 1px;
        text-align: center;
        color: transparent;
        }
        .code-editor-list-tile.direct-predecessor>.predecessor {
        color: blue;
        }
        
        .CodeMirror { height: 100%; }
        
        .node {
            background-color:white; 
            width: 2ch; 
            color: #A03; 
            font-weight:bold; 
            text-align: center;
            font-family: arial;
        }
        .Warning { text-decoration: underline lightblue } 
        .Error   { text-decoration: underline red       } 
        .body    { margin         : 0px                 }
            """
        let triggerWSResult = Var.Create ()
        
        let DoW f p _ _ = f p |> Wrap.map ignore |> Wrap.start addOutMsg
        let DoP f p _ _ = f p |> Wrap.startV (function
                                              | Some (Below, _), msgs -> msgs |> addOutMsg ;  triggerWSResult.Value <- ()
                                              | Some _         , msgs -> msgs |> addOutMsg 
                                              | None           , msgs -> "Failed!\n" + msgs |> addOutMsg)
        
        let actLoadFile       = Template.Action.New("Load..."                    ).OnClick(do_LoadFile                  )  
        let actSaveFile       = Template.Action.New("Save as..."                 ).OnClick(Do  downloadFile   ()        ).Highlight(dirty)
        let actAddSnippet     = Template.Action.New("Add Snippet"                ).OnClick(Do  addCode        ()        )
        let actDeleteSnippet  = Template.Action.New("Delete Snippet"             ).OnClick(Do  deleteCode     ()        ).Disabled(noSelectionVal      )
        let actIndentSnippet  = Template.Action.New("Indent In  >>"              ).OnClick(Do  indentCodeIn   ()        ).Disabled(noSelectionVal      )
        let actOutdentSnippet = Template.Action.New("Indent Out <<"              ).OnClick(Do  indentCodeOut  ()        ).Disabled(noSelectionVal      )
        let actGetFsCode      = Template.Action.New("Get F# Code"                ).OnClick(Do  getFSCode      ()        ).Disabled(disableParseVal     )
        let actEvalCode       = Template.Action.New("Evaluate F#"                ).OnClick(DoW evaluateFS     ()        ).Disabled(disableFSIVal       )
        let actRunWSNewTab    = Template.Action.New("Run WebSharper in new tab"  ).OnClick(DoW compileRunP    NewBrowser).Disabled(disableWebSharperVal)
        let actRunWSHere      = Template.Action.New("Run WebSharper in WS Result").OnClick(DoP compileRunP    Below     ).Disabled(disableWebSharperVal)
        let actRunWSIn        = Template.Action.New("Run WebSharper in ..."      ).OnClick(DoP compileRun     ()        ).Disabled(disableWebSharperVal)
        let actParseCode      = Template.Action.New("Parse F#"                   ).OnClick(DoW parseFS        ()        ).Disabled(disableParseVal     )
        let actCompileWS      = Template.Action.New("Compile WebSharper"         ).OnClick(DoW justCompile    ()        ).Disabled(disableWebSharperVal)
        let actFindDefinition = Template.Action.New("Find Definition"            ).OnClick(Do  gotoDefinition ()        ).Disabled(disableParseVal     )
             
        let buttonsH =
            div [ 
                  actAddSnippet    .Button.Render
                  actOutdentSnippet.Button.Render
                  actIndentSnippet .Button.Render
                  loadFileElement.Render.AddChildren([ style "grid-column: 4/6" ])
                  actParseCode     .Button.Render
                  actEvalCode      .Button.Render
                  actGetFsCode     .Button.Render
               
                  actDeleteSnippet .Button.Render
                  actFindDefinition.Button.Render
                  span []       
                  actSaveFile      .Button.Render
                  span []
                  actCompileWS     .Button.Render
                  actRunWSIn       .Button.Render
                  Doc.Select [ attr.id "Position" ] positionTxt [ NewBrowser ; Below ] position |> someElt
                  style """
                      overflow: hidden;
                      display: grid;
                      grid-template-columns: repeat(8, 12.1%);
                      bxackground-color: #eee;
                      padding : 5px;
                      grid-gap: 5px;
                  """
                ]
        
        let menuLeft =
            Menu.New2
              [
                MenuEntry.New("File")
                    .SubMenu(
                            [
                                actLoadFile.MenuEntry
                                actSaveFile.MenuEntry
                            ]           
                    )            
                MenuEntry.New("Code")           
                    .SubMenu(           
                            [           
                                actAddSnippet    .MenuEntry
                                actDeleteSnippet .MenuEntry
                                MenuEntry.New("").Divider           
                                actIndentSnippet .MenuEntry
                                actOutdentSnippet.MenuEntry
                                MenuEntry.New("").Divider           
                                actFindDefinition.MenuEntry
                                MenuEntry.New("").Divider           
                                actGetFsCode     .MenuEntry
                            ]     
                    )      
                MenuEntry.New("Run")     
                    .SubMenu(     
                            [     
                                actEvalCode      .MenuEntry
                                MenuEntry.New("").Divider     
                                actRunWSNewTab   .MenuEntry
                                actRunWSHere     .MenuEntry
                                MenuEntry.New("").Divider     
                                actParseCode     .MenuEntry
                                actCompileWS     .MenuEntry
                            ]
                    ) 
              ]
        
        let menuRight =
            Menu.New2
              [
                MenuEntry.New("About")
              ]      
        
        let menuBar =
            navbar <| h1 [ htmlText "F# Station" ; style "font-size: 48px; margin-top: -17px" ]
                   <| menuLeft .Render 
                   <| menuRight.Render
                   
        ()           
        //let setProp k v = props.[k] <- v
        
        let redraw = Var.Create ()
        let setDirtyP () = dirty.Value <- true
        
        let tableProps =
          currentCodeSnippetId
          |> Val.bind (curSnippetPrpsOf >> DynamicV)
          |> Val.map2 (fun () (props: Dictionary<string,string>) ->
              table [
                yield thead [
                    th [ htmlText "Property" ; style "padding-right:10px" ] 
                    th [ htmlText "Value"                                 ] 
                ] 
                yield! 
                    props.Keys
                    |> Seq.map (fun kvp ->
                        let prop = Property(setDirtyP, props, kvp)
                        tr [
                            td [ Doc.Input [] prop.KeyVar   |> someElt ] 
                            td [ Doc.Input [] prop.ValueVar |> someElt ] 
                            td [ title "remove" ; style " cursor: pointer "
                                 htmlText "x" ; SomeAttr <| on.click (fun _ _ ->  prop.Remove()                    ; redraw.Value <- () ) ] |> hoverable
                        ])
                yield tr [
                    td [ htmlText "Add..."    ; SomeAttr <| on.click (fun _ _ ->  props.Add("", "1") ; setDirtyP() ; redraw.Value <- () ) ] |> hoverable
                    td [ htmlText ""    ] 
                ]
              ]
          ) redraw
        
        let properties =
            div [
              HtmlElementV tableProps
              css """ td.hovering { background: gray; } """
            ]
        
        ()
        let spl1         = Template.SplitterBar.New(20.0).Children([ style "grid-row: 2 / 4" ])
        storeVarCodeEditor "splitterV1" spl1.Var
        //storeVarCodeEditor "splitterV2" splitterV2.Var
        //storeVarCodeEditor "splitterH3" splitterH3.Var
        
        let jumpToRef (e:obj) _ = 
            let v : string = e?value |> unbox
            let s : int    = e?selectionStart |> unbox
            let lines = v.Split '\n'
            lines 
            |> Seq.mapFold (fun total line -> (line, total, total + line.Length + 1), total + line.Length + 1) 0 
            |> fst
            |> Seq.pick (fun (line, from, to_) -> if s >= from && s < to_ then Some line else None)
            |> jumpToLine
        
        let Messages =
            [
             "Output"    , Template.TextArea.New(outputMsgs).Placeholder("Output:"         ).Title("Output"                   ).RenderWith [ on.dblClick jumpToRef ]
             "Parser"    , Template.TextArea.New(parserMsgs).Placeholder("Parser messages:").Title("Parser"                   ).RenderWith [ on.dblClick jumpToRef ]
             "JavaScript", Template.TextArea.New(codeJS    ).Placeholder("Javascript:"     ).Title("JavaScript code generated").Render
             "F# code"   , Template.TextArea.New(codeFS    ).Placeholder("F# code:"        ).Title("F# code assembled"        ).Render
             "WS Result" , div [ div [ Id "TestNode" ; style "background: white; height: 100%; width: 100%; "] ]
            ]
            
        (*
        let CodeEditor() =
          Template.Grid.New
             .ColVariable(spl1)
             .ColAuto(     0.0)
             .ColVariable( 0.0).Min(0.0).Max(Val.map ((-) 92.0) spl1.GetValue).Before.Children([ style "grid-row   : 1 / 5" ])
             .RowFixedPx( 34.0) 
             .RowAuto(     0.0)
             .RowVariable(17.0)                                               .Before.Children([ style "grid-column: 2 / 3" ])
             .RowFixedPx( 80.0)
             .Padding(1.0)
             .Content("sidebar", 
                 codeSnippets.View
                 |> View.SnapshotOn codeSnippets.Value refresh.View
                 |> bindHElem listEntries
              )
             .Content("header"  , Template.Input     .New(Val.bindIRef curSnippetNameOf currentCodeSnippetId).Prefix(htmlText "name:")         .Render)
             .Content("content1", codeMirror                                                                                                   .Render)
             .Content("content2", Template.TabStrip  .New(Messages).Top                                                                        .Render)
             .Content("footer"  ,       
                div [ 
                      actAddSnippet    .Button.Render
                      actOutdentSnippet.Button.Render
                      actIndentSnippet .Button.Render
                      loadFileElement.Render.AddChildren([ style "grid-column: 4/6" ])
                      actParseCode     .Button.Render
                      actEvalCode      .Button.Render
                      actGetFsCode     .Button.Render
               
                      actDeleteSnippet .Button.Render
                      span []       
                      span []       
                      actSaveFile      .Button.Render
                      span []
                      actCompileWS     .Button.Render
                      actRunWSIn       .Button.Render
                      Doc.Select [ attr.id "Position" ] positionTxt [ Below ; Right ; NewBrowser ] position |> someElt
                      style """
                          overflow: hidden;
                          display: grid;
                          grid-template-columns: repeat(8, 12.1%);
                          bxackground-color: #eee;
                          padding : 5px;
                          grid-gap: 5px;
                      """
                    ]
                )
             .Content( script [ src  "/EPFileX/FileSaver/FileSaver.js"                                     ; ``type`` "text/javascript"             ] )
             .Content( script [ src  "http://code.jquery.com/jquery-3.1.1.min.js"                          ; ``type`` "text/javascript"             ] )
             .Content( script [ src  "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"  ; ``type`` "text/javascript"             ] )
             .Content( link   [ href "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"; ``type`` "text/css" ; rel "stylesheet" ] )
             .Content( link   [ href "/EPFileX/css/main.css"                                               ; ``type`` "text/css" ; rel "stylesheet" ] )
             .Content( css styleEditor                                                                                                                )
             .Render
             .Style(""" 
                    grid-template-areas:
                        'header0 header   sidebar2'
                        'sidebar content1 sidebar2'
                        'sidebar content2 sidebar2'
                        'footer  footer   sidebar2';
                    color      : #333;
                    height     : 100%;
                    font-size  : small;
                    font-family: monospace;
                    line-height: 1.2;
                        """)
        
        *)
        ()
        let snippetList = 
            codeSnippets.View
               |> View.SnapshotOn codeSnippets.Value refresh.View
               |> bindHElem listEntries
               
        let inline fixedHorSplitter1 px ch1 ch2 =
            let grid = Grid.New.Content("one", renderSplitterNode ch1)
                               .Content("two", renderSplitterNode ch2).Padding(0.0)
            grid.RowFixedPx(px).RowAuto(50.0).Content( style "grid-template-areas: 'one' 'two' " ).Render
        
        let inline fixedHorSplitter2 px ch1 ch2 =
            let grid = Grid.New.Content("one", renderSplitterNode ch1)
                               .Content("two", renderSplitterNode ch2).Padding(0.0)
            grid.RowAuto(50.0).RowFixedPx(px).Content( style "grid-template-areas: 'one' 'two' " ).Render
        
        let title          = SHtmlNode <| Template.Input.New(Val.bindIRef curSnippetNameOf currentCodeSnippetId).Prefix(htmlText "name:").Render
        let messagesT      = STabStrip <| TabStrip.New([]      ).Bottom
        let messagesB      = STabStrip <| TabStrip.New(Messages).Top
        let messagesL      = STabStrip <| TabStrip.New([]      ).Top   .Vertical
        let messagesR      = STabStrip <| TabStrip.New([ "Properties", properties ]).Top   .Vertical
        let code           = SHtmlNode <| codeMirrorRender
        let snippets       = SHtmlNode <| snippetList
        let buttons        = SHtmlNode <| buttonsH
        let menu           = SHtmlNode <| menuBar
        
        let inline fixedHorSplitter first            px  ch1 ch2 = Grid.NewBisect(first, StFixedPx , false, px , renderSplitterNode ch1, renderSplitterNode ch2)                  .Render
        let inline split (min:float) (max:float) ver per ch1 ch2 = Grid.NewBisect(true , StVariable, ver  , per, renderSplitterNode ch1, renderSplitterNode ch2).Min(min).Max(max).Render
        
        let title_code     = SplitterStructure.New(       title         , code          , fixedHorSplitter true  34.0)
        let code_buttons   = SplitterStructure.New(       title_code    , buttons       , fixedHorSplitter false 80.0)
        let snippets_code  = SplitterStructure.New(true , snippets      , code_buttons  ,                        15.0)
        let main_messagesB = SplitterStructure.New(       snippets_code , messagesB     , split 30. 100. false   82.0)
        let main_messagesT = SplitterStructure.New(       messagesT     , main_messagesB, split  0.  75. false    0.0)
        let main_messagesR = SplitterStructure.New(       main_messagesT, messagesR     , split 25. 100. true    92.0)
        let main_messagesL = SplitterStructure.New(       messagesL     , main_messagesR, split  0.  75. true     0.0)
        let main_window    = SplitterStructure.New(       menu          , main_messagesL, fixedHorSplitter true  50.0)
        
        //let code_messages = SplitterStructure.New(false, title_Code           , STabStrip messages,                   75.0)
        //let main_Buttons  = SplitterStructure.New(       snippets_code        , SHtmlNode buttons                 , fixedHorSplitter2 80.0)
        
        let rootSplitter = SplitterNode.New(main_window)
        
        Val.sink (fun _ -> rootSplitter.SelectTab "Output"    |> ignore ) outputMsgs 
        Val.sink (fun _ -> rootSplitter.SelectTab "Parser"    |> ignore ) parserMsgs 
        Val.sink (fun _ -> rootSplitter.SelectTab "WS Result" |> ignore ) triggerWSResult 
        
        div [
            style "height: 100vh; width: 100% "
            rootSplitter.Render.Style("height: 100%; width: 100% ")
            script [ src  "/EPFileX/FileSaver/FileSaver.js"                                     ; ``type`` "text/javascript"             ]
            script [ src  "http://code.jquery.com/jquery-3.1.1.min.js"                          ; ``type`` "text/javascript"             ]
            script [ src  "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"  ; ``type`` "text/javascript"             ]
            link   [ href "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"; ``type`` "text/css" ; rel "stylesheet" ]
            link   [ href "/EPFileX/css/main.css"                                               ; ``type`` "text/css" ; rel "stylesheet" ]
            css styleEditor                                                                                                               
            style  """ 
                  color      : #333;
                  font-size  : small;
                  font-family: monospace;
                  line-height: 1.2;
                      """
        ] |> renderDoc 
        
        
      // Version using internal Rpc's
      //#define FSS_SERVER
      //#define NOMESSAGING
      
      open WebSharper.Sitelets
      open WebSharper.UI.Next.Server
      open WebSharper.UI.Next
      
      type EndPoint = 
          | [< EndPoint "/" >] EPStart
          | EPLoad of string
      
      let FSharpStationPage uri =
          Content.Page(
              Title = "F# Station"
            , Head  = [ Html.scriptAttr [ attr.``type`` "text/javascript"; attr.src "https://code.jquery.com/jquery-3.1.1.min.js"] [] 
                        Html.scriptAttr [ attr.``type`` "text/javascript"; attr.src "/EPFileX/CIPHERSpaceLoadFiles.js"           ] [] 
                      ]
            , Body  = [ Html.client <@  FSharpStationClient uri @> ])
      
      let content (ctx:Context<EndPoint>) (endpoint:EndPoint) : Async<Content<EndPoint>> =
          printfn "%A" endpoint
          match endpoint with
          | EPStart     -> FSharpStationPage ""
          | EPLoad  uri -> uri |> System.Web.HttpUtility.UrlDecode |> System.Web.HttpUtility.UrlDecode |> FSharpStationPage
      
      let site = Application.MultiPage content
      
      //#r @"..\packages\Owin\lib\net40\Owin.dll"
      //#r @"..\packages\Microsoft.Owin\lib\net45\Microsoft.Owin.dll"
      //#r @"..\packages\Microsoft.Owin.Hosting\lib\net45\Microsoft.Owin.Hosting.dll"
      //#r @"..\packages\Microsoft.Owin.Host.HttpListener\lib\net45\Microsoft.Owin.Host.HttpListener.dll"
      //#r @"..\packages\Microsoft.Owin.StaticFiles\lib\net45\Microsoft.Owin.StaticFiles.dll"
      //#r @"..\packages\Microsoft.Owin.FileSystems\lib\net45\Microsoft.Owin.FileSystems.dll"
      //#r @"..\packages\Zafir.Owin\lib\net45\WebSharper.Owin.dll"
      //#r @"..\packages\Zafir.Owin\lib\net45\HttpMultipartParser.dll"
      //#r @"WebSharper.Core.JavaScript.dll"
      //#r @"..\packages\FSharp.Compiler.Service\lib\net45\FSharp.Compiler.Service.dll"
      
      open global.Owin
      open Microsoft.Owin.Hosting
      open Microsoft.Owin.StaticFiles
      open Microsoft.Owin.FileSystems
      open WebSharper.Owin
      
      WebSharper.Web.Remoting.AddAllowedOrigin "http://localhost"
      WebSharper.Web.Remoting.AddAllowedOrigin "http://*"
      WebSharper.Web.Remoting.AddAllowedOrigin "file://"
      WebSharper.Web.Remoting.DisableCsrfProtection()
      
      [< EntryPoint >]
      let Main args =
          let rootDirectory, url =
              match args with
              | [| rootDirectory; url |] -> rootDirectory, url
              | [| url                |] -> "website"    , url
              | [|                    |] -> "website"    , "http://localhost:9010/"
              | _ -> eprintfn "Usage: WebServer3 ROOT_DIRECTORY URL"; exit 1
          use server = 
              WebApp.Start(url, fun appB ->
                  appB.UseWebSharper(WebSharperOptions(ServerRootDirectory = rootDirectory
                                                     , Sitelet             = Some site
                                                     , BinDirectory        = "."
                                                     , Debug               = true))
                      .UseStaticFiles(StaticFileOptions(FileSystem = PhysicalFileSystem(rootDirectory)))
                                  |> ignore
                  let listener = appB.Properties.["Microsoft.Owin.Host.HttpListener.OwinHttpListener"] |> unbox<Microsoft.Owin.Host.HttpListener.OwinHttpListener>
                  listener.SetRequestProcessingLimits(1000, 1000)
                  let maxA : int ref = ref 0
                  let maxB : int ref = ref 0
                  listener.GetRequestProcessingLimits(maxA, maxB)
                  printfn "Accepts: %d Requests:%d" !maxA !maxB
              )
          stdout.WriteLine("Serving {0}", url)
          stdin.ReadLine() |> ignore
          0
          
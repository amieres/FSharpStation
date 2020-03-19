#nowarn "3242"
#nowarn "1178"
#nowarn "1182"
#nowarn "3180"
////-d:FSharpStation1582852307361 -d:NETSTANDARD2_0 -d:TEE
//#I @"C:\Users\Abelardo\Source\Repos\UnoTestWasm\UnoTestWasm.Wasm\bin\Debug\netstandard2.0"
//#r @"D:\Abe\CIPHERWorkspace\WASM\sample\dlls\FSharp.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\WASM\wasm-bcl\wasm\mscorlib.dll"
//#r @"System.Threading.dll"
//#r @"System.Threading.Tasks.dll"
//#r @"System"
//#r @"System.IO"
//#r @"System.Collections"
//#r @"System.Globalization"
//#r @"System.Runtime.dll"
//#r @"System.Numerics.dll"
//#r @"netstandard.dll"
//#r @"FSharp.Compiler.Interactive.Settings"
//#r @"FSharp.Compiler.Private"
//#r @"fsi.exe"
//#nowarn "3242"
//#nowarn "1178"
//#nowarn "1182"
//#nowarn "3180"
/// Root namespace for all code
//#define FSharpStation1582852307361
#if INTERACTIVE
module FsRoot   =
#else
#if DLL
namespace FsRootDll
#else
namespace FsRoot
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
                    let errorMsgf   fmt = Printf.ksprintf (ErrorMsg >> ErrorM >> async.Return) fmt
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
                    let absorbR   vRRA                         = vRRA |> Async.map (ResultM.bindP   id)
                    let absorbO f vORA                         = vORA |> Async.map (ResultM.absorbO  f)
                    let getResultM       (a:AsyncResultM<_,_>) = a    |> Async.map  OkM   
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
                
                    module Operators =
                        let inline (|>>) v f   = map   f v
                        let inline (>>=) v f   = bind  f v
                        let inline (>->) f g v = f v |>> g
                        let inline (>=>) f g v = f v >>= g
                        let inline rtn   v     = rtn    v
                
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
                
        /// Essentials that cannot run in Javascript (WebSharper)
        [< AutoOpen >]
        module LibraryNoJS =
            [< AutoOpen >]
            module Regex =
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
            
                module p =
            
                    let cr        = @"\r"
                    let nl        = @"\n"
                    let anychar   =  "."
                    let tab       = @"\t"
                    let blank     = @"\s"
                    let noblank   = @"\S"
                    let capt      = sprintf "(%s)"
                    let nocapt    = sprintf "(?:%s)"
                    let opt       = nocapt >> sprintf "%s?"
                    module g =
                        let inline anything mny        = mny anychar
                        let inline blanks   mny        = mny blank
                        let inline noblanks mny        = mny noblank
                        let inline spaceaft mny  x     = x + blanks mny
                        let inline listof1  mny0 x sep = x + mny0(sep + x)
            
                    module e =
                        let inline many0 a = nocapt a + "*"
                        let inline many1 a = nocapt a + "+"
            
                    module e1 =
                        let many                = e.many1
                        let anything            = g.anything  many
                        let blanks              = g.blanks    many
                        let noblanks            = g.noblanks  many
                        let spaceaft            = g.spaceaft  many
                        let inline listof x sep = g.listof1 e.many0 x sep
            
                    module e0 =
                        let many                = e.many0
                        let anything            = g.anything many
                        let blanks              = g.blanks   many
                        let noblanks            = g.noblanks many
                        let spaceaft            = g.spaceaft many
                        let inline listof x sep = e1.listof x sep |> opt
            
                    module l =
                        let many0 a   = e.many0 a + "?"
                        let many1 a   = e.many1 a + "?"
            
                    module l1 =
                        let many                = l.many1
                        let anything            = g.anything  many
                        let blanks              = g.blanks    many
                        let noblanks            = g.noblanks  many
                        let spaceaft            = g.spaceaft  many
                        let inline listof x sep = g.listof1 l.many0 x sep
            
                    module l0 =
                        let many                = l.many0
                        let anything            = g.anything many
                        let blanks              = g.blanks   many
                        let noblanks            = g.noblanks many
                        let spaceaft            = g.spaceaft many
                        let inline listof x sep = l1.listof x sep |> opt
            
                    let either patterns = patterns |> String.concat "|" |> nocapt
                    let word      = sprintf "\\b%s\\b"
                    let oneof     = sprintf "[%s]"
                    let noneof    = sprintf "[^%s]"
            
                    let multiline  = either [ cr ; nl ; anychar ] |> l.many0
                    let letter     = oneof "_a-zA-Z"
                    let digit      = oneof "0-9"
                    let letters    = e.many1 letter
                    let digits     = e.many1 digit
                    let ident      = letter + (either [letter ; digit] |> l.many0) |> word
                    let dottedid   = e1.listof ident (e0.spaceaft "\.")
                    let typename   = dottedid + opt (@"<" + e1.listof dottedid (e0.spaceaft ",") + "\>")
            
                    let regmatch regex = function Regex regex ms -> Some ms |_-> None
            
                module r =
                    open p
            
                    let remove patterns = p.either patterns, ""
            
                    let tabs     = p.tab                , "    "
                    let comments = @"\/\/" + e1.anything, "\n"
            
                    let regexReplace (regex:string) (repl:string) (input:string) = 
                        System.Text.RegularExpressions
                            .Regex(regex)
                            .Replace(input, repl)
            
                    let replaceToF (regex, repl) = regexReplace regex repl
                    let replacesToFs rs = rs |> Seq.map replaceToF
                    let replace0 repls inp = repls |> Seq.fold (fun txt (regex, repl) -> regexReplace txt regex repl) inp
                    let replace1 v = replacesToFs v |> Seq.reduce (>>)
            
                    let byLine init st f (inp:string) =
                        inp.Split '\n'
                        |> Array.mapFold (fun md ln -> 
                            match st ln with
                            | Some nm -> ln     , nm
                            |_        -> f md ln, md
                        ) init
                        |> fst
                        |> String.concat "\n"
            
    
    //#I @"D:\Abe\CIPHERWorkspace\WASM\framework"
    //#I @"D:\Abe\CIPHERWorkspace\WASM\wasm-bcl\wasm\Facades"
    //#I @"D:\Abe\CIPHERWorkspace\WASM\wasm-bcl\wasm"
    //#I @"D:\Abe\CIPHERWorkspace\WASM\sample\dlls"
    //#I @"C:\Users\Abelardo\Source\Repos\UnoTestWasm\UnoTestWasm.Wasm\bin\Debug\netstandard2.0"
    //#r @"D:\Abe\CIPHERWorkspace\WASM\sample\dlls\FSharp.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\WASM\wasm-bcl\wasm\mscorlib.dll" 
    //#r  "System.Threading.dll"
    //#r  "System.Threading.Tasks.dll"
    //#r  "System"
    //#r  "System.IO"
    //#r  "System.Collections"
    //#r  "System.Globalization"
    //#r  "System.Runtime.dll"
    //#r  "System.Numerics.dll"
    //#r  "netstandard.dll"
    //#r  "Microsoft.JSInterop"
    //#r  "WebAssembly.Bindings"
    //#r  "FSharp.Compiler.Service.dll"
    //#r  "Mono.Cecil"
    //#r  "WebSharper.Core.dll"
    //#r  "WebSharper.Compiler.FSharp"
    //#r  "WebSharper.Compiler"
    //#r  "wsfsc.dll"
    //#I @"C:\Program Files\dotnet\sdk\3.0.100\FSharp"
    //#r  "FSharp.Compiler.Interactive.Settings"
    //#r  "FSharp.Compiler.Private"
    //#r  "fsc.exe"
    //#r  "fsi.exe"
    //#r  "WebAssembly.Net.Http.dll"
    
    //#define NETSTANDARD2_0
    //#nowarn "1178" 
    //#nowarn "1182"
    //#nowarn "3180"
    
    //module WsTranslate2 =
    //    open System
    //    open System.IO
    //    open System.Reflection
    //    
    //    module Re = WebSharper.Core.Resources
    //    module P  = WebSharper.PathConventions
    //    open WebSharper.Compiler
    //    open WebSharper.Compiler.FrontEnd
    //    open WebSharper.Core
    //    open WebSharper.Core.Resources
    //    open WebSharper.Compiler.CommandTools
    //    open Microsoft.FSharp.Compiler.SourceCodeServices
    //    open Microsoft.FSharp.Compiler
    //
    //    let getIndentFile input =
    //        match input with
    //        | Regex "^\\((\\d+)\\)\\s(.*)$" [_ ; indent ; file] -> int indent, file
    //        | _                                                 -> 0         , input    
    //            
    //    type WebSharperError   = AST.SourcePos option * CompilationError
    //    type WebSharperWarning = AST.SourcePos option * CompilationWarning
    //    type TranslatorError =
    //        | MustProvideAssemblyOutputPath
    //        | MustProvideProjectPath
    //        | NothingToTranslateToJavaScript
    //        | WebSharperCompilerReturnedNone
    //        | OutputAssemblyNotFound         of string
    //        | FSharpError                    of string
    //        | FSharpWarning                  of string
    //        | WebSharperError                of string
    //        | WebSharperWarning              of string
    //
    //    let countTranslatorError =
    //        function
    //        | FSharpWarning     _
    //        | WebSharperWarning _ -> 0, 1, 0
    //        |                   _ -> 1, 0, 0
    //
    //    let fSharpError2TranslatorError (error : FSharpErrorInfo) =
    //        let indent, file = System.IO.Path.GetFileNameWithoutExtension error.FileName |> getIndentFile  
    //        sprintf "%s (%d,%d) - (%d,%d) %s %d: %s" 
    //            file 
    //            error.StartLineAlternate (error.StartColumn - indent) 
    //            error.EndLineAlternate   (error.EndColumn   - indent) 
    //            error.Subcategory error.ErrorNumber error.Message
    //        |> (if   error.Severity = FSharpErrorSeverity.Error  
    //            then FSharpError
    //            else FSharpWarning
    //        )
    //        |> Message
    //        
    //    let webSharperError2TranslatorError: WebSharperError -> ResultMessage<_> =
    //        fun                              (posO, error)   ->
    //            posO 
    //            |> Option.map (fun pos -> sprintf "%s %A - %A " pos.FileName pos.Start pos.End )
    //            |> Option.defaultValue ""
    //            |> sprintf "%s%s" <| error.ToString()
    //            |> WebSharperError
    //            |> Message
    //            
    //    let webSharperWarning2TranslatorError: WebSharperWarning -> ResultMessage<_> =
    //        fun                                (posO, error)     ->
    //            posO 
    //            |> Option.map (fun pos -> sprintf "%s %A - %A " pos.FileName pos.Start pos.End )
    //            |> Option.defaultValue ""
    //            |> sprintf "%s%s" <| error.ToString()
    //            |> WebSharperWarning
    //            |> Message
    //            
    //    let PrintGlobalError err = eprintfn "WebSharper error FS9001: %s" (ErrorPrinting.NormalizeErrorString err)
    //
    //    let CompileToJsW: WsConfig -> AsyncResultM<string, TranslatorError> =
    //        fun           config   -> asyncResultM {
    //            if config.ProjectFile  = null then do! Message  MustProvideProjectPath
    //            if config.AssemblyFile = null then do! Message  MustProvideAssemblyOutputPath
    //            //let xx = AsyncResultM.getResultM() |> ResultM.failIfFatalMsg
    //            //do!  AsyncResultM.getResultM() |> ResultM.failIfFatalMsg
    //            let  fsharpChecker       = FSharpChecker.Create( keepAssemblyContents = true)
    //            let! errors, exitCode    = fsharpChecker.Compile(config.CompilerArgs |> Array.append [| "fsc.exe" |] )
    //            do!  errors |> Seq.map fSharpError2TranslatorError |> ResultMessage.reduceMsgs
    //            //if exitCode = 0 then do! ErrorM NoMsg
    //            if File.Exists config.AssemblyFile |> not then do! Message (OutputAssemblyNotFound config.AssemblyFile) 
    //            printfn "before: let  assemblyBytes       = File.ReadAllBytes config.AssemblyFile"
    //            let  assemblyBytes       = File.ReadAllBytes config.AssemblyFile
    //            do   System.IO.File.Delete config.AssemblyFile
    //            let  paths               = [   for r in config.References -> 
    //                                               Path.GetFullPath r
    //                                           yield Path.GetFullPath config.AssemblyFile
    //                                       ]        
    //            printfn "before: let  aR                  = AssemblyResolver.Create().SearchPaths(paths)"
    //            let  aR                  = AssemblyResolver.Create().SearchPaths(paths)
    //            printfn "before: let  loader              = Loader.Create aR (printfn \"%%s\")"
    //            let  loader              = Loader.Create aR (printfn "%s")
    //            let  refs                = [ for r in config.References -> loader.LoadFile(r, false) ]
    //            printfn "before: let wsRefsMeta ="
    //            let wsRefsMeta =
    //                System.Threading.Tasks.Task.Run(fun () ->
    //                    let mutable refError = false
    //                    let wsRefs, metas = 
    //                        refs |> List.choose (fun r -> 
    //                            match TryReadFromAssembly FullMetadata r with
    //                            | None -> None
    //                            | Some (Ok m) -> Some (r, m)
    //                            | Some (Error e) ->
    //                                refError <- true
    //                                PrintGlobalError e
    //                                None
    //                        ) |> List.unzip
    //                    if refError then None
    //                    elif List.isEmpty metas then Some ([], [], WebSharper.Core.Metadata.Info.Empty) 
    //                    else
    //                        try
    //                            Some (
    //                                wsRefs, metas,
    //                                { 
    //                                    WebSharper.Core.Metadata.Info.UnionWithoutDependencies metas with
    //                                        Dependencies = WebSharper.Core.DependencyGraph.Graph.NewWithDependencyAssemblies(metas |> Seq.map (fun m -> m.Dependencies)).GetData()
    //                                }
    //                            )
    //                        with e ->
    //                            refError <- true
    //                            PrintGlobalError ("Error merging WebSharper metadata: " + e.Message)
    //                            None
    //                )
    //            printfn "before: let  refMeta = wsRefsMeta.ContinueWith(fun (t: System.Threading.Tasks.Task<_>) -> "
    //            let  refMeta = wsRefsMeta.ContinueWith(fun (t: System.Threading.Tasks.Task<_>) -> 
    //                                match t.Result with 
    //                                | Some (_, _, m) -> Some m 
    //                                | _ -> None )
    //            let  referencedAsmNames     = paths
    //                                          |> Seq.map (fun i -> 
    //                                              let n = Path.GetFileNameWithoutExtension(i)
    //                                              n, i
    //                                          ) |> Map.ofSeq
    //            let  thisName               = Path.GetFileNameWithoutExtension config.AssemblyFile
    //            printfn "before: let  assemblyResolveHandler = ResolveEventHandler(fun _ e ->"
    //            let  assemblyResolveHandler = ResolveEventHandler(fun _ e ->
    //                    //printfn "assemblyResolveHandler %s" e.Name
    //                    let assemblyName    = AssemblyName(e.Name).Name
    //                    match Map.tryFind assemblyName referencedAsmNames with
    //                    | Some p when assemblyName = "FSharp.Core" -> typeof<option<_>>.Assembly
    //                    | Some p when assemblyName = thisName      -> Assembly.Load assemblyBytes
    //                    | Some p                                   -> Assembly.LoadFrom(p)
    //                    | _                                        -> null
    //                )
    //            System.AppDomain.CurrentDomain.add_AssemblyResolve(assemblyResolveHandler)
    //            printfn "before: let! comp        = WebSharper.Compiler.FSharp.WebSharperFSharpCompiler(printfn \"%%s\", fsharpChecker)"
    //            let! comp        = WebSharper.Compiler.FSharp.WebSharperFSharpCompiler(printfn "%s", fsharpChecker)
    //                                        .Compile(refMeta, config.CompilerArgs, config, config.ProjectFile) 
    //                                |> Result.ofOption (fun () -> Message WebSharperCompilerReturnedNone )
    //            printfn "do!  comp.Errors   |> Seq.map webSharperError2TranslatorError   |> ResultMessage.reduceMsgs"
    //            do!  comp.Errors   |> Seq.map webSharperError2TranslatorError   |> ResultMessage.reduceMsgs
    //            do!  comp.Warnings |> Seq.map webSharperWarning2TranslatorError |> ResultMessage.reduceMsgs
    //            do!  comp.Errors   |> Seq.isEmpty |> Result.failIfFalse NoMsg
    //            printfn "before: let  assem       = loader.LoadRaw assemblyBytes None"
    //            let  assem       = loader.LoadRaw assemblyBytes None
    //            let  getRefMeta()= match wsRefsMeta.Result with | Some (_, _, m) -> m | _ -> WebSharper.Core.Metadata.Info.Empty
    //            let jsO, currentMeta, sources = ModifyAssembly (Some comp) 
    //                                              (getRefMeta()) 
    //                                              (comp.ToCurrentMetadata(config.WarnOnly)) 
    //                                              config.SourceMap config.AnalyzeClosures assem
    //            let! js, jsMin   = jsO |> ResultM.ofOption (fun () -> Message NothingToTranslateToJavaScript)
    //            let  thisProject = Path.GetFileNameWithoutExtension config.ProjectFile
    //            printfn "before: use  stringW     = new System.IO.StringWriter()"
    //            use  stringW     = new System.IO.StringWriter()
    //            use  writer      = new HtmlTextWriter(stringW)
    //            let  pu          = P.PathUtility.VirtualPaths("/")
    //            let ctx : Resources.Context =
    //                {
    //                    WebRoot                 = ""
    //                    DebuggingEnabled        = true
    //                    DefaultToHttp           = false
    //                    GetSetting              = fun (name: string) -> None //printfn "GetSetting %s" name ; None
    //
    //                    GetAssemblyRendering    = fun name ->
    //                        //printfn "GetAssemblyRendering %s" name
    //                        if name = thisProject || name = config.ProjectFile
    //                        then WebSharper.Core.Resources.Rendering.Skip else
    //                        name
    //                        |> P.AssemblyId.Create
    //                        |> pu.JavaScriptPath 
    //                        |> Re.RenderLink
    //                    GetWebResourceRendering = fun ty resource ->
    //                        //printfn "GetWebResourceRendering %A" ty
    //                        let id = P.AssemblyId.Create(ty)
    //                        let kind =
    //                            if resource.EndsWith(".js") || resource.EndsWith(".ts")
    //                                then P.ResourceKind.Script
    //                                else P.ResourceKind.Content
    //                        P.EmbeddedResource.Create(kind, id, resource)
    //                        |> pu.EmbeddedPath
    //                        |> Re.RenderLink
    //                    RenderingCache          = System.Collections.Concurrent.ConcurrentDictionary()
    //                    ResourceDependencyCache = System.Collections.Concurrent.ConcurrentDictionary()
    //                    ScriptBaseUrl = None
    //                }            
    //            printfn "before: comp.Graph.Nodes |> comp.Graph.GetDependencies |> comp.Graph.GetResources |> Seq.iter(fun r -> r.Render ctx (fun _ -> writer) )"
    //            comp.Graph.Nodes |> comp.Graph.GetDependencies |> comp.Graph.GetResources |> Seq.iter(fun r -> r.Render ctx (fun _ -> writer) )
    //            //js.RenderDependencies(ctx, writer)
    //            let  includes = stringW.ToString()
    //            let  incs     = includes.Split([| "src="; "href=" ; "<" ; ">" |], System.StringSplitOptions.RemoveEmptyEntries)
    //                            |> Seq.choose(fun v -> if v.[0] = '"' then v.Split([| '"' |], System.StringSplitOptions.RemoveEmptyEntries).[0] |> sprintf "%A" |> Some else None)
    //                            |> String.concat ", "
    //            let  f        = js.[1..js.Length - 7] 
    //            return          (sprintf "CIPHERSpaceLoadFiles([%s], %s);" incs f)
    //        }
    //
    //    let compileMainW: string[] -> AsyncResultM<_, _> =
    //      fun             argv     ->
    //        let resSplit (r:string) = 
    //            match r.Split(',') with 
    //            | [| res           |] -> (res, None         )
    //            | [| res; fullName |] -> (res, Some fullName)
    //            | _ -> argError ("Unexpected value --resource:" + r)
    //        let wsArgs    = ref WsConfig.Empty
    //        let refs      = ResizeArray()
    //        let resources = ResizeArray()
    //        let fscArgs   = ResizeArray()
    //        let cArgv     =
    //            [|
    //                let isRNext = ref false
    //                for a in argv do
    //                    match a.Replace("\"", "") with
    //                    | "-r"   -> isRNext := true
    //                    | v      -> if !isRNext then
    //                                    isRNext := false   
    //                                    yield "-r:" + v
    //                                else
    //                                    yield v
    //            |]
    //        for a in cArgv do
    //            let setProjectType t = wsArgs := { !wsArgs with ProjectType = Some t }
    //            try
    //                match a with
    //                | "--wig"                          -> setProjectType WIG
    //                | "--bundle"                       -> setProjectType Bundle
    //                | "--bundleonly"                   -> setProjectType BundleOnly
    //                | "--html"                         -> setProjectType Html
    //                | "--site"                         -> setProjectType Website
    //                | StartsWith "--ws:" wsProjectType ->
    //                    match wsProjectType.ToLower() with
    //                    | "site" 
    //                    | "web" 
    //                    | "website" 
    //                    | "export"                     -> setProjectType Website
    //                    | "extension"                  
    //                    | "interfacegenerator"         -> setProjectType WIG
    //                    | "bundle"                     -> setProjectType Bundle
    //                    | "html"                       -> setProjectType Html
    //                    | "ignore"                     -> ()
    //                    | "library"                    -> ()
    //                    | _                            -> invalidArg "type" ("Invalid project type: " + wsProjectType)
    //                | StartsWith "--project:"        p -> wsArgs := { !wsArgs with ProjectFile   = p      } //Path.Combine(Directory.GetCurrentDirectory(), p) }
    //                | StartsWith "--wsoutput:"       o -> wsArgs := { !wsArgs with OutputDir     = Some o }
    //                | StartsWith "--jsoutput:"       j -> wsArgs := { !wsArgs with JSOutputPath  = Some j }
    //                | StartsWith "--keyfile:"        k -> wsArgs := { !wsArgs with KeyFile       = Some k }
    //                | "--jsmap+"
    //                | "--jsmap"                        -> wsArgs := { !wsArgs with SourceMap     = true   } 
    //                | "--dts"                          -> wsArgs := { !wsArgs with TypeScript    = true   } 
    //                | "--wswarnonly"                   -> wsArgs := { !wsArgs with WarnOnly      = true   } 
    //                | "--printjs"                      -> wsArgs := { !wsArgs with PrintJS       = true   }
    //                | "--debug"                      
    //                | "--debug+"                     
    //                | "--debug:full"                 
    //                | "-g"                           
    //                | "-g+"                          
    //                | "-g:full"                        -> wsArgs := { !wsArgs with IsDebug       = true   } ; fscArgs.Add a
    //                | "--vserrors"                     -> wsArgs := { !wsArgs with VSStyleErrors = true   } ; fscArgs.Add a
    //                | StartsWith "-o:"               o 
    //                | StartsWith "--out:"            o -> wsArgs := { !wsArgs with AssemblyFile  = o      } ; fscArgs.Add a
    //                | StartsWith "--doc:"            d -> wsArgs := { !wsArgs with Documentation = Some d } ; fscArgs.Add a
    //                | StartsWith "-r:"               r             
    //                | StartsWith "--reference:"      r -> refs     .Add (Path.GetFullPath r)                ; fscArgs.Add a
    //                | StartsWith "--resource:"       r -> resources.Add (resSplit         r)                ; fscArgs.Add a
    //                | _                                ->                                                     fscArgs.Add a  
    //            with e ->
    //                failwithf "Parsing argument failed: '%s' - %s" a e.Message
    //        fscArgs.Add "--define:FSHARP41"
    //        wsArgs := 
    //            { !wsArgs with 
    //                References   = refs |> Seq.map (fun s -> s.ToLower()) |> Seq.distinct |> Array.ofSeq
    //                Resources    = resources.ToArray()
    //                CompilerArgs = fscArgs  .ToArray() 
    //            }
    //        CompileToJsW !wsArgs        
    
    module WasmTest =
        open System
        open System.IO
        open System.Threading
        open System.Threading.Tasks
        //open Microsoft.JSInterop
        //open WebAssembly.Core
    
        //let evalJS js  = WebAssembly.Runtime.InvokeJS js
    
        open FSharp.Compiler.SourceCodeServices
        //open Microsoft.FSharp.Compiler.SourceCodeServices
        open Microsoft.FSharp.Compiler.Interactive
    
        let printth fmt =
            if System.Threading.Thread.CurrentThread.IsBackground then "B" else "F"
            |> printf "Thread %d %s: " System.Threading.Thread.CurrentThread.ManagedThreadId
            printfn fmt
    
        //type Writer(isErr: bool) =
        //    inherit TextWriter()
        //    override this.Encoding         = Text.Encoding.UTF8
        //    override this.Write(s: string) = JS.Invoke<unit>("WebFsc.write", s, isErr)
        //    override this.Write(c: char  ) = this.Write(string c)
    //
        //let private out = new Writer(false)
        //let private err = new Writer(true)
    //
        ///// Run this task with its output redirected to the screen.
        //let Wrap (task: Async<_>) =
        //    let normalOut = stdout
        //    let normalErr = stderr
        //    async {
        //        Console.SetOut(out)
        //        Console.SetError(err)
        //        let! res = task
        //        Console.SetOut(normalOut)
        //        Console.SetError(normalErr)
        //        return res
        //    }
    //
        //let Clear () = JS.Invoke("WebFsc.clear") : unit
    
        module Token =
    
            type Token = Quoted of string | UnQuoted of string
    
    
            let rec doubleQuote = function
                | []                                            -> []
                | UnQuoted c :: _ when c.StartsWith "//"        -> []
                | Quoted t1 :: Quoted "\"" :: Quoted t2 :: rest -> (Quoted(t1 + "\"" + t2) :: rest) |> doubleQuote
                | Quoted t1 :: Quoted "\"" :: []                -> [Quoted t1 ]
                | h::rest                                       -> h :: doubleQuote rest
    
            let splitTokens line : Token list = // """main h1 "" "Hello World!"""" |> printfn "dd"
                (if Seq.tryHead line = Some '"' then " " + line else line).Split '"'
                |> Seq.mapi(fun i s -> 
                    if  i % 2 = 1  then [| Quoted s    |] else
                    if  s     = "" then [| Quoted "\"" |] else
                    let t     = s.Trim()
                    if  t     = "" then [|             |] else
                    t.Split([| ' ' |], System.StringSplitOptions.RemoveEmptyEntries)
                    |> Array.map         UnQuoted
                )
                |> Seq.collect id
                |> Seq.toList
                |> doubleQuote
    
            let splitArgs = splitTokens >> Seq.map (function Quoted s | UnQuoted s -> s) >> Seq.toArray
    
        module Fsi =
            open System
            open System.Globalization
            open System.IO
            open System.Reflection
            open System.Threading
            open System.Runtime.CompilerServices
    
            open FSharp.Compiler
            open FSharp.Compiler.AbstractIL
            open FSharp.Compiler.Interactive.Shell
            open FSharp.Compiler.Interactive.Shell.Settings
    
            let eval(argv) =
                try
                    let fsiConfig0 = FsiEvaluationSession.GetDefaultConfiguration()
                    let resolve (p1, p2) = {
                        ReferenceResolver.baggage  = p1
                        ReferenceResolver.itemSpec = p2
                        ReferenceResolver.prepareToolTip = fun _ -> p2
                    }
    
                    let legacyReferenceResolver = 
                        { new ReferenceResolver.Resolver with
                            member x.HighestInstalledNetFrameworkVersion() = "v4.5"
                            member __.DotNetFrameworkReferenceAssembliesRootDirectory = "\preloaded"
                            member __.Resolve(resolutionEnvironment, references, targetFrameworkVersion, targetFrameworkDirectories, targetProcessorArchitecture,
                                                fsharpCoreDir, explicitIncludeDirs, implicitIncludeDir, logMessage, logWarningOrError) = references |> Array.map resolve
                        }
                    // Update the configuration to include 'StartServer', WinFormsEventLoop and 'GetOptionalConsoleReadLine()'
                    let rec fsiConfig = 
                        { new FsiEvaluationSessionHostConfig () with 
                            member __.FormatProvider                 = fsiConfig0.FormatProvider
                            member __.FloatingPointFormat            = fsiConfig0.FloatingPointFormat
                            member __.AddedPrinters                  = fsiConfig0.AddedPrinters
                            member __.ShowDeclarationValues          = fsiConfig0.ShowDeclarationValues
                            member __.ShowIEnumerable                = fsiConfig0.ShowIEnumerable
                            member __.ShowProperties                 = fsiConfig0.ShowProperties
                            member __.PrintSize                      = fsiConfig0.PrintSize  
                            member __.PrintDepth                     = fsiConfig0.PrintDepth
                            member __.PrintWidth                     = fsiConfig0.PrintWidth
                            member __.PrintLength                    = fsiConfig0.PrintLength
                            member __.ReportUserCommandLineArgs args = fsiConfig0.ReportUserCommandLineArgs args
                            member __.UseFsiAuxLib                   = fsiConfig0.UseFsiAuxLib
    
                            member __.StartServer(fsiServerName) = ()
                            
                            // Connect the configuration through to the 'fsi' Event loop
                            member __.GetOptionalConsoleReadLine(probe) = None 
                            member __.EventLoopInvoke(f) = f()
                            member __.EventLoopRun() = false
                            member __.EventLoopScheduleRestart() = ()
                            }
    
                    // Create the console
                    and fsiSession : FsiEvaluationSession = FsiEvaluationSession.Create (fsiConfig, argv, Console.In, Console.Out, Console.Error, collectible=false, legacyReferenceResolver=legacyReferenceResolver)
    
    
                    fsiSession.Run() 
                    0
                with 
                | FSharp.Compiler.ErrorLogger.StopProcessingExn _ -> 1
                | FSharp.Compiler.ErrorLogger.ReportedError     _ -> 1
                | e                                               -> eprintf "Exception by fsi.exe:\n%+A\n" e; 1
    
        module RunAssembly =
            open System.Reflection
    
            open System.Diagnostics
    
            //let startProcess p ops =
            //    let procStart   = ProcessStartInfo(p, ops
            //                                        , UseShellExecute  = false
            //                                        , CreateNoWindow   = true
            //                                        , WorkingDirectory = (System.IO.Path.GetDirectoryName(p)) )
            //    let proc        = new Process(StartInfo = procStart)
            //    proc.Start() 
    //
            //let runxx(commandLine: string) =
            //    printth "commandLine = %s" commandLine
            //    let args = Token.splitArgs commandLine
            //    printth "args = %A" args
            //    let path = args.[0] 
            //    printth "path = %s" path
            //    startProcess path (String.concat " " args.[1..])
    
                
            let fsi(commandLine: string) = 
                //printth "System.Configuration.ConfigurationSettings.AppSettings = %A" <| System.Configuration.ConfigurationSettings.AppSettings
                printth "Environment.GetEnvironmentVariable(\"FSHARP_COMPILER_BIN\") = %s" <| Environment.GetEnvironmentVariable("FSHARP_COMPILER_BIN")
                printth "CompilerEnvironment.BinFolderOfDefaultFSharpCompiler(\"/tmp\") = %A" <| CompilerEnvironment.BinFolderOfDefaultFSharpCompiler("/tmp")
                Environment.SetEnvironmentVariable("FSHARP_COMPILER_BIN", "/tmp")
                printth "Environment.GetEnvironmentVariable(\"FSHARP_COMPILER_BIN\") = %s" <| Environment.GetEnvironmentVariable("FSHARP_COMPILER_BIN")
                printth "CompilerEnvironment.BinFolderOfDefaultFSharpCompiler() = %A" <| CompilerEnvironment.BinFolderOfDefaultFSharpCompiler()
                printth "Environment.CommandLine      = %s" <| Environment.CommandLine
                printth "commandLine = %s" commandLine
                let args = Token.splitArgs commandLine
                let runningOnMono = try System.Type.GetType("Mono.Runtime") <> null with e->  false        
                printth "runningOnMono = %A" runningOnMono
                //printth "System.Configuration.ConfigurationSettings.AppSettings = %A" System.Configuration.ConfigurationSettings.AppSettings
                printth "Assembly.GetExecutingAssembly().Location = %A"               (Assembly.GetExecutingAssembly().Location)
                printth "args = %A" args
                Fsi.eval args
    
            let run(commandLine: string) =
                printth "Environment.CommandLine      = %s" <| Environment.CommandLine
                printth "commandLine = %s" commandLine
                let args = Token.splitArgs commandLine
                printth "args = %A" args
                let path = args.[0] 
                Environment.CurrentDirectory <- System.IO.Path.GetDirectoryName path
                printth "Environment.CurrentDirectory = %s" <| Environment.CurrentDirectory
                printth "run(path: string) = %s" path
                //printth "before: let bytes = System.IO.File.ReadAllBytes path"
                //let bytes = System.IO.File.ReadAllBytes path
                //printth "bytes.Length = %d" bytes.Length
                printth "before: let asm = Assembly.LoadFrom(path)"
                let asm = Assembly.LoadFrom path
                // Run entry point
                printth "asm.EntryPoint = %A " <| asm.EntryPoint
                printth "before: asm.EntryPoint.Invoke(null, [||]) |> ignore"
                let parms = 
                    asm.EntryPoint.GetParameters() 
                    |> Array.map(fun p -> if p.ParameterType.IsArray then args :> obj else null)
                printth "parms = %A" parms
                asm.EntryPoint.Invoke(null, parms) |> printth "res = %A"
            // FsRoot.WasmTest.RunAssembly.run @"D:\Abe\CIPHERWorkspace\WASM\sample\packages\fsi\FSharp.Compiler.Tools\tools\fsiAnyCpu.exe"
    
            let runA(path: string) =
                async {
                    printth "runA(path: string) = %s" path
                    printth "before: let bytes = System.IO.File.ReadAllBytes path"
                    let bytes = System.IO.File.ReadAllBytes path
                    printth "bytes.Length = %d" bytes.Length
                    printth "before: let asm = Assembly.LoadFrom(path)"
                    let asm = Assembly.LoadFrom(path)
                    // Run entry point
                    printth "before: asm.EntryPoint.Invoke(null, [||]) |> ignore"
                    asm.EntryPoint.Invoke(null, [||]) |> ignore
                    // Run Main.AsyncMain() if it exists
                    printth "before: let mainModule = asm.GetType(\"Main\")"
                    let mainModule = asm.GetType("Main")
                    printth "if not (isNull mainModule) then = %b" <| not (isNull mainModule)
                    if not (isNull mainModule) then
                        let asyncMainFunc = mainModule.GetMethod("AsyncMain", BindingFlags.Static ||| BindingFlags.Public)
                        if not (isNull asyncMainFunc) then
                            do! asyncMainFunc.Invoke(null, [||]) :?> Async<unit>
                    // Done
                }
    
        open System
        open System.IO
        open System.Text
    
        let rec listdir dir =
            let res    = StringBuilder()
            let append = res.AppendLine >> ignore
            try 
                if dir = "/proc/self/fd" then sprintf "skip /proc/self/fd" |> append else
                sprintf "Dir: %s" dir |> append
                for subdir in System.IO.Directory.EnumerateDirectories dir do
                    sprintf "SubDir: %s" subdir  |> append
                for file in System.IO.Directory.GetFiles(dir, "*") do
                    sprintf "File: %s" file  |> append
                for subdir in System.IO.Directory.EnumerateDirectories dir do
                    listdir subdir
                    |> append
            with e -> sprintf "%s" e.Message |> append
            res.ToString()
    
        let checker     = FSharpChecker.Create()
        let infile      = "/tmp/source.fsx" 
        let newFileName =
            System.Environment.SetEnvironmentVariable("FSHARP_COMPILER_BIN", "/tmp")
            let mutable counter = 0
            fun () -> 
                counter <- counter + 1
                sprintf "/tmp/app%d.exe" counter
        let xxoptions outfile  =             
            [|  "--simpleresolution"
                "--optimize-"
                "--noframework"
                "--fullpaths"
                "--warn:3"
                "--target:exe"
                "--standalone"
                infile
                // Necessary standard library
                "-r:/tmp/FSharp.Core.dll"
                "-r:/tmp/mscorlib.dll"
                "-r:/tmp/netstandard.dll"
                "-r:/tmp/System.dll"
                "-r:/tmp/System.Core.dll"
                "-r:/tmp/System.IO.dll"
                "-r:/tmp/System.Runtime.dll"
                // Additional libraries we want to make available
                //"-r:/tmp/System.Net.Http.dll"
                "-r:/tmp/System.Threading.dll"
                "-r:/tmp/System.Threading.Tasks.dll"
                //"-r:/tmp/WebAssembly.Net.Http.dll"
                //"-r:/tmp/WebAssembly.Bindings.dll"
                //"-r:/tmp/WebAssembly.Net.WebSockets.dll"
                //"-r:/tmp/System.Numerics.dll"
                //"-r:/tmp/FSharp.Data.dll"
                //"-r:/tmp/System.Xml.Linq.dll"
                //"-r:/tmp/WebFsc.Env.dll"
                "-o:" + outfile
            |]
    
        let translatex(text, options:string) =
            printfn "translate %A" options
            let outfile = newFileName()
            async {
                try
                    System.IO.File.WriteAllText(infile, text)
                    let x = 
                        options.Split '\n'
                        |> Array.append [|  
                            infile 
                            "-o:" + outfile |]
                        |> ignore // WsTranslate2.compileMainW
                    printfn "wsfsc exit = %A" x
                with e -> printfn "Failed evalExpression: %A" e
            } |> Async.Start
            outfile
    
        let translate(text, options:string) =
            printfn "translate %A" options
            let outfile = newFileName()
            async {
                try
                    System.IO.File.WriteAllText(infile, text)
                    let x = 
                        options.Split '\n'
                        |> Array.append [|  
                            infile 
                            "-o:" + outfile |]
                        |> ignore //WebSharper.FSharp.Program.main
                    printfn "wsfsc exit = %A" x
                with e -> printfn "Failed evalExpression: %A" e
            } |> Async.Start
            outfile
    
        let waitThread() = 
            let ct = new System.Threading.CancellationTokenSource();
            async {
                printth "before: do! Async.Sleep 4000"
                do! Async.Sleep 4000
                printth "after : do! Async.Sleep 4000"
                //ct.CancelAfter 1000
            } |> Async.Start
            ct.CancelAfter 12000
            printth "before: Async.RunSynchronously(async {...}, 5000, ct.Token)"
            Async.RunSynchronously(async {
                printth "before: do! Async.Sleep 9000"
                do! Async.Sleep 6000
                //System.Threading.Thread.Sleep 6000
                printth "after : do! Async.Sleep 9000"
            })//, 0, ct.Token) 
            printth "after: Async.RunSynchronously(async {...}, 5000, ct.Token)"
            //"waited 1 second!"
    
        let wait3() = 
            printfn "before: async { "
            async { 
                printth "before: System.Threading.ThreadPool.QueueUserWorkItem(fun _ -> waitThread())"
                System.Threading.ThreadPool.QueueUserWorkItem(fun _ -> waitThread())
                |> printth "System.Threading.ThreadPool.QueueUserWorkItem(fun _ -> waitThread()) = %b"
                printth "before: do! Async.Sleep 200"
                do! Async.Sleep 200
                for i in 1..4 do
                    System.Threading.Thread.Sleep 0
            } |> Async.Start
            printth "after : } |> Async.Start"
        
        let wait1() = 
            printth "before: System.Threading.ThreadPool.QueueUserWorkItem(fun _ -> waitThread())"
            System.Threading.ThreadPool.QueueUserWorkItem(fun _ -> waitThread())
            |> printth "System.Threading.ThreadPool.QueueUserWorkItem(fun _ -> waitThread()) = %b"
            for i in 1..4 do
                printth "before: System.Threading.Thread.Sleep 1000"
                System.Threading.Thread.Sleep 1000
                printth "after : System.Threading.Thread.Sleep 1000"
            printth "exiting wait"
        
        let wait0() = 
            printth "before: let t = new System.Threading.Thread(new System.Threading.ThreadStart(waitThread))"
            let t = new System.Threading.Thread(new System.Threading.ThreadStart(waitThread))
            printth "before: async { "
            async { 
                printth "before: do! Async.Sleep 200"
                do! Async.Sleep 200
                printth "before: t.Start()"
                t.Start() 
                printth "after : t.Start()"
                for i in 1..4 do
                    System.Threading.Thread.Sleep 0
                printth "before: t.Join()"
                t.Join()
                printth "after : t.Join()"
            } |> Async.Start
            printth "after : } |> Async.Start"
        
        let wait() =
            match System.Threading.ThreadPool.GetMaxThreads() with
            | a, b -> printth "System.Threading.ThreadPool.GetMaxThreads() = %A" (a, b)
            System.Threading.ThreadPool.SetMaxThreads(4, 200)
            |> printth "System.Threading.ThreadPool.SetMaxThreads(4, 200) = %b"
            match System.Threading.ThreadPool.GetAvailableThreads() with
            | a, b -> printth "System.Threading.ThreadPool.GetAvailableThreads() = %A" (a, b)
            printth "before: let t = new System.Threading.Thread(new System.Threading.ThreadStart(waitThread))"
            let t = new System.Threading.Thread(new System.Threading.ThreadStart(waitThread))
            printth "before: t.Start()"
            t.Start()
            printth "after : t.Start()"
            for i in 1..11 do
                printth "before: System.Threading.Thread.Sleep 1000"
                System.Threading.Thread.Sleep 1000
                //printth "after : System.Threading.Thread.Sleep 1000"
            //printth "before: t.Join()"
            //t.Join()
            //printth "after : t.Join()"    
            printth "finished wait"    
            // FsRoot.WasmTest.wait()
            // FsRoot.WasmTest.waitThread()
            // async { FsRoot.WasmTest.waitThread() } |> Async.Start
    
        let compile(text, options:string) =
            printth "compile %A" options
            let outfile = newFileName()
            async {
                try
                    System.IO.File.WriteAllText(infile, text)
                    let! errors1
                        , exitCode1 =
                        options.Split '\n'
                        |> Array.append [|  
                            "fsc.exe" 
                            infile 
                            "-o:" + outfile |]
                        |> checker.Compile
                    for e in errors1 do printfn "%A" e
                    if exitCode1 <> 0 then printfn "exit = %d" exitCode1 
                with e -> printfn "Failed evalExpression: %A" e
            } |> Async.Start
            outfile
    
        // FsRoot.WasmTest.saveExpression "module test = printfn \"HEllo World\" "
        // FsRoot.WasmTest.evalExpression ()
        // module test = printfn "HEllo World" 
    
        let runAssembly path = RunAssembly.run path
    
        let fsiEval(path, text) = 
            System.IO.File.WriteAllText(infile, text)
            RunAssembly.fsi path
    
        let tryResource name (resolver: string -> obj)  : obj option =
            match resolver name with
            | null     -> None
            | resource -> Some resource
    
    //#define NOFRAMEWORK --noframework
    
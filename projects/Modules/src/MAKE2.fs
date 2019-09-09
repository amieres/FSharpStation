#nowarn "3242"
////-d:FSharpStation1567769197495 -d:TEE -d:WEBSHARPER
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Owin\lib\net40"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Web.dll"
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
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Owin\lib\net40\Owin.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/Newtonsoft.Json/lib/net45/Newtonsoft.Json.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
//#nowarn "3242"
/// Root namespace for all code
//#define FSharpStation1567769197495
#if INTERACTIVE
module FsRoot   =
#else
namespace FsRoot
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
    open WebSharper.JavaScript
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
            
            //#define TEE
            
            let [< Inline "new Date(0).getTime()" >] Utc1970_01_01                 = System.DateTime(1970,1,1,0,0,0,System.DateTimeKind.Utc)
            let [< Inline "$d"                    >] date2Long (d:System.DateTime) = d.Subtract(Utc1970_01_01).Ticks / 10000L
            let [< Inline "$l"                    >] long2Date (l:int64          ) = Utc1970_01_01.Add(System.TimeSpan(l * 10000L) )
            
            
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
                        match   vR with
                        | Ok    v -> return! fRA v
                        | Error m -> return  Error m 
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
                    let absorbR   vRRA                         = vRRA |> Async.map  Result.join
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
                    member __.Run              fRA                            = AsyncResult.rtn () |> AsyncResult.bind fRA
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
                member this.Left             n  = if n < 0 
                                                  then this.Substring2(0, this.Length + n)
                                                  else this.Substring2(0, n              )
                member this.Right            n  = this.Substring2(max 0 (this.Length - n), this.Length)
                member this.toUnderscore        = this |> Seq.mapi(fun i c -> if i > 0 && System.Char.IsUpper(c) then [ '_' ; c ] else [ c ])  |> Seq.collect id |> Seq.toArray |> System.String
            
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
                
                let thousands n =
                    let v = n.ToString()
                    let r = v.Length % 3 
                    let s = if r = 0 then 3 else r
                    [   yield v.[0.. s - 1]
                        for i in 0..(v.Length - s)/ 3 - 1 do
                            yield v.[i * 3 + s .. i * 3 + s + 2]
                    ] |> String.concat ","
            
            [< Inline "$a + '/' + $b" >]
            let inline (+/+) a b = System.IO.Path.Combine(a, b)
            
            module ParseO =
                let tryParseWith tryParseFunc = tryParseFunc >> function
                        | true, v    -> Some v
                        | false, _   -> None
            
            
                /// Javascript adds time zone information when parsing a date and that can change the result
                let parseDateO2  = (fun s -> s + "T00:00:00") >> tryParseWith System.DateTime.TryParse
                let parseDateO   = tryParseWith System.DateTime.TryParse
                let parseIntO    = tryParseWith System.Int32   .TryParse
                let parseInt64O  = tryParseWith System.Int64   .TryParse
                let parseSingleO = tryParseWith System.Single  .TryParse
                let parseDoubleO = tryParseWith System.Double  .TryParse
                let parseGuidO   = tryParseWith System.Guid    .TryParse
                // etc.
                
                // active patterns for try-parsing strings
                let (|Date  |_|) = parseDateO
                let (|Int   |_|) = parseIntO
                let (|Int64 |_|) = parseInt64O
                let (|Single|_|) = parseSingleO
                let (|Double|_|) = parseDoubleO
                let (|Guid  |_|) = parseGuidO
                
            module Serializer =
                open System
            
                type JsonIntermediate = {
                    tryFloat    : unit   ->  float                option
                    tryInt      : unit   ->  int64                option
                    tryString   : unit   ->  string               option
                    tryBool     : unit   ->  bool                 option
                    tryArray    : unit   -> (JsonIntermediate []) option
                    tryField    : string ->  JsonIntermediate     option
                    isObject    : unit   ->  bool
                    isNull      : unit   ->  bool
                    toString    : unit   ->  string  
                }
            
                type SerS<'T> = ('T                 -> string   )        //      Serialization function
                type SerD<'T> = (JsonIntermediate   -> 'T option)        //    deSerialization function
                type Ser< 'T> = SerS<'T> * SerD<'T>                      // both Serialization functions
            
                let serialize (ser: Ser<_>) v = fst ser v
                let (|Field|_|) field j = j.tryField field
            
                let [< Inline >] inline sprintU  v = sprintf "%A"       v
                let [< Inline >] inline toString v = v.ToString()
                let [< Inline >] inline sprintQ  v = sprintf "\"%A\""   v
                let              inline sprintA  v = String.concat ", " v |> sprintf "[%s]"
            
                let toJsonString (v:string) =
                    seq {
                        yield '"'
                        if String.IsNullOrEmpty v |> not then
                            for i = 0 to v.Length - 1 do
                                let c = v.[i]
                                let ci = int c
                                if ci >= 0 && ci <= 7 || ci = 11 || ci >= 14 && ci <= 31 then
                                    yield! sprintf "\\u%04x" ci
                                else 
                                match c with
                                | '\b' -> yield! "\\b"
                                | '\t' -> yield! "\\t"
                                | '\n' -> yield! "\\n"
                                | '\f' -> yield! "\\f"
                                | '\r' -> yield! "\\r"
                                | '"'  -> yield! "\\\""
                                | '\\' -> yield! "\\\\"
                                | _    -> yield c
                        yield '"'
                    } |> Seq.toArray|> String
            
                let serString : Ser<string  > = toJsonString           , (fun j -> j.tryString()                         )
                let serFloat  : Ser<float   > = sprintU                , (fun j -> j.tryFloat ()                         )
                let serInt    : Ser<int     > = sprintU                , (fun j -> j.tryInt   () |> Option.map int       )
                let serInt64  : Ser<int64   > = toString               , (fun j -> j.tryInt   ()                         )
                let serBool   : Ser<bool    > = sprintU                , (fun j -> j.tryBool  ()                         )
                let serDate   : Ser<DateTime> = (date2Long >> toString), (fun j -> j.tryInt   () |> Option.map long2Date )
                [< JavaScript false >]
                let serDate2  : Ser<DateTime> = (fun d -> d.ToFileTimeUtc() |> toString), (fun j -> j.tryInt   () |> Option.map (fun t -> DateTime.FromFileTimeUtc t ) )
                [< JavaScript false >]
                let serDate3  : Ser<DateTime> = 
                    (  fun (d:System.DateTime ) -> d.ToString("u") |> sprintf "%A"                )
                    , (fun (j:JsonIntermediate) -> j.tryString() |> Option.bind ParseO.parseDateO )
            
                let [< Inline >] inline serId  (get: 'a -> System.Guid) (set:System.Guid -> 'a) (print: 'a->string) : Ser<'a> =
                    let s               = System.Guid.Empty |> set |> print |> fun (s:string) -> s.Split ' ' |> Array.head
                    let sQ              = sprintf "%A" s
                    let serialize   gid = get gid |> string |> sprintf "{%10s :%A}" sQ
                    let deserialize j   = j.tryField s 
                                          |> Option.bind (fun jf -> jf.tryString() ) 
                                          |> Option.bind ParseO.parseGuidO 
                                          |> Option.map  set
                    serialize, deserialize
            
                let serField (name:string) (get:'D->'e) (set:'e->'D->'D) (serFuncs:Ser<'e>) : string * SerS<'D> * ('D -> SerD<'D>) = 
                    serFuncs |> fun (ser, deser) -> name, get >> ser, (fun rc j -> deser j |> Option.map (fun v -> set v rc) ) 
                    
                let [< Inline >] serRecord init (fields: #seq<(string * SerS<'D> * ('D -> SerD<'D>))>) : Ser<'D> =
                    if isNull (init :> obj) then failwith "Initial record is null"
                    let serialize   dim = fields |> Seq.map  (fun     (n,  ser, _deser) -> sprintf "%A: %s" n (ser dim)) |> String.concat ", " |> sprintf "{%s}"
                    let deserialize j   = fields |> Seq.fold (fun dim (n, _ser,  deser) -> j.tryField n |> Option.bind (deser dim) |> Option.defaultValue dim)   init |> Some
                    serialize, deserialize
                
                let serSeq (ser:Ser<'D>) : Ser<'D seq     > = (Seq   .map (fst ser) >> sprintA                                 ), (fun j -> j.tryArray () |> Option.map (Array.choose (snd ser)) |> Option.map Seq.ofArray)
                let serArr (ser:Ser<'D>) : Ser<'D []      > = (Array .map (fst ser) >> sprintA                                 ), (fun j -> j.tryArray () |> Option.map (Array.choose (snd ser))                          )
                let serLst (ser:Ser<'D>) : Ser<'D list    > = (List  .map (fst ser) >> sprintA                                 ), (fun j -> j.tryArray () |> Option.map (Array.choose (snd ser)) |> Option.map Seq.toList )
                let serSet (ser:Ser<'D>) : Ser<Set<'D>    > = (Set   .map (fst ser) >> sprintA                                 ), (fun j -> j.tryArray () |> Option.map (Array.choose (snd ser)) |> Option.map Set        )
                let serOpt (ser:Ser<'D>) : Ser<'D option  > = (Option.map (fst ser) >> Option.defaultValue "null"              ), (fun j -> (if j.isNull() then None else              snd ser j)|> Some                  )
                let serDup(serFst,serSnd): Ser<'a * 'b    > = (fun (f,s  ) -> sprintf "[%s, %s]" (fst serFst f) (fst serSnd s) ), (fun j -> j.tryArray () 
                                                                                                                                            |> function 
                                                                                                                                                | Some [| j1 ; j2 |] -> match snd serFst j1, snd serSnd j2 with
                                                                                                                                                                        | Some f, Some s -> Some(f, s) |_->None
                                                                                                                                                | _ -> None )
                let serTrp(sF,sS,sT)      : Ser<'a *'b*'c > = (fun (f,s,t) -> sprintf "[%s, %s, %s]" (fst sF f) (fst sS s)  (fst sT t)) , (fun j -> j.tryArray () 
                                                                                                                                                    |> function 
                                                                                                                                                        | Some [| j1 ;j2; j3|]   -> match snd sF j1, snd sS j2, snd sT j3 with
                                                                                                                                                                                    | Some f, Some s, Some t -> Some(f, s, t) |_-> None
                                                                                                                                                        | _ -> None ) 
                let serMap serKey serElm : Ser<Map<'k, 'e>> =   serDup(serKey, serElm)
                                                                |> serSeq 
                                                                |> (fun serKVPs -> (Seq.map (fun kvp -> kvp.Key, kvp.Value) >> fst serKVPs) , (snd serKVPs >> Option.map Map) )
            
                let serTypedRegisters = System.Collections.Generic.Dictionary<string, Ser<obj>>()
            
                let map (g: 'b -> 'a) (f: 'a -> 'b) ((serS, serD): Ser<'a>) : Ser<'b> = g >> serS, (serD >> Option.map f)
            
                [< JavaScript false >]
                let fixType t = System.Text.RegularExpressions.Regex.Replace(t, @"FSI_[0-9]{4}\+", "", System.Text.RegularExpressions.RegexOptions.IgnorePatternWhitespace)
            
                [< JavaScript false >]
                let serSpecial (regSer: Ser<'T>) : Ser<obj> =
                    let tn0 = typeof<'T>.FullName |> fixType
                    if serTypedRegisters.ContainsKey tn0 |> not then serTypedRegisters.Add(tn0, map unbox box regSer)
                    (fun t -> 
                        let tn    = t.GetType().FullName |> fixType
                        let snd   = if   serTypedRegisters.ContainsKey tn 
                                    then fst serTypedRegisters.[tn] t
                                    else failwithf "Serializer not registered for type: %s" tn
                        sprintf "[%s, %s]" (fst serString tn) snd)
                    ,(fun j -> 
                        match j.tryArray () with
                        | Some [| j1 ; j2 |] -> 
                            match snd serString j1 with
                            | Some tn    -> if   serTypedRegisters.ContainsKey tn 
                                            then snd serTypedRegisters.[tn] j2
                                            else failwithf "Serializer not registered for type: %s" tn
                            |_-> failwithf "Expected json string with type name: %A" (j1.toString())
                        |    _-> failwithf "Expected json array with 2 elements: %s" (j.toString()) )
            
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
                | PrepoElIf   of string
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
                                        |_             -> false) |> Seq.toArray
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
            
            
            type SnippetId = SnippetId of System.Guid with member x.Id = match x with SnippetId id -> id
                                                           static member Empty = SnippetId System.Guid.Empty
            
            type Snippet = {
                snpId           : SnippetId    
                snpName         : string
                snpContent      : string
                snpParentIdO    : SnippetId option
                snpPredIds      : SnippetId Set
                snpProperties   : (string* string) []
                snpModified     : System.DateTime
            }
            
            type SnippetReference =
            | RefSnippetId   of SnippetId
            | RefSnippetPath of string[]
            
            type Reduced = ((SnippetId * string * int * int) [] * string [] * FsCode.PreproDirective [] ) option
            
            type SnippetCollection = {
                generation       : System.DateTime
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
            
                let getNextModified() = DateTime.Now
                //let getNextGeneration, setGeneration = 
                //    let mutable generation  = 1
                //    (fun () -> generation <- generation + 1 ; generation)
                //  , (fun n  -> generation <- n                          )  
                let New name content parentO = 
                    {
                        snpId           = SnippetId <| System.Guid.NewGuid()   
                        snpName         = name
                        snpContent      = content
                        snpParentIdO    = parentO
                        snpPredIds      = Set.empty
                        snpProperties   = Array.empty
                        snpModified     = getNextModified()
                    }
                let defaultSnippet              = {
                    snpId           = SnippetId <| System.Guid.Empty
                    snpName         = ""
                    snpContent      = ""
                    snpParentIdO    = None
                    snpPredIds      = Set.empty
                    snpProperties   = Array.empty
                    snpModified     = Utc1970_01_01
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
                let propertyPair      prv = (prv:string).Split([| tieFighter |], StringSplitOptions.None) |> fun vs -> vs.[0], vs |> Array.tryItem 1 |> Option.defaultValue vs.[0]
                let propertyPairO   n snp = propertyO n snp |> Option.map propertyPair
                let snippetORm        sid = readerFun (fun { fetcher    = ftch } -> ftch sid                                               )
                let parentORm         snp = readerFun (fun { fetcher    = ftch } -> snp.snpParentIdO |> Option.bind ftch                   )
                let predecessorsRm    snp = readerFun (fun { fetcher    = ftch } -> snp.snpPredIds   |> Seq.choose  ftch                   )
                let maxGenerationRm   ()  = readerFun (fun { ordered    = snps } -> snps |> Seq.map (fun s -> s.snpModified  ) |> Seq.max  )
                let modifiedRm        snp = readerFun (fun { generation = gen  } -> snp.snpModified   > gen                                )
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
                                                return preds (* |> Seq.append [ snp ] *) |> Seq.map (fun snp -> snp.snpModified  ) |> Seq.max 
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
                    | Some v -> return Some (snp, propertyPair v)
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
                    let  code, directs =
                        code.Split('\n')
                        |> FsCode.separatePrepros
                        |> indentF
                        |> FsCode.getTopDirectives
                    return
                        [| snp.snpId, snippetName snp.snpName snp.snpContent, code.Length, indent |] , code, directs
                }
                let addSeps (lines1:(SnippetId*string*int*int)[], code1:string[], directs1:FsCode.PreproDirective[])
                            (lines2:(SnippetId*string*int*int)[], code2:string[], directs2:FsCode.PreproDirective[]) =
                    Array.append lines1   lines2
                  , Array.append code1    code2
                  , Array.append directs1 directs2
                let reducedCodeRm  snippets = fusion {
                    let! parts    = snippets |> traverseSeq separateCodeRm
                    let  reduced  = parts
                                    |> fun snps -> if snps |> Seq.isEmpty then seq [ [||],  [||],  [||] ] else snps
                                    |> Seq.reduce addSeps
                                    |> fun (lines, code                                         , directs) ->
                                           (lines, code |> String.concat "\n" |> Array.singleton, directs)
                    return reduced
                }
                let finishCode (lines:(SnippetId*string*int*int)[],code:string[], directs:FsCode.PreproDirective[]) =
                    let assembs, defines, prepIs, nowarns, cdO = FsCode.separateDirectives directs
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
                
        /// Essentials that part runs in Javascript and part runs in the server
        [< AutoOpen >]
        module Library2 =
            [<WebSharper.JavaScript>]
            module WebSockets =
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
                //#define WEBSHARPER
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
                        
                //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Owin\lib\net40"
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Owin\lib\net40\Owin.dll"
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
                
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
                    "http://localhost:9005/#/Snippet/186f075a-c864-4903-994d-172538cecaca"
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
            | MsgGetValue        of string
            | MsgSetValue        of string * string
            | MsgGetModified     of SnippetReference
            
            [< JavaScript >]
            type FSResponse =
            | RespString         of string
            | RespSnippets       of Snippet[]
            | RespDateTime       of System.DateTime
            
            module FSharpStationClient =
                open WebSockets
            
                let mutable fsharpStationAddress = Address "FSharpStation1567769197495"
            
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
            
                let respDateTime response = asyncResult { 
                    match response with
                    | RespDateTime time -> return time
                    | _                 -> return! Error <| ErrorMsg (sprintf "Unexpected %A" response)
                }
            
                let respSnippet response = asyncResult { 
                    match response with
                    | RespSnippets [| snp |] -> return snp
                    | _                      -> return! Error <| ErrorMsg (sprintf "Unexpected %A" response)
                }
            
                let getCode path = 
                    path
                    |> String.splitByChar '/'
                    |> RefSnippetPath
                    |> MsgGetCode
                    |> sendMessage
                    |> AsyncResult.bind respString
            
                let getModified path = 
                    path
                    |> String.splitByChar '/'
                    |> RefSnippetPath
                    |> MsgGetModified
                    |> sendMessage
                    |> AsyncResult.bind respDateTime
            
                let getSnippet path = 
                    path
                    |> String.splitByChar '/'
                    |> RefSnippetPath
                    |> Array.singleton
                    |> MsgGetSnippets
                    |> sendMessage
                    |> AsyncResult.bind respSnippet
            
                let getUrl      () = MsgGetUrl            |> sendMessage |> AsyncResult.bind respString
                let getValue vrw   = MsgGetValue vrw      |> sendMessage |> AsyncResult.bind respString
                let setValue var v = MsgSetValue (var, v) |> sendMessage |> AsyncResult.bind respString
            
                let execJS      js          = sendMessage (MsgAction [| "ExecJS"      ; js              |]) |> AsyncResult.bind respString
                let setProperty path prop v = sendMessage (MsgAction [| "SetProperty" ; path ; prop ; v |]) |> AsyncResult.bind respString
                let sendOutput  txt         = sendMessage (MsgAction [| "AddOutput"   ; txt             |])
                let actionCall0 act         = sendMessage (MsgAction [|  act                            |])
                let actionCall1 act p1      = sendMessage (MsgAction [|  act          ; p1              |])
                let actionCall2 act p1 p2   = sendMessage (MsgAction [|  act          ; p1   ; p2       |])
                                        
                let getBrokerProcessId() = fsharpStationClient.MBProcessId
    
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation/packages/Newtonsoft.Json/lib/net45/Newtonsoft.Json.dll"
    
    type ITempFileName =
        inherit System.IDisposable
        abstract Name : string
    
    type TempFileName(fn) =
        new () = new TempFileName(System.IO.Path.GetTempFileName())
        member __.Name = fn
        interface ITempFileName      with member __.Name      = fn
        interface System.IDisposable with member __.Dispose() = 
                                            if System.IO.File.Exists fn then 
                                                System.IO.File.Delete fn 
    
    type NonTempFileName(fn) =
        interface ITempFileName      with member __.Name      = fn
        interface System.IDisposable with member __.Dispose() = ()
    
    type FileName               = FileName of string with member this.V = match this with FileName v -> v
    let  FileName (name:string) = FileName <| name.Replace(@"\", "/")
    
    type FileState = FileState of (System.DateTime * int64) option
    
    [< AutoOpen >]
    module ILocalFileM =
    
        type ILocalFile =
            abstract GetLocalFileState : FileName -> FileState
            abstract CopyFile          : FileName -> FileName -> unit
            abstract WriteFile         : FileName -> string   -> unit
            abstract ReadFile          : FileName -> string
            abstract TempFileName      : unit     -> ITempFileName
    
        let getMimeO (name :string)=
            match name.ToLower() with
            | String.EndsWith ".pdf"  _ -> Some "application/pdf"
            | String.EndsWith ".rtf"  _ -> Some "application/rtf"
            | String.EndsWith ".pbm"  _ -> Some "image/x-portable-bitmap"
            | String.EndsWith ".bmp"  _ -> Some "image/bmp"
            | String.EndsWith ".gif"  _ -> Some "image/gif"
            | String.EndsWith ".tif"  _
            | String.EndsWith ".tiff" _ -> Some "image/tiff"
            | String.EndsWith ".png"  _ -> Some "image/png"
            | String.EndsWith ".jpe"  _ 
            | String.EndsWith ".jpeg" _ 
            | String.EndsWith ".jpg"  _ -> Some "image/jpeg"
            | String.EndsWith ".png"  _ -> Some "image/png"
            | String.EndsWith ".html" _ -> Some "text/html"
            | _-> None
    
    
    module AR = AsyncResult
    
    module Make2 =
        open System
        open Serializer
    
        type ErrorType = 
        | ErrorMessage of string
    
        type TargetId        = TargetId    of string with member this.V = match this with TargetId    v -> v
        type TargetState<'S> = TargetState of 'S     with member this.V = match this with TargetState v -> v
        type TargetData< 'D> = TargetData  of 'D     with member this.V = match this with TargetData  v -> v
    
        type TargetState     = TargetState<          obj>
        type TargetData      = TargetData<           obj>
        type ITarget         =
            abstract TargetId     : unit                                 -> TargetId
            abstract TargetData   : unit                                 -> TargetData
            abstract CurrentState : unit                                 -> AsyncResult<TargetState, ErrorType>
            abstract CompareStates: TargetState<obj> -> TargetState<obj> -> bool
            inherit  System.IComparable
    
        //type IHistory = 
        //    abstract ReadHistory  : unit -> unit
        //let readHistory () : AsyncResult<unit> = Reader.ask() |>> fun (tc:#IHistory) -> tc.ReadHistory ()
    
        type RuleId = RuleId of string with member this.V = match this with RuleId    v -> v
    
        type Target<'D, 'S when 'D : equality and 'D : comparison>( data:'D
                                                                        , serD: Serializer.Ser<'D>
                                                                        , serS: Serializer.Ser<'S>
                                                                        , f:'D -> AsyncResult<'S, ErrorType> ) =
            let serTarget = serD      |> Serializer.map (fun (tg:Target<'D,'S>) -> tg.Data) (fun dt -> Target(dt, serD, serS, f))
            let _         = serTarget |> Serializer.serSpecial
            let _         = serS      |> Serializer.serSpecial
            member __.Data = data
            interface ITarget with
                member __.TargetId    () = sprintf "%A" data |> TargetId
                member __.TargetData  () = box          data |> TargetData
                member __.CurrentState() = f            data |> AR.map (box >> TargetState)
                member __.CompareStates (TargetState a) (TargetState b) =  a = b
            override this.Equals(yobj) =
                match yobj with
                | :? Target<'D, 'S> as y -> data = y.Data
                | _                          -> false
            override this.GetHashCode() = hash data
            interface System.IComparable with
                member this.CompareTo yobj =
                    match yobj with
                    | :? Target<'D, 'S> as y -> compare data                       y.Data
                    | _                          -> compare (this.GetType().FullName) (yobj.GetType().FullName)
            override __.ToString() = sprintf "Target: %A" data        
    
        type DummyName                = DummyName of string with member this.V = match this with DummyName v -> v
        let serDummy : Ser<DummyName> = serString |> Serializer.map (fun (DummyName v) -> v) DummyName
        let dummyTarget (name:string) = Target(DummyName name, serDummy, serDummy, fun data -> data |> AR.rtn)
    
        type RuleResult =
        | FileCopied
        | FilesSeemEqual
        | UpToDate
        | NothingToDo
        | ErrorResult of string
    
        type RuleHistory = {
            ruleId       : RuleId
            dependencies : (ITarget * TargetState) []
            steps        : RuleId []
            started      : DateTime
            finished     : DateTime
            result       : RuleResult
        }
    
        type Rule = {
            ruleId       : RuleId
            ruleTargets  : ITarget []
            ruleActionRA : Rule -> AsyncResult<RuleResult, ErrorType>
        }
    
        //type IHistoryDB =
        //    abstract ClearHistory   : unit                  -> unit
        //    abstract AddRuleHistory : RuleId *  RuleHistory -> unit
        //    abstract TryGetHistory  : RuleId -> RuleHistory option
    //
        //let clearHistoryEf   ()      : AsyncResult<_       > = Reader.ask () |>> (fun (db:#IHistoryDB) -> db.ClearHistory  ()         )
        //let addRuleHistoryEf rid his : AsyncResult<_       > = Reader.ask () |>> (fun (db:#IHistoryDB) -> db.AddRuleHistory(rid, his) )
        //let tryGetHistoryEf  rid     : AsyncResult<_       > = Reader.ask () |>> (fun (db:#IHistoryDB) -> db.TryGetHistory  rid       )
        //let getRuleEf        ()      : AsyncResult<Rule> = Reader.ask2() |>> (fun (rule:Rule<     'H>) -> rule                        )
    
        //type IRules =
        //    abstract GetRules : unit         -> Rule seq
        //    abstract SetRules : Rule seq -> unit
    //
        //let getRulesEf () : AsyncResult<_> = Reader.ask() |>> (fun (rls:#IRules) -> rls.GetRules ()  )
        //let setRulesEf rs : AsyncResult<_> = Reader.ask() |>> (fun (rls:#IRules) -> rls.SetRules rs  )
    
        module Rule =
    
            type RuleState = {
                dependencies : Set<ITarget>
                steps        : Set<RuleId>
            }
    
            //let getDepsSteps()           : AsyncResult<_,_>= State.get() |>> fun (st:RuleState) -> st.dependencies, st.steps
            //let setDepsSteps(deps, stps) : AsyncResult<_,_>= State.put { dependencies = deps ; steps = stps } 
    
            //let addDepsSteps deps0 stps0 = asyncResult {
            //    let! deps, stps = getDepsSteps()
            //    do!               setDepsSteps(Set deps0 |> Set.union deps, Set stps0 |> Set.union stps)
            //}
    
            //let getHistoryEf() : AsyncResult<Map<RuleId, RuleHistory>, ErrorType> = State.get()
    
            type NeedDI = {
                updateTarget    : ITarget                       -> AsyncResult<RuleResult,ErrorType>
                addDepsSteps    : seq<ITarget>  -> RuleId []    -> unit
            }
            let needDI (di:NeedDI) (tgt:ITarget) : AsyncResult<TargetState, _> = asyncResult {
                di.addDepsSteps (seq [ tgt ]) [||]
                let! res = di.updateTarget tgt
                return! tgt.CurrentState()
            }
    
            type UpdateTargetDI = {
                runIfNecessary  : Rule      -> Async<Result<RuleResult,ErrorType>>
                tryFindRule     : TargetId  -> Rule option
            }
            let updateTargetDI (di:UpdateTargetDI) (tgt:ITarget) : AsyncResult<RuleResult,_> = asyncResult {
                let   ruleO = tgt.TargetId() |> di.tryFindRule 
                match ruleO with
                | None      -> return  UpToDate
                | Some rule -> return! di.runIfNecessary rule
            }
    
            type RunIfNecessaryDI = {
                tryGetHistory   : RuleId                        -> RuleHistory option
                checkHistory    : RuleHistory option            -> AsyncResult<bool,ErrorType>
                addDepsSteps    : seq<ITarget>  -> RuleId []    -> unit
                runRule         : Rule                          -> AsyncResult<RuleResult, ErrorType>
            }
            let runIfNecessaryDI (di:RunIfNecessaryDI) (rule:Rule) = asyncResult {
                let  hisO  = di.tryGetHistory rule.ruleId
                let! check = di.checkHistory hisO
                if   check
                then 
                    di.addDepsSteps (hisO.Value.dependencies |> Seq.map fst) hisO.Value.steps
                    return  UpToDate
                else return! di.runRule rule
            }
    
            type RunRuleDI = {
                now             : unit          -> DateTime
                getDepsSteps    : unit          -> RuleState
                setDepsSteps    : Set<ITarget>  -> Set<RuleId> -> unit
                addRuleHistory  : RuleId        -> RuleHistory -> unit
            }
            let runRuleDI (di:RunRuleDI) (rule:Rule) : AsyncResult<RuleResult, ErrorType> = asyncResult {
                let  started   = di.now()
                let  preDeps   = di.getDepsSteps()
                do               di.setDepsSteps Set.empty Set.empty
                let! result    = try  rule.ruleActionRA rule
                                 with e -> ErrorMessage e.Message |> Error |> Async.rtn
                let  posDeps   = di.getDepsSteps()
                let  steps     = Set.add rule.ruleId posDeps.steps
                do               di.setDepsSteps (Set.union preDeps.dependencies posDeps.dependencies) (Set.union preDeps.steps steps)
                let  finished  = di.now() 
                let! infs      = posDeps.dependencies |> Set.union (Set rule.ruleTargets) |> AR.traverseSeq (fun tgt -> tgt.CurrentState() |> AR.map (fun inf -> tgt, inf) )
                let  h         = {
                        ruleId       = rule.ruleId
                        dependencies = infs  |> Seq.toArray
                        steps        = steps |> Seq.toArray
                        result       = result
                        started      = started
                        finished     = finished
                    }
                if rule.ruleId <> RuleId "DummyName \"Main\"" then
                    do           di.addRuleHistory rule.ruleId h
                return result
            }
    
            type CheckHistoryDI = {
                tryFindRule : TargetId -> Rule option
            }
            let checkHistoryDI (di:CheckHistoryDI) (hisO:RuleHistory option) : AsyncResult<_, _> = asyncResult {
                match hisO with
                | None   -> return false
                | Some h -> let! different =
                                h.dependencies
                                |> AR.traverseSeq   (fun (tgt, info) -> tgt.CurrentState() |> AR.map ( (<>) info ) )
                                |> AR.map           (Seq.exists id)
                            if different then return false else
                            let  rids = h.dependencies |>  Seq.choose (fun (tgt, _) -> tgt.TargetId() |> di.tryFindRule )
                            return rids |> Seq.exists (fun r -> h.steps |> Seq.contains r.ruleId |> not) |> not
            }
    
            type TryFindRuleDI = {
                getRules   : unit -> seq<Rule>
            }
            let tryFindRuleDI (di:TryFindRuleDI) tid =
                let rules = di.getRules()
                rules |> Seq.tryFind (fun rul -> rul.ruleTargets |> Seq.exists (fun t -> t.TargetId() = tid ) )
    
            let getTarget (rule: Rule) : ITarget =
                match Seq.tryHead rule.ruleTargets with
                | None        -> failwithf "Rule has no Target: %A" rule
                | Some target -> target
    
            let createRule f p (tgt:ITarget) = {
                ruleId          = RuleId <| tgt.TargetId().V
                ruleTargets     = [| tgt |]
                ruleActionRA    = f p
            }
            
    module Rules =
        open Make2
        open Serializer
    
        let serFileName : Ser<FileName> = serString |> Serializer.map (fun (FileName name) -> name) FileName
    
        let serFileState : Ser<FileState> = serDup(serDate2, serInt64) |> serOpt |> Serializer.map (fun (FileState v) -> v) FileState
    
        type ILikeFile =
            abstract GetState           : unit ->              AsyncResult<FileState    , ErrorType>
            abstract SaveTextFO         : unit -> (string   -> AsyncResult<unit         , ErrorType>) option
            abstract SaveFromFileFO     : unit -> (FileName -> AsyncResult<unit         , ErrorType>) option
            abstract GetTextFO          : unit -> (unit     -> AsyncResult<string       , ErrorType>) option
            abstract GetLocalFileNameFO : unit -> (unit     -> AsyncResult<ITempFileName, ErrorType>) option
    
        type ILikeFileTgt = inherit ILikeFile inherit ITarget
    
        type LikeFileTgt<'D, 'S when 'D : equality and 'D : comparison>( data:'D
                                                                        , serD: Serializer.Ser<'D>
                                                                        , serS: Serializer.Ser<'S>
                                                                        , f:'D -> AsyncResult<'S, ErrorType> 
                                                                        , getState
                                                                        , saveTextFO        
                                                                        , saveFromFileFO    
                                                                        , getTextFO         
                                                                        , getLocalFileNameFO
                                                                        ) =
            let serTarget = serD |> Serializer.map (fun (tg:LikeFileTgt<'D,'S>) -> tg.Data) (fun dt -> LikeFileTgt(dt, serD, serS, f
                                                                        , getState
                                                                        , saveTextFO        
                                                                        , saveFromFileFO    
                                                                        , getTextFO         
                                                                        , getLocalFileNameFO))
            let _         = serTarget   |> Serializer.serSpecial
            let _         = serS        |> Serializer.serSpecial
            member __.Data = data
            interface ILikeFileTgt 
            interface ITarget with
                member __.TargetId    () = sprintf "%A" data |> TargetId
                member __.TargetData  () = box data          |> TargetData
                member __.CurrentState() = f data   |> AR.map (box >> TargetState)
                member __.CompareStates (TargetState a) (TargetState b) =  a = b
            override this.Equals(yobj) =
                match yobj with
                | :? LikeFileTgt<'D, 'S> as y -> data = y.Data
                | _                               -> false
            override this.GetHashCode() = hash data
            interface System.IComparable with
                member this.CompareTo yobj =
                    match yobj with
                    | :? LikeFileTgt<'D, 'S> as y -> compare data                       y.Data
                    | _                               -> compare (this.GetType().FullName) (yobj.GetType().FullName)
            override __.ToString() = sprintf "Target: %A" data        
            interface ILikeFile with
                member __.GetState           () = getState()
                member __.SaveTextFO         () = saveTextFO        
                member __.SaveFromFileFO     () = saveFromFileFO    
                member __.GetTextFO          () = getTextFO         
                member __.GetLocalFileNameFO () = getLocalFileNameFO
    
    
        type Snippet = Snippet of path:string * code:bool with member this.V = match this with Snippet(f, c) -> f, c 
        let serSnippet : Ser<Snippet> = serDup(serString, serBool) |> Serializer.map (fun (Snippet(path,code)) -> path, code) Snippet
    
        type SnippetTargetDI = {
            getSnippetState : Snippet           -> AsyncResult<FileState, ErrorType>
            setSnippet      : Snippet -> string -> AsyncResult<unit     , ErrorType>
            getSnippet      : Snippet           -> AsyncResult<string   , ErrorType>
        }
        let snippetTargetDI (di:SnippetTargetDI) sp = 
            LikeFileTgt(sp, serSnippet, serFileState, di.getSnippetState
                ,    (fun () -> di.getSnippetState sp)
                ,Some(          di.setSnippet      sp)
                ,None
                ,Some(fun () -> di.getSnippet      sp)
                ,None)
                :> ILikeFileTgt
    
        type LocalFileTargetDI = {
            getLocalFileState   : FileName              -> AsyncResult<FileState, ErrorType> 
            writeFile           : FileName -> string    -> AsyncResult<unit     , ErrorType>
            copyFile            : FileName -> FileName  -> AsyncResult<unit     , ErrorType>
            readFile            : FileName              -> AsyncResult<string   , ErrorType>
        }
        let localFileTargetDI (di:LocalFileTargetDI) fname  = // : ILikeFileTgt = 
            LikeFileTgt(fname, serFileName, serFileState, di.getLocalFileState
                ,    (fun () -> di.getLocalFileState   fname  )
                ,Some(          di.writeFile           fname  )
                ,Some(fun f1 -> di.copyFile       f1   fname  )
                ,Some(fun () -> di.readFile            fname  )
                ,Some(fun () -> new NonTempFileName(fname.V) :> ITempFileName |> AR.rtn))
    
        type Logger =
            abstract Logf : Printf.StringFormat<'a,unit> -> 'a
    
        type CopyFrom0DI = {
            Rule_need           : ITarget -> AsyncResult<TargetState, ErrorType>
            copyFile            : FileName -> FileName  -> AsyncResult<unit         , ErrorType>
            writeFile           : FileName -> string    -> AsyncResult<unit         , ErrorType>
            readFile            : FileName              -> AsyncResult<string       , ErrorType>
            tempFileName        : unit                  -> AsyncResult<ITempFileName, ErrorType>
            log                 : Logger
        }
        let copyFrom0DI (di:CopyFrom0DI) transformO (file1:ILikeFileTgt) (target : ILikeFileTgt) = asyncResult {
            let! _          = file1 :> ITarget|> di.Rule_need
            let! f1state    = file1.GetState()
            match f1state with
            | FileState None -> 
                di.log.Logf "Source missing %s" (file1.TargetId().V)
                return NothingToDo
            |_->
            di.log.Logf "Copying from %s to %s" (file1.TargetId().V) (target.TargetId().V)
            let tO, getFileFO, getTextFO =
                match transformO, file1.GetLocalFileNameFO(), file1.GetTextFO() with
                | _      , None    , None          -> failwithf "Cannot copy from %s" (file1.TargetId().V)
                | Some t , _       , Some getText  -> None, None    , Some(getText >> (AR.map t) )
                |      tO, getFileO,      getTextO -> tO  , getFileO, getTextO
            let saveFileFO, saveTextFO =
                match tO, target.SaveFromFileFO(), target.SaveTextFO() with
                | _     , None          , None           -> failwithf "Cannot copy to %s" (target.TargetId().V)
                | None  ,      saveFileO,      saveTextO -> saveFileO, saveTextO
                | Some t, _             , Some saveText  -> None     , Some(t >> saveText)
                | Some t, Some saveFile , _              -> None     , Some(fun txt -> asyncResult {
                                                                            use! fname = di.tempFileName()
                                                                            do!          di.writeFile (FileName (fname : ITempFileName).Name) (t txt)
                                                                            do!          saveFile  (FileName fname.Name)
                                                                        })
            match getFileFO, getTextFO, saveFileFO, saveTextFO with
            | _           , Some getText, _            , Some saveText   -> do!          getText() |> AR.bind saveText
            | Some getFile, _           , Some saveFile, _               -> use! fname = getFile()
                                                                            do!          saveFile  (FileName (fname : ITempFileName).Name)
            | Some getFile, _           ,  _           , Some saveText   -> use! fname = getFile()
                                                                            let! txt   = di.readFile  (FileName (fname : ITempFileName).Name)
                                                                            do!          saveText txt
            | _           , Some getText, Some saveFile, _               -> let! txt   = getText()
                                                                            use! fname = di.tempFileName()
                                                                            do!          di.writeFile (FileName (fname : ITempFileName).Name) txt
                                                                            do!          saveFile  (FileName fname.Name)
            |_                                                           -> failwithf "Cannot copy from %s to %s" (file1.TargetId().V) (target.TargetId().V)
            //do              Target.resetGetInfo()
            return FileCopied
        }
    
        type CopyFromDI = {
            copyFrom0      : (string -> string) option -> ILikeFileTgt -> ILikeFileTgt -> AsyncResult<RuleResult,ErrorType>
        }
        let copyFromDI (di:CopyFromDI) transformO (file1:#ILikeFileTgt) rule = asyncResult {
            let  target = Rule.getTarget rule
            let  target = target :?> ILikeFileTgt
            return!     di.copyFrom0 transformO (file1:>ILikeFileTgt) target
        }
    
        type NeedAllFromDI = {
            Rule_need : ITarget -> AsyncResult<TargetState, ErrorType>
        }
        let needAllFromDI (di:NeedAllFromDI) (sources: ITarget seq) (rule:Rule) : AsyncResult<_,_> = asyncResult {
            let! srcs = sources |> AR.traverseSeq di.Rule_need |> AR.map (Seq.iter ignore)
            return      NothingToDo
        }
    
        let splitHtml txt = txt |> String.splitInTwoO "<<STARTHTML>>" |> Option.map snd |> Option.defaultValue txt
    
        type RulesDI = {
            Environment_getVar  : string                    -> AsyncResult<string, ErrorType>
            snippetTarget       : Snippet                   -> ILikeFileTgt
            localFileTarget     : FileName                  -> ILikeFileTgt
            setRules            : Rule seq                  -> unit
            readHistory         : unit                      -> unit
            Rule_updateTarget   : ITarget                   -> AsyncResult<RuleResult, ErrorType>
            copyFrom            : (string -> string) option ->
                                  ILikeFileTgt              -> 
                                  Rule                      -> AsyncResult<RuleResult, ErrorType>
            needAllFrom         : seq<ITarget>              -> 
                                  Rule                      -> AsyncResult<RuleResult, ErrorType>
        }
        let rulesDI (di:RulesDI) () = 
            let ( ==> ) a (b:#ILikeFileTgt)   = Rule.createRule (di.copyFrom  None   ) a b
            let ( =&> ) a (b:#ILikeFileTgt) f = Rule.createRule (di.copyFrom (Some f)) a b
            let ( *=> ) sources tgt           = Rule.createRule  di.needAllFrom sources tgt
    
            asyncResult {
            let  rootDir    = "D:\Abe\CIPHERWorkspace\FSharpStation/projects/ProzperServer"
            let  tgtMain    = dummyTarget "Main"
            let! container  = di.Environment_getVar "container"
            let! share      = di.Environment_getVar "share"
            let! indexHtml  = di.Environment_getVar "indexHtml"
            let! jsFile     = di.Environment_getVar "jsFile"
            let  indexSnip  = di.snippetTarget            <| Snippet  ("FsRoot/Applications/ProzperServer/Html/" + indexHtml  , true     )
            let  tgt0       = di.snippetTarget            <| Snippet  ("FSI ZONE/Test", false)
            let  tgt1       = di.localFileTarget          <| FileName @"D:\Abe\CIPHERWorkspace\FSharpStation/src/file1.txt"
            let  tgt2       = di.localFileTarget          <| FileName @"D:\Abe\CIPHERWorkspace\FSharpStation/src/file2.txt"
            //let  tgt4       = IAzureM.azureBlobTarget  <| IAzureM.AzureBlob ("file3.txt"               , container)  
            //let  tgt3       = IAzureM.azureShareTarget <| IAzureM.AzureShare("site/wwwroot/file3.txt"  , share    )
            di.setRules <| seq [
                indexSnip =&> tgt1 <| splitHtml
                tgt1      ==> tgt2
                //tgt2      ==> tgt3
                //indexSnip ==> tgt4
                [ tgt2 ]  *=> tgtMain
            ]
            //let  consentMdSnip    =         Snippet   ("FsRoot/Applications/ProzperServer/Html/AzureLogin/content-wrapper/Consentimiento.md"     , false) |> di.snippetTarget
            //let  consentHtmlSnip  =         Snippet   ("FsRoot/Applications/ProzperServer/Html/AzureLogin/content-wrapper/Consentimiento.md.html", false) |> di.snippetTarget
            //let  contratoMdSnip   =         Snippet   ("FsRoot/Applications/ProzperServer/Html/Contrato/Contrato.md"                             , false) |> di.snippetTarget
            //let  contratoHtmlSnip =         Snippet   ("FsRoot/Applications/ProzperServer/Html/Contrato/Contrato.md.html"                        , false) |> di.snippetTarget
            //let  proxiesSnp       =         Snippet   ("FsRoot/Applications/ProzperServer/proxies.json"                                          , false) |> di.snippetTarget
            //let  extensionsSnp    =         Snippet   ("FsRoot/Applications/ProzperServer/extensions.json"                                       , false) |> di.snippetTarget
            //let  indexSnip        =         Snippet   ("FsRoot/Applications/ProzperServer/Html/"              + indexHtml                        , true ) |> di.snippetTarget
            //let  msalSnip         =         Snippet   ("FsRoot/Applications/ProzperServer/Html/Msal.html"                                        , true ) |> di.snippetTarget
            //let  azureLoginSnip   =         Snippet   ("FsRoot/Applications/ProzperServer/Html/AzureLogin/AzureLogin.html"                       , true ) |> di.snippetTarget
            //let  footerSnp        =         Snippet   ("FsRoot/Applications/ProzperServer/Html/footer"                                           , false) |> di.snippetTarget
            //let  footerCopySnp    =         Snippet   ("FsRoot/Applications/ProzperServer/Html/AzureLogin/footer(Copy)"                          , false) |> di.snippetTarget
            //let  serverDll        = IAzureM.AzureShare("site/wwwroot/bin/ProzperServer.dll"                   , share     ) |> IAzureM.azureShareTarget
            //let  indexFile        = IAzureM.AzureBlob (                                             indexHtml , container ) |> IAzureM.azureBlobTarget
            //let  msalFile         = IAzureM.AzureBlob (                                            "Msal.html", container ) |> IAzureM.azureBlobTarget
            //let  azureLoginFile   = IAzureM.AzureBlob (                                      "AzureLogin.html", container ) |> IAzureM.azureBlobTarget
            //let  preambleFile     = IAzureM.AzureBlob (                              "Scripts/MsalPreamble.js", container ) |> IAzureM.azureBlobTarget
            //let  clientFile       = IAzureM.AzureBlob (                              "Scripts/"      + jsFile , container ) |> IAzureM.azureBlobTarget
            //let  extensionsJson   = IAzureM.AzureShare("site/wwwroot/bin/extensions.json"                     , share     ) |> IAzureM.azureShareTarget 
            //let  proxiesJson      = IAzureM.AzureShare("site/wwwroot/proxies.json"                            , share     ) |> IAzureM.azureShareTarget 
    
            //let  serverDllRule    = createCompileDllSnippetRule "FsRoot/Applications/ProzperServer/ProzperServer" : Rule
            //let  preambleRule     = createCompileJsSnippetRule false "MsalPreamble" "FsRoot/Testing/TestingJS/Msal 1.0.0 v2"
            //let  clientRule       = createCompileJsSnippetRule false  jsFile        "FsRoot/Applications/ProzperServer/ClientSide/MainProgram"
            //let  serverLocal      = Seq.head serverDllRule   .ruleTargets :?> ILikeFileTgt
            //let  preambleLocal    = Seq.head preambleRule    .ruleTargets :?> ILikeFileTgt
            //let  clientLocal      = Seq.head clientRule      .ruleTargets :?> ILikeFileTgt
            //use! serverLocalFile  = serverLocal.GetLocalFileNameFO().Value()
            //let  generateFuncRule = generateFunctionsJsonsRule share rootDir (FileName serverLocalFile.Name)
            //let  functionsLocal   = Seq.head generateFuncRule.ruleTargets
    
            //di.setRules <| seq [
            //    //serverDllRule
            //    //preambleRule
            //    //clientRule
            //    //generateFuncRule
            //    //serverLocal          ==> serverDll
            //    [contratoHtmlSnip]  *=> indexSnip
            //    [consentHtmlSnip ]  *=> azureLoginSnip
            //    consentMdSnip       =&> consentHtmlSnip  <| Markdown.TransformHtml
            //    contratoMdSnip      =&> contratoHtmlSnip <| Markdown.TransformHtml
            //    indexSnip           =&> indexFile        <| splitHtml
            //    msalSnip            =&> msalFile         <| splitHtml
            //    azureLoginSnip      =&> azureLoginFile   <| splitHtml
            //    proxiesSnp          ==> proxiesJson
            //    extensionsSnp       ==> extensionsJson
            //    footerSnp           ==> footerCopySnp
            //    preambleLocal       ==> preambleFile
            //    clientLocal         ==> clientFile
            //    [
            //        extensionsJson
            //        proxiesJson
            //        indexFile
            //        msalFile
            //        azureLoginFile
            //        serverDll
            //        preambleFile
            //        clientFile
            //        functionsLocal
            //    ]                   *=>     tgtMain
            //]
            do   di.readHistory()
            let! _ = tgtMain :> ITarget |> di.Rule_updateTarget
            return "Finished!"
        }
    
    module Handlers =
        open Rules    
    
        module Environment = 
            type TryGetVar = {
                tryGetVar : string -> AsyncResult<string option, ErrorType>
            }
            let tryGetVarDI (di:TryGetVar) v  = di.tryGetVar v
            let    getVarDI (di:TryGetVar) v  = di.tryGetVar v |> AR.map (Option.defaultWith (fun () -> failwithf "Environment var %A not found." v) )
    
        module FSSC =
    
            let getSnippetState snippet = asyncResult {
                match snippet with
                | Snippet(snippetName, isCode) ->
                    return!
                        if isCode then
                            FSharpStationClient.getModified snippetName |> AsyncResult.map (fun mdf -> mdf, -1L)  
                        else
                            FSharpStationClient.getSnippet  snippetName |> AsyncResult.map (fun snp -> snp.snpModified, int64 snp.snpContent.Length)
                        |> Async.map (Result.toOption >> FileState)
            }
    
            let getSnippetTxt snippet = asyncResult {
                match snippet with
                | Snippet(snippetName, isCode) ->
                if isCode then
                    let! codeR      = FSharpStationClient.getCode snippetName
                    let! code0      = codeR |> Result.mapError (sprintf "%A" >> ErrorMessage)
                    return code0
                else
                    let! snippetR   = FSharpStationClient.getSnippet snippetName
                    let! snippet    = snippetR |> Result.mapError (sprintf "%A" >> ErrorMessage)
                    return snippet.snpContent
            }
    
            let setSnippetTxt snippet txt = 
                match snippet with
                | Snippet(_          , true ) -> failwithf "Snippet Code cannot be modified: %A" snippet
                | Snippet(snippetName, _    ) ->
                FSharpStationClient.actionCall2 "FSharpStation.setSnippetContent" snippetName txt 
                |> Async      .map (Result.mapError (sprintf "%A" >> ErrorMessage)) 
                |> AsyncResult.map  ignore
    
    
        let snippetTarget =
            snippetTargetDI {
                getSnippetState = FSSC.getSnippetState
                setSnippet      = FSSC.setSnippetTxt
                getSnippet      = FSSC.getSnippetTxt
            }
    
        module IO =
            open System.IO
            let getLocalFileState (FileName fname) =
                let fileInfo =  FileInfo fname
                if   fileInfo.Exists 
                then Some (fileInfo.LastWriteTimeUtc, fileInfo.Length)
                else None
                |> FileState
                |> AsyncResult.rtn
    
            let copyFile  (FileName f1) (FileName f2) = 
                if File.Exists f2 then File.Delete f2
                File.Copy(f1, f2)
                |> AsyncResult.rtn
    
            let readFile  (FileName fi)     = File.ReadAllText  fi       |> AsyncResult.rtn
            let writeFile (FileName fi) txt = File.WriteAllText(fi, txt) |> AsyncResult.rtn
    
        let localFileTarget =
            localFileTargetDI {
                getLocalFileState   = IO.getLocalFileState
                writeFile           = IO.writeFile
                copyFile            = IO.copyFile
                readFile            = IO.readFile
            }
    
        let setRules, getRules =
            let mutable rules = [||]
            (fun ruleSeq -> rules <- ruleSeq |> Seq.toArray)
            ,fun ()      -> rules            |> Seq.ofArray
    
        let readHistory, tryGetHistory, addRuleHistory =
            let mutable history = Map []
            (fun() -> ())
            ,(fun rid -> if history |> Map.containsKey rid then Some( history.[rid] ) else None)
            ,(fun (rid:RuleId)  (h:RuleHistory) -> history <- history |> Map.add rid h)
    
        let tryFindRule =
            Rule.tryFindRuleDI {
                getRules    = getRules
            }
    
        let checkHistory =
            Rule.checkHistoryDI {
                tryFindRule = tryFindRule
            }
    
        let getDepsSteps, setDepsSteps =
            let mutable state = { Rule.dependencies = Set.empty ; Rule.steps = Set.empty }
            (fun () -> state)
            ,fun deps steps -> state <- { Rule.dependencies = deps ; Rule.steps = steps }
    
        let addDepsSteps deps0 stps0 =
            let depsSteps = getDepsSteps()
            setDepsSteps(Set deps0 |> Set.union depsSteps.dependencies) (Set stps0 |> Set.union depsSteps.steps)
    
        let runRule =
            Rule.runRuleDI {
                Rule.now            = fun () -> System.DateTime.Now
                Rule.getDepsSteps   = getDepsSteps
                Rule.setDepsSteps   = setDepsSteps
                Rule.addRuleHistory = addRuleHistory
            }
    
        let runIfNecessary = 
            Rule.runIfNecessaryDI {
                tryGetHistory   = tryGetHistory
                checkHistory    = checkHistory
                addDepsSteps    = addDepsSteps
                runRule         = runRule
            }
    
        let updateTarget = 
            Rule.updateTargetDI {
                runIfNecessary  = runIfNecessary
                tryFindRule     = tryFindRule
            }
    
        let need =
            Rule.needDI {
                updateTarget    = updateTarget
                addDepsSteps    = addDepsSteps
            }
    
        let logger = { new Logger with member __.Logf fmt = Printf.kprintf (printfn "%s") fmt } 
    
        let copyFrom0 =
            copyFrom0DI {
                Rule_need           = need
                copyFile            = IO.copyFile
                writeFile           = IO.writeFile
                readFile            = IO.readFile
                tempFileName        = fun () -> new TempFileName() :> ITempFileName |> AsyncResult.rtn
                log                 = logger
            }
    
        let copyFrom =
            copyFromDI {
                copyFrom0      = copyFrom0
            }
    
        let needAllFrom =
            needAllFromDI {
                Rule_need = need
            }
    
        let getVar tryGetVar = 
            Environment.getVarDI {
                tryGetVar = tryGetVar >> AR.rtn           
            }
    
        let rules tryGetVar =
            rulesDI {
                Environment_getVar  = getVar tryGetVar
                snippetTarget       = snippetTarget
                localFileTarget     = fun p -> localFileTarget p :> ILikeFileTgt
                setRules            = setRules
                readHistory         = readHistory
                Rule_updateTarget   = updateTarget
                copyFrom            = copyFrom
                needAllFrom         = needAllFrom
            }
    
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
    [< AutoOpen >]
    module Execute =
    
        open FSharp.Data
    
        let [< Literal >] jsonSettings = @"D:\Abe\CIPHERWorkspace\AzureFunctions\Suave\bin\Debug\netstandard2.0\local.settings.json"
        type LocalJson = JsonProvider<jsonSettings>
    
        let settings0 = 
            lazy
                LocalJson.GetSample().Values.JsonValue.Properties()
                |> Seq.choose (function (k, JsonValue.String s) -> Some(k, s) |_-> None)
                |> Map
        let handler settings = fun v -> 
                settings
                |> Map
                |> Map.tryFind v
                |> Option.orElseWith(fun () -> Map.tryFind v settings0.Value )
    
        let desarrollo  = [
            "share"     , "prozper0a1d0"
            "container" , "prozperblobs"
            "jsFile"    , "prozperDes.js"
            "indexHtml" , "indexDes.html"
        ]
        let produccion = [   
            "share"     , "prozperab74"  
            "container" , "prozperblobs"
            "jsFile"    , "prozperProd.js"
            "indexHtml" , "index.html"
        ]
    
        
        let exec settings = 
            handler settings 
            |> Handlers.rules 
            |> AsyncResult.iterS print print
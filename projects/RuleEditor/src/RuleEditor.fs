#nowarn "52"
////-d:FSS_SERVER -d:FSharpStation1547097944900 -d:WEBSHARPER
////#cd @"..\projects\RuleEditor\src"
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
//#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
//#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
//#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
//#r @"..\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
//#r @"..\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
//#r @"..\packages\NewtonSoft.JSon\lib\net45\NewtonSoft.JSon.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
//#r @"..\..\LayoutEngine\bin\LayoutEngine.dll"
//#r @"..\packages\Owin\lib\net40\Owin.dll"
//#r @"..\packages\Microsoft.Owin.Hosting\lib\net451\Microsoft.Owin.Hosting.dll"
//#r @"..\packages\Microsoft.Owin.Host.HttpListener\lib\net451\Microsoft.Owin.Host.HttpListener.dll"
//#r @"..\packages\WebSharper.Owin\lib\net461\WebSharper.Owin.dll"
//#r @"..\packages\WebSharper.Owin\lib\net461\HttpMultipartParser.dll"
//#r @"..\packages\Microsoft.Owin.StaticFiles\lib\net451\Microsoft.Owin.StaticFiles.dll"
//#r @"..\packages\Microsoft.Owin.FileSystems\lib\net451\Microsoft.Owin.FileSystems.dll"
//#nowarn "52"
/// Root namespace for all code
//#define FSharpStation1547097944900
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
            
            [< Inline "(function (n) { return n.getFullYear() + '-' + ('0'+(n.getMonth()+1)).slice(-2) + '-' +  ('0'+n.getDay()).slice(-2) + ' '+('0'+n.getHours()).slice(-2)+ ':'+('0'+n.getMinutes()).slice(-2)+ ':'+('0'+n.getSeconds()).slice(-2)+ ':'+('00'+n.getMilliseconds()).slice(-3) })(new Date(Date.now()))" >]
            let nowStamp() = 
                let t = System.DateTime.UtcNow // in two steps to avoid Warning: The value has been copied to ensure the original is not mutated
                t.ToString("yyyy-MM-dd HH:mm:ss.fff", System.Globalization.CultureInfo.InvariantCulture)
            
            let [<Inline>] inline traceT t v = tee (sprintf "%A" >> (fun s -> s.[..min 100 s.Length-1]) >> printfn "%s %s: %A" (nowStamp()) t) v
            let [<Inline>] inline trace   v = traceT "trace" v
            let [<Inline>] inline traceI  v = trace          v |> ignore
            
            module Log =
                let [<Inline>] inline In     n f   =      (traceT (sprintf "%s in " n)) >> f
                let [<Inline>] inline Out    n f   = f >> (traceT (sprintf "%s out" n))
                let [<Inline>] inline InA    n f p = async { return! In  n f p }
                let [<Inline>] inline OutA   n f p = async { return! Out n f p }
                let [<Inline>] inline InOut  n     = In  n >> Out  n
                let [<Inline>] inline InOutA n f p = async {
                    let!   r = InA n f  p
                    do         Out n id r |> ignore
                    return r 
                  }
            
                let [<Inline>] inline TimeIt n f p =
                    printfn "Starting %s" n
                    let start = System.DateTime.UtcNow.Ticks
                    f p
                    let elapsedSpan = new System.TimeSpan(System.DateTime.UtcNow.Ticks - start)
                    print <| elapsedSpan.ToString()
            
            
            (* issues with websharper Type not found in JavaScript compilation: System.Collections.Generic.IDictionary`2
            module IDict =
            #if WEBSHARPER
                [< Inline >]
            #endif
                let inline tryGetValue key (dict:System.Collections.Generic.IDictionary<_, _>) =
                    let mutable res = Unchecked.defaultof<_>
                    if dict.TryGetValue(key, &res)
                    then Some res 
                    else None
                let add          key v (dict:System.Collections.Generic.IDictionary<_, _>) = if dict.ContainsKey key then      dict.[key] <- v else dict.Add(key, v)
            *)
            module Dict =
                let [<Inline>] inline tryGetValue key (dict:System.Collections.Generic. Dictionary<_, _>) =
                    let mutable res = Unchecked.defaultof<_>
                    if dict.TryGetValue(key, &res)
                    then Some res 
                    else None
                let add          key v (dict:System.Collections.Generic. Dictionary<_, _>) = if dict.ContainsKey key then      dict.[key] <- v else dict.Add(key, v)
            
            module LDict =
                let [<Inline>] inline containsKey  key  dict = (^a : (member ContainsKey : _ -> bool) (dict, key))
                //let inline item         key  dict = (^a : (member get_Item    : _ -> _   ) (dict, key))
                let [<Inline>] inline tryGetValue fitem key  dict =
                    if containsKey key dict then Some (fitem key)
                    else None
            
            
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
                    
                        let readerFun f = ask() |> map f 
                    
                        
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
                    let inline ofAsync            a  = FAM(fun (s, r) -> a |> Async.map (fun v -> Some v, s, NoMsg) )
                    let inline ofAsyncResultRM    a  = a |> ofAsync |> bind ofResultRM
                    let inline ofFusionM     (FM fm) = FAM(fun (s, r) -> async.Return (fm (s, r)) )
                
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
                    let iter                  fM f r = r   |> mapP f |> function ResultM(Some (), m) | ResultM(None, m) -> fM m  : unit
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
                        with  e -> return  ExceptMsg (e.Message, e.StackTrace) |> ErrorM
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
                        member __.Run              fRA                             = fRA ()
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
            
            /// Adapted from here http://fssnip.net/7V5   Usage:
            /// let abs n = if n >= 0 then n else Hole ? TODO_AbsForNegativeValue    
            ///         
            /// abs  1 |> printfn "%A" // 1
            /// abs -1 |> printfn "%A" // System.NotImplementedException: Incomplete hole 'TODO_AbsForNegativeValue : System.Int32'
            type Hole = Hole with
                [< Inline ; CompilerMessage("Incomplete hole", 130) >]
                static member inline Incomplete id : 'T = failwithf "Incomplete hole '%s'" id        
                    
            
            /// Tree structure to implement a hierarchical user interface but using Eff Reader and Rsl monad
            module TreeEff =
            
                type Node<'I, 'T, 'Eff when 'Eff :> Effect> = {
                    id                : unit                   -> 'I
                    getData           : unit                   -> 'T
                    isExpandedEf      : unit                   -> Eff<'Eff, bool                     >
                    canHaveChildrenEf : unit                   -> Eff<'Eff, bool                     >
                    childrenEf        : unit                   -> Eff<'Eff, Node<'I, 'T, 'Eff> seq   >
                    pathEf            : unit                   -> Eff<'Eff, 'I list                  >  // list of parents excluding itself
                    parentOEf         : Node<'I, 'T, 'Eff> seq -> Eff<'Eff, Node<'I, 'T, 'Eff> option>
                    newChildrenEf     : Node<'I, 'T, 'Eff> []  -> Eff<'Eff, Node<'I, 'T, 'Eff>       >  // set new children, make sure to exclude children not listed and maintain the order of the children (if desirable)
                }
            
                //let [<Inline>] inline toNode    (o: obj) = o :?> Node<_,_,_>
                //let [<Inline>] inline toSeqNode  os      = os |> Seq.map toNode
            
                let rec listNodes level (nodes: Node<_,_,_> seq) =
                    nodes
                    |> Seq.map(fun node -> 
                        node.isExpandedEf() 
                        >>= (fun exp -> if exp then node.childrenEf() |>> Seq.toArray >>= listNodes (level + 1) else rtn Seq.empty)
                        |>> (fun nodes -> Seq.append [ node, level ] nodes)
                    ) 
                    |> sequenceSeq
                    |>> Seq.collect id
            
                let removeNode (node:Node<_,_,_>) nodes = eff { // better use version removeNode2
                    let! path = node.pathEf()
                    printfn "path = %A" path
                    let rec chRemove (n:Node<_,_,_>) = eff {
                        if                  n.id() = node.id() then printfn "found it" ; return  None
                        elif List.contains (n.id())  path      then printfn "deeper" ; return! n.childrenEf()
                                                                            |>> Seq.toArray
                                                                            |>> Seq.map chRemove 
                                                                            >>= sequenceSeq 
                                                                            |>> Seq.choose id 
                                                                            |>> Seq.toArray
                                                                            >>= n.newChildrenEf  
                                                                            |>> Some
                        else                                        printfn "not" ;return  Some n
                    }
                    return! nodes |> Seq.map chRemove |> sequenceSeq |>> Seq.choose id
                }
            
                let removeNodes p nodes = eff {
                    let rec folder pair (n:Node<_,_,_>) = eff {
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
            
                let addNodeToSeq after p node (nodes:Node<_,_,_> seq)  =
                    seq [ for n in nodes do
                            if p n then
                                if after then yield n    ; yield node
                                else          yield node ; yield n
                            else              yield n
                    ]
                    
                let addToParent after p (node:Node<_,_,_>) (parent :Node<_,_,_>) (nodes:Node<_,_,_> seq)  = nodes |> addNodeToSeq after p node |> Seq.toArray |> parent.newChildrenEf
            
                let addSibling  after   (node:Node<_,_,_>) (sibling:Node<_,_,_>) (nodes:Node<_,_,_> seq) = 
                    let theSibling (n:Node<_,_,_>) = n.id() = sibling.id()
                    sibling.pathEf() >>= function
                    | [   ]          -> rtn <| addNodeToSeq after theSibling node nodes 
                    | parent :: path -> 
                    let rec mapAdd (n:Node<_,_,_>) =
                        if                  n.id() = parent then     n.childrenEf() |>> Seq.toArray >>= addToParent after theSibling node n
                        elif List.contains (n.id()) path    then     n.childrenEf() |>> Seq.toArray |>> Seq.map mapAdd >>= sequenceSeq |>> Seq.toArray >>= n.newChildrenEf 
                        else                                     rtn n
                    nodes |> Seq.map mapAdd |> sequenceSeq
            
                let tryFind p (nodes:Node<_,_,_> seq) = 
                    let rec folder resEf (node:Node<_,_,_>) =
                        resEf >>= function
                        | Some v -> rtn (Some v)
                        | None   ->
                        if p node then rtn <| Some node else 
                        node.childrenEf() >>= Seq.fold folder (rtn None)
                    nodes                 |>  Seq.fold folder (rtn None)
                    
                let tryFindId (id:'I) (nodes:Node<_,_,_> seq) = tryFind (fun n -> n.id() = id) nodes
            
                let moveToSibling after (node:Node<_,_,_>) (sibling:Node<_,_,_>) (nodes:Node<_,_,_> seq) = 
                    nodes
                    |>  removeNode node
                    >>= addSibling after node sibling
            
                let moveToSibling2 after (nodeId:'I) (siblingId:'I) (nodes:Node<_,_,_> seq) = eff {
                    let!  nodeO = nodes |> tryFindId nodeId
                    match nodeO with
                    | None         -> return  nodes
                    | Some node    ->
                    let!  siblingO = nodes |> tryFindId siblingId
                    match siblingO with
                    | None         -> return  nodes
                    | Some sibling -> return! moveToSibling after node sibling nodes
                }
            
                let addChild append (node:Node<_,_,_>) (parentN:Node<_,_,_>) (nodes:Node<_,_,_> seq) = eff {
                    let! path = parentN.pathEf()
                    let rec mapAppend (n:Node<_,_,_>) =
                        if   n.id() = parentN.id()       then 
                            if append                    then n.childrenEf() |>> Seq.toArray |>> swap Seq.append [ node ]                         |>> Seq.toArray >>= n.newChildrenEf
                            else                              n.childrenEf() |>> Seq.toArray |>>      Seq.append [ node ]                         |>> Seq.toArray >>= n.newChildrenEf
                        elif List.contains (n.id()) path then n.childrenEf() |>> Seq.toArray |>>      Seq.map mapAppend   >>= sequenceSeq |>> Seq.toArray >>= n.newChildrenEf
                        else                                  rtn n
                    return! nodes |> Seq.map mapAppend |> sequenceSeq
                }
            
                let indentNode (node:Node<_,_,_>) (nodes:Node<_,_,_> seq) = 
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
            
                let outdentNode (node:Node<_,_,_>) (nodes:Node<_,_,_> seq) =
                    node.parentOEf nodes
                    |>> Option.map          (fun parent -> moveToSibling true node parent nodes )
                    >>= Option.defaultValue (rtn nodes)
                    
                let removeNodeOutdentChildren (node:Node<_,_,_>) (nodes:Node<_,_,_> seq) =
                    node.childrenEf()
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
            
            module Var =
                let mutable private counter = 1
                let freshId () =
                    counter <- counter + 1
                    "varuid" + string counter
                        
                let lensView get update view0 (var: Var<_>) =
                    let id   = freshId()
                    let view = View.Map2 (fun v _ -> get v) var.View view0
                    { new Var<'V>() with
                        member this.Get        () = get (var.Get())
                        member this.Set         v = var.Update(fun t -> update t v)
                        member this.SetFinal    v = this.Set(v)
                        member this.Update      f = var.Update(fun t -> update t (f (get t)))
                        member this.UpdateMaybe f = var.UpdateMaybe(fun t -> Option.map (fun x -> update t x) (f (get t)))
                        member this.View          = view
                        member this.Id            = id
                    }
            
            module ListModel =
                let lensInto' (m:ListModel<_,_>) (get: 'T       -> 'V) (update: 'T -> 'V -> 'T) (key : 'Key) (view: View<'V>) : Var<'V> =
                    let id = Var.freshId()
                    { new Var<'V>() with
                        member r.Get         () = m.FindByKey key |> get
                        member r.Set         v  = m.UpdateBy (fun i -> v          |>             update i |> Some) key
                        member r.Update      f  = m.UpdateBy (fun i -> get i |> f |>             update i |> Some) key
                        member r.UpdateMaybe f  = m.UpdateBy (fun i -> get i |> f |> Option.map (update i)       ) key
                        member r.SetFinal    v  = r.Set v
                        member r.View           = view
                        member r.Id             = id
                    }
                let lensIntoO'(m: ListModel<_,_>) (get: 'T option -> 'V) (update: 'T -> 'V -> 'T) (key : 'Key) (view: View<'V>) : Var<'V> =
                    let id = Var.freshId()
                    { new Var<'V>() with
                        member r.Get         () = m.TryFindByKey key |> get
                        member r.Set         v  = m.UpdateBy (fun i -> v                  |>             update i |> Some) key
                        member r.Update      f  = m.UpdateBy (fun i -> Some i |> get |> f |>             update i |> Some) key
                        member r.UpdateMaybe f  = m.UpdateBy (fun i -> Some i |> get |> f |> Option.map (update i)       ) key
                        member r.SetFinal    v  = r.Set v
                        member r.View           = view
                        member r.Id             = id
                    }
                let docLensMapView      mapView (f: 'Key -> Var<'T> -> 'V) (m:ListModel<_,_>) =
                    let get k v = f k (lensInto' m   id                        (fun _ -> id) k v)
                    Doc.BindSeqCachedViewBy m.Key get (View.Map mapView m.View)
                let docLensMapViewO def mapView (f: 'Key -> Var<'T> -> 'V) (m:ListModel<_,_>) =
                    let get k v = f k (lensIntoO' m (Option.defaultValue def)  (fun _ -> id) k v)
                    Doc.BindSeqCachedViewBy m.Key get (View.Map mapView m.View)
                let lensDef def k (m:ListModel<_,_>) =
                    let get = Option.defaultValue def
                    lensIntoO' m get (fun _ -> id) k (m.TryFindByKeyAsView k |> View.Map get)
            
                let currentLensUpd def curr upd (model:ListModel<_,_>) = 
                    curr 
                    |> Var.lensView (Option.bind (model.TryFindByKey) >> Option.defaultValue def) 
                                    (fun kO v -> kO |> Option.iter (upd v) ; kO)
                                    model.View
                let currentLensUpd' def curr upd (model:ListModel<_,_>) = 
                    let view = curr |> View.Map2 (fun _mdl kO -> kO |> Option.bind model.TryFindByKey |> Option.defaultValue def) model.View
                    Var.Make view upd
                let currentLens def curr (model:ListModel<_,_>) = 
                    model 
                    |> currentLensUpd' def curr (fun v -> model.UpdateBy (fun _ -> model.TryFindByKey (model.Key v) |> Option.map (fun _ -> v) ) <| model.Key v)
                
            
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
                match JavaScript.String(value).Match(RegExp(expr, opt)) with
                | null         -> None
                | [| |]        -> None
                | m            -> Some m
            
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
                    async {
                      do! loader
                      return
                          div [ on.afterRender (fun elchild ->
                                 let editor        = Editor.Create elchild.ParentElement monc.options monc.overrides
                                 ResizeObserver.addResizeObserver editor.Layout elchild.ParentElement
                                 elchild.ParentNode.RemoveChild elchild |> ignore
                                 monc.editorO     <- Some editor
                                 monc.onRender |> Option.iter (fun onrender -> onrender editor)
                                 monc.var |> bindVarEditor editor.OnDidChangeModelContent editor.GetValue editor.SetValue monc.onChange
                                 //monc.disabled |> View.Sink (fun dis -> editor.SetOption("readOnly", if dis then "nocursor" :> obj else false :> obj) )
                          )    
                        ] []
                    } |> Doc.Async
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
                    
                    
    
    //#cd @"..\projects\RuleEditor\src"
    
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
    
    
    //#define WEBSHARPER
    [< JavaScript >]
    module RuleEditor =
        //#r "..\..\LayoutEngine\bin\LayoutEngine.dll"
        //#nowarn "1178" "1182" "3180" "52"
        
        [< AutoOpen >]
        module Templating =
            open WebSharper.UI.Templating
            let [< Literal >] rootdir = @"..\website"
        
            let [< Literal >] TemplatesFileName = rootdir + @"\Templates.html"
            type TemplateLib  = Template< TemplatesFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
            
            if IsClient then printfn "%s" TemplatesFileName
         
        [< JavaScript >]
        module CalculationModel =
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
            
            type ModId = ModId of Guid with member x.Id = match x with ModId id -> id
            type AttId = AttId of Guid with member x.Id = match x with AttId id -> id
            type ElmId = ElmId of Guid with member x.Id = match x with ElmId id -> id
            type CubId = CubId of Guid with member x.Id = match x with CubId id -> id
            type DimId = DimId of Guid with member x.Id = match x with DimId id -> id
            type CalId = CalId of Guid with member x.Id = match x with CalId id -> id
            type TotId = TotId of Guid with member x.Id = match x with TotId id -> id
            type ForId = ForId of Guid with member x.Id = match x with ForId id -> id
            type RulId = RulId of Guid with member x.Id = match x with RulId id -> id
            
            type Attribute = {
                attId          : AttId
                attName        : string
                attType        : AttType
                attTableNum    : int
            }
            
            type Element = {
                elmId          : ElmId
                elmDim         : DimId
                elmType        : ElmType
                elmName        : string
                elmDescription : string
                elmAttributes  : Map<AttId, string> 
                elmParents     : ElmId     []
            } 
            
            type Dimension = {
                dimId               : DimId
                dimName             : string
                dimPrefix           : string
                dimOrder            : string
                dimExclude          : bool
                dimFreeze           : bool
                dimType             : DimType
                defaultElm          : ElmId     option
                mutable dimElements : Element   []
                dimAttributes       : Attribute []
                isCalcDim           : bool
            }
            
            type UnaryOp = 
                | UoMinus
                | UoPlus
                
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
            
            type Function = Function of string
            
            type ElmReference =
                | ElemFixed   of DimId * ElmId
                | ElemDynamic of DimId * ExpressionText
                    
            and  ExpressionText =
                | ExtNA
                | ExtStet
                | ExtSlice      of Slice
                | ExtString     of string
                | ExtDimElement of DimId
                | ExtDimName    of DimId
                | ExtFunction   of Function         * ExpressionAny []
                | ExtIf         of ExpressionNumber * ExpressionText   * ExpressionText
            
            and  ExpressionNumber =
                | ExnNA
                | ExnStet
                | ExnSlice      of Slice
                | ExnNumber     of float
                | ExnOperationN of Operator         * ExpressionNumber * ExpressionNumber
                | ExnUnaryN     of UnaryOp          * ExpressionNumber
                | ExnOperationT of Operator         * ExpressionText   * ExpressionText
                | ExnOperationI of Operator         * ExpressionAny    * ExpressionAny
                | ExnFunction   of Function         * ExpressionAny []
                | ExnIf         of ExpressionNumber * ExpressionNumber * ExpressionNumber
                | ExnIsNA       of ExpressionNumber
                | ExnIsNAt      of ExpressionText
                | ExnIsNAa      of ExpressionAny
                
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
            } 
            
            type ForType = 
                | ForBase
                | ForConsolidated
                | ForAll
            
            type Formula = {
                forId          : ForId
                forDestDecl    : Map<DimId, string>
                forDestination : ElmReference list
                forDescription : string
                forText        : string
                forExpression  : ExpressionAny
                forType        : ForType
                forOrder       : string
            }
            
            type Calculation = {
                calId          : CalId
                calName        : string
                calDescription : string
                calOrder       : string
                format         : string
                isText         : bool
                isInput        : bool
                isBalance      : bool
                calDims        : Set<DimId>
                calFormulas    : Formula []
                cubIdO         : CubId   option
                properties     : Map<string, string>
            }
            
            type NodeId =
                | Calc of CalId
                | Tot  of TotId
            
            type Total = {
                totId          : TotId
                totName        : string
                totOrder       : string
                totFormat      : string
                children       : (float * NodeId) []
            }
            
            type RuleKey = 
                | RuleKey     of RulId
                | CalcRuleKey of CalId
                | FormulaKey  of ForId
                | ForTextKey  of ForId
                | ActualRuleKey 
                | InputRuleKey
                | ConsolidatedRuleKey
            
            type Cube = {
                cubId          : CubId
                cubName        : string
                cubRules       : Map<RuleKey, Rule option>
                cubRuleXmls    : Map<RuleKey, string>
                cubDims        : DimId []
                measureDim     : DimId option
                cubType        : CubeType
            }
            
            and  Rule = {
                rulId          : RulId
                rulSourceId    : IComparable
                rulDescription : string
                rulDestination : ElmReference list
                rulExpression  : ExpressionAny
                rulType        : ForType
                rulOrder       : string
                rulXml         : string
            }
            
            type RuleMsg =
            | GetInitModelStats
            | GetRulesForCube of CubId
            
            type ReplyMsg =
            | ReplyInformation of string
            | ReplyRules       of (RuleKey * string) []
            
            [<NoComparison ; NoEquality>]
            type Model = {
                modId           : ModId
                server          : string
                actualElem      : string
                modDims         : Dimension   []
                modCubes        : Cube        []
                modCalculations : Calculation []
            } 
            
            let Xmodel = 
              {
                modId           = ModId <| Guid.NewGuid()
                server          = @"local\Budget"
                actualElem      = "Actual"
                modDims         = [||]
                modCubes        = [||]
                modCalculations = [||]
              }
                
            let Map_adds kvs map = Seq.append (map |> Map.toSeq) kvs |> Map
            let calcSlice calc : Slice = 
                     {
                         sliDims       = Map.empty
                         calculation   = Some calc.calId
                         cube          = None
                     }
                
            type HelperTypeN = HelperTypeN with
                static member (&%>)  (HelperTypeN, a :     bool             ) : ExpressionNumber = ExnNumber <| if    a then 1.0 else 0.0
                static member (&%>)  (HelperTypeN, a :     int              ) : ExpressionNumber = ExnNumber <| float a
                static member (&%>)  (HelperTypeN, a :     float            ) : ExpressionNumber = ExnNumber          a
                static member (&%>)  (HelperTypeN, a :     Slice            ) : ExpressionNumber = ExnSlice           a
                static member (&%>)  (HelperTypeN, a :     Calculation      ) : ExpressionNumber = ExnSlice  <| calcSlice a
                static member (&%>)  (HelperTypeN, a :     ExpressionNumber ) : ExpressionNumber =                    a
                
            let [< Inline >] inline toExpN v : ExpressionNumber = HelperTypeN &%>  v
            
            type HelperTypeT = HelperTypeT with
                static member (&&>)  (HelperTypeT, a :     string           ) : ExpressionText   = ExtString          a 
                static member (&&>)  (HelperTypeT, a :     Dimension        ) : ExpressionText   = ExtDimName         a.dimId 
                static member (&&>)  (HelperTypeT, a :     Slice            ) : ExpressionText   = ExtSlice           a
                static member (&&>)  (HelperTypeT, a :     Calculation      ) : ExpressionText   = ExtSlice  <| calcSlice a
                static member (&&>)  (HelperTypeT, a :     ExpressionText   ) : ExpressionText   =                    a
            
            let [< Inline >] inline toExpT  v : ExpressionText = HelperTypeT &&>  v
            
            type HelperTypeA = HelperTypeA with
                [< Inline >]
                static member (&>>)  (HelperTypeA, a :     ExpressionNumber) : ExpressionAny = ExNumeric          a 
                [< Inline >]
                static member (&>>)  (HelperTypeA, a :     ExpressionText  ) : ExpressionAny = ExText             a
                [< Inline >]
                static member (&>>)  (HelperTypeA, a :     Slice           ) : ExpressionAny = ExiSlice           a
                [< Inline >]
                static member (&>>)  (HelperTypeA, a :     Calculation     ) : ExpressionAny = ExiSlice <| calcSlice a
                [< Inline >] 
                static member (&>>)  (HelperTypeA, a :     bool            ) : ExpressionAny = toExpN             a |> ExNumeric
                [< Inline >] 
                static member (&>>)  (HelperTypeA, a :     int             ) : ExpressionAny = toExpN             a |> ExNumeric
                [< Inline >] 
                static member (&>>)  (HelperTypeA, a :     float           ) : ExpressionAny = toExpN             a |> ExNumeric
                [< Inline >] 
                static member (&>>)  (HelperTypeA, a :     string          ) : ExpressionAny = toExpT             a |> ExText
                [< Inline >]
                static member (&>>)  (HelperTypeA, a :     ExpressionAny   ) : ExpressionAny =                    a
            
            let [< Inline >] inline toExpA  v : ExpressionAny = HelperTypeA &>>  v
        
            type Message =
                | DimensionNotFound      of DimId
                | DimensionHasNoElements of string
                | ElementNotFound        of string * ElmId
                | CubeNotFound           of CubId
                | CubeHasNoMeasureDim    of string
                | CalculationNotFound    of CalId
                | CalculationHasNoCube   of string
        
            let ofOptF f = Result.ofOption (fun () -> Message <| f())
            let ofOptS s = Result.ofOption (fun () -> Message <| s  )
        
            module internal Model0 =
                let getCubeO    cubId mdl = mdl.modCubes        |> Seq.tryFind (fun cub -> cub.cubId   =  cubId)
                let getDimO       dId mdl = mdl.modDims         |> Seq.tryFind (fun d   ->   d.dimId   =    dId)
                let getDimR       dId mdl = getDimO  dId mdl |> Result.ofOption (fun () -> DimensionNotFound   dId)
        
            module Element  =
                let newElement name = 
                  {
                    elmId          = ElmId <| Guid.NewGuid()
                    elmDim         = DimId <| Guid.NewGuid()
                    elmType        = EtString
                    elmName        = name
                    elmDescription = name
                    elmAttributes  = Map.empty
                    elmParents     = [||]
                  }
        
            module ElmReference =
                let dimId elr =
                    match elr with
                    | ElemFixed  (id, _)
                    | ElemDynamic(id, _) -> id
        
            module Slice =
                let newSlice ds = {
                         sliDims       = ds |> Seq.map (fun dr -> ElmReference.dimId dr, dr) |> Map 
                         calculation   = None
                         cube          = None
                }
                let forAll = {
                         sliDims       = Map.empty
                         calculation   = None
                         cube          = None
                }
                let addRef      elr slc = { slc with sliDims = slc.sliDims |> Map.add (ElmReference.dimId elr) elr }
                let containsDim did slc = slc.sliDims |> Map.containsKey did
           
            module Dimension =
                let getElementO      eId dim = dim.dimElements |> Seq.tryFind (fun e -> e.elmId = eId)    
                let getElementR      eId dim = getElementO eId dim |> Result.ofOption (fun () -> ElementNotFound(dim.dimName, eId))
                let newDimension id name isCalcDim =
                      {
                        dimId          = id 
                        dimName        = name
                        dimPrefix      = ""
                        dimOrder       = ""
                        dimExclude     = false
                        dimFreeze      = false
                        dimType        = DtOther
                        defaultElm     = None
                        dimElements    = [|  |]
                        dimAttributes  = [|  |]      
                        isCalcDim      = isCalcDim
                      }
                let newDimensionNonCalc id name  = newDimension id name false
                let newDimensionCalc    id name  = newDimension id name true 
                let New                    name  = newDimension (DimId <| Guid.NewGuid()) name false
                let [< Inline >] inline getElmReference it dim =
                    match toExpT it with 
                    | ExtString s1 -> let s2 = s1.Replace("_", " ")
                                      let elm =
                                         dim.dimElements                                 
                                         |> Seq.tryFind (fun e -> e.elmName = s2)
                                         |> Option.defaultWith (fun () -> 
                                             let newE = Element.newElement s2
                                             dim.dimElements <- Array.append dim.dimElements [| newE |]
                                             newE
                                         )
                                      ElemFixed  (dim.dimId, elm.elmId) 
                    | exp          -> ElemDynamic(dim.dimId, exp      )  
        //        member inline this.Item (it) = getElmReference it this
                //member inline this.__     it     = this.Item it
                //member inline this.M      it     = this.Item it
                //member inline this.E      it     = this.Item it
                //member inline this.I      it     = this.Item it
                let prefix  pr   dim  = { dim with dimPrefix = pr   }
                let dType   dt   dim  = { dim with dimType   = dt   }
                let setName name dim  = { dim with dimName   = name }
                let filter     dtypes : (Dimension seq -> Dimension seq) = Seq.filter (fun d -> dtypes |> Seq.contains d.dimType)
                let sort             (ds:Dimension seq)                  = ds |> Seq.sortBy (fun d -> d.dimOrder)
                let filterSort dtypes : (Dimension seq -> Dimension seq) = filter dtypes >> sort
        
            type Dimension with
                [< Inline >] 
                member inline this.Item (it) = Dimension.getElmReference it this
        
        
            module Cube =
                let slice cub : Slice  = 
                     {
                         sliDims       = Map.empty
                         calculation   = None
                         cube          = Some cub.cubId
                     }
                let containsDim dimId         cub = cub.cubDims |> Seq.contains dimId
                let isCalcCube                cub = cub.cubType = CtCalc    
                let newCubeId id name dims mDimO cType = 
                        {
                          cubId       = id
                          cubName     = name
                          cubDims     = dims
                          cubRules    = Map.empty
                          cubRuleXmls = Map.empty
                          measureDim  = mDimO
                          cubType     = cType
                        }
                let newCube     name            = newCubeId <| CubId (Guid.NewGuid()) <| name
                let newCubeCalc name dims mDimO = newCube name  dims mDimO CtCalc 
                let newCubeDims name dims mDimO = newCube name (dims |> Seq.map (fun d -> d.dimId) |> Seq.toArray) mDimO CtOther
                let New()                       = newCube "" [||] None CtOther
                let addRule     key rule  cub   = { cub with cubRules =                                              Map.add key rule         cub.cubRules }
                let addRules        rules cub   = { cub with cubRules = rules |> Seq.fold (fun rulesN (key, rule) -> Map.add key rule rulesN) cub.cubRules }
                //member inline this.Calc ()    = { this with cubType = CtCalc } 
                let forElr (es: ElmReference list) cub = { slice cub with sliDims = Map_adds (List.map (fun (e:ElmReference) -> ElmReference.dimId e, e) es) (slice cub).sliDims } 
                let dims            model cub   = model.modDims |> Array.filter(fun d -> cub.cubDims |> Array.exists ((=) d.dimId) )
                let measureDimO     model cub   = cub.measureDim    |> Option.bind (swap Model0.getDimO model)
                let measureDimR     model cub   = cub.measureDim         |> Result.ofOption (fun () -> CubeHasNoMeasureDim cub.cubName) |> Result.bind (swap Model0.getDimR model)
                let measureDimNameR model cub   = measureDimR model cub  |> Result.map (fun dim -> dim.dimName)
                
            module Calculation =
                let slice calc = calcSlice calc
                let calcType calc = if calc.isInput then "INPUT" else "CALC"    
                let newInput id (name: string) dims  =
                     {
                        calId          = id
                        calName        = name.Replace("_", " ").Trim()
                        calDescription = ""
                        calOrder       = ""
                        format         = "#,##0.00"
                        isText         = false
                        isInput        = true
                        isBalance      = false
                        calDims        = dims |> Set 
                        calFormulas    = [||]
                        cubIdO         = None
                        properties     = Map.empty
                     }
                let newCalc id name dims      = { newInput id name dims     with isInput     = false  }
                let New        ()             =   newInput (CalId <| Guid.NewGuid()) ""   []
                let setName    name      calc = { calc                   with calName     = name   }
                let setIsText  istext    calc = { calc                   with isText      = istext }
                let setOrder   order     calc = { calc                   with calOrder    = order  }
                let addFormula frml      calc = { calc                   with calFormulas = Array.append calc.calFormulas [| frml |] }
                let forSlice (es: ElmReference list) calc = { slice calc with sliDims = Map_adds (List.map (fun e -> ElmReference.dimId e, e) es) (slice calc).sliDims } 
                let addFormulas fs calc = if Seq.isEmpty fs then calc else { calc with calFormulas = fs |> Seq.toArray |> Array.append calc.calFormulas } 
                let withCube (model: Model) calc f = calc.cube |> Option.bind (swap Model0.getCubeO model) |> Option.bind f
                let [< Inline >] getElemRefO(model: Model) calc =
                    calc.cubIdO 
                    |> Option.bind (swap Model0.getCubeO model)
                    |> Option.bind (fun cub ->  cub.measureDim) 
                    |> Option.bind (swap Model0.getDimO  model)
                    |> Option.map  (Dimension.getElmReference calc.calName)
                let cubeR           c = c.cubIdO        |> ofOptF (fun () -> sprintf "Calculation '%s' has no cube" c.calName)
                let [< Inline >] getElemRefR   m c = getElemRefO m c |> ofOptF (fun () -> sprintf "Calcuation '%s' has no ElemRef" c.calName) 
                let sort             (cs:Calculation seq)                  = cs |> Seq.sortBy (fun c -> c.calOrder)
        
            module Total =
                let newTotal name  = {
                    totId          = TotId  <| System.Guid.NewGuid()
                    totName        = name
                    totOrder       = ""
                    totFormat      = ""
                    children       = [||]
                }
                let New() = newTotal ""
                
            module Model =
                let mergeBy f a b = Array.append (Seq.toArray a) (Array.filter (fun e -> a |> Seq.map f |> Seq.contains (f e) |> not ) b)
                let addCalcs     cs   mdl = { mdl with modCalculations = mergeBy (fun c -> c.calId) cs mdl.modCalculations }
                let addDims      ds   mdl = { mdl with modDims         = mergeBy (fun c -> c.dimId) ds mdl.modDims         }
                let addCubes     cs   mdl = { mdl with modCubes        = mergeBy (fun c -> c.cubId) cs mdl.modCubes        }
                let addForms     fs   mdl = { mdl with modCalculations = mdl.modCalculations |> Array.map (fun cal -> fs |> Seq.filter (fst >> (=) cal.calId) |> Seq.map snd |> Calculation.addFormulas <| cal) }
                let addCalc      calc mdl = { mdl with modCalculations = Array.append mdl.modCalculations [| calc |] }
                let addDim       dim  mdl = { mdl with modDims         = Array.append mdl.modDims         [| dim  |] }
                let addCube      cube mdl = { mdl with modCubes        = Array.append mdl.modCubes        [| cube |] }
                let addForm  cid frm  mdl = { mdl with modCalculations = mdl.modCalculations |> Array.map (fun cal -> if cal.calId = cid then Calculation.addFormula frm cal else cal) }
                let getDimO               = Model0.getDimO
                let getDimR               = Model0.getDimR
                let getCalcO      cId mdl = mdl.modCalculations |> Seq.tryFind (fun c   ->   c.calId   =    cId)
                let getCubeO              = Model0.getCubeO
                let getCalcR      cId mdl = getCalcO cId mdl |> Result.ofOption (fun () -> CalculationNotFound cId)
                let getCubeR      cId mdl = getCubeO cId mdl |> Result.ofOption (fun () -> CubeNotFound        cId)
                let pickCubeO      ct mdl = mdl.modCubes        |> Seq.tryPick (fun c   ->   if c.cubType = ct then Some c else None)
                let pickDimO       dt mdl = mdl.modDims         |> Seq.tryPick (fun d   ->   if d.dimType = dt then Some d else None)
                let pickCalcO      cn mdl = mdl.modCalculations |> Seq.tryPick (fun c   ->   if c.calName = cn then Some c else None)
                let freezeCubeO       mdl = pickCubeO CtFreeze   mdl
                let tCalcDimO         mdl = pickDimO  DtTCalc    mdl 
                let dataTypeDimO      mdl = pickDimO  DtDataType mdl
                let timeDimO          mdl = pickDimO  DtTime     mdl
                let versionDimO       mdl = pickDimO  DtVersion  mdl
                let isActualCalcO     mdl = pickCalcO "IsActual" mdl 
                let getCalcCube dims  mdl = 
                    mdl.modCubes 
                    |> Seq.filter  Cube.isCalcCube
                    |> Seq.tryFind (fun cub -> 
                        cub.cubDims 
                        |> Seq.filter (fun d -> Some d <> cub.measureDim) 
                        |> Set = dims )
                let setCube cubeN model = { model with modCubes = model.modCubes |> Array.map (fun cub -> if cub.cubId = cubeN.cubId then cubeN else cub ) }
                let withDimsO mdl cube f =
                    let (<*>)   = Option.apply
                    let dimMeaO = cube.measureDim |> Option.bind (swap getDimO mdl) 
                    Some f <*> dimMeaO <*> dataTypeDimO mdl <*> versionDimO mdl <*> timeDimO mdl |> Option.join
                let withDims mdl cube f = withDimsO mdl cube (fun a b c d -> f a b c d |> Some)
                let dimCombinations model =
                    model.modCalculations
                    |>  Seq.map (fun c -> c.calDims)
                    |>  Seq.distinct 
                let cubePrefix    = "Z"
                let measurePrefix = "M"
                let orderedDims dimIds model =
                        model.modDims 
                        |>  Seq.filter (fun d -> dimIds |> Seq.exists ((=) d.dimId) ) 
                let autoName dimIds model =
                    let nameBase =
                        model
                        |> orderedDims dimIds
                        |> Seq.map (fun d -> d.dimPrefix)
                        |>  String.concat ""
                    let similar =
                        model.modCubes
                        |> Seq.choose (fun c -> 
                            match cubePrefix + nameBase with
                            | n when c.cubName          = n -> Some -1
                            | n when c.cubName.StartsWith n -> c.cubName.[nameBase.Length + 1..] |> ParseO.parseIntO
                            | _                             -> None
                        ) 
                    nameBase
                  + if similar |> Seq.isEmpty then "" else similar |> Seq.max |> ((+) 1) |> sprintf "%d"
            
                let dimIds           model = model.modDims |> Array.map (fun d -> d.dimId)
                let fixForDimensions model =
                    //this.modCubes        <- this.modCubes        |>> fun cub -> { cub with cubDims = cub.cubDims |> Array.filter (fun d -> Seq.exists ((=) d) this.DimIds) }
                    let calcs = model.modCalculations |> Array.map (fun cal -> { cal with calDims = cal.calDims |> Set.filter   (fun d -> Seq.exists ((=) d) (dimIds model)) } )
                    { model with modCalculations = calcs }
                let newCalcCube dimIds model =
                    let name = autoName dimIds model
                    let mDim = Dimension.newDimensionCalc <| DimId (Guid.NewGuid()) <| measurePrefix + name
                    let orderedDimIds = 
                        model
                        |> orderedDims dimIds
                        |> Seq.append <| [ mDim ]
                        |> Seq.map (fun d -> d.dimId)
                        |> Seq.toArray
                    let dims  = Array.append model.modDims  [| mDim                                                                 |]
                    let cubes = Array.append model.modCubes [| Cube.newCubeCalc (cubePrefix + name) orderedDimIds (Some mDim.dimId) |]
                    { model with modDims = dims ; modCubes = cubes }
                let fixCalcsAndCubes model =
                    let calNoCube = model.modCalculations |> Array.filter (fun c -> c.cubIdO |> Option.bind (swap getCubeO model) |> Option.isNone)
                    if Seq.isEmpty calNoCube then model else
                        let modelN =
                            calNoCube
                            |> Seq.map      (fun c -> c.calDims)
                            |> Seq.distinct
                            |> Seq.filter   ((swap getCalcCube  model) >> Option.isNone)
                            |> Seq.fold      (swap newCalcCube) model
                        let calcs =
                            modelN.modCalculations
                            |> Array.map (fun oldC ->
                                    calNoCube 
                                    |> Seq.tryFind (fun newC -> newC.calId = oldC.calId)
                                    |> Option.map  (fun newC -> { newC with Calculation.cubIdO = (getCalcCube newC.calDims modelN) |> Option.map (fun cub -> cub.cubId) } )
                                    |> Option.defaultValue oldC
                              )
                        { modelN with modCalculations = calcs }
                let prepareModel model =
                    model
                    |> fixForDimensions 
                    |> fixCalcsAndCubes
                let addRules rules model =
                    rules
                    |> Seq.groupBy (fun (cubId, _, _) -> cubId)
                    |> Seq.fold (fun mdl (cubId, rules) ->
                        getCubeO cubId mdl
                        |> Option.map(fun cube ->
                            rules 
                            |> Seq.map (fun (_, key, rule) -> key, rule)
                            |> Cube.addRules <| cube
                            |> swap setCube mdl
                        )
                        |> Option.defaultValue mdl
                    ) model
                    
            
            module Formula =
                let [< Inline >] inline newFormula id dest exp  typ =
                      {
                          forId          = id
                          forDestDecl    = Map.empty
                          forDestination = dest
                          forDescription = ""
                          forText        = ""
                          forExpression  = toExpA exp
                          forType        = typ
                          forOrder       = ""
                      }
                let [< Inline >] inline newBase    id expr      = newFormula id []   expr ForBase        
                let [< Inline >] inline newBaseFor id expr dest = newFormula id dest expr ForBase        
                let [< Inline >] inline newCons    id expr      = newFormula id []   expr ForConsolidated
                let [< Inline >] inline newConsFor id expr dest = newFormula id dest expr ForConsolidated
                let [< Inline >] inline newAll     id expr      = newFormula id []   expr ForAll         
                let [< Inline >] inline newAllFor  id expr dest = newFormula id dest expr ForAll         
                let [< Inline >] inline New        ()        =
                      {
                          forId          = ForId <| Guid.NewGuid()
                          forDestDecl    = Map.empty
                          forDestination = []
                          forDescription = ""
                          forText        = ""
                          forExpression  = ExiStet
                          forType        = ForBase
                          forOrder       = ""
                      }
                let [< Inline >] inline forId      f         = f.forId
                let                     conso      frm       = { frm with forType  = ForConsolidated }
                let                     setText    txt  frm  = { frm with forText  = txt             }
                let                     setOrder   ord  frm  = { frm with forOrder = ord             }
                let getDimDest dim frm = 
                    frm.forDestination 
                    |> swap Seq.tryPick <| fun er -> if ElmReference.dimId er = dim.dimId then Some er else None
                
        
            module Rule =
                let [< Inline >] inline newRule0     dest exp typ order =
                      {
                          rulId          = RulId <| Guid.NewGuid()
                          rulDestination = dest
                          rulDescription = ""
                          rulExpression  = exp
                          rulType        = typ
                          rulOrder       = order
                          rulSourceId    = None
                          rulXml         = ""
                      }
                let [< Inline >] inline newRule     dest exp typ order = newRule0     dest (toExpA exp) typ order
                let [< Inline >] inline newRuleDest dest exp typ = newRule (dest.sliDims |> Map.toList |> List.map snd) exp typ
                let New() = newRule0 [] ExiStet ForBase ""
                let conso rul = { rul with rulType = ForConsolidated }    
            
            module Attribute =
                let New() = 
                    {
                        attId            = AttId <| Guid.NewGuid()
                        attName          = ""
                        attTableNum      = 1
                        attType          = AtString
                    }
            
        module Tree =
            open CalculationModel
            open TreeEff
        //    open FusionM
            open Operators
        
            type TreeNodeId = TreeNodeId of System.Guid
        
            type Weight =
            | Zero
            | Add
            | Subtract
        
            type TreeNode = {
                nid      : TreeNodeId
                expanded : bool
                element  : NodeId
                children : TreeNode []
                weight   : Weight
            } 
        
            type TreeCollection = {
                getParentO  : TreeNodeId                 -> TreeNode option
                //getNode     : TreeNodeId                 -> TreeNode
                getPath     : TreeNodeId                 -> TreeNodeId list
                setChildren : TreeNode   -> TreeNode seq -> TreeNode
            }
        
            let getParentOEf  nid     = Reader.ask() |>> fun treeC -> treeC.getParentO  nid
            //let getNodeEf     nid     = Reader.ask() |>> fun treeC -> treeC.getNode     nid
            let getPathEf     nid     = Reader.ask() |>> fun treeC -> treeC.getPath     nid
            let setChildrenEf node ch = Reader.ask() |>> fun treeC -> treeC.setChildren node ch
        
        //        static member FromNode (n:Tree.Node<_>) = n :?> TreeNode
        //        interface Tree.Node<TreeNodeId> with
        //            member node.Id                 = node.nid
        //            member node.isExpanded         = node.expanded
        //            member node.canHaveChildren    = match node.element with | Calc _ -> false | _ -> true
        //            member node.path               =   
        //                let rec getPath nid = parents |> Dict.tryGetValue nid |> Option.map Tree.toNode |> Option.map (fun n -> n.Id :: n.path) |> Option.defaultValue []
        //                getPath node.nid
        //            member node.children           =   node     .children   |> Tree.toSeqNode
        //            member node.newChildren     ch = { node with children = ch 
        //                                                                    |> Seq.map   (fun n -> n :?> TreeNode    ) 
        //                                                                    |> Seq.filter(fun n -> 
        //                                                                        parents 
        //                                                                        |> Dict.tryGetValue n.nid 
        //                                                                        |> Option.map (fun v -> 
        //                                                                            if v :?> TreeNode <> node then 
        //                                                                                parents.Remove n.nid |> ignore
        //                                                                                parents.Add(n.nid, node)
        //                                                                        )
        //                                                                        |> Option.defaultWith(fun () ->
        //                                                                            parents.Add(n.nid, node)
        //                                                                        )
        //                                                                        true)
        //                                                                    |> Seq.toArray } |> Tree.toNode
        //            member node.parent          ns = parents |> Dict.tryGetValue node.nid |> Option.map Tree.toNode
        
        module TreeNode =
            open Tree
            open TreeEff
            open CalculationModel
        
            let ofNode    n  = n.getData()
            let rec treenode (node:TreeNode) =
                {
                    id                 = fun () -> node.nid
                    getData            = fun () -> node
                    isExpandedEf       = fun () -> rtn <| node.expanded
                    canHaveChildrenEf  = fun () -> rtn <| match node.element with | Calc _ -> false | _ -> true
                    childrenEf         = fun () -> node.children |> Seq.map treenode |> rtn 
                    newChildrenEf      = fun ch -> ch |> Seq.map ofNode |> setChildrenEf node     |>> treenode      
                    parentOEf          = fun _ns-> getParentOEf        node.nid |>> Option.map treenode
                    pathEf             = fun () -> getPathEf           node.nid
                }
        
            let newTreeNode ch = {
                nid      = TreeNodeId <| System.Guid.NewGuid()
                expanded = true
                children = [||]
                element  = ch
                weight   = Add
            }
            let newNodeCalc cid = newTreeNode <| Calc cid
            let newNodeTot  tid = newTreeNode <| Tot  tid
            let removeNodesEf    p   (nodes: TreeNode seq) = nodes |> Seq.map treenode |> TreeEff.removeNodes (ofNode >> p) |>> Seq.map ofNode
            let getElement n = n.element
            let getTId = function | Tot  tid -> Some tid | _ -> None
            let getCId = function | Calc cid -> Some cid | _ -> None
            let forTId p = getElement >> getTId >> (Option.map p ) >> Option.defaultValue false
            let forCId p = getElement >> getCId >> (Option.map p ) >> Option.defaultValue false
        
            let tryFindTreeNodeEf  p   (nodes: TreeNode seq) = nodes |> Seq.map treenode |> TreeEff.tryFind     (ofNode >> p) |>> Option.map ofNode
            let tryFindNodeEf      nid (nodes: TreeNode seq) = nodes |> tryFindTreeNodeEf (fun n -> n.nid = nid)
            let tryFindSelNodeEf   sel (nodes: TreeNode seq) = sel   |> Option.map fst     |> Option.map (swap tryFindNodeEf nodes) |> insertO |>> Option.bind id
            let tryFindSelChildEf  sel (nodes: TreeNode seq) = nodes |> tryFindSelNodeEf sel |>> Option.map getElement
            let tryFindNodeTIdEf   tid (nodes: TreeNode seq) = nodes |> tryFindTreeNodeEf (forTId ((=) tid) )
            let tryFindNodeCIdEf   cid (nodes: TreeNode seq) = nodes |> tryFindTreeNodeEf (forCId ((=) cid) )    
        
        module Monaco =
            open Monaco
            type HoverProvider(ed:Editor) =
                do()
               with
                  member __.provideHover(model:Model, pos:Position, token:obj) =
                      let word = model.GetWordAtPosition pos
                      if isUndefined word then box null |> unbox else
                      {
                          contents = { value = word?word |> sprintf "The word is: %s" ; isTrusted = true } |> Array.singleton
                          range    = {
                                        startLineNumber = pos.lineNumber
                                        endLineNumber   = pos.lineNumber
                                        startColumn     = word.startColumn
                                        endColumn       = word.endColumn
                                     }
                      }
        
            type CompletionItemProvider(ed:Editor) =
                do()
               with
                  member __.provideCompletionItems(model:Model, pos:Position, token:obj, context: obj): CompletionItem[] =
                      let word = model.GetWordAtPosition pos
                      if isUndefined word then box null |> unbox else
                      [|
                        { kind = CompletionItemKind.Function ; label = "Hello"   ; detail = ""}
                        { kind = CompletionItemKind.Function ; label = "How"     ; detail = ""}
                        { kind = CompletionItemKind.Function ; label = "Are"     ; detail = ""}
                        { kind = CompletionItemKind.Function ; label = "You"     ; detail = ""}
                        { kind = CompletionItemKind.Function ; label = word?word ; detail = ""}
        
                      |]
                  member __.resolveCompletionItem(item: CompletionItem, token: obj): CompletionItem = { item with detail = "more details" }
            type DefinitionProvider(ed:Editor) =
                do()
               with
                  member __.provideDefinition(model: Model, pos: Position, token: obj): Location =
                      let word = model.GetWordAtPosition pos
                      if isUndefined word then box null |> unbox else
                      let ms = model.FindMatches(word.word, false, false, true, " <>()+-=.,/#@$%^&*\"", false, 1)
                      if ms.Length = 0    then box null |> unbox else
                      { range = ms.[0].range
                        uri = model.uri
                      }
        
            let annotationsV = Var.Create "Err (1, 7) - (1, 12): \"This shows over there as an error\".\nWarn (2, 7) - (2, 12): \"This shows over there as a warning\".\nInfo (3, 7) - (3, 12): \"This shows over there as information\".\nHint (4, 7) - (4, 12): \"This shows over there as a hint\"."
            let transformAnnotations msgs =
                let rex  = """(Err|Warn|Info|Hint) \((\d+)\,\s*(\d+)\) - \((\d+)\,\s*(\d+)\)\: "([^"]+?)"\.""" //"
                match msgs with
                | REGEX rex "g" m -> m
                | _               -> [||]
                |> Array.choose (fun v ->
                    match v with
                    | REGEX rex "" [| _ ; ty ; fl;     fc;     tl;     tc; msg |] 
                             -> Some (ty, int fl, int fc, int tl, int tc, msg)
                    | _      -> None
                )
                |> Array.map (fun (ty, fl, fc, tl, tc, msg) ->
                        { message  = msg
                          severity = match ty with "Err" -> MarkerSeverity.Error | "Warn" -> MarkerSeverity.Warning  | "Hint" -> MarkerSeverity.Hint |_-> MarkerSeverity.Info
                          startColumn     = fc
                          endColumn       = tc
                          startLineNumber = fl
                          endLineNumber   = tl
                        }
                  )        
                    
                
            let monacoNew        (var           : Var<string>                         ) 
                                 (annotationsWO : View<MarkerData []>           option) 
                                 (showToolTipO  :(string -> int -> int -> unit) option) 
                                 (getHintsO     :(((string * string * string) [] -> int * int -> int * int -> unit) 
                                               -> string -> int -> int -> unit) option) =
            
                let setDirtyCond() = ()
                let getHints    _  = ()
                                    
                Monaco.newVar var
                |> onRender(fun ed -> 
                    Editor.SetModelLanguage(ed.GetModel(), "fsharp")
                    Editor.SetTheme("vs-dark")
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
                    |> Option.iter( View.Sink (fun ms -> Editor.SetModelMarkers(ed.GetModel(), "annotations", ms)) 
                    )
                )
        
                
        //#r @"Compiled\CalculationModelDll\CalculationModelDll.dll"
        open CalculationModel
        
        type Selection  = (Tree.TreeNodeId * (ForId option)) option
        
        type Version = {
            major     : int
            minor     : int
            majorDate : string
            minorDate : string
        }
        
        module Version =
            let New() = {
                major     = 0
                minor     = 0
                majorDate = ""
                minorDate = ""
            }
            let incrementMinor v = { v with minor = v.minor + 1; minorDate = nowStamp() }
            let incrementMajor v = {        major = v.major + 1; majorDate = nowStamp()
                                            minor = 0          ; minorDate = nowStamp() }
        
        type ModelUI = {
            treeHierarchy : Var<Tree.TreeNode []>
            calculations  : ListModel<CalId        , Calculation>
            totals        : ListModel<TotId        , Total      >
            dimensions    : ListModel<DimId        , Dimension  >
            cubes         : ListModel<CubId        , Cube       >
            globalDefs    : Var<string>
            server        : Var<string>
            selection     : Var<Selection>
            selectedDim   : Var<DimId option>
            selectedCube  : Var<CubId option>
            collapsed     : ListModel<TotId * TotId list, TotId * TotId list>
            cubePrefix    : Var<string>
            measurePrefix : Var<string>
            outputMsgs    : Var<string>
            codeFS        : Var<string>
            parserMsgs    : Var<string>
            fileName      : Var<string>
            version       : Var<Version>
        }
        
        type MsgModel =
        | AddTotal
        | SelectTotal       of TotId
        | RemoveTotal       of TotId
        | AddCalculation
        | RemoveCube        of CubId
        | RenameCube        of CubId * string
        | AddCube           of         string * Set<DimId>
        | RemoveCalculation of CalId
        | SelectCalculation of CalId
        | AddFormula        of CalId
        | RemoveFormula     of ForId
        | SelectFormula     of ForId
        | SelectFormNode    of ForId * Tree.TreeNodeId
        | SelectNode        of         Tree.TreeNodeId
        | ExpandNode        of bool  * Tree.TreeNodeId
        | IndentNode        of bool  * Tree.TreeNodeId
        | MoveNode          of bool  * Tree.TreeNodeId * Tree.TreeNodeId
        | AddDimension
        | RemoveDimension   of DimId
        | SelectDimension   of DimId
        | AddFormDim        of ForId * DimId * string
        | RemoveFormDim     of ForId * DimId
        | RemoveCalcDim     of CalId * DimId
        | AddCalcDim        of CalId * DimId
        | RemoveForDest     of CalId * ForId * DimId 
        | SetForDest        of CalId * ForId * DimId * string
        | SaveTextFile      of string
        | LoadTextFile      of string
        | NoOp
        
        module ModelUI =
            let isNodeSelected    nid (sel:Selection) = sel |> Option.map (fst >> ((=) nid) ) |> Option.defaultValue false
            let selectedString txt (selectedV:View<bool>) = V(if selectedV.V then txt else "") 
            
            let nonTotal        = { Total      .New()                with totId = TotId System.Guid.Empty }
            let nonCalculation  = { Calculation.New()                with calId = CalId System.Guid.Empty } 
            let nonFormula      = { Formula    .New()                with forId = ForId System.Guid.Empty }
            //let nonDestination  = newDestination nonFormula.id (DimId System.Guid.Empty)
            
            let nonTotalV       = Var.Create nonFormula     |> Var.Lens <| id <| (fun v _ -> v)
            let nonCalculationV = Var.Create nonCalculation |> Var.Lens <| id <| (fun v _ -> v)
            let nonFormulaV     = Var.Create nonFormula     |> Var.Lens <| id <| (fun v _ -> v)
            
            let isNodeFormSelected fid nid (sel:Selection) = sel = Some(nid, Some fid)
        
            let refreshView, refreshNow =
                let refresh = Var.Create ()
                refresh.View, fun () -> refresh.Value <- ()
            let setHierarchy model (nodes: Tree.TreeNode seq) =
                //nodes |> Seq.iter (fun n -> parents.Remove n.nid |> ignore)
                nodes
                |> Seq.toArray
                |> model.treeHierarchy.Set
        
            let [<Inline>] inline mapIds f vls = vls |> View.Map (Seq.map f >> Seq.toArray) |> View.consistent
        
            let getDimsCubeO cubes = cubes
        
        
            
        [< AutoOpen >]
        module Global =
            let model = {
                treeHierarchy = Var.Create [||]
                calculations  = ListModel.Create (fun v -> v.calId) [||]
                totals        = ListModel.Create (fun v -> v.totId) [||]
                dimensions    = ListModel.Create (fun v -> v.dimId) [||]
                cubes         = ListModel.Create (fun v -> v.cubId) [||]
                globalDefs    = Var.Create ""
                server        = Var.Create ""
                selection     = Var.Create None
                selectedDim   = Var.Create None
                selectedCube  = Var.Create None
                collapsed     = ListModel.Create id [||]
                cubePrefix    = Var.Create "Z"
                measurePrefix = Var.Create "M"
                outputMsgs    = Var.Create ""
                codeFS        = Var.Create ""
                parserMsgs    = Var.Create ""
                fileName      = Var.Create "NewFile.json"
                version       = Var.Create <| Version.New()
            }
            
            let mutable processor = fun (msg:MsgModel) -> ()
            
            let appendText (var:Var<string>) msg = 
                match var.Value, msg with
                | "", m 
                | m , "" -> m
                | v , m  -> v + "\n" + m
                |> var.Set
                
            let inline appendMsgs   msg = appendText model.outputMsgs msg
            let inline appendParser msg = appendText model.parserMsgs msg
        
        module FSCode =
            open CalculationModel
        
            let trace = id
        
            type LocationDet =
            | InDimension   of DimId
            | InCalculation of CalId
            | InGlobalDefs
            | InFormula     of ForId
            | InFormulaDest of ForId
            | InFsCode
            
            type MsgLocation = {
                lines    : int
                indent   : int
                location : LocationDet
            }
            
            let getDimO  did = model.dimensions  .TryFindByKey did
            let getCalcO cid = model.calculations.TryFindByKey cid
            let getFormO fid = model.calculations.Value |> Seq.tryPick (fun c -> c.calFormulas |> Seq.tryPick (fun f -> if f.forId = fid then Some(c, f) else None))
            
            let fixName (c:string) = c.Trim().Replace(" ", "_").Replace("-","_")
            
            let newDimS  d = sprintf "    let %s = newDim (DimId (Guid.Parse %A)) %A %A %A" (fixName d.dimName) d.dimId.Id d.dimName d.dimType (if d.dimExclude then "" else d.dimPrefix) |> trace, InDimension d.dimId 
            
        //    let getDims () = model.dimensions.Value |> Seq.sortBy getorder |> Seq.map newDimS
            
            let dimMeasureName  cubeName = model.measurePrefix.Value + (cubeName:string).Substring(1)
            let cubeMeasureName cube     = cube.cubName  |> dimMeasureName
            let newMeasureDimS  cube     = cube |> cubeMeasureName |> (fun c -> sprintf "    let %s = newDim (DimId (Guid.Parse %A)) %A %A %A" (fixName c) cube.cubId.Id c DtCalc "" ) |> trace
            
            let getMeasureDims () =
                model.cubes.Value
                |> Seq.map newMeasureDimS
            
            let getCubeDims (c:Cube) =
                c.cubDims
                |> Seq.choose    (model.dimensions.TryFindByKey)
                |> Seq.map       (fun d -> d.dimName)
                |> Seq.append <| [ dimMeasureName c.cubName ]
                |> String.concat " ; "
            
            let newCubeS c = sprintf "    let %s = newCube (CubId (Guid.Parse %A)) %A CtCalc [ %s ] (Some %s)" (fixName c.cubName) c.cubId.Id c.cubName (getCubeDims c) (cubeMeasureName c |> fixName) |> trace
            //let getCubes () = model.cubes.Value |> Seq.map newCubeS
            
            let getCalcCubeNameW cdims = 
                model.cubes.TryFindAsView (fun cub -> cub.cubDims |> Set = cdims)
                |> View.Map(
                   Option.map (fun c -> fixName c.cubName)
                >> Option.defaultValue "NoCubeYet" >> trace
                )
                |> View.consistent
            let newCalcSW c = V( sprintf "    let %s = newCalc (CalId (Guid.Parse %A)) %s %A %A %A %s" (fixName c.calName) c.calId.Id (if c.isInput then "Input" else "Calc") c.calName c.calOrder c.isText (getCalcCubeNameW c.calDims).V |> trace, InCalculation c.calId) 
        
            //let getCalcCubeName calc = 
            //    model.cubes.TryFind (fun cub -> cub.cubDims |> Set = calc.calDims)
            //    |> Option.map (fun c -> fixName c.cubName)
            //    |> Option.defaultValue "NoCubeYet" 
            //let newCalcS  c = sprintf "    let %s = newCalc (CalId (Guid.Parse %A)) %s %A %A %A %s" (fixName c.calName) c.calId.Id (if c.isInput then "Input" else "Calc") c.calName c.calOrder c.isText (getCalcCubeName c) |> trace, c.calId
            //let getCalcs () = model.calculations.Value |> Seq.sortBy (fun c -> c.calOrder) |> Seq.map newCalcS
            
            let getDest f =
                f.forDestDecl
                |> Seq.choose (fun d -> getDimO d.Key |> Option.map (fun dim -> sprintf "%s.[%A]" dim.dimName d.Value ))
                |> String.concat " ; "
                |> sprintf "[ %s ]"
            
            let prepareFormula (f:string) =
                f.Replace("@=", "&=").Replace("@<", "&<").Replace("@>", "&>")
                |> String.unindent
                |> Seq.map ((+) "    ")
            
            let fixText txt = (txt |> Seq.map String.trim |> Seq.map (fun s -> s.Replace("\\", "\\\\").Replace("\"", "\\\"")) |> String.concat " ")
            
            let newFormS (c, f) =
                let txt   = prepareFormula f.forText
                [ 
                    yield! txt
                    yield  sprintf "    |> newForm (ForId (Guid.Parse %A)) %s %s %s %A %A "  
                                f.forId.Id (fixName c.calName) (sprintf "%A" f.forType)    
                                (getDest f)  f.forOrder ((fixText txt).Left 495)
                ] |> String.concat "\n"  |> trace
              , InFormula f.forId
            
            let getForms c = 
                c.calFormulas
                |> Seq.sortBy (fun f -> f.forOrder)
                |> Seq.map    (fun f -> c, f)
                |> Seq.map newFormS
                |> Seq.toArray
            
            let preface majorVersion server =
                sprintf """
                #nowarn "86"
                #r @"..\CalculationModelDll\CalculationModelDll.dll"
                module Definition%d =
                    open FSSGlobal.CalculationModel
                    open CalculationModel
                    open CalculationSyntax
                    open InitModel
                    open System
                    
                    let NoCubeYet = newCube (CubId <| Guid.NewGuid()) "NOCUBEYET" CtCalc [] None
                    
                    {
                        modId           = ModId <| System.Guid.NewGuid()
                        server          = @%A
                        actualElem      = "Actual"
                        modCubes        = [| |]
                        modDims         = [| |]
                        modCalculations = [| |]
                    } |> setInitModel
                        """ majorVersion server
                |> trace |> String.unindent 
            
            let fsCodeForCalc c =
                let fsForms = getForms  c |> Seq.map fst |> String.concat "\n"
                let fsCalc  = newCalcSW c |> View.TryGet |> Option.map fst |> Option.defaultValue "View.TryGet failed for some reason"
                let header  =
                    sprintf "
                        module Formula =
                            open FSSGlobal.CalculationModel
                            open CalculationModel
                            open CalculationSyntax
                            open InitModel
                            open System 
                            open Definition%d\n" model.version.Value.major
                    |> String.unindentStr
                header
                + fsCalc
                + "\n    addCalcs()\n"
                + fsForms
                + "\n    addFrms() " 
                + "\n    "
        
            let mapSeqCached0 map f (lmodel:ListModel<_, _>) =
                lmodel.View
                |> View.Map map
                |> View.MapSeqCachedBy lmodel.Key  (lmodel.Key >> lmodel.TryFindByKeyAsView >> f )
                
            /// from 'a -> View<'x>   to:  'a option -> View<'x option>
            let optviewMerge f = function | None -> View.Const None | Some v -> f v |> View.Map Some 
            let inline viewSeqChoose v = v |> View.Map View.Sequence |> View.Join |> View.Map (Seq.choose id)
            let mapSeqCached  map f (model:ListModel<_, _>) = mapSeqCached0 map (View.Map  (Option.map   f)) model   |> viewSeqChoose
            let mapSeqCachedW map f (model:ListModel<_, _>) = mapSeqCached0 map (View.Bind (optviewMerge f)) model   |> viewSeqChoose
            let bindSeqCached map f (model:ListModel<_, _>) = mapSeqCached0 map (View.Map  (Option.bind  f)) model   |> viewSeqChoose
        
            let loc     lc nl   = { lines = nl ; indent = 4 ; location = lc }
            let txtLocn lc txts =   txts  |> String.concat "\n", [| loc lc (txts |> Seq.length) |]
            let txtLoc1 lc txt  = [ txt ] |> txtLocn lc
        
            let groupLoc1s cs = cs |> Seq.map fst |> String.concat "\n" , cs |> Seq.map (fun (_, lc) -> loc lc 1                           ) |> Seq.toArray
            let groupLocns fs = fs |> Seq.map fst |> String.concat "\n" , fs |> Seq.map (fun (t, lc) -> loc lc (t.Split '\n' |> Seq.length)) |> Seq.toArray                         
            
            let collectCode v =
                v |> Seq.filter (fst >> ((<>) ""))
                  |> Seq.toArray
                  |> Array.unzip
                  |> fun (ts, ls) -> ts |> String.concat "\n", Array.collect id ls
            
            let fsCode() =
                let prefaceV   = View.Do {
                    let! version = model.version.View
                    let! server  = model.server .View
                    return preface version.major server |> txtLocn InFsCode
                }
                let newDimsV   =    model.dimensions   |> mapSeqCached  Dimension.sort newDimS
                let newMDimsV  =    model.cubes        |> mapSeqCached  id             newMeasureDimS
                let newCubesV  =    model.cubes        |> mapSeqCached  id             newCubeS
                let newCalcsV  =    model.calculations |> mapSeqCachedW id             newCalcSW
                let newFormsV  =    model.calculations |> mapSeqCached  id             getForms
                let globalDefV = V( model.globalDefs.V |> (String.indent 4 >> txtLocn InGlobalDefs ) )
                let newMDimsSV = V( newMDimsV       .V |>                     txtLocn InFsCode       )
                let newCubesSV = V( newCubesV       .V |>                     txtLocn InFsCode       )
                let newFormsSV = V( newFormsV       .V |> (Seq.collect id  >> groupLocns        ) )
                let newDimsSV  = V( newDimsV        .V |>                     groupLoc1s          )
                let newCalcsSV = V( newCalcsV       .V |>                     groupLoc1s          )
                [   prefaceV
                    newDimsSV
                    newMDimsSV
                    txtLoc1 InFsCode "    addDims()"  |> View.Const
                    newCubesSV
                    txtLoc1 InFsCode "    addCubes()" |> View.Const
                    newCalcsSV
                    txtLoc1 InFsCode "    addCalcs()" |> View.Const
                    globalDefV
                    newFormsSV
                    txtLoc1 InFsCode "    addFrms()"  |> View.Const
                ] 
                |> View.Sequence
                |> View.Map collectCode
        
            let fsCodeVO = if IsClient then Some <| fsCode() else None
        
        
        module ParseFS =
            open FSCode
        
            let adaptMessage locs (lf:int) (cf:int) (lt:int) (ct:int) msg =
                locs 
                |> Seq.mapFold (fun  from  l  -> (from, l ), from + l.lines) 0
                |> fst
                |> Seq.tryFind (fun (from, l) -> lf - 1 >= from && lf - 1 < from + l.lines)
                |> Option.bind (fun (from, l) -> 
                    match l.location with 
                    | InDimension   did -> getDimO  did      |> Option.map (fun  dim  -> sprintf "%s: %A. %A"                     dim.dimName                                                                 msg did )
                    | InCalculation cid -> getCalcO cid      |> Option.map (fun  clc  -> sprintf "%s: %A. %A"                     clc.calName                                                                 msg cid )
                    | InFormulaDest fid -> getFormO fid      |> Option.map (fun (c,f) -> sprintf "%s: %A. %A"                     c  .calName                                                                 msg fid )
                    | InFormula     fid -> getFormO fid      |> Option.map (fun (c,f) -> sprintf "%s: (%d,%d) - (%d,%d): %A. %A"  c  .calName (lf - from) (cf - l.indent) (lt - from) (ct - l.indent) msg fid )
                    | InFsCode          -> Some                            (             sprintf "F# Code (%d,%d) - (%d,%d): %A."              lf          cf              lt          ct             msg     )
                    | InGlobalDefs      -> Some                            (             sprintf "Global  (%d,%d) - (%d,%d): %A."             (lf - from) (cf - l.indent) (lt - from) (ct - l.indent) msg     )
                )
                |> Option.defaultWith (fun () -> sprintf "%d %d - %d %d %s" lf cf lt ct msg)
        
            let adaptMessages locs ms =
                let rex = """.*\((\d+),(\d+)\) - \((\d+),(\d+)\) ([^"]*?)"(?:\n|$)"""
                match ms with
                | REGEX rex "g" m ->    m
                |               m -> [| m |]
                |> Array.map (
                    function
                    | REGEX rex "" [| _ ; lf ; cf ; lt ; ct ; msg |] -> adaptMessage locs (int lf) (int cf) (int lt) (int ct) msg 
                    | o                                              -> o
                )
        
            let parseFile = "RuleEditor.fsx"
        
            open FsAutoComplete.CommTypes
            //let autoCompleteClient = FSAutoCompleteIntermediary.FSAutoCompleteIntermediaryClient("RuleEditor")//, endPoint = JS.Window.Location.Href)
        
            let adaptErrors locs (errs: ErrorResponse) = 
                errs.Errors
                |> Seq.map(fun err ->
                    adaptMessage locs err.StartLine err.StartColumn err.EndLine err.EndColumn err.Message
                )
        
            if IsClient then
        
                let parseFsCode _ =
                    asyncResult {
                        model.parserMsgs.Value   <- "Parsing...\n" + String.skipFirstLine model.parserMsgs.Value
                        match FSCode.fsCodeVO with
                        | None                   -> ()
                        | Some fsCodeV           ->
                        let! fs, locs             = fsCodeV |> View.GetAsync
                        let! errs, _others        = FsAutoComplete.Calls.parseCode parseFile (fs.Split '\n') true 0
                        let  res                  = adaptErrors locs errs |> String.concat "\n"
                        //model.outputMsgs.Value   <- locs |> Seq.map (sprintf "%A") |> String.concat "\n"
                        model.codeFS.Value       <- fs
                        model.parserMsgs.Value   <- "Parsed!\n" + res
                    } |> AsyncResult.iterA (ResultMessage.summarized >> print) id
                    
                let parseFsCodeD = delayed 1000 parseFsCode 
                FSCode.fsCodeVO |> Option.iter (View.Sink parseFsCodeD)
        
            let sForId = ForId System.Guid.Empty |> sprintf "%A" |> String.splitByChar ' ' |> Seq.head
            let sCalId = CalId System.Guid.Empty |> sprintf "%A" |> String.splitByChar ' ' |> Seq.head
            let sTotId = TotId System.Guid.Empty |> sprintf "%A" |> String.splitByChar ' ' |> Seq.head
            let sDimId = DimId System.Guid.Empty |> sprintf "%A" |> String.splitByChar ' ' |> Seq.head
        
            let rexGlobal =      """(Global)  \("""  
            let rexTotId  = """\"\. (""" + sTotId + ") " + "\"" + rexGuid
            let rexCalcId = """\"\. (""" + sCalId + ") " + "\"" + rexGuid
            let rexFormId = """\"\. (""" + sForId + ") " + "\"" + rexGuid
            let rexDimId  = """\"\. (""" + sDimId + ") " + "\"" + rexGuid
        
            let jumpToLine (line:string) = 
                let rex = [ rexGlobal
                            rexTotId 
                            rexCalcId
                            rexFormId
                            rexDimId     
                          ] |> String.concat "|" |> sprintf "(?:%s)"
                match line with
                | REGEX rex "" p -> 
                    p
                    |> Array.skip 1
                    |> Array.filter (isUndefined >> not)
                    |> function
                       | [| v ; guid |] when v = sForId -> SelectFormula     (System.Guid guid |> ForId) |> processor
                       | [| v ; guid |] when v = sCalId -> SelectCalculation (System.Guid guid |> CalId) |> processor
                       | [| v ; guid |] when v = sTotId -> SelectTotal       (System.Guid guid |> TotId) |> processor
                       | [| v ; guid |] when v = sDimId -> SelectDimension   (System.Guid guid |> DimId) |> processor       
                       | _ -> ()
                | _ -> ()
            
            let jumpToRef (e:obj) = 
                let v : string = e?Target?value |> unbox
                let s : int    = e?Target?selectionStart |> unbox
                let i = v.[0..s].LastIndexOf '\n'
                jumpToLine v.[i+1..]
        
            let showToolTips lc txt line col =
                asyncResult {
                    match FSCode.fsCodeVO with
                    | None           -> ()
                    | Some fsv       ->
                    let! _, locs      = fsv  |> View.GetAsync
                    let   locsm,  _   = locs |> Seq.mapFold (fun  from  l  -> (from, l ), from + l.lines) 0
                    match locsm      |> Seq.tryFind (fun (_,l) -> l.location = lc) with
                    | None           -> () 
                    | Some(from, loc)->
                    let  sub          = REGEX.getStartWord txt col |> String.length
                    let  add0         = REGEX.getEndWord   txt col |> String.length
                    let  add          = if sub = 0 && add0 = 0 then 2 else add0
                    let  lf           = line       + 1 + from
                    let  lt           = line       + 1 + from
                    let  cf           = col  - sub + 1 + loc.indent
                    let  ct           = col  + add + 1 + loc.indent
                    let! tip, others  = FsAutoComplete.Calls.toolTip parseFile lf cf ""
                    let  tipText      = tip |> Seq.collect id |> Seq.collect (fun (t:OverloadDescription) -> [ t.Signature ; t.Comment ] ) |> String.concat "\n"
                    let  msg          = adaptMessage locs lf cf lt ct tipText
                    //let  msg          = sprintf "Global  %A - %A: %A." (line + 1, col - sub + 1) (line + 1, col + add + 1) (tip.Replace("\"","''"))
                    if not <| model.parserMsgs.Value.Contains msg then 
                        appendParser msg
                } |> AsyncResult.iterA (ResultMessage.summarized >> print) id
        
            let getSymbolType chr =
                match chr with
                | "C"   -> "class"     
                | "Cn"  -> "Constant"  
                | "D"   -> "delegate"  
                | "E"   -> "enum"      
                | "P"   -> "property"  
                | "e"   -> "event"     
                | "X"   -> "exception" 
                | "F"   -> "field"     
                | "I"   -> "interface" 
                | "M"   -> "function"    
                | "N"   -> "module"    
                | "S"   -> "struct"    
                | "T"   -> "type"      
                | "V"   -> "Variable"  
                | _     -> chr
        
        
            let getHints lc showHints txt line col =
                asyncResult {
                    match FSCode.fsCodeVO with
                    | None           -> ()
                    | Some fsv       ->
                    let! _, locs      = fsv  |> View.GetAsync
                    let   locsm,  _   = locs |> Seq.mapFold (fun  from  l  -> (from, l ), from + l.lines) 0
                    match locsm      |> Seq.tryFind (fun (_,l) -> l.location = lc) with
                    | None           -> () 
                    | Some(from, loc)->
                    let  word         = REGEX.getStartWord txt col
                    printfn "getHints '%s' <= %d :%s => " word col txt
                    let  lf           = line + 1 + from
                    let  cf           = col  + 1 + loc.indent
                    let! crs, others  = FsAutoComplete.Calls.completion (String.replicate loc.indent " " + txt) true parseFile lf cf ""
                    let  hints        = crs |> Array.map (fun (cr:CompletionResponse) -> cr.ReplacementText, (sprintf "%-40s %20s" cr.Name (getSymbolType cr.GlyphChar)), cr.Glyph)
                    showHints hints (line, col - word.Length) (line, col)
                } |> AsyncResult.iterA (ResultMessage.summarized >> print) id
        
            
            //let filterGlobal msgs =
            //    let rex  = """Global  \((\d+)\,\s*(\d+)\) - \((\d+)\,\s*(\d+)\)\: "([^"]+?)"\.""" //"
            //    match msgs with
            //    | REGEX rex "g" m -> m
            //    | _               -> [||]
            //    |> Array.choose (fun v ->
            //        match v with
            //        | REGEX rex "" [| _ ; fl;     fc;     tl;     tc; msg |] 
            //                 -> Some (int fl, int fc, int tl, int tc, msg)
            //        | _      -> None
            //    )
            //    |> Array.map (fun (fl, fc, tl, tc, msg) ->
            //            { Lint.Response.message  = msg
            //              Lint.Response.severity = "error"
            //              Lint.Response.from     = cmPos(fl - 1, fc - 1) 
            //              Lint.Response.``to``   = cmPos(tl - 1, tc - 1)
            //            }
            //      )        
            
            let rexFormula   = """\((\d+)\,\s*(\d+)\) - \((\d+)\,\s*(\d+)\)\: "([^"]+?)"\. ForId """ + "\"" + rexGuid // "
            let filterFormula msgs fidO =
                match msgs with
                | REGEX rexFormula "g" m -> m
                | _                 -> [||]
                |> Array.choose (fun v ->
                    match v with
                    | REGEX rexFormula "" [| _ ; fl;     fc;     tl;     tc; msg; guid |] when fidO = Some(guid |> System.Guid |> ForId) 
                                    -> Some (int fl, int fc, int tl, int tc, msg)
                    | _             -> None
                )
                |> Array.map (fun (fl, fc, tl, tc, msg) ->
                        { Monaco.MarkerData.message         = msg
                          Monaco.MarkerData.severity        = Monaco.MarkerSeverity.Error
                          Monaco.MarkerData.startLineNumber = fl - 1
                          Monaco.MarkerData.startColumn     = fc - 1
                          Monaco.MarkerData.endLineNumber   = tl - 1
                          Monaco.MarkerData.endColumn       = tc - 1
                        }
                  )        
            
            
        module Render =
            let scrollIntoView selW (e:Dom.Element) = selW |> View.Sink (fun s -> if s then e?scrollIntoViewIfNeeded())
        
            //let selTotIdOV = model.treeHierarchy.View |> View.Map2 TreeNode.tryFindSelChild model.selection.View |> View.Map (Option.bind TreeNode.getTId)
            //let selCalIdOV = model.treeHierarchy.View |> View.Map2 TreeNode.tryFindSelChild model.selection.View |> View.Map (Option.bind TreeNode.getCId)
            //let selForIdOV =                                                                model.selection.View |> View.Map2 (Option.bind snd            )
          
            //let lensForm getF view (calcV:Var<Calculation>) = 
            //    calcV |> Var.lensView
            //               (fun c   -> c.calFormulas |> Seq.tryFind      getF |> Option.defaultValue ModelUI.nonFormula)
            //               (fun c y -> c.calFormulas |> Seq.tryFindIndex getF |> Option.map (fun i -> { c with calFormulas = Array.replace i y c.calFormulas } )
            //                                                                  |> Option.defaultValue c)
            //               view
          
            let mapDefW def = View.Map (Option.defaultValue def) 
          
            let zx = {
                Tree.nid      = System.Guid.Empty |> Tree.TreeNodeId
                Tree.expanded = false
                Tree.element  = System.Guid.Empty |> CalId |> Calc // NodeId
                Tree.children = [||] // TreeNode []
                Tree.weight   =  Tree.Add        
            }
        
            open Tree
        
            let parents = new System.Collections.Generic.Dictionary<TreeNodeId, TreeNode>()
        
            let setChildren (node:TreeNode) (ch: TreeNode seq) : TreeNode =
                let toIdSet ns = ns |> Seq.map (fun n -> n.nid) |> Set
                toIdSet  node.children - toIdSet ch |> Seq.iter (parents.Remove >> ignore)
                ch |> Seq.iter (fun chn -> Dict.add chn.nid node parents)
                { node with children = Seq.toArray ch }
        
            let getParentO  nid = Dict.tryGetValue nid parents        
        
            let rec getPath     nid =
                match getParentO nid with
                | Some node -> node.nid :: getPath node.nid
                | None      -> []
        
            let getTreeEffReaderResource() = {
                Tree.getParentO  = getParentO
                //Tree.getNode     = fun _   -> Hole.Incomplete "Tree.getNode    " //    TreeNodeId ->                 TreeNode
                Tree.getPath     = getPath
                Tree.setChildren = setChildren
            }
        
            type EffReader<'read> = inherit Reader.Reader<'read>
        
            let runEff     Ef = Ef |> Reader.readerHandler (getTreeEffReaderResource()) |> (Eff.run : (Eff<EffReader<_>,_> -> _) )
            let iterEff  f m  = m |> map (f: 'a -> unit) |> runEff |> fun vR -> vR 
        
            let tryFindNode nid = TreeNode.tryFindNodeEf nid
        
            let currentCalcOW = View.Do {
                let! nodes = model.treeHierarchy.View
                let! selO  = model.selection    .View
                let! calcs = model.calculations .View
                return
                    nodes 
                    |> TreeNode.tryFindSelNodeEf selO
                    |> runEff 
                    |> Option.bind (fun node -> match node.element with Calc cid -> Some cid |_-> None)
                    |> Option.bind (fun cid  -> calcs |> Seq.tryFind (fun c -> c.calId = cid))
            }
            let setCurrentCalc v = 
                async {
                    let! currCalcO = currentCalcOW |> View.GetAsync 
                    if   currCalcO.IsNone then () else
                    model.calculations.Add v
                } |> Async.Start
            let currentCalcV  = Var.Make (mapDefW ModelUI.nonCalculation currentCalcOW ) setCurrentCalc
            
            //let currentCalcV  = ListModel.currentLens ModelUI.nonCalculation selCalIdOV model.calculations
            //let currentFormV  = currentCalcV |> lensForm (fun f -> match model.selection.Value with Some(_, Some fid) -> fid = f.forId |_-> false) model.selection.View
          
            let lensForm (calcV:Var<Calculation>) getFidO =
                if not IsClient then ModelUI.nonFormulaV else
                let calcFormsV = Lens calcV.V.calFormulas
                let formOW = View.Do {
                    let! calc = calcV.View
                    return
                        getFidO()
                        |> Option.bind (fun fid -> 
                            if calc.calId = ModelUI.nonCalculation.calId then None else 
                            calc.calFormulas |> Seq.tryFind (fun f -> f.forId = fid) )
                }
                let setForm v = 
                    async {
                        let! formO = formOW |> View.GetAsync 
                        if   formO.IsNone then () else
                        calcFormsV.Value 
                        |> Seq.tryFindIndex (fun f -> f.forId = v.forId)
                        |> Option.iter(fun i -> calcFormsV.Value <- calcFormsV.Value |> Array.replace i v)
                    } |> Async.Start
                Var.Make (mapDefW ModelUI.nonFormula formOW) setForm
            let currentFormV = lensForm currentCalcV (fun () -> model.selection.Value |> Option.bind snd)
            
            let calcTypeV (calcV:Var<Calculation>) = (Lens calcV.V.isInput).Lens (function true->"Input" |_->"Calc") (fun _ s -> match s with |"Calc" -> false | _ -> true) 
            let formTypeV (formV:Var<Formula    >) = (Lens formV.V.forType).Lens (fun t -> (sprintf "%A" t).[3..]  ) (fun _ s -> match s with |"Base" -> ForBase |"Consolidated" -> ForConsolidated | _ -> ForAll  ) 
            
            let dtypes =   [ 
              DtDataType
              DtTime
              DtVersion
              DtOther    ] 
          
        
            
        module DragDrop =
        
            type DragInfo = 
                | DragNone
                | DragNode of Tree.TreeNodeId
                | DragForm of CalId * Formula
            
            let mutable drag        = DragNone
            let setDragNone ()      = drag <- DragNone
            let setDragNode tnid    = drag <- DragNode tnid
            let setDragForm cid frm = drag <- DragForm(cid, frm)
            
            let getDragFormO cid fid = match drag with DragForm (dcid, dfor) when fid  <> dfor.forId && dcid = cid -> Some dfor | _ -> None
            let getDragNIdO  tnId    = match drag with DragNode  dnid        when dnid <>       tnId               -> Some dnid | _ -> None
            let isDragForm   cid fid = getDragFormO cid fid |> function None -> false | _ -> true
            
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
            
        module TableDimensions =
            open Templating
        
            let dtypes =   [ 
                DtDataType
                DtTime
                DtVersion
                DtOther    ] 
        
            let tableDimensions () =
                TemplateLib.DimensionTable()
                    .TBody(
                        model.dimensions |> ListModel.docLensMapView (Dimension.filterSort dtypes) (fun did dimV ->
                            //let selDimW = V (model.selectedDim.V = Some did)
                            TemplateLib.DimensionRow()
                                .Name(          Lens dimV.V.dimName       )
                                .Abbreviation(  Lens dimV.V.dimPrefix     )
                                .Order(         Lens dimV.V.dimOrder      )
                                .Type(         (Lens dimV.V.dimType       ).Lens (sprintf "%A" >> fun s -> s.[2..]) (fun _ s -> match s with |"DataType" -> DtDataType |"Time" -> DtTime |"Version" -> DtVersion | _ -> DtOther) )
                                .ExcludeName(   Lens dimV.V.dimExclude    )
                                .IncludeFreeze( Lens dimV.V.dimFreeze     )
                                .Remove(        fun _ -> RemoveDimension did |> processor )
                                .Select(        fun _ -> SelectDimension did |> processor )
                                .Doc()        
                        )
                    )
                    .Doc()
        module TableCalculations =
            let rowFormula (tnId:Tree.TreeNodeId) (calcV : Var<Calculation>) fid =
                let cid      = calcV.Value.calId
                let formsV   =        Lens     calcV.V.calFormulas
                let formV    = Render.lensForm calcV (fun () -> Some fid) 
                let selFormW = V (ModelUI.isNodeFormSelected fid tnId model.selection.V)
                let formForW = V (formV.V.forDestDecl 
                                  |> Seq.map(fun f -> 
                                      sprintf "%s:%s" 
                                          (model.dimensions.View.V 
                                           |> Seq.tryFind(fun d -> d.dimId = f.Key) 
                                           |> function Some dim -> dim.dimName |_-> "") 
                                          f.Value) 
                                  |> String.concat ", ")
                TemplateLib.FormulaRow()
                    .SelectedMark( ModelUI.selectedString ">"        selFormW )
                    .Selected(     ModelUI.selectedString "selected" selFormW )
                    .FormulaFor(   formForW                                   )
                    .Formula(      Lens formV.V.forText                       )
                    .FormType(     Render.formTypeV formV                     )
                    .Remove(       fun _  -> RemoveFormula  fid        |> processor                               )
                    .Select(       fun _  -> SelectFormNode(fid, tnId) |> processor                               )
                    .Drag(         fun ev ->    DragDrop.setDragForm cid formV.Value ; ev.Event.StopPropagation() )
                    .DragOver(     fun ev -> if DragDrop .isDragForm cid fid then      ev.Event.PreventDefault () )
                    .Drop(         fun ev -> do                                        ev.Event.PreventDefault ()
                                             DragDrop.getDragFormO cid fid |> DragDrop.moveItemInListModel fid formsV Formula.forId )
                    .AfterRender(  Render.scrollIntoView selFormW )
                    .Doc()
                    
            let rowTreeNode (tnId:Tree.TreeNodeId, nid:NodeId, level:int) =
                let depth             = sprintf "%dem" level
                let isSelW            = V (ModelUI.isNodeSelected tnId model.selection.V)
                let rowCalculation (calcV:Var<Calculation>) cid       =
                    let formsDoc      = V (calcV.V |> fun c -> c.calFormulas |> Seq.map Formula.forId) |> Doc.BindSeqCached (rowFormula tnId calcV)
                    TemplateLib.CalculationRow()
                        .SelectedMark( "" )
                        .Selected(     ModelUI.selectedString "selected" isSelW )
                        .Indent(       depth                            )
                        .CalcName(     Lens calcV.V.calName   )
                        .Format(       Lens calcV.V.format    )
                        .IsText(       Lens calcV.V.isText    )
                        .IsBalance(    Lens calcV.V.isBalance )
                        .OrderCalc(    Lens calcV.V.calOrder  )
                        .CalcType(     Render.calcTypeV calcV )
                        .Remove(       fun _ -> RemoveCalculation cid |> processor        )
                        .Select(       fun _ -> isSelW |> View.Get (fun s -> if not s then SelectNode tnId |> processor)  )
                        .Formulas(     formsDoc )
                        .Drag(         fun ev ->     DragDrop.setDragNode tnId            ; ev.Event.StopPropagation() )
                        .DragOver(     fun ev -> if (DragDrop.getDragNIdO tnId).IsSome then ev.Event.PreventDefault () )
                        .Drop(         fun ev -> do                                         ev.Event.PreventDefault () 
                                                 DragDrop.getDragNIdO tnId |> Option.iter(fun fr -> MoveNode(true, fr, tnId) |> processor ) )
                        .AfterRender(  Render.scrollIntoView isSelW )
                        .Doc()
                 
                let rowTotal (totV:Var<Total>) tid =
                    let totV         = model.totals |> ListModel.lensDef ModelUI.nonTotal tid
                    let nodeW        = V (TreeNode.tryFindNodeEf tnId model.treeHierarchy.V |> Render.runEff )
                    let markW        = V (nodeW.V |> Option.map (fun node -> if node.expanded then "-" else "+") |> Option.defaultValue "*")
                    TemplateLib.TotalRow()
                        .SelectedMark( markW                                           )
                        .Selected(     ModelUI.selectedString "selected" isSelW        )
                        .Indent(       depth                                           )
                        .TotName(      Lens totV.V.totName                             )
                        .Format(       Lens totV.V.totFormat                           )
                        .OrderTot(     Lens totV.V.totOrder                            )
                        .Remove(       fun _ -> RemoveTotal tid           |> processor )
                        .Select(       fun _ -> SelectNode  tnId          |> processor )
                        .Collapse(     fun _ -> nodeW |> View.Get (Option.iter (fun node -> (not node.expanded, node.nid) |> ExpandNode |> processor)) )
                        .Drag(         fun ev ->     DragDrop.setDragNode tnId            ; ev.Event.StopPropagation() )
                        .DragOver(     fun ev -> if (DragDrop.getDragNIdO tnId).IsSome then ev.Event.PreventDefault () )
                        .Drop(         fun ev -> do                                         ev.Event.PreventDefault () 
                                                 DragDrop.getDragNIdO tnId |> Option.iter(fun fr -> MoveNode(true, fr, tnId) |> processor ) )
                        .AfterRender(  Render.scrollIntoView isSelW )
                        .Doc()
            
                match  nid with
                | Calc cid -> rowCalculation (model.calculations |> ListModel.lensDef ModelUI.nonCalculation cid) cid
                | Tot  tid -> rowTotal       (model.totals       |> ListModel.lensDef ModelUI.nonTotal       tid) tid
                
            let tableCalculations() =
                TemplateLib.CalculationTable()
                    .TBody( 
                        V (model.treeHierarchy.V
                           |> Seq.map TreeNode.treenode
                           |> TreeEff.listNodes 0 
                           |> Render.runEff
                           |> (Seq.map (fun (tn,l) -> tn.id(), (TreeNode.ofNode tn).element, l) ) 
                        )
                        |> Doc.BindSeqCached rowTreeNode
                     )
                    .Doc()
            
        let details () =
            let noCalcAttr             () = attr.disabledDynPred (V "") (V (Render.currentCalcV.V.calId = ModelUI.nonCalculation.calId))
            let noFormAttr             () = attr.disabledDynPred (V "") (V (Render.currentFormV.V.forId = ModelUI.nonFormula    .forId))
            let getAnnot                  = V (model.selection.V |> Option.bind snd |> ParseFS.filterFormula model.parserMsgs.V) |> View.consistent
            let showToolTips txt line col = Render.currentFormV.View |> View.Get (fun frm -> ParseFS.showToolTips (FSCode.InFormula frm.forId)   txt line col)
            let getHints   f txt line col = Render.currentFormV.View |> View.Get (fun frm -> ParseFS.getHints     (FSCode.InFormula frm.forId) f txt line col)
            let editor                    =
                Monaco.monacoNew 
                    <| Lens Render.currentFormV.V.forText
                    <| Some getAnnot
                    <| Some showToolTips
                    <| Some getHints
                |> Monaco.render
            
            TemplateLib.FormulaDetail()
                .CalcName(    Lens Render.currentCalcV.V.calName   )
                .Format(      Lens Render.currentCalcV.V.format    )
                .IsText(      Lens Render.currentCalcV.V.isText    )
                .IsBalance(   Lens Render.currentCalcV.V.isBalance )
                //.AlsoActual(  Lens Render.currentFormV.V.alsoActual)
                .CalcType(    Render.calcTypeV Render.currentCalcV        )
                .FormType(    Render.formTypeV Render.currentFormV        )
                .Formula(     editor                        )
                .DisableCalc1(noCalcAttr())
                .DisableCalc2(noCalcAttr())
                .DisableCalc3(noCalcAttr())
                .DisableCalc4(noCalcAttr())
                .DisableCalc5(noCalcAttr())
                .DisableCalc6(noCalcAttr())
                .DisableCalc7(noCalcAttr())
                .DisableForm1(noFormAttr())
                .DisableForm2(noFormAttr())
                .AddFormula(  fun _ -> (V Render.currentCalcV.V.calId) |> View.Get (AddFormula >> processor) )
                //.UpdateCalc(  fun _ -> UpdateAlea.updateCalc()  )
                .Doc()
            
        
        let dimsSelected () =
            let destV = Lens Render.currentFormV.V.forDestDecl
        
            let cubeBaseNameW  = View.Do {
                let! prefix    = model.cubePrefix.View
                let! dims      = model.dimensions.View
                let  dimsSort  = dims     |> Dimension.filterSort Render.dtypes
                let  dimPrxs   = dimsSort |> Seq.map(fun d -> d.dimId, if d.dimExclude then "" else d.dimPrefix) |> Seq.toArray
                let  dimIds    = dimPrxs  |> Array.map fst
                let! cubes     = model.cubes     .View
                let  cubeDims  = cubes    |> Seq.filter (fun c -> c.cubType = CtCalc) |> Seq.map(fun c -> c.cubDims |> Array.filter (swap Array.contains dimIds) |> Set , c) |> Seq.toArray
                let! currCalc  = Render.currentCalcV    .View
                let  currDims  = currCalc.calDims
                let  currCubeO = cubeDims |> Seq.tryFind(fst >> ((=) currDims)) |> Option.map snd
                let  baseName  = if currCubeO.IsSome then "" else
                                 dimPrxs  |> Seq.choose (fun (did, pr) -> if Set.contains did currDims then Some pr else None)
                                          |> String.concat "" |> ((+) prefix)
                return currCubeO, baseName
            }
            let currCubeOW       = cubeBaseNameW |> View.Map  fst
            let cubePlaceholderW = cubeBaseNameW |> View.Map  snd
            let cubeNameW        = currCubeOW    |> View.Map (function Some cub -> cub.cubName |_-> "")
            let setCubeName   (n:string) =
                async { 
                    let  nm = n.Trim()
                    let! currCubeO = currCubeOW |> View.GetAsync
                    match currCubeO with
                    | Some cube -> if nm = "" 
                                   then RemoveCube  cube.cubId 
                                   else RenameCube (cube.cubId , nm)
                    | None      -> if nm = ""
                                   then NoOp
                                   else AddCube    (nm, Render.currentCalcV.Value.calDims)
                    |> processor
                } |> Async.Start
            TemplateLib.DimsSelected()
                .CubeName(        Var.Make cubeNameW setCubeName)
                .PossibleCubeName(cubePlaceholderW)
                .TBody(
                    model.dimensions |> ListModel.docLensMapView (Dimension.filterSort Render.dtypes) (fun did dimV ->
                        let destW     = View.Do {
                            let!  currForm  = Render.currentFormV.View
                            match currForm.forDestDecl.TryFind did with
                            | Some txt -> return txt
                            | None     -> return ""
                        }
                        let setDest (v:string) =
                            let t = v.Trim()
                            if Render.currentFormV.Value.forId = ModelUI.nonFormula.forId then () else
                            destV.Value <- 
                                if  t = "" 
                                then destV.Value |> Map.remove did
                                else destV.Value |> Map.add    did t
                        let dimCheckW = V (Render.currentCalcV.V.calDims |> Seq.contains did)
                        let setCheck v = 
                            if v 
                            then    AddCalcDim(Render.currentCalcV.Value.calId, did)
                            else RemoveCalcDim(Render.currentCalcV.Value.calId, did)
                            |> processor
                        let visibFor = V(if Render.currentFormV.V.forId <> ModelUI.nonFormula.forId && dimCheckW.V then "" else "Hidden")
                        TemplateLib.DimSelectedRow()
                            .Dimension(      V dimV.V.dimName           )
                            .DimensionCheck( Var.Make dimCheckW setCheck)
                            .Destination(    Var.Make destW     setDest )
                            .Hidden(         visibFor                   )
                            .Doc()
                    )
                )
                .Doc()    
        
        let globalDefs () =
            //let getAnnot = V (Monaco.filterGlobal model.parserMsgs.V) |> View.consistent
            
            Monaco.monacoNew
                <| model.globalDefs 
                <| None //Some getAnnot
                <| None //Some (ParseFS.showToolTips FSCode.InGlobalDefs)
                <| None //Some (ParseFS.getHints     FSCode.InGlobalDefs)
        
            |> Monaco.render
        
        module MainProgram =
            open FusionAsyncM
            open Operators
            open Templating
        
            open FsRoot
            module AF = AppFramework 
        
            let RuleEditorLyt = "RuleEditorLyt"
        
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
        
            [< WebSharper.Sitelets.Website >]    
            let mainProgram() =
                AF.addPlugIn {
                    AF.plgName    = "RuleEditor"
                    AF.plgVars    = [| AF.newVar  "fileName"        model.fileName
                                       AF.newVar  "CodeFS"          model.codeFS
                                       AF.newVar  "Output"          model.outputMsgs
                                       AF.newVar  "Parser"          model.parserMsgs
                                       AF.newVar  "Server"          model.server
                                       AF.newVar  "GlobalDefs"      model.globalDefs
                                    |]  
                    AF.plgViews   = [| //AF.newViw  "FsCode"          Snippets.FsCodeW
                                       //AF.newViw  "SaveNeeded"      Snippets.SaveAsClassW
                                       //AF.newViw  "CurrentPath"     Snippets.currentPathW
                                    |]  
                    AF.plgDocs    = [| //AF.newDoc  "mainDoc"         (lazy mainDoc()                 )
                                       //AF.newDoc  "editor"          (lazy (WebSharper.UI.Html.div [] [ Monaco.getEditorConfigO() |> Option.map Monaco.render |> Option.defaultValue Doc.Empty ]) )
                                       //AF.newDoc  "Snippets"        (lazy RenderSnippets  .render() )
                                       //AF.newDoc  "Properties"      (lazy RenderProperties.render() )
                                       //AF.newDoc  "ButtonsRight"    (lazy buttonsRight           () )
                                       AF.newDoc  "globalDefs"      (lazy globalDefs                         () )
                                       AF.newDoc  "Dimensions"      (lazy TableDimensions  .tableDimensions  () )
                                       AF.newDoc  "Calculations"    (lazy TableCalculations.tableCalculations() )
                                       AF.newDoc  "details"         (lazy details                            () )
                                       AF.newDoc  "dimsSelected"    (lazy dimsSelected                       () )
                                    |]  
                    AF.plgActions = [| //AF.newAct  "AddSnippet"      Snippets.newSnippet
                                       //AF.newAct  "RemoveSnippet"   deleteSnippet       
                                       AF.newAct  "IndentIn"        <| fun () -> model.selection.Value |> Option.map fst |> Option.iter (fun nid -> IndentNode(true , nid) |> processor)
                                       AF.newAct  "IndentOut"       <| fun () -> model.selection.Value |> Option.map fst |> Option.iter (fun nid -> IndentNode(false, nid) |> processor)
                                       //AF.newAct  "AddProperty"     RenderProperties.addProperty
                                       //AF.newAct  "RunFS"           runFsCode
                                       //AF.newAct  "AbortFsi"        FsiAgent.abortFsiExe
                                       //AF.newAct  "DisposeFsi"      FsiAgent.disposeFsiExe
                                       AF.newActF "LoadFile"        <| AF.FunAct1 ((fun o -> unbox o |> LoadTextFile |> processor  ), "FileElement")
                                       AF.newActF  "SaveAs"          <| AF.FunAct1 ((fun o -> unbox o |> SaveTextFile |> processor  ), "FileElement")
                                       //AF.newActF "Import"          <| AF.FunAct1 ((fun o -> unbox o |> Importer.importFile     ), "FileElement")
                                       //AF.newActF "JumpTo"          <| AF.FunAct1 ((fun o -> unbox o |> JumpTo.jumpToRef        ), "textarea"   )
                                       //AF.newActF "ButtonClick"     <| AF.FunAct1 ((fun o -> unbox o |> CustomAction.buttonClick), "button"     )
                                       //AF.newActF "ActionClick"     <| AF.FunAct1 ((fun o -> unbox o |> CustomAction.actionClick), "name"       )
                                       AF.newAct  "AddCalculation"  (fun () -> AddCalculation |> processor)
                                       AF.newAct  "AddTotal"        (fun () -> AddTotal       |> processor)
                                       AF.newAct  "AddDimension"    (fun () -> AddDimension   |> processor)
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
                |> LayoutEngine.newLyt RuleEditorLyt
                |> LayoutEngine.addLayout
        
                None
                |> Option.defaultValue RuleEditorLyt
                |> AF.mainDocV.Set
        
                async {
                  //do! Monaco.loader
                  //WcSplitter.init horizontal vertical
                  //WcTabStrip.init()
                  //let editor = Monaco.getEditorConfigO() |> Option.map Monaco.render |> Option.defaultValue Doc.Empty
                  return AF.getMainDoc.Value
                } |> Doc.Async            
                
        module UpdateModelUI =
                                            
            let rec updateModelR model msg = 
                let doForCalc cid f       = model.calculations.TryFindByKey cid |> Option.iter f
                let doForForm cid fid f   = doForCalc cid <| fun c -> c.calFormulas |> Seq.tryFind(fun f -> f.forId = fid) |> Option.iter (f c)
                let doForCube cid f       = model.cubes       .TryFindByKey cid |> Option.iter f
                let setSelection sel      = if model.selection.Value = sel then false else
                                            model.selection.Value   <- sel
                                            true
                let tryFindCalcForm fid   = model.calculations.Value |> Seq.tryFind(fun calc -> calc.calFormulas |> Seq.exists (fun f -> f.forId = fid))
                match msg with
                | AddCalculation         -> let n = Calculation.New()
                                            model.calculations.Add n
                                            let nn = TreeNode.newNodeCalc n.calId
                                            model.treeHierarchy.Value
                                            |> Array.append [| nn |]
                                            |> model.treeHierarchy.Set
                                            SelectNode  nn.nid |> updateModelR model
                | AddTotal               -> let n = Total.New()
                                            model.totals.Add n
                                            let nn = TreeNode.newNodeTot  n.totId
                                            model.treeHierarchy.Value
                                            |> Array.append [| nn |]
                                            |> model.treeHierarchy.Set
                                            SelectNode  nn.nid |> updateModelR model
                | AddFormula         cid -> if  cid = ModelUI.nonCalculation.calId then false else
                                            let n = Formula.New()
                                            model.calculations.TryFindByKey cid
                                            |> Option.iter(fun calc -> { calc with calFormulas = Array.append calc.calFormulas [| n |] } |> model.calculations.Add)
                                            model.treeHierarchy.Value 
                                            |> TreeNode.tryFindSelNodeEf model.selection.Value
                                            |> Render.runEff
                                            |> Option.map (fun nn -> SelectFormNode (n.forId, nn.nid ) |> updateModelR model)
                                            |> Option.defaultValue true
                | AddDimension           -> let n = Dimension.New ""
                                            model.dimensions.Add n
                                            SelectDimension n.dimId |> updateModelR model
                //| AddFormDim(fid, did, s)-> model.destinations.Add   { idForm = fid ; idDim = did ; destination = s }
                //                            true
            ////    | AddChild(tid, ch, we)  -> model.totals.TryFindByKey tid |> Option.map( fun tot ->
            ////                                    model.childrenRels.Value <- model.childrenRels.Value |> Map.add (tid, ch) we
            ////                                    true
            ////                                ) |> Option.defaultValue false
            ////    | RemoveChild (tid, ch)  -> model.childrenRels.Value <- model.childrenRels.Value |> Map.remove (tid, ch)
            ////                                true
                | RemoveTotal        tid -> model.totals.RemoveByKey    tid
                                            setSelection None |> ignore
                                            model.treeHierarchy.Value 
                                            |> TreeNode.removeNodesEf (TreeNode.forTId ((=) tid))
                                            |> Render.runEff
                                            |> ModelUI.setHierarchy model
                                            true
                | RemoveCalculation  cid -> setSelection None |> ignore
                                            model.calculations.RemoveByKey cid
                                            model.totals.Value
                                            |> Seq.choose (fun t -> 
                                                let eq, ne = t.children |> Array.partition (fun (_, nid) -> nid = Calc cid )
                                                if eq.Length = 0 then None else
                                                Some { t with children = ne }
                                            )
                                            |> Seq.iter model.totals.Add
                                            model.treeHierarchy.Value 
                                            |> TreeNode.removeNodesEf (TreeNode.forCId ((=) cid))
                                            |> Render.runEff
                                            |> ModelUI.setHierarchy model
                                            true
                | RemoveFormula      fid -> tryFindCalcForm fid
                                            |> Option.iter(fun calc -> { calc with calFormulas = calc.calFormulas |> Array.filter (fun f -> f.forId <> fid) } 
                                                                       |> model.calculations.Add )
                                            true
                | RemoveDimension    did -> model.dimensions.RemoveByKey did
                                            true
            ////    | RemoveFormDim(fid, did)-> model.destinations.RemoveByKey(fid, did)
            ////                                true
                | SelectNode         nid -> (nid, None    ) |> Some |> setSelection
                | ExpandNode    (ex, nid)-> let rec mapper finished (node:Tree.TreeNode) =
                                                if finished             then node                       , true
                                                elif node.nid = nid     then { node with expanded = ex }, true
                                                else let ch, dn = node.children |> Seq.mapFold mapper false
                                                     { node with children = Seq.toArray ch }            , dn
                                            model.treeHierarchy.Value 
                                            |> Seq.mapFold mapper false 
                                            |> fst
                                            |> Seq.toArray
                                            |> model.treeHierarchy.Set
                                            true
                | IndentNode   (iin, nid)-> let indent = if iin then TreeEff.indentNode else TreeEff.outdentNode
                                            eff {
                                                let! nodeO = model.treeHierarchy.Value |> TreeNode.tryFindNodeEf nid
                                                match nodeO with
                                                | None      -> ()
                                                | Some node ->
                                                    let! nodes = TreeNode.treenode node
                                                              |> swap indent (Seq.map TreeNode.treenode model.treeHierarchy.Value) 
                                                    nodes 
                                                    |> Seq.map TreeNode.ofNode
                                                    |> ModelUI.setHierarchy model
                                            } |> Render.iterEff id
                                            true
                | MoveNode(aft,fnid,tnid)-> TreeEff.moveToSibling2 aft fnid tnid (Seq.map TreeNode.treenode model.treeHierarchy.Value)
                                            |>> Seq.map TreeNode.ofNode
                                            |>> ModelUI.setHierarchy model
                                            |> Render.iterEff id
                                            true
                | SelectFormNode(fid,nid)-> (nid, Some fid) |> Some |> setSelection
                | SelectTotal        tid -> model.treeHierarchy.Value |> TreeNode.tryFindNodeTIdEf tid  |>> Option.map (fun n -> n.nid, None    ) |>> setSelection |> Render.runEff
                | SelectCalculation  cid -> model.treeHierarchy.Value |> TreeNode.tryFindNodeCIdEf cid  |>> Option.map (fun n -> n.nid, None    ) |>> setSelection |> Render.runEff
                | SelectFormula      fid -> tryFindCalcForm fid       |> Option.map(fun c -> c.calId)   |>  Option.map (fun cid -> model.treeHierarchy.Value |> TreeNode.tryFindNodeCIdEf cid)
                                                                         |> insertO |>> Option.bind id |>>  Option.map (fun n -> n.nid, Some fid) |>> setSelection |> Render.runEff
                | SelectDimension    did -> (if did = DimId System.Guid.Empty then None  else Some did)
                                            |> (fun s -> if s = model.selectedDim.Value then false else
                                                         model.selectedDim.Value    <- s
                                                         true)
                | AddCalcDim   (cid, did)-> doForCalc cid <| fun c -> model.calculations.Add { c with calDims = c.calDims |> Set.add    did }
                                            false
                | RemoveCalcDim(cid, did)-> doForCalc cid <| fun c -> model.calculations.Add { c with calDims = c.calDims |> Set.remove did }
                                            false
                | AddCube      (n, ds)   -> model.cubes.Add <| Cube.newCubeCalc n (ds |> Seq.toArray) None
                                            false
                | RemoveCube    cid      -> model.cubes.RemoveByKey cid
                                            false
                | RenameCube   (cid, n)  -> doForCube cid <| fun c -> model.cubes.Add { c with cubName = n }
                                            false
                | _ -> printfn "Msg not implemented: %A" msg ; false
        
            
            let updateModel model msg = if updateModelR model msg then ModelUI.refreshNow()
            processor <- updateModel model
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
            open WebSharper.Owin.WebSocket
            open WebSharper.Owin.WebSocket.Client
            open WebSharper.Owin.WebSocket.Server
            open WebSockets
        
            let varInt  = Var.Create 1
            printfn "varInt %A" varInt.Value
        
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
        
        
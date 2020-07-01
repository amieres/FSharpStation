#nowarn "3242"
#nowarn "52"
////-d:FSS_SERVER -d:FSharpStation1593197096670 -d:TEE -d:WEBSHARPER
////#cd @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\FSharpStation\src"
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
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Reactive\lib\net46\System.Reactive.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Control.Reactive\lib\net46\FSharp.Control.Reactive.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Owin\lib\net40\Owin.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\NewtonSoft.JSon\lib\net45\NewtonSoft.JSon.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin.Hosting\lib\net451\Microsoft.Owin.Hosting.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin.Host.HttpListener\lib\net451\Microsoft.Owin.Host.HttpListener.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin\lib\net461\WebSharper.Owin.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin\lib\net461\HttpMultipartParser.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin.StaticFiles\lib\net451\Microsoft.Owin.StaticFiles.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin.FileSystems\lib\net451\Microsoft.Owin.FileSystems.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\CommonServiceLocator\lib\portable-net4+sl5+netcore45+wpa81+wp8\Microsoft.Practices.ServiceLocation.dll"
//#nowarn "3242"
//#nowarn "52"
/// Root namespace for all code
//#define FSharpStation1593197096670
#if !NOFSROOT
#if INTERACTIVE
module FsRoot   =
#else
#if DLL
namespace FsRootDll
#else
namespace FsRoot
#endif
#endif
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
        
            let [<Inline>] inline swap f a b = f b a
            
            /// swap: for use with operators: [1..5] |> List.map (__ (/) 2)
            let [<Inline>] inline __   f a b = f b a
            
            
            type StringId<'T> = StringId of string 
            with
                member this.Id = match this with StringId v -> v
            
            type GuidId<'T> = GuidId of System.Guid
            with
                member this.Id = match this with GuidId v -> v
            
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
            
            
            [< Inline "(function (n) { return n.getFullYear() + '-' + ('0'+(n.getMonth()+1)).slice(-2) + '-' +  ('0'+n.getDate()).slice(-2) + ' '+('0'+n.getHours()).slice(-2)+ ':'+('0'+n.getMinutes()).slice(-2)+ ':'+('0'+n.getSeconds()).slice(-2)+ ':'+('00'+n.getMilliseconds()).slice(-3) })(new Date(Date.now()))" >]
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
                    printfn "%s Starting %s" (nowStamp()) n
                    let start = System.DateTime.UtcNow.Ticks
                    f p
                    let elapsedSpan = new System.TimeSpan(System.DateTime.UtcNow.Ticks - start)
                    printfn "%s Finished %s %0d:%02d:%02d.%03d" (nowStamp()) n (int elapsedSpan.TotalHours) elapsedSpan.Minutes elapsedSpan.Seconds elapsedSpan.Milliseconds
            
            
            // issues with websharper Type not found in JavaScript compilation: System.Collections.Generic.IDictionary`2
            #if !WEBSHARPER
            module IDict =
                let inline tryGetValue key (dict:System.Collections.Generic.IDictionary<_, _>) =
                    let mutable res = Unchecked.defaultof<_>
                    if dict.TryGetValue(key, &res)
                    then Some res 
                    else None
                let add          key v (dict:System.Collections.Generic.IDictionary<_, _>) = if dict.ContainsKey key then      dict.[key] <- v else dict.Add(key, v)
            #endif
            
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
            
            
            /// returns a function that delays its execution
            /// cancels prior when multiple calls happen before the delay
            let delayedA delay doF =
                let mutable cancelTokenO = None
                fun parm -> 
                    let asy = async {
                        do! Async.Sleep delay
                        do! doF parm
                    } 
                    cancelTokenO |> Option.iter (fun (tokenSource: System.Threading.CancellationTokenSource) -> tokenSource.Cancel())
                    cancelTokenO <- Some <| new System.Threading.CancellationTokenSource()
                    Async.Start(asy, cancellationToken = cancelTokenO.Value.Token)
            
            /// returns a function that delays its execution
            /// cancels prior when multiple calls happen before the delay
            let delayed delay doF = delayedA delay (doF >> async.Return)
            
            #if WEBSHARPER
            
            let delayedVar delay (var:Var<_>) =
                let delayedV = Var.Create var.Value
                var.View |> View.Sink (delayed delay delayedV.Set)
                delayedV
            
            #endif
            
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
                    [< Inline "throw 'traverseSeqS cannot be used in JavaScript!'" >]
                    let traverseSeqS (f: 't->Async<_>) (t: 't seq) = async {
                                                                 let! ct = Async.CancellationToken
                                                                 return seq {
                                                                     use enum = t.GetEnumerator ()
                                                                     while enum.MoveNext() do
                                                                         yield Async.RunSynchronously (f enum.Current, cancellationToken = ct) }}
                    let inline sequenceSeqS          sq = traverseSeqS id sq
                    let insertO  vAO                           = vAO |> Option.map(map Some) |> Option.defaultWith(fun () -> rtn None)
                    let insertR (vAR:Result<_,_>)              = vAR |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                
                
                
                module State =
                
                    type State<'T, 'S> = 'S -> ('S * 'T)
                
                    let rtn v = fun s -> s, v
                    let bind (f:'a->State<'b,'S>) (ma:State<'a,'S>) : State<'b,'S> = 
                        fun s1 -> 
                            let s2, a = ma s1
                            f a s2            
                    let map f = bind (f >> rtn)
                
                
                    type CEBuilder() =
                        member __.Bind   (m, f) = bind f m
                        member __.Return     v  = rtn v
                        member __.Delay      f  = f ()
                
                    let state = CEBuilder()
                
                    module Operators =
                        let (>>=) ma f = bind f ma
                        let (|>>) ma f = map  f ma
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
                    
                    
                module Depend =
                
                    type Depend<'T> = 
                    | Dependency of (string * obj) option * (obj -> Depend<'T>)
                    | NoMore     of 'T
                
                    let dependByName nm (defF:'f) (kf:'f->'T) = Dependency(Some(nm, box defF), fun f -> NoMore (kf (unbox f)) )
                
                    #if !WEBSHARPER
                    open Microsoft.FSharp.Quotations.Patterns 
                    open Microsoft.FSharp.Quotations.DerivedPatterns 
                
                    let pname (prop  :System.Reflection.PropertyInfo) = prop  .DeclaringType.FullName + "." + prop  .Name
                    let mname (method:System.Reflection.MethodInfo  ) = method.DeclaringType.FullName + "." + method.Name
                
                    let shouldBe q = 
                        let rec shouldBe l =
                            function
                            | Call(_, method, _) -> Some(mname method, l)
                            | Lambda(a, q2)      -> shouldBe (l + 1) q2
                            | _ -> None
                        match q with
                        | PropertyGet(o,                                          prop  , [         ]     )-> pname prop  , "should be 0"
                        | Lambda(a,                                    Call(None, method, [         ])    )
                        | Lambda(a,                                    Call(None, method, [_        ])    )-> mname method, "should be 1"
                        | Lambda(a,Lambda(b,                           Call(None, method, [p;q      ]))   )-> mname method, "should be 2"
                        | Lambda(a,Lambda(b,Lambda(c,                  Call(None, method, [p;q;r    ])))  )-> mname method, "should be 3"
                        | Lambda(a,Lambda(b,Lambda(c,Lambda(d,         Call(None, method, [p;q;r;s  ])))) )-> mname method, "should be 4"
                        | Lambda(a,Lambda(b,Lambda(c,Lambda(d,Lambda(e,Call(None, method, [p;q;r;s;t]))))))-> mname method, "should be 5"
                        | q -> 
                            shouldBe 0 q 
                            |> Option.map(fun (nm,l) -> nm, sprintf "Not covered %d parms: %A" l q) 
                            |> Option.defaultWith(fun () -> "?", sprintf "Not covered: %A" q)
                        |> fun (nm, m) -> failwithf " %s : %s" nm m
                
                    let getName0(q:Quotations.Expr<                    'T>) : string *                      'T = 
                        match q with
                        | PropertyGet(o,                                          prop  , [         ]     )-> pname prop  ,                  prop.GetValue(null, [|         |]) |> unbox 
                        |_-> shouldBe q
                    let getName1(q:Quotations.Expr<'a                ->'T>) : string * ('a                ->'T) = 
                        match q with
                        | Lambda(a,                                    Call(None, method, [         ])    )-> mname method, fun a         -> method.Invoke(null, [|         |]) |> unbox 
                        | Lambda(a,                                    Call(None, method, [p        ])    )-> mname method, fun a         -> method.Invoke(null, [|a        |]) |> unbox 
                        |_-> shouldBe q
                    let getName2(q:Quotations.Expr<'a->'b            ->'T>) : string * ('a->'b            ->'T) = 
                        match q with
                        | Lambda(a,Lambda(b,                           Call(None, method, [p;q      ]))   )-> mname method, fun a b       -> method.Invoke(null, [|a;b      |]) |> unbox
                        |_-> shouldBe q
                    let getName3(q:Quotations.Expr<'a->'b->'c        ->'T>) : string * ('a->'b->'c        ->'T) = 
                        match q with
                        | Lambda(a,Lambda(b,Lambda(c,                  Call(None, method, [p;q;r    ])))  )-> mname method, fun a b c     -> method.Invoke(null, [|a;b;c    |]) |> unbox
                        |_-> shouldBe q
                    let getName4(q:Quotations.Expr<'a->'b->'c->'d    ->'T>) : string * ('a->'b->'c->'d    ->'T) = 
                        match q with
                        | Lambda(a,Lambda(b,Lambda(c,Lambda(d,         Call(None, method, [p;q;r;s  ])))) )-> mname method, fun a b c d   -> method.Invoke(null, [|a;b;c;d  |]) |> unbox
                        |_-> shouldBe q
                    let getName5(q:Quotations.Expr<'a->'b->'c->'d->'e->'T>) : string * ('a->'b->'c->'d->'e->'T) = 
                        match q with
                        | Lambda(a,Lambda(b,Lambda(c,Lambda(d,Lambda(e,Call(None, method, [p;q;r;s;t]))))))-> mname method, fun a b c d e -> method.Invoke(null, [|a;b;c;d;e|]) |> unbox
                        |_-> shouldBe q
                
                    let depend0   q                                                                      = let (nm, f) = getName0 q in dependByName nm f id
                    let depend1   q                                                                      = let (nm, f) = getName1 q in dependByName nm f id
                    let depend2   q                                                                      = let (nm, f) = getName2 q in dependByName nm f id
                    let depend3   q                                                                      = let (nm, f) = getName3 q in dependByName nm f id
                    let depend4   q                                                                      = let (nm, f) = getName4 q in dependByName nm f id
                    let depend5   q                                                                      = let (nm, f) = getName5 q in dependByName nm f id
                    let replace0 (q:Quotations.Expr<                    'T>) (fr:                    'T) = let (nm, _) = getName0 q in nm, box fr
                    let replace1 (q:Quotations.Expr<'a->                'T>) (fr:'a->                'T) = let (nm, _) = getName1 q in nm, box fr
                    let replace2 (q:Quotations.Expr<'a->'b->            'T>) (fr:'a->'b->            'T) = let (nm, _) = getName2 q in nm, box fr
                    let replace3 (q:Quotations.Expr<'a->'b->'c->        'T>) (fr:'a->'b->'c->        'T) = let (nm, _) = getName3 q in nm, box fr
                    let replace4 (q:Quotations.Expr<'a->'b->'c->'d->    'T>) (fr:'a->'b->'c->'d->    'T) = let (nm, _) = getName4 q in nm, box fr
                    let replace5 (q:Quotations.Expr<'a->'b->'c->'d->'e->'T>) (fr:'a->'b->'c->'d->'e->'T) = let (nm, _) = getName5 q in nm, box fr
                    #endif
                
                    let bind (f: 'a -> Depend<'b>) (pa:Depend<'a>) : Depend<'b> = 
                        let rec bindR =
                            function
                            | Dependency(dep, k) -> Dependency(dep , fun p -> bindR (k p) ) 
                            | NoMore     v       -> Dependency(None, fun p -> f v         )
                        bindR pa
                    let rtn = NoMore
                    let map f = bind (f >> rtn)
                    let inline apply fR vR = fR |> bind (swap map  vR)
                
                    let replacer lst depend =
                        let rec replace =
                            function
                            | Dependency(None       , k)      -> Dependency(None        , k >> replace)
                            | Dependency(Some(nm, v), k)      ->
                                lst 
                                |> Seq.tryFind (fst >> ((=) nm))
                                |> Option.map  (snd >> fun v2 -> Dependency(Some(nm, v2), k >> replace) )
                                |> Option.defaultWith(fun ()  -> Dependency(Some(nm, v ), k >> replace) )
                            | NoMore v                        -> NoMore              v
                        replace depend
                
                    let replacerDef lst depend =
                        let rec replace =
                            function
                            | Dependency(None       , k)          -> Dependency(None         , k >> replace)
                            | Dependency(Some(nm, v), k)          ->
                                lst 
                                |> Seq.tryFind (fun (_, (nm2, _)) -> nm2 = nm)
                                |> Option.map  (fun (nmN,(_, v2)) -> Dependency(Some(nmN, v2), k >> replace) )
                                |> Option.defaultWith(fun ()      -> Dependency(Some(nm , v ), k >> replace) )
                            | NoMore v                            -> NoMore               v
                        replace depend
                
                    let resolver lst depend = 
                        let rec resolve =
                            function
                            | Dependency(None       , k)      -> k () |> resolve
                            | Dependency(Some(nm, v), k)      ->
                                lst 
                                |> Seq.tryFind (fst >> ((=) nm))
                                |> Option.map  (snd >> fun v2 -> k v2  )
                                |> Option.defaultWith(fun ()  -> k v )
                                |> resolve
                            | NoMore v                        ->   v
                        resolve depend
                
                    type DependBuilder() =
                        member __.Bind   (m, f) = bind f m
                        member __.Return     v  = rtn v
                        member __.Delay      f  = f ()
                
                    let depend = DependBuilder()
                
                    let getDependencies dep =
                        let rec collect lst dep =
                            let     lst2 = dep :: lst
                            match dep with
                            | Dependency(None      , k) -> collect lst2 (k () )
                            | Dependency(Some(_, v), k) -> collect lst2 (k v  )
                            | NoMore f                  -> lst2
                        collect [] dep
                        |> List.filter (function| Depend.Dependency(None,_) -> false |_-> true) 
                        |> List.rev 
                
                    let toString dep =
                        getDependencies dep
                        |> Seq.map       
                            (function 
                            | Depend.Dependency(Some(nm, v), next) -> sprintf "%-50s %A" nm v
                            | x -> string x)
                        |> Seq.distinct
                        |> Seq.sort
                        |> String.concat "\n"
                
                    module Operators =
                        let rtn        = rtn
                        let depend     = depend
                        let (>>=) ma  f = bind f ma
                        let (|>>) ma  f = map  f ma
                        let (|*>) p  mf = apply mf (rtn p)
                        let (>=*) mp mf = apply mf     mp
                        let (<*>) mf mp = apply mf     mp
                        let (>*>)  g mf = depend {
                            let! f = mf
                            return g >> f
                        }
                
                
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
                    let inline getResult (v:AsyncResult<_,_>) = v |> Async.map Result.Ok
                    let rec whileLoop cond fRA =
                        if   cond () 
                        then fRA  () |> bind (fun () -> whileLoop cond fRA)
                        else rtn  ()
                    let (>>=)                       v f = bind f v
                    let        traverseSeq         f sq = let folder tail head = f head >>= (fun h -> tail >>= (fun t -> Seq.append t (Seq.singleton h) |> rtn))
                                                          Seq.fold folder  (rtn Seq.empty) sq
                    let inline sequenceSeq           sq = traverseSeq id sq
                    /// uses Async.RunSynchronously
                    /// handleError - handles individual error messages. true = continue, false = stop
                    [< Inline "throw 'traverseSeqS cannot be used in JavaScript!'" >]
                    let traverseSeqS (f: 't->AsyncResult<'u, _>) handleError (t: 't seq)  = async {
                        let! ct = Async.CancellationToken
                        return seq {
                                use enum = t.GetEnumerator ()
                                let mutable stillOk = true
                                while enum.MoveNext() do
                                    match Async.RunSynchronously (f enum.Current, cancellationToken = ct) with
                                    | Ok v -> yield v
                                    | Error msg -> stillOk <- handleError msg
                                } 
                            |> Ok
                        }
                    let inline sequenceSeqS          sq = traverseSeqS id sq
                    let insertO   vRAO                  = vRAO |> Option.map(map Some) |> Option.defaultWith(fun () -> rtn None)
                    let insertR ( vRAR:Result<_,_>)     = vRAR |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                    let absorbR   vRRA                  = vRRA |> Async.map  Result.join
                    let absorbO f vORA                  = vORA |> Async.map (Result.absorbO  f)
                
                    let tryWith    hnd (fRA:unit -> AsyncResult<_,_>) : Async<Result<'a  , 'm>> = async { try return! fRA() with e -> return! hnd e  }
                    let tryFinally fn  (fRA:unit -> AsyncResult<_,_>) : Async<Result<'a  , 'm>> = async { try return! fRA() finally   fn  () }
                
                
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
                
            type System.String with
                member this.Substring2(from, n) = 
                    if   n    <= 0           then ""
                    elif from >= this.Length then ""
                    elif from <  0           then this.Substring2(0, n + from)
                    else this.Substring(from, min n (this.Length - from))
                member this.Left             n  = if n < 0 
                                                  then this.Substring2(0, this.Length + n)
                                                  else this.Substring2(0, n              )
                member this.Right            n  = this.Substring2(max 0 (this.Length - n), this.Length)
                //member this.toUnderscore        = this |> Seq.mapi(fun i c -> if i > 0 && System.Char.IsUpper(c) then [ '_' ; c ] else [ c ])  |> Seq.collect id |> Seq.toArray |> System.String
            
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
                let left  n (s:string) = s.Left  n
                let right n (s:string) = s.Right n
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
                let (|WhiteSpace|_|) (s:string) = if s |> Seq.exists (System.Char.IsWhiteSpace >> not) then None else Some()
                
                let thousands n =
                    let v = (if n < 0 then -n else n).ToString()
                    let r = v.Length % 3 
                    let s = if r = 0 then 3 else r
                    [   yield v.[0.. s - 1]
                        for i in 0..(v.Length - s)/ 3 - 1 do
                            yield v.[i * 3 + s .. i * 3 + s + 2]
                    ] 
                    |> String.concat ","
                    |> fun s -> if n < 0 then "-" + s else s
            
            
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
                
                type CommArg = {
                    cargId : CommArgId
                    name   : string
                    unique : bool
                    build  : obj -> string
                }
                type CommArgValue<'T,  'M> = FusionM<'T, CommArgCollection<     'M>, 'M>
                and  ArgValueTuple<    'M> = CommArg *   CommArgValue<obj,      'M>
                and  CommArgCollection<'M> = CommArgCollection of ArgValueTuple<'M> seq
                    with 
                        member oo.CommArgs = match oo with CommArgCollection v -> v
            
                let CommArgCollection agvts = Seq.cache agvts |> CommArgCollection
            
                type TypedCommArg<'T> = TypedCommArg of CommArg
                    with
                    member oo.CommArg = match oo with TypedCommArg v -> v
                    static member (/=) (arg: TypedCommArg<'T>, v:                        'T    ) : ArgValueTuple<'M> = match arg with TypedCommArg arg -> (arg, rtn v        |>> box)
                    static member (/=) (arg: TypedCommArg<'T>, v: CommArgValue<          'T, _>) : ArgValueTuple<'M> = match arg with TypedCommArg arg -> (arg,     v        |>> box)
                    static member (/=) (arg: TypedCommArg<'T>, f: CommArgCollection<'M>->'T    ) : ArgValueTuple<'M> = match arg with TypedCommArg arg -> (arg, getS() |>> f |>> box)
                
                module CommArg  =
                    let New (name, unique, build: 'T -> _) : TypedCommArg<'T> = 
                        {
                            cargId = CommArgId <| System.Guid.NewGuid()
                            name   = name
                            unique = unique
                            build  = unbox >> build
                        }  |> TypedCommArg
                    let NewInt   (name, unique, build) : TypedCommArg<int   > = New(name, unique, build)
                    let NewString(name, unique, build) : TypedCommArg<string> = New(name, unique, build)
                    let NewBool  (name, unique, build) : TypedCommArg<bool  > = New(name, unique, build)
                    let NewFloat (name, unique, build) : TypedCommArg<float > = New(name, unique, build)
                    let argumentRm (a:CommArg) (vRm:CommArgValue<obj,_>) = fusion {
                        let! v = vRm
                        let  r = a.build v
                        return r
                    }
                    let inline argumentTRm (a,v) = argumentRm a v
                    let getVRm (a: TypedCommArg<'T>) (vRm:CommArgValue<obj,_>) : FusionM<'T,_,_> = vRm |>> unbox
                    let        internal getValueR (a: TypedCommArg<'T>) (o:obj) : Result<'T,_> = unbox<'T> o |> Ok
                    let inline internal getIntR    a o : Result<int   ,_> = getValueR a o
                    let inline internal getStringR a o : Result<string,_> = getValueR a o
                    let inline internal getBoolR   a o : Result<bool  ,_> = getValueR a o
                    let inline internal getFloatR  a o : Result<float ,_> = getValueR a o
                
                module CommArgCollection =
                
                    let trueForAll                        _ = true
                    let contains      (TypedCommArg arg) (CommArgCollection args) = args |> Seq.map (fun (a,_) -> a.cargId) |> Seq.contains arg.cargId
                    let argsRm                           () = readerFun(fun (CommArgCollection args) -> args                 )
                    let existsRm                          f = readerFun(fun (CommArgCollection args) -> args |> Seq.exists f )
                    let filterRm                          p = readerFun(fun (CommArgCollection args) -> args |> Seq.filter p )
                    let argumentsRm                  filter = filterRm filter >>= traverseSeq CommArg.argumentTRm |>> Seq.filter ((<>) "")
                    let containsAnyOfRm (ids:CommArgId Set) = readerFun(fun (CommArgCollection args) -> args |> Seq.exists (fun (a,_) -> Set.contains a.cargId ids) )
                    let argumentNotFound  targ = fun () -> match targ with | TypedCommArg arg -> sprintf "argument not found: %s" arg.name |> ErrorMsg
                    let tryFindArgO   (TypedCommArg arg) (CommArgCollection args) = Seq.tryFind (fun (a,_) -> a.cargId = arg.cargId) args 
                    let tryFindArgORm     targ = readerFun(fun coll -> tryFindArgO targ coll |> Option.map insertFst |> insertO) >>= id
                    let tryGetValueORm    targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getValueR  targ o)) |>> Result.insertO >>= ofResultRM
                    let tryGetIntORm      targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getIntR    targ o)) |>> Result.insertO >>= ofResultRM
                    let tryGetStringORm   targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getStringR targ o)) |>> Result.insertO >>= ofResultRM
                    let tryGetBoolORm     targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getBoolR   targ o)) |>> Result.insertO >>= ofResultRM
                    let tryGetFloatORm    targ = tryFindArgORm   targ |>> (Option.map (fun (_, o) -> CommArg.getFloatR  targ o)) |>> Result.insertO >>= ofResultRM
                    let tryBuildArgORm    targ = tryFindArgORm   targ |>> (Option.map (fun (c, o) -> c.build                 o)) 
                    let findArgRm         targ = tryFindArgORm   targ >>= ofOption (argumentNotFound targ)
                    let getValueRm        targ = tryGetValueORm  targ >>= ofOption (argumentNotFound targ)
                    let getIntRm          targ = tryGetIntORm    targ >>= ofOption (argumentNotFound targ)
                    let getStringRm       targ = tryGetStringORm targ >>= ofOption (argumentNotFound targ)
                    let getFloatRm        targ = tryGetFloatORm  targ >>= ofOption (argumentNotFound targ)
                    let getBoolRm   def   targ = tryGetBoolORm   targ |>> Option.defaultValue def
                    let buildArgRm        targ = tryBuildArgORm  targ >>= ofOption (argumentNotFound targ)
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
            
                    let appendRm args2 = fusion {
                        let! args1 = getS()
                        do!         putS(append args1 args2)
                    }
                    let addPairsRm pairs = fusion {
                        let! args = getS()
                        do!         putS(addPairs pairs args)
                    }
                        
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
                open System
            
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
                    then code.[4.. (match code.IndexOf '\n' with -1 -> code.Length | n -> n)  - 1]
                    else ""
            
                let separatePrepros (code:string[]) =
                    let  quoted (line:string) = line.Trim().Split([| "\"" |], System.StringSplitOptions.RemoveEmptyEntries) |> Seq.tryLast |> Option.defaultValue line
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
                    let definesFirstLine = 
                        Seq.tryHead fsNass 
                        |> Option.map (fst >> FsCode >> extractDefines>> fun s-> s.Split([| " " ; "-d:" |], StringSplitOptions.RemoveEmptyEntries) ) 
                        |> Option.defaultValue [||]
                        |> Seq.map PrepoDefine
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
                                        |_             -> false) 
                                        |> Seq.append definesFirstLine
                                        |> Seq.toArray
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
                
            /// Adapted from here http://fssnip.net/7V5   Usage:
            /// let abs n = if n >= 0 then n else Hole ? TODO_AbsForNegativeValue    
            ///         
            /// abs  1 |> printfn "%A" // 1
            /// abs -1 |> printfn "%A" // System.NotImplementedException: Incomplete hole 'TODO_AbsForNegativeValue : System.Int32'
            type Hole = Hole with
                [< Inline ; CompilerMessage("Incomplete hole", 130) >]
                static member inline Incomplete id : 'T = failwithf "Incomplete hole '%s'" id        
                    
            
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
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Reactive\lib\net46\System.Reactive.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Control.Reactive\lib\net46\FSharp.Control.Reactive.dll"
            module RunProcess =
                open System.Diagnostics
                open System.Text
                open FSharp.Control.Reactive
                open FSharp.Control.Reactive.WaitHandle
                open FSharp.Control
            
                let startProcess p ops =
                    let procStart   = ProcessStartInfo(p, ops)
                    let proc        = new Process(StartInfo = procStart)
                    proc.Start() 
                
                let startProcessDir p ops dir =
                    let procStart   = ProcessStartInfo(p, ops, WorkingDirectory = dir)
                    let proc        = new Process(StartInfo = procStart)
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
                    let bufferOutput                      = new StringBuilder()
                    let bufferError                       = new StringBuilder()
                    let append  (sb: StringBuilder) txt   = sb.Append(txt + "\n")                       |> ignore
                    let consume (sb: StringBuilder)       = sb.ToString() |>! (fun _ -> sb.Clear()      |> ignore)
                    let dataHandler handler               = DataReceivedEventHandler(fun sender args -> try handler args.Data with _ -> ())
                    let outputHandler                     = append bufferOutput |> dataHandler
                    let errorHandler                      = append bufferError  |> dataHandler
                    do  startInfo.RedirectStandardInput  <- true
                        startInfo.RedirectStandardOutput <- true
                        startInfo.RedirectStandardError  <- true
                        startInfo.UseShellExecute        <- false
                    let proc                              = new Process(
                                                                StartInfo           = startInfo
                                                              , EnableRaisingEvents = true     )
                    do  outputHandler                    |>             proc.OutputDataReceived.AddHandler
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
            
                let fscIOption     = NewString("IOption"    , false, sprintf "-I:%A"          )
                let fscReference   = NewString("Reference"  , false, sprintf "-r:%A"          )
                let fscSource      = NewString("Source"     , false, sprintf "%A"             )
                let fscTarget      = NewString("Target"     , true , sprintf "--target:%s"    )
                let fscPlatform    = NewString("Platform"   , true , sprintf "--platform:%s"  )
                let fscOutput      = NewString("Output"     , true , sprintf "-o:%A"          )
                let fscDebug       = NewString("Debug"      , true , sprintf "--debug:%s"     )
                let fscDefine      = NewString("Define"     , false, sprintf "--define:%s"    )
                let fscStaticLink  = NewString("StaticLink" , false, sprintf "--staticlink:%s")
                let fscGenFSharp1  = NewString("GenFSharp1" , false, sprintf "-%s"            )
                let fscGenFSharp2  = NewString("GenFSharp2" , false, sprintf "--%s"           )
                let fscNoFramework = NewBool  ("NoFramework", true , function true -> "--noframework" |_-> "" )
                
                let FSharpArgs = 
                    Set [
                          fscIOption    .CommArg.cargId
                          fscReference  .CommArg.cargId
                          fscSource     .CommArg.cargId
                          fscTarget     .CommArg.cargId
                          fscPlatform   .CommArg.cargId
                          fscOutput     .CommArg.cargId
                          fscDebug      .CommArg.cargId
                          fscDefine     .CommArg.cargId
                          fscStaticLink .CommArg.cargId
                          fscGenFSharp1 .CommArg.cargId
                          fscGenFSharp2 .CommArg.cargId
                          fscNoFramework.CommArg.cargId
                ] 
                
                let wscWebSite      = NewString("Website"     , true , sprintf "--wsoutput:%A"              )
                let wscProjectFile  = NewString("WsProject"   , true , sprintf "--project:%A"               )
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
                          wscProjectFile .CommArg.cargId
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
                        fscNoFramework /= fusion {
                                            let!    args  = filterRm (fun (a,v) -> a.cargId = fscReference.CommArg.cargId)
                                            let!    args2 = args |> traverseSeq (fun (a,b) -> getVRm fscReference b )
                                            return  args2
                                                    |> Seq.map   (fun s -> s.ToLower()) 
                                                    |> Seq.exists(fun s -> s.Contains("fsharp.core.dll") || s.Contains("mscorlib.dll") )
                                          }
                    ]
                    
                let siteOptions ()=
                  CommArgCollection
                    [|
                       wscProjectType /=       "Site"
                       wscWebSite     /= (rtn (fun d   -> d +/+ "website"  ) <*> gS intDirectory )
                       wscJsOutput    /= (rtn (fun d n -> d +/+ n + "0.js" ) <*> gS wscWebSite  <*> gS intName )
                       wscProjectFile /=       gS intName
                       wscJSMap       /=       true
                    |] 
                 
                let wsProjectOptions ()=
                  CommArgCollection
                    [|
                       wscProjectFile /= gS intName
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
                       fscGenFSharp2  /= "nowarn:1178"
                       fscGenFSharp2  /= "nowarn:1182"
                       fscGenFSharp2  /= "nowarn:52"
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
                    
                let prepOptionsRm (assembs : string [], defines : string [], prepoIs : string []) = fusion {
                    let! staticLinksAll = getBoolRm false intStaticLinkAll
                    return [
                        yield! prepoIs |> Array.map ((/=) fscIOption  ) 
                        yield! assembs |> Array.map ((/=) fscReference)
                        yield! defines |> Array.map ((/=) fscDefine   )
                        if staticLinksAll then 
                            yield! assembs |> Array.map (fun f -> fscStaticLink /= System.IO.Path.GetFileNameWithoutExtension f)
                    ]
                }
                    
                let processArgs code assembs nowarns = fusion {        
                    let! show      = getBoolRm false intShowArgs
                    if   show then 
                        let! args  = filterRm trueForAll
                        for (targ, vRm) in args do 
                            let! v = vRm
                            printfn "%25s = %A" targ.name v
                    let! workDir   = gS intDirectory
                    let! fileName  = gS intFileName
                    let! output    = gS fscOutput
                    let! copyAssem = gB intCopyAssem
                    let! createDir = gB intCreateDir
                    let  srcDir    = Path.GetDirectoryName fileName
                    let  outDir    = Path.GetDirectoryName output
                    if   createDir then 
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
                
                type PreparedCode = {
                    assemblies : string []
                    defines    : string []
                    prepIs     : string []
                    nowarns    : string []
                    cd         : string option
                    code       : FsCode
                }
            
                let prepareCodeRm (FsCode codeFs) = fusion {
                    let  fs, directs                            = codeFs.Split '\n' |> separatePrepros |> getTopDirectives
                    let  assembs, defines, prepIs, nowarns, cdO = separateDirectives directs
                    let! args2                                  = prepOptionsRm (assembs, defines, prepIs)
                    do!                                           addPairsRm  args2
                    do!                                           processArgs fs assembs nowarns
                    return {
                        assemblies = assembs
                        defines    = defines
                        prepIs     = prepIs
                        nowarns    = nowarns
                        cd         = cdO
                        code       = FsCode codeFs
                    }
                }
            
            module FsiEvaluator =
                open System.Diagnostics
                open RunProcess
                
                
                let inline (+/+) a b = System.IO.Path.Combine(a, b)
            
                [< Literal >]
                let endToken = "xXxY" + "yYyhH"
                type FsiExe(config:string, workingDir, ?outHndl, ?errHndl) =
                    let silent                     = ref false
                    let fsiexe                     = if config.Contains "-d:FSI32BIT" then "fsi.exe" else "fsianycpu.exe"
                    let startInfo                  = ProcessStartInfo(fsiexe, config, WorkingDirectory= workingDir)
                    let outHndlS                   = outHndl |> Option.map(fun outh v -> if !silent then () else outh v)
                    let errHndlS                   = errHndl |> Option.map(fun errh v -> if !silent then () else errh v)
                    let shell                      = new ShellEx(startInfo, ?outHndl = outHndlS, ?errHndl = errHndlS)  // --noninteractive
                    do  startInfo.CreateNoWindow  <- false
                        shell.Start() |> ignore
                    member __.Eval (FsCode code)   = asyncResult {
                                                        shell.Output() |> ignore
                                                        shell.Error () |> ignore
                                                        shell.Send code
                                                        shell.Send ";;"
                                                        return! shell.SendAndWait("printfn \"" + endToken + "\";;", endToken)
                                                     }
                    member __.IsAlive              = not shell.HasExited
                    member __.Abort()              = shell.Abort()
                    member __.Process              = shell.Process
                    member __.Shell                = shell
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
                open WebSharper.JavaScript
            
                let ofAsyncResult (v: Async<Result<'a,'b>>) : Promise<'a> =
                    new Promise<'a>(fun (resolve, reject) ->
                        Async.StartWithContinuations(v, (function Ok ok -> resolve ok | Error er -> reject <| sprintf "%A" er), reject, reject)
                    )
            
            module PromiseM =
                open WebSharper.JavaScript
            
                let ofAsyncResultM (v: Async<ResultM<'a,'b>>) : Promise<'a> =
                    new Promise<'a>(fun (resolve, reject) ->
                        Async.StartWithContinuations(v, (function OkM(ok, _) -> resolve ok | ErrorM er -> reject <| ResultMessage.summarized er), reject, reject)
                    )        
            module View =
                let insertWO = 
                    function
                    | Some v -> View.Map Some v
                    | None   -> View.Const None
                    
                let [<Inline>] inline consistent   (vl:View<_>)  = 
                    let prior      = ref <| Var.Create Unchecked.defaultof<_>
                    let setPrior v = if (!prior).Value <> v then (!prior).Set v 
                    View.Sink setPrior vl
                    !prior |> View.FromVar
            
                let bind = View.Bind
                let map  = View.Map
                let rtn  = View.Const
            
                let (>>=)                              v f = bind f v
                let        traverseSeq     f            sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                             Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                let inline sequenceSeq                  sq = traverseSeq id sq
            
                let (<*>)                        =  View.Apply
                let       traverseListApp f list =  let cons head tail = head :: tail
                                                    let folder head tail = rtn cons <*> f head <*> tail
                                                    List.foldBack folder list (rtn [])
                let inline sequenceListApp  list =  traverseListApp id list
            
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
                
                let refreshLM (lm:ListModel<_,_>) elems =
                    lm.AppendMany elems
                    let keys = elems |> Seq.map lm.Key |> Set
                    lm |> Seq.cache |> Seq.iter(fun e ->
                        if keys |> Set.contains (lm.Key e) |> not then lm.RemoveByKey (lm.Key e)
                    )
            
                let MapLens predO (f: 'Key -> Var<'T> -> 'V) (m:ListModel<_,_>) =
                    let get k v = f k (m.Lens k)
                    match predO with
                    | None       -> m.ViewState |> View.MapSeqCachedViewBy m.Key get 
                    | Some predW ->
                        (m.ViewState, predW) 
                        ||> View.Map2(fun vms pred -> vms.ToArray (System.Predicate pred)) 
                        |> View.MapSeqCachedViewBy m.Key get 
            
            module Pojo =
                let addProp prop (pojo:JSObject) = pojo.Add prop ; pojo
                
                let newPojo props =
                    let pojo = JSObject()
                    if IsClient then
                        props |> Seq.iter (swap addProp pojo >> ignore)
                    pojo
            
                let newPojoOpt (propOs : seq<string * obj option>) =
                    propOs
                    |> Seq.choose(fun (n,vO) -> vO |> Option.map(fun v -> n,v))
                    |> newPojo
            
            module GenEditor =
                open WebSharper.UI.Html
            
                type Position = {
                    line : int
                    col  : int
                }
            
                type AnnotationType =
                | Error   
                | Warning 
                | Info    
                | Hint
                | Other of string
            
                type Annotation = {
                    startP        : Position
                    endP          : Position
                    severity      : AnnotationType
                    message       : string
                }
            
                type Completion = {
                    kind                : string
                    label               : string
                    detail              : string
                    replace             : Position * Position
                }
            
                [<NoComparison ; NoEquality>]
                type GenEditorHook<'T> = {
                    generateDoc       :  GenEditor<'T> -> ('T -> unit)     -> Doc
                    getValue          :  unit                              -> string
                    setValue          :  string                            -> unit
                    setDisabled       :  bool                              -> unit
                    showAnnotations   :  Annotation seq                    -> unit
                    posFromIndex      :  int                               -> Position
                    indexFromPos      :  Position                          -> int
                    getWordAt         :  Position                          -> (string * Position) option
                    getSelectionText  :  unit                              -> string
                    getUri            :  unit                              -> string
                    setUri            :  string                            -> unit
                    hookOnChange      : (obj           -> unit           ) -> unit
                }
            
                and GenEditor<'T> = {
                    var             :  Var< string        >
                    disabled        :  View<bool          >
                    annotations     :  View<Annotation seq>
                    onChange        : (GenEditor<'T> -> string      -> unit                              ) option
                    onRender        : (GenEditor<'T>                -> unit                              )
                    autoCompletion  : (GenEditor<'T> -> Position    -> Async<Completion []>              ) option
                    toolTip         : (GenEditor<'T> -> Position    -> Async<string              option >) option
                    declaration     : (GenEditor<'T> -> Position    -> Async<(Position * string) option >) option
                    mutable editorO :  'T option
            
                    editorHook      : GenEditorHook<'T>
                }
                
                let inline setVar   v   genE = { genE with var      = v   }
                let inline onChange f   genE = { genE with onChange = f   }
                let inline onRender f   genE = { genE with onRender = f   }
                let inline disabled dis genE = { genE with disabled = dis }
            
                let inline var          genE = genE.var
            
                let newVar edh var = {
                    var            = var 
                    disabled       = V false
                    annotations    = V Seq.empty
                    onChange       = None
                    onRender       = ignore
                    editorHook     = edh
                    autoCompletion = None
                    toolTip        = None
                    declaration    = None
                    editorO        = None
                }
            
                let newText edh (v:string)             = newVar edh (Var.Create v)
                let newVarO edh (v:Var<string option>) = 
                    Var.Lens v (Option.defaultValue "") (fun sO s -> sO |> Option.map (fun _ -> s) )
                    |> newVar edh
                    |> disabled(V (Option.isNone v.V))
            
                /// binds an Editor with a Var<string> to avoid annoying jumps to the end when fast typing
                /// onChange gets called when the editor changes but not when the var changes
                let bindVarEditor setEvent getVal setVal onChange (var:Var<_>) =
                    let editorChanged = ref 0L
                    let varChanged    = ref 0L
                    setEvent(fun _ ->
                        let v = getVal() 
                        if var.Value <> v then editorChanged := !editorChanged + 1L; var.Value <- v; onChange v 
                    )
                    var.View |> View.Sink (fun _ ->
                        if  !editorChanged > !varChanged then varChanged := !editorChanged
                        elif getVal() <> var.Value then setVal var.Value
                    )
            
                let generateDoc genE = 
                    let onChange = genE.onChange |> Option.map(fun f -> f genE) |> Option.defaultValue ignore
                    genE.editorHook.generateDoc genE (fun ed ->
                        genE.editorO        <- Some ed
                        genE.var            |> bindVarEditor  genE.editorHook.hookOnChange    
                                                              genE.editorHook.getValue 
                                                              genE.editorHook.setValue 
                                                              onChange
                        genE.annotations    |> View.Sink      genE.editorHook.showAnnotations
                        genE.disabled       |> View.Sink      genE.editorHook.setDisabled
                        genE.onRender genE
                    )
            
            
            [< Inline """(!$v)""">]
            let isUndefined v = v.GetType() = v.GetType()
                
            
            module Serializer =
                open System
                open WebSharper.JavaScript
                
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
                
                let serFloat  : Ser<float   > = sprintU               , (unbox >> ifUndef 0.0             )
                let serInt    : Ser<int     > = sprintU               , (unbox >> ifUndef 0               )
                let serBool   : Ser<bool    > = sprintU               , (unbox >> ifUndef false           )
                let serString : Ser<string  > = Json.Serialize        , (unbox >> ifUndef ""              )
                let serDate   : Ser<DateTime> = (date2Long >> sprintU), (unbox >> ifUndef 0L >> long2Date )
            
                let [< Inline >] inline serId  (get: 'a->System.Guid) (set:System.Guid->'a) (print: 'a->string) : Ser<'a> =
                    let s           = System.Guid.Empty |> set |> print |> fun (s:string) -> s.Split ' ' |> Array.head
                    let sQ          = sprintf "%A" s
                    let serialize   = fun id       -> get id |> sprintf "{%10s :%A}" sQ
                    let deserialize = fun (x: obj) -> x?(s) |> deserGuid |> set
                    serialize, deserialize
            
                let serField (name:string) (get:'D->'e) (set:'e->'D->'D) (serFuncs:('e->string) * (obj->'e)) : string * _ * ('D -> SerD<'D>) = 
                    serFuncs |> fun (ser, deser) -> name, get >> ser >> Some, (fun rc o -> set (deser o) rc) 
                    
                let serFieldO (name:string) (get:'D->'e option) (set:'e option->'D->'D) (serFuncs:('e->string) * (obj->'e)) : string * _ * _ = 
                    serFuncs |> fun (ser, deser) -> name, get >> Option.map ser, (fun rc o -> set (if isUndefined o then None else Some(deser o) ) rc) 
                    
                let [< Inline >] serRecord init (fields: #seq<(string * ('D -> string option) * ('D -> SerD<'D>))>) : Ser<'D> =
                    let serialize   dim = fields |> Seq.choose(fun (n, ser, _deser) -> ser dim |> Option.map (sprintf "%A: %s" n)) |> String.concat ", " |> sprintf "{%s}"
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
            
            let (|REGEX|_|) (expr: string) (opt: string) (value: string) =
                if value = null then None else
                match JavaScript.String(value).Match(WebSharper.JavaScript.RegExp(expr, opt)) with
                | null         -> None
                | [| |]        -> None
                | m            -> Some m
            
            let rexGuid = """([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})"""
            
            let rexEmail = """(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*"""
            
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
                open WebSharper.JavaScript
            
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
                open WebSharper.JavaScript
            
                [< Inline """return Reflect.construct($global.HTMLElement, [], this.__proto__.constructor);""" >]
                let ReflectConstruct () = X<_>
                
                [< Inline """console.log('defineWebComponent: ' + $_nm);
                            Object.setPrototypeOf($_c.prototype, $global.HTMLElement.prototype);
                            Object.setPrototypeOf($_c, $global.HTMLElement);
                            Object.setPrototypeOf($_o.prototype, $_c.prototype);
                            $global.customElements.define($_nm, $_o)""" >]
                let defineWebComponent_ _nm _o _c = X<_>
            
                let defineWebComponent _nm _o _c = 
                    try defineWebComponent_ _nm _o _c
                    with _ -> printfn "Failed to define WebComponent. Not supported."
            
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
                        #if DLL 
                        [< Inline """$global.FsRootDll.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New""" >] static member NewPointer = X<_>
                        #else
                        [< Inline """$global.FsRoot   .LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New""" >] static member NewPointer = X<_>
                        #endif
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
                        #if DLL 
                        [< Inline """$global.FsRootDll.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New""" >] static member NewPointer = X<_>
                        #else
                        [< Inline """$global.FsRoot   .LibraryJS.WebComponent.WcSplitter.WcSplitterT.New""" >] static member NewPointer = X<_>
                        #endif
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
                                let drag       (ev: Dom.Event     ) =
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
                    
            [< JavaScriptExport >]
            module Monaco =
                open WebSharper.JavaScript
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
                    [< Inline "$global.monaco.Uri.parse($_s)" >] static member Parse(_s)      : Uri    = X<_>
                    [< Inline "$global.monaco.Uri.file($_f) " >] static member File(_f)       : Uri    = X<_>
                    [< Inline "$this.toString()             " >] override this.ToString()     : string = X<_>
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
                    [< Inline "$mo.uri                                           " >] member mo.GetUri()                        : Uri            = X<_>
                    [< Inline "$mo.uri = $_v                                     " >] member mo.SetUri(_v:Uri)                  : unit           = X<_>
                    [< Inline "$mo.getValue()                                    " >] member mo.GetValue()                      : string         = X<_>
                    [< Inline "$mo.setValue($_v)                                 " >] member mo.SetValue(_v:string)             : unit           = X<_>
                    [< Inline "$mo.getPositionAt($_i)                            " >] member mo.GetPositionAt(_i: int     )     : Position       = X<_>
                    [< Inline "$mo.getOffsetAt($_p)                              " >] member mo.GetOffsetAt(  _p: Position)     : int            = X<_>
                    [< Inline "$mo.dispose()                                     " >] member mo.Dispose()                       : unit           = X<_>
                    [< Inline "$mo.getValueInRange($_r)                          " >] member mo.GetValueInRange(  _r: Range)    : string         = X<_>
                    
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
                    [< Inline "$monc.getSelection()              " >] member monc.GetSelection()                              : Range           = X<_>
                    
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
                    onChange        : (string -> unit)
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
                                 monc.var |> GenEditor.bindVarEditor editor.OnDidChangeModelContent editor.GetValue editor.SetValue monc.onChange
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
            
            [< JavaScriptExport >]
            module MonacoGenAdapter =
                open Monaco
                open GenEditor
                open WebSharper.UI.Html
            
                type MonacoRT = {
                    mutable editorO     : Monaco.Editor option
                    mutable onChange    : obj -> unit
                    options             : obj
                    overrides           : obj
                }
            
                let iterEditor monRT f =
                    match monRT.editorO with
                    | None    -> ()
                    | Some ed -> f ed
            
                let mapEditor monRT f =
                    match monRT.editorO with
                    | None    -> None
                    | Some ed -> Some (f ed)
            
                let bindEditor monRT f =
                    match monRT.editorO with
                    | None    -> None
                    | Some ed -> f ed
            
                let posGen2Ed (p:GenEditor.Position) : Monaco.Position = 
                    {
                        column     = p.col 
                        lineNumber = p.line
                    }
            
                let posEd2Gen (p:Monaco.Position) : GenEditor.Position = 
                    {
                        col  = p.column    
                        line = p.lineNumber
                    }
            
                let indexFromPos monRT p =
                    mapEditor monRT <| fun ed ->
                        ed.GetModel().GetOffsetAt(posGen2Ed p)            
                    |> Option.defaultValue -1
            
                let posFromIndex monRT i =
                    mapEditor monRT <| fun ed ->
                        ed.GetModel().GetPositionAt i
                        |> posEd2Gen
                    |> Option.defaultValue { col = 1 ; line = 1 }
            
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
            
                type CompletionItemProvider(autoComplete: GenEditor.Position -> Async<Completion[]>) =
                    do()
                   with
                      member __.provideCompletionItems(model:Model, pos:Monaco.Position, token:obj, context: obj) =
                        asyncResultM {
                            let! comps = autoComplete  { col = pos.column ; line = pos.lineNumber }
                            return comps 
                                    |> Array.map(fun (comp:Completion) -> 
                                        { 
                                            kind   = convertGlyphChar comp.kind
                                            label  = comp.label
                                            detail = comp.detail
                                        } )
                        } |> PromiseM.ofAsyncResultM
                      member __.resolveCompletionItem(item: CompletionItem, token: obj): CompletionItem = { item with detail = "more details" }
            
            
                type HoverProvider(toolTip: GenEditor.Position -> Async<string option> ) =
                    do()
                   with
                      member __.provideHover(model:Model, pos:Monaco.Position, token:obj) =
                        asyncResultM {
                            let! desc = toolTip { col = pos.column ; line = pos.lineNumber }
                            match desc with
                            | None      -> return (box null |> unbox)
                            | Some desc ->
                            return {
                                    contents = [| { value = desc ; isTrusted = true } |]
                                    range    = (box null |> unbox)
                                }
                        } |> PromiseM.ofAsyncResultM
            
                type DefinitionProvider(declaration: GenEditor.Position -> Async<(Position * string) option> ) =
                    do()
                   with
                        member __.provideDefinition(model: Model, pos: Monaco.Position, token: obj) =
                            asyncResultM {
                                let! declO =  declaration { col = pos.column ; line = pos.lineNumber }
                                match declO with
                                | None             -> return box null |> unbox
                                | Some (pos, file) ->
                                return {
                                    range = {
                                                startColumn     = pos.col
                                                endColumn       = pos.col
                                                startLineNumber = pos.line
                                                endLineNumber   = pos.line
                                    }
                                    uri   = Uri.Parse file
                                }
                            } |> PromiseM.ofAsyncResultM
            
                let generateDoc monRT genE onRender =
                    async {
                      do! Monaco.loader
                      return
                          div [ on.afterRender (fun elchild  ->
                                    let editor        = Monaco.Editor.Create elchild.ParentElement monRT.options monRT.overrides
                                    ResizeObserver.addResizeObserver editor.Layout elchild.ParentElement
                                    elchild.ParentNode.RemoveChild elchild |> ignore
                                    monRT.editorO     <- Some editor
                                    onRender                  editor
                                    editor.OnDidChangeModelContent monRT.onChange
                                    genE.toolTip        |> Option.iter (fun f -> Editor.RegisterHoverProvider         ("fsharp", new HoverProvider         (f genE) ) |> ignore )
                                    genE.declaration    |> Option.iter (fun f -> Editor.RegisterDefinitionProvider    ("fsharp", new DefinitionProvider    (f genE) ) |> ignore )
                                    genE.autoCompletion |> Option.iter (fun f -> Editor.RegisterCompletionItemProvider("fsharp", new CompletionItemProvider(f genE) ) |> ignore )
                          )    
                        ] []
                    } |> Doc.Async
            
                let getUri    monRT     = mapEditor  monRT    <| (fun ed -> ed.GetModel().GetUri().ToString() ) |> Option.defaultValue "" 
                let setUri    monRT uri = iterEditor monRT    <|  fun ed -> ed.GetModel().SetUri(Uri.Parse uri) 
                let getValue  monRT     = mapEditor  monRT    <| (fun ed -> ed.GetValue()   ) |> Option.defaultValue "" 
                let setValue  monRT txt = iterEditor monRT    <|  fun ed -> ed.SetValue txt 
                let getWordAt monRT pos = bindEditor monRT    <|  fun ed -> let word = ed.GetModel().GetWordAtPosition {    
                                                                                column     = (pos:GenEditor.Position).col
                                                                                lineNumber = pos.line }
                                                                            if isUndefined word then None else 
                                                                            (word.word, {   col  = word.startColumn
                                                                                            line = pos.line })
                                                                            |> Some
                let getSelect monRT     = mapEditor  monRT    <| (fun ed -> ed.GetSelection() |> ed.GetModel().GetValueInRange ) |> Option.defaultValue "" 
            
                let showAnnotations monRT ans =
                    iterEditor monRT <| fun ed ->
                        let ms =
                            ans
                            |> Seq.map (fun (an:Annotation) ->
                                {   message           = an.message
                                    severity          = match an.severity with 
                                                        | Error   -> MarkerSeverity.Error 
                                                        | Warning -> MarkerSeverity.Warning  
                                                        | Hint    -> MarkerSeverity.Hint 
                                                        | _       -> MarkerSeverity.Info
                                    startColumn       = an.startP.col
                                    startLineNumber   = an.startP.line
                                    endColumn         = an.endP  .col
                                    endLineNumber     = an.endP  .line
                                }
                            )
                            |> Seq.toArray
                        Editor.SetModelMarkers(ed.GetModel(), "annotations", ms)
            
                let newHook monRT = {
                    generateDoc      =            generateDoc  monRT 
                    getValue         = fun ()  -> getValue     monRT
                    setValue         =            setValue     monRT
                    getWordAt        =            getWordAt    monRT
                    showAnnotations  = showAnnotations         monRT
                    setDisabled      = ignore //  bool                              -> unit
                    hookOnChange     = fun f   -> monRT.onChange <- f 
                    posFromIndex     =            posFromIndex monRT
                    indexFromPos     =            indexFromPos monRT
                    getUri           = fun ()  -> getUri       monRT
                    setUri           =            setUri       monRT
                    getSelectionText = fun ()  -> getSelect    monRT
                }
            
                let newRT options overrides = {
                    editorO     = None
                    onChange    = ignore
                    options     = options   
                    overrides   = overrides 
                }
            
                let newVar options overrides v =
                    newRT options overrides
                    |> newHook
                    |> GenEditor.newVar <| v
            
            module AppFrameworkTemplate =
                let html = """
            <div style="display:none" >
                <div links>
                    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" rel="stylesheet">
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"   type="text/javascript"></script>
                </div>
                <div ws-template="AppFramework" style="height: calc(100vh - 4px); width: calc(100vw - 4px) " class="relative" >
                    <div ws-hole="MainClient"></div>
                    <div class="AppFrameworkGo"><button ws-onclick="GoClient">${MainDoc}</button></div>
                </div>
                <div ws-template="VSplitter1" class="versplitter" ws-attr="Attrs" vertical>
                    <div style="min-width :Calc((100% - ${gap}) *        ${perc}  / 100);max-width :Calc((100% - ${gap}) *        ${perc}  / 100)">${doc1}</div>
                    <div style="min-width :             ${gap}" ws-onmousedown="MouseDown" ></div>
                    <div style="min-width :Calc((100% - ${gap}) * (100 - ${perc}) / 100);max-width :Calc((100% - ${gap}) * (100 - ${perc}) / 100)">${doc2}</div>
                </div>
                <div ws-template="HSplitter1" class="horsplitter" ws-attr="Attrs">
                    <div style="min-height:Calc((100% - ${gap}) *        ${perc}  / 100);max-height:Calc((100% - ${gap}) *        ${perc}  / 100)">${doc1}</div>
                    <div style="min-height:             ${gap}" ws-onmousedown="MouseDown" ></div>
                    <div style="min-height:Calc((100% - ${gap}) * (100 - ${perc}) / 100);max-height:Calc((100% - ${gap}) * (100 - ${perc}) / 100)">${doc2}</div>
                </div>
                <style>
                    .horsplitter                    { display: flex; flex-direction:column              } 
                    .horsplitter > div:nth-child(2) { background: #eef; cursor: row-resize; z-index:400 }
                    .horsplitter > div              { overflow: hidden                                  }
                    .versplitter                    { display: flex; flex-direction:row                 } 
                    .versplitter > div:nth-child(2) { background: #eef; cursor: col-resize; z-index:400 }
                    .versplitter > div              { overflow: hidden                                  }
                </style>
                <style>
                    .AppFrameworkGo {
                        max-width: 2px;
                        max-height: 2px;
                        z-index: 4000;
                        overflow: hidden;
                        position: fixed;
                        top: 0px;
                        left: 0px;
                    }
                </style>
                <div ws-template="FixedSplitterVer" 
                    style="display: grid; 
                           grid-gap: 0px; 
                           box-sizing: border-box; 
                           height: 100%;
                           width : 100%;
                           grid-template-areas: 'one two'; 
                           grid-template-rows   :100%; 
                           overflow: hidden; 
                           grid-template-columns: ${PartSizes}"  >
                   <div ws-hole="First"  style="grid-area: one; " class="relative" ></div>
                   <div ws-hole="Second" style="grid-area: two; " class="relative" ></div>
                </div>               
                <div ws-template="FixedSplitterHor" 
               style="display: grid; 
                      grid-gap: 0px; 
                      box-sizing: border-box; 
                      height: 100%;
                      width : 100%;
                      grid-template-areas: 'one' 'two'; 
                      grid-template-columns:100%; 
                      overflow: hidden; 
                      grid-template-rows   : ${PartSizes}"  >
              <div ws-hole="First"  style="grid-area: one; " class="relative" ></div>
              <div ws-hole="Second" style="grid-area: two; " class="relative" ></div>
                </div>               
                <div ws-template="WCompSplitterHor" 
                     ws-onafterrender="AfterRender"
                     style="display: grid;
                            grid-gap: 5px; 
                            box-sizing: border-box; 
                            grid-template-areas: 'one' 'two'; 
                            grid-template-columns:100%; 
                            overflow: hidden; 
                            grid-template-rows   : ${PartSizes}" 
                     >
                     <slot></slot>
                    <slot name="splitter">  <div style="grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}" ws-onmousedown="MouseDown" ws-onafterrender="AfterRenderSp" ></div> </slot>
                    <style>
                        ::slotted(*) {
                            display: grid;
                            height : 100%;
                            width  : 100%;
                            overflow: hidden;
                        }
                        ::slotted(*:nth-child(2)) {
                            grid-area: two;
                        }
                        ::slotted(*[slot="splitter"]) {
                            grid-row:2; grid-column:1 / 1 ; 
                            cursor: row-resize; 
                            z-index: 3; 
                            background-color: #eef ; 
                            height: ${Gap}; 
                            margin-top :-${Gap}
                        }
                    </style>
                </div>        
                <div ws-template="WCompSplitterVer" 
                     ws-onafterrender="AfterRender"
                     style="display: grid; 
                            grid-gap: 5px; 
                            box-sizing: border-box; 
                            grid-template-areas: 'one two'; 
                            grid-template-rows   :100%; 
                            overflow: hidden; 
                            grid-template-columns: ${PartSizes}"  >
                    <slot></slot>
                    <slot name="splitter"> <div style="grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}" ws-onmousedown="MouseDown" ws-onafterrender="AfterRenderSp" ></div> </slot>
                    <style>
                        ::slotted(*) {
                            display: grid;
                            height : 100%;
                            width  : 100%;
                            overflow: hidden;
                        }
                        ::slotted(*:nth-child(2)) {
                            grid-area: two;
                        }
                        ::slotted(*[slot="splitter"]) {
                            grid-column:2; grid-row:1 / 1
                            cursor: column-resize; 
                            z-index: 3; 
                            background-color: #eef ; 
                            width: ${Gap}; 
                            margin-left:-${Gap}
                        }
                    </style>
                </div>
                <div ws-template="AppFwkClient" >
                    <ws-FixedSplitterHor>
                        <PartSizes>55px calc(100% - 55px)</PartSizes>
                        <First>
                            <span style="display: grid;
                                  grid-template-columns: 30% 20% 20% 10%;
                                  grid-gap: 25px;
                                ">
                                <div class="mainTitle">AppFramework</div>
                            </span>
                        </First>
                        <Second>
                                <ws-FixedSplitterVer>
                                    <PartSizes>calc(100% - 2px) 2px</PartSizes>
                                    <First>
                                        <wcomp-splitter vertical value="18" max="100">
                                            <div><div ws-hole="PlugIns" style="overflow:auto" >
                                                <div ws-template="Tile">
                                                    <div draggable="true" class="code-editor-list-tile ${Predecessor} ${Selected}" 
                                                    ws-ondrag="Drag"
                                                    ws-ondragover="DragOver"
                                                    ws-ondrop="Drop"
                                                   >
                                                   <span class="node ${Parent} ${ErrorMsg}" title="expand" ws-onclick="ToggleCollapse"></span>
                                                   <div  class="code-editor-list-text" style="text-indent:${Indent}em; white-space: pre" ws-onclick="Select" ws-onafterrender="AfterRender" >${Name}</div>
                                                   <span class="predecessor" title="toggle predecessor" ws-onclick="TogglePred">X</span>
                                               </div>
                                       
                                                </div>
                                            </div></div>
                                            <wcomp-splitter vertical value="80" min="30" max="100">
                                                <ws-FixedSplitterHor>
                                                    <PartSizes>32px calc(100% - 32px)</PartSizes>
                                                    <First>
                                                        <div>
                                                            <div class="input-group">
                                                                <span class="input-group-addon">${PlugInName}</span>
                                                            </div>
                                                        </div>
                                                    </First>
                                                    <Second>
                                                        <div style="overflow:auto; display:flex; flex-direction:column">
                                                            <div>
                                                                <h3>Vars:</h3>
                                                                <table style="overflow:auto;width:100%" class="table table-condensed table-striped">
                                                                    <thead>
                                                                        <th style="width: 10%  ">Name</th>
                                                                        <th style="width: 90% ">Value</th>
                                                                    </thead>
                                                                    <tbody ws-hole="Vars">
                                                                    <tr ws-template="NameValueInput" >
                                                                        <td >${Name}:</td>
                                                                        <td>
                                                                        <textarea placeholder="Value..." ws-var="Value" style="resize:vertical; width:100%" spellcheck="false"></textarea>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div>
                                                                <h3>Views:</h3>
                                                                <table style="overflow:auto" class="table table-condensed table-striped" >
                                                                    <thead>
                                                                        <th style="width: 10%  ">Name</th>
                                                                        <th style="width: 90% ">Value</th>
                                                                    </thead>
                                                                    <tbody ws-hole="Views" >
                                                                    <tr ws-template="NameValue" class="">
                                                                        <td>${Name}:</td>
                                                                        <td>${Value}</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div>
                                                                <h3>Docs:</h3>
                                                                <div ws-hole="Docs" style="overflow:auto" ></div>
                                                            </div>
                                                            <div>
                                                                <h3>Queries:</h3>
                                                                <table style="overflow:auto" >
                                                                    <tbody ws-hole="Queries" >
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </Second>
                                                </ws-FixedSplitterHor>
                                        <div style="font-size:small; overflow: hidden; display: flex; flex-direction: column;"  class="absolute" ws-hole="Actions" >
                                            <button ws-template="Action" style="font-size:small" ws-onclick="Click" class="btn" type="button" id="" ws-attr="Attrs" >${Name}</button>
                                        </div>
                                            </wcomp-splitter>
                                        </wcomp-splitter>
                                    </First>
                                    <Second>
                                                <wcomp-tabstrip >
                                                    <div tabname="Properties">
                                                        <div>
                                                            <table style="border-spacing:0px">
                                                                <thead>
                                                                    <th style="width: 30%  ">Name</th>
                                                                    <th style="width: 70% ">Value</th>
                                                                </thead>
                                                                <tbody ws-hole="Properties" ws-children-template="Property">
                                                                    <tr ws-onclick="Select" style="margin-bottom: 2px" class="level  ">
                                                                        <td class="level-item">
                                                                            <div>
                                                                                <input ws-var="Name" type="text" class="form-control" id="" placeholder="Property...">
                                                                            </div>
                                                                        </td>
                                                                        <td class="level-item">
                                                                            <div>
                                                                                <textarea ws-var="Value" class="form-control" id="" placeholder="Value..."></textarea>
                                                                            </div>
                                                                        </td>
                                                                        <td class="level-item">
                                                                            <div style=" cursor: pointer " title="remove">
                                                                                <button ws-onclick="Remove" class="delete is-small">x</button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <button ws-onclick="AddProperty" class="add is-small">add ...</button>
                                                        </div>
                                                    </div>
                                                </wcomp-tabstrip>
                                    </Second>
                                </ws-FixedSplitterVer>
                        </Second>
                    </ws-FixedSplitterHor>
                </div>
                <style style="display: none">
                        .Hidden     { display   : none         }
                        table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }
                        td input.form-control { 
                            padding    : 0px; 
                            font-family: monospace;
                            font-size  :   small;
                            margin-top :   0px;
                            margin-left: -2px;
                            width      : 100%
                        }
                        td select {
                            font-size : smaller;
                            max-width : 8ch;
                        }
                        textarea {
                           resize : vertical;
                        }
                        .tab-content {
                            overflow: hidden
                        }
                        .tab-children {
                            position:relative;
                        }
                        .tab-children>div>* {
                            position:absolute;
                            height: 100%;
                            width:  100%;
                            display: grid;
                        }
                        .relative {
                            position:relative;
                        }
                        .relative>* {
                            position:absolute;
                            height: 100%;
                            width:  100%;
                            display: grid;
                        }
                        table.table-striped    tbody tr:nth-child(even) { background: #EEE  }
                        table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }
                        table.table-striped    tbody input              { background: transparent; border: none}
                        table.table-striped    tbody select             { background: transparent; border: none}
                        table.table-nonstriped tbody tr:nth-child(even) { background: inherit }
                        table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }
                        table.table            tbody tr.hover           { border    : solid thin transparent; } 
                        table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } 
                        table.table            tbody th:hover           { background: gray; cursor: pointer }
                        table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; 
                                                                   border-bottom: solid thin blue     ; } 
                        table.table            tbody tr.selected { background   : #b9eeff             ; }
                        table.table            tbody tr.formula.selected { background: #20f7f7             ; }
                        thead { color: gray }
                        h3 { 
                            color: gray;
                            line-height: 1em;
                        }
                        button       { border: solid thin transparent ; border-radius: 3px; }
                        button:hover { border: solid thin blue }
                        .indenter { position  : absolute; 
                                    top:0px; bottom:0px; left:0px; 
                                    background: white; color:white;
                                    border-right: gray thin dotted;
                                    }
                        body {
                            color      : #333;
                            font-size  : small;
                            font-family: monospace;
                            line-height: 1.2;
                        }
                        .mainTitle {  
                            font-size: 48px;
                            font-weight: 500;
                            color: gray;
                            margin-top: -12px;
                        }
                        .CodeMirror {
                            height: 100%;
                        }
                        
                      
                        body { margin: 0px }     
                             
                        div textarea {
                            font-family     : monospace;
                        }
                        .code-editor-list-tile {
                            white-space     : nowrap; 
                            border-style    : solid none none;
                            border-color    : white;
                            border-width    : 1px;
                            background-color: #D8D8D8;
                            display         : flex;
                        }
                        .code-editor-list-text{
                            padding         : 1px 10px 1px 5px;
                            overflow        : hidden;
                            text-overflow   : ellipsis;
                            white-space     : nowrap;
                            flex            : 1;
                        }
                        
                        .code-editor-list-tile span.node.ErrorMsg {
                            background-color: red
                        }
                        .code-editor-list-tile span.node.expanded::before {
                            content: "-"
                        }
                        .code-editor-list-tile span.node.collapsed::before {
                            content: "+"
                        }
                        .code-editor-list-tile.direct-predecessor {
                            font-weight     : bold;
                            color           : blue;
                        }
                        .code-editor-list-tile.indirect-predecessor {
                            color           : blue;
                        }
                        .code-editor-list-tile.included-predecessor {
                            color           : chocolate;
                        }
                        .code-editor-list-tile.selected {
                            background-color: #77F;
                            color           : white;
                        }
                        .code-editor-list-tile.codeSnippet {
                            text-decoration: underline
                        }
                        .code-editor-list-tile:hover {
                            background      : lightgray;
                        }
                        .code-editor-list-tile.selected:hover {
                            background      : blue;
                        }
                        .code-editor-list-tile>.predecessor {
                            font-weight     : bold;
                            border-style    : inset;
                            border-width    : 1px;
                            text-align      : center;
                            color           : transparent;
                        }
                        .code-editor-list-tile.direct-predecessor>.predecessor {
                            color           : blue;
                        }
                        
                        .CodeMirror { height: 100%; }
                        
                        .node {
                            background-color: white; 
                            width           : 2ch; 
                            color           : #A03; 
                            font-weight     : bold; 
                            text-align      : center;
                            font-family     : arial;
                        }
                        .Warning { text-decoration: underline lightblue } 
                        .Error   { text-decoration: underline red       } 
                        
                    </style>
            </div>
            """
            [< JavaScriptExport >]
            module AppFramework =
                open WebSharper.JavaScript
            
                type PlgElemName = PlgElemName of string with member this.Id = match this with PlgElemName v -> v
                type PlugInName  = PlugInName  of string with member this.Id = match this with PlugInName  v -> v
            
                type PlugInVar   = { 
                    varName      : PlgElemName
                    varVar       : Var<string>
                }
            
                type PlugInView  = {
                    viwName      : PlgElemName
                    viwView      : View<string>
                }
            
                type DocFunction =
                | JustDoc of                                                    Doc
                | FunDoc0 of (                                        unit   -> Doc)
                | FunDoc1 of (                                        string -> Doc) * string                                     
                | FunDoc2 of (                              string -> string -> Doc) * string * string                            
                | FunDoc3 of (                    string -> string -> string -> Doc) * string * string * string                   
                | FunDoc4 of (          string -> string -> string -> string -> Doc) * string * string * string * string          
                | FunDoc5 of (string -> string -> string -> string -> string -> Doc) * string * string * string * string * string  
            
                type PlugInDoc = {
                    docName        : PlgElemName
                    docDoc         : Lazy<DocFunction>
                }
            
                type ActFunction =
                | FunAct0 of (                                         unit -> unit)
                | FunAct1 of (                                          obj -> unit) * string
                | FunAct2 of (                                   obj -> obj -> unit) * string * string
            
                type PlugInAction = {
                    actName        : PlgElemName
                    actFunction    : ActFunction
                    actEnabled     : View<bool>
                }
            
                type PlugInQuery = {
                    qryName        : PlgElemName
                    qryFunction    : obj -> obj
                }
            
                type PlugIn = {
                    plgName        : PlugInName
                    plgVars        : ListModel<PlgElemName, PlugInVar   >
                    plgViews       : ListModel<PlgElemName, PlugInView  >
                    plgDocs        : ListModel<PlgElemName, PlugInDoc   >
                    plgActions     : ListModel<PlgElemName, PlugInAction>
                    plgQueries     : ListModel<PlgElemName, PlugInQuery >
                }
             
                let plugIns = ListModel (fun plg -> plg.plgName)
            
                let mainDocV = Var.Create "AppFramework.AppFwkClient"
                //let titleV   = Var.Create "AppFramework.mainDocV"
            
                open WebSharper.UI.Templating
            
                let [< Literal >] TemplateFileName =  @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\website\AppFramework.html"
                //let [< Literal >] TemplateFileName =  @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\FSharpStation\website\Templates.html"
            
                type AppFwkTemplate = Templating.Template<TemplateFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
            
                let defaultPlugIn() = {
                        plgName    = PlugInName ""
                        plgVars    = ListModel (fun (var:PlugInVar   ) -> var.varName)
                        plgViews   = ListModel (fun (viw:PlugInView  ) -> viw.viwName)
                        plgDocs    = ListModel (fun (doc:PlugInDoc   ) -> doc.docName)
                        plgActions = ListModel (fun (act:PlugInAction) -> act.actName)
                        plgQueries = ListModel (fun (qry:PlugInQuery ) -> qry.qryName)
                    }
            
                let splitName (lytNm:PlugInName) : _ -> PlugInName * PlgElemName = String.splitByChar '.' >>  (fun a -> if a.Length = 1 then (lytNm, a.[0].Trim() |> PlgElemName ) else (a.[0].Trim() |> PlugInName, a.[1].Trim() |> PlgElemName) )
            
                let selectionPlugInO = Var.Create <| Some (PlugInName "AppFramework")
                let currentPlugInW   = selectionPlugInO.View |>  View.Bind(function Some k -> plugIns.TryFindByKeyAsView k | None -> View.Const (Some <| defaultPlugIn())) |> View.Map (Option.defaultWith defaultPlugIn)
                let currentPlugInV   = Var.Make currentPlugInW plugIns.Add
            
                let renderPlugIns() = plugIns.DocLens(fun name plug -> 
                    AppFwkTemplate.Tile()
                        .Name(     name.Id                                                   )
                        .Select(   fun _ -> selectionPlugInO.Set <| Some name                )
                        .Selected( if selectionPlugInO.V = Some name then "selected" else "" )
                        .Doc() 
                )
            
                let renderVars() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgVars |> Seq.map (fun v -> plg, v))
                    |> Doc.BindSeqCachedBy (fun (plg, var) -> plg.plgName, var.varName) (fun (plg, var) -> 
                        AppFwkTemplate.NameValueInput()
                            .Name(    var.varName.Id ) 
                            .Value(   var.varVar     )
                            .Doc() 
                    ) 
            
                let renderViews() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgViews |> Seq.map (fun v -> plg, v))
                    |> Doc.BindSeqCachedBy (fun (plg, viw) -> plg.plgName, viw.viwName) (fun (plg, viw) -> 
                        AppFwkTemplate.NameValue()
                            .Name(    viw.viwName.Id )
                            .Value(   viw.viwView    )
                            .Doc() 
                    ) 
            
                let docParms (doc:PlugInDoc) = 
                    match doc.docDoc.Value with
                    | JustDoc _                          -> ""
                    | FunDoc0 __                         -> "()"
                    | FunDoc1(_, p1                    ) -> [ p1                ] |> String.concat ", " |> sprintf "(%s)"
                    | FunDoc2(_, p1 , p2               ) -> [ p1; p2            ] |> String.concat ", " |> sprintf "(%s)"
                    | FunDoc3(_, p1 , p2 , p3          ) -> [ p1; p2; p3        ] |> String.concat ", " |> sprintf "(%s)"
                    | FunDoc4(_, p1 , p2 , p3 , p4     ) -> [ p1; p2; p3; p4    ] |> String.concat ", " |> sprintf "(%s)"
                    | FunDoc5(_, p1 , p2 , p3 , p4 , p5) -> [ p1; p2; p3; p4; p5] |> String.concat ", " |> sprintf "(%s)"
            
                let renderDocs() =
                    currentPlugInW
                    |> View.Bind (fun plg -> plg.plgDocs.View |> View.Map (Seq.map (fun v -> plg, v)) )
                    |> Doc.BindSeqCachedBy (fun (plg, doc) -> plg.plgName, doc.docName) (fun (plg, doc) -> 
                        AppFwkTemplate.Tile()
                            .Name(     doc.docName.Id +  docParms doc)
                            .Select(   fun _ -> currentPlugInW |> View.Get (fun plg ->  mainDocV.Set <| plg.plgName.Id + "." + doc.docName.Id ) )
                            .Doc() 
                    ) 
            
                let callFunction p1 p2 actF =
                    match actF with
                    | FunAct0(f      ) -> f    ()
                    | FunAct1(f, _   ) -> f    p2
                    | FunAct2(f, _, _) -> f p1 p2
            
                let renderActions() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgActions |> Seq.map (fun v -> plg, v))
                    |> Doc.BindSeqCachedBy (fun (plg, act) -> plg.plgName, act.actName) (fun (plg, act) -> 
                        let parms = match act.actFunction with
                                    | FunAct0(_        ) -> ""
                                    | FunAct1(_, p1    ) -> [ p1      ] |> String.concat ", " |> sprintf "(%s)"
                                    | FunAct2(_, p1, p2) -> [ p1 ; p2 ] |> String.concat ", " |> sprintf "(%s)"
                        AppFwkTemplate.Action() 
                            .Name(     act.actName.Id + parms                             )
                            .Click(    fun ev -> act.actFunction |> callFunction () ev )
                            .Attrs(    Attr.DynamicPred "disabled" (V (not act.actEnabled.V)) (View.Const "") )
                            .Doc()            
                    ) 
            
                let renderQueries() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgQueries |> Seq.map (fun v -> plg, v))
                    |> Doc.BindSeqCachedBy (fun (plg, qry) -> plg.plgName, qry.qryName) (fun (plg, qry) -> 
                        AppFwkTemplate.Tile()
                            .Name(     qry.qryName.Id  )
                            .Select(   fun _ -> () |> box |> qry.qryFunction |> unbox |> JS.Alert )
                            .Doc() 
                    ) 
            
                let AppFwkClient = 
                    lazy
                        AppFwkTemplate.AppFwkClient()
                            .PlugIns(     renderPlugIns()           )
                            .PlugInName(  currentPlugInW.V.plgName.Id )
                            .Vars(        renderVars()              )
                            .Views(       renderViews()             ) 
                            .Docs(        renderDocs()              )
                            .Actions(     renderActions()           )
                            .Queries(     renderQueries()           )
                            .Doc()
            
                let getActualDoc doc =
                    match doc.docDoc.Value with
                    | JustDoc jdoc -> jdoc
                    | FunDoc0 fdoc -> fdoc()
                    | _ -> Html.div [] [ Html.text <| sprintf "Doc with parameters not allowed here: %A" doc ]
            
                let getMainClientDoc() =
                    plugIns.View
                    |> View.Map2(fun (mainDoc:string) plgs -> 
                        plgs |> Seq.tryPick(fun plg ->
                            plg.plgDocs 
                            |> Seq.tryFind(fun doc -> plg.plgName.Id = mainDoc || plg.plgName.Id + "." + doc.docName.Id = mainDoc) 
                            |> Option.map getActualDoc
                        )
                        |> Option.defaultValue AppFwkClient.Value
                    ) mainDocV.View
                    |> Doc.EmbedView
            
                let mainDoc() = 
                        AppFwkTemplate.AppFramework()
                            .MainDoc(     mainDocV.View                                     )
                            .GoClient(    fun _ -> mainDocV.Set "AppFramework.AppFwkClient" )
                            .MainClient(  getMainClientDoc()                                )
                            .Doc()
            
                open WebComponent
            
                let horizontal : WcSplitter.Layout = fun partSizes afterRender afterRenderSp mouseDown gap ->
                    AppFwkTemplate.WCompSplitterHor()
                        .PartSizes(    partSizes)
                        .AfterRender(  afterRender)
                        .AfterRenderSp(afterRenderSp)
                        .MouseDown(    fun te -> mouseDown te.Event)
                        .Gap(          gap)
                        .Doc()
                let vertical   : WcSplitter.Layout = fun partSizes afterRender afterRenderSp mouseDown gap ->
                    AppFwkTemplate.WCompSplitterVer()
                        .PartSizes(    partSizes)
                        .AfterRender(  afterRender)
                        .AfterRenderSp(afterRenderSp)
                        .MouseDown(    fun te -> mouseDown te.Event)
                        .Gap(          gap)
                        .Doc()
            
                let newVar  name var = { varName = name ; varVar      = var                                 }
                let newViw  name viw = { viwName = name ; viwView     = viw                                 }
                let newDoc  name doc = { docName = name ; docDoc      = lazy(JustDoc (doc:Lazy<Doc>).Value) }
                let newDoc0 name f   = { docName = name ; docDoc      = lazy(FunDoc0 f                    ) }
                let newQry  name qry = { qryName = name ; qryFunction = qry          }
                let newAct  name fnc = {
                    actName        = name
                    actFunction    = FunAct0 fnc
                    actEnabled     = View.Const true
                }
            
                let newActF name fncF = {
                    actName        = name
                    actFunction    = fncF
                    actEnabled     = View.Const true
                }
                
                let newDocL name docL = { docName = name ; docDoc =      docL }
                let newDocF name docF = { docName = name ; docDoc = lazy docF }
            
                type PlugInBuilder() =
                    member __.Zero() = { defaultPlugIn() with plgName    = PlugInName "Main" }
                    member this.Yield(()) = this.Zero()
                    member __.For(coll:seq<_>, func) =
                        let ie = coll.GetEnumerator()
                        while ie.MoveNext() do
                            func ie.Current
                    [<CustomOperation("plgName"   )>] member __.Name  ( plg:PlugIn, name:string               ) = { plg with plgName    =    PlugInName name }
                    [<CustomOperation("plgVar"    )>] member __.AddVar( plg:PlugIn, name:string, var          ) = plg.plgVars   .Add(newVar  (PlgElemName name)          var            )  ; plg
                    [<CustomOperation("plgDoc"    )>] member __.AddDoc( plg:PlugIn, name:string, doc          ) = plg.plgDocs   .Add(newDoc  (PlgElemName name)          doc            )  ; plg
                    [<CustomOperation("plgDoc0"   )>] member __.AddDoc0(plg:PlugIn, name:string, doc          ) = plg.plgDocs   .Add(newDoc0 (PlgElemName name)          doc            )  ; plg
                    [<CustomOperation("plgDoc1"   )>] member __.AddDoc1(plg:PlugIn, name:string, doc, p1      ) = plg.plgDocs   .Add(newDocF (PlgElemName name) (FunDoc1(doc,p1       )))  ; plg
                    [<CustomOperation("plgDoc2"   )>] member __.AddDoc2(plg:PlugIn, name:string, doc, p1, p2  ) = plg.plgDocs   .Add(newDocF (PlgElemName name) (FunDoc2(doc,p1,p2    )))  ; plg
                    [<CustomOperation("plgDoc3"   )>] member __.AddDoc3(plg:PlugIn, name:string, doc,a,b,c    ) = plg.plgDocs   .Add(newDocF (PlgElemName name) (FunDoc3(doc,a,b,c    )))  ; plg
                    [<CustomOperation("plgDoc4"   )>] member __.AddDoc4(plg:PlugIn, name:string, doc,a,b,c,d  ) = plg.plgDocs   .Add(newDocF (PlgElemName name) (FunDoc4(doc,a,b,c,d  )))  ; plg
                    [<CustomOperation("plgDoc5"   )>] member __.AddDoc5(plg:PlugIn, name:string, doc,a,b,c,d,e) = plg.plgDocs   .Add(newDocF (PlgElemName name) (FunDoc5(doc,a,b,c,d,e)))  ; plg
                    //[<CustomOperation("plgDocDyn" )>] member __.AddDocF(plg:PlugIn, name:string, docF)  = plg.plgDocs   .Add(newDoc name (lazy LayoutEngine.turnToView docF) ) ; plg
                    [<CustomOperation("plgQuery"  )>] member __.AddQry( plg:PlugIn, name:string, qry          ) = plg.plgQueries.Add(newQry  (PlgElemName name) qry) ; plg
                    [<CustomOperation("plgAct"    )>] member __.AddAct( plg:PlugIn, name:string, act          ) = plg.plgActions.Add(newAct  (PlgElemName name) act) ; plg
                    [<CustomOperation("plgAct1"   )>] member __.AddAct1(plg:PlugIn, name:string, act, p1      ) = plg.plgActions.Add(newActF (PlgElemName name) (FunAct1(act,p1   )) ) ; plg
                    [<CustomOperation("plgAct2"   )>] member __.AddAct2(plg:PlugIn, name:string, act, p1, p2  ) = plg.plgActions.Add(newActF (PlgElemName name) (FunAct2(act,p1,p2)) ) ; plg
                    [<CustomOperation("plgActOpt" )>] member __.AddActO(plg:PlugIn, name:string,         actO ) = 
                                                        match actO with 
                                                        | Some act -> plg.plgActions.Add(newAct (PlgElemName name) act)
                                                        | None     -> ()
                                                        plg
                    //[<CustomOperation("mainDoc")>] member __.InsDoc(plg:PlugIn, name:string, doc) = plg.plgDocs.    = [| newDoc (PlgElemName name) doc |] |> Array.append <| plg.plgDocs    }
                    [<CustomOperation("plgView"   )>] member __.AddViw( plg:PlugIn, name:string, viw )  = plg.plgViews.Add(newViw (PlgElemName name) viw) ; plg
                    [<CustomOperation("plgMerge"  )>] member __.Merge ( plg:PlugIn, prefix:string, p2:PlugIn) = 
                                                        plg.plgVars   .AppendMany(p2.plgVars    |> Seq.map (fun v -> { v with varName = PlgElemName (prefix + v.varName.Id) } ) ) 
                                                        plg.plgViews  .AppendMany(p2.plgViews   |> Seq.map (fun w -> { w with viwName = PlgElemName (prefix + w.viwName.Id) } ) ) 
                                                        plg.plgDocs   .AppendMany(p2.plgDocs    |> Seq.map (fun d -> { d with docName = PlgElemName (prefix + d.docName.Id) } ) ) 
                                                        plg.plgActions.AppendMany(p2.plgActions |> Seq.map (fun a -> { a with actName = PlgElemName (prefix + a.actName.Id) } ) ) 
                                                        plg.plgQueries.AppendMany(p2.plgQueries |> Seq.map (fun q -> { q with qryName = PlgElemName (prefix + q.qryName.Id) } ) ) 
                                                        plg
            
                let plugin = PlugInBuilder()
            
            
                let tryGetPlugInW plgName = plugIns.TryFindByKeyAsView plgName
            
                let tryGetVarW plgName varName = tryGetPlugInW plgName |> View.Bind (function Some plg -> plg.plgVars   .TryFindByKeyAsView varName |_-> View.Const None ) //|> View.consistent
                let tryGetViwW plgName viwName = tryGetPlugInW plgName |> View.Bind (function Some plg -> plg.plgViews  .TryFindByKeyAsView viwName |_-> View.Const None ) //|> View.consistent
                let tryGetActW plgName actName = tryGetPlugInW plgName |> View.Bind (function Some plg -> plg.plgActions.TryFindByKeyAsView actName |_-> View.Const None )
                let tryGetQryW plgName qryName = tryGetPlugInW plgName |> View.Bind (function Some plg -> plg.plgQueries.TryFindByKeyAsView qryName |_-> View.Const None )
                let tryGetDocW plgName docName = tryGetPlugInW plgName |> View.Bind (function Some plg -> plg.plgDocs   .TryFindByKeyAsView docName |_-> View.Const None )
                let tryGetVoVW plgName varName = 
                    tryGetVarW plgName varName
                    |> View.Bind(function
                        | Some var -> Some var.varVar |> View.Const
                        | None -> 
                            tryGetViwW plgName varName
                            |> View.Map(function
                            | Some viw -> Var.Make viw.viwView ignore |> Some
                            | None -> None
                    ))
                let tryGetWoWW plgName viwName =
                    tryGetViwW plgName viwName
                    |> View.Bind(function
                        | Some viw -> viw.viwView |> View.Map Some
                        | None -> 
                            tryGetVarW plgName viwName
                            |> View.Bind(function
                            | Some var -> var.varVar.View |> View.Map Some
                            | None -> None |> View.Const
                    ))
            
                let tryGetPlugIn plgName = plugIns.TryFindByKey plgName
            
                let tryGetVar plgName varName = tryGetPlugIn plgName |> Option.bind (fun plg -> plg.plgVars   .TryFindByKey varName)
                let tryGetViw plgName viwName = tryGetPlugIn plgName |> Option.bind (fun plg -> plg.plgViews  .TryFindByKey viwName)
                let tryGetAct plgName actName = tryGetPlugIn plgName |> Option.bind (fun plg -> plg.plgActions.TryFindByKey actName)
                let tryGetQry plgName qryName = tryGetPlugIn plgName |> Option.bind (fun plg -> plg.plgQueries.TryFindByKey qryName)
                let tryGetDoc plgName docName = tryGetPlugIn plgName |> Option.bind (fun plg -> plg.plgDocs   .TryFindByKey docName)
                let tryGetVoV plgName varName = 
                    tryGetVar plgName varName 
                    |> Option.map (fun var -> Some var.varVar)
                    |> Option.defaultWith (fun () -> 
                        tryGetViw plgName varName 
                        |> Option.map (fun viw -> Var.Make viw.viwView ignore)
                    )
                let tryGetWoW plgName viwName = 
                    tryGetViw plgName viwName 
                    |> Option.map (fun viw -> Some viw.viwView)
                    |> Option.defaultWith (fun () -> 
                        tryGetVar plgName viwName 
                        |> Option.map (fun var -> var.varVar.View )
                    )
            
                type TextData = 
                | TDText  of string
                | TDAct   of PlugInAction
            
                let rec getOneTextData lytNm name bef aft =
                    let plg, n = splitName lytNm name
                    tryGetActW plg n
                    |> View.Bind(function
                    | Some act -> TDAct act |> View.Const
                    | None     ->
                    tryGetWoWW plg n
                    |> View.Bind(function
                        | Some txt ->
                            getTextData lytNm aft
                            |> View.Bind (function
                                | TDText  b    -> View.Const <| (TDText  <|     bef + txt + b                             )
                                | TDAct   act  -> View.Const <| (TDText  <| sprintf "Unexpected Action @{%s}" (act.actName.Id) )
                            )
                        | None                 -> View.Const <| (TDText  <| sprintf "%s @{Missing %s}%s" bef name aft     )  
                        )
                    )
            
                and getTextData lytNm (txt:string) =
                    txt
                    |> String.delimitedO "@{" "}"
                    |> Option.map(fun (bef, name, aft) -> getOneTextData lytNm name bef aft )
                    |> Option.defaultWith (fun () -> TDText  txt |> View.Const)
            
                let getAttrs lytNm (attrs: string) = [
                    yield!  attrs
                            |> String.splitByChar ';'
                            |> Seq.map(String.splitByChar '=')
                            |> Seq.choose(
                                function 
                                | [| name ; value |] when name.Trim() <> "" && value.Trim() <> "" ->
                                        value.Trim() 
                                        |> getTextData lytNm
                                        |> Attr.DynamicCustom (fun el -> function
                                            | TDText  v   -> try el.SetAttribute(name.Trim(), v.Trim())                                                                 with e -> printfn "%A" e
                                            | TDAct   act -> try el.AddEventListener(name.Trim(), (fun (ev:Dom.Event) -> act.actFunction |> callFunction el ev), false) with e -> printfn "%A" e
                                        )
                                        |> Some
                                |_      -> None )
                    yield!  attrs
                            |> String.splitByChar ';'
                            |> Seq.map(String.splitByChar ':')
                            |> Seq.choose(
                                function 
                                | [| name ; value |] when name.Trim() <> "" && value.Trim() <> "" -> 
                                        value.Trim() 
                                        |> getTextData lytNm
                                        |> View.Map(function
                                            | TDText  v   -> v.Trim()
                                            | TDAct   act -> sprintf "@{%s}" (act.actName.Id)
                                        )
                                        |> Attr.DynamicStyle (name.Trim())
                                        |> Some
                                |_      -> None )
                ]
            
                type  Fun<'P, 'R> = { f : Val<'P -> 'R> ; p : Val<'P> }
                and   Val<'P    > = VView of View<'P> | VConst of 'P
                    with
                    //[<Inline>] static member ( <* )(vf:Val<'a->'b> , a :    'a ) = VConst a
                    [<Inline>] static member ( <* )(vf:Val<'a->'b> , aV:Var<'a>) = VView  aV.View
            
                type P<'T> = { r:Depend.Depend<'T> }
            
                type PFn<'P, 'R> = P<Fun<'P, 'R>>
                type PVl<'P    > = P<Val<'P    >>
            
                open Depend.Operators
            
                let bindWrap       f  pv       : P<'b> = { r = pv   >>= fun v -> (f v).r }
                let unwrapBindWrap f (pv:P<_>) : P<'b> = { r = pv.r |>> fun v ->  f v    }
            
                let add1 a = a + 1
                let a11V = Var.Create 11
            
                let mainX = VConst add1 <* a11V
            
                let [<Inline>] callF f = 
                    match f with
                    | { f = VConst f  ; p = VConst p  } -> VConst (                       f              p )
                    | { f = VConst f  ; p = VView  pV } -> VView  (View.Apply (View.Const f)             pV)
                    | { f = VView  fV ; p = VView  pV } -> VView  (View.Apply             fV             pV)
                    | { f = VView  fV ; p = VConst p  } -> VView  (View.Apply             fV (View.Const p))
            
            
                let baseView        = mainDocV.View
                let makeAViewDoc  f = baseView |> Doc.BindView(fun _ -> f())
                let makeAViewDocL f = lazy makeAViewDoc f
                let makeAViewDoc0 f = f // fun () -> makeAViewDoc f
            
                let [<Inline>] callDoc f =
                    makeAViewDoc(fun _ -> 
                        match callF f with
                        | VConst d  -> d
                        | VView  dW -> Doc.BindView id dW
                    )
            
                let [<Inline>] callAtt f : Attr =
                    match callF f with
                    | VConst a  -> a
                    | VView  aW -> failwithf "View<Attr> not implemented"
            
                let [<Inline>] ff f p = { f = f       ; p = p }
                let [<Inline>] fc c p = { f = callF c ; p = p }
            
                let [<Inline>] pff pf p = { r = pf.r |>> fun f -> ff f p }
                let [<Inline>] pfc pc p = { r = pc.r |>> fun c -> fc c p }
            
                module Val =
            
                    let map f = function
                    | VConst p  -> VConst (         f p )
                    | VView  pv -> VView  (View.Map f pv)
            
                    let rtn = VConst
                    let apply (fv:Val<'a->'b>) (vv:Val<'a>) : Val<'b> = 
                        match fv, vv with
                        | VConst f  , VConst p  -> VConst (                       f              p )
                        | VConst f  , VView  pV -> VView  (View.Apply (View.Const f)             pV)
                        | VView  fV , VView  pV -> VView  (View.Apply             fV             pV)
                        | VView  fV , VConst p  -> VView  (View.Apply             fV (View.Const p))
            
                    let (<*>)                        =  apply
                    let       traverseListApp f list =  let cons head tail = head :: tail
                                                        let folder head tail = rtn cons <*> f head <*> tail
                                                        List.foldBack folder list (rtn [])
                    let inline sequenceListApp  list =  traverseListApp id list
            
            
                    let toView = function
                    | VConst p  -> View.Const p
                    | VView  pv ->            pv
            
                    let addDoc d (docs:Val<seq<Doc>>) =
                        match docs with
                        | VConst ds  -> VConst (Seq.append ds [ d ] )
                        | VView  dsW -> VConst (seq [ Doc.BindView Doc.Concat dsW ; d ])
            
                    let addAtt a (atts:Val<seq<Attr>>) =
                        match atts with
                        | VConst ats  -> VConst (Seq.append ats [ a ] )
                        | VView  atsW -> failwithf "addAtt for VView not implemented"// VConst (seq [ Doc.BindView Doc.Concat atsW ; a ])
            
                    let textDoc = function
                    | VConst txt  -> Html.text     txt
                    | VView  txtW -> Html.textView txtW
            
                    let textAtt : Val<string> -> Attr = fun _ -> failwithf "textAtt not implemented"
            
                let choiceToString   = function Choice1Of2 v -> v | Choice2Of2 r -> sprintf "@{%A}" r
                let valToStyle atn = function
                | VConst s -> Attr.Style  atn s
                | VView  w -> Attr.DynamicStyle atn w
            
                let valToAttr atn = function
                | VConst s -> Attr.Create  atn s
                | VView  w -> Attr.Dynamic atn w
            
                type AAttr = 
                | AStyle of string * string
                | AAttr  of string * string
                | AAttrX of string * string
                | AEmpty
            
                module Extract0 =
            
                    type TextType =
                    | TSimple    of string
                    | TReference of string
            
                    let getDocFromReference         ref = sprintf "getDocFromReference not implemented: @{%s}"         ref |> Html.text
                    let getTextActViewFromReference ref = sprintf "getTextActViewFromReference not implemented: @{%s}" ref |> Choice1Of2 |> View.Const : View<Choice<string, PlugInAction>>
            
                    let rec getOneTextData(bef, name, aft) =
                        TReference name ::  match aft with
                                            | ""  -> []
                                            | aft -> getTextData aft
                        |> 
                        match bef with
                        | ""  -> id
                        | bef -> fun ls -> TSimple bef :: ls
                    and getTextData (txt:string) =
                        txt
                        |> String.delimitedO "@{" "}"
                        |> Option.map getOneTextData
                        |> Option.defaultWith (fun () -> [ TSimple txt ])
            
                    let getDocFromReferenceD         = Depend.dependByName "getDocFromReference"         getDocFromReference         id
                    let getTextActViewFromReferenceD = Depend.dependByName "getTextActViewFromReference" getTextActViewFromReference id
            
                    let getDocFromTextTypesD = Depend.depend {
                        let! getDoc = getDocFromReferenceD
                        return
                            List.map (function
                                | TSimple    t -> Html.text   t
                                | TReference r -> getDoc r
                            ) 
                            >> Doc.Concat
                    }
            
                    let extractDocD = Depend.depend {
                        let! getDocFromTextTypes = getDocFromTextTypesD
                        return getTextData >> getDocFromTextTypes
                    }
            
                    let getTextValFromSeqD = Depend.depend {
                        let! getTextActView = getTextActViewFromReferenceD
                        return 
                            Val.traverseListApp (function
                                | TSimple    v -> VConst     v
                                | TReference r -> getTextActView r |> View.Map (function Choice1Of2 s -> s | Choice2Of2 _ -> sprintf "@{%s}" r) |> VView
                            )
                            >> Val.apply (VConst (String.concat ""))
                    }
            
                    let getTextValD = getTextData >*> getTextValFromSeqD
            
                    let extractAtsD = Depend.depend {
                        let! getTextVal     = getTextValD
                        let! getTextActView = getTextActViewFromReferenceD
                        return fun txt ->
                            let parseAttr (t:string) =
                                match t.Split ':' with
                                | [| atn ; sty |] -> AStyle(atn, sty)
                                | _ ->
                                match t.Split '=' |> Array.map (fun t -> t.Trim()) with
                                | [| atn; atv |] -> match getTextData atv with
                                                    | [ TReference r ] -> AAttrX(atn, r  )
                                                    |_                 -> AAttr (atn, atv)
                                | [| at       |] -> AAttr(at, "")
                                |_-> AEmpty
                            let splitAttrs (txt:string) =
                                txt.Split ';'
                                |> Seq.map    (fun t -> t.Trim())
                                |> Seq.filter ((<>) "")
                            let addedListeners el : (string * (Dom.Event -> unit)) [] = el?addedListeners |> fun v -> if isUndefined v then [||] else v
                            let setCustomAttr atn (el:Dom.Element) = function
                                | Choice1Of2 s   -> try el.SetAttribute(atn, (s:string).Trim()) with e -> printfn "%A" e
                                | Choice2Of2 act ->
                                    let listener (ev:Dom.Event) = (act:PlugInAction).actFunction |> callFunction el ev
                                    let same, others = addedListeners el |> Array.partition (fst >> (=) atn)
                                    for (_,f) in same do
                                        el.RemoveEventListener(atn, f)
                                    el.AddEventListener(   atn, listener, false)
                                    el?addedListeners <- Array.append others [| atn, listener |]
                            let viewAttr atn = Attr.DynamicCustom (setCustomAttr atn)
                            let constAttr = function
                                | AStyle(n, v) -> getTextVal     v |> valToStyle n
                                | AAttr (n, v) -> getTextVal     v |> valToAttr  n
                                | AAttrX(n, v) -> getTextActView v |> viewAttr   n
                                | AEmpty       -> Attr.Empty
                            let viewAttrs = 
                                Attr.DynamicCustom(fun el sq ->
                                    let styles = sq |> Seq.choose (function AStyle(n,v) -> Some (n + ":" + v) |_-> None)
                                    let atts = [|
                                        if Seq.isEmpty styles |> not then
                                            yield ("style", String.concat ";" styles)
                                        yield! sq
                                            |> Seq.choose (function
                                                | AStyle _     -> None
                                                | AAttr (n, v) -> Some(n, v)
                                                | AAttrX(n, v) -> Some(n, v)
                                                | AEmpty       -> None
                                            )
                                    |]
                                    let attsNow = seq [ for i in [0..el.Attributes.Length-1] -> el.Attributes.[i].Name, el.Attributes.[i].Value ]
                                    let names   = Seq.map fst >> Set
                                    for nm in names attsNow - names atts do 
                                        try el.Attributes.RemoveNamedItem nm |> ignore            with e -> printfn "%A" e
                                    for (n,v) in Set atts - Set attsNow do
                                        try el.SetAttribute(n, v)                                 with e -> printfn "%A" e
                                    for (n,l) in addedListeners el do 
                                        try el.RemoveEventListener(n, (unbox l : System.Action) ) with e -> printfn "%A" e
                                    for (n,v) in sq |> Seq.choose (function AAttrX(n, v) -> Some(n, v) |_-> None) do
                                        getTextActView v |> View.Get (setCustomAttr n el)
                                )
                            let extract (txt:string) =
                                splitAttrs txt
                                |> Seq.toArray
                                |> function
                                    | [| v |] ->    
                                        match getTextVal v with
                                        | VConst v -> parseAttr v |> constAttr
                                        | VView  w -> w |> View.Map (splitAttrs >> Seq.map parseAttr) |> viewAttrs
                                        |> Seq.singleton
                                    | vs -> vs |> Seq.map (parseAttr >> constAttr) 
                            extract txt
                    }
            
                    let extractTextD = Depend.depend {
                        let! getTextVal = getTextValD
                        return getTextVal >> Val.toView 
                    }
            
                let currentPlugInNameDef : PlugInName = PlugInName "NewLYx"
                let currentPlugInNameD                = Depend.dependByName "currentPlugInName" currentPlugInNameDef id
            
                let getDocwD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    return fun r -> 
                        let pName, oName = splitName currentPlugInName r
                        tryGetDocW pName oName
                        |> Doc.BindView (fun docO -> 
                            docO
                            |> Option.map getActualDoc
                            |> Option.defaultWith (fun () ->
                                tryGetWoWW pName oName
                                |> View.Map (Option.defaultWith (fun () -> sprintf "Reference not found @{%s}" r))
                                |> Doc.TextView
                            )
                        )
                }
            
                let getDocD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    return fun r -> 
                        let pName, oName = splitName currentPlugInName r
                        tryGetDoc pName oName
                        |> Option.map getActualDoc
                        |> Option.defaultWith (fun () ->
                            tryGetWoW pName oName
                            |> Option.defaultWith (fun () -> sprintf "Reference not found @{%s}" r |> View.Const)
                            |> Doc.TextView
                        )
                }
            
                let getTextActViewD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    return fun r ->
                        let pName, oName = splitName currentPlugInName r
                        tryGetActW pName oName
                        |> View.Bind(function
                            | Some act -> View.Const <| Choice2Of2 act
                            | None     ->
                            tryGetWoWW pName oName
                            |> View.Map (Option.defaultWith (fun () -> sprintf "Text Reference not found @{%s}" r))
                            |> View.Map Choice1Of2
                        )
                }
            
                let errDoc  txt = Html.div [] [ Html.text txt ]
                let errDocf fmt = Printf.ksprintf errDoc fmt
            
                let run (pin:PlugInName) d =
                    depend {
                        let! getDoc            = getDocwD
                        let! getTextActView    = getTextActViewD
                        let! currentPlugInName = currentPlugInNameD
                        return 
                            d
                            |> Depend.resolver [
                                "getDocFromReference"        , getDoc            :> obj
                                "getTextActViewFromReference", getTextActView    :> obj
                                "currentPlugInName"          , currentPlugInName :> obj
                            ]
                    } |> Depend.resolver [ "currentPlugInName", pin ]
            
                let extractTextD    = Extract0.extractTextD
                let extractDocD     = Extract0.extractDocD
                let extractAtsD     = Extract0.extractAtsD
                let extractAttD     = depend { 
                    let! extractAts = extractAtsD
                    return fun p -> extractAts p |> Attr.Concat 
                }
            
            
                let defPlugInName = PlugInName "AppFramework"
                let runDef d = run defPlugInName d
            
                let getParmRef var =
                    var
                    |> String.delimitedO "@{" "}"
                    |> Option.map (fun (a,b,c) -> b)
                    |> Option.defaultValue var
                    |> splitName defPlugInName
            
                let depWithExtracts f =
                    Depend.depend {
                        let! extractAts  = extractAtsD
                        let! extractDoc  = extractDocD
                        let! extractText = extractTextD
                        return f(extractAts, extractDoc, extractText)
                    } |> runDef
            
                let docWithVar f var =
                    getParmRef var
                    ||> tryGetVoVW
                    |> Doc.BindView (
                        Option.map f
                        >> Option.defaultWith(fun () ->  sprintf "Var not found %s" var |> errDoc )
                    )
            
                let inputFile attrs labelName actName =
                    splitName defPlugInName actName
                    ||> tryGetAct
                    |> Option.map(fun act -> 
                        Html.div (getAttrs defPlugInName attrs) [
                            Html.div              [ attr.``class`` "input-group"       ] [
                                Html.span         [ attr.``class`` "input-group-btn"   ] [ 
                                    Html.label    [ attr.``class`` "btn"               ] [ 
                                        Html.text labelName
                                        Html.input[ attr.``class`` "form-control" 
                                                    attr.``type`` "file" 
                                                    Attr.Style "display" "none" 
                                                    Html.on.click (fun el ev -> el?value <- "")
                                                    Html.on.change(fun el ev -> act.actFunction |> callFunction el ev )
                                                    ] []
                                    ]
                                ]
                                //(if doc <> "" then singleDoc lytNm [ UnQuoted doc ] else Doc.Empty)
                            ]
                        ]
                    ) |> Option.defaultWith(fun () ->  sprintf "Action not found %s" actName |> errDoc )
            
                let inputLabel =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) attrs labelName ->
                        docWithVar (fun var -> 
                            Html.div (extractAts attrs) [
                                Html.div      [ attr.``class`` "input-group"       ] [
                                    Html.span [ attr.``class`` "input-group-addon" ] [ extractDoc labelName ]
                                    Doc.Input [ attr.``class`` "form-control"      ]   var
                                ]
                            ]
                        )
            
                let input =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) attrs ->
                        docWithVar (Doc.Input <| extractAts attrs )
            
                let textArea =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) attrs ->
                        docWithVar (Doc.InputArea <| extractAts attrs)
            
                let htmlDoc =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) html ->
                        extractText html
                        |> Doc.BindView Doc.Verbatim
            
                //let docReference =
                //    let mutable lastRun = Date.Now()
                //    let refresh () =
                //        if Date.Now() - lastRun > 1000 then
                //            mainDocV.Set mainDocV.Value
                //            lastRun <- Date.Now()
                //    depWithExtracts <| fun (extractAts, extractDoc, extractText) docName ->
                //        extractText docName
                //        |> View.Map  (splitName defPlugInName)
                //        |> View.Bind ( __ (||>) tryGetDocW   )
                //        |> Doc.BindView (function
                //            | Some { docDoc = LazyDoc d} -> refresh() ; d.Value
                //            | Some { docDoc = FunDoc0 f} -> refresh() ; f()
                //            | Some d -> errDocf "Doc parameters not resolved: %A" d
                //            | None   -> errDocf "Doc not found: %s" docName
                //        )
            
                let inline (|Lazy|) (l:Lazy<_>) = l.Value
            
                let docReference =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) docName ->
                        extractText docName
                        |> View.Map  (splitName defPlugInName)
                        |> View.Bind ( __ (||>) tryGetDocW   )
                        |> Doc.BindView (function
                            | Some { docDoc = Lazy(JustDoc d)} -> d
                            | Some { docDoc = Lazy(FunDoc0 f)} -> f()
                            | Some d -> errDocf "Doc parameters not resolved: %A" d
                            | None   -> errDocf "Doc not found: %s" docName
                        )
            
                let setVar0 = 
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) (varN:obj, value:obj) ->
                        unbox varN
                        |>  getParmRef
                        ||> tryGetVoV
                        |>  Option.iter(fun var ->
                                unbox value
                                |> extractText
                                |> View.Get var.Set
                            )
            
                let setVar varN value = setVar0(varN, value)
            
                let setVarDirect0 = 
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) (varN:obj, text:obj) ->
                        unbox varN
                        |>  getParmRef
                        ||> tryGetVoV
                        |>  Option.iter(fun var -> 
                                unbox text
                                |> var.Set
                            )
                let setVarDirect  varN value = setVarDirect0(varN, value)
                let setVarDirectD varN value = delayed 100 (setVarDirect varN) value
            
                let getValDirect = 
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) (varN:string) ->
                        varN
                        |>  getParmRef
                        ||> tryGetWoW
                        |>  Option.bind View.TryGet
                        |>  Option.defaultValue null
            
                let draggingEvent first (value: Var<string>) (ev: Dom.MouseEvent) =
                    let el : Dom.Element = ev?toElement
                    let vertical = el.ParentElement.HasAttribute "vertical"
                    let getSize (el:Dom.Element) : float =
                        el.GetBoundingClientRect() 
                        |> fun r ->
                                match vertical, first with
                                | true , true  ->  r.Width 
                                | true , false -> -r.Width 
                                | false, true  ->  r.Height
                                | false, false -> -r.Height
                    let mouseCoord (ev: Dom.MouseEvent) = if vertical then float ev.ClientX else float ev.ClientY
                    let startP   = value.Value |> ParseO.parseDoubleO |> Option.defaultValue 0.
                    let start    = mouseCoord ev
                    let gap      = getSize    el
                    let size     = getSize    el.ParentElement
                    let drag (ev: Dom.Event) =
                        ev :?> Dom.MouseEvent
                        |> mouseCoord
                        |> fun m   -> (m - start) * 100.0 / (size - gap) + startP
                        |> max 0. 
                        |> min 100.
                        |> string
                        |> String.left 5
                        |> fun v -> if value.Value <> v then value.Set v
                    let rec finishDragging (_: Dom.Event) =
                        JS.Window.RemoveEventListener("mousemove", drag          , false) 
                        JS.Window.RemoveEventListener("mouseup"  , finishDragging, false)
                    do  JS.Window.AddEventListener   ("mousemove", drag          , false) 
                    do  JS.Window.AddEventListener   ("mouseup"  , finishDragging, false) 
                    ev.PreventDefault()
            
                let dragSplitter0 = 
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) (varN, eventD:Dom.MouseEvent) ->
                        varN
                        |>  getParmRef
                        ||> tryGetVoV
                        |>  Option.iter(fun var -> draggingEvent true var eventD )
                let dragSplitter varN eventD = dragSplitter0(unbox varN, unbox eventD)
            
                let trigAct =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) trigger actN ->
                        extractText trigger
                        |> Doc.BindView(function
                        | null -> ()
                        |_     ->
                            getParmRef actN
                            ||> tryGetAct 
                            |>  Option.iter(fun a -> callFunction () () a.actFunction )
                        >> fun _ -> Html.div [] []
                        )
            
                let trigActChange =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) trigger actN ->
                        extractText trigger
                        |> View.consistent
                        |> View.Map(function
                        | null -> ()
                        |_     ->
                            getParmRef actN
                            ||> tryGetAct 
                            |>  Option.iter(fun a -> callFunction () () a.actFunction )
                        >> fun _ -> ""
                        ) |>  Doc.TextView
            
                let callAction0 =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) actN (p1:obj) (p2:obj) ->
                        getParmRef actN
                        ||> tryGetAct 
                        |>  Option.iter(fun a -> callFunction p1 p2 a.actFunction )
            
                let callAction actN p1 p2 = callAction0 actN p1 p2
            
                let delayAction =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) delay actN ->
                        getParmRef (unbox actN)
                        ||> tryGetAct 
                        |> Option.iter(fun a -> 
                            async {
                                let! d = extractText (unbox delay) |> View.GetAsync
                                do! Async.Sleep (ParseO.parseIntO d |> Option.defaultValue 100)
                                callFunction () () a.actFunction
                            } |> Async.Start
                        )
            
                let select =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) attrs none vals ->
                        docWithVar (fun var ->
                            let valsW = V ((extractText vals).V.Split ';' |> Seq.toList)
                            let varO  = 
                                Var.Make 
                                    (V (match var.V with 
                                        | s when Seq.contains (s.Trim()) valsW.V -> Some(s.Trim()) 
                                        |_-> None )) 
                                    (function 
                                     | None   ->                                                        var.Set "" 
                                     | Some s -> valsW |> View.Get (fun vs -> if Seq.contains s vs then var.Set s ) )
                            Doc.SelectDynOptional (extractAts attrs) none id valsW varO
                        )
            
                let addPlugIn p =
                    newViw (PlgElemName "PlugInName") (View.Const p.plgName.Id)
                    |> p.plgViews.Append
                    plugIns.Add p
            
                let splitterPerc =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) template attrs doc1 doc2 ->
                        docWithVar (fun var -> 
                            Html.div (extractAts attrs) [
                                docReference doc1
                                docReference doc2
                            ]
                        )
                if IsClient then
                    plugin { 
                        plgName  "AppFramework" 
                        plgVar   "mainDocV"     mainDocV
                        plgDoc   "AppFwkClient" AppFwkClient
                        plgAct   "Hello"        (fun () -> JS.Window.Alert "Hello!")
                    } |> addPlugIn
                    plugin { 
                        plgName  "AF"
                        plgDoc1  "DocReference"  docReference  "DocName"
                        plgDoc1  "HtmlDoc"       htmlDoc       "Html"
                        plgDoc2  "TrigAction"    trigAct       "Trigger"  "Action"
                        plgDoc2  "TrigChange"    trigActChange "Trigger"  "Action"
                        plgDoc2  "Input"         input         "Attrs"                  "Var"
                        plgDoc2  "TextArea"      textArea      "Attrs"                  "Var"
                        plgDoc4  "Select"        select        "Attrs"    "None" "Vals" "Var"
                        plgDoc3  "InputFile"     inputFile     "Attrs"    "Label" "Action"
                        plgDoc3  "InputLabel"    inputLabel    "Attrs"    "Label"       "Var"
                        plgDoc5  "SplitterPerc"  splitterPerc  "Template" "Attrs" "doc1" "doc2" "Var"
                        plgAct2  "SetVar"        setVar        "Var"      "Value"
                        plgAct2  "SetVarDirect"  setVarDirect  "Var"      "from"
                        plgAct2  "SetVarDirectD" setVarDirectD "Var"      "from"
                        plgAct2  "DelayAction"   delayAction   "delay"    "Äction"
                        plgAct   "Hello"         (fun () -> JS.Window.Alert "Hello!")
                        plgAct2  "DragSplitter"  dragSplitter  "Var"      "dragEvent"
                        plgQuery "getDocNames"   (fun (_:obj) -> plugIns.Value |> Seq.collect (fun plg -> plg.plgDocs |> Seq.map (fun doc -> plg.plgName.Id + "." + doc.docName.Id)) |> Seq.toArray |> box)
                        plgView  "MouseX"        (View.Map (fst >> string               ) UI.Input.Mouse   .Position     )
                        plgView  "MouseY"        (View.Map (snd >> string               ) UI.Input.Mouse   .Position     )
                        plgView  "MouseLeft"     (View.Map (function true -> "1" |_->"0") UI.Input.Mouse   .LeftPressed  )
                        plgView  "MouseRight"    (View.Map (function true -> "1" |_->"0") UI.Input.Mouse   .RightPressed )
                        plgView  "MouseMiddle"   (View.Map (function true -> "1" |_->"0") UI.Input.Mouse   .MiddlePressed)
                        plgView  "Keyboard"      (View.Map (sprintf "%A"                ) UI.Input.Keyboard.KeysPressed  )
                    } |> addPlugIn
            
                    //titleV.View
                    //|> View.Bind(fun nm ->
                    //    nm
                    //    |> String.splitByChar '.'
                    //    |> (function [| a ; b |] -> tryGetWoW a b |_-> None)
                    //    |> Option.defaultWith (fun () -> mainDocV.View )
                    //) |> View.Sink (fun v -> 
                    //    async {
                    //        do! Async.Sleep 500
                    //        JS.Window.Document.Title <- v 
                    //    } |> Async.Start
                    //)
            
                let getMainDoc =
                  lazy
                    WcSplitter.init horizontal vertical
                    WcTabStrip.init.Value
                    mainDoc()
            
            
            
            /////////////////////////////////////////////////////////////////////////////////////////////
            
                type P<'P> with
                    [<Inline>] static member (<*)(vf:PVl<    'a   ->'b> ,  a :      'a   )  =                                            pff vf (VConst  a                     )
                    [<Inline>] static member (<!)(vf:PVl<    'a   ->'b> , pav:PVl<  'a  >) = pav.r       |> bindWrap (fun av         -> pff vf          av )
                    [<Inline>] static member (<!)(vf:PVl<    'a   ->'b> ,  aW:View< 'a  >)  =                                            pff vf (VView   aW                    )
                    [<Inline>] static member (<!)(vf:PVl<    'a   ->'b> ,  aV:Var<  'a  >)  =                                            pff vf (VView   aV.View               )
                    [<Inline>] static member (<!)(vf:PVl<    'a   ->'b> , paF:PFn<_,'a  >) = paF.r       |> bindWrap (fun aF         -> pff vf (callF   aF                    ) )
                    [<Inline>] static member (<&)(vf:PVl<seq<Doc >->'b> ,  a :   string  ) = extractDocD |> bindWrap (fun extractDoc -> pff vf (VConst (seq [extractDoc a  ]) ) )
                    [<Inline>] static member (<&)(vf:PVl<seq<Doc >->'b> , paF:PFn<_,Doc >) = paF.r       |> bindWrap (fun aF         -> pff vf (VConst (seq [callDoc    aF ]) ) )
                    [<Inline>] static member (<&)(vf:PVl<    Doc  ->'b> ,  a :   string  ) = extractDocD |> bindWrap (fun extractDoc -> pff vf (VConst (     extractDoc a   ) ) )
                    [<Inline>] static member (<&)(vf:PVl<    Doc  ->'b> , paF:PFn<_,Doc >) = paF.r       |> bindWrap (fun aF         -> pff vf (VConst (     callDoc    aF  ) ) )
            //        [<Inline>] static member (<&)(vf:Val<seq<Doc>->'b> , aF:Fun<_,Doc>) = ff vf (VConst (seq [callDoc aF ]) )
            
                    [<Inline>] static member (<&)(vf:PVl<seq<Attr>->'b> ,  a :   string  ) = extractAtsD |> bindWrap (fun extractAts -> pff vf (VConst (     extractAts a   ) ) )
                    [<Inline>] static member (<&)(vf:PVl<seq<Attr>->'b> , paF:PFn<_,Attr>) = paF.r       |> bindWrap (fun aF         -> pff vf (VConst (seq [callAtt    aF ]) ) )
                    [<Inline>] static member (<&)(vf:PVl<    Attr ->'b> ,  a :   string  ) = extractAttD |> bindWrap (fun extractAtt -> pff vf (VConst (     extractAtt a   ) ) )
                    [<Inline>] static member (<&)(vf:PVl<    Attr ->'b> , paF:PFn<_,Attr>) = paF.r       |> bindWrap (fun aF         -> pff vf (VConst (     callAtt    aF  ) ) )
            
                type P<'P> with    
                    [<Inline>] static member (<*)(vc , p         ) = pfc vc  (VConst p       )
                    [<Inline>] static member (<!)(vc , p         ) = pfc vc          p
                    [<Inline>] static member (<!)(vc , p         ) = pfc vc  (VView  p       )
                    [<Inline>] static member (<!)(vc , pV:Var< _>) = pfc vc  (VView  pV.View )
                    [<Inline>] static member (<!)(vc , p:Fun<_,_>) = pfc vc  (callF  p       )
            
                    [<Inline>] static member (<&)(c:PFn<_,     Attr  -> _> ,  p :      string ) = extractAttD |> bindWrap (fun extractAtt -> pfc c       (VConst (       extractAtt        p   ) ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Attr  -> _> ,  p :Val<  string>) =                                            pfc c       (VConst (      Val.textAtt        p   ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Attr  -> _> , paF:PFn<_,string>) = paF.r       |> bindWrap (fun aF         -> pfc c       (VConst (      Val.textAtt (callF aF) ) ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Attr  -> _> , paF:PFn<_,Attr  >) = paF.r       |> bindWrap (fun aF         -> pfc c       (VConst (          callAtt        aF  ) ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Attr  -> _> , p  :      Attr   ) =                                            pfc c       (VConst (                         p   ) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Attr> -> _> , p  :      string ) = extractAtsD |> bindWrap (fun extractAts -> pfc c       (VConst (       extractAts        p   ) ) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Attr> -> _> , p  :Val<  string>) =                                            pfc c       (VConst (seq [ Val.textAtt        p  ]) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Attr> -> _> , paF:PFn<_,string>) = paF.r       |> bindWrap (fun aF         -> pfc c       (VConst (seq [ Val.textAtt (callF aF)]) ) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Attr> -> _> , paF:PFn<_,Attr  >) = paF.r       |> bindWrap (fun aF         -> pfc c       (VConst (seq [     callAtt        aF ]) ) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Attr>,   _> , p  :      string ) = extractAttD |> bindWrap (fun extractAtt -> c |> unwrapBindWrap (fun c -> { c with p = Val.addAtt(  extractAtt        p  ) c.p } ) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Attr>,   _> , p  :Val<  string>) =                                            c |> unwrapBindWrap (fun c -> { c with p = Val.addAtt( Val.textAtt        p  ) c.p } )
                    [<Inline>] static member (<!)(c:PFn<   seq<Attr>,   _> , paF:PFn<_,string>) = paF.r       |> bindWrap (fun aF         -> c |> unwrapBindWrap (fun c -> { c with p = Val.addAtt( Val.textAtt (callF aF)) c.p } ) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Attr>,   _> , paF:PFn<_,Attr  >) = paF.r       |> bindWrap (fun aF         -> c |> unwrapBindWrap (fun c -> { c with p = Val.addAtt(     callAtt        aF ) c.p } ) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Attr>,   _> , p  :      Attr   ) =                                          c |> unwrapBindWrap (fun c -> { c with p = Val.addAtt                     p    c.p } )
            
                    [<Inline>] static member (<&)(c:PFn<_,     Doc   -> _> , p  :      string ) = extractDocD |> bindWrap (fun extractDoc -> pfc c       (VConst (       extractDoc        p   ) ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Doc   -> _> , p  :Val<  string>) =                                            pfc c       (VConst (      Val.textDoc        p   ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Doc   -> _> , paF:PFn<_,string>) = paF.r     |> bindWrap (fun aF           -> pfc c       (VConst (      Val.textDoc (callF aF) ) ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Doc   -> _> , paF:PFn<_,Doc   >) = paF.r     |> bindWrap (fun aF           -> pfc c       (VConst (          callDoc        aF  ) ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Doc   -> _> , p  :      Doc    ) =                                            pfc c       (VConst (                         p   ) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Doc > -> _> , p  :      string ) = extractDocD |> bindWrap (fun extractDoc -> pfc c       (VConst (seq [  extractDoc        p  ]) ) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Doc > -> _> , p  :Val<  string>) =                                            pfc c       (VConst (seq [ Val.textDoc        p  ]) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Doc > -> _> , paF:PFn<_,string>) = paF.r     |> bindWrap (fun aF           -> pfc c       (VConst (seq [ Val.textDoc (callF aF)]) ) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Doc > -> _> , paF:PFn<_,Doc   >) = paF.r     |> bindWrap (fun aF           -> pfc c       (VConst (seq [     callDoc        aF ]) ) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Doc >,   _> , p  :      string ) = extractDocD |> bindWrap (fun extractDoc -> c |> unwrapBindWrap (fun c -> { c with p = Val.addDoc(  extractDoc        p  ) c.p }) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Doc >,   _> , p  :Val<  string>) =                                            c |> unwrapBindWrap (fun c -> { c with p = Val.addDoc( Val.textDoc        p  ) c.p } )
                    [<Inline>] static member (<!)(c:PFn<   seq<Doc >,   _> , paF:PFn<_,string>) = paF.r     |> bindWrap (fun aF           -> c |> unwrapBindWrap (fun c -> { c with p = Val.addDoc( Val.textDoc (callF aF)) c.p } ) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Doc >,   _> , paF:PFn<_,Doc   >) = paF.r     |> bindWrap (fun aF           -> c |> unwrapBindWrap (fun c -> { c with p = Val.addDoc(     callDoc        aF ) c.p } ) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Doc >,   _> , p  :      Doc    ) =                                            c |> unwrapBindWrap (fun c -> { c with p = Val.addDoc                     p    c.p } )
            
                let inline (!) v = { r = VConst v |> rtn }
            
                let concatMainDocs plugins = 
                    plugins 
                    |> Seq.choose (fun plg -> Seq.tryHead plg.plgDocs) 
                    |> Seq.choose (function 
                                    | {docDoc = Lazy(JustDoc d)}-> Some d 
                                    | {docDoc = Lazy(FunDoc0 f)}-> Some(f()) 
                                    |_-> None) 
                    |> Doc.Concat
            
                let lensStrO (sel:Var<string option>) =
                    Var.Make 
                        (V ( match sel.V with Some s -> s |_-> "" )) 
                        (fun s -> if s = "" then sel.Set None
                                  else Some s |> sel.Set)
                let mapVarO ofBO toB (sel:Var<_ option>) = 
                    Var.Make(V (sel.V |> Option.map toB)) 
                            (function Some s -> ofBO s |> Option.iter (Some >> sel.Set) |_-> sel.Set None) 
            
                type ListModelData<'K, 'D when 'K : equality> = {
                    elemsW : View<ListModel<'K, 'D>>
                    doc    : unit -> Doc
                    selV   : Var<'K option>
                    add    : unit -> 'D  
                    delCur : unit -> unit
                    def    : 'D
                } with 
                    member this.PlugIn ofStrO toStr = plugin {
                        plgDoc0   "list" (this.doc         )
                        //doc    "cur"  (lazy this.CurrentDoc  )
                        plgVar    "sel"  (this.selV |> mapVarO ofStrO toStr |> lensStrO )
                        plgAct    "add"  (this.add >> ignore    )
                        plgAct    "del"  this.delCur
                    }
                    member this.CurrentW = View.Do {
                            let! elems = this.elemsW
                            let! selO  = this.selV.View
                            match selO with
                            | Some sel   -> let! elemO = elems.TryFindByKeyAsView sel
                                            match elemO with
                                            | Some elem -> return elem
                                            | None      -> return this.def
                            | None                      -> return this.def
                        }
                    member this.CurrentV =
                        Var.Make this.CurrentW
                                (fun v -> 
                                    match this.selV.Value with 
                                    | Some k -> this.elemsW |> View.Get (fun elems -> if elems.ContainsKey k then elems.Add v ) 
                                    | None -> ())
            
            //module LayoutEngine =
            //    open LayoutEngine
            //    module AF = AppFramework
            //
            //    let addLayout0 lyt = 
            //        addLayout  lyt
            //        AF.mainDocV.Set <| UoM.Untag lyt.lytName
            
            //module ListModel =
            //    let MapLens predO (f: 'Key -> Var<'T> -> 'V) (m:ListModel<_,_>) =
            //        let get k v = f k (m.Lens k)
            //        match predO with
            //        | None       -> m.ViewState |> View.MapSeqCachedViewBy m.Key get 
            //        | Some predW ->
            //            (m.ViewState, predW) 
            //            ||> View.Map2(fun vms pred -> vms.ToArray (System.Predicate pred)) 
            //            |> View.MapSeqCachedViewBy m.Key get 
            
            module LM =
                module AF = AppFramework
            
                let getDocForW (elementsW: View<ListModel<_,_>>) keyF def newF predWO elUI =
                    let selected0 : Var<_ option>  = Var.Create None
                    let selView = View.Do {
                        let! elements = elementsW
                        let! selO = selected0.View
                        match selO with 
                        | None      -> return None
                        | Some sel  ->
                        let! exists = elements.ContainsKeyAsView sel
                        if not exists then return None else
                        return Some sel
                        //match predWO with
                        //| None       -> return Some sel
                        //| Some predW ->
                        //let! v    = elements.FindByKeyAsView sel
                        //let! pred = predW
                        //return if pred v then Some sel else None
                    }
                    let selectedV : Var<_ option>  = 
                        Var.Make
                            selView
                            (fun v -> elementsW |> View.Get(fun elements -> 
                                match v with 
                                | Some k when elements.ContainsKey k -> Some k 
                                |_-> None
                                |> fun v -> if selected0.Value <> v then selected0.Set v )
                            )
                    let addNew () =
                        let n = newF()
                        elementsW |> View.Get (fun elements ->
                            elements.Add n
                            selectedV.Set (Some <| keyF n)
                        )
                        n
                    let delete  k = fun () -> selectedV.Set None ; elementsW |> View.Get (fun elements -> elements.RemoveByKey k)
                    let result = {
                        AF.elemsW = elementsW
                        AF.doc    = fun () -> Doc.Empty
                        AF.selV   = selectedV
                        AF.delCur = fun () -> selectedV.Value |> Option.iter (fun k -> delete k () )
                        AF.add    = addNew
                        //AF.getDoc = elUI selectedV ignore
                        AF.def    = def
                    }
                    let elUIF     = elUI result
                    let listW     = elementsW |> View.Bind ( fun elems -> elems |> ListModel.MapLens predWO (fun k v -> elUIF (View.Const (Some k)) v ) )
                    { result with AF.doc = fun () -> listW |> Doc.BindSeqCached id }
            
                let getDocFor (elements: ListModel<_,_>) def newF predWO elUI = getDocForW (View.Const elements) elements.Key def newF predWO elUI
            
                let getDoc keyF def newF predWO elUI =
                    let elements  : ListModel<_,_> = ListModel.Create keyF []
                    getDocFor elements def newF predWO elUI
            
                //let setCurrentDoc docF li = { li with AF.getDoc = docF Util.unselectorV ignore }
                let addElements (li:AF.ListModelData<_,_>) elems = li.elemsW |> View.Get (fun elements -> elements.AppendMany elems)
            
            //module LMX =
            //    module AF = AppFramework
            //    open System
            //
            //    let addNewO newF firstKey nextKey=
            //        let mutable k = firstKey
            //        fun () ->
            //            let e = k, newF()
            //            k <- nextKey k
            //            e
            //
            //    let elemUI2 elemUI a b (v:Var<_>) = elemUI a b (v.Lens snd (fun (i, _) nv -> i, nv ) )
            //
            //    let getDocInt    def newElem elemUI = addNewO newElem 0                          ((+) 1)                             |> LM.getDoc fst (-1               , def) <| None <| elemUI2 elemUI
            //    let getDocGuid   def newElem elemUI = addNewO newElem (Guid.NewGuid())           (fun _ -> Guid.NewGuid())           |> LM.getDoc fst (       Guid.Empty, def) <| None <| elemUI2 elemUI
            //    let getDocGuidId def newElem elemUI = addNewO newElem (Guid.NewGuid() |> GuidId) (fun _ -> Guid.NewGuid() |> GuidId) |> LM.getDoc fst (GuidId Guid.Empty, def) <| None <| elemUI2 elemUI
            //                                            : AF.ListModelData<GuidId<'C>, GuidId<'C> * 'C>
            //
            //    //let setCurrentDoc docF = elemUI2 docF |> LM.setCurrentDoc
            //
            //    let addElements (li:AF.ListModelData<_,_>) elems = elems |> Seq.iter (fun v -> (li.add() |> fst, v) |> li.elems.Add )
            
            [< JavaScript ; JavaScriptExport (typeof<WebComponent.WcSplitter.WcSplitterT>) >]
            module StartAppFramework =
                //open FsRoot
                open WebSharper.JavaScript
            
                let htmlD = Depend.dependByName "AppFrameworkTemplate.html" AppFrameworkTemplate.html box
            
                let startWithHtmlD = Depend.depend {
                    let! html = htmlD
                    return fun () ->
                        let d = JS.Window.Document.CreateElement "div"
                        let _ = JS.Window.Document.Body.AppendChild d
                        d?outerHTML <- html
                        AppFramework.getMainDoc.Value 
                        |> Doc.RunAppend JS.Window.Document.Body 
                }
            
                let startWith html =
                    (startWithHtmlD 
                    |> Depend.resolver [
                        "AppFrameworkTemplate.html", AppFrameworkTemplate.html + html
                    ]) ()
            
            
            module AppFrameworkUI =
            
                module AF = AppFramework
            
                let showPlugIn (lmd:AF.ListModelData<_,AF.PlugIn    >) (k:View<_ option>) (plgV:Var<AF.PlugIn>) =
                    AF.AppFwkTemplate.Tile()
                        .Name(     plgV.V.plgName.Id                            )
                        .Select(   fun _ -> View.Get lmd.selV.Set k             )
                        .Selected( if lmd.selV.V = k.V then "selected" else ""  )
                        .Doc() 
            
                let showVar  (lmd:AF.ListModelData<_,AF.PlugInVar   >) (k:View<_ option>) (varV:Var<AF.PlugInVar>) =
                    let nameW = View.Do {
                        let! var = varV.View
                        let! v   = var.varVar.View
                        return var.varName.Id + " = " + v
                    }
                    AF.AppFwkTemplate.Tile()
                        .Name(     nameW                                        )
                        .Select(   fun _ -> View.Get lmd.selV.Set k             )
                        .Selected( if lmd.selV.V = k.V then "selected" else ""  )
                        .Doc() 
            
                let showView (lmd:AF.ListModelData<_,AF.PlugInView  >) (k:View<_ option>) (viwV:Var<AF.PlugInView>) =
                    let nameW = View.Do {
                        let! viw = viwV  .View
                        let! v   = viw.viwView
                        return viw.viwName.Id + " = " + v
                    }
                    AF.AppFwkTemplate.Tile()
                        .Name(     nameW                                        )
                        .Select(   fun _ -> View.Get lmd.selV.Set k             )
                        .Selected( if lmd.selV.V = k.V then "selected" else ""  )
                        .Doc() 
            
                let showAct  (lmd:AF.ListModelData<_,AF.PlugInAction>) (k:View<_ option>) (actV:Var<AF.PlugInAction>) =
                    let parms (act:AF.PlugInAction) = 
                        match act.actFunction with
                        | AF.FunAct0(_        ) -> ""
                        | AF.FunAct1(_, p1    ) -> [ p1      ] |> String.concat ", " |> sprintf "(%s)"
                        | AF.FunAct2(_, p1, p2) -> [ p1 ; p2 ] |> String.concat ", " |> sprintf "(%s)"
                    AF.AppFwkTemplate.Tile()
                        .Name(     actV.V.actName.Id + parms actV.V             )
                        .Select(   fun _ -> View.Get lmd.selV.Set k             )
                        .Selected( if lmd.selV.V = k.V then "selected" else ""  )
                        .Doc() 
            
                let showDoc  (lmd:AF.ListModelData<_,AF.PlugInDoc   >) (k:View<_ option>) (docV:Var<AF.PlugInDoc>) =
                    AF.AppFwkTemplate.Tile()
                        .Name(     docV.V.docName.Id + AF.docParms docV.V )
                        .Select(   fun _ -> View.Get lmd.selV.Set k )
                        .Selected( if lmd.selV.V = k.V then "selected" else ""  )
                        .Doc() 
            
                let defPlg = AF.defaultPlugIn()
                let defDoc = AF.newDoc (AF.PlgElemName "_") (lazy Doc.Empty)
                let defVar = AF.newVar (AF.PlgElemName "_") (Var.Create "" )
                let defViw = AF.newViw (AF.PlgElemName "_") (View.Const "" )
                let defAct = AF.newAct (AF.PlgElemName "_") (fun () -> ()  )
            
                let failCreate s = fun () -> failwithf "Create %s not implemented" s
            
                if IsClient then
                    let pluginsList  = LM.getDocFor   AF.plugIns                                                          defPlg (failCreate "plugin" ) None showPlugIn
                    let plgVarsList  = LM.getDocForW (V pluginsList.CurrentW.V.plgVars   ) (fun plgVar -> plgVar.varName) defVar (failCreate "Var"    ) None showVar
                    let plgViewsList = LM.getDocForW (V pluginsList.CurrentW.V.plgViews  ) (fun plgViw -> plgViw.viwName) defViw (failCreate "View"   ) None showView
                    let plgActsList  = LM.getDocForW (V pluginsList.CurrentW.V.plgActions) (fun plgAct -> plgAct.actName) defAct (failCreate "Action" ) None showAct
                    let plgDocsList  = LM.getDocForW (V pluginsList.CurrentW.V.plgDocs   ) (fun plgDoc -> plgDoc.docName) defDoc (failCreate "Doc"    ) None showDoc
            
                    let plugInAdded =
                        AF.plugin {
                            plgName   "AppFrmkUI"
                            plgMerge  "plugIns_"     (pluginsList .PlugIn (AF.PlugInName  >> Some) (fun n -> n.Id) )
                            plgMerge  "plgVars_"     (plgVarsList .PlugIn (AF.PlgElemName >> Some) (fun n -> n.Id) )
                            plgMerge  "plgViews_"    (plgViewsList.PlugIn (AF.PlgElemName >> Some) (fun n -> n.Id) )
                            plgMerge  "plgActs_"     (plgActsList .PlugIn (AF.PlgElemName >> Some) (fun n -> n.Id) )
                            plgMerge  "plgDocs_"     (plgDocsList .PlugIn (AF.PlgElemName >> Some) (fun n -> n.Id) )
                        }
                        |> AF.addPlugIn
                    ()
            
            //#define DLL
            
            [< JavaScriptExport >]
            type LayoutEngine = {
                lytName       : AppFramework.PlugInName 
                lytDefinition : Var<string>
            }
            
            [< JavaScriptExport >]
            module LayoutEngine =
                open WebSharper.UI
                open WebSharper.JavaScript
                module AF = AppFramework
            
                open WebSharper.UI.Client
            
                type LayoutEntry =
                    | EntryVar    of AF.PlugInVar   
                    | EntryView   of AF.PlugInView  
                    | EntryDoc    of AF.PlugInDoc
                    | EntryAction of AF.PlugInAction
                    | EntryQuery  of AF.PlugInQuery
            
                type Token = Quoted of string | UnQuoted of string
            
                let (|S|) = function Quoted s | UnQuoted s -> s
            
                let (|Identifier|_|) =
                    function
                    | UnQuoted(REGEX "^[$a-zA-Z_][0-9a-zA-Z_\.\-$]*$" "" [| id |] ) -> Some id
                    | _                                                             -> None
            
                let (|I|_|) = function Identifier i -> Some i | _ -> None
            
                let (|Vertical|Horizontal|Layout|Grid|Template|Elem|Nothing|) =
                    function
                    | UnQuoted s when s = "vertical"   -> Vertical
                    | UnQuoted s when s = "horizontal" -> Horizontal
                    | UnQuoted s when s = "layout"     -> Layout
                    | UnQuoted s when s = "grid"       -> Grid
                    | UnQuoted s when s = "template"   -> Template
                    | Identifier id                    -> Elem id
                    |                                _ -> Nothing
            
                let (|PlugIn|Button|Input|TextArea|Select|Actions|Nothing|) =
                    function
                    | UnQuoted s when s = "PlugIn"     -> PlugIn
                    | UnQuoted s when s = "Button"     -> Button
                    | UnQuoted s when s = "input"      -> Input
                    | UnQuoted s when s = "textarea"   -> TextArea
                    | UnQuoted s when s = "select"     -> Select
                    | UnQuoted s when s = "Actions"    -> Actions
                    |                                _ -> Nothing
            
                let (|Var|Doc|View|ViewJS|Docs|Action|Nothing|) =
                    function
                    | UnQuoted s when s = "Var"        -> Var
                    | UnQuoted s when s = "Doc"        -> Doc
                    | UnQuoted s when s = "View"       -> View
                    | UnQuoted s when s = "ViewJS"     -> ViewJS
                    | UnQuoted s when s = "Docs"       -> Docs
                    | UnQuoted s when s = "Action"     -> Action
                    |                                _ -> Nothing
            
                type Measures = 
                | Fixed    of pixel: float * first: bool
                | Variable of min:   float * value: float * max: float
                    with override this.ToString() = 
                            match this with
                            | Fixed(        v, f  ) -> string (int (if f then v else -v) )
                            | Variable(min, v, max) -> sprintf "%d-%d-%d" (int min) (int v) (int max)
            
                let splitChar   ch = String.splitByChar ch >> Seq.map    String.trim
                let splitSemiColon = splitChar         ';' >> Seq.filter ((<>) "")
                let splitInTwo  ch = splitChar          ch >> Seq.toArray
            
                let (|Measures|_|) =
                    function 
                    | Quoted _     -> None 
                    | UnQuoted txt ->
                    String.splitByChar '-' txt
                    |> function
                       | [|                     ParseO.Double v                     |] -> Some <| Fixed    (     v, true )
                       | [| "";                 ParseO.Double v                     |] -> Some <| Fixed    (     v, false)
                       | [| ParseO.Double min ; ParseO.Double v ; ParseO.Double max |] -> Some <| Variable (min, v, max  )
                       | _                                                             -> None
            
                let fixedSplitter vertical pixel first (doc1:Doc) (doc2:Doc) =
                    let sizes = sprintf (if first then "%fpx calc(100%% - %fpx)" else "calc(100%% - %fpx) %fpx") pixel pixel
                    if vertical then 
                        AF.AppFwkTemplate.FixedSplitterVer()
                            .PartSizes( sizes)
                            .First(     doc1 )
                            .Second(    doc2 )
                            .Doc()
                    else 
                        AF.AppFwkTemplate.FixedSplitterHor()
                            .PartSizes( sizes)
                            .First(     doc1 )
                            .Second(    doc2 )
                            .Doc()
            
                let variableSplitter vertical min value max doc1 doc2 =
                    Doc.Element "wcomp-splitter" [
                        if vertical then yield Attr.Create "vertical"    ""
                        yield                  Attr.Create "min"      <| string min
                        yield                  Attr.Create "value"    <| string value
                        yield                  Attr.Create "max"      <| string max
                    ] [ doc1 ; doc2 ]
                    :> Doc
                    
                //let getLDoc name =
                //    splitName name
                //    ||> AF.tryGetDoc 
                //    |>  Option.map         AF.getLazyDoc
                //    |>  Option.defaultWith(fun ()  -> sprintf "missing %s" name |> AF.errDoc )                            
            
                //let xxhookOrText =
                //    function
                //    | Identifier id -> hookDoc id
                //    | txt           -> Doc.TextNode txt
            
                //type Token = string * bool
            
                let rec doubleQuote = function
                    | []                                            -> []
                    | UnQuoted c :: _ when c.StartsWith "//"        -> []
                    | Quoted t1 :: Quoted "\"" :: Quoted t2 :: rest -> (Quoted(t1 + "\"" + t2) :: rest) |> doubleQuote
                    | Quoted t1 :: Quoted "\"" :: []                -> [Quoted t1 ]
                    | h::rest                                       -> h :: doubleQuote rest
            
                let splitTokens line : Token list = // """main h1 "" "Hello World!"""" |> printfn "dd"
                    (if Seq.tryHead line = Some '"' then " " + line else line)
                    |> String.splitByChar '"'
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
            
            //    type TextData = 
            //    | TDText  of string
            //    | TDAct   of AF.PlugInAction
            //
            //    let splitName = AF.splitName
            //
            //    let rec getOneTextData lytNm name bef aft =
            //        let plg, n = splitName lytNm name
            //        AF.tryGetActW plg n
            //        |> View.Bind(function
            //        | Some act -> TDAct act |> View.Const
            //        | None     ->
            //        AF.tryGetWoWW plg n
            //        |> View.Bind(function
            //            | Some txt ->
            //                getTextData lytNm aft
            //                |> View.Bind (function
            //                    | TDText  b    -> View.Const <| (TDText  <|     bef + txt + b                             )
            //                    | TDAct   act  -> View.Const <| (TDText  <| sprintf "Unexpected Action @{%s}" (act.actName.Id) )
            //                )
            //            | None                 -> View.Const <| (TDText  <| sprintf "%s @{Missing %s}%s" bef name aft     )  
            //            )
            //        )
            //
            //    and getTextData lytNm (txt:string) =
            //        txt
            //        |> String.delimitedO "@{" "}"
            //        |> Option.map(fun (bef, name, aft) -> getOneTextData lytNm name bef aft )
            //        |> Option.defaultWith (fun () -> TDText  txt |> View.Const)
            //
            //    let getTextToken lytNm (token: Token) =
            //        match token with
            //        | UnQuoted name -> getOneTextData lytNm name "" ""
            //        | Quoted   txt  -> getTextData    lytNm txt
            //
            //    let getAttrs lytNm (S attrs: Token) = 
            //        [
            //            yield!  attrs
            //                    |> String.splitByChar ';'
            //                    |> Seq.map(String.splitByChar '=')
            //                    |> Seq.choose(
            //                        function 
            //                        | [| name ; value |] when name.Trim() <> "" && value.Trim() <> "" ->
            //                                value.Trim() |> getTextData lytNm
            //                                |> Attr.DynamicCustom (fun el -> function
            //                                    | TDText  v   -> el.SetAttribute(name.Trim(), v.Trim())
            //                                    | TDAct   act -> el.AddEventListener(name.Trim(), (fun (ev:Dom.Event) -> act.actFunction |> AF.callFunction el ev), false)
            //                                )
            //                                |> Some
            //                        |_      -> None )
            //            yield!  attrs
            //                    |> String.splitByChar ';'
            //                    |> Seq.map(String.splitByChar ':')
            //                    |> Seq.choose(
            //                        function 
            //                        | [| name ; value |] when name.Trim() <> "" && value.Trim() <> "" -> 
            //                                value.Trim() |> getTextData lytNm
            //                                |> View.Map(function
            //                                    | TDText  v   -> v.Trim()
            //                                    | TDAct   act -> sprintf "@{%s}" (act.actName.Id)
            //                                )
            //                                |> Attr.DynamicStyle (name.Trim())
            //                                |> Some
            //                        |_      -> None )
            //        ]
            //
            //    let getDocF (parms:Token list) (doc:AF.PlugInDoc) =
            //        match doc.docDoc, parms with
            //        | AF.LazyDoc ldoc                  ,                                                   rest -> ldoc.Value       , rest
            //        | AF.FunDoc0 f0                    ,                                                   rest -> f0()             , rest
            //        | AF.FunDoc1(f1, _                ), (S p1)                                         :: rest -> f1 p1            , rest
            //        | AF.FunDoc2(f2, _ , _            ), (S p1) :: (S p2)                               :: rest -> f2 p1 p2         , rest
            //        | AF.FunDoc3(f3, _ , _ , _        ), (S p1) :: (S p2) :: (S p3)                     :: rest -> f3 p1 p2 p3      , rest          
            //        | AF.FunDoc4(f4, _ , _ , _ , _    ), (S p1) :: (S p2) :: (S p3) :: (S p4)           :: rest -> f4 p1 p2 p3 p4   , rest     
            //        | AF.FunDoc5(f5, _ , _ , _ , _ , _), (S p1) :: (S p2) :: (S p3) :: (S p4) :: (S p5) :: rest -> f5 p1 p2 p3 p4 p5, rest
            //        | _ -> Html.div [] [ Html.text <| sprintf "Parameters do not coincide with definition %A - %A" doc parms ], []
            //
            //    let getDocFinal parms doc = 
            //        match getDocF parms doc with
            //        | res, [] -> res
            //        | _ -> sprintf "Too many parameters %A %A" doc parms |> AF.errDoc
            //
            //    let mutable currentViewTriggger = AF.mainDocV.View
            //
            //    let turnToView f = currentViewTriggger |> View.Map f |> Doc.EmbedView
            //
            //    let getADoc lytNm token =
            //        match token with
            //        | Identifier di  -> let plg, nm = splitName lytNm di
            //                            AF.tryGetDocW plg nm
            //                            |>  Doc.BindView (function 
            //                                | Some pdc -> getDocF [] pdc |> fst
            //                                | None     ->
            //                                AF.tryGetWoWW plg nm
            //                                |> Doc.BindView (function 
            //                                    | Some txt -> Doc.TextNode txt
            //                                    | None     -> sprintf "Missing doc: %s" di |>! print |> AF.errDoc )
            //                            )
            //        | (S txt)        -> txt
            //                            |> getTextData lytNm
            //                            |> View.Map(function
            //                                | TDText  v   ->  v 
            //                                | TDAct   act -> sprintf "Unexpected action: %s" (act.actName.Id)
            //                            )
            //                            |> Doc.TextView
            //
            //    let rec getAllDocs lytNm tokens =
            //        match tokens with
            //        | []            -> []
            //        | token :: rest -> getADoc lytNm token :: getAllDocs lytNm rest
            //
            //    let getOneDoc lytNm docs =
            //        match docs with
            //        | Identifier id :: parms -> let plg, nm = splitName lytNm id
            //                                    AF.tryGetDoc plg nm
            //                                    |>  Option.map (getDocF parms)
            //                                    |>  Option.defaultWith  (fun ()  ->
            //                                        AF.tryGetWoW plg nm
            //                                        |>  Option.map (fun txtW -> Doc.TextView txtW, parms)
            //                                        |> fun vv -> vv
            //                                        |>  Option.defaultWith  (fun () -> sprintf "Missing doc: %s" id |>! print |> AF.errDoc, parms) )
            //        | (S txt)       :: rest  -> txt
            //                                    |> getTextData lytNm
            //                                    |> View.Map(function
            //                                        | TDText  v   ->  v 
            //                                        | TDAct   act -> sprintf "Unexpected action: %s" (act.actName.Id)
            //                                    )
            //                                    |> Doc.TextView, rest
            //        | []                     -> Doc.Empty, []
            //
            //    let rec getDocs_ lytNm docs =
            //        match docs with
            //        | [] -> []
            //        | _  -> 
            //        match getOneDoc lytNm docs with
            //        | res, rest -> res :: getDocs_ lytNm rest
            //
            //    let pairOfDocs lytNm docs =
            //        currentViewTriggger 
            //        |> View.Map (fun _ -> getAllDocs lytNm docs )
            //        |> View.Map (
            //            function 
            //            | [ doc1 ; doc2 ] -> doc1, doc2
            //            | _               -> sprintf "splitter expects exactly 2 elements %A" docs |> AF.errDoc, "part 2" |> AF.errDoc
            //        ) |> (fun dsW -> View.Map fst dsW |> Doc.EmbedView, View.Map snd dsW |> Doc.EmbedView )
            //
            //    let singleDoc lytNm docs =
            //        currentViewTriggger
            //        |> View.Map (fun _ -> getAllDocs lytNm docs )
            //        |> View.Map (
            //            function 
            //            | [ doc1 ] -> doc1
            //            | _        -> sprintf "expected exactly 1 element %A" docs |> AF.errDoc
            //        ) |> Doc.EmbedView
            //
            //    let createSplitter(lytNm, name, vertical, measures, docs) =
            //        let doc1, doc2 = pairOfDocs lytNm docs
            //        match measures with
            //        | Fixed    (pixel,    first) ->    fixedSplitter vertical pixel first   doc1 doc2
            //        | Variable (min, value, max) -> variableSplitter vertical min value max doc1 doc2
            //
            //    let createElement(lytNm, name, element, attrs, docs) =
            //        turnToView <| fun _ ->
            //            getAllDocs lytNm docs 
            //            |> Doc.Concat
            //            |> Seq.singleton
            //            |> Doc.Element element (getAttrs lytNm attrs)
            //
            //    let createButton( lytNm, name, actName, attrs, S text) = 
            //        turnToView <| fun _ ->
            //            splitName lytNm actName
            //            ||> AF.tryGetAct
            //            |>  Option.map          (fun act -> fun () -> act.actFunction |> AF.callFunction () ()  )
            //            |>  Option.defaultValue ignore
            //            |> Doc.Button text (getAttrs lytNm attrs)
            //
            //    let createInput( lytNm, name, varName, attrs ) = 
            //        turnToView <| fun _ ->
            //            splitName lytNm varName
            //            ||> AF.tryGetVoVW
            //            |> Doc.BindView(function
            //                | Some var -> Doc.Input     (getAttrs lytNm attrs) var
            //                | None  -> sprintf "Missing var: %s" varName |> AF.errDoc )
            //
            //    let createTextArea( lytNm, name, varName, attrs ) = 
            //        turnToView <| fun _ ->
            //                splitName lytNm varName
            //                ||> AF.tryGetVoVW
            //                |> Doc.BindView(function
            //                    | Some var -> Doc.InputArea (getAttrs lytNm attrs) var
            //                    | None  -> sprintf "Missing var: %s" varName |> AF.errDoc )
            //
            //    let createDoc( lytNm, name, docName, parms) =
            //        turnToView <| fun _ ->
            //            splitName lytNm docName
            //            ||> AF.tryGetDoc
            //            |>  Option.map (getDocFinal parms)
            //            |>  Option.defaultWith  (fun ()  -> sprintf "Missing doc: %s" docName |> AF.errDoc )
            //
            //    let createTemplate( lytNm, name, tempName:string, attrs:Token, holes) =
            //        turnToView <| fun _ ->
            //            let attrs = getAttrs lytNm attrs
            //            Client.Doc.LoadLocalTemplates "local"
            //            try
            //                holes 
            //                |> Seq.pairwise
            //                |> Seq.indexed
            //                |> Seq.filter(fun (i, _) -> i % 2 = 0)
            //                |> Seq.map  snd
            //                |> Seq.map( function
            //                    | (S nm ), Identifier id -> splitName     lytNm id ||> AF.tryGetDoc |> Option.map (fun doc -> TemplateHole.Elt(   nm.ToLower(), getDocF [] doc |> fst) )
            //                                                |> Option.orElseWith (fun () ->
            //                                                    splitName lytNm id ||> AF.tryGetVar |> Option.map (fun var -> TemplateHole.VarStr(nm.ToLower(), var.varVar) )
            //                                                )
            //                                                |> Option.defaultWith(fun () -> TemplateHole.Elt(nm.ToLower(), sprintf "Missing element: %s" id |> AF.errDoc) )
            //                    | (S nm ), (S txt )      -> //getTextData lytNm txt
            //                                                //|> View.Map (function
            //                                                //    | TDText  v   -> TemplateHole.Text(    nm.ToLower(), v )
            //                                                //    | TDView  vw  -> TemplateHole.TextView(nm.ToLower(), vw)
            //                                                //    | TDAct   act -> TemplateHole.Event(   nm.ToLower(), (fun el ev -> act.actFunction |> AF.callFunction el ev ))
            //                                                //)
            //                                                TemplateHole.Elt(nm.ToLower(), sprintf "Not implemented: %s" txt |> AF.errDoc) 
            //                )
            //                |> (if Seq.isEmpty attrs then id else TemplateHole.Attribute("attrs", Attr.Concat attrs) |> Seq.singleton |> Seq.append)
            //                |> Client.Doc.NamedTemplate "local" (tempName.ToLower() |> Some)
            //                |> Some
            //            with _ -> None
            //            |>  Option.defaultWith  (fun ()  -> sprintf "Missing template: %s" tempName |> AF.errDoc )
            //
            //    let getParamText lytNm token f = 
            //        getTextToken lytNm token
            //        |> View.Get(function
            //            | TDText  txt -> f (box txt)
            //            | TDAct   act -> f (box act)
            //        )
            //
            //    let createAction( lytNm, name, actName, (parms : Token list) ) = 
            //        splitName lytNm actName
            //        ||> AF.tryGetAct
            //        |>  Option.map          (fun act -> 
            //            if parms = [] then act.actFunction else
            //            match act.actFunction, parms with
            //            | AF.FunAct1(f,_    ), [ t1     ] -> AF.FunAct0( fun () -> getParamText lytNm t1                                   f              )
            //            | AF.FunAct2(f,_, _ ), [ t1; t2 ] -> AF.FunAct0( fun () -> getParamText lytNm t1 (fun p1 -> getParamText lytNm t2 (f p1   ) )     )
            //            | AF.FunAct2(f,_, n2), [ t1     ] -> AF.FunAct1((fun p2 -> getParamText lytNm t1 (fun p1 ->                        f p1 p2) ) , n2)
            //            | _ -> AF.FunAct0 (fun () -> printfn "Parameters do not coincide for Action %s %A %A" actName parms act )
            //        )
            //        |>  Option.defaultWith  (fun ()  -> AF.FunAct0 (fun () -> printfn "Action Not Found %s" actName) )
            //
            //    let createConcat(lytNm, name, docs) =
            //        turnToView (fun _ -> getAllDocs lytNm docs |> Doc.Concat)
            //
            //    let createVar( lytNm, varName, v           ) = Var.Create v
            //    let findJSEntry fname =
            //        fname 
            //        |> String.splitByChar '.'
            //        |> Seq.fold(fun oO nm ->
            //            oO |> Option.bind(fun o -> if (isUndefined o?(nm)) then None else Some o?(nm) ) 
            //            ) (Some (JS.Inline("window") :> obj) )
            //
            //    let createView(lytNm, viwName, parms) = 
            //        currentViewTriggger |> View.Bind (fun _ ->
            //            try
            //                parms
            //                |> View.traverseSeq (getTextToken lytNm)
            //                |> View.Map (
            //                    Seq.map 
            //                        (function
            //                        | TDText  txt -> txt
            //                        | TDAct   act -> sprintf "%A" act) 
            //                    >> Seq.toArray
            //                )
            //                |> View.Map (fun ar ->
            //                    try match ar with
            //                        | [|   |] -> "No JS function specified"
            //                        | [| _ |] ->  JS.Eval ar.[0]                                              |> string
            //                        | _       -> (JS.Eval ar.[0] |> unbox<FuncWithArgs<_,obj>>).Call ar.[1..] |> string
            //                    with e -> e.Message
            //                )
            //            with e -> e.Message |> View.Const
            //        )
            //
            //    let createSplitterM = Memoize.memoize createSplitter
            //    let createButtonM   = Memoize.memoize createButton
            //    let createInputM    = Memoize.memoize createInput
            //    let createTextAreaM = Memoize.memoize createTextArea
            //    let createElementM  = Memoize.memoize createElement
            //    let createDocM      = Memoize.memoize createDoc
            //    let createTemplateM = Memoize.memoize createTemplate
            //    let createConcatM   = Memoize.memoize createConcat
            //    let createVarM      = Memoize.memoize createVar
            //    let createViewM     = Memoize.memoize createView
            //    let createActionM   = Memoize.memoize createAction
            //
            //    let entryDoc  n doc = AF.newDoc  n (lazy doc    ) |> EntryDoc    |> Some
            //    let entryVar  n v   = AF.newVar  n  v             |> EntryVar    |> Some
            //    let entryView n w   = AF.newViw  n  w             |> EntryView   |> Some
            //    let entryAct  n a   = AF.newActF n  a             |> EntryAction |> Some
            //
            //    let createEntryO lytNm (line:string) =
            //        try
            //            match splitTokens line with
            //            |   Identifier name :: Vertical   :: Measures measures          :: docs    -> entryDoc  <| AF.PlgElemName name <| createSplitterM(lytNm, name, true , measures, docs ) 
            //            |   Identifier name :: Horizontal :: Measures measures          :: docs    -> entryDoc  <| AF.PlgElemName name <| createSplitterM(lytNm, name, false, measures, docs ) 
            //            | [ Identifier name ;  Button     ;  Identifier act    ;  attrs ;  text  ] -> entryDoc  <| AF.PlgElemName name <| createButtonM  (lytNm, name, act  , attrs   , text ) 
            //            | [ Identifier name ;  Input      ;  Identifier var    ;  attrs          ] -> entryDoc  <| AF.PlgElemName name <| createInputM   (lytNm, name, var  , attrs          ) 
            //            | [ Identifier name ;  TextArea   ;  Identifier var    ;  attrs          ] -> entryDoc  <| AF.PlgElemName name <| createTextAreaM(lytNm, name, var  , attrs          ) 
            //            | [ Identifier name ;  Var        ;                       (S v)          ] -> entryVar  <| AF.PlgElemName name <| createVarM     (lytNm, name, v                     ) 
            //            |   Identifier name :: Doc        :: (S doc  )                  :: parms   -> entryDoc  <| AF.PlgElemName name <| createDocM     (lytNm, name, doc  , parms          ) 
            //            |   Identifier name :: View       ::                               parms   -> entryView <| AF.PlgElemName name <| createViewM    (lytNm, name,        parms          )
            //            |   Identifier name :: Template   :: (S temp )         :: attrs :: holes   -> entryDoc  <| AF.PlgElemName name <| createTemplateM(lytNm, name, temp , attrs   , holes)
            //            |   Identifier name :: Docs                                     :: docs    -> entryDoc  <| AF.PlgElemName name <| createConcatM  (lytNm, name,                  docs )
            //            |   Identifier name :: Action     :: Identifier act             :: parms   -> entryAct  <| AF.PlgElemName name <| createActionM  (lytNm, name, act  , parms          )
            //            |   Identifier name :: Elem elem                       :: attrs :: docs    -> entryDoc  <| AF.PlgElemName name <| createElementM (lytNm, name, elem , attrs   , docs ) 
            //            | _                                                                        -> None
            //        with e -> 
            //            None
            
                module Syntax =
            
                    type ItemRef =
                    | LocalRef of string
                    | FullRef  of string * string
            
                    type DocRef = DocRef of ItemRef
                    type ActRef = ActRef of ItemRef
                    type VarRef = VarRef of ItemRef
                    type ViwRef = ViwRef of ItemRef
            
                    //let pairOfDocs lytNm docs =
                    //    currentViewTriggger 
                    //    |> View.Map (fun _ -> getAllDocs lytNm docs )
                    //    |> View.Map (
                    //        function 
                    //        | [ doc1 ; doc2 ] -> doc1, doc2
                    //        | _               -> sprintf "splitter expects exactly 2 elements %A" docs |> AF.errDoc, "part 2" |> AF.errDoc
                    //    ) |> (fun dsW -> View.Map fst dsW |> Doc.EmbedView, View.Map snd dsW |> Doc.EmbedView )
            
                    type TextVal =
                    | TvConst  of string
                    | TvVarRef of VarRef
                    | TvViwRef of ViwRef
                    | TvActRef of ActRef
                    | TvDocRef of DocRef
            
                    type TextValL = TextVal list
            
                    type AttrVal =
                    | AtStyle of string * TextValL
                    | AtAttr  of string * TextValL
                    | AtAct   of string * ActRef
            
                    type NodeRef =
                    | NdTextValL of TextValL
                    | NdDocRef   of DocRef
                    | NdVarRef   of VarRef
                    | NdViwRef   of ViwRef
            
                    type ParmRef =
                    | PrTextValL of TextValL
                    | PrDocRef   of DocRef
                    | PrVarRef   of VarRef
                    | PrViwRef   of ViwRef
                    | PrActRef   of ActRef
            
                    type RefType =
                    | RDoc
                    | RVar
                    | RViw
                    | RAct
                    | RPlg
            
                    type ElemNames = Map<string, RefType>
                    type ElemName  = string * RefType
            
                    type SplitterDef = SplitterDef of vertical:bool * Measures * DocRef * DocRef
                    type ButtonDef   = ButtonDef   of ActRef * AttrVal[] * TextValL
                    type InputDef    = InputDef    of VarRef * AttrVal[]
                    type TextAreaDef = TextAreaDef of VarRef * AttrVal[]
                    type DocFDef     = DocFDef     of DocRef * ParmRef list
                    type ConcatDef   = ConcatDef   of NodeRef list
                    type ElementDef  = ElementDef  of string * ParmRef * NodeRef list
                    type TemplateDef = { 
                        tmpName : string 
                        vars    : (string * VarRef )[]
                        views   : (string * ParmRef)[]
                        docs    : (string * DocRef )[] 
                        actions : (string * ActRef )[]
                        attrs   : ParmRef
                    }
            
                    let templateDef nm ats vs ws ds acs = { 
                        tmpName = nm
                        attrs   = ats
                        vars    = vs
                        views   = ws
                        docs    = ds
                        actions = acs
                    }
            
                    type ActDef      = ActDef      of ActRef * ParmRef list
                    type ActDefs     = ActDefs     of ActRef  list
                    type VarDef      = VarDef      of string
                    type ViwDef      = ViwDef      of ParmRef list
                    type VJSDef      = VJSDef      of ParmRef list
                    type PlgDef      = PlgDef      of ElemNames
                    type DocDef      = 
                    | DcSplitter of SplitterDef
                    | DcButton   of ButtonDef
                    | DcInput    of InputDef
                    | DcTextArea of TextAreaDef
                    | DcDocF     of DocFDef
                    | DcConcat   of ConcatDef
                    | DcElement  of ElementDef
                    | DcTemplate of TemplateDef
            
                    type Entry =
                    | EnDocDef  of DocDef
                    | EnActDef  of ActDef
                    | EnActDefs of ActDefs
                    | EnVarDef  of VarDef
                    | EnViwDef  of ViwDef
                    | EnVJSDef  of VJSDef
                    | EnPlgDef  of PlgDef
                    | EnPlgRef  of ElemName
            
                    type EntryDef = EntryDef of string * Entry
            
                    let entryDef  n e = EntryDef(n, e)
                    let entryDoc  n d = EnDocDef  d |> entryDef n |> Some
                    let entryAct  n a = EnActDef  a |> entryDef n |> Some
                    let entryActs n a = EnActDefs a |> entryDef n |> Some
                    let entryView n w = EnViwDef  w |> entryDef n |> Some
                    let entryVJS  n w = EnVJSDef  w |> entryDef n |> Some
                    let entryVar  n v = EnVarDef  v |> entryDef n |> Some
                    let entryPlg  n p = EnPlgDef  p |> entryDef n |> Some
                    let entryRef  n e = EnPlgRef  e |> entryDef n |> Some
            
                    let (|R|_|) = function
                    | Identifier n ->
                        match n.Split '.' with
                        | [|     n |] -> LocalRef n    |> Some
                        | [| l ; n |] -> FullRef(l, n) |> Some
                        | _ -> None
                    | _ -> None
            
                    let createEntryO (getType:ItemRef -> RefType * Entry option) lytNm (line:string) =
                        let (|Rt|_|) = function
                        | R itr -> Some (getType itr, itr)
                        |_      -> None
            
                        let (|DocRf|_|) = function
                        | Rt((RDoc, _), itr) -> Some(DocRef itr)
                        |_-> None
                        let (|VarRf|_|) = function
                        | Rt((RVar, _), itr) -> Some(VarRef itr)
                        |_-> None
                        let (|ViwRf|_|) = function
                        | Rt((RViw, _), itr) -> Some(ViwRef itr)
                        |_-> None
                        let (|ActRf|_|) = function
                        | Rt((RAct, _), itr) -> Some(ActRef itr)
                        |_-> None
                        let (|PlgRf|_|) = function
                        | Rt((RPlg, Some(EnPlgRef el)), itr) -> Some(el) 
                        |_-> None
            
                        let (|Name|_|) = function
                        | R(LocalRef nm) -> Some nm
                        |_               -> None
            
                        let (|NamU|_|) = function
                        | Name nm when nm.StartsWith "_" -> Some nm
                        |_                               -> None
            
                        let (|Tr|_|) = function
                        | VarRf vr -> TvVarRef vr |> Some
                        | ViwRf wr -> TvViwRef wr |> Some
                        | ActRf wr -> TvActRef wr |> Some
                        |_-> None
            
                        let (|Indi|_|) txt =
                            match txt |> String.delimitedO "@{" "}" with
                            | Some(bef, nm, aft) -> Some(bef, UnQuoted nm, aft)
                            |_                   -> None
            
                        let rec (|Tx|_|) txt =
                            match txt with
                            | Indi(bef, Tr tv, aft) ->
                                    let tl = if bef = "" then [ tv ] else [ TvConst bef ; tv ]
                                    match aft with
                                    | ""    -> Some tl
                                    | Tx ta -> Some(tl @ ta)
                                    |_      -> None
                            | Indi(_, _, _) -> None
                            |_              -> Some [ TvConst txt ]
            
                        let (|ActI|_|) txt =
                            match txt with
                            | Indi(bef, ActRf ar, aft) when bef.Trim() = "" && aft.Trim() = "" -> Some ar
                            |_                                                                 -> None
            
                        let (|QTx|_|) = function
                        | Quoted (Tx tv) -> tv |> Some
                        |_-> None
            
                        let (|STx|_|) = function
                        | QTx [TvConst v] -> v |> Some
                        |_-> None
            
                        let (|At|_|) = function 
                        | Quoted s ->
                            splitSemiColon s
                            |> Seq.choose(fun a ->
                                match splitInTwo '=' a with
                                | [| nm ; ActI  ar |] -> AtAct  (nm.Trim(), ar)  |> Some
                                | [| nm ; Tx    vl |] -> AtAttr (nm.Trim(), vl)  |> Some
                                |_->
                                match splitInTwo ':' a with
                                | [| nm ; Tx vl |] -> AtStyle(nm.Trim(), vl) |> Some
                                |_->    failwithf "Attributes should be like: \"name=val\" or \"name:val\" and separated by ';' : %s" a
                            )
                            |> Seq.toArray
                            |> Some
                        |_-> None
            
                        let (|Pr|_|) = function 
                        | QTx   v -> Some (PrTextValL v)
                        | DocRf v -> Some (PrDocRef   v)
                        | VarRf v -> Some (PrVarRef   v)
                        | ViwRf v -> Some (PrViwRef   v)
                        | ActRf v -> Some (PrActRef   v)
                        |_        -> None
            
                        let (|Vs|_|) = function 
                        | Quoted s ->
                            splitSemiColon s
                            |> Seq.choose(fun a ->
                                match splitInTwo ':' a |> Array.map UnQuoted with
                                | [| Name nm ; VarRf v |] -> (nm, v) |> Some
                                |_->    failwithf "Expecting Vars \"name:var\" separated by ';' : %s" a
                            )
                            |> Seq.toArray
                            |> Some
                        |_-> None
            
                        let (|Ws|_|) = function 
                        | Quoted s ->
                            splitSemiColon s
                            |> Seq.choose(fun a ->
                                match splitInTwo ':' a |> Array.map splitTokens with
                                | [| [ Name nm ] ; [ Pr v ] |] -> (nm, v) |> Some
                                |_->    failwithf "Expecting Views \"name:view\" separated by ';' : %s" a
                            )
                            |> Seq.toArray
                            |> Some
                        |_-> None
            
                        let (|Ds|_|) = function 
                        | Quoted s ->
                            splitSemiColon s
                            |> Seq.choose(fun a ->
                                match splitInTwo ':' a |> Array.map UnQuoted with
                                | [| Name nm ; DocRf v |] -> (nm, v) |> Some
                                |_->    failwithf "Expecting Docs \"name:doc\" separated by ';' : %s" a
                            )
                            |> Seq.toArray
                            |> Some
                        |_-> None
            
                        let rec (|Prs|_|) = function
                        | []                -> Some []
                        | Pr pr :: Prs rest -> Some( pr :: rest)
                        |_                  -> None
            
                        let rec (|ActRfs|_|)       = function
                        | []                      -> Some []
                        | ActRf ar :: ActRfs rest -> Some( ar :: rest)
                        |_                        -> None
            
                        let (|Acs|_|) = function 
                        | Quoted s ->
                            splitSemiColon s
                            |> Seq.choose(fun a ->
                                match splitInTwo ':' a |> Array.map splitTokens with
                                | [| [ Name nm ] ; [ ActRf v ] |] -> (nm, v) |> Some
                                |_->    failwithf "Expecting Actions \"name:action\" separated by ';' : %s" a
                            )
                            |> Seq.toArray
                            |> Some
                        |_-> None
            
                        let (|Nd|_|) = function 
                        | QTx   v -> Some (NdTextValL v)
                        | DocRf v -> Some (NdDocRef   v)
                        | VarRf v -> Some (NdVarRef   v)
                        | ViwRf v -> Some (NdViwRef   v)
                        |_        -> None
            
                        let rec (|Nds|_|) = function
                        | []                -> Some []
                        | Nd nd :: Nds rest -> Some( nd :: rest)
                        |_                  -> None
            
                        let rec (|Pgs|_|) = function
                        | []                -> Some []
                        | PlgRf el :: Pgs rest -> Some( el :: rest)
                        |_                  -> None
            
                        match splitTokens line with
                        |   Name name :: PlugIn     :: Pgs els                                   -> entryPlg  name <| PlgDef  (Map els )
                        | [ NamU name ;  Doc        ;  Name nm                                 ] -> entryRef  name <| ElemName(nm, RDoc)
                        | [ NamU name ;  Var        ;  Name nm                                 ] -> entryRef  name <| ElemName(nm, RVar)
                        | [ NamU name ;  View       ;  Name nm                                 ] -> entryRef  name <| ElemName(nm, RViw)
                        | [ NamU name ;  Action     ;  Name nm                                 ] -> entryRef  name <| ElemName(nm, RAct)
                    (**)| [ Name name ;  Vertical   ;  Measures measures ;  DocRf l ; DocRf r  ] -> entryDoc  name <| DcSplitter(SplitterDef(true , measures, l, r) )
                    (**)| [ Name name ;  Horizontal ;  Measures measures ;  DocRf l ; DocRf r  ] -> entryDoc  name <| DcSplitter(SplitterDef(false, measures, l, r) ) 
                    (**)| [ Name name ;  Button     ;  ActRf      act    ;  At att  ; QTx text ] -> entryDoc  name <| DcButton  (ButtonDef  (act  , att     , text) )
                    (**)| [ Name name ;  Input      ;  VarRf      var    ;  At att             ] -> entryDoc  name <| DcInput   (InputDef   (var  , att           ) )
                    (**)| [ Name name ;  TextArea   ;  VarRf      var    ;  At att             ] -> entryDoc  name <| DcTextArea(TextAreaDef(var  , att           ) )
                        | [ Name name ;  Var        ;                       STx v              ] -> entryVar  name <| VarDef    (v.Trim())
                        |   Name name :: Doc        :: DocRf      dr               :: Prs    ps  -> entryDoc  name <| DcDocF    (DocFDef    ( dr  , ps            ) )
                        |   Name name :: View       ::                                Prs    ps  -> entryView name <| ViwDef           ps
                        |   Name name :: ViewJS     ::                                Prs    ps  -> entryVJS  name <| VJSDef           ps
                        |   Name name :: Docs                                      :: Nds    ns  -> entryDoc  name <| DcConcat  (ConcatDef                  ns      )
                        |   Name name :: Actions    ::                                ActRfs acs -> entryActs name <| ActDefs  acs
                        |   Name name :: Action     :: ActRf      act              :: Prs    ps  -> entryAct  name <| ActDef  ( act  , ps          )
                        | [ Name name ;  Template   ;  Name tn; Pr att; Ws w; Ds d; Vs v; Acs a] -> entryDoc  name <| DcTemplate (templateDef tn att v w d a )
                        |   Name name :: Elem elem  ::           Pr att            :: Nds    ns  -> entryDoc  name <| DcElement (ElementDef(elem , att   , ns ) )
                        | _                                                                      -> None
            
                    let createEntryO2 (lytNm:AF.PlugInName) (refs:System.Collections.Generic.Dictionary<string, _>) =
                        let addR nm en = if refs.ContainsKey nm then Result.errorf "Already exists %s : %A " nm en else refs.Add(nm, en) ; Ok()
                        let ok   nm en = addR nm en |> Result.map (fun () -> nm, en)
                        let ko msg (line:string) =
                            let nm = line.Split([| ' ' ; '\t' |], System.StringSplitOptions.RemoveEmptyEntries) |> Seq.head
                            addR nm (ElementDef("div", PrTextValL [], [NdTextValL [ TvConst msg ] ] ) |> DcElement |> EnDocDef )
                            |> Result.bind (fun () -> Result.Error msg)
                        let getRef nm =
                            try refs.[nm]
                            with e -> failwithf "Could not find reference to %s" nm
                        let getType rf = 
                            match rf with
                            | LocalRef      nm  -> 
                                let entry = getRef nm
                                match entry with
                                | EnDocDef  _ -> RDoc
                                | EnActDef  _ -> RAct
                                | EnActDefs _ -> RAct
                                | EnVarDef  _ -> RVar
                                | EnViwDef  _ -> RViw
                                | EnVJSDef  _ -> RViw
                                | EnPlgRef  _ -> RPlg
                                | EnPlgDef  _ -> failwithf "PlugIn should not be referenced by itself: %A" rf
                                , Some entry
                            | FullRef  (ly, nm) ->
                                try
                                    getRef ly
                                    |> function
                                    | EnPlgDef(PlgDef ps) -> try ps.[nm] with e-> failwithf "Could not find reference to %s.%s" ly nm
                                    | _                   -> failwithf "PlugIn not registered: %A" rf
                                    , None
                                with e ->
                                    match AF.tryGetPlugIn (AF.PlugInName ly) with
                                    | None    -> failwith e.Message
                                    | Some pg ->
                                    let nmm = AF.PlgElemName nm
                                    if   pg.plgDocs   .ContainsKey nmm then RDoc
                                    elif pg.plgActions.ContainsKey nmm then RAct
                                    elif pg.plgVars   .ContainsKey nmm then RVar
                                    elif pg.plgViews  .ContainsKey nmm then RViw
                                    else failwithf "Could not find reference to %s.%s" ly nm
                                    , None
                        fun (line:string) ->
                            try 
                                createEntryO getType lytNm line
                                |> function
                                | Some(EntryDef(nm, en)) ->         ok nm en
                                | None                   -> line |> ko (sprintf "Line not matched!: %s" line)
                            with e                       -> line |> ko e.Message
                            |> Some
            
                module Layout =
                    open ParseO
            
                    type Node = 
                        | Node        of string []
                        | SubSplitter of Splitter
            
                    and Splitter =
                        Splitter of bool * Measures * Node * Node
            
                    let extractMeasuresO (m:string) =
                        match m.Split([| ' ' |], System.StringSplitOptions.RemoveEmptyEntries) with
                        | [|           Int v          |] -> Some (Fixed   (           float (abs(v)), v >= 0   ) ) 
                        | [| Int min ; Int v; Int max |] -> Some (Variable(float min, float      v  , float max) )
                        | _                              -> None
            
                    let horizontalSplit (lines:string[]) =
                        lines
                        |> Seq.indexed
                        |> Seq.choose (fun (i, l) ->
                            match l with
                            | REGEX "^ *--+([ ^v0-9]*)-* *$" "" p -> 
                                let ms    = p 
                                            |> Seq.tryItem 1 
                                            |> Option.bind ((fun s -> s.Replace("^", "").Replace("v", "-") ) >> extractMeasuresO) 
                                            |> Option.defaultValue (Variable(5., 50., 95.))
                                Some((i, ms), l.IndexOf '-')
                            | _ -> None
                        )
                        |> Seq.sortBy snd
                        |> Seq.tryHead
                        |> Option.map fst
                        |> Option.map (fun (i, ms) ->
                            lines.[.. i - 1]
                          , lines.[i + 1.. ]
                          , ms
                        )
            
                    let transpose (lines:string[]) =
                        let max   = lines |> Seq.map (fun l -> l.Length) |> Seq.max
                        [|
                            for i in 0..max-1 do
                                yield 
                                    new System.String( [| for l in lines do yield if l.Length > i then l.[i] else ' ' |])
                                    
                        |]
            
                    let verticalSplit (lyt:string[]) =
                        let lines = transpose lyt
                        lines
                        |> Seq.indexed
                        |> Seq.choose (fun (i, l) -> 
                            match l with
                            | REGEX @"^ *\|+ *$" "" [| _ |] -> Some(i, l.IndexOf '|')
                            | _ -> None
                        )
                        |> Seq.sortBy snd
                        |> Seq.tryHead
                        |> Option.map fst
                        |> Option.map (fun i -> lines.[.. i - 1] |> transpose
                                              , lines.[i + 1 ..] |> transpose )
                        |> Option.map (fun (l,r) ->
                            l |> Array.filter(extractMeasuresO >> (=) None),
                            r |> Array.filter(extractMeasuresO >> (=) None),
                            seq {
                                yield! l |> Seq.choose(extractMeasuresO)
                                yield! r |> Seq.choose(extractMeasuresO) |> Seq.map (function Fixed(v, true) -> Fixed(v, false) | m -> m)
                            } 
                            |> Seq.tryHead
                            |> Option.defaultValue (Variable(5., 50., 95.))
                        )
            
                    let cleanSpaces (lyt:string[]) = 
                        lyt 
                        |> String.concat " "
                        |> fun s -> s.Split([| " " |], System.StringSplitOptions.RemoveEmptyEntries)
                        |> Array.filter(function Int _ -> false |_-> true)
            
                    let rec extractNodes lyt =
                        let checkSplitter dir m one two =
                            match extractNodes one, extractNodes two with
                            | Node [||], other
                            | other    , Node [||] -> other
                            | nOne     , nTwo      -> Splitter(dir, m, nOne, nTwo) |> SubSplitter
                        match horizontalSplit lyt with
                        | None -> 
                            match verticalSplit lyt with
                            | None              -> Node (cleanSpaces lyt)
                            | Some(one, two, m) -> checkSplitter true  m one two
                        |     Some(one, two, m) -> checkSplitter false m one two
            
                    let rec createLayoutDefinitions nameBase node =
                        match node with
                        | Node [|      |] -> "___"    , [||]
                        | Node [| elem |] ->  elem    , [||]
                        | Node    svrl    ->  nameBase, [| nameBase + " div \"\" " + String.concat " " svrl |]
                        | SubSplitter(Splitter(dir, meas, one, two)) ->
                            let name1, def1 = createLayoutDefinitions (nameBase + "_1") one
                            let name2, def2 = createLayoutDefinitions (nameBase + "_2") two
                            nameBase, [| yield [ nameBase  ; (if dir then "vertical" else "horizontal") ; meas.ToString() ; name1 ; name2 ] |> String.concat " " 
                                         yield! def1
                                         yield! def2 |]
            
                let emptyLine (l:string) = 
                    let lt = l.Trim()
                    lt = "" || lt.StartsWith "//"
                let notEmpty = emptyLine >> not
            
                let getExtraLines pred (ls: string[]) =
                    ls 
                    |> Seq.skip 1 
                    |> Seq.tryFindIndex (fun l -> notEmpty l && not(pred l) )
                    |> Option.map ((+) 1)
                    |> Option.defaultValue ls.Length
                    |> fun i -> 
                        ls.[1..i-1] |> Array.filter notEmpty, ls.[i..] 
            
                let rec createLines baseName n (names: string[]) (lines: string[]) i (ls:string[]) =
                    let prefix  = String.replicate n ":"
                    let prefix2 = ":" + prefix
                    match Seq.tryHead ls with
                    | None   -> names, lines
                    | Some l ->
                    match l.Trim() with
                    | String.StartsWith prefix l ->
                        let children, rest = ls |> getExtraLines(fun (l:string) -> l.Trim().StartsWith prefix2)
                        let name = sprintf "_%s_%d" baseName i
                        let childNames, childrenLines = createLines name (n+1) [||] [||] 1 children
                        let names2 = [| yield! names ; yield name |]
                        let lines2 = [| yield! lines
                                        yield! childrenLines
                                        yield  name + " " + l + " " + String.concat " " childNames
                                     |]
                        createLines baseName n names2 lines2 (i+1) rest
                    | _   -> names, lines
            
                let processLines f ls =
                    let rec processLinesR (ls: string[]) =
                        match Seq.tryHead ls with
                        | None   -> [||]
                        | Some l ->
                        match splitTokens l with
                        | [ Identifier name ;  Layout ] ->
                            let lyt, rest = ls |> getExtraLines(fun (l:string) -> l.Trim().StartsWith "|")
                            lyt
                            |> Layout.extractNodes
                            |> Layout.createLayoutDefinitions name
                            |> snd
                            |> Array.append <| rest
                            |> processLinesR
                        |[] -> processLinesR ls.[1..]
                        | _ ->
                            let docs, rest = ls |> getExtraLines(fun (l:string) -> l.Trim().StartsWith ":")
                            if docs.Length > 0 then
                                let prefix = l.Split([|' '|], System.StringSplitOptions.RemoveEmptyEntries) |> Seq.item 0
                                let names, ls = createLines prefix 1 [||] [||] 1 docs
                                [|  yield! ls
                                    yield  l + " " + String.concat " " names
                                    yield! rest
                                |]
                                |> processLinesR
                            else
                                [| 
                                    match f l with
                                    | Some r -> yield r
                                    | _ -> ()
                                    yield! processLinesR rest
                                |]
                    processLinesR ls 
            
                let processText f (txt:string) =
                    txt.Split(  [|'\n' ; '\r' |], System.StringSplitOptions.RemoveEmptyEntries)
                    |> processLines f
            
                let parseEntries (lytNm:AF.PlugInName) txt =
                    let localRefs = System.Collections.Generic.Dictionary<_,_>()
                    sprintf "PlugInName View \"%s\"\n%s" lytNm.Id txt
                    |> processText (Syntax.createEntryO2 lytNm localRefs)
            
                //let createEntries lytNm = processText (createEntryO lytNm)
                                        //|> Seq.choose (createEntryO lytNm)
                                        //|> Seq.toArray
            
                let getText lytNm txtName =
                    match txtName with
                    | Identifier id -> let plg, nm = AF.splitName lytNm id 
                                       AF.tryGetViw plg nm
                                       |> Option.map (fun viw -> Doc.TextView viw.viwView    )
                                       |> Option.defaultWith (fun () -> 
                                       AF.tryGetVar plg nm
                                       |> Option.map (fun var -> Doc.TextView var.varVar.View)
                                       |> Option.defaultWith (fun () -> Html.text id))
                    | (S txt)       -> Html.text txt
            
                let getDocEntries entries =
                    entries
                    |> Seq.choose (function | EntryDoc doc -> Some doc |_-> None)
                    |> Seq.groupBy (fun d -> d.docName) |> Seq.map (snd >> Seq.last)
            
                let getVarEntries entries =
                    entries
                    |> Seq.choose (function | EntryVar var -> Some var |_-> None)
                    |> Seq.groupBy (fun v -> v.varName) |> Seq.map (snd >> Seq.last)
            
                let getViewEntries entries =
                    entries
                    |> Seq.choose (function | EntryView vw -> Some vw |_-> None)
                    |> Seq.groupBy (fun v -> v.viwName) |> Seq.map (snd >> Seq.last)
            
                let getActionEntries entries =
                    entries
                    |> Seq.choose (function | EntryAction ac -> Some ac |_-> None)
                    |> Seq.groupBy (fun v -> v.actName) |> Seq.map (snd >> Seq.last)
            
                let getQueryEntries entries =
                    entries
                    |> Seq.choose (function | EntryQuery qr -> Some qr |_-> None)
                    |> Seq.groupBy (fun v -> v.qryName) |> Seq.map (snd >> Seq.last)
            
            //    let inputFile lytNm attrs labelName actName doc =
            //        splitName lytNm actName
            //        ||> AF.tryGetAct
            //        |> Option.map(fun act -> 
            //            Html.div (getAttrs lytNm (Quoted attrs)) [
            //                Html.div              [ attr.``class`` "input-group"       ] [
            //                    Html.span         [ attr.``class`` "input-group-btn"   ] [ 
            //                        Html.label    [ attr.``class`` "btn"               ] [ 
            //                            getText lytNm (Quoted labelName)
            //                            Html.input[ attr.``class`` "form-control" 
            //                                        attr.``type`` "file" 
            //                                        Attr.Style "display" "none" 
            //                                        Html.on.click (fun el ev -> el?value <- "")
            //                                        Html.on.change(fun el ev -> act.actFunction |> AF.callFunction el () )
            //                                        ] []
            //                        ]
            //                    ]
            //                    (if doc <> "" then singleDoc lytNm [ UnQuoted doc ] else Doc.Empty)
            //                ]
            //            ]
            //        ) |> Option.defaultWith(fun () ->  sprintf "Action not found %s" actName |> AF.errDoc )
            //
            //    let inputLabel lytNm attrs labelName varName =
            //        splitName  lytNm varName
            //        ||> AF.tryGetVar
            //        |> Option.map(fun var -> 
            //            Html.div (getAttrs lytNm (Quoted attrs)) [
            //                Html.div      [ attr.``class`` "input-group"       ] [
            //                    Html.span [ attr.``class`` "input-group-addon" ] [ getText lytNm (Quoted labelName) ]
            //                    Doc.Input [ attr.``class`` "form-control"      ]   var.varVar
            //                ]
            //            ]
            //        ) |> Option.defaultWith(fun () ->  sprintf "Var not found %s" varName |> AF.errDoc )
            
                let none x = Html.span [][]
            
                let refreshEntries lytN entries =
                    let plg =   match AF.tryGetPlugIn lytN with
                                | Some plg -> plg
                                | None     -> 
                                    let plg = { AF.defaultPlugIn() with plgName = lytN }
                                    AF.addPlugIn plg
                                    plg
                    ListModel.refreshLM plg.plgVars    [| yield! getVarEntries    entries |]
                    ListModel.refreshLM plg.plgViews   [| yield! getViewEntries   entries |]
                    ListModel.refreshLM plg.plgActions [| yield! getActionEntries entries |]
                    ListModel.refreshLM plg.plgQueries [| yield! getQueryEntries  entries |]
                    ListModel.refreshLM plg.plgDocs    [| 
                        yield! getDocEntries    entries
                        //yield  AF.newDocF <| AF.PlgElemName "InputFile"  <| AF.FunDoc4(inputFile  lytN, "attrs", "Label", "Action", "[Doc]")
                        //yield  AF.newDocF <| AF.PlgElemName "InputLabel" <| AF.FunDoc3(inputLabel lytN, "attrs", "Label", "Var"            )
                        //yield  AF.newDocF <| AF.PlgElemName "none"       <| AF.FunDoc1(none           , "x"                                )
                    |]
            
            //    let addLayout (lyt:LayoutEngine) =
            //        lyt.lytDefinition.View |> View.Sink(fun txt ->
            //            currentViewTriggger <- V ( lyt.lytDefinition.V + AF.mainDocV.V)
            //            createEntries lyt.lytName txt
            //            |> Seq.append [ AF.newVar (AF.PlgElemName "Layout") lyt.lytDefinition |> EntryVar ]
            //            |> refreshEntries lyt.lytName
            //        )
            
                let newLyt name (lyt:string) = {
                    lytName       = name
                    lytDefinition = Var.Create lyt
                }
            
            //    let addNewLayout (name:obj) (layout:obj) =
            //        (if layout <> null then unbox layout else """
            //split horizontal 0-50-100 AppFramework.AppFwkClient Hello
            //Hello h1 "color:blue; class=btn-primary" "How are you today?" Ask
            //Ask Doc InputLabel "placeholder=Type you answer here..." "Answer:" AppFramework.mainDocV  
            //"""     |> String.unindentStr)
            //        |> newLyt (if layout <> null then unbox name else System.Guid.NewGuid() |> string |> fun s -> "Lyt_" + s.Replace("-", "") |> AF.PlugInName )
            //        |> addLayout
            //
            //    if IsClient then
            //        AF.tryGetPlugIn AF.defPlugInName
            //        |> Option.iter(fun plg ->
            //            plg.plgActions.Add <| ( AF.newActF <| AF.PlgElemName  "AddLayout" <| AF.FunAct2(addNewLayout, "[Name]", "[Layout]") )
            //        )
            
            module NewLY =
                //open FsRoot
                open WebSharper.UI
                open WebSharper.UI.Client
            
                open AppFramework
                module AF = AppFramework
            
                open Html
            
                open Depend.Operators
            
                let concat a b = sprintf "Concat(%d, %f)" a b 
                let aV = Var.Create 4
                let pa = aV.View
                let pb = 6.2
            
                let currentPlugInNameDef : PlugInName = PlugInName "NewLYx"
                let currentPlugInNameD                = Depend.dependByName "currentPlugInName" currentPlugInNameDef id
            
                module P =
                    let run pin (p:P<_>) = p.r |> run pin
            
                if IsClient then
            
                    let name       = Var.Create "World"
            
                    let checkName (n:string) = if n = "World".[0..n.Length-1] || n.Length <= 1 then "<---- Please enter your name" else "" 
            
                    let enterName  = ! checkName             <! name
                    let now        = ! (fun _ -> nowStamp()) <! name
            
                    let sayHello  =
                        let sayHello_0 = ! Doc.Concat <& "Hello @{name}!" <! enterName
                        let sayHello_1 = ! Doc.Concat <& "How are you?"
                        ! Doc.Concat <& sayHello_0       <! sayHello_1
            
                    let aString = Var.Lens aV string (fun _ -> int)
            
                    let main0 = ! concat <! aV <* 3.2
                    let main1 = !(sprintf "result = %s %s") <! main0 <* "main0"
                    let main  = ! h3 <& "color:@{name}; background:red; click=@{AppFramework.Hello}" <& "MAIN:" <! main1 <! main1 <! ":" <! sayHello <! ":" <! " Más >> " <! sayHello <! " <<"
            
                    let main2 = makeAViewDoc <| fun () -> h4 [ attr.styleDyn <| V("color:" + name.V) ] [ text "MAIN2:" ; Doc.TextView name.View] 
            
                    let appFwk = ! div <& "color:@{name}" <& "@{AppFramework.AppFwkClient}"
                    let split  = ! (LayoutEngine.variableSplitter false 0. 50. 100.) <& appFwk <& main
                    let split2 = ! (LayoutEngine.variableSplitter false 0. 50. 100.) <& appFwk <& main2
            
                    let callDocPFn pin pf = pf |> P.run pin |> callDoc
            
                    ()
                    
                //let pName = PlugInName "NewLY" 
            //
                //AF.plugin {
                //    plgName pName.Id
                //    plgVar  "name"      name
                //    plgVar  "a"         aString
                //    plgDoc  "split"     (lazy         (split      |> callDocPFn pName ) )
                //    plgDoc  "split2"    (lazy         (split2     |> callDocPFn pName ) )
                //    plgDoc  "main"      (lazy         (main       |> callDocPFn pName ) )
                //    plgDoc  "main2"     (lazy          main2                            )
                //    plgDoc  "sayHello"  (lazy         (sayHello   |> callDocPFn pName ) )
                //    plgDoc  "sayHello2" (lazy         (sayHello   |> callDocPFn pName ) )
                //}
                //|> AF.addPlugIn
            
            
                //[< SPAEntryPoint >]
                //let mainProgram() =
                //    do (StartAppFramework.startWithHtmlD 
                //        |> Depend.resolver [
                //            "AppFrameworkTemplate.html", AppFrameworkTemplate.html + SnippetTemplates.html
                //        ]) ()
            
                open LayoutEngine
                open LayoutEngine.Syntax
            
                let itemRefToTextType = function
                | LocalRef     t  -> Extract0.TReference t
                | FullRef(pr, er) -> Extract0.TReference (sprintf "%s.%s" pr er)
            
                let itemRefToString = function
                | LocalRef     t  -> t
                | FullRef(pr, er) -> (sprintf "%s.%s" pr er)
            
                let textValToTextType = function
                | TvConst  s          -> Extract0.TSimple  s
                | TvActRef (ActRef v)  
                | TvDocRef (DocRef v)  
                | TvVarRef (VarRef v)  
                | TvViwRef (ViwRef v) -> itemRefToTextType v
            
                let (|ActRVs|) = function | ActRef v -> [ TvVarRef (VarRef v)]
            
            //    let attrValToAttrD = Depend.depend {
            //        let! getTextValFromTextTypes = Extract0.getTextValFromTextTypesD
            //        let! getTextVal              = Extract0.getTextValD
            //        return
            //            function
            //            | AtStyle (an,        vs) -> vs, valToStyle an
            //            | AtAct   (an, ActRVs vs) 
            //            | AtAttr  (an,        vs) -> vs, valToAttr  an
            //            >> fun (vs, f) -> 
            //                List.map textValToTextType vs
            //                |> getTextValFromTextTypes
            //                |> f
            //    }
            
                let nodeRefToDocD = Depend.depend {
                    let! getDocFromTextTypes = Extract0.getDocFromTextTypesD
                    return function
                        | NdTextValL       vs ->  vs |> List.map textValToTextType 
                        | NdDocRef (DocRef r)
                        | NdVarRef (VarRef r)
                        | NdViwRef (ViwRef r) -> [ itemRefToTextType r ]
                        >> getDocFromTextTypes
                }
            
                let varRefToVarD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    return fun (VarRef ref) ->
                        let r = itemRefToString ref
                        AF.splitName currentPlugInName r
                        ||> AF.tryGetVar
                        |>  Option.map (fun v -> v.varVar)
                        |>  Option.defaultWith(fun () -> Var.Make (View.Const <| sprintf "Could not find var %s" r) ignore )
                }
            
                let actRefToActD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    return fun (ActRef ref) ->
                        let r = itemRefToString ref
                        AF.splitName currentPlugInName r
                        ||> AF.tryGetAct
                        //|>  Option.map (fun v -> v.)
                        |>  Option.defaultWith(fun () -> AF.newAct (PlgElemName r) (fun () -> printfn "Could not find action %s" r) ) 
                }
            
                let getParamD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    let! getTextValFromSeq = Extract0.getTextValFromSeqD
                    return fun (p:ParmRef) ->
                        let refToSplit = itemRefToString >> AF.splitName currentPlugInName
                        match p with
                        | PrTextValL       ts -> ts|> List.map textValToTextType   |> getTextValFromSeq |> Val.toView |> View.Map box
                        | PrDocRef (DocRef r) -> r |> refToSplit ||> AF.tryGetDocW |> View.Map  (Option.map ((fun d -> d.docDoc     ) >>          box ) >> Option.defaultWith (fun () -> sprintf "missing ref Doc %A"    r :> obj              ) )
                        | PrVarRef (VarRef r) -> r |> refToSplit ||> AF.tryGetVarW |> View.Bind (Option.map ((fun v -> v.varVar.View) >> View.Map box ) >> Option.defaultWith (fun () -> sprintf "missing ref Var %A"    r :> obj |> View.Const) )
                        | PrViwRef (ViwRef r) -> r |> refToSplit ||> AF.tryGetViwW |> View.Bind (Option.map ((fun v -> v.viwView    ) >> View.Map box ) >> Option.defaultWith (fun () -> sprintf "missing ref View %A"   r :> obj |> View.Const) )
                        | PrActRef (ActRef r) -> r |> refToSplit ||> AF.tryGetActW |> View.Map  (Option.map ((fun v -> v.actFunction) >>          box ) >> Option.defaultWith (fun () -> sprintf "missing ref Action %A" r :> obj              ) )
                }
            
                let itemRefToAbsolute lyt = 
                    function
                    | LocalRef     t  -> lyt, t
                    | FullRef(pr, er) -> pr , er
                    >> fun (a,b) -> sprintf "%s.%s" a b
            
                let getParam2D = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    let! getTextValFromSeq = Extract0.getTextValFromSeqD
                    return fun (p:ParmRef) ->
                        let toAbs = itemRefToAbsolute currentPlugInName.Id >> sprintf "@{%s}"
                        let toAbsRef = function 
                        | TvConst s-> s 
                        | TvVarRef (VarRef r) 
                        | TvActRef (ActRef r) 
                        | TvDocRef (DocRef r) 
                        | TvViwRef (ViwRef r) -> toAbs r
                        match p with
                        | PrTextValL       ts -> ts|> Seq.map toAbsRef |> String.concat ""
                        | PrViwRef (ViwRef r) 
                        | PrDocRef (DocRef r) 
                        | PrVarRef (VarRef r) 
                        | PrActRef (ActRef r) -> toAbs r
                }
            
                let getParamTextD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    let! getTextValFromSeq = Extract0.getTextValFromSeqD
                    return fun (p:ParmRef) f ->
                        let refToSplit = itemRefToString >> AF.splitName currentPlugInName
                        match p with
                        | PrTextValL       ts -> ts|> List.map textValToTextType  |> getTextValFromSeq |> Val.toView       |> View.Get (box >> f)
                        | PrDocRef (DocRef r) -> r |> refToSplit ||> AF.tryGetDoc |> Option.iter ((fun d -> d.docDoc     ) >>           box >> f  )
                        | PrVarRef (VarRef r) -> r |> refToSplit ||> AF.tryGetVar |> Option.iter ((fun v -> v.varVar.View) >> View.Get (box >> f) )
                        | PrViwRef (ViwRef r) -> r |> refToSplit ||> AF.tryGetViw |> Option.iter ((fun v -> v.viwView    ) >> View.Get (box >> f) )
                        | PrActRef (ActRef r) -> r |> refToSplit ||> AF.tryGetAct |> Option.iter ((fun v -> v.actFunction) >>           box >> f  )
                }
            
                let defVar(    lytN, n:string, v) = Var.Create v
                let defAction( lytN, n:string, ActRef ac:ActRef, ps:ParmRef list) =
                    Depend.depend {
                        let! currentPlugInName = currentPlugInNameD
                        let! getParamText      = getParamTextD
                        return (
                            let r     = itemRefToString ac
                            AF.splitName currentPlugInName r
                            ||> AF.tryGetAct
                            |>  Option.map          (fun act -> 
                                if ps = [] then act.actFunction else
                                match act.actFunction, ps with
                                | AF.FunAct1(f,_    ), [ t1     ] -> AF.FunAct0( fun () -> getParamText t1                             f              )
                                | AF.FunAct2(f,_, _ ), [ t1; t2 ] -> AF.FunAct0( fun () -> getParamText t1 (fun p1 -> getParamText t2 (f p1   ) )     )
                                | AF.FunAct2(f,_, n2), [ t1     ] -> AF.FunAct1((fun p2 -> getParamText t1 (fun p1 ->                  f p1 p2) ) , n2)
                                | _ -> AF.FunAct0 (fun () -> printfn "Parameters do not coincide for Action %s %A %A" r ps act )
                            )
                            |>  Option.defaultWith  (fun ()  -> AF.FunAct0 (fun () -> printfn "Action Not Found %s" r) )
                        )
                    } |> run lytN
                let defActions( lytN, n:string, acs:ActRef list) =
                    Depend.depend {
                        let! currentPlugInName = currentPlugInNameD
                        let! getParamText      = getParamTextD
                        return (fun () ->
                            acs
                            |> Seq.iter (fun (ActRef ac) -> 
                                let r     = itemRefToString ac
                                AF.splitName currentPlugInName r
                                ||> AF.tryGetAct
                                |>  Option.map(fun act -> act.actFunction)
                                |>  Option.defaultWith  (fun ()  -> AF.FunAct0 (fun () -> printfn "Action Not Found %s" r) )
                                |>  callFunction () ()
                            )
                        ) |> AF.FunAct0
                    } |> run lytN
                let defView( lytN, n:string, ps:ParmRef list) =
                    Depend.depend {
                        let! currentPlugInName = currentPlugInNameD
                        let! getParam2         = getParam2D
                        let! extractText       = extractTextD
                        return baseView |> View.Bind(fun _ ->
                            ps
                            |> View.traverseSeq (getParam2   >> extractText     )
                            |> View.Map         (Seq.toArray >> String.concat "")
                        )
                    } |> run lytN
                let defViewJS( lytN, n:string, ps:ParmRef list) =
                    Depend.depend {
                        let! currentPlugInName = currentPlugInNameD
                        let! getParam          = getParamD
                        return baseView |> View.Bind(fun _ ->
                            try
                                ps
                                |> View.traverseSeq getParam
                                |> View.Map Seq.toArray
                                |> View.Map (fun ar ->
                                    try match ar with
                                        | [|   |] -> "No JS function specified"
                                        | [| _ |] ->  JavaScript.JS.Eval (unbox ar.[0])                                                         |> string
                                        | _       -> (JavaScript.JS.Eval (unbox ar.[0]) |> unbox<JavaScript.FuncWithArgs<_,obj>>).Call ar.[1..] |> string
                                    with e -> e.Message
                                )
                            with e -> e.Message |> View.Const
                        )
                    } |> run lytN
                let defInput(   lytN, n:string, v   , attrs : AttrVal seq) = makeAViewDoc0 <| fun () -> (AF.errDocf "input deprecated use AF.Input"       )
                let defTextArea(lytN, n:string, v   , attrs : AttrVal seq) = makeAViewDoc0 <| fun () -> (AF.errDocf "TextArea deprecated use AF.TextArea" )
                let defElement( lytN, n:string, elem, attrs : ParmRef, docs:NodeRef list) = 
                    Depend.depend {
                        let! nodeRefToDoc  = nodeRefToDocD
                        let! extractAts    = extractAtsD
                        let! getParam2     = getParam2D
                        return
                            makeAViewDoc0 <| fun () ->
                                try
                                    Doc.Element elem
                                        <| extractAts (getParam2 attrs)
                                        <| (docs |> Seq.map nodeRefToDoc )
                                    :> Doc
                                with e -> text e.Message
                    } |> run   lytN
                let defConcat( lytN, n:string, docs:NodeRef list) = 
                    Depend.depend {
                        let! nodeRefToDoc  = nodeRefToDocD
                        return
                            makeAViewDoc0 <| fun () ->
                                docs |> Seq.map nodeRefToDoc |> Doc.Concat
                    } |> run   lytN
                let defDocF(   lytN, n:string, DocRef dc, ds:ParmRef list) =
                    Depend.depend {
                        let! currentPlugInName    = currentPlugInNameD
                        let! getParam2            = getParam2D
                        let  getP                 = getParam2
                        let rec passParm          = function
                            | AF.DocFunction.FunDoc0 f0           , _    ->  AF.DocFunction.JustDoc( f0()                )
                            | df                                  , []   ->                          df
                            | AF.DocFunction.JustDoc ld           , _    ->  AF.DocFunction.JustDoc  ld
                            | AF.DocFunction.FunDoc1(f1,_        ), a::r ->  AF.DocFunction.FunDoc0(fun () ->  getP a  |> f1 )
                            | AF.DocFunction.FunDoc2(f2,_,b      ), a::r -> (AF.DocFunction.FunDoc1(     f2 <| getP a,b      ),r) |> passParm
                            | AF.DocFunction.FunDoc3(f3,_,b,c    ), a::r -> (AF.DocFunction.FunDoc2(     f3 <| getP a,b,c    ),r) |> passParm
                            | AF.DocFunction.FunDoc4(f4,_,b,c,d  ), a::r -> (AF.DocFunction.FunDoc3(     f4 <| getP a,b,c,d  ),r) |> passParm
                            | AF.DocFunction.FunDoc5(f5,_,b,c,d,e), a::r -> (AF.DocFunction.FunDoc4(     f5 <| getP a,b,c,d,e),r) |> passParm
                        let lyt, elem = itemRefToString dc |> splitName currentPlugInName
                        return
                            lazy (
                                AF.tryGetDoc lyt elem
                                |> Option.map (fun d -> passParm(d.docDoc.Value, ds) )
                                |> Option.defaultWith  (fun ()  -> sprintf "Missing doc: %A" dc |> AF.errDoc |> AF.DocFunction.JustDoc)
                            )
                    } |> run   lytN
                let defButton( lytN, n:string, ac, attrs : AttrVal seq, tx:TextVal list) = makeAViewDoc0 <| fun () -> (AF.errDocf "Button deprecated use button \"click=@{Action}\"" )
            
                let defSplitter(lytN, n, v , m, DocRef l, DocRef r) =
                    Depend.depend {
                        let! getDocFromTextTypes = Extract0.getDocFromTextTypesD
                        return fun () -> 
                            let getDoc d = makeAViewDoc (fun () -> itemRefToTextType d |> List.singleton |> getDocFromTextTypes)
                            match m with
                            | Fixed    (pixel,    first) ->    fixedSplitter v pixel first   (getDoc l) (getDoc r)
                            | Variable (min, value, max) -> variableSplitter v min value max (getDoc l) (getDoc r)
                        
                    } |> run lytN
            
                let defTemplate(lytN, n, tmpDef : TemplateDef) =
                    Depend.depend {
                        let! nodeRefToDoc  = nodeRefToDocD
                        let! varRefToVar   = varRefToVarD
                        let! extractText   = extractTextD
                        let! extractAts    = extractAtsD
                        let! actRefToAct   = actRefToActD
                        let! getParam2     = getParam2D
                        return
                            makeAViewDoc0 <| fun () ->
                                let eventAct act = fun (el:JavaScript.Dom.Element) (ev:JavaScript.Dom.Event) -> act.actFunction |> AF.callFunction el ev
                                try
                                    let attrs = extractAts (getParam2 tmpDef.attrs)
                                    Client.Doc.LoadLocalTemplates "local"
                                    seq {
                                        yield!  tmpDef.vars    |> Seq.map (fun (nm, vr) -> TemplateHole.VarStr(  nm.ToLower(), varRefToVar               vr  ) )
                                        yield!  tmpDef.views   |> Seq.map (fun (nm, wr) -> TemplateHole.TextView(nm.ToLower(), extractText  (getParam2   wr) ) )
                                        yield!  tmpDef.docs    |> Seq.map (fun (nm, nr) -> TemplateHole.Elt(     nm.ToLower(), nodeRefToDoc (NdDocRef    nr) ) )
                                        yield!  tmpDef.actions |> Seq.map (fun (nm, ar) -> TemplateHole.Event(   nm.ToLower(), eventAct     (actRefToAct ar) ) )
                                    }
                                    |> (if Seq.isEmpty attrs then id else TemplateHole.Attribute("attrs", Attr.Concat attrs) |> Seq.singleton |> Seq.append)
                                    |> Client.Doc.NamedTemplate "local" (tmpDef.tmpName.ToLower() |> Some)
                                    ///                                //    | TDText  v   -> TemplateHole.Text(    nm.ToLower(), v )
                                    ///                                //    | TDView  vw  -> TemplateHole.TextView(nm.ToLower(), vw)
                                    ///                                //    | TDAct   act -> TemplateHole.Event(   nm.ToLower(), (fun el ev -> act.actFunction |> AF.callFunction el ev ))
                                    ///                                TemplateHole.Elt(nm.ToLower(), sprintf "Not implemented: %s" txt |> AF.errDoc) 
                                with e -> text e.Message
                    } |> run   lytN
            
                let initVal = "-<InitValue>-"
            
                let defVarM0      = Memoize.memoize defVar
                let defVarM(l,n,i)= defVarM0(l,n,initVal) |>! fun v -> if v.Value = initVal then v.Set i
                let defDocFM      = Memoize.memoize defDocF
                let defActionM    = Memoize.memoize defAction
                let defActionsM   = Memoize.memoize defActions
                let defButtonM    = Memoize.memoize defButton
                let defInputM     = Memoize.memoize defInput
                let defTextAreaM  = Memoize.memoize defTextArea
                let defElementM   = Memoize.memoize defElement
                let defConcatM    = Memoize.memoize defConcat
                let defViewM      = Memoize.memoize defView
                let defViewJSM    = Memoize.memoize defViewJS
                let defSplitterM  = Memoize.memoize defSplitter
                let defTemplateM  = Memoize.memoize defTemplate
            
                let generateEntries lytN =
                    Seq.choose(function
                        | n, EnVarDef ( VarDef      v                         ) -> defVarM(     lytN, n, v          ) |> AF.newVar  (AF.PlgElemName n) |> EntryVar    |> Some
                    (**)| n, EnDocDef ( DcSplitter (SplitterDef(v , m, l, r) )) -> defSplitterM(lytN, n, v , m, l, r) |> AF.newDoc0 (AF.PlgElemName n) |> EntryDoc    |> Some
                    (**)| n, EnDocDef ( DcButton   (ButtonDef(  ac, ats, tx) )) -> defButtonM(  lytN, n, ac, ats, tx) |> AF.newDoc0 (AF.PlgElemName n) |> EntryDoc    |> Some
                    (**)| n, EnDocDef ( DcInput    (InputDef(   v , ats    ) )) -> defInputM(   lytN, n, v , ats    ) |> AF.newDoc0 (AF.PlgElemName n) |> EntryDoc    |> Some
                    (**)| n, EnDocDef ( DcTextArea (TextAreaDef(v , ats    ) )) -> defTextAreaM(lytN, n, v , ats    ) |> AF.newDoc0 (AF.PlgElemName n) |> EntryDoc    |> Some
                        | n, EnDocDef ( DcConcat   (ConcatDef            ds  )) -> defConcatM(  lytN, n,          ds) |> AF.newDoc0 (AF.PlgElemName n) |> EntryDoc    |> Some
                        | n, EnDocDef ( DcElement  (ElementDef( el, ats, ds) )) -> defElementM( lytN, n, el, ats, ds) |> AF.newDoc0 (AF.PlgElemName n) |> EntryDoc    |> Some
                        | n, EnDocDef ( DcDocF     (DocFDef(    dc,      ds) )) -> defDocFM(    lytN, n, dc,      ds) |> AF.newDocL (AF.PlgElemName n) |> EntryDoc    |> Some
                        | n, EnActDef ( ActDef               (  ac, parms  )  ) -> defActionM(  lytN, n, ac, parms  ) |> AF.newActF (AF.PlgElemName n) |> EntryAction |> Some
                        | n, EnActDefs( ActDefs                 acs           ) -> defActionsM( lytN, n, acs        ) |> AF.newActF (AF.PlgElemName n) |> EntryAction |> Some
                        | n, EnViwDef ( ViwDef                      parms     ) -> defViewM(    lytN, n,     parms  ) |> AF.newViw  (AF.PlgElemName n) |> EntryView   |> Some
                        | n, EnVJSDef ( VJSDef                      parms     ) -> defViewJSM(  lytN, n,     parms  ) |> AF.newViw  (AF.PlgElemName n) |> EntryView   |> Some
                        | n, EnDocDef ( DcTemplate tmpDef                     ) -> defTemplateM(lytN, n,     tmpDef ) |> AF.newDoc0 (AF.PlgElemName n) |> EntryDoc    |> Some
                        | n, EnPlgRef  _ -> None
                        | n, EnPlgDef  _ -> None
                    )
            
                //let parseNewLayout lytN =
                //    LayoutEngine.parseEntries lytN
                //    >> Seq.choose(function Ok p  -> Some p | Error m -> print m ; None)
                //    >> generateEntries lytN
            
                let addNewLayout (lyt:LayoutEngine) =
                    let parseW      = lyt.lytDefinition.View |> View.Map (LayoutEngine.parseEntries lyt.lytName)
                    let errorsW     = parseW |> View.Map(Seq.choose(function Error msg -> Some msg |_-> None) >> String.concat "\n")
                    let defsW       = parseW |> View.Map(Seq.choose(function Ok    def -> Some def |_-> None) >> generateEntries lyt.lytName)
                    let entries     = [ AF.newVar (AF.PlgElemName "Layout"   ) lyt.lytDefinition |> EntryVar
                                        AF.newViw (AF.PlgElemName "ParseMsgs") errorsW           |> EntryView ]
                    defsW |> View.Sink( Seq.append entries >> refreshEntries lyt.lytName )
            
                let addLayout name content =
                    newLyt (AF.PlugInName name) content
                    |> addNewLayout
            
                let addNewLayoutAct (name:obj) (layout:obj) =
                    let name'   = if name   <> null                 then unbox name   else System.Guid.NewGuid() |> string |> fun s -> "Lyt_" + s.Replace("-", "")
                    let layout' = if layout <> null && name <> null then unbox layout else """
                                        perc  Var "50"
                                        perc2 Var "50"
                                        gap  Var "5px"
            
                                        Ask1 div "background:lightblue; height:100%"
                                        : Doc AF.InputLabel "placeholder=Type percentage here..." "Percentage (%):" perc
            
                                        Ask2a div "background:pink; height:100%"
                                        : Doc AF.InputLabel "placeholder=Type percentage here..." "Percentage (%):" perc2
            
                                        Ask2b div "background:lightgreen; height:100%"
                                        : Doc AF.InputLabel "placeholder=Type gap here..." "Gap:" gap
            
                                        dragSplitter  Action AF.DragSplitter "@{PlugInName}.perc"
                                        dragSplitter2 Action AF.DragSplitter "@{PlugInName}.perc2"
            
                                        Ask2 template HSplitter1 "height:100%" "gap:gap" "doc1: Ask2a; doc2:Ask2b" "perc:perc2" "MouseDown:dragSplitter2"
            
                                        main div ""
                                        :    template VSplitter1  "height:100%" "gap:gap" "doc1: Ask1 ; doc2:Ask2 " "perc:perc " "MouseDown:dragSplitter "
            
                                        split horizontal 0-50-100 AppFramework.AppFwkClient main
                                    """ |> String.unindentStr
                    addLayout name' layout'
            
                if IsClient then
                    AF.tryGetPlugIn AF.defPlugInName
                    |> Option.iter(fun plg ->
                        plg.plgActions.Add <| ( AF.newActF <| AF.PlgElemName  "AddLayout" <| AF.FunAct2(addNewLayoutAct, "[Name]", "[Layout]") )
                    )
            
        /// Essentials that part runs in Javascript and part runs in the server
        [< AutoOpen >]
        module Library2 =
            module FsiAgent =
                open FusionAsyncM
                open FsiEvaluator
                open FsiCodePresence
                open Operators
            
                [< JavaScript >]
                type Config = Config of workDir:string * parms:Set<string>
            
                let fuseConfigs workDir a b =
                    match a, b with
                    | Config(dirA, parmsA), Config(dirB, parmsB) ->
                    Config((if dirB <> workDir then dirB else dirA), Set.union parmsA parmsB)
            
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
            
                let ctor, aborter, disposer, getIdO, sendInput =
                    let mutable fsiO = None
                    let ctor (Config (workDir, config)) =
                        let fsi = new FsiExe(config |> String.concat " ", workDir, outHndl, errHndl)
                        fsiO <- Some fsi
                        fsi
                    ctor
                  , (fun ()  -> fsiO |> Option.iter (fun fsi ->  fsi                       .Abort      () ) )
                  , (fun ()  -> fsiO |> Option.iter (fun fsi -> (fsi :> System.IDisposable).Dispose    () ) )
                  , (fun ()  -> fsiO |> Option.map  (fun fsi ->  fsi                       .Process.Id    ) )
                  , (fun txt -> fsiO |> Option.iter (fun fsi ->  fsi                       .Shell.Send txt) )
            
                let fsiExeL = lazy new ResourceAgent<_, _>( 70
                                                         , ctor
                                                         , Config (".", Set ["--nologo" ; "--quiet"])
                                                         , (fun fsi    -> fsi.Abort()               ) 
                                                         , (fun fsi    -> fsi.IsAlive               )
                                                         )
            
                [< JavaScript >]
                let extractConfig workDir (FsCode fsCode) = 
                    Config(
                        FsCode.getSourceDir workDir <| String.splitByChar '\n' fsCode
                      , FsCode.extractDefines (FsCode fsCode)
                        |> String.splitByChar ' '
                        |> Set
                        |> Set.union  (Set[" --nologo" ; "--quiet "])
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
                let evalCodeWithPresence  workDir presenceKey presenceValue presenceCode code = 
                    let config = 
                        fuseConfigs       workDir
                        <| extractConfig  workDir presenceCode
                        <| extractConfig  workDir         code
                    fusion {    
                        let! currentValueO  = getPresenceRm presenceKey
                        if   currentValueO <> Some presenceValue then
                            do!  addPresenceRm presenceKey presenceValue
                            do!  evaluateRm    presenceCode |>> ignore
                        return! evaluateRm code
                    }
                    |> AgentReaderM.ofResourceRm
                    |> AgentReaderM.run fsiExeL.Value config
             
                [<Rpc>]    
                let abortFsiExe  () = aborter()
                
                [<Rpc>]    
                /// like abortFsiExe but prevents respawning until next command
                let disposeFsiExe() = disposer()
            
                [<Rpc>]
                let sendFsiInput txt = async { sendInput txt }
            
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
                    "http://localhost:9005/#/Snippet/9882ea9a-2dc3-4459-8605-9b2dd0c89bdc"
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
                        //printfn "getServer"
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
            
                let mutable fsharpStationAddress = Address "FSharpStation1593197096670"
            
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
                    
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
                //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\NewtonSoft.JSon\lib\net45\NewtonSoft.JSon.dll"
                
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
                    
                    
    
    //#cd @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\FSharpStation\src"
    
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    
    //#define WEBSHARPER
    [< JavaScript >]
    module FSharpStation =
        //#r "D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\LayoutEngine.dll"
        //#nowarn "1178" "1182" "3180" "52"
        module FStation =
        
            let [< Rpc >] getRootDirs() = async {
                //let res = let dir = System.Environment.CurrentDirectory
                          //if dir.EndsWith @"\bin" |> not then dir else
                          //dir.[0..dir.Length - 5] |>! fun set -> System.Environment.CurrentDirectory <- set
                let dir = System.Environment.CurrentDirectory
                return dir, System.IO.Path.GetFullPath(dir +/+ ".."     ), System.IO.Path.GetFullPath(dir +/+ "..\\src")
            }
        
            [< Inline "(Date.now())" >]
            let now() = 0
            let id = "FSharpStation" + (now() |> string)
        
            let mutable rootDir  = "."
            let mutable srcDir   = "."
            async {
                let! dir, root, src = getRootDirs()
                rootDir   <- root
                srcDir    <- src
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
            open WebSharper.JavaScript
            
            let private snippets               = ListModel<SnippetId, Snippet> (fun s -> s.snpId)
            let private hierarchy              = Var.Create [||]
            let private generation             = Var.Create System.DateTime.MinValue
            let         currentSnippetIdOV     = Var.Create (None:SnippetId option)
            let private codeSnippetIdOV        = Var.Create (None:SnippetId option)
            let private collapsedV             = Var.Create Set.empty
            
            let predsCache , clearPreds        = Memoize.getStore()
            let reducCache , clearReduc        = Memoize.getStore()
            let parentCache, clearParent       = Memoize.getStore()
            let clearPredsCache ()             = clearPreds ()
                                                 clearReduc ()
                                                 clearParent()
            let prepAnyCode       (cod:string) = cod.Replace("##" + "FSHARPSTATION_ID"       + "##", FStation.id            )
                                                    .Replace("##" + "FSHARPSTATION_ENDPOINT" + "##", JS.Window.Location.Href)
                                                    .Replace("##" + "FSHOME"                 + "##" , FStation.rootDir)
            let prepCode                   snp = prepAnyCode snp.snpContent                                         
            let snippetsColl                () = { generation       = generation.Value
                                                   ordered          = Seq.delay(fun () -> snippets.Value)
                                                   fetcher          = snippets.TryFindByKey
                                                   predecesorsCache = fun _ -> predsCache
                                                   reducedCache     = fun _ -> reducCache
                                                   prepCode         = prepCode
                                                   }
            let handleError                 er = (er:ResultMessage<string>) |> string |> exn |> raise
            let iterReader                  rm = rm |> iterReader  handleError id (snippetsColl())
            let runReaderResult             rm = rm |> runReader                  (snippetsColl()) |> Result.map fst
            let runReader            handle rm = rm |> runReaderResult |> Result.defaultWith handle
               
            let expandParents            snpId = Snippet.pathRm snpId 
                                                 |>> (fun path -> collapsedV.Value - Set path |> collapsedV.Set)
                                                 |> iterReader
            
            let setCurrentSnippetIdO snpIdO    = snpIdO |> Option.iter expandParents 
                                                 currentSnippetIdOV.Set snpIdO
            let setSnippet                 snp = if snp.snpId.Id <> System.Guid.Empty then snippets.Add { snp with snpModified = System.DateTime.Now }
            let getSnippetsGen              () = snippets.Value, generation.Value, collapsedV.Value
        
            let getParentIdONotMemo      snpId = snippets.TryFindByKey snpId |> Option.bind(fun s -> s.snpParentIdO)
            let getParentIdO                   = getParentIdONotMemo |> Memoize.memoizeStore (snd parentCache) 
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
        
            let CurrentSnippetIdW              = currentSnippetIdOV.View |> View.Map  (fun sidO -> sidO |> Option.defaultValue Snippet.defaultSnippet.snpId)
            let currentSnippetW                = currentSnippetIdOV.View |> View.Bind (Option.map snippets.TryFindByKeyAsView >> View.insertWO) |> View.Map (Option.bind id >> Option.defaultValue Snippet.defaultSnippet)
            let    codeSnippetW                =    codeSnippetIdOV.View |> View.Bind (Option.map snippets.TryFindByKeyAsView >> View.insertWO) |> View.Map (Option.bind id >> Option.defaultValue Snippet.defaultSnippet)
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
            let hasChangedW                snp = V (generation.V < snp.snpModified )
            let SaveAsClassW                   = View.Map2 (fun snps gen -> if Seq.exists (fun snp -> snp.snpModified > gen) snps then "btn-primary" else "") 
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
                                                            else sprintf "button \"click=@{FSharpStation.ButtonClick}\" %A" btn
                                                            |> sprintf "btn%d %s" i
                                                        )
                                        "Snp_" + (string snB.snpId.Id).Replace("-", "")
                                        , [ 
                                            yield! ss
                                            yield [ 0.. Seq.length ss - 1 ] 
                                                    |> Seq.map (sprintf "btn%d") 
                                                    |> String.concat " " 
                                                    |> sprintf "buttons div %s %s " ats
                                            yield "editorButtons vertical 0-85-100 FStationLyt.menuEditor buttons"
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
            
            let deleteCurrentSnippet () =
                currentSnippetIdOV.Value
                |> Option.iter (fun snpId ->
                    hierarchy.Value
                    |>  TreeReader.removeNodeOutdentChildren (treenode snpId)
                    |>> Seq.toArray
                    |>> hierarchy.Set
                    |>> fun () -> snippets.RemoveByKey snpId
                    |>  iterReader
                )
                
            let indentIn () =
                currentSnippetIdOV.Value
                |> Option.iter(fun snpId ->
                    hierarchy.Value
                    |>  TreeReader.indentNode (treenode snpId)
                    |>> Seq.toArray
                    |>> hierarchy.Set
                    |>  iterReader
                )
                   
            let indentOut () =
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
                
            let newSnippet () =
                let snp = Snippet.New "" "" None
                addSnippetRm snp
                |>> fun () -> currentSnippetIdOV.Set (Some snp.snpId)
                |>  iterReader
                
            let toggleCollapse snpId =
                if Set.contains snpId collapsedV.Value then Set.remove else Set.add
                <| snpId
                <| collapsedV.Value
                |> collapsedV.Set
        
            let setProperty snp prop v =
                if Seq.contains (prop, v) snp.snpProperties then () else
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
            open WebSharper.JavaScript
            
            let scrollIntoView selW (e:Dom.Element) = selW |> View.Sink (fun s -> if s then try e?scrollIntoViewIfNeeded() with e -> printfn "%A" e) 
            
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
            open WebSharper.JavaScript
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
            
            let gotoEditor (ed:Editor) codeId line col = async {
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
        
                async {
                    return
                        Monaco.newVar var
                        |> fun config -> 
                            { config with   options   = 
                                                Pojo.newPojo [   
                                                    "fontSize"   => 12
                                                    "lineHeight" => 14 
                                                ] 
                                        //overrides = 0 
                                            overrides = 
                                                Pojo.newPojo [ 
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
                }
        
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
            
            let editorDoc() = 
                async {
                    do! Monaco.loader
                    let! cfg = monacoNew <| Lens Snippets.currentSnippetV.V.snpContent
                            <| Some ( (Snippets.currentSnippetW, FStation.annotationsV.View) ||> View.Map2 transformAnnotations )
                            <| None
                            <| None
                    editorConfigO <- Some cfg
                    return Monaco.render  cfg
                } |> Doc.Async
                
         
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
        
            let getSelection () =
                match editorConfigO |> Option.bind (fun cfg -> cfg.editorO) with
                | Some ed -> ed.GetSelection() |> ed.GetModel().GetValueInRange
                | _       -> ""
               
        
        
        module JumpTo =
            open WebSharper.JavaScript
        
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
            open WebSharper.JavaScript
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
        
            let codeModule snp code = fusion {
                let! openPropO = propO snp "Open"
                match openPropO with
                | None    -> return code
                | Some op ->
                return
                    op  + "\n" + code 
                    |> String.indentStr 4 
                    |> sprintf "module Call%s =\n%s" (string <| FStation.now())
            }
        
            let getCode snp name = fusion {
                let! code        = fusion {
                    let!  namecodeO = propO snp name
                    match namecodeO with
                    | Some code -> return code
                    | None      ->
                    if name.StartsWith ":" then return name.[1..] else 
                    let!   template  = propO snp "action-template"
                    return template |> Option.defaultValue "${button}() |> printfn \"%A\""
                }
                let! code2 = codeModule snp code
                return Snippets.prepAnyCode code2
            }
        
            module AF = AppFramework // FsRootDll.LibraryJS.AppFramework
        
            let fetchValue button v =
                if v = "button" then button else
                "Snp_" + (string Snippets.currentSnippetV.Value.snpId.Id).Replace("-", "")
                |> AF.PlugInName
                |> swap AF.splitName v
                ||> AF.tryGetWoW
                |> Option.bind View.TryGet
                |> Option.defaultWith (fun () -> sprintf "$[not found:%s]" v)
        
            let actionClickRm name = fusion {
                outputMsgs.Set  <| sprintf "Action %s ..." name
                let! snp         = getBaseSnippet()
                let! code        = getCode snp name |>> translateString (fetchValue name)
                do!     ofAsync <| FSharpStationClient.setAddress (WebSockets.Address FStation.id)
                let! preCode     = Snippet.fastCodeRm (Some snp.snpId) (Some snp.snpId) |> ofFusionM |>> fst
                let! gen         = ofFusionM <| Snippet.predsGenerationRm snp
                return! ofAsync <| FsiAgent.evalCodeWithPresence FStation.srcDir (sprintf "%A" snp.snpId) (string gen) (FsCode preCode) (FsCode code)
            }
        
            let setSnippetContent (snpPath:string) content     = 
                fusion {
                    let!  snpO  = snpPath.Split '/' |> SnippetReference.RefSnippetPath |> Snippet.snippetFromRefORm |> ofFusionM
                    match snpO with
                    | None     -> return! ofResultRM <| Result.Error (ErrorMsg (sprintf "Snippet %s not found" snpPath) )
                    | Some snp ->
                    { snp with snpContent = content }
                    |> Snippets.setSnippet
                } |> iterReaderA  print print (Snippets.snippetsColl())
        
        
            let actionSnpRm (snpPath:string) name = fusion {
                let! snpO        = snpPath.Split '/' |> SnippetReference.RefSnippetPath |> Snippet.snippetFromRefORm |> ofFusionM
                match snpO with
                | None     -> return! ofResultRM <| Result.Error (ErrorMsg (sprintf "Snippet %s not found" snpPath) )
                | Some snp ->
                let! code        = getCode snp name |>> translateString (fetchValue name)
                do!     ofAsync <| FSharpStationClient.setAddress (WebSockets.Address FStation.id)
                let! preCode     = Snippet.fastCodeRm (Some snp.snpId) (Some snp.snpId) |> ofFusionM |>> fst
                let! gen         = ofFusionM <| Snippet.predsGenerationRm snp
                return! ofAsync <| FsiAgent.evalCodeWithPresence FStation.srcDir (sprintf "%A" snp.snpId) (string gen) (FsCode preCode) (FsCode code)
            }
            
            let actionSnp  path name        = actionSnpRm    path  name              |> iterReaderA  print print (Snippets.snippetsColl())
            let actionClick name            = actionClickRm        name              |> iterReaderA  print print (Snippets.snippetsColl())
            let buttonClick (e:Dom.Element) = e.TextContent.Trim()                   |> actionClick
            let getCurrentProperty        p = propO Snippets.currentSnippetV.Value p |> runReader                (Snippets.snippetsColl()) 
                                                                                     |> AsyncResult.map fst
                                                                                     |> AsyncResult.absorbO (fun () -> errorMsgf "Property %s not found" p)
            let setCurrentProperty      p v = Snippets.setProperty Snippets.currentSnippetV.Value p v
            let scrollToBottom (el:Dom.Element) = 
                async { 
                    do! Async.Sleep 100
                    do  el.ScrollTop <- el.ScrollHeight
                } |> Async.Start
        
            let setScrollToBottom =
                let mutable elO :Dom.Element option = None
                outputMsgs.View |> View.Sink(fun _s -> elO |> Option.iter scrollToBottom )
                fun (el:Dom.Element) -> elO <- Some el ; printfn "setScrollToBottom"
        
        module Serializer =
            open Serializer
        
            let serSnippetId      = serId (fun (SnippetId      v) -> v) SnippetId      (sprintf "%A")     
        
            let serSnippet   : Ser<Snippet  > = 
                [|
                    serSnippetId                                         |> serField  "snpId"         (fun s -> s.snpId        ) (fun v  s -> { s with snpId         = v } )
                    serString                                            |> serField  "snpName"       (fun s -> s.snpName      ) (fun v  s -> { s with snpName       = v } )
                    serString                                            |> serField  "snpContent"    (fun s -> s.snpContent   ) (fun v  s -> { s with snpContent    = v } )
                    serSnippetId                     |> serOpt           |> serField  "snpParentIdO"  (fun s -> s.snpParentIdO ) (fun v  s -> { s with snpParentIdO  = v } )
                    serSnippetId                     |> serSet           |> serField  "snpPredIds"    (fun s -> s.snpPredIds   ) (fun v  s -> { s with snpPredIds    = v } )
                    serString              |> serDup serString |> serArr |> serField  "snpProperties" (fun s -> s.snpProperties) (fun v  s -> { s with snpProperties = v } )
                    serInt                                               |> serFieldO "snpGeneration" (fun s -> None           ) (fun vO s -> match vO with None->s |  Some v -> { s with snpModified = Utc1970_01_01.AddHours (float v) } )
                    serDate                                              |> serField  "snpModified"   (fun s -> s.snpModified  ) (fun v  s -> { s with snpModified   = v } )
                |] |> serRecord (Snippet.New "" "" None)
            
            type Model = {
                snippets   : Snippet []
                modified   : System.DateTime
                collapsed  : SnippetId Set
            }
        
            let getModel(snippets, gen, coll) =  { snippets = snippets |> Seq.toArray ;  modified = gen ; collapsed = coll}
        
            let serModel : Ser<Model> =
                [|
                    serSnippet                       |> serArr           |> serField  "snippets"   (fun m -> m.snippets  ) (fun v  m -> { m with snippets   = v } )
                    serInt                                               |> serFieldO "generation" (fun m -> None        ) (fun vO m -> match vO with None -> m | Some v -> { m with modified = Utc1970_01_01.AddHours (float v) } )
                    serDate                                              |> serField  "modified"   (fun m -> m.modified  ) (fun v  m -> { m with modified   = v } )
                    serSnippetId                     |> serSet           |> serField  "collapsed"  (fun m -> m.collapsed ) (fun v  m -> { m with collapsed  = v } )
                |] |> serRecord { snippets = [||] ; modified = Utc1970_01_01 ; collapsed = Set.empty}
                
        
        module LoadSave =
            open WebSharper.JavaScript
        
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
            open WebSharper.JavaScript
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
            open WebSharper.JavaScript
            open WebComponent
            open FusionAsyncM
            open Operators
            open FStation
        
            type EndPoint =
            |                   Snippet   of System.Guid
            | [< Wildcard    >] Path      of string[]
            | [< EndPoint "" >] NoSnippet
        
            open Sitelets.InferRouter
            let endPointV = if IsClient then Router.Infer() |> Router.InstallHash NoSnippet else Var.Create NoSnippet
        
            if IsClient then
                endPointV.View |> View.Sink (
                    function
                    | NoSnippet      -> View.rtn None
                    | Snippet guid   -> View.rtn (SnippetId guid |> Some)
                    | Path    pth    -> Snippets.currentPathW 
                                        |> View.Map (fun p -> 
                                            if p = String.concat "/" pth then Snippets.currentSnippetIdOV.Value else
                                            Snippet.snippetFromPathORm pth
                                            |> FusionM.map (Option.map (fun s -> s.snpId))
                                            |> Snippets.runReader Snippets.handleError
                                        )
                    >> View.Get (fun sidO -> 
                       if  Snippets.currentSnippetIdOV.Value <> sidO then
                           Snippets.setCurrentSnippetIdO sidO
                   ))
        
                Snippets.currentSnippetIdOV.View |> View.Sink (
                    function
                    | None                 -> View.rtn NoSnippet
                    | Some(SnippetId guid) -> Snippets.currentPathW
                                              |> View.Map (fun p ->
                                                if Path (p.Split '/') = endPointV.Value then endPointV.Value else
                                                Snippet guid
                                              )
                    >> View.Get (fun ep -> 
                       if  endPointV.Value <> ep then
                           endPointV.Value <- ep
                   ))
        
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
        
            let selectionToFsi () = 
                let out (v:string) = appendMsgs <| v.Replace(FsiEvaluator.endToken, "Done!")
                fusion {
                    do! FSharpStationClient.setAddress (WebSockets.Address FStation.id)  |> ofAsync
                    do! Monaco.getSelection() |> fun s -> s + ";;" |> FsiAgent.sendFsiInput |> ofAsync 
                } |> iterResultA (sprintf "Error:\n%A" >> out) ignore
        
            let deleteSnippet() =
                let snp = Snippets.currentSnippetV.Value
                if  snp.snpId <> SnippetId.Empty 
                && JS.Confirm (sprintf "Do you want to delete %s?" <| Snippet.snippetName snp.snpName snp.snpContent) then 
                    Snippets.deleteCurrentSnippet()
        
            module AF = AppFramework // FsRootDll.LibraryJS.AppFramework
            module LE = LayoutEngine // FsRootDll.LibraryJS.LayoutEngine
        
            let FStationLyt = AF.PlugInName "FStationLyt"
        
            let hookVar plug name func obj =
                AF.tryGetVar (AF.PlugInName plug) (AF.PlgElemName name)
                |> Option.map        (fun var -> printfn "Var    %s.%s hooked"    plug name ;  func obj var.varVar                  )
                |> Option.defaultWith(fun ()  -> printfn "Var    %s.%s not found" plug name ;       obj                             )
        
            let hookViw plug name func obj =
                AF.tryGetViw (AF.PlugInName plug) (AF.PlgElemName name)
                |> Option.map        (fun viw -> printfn "View   %s.%s hooked"    plug name ;  func obj viw.viwView                 )
                |> Option.defaultWith(fun ()  -> printfn "View   %s.%s not found" plug name ;       obj                             )
        
            let hookAct plug name func obj =
                AF.tryGetAct (AF.PlugInName plug) (AF.PlgElemName name)
                |> Option.map        (fun act -> printfn "Action %s.%s hooked"    plug name ;  func obj (fun _-> act.actFunction |> AF.callFunction () () ) )
                |> Option.defaultWith(fun ()  -> printfn "Action %s.%s not found" plug name ;       obj                             )
        
            let hookDoc plug name func obj =
                AF.tryGetDoc (AF.PlugInName plug) (AF.PlgElemName name)
                |> Option.map        (fun doc -> printfn "Doc    %s.%s hooked"    plug name ;  func obj (AF.mainDocV.View |> View.Map (fun _ -> AF.getActualDoc doc) |> Doc.EmbedView) )
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
                    .LoadFileChanged(  fun ev -> LoadSave.loadTextFile ev.Target                  )
                    .LoadFileClear(    fun ev -> ev.Target?value <- ""                            )
                    .ImportFileChanged(fun ev -> Importer.importFile ev.Target                    )
                    .ImportFileClear(  fun ev -> ev.Target?value <- ""                            )
                    .JumpRef(          fun ev -> JumpTo.jumpToRef ev.Target                       )
                    //.OutputAfterRender(fun ev -> outputMsgs.View |> View.Sink (scrollToBottom ev) )
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
        
            let snippetNameV = Lens Snippets.currentSnippetV.V.snpName
            let contentV     = Lens Snippets.currentSnippetV.V.snpContent
        
            [< WebSharper.Sitelets.Website >]    
            let mainProgram() =
                AF.addPlugIn {
                    AF.plgName    = AF.PlugInName "FSharpStation"
                    AF.plgVars    = [| AF.newVar  (AF.PlgElemName "fileName"          ) LoadSave.fileName
                                       AF.newVar  (AF.PlgElemName "SnippetName"       ) snippetNameV
                                       AF.newVar  (AF.PlgElemName "Content"           ) contentV    
                                       AF.newVar  (AF.PlgElemName "Output"            ) outputMsgs
                                       AF.newVar  (AF.PlgElemName "Parser"            ) FStation.annotationsV
                                    |] |> ListModel.Create (fun v -> v.varName)
                    AF.plgViews   = [| AF.newViw  (AF.PlgElemName "FsCode"            ) Snippets.FsCodeW
                                       AF.newViw  (AF.PlgElemName "SaveNeeded"        ) Snippets.SaveAsClassW
                                       AF.newViw  (AF.PlgElemName "CurrentPath"       ) Snippets.currentPathW
                                       AF.newViw  (AF.PlgElemName "FStationId"        ) (View.Const FStation.id)
                                       AF.newViw  (AF.PlgElemName "CurrentSid"        ) (Snippets.CurrentSnippetIdW |> View.Map (fun sid -> sid.Id |> string))
                                    |] |> ListModel.Create (fun w -> w.viwName)
                    AF.plgDocs    = [| AF.newDoc  (AF.PlgElemName "mainDoc"           ) (lazy mainDoc()                 )
                                       AF.newDoc  (AF.PlgElemName "editor"            ) (lazy (WebSharper.UI.Html.div [] [ Monaco.editorDoc() ]) )
                                       AF.newDoc  (AF.PlgElemName "Snippets"          ) (lazy RenderSnippets  .render() )
                                       AF.newDoc  (AF.PlgElemName "Properties"        ) (lazy RenderProperties.render() )
                                       AF.newDoc  (AF.PlgElemName "ButtonsRight"      ) (lazy buttonsRight           () )
                                    |] |> ListModel.Create (fun w -> w.docName)
                    AF.plgActions = [| AF.newAct  (AF.PlgElemName "AddSnippet"        ) Snippets.newSnippet
                                       AF.newAct  (AF.PlgElemName "RemoveSnippet"     ) deleteSnippet       
                                       AF.newAct  (AF.PlgElemName "IndentIn"          ) Snippets.indentIn       
                                       AF.newAct  (AF.PlgElemName "IndentOut"         ) Snippets.indentOut
                                       AF.newAct  (AF.PlgElemName "AddProperty"       ) RenderProperties.addProperty
                                       AF.newAct  (AF.PlgElemName "SaveAs"            ) LoadSave.saveAs
                                       AF.newAct  (AF.PlgElemName "RunFS"             ) runFsCode
                                       AF.newAct  (AF.PlgElemName "SelectionToFsi"    ) selectionToFsi
                                       AF.newAct  (AF.PlgElemName "AbortFsi"          ) FsiAgent.abortFsiExe
                                       AF.newAct  (AF.PlgElemName "DisposeFsi"        ) FsiAgent.disposeFsiExe
                                       AF.newActF (AF.PlgElemName "LoadFile"          ) <| AF.FunAct1 ((fun o     -> unbox o  |> LoadSave.loadTextFile              ), "FileElement")
                                       AF.newActF (AF.PlgElemName "Import"            ) <| AF.FunAct1 ((fun o     -> unbox o  |> Importer.importFile                ), "FileElement")
                                       AF.newActF (AF.PlgElemName "JumpTo"            ) <| AF.FunAct1 ((fun o     -> unbox o  |> JumpTo.jumpToRef                   ), "textarea"   )
                                       AF.newActF (AF.PlgElemName "ButtonClick"       ) <| AF.FunAct1 ((fun o     -> unbox o  |> CustomAction.buttonClick           ), "button"     )
                                       AF.newActF (AF.PlgElemName "ActionClick"       ) <| AF.FunAct1 ((fun o     -> unbox o  |> CustomAction.actionClick           ), "name"       )
                                       AF.newActF (AF.PlgElemName "SetScrollToBottom" ) <| AF.FunAct1 ((fun o     -> unbox o  |> CustomAction.setScrollToBottom     ), "textarea"   )
                                       AF.newActF (AF.PlgElemName "ActionSnp"         ) <| AF.FunAct2 ((fun o1 o2 -> unbox o2 |> CustomAction.actionSnp (unbox o1)  ), "snpPath", "name" )
                                       AF.newActF (AF.PlgElemName "setCurrentProperty") <| AF.FunAct2 ((fun o1 o2 -> unbox o2 |> CustomAction.setCurrentProperty (unbox o1)  ), "name", "value" )
                                       AF.newActF (AF.PlgElemName "setSnippetContent" ) <| AF.FunAct2 ((fun o1 o2 -> unbox o2 |> CustomAction.setSnippetContent  (unbox o1)  ), "path", "value" )
                                    |] |> ListModel.Create (fun w -> w.actName)
                    AF.plgQueries = [| AF.newQry  (AF.PlgElemName "PropertyRA"        ) <| (fun p -> unbox<string> p |> CustomAction.getCurrentProperty |> box)
                                    |] |> ListModel.Create (fun w -> w.qryName)
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
                    editorButtons    vertical -120 snippetsSnippet buttons
                    buttons div      "overflow: hidden; display: grid; grid-template-columns: 100%; grid-template-rows: repeat(15, calc(100% / 15)); bxackground-color: #eee; box-sizing: border-box; padding : 5px; grid-gap: 5px; margin-right: 21px" btnSaveAs none x btnAddSnippet btnDeleteSnippet btnIndentIn btnIndentOut none x btnRunFS btnInputFsi btnAbortFsi
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
                    btnInputFsi      button FSharpStation.selectionToFsi   ""                  "selection |> Fsi"
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
                |> LE.newLyt FStationLyt
                |> NewLY.addNewLayout   // LE.addLayout
        
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
                        |> LE.newLyt    (AF.PlugInName name)
                        |> NewLY.addNewLayout  //|> LE.addLayout 
                        if txt = "" then None else 
                        Some name
                    )
                    |> Option.defaultValue FStationLyt.Id
                    |> AF.mainDocV.Set
                )
        
                Snippets.currentPathW
                |> View.Sink (fun v -> 
                    async {
                        do! Async.Sleep 500
                        JS.Window.Document.Title <- v 
                    } |> Async.Start
                )        
        
                //async {
                //  do! Monaco.loader
                //  //WcSplitter.init horizontal vertical
                //  //WcTabStrip.init()
                //  let editor = Monaco.getEditorConfigO() |> Option.map Monaco.render |> Option.defaultValue Doc.Empty
        
                //} |> Doc.Async
                TemplateLib()
                    .MainContent( AF.getMainDoc.Value )
                    .Bind()
        
        
        //#define FSS_SERVER
        module Messaging =
            open WebSharper.JavaScript 
            open FStation
            open FusionAsyncM
            open Operators
            open MainProgram
        
            module AF = AppFramework // FsRootDll.LibraryJS.AppFramework 
            module Fusion = FusionAsyncM
        
            let wsStationClient = if IsClient then new WebSockets.WSMessagingClient(FStation.id) else new WebSockets.WSMessagingClient("FStation.id", WebSockets.FSStation)
        
            let actionCall actN p1 p2 = fusion {
                match actN |> AF.splitName FStationLyt ||> AF.tryGetAct with
                | None     -> return! ofResultRM <| Result.Error (ErrorMsg (sprintf "Action %s not found" actN) )
                | Some act -> AF.callFunction p1 p2 act.actFunction
                              return FSResponse.RespString "Ok"
            }
        
            let getValue vname = fusion {
                match vname |> AF.splitName FStationLyt ||> AF.tryGetWoW with
                | None     -> return! ofResultRM <| Result.Error (ErrorMsg (sprintf "Var or View %s not found" vname) )
                | Some  vw -> let! v = vw |> View.GetAsync |> ofAsync
                              return FSResponse.RespString v
            }
        
            let setValue vname v = fusion {
                match vname |> AF.splitName FStationLyt ||> AF.tryGetVar with
                | None     -> return! ofResultRM <| Result.Error (ErrorMsg (sprintf "Var %s not found" vname) )
                | Some var -> var.varVar.Set v
                              return FSResponse.RespString "Ok"
            }
        
            let processMessage (msg: FSMessage) : Async<Result<FSResponse,ResultMessage<string>>>= 
                fusion {
                    match msg with
                    | MsgGetId                          -> return  RespString FStation.id
                    | MsgGetSnippets               snrs -> let!    snps = snrs |> Fusion.traverseSeq (Snippet.snippetFromRefORm >> ofFusionM)
                                                           return  snps |> Seq.choose id |> Seq.toArray |> RespSnippets
                    | MsgGetCode                   snr  -> Snippets.clearPredsCache ()
                                                           let!    snp  = Snippet.snippetFromRefORm snr |> ofFusionM |> absorbO (fun () -> ErrorMsg <| sprintf "Snippet not found %A" snr)
                                                           return! Snippet.fastCodeRm (Some snp.snpId) (Some snp.snpId) |> ofFusionM |>> fst |>> RespString
                    | MsgGetModified               snr  -> let!    snp  = Snippet.snippetFromRefORm snr |> ofFusionM |> absorbO (fun () -> ErrorMsg <| sprintf "Snippet not found %A" snr)
                                                           let!    ids  = Snippet.predsLRm snp.snpId |> ofFusionM
                                                           let!    prds = ids |> Fusion.traverseSeq (Snippet.snippetORm >> ofFusionM)
                                                           return  prds |> Seq.choose (Option.map (fun s -> s.snpModified)) |> Seq.max |> RespDateTime
                    | MsgGetPredecessors           snr  -> let!    snp  = Snippet.snippetFromRefORm snr |> ofFusionM |> absorbO (fun () -> ErrorMsg <| sprintf "Snippet not found %A" snr)
                                                           let!    ids  = Snippet.predsLRm snp.snpId |> ofFusionM
                                                           let!    prds = ids |> Fusion.traverseSeq (Snippet.snippetORm >> ofFusionM)
                                                           return  prds |> Seq.choose id |> Seq.toArray |> RespSnippets
                    | MsgAction [| "AddOutput" ; txt |] -> appendMsgs txt
                                                           return  FSResponse.RespString "Ok"
                    | MsgAction [| "ExecJS"    ; js  |] -> let! v = try  JS.Apply JS.Window "eval" [| js |] |> (function null -> "" | s -> sprintf "%A" s) |> Ok
                                                                    with e -> ExceptMsg(e.Message, e.StackTrace) |> Result.Error
                                                                    |> FusionAsyncM.ofResultRM
                                                           return  FSResponse.RespString v
                    | MsgAction [| "SetProperty"; path ; prop ; v  |] -> 
                                                           let! res  = Snippet.snippetFromRefORm (RefSnippetPath <| path.Split '/')
                                                                       |>  ofFusionM  
                                                                       |>> Option.map (fun snp -> Snippets.setProperty snp prop v ; "Ok")
                                                                       |>  absorbO (fun () -> ErrorMsg <| sprintf "Snippet not found: %s" path)
                                                           return  FSResponse.RespString res
                    | MsgAction [| actN              |] -> return! actionCall actN () ()
                    | MsgAction [| actN ; p1         |] -> return! actionCall actN p1 ()
                    | MsgAction [| actN ; p1 ; p2    |] -> return! actionCall actN p1 p2
                    | MsgGetValue               vrw     -> return! getValue vrw
                    | MsgSetValue              (var, v) -> return! setValue var v
                    | MsgGetUrl                         -> return  FSResponse.RespString JS.Document.BaseURI
                    | _                                 -> return  Hole ?(sprintf "TODO message: %A" msg)
                } |> runReader (Snippets.snippetsColl()) |> AsyncResult.map fst
            
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
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Owin\lib\net40\Owin.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin.Hosting\lib\net451\Microsoft.Owin.Hosting.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin.Host.HttpListener\lib\net451\Microsoft.Owin.Host.HttpListener.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin\lib\net461\WebSharper.Owin.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Owin\lib\net461\HttpMultipartParser.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin.StaticFiles\lib\net451\Microsoft.Owin.StaticFiles.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Microsoft.Owin.FileSystems\lib\net451\Microsoft.Owin.FileSystems.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\CommonServiceLocator\lib\portable-net4+sl5+netcore45+wpa81+wp8\Microsoft.Practices.ServiceLocation.dll"
        
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
        //        Content.Page(Title = "Main Page" 
        //                   , Body  = [
        //                        Html.client <@ MainProgram.mainProgram() @>
        //                        Doc.Verbatim (System.IO.File.ReadAllText TemplatesFileName)
        //                     ])
                Content.Page( 
                    TemplateLib()
                        .Initializer( Html.client <@  MainProgram.mainProgram(); Doc.TextNode "Initialized" @> )
                        .Elt(keepUnfilled = true) 
                )
        
            [< EntryPoint >]
            let Main args =
                printfn "Usage: FSharpStation URL ROOT_DIRECTORY MaxMessageSize"
                let url           = args |> Seq.tryItem 0 |>                   Option.defaultValue "http://localhost:9005/"
                let rootDirectory = args |> Seq.tryItem 1 |>                   Option.defaultValue @"..\website"
                let max           = args |> Seq.tryItem 2 |> Option.map int |> Option.defaultValue 1_000_000
                let epWebSocket = Endpoint.Create(url, "/ws", JsonEncoding.Readable)
                let broker = Broker.BrokerAgent epWebSocket
                Broker.BrokerAgent.FssWebSocketO <- Some broker
                let staticFileOptions = StaticFileOptions(FileSystem = PhysicalFileSystem(rootDirectory))
                staticFileOptions.ServeUnknownFileTypes <- true
                (staticFileOptions.ContentTypeProvider |> unbox<ContentTypes.FileExtensionContentTypeProvider>).Mappings.Add(".wasm", "application/wasm")
                use server = WebApp.Start(url, fun appB ->
                    appB.UseWebSharper(WebSharperOptions(ServerRootDirectory = rootdir
                                                       , Sitelet             = (Some <| Application.MultiPage content)
                                                       , BinDirectory        = "."
                                                       , Debug               = true))
                        .UseStaticFiles(staticFileOptions)
                        .UseWebSocket(  epWebSocket, broker.Start, maxMessageSize = max)
                    |> ignore)
                stdout.WriteLine("Listening on {0}, hit enter to finish", url)
                stdin.ReadLine() |> ignore
                0
        
        
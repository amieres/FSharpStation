#nowarn "3242"
////-d:FSharpStation1569527865882 -d:NETSTANDARD20 -d:NOFRAMEWORK --noframework -d:TEE -d:WEBSHARPER
////#cd @"d:\Abe\CIPHERWorkspace\FSharpStation/projects/ProzperServer"
//#I @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref"
//#I @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0"
//#I @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Core\lib\netstandard1.6\FSharp.Core.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\netstandard.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\mscorlib.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Globalization.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Threading.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Reflection.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Numerics.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Core.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Xml.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Xml.Linq.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Net.Http.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Runtime.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.IO.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Threading.Tasks.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Core.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Core.JavaScript.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Collections.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.InterfaceGenerator.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Main.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.JQuery.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.JavaScript.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Web.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Sitelets.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Control.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\HtmlAgilityPack.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.Runtime.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.Common.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\LayoutEngine.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\projects\ProzperServer\bin\ProzperServer.dll"
//#nowarn "3242"
/// Root namespace for all code
//#define FSharpStation1569527865882
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
    //#I @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461"
    //#I @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461"
    
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Main.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Web.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Control.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
    #endif
    #endif
    //#define NOFRAMEWORK --noframework
    
    #if NETSTANDARD20
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Core\lib\netstandard1.6\FSharp.Core.dll"
    //#I @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\netstandard.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\mscorlib.dll"
    //#r "d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.dll"   
    //#r "d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Globalization.dll"   
    //#r "d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Threading.dll"   
    //#r "d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Reflection.dll"   
    //#r "d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Numerics.dll"   
    //#r "d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Core.dll"   
    //#r "d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Xml.dll"   
    //#r "d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Xml.Linq.dll"   
    //#r "d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Net.Http.dll"   
    //#r "d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Runtime.dll"   
    //#r "d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.IO.dll"   
    //#r "d:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Threading.Tasks.dll"  
    
    //#I @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0"
    //#I @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0"
    
    #if WEBSHARPER
    
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Core.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Core.JavaScript.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Collections.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.InterfaceGenerator.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Main.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.JQuery.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.JavaScript.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Web.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Sitelets.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Control.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\HtmlAgilityPack.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.Runtime.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.Common.dll"
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
                    
                    
                /// Based on Nick Palladino's https://github.com/palladin/Eff
                
                [< AutoOpen >]
                module Eff =
                    type Effect  = abstract Extend : (Effect -> Effect) -> Effect
                
                    type Eff<'H, 'a> = Eff of (('a -> Effect) -> Effect) 
                        with  member this.Create = match this with Eff create -> create
                
                    let inline rtn  v : Eff<'H, 'a> = Eff (fun k -> k v)
                    let bind  (f: 'a -> Eff<'H, 'b>) (effA: Eff<'H, 'a>) : Eff<'H, 'b> = 
                                        Eff (fun kb -> 
                                                let (Eff effKa) = effA
                                                effKa (fun a -> 
                                                    let (Eff effKb) = f a
                                                    effKb kb
                                                )
                                            )
                    let inline map   f  m  = bind (f >> rtn) m
                    let inline apply fR vR = fR |> bind (fun f -> map f vR)
                
                    type Done<'a>(v : 'a) =
                        member self.Value = v
                        interface Effect with member self.Extend(_) : Effect = self :> _
                
                    let done'  (v : 'a) : Effect = new Done<'a>(v) :> _ 
                    //let return'(v : 'a) : Eff<'H, 'c> = Eff( fun _ -> done' v )
                    let return' v = Eff( fun _ -> done' v )
                
                    let run<'H, 'a> (eff: Eff<'H, 'a>) : 'a =
                        match eff.Create done' with
                        | :? Done<'a> as done' -> done'.Value
                        | v                    -> failwithf "Unhandled effect %A" v
                
                    let inline runResult<'H, 'a> eff = 
                        try run<'H, 'a> eff |> Ok
                        with e -> Error(e.ToString())
                
                
                    let inline ( <*> ) f v   = apply f v
                    let inline ( |>> ) v f   = map   f v
                    let inline ( >>= ) v f   = bind  f v
                    let inline ( >-> ) f g v = f v |>> g
                    let inline ( >=> ) f g v = f v >>= g
                    
                    #if TEE
                    let inline ( |>>!) v f   = map   (tee f                       ) v
                    let inline ( >>=!) v f   = bind  (fun w -> f w |>> fun () -> w) v
                    #endif
                    
                    let inline join m = m |> bind id
                    
                    let traverseSeq            f     sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                          Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |>> Seq.ofList
                    let inline sequenceSeq           sq = traverseSeq id sq
                    
                    let inline insertO    vvO               = vvO   |> Option.map(map Some) |> Option.defaultWith(fun () -> rtn None)
                    let inline insertR   (vvR:Result<_,_>)  = vvR   |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                    let inline insertFst (fst, vEf)         = vEf   |> map (fun v -> fst, v)
                    let inline insertSnd (vEf, snd)         = vEf   |> map (fun v -> v, snd)
                    
                    let inline bindO (f:'a->Eff<'H,'b>) (ef:Eff<'H,'a option>) = bind (Option.map f >> insertO) ef
                    let rec whileLoop cond fEf =
                        if   cond () 
                        then fEf  () |> bind (fun () -> whileLoop cond fEf)
                        else rtn  ()
                    
                    
                    type EffBuilder<'H>() =
                        member __.ReturnFrom            vEf        : Eff<'H, _   > =           vEf
                        member __.Return                v          : Eff<'H, _   > = rtn       v  
                        member __.Zero                  ()         : Eff<'H, unit> = rtn       () 
                        member __.Bind                 (vEf,  fEf) : Eff<'H, _   > = bind fEf  vEf
                        member __.Combine              (vEf,  fEf) : Eff<'H, _   > = bind fEf  vEf
                        member __.Delay                       fEf                  = fEf
                        member __.Run                         fEf  : Eff<'H, _   > = rtn () |> bind fEf
                        member this.TryWith   (body, handler     ) : Eff<'H,_> = Eff(fun k -> try body() |> function Eff(f) -> f k with e -> handler e |> function Eff(f) -> f k)
                        member this.TryFinally(body:unit-> Eff<'H,'R>, compensation) : Eff<'H,'R> = (try body() with e -> compensation() ; reraise() ) |>>! (fun _ -> compensation())
                        member this.Using     (disposable, body  ) : Eff<'H,_> = //wrap(fun r -> using (disposable:#System.IDisposable) (fun u -> body u |> getFun <| r) )
                                    let body' = fun () -> body disposable
                                    this.TryFinally(body', fun () -> if disposable :> obj <> null then (disposable:#System.IDisposable).Dispose() )
                        member __.While   (guard , fEf) : Eff<'H, unit> = whileLoop guard fEf 
                        member th.For  (s: 'a seq, fEf) : Eff<'H, unit> = th.Using(s.GetEnumerator (), fun enum ->
                                                                                        th.While(enum.MoveNext,
                                                                                            th.Delay(fun () -> fEf enum.Current)))
                    
                    let eff<'H> = EffBuilder<'H>()
                    
                    //type EffBuilder<'H>() =
                    //    member self.Zero      (                 ) = rtn ()
                    //    member self.Return    (v   :         'A ) = rtn v
                    //    member self.ReturnFrom eff                = eff
                    //    member self.Bind      (eff, f           ) = bind f eff
                    //    member self.Combine   (first, second    ) = bind (fun () -> second) first
                    //    member __.Combine   (vEf,  fEf) : Eff<'H  , 'm> = bind fEf  vEf
                    //    member self.Delay (f : unit -> Eff<'U, 'A>) : Eff<'U, 'A> =  Eff (fun k -> let (Eff cont) = f () in cont k)
                    ////    member inline __.Delay       f                  = f
                    //    member __.While(guard, body) =
                    //        let rec whileLoop guard body =
                    //            if guard() then body() |> bind (fun () -> whileLoop guard body)
                    //            else rtn   ()
                    //        whileLoop guard body
                    //    member this.TryWith   (body, handler     ) = Eff(fun k -> try body() |> function Eff(f) -> f k with e -> handler e |> function Eff(f) -> f k)
                    //    member this.TryFinally(body, compensation) = Eff(fun k -> try body() |> function Eff(f) -> f k finally   compensation()           )
                    //    member this.Using     (disposable, body  ) = //wrap(fun r -> using (disposable:#System.IDisposable) (fun u -> body u |> getFun <| r) )
                    //                let body' = fun () -> body disposable
                    //                this.TryFinally(body', fun () -> if disposable :> obj <> null then (disposable:#System.IDisposable).Dispose() )
                    //    member this.For(sequence:seq<_>, body) =
                    //        this.Using(sequence.GetEnumerator(),fun enum -> 
                    //            this.While(enum.MoveNext, 
                    //                fun () -> this.Delay(fun () -> body enum.Current)))
                    //
                    //
                    //let eff<'H> = new EffBuilder<'H>()
                    
                    //type EA<'H, 'a, 'b> = 'a -> Eff<'H, 'b>
                    /// Equal to (|>) 
                    //let (>|>) (ea:EA<_,_,_>) f : EA<_,_,_> = ea |> f
                    /// Equal to (>>)
                    //let (>>>) = (>>)
                    
                    module EA =
                        let tee (f: 'a -> Eff<'H, unit>) : 'a -> Eff<'H, 'a> = (fun v -> f v |> map (fun () -> v) )
                    
                    //    let mapOutput  f (ea: EA<_,_, _>) : EA<_,_,          _   > = ea >> (bind (f >> rtn) )
                    //    let bindOutput(f: EA<_,_, _>) (ea: EA<_,_, _>) : EA<_,_, _> = ea >> (bind  f  )
                    //    let mapBoth    f (ea: EA<_,_, _>) : EA<_,_,          _   > = fun i -> i |> mapOutput (f i) ea
                    //    let bindBoth   f (ea: EA<_,_, _>) : EA<_,_,          _   > = mapBoth f  ea |> bindOutput id
                    //
                    //    let mapO         (ea: EA<_,_, _>) : EA<_,_,          _   > = Option.map ea >> insertO
                    //
                    //    let mapFst     f (a, b) = (f a,   b)
                    //    let mapSnd     f (a, b) = (  a, f b)
                    //
                    //    let bindFst    (f:EA<_,_,_>) (a, b) = eff {
                    //        let! fa = f a
                    //        return (fa, b)
                    //    }
                    //
                    //    let bindSnd    (f:EA<_,_,_>) (a, b) = eff {
                    //        let! fb = f b
                    //        return (a, fb)
                    //    }
                    //
                    //    let lift    f : EA<_,_,_> = f >> rtn
                    //    let pairWith v ea : EA<_,_,_> =
                    //        ea
                    //        >-> fun fst -> fst, v
                    //
                    //    let getResult ea:EA<_,_,_> = ea >-> Ok
                    
                    
                    module Log = 
                        type Log< 'L> = interface end  // this acts as a reminder to add a handler for the Log Effects
                        type Log2<'L> = interface end  // this acts as a reminder to add a handler for the Log Effects
                        type Log3<'L> = interface end  // this acts as a reminder to add a handler for the Log Effects
                    
                        type LogEntry<'L>(v : 'L, k : unit -> Effect) =
                            member self.Value = v
                            member self.K     = k
                            interface Effect with
                                member self.Extend extension  : Effect = new LogEntry<'L>(v, k >> extension) :> _
                    
                        let log (s:'L)  : Eff<'H, unit> when 'H :> #Log< 'L> = Eff (fun k -> LogEntry(s, k) :> _ )
                        let logf fmt = Printf.ksprintf log fmt
                        let log2 (s:'L) : Eff<'H, unit> when 'H :> #Log2<'L> = Eff (fun k -> LogEntry(s, k) :> _ )
                        let log3 (s:'L) : Eff<'H, unit> when 'H :> #Log3<'L> = Eff (fun k -> LogEntry(s, k) :> _ )
                    
                        let pureLogHandler0<'L, 'H, 'a> (eff: Eff<'H, 'a>) : Eff<'H, 'a * list<'L>> = 
                            let rec loop (exitK:('a * list<'L>) -> Effect) (ls: list<'L>) : Effect -> Effect = function
                                | :? Done<    'a> as done' -> (done'.Value, ls)  |>       exitK
                                | :? LogEntry<'L> as log   -> log.K ()           |>  loop exitK (log.Value :: ls)  
                                | effect                   -> effect.Extend         (loop exitK ls               )
                            Eff (fun exitK                 -> eff.Create done'   |>  loop exitK []               )
                    
                        let consoleLogHandler0<'L, 'H, 'a> (eff: Eff<'H, 'a>) : Eff<'H, 'a> =
                            let rec loop (exitK: 'a -> Effect) : Effect -> Effect = function
                                | :? Done<    'a> as done' -> done'.Value        |>      exitK
                                | :? LogEntry<'L> as log   -> printfn "Log: %A" log.Value
                                                              log.K ()           |> loop exitK
                                | effect                   -> effect.Extend        (loop exitK)
                            Eff (fun exitK                 -> eff.Create done'   |> loop exitK)
                    
                        let loggerLogHandler0<'L, 'H, 'a> logger (eff: Eff<'H, 'a>) : Eff<'H, 'a> =
                            let rec loop (exitK: 'a -> Effect) : Effect -> Effect = function
                                | :? Done<    'a> as done' -> done'.Value        |>      exitK
                                | :? LogEntry<'L> as log   -> logger log.Value
                                                              log.K ()           |> loop exitK
                                | effect                   -> effect.Extend        (loop exitK)
                            Eff (fun exitK                 -> eff.Create done'   |> loop exitK)
                    
                        let pureLogHandler< 'L, 'H, 'a when 'H :> Log< 'L>> (eff: Eff<'H, 'a>) : Eff<'H, 'a * list<'L>> = pureLogHandler0<'L, 'H, 'a> eff
                        let pureLogHandler2<'L, 'H, 'a when 'H :> Log2<'L>> (eff: Eff<'H, 'a>) : Eff<'H, 'a * list<'L>> = pureLogHandler0<'L, 'H, 'a> eff
                        let pureLogHandler3<'L, 'H, 'a when 'H :> Log3<'L>> (eff: Eff<'H, 'a>) : Eff<'H, 'a * list<'L>> = pureLogHandler0<'L, 'H, 'a> eff
                    
                    
                        let consoleLogHandler< 'L, 'H, 'a when 'H :> Log< 'L>> (eff: Eff<'H, 'a>) : Eff<'H, 'a> = consoleLogHandler0<'L, 'H, 'a> eff
                        let consoleLogHandler2<'L, 'H, 'a when 'H :> Log2<'L>> (eff: Eff<'H, 'a>) : Eff<'H, 'a> = consoleLogHandler0<'L, 'H, 'a> eff
                        let consoleLogHandler3<'L, 'H, 'a when 'H :> Log3<'L>> (eff: Eff<'H, 'a>) : Eff<'H, 'a> = consoleLogHandler0<'L, 'H, 'a> eff
                    
                        let loggerLogHandler< 'L, 'H, 'a when 'H :> Log< 'L>> logger (eff: Eff<'H, 'a>) : Eff<'H, 'a> = loggerLogHandler0<'L, 'H, 'a> logger eff
                        let loggerLogHandler2<'L, 'H, 'a when 'H :> Log2<'L>> logger (eff: Eff<'H, 'a>) : Eff<'H, 'a> = loggerLogHandler0<'L, 'H, 'a> logger eff
                        let loggerLogHandler3<'L, 'H, 'a when 'H :> Log3<'L>> logger (eff: Eff<'H, 'a>) : Eff<'H, 'a> = loggerLogHandler0<'L, 'H, 'a> logger eff
                    
                    module Rsl = 
                    
                    
                        type Rsl<'M> = interface end
                        
                        type IRsl<'M> = abstract Value : 'M
                    
                        type Fail<'a,'M>(v : 'M, k : 'a -> Effect) =
                            member self.Value = v
                            member self.K     = k
                            interface Effect   with member __.Extend extension : Effect = new Fail<'a,'M>(v, k >> extension) :> _
                            interface IRsl<'M> with member __.Value = v
                    
                        let fail (s:'M) : Eff<'H, _> when 'H :> #Rsl<'M> = Eff (fun k -> new Fail<_,_>(s, k) :> _)
                        let failf fmt = Printf.ksprintf fail fmt
                        let inline ofResult (res:Result<'a,'b>) : Eff<'c,'a> = eff {
                            match res with
                            | Ok    v   ->  return v
                            | Error msg ->  let! m = fail msg
                                            return failwith "this code should be unreachable"
                        }
                        
                        let rslHandler<'U, 'M, 'A when 'U :> Rsl<'M>> (eff: Eff<'U, 'A>) : Eff<'U, _> = 
                            let rec loop (exitK:(Result<'A,'M>) -> Effect) : Effect -> Effect = function
                                | :? Done<    'A> as done' -> Ok    done'.Value |>       exitK
                                | :? IRsl<    'M> as fail  -> Error fail .Value |>       exitK
                                | effect                   -> effect.Extend        (loop exitK)
                            Eff (fun exitK                 -> eff.Create done'  |>  loop exitK)
                    
                        let inline getResult   v                = v     |> rslHandler
                        let inline absorbR     vvEf             = vvEf  |> bind ofResult
                        let inline absorbO   f vOEf             = vOEf  |> map (Result.ofOption  f) |> absorbR
                    
                    module Asy = 
                        type Asy = interface end // this acts as a reminder to add a handler for the Effect
                    
                        type AsynG =
                            abstract RunSync      : unit               -> Effect
                            abstract RunAsync<'a> : (Effect -> Effect) -> Effect
                    
                        [< Inline "console.log('RunSynch Not implemented in JavaSacript')" >]
                        let runSynch v = Async.RunSynchronously v
                    
                        type Asyn<'v>(v : Async<'v>, k : ('v -> Effect) ) =
                            member __.Value = v
                            member __.K     = k
                            interface Effect with member __.Extend   extension = new Asyn<_>(v, k >> extension) :> _
                            interface AsynG  with 
                                member __.RunSync  ()        = runSynch v |> k
                                member __.RunAsync<'a> exitK = done' (v |> Async.bind (fun v -> k v |> exitK :?> Done<Async<'a>> |> fun don -> don.Value ) )
                    
                        let inline ofAsync (v:Async<'a>) : Eff<'H, 'a> when 'H :> Asy= Eff (fun k -> new Asyn<'a>(v, k) :> _)
                    
                        /// This handler uses RunSynchronously to resolve Asyncs
                        let syncHandler<'H, 'a when 'H :> Asy> (eff: Eff<'H, 'a>) : Eff<'H, 'a> =
                            let rec loop (exitK:'a -> Effect) : Effect -> Effect = function
                                | :? Done<'a> as done' -> done'.Value        |>      exitK
                                | :? AsynG    as asy   -> asy.RunSync()      |> loop exitK
                                | effect               -> effect.Extend        (loop exitK)
                            Eff (fun exitK             -> eff.Create done'   |> loop exitK)
                    
                        /// this should be the last handler before Eff.run
                        let asyncHandler0<'H, 'a when 'H :> Asy> (eff: Eff<'H, 'a>) : Eff<'H, Async<'a>> = 
                            let rec loop (exitK:(Async<'a>) -> Effect) : Effect -> Effect = function
                                | :? Done<'a> as done' -> done'.Value |> async.Return |>      exitK
                                | :? AsynG    as asy   -> asy.RunAsync<'a>              (loop exitK)
                                | effect               -> effect.Extend                 (loop exitK)
                            Eff (fun exitK             -> eff.Create done'            |> loop exitK)
                    
                        let asyncHandler<'H, 'a when 'H :> Asy> (eff: Eff<'H, 'a>) : Eff<'H, Async<'a>> = 
                            Async.rtn () 
                            |>  ofAsync 
                            >>= fun () -> eff 
                            |>  asyncHandler0
                    
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
                    elif from >= this.Length then ""
                    elif from <  0           then this.Substring2(0, n + from)
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
            
            let mapFst     (f: 'a->'c) (a:'a, b:'b) = (f a,   b)
            let mapSnd     (f: 'b->'c) (a:'a, b:'b) = (  a, f b)
            
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
            
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER 
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
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
            
            module Date =
                let toYYYYMMDD     sep (date:System.DateTime) = sprintf "%d%s%02d%s%02d" date.Year sep  date.Month sep date.Day
                let toHHMM             (date:System.DateTime) = sprintf "%02d:%02d" date.Hour  date.Minute
                let toYYYYMMDDHHMM sep (date:System.DateTime) = sprintf "%s %s" (toYYYYMMDD sep date) (toHHMM date)
                
            let (|REGEX|_|) (expr: string) (opt: string) (value: string) =
                if value = null then None else
                match JavaScript.String(value).Match(RegExp(expr, opt)) with
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
            
            module Msal =
            
                type Policy =
                | SignIn
                | SignUp
                | EditProfile
                | ResetPassword
                with 
                    static member Parse (txt:string) = 
                        match txt.Replace(" ", "") with
                        | "SignUp"        -> SignUp
                        | "EditProfile"   -> EditProfile
                        | "ResetPassword" -> ResetPassword
                        | _               -> SignIn
                    override this.ToString() = (sprintf "%A" this).toUnderscore.Replace('_', ' ')
            
                let policies = [
                    SignIn
                    SignUp
                    EditProfile
                    ResetPassword
                ]
                
                type TokenReceivedCallback = (string * string * string * string * string) -> unit
            
                let (-->) (n:string) (v : _       ) = n, (                           v :> obj) |> Some
                let (==>) (n:string) (vO: _ option) = n, (vO |> Option.map (fun v -> v :> obj))
            
                type AuthOptions = {
                    clientId                    : string
                    authority                   : string
                    validateAuthority           : bool
                    redirectUri                 : string
                    postLogoutRedirectUri       : string
                    navigateToLoginRequestUrl   : bool
                }
                   with
                        static member New(clientId: string, ?authority: string, ?validateAuthority: bool, ?redirectUri: string, ?postLogoutRedirectUri: string, ?navigateToLoginRequestUrl: bool) : AuthOptions=
                            Pojo.newPojoOpt [
                                "clientId"                  --> clientId                 
                                "authority"                 ==> authority                
                                "validateAuthority"         ==> validateAuthority        
                                "redirectUri"               ==> redirectUri              
                                "postLogoutRedirectUri"     ==> postLogoutRedirectUri    
                                "navigateToLoginRequestUrl" ==> navigateToLoginRequestUrl
                            ] |> box |> unbox
            
                type CacheLocation = string // LocalStorage | SessionStorage
            
                type CacheOptions = {
                    cacheLocation          : string
                    storeAuthStateInCookie : bool
                }
                   with
                        static member New(?cacheLocation: CacheLocation, ?storeAuthStateInCookie: bool) : CacheOptions =
                            Pojo.newPojoOpt [
                                "cacheLocation"           ==> cacheLocation
                                "storeAuthStateInCookie"  ==> storeAuthStateInCookie
                            ] |> box |> unbox
            
                type Logger = obj
            
                type SystemOptions = {
                    logger                      : Logger
                    loadFrameTimeout            : int
                    navigateFrameWait           : int
                    tokenRenewalOffsetSeconds   : int
                }
                   with
                        static member New(?logger: Logger, ?loadFrameTimeout: int, ?navigateFrameWait: int, ?tokenRenewalOffsetSeconds: int) : SystemOptions =
                            Pojo.newPojoOpt [
                                "logger"                    ==> logger
                                "loadFrameTimeout"          ==> loadFrameTimeout
                                "navigateFrameWait"         ==> navigateFrameWait
                                "tokenRenewalOffsetSeconds" ==> tokenRenewalOffsetSeconds
                            ] |> box |> unbox
            
                type FrameworkOptions = {
                    isAngular           : bool
                    protectedResourceMap: Map<string, string[]>
                    unprotectedResources: string[]
                }
                   with
                        static member New(?isAngular: bool, ?protectedResourceMap: Map<string, string[]>, ?unprotectedResources: string[]) : FrameworkOptions =
                            Pojo.newPojoOpt [
                                "isAngular"            ==> isAngular
                                "protectedResourceMap" ==> protectedResourceMap
                                "unprotectedResources" ==> unprotectedResources
                            ] |> box |> unbox
            
                type Configuration = { auth: AuthOptions ;cache : CacheOptions ; system: SystemOptions ; framework :  FrameworkOptions }
                    with 
                        static member New(?auth: AuthOptions, ?cache : CacheOptions, ? system: SystemOptions, ? framework :  FrameworkOptions) : Configuration =
                            Pojo.newPojoOpt [
                                "auth"      ==> auth
                                "cache"     ==> cache
                                "system"    ==> system
                                "framework" ==> framework
                            ] |> box |> unbox
            
            //    [< AllowNullLiteral >]
            //    type User (displayableId: string, name: string, identityProvider: string, userIdentifier: string, idToken: obj, sid: string) =
            //        [< Inline "User.createUser($idToken, $clientInfo)" >]
            //        static member createUser(idToken: obj, clientInfo: obj) : User = X<_>
            
                [< AllowNullLiteral >]
                type Account() = 
                    [< DefaultValue >] val mutable accountIdentifier     : string  
                    [< DefaultValue >] val mutable environment           : string  
                    [< DefaultValue >] val mutable homeAccountIdentifier : string  
                    [< DefaultValue >] val mutable idToken               : JSObject
                    [< DefaultValue >] val mutable name                  : string  
                    [< DefaultValue >] val mutable sid                   : string  
                    [< DefaultValue >] val mutable userName              : string  
            
                type AuthResponse = {
                    accessToken  : string
                    account      : Account
                    accountState : string
                    expiresOn    : Date
                    idToken      : JSObject
                    scopes       : Array<string>
                    tenantId     : string
                    tokenType    : string
                    uniqueId     : string        
                }
            
                type AuthError = {
                    errorCode    : string
                    errorMessage : string
                    message      : string
                    name         : string
                    stack        : string option
                }
            
                type tokenReceivedCallback =             AuthResponse  -> unit
                type errorReceivedCallback = AuthError                 -> unit 
                type authResponseCallback  = FuncWithArgs<AuthError * AuthResponse, unit>
            
                type QPDict = JSObject
            
                type AuthenticationParameters = {
                    account              : Account
                    authority            : string
                    claimsRequest        : string
                    correlationId        : string
                    extraQueryParameters : QPDict
                    extraScopesToConsent : string []
                    loginHint            : string
                    prompt               : string
                    scopes               : string []
                    sid                  : string
                    state                : string        
                }
                   with
                        static member New(?account: Account, ?authority: string, ?claimsRequest: string, ?correlationId: string, ?extraQueryParameters: QPDict, ?extraScopesToConsent: string[], ?loginHint: string, ?prompt: string, ?scopes: string[], ?sid: string, ?state: string) : AuthenticationParameters =
                            Pojo.newPojoOpt [
                                "account"              ==> account
                                "authority"            ==> authority
                                "claimsRequest"        ==> claimsRequest
                                "correlationId"        ==> correlationId
                                "extraQueryParameters" ==> extraQueryParameters
                                "extraScopesToConsent" ==> extraScopesToConsent
                                "loginHint"            ==> loginHint
                                "prompt"               ==> prompt
                                "scopes"               ==> scopes
                                "sid"                  ==> sid
                                "state"                ==> state
                            ] |> box |> unbox
            
                type UserAgentApplication
                    [< Inline "new $global.Msal.UserAgentApplication($options)" >] (options: Configuration) =
                    [< Inline "$this.handleRedirectCallback($tokenReceivedCallback, $errorReceivedCallback) " >] member this.handleRedirectCallback(tokenReceivedCallback: tokenReceivedCallback, errorReceivedCallback: errorReceivedCallback) : unit   = X<_>
                    [< Inline "$this.handleRedirectCallback($authCallback)                                  " >] member this.handleRedirectCallback(authCallback: authResponseCallback) : unit                  = X<_>
                    [< Inline "$this.loginPopup(   $request)                                                " >] member this.loginPopup          (?request: AuthenticationParameters  ) : Promise<AuthResponse> = X<_>
                    [< Inline "$this.loginRedirect($request)                                                " >] member this.loginRedirect       (?request: AuthenticationParameters  ) : unit                  = X<_>
                    [< Inline "$this.acquireTokenSilent  ($request)                                         " >] member this.acquireTokenSilent  ( request: AuthenticationParameters  ) : Promise<AuthResponse> = X<_>
                    [< Inline "$this.acquireTokenRedirect($request)                                         " >] member this.acquireTokenRedirect( request: AuthenticationParameters  ) : unit                  = X<_>
                    [< Inline "$this.acquireTokenPopup   ($request)                                         " >] member this.acquireTokenPopup   ( request: AuthenticationParameters  ) : Promise<AuthResponse> = X<_>
                    [< Inline "$this.logout()                                                               " >] member this.logout              ()                                     : unit                  = X<_>
                    [< Inline "$this.getAccount()                                                           " >] member this.getAccount          ()                                     : Account               = X<_>
                    //[< Inline "$this.getUserState($state)                                                   " >] member this.getUserState        (state: string)                        : string                = X<_>
            
    
    //#cd @"d:\Abe\CIPHERWorkspace\FSharpStation/projects/ProzperServer"
    module ProzperServer =
    
        //#define NETSTANDARD20
        //#define WEBSHARPER
        //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\LayoutEngine.dll"
        //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\projects\ProzperServer\bin\ProzperServer.dll"
        
        [< JavaScript >]
        module ClientSide =
            open FsRoot
            open FsRoot.ProzperServer
            
            [< AutoOpen >]
            module Templating =
                open WebSharper.UI.Templating
                let [< Literal >] rootdir = @"d:\Abe\CIPHERWorkspace\FSharpStation\projects\ProzperServer\website"
            
                let [< Literal >] TemplatesFileName = rootdir + @"\indexDes.html"
                type TemplateLib  = Template< TemplatesFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
            
                //let [< Literal >] LoginFileName = rootdir + @"\Login.html"
                //type TemplateLogin  = Template< LoginFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
            
                if IsClient then printfn "%s" TemplatesFileName
            
            module Msal =
                open Msal
            
                [< Inline "console.log($o)" >]
                let consoleLog o : unit = X<_>
            
                let callback(errorDesc, token, error, tokenType, state) = 
                    consoleLog(errorDesc, error, tokenType, token, state)
            
                let storeValue name v =
                    if IsClient then
                        JS.Window.LocalStorage.SetItem(name, v)
                        v
                    else ""
            
                let storageGetItem name =
                    if IsClient then
                        JS.Window.LocalStorage.GetItem name
                    else ""
            
                let storageSetItem(name, v) =
                    if IsClient then
                        JS.Window.LocalStorage.SetItem(name, v)
            
                let appId = if IsClient && JS.Window.Location.Host.StartsWith "prozper0" then "76703639-1d21-4bc3-bd46-c764f5ea78ee" else "70ad4f9b-9a2b-409e-9c1e-d04dbb2e7cf2"
            
                let applicationId       = storeValue "applicationId"          appId
                let tenantName          = storeValue "tenantName"             "prozper"
                let ref                 = storeValue "ref"                    ""
                let extraQueryParms     = storeValue "extraQueryParms"        "mkt=es-us"
                let refreshBefore       = storeValue "refreshBefore"          "0"
                let createOnStart       = storeValue "createOnStart"          "1"
                let forceLogin          = storeValue "forceLogin"             "1"
                let signInPolicy        = storeValue "signInPolicy"           "B2C_1_SignIn"
                let signUpPolicy        = storeValue "signUpPolicy"           "B2C_1_Registrarse"
                let editProfilePolicy   = storeValue "editProfilePolicy"      "B2C_1_EditarPerfil"
                let resetPasswordPolicy = storeValue "resetPasswordPolicy"    "B2C_1_PasswordReset"
                let policyType          = storeValue "policyType"             "SignIn"
                match storageGetItem "preambleState" with
                | "InPreamble"  | "" | null ->
                                          storeValue "preambleState"          "GoToSignIn" |> ignore
                |_->()
            
                let getAuthority tenantName policyName = sprintf "https://%s.b2clogin.com/tfp/%s.onmicrosoft.com/%s" tenantName tenantName policyName
            
                let authority           = getAuthority tenantName signInPolicy
                let userO               = Var.Create None
            
                let redirectCallback(error: AuthError, resp: AuthResponse) = 
                    try 
                        if box error <> null then consoleLog ("redirectCallback ERROR: ", error)
                        if box resp  <> null then consoleLog ("redirectCallback: "      , resp )
                    with e -> printfn "%A %s" e e.StackTrace
            
                let agent = 
                    lazy
                        let agent = 
                          UserAgentApplication(
                            Configuration.New(auth = AuthOptions.New( 
                                                    clientId          = applicationId
                                                ,   authority         = authority    
                                                ,   validateAuthority = false) )
                          )
                        agent.handleRedirectCallback( FuncWithArgs<_,_> redirectCallback )
                        agent
            //            UserAgentApplication(applicationId
            //                , authority
            //                , callback
            //                , UserAgentApplication.Options(validateAuthority         = false
            //                                            ,  storeAuthStateInCookie    = false ))
            
                let getId userO = userO |> Option.map (fun user -> user?idToken?oid) |> Option.defaultValue ""
            
                let referidoPor() = storageGetItem "referidoPor"
                let claims user = 
                    let r = [|
                        "oid"                   ,  user?idToken?oid 
                        "city"                  ,  user?idToken?city 
                        "country"               ,  user?idToken?country 
                        "extension_DateOfBirth" ,  user?idToken?extension_DateOfBirth 
                        "given_name"            ,  user?idToken?given_name 
                        "postalCode"            ,  user?idToken?postalCode 
                        "state"                 ,  user?idToken?state 
                        "streetAddress"         ,  user?idToken?streetAddress 
                        "family_name"           ,  user?idToken?family_name 
                        "emails"                , (user?idToken?emails:string[]).[0]
                        "referidoPor"           ,  referidoPor()
                    |]
                    storageSetItem("referidoPor", "")
                    r
            
                let executePolicy force (policy:Policy) =
                    (if force then "1" else "0") |> storeValue "forceLogin"   |> ignore
                    JS.Window.Location.Href      |> storeValue "goInsideLink" |> ignore
                    string policy                |> storeValue "policyType"   |> ignore
                    JS.Window.Location.Replace "blob/Msal.html"
            
                let checkUser() =
                    async {
                        do! Async.Sleep 100
                        while true do
                            let newO =
                                match agent.Value.getAccount() with
                                | null -> None 
                                | user -> Some user
                            if getId newO <> getId userO.Value then userO.Set newO
                            if userO.Value = None then executePolicy false SignIn
                            do! Async.Sleep 9000
                    } |> Async.Start
            
                let logout          () = executePolicy true SignIn
            
            
                let authParms () =
                    AuthenticationParameters.New( scopes = [|   sprintf "https://%s.onmicrosoft.com/%s/user_impersonation" tenantName appId 
                                                                sprintf "https://%s.onmicrosoft.com/%s/Prozper.Admin"      tenantName appId |] )
            
                let getTokenO0() = async {
                    let someToken from tk = 
                        if tk = null then 
                            consoleLog (from + " token is null!!")
                            None 
                        else Some tk
                    match userO.Value with
                    | Some user  -> try 
                                        let! auth = agent.Value.acquireTokenSilent(authParms () ) |> Promise.AsAsync 
                                        //consoleLog auth
                                        return someToken "getTokenO0 (0): " auth.accessToken
                                    with e ->
                                        consoleLog ("getTokenO0 (1): ", e.Message)
                                        try
                                            let! auth = Async.FromContinuations(fun (ok, ko, ca) -> 
                                                    agent.Value.handleRedirectCallback( FuncWithArgs<_,_> (fun (error: AuthError, resp: AuthResponse) ->
                                                        try 
                                                            if box error <> null then 
                                                                consoleLog ("redirectCallback ERROR: ", error)
                                                                ko (exn error.errorMessage)
                                                            elif box resp  <> null then 
                                                                consoleLog ("redirectCallback: "      , resp )
                                                                ok resp
                                                        with e -> printfn "%A %s" e e.StackTrace
                                                    ) )
                                                    agent.Value.acquireTokenRedirect( authParms () ) 
                                                )
                                            return someToken "getTokenO0 (2): " auth.accessToken
                                        with e ->
                                            consoleLog ("getTokenO0 (3): ", e.Message)
                                            return None
                    | None       -> consoleLog "getTokenO0 (4): No user connected!"
                                    return None
                    //return
                    //    match JS.Window.SessionStorage.GetItem "msal.idtoken" with
                    //    | "" | null -> None
                    //    | token     -> Some token
                }
            
                let getTokenO = 
                    let agent = Mailbox.callA print getTokenO0
                    fun () -> agent.PostAndAsyncReply(fun reply -> reply, () )
            [< JavaScript >]
            module ModeloUI =
            
                let modeloV = Var.Create {
                    idAliado      = IdAliado ":"
                    aliados       = [||]
                    anoActual     = System.DateTime.Now.Year
                    periodoActual = System.DateTime.Now.Month
                    premisas      = premisasCalculo
                    nevento       = -2L
                }
            
                let formasPagoAliadoV : Var<FormaPago []> = Var.Create [||]
            
                let invitacionesV = Var.Create ""    
                let emailsInvitarW = 
                    invitacionesV.View |> View.Map(
                        function
                        | REGEX rexEmail "gi" r -> r
                        |_-> [||]
                        >> Seq.distinct
                        >> Seq.sort
                        >> String.concat "\n"
                    )
                let invitacionesDisabledW = emailsInvitarW |> View.Map(function | "" -> "disabled" |_-> "")
            
                let selAliadoIdOV = Var.Create None
            
                let refAliadoIdOV : Var<IdAliado option> = Var.Create None
            
                let rec separate s parts =
                    match s with
                    | "" -> parts |> String.concat ","
                    | _  -> separate (s.Left -3) (s.Right 3 :: parts)
            
                let money (m:int) = "$" + separate (string m) []
            
                type EndPoint =
                | [< EndPoint "" >] DefaultEP
                |                   NoUser
                |                   PreRegister
                |                   Content of string
                | [<Wildcard>]      Pdf     of string
                | [<Wildcard>]      Video   of string
            
                open Sitelets.InferRouter
                module AF = FsRoot.LibraryJS.AppFramework 
            
                let endPointV   = if IsClient then Router.Infer() |> Router.InstallHash DefaultEP else Var.Create DefaultEP
            
            
                [< Inline "showPDF($f)" >]
                let showPdf (f:string) : unit = X<_>
            
                [< Inline "playVideo()" >]
                let playVideo () : unit = X<_>
            
                endPointV.View |> View.Sink(
                    function
                    | NoUser 
                    | PreRegister   -> ()
                    | Pdf   f       -> showPdf f
                    | Video _       -> playVideo()
                    |_-> Msal.checkUser()
                )
            
                let contentVar =
                    Var.Make 
                        (View.Map2 
                            (fun _ -> function
                            | DefaultEP       when Msal.userO.Value <> None -> "ProzperLyt.mainContent"
                            | Content     lyt when Msal.userO.Value <> None -> lyt
                            | PreRegister                                   -> "ProzperLyt.cntPreRegister"
                            | Pdf         _                                 -> "ProzperLyt.cntPDF"
                            | Video       _                                 -> "ProzperLyt.cntVideo"
                            | _                                             -> "ProzperLyt.cntFormaNoUser"
                            )
                            Msal.userO.View endPointV.View )
                        (function
                        | "ProzperLyt.mainContent"  -> DefaultEP
                        | lyt                       -> Content lyt
                        >> (fun v -> if endPointV.Value <> v then endPointV.Set v)
                        )
            
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
            
                type Aliado with
                    static member LoggedId = Msal.userO.Value |> Option.map (fun user -> user?idToken?oid) |> Option.defaultValue "" |> IdAliado
            
                module Rpc =
                    //Remoting.installBearer Msal.getTokenO
                    let llamadas, addLlamadas =
                        let llamadas = Var.Create 0
                        llamadas.View, fun n -> 
                            async {
                                do      llamadas.Set <| llamadas.Value + n
                                do!     Async.Sleep 50
                            }
                    let iterA arm = AsyncResult.iterA JS.Alert id arm
                    let [< Inline >] inline llamar (f : _ -> Async<Result<_,string>>) p  = async {
                        try do!     addLlamadas  1
                            return! f p
                        finally     addLlamadas -1 |> Async.Start
                    }
                    let [< Inline >] inline llamarT (f : string -> _ -> Async<Result<_,string>>) p  = 
                        asyncResult {
                        try do!     addLlamadas  1
                            let!    tk    = Msal.getTokenO() |> Async.map Result.rtn |> AsyncResult.absorbO (fun () -> JS.Window.Location.Href <- "/Login" ; "User not logged in")
                            return! f tk p
                        finally     addLlamadas -1  |> Async.Start
                    }
                    let obtenerUnions            p = llamar              Rpc0.obtenerUnions                                p
                    let obtenerIdInfluyente      p = llamar              Rpc0.obtenerIdInfluyente                          p
                    let agregarUsuarioSiEsNuevo  p = llamarT (fun tk  -> Rpc0.agregarUsuarioSiEsNuevo  tk Aliado.LoggedId) p
                    let ejecutarDataEventoNuevo  p = llamarT (fun tk  -> Rpc0.ejecutarDataEventoNuevo  tk Aliado.LoggedId) p
                    let enviarCorreosInvitacion  p = llamarT (fun tk  -> Rpc0.enviarCorreosInvitacion  tk Aliado.LoggedId) p
                    let obtenerFormasDePago      p = llamarT (fun tk ()->Rpc0.obtenerFormasDePagoId    tk Aliado.LoggedId) p
                    let registrarTarjeta         p = llamarT (fun tk  -> Rpc0.registrarTarjeta         tk Aliado.LoggedId) p
                    let registrarCuenta          p = llamarT (fun tk  -> Rpc0.registrarCuenta          tk Aliado.LoggedId) p
                    let validarFormaPago         p = llamarT (fun tk  -> Rpc0.validarFormaPago         tk Aliado.LoggedId) p
                    let borrarFormaPago          p = llamarT (fun tk  -> Rpc0.borrarFormaPago          tk Aliado.LoggedId) p
                    let obtenerFormasDePagoPara  p = llamarT (fun tk  -> Rpc0.obtenerFormasDePagoPara  tk                ) p
                    let obtenerFormasDePagoId    p = llamarT (fun tk  -> Rpc0.obtenerFormasDePagoId    tk                ) p
                    let obtenerListaDocs         p = llamarT (fun tk  -> Rpc0.obtenerListaDocs         tk                ) p
                    let obtenerEstadoParaUsuario p = llamarT (fun tk  -> Rpc0.obtenerEstadoParaUsuario tk                ) Aliado.LoggedId
                    let actualizarSubscripcion   p = llamarT (fun tk  -> Rpc0.actualizarSubscripcion   tk Aliado.LoggedId) p
                    let obtenerTransaccionesPara p = llamarT (fun tk  -> Rpc0.obtenerTransaccionesPara tk                ) Aliado.LoggedId
                    let refrescarTransacciones   p = llamarT (fun tk  -> Rpc0.refrescarTransacciones   tk                ) p
                    
            
                    WebSharper.Remoting.EndPoint <- Rpc0.serverEndPoint.Value + "rpc/rpc"
                [< AutoOpen >]
                module Refresh =
                    let mutable shouldRefresh = true
                
                    let refrescarData force = 
                        if force then shouldRefresh <- true
                        match Msal.userO.Value with
                        | Some user ->
                            asyncResult {
                                if Msal.referidoPor() <> "" then
                                    do!   Msal.claims user |> Rpc.agregarUsuarioSiEsNuevo
                                if not JS.Document.Hidden then
                                    if shouldRefresh then
                                        let! data = Rpc.obtenerEstadoParaUsuario ()
                                        shouldRefresh <- false
                                        //if modeloV.Value <> data then modeloV.Set data
                                        modeloV.Set data
                            } |> Rpc.iterA
                        |_-> modeloV.Set modeloVacio
                
                    if IsClient then
                
                        Msal.userO.View |> View.Sink (fun _-> refrescarData true)
                
                        async {
                            while true do
                                do! Async.Sleep (5 * 60 * 1000)
                                //refrescarData true
                        } |> Async.Start
                
                        try 
                            JS.Document.AddEventListener("visibilityChange", (fun () -> (*refrescarData false*)() ), false)
                        with _ -> ()
                
                    
                module VariousUI = 
                
                    let inline fst3 (v,_,_) = v
                    let inline snd3 (_,v,_) = v
                    let inline thr3 (_,_,v) = v
                
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
                    let statuses = Var.Create [||]
                    let aniosV   = Var.Create [||]
                    let mesesV   = Var.Create [||]
                    let tiposAr  = Var.Create [||]
                    let statusAr = Var.Create [||]
                
                    if IsClient then
                        asyncResult {
                            let! p, e, td, tl, g, tc, tt, ss, mm, yy, ta, sa =  Rpc.obtenerUnions()
                            paises  .Set p
                            estados .Set e
                            tiposDir.Set td
                            tiposTel.Set tl
                            generos .Set g
                            tiposCta.Set tc
                            tiposTar.Set tt
                            statuses.Set ss
                            aniosV  .Set yy
                            mesesV  .Set mm
                            tiposAr .Set ta
                            statusAr.Set sa
                        } |> Rpc.iterA 
                
                    let crearOption   n   = Html.Elt.option [             ] [ Html.text n] :> Doc
                    let crearOption2  n v = Html.Elt.option [ attr.value v] [ Html.text n] :> Doc
                    let crearOptions  ns  = ns  |> Seq.map               crearOption       |> Doc.Concat
                    let crearOptions2 nvs = nvs |> Seq.map (fun (n,v) -> crearOption2 n v) |> Doc.Concat
                
                    let removeButton f doc = 
                        Html.form [ attr.``class`` "mui-panel" ] 
                            [   doc 
                                Doc.Button "borrar" [ Html.attr.title "borrar" ] f
                            ]
                
                
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
                
                    let formaDoc (ctaV  : Var<CuentaBancaria * string * bool>) =
                        let disabledW = ctaV.View |> View.Map thr3
                        let forma =
                            TemplateLib.CuentaBancaria()
                                .TiposCuenta( V( crearOptions tiposCta.V ).V )
                                .Mensaje(     V( snd3         ctaV    .V ).V ) 
                                .Disabled1(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled2(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled3(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled4(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled5(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Create()
                
                        ctaV .View 
                        |> View.Sink (fun (cta, _, _) -> 
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
                        ) |> View.Sink (function |None -> () | Some v -> if fst3 ctaV .Value <> v then ctaV .Set (v, "", false) )
                        requeridosW, forma.Doc
                
                    let formaDocO (ctaOV  : Var<(CuentaBancaria * string * bool) option>) =
                        formaDoc (Var.Lens ctaOV (Option.defaultValue (ctaVacio, "", false) ) (fun _ v -> Some v ))
                
                module TarjetaCredito =
                    open VariousUI
                
                    let formaDoc (tarV  : Var<(TarjetaCredito * string * bool)>) =
                        let disabledW = tarV.View |> View.Map thr3
                        let forma =
                            TemplateLib.TarjetaCredito()
                                .TiposTarjeta( V( tiposTar.V                   |> crearOptions  ).V )
                                .Mensaje(      V( tarV    .V                   |> snd3          ).V )
                                .Anios(        V( aniosV  .V |> Seq.map string |> crearOptions  ).V )
                                .Meses(        V( mesesV  .V |> Seq.map string |> crearOptions  ).V )
                                .Disabled1(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled2(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled3(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled4(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled5(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Visible(      attr.styleDyn <| V( if disabledW.V then "display:None" else "" ) )
                                .Create()
                
                        tarV .View 
                        |> View.Sink (fun (tar, mensaje, validated) -> 
                            forma.Vars.Titular      .Set <| tar.titular
                            forma.Vars.TipoTarjeta  .Set <| sprintf "%O"        tar.tipoTarjeta
                            forma.Vars.Numero       .Set <| match tar.numero with NumeroTarjeta s -> s
                            forma.Vars.AnioVenc     .Set <| sprintf "%04d"      tar.expiracion.anio
                            forma.Vars.MesVenc      .Set <| match tar.expiracion.mes with 
                                                            | Mes.Enero      -> "Enero"
                                                            | Mes.Febrero    -> "Febrero"   
                                                            | Mes.Marzo      -> "Marzo"     
                                                            | Mes.Abril      -> "Abril"     
                                                            | Mes.Mayo       -> "Mayo"      
                                                            | Mes.Junio      -> "Junio"     
                                                            | Mes.Julio      -> "Julio"     
                                                            | Mes.Agosto     -> "Agosto"    
                                                            | Mes.Septiembre -> "Septiembre"
                                                            | Mes.Octubre    -> "Octubre"   
                                                            | Mes.Noviembre  -> "Noviembre" 
                                                            | Mes.Diciembre  -> "Diciembre"
                                                            | _              -> "XX"
                        )
                        let requeridosW = 
                            V( 
                                [
                                    forma.Vars.Titular      .V.Trim() = "" , "Titular"
                                    forma.Vars.TipoTarjeta  .V.Trim() = "" , "TipoTarjeta"
                                    forma.Vars.Numero       .V.Trim() = "" , "Numero"
                                    forma.Vars.AnioVenc     .V.Trim() = "" , "Ano de Vencimiento"
                                    forma.Vars.MesVenc      .V.Trim() = "" , "Mes de Vencimiento"
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
                                expiracion    = {
                                    anio = forma.Vars.AnioVenc.V.Trim() |> ParseO.parseIntO |> Option.defaultValue 0
                                    mes  = forma.Vars.MesVenc .V.Trim() |> (function
                                                                            | "Febrero"    -> Mes.Febrero   
                                                                            | "Marzo"      -> Mes.Marzo     
                                                                            | "Abril"      -> Mes.Abril     
                                                                            | "Mayo"       -> Mes.Mayo      
                                                                            | "Junio"      -> Mes.Junio     
                                                                            | "Julio"      -> Mes.Julio     
                                                                            | "Agosto"     -> Mes.Agosto    
                                                                            | "Septiembre" -> Mes.Septiembre
                                                                            | "Octubre"    -> Mes.Octubre   
                                                                            | "Noviembre"  -> Mes.Noviembre 
                                                                            | "Diciembre"  -> Mes.Diciembre 
                                                                            |_             -> Mes.Enero)
                
                                }
                            }            
                        ) |> View.Sink (function |None -> () | Some v -> if fst3 tarV .Value <> v then tarV .Set (v, "", false) ) 
                        requeridosW, forma.Doc
                
                    let formaDocO (tarOV  : Var<(TarjetaCredito * string * bool) option>) =
                        formaDoc (Var.Lens tarOV (Option.defaultValue (tarVacio, "", false) ) (fun _ v -> Some v ))
                
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
                                            asyncResult {
                                                let contactos = [|    
                                                    CorreoElectronico correo
                                                    Telefono          telefono
                                                    Direccion         direccion 
                                                |]
                                                let  nid  = System.Guid.NewGuid().ToString().Replace("-", "").Substring(0,20) |> IdAliado
                                                let! resp = (nid, datos, Some modeloV.Value.idAliado, contactos) |> RegistroNuevo |> Rpc.ejecutarDataEventoNuevo
                                                refrescarData true
                                                sprintf "%A" resp|> JS.Alert
                                            } |> Rpc.iterA
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
                                            asyncResult {
                                                let! resp = ActualizarDatosPersonales (al.id, datos) |> Rpc.ejecutarDataEventoNuevo
                                                refrescarData true
                                                sprintf "%A" resp|> JS.Alert
                                            } |> Rpc.iterA
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
                
                        () //FormaGenerica.forma
                
                
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
                                            asyncResult {
                                                let! resp = ActualizarContactos (al.id, contactosV.Value) |> Rpc.ejecutarDataEventoNuevo
                                                refrescarData true
                                                sprintf "%A" resp|> JS.Alert
                                            } |> Rpc.iterA 
                                        | _ -> JS.Alert "Error not caught FormaDatos"
                                )
                                .Create()
                
                        forma.Doc
                
                    let formaDoc() = aliadoIdDoc formaContactos
                
                module FormaFirma =
                
                    let mensajes    = Var.Create ""
                    let firmanteV   = Var.Create ""
                    let fechaHoraV  = Var.Create ""
                    let locationV   = Var.Create (JSObject())
                    let firmadoV    = Var.Create false
                
                    async {
                        while true do
                            do! Async.Sleep 1000
                            fechaHoraV.Set <| nowStamp().Left(19)
                    } |> Async.Start
                
                    let uploaded : System.Action<obj,string,JQuery.JqXHR> =
                        System.Action<_,_,_>(fun a b c -> 
                            //refrescarListaDocs()
                            print b 
                        )
                
                    [< Inline "html2canvas($el)" >]
                    let html2canvas (el:Dom.Element) : Promise<Dom.Element> = X<_>
                
                    let toBlob (canvas:Dom.Element) (f:Blob -> unit) =
                        if   isUndefined canvas?toBlob   |> not then canvas?toBlob        f
                        elif isUndefined canvas?msToBlob |> not then canvas?msToBlob() |> f
                        else JS.Alert "Browser no es compatible: toBlob"
                
                    [< Inline "obj2Table($o)" >]
                    let obj2Table (o:JSObject) : unit = X<_>
                
                    let subirScreenShot tipo filenamePre = async {
                        try
                            firmadoV.Set true
                            let! loc = Async.FromContinuations(fun (cnt, _, _) -> 
                                JQuery.JQuery.GetJSON("https://ipapi.co/json/", (fun (loc, _) -> cnt (As<_> loc) ) ) |> ignore
                            )
                            [   "appVersion"
                                "platform"  
                                "product"
                                "productSub"
                                "vendor"
                                "languages"
                            ]
                            |> Seq.iter (fun k -> (loc : JSObject).Add(k, JS.Window.Navigator?(k)) )
                            //locationV.Set loc
                            obj2Table loc
                            do! Async.Sleep 100
                            let! canvas = html2canvas(JS.Document.QuerySelector("#FormaFirma")) |> Promise.AsAsync
                            JS.Document.Body.AppendChild canvas |> ignore
                            let filename = sprintf "%s %s.png" filenamePre <| fechaHoraV.Value.Replace(":",".")
                            toBlob canvas (fun (blob:Blob) ->
                                let fd = FormData()
                                fd.Append("fname", filename)
                                fd.Append("data" , blob    )
                                JQuery.AjaxSettings(  Type          = JQuery.RequestType.POST
                                                    , Url           = "/api/subir/" + modeloV.Value.idAliado.Id + "/" + filename
                                                    , Data          = fd
                                                    , ContentType   = Union1Of2 false
                                                    , ProcessData   =           false
                                                    , Success       = uploaded
                                                )
                                |> JQuery.JQuery.Ajax |> ignore
                            )
                            JS.Document.Body.RemoveChild canvas |> ignore
                            return! ActualizarArchivos(Aliado.LoggedId, [| {
                                            comentario = "Firma Electronica"
                                            idAliado   = modeloV.Value.idAliado
                                            modificado = System.DateTime.Now
                                            nombre     = filename
                                            status     = Subido
                                            tamano     = 0L
                                            tipo       = tipo
                                        } |]) |> Rpc.ejecutarDataEventoNuevo
                        finally
                            Refresh.refrescarData true
                            firmadoV.Set          false
                    }
                
                    let formaFirma (nombre:View<string>) (contenido:Doc) tipo procesar filenamePre =
                        let firmarDocumento() = 
                            asyncResult {
                                if mensajes.Value <> "" then JS.Alert mensajes.Value else
                                let! res = subirScreenShot tipo filenamePre
                                do! procesar() |> AsyncResult.map JS.Alert
                                endPointV.Set EndPoint.DefaultEP
                            } |> Rpc.iterA
                        let acepto   = Var.Create false
                        //let nombreW  = V( Aliado.nombre2 aliadoW.V.datosPersonales) 
                        let ymd    (f:System.DateTime) = f.Year * 10000 + f.Month * 100 + f.Day
                        let forma    =
                            TemplateLib.FormaFirma()
                                .FirmarClass(       if mensajes.V = "" then "mui-btn--primary" else ""     )
                                .Mensaje(           mensajes.V                                             )
                                .Contenido(         contenido                                              )
                                .Acepto(            acepto.V                                               )
                                .Firmar(            fun _ -> firmarDocumento()                             )
                                .DateTime(          fechaHoraV.V                                           )
                                .IdLoggedIn(        Aliado.LoggedId.Id                                     )
                                //.Location(          sprintf "%A" locationV.V                               )
                                .TextoBotonFirmar(  if firmadoV.V then "FIRMADO!" else "Firmar y Procesar" )
                                .Create()
                        V( 
                            [
                                forma.Vars.Firmante.V.Trim() <> nombre.V.ToUpper()   , "Nombre en MAYUSCULAS debe coincidir"
                                forma.Vars.Fecha  .V         <> fechaHoraV.V.Left(10), "Introduzca fecha de hoy (YYYY-MM-DD)"
                                forma.Vars.Acepto .V         <> true                 , "Acepte los terminos indicados"
                                Aliado.LoggedId              <> aliadoW.V.id         , "El documento solo debe ser firmado por el titular de la cuenta"
                            ]
                            |> Seq.filter fst
                            |> Seq.map    snd
                            |> String.concat ", "
                        )
                        |> View.Sink mensajes.Set
                        forma.Doc
                     
                module FormaAutorizacion =
                
                    let cuentaPagoO     = Var.Create <| (None : CuentaPago option)
                    let cuentaAutorizar = Var.Create <| Html.text "No hay cuenta seleccionada"
                    let titular         = Var.Create ""
                    let mutable pid : IdPayment = IdPayment ""
                
                    let actualizarSubscripcion() = 
                        Rpc.actualizarSubscripcion pid |> AsyncResult.map (sprintf "Subscripción #%s creada.")
                
                    let formaAutorizacion () =
                        let formaContenido  =
                            TemplateLib.AutorizacionPago()
                                .Titular(           titular.V                                           ) 
                                .MontoAfiliacion(   sprintf "$%d.00" modeloV.V.premisas.montoAfiliacion )
                                .dia(               string <| Aliado.dia aliadoW.V.diaPago              )
                                .CuentaDebitar(     cuentaAutorizar.V                                   )
                                .Doc()
                        
                        cuentaPagoO.Value
                        |> Option.map (fun cp -> cp.AutorizacionPre)
                        |> Option.defaultValue "Autorizacion -- ------"
                        |> FormaFirma.formaFirma titular.View formaContenido Autorizacion actualizarSubscripcion
                     
                module FormaContrato =
                
                    let firmarContrato() = 
                        AsyncResult.rtn "Contrato firmado!"
                
                    let formaContrato () =
                        let nombreW  = V( Aliado.nombre2 aliadoW.V.datosPersonales) 
                        let formaContenido  =
                            TemplateLib.Contrato()
                                .Aliado( nombreW.V ) 
                                .Doc()
                        FormaFirma.formaFirma nombreW formaContenido Contrato firmarContrato "Contrato"
                     
                module FormaFormasPago =
                    open VariousUI
                
                    let msg ({ FormaPago.authorizeIdR = idR }) = 
                        match idR with 
                        | Error "" -> "La cuenta aun no ha sido verificada" 
                        | Error m  -> m 
                        | Ok v -> sprintf "Cuenta verificada: %A" v 
                
                    let ftar = (fun cp -> match cp.cuentaPago with TarjetaCredito tar -> Some (tar, msg cp, (match cp with { FormaPago.authorizeIdR = Ok _ } -> true |_-> false)) |_-> None), (fun fp v -> { fp with cuentaPago = TarjetaCredito v ; authorizeIdR = Error "" })
                    let fcta = (fun cp -> match cp.cuentaPago with CuentaBancaria cta -> Some (cta, msg cp, (match cp with { FormaPago.authorizeIdR = Ok _ } -> true |_-> false)) |_-> None), (fun fp v -> { fp with cuentaPago = CuentaBancaria v ; authorizeIdR = Error "" })
                
                    let refrescarFormasPago() = Rpc.obtenerFormasDePago() |> AsyncResult.map formasPagoAliadoV.Set |> Rpc.iterA
                
                    let formaFormasPago (aliadoW: View<Aliado>) =
                        let mensajes      = Var.Create ""
                        let mostrar       = Var.Create false
                        let formasPagoV   = Var.Create [||]
                        
                        formasPagoAliadoV.View
                        |> View.Sink formasPagoV.Set
                
                        refrescarFormasPago()
                        
                        let formasPagoIW  = V(formasPagoV.V |> Seq.indexed)
                
                        let makeVar (f: (FormaPago -> ('a * string * bool) option) , fr : (FormaPago -> 'a -> FormaPago)) i = 
                            Var.Make (V(formasPagoV.V |> Seq.tryItem i |> Option.bind f )) 
                                    (function Some nv -> Array.replace i (fr formasPagoV.Value.[i] (fst3 nv) ) formasPagoV.Value |> formasPagoV.Set |_-> () )
                        
                        let tars = V( formasPagoIW.V |> Seq.choose (fun (i, c) -> fst ftar c |> Option.map (fun _ -> i) ) )
                        let ctas = V( formasPagoIW.V |> Seq.choose (fun (i, c) -> fst fcta c |> Option.map (fun _ -> i) ) )
                
                        let validar (fp:FormaPago) = 
                            asyncResult {
                                let! pymtId = fp .authorizeIdR
                                let! resp   = Rpc.validarFormaPago pymtId
                                JS.Alert resp
                            } |> Rpc.iterA
                
                        let otherButtons i docF = 
                            [   
                                yield Doc.Button "AUTORIZAR DEBITO" [
                                        attr.``class``   "mui-btn mui-btn--raised mui-btn--primary"
                                        attr.title       "Autorizar pago recurrente" 
                                        attr.styleDyn <| V (match formasPagoV.V.[i].authorizeIdR with | Ok _ -> "" |_-> "display:None")
                                        ] 
                                        (fun _ -> 
                                            match formasPagoV.Value.[i].authorizeIdR, formasPagoV.Value.[i].cuentaPago with
                                            | Error m, _ -> JS.Alert ("Pago no está verificado en Authorize: " + m)
                                            | Ok pid,  CuentaBancaria           { titular = titular }
                                            | Ok pid,  TarjetaCredito           { titular = titular } ->
                                                FormaAutorizacion.cuentaPagoO       .Set <| Some formasPagoV.Value.[i].cuentaPago
                                                FormaAutorizacion.cuentaAutorizar   .Set <| docF()
                                                FormaAutorizacion.titular           .Set <| titular
                                                FormaAutorizacion.pid                    <- pid
                                                Content "ProzperLyt.cntAutorizacion"     |> endPointV.Set
                                            | _ -> JS.Alert "Autorizacion no esta implementada"
                                        )
                                yield Html.br [] []
                                yield Html.br [] []
                                yield docF()
                                yield V(
                                    match formasPagoV.V.[i].subscripcion with
                                    | None     -> Doc.Empty
                                    | Some sub -> Html.div [] [ Html.text <| sprintf "Subscripcion: %s" sub.Short ]) |> Doc.BindView id
                                yield Doc.Button "validar" [    
                                        Html.attr.title "validar forma de pago" 
                                        Html.attr.styleDyn <| V (match formasPagoV.V.[i].authorizeIdR with | Ok _ -> "" |_-> "display:None")
                                        ] (fun _ -> validar formasPagoV.Value.[i]  )
                            ] 
                            |> Doc.Concat
                            |> removeButton (fun _ -> formasPagoV.Value |> Array.remove i |> formasPagoV.Set )
                
                
                        let tarDocs = tars |> Doc.BindSeqCachedBy id (fun i -> makeVar ftar i |> (fun v () -> TarjetaCredito.formaDocO v |> snd) |> otherButtons i )
                        let ctaDocs = ctas |> Doc.BindSeqCachedBy id (fun i -> makeVar fcta i |> (fun v () -> CuentaBancaria.formaDocO v |> snd) |> otherButtons i )
                
                        let fp cp = {
                            cuentaPago   = cp
                            authorizeIdR = Error ""
                            nombre       = ""
                            subscripcion = None
                        }
                
                        let fpIds fps  = fps |> Seq.choose(fun fp -> match fp.authorizeIdR with | Ok fpid -> Some fpid |_-> None) |> Set
                
                        let forma =
                            TemplateLib.FormaCuentas()
                                .Mensajes(    if mostrar.V then mensajes.V else ""                                    )
                                .Tarjetas(    tarDocs              ) 
                                .Cuentas(     ctaDocs              ) 
                                .MasTarjeta(  fun _ -> formasPagoV.Value |> Array.append <| [| TarjetaCredito tarVacio |> fp |] |> formasPagoV.Set)
                                .MasCuenta(   fun _ -> formasPagoV.Value |> Array.append <| [| CuentaBancaria ctaVacio |> fp |] |> formasPagoV.Set)
                                .Changed(     if formasPagoAliadoV.V = formasPagoV.V then "" else "mui-btn--primary" )
                                .Salvar(fun ev ->
                                    mostrar.Set true
                                    let m =  mensajes.Value
                                    if  m.Trim() <> "" then JS.Alert m else 
                                        match View.TryGet aliadoW with
                                        | Some al ->
                                            asyncResult {
                                                let fpids = fpIds formasPagoAliadoV.Value - fpIds formasPagoV.Value
                                                for fpid in fpids do
                                                    let! resp = Rpc.borrarFormaPago fpid
                                                    () // do! ResultMessage.Info resp
                                                for formaPago in formasPagoV.Value do
                                                    let callO = match formaPago.cuentaPago with
                                                                | TarjetaCredito tar when not (tar.numero.Id.Contains "X") -> Some <| Rpc.registrarTarjeta tar
                                                                | CuentaBancaria cta when not (cta.numero.Id.Contains "X") -> Some <| Rpc.registrarCuenta  cta
                                                                | _-> None
                                                    match callO with
                                                    | None -> ()
                                                    | Some call ->
                                                    let! resp = call
                                                    () // do! ResultMessage.Info resp
                                                refrescarFormasPago()
                                                Refresh.refrescarData true
                                            } |> Rpc.iterA
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
                            let rec buscarExpandidos (al:Aliado) = seq {
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
                            V (Seq.tryFind (fun (al:Aliado) -> al.id = alid.V) aliados.V)
                
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
                
                
                module Transacciones =
                
                    let transaccionesW = 
                        modeloV.View 
                        |> View.MapAsync (fun modelo -> 
                            Rpc.obtenerTransaccionesPara Aliado.LoggedId 
                            |> Async.map (Result.defaultValue [||]))
                
                    let docTransacciones aliadoW =
                        TemplateLib.Transacciones()
                            .TBody(
                                (transaccionesW, aliadoW)
                                ||> View.Map2 (fun trs al -> trs |> Seq.filter (fun tr -> tr.idAliado = al.id) |> Seq.sortBy (fun tr -> tr.fechaPago))
                                |> Doc.BindSeqCachedViewBy (fun tr -> tr.transaccion) (fun trid trv ->
                                    TemplateLib.Transaccion()
                                        .Fecha(              trv.V.fechaPago |> Date.toYYYYMMDDHHMM "-"  )
                                        .TransId(            trv.V.transaccion                           )
                                        .Cuenta(             trv.V.concepto .ToString()                  )
                                        .Status(             trv.V.statusTran                            )
                                        .Monto(              sprintf "%0.2f" (float trv.V.monto / 100. ) )
                                        .Doc()
                                )
                            ).Doc()
                
                    let transacciones() =
                        selAliadoIdDoc docTransacciones
                module ListaDocs =
                    open VariousUI
                
                    let expandedOV = Var.Create None
                    let aliadoIdW  = V(expandedOV.V  |> Option.defaultWith (fun () -> aliadoW.V.id) )
                    let listaDocs() =
                
                        let docsV = ListModel.Create (fun (ar:Archivo) -> ar.nombre) [||]
                        let origV = ListModel.Create (fun (ar:Archivo) -> ar.nombre) [||]
                
                        let refrescarListaDocs() = 
                            asyncResult {
                                origV.Set [||]
                                docsV.Set [||]
                                let! aid  = View.GetAsync aliadoIdW
                                let! docs = Rpc.obtenerListaDocs aid
                                origV.Set docs
                                docsV.Set docs
                            } |> Rpc.iterA 
                
                        aliadoIdW |> View.Sink (fun id -> if id <> IdAliado "" then refrescarListaDocs())
                
                        let uploaded id : System.Action<obj,string,JQuery.JqXHR> =
                            System.Action<_,_,_>(fun a b c ->
                                asyncResult {
                                    refrescarListaDocs()
                                    let! r = ActualizarArchivos(IdAliado id, Seq.toArray docsV.Value) |> Rpc.ejecutarDataEventoNuevo
                                    Refresh.refrescarData true
                                    JS.Alert b 
                                } |> Rpc.iterA 
                            )
                
                        let subir (e:Dom.MouseEvent) id =
                            e.PreventDefault()
                            let form = JQuery.JQuery("#SubirDocumentos")
                            let fd = FormData()
                            for x in form.SerializeArray() do
                                fd.Append(x?name, (x?value : string) )
                            let files = FileList.OfElement <| form.Children("input[type=file]").First().Get(0)
                            let file  = files.[0]
                            let filename = file.Name 
                            fd.Append("file", file)
                            JQuery.AjaxSettings(   Type          = JQuery.RequestType.POST
                                                , Url           = "/api/subir/" + id + "/" + filename
                                                , Data          = fd
                                                , ContentType   = Union1Of2 false
                                                , ProcessData   =           false
                                                , Success       = uploaded id
                                            )
                            |> JQuery.JQuery.Ajax |> ignore
                
                
                        TemplateLib.SubirDocumentos()
                            .TBody(
                                docsV
                                |> ListModel.docLensMapView id (fun nm arV ->
                                    let disabledW = V( arV.V.idAliado = Aliado.LoggedId )
                                    let enlace = 
                                        TemplateLib.EnlaceDocumento()
                                            .idAliado( V ( aliadoIdW.V.Id )                            )
                                            .archivo(      arV.V.nombre                                )
                                            .nombre(       arV.V.nombre                                )
                                            .Doc()
                                    TemplateLib.FilaDocs()
                                        .enlace(        enlace                                      )
                                        .tipo(  Var.Make(V(arV.V.tipo  .ToString() )) (TipoArchivo  .Parse >> (Lens arV.V.tipo  ).Set) )
                                        .status(Var.Make(V(arV.V.status.ToString() )) (StatusArchivo.Parse >> (Lens arV.V.status).Set) )
                                        .tamano(        arV.V.tamano     |> String.thousands        )
                                        .modificado(    arV.V.modificado |> Date.toYYYYMMDDHHMM "-" )
                                        .statuses(      V(statusAr.V |> crearOptions ).V            )
                                        .disabled(      attr.disabledDynPred (View.Const "") disabledW )
                                        .Doc()
                                )
                            )
                            .Subir( fun e -> aliadoIdW |> View.Map (fun aid -> aid.Id) |> View.Get (subir e.Event)  )
                            .TiposArchivo( V(tiposAr.V |> crearOptions ).V )
                            .Changed(        if origV.View.V = docsV.View.V then "" else "mui-btn--primary" )
                            .Salvar(fun ev ->
                                    asyncResult {
                                        let ars = 
                                            docsV.Value
                                            |> Seq.filter(fun ar ->
                                                let orO =  origV.Value |> Seq.tryFind(fun o -> o.nombre = ar.nombre)
                                                orO <> Some ar)
                                            |> Seq.toArray
                                        if Seq.isEmpty ars |> not then
                                            let! aid  = View.GetAsync aliadoIdW
                                            let! resp = ActualizarArchivos(aid, ars) |> Rpc.ejecutarDataEventoNuevo
                                            refrescarListaDocs()
                                            refrescarData true
                                            sprintf "%A" resp|> JS.Alert
                                    } |> Rpc.iterA
                            )
                            .Doc()
                
                module Pendientes =
                
                    let esIdentificacion  (ar:Archivo) = match ar.tipo with | Pasaporte | Cedula | LicenciaConducir -> true |_-> false
                    let esArchivoTipo tipo (ar:Archivo) = ar.tipo = tipo
                
                    let filtroArchivo      p (archivos:Archivo   seq) = archivos |> Seq.filter (fun ar -> ar.status <> Expirado && ar.status <> Cancelado) |> Seq.filter  p |> Seq.toArray
                    let tryArchivo         p (archivos:Archivo   seq) = archivos |> filtroArchivo (fun _ -> true) |> Seq.tryFind p
                    let tryArchivoTipo    tipo = tryArchivo    (fun ar -> ar.tipo = tipo)
                
                    let filtroCuenta       p (cuentas :FormaPago seq) = cuentas  |> Seq.filter p |> Seq.toArray
                
                    let pendiente (docs:Doc seq) = Html.li [] docs
                
                    module Enlace =
                        let FormaW9                         = "/#/Pdf/blob/Inscripcion/07 Form W-9.pdf"
                        let FormaW8BEN                      = "/#/Pdf/blob/Inscripcion/05 Form W-8BEN.pdf"
                        let FormasPago                      = "/#/Content/ProzperLyt.cntFormaFormasPago"
                        let FormaContrato                   = "/#/Content/ProzperLyt.cntFormaContrato"
                        let Subir                           = "/#/Content/ProzperLyt.cntSubirDocumentos"
                
                    let tarchivo2String =
                        function
                        | FormaW9               -> ("Formulario W-9"      , "o"   ), Enlace.FormaW9
                        | FormaW8BEN            -> ("Formulario W-8BEN"   , "o"   ), Enlace.FormaW8BEN
                        | Autorizacion          -> ("Autorización de pago", "a"   ), Enlace.FormasPago
                        | Contrato              -> ("Contrato"            , "o"   ), Enlace.FormaContrato
                        | Cedula                -> ("Cedula"              , "a"   ), Enlace.Subir
                        | LicenciaConducir      -> ("Licencia de Conducir", "a"   ), Enlace.Subir
                        | Pasaporte             -> ("Pasaporte"           , "o"   ), Enlace.Subir
                        | TipoArchivo.Otro txt  -> (txt                   , "o(a)"), Enlace.Subir
                
                    let sufijo (ar:Archivo) = tarchivo2String ar.tipo |> fst |> snd
                
                    let enlace          dir texto   = Html.a [ attr.href dir ] [ Html.text texto ]
                    let enlaceArchivo (ar:Archivo)  = 
                            TemplateLib.EnlaceDocumento()
                                .idAliado( ar.idAliado.Id                       )
                                .archivo(  ar.nombre                            )
                                .title(    ar.nombre                            )
                                .nombre(   tarchivo2String ar.tipo |> fst |> fst)
                                .Doc()
                
                    let agregarCuenta () =
                        [ 
                            Html.i    [ attr.``class`` "far fa-square" ] []
                            Html.text " Agregar Forma de pago: "
                            enlace Enlace.FormasPago  "Tarjeta de Credito o Cuenta Bancaria" 
                        ] |> Seq.ofList
                
                    let firmarContrato () =
                        [ 
                            Html.i    [ attr.``class`` "far fa-square" ] []
                            Html.text " Firmar "
                            enlace Enlace.FormaContrato "Contrato" 
                        ] |> Seq.ofList
                
                    let firmarAutorizacion () =
                        [ 
                            Html.i [ attr.``class`` "far fa-square" ] []
                            Html.text " Firmar "
                            enlace Enlace.FormasPago "Autorizacion (Haga click en: AUTORIZAR DEBITO)" 
                        ] |> Seq.ofList
                
                    let subirArchivoTipo (tipo:TipoArchivo) =
                        let (text, suf), link = tarchivo2String tipo
                        [ 
                            Html.i [ attr.``class`` "far fa-square" ] []
                            enlace Enlace.Subir (" Subir " + text + ".")
                            enlace link          "(Descargar aqui)"    
                        ] |> Seq.ofList
                
                    let subirIdentificacion () =
                        [ 
                            Html.i [ attr.``class`` "far fa-square" ] []
                            enlace Enlace.Subir " Subir " 
                            Html.text "documento de identidad: "
                            enlace Enlace.Subir "Cedula, Pasaporte, Licencia de Conducir" 
                        ] |> Seq.ofList
                
                    let pendienteArchivo (ar:Archivo) =
                        [ 
                            Html.i [ attr.``class`` "far fa-check-square" ] []
                            Html.text " "
                            enlaceArchivo ar
                            Html.text (sprintf " subid%s. " <| sufijo ar)
                            Html.i [ attr.``class`` "far fa-square" ] []
                            Html.text " Pendiente de Verificacion"
                        ] 
                
                    let verificarArchivo (ar:Archivo) =
                        match ar.status with
                        | Verificado   -> [ 
                                            Html.i [ attr.``class`` "fas fa-check-double" ] []
                                            Html.text " "
                                            enlaceArchivo ar
                                            Html.text (sprintf " Verificad%s"  <| sufijo ar)
                                        ]
                        | Rechazado    -> [ 
                                            Html.i [ attr.``class`` "fas fa-times-circle" ] []
                                            Html.text " "
                                            enlaceArchivo ar
                                            Html.text (sprintf " Rechazad%s"  <| sufijo ar)
                                        ]
                        | _            -> pendienteArchivo ar
                        |> Seq.ofList
                
                    let chequearArchivos es (subirlo:unit-> Doc seq) archivos =
                        match filtroArchivo es archivos with
                        | [||]   -> subirlo() |> Seq.singleton
                        | docs   -> match docs |> Seq.tryFind (fun d -> d.status =  Verificado) with
                                    | Some ver -> verificarArchivo ver |> Seq.singleton
                                    | None     -> 
                                    let mensajes = docs |> Seq.map verificarArchivo
                                    if docs |> Seq.exists (fun d -> d.status <> Rechazado) then mensajes
                                    else               subirlo() |> Seq.singleton |> Seq.append mensajes
                
                    let verificarCuenta (fp:FormaPago) =
                        let sub = fp.subscripcion |> Option.map (fun sub -> "Subscripción: " + sub.Short) |> Option.defaultValue ""
                        match fp.authorizeIdR with 
                        | Ok id   -> [ 
                                        Html.i [ attr.``class`` "far fa-check-square" ] []
                                        Html.text (sprintf " %s %s Registrada. (%s) %s"              fp.cuentaPago.TipoLargo fp.cuentaPago.MaskedCuenta id.Id sub) 
                                    ]
                        | Error m -> [ 
                                        Html.i [ attr.``class`` "far fa-square" ] []
                                        Html.text (sprintf " %s %s NO REGISTRADA en Authorize (%s)" fp.cuentaPago.TipoLargo fp.cuentaPago.MaskedCuenta m    ) 
                                    ]
                        |> Seq.ofList
                
                    let chequearCuentas es (agregar:unit-> Doc seq) (cuentas:FormaPago[]) =
                        match filtroCuenta es cuentas with 
                        | [||] -> agregar() |> Seq.singleton
                        | docs -> docs      |> Seq.map verificarCuenta
                
                    let esAutorizacion (cuentas:FormaPago seq) (archivo:Archivo) =
                        if archivo.tipo = Autorizacion then
                            cuentas |> Seq.exists (fun fp -> archivo.nombre.Contains fp.cuentaPago.MaskedCuenta)
                        else false
                
                    let chequearStatusAliado (aliado:Aliado) (archivosAR:AsyncResult<Archivo[], _>) (cuentasAR:AsyncResult<FormaPago[], _>) = asyncResult {
                        match aliado.status with
                        | CuentaCreada -> 
                            let! archivos = archivosAR
                            let! cuentas  = cuentasAR
                            let  ctasAuth = cuentas |> Seq.filter (fun fp -> match fp.authorizeIdR with Ok _ -> true |_-> false)
                            return  [
                                yield!     archivos |> chequearArchivos (esArchivoTipo Contrato    )            firmarContrato
                                yield!     cuentas  |> chequearCuentas  (fun _ -> true             )            agregarCuenta
                                if ctasAuth |>  Seq.length > 0 then
                
                                    yield! archivos |> chequearArchivos (esAutorizacion ctasAuth   )            firmarAutorizacion
                                yield!     archivos |> chequearArchivos (esArchivoTipo FormaW9     ) (fun () -> subirArchivoTipo FormaW9     )
                                yield!     archivos |> chequearArchivos (esArchivoTipo FormaW8BEN  ) (fun () -> subirArchivoTipo FormaW8BEN  )
                                yield!     archivos |> chequearArchivos  esIdentificacion                       subirIdentificacion   
                            ] 
                        |_-> return []
                    }
                
                    let pendientes (aliadoW :View<Aliado>) = 
                        aliadoW 
                        |> View.MapAsync (fun al -> async {
                            let! r = chequearStatusAliado al (Rpc.obtenerListaDocs al.id) (Rpc.obtenerFormasDePagoId al.id)
                            match r with
                            | Ok    doc when Seq.isEmpty doc 
                                        -> return Doc.Empty
                            | Ok    doc -> return TemplateLib.Pendientes()
                                                    .pasos(doc |> Seq.map pendiente |> Doc.Concat )
                                                    .Doc()
                            | Error m   -> return Html.text m
                        } )
                        |> Doc.BindView id
                
                module ReporteConsolidado =
                    open VariousUI
                    open SortWith
                
                    let nombreReferidor idO =
                        idO
                        |> Option.bind (fun id ->
                            modeloV.Value.aliados
                            |> Seq.tryFind (fun al -> al.id = id))
                        |> Option.map (fun al -> Aliado.nombre al.datosPersonales)
                        |> Option.defaultValue "-"
                    let referidos al =
                        if al.nReferidos = 0 then "-" else
                        sprintf "%d/%d" al.nRefActivos al.nReferidos
                    let descendientes al =
                        if al.nDescendientes = 0 then "-" else
                        sprintf "%d/%d" al.nDescActivos al.nDescendientes
                    let comision    v  = if v = 0 then "-" else money v 
                    let flecha (o:int, d:bool, _) = if o = 1 then (if d then "\u2191" else "\u2193") else ""
                    
                    type Fila<'T> = 'T []
                
                    let mutable definicion = [||]
                    let agregarCampo orden direccion f : int =
                        definicion <- Array.append definicion [| orden, direccion, f |]
                        definicion.Length - 1
                
                    let i_archivos      = agregarCampo  1 false (fun (al:Aliado) -> if al.docPendientes = 0 then sprintf "%2d" al.documentos else sprintf "(%2d)%2d" al.docPendientes al.documentos)
                    let i_nombre        = agregarCampo 14 true  (fun (al:Aliado) -> Aliado.nombre       al.datosPersonales            )
                    let i_correo        = agregarCampo 13 true  (fun (al:Aliado) -> Aliado.correo       al                            )
                    let i_status        = agregarCampo 03 true  (fun (al:Aliado) -> sprintf "%A"        al.status                     )
                    let i_influyente    = agregarCampo 04 false (fun (al:Aliado) -> al.influyente |> Option.defaultValue ""           )
                    let i_tipo          = agregarCampo 05 true  (fun (al:Aliado) -> sprintf "%A"        al.tipo                       )
                    let i_referido      = agregarCampo 06 true  (fun (al:Aliado) -> nombreReferidor     al.idPadreO                   )
                    let i_nivel         = agregarCampo 07 true  (fun (al:Aliado) -> sprintf "%9d"       al.nivel                      )
                    let i_referidos     = agregarCampo 08 true  (fun (al:Aliado) -> sprintf "%9s" <| referidos           al           )
                    let i_descendientes = agregarCampo 02 false (fun (al:Aliado) -> sprintf "%9s" <| descendientes       al           )
                    let i_comision      = agregarCampo 09 true  (fun (al:Aliado) -> sprintf "%9s" <| comision            al.comision  )
                    let i_diaPago       = agregarCampo 10 true  (fun (al:Aliado) -> (sprintf "%A"        al.diaPago).Right 2          )
                    let i_desde         = agregarCampo 11 true  (fun (al:Aliado) -> Date.toYYYYMMDD "-" al.fechaRegistro              )
                    let i_Id            = agregarCampo 12 true  (fun (al:Aliado) -> sprintf "%s"        al.id.Id                      )
                
                    let consolidado() =
                
                        let aliadosV = Var.Create [||]
                
                        V(modeloV.V.aliados)
                        |> View.Sink aliadosV.Set
                
                        let seleccionar id =  Some id |> selAliadoIdOV.Set
                
                        let aliado2Fila al : Fila<string> = definicion |> Array.map (fun (_,_,f) -> f al)
                
                        let ordenV = 
                            definicion
                            |> Array.mapi (fun i (a, b, _) -> a,b,  (fun (d:Fila<string>) -> d.[i].ToUpper() ) )
                            |> Var.Create 
                
                        let campos (orden:Fila<_*_*_>) = orden
                
                        let newOrden (n, _, _) (no, vo, fo) =
                              ( if   no = n then      1
                                elif no < n then no + 1
                                else no)
                            , (if n = no && n = 1 then not vo else vo)
                            , fo
                
                        let toggle (v:int * bool * (Fila<string> -> string) ) = 
                            ordenV.Value
                            |> Array.map (newOrden v)
                            |> ordenV.Set
                
                        let filtroV = Var.Create ""
                
                        let sortAliados (als:Aliado seq) (orden:Fila<_*_*(Fila<string> -> string)>) (filtro:string) =
                            let vt = filtro.Trim().ToUpper()
                            let filtros = campos orden |> Array.map (fun (_,_,f) -> f)
                            let filtrar (fila:Fila<string>) =
                                if vt = "" then true
                                else filtros |> Seq.exists(fun f -> (f fila).Contains vt)
                            let comparar = 
                                campos orden
                                |> Array.sortBy (fun (n, _, _) -> n)
                                |> Array.map    (fun (n, a, f) -> (if a then asc else desc) f)
                                |> Array.reduce (&>)
                            als 
                            |> Seq.map aliado2Fila
                            |> Seq.filter   filtrar
                            |> Seq.sortWith comparar
                
                        let setAliado id f = 
                            aliadosV.Value
                            |> Array.map (fun al -> if al.id = id then f al else al)
                            |> aliadosV.Set
                
                        let setStatus id (v:string) = 
                            setAliado id (fun al -> { al with status = StatusAliado.tryParse v } ) 
                
                        let setInfluyente id (v:string) = 
                            setAliado id (fun al -> { al with influyente = if v.Trim() = "" then None else Some <| v.Trim() } ) 
                
                        let setPadre id (v:string) =
                            let padre = if v = "" then None else Some (IdAliado v)
                            setAliado id (fun al -> { al with idPadreO = padre } )
                
                        let referidores =
                            modeloV.View
                            |> Doc.BindView (fun m -> 
                                m.aliados 
                                |> Seq.map (fun al -> Aliado.nombre2 al.datosPersonales, al.id.Id ) 
                                |> crearOptions2 ) 
                
                        let obtenerAliado alid = modeloV.Value.aliados |> Seq.tryFind (fun al -> al.id = alid)
                
                        let salvar () = 
                            asyncResult {
                                for al in aliadosV.Value do
                                    match obtenerAliado al.id with
                                    | None -> ()
                                    | Some al2 ->
                                    if al.status <> al2.status || al.idPadreO <> al2.idPadreO || al.influyente <> al2.influyente then
                                        let! res = ActualizarStatusPadre(al.id, al.status, al.idPadreO, al.influyente) |> Rpc.ejecutarDataEventoNuevo
                                        () // do! ResultMessage.Info (sprintf "%A" res)
                                refrescarData true
                            } |> Rpc.iterA
                
                
                        let pendientes    = 
                            View.Do {
                                let! selIdO = ListaDocs.expandedOV.View
                                match selIdO with
                                | None    -> return Doc.Empty
                                | Some id ->
                                let! als = aliadosV.View
                                match als |> Seq.tryFind(fun al -> al.id = id) with
                                | None    -> return Doc.Empty
                                | Some al ->
                                return Pendientes.pendientes(View.Const al)
                            } |> Doc.BindView id
                
                        let listaArchivos = lazy Html.tr [ attr.bgcolor "beige" ] [ Html.td [ attr.colspan "12" ] [ pendientes ; ListaDocs.listaDocs() ] ]
                
                        TemplateLib.Consolidado()
                            .Salvar(              fun _ -> salvar() )
                            .Cancelar(            fun _ -> aliadosV.Set   modeloV.Value.aliados   )
                            .Changed(             if modeloV.V.aliados = aliadosV.V then "" else "mui-btn--primary" )
                            .Filtro(              filtroV                                        )
                            .Referidores(         referidores                                    )
                            .sort_archivos(       fun _ -> toggle ordenV.Value.[i_archivos     ] )
                            .sort_nombre(         fun _ -> toggle ordenV.Value.[i_nombre       ] )
                            .sort_correo(         fun _ -> toggle ordenV.Value.[i_correo       ] )
                            .sort_status(         fun _ -> toggle ordenV.Value.[i_status       ] ) 
                            .sort_influyente(     fun _ -> toggle ordenV.Value.[i_influyente   ] ) 
                            .sort_tipo(           fun _ -> toggle ordenV.Value.[i_tipo         ] )
                            .sort_referido(       fun _ -> toggle ordenV.Value.[i_referido     ] )
                            .sort_nivel(          fun _ -> toggle ordenV.Value.[i_nivel        ] )
                            .sort_referidos(      fun _ -> toggle ordenV.Value.[i_referidos    ] )
                            .sort_descendientes(  fun _ -> toggle ordenV.Value.[i_descendientes] )
                            .sort_comision(       fun _ -> toggle ordenV.Value.[i_comision     ] )
                            .sort_diaPago(        fun _ -> toggle ordenV.Value.[i_diaPago      ] )
                            .sort_desde(          fun _ -> toggle ordenV.Value.[i_desde        ] )
                            //.sort_Id(             fun _ -> toggle ordenV.Value.[i_Id           ] )
                            .flecha_archivos(              flecha ordenV.V    .[i_archivos     ] ) 
                            .flecha_nombre(                flecha ordenV.V    .[i_nombre       ] )
                            .flecha_correo(                flecha ordenV.V    .[i_correo       ] )
                            .flecha_status(                flecha ordenV.V    .[i_status       ] ) 
                            .flecha_influyente(            flecha ordenV.V    .[i_influyente   ] ) 
                            .flecha_tipo(                  flecha ordenV.V    .[i_tipo         ] )
                            .flecha_referido(              flecha ordenV.V    .[i_referido     ] )
                            .flecha_nivel(                 flecha ordenV.V    .[i_nivel        ] )
                            .flecha_referidos(             flecha ordenV.V    .[i_referidos    ] )
                            .flecha_descendientes(         flecha ordenV.V    .[i_descendientes] )
                            .flecha_comision(              flecha ordenV.V    .[i_comision     ] )
                            .flecha_diaPago(               flecha ordenV.V    .[i_diaPago      ] )
                            .flecha_desde(                 flecha ordenV.V    .[i_desde        ] )
                            //.flecha_Id(                    flecha ordenV.V    .[i_Id           ] )
                            .TBody(
                                (V modeloV.V.aliados, ordenV.View, filtroV.View) 
                                |||> View.Map3 sortAliados
                                |> Doc.BindSeqCachedViewBy (fun al -> al.[i_Id]) (fun alid fW ->
                                    TemplateLib.FilaConsolidado() 
                                        .nombre(        fW.V.[i_nombre       ])
                                        .correo(        fW.V.[i_correo       ])
                                        .tipo(          fW.V.[i_tipo         ])
                                        .referido(      Var.Make (V fW.V.[i_referido   ]) (setPadre      <| IdAliado alid) )
                                        .status(        Var.Make (V fW.V.[i_status     ]) (setStatus     <| IdAliado alid) )
                                        .influyente(    Var.Make (V fW.V.[i_influyente ]) (setInfluyente <| IdAliado alid) )
                                        .Statuses(      statuses.View |> Doc.BindView crearOptions                    )
                                        .nivel(         fW.V.[i_nivel        ])
                                        .referidos(     fW.V.[i_referidos    ])
                                        .descendientes( fW.V.[i_descendientes])
                                        .comision(      fW.V.[i_comision     ])
                                        .diaPago(       fW.V.[i_diaPago      ])
                                        .desde(         fW.V.[i_desde        ])
                                        .Id(            fW.V.[i_Id           ])
                                        .detalles( V(if ListaDocs.expandedOV.V = Some (IdAliado alid) then listaArchivos.Value else Doc.Empty ) |> Doc.BindView id )
                                        .expandFiles(   fun _ -> 
                                            async {
                                                do! Rpc.addLlamadas  1
                                                do  (if ListaDocs.expandedOV.Value = Some (IdAliado alid) then None else Some (IdAliado alid)) |> ListaDocs.expandedOV.Set
                                                do! Rpc.addLlamadas -1
                                            } |> Async.Start
                                            )
                                        .expanded(      fW.V.[i_archivos])
                                        .Doc()
                                )
                            ).Doc()
                module TablaPagos =
                    open SortWith
                
                    [< Inline "saveAs(new Blob([$_txt], {type: 'text/plain;charset=utf-8'}), $_name)" >]
                    let saveAsJavaScript (_name:string) (_txt:string) = ()
                    
                    let comisiones() =
                
                        let referidos al =
                            if al.nReferidos = 0 then "-" else
                            sprintf "%d/%d" al.nRefActivos al.nReferidos
                        let descendientes al =
                            if al.nDescendientes = 0 then "-" else
                            sprintf "%d/%d" al.nDescActivos al.nDescendientes
                        let comision v = if v = 0 then "-" else money v 
                        let seleccionar id =  Some id |> selAliadoIdOV.Set
                        let sortAliados als =
                            als |> Seq.sortWith (desc (fun al -> al.comision                       )
                                              &>  asc (fun al -> al.status                         )
                                              &> desc (fun al -> al.nRefActivos , al.nReferidos    )
                                              &> desc (fun al -> al.nDescActivos, al.nDescendientes)
                                              &>  asc (fun al -> Aliado.nombre al.datosPersonales  ) )
                
                        let pagos (als:Aliado[]) = 
                            asyncResult {
                                let  alsf   = als  |> Seq.filter (fun al -> al.comision > 0) 
                                let  alIds  = alsf |> Seq.map    (fun al -> al.id          ) |> Seq.toArray
                                let! fpss   = Rpc.obtenerFormasDePagoPara alIds
                                let  ctas   = (fpss:(IdAliado * FormaPago []) []) |> Seq.map (fun (id, fps)-> id, fps |> Seq.tryPick (fun fp -> match fp.cuentaPago with | CuentaBancaria cta -> Some cta |_-> None) |> Option.defaultValue ctaVacio )
                                let  alfps  = Seq.zip alsf ctas |> Seq.choose(fun (al, (aid2, cta) ) -> if al.id = aid2 then Some(al, cta) else None)
                                return alfps
                            } |> Async.map (Result.defaultValue Seq.empty)
                
                        let pagosW =
                                V (modeloV.V.aliados )                
                                |> View.MapAsync pagos
                
                        let def d v = if v = "" then d else v
                
                
                        let saveAs() = 
                            async {
                                let name = "pagos.csv" 
                                let! data = pagosW |> View.GetAsync
                                let csv   = data |> Seq.map(fun alfpW ->
                                                let alW  = fst alfpW
                                                let ctaW = snd alfpW
                                                sprintf "%s,%s,%s,%s,%A,%A" 
                                                    ("22"                               )
                                                    (def "----------" ctaW.numero .Id   )
                                                    (def "----------" ctaW.routing.Id   )
                                                    (sprintf "%d.00" alW.comision       )
                                                    ("----------"                       )
                                                    (if ctaW.titular = "" then Aliado.nombre2 alW.datosPersonales else ctaW.titular)                    
                                                ) |> String.concat "\r\n"
                                csv |> saveAsJavaScript name
                            } |> Async.Start
                
                
                        TemplateLib.TablaPagos()
                            .Exportar(   fun _ -> saveAs() )
                            .TBody(
                                [
                                    TemplateLib.FilaPago()
                                        .codigo(              sprintf "%d" ( pagosW.V |> Seq.length ) ) 
                                        .cuenta(              ""                                  )
                                        .ABA(                 ""                                  )
                                        .monto(               sprintf "%d.00" ( pagosW.V |> Seq.sumBy(fun (pg, _) -> pg.comision ) ) ) 
                                        .identificacion(      ""                                  )
                                        .nombre(              ""                                  )
                                        .Doc()
                                    TemplateLib.FilaPago()
                                        .codigo(              ""                                  )
                                        .cuenta(              ""                                  )
                                        .ABA(                 ""                                  )
                                        .monto(               "--------------------"              )
                                        .identificacion(      ""                                  )
                                        .nombre(              ""                                  )
                                        .Doc()
                                    pagosW
                                    |> Doc.BindSeqCachedViewBy (fun (al, _) -> al.id) (fun alid alfpW ->
                                        let alW  = V( fst alfpW.V)
                                        let ctaW = V( snd alfpW.V)
                                        TemplateLib.FilaPago()
                                            .codigo(              "22"                                  )
                                            .cuenta(              def "----------" ctaW.V.numero .Id    )
                                            .ABA(                 def "----------" ctaW.V.routing.Id    )
                                            .monto(               sprintf "%d.00" alW.V.comision        )
                                            .identificacion(      "---------"                           )
                                            .nombre(              def (Aliado.nombre2 alW.V.datosPersonales) ctaW.V.titular)
                                            .Doc()
                                    )
                                ]
                            ).Doc()
                module Calculado =
                    open Html
                
                    let inputLabel attrs txt var =
                        div attrs [
                            div [ attr.``class`` "input-group"       ] [
                                span [ attr.``class`` "input-group-addon" ] [ text txt ]
                                Doc.Input [ attr.``class`` "form-control" ]   var
                            ]
                        ]
                
                    let lensVarStr(v:Var<float>) = Var.Make (V (sprintf "%A" v.V)) (ParseO.parseDoubleO >> function Some d when d <> v.Value -> v.Set d |_->())
                    let textLine txtW = div [] [ textView txtW ]
                
                    module ExternalKeyList =
                
                        let createListModel firstKey nextKey newF elUI =
                            let elements : ListModel<_,_> = ListModel.Create fst []
                            let addNew = 
                                let mutable k = firstKey
                                fun () ->        
                                    (k, newF()) |> elements.Add
                                    k <- nextKey k
                            let delete k () = elements.RemoveByKey k
                            let doc = elements.DocLens (fun k v -> elUI (delete k) (v.Lens snd (fun (i, _) nv -> i, nv ) ) )
                            elements, addNew, doc
                
                        let elemsUI doc addNew =
                            div [] [
                                doc
                                Doc.Button "New" [] addNew
                            ]
                
                        let lazyDoc firstKey nextKey elemUI newElem =
                            let elems, addNew, doc = createListModel firstKey nextKey newElem elemUI
                            lazy elemsUI doc addNew 
                
                        let lazyDocInt  elemUI newElem = lazyDoc 0 ((+) 1) elemUI newElem
                        let lazyDocGuid elemUI newElem = lazyDoc (System.Guid.NewGuid()) (fun _ -> System.Guid.NewGuid()) elemUI newElem
                
                
                    module AF =
                        open FsRoot
                        module AF = AppFramework
                
                        let addDocs plgName docs =
                            AF.addPlugIn {
                                AF.plgName    = plgName
                                AF.plgVars    = [| |]  
                                AF.plgViews   = [| |]  
                                AF.plgDocs    = [| for docName, doc in docs -> AF.newDoc  docName doc |]  
                                AF.plgActions = [| |]
                                AF.plgQueries = [| |]
                            } 
                
                    type Calculado = {
                        valorA : float
                        valorB : float
                        valorC : float
                    }
                
                    let newCalc() = {
                        valorA = 0.
                        valorB = 0.
                        valorC = 0.
                    }
                
                    let calcUI delete (calc:Var<Calculado>) =
                        let valorA  = lensVarStr (Lens calc.V.valorA) 
                        let valorB  = lensVarStr (Lens calc.V.valorB) 
                        let valorC  = lensVarStr (Lens calc.V.valorC)
                        let dup     = V (calc.V.valorA * 2.             )
                        let mult    = V (calc.V.valorA * calc.V.valorB  )
                        let multAdd = V (mult.V + calc.V.valorC         )
                        div [] [
                            Doc.Button "x" [] delete
                            inputLabel [] "valor A: " valorA
                            inputLabel [] "valor B: " valorB
                            inputLabel [] "valor C: " valorC
                            textLine <| V(sprintf "%A = %s * 2"        dup.V       valorA.V                    ) 
                            textLine <| V(sprintf "%A = %s * %s"       mult.V      valorA.V valorB.V           ) 
                            textLine <| V(sprintf "%A = %s * %s + %s"  multAdd.V   valorA.V valorB.V valorC.V  ) 
                        ]
                
                    [ "Calc", ExternalKeyList.lazyDocGuid calcUI newCalc ]
                    |> AF.addDocs "Calc"
                
                
            module MainProgram =
                open Templating
                open ModeloUI
            
                open FsRoot
                module AF = AppFramework 
            
                let layoutName = "ProzperLyt"
                let appName    = "Prozper"
            
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
            
                let logout () = Msal.logout()
                let login  () = Msal.logout()
                let enviarCorreosInvitacion () = 
                    asyncResult {
                        let! emails0 = ModeloUI.emailsInvitarW      |> View.GetAsync
                        let! id      = V (ModeloUI.aliadoW.V.id.Id) |> View.GetAsync
                        let  emails  = emails0.Split '\n' |> Array.filter (fun s -> s.Trim() <> "")
                        do! Rpc.enviarCorreosInvitacion("Invitacion a Prozper",  emails)
                        match emails.Length with
                        | 0 -> JS.Alert "Ningun correo valido ha sido encontrado"
                        | 1 -> JS.Alert "Invitacion ha sido enviada"
                        | _ -> JS.Alert "Invitaciones han sido enviadas"
                    } |> Rpc.iterA
            
                let getDoc appName docName =
                    LayoutEngine.splitName appName docName
                    ||> AF.tryGetDoc
                    |>  Option.map (LayoutEngine.getDocFinal [])
                    |>  Option.defaultWith (fun () -> sprintf "Doc not found %s" docName |> LayoutEngine.errDoc)
            
                let getDocView appName docName = LayoutEngine.turnToView (fun _ ->  getDoc appName docName)
            
                let getContentDoc() =
                    ModeloUI.contentVar.View
                    |> View.Map (getDoc appName )
                    |> Doc.EmbedView
            
                let getMenuDoc() =
                    V(  match (Msal.userO.V, ModeloUI.aliadoW.V.id) with
                        | None  , _                             -> "ProzperLyt.mnuNoUsuario"
                        | Some _, id when id = Aliado.empty.id  -> "ProzperLyt.mnuAdministrador"
                        | _                                     -> "ProzperLyt.mnuUsuario"
                        |> getDoc appName 
                    )
                    |> Doc.EmbedView
            
                let influencerV       = Var.Create ""
                let influencerClassW  = influencerV.View |> View.MapAsync (fun inf -> async {
                        let! inf = Rpc.obtenerIdInfluyente inf
                        match inf with
                        | Ok _ -> return "mui-btn--primary"
                        | _    -> return ""
                })
                let gotoInfluencer () = 
                    async {
                        let! inf = Rpc.obtenerIdInfluyente influencerV.Value
                        match inf with
                        | Ok v -> JS.Window.Location.Href <- "/Register/" + influencerV.Value
                        | _    -> JS.Window.Alert <| "Código inválido:" + influencerV.Value
                    } |> Async.Start
                    
                //let actualizarTransacciones () =
                //    async {
                //        Rpc.
                //    } |> Async.Start
            
                [< SPAEntryPoint >]    
                let mainProgram() =
                    let titleV          = Var.Create appName
                    let mesActualW      = V (mesToString    ModeloUI.modeloV.V.periodoActual  )
                    let anoActualW      = V (string         ModeloUI.modeloV.V.anoActual      )
                    let nombreAliadoW   = V (Aliado.nombre2 ModeloUI.aliadoW.V.datosPersonales)
                    let idAliadoW       = V (               ModeloUI.aliadoW.V.id.Id          )
                    let statusAliadoW   = V (string         ModeloUI.aliadoW.V.status         )
                    let comisionAliadoW = V (string         ModeloUI.aliadoW.V.comision       )
                    let datosAliadoW    = V (string         ModeloUI.aliadoW.V.nReferidos     )
            
                    AF.addPlugIn {
                        AF.plgName    = appName
                        AF.plgVars    = [| AF.newVar  "title"        titleV
                                           AF.newVar  "contentVar"   ModeloUI.contentVar
                                           AF.newVar  "invitaciones" ModeloUI.invitacionesV
                                           AF.newVar  "influencer"   influencerV
                                        |]  
                        AF.plgViews   = [| AF.newViw  "mesActual"               mesActualW
                                           AF.newViw  "anoActual"               anoActualW
                                           AF.newViw  "aliado"                  nombreAliadoW
                                           AF.newViw  "idAliado"                idAliadoW
                                           AF.newViw  "status"                  statusAliadoW
                                           AF.newViw  "comision"                comisionAliadoW
                                           AF.newViw  "datos"                   datosAliadoW
                                           AF.newViw  "emailsInvitar"           ModeloUI.emailsInvitarW
                                           AF.newViw  "invitacionesDisabled"    ModeloUI.invitacionesDisabledW
                                           AF.newViw  "VideoW"               <| V(endPointV.V |> function Video v -> v |_-> "")
                                           AF.newViw  "influencerClassW"        influencerClassW
                                        |]  
                        AF.plgDocs    = [| AF.newDoc  "Aliados"            (lazy RenderAliados     .aliados          ()               )
                                           AF.newDoc  "Aliado"             (lazy RenderAliado      .aliado           ()               )
                                           AF.newDoc  "Calculo"            (lazy RenderAliado      .calculo          ()               )
                                           AF.newDoc  "FormaRegistro"      (lazy FormaRegistro     .formaDoc         ()               )
                                           AF.newDoc  "FormaDatos"         (lazy FormaDatos        .formaDoc         ()               )
                                           AF.newDoc  "FormaContactos"     (lazy FormaContactos    .formaDoc         ()               )
                                           AF.newDoc  "FormaFormasPago"    (lazy FormaFormasPago   .formaDoc         ()               )
                                           AF.newDoc  "contentDoc"         (lazy getContentDoc                       ()               )
                                           AF.newDoc  "ReporteConsolidado" (lazy ReporteConsolidado.consolidado      ()               )
                                           AF.newDoc  "TablaPagos"         (lazy TablaPagos        .comisiones       ()               )
                                           AF.newDoc  "ListaDocs"          (lazy ListaDocs         .listaDocs        ()               )
                                           AF.newDoc  "FormaAutorizacion"  (lazy FormaAutorizacion .formaAutorizacion()               )
                                           AF.newDoc  "FormaContrato"      (lazy FormaContrato     .formaContrato    ()               )
                                           AF.newDoc  "Transacciones"      (lazy Transacciones     .transacciones    ()               )
                                           AF.newDoc  "Pendientes"         (lazy Pendientes        .pendientes       ModeloUI.aliadoW )
                                        |]  
                        AF.plgActions = [| AF.newAct  "Logout"              logout
                                           AF.newAct  "LogIn"               login
                                           AF.newAct  "enviarInvitaciones"  enviarCorreosInvitacion
                                           AF.newAct  "gotoInfluencer"      gotoInfluencer
                                        |]
                        AF.plgQueries = [|                                               
                                        |]
                    }
                    match JS.Document.GetElementById("GlobalLayout") with
                    | null ->
                       """
                            menuEditor layout
                            |          main
            
                            main div ""
                            :                 template  header     "id=header"           brand  brandV   logout "@{Prozper.Logout}" afiliado "@{Prozper.aliado}"
                            :                 Doc       Prozper.contentDoc
                            :                 template  sidedrawer "id=sidedrawer"       brand  brandV   idaliado "@{Prozper.idAliado}" 
                            :                 template  footer     "id=footer"           brand  brandV   madeby "CIPHER Bsc" madebylink "www.cipherbsc.com"
             
                            mainContent          template  content    "id=content-wrapper"  content aliados                  fecha "@{Prozper.mesActual} @{Prozper.anoActual}" idaliado "@{Prozper.aliado}"
                            cntFormaRegistro     template  content    "id=content-wrapper"  content Prozper.FormaRegistro    titulo "Referido por: @{Prozper.aliado}"  
                            cntFormaDatos        template  content    "id=content-wrapper"  content Prozper.FormaDatos       titulo " "
                            cntFormaContactos    template  content    "id=content-wrapper"  content Prozper.FormaContactos   titulo " " 
                            cntFormaFormasPago   template  content    "id=content-wrapper"  content Prozper.FormaFormasPago  titulo " " 
                            cntFormaCuentas      template  content    "id=content-wrapper"  content ProzperLyt.FormaCuentas  titulo " "  
                            cntFormaDocumentos   template  content    "id=content-wrapper"  content Prozper.FormaDocumentos  titulo " "  
                            cntFormaNoUser       template  content    "id=content-wrapper"  content botonLogin               titulo " "  
                            cntFormaInvitaciones template  content    "id=content-wrapper"  content invitaciones             titulo " "  
            
                            aliados          div       "class=row"
                            :                div       "class=mui-col-md-6"
                            ::               div       "class=mui-panel mui--z5 scrollbar;max-height:550px;overflow:auto" Prozper.Aliados
                            :                div       "class=mui-col-md-6"
                            ::               div       "class=mui-panel mui--z5 scrollbar;max-height:550px;overflow:auto" Aliado Comisiones
                            brandV           Var       "Prozper"
            
                            botonLogin       div       "class=row"
                            :                div       "class=mui-col-md-6"
                            ::               div       "class=mui-panel mui--z5 scrollbar;max-height:550px;overflow:auto" 
                            :::              button    Prozper.LogIn "class=mui-btn mui-btn--primary" "Ingresar al Sistema"
            
                            invitaciones     div       "class=row"
                            :                div       "class=mui-col-md-6 mui-col-md-offset-1"
                            ::               div       "class=mui-panel mui--z5 scrollbar; max-height:550px ; overflow:auto" 
                            :::              h1        "" "Enviar Invitaciones"
                            :::              textarea  Prozper.invitaciones  "width:100% ; height:30rem; placeholder=Copie aqui las direcciones de correo electronico" 
                            :                div       "white-space: pre-wrap" "@{Prozper.emailsInvitar}"
                            :                button    Prozper.enviarInvitaciones "class=mui-btn mui-btn--raised mui-btn--primary;@{Prozper.invitacionesDisabled}" "Enviar"
            
                            Aliado           div       "class=mui-col-md-8"
                            :                Doc Prozper.Aliado
            
                            Comisiones       template    tablacomisiones "class=mui-col-md-3"  tbody filasComisiones
                            filasComisiones  concat      ""
                            :                template    filacomision    ""  periodo "Ene 2018" comision "$1,000"
                            :                template    filacomision    ""  periodo "Feb 2018" comision "$1,000"
                            :                template    filacomision    ""  periodo "Mar 2018" comision "$1,000"
                            :                template    filacomision    ""  periodo "Abr 2018" comision "$1,000"
                            :                template    filacomision    ""  periodo "May 2018" comision "$1,000"
                            :                template    filacomision    ""  periodo "Jun 2018" comision "$1,000"
                            :                template    filacomision    ""  periodo "Jul 2018" comision "$1,000"
                            :                template    filacomision    ""  periodo "Ago 2018" comision "$1,000"
                            :                template    filacomision    ""  periodo "Sep 2018" comision "$1,000"
                            :                template    filacomision    ""  periodo "Oct 2018" comision "$1,000"
                            :                template    filacomision    ""  periodo "Nov 2018" comision "$1,000"
                            :                template    filacomision    ""  periodo "Dec 2018" comision "$1,000"
                    
                            menuEditorx      horizontal  65          menuLogo                  editorMessages
                            double           horizontal  0-50-100    AppFramework.AppFwkClient menuEditor
                            menuLogo         vertical    350         logo                      menu
                            logo             span       "margin:0;   color:gray; font-size: 55px; font-weight:530" "StackOverflow"
                            editorMessages   horizontal  10-83-100   editorButtons             messages
                            messages         vertical    0-50-100    messagesLeft              messagesRight
                            editorButtons    vertical    150 buttons snippetsSnippet 
                            snippetsSnippet  vertical    0-20-100    snippets                  editorProperties
                            snippets         horizontal  20          "@{FSharpStation.CurrentPath}" tblDimensions2
                            editorProperties vertical    0-100-100   snippet                   properties
                            properties       div        ""           FSharpStation.Properties
                            snippet          horizontal  35          Name                      FSharpStation.editor
                            menu             span       "display: grid; grid-template-columns: 30% 20% 20% 10%; grid-gap: 25px; margin:5px; grid-template-rows:50px" inpServer btnLoad btnSaveAs
                             
                            severalTabs      wcomp-tabstrip  "" 
                            :                div "tabname=Dimensions" 
                            ::               div "" btnAddDimension RuleEditor.Dimensions
                            :                div "tabname=Cubes"
                            :                div "tabname=Global Definitions" RuleEditor.globalDefs
                    
                            btnSaveAs        button RuleEditor.SaveAs         "class=btn @{RuleEditor.SaveNeeded}" "Save as...    "
                            btnAddDimension  button RuleEditor.AddDimension      ""                  "new dim..."
                            btnDeleteSnippet button FSharpStation.RemoveSnippet  ""                  "Delete Snippet"
                            btnIndentIn      button FSharpStation.IndentIn       ""                  "Indent In  >> "
                            btnIndentOut     button FSharpStation.IndentOut      ""                  "Indent Out << "
                            btnRunFS         button FSharpStation.RunFS          ""                  "Run F#        "
                            btnAbortFsi      button FSharpStation.AbortFsi       ""                  "Abort Fsi     "
                    
                            messagesLeft     wcomp-tabstrip                      ""                  Output FsCode
                            messagesRight    wcomp-tabstrip                      ""                  Parser
                    
                            buttons          div "overflow: hidden; display: grid; grid-template-columns: 100%; grid-template-rows: repeat(15, calc(100% / 15)); bxackground-color: #eee; box-sizing: border-box; padding : 5px; grid-gap: 5px; margin-right: 21px"
                            :                button RuleEditor.AddCalculation    ""                 "Add Calculation"
                            :                button RuleEditor.AddTotal          ""                 "Add Total"
                            :                Doc       none x
                            :                button RuleEditor.IndentIn          ""                  "Indent In  >> "
                            :                button RuleEditor.IndentOut         ""                  "Indent Out << "
                    
                            Output           textarea  RuleEditor.Output         "tabname=Output ; placeholder=Output messages ; spellcheck=false" 
                            FsCode           textarea  RuleEditor.CodeFS         "tabname=F# Code; placeholder=F# Code         ; spellcheck=false" 
                            Parser           textarea  RuleEditor.Parser         "tabname=Parser ; placeholder=Parser messages; dblclick=@{FSharpStation.JumpTo} ; spellcheck=false" 
                            Name             Doc       InputLabel                ""     "Name:"        FSharpStation.SnippetName
                            inpServer        Doc       InputLabel                ""     "Server:"      RuleEditor.Server
                            btnLoad          Doc       InputFile                 ""     "Load File..." RuleEditor.LoadFile  FileName
                            btnImport        Doc       InputFile                 ""     "Import..."    FSharpStation.Import    ""
                            FileName         div                                 "class=form-control"  RuleEditor.fileName
            
                       """
                    | e -> e.TextContent
                    |> LayoutEngine.newLyt layoutName
                    |> LayoutEngine.addLayout
            
                    None
                    |> Option.defaultValue layoutName
                    |> AF.mainDocV.Set
            
                    let getExtraMenu =
                        ModeloUI.aliadoW
                        |> Doc.BindView (fun al ->
                            if al.id = Aliado.empty.id then
                                TemplateLib.OpcionesAdministrador().Doc()
                            else Doc.Empty
                        ) 
            
                    TemplateLib()
                        //.MainContent( AF.getMainDoc.Value )
                        .MainContent(   getContentDoc()                     )
                        .Menu(          getMenuDoc()                        )
                        .headerCenter(  getDocView layoutName "headerCenter")
                        .Logout(        fun _-> logout()                    )
                        .Cortina(       if Rpc.llamadas.V > 0 then "mui-overlay" else "not-mui-overlay" )
                        .Bind()
                    titleV.View |> View.Sink (fun t -> JS.Document.Title <- t)
            
                let mainProgramLoggedOff refId =
                    ModeloUI.refAliadoIdOV.Set <| Some refId
                    mainProgram()
            
            
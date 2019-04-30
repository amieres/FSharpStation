#nowarn "3242"
#nowarn "52"
#nowarn "1182"
#nowarn "1178"
////-d:FSharpStation1556565204816 -d:NOFRAMEWORK --noframework -d:WEBSHARPER
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Core\lib\netstandard1.6\FSharp.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\netstandard.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\mscorlib.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Globalization.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Threading.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Reflection.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Numerics.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Xml.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Xml.Linq.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Net.Http.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Runtime.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.IO.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Threading.Tasks.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Core.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Collections.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.InterfaceGenerator.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Main.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.JQuery.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Web.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Sitelets.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Control.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\HtmlAgilityPack.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.Runtime.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.Common.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\other\AuthorizeNet\lib\AuthorizeNet.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Newtonsoft.Json\lib\netstandard2.0\Newtonsoft.Json.dll"
//#nowarn "3242"
//#nowarn "52"
//#nowarn "1182"
//#nowarn "1178"
/// Root namespace for all code
//#define FSharpStation1556565204816
#if INTERACTIVE
module FsRoot   =
#else
namespace FsRoot
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
    //#define NOFRAMEWORK --noframework
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Core\lib\netstandard1.6\FSharp.Core.dll"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\netstandard.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\mscorlib.dll"
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Globalization.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Threading.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Reflection.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Numerics.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Core.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Xml.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Xml.Linq.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Net.Http.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Runtime.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.IO.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Threading.Tasks.dll"  
    
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0"
    
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Core.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Collections.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.InterfaceGenerator.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Main.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.JQuery.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Web.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Sitelets.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Control.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\HtmlAgilityPack.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.Runtime.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.Common.dll"
    
    
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
                }
            
                type SerS<'T> = ('T                 -> string   )        //      Serialization function
                type SerD<'T> = (JsonIntermediate   -> 'T option)        //    deSerialization function
                type Ser< 'T> = SerS<'T> * SerD<'T>                      // both Serialization functions
            
                let serialize (ser: Ser<_>) v = fst ser v
                let (|Field|_|) field j = j.tryField field
            
                let [< Inline >] inline sprintU v = sprintf "%A"       v
                let [< Inline >] inline sprintQ v = sprintf "\"%A\""   v
                let              inline sprintA v = String.concat ", " v |> sprintf "[%s]"
            
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
            
                let serString : Ser<string> = toJsonString , (fun j -> j.tryString() )
                let serFloat  : Ser<float > = sprintU      , (fun j -> j.tryFloat () )
                let serInt    : Ser<int   > = sprintU      , (fun j -> j.tryInt   () |> Option.map int)
                let serInt64  : Ser<int64 > = sprintf "%d" , (fun j -> j.tryInt   () )
                let serBool   : Ser<bool  > = sprintU      , (fun j -> j.tryBool  () )
            
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
            
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
            module Serializer =
                open Serializer
                open FSharp.Data
            
                let rec getJsonIntermediate df di ds db da (j:JsonValue) : JsonIntermediate =
                    let jsonInt = getJsonIntermediate df di ds db da
                    {
                        tryFloat    = fun () -> (match j with JsonValue.Float   v ->       v |> Some | JsonValue.Number v -> float v |> Some    |_-> None) |> Option.orElseWith df
                        tryInt      = fun () -> (match j with JsonValue.Float   v -> int64 v |> Some | JsonValue.Number v -> int64 v |> Some    |_-> None) |> Option.orElseWith di
                        tryString   = fun () -> (match j with JsonValue.String  v ->       v |> Some                                            |_-> None) |> Option.orElseWith ds
                        tryBool     = fun () -> (match j with JsonValue.Boolean v ->       v |> Some                                            |_-> None) |> Option.orElseWith db
                        tryArray    = fun () -> (match j with JsonValue.Array   v ->       v |> Array.map jsonInt |> Some                       |_-> None) |> Option.orElseWith (fun () -> da  jsonInt   )
                        tryField    = fun fl -> j.TryGetProperty fl |> Option.map jsonInt                                                                 
                        isObject    = fun () -> (match j with JsonValue.Record  _ ->       true |_-> false)
                        isNull      = fun () -> (match j with JsonValue.Null      ->       true |_-> false)
                    }
            
            
                let deserialize df di ds db da (ser: Serializer.Ser<_>) js = 
                    JsonValue.TryParse js //|>! print
                    |> Option.map  (getJsonIntermediate df di ds db da)
                    |> Option.bind (snd ser)
            
                let tryDeserialize ser = 
                    deserialize
                        (fun _   -> None)
                        (fun _   -> None)
                        (fun _   -> None)
                        (fun _   -> None)
                        (fun _   -> None)
                        ser
            
                let deserializeWithDefs ser = 
                    deserialize
                        (fun _   -> Some 0.0                          )
                        (fun _   -> Some 0L                           )
                        (fun _   -> Some ""                           )
                        (fun _   -> Some false                        )
                        (fun _   -> Some [||]                         )
                        ser
            
                let deserializeWithFail ser = 
                    deserialize
                        (fun _   -> failwith  "Error expecting float"    )
                        (fun _   -> failwith  "Error expecting int"      )
                        (fun _   -> failwith  "Error expecting string"   )
                        (fun _   -> failwith  "Error expecting bool"     )
                        (fun _   -> failwith  "Error expecting array"    )
                        ser
            
                open FSharp.Reflection
            
                let inline serObj ((ser, deser):Ser<'T>) : string * Ser<obj> = typeof<'T> |> getTypeName, (unbox >> ser, deser >> Option.map box)
            
                let serDU<'DU when 'DU : equality> (sers : (string * Ser<obj>) seq) =
                    let cases  = FSharpType.GetUnionCases             typeof<'DU>
                    let dCases =
                        cases
                        |> Array.map (fun case ->
                            if case.GetFields().Length = 0 then
                                let serC         _ = sprintf "{%A:1}" case.Name
                                let deserC       _ = FSharpValue.MakeUnion(case, [||]) :?> 'DU |> Some 
                                case.Tag, (serC, deserC)
                            else
                                let sers2 =
                                    case.GetFields() |> Array.map(fun fld ->
                                        let tn = fld.PropertyType  |> getTypeName
                                        sers 
                                        |> Seq.tryPick(fun (nm, ser) -> if nm = tn then Some ser else None)
                                        |> Option.defaultWith (fun () -> 
                                            sers |> Seq.map fst |> String.concat ", "
                                            |> failwithf "serDU: Could not find Ser<%s> for %s. Provided: %s" tn (typeof<'DU> |> getTypeName) 
                                        )
                                    ) 
                                let getValues      = box<'DU> >> FSharpValue.PreComputeUnionReader case 
                                let setValues      = FSharpValue.PreComputeUnionConstructor case >> unbox<'DU>
                                let serC (v:'DU) =
                                    Seq.zip (getValues v) sers2
                                    |> Seq.map (fun (vi, seri) -> fst seri vi )
                                    |> String.concat ", "
                                    |> sprintf "{%A:[%s]}" case.Name
                                let deserC (j:JsonIntermediate) = 
                                    match j with 
                                    | Field case.Name j2 ->
                                        match j2.tryArray () with
                                        | None -> None
                                        | Some js -> 
                                        Array.zip js sers2
                                        |> Array.choose (fun (ji, seri) -> snd seri ji)
                                        |> setValues
                                        |> Some
                                    |_-> None 
                                case.Tag, (serC, deserC)
                        ) |> dict
                    let readTag   = box<'DU> >> FSharpValue.PreComputeUnionTagReader typeof<'DU> >> fun i -> dCases.[i]
                    let serDU   v = (readTag v |> fst) v
                    let deserDU j =
                        let case =  cases |> Seq.tryPick(fun case -> match j with Field case.Name _ -> Some case |_-> None) |> Option.defaultWith (fun () -> failwithf "Could not find DU element %A" j)
                        snd dCases.[case.Tag] j
                    serDU, deserDU
            
                let serDUt (sers : (string * Ser<obj>) seq) (ttype:System.Type) =
                    let cases  = FSharpType.GetUnionCases ttype
                    let dCases =
                        cases
                        |> Array.map (fun case ->
                            if case.GetFields().Length = 0 then
                                let serC         _ = sprintf "{%A:1}" case.Name
                                let deserC       _ = FSharpValue.MakeUnion(case, [||]) :?> 'DU |> Some 
                                case.Tag, (serC, deserC)
                            else
                                let sers2 =
                                    case.GetFields() |> Array.map(fun fld ->
                                        let tn = fld.PropertyType |> getTypeName
                                        sers 
                                        |> Seq.tryPick(fun (nm, ser) -> if nm = tn then Some ser else None)
                                        |> Option.defaultWith (fun () -> 
                                            sers |> Seq.map fst |> String.concat ", "
                                            |> failwithf "serDU: Could not find Ser<%s> for %s. Provided: %s" tn (ttype |> getTypeName) 
                                        )
                                    ) 
                                let getValues      = FSharpValue.PreComputeUnionReader case 
                                let setValues      = FSharpValue.PreComputeUnionConstructor case
                                let serC v =
                                    Seq.zip (getValues v) sers2
                                    |> Seq.map (fun (vi, seri) -> fst seri vi )
                                    |> String.concat ", "
                                    |> sprintf "{%A:[%s]}" case.Name
                                let deserC (j:JsonIntermediate) = 
                                    match j with 
                                    | Field case.Name j2 ->
                                        match j2.tryArray () with
                                        | None -> None
                                        | Some js -> 
                                        Array.zip js sers2
                                        |> Array.choose (fun (ji, seri) -> snd seri ji)
                                        |> setValues
                                        |> Some
                                    |_-> None 
                                case.Tag, (serC, deserC)
                        ) |> dict
                    let readTag   = FSharpValue.PreComputeUnionTagReader ttype >> fun i -> dCases.[i]
                    let serDU   v = (readTag v |> fst) v
                    let deserDU j =
                        let case =  cases |> Seq.pick(fun case -> match j with Field case.Name _ -> Some case |_-> None)
                        snd dCases.[case.Tag] j
                    serDU, deserDU
                    
            module Default =
                open FSharp.Reflection
            
                let defaults vs = vs |> Seq.map (fun v -> v.GetType().FullName, v ) |> dict
            
                let defs = 
                    defaults [
                        box 0
                        box 0L
                        box 0.
                        box 0.F
                        box ""
                        box false
                        box System.Guid.Empty
                        box System.DateTime.MinValue
                    ]
            
                let rec defaultValue defs (t:System.Type) : obj =
                    match (defs:System.Collections.Generic.IDictionary<string, obj>).TryGetValue t.FullName with
                    | true , v -> v
                    | false, _ ->
                    if t.IsArray then 
                        System.Array.CreateInstance(t.GetElementType(), 0) |> box
                    elif t.IsEnum then
                        (System.Enum.GetValues t).GetValue [| 0 |] |> box
                    else
                    let c = t.GetConstructor System.Type.EmptyTypes
                    if  isNull c |> not then
                        c.Invoke [||]
                    elif FSharpType.IsRecord t then
                        FSharpType.GetRecordFields t
                        |> Array.map (fun fld -> fld.PropertyType )
                        |> createArray (defaultValue defs)
                        |> fun os -> FSharpValue.MakeRecord(t, os)
                    elif FSharpType.IsTuple t then
                        FSharpType.GetTupleElements t
                        |> createArray (defaultValue defs)
                        |> fun os -> FSharpValue.MakeTuple(os, t)
                    elif FSharpType.IsUnion t then
                        let case = FSharpType.GetUnionCases t |> Seq.head
                        case.GetFields()
                        |> Array.map (fun fld -> fld.PropertyType )
                        |> createArray (defaultValue defs)
                        |> fun os -> FSharpValue.MakeUnion(case, os)
                    else failwithf "Could no create default for %s" t.FullName
            
                and createArray defs (ts : System.Type []) = ts |> Array.map defs
            
                let inline value<'T> : 'T = typeof<'T> |> defaultValue defs |> unbox
            
            
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            [< Inline """(!$v)""">]
            let isUndefined v = v.GetType() = v.GetType()
                
            
    
    module Prozper =
        module AA =
        
            type AA<'a, 'b> = 'a -> AsyncResultM<'b, unit>
        
            let mapInput   f (aa: AA<_, _>) : AA<_,          _   > = f >> aa
            let mapOutput  f (aa: AA<_, _>) : AA<_,          _   > = aa >> (AsyncResultM.bind (f >> AsyncResultM.rtn) )
            let mapBoth    f (aa: AA<_, _>) : AA<_,          _   > = fun i -> i |> mapOutput (f i) aa
            let bindInput (f: AA<_, _>) (aa: AA<_, _>) : AA<_, _> = f  >> (AsyncResultM.bind  aa )
            let bindOutput(f: AA<_, _>) (aa: AA<_, _>) : AA<_, _> = aa >> (AsyncResultM.bind  f  )
            let bindBoth   f (aa: AA<_, _>) : AA<_,          _   > = mapBoth f  aa |> bindOutput id
            let getResultM   (aa: AA<_,'r>) : AA<_, ResultM<'r,_>> =            aa >> AsyncResultM.getResultM
            let absorbO    m (aa: AA<_, _>) : AA<_,          _   > =            aa >> AsyncResultM.absorbO m
            let absorbR      (aa: AA<_, _>) : AA<_,          _   > =            aa >> AsyncResultM.absorbR  
        
            let mapO         (aa: AA<_, _>) : AA<_,          _   > = Option.map aa >> AsyncResultM.insertO
        
            let mapFst     f (a, b) = (f a,   b)
            let mapSnd     f (a, b) = (  a, f b)
        
            let bindFst    (f:AA<_,_>) (a, b) = asyncResultM {
                let! fa = f a
                return (fa, b)
            }
        
            let bindSnd    (f:AA<_,_>) (a, b) = asyncResultM {
                let! fb = f b
                return (a, fb)
            }
        
            let  map    f = f >> AsyncResultM.rtn
            let (>=>)     = bindInput
            let (>->) a b = a >=> map b
            let (>*>)     = (|>)
            let  tee (f: AA<'b, unit>) : AA<'b, 'b> = (fun v -> f v |> AsyncResultM.map (fun () -> v) )
        
        
        // AA<a,        b       >      :   a        -> Async<ResultM<b       >>
        // AA<a option, b option>      :   a option -> Async<ResultM<b option>>
        
        
        
        [< AutoOpen ; JavaScript >]
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
            | Cancelado
                with
                    override this.ToString() = sprintf "%A" this
                    static member tryParse (s:string) = 
                        match s.Trim().ToUpper() with
                        | "CUENTACREADA"             -> CuentaCreada
                        | "DATOSBANCARIOSINGRESADOS" -> DatosBancariosIngresados
                        | "ACTIVO"                   -> Activo
                        | "CANCELADO"                -> Cancelado
                        | _                          -> Inactivo
        
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
        
            type Mes =
            | Enero      =  1
            | Febrero    =  2
            | Marzo      =  3
            | Abril      =  4
            | Mayo       =  5
            | Junio      =  6
            | Julio      =  7
            | Agosto     =  8
            | Septiembre =  9
            | Octubre    = 10
            | Noviembre  = 11
            | Diciembre  = 12
        
            type Expiracion = {
                anio : int
                mes  : Mes
            } with
                member this.Id = sprintf "%04d-%02d" this.anio (int this.mes)
                static member TryParse (txt:string) =
                    let create century (anio:string) (mes:string) =
                        {
                            anio = century   + int anio
                            mes  = enum<Mes>  (int mes )
                        } |> Some
                    if txt.Length = 4 || txt.Length = 5 then 
                        create 2000 (txt.Right 2) (txt.Left  2)
                    elif txt.Length = 7 then
                        txt.Split[| '-' ; '/' |]
                        |> function 
                            | [| py ; pm |] when py.Length = 4 -> create 0 py pm
                            | [| pm ; py |] when py.Length = 4 -> create 0 py pm
                            |_-> None
                    else None
        
        
            type NumeroCuenta   = NumeroCuenta  of string       with member this.Id = match this with NumeroCuenta  id -> id
            type NumeroTarjeta  = NumeroTarjeta of string       with member this.Id = match this with NumeroTarjeta id -> id
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
                diaCorte1                    = 26
                diaCorte2                    = 28
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
                expiracion   = { anio = 2000 ; mes = Mes.Enero }
                titular      = ""
            }
        
            let ctaVacio = {            
                banco        = ""
                numero       = NumeroCuenta ""
                tipo         = Ahorro
                titular      = ""
                routing      = RoutingNumber ""
            }
        
            type DiaPago =
            |   Dia01
            |   Dia05
            |   Dia10
            |   Dia15
            |   Dia20
            |   Dia25
        
            type IdForAuthorize = IdForAuthorize of string  with member this.Id = match this with IdForAuthorize id -> id
        
            type Aliado = {
                id              :      IdAliado
                idPadreO        :      IdAliado       option
                idForAuthorize  :      IdForAuthorize option
                influyente      :      string         option
                datosPersonales :      DatosPersonales
                contactos       :      Contacto       []
                identificacion  :      Identificacion []
                isInternal      :      bool
                status          :      StatusAliado
                diaPago         :      DiaPago
                tipo            :      TipoAliado
                fechaRegistro   :      System.DateTime
                fechaStatus     :      System.DateTime
                nReferidos      :      int
                nRefActivos     :      int
                nDescendientes  :      int
                nDescActivos    :      int
                comision        :      int
                nivel           :      int
            }
        
            type Modelo = {
                idAliado      : IdAliado
                aliados       : Aliado []
                anoActual     : int
                periodoActual : int
                premisas      : PremisasCalculo
                nevento       : int64
            }
        
            let modeloVacio = {
                idAliado      = IdAliado ""
                aliados       = [||]
                anoActual     = System.DateTime.Now.Year
                periodoActual = System.DateTime.Now.Month
                premisas      = premisasCalculo
                nevento       = 0L
            }
        
            let correoVacio = {
                email       = ""
                enviado     = None
                recibido    = None
            }
        
        [< JavaScript >]
        module Aliado =
            open Operators
        
            //let statusActual ano mes al  =
            //    al.transacciones.Value
            //    |> Array.tryFind (fun t -> t.idAliado = al.id 
            //                            && t.ano      = ano
            //                            && t.periodo  = mes
            //                            && t.concepto = PagoAfiliacion)
            //    |> Option.map    (fun _ ->  Activo )
            //    |> Option.defaultValue    Inactivo
        
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
                            yield                h
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
        
            let diaPago (registro:System.DateTime) =
                let diaMes = registro.Day
                if diaMes    =  1 then Dia01
                elif diaMes <=  5 then Dia05
                elif diaMes <= 10 then Dia10
                elif diaMes <= 15 then Dia15
                elif diaMes <= 20 then Dia20
                elif diaMes <= 25 then Dia25
                else                   Dia01
        
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
                            diaPago        = diaPago al.fechaRegistro
                            //fechaStatus    = System.DateTime()
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
                idPadreO        =  None
                idForAuthorize  =  None
                influyente      =  None
                contactos       =  [||]
                identificacion  =  [||]
                isInternal      =  false
                status          =  Inactivo
                tipo            =  Regular
                fechaRegistro   =  System.DateTime(2000, 1, 1)
                fechaStatus     =  System.DateTime(2000, 1, 1)
                diaPago         =  Dia01
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
        
        //#define NOFRAMEWORK --noframework
        //#define WEBSHARPER
        
        [< AutoOpen >]
        module Ambiente =
            type IAmbiente = 
                interface
                    /// nuevoEvento (usuario:string) (nombre:string) (evento:string) (tipo:string) : AsyncResultM<long, unit>
                    abstract member NuevoEvento          : string   ->  string -> string -> string -> AsyncResultM<int64, unit>
                    abstract member UltimoEvento         : unit     ->  int64 option
                    abstract member UltimoEstado         : unit     ->  int64 option
                    abstract member LeerEventos          : int64    ->  AsyncResultM<(int64 * string * string * string * string * System.DateTime) [], unit>
                    abstract member LeerTipos            : unit     ->  string           []
                    abstract member LeerEventosTipos     : unit     -> (string * string) []
                    abstract member GuardarEstado        : int64    ->  string ->  AsyncResultM<unit, unit>
                    abstract member GuardarAliado        : string   ->  string ->  AsyncResultM<unit, unit>
                    abstract member ObtenerEstado        : unit     ->  AsyncResultM<(int64 * string) option, unit>
                    abstract member ObtenerAliados       : unit     ->  AsyncResultM<string [], unit>
                    abstract member NombreAmbiente       : unit     -> string
                    abstract member CarpetaRaiz          : unit     -> string
                    abstract member EnviarCorreo         : string   -> string -> string           -> AsyncResultM<unit, unit>
                    abstract member EnviarMensaje        : string   -> string -> string -> string -> AsyncResultM<unit, unit>
                    abstract member ObtenerTransacciones : IdAliado -> AsyncResultM<Transaccion [], unit>
                    abstract member ObtenerMensajes      : IdAliado -> AsyncResultM<Mensaje     [], unit>
                    abstract member ObtenerListaDocs     : IdAliado -> AsyncResultM<string      [], unit>
                    abstract member VariableAmbiente     : string   -> string
                    abstract member Prepare              : unit     -> unit
                end
        
        
            let mutable ambiente : IAmbiente = 
                { new IAmbiente with 
                    member __.UltimoEvento             ()  = Some 0L
                    member __.UltimoEstado             ()  = Some 0L
                    member __.LeerTipos                ()  = [||]   
                    member __.LeerEventosTipos         ()  = [||]   
                    member __.NuevoEvento (usuario:string) (nombre:string) (evento:string) (tipo:string) = AsyncResultM.errorMsgf "not implemented"
                    member __.LeerEventos              n   = AsyncResultM.errorMsgf "Ambiente.LeerEventos: not implemented"
                    member __.GuardarAliado            i s = AsyncResultM.errorMsgf "Ambiente.GuardarAliado: not implemented"
                    member __.GuardarEstado            n s = AsyncResultM.errorMsgf "Ambiente.GuardarEstado: not implemented"
                    member __.ObtenerEstado            ()  = AsyncResultM.errorMsgf "Ambiente.ObtenerEstado: not implemented"
                    member __.ObtenerAliados           ()  = AsyncResultM.errorMsgf "Ambiente.ObtenerAliados: not implemented"
                    member __.NombreAmbiente           ()  =                        "Ambiente.NombreAmbiente: not implemented"
                    member __.CarpetaRaiz              ()  = "."
                    member __.EnviarCorreo           r t c = AsyncResultM.errorMsgf "Ambiente.EnviarCorreo: not implemented"
                    member __.EnviarMensaje        d r t c = AsyncResultM.errorMsgf "Ambiente.EnviarMensaje: not implemented" 
                    member __.ObtenerTransacciones      id = AsyncResultM.errorMsgf "Ambiente.ObtenerTransacciones: not implemented"
                    member __.ObtenerMensajes           id = AsyncResultM.errorMsgf "Ambiente.ObtenerMensajes: not implemented"
                    member __.ObtenerListaDocs          id = AsyncResultM.errorMsgf "Ambiente.ObtenerListaDocs: not implemented"
                    member __.VariableAmbiente           v = failwithf "Ambiente.VariableAmbiente: not implemented"
                    member __.Prepare                   () = ()
                }
        
        
         [< JavaScript >]
        type DataEvento =
        | AgregarAliados            of (Aliado[]                                                   )
        | AgregarAliado             of (Aliado                                                     )
        | InvitarPotencialesAliados of (IdAliado * string []                                       )
        | RegistroNuevo             of (IdAliado * DatosPersonales * IdAliado option * Contacto [] )
        | ActualizarDatosPersonales of (IdAliado * DatosPersonales                                 )
        | ActualizarContactos       of (IdAliado * Contacto  []                                    )
        //| ActualizarFormasPago      of (IdAliado * FormaPago []                                    )
        | CorreoVerificacionEnviado of (IdAliado * string                                          )
        | CorreoVerificado          of (IdAliado * string                                          )
        //| ActualizarAuthorizeId     of (IdAliado * Result<IdAuthorize, string>                     )
        //| ActualizarPagoAuthorizeId of (IdAliado * CuentaPago * Result<IdPayment, string>          )
        | ActualizarStatusPadre     of (IdAliado * StatusAliado * (IdAliado option) * string option)
        
        [< JavaScript >]
        type Evento = {
            nevento : int64
            aliadoO : IdAliado option
            data    : DataEvento
        }
        
        [< JavaScript >]
        type Respuesta =
        | ROk
        | NuevoRegistro        of string
        | Mensaje              of string
        
        
        module Eventos =
        
            type TipoDatos = TipoDatos of nombre:string * tipos:string
        
            type ResultadoManejador = Modelo -> AsyncResultM<Modelo * Respuesta, unit>
        
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
        
            let registroNuevo (idA, datos:DatosPersonales, padre, contactos) (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
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
                    idPadreO        =  padre
                    idForAuthorize  =  None
                    influyente      =  None
                    contactos       =  contactos
                    identificacion  =  [||]
                    isInternal      =  false
                    status          =  CuentaCreada
                    tipo            =  Regular
                    fechaRegistro   =  now
                    fechaStatus     =  now
                    diaPago         =  Dia01
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
        
            let cambiaAliado ida   f (modelo:Modelo) = { modelo with aliados    = modelo.aliados          |> Array.map (fun al -> if al.id = ida then f al else al )}
            let cambiaCorreo email f (aliado:Aliado) = { aliado with contactos  = aliado.contactos        |> Array.map (function CorreoElectronico c when c.email = email -> f c |> CorreoElectronico | co -> co )}
            //let cambiaFormaPago cp f (aliado:Aliado) = { aliado with formasPago = aliado.formasPago.Value |> Array.map (fun fp -> if fp.cuentaPago = cp then f fp else fp ) }
            let cambiaStatusCorreo ida email f = cambiaAliado ida (cambiaCorreo email  f)
        
            let actualizarDatosPersonales (idA, datos:DatosPersonales) (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
                return
                    cambiaAliado idA (fun al -> { al with datosPersonales = datos }) modelo
                ,   Mensaje <| "Datos personales actualizados!" 
            }
        
            //let actualizarAuthorizeId   (idA, authorizeIdR) (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
            //    return
            //        cambiaAliado idA (fun al -> { al with authorizeIdR = authorizeIdR }) modelo
            //    ,   Mensaje <| "AuthorizeId actualizada" 
            //}
        
            //let actualizarPagoAuthorizeId (idA, cuenta, paymentIdR : Result<IdPayment, string> )  (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
            //    return
            //        cambiaAliado idA (cambiaFormaPago cuenta (fun fp -> { fp with authorizeIdR = paymentIdR }) ) modelo
            //    ,   Mensaje <| "AuthorizeId actualizada" 
            //}
        
            let actualizarContactos (idA, contactos:Contacto[]) (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
                return
                    cambiaAliado idA (fun al -> { al with contactos = contactos }) modelo
                ,   Mensaje <| "Contactos actualizados!" 
            }
        
            let actualizarStatusPadre (idA, status:StatusAliado, padreO:IdAliado option, inflO :  string option) (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
                return
                    cambiaAliado idA (fun al -> { al with status = status ; idPadreO = padreO ; influyente = inflO }) modelo
                ,   Mensaje <| "status actualizados!" 
            }
        
            //let actualizarFormasPago (idA, formasPago:FormaPago[]) (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
            //    return
            //        cambiaAliado idA (fun al -> { al with formasPago = formasPago }) modelo
            //    ,  Mensaje <| "Formas de pago actualizadas!" 
            //}
        
            let agregarAliado  aliado  modelo = asyncResultM { return { modelo with Modelo.aliados = addNewAliados [| aliado  |] modelo.aliados }, ROk }
            let agregarAliados aliados modelo = asyncResultM { return { modelo with Modelo.aliados = addNewAliados    aliados    modelo.aliados }, ROk }
        
            let correoVerificacionEnviado (ida, correo)  (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
                return
                    cambiaStatusCorreo ida correo (fun c -> { c with enviado = Some System.DateTime.Now }) modelo
                ,   ROk
            }
        
            let correoVerificado          (ida, correo)  (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
                return
                    cambiaStatusCorreo ida correo (fun c -> { c with recibido = Some System.DateTime.Now }) modelo
                ,   ROk
            }
        
            let actualizarEstado (modelo: Modelo, evento: Evento) = asyncResultM {
                if modelo.nevento <> -1L && modelo.nevento + 1L <> evento.nevento then 
                    failwithf "Evento fuera de secuencia: %d %d" modelo.nevento evento.nevento
                let case, tuple, data = DiscUnion.caseTuple evento.data
                let objData           = {
                    tipoDatos         = TipoDatos(case, tuple |> getTypeName)
                    datos             = data
                }
                return! manejadorGenerico objData modelo
            }
        
            let eventoNoImplementado ev (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
                return! errorMsgf "Evento no Implementado: %A" ev |> ErrorM
            } 
        
            let invitarPotencialesAliados ev = eventoNoImplementado ev
        module CodigoGenerado =
            type EventoTipos = 
            | ActualizarDatosPersonales_V0  of (IdAliado * DatosPersonales)
            //| ActualizarFormasPago_V0 of System.Tuple<TypesV0.IdAliado,TypesV0.FormaPago[]>
            //| AgregarAliado_V1 of TypesV1.Aliado
            //| CorreoVerificacionEnviado_V0 of System.Tuple<TypesV0.IdAliado,System.String>
            //| RegistroNuevo_V1 of System.Tuple<TypesV0.IdAliado,TypesV0.DatosPersonales,Option<TypesV0.IdAliado>,TypesV1.Contacto[]>
        
        module Serializador =
            open Serializer
            open System
        
            [< AutoOpen >]
            module TypesV0 =
                open TypesV0
            
                let serDate : Ser<System.DateTime> = 
                    (  fun (d:System.DateTime ) -> d.ToString("u") |> sprintf "%A"                )
                    , (fun (j:JsonIntermediate) -> j.tryString() |> Option.bind ParseO.parseDateO )
        
                let serIdAliado          = serDU<IdAliado         > [   serObj serString            ]    
                let serIdAuthorized      = serDU<IdAuthorize      > [   serObj serString            ]    
                let serIdForAuthorize    = serDU<IdForAuthorize   > [   serObj serString            ]    
                let serIdPayment         = serDU<IdPayment        > [   serObj serString            ]    
                let serIdAddress         = serDU<IdAddress        > [   serObj serString            ]    
                let serTipoAliado        = serDU<TipoAliado       > [   serObj serString            ]
                let serPais              = serDU<Pais             > [   serObj serString            ]    
                let serEstado            = serDU<Estado           > [   serObj serString            ]    
                let serTerritorio        = serDU<Territorio       > [   serObj serEstado            ]   
                let serEmisor            = serDU<Emisor           > [   serObj serPais
                                                                        serObj serTerritorio        ]
                let serDocumento         = serDU<Documento        > [   serObj serString            ]    
                let serNumeroCuenta      = serDU<NumeroCuenta     > [   serObj serString            ]    
                let serNumeroTarjeta     = serDU<NumeroTarjeta    > [   serObj serString            ]
                let serRoutingNumber     = serDU<RoutingNumber    > [   serObj serString            ]    
                let serTipoCuenta        = serDU<TipoCuenta       > [   serObj serString            ]    
                let serStatusAliado      = serDU<StatusAliado     > [   serObj serString            ]    
                let serConceptoPago      = serDU<ConceptoPago     > [   serObj serString            ]    
                let serTipoDireccion     = serDU<TipoDireccion    > [   serObj serString            ]    
                let serZonaPostal        = serDU<ZonaPostal       > [   serObj serString            ]    
                let serTipoTelefono      = serDU<TipoTelefono     > [   serObj serString            ]    
                let serGenero            = serDU<Genero           > [   serObj serString            ]    
                let serTipoMensaje       = serDU<TipoMensaje      > [   serObj serString            ]
                let serDiaPago           = serDU<DiaPago          > [                               ]
        
                let serMes : Ser<Mes>    = (int >> fst serInt), (snd serInt >> Option.map enum<_> )
        
                let serIdAuthorizedR     = serDU<Result<IdAuthorize, string>> [   serObj serString ; serObj serIdAuthorized ]    
                let serIdPaymentR        = serDU<Result<IdPayment  , string>> [   serObj serString ; serObj serIdPayment    ]    
                let serIdAddressR        = serDU<Result<IdAddress  , string>> [   serObj serString ; serObj serIdAddress    ]    
        
                let serExpiracion: Ser<Expiracion> =
                    [|
                        serInt        |> serField "anio"    (fun s -> s.anio   ) (fun v s -> { s with anio    = v } )   
                        serMes        |> serField "mes"     (fun s -> s.mes    ) (fun v s -> { s with mes     = v } )          
                    |] |> serRecord tarVacio.expiracion
        
        
                let serIdentificacion : Ser<Identificacion> = 
                    [|
                        serEmisor    |> serField "emisor"    (fun s -> s.emisor    ) (fun v s -> { s with emisor    = v } )
                        serDocumento |> serField "documento" (fun s -> s.documento ) (fun v s -> { s with documento = v } )
                        serDate      |> serField "emision"   (fun s -> s.emision   ) (fun v s -> { s with emision   = v } )
                        serDate      |> serField "vence"     (fun s -> s.vence     ) (fun v s -> { s with vence     = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serCuentaBancaria : Ser<CuentaBancaria> =
                    [|
                        serString        |> serField "titular" (fun (s:CuentaBancaria) -> s.titular) (fun v s -> { s with titular = v } )   
                        serString        |> serField "banco"   (fun  s                 -> s.banco  ) (fun v s -> { s with banco   = v } )   
                        serTipoCuenta    |> serField "tipo"    (fun  s                 -> s.tipo   ) (fun v s -> { s with tipo    = v } )        
                        serNumeroCuenta  |> serField "numero"  (fun  s                 -> s.numero ) (fun v s -> { s with numero  = v } )          
                        serRoutingNumber |> serField "routing" (fun  s                 -> s.routing) (fun v s -> { s with routing = v } )           
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serTarjetaCredito : Ser<TarjetaCredito> =
                    [|
                        serExpiracion    |> serField "expiracion" (fun s -> s.expiracion) (fun v s -> { s with expiracion = v } )   
                        serString        |> serField "titular"    (fun s -> s.titular   ) (fun v s -> { s with titular    = v } )   
                        serNumeroTarjeta |> serField "numero"     (fun s -> s.numero    ) (fun v s -> { s with numero     = v } )          
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serTransaccion : Ser<Transaccion> = 
                    [|
                        serDate          |> serField "fechaPago"   (fun s -> s.fechaPago  ) (fun v s -> { s with fechaPago   = v } ) 
                        serInt           |> serField "ano"         (fun s -> s.ano        ) (fun v s -> { s with ano         = v } )
                        serInt           |> serField "periodo"     (fun s -> s.periodo    ) (fun v s -> { s with periodo     = v } )
                        serInt           |> serField "monto"       (fun s -> s.monto      ) (fun v s -> { s with monto       = v } )
                        serIdAliado      |> serField "idAliado"    (fun s -> s.idAliado   ) (fun v s -> { s with idAliado    = v } )     
                        serConceptoPago  |> serField "concepto"    (fun s -> s.concepto   ) (fun v s -> { s with concepto    = v } )         
                        serString        |> serField "transaccion" (fun s -> s.transaccion) (fun v s -> { s with transaccion = v } )   
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serDireccion : Ser<Direccion> = 
                    [|
                        serTipoDireccion |> serField "tipoDireccion" (fun s -> s.tipoDireccion) (fun v s -> { s with tipoDireccion = v } )
                        serString        |> serField "linea1"        (fun s -> s.linea1       ) (fun v s -> { s with linea1        = v } )
                        serString        |> serField "linea2"        (fun s -> s.linea2       ) (fun v s -> { s with linea2        = v } )
                        serString        |> serField "ciudad"        (fun s -> s.ciudad       ) (fun v s -> { s with ciudad        = v } )
                        serPais          |> serField "pais"          (fun s -> s.pais         ) (fun v s -> { s with pais          = v } )
                        serZonaPostal    |> serField "zonaPostal"    (fun s -> s.zonaPostal   ) (fun v s -> { s with zonaPostal    = v } )
                        serEstado        |> serField "estado"        (fun s -> s.estado       ) (fun v s -> { s with estado        = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serTelefono : Ser<Telefono> =
                    [|
                        serTipoTelefono |> serField "tipoTelefono" (fun s -> s.tipoTelefono) (fun v s -> { s with tipoTelefono = v } )
                        serString       |> serField "codigoPais"   (fun s -> s.codigoPais  ) (fun v s -> { s with codigoPais   = v } )
                        serString       |> serField "codigoArea"   (fun s -> s.codigoArea  ) (fun v s -> { s with codigoArea   = v } )
                        serString       |> serField "numero"       (fun s -> s.numero      ) (fun v s -> { s with numero       = v } )
                        serString       |> serField "extension"    (fun s -> s.extension   ) (fun v s -> { s with extension    = v } )
                        serBool         |> serField "mensajes"     (fun s -> s.mensajes    ) (fun v s -> { s with mensajes     = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serCuentaPago        = serDU<CuentaPago       > [   serObj serString              
                                                                        serObj serTarjetaCredito
                                                                        serObj serCuentaBancaria    ]
                let serRemitente         = serDU<Remitente        > [   serObj serIdAliado
                                                                        serObj serString            ]
        
                let serFormaPago : Ser<FormaPago> =
                    [|
                        serCuentaPago            |> serField "cuentaPago"  (fun s -> s.cuentaPago   ) (fun v s -> { s with cuentaPago   = v } )
                        serString                |> serField "nombre"      (fun s -> s.nombre       ) (fun v s -> { s with nombre       = v } )
                        serIdPaymentR            |> serField "authorizeId" (fun s -> s.authorizeIdR ) (fun v s -> { s with authorizeIdR = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serDatosPersonales : Ser<DatosPersonales> =
                    [|
                        serString        |> serOpt  |> serField "titulo"          (fun s -> s.titulo         ) (fun v s -> { s with titulo          = v } )
                        serString                   |> serField "nombre1"         (fun s -> s.nombre1        ) (fun v s -> { s with nombre1         = v } )
                        serString                   |> serField "nombre2"         (fun s -> s.nombre2        ) (fun v s -> { s with nombre2         = v } )
                        serString                   |> serField "apellido1"       (fun s -> s.apellido1      ) (fun v s -> { s with apellido1       = v } )
                        serString                   |> serField "apellido2"       (fun s -> s.apellido2      ) (fun v s -> { s with apellido2       = v } )
                        serPais                     |> serField "nacionalidad"    (fun s -> s.nacionalidad   ) (fun v s -> { s with nacionalidad    = v } )
                        serGenero                   |> serField "genero"          (fun s -> s.genero         ) (fun v s -> { s with genero          = v } )
                        serDate                     |> serField "fechaNacimiento" (fun s -> s.fechaNacimiento) (fun v s -> { s with fechaNacimiento = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serMensaje : Ser<Mensaje> =
                    [|
                        serTipoMensaje           |> serField "tipo"      (fun (s:Mensaje) -> s.tipo     ) (fun v s -> { s with tipo      = v } )
                        serDate        |> serOpt |> serField "leido"     (fun (s:Mensaje) -> s.leido    ) (fun v s -> { s with leido     = v } )
                        serDate                  |> serField "fecha"     (fun (s:Mensaje) -> s.fecha    ) (fun v s -> { s with fecha     = v } )
                        serString                |> serField "texto"     (fun (s:Mensaje) -> s.texto    ) (fun v s -> { s with texto     = v } )
                        serRemitente             |> serField "remitente" (fun (s:Mensaje) -> s.remitente) (fun v s -> { s with remitente = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serPremisasCalculo : Ser<PremisasCalculo> =
                    [|
                        serInt  |> serField "comisionReferidosRegular"     (fun s -> s.comisionReferidosRegular    ) (fun v s -> { s with comisionReferidosRegular     = v } )
                        serInt  |> serField "comisionReferidosMaster"      (fun s -> s.comisionReferidosMaster     ) (fun v s -> { s with comisionReferidosMaster      = v } )
                        serInt  |> serField "comisionDescendientesMaster"  (fun s -> s.comisionDescendientesMaster ) (fun v s -> { s with comisionDescendientesMaster  = v } )
                        serInt  |> serField "comisionDescendientesRegular" (fun s -> s.comisionDescendientesRegular) (fun v s -> { s with comisionDescendientesRegular = v } )
                        serInt  |> serField "montoAfiliacion"              (fun s -> s.montoAfiliacion             ) (fun v s -> { s with montoAfiliacion              = v } )
                        serInt  |> serField "numeroReferidosMaster"        (fun s -> s.numeroReferidosMaster       ) (fun v s -> { s with numeroReferidosMaster        = v } )
                        serInt  |> serField "diaCorte1"                    (fun s -> s.diaCorte1                   ) (fun v s -> { s with diaCorte1                    = v } )
                        serInt  |> serField "diaCorte2"                    (fun s -> s.diaCorte2                   ) (fun v s -> { s with diaCorte2                    = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serCorreoElectronico : Ser<CorreoElectronico> = 
                    [|
                        serString         |> serField "email"    (fun s -> s.email    ) (fun v s -> { s with email    = v } )
                        serDate |> serOpt |> serField "enviado"  (fun s -> s.enviado  ) (fun v s -> { s with enviado  = v } )
                        serDate |> serOpt |> serField "recibido" (fun s -> s.recibido ) (fun v s -> { s with recibido = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serContacto          = serDU<Contacto         > [   serObj serString     
                                                                        serObj serTelefono
                                                                        serObj serCorreoElectronico
                                                                        serObj serDireccion         ] 
        
                let serAliado : Ser<Aliado> =
                    [|
                        serIdAliado                    |> serField "id"              (fun s -> s.id             ) (fun v s -> { s with id              = v } )
                        serIdForAuthorize   |> serOpt  |> serField "idForAuthorize"  (fun s -> s.idForAuthorize ) (fun v s -> { s with idForAuthorize  = v } )
                        serIdAliado         |> serOpt  |> serField "idPadreO"        (fun s -> s.idPadreO       ) (fun v s -> { s with idPadreO        = v } )
                        serIdentificacion   |> serArr  |> serField "identificacion"  (fun s -> s.identificacion ) (fun v s -> { s with identificacion  = v } )
                        serString           |> serOpt  |> serField "influyente"      (fun s -> s.influyente     ) (fun v s -> { s with influyente      = v } )
                        serDatosPersonales             |> serField "datosPersonales" (fun s -> s.datosPersonales) (fun v s -> { s with datosPersonales = v } )
                        serContacto         |> serArr  |> serField "contactos"       (fun s -> s.contactos      ) (fun v s -> { s with contactos       = v } )
                        //serFormaPago        |> serArr  |> serField "formasPago"      (fun s -> s.formasPago     ) (fun v s -> { s with formasPago      = v } )
                        //serTransaccion      |> serArr  |> serField "transacciones"   (fun s -> s.transacciones  ) (fun v s -> { s with transacciones   = v } )
                        //serMensaje          |> serArr  |> serField "mensajes"        (fun s -> s.mensajes       ) (fun v s -> { s with mensajes        = v } )
                        serBool                        |> serField "isInternal"      (fun s -> s.isInternal     ) (fun v s -> { s with isInternal      = v } )
                        serStatusAliado                |> serField "status"          (fun s -> s.status         ) (fun v s -> { s with status          = v } )
                        serTipoAliado                  |> serField "tipo"            (fun s -> s.tipo           ) (fun v s -> { s with tipo            = v } )
                        serDate                        |> serField "fechaRegistro"   (fun s -> s.fechaRegistro  ) (fun v s -> { s with fechaRegistro   = v } )
                        serDate                        |> serField "fechaStatus"     (fun s -> s.fechaStatus    ) (fun v s -> { s with fechaStatus     = v } )
                        serDiaPago                     |> serField "diaPago"         (fun s -> s.diaPago        ) (fun v s -> { s with diaPago         = v } )
                        serInt                         |> serField "nReferidos"      (fun s -> s.nReferidos     ) (fun v s -> { s with nReferidos      = v } )
                        serInt                         |> serField "nRefActivos"     (fun s -> s.nRefActivos    ) (fun v s -> { s with nRefActivos     = v } )
                        serInt                         |> serField "nDescendientes"  (fun s -> s.nDescendientes ) (fun v s -> { s with nDescendientes  = v } )
                        serInt                         |> serField "nDescActivos"    (fun s -> s.nDescActivos   ) (fun v s -> { s with nDescActivos    = v } )
                        serInt                         |> serField "comision"        (fun s -> s.comision       ) (fun v s -> { s with comision        = v } )
                        serInt                         |> serField "nivel"           (fun s -> s.nivel          ) (fun v s -> { s with nivel           = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serModelo : Ser<Modelo> = 
                    [|
                        serInt64                      |> serField "nevento"       (fun s -> s.nevento       ) (fun v s -> { s with nevento       = v } )
                        serIdAliado                   |> serField "idAliado"      (fun s -> s.idAliado      ) (fun v s -> { s with idAliado      = v } )
                        //serAliado           |> serArr |> serField "aliados"       (fun s -> s.aliados       ) (fun v s -> { s with aliados       = v } )
                        serInt                        |> serField "anoActual"     (fun s -> s.anoActual     ) (fun v s -> { s with anoActual     = v } )
                        serInt                        |> serField "periodoActual" (fun s -> s.periodoActual ) (fun v s -> { s with periodoActual = v } )
                        serPremisasCalculo            |> serField "premisas"      (fun s -> s.premisas      ) (fun v s -> { s with premisas      = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
            open FSharp.Reflection
        
            let serObject : Ser<obj> = (fun o -> o.GetType().ToString() |> sprintf "%A"), (fun _ -> None)
        
            let serSerializadoresEventos =
                let sers = System.Collections.Generic.Dictionary<_,_>()
                [
                    serObj         serObject
                    serObj         serString
                    serObj         serAliado
                    serObj         serIdAliado
                    serObj         serIdAuthorized
                    serObj (serOpt serIdAliado )
                    serObj (serArr serContacto )
                    serObj (serArr serFormaPago)
                    serObj (serArr serAliado   )
                    serObj (serArr serString   )
                    serObj         serDatosPersonales
                    serObj         serIdAuthorizedR
                    serObj         serCuentaPago
                    serObj         serIdPaymentR
                ] |> Seq.iter sers.Add
                sers
        
            let rec registrarSerializadorParaTipos (ts:System.Type []) =
                if Seq.length ts <= 1 then () else
                let tupleType = FSharpType.MakeTupleType ts
                let tname     = getTypeName tupleType
                if serSerializadoresEventos.ContainsKey tname then () else
                let sers      = ts |> Array.map (fun t ->   let tname = getTypeName  t
                                                            serSerializadoresEventos 
                                                            |> Dict.tryGetValue tname 
                                                            |> Option.defaultWith (fun () -> failwithf "Serializador no encontrado: %s" tname) )
                let getValues = FSharpValue.PreComputeTupleReader      tupleType
                let setValues = FSharpValue.PreComputeTupleConstructor tupleType
                let serC    v = Seq.zip (getValues v) sers
                                |> Seq.map (fun (vi, seri) -> fst seri vi )
                                |> String.concat ", "
                                |> sprintf "[%s]"
                let deserC (j:JsonIntermediate) = 
                                match j.tryArray () with
                                | None -> None
                                | Some js -> 
                                Array.zip js sers
                                |> Array.choose (fun (ji, seri) -> snd seri ji)
                                |> setValues
                                |> Some
                serSerializadoresEventos.Add(tname, (serC, deserC))
        
            and registrarSerializadoresParaDU (ttype:System.Type) =
                FSharpType.GetUnionCases ttype
                |> Seq.iter(fun case ->
                    let ts = case.GetFields() |> Array.map(fun p -> p.PropertyType) 
                    ts |> Seq.iter registrarSerializadorPara 
                    ts |> registrarSerializadorParaTipos
                )
        
            and registrarSerializadorPara (ttype:System.Type) =
                let tname = getTypeName ttype
                if serSerializadoresEventos.ContainsKey tname then () else
                if   FSharpType.IsUnion ttype then 
                    registrarSerializadoresParaDU ttype
                    if serSerializadoresEventos.ContainsKey tname then () else
                    let ser = Serializer.serDUt (Seq.zip serSerializadoresEventos.Keys serSerializadoresEventos.Values) ttype
                    serSerializadoresEventos.Add(tname, ser)
                elif FSharpType.IsTuple ttype then
                    let ts = FSharpType.GetTupleElements ttype
                    ts |> Seq.iter registrarSerializadorPara
                    registrarSerializadorParaTipos ts
                else
                    failwithf "Could not register serializer for: %s" tname
        
            registrarSerializadorPara typeof<DataEvento>
        
            let obtenerSerializador tipoEvento = 
                serSerializadoresEventos 
                |> Dict.tryGetValue tipoEvento
                |> Option.defaultWith (fun () -> failwithf "Could not find deserializer for %s" tipoEvento)
        
        
            let registrarF evento (f : 'T -> Eventos.ResultadoManejador) =
                Eventos.registrarManejadorf evento f
                registrarSerializadorPara typeof<'T>
        
            print "serializers:"
            serSerializadoresEventos.Keys |> Seq.iter print
        
            open CodigoGenerado
        
            let chequearEventosEnBD et =
                match et with
                | ActualizarDatosPersonales_V0  v -> Eventos.actualizarDatosPersonales  v
                //| ActualizarFormasPago_V0       v -> Eventos.actualizarFormasPago       v
                //| AgregarAliado_V1              v -> Eventos.agregarAliado              v
                //| RegistroNuevo_V1              v -> Eventos.registroNuevo              v
                //| CorreoVerificacionEnviado_V0  v -> Eventos.correoVerificacionEnviado  v
        
            let chequearEventos ev =
                match ev with
                | AgregarAliado                 v -> Eventos.agregarAliado              v
                | AgregarAliados                v -> Eventos.agregarAliados             v
                | RegistroNuevo                 v -> Eventos.registroNuevo              v
                | ActualizarDatosPersonales     v -> Eventos.actualizarDatosPersonales  v
                | ActualizarContactos           v -> Eventos.actualizarContactos        v
                //| ActualizarFormasPago          v -> Eventos.actualizarFormasPago       v
                | CorreoVerificacionEnviado     v -> Eventos.correoVerificacionEnviado  v
                | CorreoVerificado              v -> Eventos.correoVerificado           v
                | InvitarPotencialesAliados     v -> Eventos.invitarPotencialesAliados  v
                //| ActualizarAuthorizeId         v -> Eventos.actualizarAuthorizeId      v
                //| ActualizarPagoAuthorizeId     v -> Eventos.actualizarPagoAuthorizeId  v
                | ActualizarStatusPadre         v -> Eventos.actualizarStatusPadre      v
        
            registrarF "AgregarAliado"             Eventos.agregarAliado
            registrarF "AgregarAliados"            Eventos.agregarAliados
            registrarF "RegistroNuevo"             Eventos.registroNuevo
            registrarF "ActualizarDatosPersonales" Eventos.actualizarDatosPersonales
            registrarF "ActualizarContactos"       Eventos.actualizarContactos
            //registrarF "ActualizarFormasPago"      Eventos.actualizarFormasPago
            registrarF "CorreoVerificacionEnviado" Eventos.correoVerificacionEnviado
            registrarF "CorreoVerificado"          Eventos.correoVerificado
            registrarF "InvitarPotencialesAliados" Eventos.invitarPotencialesAliados
            //registrarF "ActualizarAuthorizeId"     Eventos.actualizarAuthorizeId
            //registrarF "ActualizarPagoAuthorizeId" Eventos.actualizarPagoAuthorizeId
            registrarF "ActualizarStatusPadre"     Eventos.actualizarStatusPadre
        
            //SQLServer.leerTipos()
            //|> Seq.iter (fun t ->
            //    if serSerializadoresEventos.ContainsKey t |> not then
            //        failwithf "Serializador no encontrado para tipo %s" t
            //)
        //
            //SQLServer.leerEventosTipos()
            //    |> Seq.iter (fun t ->
            //    if Eventos.TipoDatos t |> Eventos.Manejadores.ContainsKey |> not then
            //        failwithf "Manejador no encontrado para evento %A" t
            //)
        
        
        module Correo =
            open System.IO
            open WebSharper.UI.Server
        
            let sendTestEmail (recipiente:string) (tema:string) (contenido:string)  = ambiente.EnviarCorreo recipiente tema contenido
        
            let dummyCtx =
                { new WebSharper.Web.Context() with
                    member this.RootFolder      = ambiente.CarpetaRaiz()
                    member this.RequestUri      = failwith "Unsupported"
                    member this.UserSession     = failwith "Unsupported"
                    member this.Environment     = failwith "Unsupported"
                    member this.Json            = failwith "Unsupported"
                    member this.Metadata        = failwith "Unsupported"
                    member this.Dependencies    = failwith "Unsupported"
                    member this.ApplicationPath = failwith "Unsupported"
                    member this.ResourceContext = failwith "Unsupported" }
        
            let prepareHtml (doc:Doc) =
                use tw  = new StringWriter()
                use w   = new Core.Resources.HtmlTextWriter(tw, " ")        
                doc.Write(dummyCtx, w, false)
                tw.ToString()
        
            open WebSharper.UI.Templating
        
            let [< Literal >] TemplatesCorreos = @"Correos.html"
            type TemplateCorreo = Template<TemplatesCorreos, serverLoad = ServerLoad.WhenChanged>
        
            let host = "https://prozper.azurewebsites.net"
        
            let SendGridAPIKey = ""
         
            let enviarCorreoInvitacion tema (IdAliado idPadre) (email:string)= 
                TemplateCorreo.Invitacion() 
                    .Logo(   TemplateCorreo.Logo().Doc())
                    .Enlace( sprintf "%s/Register/%s" host idPadre )
                    .Doc()
                |> prepareHtml
                |> sendTestEmail email tema
        
            let enviarCorreosInvitacion claims1 (tema, padre, emails:string[]) = asyncResultM {
                for email in emails do
                    do! enviarCorreoInvitacion tema padre email
            }
        
            let enviarBienvenida (aliado:Aliado) (correo:CorreoElectronico) =
                asyncResultM {
                    let sufijo = match aliado.datosPersonales.genero with Femenino -> "a" |_-> "o"
                    let nombre = Aliado.nombre2 aliado.datosPersonales
                    let tema   = sprintf "Prozper le da la bienvenida"
                    do! TemplateCorreo.Bienvenida()
                            .Logo(   TemplateCorreo.Logo().Doc())
                            .Enlace(        sprintf "%s/#/Content/ProzperLyt.cntFormaFormasPago" host )
                            .Sufijo(        sufijo                                                    )
                            .NombreAfiliado(nombre                                                    )
                            .Doc()
                        |> prepareHtml
                        |> sendTestEmail correo.email tema
                    //CorreoVerificacionEnviado (aliado.id, correo.email)
                    //|> EstadoActual.agregarEventoServer
                } |> AsyncResultM.iterA print id
        
            let enviarVerificacionCorreo (aliado:Aliado) (correo:CorreoElectronico) = 
                asyncResultM {
                    do! WebSharper.UI.Html.div [] [ WebSharper.UI.Html.text "CORREO CONTENIDO" ]
                        |> prepareHtml
                        |> sendTestEmail correo.email "Verificacion de Correo"
                    //CorreoVerificacionEnviado (aliado.id, correo.email)
                    //|> EstadoActual.agregarEventoServer
                } |> AsyncResultM.iterA print id
        
        
        module ObtenerEstado =
            open Serializador
            open AA
        
            let guardarEstado0     (nevento, serialModelo) = ambiente.GuardarEstado      nevento serialModelo
            let obtenerEstado00    ()                      = ambiente.ObtenerEstado      ()
            let obtenerAliados0    ()                      = ambiente.ObtenerAliados     ()
            let ultimoEstado       ()                      = ambiente.UltimoEstado       ()
        
            let aliadosPrevio = System.Collections.Generic.Dictionary<_,_>()
        
            let guardarAliados aliados = asyncResultM {
                let mutable first = true
                for (aliado:Aliado) in aliados do
                    let previoO = Dict.tryGetValue aliado.id aliadosPrevio
                    if previoO <> Some aliado then
                        if first then 
                            first <- false
                            printfn "previo = %A" previoO 
                            printfn "nuevo  = %A" aliado
                        do! aliado |> Serializer.serialize serAliado |> ambiente.GuardarAliado aliado.id.Id
                    if previoO.IsSome then aliadosPrevio.Remove aliado.id |> ignore
                    aliadosPrevio.Add(aliado.id, aliado)
            }
        
            let actualizarAliadosPrevio modelo = asyncResultM {
                aliadosPrevio.Clear()
                for aliado in modelo.aliados do
                    aliadosPrevio.Add(aliado.id, aliado)
            }
        
            let guardarEstado =
                    map (fun (modelo:Modelo) -> { modelo with aliados = Aliado.actualizarAliados modelo } )
                >=> tee (fun e -> guardarAliados e.aliados)
                >=> map (fun (modelo:Modelo) -> modelo.nevento, modelo |> Serializer.serialize serModelo )
                >=> guardarEstado0
        
            let obtenerAliados (modelo:Modelo) = asyncResultM {
                let! aliadoss = obtenerAliados0()
                let  aliados  = aliadoss |> Array.choose (Serializer.deserializeWithDefs serAliado)
                return { modelo with aliados = aliados}
            }
        
            let salvarEstado (aa: AA<_,Modelo>) : AA<_,Modelo> =
                let mutable estadoActual : Modelo option = None
                fun ()   -> match ultimoEstado(), estadoActual with
                            | Some n, Some e when n = e.nevento -> AsyncResultM.rtn e
                            |_-> aa >=> map (Library.tee (fun e -> estadoActual <- Some e)) <| ()
        
            let obtenerEstado =
                    obtenerEstado00
                >=> map (Option.map snd                                         )
                >=> map (Option.map (Serializer.deserializeWithDefs serModelo)  )
                >=> map (Option.defaultValue  (Some modeloVacio)                )
                 |> absorbO   (fun () -> errorMsgf "Modelo no fue deserializado")
                >=> obtenerAliados
                >=> tee actualizarAliadosPrevio
                 |> salvarEstado
        
            let pairEstado ev =
                obtenerEstado
                >=> map (fun s -> s, ev)
                <| ()
        
            let obtenerUsuario (claims: (_*_) []) : string = 
                claims 
                |>  Seq.tryFind(fun (n,v) -> n = "http://schemas.microsoft.com/identity/claims/objectidentifier") 
                |>  Option.map snd
                |>  Option.defaultWith (fun () -> failwith "Usuario no autenticado")
        
            let obtenerAliadoEstado0 = 
                pairEstado
                >=> map(fun (modelo, usuario) -> modelo.aliados |> Array.tryFind (fun al -> al.id = IdAliado usuario) |> Option.map (fun v -> v, modelo) )
                 |> absorbO (fun () -> ResultMessage.ErrorMsg "Aliado no fue encontrado")
        
            let obtenerAliadoEstado =
                map obtenerUsuario
                >=> obtenerAliadoEstado0
        
            let obtenerAliado =
                obtenerAliadoEstado
                >-> fst
        
            let pairAliadoEstado claims ev =
                obtenerAliadoEstado
                >=> map (fun s -> s, ev)
                <| claims
        
            let pairAliado claims =
                pairAliadoEstado claims
                >=> map (fun ((a,s), ev) -> a, ev)
        
        
        module ManejadorEventos =
            //open ObtenerEstado
            open AA
        
            type SerialEvento = {
                nombre  : string
                tipo    : string
                json    : string
                data    : obj
            }
        
            type SerialEventoU = {
                usuario   : string
                serEvento : SerialEvento
            }
        
            type SerialEventoN = {
                nevento    : int64
                serEventoU : SerialEventoU
            }
        
            let deserializarEvento (serEvento : SerialEvento) =
                let ser = Serializador.obtenerSerializador serEvento.tipo
                match Serializer.deserializeWithDefs ser serEvento.json with
                | Some data -> data
                | None      -> failwithf "No se pudo deserializar el Evento: %A" serEvento
        
            let manejadorGenerico (modelo , msg         ) = Eventos .manejadorGenerico msg     modelo
        
            let serialN2serialU (serEventoN: SerialEventoN) = serEventoN.serEventoU
        
            let serialU2TipoDatos (serEventoU: SerialEventoU) =
                {
                    Eventos.tipoDatos = Eventos.TipoDatos(serEventoU.serEvento.nombre, serEventoU.serEvento.tipo)
                    Eventos.datos     = serEventoU.serEvento.data
                }
        
            let evento2TipoDatos (evento:Evento) =
                let case, tuple, data = DiscUnion.caseTuple evento.data
                {
                    Eventos.tipoDatos = Eventos.TipoDatos(case, tuple |> getTypeName)
                    Eventos.datos     = data
                }
        
            let separarEstado (modeloI:Modelo, eventoSerialN : SerialEventoN) oR =  
                let modelo = oR |> ResultM.map fst |> ResultM.defaultValue modeloI
                let resp   = oR |> ResultM.map snd
                { modelo with nevento = eventoSerialN.nevento }, resp
        
            let ejecutarEventoSerial =
                    ObtenerEstado.pairEstado
                >=> (   map (mapSnd (serialN2serialU >> serialU2TipoDatos) )
                    >=> manejadorGenerico
                     |> getResultM
                     |> mapBoth separarEstado
                    )
                >=> tee (fst >> ObtenerEstado.guardarEstado)
                >=> map  snd
                 |> absorbR
        
            let guardarEventoSerialU (serEventoU :  SerialEventoU) = 
                ambiente.NuevoEvento
                    serEventoU.usuario
                    serEventoU.serEvento.nombre
                    serEventoU.serEvento.json
                    serEventoU.serEvento.tipo
        
            let serializarDataEvento (evento : DataEvento) =
                let  name, ttype, obj = DiscUnion.caseTuple evento
                let  tname            = ttype |> getTypeName
                let  ser              = Serializador.obtenerSerializador tname
                {   nombre            = name
                    tipo              = tname
                    json              = fst ser obj
                    data              = obj
                }
        
            let guardarEventoSerial =
                guardarEventoSerialU
                |>  mapBoth (fun serEventoU nevento  -> { nevento = nevento ; serEventoU = serEventoU } )
        
            let serializarEvento =
                    map (fun (evento:Evento) -> evento.data)
                >=> map serializarDataEvento
                 |> mapBoth (fun (evento:Evento) serEvento -> 
                        evento.aliadoO 
                        |> Option.map(fun (IdAliado usuario) -> { usuario = usuario ; serEvento  = serEvento })
                        |> ResultM.ofOption (fun () -> errorMsgf "Aliado es Nulo para evento %A" evento)
                    )
                 |> absorbR
        
            let intentarEventoSerial =
                ObtenerEstado.pairEstado
                >=> map (mapSnd serialU2TipoDatos)
                >=> manejadorGenerico
                >=> map  ignore
        
            let ejecutarEventoNuevo =
                serializarEvento
                >=> tee intentarEventoSerial
                >=> guardarEventoSerial
                >=>(ejecutarEventoSerial
                    |> bindBoth (fun inp out -> asyncResultM {
                            do! ambiente.EnviarMensaje "" inp.serEventoU.usuario (sprintf "%A" out) ""
                            return out
                        }
                      )
                    )
        
            let ejecutarDataEventoNuevo  claims  =
                ObtenerEstado.pairAliado claims
                >=> map (fun (al, de) ->
                    {
                        Evento.nevento = 0L
                        Evento.aliadoO = Some al.id
                        data           = de
                    })
                >=> ejecutarEventoNuevo
        
            let obtenerSubModelo (aliado:Aliado, modelo:Modelo) =  asyncResultM {
                let buscar = Aliado.busqueda modelo.aliados
                if aliado.datosPersonales.nombre1 = "Administrador" && aliado.datosPersonales.apellido1 = "Supremo" then return modelo else
                let subAliados = (if aliado.tipo = Master then buscar.descendientes else buscar.hijos) aliado
                return
                    { modelo with 
                        idAliado = aliado.id
                        aliados  = Array.append [| aliado |] subAliados 
                    }
            }
        
            let obtenerEstadoParaUsuario : AA<string, _> =
                ObtenerEstado.obtenerAliadoEstado0
                >=> obtenerSubModelo
        
            let obtenerClaim claim claims =
                claims 
                |>  Array.tryFind(fun (n,v) -> n = claim) 
                |>  Option.map snd
        
            let enviarBienvenida claims = 
                ObtenerEstado.pairAliado claims
                >=> map fst
                >=> fun (aliado:Aliado) -> asyncResultM {
                    for contacto in aliado.contactos do
                        match contacto with
                        | CorreoElectronico correo -> 
                            match correo.enviado with
                            | None -> Correo.enviarBienvenida aliado correo
                            |_-> ()
                        | _ -> ()
                }
                
            let crearRegistroNuevo claims1 (modelo:Modelo, claims) = asyncResultM {
                let usuario   = ObtenerEstado.obtenerUsuario claims1
                if  usuario   = "admin" || (modelo.aliados |> Array.exists (fun al -> al.id = IdAliado usuario)) then return None else
                let datos     = 
                    { Default.value<DatosPersonales> with 
                        nombre1         = claims |> obtenerClaim "given_name"                                              |> Option.defaultValue ""
                        apellido1       = claims |> obtenerClaim "family_name"                                             |> Option.defaultValue ""
                        fechaNacimiento = claims |> obtenerClaim "extension_DateOfBirth" |> Option.bind ParseO.parseDateO2 |> Option.defaultValue System.DateTime.MinValue
                    }
                let correo    = 
                    { Default.value<CorreoElectronico> with 
                        email           = claims |> obtenerClaim "emails" |> Option.defaultValue ""
                    }
                let direccion    = 
                    { Default.value<Direccion> with 
                        linea1          = claims |> obtenerClaim "streetAddress" |> Option.defaultValue ""
                        ciudad          = claims |> obtenerClaim "city"          |> Option.defaultValue ""
                        estado          = claims |> obtenerClaim "state"         |> Option.bind Estado    .tryParse |> Option.defaultValue (OtroS      "")
                        zonaPostal      = claims |> obtenerClaim "postalCode"    |> Option.bind ZonaPostal.tryParse |> Option.defaultValue (ZonaPostal "")
                        pais            = claims |> obtenerClaim "country"       |> Option.bind Pais      .tryParse |> Option.defaultValue (OtroP      "")
                        authorizeIdR    = Error ""
                    }
                let contactos = [| CorreoElectronico correo ; Direccion direccion |]
                let referidoPor = 
                    claims 
                    |> obtenerClaim "referidoPor" 
                    |> Option.bind (function "" -> None | s -> Some s)
                    |> Option.bind (fun ref -> modelo.aliados |> Seq.tryFind(fun padre -> padre.id.Id = ref))
                    |> Option.map  (fun padre -> padre.id)
                do! Info <| sprintf "referidoPor = %A" referidoPor
                //Correo.enviarBienvenida aliado // (**) mover afuera
                return Some
                    {
                        Evento.nevento = 0L
                        Evento.aliadoO = Some (IdAliado usuario)
                        data           = DataEvento.RegistroNuevo(IdAliado usuario, datos, referidoPor, contactos)
                    }
            }
        
            let agregarUsuarioSiEsNuevo claims1 =
                ObtenerEstado.pairEstado
                >=>       crearRegistroNuevo      claims1
                >=> mapO ejecutarEventoNuevo
                >=> mapO (enviarBienvenida        claims1)
                >=> map  (Option.iter             print  )
        
            let obtenerListaDocs claims : AA<unit, _> =
                ObtenerEstado.pairAliado claims
                >=> map (fun (al, _) -> al.id)
                >=> ambiente.ObtenerListaDocs
        
        
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\other\AuthorizeNet\lib\AuthorizeNet.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Newtonsoft.Json\lib\netstandard2.0\Newtonsoft.Json.dll"
        
        module Authorize =
            open System
            open AuthorizeNet
            open AuthorizeNet.Api.Controllers
            open AuthorizeNet.Api.Contracts.V1
            open AuthorizeNet.Api.Controllers.Bases
            open AA
        
            let mutable environmentName = "NoEnvironmentSet"
        
            let prepareAuthorizeNetEnvironment() =
                let Environment, EnvironmentName, Id, Transaction =
                    match ambiente.VariableAmbiente("Authorize_Environment").ToUpper() with
                    | "P" ->(   AuthorizeNet.Environment.PRODUCTION
                            ,   "PRODUCTION"
                            ,   ambiente.VariableAmbiente "Authorize_Id_Production"          
                            ,   ambiente.VariableAmbiente "Authorize_Transaction_Production" 
                            )
                    |_->    (   AuthorizeNet.Environment.SANDBOX
                            ,   "SANDBOX"
                            ,   ambiente.VariableAmbiente "Authorize_Id_Sandbox"          
                            ,   ambiente.VariableAmbiente "Authorize_Transaction_Sandbox" 
                            )
                let Key = ambiente.VariableAmbiente "Authorize_Key"     //??
                environmentName <- EnvironmentName
                ApiOperationBase<ANetApiRequest, ANetApiResponse>.RunEnvironment <- Environment
                ApiOperationBase<ANetApiRequest, ANetApiResponse>.MerchantAuthentication <- 
                    new merchantAuthenticationType( name            = Id
                                                ,   ItemElementName = ItemChoiceType.transactionKey
                                                ,   Item            = Transaction )
            //prepareAuthorizeNetEnvironment()
            let authorizeMerchantId (aliado:Aliado) =
                match aliado.idForAuthorize with
                | Some v ->        v .Id                .Left(20)
                | None   -> aliado.id.Id.Replace("-","").Left(20)
        
            let inline execute (controller: IApiOperation<_,_> ) = 
                controller.Execute()
                controller.GetApiResponse()
        
            let inline executeGetResponse controller : AsyncResultM<'b, unit> = asyncResultM {
                do! ResultMessage.Info <|  sprintf "Authorize: %s" environmentName
                let response = execute controller
                if response = null then 
                    return! AsyncResultM.errorMsgf "%s Failed, Response = null" ( controller.GetType().Name )
                elif response.messages.resultCode = messageTypeEnum.Ok then
                    return response
                elif response.messages.message <> null then
                    return! AsyncResultM.errorMsgf "%s Error: %s %s"  ( controller.GetType().Name ) response.messages.message.[0].code response.messages.message.[0].text
                else
                    return! AsyncResultM.errorMsgf "%s Error: resultCode = %A, no messages" ( controller.GetType().Name ) response.messages.resultCode
            }
        
            let (>>>) = (>>)
            let (@->) controllerF responseF =
                controllerF
                >>> executeGetResponse
                >-> responseF
        
            let buscarPerfil :AA<_,_> =
                (fun (aliado : Aliado) -> getCustomerProfileRequest( merchantCustomerId  = authorizeMerchantId aliado ) )
                >>> getCustomerProfileController
                @-> fun response -> response.profile
                >=> (fun v -> asyncResultM { return v } )
        
            let buscarIdAuthorize = 
                buscarPerfil 
                >-> fun p -> IdAuthorize p.customerProfileId
        
            let registrarAliadoNuevo :AA<_,_> =
                (fun (aliado:Aliado, paymentProfile : customerPaymentProfileType) ->
                    let email = aliado.contactos 
                                |> Seq.choose(function CorreoElectronico cor -> Some cor.email |_-> None) 
                                |> Seq.tryHead |> Option.defaultValue ""
                    let customerProfile = 
                        customerProfileType(        merchantCustomerId  = authorizeMerchantId aliado
                                                ,   email               = email 
                                                ,   paymentProfiles     = [| paymentProfile |] )
                    createCustomerProfileRequest(   profile             = customerProfile
                                                ,   validationMode      = validationModeEnum.liveMode )
                )
        //        >=> tee (fun inp -> asyncResultM { 
        //                do! Newtonsoft.Json.JsonConvert.SerializeObject inp |> ResultMessage.Info
        //                })
                >>> createCustomerProfileController 
                @-> (fun response -> response.customerPaymentProfileIdList.[0] )
        
            let registrarPagoNuevo :AA<_,_> =
                (fun (IdAuthorize id, pp : customerPaymentProfileType) ->  
                    createCustomerPaymentProfileRequest(customerProfileId = id
                                                    ,   paymentProfile    = pp
                                                    ,   validationMode    = validationModeEnum.liveMode)
                )
                >>> createCustomerPaymentProfileController
                @-> fun response -> response.customerPaymentProfileId
        
            let pagoTipoTarjeta (tar:TarjetaCredito) =
                let creditCard = creditCardType(cardNumber      = tar.numero.Id
                                            ,   expirationDate  = tar.expiracion.Id               )
                paymentType( Item = creditCard ), tar.titular
        
            let pagoTipoCuenta  (cta:CuentaBancaria) =
                let  bankAccount = bankAccountType(  accountNumber   = cta.numero .Id
                                                 ,   routingNumber   = cta.routing.Id
                                               //,   accountType     = bankAccountTypeEnum.checking
                                               //,   echeckType      = echeckTypeEnum.WEB
                                                 ,   nameOnAccount   = cta.titular
                                                 ,   bankName        = cta.banco)
                paymentType( Item = bankAccount  ), cta.titular
        
            let datosTitularO (aliado:Aliado) (titular:string) =
                aliado.contactos 
                |> Seq.tryPick(function | Direccion dir -> Some dir |_-> None)
                |> Option.map (fun direccion -> 
                    customerAddressType(firstName = (titular.Split ' ').[0]
                                    ,   lastName  = (titular.Split ' ' |> Seq.skip 1 |> String.concat " ")
                                    ,   address   = direccion.linea1
                                    ,   city      = direccion.ciudad
                                    ,   state     = direccion.estado    .ToString()
                                    ,   zip       = direccion.zonaPostal.ToString()
                                    ,   country   = direccion.pais      .ToString()
                                    )
                )
        
            let perfilPago (tipoPago: paymentType, titular: string) (aliado:Aliado) =
                datosTitularO aliado titular
                |> Option.map (fun datosTitular ->
                    aliado,
                    customerPaymentProfileType( payment = tipoPago
                                            ,   billTo  = datosTitular )
                )
        
            let obtenerFormasDePagoId =
                buscarPerfil
                >-> (fun perfil ->
                    perfil.paymentProfiles
                    |> Array.choose (fun pago ->
                        match pago.payment.Item with
                        | :? AuthorizeNet.Api.Contracts.V1.creditCardMaskedType as cc -> 
                            TarjetaCredito {
                                titular       = pago.billTo.firstName + " " + pago.billTo.lastName
                                tipoTarjeta   = TipoTarjeta.tryParse cc.cardType |> Option.defaultValue Visa
                                numero        = NumeroTarjeta cc.cardNumber
                                expiracion    = { anio = 0 ; mes = Mes.Enero}
                            } |> Some
                        | :? AuthorizeNet.Api.Contracts.V1.bankAccountMaskedType as ba -> 
                            CuentaBancaria {
                                titular     = ba.nameOnAccount
                                banco       = ba.bankName
                                tipo        = match ba.accountType with
                                                | AuthorizeNet.Api.Contracts.V1.bankAccountTypeEnum.businessChecking
                                                | AuthorizeNet.Api.Contracts.V1.bankAccountTypeEnum.checking          -> Corriente
                                                |_-> Ahorro
                                numero      = NumeroCuenta  ba.accountNumber
                                routing     = RoutingNumber ba.routingNumber
                            } |> Some
                        |_-> None
                        |> Option.map (fun cta ->
                            {
                                nombre       = ""
                                authorizeIdR = pago.customerPaymentProfileId |> IdPayment |> Ok
                                cuentaPago   = cta
                            }
                        )
                    )
                )
                >*> getResultM
                >-> ResultM.defaultValue [||]
        
            let obtenerFormasDePago claims =
                fun () -> ObtenerEstado.obtenerAliado claims
                >=> obtenerFormasDePagoId
        
            let obtenerFormasDePagoPara claims (alIds:_[]) = asyncResultM {
                let! fps =
                    alIds 
                    |> AsyncResultM.traverseSeq (fun id -> asyncResultM {
                        let! fp = obtenerFormasDePagoId id
                        return id, fp
                    })
                return fps |> Seq.toArray 
            }
        
            let registrarFormaPago =
                fst 
                >>> buscarIdAuthorize
                >*> getResultM
                >*> bindBoth (fun (al, pp) ->
                    function
                    | OkM(p, _) -> registrarPagoNuevo   (p , pp)
                    |_          -> registrarAliadoNuevo (al, pp)
                )        
            let crearFormaPago claims =
                fun _ -> ObtenerEstado.obtenerAliado claims
                >*> mapBoth perfilPago
                >*> absorbO (fun () -> ResultMessage.ErrorMsg "No se encontro direccion")
                >=> registrarFormaPago
        
            let registrarTarjeta         claims =
                pagoTipoTarjeta 
                >>> crearFormaPago claims
                >-> fun _ -> "Tarjeta registrada."
        
            let registrarCuenta          claims =
                pagoTipoCuenta 
                >>> crearFormaPago claims
                >-> fun _ -> "Cuenta registrada."
        
            let validarFormaPago         claims =
                fun _ -> ObtenerEstado.obtenerAliado claims
                >=> buscarIdAuthorize
                >*> mapBoth (fun (IdPayment idp) (IdAuthorize idm)  ->
                        validateCustomerPaymentProfileRequest(  customerProfileId        = idm
                                                            ,   customerPaymentProfileId = idp
                                                            ,   validationMode           = validationModeEnum.liveMode
                        ))
                >=> validateCustomerPaymentProfileController
                @-> fun response -> response.directResponse
        
            let borrarFormaPago claims =
                fun _ -> ObtenerEstado.obtenerAliado claims
                >=> buscarIdAuthorize
                >*> mapBoth (fun (IdPayment idp) (IdAuthorize idm)  ->
                        deleteCustomerPaymentProfileRequest(customerProfileId        = idm
                                                        ,   customerPaymentProfileId = idp
                        ))
                >=> deleteCustomerPaymentProfileController
                @-> fun response -> "Forma de pago borrada."
        
        module Acciones =
            open ObtenerEstado
            open AA
            open AuthorizeNet.Api.Contracts.V1
        
            //let enviarCorreosVerificacion (estado: Modelo) =
            //    let mutable enviado = false
            //    for aliado in estado.aliados do
            //        for contacto in aliado.contactos do
            //            match contacto with
            //            | CorreoElectronico correo -> 
            //                match correo.enviado with
            //                | None -> enviado <- true; Correo.enviarVerificacionCorreo aliado correo
            //                |_-> ()
            //            | _ -> ()
            //    enviado
        
            //let actualizarAuthorizeId aliado authorizeIdR = 
            //    {
            //        nevento  = 0L
            //        aliadoO  = Some aliado.id
            //        data     = ActualizarAuthorizeId(aliado.id, authorizeIdR)        
            //    } |> ManejadorEventos.ejecutarEventoNuevo
        
            //let toResult v = v |> ResultM.toResult |> Result.mapError ResultMessage.summarized
        //
            //let registrarAliados (estado: Modelo) = asyncResultM {
            //    let mutable enviado = false
            //    for aliado in estado.aliados do
            //        if aliado.formasPago.Length > 0 && aliado.authorizeIdR = Error "" then
            //            enviado <- true
            //            let! idR = Authorize.buscarIdAuthorize aliado |> AsyncResultM.getResultM
            //            match idR with
            //            | ErrorM _  ->  let! resR = Authorize.registrarAliado aliado |> AsyncResultM.getResultM
            //                            do!  resR |> toResult
            //                                 |> actualizarAuthorizeId aliado |> AsyncResultM.map ignore
            //            | OkM(id, _) -> do!  Ok id 
            //                                 |> actualizarAuthorizeId aliado |> AsyncResultM.map ignore
            //    return enviado
            //}
        //
            //let actualizarPagoAuthorizeId aliado cta authorizeIdR =
            //    {
            //        nevento  = 0L
            //        aliadoO  = Some aliado.id
            //        data     = ActualizarPagoAuthorizeId(aliado.id, cta, authorizeIdR)
            //    } |> ManejadorEventos.ejecutarEventoNuevo
        //
            //let registrarCuentas (estado: Modelo) =  asyncResultM {
            //    let mutable enviado = false
            //    for aliado in estado.aliados do
            //        match aliado.authorizeIdR with
            //        | Ok authorizeId ->
            //            for formaPago in aliado.formasPago do
            //                match formaPago.authorizeIdR with
            //                | Error "" ->
            //                    match formaPago.cuentaPago with
            //                    | TarjetaCredito tar -> enviado <- true
            //                                            let! authorizeIdR = Authorize.registrarTarjeta aliado authorizeId tar |> AsyncResultM.getResultM
            //                                            do! actualizarPagoAuthorizeId aliado formaPago.cuentaPago (toResult authorizeIdR) |> AsyncResultM.map ignore
            //                    | CuentaBancaria cta -> enviado <- true
            //                                            let! authorizeIdR = Authorize.registrarCuenta  aliado authorizeId cta |> AsyncResultM.getResultM
            //                                            do! actualizarPagoAuthorizeId aliado formaPago.cuentaPago (toResult authorizeIdR) |> AsyncResultM.map ignore
            //                    |_-> () 
            //                |_-> ()
            //        |_-> ()
            //    return enviado
            //}
        
            let bindBoth f aa : AA<_, _> = fun inp -> inp |> (aa >=>  (f inp) )
            let mapIfFalse f aa = aa |> bindBoth (fun estado enviado -> if enviado then AsyncResultM.rtn true else f estado ) 
        
            //let ejecutarAcciones = 
            //    obtenerEstado
            //    >=> 
            //    (registrarAliados
            //     //|> mapIfFalse enviarCorreosVerificacion
            //     |> mapIfFalse registrarCuentas         )
        
        module Rpc =
            open WebSharper
            open WebSharper.JavaScript
            open AA
        
            [< JavaScript ; Inline >]
            let serverEndPoint = 
                if IsClient then 
                    if JS.Window.Location.Protocol = "http:" 
                    then "http://localhost:7071/api/"
                    else "https://prozper.azurewebsites.net/api/"
                else     "https://prozper.azurewebsites.net/api/"
        
            [< JavaScript >]
            let invoke (fname:string) idAliado (p:string) = asyncResultM {
                do!  async.Return ()
                let p = if isUndefined p then "null" else p
                let  headers = Headers()
                headers.Append("Content-Type", "application/json")
                headers.Append("IdAliado"    , idAliado          )
                let  req  = RequestOptions( 
                                  Mode        = RequestMode.Cors
                                , Credentials = RequestCredentials.Include
                                , Method      = "POST"
                                , Headers     = headers
                                , Body        = p)
                let! resp = JS.Fetch(serverEndPoint + fname, req ) |> Promise.AsAsync
                let! text = resp.Text() |> Promise.AsAsync
                printfn "invoke resp = %A" text
                return text
            }
        
            [< JavaScript >]
            let registroRpcs = System.Collections.Generic.Dictionary<string, (string*string)[]-> string -> Async<string> >()
        
            [< JavaScript ; Inline >]
            let inline doRpc<'P, 'R> fname =
                let serializeP   (p:        'P            ) : string            = Json.Serialize   p
                let serializeR   (p:ResultM<'R    , unit> ) : string            = Json.Serialize   p
                let deserializeP (s:        string        ) : 'P                = Json.Deserialize s
                let deserializeR (s:        string        ) : ResultM<'R, unit> = Json.Deserialize s
                (fun idAliado -> serializeP >> invoke fname idAliado >> Async.map (ResultM.bind deserializeR))
              , (fun (f: (string*string)[] -> AA<'P, 'R>) -> registroRpcs.Add(fname, (fun c js -> 
                                asyncResultM {
                                    let  p = deserializeP js
                                    let! r = f c p
                                    return r
                                } |> Async.map serializeR
                     ) ) )
        
            let obtenerUnions0 () = asyncResultM {
                return DiscUnion.simple<Pais          >
                     , DiscUnion.simple<Estado        >
                     , DiscUnion.simple<TipoDireccion >
                     , DiscUnion.simple<TipoTelefono  >
                     , DiscUnion.simple<Genero        >
                     , DiscUnion.simple<TipoCuenta    >
                     , DiscUnion.simple<TipoTarjeta   >
                     , DiscUnion.simple<StatusAliado  >
                     , [| for m in System.Enum.GetValues(typeof<Mes>)                       do yield string m |]
                     , [| for i in System.DateTime.Now.Year..System.DateTime.Now.Year + 15  do yield        i |]
            }
        
            let logoutUser0 _claims () : AsyncResultM<unit, unit> = AsyncResultM.errorMsgf "logoutUser0: not implemented"
        
            let [< Inline >] d01 = doRpc "ejecutarDataEventoNuevo" 
            //let [< Inline >] d02 = doRpc "obtenerEstadoParaUsuario"
            //let [< Inline >] d03 = doRpc "obtenerUnions"
            let [< Inline >] d04 = doRpc "logoutUser"
            let [< Inline >] d05 = doRpc "agregarUsuarioSiEsNuevo"
            let [< Inline >] d06 = doRpc "enviarCorreosInvitacion"
            let [< Inline >] d07 = doRpc "obtenerFormasDePago"
            let [< Inline >] d08 = doRpc "registrarTarjeta"
            let [< Inline >] d09 = doRpc "registrarCuenta"
            let [< Inline >] d10 = doRpc "validarFormaPago"
            let [< Inline >] d11 = doRpc "borrarFormaPago"
            let [< Inline >] d12 = doRpc "obtenerFormasDePagoPara"
            let [< Inline >] d13 = doRpc "obtenerListaDocs"
        
            let [< Inline >] ejecutarDataEventoNuevo  =  fst d01
            //let [< Inline >] obtenerEstadoParaUsuario =  fst d02
            //let [< Inline >] obtenerUnions            =  fst d03
            let [< Inline >] logoutUser               =  fst d04
            let [< Inline >] agregarUsuarioSiEsNuevo  =  fst d05
            let [< Inline >] enviarCorreosInvitacion  =  fst d06
            let [< Inline >] obtenerFormasDePago      =  fst d07
            let [< Inline >] registrarTarjeta         =  fst d08
            let [< Inline >] registrarCuenta          =  fst d09
            let [< Inline >] validarFormaPago         =  fst d10
            let [< Inline >] borrarFormaPago          =  fst d11
            let [< Inline >] obtenerFormasDePagoPara  =  fst d12
            let [< Inline >] obtenerListaDocs         =  fst d13
        
            ManejadorEventos.ejecutarDataEventoNuevo  |> snd d01 
            //ManejadorEventos.obtenerEstadoParaUsuario |> snd d02 
            //obtenerUnions0                            |> snd d03 
            logoutUser0                               |> snd d04 
            ManejadorEventos.agregarUsuarioSiEsNuevo  |> snd d05
            Correo.enviarCorreosInvitacion            |> snd d06
            Authorize.obtenerFormasDePago             |> snd d07
            Authorize.registrarTarjeta                |> snd d08
            Authorize.registrarCuenta                 |> snd d09
            Authorize.validarFormaPago                |> snd d10
            Authorize.borrarFormaPago                 |> snd d11
            Authorize.obtenerFormasDePagoPara         |> snd d12
            ManejadorEventos.obtenerListaDocs         |> snd d13
        
        
        //// when using pattern matching to separate the tuple we get error:
        ////                 WebSharper error FS9001: 
        ////                    Global error 'Undefined variable during writing JavaScript: $1626
        //// when using the library
        
            //let [< Inline >] ejecutarDataEventoNuevo ,  d1 =  doRpc "ejecutarDataEventoNuevo" 
            //let [< Inline >] obtenerEstado           ,  d2 =  doRpc "obtenerEstado"          
            //let [< Inline >] obtenerUnions           ,  d3 =  doRpc "obtenerUnions"          
            //let [< Inline >] logoutUser              ,  d4 =  doRpc "logoutUser"
        //
            //ManejadorEventos.ejecutarDataEventoNuevo |> d1
            //ManejadorEventos.obtenerEstado           |> d2
            //do               obtenerUnions0          |> d3
            //do               logoutUser0             |> d4 
        
            type AR<'T> = AsyncResultM<'T, unit>
        
            let [< Rpc >] obtenerUnions                       () : AR<_> = obtenerUnions0 ()
            let [< Rpc >] obtenerEstadoParaUsuario (id:IdAliado) : AR<_> = ManejadorEventos.obtenerEstadoParaUsuario id.Id
        
        module AmbienteMemoria =
            open System.Net.Mail
            open AA
        
            let mutable ultimoEvento  = 0L
            let mutable eventos       = [| |]
            let mutable ultimoEstadoO = None
            let mutable estadoO       = None
            let         aliados       = System.Collections.Generic.Dictionary<_,_>()
        
            let enviarCorreo (recipiente:string) (tema:string) (contenido:string)  = asyncResultM {
                use msg = new MailMessage(recipiente, "no-reply@prozper.com", tema, contenido)
                msg.IsBodyHtml <- true
                use client = new SmtpClient(@"localhost")
                client.DeliveryMethod <- SmtpDeliveryMethod.Network        
                client.Send msg
                do! ResultMessage.Info <| sprintf "Enviando correo %s" recipiente
            }
        
            let setAmbiente() =
                ambiente <- {
                    new IAmbiente with
                    member __.UltimoEvento             ()  = Some ultimoEvento
                    member __.UltimoEstado             ()  =      ultimoEstadoO
                    member __.LeerTipos                ()  = [||]   
                    member __.LeerEventosTipos         ()  = [||]   
                    member __.NuevoEvento      (usuario:string) (nombre:string) (evento:string) (tipo:string) = asyncResultM {
                        ultimoEvento <- ultimoEvento + 1L
                        eventos      <- Array.append eventos [| ultimoEvento, usuario, nombre, tipo, evento, System.DateTime.Now |]
                        return ultimoEvento
                    }
                    member __.LeerEventos              n   = asyncResultM {
                        return (eventos).[int (n-1L) ..] 
                    }
                    member __.GuardarEstado            n s = asyncResultM {
                        ultimoEstadoO <- Some n
                        estadoO       <- Some s
                    }
                    member __.ObtenerEstado            ()  = asyncResultM {
                        return ultimoEstadoO |> Option.bind(fun n -> estadoO |> Option.map(fun e -> n, e))
                    }
                    member __.GuardarAliado            i s = asyncResultM {
                        if aliados.ContainsKey i then aliados.Remove i |> ignore
                        aliados.Add(i, s) |> ignore
                    }
                    member __.ObtenerAliados           ()  = asyncResultM {
                        return aliados.Values |> Seq.toArray
                    }
                    member __.NombreAmbiente           ()  = "memoria"
                    member __.CarpetaRaiz              ()  = "..\src"
                    member __.EnviarCorreo           r t c = enviarCorreo r t c
                    member __.EnviarMensaje        d r t c = AsyncResultM.errorMsgf "AmbienteMemoria.EnviarMensaje: not implemented"
                    member __.ObtenerTransacciones      id = AsyncResultM.errorMsgf "Ambiente.ObtenerTransacciones: not implemented"
                    member __.ObtenerMensajes           id = AsyncResultM.errorMsgf "Ambiente.ObtenerMensajes: not implemented"
                    member __.ObtenerListaDocs          id = AsyncResultM.errorMsgf "Ambiente.ObtenerListaDocs: not implemented"
                    member __.VariableAmbiente           v = failwithf "Ambiente.VariableAmbiente: not implemented"
                    member __.Prepare                   () = Authorize.prepareAuthorizeNetEnvironment()
                }
                
        //[< JavaScript false >]
        module Sample =
            let data = """
        """
        
        
            let getLines = String.splitByChar '\n'
                        >> Seq.map String.trim
                        >> Seq.filter ((<>) "")
        
            let extraerCodigo nm =
                nm
                |> String.splitByChar ','
                |> function | [| apellido ; nombre |] -> Some (apellido, nombre) |_-> None
                |> Option.bind (fun (a,nm) -> String.delimitedO "(" ")" nm |> Option.bind (fun (nm, cd, _) -> Some (a.Trim(), nm.Trim(), cd.Trim() )) )
        
            let aliados =
                getLines data
                |> Seq.map (String.splitByChar '|')
                |> Seq.choose (function [| padre ; aliado ; tel ; email |] -> Some (padre, aliado, tel, email) |_-> None)
                |> Seq.choose (fun (p,al, tel, email) -> 
                    match extraerCodigo p, extraerCodigo al with
                    | Some(_,_,p), Some(ap, nm, cd) -> Some( p, ap, nm, cd, tel, email)
                    | _-> None
                )
                |> Seq.map (fun (p2, apellido, nombre, p1, tel, email) ->
                    {
                        id              = IdAliado p1
                        idPadreO        = IdAliado p2 |> Some
                        idForAuthorize  = None
                        influyente      = None
                        identificacion  = [||]
                        datosPersonales = {
                                            titulo          = None
                                            nombre1         = nombre
                                            nombre2         = ""
                                            apellido1       = apellido
                                            apellido2       = ""
                                            nacionalidad    = Venezuela
                                            genero          = Masculino
                                            fechaNacimiento = System.DateTime.Now
                        }
                        contactos       = [|
                                                Telefono { telVacio with numero = tel }
                                                CorreoElectronico {correoVacio with email = email }
                        |]
                        isInternal      = p1 = "PRZ"
                        status          = Activo
                        tipo            = Regular
                        fechaRegistro   = System.DateTime.Now
                        fechaStatus     = System.DateTime.Now
                        diaPago         = Dia01
                        nReferidos      = 0
                        nRefActivos     = 0
                        nDescendientes  = 0
                        nDescActivos    = 0
                        comision        = 0
                        nivel           = 0
                    }
                )
        
        
            aliados |> Seq.iter (printfn "%A" )
        
            //let aliados =
            //    getLines data
            //    |> Seq.map (String.splitByChar '|')
            //    |> Seq.map (fun p -> p.[0], Seq.last p)
            //    |> Seq.map (fun (p1, p2) -> 
            //        try statuses.[p1]
            //        with e -> printfn "not found %A" p1 ; "INACTIVO"
            //        , p1, p2)
            //    |> Seq.map (fun (sta, p1, p2) ->
            //        let apellido, nombre, genero = 
            //            match p1.Split ',' with
            //            | [| ap ; nm |] -> ap.Trim(), nm.Trim(), Femenino
            //            | _             -> ""       , p1.Trim(), Empresa
            //        {
            //            id              = IdAliado p1
            //            //authorizeIdR    = Error ""
            //            idPadreO        = IdAliado p2 |> Some
            //            identificacion  = [||]
            //            datosPersonales = {
            //                                titulo          = None
            //                                nombre1         = nombre
            //                                nombre2         = ""
            //                                apellido1       = apellido
            //                                apellido2       = ""
            //                                nacionalidad    = Venezuela
            //                                genero          = genero
            //                                fechaNacimiento = System.DateTime.Now
            //            }
            //            contactos       = [||]
            //            isInternal      = false
            //            status          = if sta = "ACTIVO" then Activo else Inactivo
            //            tipo            = Regular
            //            fechaRegistro   = System.DateTime.Now
            //            fechaStatus     = System.DateTime.Now
            //            diaPago         = Dia01
            //            nReferidos      = 0
            //            nRefActivos     = 0
            //            nDescendientes  = 0
            //            nDescActivos    = 0
            //            comision        = 0
            //            nivel           = 0
            //        }
            //    )
        
            let modelo = {
                idAliado      = IdAliado "PRZ"
                aliados       = aliados |> Seq.toArray
                anoActual     = 2019
                periodoActual = 1
                premisas      = premisasCalculo
                nevento       = -2L
            }
           //Aliado.actualizarAliados modelo
            //|> Seq.iter print
        
        
        //#define NOFMK --noframework
        
            
        //#nowarn "52"
        //#nowarn "1182"
        //#nowarn "1178"
        
        // without this   v    WebSharper compilation fails with message: 
        //               vvv      WebSharper error FS9001: 
        //                v       Global error 'An index satisfying the predicate was not found in the collection.'
        //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
        //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
        //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
        
        module AddSamples =
        
            let addSamples() =
                Sample.aliados 
                    |> Seq.iter (fun al ->
                        { data    = DataEvento.AgregarAliado al
                          aliadoO = Some <| IdAliado "Server"
                          nevento = 0L
                        }
                        |> ManejadorEventos.ejecutarEventoNuevo 
                        |> AsyncResultM.iterpS print)
        
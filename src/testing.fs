#nowarn "3242"
#nowarn "42"
////-d:FSharpStation1571155948940 -d:TEE -d:WEBSHARPER
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461"
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
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\LayoutEngine.dll"
//#nowarn "3242"
//#nowarn "42"
/// Root namespace for all code
//#define FSharpStation1571155948940
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
            
            /// taken from http://fssnip.net/7UH/title/Generalized-Units-of-Measure-Revisited-using-method-overloading
            //#nowarn "42"
            [<AutoOpen>]
            module UoM = 
            
                open System
            
                [<MeasureAnnotatedAbbreviation>] type bool<          [<Measure>] 'm> = bool
                [<MeasureAnnotatedAbbreviation>] type uint64<        [<Measure>] 'm> = uint64
                [<MeasureAnnotatedAbbreviation>] type Guid<          [<Measure>] 'm> = Guid
                [<MeasureAnnotatedAbbreviation>] type string<        [<Measure>] 'm> = string
                [<MeasureAnnotatedAbbreviation>] type TimeSpan<      [<Measure>] 'm> = TimeSpan
                [<MeasureAnnotatedAbbreviation>] type DateTime<      [<Measure>] 'm> = DateTime
                [<MeasureAnnotatedAbbreviation>] type DateTimeOffset<[<Measure>] 'm> = DateTimeOffset
            
                module private Unsafe = let inline cast<'a, 'b> (a : 'a) : 'b = (# "" a : 'b #)
            
                type UoM =
                    static member inline Tag<  [<Measure>]'m                 > (x : bool               ) : bool<          'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : int                ) : int<           'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : int64              ) : int64<         'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : uint64             ) : uint64<        'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : float              ) : float<         'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : decimal            ) : decimal<       'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : Guid               ) : Guid<          'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : string             ) : string<        'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : TimeSpan           ) : TimeSpan<      'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : DateTime           ) : DateTime<      'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : DateTimeOffset     ) : DateTimeOffset<'m > = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : bool<          'm >) : bool                = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : int<           'm >) : int                 = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : int64<         'm >) : int64               = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : uint64<        'm >) : uint64              = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : float<         'm >) : float               = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : decimal<       'm >) : decimal             = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : Guid<          'm >) : Guid                = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : string<        'm >) : string              = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : TimeSpan<      'm >) : TimeSpan            = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : DateTime<      'm >) : DateTime            = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : DateTimeOffset<'m >) : DateTimeOffset      = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : bool<          'm1>) : bool<          'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : int<           'm1>) : int<           'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : int64<         'm1>) : int64<         'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : uint64<        'm1>) : uint64<        'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : float<         'm1>) : float<         'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : decimal<       'm1>) : decimal<       'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : Guid<          'm1>) : Guid<          'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : string<        'm1>) : string<        'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : TimeSpan<      'm1>) : TimeSpan<      'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : DateTime<      'm1>) : DateTime<      'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : DateTimeOffset<'m1>) : DateTimeOffset<'m2> = Unsafe.cast x
            
            (*
                [<Measure>] type m
                [<Measure>] type n
            
                let x = UoM.tag<m> "string"
                let y = UoM.cast<m,n> x
                let z = UoM.untag y
            *)
            
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
                        let (>>=) ma f = bind f ma
                        let (|>>) ma f = map  f ma
                
                
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
            
                //let serField  (name:string) (get:'D->'e       ) (set:'e       ->'D->'D) ((ser, deser):Ser<'e>) : string * SerS<'D> * ('D -> SerD<'D>) = 
                //    name, get >>            ser, (fun rc j -> deser j |> Option.map (fun v -> set v rc) ) 
                //    
                //let [< Inline >] serRecord init (fields: #seq<(string * SerS<'D> * ('D -> SerD<'D>))>) : Ser<'D> =
                //    if isNull (init :> obj) then failwith "Initial record is null"
                //    let serialize   dim = fields |> Seq.map  (fun     (n,  ser, _deser) -> sprintf "%A: %s" n (ser dim)) |> String.concat ", " |> sprintf "{%s}"
                //    let deserialize j   = fields |> Seq.fold (fun dim (n, _ser,  deser) -> j.tryField n |> Option.bind (deser dim) |> Option.defaultValue dim)   init |> Some
                //    serialize, deserialize
            
                let serField  (name:string) (get:'D->'e       ) (set:'e       ->'D->'D) ((ser, deser):Ser<'e>) : string * ('D -> string option) * ('D -> JsonIntermediate option -> 'D) = 
                    name, get >>            ser >> Some, fun rc -> Option.bind (deser >> Option.map (swap set rc)) >> Option.defaultValue rc
            
                let serFieldO (name:string) (get:'D->'e option) (set:'e option->'D->'D) ((ser, deser):Ser<'e>) : string * ('D -> string option) * ('D -> JsonIntermediate option -> 'D) = 
                    name, get >> Option.map ser        , fun rc -> Option.map  (deser >>             swap set rc ) >> Option.defaultValue rc
            
                let [< Inline >] serRecord init (fields: #seq< string * ('D -> string option) * ('D -> JsonIntermediate option -> 'D) >) : Ser<'D> =
                    let serialize   rc = fields |> Seq.choose(fun    (n,  ser, _deser) -> ser rc       |> Option.map (sprintf "%A: %s" n)) |> String.concat ", " |> sprintf "{%s}"
                    let deserialize j  = fields |> Seq.fold  (fun rc (n, _ser,  deser) -> j.tryField n |> deser rc )   init |> Some
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
                let serPair serFst serSnd : Ser<'a * 'b    > = serDup(serFst, serSnd)
                let serMap serKey serElm : Ser<Map<'k, 'e>> =   serDup(serKey, serElm)
                                                                |> serSeq 
                                                                |> (fun serKVPs -> (Seq.map (fun kvp -> kvp.Key, kvp.Value) >> fst serKVPs) , (snd serKVPs >> Option.map Map) )
            
                let serTypedRegisters = System.Collections.Generic.Dictionary<string, Ser<obj>>()
            
                let map (g: 'b -> 'a) (f: 'a -> 'b       ) ((serS, serD): Ser<'a>) : Ser<'b> = g >> serS, (serD >> Option.map  f )
                let mapO(g: 'b -> 'a) (f: 'a -> 'b option) ((serS, serD): Ser<'a>) : Ser<'b> = g >> serS, (serD >> Option.bind f )
            
            
                /// Constant value with check, fails with value is not correct
                let serC  ser c : Ser<unit> = ser |> mapO (fun () -> c) (fun v -> if v = c then Some() else None )
                /// Constant value with no check
                let serCn ser c : Ser<unit> = ser |> map (fun () -> c) (fun _ -> c )
            
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
            
                //let check show (ser:Ser<_>) v =
                //    let bs = fst ser v
                //    if show then printfn "%A -> %s" v bs
                //    match deserialize ser bs with
                //    | Some(vv) when vv = v -> true
                //    | re -> if show then printfn "-> %A" re
                //            false
            
                let serGuid : Ser<System.Guid> = serString |> mapO string  ParseO.parseGuidO
            
            
            type [< Measure>] SnippetId 
            //= SnippetId of System.Guid with member x.Id = match x with SnippetId id -> id
            //                                               static member Empty = SnippetId System.Guid.Empty
            
            type Snippet = {
                snpId           : Guid<SnippetId>
                snpName         : string
                snpContent      : string
                snpParentIdO    : Guid<SnippetId> option
                snpPredIds      : Guid<SnippetId> Set
                snpProperties   : (string * string) []
                snpModified     : System.DateTime
            }
            
            type SnippetReference =
            | RefSnippetId   of string<SnippetId>
            | RefSnippetPath of string[]
            
            //type Reduced = ((SnippetId * string * int * int) [] * string [] * FsCode.PreproDirective [] ) option
            
            module Snippet =
                open System
            //    open Operators
            
                let getNextModified() = DateTime.Now
                //let getNextGeneration, setGeneration = 
                //    let mutable generation  = 1
                //    (fun () -> generation <- generation + 1 ; generation)
                //  , (fun n  -> generation <- n                          )  
                let New name content parentO = 
                    {
                        snpId           = System.Guid.NewGuid() |> UoM.Tag
                        snpName         = name
                        snpContent      = content
                        snpParentIdO    = parentO
                        snpPredIds      = Set.empty
                        snpProperties   = Array.empty
                        snpModified     = getNextModified()
                    }
                let defaultSnippet              = {
                    snpId           = System.Guid.Empty |> UoM.Tag
                    snpName         = ""
                    snpContent      = ""
                    snpParentIdO    = None
                    snpPredIds      = Set.empty
                    snpProperties   = Array.empty
                    snpModified     = Utc1970_01_01
                }    
            
                let indirectPredecessorIds (tryFindSnippet:Guid<SnippetId> -> Snippet option) (snpId, snpParentIdO, snpPredIds) =
                    let rec getPreds out searched toSearch =
                        if Set.isEmpty toSearch then out else
                        let sid        = Seq.head toSearch
                        let toSearch1  = Set.remove sid toSearch
                        let searched1  = Set.add    sid searched
                        match tryFindSnippet sid with
                        | None        -> getPreds out searched1 toSearch1
                        | Some snp1   ->
                        let news       = Set (Option.toArray snp1.snpParentIdO) + Set snp1.snpPredIds
                        let out1       = out + news
                        let toSearch2  = toSearch1 + (news - searched1)
                        getPreds out1 searched1 toSearch2
                    let parentS = snpParentIdO |> Option.toArray |> Set
                    getPreds parentS (Set.singleton snpId) (parentS + snpPredIds) 
            
                let allPredecessors (tryFindSnippet:Guid<SnippetId> -> Snippet option) (snp : Snippet) =
                    let rec getPreds (out:Set<Snippet>) searched toSearch = 
                        if Set.isEmpty toSearch then out else
                        let sid        = Seq.head toSearch
                        let toSearch1  = Set.remove sid toSearch
                        let searched1  = Set.add    sid searched
                        match tryFindSnippet sid with
                        | None        -> getPreds out searched1 toSearch1
                        | Some snp1   ->
                        let news       = Set (Option.toArray snp1.snpParentIdO) + Set snp1.snpPredIds
                        let out1       = Set.add snp1 out
                        let toSearch2  = toSearch1 + (news - searched1)
                        getPreds out1 searched1 toSearch2
                    let parentS = snp.snpParentIdO |> Option.toArray |> Set
                    getPreds Set.empty (Set.singleton snp.snpId) (parentS + Set snp.snpPredIds)
            
                let getLevel (tryFindSnippet:Guid<SnippetId> -> Snippet option) (snp : Snippet) =
                    let rec level lvl snp1 =
                        match snp1.snpParentIdO |> Option.bind tryFindSnippet with
                        | None      -> lvl
                        | Some snpP -> level (lvl + 1) snpP
                    level 0 snp
                    
                let hasChildren (getSnippets:unit -> #seq<Snippet>) (snp : Snippet) =
                    let snps = getSnippets()
                    match snps |> Seq.tryFindIndex (fun s -> s.snpId = snp.snpId) with
                    | None -> false
                    | Some i ->
                    snps 
                    |> Seq.tryItem (i + 1)
                    |> Option.map (fun ch -> ch.snpParentIdO = Some snp.snpId)
                    |> Option.defaultValue false
            
            module SnippetSerialize =
                open Serializer
            
                let serSnippetId : Ser<Guid<SnippetId>> = 
                    let s           = "SnippetId"
                    let serialize   (gid:Guid<SnippetId>) = UoM.Untag gid |> string |> sprintf "{%A :%A}" s
                    let deserialize j   = j.tryField s 
                                          |> Option.bind (fun jf -> jf.tryString() ) 
                                          |> Option.bind ParseO.parseGuidO 
                                          |> Option.map  UoM.Tag
                    serialize, deserialize
            
                let serSnippet   : Ser<Snippet  > = 
                    [|
                        serSnippetId                               |> serField  "snpId"         (fun s -> s.snpId        ) (fun v  s -> { s with snpId         = v } )
                        serString                                  |> serField  "snpName"       (fun s -> s.snpName      ) (fun v  s -> { s with snpName       = v } )
                        serString                                  |> serField  "snpContent"    (fun s -> s.snpContent   ) (fun v  s -> { s with snpContent    = v } )
                        serSnippetId                     |> serOpt |> serField  "snpParentIdO"  (fun s -> s.snpParentIdO ) (fun v  s -> { s with snpParentIdO  = v } )
                        serSnippetId                     |> serSet |> serField  "snpPredIds"    (fun s -> s.snpPredIds   ) (fun v  s -> { s with snpPredIds    = v } )
                        serDup(serString, serString)     |> serArr |> serField  "snpProperties" (fun s -> s.snpProperties) (fun v  s -> { s with snpProperties = v } )
                        serInt                                     |> serFieldO "snpGeneration" (fun s -> None           ) (fun vO s -> match vO with Some v -> { s with snpModified = Utc1970_01_01.AddHours (float v) } |_-> s)
                        serDate                                    |> serField  "snpModified"   (fun s -> s.snpModified  ) (fun v  s -> { s with snpModified   = v } )
                    |] |> serRecord (Snippet.New "" "" None)
            
                type Model = {
                    snippets   : Snippet []
                    modified   : System.DateTime
                    collapsed  : Guid<SnippetId> Set
                }
            
                let getModel(snippets, gen, coll) =  { snippets = snippets |> Seq.toArray ;  modified = gen ; collapsed = coll}
            
                let serModel : Ser<Model> =
                    [|
                        serSnippet                       |> serArr           |> serField  "snippets"   (fun m -> m.snippets  ) (fun v  m -> { m with snippets   = v } )
                        serInt                                               |> serFieldO "generation" (fun m -> None        ) (fun vO m -> match vO with None -> m | Some v -> { m with modified = Utc1970_01_01.AddHours (float v) } )
                        serDate                                              |> serField  "modified"   (fun m -> m.modified  ) (fun v  m -> { m with modified   = v } )
                        serSnippetId                     |> serSet           |> serField  "collapsed"  (fun m -> m.collapsed ) (fun v  m -> { m with collapsed  = v } )
                    |] |> serRecord { snippets = [||] ; modified = Utc1970_01_01 ; collapsed = Set.empty}
                    
            
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER 
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            module Promise =
                let ofAsyncResult (v: Async<Result<'a,'b>>) : Promise<'a> =
                    new Promise<'a>(fun (resolve, reject) ->
                        Async.StartWithContinuations(v, (function Ok ok -> resolve ok | Error er -> reject <| sprintf "%A" er), reject, reject)
                    )
            
            module PromiseM =
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
                open Serializer
            
                let serVarField (name:string) (var:'D->Var<'e>) (serFuncs:Ser<'e>) : string * SerS<'D> * ('D -> SerD<'D>) = 
                    let ser, deser = serFuncs
                    name
                  , (var >> Var.Get >> ser)
                  , (fun rc o -> deser o |>! Option.iter (var rc |> Var.Set) |> Option.map (fun _ -> rc) )
            
                let serLMdField (name:string) (lmd:'D->ListModel<_,'e>) serE  : string * SerS<'D> * ('D -> SerD<'D>) = 
                    let serS = serSeq serE
                    name
                  , lmd >> (fun lm -> lm.Value) >> fst serS
                  , (fun rc b -> snd serS b |>! Option.iter (lmd rc).Set |> Option.map (fun _ -> rc) )
            
                let rec getJsonIntermediate df di ds db da (o:obj) : JsonIntermediate =
                    let jsonInt = getJsonIntermediate df di ds db da 
                    {
                        tryFloat    = fun () -> (if isUndefined o then None else match o with | :? float   as v -> Some v                      |_-> None) |> Option.orElseWith df
                        tryInt      = fun () -> (if isUndefined o then None else match o with | :? int64   as v -> Some v                      |_-> None) |> Option.orElseWith di
                        tryString   = fun () -> (if isUndefined o then None else match o with | :? string  as v -> Some v                      |_-> None) |> Option.orElseWith ds
                        tryBool     = fun () -> (if isUndefined o then None else match o with | :? bool    as v -> Some v                      |_-> None) |> Option.orElseWith db
                        tryArray    = fun () -> (if isUndefined o then None else match o with | :? System.Array as a -> Array.map jsonInt (unbox o) |> Some |_-> None) |> Option.orElseWith (fun () -> da  jsonInt   )
                        tryField    = fun fl -> (if isUndefined o then None else match o?(fl) with null -> Some(jsonInt null) | f when isUndefined f -> None | v -> Some(jsonInt v) )
                        isObject    = fun () -> JS.TypeOf o = JS.Kind.Object && o <> null 
                        isNull      = fun () -> o = null 
                        toString    = fun () -> sprintf "%A" o
                    }
            
                let deserialize df di ds db da (ser: Serializer.Ser<_>) = 
                    Json.Parse
                    >> getJsonIntermediate df di ds db da
                    >> snd ser
            
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
                        (fun _   -> Some 0.0               )
                        (fun _   -> Some 0L                )
                        (fun _   -> Some ""                )
                        (fun _   -> Some false             )
                        (fun _   -> Some [||]              )
                        ser
            
                let deserializeWithFail ser = 
                    deserialize
                        (fun _   -> failwith  "Error expecting float"    )
                        (fun _   -> failwith  "Error expecting int"      )
                        (fun _   -> failwith  "Error expecting string"   )
                        (fun _   -> failwith  "Error expecting bool"     )
                        (fun _   -> failwith  "Error expecting array"    )
                        ser
            
            
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
                    <link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" rel="stylesheet">
                    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"  type="text/javascript"></script>
                </div>
                <div ws-template="AppFramework" style="height: calc(100vh - 4px); width: calc(100vw - 4px) " class="relative" >
                    <div ws-hole="MainClient"></div>
                    <div class="AppFrameworkGo"><button ws-onclick="GoClient">${MainDoc}</button></div>
                </div>
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
                                    <PartSizes>calc(100% - 150px) 150px</PartSizes>
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
                                            <wcomp-splitter vertical value="100" min="30" max="100">
                                                <ws-FixedSplitterHor>
                                                    <PartSizes>32px calc(100% - 32px)</PartSizes>
                                                    <First>
                                                        <div>
                                                            <div class="input-group">
                                                                <span class="input-group-addon">name:</span>
                                                                <span class="input-group-addon">${PlugInName}</span>
                                                            </div>
                                                        </div>
                                                    </First>
                                                    <Second>
                                                        <div style="overflow:auto">
                                                            <div>
                                                                <div>Docs:</div>
                                                                <div ws-hole="Docs" style="overflow:auto" ></div>
                                                            </div>
                                                            <div>
                                                                <div>Vars:</div>
                                                                <div ws-hole="Vars" style="overflow:auto" >
                                                                        <div ws-template="NameValueInput" class="input-group">
                                                                        <span class="input-group-addon">${Name}:</span>
                                                                        <textarea class="form-control" id="" placeholder="Value..." ws-var="Value" spellcheck="false">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div>Views:</div>
                                                                <div ws-hole="Views" style="overflow:auto" >
                                                                    <div ws-template="NameValue" class="input-group">
                                                                        <span class="input-group-addon">${Name}:</span>
                                                                        <span class="input-group-addon">${Value}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div>Queries:</div>
                                                                <div ws-hole="Queries" style="overflow:auto" ></div>
                                                            </div>
                                                        </div>
                                                    </Second>
                                                </ws-FixedSplitterHor>
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
                                            </wcomp-splitter>
                                        </wcomp-splitter>
                                    </First>
                                    <Second>
                                        <div style="
                                            overflow: hidden;
                                            display: grid;
                                            grid-template-columns: 100%;
                                            grid-template-rows: repeat(15, calc(100% / 15));
                                            bxackground-color: #eee;
                                            box-sizing: border-box;
                                            padding : 5px;
                                            grid-gap: 5px;
                                            margin-right: 21px;
                                       "  class="absolute" ws-hole="Actions" >
                                            <button ws-template="Action"         ws-onclick="Click" class="btn" type="button" id=""          >${Name}</button>
                                            <button ws-template="ActionDisabled" ws-onclick="Click" class="btn" type="button" id="" disabled >${Name}</button>
                                        </div>
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
                        xtextarea {
                           resize : none;
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
    
        //#define WEBSHARPER
        //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
        [< JavaScriptExport >]
        module TestingJS =
        
        
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\LayoutEngine.dll"
            open FsRoot
            
            [< JavaScript ; JavaScriptExport (typeof<WebComponent.WcSplitter.WcSplitterT>) >]
            module StartAppFramework =
                open FsRoot
            
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
            
            module Util =
                open Html
            
                let disabled disW = attr.disabledDynPred (V "") disW
                let inputLabel attrs disW txt var =
                    div attrs [
                        div [           attr.``class`` "input-group"                       ] [
                            span      [ attr.``class`` "input-group-addon"                 ] [ text txt ]
                            Doc.Input [ attr.``class`` "form-control"      ; disabled disW ]   var
                        ]
                    ]
            
                let areaLabel attrs disW txt (var:Var<string>) =
                    div attrs [
                        div [                attr.``class`` "input-group"                       ] [
                            span           [ attr.``class`` "input-group-addon"                 ] [ text txt ]
                            Doc.InputAreaV [ attr.``class`` "form-control"      ; disabled disW ]   var.V
                        ]
                    ]
            
                let elemsUI doc addNew =
                    div [] [
                        doc
                        Doc.Button "New" [] addNew
                    ]
            
                let lensFloat2Str(v:Var<float>) = Var.Make (V (sprintf "%A" v.V)) (ParseO.parseDoubleO >> function Some d when d <> v.Value -> v.Set d |_->())
                let textLine txtW = div [] [ textView txtW ]
            
                let lensStrO (sel:Var<string option>) =
                    Var.Make 
                        (V ( match sel.V with Some s -> s |_-> "" )) 
                        (fun s -> if s = "" then sel.Set None
                                  else Some s |> sel.Set)
            
                let mapVarO toB ofBO (sel:Var<_ option>) = 
                    Var.Make(V (sel.V |> Option.map toB)) 
                            (function Some s -> ofBO s |> Option.iter (Some >> sel.Set) |_-> sel.Set None) 
            
                //let selectorLens toStr ofStrO (sel:Var<_ option>) =
                //    Var.Make 
                //        (V ( match sel.V with Some v -> sprintf "%s" (toStr v) |_-> "" )) 
                //        (fun s -> if s = "" then sel.Set None
                //                  else ofStrO s |> Option.iter (Some >> sel.Set) )
                let selectorLens toStr ofStrO = mapVarO toStr ofStrO >> lensStrO
            
                let selectorLensInt    sel = selectorLens (fun (v          ) -> v   .ToString()) (ParseO.parseIntO                      ) sel
                let selectorLensGuid   sel = selectorLens (fun (v          ) -> v   .ToString()) (ParseO.parseGuidO                     ) sel
                let selectorLensGuidId sel = selectorLens (fun (v:GuidId<_>) -> v.Id.ToString()) (ParseO.parseGuidO >> Option.map GuidId) sel
            
                let unselectorV<'K> : Var<'K option> = Var.Make (View.Const None) ignore
            
                //let wrapUI elem f = (fun a b -> f a b >> Seq.singleton >> elem [] )
                let simpleButton txt f = Doc.Button txt [] (f >> ignore)
                let newButton   f = simpleButton "New" f
                let orderedList l = ol [] [ l ]
            
            module AF =
                open FsRoot
                open AppFramework
            
                type PlugInBuilder() =
                    member __.Zero() = { defaultPlugIn() with plgName    = "Main" }
                    member this.Yield(()) = this.Zero()
                    member __.For(coll:seq<_>, func) =
                        let ie = coll.GetEnumerator()
                        while ie.MoveNext() do
                            func ie.Current
                    [<CustomOperation("name"   )>]
                    member __.Name  (plg:PlugIn, name     )   = { plg with plgName    = name }
                    [<CustomOperation("var"    )>]  
                    member __.AddVar(plg:PlugIn, name, var)   = plg.plgVars   .Add(newVar name var)  ; plg
                    [<CustomOperation("doc"    )>]  
                    member __.AddDoc(plg:PlugIn, name, doc)   = plg.plgDocs   .Add(newDoc name doc)  ; plg
                    [<CustomOperation("docDyn" )>]  
                    member __.AddDocF(plg:PlugIn, name, docF) = plg.plgDocs   .Add(newDoc name (lazy LayoutEngine.turnToView docF) ) ; plg
                    [<CustomOperation("act"    )>]
                    member __.AddAct(plg:PlugIn, name, act)   = plg.plgActions.Add(newAct name act) ; plg
                    [<CustomOperation("actOpt"    )>]
                    member __.AddActO(plg:PlugIn, name,actO) = match actO with 
                                                               | Some act -> plg.plgActions.Add(newAct name act)
                                                               | None     -> ()
                                                               plg
                    //[<CustomOperation("mainDoc")>]
                    //member __.InsDoc(plg:PlugIn, name, doc) = plg.plgDocs.    = [| newDoc name doc |] |> Array.append <| plg.plgDocs    }
                    [<CustomOperation("view"   )>]  
                    member __.AddViw(plg:PlugIn, name, viw) = plg.plgViews.Add(newViw name viw)
                    [<CustomOperation("merge"  )>]
                    member __.Merge (plg:PlugIn, prefix, p2:PlugIn) = 
                        plg.plgVars   .AppendMany(p2.plgVars    |> Seq.map (fun v -> { v with varName = prefix + v.varName } ) ) 
                        plg.plgViews  .AppendMany(p2.plgViews   |> Seq.map (fun w -> { w with viwName = prefix + w.viwName } ) ) 
                        plg.plgDocs   .AppendMany(p2.plgDocs    |> Seq.map (fun d -> { d with docName = prefix + d.docName } ) ) 
                        plg.plgActions.AppendMany(p2.plgActions |> Seq.map (fun a -> { a with actName = prefix + a.actName } ) ) 
                        plg.plgQueries.AppendMany(p2.plgQueries |> Seq.map (fun q -> { q with qryName = prefix + q.qryName } ) ) 
                        plg
            
                let plugin = PlugInBuilder()
                let addPlugIn2 plg =
                    addPlugIn  plg
                    match Seq.tryHead plg.plgDocs with
                    | Some doc -> mainDocV.Set (plg.plgName + "." + doc.docName)
                    |_->()
            
                let concatMainDocs plugins = 
                    plugins 
                    |> Seq.choose (fun plg -> Seq.tryHead plg.plgDocs) 
                    |> Seq.choose (function {docDoc = (LazyDoc d)}-> Some d.Value|_-> None) 
                    |> Doc.Concat
            
                type ListModelData<'K, 'D when 'K : equality> = {
                    elems  : ListModel<'K, 'D>
                    doc    : Doc
                    selV   : Var<'K option>
                    add    : unit -> 'D  
                    delCur : unit -> unit
                    //getDoc : View<'K option> -> Var<'D> -> Doc
                    def    : 'D
                } with 
                    member this.PlugIn selectorLens = plugin {
                        doc    "list" (lazy this.doc         )
                        //doc    "cur"  (lazy this.CurrentDoc  )
                        var    "sel"  (selectorLens this.selV)
                        act    "add"  (this.add >> ignore    )
                        act    "del"  this.delCur
                    }
                    member this.CurrentW =
                        this.selV.View 
                        |> View.Bind (Option.map this.elems.TryFindByKeyAsView >> View.insertWO) 
                        |> View.Map  (Option.bind id >> Option.defaultValue this.def)
                    member this.CurrentV =
                        Var.Make this.CurrentW
                                (fun v -> match this.selV.Value with Some k when this.elems.ContainsKey k -> this.elems.Add v |_-> ())
                    //member this.CurrentDoc   = this.getDoc this.selV.View this.CurrentV
            
                //type ListModelDataGuidId<'D> = ListModelData<GuidId<'D> , 'D>
                //type ListModelDataGuid<  'D> = ListModelData<System.Guid, 'D>
                //type ListModelDataInt<   'D> = ListModelData<int        , 'D>
            //
                //type ListModelDataGuidId<'D> with
                //    member this.PlugIn () = (box this |> unbox<ListModelData<GuidId<'D>, 'D>>).PlugIn Util.selectorLensGuidId
            
            module LayoutEngine =
                open LayoutEngine
                module AF = AppFramework
            
                let addLayout0 lyt = 
                    addLayout lyt
                    AF.mainDocV.Set lyt.lytName
            
            module ListModel =
                let MapLens predO (f: 'Key -> Var<'T> -> 'V) (m:ListModel<_,_>) =
                    let get k v = f k (m.Lens k)
                    match predO with
                    | None       -> m.ViewState |> View.MapSeqCachedViewBy m.Key get 
                    | Some predW ->
                        (m.ViewState, predW) 
                        ||> View.Map2(fun vms pred -> vms.ToArray (System.Predicate pred)) 
                        |> View.MapSeqCachedViewBy m.Key get 
            
            module LM =
                open Util
            
                let getDocFor (elements: ListModel<_,_>) def newF predWO elUI =
                    let keyF = elements.Key
                    let selected0 : Var<_ option>  = Var.Create None
                    let selView = View.Do {
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
                            (function Some k when elements.ContainsKey k -> Some k |_-> None
                             >> fun v -> if selected0.Value <> v then selected0.Set v )
                    let addNew () =
                        let n = newF()
                        elements.Add n
                        selectedV.Set (Some <| keyF n)
                        n
                    let delete  k = fun () -> selectedV.Set None ; elements.RemoveByKey k
                    let result = {
                        AF.elems  = elements
                        AF.doc    = Doc.Empty
                        AF.selV   = selectedV
                        AF.delCur = fun () -> selectedV.Value |> Option.iter (fun k -> delete k () )
                        AF.add    = addNew
                        //AF.getDoc = elUI selectedV ignore
                        AF.def    = def
                    }
                    let elUIF = elUI result
                    let list      = elements |> ListModel.MapLens predWO (fun k v -> elUIF (View.Const (Some k)) v )
                    { result with AF.doc = list |> Doc.BindSeqCached id }
            
                let getDoc keyF def newF predWO elUI =
                    let elements  : ListModel<_,_> = ListModel.Create keyF []
                    getDocFor elements def newF predWO elUI
            
                //let setCurrentDoc docF li = { li with AF.getDoc = docF Util.unselectorV ignore }
                let addElements (li:AF.ListModelData<_,_>) elems = li.elems.AppendMany elems
            
            module LMX =
                open Util
                open System
            
                let addNewO newF firstKey nextKey=
                    let mutable k = firstKey
                    fun () ->
                        let e = k, newF()
                        k <- nextKey k
                        e
            
                let elemUI2 elemUI a b (v:Var<_>) = elemUI a b (v.Lens snd (fun (i, _) nv -> i, nv ) )
            
                let getDocInt    def newElem elemUI = addNewO newElem 0                          ((+) 1)                             |> LM.getDoc fst (-1               , def) <| None <| elemUI2 elemUI
                let getDocGuid   def newElem elemUI = addNewO newElem (Guid.NewGuid())           (fun _ -> Guid.NewGuid())           |> LM.getDoc fst (       Guid.Empty, def) <| None <| elemUI2 elemUI
                let getDocGuidId def newElem elemUI = addNewO newElem (Guid.NewGuid() |> GuidId) (fun _ -> Guid.NewGuid() |> GuidId) |> LM.getDoc fst (GuidId Guid.Empty, def) <| None <| elemUI2 elemUI
                                                        : AF.ListModelData<GuidId<'C>, GuidId<'C> * 'C>
            
                //let setCurrentDoc docF = elemUI2 docF |> LM.setCurrentDoc
            
                let addElements (li:AF.ListModelData<_,_>) elems = elems |> Seq.iter (fun v -> (li.add() |> fst, v) |> li.elems.Add )
            
            
            module SnippetTemplates =
                let html = """
                <div ws-template="Snippet" >
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
                <style>
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
                       resize : none;
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
                        text-decoration : underline;
                        font-weight     : bold;
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
            """
            module DragDrop =
            
                type DragInfo = 
                    | DragNone
                    | DragNode of Guid<SnippetId>
                
                let mutable drag        = DragNone
                let setDragNone ()      = drag <- DragNone
                let setDragNode tnid    = drag <- DragNode tnid
                let getDragNIdO tnId    = 
                    match drag with 
                    | DragNode dnid when dnid <> tnId -> Some dnid 
                    | _ -> None
                
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
            
            module SnippetsUI =
                open FsRoot
                open Html
            
                open WebSharper.UI.Templating
            
                [< Literal >] 
                let TemplateFileName =  @"D:\Abe\CIPHERWorkspace\FSharpStation\website\Templates.html"
                type Templates       = Templating.Template<TemplateFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
            
                let snippetsLM       = ListModel.Create (fun e -> e.snpId) []
                let collapsedV       = Var.Create Set.empty
                let codeSnippetIdV   = Var.Create (None : Guid<SnippetId> option)
                let searchFor        = Var.Create ""
            
                let allPredecessors  = Snippet.allPredecessors        snippetsLM.TryFindByKey
                let indPredIds       = Snippet.indirectPredecessorIds snippetsLM.TryFindByKey
                //let getLevel         = Snippet.getLevel               snippetsLM.TryFindByKey
                //let hasChildren      = Snippet.hasChildren            (fun () -> snippetsLM.Value)
                let allCodePredsW    = V (  match codeSnippetIdV.V with 
                                            | None      -> Set.empty 
                                            | Some sid  ->
                                            match snippetsLM.TryFindByKey sid with 
                                            | None      -> Set.empty
                                            | Some snp  -> allPredecessors snp )
                let allCodePredIdsW  = V ( allCodePredsW.V |> Seq.map (fun snp -> snp.snpId) )
            
                type SnippetHierData = {
                    level       : int
                    pos         : int
                    hasChildren : bool
                    visible     : bool
                    path        : Guid<SnippetId> []
                    errorO      : string option
                }
                let shdDef = {
                    level       = 0
                    pos         = 0
                    hasChildren = false
                    visible     = true
                    path        = [||]
                    errorO      = None
                }
            
                let processHier (snps: (Guid<SnippetId> * (Guid<SnippetId> option)) []) collapsed =
                    let  dSnps            = System.Collections.Generic.Dictionary()
                    let  mutable path     = [||]
                    let  mutable collapse = 0
                    for k, (sid, pidO) in Seq.indexed snps do
                        let lvl, pth, errO =
                            match pidO with
                            | None      -> 0, [||], None
                            | Some pid  ->
                            match path  |> Seq.indexed |> Seq.tryFind (fun (_, spid) -> spid = pid) with
                            | None      -> 0, [||], Some (sprintf "Parent not found in path %A" pid)
                            | Some(j,p) -> (j + 1), path.[0..j], None
                        dSnps.Add(sid,  {
                            level       = lvl
                            pos         = k
                            hasChildren = snps |> Seq.tryItem (k + 1) |> Option.map (snd >> ((=) (Some sid))) |> Option.defaultValue false
                            visible     = collapse >= lvl
                            path        = pth
                            errorO      = errO
                        })
                        path <- Array.append pth [| sid |]
                        if  collapse >= lvl then
                            collapse <- if collapsed |> Set.contains sid then lvl else lvl + 1
                    dSnps
            
                let snpIdParentsW         = V(snippetsLM.View.V |> Seq.map (fun snp -> snp.snpId, snp.snpParentIdO) |> Seq.toArray)
                                            |> View.consistent
            
                let processHierW          = View.Do {
                    let! snps             = snpIdParentsW
                    let! collapsed        = collapsedV.View
                    return processHier snps collapsed
                }
            
                let docWrap wrapper (doc:Doc) : Doc = doc |> Seq.singleton |> wrapper Seq.empty
            
                let moveNode frid toid =
                    processHierW
                    |> View.Get (fun hier ->
                        match Dict.tryGetValue frid hier, Dict.tryGetValue toid hier, snippetsLM.TryFindByKey frid, snippetsLM.TryFindByKey toid with
                        | Some frdt, Some todt, Some frsn, Some tosn ->
                            if Seq.contains frid todt.path then () else
                            let elems = snippetsLM.Value |> Seq.toArray
                            let rec nextPos i =
                                match Array.tryItem (i + 1) elems with
                                | None     -> i
                                | Some snp ->
                                match Dict.tryGetValue snp.snpId hier with
                                | None     -> i
                                | Some shd ->
                                if   Seq.contains frid shd.path 
                                then nextPos (i + 1)
                                else i
                            let n = nextPos frdt.pos
                            let newSn = { frsn with snpParentIdO = tosn.snpParentIdO }
                            if frdt.pos < todt.pos
                            then [| elems.[0..frdt.pos-1] ; elems.[n+1..todt.pos-1] ; [| newSn |] ; elems.[frdt.pos+1..n] ; elems.[todt.pos..                          ] |]
                            else [| elems.[0..                          todt.pos-1] ; [| newSn |] ; elems.[frdt.pos+1..n] ; elems.[todt.pos..frdt.pos-1] ; elems.[n+1..] |]
                            |> Array.concat
                            |> snippetsLM.Set
                        |_->()
                    )
            
                let calcUI wrapper allowDelete (lmd:AF.ListModelData<_,Snippet>) =
                    let curW = V(lmd.CurrentV.V.snpId, lmd.CurrentV.V.snpParentIdO, lmd.CurrentV.V.snpPredIds) |> View.consistent
                    let indSelPredIdsW = V ( indPredIds curW.V)
                    fun (k:View<_ option>) (snp:Var<Snippet>) ->
                        let disabledW = V (Option.isNone k.V )
                        let snpdW     = V (processHierW.V |> Dict.tryGetValue snp.V.snpId |> Option.defaultValue shdDef)
                        Templates.Snippet()
                            .Name(          (if Option.isNone snpdW.V.errorO then id else sprintf "!%s") snp.V.snpName     )
                            .Selected(      if lmd.selV.V = k.V then "selected" else ""                           )
                            .Predecessor(   match k.V with 
                                            | None     -> ""
                                            | Some key ->
                                            if lmd.CurrentV.V.snpPredIds |> Seq.contains key then "direct-predecessor" 
                                            elif indSelPredIdsW .V       |> Seq.contains key then "indirect-predecessor" 
                                            elif allCodePredIdsW.V       |> Seq.contains key then "included-predecessor" 
                                                                                             else ""              
                                            + if codeSnippetIdV.V = k.V  then " codeSnippet" else ""              )
                            .Select(        fun _ -> View.Get lmd.selV.Set k                                      )
                            .Indent(        string (1.5 * float snpdW.V.level )                                   )
                            .Parent(        if snpdW.V.hasChildren then 
                                               (if collapsedV.V |> Set.contains snp.V.snpId then "collapsed" 
                                                                                            else "expanded" )
                                                                                            else ""               )
                            .ToggleCollapse(fun _ -> 
                                            snpdW 
                                            |> View.Get (fun snpd ->
                                                if snpd.hasChildren then
                                                    (if collapsedV.Value |> Set.contains snp.Value.snpId 
                                                        then Set.remove
                                                        else Set.add )   
                                                            snp.Value.snpId collapsedV.Value 
                                                    |> collapsedV.Set)                                            )
                            .Drag(          fun ev -> k |> View.Get (function None -> () |Some sid ->     DragDrop.setDragNode sid            ; ev.Event.StopPropagation()   ) )
                            .DragOver(      fun ev -> k |> View.Get (function None -> () |Some sid -> if (DragDrop.getDragNIdO sid).IsSome then ev.Event.PreventDefault ()   ) )
                            .Drop(          fun ev -> do ev.Event.PreventDefault () 
                                                      k |> View.Get (function None -> () |Some sid ->     DragDrop.getDragNIdO sid |> Option.iter(fun fr -> moveNode fr sid) ) )
                            .Doc()
                        |> docWrap wrapper
            
                let search = View.Do {
                    let! processHier    = processHierW
                    let  visibleF snp = processHier |> Dict.tryGetValue snp.snpId |> Option.map (fun d -> d.visible) |> Option.defaultValue true
                    let! sr = searchFor.View
                    if   sr = ""  then return visibleF else
                    let! allCodePredIds = allCodePredIdsW
                    let! codeSnippetId  = codeSnippetIdV.View
                    let  enProjecto snp = (codeSnippetId = Some snp.snpId || allCodePredIds |> Seq.contains snp.snpId) && visibleF snp
                    if   sr = "." then return enProjecto else
                    return fun (snp:Snippet) -> snp.snpName.Contains sr || snp.snpContent.Contains sr
                }
            
                let wrapNothing _ = Doc.Concat
            
                let snippetList = 
                    LM.getDocFor snippetsLM Snippet.defaultSnippet (fun () -> Snippet.New "" "" None) (Some search) (calcUI wrapNothing true )
            
                snippetList.selV.View |> View.Sink(function 
                    | None     -> ()
                    | Some sid ->
                    allCodePredIdsW 
                    |> View.Get (fun allCodePredIds ->
                        if codeSnippetIdV.Value <> Some sid then
                            if allCodePredIds |> Seq.contains sid |> not then
                                codeSnippetIdV.Set (Some sid))
                )
            
                let currentSnippetV        = snippetList.CurrentV.Lens id (fun _ -> id)
                let currentSnippetNameV    = Lens (currentSnippetV.V.snpName    )
                let currentSnippetContentV = Lens (currentSnippetV.V.snpContent )
            
                let curSnp = AF.plugin {
                    var  "name"    currentSnippetNameV
                    var  "content" currentSnippetContentV
                }
            
                module SaveLoad =
                    let loadTextFile element  =
                        FileList.OfElement element
                        |> fun files ->
                            if files.Length > 0 then
                                let reader = TextFileReader()
                                reader.Onload <- fun e -> 
                                    try         e.Target?result
                                                |> Serializer.deserializeWithDefs SnippetSerialize.serModel
                                                |> Option.iter (fun m -> 
                                                    snippetsLM.Set m.snippets
                                                    collapsedV.Set m.collapsed
                                                    )
                                    with e ->   JS.Alert <| e.ToString()
                                                printfn "%A" e
                                files.[0] 
                                |> reader.ReadAsText
            
                    open WebSharper.Core.Resources
                    type SaveAsResources() =
                        inherit BaseResource(@"/EPFileX/FileSaver/FileSaver.js")
            
                    [< Require(typeof<SaveAsResources>) >]
                    [< Inline "saveAs(new Blob([$_txt], {type: 'text/plain;charset=utf-8'}), $_name)" >]
                    let saveAsJavaScript (_name:string) (_txt:string) = ()
            
                    let saveAs() = 
                        let name = "noname.snippets" 
                        (snippetsLM.Value, System.DateTime.Now, collapsedV.Value)
                        |> SnippetSerialize.getModel
                        |> fst SnippetSerialize.serModel
                        |> saveAsJavaScript name
                        //Snippets.updateGeneration()
            
                let selectorLensGuidId sel = Util.selectorLens (fun (v:Guid<SnippetId>) -> v.ToString()) (ParseO.parseGuidO >> Option.map UoM.Tag) sel
            
                module AF = AppFramework
            
                let monacoNew (var : Var<string> ) =
                    MonacoGenAdapter.newVar JSObject JSObject var
                    |> GenEditor.onRender(fun ged ->
                        ged.editorO
                        |> Option.iter (fun ed -> Monaco.Editor.SetModelLanguage(ed.GetModel(), "fsharp") )
                        Monaco.Editor.SetTheme("vs-dark")
                    )
            
                let monaco = { monacoNew (Lens (currentSnippetV.V.snpContent)) with 
                                annotations    = View.Const (seq[])
                                toolTip        = None
                                declaration    = None
                                autoCompletion = None
                            }
            
                let addSnippet () =
                    processHierW
                    |> View.Get (fun hier ->
                        let elems = snippetsLM.Value |> Seq.toArray // needs to be before snippetList.add()
                        let newS  = snippetList.add ()
                        let sid   = currentSnippetV.Value.snpId
                        match Dict.tryGetValue sid hier with
                        | None     -> ()
                        | Some hdt ->
                        let rec nextPos i =
                            match Array.tryItem (i + 1) elems with
                            | None     -> i
                            | Some snp ->
                            match Dict.tryGetValue snp.snpId hier with
                            | None     -> i
                            | Some shd ->
                            if   Seq.contains sid shd.path 
                            then nextPos (i + 1)
                            else i
                        let n = nextPos hdt.pos
                        Array.concat [| elems.[0..n] ; [| { newS with snpParentIdO = currentSnippetV.Value.snpParentIdO } |] ; elems.[n+1..] |]
                        |> snippetsLM.Set
                    )
            
                let deleteSnippet () =
                    processHierW
                    |> View.Get (fun hier ->
                        let sid  = currentSnippetV.Value.snpId
                        let pidO = currentSnippetV.Value.snpParentIdO
                        match Dict.tryGetValue sid hier with
                        | None     -> ()
                        | Some hdt ->
                        let elems = snippetsLM.Value |> Seq.toArray
                        let rec nextPos i =
                            match Array.tryItem i elems with
                            | None     -> ()
                            | Some snp ->
                            if   snp.snpParentIdO = Some sid then
                                elems.[i] <- { snp with snpParentIdO = pidO }
                                nextPos (i + 1)
                            else
                            match Dict.tryGetValue snp.snpId hier with
                            | None     -> ()
                            | Some shd ->
                            if  Seq.contains sid shd.path 
                            then nextPos (i + 1)
                            else ()
                        nextPos (hdt.pos + 1)
                        Array.concat [| elems.[0..hdt.pos-1] ; elems.[hdt.pos+1..] |]
                        |> snippetsLM.Set
                    )
            
                let indentIn () =
                    processHierW
                    |> View.Get (fun hier ->
                        hier 
                        |> Dict.tryGetValue currentSnippetV.Value.snpId
                        |> Option.iter(fun hdt ->
                            let pidO = currentSnippetV.Value.snpParentIdO
                            let rec newParentO i =
                                if i = 0 then None else
                                let snp = Seq.item (i - 1) snippetsLM.Value
                                if  Some snp.snpId  = pidO then None           else
                                if snp.snpParentIdO = pidO then Some snp.snpId else
                                newParentO (i - 1)
                            newParentO hdt.pos
                            |> Option.iter(fun pid -> (Lens (currentSnippetV.V.snpParentIdO)).Set (Some pid) )
                        )
                    )
            
                let indentOut () =
                    processHierW
                    |> View.Get (fun hier ->
                        let sid = currentSnippetV.Value.snpId
                        match Dict.tryGetValue sid hier, currentSnippetV.Value.snpParentIdO with
                        | Some hdt, Some pid ->
                            let newPidO = hdt.path |> Seq.tryItem (hdt.path.Length - 2)
                            if Some pid <> newPidO then
                                (Lens (currentSnippetV.V.snpParentIdO)).Set newPidO
                                let elems = snippetsLM.Value |> Seq.toArray
                                let rec nextPosO k i =
                                    match Array.tryItem (i + 1) elems with
                                    | None     -> None
                                    | Some snp ->
                                    match Dict.tryGetValue snp.snpId hier with
                                    | None     -> None
                                    | Some shd ->
                                    if   Seq.contains sid shd.path then nextPosO (i + 1) (i + 1)
                                    elif Seq.contains pid shd.path then nextPosO k       (i + 1)
                                    else Some(k, i)
                                match nextPosO hdt.pos hdt.pos with
                                | None      -> ()
                                | Some(a,b) ->
                                Array.concat[| elems.[0..hdt.pos-1] ; elems.[a+1..b] ; elems.[hdt.pos..a] ; elems.[b+1..] |]
                                |> snippetsLM.Set
                        |_->()
                    )
            
                AF.plugin {
                    name   "Snippets"
                    var    "searchFor"      searchFor
                    doc    "editor"        (lazy (div [] [ monaco |> GenEditor.generateDoc ]) )
                    merge  "snippets_"     (snippetList.PlugIn selectorLensGuidId  )
                    merge  "curSnp_"        curSnp
                    act    "LoadSnippets"  (fun () -> SaveLoad.loadTextFile (JS.Document.GetElementById "LoadSnippets")?firstElementChild?firstElementChild?firstElementChild?firstElementChild )
                    act    "SaveSnippets"             SaveLoad.saveAs
                    act    "IndentIn"       indentIn
                    act    "IndentOut"      indentOut
                    act    "AddSnippet"     addSnippet
                    act    "DeleteSnippet"  deleteSnippet
                }
                |> AF.addPlugIn2
            
                LayoutEngine.newLyt "lytTarget" """
            main horizontal 10-50-70 part1 part2
            
            part1 div "" 
            : h1 "" "Demo123 " message
            :: div "" "Message:"
            :: textarea message "height:200px;width:500px"
            
            part2 div "" lytTarget.Layout
            
            message Var "Hello"     
                """
                |> LayoutEngine.addLayout0
            
                LayoutEngine.newLyt "SnippetsLyt" """
                    split horizontal 0-50-100 AppFramework.AppFwkClient main
                    main vertical 0-25-100 list snippet
                    SearchFor   Doc InputLabel "" "Search" Snippets.searchFor
                    File        Doc InputFile  "id=LoadSnippets" "Open File" Snippets.LoadSnippets ""
                    list div "display: flex;flex-direction: column" File
                    : button "click=@{Snippets.AddSnippet}"    "Add New Snippet"
                    : button "click=@{Snippets.DeleteSnippet}" "Delete Snippet"
                    : button "click=@{Snippets.IndentIn}"      "Indent in"
                    : button "click=@{Snippets.IndentOut}"     "Indent out"
                    : div    "" SearchFor 
                    : div "overflow:auto;width:100%;max-width:100%" Snippets.snippets_list
                    snippet div "display: flex;flex-direction: column"
                    : div    "" Snippets.snippets_sel
                    : Doc    InputLabel "" "Name:" Snippets.curSnp_name
                    : div "height:100%;class=relative" Snippets.editor                
                """  ///// THERE IS a BUG HERE: if THERE IS NO SPACE after SearchFor then it just shows: SearchFor as if it were a text
                |> LayoutEngine.addLayout0
            
                LayoutEngine.newLyt "lytDemo" """
            SetTarget Action AppFramework.SetVar     "lytTarget.Layout"         "@{target}" 
            SetMain2  Action AppFramework.SetVar     "AppFramework.mainDocV"    "lytDemo.main2"
            SetMain   Action AppFramework.SetVar     "AppFramework.mainDocV"    "lytDemo.main"
            
            main2 vertical 0-50-100 Left2 lytTarget.main            
            Left2 vertical 0-25-100 list snippet
            gotoMain  button "click=@{SetMain};width:16px" "<<"
            
            main vertical 0-50-100 Left lytTarget.main
            Left div "display:flex;flex-direction:column" gotoMain2 snippet
            gotoMain2 button "click=@{SetMain2};width:16px" ">>"
            
            list div "display: flex;flex-direction: column" gotoMain File
            : div    "margin:5px" SearchFor 
            : Concat buttons
            : div "overflow:auto;width:100%;max-width:calc(100% - 10px)" Snippets.snippets_list
            : ul "margin:3px"
            :: button "click=@{Snippets.AddSnippet}   ;title=Add New Snippet" "+"
            :: button "margin-left:20px;click=@{Snippets.DeleteSnippet};title=Delete  Snippet" "x"
            
            snippet div "display: flex;flex-direction: column;flex:1" Trigger
            : button "click=@{SetTarget}" "Apply"
            : div    "click=@{SetTarget}" Snippets.snippets_sel
            : Doc    InputLabel "" "Name:" Snippets.curSnp_name
            : div "height:100%;class=relative;flex:1" Snippets.editor            
            
            buttons ul ""
            : div "margin:3px"
            :: button "click=@{Snippets.IndentOut};title=indent out"     "<--"
            :: button "click=@{Snippets.IndentIn};title=indent in"       "--> "
            
            SearchFor   Doc InputLabel "" "Search" Snippets.searchFor
            
            File span "class=input-group;margin:5px;id=LoadSnippets"
            : div "class=input-group-btn"
            :: label "class=btn btn-info" "Load File"
            ::: div ""
            :::: input "class=form-control;type=file;display: none;change=@{Snippets.LoadSnippets}" 
            :: label "class=btn btn-primary;click=@{Snippets.SaveSnippets}" "Save File"
            
            Trigger   Doc    AppFramework.TrigAction Snippets.snippets_sel lytDemo.SetTarget
            target    View "n => n.includes('main ')?n:'main Contact "" ""'" Snippets.curSnp_content
                """
                |> LayoutEngine.addLayout0
            
                [< SPAEntryPoint >]
                let main() =
                    do (StartAppFramework.startWithHtmlD 
                        |> Depend.resolver [
                            "AppFrameworkTemplate.html", AppFrameworkTemplate.html + SnippetTemplates.html
                        ]) ()
            
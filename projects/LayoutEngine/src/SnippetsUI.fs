#nowarn "3242"
#nowarn "42"
////-d:DLL -d:FSharpStation1584484416768 -d:WEBSHARPER
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
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/projects/LayoutEngine/bin/LayoutEngine.dll"
//#nowarn "3242"
//#nowarn "42"
/// Root namespace for all code
//#define FSharpStation1584484416768
#if INTERACTIVE
module FsRoot   =
#else
#if DLL
namespace FsRootDll
#else
namespace FsRoot
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
                    [< Inline "$x" >] static member inline Tag<  [<Measure>]'m                 > (x : bool               ) : bool<          'm > = Unsafe.cast x
                    [< Inline "$x" >] static member inline Tag<  [<Measure>]'m                 > (x : int                ) : int<           'm > = Unsafe.cast x
                    [< Inline "$x" >] static member inline Tag<  [<Measure>]'m                 > (x : int64              ) : int64<         'm > = Unsafe.cast x
                    [< Inline "$x" >] static member inline Tag<  [<Measure>]'m                 > (x : uint64             ) : uint64<        'm > = Unsafe.cast x
                    [< Inline "$x" >] static member inline Tag<  [<Measure>]'m                 > (x : float              ) : float<         'm > = Unsafe.cast x
                    [< Inline "$x" >] static member inline Tag<  [<Measure>]'m                 > (x : decimal            ) : decimal<       'm > = Unsafe.cast x
                    [< Inline "$x" >] static member inline Tag<  [<Measure>]'m                 > (x : Guid               ) : Guid<          'm > = Unsafe.cast x
                    [< Inline "$x" >] static member inline Tag<  [<Measure>]'m                 > (x : string             ) : string<        'm > = Unsafe.cast x
                    [< Inline "$x" >] static member inline Tag<  [<Measure>]'m                 > (x : TimeSpan           ) : TimeSpan<      'm > = Unsafe.cast x
                    [< Inline "$x" >] static member inline Tag<  [<Measure>]'m                 > (x : DateTime           ) : DateTime<      'm > = Unsafe.cast x
                    [< Inline "$x" >] static member inline Tag<  [<Measure>]'m                 > (x : DateTimeOffset     ) : DateTimeOffset<'m > = Unsafe.cast x
                    [< Inline "$x" >] static member inline Untag<[<Measure>]'m                 > (x : bool<          'm >) : bool                = Unsafe.cast x
                    [< Inline "$x" >] static member inline Untag<[<Measure>]'m                 > (x : int<           'm >) : int                 = Unsafe.cast x
                    [< Inline "$x" >] static member inline Untag<[<Measure>]'m                 > (x : int64<         'm >) : int64               = Unsafe.cast x
                    [< Inline "$x" >] static member inline Untag<[<Measure>]'m                 > (x : uint64<        'm >) : uint64              = Unsafe.cast x
                    [< Inline "$x" >] static member inline Untag<[<Measure>]'m                 > (x : float<         'm >) : float               = Unsafe.cast x
                    [< Inline "$x" >] static member inline Untag<[<Measure>]'m                 > (x : decimal<       'm >) : decimal             = Unsafe.cast x
                    [< Inline "$x" >] static member inline Untag<[<Measure>]'m                 > (x : Guid<          'm >) : Guid                = Unsafe.cast x
                    [< Inline "$x" >] static member inline Untag<[<Measure>]'m                 > (x : string<        'm >) : string              = Unsafe.cast x
                    [< Inline "$x" >] static member inline Untag<[<Measure>]'m                 > (x : TimeSpan<      'm >) : TimeSpan            = Unsafe.cast x
                    [< Inline "$x" >] static member inline Untag<[<Measure>]'m                 > (x : DateTime<      'm >) : DateTime            = Unsafe.cast x
                    [< Inline "$x" >] static member inline Untag<[<Measure>]'m                 > (x : DateTimeOffset<'m >) : DateTimeOffset      = Unsafe.cast x
                    [< Inline "$x" >] static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : bool<          'm1>) : bool<          'm2> = Unsafe.cast x
                    [< Inline "$x" >] static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : int<           'm1>) : int<           'm2> = Unsafe.cast x
                    [< Inline "$x" >] static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : int64<         'm1>) : int64<         'm2> = Unsafe.cast x
                    [< Inline "$x" >] static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : uint64<        'm1>) : uint64<        'm2> = Unsafe.cast x
                    [< Inline "$x" >] static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : float<         'm1>) : float<         'm2> = Unsafe.cast x
                    [< Inline "$x" >] static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : decimal<       'm1>) : decimal<       'm2> = Unsafe.cast x
                    [< Inline "$x" >] static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : Guid<          'm1>) : Guid<          'm2> = Unsafe.cast x
                    [< Inline "$x" >] static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : string<        'm1>) : string<        'm2> = Unsafe.cast x
                    [< Inline "$x" >] static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : TimeSpan<      'm1>) : TimeSpan<      'm2> = Unsafe.cast x
                    [< Inline "$x" >] static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : DateTime<      'm1>) : DateTime<      'm2> = Unsafe.cast x
                    [< Inline "$x" >] static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : DateTimeOffset<'m1>) : DateTimeOffset<'m2> = Unsafe.cast x
            
            (*
                [<Measure>] type m
                [<Measure>] type n
            
                let x = UoM.tag<m> "string"
                let y = UoM.cast<m,n> x
                let z = UoM.untag y
            *)
            
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
            
            [< Inline """(!$v)""">]
            let isUndefined v = v.GetType() = v.GetType()
                
            
            module Serializer =
                open Serializer
                open WebSharper.JavaScript
            
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
            
            
            //#r "D:\Abe\CIPHERWorkspace\FSharpStation/projects/LayoutEngine/bin/LayoutEngine.dll"
            //#define DLL
            module Util =
                open Html
            
                let disabled disW = attr.disabledDynPred (V "") disW
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
            
                let selectorLens toStr ofStrO = mapVarO toStr ofStrO >> lensStrO
            
                let selectorLensInt    sel = selectorLens (fun (v          ) -> v   .ToString()) (ParseO.parseIntO                      ) sel
                let selectorLensGuid   sel = selectorLens (fun (v          ) -> v   .ToString()) (ParseO.parseGuidO                     ) sel
                //let selectorLensGuidId sel = selectorLens (fun (v:GuidId<_>) -> v.Id.ToString()) (ParseO.parseGuidO >> Option.map GuidId) sel
            
                let unselectorV<'K> : Var<'K option> = Var.Make (View.Const None) ignore
            
                //let wrapUI elem f = (fun a b -> f a b >> Seq.singleton >> elem [] )
                let simpleButton txt f = Doc.Button txt [] (f >> ignore)
                let newButton   f = simpleButton "New" f
                let orderedList l = ol [] [ l ]
            
            
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
                module AF    = FsRootDll.LibraryJS.AppFramework
                module LE    = FsRootDll.LibraryJS.LayoutEngine
                module LM    = FsRootDll.LibraryJS.LM
                module NewLY = FsRootDll.LibraryJS.NewLY
                
                open Library.UoM
                open WebSharper.JavaScript
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
            
                let currentSnippetV           = snippetList.CurrentV.Lens id (fun _ -> id)
                let currentSnippetNameV       = Lens currentSnippetV.V.snpName
                let currentSnippetContentV    = Lens currentSnippetV.V.snpContent
                let currentSnippetPropsV      = let propsV = Lens currentSnippetV.V.snpProperties
                                                Var.Make propsV.View (fun v -> if v <> propsV.Value then propsV.Set v)
                let propertyV  name           = 
                    currentSnippetPropsV.Lens 
                        (Seq.tryFind(fst >> (=) name ) >> Option.map snd >> Option.defaultValue "")
                        (fun ps ->   function
                                | "" ->     ps |> Array.filter (fst >> (<>) name)
                                | v  -> if  ps |> Seq.map fst |> Seq.contains name then
                                            ps |> Array.map (fun (n,o) -> n, if n = name then v else o)
                                        else Array.append ps [| name, v |]
                        )
            
                let curSnp = AF.plugin {
                    plgVar  "name"          currentSnippetNameV
                    plgVar  "content"       currentSnippetContentV
                    plgVar  "explanation"  (propertyV "Explanation")
                }
            
                module SaveLoad =
                    open WebSharper.JavaScript
            
                    let updateSnippets snps =
                        try         snps
                                    |> Serializer.deserializeWithDefs SnippetSerialize.serModel
                                    |> Option.iter (fun m -> 
                                        snippetsLM.Set m.snippets
                                        collapsedV.Set m.collapsed
                                        
                                    )
                        with e ->   JS.Alert <| e.ToString()
                                    printfn "%A" e
            
                    let loadURL (url:string) = 
                        async {
                            let! resp     = JavaScript.JS.Fetch url |> Promise.AsAsync
                            let! snippets = resp.Text()             |> Promise.AsAsync
                            updateSnippets snippets 
                        } |> Async.Start
            
                    let loadTextFile element  =
                        FileList.OfElement element
                        |> fun files ->
                            if files.Length > 0 then
                                let reader = TextFileReader()
                                reader.Onload <- fun e -> updateSnippets e.Target?result
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
            
            //    let monacoNew (var : Var<string> ) (langW: View<string>) (themeW: View<string>) =
            //        MonacoGenAdapter.newVar JSObject JSObject var
            //        |> GenEditor.onRender(fun ged ->
            //            ged.editorO
            //            |> Option.iter (fun ed -> 
            //                langW 
            //                |> View.Sink (fun lang -> Monaco.Editor.SetModelLanguage(ed.GetModel(), lang) ) 
            //            )
            //            themeW |> View.Sink Monaco.Editor.SetTheme
            //        )
            //
                //let monaco = { monacoNew (Lens (currentSnippetV.V.snpContent)) with 
                //                annotations    = View.Const (seq[])
                //                toolTip        = None
                //                declaration    = None
                //                autoCompletion = None
                //            }
            
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
            
                let prevSnpW =
                    V(
                        let cid = currentSnippetV.V.snpId
                        snippetsLM.View.V
                        |> Seq.indexed
                        |> Seq.tryFind (fun (i, snp) -> snp.snpId = cid)
                        |> Option.map fst
                        |> Option.defaultValue 0
                        |> function 0 -> 0 | i -> i - 1
                        |> swap Seq.tryItem snippetsLM.View.V
                        //|> Option.map (fun v -> v.snpId.ToString() )
                        //|> Option.defaultValue ""
                    )
            
                let nextSnpW =
                    V(
                        let cid = currentSnippetV.V.snpId
                        snippetsLM.View.V
                        |> Seq.indexed
                        |> Seq.tryFind (fun (i, snp) -> snp.snpId = cid)
                        |> Option.map fst
                        |> Option.defaultValue 0
                        |> function i when i + 1 >= Seq.length snippetsLM.View.V -> i | i -> i + 1
                        |> swap Seq.tryItem snippetsLM.View.V
                        //|> Option.map (fun v -> v.snpId.ToString() )
                        //|> Option.defaultValue ""
                    )
            
                let prevSelW = V( prevSnpW.V |> Option.map (fun v -> v.snpId.ToString() ) |> Option.defaultValue "" )
                let nextSelW = V( nextSnpW.V |> Option.map (fun v -> v.snpId.ToString() ) |> Option.defaultValue "" )
            
                let prevTxtW = V( prevSnpW.V |> Option.map (fun v -> v.snpName          ) |> Option.defaultValue "" )
                let nextTxtW = V( nextSnpW.V |> Option.map (fun v -> v.snpName          ) |> Option.defaultValue "" )
            
                let parseW =
                    currentSnippetContentV.View
                    |> View.Map (
                        LE.parseEntries (AF.PlugInName "lytTarget")
                        >> Seq.choose (function Error msg -> Some msg |_-> None)
                        >> String.concat "\n"
                    )
            
                //let target2 = LE.newLyt (AF.PlugInName "lytTarget2") ""
                //
                //if IsClient then NewLY.addLayout target2
            //
                //let parseNewLY () = currentSnippetContentV.View |> View.Get target2.lytDefinition.Set
            
                let plugInAdded =
                    AF.plugin {
                        plgName   "Snippets"
                        plgVar    "searchFor"      searchFor
                        plgView   "parseOut"       parseW
                        plgView   "prevSel"        prevSelW
                        plgView   "nextSel"        nextSelW
                        plgView   "prevTxt"        prevTxtW
                        plgView   "nextTxt"        nextTxtW
                        plgMerge  "snippets_"     (snippetList.PlugIn (ParseO.parseGuidO >> Option.map UoM.Tag) (fun (v:Guid<SnippetId>) -> v.ToString())   )
                        plgMerge  "curSnp_"        curSnp
                        plgAct    "LoadSnippets"  (fun () -> SaveLoad.loadTextFile (JS.Document.GetElementById "LoadSnippets")?firstElementChild?firstElementChild?firstElementChild?firstElementChild )
                        plgAct    "SaveSnippets"             SaveLoad.saveAs
                        plgAct    "IndentIn"       indentIn
                        plgAct    "IndentOut"      indentOut
                        plgAct    "AddSnippet"     addSnippet
                        plgAct    "DeleteSnippet"  deleteSnippet
                        //plgAct    "ParseNewLY"     parseNewLY
                    }
                    |> AF.addPlugIn
            
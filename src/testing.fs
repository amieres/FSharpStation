#nowarn "3242"
////-d:FSharpStation1592212925139 -d:TEE -d:WEBSHARPER
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
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Data\lib\net461\WebSharper.Data.dll"
//#nowarn "3242"
/// Root namespace for all code
//#define FSharpStation1592212925139
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
                
    
        //#define WEBSHARPER
        
        //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
        
        [< JavaScriptExport >]
        module TestingJS =
        
        
            //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
            //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
            //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Data\lib\net461\WebSharper.Data.dll"
            
            open WebSharper
            open WebSharper.JavaScript
            open FSharp.Data
            (*
            // ------------------------------------------------------------------------------------------------
            // Domain that users see
            // ------------------------------------------------------------------------------------------------
              
            type Color =
              | RGB of int * int * int
              | HTML of string
            
            type AlphaColor = float * Color 
            type Width = Pixels of int
            type GradientStop = float * AlphaColor
            
            type FillStyle =
              | Solid of AlphaColor
              | LinearGradient of seq<GradientStop>
            
            type Number =
              | Integer of int
              | Percentage of float
            
            type HorizontalAlign = Start | Center | End
            type VerticalAlign = Baseline | Middle | Hanging
            
            type continuous<[<Measure>] 'u> = CO of float<'u> 
            type categorical<[<Measure>] 'u> = CA of string
            
            type Value<[<Measure>] 'u> = 
              | CAR of categorical<'u> * float
              | COV of continuous<'u>
            
            type Scale<[<Measure>] 'v> =
              | Continuous of continuous<'v> * continuous<'v>
              | Categorical of categorical<'v>[]
            
            type Style = 
              { StrokeColor : AlphaColor
                StrokeWidth : Width
                StrokeDashArray : seq<Number>
                Fill : FillStyle 
                Animation : option<int * string * (Style -> Style)>
                Font : string
                Cursor : string
                FormatAxisXLabel : Scale<1> -> Value<1> -> string
                FormatAxisYLabel : Scale<1> -> Value<1> -> string }
            
            type Orientation = 
              | Vertical
              | Horizontal
            
            type Shape<[<Measure>] 'vx, [<Measure>] 'vy> = 
              | Style of (Style -> Style) * Shape<'vx, 'vy>
              | Text of Value<'vx> * Value<'vy> * VerticalAlign * HorizontalAlign * float * string
              | AutoScale of bool * bool * Shape<'vx, 'vy>
              | InnerScale of option<continuous<'vx> * continuous<'vx>> * option<continuous<'vy> * continuous<'vy>> * Shape<'vx, 'vy>
              | OuterScale of option<Scale<'vx>> * option<Scale<'vy>> * Shape<'vx, 'vy>
              | Line of seq<Value<'vx> * Value<'vy>>
              | Bubble of Value<'vx> * Value<'vy> * float * float
              | Shape of seq<Value<'vx> * Value<'vy>>
              | Stack of Orientation * seq<Shape<'vx, 'vy>>
              | Layered of seq<Shape<'vx, 'vy>>
              | Axes of bool * bool * bool * bool * Shape<'vx, 'vy>
              | Padding of (float * float * float * float) * Shape<'vx, 'vy>
              | Offset of (float * float) * Shape<'vx, 'vy>
            
            // ------------------------------------------------------------------------------------------------
            // SVG stuff
            // ------------------------------------------------------------------------------------------------
            
            module Svg =   
            
              type StringBuilder() = 
                let mutable strs = [] 
                member x.Append(s) = strs <- s::strs
                override x.ToString() = String.concat "" (List.rev strs)
            
              type PathSegment = 
                | MoveTo of (float * float)
                | LineTo of (float * float)
            
              type SvgStyle = string
              
              type Svg =
                | Path of PathSegment[] * SvgStyle
                | Ellipse of (float * float) * (float * float) * SvgStyle
                | Rect of (float * float) * (float * float) * SvgStyle
                | Text of (float * float) * string * float * SvgStyle 
                | Combine of Svg[]
                | Empty
            
              let rec mapSvg f = function
                | Combine svgs -> Combine(Array.map (mapSvg f) svgs)
                | svg -> f svg
            
              let formatPath path = 
                let sb = StringBuilder()
                for ps in path do
                  match ps with
                  | MoveTo(x, y) -> sb.Append("M" + string x + " " + string y + " ")
                  | LineTo(x, y) -> sb.Append("L" + string x + " " + string y + " ")
                sb.ToString()
            
              //type RenderingContext = 
              //  { Definitions : ResizeArray<DomNode> }
            
              let rec renderSvg ctx svg = seq { 
                match svg with
                | Empty -> ()
                | Text((x,y), t, rotation, style) ->
                    let attrs = 
                      [ yield WebSharper.UI.Html.SvgAttributes.style style 
                        if rotation = 0.0 then
                          yield WebSharper.UI.Html.SvgAttributes.x (string x)
                          yield WebSharper.UI.Html.SvgAttributes.y (string y)
                        else
                          yield WebSharper.UI.Html.SvgAttributes.x "0"
                          yield WebSharper.UI.Html.SvgAttributes.y "0"
                          yield WebSharper.UI.Html.SvgAttributes.transform (sprintf "translate(%f,%f) rotate(%f)" x y rotation) ]
                    yield WebSharper.UI.Html.SvgElements.text attrs [ WebSharper.UI.Html.text t ]
            
                | Combine ss ->
                    for s in ss do yield! renderSvg ctx s
            
                | Ellipse((cx, cy),(rx, ry), style) ->
                    let attrs = 
                      [ WebSharper.UI.Html.SvgAttributes.cx <| string cx; WebSharper.UI.Html.SvgAttributes.cy <| string cy;
                        WebSharper.UI.Html.SvgAttributes.rx <| string rx; WebSharper.UI.Html.SvgAttributes.ry <| string ry; WebSharper.UI.Html.SvgAttributes.style style ]
                    yield WebSharper.UI.Html.SvgElements.ellipse attrs []
            
                | Rect((x1, y1),(x2, y2), style) ->
                    let l, t = min x1 x2, min y1 y2
                    let w, h = abs (x1 - x2), abs (y1 - y2)
                    let attrs = 
                      [ WebSharper.UI.Html.SvgAttributes.x <| string l; WebSharper.UI.Html.SvgAttributes.y <| string t; WebSharper.UI.Html.SvgAttributes.width <| string w; 
                        WebSharper.UI.Html.SvgAttributes.height <| string h; WebSharper.UI.Html.SvgAttributes.style  style ]
                    yield WebSharper.UI.Html.SvgElements.rect attrs []
            
                | Path(p, style) ->
                    let attrs = [ WebSharper.UI.Html.SvgAttributes.d <| formatPath p; WebSharper.UI.Html.SvgAttributes.style style ]
                    yield WebSharper.UI.Html.SvgElements.path attrs  [] }
            
              let formatColor = function
                | RGB(r,g,b) -> sprintf "rgb(%d, %d, %d)" r g b
                | HTML(clr) -> clr
            
              let formatNumber = function
                | Integer n -> string n
                | Percentage p -> string p + "%"
            
              let rec formatStyle (defs:ResizeArray<_>) style = 
                let style, anim =
                  match style.Animation with 
                  | Some (ms, ease, anim) ->
                      let id = "anim_" + System.Guid.NewGuid().ToString().Replace("-", "")
                      let fromstyle = formatStyle defs { style with Animation = None }
                      let tostyle = formatStyle defs { anim style with Animation = None }
                      WebSharper.UI.Html.Tags.style [] [ WebSharper.UI.Html.text (sprintf "@keyframes %s { from { %s } to { %s } }" id fromstyle tostyle) ] |> defs.Add
                      anim style, sprintf "animation: %s %dms %s; " id ms ease
                  | None -> style, ""
            
                anim +
                ( String.concat "" [ for c in style.Cursor.Split(',') -> "cursor:" + c + ";" ] ) +
                ( "font:" + style.Font + ";" ) +
                ( let (so, clr) = style.StrokeColor 
                  let (Pixels sw) = style.StrokeWidth
                  sprintf "stroke-opacity:%f; stroke-width:%dpx; stroke:%s; " so sw (formatColor clr) ) +
                ( if Seq.isEmpty style.StrokeDashArray then "" 
                  else "stroke-dasharray:" + String.concat "," (Seq.map formatNumber style.StrokeDashArray) + ";" ) +
                ( match style.Fill with
                  | LinearGradient(points) ->
                      let id = "gradient_" + System.Guid.NewGuid().ToString().Replace("-", "")
                      WebSharper.UI.Html.SvgElements.lineargradient [ WebSharper.UI.Html.attr.id id] 
                        [ for pt, (o, clr) in points ->
                            WebSharper.UI.Html.SvgElements.stop [WebSharper.UI.Html.SvgAttributes.offset <| string pt + "%"; WebSharper.UI.Html.SvgAttributes.stopColor <| formatColor clr; WebSharper.UI.Html.SvgAttributes.stopOpacity <| string o ] [] ]
                      |> defs.Add
                      sprintf "fill:url(#%s)" id
                  | Solid(fo, clr) ->
                      sprintf "fill-opacity:%f; fill:%s; " fo (formatColor clr) )
            
            // ------------------------------------------------------------------------------------------------
            // Calculating scales
            // ------------------------------------------------------------------------------------------------
            
            module Scales = 
              type ScaledShapeInner<[<Measure>] 'vx, [<Measure>] 'vy> = 
                | ScaledStyle of (Style -> Style) * ScaledShape<'vx, 'vy>
                | ScaledOuterScale of option<Scale<'vx>> * option<Scale<'vy>> * ScaledShape<'vx, 'vy>
                | ScaledText of Value<'vx> * Value<'vy> * VerticalAlign * HorizontalAlign * float * string    
                | ScaledLine of (Value<'vx> * Value<'vy>)[]
                | ScaledBubble of Value<'vx> * Value<'vy> * float * float
                | ScaledShape of (Value<'vx> * Value<'vy>)[]
                | ScaledLayered of ScaledShape<'vx, 'vy>[]
                | ScaledStack of Orientation * ScaledShape<'vx, 'vy>[]
                | ScaledPadding of (float * float * float * float) * ScaledShape<'vx, 'vy>
                | ScaledOffset of (float * float) * ScaledShape<'vx, 'vy>
            
              and ScaledShape<[<Measure>] 'vx, [<Measure>] 'vy> =
                Scaled of outer:(Scale<'vx> * Scale<'vy>) * inner:(Scale<'vx> * Scale<'vy>) * ScaledShapeInner<'vx, 'vy>
            
              let getExtremes = function
                | Continuous(l, h) -> COV l, COV h
                | Categorical(vals) ->  CAR(vals.[0], 0.0), CAR(vals.[vals.Length-1], 1.0)
            
              /// Given a range, return a new aligned range together with the magnitude  
              let calculateMagnitudeAndRange (lo:float, hi:float) = 
                let magnitude = 10. ** round (log10 (hi - lo))
                let magnitude = magnitude / 2.
                magnitude, (floor (lo / magnitude) * magnitude, ceil (hi / magnitude) * magnitude)
            
              /// Get number of decimal points to show for the given range
              let decimalPoints range = 
                let magnitude, _ = calculateMagnitudeAndRange range
                max 0. (ceil (-(log10 magnitude)))
            
              /// Extend the given range to a nicely adjusted size
              let adjustRange range = snd (calculateMagnitudeAndRange range)
              let adjustRangeUnits (l:float<'u>,h:float<'u>) : float<'u> * float<'u> =
                let l, h = adjustRange (unbox l, unbox h) in unbox l, unbox h
            
              let toArray s = Array.ofSeq s // REVIEW: Hack to avoid Float64Array (which behaves oddly in Safari) see https://github.com/zloirock/core-js/issues/285
            
              /// Generate points for a grid. Count specifies how many points to generate
              /// (this is minimm - the result will be up to 5x more).
              let generateSteps count k (lo, hi) = 
                let magnitude, (nlo, nhi) = calculateMagnitudeAndRange (lo, hi)
                let dividers = [0.2; 0.5; 1.; 2.; 5.; 10.; 20.; 40.; 50.; 60.; 80.; 100.]
                let magnitudes = dividers |> Seq.map (fun d -> magnitude / d)
                let step = magnitudes |> Seq.filter (fun m -> (hi - lo) / m >= count) |> Seq.tryHead
                let step = defaultArg step (magnitude / 100.)
                seq { for v in nlo .. step * k .. nhi do
                        if v >= lo && v <= hi then yield v } |> toArray
            
              let generateAxisSteps s =
                match s with 
                | Continuous(CO l, CO h) ->
                    generateSteps 6. 1. (float l, float h) |> Array.map (fun f -> COV(CO (unbox f)))
                | Categorical vs -> [| for CA s in vs -> CAR(CA s, 0.5) |]
            
              let generateAxisLabels fmt (s:Scale<'v>) : (Value<'v> * string)[] =
                let sunit = unbox<Scale<1>> s
                match s with 
                | Continuous(CO l, CO h) ->
                    generateSteps 6. 2. (float l, float h) 
                    |> Array.map (fun f -> COV(CO (unbox f)), fmt sunit (COV(CO(unbox<float<1>> f))))
                | Categorical vs -> [| for v & CA s in vs -> CAR(CA s, 0.5), fmt sunit (CAR(CA s, 0.5)) |]
            
              let unionScales s1 s2 =
                match s1, s2 with
                | Continuous(l1, h1), Continuous(l2, h2) -> Continuous(min l1 l2, max h1 h2)
                | Categorical(v1), Categorical(v2) -> Categorical(Array.distinct (Array.append v1 v2))
                | _ -> 
                    failwith "Cannot union continuous with categorical"
            
              // Replace scales in all immediately nested things that will
              // share the same scale when combined via Layered
              // (recursively over Interacitve & Layered with Line as leaf)
            
              let rec replaceScales outer (Scaled(_, inner, shape) as scaled) =
                match shape with
                // Replace at the leafs
                | ScaledLine _ 
                | ScaledText _
                | ScaledBubble _
                | ScaledShape _ -> Scaled(outer, inner, shape)
                // Replace just top level scales
                | ScaledOuterScale _ -> Scaled(outer, inner, shape)
                // Propagate recursively
                | ScaledOffset(d, shape) -> Scaled(outer, inner, ScaledOffset(d, replaceScales outer shape))
                | ScaledStyle(f, shape) -> Scaled(outer, inner, ScaledStyle(f, replaceScales outer shape))
                | ScaledPadding(pad, shape) -> Scaled(outer, inner, ScaledPadding(pad, replaceScales outer shape))
                | ScaledLayered(shapes) -> Scaled(outer, inner, ScaledLayered(Array.map (replaceScales outer) shapes))
                | ScaledStack(orient, shapes) -> Scaled(outer, inner, ScaledStack(orient, Array.map (replaceScales outer) shapes))
            
              // From the leafs to the root, calculate the scales of
              // everything (composing sales of leafs to get scale of root)
            
              let calculateShapeScale vals = 
                let scales =
                  vals |> Array.fold (fun state value ->
                    match state, value with 
                    | Choice1Of3(), COV(CO v) -> Choice2Of3([v])
                    | Choice2Of3(vs), COV(CO v) -> Choice2Of3(v::vs)
                    | Choice1Of3(), CAR(CA x, _) -> Choice3Of3([x])
                    | Choice3Of3(xs), CAR(CA x, _) -> Choice3Of3(x::xs)
                    | _ -> failwith "Values with mismatching scales") (Choice1Of3())
                match scales with
                | Choice1Of3() -> failwith "No values for calculating a scale"
                | Choice2Of3(vs) -> Continuous (CO (List.min vs), CO (List.max vs))
                | Choice3Of3(xs) -> Categorical (Array.distinct [| for x in List.rev xs -> CA x |])
            
              let calculateShapeScales points = 
                let xs = points |> Array.map fst 
                let ys = points |> Array.map snd
                calculateShapeScale xs, calculateShapeScale ys
            
              // Always returns objects with the same inner and outer scales
              // but outer scales can be replaced later by replaceScales
              let rec calculateScales<[<Measure>] 'ux, [<Measure>] 'uy> style (shape:Shape<'ux, 'uy>) = 
                let calculateScalesStyle = calculateScales 
                let calculateScales = calculateScales style
                match shape with
                | OuterScale(sx, sy, shape) ->
                    let (Scaled((osx, osy), inner, _)) as scaled = calculateScales shape
                    let scales = defaultArg sx osx, defaultArg sy osy
                    Scaled(scales, inner, ScaledOuterScale(sx, sy, scaled))
            
                | InnerScale(sx, sy, shape) ->
                    let (Scaled((asx, asy), _, shape)) = calculateScales shape
                    let scales = 
                      (match sx with Some sx -> Continuous(sx) | _ -> asx), 
                      (match sy with Some sy -> Continuous(sy) | _ -> asy) 
                    Scaled(scales, scales, shape) |> replaceScales scales
            
                | AutoScale(ax, ay, shape) ->
                    let (Scaled((asx, asy), _, shape)) = calculateScales shape
                    let autoScale = function
                      | Continuous(CO l, CO h) -> let l, h = adjustRangeUnits (l, h) in Continuous(CO l, CO h)
                      | scale -> scale
                    let scales = 
                      ( if ax then autoScale asx else asx ),
                      ( if ay then autoScale asy else asy )
                    Scaled(scales, scales, shape) |> replaceScales scales    
            
                | Offset(offs, shape) ->
                    let (Scaled(scales, _, shape)) = calculateScales shape
                    Scaled(scales, scales, ScaledOffset(offs, Scaled(scales, scales, shape)))
            
                | Style(f, shape) ->
                    let (Scaled(scales, _, shape)) = calculateScalesStyle (f style) shape
                    Scaled(scales, scales, ScaledStyle(f, Scaled(scales, scales, shape)))
            
                | Padding(pads, shape) ->
                    let (Scaled(scales, _, shape)) = calculateScales shape
                    Scaled(scales, scales, ScaledPadding(pads, Scaled(scales, scales, shape)))
            
                | Bubble(x, y, rx, ry) ->
                    let makeSingletonScale = function COV(v) -> Continuous(v, v) | CAR(v, _) -> Categorical [| v |]
                    let scales = makeSingletonScale x, makeSingletonScale y
                    Scaled(scales, scales, ScaledBubble(x, y, rx, ry))
            
                | Shape.Text(x, y, va, ha, r, t) ->
                    let makeSingletonScale = function COV(v) -> Continuous(v, v) | CAR(v, _) -> Categorical [| v |]
                    let scales = makeSingletonScale x, makeSingletonScale y
                    Scaled(scales, scales, ScaledText(x, y, va, ha, r, t))    
            
                | Line line -> 
                    let line = Seq.toArray line 
                    let scales = calculateShapeScales line
                    Scaled(scales, scales, ScaledLine(line))
            
            (*
                | Column(x, y) ->
                    let scales = Categorical [| x |], Continuous(CO 0.0<_>, y)
                    Scaled(scales, scales, ScaledColumn(x, y))
            
                | Bar(x, y) ->
                    let scales = Continuous(CO 0.0<_>, x), Categorical [| y |]
                    Scaled(scales, scales, ScaledBar(x, y))
            
                | Area area -> 
                    let area = Seq.toArray area
                    let scales = calculateLineOrAreaScales area
                    Scaled(scales, scales, ScaledArea(area))
            *)
                | Shape points -> 
                    let points = Seq.toArray points
                    let scales = calculateShapeScales points
                    Scaled(scales, scales, ScaledShape(points))
                
                | Axes(showTop, showRight, showBottom, showLeft, shape) ->
                    let (Scaled(origScales & (sx, sy), _, _)) = calculateScales shape 
                    let (lx, hx), (ly, hy) = getExtremes sx, getExtremes sy
                    
                    let LineStyle clr alpha width shape = 
                      Style((fun s -> { s with Fill = Solid(1.0, HTML "transparent"); StrokeWidth = Pixels width; StrokeColor=alpha, HTML clr }), shape)
                    let FontStyle style shape = 
                      Style((fun s -> { s with Font = style; Fill = Solid(1.0, HTML "black"); StrokeColor = 0.0, HTML "transparent" }), shape)
            
                    let shape = 
                      Layered [ 
                        for x in generateAxisSteps sx do
                          yield Line [x,ly; x,hy] |> LineStyle "#e4e4e4" 1.0 1
                        for y in generateAxisSteps sy do
                          yield Line [lx,y; hx,y] |> LineStyle "#e4e4e4" 1.0 1 
                        if showTop then
                          yield Line [lx,hy; hx,hy] |> LineStyle "black" 1.0 2
                          for x, l in generateAxisLabels style.FormatAxisXLabel sx do
                            yield Offset((0., -10.), Text(x, hy, VerticalAlign.Baseline, HorizontalAlign.Center, 0.0, l)) |> FontStyle "9pt sans-serif"
                        if showRight then
                          yield Line [hx,hy; hx,ly] |> LineStyle "black" 1.0 2
                          for y, l in generateAxisLabels style.FormatAxisYLabel sy do
                            yield Offset((10., 0.), Text(hx, y, VerticalAlign.Middle, HorizontalAlign.Start, 0.0, l)) |> FontStyle "9pt sans-serif"
                        if showBottom then
                          yield Line [lx,ly; hx,ly] |> LineStyle "black" 1.0 2
                          for x, l in generateAxisLabels style.FormatAxisXLabel sx do
                            yield Offset((0., 10.), Text(x, ly, VerticalAlign.Hanging, HorizontalAlign.Center, 0.0, l)) |> FontStyle "9pt sans-serif"
                        if showLeft then
                          yield Line [lx,hy; lx,ly] |> LineStyle "black" 1.0 2
                          for y, l in generateAxisLabels style.FormatAxisYLabel sy do
                            yield Offset((-10., 0.), Text(lx, y, VerticalAlign.Middle, HorizontalAlign.End, 0.0, l)) |> FontStyle "9pt sans-serif"
                        yield shape ] |> calculateScales
            
                    match shape with 
                    | Scaled(_, _, ScaledLayered(shapes)) ->
                        let padding = 
                          (if showTop then 30. else 0.), (if showRight then 50. else 0.),
                          (if showBottom then 30. else 0.), (if showLeft then 50. else 0.) 
                        Scaled(origScales, origScales, 
                          ScaledPadding(padding, 
                            Scaled(origScales, origScales, 
                              ScaledLayered (Array.map (replaceScales origScales) shapes))))
                    | _ -> failwith "calculateScales: processing layered shape did not return layered shape"
                    
                | Stack(orient, shapes) ->
                    let shapes = shapes |> Array.ofSeq
                    let scaled = shapes |> Array.map calculateScales 
                    let sxs = scaled |> Array.map (fun (Scaled((sx, _), _, _)) -> sx)
                    let sys = scaled |> Array.map (fun (Scaled((_, sy), _, _)) -> sy)
                    let scales = (Array.reduce unionScales sxs, Array.reduce unionScales sys)
                    match orient, scales with 
                    | Horizontal, (Continuous _, _) -> failwith "Horizontal stacking of continuous axes is not supported"
                    | Vertical, (_, Continuous _) -> failwith "Vertical stacking of continuous axes is not supported"
                    | _ -> ()
                    Scaled(scales, scales, ScaledStack(orient, scaled)) |> replaceScales scales 
            
                | Layered shapes ->
                    let shapes = shapes |> Array.ofSeq
                    let scaled = shapes |> Array.map calculateScales 
                    let sxs = scaled |> Array.map (fun (Scaled((sx, _), _, _)) -> sx)
                    let sys = scaled |> Array.map (fun (Scaled((_, sy), _, _)) -> sy)
                    let scales = (Array.reduce unionScales sxs, Array.reduce unionScales sys)
                    Scaled(scales, scales, ScaledLayered scaled) |> replaceScales scales 
            
            
            // ------------------------------------------------------------------------------------------------
            // Calculate projections
            // ------------------------------------------------------------------------------------------------
            
            module Projections = 
              open Scales
            
              type Projection<[<Measure>] 'vx, [<Measure>] 'vy, [<Measure>] 'ux, [<Measure>] 'uy> = 
                | Scale of (float<'ux> * float<'ux>) * (float<'uy> * float<'uy>)
                
                // given a projection that maps things to (0, 100), the floats
                // specify subrange of the target domain, so i.e. specifying (0.2, 0.8) would
                // result in all the vales being mapped to (20, 80)
                | Rescale of (float * float) * (float * float) * Projection<'vx, 'vy, 'ux, 'uy> 
            
                | Padding of
                    // padding from top, right, bottom, left 
                    padding:(float<'uy> * float<'ux> * float<'uy> * float<'ux>) * 
                    // points on the scales relative to which the padding is calculated
                    // (essentially the size of the content around which padding is)
                    extremes:(Value<'vx> * Value<'vx> * Value<'vy> * Value<'vy>) * 
                    Projection<'vx, 'vy, 'ux, 'uy>
            
              type ProjectedShapeInner<[<Measure>] 'vx, [<Measure>] 'vy> = 
                | ProjectedStyle of (Style -> Style) * ProjectedShape<'vx, 'vy>
                | ProjectedBubble of Value<'vx> * Value<'vy> * float * float
                | ProjectedText of Value<'vx> * Value<'vy> * VerticalAlign * HorizontalAlign * float * string    
                | ProjectedLine of (Value<'vx> * Value<'vy>)[]
                | ProjectedShape of (Value<'vx> * Value<'vy>)[]
                | ProjectedLayered of ProjectedShape<'vx, 'vy>[]
                | ProjectedStack of Orientation * ProjectedShape<'vx, 'vy>[]
                | ProjectedOffset of (float * float) * ProjectedShape<'vx, 'vy>
            
              /// Projection from values on the scales (specified) to pixels
              and ProjectedShape<[<Measure>] 'vx, [<Measure>] 'vy> =
                Projected of Projection<'vx, 'vy, 1, 1> * (Scale<'vx> * Scale<'vy>) * ProjectedShapeInner<'vx, 'vy>
            
              let scaleOne (tlv:float<_>, thv:float<_>) scale coord = 
                match scale, coord with
                | Categorical(vals), (CAR(CA v,f)) ->
                    let size = (thv - tlv) / float vals.Length
                    let i = vals |> Array.findIndex (fun (CA vv) -> v = vv)
                    let i = float i + f
                    CO(tlv + (i * size))
                | Continuous(CO slv, CO shv), (COV (CO v)) ->
                    CO((v - slv) / (shv - slv) * (thv - tlv) + tlv)
                | Categorical _, COV _ -> failwith "Cannot project continuous value on a categorical scale."
                | Continuous _, CAR _ -> failwith "Cannot project categorical value on a continuous scale."
            
              let rec project<[<Measure>] 'vx, [<Measure>] 'vy, [<Measure>] 'ux, [<Measure>] 'uy> 
                  (sx:Scale<'vx>) (sy:Scale<'vy>) point (projection:Projection<'vx, 'vy, 'ux, 'uy>) : continuous<'ux> * continuous<'uy> = 
                match projection, point with
                | Scale(tx, ty), (x, y) ->
                    scaleOne tx sx x, scaleOne ty sy y 
                
                | Rescale((rlx, rhx), (rly, rhy), proj), point ->
                    let (lx, hx), (ly, hy) = getExtremes sx, getExtremes sy
                    let (CO x1, CO y1), (CO x2, CO y2) = project sx sy (lx, ly) proj, project sx sy (hx, hy) proj
                    let lx, hx, ly, hy = min x1 x2, max x1 x2, min y1 y2, max y1 y2
            
                    let (CO x, CO y) = project sx sy point proj 
                    let nx = if lx = hx then x else lx + (hx - lx) * ((x - lx) / (hx - lx) * (rhx - rlx) + rlx)
                    let ny = if ly = hy then y else ly + (hy - ly) * ((y - ly) / (hy - ly) * (rhy - rly) + rly)
                    (CO nx, CO ny)
            
                | Padding((t,r,b,l),(lx,hx,ly,hy),projection), _ ->
                    //let (lx, hx), (ly, hy) = getExtremes sx, getExtremes sy
                    let (CO x1, CO y1) = project sx sy (lx, ly) projection
                    let (CO x2, CO y2) = project sx sy (hx, hy) projection
                    let lx, hx, ly, hy = min x1 x2, max x1 x2, min y1 y2, max y1 y2
            
                    let (CO x, CO y) = project sx sy point projection
            
                    // Assuming the result is in pixels...
                    let nx = if lx = hx then x else lx + l + (hx - lx - l - r) / (hx - lx) * (x - lx)
                    let ny = if ly = hy then y else ly + t + (hy - ly - t - b) / (hy - ly) * (y - ly)
                    (CO nx, CO ny)
                
            
              // inverse operation to scaleOne
              let scaleOneInv (tlv:float<'u>, thv:float<'u>) (scale:Scale<'v>) (coord:continuous<'u>) : Value<'v> =  
                match scale, coord with
                | Continuous(CO slv, CO shv), (CO v) ->
                    COV (CO((v - tlv) / (thv - tlv) * (shv - slv) + slv))
                | Categorical(cats), (CO v) ->
                    let size = (thv - tlv) / float cats.Length
                    let i = floor (v / size)
                    let f = (v / size) - i
                    let i = if size < 0.<_> then (float cats.Length) + i else i // Negative when thv < tlv
                    if int i < 0 || int i >= cats.Length then CAR(CA "<outside-of-range>", f)
                    else CAR(cats.[int i], f)
            
               // project:    scales<v> * point<v> * proj<v -> u> -> point<u>   // v = -1 .. 1     u = 0px .. 100px
               // projectInv: scales<v> * point<u> * proj<v -> u> -> point<v>
            
              let rec invertProj proj = 
                match proj with
                | Rescale(rx, ry, Padding(p, ex, proj)) -> Padding(p, ex, Rescale(rx, ry, proj))
                | Padding(p, ex, Rescale(rx, ry, proj)) -> Rescale(rx, ry, Padding(p, ex, proj))
                | _ -> proj
            
            
              let rec projectInv<[<Measure>] 'vx, [<Measure>] 'vy, [<Measure>] 'ux, [<Measure>] 'uy> 
                  ((sx, sy):Scale<'vx> * Scale<'vy>) (point:continuous<'ux> * continuous<'uy>) 
                  (projection:Projection<'vx, 'vy, 'ux, 'uy>) : Value<'vx> * Value<'vy> = 
                
                match projection, point with
                | Rescale((rlx, rhx), (rly, rhy), projection), (CO x, CO y) ->
                    let (lx, hx), (ly, hy) = getExtremes sx, getExtremes sy
                    let (CO x1, CO y1), (CO x2, CO y2) = project sx sy (lx, ly) projection, project sx sy (hx, hy) projection
                    let lx, hx, ly, hy = min x1 x2, max x1 x2, min y1 y2, max y1 y2
            
                    // Inverse of project
                    let (CO ox, CO oy) = point 
                    let nx = lx + ((ox - lx) / (hx - lx) - rlx) / (rhx - rlx) * (hx - lx)
                    let ny = ly + ((oy - ly) / (hy - ly) - rly) / (rhy - rly) * (hy - ly)
                    projectInv (sx, sy) (CO nx, CO ny) projection
            
                | Padding((t, r, b, l), (lx, hx, ly, hy), projection), (CO x, CO y) ->
                    let (CO x1, CO y1) = project sx sy (lx, ly) projection
                    let (CO x2, CO y2) = project sx sy (hx, hy) projection
                    let lx, hx, ly, hy = min x1 x2, max x1 x2, min y1 y2, max y1 y2
                    
                    // Imagine point is in 20px .. 60px, calculate equivalent point in 0px .. 100px (add padding)
                    let (CO ox, CO oy) = point 
                    //let nx = (ox - l) / (hx - lx - l - r) * (hx - lx)
                    //let ny = (oy - t) / (hy - ly - t - b) * (hy - ly)
                    let nx = (ox - lx - l) / (hx - lx - l - r) * (hx - lx) + lx
                    let ny = (oy - ly - t) / (hy - ly - t - b) * (hy - ly) + ly
                    projectInv (sx, sy) (CO nx, CO ny) projection
            
                | Scale(tx, ty), (x, y) ->
                    scaleOneInv tx sx x, scaleOneInv ty sy y 
            
            
              let rec calculateProjections<[<Measure>] 'ux, [<Measure>] 'uy> (shape:ScaledShape<'ux, 'uy>) projection = 
                match shape with
                | Scaled(scales, _, ScaledOffset(offs, shape)) ->
                    Projected(projection, scales, ProjectedOffset(offs, calculateProjections shape projection))
            
                | Scaled(scales, _, ScaledStyle(style, shape)) ->
                    Projected(projection, scales, ProjectedStyle(style, calculateProjections shape projection))
            
                | Scaled((sx, sy), _, ScaledOuterScale(osx, osy, shape)) ->
                    //let pinner = Projection
            
                    // projection + shape scales determines mapping from shape scales to pixel space
                    // get range of osx/osy within scales and transform projection so that it only maps on this subrange
                    let adaptProjection os s = 
                      match os with
                      | Some(o) ->
                          let ls, hs = getExtremes s
                          let ls', hs' = scaleOne (0.0, 1.0) s ls, scaleOne (0.0, 1.0) s hs
                          let lo, ho = getExtremes o
                          let (CO lo'), (CO ho') = scaleOne (0.0, 1.0) s lo, scaleOne (0.0, 1.0) s ho
                          (lo', ho')
                      | _ -> 
                          (0.0, 1.0)
            
                    let px = adaptProjection osx sx
                    let py = adaptProjection osy sy 
                    let projection = Rescale(px, py, projection)
            
                    let (Projected(pbody, scales, nested)) = calculateProjections shape projection
                    Projected(pbody, scales, nested)
            
                | Scaled(scales, _, ScaledLine line) -> 
                    Projected(projection, scales, ProjectedLine line)
            
                | Scaled(scales, _, ScaledText(x, y, va, ha, r, t)) -> 
                    Projected(projection, scales, ProjectedText(x, y, va, ha, r, t))
            
                | Scaled(scales, _, ScaledBubble(x, y, rx, ry)) -> 
                    Projected(projection, scales, ProjectedBubble(x, y, rx, ry))
            
                | Scaled(scales, _, ScaledShape points) -> 
                    Projected(projection, scales, ProjectedShape points)
            
                | Scaled(_, _, ScaledPadding((t,r,b,l), shape)) ->
                    let (lx, hx), (ly, hy) = 
                      let (Scaled(_, (sxinner, syinner), _)) = shape 
                      getExtremes sxinner, getExtremes syinner
                    let ppad = Padding((t, r, b, l), (lx, hx, ly, hy), projection)
                    calculateProjections shape ppad
            
                | Scaled(scales, _, ScaledStack(orient, shapes)) ->
                    Projected(projection, scales, ProjectedStack(orient, shapes |> Array.map (fun s -> calculateProjections s projection)))
                    
                | Scaled(scales, _, ScaledLayered shapes) ->
                    Projected(projection, scales, ProjectedLayered(shapes |> Array.map (fun s -> calculateProjections s projection)))
            
            // ------------------------------------------------------------------------------------------------
            // Drawing
            // ------------------------------------------------------------------------------------------------
            
            module Drawing = 
              open Svg
              open Scales
              open Projections
            
              type DrawingContext = 
                { Style : Style
                  Definitions : ResizeArray<DomNode> }
            
              let rec hideFill style = 
                { style with Fill = Solid(0.0, RGB(0, 0, 0)); Animation = match style.Animation with Some(n,e,f) -> Some(n,e,f >> hideFill) | _ -> None }
              let rec hideStroke style = 
                { style with StrokeColor = (0.0, snd style.StrokeColor); Animation = match style.Animation with Some(n,e,f) -> Some(n,e,f >> hideStroke) | _ -> None }
            
              let rec drawShape<[<Measure>] 'ux, [<Measure>] 'uy> ctx (shape:ProjectedShape<'ux, 'uy>) = 
                let (Projected(projection, (sx, sy), shape)) = shape
            
                let projectCont (x, y) = 
                  match project sx sy (x, y) projection with
                  | (CO x), (CO y) -> x, y
                let projectContCov (x, y) = projectCont (COV x, COV y)
            
                match shape, (sx, sy) with
                | ProjectedOffset((dx, dy), shape), _ ->
                    drawShape ctx shape
                    |> mapSvg (function 
                        | Text((x, y), t, r, s) -> Text((x + dx, y + dy), t, r, s)
                        | Path(seg, s) -> Path(Array.map (function 
                            MoveTo(x, y) -> MoveTo(x + dx, y + dy) | LineTo(x, y) -> LineTo(x + dx, y + dy)) seg, s)
                        | s -> s)
            
                | ProjectedStyle(sf, shape), _ ->
                    drawShape { ctx with Style =  sf ctx.Style } shape
            
                | ProjectedText(x, y, va, ha, r, t), _ -> 
                    let va = match va with Baseline -> "baseline" | Hanging -> "hanging" | Middle -> "middle"
                    let ha = match ha with Start -> "start" | Center -> "middle" | End -> "end"
                    let xy = projectCont (x, y)
                    Text(xy, t, r, sprintf "alignment-baseline:%s; text-anchor:%s;" va ha + formatStyle ctx.Definitions ctx.Style)
            
                | ProjectedBubble(x, y, rx, ry), _ -> 
                    Ellipse(projectCont (x, y), (rx, ry), formatStyle ctx.Definitions ctx.Style)
            
                | ProjectedLine line, _ -> 
                    let path = 
                      [ yield MoveTo(projectCont (Seq.head line)) 
                        for pt in Seq.skip 1 line do yield LineTo (projectCont pt) ]
                      |> Array.ofList
                    Path(path, formatStyle ctx.Definitions (hideFill ctx.Style))
            
                | ProjectedShape(points), _ -> 
                    let path = 
                      [| yield MoveTo(projectCont (points.[0]))
                         for pt in Seq.skip 1 points do yield LineTo(projectCont pt) 
                         yield LineTo(projectCont (points.[0])) |]
                    Path(path, formatStyle ctx.Definitions (hideStroke ctx.Style)) 
            
                | ProjectedLayered shapes, _ ->
                    Combine(shapes |> Array.map (fun s -> drawShape ctx s))
            
                | ProjectedStack(_, shapes), _ ->
                    Combine(shapes |> Array.map (fun s -> drawShape ctx s))
            
                | ProjectedInteractive(f, shape), _ ->
                    drawShape ctx shape
            
            // ------------------------------------------------------------------------------------------------
            // Event handling
            // ------------------------------------------------------------------------------------------------
            
            module Events = 
              open Scales
              open Projections
            
              type MouseEventKind = Click | Move | Up | Down
              type TouchEventKind = Move | Start 
            
              type InteractiveEvent<[<Measure>] 'vx, [<Measure>] 'vy> = 
                | MouseEvent of MouseEventKind * (Value<'vx> * Value<'vy>)    
                | TouchEvent of TouchEventKind * (Value<'vx> * Value<'vy>)    
                | TouchEnd
                | MouseLeave
            
              let projectEvent scales projection event =
                match event with
                | MouseEvent(kind, (COV x, COV y)) -> MouseEvent(kind, projectInv scales (x, y) (invertProj projection))
                | TouchEvent(kind, (COV x, COV y)) -> TouchEvent(kind, projectInv scales (x, y) (invertProj projection))
                | MouseEvent _
                | TouchEvent _ -> failwith "TODO: projectEvent - not continuous"
                | TouchEnd -> TouchEnd
                | MouseLeave -> MouseLeave
            
              let inScale s v = 
                match s, v with
                | Continuous(CO l, CO h), COV(CO v) -> v >= min l h && v <= max l h
                | Categorical(cats), CAR(v, _) -> cats |> Seq.exists ((=) v)
                | Continuous _, CAR _ -> failwith "inScale: Cannot test if categorical value is in continuous scale"
                | Categorical _, COV _ -> failwith "inScale: Cannot test if continuous value is in categorical scale"
            
              let inScales (sx, sy) event =
                match event with
                | MouseLeave -> true
                | TouchEnd -> true
                | MouseEvent(_, (x, y)) 
                | TouchEvent(_, (x, y)) -> inScale sx x && inScale sy y
            
            
            // ------------------------------------------------------------------------------------------------
            // Integration
            // ------------------------------------------------------------------------------------------------
            
            module Derived = 
              let StrokeColor(clr, s) = 
                Shape.Style((fun s -> { s with StrokeColor = (1.0, HTML clr) }), s)
            
              let FillColor(clr, s) = 
                Shape.Style((fun s -> { s with Fill = Solid(1.0, HTML clr) }), s)
            
              let Font(font, clr, s) =
                Shape.Style((fun s -> { s with Fill = Solid(1.0, HTML clr); StrokeColor = (0.0, HTML clr); Font = font }), s)
            
              let Area(line) = Shape <| seq {
                let line = Array.ofSeq line
                let firstX, lastX = fst line.[0], fst line.[line.Length - 1]
                yield firstX, COV (CO 0.0)
                yield! line
                yield lastX, COV (CO 0.0)
                yield firstX, COV (CO 0.0) }
            
              let VArea(line) = Shape <| seq {
                let line = Array.ofSeq line
                let firstY, lastY = snd line.[0], snd line.[line.Length - 1]
                yield COV (CO 0.0), firstY
                yield! line
                yield COV (CO 0.0), lastY
                yield COV (CO 0.0), firstY }
            
              let VShiftedArea(offs, line) = Shape <| seq {
                let line = Array.ofSeq line
                let firstY, lastY = snd line.[0], snd line.[line.Length - 1]
                yield COV (CO offs), firstY
                yield! line
                yield COV (CO offs), lastY
                yield COV (CO offs), firstY }
            
              let Bar(x, y) = Shape <| seq {
                yield COV x, CAR(y, 0.0)
                yield COV x, CAR(y, 1.0)
                yield COV (CO 0.0), CAR(y, 1.0)
                yield COV (CO 0.0), CAR(y, 0.0) }
                
              let Column(x, y) : Shape<1, 1> = Shape <| seq {
                yield CAR(x, 0.0), COV y
                yield CAR(x, 1.0), COV y
                yield CAR(x, 1.0), COV (CO 0.0)
                yield CAR(x, 0.0), COV (CO 0.0) }
            
            module Compost = 
              open Scales
              open Projections
              open Drawing
              open Events
              open Svg
            
              let niceNumber num decs =
                let str = string num
                let dot = str.IndexOf('.')
                let before, after = 
                  if dot = -1 then str, ""
                  else str.Substring(0, dot), str.Substring(dot + 1, min decs (str.Length - dot - 1))
                let after = 
                  if after.Length < decs then after + System.String [| for i in 1 .. (decs - after.Length) -> '0' |]
                  else after 
                let mutable res = before
                if before.Length > 5 then
                  for i in before.Length-1 .. -1 .. 0 do
                    let j = before.Length - i
                    if i <> 0 && j % 3 = 0 then res <- res.Insert(i, ",")
                if Seq.forall ((=) '0') after then res
                else res + "." + after    
            
              let defaultFormat scale value = 
                match value with
                | CAR(CA s, _) -> s
                | COV(CO v) ->
                    let dec = 
                      match scale with
                      | Continuous(CO l, CO h) -> decimalPoints (unbox l, unbox h)
                      | _ -> 0.
                    niceNumber (System.Math.Round(unbox<float> v, int dec)) (int dec)    
            
              let defstyle = 
                { Fill = Solid(1.0, RGB(196, 196, 196))
                  StrokeColor = (1.0, RGB(256, 0, 0))
                  StrokeDashArray = []
                  StrokeWidth = Pixels 2
                  Animation = None 
                  Cursor = "default"
                  Font = "10pt sans-serif"
                  FormatAxisXLabel = defaultFormat
                  FormatAxisYLabel = defaultFormat }
            
              let rec mapShape f (Projected(pr, sc, s)) =
                let s = 
                  match s with
                  | ProjectedStyle(sf, s) -> (ProjectedStyle(sf, mapShape f s))
                  | ProjectedStack(o, sx) -> (ProjectedStack(o, Array.map (mapShape f) sx))
                  | ProjectedLayered(sx) -> (ProjectedLayered(Array.map (mapShape f) sx))
                  | ProjectedInteractive(e, s) -> (ProjectedInteractive(e, mapShape f s))
                  | ProjectedOffset(o, s) -> (ProjectedOffset(o, mapShape f s))
                  | (ProjectedBubble _ as s) | (ProjectedLine _ as s) | (ProjectedShape _ as s) | (ProjectedText _  as s) -> s 
                Projected(pr, sc, f s)
            
              open WebSharper.UI
            
              let createSvg revX revY (width, height) viz = 
                let scaled = calculateScales defstyle viz
                let master = Scale((if revX then (width, 0.0) else (0.0, width)), (if revY then (0.0, height) else (height, 0.0)))
                let projected = calculateProjections scaled master
                let projected = 
                  if not revX && not revY then projected else
                    projected |> mapShape (fun s -> 
                      match s with
                      | ProjectedText(x, y, v, h, r, s) -> 
                          let v = match v with VerticalAlign.Baseline when revY -> VerticalAlign.Hanging | VerticalAlign.Hanging when revY -> VerticalAlign.Baseline | v -> v
                          let h = match h with HorizontalAlign.Start when revX -> HorizontalAlign.End | HorizontalAlign.End when revX -> HorizontalAlign.Start | h -> h
                          ProjectedText(x, y, v, h, r, s)
                      | ProjectedOffset((ox, oy), s) ->               
                          ProjectedOffset(((if revX then -ox else ox), (if revY then -oy else oy)), s) 
                      | s -> s)
            
            
                let defs = ResizeArray<_>()
                let svg = drawShape { Definitions = defs; Style = defstyle } projected
            
                let getRelativeLocation el x y =
                  let rec getOffset (parent:HTMLElement) (x, y) = 
                    if parent = null then (x, y)
                    else getOffset (unbox parent.offsetParent) (x-parent.offsetLeft, y-parent.offsetTop)
                  let rec getParent (parent:HTMLElement) = 
                    // Safari: Skip over all the elements nested inside <svg> as they are weird
                    // IE: Use parentNode when parentElement is not available (inside <svg>?)
                    if parent.namespaceURI = "http://www.w3.org/2000/svg" && parent.tagName <> "svg" then
                      if parent.parentElement <> null then getParent parent.parentElement
                      else getParent (unbox parent.parentNode)
                    elif parent.offsetParent <> null then parent 
                    elif parent.parentElement <> null then getParent parent.parentElement
                    else getParent (unbox parent.parentNode)
                  getOffset (getParent el) (x, y)
                
                let mouseHandler kind el (evt:Event) =
                  let evt = evt :?> MouseEvent
                  let x, y = getRelativeLocation el evt.pageX evt.pageY
                  triggerEvent projected evt (MouseEvent(kind, (COV(CO x), COV(CO y))))
            
                let touchHandler kind el (evt:Event) =
                  let evt = evt :?> TouchEvent
                  let touch = evt.touches.[0]
                  let x, y = getRelativeLocation el touch.pageX touch.pageY
                  triggerEvent projected evt (TouchEvent(kind, (COV(CO x), COV(CO y))))
            
                let counter = ref 0
                let renderCtx = 
                  { Definitions = defs }
            
                div ["style"=>sprintf "width:%dpx;height:%dpx;margin:0px auto 0px auto" (int width) (int height)] [
                  svg [
                      "width"=>string (int width); "height"<| string(int height); 
                      "click" =!> mouseHandler MouseEventKind.Click
                      "mousemove" =!> mouseHandler MouseEventKind.Move
                      "mousedown" =!> mouseHandler MouseEventKind.Down
                      "mouseup" =!> mouseHandler MouseEventKind.Up
                      "mouseleave" =!> fun _ evt -> triggerEvent projected evt MouseLeave
                      "touchmove" =!> touchHandler TouchEventKind.Move
                      "touchstart" =!> touchHandler TouchEventKind.Start
                      "touchend" =!> fun _ evt -> triggerEvent projected evt TouchEnd
                    ] [
                      let body = renderSvg renderCtx svg |> Array.ofSeq
                      yield! defs
                      yield! body
                    ]
                ] 
            *)
            module Covid =
                open System
                open FSharp.Data
            
                type State = State of string with member this.Id = match this with State v -> v
                [<Measure>] type people
            
                //[< Literal >]
                //let  PopulationStatesUrl   = "https://www.census.gov/quickfacts/fact/csv/TX/PST045219"
                //type PopulationStates      = CsvProvider<PopulationStatesUrl>
                //let  getStatePop        st = PopulationStates  .AsyncLoad(PopulationStatesUrl  .Replace("/TX/", "/" + st + "/"))
                let statesPop2019 = Map[
                        State "US",  328239523<people>     
                        State "AL",    4903185<people>   
                        State "AK",     731545<people>  
                        State "AZ",    7278717<people>   
                        State "AR",    3017804<people>   
                        State "CA",   39512223<people>    
                        State "CO",    5758736<people>   
                        State "CT",    3565287<people>   
                        State "DE",     973764<people>  
                        State "DC",     705749<people>  
                        State "FL",   21477737<people>    
                        State "GA",   10617423<people>    
                        State "HI",    1415872<people>   
                        State "ID",    1787065<people>   
                        State "IL",   12671821<people>    
                        State "IN",    6732219<people>   
                        State "IA",    3155070<people>   
                        State "KS",    2913314<people>   
                        State "KY",    4467673<people>   
                        State "LA",    4648794<people>   
                        State "ME",    1344212<people>   
                        State "MD",    6045680<people>   
                        State "MA",    6892503<people>   
                        State "MI",    9986857<people>   
                        State "MN",    5639632<people>   
                        State "MS",    2976149<people>   
                        State "MO",    6137428<people>   
                        State "MT",    1068778<people>   
                        State "NE",    1934408<people>   
                        State "NV",    3080156<people>   
                        State "NH",    1359711<people>   
                        State "NJ",    8882190<people>   
                        State "NM",    2096829<people>   
                        State "NY",   19453561<people>    
                        State "NC",   10488084<people>    
                        State "ND",     762062<people>  
                        State "OH",   11689100<people>    
                        State "OK",    3956971<people>   
                        State "OR",    4217737<people>   
                        State "PA",   12801989<people>    
                        State "RI",    1059361<people>   
                        State "SC",    5148714<people>   
                        State "SD",     884659<people>  
                        State "TN",    6829174<people>   
                        State "TX",   28995881<people>    
                        State "UT",    3205958<people>   
                        State "VT",     623989<people>  
                        State "VA",    8535519<people>   
                        State "WA",    7614893<people>   
                        State "WV",    1792147<people>   
                        State "WI",    5822434<people>   
                        State "WY",     578759<people>  
                        State "PR",    3193694<people>       
                ]
            
                let statesCodes = [
                    "Alabama"                       , State "AL"
                    "Alaska"                        , State "AK"
                    "Arizona"                       , State "AZ"
                    "Arkansas"                      , State "AR"
                    "California"                    , State "CA"
                    "Colorado"                      , State "CO"
                    "Connecticut"                   , State "CT"
                    "Delaware"                      , State "DE"
                    "Florida"                       , State "FL"
                    "Georgia"                       , State "GA"
                    "Hawaii"                        , State "HI"
                    "Idaho"                         , State "ID"
                    "Illinois"                      , State "IL"
                    "Indiana"                       , State "IN"
                    "Iowa"                          , State "IA"
                    "Kansas"                        , State "KS"
                    "Kentucky"                      , State "KY"
                    "Louisiana"                     , State "LA"
                    "Maine"                         , State "ME"
                    "Maryland"                      , State "MD"
                    "Massachusetts"                 , State "MA"
                    "Michigan"                      , State "MI"
                    "Minnesota"                     , State "MN"
                    "Mississippi"                   , State "MS"
                    "Missouri"                      , State "MO"
                    "Montana"                       , State "MT"
                    "Nebraska"                      , State "NE"
                    "Nevada"                        , State "NV"
                    "New Hampshire"                 , State "NH"
                    "New Jersey"                    , State "NJ"
                    "New Mexico"                    , State "NM"
                    "New York"                      , State "NY"
                    "North Carolina"                , State "NC"
                    "North Dakota"                  , State "ND"
                    "Ohio"                          , State "OH"
                    "Oklahoma"                      , State "OK"
                    "Oregon"                        , State "OR"
                    "Pennsylvania"                  , State "PA"
                    "Rhode Island"                  , State "RI"
                    "South Carolina"                , State "SC"
                    "South Dakota"                  , State "SD"
                    "Tennessee"                     , State "TN"
                    "Texas"                         , State "TX"
                    "Utah"                          , State "UT"
                    "Vermont"                       , State "VT"
                    "Virginia"                      , State "VA"
                    "Washington"                    , State "WA"
                    "West Virginia"                 , State "WV"
                    "Wisconsin"                     , State "WI"
                    "Wyoming"                       , State "WY"
                    "American Samoa"                , State "AS"
                    "District of Columbia"          , State "DC"
                    //"Federated States of Micronesia", State "FM"
                    "Guam"                          , State "GU"
                    //"Marshall Islands"              , State "MH"
                    "Northern Mariana Islands"      , State "MP"
                    //"Palau"                         , State "PW"
                    "Puerto Rico"                   , State "PR"
                    "Virgin Islands"                , State "VI"
                ]
            
                let splitStates  (sts:string) = sts.Trim().Split ' ' |> Array.map State
                let rec getStatePop   st  = statesPop2019 |> Map.tryFind st |> Option.defaultValue 100_000<people>
                let rec getStatesPopM sts =
                    sts
                    |> Set.filter ((<>) (State "US") )
                    |> Set.map getStatePop 
                    |> Seq.sum
            
                let getStatesPop = Memoize.memoize getStatesPopM
            
                [< Literal >]
                let  CovidStatesCurrentUrl = "https://covidtracking.com/api/v1/states/TX/current.json"
                type CovidStatesCurrent    =  JsonProvider<CovidStatesCurrentUrl>
                //let getStateCurrent   st = CovidStatesCurrent.AsyncLoad(CovidStatesCurrentUrl.Replace("/TX/", "/" + st + "/"))
            
                [< Literal >]
                let  CovidStatesDailyUrl     = "https://covidtracking.com/api/v1/states/TX/daily.json"
                type CovidStatesDaily        =  JsonProvider<CovidStatesDailyUrl>
                let getStateDaily (State st) = CovidStatesDailyUrl.Replace((if st = "US" then "/states/TX/" else "/TX/"), "/" + st.ToLower() + "/")
                                               |> CovidStatesDaily.AsyncLoad
            
                //let current = (getStateCurrent "TX")
                //let daily   = (getStateDaily   "TX")
            
                let deathsA st = async {
                    let! data = getStateDaily st
                    let deaths= data
                                |> Array.choose (fun d -> 
                                    d.Death 
                                    |> Option.map (fun death -> System.DateTime(d.Date / 10000, d.Date / 100 % 100, d.Date % 100), death * 1<people>) 
                                )
                                |> Seq.sort
                                |> Map
                    //let getPrior n (d:DateTime) = deaths |> Map.tryFind (d.AddDays <| float n) |> Option.defaultValue 0
                    //return deaths |> Seq.map (fun kvp -> kvp.Key, (kvp.Value - (getPrior -7 kvp.Key) ) )
                    return deaths
                }
            
                let deaths st = async {
                    let! data = deathsA st
                    return st, data
                }
            
                let printDeaths st = 
                    async {
                        let! data = deathsA st
                        data |> Seq.iter (fun kvp -> printfn "%A %d" kvp.Key kvp.Value )
                    } |> Async.Start
            
                (*
            
                module X =
                    open FsRoot.TestingJS.Covid
                    getStatePop "TX" |> Async.map (fun pop -> pop.Rows |> Seq.map (fun r -> r.Texas) |> print) |> Async.Start
                    printdeaths "NY"
                    printdeaths "TX"
                *)
            
                open WebSharper.UI
                open WebSharper.JavaScript
                open WebSharper.UI.Html
                
                let ahora = System.DateTime.Now
            
                let toggleSt  = Var.Create None
                let statesV   = Var.Create (statesCodes |> List.map (snd >> function State st -> st) |> String.concat " ")
                let delayedV  = delayedVar 1000 statesV
                let statesW   = delayedV.View |> View.Map splitStates
                let totalizeW = statesW |> View.Map (Seq.filter ((<>) (State "US")) >> Seq.length >> __ (>) 1 )
                let columnsW  = (statesW, totalizeW) 
                                ||> View.Map2(fun states totalize -> 
                                    seq { 
                                        for st in states do yield st.Id
                                        if totalize then yield "Total"
                                    })
            
                toggleSt.View |> View.Sink(function 
                    | None        -> ()
                    | Some(_, st) -> 
                    statesW |> View.Get (fun sts ->
                        (if sts |> Seq.contains st then sts |> Seq.filter ((<>)st) else sts |> Seq.append <| (seq[ st ]) )
                        |> Seq.map (fun st -> st.Id)
                        |> String.concat " "
                        |> statesV.Set
                        toggleSt.Set None
                    )
                )
            
                let thousands (n:int) =
                    let rec thousands acc = 
                        function
                        | "" -> acc
                        | x  -> thousands (x.Right 3 + if acc = "" then "" else "," + acc) (x.Left -3)
                    if n < 0 then -n else n
                    |> string
                    |> thousands ""
                    |> fun s -> if n < 0 then "-" + s else s
            
                let getPrior    n data (d:DateTime) = data |> Map.tryFind (d.AddDays <| float n) |> Option.defaultValue 0<people>
                let deathsSince n data  d v         = v - (getPrior -n data d)
                let daily         data  d v         = deathsSince    1 data d v
                let weekly        data  d v         = deathsSince    7 data d v
                let monthly       data  d v         = deathsSince   30 data d v
                let yearly        data  d v         = 52 *   weekly    data d v
            
                [< CustomEquality ; NoComparison >]
                type Function = Function of desc:string * (Map<DateTime,int<people>> -> DateTime -> int<people> -> (unit -> int<people>) -> int)
                  with
                    member   this.Id    = match this with Function(nm,_) -> nm
                    member   this.F     = match this with Function(_, f) -> f
                    override a.GetHashCode() = a.Id.GetHashCode()
                    override a.Equals(b) =
                       match b with
                       | :? Function as b -> a.Id = b.Id
                       | _                -> false
                let fname = function Function(nm,_) -> nm
            
                let funcs = [
                    Function("yearly deaths per 100K", fun (data:Map<_,_>) d v getPop -> yearly  data d v * 100_000 / (getPop())                     )
                    Function("total deaths per 1M", fun (data:Map<_,_>) d v getPop -> v * 1_000_000 / (getPop())                     )
                    Function("total deaths"   , fun  data           d v getPop -> v                                       |> __ (/) 1<people> )
                    Function("day deaths"     , fun  data           d v getPop -> daily   data d v                        |> __ (/) 1<people> )
                    Function("week deaths"    , fun  data           d v getPop -> weekly  data d v                        |> __ (/) 1<people> )
                    Function("30 days deaths" , fun  data           d v getPop -> monthly data d v                        |> __ (/) 1<people> )
                    Function("7 days yearly"  , fun  data           d v getPop -> yearly  data d v                        |> __ (/) 1<people> )
                    Function("population"     , fun  data           d v getPop ->                              (getPop()) |> __ (/) 1<people> )
                ]
            
                let functionV = Var.Create (Seq.head funcs)
            
                let rowsW = View.Do {
                    let! states   = statesW
                    let! allData  = states |> Array.map deaths |> Async.Parallel |> View.Const |> View.MapAsync id
                    let! totalize = totalizeW
                    let! f        = functionV.View
                    let  getTot() = getStatesPop (Set states)
                    let days      = (Map.empty, allData)
                                    ||> Seq.fold(fun all (st, data) -> 
                                        (all, data)
                                        ||> Seq.fold (fun m kvp ->
                                            let getPop() = getStatePop st
                                            let text     = f.F data kvp.Key kvp.Value getPop 
                                            let newV     = m |> Map.tryFind kvp.Key |> Option.defaultValue Map.empty |> Map.add st (kvp.Value, text)
                                            m |> Map.add kvp.Key newV
                                        )
                                    )
                    let totals    = days |> Seq.map (fun dayvp ->
                                        let total = dayvp.Value |> Seq.choose(fun kvp -> if kvp.Key.Id = "US" then None else Some(fst kvp.Value) ) |> Seq.sum
                                        dayvp.Key, total, dayvp.Value
                                    )
                    let totals2   = totals |> Seq.map (fun (date, value, _) -> date, value) |> Map
                    return totals |> Seq.map (fun (date, value, row) ->
                                date
                                , [| for st in states do yield row |> Map.tryFind st |> Option.map snd |> fun vo -> st, vo |]
                                , if totalize then Some (f.F totals2 date value getTot) else None
                            ) |> Seq.sortDescending
                }
            
                let reorderStates() =
                    rowsW |> View.Get(fun days ->
                        let _, vals, _ = days |> Seq.maxBy (fun (a,b,c) -> a)
                        vals
                        |> Seq.sortByDescending snd
                        |> Seq.map (fun (st,_) -> st.Id)
                        |> String.concat " "
                        |> statesV.Set
                    )
            
                let alignRight   () = Attr.Style "text-align" "right"
                let bootstrap    () = Doc.Verbatim """<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"> """
                let reorderButton() = Doc.Button "Reorder" [] reorderStates
                let statesInput  () = Doc.Input [ attr.style "width: 70%" ] statesV
                let statesList   () = Doc.SelectOptional [] "Add State" fst statesCodes toggleSt
                let title        () = h1 [] [ text "Covid Statistics" ]
                let dataSel         = Doc.Select [] fname funcs functionV
                let statesBar    () =
                    div [] [
                        text "States: "
                        statesInput  ()
                        reorderButton()
                        statesList   ()
                    ]
            
                let columns   () = columnsW |> Doc.BindSeqCached (fun col -> th [ alignRight() ] [ text col ])
                let thousandsO v = v |> Option.map thousands |> Option.defaultValue ""
                let valueCell  v = td [ alignRight() ] [ text <| thousandsO v ]
                let valuesRow (date : DateTime, values :(State * int option) [], totalO : int option) =
                    tr [] [
                        yield  th [  ] [ text (date.ToShortDateString()) ]
                        yield! values |> Seq.map (snd >> valueCell)
                        match totalO with 
                        | Some v -> yield th [ alignRight() ] [ text <| thousands v ]
                        | None   -> ()
                    ]
            
                let dataTable() =
                    table [ Attr.Class "table table-sm" ] [
                        tr[] [
                            th [] [ text "Date" ]
                            columns()
                        ]
                        rowsW |> Doc.BindSeqCached valuesRow
                    ]
            
                [< SPAEntryPoint >]
                let main() =
                    div    [ Attr.Class "xcontainer"  ] [
                        title    ()
                        statesBar()
                        div [] [
                            text "Data: "
                            dataSel
                        ]
                        dataTable()
                        bootstrap()
                    ]
                    |> Doc.Run JS.Document.Body
            
            (* 
            module X =
                open FsRoot
                open TestingJS.GZip
            
                "Hello GZipStream" 
                |> compress
                |>! (fun b -> printfn "%A" b.Length)
                |> WebSharper.Json.Serialize
                |>! print
                |> WebSharper.Json.Deserialize 
                |> decompress2
                |> print
            
            module X =
                open FsRoot
                open TestingJS.GZip
                open ComponentAce.Compression.Libs
            
                helloGZipStream
                |> WebSharper.Json.Deserialize 
                |> decompress//2 zlib.zlibConst.Z_BEST_SPEED
                |> print
            *)
#nowarn "3242"
////-d:FSharpStation1579752790371 -d:TEE -d:WEBSHARPER
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
//#nowarn "3242"
/// Root namespace for all code
//#define FSharpStation1579752790371
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
            [< AutoOpen >]
            module Monads =
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
                
                let thousands n =
                    let v = n.ToString()
                    let r = v.Length % 3 
                    let s = if r = 0 then 3 else r
                    [   yield v.[0.. s - 1]
                        for i in 0..(v.Length - s)/ 3 - 1 do
                            yield v.[i * 3 + s .. i * 3 + s + 2]
                    ] |> String.concat ","
            
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
                
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER 
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
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
            module AppFramework2 =
                
                open WebSharper.JavaScript
            
                type PlgInName  = PlgInName  of string with member this.Id = match this with PlgInName  v -> v
                type PlgVarName = PlgVarName of string with member this.Id = match this with PlgVarName v -> v
                type PlgDocName = PlgDocName of string with member this.Id = match this with PlgDocName v -> v
                type PlgViwName = PlgViwName of string with member this.Id = match this with PlgViwName v -> v
                type PlgActName = PlgActName of string with member this.Id = match this with PlgActName v -> v
            
                type PlugInVar   = { 
                    varName      : PlgVarName
                    varVar       : Var<string>
                }
            
                type PlugInView  = {
                    viwName      : PlgViwName
                    viwView      : View<string>
                }
            
                and PlugInDoc = {
                    docName        : PlgDocName
                    docDoc         : Lazy<DocFunction>
                }
            
                and  PlugInAction = {
                    actName        : PlgActName
                    actFunction    : ActFunction
                    actEnabled     : View<bool>
                }
            
                and PlugIn = {
                    plgName        : PlgInName
                    plgVars        : ListModel<PlgVarName, PlugInVar   >
                    plgViews       : ListModel<PlgViwName, PlugInView  >
                    plgDocs        : ListModel<PlgDocName, PlugInDoc   >
                    plgActions     : ListModel<PlgActName, PlugInAction>
                }
             
                and IdentType =
                | IdentVar
                | IdentView
                | IdentDoc
                | IdentAction
                | IdentPlugIn
                | IdentGeneric
                    with override this.ToString() = (sprintf "%A" this).Substring2(5,100) |> sprintf "id%s"
            
                and ParmTypeBasic =
                | ParmText
                | ParmVar
                | ParmDoc
                | ParmAction
                | ParmIdent of IdentType
                | ParmObject
                    with override this.ToString() = 
                            match this with 
                            | ParmText       -> "Text"
                            | ParmVar        -> "Var"
                            | ParmDoc        -> "Doc"
                            | ParmAction     -> "Action"
                            | ParmIdent    b -> sprintf "%O" b
                            | ParmObject     -> "obj"
            
                and ParmType =
                | ParmBasic    of ParmTypeBasic
                | ParmOneOf    of ParmTypeBasic list
                | ParmMap      of ParmTypeBasic list
                | ParmList     of ParmTypeBasic list
                | ParmOptional of ParmTypeBasic
                    with override this.ToString() = 
                            match this with 
                            | ParmMap [ParmText;ParmAction] -> "<Attrs>"
                            | ParmBasic                   b -> sprintf "%O"          b
                            | ParmOneOf                   b -> ParmType.ListToString b
                            | ParmMap                     b -> ParmType.ListToString b |> sprintf "\"<nm1>=%s;...\""
                            | ParmList                    b -> ParmType.ListToString b |> sprintf "%s ..."
                            | ParmOptional                b -> sprintf "[%O]"        b
                         static member ListToString b = b |> Seq.map (sprintf "%O") |> String.concat "|"
            
                and ParmDef = ParmDef of string * ParmType
                    with override this.ToString() = match this with ParmDef(name, t) -> sprintf "%s:%O" name t
            
                and ParmVl  =
                | PvVarRef   of (PlgInName * PlgVarName)
                | PvViwRef   of (PlgInName * PlgViwName)
                | PvDocRef   of (PlgInName * PlgDocName)
                | PvActRef   of (PlgInName * PlgActName)
                | PvVar      of Var<string>
                | PvView     of View<string>
                | PvText     of string
                | PvDoc      of Doc
                | PvAction0  of (       unit -> unit)
                | PvAction1  of (       obj  -> unit)
                | PvAction2  of (obj -> obj  -> unit)
                | PvPlgAct   of PlugInAction
                | PvPlugIn   of PlugIn
                | PvObject   of obj
                | PvNone
                | PvList     of ParmVl list
                | PvMap      of Map<string, ParmVl>
            
                and DocFunction =
                | JustDoc of                                                              Doc
                | FunDoc0 of (                                                  unit   -> Doc )
                | FunDoc1 of (                                                  ParmVl -> Doc ) *                                                   ParmDef
                | FunDoc2 of (                                        ParmVl -> ParmVl -> Doc ) *                                         ParmDef * ParmDef
                | FunDoc3 of (                              ParmVl -> ParmVl -> ParmVl -> Doc ) *                               ParmDef * ParmDef * ParmDef
                | FunDoc4 of (                    ParmVl -> ParmVl -> ParmVl -> ParmVl -> Doc ) *                     ParmDef * ParmDef * ParmDef * ParmDef
                | FunDoc5 of (          ParmVl -> ParmVl -> ParmVl -> ParmVl -> ParmVl -> Doc ) *           ParmDef * ParmDef * ParmDef * ParmDef * ParmDef
                | FunDoc6 of (ParmVl -> ParmVl -> ParmVl -> ParmVl -> ParmVl -> ParmVl -> Doc ) * ParmDef * ParmDef * ParmDef * ParmDef * ParmDef * ParmDef
            
                and ActFunction =
                | FunAct0 of (                                                  unit   -> unit)
                | FunAct1 of (                                                  ParmVl -> unit) *                                                   ParmDef
                | FunAct2 of (                                        ParmVl -> ParmVl -> unit) *                                         ParmDef * ParmDef
                | FunAct3 of (                              ParmVl -> ParmVl -> ParmVl -> unit) *                               ParmDef * ParmDef * ParmDef
                | FunAct4 of (                    ParmVl -> ParmVl -> ParmVl -> ParmVl -> unit) *                     ParmDef * ParmDef * ParmDef * ParmDef
                | FunAct5 of (          ParmVl -> ParmVl -> ParmVl -> ParmVl -> ParmVl -> unit) *           ParmDef * ParmDef * ParmDef * ParmDef * ParmDef
                | FunAct6 of (ParmVl -> ParmVl -> ParmVl -> ParmVl -> ParmVl -> ParmVl -> unit) * ParmDef * ParmDef * ParmDef * ParmDef * ParmDef * ParmDef
            
                let defaultPlugIn() = {
                        plgName    = PlgInName ""
                        plgVars    = ListModel (fun (var:PlugInVar   ) -> var.varName)
                        plgViews   = ListModel (fun (viw:PlugInView  ) -> viw.viwName)
                        plgDocs    = ListModel (fun (doc:PlugInDoc   ) -> doc.docName)
                        plgActions = ListModel (fun (act:PlugInAction) -> act.actName)
                    }
            
                let plugIns = ListModel (fun plg -> plg.plgName)
            
                let (|RefVar|) ref =
                    match ref with
                    | (pn, vn) ->
                        let varRW = View.Do {
                            let! plgO = plugIns.TryFindByKeyAsView pn
                            match plgO with
                            | None      -> return Result.errorf "<PlugIn not found : %A>" ref
                            | Some plg  ->
                            let! pvO = plg.plgVars.TryFindByKeyAsView vn
                            match pvO with
                            | None      -> return Result.errorf "<Var not found : %A>" ref
                            | Some plgV ->
                            return Ok plgV.varVar
                        }
                        Var.Make
                            (varRW |> View.Bind (
                                function 
                                | Error m -> View.Const m
                                | Ok    v -> v.View
                            )) 
                            (fun nv -> varRW |> View.Get (Result.iter ignore (fun x -> x.Set nv) ) )
            
                let (|RefViw|) ref =
                    match ref with
                    | (pn, vn) ->
                        View.Do {
                            let! plgO = plugIns.TryFindByKeyAsView pn
                            match plgO with
                            | None      -> return sprintf "<PlugIn not found : %A>" ref
                            | Some plg  ->
                            let! pvO = plg.plgViews.TryFindByKeyAsView vn
                            match pvO with
                            | None      -> return sprintf "<View not found : %A>" ref
                            | Some plgW ->
                            let!   v = plgW.viwView
                            return v
                        }
            
                let errorDoc  msg = Html.div [ attr.color "red"] [ Doc.TextNode msg ]
                let errorDocf fmt = Printf.ksprintf errorDoc fmt
            
                let invokeFunDoc (plgD:PlugInDoc) =
                    try
                        match plgD.docDoc.Value with
                        | JustDoc d               -> d
                        | FunDoc0 df              -> df()
                        | FunDoc1(d1,_          ) -> d1 PvNone
                        | FunDoc2(d2,_,_        ) -> d2 PvNone PvNone
                        | FunDoc3(d3,_,_,_      ) -> d3 PvNone PvNone PvNone
                        | FunDoc4(d4,_,_,_,_    ) -> d4 PvNone PvNone PvNone PvNone
                        | FunDoc5(d5,_,_,_,_,_  ) -> d5 PvNone PvNone PvNone PvNone PvNone
                        | FunDoc6(d6,_,_,_,_,_,_) -> d6 PvNone PvNone PvNone PvNone PvNone PvNone
                    with e -> errorDocf "<Error creating Doc %s: %s>" plgD.docName.Id e.Message
            
                let (|RefDoc|) ref =
                    match ref with
                    | (pn, vn) ->
                        View.Do {
                            let! plgO = plugIns.TryFindByKeyAsView pn
                            match plgO with
                            | None      -> return errorDocf "<PlugIn not found : %A>" ref
                            | Some plg  ->
                            let! pvO = plg.plgDocs.TryFindByKeyAsView vn
                            match pvO with
                            | None      -> return errorDocf "<Doc not found : %A>" ref
                            | Some plgD -> return invokeFunDoc plgD
                        } |> Doc.EmbedView
            
                let mainDocV = Var.Create "AppFramework.AppFwkClient"
            
                let pvIdent = function
                | PvText name -> name
                | p -> failwithf "Wrong parameter expecting Ident: %A" p
            
                let rec pvDoc = function
                | PvText                         txt  -> Doc.TextNode txt
                | PvVarRef(RefVar txtV) | PvVar  txtV -> Doc.TextView txtV.View
                | PvViwRef(RefViw txtW) | PvView txtW -> Doc.TextView txtW
                | PvDocRef(RefDoc doc ) | PvDoc  doc  -> doc
                | PvList                         docs -> docs |> Seq.map pvDoc |> Doc.Concat
                | p -> failwithf "Wrong parameter expecting Doc: %A" p
            
                let pvView = function
                | PvText                           txt  -> View.Const txt
                | PvVarRef(RefVar txtV) | PvVar    txtV -> txtV.View
                | PvViwRef(RefViw txtW) | PvView   txtW -> txtW
                | p -> failwithf "Wrong parameter expecting View: %A" p
            
                let pvVar = function
                | PvText                         txt  -> Var.Make (View.Const txt) ignore
                | PvVarRef(RefVar txtV) | PvVar  txtV -> txtV
                | PvViwRef(RefViw txtW) | PvView txtW -> Var.Make txtW ignore
                | p -> failwithf "Wrong parameter expecting Var: %A" p
            
                let pvAct = function
                //| PvActRef   (PlgInName * PlgActName)
                | PvAction0  f0 -> fun _  _  -> f0    ()
                | PvAction1  f1 -> fun el ev -> f1    ev
                | PvAction2  f2 -> fun el ev -> f2 el ev
                //| PvPlgAct   PlugInAction
                | p -> failwithf "Wrong parameter expecting Action: %A" p
            
                let pvObject = function
                | PvObject o -> o |> unbox
                | p -> failwithf "Wrong parameter expecting Object: %A" p
            
                let pvMapViews   = function
                | PvMap map -> map |> Seq.map (fun kvp -> kvp.Key, pvView kvp.Value)
                | p -> failwithf "Wrong parameter expecting Map: %A" p
                let pvMapDocs    = function
                | PvMap map -> map |> Seq.map (fun kvp -> kvp.Key, pvDoc  kvp.Value)
                | p -> failwithf "Wrong parameter expecting Map: %A" p
                let pvMapVars    = function
                | PvMap map -> map |> Seq.map (fun kvp -> kvp.Key, pvVar  kvp.Value)
                | p -> failwithf "Wrong parameter expecting Map: %A" p
                let pvMapActions = function
                | PvMap map -> map |> Seq.map (fun kvp -> kvp.Key, pvAct  kvp.Value)
                | p -> failwithf "Wrong parameter expecting Map: %A" p
            
                let getAttrs (attrs: string) = [
                    yield!  attrs
                            |> String.splitByChar ';'
                            |> Seq.map(String.splitByChar '=')
                            |> Seq.choose(
                                function 
                                | [| name ; value |] when name.Trim() <> "" && value.Trim() <> "" ->
                                        value.Trim() 
                                        |> View.Const
                                        |> Attr.DynamicCustom (fun el v ->
                                            try el.SetAttribute(name.Trim(), v.Trim()) with e -> printfn "%A" e
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
                                        |> View.Const
                                        |> Attr.DynamicStyle (name.Trim())
                                        |> Some
                                |_      -> None )
                ]
            
                let pvAttrs = function
                | PvText atts -> getAttrs atts
                | PvNone      -> []
                | p -> failwithf "Wrong parameter expecting Ident: %A" p
            
                //let pvAttrs = pvAttr >> Seq.singleton
                let pvDocs  = function
                | PvList docs -> docs         |> Seq.map pvDoc
                | single      -> pvDoc single |> Seq.singleton
            
                let funDoc1 f (d1,t1)                                         = FunDoc1((fun p1                -> f (t1 p1)                                        ),d1               )
                let funDoc2 f (d1,t1) (d2,t2)                                 = FunDoc2((fun p1 p2             -> f (t1 p1) (t2 p2)                                ),d1,d2            )
                let funDoc3 f (d1,t1) (d2,t2) (d3,t3)                         = FunDoc3((fun p1 p2 p3          -> f (t1 p1) (t2 p2) (t3 p3)                        ),d1,d2,d3         )
                let funDoc4 f (d1,t1) (d2,t2) (d3,t3) (d4,t4)                 = FunDoc4((fun p1 p2 p3 p4       -> f (t1 p1) (t2 p2) (t3 p3) (t3 p4)                ),d1,d2,d3,d4      )
                let funDoc5 f (d1,t1) (d2,t2) (d3,t3) (d4,t4) (d5,t5)         = FunDoc5((fun p1 p2 p3 p4 p5    -> f (t1 p1) (t2 p2) (t3 p3) (t4 p4) (t5 p5)        ),d1,d2,d3,d4,d5   )
                let funDoc6 f (d1,t1) (d2,t2) (d3,t3) (d4,t4) (d5,t5) (d6,t6) = FunDoc6((fun p1 p2 p3 p4 p5 p6 -> f (t1 p1) (t2 p2) (t3 p3) (t4 p4) (t5 p5) (t6 p6)),d1,d2,d3,d4,d5,d6)
            
                let funAct1 f (d1,t1)                                         = FunAct1((fun p1                -> f (t1 p1)                                        ),d1               )
                let funAct2 f (d1,t1) (d2,t2)                                 = FunAct2((fun p1 p2             -> f (t1 p1) (t2 p2)                                ),d1,d2            )
                let funAct3 f (d1,t1) (d2,t2) (d3,t3)                         = FunAct3((fun p1 p2 p3          -> f (t1 p1) (t2 p2) (t3 p3)                        ),d1,d2,d3         )
                let funAct4 f (d1,t1) (d2,t2) (d3,t3) (d4,t4)                 = FunAct4((fun p1 p2 p3 p4       -> f (t1 p1) (t2 p2) (t3 p3) (t3 p4)                ),d1,d2,d3,d4      )
                let funAct5 f (d1,t1) (d2,t2) (d3,t3) (d4,t4) (d5,t5)         = FunAct5((fun p1 p2 p3 p4 p5    -> f (t1 p1) (t2 p2) (t3 p3) (t4 p4) (t5 p5)        ),d1,d2,d3,d4,d5   )
                let funAct6 f (d1,t1) (d2,t2) (d3,t3) (d4,t4) (d5,t5) (d6,t6) = FunAct6((fun p1 p2 p3 p4 p5 p6 -> f (t1 p1) (t2 p2) (t3 p3) (t4 p4) (t5 p5) (t6 p6)),d1,d2,d3,d4,d5,d6)
            
                let ptIdent idT  nm = ParmDef(nm, ParmBasic    (ParmIdent idT        )), pvIdent 
                let ptAttribs    nm = ParmDef(nm, ParmMap      [ParmText ; ParmAction]), pvAttrs 
                let ptDocs       nm = ParmDef(nm, ParmList     [ParmDoc              ]), pvDocs  
                let ptDoc        nm = ParmDef(nm, ParmBasic     ParmDoc               ), pvDoc
                let ptText       nm = ParmDef(nm, ParmBasic     ParmText              ), pvView
                let ptVar        nm = ParmDef(nm, ParmBasic     ParmVar               ), pvVar
                let ptMapViews   nm = ParmDef(nm, ParmMap      [ParmText             ]), pvMapViews  
                let ptMapDocs    nm = ParmDef(nm, ParmMap      [ParmDoc              ]), pvMapDocs   
                let ptMapVars    nm = ParmDef(nm, ParmMap      [ParmVar              ]), pvMapVars   
                let ptMapActions nm = ParmDef(nm, ParmMap      [ParmAction           ]), pvMapActions
                let ptObject     nm = ParmDef(nm, ParmBasic     ParmObject            ), pvObject
                
                let ptOpt   (pt: string -> ParmDef * (ParmVl -> 'a))  nm =
                    let pvF pv = function 
                    | PvNone -> None  
                    | v      -> pv v |> Some
                    match pt nm with
                    | ParmDef(nm, ParmBasic pb), pv -> ParmDef(nm, ParmOptional pb), pvF pv
                    | d -> failwithf "Not implemented or Wrong parameter: %A" nm
            
                let getDocFunc dn (plug:PlugIn) = 
                    match plug.plgDocs.TryFindByKey(PlgDocName dn) with 
                    | None -> failwithf "docFunction not found %s" dn 
                    | Some{ docDoc = lf } -> lf.Value
            
                let docFuncToF0 = 
                    function
                    | JustDoc d -> fun () -> d
                    | FunDoc0 f -> f
                    |                                                    v -> failwithf "expected docFunction with 0 parameters %A" v
                let docFuncToF1 = function FunDoc1(f,_          ) -> f | v -> failwithf "expected docFunction with 1 parameters %A" v
                let docFuncToF2 = function FunDoc2(f,_,_        ) -> f | v -> failwithf "expected docFunction with 2 parameters %A" v
                let docFuncToF3 = function FunDoc3(f,_,_,_      ) -> f | v -> failwithf "expected docFunction with 3 parameters %A" v
                let docFuncToF4 = function FunDoc4(f,_,_,_,_    ) -> f | v -> failwithf "expected docFunction with 4 parameters %A" v
                let docFuncToF5 = function FunDoc5(f,_,_,_,_,_  ) -> f | v -> failwithf "expected docFunction with 5 parameters %A" v
                let docFuncToF6 = function FunDoc6(f,_,_,_,_,_,_) -> f | v -> failwithf "expected docFunction with 6 parameters %A" v
            
                let getDocF0 dn plug = getDocFunc dn plug |> docFuncToF0
                let getDocF1 dn plug = getDocFunc dn plug |> docFuncToF1
                let getDocF2 dn plug = getDocFunc dn plug |> docFuncToF2
                let getDocF3 dn plug = getDocFunc dn plug |> docFuncToF3
                let getDocF4 dn plug = getDocFunc dn plug |> docFuncToF4
                let getDocF5 dn plug = getDocFunc dn plug |> docFuncToF5
                let getDocF6 dn plug = getDocFunc dn plug |> docFuncToF6
            
                let getMainClientDoc() =
                    plugIns.View
                    |> View.Map2(fun (mainDoc:string) plgs ->
                        try 
                            let r  = mainDoc.Split '.'
                            pvDoc (PvDocRef(PlgInName (Seq.head r), PlgDocName (Seq.last r)) )
                        with e -> Doc.TextView mainDocV.View
                    ) mainDocV.View
                    |> Doc.EmbedView    
            
                let newVar  name var = { varName = name ; varVar      = var                                 }
                let newViw  name viw = { viwName = name ; viwView     = viw                                 }
                let newDoc  name doc = { docName = name ; docDoc      = lazy(JustDoc (doc:Lazy<Doc>).Value) }
                let newDoc0 name f   = { docName = name ; docDoc      = lazy(FunDoc0 f                    ) }
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
                    member __.Zero()                  = { defaultPlugIn() with plgName = PlgInName "Main" }
                    member this.Yield(())             = this.Zero()
                    member __.For(coll:seq<_>, func)  = using (coll.GetEnumerator()) (fun ie -> while ie.MoveNext() do func ie.Current )
                    [<CustomOperation("plgName"   )>] member __.Name  ( plg:PlugIn, name:string                 ) = { plg with plgName    =    PlgInName name }
                    [<CustomOperation("plgView"   )>] member __.AddViw( plg:PlugIn, name:string, viw            ) = plg.plgViews  .Add(newViw  (PlgViwName name)          viw              ) ; plg
                    [<CustomOperation("plgVar"    )>] member __.AddVar( plg:PlugIn, name:string, var            ) = plg.plgVars   .Add(newVar  (PlgVarName name)          var              ) ; plg
                    [<CustomOperation("plgDoc"    )>] member __.AddDoc( plg:PlugIn, name:string, doc            ) = plg.plgDocs   .Add(newDoc  (PlgDocName name)          doc              ) ; plg
                    [<CustomOperation("plgDoc0"   )>] member __.AddDoc0(plg:PlugIn, name:string, doc            ) = plg.plgDocs   .Add(newDoc0 (PlgDocName name)          doc              ) ; plg
                    [<CustomOperation("plgDoc1"   )>] member __.AddDoc1(plg:PlugIn, name:string, doc,a,b        ) = plg.plgDocs   .Add(newDocF (PlgDocName name) (funDoc1 doc a           )) ; plg
                    [<CustomOperation("plgDoc2"   )>] member __.AddDoc2(plg:PlugIn, name:string, doc,a,b        ) = plg.plgDocs   .Add(newDocF (PlgDocName name) (funDoc2 doc a b         )) ; plg
                    [<CustomOperation("plgDoc3"   )>] member __.AddDoc3(plg:PlugIn, name:string, doc,a,b,c      ) = plg.plgDocs   .Add(newDocF (PlgDocName name) (funDoc3 doc a b c       )) ; plg
                    [<CustomOperation("plgDoc4"   )>] member __.AddDoc4(plg:PlugIn, name:string, doc,a,b,c,d    ) = plg.plgDocs   .Add(newDocF (PlgDocName name) (funDoc4 doc a b c d     )) ; plg
                    [<CustomOperation("plgDoc5"   )>] member __.AddDoc5(plg:PlugIn, name:string, doc,a,b,c,d,e  ) = plg.plgDocs   .Add(newDocF (PlgDocName name) (funDoc5 doc a b c d e   )) ; plg
                    [<CustomOperation("plgDoc6"   )>] member __.AddDoc6(plg:PlugIn, name:string, doc,a,b,c,d,e,f) = plg.plgDocs   .Add(newDocF (PlgDocName name) (funDoc6 doc a b c d e f )) ; plg
                    [<CustomOperation("plgAct"    )>] member __.AddAct( plg:PlugIn, name:string, act            ) = plg.plgActions.Add(newAct  (PlgActName name)          act              ) ; plg
                    [<CustomOperation("plgAct1"   )>] member __.AddAct1(plg:PlugIn, name:string, act,a,b        ) = plg.plgActions.Add(newActF (PlgActName name) (funAct1 act a           )) ; plg
                    [<CustomOperation("plgAct2"   )>] member __.AddAct2(plg:PlugIn, name:string, act,a,b        ) = plg.plgActions.Add(newActF (PlgActName name) (funAct2 act a b         )) ; plg
                    [<CustomOperation("plgAct3"   )>] member __.AddAct3(plg:PlugIn, name:string, act,a,b,c      ) = plg.plgActions.Add(newActF (PlgActName name) (funAct3 act a b c       )) ; plg
                    [<CustomOperation("plgAct4"   )>] member __.AddAct4(plg:PlugIn, name:string, act,a,b,c,d    ) = plg.plgActions.Add(newActF (PlgActName name) (funAct4 act a b c d     )) ; plg
                    [<CustomOperation("plgAct5"   )>] member __.AddAct5(plg:PlugIn, name:string, act,a,b,c,d,e  ) = plg.plgActions.Add(newActF (PlgActName name) (funAct5 act a b c d e   )) ; plg
                    [<CustomOperation("plgAct6"   )>] member __.AddAct6(plg:PlugIn, name:string, act,a,b,c,d,e,f) = plg.plgActions.Add(newActF (PlgActName name) (funAct6 act a b c d e f )) ; plg
                    [<CustomOperation("plgActOpt" )>] member __.AddActO(plg:PlugIn, name:string,         actO   ) = match actO with 
                                                                                                                    | Some act -> plg.plgActions.Add(newAct (PlgActName name) act)
                                                                                                                    | None     -> ()
                                                                                                                    plg
                    [<CustomOperation("plgMerge"  )>] member __.Merge ( plg:PlugIn, prefix:string, p2:PlugIn    ) = 
                                                        plg.plgVars   .AppendMany(p2.plgVars    |> Seq.map (fun v -> { v with varName = PlgVarName (prefix + v.varName.Id) } ) ) 
                                                        plg.plgViews  .AppendMany(p2.plgViews   |> Seq.map (fun w -> { w with viwName = PlgViwName (prefix + w.viwName.Id) } ) ) 
                                                        plg.plgDocs   .AppendMany(p2.plgDocs    |> Seq.map (fun d -> { d with docName = PlgDocName (prefix + d.docName.Id) } ) ) 
                                                        plg.plgActions.AppendMany(p2.plgActions |> Seq.map (fun a -> { a with actName = PlgActName (prefix + a.actName.Id) } ) ) 
                                                        plg
                let plugin = PlugInBuilder()
            
            (*
            
                funDoc  : function that returns a Doc with regular parameters
                ParmDef : expected parameter type
                ParmVl  : actual   parameter value (View/Var/Docs/Actions already dereferenced)
                Parm Transformer: convert from ParmVl to actual parm type in function: string, Doc, Var<string>, View<string>
            
            Layout:
            
                Declarations:
            
                <name> Var "Initial Value"
                <name> View < texts to be concatenated >
                <name> ViewJS "<fun>" <parms to be passed >
                <name> AF.Func <parms according to definition>
            
            
            
                ParmRef      : Parameter definition or reference in Layout
                DocDefinition: funDoc (PDefs,  PRefs) (PDefs,  PRefs) (PDefs,  PRefs) (PDefs,  PRefs) (PDefs,  PRefs)
                - Parameter validation depending on ParmDef
            
                Map style references: 
                - multiple name, value pairs within double quotes, separated by ';'
                - name and value separated with '=' for attributes, ':' for styles
                - escape values prefixed by '\'
            
                views can be composed inline using quoted references: "my name is @{name}"
                Local references are converted into global references
                when Docs are expected, elements like texts views and Vars can be converted into Docs
            
                Used by Attributes and styles:
            
                Attrs: "@{AttrView}" - a view that contains attribute value(s)
                Attrs: "@{AttrView1};@{AttrView2};" - several views that contain attribute value(s)
                Attrs: "onclick=@{Action1}" reference to an action
                Attrs: "attrib=txb@{val}txa" dynamic attribute value
                Attrs: "attrib=txt"          static  attribute value
                Attrs: "style:txb@{val}txa"  dynamic style     value
                Attrs: "style:txt"           static  style     value
            
                Also for templates with named parameters
                - templates may have multiple attribute parameters
                - templates may want to compose texts inline but not docs or vars
                - 
            
                DocFunctions do not just receive strings like before
            
                Splitter:
            
                perc Var "50"
            
                AF.DragSplitter                             : var -> obj -> obj -> unit
                dragSplitter Action AF.DragSplitter perc    :        obj -> obj -> unit
            
                split  AF.Template VSplitter1 "height:100%" "gap:@{gap}" "doc1: Ask1 ; doc2:Ask2 " "perc:perc " "MouseDown:dragSplitter "
            
                split2 AF.Splitter VSplitter1 "height:100%" Ask1 Ask2 "@{gap}" perc
            
                    (ptIdent IdentGeneric   template    )
                    (        ptAttribs      attrs       )
                    (        ptDoc          doc1        )
                    (        ptDoc          doc2        )
                    (ptOpt   ptText         gap         )
                    (ptOpt   ptVar          percentage  )
            
            
            *)
                [< JavaScriptExport >]
                module AF =
                
                    let templateCreate0 (tmpName:string) attrs views docs vars actions afters =
                        try
                            Client.Doc.LoadLocalTemplates "local"
                            seq {
                                yield!  vars    |> Seq.map (fun (nm:string, vr:Var< string>                 ) -> TemplateHole.VarStr     (nm.ToLower(), vr ) )
                                yield!  views   |> Seq.map (fun (nm:string, wr:View<string>                 ) -> TemplateHole.TextView   (nm.ToLower(), wr ) )
                                yield!  docs    |> Seq.map (fun (nm:string, nr:Doc                          ) -> TemplateHole.Elt        (nm.ToLower(), nr ) )
                                yield!  actions |> Seq.map (fun (nm:string, ar:Dom.Element->Dom.Event->unit ) -> TemplateHole.Event      (nm.ToLower(), ar ) )
                                yield!  afters  |> Seq.map (fun (nm:string, ar:Dom.Element           ->unit ) -> TemplateHole.AfterRender(nm.ToLower(), ar ) )
                            }
                            |> (if Seq.isEmpty attrs then id else TemplateHole.Attribute("attrs", Attr.Concat attrs) |> Seq.singleton |> Seq.append)
                            |> Client.Doc.NamedTemplate "local" (tmpName.ToLower() |> Some)
                        with e -> Html.text e.Message
                
                    let templateCreate (tmpName:string) attrs views docs vars actions = templateCreate0 (tmpName:string) attrs views docs vars actions []
                
                    let splitterMouseDown first (value: Var<string>) (ev: Dom.MouseEvent) =
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
                
                    let splitter (template:string) (attrs:seq<Attr>) (doc1:Doc) (doc2:Doc) (gapWO:View<string> option) (percentageVO:Var<string> option) =
                        let gapW =
                            match gapWO with
                            | Some gapW -> PvView gapW
                            | None      -> PvText "5px"
                            |> pvView
                        let perc = 
                            match percentageVO with
                            |  Some percentageV -> percentageV
                            |  None             -> Var.Create "50"
                        templateCreate template attrs 
                            [   "gap"      , gapW  ]
                            [   "doc1"     , doc1
                                "doc2"     , doc2  ]
                            [   "perc"     , perc  ]
                            [   "MouseDown", fun el ev -> splitterMouseDown true perc (ev :?> Dom.MouseEvent) ]
                
                    let mainDoc() = 
                        templateCreate "AppFramework" []
                            [   "MainDoc"   , mainDocV.View      ]
                            [   "MainClient", getMainClientDoc() ]
                            [                                    ]
                            [   "GoClient"  , fun el ev -> mainDocV.Set "AF.Client" ]
                
                    module Client =
                
                        let selectionPlugInO = Var.Create <| Some (PlgInName "AppFramework")
                        let currentPlugInW   = selectionPlugInO.View |>  View.Bind(function Some k -> plugIns.TryFindByKeyAsView k | None -> View.Const (Some <| defaultPlugIn())) |> View.Map (Option.defaultWith defaultPlugIn)
                        let currentPlugInV   = Var.Make currentPlugInW plugIns.Add
                
                        let renderPlugIns() = plugIns.DocLens(fun name plug ->
                            templateCreate "Tile" []
                                [   "Name"    , V(name.Id )
                                    "Selected", V(if selectionPlugInO.V = Some name then "selected" else "") ]
                                []
                                []
                                [   "Select"  , fun _ _ -> selectionPlugInO.Set <| Some name                 ]
                        )
                
                        let renderVars() = 
                            currentPlugInW
                            |> View.Map (fun plg -> plg.plgVars |> Seq.map (fun v -> plg, v))
                            |> Doc.BindSeqCachedBy (fun (plg, var) -> plg.plgName, var.varName) (fun (plg, var) -> 
                                templateCreate "NameValueInput" []
                                    [ "Name" ,  V( var.varName.Id) ]
                                    [                              ]
                                    [ "Value",     var.varVar      ]
                                    [                              ]
                            ) 
                
                        let renderViews() = 
                            currentPlugInW
                            |> View.Map (fun plg -> plg.plgViews |> Seq.map (fun v -> plg, v))
                            |> Doc.BindSeqCachedBy (fun (plg, viw) -> plg.plgName, viw.viwName) (fun (plg, viw) -> 
                                templateCreate "NameValue" []
                                    [   "Name" ,   V(viw.viwName.Id)
                                        "Value",   viw.viwView          ]
                                    []
                                    []
                                    []
                            ) 
                
                        let docParms (doc:PlugInDoc) = 
                            match doc.docDoc.Value with
                            | JustDoc _                              -> ""
                            | FunDoc0 __                             -> "()"
                            | FunDoc1(_, p1                        ) -> [ p1                    ] |> Seq.map (sprintf "%O") |> String.concat ", " |> sprintf "(%s)"
                            | FunDoc2(_, p1 , p2                   ) -> [ p1; p2                ] |> Seq.map (sprintf "%O") |> String.concat ", " |> sprintf "(%s)"
                            | FunDoc3(_, p1 , p2 , p3              ) -> [ p1; p2; p3            ] |> Seq.map (sprintf "%O") |> String.concat ", " |> sprintf "(%s)"
                            | FunDoc4(_, p1 , p2 , p3 , p4         ) -> [ p1; p2; p3; p4        ] |> Seq.map (sprintf "%O") |> String.concat ", " |> sprintf "(%s)"
                            | FunDoc5(_, p1 , p2 , p3 , p4 , p5    ) -> [ p1; p2; p3; p4; p5    ] |> Seq.map (sprintf "%O") |> String.concat ", " |> sprintf "(%s)"
                            | FunDoc6(_, p1 , p2 , p3 , p4 , p5, p6) -> [ p1; p2; p3; p4; p5; p6] |> Seq.map (sprintf "%O") |> String.concat ", " |> sprintf "(%s)"
                
                        let renderDocs() =
                            currentPlugInW
                            |> View.Bind (fun plg -> plg.plgDocs.View |> View.Map (Seq.map (fun v -> plg, v)) )
                            |> Doc.BindSeqCachedBy (fun (plg, doc) -> plg.plgName, doc.docName) (fun (plg, doc) -> 
                                templateCreate "Tile" []
                                    [ "Name"  ,   V(doc.docName.Id +  docParms doc) ]
                                    []
                                    []
                                    [ "Select",   fun _ _ -> currentPlugInW |> View.Get (fun plg ->  mainDocV.Set <| plg.plgName.Id + "." + doc.docName.Id )  ]
                            ) 
                
                        let actParms (act:PlugInAction) = 
                            match act.actFunction with
                            | FunAct0 __                             -> "()"
                            | FunAct1(_, p1                        ) -> [ p1                    ] |> Seq.map (sprintf "%O") |> String.concat ", " |> sprintf "(%s)"
                            | FunAct2(_, p1 , p2                   ) -> [ p1; p2                ] |> Seq.map (sprintf "%O") |> String.concat ", " |> sprintf "(%s)"
                            | FunAct3(_, p1 , p2 , p3              ) -> [ p1; p2; p3            ] |> Seq.map (sprintf "%O") |> String.concat ", " |> sprintf "(%s)"
                            | FunAct4(_, p1 , p2 , p3 , p4         ) -> [ p1; p2; p3; p4        ] |> Seq.map (sprintf "%O") |> String.concat ", " |> sprintf "(%s)"
                            | FunAct5(_, p1 , p2 , p3 , p4 , p5    ) -> [ p1; p2; p3; p4; p5    ] |> Seq.map (sprintf "%O") |> String.concat ", " |> sprintf "(%s)"
                            | FunAct6(_, p1 , p2 , p3 , p4 , p5, p6) -> [ p1; p2; p3; p4; p5; p6] |> Seq.map (sprintf "%O") |> String.concat ", " |> sprintf "(%s)"
                
                        let callFunction p1 p2 actF =
                            match actF with
                            | FunAct0(f      ) -> f    ()
                            | FunAct1(f, _   ) -> f    p2
                            | FunAct2(f, _, _) -> f p1 p2
                            | v -> failwithf "Cannot call too many parameters %A" v
                
                        let renderActions() = 
                            currentPlugInW
                            |> View.Map (fun plg -> plg.plgActions |> Seq.map (fun v -> plg, v))
                            |> Doc.BindSeqCachedBy (fun (plg, act) -> plg.plgName, act.actName) (fun (plg, act) -> 
                                let parms = actParms act
                                templateCreate "Action" [ Attr.DynamicPred "disabled" (V (not act.actEnabled.V)) (View.Const "") ] 
                                    [ "Name" ,    V(act.actName.Id + parms)                             ]
                                    []
                                    []
                                    [ "Click",    fun _ ev -> act.actFunction |> callFunction (PvObject ()) (PvObject ev) ]
                            ) 
                
                        //let renderQueries() = 
                        //    currentPlugInW
                        //    |> View.Map (fun plg -> plg.plgQueries |> Seq.map (fun v -> plg, v))
                        //    |> Doc.BindSeqCachedBy (fun (plg, qry) -> plg.plgName, qry.qryName) (fun (plg, qry) -> 
                        //        AppFwkTemplate.Tile()
                        //            .Name(     qry.qryName.Id  )
                        //            .Select(   fun _ -> () |> box |> qry.qryFunction |> unbox |> JS.Alert )
                        //            .Doc() 
                        //    ) 
                
                        let AppFwkClient() = 
                                templateCreate "AppFwkClient" []
                                    [   "PlugInName", V(currentPlugInW.V.plgName.Id) ]
                                    [   "PlugIns"   , renderPlugIns()           
                                        "Vars"      , renderVars()              
                                        "Views"     , renderViews()              
                                        "Docs"      , renderDocs()              
                                        "Actions"   , renderActions()           
                                        //"Queries"   , renderQueries()            
                                        ]
                                    []
                                    []
                
                
                    let plug = plugin {
                        plgName "AF"
                        plgVar  "MainDoc"           mainDocV
                        plgDoc0 "Client"            Client.AppFwkClient
                        plgDoc3 "element"           (fun a b c -> Doc.Element a b c :> Doc)
                                                        (ptIdent IdentGeneric   "element"      )
                                                        (        ptAttribs      "attrs"        )
                                                        (        ptDocs         "docs"         )
                        plgDoc2 "input"             Doc.Input   
                                                        (        ptAttribs      "attrs"        )
                                                        (        ptVar          "var"          )
                        plgDoc6 "splitter"          splitter    
                                                        (ptIdent IdentGeneric   "template"     )
                                                        (        ptAttribs      "attrs"        )
                                                        (        ptDoc          "doc1"         )
                                                        (        ptDoc          "doc2"         )
                                                        (ptOpt   ptText         "gap"          )
                                                        (ptOpt   ptVar          "percentage"   )
                        plgDoc6 "template"          templateCreate
                                                        (ptIdent IdentGeneric "template"       )
                                                        (        ptAttribs       "attrs"       )
                                                        (        ptMapViews      "texts"       )
                                                        (        ptMapDocs       "docs"        )
                                                        (        ptMapVars       "vars"        )
                                                        (        ptMapActions    "actions"     )
                        plgAct2 "splitterMouseDown" (splitterMouseDown true)
                                                        (        ptVar           "perc"        )
                                                        (        ptObject        "event"       )
                    }
                    if IsClient then
                        plug |> plugIns.Add
                
                
                    let splitterTemplate tmpl : WebComponent.WcSplitter.Layout = fun partSizes afterRender afterRenderSp mouseDown gap ->
                        templateCreate0 tmpl [] 
                            [   "PartSizes"     , partSizes
                                "Gap"           , gap                                                ] [] [] 
                            [   "MouseDown"     , fun el ev -> mouseDown     (ev :?> Dom.MouseEvent) ]
                            [   "AfterRender"   , afterRender  
                                "AfterRenderSp" , afterRenderSp                                      ]
                
                    let startWithHtml html =
                        WebComponent.WcSplitter.init  (splitterTemplate "WCompSplitterHor") (splitterTemplate "WCompSplitterVer")
                        let d = JS.Window.Document.CreateElement "div"
                        let _ = JS.Window.Document.Body.AppendChild d
                        d?outerHTML <- html
                        mainDoc()
                        |> Doc.RunAppend JS.Window.Document.Body 
                
                
    
        //#define WEBSHARPER
        //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
        [< JavaScriptExport >]
        module TestingJS =
        
        
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
            
            [< JavaScript >]
            module AppFramework2UI =
                open WebSharper
                open WebSharper.JavaScript
                open WebSharper.UI.Html
                open AppFramework2
            
                let txtToAttrs = PvText >> pvAttrs
            
                let percV      = Var.Create "50"    
                let gapV       = Var.Create "5px"
            
                module PlugInFuncs = /// method 1: using plugin DocFunctions
                    let inputDF    = AF.plug |> getDocF2 "input"  
                    let elementDF  = AF.plug |> getDocF3 "element"
                    let splitterDF = AF.plug |> getDocF6 "splitter"
            
                    let inpPer ()  = inputDF    (PvNone) (PvVar percV)
                    let inpGap ()  = inputDF    (PvNone) (PvVar gapV )
                    let doc1   ()  = elementDF  (PvText "div"       ) (PvText "height:100%; color:red ; background: lightblue") (PvList [ PvText "Perc: %"    ; PvDoc <| inpPer() ] )
                    let doc2   ()  = elementDF  (PvText "div"       ) (PvText "height:100%; color:blue; background: pink"     ) (PvList [ PvText "Gap: "      ; PvDoc <| inpGap() ] )
                    let splitH ()  = splitterDF (PvText "HSplitter1") (PvText "height:100%"                                   ) (PvDoc <| doc1()) (PvDoc <| doc2  ()) (PvVar gapV) (PvVar percV) 
                    let splitV ()  = splitterDF (PvText "VSplitter1") (PvText "height:100%"                                   ) (PvText "Hello" ) (PvDoc <| splitH()) (PvVar gapV) (PvVar percV) 
            
                module Direct = /// method 2: using Doc functions directly
                    let inpPer () = Doc.Input [] percV
                    let inpGap () = Doc.Input [] gapV 
                    let doc1   () = div ("height:100%; color:red ; background: lightblue" |> txtToAttrs) [ text "Perc: %"    ; inpPer() ]
                    let doc2   () = div ("height:100%; color:blue; background: pink"      |> txtToAttrs) [ text "Gap: "      ; inpGap() ]
                    let splitH () = AF.splitter "HSplitter1" ("height:100%"               |> txtToAttrs) ( doc1 ()     )      (doc2  ()) (Some gapV.View) (Some percV)
                    let splitV () = AF.splitter "VSplitter1" ("height:100%"               |> txtToAttrs) ( text "Hello")      (splitH()) (Some gapV.View) (Some percV)
            
                [< SPAEntryPoint >]
                let main() =
                    if IsClient then    
                        plugin {
                            plgName  "PlugInFuncs"
                            plgVar   "perc"                percV
                            plgVar   "gap"                 gapV
                            plgDoc0  "inpPer"  PlugInFuncs.inpPer
                            plgDoc0  "inpGap"  PlugInFuncs.inpGap
                            plgDoc0  "doc1"    PlugInFuncs.doc1
                            plgDoc0  "doc2"    PlugInFuncs.doc2
                            plgDoc0  "splitH"  PlugInFuncs.splitH
                            plgDoc0  "splitV"  PlugInFuncs.splitV
                        } |> plugIns.Add
            
                        plugin {
                            plgName  "Direct"
                            plgVar   "perc"                percV
                            plgVar   "gap"                 gapV
                            plgDoc0  "inpPer"       Direct.inpPer
                            plgDoc0  "inpGap"       Direct.inpGap
                            plgDoc0  "doc1"         Direct.doc1
                            plgDoc0  "doc2"         Direct.doc2
                            plgDoc0  "splitH"       Direct.splitH
                            plgDoc0  "splitV"       Direct.splitV
                        } |> plugIns.Add
            
                        mainDocV.Set "Direct.splitV"
                        AF.startWithHtml (AppFrameworkTemplate.html + SnippetTemplates.html)
            
////-d:WEBSHARPER
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
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
/// Root namespace for all code
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
            module Memoize =
                /// creates a Dictionary to store memoized values
                /// returns 3 functions:
                ///    checkO: ('p->'v option) 
                ///    store : ('p->'v->'v)
                ///    clear : (unit->unit)
                [<Inline>]
                let checkStore() =
                    let cache        = System.Collections.Generic.Dictionary<_, _>()
                    let checkO v     = let mutable res = Unchecked.defaultof<_>
                                       let ok          = cache.TryGetValue(v, &res)
                                       if  ok then Some res else None
                    let store  v res = cache.[v] <- res
                                       res
                    (checkO, store), cache.Clear
            
            
                /// Memoizes function f using the provided data store
                /// getStore() returns 2 functions:
                ///     checkO: ('p->'v option)
                ///     store : ('p->'v->'v)
                [< Inline >]
                let memoizeStore getStore f =
                    let (checkO:'p->'v option), (store:'p->'v->'v) = getStore()
                    fun p -> checkO p |> Option.defaultWith (fun () -> f p |> store p )
            
            
                /// Memoizes the function f using a Dictionary
                /// Returns the memoized function and a clear() function
                /// The dictionary can be reset using the clear() function
                [< Inline >]
                let memoizeResetable f =
                    let store, clear = checkStore()
                    memoizeStore (fun () -> store) f
                  , clear
            
                /// Memoizes the function f using a Dictionary
                [<Inline>]
                let memoize f = memoizeResetable f |> fst
            
            
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
                let (|StartsWith|_|) start (s:string) = if s.StartsWith start then Some s.[start.Length..                          ] else None
                let (|EndsWith  |_|) ends  (s:string) = if s.EndsWith   ends  then Some s.[0           ..s.Length - ends.Length - 1] else None
                
            
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
                
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            let (|REGEX|_|) (expr: string) (opt: string) (value: string) =
                if value = null then None else
                try 
                    match JavaScript.String(value).Match(RegExp(expr, opt)) with
                    | null         -> None
                    | [| |]        -> None
                    | m            -> Some m
                with e -> None
            
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
            
                [< Inline """return Reflect.construct($global.HTMLElement, [], this.__proto__.constructor);""" >]
                let ReflectConstruct () = X<_>
                
                [< Inline """console.log('defineWebComponent: ' + $_nm);
                            Object.setPrototypeOf($_c.prototype, $global.HTMLElement.prototype);
                            Object.setPrototypeOf($_c, $global.HTMLElement);
                            Object.setPrototypeOf($_o.prototype, $_c.prototype);
                            $global.customElements.define($_nm, $_o)""" >]
                let defineWebComponent _nm _o _c = X<_>
            
                [< JavaScript ; AutoOpen >]
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
                        [< Inline """$global.FsRoot.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New""" >] static member NewPointer = X<_>
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
                            if IsClient then defineWebComponent "wcomp-tabstrip" WcTabStripT.Constructor WcTabStripT.NewPointer
                    
                [< JavaScript ; AutoOpen >]
                module WcSplitter =    
                    open ResizeObserver
                    
                    type Layout = View<string> -> (Dom.Element -> unit) -> (Dom.Element -> unit) -> (Dom.MouseEvent -> unit) -> View<string> -> Doc
                    
                    let mutable layoutHorizontal : Layout = fun partSizes afterRender afterRenderSp mouseDown gap -> Doc.Empty
                    let mutable layoutVertical   : Layout = fun partSizes afterRender afterRenderSp mouseDown gap -> Doc.Empty
                    
                    type WcSplitterT () =
                        let mutable added = false
                        do printfn "WcSplitterT initializer"
                        [< Inline """$global.FsRoot.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New""" >] static member NewPointer = X<_>
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
                                let drag (ev: Dom.Event) =
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
                        layoutHorizontal <- layoutH
                        layoutVertical   <- layoutV
                        if IsClient then defineWebComponent "wcomp-splitter" WcSplitterT.Constructor WcSplitterT.NewPointer
                    
            [< JavaScriptExport >]
            module AppFramework =
            
                type PlugInVar = {
                    varName        : string
                    varVar         : Var<string>
                }
            
                type PlugInView = {
                    viwName        : string
                    viwView        : View<string>
                }
            
                type DocFunction =
                | LazyDoc of Lazy<Doc>
                | FunDoc1 of (                                        string -> Doc) * string                                     
                | FunDoc2 of (                              string -> string -> Doc) * string * string                            
                | FunDoc3 of (                    string -> string -> string -> Doc) * string * string * string                   
                | FunDoc4 of (          string -> string -> string -> string -> Doc) * string * string * string * string          
                | FunDoc5 of (string -> string -> string -> string -> string -> Doc) * string * string * string * string * string  
            
            
                type PlugInDoc = {
                    docName        : string
                    docDoc         : DocFunction
                }
            
                type ActFunction =
                | FunAct0 of (                                         unit -> unit)
                | FunAct1 of (                                          obj -> unit) * string
                | FunAct2 of (                                   obj -> obj -> unit) * string * string
            
                type PlugInAction = {
                    actName        : string
                    actFunction    : ActFunction
                    actEnabled     : View<bool>
                }
            
                type PlugInQuery = {
                    qryName        : string
                    qryFunction    : obj -> obj
                }
            
                type PlugIn = {
                    plgName        : string
                    plgVars        : PlugInVar   []
                    plgViews       : PlugInView  []
                    plgDocs        : PlugInDoc   []
                    plgActions     : PlugInAction[]
                    plgQueries     : PlugInQuery []
                }
            
                let plugIns = ListModel (fun plg -> plg.plgName)
            
                let mainDocV = Var.Create "AppFramework.AppFwkClient"
            
                open WebSharper.UI.Templating
            
                let [< Literal >] TemplateFileName =  @"..\website\AppFramework.html" 
            
                type AppFwkTemplate = Templating.Template<TemplateFileName, ClientLoad.Inline, ServerLoad.WhenChanged, LegacyMode.New>
            
                let defaultPlugIn = {
                        plgName    = ""
                        plgVars    = [| |]
                        plgViews   = [| |]
                        plgDocs    = [| |]
                        plgActions = [| |]
                        plgQueries = [| |]
                    }
            
                let selectionPlugInO = Var.Create <| Some "AppFramework"
                let currentPlugInW   = selectionPlugInO.View |>  View.Map2(fun _ -> Option.bind plugIns.TryFindByKey >> Option.defaultValue defaultPlugIn ) plugIns.View
                let currentPlugInV   = Var.Make currentPlugInW plugIns.Add
            
                let renderPlugIns() = plugIns.DocLens(fun name plug -> 
                    AppFwkTemplate.Tile()
                        .Name(     name                                                      )
                        .Select(   fun _ -> selectionPlugInO.Set <| Some name                )
                        .Selected( if selectionPlugInO.V = Some name then "selected" else "" )
                        .Doc() 
                )
            
                let renderDocs() =
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgDocs)
                    |> Doc.BindSeqCachedBy (fun doc ->  doc.docName) (fun doc -> 
                        let parms = match doc.docDoc with
                                    | LazyDoc _                          -> ""
                                    | FunDoc1(_, p1                    ) -> [ p1                ] |> String.concat ", " |> sprintf "(%s)"
                                    | FunDoc2(_, p1 , p2               ) -> [ p1; p2            ] |> String.concat ", " |> sprintf "(%s)"
                                    | FunDoc3(_, p1 , p2 , p3          ) -> [ p1; p2; p3        ] |> String.concat ", " |> sprintf "(%s)"
                                    | FunDoc4(_, p1 , p2 , p3 , p4     ) -> [ p1; p2; p3; p4    ] |> String.concat ", " |> sprintf "(%s)"
                                    | FunDoc5(_, p1 , p2 , p3 , p4 , p5) -> [ p1; p2; p3; p4; p5] |> String.concat ", " |> sprintf "(%s)"
                        AppFwkTemplate.Tile()
                            .Name(     doc.docName + parms)
                            .Select(   fun _ -> currentPlugInW |> View.Get (fun plg ->  mainDocV.Set <| plg.plgName + "." + doc.docName ) )
                            .Doc() 
                    ) 
            
                let renderVars() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgVars)
                    |> Doc.BindSeqCachedBy (fun var ->  var.varName) (fun var -> 
                        AppFwkTemplate.NameValueInput()
                            .Name(    var.varName  ) 
                            .Value(   var.varVar   )
                            .Doc() 
                    ) 
            
                let renderViews() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgViews)
                    |> Doc.BindSeqCachedBy (fun viw ->  viw.viwName) (fun viw -> 
                        AppFwkTemplate.NameValue()
                            .Name(    viw.viwName  )
                            .Value(   viw.viwView  )
                            .Doc() 
                    ) 
            
                let renderQueries() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgQueries)
                    |> Doc.BindSeqCachedBy (fun qry ->  qry.qryName) (fun qry -> 
                        AppFwkTemplate.Tile()
                            .Name(    qry.qryName  )
                            .Select(   fun _ -> () |> box |> qry.qryFunction |> unbox |> JS.Alert )
                            .Doc() 
                    ) 
            
                let callFunction p1 p2 actF =
                    match actF with
                    | FunAct0(f      ) -> f ()
                    | FunAct1(f, _   ) -> f p1
                    | FunAct2(f, _, _) -> f p1 p2
            
                let renderActions() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgActions)
                    |> Doc.BindSeqCachedBy (fun act ->  act.actName) (fun act -> 
                        let parms = match act.actFunction with
                                    | FunAct0(_        ) -> ""
                                    | FunAct1(_, p1    ) -> [ p1      ] |> String.concat ", " |> sprintf "(%s)"
                                    | FunAct2(_, p1, p2) -> [ p1 ; p2 ] |> String.concat ", " |> sprintf "(%s)"
                        act.actEnabled
                        |> View.Map (function
                            | true  -> AppFwkTemplate.Action() 
                                        .Name(     act.actName + parms                             )
                                        .Click(    fun ev -> act.actFunction |> callFunction ev () )
                                        .Doc() 
                            | false -> AppFwkTemplate.ActionDisabled() 
                                        .Name(     act.actName                                 )
                                        .Click(    fun ev -> act.actFunction |> callFunction ev () )
                                        .Doc() 
                        ) |> Doc.EmbedView
                    ) 
            
                let AppFwkClient = 
                    lazy
                        AppFwkTemplate.AppFwkClient()
                            .PlugIns(     renderPlugIns()           )
                            .PlugInName(  currentPlugInW.V.plgName  )
                            .Vars(        renderVars()              )
                            .Views(       renderViews()             ) 
                            .Docs(        renderDocs()              )
                            .Actions(     renderActions()           )
                            .Queries(     renderQueries()           )
                            .Doc()
            
                let getLazyDoc doc =
                    match doc.docDoc with
                    | LazyDoc ldoc -> ldoc.Value
                    | _ -> Html.div [] [ Html.text <| sprintf "Doc with parameters not allowed here: %A" doc ]
            
                let getMainClientDoc() =
                    plugIns.View
                    |> View.Map2(fun mainDoc plgs -> 
                        plgs |> Seq.tryPick(fun plg ->
                            plg.plgDocs |> Seq.tryFind(fun doc -> plg.plgName + "." + doc.docName = mainDoc) |> Option.map getLazyDoc
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
            
                let newVar name var = { varName = name ; varVar      = var }
                let newViw name viw = { viwName = name ; viwView     = viw }
                let newDoc name doc = { docName = name ; docDoc      = LazyDoc doc }
                let newQry name qry = { qryName = name ; qryFunction = qry }
                let newAct name fnc = {
                    actName        = name
                    actFunction    = FunAct0 fnc
                    actEnabled     = View.Const true
                }
            
                let newActF name fncF = {
                    actName        = name
                    actFunction    = fncF
                    actEnabled     = View.Const true
                }
                
                let newDocF name docF = { docName = name ; docDoc = docF }
            
                let tryGetVar plgName varName = plugIns.TryFindByKey plgName |> Option.bind (fun plg -> plg.plgVars    |> Array.tryFind (fun var -> var.varName = varName))
                let tryGetViw plgName viwName = plugIns.TryFindByKey plgName |> Option.bind (fun plg -> plg.plgViews   |> Array.tryFind (fun viw -> viw.viwName = viwName))
                let tryGetAct plgName actName = plugIns.TryFindByKey plgName |> Option.bind (fun plg -> plg.plgActions |> Array.tryFind (fun act -> act.actName = actName))
                let tryGetDoc plgName docName = plugIns.TryFindByKey plgName |> Option.bind (fun plg -> plg.plgDocs    |> Array.tryFind (fun doc -> doc.docName = docName))
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
            
                let actHello = newAct "Hello"       (fun ()      -> JS.Window.Alert "Hello!")
                let qryDocs  = newQry "getDocNames" (fun (_:obj) -> plugIns.Value |> Seq.collect (fun plg -> plg.plgDocs |> Seq.map (fun doc -> plg.plgName + "." + doc.docName)) |> Seq.toArray |> box)
            
                let getMainDoc =
                  lazy
                    WcSplitter.init horizontal vertical
                    WcTabStrip.init.Value
                    plugIns.Add {
                        plgName    = "AppFramework"
                        plgVars    = [| newVar "mainDocV"     mainDocV     |]
                        plgViews   = [|                                    |]
                        plgDocs    = [| newDoc "AppFwkClient" AppFwkClient |]
                        plgActions = [| actHello
                                        actHello
                                        actHello
                                        actHello
                                                                            |]
                        plgQueries = [| qryDocs                                                     |]
                    }
                    mainDoc()
            
            
            
            type LayoutEngine = {
                lytName       : string
                lytDefinition : Var<string>
            }
            
            [< JavaScriptExport >]
            module LayoutEngine =
                open WebSharper.UI
                module AF = AppFramework
            
                let (|Identifier|_|) =
                    function
                    | REGEX "^[$a-zA-Z_][0-9a-zA-Z_\.\-$]*$" "" [| id |] -> Some id
                    | _                                                  -> None
            
                let (|Vertical|Horizontal|Grid|Elem|Nothing|) =
                    function
                    | s when s = "vertical"   -> Vertical
                    | s when s = "horizontal" -> Horizontal
                    | s when s = "grid"       -> Grid
                    | Identifier id           -> Elem id
                    |                       _ -> Nothing
            
                let (|Doc|Button|Input|TextArea|Select|Nothing|) =
                    function
                    | s when s = "Doc"        -> Doc
                    | s when s = "button"     -> Button
                    | s when s = "input"      -> Input
                    | s when s = "textarea"   -> TextArea
                    | s when s = "select"     -> Select
                    |                       _ -> Nothing
            
                type Measures = 
                | Fixed    of pixel: float * first: bool
                | Variable of min:   float * value: float * max: float
            
                let (|Measures|_|) txt =
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
                    
                let errDoc txt = Html.div [] [ Html.text txt ]
            
                let splitName lytNm = String.splitByChar '.' >>  (fun a -> if a.Length = 1 then (lytNm, a.[0]) else (a.[0],a.[1]) )
            
                //let getLDoc name =
                //    splitName name
                //    ||> AF.tryGetDoc 
                //    |>  Option.map         AF.getLazyDoc
                //    |>  Option.defaultWith(fun ()  -> sprintf "missing %s" name |> errDoc )                            
            
                //let xxhookOrText =
                //    function
                //    | Identifier id -> hookDoc id
                //    | txt           -> Doc.TextNode txt
            
                let splitTokens line =
                    line
                    |> String.splitByChar '"'
                    |> Seq.mapi(fun i s -> 
                        if i % 2 = 1 then [| " " + s |] else
                        s.Trim()
                        |> fun t -> if t = "" then [||] else
                                    t.Split([| ' ' |], System.StringSplitOptions.RemoveEmptyEntries)
                    )
                    |> Seq.collect id
                    |> Seq.toList
            
                type TextData = 
                | TDPlain of string
                | TDView  of View<string>
                | TDAct   of AF.PlugInAction
            
                let rec getTextData lytNm txt =
                    txt
                    |> String.delimitedO "${" "}"
                    |> Option.map(fun (bef, name, aft) ->
                        let plg, n = splitName lytNm name
                        AF.tryGetWoW plg n
                        |> Option.map(fun txW ->
                            match bef, getTextData lytNm aft with
                            | "", TDPlain ""   -> TDView <|                                    txW
                            | _ , TDPlain b    -> TDView <| View.Map  (fun a   -> bef + a + b) txW
                            | _ , TDView  tx2W -> TDView <| View.Map2 (fun a b -> bef + a + b) txW tx2W
                            | _ , TDAct   act  -> TDAct act
                            )
                        |> Option.defaultWith(fun () -> 
                            AF.tryGetAct plg n
                            |> Option.map TDAct
                            |> Option.defaultWith(fun () -> sprintf "%s ${Missing %s}%s" bef name aft |> TDPlain)
                        )
                    )
                    |> Option.defaultValue (TDPlain txt)
            
                let getAttrs lytNm attrs = [
                    yield!  attrs
                            |> String.splitByChar ';'
                            |> Seq.map(String.splitByChar '=')
                            |> Seq.choose(
                                function 
                                | [| name ; value |] when name.Trim() <> "" && value.Trim() <> "" ->
                                        match getTextData lytNm <| value.Trim() with
                                        | TDPlain v   -> Attr.Create  (name.Trim()) (v.Trim()) 
                                        | TDView  vw  -> Attr.Dynamic (name.Trim()) vw
                                        | TDAct   act -> Attr.Handler (name.Trim()) (fun el ev -> act.actFunction |> AF.callFunction el ev )
                                        |> Some
                                |_      -> None )
                    yield!  attrs
                            |> String.splitByChar ';'
                            |> Seq.map(String.splitByChar ':')
                            |> Seq.choose(
                                function 
                                | [| name ; value |] when name.Trim() <> "" && value.Trim() <> "" -> 
                                        match getTextData lytNm <| value.Trim() with
                                        | TDPlain v   -> Attr.Style        (name.Trim()) (v.Trim()) 
                                        | TDView  vw  -> Attr.DynamicStyle (name.Trim()) vw
                                        | TDAct   act -> Attr.Style        (name.Trim()) (sprintf "${%s}" act.actName)
                                        |> Some
                                |_      -> None )
                ] 
            
                let getDocF parms (doc:AF.PlugInDoc) =
                    match doc.docDoc, parms with
                    | AF.LazyDoc ldoc                  ,                               rest -> ldoc.Value       , rest
                    | AF.FunDoc1(f1, _                ), p1                         :: rest -> f1 p1            , rest
                    | AF.FunDoc2(f2, _ , _            ), p1 :: p2                   :: rest -> f2 p1 p2         , rest
                    | AF.FunDoc3(f3, _ , _ , _        ), p1 :: p2 :: p3             :: rest -> f3 p1 p2 p3      , rest          
                    | AF.FunDoc4(f4, _ , _ , _ , _    ), p1 :: p2 :: p3 :: p4       :: rest -> f4 p1 p2 p3 p4   , rest     
                    | AF.FunDoc5(f5, _ , _ , _ , _ , _), p1 :: p2 :: p3 :: p4 :: p5 :: rest -> f5 p1 p2 p3 p4 p5, rest
                    | _ -> Html.div [] [ Html.text <| sprintf "Parameters do not coincide with definition %A - %A" doc parms ], []
            
                let getDocFinal parms doc = 
                    match getDocF parms doc with
                    | res, [] -> res
                    | _ -> sprintf "Too many parameters %A %A" doc parms |> errDoc
            
                let turnToView f = AF.mainDocV.View |> View.Map f |> Doc.EmbedView
            
                let getOneDoc lytNm docs =
                    match docs with
                    | Identifier id :: parms -> let plg, nm = splitName lytNm id
                                                AF.tryGetDoc plg nm
                                                |>  Option.map (getDocF parms)
                                                |>  Option.defaultWith  (fun ()  ->
                                                    AF.tryGetWoW plg nm
                                                    |>  Option.map (fun txtW -> Doc.TextView txtW, parms)
                                                    |> fun vv -> vv
                                                    |>  Option.defaultWith  (fun () -> sprintf "Missing doc: %s" id |> errDoc, parms) )
                    | txt           :: rest  -> match getTextData lytNm txt with
                                                | TDPlain v   -> Doc.TextNode v , rest
                                                | TDView  vw  -> Doc.TextView vw, rest
                                                | TDAct   act -> sprintf "Unexpected action: %s" act.actName |> errDoc, rest
                    | []                     -> Doc.Empty, []
            
                let rec getDocs lytNm docs =
                    match docs with
                    | [] -> []
                    | _  -> 
                    match getOneDoc lytNm docs with
                    | res, rest -> res :: getDocs lytNm rest
            
                let pairOfDocs lytNm docs =
                    AF.mainDocV.View 
                    |> View.Map (fun _ -> getDocs lytNm docs )
                    |> View.Map (
                        function 
                        | [ doc1 ; doc2 ] -> doc1, doc2
                        | _               -> sprintf "splitter expects exactly 2 elements %A" docs |> errDoc, "part 2" |> errDoc
                    ) |> (fun dsW -> View.Map fst dsW |> Doc.EmbedView, View.Map snd dsW |> Doc.EmbedView )
            
                let singleDoc lytNm docs =
                    AF.mainDocV.View 
                    |> View.Map (fun _ -> getDocs lytNm docs )
                    |> View.Map (
                        function 
                        | [ doc1 ] -> doc1
                        | _        -> sprintf "expected exactly 1 element %A" docs |> errDoc
                    ) |> Doc.EmbedView
            
                let createSplitter(lytNm, vertical, measures, docs) =
                    let doc1, doc2 = pairOfDocs lytNm docs
                    match measures with
                    | Fixed    (pixel,    first) ->    fixedSplitter vertical pixel first   doc1 doc2
                    | Variable (min, value, max) -> variableSplitter vertical min value max doc1 doc2
            
                let createElement(lytNm, element, attrs, docs) =
                    turnToView (fun _ -> getDocs lytNm docs |> Doc.Concat)
                    |> Seq.singleton
                    |> Doc.Element element (getAttrs lytNm attrs) 
                    :> Doc
            
                let createButton( lytNm, actName, attrs, text) = 
                    turnToView <| fun _ ->
                        splitName lytNm actName
                        ||> AF.tryGetAct
                        |>  Option.map          (fun act -> fun () -> act.actFunction |> AF.callFunction () ()  )
                        |>  Option.defaultValue ignore
                        |> Doc.Button text (getAttrs lytNm attrs)
            
                let createInput( lytNm, varName, attrs ) = 
                    turnToView <| fun _ ->
                        splitName lytNm varName
                        ||> AF.tryGetVoV
                        |>  Option.map          (           Doc .Input     (getAttrs lytNm attrs)             )
                        |>  Option.defaultWith  (fun ()  -> sprintf "Missing var: %s" varName |> errDoc )
            
                let createTextArea( lytNm, varName, attrs ) = 
                    turnToView <| fun _ ->
                        splitName lytNm varName
                        ||> AF.tryGetVoV
                        |>  Option.map          (           Doc .InputArea (getAttrs lytNm attrs)             )
                        |>  Option.defaultWith  (fun ()  -> sprintf "Missing var: %s" varName |> errDoc )
            
                let createDoc( lytNm, docName, parms) =
                    turnToView <| fun _ ->
                        let plg, nm = splitName lytNm docName
                        AF.tryGetDoc plg nm
                        |>  Option.map (getDocFinal parms)
                        |>  Option.defaultWith  (fun ()  -> sprintf "Missing doc: %s" docName |> errDoc )
            
                let createSplitterM = Memoize.memoize createSplitter
                let createButtonM   = Memoize.memoize createButton
                let createInputM    = Memoize.memoize createInput
                let createTextAreaM = Memoize.memoize createTextArea
                let createElementM  = Memoize.memoize createElement
                let createDocM      = Memoize.memoize createDoc
            
                let createDocO lytNm (line:string) =
                    try
                        match splitTokens line with
                        |   Identifier name :: Vertical   :: Measures measures          :: docs    -> Some <| (name, createSplitterM(lytNm, true , measures, docs) )
                        |   Identifier name :: Horizontal :: Measures measures          :: docs    -> Some <| (name, createSplitterM(lytNm, false, measures, docs) )
                        | [ Identifier name ;  Button     ;  Identifier act    ;  attrs ;  text  ] -> Some <| (name, createButtonM(  lytNm, act, attrs, text) )
                        | [ Identifier name ;  Input      ;  Identifier var    ;  attrs          ] -> Some <| (name, createInputM(   lytNm, var, attrs      ) )
                        | [ Identifier name ;  TextArea   ;  Identifier var    ;  attrs          ] -> Some <| (name, createTextAreaM(lytNm, var, attrs      ) )
                        |   Identifier name :: Doc        :: doc                        :: parms   -> Some <| (name, createDocM(     lytNm, doc, parms      ) )
                        |   Identifier name :: Grid       :: cols :: rows      :: attrs :: docs    -> None
                        |   Identifier name :: Elem elem                       :: attrs :: docs    -> Some <| (name, createElementM(lytNm, elem, attrs, docs) )
                        | _                                                                        -> None
                    with e -> 
                        printfn "%A" e
                        None
            
                let createDocs lytNm txt =
                    txt
                    |> String.splitByChar '\n'
                    |> Seq.choose (createDocO lytNm)
                    |> Seq.map (fun (a,b) -> AF.newDoc a (lazy b) )
            
                let getText lytNm txtName =
                    match txtName with
                    | Identifier id -> let plg, nm = splitName lytNm id 
                                       AF.tryGetViw plg nm
                                       |> Option.map (fun viw -> Doc.TextView viw.viwView    )
                                       |> Option.defaultWith (fun () -> 
                                       AF.tryGetVar plg nm
                                       |> Option.map (fun var -> Doc.TextView var.varVar.View)
                                       |> Option.defaultWith (fun () -> Html.text id))
                    | txt           -> Html.text txt
            
                let inputFile lytNm attrs labelName actName doc =
                    splitName lytNm actName
                    ||> AF.tryGetAct
                    |> Option.map(fun act -> 
                        Html.div (getAttrs lytNm attrs) [
                            Html.div                [ attr.``class`` "input-group"       ] [
                                Html.span           [ attr.``class`` "input-group-btn"   ] [ 
                                    Html.label      [ attr.``class`` "btn"               ] [ 
                                        getText lytNm labelName
                                        Html.input  [ attr.``class`` "form-control" 
                                                      attr.``type`` "file" 
                                                      Attr.Style "display" "none" 
                                                      Html.on.click (fun el ev -> el?value <- "")
                                                      Html.on.change(fun el ev -> act.actFunction |> AF.callFunction el () )
                                                      ] []
                                    ]
                                ]
                                (if doc <> "" then singleDoc lytNm [ doc ] else Doc.Empty)
                            ]
                        ]
                    ) |> Option.defaultWith(fun () ->  sprintf "Action not found %s" actName |> errDoc )
            
                let inputLabel lytNm attrs labelName varName =
                    splitName  lytNm varName
                    ||> AF.tryGetVar
                    |> Option.map(fun var -> 
                        Html.div (getAttrs lytNm attrs) [
                            Html.div      [ attr.``class`` "input-group"       ] [
                                Html.span [ attr.``class`` "input-group-addon" ] [ getText lytNm labelName ]
                                Doc.Input [ attr.``class`` "form-control"      ]   var.varVar
                            ]
                        ]
                    ) |> Option.defaultWith(fun () ->  sprintf "Var not found %s" varName |> errDoc )
            
                let none x = Html.span [][]
            
                let addLayout (lyt:LayoutEngine) =
                    lyt.lytDefinition.View |> View.Sink(fun txt ->
                        AF.plugIns.Add { 
                            plgName    = lyt.lytName
                            plgVars    = [| AF.newVar "Layout" lyt.lytDefinition  |]
                            plgViews   = [|                                       |]
                            plgDocs    = [| yield! createDocs lyt.lytName txt
                                            yield  AF.newDocF "InputFile"  <| AF.FunDoc4(inputFile  lyt.lytName, "attrs", "Label", "Action", "[Doc]")
                                            yield  AF.newDocF "InputLabel" <| AF.FunDoc3(inputLabel lyt.lytName, "attrs", "Label", "Var"            )
                                            yield  AF.newDocF "none"       <| AF.FunDoc1(none      , "x"                                )
                                         |]
                            plgActions = [|                                       |]
                            plgQueries = [|                                       |]
                        }
                        AF.mainDocV.Set AF.mainDocV.Value
                    )
            
                let newLyt name lyt = {
                    lytName       = name
                    lytDefinition = Var.Create lyt
                }
    
    //#define WEBSHARPER
    
    
        module Test =
            [< SPAEntryPoint >]
            let main() = AppFramework.getMainDoc.Value |> Doc.Run JS.Window.Document.Body 
        
////-d:FSharpStation1542289473557 -d:WEBSHARPER
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
/// Root namespace for all code
//#define FSharpStation1542289473557
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
                
            
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
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
                    div [ on.afterRender (fun elchild ->
                             async {
                                 do! loader
                                 let editor        = Editor.Create elchild.ParentElement monc.options monc.overrides
                                 ResizeObserver.addResizeObserver editor.Layout elchild.ParentElement
                                 elchild.ParentNode.RemoveChild elchild |> ignore
                                 monc.editorO     <- Some editor
                                 monc.onRender |> Option.iter (fun onrender -> onrender editor)
                                 monc.var |> bindVarEditor editor.OnDidChangeModelContent editor.GetValue editor.SetValue monc.onChange
                                 //monc.disabled |> View.Sink (fun dis -> editor.SetOption("readOnly", if dis then "nocursor" :> obj else false :> obj) )
                             } |> Async.Start
                          )    
                        ] []
                let inline setVar   v   monc = { monc with var       = v      }
                let inline onChange f   monc = { monc with onChange  = f      }
                let inline onRender f   monc = { monc with onRender  = Some f }
                let inline disabled dis monc = { monc with disabled  = dis    }
                let inline var          monc = monc.var
                let newText(v:string)             = newVar (Var.Create v)
                let newVarO(v:Var<string option>) = Var.Lens v (Option.defaultValue "") (fun sO s -> sO |> Option.map (fun _ -> s) )
                                                    |> newVar
                                                    |> disabled(V (Option.isNone v.V))
            
    
        //#define WEBSHARPER
        
        [< JavaScriptExport >]
        module TestingJS =
        
            module Monaco =
                open WebSharper.UI
                open WebSharper.UI.Html
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
            
                [< SPAEntryPoint >]
                let main() =
                    let var = Var.Create "Hello there.\nHello there.\nHello there.\nHello there.\n"
                    let monaco       = monacoNew    <| var
                                                    <| Some (V(if var.V = "" then [||] else transformAnnotations annotationsV.V))
                                                    <| None
                                                    <| None
                    div [] [
                        div [ attr.style "height: 400px; width: 800px" ] [ monaco |> Monaco.render ]
                        div [] [ text "These are the annotations that create tooltips, warnings and errors:" ]
                        Doc.InputAreaV [ attr.style "height: 100px; width: 600px" ] annotationsV.V
                        div [] [ text var.V           ]
                    ]
                    |> Doc.Run JS.Document.Body
                    
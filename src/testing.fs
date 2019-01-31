////-d:FSharpStation1548758124776 -d:WEBSHARPER
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
//#define FSharpStation1548758124776
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
            
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            module Pojo =
                let addProp prop (pojo:JSObject) = pojo.Add prop ; pojo
                
                let newPojo props =
                    let pojo = JSObject()
                    if IsClient then
                        props |> Seq.iter (swap addProp pojo >> ignore)
                    pojo
            
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
                
            
            module Element =
                let  findRootElement (e:Dom.Element) =
                    if isUndefined e.GetRootNode then JS.Document.Body
                    else
                        let root = e.GetRootNode()
                        if isUndefined root?body 
                        then root.FirstChild :?> Dom.Element
                        else root?body  |> unbox<Dom.Element>
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
            
            module CodeMirror =
                open WebSharper.UI.Html
            
                type Pos               = { line : int ; ch  : int }
                let inline cmPos(l, c) = { line = l   ; ch  = c   }
                
                type AnchorHead = { anchor: Pos ; head : Pos }
            
                type Editor() =
                    do ()
                  with
                    [< Inline "$global.CodeMirror($_elt, $_ops)">] static member SetupEditor _elt _ops                     : Editor          = X<_>
                    [< Inline "$cdmr.getValue()"                >] member cdmr.GetValue()                                  : string          = X<_>
                    [< Inline "$cdmr.setValue($_v)"             >] member cdmr.SetValue(_v:string)                         : unit            = X<_>
                    [< Inline "$cdmr.refresh()"                 >] member cdmr.Refresh()                                   : unit            = X<_>
                    [< Inline "$cdmr.setOption($_o, $_v)"       >] member cdmr.SetOption(_o:string, _v:obj)                : unit            = X<_>
                    [< Inline "$cdmr.getOption($_o)"            >] member cdmr.GetOption(_o:string)                        : obj             = X<_>
                    [< Inline "$cdmr.getCursor()"               >] member cdmr.GetCursor()                                 : Pos             = X<_>
                    [< Inline "$cdmr.setCursor($_line, $_col)"  >] member cdmr.SetCursor(_line:int, _col:int)              : unit            = X<_>
                    [< Inline "$cdmr.performLint()"             >] member cdmr.PerformLint()                               : unit            = X<_>
                    [< Inline "$cdmr.focus()"                   >] member cdmr.Focus()                                     : unit            = X<_>
                    [< Inline "$cdmr.getLine($_l)"              >] member cdmr.GetLine(_l:int)                             : string          = X<_>
                    [< Inline "$cdmr.getDoc().clearHistory()"   >] member cdmr.ClearHistory()                              : unit            = X<_>
                    [< Inline "$cdmr.on($_event, $_f)"          >] member cdmr.On(_event: string, _f:(Editor * obj)->unit) : unit            = X<_>
                    [< Inline "$cdmr.on($_event, $_f)"          >] member cdmr.On(_event: string, _f: Editor       ->unit) : unit            = X<_>
                    [< Inline "$cdmr.addKeyMap($_keyMap)"       >] member cdmr.AddKeyMap(_keyMap: obj)                     : unit            = X<_>
                    [< Inline "$cdmr.getWrapperElement()"       >] member cdmr.GetWrapperElement()                         : Dom.Element     = X<_>
                    [< Inline "$cdmr.somethingSelected()"       >] member cdmr.SomethingSelected()                         : bool            = X<_>
                    [< Inline "$cdmr.getSelection()"            >] member cdmr.GetSelection()                              : string          = X<_>
                    [< Inline "$cdmr.listSelections()"          >] member cdmr.ListSelections()                            : AnchorHead[]    = X<_>
                    [< Inline "$cdmr.findWordAt($_p)"           >] member cdmr.FindWordAt(_p:Pos)                          : AnchorHead      = X<_>
                    [< Inline "$cdmr.findTokenAt($_p)"          >] member cdmr.FindTokenAt(_p:Pos)                         : AnchorHead      = X<_>
                    [< Inline "$cdmr.posFromIndex($_i)"         >] member cdmr.PosFromIndex(_i:int)                        : Pos             = X<_>
                    [< Inline "$cdmr.indexFromPos($_p)"         >] member cdmr.IndexFromPos(_p:Pos)                        : int             = X<_>
                    [< Inline "$cdmr.getRange($_f, $_t)"        >] member cdmr.GetRange(_f, _t)                            : string          = X<_>
                    [< Inline "$cdmr.replaceSelection($_v, $_s)">] member cdmr.ReplaceSelection(_v:string, _s:string)                        = ()
                    [< Inline "while($cdmr.getAllMarks().length > 0) { $cdmr.getAllMarks()[0].clear() }" >] member cdmr.RemoveMarks() : unit = X<_>
                    [< Inline "$cdmr.getDoc().markText({line:$_fl, ch:$_fc}, {line:$_tl, ch:$_tc}, {className: $_className, title: $_title})" >]
                    member cdmr.MarkText (_fl:int,_fc:int) (_tl:int,_tc:int) (_className: string) (_title: string): unit       = X<_>
                
                [<NoComparison ; NoEquality>]
                type CodeMirror = {
                    var             : Var<string>
                    onChange        : (string -> unit)
                    onRender        : (Editor -> unit) option
                    mutable editorO :  Editor option
                    disabled        : View<bool>
                }
                
                let newVar var = 
                    { var      = var 
                      onChange = ignore
                      onRender = None
                      editorO  = None
                      disabled = V false
                    }
                let includes =
                   [| "/EPFileX/codemirror/scripts/codemirror/codemirror.js"             
                      //"/EPFileX/codemirror/scripts/intellisense.js"                      
                      "/EPFileX/codemirror/scripts/codemirror/codemirror-intellisense.js"
                      "/EPFileX/codemirror/scripts/codemirror/codemirror-compiler.js"    
                      "/EPFileX/codemirror/scripts/codemirror/mode/none.js"            
                      "/EPFileX/codemirror/scripts/codemirror/mode/fsharp.js"            
                      "/EPFileX/codemirror/scripts/codemirror/mode/css.js"            
                      "/EPFileX/codemirror/scripts/codemirror/mode/javascript.js"            
                      "/EPFileX/codemirror/scripts/codemirror/mode/markdown.js"            
                      "/EPFileX/codemirror/scripts/addon/search/searchcursor.js"          
                      "/EPFileX/codemirror/scripts/addon/search/search.js"          
                      "/EPFileX/codemirror/scripts/addon/search/jump-to-line.js"          
                      "/EPFileX/codemirror/scripts/addon/dialog/dialog.js"          
                      "/EPFileX/codemirror/scripts/addon/edit/matchbrackets.js"          
                      "/EPFileX/codemirror/scripts/addon/selection/active-line.js"       
                      "/EPFileX/codemirror/scripts/addon/display/fullscreen.js"          
                      "/EPFileX/codemirror/scripts/addon/hint/show-hint.js"          
                      "/EPFileX/codemirror/scripts/addon/lint/lint.js"          
                   |]        
                let render cdmr             =
                    div [ on.afterRender (fun elchild ->
                                 async {
                                     do! LoadFiles.LoadFilesAsync includes
                                     let editor        = Editor.SetupEditor elchild.ParentElement (JSObject())
                                     elchild.ParentNode.RemoveChild elchild |> ignore
                                     cdmr.editorO     <- Some editor 
                                     cdmr.onRender |> Option.iter (fun onrender -> onrender editor)
                                     cdmr.var      |> GenEditor.bindVarEditor (fun f -> editor.On("changes",(f:Editor * obj -> unit)) )  editor.GetValue (fun v -> editor.SetValue v ; editor.ClearHistory() ) cdmr.onChange
                                     cdmr.disabled |> View.Sink (fun dis -> editor.SetOption("readOnly", if dis then "nocursor" :> obj else false :> obj) )
                                 } |> Async.Start
                              )    
                        ] []
                let inline setVar   v   cdmr = { cdmr with var       = v      }
                let inline onChange f   cdmr = { cdmr with onChange  = f      }
                let inline onRender f   cdmr = { cdmr with onRender  = Some f }
                let inline disabled dis cdmr = { cdmr with disabled  = dis    }
                let inline var          cdmr = cdmr.var
                let newText(v:string)             = newVar (Var.Create v)
                let newVarO(v:Var<string option>) = Var.Lens v (Option.defaultValue "") (fun sO s -> sO |> Option.map (fun _ -> s) )
                                                    |> newVar
                                                    |> disabled(V (Option.isNone v.V))
            
                module Hint =
                    type Hint = {
                        text        : string
                        displayText : string
                        className   : string
                    }
                    
                    type Response  = {
                        list           : Hint []
                        from           : Pos   
                        ``to``         : Pos   
                    }
                    
                    type Func      = FuncWithArgs<Editor * (Response -> unit) * obj,  unit>
                    
                    type Options   = {
                        hint           : Func
                        completeSingle : bool   
                        container      : Dom.Element
                    }
                    
                    [< Inline "($_v.hint.async = 1, $_ed.showHint($_v))"          >]
                    let showHint_ (_ed:Editor) _v : unit       = X<_>
                    let showHints ( ed:Editor) getHints completeSingle _ =
                        showHint_   ed
                            {  completeSingle = completeSingle
                               hint           = Func getHints
                               container      = ed.GetWrapperElement() |> Element.findRootElement
                            }
            
                module Lint =
                    type Response  = {
                        message        : string
                        severity       : string
                        from           : Pos   
                        ``to``         : Pos   
                    }
                    
                    type Func      = FuncWithArgs<string * (Response[] -> unit) * obj * Editor,  unit>
                    
                    [< Inline "($_ed.setOption('lint', { async: 1, getAnnotations: $_f, container: $_elm }))"          >]
                    let setLint_(_ed:Editor) (_f:Func) (_elm:Dom.Element)  : unit = X<_>
                    let setLint ( ed:Editor)   getAnnotations       = 
                        setLint_  ed (Func getAnnotations) (ed.GetWrapperElement() |> Element.findRootElement)
                    
                                    
            [< JavaScriptExport >]
            module CodeMirrorGenAdapter =
                open CodeMirror
                open GenEditor
                open WebSharper.UI.Html
            
                type CodeMirrorRT = {
                    mutable editorO     : CodeMirror.Editor option
                    mutable onChange    : obj -> unit
                    mutable uri         : string
                    options             : obj
                    overrides           : obj
                }
            
                let iterEditor cdmRT f =
                    match cdmRT.editorO with
                    | None    -> ()
                    | Some ed -> f ed
            
                let mapEditor cdmRT f =
                    match cdmRT.editorO with
                    | None    -> None
                    | Some ed -> Some (f ed)
            
                let bindEditor cdmRT f =
                    match cdmRT.editorO with
                    | None    -> None
                    | Some ed -> f ed
            
                let posGen2Ed (p:GenEditor.Position) : Pos = 
                    {
                        ch   = p.col  - 1
                        line = p.line - 1
                    }
            
                let posEd2Gen (p:Pos) : GenEditor.Position = 
                    {
                        col  = p.ch   + 1
                        line = p.line + 1
                    }
            
                //let convertGlyphChar =
                //    function
                //    | "C" -> CompletionItemKind.Class
                //    | "E" -> CompletionItemKind.Enum
                //    | "S" -> CompletionItemKind.Value
                //    | "I" -> CompletionItemKind.Interface
                //    | "N" -> CompletionItemKind.Module
                //    | "M" -> CompletionItemKind.Method
                //    | "P" -> CompletionItemKind.Property
                //    | "F" -> CompletionItemKind.Field
                //    | "T" -> CompletionItemKind.Class
                //    | "K" -> CompletionItemKind.Keyword
                //    | _   -> 0 |> unbox
            //
                //type CompletionItemProvider(autoComplete: GenEditor.Position -> Async<Completion[]>) =
                //    do()
                //   with
                //      member __.provideCompletionItems(model:Model, pos:CodeMirror.Position, token:obj, context: obj) =
                //        asyncResultM {
                //            let! comps = autoComplete  { col = pos.column ; line = pos.lineNumber }
                //            return comps 
                //                    |> Array.map(fun (comp:Completion) -> 
                //                        { 
                //                            kind   = convertGlyphChar comp.kind
                //                            label  = comp.label
                //                            detail = comp.detail
                //                        } )
                //        } |> Promise.ofAsyncResultM
                //      member __.resolveCompletionItem(item: CompletionItem, token: obj): CompletionItem = { item with detail = "more details" }
            //
            //
                //type HoverProvider(toolTip: GenEditor.Position -> Async<string option> ) =
                //    do()
                //   with
                //      member __.provideHover(model:Model, pos:CodeMirror.Position, token:obj) =
                //        asyncResultM {
                //            let! desc = toolTip { col = pos.column ; line = pos.lineNumber }
                //            match desc with
                //            | None      -> return (box null |> unbox)
                //            | Some desc ->
                //            return {
                //                    contents = [| { value = desc ; isTrusted = true } |]
                //                    range    = (box null |> unbox)
                //                }
                //        } |> Promise.ofAsyncResultM
            //
                //type DefinitionProvider(declaration: GenEditor.Position -> Async<(Position * string) option> ) =
                //    do()
                //   with
                //        member __.provideDefinition(model: Model, pos: CodeMirror.Position, token: obj) =
                //            asyncResultM {
                //                let! declO =  declaration { col = pos.column ; line = pos.lineNumber }
                //                match declO with
                //                | None             -> return box null |> unbox
                //                | Some (pos, file) ->
                //                return {
                //                    range = {
                //                                startColumn     = pos.col
                //                                endColumn       = pos.col
                //                                startLineNumber = pos.line
                //                                endLineNumber   = pos.line
                //                    }
                //                    uri   = Uri.Parse file
                //                }
                //            } |> Promise.ofAsyncResultM
            
                let getToolTipFunction genE showToolTip =
                    genE.toolTip |> Option.map (fun getToolTip ->
                        let getWordO p = genE.editorHook.getWordAt p |> Option.bind ( fun (w, p) -> if w.Trim() = "" then None else Some (w, p)) 
                        fun (ed:Editor) -> 
                            async {
                                let p1, p2 =    if ed.SomethingSelected() then 
                                                    let sels = ed.ListSelections()
                                                    (sels.[0].anchor |> posEd2Gen, sels.[0].head |> posEd2Gen) else
                                                let p      = ed.GetCursor() |> posEd2Gen
                                                getWordO p
                                                |> Option.orElseWith ( fun ()     -> getWordO { p with col = p.col - 1 } ) 
                                                |> Option.map        ( fun (w, p) -> p, { p with col = p.col + w.Length }) 
                                                |> Option.defaultWith( fun ()     -> p, { p with col = p.col + 2        })
                                let! tipO = getToolTip genE p1
                                tipO |> Option.iter (fun tip -> showToolTip(p1, p2, tip))
                            } |> Async.Start
                    ) |> Option.defaultValue ignore
            
                let generateDoc cdmRT genE onRender =
                    async {
                        //do! CodeMirror.loader
                        return
                            div [ on.afterRender (fun elchild  ->
                                async {
                                    do! LoadFiles.LoadFilesAsync includes
                                    let editor        = Editor.SetupEditor elchild.ParentElement cdmRT.options
                                    elchild.ParentNode.RemoveChild elchild |> ignore
                                    cdmRT.editorO     <- Some editor
                                    onRender                  editor
                                    editor.On("changes", fun (ed: Editor, changes) -> cdmRT.onChange (box (ed, changes)) )
                                    //genE.declaration    |> Option.iter (fun f -> Editor.RegisterDefinitionProvider    ("fsharp", new DefinitionProvider    (f genE) ) |> ignore )
                                    //genE.autoCompletion |> Option.iter (fun f -> Editor.RegisterCompletionItemProvider("fsharp", new CompletionItemProvider(f genE) ) |> ignore )
                                } |> Async.Start
                            )    
                          ] []
                    } |> Doc.Async
            
                let getValue  cdmRT     = mapEditor  cdmRT <| (fun ed -> ed.GetValue()   ) |> Option.defaultValue "" 
                let setValue  cdmRT txt = iterEditor cdmRT <|  fun ed -> ed.SetValue txt 
                let getWordAt cdmRT pos = bindEditor cdmRT <|  fun ed -> 
                    let anchorHead = ed.FindWordAt (posGen2Ed pos)
                    if isUndefined anchorHead || anchorHead.anchor = anchorHead.head then None else        
                    (ed.GetRange(anchorHead.anchor, anchorHead.head)
                   , posEd2Gen anchorHead.anchor)
                    |> Some
            
                let showAnnotations cdmRT ans =
                    iterEditor cdmRT <| fun ed ->
                        let ms =
                            ans
                            |> Seq.map (fun (an:Annotation) ->
                                {
                                    Lint.Response.message   = an.message
                                    Lint.Response.severity  = match an.severity with 
                                                                | Error   -> "error"
                                                                | Warning -> "warning"
                                                                | _       -> "info"
                                    Lint.Response.from      = posGen2Ed an.startP
                                    Lint.Response.``to``    = posGen2Ed an.endP
                                }
                            )
                            |> Seq.toArray
                        Lint.setLint ed (fun (_t, send, _o, _ed) -> send ms)
            
                let setDisabled cdmRT dis =
                    iterEditor cdmRT <| fun ed ->
                        ed.SetOption("readOnly", if dis then "nocursor" :> obj else false :> obj) 
            
                let indexFromPos cdmRT p =
                    mapEditor cdmRT <| fun ed ->
                        posGen2Ed p
                        |> ed.IndexFromPos
                    |> Option.defaultValue -1
            
                let posFromIndex cdmRT i =
                    mapEditor cdmRT <| fun ed ->
                        ed.PosFromIndex i
                        |> posEd2Gen
                    |> Option.defaultValue { col = 1 ; line = 1 }
            
                let newHook cdmRT = {
                    generateDoc     =            generateDoc     cdmRT 
                    getValue        = fun ()  -> getValue        cdmRT
                    setValue        =            setValue        cdmRT
                    getWordAt       =            getWordAt       cdmRT
                    indexFromPos    =            indexFromPos    cdmRT
                    posFromIndex    =            posFromIndex    cdmRT
                    showAnnotations =            showAnnotations cdmRT
                    setDisabled     =            setDisabled     cdmRT
                    getUri          = fun ()  -> cdmRT.uri
                    setUri          = fun uri -> cdmRT.uri <- uri
                    hookOnChange    = fun f   -> cdmRT.onChange <- f
                }
            
                let newRT options overrides = {
                    editorO      = None
                    onChange     = ignore
                    options      = options   
                    overrides    = overrides 
                    uri          = ""
                }
            
                let newVar options overrides v =
                    newRT  options overrides 
                    |> newHook
                    |> GenEditor.newVar <|   v
                            
    
        //#define WEBSHARPER
        
        [< JavaScriptExport >]
        module TestingJS =
        
        
            module CodeMirror =
                open WebSharper.UI
                open WebSharper.UI.Html
                open CodeMirror
            
                // let codeMirrorNew    (var           : Var<string>                         ) 
                //                      (annotationsWO : View<Lint.Response []>        option) 
                //                      (showToolTipO  :(string -> int -> int -> unit) option) 
                //                      (getHintsO     :(((string * string * string) [] -> int * int -> int * int -> unit) 
                //                                    -> string -> int -> int -> unit) option) =
                
                //     let setDirtyCond() = ()
                //     let getHints    _  = ()
            
                //     let showToolTip (ed:CodeMirror.Editor) =
                //         showToolTipO |> Option.iter(fun showToolTipF ->
                //             let  pos   = ed.GetCursor()
                //             let  l     = ed.GetLine pos.line
                //             showToolTipF l pos.line pos.ch
                //         )
                        
                //     let getHints    (ed:CodeMirror.Editor, callback, _) =
                //         getHintsO |> Option.iter(fun getHintsF ->
                //             let  pos   = ed.GetCursor()
                //             let  l     = ed.GetLine pos.line
                //             let showHints hints posFrom posTo =
                //                 let hs = hints
                //                          |> Array.map(fun (txt, dsp, cls) -> 
                //                             {
                //                                 Hint.Hint.text        = txt
                //                                 Hint.Hint.displayText = dsp
                //                                 Hint.Hint.className   = cls
                //                             })
                //                 callback {
                //                     Hint.Response.list   = hs
                //                     Hint.Response.from   = cmPos posFrom
                //                     Hint.Response.``to`` = cmPos posTo
                //                 }
                //             getHintsF showHints l pos.line pos.ch
                //         )
                        
                //     CodeMirror.newVar var
                //     |> onRender(fun ed ->
                //           ed.AddKeyMap({  F2              = showToolTip
                //                           F11             = fun ed -> ed.SetOption("fullScreen", ed.GetOption("fullScreen") |> unbox |> not) 
                //                           Tab             = fun ed -> ed.ReplaceSelection("    ", "end")
                //                           ``Ctrl-Space``  =                                               Hint.showHints ed getHints false
                //                           ``.``           = (fun _ -> ed.ReplaceSelection(".", "end")) >> Hint.showHints ed getHints false
                //                        })
                //           ed.SetOption("mode"         , "fsharp"  )
                //           ed.SetOption("theme"        , "rubyblue")
                //           ed.SetOption("lineNumbers"  , true      )
                //           ed.SetOption("matchBrackets", true      )
                //           ed.SetOption("gutters"      , [| "CodeMirror-lint-markers" |])
                //           ed.On("dblclick", showToolTip)
                //           annotationsWO
                //           |> Option.iter(fun annotationsW ->
                //               View.Sink       (fun _ -> ed.PerformLint() |> ignore) annotationsW
                //               Lint.setLint ed (fun (_t, send, _o, _ed) -> annotationsW |> View.Get send)
                //           )
                //     )
                    
                // let transformAnnotations msgs =
                //     let rex  = """(Err|Warn|Info) \((\d+)\,\s*(\d+)\) - \((\d+)\,\s*(\d+)\)\: "([^"]+?)"\.""" //"
                //     match msgs with
                //     | REGEX rex "g" m -> m
                //     | _               -> [||]
                //     |> Array.choose (fun v ->
                //         match v with
                //         | REGEX rex "" [| _ ; ty ; fl;     fc;     tl;     tc; msg |] 
                //                  -> Some (ty, int fl, int fc, int tl, int tc, msg)
                //         | _      -> None
                //     )
                //     |> Array.map (fun (ty, fl, fc, tl, tc, msg) ->
                //             { Lint.Response.message  = msg
                //               Lint.Response.severity = match ty with "Err" -> "error" | "Warn" -> "warning" |_-> "info"
                //               Lint.Response.from     = cmPos(fl - 1, fc - 1) 
                //               Lint.Response.``to``   = cmPos(tl - 1, tc - 1)
                //             }
                //       )        
                        
                // [< SPAEntryPoint >]
                // let main() =
                //     let annotationsV = Var.Create "Err (1, 7) - (1, 12): \"This shows over there as an error\".\nWarn (2, 7) - (2, 12): \"This shows over there as a warning\".\nInfo (3, 7) - (3, 12): \"This shows over there as information\"."
                //     let codeMirror = codeMirrorNew  <| Var.Create "Hello there.\nHello there.\nHello there.\n"
                //                                     <| Some (V(transformAnnotations annotationsV.V))
                //                                     <| None
                //                                     <| None
                //     div [] [
                //         div [] [ codeMirror |> CodeMirror.render ]
                //         div [] [ text codeMirror.var.V           ]
                //         text "These are the annotations that create tooltips, warnings and errors:"
                //         Doc.InputAreaV [] annotationsV.V
                //     ]
                //     |> Doc.Run JS.Document.Body
                    
                open GenEditor
            
                let annotationsV = Var.Create "Err (1, 7) - (1, 12): \"This shows over there as an error\".\nWarn (2, 7) - (2, 12): \"This shows over there as a warning\".\nInfo (3, 7) - (3, 12): \"This shows over there as information\".\nHint (4, 7) - (4, 12): \"This shows over there as a hint\"."
                let transformAnnotations msgs =
                    let rex  = """(Err|Warn|Info|Hint) \((\d+)\,\s*(\d+)\) - \((\d+)\,\s*(\d+)\)\: "([^"]+?)"\.""" //"
                    match msgs with
                    | REGEX rex "g" m -> m
                    | _               -> [||]
                    |> Seq.choose (fun v ->
                        match v with
                        | REGEX rex "" [| _ ; ty ; fl;     fc;     tl;     tc; msg |] 
                                 -> Some (ty, int fl, int fc, int tl, int tc, msg)
                        | _      -> None
                    )
                    |> Seq.map (fun (ty, fl, fc, tl, tc, msg) ->
                            { message  = msg
                              severity = match ty with "Err" -> Error | "Warn" -> Warning  | "Hint" -> Hint | s -> Other s
                              startP   = { col = fc ; line = fl }
                              endP     = { col = tc ; line = tl }
                            }
                      )
            
                let showToolTip (p1,p2,str) =
                    annotationsV.Value
                  + sprintf "\nInfo (%d, %d) - (%d, %d): %A." p1.line p1.col p2.line p2.col str
                    |> annotationsV.Set
                    
                let codeMirrorNew (var : Var<string> ) =
                    CodeMirrorGenAdapter.newVar
                        (Pojo.newPojo
                            [
                                "mode"          => "fsharp"  
                                "theme"         => "rubyblue"
                                "lineNumbers"   => true      
                                "matchBrackets" => true      
                                "gutters"       => [| "CodeMirror-lint-markers" |]
                            ]
                        )
                        null
                        var
            
                let getToolTip (ged: GenEditor.GenEditor<_>) (pos:GenEditor.Position) = async {
                    match ged.editorHook.getWordAt pos with
                    | None           -> return None
                    | Some (word, _) -> 
                    return word |> sprintf "The word is: %s" |> Some
                }
            
                let declaration (ged: GenEditor.GenEditor<CodeMirror.Editor>) (pos:GenEditor.Position) = async {
                    match ged.editorHook.getWordAt pos with
                    | None           -> return None
                    | Some (word, _) -> 
                    let text = ged.editorHook.getValue()
                    let i    = text.IndexOf word
                    if i < 0 then return None else
                    let p    = ged.editorHook.posFromIndex i
                    return Some(p, ged.editorHook.getUri())
                }
            
                let autoCompletion (ged: GenEditor.GenEditor<CodeMirror.Editor>) (pos:GenEditor.Position) = async {
                    return
                        [|
                            { kind = "F" ; label = "Hello"   ; detail = "" ; replace = (pos, pos) }
                            { kind = "F" ; label = "How"     ; detail = "" ; replace = (pos, pos) }
                            { kind = "F" ; label = "Are"     ; detail = "" ; replace = (pos, pos) }
                            { kind = "F" ; label = "You"     ; detail = "" ; replace = (pos, pos) }
                        |]
                }
            
                [< SPAEntryPoint >]
                let main() =
                    let var        = Var.Create "Hello there.\nHello there.\nHello there.\nHello there.\n"
                    let codeMirror = { codeMirrorNew var with 
                                        annotations    = V (transformAnnotations annotationsV.V)
                                        toolTip        = Some getToolTip
                                        declaration    = Some declaration
                                        autoCompletion = Some autoCompletion
                                     }
                                     |> GenEditor.onRender (fun ged ->
                                        ged.editorO
                                        |> Option.iter (fun ed ->
                                            let toolTips = CodeMirrorGenAdapter.getToolTipFunction ged showToolTip
                                            ed.AddKeyMap(
                                              Pojo.newPojo [  
                                                "F2"         =>  toolTips
                                                "F11"        =>  fun _ -> ed.SetOption("fullScreen", ed.GetOption("fullScreen") |> unbox |> not) 
                                                "Tab"        =>  fun _ -> ed.ReplaceSelection("    ", "end")
                                                //"Ctrl-Space" =>                                               Hint.showHints ed getHints false
                                                //"."          => (fun _ -> ed.ReplaceSelection(".", "end")) >> Hint.showHints ed getHints false
                                            ])
                                            ed.On("dblclick", toolTips)
                                        )
                                     )
                    async {
                        do! [|
                                "/EPFileX/codemirror/content/editor.css"                   
                                "/EPFileX/codemirror/content/codemirror.css"               
                                "/EPFileX/codemirror/scripts/addon/display/fullscreen.css" 
                                "/EPFileX/codemirror/scripts/addon/dialog/dialog.css"      
                                "/EPFileX/codemirror/scripts/addon/hint/show-hint.css"     
                                "/EPFileX/codemirror/scripts/addon/lint/lint.css"          
                                "/EPFileX/codemirror/content/theme/rubyblue.css"                   
                            |] |> LoadFiles.LoadFilesAsync
                        return
                            div [] [
                                div [ attr.style "height: 400px; width: 800px" ] [ codeMirror |> GenEditor.generateDoc ]
                                div [] [ text "These are the annotations that create tooltips, warnings and errors:" ]
                                Doc.InputAreaV [ attr.style "height: 100px; width: 600px" ] annotationsV.V
                                div [] [ text var.V ]
                            ]
                    }
                    |> Doc.Async
                    |> Doc.Run JS.Document.Body
                            
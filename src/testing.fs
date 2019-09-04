#nowarn "3242"
////-d:FSharpStation1567214137408 -d:WEBSHARPER
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
/// Root namespace for all code
//#define FSharpStation1567214137408
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
        
            
            type StringId<'T> = StringId of string 
            with
                member this.Id = match this with StringId v -> v
            
            type GuidId<'T> = GuidId of System.Guid
            with
                member this.Id = match this with GuidId v -> v
            
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
            module Test =
                open FsRoot
            
                let something() = printfn "do something"
            
                [< SPAEntryPoint >]
                let main() =
                    let d = JS.Window.Document.CreateElement "div"
                    let _ = JS.Window.Document.Body.AppendChild d
                    d?outerHTML <- AppFrameworkTemplate.html
                    AppFramework.getMainDoc.Value 
                    |> Doc.RunAppend JS.Window.Document.Body 
            
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
            
                let wrapUI elem f = (fun a b c -> f a b c >> Seq.singleton >> elem [] )
                let simpleButton txt f = Doc.Button txt [] (f >> ignore)
                let newButton   f = simpleButton "New" f
                let orderedList l = ol [] [ l ]
            
            module AF =
                open FsRoot
                open AppFramework
            
                type PlugInBuilder() =
                    member __.Zero() = {
                        plgName    = "Main"
                        plgVars    = [| |]  
                        plgViews   = [| |]  
                        plgDocs    = [| |]  
                        plgActions = [| |]
                        plgQueries = [| |]
                    }
                    member this.Yield(()) = this.Zero()
                    member __.For(coll:seq<_>, func) =
                        let ie = coll.GetEnumerator()
                        while ie.MoveNext() do
                            func ie.Current
                    [<CustomOperation("name"   )>]
                    member __.Name  (plg:PlugIn, name     ) = { plg with plgName    = name }
                    [<CustomOperation("var"    )>]  
                    member __.AddVar(plg:PlugIn, name, var) = { plg with plgVars    = [| newVar name var |] |> Array.append    plg.plgVars    }
                    [<CustomOperation("doc"    )>]  
                    member __.AddDoc(plg:PlugIn, name, doc) = { plg with plgDocs    = [| newDoc name doc |] |> Array.append    plg.plgDocs    }
                    [<CustomOperation("docDyn" )>]  
                    member __.AddDocF(plg:PlugIn, name, docF)= { plg with plgDocs    = [| newDoc name (lazy LayoutEngine.turnToView docF) |] |> Array.append    plg.plgDocs    }
                    [<CustomOperation("act"    )>]
                    member __.AddAct(plg:PlugIn, name, act) = { plg with plgActions = [| newAct name act |] |> Array.append    plg.plgActions }
                    [<CustomOperation("actOpt"    )>]
                    member __.AddActO(plg:PlugIn, name,actO) = match actO with 
                                                               | Some act -> { plg with plgActions = [| newAct name act |] |> Array.append    plg.plgActions }
                                                               | None -> plg
                    [<CustomOperation("mainDoc")>]
                    member __.InsDoc(plg:PlugIn, name, doc) = { plg with plgDocs    = [| newDoc name doc |] |> Array.append <| plg.plgDocs    }
                    [<CustomOperation("view"   )>]  
                    member __.AddViw(plg:PlugIn, name, viw) = { plg with plgViews   = [| newViw name viw |] |> Array.append    plg.plgViews   }
                    [<CustomOperation("merge"  )>]
                    member __.Merge (plg:PlugIn, prefix, p2:PlugIn) = 
                        { plg with
                                plgVars    = Array.append plg.plgVars    (p2.plgVars    |> Array.map (fun v -> { v with varName = prefix + v.varName } ) )
                                plgViews   = Array.append plg.plgViews   (p2.plgViews   |> Array.map (fun w -> { w with viwName = prefix + w.viwName } ) )
                                plgDocs    = Array.append plg.plgDocs    (p2.plgDocs    |> Array.map (fun d -> { d with docName = prefix + d.docName } ) )
                                plgActions = Array.append plg.plgActions (p2.plgActions |> Array.map (fun a -> { a with actName = prefix + a.actName } ) )
                                plgQueries = Array.append plg.plgQueries (p2.plgQueries |> Array.map (fun q -> { q with qryName = prefix + q.qryName } ) )
                        }
            
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
                    getDoc : View<'K option> -> Var<'D> -> Doc
                    def    : 'D
                } with 
                    member this.PlugIn selectorLens = plugin {
                        doc    "list" (lazy this.doc         )
                        doc    "cur"  (lazy this.CurrentDoc  )
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
                    member this.CurrentDoc   = this.getDoc this.selV.View this.CurrentV
            
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
            
            module LM =
                open Util
            
                let getDoc keyF def newF elUI =
                    let elements  : ListModel<_,_> = ListModel.Create keyF []
                    let selected0 : Var<_ option>  = Var.Create None
                    let selectedV : Var<_ option>  = 
                        Var.Make   
                            selected0.View 
                            (function Some k when elements.ContainsKey k -> Some k |_-> None
                             >> fun v -> if selected0.Value <> v then selected0.Set v )
                    let addNew () =
                        let n = newF()
                        elements.Add n
                        selectedV.Set (Some <| keyF n)
                        n
                    let delete  k = fun () -> selectedV.Set None ; elements.RemoveByKey k
                    let list      = elements.DocLens (fun k v -> elUI selectedV (delete k) (View.Const (Some k)) v )
                    {
                        AF.elems  = elements
                        AF.doc    = list
                        AF.selV   = selectedV
                        AF.delCur = fun () -> selectedV.Value |> Option.iter (fun k -> delete k () )
                        AF.add    = addNew
                        AF.getDoc = elUI selectedV ignore
                        AF.def    = def
                    }
                let setCurrentDoc docF li = { li with AF.getDoc = docF Util.unselectorV ignore }
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
            
                let elemUI2 elemUI a b c (v:Var<_>) = elemUI a b c (v.Lens snd (fun (i, _) nv -> i, nv ) )
            
                let getDocInt    def newElem elemUI = addNewO newElem 0                          ((+) 1)                             |> LM.getDoc fst (-1               , def) <| elemUI2 elemUI
                let getDocGuid   def newElem elemUI = addNewO newElem (Guid.NewGuid())           (fun _ -> Guid.NewGuid())           |> LM.getDoc fst (       Guid.Empty, def) <| elemUI2 elemUI
                let getDocGuidId def newElem elemUI = addNewO newElem (Guid.NewGuid() |> GuidId) (fun _ -> Guid.NewGuid() |> GuidId) |> LM.getDoc fst (GuidId Guid.Empty, def) <| elemUI2 elemUI
                                                        : AF.ListModelData<GuidId<'C>, GuidId<'C> * 'C>
            
                let setCurrentDoc docF = elemUI2 docF |> LM.setCurrentDoc
            
                let addElements (li:AF.ListModelData<_,_>) elems = elems |> Seq.iter (fun v -> (li.add() |> fst, v) |> li.elems.Add )
            
            module Calculado =
                open FsRoot
                open Html
            
                type Calculado = {
                    id     : GuidId<Calculado>
                    valorA : float
                    valorB : float
                    valorC : float
                }
            
                let newCalc () = {
                    id     = System.Guid.NewGuid() |> GuidId 
                    valorA = 0.
                    valorB = 0.
                    valorC = 0.
                }
            
                let def = { newCalc() with id = System.Guid.Empty |> GuidId }
            
                let calcUI allowDelete (selectedV:Var<_ option>) delete (k:View<_ option>) (calc:Var<Calculado>) =
                    let disabledW = V (Option.isNone k.V              )
                    let selectedW = V (selectedV.V = k.V              )
                    let backColor = V (if selectedW.V then "background-color:lightblue" else "" )
                    div [ attr.styleDyn backColor ; on.click (fun _ _ -> View.Get selectedV.Set k ) ] [
                        Doc.Button "x" [ attr.styleDyn (V (if not allowDelete || disabledW.V then "display:None" else "") ) ] delete
                        Util.textLine <| V(sprintf "(%A, %A, %A)" calc.V.valorA calc.V.valorB calc.V.valorC ) 
                    ]
            
                let calcUIDet allowDelete (selectedV:Var<_ option>) delete (k:View<_ option>) (calc:Var<Calculado>)  =
                    let valorA    = Util.lensFloat2Str (Lens calc.V.valorA)
                    let valorB    = Util.lensFloat2Str (Lens calc.V.valorB)
                    let valorC    = Util.lensFloat2Str (Lens calc.V.valorC)
                    let dup       = V (calc.V.valorA * 2.             )
                    let mult      = V (calc.V.valorA * calc.V.valorB  )
                    let multAdd   = V (mult.V + calc.V.valorC         )
                    let selectedW = V (selectedV.V = k.V              )
                    let disabledW = V (Option.isNone k.V              )
                    let backColor = V (if disabledW.V then "display:none; background-color:lightgray; color:gray" elif selectedW.V then "background-color:lightblue" else "" )
                    div [ attr.styleDyn backColor ; on.click (fun _ _ -> View.Get selectedV.Set k ) ] [
                        Doc.Button "x" [ attr.styleDyn (V (if  not allowDelete || disabledW.V then "display:none" else "") ) ] delete
                        Util.inputLabel [] disabledW "valor A: " valorA
                        Util.inputLabel [] disabledW "valor B: " valorB
                        Util.inputLabel [] disabledW "valor C: " valorC
                        Util.textLine <| V(sprintf "%A = %s * 2"        dup.V       valorA.V                    ) 
                        Util.textLine <| V(sprintf "%A = %s * %s"       mult.V      valorA.V valorB.V           ) 
                        Util.textLine <| V(sprintf "%A = %s * %s + %s"  multAdd.V   valorA.V valorB.V valorC.V  ) 
                    ]
            
                let calcUIEdit (selectedV:Var<_ option>) delete (k:View<_ option>) (calc:Var<Calculado>) =
                    let selectedW = V (selectedV.V = k.V              )
                    V(
                        if selectedW.V 
                        then calcUIDet true  selectedV delete k calc
                        else calcUI    false selectedV delete k calc)
                        |> Doc.BindView id
            
            
                let list0 = LMX.getDocInt             def newCalc (calcUI     false |> Util.wrapUI li )
                let list2 = LMX.getDocGuidId          def newCalc (calcUIDet  true  |> Util.wrapUI li )
                let list3 = LM .getDoc(fun e -> e.id) def newCalc (calcUIEdit       |> Util.wrapUI li )
            
                let list1 = list0 |> LMX.setCurrentDoc (calcUIDet false)
            
                [ newCalc() ; newCalc() ] |> LMX.addElements list1
                [ newCalc() ; newCalc() ] |> LM.addElements  list3
            
                module AF = AppFramework
            
                AF.plugin {
                    name   "Calc"
                    docDyn "main"   (fun _ -> Doc.Concat [ 
                                        Util.orderedList list1.doc
                                        list1.CurrentDoc
                                        Util.orderedList list2.doc
                                        Util.newButton   list2.add
                                        Util.orderedList list3.doc
                                        Util.newButton   list3.add
                                    ])
                    merge  "calc1_" (list1.PlugIn Util.selectorLensInt   )
                    merge  "calc2_" (list2.PlugIn Util.selectorLensGuidId)
                    merge  "calc3_" (list3.PlugIn Util.selectorLensGuidId)
                }
                |> AF.addPlugIn2
            
                LayoutEngine.newLyt "CalcLyt" """
                    split horizontal 0-50-100 AppFramework.AppFwkClient main
                    main div "overflow:auto" Calc.main 
                """
                |> LayoutEngine.addLayout0
            
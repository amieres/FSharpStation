#nowarn "52"
////-d:FSS_SERVER -d:FSharpStation1547097944900 -d:WEBSHARPER
////#cd @"..\projects\StackOverflow\src"
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
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
//#r @"..\..\LayoutEngine\bin\LayoutEngine.dll"
//#r @"..\packages\Owin\lib\net40\Owin.dll"
//#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
//#r @"..\packages\Microsoft.Owin.Hosting\lib\net451\Microsoft.Owin.Hosting.dll"
//#r @"..\packages\Microsoft.Owin.Host.HttpListener\lib\net451\Microsoft.Owin.Host.HttpListener.dll"
//#r @"..\packages\WebSharper.Owin\lib\net461\WebSharper.Owin.dll"
//#r @"..\packages\WebSharper.Owin\lib\net461\HttpMultipartParser.dll"
//#r @"..\packages\Microsoft.Owin.StaticFiles\lib\net451\Microsoft.Owin.StaticFiles.dll"
//#r @"..\packages\Microsoft.Owin.FileSystems\lib\net451\Microsoft.Owin.FileSystems.dll"
//#nowarn "52"
/// Root namespace for all code
//#define FSharpStation1547097944900
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
    
    //#cd @"..\projects\StackOverflow\src"
    
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
    
    //#define WEBSHARPER
    
    [< JavaScript >]
    module StackOverflow =
        //#r "..\..\LayoutEngine\bin\LayoutEngine.dll"
        //#nowarn "1178" "1182" "3180" "52"
        
        [< AutoOpen >]
        module Templating =
            open WebSharper.UI.Templating
            let [< Literal >] rootdir = @"..\website"
        
            let [< Literal >] TemplatesFileName = rootdir + @"\Templates.html"
            type TemplateLib  = Template< TemplatesFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
            
            if IsClient then printfn "%s" TemplatesFileName
         
        open WebSharper
        open WebSharper.JavaScript
        open WebSharper.UI
        open WebSharper.UI.Client
        open WebSharper.UI.Html
        
        module ClientCode =
            [<JavaScriptExport>]
            type [<AbstractClass>] A() = 
                abstract member Doc: Map<string, A> -> Doc
        
            [<JavaScriptExport>]
            type [<AbstractClass>] B() =
                inherit A() 
        
            [< JavaScriptExport >]
            type C() =
                inherit B()
                override __.Doc map =
                    div [] [
                        hr [] []
                        div [] [h1 [] [text "C"]]
                        div [attr.``class`` "jumbotron"] [ map |> map.["D"].Doc ]
                    ]
            [<JavaScriptExport >]
            type D() =
                inherit A()
                override __.Doc _ =
                    span [attr.``class`` "alert alart-info"] [ text "D" ]
        
            let types = new System.Collections.Generic.Dictionary<string, string * A>()
        
            let registerType line (a:'a) =
                if IsClient 
                then types.Add(line                  , (line, a :> A) )     
                else types.Add(typedefof<'a>.FullName, (line, a :> A) )
        
            registerType (__SOURCE_FILE__ + __LINE__) <| C()
            registerType (__SOURCE_FILE__ + __LINE__) <| D()
        
            let fixType v =
                match types.TryGetValue v with
                | false, _         -> C() :> A
                | true , (line, a) -> a
        
            let fixMap (m:Map<string, string>) =
                m |> Seq.map (fun kvp -> kvp.Key, fixType kvp.Value) |> Map
        
        
        [<JavaScript>]
        module Client =
        
            let getDoc (m:Map<string, string>) (docName : string) =
                let m = ClientCode.fixMap m
                m.[docName].Doc(m)
        
        
        
        module MainProgram =
            open Templating
        
            open FsRoot
            module AF = AppFramework 
        
            let layoutName = "ProzperLyt"
        
            let scrollToBottom (e:Dom.Element) (_:obj) = 
                async { 
                    do! Async.Sleep 100
                    do  e.ScrollTop <- e.ScrollHeight
                } |> Async.Start
        
        //    let mainLayout() =
        //        TemplateLib.Layout()
        //            .CalculationTable( tableCalculations()                  )
        //            .FormulaDetail(    details          ()                  )
        //            .DimsSelected(     dimsSelected     ()                  )
        //            .DimensionTable(   tableDimensions  ()                  )
        //            .GlobalText(       globalDefs       ()                  )
        //            .Server(           model.server                         )
        //            .Output(           model.outputMsgs                     )
        //            .FSCode(           model.codeFS                         )
        //            .Parser(           model.parserMsgs                     )
        //            .Filename(         model.fileName                       )
        //            .AddCalculation(   fun _ -> AddCalculation |> processor )
        //            .AddTotal(         fun _ -> AddTotal       |> processor )
        //            .NewDimension(     fun _ -> AddDimension   |> processor )
        //            .SaveAs(           fun _ -> SaveLoad.saveAsFile()       )
        //            .LoadFileChanged(  fun e -> SaveLoad.loadFile e.Target  )
        //            .LoadFileClear(    fun e -> e.Target?value <- ""        )
        //            .UpdateRules(      fun _ -> UpdateAlea.updateModel()    )        
        //            .IndentIn(         fun _ -> model.selection.Value |> Option.map fst |> Option.iter (fun nid -> IndentNode(true , nid) |> processor) )
        //            .IndentOut(        fun _ -> model.selection.Value |> Option.map fst |> Option.iter (fun nid -> IndentNode(false, nid) |> processor) )
        //        //    .Reorder(          fun _ -> reorder()                                    )
        //            .JumpRef(ParseFS.jumpToRef)
        //            .OutputAfterRender(fun e -> model.outputMsgs.View |> View.Sink (scrollToBottom e))
        //            .Doc()
        
            let titleV = Var.Create "Prozper"
        
            [< WebSharper.Sitelets.Website >]    
            let mainProgram() =
                AF.addPlugIn {
                    AF.plgName    = "Prozper"
                    AF.plgVars    = [| AF.newVar  "title"        titleV
                                       //AF.newVar  "CodeFS"          model.codeFS
                                       //AF.newVar  "Output"          model.outputMsgs
                                       //AF.newVar  "Parser"          model.parserMsgs
                                       //AF.newVar  "Server"          model.server
                                       //AF.newVar  "GlobalDefs"      model.globalDefs
                                    |]  
                    AF.plgViews   = [| //AF.newViw  "FsCode"          Snippets.FsCodeW
                                       //AF.newViw  "SaveNeeded"      Snippets.SaveAsClassW
                                       //AF.newViw  "CurrentPath"     Snippets.currentPathW
                                    |]  
                    AF.plgDocs    = [| //AF.newDoc  "mainDoc"         (lazy mainDoc()                 )
                                       //AF.newDoc  "editor"          (lazy (WebSharper.UI.Html.div [] [ Monaco.getEditorConfigO() |> Option.map Monaco.render |> Option.defaultValue Doc.Empty ]) )
                                       //AF.newDoc  "Snippets"        (lazy RenderSnippets  .render() )
                                       //AF.newDoc  "Properties"      (lazy RenderProperties.render() )
                                       //AF.newDoc  "ButtonsRight"    (lazy buttonsRight           () )
                                       //AF.newDoc  "globalDefs"      (lazy globalDefs                         () )
                                       //AF.newDoc  "Dimensions"      (lazy TableDimensions  .tableDimensions  () )
                                       //AF.newDoc  "Calculations"    (lazy TableCalculations.tableCalculations() )
                                       //AF.newDoc  "details"         (lazy details                            () )
                                       //AF.newDoc  "dimsSelected"    (lazy dimsSelected                       () )
                                    |]  
                    AF.plgActions = [| //AF.newAct  "AddSnippet"      Snippets.newSnippet
                                       //AF.newAct  "RemoveSnippet"   deleteSnippet       
                                       //AF.newAct  "IndentIn"        <| fun () -> model.selection.Value |> Option.map fst |> Option.iter (fun nid -> IndentNode(true , nid) |> processor)
                                       //AF.newAct  "IndentOut"       <| fun () -> model.selection.Value |> Option.map fst |> Option.iter (fun nid -> IndentNode(false, nid) |> processor)
                                       //AF.newAct  "AddProperty"     RenderProperties.addProperty
                                       //AF.newAct  "RunFS"           runFsCode
                                       //AF.newAct  "AbortFsi"        FsiAgent.abortFsiExe
                                       //AF.newAct  "DisposeFsi"      FsiAgent.disposeFsiExe
                                       //AF.newActF "LoadFile"        <| AF.FunAct1 ((fun o -> unbox o |> LoadTextFile |> processor  ), "FileElement")
                                       //AF.newActF  "SaveAs"          <| AF.FunAct1 ((fun o -> unbox o |> SaveTextFile |> processor  ), "FileElement")
                                       //AF.newActF "Import"          <| AF.FunAct1 ((fun o -> unbox o |> Importer.importFile     ), "FileElement")
                                       //AF.newActF "JumpTo"          <| AF.FunAct1 ((fun o -> unbox o |> JumpTo.jumpToRef        ), "textarea"   )
                                       //AF.newActF "ButtonClick"     <| AF.FunAct1 ((fun o -> unbox o |> CustomAction.buttonClick), "button"     )
                                       //AF.newActF "ActionClick"     <| AF.FunAct1 ((fun o -> unbox o |> CustomAction.actionClick), "name"       )
                                       //AF.newAct  "AddCalculation"  (fun () -> AddCalculation |> processor)
                                       //AF.newAct  "AddTotal"        (fun () -> AddTotal       |> processor)
                                       //AF.newAct  "AddDimension"    (fun () -> AddDimension   |> processor)
                                    |]
                    AF.plgQueries = [|                                               
                                    |]
                }
                match JS.Document.GetElementById("GlobalLayout") with
                | null ->
                   """
                    menuEditor       horizontal  65       menuLogo                  editorMessages
                    double           horizontal  0-50-100 AppFramework.AppFwkClient menuEditor
                    menuLogo         vertical    350      logo                      menu
                    logo             span       "margin:0; color:gray; font-size: 55px; font-weight:530" "F# Station"
                    editorMessages   horizontal 10-83-100 editorButtons             messages
                    messages         vertical   0-50-100  messagesLeft              messagesRight
                    editorButtons    vertical -200 snippetsSnippet buttons
                    buttons div      "overflow: hidden; display: grid; grid-template-columns: 100%; grid-template-rows: repeat(15, calc(100% / 15)); bxackground-color: #eee; box-sizing: border-box; padding : 5px; grid-gap: 5px; margin-right: 21px" btnSaveAs none x btnAddSnippet btnDeleteSnippet btnIndentIn btnIndentOut none x btnRunFS none x btnAbortFsi
                    snippetsSnippet  vertical   0-20-100  snippets                  editorProperties
                    snippets         horizontal 20        "${FSharpStation.CurrentPath}" FSharpStation.Snippets
                    editorProperties vertical   0-100-100 snippet                   properties
                    properties       div        ""        FSharpStation.Properties
                    snippet          horizontal 35        Name                      FSharpStation.editor
                    menu             span  "" btnLoad btnImport
        
                    btnSaveAs        button FSharpStation.SaveAs         "class=btn ${FSharpStation.SaveNeeded}" "Save as...    "
                    btnAddDimension  button RuleEditor.AddDimension      ""                  "Add Dimension "
                    btnDeleteSnippet button FSharpStation.RemoveSnippet  ""                  "Delete Snippet"
                    btnIndentIn      button FSharpStation.IndentIn       ""                  "Indent In  >> "
                    btnIndentOut     button FSharpStation.IndentOut      ""                  "Indent Out << "
                    btnRunFS         button FSharpStation.RunFS          ""                  "Run F#        "
                    btnAbortFsi      button FSharpStation.AbortFsi       ""                  "Abort Fsi     "
        
                    messagesLeft     wcomp-tabstrip                      ""                  Output FsCode
                    messagesRight    wcomp-tabstrip                      ""                  Parser
        
                    Output           textarea  FSharpStation.Output      "tabname=Output ; placeholder=Output messages ; spellcheck=false" 
                    FsCode           textarea  FSharpStation.FsCode      "tabname=F# Code; placeholder=F# Code         ; spellcheck=false" 
                    Parser           textarea  FSharpStation.Parser      "tabname=Parser ; placeholder=Parser messages; dblclick=${FSharpStation.JumpTo} ; spellcheck=false" 
                    Name             Doc       InputLabel                ""     "Name:"        FSharpStation.SnippetName
                    btnLoad          Doc       InputFile                 ""     "Load File..." FSharpStation.LoadFile  FileName
                    btnImport        Doc       InputFile                 ""     "Import..."    FSharpStation.Import    ""
                    FileName         div                                 "class=form-control"  FSharpStation.fileName
                   """
                | e -> e.TextContent
                |> LayoutEngine.newLyt layoutName
                |> LayoutEngine.addLayout
        
                None
                |> Option.defaultValue layoutName
                |> AF.mainDocV.Set
        
                TemplateLib()
                    .MainContent( AF.getMainDoc.Value )
                    .Bind()
                titleV.View |> View.Sink (fun t -> JS.Document.Title <- t)
                
        //#r @"..\packages\Owin\lib\net40\Owin.dll"
        //#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
        //#r @"..\packages\Microsoft.Owin.Hosting\lib\net451\Microsoft.Owin.Hosting.dll"
        //#r @"..\packages\Microsoft.Owin.Host.HttpListener\lib\net451\Microsoft.Owin.Host.HttpListener.dll"
        //#r @"..\packages\WebSharper.Owin\lib\net461\WebSharper.Owin.dll"
        //#r @"..\packages\WebSharper.Owin\lib\net461\HttpMultipartParser.dll"
        //#r @"..\packages\Microsoft.Owin.StaticFiles\lib\net451\Microsoft.Owin.StaticFiles.dll"
        //#r @"..\packages\Microsoft.Owin.FileSystems\lib\net451\Microsoft.Owin.FileSystems.dll"
        //#define FSS_SERVER
        [< JavaScript false >]
        module Server =
            open global.Owin
            open Microsoft.Owin.Hosting
            open Microsoft.Owin.StaticFiles
            open Microsoft.Owin.FileSystems
            open WebSharper.Owin
            open WebSharper.Sitelets
            open WebSharper.UI.Server
            open WebSharper.UI.Templating
            open WebSharper.UI.Html
        
            type EndPointServer = | [< EndPoint "/" >] EP
        
            let content (ctx:Context<EndPointServer>) (endpoint:EndPointServer) : Async<Content<EndPointServer>> =
                Content.Page(
                    TemplateLib()
                        .Initializer( Html.client <@  MainProgram.mainProgram(); Doc.TextNode "Initialized" @> )
                        .Elt(keepUnfilled = true)
                )
        
            [< EntryPoint >]
            let Main args =
                printfn "Usage: FSharpStation URL ROOT_DIRECTORY MaxMessageSize"
                let url           = args |> Seq.tryItem 0 |>                   Option.defaultValue "http://localhost:9005/"
                let rootDirectory = args |> Seq.tryItem 1 |>                   Option.defaultValue @"..\website"
                let max           = args |> Seq.tryItem 2 |> Option.map int |> Option.defaultValue 1_000_000
                //let epWebSocket = Endpoint.Create(url, "/ws", JsonEncoding.Readable)
                //let broker = Broker.BrokerAgent epWebSocket
                //Broker.BrokerAgent.FssWebSocketO <- Some broker
                use server = WebApp.Start(url, fun appB ->
                    appB.UseWebSharper(WebSharperOptions(ServerRootDirectory = rootdir
                                                       , Sitelet             = (Some <| Application.MultiPage content)
                                                       , BinDirectory        = "."
                                                       , Debug               = true))
                        .UseStaticFiles(StaticFileOptions(FileSystem = PhysicalFileSystem(rootDirectory)))
                        //.UseWebSocket(  epWebSocket, broker.Start, maxMessageSize = max)
                    |> ignore)
                stdout.WriteLine("Listening on {0}, hit enter to finish", url)
                stdin.ReadLine() |> ignore
                0
        
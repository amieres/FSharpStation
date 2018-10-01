////-d:WEBSHARPER
//#I @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461"
//#I @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper.UI\lib\net461"
//#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.Main.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.Web.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.Control.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
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
    
    //#I @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461"
    //#I @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper.UI\lib\net461"
    
    //#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.Main.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.Web.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper\lib\net461\WebSharper.Control.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSNetCore\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
    
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
    
    //#define WEBSHARPER
    [< JavaScript >]
    module AppFramework =
    
        type PlugInVar = {
            varName        : string
            varVar         : Var<string>
        }
    
        type PlugInView = {
            viwName        : string
            viwView        : View<string>
        }
    
        type PlugInDoc = {
            docName        : string
            docDoc         : Doc
        }
    
        type PlugInAction = {
            actName        : string
            actFunction    : unit -> unit
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
    
        let mainDocV = Var.Create "AppFramework.mainDoc"
    
        let [< Literal >] TemplateFileName =  @"D:\Abe\CIPHERWorkspace\FSharpStationN\website\AppFramework.html" 
    
        type AppFwkTemplate = Templating.Template<TemplateFileName>
    
        let AppFwkClient = 
            lazy
                AppFwkTemplate.AppFwkClient()
                    .Doc()
    
        let getMainClientDoc() =
            plugIns.View
            |> View.Map2(fun mainDoc plgs -> 
                plgs |> Seq.tryPick(fun plg ->
                    plg.plgDocs |> Seq.tryFind(fun doc -> plg.plgName + "." + doc.docName = mainDoc) |> Option.map (fun doc -> doc.docDoc)
                )
                |> Option.defaultValue Doc.Empty
            ) mainDocV.View
            |> Doc.EmbedView
    
        let mainDoc() = 
                AppFwkTemplate.AppFramework()
                    .MainDoc(     mainDocV.View       )
                    .MainDocV(    mainDocV            )
                    .MainClient(  getMainClientDoc()  )
                    .Doc()
    
        [< SPAEntryPoint >]
        let main() =
            plugIns.Add {
                plgName    = "AppFramework"
                plgVars    = [| { varName = "mainDocV"      ; varVar = mainDocV           } |]
                plgViews   = [|                                                             |]
                plgDocs    = [| { docName = "AppFwkClient"  ; docDoc = AppFwkClient.Value } |]
                plgActions = [|                                                             |]
                plgQueries = [|                                                             |]
    
            }
    
            mainDoc()
            |> Doc.Run JS.Window.Document.Body 
    
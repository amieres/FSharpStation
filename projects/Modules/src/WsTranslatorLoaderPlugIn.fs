#nowarn "3242"
////-d:DLL -d:FSharpStation1614641116564 -d:WEBSHARPER -d:WEBSHARPER47
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Web.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Collections.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Main.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.JQuery.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Web.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Sitelets.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Control.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461\WebSharper.UI.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/projects/LayoutEngine/bin/LayoutEngine47.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/projects/Modules/bin/WsTranslatorLoader.dll"
//#nowarn "3242"
/// Root namespace for all code
//#define FSharpStation1614641116564
#if !NOFSROOT
#if INTERACTIVE
module FsRoot   =
#else
#if DLL
namespace FsRootDll
#else
namespace FsRoot
#endif
#endif
#endif
    #if !NETSTANDARD20
    
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
    ////#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Web.dll"
    
    #if WEBSHARPER
    #if WEBSHARPER47
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461"
    
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Collections.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Main.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.JQuery.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Web.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Sitelets.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Control.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461\WebSharper.UI.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
    #else
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
    
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER 
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            //#r "D:\Abe\CIPHERWorkspace\FSharpStation/projects/LayoutEngine/bin/LayoutEngine47.dll"
            //#r "D:\Abe\CIPHERWorkspace\FSharpStation/projects/Modules/bin/WsTranslatorLoader.dll"
            
            //#define DLL
            //#define WEBSHARPER47
            module WsTranslatorLoaderPlugIn =
                open FsRoot
                module AF    = FsRootDll.LibraryJS.AppFramework
                module LE    = FsRootDll.LibraryJS.LayoutEngine
                
                let statusW = V(sprintf "%A" WsTranslatorLoader.wasmStatusV.V)
            
                let lensChannelV ch (lm: ListModel<string, (string * (string * bool))>) =
                    Var.Make
                        (lm.TryFindByKeyAsView ch |> View.Map (Option.map(fun (_,(txt,_)) -> txt) >> Option.defaultValue "") )
                        (fun txt -> WsTranslatorLoader.UI.setChannel ch txt)
            
                let ifThen cond actN = if unbox cond = "1" then AF.callFunction () () (unbox actN)
                    //AF.depWithExtracts <| fun (extractAts, extractDoc, extractText) cond actN ->
                    //    AF.getParmRef (unbox actN)
                    //    ||> AF.tryGetAct 
                    //    |> Option.iter(fun a -> 
                    //        async {
                    //            let! d = extractText (unbox cond) |> View.GetAsync
                    //            let  c = ParseO.parseIntO d |> Option.defaultValue 0
                    //            if c <> 0 then
                    //                AF.callFunction () () a.actFunction
                    //        } |> Async.Start
                    //    )
            
            
            
                let plugInAdded =
                    AF.plugin {
                        plgName   "WsTranslatorPlugIn"
            
                        plgView   "Status"                      statusW
                        plgView   "DebugMode"                  (WsTranslatorLoader.UI.debugV.View.Map string)
                        plgView   "presences"                   WsTranslatorLoader.UI.presencesW 
                        plgView   "errorsJson"                  WsTranslatorLoader.UI.fileErrorsW
                        plgView   "editorResp"                  WsTranslatorLoader.UI.editorRespW
            
                        plgVar    "JS"                          WsTranslatorLoader.UI.jsV
                        plgVar    "WasmPath"                    WsTranslatorLoader.UI.wasmPathTV
                        plgVar    "Command"                     WsTranslatorLoader.UI.commandV
                        plgVar    "Source"                      WsTranslatorLoader.UI.codeV
                        plgVar    "Options"                     WsTranslatorLoader.UI.optsV
                        plgVar    "stdout"                     (WsTranslatorLoader.UI.detailsV |> lensChannelV "stdout"  )
                        plgVar    "stderr"                     (WsTranslatorLoader.UI.detailsV |> lensChannelV "stderr"  )
                        plgVar    "Timings"                    (WsTranslatorLoader.UI.detailsV |> lensChannelV "Timings" )
                        plgVar    "WASM"                       (WsTranslatorLoader.UI.detailsV |> lensChannelV "WASM"    )
                        plgVar    "getPresences"                WsTranslatorLoader.UI.getPresencesV
                        plgVar    "fileName"                    WsTranslatorLoader.UI.fileNameV
                        plgVar    "editorCmd"                   WsTranslatorLoader.UI.editorCmdV
            
                        plgAct    "LoadAsWorker"                WsTranslatorLoader.UI.actLoadAsWorker
                        plgAct    "TerminateWorker"             WsTranslatorLoader.UI.actTerminateWorker
                        plgAct    "LoadInMainThread"            WsTranslatorLoader.UI.actLoadInMainThread
                        plgAct    "ToggleDebug"                 WsTranslatorLoader.UI.actToggleDebug
                        plgAct    "Clean"                       WsTranslatorLoader.UI.clean
                        plgAct    "Check"            (fun () -> WsTranslatorLoader.UI.actCheck     () |> Async.Start)     
                        plgAct    "Compile"          (fun () -> WsTranslatorLoader.UI.actCompile   () |> Async.Start)       
                        plgAct    "Run"              (fun () -> WsTranslatorLoader.UI.actRun       () |> Async.Start)   
                        plgAct    "Translate"        (fun () -> WsTranslatorLoader.UI.actTranslate () |> Async.Start)         
                        plgAct    "Dir"              (fun () -> WsTranslatorLoader.UI.actDir       () |> Async.Start)
                        plgAct    "EvalJS"           (fun () -> WsTranslatorLoader.UI.actEvalJS    () |> Async.Start)
                        plgAct    "EvalFS"           (fun () -> WsTranslatorLoader.UI.actEvalFS    () |> Async.Start)
            
                        plgAct2    "ifThen"                     ifThen "Cond" "Action"
                        
                        plgDoc0   "Tabs"                        WsTranslatorLoader.UI.tabsDoc
                        plgDoc0   "Details"                     WsTranslatorLoader.UI.detailsDoc
                        plgDoc0   "Form"                        WsTranslatorLoader.UI.mainDoc
                    }
                    |> AF.addPlugIn
            
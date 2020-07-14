#nowarn "3242"
////-d:FSharpStation1593735151845 -d:WEBSHARPER
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
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Data\lib\net461\WebSharper.Data.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\FShUIAssemblyData.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\FShUI.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\bin\System.Core.dll"
//#nowarn "3242"
/// Root namespace for all code
//#define FSharpStation1593735151845
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
    
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER 
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Data\lib\net461\WebSharper.Data.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.dll"
            
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\FShUIAssemblyData.dll"
            
            [< JavaScriptExport >]
            module FShUI_AssemblyData2 =
                open FsRoot.LibraryJS.FShUI_AssemblyData
                open FSharp.Data
            
                type AsmJson = JsonProvider<"""
                    { "asName"            : "ss"
                    , "dependencies"      : ["ref1"]
                    , "resources"         : ["res"]
                    , "modules"           : 
                        [{ "moName"        : "mm"
                        , "methods"       : 
                            [{ "meName"    : "me"
                            , "isField"   : 1
                            , "type"      : 
                                { "tName" : "tn"
                                , "asm"   : "asm"
                                }
                            , "parms" :
                                [{ "tName" : "tn"
                                , "asm"   : "asm"
                                }]
                            }]
                        }]
                    , "jsModules" :
                                [{ "jsName" : "jn"
                                , "code"   : "code"
                                }]
                    }""", RootName="asm">
            
                [< JavaScript false ; AutoOpen >]
                module CreateJson =
                    let typeToJson (ty: TypeRef) =
                        AsmJson.Type(   tName        = ty.name.Id,
                                        asm          = ty.asm .Id
                        )
            
                    let jsToJson   (js: string, code: JSCode) =
                        AsmJson.JsModule(jsName      = js,
                                            code        = code.Id
                        )
            
                    let methodToJson (me: MethodDef) =
                        AsmJson.Method( meName       = me.name.Id,
                                        isField      = (if me.isField then 1 else 0           ),
                                        ``type``     = ( typeToJson me.retType                ),
                                        parms        = (me.parms |> Array.map typeToJson      ) 
                        )
            
                    let moduleToJson (md: ModuleDef) =
                        AsmJson.Module( moName       = md.name.Id,
                                        methods      = (md.methods |> Array.map methodToJson)
                        )
            
                    let asmToJson (asmDef:AssemblyDef) =
                        AsmJson.Asm(    asName       = asmDef.name      .Id,
                                        jsModules    = (asmDef.javaScripts  |> Array.map jsToJson ),
                                        dependencies = (asmDef.dependencies |> Array.map (fun r -> r.Id)),
                                        resources    = (asmDef.resources    |> Array.map (fun r -> r.Id)),
                                        modules      = (asmDef.modules      |> Array.map moduleToJson)
                        )
            
                    [< JavaScript false >]
                    let writeAsm fname (asm:AssemblyDef) =
                        System.IO.File.WriteAllText(fname, (asmToJson asm).JsonValue.ToString())
                        
                    [< JavaScript false >]
                    let convertDll fin fout = CreateAsm.readDll fin |> writeAsm fout
            
            (*
            
            module Test =
                open FsRoot
                open FShUI_AssemblyData.CreateAsm
                open FShUI_AssemblyData2
            
                let PathOut = @"D:\Abe\CIPHERWorkspace\FSharpStation\website\EPFileX\Assemblies\"
                let Folder  = "/EPFileX/Assemblies/"
            
                let dlls = 
                    [
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\FShUIAssemblyData.dll"
                        //@"D:\Abe\CIPHERWorkspace\FSharpStation\website\EPFileX\Assemblies\Covid.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\WsTranslatorLoader.dll" //|> readDll |> printfn "%A"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\bin\testing.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\WsTranslator.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Main.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Web.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Control.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Data\lib\net461\WebSharper.Data.dll"
                    ]
                    //|> Seq.take 1
            
                dlls
                |> Seq.iter (fun dll ->
                    let fn = System.IO.Path.GetFileNameWithoutExtension dll
                    convertDll dll (PathOut + fn + ".asm")
                )
            
            //*)
            
    
        //#define WEBSHARPER
        
        //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
        
        [< JavaScriptExport >]
        module TestingJS =
        
        
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\FShUI.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\bin\System.Core.dll"
            open FsRoot
            
            module WSFrameworkTest =
                open WebSharper.UI
                open WebSharper.UI.Html
            
                let testVar = Var.Create "Hello WSFrameWork"
            
                let testVarInput() = div [] [ Doc.Input [] testVar  ] 
                let testVarOut  () = div [] [ textView testVar.View ]
            
                let mainDoc() =
                    div [] [
                        h1 [] [ text "Hello WSFramework" ]
                        testVarInput()
                        testVarOut  ()
                    ]
            
            module WSFramework =
            
                open WebSharper.UI
                open WebSharper.UI.Html
            
                open WebSharper.JavaScript
            
                open AssemblyUI
            
                [< SPAEntryPoint >]
                let main() =
                    async {
                        let assembs = FShUI.assemblies
                        do! FShUI.loadAssembly(FShUI_AssemblyData.AssemblyRef "FShUI.asm")
                        FShUI.assemblies.Set (Seq.append FShUI.assemblies.Value assembs.Value)
                        do! Async.Sleep 50
                        return
                            div [] [
                                mainDocInput()
                                assembliesDoc()
                                div [] [ mainSubDoc ]
                            ]
                            |> Doc.Run JS.Document.Body
                    } |> Async.Start
            
            
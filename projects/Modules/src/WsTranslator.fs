////-d:FSharpStation1611569356546 -d:NETSTANDARD20 -d:NOFSROOTx -d:WEBSHARPER
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Reflection.Metadata\lib\netstandard2.0"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Collections.Immutable\lib\netstandard2.0"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades\netstandard.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\System.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\FSharp.Compiler.Service.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Core.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Web.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Sitelets.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Main.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.UI.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Compiler.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.JQuery.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Compiler.FSharp.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos/WasmRepo/wasm-sdk/framework\WebAssembly.Bindings.dll"
/// Root namespace for all code
//#define FSharpStation1611569356546
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
    
    //#define NOFSROOTx
    //#define NETSTANDARD20
    //#define WEBSHARPER
    
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades\netstandard.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\System.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\FSharp.Compiler.Service.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Core.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Web.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Sitelets.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Main.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.UI.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Compiler.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.JQuery.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Compiler.FSharp.dll"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Reflection.Metadata\lib\netstandard2.0"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Collections.Immutable\lib\netstandard2.0"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos/WasmRepo/wasm-sdk/framework\WebAssembly.Bindings.dll"
    
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\FShUIAssemblyData.dll"
    
    module WsTranslator =
    //    open FsRoot.Library.FShUI_AssemblyData
        open System
        open System.IO
        open Microsoft.FSharp.Compiler.SourceCodeServices
    
        let  fsharpChecker = lazy (
                printfn "Loading FCS. Hold on, this will take a while..."
                let checker = FSharpChecker.Create( keepAssemblyContents = true)
                printfn "FCS loaded!"
                checker
            )
    
        let startLoading (l:Lazy<_>) = 
            async {
                do! Async.Sleep 40
                let _ = l.Value
                ()
            } |> Async.Start
    
        startLoading fsharpChecker
    
        open WebSharper
        open WebSharper.Core
        open WebSharper.Compiler.Translator
    
        module RM = WebSharper.Core.Remoting
    
        let dirWasm (d:string) =
            let rec dir (d:string) =
                try 
                    if d = "/proc/self/fd" then Console.WriteLine "skip /proc/self/fd"  else
                    for file in Directory.GetFiles(d, "*") do
                        printfn "F: %s" file  
                    for subdir in Directory.EnumerateDirectories d do
                        printfn "D: %s" subdir
                        dir             subdir
                with e -> Console.WriteLine e.Message 
            printfn "dirWasm:"
            dir d
    
        open WebSharper.Compiler
    
        [< JavaScript >]
        let dlls = 
            [|
                "/dlls/WebSharper.Main.dll"
                "/dlls/WebSharper.Collections.dll"
                "/dlls/WebSharper.Control.dll"
                "/dlls/WebSharper.Web.dll"
                "/dlls/WebSharper.Sitelets.dll"
                "/dlls/WebSharper.UI.dll"
                "/dlls/WebSharper.UI.Templating.Runtime.dll"
                "/dlls/WebSharper.Data.dll"
            |]
    
        let readMetadata (dllToMetaInfoO : string -> Metadata.Info option)  =
            let metas = dlls  |> Seq.choose dllToMetaInfoO |> Seq.cache
            let deps  = metas |> Seq.map (fun m -> m.Dependencies) |> WebSharper.Core.DependencyGraph.Graph.NewWithDependencyAssemblies
            { WebSharper.Core.Metadata.Info.UnionWithoutDependencies metas with Dependencies = deps.GetData() }
    
        let getMetaInfoFromAssemblyO = FrontEnd.ReadFromFile FrontEnd.ReadOptions.FullMetadata
    
        let metadataL = lazy (
            printfn "Loading Dlls metadata. Hold on, this will take a while..."
            let meta = readMetadata getMetaInfoFromAssemblyO
            printfn "Metadata loaded!"
            meta
        )
    
        let translateFromAst projectName metadata ast =
            let macroType = typedefof<WebSharper.UI.Macros.TextView> // necessary so the linker keeps the macros
            //macroType.AssemblyQualifiedName |> printfn "%A"
            //let macrotype2 = System.Type.GetType("WebSharper.UI.Macros+TextView, WebSharper.UI, Version=4.5.0.0, Culture=neutral, PublicKeyToken=null", true)
            //macrotype2.AssemblyQualifiedName |> printfn "%A"
            let comp = 
                WebSharper.Compiler.FSharp.ProjectReader.transformAssembly
                    (WebSharper.Compiler.Compilation(metadata, false, UseLocalMacros = true))
                    projectName
                    { CommandTools.WsConfig.Empty with JavaScriptScope = CommandTools.JavaScriptScope.JSAssembly }
                    ast
            if not comp.Errors.IsEmpty then None, comp.Errors, comp.Warnings else
            Translator.DotNetToJavaScript.CompileFull comp
            if not comp.Errors.IsEmpty then None, comp.Errors, comp.Warnings else
            let currentMeta = comp.ToCurrentMetadata()
            let js =
                Packager.packageAssembly metadata currentMeta None Packager.OnLoadIfExists    
                |> Packager.exprToString JavaScript.Readable JavaScript.Writer.CodeWriter
                |> fst
            (Some js )
            , comp.Errors, comp.Warnings
    
        let parseAndCheckProject projectName opts code = async {
            let  projOpts = fsharpChecker.Value.GetProjectOptionsFromCommandLineArgs(projectName, opts)
            File.WriteAllText(projOpts.OtherOptions.[1], code)
            let! results = fsharpChecker.Value.ParseAndCheckProject projOpts
            return results
        }
    
        let testCompile() =
            dirWasm "/"
            let opts = """
                                    /tmp/source.fsx
                                    -o:source.exe
                                    --simpleresolution
                                    --nowarn:3186
                                    --optimize-
                                    --noframework
                                    --fullpaths
                                    --warn:3
                                    --target:exe
                                    -r:/dlls/WebSharper.Core.dll
                                    -r:/dlls/WebSharper.Main.dll
                                    -r:/dlls/WebSharper.UI.dll
                                    -r:/dlls/WebSharper.Sitelets.dll
                                    -r:/managed/FSharp.Core.dll
                                    -r:/managed/mscorlib.dll
                                    -r:/managed/netstandard.dll
                                    -r:/managed/System.dll
                                    -r:/managed/System.Core.dll
                                    -r:/managed/System.IO.dll
                                    -r:/managed/System.Runtime.dll
                                    -r:/managed/System.Net.Http.dll
                                    -r:/managed/System.Threading.dll
                                    -r:/managed/System.Numerics.dll
                                    -r:/managed/System.Runtime.Numerics.dll
                                """.Split '\n' |> Array.map (fun s ->  s.Trim())
            let code = """
    open WebSharper
    open WebSharper.UI
    open WebSharper.UI.Html
    
    let name = Var.Create "World"
    
    [< Inline "'Hello inline '" >]
    let bDoc() = "Hello"
    
    let cDoc() = text name.V
    
    let aDoc() = 
        div [] [
            text <| bDoc()
            cDoc()
        ]
            """
            async {
                Console.WriteLine "before parseAndCheckProject"
                let! results = parseAndCheckProject "source" opts code
                Console.WriteLine "Errors:"
                for err in results.Errors do
                    Console.WriteLine("Error: " = err.ToString())
                Console.WriteLine "Dependencies:"
                for dep in results.DependencyFiles do
                    Console.WriteLine("Error: " = dep.ToString())
            }
    
        module Remoting =
            open WebAssembly
            open WebAssembly.Core
            open WebAssembly.Host
    
            let (?) o prop = Console.WriteLine("?" + prop); (unbox<JSObject> o).GetObjectProperty prop
            let remoting   = Runtime.GetGlobalObject()?FsRoot?LibraryJS?WsTranslatorLoader?Remoting |> unbox<JSObject>
            let returnValue (md : string, v : string) = remoting.Invoke("returnValue", md, v) |> ignore
            let returnExn   (md : string, e : string) = remoting.Invoke("returnExn"  , md, e) |> ignore
            let wsServer   = lazy (
                printfn "Loading remoting server. Hold on, this will take a while..."
                let srv = RM.Server.Create WebSharper.Web.Shared.Metadata WebSharper.Web.Shared.Json
                printfn "Remoting server loaded!"
                srv
            )
            startLoading wsServer
    
        let runRpc(header, data) = 
            async {
                let  wsReq    = {
                    RM.Request.Body    = data
                    RM.Request.Headers = 
                        function
                        | "content-type"     -> Some "application/json"
                        | "x-websharper-rpc" -> Some header
                        | _  -> None
                }
                try
                    //testCompile()
                    let! wsResp = Remoting.wsServer.Value.HandleRequest wsReq
                    Remoting.returnValue(header, wsResp.Content)
                with e -> 
                    Remoting.returnExn  (header, sprintf "%A" e)
            } |> Async.Start
    
        module Rpc =
    
            [< Remote >]
            let parseAndCheckProjectRpc projectName opts code = async {
                let! results = parseAndCheckProject projectName opts code
                return results.Errors, results.DependencyFiles, results.HasCriticalErrors
            }
    
            [< Remote >]
            let translateFsToJsRpc projectName opts code = async {
                let! results = parseAndCheckProject projectName opts code
                let wsRes =
                    if results.HasCriticalErrors then None else
                    startLoading metadataL
                    translateFromAst projectName metadataL.Value results
                    |> Some
                return results.Errors, wsRes
            }
    
            [< Remote >]
            let dirRpc (d:string) = async { dirWasm d }
    
    
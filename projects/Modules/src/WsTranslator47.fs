////-d:FSharpStation1612100328464 -d:NETSTANDARD20 -d:NOFSROOTx -d:WEBSHARPER -d:WEBSHARPER47
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Reflection.Metadata\lib\netstandard2.0"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Collections.Immutable\lib\netstandard2.0"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades\netstandard.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\System.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\FSharp.Compiler.Service.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.Core.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.Web.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.Sitelets.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.Main.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.UI.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.Compiler.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.JQuery.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.Compiler.FSharp.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos/WasmRepo/wasm-sdk/framework\WebAssembly.Bindings.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\System.dll"
/// Root namespace for all code
//#define FSharpStation1612100328464
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
    //#define WEBSHARPER47
    
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades\netstandard.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\System.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\FSharp.Compiler.Service.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.Core.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.Web.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.Sitelets.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.Main.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.UI.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.Compiler.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.JQuery.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish47\dlls\WebSharper.Compiler.FSharp.dll"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Reflection.Metadata\lib\netstandard2.0"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Collections.Immutable\lib\netstandard2.0"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos/WasmRepo/wasm-sdk/framework\WebAssembly.Bindings.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\System.dll" 
    
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\FShUIAssemblyData.dll"
    
    module WsTranslator =
    //    open FsRoot.Library.FShUI_AssemblyData
        open System
        open System.IO
        open FSharp.Compiler.SourceCodeServices
    
        #if   EXECMODE_INTERP
        let   ExecMode = "INTERP"
        #else
        #if   EXECMODE_AOTINTERP
        let   ExecMode = "AOTINTERP"
        #else
        #if   EXECMODE_AOT
        let   ExecMode = "AOT"
        #else
        let   ExecMode = "NONE??"
        #endif
        #endif
        #endif
    
        printfn "WsTranslator47 Running in mode: %s" ExecMode
    
        [< WebSharper.JavaScript >]
        type Dependency<'T>(def:'T) = member val D = def with get, set
    
        let  fsharpChecker = lazy (
                printfn "Loading FCS. Hold on, this will take a while..."
                System.Environment.SetEnvironmentVariable("FSHARP_COMPILER_BIN", "/managed")
                let checker = FSharpChecker.Create( keepAssemblyContents = true)
                printfn "FCS loaded!"
                checker
            )
    
        let startLoading (l:Lazy<_>) = ()
            //async {
            //    do! Async.Sleep 40
            //    let _ = l.Force()
            //    ()
            //} |> Async.Start
    
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
    
        type DllFileName  = DllFileName  of string
        type MetaFileName = MetaFileName of string
    
        [< JavaScript >]
        let justDlls = 
            [|
                DllFileName "/dlls/WebSharper.Main.dll"
                DllFileName "/dlls/WebSharper.Collections.dll"
                DllFileName "/dlls/WebSharper.Control.dll"
                DllFileName "/dlls/WebSharper.Web.dll"
                DllFileName "/dlls/WebSharper.Sitelets.dll"
                DllFileName "/dlls/WebSharper.UI.dll"
                DllFileName "/dlls/WebSharper.UI.Templating.Runtime.dll"
                DllFileName "/dlls/WebSharper.Data.dll"
            |] 
    
        [< JavaScript >]
        let fromDll2Meta (DllFileName fname) = fname.Replace(".dll", ".meta") |> MetaFileName
            
        [< JavaScript >]
        let dlls() = 
            seq [ 
                for f in justDlls do
                    yield f              |> function DllFileName  s -> s
                    yield fromDll2Meta f |> function MetaFileName s -> s
            ] |> Seq.toArray
    
        /// works on Interp mode but not AOT or AOTInterp (now it works in AOTInterp)
        /// takes almost 15 seconds to decompress and load
        let getMetaInfoFromAssemblyO = Dependency (fun (DllFileName f) ->FrontEnd.ReadFromFile FrontEnd.ReadOptions.FullMetadata f)
    
        let readMetadata (dllToMetaInfoO : DllFileName -> Metadata.Info option) files =
            let metas = files |> Seq.choose dllToMetaInfoO         |> Seq.cache
            let deps  = metas |> Seq.map (fun m -> m.Dependencies) |> WebSharper.Core.DependencyGraph.Graph.NewWithDependencyAssemblies
            { WebSharper.Core.Metadata.Info.UnionWithoutDependencies metas with Dependencies = deps.GetData() }
    
        let metadataL = lazy (
            printfn "Loading Dlls metadata. Hold on, this will take a while..."
            let meta = justDlls |> readMetadata getMetaInfoFromAssemblyO.D
            printfn "Metadata loaded!"
            meta
        )
    
        // Inject this one for AOTInterp (works now with AOT)
        // This one is a bit faster because is already decompressed. It took 8 seconds
        // getMetaInfoFromAssemblyO.D <- fromDll2Meta >> getMetaInfoFromMetaO
    
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
            let  projOpts = fsharpChecker.Force().GetProjectOptionsFromCommandLineArgs(projectName, opts)
            File.WriteAllText(projOpts.OtherOptions.[1], code)
            let! results = fsharpChecker.Force().ParseAndCheckProject projOpts
            return results
        }
    
        let checkGZip() = 
            Console.WriteLine "before new System.IO.MemoryStream()"
            use mem    = new System.IO.MemoryStream()
            Console.WriteLine "before new System.IO.Compression.GZipStream(mem, System.IO.Compression.CompressionMode.Compress  )"
            use comp   = new System.IO.Compression.GZipStream(mem, System.IO.Compression.CompressionMode.Compress  ) // fails here
            Console.WriteLine "after new System.IO.Compression.GZipStream(mem, System.IO.Compression.CompressionMode.Compress  )"
            use wrt    = new System.IO.StreamWriter(comp)
            wrt.WriteLine "Hello GZipStream"
            wrt.Close()
            use mem2   = new System.IO.MemoryStream(mem.GetBuffer())
            use decomp = new System.IO.Compression.GZipStream(mem2, System.IO.Compression.CompressionMode.Decompress)
            use rdr    = new System.IO.StreamReader(decomp)
            Console.WriteLine(rdr.ReadLine())    
    
        let getParms parms = ("fsc.exe\n" + parms).Split '\n' |> Array.filter (fun s -> s.Trim() <> "")
    
        let testCompile() =
            let opts = getParms("""
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
                                """.Split '\n' |> Seq.map (fun s ->  s.Trim()) |> String.concat "\n")
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
                try 
                    Console.WriteLine "before parseAndCheckProject"
                    let! results = parseAndCheckProject "source" opts code
                    Console.WriteLine "Errors:"
                    for err in results.Errors do
                        Console.WriteLine("Error: " + err.ToString())
                    Console.WriteLine "Dependencies:"
                    for dep in results.DependencyFiles do
                        Console.WriteLine("Dependency: " + dep.ToString())
                    let wsRes =
                        if results.HasCriticalErrors then None else
                        startLoading metadataL
                        translateFromAst "TestCompile" (metadataL.Force()) results
                        |> Some
                    Console.WriteLine "WsErrors:"
                    match wsRes with
                    | None -> Console.WriteLine("No translation")
                    | Some(jsO, errs, warns) ->
                    for err in errs do
                        Console.WriteLine("WsError: "   + err.ToString())
                    for warn in warns do
                        Console.WriteLine("WsWarning: " + warn.ToString())
                    jsO |> Option.iter Console.WriteLine
                with e ->
                    printfn "*************\n%A\n*************" <| e
            }
    
        module Remoting =
            open WebAssembly
            open WebAssembly.Core
            open WebAssembly.Host
    
            let (?) o prop = Console.WriteLine("?" + prop); (unbox<JSObject> o).GetObjectProperty prop
            let remoting   = lazy (Runtime.GetGlobalObject()?FsRoot?LibraryJS?WsTranslatorLoader?Remoting |> unbox<JSObject>)
            let returnValue (md : string, v : string) = 
                try       remoting.Force().Invoke("returnValue", md, v) |> ignore
                with e -> printfn "Could not return value for md %s = %s" md v
                          printfn "%A" e
            let returnExn   (md : string, e : string) = 
                try       remoting.Force().Invoke("returnExn"  , md, e) |> ignore
                with _ -> printfn "Exception md = %s\n%s "md e
            let wsServer   = lazy (
                printfn "Loading remoting server. Hold on, this will take a while..."
                let srv = RM.Server.Create WebSharper.Web.Shared.Metadata WebSharper.Web.Shared.Json
                printfn "Remoting server loaded!"
                srv
            )
            startLoading wsServer
    
        let runRpc(header, data) = 
            async {
                printfn "WsTranslator47 runRpc %A %A" header data
                let  wsReq    = {
                    RM.Request.Body    = data
                    RM.Request.Headers = 
                        function
                        | "content-type"     -> Some "application/json"
                        | "x-websharper-rpc" -> Some header
                        | _  -> None
                }
                try
                  //do  checkGZip()   // this fails in AOT and AOT-interp
                  //do  dirWasm "/"   // this works
                  //do! testCompile() // this fails in AOT and AOT-interp
                    let! wsResp = Remoting.wsServer.Force().HandleRequest wsReq
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
                    translateFromAst projectName (metadataL.Force()) results
                    |> Some
                return results.Errors, wsRes
            }
    
            [< Remote >]
            let dirRpc (d:string) = async { dirWasm d }
    
    
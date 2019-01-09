#nowarn "1178"
#nowarn "1182"
#nowarn "3180"
////-d:FSharpStation1546539619997 -d:NETSTANDARD2_0
////#cd @"..\projects\Modules\src"
//#I @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm"
//#I @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\netstandard.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\System.Core.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\mscorlib.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\System.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\System.Web.Services.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.IO.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Collections.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Globalization.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Runtime.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\framework\WebAssembly.Bindings.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\framework\WebAssembly.Net.Http.dll"
//#r @"..\packages\FSharp.Core\lib\netstandard1.6\FSharp.Core.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Threading.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Threading.Tasks.dll"
//#r @"..\..\..\..\Bolero\MyApp\packages\Bolero.FSharp.Compiler.Service\lib\netstandard2.0\FSharp.Compiler.Service.dll"
//#nowarn "1178"
//#nowarn "1182"
//#nowarn "3180"
/// Root namespace for all code
//#define FSharpStation1546539619997
#if INTERACTIVE
module FsRoot   =
#else
namespace FsRoot
#endif

    //#cd "..\projects\Modules\src"
    //#I @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm"
    //#I @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\netstandard.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\System.Core.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\mscorlib.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\System.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\System.Web.Services.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.IO.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Collections.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Globalization.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Runtime.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\framework\WebAssembly.Bindings.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\framework\WebAssembly.Net.Http.dll"
    //#r @"..\packages\FSharp.Core\lib\netstandard1.6\FSharp.Core.dll"
        //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Threading.dll"
        //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Threading.Tasks.dll"
        //#r @"..\..\..\..\Bolero\MyApp\packages\Bolero.FSharp.Compiler.Service\lib\netstandard2.0\FSharp.Compiler.Service.dll"
        // Taken from FSharp.Formatting on Github
        //#define NETSTANDARD2_0
        //#nowarn "1178"
        //#nowarn "1182"
        //#nowarn "3180"
        module FscServices =
        
            open Microsoft.FSharp.Compiler.SourceCodeServices
            open Microsoft.FSharp.Compiler.Interactive.Shell
        
            module RunProcess =
                open System.Diagnostics
        
                let startProcess p ops =
                    printfn "Starting %s %s" p ops
                    new Process(StartInfo = new ProcessStartInfo(p, ops))
                    |> fun proc -> proc.Start() 
        
                let listProcesses() =
                    Process.GetProcesses()
                    |> Seq.iter (printfn "%A")
        
        
            module RunAssembly =
                open System.Reflection
        
                let runA(path: string) =
                    async {
                        let asm = Assembly.LoadFrom(path)
                        // Run entry point
                        asm.EntryPoint.Invoke(null, [||]) |> ignore
                        // Run Main.AsyncMain() if it exists
                        let mainModule = asm.GetType("Main")
                        if not (isNull mainModule) then
                            let asyncMainFunc = mainModule.GetMethod("AsyncMain", BindingFlags.Static ||| BindingFlags.Public)
                            if not (isNull asyncMainFunc) then
                                do! asyncMainFunc.Invoke(null, [||]) :?> Async<unit>
                        // Done
                    }
        
            open System
            open System.IO
            open System.Text
        
            let rec listdir dir = 
                printfn "Dir: %s" dir
                for subdir in System.IO.Directory.EnumerateDirectories dir do
                    printfn "SubDir: %s" subdir
                for file in System.IO.Directory.GetFiles(dir, "*") do
                    printfn "File: %s" file
                for subdir in System.IO.Directory.EnumerateDirectories dir do
                    listdir subdir
        
            let checker     = FSharpChecker.Create()
            let infile      = "/tmp/source.fsx"
            let newFileName = 
                let mutable counter = 0
                fun () -> 
                    counter <- counter + 1
                    sprintf "/tmp/app%d.exe" counter
            let options outfile  =             
                [|  "--simpleresolution"
                    "--optimize-"
                    "--noframework"
                    "--fullpaths"
                    "--warn:3"
                    "--target:exe"
                    infile
                    // Necessary standard library
                    "-r:/tmp/mscorlib.dll"
                    "-r:/tmp/netstandard.dll"
                    "-r:/tmp/System.dll"
                    "-r:/tmp/System.Core.dll"
                    "-r:/tmp/System.IO.dll"
                    "-r:/tmp/System.Runtime.dll"
                    // Additional libraries we want to make available
                    "-r:/tmp/System.Net.Http.dll"
                    "-r:/tmp/System.Threading.dll"
                    "-r:/tmp/System.Threading.Tasks.dll"
                    //"-r:/tmp/FSharp.Data.dll"
                    "-r:/tmp/System.Xml.Linq.dll"
                    //"-r:/tmp/WebFsc.Env.dll"
                    "-o:" + outfile
                |]
        
            let evalExpression text = 
                async {
                    try
                        let outfile = newFileName()
                        System.IO.File.WriteAllText(infile, text)
                        let! errors1
                            , exitCode1 =    options outfile
                                            |> Array.append [| "fsc.exe" |]
                                            |> checker.Compile
                        listdir "/"
                        //RunProcess.listProcesses()
                        for e in errors1 do printfn "%A" e
                        if exitCode1 <> 0 then printfn "exit = %d" exitCode1 else
                        do! RunAssembly.runA outfile
                    with e -> printfn "Failed evalExpression: %A" e
                }
        
        
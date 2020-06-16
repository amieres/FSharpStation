////-d:FSharpStation1592268759864 -d:NETSTANDARD20 -d:NOFSROOTx
////#cd @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\src"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Reflection.Metadata\lib\netstandard2.0"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Collections.Immutable\lib\netstandard2.0"
//#r @"netstandard.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\CodeDom\FSharp.Compiler.Service.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\CodeDom\WebSharper.Core.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\CodeDom\WebSharper.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\CodeDom\WebSharper.Compiler.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\CodeDom\WebSharper.Compiler.FSharp.dll"
/// Root namespace for all code
//#define FSharpStation1592268759864
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
    
    //#cd @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\src"
    
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\netstandard2.0\"
    //#r @"netstandard.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\CodeDom\FSharp.Compiler.Service.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\netstandard2.0\FSharp.Compiler.Service.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\CodeDom\WebSharper.Core.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\CodeDom\WebSharper.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\CodeDom\WebSharper.Compiler.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\CodeDom\WebSharper.Compiler.FSharp.dll"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Reflection.Metadata\lib\netstandard2.0"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Collections.Immutable\lib\netstandard2.0"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\mscorlib.dll"
    
    module WsTranslator =
    
        open System
        open System.IO
        open Microsoft.FSharp.Compiler.SourceCodeServices
    
        let  fsharpChecker = lazy (FSharpChecker.Create( keepAssemblyContents = true))
    
        open WebSharper
        open WebSharper.Core
        open WebSharper.Compiler.Translator
    
        [< Remote >]
        let dir (d:string) = async {
            let rec dir (d:string) =
                try 
                    if d = "/proc/self/fd" then Console.WriteLine "skip /proc/self/fd"  else
                    for file in Directory.GetFiles(d, "*") do
                        Console.Write "F: "
                        Console.WriteLine file  
                    for subdir in Directory.EnumerateDirectories d do
                        Console.Write "D: "
                        Console.WriteLine subdir
                        dir               subdir
                with e -> Console.WriteLine e.Message 
            dir d
        }
    
        //@"D:\Abe\CIPHERWorkspace\FSharpStation\website\EPFileX\Assemblies\Covid.dll"
        //|> System.Reflection.Assembly.ReflectionOnlyLoadFrom
        //|> WebSharper.Core.Metadata.IO.LoadReflected
        //|> Option.iter (fun info ->
        //    let x = new Compilation(info, false)
        //    printfn "Before = %A" x.MutableExternals
        //    DotNetToJavaScript.CompileFull(x)
        //    printfn "After  = %A" x.MutableExternals
        //)
    
        let dlls = 
            [
                "/tmp/WebSharper.Main.dll"
                "/tmp/WebSharper.Collections.dll"
                "/tmp/WebSharper.Control.dll"
                "/tmp/WebSharper.Web.dll"
                "/tmp/WebSharper.Sitelets.dll"
                "/tmp/WebSharper.UI.dll"
                "/tmp/WebSharper.UI.Templating.Runtime.dll"
                "/tmp/WebSharper.Data.dll"
            ]
    
        open WebSharper.Compiler
    
        let readMetadata (dllToMetaInfoO : string -> Metadata.Info option)  =
            let metas = dlls |> Seq.choose dllToMetaInfoO |> Seq.cache
            let deps  = metas |> Seq.map (fun m -> m.Dependencies) |> WebSharper.Core.DependencyGraph.Graph.NewWithDependencyAssemblies
            { WebSharper.Core.Metadata.Info.UnionWithoutDependencies metas with Dependencies = deps.GetData() }
    
        let getMetaInfoFromAssemblyO = FrontEnd.ReadFromFile FrontEnd.ReadOptions.FullMetadata
    
        let metadata = lazy readMetadata getMetaInfoFromAssemblyO
    
        let translateFromAst projectName metadata ast =
            let comp = 
                WebSharper.Compiler.FSharp.ProjectReader.transformAssembly
                    (WebSharper.Compiler.Compilation(metadata, false, UseLocalMacros = false))
                    projectName
                    { CommandTools.WsConfig.Empty with JavaScriptScope = CommandTools.JavaScriptScope.JSAssembly }
                    ast
            Translator.DotNetToJavaScript.CompileFull comp
            for err in comp.Errors   do printfn  "err: %A" err
            for err in comp.Warnings do printfn "warn: %A" err
            let currentMeta = comp.ToCurrentMetadata()
            Packager.packageAssembly metadata currentMeta None Packager.OnLoadIfExists    
            |> Packager.exprToString JavaScript.Readable JavaScript.Writer.CodeWriter
            |> fst
    
    
        let translateFsToJsA projectName opts code = async {
            let  projOpts = fsharpChecker.Value.GetProjectOptionsFromCommandLineArgs(projectName, opts)
            File.WriteAllText(projOpts.OtherOptions.[1], code)
            let! results = fsharpChecker.Value.ParseAndCheckProject projOpts
            for err in results.Errors do
                printfn "error: %A" err
            return translateFromAst projectName metadata.Value results
        }
    
        /// To be called in WASM from JS. It only receives strings
        [< Remote >]
        let translateToJs projectName opts code = async {
            let opts = "fsc.exe\n" + opts |> fun s -> s.Split '\n'
            let! result = translateFsToJsA projectName opts code
            printfn "%s" result
        }
    
        let mutable xxx = false
    
        if xxx then 
            translateToJs "" "" "" |> ignore
    
    (*
    module Test =
        open FsRoot
    
        //translateToJs "WsTranslatorTest" parms someCode
    
        translateToJs "WsTranslatorTest" parms "
            type Hello  = Hello
            type Hello2 = Hello2
            let add  (a:Hello ) = printfn \"%A\" a
            let add2 (a:Hello2) = printfn \"%A\" a
            "
    
    
    printfn "%A" <| comp.ToCurrentMetadata()
    printfn "%A" comp.Warnings
    currentMeta |> printfn "%A"
    printfn "%A" metadata
    fsharpChecker.Value.GetProjectOptionsFromCommandLineArgs("WsTranslator", "fsc.exe\n" + parms |> String.splitByChar '\n')
    |> printfn "%A"
    
    
    // *)
    
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
    
        let parms = 
            unindent """
                Source.fsx
                -o:Source.exe
                --simpleresolution
                --nowarn:3186
                --optimize-
                --noframework
                -r:D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.FSharp\tools\net461\\FSharp.Core.dll
                --fullpaths
                --warn:3
                --target:exe""" 
            |> Seq.skip 1 |> String.concat "\n"
        let someCode = """
    module SomeCode =
        let inline tee f v = f v ; v
        let inline  (|>!) v f   = f v ; v
        let inline  (>>!) g f   = g >> fun v -> f v ; v
    
        let inline print v = 
            match box v with
            | :? string as s -> printfn "%s" s
            | __             -> printfn "%A" v
    
    open SomeCode
    
    let input = 
      [|
        ( 11063,  22004), (-1, -2)
        ( 32870, -21613), (-3,  2)
        ( 43767,  22003), (-4, -2)
        ( 32865, -10705), (-3,  1)
        ( 21984, -43419), (-2,  4)
        ( 43775,  11100), (-4, -1)
        ( 43770, -43425), (-4,  4)
        ( 32881,  22004), (-3, -2)
        ( 32899,  11102), (-3, -1)
        ( 43764,  11098), (-4, -1)
        ( 43805,  32912), (-4, -3)
        ( 54680, -32516), (-5,  3)
        ( 32851,  11107), (-3, -1)
        ( 54696,  22012), (-5, -2)
        ( 43794,  43816), (-4, -4)
        (-54388, -43427), ( 5,  4)
        (-43465,  43815), ( 4, -4)
        ( 11036,  32916), (-1, -3)
        ( 43798,  54726), (-4, -5)
        (-10722,  54727), ( 1, -5)
        ( 32897, -54331), (-3,  5)
        ( 11043, -32520), (-1,  3)
        ( 32868, -10706), (-3,  1)
        (-10760,  54718), ( 1, -5)
        (-43449, -21611), ( 4,  2)
        ( 43751,  11105), (-4, -1)
        (-21625,  43817), ( 2, -4)
        ( 54685,  54723), (-5, -5)
        ( 54711, -43418), (-5,  4)
        (-54375,  32914), ( 5, -3)
        ( 21939,  32908), (-2, -3)
        (-43477, -10703), ( 4,  1)
        ( 54699,  22012), (-5, -2)
        (-54372,  43819), ( 5, -4)
        ( 32841, -21609), (-3,  2)
        (-32533,  43816), ( 3, -4)
        (-54399,  54722), ( 5, -5)
        (-21649, -21613), ( 2,  2)
        ( 43767,  11107), (-4, -1)
        (-21636,  11106), ( 2, -1)
        ( 21964, -10705), (-2,  1)
        ( 54663, -10712), (-5,  1)
        ( 32865,  43818), (-3, -4)
        ( 21992,  22009), (-2, -2)
        ( 32881, -54331), (-3,  5)
        (-32553, -32516), ( 3,  3)
        (-54381,  54723), ( 5, -5)
        (-32572,  32908), ( 3, -3)
        ( 43764, -54327), (-4,  5)
        (-43482, -32519), ( 4,  3)
        (-43494, -54325), ( 4,  5)
        ( 11060, -21612), (-1,  2)
        (-54350, -10707), ( 5,  1)
        (-32568,  54719), ( 3, -5)
        (-43458,  11104), ( 4, -1)
        (-32548, -54328), ( 3,  5)
        (-32589,  54725), ( 3, -5)
        ( 43786,  32911), (-4, -3)
        ( 21940, -32521), (-2,  3)
        ( 32860, -54323), (-3,  5)
        (-54363, -21610), ( 5,  2)
        ( 32846,  54720), (-3, -5)
        (-54396, -32517), ( 5,  3)
        (-32560,  22006), ( 3, -2)
        (-32549, -10706), ( 3,  1)
        ( 54711, -21613), (-5,  2)
        (-21676, -10704), ( 2,  1)
        ( 32878,  11099), (-3, -1)
        ( 32886, -10710), (-3,  1)
        (-21628,  54719), ( 2, -5)
        ( 43802,  54723), (-4, -5)
        (-43485, -21608), ( 4,  2)
        (-10719, -10703), ( 1,  1)
        ( 11043, -21617), (-1,  2)
        (-54343, -54328), ( 5,  5)
        (-10746, -21614), ( 1,  2)
        (-54399, -54326), ( 5,  5)
        ( 43794,  32913), (-4, -3)
        ( 21984, -32519), (-2,  3)
        ( 43770,  43813), (-4, -4)
        ( 32878, -21616), (-3,  2)
        ( 21965, -43424), (-2,  4)
        (-10746, -32519), ( 1,  3)
        ( 11088, -54328), (-1,  5)
        (-32541, -10710), ( 3,  1)
        ( 32873, -10703), (-3,  1)
        ( 32846, -10706), (-3,  1)
        ( 11087,  32916), (-1, -3)
        ( 54667, -21610), (-5,  2)
        ( 21984, -10707), (-2,  1)
        ( 11065, -10708), (-1,  1)
        ( 54708, -54332), (-5,  5)
        (-54362, -43418), ( 5,  4)
        (-32549,  11106), ( 3, -1)
        ( 54684, -10705), (-5,  1)
        (-54347, -54331), ( 5,  5)
        ( 43765, -21613), (-4,  2)
        ( 11082,  54725), (-1, -5)
        ( 11050, -10703), (-1,  1)
        ( 21948, -32514), (-2,  3)
        (-21648, -32519), ( 2,  3)
        (-43474,  54727), ( 4, -5)
        (-54343, -43418), ( 5,  4)
        ( 11031, -43425), (-1,  4)
        ( 11076,  32909), (-1, -3)
        ( 11059, -54325), (-1,  5)
        (-43493, -54327), ( 4,  5)
        ( 54694, -32518), (-5,  3)
        (-54391, -54324), ( 5,  5)
        (-21660, -32521), ( 2,  3)
        ( 54699, -10706), (-5,  1)
        (-54383,  11106), ( 5, -1)
        (-10755,  54723), ( 1, -5)
        (-10720, -21608), ( 1,  2)
        (-21631, -54332), ( 2,  5)
        (-54378,  32910), ( 5, -3)
        (-10759, -10712), ( 1,  1)
        ( 43786, -32519), (-4,  3)
        (-32570,  54718), ( 3, -5)
        (-32540, -43423), ( 3,  4)
        (-21632, -21616), ( 2,  2)
        (-10718, -32522), ( 1,  3)
        ( 11060,  11103), (-1, -1)
        (-43446, -43427), ( 4,  4)
        (-21660,  43820), ( 2, -4)
        ( 43773, -43422), (-4,  4)
        (-10735,  22007), ( 1, -2)
        ( 32846,  43820), (-3, -4)
        (-10779,  54720), ( 1, -5)
        (-54394, -43423), ( 5,  4)
        (-10747,  32917), ( 1, -3)
        (-10755,  32917), ( 1, -3)
        ( 54680, -32515), (-5,  3)
        ( 11079,  32916), (-1, -3)
        ( 43803,  54727), (-4, -5)
        ( 11082,  32915), (-1, -3)
        ( 54710,  32908), (-5, -3)
        ( 54652, -10711), (-5,  1)
        (-10750,  22012), ( 1, -2)
        ( 43758,  32909), (-4, -3)
        (-10759,  54721), ( 1, -5)
        (-32541,  11105), ( 3, -1)
        (-54349,  54724), ( 5, -5)
        (-43442, -54331), ( 4,  5)
        (-32577, -32519), ( 3,  3)
        (-54399, -21611), ( 5,  2)
        ( 21952, -21617), (-2,  2)
        ( 11087, -10710), (-1,  1)
        ( 21994, -54323), (-2,  5)
        ( 11076, -21614), (-1,  2)
        ( 11064, -32515), (-1,  3)
        (-43476,  11107), ( 4, -1)
        ( 32869, -32514), (-3,  3)
        ( 11036,  32911), (-1, -3)
        (-32541,  43819), ( 3, -4)
        (-10767,  43815), ( 1, -4)
        ( 43746,  22008), (-4, -2)
        (-10775,  11103), ( 1, -1)
        (-32585, -32521), ( 3,  3)
        (-54359,  32916), ( 5, -3)
        ( 54652,  11099), (-5, -1)
        (-32549, -54323), ( 3,  5)
        ( 43775, -10703), (-4,  1)
        ( 32877, -54326), (-3,  5)
        ( 11036, -43422), (-1,  4)
        ( 54702,  22010), (-5, -2)
        ( 32867,  43816), (-3, -4)
        ( 43772,  22007), (-4, -2)
        (-10742,  54719), ( 1, -5)
        ( 54696, -10712), (-5,  1)
        ( 11071, -21613), (-1,  2)
        ( 43797,  54720), (-4, -5)
        ( 21965, -32514), (-2,  3)
        ( 54691,  54725), (-5, -5)
        ( 21965,  22010), (-2, -2)
        (-10723,  43821), ( 1, -4)
        ( 54672,  43814), (-5, -4)
        ( 43775,  54726), (-4, -5)
        (-54351, -10707), ( 5,  1)
        ( 21976, -10703), (-2,  1)
        (-43474, -43424), ( 4,  4)
        (-43489,  11101), ( 4, -1)
        (-10755, -32513), ( 1,  3)
        (-54362,  32916), ( 5, -3)
        (-21655, -43424), ( 2,  4)
        ( 43791, -32513), (-4,  3)
        ( 21960,  22009), (-2, -2)
        (-54351,  11102), ( 5, -1)
        ( 54707, -32514), (-5,  3)
        ( 21985, -32517), (-2,  3)
        ( 32862,  11100), (-3, -1)
        ( 32874,  32914), (-3, -3)
        (-21636, -54332), ( 2,  5)
        ( 21961,  54720), (-2, -5)
        (-54394, -43423), ( 5,  4)
        ( 21948, -21616), (-2,  2)
        (-32584, -21614), ( 3,  2)
        ( 32886,  22008), (-3, -2)
        (-21627, -32522), ( 2,  3)
        (-43460, -32517), ( 4,  3)
        ( 54696, -32519), (-5,  3)
        (-32560, -32522), ( 3,  3)
        (-32578,  54718), ( 3, -5)
        (-54399,  54723), ( 5, -5)
        (-43470,  22003), ( 4, -2)
        ( 11036,  11104), (-1, -1)
        (-10760, -43427), ( 1,  4)
        (-54387, -21611), ( 5,  2)
        (-32530, -21608), ( 3,  2)
        ( 43799,  32908), (-4, -3)
        (-10763, -32513), ( 1,  3)
        (-54378,  43813), ( 5, -4)
        (-54394, -54325), ( 5,  5)
        ( 43796, -21611), (-4,  2)
        ( 54675,  54725), (-5, -5)
        (-32589, -32513), ( 3,  3)
        (-21684, -54330), ( 2,  5)
        ( 43780, -10708), (-4,  1)
        (-43449, -54329), ( 4,  5)
        (-54343,  43819), ( 5, -4)
        ( 32898,  54722), (-3, -5)
        ( 21976, -21612), (-2,  2)
        ( 54668,  54718), (-5, -5)
        ( 11044, -10712), (-1,  1)
        ( 11063, -32522), (-1,  3)
        ( 11071, -43423), (-1,  4)
        ( 54704,  54727), (-5, -5)
        ( 54651,  11101), (-5, -1)
        ( 54656, -43418), (-5,  4)
        ( 54696, -10711), (-5,  1)
        ( 32899,  54718), (-3, -5)
        (-21672, -54328), ( 2,  5)
        ( 54684,  32910), (-5, -3)
        (-54367,  11099), ( 5, -1)
        ( 11075,  11102), (-1, -1)
        (-32554,  22008), ( 3, -2)
        ( 54712, -10703), (-5,  1)
        (-10743,  11100), ( 1, -1)
        ( 11076,  43820), (-1, -4)
        ( 32881, -43427), (-3,  4)
        (-32577, -43426), ( 3,  4)
        ( 32870,  54727), (-3, -5)
        (-32536,  43822), ( 3, -4)
        (-32573,  22012), ( 3, -2)
        ( 32873, -10711), (-3,  1)
        (-21655, -54325), ( 2,  5)
        ( 43791,  43819), (-4, -4)
        (-54388,  22003), ( 5, -2)
        ( 54712,  32908), (-5, -3)
        (-43491, -32517), ( 4,  3)
        ( 21960,  11106), (-2, -1)
        ( 32886,  11100), (-3, -1)
        (-10767,  43819), ( 1, -4)
        (-10739, -21615), ( 1,  2)
        (-21624,  54722), ( 2, -5)
        ( 32841,  54725), (-3, -5)
        (-32549, -43421), ( 3,  4)
        ( 11079, -21617), (-1,  2)
        (-54378,  43813), ( 5, -4)
        ( 32889, -21614), (-3,  2)
        ( 11064,  32915), (-1, -3)
        (-54349,  32914), ( 5, -3)
        ( 43779, -10706), (-4,  1)
        (-54387,  22009), ( 5, -2)
        ( 21981, -32520), (-2,  3)
        (-43493, -32517), ( 4,  3)
        (-43470,  11101), ( 4, -1)
        (-32549, -32514), ( 3,  3)
        ( 21952,  32916), (-2, -3)
        ( 54675, -21613), (-5,  2)
        (-54367, -21608), ( 5,  2)
        (-10720,  32912), ( 1, -3)
        (-54399, -54327), ( 5,  5)
        ( 11050, -21613), (-1,  2)
        ( 32886, -43420), (-3,  4)
        ( 21962, -10708), (-2,  1)
        (-32584,  11103), ( 3, -1)
        ( 43748,  32913), (-4, -3)
        (-32565, -10703), ( 3,  1)
        ( 21984, -32520), (-2,  3)
        (-10768, -32513), ( 1,  3)
        ( 32843,  43813), (-3, -4)
        ( 21965, -54331), (-2,  5)
        (-32581, -10705), ( 3,  1)
        (-10739,  32910), ( 1, -3)
        ( 54709,  32917), (-5, -3)
        (-54378,  22012), ( 5, -2)
        ( 43748,  11098), (-4, -1)
        (-21647, -10712), ( 2,  1)
        ( 11058, -10706), (-1,  1)
        ( 11087, -54323), (-1,  5)
        ( 32898, -10708), (-3,  1)
        (-54387,  54718), ( 5, -5)
        ( 32889,  11104), (-3, -1)
        ( 43794, -10710), (-4,  1)
        (-32569, -32513), ( 3,  3)
        ( 21996,  11098), (-2, -1)
        (-21679, -43422), ( 2,  4)
        (-32553, -43424), ( 3,  4)
        (-10761, -32522), ( 1,  3)
        (-54372,  54723), ( 5, -5)
        ( 21953,  11104), (-2, -1)
        ( 11047,  22003), (-1, -2)
        (-21639,  32917), ( 2, -3)
        (-43444,  32911), ( 4, -3)
        ( 54653,  11103), (-5, -1)
        ( 43791,  54724), (-4, -5)
        (-21672, -21610), ( 2,  2)
        (-54367,  11106), ( 5, -1)
        ( 32866,  22004), (-3, -2)
        ( 32874,  43819), (-3, -4)
        (-32533,  43820), ( 3, -4)
        (-21648,  22010), ( 2, -2)
        (-43493, -21616), ( 4,  2)
        ( 43763,  43813), (-4, -4)
        (-54359,  54720), ( 5, -5)
        ( 43794,  43814), (-4, -4)
        ( 54653, -54327), (-5,  5)
        (-10739,  11099), ( 1, -1)
        (-32577,  22008), ( 3, -2)
        ( 54696, -32518), (-5,  3)
        ( 11076,  54722), (-1, -5)
        (-10776, -32522), ( 1,  3)
        (-54358,  32912), ( 5, -3)
        ( 11087, -10712), (-1,  1)
        ( 43758, -21613), (-4,  2)
        ( 54693, -54328), (-5,  5)
        (-21628,  43820), ( 2, -4)
        (-54343,  54725), ( 5, -5)
        ( 21940, -54331), (-2,  5)
        (-43492, -43427), ( 4,  4)
        ( 21986,  43816), (-2, -4)
        ( 11060, -10704), (-1,  1)
        ( 54696,  11106), (-5, -1)
        ( 32876,  32913), (-3, -3)
        ( 43787,  22007), (-4, -2)
        (-32586,  22008), ( 3, -2)
        ( 32899, -10703), (-3,  1)
    |]
    
    module Part1 =
    
        let shift n = 
            input
            |> Seq.map (fun ((x0,y0), (vx, vy)) -> (x0 + vx * n, y0 + vy * n))
    
        let size points = 
            ((Seq.map fst points |> Seq.min , Seq.map snd points |> Seq.min), (Seq.map fst points |> Seq.max , Seq.map snd points |> Seq.max) )
            |> (fun ((x1,y1),(x2,y2)) -> (x1,y1),(x2,y2), (x2-x1, y2-y1), x2-x1 + y2-y1 )
        
        //for n in 10860.. 1 ..10950 do
        //    shift n |> size |> printfn "%d = %A" n
    
        let message n =
            let points = shift n
            let (x0, y0), _, (dx, dy) , _ = size points |>! print
            let msg = Array.create (dx + 1) (Array.create (dy + 1) ' ')
                      |> Array.map (fun _ -> (Array.create (dy + 1) ' '))
            for (x, y) in points do 
                msg.[x - x0].[y - y0] <- '#'
            for y in 0..dy do
                [| for x in 0..dx -> msg.[x].[y] |] |> System.String 
                |> print
    
        message 10905
    
    """
    
    
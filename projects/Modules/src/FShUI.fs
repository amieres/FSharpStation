#nowarn "3242"
////-d:FSharpStation1592911141642 -d:WEBSHARPER
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
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Data\lib\net461\WebSharper.Data.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\FShUIAssemblyData.dll"
//#nowarn "3242"
/// Root namespace for all code
//#define FSharpStation1592911141642
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
    
        /// Essentials that can be converted to JavaScript with WebSharper
        [< JavaScriptExport ; AutoOpen >]
        module Library = 
            let Error = Result.Error
        
            /// returns a function that delays its execution
            /// cancels prior when multiple calls happen before the delay
            let delayedA delay doF =
                let mutable cancelTokenO = None
                fun parm -> 
                    let asy = async {
                        do! Async.Sleep delay
                        do! doF parm
                    } 
                    cancelTokenO |> Option.iter (fun (tokenSource: System.Threading.CancellationTokenSource) -> tokenSource.Cancel())
                    cancelTokenO <- Some <| new System.Threading.CancellationTokenSource()
                    Async.Start(asy, cancellationToken = cancelTokenO.Value.Token)
            
            /// returns a function that delays its execution
            /// cancels prior when multiple calls happen before the delay
            let delayed delay doF = delayedA delay (doF >> async.Return)
            
            #if WEBSHARPER
            
            let delayedVar delay (var:Var<_>) =
                let delayedV = Var.Create var.Value
                var.View |> View.Sink (delayed delay delayedV.Set)
                delayedV
            
            #endif
            
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Data\lib\net461\WebSharper.Data.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.dll"
            
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\FShUIAssemblyData.dll"
            
            [< JavaScriptExport >]
            module FShUI_AssemblyData2 =
                open FsRoot.Library.FShUI_AssemblyData
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
            
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER 
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\FShUIAssemblyData.dll"
            module WsComposition =
                open FsRoot.Library.FShUI_AssemblyData
                open WebSharper.JavaScript
            
                type Reference<'I, 'R> =
                    | RefJs   of string
                    | RefAsm  of ModuleName * MethodDef
                    | RefFunc of ('I -> 'R) * name: string
                    member this.GetFunc() : 'I -> 'R = 
                        let getFunc js p =
                            try ((JS.Eval js) :?> ('I -> 'R)) p
                            with e -> failwithf "Error %s \n Evaluating JS: %s" e.Message js
                        match this with
                        | RefFunc(f,  _ ) -> f
                        | RefJs   js      -> getFunc js
                        | RefAsm (md, mt) -> getFunc (sprintf "%s.%s" md.Id2 mt.name.Id)
                    override this.ToString() =
                        match this with
                        | RefFunc(f,  nm) -> nm
                        | RefJs   js      -> js
                        | RefAsm (md, mt) -> sprintf "%s.%s" md.Id2 mt.name.Id
            
                type HtmlElemTag = HtmlElemTag of string
                                        member this.Id = match this with HtmlElemTag t -> t
                                        override this.ToString() = sprintf "<%s>" this.Id
            
                type LocalId = LocalId of string
                                        member this.Id = match this with LocalId  t -> t
            
                type DocComposition =
                    | DOCLcText  of name: LocalId *      string   
                    | DOCLcVar   of name: LocalId *  Var<string  >
                    | DOCAction  of Reference<unit,      unit    >
                    | DOCInt     of Reference<unit,      int     >
                    | DOCIntW    of Reference<unit, View<int   > >
                    | DOCIntV    of Reference<unit, Var< int   > >
                    | DOCOther   of Reference<unit,      obj     >
                    | DOCOtherW  of Reference<unit, View<obj   > >
                    | DOCOtherV  of Reference<unit, Var< obj   > >
                    | DOCString  of Reference<unit,      string  >
                    | DOCView    of Reference<unit, View<string> >
                    | DOCVar     of Reference<unit, Var< string> >
                    | DOCVarInp  of Reference<unit, Var< string> >
                    | DOCRef     of Reference<unit, Doc          >
                    | DOCRefW    of Reference<unit, View<Doc   > >
                    | DOCOne     of name: LocalId * (unit -> Doc)
                    | DOCEmpty
                    | DOCHtml    of HtmlElemTag option * DocComposition[]
                    member this.GetDoc() =
                        match this with
                        | DOCLcText(nm, s ) ->    s                                              |> Doc.TextNode
                        | DOCLcVar (nm, sV) ->    sV           .View                             |> Doc.TextView
                        | DOCAction    ref  ->  Doc.Button (ref.ToString()) [] (ref.GetFunc() )
                        | DOCInt       ref  ->  ref.GetFunc()()       |>           sprintf "%d"  |> Doc.TextNode
                        | DOCIntW      ref  ->  ref.GetFunc()()       |> View.Map (sprintf "%d") |> Doc.TextView
                        | DOCIntV      ref  -> (ref.GetFunc()()).View |> View.Map (sprintf "%d") |> Doc.TextView
                        | DOCOther     ref  ->  ref.GetFunc()()       |>           sprintf "%A"  |> Doc.TextNode
                        | DOCOtherW    ref  ->  ref.GetFunc()()       |> View.Map (sprintf "%A") |> Doc.TextView
                        | DOCOtherV    ref  -> (ref.GetFunc()()).View |> View.Map (sprintf "%A") |> Doc.TextView
                        | DOCString    ref  ->  ref.GetFunc()()                                  |> Doc.TextNode
                        | DOCView      ref  ->  ref.GetFunc()()                                  |> Doc.TextView
                        | DOCVar       ref  -> (ref.GetFunc()()).View                            |> Doc.TextView
                        | DOCVarInp    ref  -> (ref.GetFunc()())                                 |> Doc.Input []
                        | DOCRef       ref  ->  ref.GetFunc()()
                        | DOCRefW      ref  ->  ref.GetFunc()()                                  |> Doc.EmbedView
                        | DOCOne  (_, fd  ) ->  fd()
                        | DOCEmpty          -> Doc.Empty
                        | DOCHtml (tO, dcs) ->  let fd = tO |> Option.map(fun tag ds -> Doc.Element tag.Id [] ds :> Doc ) 
                                                            |> Option.defaultValue Doc.Concat
                                                dcs
                                                |> Array.map (fun dc -> dc.GetDoc())
                                                |> fd
            
                open WebSharper.UI
                open WebSharper.UI.Html
            
                let rec getUIDoc (setDOC ) =
                    function
                    | DOCLcText(nm, v) ->
                        Var.Make 
                             (View.Const v)
                             (delayed 1000
                                 <| fun v -> 
                                     let vO = match v.Trim() with "" -> None | v2 -> Some (HtmlElemTag v2)
                                     setDOC(DOCLcText(nm, v)) 
                             )
                        |> Doc.Input []
                    
                    | DOCLcVar (nm, _ ) ->  text <| nm.Id
                    | DOCAction    ref  ->  text <| ref.ToString()
                    | DOCInt       ref  ->  text <| ref.ToString()
                    | DOCIntW      ref  ->  text <| ref.ToString()
                    | DOCIntV      ref  ->  text <| ref.ToString()
                    | DOCOther     ref  ->  text <| ref.ToString()
                    | DOCOtherW    ref  ->  text <| ref.ToString()
                    | DOCOtherV    ref  ->  text <| ref.ToString()
                    | DOCString    ref  ->  text <| ref.ToString()
                    | DOCView      ref  ->  text <| ref.ToString()
                    | DOCVar       ref  ->  text <| ref.ToString()
                    | DOCVarInp    ref  ->  text <| ref.ToString()
                    | DOCRef       ref  ->  text <| ref.ToString()
                    | DOCRefW      ref  ->  text <| ref.ToString()
                    | DOCOne  (nm, _  ) ->  text <| nm.Id
                    | DOCEmpty          ->  text <| "Empty"
                    | DOCHtml (tO, dcs) ->
                        let setDOCH(tO, dcs) = setDOC(DOCHtml (tO, dcs)) 
                        let tag = tO |> Option.map (fun t -> t.Id) |> Option.defaultValue ""
                        let tagV = Var.Make 
                                        (View.Const tag)
                                        (delayed 1000
                                            <| fun v -> 
                                                let vO = match v.Trim() with "" -> None | v2 -> Some (HtmlElemTag v2)
                                                setDOC(DOCHtml (vO, dcs)) 
                                        )
                        tr [] [
                            text "Html "
                            Doc.Input [] tagV
                            dcs
                            |> Array.mapi (fun i dc -> tr [] [ 
                                td[] [
                                    if i > 0              then yield Doc.Button "^" [] (fun ()  -> setDOCH(tO, Array.collect id [| dcs.[..i-2] ; [| dc        ; dcs.[i-1] |] ; dcs.[i+1..] |] ) )
                                ]
                                td[] [
                                    if i < dcs.Length - 1 then yield Doc.Button "v" [] (fun ()  -> setDOCH(tO, Array.collect id [| dcs.[..i-1] ; [| dcs.[i+1] ; dc        |] ; dcs.[i+2..] |] ) )
                                ]
                                td[] [
                                    dc |> getUIDoc                                     (fun ndc -> setDOCH(tO, Array.collect id [| dcs.[..i-1] ; [|            ndc        |] ; dcs.[i+1..] |] ) )  
                                ]
                                td[] [
                                    yield                            Doc.Button "x" [] (fun ()  -> setDOCH(tO, Array.collect id [| dcs.[..i-1]                               ; dcs.[i+1..] |] ) )
                                ]
                                ])
                            |> table []
                        ]
            
            
            module FShUI =
                open FsRoot.Library.FShUI_AssemblyData
                open FShUI_AssemblyData2
                open WebSharper.UI
            
                let rec processAssembly' (isLoaded) (loadDef) (fetchAsmData: _ -> Async<AssemblyDef>) (def:AssemblyDef) = 
                    async {
                        for dep in def.dependencies do
                            do! loadAssembly' isLoaded loadDef fetchAsmData dep
                        loadDef def
                    }
            
                and loadAssembly' (isLoaded) (loadDef) (fetchAsmData: _ -> Async<AssemblyDef>) (asm:AssemblyRef) = 
                    async {
                        if isLoaded asm then () else
                        let! def = fetchAsmData asm
                        do!  processAssembly' (isLoaded) (loadDef) (fetchAsmData: _ -> Async<AssemblyDef>) def
                    }
            
                open WebSharper.JavaScript
            
                let assemblies : ListModel<AssemblyName, AssemblyDef> = ListModel.Create (fun ad -> ad.name) []
                let isLoaded      asmRef           = assemblies.TryFind (fun ad -> ad.self = asmRef) |> Option.isSome
                let loadDef       def              = 
                    try 
                        //let asms = assemblies.Value |> Seq.toList
                        for jsn, code in def.javaScripts do
                            sprintf "console.log('loading %s %s ...');%s" def.name.Id jsn code.Id |> JS.Eval |> ignore
                        //assemblies.Set (def :: asms)
                        assemblies.Add def
                    with e -> printfn "%A" e
            
                module LoadAsm =
                    open FSharp.Data
            
                    let fetchAsmData folder = 
                        function 
                        AssemblyRef url -> async {
                            let  url1 = if url.Contains "/" then url else folder + url
                            let! json = AsmJson.AsyncLoad(url1)
                            return
                                {
                                    name         = AssemblyName json.AsName
                                    self         = AssemblyRef url
                                    javaScripts  = json.JsModules    |> Array.map(fun j -> j.JsName, JSCode j.Code)
                                    dependencies = json.Dependencies |> Array.map AssemblyRef
                                    resources    = json.Resources    |> Array.map Resource
                                    modules      = json.Modules      |> Array.map(fun mo -> {
                                                        name    = ModuleName mo.MoName
                                                        methods = mo.Methods |> Array.map(fun me -> {
                                                            name    = MethodName me.MeName
                                                            isField = me.IsField = 1
                                                            retType = {
                                                                name = TypeName me.Type.TName
                                                                asm  = AssemblyName me.Type.Asm
                                                            }
                                                            parms = me.Parms |> Array.map (fun p -> {
                                                                name = TypeName p.TName
                                                                asm  = AssemblyName p.Asm
                                                            })
                                                        })
                                                    })
                                }
                        }
            
                let Folder  = "/EPFileX/Assemblies/"
            
                let restartAssemblies() =
                    let asms = assemblies.Value |> Seq.toArray
                    //JS.Inline "$global.IntelliFactory.Runtime.Start()"
                    assemblies.Set asms
            
                let loadAssembly asm = async {
                    do! loadAssembly' isLoaded loadDef (LoadAsm.fetchAsmData Folder) asm
                    restartAssemblies()
                }
            
                let processAssembly def = async {
                    do! processAssembly' isLoaded loadDef (LoadAsm.fetchAsmData Folder) def
                    restartAssemblies()
                }
            
                let alreadyLoaded() = Seq.length assemblies.Value > 0
            
            module AssemblyUI =
                open FsRoot
                open FShUI_AssemblyData
                open FShUI_AssemblyData2
                open WebSharper.UI
                open WsComposition
            
                let loadTesting() =
                    FShUI.loadAssembly (AssemblyRef <| sprintf  "testing.asm?q=%A" System.DateTime.Now)
                    |> Async.Start
            
                let thisModuleV = Var.Create "Covid.asm"
            
                let loadThisModule  () = FShUI.loadAssembly (AssemblyRef thisModuleV.Value       ) |> Async.Start
                let loadFsTranslator() = FShUI.loadAssembly (AssemblyRef "WsTranslatorLoader.asm") |> Async.Start
            
                open WebSharper.UI
                open WebSharper.UI.Html
            
                let nobr()  = attr.style "white-space: nowrap"
                let click f = Html.on.click (fun _ _ -> f())
            
                let selectedAssembly = Var.Create None
                let mainDocNameVar   = Var.Create (DOCLcText(LocalId "NotInitialized" ,"mainDocNameVar Not initialized yet") )
            
                let listAssembliesDoc() =
                    table [] [
                        FShUI.assemblies.Doc(fun r asmW ->
                            let selAssembly() = selectedAssembly.Set (Some r) 
                            tr [] [ td [ click selAssembly ] [ text asmW.V.name.Id  ] ]
                        )
                    ]
            
                let selectedMethod = Var.Create None
            
                let methodRows p (asm: AssemblyDef) f =
                    table [ attr.style "font-family: monospace" ] [
                        for mo in asm.modules do
                            let methods = mo.methods |> Seq.filter p
                            if Seq.length methods > 0 then
                                yield
                                    tr [] [ 
                                        yield td [] [ 
                                            yield b [] [ text mo.name.Id2 ]
                                            for me in methods do
                                                let selMethod() = selectedMethod.Set (Some (mo.name, me.name))
                                                yield
                                                    tr [ click selMethod ] [ 
                                                        td [        ] [ me        .name.Id                    |> text ] 
                                                        td [        ] [ (if me.isField then ""  else me.parms |> Seq.map (fun t -> t.name.Id) |> String.concat ", " |> sprintf "(%s)") |>  text ] 
                                                        td [ nobr() ] [ (if me.isField then ":" else " -> ")  |> text ] 
                                                        td [        ] [ me.retType.name.Id                    |> text ] 
                                                        td [        ] [ f mo me                                       ] 
                                                    ]
                                        ]
                                    ]
                    ]
            
                open WebSharper.JavaScript
            
                let styleDoc() =
                    Doc.Element "style" [] [
                        text """
                            .wsfmwk-alternate > * :nth-child(even) {background: #CCF}
                            .wsfmwk-alternate > * :nth-child(odd ) {background: #CFC}
                            .wsfmwk-alternate td { border: white ; border-style: solid ; border-width: thin}
                            .wsfmwk-alternate tr { border: white ; border-style: solid ; border-width: thin}
                        """
                    ]
            
                let addDOC docc =
                    match mainDocNameVar.Value with
                    | DOCEmpty         ->                                   docc
                    | DOCHtml(tO, dcs) -> DOCHtml(tO  , Array.append dcs [| docc |])
                    | dc               -> DOCHtml(None,           [| dc  ;  docc |])
                    |> mainDocNameVar.Set
            
                let showAdd txt (docc:DocComposition) = Doc.Button txt  [] (fun () -> addDOC docc)
            
                let assemblyDoc (asm: AssemblyDef) =
                    let emptyDoc (mo:ModuleDef) (me:MethodDef) = Doc.Empty
                    let showView (mo:ModuleDef) (me:MethodDef) =
                        match me.retType.name.Id with
                        | "View<string>" -> let docc =      Reference<unit, View<string>>.RefAsm(mo.name, me) |> DOCView
                                            Doc.Concat [ showAdd "Add" docc ; docc.GetDoc() ]
                        | _              -> showAdd "Add"  (Reference<unit, View<_     >>.RefAsm(mo.name, me) |> DOCOtherW)
                    let inputVar (mo:ModuleDef) (me:MethodDef) = 
                        match me.retType.name.Id with
                        | "Var<string>"  -> let ref  = Reference<unit, Var< string>>.RefAsm(mo.name, me)
                                            let doci = DOCVarInp ref
                                            Doc.Concat [ showAdd "Text" (DOCVar ref) ; showAdd "Input" doci ; showAdd "Area" doci ; doci.GetDoc() ]
                        | _              -> showAdd "Add" (Reference<unit, Var< _     >>.RefAsm(mo.name, me) |> DOCOtherV)
                    let printText (mo:ModuleDef) (me:MethodDef) = 
                        match me.retType.name.Id with
                        | "string"       -> let docc = Reference<unit,      string >.RefAsm(mo.name, me) |> DOCString
                                            Doc.Concat [ showAdd "Add" docc ; docc.GetDoc() ]
                        | _              -> showAdd "Add" (Reference<unit,      _      >.RefAsm(mo.name, me) |> DOCOther)
                    let showDoc (mo:ModuleDef) (me:MethodDef) = RefAsm(mo.name, me) |> DOCRef |> showAdd "Add"
                    let groups0 = 
                        [
                            inputVar  , fun me -> me.retType.name.Id.StartsWith "Var<"  &&  me.isField
                            showView  , fun me -> me.retType.name.Id.StartsWith "View<" &&  me.isField
                            printText , fun me -> me.retType.name.Id         <> "Doc"   &&  me.isField && (not <| me.retType.name.Id.Contains "->")
                            showDoc   , fun me -> me.retType.name.Id         =  "Doc"   && (me.isField || Seq.isEmpty me.parms)
                            emptyDoc  , fun me -> true
                        ]
                    let groups, _ = 
                        ((fun _ -> false), 
                         groups0) 
                        ||> Seq.mapFold (fun oldp (f,p) -> 
                            (f, fun me -> p me && not (oldp me)), 
                            (   fun me -> p me ||      oldp me))
                    Doc.Concat [
                        h3  [] [ text asm.name.Id ]
                        div [ Attr.Class "wsfmwk-alternate"] [
                            for f, gr in groups do
                                yield methodRows gr asm f
                        ]
                    ]
            
                let currentAssembly() = 
                    View.Do {
                        let! selO = selectedAssembly.View
                        match selO with
                        | None                    -> return Doc.Empty
                        | Some (asm:AssemblyName) ->
                        let!  asmO = FShUI.assemblies.TryFindByKeyAsView asm
                        match asmO with
                        | None                    -> return Doc.Empty
                        | Some (asm:AssemblyDef)  ->
                        return assemblyDoc asm
                    }
                    |> Doc.BindView id
                    
                let assembliesDoc() =
                    Doc.Concat [
                        div [] [
                            Doc.Button "Load module:"        [] loadThisModule
                            Doc.Input                        []     thisModuleV
                        ]
                        Doc    .Button "Load F# Translator:" [] loadFsTranslator
                        listAssembliesDoc()
                        currentAssembly  ()
                        styleDoc         ()
                    ]
            
                let mainDocVar     = Var.Create (h1 [] [ text "mainDocVar not initialized" ])
            
                if IsClient then
                    mainDocNameVar.View
                    |> View.Sink(fun docc -> mainDocVar.Set <| docc.GetDoc() )
            
                let mainDocInput() = 
                    div [] [ 
                        text "mainDocNameVar:"
                        Doc.Button "Clear"    [] (fun () ->  mainDocNameVar.Set DOCEmpty )
                        mainDocNameVar.View |> Doc.BindView (getUIDoc mainDocNameVar.Set )
                        Doc.Button "Add text" [] (fun () ->  addDOC <| DOCLcText(LocalId "t1", "Text") )
                        Doc.Button "Add html" [] (fun () ->  addDOC <| DOCHtml(Some(HtmlElemTag "br"), [||] ) )
                    ] 
            
                let mainSubDoc = 
                    if IsClient then
                        mainDocVar.View |> Doc.BindView id
                    else
                        Doc.Empty
            
            
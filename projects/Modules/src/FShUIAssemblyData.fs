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
        
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.dll"
            
            //#define WEBSHARPER
            [< JavaScriptExport >]
            module FShUI_AssemblyData =
            
                type ModuleName   = ModuleName   of string with member this.Id = match this with ModuleName   v -> v
                                                                member this.Id2= this.Id.Replace("+", ".")
                type TypeName     = TypeName     of string with member this.Id = match this with TypeName     v -> v
                type MethodName   = MethodName   of string with member this.Id = match this with MethodName   v -> v
                type AssemblyName = AssemblyName of string with member this.Id = match this with AssemblyName v -> v
                type AssemblyRef  = AssemblyRef  of string with member this.Id = match this with AssemblyRef  v -> v
                type JSCode       = JSCode       of string with member this.Id = match this with JSCode       v -> v
                type Resource     = Resource     of string with member this.Id = match this with Resource     v -> v
            
                type ModuleRef    = {
                    name          : ModuleName
                    asmName       : AssemblyName
                }
            
                type TypeRef      = {
                    name          : TypeName
                    asm           : AssemblyName
                }
            
                type MethodDef    = {
                    name          : MethodName
                    retType       : TypeRef
                    parms         : TypeRef[]
                    isField       : bool
                }
            
                type ModuleDef    = {
                    name          : ModuleName
                    methods       : MethodDef []
                } 
            
                type AssemblyDef  = {
                    name          : AssemblyName
                    self          : AssemblyRef
                    modules       : ModuleDef   []
                    dependencies  : AssemblyRef []
                    resources     : Resource    []
                    javaScripts   : (string * JSCode) []
                }
            
            (*    module LoadAsm =
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
                        *)
            
                [< JavaScript false >]
                module CreateAsm =
            
                    let getInfo fname =
                        use stream = new System.IO.FileStream(fname, System.IO.FileMode.Open)
                        WebSharper.Core.Metadata.IO.Decode stream
            
                    module Desc = 
                        open WebSharper.Core.AST
                        open WebSharper.Core.Metadata
            
                        let replcs = [
                            "`1"                                   , ""      
                            "`2"                                   , ""      
                            "`3"                                   , ""      
                            "`4"                                   , ""      
                        ]
            
                        let doReplaces (str:string) =
                            replcs
                            |> Seq.map (fun (a,b) -> fun (str:string) -> str.Replace(a,b))
                            |> Seq.reduce (>>)
                            <| str
            
                        let primitiveTypes t =
                            [   "System.String"                               , "string"
                                "System.Int32"                                , "int"
                                "System.Boolean"                              , "bool"
                                "Microsoft.FSharp.Collections.FSharpList`1"   , "List"
                                "Microsoft.FSharp.Collections.FSharpMap`2"    , "Map"
                                "Microsoft.FSharp.Collections.FSharpSet`1"    , "Set"
                                "Microsoft.FSharp.Control.FSharpAsync`1"      , "Async"
                                "Microsoft.FSharp.Core.FSharpOption`1"        , "Option"
                                "Microsoft.FSharp.Core.FSharpResult`2"        , "Result"
                                "Microsoft.FSharp.Core.Unit"                  , "unit"
                            ] 
                            |> Seq.tryPick(fun (p, r) -> if t = p then Some r else None)
            
                        let removeOpens opens (t:string) =
                            [|  "FSharp.Core"
                                "netstandard"
                                "System.Collections.Generic"
                                "System"
                                "WebSharper.UI"
                                "Microsoft.FSharp.Collections"
                                "Microsoft.FSharp.Control"
                                "Microsoft.FSharp.Core"
                            |] 
                            |> Seq.append opens
                            |> Seq.tryPick(fun o -> if t.StartsWith (o + ".") || t.StartsWith (o + "+") then Some (t.Substring(o.Length + 1)) else None)
                            |> Option.defaultValue t
            
                        let simplify opens t =
                            primitiveTypes t
                            |> Option.defaultWith (fun () -> 
                                removeOpens opens t
                                |> doReplaces
                            )
            
                        let rec getNameAsmMod opens ty =
                            let getTN = getTypeName opens
                            match ty with
                            | StaticTypeParameter i
                            | TypeParameter       i      -> sprintf "'%c" (System.Convert.ToChar(97 + i)), "", ""
                            | FSharpFuncType (a, r)      -> sprintf "(%s -> %s)" (getTN a) (getTN r), "FSharp.Core", ""
                            | ByRefType       t          -> getNameAsmMod opens t
                            | VoidType                   -> "unit", "FSharp.Core", ""
                            | LocalTypeParameter         -> "_", "", ""
                            | ArrayType (t, i)           -> let tn, ta, tm = getNameAsmMod opens t
                                                            String.replicate (i - 1) "," |> sprintf "%s[%s]" tn, ta, tm
                            | ConcreteType t             -> let e = t.Entity.Value
                                                            simplify opens e.FullName +
                                                                match t.Generics with
                                                                | [] -> ""
                                                                | gs -> gs |> Seq.map getTN |> String.concat ", " |> sprintf "<%s>"
                                                            , e.Assembly
                                                            , ""
                            | TupleType (ts, v)          -> if not v then ts |> Seq.map getTN |> String.concat " * " |> sprintf "(%s)", "netstandard", ""  else 
                                                            let name = "System.ValueTuple`"
                                                            let rec getName l (ts: List<Type>) =
                                                                if l <= 7 then
                                                                    name + (string l) + "[[" + String.concat "],[" (ts |> Seq.map getTN) + "]]"
                                                                else
                                                                    name + "8[[" + 
                                                                        String.concat "],[" (ts |> Seq.take 7 |> Seq.map getTN) + 
                                                                        getName (l - 7) (ts |> Seq.skip 7 |> List.ofSeq) + "]]"
                                                            getName (List.length ts) ts, "netstandard", ""
            
                        and getTypeName (opens: string seq) (this:Type) =
                            let a, b, c = getNameAsmMod opens this
                            a
            
            
                        let getTypeRef asm mdl (typ:Type) = {
                            name = getTypeName [ mdl ] typ |> TypeName
                            asm  = AssemblyName (
                                            try 
                                                typ.TypeDefinition.Value.Assembly
                                            with _ -> ""
                                        )
                        }
            
                        let descMethod asm mdl (key:MethodInfo) (mbr: CompiledMember, opt: Optimizations, exp: Expression) =
                            match mbr with 
                            | CompiledMember.Static _ ->  
                                let getType (p:Type) = getTypeRef asm mdl p
                                let isField = 
                                    match exp with
                                    | Function([], Return(Sequential [Application (GlobalAccess address1,[],NonPure, Some 0); GlobalAccess address2])) -> true
                                    | _ -> false
                                let parms =
                                    if isField then [||] else
                                    key.Parameters 
                                    |> Seq.map getType
                                    |> Seq.toArray
                                {
                                    name    = MethodName key.MethodName
                                    isField = isField
                                    retType = (getType key.ReturnType)
                                    parms   = parms
                                }
                                |> Some
                            |_-> None
            
                    open Desc
            
                    let asmFromMeta asm path (info:Core.Metadata.Info) jss =
                        let deps, ress = 
                                    info.Dependencies.Nodes
                                    |> Seq.choose (function 
                                        | WebSharper.Core.Metadata.AssemblyNode(nm, true) when nm <> asm-> AssemblyRef <| nm + ".asm" |> Choice1Of2 |> Some
                                        | WebSharper.Core.Metadata.ResourceNode(nm, Some names) -> names |> Choice2Of2 |> Some
                                        | _ -> None)
                                    |> Seq.toArray
                                    |> Array.partition (function Choice1Of2 _ -> true |_-> false)
                        let deps  = deps
                                    |> Seq.choose (function Choice1Of2 dep -> Some dep |_-> None)
                                    |> Seq.toArray
                        let ress  = ress
                                    |> Seq.choose(function Choice2Of2(Core.Metadata.ParameterObject.Array ress) -> Some ress |_-> None)
                                    |> Seq.collect id
                                    |> Seq.choose(function Core.Metadata.ParameterObject.String res -> Some (Resource res) |_-> None)
                                    |> Seq.toArray
                        let modules =
                            info.Classes
                            |> Seq.map(fun kvp ->
                                let mdl = kvp.Key.Value.FullName
                                {
                                    name    = ModuleName mdl
                                    methods = kvp.Value.Methods |> Seq.choose(fun mtd -> descMethod asm mdl mtd.Key.Value mtd.Value) |> Seq.toArray
                                } 
                            ) 
                            |> Seq.toArray
                        {
                            name          = AssemblyName         asm
                            self          = AssemblyRef  (path + asm + ".asm")
                            modules       = modules
                            dependencies  = deps
                            resources     = ress
                            javaScripts   = jss
                        }
            
                    open System
                    open System.Reflection
            
                    type ReferenceLoader() =
                        inherit System.MarshalByRefObject()
                        member this.MetaFromAsm(asmRef:string) =
                            let asmR  = System.IO.File.ReadAllBytes asmRef |> System.Reflection.Assembly.ReflectionOnlyLoad
                            let jss   = asmR.GetManifestResourceNames() 
                                        |> Seq.choose(fun nm ->
                                            printfn "%s" nm
                                            if nm.EndsWith ".js" |> not || nm.EndsWith ".min.js" then None else
                                            use str = asmR.GetManifestResourceStream nm
                                            use rdr = new System.IO.StreamReader(str)
                                            (nm, JSCode <| rdr.ReadToEnd())
                                            |> Some
                                        ) |> Seq.toArray
                            let asm   = System.IO.Path.GetFileNameWithoutExtension asmRef
                            let path  = System.IO.Path.GetDirectoryName asmRef
                            let info  = WebSharper.Core.Metadata.IO.LoadReflected asmR |> Option.defaultWith(fun () -> failwithf "Assembly not compiled with WebSharper: %s" asmRef)
                            asmFromMeta asm path info jss
            
                    let readDll asmRef  =
                        //let settings    = AppDomainSetup(ApplicationBase = AppDomain.CurrentDomain.BaseDirectory)
                        //let childDomain = AppDomain.CreateDomain(Guid.NewGuid().ToString(), null, settings);
                        //let handle      = Activator.CreateInstanceFrom(childDomain
                        //                    , typedefof<ReferenceLoader>.Assembly.Location
                        //                    , typedefof<ReferenceLoader>.FullName
                        //                    , false, (BindingFlags.NonPublic + BindingFlags.Public + BindingFlags.Instance)
                        //                    , null, null
                        //                    , Globalization.CultureInfo.CurrentCulture
                        //                    , [||])
                        let loader      = //handle.Unwrap() :?> ReferenceLoader
                            ReferenceLoader()
                        let res         = loader.MetaFromAsm asmRef
                        //AppDomain.Unload childDomain
                        res
            
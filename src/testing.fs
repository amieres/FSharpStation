#nowarn "3242"
////-d:FSharpStation1592664150800 -d:TEE -d:WEBSHARPER
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
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\WsTranslator.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\FSharp.Compiler.Service.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Compiler.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Data\lib\net461\WebSharper.Data.dll"
//#nowarn "3242"
/// Root namespace for all code
//#define FSharpStation1592664150800
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
        
            let [<Inline>] inline swap f a b = f b a
            
            /// swap: for use with operators: [1..5] |> List.map (__ (/) 2)
            let [<Inline>] inline __   f a b = f b a
            
            /// call a function but return the input value
            /// for logging, debugging
            /// use: (5 * 8) |> tee (printfn "value = %d") |> doSomethingElse
            let [<Inline>] inline tee f v = f v ; v
            
            /// tee: call a function but return the input value
            /// for logging, debugging
            /// use: (5 * 8) |!> printfn "value = %d" |> doSomethingElse
            let [<Inline>] inline  (|>!) v f   = f v ; v
            let [<Inline>] inline  (>>!) g f   = g >> fun v -> f v ; v
            
            let inline print v = 
                match box v with
                | :? string as s -> printfn "%s" s
                | __             -> printfn "%A" v
            
            //#define TEE
            type System.String with
                member this.Substring2(from, n) = 
                    if   n    <= 0           then ""
                    elif from >= this.Length then ""
                    elif from <  0           then this.Substring2(0, n + from)
                    else this.Substring(from, min n (this.Length - from))
                member this.Left             n  = if n < 0 
                                                  then this.Substring2(0, this.Length + n)
                                                  else this.Substring2(0, n              )
                member this.Right            n  = this.Substring2(max 0 (this.Length - n), this.Length)
                //member this.toUnderscore        = this |> Seq.mapi(fun i c -> if i > 0 && System.Char.IsUpper(c) then [ '_' ; c ] else [ c ])  |> Seq.collect id |> Seq.toArray |> System.String
            
            module String =
                let splitByChar (c: char) (s: string) = s.Split c
                let splitInTwoO spl txt = 
                    let i = (txt:string).IndexOf (spl:string)
                    if  i = -1 then None else
                    (txt.Left(i), txt.Substring (i + spl.Length) )
                    |> Some
                let delimitedO  op cl txt =
                    splitInTwoO op txt
                    |> Option.bind(fun (bef, sec) ->
                        splitInTwoO cl sec
                        |> Option.map(fun (mid, aft) -> bef, mid, aft)
                    )
                let contains     sub  (whole: string) = whole.Contains sub
                let trim                  (s: string) = s.Trim()
                let left  n (s:string) = s.Left  n
                let right n (s:string) = s.Right n
                let append     (a: string)(b: string) =  a + b
                let skipFirstLine (txt:string) = txt.IndexOf '\n' |> fun i -> if i < 0 then "" else txt.[i + 1..]
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
                let indent n (s:string) =
                    s.Split '\n'
                    |> Seq.map ((+) (String.replicate n " "))
                let unindentStr = unindent >> String.concat "\n"
                let indentStr i = indent i >> String.concat "\n" 
                let skipLastLine =
                       splitByChar '\n' 
                    >> fun s -> s.[0 .. (max 0 (s.Length - 2)) ]
                    >> String.concat "\n"
                let (|StartsWith|_|) (start:string) (s:string) = if s.StartsWith start then Some s.[start.Length..                          ] else None
                let (|EndsWith  |_|) (ends :string) (s:string) = if s.EndsWith   ends  then Some s.[0           ..s.Length - ends.Length - 1] else None
                let (|WhiteSpace|_|) (s:string) = if s |> Seq.exists (System.Char.IsWhiteSpace >> not) then None else Some()
                
                let thousands n =
                    let v = (if n < 0 then -n else n).ToString()
                    let r = v.Length % 3 
                    let s = if r = 0 then 3 else r
                    [   yield v.[0.. s - 1]
                        for i in 0..(v.Length - s)/ 3 - 1 do
                            yield v.[i * 3 + s .. i * 3 + s + 2]
                    ] 
                    |> String.concat ","
                    |> fun s -> if n < 0 then "-" + s else s
            
            
            module ParseO =
                let tryParseWith tryParseFunc = tryParseFunc >> function
                        | true, v    -> Some v
                        | false, _   -> None
            
            
                /// Javascript adds time zone information when parsing a date and that can change the result
                let parseDateO2  = (fun s -> s + "T00:00:00") >> tryParseWith System.DateTime.TryParse
                let parseDateO   = tryParseWith System.DateTime.TryParse
                let parseIntO    = tryParseWith System.Int32   .TryParse
                let parseInt64O  = tryParseWith System.Int64   .TryParse
                let parseSingleO = tryParseWith System.Single  .TryParse
                let parseDoubleO = tryParseWith System.Double  .TryParse
                let parseGuidO   = tryParseWith System.Guid    .TryParse
                // etc.
                
                // active patterns for try-parsing strings
                let (|Date  |_|) = parseDateO
                let (|Int   |_|) = parseIntO
                let (|Int64 |_|) = parseInt64O
                let (|Single|_|) = parseSingleO
                let (|Double|_|) = parseDoubleO
                let (|Guid  |_|) = parseGuidO
                
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.dll"
            
            [< JavaScriptExport >]
            module AssemblyData =
            
                type ModuleName   = ModuleName   of string with member this.Id = match this with ModuleName   v -> v
                                                                member this.Id2= this.Id.Replace("+", ".")
                type TypeName     = TypeName     of string with member this.Id = match this with TypeName     v -> v
                type MethodName   = MethodName   of string with member this.Id = match this with MethodName   v -> v
                type AssemblyName = AssemblyName of string with member this.Id = match this with AssemblyName v -> v
                type AssemblyRef  = AssemblyRef  of string with member this.Id = match this with AssemblyRef  v -> v
                type JSCode       = JSCode       of string with member this.Id = match this with JSCode       v -> v
            
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
                    javaScript    : JSCode
                }
            
                module LoadAsm =
                    open FSharp.Data
            
                    type AsmJson = JsonProvider<"""
                        { "asName"            : "ss"
                        , "dependencies"      : ["ref1"]
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
                        , "js"                : "ss"
                        }""", RootName="asm">
            
                [< JavaScript false >]
                module CreateAsm =
                    //let PATH = @"D:\Abe\CIPHERWorkspace\FSharpStation\bin\"
                    //let PATH = @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\"
            
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
            
                    let readDll asmRef =
                        let asmR = System.Reflection.Assembly.ReflectionOnlyLoadFrom asmRef
                        let info = WebSharper.Core.Metadata.IO.LoadReflected asmR |> Option.defaultWith(fun () -> failwithf "Assembly not compiled with WebSharper: %s" asmRef)
                        let js   =
                            asmR.GetManifestResourceNames() 
                            |> Seq.choose(fun nm ->
                                if nm.EndsWith ".js" |> not || nm.EndsWith ".min.js" then None else
                                use str = asmR.GetManifestResourceStream nm
                                use rdr = new System.IO.StreamReader(str)
                                rdr.ReadToEnd()
                                |> Some
                            )
                            |> String.concat "\n"
                            //|> Option.defaultWith(fun () -> failwithf "Assembly does not contain .js: %s" asmRef)
                        let asm  = System.IO.Path.GetFileNameWithoutExtension asmRef
                        let path = System.IO.Path.GetDirectoryName asmRef
                        let deps = info.Dependencies.Nodes
                                    |> Seq.choose (function 
                                        WebSharper.Core.Metadata.AssemblyNode(nm, true) when nm <> asm -> 
                                            Some(AssemblyRef <| nm + ".asm") 
                                        |_-> None)
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
                            javaScript    = JSCode js
                        }
            
                    open LoadAsm
            
                    let typeToJson (ty: TypeRef) =
                        AsmJson.Type(   tName        = ty.name.Id,
                                        asm          = ty.asm .Id
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
                                        js           = asmDef.javaScript.Id,
                                        dependencies = (asmDef.dependencies |> Array.map (fun r -> r.Id)),
                                        modules      = (asmDef.modules      |> Array.map moduleToJson)
                        )
            
                    open FSharp.Data
            
                    let writeAsm fname (asm:AssemblyDef) =
                        System.IO.File.WriteAllText(fname, (asmToJson asm).JsonValue.ToString())
                        
                    let convertDll fin fout = readDll fin |> writeAsm fout
            
            (*
            
            module Test =
                open FsRoot
                open AssemblyData.CreateAsm
            
                let PathOut = @"D:\Abe\CIPHERWorkspace\FSharpStation\website\EPFileX\Assemblies\"
                let Folder  = "/EPFileX/Assemblies/"
            
                let dlls = 
                    [
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\bin\testing.dll"
                        @"D:\Abe\CIPHERWorkspace\FSharpStation\website\EPFileX\Assemblies\Covid.dll"
                        //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Main.dll"
                        //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
                        //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Web.dll"
                        //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
                        //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Control.dll"
                        //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
                        //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
                        //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Data\lib\net461\WebSharper.Data.dll"
                    ]
                    |> Seq.take 1
            
                dlls
                |> Seq.iter (fun dll ->
                    let fn = System.IO.Path.GetFileNameWithoutExtension dll
                    convertDll dll (PathOut + fn + ".asm")
                )
            
                convertDll @"D:\Abe\CIPHERWorkspace\FSharpStation\bin\testing.dll"  @"D:\Abe\CIPHERWorkspace\FSharpStation\website\EPFileX\Assemblies\testing.asm"
                //|> asmToJson
                //|> fun v -> v.JsonValue.ToString() |> printfn "%s"
            
            //*)
            
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER 
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            module Pojo =
                let addProp prop (pojo:JSObject) = pojo.Add prop ; pojo
                
                let newPojo props =
                    let pojo = JSObject()
                    if IsClient then
                        props |> Seq.iter (swap addProp pojo >> ignore)
                    pojo
            
                let newPojoOpt (propOs : seq<string * obj option>) =
                    propOs
                    |> Seq.choose(fun (n,vO) -> vO |> Option.map(fun v -> n,v))
                    |> newPojo
            
    
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\WsTranslator.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\FSharp.Compiler.Service.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Compiler.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades\netstandard.dll"
    
    //#define WEBSHARPER
    [< JavaScriptExport >]
    module WasmLoader =
        open WebSharper
        open WebSharper.JavaScript
        open WebSharper.UI
        open WebSharper.UI.Html
    
        open FsRoot.WsTranslator
    
        [< Inline "(!$global.document)" >]
        let isWorker = true
    
        type WasmStatus =
        | WasmNotLoaded
        | WasmLoading
        | WasmLoaded
        | WasmWorkerLoading
        | WasmWorkerLoaded
    
        type MsgFromWorker =
        | WorkerReturnValue  of string * string
        | WorkerReturnExn    of string * string
        | WorkerPrintfn      of string
        | WorkerWasmStatus   of WasmStatus
    
        type MsgFromHost =
        | HostRunRpc       of string * string
        | HostPrintfnW     of string
        | HostLoadWasm     of string
    
        /// this Var is an exception because is not in the UI section
        /// it is used to also communication from Worker to Host with a Sink
        let wasmStatusV = Var.Create WasmNotLoaded 
    
        module Remoting =
            open WebSharper.JavaScript
    
            type IMessagingO = {
                runRpc      : string -> string -> unit
                returnValue : string *  string -> unit
                returnExn   : string *  string -> unit
                wprintfn    : string           -> unit
            }
    
            let getHeaderRpc headers : string = headers?("x-websharper-rpc")
            let private originalProvider = WebSharper.Remoting.AjaxProvider
    
            module ReturnQueue  = 
                let queues = new System.Collections.Generic.Dictionary<string, ((string -> unit) * (exn -> unit)) [] >()
                let tryGetS md  = ParseO.tryParseWith queues.TryGetValue md
                let add(md, fs) = 
                    let narr =  match tryGetS md with
                                | Some arr   -> queues.Remove md |> ignore
                                                Array.append arr [| fs |]
                                | None       ->                  [| fs |]
                    queues.Add(md, narr)
                let tryGet  md =
                    tryGetS md
                    |> Option.bind(fun arr ->
                        match Seq.tryHead arr with
                        | None    -> None
                        | Some fs ->
                        let narr = arr.[1..]
                        queues.Remove md |> ignore
                        queues.Add(md, narr)
                        Some fs
                    )
    
            [< Inline "$global.WASM_WsTranslator_FsRoot_WsTranslator_runRpc($header, $data)" >]
            let runRpc0 (header:string) (data:string) = runRpc(header, data)
            let returnValue0 (md, v:string) = ReturnQueue.tryGet md |> Option.iter(fun (ok, er) -> ok v )
            let returnExnExn (md, e:exn   ) = ReturnQueue.tryGet md |> Option.iter(fun (ok, er) -> er e )
            let returnExn0   (md, e:string) = returnExnExn(md, exn e)
    
            let mutable messaging = {
                runRpc      = runRpc0
                returnValue = returnValue0
                returnExn   = returnExn0
                wprintfn    = printfn "EARLY PRINTING!: %s"
            }
    
            let callRunRpc (header:string) (data:string) = messaging.runRpc header data 
            let returnValue(header:string,  data:string) = messaging.returnValue(header, data)
            let returnExn  (header:string,     e:string) = messaging.returnExn(header, e)
    
            type CustomXhrProvider () =
                interface WebSharper.Remoting.IAjaxProvider with
                    member this.Async url headers data ok err = 
                        async {
                            let md = getHeaderRpc headers
                            ReturnQueue.add(md, (ok, err))
                            try 
                                callRunRpc md data
                            with e -> returnExnExn(md, e)
                        } |> Async.Start
                    member this.Sync url headers data = failwith "CustomXhrProvider.Sync not suppported"
                    
            let installProvider() = WebSharper.Remoting.AjaxProvider <- CustomXhrProvider()
    
        let printfn fmt = Printf.kprintf Remoting.messaging.wprintfn fmt
    
        module WWorker =
            open WebSharper.JavaScript
    
            let mutable workerO : Worker option = None
    
            let receiveMessage loadInThisThread (evt: MessageEvent) =
                match evt.Data :?> MsgFromHost with
                | HostRunRpc(header, data) -> Remoting.callRunRpc header data
                | HostPrintfnW txt         -> printfn "%s" txt
                | HostLoadWasm opts        -> loadInThisThread opts
    
            let fromWorker (evt: MessageEvent) =
                match evt.Data :?> MsgFromWorker with
                | WorkerReturnValue  (h,d) -> Remoting.returnValue0(h, d)
                | WorkerReturnExn    (h,d) -> Remoting.returnExn0  (h, d)
                | WorkerPrintfn      txt   -> printfn "%s" txt
                | WorkerWasmStatus   v     -> if wasmStatusV.Value <> v then wasmStatusV.Set v
    
            let terminate() =
                match workerO with
                | None   -> printfn "Worker is not present"
                | Some w -> 
                w.Terminate()
                workerO <- None
                printfn "Worker terminated!"
                wasmStatusV.Set WasmNotLoaded
    
        module WasmLoad =
            open WebSharper.Core.Resources
    
            let rootPath    = "/WASM/publish/"
    
            [< Require(typeof<BaseResource>, "//cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js") >]
            type Require() =
                [< Inline "requirejs($files, $f1)" >]
                static member requireJSM(files:string[], f1 : obj -> unit) = ()
    
            let requireJsA fs =
                Async.FromContinuations(fun (ok, ko, ca) ->
                    Require.requireJSM(fs |> Seq.toArray, ok)
                )
    
            [< Inline "$global.Module.mono_bind_static_method($methodRef)" >]
            let monoBindStaticMethod (methodRef:string) = ()
    
            let bindStaticMethod(assmbly, path:string, methd) =
                JS.Window?(sprintf "WASM_%s_%s_%s" assmbly (path.Replace(".", "_")) methd ) <- 
                    sprintf "[%s]%s:%s" assmbly path methd
                    |> monoBindStaticMethod
    
            let bindWasm() =
                [
                    //"WsTranslator", "FsRoot.WsTranslator", "translateToJs"
                    //"WsTranslator", "FsRoot.WsTranslator", "dir"
                    "WsTranslator", "FsRoot.WsTranslator", "runRpc"
                ] |> Seq.iter bindStaticMethod
    
            type GlobalModule() =
                [< Inline "$global.Module.preloadPlugins   = $arr" >]
                static member SetPreloadPlugins  (arr:(unit   -> unit)[]) : unit = X<_>
                [< Inline "$global.Module.preRun           = $arr" >]
                static member SetPreRun          (arr:(unit   -> unit)[]) : unit = X<_>
                [< Inline "$global.Module.print            = $f  " >]
                static member SetPrint           (f  : string -> unit   ) : unit = X<_>
                [< Inline "$global.Module.printErr         = $f  " >]
                static member SetPrintErr        (f  : string -> unit   ) : unit = X<_>
    
            module FS =
                [< Inline "$global.FS.mkdir($path)" >]
                let mkdir path = X<_>
                [< Inline "$global.FS.createPreloadedFile($pathTo, $file, $pathFrom, $op1, $op21)">]
                let createPreloadedFile(pathTo:string, file:string, pathFrom:string, op1:int, op2:int) = X<_>
    
            let preloadFiles (files: string seq) =
                let asyncLoad url onload onerror =
                    let xhr : XMLHttpRequest = JS.Inline("new $global.XMLHttpRequest()", [||])
                    xhr.Open("GET", url, true);
                    xhr.ResponseType <- XMLHttpRequestResponseType.Arraybuffer
                    xhr.Onload <- (fun ev ->
                        if (xhr.Status = 200 || xhr.Status = 0 && xhr.Response <> null) then
                            onload(new Uint8Array(xhr.Response :?> byte[]))
                        else
                            onerror())
                    xhr.Onerror <- System.Action<_> (fun _ -> onerror())
                    xhr.Send null
                JS.Window?Browser <- Pojo.newPojo [
                    "init"     , ignore    :> obj
                    "asyncLoad", System.Action<_,_,_> asyncLoad :> obj
                ]
                GlobalModule.SetPreloadPlugins [||]
                let dirFiles = 
                    files
                    |> Seq.map(fun s -> s.Replace("\\","/").Split '/')
                    |> Seq.map(Array.map(fun s -> s.Trim()) )
                    |> Seq.map(fun a -> a.[.. a.Length - 2] |> String.concat "/", Seq.last a)
                    |> Seq.distinct 
                    |> Seq.cache
                dirFiles
                |> Seq.map fst
                |> Seq.distinct
                |> Seq.iter(fun dir ->
                    try FS.mkdir dir
                    with e -> ()
                )
                for dir, file in dirFiles do
                    let from = (rootPath + dir + "/" + file).Replace("//", "/")
                    printfn "Preloading %s" from
                    FS.createPreloadedFile(dir, file, from, 1, 1);
    
            let filesToPreload (opts:string) = [   
                yield! dlls
                yield! opts.Split '\n' 
                        |> Array.choose(function String.StartsWith "-r:" f -> Some f |_-> None )
            ]
    
            let loadInThisThread opts =
                match isWorker, wasmStatusV.Value with
                | false, WasmLoaded
                | true , WasmWorkerLoaded  -> ()
                | false, WasmLoading
                | true , WasmWorkerLoading -> printfn "WASM is loading"
                | true , WasmLoading       -> printfn "WASM is loading in the main thread"
                | false, WasmWorkerLoading -> printfn "WASM is loading in a WebWorker"
                | true , WasmLoaded        -> printfn "WASM is loaded in the main thread"
                | false, WasmWorkerLoaded  -> printfn "WASM is loaded in a WebWorker"
                | _    , WasmNotLoaded     ->
                Async.FromContinuations(fun (ok, ko, ca) ->
                    let init () =
                        bindWasm()
                        printfn "WASM Initialized!"
                        wasmStatusV.Set (if isWorker then WasmWorkerLoaded  else WasmLoaded )
                        ok()
                    async {
                        printfn "Loading WASM. Hold on, this will take a while..."
                        wasmStatusV.Set (if isWorker then WasmWorkerLoading else WasmLoading)
                        do! Async.Sleep 50
                        if not isWorker then Remoting.installProvider()
                        JS.Window?App <- Pojo.newPojo [
                                            "init", init
                                        ]
                        let! v = requireJsA [| rootPath + "mono-config.js" |]
                        let! v = requireJsA [| rootPath + "runtime.js" |]
                        GlobalModule.SetPrint    <| printfn "%s"
                        GlobalModule.SetPrintErr <| printfn "%s"
                        GlobalModule.SetPreRun   <| [| fun () -> filesToPreload opts |> preloadFiles |]
                        let! v = requireJsA [| rootPath + "dotnet.js" |]
                        ()
                    } |> Async.Start
                ) |> Async.Start
    
            let loadWasmInWorker opts =
                if isWorker                           then printfn "Already in a worker cannot load Wasm in another worker" else
                if wasmStatusV.Value <> WasmNotLoaded then printfn "Wasm is already %A" wasmStatusV.Value                   else
                wasmStatusV.Set WasmLoading
                printfn "Initiating WebWorker"
                let w = new Worker("WasmWorker", false, fun self ->
                    wasmStatusV.View   |> View.Sink(fun v -> self.PostMessage(WorkerWasmStatus v) )
                    self.Onmessage     <- System.Action<_> (WWorker.receiveMessage loadInThisThread)
                    Remoting.messaging <- {
                        runRpc      = Remoting.runRpc0
                        returnValue = fun v -> self.PostMessage(WorkerReturnValue v)
                        returnExn   = fun v -> self.PostMessage(WorkerReturnExn   v)
                        wprintfn    = fun v -> self.PostMessage(WorkerPrintfn     v)
                    }
                    let rv = Remoting.returnValue // this references are so the functions are not Dead Code Eliminated
                    let re = Remoting.returnExn   // this references are so the functions are not Dead Code Eliminated
                    ()
                )
                w.PostMessage(HostLoadWasm opts)
                w.Onmessage         <- System.Action<_> WWorker.fromWorker
                WWorker.workerO     <- Some w
                Remoting.messaging  <- {
                    runRpc      = fun h d -> w.PostMessage(HostRunRpc(h, d))
                    returnValue = Remoting.returnValue0
                    returnExn   = Remoting.returnExn0
                    wprintfn    = Remoting.messaging.wprintfn
                }
                Remoting.installProvider()
    
        module UI =
            let detailsV    = Var.Create ""
            let fsErrsV     = Var.Create [||]
            let wsErrsV     = Var.Create [||]
            let wsWrnsV     = Var.Create [||]
            let codeV       = Var.Create """
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
            let optsV       = Var.Create ("""
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
                                """.Split '\n' |> Seq.map (fun s ->  s.Trim()) |> String.concat "\n")
    
            if not isWorker then
                Remoting    .messaging <- {
                    Remoting.messaging with 
                        wprintfn = fun (txt:string) ->
                            Console.Log txt
                            let pre = detailsV.Value
                            pre + (if pre = "" then "" else "\n") + txt
                            |> detailsV.Set
                }
    
            let clean() = detailsV.Set ""
    
            let inline callWasmA f p = 
                async {
                    if wasmStatusV.Value = WasmNotLoaded then WasmLoad.loadWasmInWorker optsV.Value
                    do! Async.Sleep 50
                    while
                        match wasmStatusV.Value with
                        | WasmLoaded | WasmWorkerLoaded -> false
                        |_-> true 
                        do
                            printfn "Waiting for WASM to load..."
                            do! Async.Sleep 2000
                    do! f p
                } |> Async.Start
    
            let getParms() = ("WasmTest", ("fsc.exe\n" + optsV.Value).Split '\n' |> Array.filter (fun s -> s.Trim() <> ""), codeV.Value)
            let showMessages name f (msgsW:View<_[]>) =
                msgsW
                |> Doc.BindView(fun msgs -> 
                    if msgs.Length = 0 then Doc.Empty else
                    div [] [
                        text name
                        ol [] [ msgs |> Seq.map(fun x -> li [] [ text <| f x ] ) |> Doc.Concat ]
                    ]
                )
    
            let parseAndCheckProject(projectName, opts, code)  = async {
                let! errs, deps, crit = Rpc.parseAndCheckProjectRpc projectName opts code
                fsErrsV.Set (Seq.toArray errs)
                wsErrsV .Set [||]
                wsWrnsV .Set [||]
                (crit, deps)
                |> sprintf "%A"
                |> detailsV.Set
            }
    
            let translateToJs(projectName, opts, code)  = async {
                let! fsErrs, wsO = Rpc.translateFsToJsRpc projectName opts code
                fsErrsV.Set fsErrs
                match wsO with
                | Some (js, errs, wrns) -> 
                    detailsV.Set js
                    wsErrsV .Set (Seq.toArray errs)
                    wsWrnsV .Set (Seq.toArray wrns)
                | None -> 
                    clean()
                    wsErrsV .Set [||]
                    wsWrnsV .Set [||]
            }
    
            let mainDoc() =
                div     [] [
                    h1  [] [ text     <| "HELLO WASM!"           ]
                    h2  [] [ textView <| V(sprintf "%A" wasmStatusV.V) ]
                    span [] [
                        Doc.Button "Load as Worker"       [] (fun () -> WasmLoad.loadWasmInWorker optsV.Value )
                        Doc.Button "Load in Main thread"  [] (fun () -> WasmLoad.loadInThisThread optsV.Value )
                        Doc.Button "Terminate Worker"     [] (fun () -> WWorker.terminate() )
                    ]
                    div [] [
                        Doc.InputArea [] codeV
                        Doc.InputArea [] optsV
                    ]
                    span [] [
                        Doc.Button "Check"                [] (fun () -> callWasmA parseAndCheckProject (getParms()))
                        Doc.Button "Translate"            [] (fun () -> clean()
                                                                        printfn "Initiating translation:"
                                                                        callWasmA translateToJs        (getParms())
                                                              )
                        Doc.Button "Dir"                  [] (fun () -> callWasmA Rpc.dirRpc "/")
                        Doc.Button "Clean"                [] (fun () -> clean() )
                    ]
                    showMessages "Fsc Messages" (sprintf "%A") fsErrsV.View
                    showMessages "Ws  Errors"   (sprintf "%A") wsErrsV.View
                    showMessages "Ws  Warnings" (sprintf "%A") wsWrnsV.View
                    div [ attr.style "font-family: monospace; white-space:pre" ] [
                        text detailsV.V
                    ]
                ]
    
            //[< SPAEntryPoint >]
            let main() = 
                mainDoc() |> Doc.Run JS.Document.Body
                //printfn "Initiating system..."
                //callWasmA (fun () -> async {
                //    do! translateToJs (getParms())
                //    clean()
                //    printfn "System initiated!"
                //}) ()
    
    [< JavaScriptExport >]
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
    
        let mainDocNameVar = Var.Create "FsRoot.TestingJS.WSFrameworkTest.mainDoc()"
    
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.DesignTime.dll"
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Data\lib\net461\WebSharper.Data.dll"
    
    [< JavaScriptExport >]
    module AssemblyUI =
        open AssemblyData
        open WebSharper.UI
    
        let rec loadAssembly' (isLoaded) (loadDef) (fetchAsmData: _ -> Async<AssemblyDef>) (asm:AssemblyRef) = async {
            if isLoaded asm then () else
            let! def = fetchAsmData asm
            for dep in def.dependencies do
                do! loadAssembly' isLoaded loadDef fetchAsmData dep
            loadDef def
        }
    
        open WebSharper.JavaScript
    
        let assemblies : ListModel<AssemblyName, AssemblyDef> = ListModel.Create (fun ad -> ad.name) []
        let isLoaded      asmRef           = assemblies.TryFind (fun ad -> ad.self = asmRef) |> Option.isSome
        let loadDef       def              = 
            try 
                let asms = assemblies.Value |> Seq.toList
                sprintf "console.log('loading %s ...');%s" def.name.Id def.javaScript.Id |> JS.Eval |> ignore
                assemblies.Set (def :: asms)
            with e -> printfn "%A" e
    
        module LoadAsm =
            open FSharp.Data
    
            type AsmJson = JsonProvider<"""
                { "asName"            : "ss"
                , "dependencies"      : ["ref1"]
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
                , "js"                : "ss"
                }""", RootName="asm">
    
            let fetchAsmData folder = 
                function 
                AssemblyRef url -> async {
                    let  url1 = if url.Contains "/" then url else folder + url
                    let! json = AsmJson.AsyncLoad(url1)
                    return
                        {
                            name         = AssemblyName json.AsName
                            self         = AssemblyRef url
                            javaScript   = JSCode json.Js
                            dependencies = json.Dependencies |> Array.map AssemblyRef
                            modules      = json.Modules |> Array.map(fun mo -> {
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
    
        [< JavaScript false >]
        module CreateAsm =
            //let PATH = @"D:\Abe\CIPHERWorkspace\FSharpStation\bin\"
            //let PATH = @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\"
    
            let getInfo fname =
                use stream = new System.IO.FileStream(fname, System.IO.FileMode.Open)
                WebSharper.Core.Metadata.IO.Decode stream
    
    
        //(*
    
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
    
            let readDll asmRef =
                let asmR = System.Reflection.Assembly.ReflectionOnlyLoadFrom asmRef
                let info = WebSharper.Core.Metadata.IO.LoadReflected asmR |> Option.defaultWith(fun () -> failwithf "Assembly not compiled with WebSharper: %s" asmRef)
                let js   =
                    asmR.GetManifestResourceNames() 
                    |> Seq.choose(fun nm ->
                        if nm.EndsWith ".js" |> not || nm.EndsWith ".min.js" then None else
                        use str = asmR.GetManifestResourceStream nm
                        use rdr = new System.IO.StreamReader(str)
                        rdr.ReadToEnd()
                        |> Some
                    )
                    |> String.concat "\n"
                    //|> Option.defaultWith(fun () -> failwithf "Assembly does not contain .js: %s" asmRef)
                let asm  = System.IO.Path.GetFileNameWithoutExtension asmRef
                let path = System.IO.Path.GetDirectoryName asmRef
                let deps = info.Dependencies.Nodes
                            |> Seq.choose (function 
                                WebSharper.Core.Metadata.AssemblyNode(nm, true) when nm <> asm -> 
                                    Some(AssemblyRef <| nm + ".asm") 
                                |_-> None)
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
                    javaScript    = JSCode js
                }
    
            open LoadAsm
    
            let typeToJson (ty: TypeRef) =
                AsmJson.Type(   tName        = ty.name.Id,
                                asm          = ty.asm .Id
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
                                js           = asmDef.javaScript.Id,
                                dependencies = (asmDef.dependencies |> Array.map (fun r -> r.Id)),
                                modules      = (asmDef.modules      |> Array.map moduleToJson)
                )
    
            open FSharp.Data
    
            let writeAsm fname (asm:AssemblyDef) =
                System.IO.File.WriteAllText(fname, (asmToJson asm).JsonValue.ToString())
                
            let convertDll fin fout = readDll fin |> writeAsm fout
    
        let Folder  = "/EPFileX/Assemblies/"
    
        let saveAssemblies asms = assemblies.Set asms
        let loadAssembly asm = async {
            do! loadAssembly' isLoaded loadDef (LoadAsm.fetchAsmData Folder) asm
            let asms = assemblies.Value |> Seq.toArray
            JS.Inline "$global.IntelliFactory.Runtime.Start()"
            saveAssemblies asms
        }
    
        let loadTesting() =
            loadAssembly (AssemblyRef <| sprintf  "testing.asm?q=%A" System.DateTime.Now)
            |> Async.Start
    
        let alreadyLoaded() = Seq.length assemblies.Value > 0
    
        let thisModuleV = Var.Create "Covid.asm"
    
        let loadThisModule() =
            loadAssembly (AssemblyRef thisModuleV.Value)
            |> Async.Start
    
        open WebSharper.UI
        open WebSharper.UI.Html
    
        let nobr()  = attr.style "white-space: nowrap"
        let click f = Html.on.click (fun _ _ -> f())
    
        let selectedAssembly = Var.Create None
    
        let listAssembliesDoc() =
            table [] [
                assemblies.Doc(fun r asmW ->
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
    
        let assemblyDoc (asm: AssemblyDef) =
            let emptyDoc (mo:ModuleDef) (me:MethodDef) = Doc.Empty
            let inputVar (mo:ModuleDef) (me:MethodDef) = 
                if me.retType.name.Id <> "Var<string>" then Doc.Empty else
                try sprintf "%s.%s()" mo.name.Id2 me.name.Id |> JS.Eval |> unbox<Var<string>> |> Doc.Input []
                with e -> text e.Message
            let printText (mo:ModuleDef) (me:MethodDef) = 
                if me.retType.name.Id.Contains "<" then Doc.Empty else
                try sprintf "%s.%s()" mo.name.Id2 me.name.Id |> JS.Eval |> sprintf "%A" 
                with e -> e.Message
                |> text
            let showDoc (mo:ModuleDef) (me:MethodDef) =
                Doc.Concat [
                    Doc.Button "Show" [] (fun () -> 
                        sprintf "%s.%s()" mo.name.Id2 me.name.Id 
                        |> sprintf "WebSharper.UI.Doc.Concat([%s])" 
                        |> WSFrameworkTest.mainDocNameVar.Set
                    )
                    Doc.Button "Add"  [] (fun () -> 
                        let code = WSFrameworkTest.mainDocNameVar.Value
                        sprintf "%s.%s()" mo.name.Id2 me.name.Id
                        |> sprintf "%s, %s])" code.[.. code.Length - 3] 
                        |> WSFrameworkTest.mainDocNameVar.Set
                    )
                ]
            let groups0 = 
                [
                    inputVar  , fun me -> me.retType.name.Id.StartsWith "Var<"  &&  me.isField
                    emptyDoc  , fun me -> me.retType.name.Id.StartsWith "View<" &&  me.isField
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
                let!  asmO = assemblies.TryFindByKeyAsView asm
                match asmO with
                | None                    -> return Doc.Empty
                | Some (asm:AssemblyDef)  ->
                return assemblyDoc asm
            }
            |> Doc.BindView id
            
        let assembliesDoc() =
            Doc.Concat [
                Doc.Button "Load module:" [] loadThisModule
                Doc.Input                 []     thisModuleV
                listAssembliesDoc()
                currentAssembly  ()
                styleDoc         ()
            ]
    
    (*
    
    module Test =
        open FsRoot.TestingJS
        open AssemblyData.CreateAsm
    
        let PathOut = @"D:\Abe\CIPHERWorkspace\FSharpStation\website\EPFileX\Assemblies\"
        let Folder  = "/EPFileX/Assemblies/"
    
        let dlls = 
            [
                @"D:\Abe\CIPHERWorkspace\FSharpStation\bin\testing.dll"
                @"D:\Abe\CIPHERWorkspace\FSharpStation\website\EPFileX\Assemblies\Covid.dll"
                //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Main.dll"
                //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
                //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Web.dll"
                //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
                //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Control.dll"
                //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
                //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
                //@"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.Data\lib\net461\WebSharper.Data.dll"
            ]
            |> Seq.take 1
    
        dlls
        |> Seq.iter (fun dll ->
            let fn = System.IO.Path.GetFileNameWithoutExtension dll
            convertDll dll (PathOut + fn + ".asm")
        )
    
        convertDll @"D:\Abe\CIPHERWorkspace\FSharpStation\bin\testing.dll"  @"D:\Abe\CIPHERWorkspace\FSharpStation\website\EPFileX\Assemblies\testing.asm"
        //|> asmToJson
        //|> fun v -> v.JsonValue.ToString() |> printfn "%s"
    
    //*)
    
    
    [< JavaScriptExport >]
    module WSFramework =
    
        open WebSharper.UI
        open WebSharper.UI.Html
    
        let mainDocNameVar = WSFrameworkTest.mainDocNameVar
        let mainDocVar     = Var.Create (h1 [] [ text "mainDocVar not initialized" ])
    
        let mainDocInput() = div [] [ Doc.Input [ attr.style "width: 100%"] mainDocNameVar ] 
    
        open WebSharper.JavaScript
    
        if IsClient then
            mainDocNameVar.View
            |> View.Sink(fun nm ->
                try 
                    let docObj = JS.Eval nm
                    match docObj with
                    | :? Doc          as doc  -> mainDocVar.Set  doc
                    | :?      string  as str  -> mainDocVar.Set (text     str      )
                    | :? Var< string> as strV -> mainDocVar.Set (textView strV.View)
                    | :? View<string> as strW -> mainDocVar.Set (textView strW     )
                    |_-> JS.Inline("console.log('mainDocNameVar type mismatch: ', $0)", docObj)
                with e-> printfn "%A" e
            )
    
        let mainSubDoc = 
            if IsClient then
                mainDocVar.View |> Doc.BindView id
            else
                Doc.Empty
    
        open AssemblyUI
    
        [< SPAEntryPoint >]
        let main() =
            if not WasmLoader.isWorker then
                if alreadyLoaded() then
                    div [] [
                        mainDocInput()
                        assembliesDoc()
                        WasmLoader.UI.mainDoc()
                        div [] [ mainSubDoc ]
                    ]
                    |> Doc.Run JS.Document.Body
                else loadTesting()
    
    
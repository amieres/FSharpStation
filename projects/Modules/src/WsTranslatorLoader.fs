#nowarn "3242"
#nowarn "52"
////-d:FSharpStation1614641116564 -d:TEE -d:WEBSHARPER -d:WEBSHARPER47
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
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\WsTranslator47.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\FSharp.Compiler.Service.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Compiler.dll"
//#nowarn "3242"
//#nowarn "52"
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
            [< AutoOpen >]
            module Monads =
                module Seq =    
                    let rtn = Seq.singleton
                    let insertO  vSO              = vSO |> Option.map(Seq.map Some) |> Option.defaultWith(fun () -> rtn None)
                    let insertR (vSR:Result<_,_>) = vSR |> function | Error m -> rtn (Error m) | Ok v -> Seq.map Ok v
                    let absorbO  vOS              = vOS |> Seq.choose id
                    let absorbR  vOS              = vOS |> Seq.choose (function Ok v -> Some v |_-> None)
                    let ofOption vO = 
                        match vO with
                        | Some v -> Seq.singleton v
                        | None   -> Seq.empty    
                
                    type SplitByOption = Exclude | IncludeFirst | IncludeSecond
                
                    let splitBy (f: 'a -> bool) opt (s: 'a seq) = //: 'a seq seq =
                        (0, s)
                        ||> Seq.mapFold(fun i a -> 
                            match f a with
                            | false         -> Some(a, i    ), i
                            | true          ->
                            (match opt with
                            | Exclude       -> None          
                            | IncludeFirst  -> Some(a, i    )
                            | IncludeSecond -> Some(a, i + 1) 
                            ), i + 1
                        )
                        |> fst
                        |> Seq.choose   id
                        |> Seq.groupBy snd
                        |> Seq.map    (snd >> Seq.map fst)
                
                /// Extensions to Async
                module Async =
                    let [< Inline >] inline rtn   v    = async.Return v
                    let [< Inline >] inline bind  f vA = async.Bind(  vA, f)
                    let [< Inline >] inline map   f    = bind (f >> rtn)
                    /// Executes f Synchronously
                    [< Inline "throw 'iterS cannot be used in JavaScript!'" >] 
                    let inline iterS (f: 'a->unit) = map f >> Async.RunSynchronously
                    /// Executes f Asynchronously
                    let [< Inline >] inline iterA f             = map f >> Async.Start
                    let apply fA vA = async {
                        let! fChild = Async.StartChild fA
                        let! vChild = Async.StartChild vA
                        let! f = fChild
                        let! v = vChild 
                        return f v 
                    }
                    let sleepThen f milliseconds = async {
                        do! Async.Sleep milliseconds
                        return f()
                    }
                    let (>>=)                              v f = bind f v
                    let traverseSeq             f           sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                                 Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq                  sq = traverseSeq id sq
                    [< Inline "throw 'traverseSeqS cannot be used in JavaScript!'" >]
                    let traverseSeqS (f: 't->Async<_>) (t: 't seq) = async {
                                                                 let! ct = Async.CancellationToken
                                                                 return seq {
                                                                     use enum = t.GetEnumerator ()
                                                                     while enum.MoveNext() do
                                                                         yield Async.RunSynchronously (f enum.Current, cancellationToken = ct) }}
                    let inline sequenceSeqS          sq = traverseSeqS id sq
                    let insertO  vAO                           = vAO |> Option.map(map Some) |> Option.defaultWith(fun () -> rtn None)
                    let insertR (vAR:Result<_,_>)              = vAR |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                
                
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
                let contains (sub:string)  (whole: string) = whole.Contains sub
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
                let parseDateO2  : string -> _ = (fun s -> s + "T00:00:00") >> tryParseWith System.DateTime.TryParse
                let parseDateO   : string -> _ = tryParseWith System.DateTime.TryParse
                let parseIntO    : string -> _ = tryParseWith System.Int32   .TryParse
                let parseInt64O  : string -> _ = tryParseWith System.Int64   .TryParse
                let parseSingleO : string -> _ = tryParseWith System.Single  .TryParse
                let parseDoubleO : string -> _ = tryParseWith System.Double  .TryParse
                let parseGuidO   : string -> _ = tryParseWith System.Guid    .TryParse
                // etc.
                
                // active patterns for try-parsing strings
                let (|Date  |_|) = parseDateO
                let (|Int   |_|) = parseIntO
                let (|Int64 |_|) = parseInt64O
                let (|Single|_|) = parseSingleO
                let (|Double|_|) = parseDoubleO
                let (|Guid  |_|) = parseGuidO
                
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
            
            
            [< Inline """(!$v)""">]
            let isUndefined v = v.GetType() = v.GetType()
                
            
             // if WEBSHARPER47 then use the compileWASMLoader47 button otherwise use 45 button
            //#define WEBSHARPER47
            #if WEBSHARPER47
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\WsTranslator47.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\FSharp.Compiler.Service.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Compiler.dll"
            #else
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\WsTranslator.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\dlls\FSharp.Compiler.Service.dll"
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\dlls\WebSharper.Compiler.dll"
            #endif
            
            [< JavaScriptExport >]
            module WsTranslatorLoader =
                open WebSharper
                open WebSharper.JavaScript
                open WebSharper.UI
                open WebSharper.UI.Html
            
                open FsRoot
            
            #if WEBSHARPER47
                let WasmLoaderVersion = "47"
            #else
                let WasmLoaderVersion = "45"
            #endif
            
                [< JavaScript >]
                type Dependency<'T>(def:'T) = member val D = def with get, set
            
                [< Inline "(!$global.document)" >]
                let isWorker = true
            
                type WasmPath = WasmPath of string 
            
                let getId (WasmPath v) = v
            
                type WasmStatus =
                | WasmNotLoaded
                | WasmLoading
                | WasmLoaded
                | WasmWorkerLoading
                | WasmWorkerLoaded
            
                type MsgFromWorker =
                | WorkerReturnValue  of string * string
                | WorkerReturnExn    of string * string
                | WorkerPrintfn      of string * string
                | WorkerWasmStatus   of WasmStatus * WasmPath option
            
                type MsgFromHost =
                | HostEvalJS       of id:string * js:string
                | HostRunRpc       of hd:string * dt:string
                | HostLoadWasm     of WasmPath * debug:bool   * opts:string
            
                /// this Var is an exception because is not in the UI section
                /// it is used to also communication from Worker to Host with a Sink
                let wasmStatusV = Var.Create (WasmNotLoaded, None) 
            
                module Remoting =
                    open WebSharper.JavaScript
            
                    type IMessagingO = {
                        evalJS      : string *  string -> unit
                        runRpc      : string -> string -> unit
                        returnValue : string *  string -> unit
                        returnExn   : string *  string -> unit
                        wprintfn    : string -> string -> unit
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
            #if WEBSHARPER47
                    [< Inline "$global.WASM_WsTranslator47_FsRoot_WsTranslator_runRpc($header, $data)" >]
            #else
                    [< Inline "$global.WASM_WsTranslator_FsRoot_WsTranslator_runRpc($header, $data)" >]
            #endif
                    let runRpc0 (header:string) (data:string) = WsTranslator.runRpc( header,  data)
                    let returnValue0 (md,  v:string) = ReturnQueue.tryGet md |> Option.iter(fun (ok, er) -> ok v )
                    let returnExnExn (md,  e:exn   ) = ReturnQueue.tryGet md |> Option.iter(fun (ok, er) -> er e )
                    let returnExn0   (md,  e:string) = returnExnExn(md, exn e)
            
                    let messaging = Dependency {
                        evalJS      = fun _ -> failwith "Too early for evalJS"
                        runRpc      = runRpc0
                        returnValue = returnValue0
                        returnExn   = returnExn0
                        wprintfn    = fun ch txt -> printfn "EARLY PRINTING! %s:: %s" ch txt
                    }
            
                    let callRunRpc (header:string) (data:string) = messaging.D.runRpc      header  data 
                    let callEvalJS (id    :string) (js  :string) = messaging.D.evalJS     (id    , js  )
                    let returnValue(header:string,  data:string) = messaging.D.returnValue(header, data)
                    let returnExn  (header:string,     e:string) = messaging.D.returnExn  (header, e   )
                    let logThis    (channel:string,  txt:string) = messaging.D.wprintfn channel txt
            
                    let evalJS0      (id, js:string) = 
                        try let r = JS.Eval js
                            if isUndefined r 
                            then    returnValue(id, null          )
                            else    returnValue(id, sprintf "%A" r)
                        with e ->   returnExn  (id, sprintf "%A" e)
            
                    let rv = returnValue // this references are so the functions are not Dead Code Eliminated
                    let re = returnExn   // this references are so the functions are not Dead Code Eliminated
                    let lt = logThis     // this references are so the functions are not Dead Code Eliminated
            
                    let printfnLog channel fmt = Printf.kprintf (fun txt -> logThis(channel, txt)) fmt
            
                    type CustomXhrProvider () =
                        interface WebSharper.Remoting.IAjaxProvider with
                            member this.Async url headers data ok err = 
                                let md = getHeaderRpc headers
                                ReturnQueue.add(md, (ok, err))
                                try printfnLog "Timings" "%s CustomXhrProvider: %s" (Log.nowStamp()) md
                                    callRunRpc md data
                                with e -> returnExnExn(md, e)
                            member this.Sync url headers data = failwith "CustomXhrProvider.Sync not suppported"
                            
                    let installProvider() = WebSharper.Remoting.AjaxProvider <- CustomXhrProvider()
            
                let printfnLog   = Remoting.printfnLog
                let  printfn fmt = Printf.kprintf (Remoting.messaging.D.wprintfn "stdout") fmt
                let eprintfn fmt = Printf.kprintf (Remoting.messaging.D.wprintfn "stderr") fmt
            
                module WWorker =
                    open WebSharper.JavaScript
            
                    let mutable workerO : Worker option = None
            
                    let receiveMessage loadInThisThread (evt: MessageEvent) =
                        match evt.Data :?> MsgFromHost with
                        | HostEvalJS(id,  js)                    -> Remoting.callEvalJS id     js
                        | HostRunRpc  (header, data)             -> Remoting.callRunRpc header data
                        | HostLoadWasm(publishPath, debug, opts) -> loadInThisThread publishPath debug opts
            
                    let fromWorker (evt: MessageEvent) =
                        match evt.Data :?> MsgFromWorker with
                        | WorkerReturnValue  (h,d) -> Remoting.returnValue0(h, d)
                        | WorkerReturnExn    (h,d) -> Remoting.returnExn0  (h, d)
                        | WorkerPrintfn   (ch,txt) -> Remoting.messaging.D.wprintfn ch txt
                        | WorkerWasmStatus   (s,v) -> if wasmStatusV.Value <> (s,v) then wasmStatusV.Set (s,v)
            
                    let terminate() =
                        match workerO with
                        | None   -> printfnLog "WASM" "Worker is not present"
                        | Some w -> 
                        w.Terminate()
                        workerO <- None
                        printfnLog "WASM" "Worker terminated!"
                        wasmStatusV.Set (WasmNotLoaded, None)
            
                module WasmLoad =
                    open WebSharper.Core.Resources
            
            #if WEBSHARPER47
                    let rootPath    = "/WASM/v47/" 
            #else
                    let rootPath    = "/WASM/v45/" 
            #endif                
            
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
                    [< Inline "$global.Module.cwrap('mono_wasm_setenv', 'void', ['string', 'string'])" >]
                    let getMonoSetEnv() : System.Action<string, string> = X<_>
            
                    let bindStaticMethod(assmbly, path:string, methd) =
                        JS.Window?(sprintf "WASM_%s_%s_%s" assmbly (path.Replace(".", "_")) methd ) <- 
                            sprintf "[%s]%s:%s" assmbly path methd
                            |> monoBindStaticMethod
            
                    let bindWasm() =
                        [
                            //"WsTranslator", "FsRoot.WsTranslator", "translateToJs"
                            //"WsTranslator", "FsRoot.WsTranslator", "dir"
            #if WEBSHARPER47
                            "WsTranslator47", "FsRoot.WsTranslator", "runRpc"
            #else
                            "WsTranslator"  , "FsRoot.WsTranslator", "runRpc"
            #endif                
                        ] |> Seq.iter bindStaticMethod
            
                    type GlobalModule[< Inline "$global.Module = $global.Module || {} " >]() =
                        [< Inline "$global.Module.preloadPlugins       = $arr" >]
                        member __.SetPreloadPlugins   (arr:(unit   -> unit)[]) : unit = X<_>
                        [< Inline "$global.Module.preRun               = $arr" >]
                        member __.SetPreRun           (arr:(unit   -> unit)[]) : unit = X<_>
                        [< Inline "$global.Module.print                = $f  " >]
                        member __.SetPrint            (f  : string -> unit   ) : unit = X<_>
                        [< Inline "$global.Module.printErr             = $f  " >]
                        member __.SetPrintErr         (f  : string -> unit   ) : unit = X<_>
                        [< Inline "$global.Module.onRuntimeInitialized = $f  " >]
                        member __.OnRuntimeInitialized(f  : unit   -> unit   ) : unit = X<_>
            
                    module FS =
                        [< Inline "$global.FS.mkdir($path)" >]
                        let mkdir path = X<_>
                        [< Inline "$global.FS.createPreloadedFile($pathTo, $file, $pathFrom, $op1, $op2)">]
                        let createPreloadedFile(pathTo:string, file:string, pathFrom:string, op1:int, op2:int) = X<_>
            
                    module MONO =
                        [< Inline "$global.MONO.mono_load_runtime_and_bcl($vfs_prefix, $deploy_prefix, $enable_debugging, $file_list, $app_init)" >]
                        let mono_load_runtime_and_bcl(vfs_prefix:string, deploy_prefix:string, enable_debugging:bool, file_list:string[], app_init:unit -> unit) = ()
            
                    module Runtime =
                        [< Inline "$global.IntelliFactory.Runtime.ScriptPath = $f" >]
                        let setScriptPath(f: FuncWithArgs<string * string, string>) = ()
            
                        [< Inline "$global.importScripts($fs)" >]
                        let importScripts(fs:string[]) = ()
            
                    let preloadFiles (files: string seq) =
                        let asyncLoad url onload onerror =
                            let xhr : XMLHttpRequest = JS.Inline("new $global.XMLHttpRequest()", [||])
                            xhr.Open("GET", url, true);
                            xhr.ResponseType <- XMLHttpRequestResponseType.Arraybuffer
                            xhr.Onload <- (fun ev ->
                                if (xhr.Status = 200 || xhr.Status = 0 && xhr.Response <> null) then
                                    onload(new Uint8Array(xhr.Response :?> byte[]))
                                else
                                    printfnLog "WASM" "xhr failed: %s" url)
                            xhr.Onerror <- System.Action<_> (printfnLog "WASM" "%A")
                            xhr.Send null
                        JS.Window?Browser <- Pojo.newPojo [
                            "init"     , ignore    :> obj
                            "asyncLoad", System.Action<_,_,_> asyncLoad :> obj
                        ]
                        GlobalModule().SetPreloadPlugins [||]
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
                            let from = ((if dir = "/managed" then "." else "..") + dir + "/" + file).Replace("//", "/")
                            printfnLog "WASM" "Preloading %s" from
                            FS.createPreloadedFile(dir, file, from, 1, 1);
            
                    let filesToPreload (opts:string) = [   
                        yield! WsTranslator.dlls()
                        yield! opts.Split '\n' 
                                |> Array.choose(function String.StartsWith "-r:" f -> Some f |_-> None )
                    ]
            
                    let loadInThisThread (publishPath:WasmPath) debug opts =
                        match isWorker, wasmStatusV.Value with
                        | false, (WasmLoaded       , _)
                        | true , (WasmWorkerLoaded , _) -> ()
                        | false, (WasmLoading      , _)
                        | true , (WasmWorkerLoading, _) -> printfnLog "WASM" "WASM is loading"
                        | true , (WasmLoading      , _) -> printfnLog "WASM" "WASM is loading in the main thread"
                        | false, (WasmWorkerLoading, _) -> printfnLog "WASM" "WASM is loading in a WebWorker"
                        | true , (WasmLoaded       , _) -> printfnLog "WASM" "WASM is loaded in the main thread"
                        | false, (WasmWorkerLoaded , _) -> printfnLog "WASM" "WASM is loaded in a WebWorker"
                        | _    , (WasmNotLoaded    , _) ->
                        Async.FromContinuations(fun (ok, ko, ca) ->
                            let init () =
                                try
                                    bindWasm()
                                    printfnLog "WASM" "WASM Initialized!"
                                    wasmStatusV.Set ((if isWorker then WasmWorkerLoaded else WasmLoaded), Some publishPath )
                                    ok()
                                with e -> ko e
                            let initializeRuntime() =
                                try 
                                    let monoSetEnv = getMonoSetEnv().Invoke
                                    if debug then
                                        monoSetEnv("MONO_LOG_LEVEL", "debug")  
                                        monoSetEnv("MONO_LOG_MASK" , "all"  )
                                    else
                                        monoSetEnv("MONO_LOG_LEVEL", "")  
                                        monoSetEnv("MONO_LOG_MASK" , ""  )
                                    monoSetEnv("PATH" , "/dlls/;/managed/"  )
                                    let config = JS.Inline("$global.config")
                                    MONO.mono_load_runtime_and_bcl(
                                            config?vfs_prefix,
                                            config?deploy_prefix,
                                            config?enable_debugging,
                                            config?file_list,
                                            init
                                        )
                                with e -> ko e
                            async {
                                try
                                    printfnLog "WASM" "Loading WASM. Hold on, this may take a while..."
                                    wasmStatusV.Set ((if isWorker then WasmWorkerLoading else WasmLoading), Some publishPath )
                                    do! Async.Sleep 50
                                    if not isWorker then Remoting.installProvider()
                                    //JS.Window?App <- Pojo.newPojo [
                                    //                    "init", init
                                    //                ]
                                    let! v = requireJsA [| getId publishPath + "mono-config.js" |]
                                    //let! v = requireJsA [| getId publishPath + "runtime.js" |]
                                    let Module = GlobalModule()
                                    Module.OnRuntimeInitialized <| initializeRuntime
                                    Module.SetPrint             <|  printfn "%s"
                                    Module.SetPrintErr          <| eprintfn "%s"
                                    Module.SetPreRun            <| [| fun () -> filesToPreload opts |> preloadFiles |]
                                    let! v = requireJsA [| getId publishPath + "dotnet.js" |]
                                    ()
                                with e -> ko e
                            } |> Async.Start
                        ) |> Async.Start
            
                    let loadWasmInWorker publishPath debug opts =
                        if isWorker                                   then printfnLog "WASM" "Already in a worker cannot load Wasm in another worker" else
                        if wasmStatusV.Value <> (WasmNotLoaded, None) then printfnLog "WASM" "Wasm is already %A" wasmStatusV.Value                   else
                        wasmStatusV.Set (WasmLoading, Some publishPath)
                        printfnLog "WASM" "Initiating WebWorker"
                        Runtime.setScriptPath    <| FuncWithArgs(fun (_, f) -> getId publishPath + "loadworker.js")
                        let w = new Worker(fun self ->
                            wasmStatusV.View     |> View.Sink(fun v -> self.PostMessage(WorkerWasmStatus v) )
                            self.Onmessage       <- System.Action<_> (WWorker.receiveMessage loadInThisThread )
                            Remoting.messaging.D <- {
                                evalJS      = Remoting.evalJS0
                                runRpc      = Remoting.runRpc0
                                returnValue = fun    v -> self.PostMessage(WorkerReturnValue v  )
                                returnExn   = fun    v -> self.PostMessage(WorkerReturnExn   v  )
                                wprintfn    = fun ch v -> self.PostMessage(WorkerPrintfn (ch,v) )
                            }
                            let rv = Remoting.returnValue // this references are so the functions are not Dead Code Eliminated
                            let re = Remoting.returnExn   // this references are so the functions are not Dead Code Eliminated
                            ()
                        )
                        w.PostMessage(HostLoadWasm(publishPath, debug, opts))
                        w.Onmessage          <- System.Action<_> WWorker.fromWorker
                        WWorker.workerO      <- Some w
                        Remoting.messaging.D <- {
                            evalJS      = fun(h,d)-> w.PostMessage(HostEvalJS(h, d))
                            runRpc      = fun h d -> w.PostMessage(HostRunRpc(h, d))
                            returnValue = Remoting.returnValue0
                            returnExn   = Remoting.returnExn0
                            wprintfn    = Remoting.messaging.D.wprintfn
                        }
                        Remoting.installProvider()
            
                module Rpc =
                    open Remoting
            
                    //let getNewId =
                    //    let mutable counter = 1
                    //    fun() ->
                    //        counter <- counter + 1
                    //        sprintf"newId_%d" counter
            
                    let evalJSRpc js =
                        Async.FromContinuations(fun (ok, err, ca) ->
                            let md = "Rpc.evalJSRpc: -0" //getNewId()
                            ReturnQueue.add(md, (printfn "%s" >> ok, err))
                            try
                                callEvalJS md js
                            with e -> returnExnExn(md, e)
                        )
            
                module UI =
                    let detailsV      = ListModel.Create fst ([||] : (string * (string * bool) ) [])
                    let debugV        = Var.Create false
                    let wasmPathV     = Var.Create <| WasmPath "/WASM/v47/Interp/"
                    let wasmPathTV    = (wasmPathV.Lens (fun (WasmPath v) -> v) (fun _ -> WasmPath) )
                    let commandV      = Var.Create "/tmp/bin.exe 1 2 10 20 30 40"
                    let jsV           = Var.Create ""
                    let getPresencesV = Var.Create ""
                    let curChannel    = Var.Create "WASM"
                    let errorsV       = Var.Create [||]
                    let codeV         = Var.Create """
            //#nowarn "52"
            
            let tryParseWith tryParseFunc : string -> _  = tryParseFunc >> function
                    | true, v    -> Some v
                    | false, _   -> None
            let parseIntO = tryParseWith System.Int32   .TryParse
            
            let rec fibo = function
                | 0 | 1 -> 1
                | n -> fibo (n - 1) + fibo (n - 2)
            
            let printFibo n = printfn "fibo(%d) = %i" n (fibo n)
            
            let doFibos (args: string []) =
                args
                |> Seq.collect (fun s -> s.Split[| ' ' |])
                |> Seq.choose parseIntO
                |> Seq.iter   printFibo
            
            let nowStamp() = 
                let t = System.DateTime.UtcNow // in two steps to avoid Warning: The value has been copied to ensure the original is not mutated
                t.ToString("yyyy-MM-dd HH:mm:ss.fff", System.Globalization.CultureInfo.InvariantCulture)
            
            let inline TimeIt n f p =
                printfn "%s Starting %s" (nowStamp()) n
                let start = System.DateTime.UtcNow.Ticks
                f p
                let elapsedSpan = System.TimeSpan(System.DateTime.UtcNow.Ticks - start)
                printfn "%s Finished %s %0d:%02d:%02d.%03d" (nowStamp()) n (int elapsedSpan.TotalHours) elapsedSpan.Minutes elapsedSpan.Seconds elapsedSpan.Milliseconds
            
            let [< EntryPoint >] main args =
                TimeIt "doFibos" doFibos args
                0
            
                    """
                    let optsV       = Var.Create ("""
                                            /tmp/source.fs
                                            -o:/tmp/bin.exe
                                            -d:WEBSHARPER
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
                                            -r:/dlls/WebSharper.JavaScript.dll
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
            
                    let getChannel     ch   = detailsV.TryFindByKey ch |> Option.map (snd >> fst) |> Option.defaultValue ""
                    let changedChannel ch   = detailsV.TryFindByKey ch |> Option.map (snd >> snd) |> Option.defaultValue false
                    let setChannel     ch v = detailsV.Add(ch, (v , v <> "") )
                    let addChannel     ch v = let pre = getChannel ch
                                              setChannel   ch (pre + (if pre = "" then "" else "\n") + v)
                    let cleanChannel   ch   = setChannel ch ""
                    let clean          ()   = cleanChannel "stdout" ; cleanChannel"stderr"
                    let seenChannel    ch   = detailsV.Add(ch, (getChannel ch , false) )
            
                    cleanChannel "stdout"
                    cleanChannel "stderr"
            
                    if not isWorker then
                        Remoting    .messaging.D <- {                
                            Remoting.messaging.D with
                                evalJS   = Remoting.evalJS0 
                                wprintfn = fun ch (txt:string) -> 
                                    Console.Log (ch + ":: " + txt)
                                    addChannel ch txt
                                    if ch = "stderr" then 
                                        addChannel "stdout" txt
                        }
            
                    let inline callWasmA f p = 
                        async {
                            if wasmStatusV.Value = (WasmNotLoaded, None) then WasmLoad.loadWasmInWorker wasmPathV.Value debugV.Value optsV.Value
                            do! Async.Sleep 50
                            while
                                match wasmStatusV.Value with
                                | WasmLoaded, _ | WasmWorkerLoaded, _ -> false
                                |_-> true 
                                do
                                    printfnLog "WASM" "Waiting for WASM to load..."
                                    do! Async.Sleep 2000
                            try  do! f p
                            with e -> eprintfn "%A" e
                        }
            
                    Log.printer.D <- (fun txt -> Remoting.logThis("Timings", txt) )
            
                    let inline callWasmTimed nm f p =
                        Log.TimeItAsync nm (callWasmA f p)
                        |> Async.Start
            
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
            
                    let setErrors (errs:WsTranslator.FileAnnotation []) =
                        errorsV.Set errs
                        errs 
                        |> Seq.map (fun e -> 
                                        sprintf "%A(%d,%d)-(%d,%d) %A %s." 
                                            e.fileName
                                            e.annotation.startP.line e.annotation.startP.col
                                            e.annotation.endP  .line e.annotation.endP  .col
                                            e.annotation.severity
                                            e.annotation.message
                                    )
                        |> Seq.iter (eprintfn "%s")
            
                    let parseAndCheckProject(projectName, opts, code)  = async {
                        let! errs, deps, crit = WsTranslator.Rpc.parseAndCheckProjectRpc projectName opts code
                        setErrors errs 
                        printfn "%A" (crit, deps)
                    }
            
                    let compileProject(projectName, opts, code)  = async {
                        let! errs, res = WsTranslator.Rpc.compileProjectRpc projectName opts code
                        setErrors errs 
                        if res = 0 then
                            printfn "Compiled!"
                        else
                            printfn "Compilatin failed!"
                    }
            
            //        open FShUI_AssemblyData
            
                    let editorCmdV  = Var.Create ""
            
                    let (|Coords|_|) (cmd:string) (inp:string) = 
                        match inp.Split [| ' ' |] with
                        | [| cm ; ParseO.Int line; ParseO.Int col |] when cm = cmd -> Some({ GenEditor.Position.line = line ; GenEditor.Position.col = col })
                        |_-> None
                            
                    let editorRespW =
                        editorCmdV.View.MapAsync(fun inp -> async {
                            match inp with
                            | Coords "declaration"    pos -> 
                                                            return Some(pos, "definition") |> Json.Serialize
                            | Coords "tooltip"        pos -> 
                                                            let! tipO   = WsTranslator.Rpc.getTooltip <||| getParms() <| pos
                                                            return tipO |> Option.defaultValue "" |> Json.Serialize
                            | Coords "autocompletion" pos -> 
                                                            let! compls = WsTranslator.Rpc.getAutoCompletion <||| getParms() <| pos
                                                            return Json.Serialize compls
                            | _-> return ""
                        }
                        )
            
                    let translateToJs(projectName, opts, code)  = async {
                        let! fsErrs, wsO = WsTranslator.Rpc.translateFsToJsRpc projectName opts code
                        match wsO with
                        | Some (asmO, errs) -> 
                            match asmO with
                            | Some asm -> jsV.Set asm ; "Translated!"
                            | None     -> "No translation"
                            |> printfn "%s"
                            Array.append fsErrs errs
                            |> setErrors
                        | None -> 
                            setErrors fsErrs
                            jsV     .Set ""
                    }
            
                    let evaulateFS code = async {
                        let! msgs = WsTranslator.Rpc.evaluateRpc code
                        setErrors msgs
                    }
            
                    let actLoadAsWorker     () = WasmLoad.loadWasmInWorker wasmPathV.Value debugV.Value optsV.Value
                    let actTerminateWorker  () = WWorker.terminate()
                    let actLoadInMainThread () = WasmLoad.loadInThisThread wasmPathV.Value debugV.Value optsV.Value
                    let actToggleDebug      () = debugV.Set (not debugV.Value)
            
                    let actCheck            () =  parseAndCheckProject        (getParms()) 
                    let actCompile          () =  compileProject              (getParms()) 
                    let actRun              () =  async { try do! WsTranslator.Rpc.runRpc    commandV.Value with e -> eprintfn "%A" e }
                    let actEvalFS           () =  evaulateFS                   codeV.Value
                    let actEvalJS           () =  async { try do!              Rpc.evalJSRpc jsV     .Value with e -> eprintfn "%A" e } 
                                                    |> Log.TimeItAsync "Eval JS"
                    let actTranslate        () =  translateToJs               (getParms()) 
                    let actDir              () =  WsTranslator.Rpc.dirRpc     "/"                    
            
                    let presencesW = getPresencesV.View.MapAsync WsTranslator.Rpc.getPresencesRpc
            
                    let fileNameV      = Var.Create ""
                    let fileErrorsW    = (errorsV.View, fileNameV.View) 
                                            ||> View.Map2 (fun ers fn -> 
                                                ers
                                                |> Array.choose (fun e -> if e.fileName = fn then Some e.annotation else None )
                                                |> Json.Serialize
                                            )
            
                    let tabsDoc() =
                        detailsV.Doc(fun ch textW -> 
                            let background = curChannel.View |> View.Map (fun cur               -> if cur = ch then "white" else "lightgray" )
                            let fontWeight = textW           |> View.Map (fun (_, (_, changed)) -> if changed  then "bold" else "normal" )
                            let switchTo() = 
                                seenChannel    curChannel.Value
                                curChannel.Set ch
                                seenChannel    ch
                            Doc.Button ch  
                                [   Attr.DynamicStyle "background"  background
                                    Attr.DynamicStyle "font-weight" fontWeight
                                ] switchTo
                        )
                    let detailsDoc() =
                        detailsV.Doc(fun ch textW ->
                            let styleW = curChannel.View |> View.Map (fun cur -> if cur = ch then "display:flex; flex-direction:column; overflow:hidden; flex: 1 1 0%" else "display: none" )
                            div[ attr.styleDyn styleW  ] [
                                Doc.Button "Clean" [] (fun () -> cleanChannel ch )
                                div [ attr.style "overflow:auto; flex: 1 1 0%" ] [ textView (View.Map (snd >> fst) textW) ]
                            ]
                        )
            
                    let mainDoc() =
                        div      [] [
                            h1   [] [ text     <|   sprintf "HELLO WASM%s!" WasmLoaderVersion ]
                            h2   [] [ textView <| V(sprintf "%A"            wasmStatusV.V)    ]
                            div  [] [ text " WasmPath:" ; Doc.Input [] wasmPathTV ]
                            span [] [
                                Doc.Button "Load as Worker"       [] actLoadAsWorker
                                Doc.Button "Terminate Worker"     [] actTerminateWorker
                                Doc.Button "Load in Main thread"  [] actLoadInMainThread
                                text " Debug:"            ; Doc.CheckBox [] debugV
                            ]
                            div  [] [
                                div [] [ text "Command: " ; Doc.Input    [] commandV ]
                                Doc.InputArea [] codeV
                                Doc.InputArea [] optsV
                                Doc.InputArea [] jsV
                            ]
                            span [] [
                                Doc.Button "Check"                [] (fun () -> clean() ; callWasmTimed "Check"     actCheck     () )
                                Doc.Button "Compile"              [] (fun () -> clean() ; callWasmTimed "Compile"   actCompile   () )
                                Doc.Button "Run"                  [] (fun () -> clean() ; callWasmTimed "Run"       actRun       () )
                                Doc.Button "Evaluate"             [] (fun () -> clean() ; callWasmTimed "Evaluate"  actEvalFS    () )
                                Doc.Button "Translate"            [] (fun () -> clean() ; callWasmTimed "Translate" actTranslate () )
                                Doc.Button "Run JS"               [] (fun () -> clean() ; callWasmTimed "Run JS"    actEvalJS    () )
                                Doc.Button "Dir"                  [] (fun () -> clean() ; callWasmTimed "Dir"       actDir       () )
                                Doc.Button "Clean"                [] (fun () -> clean() )
                            ]
                            div [ attr.style "font-family: monospace; white-space:pre" ] [
                                tabsDoc()
                                detailsDoc()
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
            
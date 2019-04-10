#nowarn "3242"
////-d:FSharpStation1554685138318 -d:NOFRAMEWORK --noframework -d:WEBSHARPER
////#cd @"##FSCODE##\projects\ProzperClient\src"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\\packages\FSharp.Core\lib\netstandard1.6\FSharp.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\netstandard.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\mscorlib.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Globalization.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Threading.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Reflection.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Numerics.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Xml.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Xml.Linq.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Net.Http.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Runtime.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.IO.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Threading.Tasks.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Core.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Collections.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.InterfaceGenerator.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Main.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.JQuery.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Web.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Sitelets.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Control.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\HtmlAgilityPack.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.Runtime.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.Common.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\ProzperServer.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\LayoutEngine.dll"
//#nowarn "3242"
/// Root namespace for all code
//#define FSharpStation1554685138318
#if INTERACTIVE
module FsRoot   =
#else
namespace FsRoot
#endif

    #if WEBSHARPER
    //#nowarn "3242" 
    
    open WebSharper
    open WebSharper.JavaScript
    open WebSharper.UI
    open WebSharper.UI.Client
    type on   = WebSharper.UI.Html.on
    type attr = WebSharper.UI.Html.attr
    #else
    /// dummy WebSharper definition in order to avoid having to use #if WEBSHARPER all the time
    module WebSharper =
        type RpcAttribute() =
            let a = 1
        type JavaScriptAttribute(translate:bool) =
            let a = 1
            new() = JavaScriptAttribute true
        type InlineAttribute(code:string) =
            let a = 1
            new() = InlineAttribute ""
        type DirectAttribute(code:string) =
            let a = 1
    
    open WebSharper
    
    #endif
    //#define NOFRAMEWORK --noframework
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\\packages\FSharp.Core\lib\netstandard1.6\FSharp.Core.dll"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\netstandard.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\mscorlib.dll"
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Globalization.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Threading.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Reflection.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Numerics.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Core.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Xml.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Xml.Linq.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Net.Http.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Runtime.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.IO.dll"   
    //#r "D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref\System.Threading.Tasks.dll"  
    
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0"
    
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Core.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Collections.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.InterfaceGenerator.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Main.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.JQuery.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Web.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Sitelets.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0\WebSharper.Control.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\HtmlAgilityPack.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.Runtime.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0\WebSharper.UI.Templating.Common.dll"
    
    
        /// Essentials that can be converted to JavaScript with WebSharper
        [< JavaScript ; AutoOpen >]
        module Library = 
            let Error = Result.Error
        
            let [<Inline>] inline swap f a b = f b a
            
            /// swap: for use with operators: [1..5] |> List.map (__ (/) 2)
            let [<Inline>] inline __   f a b = f b a
            
            type System.String with
                member this.Substring2(from, n) = 
                    if   n    <= 0           then ""
                    elif from <  0           then this.Substring2(0, n + from)
                    elif from >= this.Length then ""
                    else this.Substring(from, min n (this.Length - from))
                member this.Left             n  = if n < 0 
                                                  then this.Substring2(0, this.Length + n)
                                                  else this.Substring2(0, n              )
                member this.Right            n  = this.Substring2(max 0 (this.Length - n), this.Length)
                member this.toUnderscore        = this |> Seq.mapi(fun i c -> if i > 0 && System.Char.IsUpper(c) then [ '_' ; c ] else [ c ])  |> Seq.collect id |> Seq.toArray |> System.String
            
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
                
            
            module Array =
            
                /// Non-mutable element replace
                /// produces a new array with the new element
                let replace i item (array: _[]) = 
                    seq {
                        if i > 0            then yield! array.[.. i - 1]
                        yield item
                        if i < array.Length then yield! array.[i + 1 ..]
                    } |> Seq.toArray
            
                let remove i (array: _[]) = 
                    seq {
                        if i > 0            then yield! array.[.. i - 1]
                        if i < array.Length then yield! array.[i + 1 ..]
                    } |> Seq.toArray
            
            ///    let ls = [ "d1d"; "a"; "b"; "c"; "a3a"; "b2b"; "c1c"]
            ///    
            ///    ls |> List.sortWith ( asc Seq.length)            |> print // ["a"; "b"; "c"; "dd"; "aa"; "bb"; "cc"]
            ///    ls |> List.sortWith (desc Seq.length &> asc (Seq.tryItem 1) &> asc  id) |> print // ["aa"; "bb"; "cc"; "dd"; "a"; "b"; "c"]
            ///    ls |> List.sortWith ( asc Seq.length &> desc id) |> print // ["c"; "b"; "a"; "dd"; "cc"; "bb"; "aa"]
            module SortWith =
                let asc   f    a b = compare (f a) (f b)
                let desc  f    a b = compare (f b) (f a)
                let (&>) c1 c2 a b = match c1 a b with 0 -> c2 a b | r -> r
            
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
            
            module Date =
                let toYYYYMMDD sep (date:System.DateTime) = sprintf "%d%s%02d%s%02d" date.Year sep  date.Month sep date.Day
            let (|REGEX|_|) (expr: string) (opt: string) (value: string) =
                if value = null then None else
                match JavaScript.String(value).Match(RegExp(expr, opt)) with
                | null         -> None
                | [| |]        -> None
                | m            -> Some m
            
            let rexGuid = """([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})"""
            
            let rexEmail = """(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*"""
            
            module REGEX =
                let getStartWord (line:string) ch =
                    match line.Substring(0, ch) with
                    | REGEX @"([a-zA-Z_]\w*)$" "g" [| txt |] -> txt
                    | _                                      -> ""          
                
                let getEndWord (line:string) ch =
                    match line.Substring(ch) with
                    | REGEX @"^([a-zA-Z_]\w*)" "g" [| txt |] -> txt
                    | _                                      -> ""          
            
                let (|Identifier|_|) =
                    function
                    | REGEX "^[$a-zA-Z_][0-9a-zA-Z_\.\-$]*$" "" [| id |] -> Some id
                    | _                                                  -> None
            
            module Msal =
            
                type Policy =
                | SignIn
                | SignUp
                | EditProfile
                | ResetPassword
                with 
                    static member Parse (txt:string) = 
                        match txt.Replace(" ", "") with
                        | "SignUp"        -> SignUp
                        | "EditProfile"   -> EditProfile
                        | "ResetPassword" -> ResetPassword
                        | _               -> SignIn
                    override this.ToString() = (sprintf "%A" this).toUnderscore.Replace('_', ' ')
            
                let policies = [
                    SignIn
                    SignUp
                    EditProfile
                    ResetPassword
                ]
                
                type TokenReceivedCallback = (string * string * string * string * string) -> unit
            
                let (==>) (n:string) (vO: _ option) = n, (vO |> Option.map (fun v -> v :> obj))
            
                [< AllowNullLiteral >]
                type User (displayableId: string, name: string, identityProvider: string, userIdentifier: string, idToken: obj, sid: string) =
                    [< Inline "User.createUser($idToken, $clientInfo)" >]
                    static member createUser(idToken: obj, clientInfo: obj) : User = X<_>
            
                type UserAgentApplication
                    [< Inline "new $global.Msal.UserAgentApplication($clientId, $authority, $tokenReceivedCallback, $options)" >]
                    (clientId: string, authority: string, tokenReceivedCallback: TokenReceivedCallback, options: JSObject) =
            
            
                    static member Options( 
                                          ?cacheLocation             : string
                                        , ?isAngular                 : bool
                                        , ?loadFrameTimeout          : int
                                        , ?logger                    : obj
                                        , ?navigateToLoginRequestUrl : bool
                                        , ?postLogoutRedirectUri     : string
                                        , ?protectedResourceMap      : Map<string, Array<string>>
                                        , ?redirectUri               : string
                                        , ?state                     : string
                                        , ?storeAuthStateInCookie    : bool
                                        , ?unprotectedResources      : Array<string>
                                        , ?validateAuthority         : bool) =
                        Pojo.newPojoOpt [
                            "cacheLocation"             ==> cacheLocation
                            "isAngular"                 ==> isAngular                
                            "loadFrameTimeout"          ==> loadFrameTimeout         
                            "logger"                    ==> logger                   
                            "navigateToLoginRequestUrl" ==> navigateToLoginRequestUrl
                            "postLogoutRedirectUri"     ==> postLogoutRedirectUri    
                            "protectedResourceMap"      ==> protectedResourceMap     
                            "redirectUri"               ==> redirectUri              
                            "state"                     ==> state                    
                            "storeAuthStateInCookie"    ==> storeAuthStateInCookie   
                            "unprotectedResources"      ==> unprotectedResources     
                            "validateAuthority"         ==> validateAuthority           
                        ] 
            
                    [< Inline "$this.loginPopup($scopes,$extraQueryParameters)                             " >] member this.loginPopup        (scopes: string [], extraQueryParameters: string                               ): Promise<string> = X<_>
                    [< Inline "$this.loginRedirect($scopes,$extraQueryParameters)                          " >] member this.loginRedirect     (scopes: string [], extraQueryParameters: string                               ): Promise<string> = X<_>
                    [< Inline "$this.acquireTokenSilent ($scopes, $authority, $user, $extraQueryParameters)" >] member this.acquireTokenSilent(scopes: string [], authority: string, user: User, extraQueryParameters: string): Promise<string> = X<_>
                    [< Inline "$this.logout()                                                              " >] member this.logout            ()                                                                              : unit            = X<_>
                    [< Inline "$this.getUser()                                                             " >] member this.getUser           ()                                                                              : User            = X<_>
                    [< Inline "$this.getUserState($state)                                                  " >] member this.getUserState      (state: string)                                                                 : string           = X<_>
            
    
    //#cd @"##FSCODE##\projects\ProzperClient\src"
    
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\ProzperServer.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
    
    //#define WEBSHARPER
    
    [< JavaScript >]
    module ProzperClient =
        open FsRoot
        //#define WEBSHARPER
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\LayoutEngine.dll"
        
        [< AutoOpen >]
        module Templating =
            open WebSharper.UI.Templating
            let [< Literal >] rootdir = @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\ProzperClient\website"
        
            let [< Literal >] TemplatesFileName = rootdir + @"\index.html"
            type TemplateLib  = Template< TemplatesFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
        
            let [< Literal >] LoginFileName = rootdir + @"\Login.html"
            type TemplateLogin  = Template< LoginFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
        
            if IsClient then printfn "%s" TemplatesFileName
        
        module Msal =
            open Msal
        
            let callback(errorDesc, token, error, tokenType, state) = 
                printfn          "callback: %A" (errorDesc, error, tokenType, token, state)
        
            let storage             = JS.Window.LocalStorage
        
            let storeValue name v =
                storage.SetItem(name, v)
                v
        
            let applicationId       = storeValue "applicationId"          "70ad4f9b-9a2b-409e-9c1e-d04dbb2e7cf2"
            let tenantName          = storeValue "tenantName"             "prozper"
            let ref                 = storeValue "ref"                    ""
            let extraQueryParms     = storeValue "extraQueryParms"        "mkt=es-us"
            let refreshBefore       = storeValue "refreshBefore"          "0"
            let createOnStart       = storeValue "createOnStart"          "1"
            let forceLogin          = storeValue "forceLogin"             "1"
            let signInPolicy        = storeValue "signInPolicy"           "B2C_1_SignIn"
            let signUpPolicy        = storeValue "signUpPolicy"           "B2C_1_Registrarse"
            let editProfilePolicy   = storeValue "editProfilePolicy"      "B2C_1_EditarPerfil"
            let resetPasswordPolicy = storeValue "resetPasswordPolicy"    "B2C_1_PasswordReset"
            let policyType          = storeValue "policyType"             "SignIn"
        
            let getAuthority tenantName policyName = sprintf "https://%s.b2clogin.com/tfp/%s.onmicrosoft.com/%s" tenantName tenantName policyName
        
            let authority           = getAuthority tenantName signInPolicy
            let userO               = Var.Create None
        
            let agent = 
                    UserAgentApplication(applicationId
                        , authority
                        , callback
                        , UserAgentApplication.Options(validateAuthority         = false
                                                    ,  storeAuthStateInCookie    = false ))
        
            let getId userO = userO |> Option.map (fun user -> user?idToken?oid) |> Option.defaultValue ""
        
            let localStorage = JS.Window.LocalStorage
        
            let referidoPor() = localStorage.GetItem("referidoPor")
            let claims user = 
                let r = [|
                    "oid"                   ,  user?idToken?oid 
                    "city"                  ,  user?idToken?city 
                    "country"               ,  user?idToken?country 
                    "extension_DateOfBirth" ,  user?idToken?extension_DateOfBirth 
                    "given_name"            ,  user?idToken?given_name 
                    "postalCode"            ,  user?idToken?postalCode 
                    "state"                 ,  user?idToken?state 
                    "streetAddress"         ,  user?idToken?streetAddress 
                    "family_name"           ,  user?idToken?family_name 
                    "emails"                , (user?idToken?emails:string[]).[0]
                    "referidoPor"           ,  referidoPor()
                |]
                localStorage.SetItem("referidoPor", "")
                r
        
            let executePolicy force (policy:Policy) =
                (if force then "1" else "0") |> storeValue "forceLogin"   |> ignore
                JS.Window.Location.Href      |> storeValue "goInsideLink" |> ignore
                string policy                |> storeValue "policyType"   |> ignore
                JS.Window.Location.Replace "blob/Msal.html"
        
            let checkUser() =
                async {
                    do! Async.Sleep 100
                    while true do
                        let newO =
                            match agent.getUser() with 
                            | null -> None 
                            | user -> Some user
                        if getId newO <> getId userO.Value then userO.Set newO
                        if userO.Value = None then executePolicy false SignIn
                        do! Async.Sleep 9000
                } |> Async.Start
        
            checkUser()
        
            let logout          () = executePolicy true SignIn
        
        [< JavaScript >]
        module ModeloUI =
            open FsRoot.Prozper
        
            let modeloV = Var.Create {
                idAliado      = IdAliado ":"
                aliados       = [||]
                anoActual     = System.DateTime.Now.Year
                periodoActual = System.DateTime.Now.Month
                premisas      = premisasCalculo
                nevento       = -2L
            }
        
            let formasPagoAliadoV = Var.Create [||]
        
            let invitacionesV = Var.Create ""    
            let emailsInvitarW = 
                V( match invitacionesV.V with
                    | REGEX rexEmail "gi" r -> r
                    |_-> [||]
                    |> Seq.distinct
                    |> Seq.sort
                    |> String.concat "\n"
                )
            let invitacionesDisabledW = V(if emailsInvitarW.V = "" then "disabled" else "")
        
            let selAliadoIdOV = Var.Create None
        
            let refAliadoIdOV : Var<IdAliado option> = Var.Create None
        
            let rec separate s parts =
                match s with
                | "" -> parts |> String.concat ","
                | _  -> separate (s.Left -3) (s.Right 3 :: parts)
        
            let money (m:int) = "$" + separate (string m) []
        
            type EndPoint =
            | [< EndPoint "" >] DefaultEP
            |                   Content of string
        
            open Sitelets.InferRouter
            open FsRoot
            module AF = AppFramework 
        
            let endPointV = if IsClient then Router.Infer() |> Router.InstallHash DefaultEP else Var.Create DefaultEP
        
            let contentVar =
                Var.Lens endPointV 
                    (function
                    | DefaultEP          -> "ProzperLyt.mainContent"
                    | Content     lyt    -> lyt)
                    (fun _ -> function
                    | "ProzperLyt.mainContent"  -> DefaultEP
                    | lyt                       -> Content lyt)
        
            let aliadoIdDoc fDoc =
                View.Do {
                    let! modelo   = modeloV      .View
                    let  aid      = modelo.idAliado
                    let  aliadoO  = modelo.aliados |> Seq.tryFind (fun al -> al.id = aid)
                    return 
                        match aliadoO with
                        | None    -> Doc.Empty
                        | Some al -> View.Const al |> fDoc
                } |> Doc.BindView id
        
            let aliadoW =
                View.Do {
                    let! modelo   = modeloV      .View
                    let  aid      = modelo.idAliado
                    let  aliadoO  = modelo.aliados |> Seq.tryFind (fun al -> al.id = aid)
                    return 
                        match aliadoO with
                        | None    -> Aliado.empty
                        | Some al -> al
                }
        
            let selAliadoIdDoc fDoc =
                View.Do {
                    let! modelo   = modeloV      .View
                    let! selAlIdO = selAliadoIdOV.View
                    let  aliadoO  = selAlIdO |> Option.bind (fun aid -> modelo.aliados |> Seq.tryFind (fun al -> al.id = aid) )
                    return 
                        match aliadoO with
                        | None    -> Doc.Empty
                        | Some al -> View.Const al |> fDoc
                } |> Doc.BindView id
        
            type Aliado with
                static member LoggedId = Msal.userO.Value |> Option.map (fun user -> user?idToken?oid) |> Option.defaultValue ""
        
            module Rpc =
                let llamadas = Var.Create 0
                let setLlamadas v = llamadas.Set v
                let iterA arm = AsyncResultM.iterA (ResultMessage.summarized >> JS.Alert) id arm
                let [< Inline >] inline llamar (f : string -> _ -> AsyncResultM<_,unit>) p1 p2  = asyncResultM {
                    setLlamadas <| llamadas.Value + 1
                    let! r = f p1 p2 |> Async.map (fun v -> setLlamadas <| llamadas.Value - 1 ; v)
                    return r
                }
                let agregarUsuarioSiEsNuevo  p = llamar Rpc.agregarUsuarioSiEsNuevo  Aliado.LoggedId p
                let obtenerEstadoParaUsuario p = llamar Rpc.obtenerEstadoParaUsuario Aliado.LoggedId p
                let obtenerUnions            p = llamar Rpc.obtenerUnions            Aliado.LoggedId p
                let ejecutarDataEventoNuevo  p = llamar Rpc.ejecutarDataEventoNuevo  Aliado.LoggedId p
                let enviarCorreosInvitacion  p = llamar Rpc.enviarCorreosInvitacion  Aliado.LoggedId p
                let obtenerFormasDePago      p = llamar Rpc.obtenerFormasDePago      Aliado.LoggedId p
                let registrarTarjeta         p = llamar Rpc.registrarTarjeta         Aliado.LoggedId p
                let registrarCuenta          p = llamar Rpc.registrarCuenta          Aliado.LoggedId p
        
            [< AutoOpen >]
            module Refresh =
                let mutable shouldRefresh = true
            
                let refrescarData force = 
                    if force then shouldRefresh <- true
                    match Msal.userO.Value with
                    | Some user ->
                        asyncResultM {
                            if Msal.referidoPor() <> "" then
                                do!   Msal.claims user |> Rpc.agregarUsuarioSiEsNuevo
                            if not JS.Document.Hidden then
                                if shouldRefresh then
                                    let! data = Rpc.obtenerEstadoParaUsuario ()
                                    shouldRefresh <- false
                                    if modeloV.Value <> data then modeloV.Set data
                        } |> Rpc.iterA
                    |_-> modeloV.Set modeloVacio
            
                Msal.userO.View |> View.Sink (fun _-> refrescarData true)
            
                async {
                    while true do
                        do! Async.Sleep (5 * 60 * 1000)
                        refrescarData true
                } |> Async.Start
            
                try 
                    JS.Document.AddEventListener("visibilityChange", (fun () -> refrescarData false), false)
                with _ -> ()
            
                
            module VariousUI = 
            
                let alertIfNone name vO f = 
                    match vO with
                    | None   -> JS.Alert ("Error not caught: " + name)
                                None
                    | Some v -> f v
            
                let paises   = Var.Create [||]
                let estados  = Var.Create [||]
                let tiposDir = Var.Create [||]
                let tiposTel = Var.Create [||]
                let generos  = Var.Create [||]
                let tiposCta = Var.Create [||]
                let tiposTar = Var.Create [||]
                let aniosV   = Var.Create [||]
                let mesesV   = Var.Create [||]
            
                asyncResultM {
                    let! p, e, td, tl, g, tc, tt, mm, yy =  Rpc.obtenerUnions          ()
                    paises  .Set p
                    estados .Set e
                    tiposDir.Set td
                    tiposTel.Set tl
                    generos .Set g
                    tiposCta.Set tc
                    tiposTar.Set tt
                    aniosV  .Set yy
                    mesesV  .Set mm
                } |> Rpc.iterA 
            
                let crearOption  n  = Html.Elt.option [] [ Html.text n] :> Doc
                let crearOptions ns = ns |> Seq.map crearOption |> Doc.Concat
            
                let removeButton f doc = 
                    Html.form [] 
                        [   doc 
                            Doc.Button "x" [ Html.attr.title "borrar" ] f
                        ]
            
            
            module CorreoElectronico =
                open VariousUI
            
                let formaDoc (corV : Var<CorreoElectronico option>) =
                    let mensaje = Var.Create ""
            
                    let forma =
                        TemplateLib.Correo()
                            .Mensaje( mensaje.V )
                            .Create()
                    match corV.Value with | None -> () | Some v -> forma.Vars.ConfirmarCorreo.Set <| v.ToString()
                    V (
                        if     forma.Vars.Correo         .V.Trim() = "" 
                            || forma.Vars.ConfirmarCorreo.V.Trim() = ""
                            || forma.Vars.Correo         .V.Trim()
                             = forma.Vars.ConfirmarCorreo.V.Trim() 
                            then "" 
                            else "Correos no son iguales"
                    ) |> View.Sink mensaje.Set
                    corV.View 
                    |> View.Sink (function
                        | None     -> ()
                        | Some cor -> 
                        forma.Vars.Correo.Set <| cor.email
                        //forma.Vars.ConfirmarCorreo.Set <| cor.ToString()
                    )
                    let requeridosW =
                        V(  [   forma.Vars.Correo         .V.Trim() =  "" , "Correo"
                                forma.Vars.ConfirmarCorreo.V.Trim() =  "" , "ConfirmarCorreo"
                                mensaje                   .V        <> "" , mensaje.V
                            ]
                            |> Seq.filter fst
                            |> Seq.map    snd
                        )
                    V (
                        if not (Seq.isEmpty requeridosW.V)  then None else
                        corV.Value
                        |> Option.orElse (Some correoVacio)
                        |> Option.map    (fun v -> { v with email = forma.Vars.Correo.V } )
                    ) |> View.Sink (fun v -> if corV.Value <> v then corV.Set v)
                    requeridosW, forma.Doc
            
            
            module Telefono =
                open VariousUI
            
                let formaDoc (telOV : Var<Telefono option>) = 
                    let forma =
                        TemplateLib.Telefono()
                            .Tipos(    V( crearOptions tiposTel.V ).V )
                            .Create()
            
                    telOV.View 
                    |> View.Sink (function
                        | None     -> ()
                        | Some tel -> 
                        forma.Vars.CodigoArea  .Set <|              tel.codigoArea  
                        forma.Vars.CodigoPais  .Set <|              tel.codigoPais
                        forma.Vars.Telefono    .Set <|              tel.numero    
                        forma.Vars.Extension   .Set <|              tel.extension
                        forma.Vars.TipoTelefono.Set <| sprintf "%O" tel.tipoTelefono
                    )
                    let requeridosW =
                        V(  [   forma.Vars.CodigoPais  .V.Trim() = "" , "CodigoPais"
                                forma.Vars.Telefono    .V.Trim() = "" , "Telefono"
                                forma.Vars.TipoTelefono.V.Trim() = "" , "TipoTelefono"
                            ]
                            |> Seq.filter fst
                            |> Seq.map    snd
                        )
                    V (
                        if not (Seq.isEmpty requeridosW.V)  then None else
                        forma.Vars.TipoTelefono.V.Trim() |> TipoTelefono.tryParse |> alertIfNone "TipoTelefono" <| fun tipo ->                
                        Some {
                            codigoArea   = forma.Vars.CodigoArea  .V.Trim()
                            codigoPais   = forma.Vars.CodigoPais  .V.Trim()
                            numero       = forma.Vars.Telefono    .V.Trim()
                            extension    = forma.Vars.Extension   .V.Trim()
                            tipoTelefono = tipo
                            mensajes     = false
                        }
                    ) |> View.Sink (fun v -> if telOV.Value <> v then telOV.Set v)
                    requeridosW, forma.Doc
             
            module Direccion =
                open VariousUI
            
                let formaDoc (dirV : Var<Direccion option>) =
                    let forma =
                        TemplateLib.Direccion()
                            .Paises(   V( crearOptions paises  .V ).V )
                            .Estados(  V( crearOptions estados .V ).V )
                            .Tipos(    V( crearOptions tiposDir.V ).V )
                            .Create()
            
                    dirV.View 
                    |> View.Sink (function
                        | None     -> ()
                        | Some dir -> 
                        forma.Vars.Direccion1   .Set <| dir.linea1  
                        forma.Vars.Direccion2   .Set <| dir.linea2  
                        forma.Vars.Ciudad       .Set <| dir.ciudad    
                        forma.Vars.Estado       .Set <| sprintf "%O" dir.estado
                        forma.Vars.Pais         .Set <| sprintf "%O" dir.pais
                        forma.Vars.CodigoPostal .Set <| sprintf "%O" dir.zonaPostal
                        forma.Vars.TipoDireccion.Set <| sprintf "%O" dir.tipoDireccion
                    )
                    let requeridosW = 
                        V( 
                            [
                                forma.Vars.Direccion1   .V.Trim() = "" , "Direccion1"
                                forma.Vars.Ciudad       .V.Trim() = "" , "Ciudad"
                                forma.Vars.Estado       .V.Trim() = "" , "Estado"
                                forma.Vars.Pais         .V.Trim() = "" , "Pais"
                                forma.Vars.CodigoPostal .V.Trim() = "" , "CodigoPostal"
                                forma.Vars.TipoDireccion.V.Trim() = "" , "TipoDireccion"
                            ]
                            |> Seq.filter fst
                            |> Seq.map    snd
                        )
                    V (
                        if not (Seq.isEmpty requeridosW.V)  then None else
                        forma.Vars.TipoDireccion.V.Trim() |> TipoDireccion.tryParse |> alertIfNone "TipoDireccion" <| fun tipo   ->                
                        forma.Vars.Estado       .V.Trim() |> Estado       .tryParse |> alertIfNone "Estado"        <| fun estado -> 
                        forma.Vars.Pais         .V.Trim() |> Pais         .tryParse |> alertIfNone "Pais"          <| fun pais   -> 
                        forma.Vars.CodigoPostal .V.Trim() |> ZonaPostal   .tryParse |> alertIfNone "CodigoPostal"  <| fun codigo -> 
                        Some {
                            tipoDireccion = tipo
                            linea1        = forma.Vars.Direccion1.V.Trim()
                            linea2        = forma.Vars.Direccion2.V.Trim()
                            ciudad        = forma.Vars.Ciudad    .V.Trim()
                            estado        = estado
                            pais          = pais
                            zonaPostal    = codigo
                            Direccion.authorizeIdR  = dirV.V |> Option.map (fun dir -> dir.authorizeIdR) |> Option.defaultValue (Error "")
                        }            
                    ) |> View.Sink (fun v -> if dirV.Value <> v then dirV.Set v)
                    requeridosW, forma.Doc
            
            module CuentaBancaria =
                open VariousUI
            
                let formaDoc (ctaV  : Var<CuentaBancaria * string>) =
                    let forma =
                        TemplateLib.CuentaBancaria()
                            .TiposCuenta( V( crearOptions tiposCta.V ).V )
                            .Mensaje(     V( snd          ctaV    .V ).V ) 
                            .Create()
            
                    ctaV .View 
                    |> View.Sink (fun (cta, _) -> 
                        forma.Vars.Titular      .Set <| cta.titular
                        forma.Vars.Banco        .Set <| cta.banco
                        forma.Vars.TipoCuenta   .Set <| sprintf "%O" cta.tipo
                        forma.Vars.Numero       .Set <| match cta.numero  with NumeroCuenta  s -> s
                        forma.Vars.Routing      .Set <| match cta.routing with RoutingNumber s -> s
                    )
                    let requeridosW = 
                        V( 
                            [
                                forma.Vars.Titular      .V.Trim() = "" , "Titular"
                                forma.Vars.Banco        .V.Trim() = "" , "Banco"
                                forma.Vars.Numero       .V.Trim() = "" , "Numero de Cuenta"
                                forma.Vars.Routing      .V.Trim() = "" , "ABA/Routing Number"
                            ]
                            |> Seq.filter fst
                            |> Seq.map    snd
                        )
                    V (
                        if not (Seq.isEmpty requeridosW.V)  then None else
                        forma.Vars.TipoCuenta   .V.Trim() |> TipoCuenta   .tryParse |> alertIfNone "TipoCuenta"   <| fun tipoCta ->
                        Some {
                            banco         = forma.Vars.Banco  .V.Trim()
                            titular       = forma.Vars.Titular.V.Trim()
                            numero        = forma.Vars.Numero .V.Trim() |> NumeroCuenta
                            routing       = forma.Vars.Routing.V.Trim() |> RoutingNumber
                            tipo          = tipoCta
                        }            
                    ) |> View.Sink (function |None -> () | Some v -> if fst ctaV .Value <> v then ctaV .Set (v, "") )
                    requeridosW, forma.Doc
            
                let formaDocO (ctaOV  : Var<(CuentaBancaria * string) option>) =
                    formaDoc (Var.Lens ctaOV (Option.defaultValue (ctaVacio, "") ) (fun _ v -> Some v ))
            
            module TarjetaCredito =
                open VariousUI
            
                let formaDoc (tarV  : Var<(TarjetaCredito * string)>) =
                    let forma =
                        TemplateLib.TarjetaCredito()
                            .TiposTarjeta( V( tiposTar.V                   |> crearOptions  ).V )
                            .Mensaje(      V( tarV    .V                   |> snd           ).V )
                            .Anios(        V( aniosV  .V |> Seq.map string |> crearOptions  ).V )
                            .Meses(        V( mesesV  .V |> Seq.map string |> crearOptions  ).V ) 
                            .Create()
            
                    tarV .View 
                    |> View.Sink (fun (tar, mensaje) -> 
                        forma.Vars.Titular      .Set <| tar.titular
                        forma.Vars.TipoTarjeta  .Set <| sprintf "%O"        tar.tipoTarjeta
                        forma.Vars.Numero       .Set <| match tar.numero with NumeroTarjeta s -> s
                        forma.Vars.AnioVenc     .Set <| sprintf "%04d"      tar.expiracion.anio
                        forma.Vars.MesVenc      .Set <| sprintf "%A"        tar.expiracion.mes
                    )
                    let requeridosW = 
                        V( 
                            [
                                forma.Vars.Titular      .V.Trim() = "" , "Titular"
                                forma.Vars.TipoTarjeta  .V.Trim() = "" , "TipoTarjeta"
                                forma.Vars.Numero       .V.Trim() = "" , "Numero"
                                forma.Vars.AnioVenc     .V.Trim() = "" , "Ano de Vencimiento"
                                forma.Vars.MesVenc      .V.Trim() = "" , "Mes de Vencimiento"
                            ]
                            |> Seq.filter fst
                            |> Seq.map    snd
                        ) 
                    V (
                        if not (Seq.isEmpty requeridosW.V)  then None else
                        forma.Vars.TipoTarjeta.V.Trim() |> TipoTarjeta.tryParse |> alertIfNone "Tipo Tarjeta" <| fun tipoTar ->
                        Some {
                            tipoTarjeta   = tipoTar
                            titular       = forma.Vars.Titular   .V.Trim()
                            numero        = forma.Vars.Numero    .V.Trim() |> NumeroTarjeta
                            expiracion    = {
                                anio = forma.Vars.AnioVenc.V.Trim() |> ParseO.parseIntO |> Option.defaultValue 0
                                mes  = forma.Vars.MesVenc .V.Trim() |> (function
                                                                        | "Febrero"    -> Mes.Febrero   
                                                                        | "Marzo"      -> Mes.Marzo     
                                                                        | "Abril"      -> Mes.Abril     
                                                                        | "Mayo"       -> Mes.Mayo      
                                                                        | "Junio"      -> Mes.Junio     
                                                                        | "Julio"      -> Mes.Julio     
                                                                        | "Agosto"     -> Mes.Agosto    
                                                                        | "Septiembre" -> Mes.Septiembre
                                                                        | "Octubre"    -> Mes.Octubre   
                                                                        | "Noviembre"  -> Mes.Noviembre 
                                                                        | "Diciembre"  -> Mes.Diciembre 
                                                                        |_             -> Mes.Enero)
            
                            }
                        }            
                    ) |> View.Sink (function |None -> () | Some v -> if fst tarV .Value <> v then tarV .Set (v, "") ) 
                    requeridosW, forma.Doc
            
                let formaDocO (tarOV  : Var<(TarjetaCredito * string) option>) =
                    formaDoc (Var.Lens tarOV (Option.defaultValue (tarVacio, "") ) (fun _ v -> Some v ))
            
            module DatosPersonales =
                open VariousUI
            
                let formaDoc (datosV : Var<DatosPersonales option>) =
                    let forma    = 
                        TemplateLib.DatosPersonales()
                            .Generos(        V( crearOptions generos.V ).V            )
                            .Create()
                    datosV.View
                    |> View.Sink (function
                        | None     -> ()
                        | Some dat -> 
                        forma.Vars.Nombres        .Set <| (dat.nombre1   + " " + dat.nombre2   ).Trim()
                        forma.Vars.Apellidos      .Set <| (dat.apellido1 + " " + dat.apellido2 ).Trim()
                        forma.Vars.FechaNacimiento.Set <| Date.toYYYYMMDD "-"   dat.fechaNacimiento
                        forma.Vars.Genero         .Set <| sprintf "%A" dat.genero
                    )                
                    let requeridosW =
                        V(  [   forma.Vars.Nombres        .V.Trim() = "" , "Nombres"
                                forma.Vars.Apellidos      .V.Trim() = "" , "Apellidos"
                                forma.Vars.FechaNacimiento.V.Trim() = "" , "Fecha de Nacimiento"
                                forma.Vars.Genero         .V.Trim() = "" , "Genero"
                            ]
                            |> Seq.filter fst
                            |> Seq.map    snd
                        ) 
                    V (
                        if not (Seq.isEmpty requeridosW.V)  then None else
                        forma.Vars.Genero         .V |> Genero.tryParse    |> alertIfNone "Genero"           <| fun genero ->
                        forma.Vars.FechaNacimiento.V |> ParseO.parseDateO2 |> alertIfNone "Fecha incorrecta" <| fun fecha  ->
                        Some {
                            titulo          = None
                            nombre1         = forma.Vars.Nombres  .V.Trim().Split(' ').[0  ]
                            nombre2         = forma.Vars.Nombres  .V.Trim().Split(' ').[1..] |> String.concat " "
                            apellido1       = forma.Vars.Apellidos.V.Trim().Split(' ').[0  ]
                            apellido2       = forma.Vars.Apellidos.V.Trim().Split(' ').[1..] |> String.concat " "
                            nacionalidad    = OtroP ""
                            genero          = genero
                            fechaNacimiento = fecha
                        }            
                    ) |> View.Sink (fun v -> if datosV.Value <> v then datosV.Set v)
            
                    requeridosW, forma.Doc
            
            
            module FormaRegistro = 
            
                let formaDoc() =
                    let mensajes      = Var.Create ""
                    let mostrar       = Var.Create false
                    let datosOV       = Var.Create None
                    let correoOV      = Var.Create None
                    let telefonoOV    = Var.Create None
                    let direccionOV   = Var.Create None
            
                    let datReqsW, datosDoc     = DatosPersonales  .formaDoc datosOV
                    let corReqsW, correoDoc    = CorreoElectronico.formaDoc correoOV
                    let telReqsW, telefonoDoc  = Telefono         .formaDoc telefonoOV
                    let dirReqsW, direccionDoc = Direccion        .formaDoc direccionOV
                    let forma    =
                        TemplateLib.FormaRegistro()
                            .Mensajes(       if mostrar.V then mensajes     .V else "")
                            .DatosPersonales(datosDoc                                 )
                            .Correo(         correoDoc                                )
                            .Telefono(       telefonoDoc                              )
                            .Direccion(      direccionDoc                             )
                            .Registrarse(fun ev ->
                                mostrar.Set true
                                let m =  mensajes.Value
                                if m.Trim() <> "" then JS.Alert m else 
                                    match datosOV    .Value
                                        , correoOV   .Value
                                        , telefonoOV .Value
                                        , direccionOV.Value
                                            with
                                    | Some datos, Some correo, Some telefono, Some direccion ->
                                        asyncResultM {
                                            let contactos = [|    
                                                CorreoElectronico correo
                                                Telefono          telefono
                                                Direccion         direccion 
                                            |]
                                            let  nid  = System.Guid.NewGuid().ToString().Replace("-", "").Substring(0,20) |> IdAliado
                                            let! resp = (nid, datos, Some modeloV.Value.idAliado, contactos) |> RegistroNuevo |> Rpc.ejecutarDataEventoNuevo
                                            refrescarData true
                                            sprintf "%A" resp|> JS.Alert
                                        } |> AsyncResultM.iterA (ResultMessage.summarized >> JS.Alert) id
                                    | _ -> JS.Alert "Error not caught FormaRegistro"
                            )
                            .Create()
                    V(  seq {
                            yield! datReqsW.V
                            yield! corReqsW.V
                            yield! telReqsW.V
                            yield! dirReqsW.V
                        }
                        |> String.concat ", "
                        |> fun es -> if es <> "" then "Campos requeridos: " + es else ""
                    )   |> View.Sink mensajes.Set
                    forma.Doc
            
            
            module FormaDatos =
            
                let formaAliado (aliadoW: View<Aliado>) =
                    let mensajes      = Var.Create ""
                    let mostrar       = Var.Create false
                    let datosOV       = Var.Create None
                    
                    aliadoW
                    |> View.Map  (fun a -> a.datosPersonales )
                    |> View.Sink (Some >> datosOV.Set)
            
                    let datReqsW, datosDoc     = DatosPersonales.formaDoc datosOV
                    let forma =
                        TemplateLib.FormaDatosPersonales()
                            .Mensajes(       if mostrar.V then mensajes     .V else ""                                     )
                            .Changed(        if Some aliadoW.V.datosPersonales = datosOV.V then "" else "mui-btn--primary" )
                            .DatosPersonales(datosDoc                                                                      )
                            .Salvar(fun ev ->
                                mostrar.Set true
                                let m =  mensajes.Value
                                if m.Trim() <> "" then JS.Alert m else 
                                    match datosOV.Value, View.TryGet aliadoW with
                                    | Some datos, Some al ->
                                        asyncResultM {
                                            let! resp = ActualizarDatosPersonales (al.id, datos) |> Rpc.ejecutarDataEventoNuevo
                                            refrescarData true
                                            sprintf "%A" resp|> JS.Alert
                                        } |> AsyncResultM.iterA (ResultMessage.summarized >> JS.Alert) id
                                    | _ -> JS.Alert "Error not caught FormaDatos"
                            )
                            .Create()
            
                    V(  seq {
                            yield! datReqsW.V
                        }
                        |> String.concat ", "
                        |> fun es -> if es <> "" then "Campos requeridos: " + es else ""
                    )   |> View.Sink mensajes.Set
                    forma.Doc
            
                let formaDoc() = aliadoIdDoc formaAliado
            
            module FormaGenerica =
            
                let forma(mensajeW: View<string>) (cambioW: View<bool>) (contenido : Doc) salvar =
                    let mensajes      = Var.Create ""
                    let mostrar       = Var.Create false
                    
                    let forma =
                        TemplateLib.FormaGenerica()
                            .Mensajes(if mostrar.V then mensajeW.V else ""    )
                            .Changed( if cambioW.V then "" else "mui-btn--primary" )
                            .Content( contenido            ) 
                            .Salvar(  fun _ -> salvar())
                            .Create()
            
                    forma.Doc
            
            module FormaContactos =
                open VariousUI
            
                let ftel = (function Telefono          tel -> Some tel |_-> None), Telefono
                let fcor = (function CorreoElectronico cor -> Some cor |_-> None), CorreoElectronico
                let fdir = (function Direccion         dir -> Some dir |_-> None), Direccion        
            
                let formaTelefonos (aliadoW: View<Aliado>) =
                    let contactosV    = Var.Create [||]
                    
                    aliadoW
                    |> View.Map  (fun a -> a.contactos)
                    |> View.Sink contactosV.Set
            
                    let contactosIV = V( contactosV.V |> Seq.indexed )
            
                    let makeVar (f, fr) i = 
                        Var.Make (V(contactosV.V |> Seq.tryItem i |> Option.bind f )) 
                                (function Some nv -> Array.replace i (fr nv) contactosV.Value |> contactosV.Set |_-> () )
                    
                    let tels = V( contactosIV.V |> Seq.choose (fun (i, c) -> fst ftel c |> Option.map (fun _ -> i) ) )
                    let cors = V( contactosIV.V |> Seq.choose (fun (i, c) -> fst fcor c |> Option.map (fun _ -> i) ) )
                    let dirs = V( contactosIV.V |> Seq.choose (fun (i, c) -> fst fdir c |> Option.map (fun _ -> i) ) )
            
                    let telDocs = tels |> Doc.BindSeqCachedBy id (makeVar ftel >> Telefono         .formaDoc >> snd )
                    let corDocs = cors |> Doc.BindSeqCachedBy id (makeVar fcor >> CorreoElectronico.formaDoc >> snd )
                    let dirDocs = dirs |> Doc.BindSeqCachedBy id (makeVar fdir >> Direccion        .formaDoc >> snd )
            
                    FormaGenerica.forma
            
            
                let formaContactos (aliadoW: View<Aliado>) =
                    let mensajes      = Var.Create ""
                    let mostrar       = Var.Create false
                    let contactosV    = Var.Create [||]
                    
                    aliadoW
                    |> View.Map  (fun a -> a.contactos)
                    |> View.Sink contactosV.Set
            
                    let contactosIV = V( contactosV.V |> Seq.indexed )
            
                    let makeVar (f, fr) i = 
                        Var.Make (V(contactosV.V |> Seq.tryItem i |> Option.bind f )) 
                                (function Some nv -> Array.replace i (fr nv) contactosV.Value |> contactosV.Set |_-> () )
                    
                    let ftel = (function Telefono          tel -> Some tel |_-> None), Telefono
                    let fcor = (function CorreoElectronico cor -> Some cor |_-> None), CorreoElectronico
                    let fdir = (function Direccion         dir -> Some dir |_-> None), Direccion        
            
                    let tels = V( contactosIV.V |> Seq.choose (fun (i, c) -> fst ftel c |> Option.map (fun _ -> i) ) )
                    let cors = V( contactosIV.V |> Seq.choose (fun (i, c) -> fst fcor c |> Option.map (fun _ -> i) ) )
                    let dirs = V( contactosIV.V |> Seq.choose (fun (i, c) -> fst fdir c |> Option.map (fun _ -> i) ) )
            
                    let telDocs = tels |> Doc.BindSeqCachedBy id (fun i -> makeVar ftel i |> Telefono         .formaDoc |> snd |> removeButton (fun _ -> contactosV.Value |> Array.remove i |> contactosV.Set ) )
                    let corDocs = cors |> Doc.BindSeqCachedBy id (fun i -> makeVar fcor i |> CorreoElectronico.formaDoc |> snd |> removeButton (fun _ -> contactosV.Value |> Array.remove i |> contactosV.Set ) )
                    let dirDocs = dirs |> Doc.BindSeqCachedBy id (fun i -> makeVar fdir i |> Direccion        .formaDoc |> snd |> removeButton (fun _ -> contactosV.Value |> Array.remove i |> contactosV.Set ) )
            
                    let forma =
                        TemplateLib.FormaContactos()
                            .Mensajes(    if mostrar.V then mensajes     .V else ""                             )
                            .Changed(     if aliadoW.V.contactos = contactosV.V then "" else "mui-btn--primary" )
                            .Telefonos(   telDocs              ) 
                            .Correos(     corDocs              ) 
                            .Direcciones( dirDocs              ) 
                            .MasTelefono( fun _ -> contactosV.Value |> Array.append <| [| Telefono          telVacio    |] |> contactosV.Set)
                            .MasCorreo(   fun _ -> contactosV.Value |> Array.append <| [| CorreoElectronico correoVacio |] |> contactosV.Set)
                            .MasDireccion(fun _ -> contactosV.Value |> Array.append <| [| Direccion         dirVacio    |] |> contactosV.Set)
                            .Salvar(fun ev ->
                                mostrar.Set true
                                let m =  mensajes.Value
                                if m.Trim() <> "" then JS.Alert m else 
                                    match View.TryGet aliadoW with
                                    | Some al ->
                                        asyncResultM {
                                            let! resp = ActualizarContactos (al.id, contactosV.Value) |> Rpc.ejecutarDataEventoNuevo
                                            refrescarData true
                                            sprintf "%A" resp|> JS.Alert
                                        } |> AsyncResultM.iterA (ResultMessage.summarized >> JS.Alert) id
                                    | _ -> JS.Alert "Error not caught FormaDatos"
                            )
                            .Create()
            
                    forma.Doc
            
                let formaDoc() = aliadoIdDoc formaContactos
            
            module FormaFormasPago =
                open VariousUI
            
                let msg ({ FormaPago.authorizeIdR = idR }) = 
                    match idR with 
                    | Error "" -> "La cuenta aun no ha sido verificada" 
                    | Error m  -> m 
                    | Ok v -> sprintf "Cuenta verificada: %A" v 
            
                let ftar = (fun cp -> match cp.cuentaPago with TarjetaCredito tar -> Some (tar, msg cp) |_-> None), fun fp v -> { fp with cuentaPago = TarjetaCredito v ; authorizeIdR = Error "" }
                let fcta = (fun cp -> match cp.cuentaPago with CuentaBancaria cta -> Some (cta, msg cp) |_-> None), fun fp v -> { fp with cuentaPago = CuentaBancaria v ; authorizeIdR = Error "" }
            
                let refrescarFormasPago() = Rpc.obtenerFormasDePago() |> AsyncResultM.iterpA formasPagoAliadoV.Set
            
                let formaFormasPago (aliadoW: View<Aliado>) =
                    let mensajes      = Var.Create ""
                    let mostrar       = Var.Create false
                    let formasPagoV   = Var.Create [||]
                    
                    formasPagoAliadoV.View
                    |> View.Sink formasPagoV.Set
            
                    refrescarFormasPago()
                    
                    let formasPagoIW  = V(formasPagoV.V |> Seq.indexed)
            
                    let makeVar (f: (FormaPago -> ('a * string) option) , fr : (FormaPago -> 'a -> FormaPago)) i = 
                        Var.Make (V(formasPagoV.V |> Seq.tryItem i |> Option.bind f )) 
                                (function Some nv -> Array.replace i (fr formasPagoV.Value.[i] (fst nv) ) formasPagoV.Value |> formasPagoV.Set |_-> () )
                    
                    let tars = V( formasPagoIW.V |> Seq.choose (fun (i, c) -> fst ftar c |> Option.map (fun _ -> i) ) )
                    let ctas = V( formasPagoIW.V |> Seq.choose (fun (i, c) -> fst fcta c |> Option.map (fun _ -> i) ) )
            
                    let tarDocs = tars |> Doc.BindSeqCachedBy id (fun i -> makeVar ftar i |> TarjetaCredito.formaDocO |> snd |> removeButton (fun _ -> formasPagoV.Value |> Array.remove i |> formasPagoV.Set ) )
                    let ctaDocs = ctas |> Doc.BindSeqCachedBy id (fun i -> makeVar fcta i |> CuentaBancaria.formaDocO |> snd |> removeButton (fun _ -> formasPagoV.Value |> Array.remove i |> formasPagoV.Set ) )
            
                    let fp cp = {
                        cuentaPago   = cp
                        authorizeIdR = Error ""
                        nombre       = ""
                    }
            
                    let forma =
                        TemplateLib.FormaCuentas()
                            .Mensajes(    if mostrar.V then mensajes.V else ""                                    )
                            .Tarjetas(    tarDocs              ) 
                            .Cuentas(     ctaDocs              ) 
                            .MasTarjeta(  fun _ -> formasPagoV.Value |> Array.append <| [| TarjetaCredito tarVacio |> fp |] |> formasPagoV.Set)
                            .MasCuenta(   fun _ -> formasPagoV.Value |> Array.append <| [| CuentaBancaria ctaVacio |> fp |] |> formasPagoV.Set)
                            .Changed(     if formasPagoAliadoV.V = formasPagoV.V then "" else "mui-btn--primary" )
                            .Salvar(fun ev ->
                                mostrar.Set true
                                let m =  mensajes.Value
                                if  m.Trim() <> "" then JS.Alert m else 
                                    match View.TryGet aliadoW with
                                    | Some al ->
                                        asyncResultM {
                                            for formaPago in formasPagoV.Value do
                                                let callO = match formaPago.cuentaPago with
                                                            | TarjetaCredito tar when not (tar.numero.Id.Contains "X") -> Some <| Rpc.registrarTarjeta tar
                                                            | CuentaBancaria cta when not (cta.numero.Id.Contains "X") -> Some <| Rpc.registrarCuenta  cta
                                                            | _-> None
                                                match callO with
                                                | None -> ()
                                                | Some call ->
                                                let! resp = call
                                                JS.Alert <| resp.ToString()
                                            refrescarFormasPago()
                                        } |> AsyncResultM.iterA (ResultMessage.summarized >> JS.Alert) id
                                    | _ -> JS.Alert "Error not caught FormaDatos"
                            )
                            .Create()
            
                    forma.Doc
            
                let formaDoc() = aliadoIdDoc formaFormasPago
            
            module RenderAliados =
                open SortWith
            
                let aliados() =
                    let expandidos = Var.Create None
                    let hijosDeO   = Var.Create None
            
                    let hijosDe id = hijosDeO.Value |> Option.map (fun f -> f id) |> Option.defaultValue [||]
            
                    let referidos al =
                        if al.nReferidos = 0 then "-" else
                        sprintf "%d/%d" al.nRefActivos al.nReferidos
                    let descendientes al =
                        if al.nDescendientes = 0 then "-" else
                        sprintf "%d/%d" al.nDescActivos al.nDescendientes
                    let comision v = if v = 0 then "-" else money v 
                    let expandido id =
                        expandidos.View
                        |> View.Map (fun exp -> 
                            if hijosDe id |> Seq.isEmpty then "" else
                            if exp |> Option.map (Set.contains id) = Some true then "Expandido" else "Colapsado") 
                    let expandir  id =
                        if expandidos.Value |> Option.map (Set.contains id) = Some true then Set.remove else Set.add
                            <| id 
                            <| (expandidos.Value |> Option.defaultValue Set.empty)
                        |> Some
                        |> expandidos.Set
                    let seleccionar id =  Some id |> selAliadoIdOV.Set
                    let sortAliados als =
                        let als = als |> Seq.sortWith (desc (fun al -> al.comision                       )
                                                    &>  asc (fun al -> al.status                         )
                                                    &> desc (fun al -> al.nRefActivos , al.nReferidos    )
                                                    &> desc (fun al -> al.nDescActivos, al.nDescendientes)
                                                    &>  asc (fun al -> Aliado.nombre al.datosPersonales  ) )
                        let buscar = Aliado.busqueda als
                        hijosDeO.Set <| Some buscar.hijosDe
                        let nivel = try als |> Seq.map (fun al -> al.nivel) |> Seq.min with _ -> 1
                        let raiz = als |> Seq.filter (fun al -> al.nivel = nivel)
                        if raiz |> Seq.isEmpty then
                            expandidos.Set None
                        elif expandidos.Value.IsNone then
                            raiz |> Seq.map (fun al -> al.id) |> Set |> Some |> expandidos.Set
                            raiz |> Seq.map (fun al -> al.id) |> Seq.tryHead |> Option.iter seleccionar
                        let rec buscarExpandidos al = seq {
                            yield al
                            if expandidos.Value |> Option.map (Set.contains al.id) |> Option.defaultValue false then
                                for hijo in buscar.hijos al do
                                    yield! buscarExpandidos hijo
                        }
                        seq {
                            for al in raiz do
                                yield! buscarExpandidos al
                        }
                    
                    TemplateLib.TablaAliados()
                        .TBody(
                            V modeloV.V.aliados
                            |> View.Map2 (fun _ -> sortAliados) expandidos.View
                            |> Doc.BindSeqCachedViewBy (fun al -> al.id) (fun alid alv ->
                                TemplateLib.FilaAliado()
                                    .nombre(              Aliado.nombre alv.V.datosPersonales)
                                    .status(              sprintf "%A"  alv.V.status         )
                                    .tipo(                sprintf "%A"  alv.V.tipo           )
                                    .nivel(               string        alv.V.nivel          )
                                    .referidos(           referidos     alv.V                )
                                    .descendientes(       descendientes alv.V                )
                                    .comision(            comision      alv.V.comision       )
                                    .expandido(           expandido     alid                 )
                                    .expandir(   fun _ -> expandir      alid                 )
                                    .seleccionado( if Some alid = selAliadoIdOV.V then "seleccionado" else "" )
                                    .seleccionar(fun _ -> seleccionar   alid                 )
                                    .Doc()
                            )
                        ).Doc()
            module RenderAliado =
            
                let calculo() =
            
                    let prem = V modeloV.V.premisas
            
                    let comision v = if v = 0 then "-" else sprintf "%5d$" v
                    
                    let alvO = 
                        let aliados = V modeloV.V.aliados
                        let alid    = V modeloV.V.idAliado
                        V (Seq.tryFind (fun al -> al.id = alid.V) aliados.V)
            
                    let calculoDoc (alv: View<Aliado>) =
                        let comisionV = V (Aliado.comision prem.V alv.V)
                        let premisasV = V (Aliado.premisas prem.V alv.V)
                        TemplateLib.Calculo()
                            .referidos(        sprintf "%d"    alv.V.nReferidos                    )
                            .refActivos(       sprintf "%d"    alv.V.nRefActivos                   )
                            .comReferido(      sprintf "%d"   (alv.V.nRefActivos )                 )
                            .descendientes(    sprintf "%d"    alv.V.nDescendientes                )
                            .desActivos(       sprintf "%d"    alv.V.nDescActivos                  )
                            .comision(         money (fst comisionV.V + snd comisionV.V ) )
                            .comReferido(      money (fst comisionV.V                   ) )
                            .comDescendiente(  money (snd comisionV.V                   ) )
                            .porReferido(      money (fst premisasV.V                   ) )
                            .porDescendiente(  money (snd premisasV.V                   ) )
                            .Doc() 
            
                    selAliadoIdDoc calculoDoc
            
                let aliado() =
            
                    let comision v = if v = 0 then "-" else sprintf "%5d$" v
            
                    let correo al = 
                        al.contactos
                        |> Seq.tryPick (function CorreoElectronico{ email = c } -> Some c |_-> None)
                        |> Option.defaultValue "correo no encontrado!"
                    
                    let aliadoDoc (alv: View<Aliado>) =
                        TemplateLib.Aliado()
                            .nombre(           Aliado.nombre2 alv.V.datosPersonales)
                            .status(           sprintf "%A"   alv.V.status         )
                            .tipo(             sprintf "%A"   alv.V.tipo           )
                            .contacto(         correo         alv.V                )
                            .Calculo(          calculo()                           )
                            .Doc() 
            
                    selAliadoIdDoc aliadoDoc
            
            
        module MainProgram =
            open Prozper
            open Templating
            open ModeloUI
        
            open FsRoot
            module AF = AppFramework 
        
            let layoutName = "ProzperLyt"
            let appName    = "Prozper"
        
            let scrollToBottom (e:Dom.Element) (_:obj) = 
                async { 
                    do! Async.Sleep 100
                    do  e.ScrollTop <- e.ScrollHeight
                } |> Async.Start
        
            let mesToString =
                function
                |  1 -> "Ene"            
                |  2 -> "Feb"            
                |  3 -> "Mar"            
                |  4 -> "Abr"            
                |  5 -> "May"            
                |  6 -> "Jun"            
                |  7 -> "Jul"            
                |  8 -> "Ago"            
                |  9 -> "Sep"            
                | 10 -> "Oct"            
                | 11 -> "Nov"            
                | 12 -> "Dic"
                | _  -> "---"
        
            let logout () = Msal.logout()
            let login  () = Msal.logout()
            let enviarCorreosInvitacion () = 
                asyncResultM {
                    let! emails0 = ModeloUI.emailsInvitarW      |> View.GetAsync
                    let! id      = V (ModeloUI.aliadoW.V.id.Id) |> View.GetAsync
                    let  emails  = emails0.Split '\n' |> Array.filter (fun s -> s.Trim() <> "")
                    do! Rpc.enviarCorreosInvitacion("Invitacion a Prozper", IdAliado id,  emails)
                    match emails.Length with
                    | 0 -> JS.Alert "Ningun correo valido ha sido encontrado"
                    | 1 -> JS.Alert "Invitacion ha sido enviada"
                    | _ -> JS.Alert "Invitaciones han sido enviadas"
                } |> AsyncResultM.iterA print id
        
            let getContentDoc() =
                (ModeloUI.contentVar.View, Msal.userO.View)
                ||> View.Map2(fun content userO ->
                    let content =
                        match userO with
                        | None   -> layoutName + ".cntFormaNoUser"
                        | Some _ -> content
                    LayoutEngine.splitName appName content
                    ||> AF.tryGetDoc
                    |>  Option.map (LayoutEngine.getDocFinal [])
                    |>  Option.defaultWith (fun () -> sprintf "Doc not found %s" content |> LayoutEngine.errDoc)
                )
                |> Doc.EmbedView
        
            [< SPAEntryPoint >]    
            let mainProgram() =
                let titleV          = Var.Create appName
                let mesActualW      = V (mesToString    ModeloUI.modeloV.V.periodoActual  )
                let anoActualW      = V (string         ModeloUI.modeloV.V.anoActual      )
                let nombreAliadoW   = V (Aliado.nombre2 ModeloUI.aliadoW.V.datosPersonales)
                let idAliadoW       = V (               ModeloUI.aliadoW.V.id.Id          )
                let statusAliadoW   = V (string         ModeloUI.aliadoW.V.status         )
                let comisionAliadoW = V (string         ModeloUI.aliadoW.V.comision       )
                let datosAliadoW    = V (string         ModeloUI.aliadoW.V.nReferidos     )
        
                AF.addPlugIn {
                    AF.plgName    = appName
                    AF.plgVars    = [| AF.newVar  "title"        titleV
                                       AF.newVar  "contentVar"   ModeloUI.contentVar
                                       AF.newVar  "invitaciones" ModeloUI.invitacionesV
                                    |]  
                    AF.plgViews   = [| AF.newViw  "mesActual"            mesActualW
                                       AF.newViw  "anoActual"            anoActualW
                                       AF.newViw  "aliado"               nombreAliadoW
                                       AF.newViw  "idAliado"             idAliadoW
                                       AF.newViw  "status"               statusAliadoW
                                       AF.newViw  "comision"             comisionAliadoW
                                       AF.newViw  "datos"                datosAliadoW
                                       AF.newViw  "emailsInvitar"        ModeloUI.emailsInvitarW
                                       AF.newViw  "invitacionesDisabled" ModeloUI.invitacionesDisabledW
                                    |]  
                    AF.plgDocs    = [| AF.newDoc  "Aliados"         (lazy RenderAliados  .aliados () )
                                       AF.newDoc  "Aliado"          (lazy RenderAliado   .aliado  () )
                                       AF.newDoc  "Calculo"         (lazy RenderAliado   .calculo () )
                                       AF.newDoc  "FormaRegistro"   (lazy FormaRegistro  .formaDoc() )
                                       AF.newDoc  "FormaDatos"      (lazy FormaDatos     .formaDoc() )
                                       AF.newDoc  "FormaContactos"  (lazy FormaContactos .formaDoc() )
                                       AF.newDoc  "FormaFormasPago" (lazy FormaFormasPago.formaDoc() )
                                       AF.newDoc  "contentDoc"      (lazy getContentDoc           () )
                                    |]  
                    AF.plgActions = [| AF.newAct  "Logout"      logout
                                       AF.newAct  "LogIn"       login
                                       AF.newAct  "enviarInvitaciones" enviarCorreosInvitacion
                                    |]
                    AF.plgQueries = [|                                               
                                    |]
                }
                match JS.Document.GetElementById("GlobalLayout") with
                | null ->
                   """
                        menuEditor layout
                        |          main
        
                        main div ""
                        :                 template  header     "id=header"           brand  brandV   logout "@{Prozper.Logout}" afiliado "@{Prozper.aliado}"
                        :                 Doc       Prozper.contentDoc
                        :                 template  sidedrawer "id=sidedrawer"       brand  brandV   idaliado "@{Prozper.idAliado}" 
                        :                 template  footer     "id=footer"           brand  brandV   madeby "CIPHER Bsc" madebylink "www.cipherbsc.com"
         
                        mainContent          template  content    "id=content-wrapper"  content aliados                  fecha "@{Prozper.mesActual} @{Prozper.anoActual}" idaliado "@{Prozper.aliado}"
                        cntFormaRegistro     template  content    "id=content-wrapper"  content Prozper.FormaRegistro    titulo "Referido por: @{Prozper.aliado}"  
                        cntFormaDatos        template  content    "id=content-wrapper"  content Prozper.FormaDatos       titulo " "
                        cntFormaContactos    template  content    "id=content-wrapper"  content Prozper.FormaContactos   titulo " " 
                        cntFormaFormasPago   template  content    "id=content-wrapper"  content Prozper.FormaFormasPago  titulo " " 
                        cntFormaCuentas      template  content    "id=content-wrapper"  content ProzperLyt.FormaCuentas  titulo " "  
                        cntFormaDocumentos   template  content    "id=content-wrapper"  content Prozper.FormaDocumentos  titulo " "  
                        cntFormaNoUser       template  content    "id=content-wrapper"  content botonLogin               titulo " "  
                        cntFormaInvitaciones template  content    "id=content-wrapper"  content invitaciones             titulo " "  
        
                        aliados          div       "class=row"
                        :                div       "class=mui-col-md-6"
                        ::               div       "class=mui-panel mui--z5 scrollbar;max-height:550px;overflow:auto" Prozper.Aliados
                        :                div       "class=mui-col-md-6"
                        ::               div       "class=mui-panel mui--z5 scrollbar;max-height:550px;overflow:auto" Aliado Comisiones
                        brandV           Var       "Prozper"
        
                        botonLogin       div       "class=row"
                        :                div       "class=mui-col-md-6"
                        ::               div       "class=mui-panel mui--z5 scrollbar;max-height:550px;overflow:auto" 
                        :::              button    Prozper.LogIn "class=mui-btn mui-btn--primary" "Ingresar al Sistema"
        
                        invitaciones     div       "class=row"
                        :                div       "class=mui-col-md-6 mui-col-md-offset-1"
                        ::               div       "class=mui-panel mui--z5 scrollbar; max-height:550px ; overflow:auto" 
                        :::              h1        "" "Enviar Invitaciones"
                        :::              textarea  Prozper.invitaciones  "width:100% ; height:30rem; placeholder=Copie aqui las direcciones de correo electronico" 
                        :                div       "white-space: pre-wrap" "@{Prozper.emailsInvitar}"
                        :                button    Prozper.enviarInvitaciones "class=mui-btn mui-btn--raised mui-btn--primary;@{Prozper.invitacionesDisabled}" "Enviar"
        
                        Aliado           div       "class=mui-col-md-8"
                        :                Doc Prozper.Aliado
        
                        Comisiones       template    tablacomisiones "class=mui-col-md-3"  tbody filasComisiones
                        filasComisiones  concat      ""
                        :                template    filacomision    ""  periodo "Ene 2018" comision "$1,000"
                        :                template    filacomision    ""  periodo "Feb 2018" comision "$1,000"
                        :                template    filacomision    ""  periodo "Mar 2018" comision "$1,000"
                        :                template    filacomision    ""  periodo "Abr 2018" comision "$1,000"
                        :                template    filacomision    ""  periodo "May 2018" comision "$1,000"
                        :                template    filacomision    ""  periodo "Jun 2018" comision "$1,000"
                        :                template    filacomision    ""  periodo "Jul 2018" comision "$1,000"
                        :                template    filacomision    ""  periodo "Ago 2018" comision "$1,000"
                        :                template    filacomision    ""  periodo "Sep 2018" comision "$1,000"
                        :                template    filacomision    ""  periodo "Oct 2018" comision "$1,000"
                        :                template    filacomision    ""  periodo "Nov 2018" comision "$1,000"
                        :                template    filacomision    ""  periodo "Dec 2018" comision "$1,000"
                
                        menuEditorx      horizontal  65          menuLogo                  editorMessages
                        double           horizontal  0-50-100    AppFramework.AppFwkClient menuEditor
                        menuLogo         vertical    350         logo                      menu
                        logo             span       "margin:0;   color:gray; font-size: 55px; font-weight:530" "StackOverflow"
                        editorMessages   horizontal  10-83-100   editorButtons             messages
                        messages         vertical    0-50-100    messagesLeft              messagesRight
                        editorButtons    vertical    150 buttons snippetsSnippet 
                        snippetsSnippet  vertical    0-20-100    snippets                  editorProperties
                        snippets         horizontal  20          "@{FSharpStation.CurrentPath}" tblDimensions2
                        editorProperties vertical    0-100-100   snippet                   properties
                        properties       div        ""           FSharpStation.Properties
                        snippet          horizontal  35          Name                      FSharpStation.editor
                        menu             span       "display: grid; grid-template-columns: 30% 20% 20% 10%; grid-gap: 25px; margin:5px; grid-template-rows:50px" inpServer btnLoad btnSaveAs
                         
                        severalTabs      wcomp-tabstrip  "" 
                        :                div "tabname=Dimensions" 
                        ::               div "" btnAddDimension RuleEditor.Dimensions
                        :                div "tabname=Cubes"
                        :                div "tabname=Global Definitions" RuleEditor.globalDefs
                
                        btnSaveAs        button RuleEditor.SaveAs         "class=btn @{RuleEditor.SaveNeeded}" "Save as...    "
                        btnAddDimension  button RuleEditor.AddDimension      ""                  "new dim..."
                        btnDeleteSnippet button FSharpStation.RemoveSnippet  ""                  "Delete Snippet"
                        btnIndentIn      button FSharpStation.IndentIn       ""                  "Indent In  >> "
                        btnIndentOut     button FSharpStation.IndentOut      ""                  "Indent Out << "
                        btnRunFS         button FSharpStation.RunFS          ""                  "Run F#        "
                        btnAbortFsi      button FSharpStation.AbortFsi       ""                  "Abort Fsi     "
                
                        messagesLeft     wcomp-tabstrip                      ""                  Output FsCode
                        messagesRight    wcomp-tabstrip                      ""                  Parser
                
                        buttons          div "overflow: hidden; display: grid; grid-template-columns: 100%; grid-template-rows: repeat(15, calc(100% / 15)); bxackground-color: #eee; box-sizing: border-box; padding : 5px; grid-gap: 5px; margin-right: 21px"
                        :                button RuleEditor.AddCalculation    ""                 "Add Calculation"
                        :                button RuleEditor.AddTotal          ""                 "Add Total"
                        :                Doc       none x
                        :                button RuleEditor.IndentIn          ""                  "Indent In  >> "
                        :                button RuleEditor.IndentOut         ""                  "Indent Out << "
                
                        Output           textarea  RuleEditor.Output         "tabname=Output ; placeholder=Output messages ; spellcheck=false" 
                        FsCode           textarea  RuleEditor.CodeFS         "tabname=F# Code; placeholder=F# Code         ; spellcheck=false" 
                        Parser           textarea  RuleEditor.Parser         "tabname=Parser ; placeholder=Parser messages; dblclick=@{FSharpStation.JumpTo} ; spellcheck=false" 
                        Name             Doc       InputLabel                ""     "Name:"        FSharpStation.SnippetName
                        inpServer        Doc       InputLabel                ""     "Server:"      RuleEditor.Server
                        btnLoad          Doc       InputFile                 ""     "Load File..." RuleEditor.LoadFile  FileName
                        btnImport        Doc       InputFile                 ""     "Import..."    FSharpStation.Import    ""
                        FileName         div                                 "class=form-control"  RuleEditor.fileName
        
                   """
                | e -> e.TextContent
                |> LayoutEngine.newLyt layoutName
                |> LayoutEngine.addLayout
        
                None
                |> Option.defaultValue layoutName
                |> AF.mainDocV.Set
        
                TemplateLib()
                    .MainContent( AF.getMainDoc.Value )
                    .Cortina( if Rpc.llamadas.V > 0 then "mui-overlay" else "not-mui-overlay")
                    .Bind()
                titleV.View |> View.Sink (fun t -> JS.Document.Title <- t)
        
            let mainProgramLoggedOff refId =
                ModeloUI.refAliadoIdOV.Set <| Some refId
                mainProgram()
        
        
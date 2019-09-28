#nowarn "3242"
////-d:FSharpStation1569527865882 -d:TEE -d:WEBSHARPER
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
//#I @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461"
//#I @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Web.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Main.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Web.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Control.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
//#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
//#nowarn "3242"
/// Root namespace for all code
//#define FSharpStation1569527865882
#if INTERACTIVE
module FsRoot   =
#else
namespace FsRoot
#endif

    #if !NETSTANDARD20
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Web.dll"
    
    #if WEBSHARPER
    //#I @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461"
    //#I @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461"
    
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Main.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Web.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Control.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
    //#r @"d:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
    #endif
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
            inherit System.Attribute()
            let a = 1
        type JavaScriptAttribute(translate:bool) =
            inherit System.Attribute()
            let a = 1
            new() = JavaScriptAttribute true
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
        [< JavaScript ; AutoOpen >]
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
            [< Inline "(function (n) { return n.getFullYear() + '-' + ('0'+(n.getMonth()+1)).slice(-2) + '-' +  ('0'+n.getDate()).slice(-2) + ' '+('0'+n.getHours()).slice(-2)+ ':'+('0'+n.getMinutes()).slice(-2)+ ':'+('0'+n.getSeconds()).slice(-2)+ ':'+('00'+n.getMilliseconds()).slice(-3) })(new Date(Date.now()))" >]
            let nowStamp() = 
                let t = System.DateTime.UtcNow // in two steps to avoid Warning: The value has been copied to ensure the original is not mutated
                t.ToString("yyyy-MM-dd HH:mm:ss.fff", System.Globalization.CultureInfo.InvariantCulture)
            
            let [<Inline>] inline traceT t v = tee (sprintf "%A" >> (fun s -> s.[..min 100 s.Length-1]) >> printfn "%s %s: %A" (nowStamp()) t) v
            let [<Inline>] inline trace   v = traceT "trace" v
            let [<Inline>] inline traceI  v = trace          v |> ignore
            
            module Log =
                let [<Inline>] inline In     n f   =      (traceT (sprintf "%s in " n)) >> f
                let [<Inline>] inline Out    n f   = f >> (traceT (sprintf "%s out" n))
                let [<Inline>] inline InA    n f p = async { return! In  n f p }
                let [<Inline>] inline OutA   n f p = async { return! Out n f p }
                let [<Inline>] inline InOut  n     = In  n >> Out  n
                let [<Inline>] inline InOutA n f p = async {
                    let!   r = InA n f  p
                    do         Out n id r |> ignore
                    return r 
                  }
            
                let [<Inline>] inline TimeIt n f p =
                    printfn "Starting %s" n
                    let start = System.DateTime.UtcNow.Ticks
                    f p
                    let elapsedSpan = new System.TimeSpan(System.DateTime.UtcNow.Ticks - start)
                    print <| elapsedSpan.ToString()
            
            
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
                
                let thousands n =
                    let v = n.ToString()
                    let r = v.Length % 3 
                    let s = if r = 0 then 3 else r
                    [   yield v.[0.. s - 1]
                        for i in 0..(v.Length - s)/ 3 - 1 do
                            yield v.[i * 3 + s .. i * 3 + s + 2]
                    ] |> String.concat ","
            
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
            
            
            [< Inline "console.log($o)" >]
            let consoleLog o : unit = X<_>
            
            [< Inline """(!$v)""">]
            let isUndefined v = v.GetType() = v.GetType()
                
            
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
            
                let (-->) (n:string) (v : _       ) = n, (                           v :> obj) |> Some
                let (==>) (n:string) (vO: _ option) = n, (vO |> Option.map (fun v -> v :> obj))
            
                type AuthOptions = {
                    clientId                    : string
                    authority                   : string
                    validateAuthority           : bool
                    redirectUri                 : string
                    postLogoutRedirectUri       : string
                    navigateToLoginRequestUrl   : bool
                }
                   with
                        static member New(clientId: string, ?authority: string, ?validateAuthority: bool, ?redirectUri: string, ?postLogoutRedirectUri: string, ?navigateToLoginRequestUrl: bool) : AuthOptions=
                            Pojo.newPojoOpt [
                                "clientId"                  --> clientId                 
                                "authority"                 ==> authority                
                                "validateAuthority"         ==> validateAuthority        
                                "redirectUri"               ==> redirectUri              
                                "postLogoutRedirectUri"     ==> postLogoutRedirectUri    
                                "navigateToLoginRequestUrl" ==> navigateToLoginRequestUrl
                            ] |> box |> unbox
            
                type CacheLocation = string // LocalStorage | SessionStorage
            
                type CacheOptions = {
                    cacheLocation          : string
                    storeAuthStateInCookie : bool
                }
                   with
                        static member New(?cacheLocation: CacheLocation, ?storeAuthStateInCookie: bool) : CacheOptions =
                            Pojo.newPojoOpt [
                                "cacheLocation"           ==> cacheLocation
                                "storeAuthStateInCookie"  ==> storeAuthStateInCookie
                            ] |> box |> unbox
            
                type Logger = obj
            
                type SystemOptions = {
                    logger                      : Logger
                    loadFrameTimeout            : int
                    navigateFrameWait           : int
                    tokenRenewalOffsetSeconds   : int
                }
                   with
                        static member New(?logger: Logger, ?loadFrameTimeout: int, ?navigateFrameWait: int, ?tokenRenewalOffsetSeconds: int) : SystemOptions =
                            Pojo.newPojoOpt [
                                "logger"                    ==> logger
                                "loadFrameTimeout"          ==> loadFrameTimeout
                                "navigateFrameWait"         ==> navigateFrameWait
                                "tokenRenewalOffsetSeconds" ==> tokenRenewalOffsetSeconds
                            ] |> box |> unbox
            
                type FrameworkOptions = {
                    isAngular           : bool
                    protectedResourceMap: Map<string, string[]>
                    unprotectedResources: string[]
                }
                   with
                        static member New(?isAngular: bool, ?protectedResourceMap: Map<string, string[]>, ?unprotectedResources: string[]) : FrameworkOptions =
                            Pojo.newPojoOpt [
                                "isAngular"            ==> isAngular
                                "protectedResourceMap" ==> protectedResourceMap
                                "unprotectedResources" ==> unprotectedResources
                            ] |> box |> unbox
            
                type Configuration = { auth: AuthOptions ;cache : CacheOptions ; system: SystemOptions ; framework :  FrameworkOptions }
                    with 
                        static member New(?auth: AuthOptions, ?cache : CacheOptions, ? system: SystemOptions, ? framework :  FrameworkOptions) : Configuration =
                            Pojo.newPojoOpt [
                                "auth"      ==> auth
                                "cache"     ==> cache
                                "system"    ==> system
                                "framework" ==> framework
                            ] |> box |> unbox
            
            //    [< AllowNullLiteral >]
            //    type User (displayableId: string, name: string, identityProvider: string, userIdentifier: string, idToken: obj, sid: string) =
            //        [< Inline "User.createUser($idToken, $clientInfo)" >]
            //        static member createUser(idToken: obj, clientInfo: obj) : User = X<_>
            
                [< AllowNullLiteral >]
                type Account() = 
                    [< DefaultValue >] val mutable accountIdentifier     : string  
                    [< DefaultValue >] val mutable environment           : string  
                    [< DefaultValue >] val mutable homeAccountIdentifier : string  
                    [< DefaultValue >] val mutable idToken               : JSObject
                    [< DefaultValue >] val mutable name                  : string  
                    [< DefaultValue >] val mutable sid                   : string  
                    [< DefaultValue >] val mutable userName              : string  
            
                type AuthResponse = {
                    accessToken  : string
                    account      : Account
                    accountState : string
                    expiresOn    : Date
                    idToken      : JSObject
                    scopes       : Array<string>
                    tenantId     : string
                    tokenType    : string
                    uniqueId     : string        
                }
            
                type AuthError = {
                    errorCode    : string
                    errorMessage : string
                    message      : string
                    name         : string
                    stack        : string option
                }
            
                type tokenReceivedCallback =             AuthResponse  -> unit
                type errorReceivedCallback = AuthError                 -> unit 
                type authResponseCallback  = FuncWithArgs<AuthError * AuthResponse, unit>
            
                type QPDict = JSObject
            
                type AuthenticationParameters = {
                    account              : Account
                    authority            : string
                    claimsRequest        : string
                    correlationId        : string
                    extraQueryParameters : QPDict
                    extraScopesToConsent : string []
                    loginHint            : string
                    prompt               : string
                    scopes               : string []
                    sid                  : string
                    state                : string        
                }
                   with
                        static member New(?account: Account, ?authority: string, ?claimsRequest: string, ?correlationId: string, ?extraQueryParameters: QPDict, ?extraScopesToConsent: string[], ?loginHint: string, ?prompt: string, ?scopes: string[], ?sid: string, ?state: string) : AuthenticationParameters =
                            Pojo.newPojoOpt [
                                "account"              ==> account
                                "authority"            ==> authority
                                "claimsRequest"        ==> claimsRequest
                                "correlationId"        ==> correlationId
                                "extraQueryParameters" ==> extraQueryParameters
                                "extraScopesToConsent" ==> extraScopesToConsent
                                "loginHint"            ==> loginHint
                                "prompt"               ==> prompt
                                "scopes"               ==> scopes
                                "sid"                  ==> sid
                                "state"                ==> state
                            ] |> box |> unbox
            
                type UserAgentApplication
                    [< Inline "new $global.Msal.UserAgentApplication($options)" >] (options: Configuration) =
                    [< Inline "$this.handleRedirectCallback($tokenReceivedCallback, $errorReceivedCallback) " >] member this.handleRedirectCallback(tokenReceivedCallback: tokenReceivedCallback, errorReceivedCallback: errorReceivedCallback) : unit   = X<_>
                    [< Inline "$this.handleRedirectCallback($authCallback)                                  " >] member this.handleRedirectCallback(authCallback: authResponseCallback) : unit                  = X<_>
                    [< Inline "$this.loginPopup(   $request)                                                " >] member this.loginPopup          (?request: AuthenticationParameters  ) : Promise<AuthResponse> = X<_>
                    [< Inline "$this.loginRedirect($request)                                                " >] member this.loginRedirect       (?request: AuthenticationParameters  ) : unit                  = X<_>
                    [< Inline "$this.acquireTokenSilent  ($request)                                         " >] member this.acquireTokenSilent  ( request: AuthenticationParameters  ) : Promise<AuthResponse> = X<_>
                    [< Inline "$this.acquireTokenRedirect($request)                                         " >] member this.acquireTokenRedirect( request: AuthenticationParameters  ) : unit                  = X<_>
                    [< Inline "$this.acquireTokenPopup   ($request)                                         " >] member this.acquireTokenPopup   ( request: AuthenticationParameters  ) : Promise<AuthResponse> = X<_>
                    [< Inline "$this.logout()                                                               " >] member this.logout              ()                                     : unit                  = X<_>
                    [< Inline "$this.getAccount()                                                           " >] member this.getAccount          ()                                     : Account               = X<_>
                    //[< Inline "$this.getUserState($state)                                                   " >] member this.getUserState        (state: string)                        : string                = X<_>
            
    
        //#define WEBSHARPER
        //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
        [< JavaScriptExport >]
        module TestingJS =
        
        
            module Msal =
                open Msal
                open WebSharper
                open WebSharper.UI
                open WebSharper.UI.Html
            
                type PreambleState =
                | GoToSignIn
                | GoingToSignIn
                | GoToSignUp
                | GoingToSignUp
                | GoToEditProfile
                | GoToResetPassword
                | WentToSignIn
                | WentToSignUp
                | WentToEditProfile
                | WentToResetPassword
                | WentInside
                | InPreamble
                    static member Parse (txt:string) = 
                        match txt.Replace(" ", "") with
                        | "GoToSignIn"          -> GoToSignIn
                        | "GoingToSignIn"       -> GoingToSignIn   
                        | "GoToSignUp"          -> GoToSignUp
                        | "GoingToSignUp"       -> GoingToSignUp   
                        | "GoToEditProfile"     -> GoToEditProfile     
                        | "GoToResetPassword"   -> GoToResetPassword       
                        | "WentToSignIn"        -> WentToSignIn  
                        | "WentToSignUp"        -> WentToSignUp  
                        | "WentToEditProfile"   -> WentToEditProfile       
                        | "WentToResetPassword" -> WentToResetPassword         
                        | "WentInside"          -> WentInside
                        | _                     -> InPreamble
                    override this.ToString() = sprintf "%A" this
            
                let preambleStates = [
                    GoToSignIn
                    GoingToSignIn
                    GoToSignUp
                    GoingToSignUp
                    GoToEditProfile
                    GoToResetPassword
                    WentToSignIn
                    WentToSignUp
                    WentToEditProfile
                    WentToResetPassword
                    WentInside
                    InPreamble        
                ]
            
                let version = "1.0.0"
            
                let storage             = JS.Window.LocalStorage
            
                let replaceQueryParameters() =
                    match JS.Window.Location.Href.Split '?' with
                    | [| noquery ; query |] ->
                        query.Split '&'
                        |> Seq.iter (fun p ->
                            match p.Split '=' with
                            | [| name ; value |] -> 
                                storage.SetItem(name, JS.Window.DecodeURIComponent value)
                                printfn "Preamble: Query param: %s = %s" name value
                            |_-> ()
                        )
                    |_-> ()
                replaceQueryParameters()
            
                let storedVar name def  =
                    let storedVar = storage.GetItem name
                    let var = Var.Create <| if storedVar = null then def else storedVar
                    var.View |> View.Sink (fun v -> storage.SetItem(name, v))
                    var
            
                let storedVarB name def  =
                    let ofS = function "1"  -> true |_-> false
                    let toS = function true -> "1"  |_-> ""
                    let varS = storedVar name (toS def)
                    Var.Lens varS ofS (fun _ -> toS)
            
                let refreshBeforeB      = storedVarB "refreshBefore"          false
                let createOnStartB      = storedVarB "createOnStart"          true
                let forceLoginB         = storedVarB "forceLogin"             false
                let editingB            = storedVarB "Editing"                false
                let applicationId       = storedVar  "applicationId"          "faf95af2-18b5-4895-9663-18f7feb95def"
                let tenantName          = storedVar  "tenantName"             "prozper"
                let ref                 = storedVar  "ref"                    ""
                let extraQueryParms     = storedVar  "extraQueryParms"        "mkt=es-us"
                let signInPolicy        = storedVar  "signInPolicy"           "B2C_1_SignIn"
                let signUpPolicy        = storedVar  "signUpPolicy"           "B2C_1_Registrarse"
                let editProfilePolicy   = storedVar  "editProfilePolicy"      "B2C_1_EditarPerfil"
                let resetPasswordPolicy = storedVar  "resetPasswordPolicy"    "B2C_1_PasswordReset"
                let policyTypeS         = storedVar  "policyType"             "SignIn"
                let goInsideLink        = storedVar  "goInsideLink"           ""
                let scopes              = storedVar  "scopes"                 "https://prozper.onmicrosoft.com/faf95af2-18b5-4895-9663-18f7feb95def/user_impersonation"
            
                let preambleStateS      = storedVar  "preambleState"          "InPreamble"
            
                let policyType          = Var.Lens policyTypeS    Policy       .Parse (fun _ -> string)
                let preambleState       = Var.Lens preambleStateS PreambleState.Parse (fun _ -> string)
            
                let policyNameW = View.Do {
                    let! policyType = policyType.View
                    let! v =
                        match policyType with
                        | SignIn        -> signInPolicy       .View
                        | SignUp        -> signUpPolicy       .View
                        | EditProfile   -> editProfilePolicy  .View
                        | ResetPassword -> resetPasswordPolicy.View
                    return v
                }
            
                let authority           = Var.Create ""
                let token               = Var.Create ""
                let userO               = Var.Create None
            
                let authorityW = View.Do {
                    let! tenantName = tenantName.View
                    let! policyName = policyNameW
                    return sprintf "https://%s.b2clogin.com/tfp/%s.onmicrosoft.com/%s" tenantName tenantName policyName
                }
                do authorityW |> View.Sink authority.Set
            
            
                let authParms () =
                    AuthenticationParameters.New( scopes = [|   sprintf "https://%s.onmicrosoft.com/%s/user_impersonation" tenantName.Value applicationId.Value 
                                                                sprintf "https://%s.onmicrosoft.com/%s/Prozper.Admin"      tenantName.Value applicationId.Value |] )
            
                let agentO : Var<UserAgentApplication option> = Var.Create None
            
                let ui () =
            
                    let checkUser() =
                        agentO.Value 
                        |> Option.bind (fun agent -> match agent.getAccount() with | null -> None |user -> Some user)
                        |> userO.Set
            
                    let convert2QPDict (s:string) =
                        s.Split '&'
                        |> Array.choose (String.splitInTwoO "=") 
                        |> Pojo.newPojo
            
                    let redirectCallback(error: AuthError, resp: AuthResponse) =
                        try 
                            if box error <> null then printfn "Preamble redirectCallback error: %A" error
                            if box resp  <> null then printfn "Preamble redirectCallback resp : %A" resp
                        with e -> printfn "Preamble redirectCallback exception %A %s" e e.StackTrace
            
                    let authParms () =
                        AuthenticationParameters.New(
                                                        scopes               = (scopes.Value.Split ',' |> Array.map (fun s -> s.Trim()) )
                                                      , extraQueryParameters = convert2QPDict extraQueryParms.Value)
                    let executePolicy f =
                        match agentO.Value with
                        | Some agent ->
                            async {
                                let promise = f agent (authParms ())
                                if  promise = null then printfn "Preamble executePolicy No promise?" else
                                let! (s:AuthResponse) = promise |> Promise.AsAsync
                                token.Set s.accessToken
                                checkUser()
                            } |> Async.Start
                        |_-> ()
            
                    let executePopup    () = executePolicy (fun agent v -> agent.loginPopup    v)
                    let executeRedirect () = executePolicy (fun agent v -> agent.loginRedirect v; null)
                    let logout          () = agentO.Value |> Option.iter (fun agent -> agent.logout() ; checkUser() )
            
                    let editOn() =
                        if refreshBeforeB.Value then
                            editingB.Set true
                            JS.Window.Location.Reload()
                        else
                            agentO.Set None
            
                    let enableAtt w = attr.disabledDynPred (V "") (View.Map not w)
                    let enabledV  () = enableAtt (V (agentO.V =  None))
                    let disabledV () = enableAtt (V (agentO.V <> None))
            
                    let row0 attO1 elem1 attO2 elem2 =
                        tr [] [
                            td (attO1 |> Option.map List.singleton |> Option.defaultValue []) [ elem1 ]
                            td (attO2 |> Option.map List.singleton |> Option.defaultValue []) [ elem2 ]
                        ]
            
                    let row lbl elem =
                        row0 (Some(attr.style "text-align:right; width: 20%")) ( label [] [text (lbl  + ":") ] ) None elem
            
                    let input0 lbl  var             = row0 (Some(attr.style "text-align:right; width: 20%")) lbl None (Doc.Input  [ enabledV() ; attr.style "width: 95%" ] var)
                    let input  lbl  var             = input0 ( label [] [text (lbl  + ":") ] ) var
                    let inline select0     attrs var (ops: 'a list) = Doc.Select attrs string ops var
                    let inline select  lbl attrs var (ops: 'a list) = row  lbl (select0 attrs var ops)
            
                    let tableObject p (o:obj) =
                        table [] [
                            tbody  [] [
                                yield!
                                    JS.GetFields o
                                    |> Seq.filter p
                                    |> Seq.map( fun (n,v) -> tr [] [ 
                                        td [] [ b[] [ text n ]         ]
                                        td [] [ text (sprintf "%A" v)  ]
                                    ] )
                            ]  
                        ]
            
                    let buttonV txt enabled act = 
                        View.Do {
                            let! text        = policyTypeS.View
                            let  attdisabled = if enabled then enabledV() else disabledV() 
                            return Doc.Button (text + " " + txt) [ attdisabled ] act 
                        } |> Doc.BindView id
            
                    let buttonP (policy:Policy) enabledW act =
                        let  text = string policy + " Policy: "
                        Doc.Button text [ enableAtt enabledW ] act 
            
                    let checkbox txt var =
                        span [] [
                            text txt
                            Doc.CheckBox [] var
                        ]
            
                    let loginMessageDoc = 
                        View.Do {
                            let! userO      = userO .View
                            let! agentO     = agentO.View
                            let! policyType = policyType.View
                            let  greeting   = userO 
                                                |> Option.map (fun user -> sprintf "Hello %s %s." user?idToken?given_name user?idToken?family_name)
                                                |> Option.defaultValue ""
                                                |> text
                                                |> Seq.singleton
                                                |> h3 []
                            match agentO, userO, policyType with
                            | None, _     , _           -> return text "Select your options and click on <Create Agent>."
                            | _   , Some _, SignIn      -> return   greeting
                            | _   , Some _, SignUp      -> return [ greeting ; text <| sprintf "To Sign Up click on <Logout> first!" ] |> Doc.Concat
                            | _   , None  , SignUp      -> return text <| sprintf "To Sign Up make sure to really be logged out by clicking on <Logout> first and then click on Sign Up Popup or Redirect!"
                            | _   , None  , EditProfile -> return text <| sprintf "Sign In before invoking Edit Profile!"
                            | _   , _     , pol         ->
                                let v = string pol
                                return [ greeting ; text <| sprintf "To %s click on <%s Popup> or <%s Redirect>." v v v ] |> Doc.Concat
                        } |> Doc.BindView id
            
                    let signInW        = V(agentO.V.IsSome && userO.V.IsNone)
                    let signUpW        = V(agentO.V.IsSome && userO.V.IsNone)
                    let editProfileW   = V(agentO.V.IsSome && userO.V.IsSome)
                    let resetPasswordW = V(agentO.V.IsSome                  )
            
                    let createAgent () = 
                        UserAgentApplication(
                            Configuration.New(auth = AuthOptions.New( 
                                                    clientId          = applicationId.Value
                                                ,   authority         = authority    .Value
                                                ,   validateAuthority = false) 
                        )
                                                        //,   tokenReceivedCallback       = callback
                                                        //,   validateAuthority           = false
                                                        //,   navigateToLoginRequestUrl   = true
                                                        //,   storeAuthStateInCookie      = false
                                                        //,   state                       = ref.Value
                        ) 
                        |>! fun agent -> agent.handleRedirectCallback(FuncWithArgs<_,_> redirectCallback)
                        |> Some
                        |> agentO.Set
                        editingB.Set false
                        checkUser()
            
                    let setAndRunPolicy policy =
                        async {
                            policyType.Set policy
                            let! _ = authorityW |> View.GetAsync
                            createAgent()
                            executeRedirect()
                        } |> Async.Start
            
                    let actSignIn        () = setAndRunPolicy SignIn       
                    let actSignUp        () = setAndRunPolicy SignUp       
                    let actEditProfile   () = setAndRunPolicy EditProfile  
                    let actResetPassword () = setAndRunPolicy ResetPassword
                    let actObtainToken   () = 
                        async { 
                            match agentO.Value with
                            | None -> ()
                            | Some agent ->
                                let! token =  agent.acquireTokenSilent (authParms ()) |> Promise.AsAsync
                                printfn "Preamble actObtainToken %A" token
                        } |> Async.Start
            
                    let goInside         () = JS.Window.Location.Replace goInsideLink.Value
            
                    let updateOnEnter (state:PreambleState) : PreambleState * (unit -> unit) option =
                        match state with
                        | GoToSignIn             -> GoingToSignIn      , (if forceLoginB.Value then Some logout else None)
                        | GoingToSignIn          -> WentToSignIn       , Some actSignIn
                        | GoToSignUp             -> GoingToSignUp      , Some logout
                        | GoingToSignUp          -> WentToSignUp       , Some actSignUp
                        | GoToEditProfile        -> WentToEditProfile  , Some actEditProfile
                        | GoToResetPassword      -> WentToResetPassword, Some actResetPassword
                        | WentToSignIn
                        | WentToSignUp
                        | WentToEditProfile
                        | WentToResetPassword    -> if JS.Window.Location.Hash <> "" then state     , Some ignore else
                                                    if goInsideLink.Value      =  "" then InPreamble, None        else
                                                    if userO.Value.IsSome 
                                                    then WentInside   , Some goInside
                                                    else GoingToSignIn, Some logout                                        
                        | WentInside             -> if goInsideLink.Value = "" then InPreamble, None else
                                                    GoingToSignIn, Some logout
                        | InPreamble             -> InPreamble   , None
            
                    let updateState() =
                        checkUser()
                        printfn "Preamble updateState ENTERING STATE %A, user = %A" preambleState.Value userO.Value.IsSome
                        let rec updateState state =
                            let newState, action = updateOnEnter state
                            if action.IsNone && newState <> InPreamble then updateState newState else
                            newState, action
                        let newState, action = updateState preambleState.Value
                        preambleState.Set newState
                        async {
                            while preambleState.Value <> PreambleState.Parse (storage.GetItem "preambleState") do
                                do! Async.Sleep 50
                            printfn "Preamble updateState EXITING STATE %A = %s" preambleState.Value <| storage.GetItem("preambleState")
                            action |> Option.iter (fun f -> f())
                        } |> Async.Start
            
                    if createOnStartB.Value && (not editingB.Value) then 
                        createAgent()
                        updateState()
            
                    let DoNotShowUI = preambleState.Value <> InPreamble && createOnStartB.Value && not editingB.Value
            
                    let getTokenO0() = async {
                        match userO.Value, agentO.Value with
                        | Some user, Some agent  -> 
                            try let! auth = agent.acquireTokenSilent(authParms () ) |> Promise.AsAsync 
                                return Some auth.accessToken
                            with e ->
                                let! auth = Async.FromContinuations(fun (ok, ko, ca) -> 
                                        agent.handleRedirectCallback( FuncWithArgs<_,_> (fun (error: AuthError, resp: AuthResponse) ->
                                            try 
                                                if box error <> null then 
                                                    consoleLog ("redirectCallback ERROR: ", error)
                                                    ko (exn error.errorMessage)
                                                elif box resp  <> null then 
                                                    consoleLog ("redirectCallback: "      , resp )
                                                    ok resp
                                            with e -> printfn "Preamble getTokenO0 exception %A %s" e e.StackTrace
                                        ) )
                                        agent.acquireTokenRedirect( authParms () ) 
                                    )
                                return Some auth.accessToken
                        | _ -> return None
                    }
            
                    div [] [
                        h1  [] [ text      <| sprintf"Msal.js %s (Microsoft authentication library) & Azure AD B2C" version ]
                        br  [] []
                        table [] [
                            tbody [] [
                                row0 None (Doc.Button   "Create Agent"     [ enabledV () ] createAgent    )
                                     None (checkbox     "Create on Start"                  createOnStartB )
                                row0 None (Doc.Button   "Edit"            [ disabledV() ]  editOn         )
                                     None (checkbox     "Refresh before Edit"              refreshBeforeB )
                            ]
                        ]
                        br  [] []
                        table [ attr.style "width: 95%" ] [
                            tbody[] [
                                row "preamble state" 
                                    <| Doc.Concat [
                                    select0   []     preambleState          preambleStates 
                                    text "Refresh (F5) to update state"
                                ]
                                input  "App Id"                                                   applicationId
                                input  "tenant Name"                                              tenantName
                                input  "ref/state"                                                ref
                                input  "extra query parameters"                                   extraQueryParms
                                input  "go Inside link"                                           goInsideLink
                                input0 ([   checkbox "Force login dialog" forceLoginB
                                            buttonP SignIn          signInW         actSignIn
                                        ] |> Doc.Concat                                         ) signInPolicy       
                                input0 (buttonP SignUp          signUpW         actSignUp       ) signUpPolicy       
                                input0 (buttonP EditProfile     editProfileW    actEditProfile  ) editProfilePolicy  
                                input0 (buttonP ResetPassword   resetPasswordW  actResetPassword) resetPasswordPolicy
                                tr [][]
                                select "policy type" [ enabledV() ] policyType          policies  
                                input  "Authority"                  authority
                                input0 (Doc.Button "Scopes" [ enableAtt editProfileW ] actObtainToken ) scopes
                            ]
                        ]            
                        br  [] []
                        div [] [ Doc.Button   "Logout"           [ disabledV() ] logout          ]
                        loginMessageDoc
                        div [] [ buttonV      "Popup"              false         executePopup    ]
                        div [] [ buttonV      "Redirect"           false         executeRedirect ]
                        br  [] []
                        b[] [ text "Token: " ]
                        text token.V
                        br  [] []
                        div [] [ Doc.Button   "Check User"       [ disabledV() ] checkUser      ]
                        div [] [ Doc.Button   "Get Token"        [ disabledV() ] (fun () -> getTokenO0() |> Async.map consoleLog |>Async.Start )]
                        h5[] [ text "User: " ]
                        View.Do {
                            let! userO = userO.View
                            match userO with
                            | None      -> return Doc.Empty
                            | Some user ->
                            return
                                [ 
                                    user         |> tableObject (fst >> (<>) "idToken") 
                                    h4 [] [ text "idToken" ]
                                    user?idToken |> tableObject (fun _ -> true)
                                ] |> Doc.Concat
                        } |> Doc.BindView id
                        a [ attr.href "https://gist.github.com/amieres/bc8e39f2e1e6e54fd1dfaeeae24ad304"] [ text "gist" ]
                    ]
                    |> fun doc -> if not DoNotShowUI then Doc.Run JS.Document.Body doc
            
                [< SPAEntryPoint >]    
                let main =
                    if JS.Window.Location.Search <> "" then 
                        JS.Window.Location.Replace (JS.Window.Location.Href.Split '?').[0] 
                    else
                    script [ attr.src <| sprintf @"https://secure.aadcdn.microsoftonline-p.com/lib/%s/js/msal.min.js" version
                             on.afterRender (fun _ ->
                                async {
                                    while isUndefined JS.Window?Msal do
                                        do! Async.Sleep 50
                                    ui()
                                } |> Async.Start
                             )
                        ] []
                    |> Doc.Run JS.Document.Head
            
            
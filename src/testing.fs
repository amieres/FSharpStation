#nowarn "3242"
////-d:FSharpStation1553872630655 -d:WEBSHARPER
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
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
//#define FSharpStation1553872630655
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
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    
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
                
            
            module Msal =
            
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
            
    
        //#define WEBSHARPER
        
        [< JavaScriptExport >]
        module TestingJS =
        
        
            module Msal =
                open Msal
                open WebSharper
                open WebSharper.UI
                open WebSharper.UI.Html
            
                let version = "0.2.4"
            
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
                        | _                -> SignIn
                    override this.ToString() = (sprintf "%A" this).toUnderscore.Replace('_', ' ')
            
                let policies = [
                    SignIn
                    SignUp
                    EditProfile
                    ResetPassword
                ]
            
                let callback(errorDesc, token, error, tokenType, state) = 
                    printfn          "callback: %A" (errorDesc, error, tokenType, token, state)
            
                let storage             = JS.Window.LocalStorage
            
                let storedVar name def  =
                    let storedVar = storage.GetItem name
                    let var = Var.Create <| if storedVar = null then def else storedVar
                    var.View |> View.Sink (fun v -> storage.SetItem(name, v))
                    var
            
                let storedPolicy        = storage.GetItem "policy"
                let storedRef           = storage.GetItem "ref"
                
                let localTestingApp     = storedVar "localTestingApp"        "faf95af2-18b5-4895-9663-18f7feb95def"
                let tenantName          = storedVar "tenantName"             "prozper"
                let ref                 = storedVar "ref"                    ""
                let extraQueryParms     = storedVar "extraQueryParms"        "mkt=es-us"
                let refreshBefore       = storedVar "refreshBefore"          "0"
                let createOnStart       = storedVar "createOnStart"          "1"
                let forceLogin          = storedVar "forceLogin"             "0"
                let signInPolicy        = storedVar "signInPolicy"           "B2C_1_SignIn"
                let signUpPolicy        = storedVar "signUpPolicy"           "B2C_1_Registrarse"
                let editProfilePolicy   = storedVar "editProfilePolicy"      "B2C_1_EditarPerfil"
                let resetPasswordPolicy = storedVar "resetPasswordPolicy"    "B2C_1_PasswordReset"
                let policyType          = storedVar "policyType"             "SignIn"
            
                let refreshBeforeB      = Var.Lens  refreshBefore (function "1" -> true |_-> false) (fun _ -> function true -> "1" | false -> "0")
                let createOnStartB      = Var.Lens  createOnStart (function "1" -> true |_-> false) (fun _ -> function true -> "1" | false -> "0")
                let forceLoginB         = Var.Lens  forceLogin    (function "1" -> true |_-> false) (fun _ -> function true -> "1" | false -> "0")
                let policyTypeT         = Var.Lens  policyType    Policy.Parse (fun _ -> string)
            
                let policyNameW = View.Do {
                    let! policyType = policyTypeT.View
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
            
                let agentO : Var<UserAgentApplication option> = Var.Create None
            
                let ui () =
            
                    //agentO |> Option.iter (fun agent ->
                    //    async {
                    //        let! s = agent.acquireTokenSilent(null, null, null, null) |> Promise.AsAsync
                    //        token.Set s
                    //    } |> Async.Start
                    //)        
            
                    let checkUser() =
                        agentO.Value 
                        |> Option.bind (fun agent -> match agent.getUser() with | null -> None |user -> Some user)
                        |> userO.Set 
            
                    let executePolicy f =
                        match agentO.Value with
                        | Some agent ->
                            async {
                                let promise = f agent (null, extraQueryParms.Value)
                                if promise = null then printfn "No promise?" else
                                let! s = promise |> Promise.AsAsync
                                token.Set s
                                checkUser()
                            } |> Async.Start
                        |_-> ()
            
                    let executePopup    () = executePolicy (fun agent -> agent.loginPopup   )
                    let executeRedirect () = executePolicy (fun agent -> agent.loginRedirect)
                    let logout          () = agentO.Value |> Option.iter (fun agent -> agent.logout() ) ; checkUser()
            
                    let createAgent () = 
                        UserAgentApplication(localTestingApp.Value
                            , authority.Value
                            , callback
                            , UserAgentApplication.Options( validateAuthority           = false
                                                        ,   navigateToLoginRequestUrl   = true
                                                        ,   storeAuthStateInCookie      = false
                                                        ,   state                       = ref.Value)
                        ) 
                        |> Some
                        |> agentO.Set
                        storage.SetItem("Editing", "")
                        if storage.GetItem("logoutFirst") = "1" then
                            storage.SetItem("logoutFirst", "")
                            executeRedirect()
                        checkUser()
            
                    let editOn() =
                        if refreshBeforeB.Value then
                            storage.SetItem("Editing", "1")
                            JS.Window.Location.Reload()
                        else
                            agentO.Set None
            
                    let DoNotShowUI = storage.GetItem("logoutFirst") = "1" && storage.GetItem("Editing") <> "1" && createOnStartB.Value
            
                    if storage.GetItem("Editing") <> "1" && createOnStartB.Value then 
                        createAgent()
            
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
            
                    let input0 lbl var     = row0 (Some(attr.style "text-align:right; width: 20%")) lbl None (Doc.Input  [ enabledV() ; attr.style "width: 95%" ] var)
                    let input  lbl var     = input0 ( label [] [text (lbl  + ":") ] ) var
                    let select lbl var ops = row  lbl (Doc.Select [ enabledV() ] string ops                var)
            
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
                            let! text        = policyType.View
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
                            let! policyType = policyTypeT.View
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
                            | _   , None  , SignUp      -> return text <| sprintf "To Sign Up make sure to have clicked on <Logout> first and then click on Sign Up Popup or Redirect!"
                            | _   , None  , EditProfile -> return text <| sprintf "Sign In before invoking Edit Profile!"
                            | _   , _     , pol         ->
                                let v = string pol
                                return [ greeting ; text <| sprintf "To %s click on <%s Popup> or <%s Redirect>." v v v ] |> Doc.Concat
                        } |> Doc.BindView id
            
                    let signInW        = V(agentO.V.IsSome && userO.V.IsNone)
                    let signUpW        = V(agentO.V.IsSome && userO.V.IsNone)
                    let editProfileW   = V(agentO.V.IsSome && userO.V.IsSome)
                    let resetPasswordW = V(agentO.V.IsSome                  )
            
                    let setAndRunPolicy logoutFirst policy =
                        async {
                            policyTypeT.Set policy
                            let! _ = authorityW |> View.GetAsync
                            createAgent()
                            if logoutFirst 
                            then storage.SetItem("logoutFirst", "1")
                                 logout()
                            else executeRedirect()
                        } |> Async.Start
            
                    let actSignIn        () = setAndRunPolicy forceLoginB.Value SignIn       
                    let actSignUp        () = setAndRunPolicy true              SignUp       
                    let actEditProfile   () = setAndRunPolicy false             EditProfile  
                    let actResetPassword () = setAndRunPolicy false             ResetPassword
            
                    div [] [
                        h1  [] [ text      <| sprintf"Msal.js %s (Microsoft authentication library)" version ]
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
                                input  "App Id"                                                   localTestingApp
                                input  "tenant Name"                                              tenantName
                                input  "ref/state"                                                ref
                                input  "extra query parameters"                                   extraQueryParms
                                input0 (buttonP SignIn          signInW         actSignIn       ) signInPolicy       
                                input0 (buttonP SignUp          signUpW         actSignUp       ) signUpPolicy       
                                input0 (buttonP EditProfile     editProfileW    actEditProfile  ) editProfilePolicy  
                                input0 (buttonP ResetPassword   resetPasswordW  actResetPassword) resetPasswordPolicy
                                tr [][]
                                select "policy type"            policyTypeT          policies  
                                input  "Authority"              authority
                            ]
                        ]
                        checkbox "Force login" forceLoginB
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
                    ]
                    |> fun doc -> if not DoNotShowUI then Doc.Run JS.Document.Body doc
            
                [< SPAEntryPoint >]    
                let main =
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
            
            
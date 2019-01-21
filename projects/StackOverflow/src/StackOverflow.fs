////-d:FSS_SERVER -d:FSharpStation1547097944900 -d:WEBSHARPER
////#cd @"..\projects\StackOverflow\src"
//#I @"..\packages\WebSharper\lib\net461"
//#I @"..\packages\WebSharper.UI\lib\net461"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Core.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Main.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Web.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Control.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
//#r @"..\packages\Owin\lib\net40\Owin.dll"
//#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
//#r @"..\packages\Microsoft.Owin.Hosting\lib\net451\Microsoft.Owin.Hosting.dll"
//#r @"..\packages\Microsoft.Owin.Host.HttpListener\lib\net451\Microsoft.Owin.Host.HttpListener.dll"
//#r @"..\packages\WebSharper.Owin\lib\net461\WebSharper.Owin.dll"
//#r @"..\packages\WebSharper.Owin\lib\net461\HttpMultipartParser.dll"
//#r @"..\packages\Microsoft.Owin.StaticFiles\lib\net451\Microsoft.Owin.StaticFiles.dll"
//#r @"..\packages\Microsoft.Owin.FileSystems\lib\net451\Microsoft.Owin.FileSystems.dll"
/// Root namespace for all code
//#define FSharpStation1547097944900
#if INTERACTIVE
module FsRoot   =
#else
namespace FsRoot
#endif

    #if WEBSHARPER
    //#define NOFRAMEWORK --noframework
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    
    //#I @"..\packages\WebSharper\lib\net461"
    //#I @"..\packages\WebSharper.UI\lib\net461"
    
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Core.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Main.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Web.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Control.dll"
    //#r @"..\packages\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
    //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
    //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
    //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
    //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
    
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
    
    //#cd @"..\projects\StackOverflow\src"
    
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
    
    //#define WEBSHARPER
    
    [< JavaScript >]
    module StackOverflow =
        open WebSharper
        open WebSharper.JavaScript
        open WebSharper.UI
        open WebSharper.UI.Client
        open WebSharper.UI.Html
        
        module ClientCode =
            [<JavaScriptExport>]
            type [<AbstractClass>] A() = 
                abstract member Doc: Map<string, A> -> Doc
        
            [<JavaScriptExport>]
            type [<AbstractClass>] B() =
                inherit A() 
        
            [< JavaScriptExport >]
            type C() =
                inherit B()
                override __.Doc map =
                    div [] [
                        hr [] []
                        div [] [h1 [] [text "C"]]
                        div [attr.``class`` "jumbotron"] [ map |> map.["D"].Doc ]
                    ]
            [<JavaScriptExport >]
            type D() =
                inherit A()
                override __.Doc _ =
                    span [attr.``class`` "alert alart-info"] [ text "D" ]
        
            let types = new System.Collections.Generic.Dictionary<string, string * A>()
        
            let registerType line (a:'a) =
                if IsClient 
                then types.Add(line                  , (line, a :> A) )     
                else types.Add(typedefof<'a>.FullName, (line, a :> A) )
        
            registerType (__SOURCE_FILE__ + __LINE__) <| C()
            registerType (__SOURCE_FILE__ + __LINE__) <| D()
        
            let fixType v =
                match types.TryGetValue v with
                | false, _         -> C() :> A
                | true , (line, a) -> a
        
            let fixMap (m:Map<string, string>) =
                m |> Seq.map (fun kvp -> kvp.Key, fixType kvp.Value) |> Map
        
        
        [<JavaScript>]
        module Client =
        
            let getDoc (m:Map<string, string>) (docName : string) =
                let m = ClientCode.fixMap m
                m.[docName].Doc(m)
        
        open WebSharper
        open WebSharper.Sitelets
        open WebSharper.JavaScript
        open WebSharper.UI
        open WebSharper.UI.Client
        open WebSharper.UI.Html
        open WebSharper.UI.Server
        
        type EndPoint =
            | [<EndPoint "/">] Home
        
        [< JavaScript false >]
        module Templating =
            type MainTemplate = Templating.Template< @"..\website\Main.html">
        
            // Compute a menubar where the menu item for the given endpoint is active
            let MenuBar (ctx: Context<EndPoint>) endpoint : Doc list =
                let ( => ) txt act =
                     li [if endpoint = act then yield attr.``class`` "active"] [
                        a [attr.href (ctx.Link act)] [text txt]
                     ]
                [
                    "Home" => EndPoint.Home
                ]
        
            let Main ctx action (title: string) (body: Doc list) =
                Content.Page(
                    MainTemplate()
                        .Title(title)
                        .MenuBar(MenuBar ctx action)
                        .Body(body)
                        .Doc()
                )
        
        [< JavaScript false >]
        module Site =
            open WebSharper.UI.Html
        
            let HomePage _map ctx =
                Templating.Main ctx EndPoint.Home "Home" [
                    Doc.ClientSide <@  Client.getDoc _map "C" @>
                ]
        
            let mutable _map : Map<string, string> = Map.empty
        
            let addMapping<'T> name = 
                match ClientCode.types.TryGetValue (typedefof<'T>.FullName) with
                | false,_         -> printfn "Could not map %s to type %s. It is not registered" name (typedefof<'T>.FullName)
                | true ,(line, a) -> 
                _map <- _map |> Map.add name line
        
            addMapping<ClientCode.A> "A"
            addMapping<ClientCode.C> "C"
            addMapping<ClientCode.D> "D"
                
        
            [<Website>]
            let Main =
                Application.MultiPage (fun ctx endpoint ->
                    match endpoint with
                    | EndPoint.Home -> HomePage _map ctx
                )
        
        //#r @"..\packages\Owin\lib\net40\Owin.dll"
        //#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
        //#r @"..\packages\Microsoft.Owin.Hosting\lib\net451\Microsoft.Owin.Hosting.dll"
        //#r @"..\packages\Microsoft.Owin.Host.HttpListener\lib\net451\Microsoft.Owin.Host.HttpListener.dll"
        //#r @"..\packages\WebSharper.Owin\lib\net461\WebSharper.Owin.dll"
        //#r @"..\packages\WebSharper.Owin\lib\net461\HttpMultipartParser.dll"
        //#r @"..\packages\Microsoft.Owin.StaticFiles\lib\net451\Microsoft.Owin.StaticFiles.dll"
        //#r @"..\packages\Microsoft.Owin.FileSystems\lib\net451\Microsoft.Owin.FileSystems.dll"
        //#define FSS_SERVER
        [< JavaScript false >]
        module Server =
            open global.Owin
            open Microsoft.Owin.Hosting
            open Microsoft.Owin.StaticFiles
            open Microsoft.Owin.FileSystems
            open WebSharper.Owin
            open WebSharper.Sitelets
            open WebSharper.UI.Server
            open WebSharper.UI.Templating
            open WebSharper.UI.Html
        
            let [< Literal >] rootdir = @"..\website"
        
            [< EntryPoint >]
            let Main args =
                printfn "Usage: FSharpStation URL ROOT_DIRECTORY MaxMessageSize"
                let url           = args |> Seq.tryItem 0 |>                   Option.defaultValue "http://localhost:9007/"
                let rootDirectory = args |> Seq.tryItem 1 |>                   Option.defaultValue @"..\website"
                let max           = args |> Seq.tryItem 2 |> Option.map int |> Option.defaultValue 1_000_000
                use server = WebApp.Start(url, fun appB ->
                    appB.UseWebSharper(WebSharperOptions(ServerRootDirectory = rootdir
                                                       , Sitelet             = (Some <| Site.Main)
                                                       , BinDirectory        = "."
                                                       , Debug               = true))
                        .UseStaticFiles(StaticFileOptions(FileSystem = PhysicalFileSystem(rootDirectory)))
                    |> ignore)
                stdout.WriteLine("Listening on {0}, hit enter to finish", url)
                stdin.ReadLine() |> ignore
                0
        
        
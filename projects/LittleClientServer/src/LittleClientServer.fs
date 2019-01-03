////-d:FSharpStation1546448143305 -d:WEBSHARPER
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
//#r @"..\packages\Owin\lib\net40\Owin.dll"
//#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
//#r @"..\packages\Microsoft.Owin.Hosting\lib\net451\Microsoft.Owin.Hosting.dll"
//#r @"..\packages\Microsoft.Owin.Host.HttpListener\lib\net451\Microsoft.Owin.Host.HttpListener.dll"
//#r @"..\packages\WebSharper.Owin\lib\net461\WebSharper.Owin.dll"
//#r @"..\packages\WebSharper.Owin\lib\net461\HttpMultipartParser.dll"
//#r @"..\packages\Microsoft.Owin.StaticFiles\lib\net451\Microsoft.Owin.StaticFiles.dll"
//#r @"..\packages\Microsoft.Owin.FileSystems\lib\net451\Microsoft.Owin.FileSystems.dll"
/// Root namespace for all code
//#define FSharpStation1546448143305
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
    
        //#define NOFRAMEWORK --noframework
        //#define WEBSHARPER
        module TestingMixed =
            module ServerFunctions =
            
                let mutable ServerState = ("Zero", 0)
            
                let [< Rpc >] addToState n = async {
                    let state, counter = ServerState
                    let newCounter = counter + n
                    let newState   = if newCounter = 0 then "Zero" else "NonZero"
                    ServerState <- newState, newCounter
                    return newState
                }
            
            [< JavaScript >]
            module ClientFunctions =
                open WebSharper
                open WebSharper.UI
                open WebSharper.UI.Html
                open ServerFunctions
            
                let zeroState = Var.Create "do not know"
            
                let clientDoc() = 
                    div [] [
                        h1 [] [ text "State of zero on server:" ]
                        h2 [] [ text zeroState.V ]
                        Doc.Button "increment" [] (fun () -> async { let! state = addToState  1
                                                                     zeroState.Set state 
                                                                    } |> Async.Start)
                        Doc.Button "decrement" [] (fun () -> async { let! state = addToState -1
                                                                     zeroState.Set state 
                                                                    } |> Async.Start)
                    ]
            
            
            //#r @"..\packages\Owin\lib\net40\Owin.dll"
            //#r @"..\packages\Microsoft.Owin\lib\net451\Microsoft.Owin.dll"
            //#r @"..\packages\Microsoft.Owin.Hosting\lib\net451\Microsoft.Owin.Hosting.dll"
            //#r @"..\packages\Microsoft.Owin.Host.HttpListener\lib\net451\Microsoft.Owin.Host.HttpListener.dll"
            //#r @"..\packages\WebSharper.Owin\lib\net461\WebSharper.Owin.dll"
            //#r @"..\packages\WebSharper.Owin\lib\net461\HttpMultipartParser.dll"
            //#r @"..\packages\Microsoft.Owin.StaticFiles\lib\net451\Microsoft.Owin.StaticFiles.dll"
            //#r @"..\packages\Microsoft.Owin.FileSystems\lib\net451\Microsoft.Owin.FileSystems.dll"
            
            module Server =
                open global.Owin
                open Microsoft.Owin.Hosting
                open Microsoft.Owin.StaticFiles
                open Microsoft.Owin.FileSystems
                open WebSharper.Owin
                open WebSharper.UI.Server
                open WebSharper.UI.Html
                
                type EndPointServer = 
                    | [< EndPoint "/" >] Hello
                    | About
                
                let url = "http://localhost:9006/"
                let rootdir = @"..\website"
                let site()  = WebSharper.Application.MultiPage(fun context (s:EndPointServer) -> 
                                printfn "Serving page: %A" s
                                Content.Page(
                                    Title= ( sprintf "Test %A" s)
                                  , Body = [ h1 [] [ text <| sprintf "%A" s ] 
                                             Html.client <@  ClientFunctions.clientDoc() @> ]) 
                              )                      
                let Main args =
                    use server = WebApp.Start(url, fun appB ->
                        appB.UseWebSharper(WebSharperOptions(ServerRootDirectory = rootdir
                                                           , Sitelet             = (Some <| site())
                                                           , BinDirectory        = "."
                                                           , Debug               = true))
                            .UseStaticFiles(StaticFileOptions(FileSystem = PhysicalFileSystem(rootdir)))
                        |> ignore)
                    stdout.WriteLine("Starting, hit enter to finish")
                    stdin.ReadLine() |> ignore
                    0
                Main()
            
#nowarn "3242"
#nowarn "52"
#nowarn "1182"
#nowarn "1178"
////-d:FSharpStation1566972573107 -d:NETSTANDARD20 -d:NOFRAMEWORK --noframework -d:TEE -d:WEBSHARPER
////#cd @"D:\Abe\CIPHERWorkspace\FSharpStation/projects/ProzperServer"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\NETStandard.Library\build\netstandard2.0\ref"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\netstandard2.0"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\netstandard2.0"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Core\lib\netstandard1.6\FSharp.Core.dll"
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
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\other\AuthorizeNet\lib\AuthorizeNet.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper/WindowsAzure.Storage/lib/net45/Microsoft.WindowsAzure.Storage.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper/Newtonsoft.Json/lib/net45/Newtonsoft.Json.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.IdentityModel.Tokens\lib\net461\Microsoft.IdentityModel.Tokens.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\Microsoft.IdentityModel.Protocols\lib\net461\Microsoft.IdentityModel.Protocols.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\Microsoft.IdentityModel.Protocols.OpenIdConnect\lib\net461\Microsoft.IdentityModel.Protocols.OpenIdConnect.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\Microsoft.IdentityModel.Logging\lib\net461\Microsoft.IdentityModel.Logging.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\Microsoft.IdentityModel.JsonWebTokens\lib\net461\Microsoft.IdentityModel.JsonWebTokens.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Configuration.ConfigurationManager/lib/net461/System.Configuration.ConfigurationManager.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Security.Cryptography.ProtectedData/lib/net461/System.Security.Cryptography.ProtectedData.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Security.Permissions/lib/net461/System.Security.Permissions.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Security.AccessControl/lib/net461/System.Security.AccessControl.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Buffers/lib/netstandard1.1/System.Buffers.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Numerics.Vectors/lib/net46/System.Numerics.Vectors.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Runtime.CompilerServices.Unsafe/lib/netstandard1.0/System.Runtime.CompilerServices.Unsafe.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Security.Principal.Windows/lib/net461/System.Security.Principal.Windows.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Memory/lib/netstandard1.1/System.Memory.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages\test2\System.IdentityModel.Tokens.Jwt\lib\net461\System.IdentityModel.Tokens.Jwt.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Azure.WebJobs\lib\netstandard2.0\Microsoft.Azure.WebJobs.Host.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Azure.WebJobs.Core\lib\netstandard2.0\Microsoft.Azure.WebJobs.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Azure.WebJobs.Extensions\lib\netstandard2.0\Microsoft.Azure.WebJobs.Extensions.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Azure.WebJobs.Extensions.Storage\lib\netstandard2.0\Microsoft.Azure.WebJobs.Extensions.Storage.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Extensions.Primitives\lib\netstandard2.0\Microsoft.Extensions.Primitives.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Extensions.Logging\lib\netstandard2.0\Microsoft.Extensions.Logging.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Extensions.Logging.Abstractions\lib\netstandard2.0\Microsoft.Extensions.Logging.Abstractions.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Azure.WebJobs.Extensions.Http\lib\netstandard2.0\Microsoft.Azure.WebJobs.Extensions.Http.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Extensions.DependencyInjection\lib\netstandard2.0\Microsoft.Extensions.DependencyInjection.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Extensions.DependencyInjection.Abstractions\lib\netstandard2.0\Microsoft.Extensions.DependencyInjection.Abstractions.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.AspNetCore.Http\lib\netstandard2.0\Microsoft.AspNetCore.Http.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.AspNetCore.Http.Abstractions\lib\netstandard2.0\Microsoft.AspNetCore.Http.Abstractions.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.AspNetCore.Http.Features\lib\netstandard2.0\Microsoft.AspNetCore.Http.Features.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.AspNetCore.Mvc.Core\lib\netstandard2.0\Microsoft.AspNetCore.Mvc.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.AspNetCore.Mvc.Abstractions\lib\netstandard2.0\Microsoft.AspNetCore.Mvc.Abstractions.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\LayoutEngine.dll"
//#nowarn "3242"
//#nowarn "52"
//#nowarn "1182"
//#nowarn "1178"
/// Root namespace for all code
//#define FSharpStation1566972573107
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
    //#define NOFRAMEWORK --noframework
    
    #if NETSTANDARD20
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Core\lib\netstandard1.6\FSharp.Core.dll"
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
    
    #if WEBSHARPER
    
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
            
            let [< Inline "new Date(0).getTime()" >] Utc1970_01_01                 = System.DateTime(1970,1,1,0,0,0,System.DateTimeKind.Utc)
            let [< Inline "$d"                    >] date2Long (d:System.DateTime) = d.Subtract(Utc1970_01_01).Ticks / 10000L
            let [< Inline "$l"                    >] long2Date (l:int64          ) = Utc1970_01_01.Add(System.TimeSpan(l * 10000L) )
            
            
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
            
            
            (* issues with websharper Type not found in JavaScript compilation: System.Collections.Generic.IDictionary`2
            module IDict =
            #if WEBSHARPER
                [< Inline >]
            #endif
                let inline tryGetValue key (dict:System.Collections.Generic.IDictionary<_, _>) =
                    let mutable res = Unchecked.defaultof<_>
                    if dict.TryGetValue(key, &res)
                    then Some res 
                    else None
                let add          key v (dict:System.Collections.Generic.IDictionary<_, _>) = if dict.ContainsKey key then      dict.[key] <- v else dict.Add(key, v)
            *)
            module Dict =
                let [<Inline>] inline tryGetValue key (dict:System.Collections.Generic. Dictionary<_, _>) =
                    let mutable res = Unchecked.defaultof<_>
                    if dict.TryGetValue(key, &res)
                    then Some res 
                    else None
                let add          key v (dict:System.Collections.Generic. Dictionary<_, _>) = if dict.ContainsKey key then      dict.[key] <- v else dict.Add(key, v)
            
            module LDict =
                let [<Inline>] inline containsKey  key  dict = (^a : (member ContainsKey : _ -> bool) (dict, key))
                //let inline item         key  dict = (^a : (member get_Item    : _ -> _   ) (dict, key))
                let [<Inline>] inline tryGetValue fitem key  dict =
                    if containsKey key dict then Some (fitem key)
                    else None
            
            
            /// Extensible type for error messages, warnings and exceptions
            type ResultMessage<'M> =
                | NoMsg
                | ErrorMsg  of string
                | Warning   of string
                | Info      of string
                | Message   of 'M
                | ExceptMsg of string * string
                | RMessages of ResultMessage<'M> []
                with 
                override msg.ToString() =
                    match msg with
                    | NoMsg          ->  ""
                    | ErrorMsg  m    ->  m      |> sprintf "Error    : %s"
                    | Warning   m    ->  m      |> sprintf "Warning  : %s"
                    | Info      m    ->  m
                    | Message   m    ->  m      |> sprintf "%O"
                    | ExceptMsg(m,p) -> (m, p) ||> sprintf "Exception: %s, %s"
                    | RMessages ms   ->  ms     |> Seq.filter (function NoMsg -> false |_-> true) |> Seq.map (fun m -> m.ToString()) |> String.concat "\n"
            
            [< AutoOpen >]
            module ResultMessageHelpers =
                let inline errorMsgf fmt = Printf.ksprintf ErrorMsg fmt
                let inline warningf  fmt = Printf.ksprintf Warning  fmt
                let inline infof     fmt = Printf.ksprintf Info     fmt
            
            module ResultMessage =
            
                let inline noMsg    msg = msg |> function NoMsg -> true |_-> false
                let inline exclnoMsg ms = ms |> Seq.filter (noMsg >> not)
                /// converts Messages to other type of ResultMessage
                let rec bindMessage f msg = 
                    match msg with
                    | NoMsg          ->  NoMsg
                    | Message   m    ->  f         m
                    | ErrorMsg  m    ->  ErrorMsg  m
                    | Info      m    ->  Info      m
                    | Warning   m    ->  Warning   m
                    | ExceptMsg(m,p) ->  ExceptMsg(m,p)
                    | RMessages ms   ->  ms     |> Array.map (bindMessage f) |> RMessages
            
                /// a Message is converted to ErrorMsg
                let freeMessageF f msg = msg |> bindMessage f
                /// a Message is converted to ErrorMsg
                let freeMessage    msg = msg |> freeMessageF (sprintf "%O" >> ErrorMsg)
                /// a Message is converted to Warning
                let freeMessageW   msg = msg |> freeMessageF (sprintf "%O" >> Warning )
                /// a Message is converted to Info
                let freeMessageI   msg = msg |> freeMessageF (sprintf "%O" >> Info    )
            
                let rec isInfoF f msg =
                    match msg with
                    | Info      _    ->  true
                    | Message   m    ->  f m
                    | RMessages ms   ->  ms |> exclnoMsg |> Seq.forall (isInfoF f)
                    | _              ->  false
                /// a Message is not considered Info
                let isInfo  msg = msg |> isInfoF (fun _ -> false)
                /// a Message is considered Info
                let isInfoI msg = msg |> isInfoF (fun _ -> true )
            
                let rec isWarningOrInfoF f msg =
                    match msg with
                    | Warning   _    ->  true
                    | Message   m    ->  f m
                    | RMessages ms   ->  ms |> exclnoMsg |> Seq.forall (fun m -> isWarningOrInfoF f m || isInfoF f m)
                    | _              ->  false
                /// a Message is not considered a Warning
                let isWarningOrInfo  msg = msg |> isWarningOrInfoF (fun _ -> false)
                /// a Message is considered a Warning
                let isWarningOrInfoW msg = msg |> isWarningOrInfoF (fun _ -> true )
            
                let rec isFatalF f msg =
                    match msg with
                    | NoMsg
                    | Info      _    
                    | Warning   _    ->  false
                    | Message   m    ->  f m
                    | RMessages ms   ->  ms |> Seq.exists (isFatalF f)
                    | _              ->  true
                    //|>! printfn "%A = %A" msg
                /// a Message is considered fatal
                let isFatal  msg = msg |> isFatalF (fun _ -> true )
                /// a Message is not considered fatal
                let isFatalW msg = msg |> isFatalF (fun _ -> false)
            
                let rec countF f msg =
                    match msg with
                    | NoMsg          ->  0, 0, 0
                    | Info      _    ->  0, 0, 1
                    | Warning   _    ->  0, 1, 0
                    | Message   m    ->  f m
                    | RMessages ms   ->  ms |> exclnoMsg |> Seq.map (countF f) |> Seq.fold (fun (f, w, i) (fm, wm, im) -> f + fm, w + wm, i + im) (0, 0, 0)
                    | _              ->  1, 0, 0
            
                /// a Message is considered an error
                let count  msg = msg |> countF (fun _ -> 1, 0, 0)
                /// a Message is considered a Warning
                let countW msg = msg |> countF (fun _ -> 0, 1, 0)
                /// a Message is considered Info
                let countI msg = msg |> countF (fun _ -> 0, 0, 1)
                
                let addMsg a b =
                    match a, b with
                    | NoMsg        , c
                    | c            , NoMsg         ->  c
                    | RMessages mas, RMessages mbs ->  Array.append    mas      mbs   |> RMessages
                    |           ma , RMessages mbs ->  Array.append [| ma |]    mbs   |> RMessages
                    | RMessages mas,           mb  ->  Array.append    mas   [| mb |] |> RMessages
                    |           ma ,           mb  ->               [| ma   ;   mb |] |> RMessages
            
                let reduceMsgs ms = (NoMsg, ms) ||> Seq.fold addMsg
            
                let summaryF f msg =
                    match countF f msg with
                    | 0, 0, _
                    | 1, 0, 0
                    | 0, 1, 0 -> ""
                    | e, 0, _ -> sprintf "Errors   : %d\n" e
                    | 0, w, _ -> sprintf "Warnings : %d\n" w
                    | e, w, _ -> sprintf "Errors   : %d, Warnings: %d\n" e w
            
                /// returns a string with a count of errors and warnings, if more than one
                let summarizedF f msg = [ msg.ToString() ; summaryF f msg ] |> Seq.filter ((<>) "") |> String.concat "\n"
                /// a Message is considered an error
                let summarized  msg = msg |> summarizedF (fun _ -> 1, 0, 0)
                /// a Message is considered a Warning
                let summarizedW msg = msg |> summarizedF (fun _ -> 0, 1, 0)
                /// a Message is considered Info
                let summarizedI msg = msg |> summarizedF (fun _ -> 0, 0, 1)
                
            module Memoize =
            
                /// returns 3 functions:
                ///    checkO  : ('p->'v option) 
                ///    getOrAdd: ('p->('p->'v)->'v) 
                ///    clear   : (unit->unit)
                [<Inline>]
                let getStoreWithDict (cache: System.Collections.Generic.Dictionary<_, _>) =
                    let checkO v     = let mutable res = Unchecked.defaultof<_>
                                       let ok          = cache.TryGetValue(v, &res)
                                       if  ok then Some res else None
                    let store  v res = cache.[v] <- res
                                       res
                    let getOrAdd p f = checkO p |> Option.defaultWith (fun () -> f p |> store p )
                    (checkO, getOrAdd), cache.Clear
            
                /// creates a Dictionary to store memoized values
                /// returns 3 functions:
                ///    checkO  : ('p->'v option) 
                ///    getOrAdd: ('p->('p->'v)->'v) 
                ///    clear   : (unit->unit)
                [<Inline>]
                let getStore() = getStoreWithDict (System.Collections.Generic.Dictionary<_, _>() )
            
                /// Memoizes function f using the provided cache
                /// getCache() returns 1 function:
                ///    getOrAdd: ('p->('p->'v)->'v) 
                [< Inline >]
                let memoizeStore (getOrAdd:('key -> ('key -> 'value) -> 'value) ) f =
                    fun p -> getOrAdd p f
            
            
                /// Memoizes the function f using a Dictionary
                /// Returns the memoized function and a clear() function
                /// The dictionary can be reset using the clear() function
                [< Inline >]
                let memoizeResetable f =
                    let (check, getOrAdd), clear = getStore()
                    let memoF = memoizeStore getOrAdd f
                    memoF, clear
            
                /// Memoizes the function f using the provided Dictionary
                [<Inline>]
                let memoizeWithDict dict f =
                    let (check, getOrAdd), clear = getStoreWithDict dict
                    let memoF = memoizeStore getOrAdd f
                    memoF
            
                /// Memoizes the function f and returns Dictionary
                [<Inline>]
                let memoizeDict f =
                    let dict = System.Collections.Generic.Dictionary<_, _>() 
                    let (check, getOrAdd), clear = getStoreWithDict dict
                    let memoF = memoizeStore getOrAdd f
                    memoF, dict
            
                /// Memoizes the function f using a Dictionary
                [<Inline>]
                let memoize f = memoizeResetable f |> fst
            
            
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
                
                
                module Result =
                    open Result
                
                    let errorf fmt = Printf.ksprintf Error fmt
                
                    let rtn                          = Ok
                    let join                       r = Result.bind id r
                    let flatten                    r = Result.bind id r
                    let toOption                   r = r   |> function Ok v -> Some v |       _ -> None
                    let defaultWith              f r = r   |> function Ok v ->      v | Error e -> f e
                    let defaultValue             d r = r   |> function Ok v ->      v | Error _ -> d
                    let failIfTrue               m v = if     v then m |> Error  else Ok () 
                    let failIfFalse              m v = if not v then m |> Error  else Ok () 
                    let iter                  fE f r = r   |> map  f |> defaultWith fE                                                 : unit
                    let get                        r = r   |>          defaultWith (string >> failwith)
                    let ofOption              f   vO = vO  |> Option.map Ok           |> Option.defaultWith (f >> Error)
                    let insertO                  vRO = vRO |> Option.map(map Some)    |> Option.defaultWith(fun () -> Ok None)
                    let absorbO               f  vOR = vOR |> bind (ofOption f)
                    let (>>=)                    r f = bind f r
                    let traverseSeq           f   sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                       Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq        sq = traverseSeq id sq
                        
                    
                    type Builder() =
                        member inline this.Return          x       = rtn  x
                        member inline this.ReturnFrom      x       =     (x:Result<_,_>)
                        member        this.Bind           (w , r ) = Result.bind  r w
                        member inline this.Zero           ()       = rtn ()
                        member inline this.Delay           f       = f
                        member inline this.Combine        (a, b)   = bind b a
                        member inline this.Run             f       = Ok () |> bind f
                        member this.TryWith   (body, handler     ) = try body() with e -> handler     e
                        member this.TryFinally(body, compensation) = try body() finally   compensation()
                        member this.Using     (disposable, body  ) = using (disposable:#System.IDisposable) body
                        member this.While(guard, body) =
                            let rec whileLoop guard body =
                                if guard() then body() |> bind (fun () -> whileLoop guard body)
                                else rtn   ()
                            whileLoop guard body
                        member this.For(sequence:seq<_>, body) =
                            this.Using(sequence.GetEnumerator(),fun enum -> 
                                this.While(enum.MoveNext, 
                                    this.Delay(fun () -> body enum.Current)))
                                    
                    let result = Builder()
                    
                    module Operators =
                        let inline (|>>) v f   = map   f v
                        let inline (>>=) v f   = bind  f v
                        let inline (>>>) f g v = f v |>> g
                        let inline (>=>) f g v = f v >>= g
                        let inline rtn   v     = rtn    v
                        let result = result
                
                
                    
                    let freeMessage                r = r   |> function Ok v -> Ok v   | Error e -> ResultMessage.freeMessage e |> Error
                    /// bind version that protects against exceptions
                    let bindP                 f    r = match r with
                                                        | Ok   v -> try   f v
                                                                    with  e -> ExceptMsg (e.Message, e.StackTrace) |> Error
                                                        | Error e ->      e                                        |> Error
                    /// map version that protects against exceptions
                    let inline mapP           f    m = bindP (f >> rtn) m            
                    let iterP                 fE f r = r   |> mapP f |> defaultWith fE                                                 : unit    
                    
                    type BuilderP() =
                        member inline this.Return          x       = rtn  x
                        member inline this.ReturnFrom      x       =     (x:Result<_,_>)
                        member        this.Bind           (w , r ) = Result.bind  r w
                        member inline this.Zero           ()       = rtn ()
                        member inline this.Delay           f       = f
                        member inline this.Combine        (a, b)   = bind b a
                        member inline this.Run             f       = Ok () |> bindP f
                        member this.TryWith   (body, handler     ) = try body() with e -> handler     e
                        member this.TryFinally(body, compensation) = try body() finally   compensation()
                        member this.Using     (disposable, body  ) = using (disposable:#System.IDisposable) body
                        member this.While(guard, body) =
                            let rec whileLoop guard body =
                                if guard() then body() |> bind (fun () -> whileLoop guard body)
                                else rtn   ()
                            whileLoop guard body
                        member this.For(sequence:seq<_>, body) =
                            this.Using(sequence.GetEnumerator(),fun enum -> 
                                this.While(enum.MoveNext, 
                                    this.Delay(fun () -> body enum.Current)))
                                    
                    let resultP = BuilderP()
                    
                    
                /// Based on Nick Palladino's https://github.com/palladin/Eff
                
                [< AutoOpen >]
                module Eff =
                    type Effect  = abstract Extend : (Effect -> Effect) -> Effect
                
                    type Eff<'H, 'a> = Eff of (('a -> Effect) -> Effect) 
                        with  member this.Create = match this with Eff create -> create
                
                    let inline rtn  v : Eff<'H, 'a> = Eff (fun k -> k v)
                    let bind  (f: 'a -> Eff<'H, 'b>) (effA: Eff<'H, 'a>) : Eff<'H, 'b> = 
                                        Eff (fun kb -> 
                                                let (Eff effKa) = effA
                                                effKa (fun a -> 
                                                    let (Eff effKb) = f a
                                                    effKb kb
                                                )
                                            )
                    let inline map   f  m  = bind (f >> rtn) m
                    let inline apply fR vR = fR |> bind (fun f -> map f vR)
                
                    type Done<'a>(v : 'a) =
                        member self.Value = v
                        interface Effect with member self.Extend(_) : Effect = self :> _
                
                    let done'  (v : 'a) : Effect = new Done<'a>(v) :> _ 
                    //let return'(v : 'a) : Eff<'H, 'c> = Eff( fun _ -> done' v )
                    let return' v = Eff( fun _ -> done' v )
                
                    let run<'H, 'a> (eff: Eff<'H, 'a>) : 'a =
                        match eff.Create done' with
                        | :? Done<'a> as done' -> done'.Value
                        | v                    -> failwithf "Unhandled effect %A" v
                
                    let inline runResult<'H, 'a> eff = 
                        try run<'H, 'a> eff |> Ok
                        with e -> Error(e.ToString())
                
                
                    let inline ( <*> ) f v   = apply f v
                    let inline ( |>> ) v f   = map   f v
                    let inline ( >>= ) v f   = bind  f v
                    let inline ( >-> ) f g v = f v |>> g
                    let inline ( >=> ) f g v = f v >>= g
                    
                    #if TEE
                    let inline ( |>>!) v f   = map   (tee f                       ) v
                    let inline ( >>=!) v f   = bind  (fun w -> f w |>> fun () -> w) v
                    #endif
                    
                    let inline join m = m |> bind id
                    
                    let traverseSeq            f     sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                          Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |>> Seq.ofList
                    let inline sequenceSeq           sq = traverseSeq id sq
                    
                    let inline insertO    vvO               = vvO   |> Option.map(map Some) |> Option.defaultWith(fun () -> rtn None)
                    let inline insertR   (vvR:Result<_,_>)  = vvR   |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                    let inline insertFst (fst, vEf)         = vEf   |> map (fun v -> fst, v)
                    let inline insertSnd (vEf, snd)         = vEf   |> map (fun v -> v, snd)
                    
                    let inline bindO (f:'a->Eff<'H,'b>) (ef:Eff<'H,'a option>) = bind (Option.map f >> insertO) ef
                    let rec whileLoop cond fEf =
                        if   cond () 
                        then fEf  () |> bind (fun () -> whileLoop cond fEf)
                        else rtn  ()
                    
                    
                    type EffBuilder<'H>() =
                        member __.ReturnFrom            vEf        : Eff<'H, _   > =           vEf
                        member __.Return                v          : Eff<'H, _   > = rtn       v  
                        member __.Zero                  ()         : Eff<'H, unit> = rtn       () 
                        member __.Bind                 (vEf,  fEf) : Eff<'H, _   > = bind fEf  vEf
                        member __.Combine              (vEf,  fEf) : Eff<'H, _   > = bind fEf  vEf
                        member __.Delay                       fEf                  = fEf
                        member __.Run                         fEf  : Eff<'H, _   > = rtn () |> bind fEf
                        member this.TryWith   (body, handler     ) : Eff<'H,_> = Eff(fun k -> try body() |> function Eff(f) -> f k with e -> handler e |> function Eff(f) -> f k)
                        member this.TryFinally(body, compensation) : Eff<'H,_> = (try body() with e -> compensation() ; reraise() ) |>> compensation
                        member this.Using     (disposable, body  ) : Eff<'H,_> = //wrap(fun r -> using (disposable:#System.IDisposable) (fun u -> body u |> getFun <| r) )
                                    let body' = fun () -> body disposable
                                    this.TryFinally(body', fun () -> if disposable :> obj <> null then (disposable:#System.IDisposable).Dispose() )
                        member __.While   (guard , fEf) : Eff<'H, unit> = whileLoop guard fEf 
                        member th.For  (s: 'a seq, fEf) : Eff<'H, unit> = th.Using(s.GetEnumerator (), fun enum ->
                                                                                        th.While(enum.MoveNext,
                                                                                            th.Delay(fun () -> fEf enum.Current)))
                    
                    let eff<'H> = EffBuilder<'H>()
                    
                    //type EffBuilder<'H>() =
                    //    member self.Zero      (                 ) = rtn ()
                    //    member self.Return    (v   :         'A ) = rtn v
                    //    member self.ReturnFrom eff                = eff
                    //    member self.Bind      (eff, f           ) = bind f eff
                    //    member self.Combine   (first, second    ) = bind (fun () -> second) first
                    //    member __.Combine   (vEf,  fEf) : Eff<'H  , 'm> = bind fEf  vEf
                    //    member self.Delay (f : unit -> Eff<'U, 'A>) : Eff<'U, 'A> =  Eff (fun k -> let (Eff cont) = f () in cont k)
                    ////    member inline __.Delay       f                  = f
                    //    member __.While(guard, body) =
                    //        let rec whileLoop guard body =
                    //            if guard() then body() |> bind (fun () -> whileLoop guard body)
                    //            else rtn   ()
                    //        whileLoop guard body
                    //    member this.TryWith   (body, handler     ) = Eff(fun k -> try body() |> function Eff(f) -> f k with e -> handler e |> function Eff(f) -> f k)
                    //    member this.TryFinally(body, compensation) = Eff(fun k -> try body() |> function Eff(f) -> f k finally   compensation()           )
                    //    member this.Using     (disposable, body  ) = //wrap(fun r -> using (disposable:#System.IDisposable) (fun u -> body u |> getFun <| r) )
                    //                let body' = fun () -> body disposable
                    //                this.TryFinally(body', fun () -> if disposable :> obj <> null then (disposable:#System.IDisposable).Dispose() )
                    //    member this.For(sequence:seq<_>, body) =
                    //        this.Using(sequence.GetEnumerator(),fun enum -> 
                    //            this.While(enum.MoveNext, 
                    //                fun () -> this.Delay(fun () -> body enum.Current)))
                    //
                    //
                    //let eff<'H> = new EffBuilder<'H>()
                    
                    //type EA<'H, 'a, 'b> = 'a -> Eff<'H, 'b>
                    /// Equal to (|>) 
                    //let (>|>) (ea:EA<_,_,_>) f : EA<_,_,_> = ea |> f
                    /// Equal to (>>)
                    //let (>>>) = (>>)
                    
                    module EA =
                        let tee (f: 'a -> Eff<'H, unit>) : 'a -> Eff<'H, 'a> = (fun v -> f v |> map (fun () -> v) )
                    
                    //    let mapOutput  f (ea: EA<_,_, _>) : EA<_,_,          _   > = ea >> (bind (f >> rtn) )
                    //    let bindOutput(f: EA<_,_, _>) (ea: EA<_,_, _>) : EA<_,_, _> = ea >> (bind  f  )
                    //    let mapBoth    f (ea: EA<_,_, _>) : EA<_,_,          _   > = fun i -> i |> mapOutput (f i) ea
                    //    let bindBoth   f (ea: EA<_,_, _>) : EA<_,_,          _   > = mapBoth f  ea |> bindOutput id
                    //
                    //    let mapO         (ea: EA<_,_, _>) : EA<_,_,          _   > = Option.map ea >> insertO
                    //
                    //    let mapFst     f (a, b) = (f a,   b)
                    //    let mapSnd     f (a, b) = (  a, f b)
                    //
                    //    let bindFst    (f:EA<_,_,_>) (a, b) = eff {
                    //        let! fa = f a
                    //        return (fa, b)
                    //    }
                    //
                    //    let bindSnd    (f:EA<_,_,_>) (a, b) = eff {
                    //        let! fb = f b
                    //        return (a, fb)
                    //    }
                    //
                    //    let lift    f : EA<_,_,_> = f >> rtn
                    //    let pairWith v ea : EA<_,_,_> =
                    //        ea
                    //        >-> fun fst -> fst, v
                    //
                    //    let getResult ea:EA<_,_,_> = ea >-> Ok
                    
                    
                    module Reader =
                        type Reader< 'E> = interface end // this acts as a reminder to add a handler for the Effect
                        type Reader2<'E> = interface end // this acts as a reminder to add a handler for the Effect
                        type Reader3<'E> = interface end // this acts as a reminder to add a handler for the Effect
                        type Reader4<'E> = interface end // this acts as a reminder to add a handler for the Effect
                        type Reader5<'E> = interface end // this acts as a reminder to add a handler for the Effect
                    
                        type Ask<'E>(k : 'E -> Effect) =
                            member self.K = k
                            interface Effect with
                                member self.Extend extension : Effect = new Ask<'E>(k >> extension) :> _
                    
                        let ask () : Eff<'H, 'E> when 'H :> Reader< 'E> = Eff (fun k -> Ask(k) :> _ )
                        let ask2() : Eff<'H, 'E> when 'H :> Reader2<'E> = Eff (fun k -> Ask(k) :> _ )
                        let ask3() : Eff<'H, 'E> when 'H :> Reader3<'E> = Eff (fun k -> Ask(k) :> _ )
                        let ask4() : Eff<'H, 'E> when 'H :> Reader4<'E> = Eff (fun k -> Ask(k) :> _ )
                        let ask5() : Eff<'H, 'E> when 'H :> Reader5<'E> = Eff (fun k -> Ask(k) :> _ )
                    
                        let readerHandler0<'E, 'H, 'a> (env:'E) (eff: Eff<'H, 'a>) : Eff<'H, 'a> = 
                            let rec loop (exitK: 'a -> Effect) : Effect -> Effect = function
                                | :? Done<'a> as done' -> done'.Value        |>      exitK
                                | :? Ask<'E>  as ask   -> ask.K env          |> loop exitK
                                | effect               -> effect.Extend        (loop exitK)
                            Eff (fun exitK             -> eff.Create done'   |> loop exitK)
                    
                        let readerHandler< 'E, 'H, 'a when 'H :> Reader< 'E>> (env:'E) (eff: Eff<'H, 'a>) : Eff<'H, 'a> = readerHandler0<'E, 'H, 'a> env eff
                        let readerHandler2<'E, 'H, 'a when 'H :> Reader2<'E>> (env:'E) (eff: Eff<'H, 'a>) : Eff<'H, 'a> = readerHandler0<'E, 'H, 'a> env eff
                        let readerHandler3<'E, 'H, 'a when 'H :> Reader3<'E>> (env:'E) (eff: Eff<'H, 'a>) : Eff<'H, 'a> = readerHandler0<'E, 'H, 'a> env eff
                        let readerHandler4<'E, 'H, 'a when 'H :> Reader4<'E>> (env:'E) (eff: Eff<'H, 'a>) : Eff<'H, 'a> = readerHandler0<'E, 'H, 'a> env eff
                        let readerHandler5<'E, 'H, 'a when 'H :> Reader5<'E>> (env:'E) (eff: Eff<'H, 'a>) : Eff<'H, 'a> = readerHandler0<'E, 'H, 'a> env eff
                    
                        let readerFun f = ask() |> map f 
                    module Log = 
                        type Log< 'L> = interface end  // this acts as a reminder to add a handler for the Log Effects
                        type Log2<'L> = interface end  // this acts as a reminder to add a handler for the Log Effects
                        type Log3<'L> = interface end  // this acts as a reminder to add a handler for the Log Effects
                    
                        type LogEntry<'L>(v : 'L, k : unit -> Effect) =
                            member self.Value = v
                            member self.K     = k
                            interface Effect with
                                member self.Extend extension  : Effect = new LogEntry<'L>(v, k >> extension) :> _
                    
                        let log (s:'L)  : Eff<'H, unit> when 'H :> #Log< 'L> = Eff (fun k -> LogEntry(s, k) :> _ )
                        let logf fmt = Printf.ksprintf log fmt
                        let log2 (s:'L) : Eff<'H, unit> when 'H :> #Log2<'L> = Eff (fun k -> LogEntry(s, k) :> _ )
                        let log3 (s:'L) : Eff<'H, unit> when 'H :> #Log3<'L> = Eff (fun k -> LogEntry(s, k) :> _ )
                    
                        let pureLogHandler0<'L, 'H, 'a> (eff: Eff<'H, 'a>) : Eff<'H, 'a * list<'L>> = 
                            let rec loop (exitK:('a * list<'L>) -> Effect) (ls: list<'L>) : Effect -> Effect = function
                                | :? Done<    'a> as done' -> (done'.Value, ls)  |>       exitK
                                | :? LogEntry<'L> as log   -> log.K ()           |>  loop exitK (log.Value :: ls)  
                                | effect                   -> effect.Extend         (loop exitK ls               )
                            Eff (fun exitK                 -> eff.Create done'   |>  loop exitK []               )
                    
                        let consoleLogHandler0<'L, 'H, 'a> (eff: Eff<'H, 'a>) : Eff<'H, 'a> =
                            let rec loop (exitK: 'a -> Effect) : Effect -> Effect = function
                                | :? Done<    'a> as done' -> done'.Value        |>      exitK
                                | :? LogEntry<'L> as log   -> printfn "Log: %A" log.Value
                                                              log.K ()           |> loop exitK
                                | effect                   -> effect.Extend        (loop exitK)
                            Eff (fun exitK                 -> eff.Create done'   |> loop exitK)
                    
                        let loggerLogHandler0<'L, 'H, 'a> logger (eff: Eff<'H, 'a>) : Eff<'H, 'a> =
                            let rec loop (exitK: 'a -> Effect) : Effect -> Effect = function
                                | :? Done<    'a> as done' -> done'.Value        |>      exitK
                                | :? LogEntry<'L> as log   -> logger log.Value
                                                              log.K ()           |> loop exitK
                                | effect                   -> effect.Extend        (loop exitK)
                            Eff (fun exitK                 -> eff.Create done'   |> loop exitK)
                    
                        let pureLogHandler< 'L, 'H, 'a when 'H :> Log< 'L>> (eff: Eff<'H, 'a>) : Eff<'H, 'a * list<'L>> = pureLogHandler0<'L, 'H, 'a> eff
                        let pureLogHandler2<'L, 'H, 'a when 'H :> Log2<'L>> (eff: Eff<'H, 'a>) : Eff<'H, 'a * list<'L>> = pureLogHandler0<'L, 'H, 'a> eff
                        let pureLogHandler3<'L, 'H, 'a when 'H :> Log3<'L>> (eff: Eff<'H, 'a>) : Eff<'H, 'a * list<'L>> = pureLogHandler0<'L, 'H, 'a> eff
                    
                    
                        let consoleLogHandler< 'L, 'H, 'a when 'H :> Log< 'L>> (eff: Eff<'H, 'a>) : Eff<'H, 'a> = consoleLogHandler0<'L, 'H, 'a> eff
                        let consoleLogHandler2<'L, 'H, 'a when 'H :> Log2<'L>> (eff: Eff<'H, 'a>) : Eff<'H, 'a> = consoleLogHandler0<'L, 'H, 'a> eff
                        let consoleLogHandler3<'L, 'H, 'a when 'H :> Log3<'L>> (eff: Eff<'H, 'a>) : Eff<'H, 'a> = consoleLogHandler0<'L, 'H, 'a> eff
                    
                        let loggerLogHandler< 'L, 'H, 'a when 'H :> Log< 'L>> logger (eff: Eff<'H, 'a>) : Eff<'H, 'a> = loggerLogHandler0<'L, 'H, 'a> logger eff
                        let loggerLogHandler2<'L, 'H, 'a when 'H :> Log2<'L>> logger (eff: Eff<'H, 'a>) : Eff<'H, 'a> = loggerLogHandler0<'L, 'H, 'a> logger eff
                        let loggerLogHandler3<'L, 'H, 'a when 'H :> Log3<'L>> logger (eff: Eff<'H, 'a>) : Eff<'H, 'a> = loggerLogHandler0<'L, 'H, 'a> logger eff
                    
                    module Rsl = 
                    
                    
                        type Rsl<'M> = interface end
                        
                        type IRsl<'M> = abstract Value : 'M
                    
                        type Fail<'a,'M>(v : 'M, k : 'a -> Effect) =
                            member self.Value = v
                            member self.K     = k
                            interface Effect   with member __.Extend extension : Effect = new Fail<'a,'M>(v, k >> extension) :> _
                            interface IRsl<'M> with member __.Value = v
                    
                        let fail (s:'M) : Eff<'H, _> when 'H :> #Rsl<'M> = Eff (fun k -> new Fail<_,_>(s, k) :> _)
                        let failf fmt = Printf.ksprintf fail fmt
                        let inline ofResult (res:Result<'a,'b>) : Eff<'c,'a> = eff {
                            match res with
                            | Ok    v   ->  return v
                            | Error msg ->  let! m = fail msg
                                            return failwith "this code should be unreachable"
                        }
                        
                        let rslHandler<'U, 'M, 'A when 'U :> Rsl<'M>> (eff: Eff<'U, 'A>) : Eff<'U, _> = 
                            let rec loop (exitK:(Result<'A,'M>) -> Effect) : Effect -> Effect = function
                                | :? Done<    'A> as done' -> Ok    done'.Value |>       exitK
                                | :? IRsl<    'M> as fail  -> Error fail .Value |>       exitK
                                | effect                   -> effect.Extend        (loop exitK)
                            Eff (fun exitK                 -> eff.Create done'  |>  loop exitK)
                    
                        let inline getResult   v                = v     |> rslHandler
                        let inline absorbR     vvEf             = vvEf  |> bind ofResult
                        let inline absorbO   f vOEf             = vOEf  |> map (Result.ofOption  f) |> absorbR
                    
                    module Asy = 
                        type Asy = interface end // this acts as a reminder to add a handler for the Effect
                    
                        type AsynG =
                            abstract RunSync      : unit               -> Effect
                            abstract RunAsync<'a> : (Effect -> Effect) -> Effect
                    
                        [< Inline "console.log('RunSynch Not implemented in JavaSacript')" >]
                        let runSynch v = Async.RunSynchronously v
                    
                        type Asyn<'v>(v : Async<'v>, k : ('v -> Effect) ) =
                            member __.Value = v
                            member __.K     = k
                            interface Effect with member __.Extend   extension = new Asyn<_>(v, k >> extension) :> _
                            interface AsynG  with 
                                member __.RunSync  ()        = runSynch v |> k
                                member __.RunAsync<'a> exitK = done' (v |> Async.bind (fun v -> k v |> exitK :?> Done<Async<'a>> |> fun don -> don.Value ) )
                    
                        let inline ofAsync (v:Async<'a>) : Eff<'H, 'a> when 'H :> Asy= Eff (fun k -> new Asyn<'a>(v, k) :> _)
                    
                        /// This handler uses RunSynchronously to resolve Asyncs
                        let syncHandler<'H, 'a when 'H :> Asy> (eff: Eff<'H, 'a>) : Eff<'H, 'a> =
                            let rec loop (exitK:'a -> Effect) : Effect -> Effect = function
                                | :? Done<'a> as done' -> done'.Value        |>      exitK
                                | :? AsynG    as asy   -> asy.RunSync()      |> loop exitK
                                | effect               -> effect.Extend        (loop exitK)
                            Eff (fun exitK             -> eff.Create done'   |> loop exitK)
                    
                        /// this should be the last handler before Eff.run
                        let asyncHandler0<'H, 'a when 'H :> Asy> (eff: Eff<'H, 'a>) : Eff<'H, Async<'a>> = 
                            let rec loop (exitK:(Async<'a>) -> Effect) : Effect -> Effect = function
                                | :? Done<'a> as done' -> done'.Value |> async.Return |>      exitK
                                | :? AsynG    as asy   -> asy.RunAsync<'a>              (loop exitK)
                                | effect               -> effect.Extend                 (loop exitK)
                            Eff (fun exitK             -> eff.Create done'            |> loop exitK)
                    
                        let asyncHandler<'H, 'a when 'H :> Asy> (eff: Eff<'H, 'a>) : Eff<'H, Async<'a>> = 
                            Async.rtn () 
                            |>  ofAsync 
                            >>= fun () -> eff 
                            |>  asyncHandler0
                    
                type AsyncResult<'v, 'm> = Async<Result<'v, 'm>>
                
                /// A computation expression to build an Async<Result<'ok, 'error>> value
                module AsyncResult =
                    let mapError fE v  = v |> Async.map (Result.mapError fE)
                    let freeMessage v  = v |> Async.map  Result.freeMessage
                
                    let rtn        v   = async.Return(Ok v  )
                    let rtnR       vR  = async.Return    vR
                    let iterS fE f vRA = Async.iterS (Result.iter fE f) vRA
                    let iterA fE f vRA = Async.iterA (Result.iter fE f) vRA
                    let bind  fRA  vRA = async { 
                        let! vR       = vRA
                        match   vR with
                        | Ok    v -> return! fRA v
                        | Error m -> return  Error m 
                    }
                    let bindP (fRA:'a -> Async<Result<'b,ResultMessage<'c>>>)  (vRA: Async<Result<'a,ResultMessage<'c>>>) : Async<Result<'b,ResultMessage<'c>>>= async {
                        try 
                            let!  vR = vRA
                            match vR with
                            | Ok    v -> return! fRA   v
                            | Error m -> return  Error m
                        with  e -> return  ExceptMsg (e.Message, e.StackTrace) |> Error
                    }
                    let inline map  f m = bind  (f >> rtn) m            
                    let inline mapP f m = bindP (f >> rtn) m            
                    let rec whileLoop cond fRA =
                        if   cond () 
                        then fRA  () |> bind (fun () -> whileLoop cond fRA)
                        else rtn  ()
                    let (>>=)                              v f = bind f v
                    let rec    traverseSeq     f            sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                                 Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq                  sq = traverseSeq id sq
                    let insertO   vRAO                         = vRAO |> Option.map(map Some) |> Option.defaultWith(fun () -> rtn None)
                    let insertR ( vRAR:Result<_,_>)            = vRAR |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                    let absorbR   vRRA                         = vRRA |> Async.map  Result.join
                    let absorbO f vORA                         = vORA |> Async.map (Result.absorbO  f)
                
                type AsyncResultBuilder() =
                    member __.ReturnFrom vRA        : Async<Result<'v  , 'm>> =                       vRA
                    member __.ReturnFrom vR         : Async<Result<'v  , 'm>> = AsyncResult.rtnR      vR
                    member __.Return     v          : Async<Result<'v  , 'm>> = AsyncResult.rtn       v  
                    member __.Zero       ()         : Async<Result<unit, 'm>> = AsyncResult.rtn       () 
                    member __.Bind      (vRA,  fRA) : Async<Result<'b  , 'm>> = AsyncResult.bind fRA  vRA
                    member __.Bind      (vR ,  fRA) : Async<Result<'b  , 'm>> = AsyncResult.bind fRA (vR  |> AsyncResult.rtnR)
                    member __.Combine   (vRA,  fRA) : Async<Result<'b  , 'm>> = AsyncResult.bind fRA  vRA
                    member __.Combine   (vR ,  fRA) : Async<Result<'b  , 'm>> = AsyncResult.bind fRA (vR  |> AsyncResult.rtnR)
                    member __.Delay            fRA                            = fRA
                    member __.Run              fRA                            = AsyncResult.rtn () |> AsyncResult.bind fRA
                    member __.TryWith   (fRA , hnd) : Async<Result<'a  , 'm>> = async { try return! fRA() with e -> return! hnd e  }
                    member __.TryFinally(fRA , fn ) : Async<Result<'a  , 'm>> = async { try return! fRA() finally   fn  () }
                    member __.Using(resource , fRA) : Async<Result<'a  , 'm>> = async.Using(resource,       fRA)
                    member __.While   (guard , fRA) : Async<Result<unit, 'a>> = AsyncResult.whileLoop guard fRA 
                    member th.For  (s: 'a seq, fRA) : Async<Result<unit, 'b>> = th.Using(s.GetEnumerator (), fun enum ->
                                                                                    th.While(enum.MoveNext,
                                                                                      th.Delay(fun () -> fRA enum.Current)))
                let asyncResult = AsyncResultBuilder()
                
                type AsyncResultBuilderP() =
                    member __.ReturnFrom vRA        : Async<Result<'v  , ResultMessage<_>>> =                       vRA
                    member __.ReturnFrom vR         : Async<Result<'v  , ResultMessage<_>>> = AsyncResult.rtnR      vR
                    member __.Return     v          : Async<Result<'v  , ResultMessage<_>>> = AsyncResult.rtn       v  
                    member __.Zero       ()         : Async<Result<unit, ResultMessage<_>>> = AsyncResult.rtn       () 
                    member __.Bind      (vRA,  fRA) : Async<Result<'b  , ResultMessage<_>>> = AsyncResult.bindP fRA  vRA
                    member __.Bind      (vR ,  fRA) : Async<Result<'b  , ResultMessage<_>>> = AsyncResult.bindP fRA (vR  |> AsyncResult.rtnR)
                    member __.Combine   (vRA,  fRA) : Async<Result<'b  , ResultMessage<_>>> = AsyncResult.bindP fRA  vRA
                    member __.Combine   (vR ,  fRA) : Async<Result<'b  , ResultMessage<_>>> = AsyncResult.bindP fRA (vR  |> AsyncResult.rtnR)
                    member __.Delay            fRA                                          = fRA
                    member __.Run              fRA                                          = AsyncResult.rtn () |> AsyncResult.bindP fRA
                    member __.TryWith   (fRA , hnd) : Async<Result<'a  , ResultMessage<_>>> = async { return! try fRA() with e -> hnd e  }
                    member __.TryFinally(fRA , fn ) : Async<Result<'a  , ResultMessage<_>>> = async { return! try fRA() finally   fn  () }
                    member __.Using(resource , fRA) : Async<Result<'a  , ResultMessage<_>>> = async.Using(resource,       fRA)
                    member __.While   (guard , fRA) : Async<Result<unit, ResultMessage<_>>> = AsyncResult.whileLoop guard fRA 
                    member th.For  (s: 'a seq, fRA) : Async<Result<unit, ResultMessage<_>>> = th.Using(s.GetEnumerator (), fun enum ->
                                                                                              th.While(enum.MoveNext,
                                                                                                th.Delay(fun () -> fRA enum.Current)))
                let asyncResultP = AsyncResultBuilderP()
                
                [<AutoOpen>]
                module Extensions =      
                    // Having Async<_> members as extensions gives them lower priority in
                    // overload resolution between Async<_> and Async<Result<_,_>>.
                    type AsyncResultBuilder with
                      member __.ReturnFrom (vA: Async<'a>     ) : Async<Result<'a, 'b>> =                       Async.map Ok vA
                      member __.Bind       (vA: Async<'a>, fRA) : Async<Result<'b, 'c>> = AsyncResult.bind fRA (Async.map Ok vA)
                      member __.Combine    (vA: Async<'a>, fRA) : Async<Result<'b, 'c>> = AsyncResult.bind fRA (Async.map Ok vA)
                
                    type AsyncResultBuilderP with
                      member __.ReturnFrom (vA: Async<'a>     ) : Async<Result<'a, ResultMessage<_>>> =                        Async.map Ok vA
                      member __.Bind       (vA: Async<'a>, fRA) : Async<Result<'b, ResultMessage<_>>> = AsyncResult.bindP  fRA (Async.map Ok vA)
                      member __.Combine    (vA: Async<'a>, fRA) : Async<Result<'b, ResultMessage<_>>> = AsyncResult.bindP fRA (Async.map Ok vA)
                
                
                
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
                
                let thousands n =
                    let v = n.ToString()
                    let r = v.Length % 3 
                    let s = if r = 0 then 3 else r
                    [   yield v.[0.. s - 1]
                        for i in 0..(v.Length - s)/ 3 - 1 do
                            yield v.[i * 3 + s .. i * 3 + s + 2]
                    ] |> String.concat ","
            
            let mapFst     (f: 'a->'c) (a:'a, b:'b) = (f a,   b)
            let mapSnd     (f: 'b->'c) (a:'a, b:'b) = (  a, f b)
            
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
                
            module Serializer =
                open System
            
                type JsonIntermediate = {
                    tryFloat    : unit   ->  float                option
                    tryInt      : unit   ->  int64                option
                    tryString   : unit   ->  string               option
                    tryBool     : unit   ->  bool                 option
                    tryArray    : unit   -> (JsonIntermediate []) option
                    tryField    : string ->  JsonIntermediate     option
                    isObject    : unit   ->  bool
                    isNull      : unit   ->  bool
                    toString    : unit   ->  string  
                }
            
                type SerS<'T> = ('T                 -> string   )        //      Serialization function
                type SerD<'T> = (JsonIntermediate   -> 'T option)        //    deSerialization function
                type Ser< 'T> = SerS<'T> * SerD<'T>                      // both Serialization functions
            
                let serialize (ser: Ser<_>) v = fst ser v
                let (|Field|_|) field j = j.tryField field
            
                let [< Inline >] inline sprintU  v = sprintf "%A"       v
                let [< Inline >] inline toString v = v.ToString()
                let [< Inline >] inline sprintQ  v = sprintf "\"%A\""   v
                let              inline sprintA  v = String.concat ", " v |> sprintf "[%s]"
            
                let toJsonString (v:string) =
                    seq {
                        yield '"'
                        if String.IsNullOrEmpty v |> not then
                            for i = 0 to v.Length - 1 do
                                let c = v.[i]
                                let ci = int c
                                if ci >= 0 && ci <= 7 || ci = 11 || ci >= 14 && ci <= 31 then
                                    yield! sprintf "\\u%04x" ci
                                else 
                                match c with
                                | '\b' -> yield! "\\b"
                                | '\t' -> yield! "\\t"
                                | '\n' -> yield! "\\n"
                                | '\f' -> yield! "\\f"
                                | '\r' -> yield! "\\r"
                                | '"'  -> yield! "\\\""
                                | '\\' -> yield! "\\\\"
                                | _    -> yield c
                        yield '"'
                    } |> Seq.toArray|> String
            
                let serString : Ser<string  > = toJsonString           , (fun j -> j.tryString()                         )
                let serFloat  : Ser<float   > = sprintU                , (fun j -> j.tryFloat ()                         )
                let serInt    : Ser<int     > = sprintU                , (fun j -> j.tryInt   () |> Option.map int       )
                let serInt64  : Ser<int64   > = toString               , (fun j -> j.tryInt   ()                         )
                let serBool   : Ser<bool    > = sprintU                , (fun j -> j.tryBool  ()                         )
                let serDate   : Ser<DateTime> = (date2Long >> toString), (fun j -> j.tryInt   () |> Option.map long2Date )
                [< JavaScript false >]
                let serDate2  : Ser<DateTime> = (fun d -> d.ToFileTimeUtc() |> toString), (fun j -> j.tryInt   () |> Option.map (fun t -> DateTime.FromFileTimeUtc t ) )
                [< JavaScript false >]
                let serDate3  : Ser<DateTime> = 
                    (  fun (d:System.DateTime ) -> d.ToString("u") |> sprintf "%A"                )
                    , (fun (j:JsonIntermediate) -> j.tryString() |> Option.bind ParseO.parseDateO )
            
                let [< Inline >] inline serId  (get: 'a -> System.Guid) (set:System.Guid -> 'a) (print: 'a->string) : Ser<'a> =
                    let s               = System.Guid.Empty |> set |> print |> fun (s:string) -> s.Split ' ' |> Array.head
                    let sQ              = sprintf "%A" s
                    let serialize   gid = get gid |> string |> sprintf "{%10s :%A}" sQ
                    let deserialize j   = j.tryField s 
                                          |> Option.bind (fun jf -> jf.tryString() ) 
                                          |> Option.bind ParseO.parseGuidO 
                                          |> Option.map  set
                    serialize, deserialize
            
                let serField (name:string) (get:'D->'e) (set:'e->'D->'D) (serFuncs:Ser<'e>) : string * SerS<'D> * ('D -> SerD<'D>) = 
                    serFuncs |> fun (ser, deser) -> name, get >> ser, (fun rc j -> deser j |> Option.map (fun v -> set v rc) ) 
                    
                let [< Inline >] serRecord init (fields: #seq<(string * SerS<'D> * ('D -> SerD<'D>))>) : Ser<'D> =
                    if isNull (init :> obj) then failwith "Initial record is null"
                    let serialize   dim = fields |> Seq.map  (fun     (n,  ser, _deser) -> sprintf "%A: %s" n (ser dim)) |> String.concat ", " |> sprintf "{%s}"
                    let deserialize j   = fields |> Seq.fold (fun dim (n, _ser,  deser) -> j.tryField n |> Option.bind (deser dim) |> Option.defaultValue dim)   init |> Some
                    serialize, deserialize
                
                let serSeq (ser:Ser<'D>) : Ser<'D seq     > = (Seq   .map (fst ser) >> sprintA                                 ), (fun j -> j.tryArray () |> Option.map (Array.choose (snd ser)) |> Option.map Seq.ofArray)
                let serArr (ser:Ser<'D>) : Ser<'D []      > = (Array .map (fst ser) >> sprintA                                 ), (fun j -> j.tryArray () |> Option.map (Array.choose (snd ser))                          )
                let serLst (ser:Ser<'D>) : Ser<'D list    > = (List  .map (fst ser) >> sprintA                                 ), (fun j -> j.tryArray () |> Option.map (Array.choose (snd ser)) |> Option.map Seq.toList )
                let serSet (ser:Ser<'D>) : Ser<Set<'D>    > = (Set   .map (fst ser) >> sprintA                                 ), (fun j -> j.tryArray () |> Option.map (Array.choose (snd ser)) |> Option.map Set        )
                let serOpt (ser:Ser<'D>) : Ser<'D option  > = (Option.map (fst ser) >> Option.defaultValue "null"              ), (fun j -> (if j.isNull() then None else              snd ser j)|> Some                  )
                let serDup(serFst,serSnd): Ser<'a * 'b    > = (fun (f,s  ) -> sprintf "[%s, %s]" (fst serFst f) (fst serSnd s) ), (fun j -> j.tryArray () 
                                                                                                                                            |> function 
                                                                                                                                                | Some [| j1 ; j2 |] -> match snd serFst j1, snd serSnd j2 with
                                                                                                                                                                        | Some f, Some s -> Some(f, s) |_->None
                                                                                                                                                | _ -> None )
                let serTrp(sF,sS,sT)      : Ser<'a *'b*'c > = (fun (f,s,t) -> sprintf "[%s, %s, %s]" (fst sF f) (fst sS s)  (fst sT t)) , (fun j -> j.tryArray () 
                                                                                                                                                    |> function 
                                                                                                                                                        | Some [| j1 ;j2; j3|]   -> match snd sF j1, snd sS j2, snd sT j3 with
                                                                                                                                                                                    | Some f, Some s, Some t -> Some(f, s, t) |_-> None
                                                                                                                                                        | _ -> None ) 
                let serMap serKey serElm : Ser<Map<'k, 'e>> =   serDup(serKey, serElm)
                                                                |> serSeq 
                                                                |> (fun serKVPs -> (Seq.map (fun kvp -> kvp.Key, kvp.Value) >> fst serKVPs) , (snd serKVPs >> Option.map Map) )
            
                let serTypedRegisters = System.Collections.Generic.Dictionary<string, Ser<obj>>()
            
                let map (g: 'b -> 'a) (f: 'a -> 'b) ((serS, serD): Ser<'a>) : Ser<'b> = g >> serS, (serD >> Option.map f)
            
                [< JavaScript false >]
                let fixType t = System.Text.RegularExpressions.Regex.Replace(t, @"FSI_[0-9]{4}\+", "", System.Text.RegularExpressions.RegexOptions.IgnorePatternWhitespace)
            
                [< JavaScript false >]
                let serSpecial (regSer: Ser<'T>) : Ser<obj> =
                    let tn0 = typeof<'T>.FullName |> fixType
                    if serTypedRegisters.ContainsKey tn0 |> not then serTypedRegisters.Add(tn0, map unbox box regSer)
                    (fun t -> 
                        let tn    = t.GetType().FullName |> fixType
                        let snd   = if   serTypedRegisters.ContainsKey tn 
                                    then fst serTypedRegisters.[tn] t
                                    else failwithf "Serializer not registered for type: %s" tn
                        sprintf "[%s, %s]" (fst serString tn) snd)
                    ,(fun j -> 
                        match j.tryArray () with
                        | Some [| j1 ; j2 |] -> 
                            match snd serString j1 with
                            | Some tn    -> if   serTypedRegisters.ContainsKey tn 
                                            then snd serTypedRegisters.[tn] j2
                                            else failwithf "Serializer not registered for type: %s" tn
                            |_-> failwithf "Expected json string with type name: %A" (j1.toString())
                        |    _-> failwithf "Expected json array with 2 elements: %s" (j.toString()) )
            
            [<System.Runtime.CompilerServices.Extension >]
            type MailboxProcessorExt =
                [<System.Runtime.CompilerServices.Extension ; Inline "throw 'PostAndReply not available in JavaScript'" >]
                static member PostAndReply     (agent:MailboxProcessor<_>, msg, ?timeout) = agent.PostAndReply     ((fun reply -> reply, msg), ?timeout= timeout)
                [<System.Runtime.CompilerServices.Extension>]
                static member PostAndAsyncReply(agent:MailboxProcessor<_>, msg, ?timeout) = agent.PostAndAsyncReply((fun reply -> reply, msg), ?timeout= timeout)
            //    [<System.Runtime.CompilerServices.Extension>]
            ///    static member PostF(agent:MailboxProcessor<_>, f, ?timeout) = agent.Post(fun v -> async { return f v })
            
            module Mailbox =
            
                /// A simple Mailbox processor to serially process Async tasks
                /// use:
                ///      let logThisMsgA = Mailbox.iterA (printfn "%A") (fun msg -> async { printfn "Log: %s" msg } )
                ///      logThisMsgA.Post "message Async"
                ///      
                let iterA hndl f =
                    MailboxProcessor.Start(fun inbox ->
                        async {
                            while true do
                                try       let!   msg = inbox.Receive()
                                          do!  f msg
                                with e -> hndl e
                        }
                    )
                    
                /// A simple Mailbox processor to serially process tasks
                /// use:
                ///      let logThisMsg = Mailbox.iter (printfn "%A") (printfn "Log: %s")
                ///      logThisMsg.Post "message"
                ///      
                let iter hndl f = iterA hndl (fun msg -> async { f msg } )
                
                /// A simple Mailbox processor to serially and synchronously process tasks
                /// use:
                ///      let toUpperCaseA = Mailbox.callA (fun (msg:string) -> 
                ///                                async { return msg.ToUpper() } )
                ///
                ///      toUpperCaseA.PostAndReply(fun reply -> reply, "message") 
                ///      |> printfn "%s"
                ///
                ///      toUpperCaseA.PostAndReply "message"
                ///      |> printfn "%s"
                ///
                ///      async {
                ///          let! res = toUpperCaseA.PostAndAsyncReply(fun reply -> 
                ///                                                        reply, "message")
                ///          printfn "Async: %s" res
                ///      } |> Async.RunSynchronously
                ///
                ///      async {
                ///          let! res = toUpperCaseA.PostAndAsyncReply "message"
                ///          printfn "Async: %s" res
                ///      } |> Async.RunSynchronously    
                ///      
                let callA hndl f = iterA hndl (fun ((replyChannel: AsyncReplyChannel<_>), msg) -> async {
                    let! r = f msg
                    replyChannel.Reply r
                })
                
                /// A simple Mailbox processor to serially and synchronously process tasks
                /// use:
                ///      let toUpperCase = Mailbox.call (fun (msg:string) -> msg.ToUpper() )
                ///      
                ///      toUpperCase.PostAndReply(fun reply -> reply, "message") 
                ///      |> printfn "%s"
                ///      
                ///      toUpperCase.PostAndReply "message"
                ///      |> printfn "%s"
                ///      
                ///      async {
                ///          let! res = toUpperCase.PostAndAsyncReply(fun reply -> 
                ///                                                       reply, "message")
                ///          printfn "Async: %s" res
                ///      } |> Async.RunSynchronously
                ///      
                ///      async {
                ///          let! res = toUpperCase.PostAndAsyncReply "message"
                ///          printfn "Async: %s" res
                ///      } |> Async.RunSynchronously
                ///      
                let call hndl f = callA hndl (fun msg -> async { return f msg } )
                
                /// A Mailbox processor that maintains a state
                let foldA hndl f initState =
                    MailboxProcessor.Start(fun inbox ->
                        let rec loop state : Async<unit> = async {
                            try       let! msg      = inbox.Receive()
                                      let! newState = f state msg
                                      return! loop newState
                            with e -> return! loop (hndl e state)
                        }
                        loop initState
                    )
            
                /// A Mailbox processor that maintains a state
                let fold hndl f initState = foldA hndl (fun state msg -> async { return f state msg } ) initState
                
                /// A Mailbox processor that maintains a state (pass an error handler not a folder function)
                /// use: 
                ///      agent |> Mailbox.StateFull.apply (fun state -> state + 1)
                ///      agent |> Mailbox.StateFull.getState
                let stateFull hndl initState =
                    MailboxProcessor.Start(fun inbox ->
                        let rec loop state : Async<unit> = async {
                            try       let! f        = inbox.Receive()
                                      let! newState = f state
                                      return! loop newState
                            with e -> return! loop (hndl e state)
                        }
                        loop initState
                    )
                    
                let defHandler ex st = print ex ; st
                    
                module StateFull =
                    let getStateA     (agent: MailboxProcessor<'a->Async<'a>>) = agent.PostAndAsyncReply(fun (reply:AsyncReplyChannel<_>) -> fun v -> async { reply.Reply v ; return v })
                    let setState    v (agent: MailboxProcessor<'a->Async<'a>>) = agent.Post(fun _ -> async { return    v })
                    let applyA      f (agent: MailboxProcessor<'a->Async<'a>>) = agent.Post(fun v -> async { return! f v })
                    let apply       f (agent: MailboxProcessor<'a->Async<'a>>) = agent |> applyA (fun v -> async { return  f v })
                    let applyReplyA f (agent: MailboxProcessor<'a->Async<'a>>) = agent.PostAndAsyncReply(fun (reply:AsyncReplyChannel<'r>) -> 
                                                                                                fun v -> async {
                                                                                                    let! st, r = f v
                                                                                                    reply.Reply r
                                                                                                    return st 
                                                                                                })
                    let applyReply  f (agent: MailboxProcessor<'a->Async<'a>>) = agent |> applyReplyA (fun v -> async { return  f v })
                    [< Inline "throw 'getState not available in JavaScript'" >]
                    let getState      (agent: MailboxProcessor<'a->Async<'a>>) = agent.PostAndReply     (fun (reply:AsyncReplyChannel<_>) -> fun v -> async { reply.Reply v ; return v })
                    /// synchronous version pf applyReply
                    [< Inline "throw 'applyReplyS not available in JavaScript'" >]
                    let applyReplyS f (agent: MailboxProcessor<'a->Async<'a>>) = agent.PostAndReply(fun (reply:AsyncReplyChannel<'r>) -> 
                                                                                                fun v -> async {
                                                                                                    let st, r = f v
                                                                                                    reply.Reply r
                                                                                                    return st 
                                                                                                })
            
        /// Essentials that cannot run in Javascript (WebSharper)
        [< AutoOpen >]
        module LibraryNoJS =
            let rec getNamespace (t:System.Type) =
                match t.DeclaringType with
                | null -> match t.Namespace with null -> "" | ns -> ns + "."
                | dt   -> getNamespace dt + dt.Name + "."
            
            let rec getTypeName (t:System.Type) =
                if t.IsArray then getTypeName (t.GetElementType()) + "[]" else
                let ns    = getNamespace t
                let name  = if   t.Name = "FSharpOption`1"                then "Option"
                            elif t.Name = "FSharpList`1"                  then "List"
                            elif ns     = "Microsoft.FSharp.Core."
                              || ns     = "Microsoft.FSharp.Collections." then t.Name   
                            else  ns + t.Name
                let name2 = name.Split('`').[0]
                let parms = t.GenericTypeArguments |> Seq.map getTypeName |> String.concat ","
                if parms = "" then name2 else sprintf "%s<%s>" name2 parms
            
            module DiscUnion =
                open FSharp.Reflection
            
                let simple<'U> =
                    FSharpType.GetUnionCases typeof<'U>
                    |> Seq.filter (fun c -> c.GetFields() |> Seq.isEmpty )
                    |> Seq.map (fun c -> c.Name)
                    |> Seq.toArray
            
                let caseTuple (v:'T) = 
                    let c, vs = FSharpValue.GetUnionFields(v, typeof<'T>)
                    let types = c.GetFields() |> Array.map (fun p -> p.PropertyType)
                    if types.Length = 1 then c.Name, types.[0], vs.[0] else
                    let ttype = FSharpType.MakeTupleType(types)
                    c.Name, ttype, FSharpValue.MakeTuple(vs, ttype)
            
                let caseArray (v:'T) = 
                    let c, vs = FSharpValue.GetUnionFields(v, typeof<'T>)
                    let types = c.GetFields() |> Array.map (fun p -> p.PropertyType.FullName)
                    c.Name, Array.zip types vs
            
                let caseInfos<'T>            = FSharpType.GetUnionCases typeof<'T>
                let caseInfo< 'T> (s:string) = caseInfos<'T> |> Seq.find (fun c -> c.Name = s)
            
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
            module Serializer =
                open Serializer
                open FSharp.Data
            
                let rec getJsonIntermediate df di ds db da (j:JsonValue) : JsonIntermediate =
                    let jsonInt = getJsonIntermediate df di ds db da
                    {
                        tryFloat    = fun () -> (match j with JsonValue.Float   v ->       v |> Some | JsonValue.Number v -> float v |> Some    |_-> None) |> Option.orElseWith df
                        tryInt      = fun () -> (match j with JsonValue.Float   v -> int64 v |> Some | JsonValue.Number v -> int64 v |> Some    |_-> None) |> Option.orElseWith di
                        tryString   = fun () -> (match j with JsonValue.String  v ->       v |> Some                                            |_-> None) |> Option.orElseWith ds
                        tryBool     = fun () -> (match j with JsonValue.Boolean v ->       v |> Some                                            |_-> None) |> Option.orElseWith db
                        tryArray    = fun () -> (match j with JsonValue.Array   v ->       v |> Array.map jsonInt |> Some                       |_-> None) |> Option.orElseWith (fun () -> da  jsonInt   )
                        tryField    = fun fl -> j.TryGetProperty fl |> Option.map jsonInt                                                                 
                        isObject    = fun () -> (match j with JsonValue.Record  _ ->       true |_-> false)
                        isNull      = fun () -> (match j with JsonValue.Null      ->       true |_-> false)
                        toString    = fun () -> sprintf "%A" j
                    }
            
                let tryJsonValue s =
                    JsonValue.TryParse ("[" + s + "]")
                    |> Option.bind (function JsonValue.Array v -> Seq.tryHead v |_ -> None)
            
                let toJsonIntermediateWithTry (s:string) =
                    tryJsonValue s
                    |> Option.map
                        (getJsonIntermediate
                            (fun _   -> None                                 )
                            (fun _   -> None                                 )
                            (fun _   -> None                                 )
                            (fun _   -> None                                 )
                            (fun _   -> None                                 ))
            
                let toJsonIntermediateWithDefs s = 
                    tryJsonValue s
                    |> Option.map
                        (getJsonIntermediate
                            (fun _   -> Some 0.0                             )
                            (fun _   -> Some 0L                              )
                            (fun _   -> Some ""                              )
                            (fun _   -> Some false                           )
                            (fun _   -> Some [||]                            ))
            
                let toJsonIntermediateWithFail s = 
                    tryJsonValue s
                    |> Option.map
                        (getJsonIntermediate
                            (fun _   -> failwith  "Error expecting float"    )
                            (fun _   -> failwith  "Error expecting int"      )
                            (fun _   -> failwith  "Error expecting string"   )
                            (fun _   -> failwith  "Error expecting bool"     )
                            (fun _   -> failwith  "Error expecting array"    ))
            
                let deserialize toJsonIntermediate (ser: Serializer.Ser<_>) js = toJsonIntermediate js |> Option.bind (snd ser)
                let tryDeserialize      ser = deserialize toJsonIntermediateWithTry  ser
                let deserializeWithDefs ser = deserialize toJsonIntermediateWithDefs ser
                let deserializeWithFail ser = deserialize toJsonIntermediateWithFail ser
            
                open FSharp.Reflection
            
                let inline serObj ((ser, deser):Ser<'T>) : string * Ser<obj> = typeof<'T> |> getTypeName, (unbox >> ser, deser >> Option.map box)
            
                let serDU<'DU when 'DU : equality> (sers : (string * Ser<obj>) seq) =
                    let cases  = FSharpType.GetUnionCases             typeof<'DU>
                    let dCases =
                        cases
                        |> Array.map (fun case ->
                            if case.GetFields().Length = 0 then
                                let serC         _ = sprintf "{%A:1}" case.Name
                                let deserC       _ = FSharpValue.MakeUnion(case, [||]) :?> 'DU |> Some 
                                case.Tag, (serC, deserC)
                            else
                                let sers2 =
                                    case.GetFields() |> Array.map(fun fld ->
                                        let tn = fld.PropertyType  |> getTypeName
                                        sers 
                                        |> Seq.tryPick(fun (nm, ser) -> if nm = tn then Some ser else None)
                                        |> Option.defaultWith (fun () -> 
                                            sers |> Seq.map fst |> String.concat ", "
                                            |> failwithf "serDU: Could not find Ser<%s> for %s. Provided: %s" tn (typeof<'DU> |> getTypeName) 
                                        )
                                    ) 
                                let getValues      = box<'DU> >> FSharpValue.PreComputeUnionReader case 
                                let setValues      = FSharpValue.PreComputeUnionConstructor case >> unbox<'DU>
                                let serC (v:'DU) =
                                    Seq.zip (getValues v) sers2
                                    |> Seq.map (fun (vi, seri) -> fst seri vi )
                                    |> String.concat ", "
                                    |> sprintf "{%A:[%s]}" case.Name
                                let deserC (j:JsonIntermediate) = 
                                    match j with 
                                    | Field case.Name j2 ->
                                        match j2.tryArray () with
                                        | None -> None
                                        | Some js -> 
                                        Array.zip js sers2
                                        |> Array.choose (fun (ji, seri) -> snd seri ji)
                                        |> setValues
                                        |> Some
                                    |_-> None 
                                case.Tag, (serC, deserC)
                        ) |> dict
                    let readTag   = box<'DU> >> FSharpValue.PreComputeUnionTagReader typeof<'DU> >> fun i -> dCases.[i]
                    let serDU   v = (readTag v |> fst) v
                    let deserDU j =
                        let case =  cases |> Seq.tryPick(fun case -> match j with Field case.Name _ -> Some case |_-> None) |> Option.defaultWith (fun () -> failwithf "Could not find DU element %A" j)
                        snd dCases.[case.Tag] j
                    serDU, deserDU
            
                let serDUt (sers : (string * Ser<obj>) seq) (ttype:System.Type) =
                    let cases  = FSharpType.GetUnionCases ttype
                    let dCases =
                        cases
                        |> Array.map (fun case ->
                            if case.GetFields().Length = 0 then
                                let serC         _ = sprintf "{%A:1}" case.Name
                                let deserC       _ = FSharpValue.MakeUnion(case, [||]) :?> 'DU |> Some 
                                case.Tag, (serC, deserC)
                            else
                                let sers2 =
                                    case.GetFields() |> Array.map(fun fld ->
                                        let tn = fld.PropertyType |> getTypeName
                                        sers 
                                        |> Seq.tryPick(fun (nm, ser) -> if nm = tn then Some ser else None)
                                        |> Option.defaultWith (fun () -> 
                                            sers |> Seq.map fst |> String.concat ", "
                                            |> failwithf "serDU: Could not find Ser<%s> for %s. Provided: %s" tn (ttype |> getTypeName) 
                                        )
                                    ) 
                                let getValues      = FSharpValue.PreComputeUnionReader case 
                                let setValues      = FSharpValue.PreComputeUnionConstructor case
                                let serC v =
                                    Seq.zip (getValues v) sers2
                                    |> Seq.map (fun (vi, seri) -> fst seri vi )
                                    |> String.concat ", "
                                    |> sprintf "{%A:[%s]}" case.Name
                                let deserC (j:JsonIntermediate) = 
                                    match j with 
                                    | Field case.Name j2 ->
                                        match j2.tryArray () with
                                        | None -> None
                                        | Some js -> 
                                        Array.zip js sers2
                                        |> Array.choose (fun (ji, seri) -> snd seri ji)
                                        |> setValues
                                        |> Some
                                    |_-> None 
                                case.Tag, (serC, deserC)
                        ) |> dict
                    let readTag   = FSharpValue.PreComputeUnionTagReader ttype >> fun i -> dCases.[i]
                    let serDU   v = (readTag v |> fst) v
                    let deserDU j =
                        let case =  cases |> Seq.pick(fun case -> match j with Field case.Name _ -> Some case |_-> None)
                        snd dCases.[case.Tag] j
                    serDU, deserDU
                    
            module Default =
                open FSharp.Reflection
            
                let defaults vs = vs |> Seq.map (fun v -> v.GetType().FullName, v ) |> dict
            
                let defs = 
                    defaults [
                        box 0
                        box 0L
                        box 0.
                        box 0.F
                        box ""
                        box false
                        box System.Guid.Empty
                        box System.DateTime.MinValue
                    ]
            
                let rec defaultValue defs (t:System.Type) : obj =
                    match (defs:System.Collections.Generic.IDictionary<string, obj>).TryGetValue t.FullName with
                    | true , v -> v
                    | false, _ ->
                    if t.IsArray then 
                        System.Array.CreateInstance(t.GetElementType(), 0) |> box
                    elif t.IsEnum then
                        (System.Enum.GetValues t).GetValue [| 0 |] |> box
                    else
                    let c = t.GetConstructor System.Type.EmptyTypes
                    if  isNull c |> not then
                        c.Invoke [||]
                    elif FSharpType.IsRecord t then
                        FSharpType.GetRecordFields t
                        |> Array.map (fun fld -> fld.PropertyType )
                        |> createArray (defaultValue defs)
                        |> fun os -> FSharpValue.MakeRecord(t, os)
                    elif FSharpType.IsTuple t then
                        FSharpType.GetTupleElements t
                        |> createArray (defaultValue defs)
                        |> fun os -> FSharpValue.MakeTuple(os, t)
                    elif FSharpType.IsUnion t then
                        let case = FSharpType.GetUnionCases t |> Seq.head
                        case.GetFields()
                        |> Array.map (fun fld -> fld.PropertyType )
                        |> createArray (defaultValue defs)
                        |> fun os -> FSharpValue.MakeUnion(case, os)
                    else failwithf "Could no create default for %s" t.FullName
            
                and createArray defs (ts : System.Type []) = ts |> Array.map defs
            
                let inline value<'T> : 'T = typeof<'T> |> defaultValue defs |> unbox
            
            
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER 
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            module Promise =
                let ofAsyncResult (v: Async<Result<'a,'b>>) : Promise<'a> =
                    new Promise<'a>(fun (resolve, reject) ->
                        Async.StartWithContinuations(v, (function Ok ok -> resolve ok | Error er -> reject <| sprintf "%A" er), reject, reject)
                    )
            
            module Var =
                let mutable private counter = 1
                let freshId () =
                    counter <- counter + 1
                    "varuid" + string counter
                        
                let lensView get update view0 (var: Var<_>) =
                    let id   = freshId()
                    let view = View.Map2 (fun v _ -> get v) var.View view0
                    { new Var<'V>() with
                        member this.Get        () = get (var.Get())
                        member this.Set         v = var.Update(fun t -> update t v)
                        member this.SetFinal    v = this.Set(v)
                        member this.Update      f = var.Update(fun t -> update t (f (get t)))
                        member this.UpdateMaybe f = var.UpdateMaybe(fun t -> Option.map (fun x -> update t x) (f (get t)))
                        member this.View          = view
                        member this.Id            = id
                    }
            
            module ListModel =
                let lensInto' (m:ListModel<_,_>) (get: 'T       -> 'V) (update: 'T -> 'V -> 'T) (key : 'Key) (view: View<'V>) : Var<'V> =
                    let id = Var.freshId()
                    { new Var<'V>() with
                        member r.Get         () = m.FindByKey key |> get
                        member r.Set         v  = m.UpdateBy (fun i -> v          |>             update i |> Some) key
                        member r.Update      f  = m.UpdateBy (fun i -> get i |> f |>             update i |> Some) key
                        member r.UpdateMaybe f  = m.UpdateBy (fun i -> get i |> f |> Option.map (update i)       ) key
                        member r.SetFinal    v  = r.Set v
                        member r.View           = view
                        member r.Id             = id
                    }
                let lensIntoO'(m: ListModel<_,_>) (get: 'T option -> 'V) (update: 'T -> 'V -> 'T) (key : 'Key) (view: View<'V>) : Var<'V> =
                    let id = Var.freshId()
                    { new Var<'V>() with
                        member r.Get         () = m.TryFindByKey key |> get
                        member r.Set         v  = m.UpdateBy (fun i -> v                  |>             update i |> Some) key
                        member r.Update      f  = m.UpdateBy (fun i -> Some i |> get |> f |>             update i |> Some) key
                        member r.UpdateMaybe f  = m.UpdateBy (fun i -> Some i |> get |> f |> Option.map (update i)       ) key
                        member r.SetFinal    v  = r.Set v
                        member r.View           = view
                        member r.Id             = id
                    }
                let docLensMapView      mapView (f: 'Key -> Var<'T> -> 'V) (m:ListModel<_,_>) =
                    let get k v = f k (lensInto' m   id                        (fun _ -> id) k v)
                    Doc.BindSeqCachedViewBy m.Key get (View.Map mapView m.View)
                let docLensMapViewO def mapView (f: 'Key -> Var<'T> -> 'V) (m:ListModel<_,_>) =
                    let get k v = f k (lensIntoO' m (Option.defaultValue def)  (fun _ -> id) k v)
                    Doc.BindSeqCachedViewBy m.Key get (View.Map mapView m.View)
                let lensDef def k (m:ListModel<_,_>) =
                    let get = Option.defaultValue def
                    lensIntoO' m get (fun _ -> id) k (m.TryFindByKeyAsView k |> View.Map get)
            
                let currentLensUpd def curr upd (model:ListModel<_,_>) = 
                    curr 
                    |> Var.lensView (Option.bind (model.TryFindByKey) >> Option.defaultValue def) 
                                    (fun kO v -> kO |> Option.iter (upd v) ; kO)
                                    model.View
                let currentLensUpd' def curr upd (model:ListModel<_,_>) = 
                    let view = curr |> View.Map2 (fun _mdl kO -> kO |> Option.bind model.TryFindByKey |> Option.defaultValue def) model.View
                    Var.Make view upd
                let currentLens def curr (model:ListModel<_,_>) = 
                    model 
                    |> currentLensUpd' def curr (fun v -> model.UpdateBy (fun _ -> model.TryFindByKey (model.Key v) |> Option.map (fun _ -> v) ) <| model.Key v)
                
            
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
                let toYYYYMMDD     sep (date:System.DateTime) = sprintf "%d%s%02d%s%02d" date.Year sep  date.Month sep date.Day
                let toHHMM             (date:System.DateTime) = sprintf "%02d:%02d" date.Hour  date.Minute
                let toYYYYMMDDHHMM sep (date:System.DateTime) = sprintf "%s %s" (toYYYYMMDD sep date) (toHHMM date)
                
            [< Inline """(!$v)""">]
            let isUndefined v = v.GetType() = v.GetType()
                
            
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
            
    
    //#cd @"D:\Abe\CIPHERWorkspace\FSharpStation/projects/ProzperServer"
    module ProzperServer =
    
        [< AutoOpen ; JavaScript >]
        module Basico =
            type IdAliado     = IdAliado     of string          with member this.Id = match this with IdAliado    id -> id
            type IdAuthorize  = IdAuthorize  of string          with member this.Id = match this with IdAuthorize id -> id
            type IdAddress    = IdAddress    of string          with member this.Id = match this with IdAddress   id -> id
            type IdPayment    = IdPayment    of string          with member this.Id = match this with IdPayment   id -> id
        
            type VariableAmbienteI   = 
                    abstract getVar  : string -> string
                    abstract member CarpetaRaiz          : unit     -> string
        
            let variableAmbienteE v  = Reader.ask() |>> fun (h:#VariableAmbienteI) -> h.getVar     v 
            let carpetaRaiz       () = Reader.ask() |>> fun (h:#VariableAmbienteI) -> h.CarpetaRaiz()
        
        
        [< AutoOpen ; JavaScript >]
        module TypesV0 =
            type LatestType = TypeV0
        
            type IdAliado       = IdAliado       of string          with member this.Id = match this with IdAliado       id -> id
            type IdAuthorize    = IdAuthorize    of string          with member this.Id = match this with IdAuthorize    id -> id
            type IdAddress      = IdAddress      of string          with member this.Id = match this with IdAddress      id -> id
            type IdPayment      = IdPayment      of string          with member this.Id = match this with IdPayment      id -> id
            type IdSubscription = IdSubscription of string          with member this.Id = match this with IdSubscription id -> id
        
            type StatusAliado =
            | CuentaCreada
            | Activo
            | Inactivo
            | Cancelado
                with
                    override this.ToString() = sprintf "%A" this
                    static member tryParse (s:string) = 
                        match s.Trim().ToUpper() with
                        | "CUENTACREADA"             -> CuentaCreada
                        | "ACTIVO"                   -> Activo
                        | "CANCELADO"                -> Cancelado
                        | _                          -> Inactivo
        
            type TipoAliado =
            | Master
            | Regular
                with
                    override this.ToString() = sprintf "%A" this
        
            type Pais =
            | USA
            | Venezuela 
            | Argentina
            | OtroP of string
                with 
                    static member tryParse (s:string) = 
                        match s.Trim().ToUpper() with
                        | ""               -> None    
                        | "EEUU" | "UNITED STATES"  | "UNITED STATES OF AMERICA" | "US" | "E.E.U.U." | "AMERICA"
                        | "USA"            -> Some <| USA
                        | "VENEZUELA"      -> Some <| Venezuela
                        | "ARGENTINA"      -> Some <| Argentina
                        | _                -> Some <| (OtroP <| s.Trim() )
                    override this.ToString() = match this with OtroP s -> s | v -> sprintf "%A" v
        
            type Estado =
            | Texas
            | Florida
            | OtroS of string
                with 
                    static member tryParse (s:string) = 
                        match s.Trim().ToUpper() with
                        | ""               -> None    
                        | "TX"
                        | "TEXAS"          -> Some <| Texas
                        | "FL"
                        | "FLORIDA"        -> Some <| Florida
                        | _                -> Some <| (OtroS <| s.Trim() )
                    override this.ToString() = match this with OtroS s -> s | v -> sprintf "%A" v
        
            type Territorio =
            | Estado of Estado
        
            type Emisor =
            | Pais       of Pais
            | Territorio of Territorio
        
            type Documento =
            | Pasaporte        of string
            | Cedula           of string
            | LicenciaConducir of string
        
            type Identificacion = {
                emisor    : Emisor
                documento : Documento
                emision   : System.DateTime
                vence     : System.DateTime
            }
        
            type TipoArchivo =
            | Contrato
            | Autorizacion
            | Pasaporte
            | Cedula
            | LicenciaConducir
            | FormaW9
            | FormaW8BEN
            | Otro            of string
                with 
                    static member Parse (s:string) = 
                        match s with
                        | String.StartsWith "Otro " r -> Otro r
                        | "Contrato"                  -> Contrato
                        | "FormaW9"                   -> FormaW9
                        | "FormaW8BEN"                -> FormaW8BEN
                        | "Autorizacion"              -> Autorizacion
                        | "Pasaporte"                 -> Pasaporte
                        | "Cedula"                    -> Cedula
                        | "LicenciaConducir"          -> LicenciaConducir
                        | _                           -> Otro <| s.Trim()
                    override this.ToString() = match this with Otro s -> s | v -> sprintf "%A" v
        
            type StatusArchivo =
            | Subido
            | Verificado
            | Rechazado 
            | Expirado  
            | Cancelado  
            | Cambiado
                with 
                    static member Parse (s:string) = 
                        match s with
                        | "Cambiado"   -> Cambiado
                        | "Expirado"   -> Expirado 
                        | "Cancelado"  -> Cancelado
                        | "Verificado" -> Verificado 
                        | "Rechazado"  -> Rechazado  
                        | _            -> Subido
                    override this.ToString() = sprintf "%A" this
        
            type Archivo = {
                idAliado    : IdAliado
                tipo        : TipoArchivo
                nombre      : string
                modificado  : System.DateTime
                tamano      : int64
                status      : StatusArchivo
                comentario  : string
            }
        
            type Mes =
            | Enero      =  1
            | Febrero    =  2
            | Marzo      =  3
            | Abril      =  4
            | Mayo       =  5
            | Junio      =  6
            | Julio      =  7
            | Agosto     =  8
            | Septiembre =  9
            | Octubre    = 10
            | Noviembre  = 11
            | Diciembre  = 12
        
            type Expiracion = {
                anio : int
                mes  : Mes
            } with
                member this.Id = sprintf "%04d-%02d" this.anio (int this.mes)
                static member TryParse (txt:string) =
                    let create century (anio:string) (mes:string) =
                        {
                            anio = century   + int anio
                            mes  = enum<Mes>  (int mes )
                        } |> Some
                    if txt.Length = 4 || txt.Length = 5 then 
                        create 2000 (txt.Right 2) (txt.Left  2)
                    elif txt.Length = 7 then
                        txt.Split[| '-' ; '/' |]
                        |> function 
                            | [| py ; pm |] when py.Length = 4 -> create 0 py pm
                            | [| pm ; py |] when py.Length = 4 -> create 0 py pm
                            |_-> None
                    else None
        
        
            type NumeroCuenta   = NumeroCuenta  of string       with member this.Id = match this with NumeroCuenta  id -> id
            type NumeroTarjeta  = NumeroTarjeta of string       with member this.Id = match this with NumeroTarjeta id -> id
            type RoutingNumber  = RoutingNumber of string       with member this.Id = match this with RoutingNumber id -> id 
        
            type TipoTarjeta     = 
            | Visa
            | MasterCard
            | Amex
            | Otra of string
                with 
                    static member tryParse (s:string) = 
                        match s.Trim().ToUpper() with
                        | ""                 -> None    
                        | "VISA"             -> Some <| Visa
                        | "MASTERCARD"       -> Some <| MasterCard
                        | "AMEX"
                        | "AMERICAN EXPRESS" -> Some <| Amex
                        | _                  -> Some <| (Otra <| s.Trim() )
                    override this.ToString() = match this with Otra s -> s | v -> sprintf "%A" v
        
            type TipoCuenta     = 
            | Ahorro
            | Corriente
            | Otra of string
                with 
                    static member tryParse (s:string) = 
                        match s.Trim().ToUpper() with
                        | ""               -> None    
                        | "SAVINGS"
                        | "AHORRO"         -> Some <| Ahorro
                        | "CHECKING"
                        | "CORRIENTE"      -> Some <| Corriente
                        | _                -> Some <| (Otra <| s.Trim() )
                    override this.ToString() = match this with Otra s -> s | v -> sprintf "%A" v
        
            type CuentaBancaria = {
                titular     : string
                banco       : string
                tipo        : TipoCuenta
                numero      : NumeroCuenta
                routing     : RoutingNumber
            }
        
            type TarjetaCredito = {
                titular     : string
                tipoTarjeta : TipoTarjeta
                numero      : NumeroTarjeta
                expiracion  : Expiracion
            }
        
            type ConceptoPago =
            | PagoAfiliacion
            | PagoComision
            | Otro of string
                with
                    static member tryParse (s:string) = 
                        match s.Trim().ToUpper() with
                        | ""               -> None    
                        | "PAGOAFILIACION" -> Some <| PagoAfiliacion
                        | "PAGOCOMISION"   -> Some <| PagoComision
                        | _                -> Some <| (ConceptoPago.Otro <| s.Trim() )
                    override this.ToString() = match this with Otro s -> s | v -> sprintf "%A" v
        
            type Transaccion = {
                fechaPago      : System.DateTime
                ano            : int
                periodo        : int
                monto          : int
                idAliado       : IdAliado
                concepto       : ConceptoPago
                transaccion    : string
                statusTran     : string
            }
        
            type TipoDireccion = 
            | Habitacion
            | Oficina
            | ServicioPostal
            | Otro of string
                with 
                    static member tryParse (s:string) = 
                        match s.Trim() with
                        | ""               -> None    
                        | "Habitacion"     -> Some <| Habitacion
                        | "Oficina"        -> Some <| Oficina
                        | "ServicioPostal" -> Some <| ServicioPostal
                        | s                -> Some <| Otro s
                    override this.ToString() = match this with Otro s -> s | v -> sprintf "%A" v
        
            type ZonaPostal = ZonaPostal of string
                with 
                    static member tryParse (s:string) = if s.Trim() <> "" then Some (ZonaPostal <| s.Trim()) else None
                    override this.ToString() = match this with ZonaPostal s -> s
        
            type Direccion = {
                authorizeIdR  : Result<IdAddress, string>
                tipoDireccion : TipoDireccion
                linea1        : string
                linea2        : string
                ciudad        : string
                estado        : Estado
                pais          : Pais
                zonaPostal    : ZonaPostal
            }
        
            type TipoTelefono =
            | Movil
            | Oficina
            | Habitacion
            | Voip
                with 
                    static member tryParse = function
                        | "Movil"      -> Some Movil
                        | "Oficina"    -> Some Oficina
                        | "Habitacion" -> Some Habitacion
                        | _            -> None    
                    override this.ToString() = sprintf "%A" this
        
            type Telefono          = {
                tipoTelefono : TipoTelefono
                codigoPais   : string
                codigoArea   : string
                numero       : string
                extension    : string
                mensajes     : bool
            }
        
            type CorreoElectronico = {
                email       : string
                enviado     : System.DateTime option
                recibido    : System.DateTime option
            }
                with override this.ToString() = this.email
        
            type Contacto =
            | Direccion         of Direccion
            | CorreoElectronico of CorreoElectronico
            | Telefono          of Telefono
            | Mensajeria        of string
            | PaginaWeb         of string
            | SocialMedia       of string
        
            type Genero =
            | Masculino
            | Femenino
            | Empresa
                with 
                    static member tryParse (s:string) = 
                        match s.Trim() with
                        | "Masculino"      -> Some <| Masculino
                        | "Femenino"       -> Some <| Femenino
                        | "Empresa"        -> Some <| Empresa
                        | _                -> None    
        
            type DatosPersonales = {
                titulo          : string option
                nombre1         : string
                nombre2         : string
                apellido1       : string
                apellido2       : string
                nacionalidad    : Pais
                genero          : Genero
                fechaNacimiento : System.DateTime
            }
        
            type CuentaPago =
            | CuentaBancaria            of CuentaBancaria
            | TarjetaCredito            of TarjetaCredito
            | TransferenciaElectronica  of string
                with
                    member this.MaskedCuenta =
                        match this with
                        | TarjetaCredito           tc -> tc.numero.Id
                        | CuentaBancaria           cb -> cb.numero.Id
                        | TransferenciaElectronica te -> te
                    member this.TipoCorto =
                        match this with
                        | TarjetaCredito           tc -> "TC"
                        | CuentaBancaria           bc -> "CB"
                        | TransferenciaElectronica te -> "TE"
                    member this.TipoLargo =
                        match this with
                        | TarjetaCredito           tc -> "Tarjeta de Credito"
                        | CuentaBancaria           bc -> "Cuenta Bancaria"
                        | TransferenciaElectronica te -> "Transferencia Electronica"
                    member this.AutorizacionPre = sprintf "Autorizacion %s %s" this.TipoCorto this.MaskedCuenta
        
            type StatusFormaPago =
            | NuevaFormaPago
            | Registrada      of          System.DateTime option
            | RegistroFallido of string * System.DateTime option
        
            type Subscripcion = {
                idSubscripcion  : IdSubscription
                inicio          : System.DateTime
                monto           : int
                descripcion     : string
                status          : int
            } with 
                member this.Short = sprintf "%s %s $%d.00 %s %d" this.idSubscripcion.Id (Date.toYYYYMMDD "-" this.inicio) this.monto this.descripcion this.status
        
            type FormaPago = {
                nombre          : string
                authorizeIdR    : Result<IdPayment, string>
                cuentaPago      : CuentaPago
                subscripcion    : Subscripcion option
            }
        
            type TipoMensaje = 
            | Alerta
            | Informacion
            | Saludo
        
            type Remitente =
            | Prozper
            | Aliado of IdAliado
            | OtroR  of string
        
            type Mensaje = {
                tipo      : TipoMensaje
                leido     : System.DateTime option
                fecha     : System.DateTime
                texto     : string
                remitente : Remitente
            }
        
            type PremisasCalculo = {
                comisionReferidosRegular     : int
                comisionReferidosMaster      : int
                comisionDescendientesMaster  : int
                comisionDescendientesRegular : int
                montoAfiliacion              : int
                numeroReferidosMaster        : int
                diaCorte1                    : int
                diaCorte2                    : int
            }
        
            let premisasCalculo = {
                comisionReferidosRegular     = 15
                comisionReferidosMaster      = 25
                comisionDescendientesMaster  = 25
                comisionDescendientesRegular =  0
                montoAfiliacion              = 75
                numeroReferidosMaster        = 31
                diaCorte1                    = 26
                diaCorte2                    = 28
            }
        
            let telVacio = {            
                tipoTelefono = Movil
                codigoPais   = ""
                codigoArea   = ""
                numero       = ""
                extension    = ""
                mensajes     = false
            }
        
            let dirVacio = {
                authorizeIdR  = Error ""
                tipoDireccion = TipoDireccion.Habitacion
                linea1        = ""
                linea2        = ""
                ciudad        = ""
                estado        = OtroS ""
                pais          = OtroP ""
                zonaPostal    = ZonaPostal ""
            }
        
            let tarVacio = {            
                tipoTarjeta  = Visa
                numero       = NumeroTarjeta ""
                expiracion   = { anio = 2000 ; mes = Mes.Enero }
                titular      = ""
            }
        
            let ctaVacio = {            
                banco        = ""
                numero       = NumeroCuenta ""
                tipo         = Ahorro
                titular      = ""
                routing      = RoutingNumber ""
            }
        
            type DiaPago =
            |   Dia01
            |   Dia05
            |   Dia10
            |   Dia15
            |   Dia20
            |   Dia25
        
            type IdForAuthorize = IdForAuthorize of string  with member this.Id = match this with IdForAuthorize id -> id
        
            type Aliado = {
                id              :      IdAliado
                idPadreO        :      IdAliado       option
                idForAuthorize  :      IdForAuthorize option
                influyente      :      string         option
                datosPersonales :      DatosPersonales
                contactos       :      Contacto       []
                identificacion  :      Identificacion []
                isInternal      :      bool
                status          :      StatusAliado
                diaPago         :      DiaPago
                tipo            :      TipoAliado
                fechaRegistro   :      System.DateTime
                fechaStatus     :      System.DateTime
                nReferidos      :      int
                nRefActivos     :      int
                nDescendientes  :      int
                nDescActivos    :      int
                comision        :      int
                nivel           :      int
                documentos      :      int
                docPendientes   :      int
            }
        
            type Modelo = {
                idAliado      : IdAliado
                aliados       : Aliado []
                anoActual     : int
                periodoActual : int
                premisas      : PremisasCalculo
                nevento       : int64
            }
        
            let modeloVacio = {
                idAliado      = IdAliado ""
                aliados       = [||]
                anoActual     = System.DateTime.Now.Year
                periodoActual = System.DateTime.Now.Month
                premisas      = premisasCalculo
                nevento       = 0L
            }
        
            let correoVacio = {
                email       = ""
                enviado     = None
                recibido    = None
            }
        
        [< JavaScript >]
        module Aliado =
            open Operators
        
            //let statusActual ano mes al  =
            //    al.transacciones.Value
            //    |> Array.tryFind (fun t -> t.idAliado = al.id 
            //                            && t.ano      = ano
            //                            && t.periodo  = mes
            //                            && t.concepto = PagoAfiliacion)
            //    |> Option.map    (fun _ ->  Activo )
            //    |> Option.defaultValue    Inactivo
        
            open System.Collections.Generic
        
            let premisas pre al =
                let comRef, comDes = match al.tipo  with
                                     | Regular -> pre.comisionReferidosRegular, pre.comisionDescendientesRegular
                                     | Master  -> pre.comisionReferidosMaster , pre.comisionDescendientesMaster
                match al.status with
                | Activo -> comRef, comDes
                | _      -> 0     , 0
        
            let comision pre al = 
                let comRef, comDes = premisas pre al
                al.nRefActivos * comRef, al.nDescActivos * comDes
        
            type Buscar = {
                hijosDe        : (IdAliado -> IdAliado [])
                nivelDe        : (IdAliado option -> int)
                aliado         : (IdAliado -> Aliado)
                aliadoO        : (IdAliado -> Aliado option)
                hijos          : (Aliado -> Aliado [])
                descendientes  : (Aliado -> Aliado [])
            }
        
            let busqueda aliados =
                let padres               = aliados 
                                           |> Seq.map(fun al -> al.idPadreO, al.id) 
                                           |> Seq.groupBy fst 
                                           |> Seq.map(fun (pO, ch) -> pO, ch |> Seq.map snd |> Seq.toArray) |> Map
                let aliadosMap           = aliados |> Seq.map (fun al -> al.id, al) |> Map
                let aliadoO          id  = match aliadosMap.TryGetValue id with
                                           | true, al -> Some al
                                           | _        -> None
                let aliado           id  = try aliadosMap.[id] with e -> failwithf "buscarAliado failed: %A" id
                let hijosDe          idO = match padres.TryGetValue (Some idO) with
                                           | true, hijos -> hijos
                                           | _           -> [||]
                let rec nivelDe      idO = idO |> Option.bind aliadoO |> Option.map (fun al -> 1 + nivelDe al.idPadreO) |> Option.defaultValue 0
                let hijos             al = hijosDe al.id |> Array.choose aliadoO
                let rec descendientes al =
                    [|
                        for h in hijos al do
                            yield                h
                            yield! descendientes h
                    |]
                {
                    hijosDe       = hijosDe       
                    nivelDe       = nivelDe       
                    aliado        = aliado        
                    aliadoO       = aliadoO       
                    hijos         = hijos         
                    descendientes = descendientes 
                }
        
            let diaPago (registro:System.DateTime) =
                let  diaMes = registro.Day
                if   diaMes  =  1 then Dia01
                elif diaMes <=  5 then Dia05
                elif diaMes <= 10 then Dia10
                elif diaMes <= 15 then Dia15
                elif diaMes <= 20 then Dia20
                elif diaMes <= 25 then Dia25
                else                   Dia01
        
            let dia = function
            | Dia01 ->  1
            | Dia05 ->  5
            | Dia10 -> 10
            | Dia15 -> 15
            | Dia20 -> 20
            | Dia25 -> 25
        
            let actualizarAliados (transAll:Transaccion []) modelo =
                let buscar             = busqueda modelo.aliados
                let pre                = modelo.premisas
                let trans              = transAll |> Array.filter (fun tr -> tr.fechaPago > System.DateTime.Today.AddMonths -1 )
                let statusActual    al = 
                    match al.status with
                    | Activo
                    | Inactivo -> if trans
                                     |> Seq.exists(fun tr -> tr.idAliado = al.id && tr.monto >= pre.montoAfiliacion ) 
                                    then Activo else Inactivo
                    | st       -> st
                let rec aliadoActualizado alid =
                    let al             = buscar.aliado alid
                    let hijos          = buscar.hijosDe al.id |> Seq.map aliadoActualizadoM |> Seq.cache
                    let status         = statusActual al
                    let nReferidos     = hijos |> Seq.length
                    let nRefActivos    = hijos |> Seq.filter (fun al -> al.status = Activo && al.tipo = Regular) |> Seq.length
                    let nDescendientes = hijos |> Seq.sumBy  (fun al -> al.nDescendientes + al.nReferidos )
                    let nDescActivos   = hijos |> Seq.sumBy  (fun al -> al.nDescActivos   + al.nRefActivos)
                    let tipo           = if nRefActivos >= pre.numeroReferidosMaster then Master else Regular
                    let nivel          = 1 + buscar.nivelDe al.idPadreO
                    let al0 =
                        { al with
                            status         = status
                            tipo           = tipo
                            nReferidos     = nReferidos    
                            nRefActivos    = nRefActivos   
                            nDescendientes = nDescendientes
                            nDescActivos   = nDescActivos  
                            diaPago        = diaPago al.fechaRegistro
                            //fechaStatus    = System.DateTime()
                            nivel          = nivel
                        }
                    let comRef, comDes = comision pre al0
                    let al1 = { al0 with comision = comRef + comDes}
                    {al1 with status = if al1.status = Inactivo && al1.comision >= pre.montoAfiliacion then Activo else al1.status }
        
                and aliadoActualizadoM = Memoize.memoize aliadoActualizado
        
                modelo.aliados 
                |> Seq.map (fun al -> al.id)
                |> Seq.map aliadoActualizadoM
                |> Seq.toArray
        
            //let actualizarModelEf () = eff {
            //    let! modelo     = State.get()
            //    do! State.put { modelo with aliados = actualizarAliados modelo }
            //    ()
            //}
        
            let empty = {
                datosPersonales = {
                                        titulo          = None
                                        nombre1         = ""
                                        nombre2         = ""
                                        apellido1       = ""
                                        apellido2       = ""
                                        nacionalidad    = USA
                                        genero          = Masculino
                                        fechaNacimiento = System.DateTime(2000, 1, 1)
                                    }
                id              =  IdAliado ""
                idPadreO        =  None
                idForAuthorize  =  None
                influyente      =  None
                contactos       =  [||]
                identificacion  =  [||]
                isInternal      =  false
                status          =  Inactivo
                tipo            =  Regular
                fechaRegistro   =  System.DateTime(2000, 1, 1)
                fechaStatus     =  System.DateTime(2000, 1, 1)
                diaPago         =  Dia01
                nReferidos      =  0
                nRefActivos     =  0
                nDescendientes  =  0
                nDescActivos    =  0
                comision        =  0
                nivel           =  0
                documentos      =  0
                docPendientes   =  0
            }
        
            let nombre dp = 
                let titulo   = dp.titulo |> Option.map ((+) " ") |> Option.defaultValue ""
                let apellido = if dp.apellido1 = "" then "" else (dp.apellido1 + " " + dp.apellido2).Trim() + ", "
                titulo + apellido + dp.nombre1 + " " + dp.nombre2
        
            let nombre2 dp = 
                let titulo   = dp.titulo |> Option.map ((+) " ") |> Option.defaultValue ""
                titulo + (dp.nombre1 + " " + dp.nombre2).Trim() + " " + (dp.apellido1 + " " + dp.apellido2).Trim()
        
            let correo al  =
                al.contactos |> Seq.choose(function | CorreoElectronico correo -> Some correo.email |_-> None ) |> Seq.tryHead |> Option.defaultValue ""
                
        module Serializador =
            open Serializer
            open System
        
            [< AutoOpen >]
            module TypesV0 =
                open TypesV0
            
                let serDate : Ser<System.DateTime> = 
                    (  fun (d:System.DateTime ) -> d.ToString("u") |> sprintf "%A"                )
                    , (fun (j:JsonIntermediate) -> j.tryString() |> Option.bind ParseO.parseDateO )
        
                let serIdAliado          = serDU<IdAliado         > [   serObj serString            ]    
                let serIdAuthorized      = serDU<IdAuthorize      > [   serObj serString            ]    
                let serIdForAuthorize    = serDU<IdForAuthorize   > [   serObj serString            ]    
                let serIdPayment         = serDU<IdPayment        > [   serObj serString            ]    
                let serIdAddress         = serDU<IdAddress        > [   serObj serString            ]    
                let serTipoAliado        = serDU<TipoAliado       > [   serObj serString            ]
                let serPais              = serDU<Pais             > [   serObj serString            ]    
                let serEstado            = serDU<Estado           > [   serObj serString            ]    
                let serTerritorio        = serDU<Territorio       > [   serObj serEstado            ]   
                let serEmisor            = serDU<Emisor           > [   serObj serPais
                                                                        serObj serTerritorio        ]
                let serDocumento         = serDU<Documento        > [   serObj serString            ]    
                let serNumeroCuenta      = serDU<NumeroCuenta     > [   serObj serString            ]    
                let serNumeroTarjeta     = serDU<NumeroTarjeta    > [   serObj serString            ]
                let serRoutingNumber     = serDU<RoutingNumber    > [   serObj serString            ]    
                let serTipoCuenta        = serDU<TipoCuenta       > [   serObj serString            ]    
                let serStatusAliado      = serDU<StatusAliado     > [   serObj serString            ]    
                let serConceptoPago      = serDU<ConceptoPago     > [   serObj serString            ]    
                let serTipoDireccion     = serDU<TipoDireccion    > [   serObj serString            ]    
                let serZonaPostal        = serDU<ZonaPostal       > [   serObj serString            ]    
                let serTipoTelefono      = serDU<TipoTelefono     > [   serObj serString            ]    
                let serGenero            = serDU<Genero           > [   serObj serString            ]    
                let serTipoMensaje       = serDU<TipoMensaje      > [   serObj serString            ]
                let serDiaPago           = serDU<DiaPago          > [                               ]
                let serTipoArchivo       = serDU<TipoArchivo      > [   serObj serString            ]    
                let serStatusArchivo     = serDU<StatusArchivo    > [   serObj serString            ]    
        
                let serMes : Ser<Mes>    = (int >> fst serInt), (snd serInt >> Option.map enum<_> )
        
                let serIdAuthorizedR     = serDU<Result<IdAuthorize, string>> [   serObj serString ; serObj serIdAuthorized ]    
                let serIdPaymentR        = serDU<Result<IdPayment  , string>> [   serObj serString ; serObj serIdPayment    ]    
                let serIdAddressR        = serDU<Result<IdAddress  , string>> [   serObj serString ; serObj serIdAddress    ]    
        
                let serExpiracion: Ser<Expiracion> =
                    [|
                        serInt        |> serField "anio"    (fun s -> s.anio   ) (fun v s -> { s with anio    = v } )   
                        serMes        |> serField "mes"     (fun s -> s.mes    ) (fun v s -> { s with mes     = v } )          
                    |] |> serRecord tarVacio.expiracion
        
        
                let serIdentificacion : Ser<Identificacion> = 
                    [|
                        serEmisor    |> serField "emisor"    (fun s -> s.emisor    ) (fun v s -> { s with emisor    = v } )
                        serDocumento |> serField "documento" (fun s -> s.documento ) (fun v s -> { s with documento = v } )
                        serDate      |> serField "emision"   (fun s -> s.emision   ) (fun v s -> { s with emision   = v } )
                        serDate      |> serField "vence"     (fun s -> s.vence     ) (fun v s -> { s with vence     = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serCuentaBancaria : Ser<CuentaBancaria> =
                    [|
                        serString        |> serField "titular" (fun (s:CuentaBancaria) -> s.titular) (fun v s -> { s with titular = v } )   
                        serString        |> serField "banco"   (fun  s                 -> s.banco  ) (fun v s -> { s with banco   = v } )   
                        serTipoCuenta    |> serField "tipo"    (fun  s                 -> s.tipo   ) (fun v s -> { s with tipo    = v } )        
                        serNumeroCuenta  |> serField "numero"  (fun  s                 -> s.numero ) (fun v s -> { s with numero  = v } )          
                        serRoutingNumber |> serField "routing" (fun  s                 -> s.routing) (fun v s -> { s with routing = v } )           
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serTarjetaCredito : Ser<TarjetaCredito> =
                    [|
                        serExpiracion    |> serField "expiracion" (fun s -> s.expiracion) (fun v s -> { s with expiracion = v } )   
                        serString        |> serField "titular"    (fun s -> s.titular   ) (fun v s -> { s with titular    = v } )   
                        serNumeroTarjeta |> serField "numero"     (fun s -> s.numero    ) (fun v s -> { s with numero     = v } )          
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serTransaccion : Ser<Transaccion> = 
                    [|
                        serDate          |> serField "fechaPago"   (fun s -> s.fechaPago  ) (fun v s -> { s with fechaPago   = v } ) 
                        serInt           |> serField "ano"         (fun s -> s.ano        ) (fun v s -> { s with ano         = v } )
                        serInt           |> serField "periodo"     (fun s -> s.periodo    ) (fun v s -> { s with periodo     = v } )
                        serInt           |> serField "monto"       (fun s -> s.monto      ) (fun v s -> { s with monto       = v } )
                        serIdAliado      |> serField "idAliado"    (fun s -> s.idAliado   ) (fun v s -> { s with idAliado    = v } )     
                        serConceptoPago  |> serField "concepto"    (fun s -> s.concepto   ) (fun v s -> { s with concepto    = v } )         
                        serString        |> serField "transaccion" (fun s -> s.transaccion) (fun v s -> { s with transaccion = v } )   
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serDireccion : Ser<Direccion> = 
                    [|
                        serTipoDireccion |> serField "tipoDireccion" (fun s -> s.tipoDireccion) (fun v s -> { s with tipoDireccion = v } )
                        serString        |> serField "linea1"        (fun s -> s.linea1       ) (fun v s -> { s with linea1        = v } )
                        serString        |> serField "linea2"        (fun s -> s.linea2       ) (fun v s -> { s with linea2        = v } )
                        serString        |> serField "ciudad"        (fun s -> s.ciudad       ) (fun v s -> { s with ciudad        = v } )
                        serPais          |> serField "pais"          (fun s -> s.pais         ) (fun v s -> { s with pais          = v } )
                        serZonaPostal    |> serField "zonaPostal"    (fun s -> s.zonaPostal   ) (fun v s -> { s with zonaPostal    = v } )
                        serEstado        |> serField "estado"        (fun s -> s.estado       ) (fun v s -> { s with estado        = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serTelefono : Ser<Telefono> =
                    [|
                        serTipoTelefono |> serField "tipoTelefono" (fun s -> s.tipoTelefono) (fun v s -> { s with tipoTelefono = v } )
                        serString       |> serField "codigoPais"   (fun s -> s.codigoPais  ) (fun v s -> { s with codigoPais   = v } )
                        serString       |> serField "codigoArea"   (fun s -> s.codigoArea  ) (fun v s -> { s with codigoArea   = v } )
                        serString       |> serField "numero"       (fun s -> s.numero      ) (fun v s -> { s with numero       = v } )
                        serString       |> serField "extension"    (fun s -> s.extension   ) (fun v s -> { s with extension    = v } )
                        serBool         |> serField "mensajes"     (fun s -> s.mensajes    ) (fun v s -> { s with mensajes     = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serCuentaPago        = serDU<CuentaPago       > [   serObj serString              
                                                                        serObj serTarjetaCredito
                                                                        serObj serCuentaBancaria    ]
                let serRemitente         = serDU<Remitente        > [   serObj serIdAliado
                                                                        serObj serString            ]
        
                let serFormaPago : Ser<FormaPago> =
                    [|
                        serCuentaPago            |> serField "cuentaPago"  (fun s -> s.cuentaPago   ) (fun v s -> { s with cuentaPago   = v } )
                        serString                |> serField "nombre"      (fun s -> s.nombre       ) (fun v s -> { s with nombre       = v } )
                        serIdPaymentR            |> serField "authorizeId" (fun s -> s.authorizeIdR ) (fun v s -> { s with authorizeIdR = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serDatosPersonales : Ser<DatosPersonales> =
                    [|
                        serString        |> serOpt  |> serField "titulo"          (fun s -> s.titulo         ) (fun v s -> { s with titulo          = v } )
                        serString                   |> serField "nombre1"         (fun s -> s.nombre1        ) (fun v s -> { s with nombre1         = v } )
                        serString                   |> serField "nombre2"         (fun s -> s.nombre2        ) (fun v s -> { s with nombre2         = v } )
                        serString                   |> serField "apellido1"       (fun s -> s.apellido1      ) (fun v s -> { s with apellido1       = v } )
                        serString                   |> serField "apellido2"       (fun s -> s.apellido2      ) (fun v s -> { s with apellido2       = v } )
                        serPais                     |> serField "nacionalidad"    (fun s -> s.nacionalidad   ) (fun v s -> { s with nacionalidad    = v } )
                        serGenero                   |> serField "genero"          (fun s -> s.genero         ) (fun v s -> { s with genero          = v } )
                        serDate                     |> serField "fechaNacimiento" (fun s -> s.fechaNacimiento) (fun v s -> { s with fechaNacimiento = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serMensaje : Ser<Mensaje> =
                    [|
                        serTipoMensaje           |> serField "tipo"      (fun (s:Mensaje) -> s.tipo     ) (fun v s -> { s with tipo      = v } )
                        serDate        |> serOpt |> serField "leido"     (fun (s:Mensaje) -> s.leido    ) (fun v s -> { s with leido     = v } )
                        serDate                  |> serField "fecha"     (fun (s:Mensaje) -> s.fecha    ) (fun v s -> { s with fecha     = v } )
                        serString                |> serField "texto"     (fun (s:Mensaje) -> s.texto    ) (fun v s -> { s with texto     = v } )
                        serRemitente             |> serField "remitente" (fun (s:Mensaje) -> s.remitente) (fun v s -> { s with remitente = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serPremisasCalculo : Ser<PremisasCalculo> =
                    [|
                        serInt  |> serField "comisionReferidosRegular"     (fun s -> s.comisionReferidosRegular    ) (fun v s -> { s with comisionReferidosRegular     = v } )
                        serInt  |> serField "comisionReferidosMaster"      (fun s -> s.comisionReferidosMaster     ) (fun v s -> { s with comisionReferidosMaster      = v } )
                        serInt  |> serField "comisionDescendientesMaster"  (fun s -> s.comisionDescendientesMaster ) (fun v s -> { s with comisionDescendientesMaster  = v } )
                        serInt  |> serField "comisionDescendientesRegular" (fun s -> s.comisionDescendientesRegular) (fun v s -> { s with comisionDescendientesRegular = v } )
                        serInt  |> serField "montoAfiliacion"              (fun s -> s.montoAfiliacion             ) (fun v s -> { s with montoAfiliacion              = v } )
                        serInt  |> serField "numeroReferidosMaster"        (fun s -> s.numeroReferidosMaster       ) (fun v s -> { s with numeroReferidosMaster        = v } )
                        serInt  |> serField "diaCorte1"                    (fun s -> s.diaCorte1                   ) (fun v s -> { s with diaCorte1                    = v } )
                        serInt  |> serField "diaCorte2"                    (fun s -> s.diaCorte2                   ) (fun v s -> { s with diaCorte2                    = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serCorreoElectronico : Ser<CorreoElectronico> = 
                    [|
                        serString         |> serField "email"    (fun s -> s.email    ) (fun v s -> { s with email    = v } )
                        serDate |> serOpt |> serField "enviado"  (fun s -> s.enviado  ) (fun v s -> { s with enviado  = v } )
                        serDate |> serOpt |> serField "recibido" (fun s -> s.recibido ) (fun v s -> { s with recibido = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serContacto          = serDU<Contacto         > [   serObj serString     
                                                                        serObj serTelefono
                                                                        serObj serCorreoElectronico
                                                                        serObj serDireccion         ] 
        
                let serArchivo : Ser<Archivo> = 
                    [|
                        serString                      |> serField "nombre"          (fun (s:Archivo)-> s.nombre) (fun v s -> { s with nombre          = v } )
                        serIdAliado                    |> serField "id"              (fun s -> s.idAliado       ) (fun v s -> { s with idAliado        = v } )
                        serDate                        |> serField "modificado"      (fun s -> s.modificado     ) (fun v s -> { s with modificado      = v } )
                        serString                      |> serField "comentario"      (fun s -> s.comentario     ) (fun v s -> { s with comentario      = v } )
                        serStatusArchivo               |> serField "status"          (fun s -> s.status         ) (fun v s -> { s with status          = v } )
                        serTipoArchivo                 |> serField "tipo"            (fun s -> s.tipo           ) (fun v s -> { s with tipo            = v } )
                        serInt64                       |> serField "tamano"          (fun s -> s.tamano         ) (fun v s -> { s with tamano          = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serAliado : Ser<Aliado> =
                    [|
                        serIdAliado                    |> serField "id"              (fun s -> s.id             ) (fun v s -> { s with id              = v } )
                        serIdForAuthorize   |> serOpt  |> serField "idForAuthorize"  (fun s -> s.idForAuthorize ) (fun v s -> { s with idForAuthorize  = v } )
                        serIdAliado         |> serOpt  |> serField "idPadreO"        (fun s -> s.idPadreO       ) (fun v s -> { s with idPadreO        = v } )
                        serIdentificacion   |> serArr  |> serField "identificacion"  (fun s -> s.identificacion ) (fun v s -> { s with identificacion  = v } )
                        serString           |> serOpt  |> serField "influyente"      (fun s -> s.influyente     ) (fun v s -> { s with influyente      = v } )
                        serDatosPersonales             |> serField "datosPersonales" (fun s -> s.datosPersonales) (fun v s -> { s with datosPersonales = v } )
                        serContacto         |> serArr  |> serField "contactos"       (fun s -> s.contactos      ) (fun v s -> { s with contactos       = v } )
                        //serFormaPago        |> serArr  |> serField "formasPago"      (fun s -> s.formasPago     ) (fun v s -> { s with formasPago      = v } )
                        //serTransaccion      |> serArr  |> serField "transacciones"   (fun s -> s.transacciones  ) (fun v s -> { s with transacciones   = v } )
                        //serMensaje          |> serArr  |> serField "mensajes"        (fun s -> s.mensajes       ) (fun v s -> { s with mensajes        = v } )
                        serBool                        |> serField "isInternal"      (fun s -> s.isInternal     ) (fun v s -> { s with isInternal      = v } )
                        serStatusAliado                |> serField "status"          (fun s -> s.status         ) (fun v s -> { s with status          = v } )
                        serTipoAliado                  |> serField "tipo"            (fun s -> s.tipo           ) (fun v s -> { s with tipo            = v } )
                        serDate                        |> serField "fechaRegistro"   (fun s -> s.fechaRegistro  ) (fun v s -> { s with fechaRegistro   = v } )
                        serDate                        |> serField "fechaStatus"     (fun s -> s.fechaStatus    ) (fun v s -> { s with fechaStatus     = v } )
                        serDiaPago                     |> serField "diaPago"         (fun s -> s.diaPago        ) (fun v s -> { s with diaPago         = v } )
                        serInt                         |> serField "nReferidos"      (fun s -> s.nReferidos     ) (fun v s -> { s with nReferidos      = v } )
                        serInt                         |> serField "nRefActivos"     (fun s -> s.nRefActivos    ) (fun v s -> { s with nRefActivos     = v } )
                        serInt                         |> serField "nDescendientes"  (fun s -> s.nDescendientes ) (fun v s -> { s with nDescendientes  = v } )
                        serInt                         |> serField "nDescActivos"    (fun s -> s.nDescActivos   ) (fun v s -> { s with nDescActivos    = v } )
                        serInt                         |> serField "comision"        (fun s -> s.comision       ) (fun v s -> { s with comision        = v } )
                        serInt                         |> serField "nivel"           (fun s -> s.nivel          ) (fun v s -> { s with nivel           = v } )
                        serInt                         |> serField "documentos"      (fun s -> s.documentos     ) (fun v s -> { s with documentos      = v } )
                        serInt                         |> serField "docPendientes"   (fun s -> s.docPendientes  ) (fun v s -> { s with docPendientes   = v } )                
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serModelo : Ser<Modelo> = 
                    [|
                        serInt64                      |> serField "nevento"       (fun s -> s.nevento       ) (fun v s -> { s with nevento       = v } )
                        serIdAliado                   |> serField "idAliado"      (fun s -> s.idAliado      ) (fun v s -> { s with idAliado      = v } )
                        //serAliado           |> serArr |> serField "aliados"       (fun s -> s.aliados       ) (fun v s -> { s with aliados       = v } )
                        serInt                        |> serField "anoActual"     (fun s -> s.anoActual     ) (fun v s -> { s with anoActual     = v } )
                        serInt                        |> serField "periodoActual" (fun s -> s.periodoActual ) (fun v s -> { s with periodoActual = v } )
                        serPremisasCalculo            |> serField "premisas"      (fun s -> s.premisas      ) (fun v s -> { s with premisas      = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
        
        module ObtenerEstado =
            open Serializador
        
            type EstadoI<'H> =
                    abstract member UltimoEstado        : unit          -> Eff<'H, int64 option>
        //            abstract member LeerEventos          : int64    ->  Eff<'H, (int64 * string * string * string * string * System.DateTime) []>
        //            abstract member LeerTipos            : unit     ->  string           []
        //            abstract member LeerEventosTipos     : unit     -> (string * string) []
                    abstract member GuardarEstado       : int64         -> string ->  Eff<'H, unit>
                    abstract member GuardarAliado       : string        -> string ->  Eff<'H, unit>
                    abstract member ObtenerEstado       : unit          -> Eff<'H, (int64 * string) option>
                    abstract member ObtenerAliados      : unit          -> Eff<'H, string     [] >
                    abstract member LeerTransacciones   : unit          -> Eff<'H, Transaccion[] >
                    abstract member SalvarTransacciones : Transaccion[] -> Eff<'H, unit          >
        
            let guardarEstadoE   (nevento, serialModelo) = Reader.ask() >>= fun (h:#EstadoI<_>) -> h.GuardarEstado nevento serialModelo
            let obtenerEstado0E  ()                      = Reader.ask() >>= fun (h:#EstadoI<_>) -> h.ObtenerEstado    ()                  
            let obtenerAliadosE  ()                      = Reader.ask() >>= fun (h:#EstadoI<_>) -> h.ObtenerAliados   ()                  
            let guardarAliadoE   id json                 = Reader.ask() >>= fun (h:#EstadoI<_>) -> h.GuardarAliado    id json             
            let ultimoEstadoE    ()                      = Reader.ask() >>= fun (h:#EstadoI<_>) -> h.UltimoEstado     ()
            let leerTransaccsE   ()                      = Reader.ask() >>= fun (h:#EstadoI<_>) -> h.LeerTransacciones()
            let salvarTransaccsE ts                      = Reader.ask() >>= fun (h:#EstadoI<_>) -> h.SalvarTransacciones ts
        
            let aliadosPrevio = System.Collections.Generic.Dictionary<_,_>()
        
            let guardarAliados aliados = eff {
                let mutable first = true
                for (aliado:Aliado) in aliados do
                    let previoO = Dict.tryGetValue aliado.id aliadosPrevio
                    if previoO <> Some aliado then
                        if first then 
                            first <- false
                            printfn "previo = %A" previoO 
                            printfn "nuevo  = %A" aliado
                        do! aliado |> Serializer.serialize serAliado |> guardarAliadoE aliado.id.Id
                    if previoO.IsSome then aliadosPrevio.Remove aliado.id |> ignore
                    aliadosPrevio.Add(aliado.id, aliado)
                    ()
            }
        
            let actualizarAliadosPrevio aliados = eff {
                aliadosPrevio.Clear()
                for aliado in aliados do
                    aliadosPrevio.Add(aliado.id, aliado)
            }
        
            let guardarEstado nevento modelo = 
                eff {
                    let! trans = leerTransaccsE()
                    return!
                        { modelo with nevento = nevento ; aliados = Aliado.actualizarAliados trans modelo } 
                        |> EA.tee (fun e -> guardarAliados e.aliados)
                        |>> fun (modelo:Modelo) -> nevento, modelo |> Serializer.serialize serModelo
                        >>= guardarEstadoE
                }
        
            let private obtenerAliados () = eff {
                let! aliadoss = obtenerAliadosE()
                let  aliados  = aliadoss |> Array.choose (Serializer.deserializeWithDefs serAliado)
                do! actualizarAliadosPrevio aliados
                return aliados
            }
        
            let obtenerEstado00E() = eff {
                let! estadoPO = obtenerEstado0E()
                let! estadoSinAliados = 
                    estadoPO 
                    |> Option.map snd                                       
                    |> Option.map (Serializer.deserializeWithDefs serModelo)
                    |> Option.defaultValue  (Some modeloVacio)              
                    |> Result.ofOption  (fun () -> "Modelo no fue deserializado")
                    |> Rsl.ofResult
                let! aliados = obtenerAliados()
                //let! trans = leerTransaccsE()
                let  estado = { estadoSinAliados with aliados = aliados }
                //return { estado with aliados = Aliado.actualizarAliados trans estado } 
                return estado
            }
        
            let mutable private estadoActual : Modelo option = None
        
            let resetEstadoActual() = estadoActual <- None
        
            let obtenerEstado() = eff{
                let! estado = ultimoEstadoE()
                match estado, estadoActual with
                | Some n, Some e when n = e.nevento -> return e
                |_-> return! obtenerEstado00E() |>>! (fun e -> estadoActual <- Some e)
            }
        
            //let obtenerUsuario (aid: (_*_) []) : string =  aid 
                //|>  Seq.tryFind(fun (n,v) -> n = "http://schemas.microsoft.com/identity/aid/objectidentifier") 
                //|>  Option.map snd
                //|>  Option.defaultWith (fun () -> failwith "Usuario no autenticado")
        
            let obtenerAliadoEstado (aid:IdAliado) =
                obtenerEstado()
                |>> fun modelo -> 
                        modelo.aliados 
                        |> Array.tryFind (fun al -> al.id = aid ) 
                        |> Option.map (fun v -> v, modelo) 
                |> Rsl.absorbO (fun () -> "Aliado no fue encontrado")
        
            //let obtenerAliadoEstado    aid       = obtenerUsuario       aid |>  obtenerAliadoEstado0
            let obtenerAliado          aid       = obtenerAliadoEstado  aid |>> fst
            //let obtenerAliadoEstadoId (IdAliado id) = obtenerAliadoEstado id
            //let pairAliadoEstado       aid   ev  = obtenerAliadoEstado  aid |>> fun s -> s, ev
            //let pairAliado             aid   ev  = obtenerAliado        aid |>> fun a -> a, ev
        
            let obtenerSubModelo esAdmin (aliado:Aliado, modelo:Modelo) = 
                let buscar = Aliado.busqueda modelo.aliados
                if esAdmin then modelo else
                let subAliados = (if aliado.tipo = Master then buscar.descendientes else buscar.hijos) aliado
                { modelo with 
                    idAliado = aliado.id
                    aliados  = Array.append [| aliado |] subAliados 
                }
        
            let obtenerEstadoParaUsuario aid esAdmin =
                obtenerAliadoEstado aid
                |>> obtenerSubModelo esAdmin
        
        
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\other\AuthorizeNet\lib\AuthorizeNet.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Newtonsoft.Json\lib\netstandard2.0\Newtonsoft.Json.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
        
        module Authorize =
            open System
            open AuthorizeNet
            open AuthorizeNet.Api.Controllers
            open AuthorizeNet.Api.Contracts.V1
            open AuthorizeNet.Api.Controllers.Bases
        
            type AuthorizeI<'H>     = abstract execute : IApiOperation<'A, 'B> -> 'B
                                      abstract prepare : unit                  -> Eff<'H, unit>
        
            let authorizeMerchantId (aliado:Aliado) =
                match aliado.idForAuthorize with
                | Some v ->        v .Id                .Left(20)
                | None   -> aliado.id.Id.Replace("-","").Left(20)
        
            let executeE (controller: IApiOperation<_,_> ) = Reader.ask() |>> fun (h:#AuthorizeI<_>) -> h.execute controller
            let prepareE (                               ) = Reader.ask() >>= fun (h:#AuthorizeI<_>) -> h.prepare ()
            let inline executeGetResponse controller : Eff<_, 'b> = eff {
                let! response = executeE controller
                if response = null then 
                    return! Rsl.failf "%s Failed, Response = null" ( controller.GetType().Name )
                elif response.messages.resultCode = messageTypeEnum.Ok then
                    return response
                elif response.messages.message <> null then
                    return! Rsl.failf "%s Error: %s %s"  ( controller.GetType().Name ) response.messages.message.[0].code response.messages.message.[0].text
                else
                    return! Rsl.failf "%s Error: resultCode = %A, no messages" ( controller.GetType().Name ) response.messages.resultCode
            }
        
            let ( |*> ) request controllerF =
                prepareE()
                |>> fun () -> controllerF request
                >>= executeGetResponse 
        
            let ( >*= ) requestEf controllerF = 
                requestEf 
                >>= fun request -> request |*> controllerF
        
            let buscarPerfil aliado =
                getCustomerProfileRequest( merchantCustomerId  = authorizeMerchantId aliado ) 
                |*> getCustomerProfileController
                |>> fun response -> response.profile, match response.subscriptionIds with null -> [||] | v -> v
                
        
            let buscarIdAuthorize aliado =
                buscarPerfil aliado
                |>> fun (p,_) -> IdAuthorize p.customerProfileId
        
            let registrarAliadoNuevo (aliado:Aliado, paymentProfile : customerPaymentProfileType) =
                let email = aliado.contactos 
                            |> Seq.choose(function CorreoElectronico cor -> Some cor.email |_-> None) 
                            |> Seq.tryHead |> Option.defaultValue ""
                let customerProfile = 
                    customerProfileType(        merchantCustomerId  = authorizeMerchantId aliado
                                            ,   email               = email 
                                            ,   paymentProfiles     = [| paymentProfile |] )
                createCustomerProfileRequest(   profile             = customerProfile
                                            ,   validationMode      = validationModeEnum.liveMode )
                |*> createCustomerProfileController 
                |>> fun response -> response.customerPaymentProfileIdList.[0]
        
            let registrarPagoNuevo (IdAuthorize id, pp : customerPaymentProfileType) =
                createCustomerPaymentProfileRequest(customerProfileId = id
                                                ,   paymentProfile    = pp
                                                ,   validationMode    = validationModeEnum.liveMode)
                |*> createCustomerPaymentProfileController
                |>> fun response -> response.customerPaymentProfileId
        
            let pagoTipoTarjeta (tar:TarjetaCredito) =
                let creditCard = creditCardType(cardNumber      = tar.numero.Id
                                            ,   expirationDate  = tar.expiracion.Id               )
                paymentType( Item = creditCard ), tar.titular
        
            let pagoTipoCuenta  (cta:CuentaBancaria) =
                let  bankAccount = bankAccountType(  accountNumber   = cta.numero .Id
                                                ,   routingNumber   = cta.routing.Id
                                            //,   accountType     = bankAccountTypeEnum.checking
                                            //,   echeckType      = echeckTypeEnum.WEB
                                                ,   nameOnAccount   = cta.titular
                                                ,   bankName        = cta.banco)
                paymentType( Item = bankAccount  ), cta.titular
        
            let datosTitularO (aliado:Aliado) (titular:string) =
                aliado.contactos 
                |> Seq.tryPick(function | Direccion dir -> Some dir |_-> None)
                |> Option.map (fun direccion -> 
                    customerAddressType(firstName = (titular.Split ' ').[0]
                                    ,   lastName  = (titular.Split ' ' |> Seq.skip 1 |> String.concat " ")
                                    ,   address   = direccion.linea1
                                    ,   city      = direccion.ciudad
                                    ,   state     = direccion.estado    .ToString()
                                    ,   zip       = direccion.zonaPostal.ToString()
                                    ,   country   = direccion.pais      .ToString()
                                    )
                )
        
            let perfilPago (tipoPago: paymentType, titular: string) (aliado:Aliado) =
                datosTitularO aliado titular
                |> Option.map (fun datosTitular ->
                    aliado,
                    customerPaymentProfileType( payment = tipoPago
                                            ,   billTo  = datosTitular )
                )
        
            let registrarFormaPago (al, pp) =
                buscarIdAuthorize al
                |> Rsl.getResult
                >>= function
                    | Ok p -> registrarPagoNuevo   (p , pp)
                    |_     -> registrarAliadoNuevo (al, pp)
        
            let crearFormaPago aid (tipoPago: paymentType, titular : string) =
                ObtenerEstado.obtenerAliado aid
                |>> perfilPago (tipoPago, titular)
                |>  Rsl.absorbO (fun () -> "No se encontro direccion")
                >>= registrarFormaPago
        
            let registrarTarjeta         aid (tc:TarjetaCredito) =
                pagoTipoTarjeta tc
                |>  crearFormaPago aid
                |>> fun _ -> "Tarjeta registrada."
        
            let registrarCuenta          aid (cta: CuentaBancaria) =
                pagoTipoCuenta cta
                |>  crearFormaPago aid
                |>> fun _ -> "Cuenta registrada."
        
            let validarFormaPago         aid (IdPayment idp) =
                ObtenerEstado.obtenerAliado aid
                >>= buscarIdAuthorize
                |>> fun (IdAuthorize idm)  ->
                        validateCustomerPaymentProfileRequest(  customerProfileId        = idm
                                                            ,   customerPaymentProfileId = idp
                                                            ,   validationMode           = validationModeEnum.liveMode
                        )
                >*= validateCustomerPaymentProfileController
                |>> fun response -> response.directResponse
        
            let obtenerAliadoEstadoPerfilSubIds idAl =
                ObtenerEstado.obtenerAliadoEstado idAl
                >>= fun (al,md) ->
                        buscarPerfil al
                        |>> fun (pe,subIds) -> al, md, pe, subIds
        
            let getSubscription sid =
                ARBGetSubscriptionRequest(subscriptionId = sid, refId = sid)
                |*> ARBGetSubscriptionController
        
            let obtenerAliadoEstadoPerfilSubActivos idAl =
                obtenerAliadoEstadoPerfilSubIds     idAl
                >>= fun  (al : Aliado, md : Modelo, pe, subIds)  ->
                        subIds
                        |> traverseSeq getSubscription 
                        |>> Seq.filter (fun s -> s.subscription.status = ARBSubscriptionStatusEnum.active)
                        |>> fun subs -> (al, md, pe, subs)
        
            let obtenerAliadoEstadoPerfilSubActiva  idAl =
                obtenerAliadoEstadoPerfilSubActivos idAl
                |>> fun  (al : Aliado, md : Modelo, pe, subs)  ->
                        subs
                        |> Seq.tryHead
                        |> fun subO -> (al, md, pe, subO)
        
            let obtenerFormasDePagoId aid =
                obtenerAliadoEstadoPerfilSubActivos aid
                |>> fun (al, md, perfil, subs) ->
                        if perfil.paymentProfiles = null then [||] else perfil.paymentProfiles
                        |> Array.choose (fun pago ->
                            match pago.payment.Item with
                            | :? AuthorizeNet.Api.Contracts.V1.creditCardMaskedType as cc -> 
                                TarjetaCredito {
                                    titular       = pago.billTo.firstName + " " + pago.billTo.lastName
                                    tipoTarjeta   = TipoTarjeta.tryParse cc.cardType |> Option.defaultValue Visa
                                    numero        = NumeroTarjeta cc.cardNumber
                                    expiracion    = { anio = 0 ; mes = Mes.Enero}
                                } |> Some
                            | :? AuthorizeNet.Api.Contracts.V1.bankAccountMaskedType as ba -> 
                                CuentaBancaria {
                                    titular     = ba.nameOnAccount
                                    banco       = ba.bankName
                                    tipo        = match ba.accountType with
                                                    | AuthorizeNet.Api.Contracts.V1.bankAccountTypeEnum.businessChecking
                                                    | AuthorizeNet.Api.Contracts.V1.bankAccountTypeEnum.checking          -> Corriente
                                                    |_-> Ahorro
                                    numero      = NumeroCuenta  ba.accountNumber
                                    routing     = RoutingNumber ba.routingNumber
                                } |> Some
                            |_-> None
                            |> Option.map (fun cta ->
                                {
                                    nombre        = ""
                                    authorizeIdR  = pago.customerPaymentProfileId |> IdPayment |> Ok
                                    cuentaPago    = cta
                                    subscripcion  = subs 
                                                    |> Seq.tryFind(fun sub -> sub.subscription.profile.paymentProfile.customerPaymentProfileId = pago.customerPaymentProfileId)
                                                    |> Option.map (fun sub -> {
                                                        idSubscripcion = IdSubscription sub.refId 
                                                        monto          = int sub.subscription.amount
                                                        descripcion    =     sub.subscription.name
                                                        inicio         =     sub.subscription.paymentSchedule.startDate
                                                        status         = int sub.subscription.status
                                                    })
                                }
                            )
                        )
                |>  Rsl.getResult
                |>> Result.defaultValue [||]
        
        //    let obtenerFormasDePago aid =
        //        fun () -> ObtenerEstado.obtenerAliado aid
        //        >=> obtenerFormasDePagoId
        
            let obtenerFormasDePagoPara (alIds:_[]) = eff {
                let! fps =
                    alIds 
                    |> traverseSeq (fun id -> eff {
                        let! fp = obtenerFormasDePagoId id
                        return id, fp
                    })
                return fps |> Seq.toArray 
            }
        
            let crearSubscripcion aid (IdPayment idp) = 
                obtenerAliadoEstadoPerfilSubActiva aid 
                >>= fun  (al : Aliado, md : Modelo, pe, subO)  -> eff {
                        let start = DateTime(DateTime.Today.Year, DateTime.Today.Month, Aliado.dia al.diaPago)
                                    |> fun start -> if start < DateTime.Today               then start.AddMonths 1 else start
                                    |> fun start -> if start < al.fechaRegistro.AddMonths 1 then start.AddMonths 1 else start
                        let sub   = if subO.IsNone then 
                                        ARBSubscriptionType(
                                                amount                  = decimal md.premisas.montoAfiliacion
                                            ,   name                    = "Afiliacion Mensual Prozper"
                                            ,   paymentSchedule         = paymentScheduleType(  interval                    = paymentScheduleTypeInterval(length = int16 1, unit = ARBSubscriptionUnitEnum.months) 
                                                                                            ,   totalOccurrences            = int16 240
                                                                                            ,   startDate                   = start)
                                            ,   profile                 = customerProfileIdType(customerProfileId           = pe.customerProfileId
                                                                                            ,   customerPaymentProfileId    = idp)
                                        )
                                    else
                                        ARBSubscriptionType(
                                                amount                  = decimal md.premisas.montoAfiliacion
                                            ,   name                    = "Afiliacion Mensual Prozper"
                                            ,   profile                 = customerProfileIdType(customerProfileId           = pe.customerProfileId
                                                                                            ,   customerPaymentProfileId    = idp)
                                        )
                        return sub, subO
                    }
        
            let createSubscription sub =
                ARBCreateSubscriptionRequest(subscription = sub)
                |*> ARBCreateSubscriptionController
                |>> fun response -> response.subscriptionId
        
            let updateSubscription subId sub =
                ARBUpdateSubscriptionRequest(subscription = sub, subscriptionId = subId)
                |*> ARBUpdateSubscriptionController
                |>> fun _response -> subId
        
            let actualizarSubscripcion aid idp =
                crearSubscripcion aid idp
                >>= function
                    | subT, None     -> createSubscription           subT
                    | subT, Some sub -> updateSubscription sub.refId subT // usando refId para guardar subscriptionId
        
            let getBatchDetalles bid = 
                getTransactionListRequest(  batchId = bid )
                |*> getTransactionListController
                |>> fun response -> response.transactions
        
            let buscarPerfilPorProfileId pid =
                getCustomerProfileRequest(  customerProfileId = string pid )
                |*> getCustomerProfileController
                |>> fun response -> response.profile
        
            let getSubscriptions active =
                ARBGetSubscriptionListRequest(searchType = (if active then ARBGetSubscriptionListSearchTypeEnum.subscriptionActive else ARBGetSubscriptionListSearchTypeEnum.subscriptionInactive) )
                |*> ARBGetSubscriptionListController
                |>> fun response -> response.subscriptionDetails
                >>= traverseSeq (fun s -> buscarPerfilPorProfileId s.customerProfileId |>> (fun p -> s, p) )
        
            let cancelarSubscripcion sid =
                ARBCancelSubscriptionRequest(subscriptionId = sid)
                |*> ARBCancelSubscriptionController
        
            let borrarFormaPago aid (IdPayment idp) =
                obtenerAliadoEstadoPerfilSubActiva aid 
                >>= fun (al : Aliado, md : Modelo, pe, subO)  -> eff {
                        match subO with
                        | Some sub when sub.subscription.profile.paymentProfile.customerPaymentProfileId = idp -> 
                                let! _ = cancelarSubscripcion sub.refId
                                do!      Log.logf "Subscripcion cancelada %s" idp
                                return al
                        |_->    return al
                }
                >>= buscarIdAuthorize
                |>> fun (IdAuthorize idm)  ->
                        deleteCustomerPaymentProfileRequest(customerProfileId        = idm
                                                        ,   customerPaymentProfileId = idp
                        )
                >*= deleteCustomerPaymentProfileController
                |>> fun response -> "Forma de pago borrada."
        
            let toTransaccion aid (tr:transactionSummaryType) = {
                fechaPago   = tr.submitTimeLocal
                ano         = tr.submitTimeLocal.Year
                periodo     = tr.submitTimeLocal.Month
                monto       = int (tr.settleAmount * 100.00M)
                idAliado    = aid
                concepto    = ConceptoPago.Otro tr.accountNumber
                transaccion = tr.transId
                statusTran  = tr.transactionStatus
            }
        
            let obtenerTransacciones nO =
                let n = Option.defaultValue 0 nO
                getSettledBatchListRequest(  firstSettlementDate = System.DateTime.Today.AddMonths (-n-1) 
                                         ,   lastSettlementDate  = System.DateTime.Today.AddMonths (-n  ) )
                |*> getSettledBatchListController
                |>> fun response -> response.batchList
                >>= traverseSeq (fun b -> getBatchDetalles b.batchId |>> (fun ts -> b, ts) )
                |>> Seq.collect (snd >> Seq.filter(fun tr -> tr.subscription <> null || tr.profile <> null) )// >> Seq.map (toTransaccion <| IdAliado ""))
        
            let ResultToOption r = r |> Result.map Some |> Result.defaultValue None
            let getOption eff = Rsl.getResult eff |>> ResultToOption
        
            let actualizarTransacciones nO = eff {
                let! modelo   = ObtenerEstado.obtenerEstado()
                let! ts       = obtenerTransacciones nO
                let! perfs    = modelo.aliados |> traverseSeq (fun  al -> buscarPerfil al |>> (fun (p, subs) -> al, p, subs) |> getOption) |>> (Seq.choose id >> Seq.toArray)
                let  subs     = perfs          |> Seq.collect (fun (al,_   ,sbs) -> sbs |>  Seq.map (fun sb -> sb, al.id )   ) |>  Seq.toArray
                let  ids      = perfs          |> Seq.map     (fun (al,perf, _ ) ->        perf.customerProfileId, al.id     ) |>  Seq.toArray
                do!     ts 
                        |> Seq.choose(fun tr ->
                            if   tr.subscription <> null then subs |> Seq.tryFind (fst >> (=) (string tr.subscription.id   ) ) |> Option.map snd
                            elif tr.profile      <> null then ids  |> Seq.tryFind (fst >> (=) tr.profile.customerProfileId   ) |> Option.map snd
                            else None
                            |> Option.map (swap toTransaccion tr) )
                        |> Seq.toArray
                        |> ObtenerEstado.salvarTransaccsE
            }
        
            let obtenerTransaccionesPara aid isAdmin = eff {
                let! modelo   = ObtenerEstado.obtenerEstadoParaUsuario aid isAdmin
                let  aids     = modelo.aliados |> Seq.map(fun al -> al.id) |> Set
                let! ts       = ObtenerEstado.leerTransaccsE ()
                return ts |> Array.filter (fun tr -> aids |> Set.contains tr.idAliado)
            }
        
            let getSubscriptionTransactions () =
                getSettledBatchListRequest(  firstSettlementDate = System.DateTime.Today.AddMonths -1 
                                         ,   lastSettlementDate = System.DateTime.Now)
                |*> getSettledBatchListController
                |>> fun response -> response.batchList
                >>= traverseSeq (fun b -> getBatchDetalles b.batchId |>> (fun ts -> b, ts) )
                |>>(Seq.map   (fun (b,ts) -> b, ts |> Seq.filter(fun t -> t.subscription <> null) )
                 >> Seq.filter(fun (b,ts) ->    ts |> Seq.isEmpty |> not )
                   )
        
            let SubsYTransacciones () =
                getSubscriptionTransactions()
                |>> Seq.collect (fun (b, ts) -> ts |> Seq.map (fun t -> b, t))
                >>= fun ts -> eff {
                        let! subs = getSubscriptions true
                        return ts, subs 
                    }
                >>=! (fun (ts, subs) -> eff {
                        let orphans = ts |> Seq.filter(fun (b,t) -> subs |> Seq.exists (fun (s,p) -> s.id = t.subscription.id) |> not) |> Seq.toArray
                        for b, t in orphans do
                            do! Log.logf "Huerfano: %A" (
                                        b.batchId
                                        , t.accountNumber
                                        , t.accountType
                                        , t.firstName
                                        , t.lastName
                                        , t.settleAmount
                                        , t.subscription.id
                                        , t.subscription.payNum
                                        , t.transactionStatus
                                        , t.transId )
                    })
                |>> fun (ts, subs) ->  subs |> Seq.map(fun (sub,p) -> sub,p, ts |> Seq.filter (fun (b,t) -> t.subscription.id = sub.id) )
        
            //type H() =
            //    interface Rsl.Rsl<string>
            //    interface Log.Log<string>
            //    interface VariableAmbienteI with member __.getVar  v  = failwith "VariableAmbienteI.getVar not implemented"
            //    interface AuthorizeI<H>     with member __.execute c  = failwith "AuthorizeI<H>.Execute not implemented"
            //                                     member __.prepare () = failwith "AuthorizeI<H>.Prepare not implemented"
            //    interface EstadoI with
            //            member __.UltimoEvento      ()  = failwith "EstadoI.UltimoEvento not implemented"
            //            member __.UltimoEstado      ()  = failwith "EstadoI.UltimoEstado not implemented"
            //            member __.LeerEventos       p   = failwith "EstadoI.LeerEventos not implemented"
            //            member __.LeerTipos         ()  = failwith "EstadoI.LeerTipos not implemented"
            //            member __.LeerEventosTipos  ()  = failwith "EstadoI.LeerEventosTipos not implemented"
            //            member __.GuardarEstado     p q = failwith "EstadoI.GuardarEstado not implemented"
            //            member __.GuardarAliado     p q = failwith "EstadoI.GuardarAliado not implemented"
            //            member __.ObtenerEstado     ()  = failwith "EstadoI.ObtenerEstado not implemented"
            //            member __.ObtenerAliados    ()  = failwith "EstadoI.ObtenerAliados not implemented"
        
            let voidTransaction tid =
                transactionRequestType(transactionType = "voidTransaction", refTransId = tid)
                |>  fun trt -> createTransactionRequest(transactionRequest = trt)
                |*> createTransactionController
        
            let obtenerTransaccionesReq aid req =
                req
                |*>  getTransactionListForCustomerController
                |>>  fun resp ->
                        if resp.transactions = null then [||] else 
                        resp.transactions
                        |> Array.map (toTransaccion aid)
        
            let obtenerTransaccionesAliado aid =
                ObtenerEstado.obtenerAliado aid
                >>=  buscarPerfil
                >>=! fun (perfil,_) -> Log.logf "Perfil: %A %A %A" perfil.customerProfileId perfil.description perfil.email
                |>>  fun (perfil,_) -> getTransactionListForCustomerRequest( customerProfileId = perfil.customerProfileId)
                >>=  obtenerTransaccionesReq aid
        
            let xobtenerTransaccionesForPayment aid pid =
                ObtenerEstado.obtenerAliado aid
                >>=  buscarPerfil
                >>=! fun (perfil,_) -> Log.logf "Perfil: %A %A %A" perfil.customerProfileId perfil.description perfil.email
                |>>  fun (perfil,_) -> getTransactionListForCustomerRequest( customerProfileId = perfil.customerProfileId, customerPaymentProfileId = pid)
                >>=  obtenerTransaccionesReq aid          
        
            let xxobtenerTransaccionesPara aid = eff {
                let! perfil, subs = ObtenerEstado.obtenerAliado aid >>= buscarPerfil
                let! ats = getSubscriptionTransactions ()
                let! ts2 = obtenerTransaccionesAliado aid
                let  ts  = ats |> Seq.collect( fun (a,ts) -> ts) 
                return 
                    ts
                    |> Seq.filter (fun tr -> subs |> Seq.contains (string tr.subscription.id) )
                    |> Seq.map (toTransaccion aid)
                    |> Seq.append ts2
                    |> Seq.toArray
            }
        
        
         [< JavaScript >]
        type DataEvento =
        | AgregarAliados            of (Aliado[]                                                   )
        | AgregarAliado             of (Aliado                                                     )
        | InvitarPotencialesAliados of (IdAliado * string []                                       )
        | RegistroNuevo             of (IdAliado * DatosPersonales * IdAliado option * Contacto [] )
        | ActualizarDatosPersonales of (IdAliado * DatosPersonales                                 )
        | ActualizarContactos       of (IdAliado * Contacto  []                                    )
        //| ActualizarFormasPago      of (IdAliado * FormaPago []                                    )
        | CorreoVerificacionEnviado of (IdAliado * string                                          )
        | CorreoVerificado          of (IdAliado * string                                          )
        //| ActualizarAuthorizeId     of (IdAliado * Result<IdAuthorize, string>                     )
        //| ActualizarPagoAuthorizeId of (IdAliado * CuentaPago * Result<IdPayment, string>          )
        | ActualizarStatusPadre     of (IdAliado * StatusAliado * (IdAliado option) * string option)
        | ActualizarArchivos        of (IdAliado * Archivo []                                      )
        
        [< JavaScript >]
        type Evento = {
            nevento : int64
            aliadoO : IdAliado option
            data    : DataEvento
        }
        
        [< JavaScript >]
        type Respuesta =
        | ROk
        | NuevoRegistro        of string
        | Mensaje              of string
        
        module Eventos =
        
            type TipoDatos = TipoDatos of nombre:string * tipos:string
        
            type ResultadoManejador<'H> = Modelo -> Eff<'H, Modelo * Respuesta>
        
            type ObjetoDatos<'T> = {
                tipoDatos : TipoDatos
                datos     : 'T
            }
        
            type ManejadorDatos<'T, 'H> = {
                tipoDatos  : TipoDatos
                manejadorF : ObjetoDatos<'T> -> ResultadoManejador<'H>
            }
        
            type EventosI<'H> =
                abstract ManejadorGenerico    : ObjetoDatos<obj> -> ResultadoManejador<'H>
                abstract GuardarArchivo<'H>   : Archivo          -> Eff<'H, unit>
                abstract ObtenerListaDocs<'H> : IdAliado         -> Eff<'H, Archivo     []>
        
            let manejadorGenericoE msg modelo    = Reader.ask() >>= fun (h:#EventosI<_>) -> h.ManejadorGenerico msg modelo
            let guardarArchivo (archivo:Archivo) = Reader.ask() >>= fun (h:#EventosI<_>) -> h.GuardarArchivo archivo
            let obtenerListaDocs  alid           = Reader.ask() >>= fun (h:#EventosI<_>) -> h.ObtenerListaDocs alid                 
        
            let xManejadores<'H> = System.Collections.Generic.Dictionary<TipoDatos, ManejadorDatos<obj,'H>>()
        
            let deDatosGen (msg: ObjetoDatos<obj>) : ObjetoDatos<_> = {
                tipoDatos = msg.tipoDatos
                datos     = unbox msg.datos
            }    
        
            let xregistrarManejador nombre (manejadorF:ObjetoDatos<'T> -> ResultadoManejador<_>) =
                let manejador  = {
                    tipoDatos  = TipoDatos (nombre, typeof<'T> |> getTypeName) |>! print
                    manejadorF = deDatosGen >> manejadorF
                }
                xManejadores.Add(manejador.tipoDatos, manejador )
        
            let genManejador nombre (manejadorF:'T -> ResultadoManejador<_>) = {
                tipoDatos  = TipoDatos (nombre, typeof<'T> |> getTypeName) |>! print
                manejadorF = deDatosGen >> (fun oDatos -> manejadorF oDatos.datos)
            }
        
            let xregistrarManejadorf nombre (manejadorF:'T -> ResultadoManejador<_>) =
                xregistrarManejador  nombre (fun oDatos -> manejadorF oDatos.datos)
        
            //let xmanejadorGenerico (msg:ObjetoDatos<obj>) : ResultadoManejador<_> =
            //    match Manejadores.TryGetValue msg.tipoDatos with
            //    | false, _         -> failwithf "No Handler for message: %A \n handlers: [%s]" msg (Manejadores.Keys |> Seq.map (sprintf "%A") |> String.concat "\n")
            //    | true , manejador -> manejador.manejadorF msg
        
            let addNewAliados (als1: Aliado []) (als2: Aliado []) : Aliado [] =
                als1 |> Seq.filter(fun a -> als2 |> Seq.exists (fun b -> a.id = b.id ) |> not ) |> Seq.append als2 |> Seq.toArray
        
            let registroNuevo (idA, datos:DatosPersonales, padre, contactos) (modelo: Modelo) : Eff<'H,Modelo * Respuesta> = eff {
                match   contactos
                        |> Seq.tryPick(function CorreoElectronico email -> Some email |_-> None ) with
                | None        -> return! sprintf "No se encontro Correo Electronico: %A" datos |> Error |> Rsl.ofResult
                | Some correo ->
                if  modelo.aliados
                    |> Seq.exists(fun al ->
                        al.contactos
                        |> Seq.exists(function CorreoElectronico correo2 -> correo = correo2 |_-> false ) 
                    )
                    then return! sprintf "Correo Electronico ya esta registrado: %A" correo |> Error |> Rsl.ofResult
                else
                if modelo.aliados |> Seq.exists (fun al -> al.id = idA) 
                    then return! sprintf "Id ya esta en uso: %A" idA                        |> Error |> Rsl.ofResult
                else
                let now = System.DateTime.Now
                let aliado = {
                    datosPersonales =  datos
                    id              =  idA
                    idPadreO        =  padre
                    idForAuthorize  =  None
                    influyente      =  None
                    contactos       =  contactos
                    identificacion  =  [||]
                    isInternal      =  false
                    status          =  CuentaCreada
                    tipo            =  Regular
                    fechaRegistro   =  now
                    fechaStatus     =  now
                    diaPago         =  Dia01
                    nReferidos      =  0
                    nRefActivos     =  0
                    nDescendientes  =  0
                    nDescActivos    =  0
                    comision        =  0
                    nivel           =  0
                    documentos      =  0
                    docPendientes   =  0
                }
                return
                    { modelo with aliados = Array.append modelo.aliados [| aliado |] }
                ,   [ datos.nombre1 ; datos.nombre2 ; datos.apellido1 ; datos.apellido2 ] 
                    |> String.concat " "
                    |> NuevoRegistro  
            }
        
            let cambiaAliado ida   f (modelo:Modelo) = { modelo with aliados    = modelo.aliados          |> Array.map (fun al -> if al.id = ida then f al else al )}
            let cambiaCorreo email f (aliado:Aliado) = { aliado with contactos  = aliado.contactos        |> Array.map (function CorreoElectronico c when c.email = email -> f c |> CorreoElectronico | co -> co )}
            //let cambiaFormaPago cp f (aliado:Aliado) = { aliado with formasPago = aliado.formasPago.Value |> Array.map (fun fp -> if fp.cuentaPago = cp then f fp else fp ) }
            let cambiaStatusCorreo ida email f = cambiaAliado ida (cambiaCorreo email  f)
        
            let actualizarDatosPersonales (idA, datos:DatosPersonales) (modelo: Modelo) : Eff<_,Modelo * Respuesta> = eff {
                return
                    cambiaAliado idA (fun al -> { al with datosPersonales = datos }) modelo
                ,   Mensaje <| "Datos personales actualizados!" 
            }
        
            //let actualizarAuthorizeId   (idA, authorizeIdR) (modelo: Modelo) : Eff<_,Modelo * Respuesta> = eff {
            //    return
            //        cambiaAliado idA (fun al -> { al with authorizeIdR = authorizeIdR }) modelo
            //    ,   Mensaje <| "AuthorizeId actualizada" 
            //}
        
            //let actualizarPagoAuthorizeId (idA, cuenta, paymentIdR : Result<IdPayment, string> )  (modelo: Modelo) : Eff<_,Modelo * Respuesta> = eff {
            //    return
            //        cambiaAliado idA (cambiaFormaPago cuenta (fun fp -> { fp with authorizeIdR = paymentIdR }) ) modelo
            //    ,   Mensaje <| "AuthorizeId actualizada" 
            //}
        
            let actualizarContactos (idA, contactos:Contacto[]) (modelo: Modelo) : Eff<_,Modelo * Respuesta> = eff {
                return
                    cambiaAliado idA (fun al -> { al with contactos = contactos }) modelo
                ,   Mensaje <| "Contactos actualizados!" 
            }
        
            let actualizarStatusPadre (idA, status:StatusAliado, padreO:IdAliado option, inflO :  string option) (modelo: Modelo) : Eff<_,Modelo * Respuesta> = eff {
                return
                    cambiaAliado idA (fun al -> { al with status = status ; idPadreO = padreO ; influyente = inflO }) modelo
                ,   Mensaje <| "status actualizados!" 
            }
        
            //let actualizarFormasPago (idA, formasPago:FormaPago[]) (modelo: Modelo) : Eff<_,Modelo * Respuesta> = eff {
            //    return
            //        cambiaAliado idA (fun al -> { al with formasPago = formasPago }) modelo
            //    ,  Mensaje <| "Formas de pago actualizadas!" 
            //}
        
            let agregarAliado  aliado  modelo = eff { return { modelo with Modelo.aliados = addNewAliados [| aliado  |] modelo.aliados }, ROk }
            let agregarAliados aliados modelo = eff { return { modelo with Modelo.aliados = addNewAliados    aliados    modelo.aliados }, ROk }
        
            let correoVerificacionEnviado (ida, correo)  (modelo: Modelo) : Eff<_,Modelo * Respuesta> = eff {
                return
                    cambiaStatusCorreo ida correo (fun c -> { c with enviado = Some System.DateTime.Now }) modelo
                ,   ROk
            }
        
            let correoVerificado          (ida, correo)  (modelo: Modelo) : Eff<_,Modelo * Respuesta> = eff {
                return
                    cambiaStatusCorreo ida correo (fun c -> { c with recibido = Some System.DateTime.Now }) modelo
                ,   ROk
            }
        
            let actualizarEstado (modelo: Modelo, evento: Evento) = eff {
                if modelo.nevento <> -1L && modelo.nevento + 1L <> evento.nevento then 
                    failwithf "Evento fuera de secuencia: %d %d" modelo.nevento evento.nevento
                let case, tuple, data = DiscUnion.caseTuple evento.data
                let objData           = {
                    tipoDatos         = TipoDatos(case, tuple |> getTypeName)
                    datos             = data
                }
                return! manejadorGenericoE objData modelo
            }
        
            let actualizarArchivos (idA:IdAliado, archivos:Archivo[]) (modelo: Modelo) : Eff<_,Modelo * Respuesta> = eff {
                for ar in archivos do
                    do! guardarArchivo ar
                let! ars  = obtenerListaDocs idA
                let  n    = ars.Length
                let  p    = ars |> Seq.filter (fun d -> d.status = Subido || d.status = Cambiado) |> Seq.length
                return
                    cambiaAliado idA (fun al -> { al with documentos = n ; docPendientes = p }) modelo
                ,   Mensaje <| "Archivos actualizados!" 
            }
        
        
            let eventoNoImplementado ev (modelo: Modelo) : Eff<_,Modelo * Respuesta> = eff {
                return! sprintf "Evento no Implementado: %A" ev |> Error |> Rsl.ofResult
            } 
        
            let invitarPotencialesAliados ev = eventoNoImplementado ev
        module SerializadorEventos =
            open Serializador
            open Serializer
            open System
        
            open FSharp.Reflection
        
            let serObject : Ser<obj> = (fun o -> o.GetType().ToString() |> sprintf "%A"), (fun _ -> None)
        
            let serSerializadoresEventos =
                let sers = System.Collections.Generic.Dictionary<_,_>()
                [
                    serObj         serObject
                    serObj         serString
                    serObj         serAliado
                    serObj         serIdAliado
                    serObj         serIdAuthorized
                    serObj (serOpt serIdAliado )
                    serObj (serArr serContacto )
                    serObj (serArr serFormaPago)
                    serObj (serArr serAliado   )
                    serObj (serArr serString   )
                    serObj         serDatosPersonales
                    serObj         serIdAuthorizedR
                    serObj         serCuentaPago
                    serObj         serIdPaymentR
                    serObj (serArr serArchivo  )
                ] |> Seq.iter sers.Add
                sers
        
            let rec registrarSerializadorParaTipos (ts:System.Type []) =
                if Seq.length ts <= 1 then () else
                let tupleType = FSharpType.MakeTupleType ts
                let tname     = getTypeName tupleType
                if serSerializadoresEventos.ContainsKey tname then () else
                let sers      = ts |> Array.map (fun t ->   let tname = getTypeName  t
                                                            serSerializadoresEventos 
                                                            |> Dict.tryGetValue tname 
                                                            |> Option.defaultWith (fun () -> failwithf "Serializador no encontrado: %s" tname) )
                let getValues = FSharpValue.PreComputeTupleReader      tupleType
                let setValues = FSharpValue.PreComputeTupleConstructor tupleType
                let serC    v = Seq.zip (getValues v) sers
                                |> Seq.map (fun (vi, seri) -> fst seri vi )
                                |> String.concat ", "
                                |> sprintf "[%s]"
                let deserC (j:JsonIntermediate) = 
                                match j.tryArray () with
                                | None -> None
                                | Some js -> 
                                Array.zip js sers
                                |> Array.choose (fun (ji, seri) -> snd seri ji)
                                |> setValues
                                |> Some
                serSerializadoresEventos.Add(tname, (serC, deserC))
        
            and registrarSerializadoresParaDU (ttype:System.Type) =
                FSharpType.GetUnionCases ttype
                |> Seq.iter(fun case ->
                    let ts = case.GetFields() |> Array.map(fun p -> p.PropertyType) 
                    ts |> Seq.iter registrarSerializadorPara 
                    ts |> registrarSerializadorParaTipos
                )
        
            and registrarSerializadorPara (ttype:System.Type) =
                let tname = getTypeName ttype
                if serSerializadoresEventos.ContainsKey tname then () else
                if   FSharpType.IsUnion ttype then 
                    registrarSerializadoresParaDU ttype
                    if serSerializadoresEventos.ContainsKey tname then () else
                    let ser = Serializer.serDUt (Seq.zip serSerializadoresEventos.Keys serSerializadoresEventos.Values) ttype
                    serSerializadoresEventos.Add(tname, ser)
                elif FSharpType.IsTuple ttype then
                    let ts = FSharpType.GetTupleElements ttype
                    ts |> Seq.iter registrarSerializadorPara
                    registrarSerializadorParaTipos ts
                else
                    failwithf "Could not register serializer for: %s" tname
        
            registrarSerializadorPara typeof<DataEvento>
        
            let obtenerSerializador tipoEvento = 
                serSerializadoresEventos 
                |> Dict.tryGetValue tipoEvento
                |> Option.defaultWith (fun () -> failwithf "Could not find deserializer for %s" tipoEvento)
        
        
            let registrarF add evento (f : 'T -> Eventos.ResultadoManejador<_>) =
                Eventos.genManejador evento f |> add
                registrarSerializadorPara typeof<'T>
        
            //open CodigoGenerado
        
        //    let chequearEventosEnBD et =
        //        match et with
        //        | ActualizarDatosPersonales_V0  v -> Eventos.actualizarDatosPersonales  v
                //| ActualizarFormasPago_V0       v -> Eventos.actualizarFormasPago       v
                //| AgregarAliado_V1              v -> Eventos.agregarAliado              v
                //| RegistroNuevo_V1              v -> Eventos.registroNuevo              v
                //| CorreoVerificacionEnviado_V0  v -> Eventos.correoVerificacionEnviado  v
        
            let chequearEventos ev =
                match ev with
                | AgregarAliado                 v -> Eventos.agregarAliado              v
                | AgregarAliados                v -> Eventos.agregarAliados             v
                | RegistroNuevo                 v -> Eventos.registroNuevo              v
                | ActualizarDatosPersonales     v -> Eventos.actualizarDatosPersonales  v
                | ActualizarContactos           v -> Eventos.actualizarContactos        v
                //| ActualizarFormasPago          v -> Eventos.actualizarFormasPago       v
                | CorreoVerificacionEnviado     v -> Eventos.correoVerificacionEnviado  v
                | CorreoVerificado              v -> Eventos.correoVerificado           v
                | InvitarPotencialesAliados     v -> Eventos.invitarPotencialesAliados  v
                //| ActualizarAuthorizeId         v -> Eventos.actualizarAuthorizeId      v
                //| ActualizarPagoAuthorizeId     v -> Eventos.actualizarPagoAuthorizeId  v
                | ActualizarStatusPadre         v -> Eventos.actualizarStatusPadre      v
                | ActualizarArchivos            v -> Eventos.actualizarArchivos         v
        
            let registrarEventos add =
                registrarF add "AgregarAliado"             Eventos.agregarAliado
                registrarF add "AgregarAliados"            Eventos.agregarAliados
                registrarF add "RegistroNuevo"             Eventos.registroNuevo
                registrarF add "ActualizarDatosPersonales" Eventos.actualizarDatosPersonales
                registrarF add "ActualizarContactos"       Eventos.actualizarContactos
                //registrarF add "ActualizarFormasPago"      Eventos.actualizarFormasPago
                registrarF add "CorreoVerificacionEnviado" Eventos.correoVerificacionEnviado
                registrarF add "CorreoVerificado"          Eventos.correoVerificado
                registrarF add "InvitarPotencialesAliados" Eventos.invitarPotencialesAliados
                //registrarF add "ActualizarAuthorizeId"     Eventos.actualizarAuthorizeId
                //registrarF add "ActualizarPagoAuthorizeId" Eventos.actualizarPagoAuthorizeId
                registrarF add "ActualizarStatusPadre"     Eventos.actualizarStatusPadre
                registrarF add "ActualizarArchivos"        Eventos.actualizarArchivos
        
            //SQLServer.leerTipos()
            //|> Seq.iter (fun t ->
            //    if serSerializadoresEventos.ContainsKey t |> not then
            //        failwithf "Serializador no encontrado para tipo %s" t
            //)
        //
            //SQLServer.leerEventosTipos()
            //    |> Seq.iter (fun t ->
            //    if Eventos.TipoDatos t |> Eventos.Manejadores.ContainsKey |> not then
            //        failwithf "Manejador no encontrado para evento %A" t
            //)
        
        
        module Correo = 
            open System.IO
            open WebSharper.UI.Server
        
            type EmailI<'H> = abstract member SendEmail : string -> string -> string -> Eff<'H, unit>
            let sendEmail (recipiente:string) (tema:string) (contenido:string)  = Reader.ask() >>= fun (h:#EmailI<'H>) -> h.SendEmail recipiente tema contenido
        
            let dummyCtxE() =
                carpetaRaiz()
                |>> fun raiz ->
                        { new WebSharper.Web.Context() with
                            member this.RootFolder      = raiz
                            member this.RequestUri      = failwith "Unsupported"
                            member this.UserSession     = failwith "Unsupported"
                            member this.Environment     = failwith "Unsupported"
                            member this.Json            = failwith "Unsupported"
                            member this.Metadata        = failwith "Unsupported"
                            member this.Dependencies    = failwith "Unsupported"
                            member this.ApplicationPath = failwith "Unsupported"
                            member this.ResourceContext = failwith "Unsupported" }
        
            let prepareHtml (doc:Doc) =
                dummyCtxE()
                |>> fun dummyCtx ->
                        use tw  = new StringWriter()
                        use w   = new Core.Resources.HtmlTextWriter(tw, " ")        
                        doc.Write(dummyCtx, w, false)
                        tw.ToString()
        
            open WebSharper.UI.Templating
         
            let [< Literal >] TemplatesCorreos = @"Correos.html" 
            type TemplateCorreo = Template<TemplatesCorreos, serverLoad = ServerLoad.PerRequest>
        
            let hostE() = variableAmbienteE "Website" |>> sprintf "https://%s"
        
            let SendGridAPIKey = ""
         
            let enviarCorreoInvitacion tema (IdAliado idPadre) (email:string)= 
                hostE()
                |>> fun host ->
                        TemplateCorreo.Invitacion() 
                            .Logo(   TemplateCorreo.Logo().Doc()    )
                            .Host( host                           )
                            .IdPadre(idPadre                        )
                            .Doc()
                >>= prepareHtml
                >>= sendEmail email tema
        
            let enviarCorreosInvitacion (tema, padre, emails:string[]) = eff {
                for email in emails do
                    do! enviarCorreoInvitacion tema padre email
            }
        
            let enviarBienvenida (aliado:Aliado) (correo:CorreoElectronico) =
                let sufijo = match aliado.datosPersonales.genero with Femenino -> "a" |_-> "o"
                let nombre = Aliado.nombre2 aliado.datosPersonales
                let tema   = sprintf "Prozper le da la bienvenida"
                hostE()
                |>> fun host ->
                        TemplateCorreo.Bienvenida()
                                .Logo(   TemplateCorreo.Logo().Doc())
                                .Host(          host                )
                                .Sufijo(        sufijo              )
                                .NombreAfiliado(nombre              )
                                .Doc()
                >>= prepareHtml
                >>= sendEmail correo.email tema
                //CorreoVerificacionEnviado (aliado.id, correo.email)
                //|> EstadoActual.agregarEventoServer
        
            let enviarVerificacionCorreo (aliado:Aliado) (correo:CorreoElectronico) =
                WebSharper.UI.Html.div [] [ WebSharper.UI.Html.text "CORREO CONTENIDO" ]
                |>  prepareHtml
                >>= sendEmail correo.email "Verificacion de Correo"
                //CorreoVerificacionEnviado (aliado.id, correo.email)
                //|> EstadoActual.agregarEventoServer
        
        
        
        module ManejadorEventos =
            //open ObtenerEstado
        
            type ManejadorI<'H> =
                abstract member NuevoEvento<     'H> : string   -> string -> string -> string -> Eff<'H, int64         >
                abstract member UltimoEvento<    'H> : unit     ->                               Eff<'H, int64 option  >
                abstract member EnviarMensaje<   'H> : string   -> string -> string -> string -> Eff<'H, unit          >
        
            let nuevoEvento   (usuario:string) (nombre:string) (evento:string) (tipo:string) = Reader.ask() >>= fun (h:#ManejadorI<'H>) -> h.NuevoEvento usuario nombre evento tipo
            let enviarMensaje (d:string) (r:string) (t:string) (c:string)                    = Reader.ask() >>= fun (h:#ManejadorI<'H>) -> h.EnviarMensaje d r t c                 
        
            type SerialEvento = {
                nombre  : string
                tipo    : string
                json    : string
                data    : obj
            }
        
            type SerialEventoU = {
                usuario   : string
                serEvento : SerialEvento
            }
        
            type SerialEventoN = {
                nevento    : int64
                serEventoU : SerialEventoU
            }
        
            let deserializarEvento (serEvento : SerialEvento) =
                let ser = SerializadorEventos.obtenerSerializador serEvento.tipo
                match Serializer.deserializeWithDefs ser serEvento.json with
                | Some data -> data
                | None      -> failwithf "No se pudo deserializar el Evento: %A" serEvento
        
            let manejadorGenerico msg = 
                ObtenerEstado.obtenerEstado()
                >>= fun estadoO -> 
                        Eventos.manejadorGenericoE msg estadoO
                        |>  Rsl.getResult
                        |>> function 
                            | Ok (estadoN, r) -> estadoN, Ok    r
                            | Error m         -> estadoO, Error m
        
            let serialN2serialU (serEventoN: SerialEventoN) = serEventoN.serEventoU
        
            let serialU2TipoDatos (serEventoU: SerialEventoU) =
                {
                    Eventos.tipoDatos = Eventos.TipoDatos(serEventoU.serEvento.nombre, serEventoU.serEvento.tipo)
                    Eventos.datos     = serEventoU.serEvento.data
                }
        
            let evento2TipoDatos (evento:Evento) =
                let case, tuple, data = DiscUnion.caseTuple evento.data
                {
                    Eventos.tipoDatos = Eventos.TipoDatos(case, tuple |> getTypeName)
                    Eventos.datos     = data
                }
        
            let separarEstado (modeloI:Modelo, eventoSerialN : SerialEventoN) oR =  
                let modelo = oR |> Result.map fst |> Result.defaultValue modeloI
                let resp   = oR |> Result.map snd
                { modelo with nevento = eventoSerialN.nevento }, resp
        
            let ejecutarEventoSerial ev =
                ev
                |> serialN2serialU 
                |> serialU2TipoDatos
                |> manejadorGenerico
                >>= EA.tee (fst >> ObtenerEstado.guardarEstado ev.nevento)
                |>> snd
                |>  Rsl.absorbR
        
            let guardarEventoSerialU (serEventoU :  SerialEventoU) = 
                nuevoEvento
                    serEventoU.usuario
                    serEventoU.serEvento.nombre
                    serEventoU.serEvento.json
                    serEventoU.serEvento.tipo
        
            let serializarDataEvento (evento : DataEvento) =
                let  name, ttype, obj = DiscUnion.caseTuple evento
                let  tname            = ttype |> getTypeName
                let  ser              = SerializadorEventos.obtenerSerializador tname
                {   nombre            = name
                    tipo              = tname
                    json              = fst ser obj
                    data              = obj
                }
        
            let guardarEventoSerial  serEventoU =
                guardarEventoSerialU serEventoU
                |>> fun nevento  -> { nevento = nevento ; serEventoU = serEventoU }
        
            let serializarEvento (evento:Evento) =
                evento.aliadoO 
                |> Option.map(fun (IdAliado usuario) -> { usuario = usuario ; serEvento  = serializarDataEvento evento.data })
                |> Result.ofOption (fun () -> sprintf "Aliado es Nulo para evento %A" evento)
                |> Rsl.ofResult
        
            let intentarEventoSerial ev =
                serialU2TipoDatos ev
                |>  manejadorGenerico
                |>> snd
                |>  Rsl.absorbR
                |>> ignore
        
            let ejecutarEventoNuevo ev =
                serializarEvento ev
                >>= EA.tee intentarEventoSerial
                >>= guardarEventoSerial
                >>= fun inp ->
                        ejecutarEventoSerial inp
                        >>= EA.tee (fun out ->  enviarMensaje "" inp.serEventoU.usuario (sprintf "%A" out) "")
        
            let ejecutarDataEventoNuevo  claims de =
                ObtenerEstado.obtenerAliado claims
                |>> fun al ->
                        {
                            Evento.nevento = 0L
                            Evento.aliadoO = Some al.id
                            data           = de
                        }
                >>= ejecutarEventoNuevo
        
            let obtenerClaim claim claims =
                claims 
                |>  Array.tryFind(fun (n,v) -> n = claim) 
                |>  Option.map snd
        
            let enviarBienvenida aid = 
                ObtenerEstado.obtenerAliado aid
                >>= fun (aliado:Aliado) -> eff {
                    for contacto in aliado.contactos do
                        match contacto with
                        | CorreoElectronico correo -> 
                            match correo.enviado with
                            | None -> do! Correo.enviarBienvenida aliado correo
                            |_-> ()
                        | _ -> ()
                }
                
            let crearRegistroNuevo (aid:IdAliado) claims (modelo:Modelo) = eff {
                if  aid.Id    = "admin" || (modelo.aliados |> Array.exists (fun al -> al.id = aid)) then return None else
                let datos     = 
                    { Default.value<DatosPersonales> with 
                        nombre1         = claims |> obtenerClaim "given_name"                                              |> Option.defaultValue ""
                        apellido1       = claims |> obtenerClaim "family_name"                                             |> Option.defaultValue ""
                        fechaNacimiento = claims |> obtenerClaim "extension_DateOfBirth" |> Option.bind ParseO.parseDateO2 |> Option.defaultValue System.DateTime.MinValue
                    }
                let correo    = 
                    { Default.value<CorreoElectronico> with 
                        email           = claims |> obtenerClaim "emails" |> Option.defaultValue ""
                    }
                let direccion    = 
                    { Default.value<Direccion> with 
                        linea1          = claims |> obtenerClaim "streetAddress" |> Option.defaultValue ""
                        ciudad          = claims |> obtenerClaim "city"          |> Option.defaultValue ""
                        estado          = claims |> obtenerClaim "state"         |> Option.bind Estado    .tryParse |> Option.defaultValue (OtroS      "")
                        zonaPostal      = claims |> obtenerClaim "postalCode"    |> Option.bind ZonaPostal.tryParse |> Option.defaultValue (ZonaPostal "")
                        pais            = claims |> obtenerClaim "country"       |> Option.bind Pais      .tryParse |> Option.defaultValue (OtroP      "")
                        authorizeIdR    = Error ""
                    }
                let contactos = [| CorreoElectronico correo ; Direccion direccion |]
                let referidoPor = 
                    claims 
                    |> obtenerClaim "referidoPor" 
                    |> Option.bind (function "" -> None | s -> Some s)
                    |> Option.bind (fun ref -> modelo.aliados |> Seq.tryFind(fun padre -> padre.id.Id = ref))
                    |> Option.map  (fun padre -> padre.id)
                do! Log.logf "referidoPor = %A" referidoPor
                //Correo.enviarBienvenida aliado // (**) mover afuera
                return Some
                    {
                        Evento.nevento = 0L
                        Evento.aliadoO = Some aid
                        data           = DataEvento.RegistroNuevo(aid, datos, referidoPor, contactos)
                    }
            }
        
            let agregarUsuarioSiEsNuevo claims1 claims =
                ObtenerEstado.obtenerEstado()
                >>= crearRegistroNuevo claims1 claims        
                |>  bindO ejecutarEventoNuevo                
                |>  bindO (fun _ -> enviarBienvenida claims1)
                |>  bindO (Log.logf "agregarUsuarioSiEsNuevo: %A")
                |>> Option.iter id
        
            let obtenerListaDocs aid = eff {
                let! al = ObtenerEstado.obtenerAliado aid
                return!   Eventos.obtenerListaDocs al.id
            }
        
            let obtenerInfluyente (inf:string) =
                ObtenerEstado.obtenerEstado()
                |>> fun es -> 
                        let infO = Some (inf.Trim().ToLower())
                        es.aliados 
                        |> Seq.tryFind (fun al -> al.influyente = infO )
                        |> Result.ofOption (fun () -> sprintf "Influyente no encontrado : %s" inf)
                |>  Rsl.absorbR
        
            let obtenerIdInfluyente inf =
                obtenerInfluyente   inf
                |>> fun al -> al.id.Id
        
        
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper/WindowsAzure.Storage/lib/net45/Microsoft.WindowsAzure.Storage.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper/Newtonsoft.Json/lib/net45/Newtonsoft.Json.dll"
        module Azure =
            open System
            open System.IO
        //    open Microsoft.Azure
        //    open Microsoft.Azure.Storage
        //    //open Microsoft.Azure.Storage.Table
        //    open Microsoft.Azure.Storage.Queue
        //    open Microsoft.Azure.Storage.Blob
        //    open Microsoft.Azure.Storage.Core
            open Microsoft.WindowsAzure.Storage
            open Microsoft.WindowsAzure.Storage.Queue
            open Microsoft.WindowsAzure.Storage.Table
        
            let storageSetting      =  "APPSETTING_AzureWebJobsStorage"
            let aliadosTableName    =  "Aliados"
            let eventosTableName    =  "Eventos"
            let mensajesTableName   =  "Mensajes"
            let estadoTableName     =  "Modelo"
            let transacTableName    =  "Transacciones"
            let archivosTableName   =  "Archivos"
            let correosQueueName    =  "correos"
            let mensajesQueueName   =  "mensajes"
            let storageAccountE()   = variableAmbienteE storageSetting |>> CloudStorageAccount.Parse
            let storageAccountC()   = variableAmbienteE storageSetting |>> CloudStorageAccount.Parse
            let tableClientE   ()   = storageAccountC() |>> fun storageAccount -> storageAccount.CreateCloudTableClient()
            let queueClientE   ()   = storageAccountE() |>> fun storageAccount -> storageAccount.CreateCloudQueueClient()
            let blobClientE    ()   = storageAccountE() |>> fun storageAccount -> storageAccount.CreateCloudBlobClient ()
            let fileClientE    ()   = storageAccountC() |>> fun storageAccount -> storageAccount.CreateCloudFileClient ()
            let aliadosTableE  ()   = tableClientE   () |>> fun tableClient    -> tableClient.GetTableReference(aliadosTableName )
            let mensajesTableE ()   = tableClientE   () |>> fun tableClient    -> tableClient.GetTableReference(mensajesTableName)
            let eventosTableE  ()   = tableClientE   () |>> fun tableClient    -> tableClient.GetTableReference(eventosTableName )
            let estadoTableE   ()   = tableClientE   () |>> fun tableClient    -> tableClient.GetTableReference(estadoTableName  )
            let transacTableE  ()   = tableClientE   () |>> fun tableClient    -> tableClient.GetTableReference(transacTableName )
            let archivosTableE ()   = tableClientE   () |>> fun tableClient    -> tableClient.GetTableReference(archivosTableName)
            let queueCorreosE  ()   = queueClientE   () |>> fun queueClient    -> queueClient.GetQueueReference(correosQueueName )
            let queueMensajesE ()   = queueClientE   () |>> fun queueClient    -> queueClient.GetQueueReference(mensajesQueueName)
        
            type Correo = {
                Subject       : string
                Content       : string
                CustomerEmail : string
            }
        
            type Mensaje = {
                remitente     : string
                destinatario  : string
                tema          : string
                contenido     : string
            }
        
            let enviarCorreoAzure (recipiente:string) (tema:string) (contenido:string)  = 
                {   Subject       = tema
                    Content       = contenido 
                    CustomerEmail = recipiente
                }
                |> Newtonsoft.Json.JsonConvert.SerializeObject
                |> CloudQueueMessage
                |> (fun m -> queueCorreosE() >>= fun queueCorreos -> queueCorreos.AddMessageAsync m |> Async.AwaitTask |> Asy.ofAsync)
        
            let enviarMensaje (mensaje:Mensaje) = 
                mensaje
                |> Newtonsoft.Json.JsonConvert.SerializeObject
                |> CloudQueueMessage 
                |> (fun m -> queueMensajesE() >>= fun queueMensajes -> queueMensajes.AddMessageAsync m |> Async.AwaitTask |> Asy.ofAsync)
        
            type AliadoE(id, aliado: string) =
                inherit TableEntity(partitionKey="Aliado", rowKey=id)
                new() = AliadoE(null, null)
                member val Aliado = aliado with get, set
        
            type MensajeE(mensaje: Mensaje, id) =
                inherit TableEntity(partitionKey= mensaje.destinatario, rowKey=id)
                new(mensaje) = MensajeE(mensaje, System.Guid.NewGuid().ToString())
                new() = MensajeE(  {    remitente     = ""
                                        destinatario  = ""
                                        tema          = ""
                                        contenido     = ""
                                    }  )
                member val id           = id                    with get, set
                member val Remitente    = mensaje.remitente     with get, set
                member val Destinatario = mensaje.destinatario  with get, set
                member val Tema         = mensaje.tema          with get, set
                member val Contenido    = mensaje.contenido     with get, set
        
            type TransacE(transac: Transaccion) =
                inherit TableEntity(partitionKey= transac.idAliado.Id, rowKey=transac.transaccion)
                new() = TransacE({  fechaPago      = System.DateTime.MinValue
                                    ano            = 0
                                    periodo        = 0
                                    monto          = 0
                                    idAliado       = IdAliado ""
                                    concepto       = ConceptoPago.Otro ""
                                    transaccion    = "-"
                                    statusTran     = ""
                            })
                member val fechaPago      = transac.fechaPago             with get, set
                member val ano            = transac.ano                   with get, set
                member val periodo        = transac.periodo               with get, set
                member val monto          = transac.monto                 with get, set
                member val idAliado       = transac.idAliado.Id           with get, set
                member val concepto       = transac.concepto.ToString()   with get, set
                member val transaccion    = transac.transaccion           with get, set
                member val statusTran     = transac.statusTran            with get, set
        
            type ArchivoE(archivo: Archivo) =
                inherit TableEntity(partitionKey= archivo.idAliado.Id, rowKey= archivo.nombre)
                new() = ArchivoE({  idAliado    = IdAliado ""
                                    tipo        = TipoArchivo.Otro ""
                                    nombre      = ""
                                    modificado  = System.DateTime.MinValue
                                    tamano      = 0L
                                    status      = StatusArchivo.Subido
                                    comentario  = ""
                            })
                member val modificado = archivo.modificado           with get, set
                member val tamano     = archivo.tamano               with get, set
                member val comentario = archivo.comentario           with get, set
                member val tipo       = archivo.tipo  .ToString()    with get, set
                member val status     = archivo.status.ToString()    with get, set
        
            type EstadoE(n:int64, estado: string) =
                inherit TableEntity(partitionKey= "EstadoActual", rowKey= "Estado")
                new() = EstadoE(0L, "")
                member val nevento      = n      with get, set
                member val estado       = estado with get, set
        
            type EstadoNE(n:int64) =
                inherit TableEntity(partitionKey= "EstadoActual", rowKey= "EstadoActual")
                new() = EstadoNE(0L)
                member val nevento      = n      with get, set
        
            type EventoE(n:int64, usuario:string, nombre:string, evento:string, tipo:string) =
                inherit TableEntity(partitionKey= "Evento", rowKey= sprintf "%08d" n)
                new() = EventoE(0L, "", "", "", "")
                member val nevento      = n       with get, set
                member val usuario      = usuario with get, set
                member val nombre       = nombre  with get, set
                member val tipo         = tipo    with get, set
                member val evento       = evento  with get, set
        
            type EventoNE(n:int64) =
                inherit TableEntity(partitionKey= "Actual", rowKey= "Actual")
                new() = EventoNE(0L)
                member val nevento      = n      with get, set
        
            let executeE      tbE  op = tbE() >>= fun (tb:CloudTable) -> tb.ExecuteAsync      op |> Async.AwaitTask |> Asy.ofAsync
            let executeQueryE tbE (op:TableQuery<_>) = tbE() >>= fun (tb:CloudTable) -> tb.ExecuteQuerySegmentedAsync(op, null) |> Async.AwaitTask |> Asy.ofAsync
        
            let guardarAliado id contenido = 
                TableOperation.InsertOrReplace <| AliadoE(id, contenido)
                |> executeE aliadosTableE
        
            let guardarMensaje mensaje =
                TableOperation.InsertOrReplace <| MensajeE(mensaje)
                |> executeE mensajesTableE
        
            let guardarTransac transac =
                TableOperation.InsertOrReplace <| TransacE(transac)
                |> executeE transacTableE
        
            let guardarTransacs (ts: Transaccion seq) = 
                ts 
                |> traverseSeq guardarTransac
                |>> Seq.iter ignore
        
            let obtenerTransacs() = 
                TableQuery<TransacE>()
                |>  executeQueryE transacTableE
                |>> (Seq.map (fun tr -> {  
                                    fechaPago      = tr.fechaPago  
                                    ano            = tr.ano        
                                    periodo        = tr.periodo    
                                    monto          = tr.monto      
                                    idAliado       = IdAliado tr.idAliado   
                                    concepto       = ConceptoPago.tryParse tr.concepto |> Option.defaultValue (ConceptoPago.Otro "")
                                    transaccion    = tr.transaccion
                                    statusTran     = tr.statusTran 
                            }
                ) >> Seq.toArray)
        
            let guardarArchivo archivo =
                TableOperation.InsertOrReplace <| ArchivoE(archivo)
                |> executeE archivosTableE
        
            let obtenerArchivos() = 
                TableQuery<ArchivoE>()
                |>  executeQueryE archivosTableE
                |>> (Seq.map (fun tr -> {  
                                    idAliado    = IdAliado tr.PartitionKey
                                    nombre      = tr.RowKey
                                    modificado  = tr.modificado
                                    tamano      = tr.tamano    
                                    comentario  = tr.comentario
                                    tipo        = tr.tipo   |> TipoArchivo  .Parse
                                    status      = tr.status |> StatusArchivo.Parse 
                            }
                ) >> Seq.toArray)
        
            let obtenerAliados() =
                TableQuery<AliadoE>()
                |>  executeQueryE aliadosTableE
                |>> (Seq.map (fun al -> al.Aliado) >> Seq.toArray)
        
            let borrarAliado aid =
                TableOperation.Delete(AliadoE(aid, "", ETag = "*") )
                |> executeE aliadosTableE
        
            let guardarEstado (n:int64) s =
                let op1 = TableOperation.InsertOrReplace <| EstadoE( n, s)
                let op2 = TableOperation.InsertOrReplace <| EstadoNE(n   )
                executeE estadoTableE op1
                >>= fun _ -> executeE estadoTableE op2
        
            let ultimoEstado() =
                TableQuery<EstadoNE>()
                  .Where(
                      TableQuery.CombineFilters(
                          TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, "EstadoActual"),
                          TableOperators.And,
                          TableQuery.GenerateFilterCondition("RowKey", QueryComparisons.Equal,"EstadoActual")
                  ))
                |> executeQueryE estadoTableE
                |>> (Seq.tryHead >> Option.map (fun e -> e.nevento) )
        
            let obtenerEstado() =
                TableQuery<EstadoE>()
                  .Where(
                      TableQuery.CombineFilters(
                          TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, "EstadoActual"),
                          TableOperators.And,
                          TableQuery.GenerateFilterCondition("RowKey", QueryComparisons.Equal,"Estado")
                  ))
                |> executeQueryE estadoTableE
                |>> (Seq.tryHead >> Option.map (fun e -> e.nevento, e.estado) )
        
            let ultimoEvento() = //obtenerTextoArchivo archivoUltimoEvento |> Option.bind ParseO.parseInt64O 
                TableQuery<EventoNE>()
                  .Where(
                      TableQuery.CombineFilters(
                          TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, "Actual"),
                          TableOperators.And,
                          TableQuery.GenerateFilterCondition("RowKey", QueryComparisons.Equal,"Actual")
                  ))
                |> executeQueryE eventosTableE
                |>> (Seq.tryHead >> Option.map (fun e -> e.nevento) )
        
            let nuevoEvento (usuario:string) (nombre:string) (evento:string) (tipo:string) =
                ultimoEvento()
                |>> Option.defaultValue 0L
                |>> (+) 1L
                >>= fun nextEvento ->
                    EventoE( nextEvento, usuario, nombre, evento, tipo)
                    |>  TableOperation.InsertOrReplace
                    |>  executeE eventosTableE
                    |>> fun _ -> EventoNE(nextEvento   )
                    |>> TableOperation.InsertOrReplace
                    >>= executeE eventosTableE
                    |>> fun _ -> nextEvento
        
            let getMimeO (name :string)=
                match name.ToLower() with
                | String.EndsWith ".pdf"  _ -> Some "application/pdf"
                | String.EndsWith ".rtf"  _ -> Some "application/rtf"
                | String.EndsWith ".pbm"  _ -> Some "image/x-portable-bitmap"
                | String.EndsWith ".bmp"  _ -> Some "image/bmp"
                | String.EndsWith ".gif"  _ -> Some "image/gif"
                | String.EndsWith ".tif"  _
                | String.EndsWith ".tiff" _ -> Some "image/tiff"
                | String.EndsWith ".png"  _ -> Some "image/png"
                | String.EndsWith ".jpe"  _ 
                | String.EndsWith ".jpeg" _ 
                | String.EndsWith ".jpg"  _ -> Some "image/jpeg"
                | String.EndsWith ".png"  _ -> Some "image/png"
                | String.EndsWith ".html" _ -> Some "text/html"
                | _-> None
        
            let obtenerListaDocs (IdAliado alid) = eff {
                let! bcli      = blobClientE()
                let  container = bcli.GetContainerReference "documentos"
                let  dir       = container.GetDirectoryReference  alid
                let! blobs     = dir.ListBlobsSegmentedAsync   null |> Async.AwaitTask |> Asy.ofAsync
                let! archivos  = obtenerArchivos() |>> Array.filter (fun a -> a.idAliado.Id = alid)
                return
                    blobs.Results
                    |> Seq.choose (fun blob ->
                        blob.Uri.GetComponents(UriComponents.Path, UriFormat.Unescaped) 
                        |> String.splitInTwoO (alid + "/")
                        |> Option.map snd
                        |> Option.map (fun nombre ->
                            let ref = dir.GetBlockBlobReference nombre
                            ref.FetchAttributes()
                            archivos
                            |> Seq.tryFind (fun a -> a.nombre = nombre) 
                            |> Option.map  (fun a ->
                                if a.modificado = ref.Properties.LastModified.Value.DateTime && a.tamano = ref.Properties.Length then a else
                                { a with 
                                    modificado  = ref.Properties.LastModified.Value.DateTime
                                    tamano      = ref.Properties.Length
                                    status      = StatusArchivo.Cambiado
                                }
                            )
                            |> Option.defaultWith ( fun () -> {  
                                idAliado    = IdAliado alid
                                nombre      = nombre
                                modificado  = ref.Properties.LastModified.Value.DateTime
                                tamano      = ref.Properties.Length
                                comentario  = ""
                                tipo        = TipoArchivo.Otro "-"
                                status      = StatusArchivo.Subido
                            })
                        )
                    )
                    |> Seq.toArray
            }
        
            let subirBlob fromFile toContainerName toFile =
                blobClientE()
                >>= fun bcli ->
                        bcli                          .GetContainerReference toContainerName
                        |>  fun container -> container.GetBlockBlobReference toFile
                        |>  fun blob      -> blob     .UploadFromFileAsync   fromFile |> Async.AwaitTask |> Asy.ofAsync |>> fun () -> blob
                        >>= fun blob      -> eff { 
                                match getMimeO toFile with
                                | None -> ()
                                |   Some mime ->    blob.Properties.ContentType <- mime
                                                    do! blob.SetPropertiesAsync() |> Async.AwaitTask |> Asy.ofAsync
                            }
        
            let obtenerPropiedadesBlob toContainerName toFile = eff {
                let! bcli = blobClientE()
                let  blob =
                        bcli                         .GetContainerReference toContainerName
                        |> fun container -> container.GetBlockBlobReference toFile
                let! exists = blob.ExistsAsync() |> Async.AwaitTask |> Asy.ofAsync
                return if exists then Some blob.Properties else None
            }
        
            let obtenerPropiedadesArchivo shareName toFile = eff {
                let! fcli = fileClientE   () 
                let  file =
                        fcli                 .GetShareReference        shareName
                        |> fun share -> share.GetRootDirectoryReference()
                        |> fun dir   -> dir  .GetFileReference         toFile
                let! exists = file.ExistsAsync() |> Async.AwaitTask |> Asy.ofAsync
                return if exists then Some file.Properties else None
            }
        
            let subirArchivo fromFile shareName toFile =
                fileClientE   () 
                >>= fun fcli ->
                        fcli                 .GetShareReference        shareName
                        |> fun share -> share.GetRootDirectoryReference()
                        |> fun dir   -> dir  .GetFileReference         toFile
                        |> fun file  -> file .UploadFromFileAsync    fromFile |> Async.AwaitTask |> Asy.ofAsync
        
        
        //    let setAmbiente() =
        //        {
        //            new IAmbiente with 
        //                member __.UltimoEvento      ()  = ultimoEvento()
        //                member __.UltimoEstado      ()  = ultimoEstado()
        //                member __.LeerTipos         ()  = [||]   
        //                member __.LeerEventosTipos  ()  = [||]   
        //                member __.NuevoEvento       (usuario:string) (nombre:string) (evento:string) (tipo:string) = nuevoEvento usuario nombre evento tipo
        //                member __.LeerEventos       n   = AsyncResultM.errorMsgf "ambienteAzure.LeerEventos not implemented"
        //                member __.GuardarEstado     n s = guardarEstado n s
        //                member __.ObtenerEstado     ()  = obtenerEstado
        //                member __.GuardarAliado     i s = guardarAliado i s
        //                member __.ObtenerAliados    ()  = obtenerAliados
        //                member __.NombreAmbiente    ()  = "azure"
        //                member __.CarpetaRaiz       ()  = carpeta
        //                member __.EnviarCorreo    r t c = enviarCorreoAzure r t c
        //                member __.EnviarMensaje d r t c = enviarMensaje  { 
        //                                                        remitente     = d 
        //                                                        destinatario  = r 
        //                                                        tema          = t 
        //                                                        contenido     = c 
        //                                                    }
        //                member __.ObtenerTransacciones      id = AsyncResultM.errorMsgf "Ambiente.ObtenerTransacciones: not implemented"
        //                member __.ObtenerMensajes           id = AsyncResultM.errorMsgf "Ambiente.ObtenerMensajes: not implemented"
        //                member __.ObtenerListaDocs          id = obtenerListaDocs id
        //                member __.VariableAmbiente           v = System.Environment.GetEnvironmentVariable v
        //                member __.Prepare                   () = Authorize.prepareAuthorizeNetEnvironment()
        //        }
        //
        
            let invokeE nameF (f:'a->Eff<'H, 'b>) (p:'a) =
                try 
                    f p |> Ok
                with e ->
                    Error (sprintf "Exception! %s %s" <| nameF p <| e.ToString())
                |> Rsl.ofResult
                |> join
        
            let invokeR nameF (f:'a->'b) (p:'a) =
                try 
                    f p |> Ok
                with e ->
                    Error (sprintf "Exception! %s %s" <| nameF p <| e.ToString())
                |> Rsl.ofResult
        
            let invokeVerboseR nameF (f:'a->'b) (p:'a) = eff {
                try 
                    do! Log.logf "invokeVerboseR: %s" (nameF p)
                    let r = f p 
                    do! Log.logf "%s %A" (nameF p) r
                    return r
                with e ->
                    return!
                        Error (sprintf "Exception! %s %s" <| nameF p <| e.ToString())
                        |> Rsl.ofResult
            }
        
            let invokeL nameF (f:'a->'b) (p:'a) =
                try 
                    f p |> Log.logf "%s %A" (nameF p) //|>> ignore 
                with e ->
                    Error (sprintf "Exception! %s %s" <| nameF p <| e.ToString())
                    |> Rsl.ofResult
        
            let invokeLE nameF (f:'a->Eff<'H, 'b>) (p:'a) =
                try 
                    f p 
                    >>= Log.logf "%s %A" (nameF p) 
                    |>  Ok
                with e ->
                    Error (sprintf "Exception! %s %s" <| nameF p <| e.ToString())
                |> Rsl.ofResult
                |> join
        
        [< AutoOpen >]
        module AzureHandler =
            open Authorize
            open AuthorizeNet
            open AuthorizeNet.Api.Controllers
            open AuthorizeNet.Api.Contracts.V1
            open AuthorizeNet.Api.Controllers.Bases
            open Azure
        
        
            type AR<'V> = Eff<AzureReader,'V>
            and  AzureReader(?environment : string) =
                let manejadores = System.Collections.Generic.Dictionary<Eventos.TipoDatos, Eventos.ManejadorDatos<obj,AzureReader>>()
                let manejadorGenerico (msg:Eventos.ObjetoDatos<obj>) : Eventos.ResultadoManejador<AzureReader> =
                        match manejadores.TryGetValue msg.tipoDatos with
                        | false, _         -> failwithf "No Handler for message: %A \n handlers: [%s]" msg (manejadores.Keys |> Seq.map (sprintf "%A") |> String.concat "\n")
                        | true , manejador -> manejador.manejadorF msg
                do SerializadorEventos.registrarEventos (fun m -> manejadores.Add(m.tipoDatos, m))
        
                let prepareEnvironment env id transactionKey =
                    ApiOperationBase<ANetApiRequest, ANetApiResponse>.RunEnvironment         <- env
                    ApiOperationBase<ANetApiRequest, ANetApiResponse>.MerchantAuthentication <- 
                        new merchantAuthenticationType( name            = id
                                                    ,   ItemElementName = ItemChoiceType.transactionKey
                                                    ,   Item            = transactionKey )
                let mutable environmentNameO = None
                let prepararE = eff {
                    let! env =  eff {
                                    match environment with
                                    | Some v -> return v.ToUpper()
                                    |_       -> return! variableAmbienteE "Authorize_Environment"
                                }
                    let  environment, environmentName, idV, tranKeyV =
                        match env with
                        | "P" ->(   AuthorizeNet.Environment.PRODUCTION
                                ,   "PRODUCTION"
                                ,   "Authorize_Id_Production"          
                                ,   "Authorize_Transaction_Production" 
                                )
                        |_->    (   AuthorizeNet.Environment.SANDBOX
                                ,   "SANDBOX"
                                ,   "Authorize_Id_Sandbox"          
                                ,   "Authorize_Transaction_Sandbox" 
                                )
                    let! id      = variableAmbienteE idV
                    let! tranKey = variableAmbienteE tranKeyV
                    environmentNameO <- Some environmentName
                    prepareEnvironment environment id tranKey
                }
        
                let obtenerTransaccionesMem, resetTransMem = 
                    let mutable transO = None
                    fun() -> eff {
                        match transO with
                        | Some trans -> return trans
                        | None       -> let!   trans = Azure.obtenerTransacs()
                                        transO <- Some trans
                                        let!   modelo = ObtenerEstado.obtenerEstado()
                                        let  aliados  = Aliado.actualizarAliados trans modelo
                                        if aliados <> modelo.aliados then
                                            let! n = ObtenerEstado.ultimoEstadoE() |>> Option.defaultValue 0L
                                            do! ObtenerEstado.guardarEstado (n + 1L) { modelo with aliados = aliados }
                                        return trans
                    }, (fun () -> transO <- None)
        
                interface Reader.Reader<AzureReader> 
                interface Log.Log<string> 
                interface Rsl.Rsl<string>
                interface Asy.Asy
                interface VariableAmbienteI with
                    member __.getVar          v  = System.Environment.GetEnvironmentVariable v
                    member __.CarpetaRaiz     () = @"D:\home\site\wwwroot"
                interface Eventos        .EventosI<AzureReader> with
                    member __.ManejadorGenerico                  msg = manejadorGenerico msg
                    member __.GuardarArchivo                     ar  = invokeLE  (fun _ -> "GuardarArchivo"    )  Azure.guardarArchivo ar
                    member __.ObtenerListaDocs                   ida = invokeE   (fun _ -> "ObtenerListaDocs"  )  Azure.obtenerListaDocs ida
                interface Correo          .EmailI<AzureReader>  with
                    member __.SendEmail                        r t c = invokeE  (fun _ -> "SendEmail"          ) (Azure.enviarCorreoAzure r t      ) c
                interface ObtenerEstado   .EstadoI<AzureReader> with
                    member __.UltimoEstado                        () = invokeE  (fun _ -> "UltimoEstado"       )  Azure.ultimoEstado                 ()
                    member __.GuardarAliado                     id s = invokeLE (fun _ -> "GuardarAliado"      ) (Azure.guardarAliado id  :_->AR<_>) s
                    member __.GuardarEstado                      n s = invokeLE (fun _ -> "GuardarEstado"      ) (Azure.guardarEstado  n  :_->AR<_>) s
                    member __.ObtenerEstado                       () = invokeE  (fun _ -> "ObtenerEstado"      )  Azure.obtenerEstado                ()
                    member __.ObtenerAliados                      () = invokeE  (fun _ -> "ObtenerAliados"     )  Azure.obtenerAliados               ()
                    member __.LeerTransacciones                   () = invokeE  (fun _ -> "LeerTransacciones"  )  obtenerTransaccionesMem            ()
                    member __.SalvarTransacciones                 ts = invokeE  (fun _ -> "SalvarTransacciones")  Azure.guardarTransacs              ts
                interface ManejadorEventos.ManejadorI<AzureReader> with
                    member __.NuevoEvento usuario nombre evento tipo = invokeE  (fun _ -> "NuevoEvento"   ) (Azure.nuevoEvento   usuario nombre evento) tipo
                    member __.UltimoEvento                        () = invokeE  (fun _ -> "UltimoEvento"  )  Azure.ultimoEvento                 ()
                    member __.EnviarMensaje                  d r t c = invokeE  (fun _ -> "EnviarMensaje" )  Azure.enviarMensaje { 
                                                                                                                            remitente     = d 
                                                                                                                            destinatario  = r 
                                                                                                                            tema          = t 
                                                                                                                            contenido     = c 
                                                                                                                        }
                interface AuthorizeI<AzureReader> with
                    member __.execute controller =  controller.Execute()
                                                    controller.GetApiResponse()
                    member __.prepare         () = if environmentNameO.IsNone then prepararE else rtn ()
                member __.RefrescarTransacciones() : Eff<AzureReader,_> = eff {
                    do!  Authorize.actualizarTransacciones   None
                    resetTransMem                            ()
                    ObtenerEstado.resetEstadoActual          ()
                    let! trans = ObtenerEstado.leerTransaccsE() 
                    ()
                }
        
            let reader = AzureReader()
            let mutable logger : string -> unit = print
        
            let run   (eff:Eff<_,_>) = async {
                try
                    return!
                        eff
                        |> Reader.readerHandler reader
                        |> Log.loggerLogHandler logger
                        |> Rsl.rslHandler 
                        |> Asy.asyncHandler
                        |> Eff.run<AzureReader,_>
                with e -> 
                    return Error (sprintf "Eff Exception: %s %s" e.Message e.StackTrace)
            }
        
            let printEff (log:string -> unit) eff = 
                run eff
                |> Async.map 
                   (function
                    | Ok ()   -> ()
                    | Error m -> log m)
                |> Async.iterA id
        
        
        
        
        
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Fake.IO.FileSystem\lib\net46\Fake.IO.FileSystem.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.IdentityModel.Tokens\lib\net461\Microsoft.IdentityModel.Tokens.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\Microsoft.IdentityModel.Protocols\lib\net461\Microsoft.IdentityModel.Protocols.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\Microsoft.IdentityModel.Protocols.OpenIdConnect\lib\net461\Microsoft.IdentityModel.Protocols.OpenIdConnect.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\Microsoft.IdentityModel.Logging\lib\net461\Microsoft.IdentityModel.Logging.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\test\Microsoft.IdentityModel.JsonWebTokens\lib\net461\Microsoft.IdentityModel.JsonWebTokens.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Configuration.ConfigurationManager/lib/net461/System.Configuration.ConfigurationManager.dll" 
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Security.Cryptography.ProtectedData/lib/net461/System.Security.Cryptography.ProtectedData.dll" 
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Security.Permissions/lib/net461/System.Security.Permissions.dll" 
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Security.AccessControl/lib/net461/System.Security.AccessControl.dll" 
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Buffers/lib/netstandard1.1/System.Buffers.dll" 
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Numerics.Vectors/lib/net46/System.Numerics.Vectors.dll" 
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Runtime.CompilerServices.Unsafe/lib/netstandard1.0/System.Runtime.CompilerServices.Unsafe.dll" 
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Security.Principal.Windows/lib/net461/System.Security.Principal.Windows.dll" 
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages/prozper0/System.Memory/lib/netstandard1.1/System.Memory.dll" 
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages\test2\System.IdentityModel\lib\net461\System.IdentityModel.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation/packages\test2\System.IdentityModel.Tokens.Jwt\lib\net461\System.IdentityModel.Tokens.Jwt.dll"
        module TokenValidate =
            open System.IO
            open Microsoft.IdentityModel.Tokens
            open System.ComponentModel
            open System
            open System.Security.Cryptography
            open System.Text
            open System.Configuration
            open Microsoft.IdentityModel.Protocols.OpenIdConnect
            open System.IdentityModel.Tokens.Jwt
        
        /// https://prozper.b2clogin.com/tfp/prozper.onmicrosoft.com/B2C_1_Registrarse/discovery/v2.0/keys
            let e      = "AQAB"
            let n      = "tVKUtcx_n9rt5afY_2WFNvU6PlFMggCatsZ3l4RjKxH0jgdLq6CScb0P3ZGXYbPzXvmmLiWZizpb-h0qup5jznOvOr-Dhw9908584BSgC83YacjWNqEK3urxhyE2jWjwRm2N95WGgb5mzE5XmZIvkvyXnn7X8dvgFPF5QwIngGsDG8LyHuJWlaDhr_EPLMW4wHvH0zZCuRMARIJmmqiMy3VD4ftq4nS5s8vJL0pVSrkuNojtokp84AtkADCDU_BUhrc2sIgfnvZ03koCQRoZmWiHu86SuJZYkDFstVTVSR0hiXudFlfQ2rOhPlpObmku68lXw-7V-P7jwrQRFfQVXw"
            
            let addPadding (s:string) = s.Replace('_', '/').Replace('-', '+').PadRight(s.Length + (s.Length * 3) % 4, '=')
        
            let rsa = new RSACryptoServiceProvider()
            rsa.ImportParameters(
                    new RSAParameters(
                        Exponent = Convert.FromBase64String (addPadding e)
                      , Modulus  = Convert.FromBase64String (addPadding n)
                    ))
        
        
            let validate(token:string) =
                let validationParameters = TokenValidationParameters(   ValidateAudience  =  false
                                                                      , ValidateIssuer    =  false
                                                                      , ValidateLifetime  =  true
                                                                      , IssuerSigningKey  =  RsaSecurityKey rsa
                                                                    )
                let handler = JwtSecurityTokenHandler()
                try
                    match handler.ValidateToken(token, validationParameters) with
                    | principal, jwt -> Ok principal
                with e -> Error e.Message
        
            //match validate bearer with
            //| Ok principal -> 
            //    //principal.Identities |> Seq.iter printObj
            //    principal.Claims     |> Seq.map (fun c -> (c.Type, c.Value) ) |> Seq.toArray |> printObj
            //| Error msg -> print msg
        
        
        module Rpc0 =
            open WebSharper
            open WebSharper.JavaScript
        
            [< JavaScript >]
            let serverEndPoint = 
                lazy 
                    if IsClient then 
                        if JS.Window.Location.Protocol = "http:" 
                        then "http://localhost:7071/api/"
                        else sprintf "https://%s/api/" JS.Window.Location.Host
                    else     
                        variableAmbienteE "Website" 
                        |>> sprintf "https://%s/api/"
                        |>  AzureHandler.run
                        |>  Async.RunSynchronously
                        |>  Result.defaultValue "https://aliados.prozper.com/api"
        
            let obtenerUnions0 () =
                ( DiscUnion.simple<Pais          >
                , DiscUnion.simple<Estado        >
                , DiscUnion.simple<TipoDireccion >
                , DiscUnion.simple<TipoTelefono  >
                , DiscUnion.simple<Genero        >
                , DiscUnion.simple<TipoCuenta    >
                , DiscUnion.simple<TipoTarjeta   >
                , DiscUnion.simple<StatusAliado  >
                , [| for m in System.Enum.GetValues(typeof<Mes>)                       do yield string m |]
                , [| for i in System.DateTime.Now.Year..System.DateTime.Now.Year + 15  do yield        i |]
                , DiscUnion.simple<TipoArchivo   >
                , DiscUnion.simple<StatusArchivo >
                )        
        
            open Azure
            open AzureHandler
        
            let borrarFormaPago0 aid    idp = eff {
                let! fps   = Authorize.obtenerFormasDePagoId   aid
                let! res   = Authorize.borrarFormaPago         aid idp
                let! docs  = ManejadorEventos.obtenerListaDocs aid
                match fps |> Seq.tryFind (fun fp -> fp.authorizeIdR = Ok idp) with
                | None -> ()
                | Some fp ->
                    let  pre = fp.cuentaPago.AutorizacionPre
                    let  docsN = docs |> Array.choose(fun doc ->
                                    match doc.status with
                                    | Subido | Cambiado | Verificado | Rechazado when doc.nombre.StartsWith pre -> Some { doc with status = Cancelado }
                                    |_-> None
                                )
                    if docsN.Length > 0 then
                        let! _ = ActualizarArchivos(aid, docsN) |> ManejadorEventos.ejecutarDataEventoNuevo aid
                        ()
                return res
            }
        
            type AR<'T> = Async<Result<'T, string>>
            let aidClaim = "http://schemas.microsoft.com/identity/claims/objectidentifier"
            let jobClaim = "jobTitle"
            let jobAdmin = "AdministradorPROZPER"
        
            let check tk (aid:IdAliado) = 
                eff {
                    let! principal    = TokenValidate.validate tk |> Rsl.ofResult
                    let  claims       = principal.Claims |> Seq.toArray
                    let tryClaim name = claims |> Seq.tryPick (fun cl -> if cl.Type = name then Some cl.Value else None)
                    let esAdminL      = lazy (tryClaim jobClaim = Some jobAdmin)
                    match tryClaim aidClaim with
                    | Some id when id = aid.Id || esAdminL.Value -> return esAdminL
                    | _  ->   
                        do! Log.logf "Claims %d" claims.Length
                        for cl in claims do
                            do! Log.logf "claim: %s = %s" cl.Type cl.Value
                        return! Result.Error "No autorizado!" |> Rsl.ofResult
                } 
        
            let adm = IdAliado ""
        
            let [< Rpc >] obtenerUnions                          () : AR<_> =                             invokeVerboseR(fun _ -> "obtenerUnions")  obtenerUnions0 () |> AzureHandler.run
            let [< Rpc >] obtenerIdInfluyente                codigo : AR<_> =                             ManejadorEventos.obtenerIdInfluyente      codigo            |> AzureHandler.run
            let [< Rpc >] obtenerEstadoParaUsuario tk aid           : AR<_> = check tk aid >>= (fun aL -> ObtenerEstado   .obtenerEstadoParaUsuario aid    aL.Value ) |> AzureHandler.run
            let [< Rpc >] actualizarSubscripcion   tk aid    idp    : AR<_> = check tk aid >>= (fun _  -> Authorize       .actualizarSubscripcion   aid     idp     ) |> AzureHandler.run
            let [< Rpc >] ejecutarDataEventoNuevo  tk aid    de     : AR<_> = check tk aid >>= (fun _  -> ManejadorEventos.ejecutarDataEventoNuevo  aid     de      ) |> AzureHandler.run
            let [< Rpc >] agregarUsuarioSiEsNuevo  tk aid    claims : AR<_> = check tk aid >>= (fun _  -> ManejadorEventos.agregarUsuarioSiEsNuevo  aid     claims  ) |> AzureHandler.run
            let [< Rpc >] obtenerFormasDePagoId    tk aid           : AR<_> = check tk aid >>= (fun _  -> Authorize       .obtenerFormasDePagoId    aid             ) |> AzureHandler.run
            let [< Rpc >] registrarTarjeta         tk aid    p      : AR<_> = check tk aid >>= (fun _  -> Authorize       .registrarTarjeta         aid     p       ) |> AzureHandler.run
            let [< Rpc >] registrarCuenta          tk aid    p      : AR<_> = check tk aid >>= (fun _  -> Authorize       .registrarCuenta          aid     p       ) |> AzureHandler.run
            let [< Rpc >] validarFormaPago         tk aid    p      : AR<_> = check tk aid >>= (fun _  -> Authorize       .validarFormaPago         aid     p       ) |> AzureHandler.run
            let [< Rpc >] borrarFormaPago          tk aid    p      : AR<_> = check tk aid >>= (fun _  ->                  borrarFormaPago0         aid     p       ) |> AzureHandler.run
            let [< Rpc >] obtenerListaDocs         tk aid           : AR<_> = check tk aid >>= (fun _  -> ManejadorEventos.obtenerListaDocs         aid             ) |> AzureHandler.run
            let [< Rpc >] enviarCorreosInvitacion  tk aid (tm, ems) : AR<_> = check tk aid >>= (fun _  -> Correo          .enviarCorreosInvitacion (tm, aid, ems)   ) |> AzureHandler.run
            let [< Rpc >] obtenerFormasDePagoPara  tk aids          : AR<_> = check tk adm >>= (fun _  -> Authorize       .obtenerFormasDePagoPara  aids            ) |> AzureHandler.run
            let [< Rpc >] obtenerTransaccionesPara tk aid           : AR<_> = check tk aid >>= (fun aL -> Authorize       .obtenerTransaccionesPara aid    aL.Value ) |> AzureHandler.run
            let [< Rpc >] refrescarTransacciones   tk            () : AR<_> = check tk adm >>= (fun _  -> reader          .RefrescarTransacciones            ()     ) |> AzureHandler.run
        
        [<JavaScript>]
        module Remoting = // not being used anymore as token now is a parameter of the rpc function
            open WebSharper.JavaScript
        
            let private originalProvider = WebSharper.Remoting.AjaxProvider
        
            let mutable getTokenOA = fun () -> async { return None } // ... get token from storage ...
        
            type CustomXhrProvider () =
                interface WebSharper.Remoting.IAjaxProvider with
                    member this.Async url headers data ok err = 
                        async {
                            let! tokenO = getTokenOA()
                            tokenO |> Option.iter (fun token -> JS.Set headers "Authorization" <| sprintf "Bearer %s" token)
                            originalProvider.Async url headers data ok err
                        } |> Async.Start
                    member this.Sync url headers data =
                            originalProvider.Sync url headers data
                    
            let installBearer getTokenOAF =
                getTokenOA <-  getTokenOAF
                WebSharper.Remoting.AjaxProvider <- CustomXhrProvider()
                
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Azure.WebJobs\lib\netstandard2.0\Microsoft.Azure.WebJobs.Host.dll" 
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Azure.WebJobs.Core\lib\netstandard2.0\Microsoft.Azure.WebJobs.dll" 
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Azure.WebJobs.Extensions\lib\netstandard2.0\Microsoft.Azure.WebJobs.Extensions.dll" 
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Azure.WebJobs.Extensions.Storage\lib\netstandard2.0\Microsoft.Azure.WebJobs.Extensions.Storage.dll" 
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Extensions.Primitives\lib\netstandard2.0\Microsoft.Extensions.Primitives.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Extensions.Logging\lib\netstandard2.0\Microsoft.Extensions.Logging.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Extensions.Logging.Abstractions\lib\netstandard2.0\Microsoft.Extensions.Logging.Abstractions.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Azure.WebJobs.Extensions.Http\lib\netstandard2.0\Microsoft.Azure.WebJobs.Extensions.Http.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Extensions.DependencyInjection\lib\netstandard2.0\Microsoft.Extensions.DependencyInjection.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.Extensions.DependencyInjection.Abstractions\lib\netstandard2.0\Microsoft.Extensions.DependencyInjection.Abstractions.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.AspNetCore.Http\lib\netstandard2.0\Microsoft.AspNetCore.Http.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.AspNetCore.Http.Abstractions\lib\netstandard2.0\Microsoft.AspNetCore.Http.Abstractions.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.AspNetCore.Http.Features\lib\netstandard2.0\Microsoft.AspNetCore.Http.Features.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.AspNetCore.Mvc.Core\lib\netstandard2.0\Microsoft.AspNetCore.Mvc.Core.dll"
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Prozper\Microsoft.AspNetCore.Mvc.Abstractions\lib\netstandard2.0\Microsoft.AspNetCore.Mvc.Abstractions.dll"
        
        //#define NETSTANDARD20
        
        module AzureFunctions =
            open Microsoft.Azure.WebJobs
            open Microsoft.Azure.WebJobs.Extensions
            open Microsoft.Azure.WebJobs.Extensions.Storage
            open Microsoft.Azure.WebJobs.Extensions.Http
            open Microsoft.Extensions.Logging
            open Microsoft.AspNetCore.Http
            open Microsoft.AspNetCore.Mvc
            open Newtonsoft.Json
            open System
            open System.IO 
        
            module RM = WebSharper.Core.Remoting
        
            [<FunctionName("keepAlive")>]
            let keepAlive([< TimerTrigger("0 */5 * * * *") >] myTimer : TimerInfo, log : ILogger ) =
                ()
        
            [<FunctionName("refreshTransactions")>]
            let refreshTransactions([< TimerTrigger("0 0 0 */1 * *") >] myTimer : TimerInfo, log : ILogger ) =
                reader.RefrescarTransacciones() |> AzureHandler.printEff log.LogInformation
        
            type MaxDepthJsonTextWriter(writer : TextWriter, maxDepth : int ) =
                inherit JsonTextWriter(writer) 
                let mutable maxObservedDepth = 0
                member this.CheckDepth() =
                    maxObservedDepth <- Math.Max(maxObservedDepth, this.Top)
                    if this.Top > int maxDepth then
                        failwithf "Depth %d Exceeds MaxDepth %A at path %A" this.Top maxDepth this.Path
                override this.WriteStartArray          () = base.WriteStartArray()           ; this.CheckDepth()
                override this.WriteStartConstructor  name = base.WriteStartConstructor(name) ; this.CheckDepth()
                override this.WriteStartObject         () = base.WriteStartObject()          ; this.CheckDepth()
        
            let splitAndSend n f name (txt:string) =
                let rec loop (txt:string) =
                    if txt.Length <= n then f txt else
                    f txt.[0..n]
                    loop txt.[n + 1..]
                loop (name + "<<<:" + txt + ":>>>")
        
            let serializeMaxDepth depth obj = 
                let settings = JsonSerializerSettings(ReferenceLoopHandling  = ReferenceLoopHandling.Ignore
                                                    , MissingMemberHandling  = MissingMemberHandling.Ignore
                                                    , Error                  = EventHandler<Serialization.ErrorEventArgs>(fun s a -> a.ErrorContext.Handled <- true)
                                                    )
                use writer      = new StringWriter()
                use jsonWriter  = new MaxDepthJsonTextWriter(writer, depth)
                JsonSerializer.Create(settings).Serialize(jsonWriter, obj)
                writer.ToString()
            
            [<FunctionName("rpc")>]
            let runRpc( [<HttpTrigger(AuthorizationLevel.Anonymous, "get" , "post", "options", Route = "rpc/rpc")>] 
                        request     : HttpRequest
                      , principal   : System.Security.Claims.ClaimsPrincipal 
                      , log         : ILogger  ) = 
                async {
                    log.LogInformation "runRpc: ENTERING v.015"
                    //serializeMaxDepth 13 request   |> splitAndSend 9999 log.LogInformation "request"
                    //serializeMaxDepth 13 principal |> splitAndSend 9999 log.LogInformation "principal"
                    //log.LogInformation(sprintf "%d Headers:" <| Seq.length request.Headers)
                    //request.Headers |> Seq.collect (fun kvp -> kvp.Value |> Seq.map (fun v -> kvp.Key, v)) |> Seq.iter (sprintf "%A" >> log.LogInformation)
                    //log.LogInformation(sprintf "%d real Claims:" <| Seq.length principal.Claims)
                    //principal.Claims |> Seq.map (fun kvp -> kvp.Type, kvp.Value) |> Seq.iter (sprintf "%A" >> log.LogInformation)
                    log.LogInformation <| sprintf "runRpc: %s" request.Headers.["x-websharper-rpc"].[0]
                    let start = System.DateTime.UtcNow.Ticks
                    let  wsServer = RM.Server.Create WebSharper.Web.Shared.Metadata WebSharper.Web.Shared.Json
                    log.LogInformation "runRpc: after Server.Create"
                    let! body     = request.ReadAsStringAsync() |> Async.AwaitTask
                    let  wsReq    = {
                        RM.Request.Body    = body
                        RM.Request.Headers = ParseO.tryParseWith request.Headers.TryGetValue >> Option.bind Seq.tryHead
                    }
                    logger <- fun s -> log.LogInformation s
                    try
                        let! wsResp   = wsServer.HandleRequest wsReq
                        let elapsedSpan = new System.TimeSpan(System.DateTime.UtcNow.Ticks - start)
                        log.LogInformation <| sprintf "Finished: %s %s" request.Headers.["x-websharper-rpc"].[0] (elapsedSpan.ToString())
                        //log.LogInformation (sprintf "runRpc: after HandleRequest %s %s" wsResp.ContentType wsResp.Content)
                        return ContentResult(Content = wsResp.Content, ContentType = wsResp.ContentType)
                    with e ->
                        log.LogError (sprintf "Exception: %A %A" e.Message e.StackTrace)
                        return failwithf "Exception %A %A" e.Message e.StackTrace
                } |> Async.StartAsTask
        
            open Microsoft.WindowsAzure.Storage
            open Microsoft.WindowsAzure.Storage.Queue
        
            //open Microsoft.Azure.Cosmos.Table
            open Microsoft.AspNetCore.Http
            open System.IO
            open Microsoft.AspNetCore.Mvc
        
            [<FunctionName("subir")>]
            let subirDocumentos([<HttpTrigger(AuthorizationLevel.Anonymous, "post"   , Route      = "subir/{id}/{filename}")>] req   : HttpRequest
                              , [<Blob("documentos/{id}/{filename}", System.IO.FileAccess.Write, Connection = "AzureWebJobsStorage"  )>] writer: Stream 
                              , log     : ILogger
                              , id      : string
                              , filename: string ) = 
              async {
                    log.LogInformation <| sprintf "subiendo documento %d %s" req.Form.Files.Count filename
                    if req.Form.Files.Count <> 1 then
                        log.LogWarning "no se encontro el documento"
                        return ContentResult(Content = "no se encontro el documento", ContentType = "text/plain")
                    else
                    let  file      = req.Form.Files |> Seq.head
                    do!  file.CopyToAsync writer |> Async.AwaitTask
                    eff {
                        try
                            do!  Asy.ofAsync <| Async.Sleep 500
                            let! blobClient = Azure.blobClientE()
                            let  container  = blobClient.GetContainerReference "documentos"
                            let  dir        = container.GetDirectoryReference id
                            let  blobRef    = dir.GetBlockBlobReference filename
                            Azure.getMimeO filename
                            |> Option.iter (fun mime -> 
                                blobRef.Properties.ContentType <- mime
                                blobRef.SetPropertiesAsync() |> Async.AwaitTask |> Async.Start
                            )
                        with e -> do! Rsl.ofResult <| Error (sprintf "%A" e)
                    } |> AzureHandler.run |> Async.map (function | Error m -> printfn "%A" m |_-> ()) |> Async.Start
                    return ContentResult(Content = "Documento subido!", ContentType = "text/plain")
              } |> Async.StartAsTask
        
            [<FunctionName("passMessages")>]
            let passMessages( [<QueueTrigger("mensajes", Connection = "AzureWebJobsStorage")>]  
                    mensaje: Azure.Mensaje, log: ILogger) = 
                async {
                    log.LogInformation (sprintf "guardarMensaje %A (ignorando) " mensaje)
                    //let! v = AmbienteAzure.guardarMensaje mensaje
                    //let! next = AmbienteAzure.queueMensajes.PeekMessageAsync() |> Async.AwaitTask
                    //if isNull next then 
                        //log.LogInformation <| sprintf "ambiente: %s" (ambiente.NombreAmbiente())
                        ////let! res = Acciones.ejecutarAcciones()
                        ////log.LogInformation <| sprintf "Acciones ejecutadas %A" res
                    ()
                } |> Async.RunSynchronously
        
            [<FunctionName("path")>]
            let path( [<HttpTrigger(AuthorizationLevel.Anonymous, "get" , "post", "options", Route = "{anything}")>] 
                        request     : HttpRequest
                      , log         : ILogger ) =
                //log.LogInformation(sprintf "isMimeMultipart: %A" <| request.Content.IsMimeMultipartContent())          
                request.Headers |> Seq.iter (fun h -> log.LogInformation(sprintf "header: %s %A" h.Key (h.Value |> String.concat "; ")) )
                let uid    = ParseO.tryParseWith request.Headers.TryGetValue "idAliado" |> Option.bind Seq.tryHead |> Option.defaultValue ""
                let claims = [| "http://schemas.microsoft.com/identity/claims/objectidentifier", uid |]
                claims |> Seq.iter (sprintf "%A" >> log.LogInformation)
                //let serializares =
                //    SerializadorEventos.serSerializadoresEventos.Keys 
                //    |> Seq.map (sprintf "%A")
                //    |> String.concat "\n"
                //    |> sprintf "serializers: %s"
                //let handlers =
                //    Eventos.Manejadores.Keys 
                //    |> Seq.map (sprintf "%A")
                //    |> String.concat "\n"
                //    |> sprintf "Handlers: %s"
                //let content = sprintf "Hello\n%s\n%s" serializares handlers
                let content = Directory.GetCurrentDirectory() //"Hello"
                ContentResult(Content = content, ContentType = "text/plain")
        
            [<FunctionName("letsEncryptF")>]
            let letsEncryptFunc( [<HttpTrigger(AuthorizationLevel.Anonymous, "get" , "post", "options", Route = "letsencrypt/{filename}")>] 
                                request     : HttpRequest
                              , filename    : string
                              , log         : ILogger ) =
                log.LogInformation "LetsEncryptFunc called..." 
                log.LogInformation(sprintf "LetsEncryptFunc: %s" filename)
                let content   = System.IO.File.ReadAllText(@"D:\home\site\wwwroot\.well-known\acme-challenge\" + filename)
                ContentResult(Content = content, ContentType = "text/plain")
                //let resp      = new HttpResponseMessage(System.Net.HttpStatusCode.OK)
                //resp.Content <- new StringContent(content, System.Text.Encoding.UTF8, "text/plain")
                //resp
        
        
        //#nowarn "52"
        //#nowarn "1182"
        //#nowarn "1178"
        
        //#define NOFRAMEWORK --noframework
        //#define WEBSHARPER
        
        //// to generate function.json (s):
        //// D:\Abe\CIPHERWorkspace\AzureFunctions\packages\Microsoft.NET.Sdk.Functions\tools\net46\Microsoft.NET.Sdk.Functions.Generator.exe bin\ProzperServer.dll .
        
        //// to save function.json:
        //// PUT https://management.azure.com/subscriptions/fd33982d-5249-477d-9587-b0f758dd6fe9/resourceGroups/Prozper/providers/Microsoft.Web/sites/Prozper0/functions/%s?api-version=2018-02-01
        //// {
        ////       "properties": {
        ////         "config": %s
        //// }
        
        
        
        
        //#define WEBSHARPER
        //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\LayoutEngine.dll"
        
        [< JavaScript >]
        module ClientSide =
        
            [< AutoOpen >]
            module Templating =
                open WebSharper.UI.Templating
                let [< Literal >] rootdir = @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\ProzperServer\website"
            
                let [< Literal >] TemplatesFileName = rootdir + @"\indexDes.html"
                type TemplateLib  = Template< TemplatesFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
            
                //let [< Literal >] LoginFileName = rootdir + @"\Login.html"
                //type TemplateLogin  = Template< LoginFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
            
                if IsClient then printfn "%s" TemplatesFileName
            
            module Msal =
                open Msal
            
                [< Inline "console.log($o)" >]
                let consoleLog o : unit = X<_>
            
                let callback(errorDesc, token, error, tokenType, state) = 
                    consoleLog(errorDesc, error, tokenType, token, state)
            
                let storeValue name v =
                    if IsClient then
                        JS.Window.LocalStorage.SetItem(name, v)
                        v
                    else ""
            
                let storageGetItem name =
                    if IsClient then
                        JS.Window.LocalStorage.GetItem name
                    else ""
            
                let storageSetItem(name, v) =
                    if IsClient then
                        JS.Window.LocalStorage.SetItem(name, v)
            
                let appId = if IsClient && JS.Window.Location.Host.StartsWith "prozper0" then "76703639-1d21-4bc3-bd46-c764f5ea78ee" else "70ad4f9b-9a2b-409e-9c1e-d04dbb2e7cf2"
            
                let applicationId       = storeValue "applicationId"          appId
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
                match storageGetItem "preambleState" with
                | "InPreamble"  | "" | null ->
                                          storeValue "preambleState"          "GoToSignIn" |> ignore
                |_->()
            
                let getAuthority tenantName policyName = sprintf "https://%s.b2clogin.com/tfp/%s.onmicrosoft.com/%s" tenantName tenantName policyName
            
                let authority           = getAuthority tenantName signInPolicy
                let userO               = Var.Create None
            
                let redirectCallback(error: AuthError, resp: AuthResponse) = 
                    try 
                        if box error <> null then consoleLog ("redirectCallback ERROR: ", error)
                        if box resp  <> null then consoleLog ("redirectCallback: "      , resp )
                    with e -> printfn "%A %s" e e.StackTrace
            
                let agent = 
                    lazy
                        let agent = 
                          UserAgentApplication(
                            Configuration.New(auth = AuthOptions.New( 
                                                    clientId          = applicationId
                                                ,   authority         = authority    
                                                ,   validateAuthority = false) )
                          )
                        agent.handleRedirectCallback( FuncWithArgs<_,_> redirectCallback )
                        agent
            //            UserAgentApplication(applicationId
            //                , authority
            //                , callback
            //                , UserAgentApplication.Options(validateAuthority         = false
            //                                            ,  storeAuthStateInCookie    = false ))
            
                let getId userO = userO |> Option.map (fun user -> user?idToken?oid) |> Option.defaultValue ""
            
                let referidoPor() = storageGetItem "referidoPor"
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
                    storageSetItem("referidoPor", "")
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
                                match agent.Value.getAccount() with
                                | null -> None 
                                | user -> Some user
                            if getId newO <> getId userO.Value then userO.Set newO
                            if userO.Value = None then executePolicy false SignIn
                            do! Async.Sleep 9000
                    } |> Async.Start
            
                let logout          () = executePolicy true SignIn
            
            
                let authParms () =
                    AuthenticationParameters.New( scopes = [|   sprintf "https://%s.onmicrosoft.com/%s/user_impersonation" tenantName appId 
                                                                sprintf "https://%s.onmicrosoft.com/%s/Prozper.Admin"      tenantName appId |] )
            
                let getTokenO0() = async {
                    let someToken from tk = 
                        if tk = null then 
                            consoleLog (from + " token is null!!")
                            None 
                        else Some tk
                    match userO.Value with
                    | Some user  -> try 
                                        let! auth = agent.Value.acquireTokenSilent(authParms () ) |> Promise.AsAsync 
                                        //consoleLog auth
                                        return someToken "getTokenO0 (0): " auth.accessToken
                                    with e ->
                                        consoleLog ("getTokenO0 (1): ", e.Message)
                                        try
                                            let! auth = Async.FromContinuations(fun (ok, ko, ca) -> 
                                                    agent.Value.handleRedirectCallback( FuncWithArgs<_,_> (fun (error: AuthError, resp: AuthResponse) ->
                                                        try 
                                                            if box error <> null then 
                                                                consoleLog ("redirectCallback ERROR: ", error)
                                                                ko (exn error.errorMessage)
                                                            elif box resp  <> null then 
                                                                consoleLog ("redirectCallback: "      , resp )
                                                                ok resp
                                                        with e -> printfn "%A %s" e e.StackTrace
                                                    ) )
                                                    agent.Value.acquireTokenRedirect( authParms () ) 
                                                )
                                            return someToken "getTokenO0 (2): " auth.accessToken
                                        with e ->
                                            consoleLog ("getTokenO0 (3): ", e.Message)
                                            return None
                    | None       -> consoleLog "getTokenO0 (4): No user connected!"
                                    return None
                    //return
                    //    match JS.Window.SessionStorage.GetItem "msal.idtoken" with
                    //    | "" | null -> None
                    //    | token     -> Some token
                }
            
                let getTokenO = 
                    let agent = Mailbox.callA print getTokenO0
                    fun () -> agent.PostAndAsyncReply(fun reply -> reply, () )
            [< JavaScript >]
            module ModeloUI =
            
                let modeloV = Var.Create {
                    idAliado      = IdAliado ":"
                    aliados       = [||]
                    anoActual     = System.DateTime.Now.Year
                    periodoActual = System.DateTime.Now.Month
                    premisas      = premisasCalculo
                    nevento       = -2L
                }
            
                let formasPagoAliadoV : Var<FormaPago []> = Var.Create [||]
            
                let invitacionesV = Var.Create ""    
                let emailsInvitarW = 
                    invitacionesV.View |> View.Map(
                        function
                        | REGEX rexEmail "gi" r -> r
                        |_-> [||]
                        >> Seq.distinct
                        >> Seq.sort
                        >> String.concat "\n"
                    )
                let invitacionesDisabledW = emailsInvitarW |> View.Map(function | "" -> "disabled" |_-> "")
            
                let selAliadoIdOV = Var.Create None
            
                let refAliadoIdOV : Var<IdAliado option> = Var.Create None
            
                let rec separate s parts =
                    match s with
                    | "" -> parts |> String.concat ","
                    | _  -> separate (s.Left -3) (s.Right 3 :: parts)
            
                let money (m:int) = "$" + separate (string m) []
            
                type EndPoint =
                | [< EndPoint "" >] DefaultEP
                |                   NoUser
                |                   PreRegister
                |                   Content of string
                | [<Wildcard>]      Pdf     of string
                | [<Wildcard>]      Video   of string
            
                open Sitelets.InferRouter
                module AF = FsRoot.LibraryJS.AppFramework 
            
                let endPointV   = if IsClient then Router.Infer() |> Router.InstallHash DefaultEP else Var.Create DefaultEP
            
            
                [< Inline "showPDF($f)" >]
                let showPdf (f:string) : unit = X<_>
            
                [< Inline "playVideo()" >]
                let playVideo () : unit = X<_>
            
                endPointV.View |> View.Sink(
                    function
                    | NoUser 
                    | PreRegister   -> ()
                    | Pdf   f       -> showPdf f
                    | Video _       -> playVideo()
                    |_-> Msal.checkUser()
                )
            
                let contentVar =
                    Var.Make 
                        (View.Map2 
                            (fun _ -> function
                            | DefaultEP       when Msal.userO.Value <> None -> "ProzperLyt.mainContent"
                            | Content     lyt when Msal.userO.Value <> None -> lyt
                            | PreRegister                                   -> "ProzperLyt.cntPreRegister"
                            | Pdf         _                                 -> "ProzperLyt.cntPDF"
                            | Video       _                                 -> "ProzperLyt.cntVideo"
                            | _                                             -> "ProzperLyt.cntFormaNoUser"
                            )
                            Msal.userO.View endPointV.View )
                        (function
                        | "ProzperLyt.mainContent"  -> DefaultEP
                        | lyt                       -> Content lyt
                        >> (fun v -> if endPointV.Value <> v then endPointV.Set v)
                        )
            
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
                    static member LoggedId = Msal.userO.Value |> Option.map (fun user -> user?idToken?oid) |> Option.defaultValue "" |> IdAliado
            
                module Rpc =
                    //Remoting.installBearer Msal.getTokenO
                    let llamadas, addLlamadas =
                        let llamadas = Var.Create 0
                        llamadas.View, fun n -> 
                            async {
                                do      llamadas.Set <| llamadas.Value + n
                                do!     Async.Sleep 50
                            }
                    let iterA arm = AsyncResult.iterA JS.Alert id arm
                    let [< Inline >] inline llamar (f : _ -> Async<Result<_,string>>) p  = async {
                        try do!     addLlamadas  1
                            return! f p
                        finally     addLlamadas -1 |> Async.Start
                    }
                    let [< Inline >] inline llamarT (f : string -> _ -> Async<Result<_,string>>) p  = 
                        asyncResult {
                        try do!     addLlamadas  1
                            let!    tk    = Msal.getTokenO() |> Async.map Result.rtn |> AsyncResult.absorbO (fun () -> JS.Window.Location.Href <- "/Login" ; "User not logged in")
                            return! f tk p
                        finally     addLlamadas -1  |> Async.Start
                    }
                    let obtenerUnions            p = llamar              Rpc0.obtenerUnions                                p
                    let obtenerIdInfluyente      p = llamar              Rpc0.obtenerIdInfluyente                          p
                    let agregarUsuarioSiEsNuevo  p = llamarT (fun tk  -> Rpc0.agregarUsuarioSiEsNuevo  tk Aliado.LoggedId) p
                    let ejecutarDataEventoNuevo  p = llamarT (fun tk  -> Rpc0.ejecutarDataEventoNuevo  tk Aliado.LoggedId) p
                    let enviarCorreosInvitacion  p = llamarT (fun tk  -> Rpc0.enviarCorreosInvitacion  tk Aliado.LoggedId) p
                    let obtenerFormasDePago      p = llamarT (fun tk ()->Rpc0.obtenerFormasDePagoId    tk Aliado.LoggedId) p
                    let registrarTarjeta         p = llamarT (fun tk  -> Rpc0.registrarTarjeta         tk Aliado.LoggedId) p
                    let registrarCuenta          p = llamarT (fun tk  -> Rpc0.registrarCuenta          tk Aliado.LoggedId) p
                    let validarFormaPago         p = llamarT (fun tk  -> Rpc0.validarFormaPago         tk Aliado.LoggedId) p
                    let borrarFormaPago          p = llamarT (fun tk  -> Rpc0.borrarFormaPago          tk Aliado.LoggedId) p
                    let obtenerFormasDePagoPara  p = llamarT (fun tk  -> Rpc0.obtenerFormasDePagoPara  tk                ) p
                    let obtenerFormasDePagoId    p = llamarT (fun tk  -> Rpc0.obtenerFormasDePagoId    tk                ) p
                    let obtenerListaDocs         p = llamarT (fun tk  -> Rpc0.obtenerListaDocs         tk                ) p
                    let obtenerEstadoParaUsuario p = llamarT (fun tk  -> Rpc0.obtenerEstadoParaUsuario tk                ) Aliado.LoggedId
                    let actualizarSubscripcion   p = llamarT (fun tk  -> Rpc0.actualizarSubscripcion   tk Aliado.LoggedId) p
                    let obtenerTransaccionesPara p = llamarT (fun tk  -> Rpc0.obtenerTransaccionesPara tk                ) Aliado.LoggedId
                    let refrescarTransacciones   p = llamarT (fun tk  -> Rpc0.refrescarTransacciones   tk                ) p
                    
            
                    WebSharper.Remoting.EndPoint <- Rpc0.serverEndPoint.Value + "rpc/rpc"
                [< AutoOpen >]
                module Refresh =
                    let mutable shouldRefresh = true
                
                    let refrescarData force = 
                        if force then shouldRefresh <- true
                        match Msal.userO.Value with
                        | Some user ->
                            asyncResult {
                                if Msal.referidoPor() <> "" then
                                    do!   Msal.claims user |> Rpc.agregarUsuarioSiEsNuevo
                                if not JS.Document.Hidden then
                                    if shouldRefresh then
                                        let! data = Rpc.obtenerEstadoParaUsuario ()
                                        shouldRefresh <- false
                                        //if modeloV.Value <> data then modeloV.Set data
                                        modeloV.Set data
                            } |> Rpc.iterA
                        |_-> modeloV.Set modeloVacio
                
                    if IsClient then
                
                        Msal.userO.View |> View.Sink (fun _-> refrescarData true)
                
                        async {
                            while true do
                                do! Async.Sleep (5 * 60 * 1000)
                                //refrescarData true
                        } |> Async.Start
                
                        try 
                            JS.Document.AddEventListener("visibilityChange", (fun () -> (*refrescarData false*)() ), false)
                        with _ -> ()
                
                    
                module VariousUI = 
                
                    let inline fst3 (v,_,_) = v
                    let inline snd3 (_,v,_) = v
                    let inline thr3 (_,_,v) = v
                
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
                    let statuses = Var.Create [||]
                    let aniosV   = Var.Create [||]
                    let mesesV   = Var.Create [||]
                    let tiposAr  = Var.Create [||]
                    let statusAr = Var.Create [||]
                
                    if IsClient then
                        asyncResult {
                            let! p, e, td, tl, g, tc, tt, ss, mm, yy, ta, sa =  Rpc.obtenerUnions()
                            paises  .Set p
                            estados .Set e
                            tiposDir.Set td
                            tiposTel.Set tl
                            generos .Set g
                            tiposCta.Set tc
                            tiposTar.Set tt
                            statuses.Set ss
                            aniosV  .Set yy
                            mesesV  .Set mm
                            tiposAr .Set ta
                            statusAr.Set sa
                        } |> Rpc.iterA 
                
                    let crearOption   n   = Html.Elt.option [             ] [ Html.text n] :> Doc
                    let crearOption2  n v = Html.Elt.option [ attr.value v] [ Html.text n] :> Doc
                    let crearOptions  ns  = ns  |> Seq.map               crearOption       |> Doc.Concat
                    let crearOptions2 nvs = nvs |> Seq.map (fun (n,v) -> crearOption2 n v) |> Doc.Concat
                
                    let removeButton f doc = 
                        Html.form [ attr.``class`` "mui-panel" ] 
                            [   doc 
                                Doc.Button "borrar" [ Html.attr.title "borrar" ] f
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
                
                    let formaDoc (ctaV  : Var<CuentaBancaria * string * bool>) =
                        let disabledW = ctaV.View |> View.Map thr3
                        let forma =
                            TemplateLib.CuentaBancaria()
                                .TiposCuenta( V( crearOptions tiposCta.V ).V )
                                .Mensaje(     V( snd3         ctaV    .V ).V ) 
                                .Disabled1(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled2(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled3(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled4(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled5(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Create()
                
                        ctaV .View 
                        |> View.Sink (fun (cta, _, _) -> 
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
                        ) |> View.Sink (function |None -> () | Some v -> if fst3 ctaV .Value <> v then ctaV .Set (v, "", false) )
                        requeridosW, forma.Doc
                
                    let formaDocO (ctaOV  : Var<(CuentaBancaria * string * bool) option>) =
                        formaDoc (Var.Lens ctaOV (Option.defaultValue (ctaVacio, "", false) ) (fun _ v -> Some v ))
                
                module TarjetaCredito =
                    open VariousUI
                
                    let formaDoc (tarV  : Var<(TarjetaCredito * string * bool)>) =
                        let disabledW = tarV.View |> View.Map thr3
                        let forma =
                            TemplateLib.TarjetaCredito()
                                .TiposTarjeta( V( tiposTar.V                   |> crearOptions  ).V )
                                .Mensaje(      V( tarV    .V                   |> snd3          ).V )
                                .Anios(        V( aniosV  .V |> Seq.map string |> crearOptions  ).V )
                                .Meses(        V( mesesV  .V |> Seq.map string |> crearOptions  ).V )
                                .Disabled1(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled2(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled3(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled4(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Disabled5(    attr.disabledDynPred (View.Const "") disabledW       )
                                .Visible(      attr.styleDyn <| V( if disabledW.V then "display:None" else "" ) )
                                .Create()
                
                        tarV .View 
                        |> View.Sink (fun (tar, mensaje, validated) -> 
                            forma.Vars.Titular      .Set <| tar.titular
                            forma.Vars.TipoTarjeta  .Set <| sprintf "%O"        tar.tipoTarjeta
                            forma.Vars.Numero       .Set <| match tar.numero with NumeroTarjeta s -> s
                            forma.Vars.AnioVenc     .Set <| sprintf "%04d"      tar.expiracion.anio
                            forma.Vars.MesVenc      .Set <| match tar.expiracion.mes with 
                                                            | Mes.Enero      -> "Enero"
                                                            | Mes.Febrero    -> "Febrero"   
                                                            | Mes.Marzo      -> "Marzo"     
                                                            | Mes.Abril      -> "Abril"     
                                                            | Mes.Mayo       -> "Mayo"      
                                                            | Mes.Junio      -> "Junio"     
                                                            | Mes.Julio      -> "Julio"     
                                                            | Mes.Agosto     -> "Agosto"    
                                                            | Mes.Septiembre -> "Septiembre"
                                                            | Mes.Octubre    -> "Octubre"   
                                                            | Mes.Noviembre  -> "Noviembre" 
                                                            | Mes.Diciembre  -> "Diciembre"
                                                            | _              -> "XX"
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
                        ) |> View.Sink (function |None -> () | Some v -> if fst3 tarV .Value <> v then tarV .Set (v, "", false) ) 
                        requeridosW, forma.Doc
                
                    let formaDocO (tarOV  : Var<(TarjetaCredito * string * bool) option>) =
                        formaDoc (Var.Lens tarOV (Option.defaultValue (tarVacio, "", false) ) (fun _ v -> Some v ))
                
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
                                            asyncResult {
                                                let contactos = [|    
                                                    CorreoElectronico correo
                                                    Telefono          telefono
                                                    Direccion         direccion 
                                                |]
                                                let  nid  = System.Guid.NewGuid().ToString().Replace("-", "").Substring(0,20) |> IdAliado
                                                let! resp = (nid, datos, Some modeloV.Value.idAliado, contactos) |> RegistroNuevo |> Rpc.ejecutarDataEventoNuevo
                                                refrescarData true
                                                sprintf "%A" resp|> JS.Alert
                                            } |> Rpc.iterA
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
                                            asyncResult {
                                                let! resp = ActualizarDatosPersonales (al.id, datos) |> Rpc.ejecutarDataEventoNuevo
                                                refrescarData true
                                                sprintf "%A" resp|> JS.Alert
                                            } |> Rpc.iterA
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
                
                        () //FormaGenerica.forma
                
                
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
                                            asyncResult {
                                                let! resp = ActualizarContactos (al.id, contactosV.Value) |> Rpc.ejecutarDataEventoNuevo
                                                refrescarData true
                                                sprintf "%A" resp|> JS.Alert
                                            } |> Rpc.iterA 
                                        | _ -> JS.Alert "Error not caught FormaDatos"
                                )
                                .Create()
                
                        forma.Doc
                
                    let formaDoc() = aliadoIdDoc formaContactos
                
                module FormaFirma =
                
                    let mensajes    = Var.Create ""
                    let firmanteV   = Var.Create ""
                    let fechaHoraV  = Var.Create ""
                    let locationV   = Var.Create (JSObject())
                    let firmadoV    = Var.Create false
                
                    async {
                        while true do
                            do! Async.Sleep 1000
                            fechaHoraV.Set <| nowStamp().Left(19)
                    } |> Async.Start
                
                    let uploaded : System.Action<obj,string,JQuery.JqXHR> =
                        System.Action<_,_,_>(fun a b c -> 
                            //refrescarListaDocs()
                            print b 
                        )
                
                    [< Inline "html2canvas($el)" >]
                    let html2canvas (el:Dom.Element) : Promise<Dom.Element> = X<_>
                
                    let toBlob (canvas:Dom.Element) (f:Blob -> unit) =
                        if   isUndefined canvas?toBlob   |> not then canvas?toBlob        f
                        elif isUndefined canvas?msToBlob |> not then canvas?msToBlob() |> f
                        else JS.Alert "Browser no es compatible: toBlob"
                
                    [< Inline "obj2Table($o)" >]
                    let obj2Table (o:JSObject) : unit = X<_>
                
                    let subirScreenShot tipo filenamePre = async {
                        try
                            firmadoV.Set true
                            let! loc = Async.FromContinuations(fun (cnt, _, _) -> 
                                JQuery.JQuery.GetJSON("https://ipapi.co/json/", (fun (loc, _) -> cnt (As<_> loc) ) ) |> ignore
                            )
                            [   "appVersion"
                                "platform"  
                                "product"
                                "productSub"
                                "vendor"
                                "languages"
                            ]
                            |> Seq.iter (fun k -> (loc : JSObject).Add(k, JS.Window.Navigator?(k)) )
                            //locationV.Set loc
                            obj2Table loc
                            do! Async.Sleep 100
                            let! canvas = html2canvas(JS.Document.QuerySelector("#FormaFirma")) |> Promise.AsAsync
                            JS.Document.Body.AppendChild canvas |> ignore
                            let filename = sprintf "%s %s.png" filenamePre <| fechaHoraV.Value.Replace(":",".")
                            toBlob canvas (fun (blob:Blob) ->
                                let fd = FormData()
                                fd.Append("fname", filename)
                                fd.Append("data" , blob    )
                                JQuery.AjaxSettings(  Type          = JQuery.RequestType.POST
                                                    , Url           = "/api/subir/" + modeloV.Value.idAliado.Id + "/" + filename
                                                    , Data          = fd
                                                    , ContentType   = Union1Of2 false
                                                    , ProcessData   =           false
                                                    , Success       = uploaded
                                                )
                                |> JQuery.JQuery.Ajax |> ignore
                            )
                            JS.Document.Body.RemoveChild canvas |> ignore
                            return! ActualizarArchivos(Aliado.LoggedId, [| {
                                            comentario = "Firma Electronica"
                                            idAliado   = modeloV.Value.idAliado
                                            modificado = System.DateTime.Now
                                            nombre     = filename
                                            status     = Subido
                                            tamano     = 0L
                                            tipo       = tipo
                                        } |]) |> Rpc.ejecutarDataEventoNuevo
                        finally
                            Refresh.refrescarData true
                            firmadoV.Set          false
                    }
                
                    let formaFirma (nombre:View<string>) (contenido:Doc) tipo procesar filenamePre =
                        let firmarDocumento() = 
                            asyncResult {
                                if mensajes.Value <> "" then JS.Alert mensajes.Value else
                                let! res = subirScreenShot tipo filenamePre
                                do! procesar() |> AsyncResult.map JS.Alert
                                endPointV.Set EndPoint.DefaultEP
                            } |> Rpc.iterA
                        let acepto   = Var.Create false
                        //let nombreW  = V( Aliado.nombre2 aliadoW.V.datosPersonales) 
                        let ymd    (f:System.DateTime) = f.Year * 10000 + f.Month * 100 + f.Day
                        let forma    =
                            TemplateLib.FormaFirma()
                                .FirmarClass(       if mensajes.V = "" then "mui-btn--primary" else ""     )
                                .Mensaje(           mensajes.V                                             )
                                .Contenido(         contenido                                              )
                                .Acepto(            acepto.V                                               )
                                .Firmar(            fun _ -> firmarDocumento()                             )
                                .DateTime(          fechaHoraV.V                                           )
                                .IdLoggedIn(        Aliado.LoggedId.Id                                     )
                                //.Location(          sprintf "%A" locationV.V                               )
                                .TextoBotonFirmar(  if firmadoV.V then "FIRMADO!" else "Firmar y Procesar" )
                                .Create()
                        V( 
                            [
                                forma.Vars.Firmante.V.Trim() <> nombre.V.ToUpper()   , "Nombre en MAYUSCULAS debe coincidir"
                                forma.Vars.Fecha  .V         <> fechaHoraV.V.Left(10), "Introduzca fecha de hoy (YYYY-MM-DD)"
                                forma.Vars.Acepto .V         <> true                 , "Acepte los terminos indicados"
                                Aliado.LoggedId              <> aliadoW.V.id         , "El documento solo debe ser firmado por el titular de la cuenta"
                            ]
                            |> Seq.filter fst
                            |> Seq.map    snd
                            |> String.concat ", "
                        )
                        |> View.Sink mensajes.Set
                        forma.Doc
                     
                module FormaAutorizacion =
                
                    let cuentaPagoO     = Var.Create <| (None : CuentaPago option)
                    let cuentaAutorizar = Var.Create <| Html.text "No hay cuenta seleccionada"
                    let titular         = Var.Create ""
                    let mutable pid : IdPayment = IdPayment ""
                
                    let actualizarSubscripcion() = 
                        Rpc.actualizarSubscripcion pid |> AsyncResult.map (sprintf "Subscripción #%s creada.")
                
                    let formaAutorizacion () =
                        let formaContenido  =
                            TemplateLib.AutorizacionPago()
                                .Titular(           titular.V                                           ) 
                                .MontoAfiliacion(   sprintf "$%d.00" modeloV.V.premisas.montoAfiliacion )
                                .dia(               string <| Aliado.dia aliadoW.V.diaPago              )
                                .CuentaDebitar(     cuentaAutorizar.V                                   )
                                .Doc()
                        
                        cuentaPagoO.Value
                        |> Option.map (fun cp -> cp.AutorizacionPre)
                        |> Option.defaultValue "Autorizacion -- ------"
                        |> FormaFirma.formaFirma titular.View formaContenido Autorizacion actualizarSubscripcion
                     
                module FormaContrato =
                
                    let firmarContrato() = 
                        AsyncResult.rtn "Contrato firmado!"
                
                    let formaContrato () =
                        let nombreW  = V( Aliado.nombre2 aliadoW.V.datosPersonales) 
                        let formaContenido  =
                            TemplateLib.Contrato()
                                .Aliado( nombreW.V ) 
                                .Doc()
                        FormaFirma.formaFirma nombreW formaContenido Contrato firmarContrato "Contrato"
                     
                module FormaFormasPago =
                    open VariousUI
                
                    let msg ({ FormaPago.authorizeIdR = idR }) = 
                        match idR with 
                        | Error "" -> "La cuenta aun no ha sido verificada" 
                        | Error m  -> m 
                        | Ok v -> sprintf "Cuenta verificada: %A" v 
                
                    let ftar = (fun cp -> match cp.cuentaPago with TarjetaCredito tar -> Some (tar, msg cp, (match cp with { FormaPago.authorizeIdR = Ok _ } -> true |_-> false)) |_-> None), (fun fp v -> { fp with cuentaPago = TarjetaCredito v ; authorizeIdR = Error "" })
                    let fcta = (fun cp -> match cp.cuentaPago with CuentaBancaria cta -> Some (cta, msg cp, (match cp with { FormaPago.authorizeIdR = Ok _ } -> true |_-> false)) |_-> None), (fun fp v -> { fp with cuentaPago = CuentaBancaria v ; authorizeIdR = Error "" })
                
                    let refrescarFormasPago() = Rpc.obtenerFormasDePago() |> AsyncResult.map formasPagoAliadoV.Set |> Rpc.iterA
                
                    let formaFormasPago (aliadoW: View<Aliado>) =
                        let mensajes      = Var.Create ""
                        let mostrar       = Var.Create false
                        let formasPagoV   = Var.Create [||]
                        
                        formasPagoAliadoV.View
                        |> View.Sink formasPagoV.Set
                
                        refrescarFormasPago()
                        
                        let formasPagoIW  = V(formasPagoV.V |> Seq.indexed)
                
                        let makeVar (f: (FormaPago -> ('a * string * bool) option) , fr : (FormaPago -> 'a -> FormaPago)) i = 
                            Var.Make (V(formasPagoV.V |> Seq.tryItem i |> Option.bind f )) 
                                    (function Some nv -> Array.replace i (fr formasPagoV.Value.[i] (fst3 nv) ) formasPagoV.Value |> formasPagoV.Set |_-> () )
                        
                        let tars = V( formasPagoIW.V |> Seq.choose (fun (i, c) -> fst ftar c |> Option.map (fun _ -> i) ) )
                        let ctas = V( formasPagoIW.V |> Seq.choose (fun (i, c) -> fst fcta c |> Option.map (fun _ -> i) ) )
                
                        let validar (fp:FormaPago) = 
                            asyncResult {
                                let! pymtId = fp .authorizeIdR
                                let! resp   = Rpc.validarFormaPago pymtId
                                JS.Alert resp
                            } |> Rpc.iterA
                
                        let otherButtons i docF = 
                            [   
                                yield Doc.Button "AUTORIZAR DEBITO" [
                                        attr.``class``   "mui-btn mui-btn--raised mui-btn--primary"
                                        attr.title       "Autorizar pago recurrente" 
                                        attr.styleDyn <| V (match formasPagoV.V.[i].authorizeIdR with | Ok _ -> "" |_-> "display:None")
                                        ] 
                                        (fun _ -> 
                                            match formasPagoV.Value.[i].authorizeIdR, formasPagoV.Value.[i].cuentaPago with
                                            | Error m, _ -> JS.Alert ("Pago no está verificado en Authorize: " + m)
                                            | Ok pid,  CuentaBancaria           { titular = titular }
                                            | Ok pid,  TarjetaCredito           { titular = titular } ->
                                                FormaAutorizacion.cuentaPagoO       .Set <| Some formasPagoV.Value.[i].cuentaPago
                                                FormaAutorizacion.cuentaAutorizar   .Set <| docF()
                                                FormaAutorizacion.titular           .Set <| titular
                                                FormaAutorizacion.pid                    <- pid
                                                Content "ProzperLyt.cntAutorizacion"     |> endPointV.Set
                                            | _ -> JS.Alert "Autorizacion no esta implementada"
                                        )
                                yield Html.br [] []
                                yield Html.br [] []
                                yield docF()
                                yield V(
                                    match formasPagoV.V.[i].subscripcion with
                                    | None     -> Doc.Empty
                                    | Some sub -> Html.div [] [ Html.text <| sprintf "Subscripcion: %s" sub.Short ]) |> Doc.BindView id
                                yield Doc.Button "validar" [    
                                        Html.attr.title "validar forma de pago" 
                                        Html.attr.styleDyn <| V (match formasPagoV.V.[i].authorizeIdR with | Ok _ -> "" |_-> "display:None")
                                        ] (fun _ -> validar formasPagoV.Value.[i]  )
                            ] 
                            |> Doc.Concat
                            |> removeButton (fun _ -> formasPagoV.Value |> Array.remove i |> formasPagoV.Set )
                
                
                        let tarDocs = tars |> Doc.BindSeqCachedBy id (fun i -> makeVar ftar i |> (fun v () -> TarjetaCredito.formaDocO v |> snd) |> otherButtons i )
                        let ctaDocs = ctas |> Doc.BindSeqCachedBy id (fun i -> makeVar fcta i |> (fun v () -> CuentaBancaria.formaDocO v |> snd) |> otherButtons i )
                
                        let fp cp = {
                            cuentaPago   = cp
                            authorizeIdR = Error ""
                            nombre       = ""
                            subscripcion = None
                        }
                
                        let fpIds fps  = fps |> Seq.choose(fun fp -> match fp.authorizeIdR with | Ok fpid -> Some fpid |_-> None) |> Set
                
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
                                            asyncResult {
                                                let fpids = fpIds formasPagoAliadoV.Value - fpIds formasPagoV.Value
                                                for fpid in fpids do
                                                    let! resp = Rpc.borrarFormaPago fpid
                                                    () // do! ResultMessage.Info resp
                                                for formaPago in formasPagoV.Value do
                                                    let callO = match formaPago.cuentaPago with
                                                                | TarjetaCredito tar when not (tar.numero.Id.Contains "X") -> Some <| Rpc.registrarTarjeta tar
                                                                | CuentaBancaria cta when not (cta.numero.Id.Contains "X") -> Some <| Rpc.registrarCuenta  cta
                                                                | _-> None
                                                    match callO with
                                                    | None -> ()
                                                    | Some call ->
                                                    let! resp = call
                                                    () // do! ResultMessage.Info resp
                                                refrescarFormasPago()
                                                Refresh.refrescarData true
                                            } |> Rpc.iterA
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
                            let rec buscarExpandidos (al:Aliado) = seq {
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
                            V (Seq.tryFind (fun (al:Aliado) -> al.id = alid.V) aliados.V)
                
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
                
                
                module Transacciones =
                
                    let transaccionesW = 
                        modeloV.View 
                        |> View.MapAsync (fun modelo -> 
                            Rpc.obtenerTransaccionesPara Aliado.LoggedId 
                            |> Async.map (Result.defaultValue [||]))
                
                    let docTransacciones aliadoW =
                        TemplateLib.Transacciones()
                            .TBody(
                                (transaccionesW, aliadoW)
                                ||> View.Map2 (fun trs al -> trs |> Seq.filter (fun tr -> tr.idAliado = al.id) |> Seq.sortBy (fun tr -> tr.fechaPago))
                                |> Doc.BindSeqCachedViewBy (fun tr -> tr.transaccion) (fun trid trv ->
                                    TemplateLib.Transaccion()
                                        .Fecha(              trv.V.fechaPago |> Date.toYYYYMMDDHHMM "-"  )
                                        .TransId(            trv.V.transaccion                           )
                                        .Cuenta(             trv.V.concepto .ToString()                  )
                                        .Status(             trv.V.statusTran                            )
                                        .Monto(              sprintf "%0.2f" (float trv.V.monto / 100. ) )
                                        .Doc()
                                )
                            ).Doc()
                
                    let transacciones() =
                        selAliadoIdDoc docTransacciones
                module ListaDocs =
                    open VariousUI
                
                    let expandedOV = Var.Create None
                    let aliadoIdW  = V(expandedOV.V  |> Option.defaultWith (fun () -> aliadoW.V.id) )
                    let listaDocs() =
                
                        let docsV = ListModel.Create (fun (ar:Archivo) -> ar.nombre) [||]
                        let origV = ListModel.Create (fun (ar:Archivo) -> ar.nombre) [||]
                
                        let refrescarListaDocs() = 
                            asyncResult {
                                origV.Set [||]
                                docsV.Set [||]
                                let! aid  = View.GetAsync aliadoIdW
                                let! docs = Rpc.obtenerListaDocs aid
                                origV.Set docs
                                docsV.Set docs
                            } |> Rpc.iterA 
                
                        aliadoIdW |> View.Sink (fun id -> if id <> IdAliado "" then refrescarListaDocs())
                
                        let uploaded id : System.Action<obj,string,JQuery.JqXHR> =
                            System.Action<_,_,_>(fun a b c ->
                                asyncResult {
                                    refrescarListaDocs()
                                    let! r = ActualizarArchivos(IdAliado id, Seq.toArray docsV.Value) |> Rpc.ejecutarDataEventoNuevo
                                    Refresh.refrescarData true
                                    JS.Alert b 
                                } |> Rpc.iterA 
                            )
                
                        let subir (e:Dom.MouseEvent) id =
                            e.PreventDefault()
                            let form = JQuery.JQuery("#SubirDocumentos")
                            let fd = FormData()
                            for x in form.SerializeArray() do
                                fd.Append(x?name, (x?value : string) )
                            let files = FileList.OfElement <| form.Children("input[type=file]").First().Get(0)
                            let file  = files.[0]
                            let filename = file.Name 
                            fd.Append("file", file)
                            JQuery.AjaxSettings(   Type          = JQuery.RequestType.POST
                                                , Url           = "/api/subir/" + id + "/" + filename
                                                , Data          = fd
                                                , ContentType   = Union1Of2 false
                                                , ProcessData   =           false
                                                , Success       = uploaded id
                                            )
                            |> JQuery.JQuery.Ajax |> ignore
                
                
                        TemplateLib.SubirDocumentos()
                            .TBody(
                                docsV
                                |> ListModel.docLensMapView id (fun nm arV ->
                                    let disabledW = V( arV.V.idAliado = Aliado.LoggedId )
                                    let enlace = 
                                        TemplateLib.EnlaceDocumento()
                                            .idAliado( V ( aliadoIdW.V.Id )                            )
                                            .archivo(      arV.V.nombre                                )
                                            .nombre(       arV.V.nombre                                )
                                            .Doc()
                                    TemplateLib.FilaDocs()
                                        .enlace(        enlace                                      )
                                        .tipo(  Var.Make(V(arV.V.tipo  .ToString() )) (TipoArchivo  .Parse >> (Lens arV.V.tipo  ).Set) )
                                        .status(Var.Make(V(arV.V.status.ToString() )) (StatusArchivo.Parse >> (Lens arV.V.status).Set) )
                                        .tamano(        arV.V.tamano     |> String.thousands        )
                                        .modificado(    arV.V.modificado |> Date.toYYYYMMDDHHMM "-" )
                                        .statuses(      V(statusAr.V |> crearOptions ).V            )
                                        .disabled(      attr.disabledDynPred (View.Const "") disabledW )
                                        .Doc()
                                )
                            )
                            .Subir( fun e -> aliadoIdW |> View.Map (fun aid -> aid.Id) |> View.Get (subir e.Event)  )
                            .TiposArchivo( V(tiposAr.V |> crearOptions ).V )
                            .Changed(        if origV.View.V = docsV.View.V then "" else "mui-btn--primary" )
                            .Salvar(fun ev ->
                                    asyncResult {
                                        let ars = 
                                            docsV.Value
                                            |> Seq.filter(fun ar ->
                                                let orO =  origV.Value |> Seq.tryFind(fun o -> o.nombre = ar.nombre)
                                                orO <> Some ar)
                                            |> Seq.toArray
                                        if Seq.isEmpty ars |> not then
                                            let! aid  = View.GetAsync aliadoIdW
                                            let! resp = ActualizarArchivos(aid, ars) |> Rpc.ejecutarDataEventoNuevo
                                            refrescarListaDocs()
                                            refrescarData true
                                            sprintf "%A" resp|> JS.Alert
                                    } |> Rpc.iterA
                            )
                            .Doc()
                
                module Pendientes =
                
                    let esIdentificacion  (ar:Archivo) = match ar.tipo with | Pasaporte | Cedula | LicenciaConducir -> true |_-> false
                    let esArchivoTipo tipo (ar:Archivo) = ar.tipo = tipo
                
                    let filtroArchivo      p (archivos:Archivo   seq) = archivos |> Seq.filter (fun ar -> ar.status <> Expirado && ar.status <> Cancelado) |> Seq.filter  p |> Seq.toArray
                    let tryArchivo         p (archivos:Archivo   seq) = archivos |> filtroArchivo (fun _ -> true) |> Seq.tryFind p
                    let tryArchivoTipo    tipo = tryArchivo    (fun ar -> ar.tipo = tipo)
                
                    let filtroCuenta       p (cuentas :FormaPago seq) = cuentas  |> Seq.filter p |> Seq.toArray
                
                    let pendiente (docs:Doc seq) = Html.li [] docs
                
                    module Enlace =
                        let FormaW9                         = "/#/Pdf/blob/Inscripcion/07 Form W-9.pdf"
                        let FormaW8BEN                      = "/#/Pdf/blob/Inscripcion/05 Form W-8BEN.pdf"
                        let FormasPago                      = "/#/Content/ProzperLyt.cntFormaFormasPago"
                        let FormaContrato                   = "/#/Content/ProzperLyt.cntFormaContrato"
                        let Subir                           = "/#/Content/ProzperLyt.cntSubirDocumentos"
                
                    let tarchivo2String =
                        function
                        | FormaW9               -> ("Formulario W-9"      , "o"   ), Enlace.FormaW9
                        | FormaW8BEN            -> ("Formulario W-8BEN"   , "o"   ), Enlace.FormaW8BEN
                        | Autorizacion          -> ("Autorización de pago", "a"   ), Enlace.FormasPago
                        | Contrato              -> ("Contrato"            , "o"   ), Enlace.FormaContrato
                        | Cedula                -> ("Cedula"              , "a"   ), Enlace.Subir
                        | LicenciaConducir      -> ("Licencia de Conducir", "a"   ), Enlace.Subir
                        | Pasaporte             -> ("Pasaporte"           , "o"   ), Enlace.Subir
                        | TipoArchivo.Otro txt  -> (txt                   , "o(a)"), Enlace.Subir
                
                    let sufijo (ar:Archivo) = tarchivo2String ar.tipo |> fst |> snd
                
                    let enlace          dir texto   = Html.a [ attr.href dir ] [ Html.text texto ]
                    let enlaceArchivo (ar:Archivo)  = 
                            TemplateLib.EnlaceDocumento()
                                .idAliado( ar.idAliado.Id                       )
                                .archivo(  ar.nombre                            )
                                .title(    ar.nombre                            )
                                .nombre(   tarchivo2String ar.tipo |> fst |> fst)
                                .Doc()
                
                    let agregarCuenta () =
                        [ 
                            Html.i    [ attr.``class`` "far fa-square" ] []
                            Html.text " Agregar Forma de pago: "
                            enlace Enlace.FormasPago  "Tarjeta de Credito o Cuenta Bancaria" 
                        ] |> Seq.ofList
                
                    let firmarContrato () =
                        [ 
                            Html.i    [ attr.``class`` "far fa-square" ] []
                            Html.text " Firmar "
                            enlace Enlace.FormaContrato "Contrato" 
                        ] |> Seq.ofList
                
                    let firmarAutorizacion () =
                        [ 
                            Html.i [ attr.``class`` "far fa-square" ] []
                            Html.text " Firmar "
                            enlace Enlace.FormasPago "Autorizacion (Haga click en: AUTORIZAR DEBITO)" 
                        ] |> Seq.ofList
                
                    let subirArchivoTipo (tipo:TipoArchivo) =
                        let (text, suf), link = tarchivo2String tipo
                        [ 
                            Html.i [ attr.``class`` "far fa-square" ] []
                            enlace Enlace.Subir (" Subir " + text + ".")
                            enlace link          "(Descargar aqui)"    
                        ] |> Seq.ofList
                
                    let subirIdentificacion () =
                        [ 
                            Html.i [ attr.``class`` "far fa-square" ] []
                            enlace Enlace.Subir " Subir " 
                            Html.text "documento de identidad: "
                            enlace Enlace.Subir "Cedula, Pasaporte, Licencia de Conducir" 
                        ] |> Seq.ofList
                
                    let pendienteArchivo (ar:Archivo) =
                        [ 
                            Html.i [ attr.``class`` "far fa-check-square" ] []
                            Html.text " "
                            enlaceArchivo ar
                            Html.text (sprintf " subid%s. " <| sufijo ar)
                            Html.i [ attr.``class`` "far fa-square" ] []
                            Html.text " Pendiente de Verificacion"
                        ] 
                
                    let verificarArchivo (ar:Archivo) =
                        match ar.status with
                        | Verificado   -> [ 
                                            Html.i [ attr.``class`` "fas fa-check-double" ] []
                                            Html.text " "
                                            enlaceArchivo ar
                                            Html.text (sprintf " Verificad%s"  <| sufijo ar)
                                        ]
                        | Rechazado    -> [ 
                                            Html.i [ attr.``class`` "fas fa-times-circle" ] []
                                            Html.text " "
                                            enlaceArchivo ar
                                            Html.text (sprintf " Rechazad%s"  <| sufijo ar)
                                        ]
                        | _            -> pendienteArchivo ar
                        |> Seq.ofList
                
                    let chequearArchivos es (subirlo:unit-> Doc seq) archivos =
                        match filtroArchivo es archivos with
                        | [||]   -> subirlo() |> Seq.singleton
                        | docs   -> match docs |> Seq.tryFind (fun d -> d.status =  Verificado) with
                                    | Some ver -> verificarArchivo ver |> Seq.singleton
                                    | None     -> 
                                    let mensajes = docs |> Seq.map verificarArchivo
                                    if docs |> Seq.exists (fun d -> d.status <> Rechazado) then mensajes
                                    else               subirlo() |> Seq.singleton |> Seq.append mensajes
                
                    let verificarCuenta (fp:FormaPago) =
                        let sub = fp.subscripcion |> Option.map (fun sub -> "Subscripción: " + sub.Short) |> Option.defaultValue ""
                        match fp.authorizeIdR with 
                        | Ok id   -> [ 
                                        Html.i [ attr.``class`` "far fa-check-square" ] []
                                        Html.text (sprintf " %s %s Registrada. (%s) %s"              fp.cuentaPago.TipoLargo fp.cuentaPago.MaskedCuenta id.Id sub) 
                                    ]
                        | Error m -> [ 
                                        Html.i [ attr.``class`` "far fa-square" ] []
                                        Html.text (sprintf " %s %s NO REGISTRADA en Authorize (%s)" fp.cuentaPago.TipoLargo fp.cuentaPago.MaskedCuenta m    ) 
                                    ]
                        |> Seq.ofList
                
                    let chequearCuentas es (agregar:unit-> Doc seq) (cuentas:FormaPago[]) =
                        match filtroCuenta es cuentas with 
                        | [||] -> agregar() |> Seq.singleton
                        | docs -> docs      |> Seq.map verificarCuenta
                
                    let esAutorizacion (cuentas:FormaPago seq) (archivo:Archivo) =
                        if archivo.tipo = Autorizacion then
                            cuentas |> Seq.exists (fun fp -> archivo.nombre.Contains fp.cuentaPago.MaskedCuenta)
                        else false
                
                    let chequearStatusAliado (aliado:Aliado) (archivosAR:AsyncResult<Archivo[], _>) (cuentasAR:AsyncResult<FormaPago[], _>) = asyncResult {
                        match aliado.status with
                        | CuentaCreada -> 
                            let! archivos = archivosAR
                            let! cuentas  = cuentasAR
                            let  ctasAuth = cuentas |> Seq.filter (fun fp -> match fp.authorizeIdR with Ok _ -> true |_-> false)
                            return  [
                                yield!     archivos |> chequearArchivos (esArchivoTipo Contrato    )            firmarContrato
                                yield!     cuentas  |> chequearCuentas  (fun _ -> true             )            agregarCuenta
                                if ctasAuth |>  Seq.length > 0 then
                
                                    yield! archivos |> chequearArchivos (esAutorizacion ctasAuth   )            firmarAutorizacion
                                yield!     archivos |> chequearArchivos (esArchivoTipo FormaW9     ) (fun () -> subirArchivoTipo FormaW9     )
                                yield!     archivos |> chequearArchivos (esArchivoTipo FormaW8BEN  ) (fun () -> subirArchivoTipo FormaW8BEN  )
                                yield!     archivos |> chequearArchivos  esIdentificacion                       subirIdentificacion   
                            ] 
                        |_-> return []
                    }
                
                    let pendientes (aliadoW :View<Aliado>) = 
                        aliadoW 
                        |> View.MapAsync (fun al -> async {
                            let! r = chequearStatusAliado al (Rpc.obtenerListaDocs al.id) (Rpc.obtenerFormasDePagoId al.id)
                            match r with
                            | Ok    doc when Seq.isEmpty doc 
                                        -> return Doc.Empty
                            | Ok    doc -> return TemplateLib.Pendientes()
                                                    .pasos(doc |> Seq.map pendiente |> Doc.Concat )
                                                    .Doc()
                            | Error m   -> return Html.text m
                        } )
                        |> Doc.BindView id
                
                module ReporteConsolidado =
                    open VariousUI
                    open SortWith
                
                    let nombreReferidor idO =
                        idO
                        |> Option.bind (fun id ->
                            modeloV.Value.aliados
                            |> Seq.tryFind (fun al -> al.id = id))
                        |> Option.map (fun al -> Aliado.nombre al.datosPersonales)
                        |> Option.defaultValue "-"
                    let referidos al =
                        if al.nReferidos = 0 then "-" else
                        sprintf "%d/%d" al.nRefActivos al.nReferidos
                    let descendientes al =
                        if al.nDescendientes = 0 then "-" else
                        sprintf "%d/%d" al.nDescActivos al.nDescendientes
                    let comision    v  = if v = 0 then "-" else money v 
                    let flecha (o:int, d:bool, _) = if o = 1 then (if d then "\u2191" else "\u2193") else ""
                    
                    type Fila<'T> = 'T []
                
                    let mutable definicion = [||]
                    let agregarCampo orden direccion f : int =
                        definicion <- Array.append definicion [| orden, direccion, f |]
                        definicion.Length - 1
                
                    let i_archivos      = agregarCampo  1 false (fun (al:Aliado) -> if al.docPendientes = 0 then sprintf "%2d" al.documentos else sprintf "(%2d)%2d" al.docPendientes al.documentos)
                    let i_nombre        = agregarCampo 14 true  (fun (al:Aliado) -> Aliado.nombre       al.datosPersonales            )
                    let i_correo        = agregarCampo 13 true  (fun (al:Aliado) -> Aliado.correo       al                            )
                    let i_status        = agregarCampo 03 true  (fun (al:Aliado) -> sprintf "%A"        al.status                     )
                    let i_influyente    = agregarCampo 04 false (fun (al:Aliado) -> al.influyente |> Option.defaultValue ""           )
                    let i_tipo          = agregarCampo 05 true  (fun (al:Aliado) -> sprintf "%A"        al.tipo                       )
                    let i_referido      = agregarCampo 06 true  (fun (al:Aliado) -> nombreReferidor     al.idPadreO                   )
                    let i_nivel         = agregarCampo 07 true  (fun (al:Aliado) -> sprintf "%9d"       al.nivel                      )
                    let i_referidos     = agregarCampo 08 true  (fun (al:Aliado) -> sprintf "%9s" <| referidos           al           )
                    let i_descendientes = agregarCampo 02 false (fun (al:Aliado) -> sprintf "%9s" <| descendientes       al           )
                    let i_comision      = agregarCampo 09 true  (fun (al:Aliado) -> sprintf "%9s" <| comision            al.comision  )
                    let i_diaPago       = agregarCampo 10 true  (fun (al:Aliado) -> (sprintf "%A"        al.diaPago).Right 2          )
                    let i_desde         = agregarCampo 11 true  (fun (al:Aliado) -> Date.toYYYYMMDD "-" al.fechaRegistro              )
                    let i_Id            = agregarCampo 12 true  (fun (al:Aliado) -> sprintf "%s"        al.id.Id                      )
                
                    let consolidado() =
                
                        let aliadosV = Var.Create [||]
                
                        V(modeloV.V.aliados)
                        |> View.Sink aliadosV.Set
                
                        let seleccionar id =  Some id |> selAliadoIdOV.Set
                
                        let aliado2Fila al : Fila<string> = definicion |> Array.map (fun (_,_,f) -> f al)
                
                        let ordenV = 
                            definicion
                            |> Array.mapi (fun i (a, b, _) -> a,b,  (fun (d:Fila<string>) -> d.[i].ToUpper() ) )
                            |> Var.Create 
                
                        let campos (orden:Fila<_*_*_>) = orden
                
                        let newOrden (n, _, _) (no, vo, fo) =
                              ( if   no = n then      1
                                elif no < n then no + 1
                                else no)
                            , (if n = no && n = 1 then not vo else vo)
                            , fo
                
                        let toggle (v:int * bool * (Fila<string> -> string) ) = 
                            ordenV.Value
                            |> Array.map (newOrden v)
                            |> ordenV.Set
                
                        let filtroV = Var.Create ""
                
                        let sortAliados (als:Aliado seq) (orden:Fila<_*_*(Fila<string> -> string)>) (filtro:string) =
                            let vt = filtro.Trim().ToUpper()
                            let filtros = campos orden |> Array.map (fun (_,_,f) -> f)
                            let filtrar (fila:Fila<string>) =
                                if vt = "" then true
                                else filtros |> Seq.exists(fun f -> (f fila).Contains vt)
                            let comparar = 
                                campos orden
                                |> Array.sortBy (fun (n, _, _) -> n)
                                |> Array.map    (fun (n, a, f) -> (if a then asc else desc) f)
                                |> Array.reduce (&>)
                            als 
                            |> Seq.map aliado2Fila
                            |> Seq.filter   filtrar
                            |> Seq.sortWith comparar
                
                        let setAliado id f = 
                            aliadosV.Value
                            |> Array.map (fun al -> if al.id = id then f al else al)
                            |> aliadosV.Set
                
                        let setStatus id (v:string) = 
                            setAliado id (fun al -> { al with status = StatusAliado.tryParse v } ) 
                
                        let setInfluyente id (v:string) = 
                            setAliado id (fun al -> { al with influyente = if v.Trim() = "" then None else Some <| v.Trim() } ) 
                
                        let setPadre id (v:string) =
                            let padre = if v = "" then None else Some (IdAliado v)
                            setAliado id (fun al -> { al with idPadreO = padre } )
                
                        let referidores =
                            modeloV.View
                            |> Doc.BindView (fun m -> 
                                m.aliados 
                                |> Seq.map (fun al -> Aliado.nombre2 al.datosPersonales, al.id.Id ) 
                                |> crearOptions2 ) 
                
                        let obtenerAliado alid = modeloV.Value.aliados |> Seq.tryFind (fun al -> al.id = alid)
                
                        let salvar () = 
                            asyncResult {
                                for al in aliadosV.Value do
                                    match obtenerAliado al.id with
                                    | None -> ()
                                    | Some al2 ->
                                    if al.status <> al2.status || al.idPadreO <> al2.idPadreO || al.influyente <> al2.influyente then
                                        let! res = ActualizarStatusPadre(al.id, al.status, al.idPadreO, al.influyente) |> Rpc.ejecutarDataEventoNuevo
                                        () // do! ResultMessage.Info (sprintf "%A" res)
                                refrescarData true
                            } |> Rpc.iterA
                
                
                        let pendientes    = 
                            View.Do {
                                let! selIdO = ListaDocs.expandedOV.View
                                match selIdO with
                                | None    -> return Doc.Empty
                                | Some id ->
                                let! als = aliadosV.View
                                match als |> Seq.tryFind(fun al -> al.id = id) with
                                | None    -> return Doc.Empty
                                | Some al ->
                                return Pendientes.pendientes(View.Const al)
                            } |> Doc.BindView id
                
                        let listaArchivos = lazy Html.tr [ attr.bgcolor "beige" ] [ Html.td [ attr.colspan "12" ] [ pendientes ; ListaDocs.listaDocs() ] ]
                
                        TemplateLib.Consolidado()
                            .Salvar(              fun _ -> salvar() )
                            .Cancelar(            fun _ -> aliadosV.Set   modeloV.Value.aliados   )
                            .Changed(             if modeloV.V.aliados = aliadosV.V then "" else "mui-btn--primary" )
                            .Filtro(              filtroV                                        )
                            .Referidores(         referidores                                    )
                            .sort_archivos(       fun _ -> toggle ordenV.Value.[i_archivos     ] )
                            .sort_nombre(         fun _ -> toggle ordenV.Value.[i_nombre       ] )
                            .sort_correo(         fun _ -> toggle ordenV.Value.[i_correo       ] )
                            .sort_status(         fun _ -> toggle ordenV.Value.[i_status       ] ) 
                            .sort_influyente(     fun _ -> toggle ordenV.Value.[i_influyente   ] ) 
                            .sort_tipo(           fun _ -> toggle ordenV.Value.[i_tipo         ] )
                            .sort_referido(       fun _ -> toggle ordenV.Value.[i_referido     ] )
                            .sort_nivel(          fun _ -> toggle ordenV.Value.[i_nivel        ] )
                            .sort_referidos(      fun _ -> toggle ordenV.Value.[i_referidos    ] )
                            .sort_descendientes(  fun _ -> toggle ordenV.Value.[i_descendientes] )
                            .sort_comision(       fun _ -> toggle ordenV.Value.[i_comision     ] )
                            .sort_diaPago(        fun _ -> toggle ordenV.Value.[i_diaPago      ] )
                            .sort_desde(          fun _ -> toggle ordenV.Value.[i_desde        ] )
                            //.sort_Id(             fun _ -> toggle ordenV.Value.[i_Id           ] )
                            .flecha_archivos(              flecha ordenV.V    .[i_archivos     ] ) 
                            .flecha_nombre(                flecha ordenV.V    .[i_nombre       ] )
                            .flecha_correo(                flecha ordenV.V    .[i_correo       ] )
                            .flecha_status(                flecha ordenV.V    .[i_status       ] ) 
                            .flecha_influyente(            flecha ordenV.V    .[i_influyente   ] ) 
                            .flecha_tipo(                  flecha ordenV.V    .[i_tipo         ] )
                            .flecha_referido(              flecha ordenV.V    .[i_referido     ] )
                            .flecha_nivel(                 flecha ordenV.V    .[i_nivel        ] )
                            .flecha_referidos(             flecha ordenV.V    .[i_referidos    ] )
                            .flecha_descendientes(         flecha ordenV.V    .[i_descendientes] )
                            .flecha_comision(              flecha ordenV.V    .[i_comision     ] )
                            .flecha_diaPago(               flecha ordenV.V    .[i_diaPago      ] )
                            .flecha_desde(                 flecha ordenV.V    .[i_desde        ] )
                            //.flecha_Id(                    flecha ordenV.V    .[i_Id           ] )
                            .TBody(
                                (V modeloV.V.aliados, ordenV.View, filtroV.View) 
                                |||> View.Map3 sortAliados
                                |> Doc.BindSeqCachedViewBy (fun al -> al.[i_Id]) (fun alid fW ->
                                    TemplateLib.FilaConsolidado() 
                                        .nombre(        fW.V.[i_nombre       ])
                                        .correo(        fW.V.[i_correo       ])
                                        .tipo(          fW.V.[i_tipo         ])
                                        .referido(      Var.Make (V fW.V.[i_referido   ]) (setPadre      <| IdAliado alid) )
                                        .status(        Var.Make (V fW.V.[i_status     ]) (setStatus     <| IdAliado alid) )
                                        .influyente(    Var.Make (V fW.V.[i_influyente ]) (setInfluyente <| IdAliado alid) )
                                        .Statuses(      statuses.View |> Doc.BindView crearOptions                    )
                                        .nivel(         fW.V.[i_nivel        ])
                                        .referidos(     fW.V.[i_referidos    ])
                                        .descendientes( fW.V.[i_descendientes])
                                        .comision(      fW.V.[i_comision     ])
                                        .diaPago(       fW.V.[i_diaPago      ])
                                        .desde(         fW.V.[i_desde        ])
                                        .Id(            fW.V.[i_Id           ])
                                        .detalles( V(if ListaDocs.expandedOV.V = Some (IdAliado alid) then listaArchivos.Value else Doc.Empty ) |> Doc.BindView id )
                                        .expandFiles(   fun _ -> 
                                            async {
                                                do! Rpc.addLlamadas  1
                                                do  (if ListaDocs.expandedOV.Value = Some (IdAliado alid) then None else Some (IdAliado alid)) |> ListaDocs.expandedOV.Set
                                                do! Rpc.addLlamadas -1
                                            } |> Async.Start
                                            )
                                        .expanded(      fW.V.[i_archivos])
                                        .Doc()
                                )
                            ).Doc()
                module TablaPagos =
                    open SortWith
                
                    [< Inline "saveAs(new Blob([$_txt], {type: 'text/plain;charset=utf-8'}), $_name)" >]
                    let saveAsJavaScript (_name:string) (_txt:string) = ()
                    
                    let comisiones() =
                
                        let referidos al =
                            if al.nReferidos = 0 then "-" else
                            sprintf "%d/%d" al.nRefActivos al.nReferidos
                        let descendientes al =
                            if al.nDescendientes = 0 then "-" else
                            sprintf "%d/%d" al.nDescActivos al.nDescendientes
                        let comision v = if v = 0 then "-" else money v 
                        let seleccionar id =  Some id |> selAliadoIdOV.Set
                        let sortAliados als =
                            als |> Seq.sortWith (desc (fun al -> al.comision                       )
                                              &>  asc (fun al -> al.status                         )
                                              &> desc (fun al -> al.nRefActivos , al.nReferidos    )
                                              &> desc (fun al -> al.nDescActivos, al.nDescendientes)
                                              &>  asc (fun al -> Aliado.nombre al.datosPersonales  ) )
                
                        let pagos (als:Aliado[]) = 
                            asyncResult {
                                let  alsf   = als  |> Seq.filter (fun al -> al.comision > 0) 
                                let  alIds  = alsf |> Seq.map    (fun al -> al.id          ) |> Seq.toArray
                                let! fpss   = Rpc.obtenerFormasDePagoPara alIds
                                let  ctas   = (fpss:(IdAliado * FormaPago []) []) |> Seq.map (fun (id, fps)-> id, fps |> Seq.tryPick (fun fp -> match fp.cuentaPago with | CuentaBancaria cta -> Some cta |_-> None) |> Option.defaultValue ctaVacio )
                                let  alfps  = Seq.zip alsf ctas |> Seq.choose(fun (al, (aid2, cta) ) -> if al.id = aid2 then Some(al, cta) else None)
                                return alfps
                            } |> Async.map (Result.defaultValue Seq.empty)
                
                        let pagosW =
                                V (modeloV.V.aliados )                
                                |> View.MapAsync pagos
                
                        let def d v = if v = "" then d else v
                
                
                        let saveAs() = 
                            async {
                                let name = "pagos.csv" 
                                let! data = pagosW |> View.GetAsync
                                let csv   = data |> Seq.map(fun alfpW ->
                                                let alW  = fst alfpW
                                                let ctaW = snd alfpW
                                                sprintf "%s,%s,%s,%s,%A,%A" 
                                                    ("22"                               )
                                                    (def "----------" ctaW.numero .Id   )
                                                    (def "----------" ctaW.routing.Id   )
                                                    (sprintf "%d.00" alW.comision       )
                                                    ("----------"                       )
                                                    (if ctaW.titular = "" then Aliado.nombre2 alW.datosPersonales else ctaW.titular)                    
                                                ) |> String.concat "\r\n"
                                csv |> saveAsJavaScript name
                            } |> Async.Start
                
                
                        TemplateLib.TablaPagos()
                            .Exportar(   fun _ -> saveAs() )
                            .TBody(
                                [
                                    TemplateLib.FilaPago()
                                        .codigo(              sprintf "%d" ( pagosW.V |> Seq.length ) ) 
                                        .cuenta(              ""                                  )
                                        .ABA(                 ""                                  )
                                        .monto(               sprintf "%d.00" ( pagosW.V |> Seq.sumBy(fun (pg, _) -> pg.comision ) ) ) 
                                        .identificacion(      ""                                  )
                                        .nombre(              ""                                  )
                                        .Doc()
                                    TemplateLib.FilaPago()
                                        .codigo(              ""                                  )
                                        .cuenta(              ""                                  )
                                        .ABA(                 ""                                  )
                                        .monto(               "--------------------"              )
                                        .identificacion(      ""                                  )
                                        .nombre(              ""                                  )
                                        .Doc()
                                    pagosW
                                    |> Doc.BindSeqCachedViewBy (fun (al, _) -> al.id) (fun alid alfpW ->
                                        let alW  = V( fst alfpW.V)
                                        let ctaW = V( snd alfpW.V)
                                        TemplateLib.FilaPago()
                                            .codigo(              "22"                                  )
                                            .cuenta(              def "----------" ctaW.V.numero .Id    )
                                            .ABA(                 def "----------" ctaW.V.routing.Id    )
                                            .monto(               sprintf "%d.00" alW.V.comision        )
                                            .identificacion(      "---------"                           )
                                            .nombre(              def (Aliado.nombre2 alW.V.datosPersonales) ctaW.V.titular)
                                            .Doc()
                                    )
                                ]
                            ).Doc()
            module MainProgram =
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
                    asyncResult {
                        let! emails0 = ModeloUI.emailsInvitarW      |> View.GetAsync
                        let! id      = V (ModeloUI.aliadoW.V.id.Id) |> View.GetAsync
                        let  emails  = emails0.Split '\n' |> Array.filter (fun s -> s.Trim() <> "")
                        do! Rpc.enviarCorreosInvitacion("Invitacion a Prozper",  emails)
                        match emails.Length with
                        | 0 -> JS.Alert "Ningun correo valido ha sido encontrado"
                        | 1 -> JS.Alert "Invitacion ha sido enviada"
                        | _ -> JS.Alert "Invitaciones han sido enviadas"
                    } |> Rpc.iterA
            
                let getDoc appName docName =
                    LayoutEngine.splitName appName docName
                    ||> AF.tryGetDoc
                    |>  Option.map (LayoutEngine.getDocFinal [])
                    |>  Option.defaultWith (fun () -> sprintf "Doc not found %s" docName |> LayoutEngine.errDoc)
            
                let getDocView appName docName = LayoutEngine.turnToView (fun _ ->  getDoc appName docName)
            
                let getContentDoc() =
                    ModeloUI.contentVar.View
                    |> View.Map (getDoc appName )
                    |> Doc.EmbedView
            
                let getMenuDoc() =
                    V(  match (Msal.userO.V, ModeloUI.aliadoW.V.id) with
                        | None  , _                             -> "ProzperLyt.mnuNoUsuario"
                        | Some _, id when id = Aliado.empty.id  -> "ProzperLyt.mnuAdministrador"
                        | _                                     -> "ProzperLyt.mnuUsuario"
                        |> getDoc appName 
                    )
                    |> Doc.EmbedView
            
                let influencerV       = Var.Create ""
                let influencerClassW  = influencerV.View |> View.MapAsync (fun inf -> async {
                        let! inf = Rpc.obtenerIdInfluyente inf
                        match inf with
                        | Ok _ -> return "mui-btn--primary"
                        | _    -> return ""
                })
                let gotoInfluencer () = 
                    async {
                        let! inf = Rpc.obtenerIdInfluyente influencerV.Value
                        match inf with
                        | Ok v -> JS.Window.Location.Href <- "/Register/" + influencerV.Value
                        | _    -> JS.Window.Alert <| "Código inválido:" + influencerV.Value
                    } |> Async.Start
                    
                //let actualizarTransacciones () =
                //    async {
                //        Rpc.
                //    } |> Async.Start
            
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
                                           AF.newVar  "influencer"   influencerV
                                        |]  
                        AF.plgViews   = [| AF.newViw  "mesActual"               mesActualW
                                           AF.newViw  "anoActual"               anoActualW
                                           AF.newViw  "aliado"                  nombreAliadoW
                                           AF.newViw  "idAliado"                idAliadoW
                                           AF.newViw  "status"                  statusAliadoW
                                           AF.newViw  "comision"                comisionAliadoW
                                           AF.newViw  "datos"                   datosAliadoW
                                           AF.newViw  "emailsInvitar"           ModeloUI.emailsInvitarW
                                           AF.newViw  "invitacionesDisabled"    ModeloUI.invitacionesDisabledW
                                           AF.newViw  "VideoW"               <| V(endPointV.V |> function Video v -> v |_-> "")
                                           AF.newViw  "influencerClassW"        influencerClassW
                                        |]  
                        AF.plgDocs    = [| AF.newDoc  "Aliados"            (lazy RenderAliados     .aliados          ()               )
                                           AF.newDoc  "Aliado"             (lazy RenderAliado      .aliado           ()               )
                                           AF.newDoc  "Calculo"            (lazy RenderAliado      .calculo          ()               )
                                           AF.newDoc  "FormaRegistro"      (lazy FormaRegistro     .formaDoc         ()               )
                                           AF.newDoc  "FormaDatos"         (lazy FormaDatos        .formaDoc         ()               )
                                           AF.newDoc  "FormaContactos"     (lazy FormaContactos    .formaDoc         ()               )
                                           AF.newDoc  "FormaFormasPago"    (lazy FormaFormasPago   .formaDoc         ()               )
                                           AF.newDoc  "contentDoc"         (lazy getContentDoc                       ()               )
                                           AF.newDoc  "ReporteConsolidado" (lazy ReporteConsolidado.consolidado      ()               )
                                           AF.newDoc  "TablaPagos"         (lazy TablaPagos        .comisiones       ()               )
                                           AF.newDoc  "ListaDocs"          (lazy ListaDocs         .listaDocs        ()               )
                                           AF.newDoc  "FormaAutorizacion"  (lazy FormaAutorizacion .formaAutorizacion()               )
                                           AF.newDoc  "FormaContrato"      (lazy FormaContrato     .formaContrato    ()               )
                                           AF.newDoc  "Transacciones"      (lazy Transacciones     .transacciones    ()               )
                                           AF.newDoc  "Pendientes"         (lazy Pendientes        .pendientes       ModeloUI.aliadoW )
                                        |]  
                        AF.plgActions = [| AF.newAct  "Logout"              logout
                                           AF.newAct  "LogIn"               login
                                           AF.newAct  "enviarInvitaciones"  enviarCorreosInvitacion
                                           AF.newAct  "gotoInfluencer"      gotoInfluencer
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
            
                    let getExtraMenu =
                        ModeloUI.aliadoW
                        |> Doc.BindView (fun al ->
                            if al.id = Aliado.empty.id then
                                TemplateLib.OpcionesAdministrador().Doc()
                            else Doc.Empty
                        ) 
            
                    TemplateLib()
                        //.MainContent( AF.getMainDoc.Value )
                        .MainContent(   getContentDoc()                     )
                        .Menu(          getMenuDoc()                        )
                        .headerCenter(  getDocView layoutName "headerCenter")
                        .Logout(        fun _-> logout()                    )
                        .Cortina(       if Rpc.llamadas.V > 0 then "mui-overlay" else "not-mui-overlay" )
                        .Bind()
                    titleV.View |> View.Sink (fun t -> JS.Document.Title <- t)
            
                let mainProgramLoggedOff refId =
                    ModeloUI.refAliadoIdOV.Set <| Some refId
                    mainProgram()
            
            
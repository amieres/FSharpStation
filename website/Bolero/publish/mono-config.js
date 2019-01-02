config = {
 	vfs_prefix: "managed",
 	deploy_prefix: "managed",
 	enable_debugging: 0,
 	file_list: [ "sample.dll","mscorlib.dll","FSharp.Core.dll","System.Core.dll","System.dll","Mono.Security.dll","System.Xml.dll","System.Numerics.dll","MarkdownDll.dll","System.Web.dll","System.Drawing.dll","System.Configuration.dll","System.Security.dll","System.Data.dll","System.Transactions.dll","System.DirectoryServices.dll","System.EnterpriseServices.dll","System.Runtime.Remoting.dll","System.Runtime.Serialization.Formatters.Soap.dll","System.Web.RegularExpressions.dll","System.Design.dll","System.Windows.Forms.dll","Accessibility.dll","System.Deployment.dll","System.Data.OracleClient.dll","System.Drawing.Design.dll","System.Web.ApplicationServices.dll","System.ComponentModel.DataAnnotations.dll","System.DirectoryServices.Protocols.dll","System.ServiceProcess.dll","System.Configuration.Install.dll","System.Runtime.Serialization.dll","System.ServiceModel.Internals.dll","System.Web.Services.dll","Microsoft.Build.Utilities.v4.0.dll","Microsoft.Build.Framework.dll","System.Xaml.dll","System.Runtime.Caching.dll","Microsoft.Build.Tasks.v4.0.dll","WebAssembly.Bindings.dll" ],
	add_bindings: function() { Module.mono_bindings_init ("[WebAssembly.Bindings]WebAssembly.Runtime"); }
}

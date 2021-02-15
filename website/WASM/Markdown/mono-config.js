config = {
 	vfs_prefix: "managed",
 	deploy_prefix: "managed",
 	enable_debugging: 0,
 	file_list: [ "markdown.dll","mscorlib.dll","FSharp.Core.dll","System.Core.dll","System.dll","Mono.Security.dll","System.Xml.dll","System.Numerics.dll","MarkdownDll.dll","System.Web.Services.dll","WebAssembly.Bindings.dll" ],
	add_bindings: function() { Module.mono_bindings_init ("[WebAssembly.Bindings]WebAssembly.Runtime"); }
}

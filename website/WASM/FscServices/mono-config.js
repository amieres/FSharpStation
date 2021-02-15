config = {
 	vfs_prefix: "managed",
 	deploy_prefix: "managed",
 	enable_debugging: 0,
 	file_list: [ "fscservices.dll","mscorlib.dll","FSharp.Core.dll","System.Core.dll","System.dll","Mono.Security.dll","System.Xml.dll","System.Numerics.dll","FSharp.Compiler.Service.dll","netstandard.dll","System.Data.dll","System.Transactions.dll","System.Drawing.dll","System.IO.Compression.dll","System.IO.Compression.FileSystem.dll","System.ComponentModel.Composition.dll","System.Net.Http.dll","System.Runtime.Serialization.dll","System.ServiceModel.Internals.dll","System.Web.Services.dll","System.Xml.Linq.dll","System.Reflection.Emit.ILGeneration.dll","System.Reflection.Emit.dll","System.Reflection.Metadata.dll","System.Collections.Immutable.dll","System.Runtime.dll","System.Runtime.Extensions.dll","System.Threading.dll","System.Console.dll","System.IO.dll","System.Reflection.dll","System.Globalization.dll","System.Reflection.Primitives.dll","WebAssembly.Bindings.dll" ],
	add_bindings: function() { Module.mono_bindings_init ("[WebAssembly.Bindings]WebAssembly.Runtime"); }
}

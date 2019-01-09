
var Module = {
	onRuntimeInitialized: function () {
		MONO.mono_load_runtime_and_bcl (
		config.vfs_prefix,
		config.deploy_prefix,
		config.enable_debugging,
		config.file_list,
		function () {
			config.add_bindings ();
			BINDING.call_static_method("[fscservices] FsRoot.FscServices:listdir", ["/"]);
			listdir        = Module.mono_bind_static_method ("[fscservices] FsRoot.FscServices:listdir");
			evalExpression = Module.mono_bind_static_method ("[fscservices] FsRoot.FscServices:evalExpression");
		}
	)
	},
};
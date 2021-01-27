
var Module = { 
	onRuntimeInitialized: function () {
		this.wasm_setenv     = this.cwrap ('mono_wasm_setenv', 'void', ['string', 'string']);
		this.wasm_setenv("MONO_LOG_LEVEL", "debug");
		this.wasm_setenv("MONO_LOG_MASK" , "all");
		MONO.mono_load_runtime_and_bcl (
			config.vfs_prefix,
			config.deploy_prefix,
			config.enable_debugging,
			config.file_list,
			function () {
				App.init ();
			}
		)
	},
};

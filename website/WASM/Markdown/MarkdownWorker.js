function loadJS(file, cont) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		 cont(this.responseText);
		}
	};
	xhttp.open("GET", file, true);
	xhttp.send();
}

transformHtml = 0

self.onmessage = function (evt) {
	var objData = evt.data;
	var sMessagePurpose = objData.message;
	if (!!transformHtml && sMessagePurpose === "markdownHtml") {
		self.postMessage({ message: sMessagePurpose , html : transformHtml(objData.text) , sid : objData.sid });
	}
	else if (sMessagePurpose === "AddValues") {
			var iResult = int_add(objData.Val1, objData.Val2);
		self.postMessage(`This is the Web Worker...The result of ${objData.Val1.toString()} + ${objData.Val2.toString()} is ${iResult.toString()}.`);
	}
	else if (sMessagePurpose === "CompiledModule") {
		WebAssembly.instantiate(objData.WasmModule, g_importObject).then(instance => 
		g_objInstance = instance // Hold onto the module's instance so that we can reuse it
		);
	}
}


loadJS("mono-config.js", function (monoconfig) {
loadJS("runtime.js"    , function (runtime   ) { 
loadJS("mono.js"       , function (mono      ) {
	eval(monoconfig + runtime + mono);
});});});


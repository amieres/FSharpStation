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

parseFile = 0
listDir   = 0

self.onmessage = function (evt) {
	var objData = evt.data;
	var sMessagePurpose = objData.message;
	if      (!!listDir && sMessagePurpose === "listDir") {
		self.postMessage({ message: sMessagePurpose , dir : listDir() });
	}
	else if (!!parseFile && sMessagePurpose === "parseFile") {
		self.postMessage({ message: sMessagePurpose , errors : parseFile(objData.text) });
	}
}


loadJS("mono-config.js", function (monoconfig) {
loadJS("runtime.js"    , function (runtime   ) { 
loadJS("mono.js"       , function (mono      ) {
	eval(monoconfig + runtime + mono);
});});});


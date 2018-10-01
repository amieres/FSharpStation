        CIPHERSpaceLoadFileGlobalFileRef = null;
        CIPHERSpaceLoadFile = function (filename, callback) {
            if (filename.slice(-3) == ".js" || filename.slice(-4) == ".fsx" || filename.slice(-3) == ".fs") { //if filename is a external JavaScript file
                var fileRef = null;
                var pre = document.querySelector('script[src="' + filename + '"]')
                if (!pre) {
                    fileRef = document.createElement('script')
                    fileRef.setAttribute("type", "text/javascript")
                    fileRef.setAttribute("src", filename)
                }
                else callback();
            }
            else if (filename.slice(-4) == ".css") { //if filename is an external CSS file
                var pre = document.querySelector('script[src="' + filename + '"]')
                if (!pre) {
                    fileRef = document.createElement("link")
                    fileRef.setAttribute("rel", "stylesheet")
                    fileRef.setAttribute("type", "text/css")
                    fileRef.setAttribute("href", filename)
                }
                else callback();
            }
            else if (filename.slice(-5) == ".html") { //if filename is an external HTML file
                var pre = document.querySelector('script[src="' + filename + '"]')
                if (!pre) {
                    fileRef = document.createElement("link")
                    fileRef.setAttribute("rel", "import")
                    fileRef.setAttribute("type", "text/html")
                    fileRef.setAttribute("href", filename)
                }
                else callback();
            }
            if (!!fileRef) {
                CIPHERSpaceLoadFileGlobalFileRef = fileRef;
				fileRef.onload = function () { fileRef.onload = null;  callback(); }
                document.getElementsByTagName("head")[0].appendChild(fileRef);
            }
        }
        CIPHERSpaceLoadFiles = function (files, callback) {
            var newCallback = callback
            if (!!CIPHERSpaceLoadFileGlobalFileRef && !!(CIPHERSpaceLoadFileGlobalFileRef.onload)) {
                var oldCallback = CIPHERSpaceLoadFileGlobalFileRef.onload;
                CIPHERSpaceLoadFileGlobalFileRef.onload = null;
                newCallback = function () {
                    callback();
                    oldCallback();
                }
            }
            var i = 0;
            loadNext = function () {
                if (i < files.length) {
                    var file = files[i];
                    i++;
                    CIPHERSpaceLoadFile(file, loadNext);
                }
                else newCallback();
            };
            loadNext();
		}
		CIPHERSpaceLoadFilesDoAfter = function (callback) {
			var newCallback = callback
			if (!!CIPHERSpaceLoadFileGlobalFileRef) {
				if (!!(CIPHERSpaceLoadFileGlobalFileRef.onload)) {
					var oldCallback = CIPHERSpaceLoadFileGlobalFileRef.onload;
					CIPHERSpaceLoadFileGlobalFileRef.onload = null;
					newCallback = function () {
						oldCallback();
						callback();
					}
				}
			}
			else CIPHERSpaceLoadFileGlobalFileRef = {};
			CIPHERSpaceLoadFileGlobalFileRef.onload = newCallback;
		}

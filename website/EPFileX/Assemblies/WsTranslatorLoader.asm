{
  "asName": "WsTranslatorLoader",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm",
    "WebSharper.Web.asm",
    "WebSharper.Sitelets.asm",
    "WebSharper.Control.asm",
    "WebSharper.UI.asm",
    "WebSharper.UI.Templating.Runtime.asm",
    "FShUIAssemblyData.asm",
    "WebSharper.Data.asm",
    "FShUI.asm",
    "WsTranslator.asm"
  ],
  "resources": [
    "//cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js"
  ],
  "modules": [
    {
      "moName": "FsRoot.Library+String",
      "methods": [
        {
          "meName": "thousands",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "|WhiteSpace|_|",
          "isField": 0,
          "type": {
            "tName": "Option<unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "|EndsWith|_|",
          "isField": 0,
          "type": {
            "tName": "Option<string>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "|StartsWith|_|",
          "isField": 0,
          "type": {
            "tName": "Option<string>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "skipLastLine",
          "isField": 1,
          "type": {
            "tName": "(string -> string)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "indentStr",
          "isField": 0,
          "type": {
            "tName": "(string -> string)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "unindentStr",
          "isField": 1,
          "type": {
            "tName": "(string -> string)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "indent",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<string>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "unindent",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<string>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "skipFirstLine",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "append",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "right",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "left",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "trim",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "contains",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "delimitedO",
          "isField": 0,
          "type": {
            "tName": "Option<(string * string * string)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "splitInTwoO",
          "isField": 0,
          "type": {
            "tName": "Option<(string * string)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "splitByChar",
          "isField": 0,
          "type": {
            "tName": "string[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Char",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+ParseO",
      "methods": [
        {
          "meName": "|Guid|_|",
          "isField": 1,
          "type": {
            "tName": "(string -> Option<Guid>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "|Double|_|",
          "isField": 1,
          "type": {
            "tName": "(string -> Option<Double>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "|Single|_|",
          "isField": 1,
          "type": {
            "tName": "(string -> Option<Single>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "|Int64|_|",
          "isField": 1,
          "type": {
            "tName": "(string -> Option<Int64>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "|Int|_|",
          "isField": 1,
          "type": {
            "tName": "(string -> Option<int>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "|Date|_|",
          "isField": 1,
          "type": {
            "tName": "(string -> Option<DateTime>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "parseGuidO",
          "isField": 1,
          "type": {
            "tName": "(string -> Option<Guid>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "parseDoubleO",
          "isField": 1,
          "type": {
            "tName": "(string -> Option<Double>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "parseSingleO",
          "isField": 1,
          "type": {
            "tName": "(string -> Option<Single>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "parseInt64O",
          "isField": 1,
          "type": {
            "tName": "(string -> Option<Int64>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "parseIntO",
          "isField": 1,
          "type": {
            "tName": "(string -> Option<int>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "parseDateO",
          "isField": 1,
          "type": {
            "tName": "(string -> Option<DateTime>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "parseDateO2",
          "isField": 1,
          "type": {
            "tName": "(string -> Option<DateTime>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "tryParseWith",
          "isField": 0,
          "type": {
            "tName": "('a -> Option<'b>)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> (bool * 'b))",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library",
      "methods": [
        {
          "meName": "String.Right",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "String.Left",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "String.Substring2",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "print",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Error",
          "isField": 0,
          "type": {
            "tName": "Result<'b, 'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+Pojo",
      "methods": [
        {
          "meName": "newPojoOpt",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JSObject",
            "asm": "WebSharper.Main"
          },
          "parms": [
            {
              "tName": "IEnumerable<(string * Option<Object>)>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "newPojo",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JSObject",
            "asm": "WebSharper.Main"
          },
          "parms": [
            {
              "tName": "IEnumerable<(string * 'a)>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "addProp",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JSObject",
            "asm": "WebSharper.Main"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "WebSharper.JSObject",
              "asm": "WebSharper.Main"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+WsTranslatorLoader+WasmStatus",
      "methods": [
        {
          "meName": "_unique_WasmWorkerLoaded",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_WasmWorkerLoading",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_WasmLoaded",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_WasmLoading",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_WasmNotLoaded",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+WsTranslatorLoader+MsgFromWorker",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+WsTranslatorLoader+MsgFromHost",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+WsTranslatorLoader+Remoting+IMessagingO",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+WsTranslatorLoader+Remoting+ReturnQueue",
      "methods": [
        {
          "meName": "tryGet",
          "isField": 0,
          "type": {
            "tName": "Option<((string -> unit) * (Exception -> unit))>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "add",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "((string -> unit) * (Exception -> unit))",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "tryGetS",
          "isField": 0,
          "type": {
            "tName": "Option<((string -> unit) * (Exception -> unit))[]>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "queues",
          "isField": 1,
          "type": {
            "tName": "Dictionary<string, ((string -> unit) * (Exception -> unit))[]>",
            "asm": "netstandard"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+WsTranslatorLoader+Remoting+CustomXhrProvider",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+WsTranslatorLoader+Remoting",
      "methods": [
        {
          "meName": "installProvider",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "returnExn",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "returnValue",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "callRunRpc",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "messaging",
          "isField": 1,
          "type": {
            "tName": "IMessagingO",
            "asm": "WsTranslatorLoader"
          },
          "parms": []
        },
        {
          "meName": "set_messaging",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IMessagingO",
              "asm": "WsTranslatorLoader"
            }
          ]
        },
        {
          "meName": "returnExn0",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "returnExnExn",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Exception",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "returnValue0",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "originalProvider",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Remoting+IAjaxProvider",
            "asm": "WebSharper.Main"
          },
          "parms": []
        },
        {
          "meName": "getHeaderRpc",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+WsTranslatorLoader+WWorker",
      "methods": [
        {
          "meName": "terminate",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "fromWorker",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.MessageEvent",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "receiveMessage",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(string -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.JavaScript.MessageEvent",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "workerO",
          "isField": 1,
          "type": {
            "tName": "Option<WebSharper.JavaScript.Worker>",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "set_workerO",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Option<WebSharper.JavaScript.Worker>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+WsTranslatorLoader+WasmLoad+Require",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+WsTranslatorLoader+WasmLoad+GlobalModule",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+WsTranslatorLoader+WasmLoad+FS",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+WsTranslatorLoader+WasmLoad",
      "methods": [
        {
          "meName": "loadWasmInWorker",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "loadInThisThread",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "filesToPreload",
          "isField": 0,
          "type": {
            "tName": "List<string>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "preloadFiles",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<string>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "bindWasm",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "bindStaticMethod",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "requireJsA",
          "isField": 0,
          "type": {
            "tName": "Async<Object>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<string>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "rootPath",
          "isField": 1,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+WsTranslatorLoader+UI",
      "methods": [
        {
          "meName": "main",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "mainDoc",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "translateToJs",
          "isField": 0,
          "type": {
            "tName": "Async<unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string[]",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "parseAndCheckProject",
          "isField": 0,
          "type": {
            "tName": "Async<unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string[]",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "showMessages",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'a[]>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "getParms",
          "isField": 0,
          "type": {
            "tName": "(string * string[] * string)",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "callWasmA",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<unit>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "clean",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "optsV",
          "isField": 1,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "codeV",
          "isField": 1,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "wsWrnsV",
          "isField": 1,
          "type": {
            "tName": "Var<(Option<WebSharper.Core.AST.SourcePos> * WebSharper.Compiler.CompilationWarning)[]>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "wsErrsV",
          "isField": 1,
          "type": {
            "tName": "Var<(Option<WebSharper.Core.AST.SourcePos> * WebSharper.Compiler.CompilationError)[]>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "fsErrsV",
          "isField": 1,
          "type": {
            "tName": "Var<Microsoft.FSharp.Compiler.SourceCodeServices.FSharpErrorInfo[]>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "detailsV",
          "isField": 1,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+WsTranslatorLoader",
      "methods": [
        {
          "meName": "printfn",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "PrintfFormat<'a, unit, string, unit>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "wasmStatusV",
          "isField": 1,
          "type": {
            "tName": "Var<WasmStatus>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS",
      "methods": []
    },
    {
      "moName": "StartupCode$WsTranslatorLoader$WsTranslatorLoader",
      "methods": []
    },
    {
      "moName": "Generated$WsTranslatorLoader",
      "methods": [
        {
          "meName": "WsTranslatorLoader_GeneratedPrintf.p",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "WsTranslatorLoader_GeneratedPrintf.p$3",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "WsTranslatorLoader_GeneratedPrintf.p$2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "WsTranslatorLoader_GeneratedPrintf.p$1",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        }
      ]
    }
  ],
  "jsModules": [
    {
      "jsName": "WebSharper.js",
      "code": "(function()\r\n{\r\n \"use strict\";\r\n var Global,FsRoot,Library,String,ParseO,LibraryJS,Pojo,WsTranslatorLoader,WasmStatus,Remoting,IMessagingO,ReturnQueue,WebSharper,Obj,CustomXhrProvider,WWorker,WasmLoad,Require,GlobalModule,UI,SC$1,WsTranslatorLoader_GeneratedPrintf,GeneratedPrintf,Strings,List,Seq,Slice,Operators,Char,Unchecked,Utils,console,IntelliFactory,Runtime,Concurrency,Remoting$1,WsTranslator,Arrays,Enumerator,UI$1,Client,Templates,Doc,View,AjaxRemotingProvider,AttrProxy,FShUI,DateUtil,Numeric,System,Guid,Var$1,Collections,Dictionary;\r\n Global=self;\r\n FsRoot=Global.FsRoot=Global.FsRoot||{};\r\n Library=FsRoot.Library=FsRoot.Library||{};\r\n String=Library.String=Library.String||{};\r\n ParseO=Library.ParseO=Library.ParseO||{};\r\n LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};\r\n Pojo=LibraryJS.Pojo=LibraryJS.Pojo||{};\r\n WsTranslatorLoader=LibraryJS.WsTranslatorLoader=LibraryJS.WsTranslatorLoader||{};\r\n WasmStatus=WsTranslatorLoader.WasmStatus=WsTranslatorLoader.WasmStatus||{};\r\n Remoting=WsTranslatorLoader.Remoting=WsTranslatorLoader.Remoting||{};\r\n IMessagingO=Remoting.IMessagingO=Remoting.IMessagingO||{};\r\n ReturnQueue=Remoting.ReturnQueue=Remoting.ReturnQueue||{};\r\n WebSharper=Global.WebSharper;\r\n Obj=WebSharper&&WebSharper.Obj;\r\n CustomXhrProvider=Remoting.CustomXhrProvider=Remoting.CustomXhrProvider||{};\r\n WWorker=WsTranslatorLoader.WWorker=WsTranslatorLoader.WWorker||{};\r\n WasmLoad=WsTranslatorLoader.WasmLoad=WsTranslatorLoader.WasmLoad||{};\r\n Require=WasmLoad.Require=WasmLoad.Require||{};\r\n GlobalModule=WasmLoad.GlobalModule=WasmLoad.GlobalModule||{};\r\n UI=WsTranslatorLoader.UI=WsTranslatorLoader.UI||{};\r\n SC$1=Global.StartupCode$WsTranslatorLoader$WsTranslatorLoader=Global.StartupCode$WsTranslatorLoader$WsTranslatorLoader||{};\r\n WsTranslatorLoader_GeneratedPrintf=Global.WsTranslatorLoader_GeneratedPrintf=Global.WsTranslatorLoader_GeneratedPrintf||{};\r\n GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};\r\n Strings=WebSharper&&WebSharper.Strings;\r\n List=WebSharper&&WebSharper.List;\r\n Seq=WebSharper&&WebSharper.Seq;\r\n Slice=WebSharper&&WebSharper.Slice;\r\n Operators=WebSharper&&WebSharper.Operators;\r\n Char=WebSharper&&WebSharper.Char;\r\n Unchecked=WebSharper&&WebSharper.Unchecked;\r\n Utils=WebSharper&&WebSharper.Utils;\r\n console=Global.console;\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime=IntelliFactory&&IntelliFactory.Runtime;\r\n Concurrency=WebSharper&&WebSharper.Concurrency;\r\n Remoting$1=WebSharper&&WebSharper.Remoting;\r\n WsTranslator=FsRoot&&FsRoot.WsTranslator;\r\n Arrays=WebSharper&&WebSharper.Arrays;\r\n Enumerator=WebSharper&&WebSharper.Enumerator;\r\n UI$1=WebSharper&&WebSharper.UI;\r\n Client=UI$1&&UI$1.Client;\r\n Templates=Client&&Client.Templates;\r\n Doc=UI$1&&UI$1.Doc;\r\n View=UI$1&&UI$1.View;\r\n AjaxRemotingProvider=Remoting$1&&Remoting$1.AjaxRemotingProvider;\r\n AttrProxy=UI$1&&UI$1.AttrProxy;\r\n FShUI=LibraryJS&&LibraryJS.FShUI;\r\n DateUtil=WebSharper&&WebSharper.DateUtil;\r\n Numeric=WebSharper&&WebSharper.Numeric;\r\n System=Global.System;\r\n Guid=System&&System.Guid;\r\n Var$1=UI$1&&UI$1.Var$1;\r\n Collections=WebSharper&&WebSharper.Collections;\r\n Dictionary=Collections&&Collections.Dictionary;\r\n String.thousands=function(n)\r\n {\r\n  var v,c,r,s;\r\n  v=(c=n<0?-n:n,Global.String(c));\r\n  r=v.length%3;\r\n  s=r===0?3:r;\r\n  return n<0?\"-\"+Strings.concat(\",\",List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.append([Slice.string(v,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:s-1\r\n   })],Seq.delay(function()\r\n   {\r\n    return Seq.map(function(i)\r\n    {\r\n     return Slice.string(v,{\r\n      $:1,\r\n      $0:i*3+s\r\n     },{\r\n      $:1,\r\n      $0:i*3+s+2\r\n     });\r\n    },Operators.range(0,((v.length-s)/3>>0)-1));\r\n   }));\r\n  }))):Strings.concat(\",\",List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.append([Slice.string(v,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:s-1\r\n   })],Seq.delay(function()\r\n   {\r\n    return Seq.map(function(i)\r\n    {\r\n     return Slice.string(v,{\r\n      $:1,\r\n      $0:i*3+s\r\n     },{\r\n      $:1,\r\n      $0:i*3+s+2\r\n     });\r\n    },Operators.range(0,((v.length-s)/3>>0)-1));\r\n   }));\r\n  })));\r\n };\r\n String.WhiteSpace=function(s)\r\n {\r\n  function g(v)\r\n  {\r\n   return!v;\r\n  }\r\n  return Seq.exists(function(x)\r\n  {\r\n   return g(Char.IsWhiteSpace(x));\r\n  },s)?null:{\r\n   $:1,\r\n   $0:null\r\n  };\r\n };\r\n String.EndsWith=function(ends,s)\r\n {\r\n  return Strings.EndsWith(s,ends)?{\r\n   $:1,\r\n   $0:Slice.string(s,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:s.length-ends.length-1\r\n   })\r\n  }:null;\r\n };\r\n String.StartsWith=function(start,s)\r\n {\r\n  return Strings.StartsWith(s,start)?{\r\n   $:1,\r\n   $0:Slice.string(s,{\r\n    $:1,\r\n    $0:start.length\r\n   },null)\r\n  }:null;\r\n };\r\n String.skipLastLine=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.skipLastLine;\r\n };\r\n String.indentStr=function(i)\r\n {\r\n  function f(s)\r\n  {\r\n   return String.indent(i,s);\r\n  }\r\n  function g(s)\r\n  {\r\n   return Strings.concat(\"\\n\",s);\r\n  }\r\n  return function(x)\r\n  {\r\n   return g(f(x));\r\n  };\r\n };\r\n String.unindentStr=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.unindentStr;\r\n };\r\n String.indent=function(n,s)\r\n {\r\n  var x,x$1;\r\n  x=Strings.SplitChars(s,[\"\\n\"],0);\r\n  return Seq.map((x$1=Strings.replicate(n,\" \"),function(y)\r\n  {\r\n   return x$1+y;\r\n  }),x);\r\n };\r\n String.unindent=function(s)\r\n {\r\n  var lines,n,o,o$1;\r\n  lines=Strings.SplitChars(s,[\"\\n\"],0);\r\n  n=(o=Seq.tryFindIndex(function(y)\r\n  {\r\n   return\" \"!==y;\r\n  },(o$1=Seq.tryFind(function(l)\r\n  {\r\n   return Strings.Trim(l)!==\"\";\r\n  },lines),o$1==null?\"\":o$1.$0)),o==null?0:o.$0);\r\n  return Seq.filter(function(s$1)\r\n  {\r\n   return!Strings.StartsWith(s$1,\"# 1 \");\r\n  },Seq.map(function(l)\r\n  {\r\n   return l.length<=n?\"\":l.substring(n);\r\n  },lines));\r\n };\r\n String.skipFirstLine=function(txt)\r\n {\r\n  var i;\r\n  i=txt.indexOf(\"\\n\");\r\n  return i<0?\"\":Slice.string(txt,{\r\n   $:1,\r\n   $0:i+1\r\n  },null);\r\n };\r\n String.append=function(a,b)\r\n {\r\n  return a+b;\r\n };\r\n String.right=function(n,s)\r\n {\r\n  return Library[\"String.Right\"](s,n);\r\n };\r\n String.left=function(n,s)\r\n {\r\n  return Library[\"String.Left\"](s,n);\r\n };\r\n String.trim=function(s)\r\n {\r\n  return Strings.Trim(s);\r\n };\r\n String.contains=function(sub,whole)\r\n {\r\n  return whole.indexOf(sub)!=-1;\r\n };\r\n String.delimitedO=function(op,cl,txt)\r\n {\r\n  var o,$1,bef,o$1,$2;\r\n  o=String.splitInTwoO(op,txt);\r\n  return o==null?null:($1=o.$0,(bef=$1[0],(o$1=String.splitInTwoO(cl,$1[1]),o$1==null?null:{\r\n   $:1,\r\n   $0:($2=o$1.$0,[bef,$2[0],$2[1]])\r\n  })));\r\n };\r\n String.splitInTwoO=function(spl,txt)\r\n {\r\n  var i;\r\n  i=txt.indexOf(spl);\r\n  return i===-1?null:{\r\n   $:1,\r\n   $0:[Library[\"String.Left\"](txt,i),txt.substring(i+spl.length)]\r\n  };\r\n };\r\n String.splitByChar=function(c,s)\r\n {\r\n  return Strings.SplitChars(s,[c],0);\r\n };\r\n ParseO.Guid=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Guid|_|\"];\r\n };\r\n ParseO.Double=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Double|_|\"];\r\n };\r\n ParseO.Single=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Single|_|\"];\r\n };\r\n ParseO.Int64=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Int64|_|\"];\r\n };\r\n ParseO.Int=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Int|_|\"];\r\n };\r\n ParseO.Date=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Date|_|\"];\r\n };\r\n ParseO.parseGuidO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseGuidO;\r\n };\r\n ParseO.parseDoubleO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseDoubleO;\r\n };\r\n ParseO.parseSingleO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseSingleO;\r\n };\r\n ParseO.parseInt64O=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseInt64O;\r\n };\r\n ParseO.parseIntO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseIntO;\r\n };\r\n ParseO.parseDateO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseDateO;\r\n };\r\n ParseO.parseDateO2=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseDateO2;\r\n };\r\n ParseO.tryParseWith=function(tryParseFunc)\r\n {\r\n  function g($1,$2)\r\n  {\r\n   return $1?{\r\n    $:1,\r\n    $0:$2\r\n   }:null;\r\n  }\r\n  return function(x)\r\n  {\r\n   return g.apply(null,tryParseFunc(x));\r\n  };\r\n };\r\n Library[\"String.Right\"]=function(_this,n)\r\n {\r\n  var a,b;\r\n  return Library[\"String.Substring2\"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);\r\n };\r\n Library[\"String.Left\"]=function(_this,n)\r\n {\r\n  return n<0?Library[\"String.Substring2\"](_this,0,_this.length+n):Library[\"String.Substring2\"](_this,0,n);\r\n };\r\n Library[\"String.Substring2\"]=function(_this,from,n)\r\n {\r\n  var from$1,b;\r\n  while(true)\r\n   {\r\n    if(n<=0)\r\n     return\"\";\r\n    else\r\n     if(from>=_this.length)\r\n      return\"\";\r\n     else\r\n      if(from<0)\r\n       {\r\n        from$1=from;\r\n        from=0;\r\n        n=n+from$1;\r\n       }\r\n      else\r\n       return Strings.Substring(_this,from,(b=_this.length-from,Unchecked.Compare(n,b)===-1?n:b));\r\n   }\r\n };\r\n Library.print=function(v)\r\n {\r\n  if(typeof v==\"string\")\r\n   ((function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(Utils.toSafe($2));\r\n    };\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }))(v));\r\n  else\r\n   ((function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(Utils.prettyPrint($2));\r\n    };\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }))(v));\r\n };\r\n Library.Error$2=function(a)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:a\r\n  };\r\n };\r\n Pojo.newPojoOpt=function(propOs)\r\n {\r\n  function c(n,vO)\r\n  {\r\n   return vO==null?null:{\r\n    $:1,\r\n    $0:[n,vO.$0]\r\n   };\r\n  }\r\n  return Pojo.newPojo(Seq.choose(function($1)\r\n  {\r\n   return c($1[0],$1[1]);\r\n  },propOs));\r\n };\r\n Pojo.newPojo=function(props)\r\n {\r\n  var pojo,f;\r\n  function f$1(a,a$1)\r\n  {\r\n   return function(p)\r\n   {\r\n    return Pojo.addProp(a,a$1,p);\r\n   };\r\n  }\r\n  function g(v)\r\n  {\r\n  }\r\n  pojo={};\r\n  Seq.iter((f=function(b)\r\n  {\r\n   return(function($1)\r\n   {\r\n    return f$1($1[0],$1[1]);\r\n   }(b))(pojo);\r\n  },function(x)\r\n  {\r\n   return g(f(x));\r\n  }),props);\r\n  return pojo;\r\n };\r\n Pojo.addProp=function(p,p$1,pojo)\r\n {\r\n  pojo[p]=p$1;\r\n  return pojo;\r\n };\r\n WasmStatus.WasmWorkerLoaded={\r\n  $:4\r\n };\r\n WasmStatus.WasmWorkerLoading={\r\n  $:3\r\n };\r\n WasmStatus.WasmLoaded={\r\n  $:2\r\n };\r\n WasmStatus.WasmLoading={\r\n  $:1\r\n };\r\n WasmStatus.WasmNotLoaded={\r\n  $:0\r\n };\r\n IMessagingO.New=function(runRpc,returnValue,returnExn,wprintfn)\r\n {\r\n  return{\r\n   runRpc:runRpc,\r\n   returnValue:returnValue,\r\n   returnExn:returnExn,\r\n   wprintfn:wprintfn\r\n  };\r\n };\r\n ReturnQueue.tryGet=function(md)\r\n {\r\n  var o,arr,m,narr;\r\n  o=ReturnQueue.tryGetS(md);\r\n  return o==null?null:(arr=o.$0,(m=Seq.tryHead(arr),m!=null&&m.$==1?(narr=Slice.array(arr,{\r\n   $:1,\r\n   $0:1\r\n  },null),(ReturnQueue.queues().Remove(md),ReturnQueue.queues().Add(md,narr),{\r\n   $:1,\r\n   $0:m.$0\r\n  })):null));\r\n };\r\n ReturnQueue.add=function(md,fs)\r\n {\r\n  var narr,m;\r\n  narr=(m=ReturnQueue.tryGetS(md),m==null?[fs]:(ReturnQueue.queues().Remove(md),m.$0.concat([fs])));\r\n  ReturnQueue.queues().Add(md,narr);\r\n };\r\n ReturnQueue.tryGetS=function(md)\r\n {\r\n  return(ParseO.tryParseWith(function(a)\r\n  {\r\n   var o;\r\n   o=null;\r\n   return[ReturnQueue.queues().TryGetValue(a,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o];\r\n  }))(md);\r\n };\r\n ReturnQueue.queues=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.queues;\r\n };\r\n CustomXhrProvider=Remoting.CustomXhrProvider=Runtime.Class({\r\n  Sync:function(url,headers,data)\r\n  {\r\n   return Operators.FailWith(\"CustomXhrProvider.Sync not suppported\");\r\n  },\r\n  Async:function(url,headers,data,ok,err)\r\n  {\r\n   var b;\r\n   Concurrency.Start((b=null,Concurrency.Delay(function()\r\n   {\r\n    var md;\r\n    md=Remoting.getHeaderRpc(headers);\r\n    ReturnQueue.add(md,[ok,err]);\r\n    return Concurrency.TryWith(Concurrency.Delay(function()\r\n    {\r\n     Remoting.callRunRpc(md,data);\r\n     return Concurrency.Zero();\r\n    }),function(a)\r\n    {\r\n     Remoting.returnExnExn(md,a);\r\n     return Concurrency.Zero();\r\n    });\r\n   })),null);\r\n  }\r\n },Obj,CustomXhrProvider);\r\n CustomXhrProvider.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },CustomXhrProvider);\r\n Remoting.installProvider=function()\r\n {\r\n  Remoting$1.set_AjaxProvider(new CustomXhrProvider.New());\r\n };\r\n Remoting.returnExn=function(header,e)\r\n {\r\n  Remoting.messaging().returnExn([header,e]);\r\n };\r\n Remoting.returnValue=function(header,data)\r\n {\r\n  Remoting.messaging().returnValue([header,data]);\r\n };\r\n Remoting.callRunRpc=function(header,data)\r\n {\r\n  (Remoting.messaging().runRpc(header))(data);\r\n };\r\n Remoting.messaging=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.messaging;\r\n };\r\n Remoting.set_messaging=function($1)\r\n {\r\n  SC$1.$cctor();\r\n  SC$1.messaging=$1;\r\n };\r\n Remoting.returnExn0=function(md,e)\r\n {\r\n  Remoting.returnExnExn(md,new Global.Error(e));\r\n };\r\n Remoting.returnExnExn=function(md,e)\r\n {\r\n  var o,$1;\r\n  o=ReturnQueue.tryGet(md);\r\n  o==null?void 0:($1=o.$0,$1[0],$1[1](e));\r\n };\r\n Remoting.returnValue0=function(md,v)\r\n {\r\n  var o,$1,ok;\r\n  o=ReturnQueue.tryGet(md);\r\n  o==null?void 0:($1=o.$0,ok=$1[0],$1[1],ok(v));\r\n };\r\n Remoting.originalProvider=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.originalProvider;\r\n };\r\n Remoting.getHeaderRpc=function(headers)\r\n {\r\n  return headers[\"x-websharper-rpc\"];\r\n };\r\n WWorker.terminate=function()\r\n {\r\n  var $1;\r\n  if($1=WWorker.workerO(),$1!=null&&$1.$==1)\r\n   {\r\n    WWorker.workerO().$0.terminate();\r\n    WWorker.set_workerO(null);\r\n    WsTranslatorLoader.printfn(function($2)\r\n    {\r\n     return $2(\"Worker terminated!\");\r\n    });\r\n    WsTranslatorLoader.wasmStatusV().Set(WasmStatus.WasmNotLoaded);\r\n   }\r\n  else\r\n   WsTranslatorLoader.printfn(function($2)\r\n   {\r\n    return $2(\"Worker is not present\");\r\n   });\r\n };\r\n WWorker.fromWorker=function(evt)\r\n {\r\n  var m,v;\r\n  m=evt.data;\r\n  m.$==1?Remoting.returnExn0(m.$0,m.$1):m.$==2?(WsTranslatorLoader.printfn(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(Utils.toSafe($2));\r\n   };\r\n  }))(m.$0):m.$==3?(v=m.$0,!Unchecked.Equals(WsTranslatorLoader.wasmStatusV().Get(),v)?WsTranslatorLoader.wasmStatusV().Set(v):void 0):Remoting.returnValue0(m.$0,m.$1);\r\n };\r\n WWorker.receiveMessage=function(loadInThisThread,evt)\r\n {\r\n  var m;\r\n  m=evt.data;\r\n  m.$==1?(WsTranslatorLoader.printfn(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(Utils.toSafe($2));\r\n   };\r\n  }))(m.$0):m.$==2?loadInThisThread(m.$0):Remoting.callRunRpc(m.$0,m.$1);\r\n };\r\n WWorker.workerO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.workerO;\r\n };\r\n WWorker.set_workerO=function($1)\r\n {\r\n  SC$1.$cctor();\r\n  SC$1.workerO=$1;\r\n };\r\n Require=WasmLoad.Require=Runtime.Class({},Obj,Require);\r\n Require.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },Require);\r\n GlobalModule=WasmLoad.GlobalModule=Runtime.Class({},Obj,GlobalModule);\r\n GlobalModule.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },GlobalModule);\r\n WasmLoad.loadWasmInWorker=function(opts)\r\n {\r\n  var w;\r\n  if(!self.document)\r\n   WsTranslatorLoader.printfn(function($1)\r\n   {\r\n    return $1(\"Already in a worker cannot load Wasm in another worker\");\r\n   });\r\n  else\r\n   if(WsTranslatorLoader.wasmStatusV().Get().$!==0)\r\n    (WsTranslatorLoader.printfn(function($1)\r\n    {\r\n     return function($2)\r\n     {\r\n      return $1(\"Wasm is already \"+WsTranslatorLoader_GeneratedPrintf.p($2));\r\n     };\r\n    }))(WsTranslatorLoader.wasmStatusV().Get());\r\n   else\r\n    {\r\n     WsTranslatorLoader.wasmStatusV().Set(WasmStatus.WasmLoading);\r\n     WsTranslatorLoader.printfn(function($1)\r\n     {\r\n      return $1(\"Initiating WebWorker\");\r\n     });\r\n     w=new Global.Worker(Runtime.ScriptPath(\"../WASM/publish/\",\"WsTranslatorLoader.worker.js\"));\r\n     w.postMessage({\r\n      $:2,\r\n      $0:opts\r\n     });\r\n     w.onmessage=WWorker.fromWorker;\r\n     WWorker.set_workerO({\r\n      $:1,\r\n      $0:w\r\n     });\r\n     Remoting.set_messaging(IMessagingO.New(function(h)\r\n     {\r\n      return function(d)\r\n      {\r\n       return w.postMessage({\r\n        $:0,\r\n        $0:h,\r\n        $1:d\r\n       });\r\n      };\r\n     },function(t)\r\n     {\r\n      Remoting.returnValue0(t[0],t[1]);\r\n     },function(t)\r\n     {\r\n      Remoting.returnExn0(t[0],t[1]);\r\n     },Remoting.messaging().wprintfn));\r\n     Remoting.installProvider();\r\n    }\r\n };\r\n WasmLoad.loadInThisThread=function(opts)\r\n {\r\n  var $1,$2,$3;\r\n  $2=!self.document;\r\n  $3=WsTranslatorLoader.wasmStatusV().Get();\r\n  switch($2?$3.$==3?1:$3.$==1?2:$3.$==2?4:$3.$==0?6:0:$3.$==1?1:$3.$==3?3:$3.$==4?5:$3.$==0?6:0)\r\n  {\r\n   case 0:\r\n    null;\r\n    break;\r\n   case 1:\r\n    WsTranslatorLoader.printfn(function($4)\r\n    {\r\n     return $4(\"WASM is loading\");\r\n    });\r\n    break;\r\n   case 2:\r\n    WsTranslatorLoader.printfn(function($4)\r\n    {\r\n     return $4(\"WASM is loading in the main thread\");\r\n    });\r\n    break;\r\n   case 3:\r\n    WsTranslatorLoader.printfn(function($4)\r\n    {\r\n     return $4(\"WASM is loading in a WebWorker\");\r\n    });\r\n    break;\r\n   case 4:\r\n    WsTranslatorLoader.printfn(function($4)\r\n    {\r\n     return $4(\"WASM is loaded in the main thread\");\r\n    });\r\n    break;\r\n   case 5:\r\n    WsTranslatorLoader.printfn(function($4)\r\n    {\r\n     return $4(\"WASM is loaded in a WebWorker\");\r\n    });\r\n    break;\r\n   case 6:\r\n    Concurrency.Start(Concurrency.FromContinuations(function(ok)\r\n    {\r\n     var b;\r\n     function init()\r\n     {\r\n      WasmLoad.bindWasm();\r\n      WsTranslatorLoader.printfn(function($4)\r\n      {\r\n       return $4(\"WASM Initialized!\");\r\n      });\r\n      WsTranslatorLoader.wasmStatusV().Set(!self.document?WasmStatus.WasmWorkerLoaded:WasmStatus.WasmLoaded);\r\n      ok();\r\n     }\r\n     return Concurrency.Start((b=null,Concurrency.Delay(function()\r\n     {\r\n      WsTranslatorLoader.printfn(function($4)\r\n      {\r\n       return $4(\"Loading WASM. Hold on, this will take a while...\");\r\n      });\r\n      WsTranslatorLoader.wasmStatusV().Set(!self.document?WasmStatus.WasmWorkerLoading:WasmStatus.WasmLoading);\r\n      return Concurrency.Bind(Concurrency.Sleep(50),function()\r\n      {\r\n       return Concurrency.Combine(!(!self.document)?(Remoting.installProvider(),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()\r\n       {\r\n        self.App=Pojo.newPojo([[\"init\",init]]);\r\n        return Concurrency.Bind(WasmLoad.requireJsA([WasmLoad.rootPath()+\"mono-config.js\"]),function()\r\n        {\r\n         return Concurrency.Bind(WasmLoad.requireJsA([WasmLoad.rootPath()+\"runtime.js\"]),function()\r\n         {\r\n          var a,a$1;\r\n          a=WsTranslatorLoader.printfn(function($4)\r\n          {\r\n           return function($5)\r\n           {\r\n            return $4(Utils.toSafe($5));\r\n           };\r\n          });\r\n          self.Module.print=a;\r\n          a$1=WsTranslatorLoader.printfn(function($4)\r\n          {\r\n           return function($5)\r\n           {\r\n            return $4(Utils.toSafe($5));\r\n           };\r\n          });\r\n          self.Module.printErr=a$1;\r\n          self.Module.preRun=[function()\r\n          {\r\n           WasmLoad.preloadFiles(WasmLoad.filesToPreload(opts));\r\n          }];\r\n          return Concurrency.Bind(WasmLoad.requireJsA([WasmLoad.rootPath()+\"dotnet.js\"]),function()\r\n          {\r\n           return Concurrency.Zero();\r\n          });\r\n         });\r\n        });\r\n       }));\r\n      });\r\n     })),null);\r\n    }),null);\r\n    break;\r\n  }\r\n };\r\n WasmLoad.filesToPreload=function(opts)\r\n {\r\n  return List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.append(WsTranslator.dlls(),Seq.delay(function()\r\n   {\r\n    return Arrays.choose(function(a)\r\n    {\r\n     var a$1;\r\n     a$1=String.StartsWith(\"-r:\",a);\r\n     return a$1!=null&&a$1.$==1?{\r\n      $:1,\r\n      $0:a$1.$0\r\n     }:null;\r\n    },Strings.SplitChars(opts,[\"\\n\"],0));\r\n   }));\r\n  }));\r\n };\r\n WasmLoad.preloadFiles=function(files)\r\n {\r\n  var dirFiles,e,f,file,dir,from;\r\n  self.Browser=Pojo.newPojo([[\"init\",Global.ignore],[\"asyncLoad\",function(url,onload,onerror)\r\n  {\r\n   var xhr;\r\n   xhr=new self.XMLHttpRequest();\r\n   xhr.open(\"GET\",url,true);\r\n   xhr.responseType=\"arraybuffer\";\r\n   xhr.onload=function()\r\n   {\r\n    return xhr.status===200||xhr.status===0&&!Unchecked.Equals(xhr.response,null)?onload(new Global.Uint8Array(xhr.response)):onerror();\r\n   };\r\n   xhr.onerror=function()\r\n   {\r\n    return onerror();\r\n   };\r\n   return xhr.send(null);\r\n  }]]);\r\n  self.Module.preloadPlugins=[];\r\n  dirFiles=Seq.cache(Seq.distinct(Seq.map(function(a)\r\n  {\r\n   return[Strings.concat(\"/\",Slice.array(a,null,{\r\n    $:1,\r\n    $0:Arrays.length(a)-2\r\n   })),Seq.last(a)];\r\n  },Seq.map(function(a)\r\n  {\r\n   return Arrays.map(Strings.Trim,a);\r\n  },Seq.map(function(s)\r\n  {\r\n   return Strings.SplitChars(Strings.Replace(s,\"\\\\\",\"/\"),[\"/\"],0);\r\n  },files)))));\r\n  Seq.iter(function(dir$1)\r\n  {\r\n   try\r\n   {\r\n    self.FS.mkdir(dir$1);\r\n   }\r\n   catch(e$1)\r\n   {\r\n    null;\r\n   }\r\n  },Seq.distinct(Seq.map(function(t)\r\n  {\r\n   return t[0];\r\n  },dirFiles)));\r\n  e=Enumerator.Get(dirFiles);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    {\r\n     f=e.Current();\r\n     file=f[1];\r\n     dir=f[0];\r\n     from=Strings.Replace(WasmLoad.rootPath()+dir+\"/\"+file,\"//\",\"/\");\r\n     (WsTranslatorLoader.printfn(function($1)\r\n     {\r\n      return function($2)\r\n      {\r\n       return $1(\"Preloading \"+Utils.toSafe($2));\r\n      };\r\n     }))(from);\r\n     self.FS.createPreloadedFile(dir,file,from,1,Global.$op21);\r\n    }\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n WasmLoad.bindWasm=function()\r\n {\r\n  Seq.iter(function(t)\r\n  {\r\n   WasmLoad.bindStaticMethod(t[0],t[1],t[2]);\r\n  },List.ofArray([[\"WsTranslator\",\"FsRoot.WsTranslator\",\"runRpc\"]]));\r\n };\r\n WasmLoad.bindStaticMethod=function(assmbly,path,methd)\r\n {\r\n  var m;\r\n  self[((((Runtime.Curried(function($1,$2,$3,$4)\r\n  {\r\n   return $1(\"WASM_\"+Utils.toSafe($2)+\"_\"+Utils.toSafe($3)+\"_\"+Utils.toSafe($4));\r\n  },4))(Global.id))(assmbly))(Strings.Replace(path,\".\",\"_\")))(methd)]=(m=((((Runtime.Curried(function($1,$2,$3,$4)\r\n  {\r\n   return $1(\"[\"+Utils.toSafe($2)+\"]\"+Utils.toSafe($3)+\":\"+Utils.toSafe($4));\r\n  },4))(Global.id))(assmbly))(path))(methd),self.Module.mono_bind_static_method(m));\r\n };\r\n WasmLoad.requireJsA=function(fs)\r\n {\r\n  return Concurrency.FromContinuations(function(ok)\r\n  {\r\n   return Global.requirejs(Arrays.ofSeq(fs),ok);\r\n  });\r\n };\r\n WasmLoad.rootPath=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rootPath;\r\n };\r\n UI.main=function()\r\n {\r\n  var x,a;\r\n  x=UI.mainDoc();\r\n  a=self.document.body;\r\n  Templates.LoadLocalTemplates(\"\");\r\n  Doc.Run(a,x);\r\n };\r\n UI.mainDoc=function()\r\n {\r\n  var c,c$1;\r\n  return Doc.Element(\"div\",[],[Doc.Element(\"h1\",[],[Doc.TextNode(\"HELLO WASM!\")]),Doc.Element(\"h2\",[],[Doc.TextView(View.Map(function($1)\r\n  {\r\n   return(function($2)\r\n   {\r\n    return function($3)\r\n    {\r\n     return $2(WsTranslatorLoader_GeneratedPrintf.p($3));\r\n    };\r\n   }(Global.id))($1);\r\n  },WsTranslatorLoader.wasmStatusV().get_View()))]),Doc.Element(\"span\",[],[Doc.Button(\"Load as Worker\",[],function()\r\n  {\r\n   WasmLoad.loadWasmInWorker(UI.optsV().Get());\r\n  }),Doc.Button(\"Load in Main thread\",[],function()\r\n  {\r\n   WasmLoad.loadInThisThread(UI.optsV().Get());\r\n  }),Doc.Button(\"Terminate Worker\",[],function()\r\n  {\r\n   WWorker.terminate();\r\n  })]),Doc.Element(\"div\",[],[Doc.InputArea([],UI.codeV()),Doc.InputArea([],UI.optsV())]),Doc.Element(\"span\",[],[Doc.Button(\"Check\",[],function()\r\n  {\r\n   UI.callWasmA(function(t)\r\n   {\r\n    return UI.parseAndCheckProject(t[0],t[1],t[2]);\r\n   },UI.getParms());\r\n  }),Doc.Button(\"Translate\",[],function()\r\n  {\r\n   UI.clean();\r\n   WsTranslatorLoader.printfn(function($1)\r\n   {\r\n    return $1(\"Initiating translation:\");\r\n   });\r\n   UI.callWasmA(function(t)\r\n   {\r\n    return UI.translateToJs(t[0],t[1],t[2]);\r\n   },UI.getParms());\r\n  }),Doc.Button(\"Dir\",[],function()\r\n  {\r\n   UI.callWasmA(function(d)\r\n   {\r\n    return(new AjaxRemotingProvider.New()).Async(\"WsTranslator:FsRoot.WsTranslator+Rpc.dirRpc:-1181784350\",[d]);\r\n   },\"/\");\r\n  }),Doc.Button(\"Clean\",[],function()\r\n  {\r\n   UI.clean();\r\n  })]),UI.showMessages(\"Fsc Messages\",function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(Utils.prettyPrint($2));\r\n   };\r\n  }(Global.id),UI.fsErrsV().get_View()),UI.showMessages(\"Ws  Errors\",(c=function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"(\"+WsTranslatorLoader_GeneratedPrintf.p$1($2[0])+\", \"+WsTranslatorLoader_GeneratedPrintf.p$2($2[1])+\")\");\r\n   };\r\n  }(Global.id),function(t)\r\n  {\r\n   return c([t[0],t[1]]);\r\n  }),UI.wsErrsV().get_View()),UI.showMessages(\"Ws  Warnings\",(c$1=function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"(\"+WsTranslatorLoader_GeneratedPrintf.p$1($2[0])+\", \"+WsTranslatorLoader_GeneratedPrintf.p$3($2[1])+\")\");\r\n   };\r\n  }(Global.id),function(t)\r\n  {\r\n   return c$1([t[0],t[1]]);\r\n  }),UI.wsWrnsV().get_View()),Doc.Element(\"div\",[AttrProxy.Create(\"style\",\"font-family: monospace; white-space:pre\")],[Doc.TextView(UI.detailsV().get_View())])]);\r\n };\r\n UI.translateToJs=function(projectName,opts,code)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async(\"WsTranslator:FsRoot.WsTranslator+Rpc.translateFsToJsRpc:-829776470\",[projectName,opts,code]),function(a)\r\n   {\r\n    var wsO,asmO,a$1,asm,b$1;\r\n    wsO=a[1];\r\n    UI.fsErrsV().Set(a[0]);\r\n    return wsO==null?(UI.clean(),UI.wsErrsV().Set([]),UI.wsWrnsV().Set([]),Concurrency.Zero()):(asmO=wsO.$0[0],(a$1=asmO==null?\"No translation\":(asm=asmO.$0,(Concurrency.Start((b$1=null,Concurrency.Delay(function()\r\n    {\r\n     return Concurrency.Bind(FShUI.processAssembly(asm),function()\r\n     {\r\n      return Concurrency.Return(null);\r\n     });\r\n    })),null),\"Assembly (asm) loaded\")),UI.detailsV().Set(a$1),UI.wsErrsV().Set(Arrays.ofSeq(wsO.$0[1])),UI.wsWrnsV().Set(Arrays.ofSeq(wsO.$0[2])),Concurrency.Zero()));\r\n   });\r\n  });\r\n };\r\n UI.parseAndCheckProject=function(projectName,opts,code)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async(\"WsTranslator:FsRoot.WsTranslator+Rpc.parseAndCheckProjectRpc:-1474163089\",[projectName,opts,code]),function(a)\r\n   {\r\n    var a$1;\r\n    UI.fsErrsV().Set(Arrays.ofSeq(a[0]));\r\n    UI.wsErrsV().Set([]);\r\n    UI.wsWrnsV().Set([]);\r\n    a$1=(function($1)\r\n    {\r\n     return function($2)\r\n     {\r\n      return $1(\"(\"+Utils.prettyPrint($2[0])+\", \"+Utils.printArray(Utils.prettyPrint,$2[1])+\")\");\r\n     };\r\n    }(Global.id))([a[2],a[1]]);\r\n    UI.detailsV().Set(a$1);\r\n    return Concurrency.Zero();\r\n   });\r\n  });\r\n };\r\n UI.showMessages=function(name,f,msgsW)\r\n {\r\n  return Doc.BindView(function(msgs)\r\n  {\r\n   return Arrays.length(msgs)===0?Doc.get_Empty():Doc.Element(\"div\",[],[Doc.TextNode(name),Doc.Element(\"ol\",[],[Doc.Concat(Seq.map(function(x)\r\n   {\r\n    return Doc.Element(\"li\",[],[Doc.TextNode(f(x))]);\r\n   },msgs))])]);\r\n  },msgsW);\r\n };\r\n UI.getParms=function()\r\n {\r\n  return[\"WasmTest\",Arrays.filter(function(s)\r\n  {\r\n   return Strings.Trim(s)!==\"\";\r\n  },Strings.SplitChars(\"fsc.exe\\n\"+UI.optsV().Get(),[\"\\n\"],0)),UI.codeV().Get()];\r\n };\r\n UI.callWasmA=function(f,p)\r\n {\r\n  var b;\r\n  Concurrency.Start((b=null,Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Combine(WsTranslatorLoader.wasmStatusV().Get().$===0?(WasmLoad.loadWasmInWorker(UI.optsV().Get()),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.Bind(Concurrency.Sleep(50),function()\r\n    {\r\n     return Concurrency.Combine(Concurrency.While(function()\r\n     {\r\n      var m;\r\n      m=WsTranslatorLoader.wasmStatusV().Get();\r\n      return m.$==2?false:m.$!=4;\r\n     },Concurrency.Delay(function()\r\n     {\r\n      WsTranslatorLoader.printfn(function($1)\r\n      {\r\n       return $1(\"Waiting for WASM to load...\");\r\n      });\r\n      return Concurrency.Bind(Concurrency.Sleep(2000),function()\r\n      {\r\n       return Concurrency.Return(null);\r\n      });\r\n     })),Concurrency.Delay(function()\r\n     {\r\n      return Concurrency.Bind(f(p),function()\r\n      {\r\n       return Concurrency.Return(null);\r\n      });\r\n     }));\r\n    });\r\n   }));\r\n  })),null);\r\n };\r\n UI.clean=function()\r\n {\r\n  UI.detailsV().Set(\"\");\r\n };\r\n UI.optsV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.optsV;\r\n };\r\n UI.codeV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.codeV;\r\n };\r\n UI.wsWrnsV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.wsWrnsV;\r\n };\r\n UI.wsErrsV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.wsErrsV;\r\n };\r\n UI.fsErrsV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.fsErrsV;\r\n };\r\n UI.detailsV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.detailsV;\r\n };\r\n WsTranslatorLoader.printfn=function(fmt)\r\n {\r\n  return fmt(Remoting.messaging().wprintfn);\r\n };\r\n WsTranslatorLoader.wasmStatusV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.wasmStatusV;\r\n };\r\n SC$1.$cctor=function()\r\n {\r\n  var f,g;\r\n  SC$1.$cctor=Global.ignore;\r\n  function g$1(s)\r\n  {\r\n   return Strings.concat(\"\\n\",s);\r\n  }\r\n  function f$1(s)\r\n  {\r\n   return String.splitByChar(\"\\n\",s);\r\n  }\r\n  function g$2(s)\r\n  {\r\n   var a,b;\r\n   return Slice.array(s,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:(a=0,(b=Arrays.length(s)-2,Unchecked.Compare(a,b)===1?a:b))\r\n   });\r\n  }\r\n  function g$3(s)\r\n  {\r\n   return Strings.concat(\"\\n\",s);\r\n  }\r\n  function f$2(s)\r\n  {\r\n   return s+\"T00:00:00\";\r\n  }\r\n  SC$1.unindentStr=function(x)\r\n  {\r\n   return g$1(String.unindent(x));\r\n  };\r\n  SC$1.skipLastLine=(f=function(x)\r\n  {\r\n   return g$2(f$1(x));\r\n  },function(x)\r\n  {\r\n   return g$3(f(x));\r\n  });\r\n  SC$1.parseDateO2=(g=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o,m;\r\n   o=0;\r\n   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];\r\n  }),function(x)\r\n  {\r\n   return g(f$2(x));\r\n  });\r\n  SC$1.parseDateO=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o,m;\r\n   o=0;\r\n   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];\r\n  });\r\n  SC$1.parseIntO=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o;\r\n   o=0;\r\n   return[Numeric.TryParseInt32(a,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o];\r\n  });\r\n  SC$1.parseInt64O=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o;\r\n   o=0;\r\n   return[Numeric.TryParseInt64(a,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o];\r\n  });\r\n  SC$1.parseSingleO=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o,$1;\r\n   o=0;\r\n   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];\r\n  });\r\n  SC$1.parseDoubleO=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o,$1;\r\n   o=0;\r\n   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];\r\n  });\r\n  SC$1.parseGuidO=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o;\r\n   o=null;\r\n   return[Guid.TryParse(a,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o];\r\n  });\r\n  SC$1[\"|Date|_|\"]=ParseO.parseDateO();\r\n  SC$1[\"|Int|_|\"]=ParseO.parseIntO();\r\n  SC$1[\"|Int64|_|\"]=ParseO.parseInt64O();\r\n  SC$1[\"|Single|_|\"]=ParseO.parseSingleO();\r\n  SC$1[\"|Double|_|\"]=ParseO.parseDoubleO();\r\n  SC$1[\"|Guid|_|\"]=ParseO.parseGuidO();\r\n  SC$1.wasmStatusV=Var$1.Create$1(WasmStatus.WasmNotLoaded);\r\n  SC$1.originalProvider=Remoting$1.AjaxProvider();\r\n  SC$1.queues=new Dictionary.New$5();\r\n  SC$1.messaging=IMessagingO.New(function(h)\r\n  {\r\n   return function(d)\r\n   {\r\n    return self.WASM_WsTranslator_FsRoot_WsTranslator_runRpc(h,d);\r\n   };\r\n  },function(t)\r\n  {\r\n   Remoting.returnValue0(t[0],t[1]);\r\n  },function(t)\r\n  {\r\n   Remoting.returnExn0(t[0],t[1]);\r\n  },function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"EARLY PRINTING!: \"+Utils.toSafe($2));\r\n   };\r\n  }(function(s)\r\n  {\r\n   console.log(s);\r\n  }));\r\n  SC$1.workerO=null;\r\n  SC$1.rootPath=\"/WASM/publish/\";\r\n  SC$1.detailsV=Var$1.Create$1(\"\");\r\n  SC$1.fsErrsV=Var$1.Create$1([]);\r\n  SC$1.wsErrsV=Var$1.Create$1([]);\r\n  SC$1.wsWrnsV=Var$1.Create$1([]);\r\n  SC$1.codeV=Var$1.Create$1(\"\\r\\n            open WebSharper\\r\\n            open WebSharper.UI\\r\\n            open WebSharper.UI.Html\\r\\n            \\r\\n            let name = Var.Create \\\"World\\\"\\r\\n            \\r\\n            [< Inline \\\"'Hello inline '\\\" >]\\r\\n            let bDoc() = \\\"Hello\\\"\\r\\n            \\r\\n            let cDoc() = text name.V\\r\\n            \\r\\n            let aDoc() = \\r\\n                div [] [\\r\\n                    text <| bDoc()\\r\\n                    cDoc()\\r\\n                ]\\r\\n            \\r\\n                    \");\r\n  SC$1.optsV=Var$1.Create$1(Strings.concat(\"\\n\",Seq.map(Strings.Trim,Strings.SplitChars(\"\\r\\n                                            /tmp/source.fsx\\r\\n                                            -o:source.exe\\r\\n                                            --simpleresolution\\r\\n                                            --nowarn:3186\\r\\n                                            --optimize-\\r\\n                                            --noframework\\r\\n                                            --fullpaths\\r\\n                                            --warn:3\\r\\n                                            --target:exe\\r\\n                                            -r:/dlls/WebSharper.Core.dll\\r\\n                                            -r:/dlls/WebSharper.UI.dll\\r\\n                                            -r:/dlls/WebSharper.Sitelets.dll\\r\\n                                            -r:/managed/FSharp.Core.dll\\r\\n                                            -r:/managed/mscorlib.dll\\r\\n                                            -r:/managed/netstandard.dll\\r\\n                                            -r:/managed/System.dll\\r\\n                                            -r:/managed/System.Core.dll\\r\\n                                            -r:/managed/System.IO.dll\\r\\n                                            -r:/managed/System.Runtime.dll\\r\\n                                            -r:/managed/System.Net.Http.dll\\r\\n                                            -r:/managed/System.Threading.dll\\r\\n                                            -r:/managed/System.Numerics.dll\\r\\n                                        \",[\"\\n\"],0))));\r\n  !(!self.document)?Remoting.set_messaging(IMessagingO.New(Remoting.messaging().runRpc,Remoting.messaging().returnValue,Remoting.messaging().returnExn,function(txt)\r\n  {\r\n   var pre;\r\n   console.log(txt);\r\n   pre=UI.detailsV().Get();\r\n   UI.detailsV().Set(pre+(pre===\"\"?\"\":\"\\n\")+txt);\r\n  })):void 0;\r\n };\r\n WsTranslatorLoader_GeneratedPrintf.p=function($1)\r\n {\r\n  return $1.$==4?\"WasmWorkerLoaded\":$1.$==3?\"WasmWorkerLoading\":$1.$==2?\"WasmLoaded\":$1.$==1?\"WasmLoading\":\"WasmNotLoaded\";\r\n };\r\n WsTranslatorLoader_GeneratedPrintf.p$3=function($1)\r\n {\r\n  return $1.$==1?\"PublicProxy \"+Utils.prettyPrint($1.$0):\"SourceWarning \"+Utils.prettyPrint($1.$0);\r\n };\r\n WsTranslatorLoader_GeneratedPrintf.p$2=function($1)\r\n {\r\n  return $1.$==6?\"FieldNotFound (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\")\":$1.$==5?\"ConstructorNotFound (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\", \"+Utils.printList(Utils.prettyPrint,$1.$2)+\")\":$1.$==4?\"MethodNameNotFound (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\", \"+Utils.printList(Utils.prettyPrint,$1.$2)+\")\":$1.$==3?\"MethodNotFound (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\", \"+Utils.printList(Utils.prettyPrint,$1.$2)+\")\":$1.$==2?\"TypeNotFound \"+Utils.prettyPrint($1.$0):$1.$==1?\"NameConflict (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\")\":\"SourceError \"+Utils.prettyPrint($1.$0);\r\n };\r\n WsTranslatorLoader_GeneratedPrintf.p$1=function($1)\r\n {\r\n  return $1==null?\"null\":\"Some \"+GeneratedPrintf.p($1.$0);\r\n };\r\n GeneratedPrintf.p=function($1)\r\n {\r\n  return\"{\"+(\"FileName = \"+Utils.prettyPrint($1.FileName))+\"; \"+(\"Start = \"+(\"(\"+Utils.prettyPrint($1.Start[0])+\", \"+Utils.prettyPrint($1.Start[1])+\")\"))+\"; \"+(\"End = \"+(\"(\"+Utils.prettyPrint($1.End[0])+\", \"+Utils.prettyPrint($1.End[1])+\")\"))+\"}\";\r\n };\r\n}());\r\n"
    }
  ]
}
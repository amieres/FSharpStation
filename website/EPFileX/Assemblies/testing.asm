{
  "asName": "testing",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm",
    "WebSharper.Web.asm",
    "WebSharper.Sitelets.asm",
    "WebSharper.Control.asm",
    "WebSharper.UI.asm",
    "WebSharper.UI.Templating.Runtime.asm",
    "WsTranslator.asm",
    "WebSharper.Data.asm"
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
      "moName": "FsRoot.LibraryJS",
      "methods": []
    },
    {
      "moName": "FsRoot.WasmLoader+WasmStatus",
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
      "moName": "FsRoot.WasmLoader+MsgFromWorker",
      "methods": []
    },
    {
      "moName": "FsRoot.WasmLoader+MsgFromHost",
      "methods": []
    },
    {
      "moName": "FsRoot.WasmLoader+Remoting+IMessagingO",
      "methods": []
    },
    {
      "moName": "FsRoot.WasmLoader+Remoting+ReturnQueue",
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
      "moName": "FsRoot.WasmLoader+Remoting+CustomXhrProvider",
      "methods": []
    },
    {
      "moName": "FsRoot.WasmLoader+Remoting",
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
            "asm": "testing"
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
              "asm": "testing"
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
      "moName": "FsRoot.WasmLoader+WWorker",
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
      "moName": "FsRoot.WasmLoader+WasmLoad+Require",
      "methods": []
    },
    {
      "moName": "FsRoot.WasmLoader+WasmLoad+GlobalModule",
      "methods": []
    },
    {
      "moName": "FsRoot.WasmLoader+WasmLoad+FS",
      "methods": []
    },
    {
      "moName": "FsRoot.WasmLoader+WasmLoad",
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
      "moName": "FsRoot.WasmLoader+UI",
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
      "moName": "FsRoot.WasmLoader",
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
      "moName": "FsRoot.WSFrameworkTest",
      "methods": [
        {
          "meName": "mainDocNameVar",
          "isField": 1,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
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
          "meName": "testVarOut",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "testVarInput",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "testVar",
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
      "moName": "FsRoot.AssemblyData+ModuleName",
      "methods": []
    },
    {
      "moName": "FsRoot.AssemblyData+TypeName",
      "methods": []
    },
    {
      "moName": "FsRoot.AssemblyData+MethodName",
      "methods": []
    },
    {
      "moName": "FsRoot.AssemblyData+AssemblyName",
      "methods": []
    },
    {
      "moName": "FsRoot.AssemblyData+AssemblyRef",
      "methods": []
    },
    {
      "moName": "FsRoot.AssemblyData+JSCode",
      "methods": []
    },
    {
      "moName": "FsRoot.AssemblyData+ModuleRef",
      "methods": []
    },
    {
      "moName": "FsRoot.AssemblyData+TypeRef",
      "methods": []
    },
    {
      "moName": "FsRoot.AssemblyData+MethodDef",
      "methods": []
    },
    {
      "moName": "FsRoot.AssemblyData+ModuleDef",
      "methods": []
    },
    {
      "moName": "FsRoot.AssemblyData+AssemblyDef",
      "methods": []
    },
    {
      "moName": "FsRoot.AssemblyData+LoadAsm",
      "methods": [
        {
          "meName": "fetchAsmData",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.AssemblyData+AssemblyDef>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.AssemblyData+AssemblyRef",
              "asm": "testing"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.AssemblyData",
      "methods": [
        {
          "meName": "assembliesDoc",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "currentAssembly",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "assemblyDoc",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "AssemblyDef",
              "asm": "testing"
            }
          ]
        },
        {
          "meName": "styleDoc",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "methodRows",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(MethodDef -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "AssemblyDef",
              "asm": "testing"
            },
            {
              "tName": "(ModuleDef -> (MethodDef -> 'a))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "selectedMethod",
          "isField": 1,
          "type": {
            "tName": "Var<Option<(ModuleName * MethodName)>>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "listAssembliesDoc",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "selectedAssembly",
          "isField": 1,
          "type": {
            "tName": "Var<Option<AssemblyName>>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "click$1052$37",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "click",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "nobr",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "loadThisModule",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "thisModuleV",
          "isField": 1,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "alreadyLoaded",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "loadTesting",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "loadAssembly",
          "isField": 0,
          "type": {
            "tName": "Async<unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "AssemblyRef",
              "asm": "testing"
            }
          ]
        },
        {
          "meName": "saveAssemblies",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<AssemblyDef>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Folder",
          "isField": 1,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "loadDef",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "AssemblyDef",
              "asm": "testing"
            }
          ]
        },
        {
          "meName": "isLoaded",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "AssemblyRef",
              "asm": "testing"
            }
          ]
        },
        {
          "meName": "assemblies",
          "isField": 1,
          "type": {
            "tName": "ListModel<AssemblyName, AssemblyDef>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "loadAssembly'",
          "isField": 0,
          "type": {
            "tName": "Async<unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(AssemblyRef -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(AssemblyDef -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(AssemblyRef -> Async<AssemblyDef>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "AssemblyRef",
              "asm": "testing"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.WSFramework",
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
          "meName": "mainSubDoc",
          "isField": 1,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "mainDocInput",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "mainDocVar",
          "isField": 1,
          "type": {
            "tName": "Var<Doc>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "mainDocNameVar",
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
      "moName": "StartupCode$testing$testing",
      "methods": []
    },
    {
      "moName": "Generated$testing",
      "methods": [
        {
          "meName": "testing_GeneratedPrintf.p",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "testing_GeneratedPrintf.p$3",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "testing_GeneratedPrintf.p$2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "testing_GeneratedPrintf.p$1",
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
  "js": "// $begin{copyright}\n//\n// This file is part of WebSharper\n//\n// Copyright (c) 2008-2016 IntelliFactory\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\"); you\n// may not use this file except in compliance with the License.  You may\n// obtain a copy of the License at\n//\n//     http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n// implied.  See the License for the specific language governing\n// permissions and limitations under the License.\n//\n// $end{copyright}\n\nIntelliFactory = {\n    Runtime: {\n        Ctor: function (ctor, typeFunction) {\n            ctor.prototype = typeFunction.prototype;\n            return ctor;\n        },\n\n        Class: function (members, base, statics) {\n            var proto = members;\n            if (base) {\n                proto = new base();\n                for (var m in members) { proto[m] = members[m] }\n            }\n            var typeFunction = function (copyFrom) {\n                if (copyFrom) {\n                    for (var f in copyFrom) { this[f] = copyFrom[f] }\n                }\n            }\n            typeFunction.prototype = proto;\n            if (statics) {\n                for (var f in statics) { typeFunction[f] = statics[f] }\n            }\n            return typeFunction;\n        },\n\n        Clone: function (obj) {\n            var res = {};\n            for (var p in obj) { res[p] = obj[p] }\n            return res;\n        },\n\n        NewObject:\n            function (kv) {\n                var o = {};\n                for (var i = 0; i < kv.length; i++) {\n                    o[kv[i][0]] = kv[i][1];\n                }\n                return o;\n            },\n\n        DeleteEmptyFields:\n            function (obj, fields) {\n                for (var i = 0; i < fields.length; i++) {\n                    var f = fields[i];\n                    if (obj[f] === void (0)) { delete obj[f]; }\n                }\n                return obj;\n            },\n\n        GetOptional:\n            function (value) {\n                return (value === void (0)) ? null : { $: 1, $0: value };\n            },\n\n        SetOptional:\n            function (obj, field, value) {\n                if (value) {\n                    obj[field] = value.$0;\n                } else {\n                    delete obj[field];\n                }\n            },\n\n        SetOrDelete:\n            function (obj, field, value) {\n                if (value === void (0)) {\n                    delete obj[field];\n                } else {\n                    obj[field] = value;\n                }\n            },\n\n        Apply: function (f, obj, args) {\n            return f.apply(obj, args);\n        },\n\n        Bind: function (f, obj) {\n            return function () { return f.apply(this, arguments) };\n        },\n\n        CreateFuncWithArgs: function (f) {\n            return function () { return f(Array.prototype.slice.call(arguments)) };\n        },\n\n        CreateFuncWithOnlyThis: function (f) {\n            return function () { return f(this) };\n        },\n\n        CreateFuncWithThis: function (f) {\n            return function () { return f(this).apply(null, arguments) };\n        },\n\n        CreateFuncWithThisArgs: function (f) {\n            return function () { return f(this)(Array.prototype.slice.call(arguments)) };\n        },\n\n        CreateFuncWithRest: function (length, f) {\n            return function () { return f(Array.prototype.slice.call(arguments, 0, length).concat([Array.prototype.slice.call(arguments, length)])) };\n        },\n\n        CreateFuncWithArgsRest: function (length, f) {\n            return function () { return f([Array.prototype.slice.call(arguments, 0, length), Array.prototype.slice.call(arguments, length)]) };\n        },\n\n        BindDelegate: function (func, obj) {\n            var res = func.bind(obj);\n            res.$Func = func;\n            res.$Target = obj;\n            return res;\n        },\n\n        CreateDelegate: function (invokes) {\n            if (invokes.length == 0) return null;\n            if (invokes.length == 1) return invokes[0];\n            var del = function () {\n                var res;\n                for (var i = 0; i < invokes.length; i++) {\n                    res = invokes[i].apply(null, arguments);\n                }\n                return res;\n            };\n            del.$Invokes = invokes;\n            return del;\n        },\n\n        CombineDelegates: function (dels) {\n            var invokes = [];\n            for (var i = 0; i < dels.length; i++) {\n                var del = dels[i];\n                if (del) {\n                    if (\"$Invokes\" in del)\n                        invokes = invokes.concat(del.$Invokes);\n                    else\n                        invokes.push(del);\n                }\n            }\n            return IntelliFactory.Runtime.CreateDelegate(invokes);\n        },\n\n        DelegateEqual: function (d1, d2) {\n            if (d1 === d2) return true;\n            if (d1 == null || d2 == null) return false;\n            var i1 = d1.$Invokes || [d1];\n            var i2 = d2.$Invokes || [d2];\n            if (i1.length != i2.length) return false;\n            for (var i = 0; i < i1.length; i++) {\n                var e1 = i1[i];\n                var e2 = i2[i];\n                if (!(e1 === e2 || (\"$Func\" in e1 && \"$Func\" in e2 && e1.$Func === e2.$Func && e1.$Target == e2.$Target)))\n                    return false;\n            }\n            return true;\n        },\n\n        ThisFunc: function (d) {\n            return function () {\n                var args = Array.prototype.slice.call(arguments);\n                args.unshift(this);\n                return d.apply(null, args);\n            };\n        },\n\n        ThisFuncOut: function (f) {\n            return function () {\n                var args = Array.prototype.slice.call(arguments);\n                return f.apply(args.shift(), args);\n            };\n        },\n\n        ParamsFunc: function (length, d) {\n            return function () {\n                var args = Array.prototype.slice.call(arguments);\n                return d.apply(null, args.slice(0, length).concat([args.slice(length)]));\n            };\n        },\n\n        ParamsFuncOut: function (length, f) {\n            return function () {\n                var args = Array.prototype.slice.call(arguments);\n                return f.apply(null, args.slice(0, length).concat(args[length]));\n            };\n        },\n\n        ThisParamsFunc: function (length, d) {\n            return function () {\n                var args = Array.prototype.slice.call(arguments);\n                args.unshift(this);\n                return d.apply(null, args.slice(0, length + 1).concat([args.slice(length + 1)]));\n            };\n        },\n\n        ThisParamsFuncOut: function (length, f) {\n            return function () {\n                var args = Array.prototype.slice.call(arguments);\n                return f.apply(args.shift(), args.slice(0, length).concat(args[length]));\n            };\n        },\n\n        Curried: function (f, n, args) {\n            args = args || [];\n            return function (a) {\n                var allArgs = args.concat([a === void (0) ? null : a]);\n                if (n == 1)\n                    return f.apply(null, allArgs);\n                if (n == 2)\n                    return function (a) { return f.apply(null, allArgs.concat([a === void (0) ? null : a])); }\n                return IntelliFactory.Runtime.Curried(f, n - 1, allArgs);\n            }\n        },\n\n        Curried2: function (f) {\n            return function (a) { return function (b) { return f(a, b); } }\n        },\n\n        Curried3: function (f) {\n            return function (a) { return function (b) { return function (c) { return f(a, b, c); } } }\n        },\n\n        UnionByType: function (types, value, optional) {\n            var vt = typeof value;\n            for (var i = 0; i < types.length; i++) {\n                var t = types[i];\n                if (typeof t == \"number\") {\n                    if (Array.isArray(value) && (t == 0 || value.length == t)) {\n                        return { $: i, $0: value };\n                    }\n                } else {\n                    if (t == vt) {\n                        return { $: i, $0: value };\n                    }\n                }\n            }\n            if (!optional) {\n                throw new Error(\"Type not expected for creating Choice value.\");\n            }\n        },\n\n        ScriptBasePath: \"./\",\n\n        ScriptPath: function (a, f) {\n            return this.ScriptBasePath + (this.ScriptSkipAssemblyDir ? \"\" : a + \"/\") + f;\n        },\n\n        OnLoad:\n            function (f) {\n                if (!(\"load\" in this)) {\n                    this.load = [];\n                }\n                this.load.push(f);\n            },\n\n        Start:\n            function () {\n                function run(c) {\n                    for (var i = 0; i < c.length; i++) {\n                        c[i]();\n                    }\n                }\n                if (\"load\" in this) {\n                    run(this.load);\n                    this.load = [];\n                }\n            },\n    }\n}\n\nIntelliFactory.Runtime.OnLoad(function () {\n    if (self.WebSharper && WebSharper.Activator && WebSharper.Activator.Activate)\n        WebSharper.Activator.Activate()\n});\n\n// Polyfill\n\nif (!Date.now) {\n    Date.now = function () {\n        return new Date().getTime();\n    };\n}\n\nif (!Math.trunc) {\n    Math.trunc = function (x) {\n        return x < 0 ? Math.ceil(x) : Math.floor(x);\n    }\n}\n\nif (!Object.setPrototypeOf) {\n  Object.setPrototypeOf = function (obj, proto) {\n    obj.__proto__ = proto;\n    return obj;\n  }\n}\n\nfunction ignore() { };\nfunction id(x) { return x };\nfunction fst(x) { return x[0] };\nfunction snd(x) { return x[1] };\nfunction trd(x) { return x[2] };\n\nif (!console) {\n    console = {\n        count: ignore,\n        dir: ignore,\n        error: ignore,\n        group: ignore,\n        groupEnd: ignore,\n        info: ignore,\n        log: ignore,\n        profile: ignore,\n        profileEnd: ignore,\n        time: ignore,\n        timeEnd: ignore,\n        trace: ignore,\n        warn: ignore\n    }\n};\r\nimportScripts([\"//cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js\"]);\r\nvar JSON;JSON||(JSON={}),function(){\"use strict\";function i(n){return n<10?\"0\"+n:n}function f(n){return o.lastIndex=0,o.test(n)?'\"'+n.replace(o,function(n){var t=s[n];return typeof t==\"string\"?t:\"\\\\u\"+(\"0000\"+n.charCodeAt(0).toString(16)).slice(-4)})+'\"':'\"'+n+'\"'}function r(i,e){var s,l,h,a,v=n,c,o=e[i];o&&typeof o==\"object\"&&typeof o.toJSON==\"function\"&&(o=o.toJSON(i)),typeof t==\"function\"&&(o=t.call(e,i,o));switch(typeof o){case\"string\":return f(o);case\"number\":return isFinite(o)?String(o):\"null\";case\"boolean\":case\"null\":return String(o);case\"object\":if(!o)return\"null\";if(n+=u,c=[],Object.prototype.toString.apply(o)===\"[object Array]\"){for(a=o.length,s=0;s<a;s+=1)c[s]=r(s,o)||\"null\";return h=c.length===0?\"[]\":n?\"[\\n\"+n+c.join(\",\\n\"+n)+\"\\n\"+v+\"]\":\"[\"+c.join(\",\")+\"]\",n=v,h}if(t&&typeof t==\"object\")for(a=t.length,s=0;s<a;s+=1)typeof t[s]==\"string\"&&(l=t[s],h=r(l,o),h&&c.push(f(l)+(n?\": \":\":\")+h));else for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(h=r(l,o),h&&c.push(f(l)+(n?\": \":\":\")+h));return h=c.length===0?\"{}\":n?\"{\\n\"+n+c.join(\",\\n\"+n)+\"\\n\"+v+\"}\":\"{\"+c.join(\",\")+\"}\",n=v,h}}typeof Date.prototype.toJSON!=\"function\"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+\"-\"+i(this.getUTCMonth()+1)+\"-\"+i(this.getUTCDate())+\"T\"+i(this.getUTCHours())+\":\"+i(this.getUTCMinutes())+\":\"+i(this.getUTCSeconds())+\"Z\":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var e=/[\\u0000\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/g,o=/[\\\\\\\"\\x00-\\x1f\\x7f-\\x9f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/g,n,u,s={\"\\b\":\"\\\\b\",\"\\t\":\"\\\\t\",\"\\n\":\"\\\\n\",\"\\f\":\"\\\\f\",\"\\r\":\"\\\\r\",'\"':'\\\\\"',\"\\\\\":\"\\\\\\\\\"},t;typeof JSON.stringify!=\"function\"&&(JSON.stringify=function(i,f,e){var o;if(n=\"\",u=\"\",typeof e==\"number\")for(o=0;o<e;o+=1)u+=\" \";else typeof e==\"string\"&&(u=e);if(t=f,f&&typeof f!=\"function\"&&(typeof f!=\"object\"||typeof f.length!=\"number\"))throw new Error(\"JSON.stringify\");return r(\"\",{\"\":i})}),typeof JSON.parse!=\"function\"&&(JSON.parse=function(n,t){function r(n,i){var f,e,u=n[i];if(u&&typeof u==\"object\")for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&(e=r(u,f),e!==undefined?u[f]=e:delete u[f]);return t.call(n,i,u)}var i;if(n=String(n),e.lastIndex=0,e.test(n)&&(n=n.replace(e,function(n){return\"\\\\u\"+(\"0000\"+n.charCodeAt(0).toString(16)).slice(-4)})),/^[\\],:{}\\s]*$/.test(n.replace(/\\\\(?:[\"\\\\\\/bfnrt]|u[0-9a-fA-F]{4})/g,\"@\").replace(/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g,\"]\").replace(/(?:^|:|,)(?:\\s*\\[)+/g,\"\")))return i=eval(\"(\"+n+\")\"),typeof t==\"function\"?r({\"\":i},\"\"):i;throw new SyntaxError(\"JSON.parse\");})}();;\r\n(function () {\n    var lastTime = 0;\n    var vendors = ['webkit', 'moz'];\n    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {\n        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];\n        window.cancelAnimationFrame =\n          window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];\n    }\n\n    if (!window.requestAnimationFrame)\n        window.requestAnimationFrame = function (callback, element) {\n            var currTime = new Date().getTime();\n            var timeToCall = Math.max(0, 16 - (currTime - lastTime));\n            var id = window.setTimeout(function () { callback(currTime + timeToCall); },\n              timeToCall);\n            lastTime = currTime + timeToCall;\n            return id;\n        };\n\n    if (!window.cancelAnimationFrame)\n        window.cancelAnimationFrame = function (id) {\n            clearTimeout(id);\n        };\n}());\n;\r\nimportScripts([\"https://code.jquery.com/jquery-3.1.1.min.js\"]);\r\n(function()\r\n{\r\n \"use strict\";\r\n var Global,FsRoot,WSFramework,WebSharper,Operators,Obj,UI,Var,WasmLoader,View,EventTarget,WindowOrWorkerGlobalScope,WorkerGlobalScope,WWorker,WasmLoad,Remoting,IMessagingO,AssemblyData,UI$1,Node,JavaScript,JS,SC$1,Snap,Arrays,Event,Utils,WasmStatus,Pervasives,LibraryJS,Pojo,GlobalModule,Seq,ListModel,HtmlModule,attr,Doc,testing_GeneratedPrintf,GeneratedPrintf,Remoting$1,AjaxRemotingProvider,Client,Templates,AssemblyRef,Library,String,Strings,Slice,ParseO,Unchecked,Numeric,System,Guid,Var$1,Collections,Dictionary,List,T,AssemblyDef,WSFrameworkTest,Concurrency,CustomXhrProvider,Require,WsTranslator,XMLHttpRequestEventTarget,ArrayBufferView,Enumerator,AttrProxy,Array,AssemblyName,ViewBuilder,Docs,LoadAsm,DateUtil,ConcreteVar,SC$2,DictionaryUtil,ReturnQueue,T$1,Storage,ModuleDef,JSCode,AsyncBody,SC$3,SC$4,Object,CT,DomUtility,AttrModule,Attrs,TypeName,TypeRef,MethodDef,ModuleName,MethodName,SC$5,HashSet,An,Settings,Abbrev,Mailbox,FSharp,Data,Runtime,IO,Fresh,XhrProvider,ArrayStorage,DocElemNode,CharacterData,Scheduler,Error,OperationCanceledException,CancellationTokenSource,Elt,Prepare,KeyCollection,Docs$1,RunState,NodeSet,Anims,SC$6,Data$1,TxtRuntime,Pervasives$1,Attrs$1,Dyn,Json,Updates,SC$7,SC$8,AppendList,FormatException,SC$9,SC$10,Queue,Easing,HashSet$1,HashSetUtil,DomNodes,DynamicAttrNode,Lazy,SC$11,LazyExtensionsProxy,LazyRecord,IntelliFactory,Runtime$1,Date,console,JSON,$,Math;\r\n Global=self;\r\n FsRoot=Global.FsRoot=Global.FsRoot||{};\r\n WSFramework=FsRoot.WSFramework=FsRoot.WSFramework||{};\r\n WebSharper=Global.WebSharper=Global.WebSharper||{};\r\n Operators=WebSharper.Operators=WebSharper.Operators||{};\r\n Obj=WebSharper.Obj=WebSharper.Obj||{};\r\n UI=WebSharper.UI=WebSharper.UI||{};\r\n Var=UI.Var=UI.Var||{};\r\n WasmLoader=FsRoot.WasmLoader=FsRoot.WasmLoader||{};\r\n View=UI.View=UI.View||{};\r\n EventTarget=Global.EventTarget;\r\n WindowOrWorkerGlobalScope=Global.WindowOrWorkerGlobalScope;\r\n WorkerGlobalScope=Global.WorkerGlobalScope;\r\n WWorker=WasmLoader.WWorker=WasmLoader.WWorker||{};\r\n WasmLoad=WasmLoader.WasmLoad=WasmLoader.WasmLoad||{};\r\n Remoting=WasmLoader.Remoting=WasmLoader.Remoting||{};\r\n IMessagingO=Remoting.IMessagingO=Remoting.IMessagingO||{};\r\n AssemblyData=FsRoot.AssemblyData=FsRoot.AssemblyData||{};\r\n UI$1=WasmLoader.UI=WasmLoader.UI||{};\r\n Node=Global.Node;\r\n JavaScript=WebSharper.JavaScript=WebSharper.JavaScript||{};\r\n JS=JavaScript.JS=JavaScript.JS||{};\r\n SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};\r\n Snap=UI.Snap=UI.Snap||{};\r\n Arrays=WebSharper.Arrays=WebSharper.Arrays||{};\r\n Event=Global.Event;\r\n Utils=WebSharper.Utils=WebSharper.Utils||{};\r\n WasmStatus=WasmLoader.WasmStatus=WasmLoader.WasmStatus||{};\r\n Pervasives=JavaScript.Pervasives=JavaScript.Pervasives||{};\r\n LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};\r\n Pojo=LibraryJS.Pojo=LibraryJS.Pojo||{};\r\n GlobalModule=WasmLoad.GlobalModule=WasmLoad.GlobalModule||{};\r\n Seq=WebSharper.Seq=WebSharper.Seq||{};\r\n ListModel=UI.ListModel=UI.ListModel||{};\r\n HtmlModule=UI.HtmlModule=UI.HtmlModule||{};\r\n attr=HtmlModule.attr=HtmlModule.attr||{};\r\n Doc=UI.Doc=UI.Doc||{};\r\n testing_GeneratedPrintf=Global.testing_GeneratedPrintf=Global.testing_GeneratedPrintf||{};\r\n GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};\r\n Remoting$1=WebSharper.Remoting=WebSharper.Remoting||{};\r\n AjaxRemotingProvider=Remoting$1.AjaxRemotingProvider=Remoting$1.AjaxRemotingProvider||{};\r\n Client=UI.Client=UI.Client||{};\r\n Templates=Client.Templates=Client.Templates||{};\r\n AssemblyRef=AssemblyData.AssemblyRef=AssemblyData.AssemblyRef||{};\r\n Library=FsRoot.Library=FsRoot.Library||{};\r\n String=Library.String=Library.String||{};\r\n Strings=WebSharper.Strings=WebSharper.Strings||{};\r\n Slice=WebSharper.Slice=WebSharper.Slice||{};\r\n ParseO=Library.ParseO=Library.ParseO||{};\r\n Unchecked=WebSharper.Unchecked=WebSharper.Unchecked||{};\r\n Numeric=WebSharper.Numeric=WebSharper.Numeric||{};\r\n System=Global.System=Global.System||{};\r\n Guid=System.Guid=System.Guid||{};\r\n Var$1=UI.Var$1=UI.Var$1||{};\r\n Collections=WebSharper.Collections=WebSharper.Collections||{};\r\n Dictionary=Collections.Dictionary=Collections.Dictionary||{};\r\n List=WebSharper.List=WebSharper.List||{};\r\n T=List.T=List.T||{};\r\n AssemblyDef=AssemblyData.AssemblyDef=AssemblyData.AssemblyDef||{};\r\n WSFrameworkTest=FsRoot.WSFrameworkTest=FsRoot.WSFrameworkTest||{};\r\n Concurrency=WebSharper.Concurrency=WebSharper.Concurrency||{};\r\n CustomXhrProvider=Remoting.CustomXhrProvider=Remoting.CustomXhrProvider||{};\r\n Require=WasmLoad.Require=WasmLoad.Require||{};\r\n WsTranslator=FsRoot.WsTranslator=FsRoot.WsTranslator||{};\r\n XMLHttpRequestEventTarget=Global.XMLHttpRequestEventTarget;\r\n ArrayBufferView=Global.ArrayBufferView;\r\n Enumerator=WebSharper.Enumerator=WebSharper.Enumerator||{};\r\n AttrProxy=UI.AttrProxy=UI.AttrProxy||{};\r\n Array=UI.Array=UI.Array||{};\r\n AssemblyName=AssemblyData.AssemblyName=AssemblyData.AssemblyName||{};\r\n ViewBuilder=UI.ViewBuilder=UI.ViewBuilder||{};\r\n Docs=UI.Docs=UI.Docs||{};\r\n LoadAsm=AssemblyData.LoadAsm=AssemblyData.LoadAsm||{};\r\n DateUtil=WebSharper.DateUtil=WebSharper.DateUtil||{};\r\n ConcreteVar=UI.ConcreteVar=UI.ConcreteVar||{};\r\n SC$2=Global.StartupCode$WebSharper_Main$Remoting=Global.StartupCode$WebSharper_Main$Remoting||{};\r\n DictionaryUtil=Collections.DictionaryUtil=Collections.DictionaryUtil||{};\r\n ReturnQueue=Remoting.ReturnQueue=Remoting.ReturnQueue||{};\r\n T$1=Enumerator.T=Enumerator.T||{};\r\n Storage=UI.Storage=UI.Storage||{};\r\n ModuleDef=AssemblyData.ModuleDef=AssemblyData.ModuleDef||{};\r\n JSCode=AssemblyData.JSCode=AssemblyData.JSCode||{};\r\n AsyncBody=Concurrency.AsyncBody=Concurrency.AsyncBody||{};\r\n SC$3=Global.StartupCode$WebSharper_Main$Concurrency=Global.StartupCode$WebSharper_Main$Concurrency||{};\r\n SC$4=Global.StartupCode$WsTranslator$WsTranslator=Global.StartupCode$WsTranslator$WsTranslator||{};\r\n Object=Global.Object;\r\n CT=Concurrency.CT=Concurrency.CT||{};\r\n DomUtility=UI.DomUtility=UI.DomUtility||{};\r\n AttrModule=UI.AttrModule=UI.AttrModule||{};\r\n Attrs=UI.Attrs=UI.Attrs||{};\r\n TypeName=AssemblyData.TypeName=AssemblyData.TypeName||{};\r\n TypeRef=AssemblyData.TypeRef=AssemblyData.TypeRef||{};\r\n MethodDef=AssemblyData.MethodDef=AssemblyData.MethodDef||{};\r\n ModuleName=AssemblyData.ModuleName=AssemblyData.ModuleName||{};\r\n MethodName=AssemblyData.MethodName=AssemblyData.MethodName||{};\r\n SC$5=Global.StartupCode$WebSharper_UI$Templates=Global.StartupCode$WebSharper_UI$Templates||{};\r\n HashSet=Collections.HashSet=Collections.HashSet||{};\r\n An=UI.An=UI.An||{};\r\n Settings=Client.Settings=Client.Settings||{};\r\n Abbrev=UI.Abbrev=UI.Abbrev||{};\r\n Mailbox=Abbrev.Mailbox=Abbrev.Mailbox||{};\r\n FSharp=Global.FSharp=Global.FSharp||{};\r\n Data=FSharp.Data=FSharp.Data||{};\r\n Runtime=Data.Runtime=Data.Runtime||{};\r\n IO=Runtime.IO=Runtime.IO||{};\r\n Fresh=Abbrev.Fresh=Abbrev.Fresh||{};\r\n XhrProvider=Remoting$1.XhrProvider=Remoting$1.XhrProvider||{};\r\n ArrayStorage=Storage.ArrayStorage=Storage.ArrayStorage||{};\r\n DocElemNode=UI.DocElemNode=UI.DocElemNode||{};\r\n CharacterData=Global.CharacterData;\r\n Scheduler=Concurrency.Scheduler=Concurrency.Scheduler||{};\r\n Error=Global.Error;\r\n OperationCanceledException=WebSharper.OperationCanceledException=WebSharper.OperationCanceledException||{};\r\n CancellationTokenSource=WebSharper.CancellationTokenSource=WebSharper.CancellationTokenSource||{};\r\n Elt=UI.Elt=UI.Elt||{};\r\n Prepare=Templates.Prepare=Templates.Prepare||{};\r\n KeyCollection=Collections.KeyCollection=Collections.KeyCollection||{};\r\n Docs$1=Client.Docs=Client.Docs||{};\r\n RunState=Docs$1.RunState=Docs$1.RunState||{};\r\n NodeSet=Docs$1.NodeSet=Docs$1.NodeSet||{};\r\n Anims=UI.Anims=UI.Anims||{};\r\n SC$6=Global.StartupCode$WebSharper_UI$Doc_Proxy=Global.StartupCode$WebSharper_UI$Doc_Proxy||{};\r\n Data$1=WebSharper.Data=WebSharper.Data||{};\r\n TxtRuntime=Data$1.TxtRuntime=Data$1.TxtRuntime||{};\r\n Pervasives$1=Data$1.Pervasives=Data$1.Pervasives||{};\r\n Attrs$1=Client.Attrs=Client.Attrs||{};\r\n Dyn=Attrs$1.Dyn=Attrs$1.Dyn||{};\r\n Json=WebSharper.Json=WebSharper.Json||{};\r\n Updates=UI.Updates=UI.Updates||{};\r\n SC$7=Global.StartupCode$WebSharper_UI$DomUtility=Global.StartupCode$WebSharper_UI$DomUtility||{};\r\n SC$8=Global.StartupCode$WebSharper_UI$Animation=Global.StartupCode$WebSharper_UI$Animation||{};\r\n AppendList=UI.AppendList=UI.AppendList||{};\r\n FormatException=WebSharper.FormatException=WebSharper.FormatException||{};\r\n SC$9=Global.StartupCode$WebSharper_UI$Abbrev=Global.StartupCode$WebSharper_UI$Abbrev||{};\r\n SC$10=Global.StartupCode$WebSharper_UI$Attr_Client=Global.StartupCode$WebSharper_UI$Attr_Client||{};\r\n Queue=WebSharper.Queue=WebSharper.Queue||{};\r\n Easing=UI.Easing=UI.Easing||{};\r\n HashSet$1=Abbrev.HashSet=Abbrev.HashSet||{};\r\n HashSetUtil=Collections.HashSetUtil=Collections.HashSetUtil||{};\r\n DomNodes=Docs$1.DomNodes=Docs$1.DomNodes||{};\r\n DynamicAttrNode=UI.DynamicAttrNode=UI.DynamicAttrNode||{};\r\n Lazy=WebSharper.Lazy=WebSharper.Lazy||{};\r\n SC$11=Global.StartupCode$WebSharper_UI$AppendList=Global.StartupCode$WebSharper_UI$AppendList||{};\r\n LazyExtensionsProxy=WebSharper.LazyExtensionsProxy=WebSharper.LazyExtensionsProxy||{};\r\n LazyRecord=LazyExtensionsProxy.LazyRecord=LazyExtensionsProxy.LazyRecord||{};\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime$1=IntelliFactory&&IntelliFactory.Runtime;\r\n Date=Global.Date;\r\n console=Global.console;\r\n JSON=Global.JSON;\r\n $=Global.jQuery;\r\n Math=Global.Math;\r\n WSFramework.main=function()\r\n {\r\n  var x,a;\r\n  if(!(!self.document))\r\n   if(AssemblyData.alreadyLoaded())\r\n    {\r\n     x=Doc.Element(\"div\",[],[WSFramework.mainDocInput(),AssemblyData.assembliesDoc(),UI$1.mainDoc(),Doc.Element(\"div\",[],[WSFramework.mainSubDoc()])]);\r\n     a=self.document.body;\r\n     Templates.LoadLocalTemplates(\"\");\r\n     Doc.Run(a,x);\r\n    }\r\n   else\r\n    AssemblyData.loadTesting();\r\n };\r\n WSFramework.mainDocInput=function()\r\n {\r\n  return Doc.Element(\"div\",[],[Doc.Input([AttrProxy.Create(\"style\",\"width: 100%\")],WSFramework.mainDocNameVar())]);\r\n };\r\n WSFramework.mainSubDoc=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainSubDoc;\r\n };\r\n WSFramework.mainDocNameVar=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainDocNameVar$1;\r\n };\r\n WSFramework.mainDocVar=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainDocVar;\r\n };\r\n Operators.FailWith=function(msg)\r\n {\r\n  throw new Error(msg);\r\n };\r\n Operators.KeyValue=function(kvp)\r\n {\r\n  return[kvp.K,kvp.V];\r\n };\r\n Obj=WebSharper.Obj=Runtime$1.Class({\r\n  Equals:function(obj)\r\n  {\r\n   return this===obj;\r\n  },\r\n  GetHashCode:function()\r\n  {\r\n   return -1;\r\n  }\r\n },null,Obj);\r\n Obj.New=Runtime$1.Ctor(function()\r\n {\r\n },Obj);\r\n Var=UI.Var=Runtime$1.Class({},Obj,Var);\r\n Var.New=Runtime$1.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },Var);\r\n WasmLoader.wasmStatusV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.wasmStatusV;\r\n };\r\n WasmLoader.printfn=function(fmt)\r\n {\r\n  return fmt(Remoting.messaging().wprintfn);\r\n };\r\n View.Sink=function(act,a)\r\n {\r\n  function loop()\r\n  {\r\n   Snap.WhenRun(a(),act,function()\r\n   {\r\n    Concurrency.scheduler().Fork(loop);\r\n   });\r\n  }\r\n  Concurrency.scheduler().Fork(loop);\r\n };\r\n View.Map=function(fn,a)\r\n {\r\n  return View.CreateLazy(function()\r\n  {\r\n   return Snap.Map(fn,a());\r\n  });\r\n };\r\n View.get_Do=function()\r\n {\r\n  return ViewBuilder.B;\r\n };\r\n View.CreateLazy=function(observe)\r\n {\r\n  var lv;\r\n  lv={\r\n   c:null,\r\n   o:observe\r\n  };\r\n  return function()\r\n  {\r\n   var c,$1;\r\n   c=lv.c;\r\n   return c===null?(c=lv.o(),lv.c=c,($1=c.s,$1!=null&&$1.$==0)?lv.o=null:Snap.WhenObsoleteRun(c,function()\r\n   {\r\n    lv.c=null;\r\n   }),c):c;\r\n  };\r\n };\r\n View.Map2Unit=function(a,a$1)\r\n {\r\n  return View.CreateLazy(function()\r\n  {\r\n   return Snap.Map2Unit(a(),a$1());\r\n  });\r\n };\r\n View.Const=function(x)\r\n {\r\n  var o;\r\n  o=Snap.New({\r\n   $:0,\r\n   $0:x\r\n  });\r\n  return function()\r\n  {\r\n   return o;\r\n  };\r\n };\r\n View.Bind=function(fn,view)\r\n {\r\n  return View.Join(View.Map(fn,view));\r\n };\r\n View.Join=function(a)\r\n {\r\n  return View.CreateLazy(function()\r\n  {\r\n   return Snap.Join(a());\r\n  });\r\n };\r\n View.MapSeqCachedViewBy=function(key,conv,view)\r\n {\r\n  var state;\r\n  state=[new Dictionary.New$5()];\r\n  return View.Map(function(xs)\r\n  {\r\n   var prevState,newState,result;\r\n   prevState=state[0];\r\n   newState=new Dictionary.New$5();\r\n   result=Array.mapInPlace(function(x)\r\n   {\r\n    var k,node,n;\r\n    k=key(x);\r\n    node=prevState.ContainsKey(k)?(n=prevState.get_Item(k),(Var$1.Set(n.r,x),n)):View.ConvertSeqNode(function(v)\r\n    {\r\n     return conv(k,v);\r\n    },x);\r\n    newState.set_Item(k,node);\r\n    return node.e;\r\n   },Arrays.ofSeq(xs));\r\n   state[0]=newState;\r\n   return result;\r\n  },view);\r\n };\r\n View.ConvertSeqNode=function(conv,value)\r\n {\r\n  var _var,view;\r\n  _var=Var$1.Create$1(value);\r\n  view=_var.get_View();\r\n  return{\r\n   e:conv(view),\r\n   r:_var,\r\n   w:view\r\n  };\r\n };\r\n WWorker.receiveMessage=function(loadInThisThread,evt)\r\n {\r\n  var m;\r\n  m=evt.data;\r\n  m.$==1?(WasmLoader.printfn(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(Utils.toSafe($2));\r\n   };\r\n  }))(m.$0):m.$==2?loadInThisThread(m.$0):Remoting.callRunRpc(m.$0,m.$1);\r\n };\r\n WWorker.terminate=function()\r\n {\r\n  var $1;\r\n  if($1=WWorker.workerO(),$1!=null&&$1.$==1)\r\n   {\r\n    WWorker.workerO().$0.terminate();\r\n    WWorker.set_workerO(null);\r\n    WasmLoader.printfn(function($2)\r\n    {\r\n     return $2(\"Worker terminated!\");\r\n    });\r\n    WasmLoader.wasmStatusV().Set(WasmStatus.WasmNotLoaded);\r\n   }\r\n  else\r\n   WasmLoader.printfn(function($2)\r\n   {\r\n    return $2(\"Worker is not present\");\r\n   });\r\n };\r\n WWorker.fromWorker=function(evt)\r\n {\r\n  var m,v;\r\n  m=evt.data;\r\n  m.$==1?Remoting.returnExn0(m.$0,m.$1):m.$==2?(WasmLoader.printfn(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(Utils.toSafe($2));\r\n   };\r\n  }))(m.$0):m.$==3?(v=m.$0,!Unchecked.Equals(WasmLoader.wasmStatusV().Get(),v)?WasmLoader.wasmStatusV().Set(v):void 0):Remoting.returnValue0(m.$0,m.$1);\r\n };\r\n WWorker.set_workerO=function($1)\r\n {\r\n  SC$1.$cctor();\r\n  SC$1.workerO=$1;\r\n };\r\n WWorker.workerO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.workerO;\r\n };\r\n WasmLoad.loadInThisThread=function(opts)\r\n {\r\n  var $1,$2,$3;\r\n  $2=!self.document;\r\n  $3=WasmLoader.wasmStatusV().Get();\r\n  switch($2?$3.$==3?1:$3.$==1?2:$3.$==2?4:$3.$==0?6:0:$3.$==1?1:$3.$==3?3:$3.$==4?5:$3.$==0?6:0)\r\n  {\r\n   case 0:\r\n    null;\r\n    break;\r\n   case 1:\r\n    WasmLoader.printfn(function($4)\r\n    {\r\n     return $4(\"WASM is loading\");\r\n    });\r\n    break;\r\n   case 2:\r\n    WasmLoader.printfn(function($4)\r\n    {\r\n     return $4(\"WASM is loading in the main thread\");\r\n    });\r\n    break;\r\n   case 3:\r\n    WasmLoader.printfn(function($4)\r\n    {\r\n     return $4(\"WASM is loading in a WebWorker\");\r\n    });\r\n    break;\r\n   case 4:\r\n    WasmLoader.printfn(function($4)\r\n    {\r\n     return $4(\"WASM is loaded in the main thread\");\r\n    });\r\n    break;\r\n   case 5:\r\n    WasmLoader.printfn(function($4)\r\n    {\r\n     return $4(\"WASM is loaded in a WebWorker\");\r\n    });\r\n    break;\r\n   case 6:\r\n    Concurrency.Start(Concurrency.FromContinuations(function(ok)\r\n    {\r\n     var b;\r\n     function init()\r\n     {\r\n      WasmLoad.bindWasm();\r\n      WasmLoader.printfn(function($4)\r\n      {\r\n       return $4(\"WASM Initialized!\");\r\n      });\r\n      WasmLoader.wasmStatusV().Set(!self.document?WasmStatus.WasmWorkerLoaded:WasmStatus.WasmLoaded);\r\n      ok();\r\n     }\r\n     return Concurrency.Start((b=null,Concurrency.Delay(function()\r\n     {\r\n      WasmLoader.printfn(function($4)\r\n      {\r\n       return $4(\"Loading WASM. Hold on, this will take a while...\");\r\n      });\r\n      WasmLoader.wasmStatusV().Set(!self.document?WasmStatus.WasmWorkerLoading:WasmStatus.WasmLoading);\r\n      return Concurrency.Bind(Concurrency.Sleep(50),function()\r\n      {\r\n       return Concurrency.Combine(!(!self.document)?(Remoting.installProvider(),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()\r\n       {\r\n        self.App=Pojo.newPojo([[\"init\",init]]);\r\n        return Concurrency.Bind(WasmLoad.requireJsA([WasmLoad.rootPath()+\"mono-config.js\"]),function()\r\n        {\r\n         return Concurrency.Bind(WasmLoad.requireJsA([WasmLoad.rootPath()+\"runtime.js\"]),function()\r\n         {\r\n          var a,a$1;\r\n          a=WasmLoader.printfn(function($4)\r\n          {\r\n           return function($5)\r\n           {\r\n            return $4(Utils.toSafe($5));\r\n           };\r\n          });\r\n          self.Module.print=a;\r\n          a$1=WasmLoader.printfn(function($4)\r\n          {\r\n           return function($5)\r\n           {\r\n            return $4(Utils.toSafe($5));\r\n           };\r\n          });\r\n          self.Module.printErr=a$1;\r\n          self.Module.preRun=[function()\r\n          {\r\n           WasmLoad.preloadFiles(WasmLoad.filesToPreload(opts));\r\n          }];\r\n          return Concurrency.Bind(WasmLoad.requireJsA([WasmLoad.rootPath()+\"dotnet.js\"]),function()\r\n          {\r\n           return Concurrency.Zero();\r\n          });\r\n         });\r\n        });\r\n       }));\r\n      });\r\n     })),null);\r\n    }),null);\r\n    break;\r\n  }\r\n };\r\n WasmLoad.requireJsA=function(fs)\r\n {\r\n  return Concurrency.FromContinuations(function(ok)\r\n  {\r\n   return Global.requirejs(Arrays.ofSeq(fs),ok);\r\n  });\r\n };\r\n WasmLoad.rootPath=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rootPath;\r\n };\r\n WasmLoad.filesToPreload=function(opts)\r\n {\r\n  return List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.append(WsTranslator.dlls(),Seq.delay(function()\r\n   {\r\n    return Arrays.choose(function(a)\r\n    {\r\n     var a$1;\r\n     a$1=String.StartsWith(\"-r:\",a);\r\n     return a$1!=null&&a$1.$==1?{\r\n      $:1,\r\n      $0:a$1.$0\r\n     }:null;\r\n    },Strings.SplitChars(opts,[\"\\n\"],0));\r\n   }));\r\n  }));\r\n };\r\n WasmLoad.preloadFiles=function(files)\r\n {\r\n  var dirFiles,e,f,file,dir,from;\r\n  self.Browser=Pojo.newPojo([[\"init\",Global.ignore],[\"asyncLoad\",function(url,onload,onerror)\r\n  {\r\n   var xhr;\r\n   xhr=new self.XMLHttpRequest();\r\n   xhr.open(\"GET\",url,true);\r\n   xhr.responseType=\"arraybuffer\";\r\n   xhr.onload=function()\r\n   {\r\n    return xhr.status===200||xhr.status===0&&!Unchecked.Equals(xhr.response,null)?onload(new Global.Uint8Array(xhr.response)):onerror();\r\n   };\r\n   xhr.onerror=function()\r\n   {\r\n    return onerror();\r\n   };\r\n   return xhr.send(null);\r\n  }]]);\r\n  self.Module.preloadPlugins=[];\r\n  dirFiles=Seq.cache(Seq.distinct(Seq.map(function(a)\r\n  {\r\n   return[Strings.concat(\"/\",Slice.array(a,null,{\r\n    $:1,\r\n    $0:Arrays.length(a)-2\r\n   })),Seq.last(a)];\r\n  },Seq.map(function(a)\r\n  {\r\n   return Arrays.map(Strings.Trim,a);\r\n  },Seq.map(function(s)\r\n  {\r\n   return Strings.SplitChars(Strings.Replace(s,\"\\\\\",\"/\"),[\"/\"],0);\r\n  },files)))));\r\n  Seq.iter(function(dir$1)\r\n  {\r\n   try\r\n   {\r\n    self.FS.mkdir(dir$1);\r\n   }\r\n   catch(e$1)\r\n   {\r\n    null;\r\n   }\r\n  },Seq.distinct(Seq.map(function(t)\r\n  {\r\n   return t[0];\r\n  },dirFiles)));\r\n  e=Enumerator.Get(dirFiles);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    {\r\n     f=e.Current();\r\n     file=f[1];\r\n     dir=f[0];\r\n     from=Strings.Replace(WasmLoad.rootPath()+dir+\"/\"+file,\"//\",\"/\");\r\n     (WasmLoader.printfn(function($1)\r\n     {\r\n      return function($2)\r\n      {\r\n       return $1(\"Preloading \"+Utils.toSafe($2));\r\n      };\r\n     }))(from);\r\n     self.FS.createPreloadedFile(dir,file,from,1,Global.$op21);\r\n    }\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n WasmLoad.bindWasm=function()\r\n {\r\n  Seq.iter(function(t)\r\n  {\r\n   WasmLoad.bindStaticMethod(t[0],t[1],t[2]);\r\n  },List.ofArray([[\"WsTranslator\",\"FsRoot.WsTranslator\",\"runRpc\"]]));\r\n };\r\n WasmLoad.loadWasmInWorker=function(opts)\r\n {\r\n  var w;\r\n  if(!self.document)\r\n   WasmLoader.printfn(function($1)\r\n   {\r\n    return $1(\"Already in a worker cannot load Wasm in another worker\");\r\n   });\r\n  else\r\n   if(WasmLoader.wasmStatusV().Get().$!==0)\r\n    (WasmLoader.printfn(function($1)\r\n    {\r\n     return function($2)\r\n     {\r\n      return $1(\"Wasm is already \"+testing_GeneratedPrintf.p($2));\r\n     };\r\n    }))(WasmLoader.wasmStatusV().Get());\r\n   else\r\n    {\r\n     WasmLoader.wasmStatusV().Set(WasmStatus.WasmLoading);\r\n     WasmLoader.printfn(function($1)\r\n     {\r\n      return $1(\"Initiating WebWorker\");\r\n     });\r\n     w=new Global.Worker(Runtime$1.ScriptPath(\"testing\",\"testing.WasmWorker.js\"));\r\n     w.postMessage({\r\n      $:2,\r\n      $0:opts\r\n     });\r\n     w.onmessage=WWorker.fromWorker;\r\n     WWorker.set_workerO({\r\n      $:1,\r\n      $0:w\r\n     });\r\n     Remoting.set_messaging(IMessagingO.New(function(h)\r\n     {\r\n      return function(d)\r\n      {\r\n       return w.postMessage({\r\n        $:0,\r\n        $0:h,\r\n        $1:d\r\n       });\r\n      };\r\n     },function(t)\r\n     {\r\n      Remoting.returnValue0(t[0],t[1]);\r\n     },function(t)\r\n     {\r\n      Remoting.returnExn0(t[0],t[1]);\r\n     },Remoting.messaging().wprintfn));\r\n     Remoting.installProvider();\r\n    }\r\n };\r\n WasmLoad.bindStaticMethod=function(assmbly,path,methd)\r\n {\r\n  var m;\r\n  self[((((Runtime$1.Curried(function($1,$2,$3,$4)\r\n  {\r\n   return $1(\"WASM_\"+Utils.toSafe($2)+\"_\"+Utils.toSafe($3)+\"_\"+Utils.toSafe($4));\r\n  },4))(Global.id))(assmbly))(Strings.Replace(path,\".\",\"_\")))(methd)]=(m=((((Runtime$1.Curried(function($1,$2,$3,$4)\r\n  {\r\n   return $1(\"[\"+Utils.toSafe($2)+\"]\"+Utils.toSafe($3)+\":\"+Utils.toSafe($4));\r\n  },4))(Global.id))(assmbly))(path))(methd),self.Module.mono_bind_static_method(m));\r\n };\r\n Remoting.set_messaging=function($1)\r\n {\r\n  SC$1.$cctor();\r\n  SC$1.messaging=$1;\r\n };\r\n Remoting.returnValue=function(header,data)\r\n {\r\n  Remoting.messaging().returnValue([header,data]);\r\n };\r\n Remoting.returnExn=function(header,e)\r\n {\r\n  Remoting.messaging().returnExn([header,e]);\r\n };\r\n Remoting.callRunRpc=function(header,data)\r\n {\r\n  (Remoting.messaging().runRpc(header))(data);\r\n };\r\n Remoting.installProvider=function()\r\n {\r\n  Remoting$1.set_AjaxProvider(new CustomXhrProvider.New());\r\n };\r\n Remoting.messaging=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.messaging;\r\n };\r\n Remoting.returnValue0=function(md,v)\r\n {\r\n  var o,$1,ok;\r\n  o=ReturnQueue.tryGet(md);\r\n  o==null?void 0:($1=o.$0,ok=$1[0],$1[1],ok(v));\r\n };\r\n Remoting.returnExn0=function(md,e)\r\n {\r\n  Remoting.returnExnExn(md,new Error(e));\r\n };\r\n Remoting.returnExnExn=function(md,e)\r\n {\r\n  var o,$1;\r\n  o=ReturnQueue.tryGet(md);\r\n  o==null?void 0:($1=o.$0,$1[0],$1[1](e));\r\n };\r\n Remoting.getHeaderRpc=function(headers)\r\n {\r\n  return headers[\"x-websharper-rpc\"];\r\n };\r\n IMessagingO.New=function(runRpc,returnValue,returnExn,wprintfn)\r\n {\r\n  return{\r\n   runRpc:runRpc,\r\n   returnValue:returnValue,\r\n   returnExn:returnExn,\r\n   wprintfn:wprintfn\r\n  };\r\n };\r\n AssemblyData.alreadyLoaded=function()\r\n {\r\n  return Seq.length((AssemblyData.assemblies())[\"var\"].Get())>0;\r\n };\r\n AssemblyData.assembliesDoc=function()\r\n {\r\n  return Doc.Concat([Doc.Button(\"Load module:\",[],function()\r\n  {\r\n   AssemblyData.loadThisModule();\r\n  }),Doc.Input([],AssemblyData.thisModuleV()),AssemblyData.listAssembliesDoc(),AssemblyData.currentAssembly(),AssemblyData.styleDoc()]);\r\n };\r\n AssemblyData.loadTesting=function()\r\n {\r\n  Concurrency.Start(AssemblyData.loadAssembly(new AssemblyRef({\r\n   $:0,\r\n   $0:(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(\"testing.asm?q=\"+Utils.prettyPrint($2));\r\n    };\r\n   }(Global.id))(Date.now())\r\n  })),null);\r\n };\r\n AssemblyData.assemblies=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.assemblies;\r\n };\r\n AssemblyData.loadThisModule=function()\r\n {\r\n  Concurrency.Start(AssemblyData.loadAssembly(new AssemblyRef({\r\n   $:0,\r\n   $0:AssemblyData.thisModuleV().Get()\r\n  })),null);\r\n };\r\n AssemblyData.thisModuleV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.thisModuleV;\r\n };\r\n AssemblyData.listAssembliesDoc=function()\r\n {\r\n  var m;\r\n  function f(r,asmW)\r\n  {\r\n   return Doc.Element(\"tr\",[],[Doc.Element(\"td\",[AssemblyData.click(function()\r\n   {\r\n    AssemblyData.selectedAssembly().Set({\r\n     $:1,\r\n     $0:r\r\n    });\r\n   })],[Doc.TextView(View.Map(function($1)\r\n   {\r\n    return $1.name.get_Id();\r\n   },asmW))])]);\r\n  }\r\n  return Doc.Element(\"table\",[],[(m=AssemblyData.assemblies(),Doc.ConvertSeqBy(m.key,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return f($1,$2);\r\n   };\r\n  },m[\"var\"].get_View()))]);\r\n };\r\n AssemblyData.currentAssembly=function()\r\n {\r\n  var b;\r\n  return Doc.BindView(Global.id,(b=View.get_Do(),View.Bind(function(a)\r\n  {\r\n   return a!=null&&a.$==1?View.Bind(function(a$1)\r\n   {\r\n    return a$1!=null&&a$1.$==1?View.Const(AssemblyData.assemblyDoc(a$1.$0)):View.Const(Doc.get_Empty());\r\n   },AssemblyData.assemblies().TryFindByKeyAsView(a.$0)):View.Const(Doc.get_Empty());\r\n  },AssemblyData.selectedAssembly().get_View())));\r\n };\r\n AssemblyData.styleDoc=function()\r\n {\r\n  return Doc.Element(\"style\",T.Empty,List.ofArray([Doc.TextNode(\"\\r\\n                    .wsfmwk-alternate > * :nth-child(even) {background: #CCF}\\r\\n                    .wsfmwk-alternate > * :nth-child(odd ) {background: #CFC}\\r\\n                    .wsfmwk-alternate td { border: white ; border-style: solid ; border-width: thin}\\r\\n                    .wsfmwk-alternate tr { border: white ; border-style: solid ; border-width: thin}\\r\\n                \")]));\r\n };\r\n AssemblyData.loadAssembly=function(asm)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(AssemblyData[\"loadAssembly'\"](AssemblyData.isLoaded,function(d)\r\n   {\r\n    AssemblyData.loadDef(d);\r\n   },function(a)\r\n   {\r\n    return LoadAsm.fetchAsmData(AssemblyData.Folder(),a);\r\n   },asm),function()\r\n   {\r\n    var asms;\r\n    asms=Arrays.ofSeq((AssemblyData.assemblies())[\"var\"].Get());\r\n    self.IntelliFactory.Runtime.Start();\r\n    AssemblyData.saveAssemblies(asms);\r\n    return Concurrency.Zero();\r\n   });\r\n  });\r\n };\r\n AssemblyData.click=function(f)\r\n {\r\n  return AttrProxy.HandlerImpl(\"click\",function()\r\n  {\r\n   return function()\r\n   {\r\n    return f();\r\n   };\r\n  });\r\n };\r\n AssemblyData.selectedAssembly=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.selectedAssembly;\r\n };\r\n AssemblyData.assemblyDoc=function(asm)\r\n {\r\n  var groups,y;\r\n  function emptyDoc(mo,me)\r\n  {\r\n   return Doc.get_Empty();\r\n  }\r\n  function inputVar(mo,me)\r\n  {\r\n   if(me.retType.name.get_Id()!==\"Var<string>\")\r\n    return Doc.get_Empty();\r\n   else\r\n    try\r\n    {\r\n     return Doc.Input(T.Empty,Global[\"eval\"]((((Runtime$1.Curried3(function($1,$2,$3)\r\n     {\r\n      return $1(Utils.toSafe($2)+\".\"+Utils.toSafe($3)+\"()\");\r\n     }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id())));\r\n    }\r\n    catch(e)\r\n    {\r\n     return Doc.TextNode(e.message);\r\n    }\r\n  }\r\n  function printText(mo,me)\r\n  {\r\n   var $1,x;\r\n   if(me.retType.name.get_Id().indexOf(\"<\")!=-1)\r\n    return Doc.get_Empty();\r\n   else\r\n    {\r\n     try\r\n     {\r\n      $1=(x=Global[\"eval\"]((((Runtime$1.Curried3(function($2,$3,$4)\r\n      {\r\n       return $2(Utils.toSafe($3)+\".\"+Utils.toSafe($4)+\"()\");\r\n      }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id())),(function($2)\r\n      {\r\n       return function($3)\r\n       {\r\n        return $2(Utils.prettyPrint($3));\r\n       };\r\n      }(Global.id))(x));\r\n     }\r\n     catch(e)\r\n     {\r\n      $1=e.message;\r\n     }\r\n     return Doc.TextNode($1);\r\n    }\r\n  }\r\n  function showDoc(mo,me)\r\n  {\r\n   return Doc.Concat([Doc.Button(\"Show\",[],function()\r\n   {\r\n    var a,x;\r\n    a=(x=(((Runtime$1.Curried3(function($1,$2,$3)\r\n    {\r\n     return $1(Utils.toSafe($2)+\".\"+Utils.toSafe($3)+\"()\");\r\n    }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id()),(function($1)\r\n    {\r\n     return function($2)\r\n     {\r\n      return $1(\"WebSharper.UI.Doc.Concat([\"+Utils.toSafe($2)+\"])\");\r\n     };\r\n    }(Global.id))(x));\r\n    WSFrameworkTest.mainDocNameVar().Set(a);\r\n   }),Doc.Button(\"Add\",[],function()\r\n   {\r\n    var code,a,x;\r\n    code=WSFrameworkTest.mainDocNameVar().Get();\r\n    a=(x=(((Runtime$1.Curried3(function($1,$2,$3)\r\n    {\r\n     return $1(Utils.toSafe($2)+\".\"+Utils.toSafe($3)+\"()\");\r\n    }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id()),(((Runtime$1.Curried3(function($1,$2,$3)\r\n    {\r\n     return $1(Utils.toSafe($2)+\", \"+Utils.toSafe($3)+\"])\");\r\n    }))(Global.id))(Slice.string(code,null,{\r\n     $:1,\r\n     $0:code.length-3\r\n    })))(x));\r\n    WSFrameworkTest.mainDocNameVar().Set(a);\r\n   })]);\r\n  }\r\n  function m(oldp,t)\r\n  {\r\n   var p;\r\n   p=t[1];\r\n   return[[t[0],function(me)\r\n   {\r\n    return p(me)&&!oldp(me);\r\n   }],function(me)\r\n   {\r\n    return p(me)||oldp(me);\r\n   }];\r\n  }\r\n  groups=(y=List.ofArray([[function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return inputVar($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return Strings.StartsWith(me.retType.name.get_Id(),\"Var<\")&&me.isField;\r\n  }],[function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return emptyDoc($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return Strings.StartsWith(me.retType.name.get_Id(),\"View<\")&&me.isField;\r\n  }],[function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return printText($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return me.retType.name.get_Id()!==\"Doc\"&&me.isField&&!(me.retType.name.get_Id().indexOf(\"->\")!=-1);\r\n  }],[function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return showDoc($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return me.retType.name.get_Id()===\"Doc\"&&(me.isField||Seq.isEmpty(me.parms));\r\n  }],[function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return emptyDoc($1,$2);\r\n   };\r\n  },function()\r\n  {\r\n   return true;\r\n  }]]),(((Runtime$1.Curried3(Seq.mapFold))(m))(function()\r\n  {\r\n   return false;\r\n  }))(y))[0];\r\n  return Doc.Concat([Doc.Element(\"h3\",[],[Doc.TextNode(asm.name.get_Id())]),Doc.Element(\"div\",[AttrModule.Class(\"wsfmwk-alternate\")],List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.collect(function(m$1)\r\n   {\r\n    var f;\r\n    f=m$1[0];\r\n    return[AssemblyData.methodRows(m$1[1],asm,function($1,$2)\r\n    {\r\n     return(f($1))($2);\r\n    })];\r\n   },groups);\r\n  })))]);\r\n };\r\n AssemblyData[\"loadAssembly'\"]=function(isLoaded,loadDef,fetchAsmData,asm)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return isLoaded(asm)?Concurrency.Zero():Concurrency.Bind(fetchAsmData(asm),function(a)\r\n   {\r\n    return Concurrency.Combine(Concurrency.For(a.dependencies,function(a$1)\r\n    {\r\n     return Concurrency.Bind(AssemblyData[\"loadAssembly'\"](isLoaded,loadDef,fetchAsmData,a$1),function()\r\n     {\r\n      return Concurrency.Return(null);\r\n     });\r\n    }),Concurrency.Delay(function()\r\n    {\r\n     loadDef(a);\r\n     return Concurrency.Zero();\r\n    }));\r\n   });\r\n  });\r\n };\r\n AssemblyData.isLoaded=function(asmRef)\r\n {\r\n  return AssemblyData.assemblies().TryFind(function(ad)\r\n  {\r\n   return Unchecked.Equals(ad.self,asmRef);\r\n  })!=null;\r\n };\r\n AssemblyData.loadDef=function(def)\r\n {\r\n  var asms;\r\n  try\r\n  {\r\n   asms=List.ofSeq((AssemblyData.assemblies())[\"var\"].Get());\r\n   Global[\"eval\"]((((Runtime$1.Curried3(function($1,$2,$3)\r\n   {\r\n    return $1(\"console.log('loading \"+Utils.toSafe($2)+\" ...');\"+Utils.toSafe($3));\r\n   }))(Global.id))(def.name.get_Id()))(def.javaScript.get_Id()));\r\n   AssemblyData.assemblies().Set(new T({\r\n    $:1,\r\n    $0:def,\r\n    $1:asms\r\n   }));\r\n  }\r\n  catch(e)\r\n  {\r\n   ((function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(Utils.prettyPrint($2));\r\n    };\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }))(e));\r\n  }\r\n };\r\n AssemblyData.Folder=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.Folder;\r\n };\r\n AssemblyData.saveAssemblies=function(asms)\r\n {\r\n  AssemblyData.assemblies().Set(asms);\r\n };\r\n AssemblyData.methodRows=function(p,asm,f)\r\n {\r\n  return Doc.Element(\"table\",[AttrProxy.Create(\"style\",\"font-family: monospace\")],List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.collect(function(mo)\r\n   {\r\n    var methods;\r\n    methods=Seq.filter(p,mo.methods);\r\n    return Seq.length(methods)>0?[Doc.Element(\"tr\",[],List.ofSeq(Seq.delay(function()\r\n    {\r\n     return[Doc.Element(\"td\",[],List.ofSeq(Seq.delay(function()\r\n     {\r\n      return Seq.append([Doc.Element(\"b\",[],[Doc.TextNode(mo.name.get_Id2())])],Seq.delay(function()\r\n      {\r\n       return Seq.collect(function(me)\r\n       {\r\n        var x;\r\n        return[Doc.Element(\"tr\",[AssemblyData.click(function()\r\n        {\r\n         AssemblyData.selectedMethod().Set({\r\n          $:1,\r\n          $0:[mo.name,me.name]\r\n         });\r\n        })],[Doc.Element(\"td\",[],[Doc.TextNode(me.name.get_Id())]),Doc.Element(\"td\",[],[Doc.TextNode(me.isField?\"\":(x=Strings.concat(\", \",Seq.map(function(t)\r\n        {\r\n         return t.name.get_Id();\r\n        },me.parms)),(function($1)\r\n        {\r\n         return function($2)\r\n         {\r\n          return $1(\"(\"+Utils.toSafe($2)+\")\");\r\n         };\r\n        }(Global.id))(x)))]),Doc.Element(\"td\",[AssemblyData.nobr()],[Doc.TextNode(me.isField?\":\":\" -> \")]),Doc.Element(\"td\",[],[Doc.TextNode(me.retType.name.get_Id())]),Doc.Element(\"td\",[],[f(mo,me)])])];\r\n       },methods);\r\n      }));\r\n     })))];\r\n    })))]:[];\r\n   },asm.modules);\r\n  })));\r\n };\r\n AssemblyData.nobr=function()\r\n {\r\n  return AttrProxy.Create(\"style\",\"white-space: nowrap\");\r\n };\r\n AssemblyData.selectedMethod=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.selectedMethod;\r\n };\r\n UI$1.mainDoc=function()\r\n {\r\n  var c,c$1;\r\n  return Doc.Element(\"div\",[],[Doc.Element(\"h1\",[],[Doc.TextNode(\"HELLO WASM!\")]),Doc.Element(\"h2\",[],[Doc.TextView(View.Map(function($1)\r\n  {\r\n   return(function($2)\r\n   {\r\n    return function($3)\r\n    {\r\n     return $2(testing_GeneratedPrintf.p($3));\r\n    };\r\n   }(Global.id))($1);\r\n  },WasmLoader.wasmStatusV().get_View()))]),Doc.Element(\"span\",[],[Doc.Button(\"Load as Worker\",[],function()\r\n  {\r\n   WasmLoad.loadWasmInWorker(UI$1.optsV().Get());\r\n  }),Doc.Button(\"Load in Main thread\",[],function()\r\n  {\r\n   WasmLoad.loadInThisThread(UI$1.optsV().Get());\r\n  }),Doc.Button(\"Terminate Worker\",[],function()\r\n  {\r\n   WWorker.terminate();\r\n  })]),Doc.Element(\"div\",[],[Doc.InputArea([],UI$1.codeV()),Doc.InputArea([],UI$1.optsV())]),Doc.Element(\"span\",[],[Doc.Button(\"Check\",[],function()\r\n  {\r\n   UI$1.callWasmA(function(t)\r\n   {\r\n    return UI$1.parseAndCheckProject(t[0],t[1],t[2]);\r\n   },UI$1.getParms());\r\n  }),Doc.Button(\"Translate\",[],function()\r\n  {\r\n   UI$1.clean();\r\n   WasmLoader.printfn(function($1)\r\n   {\r\n    return $1(\"Initiating translation:\");\r\n   });\r\n   UI$1.callWasmA(function(t)\r\n   {\r\n    return UI$1.translateToJs(t[0],t[1],t[2]);\r\n   },UI$1.getParms());\r\n  }),Doc.Button(\"Dir\",[],function()\r\n  {\r\n   UI$1.callWasmA(function(d)\r\n   {\r\n    return(new AjaxRemotingProvider.New()).Async(\"WsTranslator:FsRoot.WsTranslator+Rpc.dirRpc:-1181784350\",[d]);\r\n   },\"/\");\r\n  }),Doc.Button(\"Clean\",[],function()\r\n  {\r\n   UI$1.clean();\r\n  })]),UI$1.showMessages(\"Fsc Messages\",function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(Utils.prettyPrint($2));\r\n   };\r\n  }(Global.id),UI$1.fsErrsV().get_View()),UI$1.showMessages(\"Ws  Errors\",(c=function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"(\"+testing_GeneratedPrintf.p$1($2[0])+\", \"+testing_GeneratedPrintf.p$2($2[1])+\")\");\r\n   };\r\n  }(Global.id),function(t)\r\n  {\r\n   return c([t[0],t[1]]);\r\n  }),UI$1.wsErrsV().get_View()),UI$1.showMessages(\"Ws  Warnings\",(c$1=function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"(\"+testing_GeneratedPrintf.p$1($2[0])+\", \"+testing_GeneratedPrintf.p$3($2[1])+\")\");\r\n   };\r\n  }(Global.id),function(t)\r\n  {\r\n   return c$1([t[0],t[1]]);\r\n  }),UI$1.wsWrnsV().get_View()),Doc.Element(\"div\",[AttrProxy.Create(\"style\",\"font-family: monospace; white-space:pre\")],[Doc.TextView(UI$1.detailsV().get_View())])]);\r\n };\r\n UI$1.optsV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.optsV;\r\n };\r\n UI$1.codeV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.codeV;\r\n };\r\n UI$1.callWasmA=function(f,p)\r\n {\r\n  var b;\r\n  Concurrency.Start((b=null,Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Combine(WasmLoader.wasmStatusV().Get().$===0?(WasmLoad.loadWasmInWorker(UI$1.optsV().Get()),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.Bind(Concurrency.Sleep(50),function()\r\n    {\r\n     return Concurrency.Combine(Concurrency.While(function()\r\n     {\r\n      var m;\r\n      m=WasmLoader.wasmStatusV().Get();\r\n      return m.$==2?false:m.$!=4;\r\n     },Concurrency.Delay(function()\r\n     {\r\n      WasmLoader.printfn(function($1)\r\n      {\r\n       return $1(\"Waiting for WASM to load...\");\r\n      });\r\n      return Concurrency.Bind(Concurrency.Sleep(2000),function()\r\n      {\r\n       return Concurrency.Return(null);\r\n      });\r\n     })),Concurrency.Delay(function()\r\n     {\r\n      return Concurrency.Bind(f(p),function()\r\n      {\r\n       return Concurrency.Return(null);\r\n      });\r\n     }));\r\n    });\r\n   }));\r\n  })),null);\r\n };\r\n UI$1.parseAndCheckProject=function(projectName,opts,code)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async(\"WsTranslator:FsRoot.WsTranslator+Rpc.parseAndCheckProjectRpc:-1474163089\",[projectName,opts,code]),function(a)\r\n   {\r\n    var a$1;\r\n    UI$1.fsErrsV().Set(Arrays.ofSeq(a[0]));\r\n    UI$1.wsErrsV().Set([]);\r\n    UI$1.wsWrnsV().Set([]);\r\n    a$1=(function($1)\r\n    {\r\n     return function($2)\r\n     {\r\n      return $1(\"(\"+Utils.prettyPrint($2[0])+\", \"+Utils.printArray(Utils.prettyPrint,$2[1])+\")\");\r\n     };\r\n    }(Global.id))([a[2],a[1]]);\r\n    UI$1.detailsV().Set(a$1);\r\n    return Concurrency.Zero();\r\n   });\r\n  });\r\n };\r\n UI$1.getParms=function()\r\n {\r\n  return[\"WasmTest\",Arrays.filter(function(s)\r\n  {\r\n   return Strings.Trim(s)!==\"\";\r\n  },Strings.SplitChars(\"fsc.exe\\n\"+UI$1.optsV().Get(),[\"\\n\"],0)),UI$1.codeV().Get()];\r\n };\r\n UI$1.clean=function()\r\n {\r\n  UI$1.detailsV().Set(\"\");\r\n };\r\n UI$1.translateToJs=function(projectName,opts,code)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async(\"WsTranslator:FsRoot.WsTranslator+Rpc.translateFsToJsRpc:957452724\",[projectName,opts,code]),function(a)\r\n   {\r\n    var wsO;\r\n    wsO=a[1];\r\n    UI$1.fsErrsV().Set(a[0]);\r\n    return wsO==null?(UI$1.clean(),UI$1.wsErrsV().Set([]),UI$1.wsWrnsV().Set([]),Concurrency.Zero()):(UI$1.detailsV().Set(wsO.$0[0]),UI$1.wsErrsV().Set(Arrays.ofSeq(wsO.$0[1])),UI$1.wsWrnsV().Set(Arrays.ofSeq(wsO.$0[2])),Concurrency.Zero());\r\n   });\r\n  });\r\n };\r\n UI$1.showMessages=function(name,f,msgsW)\r\n {\r\n  return Doc.BindView(function(msgs)\r\n  {\r\n   return Arrays.length(msgs)===0?Doc.get_Empty():Doc.Element(\"div\",[],[Doc.TextNode(name),Doc.Element(\"ol\",[],[Doc.Concat(Seq.map(function(x)\r\n   {\r\n    return Doc.Element(\"li\",[],[Doc.TextNode(f(x))]);\r\n   },msgs))])]);\r\n  },msgsW);\r\n };\r\n UI$1.fsErrsV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.fsErrsV;\r\n };\r\n UI$1.wsErrsV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.wsErrsV;\r\n };\r\n UI$1.wsWrnsV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.wsWrnsV;\r\n };\r\n UI$1.detailsV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.detailsV;\r\n };\r\n JS.GetFields=function(o)\r\n {\r\n  var r,k;\r\n  r=[];\r\n  for(var k$1 in o)r.push([k$1,o[k$1]]);\r\n  return r;\r\n };\r\n JS.GetFieldValues=function(o)\r\n {\r\n  var r,k;\r\n  r=[];\r\n  for(var k$1 in o)r.push(o[k$1]);\r\n  return r;\r\n };\r\n SC$1.$cctor=function()\r\n {\r\n  var f,g;\r\n  SC$1.$cctor=Global.ignore;\r\n  function g$1(s)\r\n  {\r\n   return Strings.concat(\"\\n\",s);\r\n  }\r\n  function f$1(s)\r\n  {\r\n   return String.splitByChar(\"\\n\",s);\r\n  }\r\n  function g$2(s)\r\n  {\r\n   var a,b;\r\n   return Slice.array(s,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:(a=0,(b=Arrays.length(s)-2,Unchecked.Compare(a,b)===1?a:b))\r\n   });\r\n  }\r\n  function g$3(s)\r\n  {\r\n   return Strings.concat(\"\\n\",s);\r\n  }\r\n  function f$2(s)\r\n  {\r\n   return s+\"T00:00:00\";\r\n  }\r\n  SC$1.unindentStr=function(x)\r\n  {\r\n   return g$1(String.unindent(x));\r\n  };\r\n  SC$1.skipLastLine=(f=function(x)\r\n  {\r\n   return g$2(f$1(x));\r\n  },function(x)\r\n  {\r\n   return g$3(f(x));\r\n  });\r\n  SC$1.parseDateO2=(g=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o,m;\r\n   o=0;\r\n   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];\r\n  }),function(x)\r\n  {\r\n   return g(f$2(x));\r\n  });\r\n  SC$1.parseDateO=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o,m;\r\n   o=0;\r\n   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];\r\n  });\r\n  SC$1.parseIntO=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o;\r\n   o=0;\r\n   return[Numeric.TryParseInt32(a,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o];\r\n  });\r\n  SC$1.parseInt64O=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o;\r\n   o=0;\r\n   return[Numeric.TryParseInt64(a,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o];\r\n  });\r\n  SC$1.parseSingleO=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o,$1;\r\n   o=0;\r\n   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];\r\n  });\r\n  SC$1.parseDoubleO=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o,$1;\r\n   o=0;\r\n   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];\r\n  });\r\n  SC$1.parseGuidO=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o;\r\n   o=null;\r\n   return[Guid.TryParse(a,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o];\r\n  });\r\n  SC$1[\"|Date|_|\"]=ParseO.parseDateO();\r\n  SC$1[\"|Int|_|\"]=ParseO.parseIntO();\r\n  SC$1[\"|Int64|_|\"]=ParseO.parseInt64O();\r\n  SC$1[\"|Single|_|\"]=ParseO.parseSingleO();\r\n  SC$1[\"|Double|_|\"]=ParseO.parseDoubleO();\r\n  SC$1[\"|Guid|_|\"]=ParseO.parseGuidO();\r\n  SC$1.wasmStatusV=Var$1.Create$1(WasmStatus.WasmNotLoaded);\r\n  SC$1.originalProvider=Remoting$1.AjaxProvider();\r\n  SC$1.queues=new Dictionary.New$5();\r\n  SC$1.messaging=IMessagingO.New(function(h)\r\n  {\r\n   return function(d)\r\n   {\r\n    return self.WASM_WsTranslator_FsRoot_WsTranslator_runRpc(h,d);\r\n   };\r\n  },function(t)\r\n  {\r\n   Remoting.returnValue0(t[0],t[1]);\r\n  },function(t)\r\n  {\r\n   Remoting.returnExn0(t[0],t[1]);\r\n  },function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"EARLY PRINTING!: \"+Utils.toSafe($2));\r\n   };\r\n  }(function(s)\r\n  {\r\n   console.log(s);\r\n  }));\r\n  SC$1.workerO=null;\r\n  SC$1.rootPath=\"/WASM/publish/\";\r\n  SC$1.detailsV=Var$1.Create$1(\"\");\r\n  SC$1.fsErrsV=Var$1.Create$1([]);\r\n  SC$1.wsErrsV=Var$1.Create$1([]);\r\n  SC$1.wsWrnsV=Var$1.Create$1([]);\r\n  SC$1.codeV=Var$1.Create$1(\"\\r\\n    open WebSharper\\r\\n    open WebSharper.UI\\r\\n    open WebSharper.UI.Html\\r\\n    \\r\\n    let name = Var.Create \\\"World\\\"\\r\\n    \\r\\n    [< Inline \\\"'Hello inline '\\\" >]\\r\\n    let bDoc() = \\\"Hello\\\"\\r\\n    \\r\\n    let cDoc() = text name.V\\r\\n    \\r\\n    let aDoc() = \\r\\n        div [] [\\r\\n            text <| bDoc()\\r\\n            cDoc()\\r\\n        ]\\r\\n    \\r\\n            \");\r\n  SC$1.optsV=Var$1.Create$1(Strings.concat(\"\\n\",Seq.map(Strings.Trim,Strings.SplitChars(\"\\r\\n                                    /tmp/source.fsx\\r\\n                                    -o:source.exe\\r\\n                                    --simpleresolution\\r\\n                                    --nowarn:3186\\r\\n                                    --optimize-\\r\\n                                    --noframework\\r\\n                                    --fullpaths\\r\\n                                    --warn:3\\r\\n                                    --target:exe\\r\\n                                    -r:/dlls/WebSharper.Core.dll\\r\\n                                    -r:/dlls/WebSharper.UI.dll\\r\\n                                    -r:/dlls/WebSharper.Sitelets.dll\\r\\n                                    -r:/managed/FSharp.Core.dll\\r\\n                                    -r:/managed/mscorlib.dll\\r\\n                                    -r:/managed/netstandard.dll\\r\\n                                    -r:/managed/System.dll\\r\\n                                    -r:/managed/System.Core.dll\\r\\n                                    -r:/managed/System.IO.dll\\r\\n                                    -r:/managed/System.Runtime.dll\\r\\n                                    -r:/managed/System.Net.Http.dll\\r\\n                                    -r:/managed/System.Threading.dll\\r\\n                                    -r:/managed/System.Numerics.dll\\r\\n                                \",[\"\\n\"],0))));\r\n  !(!self.document)?Remoting.set_messaging(IMessagingO.New(Remoting.messaging().runRpc,Remoting.messaging().returnValue,Remoting.messaging().returnExn,function(txt)\r\n  {\r\n   var pre;\r\n   console.log(txt);\r\n   pre=UI$1.detailsV().Get();\r\n   UI$1.detailsV().Set(pre+(pre===\"\"?\"\":\"\\n\")+txt);\r\n  })):void 0;\r\n  SC$1.testVar=Var$1.Create$1(\"Hello WSFrameWork\");\r\n  SC$1.mainDocNameVar=Var$1.Create$1(\"FsRoot.TestingJS.WSFrameworkTest.mainDoc()\");\r\n  SC$1.assemblies=ListModel.Create(function(ad)\r\n  {\r\n   return ad.name;\r\n  },T.Empty);\r\n  SC$1.Folder=\"/EPFileX/Assemblies/\";\r\n  SC$1.thisModuleV=Var$1.Create$1(\"Covid.asm\");\r\n  SC$1.selectedAssembly=Var$1.Create$1(null);\r\n  SC$1.selectedMethod=Var$1.Create$1(null);\r\n  SC$1.mainDocNameVar$1=WSFrameworkTest.mainDocNameVar();\r\n  SC$1.mainDocVar=Var$1.Create$1(Doc.Element(\"h1\",[],[Doc.TextNode(\"mainDocVar not initialized\")]));\r\n  View.Sink(function(nm)\r\n  {\r\n   var docObj;\r\n   try\r\n   {\r\n    docObj=Global[\"eval\"](nm);\r\n    docObj instanceof Doc?WSFramework.mainDocVar().Set(docObj):typeof docObj==\"string\"?WSFramework.mainDocVar().Set(Doc.TextNode(docObj)):docObj instanceof Var?WSFramework.mainDocVar().Set(Doc.TextView(docObj.get_View())):docObj instanceof View?WSFramework.mainDocVar().Set(Doc.TextView(docObj)):console.log(\"mainDocNameVar type mismatch: \",docObj);\r\n   }\r\n   catch(e)\r\n   {\r\n    ((function($1)\r\n    {\r\n     return function($2)\r\n     {\r\n      return $1(Utils.prettyPrint($2));\r\n     };\r\n    }(function(s)\r\n    {\r\n     console.log(s);\r\n    }))(e));\r\n   }\r\n  },WSFramework.mainDocNameVar().get_View());\r\n  SC$1.mainSubDoc=Doc.BindView(Global.id,WSFramework.mainDocVar().get_View());\r\n };\r\n Snap.WhenRun=function(snap,avail,obs)\r\n {\r\n  var m;\r\n  m=snap.s;\r\n  m==null?obs():m!=null&&m.$==2?(m.$1.push(obs),avail(m.$0)):m!=null&&m.$==3?(m.$0.push(avail),m.$1.push(obs)):avail(m.$0);\r\n };\r\n Snap.Map=function(fn,sn)\r\n {\r\n  var m,res;\r\n  m=sn.s;\r\n  return m!=null&&m.$==0?Snap.New({\r\n   $:0,\r\n   $0:fn(m.$0)\r\n  }):(res=Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  }),(Snap.When(sn,function(a)\r\n  {\r\n   Snap.MarkDone(res,sn,fn(a));\r\n  },res),res));\r\n };\r\n Snap.WhenObsoleteRun=function(snap,obs)\r\n {\r\n  var m;\r\n  m=snap.s;\r\n  m==null?obs():m!=null&&m.$==2?m.$1.push(obs):m!=null&&m.$==3?m.$1.push(obs):void 0;\r\n };\r\n Snap.When=function(snap,avail,obs)\r\n {\r\n  var m;\r\n  m=snap.s;\r\n  m==null?Snap.Obsolete(obs):m!=null&&m.$==2?(Snap.EnqueueSafe(m.$1,obs),avail(m.$0)):m!=null&&m.$==3?(m.$0.push(avail),Snap.EnqueueSafe(m.$1,obs)):avail(m.$0);\r\n };\r\n Snap.MarkDone=function(res,sn,v)\r\n {\r\n  var $1;\r\n  if($1=sn.s,$1!=null&&$1.$==0)\r\n   Snap.MarkForever(res,v);\r\n  else\r\n   Snap.MarkReady(res,v);\r\n };\r\n Snap.Map2Unit=function(sn1,sn2)\r\n {\r\n  var $1,$2,res;\r\n  function cont()\r\n  {\r\n   var m,$3,$4;\r\n   if(!(m=res.s,m!=null&&m.$==0||m!=null&&m.$==2))\r\n    {\r\n     $3=Snap.ValueAndForever(sn1);\r\n     $4=Snap.ValueAndForever(sn2);\r\n     $3!=null&&$3.$==1?$4!=null&&$4.$==1?$3.$0[1]&&$4.$0[1]?Snap.MarkForever(res,null):Snap.MarkReady(res,null):void 0:void 0;\r\n    }\r\n  }\r\n  $1=sn1.s;\r\n  $2=sn2.s;\r\n  return $1!=null&&$1.$==0?$2!=null&&$2.$==0?Snap.New({\r\n   $:0,\r\n   $0:null\r\n  }):sn2:$2!=null&&$2.$==0?sn1:(res=Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  }),(Snap.When(sn1,cont,res),Snap.When(sn2,cont,res),res));\r\n };\r\n Snap.EnqueueSafe=function(q,x)\r\n {\r\n  var qcopy,i,$1,o;\r\n  q.push(x);\r\n  if(q.length%20===0)\r\n   {\r\n    qcopy=q.slice(0);\r\n    Queue.Clear(q);\r\n    for(i=0,$1=Arrays.length(qcopy)-1;i<=$1;i++){\r\n     o=Arrays.get(qcopy,i);\r\n     typeof o==\"object\"?function(sn)\r\n     {\r\n      if(sn.s)\r\n       q.push(sn);\r\n     }(o):function(f)\r\n     {\r\n      q.push(f);\r\n     }(o);\r\n    }\r\n   }\r\n  else\r\n   void 0;\r\n };\r\n Snap.MarkForever=function(sn,v)\r\n {\r\n  var m,qa,i,$1;\r\n  m=sn.s;\r\n  if(m!=null&&m.$==3)\r\n   {\r\n    sn.s={\r\n     $:0,\r\n     $0:v\r\n    };\r\n    qa=m.$0;\r\n    for(i=0,$1=Arrays.length(qa)-1;i<=$1;i++)(Arrays.get(qa,i))(v);\r\n   }\r\n  else\r\n   void 0;\r\n };\r\n Snap.MarkReady=function(sn,v)\r\n {\r\n  var m,qa,i,$1;\r\n  m=sn.s;\r\n  if(m!=null&&m.$==3)\r\n   {\r\n    sn.s={\r\n     $:2,\r\n     $0:v,\r\n     $1:m.$1\r\n    };\r\n    qa=m.$0;\r\n    for(i=0,$1=Arrays.length(qa)-1;i<=$1;i++)(Arrays.get(qa,i))(v);\r\n   }\r\n  else\r\n   void 0;\r\n };\r\n Snap.ValueAndForever=function(snap)\r\n {\r\n  var m;\r\n  m=snap.s;\r\n  return m!=null&&m.$==0?{\r\n   $:1,\r\n   $0:[m.$0,true]\r\n  }:m!=null&&m.$==2?{\r\n   $:1,\r\n   $0:[m.$0,false]\r\n  }:null;\r\n };\r\n Snap.Join=function(snap)\r\n {\r\n  var res;\r\n  res=Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  });\r\n  Snap.When(snap,function(x)\r\n  {\r\n   var y;\r\n   y=x();\r\n   Snap.When(y,function(v)\r\n   {\r\n    var $1,$2;\r\n    if(($1=y.s,$1!=null&&$1.$==0)&&($2=snap.s,$2!=null&&$2.$==0))\r\n     Snap.MarkForever(res,v);\r\n    else\r\n     Snap.MarkReady(res,v);\r\n   },res);\r\n  },res);\r\n  return res;\r\n };\r\n Snap.Copy=function(sn)\r\n {\r\n  var m,res,res$1;\r\n  m=sn.s;\r\n  return m==null?sn:m!=null&&m.$==2?(res=Snap.New({\r\n   $:2,\r\n   $0:m.$0,\r\n   $1:[]\r\n  }),(Snap.WhenObsolete(sn,res),res)):m!=null&&m.$==3?(res$1=Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  }),(Snap.When(sn,function(v)\r\n  {\r\n   Snap.MarkDone(res$1,sn,v);\r\n  },res$1),res$1)):sn;\r\n };\r\n Snap.WhenObsolete=function(snap,obs)\r\n {\r\n  var m;\r\n  m=snap.s;\r\n  m==null?Snap.Obsolete(obs):m!=null&&m.$==2?Snap.EnqueueSafe(m.$1,obs):m!=null&&m.$==3?Snap.EnqueueSafe(m.$1,obs):void 0;\r\n };\r\n Arrays.length=function(arr)\r\n {\r\n  return arr.dims===2?arr.length*arr.length:arr.length;\r\n };\r\n Arrays.get=function(arr,n)\r\n {\r\n  Arrays.checkBounds(arr,n);\r\n  return arr[n];\r\n };\r\n Arrays.set=function(arr,n,x)\r\n {\r\n  Arrays.checkBounds(arr,n);\r\n  arr[n]=x;\r\n };\r\n Arrays.checkBounds=function(arr,n)\r\n {\r\n  if(n<0||n>=arr.length)\r\n   Operators.FailWith(\"Index was outside the bounds of the array.\");\r\n };\r\n Utils.toSafe=function(s)\r\n {\r\n  return s==null?\"\":s;\r\n };\r\n Utils.prettyPrint=function(o)\r\n {\r\n  var t,s;\r\n  function m(k,v)\r\n  {\r\n   return k+\" = \"+Utils.prettyPrint(v);\r\n  }\r\n  return o===null?\"null\":(t=typeof o,t==\"string\"?\"\\\"\"+o+\"\\\"\":t==\"object\"?o instanceof Global.Array?\"[|\"+Strings.concat(\"; \",Arrays.map(Utils.prettyPrint,o))+\"|]\":(s=Global.String(o),s===\"[object Object]\"?\"{\"+Strings.concat(\"; \",Arrays.map(function($1)\r\n  {\r\n   return m($1[0],$1[1]);\r\n  },JS.GetFields(o)))+\"}\":s):Global.String(o));\r\n };\r\n Utils.printArray=function(p,o)\r\n {\r\n  return o===null?\"null\":\"[|\"+Strings.concat(\"; \",Arrays.map(p,o))+\"|]\";\r\n };\r\n Utils.printList=function(p,o)\r\n {\r\n  return\"[\"+Strings.concat(\"; \",Seq.map(p,o))+\"]\";\r\n };\r\n WasmStatus.WasmWorkerLoading={\r\n  $:3\r\n };\r\n WasmStatus.WasmLoading={\r\n  $:1\r\n };\r\n WasmStatus.WasmWorkerLoaded={\r\n  $:4\r\n };\r\n WasmStatus.WasmLoaded={\r\n  $:2\r\n };\r\n WasmStatus.WasmNotLoaded={\r\n  $:0\r\n };\r\n Pervasives.NewFromSeq=function(fields)\r\n {\r\n  var r,e,f;\r\n  r={};\r\n  e=Enumerator.Get(fields);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    {\r\n     f=e.Current();\r\n     r[f[0]]=f[1];\r\n    }\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n  return r;\r\n };\r\n Pojo.newPojo=function(props)\r\n {\r\n  var pojo,f;\r\n  function f$1(a,a$1)\r\n  {\r\n   return function(p)\r\n   {\r\n    return Pojo.addProp(a,a$1,p);\r\n   };\r\n  }\r\n  function g(v)\r\n  {\r\n  }\r\n  pojo={};\r\n  Seq.iter((f=function(b)\r\n  {\r\n   return(function($1)\r\n   {\r\n    return f$1($1[0],$1[1]);\r\n   }(b))(pojo);\r\n  },function(x)\r\n  {\r\n   return g(f(x));\r\n  }),props);\r\n  return pojo;\r\n };\r\n Pojo.addProp=function(p,p$1,pojo)\r\n {\r\n  pojo[p]=p$1;\r\n  return pojo;\r\n };\r\n GlobalModule=WasmLoad.GlobalModule=Runtime$1.Class({},Obj,GlobalModule);\r\n Seq.length=function(s)\r\n {\r\n  var i,e;\r\n  i=0;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    i=i+1;\r\n   return i;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.map=function(f,s)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var en;\r\n    en=Enumerator.Get(s);\r\n    return new T$1.New(null,null,function(e)\r\n    {\r\n     return en.MoveNext()&&(e.c=f(en.Current()),true);\r\n    },function()\r\n    {\r\n     en.Dispose();\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.iter=function(p,s)\r\n {\r\n  var e;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    p(e.Current());\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.delay=function(f)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    return Enumerator.Get(f());\r\n   }\r\n  };\r\n };\r\n Seq.append=function(s1,s2)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var e1,first;\r\n    e1=Enumerator.Get(s1);\r\n    first=[true];\r\n    return new T$1.New(e1,null,function(x)\r\n    {\r\n     var x$1;\r\n     return x.s.MoveNext()?(x.c=x.s.Current(),true):(x$1=x.s,!Unchecked.Equals(x$1,null)?x$1.Dispose():void 0,x.s=null,first[0]&&(first[0]=false,x.s=Enumerator.Get(s2),x.s.MoveNext()?(x.c=x.s.Current(),true):(x.s.Dispose(),x.s=null,false)));\r\n    },function(x)\r\n    {\r\n     var x$1;\r\n     x$1=x.s;\r\n     !Unchecked.Equals(x$1,null)?x$1.Dispose():void 0;\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.distinct=function(s)\r\n {\r\n  return Seq.distinctBy(Global.id,s);\r\n };\r\n Seq.cache=function(s)\r\n {\r\n  var cache,o;\r\n  cache=[];\r\n  o=[Enumerator.Get(s)];\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    return new T$1.New(0,null,function(e)\r\n    {\r\n     var en;\r\n     return e.s<cache.length?(e.c=cache[e.s],e.s=e.s+1,true):(en=o[0],Unchecked.Equals(en,null)?false:en.MoveNext()?(e.s=e.s+1,e.c=en.Current(),cache.push(e.c),true):(en.Dispose(),o[0]=null,false));\r\n    },void 0);\r\n   }\r\n  };\r\n };\r\n Seq.tryFind=function(ok,s)\r\n {\r\n  var e,r,x;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   r=null;\r\n   while(r==null&&e.MoveNext())\r\n    {\r\n     x=e.Current();\r\n     ok(x)?r={\r\n      $:1,\r\n      $0:x\r\n     }:void 0;\r\n    }\r\n   return r;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.tryFindIndex=function(ok,s)\r\n {\r\n  var e,loop,i;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   loop=true;\r\n   i=0;\r\n   while(loop&&e.MoveNext())\r\n    if(ok(e.Current()))\r\n     loop=false;\r\n    else\r\n     i=i+1;\r\n   return loop?null:{\r\n    $:1,\r\n    $0:i\r\n   };\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.filter=function(f,s)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var o;\r\n    o=Enumerator.Get(s);\r\n    return new T$1.New(null,null,function(e)\r\n    {\r\n     var loop,c,res;\r\n     loop=o.MoveNext();\r\n     c=o.Current();\r\n     res=false;\r\n     while(loop)\r\n      if(f(c))\r\n       {\r\n        e.c=c;\r\n        res=true;\r\n        loop=false;\r\n       }\r\n      else\r\n       if(o.MoveNext())\r\n        c=o.Current();\r\n       else\r\n        loop=false;\r\n     return res;\r\n    },function()\r\n    {\r\n     o.Dispose();\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.distinctBy=function(f,s)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var o,seen;\r\n    o=Enumerator.Get(s);\r\n    seen=new HashSet.New$3();\r\n    return new T$1.New(null,null,function(e)\r\n    {\r\n     var cur,has;\r\n     if(o.MoveNext())\r\n      {\r\n       cur=o.Current();\r\n       has=seen.Add(f(cur));\r\n       while(!has&&o.MoveNext())\r\n        {\r\n         cur=o.Current();\r\n         has=seen.Add(f(cur));\r\n        }\r\n       return has&&(e.c=cur,true);\r\n      }\r\n     else\r\n      return false;\r\n    },function()\r\n    {\r\n     o.Dispose();\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.collect=function(f,s)\r\n {\r\n  return Seq.concat(Seq.map(f,s));\r\n };\r\n Seq.mapFold=function(f,zero,s)\r\n {\r\n  return Arrays.mapFold(f,zero,Arrays.ofSeq(s));\r\n };\r\n Seq.isEmpty=function(s)\r\n {\r\n  var e;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   return!e.MoveNext();\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.head=function(s)\r\n {\r\n  var e;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   return e.MoveNext()?e.Current():Seq.insufficient();\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.concat=function(ss)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var outerE;\r\n    outerE=Enumerator.Get(ss);\r\n    return new T$1.New(null,null,function(st)\r\n    {\r\n     var m;\r\n     while(true)\r\n      {\r\n       m=st.s;\r\n       if(Unchecked.Equals(m,null))\r\n       {\r\n        if(outerE.MoveNext())\r\n         {\r\n          st.s=Enumerator.Get(outerE.Current());\r\n          st=st;\r\n         }\r\n        else\r\n         {\r\n          outerE.Dispose();\r\n          return false;\r\n         }\r\n       }\r\n       else\r\n        if(m.MoveNext())\r\n         {\r\n          st.c=m.Current();\r\n          return true;\r\n         }\r\n        else\r\n         {\r\n          st.Dispose();\r\n          st.s=null;\r\n          st=st;\r\n         }\r\n      }\r\n    },function(st)\r\n    {\r\n     var x;\r\n     x=st.s;\r\n     !Unchecked.Equals(x,null)?x.Dispose():void 0;\r\n     !Unchecked.Equals(outerE,null)?outerE.Dispose():void 0;\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.fold=function(f,x,s)\r\n {\r\n  var r,e;\r\n  r=x;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    r=f(r,e.Current());\r\n   return r;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.max=function(s)\r\n {\r\n  var e,m,x;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   if(!e.MoveNext())\r\n    Seq.seqEmpty();\r\n   m=e.Current();\r\n   while(e.MoveNext())\r\n    {\r\n     x=e.Current();\r\n     Unchecked.Compare(x,m)===1?m=x:void 0;\r\n    }\r\n   return m;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.seqEmpty=function()\r\n {\r\n  return Operators.FailWith(\"The input sequence was empty.\");\r\n };\r\n ListModel=UI.ListModel=Runtime$1.Class({\r\n  TryFindByKeyAsView:function(key)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return function()\r\n   {\r\n    var m,o,sn;\r\n    m=(o=null,[$this.it.TryGetValue(key,{\r\n     get:function()\r\n     {\r\n      return o;\r\n     },\r\n     set:function(v)\r\n     {\r\n      o=v;\r\n     }\r\n    }),o]);\r\n    return m[0]?m[1]:(sn=Snap.New({\r\n     $:2,\r\n     $0:$this.TryFindByKey(key),\r\n     $1:[]\r\n    }),($this.it.Add(key,sn),sn));\r\n   };\r\n  },\r\n  TryFindByKey:function(key)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return Arrays.tryFind(function(it)\r\n   {\r\n    return Unchecked.Equals($this.key(it),key);\r\n   },this[\"var\"].Get());\r\n  },\r\n  TryFind:function(pred)\r\n  {\r\n   return Arrays.tryFind(pred,this[\"var\"].Get());\r\n  },\r\n  Set:function(lst)\r\n  {\r\n   this[\"var\"].Set(this.storage.SSet(lst));\r\n   this.ObsoleteAll();\r\n  },\r\n  ObsoleteAll:function()\r\n  {\r\n   Seq.iter(function(ksn)\r\n   {\r\n    Snap.Obsolete(ksn.V);\r\n   },this.it);\r\n   this.it.Clear();\r\n  },\r\n  GetEnumerator:function()\r\n  {\r\n   return Enumerator.Get(this[\"var\"].Get());\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return Enumerator.Get0(this[\"var\"].Get());\r\n  }\r\n },Obj,ListModel);\r\n ListModel.New=Runtime$1.Ctor(function(key,storage)\r\n {\r\n  ListModel.New$3.call(this,key,Var$1.Create$1(Arrays.ofSeq(Seq.distinctBy(key,storage.SInit()))),storage);\r\n },ListModel);\r\n ListModel.New$3=Runtime$1.Ctor(function(key,_var,storage)\r\n {\r\n  Obj.New.call(this);\r\n  this.key=key;\r\n  this[\"var\"]=_var;\r\n  this.storage=storage;\r\n  this.v=View.Map(function(x)\r\n  {\r\n   return x.slice();\r\n  },this[\"var\"].get_View());\r\n  this.it=new Dictionary.New$5();\r\n },ListModel);\r\n attr=HtmlModule.attr=Runtime$1.Class({},Obj,attr);\r\n Doc=UI.Doc=Runtime$1.Class({},Obj,Doc);\r\n Doc.Concat=function(xs)\r\n {\r\n  var x;\r\n  x=Array.ofSeqNonCopying(xs);\r\n  return Array.TreeReduce(Doc.get_Empty(),Doc.Append,x);\r\n };\r\n Doc.Run=function(parent,doc)\r\n {\r\n  Docs.LinkElement(parent,doc.docNode);\r\n  Doc.RunInPlace(false,parent,doc);\r\n };\r\n Doc.Element=function(name,attr$1,children)\r\n {\r\n  var a,a$1;\r\n  a=AttrProxy.Concat(attr$1);\r\n  a$1=Doc.Concat(children);\r\n  return Elt.New(DomUtility.CreateElement(name),a,a$1);\r\n };\r\n Doc.Input=function(attr$1,_var)\r\n {\r\n  return Doc.InputInternal(\"input\",function()\r\n  {\r\n   return Seq.append(attr$1,[AttrModule.Value(_var)]);\r\n  });\r\n };\r\n Doc.Append=function(a,b)\r\n {\r\n  return Doc.Mk({\r\n   $:0,\r\n   $0:a.docNode,\r\n   $1:b.docNode\r\n  },View.Map2Unit(a.updates,b.updates));\r\n };\r\n Doc.get_Empty=function()\r\n {\r\n  return Doc.Mk(null,View.Const());\r\n };\r\n Doc.Button=function(caption,attrs,action)\r\n {\r\n  var attrs$1;\r\n  attrs$1=AttrProxy.Concat(attrs);\r\n  return Elt.New(Doc.Clickable(\"button\",action),attrs$1,Doc.TextNode(caption));\r\n };\r\n Doc.TextNode=function(v)\r\n {\r\n  return Doc.Mk({\r\n   $:5,\r\n   $0:DomUtility.CreateText(v)\r\n  },View.Const());\r\n };\r\n Doc.InputArea=function(attr$1,_var)\r\n {\r\n  return Doc.InputInternal(\"textarea\",function()\r\n  {\r\n   return Seq.append(attr$1,[AttrModule.Value(_var)]);\r\n  });\r\n };\r\n Doc.TextView=function(txt)\r\n {\r\n  var node;\r\n  node=Docs.CreateTextNode();\r\n  return Doc.Mk({\r\n   $:4,\r\n   $0:node\r\n  },View.Map(function(t)\r\n  {\r\n   Docs.UpdateTextNode(node,t);\r\n  },txt));\r\n };\r\n Doc.RunInPlace=function(childrenOnly,parent,doc)\r\n {\r\n  var st;\r\n  st=Docs.CreateRunState(parent,doc.docNode);\r\n  View.Sink(An.get_UseAnimations()||Settings.BatchUpdatesEnabled()?Mailbox.StartProcessor(Docs.PerformAnimatedUpdate(childrenOnly,st,doc.docNode)):function()\r\n  {\r\n   Docs.PerformSyncUpdate(childrenOnly,st,doc.docNode);\r\n  },doc.updates);\r\n };\r\n Doc.BindView=function(f,view)\r\n {\r\n  return Doc.EmbedView(View.Map(f,view));\r\n };\r\n Doc.InputInternal=function(elemTy,attr$1)\r\n {\r\n  var el;\r\n  el=DomUtility.CreateElement(elemTy);\r\n  return Elt.New(el,AttrProxy.Concat(attr$1(el)),Doc.get_Empty());\r\n };\r\n Doc.Mk=function(node,updates)\r\n {\r\n  return new Doc.New(node,updates);\r\n };\r\n Doc.Clickable=function(elem,action)\r\n {\r\n  var el;\r\n  el=DomUtility.CreateElement(elem);\r\n  el.addEventListener(\"click\",function(ev)\r\n  {\r\n   ev.preventDefault();\r\n   return action();\r\n  },false);\r\n  return el;\r\n };\r\n Doc.EmbedView=function(view)\r\n {\r\n  var node;\r\n  node=Docs.CreateEmbedNode();\r\n  return Doc.Mk({\r\n   $:2,\r\n   $0:node\r\n  },View.Map(Global.ignore,View.Bind(function(doc)\r\n  {\r\n   Docs.UpdateEmbedNode(node,doc.docNode);\r\n   return doc.updates;\r\n  },view)));\r\n };\r\n Doc.ConvertSeqBy=function(key,render,view)\r\n {\r\n  return Doc.Flatten(View.MapSeqCachedViewBy(key,function($1,$2)\r\n  {\r\n   return(render($1))($2);\r\n  },view));\r\n };\r\n Doc.Flatten=function(view)\r\n {\r\n  return Doc.EmbedView(View.Map(Doc.Concat,view));\r\n };\r\n Doc.New=Runtime$1.Ctor(function(docNode,updates)\r\n {\r\n  Obj.New.call(this);\r\n  this.docNode=docNode;\r\n  this.updates=updates;\r\n },Doc);\r\n testing_GeneratedPrintf.p=function($1)\r\n {\r\n  return $1.$==4?\"WasmWorkerLoaded\":$1.$==3?\"WasmWorkerLoading\":$1.$==2?\"WasmLoaded\":$1.$==1?\"WasmLoading\":\"WasmNotLoaded\";\r\n };\r\n testing_GeneratedPrintf.p$1=function($1)\r\n {\r\n  return $1==null?\"null\":\"Some \"+GeneratedPrintf.p($1.$0);\r\n };\r\n testing_GeneratedPrintf.p$2=function($1)\r\n {\r\n  return $1.$==6?\"FieldNotFound (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\")\":$1.$==5?\"ConstructorNotFound (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\", \"+Utils.printList(Utils.prettyPrint,$1.$2)+\")\":$1.$==4?\"MethodNameNotFound (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\", \"+Utils.printList(Utils.prettyPrint,$1.$2)+\")\":$1.$==3?\"MethodNotFound (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\", \"+Utils.printList(Utils.prettyPrint,$1.$2)+\")\":$1.$==2?\"TypeNotFound \"+Utils.prettyPrint($1.$0):$1.$==1?\"NameConflict (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\")\":\"SourceError \"+Utils.prettyPrint($1.$0);\r\n };\r\n testing_GeneratedPrintf.p$3=function($1)\r\n {\r\n  return $1.$==1?\"PublicProxy \"+Utils.prettyPrint($1.$0):\"SourceWarning \"+Utils.prettyPrint($1.$0);\r\n };\r\n GeneratedPrintf.p=function($1)\r\n {\r\n  return\"{\"+(\"FileName = \"+Utils.prettyPrint($1.FileName))+\"; \"+(\"Start = \"+(\"(\"+Utils.prettyPrint($1.Start[0])+\", \"+Utils.prettyPrint($1.Start[1])+\")\"))+\"; \"+(\"End = \"+(\"(\"+Utils.prettyPrint($1.End[0])+\", \"+Utils.prettyPrint($1.End[1])+\")\"))+\"}\";\r\n };\r\n AjaxRemotingProvider=Remoting$1.AjaxRemotingProvider=Runtime$1.Class({\r\n  AsyncBase:function(m,data)\r\n  {\r\n   var $this,b;\r\n   $this=this;\r\n   b=null;\r\n   return Concurrency.Delay(function()\r\n   {\r\n    var headers,payload;\r\n    headers=Remoting$1.makeHeaders(m);\r\n    payload=Remoting$1.makePayload(data);\r\n    return Concurrency.Bind(Concurrency.GetCT(),function(a)\r\n    {\r\n     return Concurrency.FromContinuations(function(ok,err,cc)\r\n     {\r\n      var waiting,reg,a$1;\r\n      function callback(u)\r\n      {\r\n       return waiting[0]?(waiting[0]=false,cc(new OperationCanceledException.New(a))):null;\r\n      }\r\n      waiting=[true];\r\n      reg=Concurrency.Register(a,function()\r\n      {\r\n       callback();\r\n      });\r\n      a$1=$this.get_EndPoint();\r\n      return Remoting$1.AjaxProvider().Async(a$1,headers,payload,function(x)\r\n      {\r\n       if(waiting[0])\r\n        {\r\n         waiting[0]=false;\r\n         reg.Dispose();\r\n         ok(Json.Activate(JSON.parse(x)));\r\n        }\r\n      },function(e)\r\n      {\r\n       if(waiting[0])\r\n        {\r\n         waiting[0]=false;\r\n         reg.Dispose();\r\n         err(e);\r\n        }\r\n      });\r\n     });\r\n    });\r\n   });\r\n  },\r\n  get_EndPoint:function()\r\n  {\r\n   return Remoting$1.EndPoint();\r\n  },\r\n  Async:function(m,data)\r\n  {\r\n   return this.AsyncBase(m,data);\r\n  }\r\n },Obj,AjaxRemotingProvider);\r\n AjaxRemotingProvider.New=Runtime$1.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },AjaxRemotingProvider);\r\n Templates.LoadLocalTemplates=function(baseName)\r\n {\r\n  !Templates.LocalTemplatesLoaded()?(Templates.set_LocalTemplatesLoaded(true),Templates.LoadNestedTemplates(self.document.body,\"\")):void 0;\r\n  Templates.LoadedTemplates().set_Item(baseName,Templates.LoadedTemplateFile(\"\"));\r\n };\r\n Templates.LocalTemplatesLoaded=function()\r\n {\r\n  SC$5.$cctor();\r\n  return SC$5.LocalTemplatesLoaded;\r\n };\r\n Templates.set_LocalTemplatesLoaded=function($1)\r\n {\r\n  SC$5.$cctor();\r\n  SC$5.LocalTemplatesLoaded=$1;\r\n };\r\n Templates.LoadNestedTemplates=function(root,baseName)\r\n {\r\n  var loadedTpls,rawTpls,wsTemplates,i,$1,node,name,wsChildrenTemplates,i$1,$2,node$1,name$1,els,instantiated;\r\n  function prepareTemplate(name$2)\r\n  {\r\n   var m,o;\r\n   if(!loadedTpls.ContainsKey(name$2))\r\n    {\r\n     m=(o=null,[rawTpls.TryGetValue(name$2,{\r\n      get:function()\r\n      {\r\n       return o;\r\n      },\r\n      set:function(v)\r\n      {\r\n       o=v;\r\n      }\r\n     }),o]);\r\n     m[0]?(instantiated.Add(name$2),rawTpls.Remove(name$2),Templates.PrepareTemplateStrict(baseName,{\r\n      $:1,\r\n      $0:name$2\r\n     },m[1][0],{\r\n      $:1,\r\n      $0:m[1][1]\r\n     },{\r\n      $:1,\r\n      $0:prepareTemplate\r\n     })):console.warn(instantiated.Contains(name$2)?\"Encountered loop when instantiating \"+name$2:\"Local template does not exist: \"+name$2);\r\n    }\r\n  }\r\n  loadedTpls=Templates.LoadedTemplateFile(baseName);\r\n  rawTpls=new Dictionary.New$5();\r\n  wsTemplates=root.querySelectorAll(\"[ws-template]\");\r\n  for(i=0,$1=wsTemplates.length-1;i<=$1;i++){\r\n   node=wsTemplates[i];\r\n   name=node.getAttribute(\"ws-template\").toLowerCase();\r\n   node.removeAttribute(\"ws-template\");\r\n   rawTpls.set_Item(name,[[node],Templates.FakeRootSingle(node)]);\r\n  }\r\n  wsChildrenTemplates=root.querySelectorAll(\"[ws-children-template]\");\r\n  for(i$1=0,$2=wsChildrenTemplates.length-1;i$1<=$2;i$1++){\r\n   node$1=wsChildrenTemplates[i$1];\r\n   name$1=node$1.getAttribute(\"ws-children-template\").toLowerCase();\r\n   node$1.removeAttribute(\"ws-children-template\");\r\n   rawTpls.set_Item(name$1,(els=DomUtility.ChildrenArray(node$1),[els,Templates.FakeRoot(els)]));\r\n  }\r\n  instantiated=new HashSet.New$3();\r\n  while(rawTpls.count>0)\r\n   prepareTemplate(Seq.head(rawTpls.get_Keys()));\r\n };\r\n Templates.LoadedTemplates=function()\r\n {\r\n  SC$5.$cctor();\r\n  return SC$5.LoadedTemplates;\r\n };\r\n Templates.LoadedTemplateFile=function(name)\r\n {\r\n  var m,o,d;\r\n  m=(o=null,[Templates.LoadedTemplates().TryGetValue(name,{\r\n   get:function()\r\n   {\r\n    return o;\r\n   },\r\n   set:function(v)\r\n   {\r\n    o=v;\r\n   }\r\n  }),o]);\r\n  return m[0]?m[1]:(d=new Dictionary.New$5(),(Templates.LoadedTemplates().set_Item(name,d),d));\r\n };\r\n Templates.FakeRootSingle=function(el)\r\n {\r\n  var m,m$1,n;\r\n  el.removeAttribute(\"ws-template\");\r\n  m=el.getAttribute(\"ws-replace\");\r\n  m===null?void 0:(el.removeAttribute(\"ws-replace\"),m$1=el.parentNode,Unchecked.Equals(m$1,null)?void 0:(n=self.document.createElement(el.tagName),n.setAttribute(\"ws-replace\",m),m$1.replaceChild(n,el)));\r\n  return Templates.FakeRoot([el]);\r\n };\r\n Templates.FakeRoot=function(els)\r\n {\r\n  var fakeroot,i,$1;\r\n  fakeroot=self.document.createElement(\"div\");\r\n  for(i=0,$1=els.length-1;i<=$1;i++)fakeroot.appendChild(Arrays.get(els,i));\r\n  return fakeroot;\r\n };\r\n Templates.PrepareTemplateStrict=function(baseName,name,els,root,prepareLocalTemplate)\r\n {\r\n  var fakeroot,name$1;\r\n  function recF(recI,$1)\r\n  {\r\n   var next,m,$2,x,f,name$2,p,instName,instBaseName,d,t,instance,usedHoles,mappings,attrs,i,$3,name$3,m$1,i$1,$4,n,singleTextFill,i$2,$5,n$1;\r\n   function g(v)\r\n   {\r\n   }\r\n   while(true)\r\n    switch(recI)\r\n    {\r\n     case 0:\r\n      if($1!==null)\r\n       {\r\n        next=$1.nextSibling;\r\n        if(Unchecked.Equals($1.nodeType,Node.TEXT_NODE))\r\n         Prepare.convertTextNode($1);\r\n        else\r\n         if(Unchecked.Equals($1.nodeType,Node.ELEMENT_NODE))\r\n          convertElement($1);\r\n        $1=next;\r\n       }\r\n      else\r\n       return null;\r\n      break;\r\n     case 1:\r\n      name$2=Slice.string($1.nodeName,{\r\n       $:1,\r\n       $0:3\r\n      },null).toLowerCase();\r\n      p=(m=name$2.indexOf(\".\"),m===-1?[baseName,name$2]:[Slice.string(name$2,null,{\r\n       $:1,\r\n       $0:m-1\r\n      }),Slice.string(name$2,{\r\n       $:1,\r\n       $0:m+1\r\n      },null)]);\r\n      instName=p[1];\r\n      instBaseName=p[0];\r\n      if(instBaseName!==\"\"&&!Templates.LoadedTemplates().ContainsKey(instBaseName))\r\n       return Prepare.failNotLoaded(instName);\r\n      else\r\n       {\r\n        if(instBaseName===\"\"&&prepareLocalTemplate!=null)\r\n         prepareLocalTemplate.$0(instName);\r\n        d=Templates.LoadedTemplates().get_Item(instBaseName);\r\n        if(!d.ContainsKey(instName))\r\n         return Prepare.failNotLoaded(instName);\r\n        else\r\n         {\r\n          t=d.get_Item(instName);\r\n          instance=t.cloneNode(true);\r\n          usedHoles=new HashSet.New$3();\r\n          mappings=new Dictionary.New$5();\r\n          attrs=$1.attributes;\r\n          for(i=0,$3=attrs.length-1;i<=$3;i++){\r\n           name$3=attrs.item(i).name.toLowerCase();\r\n           mappings.set_Item(name$3,(m$1=attrs.item(i).nodeValue,m$1===\"\"?name$3:m$1.toLowerCase()));\r\n           !usedHoles.Add(name$3)?console.warn(\"Hole mapped twice\",name$3):void 0;\r\n          }\r\n          for(i$1=0,$4=$1.childNodes.length-1;i$1<=$4;i$1++){\r\n           n=$1.childNodes[i$1];\r\n           Unchecked.Equals(n.nodeType,Node.ELEMENT_NODE)?!usedHoles.Add(n.nodeName.toLowerCase())?console.warn(\"Hole filled twice\",instName):void 0:void 0;\r\n          }\r\n          singleTextFill=$1.childNodes.length===1&&Unchecked.Equals($1.firstChild.nodeType,Node.TEXT_NODE);\r\n          if(singleTextFill)\r\n           {\r\n            x=Prepare.fillTextHole(instance,$1.firstChild.textContent,instName);\r\n            ((function(a)\r\n            {\r\n             return function(o)\r\n             {\r\n              if(o!=null)\r\n               a(o.$0);\r\n             };\r\n            }((f=function(usedHoles$1)\r\n            {\r\n             return function(a)\r\n             {\r\n              return usedHoles$1.Add(a);\r\n             };\r\n            }(usedHoles),function(x$1)\r\n            {\r\n             return g(f(x$1));\r\n            })))(x));\r\n           }\r\n          Prepare.removeHolesExcept(instance,usedHoles);\r\n          if(!singleTextFill)\r\n           {\r\n            for(i$2=0,$5=$1.childNodes.length-1;i$2<=$5;i$2++){\r\n             n$1=$1.childNodes[i$2];\r\n             Unchecked.Equals(n$1.nodeType,Node.ELEMENT_NODE)?n$1.hasAttributes()?Prepare.fillInstanceAttrs(instance,n$1):fillDocHole(instance,n$1):void 0;\r\n            }\r\n           }\r\n          Prepare.mapHoles(instance,mappings);\r\n          Prepare.fill(instance,$1.parentNode,$1);\r\n          $1.parentNode.removeChild($1);\r\n          return;\r\n         }\r\n       }\r\n      break;\r\n    }\r\n  }\r\n  function fillDocHole(instance,fillWith)\r\n  {\r\n   var m,name$2,m$1;\r\n   function fillHole(p,n)\r\n   {\r\n    var parsed,i,$1;\r\n    if(name$2===\"title\"&&fillWith.hasChildNodes())\r\n     {\r\n      parsed=$.parseHTML(fillWith.textContent);\r\n      fillWith.removeChild(fillWith.firstChild);\r\n      for(i=0,$1=parsed.length-1;i<=$1;i++)fillWith.appendChild(Arrays.get(parsed,i));\r\n     }\r\n    else\r\n     null;\r\n    convertElement(fillWith);\r\n    return Prepare.fill(fillWith,p,n);\r\n   }\r\n   name$2=fillWith.nodeName.toLowerCase();\r\n   DomUtility.IterSelector(instance,\"[ws-attr-holes]\",function(e)\r\n   {\r\n    var holeAttrs,i,$1,attrName,_this;\r\n    holeAttrs=Strings.SplitChars(e.getAttribute(\"ws-attr-holes\"),[\" \"],1);\r\n    for(i=0,$1=holeAttrs.length-1;i<=$1;i++){\r\n     attrName=Arrays.get(holeAttrs,i);\r\n     e.setAttribute(attrName,(_this=new Global.RegExp(\"\\\\${\"+name$2+\"}\",\"ig\"),e.getAttribute(attrName).replace(_this,fillWith.textContent)));\r\n    }\r\n   });\r\n   m$1=instance.querySelector(\"[ws-hole=\"+name$2+\"]\");\r\n   if(Unchecked.Equals(m$1,null))\r\n    {\r\n     m=instance.querySelector(\"[ws-replace=\"+name$2+\"]\");\r\n     return Unchecked.Equals(m,null)?null:(fillHole(m.parentNode,m),void m.parentNode.removeChild(m));\r\n    }\r\n   else\r\n    {\r\n     while(m$1.hasChildNodes())\r\n      m$1.removeChild(m$1.lastChild);\r\n     m$1.removeAttribute(\"ws-hole\");\r\n     return fillHole(m$1,null);\r\n    }\r\n  }\r\n  function convertElement(el)\r\n  {\r\n   if(Strings.StartsWith(el.nodeName.toLowerCase(),\"ws-\"))\r\n    convertInstantiation(el);\r\n   else\r\n    {\r\n     Prepare.convertAttrs(el);\r\n     convertNodeAndSiblings(el.firstChild);\r\n    }\r\n  }\r\n  function convertNodeAndSiblings(n)\r\n  {\r\n   return recF(0,n);\r\n  }\r\n  function convertInstantiation(el)\r\n  {\r\n   return recF(1,el);\r\n  }\r\n  fakeroot=root==null?Templates.FakeRoot(els):root.$0;\r\n  name$1=(name==null?\"\":name.$0).toLowerCase();\r\n  Templates.LoadedTemplateFile(baseName).set_Item(name$1,fakeroot);\r\n  Arrays.length(els)>0?(function(el)\r\n  {\r\n   var m,m$1,name$2,name$3;\r\n   while(true)\r\n    {\r\n     m=el.querySelector(\"[ws-template]\");\r\n     if(Unchecked.Equals(m,null))\r\n      {\r\n       m$1=el.querySelector(\"[ws-children-template]\");\r\n       if(Unchecked.Equals(m$1,null))\r\n        return null;\r\n       else\r\n        {\r\n         name$2=m$1.getAttribute(\"ws-children-template\");\r\n         m$1.removeAttribute(\"ws-children-template\");\r\n         Templates.PrepareTemplateStrict(baseName,{\r\n          $:1,\r\n          $0:name$2\r\n         },DomUtility.ChildrenArray(m$1),null,null);\r\n         el=el;\r\n        }\r\n      }\r\n     else\r\n      {\r\n       name$3=m.getAttribute(\"ws-template\");\r\n       (Templates.PrepareSingleTemplate(baseName,{\r\n        $:1,\r\n        $0:name$3\r\n       },m))(null);\r\n       el=el;\r\n      }\r\n    }\r\n  }(fakeroot),convertNodeAndSiblings(Arrays.get(els,0))):void 0;\r\n };\r\n Templates.PrepareSingleTemplate=function(baseName,name,el)\r\n {\r\n  var root,e,r;\r\n  root=Templates.FakeRootSingle(el);\r\n  e=[el];\r\n  r={\r\n   $:1,\r\n   $0:root\r\n  };\r\n  return function(p)\r\n  {\r\n   Templates.PrepareTemplateStrict(baseName,name,e,r,p);\r\n  };\r\n };\r\n Templates.TextHoleRE=function()\r\n {\r\n  SC$5.$cctor();\r\n  return SC$5.TextHoleRE;\r\n };\r\n AssemblyRef=AssemblyData.AssemblyRef=Runtime$1.Class({},null,AssemblyRef);\r\n String.unindent=function(s)\r\n {\r\n  var lines,n,o,o$1;\r\n  lines=Strings.SplitChars(s,[\"\\n\"],0);\r\n  n=(o=Seq.tryFindIndex(function(y)\r\n  {\r\n   return\" \"!==y;\r\n  },(o$1=Seq.tryFind(function(l)\r\n  {\r\n   return Strings.Trim(l)!==\"\";\r\n  },lines),o$1==null?\"\":o$1.$0)),o==null?0:o.$0);\r\n  return Seq.filter(function(s$1)\r\n  {\r\n   return!Strings.StartsWith(s$1,\"# 1 \");\r\n  },Seq.map(function(l)\r\n  {\r\n   return l.length<=n?\"\":l.substring(n);\r\n  },lines));\r\n };\r\n String.splitByChar=function(c,s)\r\n {\r\n  return Strings.SplitChars(s,[c],0);\r\n };\r\n String.StartsWith=function(start,s)\r\n {\r\n  return Strings.StartsWith(s,start)?{\r\n   $:1,\r\n   $0:Slice.string(s,{\r\n    $:1,\r\n    $0:start.length\r\n   },null)\r\n  }:null;\r\n };\r\n Strings.concat=function(separator,strings)\r\n {\r\n  return Arrays.ofSeq(strings).join(separator);\r\n };\r\n Strings.SplitChars=function(s,sep,opts)\r\n {\r\n  return Strings.Split(s,new Global.RegExp(\"[\"+Strings.RegexEscape(sep.join(\"\"))+\"]\"),opts);\r\n };\r\n Strings.Trim=function(s)\r\n {\r\n  return s.replace(new Global.RegExp(\"^\\\\s+\"),\"\").replace(new Global.RegExp(\"\\\\s+$\"),\"\");\r\n };\r\n Strings.Replace=function(subject,search,replace)\r\n {\r\n  function replaceLoop(subj)\r\n  {\r\n   var index,replaced,nextStartIndex;\r\n   index=subj.indexOf(search);\r\n   return index!==-1?(replaced=Strings.ReplaceOnce(subj,search,replace),(nextStartIndex=index+replace.length,Strings.Substring(replaced,0,index+replace.length)+replaceLoop(replaced.substring(nextStartIndex)))):subj;\r\n  }\r\n  return replaceLoop(subject);\r\n };\r\n Strings.StartsWith=function(t,s)\r\n {\r\n  return t.substring(0,s.length)==s;\r\n };\r\n Strings.Split=function(s,pat,opts)\r\n {\r\n  return opts===1?Arrays.filter(function(x)\r\n  {\r\n   return x!==\"\";\r\n  },Strings.SplitWith(s,pat)):Strings.SplitWith(s,pat);\r\n };\r\n Strings.RegexEscape=function(s)\r\n {\r\n  return s.replace(new Global.RegExp(\"[-\\\\/\\\\\\\\^$*+?.()|[\\\\]{}]\",\"g\"),\"\\\\$&\");\r\n };\r\n Strings.ReplaceOnce=function(string,search,replace)\r\n {\r\n  return string.replace(search,replace);\r\n };\r\n Strings.SplitWith=function(str,pat)\r\n {\r\n  return str.split(pat);\r\n };\r\n Strings.Substring=function(s,ix,ct)\r\n {\r\n  return s.substr(ix,ct);\r\n };\r\n Strings.ReplaceChar=function(s,oldC,newC)\r\n {\r\n  return Strings.Replace(s,oldC,newC);\r\n };\r\n Slice.array=function(source,start,finish)\r\n {\r\n  return start==null?finish!=null&&finish.$==1?source.slice(0,finish.$0+1):[]:finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);\r\n };\r\n Slice.string=function(source,start,finish)\r\n {\r\n  return start==null?finish!=null&&finish.$==1?source.slice(0,finish.$0+1):\"\":finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);\r\n };\r\n ParseO.tryParseWith=function(tryParseFunc)\r\n {\r\n  function g($1,$2)\r\n  {\r\n   return $1?{\r\n    $:1,\r\n    $0:$2\r\n   }:null;\r\n  }\r\n  return function(x)\r\n  {\r\n   return g.apply(null,tryParseFunc(x));\r\n  };\r\n };\r\n ParseO.parseDateO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseDateO;\r\n };\r\n ParseO.parseIntO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseIntO;\r\n };\r\n ParseO.parseInt64O=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseInt64O;\r\n };\r\n ParseO.parseSingleO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseSingleO;\r\n };\r\n ParseO.parseDoubleO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseDoubleO;\r\n };\r\n ParseO.parseGuidO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseGuidO;\r\n };\r\n Unchecked.Equals=function(a,b)\r\n {\r\n  var m,eqR,k,k$1;\r\n  if(a===b)\r\n   return true;\r\n  else\r\n   {\r\n    m=typeof a;\r\n    if(m==\"object\")\r\n    {\r\n     if(a===null||a===void 0||b===null||b===void 0)\r\n      return false;\r\n     else\r\n      if(\"Equals\"in a)\r\n       return a.Equals(b);\r\n      else\r\n       if(a instanceof Global.Array&&b instanceof Global.Array)\r\n        return Unchecked.arrayEquals(a,b);\r\n       else\r\n        if(a instanceof Date&&b instanceof Date)\r\n         return Unchecked.dateEquals(a,b);\r\n        else\r\n         {\r\n          eqR=[true];\r\n          for(var k$2 in a)if(function(k$3)\r\n          {\r\n           eqR[0]=!a.hasOwnProperty(k$3)||b.hasOwnProperty(k$3)&&Unchecked.Equals(a[k$3],b[k$3]);\r\n           return!eqR[0];\r\n          }(k$2))\r\n           break;\r\n          if(eqR[0])\r\n           {\r\n            for(var k$3 in b)if(function(k$4)\r\n            {\r\n             eqR[0]=!b.hasOwnProperty(k$4)||a.hasOwnProperty(k$4);\r\n             return!eqR[0];\r\n            }(k$3))\r\n             break;\r\n           }\r\n          return eqR[0];\r\n         }\r\n    }\r\n    else\r\n     return m==\"function\"&&(\"$Func\"in a?a.$Func===b.$Func&&a.$Target===b.$Target:\"$Invokes\"in a&&\"$Invokes\"in b&&Unchecked.arrayEquals(a.$Invokes,b.$Invokes));\r\n   }\r\n };\r\n Unchecked.Compare=function(a,b)\r\n {\r\n  var $1,m,$2,cmp,k,k$1;\r\n  if(a===b)\r\n   return 0;\r\n  else\r\n   {\r\n    m=typeof a;\r\n    switch(m==\"function\"?1:m==\"boolean\"?2:m==\"number\"?2:m==\"string\"?2:m==\"object\"?3:0)\r\n    {\r\n     case 0:\r\n      return typeof b==\"undefined\"?0:-1;\r\n     case 1:\r\n      return Operators.FailWith(\"Cannot compare function values.\");\r\n     case 2:\r\n      return a<b?-1:1;\r\n     case 3:\r\n      if(a===null)\r\n       $2=-1;\r\n      else\r\n       if(b===null)\r\n        $2=1;\r\n       else\r\n        if(\"CompareTo\"in a)\r\n         $2=a.CompareTo(b);\r\n        else\r\n         if(\"CompareTo0\"in a)\r\n          $2=a.CompareTo0(b);\r\n         else\r\n          if(a instanceof Global.Array&&b instanceof Global.Array)\r\n           $2=Unchecked.compareArrays(a,b);\r\n          else\r\n           if(a instanceof Date&&b instanceof Date)\r\n            $2=Unchecked.compareDates(a,b);\r\n           else\r\n            {\r\n             cmp=[0];\r\n             for(var k$2 in a)if(function(k$3)\r\n             {\r\n              return!a.hasOwnProperty(k$3)?false:!b.hasOwnProperty(k$3)?(cmp[0]=1,true):(cmp[0]=Unchecked.Compare(a[k$3],b[k$3]),cmp[0]!==0);\r\n             }(k$2))\r\n              break;\r\n             if(cmp[0]===0)\r\n              {\r\n               for(var k$3 in b)if(function(k$4)\r\n               {\r\n                return!b.hasOwnProperty(k$4)?false:!a.hasOwnProperty(k$4)&&(cmp[0]=-1,true);\r\n               }(k$3))\r\n                break;\r\n              }\r\n             $2=cmp[0];\r\n            }\r\n      return $2;\r\n    }\r\n   }\r\n };\r\n Unchecked.arrayEquals=function(a,b)\r\n {\r\n  var eq,i;\r\n  if(Arrays.length(a)===Arrays.length(b))\r\n   {\r\n    eq=true;\r\n    i=0;\r\n    while(eq&&i<Arrays.length(a))\r\n     {\r\n      !Unchecked.Equals(Arrays.get(a,i),Arrays.get(b,i))?eq=false:void 0;\r\n      i=i+1;\r\n     }\r\n    return eq;\r\n   }\r\n  else\r\n   return false;\r\n };\r\n Unchecked.dateEquals=function(a,b)\r\n {\r\n  return a.getTime()===b.getTime();\r\n };\r\n Unchecked.compareArrays=function(a,b)\r\n {\r\n  var cmp,i;\r\n  if(Arrays.length(a)<Arrays.length(b))\r\n   return -1;\r\n  else\r\n   if(Arrays.length(a)>Arrays.length(b))\r\n    return 1;\r\n   else\r\n    {\r\n     cmp=0;\r\n     i=0;\r\n     while(cmp===0&&i<Arrays.length(a))\r\n      {\r\n       cmp=Unchecked.Compare(Arrays.get(a,i),Arrays.get(b,i));\r\n       i=i+1;\r\n      }\r\n     return cmp;\r\n    }\r\n };\r\n Unchecked.compareDates=function(a,b)\r\n {\r\n  return Unchecked.Compare(a.getTime(),b.getTime());\r\n };\r\n Unchecked.Hash=function(o)\r\n {\r\n  var m;\r\n  m=typeof o;\r\n  return m==\"function\"?0:m==\"boolean\"?o?1:0:m==\"number\"?o:m==\"string\"?Unchecked.hashString(o):m==\"object\"?o==null?0:o instanceof Global.Array?Unchecked.hashArray(o):Unchecked.hashObject(o):0;\r\n };\r\n Unchecked.hashString=function(s)\r\n {\r\n  var hash,i,$1;\r\n  if(s===null)\r\n   return 0;\r\n  else\r\n   {\r\n    hash=5381;\r\n    for(i=0,$1=s.length-1;i<=$1;i++)hash=Unchecked.hashMix(hash,s[i].charCodeAt());\r\n    return hash;\r\n   }\r\n };\r\n Unchecked.hashArray=function(o)\r\n {\r\n  var h,i,$1;\r\n  h=-34948909;\r\n  for(i=0,$1=Arrays.length(o)-1;i<=$1;i++)h=Unchecked.hashMix(h,Unchecked.Hash(Arrays.get(o,i)));\r\n  return h;\r\n };\r\n Unchecked.hashObject=function(o)\r\n {\r\n  var h,k;\r\n  if(\"GetHashCode\"in o)\r\n   return o.GetHashCode();\r\n  else\r\n   {\r\n    h=[0];\r\n    for(var k$1 in o)if(function(key)\r\n    {\r\n     h[0]=Unchecked.hashMix(Unchecked.hashMix(h[0],Unchecked.hashString(key)),Unchecked.Hash(o[key]));\r\n     return false;\r\n    }(k$1))\r\n     break;\r\n    return h[0];\r\n   }\r\n };\r\n Unchecked.hashMix=function(x,y)\r\n {\r\n  return(x<<5)+x+y;\r\n };\r\n Numeric.TryParseInt32=function(s,r)\r\n {\r\n  return Numeric.TryParse(s,-2147483648,2147483647,r);\r\n };\r\n Numeric.TryParseInt64=function(s,r)\r\n {\r\n  return Numeric.TryParse(s,-9223372036854775808,9223372036854775807,r);\r\n };\r\n Guid.TryParse=function(input,output)\r\n {\r\n  try\r\n  {\r\n   output.set(Guid.Parse(input));\r\n   return true;\r\n  }\r\n  catch(m)\r\n  {\r\n   return false;\r\n  }\r\n };\r\n Guid.Parse=function(input)\r\n {\r\n  var $1,$2,$3;\r\n  try\r\n  {\r\n   return Guid.ParseExact(input,\"D\");\r\n  }\r\n  catch(m)\r\n  {\r\n   try\r\n   {\r\n    $1=Guid.ParseExact(input,\"B\");\r\n   }\r\n   catch(m$1)\r\n   {\r\n    try\r\n    {\r\n     $2=Guid.ParseExact(input,\"P\");\r\n    }\r\n    catch(m$2)\r\n    {\r\n     try\r\n     {\r\n      $3=Guid.ParseExact(input,\"N\");\r\n     }\r\n     catch(m$3)\r\n     {\r\n      $3=Guid.ParseExact(input,\"X\");\r\n     }\r\n     $2=$3;\r\n    }\r\n    $1=$2;\r\n   }\r\n   return $1;\r\n  }\r\n };\r\n Guid.ParseExact=function(input,format)\r\n {\r\n  var s,s$1,s$2,m,s$3,i,$1,c,s$4,i$1,$2,$3,c$1;\r\n  function parseD(s$5)\r\n  {\r\n   var i$2,$4,$5,c$2;\r\n   for(i$2=0,$4=35;i$2<=$4;i$2++){\r\n    i$2===8||(i$2===13||(i$2===18||i$2===23))?s$5[i$2]!==\"-\"?Guid.ShapeError():void 0:(c$2=s$5[i$2],!(\"0\"<=c$2&&c$2<=\"9\"||\"a\"<=c$2&&c$2<=\"f\")?Guid.ShapeError():void 0);\r\n   }\r\n   return s$5;\r\n  }\r\n  m=format.toUpperCase();\r\n  if(m===\"N\")\r\n   {\r\n    s$3=Strings.Trim(input).toLowerCase();\r\n    if(s$3.length!==32)\r\n     Guid.ShapeError();\r\n    for(i=0,$1=31;i<=$1;i++){\r\n     c=s$3[i];\r\n     !(\"0\"<=c&&c<=\"9\"||\"a\"<=c&&c<=\"f\")?Guid.ShapeError():void 0;\r\n    }\r\n    return Strings.Substring(s$3,0,8)+\"-\"+Strings.Substring(s$3,8,4)+\"-\"+Strings.Substring(s$3,12,4)+\"-\"+Strings.Substring(s$3,16,4)+\"-\"+s$3.substring(20);\r\n   }\r\n  else\r\n   if(m===\"D\")\r\n    {\r\n     s=Strings.Trim(input).toLowerCase();\r\n     s.length!==36?Guid.ShapeError():void 0;\r\n     return parseD(s);\r\n    }\r\n   else\r\n    if(m===\"B\")\r\n     {\r\n      s$1=Strings.Trim(input).toLowerCase();\r\n      s$1.length!==38||s$1[0]!==\"{\"||s$1[17]!==\"}\"?Guid.ShapeError():void 0;\r\n      return parseD(Strings.Substring(s$1,1,36));\r\n     }\r\n    else\r\n     if(m===\"P\")\r\n      {\r\n       s$2=Strings.Trim(input).toLowerCase();\r\n       s$2.length!==38||s$2[0]!==\"(\"||s$2[17]!==\")\"?Guid.ShapeError():void 0;\r\n       return parseD(Strings.Substring(s$2,1,36));\r\n      }\r\n     else\r\n      if(m===\"X\")\r\n       {\r\n        s$4=Strings.Trim(input).toLowerCase();\r\n        if(s$4.length!==68)\r\n         Guid.ShapeError();\r\n        for(i$1=0,$2=67;i$1<=$2;i$1++){\r\n         switch(i$1)\r\n         {\r\n          case 26:\r\n          case 0:\r\n           if(s$4[i$1]!==\"{\")\r\n            Guid.ShapeError();\r\n           break;\r\n          case 62:\r\n          case 57:\r\n          case 52:\r\n          case 47:\r\n          case 42:\r\n          case 37:\r\n          case 32:\r\n          case 27:\r\n          case 19:\r\n          case 12:\r\n          case 1:\r\n           if(s$4[i$1]!==\"0\")\r\n            Guid.ShapeError();\r\n           break;\r\n          case 63:\r\n          case 58:\r\n          case 53:\r\n          case 48:\r\n          case 43:\r\n          case 38:\r\n          case 33:\r\n          case 28:\r\n          case 20:\r\n          case 13:\r\n          case 2:\r\n           if(s$4[i$1]!==\"x\")\r\n            Guid.ShapeError();\r\n           break;\r\n          case 61:\r\n          case 56:\r\n          case 51:\r\n          case 46:\r\n          case 41:\r\n          case 36:\r\n          case 31:\r\n          case 25:\r\n          case 18:\r\n          case 11:\r\n           if(s$4[i$1]!==\",\")\r\n            Guid.ShapeError();\r\n           break;\r\n          case 67:\r\n          case 66:\r\n           if(s$4[i$1]!==\"{\")\r\n            Guid.ShapeError();\r\n           break;\r\n          default:\r\n           c$1=s$4[i$1];\r\n           !(\"0\"<=c$1&&c$1<=\"9\"||\"a\"<=c$1&&c$1<=\"f\")?Guid.ShapeError():void 0;\r\n           break;\r\n         }\r\n        }\r\n        return Strings.Substring(s$4,3,8)+\"-\"+Strings.Substring(s$4,14,4)+\"-\"+Strings.Substring(s$4,21,4)+\"-\"+Strings.Substring(s$4,29,2)+Strings.Substring(s$4,34,2)+\"-\"+Strings.Substring(s$4,39,2)+Strings.Substring(s$4,44,2)+Strings.Substring(s$4,49,2)+Strings.Substring(s$4,54,2)+Strings.Substring(s$4,59,2)+Strings.Substring(s$4,64,2);\r\n       }\r\n      else\r\n       return Guid.FormatError();\r\n };\r\n Guid.ShapeError=function()\r\n {\r\n  throw new FormatException.New$1(\"Guid should contain 32 digits with 4 dashes (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).\");\r\n };\r\n Guid.FormatError=function()\r\n {\r\n  throw new FormatException.New$1(\"Format String can be only \\\"D\\\", \\\"d\\\", \\\"N\\\", \\\"n\\\", \\\"P\\\", \\\"p\\\", \\\"B\\\", \\\"b\\\", \\\"X\\\" or \\\"x\\\".\");\r\n };\r\n Guid.NewGuid=function()\r\n {\r\n  return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(new Global.RegExp(\"[xy]\",\"g\"),function(c)\r\n  {\r\n   var r,v;\r\n   r=Math.random()*16|0;\r\n   v=c==\"x\"?r:r&3|8;\r\n   return v.toString(16);\r\n  });\r\n };\r\n Var$1=UI.Var$1=Runtime$1.Class({},Obj,Var$1);\r\n Var$1.Create$1=function(v)\r\n {\r\n  return new ConcreteVar.New(false,Snap.New({\r\n   $:2,\r\n   $0:v,\r\n   $1:[]\r\n  }),v);\r\n };\r\n Var$1.Set=function(_var,value)\r\n {\r\n  _var.Set(value);\r\n };\r\n Remoting$1.AjaxProvider=function()\r\n {\r\n  SC$2.$cctor();\r\n  return SC$2.AjaxProvider;\r\n };\r\n Remoting$1.set_AjaxProvider=function($1)\r\n {\r\n  SC$2.$cctor();\r\n  SC$2.AjaxProvider=$1;\r\n };\r\n Remoting$1.makePayload=function(data)\r\n {\r\n  return JSON.stringify(data);\r\n };\r\n Remoting$1.makeHeaders=function(m)\r\n {\r\n  return{\r\n   \"content-type\":\"application/json\",\r\n   \"x-websharper-rpc\":m\r\n  };\r\n };\r\n Remoting$1.EndPoint=function()\r\n {\r\n  SC$2.$cctor();\r\n  return SC$2.EndPoint;\r\n };\r\n Remoting$1.ajax=function(async,url,headers,data,ok,err,csrf)\r\n {\r\n  var xhr,csrf$1,h;\r\n  xhr=new Global.XMLHttpRequest();\r\n  csrf$1=Global.document.cookie.replace(new Global.RegExp(\"(?:(?:^|.*;)\\\\s*csrftoken\\\\s*\\\\=\\\\s*([^;]*).*$)|^.*$\"),\"$1\");\r\n  xhr.open(\"POST\",url,async);\r\n  if(async==true)\r\n   xhr.withCredentials=true;\r\n  for(var h$1 in headers)xhr.setRequestHeader(h$1,headers[h$1]);\r\n  if(csrf$1)\r\n   xhr.setRequestHeader(\"x-csrftoken\",csrf$1);\r\n  function k()\r\n  {\r\n   var msg;\r\n   if(xhr.status==200)\r\n    ok(xhr.responseText);\r\n   else\r\n    if(csrf&&xhr.status==403&&xhr.responseText==\"CSRF\")\r\n     csrf();\r\n    else\r\n     {\r\n      msg=\"Response status is not 200: \";\r\n      err(new Error(msg+xhr.status));\r\n     }\r\n  }\r\n  if(\"onload\"in xhr)\r\n   xhr.onload=xhr.onerror=xhr.onabort=k;\r\n  else\r\n   xhr.onreadystatechange=function()\r\n   {\r\n    if(xhr.readyState==4)\r\n     k();\r\n   };\r\n  xhr.send(data);\r\n };\r\n Dictionary=Collections.Dictionary=Runtime$1.Class({\r\n  set_Item:function(k,v)\r\n  {\r\n   this.set(k,v);\r\n  },\r\n  TryGetValue:function(k,res)\r\n  {\r\n   var $this,d,v;\r\n   $this=this;\r\n   d=this.data[this.hash(k)];\r\n   return d==null?false:(v=Arrays.tryPick(function(a)\r\n   {\r\n    var a$1;\r\n    a$1=Operators.KeyValue(a);\r\n    return $this.equals.apply(null,[a$1[0],k])?{\r\n     $:1,\r\n     $0:a$1[1]\r\n    }:null;\r\n   },d),v!=null&&v.$==1&&(res.set(v.$0),true));\r\n  },\r\n  Add:function(k,v)\r\n  {\r\n   this.add(k,v);\r\n  },\r\n  ContainsKey:function(k)\r\n  {\r\n   var $this,d;\r\n   $this=this;\r\n   d=this.data[this.hash(k)];\r\n   return d==null?false:Arrays.exists(function(a)\r\n   {\r\n    return $this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);\r\n   },d);\r\n  },\r\n  Remove:function(k)\r\n  {\r\n   return this.remove(k);\r\n  },\r\n  get_Keys:function()\r\n  {\r\n   return new KeyCollection.New(this);\r\n  },\r\n  set:function(k,v)\r\n  {\r\n   var $this,h,d,m;\r\n   $this=this;\r\n   h=this.hash(k);\r\n   d=this.data[h];\r\n   d==null?(this.count=this.count+1,this.data[h]=new Global.Array({\r\n    K:k,\r\n    V:v\r\n   })):(m=Arrays.tryFindIndex(function(a)\r\n   {\r\n    return $this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);\r\n   },d),m==null?(this.count=this.count+1,d.push({\r\n    K:k,\r\n    V:v\r\n   })):d[m.$0]={\r\n    K:k,\r\n    V:v\r\n   });\r\n  },\r\n  add:function(k,v)\r\n  {\r\n   var $this,h,d;\r\n   $this=this;\r\n   h=this.hash(k);\r\n   d=this.data[h];\r\n   d==null?(this.count=this.count+1,this.data[h]=new Global.Array({\r\n    K:k,\r\n    V:v\r\n   })):(Arrays.exists(function(a)\r\n   {\r\n    return $this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);\r\n   },d)?DictionaryUtil.alreadyAdded():void 0,this.count=this.count+1,d.push({\r\n    K:k,\r\n    V:v\r\n   }));\r\n  },\r\n  remove:function(k)\r\n  {\r\n   var $this,h,d,r;\r\n   $this=this;\r\n   h=this.hash(k);\r\n   d=this.data[h];\r\n   return d==null?false:(r=Arrays.filter(function(a)\r\n   {\r\n    return!$this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);\r\n   },d),Arrays.length(r)<d.length&&(this.count=this.count-1,this.data[h]=r,true));\r\n  },\r\n  get_Item:function(k)\r\n  {\r\n   return this.get(k);\r\n  },\r\n  get:function(k)\r\n  {\r\n   var $this,d;\r\n   $this=this;\r\n   d=this.data[this.hash(k)];\r\n   return d==null?DictionaryUtil.notPresent():Arrays.pick(function(a)\r\n   {\r\n    var a$1;\r\n    a$1=Operators.KeyValue(a);\r\n    return $this.equals.apply(null,[a$1[0],k])?{\r\n     $:1,\r\n     $0:a$1[1]\r\n    }:null;\r\n   },d);\r\n  },\r\n  Clear:function()\r\n  {\r\n   this.data=[];\r\n   this.count=0;\r\n  },\r\n  GetEnumerator:function()\r\n  {\r\n   return Enumerator.Get0(this);\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return Enumerator.Get0(Arrays.concat(JS.GetFieldValues(this.data)));\r\n  }\r\n },Obj,Dictionary);\r\n Dictionary.New$5=Runtime$1.Ctor(function()\r\n {\r\n  Dictionary.New$6.call(this,[],Unchecked.Equals,Unchecked.Hash);\r\n },Dictionary);\r\n Dictionary.New$6=Runtime$1.Ctor(function(init,equals,hash)\r\n {\r\n  var e,x;\r\n  Obj.New.call(this);\r\n  this.equals=equals;\r\n  this.hash=hash;\r\n  this.count=0;\r\n  this.data=[];\r\n  e=Enumerator.Get(init);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    {\r\n     x=e.Current();\r\n     this.set(x.K,x.V);\r\n    }\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n },Dictionary);\r\n ListModel.Create=function(key,init)\r\n {\r\n  return ListModel.CreateWithStorage(key,Storage.InMemory(Arrays.ofSeq(init)));\r\n };\r\n ListModel.CreateWithStorage=function(key,storage)\r\n {\r\n  return new ListModel.New(key,storage);\r\n };\r\n T=List.T=Runtime$1.Class({\r\n  GetEnumerator:function()\r\n  {\r\n   return new T$1.New(this,null,function(e)\r\n   {\r\n    var m;\r\n    m=e.s;\r\n    return m.$==0?false:(e.c=m.$0,e.s=m.$1,true);\r\n   },void 0);\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return Enumerator.Get(this);\r\n  }\r\n },null,T);\r\n T.Empty=new T({\r\n  $:0\r\n });\r\n AssemblyDef.New=function(name,self$1,modules,dependencies,javaScript)\r\n {\r\n  return{\r\n   name:name,\r\n   self:self$1,\r\n   modules:modules,\r\n   dependencies:dependencies,\r\n   javaScript:javaScript\r\n  };\r\n };\r\n WSFrameworkTest.mainDocNameVar=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainDocNameVar;\r\n };\r\n View=UI.View=Runtime$1.Class({},null,View);\r\n Snap.Obsolete=function(sn)\r\n {\r\n  var $1,m,i,$2,o;\r\n  m=sn.s;\r\n  if(m==null||(m!=null&&m.$==2?($1=m.$1,false):m!=null&&m.$==3?($1=m.$1,false):true))\r\n   void 0;\r\n  else\r\n   {\r\n    sn.s=null;\r\n    for(i=0,$2=Arrays.length($1)-1;i<=$2;i++){\r\n     o=Arrays.get($1,i);\r\n     typeof o==\"object\"?function(sn$1)\r\n     {\r\n      Snap.Obsolete(sn$1);\r\n     }(o):o();\r\n    }\r\n   }\r\n };\r\n Snap.New=function(State)\r\n {\r\n  return{\r\n   s:State\r\n  };\r\n };\r\n Concurrency.FromContinuations=function(subscribe)\r\n {\r\n  return function(c)\r\n  {\r\n   var continued;\r\n   function once(cont)\r\n   {\r\n    if(continued[0])\r\n     Operators.FailWith(\"A continuation provided by Async.FromContinuations was invoked multiple times\");\r\n    else\r\n     {\r\n      continued[0]=true;\r\n      Concurrency.scheduler().Fork(cont);\r\n     }\r\n   }\r\n   continued=[false];\r\n   subscribe(function(a)\r\n   {\r\n    once(function()\r\n    {\r\n     c.k({\r\n      $:0,\r\n      $0:a\r\n     });\r\n    });\r\n   },function(e)\r\n   {\r\n    once(function()\r\n    {\r\n     c.k({\r\n      $:1,\r\n      $0:e\r\n     });\r\n    });\r\n   },function(e)\r\n   {\r\n    once(function()\r\n    {\r\n     c.k({\r\n      $:2,\r\n      $0:e\r\n     });\r\n    });\r\n   });\r\n  };\r\n };\r\n Concurrency.Delay=function(mk)\r\n {\r\n  return function(c)\r\n  {\r\n   try\r\n   {\r\n    (mk(null))(c);\r\n   }\r\n   catch(e)\r\n   {\r\n    c.k({\r\n     $:1,\r\n     $0:e\r\n    });\r\n   }\r\n  };\r\n };\r\n Concurrency.Bind=function(r,f)\r\n {\r\n  return Concurrency.checkCancel(function(c)\r\n  {\r\n   r(AsyncBody.New(function(a)\r\n   {\r\n    var x;\r\n    if(a.$==0)\r\n     {\r\n      x=a.$0;\r\n      Concurrency.scheduler().Fork(function()\r\n      {\r\n       try\r\n       {\r\n        (f(x))(c);\r\n       }\r\n       catch(e)\r\n       {\r\n        c.k({\r\n         $:1,\r\n         $0:e\r\n        });\r\n       }\r\n      });\r\n     }\r\n    else\r\n     Concurrency.scheduler().Fork(function()\r\n     {\r\n      c.k(a);\r\n     });\r\n   },c.ct));\r\n  });\r\n };\r\n Concurrency.Sleep=function(ms)\r\n {\r\n  return function(c)\r\n  {\r\n   var pending,creg;\r\n   pending=void 0;\r\n   creg=void 0;\r\n   pending=Global.setTimeout(function()\r\n   {\r\n    creg.Dispose();\r\n    Concurrency.scheduler().Fork(function()\r\n    {\r\n     c.k({\r\n      $:0,\r\n      $0:null\r\n     });\r\n    });\r\n   },ms);\r\n   creg=Concurrency.Register(c.ct,function()\r\n   {\r\n    Global.clearTimeout(pending);\r\n    Concurrency.scheduler().Fork(function()\r\n    {\r\n     Concurrency.cancel(c);\r\n    });\r\n   });\r\n  };\r\n };\r\n Concurrency.Combine=function(a,b)\r\n {\r\n  return Concurrency.Bind(a,function()\r\n  {\r\n   return b;\r\n  });\r\n };\r\n Concurrency.Zero=function()\r\n {\r\n  SC$3.$cctor();\r\n  return SC$3.Zero;\r\n };\r\n Concurrency.Start=function(c,ctOpt)\r\n {\r\n  var ct,d;\r\n  ct=(d=(Concurrency.defCTS())[0],ctOpt==null?d:ctOpt.$0);\r\n  Concurrency.scheduler().Fork(function()\r\n  {\r\n   if(!ct.c)\r\n    c(AsyncBody.New(function(a)\r\n    {\r\n     if(a.$==1)\r\n      Concurrency.UncaughtAsyncError(a.$0);\r\n    },ct));\r\n  });\r\n };\r\n Concurrency.checkCancel=function(r)\r\n {\r\n  return function(c)\r\n  {\r\n   if(c.ct.c)\r\n    Concurrency.cancel(c);\r\n   else\r\n    r(c);\r\n  };\r\n };\r\n Concurrency.Register=function(ct,callback)\r\n {\r\n  var i;\r\n  return ct===Concurrency.noneCT()?{\r\n   Dispose:function()\r\n   {\r\n    return null;\r\n   }\r\n  }:(i=ct.r.push(callback)-1,{\r\n   Dispose:function()\r\n   {\r\n    return Arrays.set(ct.r,i,Global.ignore);\r\n   }\r\n  });\r\n };\r\n Concurrency.cancel=function(c)\r\n {\r\n  c.k({\r\n   $:2,\r\n   $0:new OperationCanceledException.New(c.ct)\r\n  });\r\n };\r\n Concurrency.defCTS=function()\r\n {\r\n  SC$3.$cctor();\r\n  return SC$3.defCTS;\r\n };\r\n Concurrency.UncaughtAsyncError=function(e)\r\n {\r\n  console.log(\"WebSharper: Uncaught asynchronous exception\",e);\r\n };\r\n Concurrency.While=function(g,c)\r\n {\r\n  return g()?Concurrency.Bind(c,function()\r\n  {\r\n   return Concurrency.While(g,c);\r\n  }):Concurrency.Return();\r\n };\r\n Concurrency.Return=function(x)\r\n {\r\n  return function(c)\r\n  {\r\n   c.k({\r\n    $:0,\r\n    $0:x\r\n   });\r\n  };\r\n };\r\n Concurrency.scheduler=function()\r\n {\r\n  SC$3.$cctor();\r\n  return SC$3.scheduler;\r\n };\r\n Concurrency.noneCT=function()\r\n {\r\n  SC$3.$cctor();\r\n  return SC$3.noneCT;\r\n };\r\n Concurrency.For=function(s,b)\r\n {\r\n  return Concurrency.Using(Enumerator.Get(s),function(ie)\r\n  {\r\n   return Concurrency.While(function()\r\n   {\r\n    return ie.MoveNext();\r\n   },Concurrency.Delay(function()\r\n   {\r\n    return b(ie.Current());\r\n   }));\r\n  });\r\n };\r\n Concurrency.Using=function(x,f)\r\n {\r\n  return Concurrency.TryFinally(f(x),function()\r\n  {\r\n   x.Dispose();\r\n  });\r\n };\r\n Concurrency.GetCT=function()\r\n {\r\n  SC$3.$cctor();\r\n  return SC$3.GetCT;\r\n };\r\n Concurrency.TryFinally=function(run,f)\r\n {\r\n  return function(c)\r\n  {\r\n   run(AsyncBody.New(function(r)\r\n   {\r\n    try\r\n    {\r\n     f();\r\n     c.k(r);\r\n    }\r\n    catch(e)\r\n    {\r\n     c.k({\r\n      $:1,\r\n      $0:e\r\n     });\r\n    }\r\n   },c.ct));\r\n  };\r\n };\r\n Concurrency.TryWith=function(r,f)\r\n {\r\n  return function(c)\r\n  {\r\n   r(AsyncBody.New(function(a)\r\n   {\r\n    if(a.$==0)\r\n     c.k({\r\n      $:0,\r\n      $0:a.$0\r\n     });\r\n    else\r\n     if(a.$==1)\r\n      try\r\n      {\r\n       (f(a.$0))(c);\r\n      }\r\n      catch(e)\r\n      {\r\n       c.k(a);\r\n      }\r\n     else\r\n      c.k(a);\r\n   },c.ct));\r\n  };\r\n };\r\n CustomXhrProvider=Remoting.CustomXhrProvider=Runtime$1.Class({\r\n  Async:function(url,headers,data,ok,err)\r\n  {\r\n   var b;\r\n   Concurrency.Start((b=null,Concurrency.Delay(function()\r\n   {\r\n    var md;\r\n    md=Remoting.getHeaderRpc(headers);\r\n    ReturnQueue.add(md,[ok,err]);\r\n    return Concurrency.TryWith(Concurrency.Delay(function()\r\n    {\r\n     Remoting.callRunRpc(md,data);\r\n     return Concurrency.Zero();\r\n    }),function(a)\r\n    {\r\n     Remoting.returnExnExn(md,a);\r\n     return Concurrency.Zero();\r\n    });\r\n   })),null);\r\n  }\r\n },Obj,CustomXhrProvider);\r\n CustomXhrProvider.New=Runtime$1.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },CustomXhrProvider);\r\n Require=WasmLoad.Require=Runtime$1.Class({},Obj,Require);\r\n WsTranslator.dlls=function()\r\n {\r\n  SC$4.$cctor();\r\n  return SC$4.dlls;\r\n };\r\n Arrays.choose=function(f,arr)\r\n {\r\n  var q,i,$1,m;\r\n  q=[];\r\n  for(i=0,$1=arr.length-1;i<=$1;i++){\r\n   m=f(arr[i]);\r\n   m==null?void 0:q.push(m.$0);\r\n  }\r\n  return q;\r\n };\r\n Arrays.map=function(f,arr)\r\n {\r\n  var r,i,$1;\r\n  r=new Global.Array(arr.length);\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)r[i]=f(arr[i]);\r\n  return r;\r\n };\r\n Arrays.filter=function(f,arr)\r\n {\r\n  var r,i,$1;\r\n  r=[];\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)if(f(arr[i]))\r\n   r.push(arr[i]);\r\n  return r;\r\n };\r\n Arrays.ofSeq=function(xs)\r\n {\r\n  var q,o;\r\n  if(xs instanceof Global.Array)\r\n   return xs.slice();\r\n  else\r\n   if(xs instanceof T)\r\n    return Arrays.ofList(xs);\r\n   else\r\n    {\r\n     q=[];\r\n     o=Enumerator.Get(xs);\r\n     try\r\n     {\r\n      while(o.MoveNext())\r\n       q.push(o.Current());\r\n      return q;\r\n     }\r\n     finally\r\n     {\r\n      if(typeof o==\"object\"&&\"Dispose\"in o)\r\n       o.Dispose();\r\n     }\r\n    }\r\n };\r\n Arrays.ofList=function(xs)\r\n {\r\n  var l,q;\r\n  q=[];\r\n  l=xs;\r\n  while(!(l.$==0))\r\n   {\r\n    q.push(List.head(l));\r\n    l=List.tail(l);\r\n   }\r\n  return q;\r\n };\r\n Arrays.tryPick=function(f,arr)\r\n {\r\n  var res,i,m;\r\n  res=null;\r\n  i=0;\r\n  while(i<arr.length&&res==null)\r\n   {\r\n    m=f(arr[i]);\r\n    m!=null&&m.$==1?res=m:void 0;\r\n    i=i+1;\r\n   }\r\n  return res;\r\n };\r\n Arrays.tryFind=function(f,arr)\r\n {\r\n  var res,i;\r\n  res=null;\r\n  i=0;\r\n  while(i<arr.length&&res==null)\r\n   {\r\n    f(arr[i])?res={\r\n     $:1,\r\n     $0:arr[i]\r\n    }:void 0;\r\n    i=i+1;\r\n   }\r\n  return res;\r\n };\r\n Arrays.exists=function(f,x)\r\n {\r\n  var e,i,$1,l;\r\n  e=false;\r\n  i=0;\r\n  l=Arrays.length(x);\r\n  while(!e&&i<l)\r\n   if(f(x[i]))\r\n    e=true;\r\n   else\r\n    i=i+1;\r\n  return e;\r\n };\r\n Arrays.tryFindIndex=function(f,arr)\r\n {\r\n  var res,i;\r\n  res=null;\r\n  i=0;\r\n  while(i<arr.length&&res==null)\r\n   {\r\n    f(arr[i])?res={\r\n     $:1,\r\n     $0:i\r\n    }:void 0;\r\n    i=i+1;\r\n   }\r\n  return res;\r\n };\r\n Arrays.foldBack=function(f,arr,zero)\r\n {\r\n  var acc,$1,len,i,$2;\r\n  acc=zero;\r\n  len=arr.length;\r\n  for(i=1,$2=len;i<=$2;i++)acc=f(arr[len-i],acc);\r\n  return acc;\r\n };\r\n Arrays.concat=function(xs)\r\n {\r\n  return Global.Array.prototype.concat.apply([],Arrays.ofSeq(xs));\r\n };\r\n Arrays.iter=function(f,arr)\r\n {\r\n  var i,$1;\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)f(arr[i]);\r\n };\r\n Arrays.pick=function(f,arr)\r\n {\r\n  var m;\r\n  m=Arrays.tryPick(f,arr);\r\n  return m==null?Operators.FailWith(\"KeyNotFoundException\"):m.$0;\r\n };\r\n Arrays.create=function(size,value)\r\n {\r\n  var r,i,$1;\r\n  r=new Global.Array(size);\r\n  for(i=0,$1=size-1;i<=$1;i++)r[i]=value;\r\n  return r;\r\n };\r\n Arrays.init=function(size,f)\r\n {\r\n  var r,i,$1;\r\n  size<0?Operators.FailWith(\"Negative size given.\"):null;\r\n  r=new Global.Array(size);\r\n  for(i=0,$1=size-1;i<=$1;i++)r[i]=f(i);\r\n  return r;\r\n };\r\n Arrays.forall=function(f,x)\r\n {\r\n  var a,i,$1,l;\r\n  a=true;\r\n  i=0;\r\n  l=Arrays.length(x);\r\n  while(a&&i<l)\r\n   if(f(x[i]))\r\n    i=i+1;\r\n   else\r\n    a=false;\r\n  return a;\r\n };\r\n List.ofArray=function(arr)\r\n {\r\n  var r,i,$1;\r\n  r=T.Empty;\r\n  for(i=Arrays.length(arr)-1,$1=0;i>=$1;i--)r=new T({\r\n   $:1,\r\n   $0:Arrays.get(arr,i),\r\n   $1:r\r\n  });\r\n  return r;\r\n };\r\n List.ofSeq=function(s)\r\n {\r\n  var e,$1,go,r,res,t;\r\n  if(s instanceof T)\r\n   return s;\r\n  else\r\n   if(s instanceof Global.Array)\r\n    return List.ofArray(s);\r\n   else\r\n    {\r\n     e=Enumerator.Get(s);\r\n     try\r\n     {\r\n      go=e.MoveNext();\r\n      if(!go)\r\n       $1=T.Empty;\r\n      else\r\n       {\r\n        res=new T({\r\n         $:1\r\n        });\r\n        r=res;\r\n        while(go)\r\n         {\r\n          r.$0=e.Current();\r\n          e.MoveNext()?r=(t=new T({\r\n           $:1\r\n          }),r.$1=t,t):go=false;\r\n         }\r\n        r.$1=T.Empty;\r\n        $1=res;\r\n       }\r\n      return $1;\r\n     }\r\n     finally\r\n     {\r\n      if(typeof e==\"object\"&&\"Dispose\"in e)\r\n       e.Dispose();\r\n     }\r\n    }\r\n };\r\n List.head=function(l)\r\n {\r\n  return l.$==1?l.$0:List.listEmpty();\r\n };\r\n List.tail=function(l)\r\n {\r\n  return l.$==1?l.$1:List.listEmpty();\r\n };\r\n List.listEmpty=function()\r\n {\r\n  return Operators.FailWith(\"The input list was empty.\");\r\n };\r\n Enumerator.Get=function(x)\r\n {\r\n  return x instanceof Global.Array?Enumerator.ArrayEnumerator(x):Unchecked.Equals(typeof x,\"string\")?Enumerator.StringEnumerator(x):x.GetEnumerator();\r\n };\r\n Enumerator.ArrayEnumerator=function(s)\r\n {\r\n  return new T$1.New(0,null,function(e)\r\n  {\r\n   var i;\r\n   i=e.s;\r\n   return i<Arrays.length(s)&&(e.c=Arrays.get(s,i),e.s=i+1,true);\r\n  },void 0);\r\n };\r\n Enumerator.StringEnumerator=function(s)\r\n {\r\n  return new T$1.New(0,null,function(e)\r\n  {\r\n   var i;\r\n   i=e.s;\r\n   return i<s.length&&(e.c=s[i],e.s=i+1,true);\r\n  },void 0);\r\n };\r\n Enumerator.Get0=function(x)\r\n {\r\n  return x instanceof Global.Array?Enumerator.ArrayEnumerator(x):Unchecked.Equals(typeof x,\"string\")?Enumerator.StringEnumerator(x):\"GetEnumerator0\"in x?x.GetEnumerator0():x.GetEnumerator();\r\n };\r\n AttrProxy=UI.AttrProxy=Runtime$1.Class({},null,AttrProxy);\r\n AttrProxy.Create=function(name,value)\r\n {\r\n  return Attrs.Static(function(el)\r\n  {\r\n   DomUtility.SetAttr(el,name,value);\r\n  });\r\n };\r\n AttrProxy.Concat=function(xs)\r\n {\r\n  var x;\r\n  x=Array.ofSeqNonCopying(xs);\r\n  return Array.TreeReduce(Attrs.EmptyAttr(),AttrProxy.Append,x);\r\n };\r\n AttrProxy.Append=function(a,b)\r\n {\r\n  return Attrs.AppendTree(a,b);\r\n };\r\n AttrProxy.HandlerImpl=function(event,q)\r\n {\r\n  return Attrs.Static(function(el)\r\n  {\r\n   el.addEventListener(event,function(d)\r\n   {\r\n    return(q(el))(d);\r\n   },false);\r\n  });\r\n };\r\n Array.ofSeqNonCopying=function(xs)\r\n {\r\n  var q,o;\r\n  if(xs instanceof Global.Array)\r\n   return xs;\r\n  else\r\n   if(xs instanceof T)\r\n    return Arrays.ofList(xs);\r\n   else\r\n    if(xs===null)\r\n     return[];\r\n    else\r\n     {\r\n      q=[];\r\n      o=Enumerator.Get(xs);\r\n      try\r\n      {\r\n       while(o.MoveNext())\r\n        q.push(o.Current());\r\n       return q;\r\n      }\r\n      finally\r\n      {\r\n       if(typeof o==\"object\"&&\"Dispose\"in o)\r\n        o.Dispose();\r\n      }\r\n     }\r\n };\r\n Array.TreeReduce=function(defaultValue,reduction,array)\r\n {\r\n  var l;\r\n  function loop(off,len)\r\n  {\r\n   var $1,l2;\r\n   return len<=0?defaultValue:len===1&&(off>=0&&off<l)?Arrays.get(array,off):(l2=len/2>>0,reduction(loop(off,l2),loop(off+l2,len-l2)));\r\n  }\r\n  l=Arrays.length(array);\r\n  return loop(0,l);\r\n };\r\n Array.MapTreeReduce=function(mapping,defaultValue,reduction,array)\r\n {\r\n  var l;\r\n  function loop(off,len)\r\n  {\r\n   var $1,l2;\r\n   return len<=0?defaultValue:len===1&&(off>=0&&off<l)?mapping(Arrays.get(array,off)):(l2=len/2>>0,reduction(loop(off,l2),loop(off+l2,len-l2)));\r\n  }\r\n  l=Arrays.length(array);\r\n  return loop(0,l);\r\n };\r\n Array.mapInPlace=function(f,arr)\r\n {\r\n  var i,$1;\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=f(arr[i]);\r\n  return arr;\r\n };\r\n AssemblyName=AssemblyData.AssemblyName=Runtime$1.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,AssemblyName);\r\n ViewBuilder.B={\r\n  $:0\r\n };\r\n Docs.LinkElement=function(el,children)\r\n {\r\n  Docs.InsertDoc(el,children,null);\r\n };\r\n Docs.CreateTextNode=function()\r\n {\r\n  return{\r\n   Text:DomUtility.CreateText(\"\"),\r\n   Dirty:false,\r\n   Value:\"\"\r\n  };\r\n };\r\n Docs.UpdateTextNode=function(n,t)\r\n {\r\n  n.Value=t;\r\n  n.Dirty=true;\r\n };\r\n Docs.InsertDoc=function(parent,doc,pos)\r\n {\r\n  var d;\r\n  return doc!=null&&doc.$==1?Docs.InsertNode(parent,doc.$0.El,pos):doc!=null&&doc.$==2?(d=doc.$0,(d.Dirty=false,Docs.InsertDoc(parent,d.Current,pos))):doc==null?pos:doc!=null&&doc.$==4?Docs.InsertNode(parent,doc.$0.Text,pos):doc!=null&&doc.$==5?Docs.InsertNode(parent,doc.$0,pos):doc!=null&&doc.$==6?Arrays.foldBack(function($1,$2)\r\n  {\r\n   return $1==null||$1.constructor===Object?Docs.InsertDoc(parent,$1,$2):Docs.InsertNode(parent,$1,$2);\r\n  },doc.$0.Els,pos):Docs.InsertDoc(parent,doc.$0,Docs.InsertDoc(parent,doc.$1,pos));\r\n };\r\n Docs.CreateRunState=function(parent,doc)\r\n {\r\n  return RunState.New(NodeSet.get_Empty(),Docs.CreateElemNode(parent,Attrs.EmptyAttr(),doc));\r\n };\r\n Docs.PerformAnimatedUpdate=function(childrenOnly,st,doc)\r\n {\r\n  var b;\r\n  return An.get_UseAnimations()?(b=null,Concurrency.Delay(function()\r\n  {\r\n   var cur,change,enter;\r\n   cur=NodeSet.FindAll(doc);\r\n   change=Docs.ComputeChangeAnim(st,cur);\r\n   enter=Docs.ComputeEnterAnim(st,cur);\r\n   return Concurrency.Bind(An.Play(An.Append(change,Docs.ComputeExitAnim(st,cur))),function()\r\n   {\r\n    return Concurrency.Bind(Docs.SyncElemNodesNextFrame(childrenOnly,st),function()\r\n    {\r\n     return Concurrency.Bind(An.Play(enter),function()\r\n     {\r\n      st.PreviousNodes=cur;\r\n      return Concurrency.Return(null);\r\n     });\r\n    });\r\n   });\r\n  })):Docs.SyncElemNodesNextFrame(childrenOnly,st);\r\n };\r\n Docs.PerformSyncUpdate=function(childrenOnly,st,doc)\r\n {\r\n  var cur;\r\n  cur=NodeSet.FindAll(doc);\r\n  Docs.SyncElemNode(childrenOnly,st.Top);\r\n  st.PreviousNodes=cur;\r\n };\r\n Docs.InsertNode=function(parent,node,pos)\r\n {\r\n  DomUtility.InsertAt(parent,pos,node);\r\n  return node;\r\n };\r\n Docs.CreateElemNode=function(el,attr$1,children)\r\n {\r\n  var attr$2;\r\n  Docs.LinkElement(el,children);\r\n  attr$2=Attrs.Insert(el,attr$1);\r\n  return DocElemNode.New(attr$2,children,null,el,Fresh.Int(),Runtime$1.GetOptional(attr$2.OnAfterRender));\r\n };\r\n Docs.SyncElemNodesNextFrame=function(childrenOnly,st)\r\n {\r\n  function a(ok)\r\n  {\r\n   Global.requestAnimationFrame(function()\r\n   {\r\n    Docs.SyncElemNode(childrenOnly,st.Top);\r\n    ok();\r\n   });\r\n  }\r\n  return Settings.BatchUpdatesEnabled()?Concurrency.FromContinuations(function($1,$2,$3)\r\n  {\r\n   return a.apply(null,[$1,$2,$3]);\r\n  }):(Docs.SyncElemNode(childrenOnly,st.Top),Concurrency.Return(null));\r\n };\r\n Docs.ComputeExitAnim=function(st,cur)\r\n {\r\n  return An.Concat(Arrays.map(function(n)\r\n  {\r\n   return Attrs.GetExitAnim(n.Attr);\r\n  },NodeSet.ToArray(NodeSet.Except(cur,NodeSet.Filter(function(n)\r\n  {\r\n   return Attrs.HasExitAnim(n.Attr);\r\n  },st.PreviousNodes)))));\r\n };\r\n Docs.ComputeEnterAnim=function(st,cur)\r\n {\r\n  return An.Concat(Arrays.map(function(n)\r\n  {\r\n   return Attrs.GetEnterAnim(n.Attr);\r\n  },NodeSet.ToArray(NodeSet.Except(st.PreviousNodes,NodeSet.Filter(function(n)\r\n  {\r\n   return Attrs.HasEnterAnim(n.Attr);\r\n  },cur)))));\r\n };\r\n Docs.ComputeChangeAnim=function(st,cur)\r\n {\r\n  var relevant;\r\n  function a(n)\r\n  {\r\n   return Attrs.HasChangeAnim(n.Attr);\r\n  }\r\n  relevant=function(a$1)\r\n  {\r\n   return NodeSet.Filter(a,a$1);\r\n  };\r\n  return An.Concat(Arrays.map(function(n)\r\n  {\r\n   return Attrs.GetChangeAnim(n.Attr);\r\n  },NodeSet.ToArray(NodeSet.Intersect(relevant(st.PreviousNodes),relevant(cur)))));\r\n };\r\n Docs.SyncElemNode=function(childrenOnly,el)\r\n {\r\n  !childrenOnly?Docs.SyncElement(el):void 0;\r\n  Docs.Sync(el.Children);\r\n  Docs.AfterRender(el);\r\n };\r\n Docs.CreateEmbedNode=function()\r\n {\r\n  return{\r\n   Current:null,\r\n   Dirty:false\r\n  };\r\n };\r\n Docs.UpdateEmbedNode=function(node,upd)\r\n {\r\n  node.Current=upd;\r\n  node.Dirty=true;\r\n };\r\n Docs.SyncElement=function(el)\r\n {\r\n  function hasDirtyChildren(el$1)\r\n  {\r\n   function dirty(doc)\r\n   {\r\n    var d,t;\r\n    return doc!=null&&doc.$==0?dirty(doc.$0)||dirty(doc.$1):doc!=null&&doc.$==2?(d=doc.$0,d.Dirty||dirty(d.Current)):doc!=null&&doc.$==6&&(t=doc.$0,t.Dirty||Arrays.exists(hasDirtyChildren,t.Holes));\r\n   }\r\n   return dirty(el$1.Children);\r\n  }\r\n  Attrs.Sync(el.El,el.Attr);\r\n  hasDirtyChildren(el)?Docs.DoSyncElement(el):void 0;\r\n };\r\n Docs.Sync=function(doc)\r\n {\r\n  var d,t;\r\n  if(doc!=null&&doc.$==1)\r\n   Docs.SyncElemNode(false,doc.$0);\r\n  else\r\n   if(doc!=null&&doc.$==2)\r\n    Docs.Sync(doc.$0.Current);\r\n   else\r\n    if(doc==null)\r\n     ;\r\n    else\r\n     if(doc!=null&&doc.$==5)\r\n      ;\r\n     else\r\n      if(doc!=null&&doc.$==4)\r\n       {\r\n        d=doc.$0;\r\n        d.Dirty?(d.Text.nodeValue=d.Value,d.Dirty=false):void 0;\r\n       }\r\n      else\r\n       if(doc!=null&&doc.$==6)\r\n        {\r\n         t=doc.$0;\r\n         Arrays.iter(function(e)\r\n         {\r\n          Docs.SyncElemNode(false,e);\r\n         },t.Holes);\r\n         Arrays.iter(function(t$1)\r\n         {\r\n          Attrs.Sync(t$1[0],t$1[1]);\r\n         },t.Attrs);\r\n         Docs.AfterRender(t);\r\n        }\r\n       else\r\n        {\r\n         Docs.Sync(doc.$0);\r\n         Docs.Sync(doc.$1);\r\n        }\r\n };\r\n Docs.AfterRender=function(el)\r\n {\r\n  var m;\r\n  m=Runtime$1.GetOptional(el.Render);\r\n  m!=null&&m.$==1?(m.$0(el.El),Runtime$1.SetOptional(el,\"Render\",null)):void 0;\r\n };\r\n Docs.DoSyncElement=function(el)\r\n {\r\n  var parent,p,m;\r\n  function ins(doc,pos)\r\n  {\r\n   var d,t;\r\n   return doc!=null&&doc.$==1?doc.$0.El:doc!=null&&doc.$==2?(d=doc.$0,d.Dirty?(d.Dirty=false,Docs.InsertDoc(parent,d.Current,pos)):ins(d.Current,pos)):doc==null?pos:doc!=null&&doc.$==4?doc.$0.Text:doc!=null&&doc.$==5?doc.$0:doc!=null&&doc.$==6?(t=doc.$0,(t.Dirty?t.Dirty=false:void 0,Arrays.foldBack(function($1,$2)\r\n   {\r\n    return $1==null||$1.constructor===Object?ins($1,$2):$1;\r\n   },t.Els,pos))):ins(doc.$0,ins(doc.$1,pos));\r\n  }\r\n  parent=el.El;\r\n  DomNodes.Iter((p=el.El,function(e)\r\n  {\r\n   DomUtility.RemoveNode(p,e);\r\n  }),DomNodes.Except(DomNodes.DocChildren(el),DomNodes.Children(el.El,Runtime$1.GetOptional(el.Delimiters))));\r\n  ins(el.Children,(m=Runtime$1.GetOptional(el.Delimiters),m!=null&&m.$==1?m.$0[1]:null));\r\n };\r\n LoadAsm.fetchAsmData=function(folder,a)\r\n {\r\n  var url,b;\r\n  url=a.$0;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(TxtRuntime.AsyncMap(IO.asyncReadTextAtRuntime(false,\"D:\\\\Abe\\\\CIPHERWorkspace\\\\FSharpStation\\\\src\",\"\",\"JSON\",\"\",url.indexOf(\"/\")!=-1?url:folder+url),function(t)\r\n   {\r\n    return Unchecked.Equals(typeof t,\"string\")?JSON.parse(t):t;\r\n   }),function(a$1)\r\n   {\r\n    var n,prop,opt,s,j,prop$1,opt$1,d;\r\n    return Concurrency.Return((n=new AssemblyName({\r\n     $:0,\r\n     $0:(opt=(prop=\"asName\",prop in a$1?{\r\n      $:1,\r\n      $0:a$1[prop]\r\n     }:null),opt==null?null:opt.$0)\r\n    }),(s=new AssemblyRef({\r\n     $:0,\r\n     $0:url\r\n    }),(j=new JSCode({\r\n     $:0,\r\n     $0:(opt$1=(prop$1=\"js\",prop$1 in a$1?{\r\n      $:1,\r\n      $0:a$1[prop$1]\r\n     }:null),opt$1==null?null:opt$1.$0)\r\n    }),(d=Arrays.map(function(a$2)\r\n    {\r\n     return new AssemblyRef({\r\n      $:0,\r\n      $0:a$2\r\n     });\r\n    },a$1.dependencies),AssemblyDef.New(n,s,Arrays.map(function(mo)\r\n    {\r\n     var prop$2,opt$2;\r\n     return ModuleDef.New(new ModuleName({\r\n      $:0,\r\n      $0:(opt$2=(prop$2=\"moName\",prop$2 in mo?{\r\n       $:1,\r\n       $0:mo[prop$2]\r\n      }:null),opt$2==null?null:opt$2.$0)\r\n     }),Arrays.map(function(me)\r\n     {\r\n      var n$1,prop$3,opt$3,i,v,prop$4,opt$4,x,prop$5,opt$5,x$1,prop$6,opt$6;\r\n      n$1=new MethodName({\r\n       $:0,\r\n       $0:(opt$3=(prop$3=\"meName\",prop$3 in me?{\r\n        $:1,\r\n        $0:me[prop$3]\r\n       }:null),opt$3==null?null:opt$3.$0)\r\n      });\r\n      i=(v=(prop$4=\"isField\",prop$4 in me?{\r\n       $:1,\r\n       $0:me[prop$4]\r\n      }:null),(opt$4=v==null?null:{\r\n       $:1,\r\n       $0:1*v.$0\r\n      },opt$4==null?null:opt$4.$0))===1;\r\n      return MethodDef.New(n$1,TypeRef.New(new TypeName({\r\n       $:0,\r\n       $0:(opt$5=(x=me.type,(prop$5=\"tName\",prop$5 in x?{\r\n        $:1,\r\n        $0:x[prop$5]\r\n       }:null)),opt$5==null?null:opt$5.$0)\r\n      }),new AssemblyName({\r\n       $:0,\r\n       $0:(opt$6=(x$1=me.type,(prop$6=\"asm\",prop$6 in x$1?{\r\n        $:1,\r\n        $0:x$1[prop$6]\r\n       }:null)),opt$6==null?null:opt$6.$0)\r\n      })),Arrays.map(function(p)\r\n      {\r\n       var prop$7,opt$7,prop$8,opt$8;\r\n       return TypeRef.New(new TypeName({\r\n        $:0,\r\n        $0:(opt$7=(prop$7=\"tName\",prop$7 in p?{\r\n         $:1,\r\n         $0:p[prop$7]\r\n        }:null),opt$7==null?null:opt$7.$0)\r\n       }),new AssemblyName({\r\n        $:0,\r\n        $0:(opt$8=(prop$8=\"asm\",prop$8 in p?{\r\n         $:1,\r\n         $0:p[prop$8]\r\n        }:null),opt$8==null?null:opt$8.$0)\r\n       }));\r\n      },me.parms),i);\r\n     },mo.methods));\r\n    },a$1.modules),d,j))))));\r\n   });\r\n  });\r\n };\r\n DateUtil.TryParse=function(s)\r\n {\r\n  var d;\r\n  d=Date.parse(s);\r\n  return Global.isNaN(d)?null:{\r\n   $:1,\r\n   $0:d\r\n  };\r\n };\r\n Numeric.TryParse=function(s,min,max,r)\r\n {\r\n  var x,ok;\r\n  x=+s;\r\n  ok=x===x-x%1&&x>=min&&x<=max;\r\n  ok?r.set(x):void 0;\r\n  return ok;\r\n };\r\n ConcreteVar=UI.ConcreteVar=Runtime$1.Class({\r\n  get_View:function()\r\n  {\r\n   return this.view;\r\n  },\r\n  Set:function(v)\r\n  {\r\n   if(this.isConst)\r\n    (function($1)\r\n    {\r\n     return $1(\"WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal\");\r\n    }(function(s)\r\n    {\r\n     console.log(s);\r\n    }));\r\n   else\r\n    {\r\n     Snap.Obsolete(this.snap);\r\n     this.current=v;\r\n     this.snap=Snap.New({\r\n      $:2,\r\n      $0:v,\r\n      $1:[]\r\n     });\r\n    }\r\n  },\r\n  Get:function()\r\n  {\r\n   return this.current;\r\n  },\r\n  UpdateMaybe:function(f)\r\n  {\r\n   var m;\r\n   m=f(this.Get());\r\n   m!=null&&m.$==1?this.Set(m.$0):void 0;\r\n  }\r\n },Var,ConcreteVar);\r\n ConcreteVar.New=Runtime$1.Ctor(function(isConst,initSnap,initValue)\r\n {\r\n  var $this;\r\n  $this=this;\r\n  Var.New.call(this);\r\n  this.isConst=isConst;\r\n  this.current=initValue;\r\n  this.snap=initSnap;\r\n  this.view=function()\r\n  {\r\n   return $this.snap;\r\n  };\r\n  this.id=Fresh.Int();\r\n },ConcreteVar);\r\n SC$2.$cctor=function()\r\n {\r\n  SC$2.$cctor=Global.ignore;\r\n  SC$2.EndPoint=\"?\";\r\n  SC$2.AjaxProvider=new XhrProvider.New();\r\n };\r\n DictionaryUtil.alreadyAdded=function()\r\n {\r\n  return Operators.FailWith(\"An item with the same key has already been added.\");\r\n };\r\n DictionaryUtil.notPresent=function()\r\n {\r\n  return Operators.FailWith(\"The given key was not present in the dictionary.\");\r\n };\r\n ReturnQueue.tryGet=function(md)\r\n {\r\n  var o,arr,m,narr;\r\n  o=ReturnQueue.tryGetS(md);\r\n  return o==null?null:(arr=o.$0,(m=Seq.tryHead(arr),m!=null&&m.$==1?(narr=Slice.array(arr,{\r\n   $:1,\r\n   $0:1\r\n  },null),(ReturnQueue.queues().Remove(md),ReturnQueue.queues().Add(md,narr),{\r\n   $:1,\r\n   $0:m.$0\r\n  })):null));\r\n };\r\n ReturnQueue.tryGetS=function(md)\r\n {\r\n  return(ParseO.tryParseWith(function(a)\r\n  {\r\n   var o;\r\n   o=null;\r\n   return[ReturnQueue.queues().TryGetValue(a,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o];\r\n  }))(md);\r\n };\r\n ReturnQueue.queues=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.queues;\r\n };\r\n ReturnQueue.add=function(md,fs)\r\n {\r\n  var narr,m;\r\n  narr=(m=ReturnQueue.tryGetS(md),m==null?[fs]:(ReturnQueue.queues().Remove(md),m.$0.concat([fs])));\r\n  ReturnQueue.queues().Add(md,narr);\r\n };\r\n T$1=Enumerator.T=Runtime$1.Class({\r\n  MoveNext:function()\r\n  {\r\n   return this.n(this);\r\n  },\r\n  Current:function()\r\n  {\r\n   return this.c;\r\n  },\r\n  Dispose:function()\r\n  {\r\n   if(this.d)\r\n    this.d(this);\r\n  }\r\n },Obj,T$1);\r\n T$1.New=Runtime$1.Ctor(function(s,c,n,d)\r\n {\r\n  Obj.New.call(this);\r\n  this.s=s;\r\n  this.c=c;\r\n  this.n=n;\r\n  this.d=d;\r\n },T$1);\r\n Storage.InMemory=function(init)\r\n {\r\n  return new ArrayStorage.New(init);\r\n };\r\n ModuleDef.New=function(name,methods)\r\n {\r\n  return{\r\n   name:name,\r\n   methods:methods\r\n  };\r\n };\r\n JSCode=AssemblyData.JSCode=Runtime$1.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,JSCode);\r\n AsyncBody.New=function(k,ct)\r\n {\r\n  return{\r\n   k:k,\r\n   ct:ct\r\n  };\r\n };\r\n SC$3.$cctor=function()\r\n {\r\n  SC$3.$cctor=Global.ignore;\r\n  SC$3.noneCT=CT.New(false,[]);\r\n  SC$3.scheduler=new Scheduler.New();\r\n  SC$3.defCTS=[new CancellationTokenSource.New()];\r\n  SC$3.Zero=Concurrency.Return();\r\n  SC$3.GetCT=function(c)\r\n  {\r\n   c.k({\r\n    $:0,\r\n    $0:c.ct\r\n   });\r\n  };\r\n };\r\n SC$4.$cctor=function()\r\n {\r\n  SC$4.$cctor=Global.ignore;\r\n  SC$4.dlls=[\"/dlls/WebSharper.Main.dll\",\"/dlls/WebSharper.Collections.dll\",\"/dlls/WebSharper.Control.dll\",\"/dlls/WebSharper.Web.dll\",\"/dlls/WebSharper.Sitelets.dll\",\"/dlls/WebSharper.UI.dll\",\"/dlls/WebSharper.UI.Templating.Runtime.dll\",\"/dlls/WebSharper.Data.dll\"];\r\n };\r\n Seq.last=function(s)\r\n {\r\n  var e,$1;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   if(!e.MoveNext())\r\n    $1=Seq.insufficient();\r\n   else\r\n    {\r\n     while(e.MoveNext())\r\n      ;\r\n     $1=e.Current();\r\n    }\r\n   return $1;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.insufficient=function()\r\n {\r\n  return Operators.FailWith(\"The input sequence has an insufficient number of elements.\");\r\n };\r\n Arrays.mapFold=function(f,zero,arr)\r\n {\r\n  var acc,r,i,$1,p;\r\n  r=new Global.Array(arr.length);\r\n  acc=zero;\r\n  for(i=0,$1=arr.length-1;i<=$1;i++){\r\n   p=f(acc,arr[i]);\r\n   r[i]=p[0];\r\n   acc=p[1];\r\n  }\r\n  return[r,acc];\r\n };\r\n Seq.tryHead=function(s)\r\n {\r\n  var e;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   return e.MoveNext()?{\r\n    $:1,\r\n    $0:e.Current()\r\n   }:null;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n CT.New=function(IsCancellationRequested,Registrations)\r\n {\r\n  return{\r\n   c:IsCancellationRequested,\r\n   r:Registrations\r\n  };\r\n };\r\n DomUtility.CreateElement=function(name)\r\n {\r\n  return DomUtility.Doc().createElement(name);\r\n };\r\n DomUtility.SetAttr=function(el,name,value)\r\n {\r\n  el.setAttribute(name,value);\r\n };\r\n DomUtility.CreateText=function(s)\r\n {\r\n  return DomUtility.Doc().createTextNode(s);\r\n };\r\n DomUtility.ChildrenArray=function(element)\r\n {\r\n  var a,i,$1;\r\n  a=[];\r\n  for(i=0,$1=element.childNodes.length-1;i<=$1;i++)a.push(element.childNodes[i]);\r\n  return a;\r\n };\r\n DomUtility.Doc=function()\r\n {\r\n  SC$7.$cctor();\r\n  return SC$7.Doc;\r\n };\r\n DomUtility.IterSelector=function(el,selector,f)\r\n {\r\n  var l,i,$1;\r\n  l=el.querySelectorAll(selector);\r\n  for(i=0,$1=l.length-1;i<=$1;i++)f(l[i]);\r\n };\r\n DomUtility.AddClass=function(element,cl)\r\n {\r\n  var c;\r\n  c=DomUtility.getClass(element);\r\n  c===\"\"?DomUtility.setClass(element,cl):!DomUtility.clsRE(cl).test(c)?DomUtility.setClass(element,c+\" \"+cl):void 0;\r\n };\r\n DomUtility.RemoveClass=function(element,cl)\r\n {\r\n  var _this;\r\n  DomUtility.setClass(element,(_this=DomUtility.clsRE(cl),DomUtility.getClass(element).replace(_this,function($1,$2,$3)\r\n  {\r\n   return $2===\"\"||$3===\"\"?\"\":\" \";\r\n  })));\r\n };\r\n DomUtility.InsertAt=function(parent,pos,node)\r\n {\r\n  var m;\r\n  if(!(node.parentNode===parent&&pos===(m=node.nextSibling,Unchecked.Equals(m,null)?null:m)))\r\n   parent.insertBefore(node,pos);\r\n };\r\n DomUtility.getClass=function(element)\r\n {\r\n  return element instanceof Global.SVGElement?element.getAttribute(\"class\"):element.className;\r\n };\r\n DomUtility.setClass=function(element,value)\r\n {\r\n  if(element instanceof Global.SVGElement)\r\n   element.setAttribute(\"class\",value);\r\n  else\r\n   element.className=value;\r\n };\r\n DomUtility.clsRE=function(cls)\r\n {\r\n  return new Global.RegExp(\"(\\\\s+|^)\"+cls+\"(?:\\\\s+\"+cls+\")*(\\\\s+|$)\",\"g\");\r\n };\r\n DomUtility.RemoveNode=function(parent,el)\r\n {\r\n  if(el.parentNode===parent)\r\n   parent.removeChild(el);\r\n };\r\n AttrModule.Value=function(_var)\r\n {\r\n  function g(a)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:a\r\n   };\r\n  }\r\n  return AttrModule.CustomValue(_var,Global.id,function(x)\r\n  {\r\n   return g(Global.id(x));\r\n  });\r\n };\r\n AttrModule.Class=function(name)\r\n {\r\n  return AttrModule.ClassPred(name,true);\r\n };\r\n AttrModule.CustomValue=function(_var,toString,fromString)\r\n {\r\n  return AttrModule.CustomVar(_var,function($1,$2)\r\n  {\r\n   $1.value=toString($2);\r\n  },function(e)\r\n  {\r\n   return fromString(e.value);\r\n  });\r\n };\r\n AttrModule.ClassPred=function(name,isSet)\r\n {\r\n  return Attrs.Static(function(el)\r\n  {\r\n   if(isSet)\r\n    DomUtility.AddClass(el,name);\r\n   else\r\n    DomUtility.RemoveClass(el,name);\r\n  });\r\n };\r\n AttrModule.CustomVar=function(_var,set,get)\r\n {\r\n  function onChange(el,e)\r\n  {\r\n   return _var.UpdateMaybe(function(v)\r\n   {\r\n    var m,$1;\r\n    m=get(el);\r\n    return m!=null&&m.$==1&&(!Unchecked.Equals(m.$0,v)&&($1=[m,m.$0],true))?$1[0]:null;\r\n   });\r\n  }\r\n  function set$1(e,v)\r\n  {\r\n   var m,$1;\r\n   m=get(e);\r\n   return m!=null&&m.$==1&&(Unchecked.Equals(m.$0,v)&&($1=m.$0,true))?null:set(e,v);\r\n  }\r\n  return AttrProxy.Concat([AttrModule.Handler(\"change\",function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return onChange($1,$2);\r\n   };\r\n  }),AttrModule.Handler(\"input\",function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return onChange($1,$2);\r\n   };\r\n  }),AttrModule.Handler(\"keypress\",function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return onChange($1,$2);\r\n   };\r\n  }),AttrModule.DynamicCustom(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return set$1($1,$2);\r\n   };\r\n  },_var.get_View())]);\r\n };\r\n AttrModule.Handler=function(name,callback)\r\n {\r\n  return Attrs.Static(function(el)\r\n  {\r\n   el.addEventListener(name,function(d)\r\n   {\r\n    return(callback(el))(d);\r\n   },false);\r\n  });\r\n };\r\n AttrModule.DynamicCustom=function(set,view)\r\n {\r\n  return Attrs.Dynamic(view,set);\r\n };\r\n Attrs.Static=function(attr$1)\r\n {\r\n  return new AttrProxy({\r\n   $:3,\r\n   $0:attr$1\r\n  });\r\n };\r\n Attrs.Updates=function(dyn)\r\n {\r\n  return Array.MapTreeReduce(function(x)\r\n  {\r\n   return x.NChanged();\r\n  },View.Const(),View.Map2Unit,dyn.DynNodes);\r\n };\r\n Attrs.AppendTree=function(a,b)\r\n {\r\n  var x;\r\n  return a===null?b:b===null?a:(x=new AttrProxy({\r\n   $:2,\r\n   $0:a,\r\n   $1:b\r\n  }),(Attrs.SetFlags(x,Attrs.Flags(a)|Attrs.Flags(b)),x));\r\n };\r\n Attrs.EmptyAttr=function()\r\n {\r\n  SC$10.$cctor();\r\n  return SC$10.EmptyAttr;\r\n };\r\n Attrs.Insert=function(elem,tree)\r\n {\r\n  var nodes,oar,arr;\r\n  function loop(node)\r\n  {\r\n   if(!(node===null))\r\n    if(node!=null&&node.$==1)\r\n     nodes.push(node.$0);\r\n    else\r\n     if(node!=null&&node.$==2)\r\n      {\r\n       loop(node.$0);\r\n       loop(node.$1);\r\n      }\r\n     else\r\n      if(node!=null&&node.$==3)\r\n       node.$0(elem);\r\n      else\r\n       if(node!=null&&node.$==4)\r\n        oar.push(node.$0);\r\n  }\r\n  nodes=[];\r\n  oar=[];\r\n  loop(tree);\r\n  arr=nodes.slice(0);\r\n  return Dyn.New(elem,Attrs.Flags(tree),arr,oar.length===0?null:{\r\n   $:1,\r\n   $0:function(el)\r\n   {\r\n    Seq.iter(function(f)\r\n    {\r\n     f(el);\r\n    },oar);\r\n   }\r\n  });\r\n };\r\n Attrs.HasExitAnim=function(attr$1)\r\n {\r\n  var flag;\r\n  flag=2;\r\n  return(attr$1.DynFlags&flag)===flag;\r\n };\r\n Attrs.GetExitAnim=function(dyn)\r\n {\r\n  return Attrs.GetAnim(dyn,function($1,$2)\r\n  {\r\n   return $1.NGetExitAnim($2);\r\n  });\r\n };\r\n Attrs.HasEnterAnim=function(attr$1)\r\n {\r\n  var flag;\r\n  flag=1;\r\n  return(attr$1.DynFlags&flag)===flag;\r\n };\r\n Attrs.GetEnterAnim=function(dyn)\r\n {\r\n  return Attrs.GetAnim(dyn,function($1,$2)\r\n  {\r\n   return $1.NGetEnterAnim($2);\r\n  });\r\n };\r\n Attrs.HasChangeAnim=function(attr$1)\r\n {\r\n  var flag;\r\n  flag=4;\r\n  return(attr$1.DynFlags&flag)===flag;\r\n };\r\n Attrs.GetChangeAnim=function(dyn)\r\n {\r\n  return Attrs.GetAnim(dyn,function($1,$2)\r\n  {\r\n   return $1.NGetChangeAnim($2);\r\n  });\r\n };\r\n Attrs.SetFlags=function(a,f)\r\n {\r\n  a.flags=f;\r\n };\r\n Attrs.Flags=function(a)\r\n {\r\n  return a!==null&&a.hasOwnProperty(\"flags\")?a.flags:0;\r\n };\r\n Attrs.GetAnim=function(dyn,f)\r\n {\r\n  return An.Concat(Arrays.map(function(n)\r\n  {\r\n   return f(n,dyn.DynElem);\r\n  },dyn.DynNodes));\r\n };\r\n Attrs.Sync=function(elem,dyn)\r\n {\r\n  Arrays.iter(function(d)\r\n  {\r\n   d.NSync(elem);\r\n  },dyn.DynNodes);\r\n };\r\n Attrs.Dynamic=function(view,set)\r\n {\r\n  return new AttrProxy({\r\n   $:1,\r\n   $0:new DynamicAttrNode.New(view,set)\r\n  });\r\n };\r\n TypeName=AssemblyData.TypeName=Runtime$1.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,TypeName);\r\n TypeRef.New=function(name,asm)\r\n {\r\n  return{\r\n   name:name,\r\n   asm:asm\r\n  };\r\n };\r\n MethodDef.New=function(name,retType,parms,isField)\r\n {\r\n  return{\r\n   name:name,\r\n   retType:retType,\r\n   parms:parms,\r\n   isField:isField\r\n  };\r\n };\r\n ModuleName=AssemblyData.ModuleName=Runtime$1.Class({\r\n  get_Id2:function()\r\n  {\r\n   return Strings.Replace(this.get_Id(),\"+\",\".\");\r\n  },\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,ModuleName);\r\n MethodName=AssemblyData.MethodName=Runtime$1.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,MethodName);\r\n SC$5.$cctor=function()\r\n {\r\n  SC$5.$cctor=Global.ignore;\r\n  SC$5.LoadedTemplates=new Dictionary.New$5();\r\n  SC$5.LocalTemplatesLoaded=false;\r\n  SC$5.TextHoleRE=\"\\\\${([^}]+)}\";\r\n };\r\n HashSet=Collections.HashSet=Runtime$1.Class({\r\n  Add:function(item)\r\n  {\r\n   return this.add(item);\r\n  },\r\n  Contains:function(item)\r\n  {\r\n   var arr;\r\n   arr=this.data[this.hash(item)];\r\n   return arr==null?false:this.arrContains(item,arr);\r\n  },\r\n  add:function(item)\r\n  {\r\n   var h,arr;\r\n   h=this.hash(item);\r\n   arr=this.data[h];\r\n   return arr==null?(this.data[h]=[item],this.count=this.count+1,true):this.arrContains(item,arr)?false:(arr.push(item),this.count=this.count+1,true);\r\n  },\r\n  arrContains:function(item,arr)\r\n  {\r\n   var c,i,$1,l;\r\n   c=true;\r\n   i=0;\r\n   l=arr.length;\r\n   while(c&&i<l)\r\n    if(this.equals.apply(null,[arr[i],item]))\r\n     c=false;\r\n    else\r\n     i=i+1;\r\n   return!c;\r\n  },\r\n  ExceptWith:function(xs)\r\n  {\r\n   var e;\r\n   e=Enumerator.Get(xs);\r\n   try\r\n   {\r\n    while(e.MoveNext())\r\n     this.Remove(e.Current());\r\n   }\r\n   finally\r\n   {\r\n    if(typeof e==\"object\"&&\"Dispose\"in e)\r\n     e.Dispose();\r\n   }\r\n  },\r\n  get_Count:function()\r\n  {\r\n   return this.count;\r\n  },\r\n  CopyTo:function(arr)\r\n  {\r\n   var i,all,i$1,$1;\r\n   i=0;\r\n   all=HashSetUtil.concat(this.data);\r\n   for(i$1=0,$1=all.length-1;i$1<=$1;i$1++)Arrays.set(arr,i$1,all[i$1]);\r\n  },\r\n  IntersectWith:function(xs)\r\n  {\r\n   var other,all,i,$1,item;\r\n   other=new HashSet.New$4(xs,this.equals,this.hash);\r\n   all=HashSetUtil.concat(this.data);\r\n   for(i=0,$1=all.length-1;i<=$1;i++){\r\n    item=all[i];\r\n    !other.Contains(item)?this.Remove(item):void 0;\r\n   }\r\n  },\r\n  Remove:function(item)\r\n  {\r\n   var arr;\r\n   arr=this.data[this.hash(item)];\r\n   return arr==null?false:this.arrRemove(item,arr)&&(this.count=this.count-1,true);\r\n  },\r\n  arrRemove:function(item,arr)\r\n  {\r\n   var c,i,$1,l;\r\n   c=true;\r\n   i=0;\r\n   l=arr.length;\r\n   while(c&&i<l)\r\n    if(this.equals.apply(null,[arr[i],item]))\r\n     {\r\n      arr.splice.apply(arr,[i,1]);\r\n      c=false;\r\n     }\r\n    else\r\n     i=i+1;\r\n   return!c;\r\n  },\r\n  GetEnumerator:function()\r\n  {\r\n   return Enumerator.Get(HashSetUtil.concat(this.data));\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return Enumerator.Get(HashSetUtil.concat(this.data));\r\n  }\r\n },Obj,HashSet);\r\n HashSet.New$3=Runtime$1.Ctor(function()\r\n {\r\n  HashSet.New$4.call(this,[],Unchecked.Equals,Unchecked.Hash);\r\n },HashSet);\r\n HashSet.New$4=Runtime$1.Ctor(function(init,equals,hash)\r\n {\r\n  var e;\r\n  Obj.New.call(this);\r\n  this.equals=equals;\r\n  this.hash=hash;\r\n  this.data=[];\r\n  this.count=0;\r\n  e=Enumerator.Get(init);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    this.add(e.Current());\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n },HashSet);\r\n HashSet.New$2=Runtime$1.Ctor(function(init)\r\n {\r\n  HashSet.New$4.call(this,init,Unchecked.Equals,Unchecked.Hash);\r\n },HashSet);\r\n An.get_UseAnimations=function()\r\n {\r\n  return Anims.UseAnimations();\r\n };\r\n An.Play=function(anim)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(An.Run(Global.ignore,Anims.Actions(anim)),function()\r\n   {\r\n    Anims.Finalize(anim);\r\n    return Concurrency.Return(null);\r\n   });\r\n  });\r\n };\r\n An.Append=function(a,a$1)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:AppendList.Append(a.$0,a$1.$0)\r\n  };\r\n };\r\n An.Run=function(k,anim)\r\n {\r\n  var dur;\r\n  function a(ok)\r\n  {\r\n   function loop(start,now)\r\n   {\r\n    var t;\r\n    t=now-start;\r\n    anim.Compute(t);\r\n    k();\r\n    return t<=dur?void Global.requestAnimationFrame(function(t$1)\r\n    {\r\n     loop(start,t$1);\r\n    }):ok();\r\n   }\r\n   Global.requestAnimationFrame(function(t)\r\n   {\r\n    loop(t,t);\r\n   });\r\n  }\r\n  dur=anim.Duration;\r\n  return dur===0?Concurrency.Zero():Concurrency.FromContinuations(function($1,$2,$3)\r\n  {\r\n   return a.apply(null,[$1,$2,$3]);\r\n  });\r\n };\r\n An.Concat=function(xs)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:AppendList.Concat(Seq.map(Anims.List,xs))\r\n  };\r\n };\r\n An.get_Empty=function()\r\n {\r\n  return{\r\n   $:0,\r\n   $0:AppendList.Empty()\r\n  };\r\n };\r\n Settings.BatchUpdatesEnabled=function()\r\n {\r\n  SC$6.$cctor();\r\n  return SC$6.BatchUpdatesEnabled;\r\n };\r\n Mailbox.StartProcessor=function(procAsync)\r\n {\r\n  var st;\r\n  function work()\r\n  {\r\n   var b;\r\n   b=null;\r\n   return Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.Bind(procAsync,function()\r\n    {\r\n     var m;\r\n     m=st[0];\r\n     return m===1?(st[0]=0,Concurrency.Zero()):m===2?(st[0]=1,work()):Concurrency.Zero();\r\n    });\r\n   });\r\n  }\r\n  st=[0];\r\n  return function()\r\n  {\r\n   var m;\r\n   m=st[0];\r\n   m===0?(st[0]=1,Concurrency.Start(work(),null)):m===1?st[0]=2:void 0;\r\n  };\r\n };\r\n IO.asyncReadTextAtRuntime=function(forFSI,defaultResolutionFolder,resolutionFolder,formatName,encodingStr,uri)\r\n {\r\n  function a(ok,ko)\r\n  {\r\n   var p,l,settings,r,fn;\r\n   p=(l=uri.toLowerCase(),Strings.StartsWith(l,\"jsonp|\")?[uri.substring(6),true]:Strings.StartsWith(l,\"json|\")?[uri.substring(5),false]:[uri,false]);\r\n   settings=(r={},r.dataType=\"json\",r.success=function(data)\r\n   {\r\n    return ok(data);\r\n   },r.error=function(a$1,a$2,err)\r\n   {\r\n    return ko(new Error(err));\r\n   },r);\r\n   p[1]?(fn=Pervasives$1.randomFunctionName(),settings.dataType=\"jsonp\",settings.jsonp=\"prefix\",settings.jsonpCallback=\"jsonp\"+fn):void 0;\r\n   $.ajax(p[0],settings);\r\n  }\r\n  return Concurrency.FromContinuations(function($1,$2,$3)\r\n  {\r\n   return a.apply(null,[$1,$2,$3]);\r\n  });\r\n };\r\n Fresh.Int=function()\r\n {\r\n  Fresh.set_counter(Fresh.counter()+1);\r\n  return Fresh.counter();\r\n };\r\n Fresh.set_counter=function($1)\r\n {\r\n  SC$9.$cctor();\r\n  SC$9.counter=$1;\r\n };\r\n Fresh.counter=function()\r\n {\r\n  SC$9.$cctor();\r\n  return SC$9.counter;\r\n };\r\n XhrProvider=Remoting$1.XhrProvider=Runtime$1.Class({\r\n  Async:function(url,headers,data,ok,err)\r\n  {\r\n   Remoting$1.ajax(true,url,headers,data,ok,err,function()\r\n   {\r\n    Remoting$1.ajax(true,url,headers,data,ok,err,void 0);\r\n   });\r\n  }\r\n },Obj,XhrProvider);\r\n XhrProvider.New=Runtime$1.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },XhrProvider);\r\n ArrayStorage=Storage.ArrayStorage=Runtime$1.Class({\r\n  SSet:function(coll)\r\n  {\r\n   return Arrays.ofSeq(coll);\r\n  },\r\n  SInit:function()\r\n  {\r\n   return this.init;\r\n  }\r\n },Obj,ArrayStorage);\r\n ArrayStorage.New=Runtime$1.Ctor(function(init)\r\n {\r\n  Obj.New.call(this);\r\n  this.init=init;\r\n },ArrayStorage);\r\n DocElemNode=UI.DocElemNode=Runtime$1.Class({\r\n  Equals:function(o)\r\n  {\r\n   return this.ElKey===o.ElKey;\r\n  },\r\n  GetHashCode:function()\r\n  {\r\n   return this.ElKey;\r\n  }\r\n },null,DocElemNode);\r\n DocElemNode.New=function(Attr,Children,Delimiters,El,ElKey,Render)\r\n {\r\n  var $1;\r\n  return new DocElemNode(($1={\r\n   Attr:Attr,\r\n   Children:Children,\r\n   El:El,\r\n   ElKey:ElKey\r\n  },(Runtime$1.SetOptional($1,\"Delimiters\",Delimiters),Runtime$1.SetOptional($1,\"Render\",Render),$1)));\r\n };\r\n Scheduler=Concurrency.Scheduler=Runtime$1.Class({\r\n  Fork:function(action)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   this.robin.push(action);\r\n   this.idle?(this.idle=false,Global.setTimeout(function()\r\n   {\r\n    $this.tick();\r\n   },0)):void 0;\r\n  },\r\n  tick:function()\r\n  {\r\n   var loop,$this,t;\r\n   $this=this;\r\n   t=Date.now();\r\n   loop=true;\r\n   while(loop)\r\n    if(this.robin.length===0)\r\n     {\r\n      this.idle=true;\r\n      loop=false;\r\n     }\r\n    else\r\n     {\r\n      (this.robin.shift())();\r\n      Date.now()-t>40?(Global.setTimeout(function()\r\n      {\r\n       $this.tick();\r\n      },0),loop=false):void 0;\r\n     }\r\n  }\r\n },Obj,Scheduler);\r\n Scheduler.New=Runtime$1.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n  this.idle=true;\r\n  this.robin=[];\r\n },Scheduler);\r\n OperationCanceledException=WebSharper.OperationCanceledException=Runtime$1.Class({},Error,OperationCanceledException);\r\n OperationCanceledException.New=Runtime$1.Ctor(function(ct)\r\n {\r\n  OperationCanceledException.New$1.call(this,\"The operation was canceled.\",null,ct);\r\n },OperationCanceledException);\r\n OperationCanceledException.New$1=Runtime$1.Ctor(function(message,inner,ct)\r\n {\r\n  this.message=message;\r\n  this.inner=inner;\r\n  Object.setPrototypeOf(this,OperationCanceledException.prototype);\r\n  this.ct=ct;\r\n },OperationCanceledException);\r\n CancellationTokenSource=WebSharper.CancellationTokenSource=Runtime$1.Class({},Obj,CancellationTokenSource);\r\n CancellationTokenSource.New=Runtime$1.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n  this.c=false;\r\n  this.pending=null;\r\n  this.r=[];\r\n  this.init=1;\r\n },CancellationTokenSource);\r\n Elt=UI.Elt=Runtime$1.Class({},Doc,Elt);\r\n Elt.New=function(el,attr$1,children)\r\n {\r\n  var node,rvUpdates;\r\n  node=Docs.CreateElemNode(el,attr$1,children.docNode);\r\n  rvUpdates=Updates.Create(children.updates);\r\n  return new Elt.New$1({\r\n   $:1,\r\n   $0:node\r\n  },View.Map2Unit(Attrs.Updates(node.Attr),rvUpdates.v),el,rvUpdates);\r\n };\r\n Elt.New$1=Runtime$1.Ctor(function(docNode,updates,elt,rvUpdates)\r\n {\r\n  Doc.New.call(this,docNode,updates);\r\n  this.docNode$1=docNode;\r\n  this.updates$1=updates;\r\n  this.elt=elt;\r\n  this.rvUpdates=rvUpdates;\r\n },Elt);\r\n Prepare.convertTextNode=function(n)\r\n {\r\n  var m,li,$1,s,strRE,hole;\r\n  m=null;\r\n  li=0;\r\n  s=n.textContent;\r\n  strRE=new Global.RegExp(Templates.TextHoleRE(),\"g\");\r\n  while(m=strRE.exec(s),m!==null)\r\n   {\r\n    n.parentNode.insertBefore(self.document.createTextNode(Slice.string(s,{\r\n     $:1,\r\n     $0:li\r\n    },{\r\n     $:1,\r\n     $0:strRE.lastIndex-Arrays.get(m,0).length-1\r\n    })),n);\r\n    li=strRE.lastIndex;\r\n    hole=self.document.createElement(\"span\");\r\n    hole.setAttribute(\"ws-replace\",Arrays.get(m,1).toLowerCase());\r\n    n.parentNode.insertBefore(hole,n);\r\n   }\r\n  strRE.lastIndex=0;\r\n  n.textContent=Slice.string(s,{\r\n   $:1,\r\n   $0:li\r\n  },null);\r\n };\r\n Prepare.failNotLoaded=function(name)\r\n {\r\n  console.warn(\"Instantiating non-loaded template\",name);\r\n };\r\n Prepare.fillTextHole=function(instance,fillWith,templateName)\r\n {\r\n  var m;\r\n  m=instance.querySelector(\"[ws-replace]\");\r\n  return Unchecked.Equals(m,null)?(console.warn(\"Filling non-existent text hole\",templateName),null):(m.parentNode.replaceChild(new Global.Text(fillWith),m),{\r\n   $:1,\r\n   $0:m.getAttribute(\"ws-replace\")\r\n  });\r\n };\r\n Prepare.removeHolesExcept=function(instance,dontRemove)\r\n {\r\n  function run(attrName)\r\n  {\r\n   DomUtility.IterSelector(instance,\"[\"+attrName+\"]\",function(e)\r\n   {\r\n    if(!dontRemove.Contains(e.getAttribute(attrName)))\r\n     e.removeAttribute(attrName);\r\n   });\r\n  }\r\n  run(\"ws-attr\");\r\n  run(\"ws-onafterrender\");\r\n  run(\"ws-var\");\r\n  DomUtility.IterSelector(instance,\"[ws-hole]\",function(e)\r\n  {\r\n   if(!dontRemove.Contains(e.getAttribute(\"ws-hole\")))\r\n    {\r\n     e.removeAttribute(\"ws-hole\");\r\n     while(e.hasChildNodes())\r\n      e.removeChild(e.lastChild);\r\n    }\r\n  });\r\n  DomUtility.IterSelector(instance,\"[ws-replace]\",function(e)\r\n  {\r\n   if(!dontRemove.Contains(e.getAttribute(\"ws-replace\")))\r\n    e.parentNode.removeChild(e);\r\n  });\r\n  DomUtility.IterSelector(instance,\"[ws-on]\",function(e)\r\n  {\r\n   e.setAttribute(\"ws-on\",Strings.concat(\" \",Arrays.filter(function(x)\r\n   {\r\n    return dontRemove.Contains(Arrays.get(Strings.SplitChars(x,[\":\"],1),1));\r\n   },Strings.SplitChars(e.getAttribute(\"ws-on\"),[\" \"],1))));\r\n  });\r\n  DomUtility.IterSelector(instance,\"[ws-attr-holes]\",function(e)\r\n  {\r\n   var holeAttrs,i,$1,attrName,_this;\r\n   holeAttrs=Strings.SplitChars(e.getAttribute(\"ws-attr-holes\"),[\" \"],1);\r\n   for(i=0,$1=holeAttrs.length-1;i<=$1;i++){\r\n    attrName=Arrays.get(holeAttrs,i);\r\n    e.setAttribute(attrName,(_this=new Global.RegExp(Templates.TextHoleRE(),\"g\"),e.getAttribute(attrName).replace(_this,function($2,$3)\r\n    {\r\n     return dontRemove.Contains($3)?$2:\"\";\r\n    })));\r\n   }\r\n  });\r\n };\r\n Prepare.fillInstanceAttrs=function(instance,fillWith)\r\n {\r\n  var name,m,i,$1,a;\r\n  Prepare.convertAttrs(fillWith);\r\n  name=fillWith.nodeName.toLowerCase();\r\n  m=instance.querySelector(\"[ws-attr=\"+name+\"]\");\r\n  if(Unchecked.Equals(m,null))\r\n   console.warn(\"Filling non-existent attr hole\",name);\r\n  else\r\n   {\r\n    m.removeAttribute(\"ws-attr\");\r\n    for(i=0,$1=fillWith.attributes.length-1;i<=$1;i++){\r\n     a=fillWith.attributes.item(i);\r\n     a.name===\"class\"&&m.hasAttribute(\"class\")?m.setAttribute(\"class\",m.getAttribute(\"class\")+\" \"+a.nodeValue):m.setAttribute(a.name,a.nodeValue);\r\n    }\r\n   }\r\n };\r\n Prepare.mapHoles=function(t,mappings)\r\n {\r\n  function run(attrName)\r\n  {\r\n   DomUtility.IterSelector(t,\"[\"+attrName+\"]\",function(e)\r\n   {\r\n    var m,o;\r\n    m=(o=null,[mappings.TryGetValue(e.getAttribute(attrName).toLowerCase(),{\r\n     get:function()\r\n     {\r\n      return o;\r\n     },\r\n     set:function(v)\r\n     {\r\n      o=v;\r\n     }\r\n    }),o]);\r\n    m[0]?e.setAttribute(attrName,m[1]):void 0;\r\n   });\r\n  }\r\n  run(\"ws-hole\");\r\n  run(\"ws-replace\");\r\n  run(\"ws-attr\");\r\n  run(\"ws-onafterrender\");\r\n  run(\"ws-var\");\r\n  DomUtility.IterSelector(t,\"[ws-on]\",function(e)\r\n  {\r\n   e.setAttribute(\"ws-on\",Strings.concat(\" \",Arrays.map(function(x)\r\n   {\r\n    var a,m,o;\r\n    a=Strings.SplitChars(x,[\":\"],1);\r\n    m=(o=null,[mappings.TryGetValue(Arrays.get(a,1),{\r\n     get:function()\r\n     {\r\n      return o;\r\n     },\r\n     set:function(v)\r\n     {\r\n      o=v;\r\n     }\r\n    }),o]);\r\n    return m[0]?Arrays.get(a,0)+\":\"+m[1]:x;\r\n   },Strings.SplitChars(e.getAttribute(\"ws-on\"),[\" \"],1))));\r\n  });\r\n  DomUtility.IterSelector(t,\"[ws-attr-holes]\",function(e)\r\n  {\r\n   var holeAttrs,i,$1;\r\n   holeAttrs=Strings.SplitChars(e.getAttribute(\"ws-attr-holes\"),[\" \"],1);\r\n   for(i=0,$1=holeAttrs.length-1;i<=$1;i++)(function()\r\n   {\r\n    var attrName;\r\n    function f(s,a)\r\n    {\r\n     var a$1;\r\n     a$1=Operators.KeyValue(a);\r\n     return s.replace(new Global.RegExp(\"\\\\${\"+a$1[0]+\"}\",\"ig\"),\"${\"+a$1[1]+\"}\");\r\n    }\r\n    attrName=Arrays.get(holeAttrs,i);\r\n    return e.setAttribute(attrName,(((Runtime$1.Curried3(Seq.fold))(f))(e.getAttribute(attrName)))(mappings));\r\n   }());\r\n  });\r\n };\r\n Prepare.fill=function(fillWith,p,n)\r\n {\r\n  while(true)\r\n   if(fillWith.hasChildNodes())\r\n    n=p.insertBefore(fillWith.lastChild,n);\r\n   else\r\n    return null;\r\n };\r\n Prepare.convertAttrs=function(el)\r\n {\r\n  var attrs,toRemove,events,holedAttrs,i,$1,a,_this;\r\n  function lowercaseAttr(name)\r\n  {\r\n   var m;\r\n   m=el.getAttribute(name);\r\n   m===null?void 0:el.setAttribute(name,m.toLowerCase());\r\n  }\r\n  attrs=el.attributes;\r\n  toRemove=[];\r\n  events=[];\r\n  holedAttrs=[];\r\n  for(i=0,$1=attrs.length-1;i<=$1;i++){\r\n   a=attrs.item(i);\r\n   Strings.StartsWith(a.nodeName,\"ws-on\")&&a.nodeName!==\"ws-onafterrender\"&&a.nodeName!==\"ws-on\"?(toRemove.push(a.nodeName),events.push(Slice.string(a.nodeName,{\r\n    $:1,\r\n    $0:\"ws-on\".length\r\n   },null)+\":\"+a.nodeValue.toLowerCase())):!Strings.StartsWith(a.nodeName,\"ws-\")&&(new Global.RegExp(Templates.TextHoleRE())).test(a.nodeValue)?(a.nodeValue=(_this=new Global.RegExp(Templates.TextHoleRE(),\"g\"),a.nodeValue.replace(_this,function($2,$3)\r\n   {\r\n    return\"${\"+$3.toLowerCase()+\"}\";\r\n   })),holedAttrs.push(a.nodeName)):void 0;\r\n  }\r\n  !(events.length==0)?el.setAttribute(\"ws-on\",Strings.concat(\" \",events)):void 0;\r\n  !(holedAttrs.length==0)?el.setAttribute(\"ws-attr-holes\",Strings.concat(\" \",holedAttrs)):void 0;\r\n  lowercaseAttr(\"ws-hole\");\r\n  lowercaseAttr(\"ws-replace\");\r\n  lowercaseAttr(\"ws-attr\");\r\n  lowercaseAttr(\"ws-onafterrender\");\r\n  lowercaseAttr(\"ws-var\");\r\n  Arrays.iter(function(a$1)\r\n  {\r\n   el.removeAttribute(a$1);\r\n  },toRemove);\r\n };\r\n KeyCollection=Collections.KeyCollection=Runtime$1.Class({\r\n  GetEnumerator$1:function()\r\n  {\r\n   return Enumerator.Get(Seq.map(function(kvp)\r\n   {\r\n    return kvp.K;\r\n   },this.d));\r\n  },\r\n  GetEnumerator:function()\r\n  {\r\n   return this.GetEnumerator$1();\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return this.GetEnumerator$1();\r\n  }\r\n },Obj,KeyCollection);\r\n KeyCollection.New=Runtime$1.Ctor(function(d)\r\n {\r\n  Obj.New.call(this);\r\n  this.d=d;\r\n },KeyCollection);\r\n RunState.New=function(PreviousNodes,Top)\r\n {\r\n  return{\r\n   PreviousNodes:PreviousNodes,\r\n   Top:Top\r\n  };\r\n };\r\n NodeSet.get_Empty=function()\r\n {\r\n  return{\r\n   $:0,\r\n   $0:new HashSet.New$3()\r\n  };\r\n };\r\n NodeSet.FindAll=function(doc)\r\n {\r\n  var q;\r\n  function loop(node)\r\n  {\r\n   if(node!=null&&node.$==0)\r\n    {\r\n     loop(node.$0);\r\n     loop(node.$1);\r\n    }\r\n   else\r\n    if(node!=null&&node.$==1)\r\n     loopEN(node.$0);\r\n    else\r\n     if(node!=null&&node.$==2)\r\n      loop(node.$0.Current);\r\n     else\r\n      if(node!=null&&node.$==6)\r\n       Arrays.iter(loopEN,node.$0.Holes);\r\n  }\r\n  function loopEN(el)\r\n  {\r\n   q.push(el);\r\n   loop(el.Children);\r\n  }\r\n  q=[];\r\n  loop(doc);\r\n  return{\r\n   $:0,\r\n   $0:new HashSet.New$2(q)\r\n  };\r\n };\r\n NodeSet.Filter=function(f,a)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:HashSet$1.Filter(f,a.$0)\r\n  };\r\n };\r\n NodeSet.Except=function(a,a$1)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:HashSet$1.Except(a.$0,a$1.$0)\r\n  };\r\n };\r\n NodeSet.ToArray=function(a)\r\n {\r\n  return HashSet$1.ToArray(a.$0);\r\n };\r\n NodeSet.Intersect=function(a,a$1)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:HashSet$1.Intersect(a.$0,a$1.$0)\r\n  };\r\n };\r\n Anims.UseAnimations=function()\r\n {\r\n  SC$8.$cctor();\r\n  return SC$8.UseAnimations;\r\n };\r\n Anims.Actions=function(a)\r\n {\r\n  return Anims.ConcatActions(Arrays.choose(function(a$1)\r\n  {\r\n   return a$1.$==1?{\r\n    $:1,\r\n    $0:a$1.$0\r\n   }:null;\r\n  },AppendList.ToArray(a.$0)));\r\n };\r\n Anims.Finalize=function(a)\r\n {\r\n  Arrays.iter(function(a$1)\r\n  {\r\n   if(a$1.$==0)\r\n    a$1.$0();\r\n  },AppendList.ToArray(a.$0));\r\n };\r\n Anims.ConcatActions=function(xs)\r\n {\r\n  var xs$1,m,dur,xs$2;\r\n  xs$1=Array.ofSeqNonCopying(xs);\r\n  m=Arrays.length(xs$1);\r\n  return m===0?Anims.Const():m===1?Arrays.get(xs$1,0):(dur=Seq.max(Seq.map(function(anim)\r\n  {\r\n   return anim.Duration;\r\n  },xs$1)),(xs$2=Arrays.map(function(a)\r\n  {\r\n   return Anims.Prolong(dur,a);\r\n  },xs$1),Anims.Def(dur,function(t)\r\n  {\r\n   Arrays.iter(function(anim)\r\n   {\r\n    anim.Compute(t);\r\n   },xs$2);\r\n  })));\r\n };\r\n Anims.List=function(a)\r\n {\r\n  return a.$0;\r\n };\r\n Anims.Const=function(v)\r\n {\r\n  return Anims.Def(0,function()\r\n  {\r\n   return v;\r\n  });\r\n };\r\n Anims.Def=function(d,f)\r\n {\r\n  return{\r\n   Compute:f,\r\n   Duration:d\r\n  };\r\n };\r\n Anims.Prolong=function(nextDuration,anim)\r\n {\r\n  var comp,dur,last;\r\n  comp=anim.Compute;\r\n  dur=anim.Duration;\r\n  last=Lazy.Create(function()\r\n  {\r\n   return anim.Compute(anim.Duration);\r\n  });\r\n  return{\r\n   Compute:function(t)\r\n   {\r\n    return t>=dur?last.f():comp(t);\r\n   },\r\n   Duration:nextDuration\r\n  };\r\n };\r\n SC$6.$cctor=function()\r\n {\r\n  SC$6.$cctor=Global.ignore;\r\n  SC$6.BatchUpdatesEnabled=true;\r\n };\r\n TxtRuntime.AsyncMap=function(comp,mapping)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(comp,function(a)\r\n   {\r\n    return Concurrency.Return(mapping(a));\r\n   });\r\n  });\r\n };\r\n Pervasives$1.randomFunctionName=function()\r\n {\r\n  var c;\r\n  return Strings.ReplaceChar((c=Guid.NewGuid(),Global.String(c)).toLowerCase(),\"-\",\"_\");\r\n };\r\n Dyn.New=function(DynElem,DynFlags,DynNodes,OnAfterRender)\r\n {\r\n  var $1;\r\n  $1={\r\n   DynElem:DynElem,\r\n   DynFlags:DynFlags,\r\n   DynNodes:DynNodes\r\n  };\r\n  Runtime$1.SetOptional($1,\"OnAfterRender\",OnAfterRender);\r\n  return $1;\r\n };\r\n Json.Activate=function(json)\r\n {\r\n  var $1,types,i,$2,$3,$4,m;\r\n  function decode(x)\r\n  {\r\n   var o,ti,t,r,k;\r\n   if(Unchecked.Equals(x,null))\r\n    return x;\r\n   else\r\n    if(typeof x==\"object\")\r\n    {\r\n     if(x instanceof Global.Array)\r\n      return Json.shallowMap(decode,x);\r\n     else\r\n      {\r\n       o=Json.shallowMap(decode,x.$V);\r\n       ti=x.$T;\r\n       if(ti===void 0)\r\n        return o;\r\n       else\r\n        {\r\n         t=Arrays.get(types,ti);\r\n         if(t===1)\r\n          return List.ofArray(o);\r\n         else\r\n          if(t===2)\r\n           return self.WebSharper.Decimal.CreateDecimalBits(o);\r\n          else\r\n           {\r\n            r=new(Arrays.get(types,ti))();\r\n            for(var k$1 in o)if(function(k$2)\r\n            {\r\n             r[k$2]=o[k$2];\r\n             return false;\r\n            }(k$1))\r\n             break;\r\n            return r;\r\n           }\r\n        }\r\n      }\r\n    }\r\n    else\r\n     return x;\r\n  }\r\n  types=json?json.$TYPES:void 0;\r\n  if(types===void 0)\r\n   $1=json;\r\n  else\r\n   {\r\n    for(i=0,$2=Arrays.length(types)-1;i<=$2;i++){\r\n     m=Arrays.get(types,i);\r\n     switch(!Unchecked.Equals(m,null)&&m.length===3?Arrays.get(m,0)===\"WebSharper\"?Arrays.get(m,1)===\"List\"?Arrays.get(m,2)===\"T\"?0:($4=m,2):($4=m,2):($4=m,2):!Unchecked.Equals(m,null)&&m.length===2?Arrays.get(m,0)===\"WebSharper\"?Arrays.get(m,1)===\"Decimal\"?1:($4=m,2):($4=m,2):($4=m,2))\r\n     {\r\n      case 0:\r\n       $3=1;\r\n       break;\r\n      case 1:\r\n       $3=2;\r\n       break;\r\n      case 2:\r\n       $3=Json.lookup($4);\r\n       break;\r\n     }\r\n     Arrays.set(types,i,$3);\r\n    }\r\n    $1=json.$DATA;\r\n   }\r\n  return decode($1);\r\n };\r\n Json.shallowMap=function(f,x)\r\n {\r\n  var r,k;\r\n  if(x instanceof Global.Array)\r\n   return Arrays.map(f,x);\r\n  else\r\n   if(typeof x==\"object\")\r\n    {\r\n     r={};\r\n     for(var k$1 in x)if(function(y)\r\n     {\r\n      r[y]=f(x[y]);\r\n      return false;\r\n     }(k$1))\r\n      break;\r\n     return r;\r\n    }\r\n   else\r\n    return x;\r\n };\r\n Json.lookup=function(x)\r\n {\r\n  var r,i,k,n,rn;\r\n  k=Arrays.length(x);\r\n  r=self;\r\n  i=0;\r\n  while(i<k)\r\n   {\r\n    n=Arrays.get(x,i);\r\n    rn=r[n];\r\n    !Unchecked.Equals(typeof rn,void 0)?(r=rn,i=i+1):Operators.FailWith(\"Invalid server reply. Failed to find type: \"+n);\r\n   }\r\n  return r;\r\n };\r\n Updates=UI.Updates=Runtime$1.Class({},null,Updates);\r\n Updates.Create=function(v)\r\n {\r\n  var _var;\r\n  _var=null;\r\n  _var=Updates.New(v,null,function()\r\n  {\r\n   var c;\r\n   c=_var.s;\r\n   return c===null?(c=Snap.Copy(_var.c()),_var.s=c,Snap.WhenObsoleteRun(c,function()\r\n   {\r\n    _var.s=null;\r\n   }),c):c;\r\n  });\r\n  return _var;\r\n };\r\n Updates.New=function(Current,Snap$1,VarView)\r\n {\r\n  return new Updates({\r\n   c:Current,\r\n   s:Snap$1,\r\n   v:VarView\r\n  });\r\n };\r\n SC$7.$cctor=function()\r\n {\r\n  SC$7.$cctor=Global.ignore;\r\n  SC$7.Doc=self.document;\r\n };\r\n SC$8.$cctor=function()\r\n {\r\n  SC$8.$cctor=Global.ignore;\r\n  SC$8.CubicInOut=Easing.Custom(function(t)\r\n  {\r\n   var t2;\r\n   t2=t*t;\r\n   return 3*t2-2*(t2*t);\r\n  });\r\n  SC$8.UseAnimations=true;\r\n };\r\n AppendList.Append=function(x,y)\r\n {\r\n  return x.$==0?y:y.$==0?x:{\r\n   $:2,\r\n   $0:x,\r\n   $1:y\r\n  };\r\n };\r\n AppendList.ToArray=function(xs)\r\n {\r\n  var out;\r\n  function loop(xs$1)\r\n  {\r\n   if(xs$1.$==1)\r\n    out.push(xs$1.$0);\r\n   else\r\n    if(xs$1.$==2)\r\n     {\r\n      loop(xs$1.$0);\r\n      loop(xs$1.$1);\r\n     }\r\n    else\r\n     if(xs$1.$==3)\r\n      Arrays.iter(function(v)\r\n      {\r\n       out.push(v);\r\n      },xs$1.$0);\r\n  }\r\n  out=[];\r\n  loop(xs);\r\n  return out.slice(0);\r\n };\r\n AppendList.Concat=function(xs)\r\n {\r\n  var x;\r\n  x=Array.ofSeqNonCopying(xs);\r\n  return Array.TreeReduce(AppendList.Empty(),AppendList.Append,x);\r\n };\r\n AppendList.Empty=function()\r\n {\r\n  SC$11.$cctor();\r\n  return SC$11.Empty;\r\n };\r\n FormatException=WebSharper.FormatException=Runtime$1.Class({},Error,FormatException);\r\n FormatException.New$1=Runtime$1.Ctor(function(message)\r\n {\r\n  this.message=message;\r\n  Object.setPrototypeOf(this,FormatException.prototype);\r\n },FormatException);\r\n SC$9.$cctor=function()\r\n {\r\n  SC$9.$cctor=Global.ignore;\r\n  SC$9.counter=0;\r\n };\r\n SC$10.$cctor=function()\r\n {\r\n  SC$10.$cctor=Global.ignore;\r\n  SC$10.EmptyAttr=null;\r\n };\r\n Queue.Clear=function(a)\r\n {\r\n  a.splice(0,Arrays.length(a));\r\n };\r\n Easing=UI.Easing=Runtime$1.Class({},Obj,Easing);\r\n Easing.Custom=function(f)\r\n {\r\n  return new Easing.New(f);\r\n };\r\n Easing.New=Runtime$1.Ctor(function(transformTime)\r\n {\r\n  Obj.New.call(this);\r\n  this.transformTime=transformTime;\r\n },Easing);\r\n HashSet$1.Filter=function(ok,set)\r\n {\r\n  return new HashSet.New$2(Arrays.filter(ok,HashSet$1.ToArray(set)));\r\n };\r\n HashSet$1.Except=function(excluded,included)\r\n {\r\n  var set;\r\n  set=new HashSet.New$2(HashSet$1.ToArray(included));\r\n  set.ExceptWith(HashSet$1.ToArray(excluded));\r\n  return set;\r\n };\r\n HashSet$1.ToArray=function(set)\r\n {\r\n  var arr;\r\n  arr=Arrays.create(set.get_Count(),void 0);\r\n  set.CopyTo(arr);\r\n  return arr;\r\n };\r\n HashSet$1.Intersect=function(a,b)\r\n {\r\n  var set;\r\n  set=new HashSet.New$2(HashSet$1.ToArray(a));\r\n  set.IntersectWith(HashSet$1.ToArray(b));\r\n  return set;\r\n };\r\n HashSetUtil.concat=function(o)\r\n {\r\n  var r,k;\r\n  r=[];\r\n  for(var k$1 in o)r.push.apply(r,o[k$1]);\r\n  return r;\r\n };\r\n DomNodes.Children=function(elem,delims)\r\n {\r\n  var n,o,a;\r\n  if(delims!=null&&delims.$==1)\r\n   {\r\n    a=[];\r\n    n=delims.$0[0].nextSibling;\r\n    while(n!==delims.$0[1])\r\n     {\r\n      a.push(n);\r\n      n=n.nextSibling;\r\n     }\r\n    return{\r\n     $:0,\r\n     $0:a\r\n    };\r\n   }\r\n  else\r\n   return{\r\n    $:0,\r\n    $0:Arrays.init(elem.childNodes.length,(o=elem.childNodes,function(a$1)\r\n    {\r\n     return o[a$1];\r\n    }))\r\n   };\r\n };\r\n DomNodes.Except=function(a,a$1)\r\n {\r\n  var excluded;\r\n  excluded=a.$0;\r\n  return{\r\n   $:0,\r\n   $0:Arrays.filter(function(n)\r\n   {\r\n    return Arrays.forall(function(k)\r\n    {\r\n     return!(n===k);\r\n    },excluded);\r\n   },a$1.$0)\r\n  };\r\n };\r\n DomNodes.Iter=function(f,a)\r\n {\r\n  Arrays.iter(f,a.$0);\r\n };\r\n DomNodes.DocChildren=function(node)\r\n {\r\n  var q;\r\n  function loop(doc)\r\n  {\r\n   if(doc!=null&&doc.$==2)\r\n    loop(doc.$0.Current);\r\n   else\r\n    if(doc!=null&&doc.$==1)\r\n     q.push(doc.$0.El);\r\n    else\r\n     if(doc==null)\r\n      ;\r\n     else\r\n      if(doc!=null&&doc.$==5)\r\n       q.push(doc.$0);\r\n      else\r\n       if(doc!=null&&doc.$==4)\r\n        q.push(doc.$0.Text);\r\n       else\r\n        if(doc!=null&&doc.$==6)\r\n         Arrays.iter(function(a)\r\n         {\r\n          if(a==null||a.constructor===Object)\r\n           loop(a);\r\n          else\r\n           q.push(a);\r\n         },doc.$0.Els);\r\n        else\r\n         {\r\n          loop(doc.$0);\r\n          loop(doc.$1);\r\n         }\r\n  }\r\n  q=[];\r\n  loop(node.Children);\r\n  return{\r\n   $:0,\r\n   $0:Array.ofSeqNonCopying(q)\r\n  };\r\n };\r\n DynamicAttrNode=UI.DynamicAttrNode=Runtime$1.Class({\r\n  NChanged:function()\r\n  {\r\n   return this.updates;\r\n  },\r\n  NGetExitAnim:function(parent)\r\n  {\r\n   return An.get_Empty();\r\n  },\r\n  NGetEnterAnim:function(parent)\r\n  {\r\n   return An.get_Empty();\r\n  },\r\n  NGetChangeAnim:function(parent)\r\n  {\r\n   return An.get_Empty();\r\n  },\r\n  NSync:function(parent)\r\n  {\r\n   if(this.dirty)\r\n    {\r\n     (this.push(parent))(this.value);\r\n     this.dirty=false;\r\n    }\r\n  }\r\n },Obj,DynamicAttrNode);\r\n DynamicAttrNode.New=Runtime$1.Ctor(function(view,push)\r\n {\r\n  var $this;\r\n  $this=this;\r\n  Obj.New.call(this);\r\n  this.push=push;\r\n  this.value=void 0;\r\n  this.dirty=false;\r\n  this.updates=View.Map(function(x)\r\n  {\r\n   $this.value=x;\r\n   $this.dirty=true;\r\n  },view);\r\n },DynamicAttrNode);\r\n Lazy.Create=function(f)\r\n {\r\n  return LazyRecord.New(false,f,Lazy.forceLazy);\r\n };\r\n Lazy.forceLazy=function()\r\n {\r\n  var v;\r\n  v=this.v();\r\n  this.c=true;\r\n  this.v=v;\r\n  this.f=Lazy.cachedLazy;\r\n  return v;\r\n };\r\n Lazy.cachedLazy=function()\r\n {\r\n  return this.v;\r\n };\r\n SC$11.$cctor=function()\r\n {\r\n  SC$11.$cctor=Global.ignore;\r\n  SC$11.Empty={\r\n   $:0\r\n  };\r\n };\r\n LazyRecord.New=function(created,evalOrVal,force)\r\n {\r\n  return{\r\n   c:created,\r\n   v:evalOrVal,\r\n   f:force\r\n  };\r\n };\r\n View.Sink(function(v)\r\n {\r\n  Global.postMessage({\r\n   $:3,\r\n   $0:v\r\n  });\r\n },WasmLoader.wasmStatusV().get_View());\r\n Global.onmessage=function(d)\r\n {\r\n  return WWorker.receiveMessage(function(o)\r\n  {\r\n   WasmLoad.loadInThisThread(o);\r\n  },d);\r\n };\r\n Remoting.set_messaging(IMessagingO.New(function(h)\r\n {\r\n  return function(d)\r\n  {\r\n   return self.WASM_WsTranslator_FsRoot_WsTranslator_runRpc(h,d);\r\n  };\r\n },function(v)\r\n {\r\n  Global.postMessage({\r\n   $:0,\r\n   $0:v[0],\r\n   $1:v[1]\r\n  });\r\n },function(v)\r\n {\r\n  Global.postMessage({\r\n   $:1,\r\n   $0:v[0],\r\n   $1:v[1]\r\n  });\r\n },function(v)\r\n {\r\n  Global.postMessage({\r\n   $:2,\r\n   $0:v\r\n  });\r\n }));\r\n}());\r\n\r\n\r\nif (typeof IntelliFactory !=='undefined') {\r\n  IntelliFactory.Runtime.ScriptSkipAssemblyDir = true;\r\n  IntelliFactory.Runtime.Start();\r\n}\r\n\n(function()\r\n{\r\n \"use strict\";\r\n var Global,FsRoot,Library,String,ParseO,LibraryJS,Pojo,WasmLoader,WasmStatus,Remoting,IMessagingO,ReturnQueue,WebSharper,Obj,CustomXhrProvider,WWorker,WasmLoad,Require,GlobalModule,UI,WSFrameworkTest,AssemblyData,ModuleName,TypeName,MethodName,AssemblyName,AssemblyRef,JSCode,ModuleRef,TypeRef,MethodDef,ModuleDef,AssemblyDef,LoadAsm,WSFramework,SC$1,testing_GeneratedPrintf,GeneratedPrintf,Strings,List,Seq,Slice,Operators,Char,Unchecked,Utils,console,IntelliFactory,Runtime,Concurrency,Remoting$1,WsTranslator,Arrays,Enumerator,UI$1,Client,Templates,Doc,View,AjaxRemotingProvider,AttrProxy,Data,TxtRuntime,FSharp,Data$1,Runtime$1,IO,JSON,AttrModule,Date,DateUtil,Numeric,System,Guid,Var$1,Collections,Dictionary,ListModel;\r\n Global=self;\r\n FsRoot=Global.FsRoot=Global.FsRoot||{};\r\n Library=FsRoot.Library=FsRoot.Library||{};\r\n String=Library.String=Library.String||{};\r\n ParseO=Library.ParseO=Library.ParseO||{};\r\n LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};\r\n Pojo=LibraryJS.Pojo=LibraryJS.Pojo||{};\r\n WasmLoader=FsRoot.WasmLoader=FsRoot.WasmLoader||{};\r\n WasmStatus=WasmLoader.WasmStatus=WasmLoader.WasmStatus||{};\r\n Remoting=WasmLoader.Remoting=WasmLoader.Remoting||{};\r\n IMessagingO=Remoting.IMessagingO=Remoting.IMessagingO||{};\r\n ReturnQueue=Remoting.ReturnQueue=Remoting.ReturnQueue||{};\r\n WebSharper=Global.WebSharper;\r\n Obj=WebSharper&&WebSharper.Obj;\r\n CustomXhrProvider=Remoting.CustomXhrProvider=Remoting.CustomXhrProvider||{};\r\n WWorker=WasmLoader.WWorker=WasmLoader.WWorker||{};\r\n WasmLoad=WasmLoader.WasmLoad=WasmLoader.WasmLoad||{};\r\n Require=WasmLoad.Require=WasmLoad.Require||{};\r\n GlobalModule=WasmLoad.GlobalModule=WasmLoad.GlobalModule||{};\r\n UI=WasmLoader.UI=WasmLoader.UI||{};\r\n WSFrameworkTest=FsRoot.WSFrameworkTest=FsRoot.WSFrameworkTest||{};\r\n AssemblyData=FsRoot.AssemblyData=FsRoot.AssemblyData||{};\r\n ModuleName=AssemblyData.ModuleName=AssemblyData.ModuleName||{};\r\n TypeName=AssemblyData.TypeName=AssemblyData.TypeName||{};\r\n MethodName=AssemblyData.MethodName=AssemblyData.MethodName||{};\r\n AssemblyName=AssemblyData.AssemblyName=AssemblyData.AssemblyName||{};\r\n AssemblyRef=AssemblyData.AssemblyRef=AssemblyData.AssemblyRef||{};\r\n JSCode=AssemblyData.JSCode=AssemblyData.JSCode||{};\r\n ModuleRef=AssemblyData.ModuleRef=AssemblyData.ModuleRef||{};\r\n TypeRef=AssemblyData.TypeRef=AssemblyData.TypeRef||{};\r\n MethodDef=AssemblyData.MethodDef=AssemblyData.MethodDef||{};\r\n ModuleDef=AssemblyData.ModuleDef=AssemblyData.ModuleDef||{};\r\n AssemblyDef=AssemblyData.AssemblyDef=AssemblyData.AssemblyDef||{};\r\n LoadAsm=AssemblyData.LoadAsm=AssemblyData.LoadAsm||{};\r\n WSFramework=FsRoot.WSFramework=FsRoot.WSFramework||{};\r\n SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};\r\n testing_GeneratedPrintf=Global.testing_GeneratedPrintf=Global.testing_GeneratedPrintf||{};\r\n GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};\r\n Strings=WebSharper&&WebSharper.Strings;\r\n List=WebSharper&&WebSharper.List;\r\n Seq=WebSharper&&WebSharper.Seq;\r\n Slice=WebSharper&&WebSharper.Slice;\r\n Operators=WebSharper&&WebSharper.Operators;\r\n Char=WebSharper&&WebSharper.Char;\r\n Unchecked=WebSharper&&WebSharper.Unchecked;\r\n Utils=WebSharper&&WebSharper.Utils;\r\n console=Global.console;\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime=IntelliFactory&&IntelliFactory.Runtime;\r\n Concurrency=WebSharper&&WebSharper.Concurrency;\r\n Remoting$1=WebSharper&&WebSharper.Remoting;\r\n WsTranslator=FsRoot&&FsRoot.WsTranslator;\r\n Arrays=WebSharper&&WebSharper.Arrays;\r\n Enumerator=WebSharper&&WebSharper.Enumerator;\r\n UI$1=WebSharper&&WebSharper.UI;\r\n Client=UI$1&&UI$1.Client;\r\n Templates=Client&&Client.Templates;\r\n Doc=UI$1&&UI$1.Doc;\r\n View=UI$1&&UI$1.View;\r\n AjaxRemotingProvider=Remoting$1&&Remoting$1.AjaxRemotingProvider;\r\n AttrProxy=UI$1&&UI$1.AttrProxy;\r\n Data=WebSharper&&WebSharper.Data;\r\n TxtRuntime=Data&&Data.TxtRuntime;\r\n FSharp=Global.FSharp;\r\n Data$1=FSharp&&FSharp.Data;\r\n Runtime$1=Data$1&&Data$1.Runtime;\r\n IO=Runtime$1&&Runtime$1.IO;\r\n JSON=Global.JSON;\r\n AttrModule=UI$1&&UI$1.AttrModule;\r\n Date=Global.Date;\r\n DateUtil=WebSharper&&WebSharper.DateUtil;\r\n Numeric=WebSharper&&WebSharper.Numeric;\r\n System=Global.System;\r\n Guid=System&&System.Guid;\r\n Var$1=UI$1&&UI$1.Var$1;\r\n Collections=WebSharper&&WebSharper.Collections;\r\n Dictionary=Collections&&Collections.Dictionary;\r\n ListModel=UI$1&&UI$1.ListModel;\r\n String.thousands=function(n)\r\n {\r\n  var v,c,r,s;\r\n  v=(c=n<0?-n:n,Global.String(c));\r\n  r=v.length%3;\r\n  s=r===0?3:r;\r\n  return n<0?\"-\"+Strings.concat(\",\",List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.append([Slice.string(v,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:s-1\r\n   })],Seq.delay(function()\r\n   {\r\n    return Seq.map(function(i)\r\n    {\r\n     return Slice.string(v,{\r\n      $:1,\r\n      $0:i*3+s\r\n     },{\r\n      $:1,\r\n      $0:i*3+s+2\r\n     });\r\n    },Operators.range(0,((v.length-s)/3>>0)-1));\r\n   }));\r\n  }))):Strings.concat(\",\",List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.append([Slice.string(v,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:s-1\r\n   })],Seq.delay(function()\r\n   {\r\n    return Seq.map(function(i)\r\n    {\r\n     return Slice.string(v,{\r\n      $:1,\r\n      $0:i*3+s\r\n     },{\r\n      $:1,\r\n      $0:i*3+s+2\r\n     });\r\n    },Operators.range(0,((v.length-s)/3>>0)-1));\r\n   }));\r\n  })));\r\n };\r\n String.WhiteSpace=function(s)\r\n {\r\n  function g(v)\r\n  {\r\n   return!v;\r\n  }\r\n  return Seq.exists(function(x)\r\n  {\r\n   return g(Char.IsWhiteSpace(x));\r\n  },s)?null:{\r\n   $:1,\r\n   $0:null\r\n  };\r\n };\r\n String.EndsWith=function(ends,s)\r\n {\r\n  return Strings.EndsWith(s,ends)?{\r\n   $:1,\r\n   $0:Slice.string(s,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:s.length-ends.length-1\r\n   })\r\n  }:null;\r\n };\r\n String.StartsWith=function(start,s)\r\n {\r\n  return Strings.StartsWith(s,start)?{\r\n   $:1,\r\n   $0:Slice.string(s,{\r\n    $:1,\r\n    $0:start.length\r\n   },null)\r\n  }:null;\r\n };\r\n String.skipLastLine=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.skipLastLine;\r\n };\r\n String.indentStr=function(i)\r\n {\r\n  function f(s)\r\n  {\r\n   return String.indent(i,s);\r\n  }\r\n  function g(s)\r\n  {\r\n   return Strings.concat(\"\\n\",s);\r\n  }\r\n  return function(x)\r\n  {\r\n   return g(f(x));\r\n  };\r\n };\r\n String.unindentStr=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.unindentStr;\r\n };\r\n String.indent=function(n,s)\r\n {\r\n  var x,x$1;\r\n  x=Strings.SplitChars(s,[\"\\n\"],0);\r\n  return Seq.map((x$1=Strings.replicate(n,\" \"),function(y)\r\n  {\r\n   return x$1+y;\r\n  }),x);\r\n };\r\n String.unindent=function(s)\r\n {\r\n  var lines,n,o,o$1;\r\n  lines=Strings.SplitChars(s,[\"\\n\"],0);\r\n  n=(o=Seq.tryFindIndex(function(y)\r\n  {\r\n   return\" \"!==y;\r\n  },(o$1=Seq.tryFind(function(l)\r\n  {\r\n   return Strings.Trim(l)!==\"\";\r\n  },lines),o$1==null?\"\":o$1.$0)),o==null?0:o.$0);\r\n  return Seq.filter(function(s$1)\r\n  {\r\n   return!Strings.StartsWith(s$1,\"# 1 \");\r\n  },Seq.map(function(l)\r\n  {\r\n   return l.length<=n?\"\":l.substring(n);\r\n  },lines));\r\n };\r\n String.skipFirstLine=function(txt)\r\n {\r\n  var i;\r\n  i=txt.indexOf(\"\\n\");\r\n  return i<0?\"\":Slice.string(txt,{\r\n   $:1,\r\n   $0:i+1\r\n  },null);\r\n };\r\n String.append=function(a,b)\r\n {\r\n  return a+b;\r\n };\r\n String.right=function(n,s)\r\n {\r\n  return Library[\"String.Right\"](s,n);\r\n };\r\n String.left=function(n,s)\r\n {\r\n  return Library[\"String.Left\"](s,n);\r\n };\r\n String.trim=function(s)\r\n {\r\n  return Strings.Trim(s);\r\n };\r\n String.contains=function(sub,whole)\r\n {\r\n  return whole.indexOf(sub)!=-1;\r\n };\r\n String.delimitedO=function(op,cl,txt)\r\n {\r\n  var o,$1,bef,o$1,$2;\r\n  o=String.splitInTwoO(op,txt);\r\n  return o==null?null:($1=o.$0,(bef=$1[0],(o$1=String.splitInTwoO(cl,$1[1]),o$1==null?null:{\r\n   $:1,\r\n   $0:($2=o$1.$0,[bef,$2[0],$2[1]])\r\n  })));\r\n };\r\n String.splitInTwoO=function(spl,txt)\r\n {\r\n  var i;\r\n  i=txt.indexOf(spl);\r\n  return i===-1?null:{\r\n   $:1,\r\n   $0:[Library[\"String.Left\"](txt,i),txt.substring(i+spl.length)]\r\n  };\r\n };\r\n String.splitByChar=function(c,s)\r\n {\r\n  return Strings.SplitChars(s,[c],0);\r\n };\r\n ParseO.Guid=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Guid|_|\"];\r\n };\r\n ParseO.Double=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Double|_|\"];\r\n };\r\n ParseO.Single=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Single|_|\"];\r\n };\r\n ParseO.Int64=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Int64|_|\"];\r\n };\r\n ParseO.Int=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Int|_|\"];\r\n };\r\n ParseO.Date=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Date|_|\"];\r\n };\r\n ParseO.parseGuidO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseGuidO;\r\n };\r\n ParseO.parseDoubleO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseDoubleO;\r\n };\r\n ParseO.parseSingleO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseSingleO;\r\n };\r\n ParseO.parseInt64O=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseInt64O;\r\n };\r\n ParseO.parseIntO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseIntO;\r\n };\r\n ParseO.parseDateO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseDateO;\r\n };\r\n ParseO.parseDateO2=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseDateO2;\r\n };\r\n ParseO.tryParseWith=function(tryParseFunc)\r\n {\r\n  function g($1,$2)\r\n  {\r\n   return $1?{\r\n    $:1,\r\n    $0:$2\r\n   }:null;\r\n  }\r\n  return function(x)\r\n  {\r\n   return g.apply(null,tryParseFunc(x));\r\n  };\r\n };\r\n Library[\"String.Right\"]=function(_this,n)\r\n {\r\n  var a,b;\r\n  return Library[\"String.Substring2\"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);\r\n };\r\n Library[\"String.Left\"]=function(_this,n)\r\n {\r\n  return n<0?Library[\"String.Substring2\"](_this,0,_this.length+n):Library[\"String.Substring2\"](_this,0,n);\r\n };\r\n Library[\"String.Substring2\"]=function(_this,from,n)\r\n {\r\n  var from$1,b;\r\n  while(true)\r\n   {\r\n    if(n<=0)\r\n     return\"\";\r\n    else\r\n     if(from>=_this.length)\r\n      return\"\";\r\n     else\r\n      if(from<0)\r\n       {\r\n        from$1=from;\r\n        from=0;\r\n        n=n+from$1;\r\n       }\r\n      else\r\n       return Strings.Substring(_this,from,(b=_this.length-from,Unchecked.Compare(n,b)===-1?n:b));\r\n   }\r\n };\r\n Library.print=function(v)\r\n {\r\n  if(typeof v==\"string\")\r\n   ((function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(Utils.toSafe($2));\r\n    };\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }))(v));\r\n  else\r\n   ((function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(Utils.prettyPrint($2));\r\n    };\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }))(v));\r\n };\r\n Library.Error=function(a)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:a\r\n  };\r\n };\r\n Pojo.newPojoOpt=function(propOs)\r\n {\r\n  function c(n,vO)\r\n  {\r\n   return vO==null?null:{\r\n    $:1,\r\n    $0:[n,vO.$0]\r\n   };\r\n  }\r\n  return Pojo.newPojo(Seq.choose(function($1)\r\n  {\r\n   return c($1[0],$1[1]);\r\n  },propOs));\r\n };\r\n Pojo.newPojo=function(props)\r\n {\r\n  var pojo,f;\r\n  function f$1(a,a$1)\r\n  {\r\n   return function(p)\r\n   {\r\n    return Pojo.addProp(a,a$1,p);\r\n   };\r\n  }\r\n  function g(v)\r\n  {\r\n  }\r\n  pojo={};\r\n  Seq.iter((f=function(b)\r\n  {\r\n   return(function($1)\r\n   {\r\n    return f$1($1[0],$1[1]);\r\n   }(b))(pojo);\r\n  },function(x)\r\n  {\r\n   return g(f(x));\r\n  }),props);\r\n  return pojo;\r\n };\r\n Pojo.addProp=function(p,p$1,pojo)\r\n {\r\n  pojo[p]=p$1;\r\n  return pojo;\r\n };\r\n WasmStatus.WasmWorkerLoaded={\r\n  $:4\r\n };\r\n WasmStatus.WasmWorkerLoading={\r\n  $:3\r\n };\r\n WasmStatus.WasmLoaded={\r\n  $:2\r\n };\r\n WasmStatus.WasmLoading={\r\n  $:1\r\n };\r\n WasmStatus.WasmNotLoaded={\r\n  $:0\r\n };\r\n IMessagingO.New=function(runRpc,returnValue,returnExn,wprintfn)\r\n {\r\n  return{\r\n   runRpc:runRpc,\r\n   returnValue:returnValue,\r\n   returnExn:returnExn,\r\n   wprintfn:wprintfn\r\n  };\r\n };\r\n ReturnQueue.tryGet=function(md)\r\n {\r\n  var o,arr,m,narr;\r\n  o=ReturnQueue.tryGetS(md);\r\n  return o==null?null:(arr=o.$0,(m=Seq.tryHead(arr),m!=null&&m.$==1?(narr=Slice.array(arr,{\r\n   $:1,\r\n   $0:1\r\n  },null),(ReturnQueue.queues().Remove(md),ReturnQueue.queues().Add(md,narr),{\r\n   $:1,\r\n   $0:m.$0\r\n  })):null));\r\n };\r\n ReturnQueue.add=function(md,fs)\r\n {\r\n  var narr,m;\r\n  narr=(m=ReturnQueue.tryGetS(md),m==null?[fs]:(ReturnQueue.queues().Remove(md),m.$0.concat([fs])));\r\n  ReturnQueue.queues().Add(md,narr);\r\n };\r\n ReturnQueue.tryGetS=function(md)\r\n {\r\n  return(ParseO.tryParseWith(function(a)\r\n  {\r\n   var o;\r\n   o=null;\r\n   return[ReturnQueue.queues().TryGetValue(a,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o];\r\n  }))(md);\r\n };\r\n ReturnQueue.queues=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.queues;\r\n };\r\n CustomXhrProvider=Remoting.CustomXhrProvider=Runtime.Class({\r\n  Sync:function(url,headers,data)\r\n  {\r\n   return Operators.FailWith(\"CustomXhrProvider.Sync not suppported\");\r\n  },\r\n  Async:function(url,headers,data,ok,err)\r\n  {\r\n   var b;\r\n   Concurrency.Start((b=null,Concurrency.Delay(function()\r\n   {\r\n    var md;\r\n    md=Remoting.getHeaderRpc(headers);\r\n    ReturnQueue.add(md,[ok,err]);\r\n    return Concurrency.TryWith(Concurrency.Delay(function()\r\n    {\r\n     Remoting.callRunRpc(md,data);\r\n     return Concurrency.Zero();\r\n    }),function(a)\r\n    {\r\n     Remoting.returnExnExn(md,a);\r\n     return Concurrency.Zero();\r\n    });\r\n   })),null);\r\n  }\r\n },Obj,CustomXhrProvider);\r\n CustomXhrProvider.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },CustomXhrProvider);\r\n Remoting.installProvider=function()\r\n {\r\n  Remoting$1.set_AjaxProvider(new CustomXhrProvider.New());\r\n };\r\n Remoting.returnExn=function(header,e)\r\n {\r\n  Remoting.messaging().returnExn([header,e]);\r\n };\r\n Remoting.returnValue=function(header,data)\r\n {\r\n  Remoting.messaging().returnValue([header,data]);\r\n };\r\n Remoting.callRunRpc=function(header,data)\r\n {\r\n  (Remoting.messaging().runRpc(header))(data);\r\n };\r\n Remoting.messaging=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.messaging;\r\n };\r\n Remoting.set_messaging=function($1)\r\n {\r\n  SC$1.$cctor();\r\n  SC$1.messaging=$1;\r\n };\r\n Remoting.returnExn0=function(md,e)\r\n {\r\n  Remoting.returnExnExn(md,new Global.Error(e));\r\n };\r\n Remoting.returnExnExn=function(md,e)\r\n {\r\n  var o,$1;\r\n  o=ReturnQueue.tryGet(md);\r\n  o==null?void 0:($1=o.$0,$1[0],$1[1](e));\r\n };\r\n Remoting.returnValue0=function(md,v)\r\n {\r\n  var o,$1,ok;\r\n  o=ReturnQueue.tryGet(md);\r\n  o==null?void 0:($1=o.$0,ok=$1[0],$1[1],ok(v));\r\n };\r\n Remoting.originalProvider=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.originalProvider;\r\n };\r\n Remoting.getHeaderRpc=function(headers)\r\n {\r\n  return headers[\"x-websharper-rpc\"];\r\n };\r\n WWorker.terminate=function()\r\n {\r\n  var $1;\r\n  if($1=WWorker.workerO(),$1!=null&&$1.$==1)\r\n   {\r\n    WWorker.workerO().$0.terminate();\r\n    WWorker.set_workerO(null);\r\n    WasmLoader.printfn(function($2)\r\n    {\r\n     return $2(\"Worker terminated!\");\r\n    });\r\n    WasmLoader.wasmStatusV().Set(WasmStatus.WasmNotLoaded);\r\n   }\r\n  else\r\n   WasmLoader.printfn(function($2)\r\n   {\r\n    return $2(\"Worker is not present\");\r\n   });\r\n };\r\n WWorker.fromWorker=function(evt)\r\n {\r\n  var m,v;\r\n  m=evt.data;\r\n  m.$==1?Remoting.returnExn0(m.$0,m.$1):m.$==2?(WasmLoader.printfn(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(Utils.toSafe($2));\r\n   };\r\n  }))(m.$0):m.$==3?(v=m.$0,!Unchecked.Equals(WasmLoader.wasmStatusV().Get(),v)?WasmLoader.wasmStatusV().Set(v):void 0):Remoting.returnValue0(m.$0,m.$1);\r\n };\r\n WWorker.receiveMessage=function(loadInThisThread,evt)\r\n {\r\n  var m;\r\n  m=evt.data;\r\n  m.$==1?(WasmLoader.printfn(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(Utils.toSafe($2));\r\n   };\r\n  }))(m.$0):m.$==2?loadInThisThread(m.$0):Remoting.callRunRpc(m.$0,m.$1);\r\n };\r\n WWorker.workerO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.workerO;\r\n };\r\n WWorker.set_workerO=function($1)\r\n {\r\n  SC$1.$cctor();\r\n  SC$1.workerO=$1;\r\n };\r\n Require=WasmLoad.Require=Runtime.Class({},Obj,Require);\r\n Require.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },Require);\r\n GlobalModule=WasmLoad.GlobalModule=Runtime.Class({},Obj,GlobalModule);\r\n GlobalModule.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },GlobalModule);\r\n WasmLoad.loadWasmInWorker=function(opts)\r\n {\r\n  var w;\r\n  if(!self.document)\r\n   WasmLoader.printfn(function($1)\r\n   {\r\n    return $1(\"Already in a worker cannot load Wasm in another worker\");\r\n   });\r\n  else\r\n   if(WasmLoader.wasmStatusV().Get().$!==0)\r\n    (WasmLoader.printfn(function($1)\r\n    {\r\n     return function($2)\r\n     {\r\n      return $1(\"Wasm is already \"+testing_GeneratedPrintf.p($2));\r\n     };\r\n    }))(WasmLoader.wasmStatusV().Get());\r\n   else\r\n    {\r\n     WasmLoader.wasmStatusV().Set(WasmStatus.WasmLoading);\r\n     WasmLoader.printfn(function($1)\r\n     {\r\n      return $1(\"Initiating WebWorker\");\r\n     });\r\n     w=new Global.Worker(Runtime.ScriptPath(\"testing\",\"testing.WasmWorker.js\"));\r\n     w.postMessage({\r\n      $:2,\r\n      $0:opts\r\n     });\r\n     w.onmessage=WWorker.fromWorker;\r\n     WWorker.set_workerO({\r\n      $:1,\r\n      $0:w\r\n     });\r\n     Remoting.set_messaging(IMessagingO.New(function(h)\r\n     {\r\n      return function(d)\r\n      {\r\n       return w.postMessage({\r\n        $:0,\r\n        $0:h,\r\n        $1:d\r\n       });\r\n      };\r\n     },function(t)\r\n     {\r\n      Remoting.returnValue0(t[0],t[1]);\r\n     },function(t)\r\n     {\r\n      Remoting.returnExn0(t[0],t[1]);\r\n     },Remoting.messaging().wprintfn));\r\n     Remoting.installProvider();\r\n    }\r\n };\r\n WasmLoad.loadInThisThread=function(opts)\r\n {\r\n  var $1,$2,$3;\r\n  $2=!self.document;\r\n  $3=WasmLoader.wasmStatusV().Get();\r\n  switch($2?$3.$==3?1:$3.$==1?2:$3.$==2?4:$3.$==0?6:0:$3.$==1?1:$3.$==3?3:$3.$==4?5:$3.$==0?6:0)\r\n  {\r\n   case 0:\r\n    null;\r\n    break;\r\n   case 1:\r\n    WasmLoader.printfn(function($4)\r\n    {\r\n     return $4(\"WASM is loading\");\r\n    });\r\n    break;\r\n   case 2:\r\n    WasmLoader.printfn(function($4)\r\n    {\r\n     return $4(\"WASM is loading in the main thread\");\r\n    });\r\n    break;\r\n   case 3:\r\n    WasmLoader.printfn(function($4)\r\n    {\r\n     return $4(\"WASM is loading in a WebWorker\");\r\n    });\r\n    break;\r\n   case 4:\r\n    WasmLoader.printfn(function($4)\r\n    {\r\n     return $4(\"WASM is loaded in the main thread\");\r\n    });\r\n    break;\r\n   case 5:\r\n    WasmLoader.printfn(function($4)\r\n    {\r\n     return $4(\"WASM is loaded in a WebWorker\");\r\n    });\r\n    break;\r\n   case 6:\r\n    Concurrency.Start(Concurrency.FromContinuations(function(ok)\r\n    {\r\n     var b;\r\n     function init()\r\n     {\r\n      WasmLoad.bindWasm();\r\n      WasmLoader.printfn(function($4)\r\n      {\r\n       return $4(\"WASM Initialized!\");\r\n      });\r\n      WasmLoader.wasmStatusV().Set(!self.document?WasmStatus.WasmWorkerLoaded:WasmStatus.WasmLoaded);\r\n      ok();\r\n     }\r\n     return Concurrency.Start((b=null,Concurrency.Delay(function()\r\n     {\r\n      WasmLoader.printfn(function($4)\r\n      {\r\n       return $4(\"Loading WASM. Hold on, this will take a while...\");\r\n      });\r\n      WasmLoader.wasmStatusV().Set(!self.document?WasmStatus.WasmWorkerLoading:WasmStatus.WasmLoading);\r\n      return Concurrency.Bind(Concurrency.Sleep(50),function()\r\n      {\r\n       return Concurrency.Combine(!(!self.document)?(Remoting.installProvider(),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()\r\n       {\r\n        self.App=Pojo.newPojo([[\"init\",init]]);\r\n        return Concurrency.Bind(WasmLoad.requireJsA([WasmLoad.rootPath()+\"mono-config.js\"]),function()\r\n        {\r\n         return Concurrency.Bind(WasmLoad.requireJsA([WasmLoad.rootPath()+\"runtime.js\"]),function()\r\n         {\r\n          var a,a$1;\r\n          a=WasmLoader.printfn(function($4)\r\n          {\r\n           return function($5)\r\n           {\r\n            return $4(Utils.toSafe($5));\r\n           };\r\n          });\r\n          self.Module.print=a;\r\n          a$1=WasmLoader.printfn(function($4)\r\n          {\r\n           return function($5)\r\n           {\r\n            return $4(Utils.toSafe($5));\r\n           };\r\n          });\r\n          self.Module.printErr=a$1;\r\n          self.Module.preRun=[function()\r\n          {\r\n           WasmLoad.preloadFiles(WasmLoad.filesToPreload(opts));\r\n          }];\r\n          return Concurrency.Bind(WasmLoad.requireJsA([WasmLoad.rootPath()+\"dotnet.js\"]),function()\r\n          {\r\n           return Concurrency.Zero();\r\n          });\r\n         });\r\n        });\r\n       }));\r\n      });\r\n     })),null);\r\n    }),null);\r\n    break;\r\n  }\r\n };\r\n WasmLoad.filesToPreload=function(opts)\r\n {\r\n  return List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.append(WsTranslator.dlls(),Seq.delay(function()\r\n   {\r\n    return Arrays.choose(function(a)\r\n    {\r\n     var a$1;\r\n     a$1=String.StartsWith(\"-r:\",a);\r\n     return a$1!=null&&a$1.$==1?{\r\n      $:1,\r\n      $0:a$1.$0\r\n     }:null;\r\n    },Strings.SplitChars(opts,[\"\\n\"],0));\r\n   }));\r\n  }));\r\n };\r\n WasmLoad.preloadFiles=function(files)\r\n {\r\n  var dirFiles,e,f,file,dir,from;\r\n  self.Browser=Pojo.newPojo([[\"init\",Global.ignore],[\"asyncLoad\",function(url,onload,onerror)\r\n  {\r\n   var xhr;\r\n   xhr=new self.XMLHttpRequest();\r\n   xhr.open(\"GET\",url,true);\r\n   xhr.responseType=\"arraybuffer\";\r\n   xhr.onload=function()\r\n   {\r\n    return xhr.status===200||xhr.status===0&&!Unchecked.Equals(xhr.response,null)?onload(new Global.Uint8Array(xhr.response)):onerror();\r\n   };\r\n   xhr.onerror=function()\r\n   {\r\n    return onerror();\r\n   };\r\n   return xhr.send(null);\r\n  }]]);\r\n  self.Module.preloadPlugins=[];\r\n  dirFiles=Seq.cache(Seq.distinct(Seq.map(function(a)\r\n  {\r\n   return[Strings.concat(\"/\",Slice.array(a,null,{\r\n    $:1,\r\n    $0:Arrays.length(a)-2\r\n   })),Seq.last(a)];\r\n  },Seq.map(function(a)\r\n  {\r\n   return Arrays.map(Strings.Trim,a);\r\n  },Seq.map(function(s)\r\n  {\r\n   return Strings.SplitChars(Strings.Replace(s,\"\\\\\",\"/\"),[\"/\"],0);\r\n  },files)))));\r\n  Seq.iter(function(dir$1)\r\n  {\r\n   try\r\n   {\r\n    self.FS.mkdir(dir$1);\r\n   }\r\n   catch(e$1)\r\n   {\r\n    null;\r\n   }\r\n  },Seq.distinct(Seq.map(function(t)\r\n  {\r\n   return t[0];\r\n  },dirFiles)));\r\n  e=Enumerator.Get(dirFiles);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    {\r\n     f=e.Current();\r\n     file=f[1];\r\n     dir=f[0];\r\n     from=Strings.Replace(WasmLoad.rootPath()+dir+\"/\"+file,\"//\",\"/\");\r\n     (WasmLoader.printfn(function($1)\r\n     {\r\n      return function($2)\r\n      {\r\n       return $1(\"Preloading \"+Utils.toSafe($2));\r\n      };\r\n     }))(from);\r\n     self.FS.createPreloadedFile(dir,file,from,1,Global.$op21);\r\n    }\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n WasmLoad.bindWasm=function()\r\n {\r\n  Seq.iter(function(t)\r\n  {\r\n   WasmLoad.bindStaticMethod(t[0],t[1],t[2]);\r\n  },List.ofArray([[\"WsTranslator\",\"FsRoot.WsTranslator\",\"runRpc\"]]));\r\n };\r\n WasmLoad.bindStaticMethod=function(assmbly,path,methd)\r\n {\r\n  var m;\r\n  self[((((Runtime.Curried(function($1,$2,$3,$4)\r\n  {\r\n   return $1(\"WASM_\"+Utils.toSafe($2)+\"_\"+Utils.toSafe($3)+\"_\"+Utils.toSafe($4));\r\n  },4))(Global.id))(assmbly))(Strings.Replace(path,\".\",\"_\")))(methd)]=(m=((((Runtime.Curried(function($1,$2,$3,$4)\r\n  {\r\n   return $1(\"[\"+Utils.toSafe($2)+\"]\"+Utils.toSafe($3)+\":\"+Utils.toSafe($4));\r\n  },4))(Global.id))(assmbly))(path))(methd),self.Module.mono_bind_static_method(m));\r\n };\r\n WasmLoad.requireJsA=function(fs)\r\n {\r\n  return Concurrency.FromContinuations(function(ok)\r\n  {\r\n   return Global.requirejs(Arrays.ofSeq(fs),ok);\r\n  });\r\n };\r\n WasmLoad.rootPath=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rootPath;\r\n };\r\n UI.main=function()\r\n {\r\n  var x,a;\r\n  x=UI.mainDoc();\r\n  a=self.document.body;\r\n  Templates.LoadLocalTemplates(\"\");\r\n  Doc.Run(a,x);\r\n };\r\n UI.mainDoc=function()\r\n {\r\n  var c,c$1;\r\n  return Doc.Element(\"div\",[],[Doc.Element(\"h1\",[],[Doc.TextNode(\"HELLO WASM!\")]),Doc.Element(\"h2\",[],[Doc.TextView(View.Map(function($1)\r\n  {\r\n   return(function($2)\r\n   {\r\n    return function($3)\r\n    {\r\n     return $2(testing_GeneratedPrintf.p($3));\r\n    };\r\n   }(Global.id))($1);\r\n  },WasmLoader.wasmStatusV().get_View()))]),Doc.Element(\"span\",[],[Doc.Button(\"Load as Worker\",[],function()\r\n  {\r\n   WasmLoad.loadWasmInWorker(UI.optsV().Get());\r\n  }),Doc.Button(\"Load in Main thread\",[],function()\r\n  {\r\n   WasmLoad.loadInThisThread(UI.optsV().Get());\r\n  }),Doc.Button(\"Terminate Worker\",[],function()\r\n  {\r\n   WWorker.terminate();\r\n  })]),Doc.Element(\"div\",[],[Doc.InputArea([],UI.codeV()),Doc.InputArea([],UI.optsV())]),Doc.Element(\"span\",[],[Doc.Button(\"Check\",[],function()\r\n  {\r\n   UI.callWasmA(function(t)\r\n   {\r\n    return UI.parseAndCheckProject(t[0],t[1],t[2]);\r\n   },UI.getParms());\r\n  }),Doc.Button(\"Translate\",[],function()\r\n  {\r\n   UI.clean();\r\n   WasmLoader.printfn(function($1)\r\n   {\r\n    return $1(\"Initiating translation:\");\r\n   });\r\n   UI.callWasmA(function(t)\r\n   {\r\n    return UI.translateToJs(t[0],t[1],t[2]);\r\n   },UI.getParms());\r\n  }),Doc.Button(\"Dir\",[],function()\r\n  {\r\n   UI.callWasmA(function(d)\r\n   {\r\n    return(new AjaxRemotingProvider.New()).Async(\"WsTranslator:FsRoot.WsTranslator+Rpc.dirRpc:-1181784350\",[d]);\r\n   },\"/\");\r\n  }),Doc.Button(\"Clean\",[],function()\r\n  {\r\n   UI.clean();\r\n  })]),UI.showMessages(\"Fsc Messages\",function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(Utils.prettyPrint($2));\r\n   };\r\n  }(Global.id),UI.fsErrsV().get_View()),UI.showMessages(\"Ws  Errors\",(c=function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"(\"+testing_GeneratedPrintf.p$1($2[0])+\", \"+testing_GeneratedPrintf.p$2($2[1])+\")\");\r\n   };\r\n  }(Global.id),function(t)\r\n  {\r\n   return c([t[0],t[1]]);\r\n  }),UI.wsErrsV().get_View()),UI.showMessages(\"Ws  Warnings\",(c$1=function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"(\"+testing_GeneratedPrintf.p$1($2[0])+\", \"+testing_GeneratedPrintf.p$3($2[1])+\")\");\r\n   };\r\n  }(Global.id),function(t)\r\n  {\r\n   return c$1([t[0],t[1]]);\r\n  }),UI.wsWrnsV().get_View()),Doc.Element(\"div\",[AttrProxy.Create(\"style\",\"font-family: monospace; white-space:pre\")],[Doc.TextView(UI.detailsV().get_View())])]);\r\n };\r\n UI.translateToJs=function(projectName,opts,code)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async(\"WsTranslator:FsRoot.WsTranslator+Rpc.translateFsToJsRpc:957452724\",[projectName,opts,code]),function(a)\r\n   {\r\n    var wsO;\r\n    wsO=a[1];\r\n    UI.fsErrsV().Set(a[0]);\r\n    return wsO==null?(UI.clean(),UI.wsErrsV().Set([]),UI.wsWrnsV().Set([]),Concurrency.Zero()):(UI.detailsV().Set(wsO.$0[0]),UI.wsErrsV().Set(Arrays.ofSeq(wsO.$0[1])),UI.wsWrnsV().Set(Arrays.ofSeq(wsO.$0[2])),Concurrency.Zero());\r\n   });\r\n  });\r\n };\r\n UI.parseAndCheckProject=function(projectName,opts,code)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async(\"WsTranslator:FsRoot.WsTranslator+Rpc.parseAndCheckProjectRpc:-1474163089\",[projectName,opts,code]),function(a)\r\n   {\r\n    var a$1;\r\n    UI.fsErrsV().Set(Arrays.ofSeq(a[0]));\r\n    UI.wsErrsV().Set([]);\r\n    UI.wsWrnsV().Set([]);\r\n    a$1=(function($1)\r\n    {\r\n     return function($2)\r\n     {\r\n      return $1(\"(\"+Utils.prettyPrint($2[0])+\", \"+Utils.printArray(Utils.prettyPrint,$2[1])+\")\");\r\n     };\r\n    }(Global.id))([a[2],a[1]]);\r\n    UI.detailsV().Set(a$1);\r\n    return Concurrency.Zero();\r\n   });\r\n  });\r\n };\r\n UI.showMessages=function(name,f,msgsW)\r\n {\r\n  return Doc.BindView(function(msgs)\r\n  {\r\n   return Arrays.length(msgs)===0?Doc.get_Empty():Doc.Element(\"div\",[],[Doc.TextNode(name),Doc.Element(\"ol\",[],[Doc.Concat(Seq.map(function(x)\r\n   {\r\n    return Doc.Element(\"li\",[],[Doc.TextNode(f(x))]);\r\n   },msgs))])]);\r\n  },msgsW);\r\n };\r\n UI.getParms=function()\r\n {\r\n  return[\"WasmTest\",Arrays.filter(function(s)\r\n  {\r\n   return Strings.Trim(s)!==\"\";\r\n  },Strings.SplitChars(\"fsc.exe\\n\"+UI.optsV().Get(),[\"\\n\"],0)),UI.codeV().Get()];\r\n };\r\n UI.callWasmA=function(f,p)\r\n {\r\n  var b;\r\n  Concurrency.Start((b=null,Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Combine(WasmLoader.wasmStatusV().Get().$===0?(WasmLoad.loadWasmInWorker(UI.optsV().Get()),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.Bind(Concurrency.Sleep(50),function()\r\n    {\r\n     return Concurrency.Combine(Concurrency.While(function()\r\n     {\r\n      var m;\r\n      m=WasmLoader.wasmStatusV().Get();\r\n      return m.$==2?false:m.$!=4;\r\n     },Concurrency.Delay(function()\r\n     {\r\n      WasmLoader.printfn(function($1)\r\n      {\r\n       return $1(\"Waiting for WASM to load...\");\r\n      });\r\n      return Concurrency.Bind(Concurrency.Sleep(2000),function()\r\n      {\r\n       return Concurrency.Return(null);\r\n      });\r\n     })),Concurrency.Delay(function()\r\n     {\r\n      return Concurrency.Bind(f(p),function()\r\n      {\r\n       return Concurrency.Return(null);\r\n      });\r\n     }));\r\n    });\r\n   }));\r\n  })),null);\r\n };\r\n UI.clean=function()\r\n {\r\n  UI.detailsV().Set(\"\");\r\n };\r\n UI.optsV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.optsV;\r\n };\r\n UI.codeV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.codeV;\r\n };\r\n UI.wsWrnsV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.wsWrnsV;\r\n };\r\n UI.wsErrsV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.wsErrsV;\r\n };\r\n UI.fsErrsV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.fsErrsV;\r\n };\r\n UI.detailsV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.detailsV;\r\n };\r\n WasmLoader.printfn=function(fmt)\r\n {\r\n  return fmt(Remoting.messaging().wprintfn);\r\n };\r\n WasmLoader.wasmStatusV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.wasmStatusV;\r\n };\r\n WSFrameworkTest.mainDocNameVar=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainDocNameVar;\r\n };\r\n WSFrameworkTest.mainDoc=function()\r\n {\r\n  return Doc.Element(\"div\",[],[Doc.Element(\"h1\",[],[Doc.TextNode(\"Hello WSFramework\")]),WSFrameworkTest.testVarInput(),WSFrameworkTest.testVarOut()]);\r\n };\r\n WSFrameworkTest.testVarOut=function()\r\n {\r\n  return Doc.Element(\"div\",[],[Doc.TextView(WSFrameworkTest.testVar().get_View())]);\r\n };\r\n WSFrameworkTest.testVarInput=function()\r\n {\r\n  return Doc.Element(\"div\",[],[Doc.Input([],WSFrameworkTest.testVar())]);\r\n };\r\n WSFrameworkTest.testVar=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.testVar;\r\n };\r\n ModuleName=AssemblyData.ModuleName=Runtime.Class({\r\n  get_Id2:function()\r\n  {\r\n   return Strings.Replace(this.get_Id(),\"+\",\".\");\r\n  },\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,ModuleName);\r\n TypeName=AssemblyData.TypeName=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,TypeName);\r\n MethodName=AssemblyData.MethodName=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,MethodName);\r\n AssemblyName=AssemblyData.AssemblyName=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,AssemblyName);\r\n AssemblyRef=AssemblyData.AssemblyRef=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,AssemblyRef);\r\n JSCode=AssemblyData.JSCode=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,JSCode);\r\n ModuleRef.New=function(name,asmName)\r\n {\r\n  return{\r\n   name:name,\r\n   asmName:asmName\r\n  };\r\n };\r\n TypeRef.New=function(name,asm)\r\n {\r\n  return{\r\n   name:name,\r\n   asm:asm\r\n  };\r\n };\r\n MethodDef.New=function(name,retType,parms,isField)\r\n {\r\n  return{\r\n   name:name,\r\n   retType:retType,\r\n   parms:parms,\r\n   isField:isField\r\n  };\r\n };\r\n ModuleDef.New=function(name,methods)\r\n {\r\n  return{\r\n   name:name,\r\n   methods:methods\r\n  };\r\n };\r\n AssemblyDef.New=function(name,self$1,modules,dependencies,javaScript)\r\n {\r\n  return{\r\n   name:name,\r\n   self:self$1,\r\n   modules:modules,\r\n   dependencies:dependencies,\r\n   javaScript:javaScript\r\n  };\r\n };\r\n LoadAsm.fetchAsmData=function(folder,a)\r\n {\r\n  var url,b;\r\n  url=a.$0;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(TxtRuntime.AsyncMap(IO.asyncReadTextAtRuntime(false,\"D:\\\\Abe\\\\CIPHERWorkspace\\\\FSharpStation\\\\src\",\"\",\"JSON\",\"\",url.indexOf(\"/\")!=-1?url:folder+url),function(t)\r\n   {\r\n    return Unchecked.Equals(typeof t,\"string\")?JSON.parse(t):t;\r\n   }),function(a$1)\r\n   {\r\n    var n,prop,opt,s,j,prop$1,opt$1,d;\r\n    return Concurrency.Return((n=new AssemblyName({\r\n     $:0,\r\n     $0:(opt=(prop=\"asName\",prop in a$1?{\r\n      $:1,\r\n      $0:a$1[prop]\r\n     }:null),opt==null?null:opt.$0)\r\n    }),(s=new AssemblyRef({\r\n     $:0,\r\n     $0:url\r\n    }),(j=new JSCode({\r\n     $:0,\r\n     $0:(opt$1=(prop$1=\"js\",prop$1 in a$1?{\r\n      $:1,\r\n      $0:a$1[prop$1]\r\n     }:null),opt$1==null?null:opt$1.$0)\r\n    }),(d=Arrays.map(function(a$2)\r\n    {\r\n     return new AssemblyRef({\r\n      $:0,\r\n      $0:a$2\r\n     });\r\n    },a$1.dependencies),AssemblyDef.New(n,s,Arrays.map(function(mo)\r\n    {\r\n     var prop$2,opt$2;\r\n     return ModuleDef.New(new ModuleName({\r\n      $:0,\r\n      $0:(opt$2=(prop$2=\"moName\",prop$2 in mo?{\r\n       $:1,\r\n       $0:mo[prop$2]\r\n      }:null),opt$2==null?null:opt$2.$0)\r\n     }),Arrays.map(function(me)\r\n     {\r\n      var n$1,prop$3,opt$3,i,v,prop$4,opt$4,x,prop$5,opt$5,x$1,prop$6,opt$6;\r\n      n$1=new MethodName({\r\n       $:0,\r\n       $0:(opt$3=(prop$3=\"meName\",prop$3 in me?{\r\n        $:1,\r\n        $0:me[prop$3]\r\n       }:null),opt$3==null?null:opt$3.$0)\r\n      });\r\n      i=(v=(prop$4=\"isField\",prop$4 in me?{\r\n       $:1,\r\n       $0:me[prop$4]\r\n      }:null),(opt$4=v==null?null:{\r\n       $:1,\r\n       $0:1*v.$0\r\n      },opt$4==null?null:opt$4.$0))===1;\r\n      return MethodDef.New(n$1,TypeRef.New(new TypeName({\r\n       $:0,\r\n       $0:(opt$5=(x=me.type,(prop$5=\"tName\",prop$5 in x?{\r\n        $:1,\r\n        $0:x[prop$5]\r\n       }:null)),opt$5==null?null:opt$5.$0)\r\n      }),new AssemblyName({\r\n       $:0,\r\n       $0:(opt$6=(x$1=me.type,(prop$6=\"asm\",prop$6 in x$1?{\r\n        $:1,\r\n        $0:x$1[prop$6]\r\n       }:null)),opt$6==null?null:opt$6.$0)\r\n      })),Arrays.map(function(p)\r\n      {\r\n       var prop$7,opt$7,prop$8,opt$8;\r\n       return TypeRef.New(new TypeName({\r\n        $:0,\r\n        $0:(opt$7=(prop$7=\"tName\",prop$7 in p?{\r\n         $:1,\r\n         $0:p[prop$7]\r\n        }:null),opt$7==null?null:opt$7.$0)\r\n       }),new AssemblyName({\r\n        $:0,\r\n        $0:(opt$8=(prop$8=\"asm\",prop$8 in p?{\r\n         $:1,\r\n         $0:p[prop$8]\r\n        }:null),opt$8==null?null:opt$8.$0)\r\n       }));\r\n      },me.parms),i);\r\n     },mo.methods));\r\n    },a$1.modules),d,j))))));\r\n   });\r\n  });\r\n };\r\n AssemblyData.assembliesDoc=function()\r\n {\r\n  return Doc.Concat([Doc.Button(\"Load module:\",[],function()\r\n  {\r\n   AssemblyData.loadThisModule();\r\n  }),Doc.Input([],AssemblyData.thisModuleV()),AssemblyData.listAssembliesDoc(),AssemblyData.currentAssembly(),AssemblyData.styleDoc()]);\r\n };\r\n AssemblyData.currentAssembly=function()\r\n {\r\n  var b;\r\n  return Doc.BindView(Global.id,(b=View.get_Do(),View.Bind(function(a)\r\n  {\r\n   return a!=null&&a.$==1?View.Bind(function(a$1)\r\n   {\r\n    return a$1!=null&&a$1.$==1?View.Const(AssemblyData.assemblyDoc(a$1.$0)):View.Const(Doc.get_Empty());\r\n   },AssemblyData.assemblies().TryFindByKeyAsView(a.$0)):View.Const(Doc.get_Empty());\r\n  },AssemblyData.selectedAssembly().get_View())));\r\n };\r\n AssemblyData.assemblyDoc=function(asm)\r\n {\r\n  var groups,y;\r\n  function emptyDoc(mo,me)\r\n  {\r\n   return Doc.get_Empty();\r\n  }\r\n  function inputVar(mo,me)\r\n  {\r\n   if(me.retType.name.get_Id()!==\"Var<string>\")\r\n    return Doc.get_Empty();\r\n   else\r\n    try\r\n    {\r\n     return Doc.Input(List.T.Empty,Global[\"eval\"]((((Runtime.Curried3(function($1,$2,$3)\r\n     {\r\n      return $1(Utils.toSafe($2)+\".\"+Utils.toSafe($3)+\"()\");\r\n     }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id())));\r\n    }\r\n    catch(e)\r\n    {\r\n     return Doc.TextNode(e.message);\r\n    }\r\n  }\r\n  function printText(mo,me)\r\n  {\r\n   var $1,x;\r\n   if(me.retType.name.get_Id().indexOf(\"<\")!=-1)\r\n    return Doc.get_Empty();\r\n   else\r\n    {\r\n     try\r\n     {\r\n      $1=(x=Global[\"eval\"]((((Runtime.Curried3(function($2,$3,$4)\r\n      {\r\n       return $2(Utils.toSafe($3)+\".\"+Utils.toSafe($4)+\"()\");\r\n      }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id())),(function($2)\r\n      {\r\n       return function($3)\r\n       {\r\n        return $2(Utils.prettyPrint($3));\r\n       };\r\n      }(Global.id))(x));\r\n     }\r\n     catch(e)\r\n     {\r\n      $1=e.message;\r\n     }\r\n     return Doc.TextNode($1);\r\n    }\r\n  }\r\n  function showDoc(mo,me)\r\n  {\r\n   return Doc.Concat([Doc.Button(\"Show\",[],function()\r\n   {\r\n    var a,x;\r\n    a=(x=(((Runtime.Curried3(function($1,$2,$3)\r\n    {\r\n     return $1(Utils.toSafe($2)+\".\"+Utils.toSafe($3)+\"()\");\r\n    }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id()),(function($1)\r\n    {\r\n     return function($2)\r\n     {\r\n      return $1(\"WebSharper.UI.Doc.Concat([\"+Utils.toSafe($2)+\"])\");\r\n     };\r\n    }(Global.id))(x));\r\n    WSFrameworkTest.mainDocNameVar().Set(a);\r\n   }),Doc.Button(\"Add\",[],function()\r\n   {\r\n    var code,a,x;\r\n    code=WSFrameworkTest.mainDocNameVar().Get();\r\n    a=(x=(((Runtime.Curried3(function($1,$2,$3)\r\n    {\r\n     return $1(Utils.toSafe($2)+\".\"+Utils.toSafe($3)+\"()\");\r\n    }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id()),(((Runtime.Curried3(function($1,$2,$3)\r\n    {\r\n     return $1(Utils.toSafe($2)+\", \"+Utils.toSafe($3)+\"])\");\r\n    }))(Global.id))(Slice.string(code,null,{\r\n     $:1,\r\n     $0:code.length-3\r\n    })))(x));\r\n    WSFrameworkTest.mainDocNameVar().Set(a);\r\n   })]);\r\n  }\r\n  function m(oldp,t)\r\n  {\r\n   var p;\r\n   p=t[1];\r\n   return[[t[0],function(me)\r\n   {\r\n    return p(me)&&!oldp(me);\r\n   }],function(me)\r\n   {\r\n    return p(me)||oldp(me);\r\n   }];\r\n  }\r\n  groups=(y=List.ofArray([[function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return inputVar($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return Strings.StartsWith(me.retType.name.get_Id(),\"Var<\")&&me.isField;\r\n  }],[function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return emptyDoc($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return Strings.StartsWith(me.retType.name.get_Id(),\"View<\")&&me.isField;\r\n  }],[function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return printText($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return me.retType.name.get_Id()!==\"Doc\"&&me.isField&&!(me.retType.name.get_Id().indexOf(\"->\")!=-1);\r\n  }],[function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return showDoc($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return me.retType.name.get_Id()===\"Doc\"&&(me.isField||Seq.isEmpty(me.parms));\r\n  }],[function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return emptyDoc($1,$2);\r\n   };\r\n  },function()\r\n  {\r\n   return true;\r\n  }]]),(((Runtime.Curried3(Seq.mapFold))(m))(function()\r\n  {\r\n   return false;\r\n  }))(y))[0];\r\n  return Doc.Concat([Doc.Element(\"h3\",[],[Doc.TextNode(asm.name.get_Id())]),Doc.Element(\"div\",[AttrModule.Class(\"wsfmwk-alternate\")],List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.collect(function(m$1)\r\n   {\r\n    var f;\r\n    f=m$1[0];\r\n    return[AssemblyData.methodRows(m$1[1],asm,function($1,$2)\r\n    {\r\n     return(f($1))($2);\r\n    })];\r\n   },groups);\r\n  })))]);\r\n };\r\n AssemblyData.styleDoc=function()\r\n {\r\n  return Doc.Element(\"style\",List.T.Empty,List.ofArray([Doc.TextNode(\"\\r\\n                    .wsfmwk-alternate > * :nth-child(even) {background: #CCF}\\r\\n                    .wsfmwk-alternate > * :nth-child(odd ) {background: #CFC}\\r\\n                    .wsfmwk-alternate td { border: white ; border-style: solid ; border-width: thin}\\r\\n                    .wsfmwk-alternate tr { border: white ; border-style: solid ; border-width: thin}\\r\\n                \")]));\r\n };\r\n AssemblyData.methodRows=function(p,asm,f)\r\n {\r\n  return Doc.Element(\"table\",[AttrProxy.Create(\"style\",\"font-family: monospace\")],List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.collect(function(mo)\r\n   {\r\n    var methods;\r\n    methods=Seq.filter(p,mo.methods);\r\n    return Seq.length(methods)>0?[Doc.Element(\"tr\",[],List.ofSeq(Seq.delay(function()\r\n    {\r\n     return[Doc.Element(\"td\",[],List.ofSeq(Seq.delay(function()\r\n     {\r\n      return Seq.append([Doc.Element(\"b\",[],[Doc.TextNode(mo.name.get_Id2())])],Seq.delay(function()\r\n      {\r\n       return Seq.collect(function(me)\r\n       {\r\n        var x;\r\n        return[Doc.Element(\"tr\",[AssemblyData.click(function()\r\n        {\r\n         AssemblyData.selectedMethod().Set({\r\n          $:1,\r\n          $0:[mo.name,me.name]\r\n         });\r\n        })],[Doc.Element(\"td\",[],[Doc.TextNode(me.name.get_Id())]),Doc.Element(\"td\",[],[Doc.TextNode(me.isField?\"\":(x=Strings.concat(\", \",Seq.map(function(t)\r\n        {\r\n         return t.name.get_Id();\r\n        },me.parms)),(function($1)\r\n        {\r\n         return function($2)\r\n         {\r\n          return $1(\"(\"+Utils.toSafe($2)+\")\");\r\n         };\r\n        }(Global.id))(x)))]),Doc.Element(\"td\",[AssemblyData.nobr()],[Doc.TextNode(me.isField?\":\":\" -> \")]),Doc.Element(\"td\",[],[Doc.TextNode(me.retType.name.get_Id())]),Doc.Element(\"td\",[],[f(mo,me)])])];\r\n       },methods);\r\n      }));\r\n     })))];\r\n    })))]:[];\r\n   },asm.modules);\r\n  })));\r\n };\r\n AssemblyData.selectedMethod=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.selectedMethod;\r\n };\r\n AssemblyData.listAssembliesDoc=function()\r\n {\r\n  var m;\r\n  function f(r,asmW)\r\n  {\r\n   return Doc.Element(\"tr\",[],[Doc.Element(\"td\",[AssemblyData.click(function()\r\n   {\r\n    AssemblyData.selectedAssembly().Set({\r\n     $:1,\r\n     $0:r\r\n    });\r\n   })],[Doc.TextView(View.Map(function($1)\r\n   {\r\n    return $1.name.get_Id();\r\n   },asmW))])]);\r\n  }\r\n  return Doc.Element(\"table\",[],[(m=AssemblyData.assemblies(),Doc.ConvertSeqBy(m.key,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return f($1,$2);\r\n   };\r\n  },m[\"var\"].get_View()))]);\r\n };\r\n AssemblyData.selectedAssembly=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.selectedAssembly;\r\n };\r\n AssemblyData.click$1052$37=Runtime.Curried3(function(f,$1,$2)\r\n {\r\n  return f();\r\n });\r\n AssemblyData.click=function(f)\r\n {\r\n  return AttrProxy.HandlerImpl(\"click\",function()\r\n  {\r\n   return function()\r\n   {\r\n    return f();\r\n   };\r\n  });\r\n };\r\n AssemblyData.nobr=function()\r\n {\r\n  return AttrProxy.Create(\"style\",\"white-space: nowrap\");\r\n };\r\n AssemblyData.loadThisModule=function()\r\n {\r\n  Concurrency.Start(AssemblyData.loadAssembly(new AssemblyRef({\r\n   $:0,\r\n   $0:AssemblyData.thisModuleV().Get()\r\n  })),null);\r\n };\r\n AssemblyData.thisModuleV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.thisModuleV;\r\n };\r\n AssemblyData.alreadyLoaded=function()\r\n {\r\n  return Seq.length((AssemblyData.assemblies())[\"var\"].Get())>0;\r\n };\r\n AssemblyData.loadTesting=function()\r\n {\r\n  Concurrency.Start(AssemblyData.loadAssembly(new AssemblyRef({\r\n   $:0,\r\n   $0:(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(\"testing.asm?q=\"+Utils.prettyPrint($2));\r\n    };\r\n   }(Global.id))(Date.now())\r\n  })),null);\r\n };\r\n AssemblyData.loadAssembly=function(asm)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(AssemblyData[\"loadAssembly'\"](AssemblyData.isLoaded,function(d)\r\n   {\r\n    AssemblyData.loadDef(d);\r\n   },function(a)\r\n   {\r\n    return LoadAsm.fetchAsmData(AssemblyData.Folder(),a);\r\n   },asm),function()\r\n   {\r\n    var asms;\r\n    asms=Arrays.ofSeq((AssemblyData.assemblies())[\"var\"].Get());\r\n    self.IntelliFactory.Runtime.Start();\r\n    AssemblyData.saveAssemblies(asms);\r\n    return Concurrency.Zero();\r\n   });\r\n  });\r\n };\r\n AssemblyData.saveAssemblies=function(asms)\r\n {\r\n  AssemblyData.assemblies().Set(asms);\r\n };\r\n AssemblyData.Folder=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.Folder;\r\n };\r\n AssemblyData.loadDef=function(def)\r\n {\r\n  var asms;\r\n  try\r\n  {\r\n   asms=List.ofSeq((AssemblyData.assemblies())[\"var\"].Get());\r\n   Global[\"eval\"]((((Runtime.Curried3(function($1,$2,$3)\r\n   {\r\n    return $1(\"console.log('loading \"+Utils.toSafe($2)+\" ...');\"+Utils.toSafe($3));\r\n   }))(Global.id))(def.name.get_Id()))(def.javaScript.get_Id()));\r\n   AssemblyData.assemblies().Set(new List.T({\r\n    $:1,\r\n    $0:def,\r\n    $1:asms\r\n   }));\r\n  }\r\n  catch(e)\r\n  {\r\n   ((function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(Utils.prettyPrint($2));\r\n    };\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }))(e));\r\n  }\r\n };\r\n AssemblyData.isLoaded=function(asmRef)\r\n {\r\n  return AssemblyData.assemblies().TryFind(function(ad)\r\n  {\r\n   return Unchecked.Equals(ad.self,asmRef);\r\n  })!=null;\r\n };\r\n AssemblyData.assemblies=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.assemblies;\r\n };\r\n AssemblyData[\"loadAssembly'\"]=function(isLoaded,loadDef,fetchAsmData,asm)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return isLoaded(asm)?Concurrency.Zero():Concurrency.Bind(fetchAsmData(asm),function(a)\r\n   {\r\n    return Concurrency.Combine(Concurrency.For(a.dependencies,function(a$1)\r\n    {\r\n     return Concurrency.Bind(AssemblyData[\"loadAssembly'\"](isLoaded,loadDef,fetchAsmData,a$1),function()\r\n     {\r\n      return Concurrency.Return(null);\r\n     });\r\n    }),Concurrency.Delay(function()\r\n    {\r\n     loadDef(a);\r\n     return Concurrency.Zero();\r\n    }));\r\n   });\r\n  });\r\n };\r\n WSFramework.main=function()\r\n {\r\n  var x,a;\r\n  if(!(!self.document))\r\n   if(AssemblyData.alreadyLoaded())\r\n    {\r\n     x=Doc.Element(\"div\",[],[WSFramework.mainDocInput(),AssemblyData.assembliesDoc(),UI.mainDoc(),Doc.Element(\"div\",[],[WSFramework.mainSubDoc()])]);\r\n     a=self.document.body;\r\n     Templates.LoadLocalTemplates(\"\");\r\n     Doc.Run(a,x);\r\n    }\r\n   else\r\n    AssemblyData.loadTesting();\r\n };\r\n WSFramework.mainSubDoc=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainSubDoc;\r\n };\r\n WSFramework.mainDocInput=function()\r\n {\r\n  return Doc.Element(\"div\",[],[Doc.Input([AttrProxy.Create(\"style\",\"width: 100%\")],WSFramework.mainDocNameVar())]);\r\n };\r\n WSFramework.mainDocVar=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainDocVar;\r\n };\r\n WSFramework.mainDocNameVar=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainDocNameVar$1;\r\n };\r\n SC$1.$cctor=function()\r\n {\r\n  var f,g;\r\n  SC$1.$cctor=Global.ignore;\r\n  function g$1(s)\r\n  {\r\n   return Strings.concat(\"\\n\",s);\r\n  }\r\n  function f$1(s)\r\n  {\r\n   return String.splitByChar(\"\\n\",s);\r\n  }\r\n  function g$2(s)\r\n  {\r\n   var a,b;\r\n   return Slice.array(s,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:(a=0,(b=Arrays.length(s)-2,Unchecked.Compare(a,b)===1?a:b))\r\n   });\r\n  }\r\n  function g$3(s)\r\n  {\r\n   return Strings.concat(\"\\n\",s);\r\n  }\r\n  function f$2(s)\r\n  {\r\n   return s+\"T00:00:00\";\r\n  }\r\n  SC$1.unindentStr=function(x)\r\n  {\r\n   return g$1(String.unindent(x));\r\n  };\r\n  SC$1.skipLastLine=(f=function(x)\r\n  {\r\n   return g$2(f$1(x));\r\n  },function(x)\r\n  {\r\n   return g$3(f(x));\r\n  });\r\n  SC$1.parseDateO2=(g=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o,m;\r\n   o=0;\r\n   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];\r\n  }),function(x)\r\n  {\r\n   return g(f$2(x));\r\n  });\r\n  SC$1.parseDateO=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o,m;\r\n   o=0;\r\n   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];\r\n  });\r\n  SC$1.parseIntO=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o;\r\n   o=0;\r\n   return[Numeric.TryParseInt32(a,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o];\r\n  });\r\n  SC$1.parseInt64O=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o;\r\n   o=0;\r\n   return[Numeric.TryParseInt64(a,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o];\r\n  });\r\n  SC$1.parseSingleO=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o,$1;\r\n   o=0;\r\n   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];\r\n  });\r\n  SC$1.parseDoubleO=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o,$1;\r\n   o=0;\r\n   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];\r\n  });\r\n  SC$1.parseGuidO=ParseO.tryParseWith(function(a)\r\n  {\r\n   var o;\r\n   o=null;\r\n   return[Guid.TryParse(a,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o];\r\n  });\r\n  SC$1[\"|Date|_|\"]=ParseO.parseDateO();\r\n  SC$1[\"|Int|_|\"]=ParseO.parseIntO();\r\n  SC$1[\"|Int64|_|\"]=ParseO.parseInt64O();\r\n  SC$1[\"|Single|_|\"]=ParseO.parseSingleO();\r\n  SC$1[\"|Double|_|\"]=ParseO.parseDoubleO();\r\n  SC$1[\"|Guid|_|\"]=ParseO.parseGuidO();\r\n  SC$1.wasmStatusV=Var$1.Create$1(WasmStatus.WasmNotLoaded);\r\n  SC$1.originalProvider=Remoting$1.AjaxProvider();\r\n  SC$1.queues=new Dictionary.New$5();\r\n  SC$1.messaging=IMessagingO.New(function(h)\r\n  {\r\n   return function(d)\r\n   {\r\n    return self.WASM_WsTranslator_FsRoot_WsTranslator_runRpc(h,d);\r\n   };\r\n  },function(t)\r\n  {\r\n   Remoting.returnValue0(t[0],t[1]);\r\n  },function(t)\r\n  {\r\n   Remoting.returnExn0(t[0],t[1]);\r\n  },function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"EARLY PRINTING!: \"+Utils.toSafe($2));\r\n   };\r\n  }(function(s)\r\n  {\r\n   console.log(s);\r\n  }));\r\n  SC$1.workerO=null;\r\n  SC$1.rootPath=\"/WASM/publish/\";\r\n  SC$1.detailsV=Var$1.Create$1(\"\");\r\n  SC$1.fsErrsV=Var$1.Create$1([]);\r\n  SC$1.wsErrsV=Var$1.Create$1([]);\r\n  SC$1.wsWrnsV=Var$1.Create$1([]);\r\n  SC$1.codeV=Var$1.Create$1(\"\\r\\n    open WebSharper\\r\\n    open WebSharper.UI\\r\\n    open WebSharper.UI.Html\\r\\n    \\r\\n    let name = Var.Create \\\"World\\\"\\r\\n    \\r\\n    [< Inline \\\"'Hello inline '\\\" >]\\r\\n    let bDoc() = \\\"Hello\\\"\\r\\n    \\r\\n    let cDoc() = text name.V\\r\\n    \\r\\n    let aDoc() = \\r\\n        div [] [\\r\\n            text <| bDoc()\\r\\n            cDoc()\\r\\n        ]\\r\\n    \\r\\n            \");\r\n  SC$1.optsV=Var$1.Create$1(Strings.concat(\"\\n\",Seq.map(Strings.Trim,Strings.SplitChars(\"\\r\\n                                    /tmp/source.fsx\\r\\n                                    -o:source.exe\\r\\n                                    --simpleresolution\\r\\n                                    --nowarn:3186\\r\\n                                    --optimize-\\r\\n                                    --noframework\\r\\n                                    --fullpaths\\r\\n                                    --warn:3\\r\\n                                    --target:exe\\r\\n                                    -r:/dlls/WebSharper.Core.dll\\r\\n                                    -r:/dlls/WebSharper.UI.dll\\r\\n                                    -r:/dlls/WebSharper.Sitelets.dll\\r\\n                                    -r:/managed/FSharp.Core.dll\\r\\n                                    -r:/managed/mscorlib.dll\\r\\n                                    -r:/managed/netstandard.dll\\r\\n                                    -r:/managed/System.dll\\r\\n                                    -r:/managed/System.Core.dll\\r\\n                                    -r:/managed/System.IO.dll\\r\\n                                    -r:/managed/System.Runtime.dll\\r\\n                                    -r:/managed/System.Net.Http.dll\\r\\n                                    -r:/managed/System.Threading.dll\\r\\n                                    -r:/managed/System.Numerics.dll\\r\\n                                \",[\"\\n\"],0))));\r\n  !(!self.document)?Remoting.set_messaging(IMessagingO.New(Remoting.messaging().runRpc,Remoting.messaging().returnValue,Remoting.messaging().returnExn,function(txt)\r\n  {\r\n   var pre;\r\n   console.log(txt);\r\n   pre=UI.detailsV().Get();\r\n   UI.detailsV().Set(pre+(pre===\"\"?\"\":\"\\n\")+txt);\r\n  })):void 0;\r\n  SC$1.testVar=Var$1.Create$1(\"Hello WSFrameWork\");\r\n  SC$1.mainDocNameVar=Var$1.Create$1(\"FsRoot.TestingJS.WSFrameworkTest.mainDoc()\");\r\n  SC$1.assemblies=ListModel.Create(function(ad)\r\n  {\r\n   return ad.name;\r\n  },List.T.Empty);\r\n  SC$1.Folder=\"/EPFileX/Assemblies/\";\r\n  SC$1.thisModuleV=Var$1.Create$1(\"Covid.asm\");\r\n  SC$1.selectedAssembly=Var$1.Create$1(null);\r\n  SC$1.selectedMethod=Var$1.Create$1(null);\r\n  SC$1.mainDocNameVar$1=WSFrameworkTest.mainDocNameVar();\r\n  SC$1.mainDocVar=Var$1.Create$1(Doc.Element(\"h1\",[],[Doc.TextNode(\"mainDocVar not initialized\")]));\r\n  View.Sink(function(nm)\r\n  {\r\n   var docObj;\r\n   try\r\n   {\r\n    docObj=Global[\"eval\"](nm);\r\n    docObj instanceof Doc?WSFramework.mainDocVar().Set(docObj):typeof docObj==\"string\"?WSFramework.mainDocVar().Set(Doc.TextNode(docObj)):docObj instanceof UI$1.Var?WSFramework.mainDocVar().Set(Doc.TextView(docObj.get_View())):docObj instanceof View?WSFramework.mainDocVar().Set(Doc.TextView(docObj)):console.log(\"mainDocNameVar type mismatch: \",docObj);\r\n   }\r\n   catch(e)\r\n   {\r\n    ((function($1)\r\n    {\r\n     return function($2)\r\n     {\r\n      return $1(Utils.prettyPrint($2));\r\n     };\r\n    }(function(s)\r\n    {\r\n     console.log(s);\r\n    }))(e));\r\n   }\r\n  },WSFramework.mainDocNameVar().get_View());\r\n  SC$1.mainSubDoc=Doc.BindView(Global.id,WSFramework.mainDocVar().get_View());\r\n };\r\n testing_GeneratedPrintf.p=function($1)\r\n {\r\n  return $1.$==4?\"WasmWorkerLoaded\":$1.$==3?\"WasmWorkerLoading\":$1.$==2?\"WasmLoaded\":$1.$==1?\"WasmLoading\":\"WasmNotLoaded\";\r\n };\r\n testing_GeneratedPrintf.p$3=function($1)\r\n {\r\n  return $1.$==1?\"PublicProxy \"+Utils.prettyPrint($1.$0):\"SourceWarning \"+Utils.prettyPrint($1.$0);\r\n };\r\n testing_GeneratedPrintf.p$2=function($1)\r\n {\r\n  return $1.$==6?\"FieldNotFound (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\")\":$1.$==5?\"ConstructorNotFound (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\", \"+Utils.printList(Utils.prettyPrint,$1.$2)+\")\":$1.$==4?\"MethodNameNotFound (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\", \"+Utils.printList(Utils.prettyPrint,$1.$2)+\")\":$1.$==3?\"MethodNotFound (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\", \"+Utils.printList(Utils.prettyPrint,$1.$2)+\")\":$1.$==2?\"TypeNotFound \"+Utils.prettyPrint($1.$0):$1.$==1?\"NameConflict (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\")\":\"SourceError \"+Utils.prettyPrint($1.$0);\r\n };\r\n testing_GeneratedPrintf.p$1=function($1)\r\n {\r\n  return $1==null?\"null\":\"Some \"+GeneratedPrintf.p($1.$0);\r\n };\r\n GeneratedPrintf.p=function($1)\r\n {\r\n  return\"{\"+(\"FileName = \"+Utils.prettyPrint($1.FileName))+\"; \"+(\"Start = \"+(\"(\"+Utils.prettyPrint($1.Start[0])+\", \"+Utils.prettyPrint($1.Start[1])+\")\"))+\"; \"+(\"End = \"+(\"(\"+Utils.prettyPrint($1.End[0])+\", \"+Utils.prettyPrint($1.End[1])+\")\"))+\"}\";\r\n };\r\n Runtime.OnLoad(function()\r\n {\r\n  WSFramework.main();\r\n });\r\n}());\r\n"
}
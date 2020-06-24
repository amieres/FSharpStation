{
  "asName": "WebSharper.Main",
  "dependencies": [],
  "resources": [],
  "modules": [
    {
      "moName": "WebSharper.JavaScript.JSModule",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.JS",
      "methods": [
        {
          "meName": "GetFieldValues",
          "isField": 0,
          "type": {
            "tName": "Object[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "GetFieldNames",
          "isField": 0,
          "type": {
            "tName": "string[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "GetFields",
          "isField": 0,
          "type": {
            "tName": "(string * Object)[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.Pervasives",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.NonStandardPromiseRejectionException",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.Promise+Builder",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.Promise",
      "methods": [
        {
          "meName": "For",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Promise<unit>",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> WebSharper.JavaScript.Promise<unit>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "AsTask",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Promise<'a>",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "AsAsync",
          "isField": 0,
          "type": {
            "tName": "Async<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Promise<'a>",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "OfTask",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Promise<'a>",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "Threading.Tasks.Task<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "OfAsync",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Promise<'a>",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "unwrapExn",
          "isField": 0,
          "type": {
            "tName": "Exception",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.JavaScript.PromiseExtensions",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.Pervasives+Optional",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.Pervasives+Union",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.Pervasives",
      "methods": [
        {
          "meName": "NewFromSeq",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "IEnumerable<(string * Object)>",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.Json",
      "methods": [
        {
          "meName": "Activate",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "shallowMap",
          "isField": 0,
          "type": {
            "tName": "Object",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(Object -> Object)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "lookup",
          "isField": 0,
          "type": {
            "tName": "Object",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string[]",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.Remoting+XhrProvider",
      "methods": []
    },
    {
      "moName": "WebSharper.Remoting+AjaxRemotingProvider",
      "methods": []
    },
    {
      "moName": "WebSharper.Remoting",
      "methods": [
        {
          "meName": "ajax",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "(string -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Exception -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "makePayload",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "makeHeaders",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "AjaxProvider",
          "isField": 1,
          "type": {
            "tName": "IAjaxProvider",
            "asm": "WebSharper.Main"
          },
          "parms": []
        },
        {
          "meName": "set_AjaxProvider",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IAjaxProvider",
              "asm": "WebSharper.Main"
            }
          ]
        },
        {
          "meName": "UseHttps",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "EndPoint",
          "isField": 1,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "set_EndPoint",
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
        }
      ]
    },
    {
      "moName": "StartupCode$WebSharper_Main$Remoting",
      "methods": []
    },
    {
      "moName": "WebSharper.HtmlContentExtensions+SingleNode",
      "methods": []
    },
    {
      "moName": "WebSharper.Activator",
      "methods": [
        {
          "meName": "Activate",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "onReady",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Instances",
          "isField": 1,
          "type": {
            "tName": "Object",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "set_Instances",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "META_ID",
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
      "moName": "StartupCode$WebSharper_Main$Html",
      "methods": []
    },
    {
      "moName": "WebSharper.FSharpConvert",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.JavaScriptExtensions",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.Extensions",
      "methods": []
    },
    {
      "moName": "WebSharper.Comparers.EquatableEqualityComparer`1",
      "methods": []
    },
    {
      "moName": "WebSharper.Comparers.BaseEqualityComparer`1",
      "methods": []
    },
    {
      "moName": "WebSharper.Comparers.ComparableComparer`1",
      "methods": []
    },
    {
      "moName": "WebSharper.Comparers.BaseComparer`1",
      "methods": []
    },
    {
      "moName": "WebSharper.Utils",
      "methods": [
        {
          "meName": "charRange",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<Char>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Char",
              "asm": "netstandard"
            },
            {
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "nullableOp",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "(Object -> (Object -> 'a))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "nullableOpL",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "(Object -> (Object -> 'a))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "nullableOpR",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "(Object -> (Object -> 'a))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "nullableCmp",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "(Object -> (Object -> bool))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "nullableCmpE",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "(Object -> (Object -> bool))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "nullableCmpL",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "(Object -> (Object -> bool))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "nullableCmpR",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "(Object -> (Object -> bool))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "nullableConv",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "(Object -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "prettyPrint",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "printArray2D",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(Object -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Object[,]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "printArray",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(Object -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Object[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "printList",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(Object -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<Object>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "padNumLeft",
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
          "meName": "spaceForPos",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "plusForPos",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "toSafe",
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
        }
      ]
    },
    {
      "moName": "WebSharper.Concurrency+Result`1",
      "methods": []
    },
    {
      "moName": "WebSharper.Concurrency+CT",
      "methods": []
    },
    {
      "moName": "WebSharper.Concurrency+AsyncBody`1",
      "methods": []
    },
    {
      "moName": "WebSharper.Concurrency+Scheduler",
      "methods": []
    },
    {
      "moName": "WebSharper.Concurrency",
      "methods": [
        {
          "meName": "For",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<unit> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> (AsyncBody<unit> -> unit))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "While",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<unit> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(AsyncBody<unit> -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Using",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<'b> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "('a -> (AsyncBody<'b> -> unit))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "TryCancelled",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<'a> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(AsyncBody<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(OperationCanceledException -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "OnCancel",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<IDisposable> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "StartChildAsTask",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<Threading.Tasks.Task<'a>> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(AsyncBody<'a> -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "StartChild",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<(AsyncBody<'a> -> unit)> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(AsyncBody<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Parallel",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<'a[]> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<(AsyncBody<'a> -> unit)>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Sleep",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<unit> -> unit)",
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
          "meName": "StartImmediateAsTask",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(AsyncBody<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<CT>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "StartAsTask",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(AsyncBody<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<CT>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "AwaitTask1",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<'a> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Threading.Tasks.Task<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "AwaitTask",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<unit> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Threading.Tasks.Task",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "AwaitEvent",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<'a> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEvent<FSharpHandler<'a>, 'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<(unit -> unit)>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "StartImmediate",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(AsyncBody<unit> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<CT>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Start",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(AsyncBody<unit> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<CT>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "UncaughtAsyncError",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Exception",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "StartWithContinuations",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(AsyncBody<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Exception -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(OperationCanceledException -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<CT>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "FromContinuations",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<'a> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "((('a -> unit) * (Exception -> unit) * (OperationCanceledException -> unit)) -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "GetCT",
          "isField": 1,
          "type": {
            "tName": "(AsyncBody<CT> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "Catch",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<FSharpChoice<'a, Exception>> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(AsyncBody<'a> -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "TryWith",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<'a> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(AsyncBody<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Exception -> (AsyncBody<'a> -> unit))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "TryFinally",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<'a> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(AsyncBody<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Delay",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<'a> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> (AsyncBody<'a> -> unit))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Combine",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<'a> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(AsyncBody<unit> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(AsyncBody<'a> -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Bind",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<'b> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(AsyncBody<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> (AsyncBody<'b> -> unit))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Zero",
          "isField": 1,
          "type": {
            "tName": "(AsyncBody<unit> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "Return",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<'a> -> unit)",
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
          "meName": "checkCancel",
          "isField": 0,
          "type": {
            "tName": "(AsyncBody<'a> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(AsyncBody<'a> -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "cancel",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "AsyncBody<'a>",
              "asm": "WebSharper.Main"
            }
          ]
        },
        {
          "meName": "defCTS",
          "isField": 1,
          "type": {
            "tName": "FSharpRef<Threading.CancellationTokenSource>",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "scheduler",
          "isField": 1,
          "type": {
            "tName": "Scheduler",
            "asm": "WebSharper.Main"
          },
          "parms": []
        },
        {
          "meName": "Register",
          "isField": 0,
          "type": {
            "tName": "IDisposable",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "CT",
              "asm": "WebSharper.Main"
            },
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "noneCT",
          "isField": 1,
          "type": {
            "tName": "CT",
            "asm": "WebSharper.Main"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "StartupCode$WebSharper_Main$Concurrency",
      "methods": []
    },
    {
      "moName": "WebSharper.Enumerator+T`2",
      "methods": []
    },
    {
      "moName": "WebSharper.Enumerator",
      "methods": [
        {
          "meName": "Get0",
          "isField": 0,
          "type": {
            "tName": "Collections.IEnumerator",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Collections.IEnumerable",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Get",
          "isField": 0,
          "type": {
            "tName": "IEnumerator<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "StringEnumerator",
          "isField": 0,
          "type": {
            "tName": "IEnumerator<'a>",
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
          "meName": "ArrayEnumerator",
          "isField": 0,
          "type": {
            "tName": "IEnumerator<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object[]",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.Enumerable",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.Function",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.FuncWithArgs`2",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.FuncWithThis`2",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.FuncWithOnlyThis`2",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.FuncWithRest`2",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.FuncWithRest`3",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.FuncWithRest`4",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.FuncWithRest`5",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.FuncWithRest`6",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.FuncWithRest`7",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.FuncWithRest`8",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.FuncWithArgsRest`3",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.Optional`1",
      "methods": [
        {
          "meName": "_unique_Undefined",
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
      "moName": "WebSharper.JavaScript.ThisAction`1",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisAction`2",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisAction`3",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisAction`4",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisAction`5",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisAction`6",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisAction`7",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisFunc`2",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisFunc`3",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisFunc`4",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisFunc`5",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisFunc`6",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisFunc`7",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisFunc`8",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ParamsAction`1",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ParamsAction`2",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ParamsAction`3",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ParamsAction`4",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ParamsAction`5",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ParamsAction`6",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ParamsAction`7",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ParamsFunc`2",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ParamsFunc`3",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ParamsFunc`4",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ParamsFunc`5",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ParamsFunc`6",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ParamsFunc`7",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ParamsFunc`8",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisParamsAction`2",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisParamsAction`3",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisParamsAction`4",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisParamsAction`5",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisParamsAction`6",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisParamsAction`7",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisParamsAction`8",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisParamsFunc`3",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisParamsFunc`4",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisParamsFunc`5",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisParamsFunc`6",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisParamsFunc`7",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisParamsFunc`8",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.ThisParamsFunc`9",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.Union`2",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.Union`3",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.Union`4",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.Union`5",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.Union`6",
      "methods": []
    },
    {
      "moName": "WebSharper.JavaScript.Union`7",
      "methods": []
    },
    {
      "moName": "WebSharper.JSObject",
      "methods": []
    },
    {
      "moName": "WebSharper.CollectionInternals",
      "methods": [
        {
          "meName": "ArraySplitInto",
          "isField": 0,
          "type": {
            "tName": "'a[][]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ArrayContains",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ArrayTryFindBack",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ArrayTryFindIndexBack",
          "isField": 0,
          "type": {
            "tName": "Option<int>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ArrayMapFold",
          "isField": 0,
          "type": {
            "tName": "('c[] * 'b)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('b -> ('a -> ('c * 'b)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ArrayMapFoldBack",
          "isField": 0,
          "type": {
            "tName": "('c[] * 'b)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c * 'b)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "mapInPlace",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "mapiInPlace",
          "isField": 0,
          "type": {
            "tName": "'b[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(int -> ('a -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ArraySortInPlaceByDescending",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SeqTryHead",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SeqTryItem",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SeqTryLast",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SeqChunkBySize",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a[]>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ArrayCountBy",
          "isField": 0,
          "type": {
            "tName": "('b * int)[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SeqExcept",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ListSkip",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ArrayGroupBy",
          "isField": 0,
          "type": {
            "tName": "('b * 'a[])[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "InsufficientElements",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": []
        },
        {
          "meName": "SeqLast",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SeqContains",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ListSkipWhile",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "InputMustBeNonNegative",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": []
        },
        {
          "meName": "ArrayTranspose",
          "isField": 0,
          "type": {
            "tName": "'a[][]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[][]",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.Object",
      "methods": []
    },
    {
      "moName": "System.ValueType",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.LanguagePrimitives+IntrinsicFunctions",
      "methods": [
        {
          "meName": "checkBounds",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "checkBounds2D",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[,]",
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
          "meName": "checkRange",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
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
          "meName": "SetArray",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "GetArray",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "GetArraySub",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[]",
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
          "meName": "SetArraySub",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "GetArray2D",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "'a[,]",
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
          "meName": "SetArray2D",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Array2DZeroCreate",
          "isField": 0,
          "type": {
            "tName": "'a[,]",
            "asm": "netstandard"
          },
          "parms": [
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
          "meName": "GetArray2DSub",
          "isField": 0,
          "type": {
            "tName": "'a[,]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "int",
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
          "meName": "SetArray2DSub",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "GetLength",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Array",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "CheckThis",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
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
      "moName": "WebSharper.ArrayProxyModule",
      "methods": [
        {
          "meName": "binarySearch",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> int)",
              "asm": "FSharp.Core"
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
          "meName": "objBinarySearchComparer",
          "isField": 0,
          "type": {
            "tName": "('a -> int)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "sortInternal",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "(('a * 'a) -> int)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(int -> (int -> unit))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "sortSub",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "(('a * 'a) -> int)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "sortByKeys",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b[]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "(('a * 'a) -> int)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.Array",
      "methods": [
        {
          "meName": "Clear",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Array",
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
          "meName": "ConstrainedCopy",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Array",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "Array",
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
          "meName": "FindIndex",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "Predicate<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "FindLastIndex",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "Predicate<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Reverse",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Array",
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
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Collections.ArrayModule",
      "methods": [
        {
          "meName": "Sum",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SumBy",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "AllPairs",
          "isField": 0,
          "type": {
            "tName": "('a * 'b)[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Average",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "AverageBy",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "CopyTo",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a[]",
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
          "meName": "Choose",
          "isField": 0,
          "type": {
            "tName": "'b[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> Option<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Collect",
          "isField": 0,
          "type": {
            "tName": "'b[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b[])",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Concat",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a[]>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Create",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Exists",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Exists2",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> bool))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Fill",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Filter",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Find",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "FindIndex",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Fold",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('b -> ('a -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Fold2",
          "isField": 0,
          "type": {
            "tName": "'c",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('c -> ('a -> ('b -> 'c)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'c",
              "asm": ""
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "FoldBack",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "FoldBack2",
          "isField": 0,
          "type": {
            "tName": "'c",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c -> 'c)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b[]",
              "asm": "netstandard"
            },
            {
              "tName": "'c",
              "asm": ""
            }
          ]
        },
        {
          "meName": "ForAll",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ForAll2",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> bool))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Initialize",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "(int -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Iterate",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Iterate2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> unit))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "IterateIndexed",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(int -> ('a -> unit))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "IterateIndexed2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(int -> ('a -> ('b -> unit)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Map",
          "isField": 0,
          "type": {
            "tName": "'b[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Map2",
          "isField": 0,
          "type": {
            "tName": "'c[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'c))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "MapIndexed",
          "isField": 0,
          "type": {
            "tName": "'b[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(int -> ('a -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "MapIndexed2",
          "isField": 0,
          "type": {
            "tName": "'c[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(int -> ('a -> ('b -> 'c)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Max",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "MaxBy",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Min",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "MinBy",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "OfList",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "OfSeq",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Partition",
          "isField": 0,
          "type": {
            "tName": "('a[] * 'a[])",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Permute",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(int -> int)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Pick",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> Option<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Reduce",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> ('a -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ReduceBack",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> ('a -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Scan",
          "isField": 0,
          "type": {
            "tName": "'b[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('b -> ('a -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ScanBack",
          "isField": 0,
          "type": {
            "tName": "'b[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Sort",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SortBy",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SortInPlace",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SortInPlaceBy",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SortInPlaceWith",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> ('a -> int))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SortWith",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('a -> int))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SortByDescending",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SortDescending",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Transpose",
          "isField": 0,
          "type": {
            "tName": "'a[][]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a[]>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TryFind",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TryFindIndex",
          "isField": 0,
          "type": {
            "tName": "Option<int>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TryHead",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TryItem",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TryLast",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TryPick",
          "isField": 0,
          "type": {
            "tName": "Option<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Option<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Unzip",
          "isField": 0,
          "type": {
            "tName": "('a[] * 'b[])",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a * 'b)[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Unzip3",
          "isField": 0,
          "type": {
            "tName": "('a[] * 'b[] * 'c[])",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a * 'b * 'c)[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Zip",
          "isField": 0,
          "type": {
            "tName": "('a * 'b)[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Zip3",
          "isField": 0,
          "type": {
            "tName": "('a * 'b * 'c)[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b[]",
              "asm": "netstandard"
            },
            {
              "tName": "'c[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ChunkBySize",
          "isField": 0,
          "type": {
            "tName": "'a[][]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "CompareWith",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('a -> int))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Distinct",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "DistinctBy",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Except",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "FindBack",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "FindIndexBack",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Head",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Last",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Map3",
          "isField": 0,
          "type": {
            "tName": "'d[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c -> 'd)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b[]",
              "asm": "netstandard"
            },
            {
              "tName": "'c[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Pairwise",
          "isField": 0,
          "type": {
            "tName": "('a * 'a)[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Replicate",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Indexed",
          "isField": 0,
          "type": {
            "tName": "(int * 'a)[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Skip",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SkipWhile",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Tail",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Take",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TakeWhile",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ExactlyOne",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Unfold",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('b -> Option<('a * 'b)>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Windowed",
          "isField": 0,
          "type": {
            "tName": "'a[][]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SplitAt",
          "isField": 0,
          "type": {
            "tName": "('a[] * 'a[])",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "nonEmpty",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "checkLength",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "'b[]",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Collections.Array2DModule",
      "methods": [
        {
          "meName": "Initialize",
          "isField": 0,
          "type": {
            "tName": "'a[,]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "(int -> (int -> 'a))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Iterate",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "IterateIndexed",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(int -> (int -> ('a -> unit)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Map",
          "isField": 0,
          "type": {
            "tName": "'b[,]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "MapIndexed",
          "isField": 0,
          "type": {
            "tName": "'b[,]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(int -> (int -> ('a -> 'b)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Copy",
          "isField": 0,
          "type": {
            "tName": "'a[,]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Control.FSharpAsync",
      "methods": []
    },
    {
      "moName": "System.Threading.CancellationToken",
      "methods": []
    },
    {
      "moName": "System.Threading.CancellationTokenSource",
      "methods": [
        {
          "meName": "CreateLinkedTokenSource",
          "isField": 0,
          "type": {
            "tName": "Threading.CancellationTokenSource",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Threading.CancellationToken",
              "asm": "netstandard"
            },
            {
              "tName": "Threading.CancellationToken",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "CreateLinkedTokenSource",
          "isField": 0,
          "type": {
            "tName": "Threading.CancellationTokenSource",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Threading.CancellationToken[]",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.Threading.CancellationTokenRegistration",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Control.FSharpAsyncBuilder",
      "methods": []
    },
    {
      "moName": "System.Char",
      "methods": [
        {
          "meName": "IsWhiteSpace",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Parse",
          "isField": 0,
          "type": {
            "tName": "Char",
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
          "meName": "IsUpper",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "IsLower",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "IsLetterOrDigit",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "IsLetter",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "IsDigit",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "IsControl",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "GetNumericValue",
          "isField": 0,
          "type": {
            "tName": "Double",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Core.FSharpChoice`2",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.FSharpChoice`3",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.FSharpChoice`4",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.FSharpChoice`5",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.FSharpChoice`6",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.FSharpChoice`7",
      "methods": []
    },
    {
      "moName": "System.Console",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Control.CommonExtensions",
      "methods": [
        {
          "meName": "observer",
          "isField": 0,
          "type": {
            "tName": "IObserver<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.DateTimeHelpers",
      "methods": [
        {
          "meName": "LongTime",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ShortTime",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "LongDate",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Parse",
          "isField": 0,
          "type": {
            "tName": "int",
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
          "meName": "TryParse",
          "isField": 0,
          "type": {
            "tName": "Option<int>",
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
          "meName": "AddMonths",
          "isField": 0,
          "type": {
            "tName": "DateTime",
            "asm": "netstandard"
          },
          "parms": [
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
          "meName": "AddYears",
          "isField": 0,
          "type": {
            "tName": "DateTime",
            "asm": "netstandard"
          },
          "parms": [
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
          "meName": "TimePortion",
          "isField": 0,
          "type": {
            "tName": "TimeSpan",
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
          "meName": "DatePortion",
          "isField": 0,
          "type": {
            "tName": "DateTime",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.DateTime",
      "methods": []
    },
    {
      "moName": "System.DateTimeOffset",
      "methods": [
        {
          "meName": "get_Now",
          "isField": 0,
          "type": {
            "tName": "DateTimeOffset",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "get_DateTime",
          "isField": 0,
          "type": {
            "tName": "DateTime",
            "asm": "netstandard"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "System.Delegate",
      "methods": [
        {
          "meName": "InvocationList",
          "isField": 0,
          "type": {
            "tName": "Delegate[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Delegate",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "RemoveAll",
          "isField": 0,
          "type": {
            "tName": "Delegate",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Delegate",
              "asm": "netstandard"
            },
            {
              "tName": "Delegate",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Remove",
          "isField": 0,
          "type": {
            "tName": "Delegate",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Delegate",
              "asm": "netstandard"
            },
            {
              "tName": "Delegate",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "DelegateTarget",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
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
      "moName": "System.MulticastDelegate",
      "methods": []
    },
    {
      "moName": "WebSharper.Collections.DictionaryUtil",
      "methods": [
        {
          "meName": "getHashCode",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEqualityComparer<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "equals",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.FuncWithArgs<('a * 'a), bool>",
            "asm": "WebSharper.Core"
          },
          "parms": [
            {
              "tName": "IEqualityComparer<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "alreadyAdded",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": []
        },
        {
          "meName": "notPresent",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "System.Collections.Generic.Dictionary`2+KeyCollection+Enumerator",
      "methods": []
    },
    {
      "moName": "System.Collections.Generic.Dictionary`2+ValueCollection+Enumerator",
      "methods": []
    },
    {
      "moName": "System.Collections.Generic.Dictionary`2+KeyCollection",
      "methods": []
    },
    {
      "moName": "System.Collections.Generic.Dictionary`2+ValueCollection",
      "methods": []
    },
    {
      "moName": "System.Collections.Generic.Dictionary`2+Enumerator",
      "methods": []
    },
    {
      "moName": "System.Collections.Generic.Dictionary`2",
      "methods": []
    },
    {
      "moName": "System.Enum",
      "methods": []
    },
    {
      "moName": "WebSharper.Exception",
      "methods": [
        {
          "meName": "withInner",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Error",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        }
      ]
    },
    {
      "moName": "System.Exception",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.MatchFailureException",
      "methods": []
    },
    {
      "moName": "System.IndexOutOfRangeException",
      "methods": []
    },
    {
      "moName": "System.OperationCanceledException",
      "methods": []
    },
    {
      "moName": "System.ArgumentException",
      "methods": []
    },
    {
      "moName": "System.ArgumentOutOfRangeException",
      "methods": []
    },
    {
      "moName": "System.ArgumentNullException",
      "methods": []
    },
    {
      "moName": "System.InvalidOperationException",
      "methods": []
    },
    {
      "moName": "System.AggregateException",
      "methods": []
    },
    {
      "moName": "System.TimeoutException",
      "methods": []
    },
    {
      "moName": "System.FormatException",
      "methods": []
    },
    {
      "moName": "System.OverflowException",
      "methods": []
    },
    {
      "moName": "System.Threading.Tasks.TaskCanceledException",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.ExtraTopLevelOperators",
      "methods": [
        {
          "meName": "CreateArray2D",
          "isField": 0,
          "type": {
            "tName": "'b[,]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Core.FSharpFunc`2",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.FuncConvert",
      "methods": []
    },
    {
      "moName": "System.Guid",
      "methods": [
        {
          "meName": "NewGuid",
          "isField": 0,
          "type": {
            "tName": "Guid",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "TryParseExact",
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
            },
            {
              "tName": "Guid",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TryParse",
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
              "tName": "Guid",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ParseExact",
          "isField": 0,
          "type": {
            "tName": "Guid",
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
          "meName": "Parse",
          "isField": 0,
          "type": {
            "tName": "Guid",
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
          "meName": "ToString",
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
          "meName": "ParseError",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": []
        },
        {
          "meName": "ShapeError",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": []
        },
        {
          "meName": "HexaError",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": []
        },
        {
          "meName": "FormatError",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.Collections.HashSetUtil",
      "methods": [
        {
          "meName": "concat",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Array<'a>",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Array<WebSharper.JavaScript.Array<'a>>",
              "asm": "WebSharper.JavaScript"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.Collections.Generic.HashSet`1+Enumerator",
      "methods": []
    },
    {
      "moName": "System.Collections.Generic.HashSet`1",
      "methods": []
    },
    {
      "moName": "System.Collections.Generic.EqualityComparer`1",
      "methods": []
    },
    {
      "moName": "System.Collections.Generic.Comparer`1",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.LanguagePrimitives+IntrinsicOperators",
      "methods": []
    },
    {
      "moName": "System.Collections.Generic.KeyValuePair`2",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.LanguagePrimitives",
      "methods": []
    },
    {
      "moName": "System.Lazy`1",
      "methods": []
    },
    {
      "moName": "WebSharper.LazyExtensionsProxy+LazyRecord`1",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Control.LazyExtensions",
      "methods": [
        {
          "meName": "Force",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "Lazy<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "CreateFromValue",
          "isField": 0,
          "type": {
            "tName": "Lazy<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Create",
          "isField": 0,
          "type": {
            "tName": "Lazy<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(unit -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "forceLazy",
          "isField": 0,
          "type": {
            "tName": "Object",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "cachedLazy",
          "isField": 0,
          "type": {
            "tName": "Object",
            "asm": "netstandard"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Collections.FSharpList`1",
      "methods": [
        {
          "meName": "_unique_Empty",
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
      "moName": "Microsoft.FSharp.Collections.ListModule",
      "methods": [
        {
          "meName": "AllPairs",
          "isField": 0,
          "type": {
            "tName": "List<('a * 'b)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Append",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Choose",
          "isField": 0,
          "type": {
            "tName": "List<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Option<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Collect",
          "isField": 0,
          "type": {
            "tName": "List<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> List<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Concat",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<List<'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Exists",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Exists2",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> bool))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Filter",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Fold2",
          "isField": 0,
          "type": {
            "tName": "'c",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('c -> ('a -> ('b -> 'c)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'c",
              "asm": ""
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "FoldBack",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "FoldBack2",
          "isField": 0,
          "type": {
            "tName": "'c",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c -> 'c)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'b>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'c",
              "asm": ""
            }
          ]
        },
        {
          "meName": "ForAll",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ForAll2",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> bool))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Head",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Initialize",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "(int -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Iterate",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Iterate2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> unit))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "IterateIndexed",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(int -> ('a -> unit))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "IterateIndexed2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(int -> ('a -> ('b -> unit)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Length",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Map",
          "isField": 0,
          "type": {
            "tName": "List<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Map2",
          "isField": 0,
          "type": {
            "tName": "List<'c>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'c))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Map3",
          "isField": 0,
          "type": {
            "tName": "List<'d>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c -> 'd)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'b>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'c>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "MapIndexed",
          "isField": 0,
          "type": {
            "tName": "List<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(int -> ('a -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "MapIndexed2",
          "isField": 0,
          "type": {
            "tName": "List<'c>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(int -> ('a -> ('b -> 'c)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Max",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "MaxBy",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Min",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "MinBy",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "OfArray",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "OfSeq",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Partition",
          "isField": 0,
          "type": {
            "tName": "(List<'a> * List<'a>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Permute",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(int -> int)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Reduce",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> ('a -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ReduceBack",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> ('a -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Replicate",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Reverse",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Scan",
          "isField": 0,
          "type": {
            "tName": "List<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('b -> ('a -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ScanBack",
          "isField": 0,
          "type": {
            "tName": "List<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Sort",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "SortBy",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "SortByDescending",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "SortDescending",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "SortWith",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> ('a -> int))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Tail",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Transpose",
          "isField": 0,
          "type": {
            "tName": "List<List<'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<List<'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Unzip",
          "isField": 0,
          "type": {
            "tName": "(List<'a> * List<'b>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "List<('a * 'b)>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Unzip3",
          "isField": 0,
          "type": {
            "tName": "(List<'a> * List<'b> * List<'c>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "List<('a * 'b * 'c)>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Zip",
          "isField": 0,
          "type": {
            "tName": "List<('a * 'b)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Zip3",
          "isField": 0,
          "type": {
            "tName": "List<('a * 'b * 'c)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'b>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'c>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ChunkBySize",
          "isField": 0,
          "type": {
            "tName": "List<List<'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "CompareWith",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('a -> int))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "CountBy",
          "isField": 0,
          "type": {
            "tName": "List<('b * int)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Distinct",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "DistinctBy",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "SplitInto",
          "isField": 0,
          "type": {
            "tName": "List<List<'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Except",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "TryFindBack",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "FindBack",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "FindIndexBack",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "GroupBy",
          "isField": 0,
          "type": {
            "tName": "List<('b * List<'a>)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Last",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Contains",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "MapFold",
          "isField": 0,
          "type": {
            "tName": "(List<'c> * 'b)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('b -> ('a -> ('c * 'b)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "MapFoldBack",
          "isField": 0,
          "type": {
            "tName": "(List<'c> * 'b)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c * 'b)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Pairwise",
          "isField": 0,
          "type": {
            "tName": "List<('a * 'a)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Indexed",
          "isField": 0,
          "type": {
            "tName": "List<(int * 'a)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "TryHead",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ExactlyOne",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Unfold",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('b -> Option<('a * 'b)>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Windowed",
          "isField": 0,
          "type": {
            "tName": "List<List<'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "SplitAt",
          "isField": 0,
          "type": {
            "tName": "(List<'a> * List<'a>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "nonEmpty",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "listEmpty",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": []
        },
        {
          "meName": "badLengths",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "System.Math",
      "methods": []
    },
    {
      "moName": "WebSharper.Nullable",
      "methods": [
        {
          "meName": "getOrValue",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "get",
          "isField": 0,
          "type": {
            "tName": "Object",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.Nullable`1",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Linq.NullableModule",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Linq.NullableOperators",
      "methods": []
    },
    {
      "moName": "System.Tuple",
      "methods": []
    },
    {
      "moName": "System.ValueTuple",
      "methods": []
    },
    {
      "moName": "System.Tuple`1",
      "methods": []
    },
    {
      "moName": "System.Tuple`2",
      "methods": []
    },
    {
      "moName": "System.Tuple`3",
      "methods": []
    },
    {
      "moName": "System.Tuple`4",
      "methods": []
    },
    {
      "moName": "System.Tuple`5",
      "methods": []
    },
    {
      "moName": "System.Tuple`6",
      "methods": []
    },
    {
      "moName": "System.Tuple`7",
      "methods": []
    },
    {
      "moName": "System.Tuple`8",
      "methods": []
    },
    {
      "moName": "System.ValueTuple`1",
      "methods": []
    },
    {
      "moName": "System.ValueTuple`2",
      "methods": []
    },
    {
      "moName": "System.ValueTuple`3",
      "methods": []
    },
    {
      "moName": "System.ValueTuple`4",
      "methods": []
    },
    {
      "moName": "System.ValueTuple`5",
      "methods": []
    },
    {
      "moName": "System.ValueTuple`6",
      "methods": []
    },
    {
      "moName": "System.ValueTuple`7",
      "methods": []
    },
    {
      "moName": "System.ValueTuple`8",
      "methods": []
    },
    {
      "moName": "System.TupleExtensions",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.Operators",
      "methods": [
        {
          "meName": "op_RangeStep",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "KeyValuePattern",
          "isField": 0,
          "type": {
            "tName": "('a * 'b)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "KeyValuePair<'a, 'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Truncate",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Pown",
          "isField": 0,
          "type": {
            "tName": "Double",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "toInt",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Double",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "toUInt",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Double",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "InvalidArg",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
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
          "meName": "InvalidOp",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "FailWith",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Core.Operators+OperatorIntrinsics",
      "methods": [
        {
          "meName": "GetStringSlice",
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
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "GetArraySlice",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "SetArraySlice",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "GetArraySlice2D",
          "isField": 0,
          "type": {
            "tName": "'a[,]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "GetArraySlice2DFixed1",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "GetArraySlice2DFixed2",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SetArraySlice2DFixed1",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SetArraySlice2DFixed2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SetArraySlice2D",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[,]",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Core.FSharpOption`1",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.OptionModule",
      "methods": [
        {
          "meName": "Filter",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Fold",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('b -> ('a -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "Option<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "FoldBack",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "OfNullable",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Nullable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "OfObj",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
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
          "meName": "ToArray",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Option<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ToList",
          "isField": 0,
          "type": {
            "tName": "List<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Option<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ToNullable",
          "isField": 0,
          "type": {
            "tName": "Nullable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Option<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ToObj",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "Option<'a>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.Collections.Generic.Queue`1",
      "methods": []
    },
    {
      "moName": "WebSharper.QueueProxy",
      "methods": [
        {
          "meName": "CopyTo",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Contains",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Clear",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Core.PrintfFormat`5",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.PrintfModule",
      "methods": []
    },
    {
      "moName": "WebSharper.RandomHelpers",
      "methods": []
    },
    {
      "moName": "System.Random",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.FSharpRef`1",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.FSharpResult`2",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.ResultModule",
      "methods": [
        {
          "meName": "MapError",
          "isField": 0,
          "type": {
            "tName": "Result<'c, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Result<'c, 'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Map",
          "isField": 0,
          "type": {
            "tName": "Result<'b, 'c>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Result<'a, 'c>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Bind",
          "isField": 0,
          "type": {
            "tName": "Result<'b, 'c>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Result<'b, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Result<'a, 'c>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Core.CompilerServices.RuntimeHelpers",
      "methods": [
        {
          "meName": "EnumerateThenFinally",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "EnumerateUsing",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'c>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "EnumerateWhile",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(unit -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "CreateEvent",
          "isField": 0,
          "type": {
            "tName": "IEvent<'a, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "((Object -> ('b -> unit)) -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Collections.SeqModule",
      "methods": [
        {
          "meName": "AllPairs",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<('a * 'b)>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Append",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Average",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "AverageBy",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Cache",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Choose",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'b>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> Option<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Collect",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'c>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "CompareWith",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('a -> int))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Concat",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'b>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "CountBy",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<('b * int)>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Delay",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(unit -> IEnumerable<'a>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Distinct",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "DistinctBy",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SplitInto",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a[]>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ExactlyOne",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Exists",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Exists2",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> bool))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Filter",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Find",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "FindIndex",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Fold",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('b -> ('a -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ForAll",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ForAll2",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> bool))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "GroupBy",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<('b * IEnumerable<'a>)>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Head",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Initialize",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "(int -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "InitializeInfinite",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(int -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "IsEmpty",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Iterate",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Iterate2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> unit))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "IterateIndexed",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(int -> ('a -> unit))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Length",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Map",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'b>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "MapIndexed",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'b>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(int -> ('a -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Map2",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'c>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'c))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "MaxBy",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "MinBy",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Max",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Min",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Get",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Pairwise",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<('a * 'a)>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Pick",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> Option<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ReadOnly",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Reduce",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> ('a -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Scan",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'b>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('b -> ('a -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Skip",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SkipWhile",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Sort",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SortBy",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SortByDescending",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SortDescending",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Sum",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SumBy",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Take",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TakeWhile",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Transpose",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<IEnumerable<'b>>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Truncate",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TryFind",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "FindBack",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TryFindIndex",
          "isField": 0,
          "type": {
            "tName": "Option<int>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "FindIndexBack",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TryPick",
          "isField": 0,
          "type": {
            "tName": "Option<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Option<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Unfold",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'b>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> Option<('b * 'a)>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Windowed",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a[]>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Zip",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<('a * 'b)>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Map3",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'d>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c -> 'd)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'b>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'c>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Zip3",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<('a * 'b * 'c)>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'b>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'c>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Fold2",
          "isField": 0,
          "type": {
            "tName": "'c",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('c -> ('a -> ('b -> 'c)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'c",
              "asm": ""
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "FoldBack",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "FoldBack2",
          "isField": 0,
          "type": {
            "tName": "'c",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c -> 'c)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'b>",
              "asm": "netstandard"
            },
            {
              "tName": "'c",
              "asm": ""
            }
          ]
        },
        {
          "meName": "IterateIndexed2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(int -> ('a -> ('b -> unit)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "MapIndexed2",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'c>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(int -> ('a -> ('b -> 'c)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "MapFold",
          "isField": 0,
          "type": {
            "tName": "(IEnumerable<'c> * 'b)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('b -> ('a -> ('c * 'b)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "MapFoldBack",
          "isField": 0,
          "type": {
            "tName": "(IEnumerable<'c> * 'b)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c * 'b)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Permute",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(int -> int)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ReduceBack",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> ('a -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Replicate",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Reverse",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ScanBack",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'b>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Indexed",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<(int * 'a)>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SortWith",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('a -> int))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Tail",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "seqEmpty",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "System.Collections.Generic.Stack`1",
      "methods": []
    },
    {
      "moName": "WebSharper.StackProxy",
      "methods": [
        {
          "meName": "CopyTo",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Contains",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Clear",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.String",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.StringModule",
      "methods": [
        {
          "meName": "RegexEscape",
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
          "meName": "SplitWith",
          "isField": 0,
          "type": {
            "tName": "string[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Join",
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
              "tName": "string[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TrimEndWS",
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
          "meName": "TrimStartWS",
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
          "meName": "Trim",
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
          "meName": "StartsWith",
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
          "meName": "Substring",
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
          "meName": "ReplaceOnce",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "'c",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Remove",
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
          "meName": "PadRightWith",
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
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "PadLeftWith",
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
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "LastIndexOf",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Char",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "IsNullOrWhiteSpace",
          "isField": 0,
          "type": {
            "tName": "bool",
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
          "meName": "IsNullOrEmpty",
          "isField": 0,
          "type": {
            "tName": "bool",
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
          "meName": "Insert",
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
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "IndexOf",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Char",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "EndsWith",
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
          "meName": "Collect",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(Char -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Concat",
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
              "tName": "IEnumerable<string>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Exists",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(Char -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ForAll",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(Char -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Initialize",
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
              "tName": "(int -> string)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Iterate",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(Char -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "IterateIndexed",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(int -> (Char -> unit))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Length",
          "isField": 0,
          "type": {
            "tName": "int",
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
          "meName": "Map",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(Char -> Char)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "MapIndexed",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(int -> (Char -> Char))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Replicate",
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
          "meName": "protect",
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
          "meName": "SFormat",
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
              "tName": "Object[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Filter",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(Char -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SplitStrings",
          "isField": 0,
          "type": {
            "tName": "string[]",
            "asm": "netstandard"
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
              "tName": "StringSplitOptions",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SplitChars",
          "isField": 0,
          "type": {
            "tName": "string[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Char[]",
              "asm": "netstandard"
            },
            {
              "tName": "StringSplitOptions",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Split",
          "isField": 0,
          "type": {
            "tName": "string[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "StringSplitOptions",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TrimEnd",
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
              "tName": "Char[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TrimStart",
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
              "tName": "Char[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ToCharArrayRange",
          "isField": 0,
          "type": {
            "tName": "Char[]",
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
          "meName": "ToCharArray",
          "isField": 0,
          "type": {
            "tName": "Char[]",
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
          "meName": "ReplaceChar",
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
              "tName": "Char",
              "asm": "netstandard"
            },
            {
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Replace",
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
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "PadRight",
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
          "meName": "PadLeft",
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
          "meName": "CopyTo",
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
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "Char[]",
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
          "meName": "Compare",
          "isField": 0,
          "type": {
            "tName": "int",
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
        }
      ]
    },
    {
      "moName": "System.Threading.Tasks.Task",
      "methods": [
        {
          "meName": "Yield",
          "isField": 0,
          "type": {
            "tName": "Runtime.CompilerServices.YieldAwaitable",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "WhenAll",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task<'a[]>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Threading.Tasks.Task<'a>[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "WhenAll",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Threading.Tasks.Task[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "WhenAny",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task<Threading.Tasks.Task<'a>>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Threading.Tasks.Task<'a>[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "WhenAny",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task<Threading.Tasks.Task>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Threading.Tasks.Task[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Delay",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "Threading.CancellationToken",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Delay",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task",
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
          "meName": "Run",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Func<Threading.Tasks.Task<'a>>",
              "asm": "netstandard"
            },
            {
              "tName": "Threading.CancellationToken",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Run",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Func<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Threading.CancellationToken",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Run",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Func<Threading.Tasks.Task>",
              "asm": "netstandard"
            },
            {
              "tName": "Threading.CancellationToken",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Run",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Action",
              "asm": "netstandard"
            },
            {
              "tName": "Threading.CancellationToken",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "FromResult",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "FromException",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Exception",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "FromException",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Exception",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "FromCanceled",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Threading.CancellationToken",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "FromCanceled",
          "isField": 0,
          "type": {
            "tName": "Threading.Tasks.Task",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Threading.CancellationToken",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.Threading.Tasks.Task`1",
      "methods": []
    },
    {
      "moName": "System.Threading.Tasks.TaskCompletionSource`1",
      "methods": []
    },
    {
      "moName": "System.TimeSpan",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Core.Operators+Unchecked",
      "methods": [
        {
          "meName": "Hash",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "hashObject",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "hashString",
          "isField": 0,
          "type": {
            "tName": "int",
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
          "meName": "hashArray",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "hashMix",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
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
          "meName": "Equals",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "dateEquals",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "arrayEquals",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object[]",
              "asm": "netstandard"
            },
            {
              "tName": "Object[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Compare",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "compareDates",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "compareArrays",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Object[]",
              "asm": "netstandard"
            },
            {
              "tName": "Object[]",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Core.FSharpValueOption`1",
      "methods": [
        {
          "meName": "_unique_ValueNone",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "get_Test",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.N",
      "methods": [
        {
          "meName": "TryParseBool",
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
              "tName": "bool",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ParseBool",
          "isField": 0,
          "type": {
            "tName": "bool",
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
          "meName": "TryParse",
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
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Parse",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
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
              "tName": "'a",
              "asm": ""
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
      "moName": "System.Byte",
      "methods": [
        {
          "meName": "Parse",
          "isField": 0,
          "type": {
            "tName": "Byte",
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
          "meName": "TryParse",
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
              "tName": "Byte",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.SByte",
      "methods": [
        {
          "meName": "Parse",
          "isField": 0,
          "type": {
            "tName": "SByte",
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
          "meName": "TryParse",
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
              "tName": "SByte",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.Int16",
      "methods": [
        {
          "meName": "Parse",
          "isField": 0,
          "type": {
            "tName": "Int16",
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
          "meName": "TryParse",
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
              "tName": "Int16",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.Int32",
      "methods": [
        {
          "meName": "Parse",
          "isField": 0,
          "type": {
            "tName": "int",
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
          "meName": "TryParse",
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
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.UInt16",
      "methods": [
        {
          "meName": "Parse",
          "isField": 0,
          "type": {
            "tName": "UInt16",
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
          "meName": "TryParse",
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
              "tName": "UInt16",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.UInt32",
      "methods": [
        {
          "meName": "Parse",
          "isField": 0,
          "type": {
            "tName": "UInt32",
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
          "meName": "TryParse",
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
              "tName": "UInt32",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.Int64",
      "methods": [
        {
          "meName": "Parse",
          "isField": 0,
          "type": {
            "tName": "Int64",
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
          "meName": "TryParse",
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
              "tName": "Int64",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.UInt64",
      "methods": [
        {
          "meName": "Parse",
          "isField": 0,
          "type": {
            "tName": "UInt64",
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
          "meName": "TryParse",
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
              "tName": "UInt64",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.Single",
      "methods": []
    },
    {
      "moName": "System.Double",
      "methods": []
    },
    {
      "moName": "System.Boolean",
      "methods": []
    }
  ],
  "jsModules": [
    {
      "jsName": "WebSharper.Main.Json.js",
      "code": "var JSON;JSON||(JSON={}),function(){\"use strict\";function i(n){return n<10?\"0\"+n:n}function f(n){return o.lastIndex=0,o.test(n)?'\"'+n.replace(o,function(n){var t=s[n];return typeof t==\"string\"?t:\"\\\\u\"+(\"0000\"+n.charCodeAt(0).toString(16)).slice(-4)})+'\"':'\"'+n+'\"'}function r(i,e){var s,l,h,a,v=n,c,o=e[i];o&&typeof o==\"object\"&&typeof o.toJSON==\"function\"&&(o=o.toJSON(i)),typeof t==\"function\"&&(o=t.call(e,i,o));switch(typeof o){case\"string\":return f(o);case\"number\":return isFinite(o)?String(o):\"null\";case\"boolean\":case\"null\":return String(o);case\"object\":if(!o)return\"null\";if(n+=u,c=[],Object.prototype.toString.apply(o)===\"[object Array]\"){for(a=o.length,s=0;s<a;s+=1)c[s]=r(s,o)||\"null\";return h=c.length===0?\"[]\":n?\"[\\n\"+n+c.join(\",\\n\"+n)+\"\\n\"+v+\"]\":\"[\"+c.join(\",\")+\"]\",n=v,h}if(t&&typeof t==\"object\")for(a=t.length,s=0;s<a;s+=1)typeof t[s]==\"string\"&&(l=t[s],h=r(l,o),h&&c.push(f(l)+(n?\": \":\":\")+h));else for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(h=r(l,o),h&&c.push(f(l)+(n?\": \":\":\")+h));return h=c.length===0?\"{}\":n?\"{\\n\"+n+c.join(\",\\n\"+n)+\"\\n\"+v+\"}\":\"{\"+c.join(\",\")+\"}\",n=v,h}}typeof Date.prototype.toJSON!=\"function\"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+\"-\"+i(this.getUTCMonth()+1)+\"-\"+i(this.getUTCDate())+\"T\"+i(this.getUTCHours())+\":\"+i(this.getUTCMinutes())+\":\"+i(this.getUTCSeconds())+\"Z\":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var e=/[\\u0000\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/g,o=/[\\\\\\\"\\x00-\\x1f\\x7f-\\x9f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/g,n,u,s={\"\\b\":\"\\\\b\",\"\\t\":\"\\\\t\",\"\\n\":\"\\\\n\",\"\\f\":\"\\\\f\",\"\\r\":\"\\\\r\",'\"':'\\\\\"',\"\\\\\":\"\\\\\\\\\"},t;typeof JSON.stringify!=\"function\"&&(JSON.stringify=function(i,f,e){var o;if(n=\"\",u=\"\",typeof e==\"number\")for(o=0;o<e;o+=1)u+=\" \";else typeof e==\"string\"&&(u=e);if(t=f,f&&typeof f!=\"function\"&&(typeof f!=\"object\"||typeof f.length!=\"number\"))throw new Error(\"JSON.stringify\");return r(\"\",{\"\":i})}),typeof JSON.parse!=\"function\"&&(JSON.parse=function(n,t){function r(n,i){var f,e,u=n[i];if(u&&typeof u==\"object\")for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&(e=r(u,f),e!==undefined?u[f]=e:delete u[f]);return t.call(n,i,u)}var i;if(n=String(n),e.lastIndex=0,e.test(n)&&(n=n.replace(e,function(n){return\"\\\\u\"+(\"0000\"+n.charCodeAt(0).toString(16)).slice(-4)})),/^[\\],:{}\\s]*$/.test(n.replace(/\\\\(?:[\"\\\\\\/bfnrt]|u[0-9a-fA-F]{4})/g,\"@\").replace(/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g,\"]\").replace(/(?:^|:|,)(?:\\s*\\[)+/g,\"\")))return i=eval(\"(\"+n+\")\"),typeof t==\"function\"?r({\"\":i},\"\"):i;throw new SyntaxError(\"JSON.parse\");})}();"
    },
    {
      "jsName": "WebSharper.Main.AnimFrame.js",
      "code": "(function () {\n    var lastTime = 0;\n    var vendors = ['webkit', 'moz'];\n    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {\n        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];\n        window.cancelAnimationFrame =\n          window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];\n    }\n\n    if (!window.requestAnimationFrame)\n        window.requestAnimationFrame = function (callback, element) {\n            var currTime = new Date().getTime();\n            var timeToCall = Math.max(0, 16 - (currTime - lastTime));\n            var id = window.setTimeout(function () { callback(currTime + timeToCall); },\n              timeToCall);\n            lastTime = currTime + timeToCall;\n            return id;\n        };\n\n    if (!window.cancelAnimationFrame)\n        window.cancelAnimationFrame = function (id) {\n            clearTimeout(id);\n        };\n}());\n"
    },
    {
      "jsName": "WebSharper.js",
      "code": "(function()\r\n{\r\n \"use strict\";\r\n var Global,WebSharper,JavaScript,JS,Error,NonStandardPromiseRejectionException,Promise,Pervasives,Json,Obj,Remoting,XhrProvider,AjaxRemotingProvider,SC$1,HtmlContentExtensions,SingleNode,Activator,SC$2,Collections,EqualityComparer,Comparers,EquatableEqualityComparer,BaseEqualityComparer,Comparer,ComparableComparer,BaseComparer,Operators,Nullable,Utils,Concurrency,CT,AsyncBody,Scheduler,SC$3,Enumerator,T,Optional,Arrays,Seq,List,Arrays2D,CancellationTokenSource,Char,Util,DateUtil,DateTimeOffset,Delegate,DictionaryUtil,KeyCollection,ValueCollection,Dictionary,Exception,MatchFailureException,IndexOutOfRangeException,OperationCanceledException,ArgumentException,ArgumentOutOfRangeException,ArgumentNullException,InvalidOperationException,AggregateException,TimeoutException,FormatException,OverflowException,TaskCanceledException,System,Guid,HashSetUtil,HashSet,LazyExtensionsProxy,LazyRecord,Lazy,T$1,Slice,Option,Queue,Random,Ref,Result,Control,Stack,Strings,Task,Task1,TaskCompletionSource,Unchecked,Microsoft,FSharp,Core,FSharpValueOption,Numeric,IntelliFactory,Runtime,Promise$1,JSON,String,Date,console,Math;\r\n Global=self;\r\n WebSharper=Global.WebSharper=Global.WebSharper||{};\r\n JavaScript=WebSharper.JavaScript=WebSharper.JavaScript||{};\r\n JS=JavaScript.JS=JavaScript.JS||{};\r\n Error=Global.Error;\r\n NonStandardPromiseRejectionException=JavaScript.NonStandardPromiseRejectionException=JavaScript.NonStandardPromiseRejectionException||{};\r\n Promise=JavaScript.Promise=JavaScript.Promise||{};\r\n Pervasives=JavaScript.Pervasives=JavaScript.Pervasives||{};\r\n Json=WebSharper.Json=WebSharper.Json||{};\r\n Obj=WebSharper.Obj=WebSharper.Obj||{};\r\n Remoting=WebSharper.Remoting=WebSharper.Remoting||{};\r\n XhrProvider=Remoting.XhrProvider=Remoting.XhrProvider||{};\r\n AjaxRemotingProvider=Remoting.AjaxRemotingProvider=Remoting.AjaxRemotingProvider||{};\r\n SC$1=Global.StartupCode$WebSharper_Main$Remoting=Global.StartupCode$WebSharper_Main$Remoting||{};\r\n HtmlContentExtensions=WebSharper.HtmlContentExtensions=WebSharper.HtmlContentExtensions||{};\r\n SingleNode=HtmlContentExtensions.SingleNode=HtmlContentExtensions.SingleNode||{};\r\n Activator=WebSharper.Activator=WebSharper.Activator||{};\r\n SC$2=Global.StartupCode$WebSharper_Main$Html=Global.StartupCode$WebSharper_Main$Html||{};\r\n Collections=WebSharper.Collections=WebSharper.Collections||{};\r\n EqualityComparer=Collections.EqualityComparer=Collections.EqualityComparer||{};\r\n Comparers=WebSharper.Comparers=WebSharper.Comparers||{};\r\n EquatableEqualityComparer=Comparers.EquatableEqualityComparer=Comparers.EquatableEqualityComparer||{};\r\n BaseEqualityComparer=Comparers.BaseEqualityComparer=Comparers.BaseEqualityComparer||{};\r\n Comparer=Collections.Comparer=Collections.Comparer||{};\r\n ComparableComparer=Comparers.ComparableComparer=Comparers.ComparableComparer||{};\r\n BaseComparer=Comparers.BaseComparer=Comparers.BaseComparer||{};\r\n Operators=WebSharper.Operators=WebSharper.Operators||{};\r\n Nullable=WebSharper.Nullable=WebSharper.Nullable||{};\r\n Utils=WebSharper.Utils=WebSharper.Utils||{};\r\n Concurrency=WebSharper.Concurrency=WebSharper.Concurrency||{};\r\n CT=Concurrency.CT=Concurrency.CT||{};\r\n AsyncBody=Concurrency.AsyncBody=Concurrency.AsyncBody||{};\r\n Scheduler=Concurrency.Scheduler=Concurrency.Scheduler||{};\r\n SC$3=Global.StartupCode$WebSharper_Main$Concurrency=Global.StartupCode$WebSharper_Main$Concurrency||{};\r\n Enumerator=WebSharper.Enumerator=WebSharper.Enumerator||{};\r\n T=Enumerator.T=Enumerator.T||{};\r\n Optional=JavaScript.Optional=JavaScript.Optional||{};\r\n Arrays=WebSharper.Arrays=WebSharper.Arrays||{};\r\n Seq=WebSharper.Seq=WebSharper.Seq||{};\r\n List=WebSharper.List=WebSharper.List||{};\r\n Arrays2D=WebSharper.Arrays2D=WebSharper.Arrays2D||{};\r\n CancellationTokenSource=WebSharper.CancellationTokenSource=WebSharper.CancellationTokenSource||{};\r\n Char=WebSharper.Char=WebSharper.Char||{};\r\n Util=WebSharper.Util=WebSharper.Util||{};\r\n DateUtil=WebSharper.DateUtil=WebSharper.DateUtil||{};\r\n DateTimeOffset=WebSharper.DateTimeOffset=WebSharper.DateTimeOffset||{};\r\n Delegate=WebSharper.Delegate=WebSharper.Delegate||{};\r\n DictionaryUtil=Collections.DictionaryUtil=Collections.DictionaryUtil||{};\r\n KeyCollection=Collections.KeyCollection=Collections.KeyCollection||{};\r\n ValueCollection=Collections.ValueCollection=Collections.ValueCollection||{};\r\n Dictionary=Collections.Dictionary=Collections.Dictionary||{};\r\n Exception=WebSharper.Exception=WebSharper.Exception||{};\r\n MatchFailureException=WebSharper.MatchFailureException=WebSharper.MatchFailureException||{};\r\n IndexOutOfRangeException=WebSharper.IndexOutOfRangeException=WebSharper.IndexOutOfRangeException||{};\r\n OperationCanceledException=WebSharper.OperationCanceledException=WebSharper.OperationCanceledException||{};\r\n ArgumentException=WebSharper.ArgumentException=WebSharper.ArgumentException||{};\r\n ArgumentOutOfRangeException=WebSharper.ArgumentOutOfRangeException=WebSharper.ArgumentOutOfRangeException||{};\r\n ArgumentNullException=WebSharper.ArgumentNullException=WebSharper.ArgumentNullException||{};\r\n InvalidOperationException=WebSharper.InvalidOperationException=WebSharper.InvalidOperationException||{};\r\n AggregateException=WebSharper.AggregateException=WebSharper.AggregateException||{};\r\n TimeoutException=WebSharper.TimeoutException=WebSharper.TimeoutException||{};\r\n FormatException=WebSharper.FormatException=WebSharper.FormatException||{};\r\n OverflowException=WebSharper.OverflowException=WebSharper.OverflowException||{};\r\n TaskCanceledException=WebSharper.TaskCanceledException=WebSharper.TaskCanceledException||{};\r\n System=Global.System=Global.System||{};\r\n Guid=System.Guid=System.Guid||{};\r\n HashSetUtil=Collections.HashSetUtil=Collections.HashSetUtil||{};\r\n HashSet=Collections.HashSet=Collections.HashSet||{};\r\n LazyExtensionsProxy=WebSharper.LazyExtensionsProxy=WebSharper.LazyExtensionsProxy||{};\r\n LazyRecord=LazyExtensionsProxy.LazyRecord=LazyExtensionsProxy.LazyRecord||{};\r\n Lazy=WebSharper.Lazy=WebSharper.Lazy||{};\r\n T$1=List.T=List.T||{};\r\n Slice=WebSharper.Slice=WebSharper.Slice||{};\r\n Option=WebSharper.Option=WebSharper.Option||{};\r\n Queue=WebSharper.Queue=WebSharper.Queue||{};\r\n Random=WebSharper.Random=WebSharper.Random||{};\r\n Ref=WebSharper.Ref=WebSharper.Ref||{};\r\n Result=WebSharper.Result=WebSharper.Result||{};\r\n Control=WebSharper.Control=WebSharper.Control||{};\r\n Stack=WebSharper.Stack=WebSharper.Stack||{};\r\n Strings=WebSharper.Strings=WebSharper.Strings||{};\r\n Task=WebSharper.Task=WebSharper.Task||{};\r\n Task1=WebSharper.Task1=WebSharper.Task1||{};\r\n TaskCompletionSource=WebSharper.TaskCompletionSource=WebSharper.TaskCompletionSource||{};\r\n Unchecked=WebSharper.Unchecked=WebSharper.Unchecked||{};\r\n Microsoft=Global.Microsoft=Global.Microsoft||{};\r\n FSharp=Microsoft.FSharp=Microsoft.FSharp||{};\r\n Core=FSharp.Core=FSharp.Core||{};\r\n FSharpValueOption=Core.FSharpValueOption=Core.FSharpValueOption||{};\r\n Numeric=WebSharper.Numeric=WebSharper.Numeric||{};\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime=IntelliFactory&&IntelliFactory.Runtime;\r\n Promise$1=Global.Promise;\r\n JSON=Global.JSON;\r\n String=Global.String;\r\n Date=Global.Date;\r\n console=Global.console;\r\n Math=Global.Math;\r\n JS.GetFieldValues=function(o)\r\n {\r\n  var r,k;\r\n  r=[];\r\n  for(var k$1 in o)r.push(o[k$1]);\r\n  return r;\r\n };\r\n JS.GetFieldNames=function(o)\r\n {\r\n  var r,k;\r\n  r=[];\r\n  for(var k$1 in o)r.push(k$1);\r\n  return r;\r\n };\r\n JS.GetFields=function(o)\r\n {\r\n  var r,k;\r\n  r=[];\r\n  for(var k$1 in o)r.push([k$1,o[k$1]]);\r\n  return r;\r\n };\r\n NonStandardPromiseRejectionException=JavaScript.NonStandardPromiseRejectionException=Runtime.Class({\r\n  get_Reason:function()\r\n  {\r\n   return this.reason;\r\n  }\r\n },Error,NonStandardPromiseRejectionException);\r\n NonStandardPromiseRejectionException.New=Runtime.Ctor(function(reason)\r\n {\r\n  this.message=\"Promise rejected\";\r\n  Global.Object.setPrototypeOf(this,NonStandardPromiseRejectionException.prototype);\r\n  this.reason=reason;\r\n },NonStandardPromiseRejectionException);\r\n Promise.For=function(xs,f)\r\n {\r\n  var e;\r\n  function run()\r\n  {\r\n   return e.MoveNext()?f(e.Current()).then(function()\r\n   {\r\n    return run();\r\n   }):Promise$1.resolve(null);\r\n  }\r\n  e=Enumerator.Get(xs);\r\n  return new Promise$1(function($1)\r\n  {\r\n   run();\r\n   $1();\r\n  })[\"finally\"](function()\r\n  {\r\n   return e.Dispose();\r\n  });\r\n };\r\n Promise.AsTask=function(p)\r\n {\r\n  var tcs;\r\n  tcs=new TaskCompletionSource.New();\r\n  p.then(function(d)\r\n  {\r\n   return tcs.SetResult(d);\r\n  },function(err)\r\n  {\r\n   return tcs.SetException$1(Promise.unwrapExn(err));\r\n  });\r\n  return tcs.get_Task();\r\n };\r\n Promise.AsAsync=function(p)\r\n {\r\n  return Concurrency.FromContinuations(function(ok,ko)\r\n  {\r\n   p.then(ok,function(err)\r\n   {\r\n    return ko(Promise.unwrapExn(err));\r\n   });\r\n  });\r\n };\r\n Promise.OfTask=function(t)\r\n {\r\n  return new Promise$1(function(resolve,reject)\r\n  {\r\n   t.ContinueWith$1(function(t$1)\r\n   {\r\n    return t$1.get_IsCanceled()?reject(new TaskCanceledException.New()):t$1.get_IsFaulted()?reject(t$1.get_Exception()):resolve(t$1.get_Result());\r\n   },Concurrency.noneCT());\r\n  });\r\n };\r\n Promise.OfAsync=function(a)\r\n {\r\n  return new Promise$1(function($1,reject)\r\n  {\r\n   Concurrency.StartWithContinuations(a,$1,function(a$1)\r\n   {\r\n    reject(a$1);\r\n   },function(a$1)\r\n   {\r\n    reject(a$1);\r\n   },null);\r\n  });\r\n };\r\n Promise.unwrapExn=function(x)\r\n {\r\n  return x instanceof Error?x:new NonStandardPromiseRejectionException.New(x);\r\n };\r\n Pervasives.GetJS=function(x,items)\r\n {\r\n  var x$1,e;\r\n  x$1=x;\r\n  e=Enumerator.Get(items);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    x$1=x$1[e.Current()];\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n  return x$1;\r\n };\r\n Pervasives.NewFromSeq=function(fields)\r\n {\r\n  var r,e,f;\r\n  r={};\r\n  e=Enumerator.Get(fields);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    {\r\n     f=e.Current();\r\n     r[f[0]]=f[1];\r\n    }\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n  return r;\r\n };\r\n Json.Activate=function(json)\r\n {\r\n  var $1,types,i,$2,$3,$4,m;\r\n  function decode(x)\r\n  {\r\n   var o,ti,t,r,k;\r\n   if(Unchecked.Equals(x,null))\r\n    return x;\r\n   else\r\n    if(typeof x==\"object\")\r\n    {\r\n     if(x instanceof Global.Array)\r\n      return Json.shallowMap(decode,x);\r\n     else\r\n      {\r\n       o=Json.shallowMap(decode,x.$V);\r\n       ti=x.$T;\r\n       if(ti===void 0)\r\n        return o;\r\n       else\r\n        {\r\n         t=Arrays.get(types,ti);\r\n         if(t===1)\r\n          return List.ofArray(o);\r\n         else\r\n          if(t===2)\r\n           return self.WebSharper.Decimal.CreateDecimalBits(o);\r\n          else\r\n           {\r\n            r=new(Arrays.get(types,ti))();\r\n            for(var k$1 in o)if(function(k$2)\r\n            {\r\n             r[k$2]=o[k$2];\r\n             return false;\r\n            }(k$1))\r\n             break;\r\n            return r;\r\n           }\r\n        }\r\n      }\r\n    }\r\n    else\r\n     return x;\r\n  }\r\n  types=json?json.$TYPES:void 0;\r\n  if(types===void 0)\r\n   $1=json;\r\n  else\r\n   {\r\n    for(i=0,$2=Arrays.length(types)-1;i<=$2;i++){\r\n     m=Arrays.get(types,i);\r\n     switch(!Unchecked.Equals(m,null)&&m.length===3?Arrays.get(m,0)===\"WebSharper\"?Arrays.get(m,1)===\"List\"?Arrays.get(m,2)===\"T\"?0:($4=m,2):($4=m,2):($4=m,2):!Unchecked.Equals(m,null)&&m.length===2?Arrays.get(m,0)===\"WebSharper\"?Arrays.get(m,1)===\"Decimal\"?1:($4=m,2):($4=m,2):($4=m,2))\r\n     {\r\n      case 0:\r\n       $3=1;\r\n       break;\r\n      case 1:\r\n       $3=2;\r\n       break;\r\n      case 2:\r\n       $3=Json.lookup($4);\r\n       break;\r\n     }\r\n     Arrays.set(types,i,$3);\r\n    }\r\n    $1=json.$DATA;\r\n   }\r\n  return decode($1);\r\n };\r\n Json.shallowMap=function(f,x)\r\n {\r\n  var r,k;\r\n  if(x instanceof Global.Array)\r\n   return Arrays.map(f,x);\r\n  else\r\n   if(typeof x==\"object\")\r\n    {\r\n     r={};\r\n     for(var k$1 in x)if(function(y)\r\n     {\r\n      r[y]=f(x[y]);\r\n      return false;\r\n     }(k$1))\r\n      break;\r\n     return r;\r\n    }\r\n   else\r\n    return x;\r\n };\r\n Json.lookup=function(x)\r\n {\r\n  var r,i,k,n,rn;\r\n  k=Arrays.length(x);\r\n  r=self;\r\n  i=0;\r\n  while(i<k)\r\n   {\r\n    n=Arrays.get(x,i);\r\n    rn=r[n];\r\n    !Unchecked.Equals(typeof rn,void 0)?(r=rn,i=i+1):Operators.FailWith(\"Invalid server reply. Failed to find type: \"+n);\r\n   }\r\n  return r;\r\n };\r\n Obj=WebSharper.Obj=Runtime.Class({\r\n  Equals:function(obj)\r\n  {\r\n   return this===obj;\r\n  },\r\n  GetHashCode:function()\r\n  {\r\n   return -1;\r\n  }\r\n },null,Obj);\r\n Obj.New=Runtime.Ctor(function()\r\n {\r\n },Obj);\r\n XhrProvider=Remoting.XhrProvider=Runtime.Class({\r\n  Sync:function(url,headers,data)\r\n  {\r\n   var res;\r\n   res=[null];\r\n   Remoting.ajax(false,url,headers,data,function(x)\r\n   {\r\n    res[0]=x;\r\n   },function(e)\r\n   {\r\n    throw e;\r\n   },function()\r\n   {\r\n    Remoting.ajax(false,url,headers,data,function(x)\r\n    {\r\n     res[0]=x;\r\n    },function(e)\r\n    {\r\n     throw e;\r\n    },void 0);\r\n   });\r\n   return res[0];\r\n  },\r\n  Async:function(url,headers,data,ok,err)\r\n  {\r\n   Remoting.ajax(true,url,headers,data,ok,err,function()\r\n   {\r\n    Remoting.ajax(true,url,headers,data,ok,err,void 0);\r\n   });\r\n  }\r\n },Obj,XhrProvider);\r\n XhrProvider.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },XhrProvider);\r\n AjaxRemotingProvider=Remoting.AjaxRemotingProvider=Runtime.Class({\r\n  get_EndPoint:function()\r\n  {\r\n   return Remoting.EndPoint();\r\n  },\r\n  AsyncBase:function(m,data)\r\n  {\r\n   var $this,b;\r\n   $this=this;\r\n   b=null;\r\n   return Concurrency.Delay(function()\r\n   {\r\n    var headers,payload;\r\n    headers=Remoting.makeHeaders(m);\r\n    payload=Remoting.makePayload(data);\r\n    return Concurrency.Bind(Concurrency.GetCT(),function(a)\r\n    {\r\n     return Concurrency.FromContinuations(function(ok,err,cc)\r\n     {\r\n      var waiting,reg,a$1;\r\n      function callback(u)\r\n      {\r\n       return waiting[0]?(waiting[0]=false,cc(new OperationCanceledException.New(a))):null;\r\n      }\r\n      waiting=[true];\r\n      reg=Concurrency.Register(a,function()\r\n      {\r\n       callback();\r\n      });\r\n      a$1=$this.get_EndPoint();\r\n      return Remoting.AjaxProvider().Async(a$1,headers,payload,function(x)\r\n      {\r\n       if(waiting[0])\r\n        {\r\n         waiting[0]=false;\r\n         reg.Dispose();\r\n         ok(Json.Activate(JSON.parse(x)));\r\n        }\r\n      },function(e)\r\n      {\r\n       if(waiting[0])\r\n        {\r\n         waiting[0]=false;\r\n         reg.Dispose();\r\n         err(e);\r\n        }\r\n      });\r\n     });\r\n    });\r\n   });\r\n  },\r\n  Send:function(m,data)\r\n  {\r\n   Concurrency.Start(this.AsyncBase(m,data),null);\r\n  },\r\n  Task:function(m,data)\r\n  {\r\n   return Concurrency.StartAsTask(this.AsyncBase(m,data),null);\r\n  },\r\n  Async:function(m,data)\r\n  {\r\n   return this.AsyncBase(m,data);\r\n  },\r\n  Sync:function(m,data)\r\n  {\r\n   var a,a$1,a$2;\r\n   return Json.Activate(JSON.parse((a=this.get_EndPoint(),(a$1=Remoting.makeHeaders(m),(a$2=Remoting.makePayload(data),Remoting.AjaxProvider().Sync(a,a$1,a$2))))));\r\n  }\r\n },Obj,AjaxRemotingProvider);\r\n AjaxRemotingProvider.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },AjaxRemotingProvider);\r\n Remoting.ajax=function(async,url,headers,data,ok,err,csrf)\r\n {\r\n  var xhr,csrf$1,h;\r\n  xhr=new Global.XMLHttpRequest();\r\n  csrf$1=Global.document.cookie.replace(new Global.RegExp(\"(?:(?:^|.*;)\\\\s*csrftoken\\\\s*\\\\=\\\\s*([^;]*).*$)|^.*$\"),\"$1\");\r\n  xhr.open(\"POST\",url,async);\r\n  if(async==true)\r\n   xhr.withCredentials=true;\r\n  for(var h$1 in headers)xhr.setRequestHeader(h$1,headers[h$1]);\r\n  if(csrf$1)\r\n   xhr.setRequestHeader(\"x-csrftoken\",csrf$1);\r\n  function k()\r\n  {\r\n   var msg;\r\n   if(xhr.status==200)\r\n    ok(xhr.responseText);\r\n   else\r\n    if(csrf&&xhr.status==403&&xhr.responseText==\"CSRF\")\r\n     csrf();\r\n    else\r\n     {\r\n      msg=\"Response status is not 200: \";\r\n      err(new Error(msg+xhr.status));\r\n     }\r\n  }\r\n  if(\"onload\"in xhr)\r\n   xhr.onload=xhr.onerror=xhr.onabort=k;\r\n  else\r\n   xhr.onreadystatechange=function()\r\n   {\r\n    if(xhr.readyState==4)\r\n     k();\r\n   };\r\n  xhr.send(data);\r\n };\r\n Remoting.makePayload=function(data)\r\n {\r\n  return JSON.stringify(data);\r\n };\r\n Remoting.makeHeaders=function(m)\r\n {\r\n  return{\r\n   \"content-type\":\"application/json\",\r\n   \"x-websharper-rpc\":m\r\n  };\r\n };\r\n Remoting.AjaxProvider=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.AjaxProvider;\r\n };\r\n Remoting.set_AjaxProvider=function($1)\r\n {\r\n  SC$1.$cctor();\r\n  SC$1.AjaxProvider=$1;\r\n };\r\n Remoting.UseHttps=function()\r\n {\r\n  try\r\n  {\r\n   return!Strings.StartsWith(self.location.href,\"https://\")&&(Remoting.set_EndPoint(Strings.Replace(self.location.href,\"http://\",\"https://\")),true);\r\n  }\r\n  catch(m)\r\n  {\r\n   return false;\r\n  }\r\n };\r\n Remoting.EndPoint=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.EndPoint;\r\n };\r\n Remoting.set_EndPoint=function($1)\r\n {\r\n  SC$1.$cctor();\r\n  SC$1.EndPoint=$1;\r\n };\r\n SC$1.$cctor=function()\r\n {\r\n  SC$1.$cctor=Global.ignore;\r\n  SC$1.EndPoint=\"?\";\r\n  SC$1.AjaxProvider=new XhrProvider.New();\r\n };\r\n SingleNode=HtmlContentExtensions.SingleNode=Runtime.Class({\r\n  ReplaceInDom:function(old)\r\n  {\r\n   this.node.parentNode.replaceChild(this.node,old);\r\n  }\r\n },Obj,SingleNode);\r\n SingleNode.New=Runtime.Ctor(function(node)\r\n {\r\n  Obj.New.call(this);\r\n  this.node=node;\r\n },SingleNode);\r\n Activator.Activate=function()\r\n {\r\n  var meta;\r\n  if(self.document)\r\n   {\r\n    meta=self.document.getElementById(\"websharper-data\");\r\n    meta?Activator.onReady(function()\r\n    {\r\n     var obj;\r\n     function a(k,v)\r\n     {\r\n      if(typeof v==\"object\"&&\"Body\"in v)\r\n       v.Body().ReplaceInDom(self.document.getElementById(k));\r\n     }\r\n     obj=Json.Activate(JSON.parse(meta.getAttribute(\"content\")));\r\n     Arrays.iter(function($1)\r\n     {\r\n      return a($1[0],$1[1]);\r\n     },JS.GetFields(obj));\r\n     Activator.set_Instances(obj);\r\n    }):void 0;\r\n   }\r\n };\r\n Activator.onReady=function(f)\r\n {\r\n  var readyFired;\r\n  function ready()\r\n  {\r\n   if(!readyFired)\r\n    {\r\n     readyFired=true;\r\n     f();\r\n     self.document.removeEventListener(\"DOMContentLoaded\",ready,false);\r\n     self.removeEventListener(\"load\",ready,false);\r\n    }\r\n  }\r\n  readyFired=false;\r\n  self.document.readyState===\"complete\"?ready():(self.document.addEventListener(\"DOMContentLoaded\",ready,false),self.addEventListener(\"load\",ready,false));\r\n };\r\n Activator.Instances=function()\r\n {\r\n  SC$2.$cctor();\r\n  return SC$2.Instances;\r\n };\r\n Activator.set_Instances=function($1)\r\n {\r\n  SC$2.$cctor();\r\n  SC$2.Instances=$1;\r\n };\r\n Activator.META_ID=function()\r\n {\r\n  SC$2.$cctor();\r\n  return SC$2.META_ID;\r\n };\r\n SC$2.$cctor=function()\r\n {\r\n  SC$2.$cctor=Global.ignore;\r\n  SC$2.META_ID=\"websharper-data\";\r\n  SC$2.Instances=null;\r\n };\r\n EqualityComparer=Collections.EqualityComparer=Runtime.Class({\r\n  CGetHashCode0:function(x)\r\n  {\r\n   return this.GetHashCode$1(x);\r\n  },\r\n  CEquals0:function(x,y)\r\n  {\r\n   return this.Equals$1(x,y);\r\n  },\r\n  CGetHashCode:function(x)\r\n  {\r\n   return this.GetHashCode$1(x);\r\n  },\r\n  CEquals:function(x,y)\r\n  {\r\n   return this.Equals$1(x,y);\r\n  }\r\n },Obj,EqualityComparer);\r\n EqualityComparer.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },EqualityComparer);\r\n EquatableEqualityComparer=Comparers.EquatableEqualityComparer=Runtime.Class({\r\n  GetHashCode$1:function(x)\r\n  {\r\n   return Unchecked.Hash(x);\r\n  },\r\n  Equals$1:function(x,y)\r\n  {\r\n   return x.EEquals(y);\r\n  }\r\n },EqualityComparer,EquatableEqualityComparer);\r\n EquatableEqualityComparer.New=Runtime.Ctor(function()\r\n {\r\n  EqualityComparer.New.call(this);\r\n },EquatableEqualityComparer);\r\n BaseEqualityComparer=Comparers.BaseEqualityComparer=Runtime.Class({\r\n  GetHashCode$1:function(x)\r\n  {\r\n   return Unchecked.Hash(x);\r\n  },\r\n  Equals$1:function(x,y)\r\n  {\r\n   return Unchecked.Equals(x,y);\r\n  }\r\n },EqualityComparer,BaseEqualityComparer);\r\n BaseEqualityComparer.New=Runtime.Ctor(function()\r\n {\r\n  EqualityComparer.New.call(this);\r\n },BaseEqualityComparer);\r\n Comparer=Collections.Comparer=Runtime.Class({\r\n  Compare0:function(x,y)\r\n  {\r\n   return this.Compare$1(x,y);\r\n  },\r\n  Compare:function(x,y)\r\n  {\r\n   return this.Compare$1(x,y);\r\n  }\r\n },Obj,Comparer);\r\n Comparer.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },Comparer);\r\n ComparableComparer=Comparers.ComparableComparer=Runtime.Class({\r\n  Compare$1:function(x,y)\r\n  {\r\n   return x.CompareTo(y);\r\n  }\r\n },Comparer,ComparableComparer);\r\n ComparableComparer.New=Runtime.Ctor(function()\r\n {\r\n  Comparer.New.call(this);\r\n },ComparableComparer);\r\n BaseComparer=Comparers.BaseComparer=Runtime.Class({\r\n  Compare$1:function(x,y)\r\n  {\r\n   return Unchecked.Compare(x,y);\r\n  }\r\n },Comparer,BaseComparer);\r\n BaseComparer.New=Runtime.Ctor(function()\r\n {\r\n  Comparer.New.call(this);\r\n },BaseComparer);\r\n Operators.charRange=function(min,max)\r\n {\r\n  var minv,count;\r\n  minv=min.charCodeAt();\r\n  count=1+max.charCodeAt()-minv;\r\n  return count<=0?[]:Seq.init(count,function(x)\r\n  {\r\n   return String.fromCharCode(x+minv);\r\n  });\r\n };\r\n Nullable.op=function(a,b,f)\r\n {\r\n  return a==null||b==null?null:f(a,b);\r\n };\r\n Nullable.opL=function(a,b,f)\r\n {\r\n  return a==null?null:f(a,b);\r\n };\r\n Nullable.opR=function(a,b,f)\r\n {\r\n  return b==null?null:f(a,b);\r\n };\r\n Nullable.cmp=function(a,b,f)\r\n {\r\n  return a==null||b==null?false:f(a,b);\r\n };\r\n Nullable.cmpE=function(a,b,f)\r\n {\r\n  return a==null?b==null:b==null?false:f(a,b);\r\n };\r\n Nullable.cmpL=function(a,b,f)\r\n {\r\n  return a==null?false:f(a,b);\r\n };\r\n Nullable.cmpR=function(a,b,f)\r\n {\r\n  return b==null?false:f(a,b);\r\n };\r\n Nullable.conv=function(a,f)\r\n {\r\n  return a==null?null:f(a);\r\n };\r\n Utils.prettyPrint=function(o)\r\n {\r\n  var t,s;\r\n  function m(k,v)\r\n  {\r\n   return k+\" = \"+Utils.prettyPrint(v);\r\n  }\r\n  return o===null?\"null\":(t=typeof o,t==\"string\"?\"\\\"\"+o+\"\\\"\":t==\"object\"?o instanceof Global.Array?\"[|\"+Strings.concat(\"; \",Arrays.map(Utils.prettyPrint,o))+\"|]\":(s=String(o),s===\"[object Object]\"?\"{\"+Strings.concat(\"; \",Arrays.map(function($1)\r\n  {\r\n   return m($1[0],$1[1]);\r\n  },JS.GetFields(o)))+\"}\":s):String(o));\r\n };\r\n Utils.printArray2D=function(p,o)\r\n {\r\n  return o===null?\"null\":\"[[\"+Strings.concat(\"][\",Seq.delay(function()\r\n  {\r\n   var l2;\r\n   l2=o.length?o[0].length:0;\r\n   return Seq.map(function(i)\r\n   {\r\n    return Strings.concat(\"; \",Seq.delay(function()\r\n    {\r\n     return Seq.map(function(j)\r\n     {\r\n      return p(Arrays.get2D(o,i,j));\r\n     },Operators.range(0,l2-1));\r\n    }));\r\n   },Operators.range(0,o.length-1));\r\n  }))+\"]]\";\r\n };\r\n Utils.printArray=function(p,o)\r\n {\r\n  return o===null?\"null\":\"[|\"+Strings.concat(\"; \",Arrays.map(p,o))+\"|]\";\r\n };\r\n Utils.printList=function(p,o)\r\n {\r\n  return\"[\"+Strings.concat(\"; \",Seq.map(p,o))+\"]\";\r\n };\r\n Utils.padNumLeft=function(s,l)\r\n {\r\n  var f;\r\n  f=Arrays.get(s,0);\r\n  return f===\" \"||f===\"+\"||f===\"-\"?f+Strings.PadLeftWith(s.substr(1),l-1,\"0\"):Strings.PadLeftWith(s,l,\"0\");\r\n };\r\n Utils.spaceForPos=function(n,s)\r\n {\r\n  return 0<=n?\" \"+s:s;\r\n };\r\n Utils.plusForPos=function(n,s)\r\n {\r\n  return 0<=n?\"+\"+s:s;\r\n };\r\n Utils.toSafe=function(s)\r\n {\r\n  return s==null?\"\":s;\r\n };\r\n CT.New=function(IsCancellationRequested,Registrations)\r\n {\r\n  return{\r\n   c:IsCancellationRequested,\r\n   r:Registrations\r\n  };\r\n };\r\n AsyncBody.New=function(k,ct)\r\n {\r\n  return{\r\n   k:k,\r\n   ct:ct\r\n  };\r\n };\r\n Scheduler=Concurrency.Scheduler=Runtime.Class({\r\n  tick:function()\r\n  {\r\n   var loop,$this,t;\r\n   $this=this;\r\n   t=Date.now();\r\n   loop=true;\r\n   while(loop)\r\n    if(this.robin.length===0)\r\n     {\r\n      this.idle=true;\r\n      loop=false;\r\n     }\r\n    else\r\n     {\r\n      (this.robin.shift())();\r\n      Date.now()-t>40?(Global.setTimeout(function()\r\n      {\r\n       $this.tick();\r\n      },0),loop=false):void 0;\r\n     }\r\n  },\r\n  Fork:function(action)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   this.robin.push(action);\r\n   this.idle?(this.idle=false,Global.setTimeout(function()\r\n   {\r\n    $this.tick();\r\n   },0)):void 0;\r\n  }\r\n },Obj,Scheduler);\r\n Scheduler.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n  this.idle=true;\r\n  this.robin=[];\r\n },Scheduler);\r\n Concurrency.For=function(s,b)\r\n {\r\n  return Concurrency.Using(Enumerator.Get(s),function(ie)\r\n  {\r\n   return Concurrency.While(function()\r\n   {\r\n    return ie.MoveNext();\r\n   },Concurrency.Delay(function()\r\n   {\r\n    return b(ie.Current());\r\n   }));\r\n  });\r\n };\r\n Concurrency.While=function(g,c)\r\n {\r\n  return g()?Concurrency.Bind(c,function()\r\n  {\r\n   return Concurrency.While(g,c);\r\n  }):Concurrency.Return();\r\n };\r\n Concurrency.Using=function(x,f)\r\n {\r\n  return Concurrency.TryFinally(f(x),function()\r\n  {\r\n   x.Dispose();\r\n  });\r\n };\r\n Concurrency.TryCancelled=function(run,comp)\r\n {\r\n  return function(c)\r\n  {\r\n   run(AsyncBody.New(function(a)\r\n   {\r\n    if(a.$==2)\r\n     {\r\n      comp(a.$0);\r\n      c.k(a);\r\n     }\r\n    else\r\n     c.k(a);\r\n   },c.ct));\r\n  };\r\n };\r\n Concurrency.OnCancel=function(action)\r\n {\r\n  return function(c)\r\n  {\r\n   c.k({\r\n    $:0,\r\n    $0:Concurrency.Register(c.ct,action)\r\n   });\r\n  };\r\n };\r\n Concurrency.StartChildAsTask=function(r)\r\n {\r\n  return function(c)\r\n  {\r\n   (Concurrency.StartChild(r,null))(AsyncBody.New(function(a)\r\n   {\r\n    if(a.$==0)\r\n     c.k({\r\n      $:0,\r\n      $0:Concurrency.StartImmediateAsTask(a.$0,{\r\n       $:1,\r\n       $0:c.ct\r\n      })\r\n     });\r\n   },c.ct));\r\n  };\r\n };\r\n Concurrency.StartChild=function(r,t)\r\n {\r\n  return function(c)\r\n  {\r\n   var inTime,cached,queue,tReg;\r\n   inTime=[true];\r\n   cached=[null];\r\n   queue=[];\r\n   tReg=t!=null&&t.$==1?{\r\n    $:1,\r\n    $0:Global.setTimeout(function()\r\n    {\r\n     var err;\r\n     inTime[0]=false;\r\n     err={\r\n      $:1,\r\n      $0:new TimeoutException.New()\r\n     };\r\n     while(queue.length>0)\r\n      (queue.shift())(err);\r\n    },t.$0)\r\n   }:null;\r\n   Concurrency.scheduler().Fork(function()\r\n   {\r\n    if(!c.ct.c)\r\n     r(AsyncBody.New(function(res)\r\n     {\r\n      if(inTime[0])\r\n       {\r\n        cached[0]={\r\n         $:1,\r\n         $0:res\r\n        };\r\n        tReg!=null&&tReg.$==1?Global.clearTimeout(tReg.$0):void 0;\r\n        while(queue.length>0)\r\n         (queue.shift())(res);\r\n       }\r\n     },c.ct));\r\n   });\r\n   c.k({\r\n    $:0,\r\n    $0:function(c2)\r\n    {\r\n     var m;\r\n     if(inTime[0])\r\n      {\r\n       m=cached[0];\r\n       m==null?queue.push(c2.k):c2.k(m.$0);\r\n      }\r\n     else\r\n      c2.k({\r\n       $:1,\r\n       $0:new TimeoutException.New()\r\n      });\r\n    }\r\n   });\r\n  };\r\n };\r\n Concurrency.Parallel=function(cs)\r\n {\r\n  var cs$1;\r\n  cs$1=Arrays.ofSeq(cs);\r\n  return Arrays.length(cs$1)===0?Concurrency.Return([]):function(c)\r\n  {\r\n   var n,o,a;\r\n   function accept(i,x)\r\n   {\r\n    var $1,$2;\r\n    $2=o[0];\r\n    switch($2===0?0:$2===1?x.$==0?1:($1=[$2,x],3):x.$==0?2:($1=[$2,x],3))\r\n    {\r\n     case 0:\r\n      return null;\r\n     case 1:\r\n      Arrays.set(a,i,x.$0);\r\n      o[0]=0;\r\n      return c.k({\r\n       $:0,\r\n       $0:a\r\n      });\r\n     case 2:\r\n      Arrays.set(a,i,x.$0);\r\n      {\r\n       o[0]=$2-1;\r\n       return;\r\n      }\r\n      break;\r\n     case 3:\r\n      o[0]=0;\r\n      return c.k($1[1]);\r\n    }\r\n   }\r\n   n=cs$1.length;\r\n   o=[n];\r\n   a=new Global.Array(n);\r\n   Arrays.iteri(function($1,$2)\r\n   {\r\n    return Concurrency.scheduler().Fork(function()\r\n    {\r\n     $2(AsyncBody.New(function($3)\r\n     {\r\n      return accept($1,$3);\r\n     },c.ct));\r\n    });\r\n   },cs$1);\r\n  };\r\n };\r\n Concurrency.Sleep=function(ms)\r\n {\r\n  return function(c)\r\n  {\r\n   var pending,creg;\r\n   pending=void 0;\r\n   creg=void 0;\r\n   pending=Global.setTimeout(function()\r\n   {\r\n    creg.Dispose();\r\n    Concurrency.scheduler().Fork(function()\r\n    {\r\n     c.k({\r\n      $:0,\r\n      $0:null\r\n     });\r\n    });\r\n   },ms);\r\n   creg=Concurrency.Register(c.ct,function()\r\n   {\r\n    Global.clearTimeout(pending);\r\n    Concurrency.scheduler().Fork(function()\r\n    {\r\n     Concurrency.cancel(c);\r\n    });\r\n   });\r\n  };\r\n };\r\n Concurrency.StartImmediateAsTask=function(c,ctOpt)\r\n {\r\n  var tcs;\r\n  tcs=new TaskCompletionSource.New();\r\n  Concurrency.StartWithContinuations(c,function(a)\r\n  {\r\n   tcs.SetResult(a);\r\n  },function(a)\r\n  {\r\n   tcs.SetException$1(a);\r\n  },function()\r\n  {\r\n   tcs.SetCanceled();\r\n  },ctOpt);\r\n  return tcs.get_Task();\r\n };\r\n Concurrency.StartAsTask=function(c,ctOpt)\r\n {\r\n  var tcs;\r\n  tcs=new TaskCompletionSource.New();\r\n  Concurrency.scheduler().Fork(function()\r\n  {\r\n   Concurrency.StartWithContinuations(c,function(a)\r\n   {\r\n    tcs.SetResult(a);\r\n   },function(a)\r\n   {\r\n    tcs.SetException$1(a);\r\n   },function()\r\n   {\r\n    tcs.SetCanceled();\r\n   },ctOpt);\r\n  });\r\n  return tcs.get_Task();\r\n };\r\n Concurrency.AwaitTask1=function(t)\r\n {\r\n  return Concurrency.FromContinuations(function(ok,err,cc)\r\n  {\r\n   t.get_Status()===0?t.Start():void 0;\r\n   t.ContinueWith$1(function(t$1)\r\n   {\r\n    return t$1.get_IsCanceled()?cc(new OperationCanceledException.New(Concurrency.noneCT())):t$1.get_IsFaulted()?err(t$1.get_Exception()):ok(t$1.get_Result());\r\n   },Concurrency.noneCT());\r\n  });\r\n };\r\n Concurrency.AwaitTask=function(t)\r\n {\r\n  return Concurrency.FromContinuations(function(ok,err,cc)\r\n  {\r\n   t.get_Status()===0?t.Start():void 0;\r\n   t.ContinueWith$1(function(t$1)\r\n   {\r\n    return t$1.get_IsCanceled()?cc(new OperationCanceledException.New(Concurrency.noneCT())):t$1.get_IsFaulted()?err(t$1.get_Exception()):ok();\r\n   },Concurrency.noneCT());\r\n  });\r\n };\r\n Concurrency.AwaitEvent=function(e,ca)\r\n {\r\n  return function(c)\r\n  {\r\n   var sub,creg;\r\n   sub=void 0;\r\n   creg=void 0;\r\n   sub=e.Subscribe(Util.observer(function(x)\r\n   {\r\n    sub.Dispose();\r\n    creg.Dispose();\r\n    Concurrency.scheduler().Fork(function()\r\n    {\r\n     c.k({\r\n      $:0,\r\n      $0:x\r\n     });\r\n    });\r\n   }));\r\n   creg=Concurrency.Register(c.ct,function()\r\n   {\r\n    if(ca!=null&&ca.$==1)\r\n     ca.$0();\r\n    else\r\n     {\r\n      sub.Dispose();\r\n      Concurrency.scheduler().Fork(function()\r\n      {\r\n       Concurrency.cancel(c);\r\n      });\r\n     }\r\n   });\r\n  };\r\n };\r\n Concurrency.StartImmediate=function(c,ctOpt)\r\n {\r\n  var ct,d;\r\n  ct=(d=(Concurrency.defCTS())[0],ctOpt==null?d:ctOpt.$0);\r\n  !ct.c?c(AsyncBody.New(function(a)\r\n  {\r\n   if(a.$==1)\r\n    Concurrency.UncaughtAsyncError(a.$0);\r\n  },ct)):void 0;\r\n };\r\n Concurrency.Start=function(c,ctOpt)\r\n {\r\n  var ct,d;\r\n  ct=(d=(Concurrency.defCTS())[0],ctOpt==null?d:ctOpt.$0);\r\n  Concurrency.scheduler().Fork(function()\r\n  {\r\n   if(!ct.c)\r\n    c(AsyncBody.New(function(a)\r\n    {\r\n     if(a.$==1)\r\n      Concurrency.UncaughtAsyncError(a.$0);\r\n    },ct));\r\n  });\r\n };\r\n Concurrency.UncaughtAsyncError=function(e)\r\n {\r\n  console.log(\"WebSharper: Uncaught asynchronous exception\",e);\r\n };\r\n Concurrency.StartWithContinuations=function(c,s,f,cc,ctOpt)\r\n {\r\n  var ct,d;\r\n  ct=(d=(Concurrency.defCTS())[0],ctOpt==null?d:ctOpt.$0);\r\n  !ct.c?c(AsyncBody.New(function(a)\r\n  {\r\n   if(a.$==1)\r\n    f(a.$0);\r\n   else\r\n    if(a.$==2)\r\n     cc(a.$0);\r\n    else\r\n     s(a.$0);\r\n  },ct)):void 0;\r\n };\r\n Concurrency.FromContinuations=function(subscribe)\r\n {\r\n  return function(c)\r\n  {\r\n   var continued;\r\n   function once(cont)\r\n   {\r\n    if(continued[0])\r\n     Operators.FailWith(\"A continuation provided by Async.FromContinuations was invoked multiple times\");\r\n    else\r\n     {\r\n      continued[0]=true;\r\n      Concurrency.scheduler().Fork(cont);\r\n     }\r\n   }\r\n   continued=[false];\r\n   subscribe(function(a)\r\n   {\r\n    once(function()\r\n    {\r\n     c.k({\r\n      $:0,\r\n      $0:a\r\n     });\r\n    });\r\n   },function(e)\r\n   {\r\n    once(function()\r\n    {\r\n     c.k({\r\n      $:1,\r\n      $0:e\r\n     });\r\n    });\r\n   },function(e)\r\n   {\r\n    once(function()\r\n    {\r\n     c.k({\r\n      $:2,\r\n      $0:e\r\n     });\r\n    });\r\n   });\r\n  };\r\n };\r\n Concurrency.GetCT=function()\r\n {\r\n  SC$3.$cctor();\r\n  return SC$3.GetCT;\r\n };\r\n Concurrency.Catch=function(r)\r\n {\r\n  return function(c)\r\n  {\r\n   try\r\n   {\r\n    r(AsyncBody.New(function(a)\r\n    {\r\n     if(a.$==0)\r\n      c.k({\r\n       $:0,\r\n       $0:{\r\n        $:0,\r\n        $0:a.$0\r\n       }\r\n      });\r\n     else\r\n      if(a.$==1)\r\n       c.k({\r\n        $:0,\r\n        $0:{\r\n         $:1,\r\n         $0:a.$0\r\n        }\r\n       });\r\n      else\r\n       c.k(a);\r\n    },c.ct));\r\n   }\r\n   catch(e)\r\n   {\r\n    c.k({\r\n     $:0,\r\n     $0:{\r\n      $:1,\r\n      $0:e\r\n     }\r\n    });\r\n   }\r\n  };\r\n };\r\n Concurrency.TryWith=function(r,f)\r\n {\r\n  return function(c)\r\n  {\r\n   r(AsyncBody.New(function(a)\r\n   {\r\n    if(a.$==0)\r\n     c.k({\r\n      $:0,\r\n      $0:a.$0\r\n     });\r\n    else\r\n     if(a.$==1)\r\n      try\r\n      {\r\n       (f(a.$0))(c);\r\n      }\r\n      catch(e)\r\n      {\r\n       c.k(a);\r\n      }\r\n     else\r\n      c.k(a);\r\n   },c.ct));\r\n  };\r\n };\r\n Concurrency.TryFinally=function(run,f)\r\n {\r\n  return function(c)\r\n  {\r\n   run(AsyncBody.New(function(r)\r\n   {\r\n    try\r\n    {\r\n     f();\r\n     c.k(r);\r\n    }\r\n    catch(e)\r\n    {\r\n     c.k({\r\n      $:1,\r\n      $0:e\r\n     });\r\n    }\r\n   },c.ct));\r\n  };\r\n };\r\n Concurrency.Delay=function(mk)\r\n {\r\n  return function(c)\r\n  {\r\n   try\r\n   {\r\n    (mk(null))(c);\r\n   }\r\n   catch(e)\r\n   {\r\n    c.k({\r\n     $:1,\r\n     $0:e\r\n    });\r\n   }\r\n  };\r\n };\r\n Concurrency.Combine=function(a,b)\r\n {\r\n  return Concurrency.Bind(a,function()\r\n  {\r\n   return b;\r\n  });\r\n };\r\n Concurrency.Bind=function(r,f)\r\n {\r\n  return Concurrency.checkCancel(function(c)\r\n  {\r\n   r(AsyncBody.New(function(a)\r\n   {\r\n    var x;\r\n    if(a.$==0)\r\n     {\r\n      x=a.$0;\r\n      Concurrency.scheduler().Fork(function()\r\n      {\r\n       try\r\n       {\r\n        (f(x))(c);\r\n       }\r\n       catch(e)\r\n       {\r\n        c.k({\r\n         $:1,\r\n         $0:e\r\n        });\r\n       }\r\n      });\r\n     }\r\n    else\r\n     Concurrency.scheduler().Fork(function()\r\n     {\r\n      c.k(a);\r\n     });\r\n   },c.ct));\r\n  });\r\n };\r\n Concurrency.Zero=function()\r\n {\r\n  SC$3.$cctor();\r\n  return SC$3.Zero;\r\n };\r\n Concurrency.Return=function(x)\r\n {\r\n  return function(c)\r\n  {\r\n   c.k({\r\n    $:0,\r\n    $0:x\r\n   });\r\n  };\r\n };\r\n Concurrency.checkCancel=function(r)\r\n {\r\n  return function(c)\r\n  {\r\n   if(c.ct.c)\r\n    Concurrency.cancel(c);\r\n   else\r\n    r(c);\r\n  };\r\n };\r\n Concurrency.cancel=function(c)\r\n {\r\n  c.k({\r\n   $:2,\r\n   $0:new OperationCanceledException.New(c.ct)\r\n  });\r\n };\r\n Concurrency.defCTS=function()\r\n {\r\n  SC$3.$cctor();\r\n  return SC$3.defCTS;\r\n };\r\n Concurrency.scheduler=function()\r\n {\r\n  SC$3.$cctor();\r\n  return SC$3.scheduler;\r\n };\r\n Concurrency.Register=function(ct,callback)\r\n {\r\n  var i;\r\n  return ct===Concurrency.noneCT()?{\r\n   Dispose:function()\r\n   {\r\n    return null;\r\n   }\r\n  }:(i=ct.r.push(callback)-1,{\r\n   Dispose:function()\r\n   {\r\n    return Arrays.set(ct.r,i,Global.ignore);\r\n   }\r\n  });\r\n };\r\n Concurrency.noneCT=function()\r\n {\r\n  SC$3.$cctor();\r\n  return SC$3.noneCT;\r\n };\r\n SC$3.$cctor=function()\r\n {\r\n  SC$3.$cctor=Global.ignore;\r\n  SC$3.noneCT=CT.New(false,[]);\r\n  SC$3.scheduler=new Scheduler.New();\r\n  SC$3.defCTS=[new CancellationTokenSource.New()];\r\n  SC$3.Zero=Concurrency.Return();\r\n  SC$3.GetCT=function(c)\r\n  {\r\n   c.k({\r\n    $:0,\r\n    $0:c.ct\r\n   });\r\n  };\r\n };\r\n T=Enumerator.T=Runtime.Class({\r\n  Dispose:function()\r\n  {\r\n   if(this.d)\r\n    this.d(this);\r\n  },\r\n  Current:function()\r\n  {\r\n   return this.c;\r\n  },\r\n  Current0:function()\r\n  {\r\n   return this.c;\r\n  },\r\n  MoveNext:function()\r\n  {\r\n   return this.n(this);\r\n  }\r\n },Obj,T);\r\n T.New=Runtime.Ctor(function(s,c,n,d)\r\n {\r\n  Obj.New.call(this);\r\n  this.s=s;\r\n  this.c=c;\r\n  this.n=n;\r\n  this.d=d;\r\n },T);\r\n Enumerator.Get0=function(x)\r\n {\r\n  return x instanceof Global.Array?Enumerator.ArrayEnumerator(x):Unchecked.Equals(typeof x,\"string\")?Enumerator.StringEnumerator(x):\"GetEnumerator0\"in x?x.GetEnumerator0():x.GetEnumerator();\r\n };\r\n Enumerator.Get=function(x)\r\n {\r\n  return x instanceof Global.Array?Enumerator.ArrayEnumerator(x):Unchecked.Equals(typeof x,\"string\")?Enumerator.StringEnumerator(x):x.GetEnumerator();\r\n };\r\n Enumerator.StringEnumerator=function(s)\r\n {\r\n  return new T.New(0,null,function(e)\r\n  {\r\n   var i;\r\n   i=e.s;\r\n   return i<s.length&&(e.c=s[i],e.s=i+1,true);\r\n  },void 0);\r\n };\r\n Enumerator.ArrayEnumerator=function(s)\r\n {\r\n  return new T.New(0,null,function(e)\r\n  {\r\n   var i;\r\n   i=e.s;\r\n   return i<Arrays.length(s)&&(e.c=Arrays.get(s,i),e.s=i+1,true);\r\n  },void 0);\r\n };\r\n Optional.Undefined={\r\n  $:0\r\n };\r\n Arrays.splitInto=function(count,arr)\r\n {\r\n  var startIndex,len,count$1,res,minChunkSize,i,$1,i$1,$2;\r\n  if(count<=0)\r\n   Operators.FailWith(\"Count must be positive\");\r\n  len=Arrays.length(arr);\r\n  if(len===0)\r\n   return[];\r\n  else\r\n   {\r\n    count$1=Unchecked.Compare(count,len)===-1?count:len;\r\n    res=Arrays.create(count$1,null);\r\n    minChunkSize=len/count$1>>0;\r\n    startIndex=0;\r\n    for(i=0,$1=len%count$1-1;i<=$1;i++){\r\n     res[i]=Arrays.sub(arr,startIndex,minChunkSize+1);\r\n     startIndex=startIndex+minChunkSize+1;\r\n    }\r\n    for(i$1=len%count$1,$2=count$1-1;i$1<=$2;i$1++){\r\n     res[i$1]=Arrays.sub(arr,startIndex,minChunkSize);\r\n     startIndex=startIndex+minChunkSize;\r\n    }\r\n    return res;\r\n   }\r\n };\r\n Arrays.contains=function(item,arr)\r\n {\r\n  var c,i,$1,l;\r\n  c=true;\r\n  i=0;\r\n  l=Arrays.length(arr);\r\n  while(c&&i<l)\r\n   if(Unchecked.Equals(arr[i],item))\r\n    c=false;\r\n   else\r\n    i=i+1;\r\n  return!c;\r\n };\r\n Arrays.tryFindBack=function(f,arr)\r\n {\r\n  var res,i,r;\r\n  res=null;\r\n  i=arr.length-1;\r\n  while(i>=0&&res==null)\r\n   {\r\n    r=arr[i];\r\n    f(r)?res={\r\n     $:1,\r\n     $0:r\r\n    }:void 0;\r\n    i=i-1;\r\n   }\r\n  return res;\r\n };\r\n Arrays.tryFindIndexBack=function(f,arr)\r\n {\r\n  var res,i;\r\n  res=null;\r\n  i=arr.length-1;\r\n  while(i>=0&&res==null)\r\n   {\r\n    f(Arrays.get(arr,i))?res={\r\n     $:1,\r\n     $0:i\r\n    }:void 0;\r\n    i=i-1;\r\n   }\r\n  return res;\r\n };\r\n Arrays.mapFold=function(f,zero,arr)\r\n {\r\n  var acc,r,i,$1,p;\r\n  r=new Global.Array(arr.length);\r\n  acc=zero;\r\n  for(i=0,$1=arr.length-1;i<=$1;i++){\r\n   p=f(acc,arr[i]);\r\n   r[i]=p[0];\r\n   acc=p[1];\r\n  }\r\n  return[r,acc];\r\n };\r\n Arrays.mapFoldBack=function(f,arr,zero)\r\n {\r\n  var acc,$1,r,len,j,$2,i,p;\r\n  r=new Global.Array(arr.length);\r\n  acc=zero;\r\n  len=arr.length;\r\n  for(j=1,$2=len;j<=$2;j++){\r\n   i=len-j;\r\n   p=f(arr[i],acc);\r\n   r[i]=p[0];\r\n   acc=p[1];\r\n  }\r\n  return[r,acc];\r\n };\r\n Arrays.mapInPlace=function(f,arr)\r\n {\r\n  var i,$1;\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=f(arr[i]);\r\n };\r\n Arrays.mapiInPlace=function(f,arr)\r\n {\r\n  var i,$1;\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=f(i,arr[i]);\r\n  return arr;\r\n };\r\n Arrays.sortInPlaceByDescending=function(f,arr)\r\n {\r\n  Arrays.mapInPlace(function(t)\r\n  {\r\n   return t[0];\r\n  },Arrays.mapiInPlace(function($1,$2)\r\n  {\r\n   return[$2,[f($2),$1]];\r\n  },arr).sort(function($1,$2)\r\n  {\r\n   return-Unchecked.Compare($1[1],$2[1]);\r\n  }));\r\n };\r\n Seq.tryHead=function(s)\r\n {\r\n  var e;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   return e.MoveNext()?{\r\n    $:1,\r\n    $0:e.Current()\r\n   }:null;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.tryItem=function(i,s)\r\n {\r\n  var j,e,go;\r\n  if(i<0)\r\n   return null;\r\n  else\r\n   {\r\n    j=0;\r\n    e=Enumerator.Get(s);\r\n    try\r\n    {\r\n     go=true;\r\n     while(go&&j<=i)\r\n      if(e.MoveNext())\r\n       j=j+1;\r\n      else\r\n       go=false;\r\n     return go?{\r\n      $:1,\r\n      $0:e.Current()\r\n     }:null;\r\n    }\r\n    finally\r\n    {\r\n     if(typeof e==\"object\"&&\"Dispose\"in e)\r\n      e.Dispose();\r\n    }\r\n   }\r\n };\r\n Seq.tryLast=function(s)\r\n {\r\n  var e,$1;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   if(e.MoveNext())\r\n    {\r\n     while(e.MoveNext())\r\n      ;\r\n     $1={\r\n      $:1,\r\n      $0:e.Current()\r\n     };\r\n    }\r\n   else\r\n    $1=null;\r\n   return $1;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.chunkBySize=function(size,s)\r\n {\r\n  size<=0?Operators.FailWith(\"Chunk size must be positive\"):void 0;\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var o;\r\n    o=Enumerator.Get(s);\r\n    return new T.New(true,null,function(e)\r\n    {\r\n     var res;\r\n     if(e.s&&o.MoveNext())\r\n      {\r\n       res=[o.Current()];\r\n       while(e.s&&Arrays.length(res)<size)\r\n        if(o.MoveNext())\r\n         res.push(o.Current());\r\n        else\r\n         e.s=false;\r\n       e.c=res;\r\n       return true;\r\n      }\r\n     else\r\n      return false;\r\n    },function()\r\n    {\r\n     o.Dispose();\r\n    });\r\n   }\r\n  };\r\n };\r\n Arrays.countBy=function(f,a)\r\n {\r\n  var d,keys,i,$1,k;\r\n  d=new Dictionary.New$5();\r\n  keys=[];\r\n  for(i=0,$1=Arrays.length(a)-1;i<=$1;i++){\r\n   k=f(a[i]);\r\n   d.ContainsKey(k)?d.set_Item(k,d.get_Item(k)+1):(keys.push(k),d.Add(k,1));\r\n  }\r\n  Arrays.mapInPlace(function(k$1)\r\n  {\r\n   return[k$1,d.get_Item(k$1)];\r\n  },keys);\r\n  return keys;\r\n };\r\n Seq.except=function(itemsToExclude,s)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var o,seen;\r\n    o=Enumerator.Get(s);\r\n    seen=new HashSet.New$2(itemsToExclude);\r\n    return new T.New(null,null,function(e)\r\n    {\r\n     var cur,has;\r\n     if(o.MoveNext())\r\n      {\r\n       cur=o.Current();\r\n       has=seen.Add(cur);\r\n       while(!has&&o.MoveNext())\r\n        {\r\n         cur=o.Current();\r\n         has=seen.Add(cur);\r\n        }\r\n       return has&&(e.c=cur,true);\r\n      }\r\n     else\r\n      return false;\r\n    },function()\r\n    {\r\n     o.Dispose();\r\n    });\r\n   }\r\n  };\r\n };\r\n List.skip=function(i,l)\r\n {\r\n  var res,j,$1;\r\n  res=l;\r\n  for(j=1,$1=i;j<=$1;j++)if(res.$==0)\r\n   Operators.FailWith(\"Input list too short.\");\r\n  else\r\n   res=res.$1;\r\n  return res;\r\n };\r\n Arrays.groupBy=function(f,a)\r\n {\r\n  var d,keys,i,$1,c,k;\r\n  d=new Dictionary.New$5();\r\n  keys=[];\r\n  for(i=0,$1=Arrays.length(a)-1;i<=$1;i++){\r\n   c=a[i];\r\n   k=f(c);\r\n   d.ContainsKey(k)?d.get_Item(k).push(c):(keys.push(k),d.Add(k,[c]));\r\n  }\r\n  Arrays.mapInPlace(function(k$1)\r\n  {\r\n   return[k$1,d.get_Item(k$1)];\r\n  },keys);\r\n  return keys;\r\n };\r\n Seq.insufficient=function()\r\n {\r\n  return Operators.FailWith(\"The input sequence has an insufficient number of elements.\");\r\n };\r\n Seq.last=function(s)\r\n {\r\n  var e,$1;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   if(!e.MoveNext())\r\n    $1=Seq.insufficient();\r\n   else\r\n    {\r\n     while(e.MoveNext())\r\n      ;\r\n     $1=e.Current();\r\n    }\r\n   return $1;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.contains=function(el,s)\r\n {\r\n  var e,r;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   r=false;\r\n   while(!r&&e.MoveNext())\r\n    r=Unchecked.Equals(e.Current(),el);\r\n   return r;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n List.skipWhile=function(predicate,list)\r\n {\r\n  var rest;\r\n  rest=list;\r\n  while(!(rest.$==0)&&predicate(List.head(rest)))\r\n   rest=List.tail(rest);\r\n  return rest;\r\n };\r\n Seq.nonNegative=function()\r\n {\r\n  return Operators.FailWith(\"The input must be non-negative.\");\r\n };\r\n Arrays.transposeArray=function(array)\r\n {\r\n  var len,lenInner,j,$1,result,i,$2,j$1,$3;\r\n  len=Arrays.length(array);\r\n  if(len===0)\r\n   return[];\r\n  else\r\n   {\r\n    lenInner=Arrays.length(Arrays.get(array,0));\r\n    for(j=1,$1=len-1;j<=$1;j++)if(lenInner!==Arrays.length(Arrays.get(array,j)))\r\n     Operators.FailWith(\"The arrays have different lengths.\");\r\n    result=new Global.Array(lenInner);\r\n    for(i=0,$2=lenInner-1;i<=$2;i++){\r\n     result[i]=new Global.Array(len);\r\n     for(j$1=0,$3=len-1;j$1<=$3;j$1++)result[i][j$1]=Arrays.get(Arrays.get(array,j$1),i);\r\n    }\r\n    return result;\r\n   }\r\n };\r\n Arrays.checkBounds=function(arr,n)\r\n {\r\n  if(n<0||n>=arr.length)\r\n   Operators.FailWith(\"Index was outside the bounds of the array.\");\r\n };\r\n Arrays.checkBounds2D=function(arr,n1,n2)\r\n {\r\n  if(n1<0||n2<0||n1>=arr.length||n2>=(arr.length?arr[0].length:0))\r\n   throw new IndexOutOfRangeException.New();\r\n };\r\n Arrays.checkRange=function(arr,start,size)\r\n {\r\n  if(size<0||start<0||arr.length<start+size)\r\n   Operators.FailWith(\"Index was outside the bounds of the array.\");\r\n };\r\n Arrays.set=function(arr,n,x)\r\n {\r\n  Arrays.checkBounds(arr,n);\r\n  arr[n]=x;\r\n };\r\n Arrays.get=function(arr,n)\r\n {\r\n  Arrays.checkBounds(arr,n);\r\n  return arr[n];\r\n };\r\n Arrays.sub=function(arr,start,length)\r\n {\r\n  Arrays.checkRange(arr,start,length);\r\n  return arr.slice(start,start+length);\r\n };\r\n Arrays.setSub=function(arr,start,len,src)\r\n {\r\n  var i,$1;\r\n  for(i=0,$1=len-1;i<=$1;i++)Arrays.set(arr,start+i,Arrays.get(src,i));\r\n };\r\n Arrays.get2D=function(arr,n1,n2)\r\n {\r\n  Arrays.checkBounds2D(arr,n1,n2);\r\n  return arr[n1][n2];\r\n };\r\n Arrays.set2D=function(arr,n1,n2,x)\r\n {\r\n  Arrays.checkBounds2D(arr,n1,n2);\r\n  arr[n1][n2]=x;\r\n };\r\n Arrays.zeroCreate2D=function(n,m)\r\n {\r\n  var arr;\r\n  arr=Arrays.init(n,function()\r\n  {\r\n   return Arrays.create(m,null);\r\n  });\r\n  arr.dims=2;\r\n  return arr;\r\n };\r\n Arrays.sub2D=function(src,src1,src2,len1,len2)\r\n {\r\n  var len1$1,len2$1,dst,i,$1,j,$2;\r\n  len1$1=len1<0?0:len1;\r\n  len2$1=len2<0?0:len2;\r\n  dst=Arrays.zeroCreate2D(len1$1,len2$1);\r\n  for(i=0,$1=len1$1-1;i<=$1;i++){\r\n   for(j=0,$2=len2$1-1;j<=$2;j++)Arrays.set2D(dst,i,j,Arrays.get2D(src,src1+i,src2+j));\r\n  }\r\n  return dst;\r\n };\r\n Arrays.setSub2D=function(dst,src1,src2,len1,len2,src)\r\n {\r\n  var i,$1,j,$2;\r\n  for(i=0,$1=len1-1;i<=$1;i++){\r\n   for(j=0,$2=len2-1;j<=$2;j++)Arrays.set2D(dst,src1+i,src2+j,Arrays.get2D(src,i,j));\r\n  }\r\n };\r\n Arrays.length=function(arr)\r\n {\r\n  return arr.dims===2?arr.length*arr.length:arr.length;\r\n };\r\n WebSharper.checkThis=function(_this)\r\n {\r\n  return Unchecked.Equals(_this,null)?Operators.InvalidOp(\"The initialization of an object or value resulted in an object or value being accessed recursively before it was fully initialized.\"):_this;\r\n };\r\n Arrays.binarySearch=function(haystack,comparer,start,finish)\r\n {\r\n  var left,right,pivot,cmp;\r\n  left=start;\r\n  right=finish-1;\r\n  if(start<0)\r\n   throw new ArgumentOutOfRangeException.New(\"index\",\"Non-negative number required.\");\r\n  else\r\n   null;\r\n  if(finish>Arrays.length(haystack))\r\n   throw new ArgumentException.New$2(\"Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.\");\r\n  else\r\n   null;\r\n  if(finish<start)\r\n   throw new ArgumentOutOfRangeException.New(\"length\",\"Non-negative number required.\");\r\n  else\r\n   null;\r\n  while(true)\r\n   if(left>right)\r\n    return~left;\r\n   else\r\n    {\r\n     pivot=(left+right)/2>>0;\r\n     cmp=comparer(Arrays.get(haystack,pivot));\r\n     if(left===right)\r\n      return cmp===0?left:cmp>0?~(left+1):~left;\r\n     else\r\n      if(cmp<=0)\r\n       right=pivot;\r\n      else\r\n       left=pivot+1;\r\n    }\r\n };\r\n Arrays.binarySearchComparer=function(needle)\r\n {\r\n  return needle.CompareTo0?function(a)\r\n  {\r\n   return needle.CompareTo0(a);\r\n  }:function(x)\r\n  {\r\n   if(x.CompareTo0)\r\n    return-x.CompareTo0(needle);\r\n   else\r\n    throw new InvalidOperationException.New$2(\"Failed to compare two elements in the array.\",new ArgumentException.New$2(\"At least one object must implement IComparable.\"));\r\n  };\r\n };\r\n Arrays.sortInternal=function(keys,index,length,comp,swap)\r\n {\r\n  function partition(l,r)\r\n  {\r\n   var i,pivot,j,$1;\r\n   pivot=keys[r];\r\n   i=l-1;\r\n   for(j=l,$1=r-1;j<=$1;j++)if(comp(keys[j],pivot)<0)\r\n    {\r\n     i=i+1;\r\n     swap(i,j);\r\n    }\r\n   comp(keys[r],keys[i+1])<0?swap(i+1,r):void 0;\r\n   return i+1;\r\n  }\r\n  function quicksort(l,r)\r\n  {\r\n   var p;\r\n   return l<r?(p=partition(l,r),(quicksort(l,p-1),quicksort(p+1,r))):null;\r\n  }\r\n  quicksort(index,index+length-1);\r\n };\r\n Arrays.sortSub=function(keys,index,length,comp)\r\n {\r\n  Arrays.sortInternal(keys,index,length,comp,function(i,j)\r\n  {\r\n   var k;\r\n   k=keys[i];\r\n   keys[i]=keys[j];\r\n   keys[j]=k;\r\n  });\r\n };\r\n Arrays.sortByKeys=function(keys,items,index,length,comp)\r\n {\r\n  Arrays.sortInternal(keys,index,length,comp,function(i,j)\r\n  {\r\n   var k,v;\r\n   k=keys[i];\r\n   keys[i]=keys[j];\r\n   keys[j]=k;\r\n   v=items[i];\r\n   items[i]=items[j];\r\n   items[j]=v;\r\n  });\r\n };\r\n Arrays.clear=function(array,index,length)\r\n {\r\n  var i,$1;\r\n  if(array==null)\r\n   throw new ArgumentNullException.New$1(\"array\");\r\n  else\r\n   void 0;\r\n  if(index<0||length<0||index+length>Arrays.length(array))\r\n   throw new IndexOutOfRangeException.New();\r\n  else\r\n   void 0;\r\n  for(i=index,$1=index+length-1;i<=$1;i++)array[i]=typeof array[i]==\"number\"?0:null;\r\n };\r\n Arrays.constrainedCopy=function(src,srcIndex,dst,dstIndex,length)\r\n {\r\n  if(src===dst&&dstIndex<=srcIndex+length)\r\n   Arrays.blit(Arrays.init(length,function(i)\r\n   {\r\n    return Arrays.get(src,srcIndex+i);\r\n   }),0,dst,dstIndex,length);\r\n  else\r\n   Arrays.blit(src,srcIndex,dst,dstIndex,length);\r\n };\r\n Arrays.findIndexBound=function(array,startIndex,count,predicate)\r\n {\r\n  var finish,i;\r\n  finish=startIndex+count;\r\n  i=startIndex;\r\n  if(array==null)\r\n   throw new ArgumentNullException.New$1(\"array\");\r\n  else\r\n   null;\r\n  if(predicate==null)\r\n   throw new ArgumentNullException.New$1(\"match\");\r\n  else\r\n   null;\r\n  if(startIndex<0)\r\n   throw new ArgumentOutOfRangeException.New(\"startIndex\",\"Index was out of range. Must be non-negative and less than the size of the collection.\");\r\n  else\r\n   null;\r\n  if(count<0||startIndex+count>Arrays.length(array))\r\n   throw new ArgumentOutOfRangeException.New(\"count\",\"Count must be positive and count must refer to a location within the string/array/collection.\");\r\n  else\r\n   null;\r\n  while(true)\r\n   if(i===finish)\r\n    return -1;\r\n   else\r\n    if(predicate(Arrays.get(array,i)))\r\n     return i;\r\n    else\r\n     i=i+1;\r\n };\r\n Arrays.findLastIndexBound=function(array,startIndex,count,predicate)\r\n {\r\n  var i;\r\n  i=startIndex+count-1;\r\n  if(array==null)\r\n   throw new ArgumentNullException.New$1(\"array\");\r\n  else\r\n   null;\r\n  if(predicate==null)\r\n   throw new ArgumentNullException.New$1(\"match\");\r\n  else\r\n   null;\r\n  if(startIndex<0)\r\n   throw new ArgumentOutOfRangeException.New(\"startIndex\",\"Index was out of range. Must be non-negative and less than the size of the collection.\");\r\n  else\r\n   null;\r\n  if(count<0||startIndex+count>Arrays.length(array))\r\n   throw new ArgumentOutOfRangeException.New(\"count\",\"Count must be positive and count must refer to a location within the string/array/collection.\");\r\n  else\r\n   null;\r\n  while(true)\r\n   if(i<startIndex)\r\n    return -1;\r\n   else\r\n    if(predicate(Arrays.get(array,i)))\r\n     return i;\r\n    else\r\n     i=i-1;\r\n };\r\n Arrays.reverse=function(array,offset,length)\r\n {\r\n  var a;\r\n  a=Arrays.sub(array,offset,length).slice().reverse();\r\n  Arrays.blit(a,0,array,offset,Arrays.length(a));\r\n };\r\n Arrays.sum=function(arr)\r\n {\r\n  var sum,i;\r\n  sum=0;\r\n  i=0;\r\n  for(;i<arr.length;i++)sum+=arr[i];\r\n  return sum;\r\n };\r\n Arrays.sumBy=function(f,arr)\r\n {\r\n  var sum,i;\r\n  sum=0;\r\n  i=0;\r\n  for(;i<arr.length;i++)sum+=f(arr[i]);\r\n  return sum;\r\n };\r\n Arrays.allPairs=function(array1,array2)\r\n {\r\n  var len1,len2,res,i,$1,j,$2;\r\n  len1=array1.length;\r\n  len2=array2.length;\r\n  res=new Global.Array(len1*len2);\r\n  for(i=0,$1=len1-1;i<=$1;i++){\r\n   for(j=0,$2=len2-1;j<=$2;j++)res[i*len2+j]=[array1[i],array2[j]];\r\n  }\r\n  return res;\r\n };\r\n Arrays.average=function(arr)\r\n {\r\n  return Global.Number(Arrays.sum(arr))/arr.length;\r\n };\r\n Arrays.averageBy=function(f,arr)\r\n {\r\n  return Global.Number(Arrays.sumBy(f,arr))/arr.length;\r\n };\r\n Arrays.blit=function(arr1,start1,arr2,start2,length)\r\n {\r\n  var i,$1;\r\n  Arrays.checkRange(arr1,start1,length);\r\n  Arrays.checkRange(arr2,start2,length);\r\n  for(i=0,$1=length-1;i<=$1;i++)arr2[start2+i]=arr1[start1+i];\r\n };\r\n Arrays.choose=function(f,arr)\r\n {\r\n  var q,i,$1,m;\r\n  q=[];\r\n  for(i=0,$1=arr.length-1;i<=$1;i++){\r\n   m=f(arr[i]);\r\n   m==null?void 0:q.push(m.$0);\r\n  }\r\n  return q;\r\n };\r\n Arrays.collect=function(f,x)\r\n {\r\n  return Global.Array.prototype.concat.apply([],Arrays.map(f,x));\r\n };\r\n Arrays.concat=function(xs)\r\n {\r\n  return Global.Array.prototype.concat.apply([],Arrays.ofSeq(xs));\r\n };\r\n Arrays.create=function(size,value)\r\n {\r\n  var r,i,$1;\r\n  r=new Global.Array(size);\r\n  for(i=0,$1=size-1;i<=$1;i++)r[i]=value;\r\n  return r;\r\n };\r\n Arrays.exists=function(f,x)\r\n {\r\n  var e,i,$1,l;\r\n  e=false;\r\n  i=0;\r\n  l=Arrays.length(x);\r\n  while(!e&&i<l)\r\n   if(f(x[i]))\r\n    e=true;\r\n   else\r\n    i=i+1;\r\n  return e;\r\n };\r\n Arrays.exists2=function(f,x1,x2)\r\n {\r\n  var e,i,$1,l;\r\n  Arrays.checkLength(x1,x2);\r\n  e=false;\r\n  i=0;\r\n  l=Arrays.length(x1);\r\n  while(!e&&i<l)\r\n   if(f(x1[i],x2[i]))\r\n    e=true;\r\n   else\r\n    i=i+1;\r\n  return e;\r\n };\r\n Arrays.fill=function(arr,start,length,value)\r\n {\r\n  var i,$1;\r\n  Arrays.checkRange(arr,start,length);\r\n  for(i=start,$1=start+length-1;i<=$1;i++)arr[i]=value;\r\n };\r\n Arrays.filter=function(f,arr)\r\n {\r\n  var r,i,$1;\r\n  r=[];\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)if(f(arr[i]))\r\n   r.push(arr[i]);\r\n  return r;\r\n };\r\n Arrays.find=function(f,arr)\r\n {\r\n  var m;\r\n  m=Arrays.tryFind(f,arr);\r\n  return m==null?Operators.FailWith(\"KeyNotFoundException\"):m.$0;\r\n };\r\n Arrays.findIndex=function(f,arr)\r\n {\r\n  var m;\r\n  m=Arrays.tryFindIndex(f,arr);\r\n  return m==null?Operators.FailWith(\"KeyNotFoundException\"):m.$0;\r\n };\r\n Arrays.fold=function(f,zero,arr)\r\n {\r\n  var acc,i,$1;\r\n  acc=zero;\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)acc=f(acc,arr[i]);\r\n  return acc;\r\n };\r\n Arrays.fold2=function(f,zero,arr1,arr2)\r\n {\r\n  var accum,i,$1;\r\n  Arrays.checkLength(arr1,arr2);\r\n  accum=zero;\r\n  for(i=0,$1=arr1.length-1;i<=$1;i++)accum=f(accum,arr1[i],arr2[i]);\r\n  return accum;\r\n };\r\n Arrays.foldBack=function(f,arr,zero)\r\n {\r\n  var acc,$1,len,i,$2;\r\n  acc=zero;\r\n  len=arr.length;\r\n  for(i=1,$2=len;i<=$2;i++)acc=f(arr[len-i],acc);\r\n  return acc;\r\n };\r\n Arrays.foldBack2=function(f,arr1,arr2,zero)\r\n {\r\n  var $1,accum,len,i,$2;\r\n  Arrays.checkLength(arr1,arr2);\r\n  len=arr1.length;\r\n  accum=zero;\r\n  for(i=1,$2=len;i<=$2;i++)accum=f(arr1[len-i],arr2[len-i],accum);\r\n  return accum;\r\n };\r\n Arrays.forall=function(f,x)\r\n {\r\n  var a,i,$1,l;\r\n  a=true;\r\n  i=0;\r\n  l=Arrays.length(x);\r\n  while(a&&i<l)\r\n   if(f(x[i]))\r\n    i=i+1;\r\n   else\r\n    a=false;\r\n  return a;\r\n };\r\n Arrays.forall2=function(f,x1,x2)\r\n {\r\n  var a,i,$1,l;\r\n  Arrays.checkLength(x1,x2);\r\n  a=true;\r\n  i=0;\r\n  l=Arrays.length(x1);\r\n  while(a&&i<l)\r\n   if(f(x1[i],x2[i]))\r\n    i=i+1;\r\n   else\r\n    a=false;\r\n  return a;\r\n };\r\n Arrays.init=function(size,f)\r\n {\r\n  var r,i,$1;\r\n  size<0?Operators.FailWith(\"Negative size given.\"):null;\r\n  r=new Global.Array(size);\r\n  for(i=0,$1=size-1;i<=$1;i++)r[i]=f(i);\r\n  return r;\r\n };\r\n Arrays.iter=function(f,arr)\r\n {\r\n  var i,$1;\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)f(arr[i]);\r\n };\r\n Arrays.iter2=function(f,arr1,arr2)\r\n {\r\n  var i,$1;\r\n  Arrays.checkLength(arr1,arr2);\r\n  for(i=0,$1=arr1.length-1;i<=$1;i++)f(arr1[i],arr2[i]);\r\n };\r\n Arrays.iteri=function(f,arr)\r\n {\r\n  var i,$1;\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)f(i,arr[i]);\r\n };\r\n Arrays.iteri2=function(f,arr1,arr2)\r\n {\r\n  var i,$1;\r\n  Arrays.checkLength(arr1,arr2);\r\n  for(i=0,$1=arr1.length-1;i<=$1;i++)f(i,arr1[i],arr2[i]);\r\n };\r\n Arrays.map=function(f,arr)\r\n {\r\n  var r,i,$1;\r\n  r=new Global.Array(arr.length);\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)r[i]=f(arr[i]);\r\n  return r;\r\n };\r\n Arrays.map2=function(f,arr1,arr2)\r\n {\r\n  var r,i,$1;\r\n  Arrays.checkLength(arr1,arr2);\r\n  r=new Global.Array(arr2.length);\r\n  for(i=0,$1=arr2.length-1;i<=$1;i++)r[i]=f(arr1[i],arr2[i]);\r\n  return r;\r\n };\r\n Arrays.mapi=function(f,arr)\r\n {\r\n  var y,i,$1;\r\n  y=new Global.Array(arr.length);\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)y[i]=f(i,arr[i]);\r\n  return y;\r\n };\r\n Arrays.mapi2=function(f,arr1,arr2)\r\n {\r\n  var res,i,$1;\r\n  Arrays.checkLength(arr1,arr2);\r\n  res=new Global.Array(arr1.length);\r\n  for(i=0,$1=arr1.length-1;i<=$1;i++)res[i]=f(i,arr1[i],arr2[i]);\r\n  return res;\r\n };\r\n Arrays.max=function(arr)\r\n {\r\n  var m,i,$1,x;\r\n  Arrays.nonEmpty(arr);\r\n  m=arr[0];\r\n  for(i=1,$1=arr.length-1;i<=$1;i++){\r\n   x=arr[i];\r\n   Unchecked.Compare(x,m)===1?m=x:void 0;\r\n  }\r\n  return m;\r\n };\r\n Arrays.maxBy=function(f,arr)\r\n {\r\n  var m,fm,i,$1,x,fx;\r\n  Arrays.nonEmpty(arr);\r\n  m=arr[0];\r\n  fm=f(m);\r\n  for(i=1,$1=arr.length-1;i<=$1;i++){\r\n   x=arr[i];\r\n   fx=f(x);\r\n   Unchecked.Compare(fx,fm)===1?(m=x,fm=fx):void 0;\r\n  }\r\n  return m;\r\n };\r\n Arrays.min=function(arr)\r\n {\r\n  var m,i,$1,x;\r\n  Arrays.nonEmpty(arr);\r\n  m=arr[0];\r\n  for(i=1,$1=arr.length-1;i<=$1;i++){\r\n   x=arr[i];\r\n   Unchecked.Compare(x,m)===-1?m=x:void 0;\r\n  }\r\n  return m;\r\n };\r\n Arrays.minBy=function(f,arr)\r\n {\r\n  var m,fm,i,$1,x,fx;\r\n  Arrays.nonEmpty(arr);\r\n  m=arr[0];\r\n  fm=f(m);\r\n  for(i=1,$1=arr.length-1;i<=$1;i++){\r\n   x=arr[i];\r\n   fx=f(x);\r\n   Unchecked.Compare(fx,fm)===-1?(m=x,fm=fx):void 0;\r\n  }\r\n  return m;\r\n };\r\n Arrays.ofList=function(xs)\r\n {\r\n  var l,q;\r\n  q=[];\r\n  l=xs;\r\n  while(!(l.$==0))\r\n   {\r\n    q.push(List.head(l));\r\n    l=List.tail(l);\r\n   }\r\n  return q;\r\n };\r\n Arrays.ofSeq=function(xs)\r\n {\r\n  var q,o;\r\n  if(xs instanceof Global.Array)\r\n   return xs.slice();\r\n  else\r\n   if(xs instanceof T$1)\r\n    return Arrays.ofList(xs);\r\n   else\r\n    {\r\n     q=[];\r\n     o=Enumerator.Get(xs);\r\n     try\r\n     {\r\n      while(o.MoveNext())\r\n       q.push(o.Current());\r\n      return q;\r\n     }\r\n     finally\r\n     {\r\n      if(typeof o==\"object\"&&\"Dispose\"in o)\r\n       o.Dispose();\r\n     }\r\n    }\r\n };\r\n Arrays.partition=function(f,arr)\r\n {\r\n  var ret1,ret2,i,$1;\r\n  ret1=[];\r\n  ret2=[];\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)if(f(arr[i]))\r\n   ret1.push(arr[i]);\r\n  else\r\n   ret2.push(arr[i]);\r\n  return[ret1,ret2];\r\n };\r\n Arrays.permute=function(f,arr)\r\n {\r\n  var ret,i,$1;\r\n  ret=new Global.Array(arr.length);\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)ret[f(i)]=arr[i];\r\n  return ret;\r\n };\r\n Arrays.pick=function(f,arr)\r\n {\r\n  var m;\r\n  m=Arrays.tryPick(f,arr);\r\n  return m==null?Operators.FailWith(\"KeyNotFoundException\"):m.$0;\r\n };\r\n Arrays.reduce=function(f,arr)\r\n {\r\n  var acc,i,$1;\r\n  Arrays.nonEmpty(arr);\r\n  acc=arr[0];\r\n  for(i=1,$1=arr.length-1;i<=$1;i++)acc=f(acc,arr[i]);\r\n  return acc;\r\n };\r\n Arrays.reduceBack=function(f,arr)\r\n {\r\n  var $1,acc,len,i,$2;\r\n  Arrays.nonEmpty(arr);\r\n  len=arr.length;\r\n  acc=arr[len-1];\r\n  for(i=2,$2=len;i<=$2;i++)acc=f(arr[len-i],acc);\r\n  return acc;\r\n };\r\n Arrays.scan=function(f,zero,arr)\r\n {\r\n  var ret,i,$1;\r\n  ret=new Global.Array(1+arr.length);\r\n  ret[0]=zero;\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)ret[i+1]=f(ret[i],arr[i]);\r\n  return ret;\r\n };\r\n Arrays.scanBack=function(f,arr,zero)\r\n {\r\n  var len,ret,i,$1;\r\n  len=arr.length;\r\n  ret=new Global.Array(1+len);\r\n  ret[len]=zero;\r\n  for(i=0,$1=len-1;i<=$1;i++)ret[len-i-1]=f(arr[len-i-1],ret[len-i]);\r\n  return ret;\r\n };\r\n Arrays.sort=function(arr)\r\n {\r\n  return Arrays.map(function(t)\r\n  {\r\n   return t[0];\r\n  },Arrays.mapi(function($1,$2)\r\n  {\r\n   return[$2,$1];\r\n  },arr).sort(Unchecked.Compare));\r\n };\r\n Arrays.sortBy=function(f,arr)\r\n {\r\n  return Arrays.map(function(t)\r\n  {\r\n   return t[0];\r\n  },Arrays.mapi(function($1,$2)\r\n  {\r\n   return[$2,[f($2),$1]];\r\n  },arr).sort(function($1,$2)\r\n  {\r\n   return Unchecked.Compare($1[1],$2[1]);\r\n  }));\r\n };\r\n Arrays.sortInPlace=function(arr)\r\n {\r\n  Arrays.mapInPlace(function(t)\r\n  {\r\n   return t[0];\r\n  },Arrays.mapiInPlace(function($1,$2)\r\n  {\r\n   return[$2,$1];\r\n  },arr).sort(Unchecked.Compare));\r\n };\r\n Arrays.sortInPlaceBy=function(f,arr)\r\n {\r\n  Arrays.mapInPlace(function(t)\r\n  {\r\n   return t[0];\r\n  },Arrays.mapiInPlace(function($1,$2)\r\n  {\r\n   return[$2,[f($2),$1]];\r\n  },arr).sort(function($1,$2)\r\n  {\r\n   return Unchecked.Compare($1[1],$2[1]);\r\n  }));\r\n };\r\n Arrays.sortInPlaceWith=function(comparer,arr)\r\n {\r\n  arr.sort(comparer);\r\n };\r\n Arrays.sortWith=function(comparer,arr)\r\n {\r\n  return arr.slice().sort(comparer);\r\n };\r\n Arrays.sortByDescending=function(f,arr)\r\n {\r\n  return Arrays.map(function(t)\r\n  {\r\n   return t[0];\r\n  },Arrays.mapi(function($1,$2)\r\n  {\r\n   return[$2,[f($2),$1]];\r\n  },arr).sort(function($1,$2)\r\n  {\r\n   return-Unchecked.Compare($1[1],$2[1]);\r\n  }));\r\n };\r\n Arrays.sortDescending=function(arr)\r\n {\r\n  return Arrays.map(function(t)\r\n  {\r\n   return t[0];\r\n  },Arrays.mapi(function($1,$2)\r\n  {\r\n   return[$2,$1];\r\n  },arr).sort(function($1,$2)\r\n  {\r\n   return-Unchecked.Compare($1,$2);\r\n  }));\r\n };\r\n Arrays.transpose=function(x)\r\n {\r\n  return x instanceof Global.Array?Arrays.transposeArray(x):Arrays.transposeArray(Arrays.ofSeq(x));\r\n };\r\n Arrays.tryFind=function(f,arr)\r\n {\r\n  var res,i;\r\n  res=null;\r\n  i=0;\r\n  while(i<arr.length&&res==null)\r\n   {\r\n    f(arr[i])?res={\r\n     $:1,\r\n     $0:arr[i]\r\n    }:void 0;\r\n    i=i+1;\r\n   }\r\n  return res;\r\n };\r\n Arrays.tryFindIndex=function(f,arr)\r\n {\r\n  var res,i;\r\n  res=null;\r\n  i=0;\r\n  while(i<arr.length&&res==null)\r\n   {\r\n    f(arr[i])?res={\r\n     $:1,\r\n     $0:i\r\n    }:void 0;\r\n    i=i+1;\r\n   }\r\n  return res;\r\n };\r\n Arrays.tryHead=function(arr)\r\n {\r\n  return arr.length===0?null:{\r\n   $:1,\r\n   $0:arr[0]\r\n  };\r\n };\r\n Arrays.tryItem=function(i,arr)\r\n {\r\n  return arr.length<=i||i<0?null:{\r\n   $:1,\r\n   $0:arr[i]\r\n  };\r\n };\r\n Arrays.tryLast=function(arr)\r\n {\r\n  var len;\r\n  len=arr.length;\r\n  return len===0?null:{\r\n   $:1,\r\n   $0:arr[len-1]\r\n  };\r\n };\r\n Arrays.tryPick=function(f,arr)\r\n {\r\n  var res,i,m;\r\n  res=null;\r\n  i=0;\r\n  while(i<arr.length&&res==null)\r\n   {\r\n    m=f(arr[i]);\r\n    m!=null&&m.$==1?res=m:void 0;\r\n    i=i+1;\r\n   }\r\n  return res;\r\n };\r\n Arrays.unzip=function(arr)\r\n {\r\n  var x,y,i,$1,p;\r\n  x=[];\r\n  y=[];\r\n  for(i=0,$1=arr.length-1;i<=$1;i++){\r\n   p=arr[i];\r\n   x.push(p[0]);\r\n   y.push(p[1]);\r\n  }\r\n  return[x,y];\r\n };\r\n Arrays.unzip3=function(arr)\r\n {\r\n  var x,y,z,i,$1,m;\r\n  x=[];\r\n  y=[];\r\n  z=[];\r\n  for(i=0,$1=arr.length-1;i<=$1;i++){\r\n   m=arr[i];\r\n   x.push(m[0]);\r\n   y.push(m[1]);\r\n   z.push(m[2]);\r\n  }\r\n  return[x,y,z];\r\n };\r\n Arrays.zip=function(arr1,arr2)\r\n {\r\n  var res,i,$1;\r\n  Arrays.checkLength(arr1,arr2);\r\n  res=Arrays.create(arr1.length,null);\r\n  for(i=0,$1=arr1.length-1;i<=$1;i++)res[i]=[arr1[i],arr2[i]];\r\n  return res;\r\n };\r\n Arrays.zip3=function(arr1,arr2,arr3)\r\n {\r\n  var res,i,$1;\r\n  Arrays.checkLength(arr1,arr2);\r\n  Arrays.checkLength(arr2,arr3);\r\n  res=Arrays.create(arr1.length,null);\r\n  for(i=0,$1=arr1.length-1;i<=$1;i++)res[i]=[arr1[i],arr2[i],arr3[i]];\r\n  return res;\r\n };\r\n Arrays.chunkBySize=function(size,array)\r\n {\r\n  return Arrays.ofSeq(Seq.chunkBySize(size,array));\r\n };\r\n Arrays.compareWith=function(f,a1,a2)\r\n {\r\n  return Seq.compareWith(f,a1,a2);\r\n };\r\n Arrays.distinct=function(l)\r\n {\r\n  return Arrays.ofSeq(Seq.distinct(l));\r\n };\r\n Arrays.distinctBy=function(f,a)\r\n {\r\n  return Arrays.ofSeq(Seq.distinctBy(f,a));\r\n };\r\n Arrays.except=function(itemsToExclude,a)\r\n {\r\n  return Arrays.ofSeq(Seq.except(itemsToExclude,a));\r\n };\r\n Arrays.findBack=function(p,s)\r\n {\r\n  var m;\r\n  m=Arrays.tryFindBack(p,s);\r\n  return m==null?Operators.FailWith(\"KeyNotFoundException\"):m.$0;\r\n };\r\n Arrays.findIndexBack=function(p,s)\r\n {\r\n  var m;\r\n  m=Arrays.tryFindIndexBack(p,s);\r\n  return m==null?Operators.FailWith(\"KeyNotFoundException\"):m.$0;\r\n };\r\n Arrays.head=function(arr)\r\n {\r\n  Arrays.nonEmpty(arr);\r\n  return arr[0];\r\n };\r\n Arrays.last=function(arr)\r\n {\r\n  Arrays.nonEmpty(arr);\r\n  return arr[arr.length-1];\r\n };\r\n Arrays.map3=function(f,arr1,arr2,arr3)\r\n {\r\n  var r,i,$1;\r\n  Arrays.checkLength(arr1,arr2);\r\n  Arrays.checkLength(arr1,arr3);\r\n  r=new Global.Array(arr3.length);\r\n  for(i=0,$1=arr3.length-1;i<=$1;i++)r[i]=f(arr1[i],arr2[i],arr3[i]);\r\n  return r;\r\n };\r\n Arrays.pairwise=function(a)\r\n {\r\n  return Arrays.ofSeq(Seq.pairwise(a));\r\n };\r\n Arrays.replicate=function(size,value)\r\n {\r\n  return Arrays.create(size,value);\r\n };\r\n Arrays.indexed=function(ar)\r\n {\r\n  return Arrays.mapi(function($1,$2)\r\n  {\r\n   return[$1,$2];\r\n  },ar);\r\n };\r\n Arrays.skip=function(i,ar)\r\n {\r\n  return i<0?Seq.nonNegative():i>ar.length?Seq.insufficient():ar.slice(i);\r\n };\r\n Arrays.skipWhile=function(predicate,ar)\r\n {\r\n  var i,len;\r\n  len=ar.length;\r\n  i=0;\r\n  while(i<len&&predicate(ar[i]))\r\n   i=i+1;\r\n  return ar.slice(i);\r\n };\r\n Arrays.tail=function(ar)\r\n {\r\n  return Arrays.skip(1,ar);\r\n };\r\n Arrays.take=function(n,ar)\r\n {\r\n  return n<0?Seq.nonNegative():n>ar.length?Seq.insufficient():ar.slice(0,n);\r\n };\r\n Arrays.takeWhile=function(predicate,ar)\r\n {\r\n  var i,len;\r\n  len=ar.length;\r\n  i=0;\r\n  while(i<len&&predicate(ar[i]))\r\n   i=i+1;\r\n  return ar.slice(0,i);\r\n };\r\n Arrays.exactlyOne=function(ar)\r\n {\r\n  return ar.length===1?ar[0]:Operators.FailWith(\"The input does not have precisely one element.\");\r\n };\r\n Arrays.unfold=function(f,s)\r\n {\r\n  return Arrays.ofSeq(Seq.unfold(f,s));\r\n };\r\n Arrays.windowed=function(windowSize,s)\r\n {\r\n  return Arrays.ofSeq(Seq.windowed(windowSize,s));\r\n };\r\n Arrays.splitAt=function(n,ar)\r\n {\r\n  return[Arrays.take(n,ar),Arrays.skip(n,ar)];\r\n };\r\n Arrays.nonEmpty=function(arr)\r\n {\r\n  if(arr.length===0)\r\n   Operators.FailWith(\"The input array was empty.\");\r\n };\r\n Arrays.checkLength=function(arr1,arr2)\r\n {\r\n  if(arr1.length!==arr2.length)\r\n   Operators.FailWith(\"The arrays have different lengths.\");\r\n };\r\n Arrays2D.init=function(n,m,f)\r\n {\r\n  var array,i,$1,j,$2;\r\n  array=Arrays.zeroCreate2D(n,m);\r\n  for(i=0,$1=n-1;i<=$1;i++){\r\n   for(j=0,$2=m-1;j<=$2;j++)Arrays.set2D(array,i,j,f(i,j));\r\n  }\r\n  return array;\r\n };\r\n Arrays2D.iter=function(f,array)\r\n {\r\n  var count1,count2,i,$1,j,$2;\r\n  count1=array.length;\r\n  count2=array.length?array[0].length:0;\r\n  for(i=0,$1=count1-1;i<=$1;i++){\r\n   for(j=0,$2=count2-1;j<=$2;j++)f(Arrays.get2D(array,i,j));\r\n  }\r\n };\r\n Arrays2D.iteri=function(f,array)\r\n {\r\n  var count1,count2,i,$1,j,$2;\r\n  count1=array.length;\r\n  count2=array.length?array[0].length:0;\r\n  for(i=0,$1=count1-1;i<=$1;i++){\r\n   for(j=0,$2=count2-1;j<=$2;j++)f(i,j,Arrays.get2D(array,i,j));\r\n  }\r\n };\r\n Arrays2D.map=function(f,array)\r\n {\r\n  return Arrays2D.init(array.length,array.length?array[0].length:0,function($1,$2)\r\n  {\r\n   return f(Arrays.get2D(array,$1,$2));\r\n  });\r\n };\r\n Arrays2D.mapi=function(f,array)\r\n {\r\n  return Arrays2D.init(array.length,array.length?array[0].length:0,function($1,$2)\r\n  {\r\n   return f($1,$2,Arrays.get2D(array,$1,$2));\r\n  });\r\n };\r\n Arrays2D.copy=function(array)\r\n {\r\n  return Arrays2D.init(array.length,array.length?array[0].length:0,function($1,$2)\r\n  {\r\n   return Arrays.get2D(array,$1,$2);\r\n  });\r\n };\r\n CancellationTokenSource=WebSharper.CancellationTokenSource=Runtime.Class({\r\n  CancelAfter:function(delay)\r\n  {\r\n   var $this,o;\r\n   $this=this;\r\n   !this.c?(o=this.pending,o==null?void 0:Global.clearTimeout(o.$0),this.pending={\r\n    $:1,\r\n    $0:Global.setTimeout(function()\r\n    {\r\n     $this.Cancel$1();\r\n    },delay)\r\n   }):void 0;\r\n  },\r\n  Cancel:function(throwOnFirstException)\r\n  {\r\n   if(!throwOnFirstException)\r\n    this.Cancel$1();\r\n   else\r\n    if(!this.c)\r\n     {\r\n      this.c=true;\r\n      Arrays.iter(function(a)\r\n      {\r\n       a();\r\n      },this.r);\r\n     }\r\n  },\r\n  Cancel$1:function()\r\n  {\r\n   var errors;\r\n   if(!this.c)\r\n    {\r\n     this.c=true;\r\n     errors=Arrays.choose(function(a)\r\n     {\r\n      try\r\n      {\r\n       a();\r\n       return null;\r\n      }\r\n      catch(e)\r\n      {\r\n       return{\r\n        $:1,\r\n        $0:e\r\n       };\r\n      }\r\n     },this.r);\r\n     if(Arrays.length(errors)>0)\r\n      throw new AggregateException.New$3(errors);\r\n     else\r\n      void 0;\r\n    }\r\n  }\r\n },Obj,CancellationTokenSource);\r\n CancellationTokenSource.CreateLinkedTokenSource=function(t1,t2)\r\n {\r\n  return CancellationTokenSource.CreateLinkedTokenSource$1([t1,t2]);\r\n };\r\n CancellationTokenSource.CreateLinkedTokenSource$1=function(tokens)\r\n {\r\n  var cts;\r\n  cts=new CancellationTokenSource.New();\r\n  Arrays.iter(function(t)\r\n  {\r\n   function callback(u)\r\n   {\r\n    return cts.Cancel$1();\r\n   }\r\n   Concurrency.Register(t,function()\r\n   {\r\n    callback();\r\n   });\r\n  },tokens);\r\n  return cts;\r\n };\r\n CancellationTokenSource.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n  this.c=false;\r\n  this.pending=null;\r\n  this.r=[];\r\n  this.init=1;\r\n },CancellationTokenSource);\r\n Char.IsWhiteSpace=function(c)\r\n {\r\n  return c.match(new Global.RegExp(\"\\\\s\"))!==null;\r\n };\r\n Char.Parse=function(s)\r\n {\r\n  return s.length===1?s:Operators.FailWith(\"String must be exactly one character long.\");\r\n };\r\n Char.IsUpper=function(c)\r\n {\r\n  return c>=\"A\"&&c<=\"Z\";\r\n };\r\n Char.IsLower=function(c)\r\n {\r\n  return c>=\"a\"&&c<=\"z\";\r\n };\r\n Char.IsLetterOrDigit=function(c)\r\n {\r\n  return Char.IsLetter(c)||Char.IsDigit(c);\r\n };\r\n Char.IsLetter=function(c)\r\n {\r\n  return c>=\"A\"&&c<=\"Z\"||c>=\"a\"&&c<=\"z\";\r\n };\r\n Char.IsDigit=function(c)\r\n {\r\n  return c>=\"0\"&&c<=\"9\";\r\n };\r\n Char.IsControl=function(c)\r\n {\r\n  return c>=\"\\u0000\"&&c<=\"\\u001f\"||c>=\"\\u0080\"&&c<=\"\\u009f\";\r\n };\r\n Char.GetNumericValue=function(c)\r\n {\r\n  return c>=\"0\"&&c<=\"9\"?c.charCodeAt()-\"0\".charCodeAt():-1;\r\n };\r\n Util.observer=function(h)\r\n {\r\n  return{\r\n   OnCompleted:function()\r\n   {\r\n    return null;\r\n   },\r\n   OnError:function()\r\n   {\r\n    return null;\r\n   },\r\n   OnNext:h\r\n  };\r\n };\r\n DateUtil.LongTime=function(d)\r\n {\r\n  return(new Date(d)).toLocaleTimeString({},{\r\n   hour:\"2-digit\",\r\n   minute:\"2-digit\",\r\n   second:\"2-digit\",\r\n   hour12:false\r\n  });\r\n };\r\n DateUtil.ShortTime=function(d)\r\n {\r\n  return(new Date(d)).toLocaleTimeString({},{\r\n   hour:\"2-digit\",\r\n   minute:\"2-digit\",\r\n   hour12:false\r\n  });\r\n };\r\n DateUtil.LongDate=function(d)\r\n {\r\n  return(new Date(d)).toLocaleDateString({},{\r\n   year:\"numeric\",\r\n   month:\"long\",\r\n   day:\"numeric\",\r\n   weekday:\"long\"\r\n  });\r\n };\r\n DateUtil.Parse=function(s)\r\n {\r\n  var m;\r\n  m=DateUtil.TryParse(s);\r\n  return m!=null&&m.$==1?m.$0:Operators.FailWith(\"Failed to parse date string.\");\r\n };\r\n DateUtil.TryParse=function(s)\r\n {\r\n  var d;\r\n  d=Date.parse(s);\r\n  return Global.isNaN(d)?null:{\r\n   $:1,\r\n   $0:d\r\n  };\r\n };\r\n DateUtil.AddMonths=function(d,months)\r\n {\r\n  var e;\r\n  e=new Date(d);\r\n  return(new Date(e.getFullYear(),e.getMonth()+months,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())).getTime();\r\n };\r\n DateUtil.AddYears=function(d,years)\r\n {\r\n  var e;\r\n  e=new Date(d);\r\n  return(new Date(e.getFullYear()+years,e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())).getTime();\r\n };\r\n DateUtil.TimePortion=function(d)\r\n {\r\n  var e;\r\n  e=new Date(d);\r\n  return(((24*0+e.getHours())*60+e.getMinutes())*60+e.getSeconds())*1000+e.getMilliseconds();\r\n };\r\n DateUtil.DatePortion=function(d)\r\n {\r\n  var e;\r\n  e=new Date(d);\r\n  return(new Date(e.getFullYear(),e.getMonth(),e.getDate())).getTime();\r\n };\r\n DateTimeOffset.get_Now=function()\r\n {\r\n  var d;\r\n  d=new Date();\r\n  return{\r\n   d:d.getTime(),\r\n   o:-d.getTimezoneOffset()\r\n  };\r\n };\r\n DateTimeOffset.get_DateTime=function($this)\r\n {\r\n  return $this.d;\r\n };\r\n Delegate.InvocationList=function(del)\r\n {\r\n  return del.$Invokes||[del];\r\n };\r\n Delegate.RemoveAll=function(source,value)\r\n {\r\n  var sourceInv;\r\n  sourceInv=Delegate.InvocationList(source);\r\n  Arrays.length(Delegate.InvocationList(value))>1?Operators.FailWith(\"TODO: Remove multicast delegates\"):void 0;\r\n  return Runtime.CreateDelegate(Arrays.filter(function(i)\r\n  {\r\n   return!Unchecked.Equals(i,value);\r\n  },sourceInv));\r\n };\r\n Delegate.Remove=function(source,value)\r\n {\r\n  var $1,found,sourceInv,resInv,i,$2,it;\r\n  sourceInv=Delegate.InvocationList(source);\r\n  if(Arrays.length(Delegate.InvocationList(value))>1)\r\n   Operators.FailWith(\"TODO: Remove multicast delegates\");\r\n  resInv=[];\r\n  found=false;\r\n  for(i=Arrays.length(sourceInv)-1,$2=0;i>=$2;i--){\r\n   it=Arrays.get(sourceInv,i);\r\n   !found&&Runtime.DelegateEqual(it,value)?found=true:resInv.unshift(it);\r\n  }\r\n  return Runtime.CreateDelegate(resInv);\r\n };\r\n Delegate.DelegateTarget=function(del)\r\n {\r\n  var inv;\r\n  return!del?null:\"$Target\"in del?del.$Target:\"$Invokes\"in del?(inv=del.$Invokes,(Arrays.get(inv,Arrays.length(inv)-1))[1]):null;\r\n };\r\n DictionaryUtil.getHashCode=function(c,x)\r\n {\r\n  return c.CGetHashCode(x);\r\n };\r\n DictionaryUtil.equals=function(c)\r\n {\r\n  return function($1,$2)\r\n  {\r\n   return c.CEquals($1,$2);\r\n  };\r\n };\r\n DictionaryUtil.alreadyAdded=function()\r\n {\r\n  return Operators.FailWith(\"An item with the same key has already been added.\");\r\n };\r\n DictionaryUtil.notPresent=function()\r\n {\r\n  return Operators.FailWith(\"The given key was not present in the dictionary.\");\r\n };\r\n KeyCollection=Collections.KeyCollection=Runtime.Class({\r\n  GetEnumerator$1:function()\r\n  {\r\n   return Enumerator.Get(Seq.map(function(kvp)\r\n   {\r\n    return kvp.K;\r\n   },this.d));\r\n  },\r\n  get_Count:function()\r\n  {\r\n   return this.d.count;\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return this.GetEnumerator$1();\r\n  },\r\n  GetEnumerator:function()\r\n  {\r\n   return this.GetEnumerator$1();\r\n  }\r\n },Obj,KeyCollection);\r\n KeyCollection.New=Runtime.Ctor(function(d)\r\n {\r\n  Obj.New.call(this);\r\n  this.d=d;\r\n },KeyCollection);\r\n ValueCollection=Collections.ValueCollection=Runtime.Class({\r\n  GetEnumerator$1:function()\r\n  {\r\n   return Enumerator.Get(Seq.map(function(kvp)\r\n   {\r\n    return kvp.V;\r\n   },this.d));\r\n  },\r\n  get_Count:function()\r\n  {\r\n   return this.d.count;\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return this.GetEnumerator$1();\r\n  },\r\n  GetEnumerator:function()\r\n  {\r\n   return this.GetEnumerator$1();\r\n  }\r\n },Obj,ValueCollection);\r\n ValueCollection.New=Runtime.Ctor(function(d)\r\n {\r\n  Obj.New.call(this);\r\n  this.d=d;\r\n },ValueCollection);\r\n Dictionary=Collections.Dictionary=Runtime.Class({\r\n  remove:function(k)\r\n  {\r\n   var $this,h,d,r;\r\n   $this=this;\r\n   h=this.hash(k);\r\n   d=this.data[h];\r\n   return d==null?false:(r=Arrays.filter(function(a)\r\n   {\r\n    return!$this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);\r\n   },d),Arrays.length(r)<d.length&&(this.count=this.count-1,this.data[h]=r,true));\r\n  },\r\n  add:function(k,v)\r\n  {\r\n   var $this,h,d;\r\n   $this=this;\r\n   h=this.hash(k);\r\n   d=this.data[h];\r\n   d==null?(this.count=this.count+1,this.data[h]=new Global.Array({\r\n    K:k,\r\n    V:v\r\n   })):(Arrays.exists(function(a)\r\n   {\r\n    return $this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);\r\n   },d)?DictionaryUtil.alreadyAdded():void 0,this.count=this.count+1,d.push({\r\n    K:k,\r\n    V:v\r\n   }));\r\n  },\r\n  set:function(k,v)\r\n  {\r\n   var $this,h,d,m;\r\n   $this=this;\r\n   h=this.hash(k);\r\n   d=this.data[h];\r\n   d==null?(this.count=this.count+1,this.data[h]=new Global.Array({\r\n    K:k,\r\n    V:v\r\n   })):(m=Arrays.tryFindIndex(function(a)\r\n   {\r\n    return $this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);\r\n   },d),m==null?(this.count=this.count+1,d.push({\r\n    K:k,\r\n    V:v\r\n   })):d[m.$0]={\r\n    K:k,\r\n    V:v\r\n   });\r\n  },\r\n  get:function(k)\r\n  {\r\n   var $this,d;\r\n   $this=this;\r\n   d=this.data[this.hash(k)];\r\n   return d==null?DictionaryUtil.notPresent():Arrays.pick(function(a)\r\n   {\r\n    var a$1;\r\n    a$1=Operators.KeyValue(a);\r\n    return $this.equals.apply(null,[a$1[0],k])?{\r\n     $:1,\r\n     $0:a$1[1]\r\n    }:null;\r\n   },d);\r\n  },\r\n  get_Keys:function()\r\n  {\r\n   return new KeyCollection.New(this);\r\n  },\r\n  get_Values:function()\r\n  {\r\n   return new ValueCollection.New(this);\r\n  },\r\n  TryGetValue:function(k,res)\r\n  {\r\n   var $this,d,v;\r\n   $this=this;\r\n   d=this.data[this.hash(k)];\r\n   return d==null?false:(v=Arrays.tryPick(function(a)\r\n   {\r\n    var a$1;\r\n    a$1=Operators.KeyValue(a);\r\n    return $this.equals.apply(null,[a$1[0],k])?{\r\n     $:1,\r\n     $0:a$1[1]\r\n    }:null;\r\n   },d),v!=null&&v.$==1&&(res.set(v.$0),true));\r\n  },\r\n  Remove:function(k)\r\n  {\r\n   return this.remove(k);\r\n  },\r\n  GetEnumerator$1:function()\r\n  {\r\n   return Enumerator.Get0(this);\r\n  },\r\n  set_Item:function(k,v)\r\n  {\r\n   this.set(k,v);\r\n  },\r\n  get_Item:function(k)\r\n  {\r\n   return this.get(k);\r\n  },\r\n  ContainsKey:function(k)\r\n  {\r\n   var $this,d;\r\n   $this=this;\r\n   d=this.data[this.hash(k)];\r\n   return d==null?false:Arrays.exists(function(a)\r\n   {\r\n    return $this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);\r\n   },d);\r\n  },\r\n  Clear:function()\r\n  {\r\n   this.data=[];\r\n   this.count=0;\r\n  },\r\n  Add:function(k,v)\r\n  {\r\n   this.add(k,v);\r\n  },\r\n  GetEnumerator:function()\r\n  {\r\n   return Enumerator.Get0(this);\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return Enumerator.Get0(Arrays.concat(JS.GetFieldValues(this.data)));\r\n  }\r\n },Obj,Dictionary);\r\n Dictionary.New=Runtime.Ctor(function(dictionary,comparer)\r\n {\r\n  Dictionary.New$6.call(this,dictionary,DictionaryUtil.equals(comparer),function(x)\r\n  {\r\n   return DictionaryUtil.getHashCode(comparer,x);\r\n  });\r\n },Dictionary);\r\n Dictionary.New$1=Runtime.Ctor(function(dictionary)\r\n {\r\n  Dictionary.New$6.call(this,dictionary,Unchecked.Equals,Unchecked.Hash);\r\n },Dictionary);\r\n Dictionary.New$2=Runtime.Ctor(function(capacity,comparer)\r\n {\r\n  Dictionary.New$3.call(this,comparer);\r\n },Dictionary);\r\n Dictionary.New$3=Runtime.Ctor(function(comparer)\r\n {\r\n  Dictionary.New$6.call(this,[],DictionaryUtil.equals(comparer),function(x)\r\n  {\r\n   return DictionaryUtil.getHashCode(comparer,x);\r\n  });\r\n },Dictionary);\r\n Dictionary.New$4=Runtime.Ctor(function(capacity)\r\n {\r\n  Dictionary.New$5.call(this);\r\n },Dictionary);\r\n Dictionary.New$5=Runtime.Ctor(function()\r\n {\r\n  Dictionary.New$6.call(this,[],Unchecked.Equals,Unchecked.Hash);\r\n },Dictionary);\r\n Dictionary.New$6=Runtime.Ctor(function(init,equals,hash)\r\n {\r\n  var e,x;\r\n  Obj.New.call(this);\r\n  this.equals=equals;\r\n  this.hash=hash;\r\n  this.count=0;\r\n  this.data=[];\r\n  e=Enumerator.Get(init);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    {\r\n     x=e.Current();\r\n     this.set(x.K,x.V);\r\n    }\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n },Dictionary);\r\n Exception.withInner=function(msg,inner)\r\n {\r\n  var e;\r\n  e=new Error(msg);\r\n  e.inner=inner;\r\n  return e;\r\n };\r\n MatchFailureException=WebSharper.MatchFailureException=Runtime.Class({},Error,MatchFailureException);\r\n MatchFailureException.New=Runtime.Ctor(function(message,line,column)\r\n {\r\n  this.message=message+\" at \"+String(line)+\":\"+String(column);\r\n  Global.Object.setPrototypeOf(this,MatchFailureException.prototype);\r\n },MatchFailureException);\r\n IndexOutOfRangeException=WebSharper.IndexOutOfRangeException=Runtime.Class({},Error,IndexOutOfRangeException);\r\n IndexOutOfRangeException.New=Runtime.Ctor(function()\r\n {\r\n  IndexOutOfRangeException.New$1.call(this,\"Index was outside the bounds of the array.\");\r\n },IndexOutOfRangeException);\r\n IndexOutOfRangeException.New$1=Runtime.Ctor(function(message)\r\n {\r\n  this.message=message;\r\n  Global.Object.setPrototypeOf(this,IndexOutOfRangeException.prototype);\r\n },IndexOutOfRangeException);\r\n OperationCanceledException=WebSharper.OperationCanceledException=Runtime.Class({},Error,OperationCanceledException);\r\n OperationCanceledException.New=Runtime.Ctor(function(ct)\r\n {\r\n  OperationCanceledException.New$1.call(this,\"The operation was canceled.\",null,ct);\r\n },OperationCanceledException);\r\n OperationCanceledException.New$1=Runtime.Ctor(function(message,inner,ct)\r\n {\r\n  this.message=message;\r\n  this.inner=inner;\r\n  Global.Object.setPrototypeOf(this,OperationCanceledException.prototype);\r\n  this.ct=ct;\r\n },OperationCanceledException);\r\n ArgumentException=WebSharper.ArgumentException=Runtime.Class({},Error,ArgumentException);\r\n ArgumentException.New=Runtime.Ctor(function(argumentName,message)\r\n {\r\n  ArgumentException.New$2.call(this,message+\"\\nParameter name: \"+argumentName);\r\n },ArgumentException);\r\n ArgumentException.New$1=Runtime.Ctor(function()\r\n {\r\n  ArgumentException.New$2.call(this,\"Value does not fall within the expected range.\");\r\n },ArgumentException);\r\n ArgumentException.New$2=Runtime.Ctor(function(message)\r\n {\r\n  this.message=message;\r\n  Global.Object.setPrototypeOf(this,ArgumentException.prototype);\r\n },ArgumentException);\r\n ArgumentOutOfRangeException=WebSharper.ArgumentOutOfRangeException=Runtime.Class({},Error,ArgumentOutOfRangeException);\r\n ArgumentOutOfRangeException.New=Runtime.Ctor(function(argumentName,message)\r\n {\r\n  this.message=message+\"\\nParameter name: \"+argumentName;\r\n  Global.Object.setPrototypeOf(this,ArgumentOutOfRangeException.prototype);\r\n },ArgumentOutOfRangeException);\r\n ArgumentOutOfRangeException.New$1=Runtime.Ctor(function(argumentName)\r\n {\r\n  ArgumentOutOfRangeException.New.call(this,argumentName,\"Specified argument was out of the range of valid values.\");\r\n },ArgumentOutOfRangeException);\r\n ArgumentOutOfRangeException.New$2=Runtime.Ctor(function()\r\n {\r\n  this.message=\"Specified argument was out of the range of valid values.\";\r\n  Global.Object.setPrototypeOf(this,ArgumentOutOfRangeException.prototype);\r\n },ArgumentOutOfRangeException);\r\n ArgumentNullException=WebSharper.ArgumentNullException=Runtime.Class({},Error,ArgumentNullException);\r\n ArgumentNullException.New=Runtime.Ctor(function(argumentName,message)\r\n {\r\n  this.message=message+\"\\nParameter name: \"+argumentName;\r\n  Global.Object.setPrototypeOf(this,ArgumentNullException.prototype);\r\n },ArgumentNullException);\r\n ArgumentNullException.New$1=Runtime.Ctor(function(argumentName)\r\n {\r\n  ArgumentNullException.New.call(this,argumentName,\"Value cannot be null.\");\r\n },ArgumentNullException);\r\n ArgumentNullException.New$2=Runtime.Ctor(function()\r\n {\r\n  this.message=\"Value cannot be null.\";\r\n  Global.Object.setPrototypeOf(this,ArgumentNullException.prototype);\r\n },ArgumentNullException);\r\n InvalidOperationException=WebSharper.InvalidOperationException=Runtime.Class({},Error,InvalidOperationException);\r\n InvalidOperationException.New=Runtime.Ctor(function(message)\r\n {\r\n  InvalidOperationException.New$2.call(this,message,null);\r\n },InvalidOperationException);\r\n InvalidOperationException.New$1=Runtime.Ctor(function()\r\n {\r\n  InvalidOperationException.New.call(this,\"Operation is not valid due to the current state of the object.\");\r\n },InvalidOperationException);\r\n InvalidOperationException.New$2=Runtime.Ctor(function(message,innerExn)\r\n {\r\n  this.message=message;\r\n  this.inner=innerExn;\r\n  Global.Object.setPrototypeOf(this,InvalidOperationException.prototype);\r\n },InvalidOperationException);\r\n AggregateException=WebSharper.AggregateException=Runtime.Class({},Error,AggregateException);\r\n AggregateException.New=Runtime.Ctor(function(message,innerException)\r\n {\r\n  AggregateException.New$4.call(this,message,[innerException]);\r\n },AggregateException);\r\n AggregateException.New$1=Runtime.Ctor(function(message,innerExceptions)\r\n {\r\n  AggregateException.New$4.call(this,message,Arrays.ofSeq(innerExceptions));\r\n },AggregateException);\r\n AggregateException.New$2=Runtime.Ctor(function(innerExceptions)\r\n {\r\n  AggregateException.New$4.call(this,\"One or more errors occurred.\",Arrays.ofSeq(innerExceptions));\r\n },AggregateException);\r\n AggregateException.New$3=Runtime.Ctor(function(innerExceptions)\r\n {\r\n  AggregateException.New$4.call(this,\"One or more errors occurred.\",innerExceptions);\r\n },AggregateException);\r\n AggregateException.New$4=Runtime.Ctor(function(message,innerExceptions)\r\n {\r\n  this.message=message;\r\n  Global.Object.setPrototypeOf(this,AggregateException.prototype);\r\n  this.innerExceptions=innerExceptions;\r\n },AggregateException);\r\n TimeoutException=WebSharper.TimeoutException=Runtime.Class({},Error,TimeoutException);\r\n TimeoutException.New=Runtime.Ctor(function()\r\n {\r\n  TimeoutException.New$1.call(this,\"The operation has timed out.\");\r\n },TimeoutException);\r\n TimeoutException.New$1=Runtime.Ctor(function(message)\r\n {\r\n  this.message=message;\r\n  Global.Object.setPrototypeOf(this,TimeoutException.prototype);\r\n },TimeoutException);\r\n FormatException=WebSharper.FormatException=Runtime.Class({},Error,FormatException);\r\n FormatException.New=Runtime.Ctor(function()\r\n {\r\n  FormatException.New$1.call(this,\"One of the identified items was in an invalid format.\");\r\n },FormatException);\r\n FormatException.New$1=Runtime.Ctor(function(message)\r\n {\r\n  this.message=message;\r\n  Global.Object.setPrototypeOf(this,FormatException.prototype);\r\n },FormatException);\r\n OverflowException=WebSharper.OverflowException=Runtime.Class({},Error,OverflowException);\r\n OverflowException.New=Runtime.Ctor(function()\r\n {\r\n  OverflowException.New$1.call(this,\"Arithmetic operation resulted in an overflow.\");\r\n },OverflowException);\r\n OverflowException.New$1=Runtime.Ctor(function(message)\r\n {\r\n  this.message=message;\r\n  Global.Object.setPrototypeOf(this,OverflowException.prototype);\r\n },OverflowException);\r\n TaskCanceledException=WebSharper.TaskCanceledException=Runtime.Class({},Error,TaskCanceledException);\r\n TaskCanceledException.New=Runtime.Ctor(function()\r\n {\r\n  TaskCanceledException.New$1.call(this,\"A task was canceled.\");\r\n },TaskCanceledException);\r\n TaskCanceledException.New$1=Runtime.Ctor(function(message)\r\n {\r\n  this.message=message;\r\n  Global.Object.setPrototypeOf(this,TaskCanceledException.prototype);\r\n },TaskCanceledException);\r\n Arrays.create2D=function(rows)\r\n {\r\n  var arr;\r\n  arr=Arrays.ofSeq(Seq.map(Arrays.ofSeq,rows));\r\n  arr.dims=2;\r\n  return arr;\r\n };\r\n Guid.NewGuid=function()\r\n {\r\n  return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(new Global.RegExp(\"[xy]\",\"g\"),function(c)\r\n  {\r\n   var r,v;\r\n   r=Math.random()*16|0;\r\n   v=c==\"x\"?r:r&3|8;\r\n   return v.toString(16);\r\n  });\r\n };\r\n Guid.TryParseExact=function(input,format,output)\r\n {\r\n  try\r\n  {\r\n   output.set(Guid.ParseExact(input,format));\r\n   return true;\r\n  }\r\n  catch(m)\r\n  {\r\n   return false;\r\n  }\r\n };\r\n Guid.TryParse=function(input,output)\r\n {\r\n  try\r\n  {\r\n   output.set(Guid.Parse(input));\r\n   return true;\r\n  }\r\n  catch(m)\r\n  {\r\n   return false;\r\n  }\r\n };\r\n Guid.ParseExact=function(input,format)\r\n {\r\n  var s,s$1,s$2,m,s$3,i,$1,c,s$4,i$1,$2,$3,c$1;\r\n  function parseD(s$5)\r\n  {\r\n   var i$2,$4,$5,c$2;\r\n   for(i$2=0,$4=35;i$2<=$4;i$2++){\r\n    i$2===8||(i$2===13||(i$2===18||i$2===23))?s$5[i$2]!==\"-\"?Guid.ShapeError():void 0:(c$2=s$5[i$2],!(\"0\"<=c$2&&c$2<=\"9\"||\"a\"<=c$2&&c$2<=\"f\")?Guid.ShapeError():void 0);\r\n   }\r\n   return s$5;\r\n  }\r\n  m=format.toUpperCase();\r\n  if(m===\"N\")\r\n   {\r\n    s$3=Strings.Trim(input).toLowerCase();\r\n    if(s$3.length!==32)\r\n     Guid.ShapeError();\r\n    for(i=0,$1=31;i<=$1;i++){\r\n     c=s$3[i];\r\n     !(\"0\"<=c&&c<=\"9\"||\"a\"<=c&&c<=\"f\")?Guid.ShapeError():void 0;\r\n    }\r\n    return Strings.Substring(s$3,0,8)+\"-\"+Strings.Substring(s$3,8,4)+\"-\"+Strings.Substring(s$3,12,4)+\"-\"+Strings.Substring(s$3,16,4)+\"-\"+s$3.substring(20);\r\n   }\r\n  else\r\n   if(m===\"D\")\r\n    {\r\n     s=Strings.Trim(input).toLowerCase();\r\n     s.length!==36?Guid.ShapeError():void 0;\r\n     return parseD(s);\r\n    }\r\n   else\r\n    if(m===\"B\")\r\n     {\r\n      s$1=Strings.Trim(input).toLowerCase();\r\n      s$1.length!==38||s$1[0]!==\"{\"||s$1[17]!==\"}\"?Guid.ShapeError():void 0;\r\n      return parseD(Strings.Substring(s$1,1,36));\r\n     }\r\n    else\r\n     if(m===\"P\")\r\n      {\r\n       s$2=Strings.Trim(input).toLowerCase();\r\n       s$2.length!==38||s$2[0]!==\"(\"||s$2[17]!==\")\"?Guid.ShapeError():void 0;\r\n       return parseD(Strings.Substring(s$2,1,36));\r\n      }\r\n     else\r\n      if(m===\"X\")\r\n       {\r\n        s$4=Strings.Trim(input).toLowerCase();\r\n        if(s$4.length!==68)\r\n         Guid.ShapeError();\r\n        for(i$1=0,$2=67;i$1<=$2;i$1++){\r\n         switch(i$1)\r\n         {\r\n          case 26:\r\n          case 0:\r\n           if(s$4[i$1]!==\"{\")\r\n            Guid.ShapeError();\r\n           break;\r\n          case 62:\r\n          case 57:\r\n          case 52:\r\n          case 47:\r\n          case 42:\r\n          case 37:\r\n          case 32:\r\n          case 27:\r\n          case 19:\r\n          case 12:\r\n          case 1:\r\n           if(s$4[i$1]!==\"0\")\r\n            Guid.ShapeError();\r\n           break;\r\n          case 63:\r\n          case 58:\r\n          case 53:\r\n          case 48:\r\n          case 43:\r\n          case 38:\r\n          case 33:\r\n          case 28:\r\n          case 20:\r\n          case 13:\r\n          case 2:\r\n           if(s$4[i$1]!==\"x\")\r\n            Guid.ShapeError();\r\n           break;\r\n          case 61:\r\n          case 56:\r\n          case 51:\r\n          case 46:\r\n          case 41:\r\n          case 36:\r\n          case 31:\r\n          case 25:\r\n          case 18:\r\n          case 11:\r\n           if(s$4[i$1]!==\",\")\r\n            Guid.ShapeError();\r\n           break;\r\n          case 67:\r\n          case 66:\r\n           if(s$4[i$1]!==\"{\")\r\n            Guid.ShapeError();\r\n           break;\r\n          default:\r\n           c$1=s$4[i$1];\r\n           !(\"0\"<=c$1&&c$1<=\"9\"||\"a\"<=c$1&&c$1<=\"f\")?Guid.ShapeError():void 0;\r\n           break;\r\n         }\r\n        }\r\n        return Strings.Substring(s$4,3,8)+\"-\"+Strings.Substring(s$4,14,4)+\"-\"+Strings.Substring(s$4,21,4)+\"-\"+Strings.Substring(s$4,29,2)+Strings.Substring(s$4,34,2)+\"-\"+Strings.Substring(s$4,39,2)+Strings.Substring(s$4,44,2)+Strings.Substring(s$4,49,2)+Strings.Substring(s$4,54,2)+Strings.Substring(s$4,59,2)+Strings.Substring(s$4,64,2);\r\n       }\r\n      else\r\n       return Guid.FormatError();\r\n };\r\n Guid.Parse=function(input)\r\n {\r\n  var $1,$2,$3;\r\n  try\r\n  {\r\n   return Guid.ParseExact(input,\"D\");\r\n  }\r\n  catch(m)\r\n  {\r\n   try\r\n   {\r\n    $1=Guid.ParseExact(input,\"B\");\r\n   }\r\n   catch(m$1)\r\n   {\r\n    try\r\n    {\r\n     $2=Guid.ParseExact(input,\"P\");\r\n    }\r\n    catch(m$2)\r\n    {\r\n     try\r\n     {\r\n      $3=Guid.ParseExact(input,\"N\");\r\n     }\r\n     catch(m$3)\r\n     {\r\n      $3=Guid.ParseExact(input,\"X\");\r\n     }\r\n     $2=$3;\r\n    }\r\n    $1=$2;\r\n   }\r\n   return $1;\r\n  }\r\n };\r\n Guid.ToString=function($this,format)\r\n {\r\n  var m;\r\n  m=format.toUpperCase();\r\n  return m===\"N\"?Strings.Replace($this,\"-\",\"\"):m===\"D\"?$this:m===\"B\"?\"{\"+$this+\"}\":m===\"P\"?\"(\"+$this+\")\":m===\"X\"?\"{0x\"+Strings.Substring($this,0,8)+\",0x\"+Strings.Substring($this,9,4)+\",0x\"+Strings.Substring($this,14,4)+\",{0x\"+Strings.Substring($this,19,2)+\",0x\"+Strings.Substring($this,21,2)+\",0x\"+Strings.Substring($this,24,2)+\",0x\"+Strings.Substring($this,26,2)+\",0x\"+Strings.Substring($this,28,2)+\",0x\"+Strings.Substring($this,30,2)+\",0x\"+Strings.Substring($this,32,2)+\",0x\"+Strings.Substring($this,34,2)+\"}}\":Guid.FormatError();\r\n };\r\n Guid.ParseError=function()\r\n {\r\n  throw new FormatException.New$1(\"Unrecognized Guid format.\");\r\n };\r\n Guid.ShapeError=function()\r\n {\r\n  throw new FormatException.New$1(\"Guid should contain 32 digits with 4 dashes (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).\");\r\n };\r\n Guid.HexaError=function()\r\n {\r\n  throw new FormatException.New$1(\"Hexadecimal Guid printing not implemented by WebSharper.\");\r\n };\r\n Guid.FormatError=function()\r\n {\r\n  throw new FormatException.New$1(\"Format String can be only \\\"D\\\", \\\"d\\\", \\\"N\\\", \\\"n\\\", \\\"P\\\", \\\"p\\\", \\\"B\\\", \\\"b\\\", \\\"X\\\" or \\\"x\\\".\");\r\n };\r\n HashSetUtil.concat=function(o)\r\n {\r\n  var r,k;\r\n  r=[];\r\n  for(var k$1 in o)r.push.apply(r,o[k$1]);\r\n  return r;\r\n };\r\n HashSet=Collections.HashSet=Runtime.Class({\r\n  add:function(item)\r\n  {\r\n   var h,arr;\r\n   h=this.hash(item);\r\n   arr=this.data[h];\r\n   return arr==null?(this.data[h]=[item],this.count=this.count+1,true):this.arrContains(item,arr)?false:(arr.push(item),this.count=this.count+1,true);\r\n  },\r\n  arrRemove:function(item,arr)\r\n  {\r\n   var c,i,$1,l;\r\n   c=true;\r\n   i=0;\r\n   l=arr.length;\r\n   while(c&&i<l)\r\n    if(this.equals.apply(null,[arr[i],item]))\r\n     {\r\n      arr.splice.apply(arr,[i,1]);\r\n      c=false;\r\n     }\r\n    else\r\n     i=i+1;\r\n   return!c;\r\n  },\r\n  arrContains:function(item,arr)\r\n  {\r\n   var c,i,$1,l;\r\n   c=true;\r\n   i=0;\r\n   l=arr.length;\r\n   while(c&&i<l)\r\n    if(this.equals.apply(null,[arr[i],item]))\r\n     c=false;\r\n    else\r\n     i=i+1;\r\n   return!c;\r\n  },\r\n  UnionWith:function(xs)\r\n  {\r\n   var e;\r\n   e=Enumerator.Get(xs);\r\n   try\r\n   {\r\n    while(e.MoveNext())\r\n     this.Add(e.Current());\r\n   }\r\n   finally\r\n   {\r\n    if(typeof e==\"object\"&&\"Dispose\"in e)\r\n     e.Dispose();\r\n   }\r\n  },\r\n  SymmetricExceptWith:function(xs)\r\n  {\r\n   var e,item;\r\n   e=Enumerator.Get(xs);\r\n   try\r\n   {\r\n    while(e.MoveNext())\r\n     {\r\n      item=e.Current();\r\n      this.Contains(item)?this.Remove(item):this.Add(item);\r\n     }\r\n   }\r\n   finally\r\n   {\r\n    if(typeof e==\"object\"&&\"Dispose\"in e)\r\n     e.Dispose();\r\n   }\r\n  },\r\n  SetEquals:function(xs)\r\n  {\r\n   var other;\r\n   other=new HashSet.New$4(xs,this.equals,this.hash);\r\n   return this.get_Count()===other.get_Count()&&this.IsSupersetOf(other);\r\n  },\r\n  RemoveWhere:function(cond)\r\n  {\r\n   var res,all,i,$1,item;\r\n   all=HashSetUtil.concat(this.data);\r\n   res=0;\r\n   for(i=0,$1=all.length-1;i<=$1;i++){\r\n    item=all[i];\r\n    cond(item)?this.Remove(item)?res=res+1:void 0:void 0;\r\n   }\r\n   return res;\r\n  },\r\n  Remove:function(item)\r\n  {\r\n   var arr;\r\n   arr=this.data[this.hash(item)];\r\n   return arr==null?false:this.arrRemove(item,arr)&&(this.count=this.count-1,true);\r\n  },\r\n  Overlaps:function(xs)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return Seq.exists(function(a)\r\n   {\r\n    return $this.Contains(a);\r\n   },xs);\r\n  },\r\n  IsSupersetOf:function(xs)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return Seq.forall(function(a)\r\n   {\r\n    return $this.Contains(a);\r\n   },xs);\r\n  },\r\n  IsSubsetOf:function(xs)\r\n  {\r\n   var other;\r\n   other=new HashSet.New$4(xs,this.equals,this.hash);\r\n   return Arrays.forall(function(a)\r\n   {\r\n    return other.Contains(a);\r\n   },HashSetUtil.concat(this.data));\r\n  },\r\n  IsProperSupersetOf:function(xs)\r\n  {\r\n   var other;\r\n   other=Arrays.ofSeq(xs);\r\n   return this.count>Arrays.length(other)&&this.IsSupersetOf(other);\r\n  },\r\n  IsProperSubsetOf:function(xs)\r\n  {\r\n   var other;\r\n   other=Arrays.ofSeq(xs);\r\n   return this.count<Arrays.length(other)&&this.IsSubsetOf(other);\r\n  },\r\n  IntersectWith:function(xs)\r\n  {\r\n   var other,all,i,$1,item;\r\n   other=new HashSet.New$4(xs,this.equals,this.hash);\r\n   all=HashSetUtil.concat(this.data);\r\n   for(i=0,$1=all.length-1;i<=$1;i++){\r\n    item=all[i];\r\n    !other.Contains(item)?this.Remove(item):void 0;\r\n   }\r\n  },\r\n  ExceptWith:function(xs)\r\n  {\r\n   var e;\r\n   e=Enumerator.Get(xs);\r\n   try\r\n   {\r\n    while(e.MoveNext())\r\n     this.Remove(e.Current());\r\n   }\r\n   finally\r\n   {\r\n    if(typeof e==\"object\"&&\"Dispose\"in e)\r\n     e.Dispose();\r\n   }\r\n  },\r\n  get_Count:function()\r\n  {\r\n   return this.count;\r\n  },\r\n  CopyTo:function(arr)\r\n  {\r\n   var i,all,i$1,$1;\r\n   i=0;\r\n   all=HashSetUtil.concat(this.data);\r\n   for(i$1=0,$1=all.length-1;i$1<=$1;i$1++)Arrays.set(arr,i$1,all[i$1]);\r\n  },\r\n  Contains:function(item)\r\n  {\r\n   var arr;\r\n   arr=this.data[this.hash(item)];\r\n   return arr==null?false:this.arrContains(item,arr);\r\n  },\r\n  Clear:function()\r\n  {\r\n   this.data=[];\r\n   this.count=0;\r\n  },\r\n  Add:function(item)\r\n  {\r\n   return this.add(item);\r\n  },\r\n  GetEnumerator:function()\r\n  {\r\n   return Enumerator.Get(HashSetUtil.concat(this.data));\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return Enumerator.Get(HashSetUtil.concat(this.data));\r\n  }\r\n },Obj,HashSet);\r\n HashSet.New=Runtime.Ctor(function(init,comparer)\r\n {\r\n  HashSet.New$4.call(this,init,DictionaryUtil.equals(comparer),function(x)\r\n  {\r\n   return DictionaryUtil.getHashCode(comparer,x);\r\n  });\r\n },HashSet);\r\n HashSet.New$1=Runtime.Ctor(function(comparer)\r\n {\r\n  HashSet.New$4.call(this,[],DictionaryUtil.equals(comparer),function(x)\r\n  {\r\n   return DictionaryUtil.getHashCode(comparer,x);\r\n  });\r\n },HashSet);\r\n HashSet.New$2=Runtime.Ctor(function(init)\r\n {\r\n  HashSet.New$4.call(this,init,Unchecked.Equals,Unchecked.Hash);\r\n },HashSet);\r\n HashSet.New$3=Runtime.Ctor(function()\r\n {\r\n  HashSet.New$4.call(this,[],Unchecked.Equals,Unchecked.Hash);\r\n },HashSet);\r\n HashSet.New$4=Runtime.Ctor(function(init,equals,hash)\r\n {\r\n  var e;\r\n  Obj.New.call(this);\r\n  this.equals=equals;\r\n  this.hash=hash;\r\n  this.data=[];\r\n  this.count=0;\r\n  e=Enumerator.Get(init);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    this.add(e.Current());\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n },HashSet);\r\n LazyRecord.New=function(created,evalOrVal,force)\r\n {\r\n  return{\r\n   c:created,\r\n   v:evalOrVal,\r\n   f:force\r\n  };\r\n };\r\n Lazy.Force=function(x)\r\n {\r\n  return x.f();\r\n };\r\n Lazy.CreateFromValue=function(v)\r\n {\r\n  return LazyRecord.New(true,v,Lazy.cachedLazy);\r\n };\r\n Lazy.Create=function(f)\r\n {\r\n  return LazyRecord.New(false,f,Lazy.forceLazy);\r\n };\r\n Lazy.forceLazy=function()\r\n {\r\n  var v;\r\n  v=this.v();\r\n  this.c=true;\r\n  this.v=v;\r\n  this.f=Lazy.cachedLazy;\r\n  return v;\r\n };\r\n Lazy.cachedLazy=function()\r\n {\r\n  return this.v;\r\n };\r\n T$1=List.T=Runtime.Class({\r\n  GetSlice:function(start,finish)\r\n  {\r\n   var i;\r\n   return start!=null&&start.$==1?finish!=null&&finish.$==1?(i=start.$0,List.ofSeq(Seq.take(finish.$0-i+1,List.skip(i,this)))):List.skip(start.$0,this):finish!=null&&finish.$==1?List.ofSeq(Seq.take(finish.$0+1,this)):this;\r\n  },\r\n  get_Item:function(x)\r\n  {\r\n   return Seq.nth(x,this);\r\n  },\r\n  get_Length:function()\r\n  {\r\n   return List.length(this);\r\n  },\r\n  GetEnumerator:function()\r\n  {\r\n   return new T.New(this,null,function(e)\r\n   {\r\n    var m;\r\n    m=e.s;\r\n    return m.$==0?false:(e.c=m.$0,e.s=m.$1,true);\r\n   },void 0);\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return Enumerator.Get(this);\r\n  }\r\n },null,T$1);\r\n T$1.Empty=new T$1({\r\n  $:0\r\n });\r\n List.allPairs=function(l1,l2)\r\n {\r\n  return List.ofArray(Arrays.allPairs(Arrays.ofList(l1),Arrays.ofList(l2)));\r\n };\r\n List.append=function(x,y)\r\n {\r\n  var r,l,go,res,t;\r\n  if(x.$==0)\r\n   return y;\r\n  else\r\n   if(y.$==0)\r\n    return x;\r\n   else\r\n    {\r\n     res=new T$1({\r\n      $:1\r\n     });\r\n     r=res;\r\n     l=x;\r\n     go=true;\r\n     while(go)\r\n      {\r\n       r.$0=l.$0;\r\n       l=l.$1;\r\n       l.$==0?go=false:r=(t=new T$1({\r\n        $:1\r\n       }),r.$1=t,t);\r\n      }\r\n     r.$1=y;\r\n     return res;\r\n    }\r\n };\r\n List.choose=function(f,l)\r\n {\r\n  return List.ofSeq(Seq.choose(f,l));\r\n };\r\n List.collect=function(f,l)\r\n {\r\n  return List.ofSeq(Seq.collect(f,l));\r\n };\r\n List.concat=function(s)\r\n {\r\n  return List.ofSeq(Seq.concat(s));\r\n };\r\n List.exists=function(p,x)\r\n {\r\n  var e,l;\r\n  e=false;\r\n  l=x;\r\n  while(!e&&l.$==1)\r\n   {\r\n    e=p(l.$0);\r\n    l=l.$1;\r\n   }\r\n  return e;\r\n };\r\n List.exists2=function(p,x1,x2)\r\n {\r\n  var e,l1,l2;\r\n  e=false;\r\n  l1=x1;\r\n  l2=x2;\r\n  while(!e&&l1.$==1&&l2.$==1)\r\n   {\r\n    e=p(l1.$0,l2.$0);\r\n    l1=l1.$1;\r\n    l2=l2.$1;\r\n   }\r\n  !e&&(l1.$==1||l2.$==1)?List.badLengths():void 0;\r\n  return e;\r\n };\r\n List.filter=function(p,l)\r\n {\r\n  return List.ofSeq(Seq.filter(p,l));\r\n };\r\n List.fold2=function(f,s,l1,l2)\r\n {\r\n  return Arrays.fold2(f,s,Arrays.ofList(l1),Arrays.ofList(l2));\r\n };\r\n List.foldBack=function(f,l,s)\r\n {\r\n  return Arrays.foldBack(f,Arrays.ofList(l),s);\r\n };\r\n List.foldBack2=function(f,l1,l2,s)\r\n {\r\n  return Arrays.foldBack2(f,Arrays.ofList(l1),Arrays.ofList(l2),s);\r\n };\r\n List.forAll=function(p,x)\r\n {\r\n  var a,l;\r\n  a=true;\r\n  l=x;\r\n  while(a&&l.$==1)\r\n   {\r\n    a=p(l.$0);\r\n    l=l.$1;\r\n   }\r\n  return a;\r\n };\r\n List.forall2=function(p,x1,x2)\r\n {\r\n  var a,l1,l2;\r\n  a=true;\r\n  l1=x1;\r\n  l2=x2;\r\n  while(a&&l1.$==1&&l2.$==1)\r\n   {\r\n    a=p(l1.$0,l2.$0);\r\n    l1=l1.$1;\r\n    l2=l2.$1;\r\n   }\r\n  a&&(l1.$==1||l2.$==1)?List.badLengths():void 0;\r\n  return a;\r\n };\r\n List.head=function(l)\r\n {\r\n  return l.$==1?l.$0:List.listEmpty();\r\n };\r\n List.init=function(s,f)\r\n {\r\n  return List.ofArray(Arrays.init(s,f));\r\n };\r\n List.iter=function(f,l)\r\n {\r\n  var r;\r\n  r=l;\r\n  while(r.$==1)\r\n   {\r\n    f(List.head(r));\r\n    r=List.tail(r);\r\n   }\r\n };\r\n List.iter2=function(f,l1,l2)\r\n {\r\n  var r1,r2;\r\n  r1=l1;\r\n  r2=l2;\r\n  while(r1.$==1)\r\n   {\r\n    r2.$==0?List.badLengths():void 0;\r\n    f(List.head(r1),List.head(r2));\r\n    r1=List.tail(r1);\r\n    r2=List.tail(r2);\r\n   }\r\n  r2.$==1?List.badLengths():void 0;\r\n };\r\n List.iteri=function(f,l)\r\n {\r\n  var r,i;\r\n  r=l;\r\n  i=0;\r\n  while(r.$==1)\r\n   {\r\n    f(i,List.head(r));\r\n    r=List.tail(r);\r\n    i=i+1;\r\n   }\r\n };\r\n List.iteri2=function(f,l1,l2)\r\n {\r\n  var r1,r2,i;\r\n  r1=l1;\r\n  r2=l2;\r\n  i=0;\r\n  while(r1.$==1)\r\n   {\r\n    r2.$==0?List.badLengths():void 0;\r\n    f(i,List.head(r1),List.head(r2));\r\n    r1=List.tail(r1);\r\n    r2=List.tail(r2);\r\n    i=i+1;\r\n   }\r\n  r2.$==1?List.badLengths():void 0;\r\n };\r\n List.length=function(l)\r\n {\r\n  var r,i;\r\n  r=l;\r\n  i=0;\r\n  while(r.$==1)\r\n   {\r\n    r=List.tail(r);\r\n    i=i+1;\r\n   }\r\n  return i;\r\n };\r\n List.map=function(f,x)\r\n {\r\n  var r,l,go,res,t;\r\n  if(x.$==0)\r\n   return x;\r\n  else\r\n   {\r\n    res=new T$1({\r\n     $:1\r\n    });\r\n    r=res;\r\n    l=x;\r\n    go=true;\r\n    while(go)\r\n     {\r\n      r.$0=f(l.$0);\r\n      l=l.$1;\r\n      l.$==0?go=false:r=(t=new T$1({\r\n       $:1\r\n      }),r.$1=t,t);\r\n     }\r\n    r.$1=T$1.Empty;\r\n    return res;\r\n   }\r\n };\r\n List.map2=function(f,x1,x2)\r\n {\r\n  var go,r,l1,l2,res,t;\r\n  go=x1.$==1&&x2.$==1;\r\n  if(!go)\r\n   return x1.$==1||x2.$==1?List.badLengths():x1;\r\n  else\r\n   {\r\n    res=new T$1({\r\n     $:1\r\n    });\r\n    r=res;\r\n    l1=x1;\r\n    l2=x2;\r\n    while(go)\r\n     {\r\n      r.$0=f(l1.$0,l2.$0);\r\n      l1=l1.$1;\r\n      l2=l2.$1;\r\n      l1.$==1&&l2.$==1?r=(t=new T$1({\r\n       $:1\r\n      }),r.$1=t,t):go=false;\r\n     }\r\n    if(l1.$==1||l2.$==1)\r\n     List.badLengths();\r\n    r.$1=T$1.Empty;\r\n    return res;\r\n   }\r\n };\r\n List.map3=function(f,x1,x2,x3)\r\n {\r\n  var go,r,l1,l2,l3,res,t;\r\n  go=x1.$==1&&x2.$==1&&x3.$==1;\r\n  if(!go)\r\n   return x1.$==1||x2.$==1||x3.$==1?List.badLengths():x1;\r\n  else\r\n   {\r\n    res=new T$1({\r\n     $:1\r\n    });\r\n    r=res;\r\n    l1=x1;\r\n    l2=x2;\r\n    l3=x3;\r\n    while(go)\r\n     {\r\n      r.$0=f(l1.$0,l2.$0,l3.$0);\r\n      l1=l1.$1;\r\n      l2=l2.$1;\r\n      l3=l3.$1;\r\n      l1.$==1&&l2.$==1&&l3.$==1?r=(t=new T$1({\r\n       $:1\r\n      }),r.$1=t,t):go=false;\r\n     }\r\n    if(l1.$==1||l2.$==1||l3.$==1)\r\n     List.badLengths();\r\n    r.$1=T$1.Empty;\r\n    return res;\r\n   }\r\n };\r\n List.mapi=function(f,x)\r\n {\r\n  var r,l,i,go,res,t;\r\n  if(x.$==0)\r\n   return x;\r\n  else\r\n   {\r\n    res=new T$1({\r\n     $:1\r\n    });\r\n    r=res;\r\n    l=x;\r\n    i=0;\r\n    go=true;\r\n    while(go)\r\n     {\r\n      r.$0=f(i,l.$0);\r\n      l=l.$1;\r\n      l.$==0?go=false:(r=(t=new T$1({\r\n       $:1\r\n      }),r.$1=t,t),i=i+1);\r\n     }\r\n    r.$1=T$1.Empty;\r\n    return res;\r\n   }\r\n };\r\n List.mapi2=function(f,x1,x2)\r\n {\r\n  var go,r,l1,l2,i,res,t;\r\n  go=x1.$==1&&x2.$==1;\r\n  if(!go)\r\n   return x1.$==1||x2.$==1?List.badLengths():x1;\r\n  else\r\n   {\r\n    res=new T$1({\r\n     $:1\r\n    });\r\n    r=res;\r\n    l1=x1;\r\n    l2=x2;\r\n    i=0;\r\n    while(go)\r\n     {\r\n      r.$0=f(i,l1.$0,l2.$0);\r\n      l1=l1.$1;\r\n      l2=l2.$1;\r\n      l1.$==1&&l2.$==1?(r=(t=new T$1({\r\n       $:1\r\n      }),r.$1=t,t),i=i+1):go=false;\r\n     }\r\n    if(l1.$==1||l2.$==1)\r\n     List.badLengths();\r\n    r.$1=T$1.Empty;\r\n    return res;\r\n   }\r\n };\r\n List.max=function(list)\r\n {\r\n  var m,l,x;\r\n  List.nonEmpty(list);\r\n  m=list.$0;\r\n  l=list.$1;\r\n  while(l.$==1)\r\n   {\r\n    x=l.$0;\r\n    Unchecked.Compare(x,m)===1?m=x:void 0;\r\n    l=l.$1;\r\n   }\r\n  return m;\r\n };\r\n List.maxBy=function(f,list)\r\n {\r\n  var m,fm,l,x,fx;\r\n  List.nonEmpty(list);\r\n  m=list.$0;\r\n  fm=f(m);\r\n  l=list.$1;\r\n  while(l.$==1)\r\n   {\r\n    x=l.$0;\r\n    fx=f(x);\r\n    Unchecked.Compare(fx,fm)===1?(m=x,fm=fx):void 0;\r\n    l=l.$1;\r\n   }\r\n  return m;\r\n };\r\n List.min=function(list)\r\n {\r\n  var m,l,x;\r\n  List.nonEmpty(list);\r\n  m=list.$0;\r\n  l=list.$1;\r\n  while(l.$==1)\r\n   {\r\n    x=l.$0;\r\n    Unchecked.Compare(x,m)===-1?m=x:void 0;\r\n    l=l.$1;\r\n   }\r\n  return m;\r\n };\r\n List.minBy=function(f,list)\r\n {\r\n  var m,fm,l,x,fx;\r\n  List.nonEmpty(list);\r\n  m=list.$0;\r\n  fm=f(m);\r\n  l=list.$1;\r\n  while(l.$==1)\r\n   {\r\n    x=l.$0;\r\n    fx=f(x);\r\n    Unchecked.Compare(fx,fm)===-1?(m=x,fm=fx):void 0;\r\n    l=l.$1;\r\n   }\r\n  return m;\r\n };\r\n List.ofArray=function(arr)\r\n {\r\n  var r,i,$1;\r\n  r=T$1.Empty;\r\n  for(i=Arrays.length(arr)-1,$1=0;i>=$1;i--)r=new T$1({\r\n   $:1,\r\n   $0:Arrays.get(arr,i),\r\n   $1:r\r\n  });\r\n  return r;\r\n };\r\n List.ofSeq=function(s)\r\n {\r\n  var e,$1,go,r,res,t;\r\n  if(s instanceof T$1)\r\n   return s;\r\n  else\r\n   if(s instanceof Global.Array)\r\n    return List.ofArray(s);\r\n   else\r\n    {\r\n     e=Enumerator.Get(s);\r\n     try\r\n     {\r\n      go=e.MoveNext();\r\n      if(!go)\r\n       $1=T$1.Empty;\r\n      else\r\n       {\r\n        res=new T$1({\r\n         $:1\r\n        });\r\n        r=res;\r\n        while(go)\r\n         {\r\n          r.$0=e.Current();\r\n          e.MoveNext()?r=(t=new T$1({\r\n           $:1\r\n          }),r.$1=t,t):go=false;\r\n         }\r\n        r.$1=T$1.Empty;\r\n        $1=res;\r\n       }\r\n      return $1;\r\n     }\r\n     finally\r\n     {\r\n      if(typeof e==\"object\"&&\"Dispose\"in e)\r\n       e.Dispose();\r\n     }\r\n    }\r\n };\r\n List.partition=function(p,l)\r\n {\r\n  var p$1;\r\n  p$1=Arrays.partition(p,Arrays.ofList(l));\r\n  return[List.ofArray(p$1[0]),List.ofArray(p$1[1])];\r\n };\r\n List.permute=function(f,l)\r\n {\r\n  return List.ofArray(Arrays.permute(f,Arrays.ofList(l)));\r\n };\r\n List.reduce=function(f,list)\r\n {\r\n  var r,l;\r\n  List.nonEmpty(list);\r\n  r=list.$0;\r\n  l=list.$1;\r\n  while(l.$==1)\r\n   {\r\n    r=f(r,l.$0);\r\n    l=l.$1;\r\n   }\r\n  return r;\r\n };\r\n List.reduceBack=function(f,l)\r\n {\r\n  return Arrays.reduceBack(f,Arrays.ofList(l));\r\n };\r\n List.replicate=function(size,value)\r\n {\r\n  return List.ofArray(Arrays.create(size,value));\r\n };\r\n List.rev=function(l)\r\n {\r\n  var res,r;\r\n  res=T$1.Empty;\r\n  r=l;\r\n  while(r.$==1)\r\n   {\r\n    res=new T$1({\r\n     $:1,\r\n     $0:r.$0,\r\n     $1:res\r\n    });\r\n    r=r.$1;\r\n   }\r\n  return res;\r\n };\r\n List.scan=function(f,s,l)\r\n {\r\n  return List.ofSeq(Seq.scan(f,s,l));\r\n };\r\n List.scanBack=function(f,l,s)\r\n {\r\n  return List.ofArray(Arrays.scanBack(f,Arrays.ofList(l),s));\r\n };\r\n List.sort=function(l)\r\n {\r\n  var a;\r\n  a=Arrays.ofList(l);\r\n  Arrays.sortInPlace(a);\r\n  return List.ofArray(a);\r\n };\r\n List.sortBy=function(f,l)\r\n {\r\n  var a;\r\n  a=Arrays.ofList(l);\r\n  Arrays.sortInPlaceBy(f,a);\r\n  return List.ofArray(a);\r\n };\r\n List.sortByDescending=function(f,l)\r\n {\r\n  var a;\r\n  a=Arrays.ofList(l);\r\n  Arrays.sortInPlaceByDescending(f,a);\r\n  return List.ofArray(a);\r\n };\r\n List.sortDescending=function(l)\r\n {\r\n  var a;\r\n  a=Arrays.ofList(l);\r\n  Arrays.sortInPlaceByDescending(Global.id,a);\r\n  return List.ofArray(a);\r\n };\r\n List.sortWith=function(f,l)\r\n {\r\n  var a;\r\n  a=Arrays.ofList(l);\r\n  Arrays.sortInPlaceWith(f,a);\r\n  return List.ofArray(a);\r\n };\r\n List.tail=function(l)\r\n {\r\n  return l.$==1?l.$1:List.listEmpty();\r\n };\r\n List.transpose=function(x)\r\n {\r\n  return List.ofSeq(Seq.map(List.ofArray,Arrays.transposeArray(Arrays.ofSeq(Seq.map(Arrays.ofList,x)))));\r\n };\r\n List.unzip=function(l)\r\n {\r\n  var x,y,e,f;\r\n  x=[];\r\n  y=[];\r\n  e=Enumerator.Get(l);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    {\r\n     f=e.Current();\r\n     x.push(f[0]);\r\n     y.push(f[1]);\r\n    }\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n  return[List.ofArray(x.slice(0)),List.ofArray(y.slice(0))];\r\n };\r\n List.unzip3=function(l)\r\n {\r\n  var x,y,z,e,f;\r\n  x=[];\r\n  y=[];\r\n  z=[];\r\n  e=Enumerator.Get(l);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    {\r\n     f=e.Current();\r\n     x.push(f[0]);\r\n     y.push(f[1]);\r\n     z.push(f[2]);\r\n    }\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n  return[List.ofArray(x.slice(0)),List.ofArray(y.slice(0)),List.ofArray(z.slice(0))];\r\n };\r\n List.zip=function(l1,l2)\r\n {\r\n  return List.map2(function($1,$2)\r\n  {\r\n   return[$1,$2];\r\n  },l1,l2);\r\n };\r\n List.zip3=function(l1,l2,l3)\r\n {\r\n  return List.map3(function($1,$2,$3)\r\n  {\r\n   return[$1,$2,$3];\r\n  },l1,l2,l3);\r\n };\r\n List.chunkBySize=function(size,list)\r\n {\r\n  return List.map(List.ofArray,List.ofSeq(Seq.chunkBySize(size,list)));\r\n };\r\n List.compareWith=function(f,l1,l2)\r\n {\r\n  return Seq.compareWith(f,l1,l2);\r\n };\r\n List.countBy=function(f,l)\r\n {\r\n  return List.ofArray(Arrays.countBy(f,Arrays.ofList(l)));\r\n };\r\n List.distinct=function(l)\r\n {\r\n  return List.ofSeq(Seq.distinct(l));\r\n };\r\n List.distinctBy=function(f,l)\r\n {\r\n  return List.ofSeq(Seq.distinctBy(f,l));\r\n };\r\n List.splitInto=function(count,list)\r\n {\r\n  return List.map(List.ofArray,List.ofArray(Arrays.splitInto(count,Arrays.ofList(list))));\r\n };\r\n List.except=function(itemsToExclude,l)\r\n {\r\n  return List.ofSeq(Seq.except(itemsToExclude,l));\r\n };\r\n List.tryFindBack=function(ok,l)\r\n {\r\n  return Arrays.tryFindBack(ok,Arrays.ofList(l));\r\n };\r\n List.findBack=function(p,s)\r\n {\r\n  var m;\r\n  m=List.tryFindBack(p,s);\r\n  return m==null?Operators.FailWith(\"KeyNotFoundException\"):m.$0;\r\n };\r\n List.findIndexBack=function(p,s)\r\n {\r\n  var m;\r\n  m=Arrays.tryFindIndexBack(p,Arrays.ofList(s));\r\n  return m==null?Operators.FailWith(\"KeyNotFoundException\"):m.$0;\r\n };\r\n List.groupBy=function(f,l)\r\n {\r\n  var arr;\r\n  function f$1(k,s)\r\n  {\r\n   return[k,List.ofArray(s)];\r\n  }\r\n  arr=Arrays.groupBy(f,Arrays.ofList(l));\r\n  Arrays.mapInPlace(function($1)\r\n  {\r\n   return f$1($1[0],$1[1]);\r\n  },arr);\r\n  return List.ofArray(arr);\r\n };\r\n List.last=function(list)\r\n {\r\n  var r,t;\r\n  List.nonEmpty(list);\r\n  r=list;\r\n  t=r.$1;\r\n  while(t.$==1)\r\n   {\r\n    r=t;\r\n    t=r.$1;\r\n   }\r\n  return r.$0;\r\n };\r\n List.contains=function(el,x)\r\n {\r\n  var c,l;\r\n  c=false;\r\n  l=x;\r\n  while(!c&&l.$==1)\r\n   {\r\n    c=Unchecked.Equals(el,l.$0);\r\n    l=l.$1;\r\n   }\r\n  return c;\r\n };\r\n List.mapFold=function(f,zero,list)\r\n {\r\n  var t;\r\n  t=Arrays.mapFold(f,zero,Arrays.ofList(list));\r\n  return[List.ofArray(t[0]),t[1]];\r\n };\r\n List.mapFoldBack=function(f,list,zero)\r\n {\r\n  var t;\r\n  t=Arrays.mapFoldBack(f,Arrays.ofList(list),zero);\r\n  return[List.ofArray(t[0]),t[1]];\r\n };\r\n List.pairwise=function(l)\r\n {\r\n  return List.ofSeq(Seq.pairwise(l));\r\n };\r\n List.indexed=function(list)\r\n {\r\n  return List.mapi(function($1,$2)\r\n  {\r\n   return[$1,$2];\r\n  },list);\r\n };\r\n List.tryHead=function(list)\r\n {\r\n  return list.$==0?null:{\r\n   $:1,\r\n   $0:list.$0\r\n  };\r\n };\r\n List.exactlyOne=function(list)\r\n {\r\n  var $1;\r\n  return list.$==1&&(list.$1.$==0&&($1=list.$0,true))?$1:Operators.FailWith(\"The input does not have precisely one element.\");\r\n };\r\n List.unfold=function(f,s)\r\n {\r\n  return List.ofSeq(Seq.unfold(f,s));\r\n };\r\n List.windowed=function(windowSize,s)\r\n {\r\n  return List.ofSeq(Seq.map(List.ofArray,Seq.windowed(windowSize,s)));\r\n };\r\n List.splitAt=function(n,list)\r\n {\r\n  return[List.ofSeq(Seq.take(n,list)),List.skip(n,list)];\r\n };\r\n List.nonEmpty=function(l)\r\n {\r\n  if(l.$==0)\r\n   List.listEmpty();\r\n };\r\n List.listEmpty=function()\r\n {\r\n  return Operators.FailWith(\"The input list was empty.\");\r\n };\r\n List.badLengths=function()\r\n {\r\n  return Operators.FailWith(\"The lists have different lengths.\");\r\n };\r\n Nullable.getOrValue=function(x,v)\r\n {\r\n  return x===null?v:x;\r\n };\r\n Nullable.get=function(x)\r\n {\r\n  return x===null?Operators.FailWith(\"Nullable object must have a value.\"):x;\r\n };\r\n Operators.range=function(min,max)\r\n {\r\n  var count;\r\n  count=1+max-min;\r\n  return count<=0?[]:Seq.init(count,function(x)\r\n  {\r\n   return x+min;\r\n  });\r\n };\r\n Operators.step=function(min,step,max)\r\n {\r\n  var s;\r\n  s=Operators.Sign(step);\r\n  return Seq.takeWhile(function(k)\r\n  {\r\n   return s*(max-k)>=0;\r\n  },Seq.initInfinite(function(k)\r\n  {\r\n   return min+k*step;\r\n  }));\r\n };\r\n Operators.KeyValue=function(kvp)\r\n {\r\n  return[kvp.K,kvp.V];\r\n };\r\n Operators.Truncate=function(x)\r\n {\r\n  return x<0?Math.ceil(x):Math.floor(x);\r\n };\r\n Operators.Sign=function(x)\r\n {\r\n  return x===0?0:x<0?-1:1;\r\n };\r\n Operators.Pown=function(a,n)\r\n {\r\n  function p(n$1)\r\n  {\r\n   var b;\r\n   return n$1===1?a:n$1%2===0?(b=p(n$1/2>>0),b*b):a*p(n$1-1);\r\n  }\r\n  return p(n);\r\n };\r\n Operators.toInt=function(x)\r\n {\r\n  var u;\r\n  u=Operators.toUInt(x);\r\n  return u>=2147483648?u-4294967296:u;\r\n };\r\n Operators.toUInt=function(x)\r\n {\r\n  return(x<0?Math.ceil(x):Math.floor(x))>>>0;\r\n };\r\n Operators.InvalidArg=function(arg,msg)\r\n {\r\n  throw new ArgumentException.New(arg,msg);\r\n };\r\n Operators.InvalidOp=function(msg)\r\n {\r\n  throw new InvalidOperationException.New(msg);\r\n };\r\n Operators.FailWith=function(msg)\r\n {\r\n  throw new Error(msg);\r\n };\r\n Slice.string=function(source,start,finish)\r\n {\r\n  return start==null?finish!=null&&finish.$==1?source.slice(0,finish.$0+1):\"\":finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);\r\n };\r\n Slice.array=function(source,start,finish)\r\n {\r\n  return start==null?finish!=null&&finish.$==1?source.slice(0,finish.$0+1):[]:finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);\r\n };\r\n Slice.setArray=function(dst,start,finish,src)\r\n {\r\n  var start$1;\r\n  start$1=start!=null&&start.$==1?start.$0:0;\r\n  Arrays.setSub(dst,start$1,(finish!=null&&finish.$==1?finish.$0:dst.length-1)-start$1+1,src);\r\n };\r\n Slice.array2D=function(arr,start1,finish1,start2,finish2)\r\n {\r\n  var start1$1,start2$1;\r\n  start1$1=start1!=null&&start1.$==1?start1.$0:0;\r\n  start2$1=start2!=null&&start2.$==1?start2.$0:0;\r\n  return Arrays.sub2D(arr,start1$1,start2$1,(finish1!=null&&finish1.$==1?finish1.$0:arr.length-1)-start1$1+1,(finish2!=null&&finish2.$==1?finish2.$0:(arr.length?arr[0].length:0)-1)-start2$1+1);\r\n };\r\n Slice.array2Dfix1=function(arr,fixed1,start2,finish2)\r\n {\r\n  var start2$1,finish2$1,len2,dst,j,$1;\r\n  start2$1=start2!=null&&start2.$==1?start2.$0:0;\r\n  finish2$1=finish2!=null&&finish2.$==1?finish2.$0:(arr.length?arr[0].length:0)-1;\r\n  len2=finish2$1-start2$1+1;\r\n  dst=new Global.Array(len2);\r\n  for(j=0,$1=len2-1;j<=$1;j++)Arrays.set(dst,j,Arrays.get2D(arr,fixed1,start2$1+j));\r\n  return dst;\r\n };\r\n Slice.array2Dfix2=function(arr,start1,finish1,fixed2)\r\n {\r\n  var start1$1,finish1$1,len1,dst,i,$1;\r\n  start1$1=start1!=null&&start1.$==1?start1.$0:0;\r\n  finish1$1=finish1!=null&&finish1.$==1?finish1.$0:arr.length-1;\r\n  len1=finish1$1-start1$1+1;\r\n  dst=new Global.Array(len1);\r\n  for(i=0,$1=len1-1;i<=$1;i++)Arrays.set(dst,i,Arrays.get2D(arr,start1$1+i,fixed2));\r\n  return dst;\r\n };\r\n Slice.setArray2Dfix1=function(dst,fixed1,start2,finish2,src)\r\n {\r\n  var start2$1,finish2$1,j,$1;\r\n  start2$1=start2!=null&&start2.$==1?start2.$0:0;\r\n  finish2$1=finish2!=null&&finish2.$==1?finish2.$0:(dst.length?dst[0].length:0)-1;\r\n  for(j=0,$1=finish2$1-start2$1+1-1;j<=$1;j++)Arrays.set2D(dst,fixed1,start2$1+j,Arrays.get(src,j));\r\n };\r\n Slice.setArray2Dfix2=function(dst,start1,finish1,fixed2,src)\r\n {\r\n  var start1$1,finish1$1,i,$1;\r\n  start1$1=start1!=null&&start1.$==1?start1.$0:0;\r\n  finish1$1=finish1!=null&&finish1.$==1?finish1.$0:dst.length-1;\r\n  for(i=0,$1=finish1$1-start1$1+1-1;i<=$1;i++)Arrays.set2D(dst,start1$1+i,fixed2,Arrays.get(src,i));\r\n };\r\n Slice.setArray2D=function(dst,start1,finish1,start2,finish2,src)\r\n {\r\n  var start1$1,start2$1;\r\n  start1$1=start1!=null&&start1.$==1?start1.$0:0;\r\n  start2$1=start2!=null&&start2.$==1?start2.$0:0;\r\n  Arrays.setSub2D(dst,start1$1,start2$1,(finish1!=null&&finish1.$==1?finish1.$0:dst.length-1)-start1$1+1,(finish2!=null&&finish2.$==1?finish2.$0:(dst.length?dst[0].length:0)-1)-start2$1+1,src);\r\n };\r\n Option.filter=function(f,o)\r\n {\r\n  var $1;\r\n  return o!=null&&o.$==1&&(f(o.$0)&&($1=o.$0,true))?o:null;\r\n };\r\n Option.fold=function(f,s,x)\r\n {\r\n  return x==null?s:f(s,x.$0);\r\n };\r\n Option.foldBack=function(f,x,s)\r\n {\r\n  return x==null?s:f(x.$0,s);\r\n };\r\n Option.ofNullable=function(o)\r\n {\r\n  return o==null?null:{\r\n   $:1,\r\n   $0:Nullable.get(o)\r\n  };\r\n };\r\n Option.ofObj=function(o)\r\n {\r\n  return o==null?null:{\r\n   $:1,\r\n   $0:o\r\n  };\r\n };\r\n Option.toArray=function(x)\r\n {\r\n  return x==null?[]:[x.$0];\r\n };\r\n Option.toList=function(x)\r\n {\r\n  return x==null?T$1.Empty:List.ofArray([x.$0]);\r\n };\r\n Option.toNullable=function(o)\r\n {\r\n  return o!=null&&o.$==1?o.$0:null;\r\n };\r\n Option.toObj=function(o)\r\n {\r\n  return o==null?null:o.$0;\r\n };\r\n Queue.CopyTo=function(a,array,index)\r\n {\r\n  Arrays.blit(a,0,array,index,Arrays.length(a));\r\n };\r\n Queue.Contains=function(a,el)\r\n {\r\n  return Seq.exists(function(y)\r\n  {\r\n   return Unchecked.Equals(el,y);\r\n  },a);\r\n };\r\n Queue.Clear=function(a)\r\n {\r\n  a.splice(0,Arrays.length(a));\r\n };\r\n Random=WebSharper.Random=Runtime.Class({\r\n  NextBytes:function(buffer)\r\n  {\r\n   var i,$1;\r\n   for(i=0,$1=Arrays.length(buffer)-1;i<=$1;i++)Arrays.set(buffer,i,Math.floor(Math.random()*256));\r\n  },\r\n  Next:function(minValue,maxValue)\r\n  {\r\n   return minValue>maxValue?Operators.FailWith(\"'minValue' cannot be greater than maxValue.\"):minValue+Math.floor(Math.random()*(maxValue-minValue));\r\n  },\r\n  Next$1:function(maxValue)\r\n  {\r\n   return maxValue<0?Operators.FailWith(\"'maxValue' must be greater than zero.\"):Math.floor(Math.random()*maxValue);\r\n  },\r\n  Next$2:function()\r\n  {\r\n   return Math.floor(Math.random()*2147483648);\r\n  }\r\n },Obj,Random);\r\n Random.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },Random);\r\n Ref.New=function(contents)\r\n {\r\n  return[contents];\r\n };\r\n Result.MapError=function(f,r)\r\n {\r\n  return r.$==1?{\r\n   $:1,\r\n   $0:f(r.$0)\r\n  }:{\r\n   $:0,\r\n   $0:r.$0\r\n  };\r\n };\r\n Result.Map=function(f,r)\r\n {\r\n  return r.$==1?{\r\n   $:1,\r\n   $0:r.$0\r\n  }:{\r\n   $:0,\r\n   $0:f(r.$0)\r\n  };\r\n };\r\n Result.Bind=function(f,r)\r\n {\r\n  return r.$==1?{\r\n   $:1,\r\n   $0:r.$0\r\n  }:f(r.$0);\r\n };\r\n Seq.enumFinally=function(s,f)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var _enum;\r\n    try\r\n    {\r\n     _enum=Enumerator.Get(s);\r\n    }\r\n    catch(e)\r\n    {\r\n     f();\r\n     throw e;\r\n    }\r\n    return new T.New(null,null,function(e$1)\r\n    {\r\n     return _enum.MoveNext()&&(e$1.c=_enum.Current(),true);\r\n    },function()\r\n    {\r\n     _enum.Dispose();\r\n     f();\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.enumUsing=function(x,f)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var _enum;\r\n    try\r\n    {\r\n     _enum=Enumerator.Get(f(x));\r\n    }\r\n    catch(e)\r\n    {\r\n     x.Dispose();\r\n     throw e;\r\n    }\r\n    return new T.New(null,null,function(e$1)\r\n    {\r\n     return _enum.MoveNext()&&(e$1.c=_enum.Current(),true);\r\n    },function()\r\n    {\r\n     _enum.Dispose();\r\n     x.Dispose();\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.enumWhile=function(f,s)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    return new T.New(null,null,function(en)\r\n    {\r\n     var m;\r\n     while(true)\r\n      {\r\n       m=en.s;\r\n       if(Unchecked.Equals(m,null))\r\n       {\r\n        if(f())\r\n         {\r\n          en.s=Enumerator.Get(s);\r\n          en=en;\r\n         }\r\n        else\r\n         return false;\r\n       }\r\n       else\r\n        if(m.MoveNext())\r\n         {\r\n          en.c=m.Current();\r\n          return true;\r\n         }\r\n        else\r\n         {\r\n          m.Dispose();\r\n          en.s=null;\r\n          en=en;\r\n         }\r\n      }\r\n    },function(en)\r\n    {\r\n     var x;\r\n     x=en.s;\r\n     !Unchecked.Equals(x,null)?x.Dispose():void 0;\r\n    });\r\n   }\r\n  };\r\n };\r\n Control.createEvent=function(add,remove,create)\r\n {\r\n  var $1;\r\n  $1={\r\n   AddHandler:add,\r\n   RemoveHandler:remove,\r\n   Subscribe:function(r)\r\n   {\r\n    var h;\r\n    h=create(function()\r\n    {\r\n     return function(args)\r\n     {\r\n      return r.OnNext(args);\r\n     };\r\n    });\r\n    add(h);\r\n    return{\r\n     Dispose:function()\r\n     {\r\n      return remove(h);\r\n     }\r\n    };\r\n   }\r\n  };\r\n  Obj.New.call($1);\r\n  return $1;\r\n };\r\n Seq.allPairs=function(source1,source2)\r\n {\r\n  var cached;\r\n  cached=Seq.cache(source2);\r\n  return Seq.collect(function(x)\r\n  {\r\n   return Seq.map(function(y)\r\n   {\r\n    return[x,y];\r\n   },cached);\r\n  },source1);\r\n };\r\n Seq.append=function(s1,s2)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var e1,first;\r\n    e1=Enumerator.Get(s1);\r\n    first=[true];\r\n    return new T.New(e1,null,function(x)\r\n    {\r\n     var x$1;\r\n     return x.s.MoveNext()?(x.c=x.s.Current(),true):(x$1=x.s,!Unchecked.Equals(x$1,null)?x$1.Dispose():void 0,x.s=null,first[0]&&(first[0]=false,x.s=Enumerator.Get(s2),x.s.MoveNext()?(x.c=x.s.Current(),true):(x.s.Dispose(),x.s=null,false)));\r\n    },function(x)\r\n    {\r\n     var x$1;\r\n     x$1=x.s;\r\n     !Unchecked.Equals(x$1,null)?x$1.Dispose():void 0;\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.average=function(s)\r\n {\r\n  var p,count;\r\n  p=Seq.fold(function($1,$2)\r\n  {\r\n   return(function(t)\r\n   {\r\n    var n,s$1;\r\n    n=t[0];\r\n    s$1=t[1];\r\n    return function(x)\r\n    {\r\n     return[n+1,s$1+x];\r\n    };\r\n   }($1))($2);\r\n  },[0,0],s);\r\n  count=p[0];\r\n  return count===0?Seq.seqEmpty():p[1]/count;\r\n };\r\n Seq.averageBy=function(f,s)\r\n {\r\n  var p,count;\r\n  p=Seq.fold(function($1,$2)\r\n  {\r\n   return(function(t)\r\n   {\r\n    var n,s$1;\r\n    n=t[0];\r\n    s$1=t[1];\r\n    return function(x)\r\n    {\r\n     return[n+1,s$1+f(x)];\r\n    };\r\n   }($1))($2);\r\n  },[0,0],s);\r\n  count=p[0];\r\n  return count===0?Seq.seqEmpty():p[1]/count;\r\n };\r\n Seq.cache=function(s)\r\n {\r\n  var cache,o;\r\n  cache=[];\r\n  o=[Enumerator.Get(s)];\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    return new T.New(0,null,function(e)\r\n    {\r\n     var en;\r\n     return e.s<cache.length?(e.c=cache[e.s],e.s=e.s+1,true):(en=o[0],Unchecked.Equals(en,null)?false:en.MoveNext()?(e.s=e.s+1,e.c=en.Current(),cache.push(e.c),true):(en.Dispose(),o[0]=null,false));\r\n    },void 0);\r\n   }\r\n  };\r\n };\r\n Seq.choose=function(f,s)\r\n {\r\n  return Seq.collect(function(x)\r\n  {\r\n   var m;\r\n   m=f(x);\r\n   return m==null?T$1.Empty:List.ofArray([m.$0]);\r\n  },s);\r\n };\r\n Seq.collect=function(f,s)\r\n {\r\n  return Seq.concat(Seq.map(f,s));\r\n };\r\n Seq.compareWith=function(f,s1,s2)\r\n {\r\n  var e1,$1,e2,r,loop;\r\n  e1=Enumerator.Get(s1);\r\n  try\r\n  {\r\n   e2=Enumerator.Get(s2);\r\n   try\r\n   {\r\n    r=0;\r\n    loop=true;\r\n    while(loop&&r===0)\r\n     if(e1.MoveNext())\r\n      r=e2.MoveNext()?f(e1.Current(),e2.Current()):1;\r\n     else\r\n      if(e2.MoveNext())\r\n       r=-1;\r\n      else\r\n       loop=false;\r\n    $1=r;\r\n   }\r\n   finally\r\n   {\r\n    if(typeof e2==\"object\"&&\"Dispose\"in e2)\r\n     e2.Dispose();\r\n   }\r\n   return $1;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e1==\"object\"&&\"Dispose\"in e1)\r\n    e1.Dispose();\r\n  }\r\n };\r\n Seq.concat=function(ss)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var outerE;\r\n    outerE=Enumerator.Get(ss);\r\n    return new T.New(null,null,function(st)\r\n    {\r\n     var m;\r\n     while(true)\r\n      {\r\n       m=st.s;\r\n       if(Unchecked.Equals(m,null))\r\n       {\r\n        if(outerE.MoveNext())\r\n         {\r\n          st.s=Enumerator.Get(outerE.Current());\r\n          st=st;\r\n         }\r\n        else\r\n         {\r\n          outerE.Dispose();\r\n          return false;\r\n         }\r\n       }\r\n       else\r\n        if(m.MoveNext())\r\n         {\r\n          st.c=m.Current();\r\n          return true;\r\n         }\r\n        else\r\n         {\r\n          st.Dispose();\r\n          st.s=null;\r\n          st=st;\r\n         }\r\n      }\r\n    },function(st)\r\n    {\r\n     var x;\r\n     x=st.s;\r\n     !Unchecked.Equals(x,null)?x.Dispose():void 0;\r\n     !Unchecked.Equals(outerE,null)?outerE.Dispose():void 0;\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.countBy=function(f,s)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Arrays.countBy(f,Arrays.ofSeq(s));\r\n  });\r\n };\r\n Seq.delay=function(f)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    return Enumerator.Get(f());\r\n   }\r\n  };\r\n };\r\n Seq.distinct=function(s)\r\n {\r\n  return Seq.distinctBy(Global.id,s);\r\n };\r\n Seq.distinctBy=function(f,s)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var o,seen;\r\n    o=Enumerator.Get(s);\r\n    seen=new HashSet.New$3();\r\n    return new T.New(null,null,function(e)\r\n    {\r\n     var cur,has;\r\n     if(o.MoveNext())\r\n      {\r\n       cur=o.Current();\r\n       has=seen.Add(f(cur));\r\n       while(!has&&o.MoveNext())\r\n        {\r\n         cur=o.Current();\r\n         has=seen.Add(f(cur));\r\n        }\r\n       return has&&(e.c=cur,true);\r\n      }\r\n     else\r\n      return false;\r\n    },function()\r\n    {\r\n     o.Dispose();\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.splitInto=function(count,s)\r\n {\r\n  count<=0?Operators.FailWith(\"Count must be positive\"):void 0;\r\n  return Seq.delay(function()\r\n  {\r\n   return Arrays.splitInto(count,Arrays.ofSeq(s));\r\n  });\r\n };\r\n Seq.exactlyOne=function(s)\r\n {\r\n  var e,x;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   return e.MoveNext()?(x=e.Current(),e.MoveNext()?Operators.InvalidOp(\"Sequence contains more than one element\"):x):Operators.InvalidOp(\"Sequence contains no elements\");\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.exists=function(p,s)\r\n {\r\n  var e,r;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   r=false;\r\n   while(!r&&e.MoveNext())\r\n    r=p(e.Current());\r\n   return r;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.exists2=function(p,s1,s2)\r\n {\r\n  var e1,$1,e2,r;\r\n  e1=Enumerator.Get(s1);\r\n  try\r\n  {\r\n   e2=Enumerator.Get(s2);\r\n   try\r\n   {\r\n    r=false;\r\n    while(!r&&e1.MoveNext()&&e2.MoveNext())\r\n     r=p(e1.Current(),e2.Current());\r\n    $1=r;\r\n   }\r\n   finally\r\n   {\r\n    if(typeof e2==\"object\"&&\"Dispose\"in e2)\r\n     e2.Dispose();\r\n   }\r\n   return $1;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e1==\"object\"&&\"Dispose\"in e1)\r\n    e1.Dispose();\r\n  }\r\n };\r\n Seq.filter=function(f,s)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var o;\r\n    o=Enumerator.Get(s);\r\n    return new T.New(null,null,function(e)\r\n    {\r\n     var loop,c,res;\r\n     loop=o.MoveNext();\r\n     c=o.Current();\r\n     res=false;\r\n     while(loop)\r\n      if(f(c))\r\n       {\r\n        e.c=c;\r\n        res=true;\r\n        loop=false;\r\n       }\r\n      else\r\n       if(o.MoveNext())\r\n        c=o.Current();\r\n       else\r\n        loop=false;\r\n     return res;\r\n    },function()\r\n    {\r\n     o.Dispose();\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.find=function(p,s)\r\n {\r\n  var m;\r\n  m=Seq.tryFind(p,s);\r\n  return m==null?Operators.FailWith(\"KeyNotFoundException\"):m.$0;\r\n };\r\n Seq.findIndex=function(p,s)\r\n {\r\n  var m;\r\n  m=Seq.tryFindIndex(p,s);\r\n  return m==null?Operators.FailWith(\"KeyNotFoundException\"):m.$0;\r\n };\r\n Seq.fold=function(f,x,s)\r\n {\r\n  var r,e;\r\n  r=x;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    r=f(r,e.Current());\r\n   return r;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.forall=function(p,s)\r\n {\r\n  return!Seq.exists(function(x)\r\n  {\r\n   return!p(x);\r\n  },s);\r\n };\r\n Seq.forall2=function(p,s1,s2)\r\n {\r\n  return!Seq.exists2(function($1,$2)\r\n  {\r\n   return!p($1,$2);\r\n  },s1,s2);\r\n };\r\n Seq.groupBy=function(f,s)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Arrays.groupBy(f,Arrays.ofSeq(s));\r\n  });\r\n };\r\n Seq.head=function(s)\r\n {\r\n  var e;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   return e.MoveNext()?e.Current():Seq.insufficient();\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.init=function(n,f)\r\n {\r\n  return Seq.take(n,Seq.initInfinite(f));\r\n };\r\n Seq.initInfinite=function(f)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    return new T.New(0,null,function(e)\r\n    {\r\n     e.c=f(e.s);\r\n     e.s=e.s+1;\r\n     return true;\r\n    },void 0);\r\n   }\r\n  };\r\n };\r\n Seq.isEmpty=function(s)\r\n {\r\n  var e;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   return!e.MoveNext();\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.iter=function(p,s)\r\n {\r\n  var e;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    p(e.Current());\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.iter2=function(p,s1,s2)\r\n {\r\n  var e1,$1,e2;\r\n  e1=Enumerator.Get(s1);\r\n  try\r\n  {\r\n   e2=Enumerator.Get(s2);\r\n   try\r\n   {\r\n    while(e1.MoveNext()&&e2.MoveNext())\r\n     p(e1.Current(),e2.Current());\r\n    $1=void 0;\r\n   }\r\n   finally\r\n   {\r\n    if(typeof e2==\"object\"&&\"Dispose\"in e2)\r\n     e2.Dispose();\r\n   }\r\n   $1;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e1==\"object\"&&\"Dispose\"in e1)\r\n    e1.Dispose();\r\n  }\r\n };\r\n Seq.iteri=function(p,s)\r\n {\r\n  var i,e;\r\n  i=0;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    {\r\n     p(i,e.Current());\r\n     i=i+1;\r\n    }\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.length=function(s)\r\n {\r\n  var i,e;\r\n  i=0;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    i=i+1;\r\n   return i;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.map=function(f,s)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var en;\r\n    en=Enumerator.Get(s);\r\n    return new T.New(null,null,function(e)\r\n    {\r\n     return en.MoveNext()&&(e.c=f(en.Current()),true);\r\n    },function()\r\n    {\r\n     en.Dispose();\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.mapi=function(f,s)\r\n {\r\n  return Seq.map2(f,Seq.initInfinite(Global.id),s);\r\n };\r\n Seq.map2=function(f,s1,s2)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var e1,e2;\r\n    e1=Enumerator.Get(s1);\r\n    e2=Enumerator.Get(s2);\r\n    return new T.New(null,null,function(e)\r\n    {\r\n     return e1.MoveNext()&&e2.MoveNext()&&(e.c=f(e1.Current(),e2.Current()),true);\r\n    },function()\r\n    {\r\n     e1.Dispose();\r\n     e2.Dispose();\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.maxBy=function(f,s)\r\n {\r\n  var e,m,fm,x,fx;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   if(!e.MoveNext())\r\n    Seq.seqEmpty();\r\n   m=e.Current();\r\n   fm=f(m);\r\n   while(e.MoveNext())\r\n    {\r\n     x=e.Current();\r\n     fx=f(x);\r\n     Unchecked.Compare(fx,fm)===1?(m=x,fm=fx):void 0;\r\n    }\r\n   return m;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.minBy=function(f,s)\r\n {\r\n  var e,m,fm,x,fx;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   if(!e.MoveNext())\r\n    Seq.seqEmpty();\r\n   m=e.Current();\r\n   fm=f(m);\r\n   while(e.MoveNext())\r\n    {\r\n     x=e.Current();\r\n     fx=f(x);\r\n     Unchecked.Compare(fx,fm)===-1?(m=x,fm=fx):void 0;\r\n    }\r\n   return m;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.max=function(s)\r\n {\r\n  var e,m,x;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   if(!e.MoveNext())\r\n    Seq.seqEmpty();\r\n   m=e.Current();\r\n   while(e.MoveNext())\r\n    {\r\n     x=e.Current();\r\n     Unchecked.Compare(x,m)===1?m=x:void 0;\r\n    }\r\n   return m;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.min=function(s)\r\n {\r\n  var e,m,x;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   if(!e.MoveNext())\r\n    Seq.seqEmpty();\r\n   m=e.Current();\r\n   while(e.MoveNext())\r\n    {\r\n     x=e.Current();\r\n     Unchecked.Compare(x,m)===-1?m=x:void 0;\r\n    }\r\n   return m;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.nth=function(index,s)\r\n {\r\n  var pos,e;\r\n  if(index<0)\r\n   Operators.FailWith(\"negative index requested\");\r\n  pos=-1;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   while(pos<index)\r\n    {\r\n     !e.MoveNext()?Seq.insufficient():void 0;\r\n     pos=pos+1;\r\n    }\r\n   return e.Current();\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.pairwise=function(s)\r\n {\r\n  return Seq.map(function(x)\r\n  {\r\n   return[Arrays.get(x,0),Arrays.get(x,1)];\r\n  },Seq.windowed(2,s));\r\n };\r\n Seq.pick=function(p,s)\r\n {\r\n  var m;\r\n  m=Seq.tryPick(p,s);\r\n  return m==null?Operators.FailWith(\"KeyNotFoundException\"):m.$0;\r\n };\r\n Seq.readOnly=function(s)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    return Enumerator.Get(s);\r\n   }\r\n  };\r\n };\r\n Seq.reduce=function(f,source)\r\n {\r\n  var e,r;\r\n  e=Enumerator.Get(source);\r\n  try\r\n  {\r\n   if(!e.MoveNext())\r\n    Seq.seqEmpty();\r\n   r=e.Current();\r\n   while(e.MoveNext())\r\n    r=f(r,e.Current());\r\n   return r;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.scan=function(f,x,s)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var en;\r\n    en=Enumerator.Get(s);\r\n    return new T.New(false,null,function(e)\r\n    {\r\n     return e.s?en.MoveNext()&&(e.c=f(e.c,en.Current()),true):(e.c=x,e.s=true,true);\r\n    },function()\r\n    {\r\n     en.Dispose();\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.skip=function(n,s)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var o;\r\n    o=Enumerator.Get(s);\r\n    return new T.New(true,null,function(e)\r\n    {\r\n     var i,$1;\r\n     if(e.s)\r\n      {\r\n       for(i=1,$1=n;i<=$1;i++)if(!o.MoveNext())\r\n        Seq.insufficient();\r\n       e.s=false;\r\n      }\r\n     else\r\n      null;\r\n     return o.MoveNext()&&(e.c=o.Current(),true);\r\n    },function()\r\n    {\r\n     o.Dispose();\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.skipWhile=function(f,s)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var o;\r\n    o=Enumerator.Get(s);\r\n    return new T.New(true,null,function(e)\r\n    {\r\n     var go,empty;\r\n     if(e.s)\r\n      {\r\n       go=true;\r\n       empty=false;\r\n       while(go)\r\n        if(o.MoveNext())\r\n        {\r\n         if(!f(o.Current()))\r\n          go=false;\r\n        }\r\n        else\r\n         {\r\n          go=false;\r\n          empty=true;\r\n         }\r\n       e.s=false;\r\n       return empty?false:(e.c=o.Current(),true);\r\n      }\r\n     else\r\n      return o.MoveNext()&&(e.c=o.Current(),true);\r\n    },function()\r\n    {\r\n     o.Dispose();\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.sort=function(s)\r\n {\r\n  return Seq.sortBy(Global.id,s);\r\n };\r\n Seq.sortBy=function(f,s)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   var array;\r\n   array=Arrays.ofSeq(s);\r\n   Arrays.sortInPlaceBy(f,array);\r\n   return array;\r\n  });\r\n };\r\n Seq.sortByDescending=function(f,s)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   var array;\r\n   array=Arrays.ofSeq(s);\r\n   Arrays.sortInPlaceByDescending(f,array);\r\n   return array;\r\n  });\r\n };\r\n Seq.sortDescending=function(s)\r\n {\r\n  return Seq.sortByDescending(Global.id,s);\r\n };\r\n Seq.sum=function(s)\r\n {\r\n  return Seq.fold(function($1,$2)\r\n  {\r\n   return $1+$2;\r\n  },0,s);\r\n };\r\n Seq.sumBy=function(f,s)\r\n {\r\n  return Seq.fold(function($1,$2)\r\n  {\r\n   return $1+f($2);\r\n  },0,s);\r\n };\r\n Seq.take=function(n,s)\r\n {\r\n  n<0?Seq.nonNegative():void 0;\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var e;\r\n    e=[Enumerator.Get(s)];\r\n    return new T.New(0,null,function(o)\r\n    {\r\n     var en;\r\n     o.s=o.s+1;\r\n     return o.s>n?false:(en=e[0],Unchecked.Equals(en,null)?Seq.insufficient():en.MoveNext()?(o.c=en.Current(),o.s===n?(en.Dispose(),e[0]=null):void 0,true):(en.Dispose(),e[0]=null,Seq.insufficient()));\r\n    },function()\r\n    {\r\n     var x;\r\n     x=e[0];\r\n     !Unchecked.Equals(x,null)?x.Dispose():void 0;\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.takeWhile=function(f,s)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Seq.enumUsing(Enumerator.Get(s),function(e)\r\n   {\r\n    return Seq.enumWhile(function()\r\n    {\r\n     return e.MoveNext()&&f(e.Current());\r\n    },Seq.delay(function()\r\n    {\r\n     return[e.Current()];\r\n    }));\r\n   });\r\n  });\r\n };\r\n Seq.transpose=function(x)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Arrays.transposeArray(Arrays.ofSeq(Seq.map(Arrays.ofSeq,x)));\r\n  });\r\n };\r\n Seq.truncate=function(n,s)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Seq.enumUsing(Enumerator.Get(s),function(e)\r\n   {\r\n    var i;\r\n    i=[0];\r\n    return Seq.enumWhile(function()\r\n    {\r\n     return e.MoveNext()&&i[0]<n;\r\n    },Seq.delay(function()\r\n    {\r\n     i[0]++;\r\n     return[e.Current()];\r\n    }));\r\n   });\r\n  });\r\n };\r\n Seq.tryFind=function(ok,s)\r\n {\r\n  var e,r,x;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   r=null;\r\n   while(r==null&&e.MoveNext())\r\n    {\r\n     x=e.Current();\r\n     ok(x)?r={\r\n      $:1,\r\n      $0:x\r\n     }:void 0;\r\n    }\r\n   return r;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.findBack=function(p,s)\r\n {\r\n  var m;\r\n  m=Arrays.tryFindBack(p,Arrays.ofSeq(s));\r\n  return m==null?Operators.FailWith(\"KeyNotFoundException\"):m.$0;\r\n };\r\n Seq.tryFindIndex=function(ok,s)\r\n {\r\n  var e,loop,i;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   loop=true;\r\n   i=0;\r\n   while(loop&&e.MoveNext())\r\n    if(ok(e.Current()))\r\n     loop=false;\r\n    else\r\n     i=i+1;\r\n   return loop?null:{\r\n    $:1,\r\n    $0:i\r\n   };\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.findIndexBack=function(p,s)\r\n {\r\n  var m;\r\n  m=Arrays.tryFindIndexBack(p,Arrays.ofSeq(s));\r\n  return m==null?Operators.FailWith(\"KeyNotFoundException\"):m.$0;\r\n };\r\n Seq.tryPick=function(f,s)\r\n {\r\n  var e,r;\r\n  e=Enumerator.Get(s);\r\n  try\r\n  {\r\n   r=null;\r\n   while(Unchecked.Equals(r,null)&&e.MoveNext())\r\n    r=f(e.Current());\r\n   return r;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Seq.unfold=function(f,s)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    return new T.New(s,null,function(e)\r\n    {\r\n     var m;\r\n     m=f(e.s);\r\n     return m==null?false:(e.c=m.$0[0],e.s=m.$0[1],true);\r\n    },void 0);\r\n   }\r\n  };\r\n };\r\n Seq.windowed=function(windowSize,s)\r\n {\r\n  windowSize<=0?Operators.FailWith(\"The input must be positive.\"):void 0;\r\n  return Seq.delay(function()\r\n  {\r\n   return Seq.enumUsing(Enumerator.Get(s),function(e)\r\n   {\r\n    var q;\r\n    q=[];\r\n    return Seq.append(Seq.enumWhile(function()\r\n    {\r\n     return q.length<windowSize&&e.MoveNext();\r\n    },Seq.delay(function()\r\n    {\r\n     q.push(e.Current());\r\n     return[];\r\n    })),Seq.delay(function()\r\n    {\r\n     return q.length===windowSize?Seq.append([q.slice(0)],Seq.delay(function()\r\n     {\r\n      return Seq.enumWhile(function()\r\n      {\r\n       return e.MoveNext();\r\n      },Seq.delay(function()\r\n      {\r\n       q.shift();\r\n       q.push(e.Current());\r\n       return[q.slice(0)];\r\n      }));\r\n     })):[];\r\n    }));\r\n   });\r\n  });\r\n };\r\n Seq.zip=function(s1,s2)\r\n {\r\n  return Seq.map2(function($1,$2)\r\n  {\r\n   return[$1,$2];\r\n  },s1,s2);\r\n };\r\n Seq.map3=function(f,s1,s2,s3)\r\n {\r\n  return{\r\n   GetEnumerator:function()\r\n   {\r\n    var e1,e2,e3;\r\n    e1=Enumerator.Get(s1);\r\n    e2=Enumerator.Get(s2);\r\n    e3=Enumerator.Get(s3);\r\n    return new T.New(null,null,function(e)\r\n    {\r\n     return e1.MoveNext()&&e2.MoveNext()&&e3.MoveNext()&&(e.c=f(e1.Current(),e2.Current(),e3.Current()),true);\r\n    },function()\r\n    {\r\n     e1.Dispose();\r\n     e2.Dispose();\r\n     e3.Dispose();\r\n    });\r\n   }\r\n  };\r\n };\r\n Seq.zip3=function(s1,s2,s3)\r\n {\r\n  return Seq.map3(function($1,$2,$3)\r\n  {\r\n   return[$1,$2,$3];\r\n  },s1,s2,s3);\r\n };\r\n Seq.fold2=function(f,s,s1,s2)\r\n {\r\n  return Arrays.fold2(f,s,Arrays.ofSeq(s1),Arrays.ofSeq(s2));\r\n };\r\n Seq.foldBack=function(f,s,state)\r\n {\r\n  return Arrays.foldBack(f,Arrays.ofSeq(s),state);\r\n };\r\n Seq.foldBack2=function(f,s1,s2,s)\r\n {\r\n  return Arrays.foldBack2(f,Arrays.ofSeq(s1),Arrays.ofSeq(s2),s);\r\n };\r\n Seq.iteri2=function(f,s1,s2)\r\n {\r\n  var i,e1,$1,e2;\r\n  i=0;\r\n  e1=Enumerator.Get(s1);\r\n  try\r\n  {\r\n   e2=Enumerator.Get(s2);\r\n   try\r\n   {\r\n    while(e1.MoveNext()&&e2.MoveNext())\r\n     {\r\n      f(i,e1.Current(),e2.Current());\r\n      i=i+1;\r\n     }\r\n    $1=void 0;\r\n   }\r\n   finally\r\n   {\r\n    if(typeof e2==\"object\"&&\"Dispose\"in e2)\r\n     e2.Dispose();\r\n   }\r\n   $1;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e1==\"object\"&&\"Dispose\"in e1)\r\n    e1.Dispose();\r\n  }\r\n };\r\n Seq.mapi2=function(f,s1,s2)\r\n {\r\n  return Seq.map3(f,Seq.initInfinite(Global.id),s1,s2);\r\n };\r\n Seq.mapFold=function(f,zero,s)\r\n {\r\n  return Arrays.mapFold(f,zero,Arrays.ofSeq(s));\r\n };\r\n Seq.mapFoldBack=function(f,s,zero)\r\n {\r\n  return Arrays.mapFoldBack(f,Arrays.ofSeq(s),zero);\r\n };\r\n Seq.permute=function(f,s)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Arrays.permute(f,Arrays.ofSeq(s));\r\n  });\r\n };\r\n Seq.reduceBack=function(f,s)\r\n {\r\n  return Arrays.reduceBack(f,Arrays.ofSeq(s));\r\n };\r\n Seq.replicate=function(size,value)\r\n {\r\n  size<0?Seq.nonNegative():void 0;\r\n  return Seq.delay(function()\r\n  {\r\n   return Seq.map(function()\r\n   {\r\n    return value;\r\n   },Operators.range(0,size-1));\r\n  });\r\n };\r\n Seq.rev=function(s)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Arrays.ofSeq(s).slice().reverse();\r\n  });\r\n };\r\n Seq.scanBack=function(f,l,s)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Arrays.scanBack(f,Arrays.ofSeq(l),s);\r\n  });\r\n };\r\n Seq.indexed=function(s)\r\n {\r\n  return Seq.mapi(function($1,$2)\r\n  {\r\n   return[$1,$2];\r\n  },s);\r\n };\r\n Seq.sortWith=function(f,s)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   var a;\r\n   a=Arrays.ofSeq(s);\r\n   Arrays.sortInPlaceWith(f,a);\r\n   return a;\r\n  });\r\n };\r\n Seq.tail=function(s)\r\n {\r\n  return Seq.skip(1,s);\r\n };\r\n Seq.seqEmpty=function()\r\n {\r\n  return Operators.FailWith(\"The input sequence was empty.\");\r\n };\r\n Stack.CopyTo=function(stack,array,index)\r\n {\r\n  Arrays.blit(array,0,array,index,Arrays.length(stack));\r\n };\r\n Stack.Contains=function(stack,el)\r\n {\r\n  return Seq.exists(function(y)\r\n  {\r\n   return Unchecked.Equals(el,y);\r\n  },stack);\r\n };\r\n Stack.Clear=function(stack)\r\n {\r\n  stack.splice(0,Arrays.length(stack));\r\n };\r\n Strings.RegexEscape=function(s)\r\n {\r\n  return s.replace(new Global.RegExp(\"[-\\\\/\\\\\\\\^$*+?.()|[\\\\]{}]\",\"g\"),\"\\\\$&\");\r\n };\r\n Strings.SplitWith=function(str,pat)\r\n {\r\n  return str.split(pat);\r\n };\r\n Strings.Join=function(sep,values)\r\n {\r\n  return values.join(sep);\r\n };\r\n Strings.TrimEndWS=function(s)\r\n {\r\n  return s.replace(new Global.RegExp(\"\\\\s+$\"),\"\");\r\n };\r\n Strings.TrimStartWS=function(s)\r\n {\r\n  return s.replace(new Global.RegExp(\"^\\\\s+\"),\"\");\r\n };\r\n Strings.Trim=function(s)\r\n {\r\n  return s.replace(new Global.RegExp(\"^\\\\s+\"),\"\").replace(new Global.RegExp(\"\\\\s+$\"),\"\");\r\n };\r\n Strings.StartsWith=function(t,s)\r\n {\r\n  return t.substring(0,s.length)==s;\r\n };\r\n Strings.Substring=function(s,ix,ct)\r\n {\r\n  return s.substr(ix,ct);\r\n };\r\n Strings.ReplaceOnce=function(string,search,replace)\r\n {\r\n  return string.replace(search,replace);\r\n };\r\n Strings.Remove=function(x,ix,ct)\r\n {\r\n  return x.substring(0,ix)+x.substring(ix+ct);\r\n };\r\n Strings.PadRightWith=function(s,n,c)\r\n {\r\n  return n>s.length?s+Global.Array(n-s.length+1).join(c):s;\r\n };\r\n Strings.PadLeftWith=function(s,n,c)\r\n {\r\n  return n>s.length?Global.Array(n-s.length+1).join(c)+s:s;\r\n };\r\n Strings.LastIndexOf=function(s,c,i)\r\n {\r\n  return s.lastIndexOf(c,i);\r\n };\r\n Strings.IsNullOrWhiteSpace=function(x)\r\n {\r\n  return x==null||(new Global.RegExp(\"^\\\\s*$\")).test(x);\r\n };\r\n Strings.IsNullOrEmpty=function(x)\r\n {\r\n  return x==null||x==\"\";\r\n };\r\n Strings.Insert=function(x,index,s)\r\n {\r\n  return x.substring(0,index-1)+s+x.substring(index);\r\n };\r\n Strings.IndexOf=function(s,c,i)\r\n {\r\n  return s.indexOf(c,i);\r\n };\r\n Strings.EndsWith=function(x,s)\r\n {\r\n  return x.substring(x.length-s.length)==s;\r\n };\r\n Strings.collect=function(f,s)\r\n {\r\n  return Arrays.init(s.length,function(i)\r\n  {\r\n   return f(s[i]);\r\n  }).join(\"\");\r\n };\r\n Strings.concat=function(separator,strings)\r\n {\r\n  return Arrays.ofSeq(strings).join(separator);\r\n };\r\n Strings.exists=function(f,s)\r\n {\r\n  return Seq.exists(f,Strings.protect(s));\r\n };\r\n Strings.forall=function(f,s)\r\n {\r\n  return Seq.forall(f,Strings.protect(s));\r\n };\r\n Strings.init=function(count,f)\r\n {\r\n  return Arrays.init(count,f).join(\"\");\r\n };\r\n Strings.iter=function(f,s)\r\n {\r\n  Seq.iter(f,Strings.protect(s));\r\n };\r\n Strings.iteri=function(f,s)\r\n {\r\n  Seq.iteri(f,Strings.protect(s));\r\n };\r\n Strings.length=function(s)\r\n {\r\n  return Strings.protect(s).length;\r\n };\r\n Strings.map=function(f,s)\r\n {\r\n  return Strings.collect(f,Strings.protect(s));\r\n };\r\n Strings.mapi=function(f,s)\r\n {\r\n  return Arrays.ofSeq(Seq.mapi(f,s)).join(\"\");\r\n };\r\n Strings.replicate=function(count,s)\r\n {\r\n  return Arrays.create(count,s).join(\"\");\r\n };\r\n Strings.protect=function(s)\r\n {\r\n  return s===null?\"\":s;\r\n };\r\n Strings.SFormat=function(format,args)\r\n {\r\n  return format.replace(new Global.RegExp(\"{(0|[1-9]\\\\d*)(?:,(-?[1-9]\\\\d*|0))?(?::(.*?))?}\",\"g\"),function($1,$2,w)\r\n  {\r\n   var r,w1,w2;\r\n   r=String(Arrays.get(args,+$2));\r\n   return!Unchecked.Equals(w,void 0)?(w1=+w,(w2=Math.abs(w1),w2>r.length?w1>0?Strings.PadLeft(r,w2):Strings.PadRight(r,w2):r)):r;\r\n  });\r\n };\r\n Strings.Filter=function(f,s)\r\n {\r\n  return Arrays.ofSeq(Seq.choose(function(c)\r\n  {\r\n   return f(c)?{\r\n    $:1,\r\n    $0:c\r\n   }:null;\r\n  },s)).join(\"\");\r\n };\r\n Strings.SplitStrings=function(s,sep,opts)\r\n {\r\n  return Strings.Split(s,new Global.RegExp(Strings.concat(\"|\",Arrays.map(Strings.RegexEscape,sep))),opts);\r\n };\r\n Strings.SplitChars=function(s,sep,opts)\r\n {\r\n  return Strings.Split(s,new Global.RegExp(\"[\"+Strings.RegexEscape(sep.join(\"\"))+\"]\"),opts);\r\n };\r\n Strings.Split=function(s,pat,opts)\r\n {\r\n  return opts===1?Arrays.filter(function(x)\r\n  {\r\n   return x!==\"\";\r\n  },Strings.SplitWith(s,pat)):Strings.SplitWith(s,pat);\r\n };\r\n Strings.TrimEnd=function(s,t)\r\n {\r\n  var i,go;\r\n  if(Unchecked.Equals(t,null)||t.length==0)\r\n   return Strings.TrimEndWS(s);\r\n  else\r\n   {\r\n    i=s.length-1;\r\n    go=true;\r\n    while(i>=0&&go)\r\n     (function()\r\n     {\r\n      var c;\r\n      c=s[i];\r\n      return Arrays.exists(function(y)\r\n      {\r\n       return c===y;\r\n      },t)?void(i=i-1):void(go=false);\r\n     }());\r\n    return Strings.Substring(s,0,i+1);\r\n   }\r\n };\r\n Strings.TrimStart=function(s,t)\r\n {\r\n  var i,go;\r\n  if(Unchecked.Equals(t,null)||t.length==0)\r\n   return Strings.TrimStartWS(s);\r\n  else\r\n   {\r\n    i=0;\r\n    go=true;\r\n    while(i<s.length&&go)\r\n     (function()\r\n     {\r\n      var c;\r\n      c=s[i];\r\n      return Arrays.exists(function(y)\r\n      {\r\n       return c===y;\r\n      },t)?void(i=i+1):void(go=false);\r\n     }());\r\n    return s.substring(i);\r\n   }\r\n };\r\n Strings.ToCharArrayRange=function(s,startIndex,length)\r\n {\r\n  return Arrays.init(length,function(i)\r\n  {\r\n   return s[startIndex+i];\r\n  });\r\n };\r\n Strings.ToCharArray=function(s)\r\n {\r\n  return Arrays.init(s.length,function(x)\r\n  {\r\n   return s[x];\r\n  });\r\n };\r\n Strings.ReplaceChar=function(s,oldC,newC)\r\n {\r\n  return Strings.Replace(s,oldC,newC);\r\n };\r\n Strings.Replace=function(subject,search,replace)\r\n {\r\n  function replaceLoop(subj)\r\n  {\r\n   var index,replaced,nextStartIndex;\r\n   index=subj.indexOf(search);\r\n   return index!==-1?(replaced=Strings.ReplaceOnce(subj,search,replace),(nextStartIndex=index+replace.length,Strings.Substring(replaced,0,index+replace.length)+replaceLoop(replaced.substring(nextStartIndex)))):subj;\r\n  }\r\n  return replaceLoop(subject);\r\n };\r\n Strings.PadRight=function(s,n)\r\n {\r\n  return Strings.PadRightWith(s,n,\" \");\r\n };\r\n Strings.PadLeft=function(s,n)\r\n {\r\n  return Strings.PadLeftWith(s,n,\" \");\r\n };\r\n Strings.CopyTo=function(s,o,d,off,ct)\r\n {\r\n  Arrays.blit(Strings.ToCharArray(s),o,d,off,ct);\r\n };\r\n Strings.Compare=function(x,y)\r\n {\r\n  return Unchecked.Compare(x,y);\r\n };\r\n Task=WebSharper.Task=Runtime.Class({\r\n  Start:function()\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   this.status===0?(this.status=2,Concurrency.scheduler().Fork(function()\r\n   {\r\n    var $1;\r\n    $this.status=3;\r\n    try\r\n    {\r\n     $this.Execute();\r\n     $this.status=5;\r\n    }\r\n    catch(m)\r\n    {\r\n     m instanceof OperationCanceledException&&(Unchecked.Equals(m.ct,$this.token)&&($1=m,true))?(console.log(\"Task cancellation caught:\",$1),$this.exc=new AggregateException.New$3([$1]),$this.status=6):(console.log(\"Task error caught:\",m),$this.exc=new AggregateException.New$3([m]),$this.status=7);\r\n    }\r\n    $this.RunContinuations();\r\n   })):Operators.InvalidOp(\"Task not in initial state\");\r\n  },\r\n  StartContinuation:function()\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   this.status===1?(this.status=2,Concurrency.scheduler().Fork(function()\r\n   {\r\n    if($this.status===2)\r\n     {\r\n      $this.status=3;\r\n      try\r\n      {\r\n       $this.Execute();\r\n       $this.status=5;\r\n      }\r\n      catch(e)\r\n      {\r\n       $this.exc=new AggregateException.New$3([e]);\r\n       $this.status=7;\r\n      }\r\n      $this.RunContinuations();\r\n     }\r\n   })):void 0;\r\n  },\r\n  ContinueWith:function(func,ct)\r\n  {\r\n   var $this,res;\r\n   $this=this;\r\n   res=new Task1.New$4(function()\r\n   {\r\n    return func($this);\r\n   },ct,1,null,void 0);\r\n   this.get_IsCompleted()?res.StartContinuation():this.continuations.push(res);\r\n   return res;\r\n  },\r\n  ContinueWith$1:function(action,ct)\r\n  {\r\n   var $this,res;\r\n   $this=this;\r\n   res=new Task.New$4(function()\r\n   {\r\n    return action($this);\r\n   },ct,1,null);\r\n   this.get_IsCompleted()?res.StartContinuation():this.continuations.push(res);\r\n   return res;\r\n  },\r\n  RunContinuations:function()\r\n  {\r\n   var a,i,$1;\r\n   a=this.continuations;\r\n   for(i=0,$1=a.length-1;i<=$1;i++)Arrays.get(a,i).StartContinuation();\r\n  },\r\n  OnCompleted:function(cont)\r\n  {\r\n   if(this.get_IsCompleted())\r\n    cont();\r\n   else\r\n    {\r\n     this.get_Status()===0?this.Start():void 0;\r\n     this.ContinueWith$1(function()\r\n     {\r\n      return cont();\r\n     },Concurrency.noneCT());\r\n    }\r\n  },\r\n  get_Status:function()\r\n  {\r\n   return this.status;\r\n  },\r\n  get_IsFaulted:function()\r\n  {\r\n   return this.status===7;\r\n  },\r\n  get_IsCompleted:function()\r\n  {\r\n   return this.status===5||this.status===7||this.status===6;\r\n  },\r\n  get_IsCanceled:function()\r\n  {\r\n   return this.status===6;\r\n  },\r\n  get_Exception:function()\r\n  {\r\n   return this.exc;\r\n  },\r\n  Execute:function()\r\n  {\r\n   this.action();\r\n  }\r\n },Obj,Task);\r\n Task.Yield=function()\r\n {\r\n  return new Task.New$3(function()\r\n  {\r\n   return null;\r\n  });\r\n };\r\n Task.WhenAll=function(tasks)\r\n {\r\n  var target,completed,results,tcs,i,$1;\r\n  target=Arrays.length(tasks);\r\n  completed=[0];\r\n  results=new Global.Array(target);\r\n  tcs=new TaskCompletionSource.New();\r\n  for(i=0,$1=target-1;i<=$1;i++)(function(i$1)\r\n  {\r\n   Arrays.get(tasks,i).ContinueWith$1(function(t)\r\n   {\r\n    return t.get_IsFaulted()?void tcs.TrySetException$1(t.get_Exception()):t.get_IsCanceled()?void tcs.TrySetCanceled$1():(completed[0]++,results[i$1]=t.get_Result(),completed[0]===target?tcs.SetResult(results):null);\r\n   },Concurrency.noneCT());\r\n  }(i));\r\n  return tcs.get_Task();\r\n };\r\n Task.WhenAll$1=function(tasks)\r\n {\r\n  var target,completed,tcs,i,$1;\r\n  target=Arrays.length(tasks);\r\n  completed=[0];\r\n  tcs=new TaskCompletionSource.New();\r\n  for(i=0,$1=target-1;i<=$1;i++)Arrays.get(tasks,i).ContinueWith$1(function(t)\r\n  {\r\n   return t.get_IsFaulted()?void tcs.TrySetException$1(t.get_Exception()):t.get_IsCanceled()?void tcs.TrySetCanceled$1():(completed[0]++,completed[0]===target?void tcs.TrySetResult():null);\r\n  },Concurrency.noneCT());\r\n  return tcs.get_Task();\r\n };\r\n Task.WhenAny=function(tasks)\r\n {\r\n  var tcs,i,$1;\r\n  tcs=new TaskCompletionSource.New();\r\n  for(i=0,$1=tasks.length-1;i<=$1;i++)Arrays.get(tasks,i).ContinueWith(function(t)\r\n  {\r\n   tcs.TrySetResult(t);\r\n  },Concurrency.noneCT());\r\n  return tcs.get_Task();\r\n };\r\n Task.WhenAny$1=function(tasks)\r\n {\r\n  var tcs,i,$1;\r\n  tcs=new TaskCompletionSource.New();\r\n  for(i=0,$1=tasks.length-1;i<=$1;i++)Arrays.get(tasks,i).ContinueWith$1(function(t)\r\n  {\r\n   tcs.TrySetResult(t);\r\n  },Concurrency.noneCT());\r\n  return tcs.get_Task();\r\n };\r\n Task.Delay=function(time,ct)\r\n {\r\n  return Concurrency.StartAsTask(Concurrency.Sleep(time),{\r\n   $:1,\r\n   $0:ct\r\n  });\r\n };\r\n Task.Delay$1=function(time)\r\n {\r\n  return Concurrency.StartAsTask(Concurrency.Sleep(time),null);\r\n };\r\n Task.Run=function(func,ct)\r\n {\r\n  var task;\r\n  task=func();\r\n  return ct.c?Task.FromCanceled(ct):(task.get_Status()===0?task.Start():void 0,task);\r\n };\r\n Task.Run$1=function(func,ct)\r\n {\r\n  var res;\r\n  res=new Task1.New$4(func,ct,0,null,void 0);\r\n  res.Start();\r\n  return res;\r\n };\r\n Task.Run$2=function(func,ct)\r\n {\r\n  var task;\r\n  task=func();\r\n  return ct.c?Task.FromCanceled$1(ct):(task.get_Status()===0?task.Start():void 0,task);\r\n };\r\n Task.Run$3=function(action,ct)\r\n {\r\n  var res;\r\n  res=new Task.New$4(action,ct,0,null);\r\n  res.Start();\r\n  return res;\r\n };\r\n Task.FromResult=function(res)\r\n {\r\n  return new Task1.New$4(null,Concurrency.noneCT(),5,null,res);\r\n };\r\n Task.FromException=function(exc)\r\n {\r\n  return new Task1.New$4(null,Concurrency.noneCT(),7,new AggregateException.New$3([exc]),null);\r\n };\r\n Task.FromException$1=function(exc)\r\n {\r\n  return new Task.New$4(null,Concurrency.noneCT(),7,new AggregateException.New$3([exc]));\r\n };\r\n Task.FromCanceled=function(ct)\r\n {\r\n  return new Task1.New$4(null,ct,6,new AggregateException.New$3([new TaskCanceledException.New()]),null);\r\n };\r\n Task.FromCanceled$1=function(ct)\r\n {\r\n  return new Task.New$4(null,ct,6,new AggregateException.New$3([new TaskCanceledException.New()]));\r\n };\r\n Task.New=Runtime.Ctor(function(action,obj,ct)\r\n {\r\n  Task.New$4.call(this,function()\r\n  {\r\n   return action(obj);\r\n  },ct,0,null);\r\n },Task);\r\n Task.New$1=Runtime.Ctor(function(action,obj)\r\n {\r\n  Task.New$4.call(this,function()\r\n  {\r\n   return action(obj);\r\n  },Concurrency.noneCT(),0,null);\r\n },Task);\r\n Task.New$2=Runtime.Ctor(function(action,ct)\r\n {\r\n  Task.New$4.call(this,action,ct,0,null);\r\n },Task);\r\n Task.New$3=Runtime.Ctor(function(action)\r\n {\r\n  Task.New$4.call(this,action,Concurrency.noneCT(),0,null);\r\n },Task);\r\n Task.New$4=Runtime.Ctor(function(action,token,status,exc)\r\n {\r\n  Obj.New.call(this);\r\n  this.action=action;\r\n  this.token=token;\r\n  this.status=status;\r\n  this.continuations=[];\r\n  this.exc=exc;\r\n },Task);\r\n Task1=WebSharper.Task1=Runtime.Class({\r\n  Execute:function()\r\n  {\r\n   this.result=this.func();\r\n  },\r\n  get_Result:function()\r\n  {\r\n   var $1;\r\n   switch(this.get_Status())\r\n   {\r\n    case 5:\r\n     return this.result;\r\n    case 7:\r\n    case 6:\r\n     throw this.get_Exception();\r\n    default:\r\n     return Operators.InvalidOp(\"Task has not been completed, has no Result\");\r\n   }\r\n  }\r\n },Task,Task1);\r\n Task1.New=Runtime.Ctor(function(func,obj,ct)\r\n {\r\n  Task1.New$4.call(this,function()\r\n  {\r\n   return func(obj);\r\n  },ct,0,null,void 0);\r\n },Task1);\r\n Task1.New$1=Runtime.Ctor(function(func,obj)\r\n {\r\n  Task1.New$4.call(this,function()\r\n  {\r\n   return func(obj);\r\n  },Concurrency.noneCT(),0,null,void 0);\r\n },Task1);\r\n Task1.New$2=Runtime.Ctor(function(func,ct)\r\n {\r\n  Task1.New$4.call(this,func,ct,0,null,void 0);\r\n },Task1);\r\n Task1.New$3=Runtime.Ctor(function(func)\r\n {\r\n  Task1.New$4.call(this,func,Concurrency.noneCT(),0,null,void 0);\r\n },Task1);\r\n Task1.New$4=Runtime.Ctor(function(func,token,status,exc,result)\r\n {\r\n  Task.New$4.call(this,null,token,status,exc);\r\n  this.func=func;\r\n  this.result=result;\r\n },Task1);\r\n TaskCompletionSource=WebSharper.TaskCompletionSource=Runtime.Class({\r\n  TrySetResult:function(res)\r\n  {\r\n   return!this.task.get_IsCompleted()&&(this.task.status=5,this.task.result=res,this.task.RunContinuations(),true);\r\n  },\r\n  TrySetException:function(exs)\r\n  {\r\n   return this.TrySetException$1(new AggregateException.New$2(exs));\r\n  },\r\n  TrySetException$1:function(exc)\r\n  {\r\n   return!this.task.get_IsCompleted()&&(this.task.status=7,this.task.exc=new AggregateException.New$3([exc]),this.task.RunContinuations(),true);\r\n  },\r\n  TrySetCanceled:function(ct)\r\n  {\r\n   return!this.task.get_IsCompleted()&&(this.task.status=6,this.task.token=ct,this.task.RunContinuations(),true);\r\n  },\r\n  TrySetCanceled$1:function()\r\n  {\r\n   return!this.task.get_IsCompleted()&&(this.task.status=6,this.task.RunContinuations(),true);\r\n  },\r\n  SetResult:function(res)\r\n  {\r\n   this.task.get_IsCompleted()?Operators.FailWith(\"Task already completed.\"):void 0;\r\n   this.task.status=5;\r\n   this.task.result=res;\r\n   this.task.RunContinuations();\r\n  },\r\n  SetException:function(exs)\r\n  {\r\n   this.SetException$1(new AggregateException.New$2(exs));\r\n  },\r\n  SetException$1:function(exc)\r\n  {\r\n   this.task.get_IsCompleted()?Operators.FailWith(\"Task already completed.\"):void 0;\r\n   this.task.status=7;\r\n   this.task.exc=new AggregateException.New$3([exc]);\r\n   this.task.RunContinuations();\r\n  },\r\n  SetCanceled:function()\r\n  {\r\n   this.task.get_IsCompleted()?Operators.FailWith(\"Task already completed.\"):void 0;\r\n   this.task.status=6;\r\n   this.task.RunContinuations();\r\n  },\r\n  get_Task:function()\r\n  {\r\n   return this.task;\r\n  }\r\n },Obj,TaskCompletionSource);\r\n TaskCompletionSource.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n  this.task=new Task1.New$4(null,Concurrency.noneCT(),1,null,void 0);\r\n },TaskCompletionSource);\r\n Unchecked.Hash=function(o)\r\n {\r\n  var m;\r\n  m=typeof o;\r\n  return m==\"function\"?0:m==\"boolean\"?o?1:0:m==\"number\"?o:m==\"string\"?Unchecked.hashString(o):m==\"object\"?o==null?0:o instanceof Global.Array?Unchecked.hashArray(o):Unchecked.hashObject(o):0;\r\n };\r\n Unchecked.hashObject=function(o)\r\n {\r\n  var h,k;\r\n  if(\"GetHashCode\"in o)\r\n   return o.GetHashCode();\r\n  else\r\n   {\r\n    h=[0];\r\n    for(var k$1 in o)if(function(key)\r\n    {\r\n     h[0]=Unchecked.hashMix(Unchecked.hashMix(h[0],Unchecked.hashString(key)),Unchecked.Hash(o[key]));\r\n     return false;\r\n    }(k$1))\r\n     break;\r\n    return h[0];\r\n   }\r\n };\r\n Unchecked.hashString=function(s)\r\n {\r\n  var hash,i,$1;\r\n  if(s===null)\r\n   return 0;\r\n  else\r\n   {\r\n    hash=5381;\r\n    for(i=0,$1=s.length-1;i<=$1;i++)hash=Unchecked.hashMix(hash,s[i].charCodeAt());\r\n    return hash;\r\n   }\r\n };\r\n Unchecked.hashArray=function(o)\r\n {\r\n  var h,i,$1;\r\n  h=-34948909;\r\n  for(i=0,$1=Arrays.length(o)-1;i<=$1;i++)h=Unchecked.hashMix(h,Unchecked.Hash(Arrays.get(o,i)));\r\n  return h;\r\n };\r\n Unchecked.hashMix=function(x,y)\r\n {\r\n  return(x<<5)+x+y;\r\n };\r\n Unchecked.Equals=function(a,b)\r\n {\r\n  var m,eqR,k,k$1;\r\n  if(a===b)\r\n   return true;\r\n  else\r\n   {\r\n    m=typeof a;\r\n    if(m==\"object\")\r\n    {\r\n     if(a===null||a===void 0||b===null||b===void 0)\r\n      return false;\r\n     else\r\n      if(\"Equals\"in a)\r\n       return a.Equals(b);\r\n      else\r\n       if(a instanceof Global.Array&&b instanceof Global.Array)\r\n        return Unchecked.arrayEquals(a,b);\r\n       else\r\n        if(a instanceof Date&&b instanceof Date)\r\n         return Unchecked.dateEquals(a,b);\r\n        else\r\n         {\r\n          eqR=[true];\r\n          for(var k$2 in a)if(function(k$3)\r\n          {\r\n           eqR[0]=!a.hasOwnProperty(k$3)||b.hasOwnProperty(k$3)&&Unchecked.Equals(a[k$3],b[k$3]);\r\n           return!eqR[0];\r\n          }(k$2))\r\n           break;\r\n          if(eqR[0])\r\n           {\r\n            for(var k$3 in b)if(function(k$4)\r\n            {\r\n             eqR[0]=!b.hasOwnProperty(k$4)||a.hasOwnProperty(k$4);\r\n             return!eqR[0];\r\n            }(k$3))\r\n             break;\r\n           }\r\n          return eqR[0];\r\n         }\r\n    }\r\n    else\r\n     return m==\"function\"&&(\"$Func\"in a?a.$Func===b.$Func&&a.$Target===b.$Target:\"$Invokes\"in a&&\"$Invokes\"in b&&Unchecked.arrayEquals(a.$Invokes,b.$Invokes));\r\n   }\r\n };\r\n Unchecked.dateEquals=function(a,b)\r\n {\r\n  return a.getTime()===b.getTime();\r\n };\r\n Unchecked.arrayEquals=function(a,b)\r\n {\r\n  var eq,i;\r\n  if(Arrays.length(a)===Arrays.length(b))\r\n   {\r\n    eq=true;\r\n    i=0;\r\n    while(eq&&i<Arrays.length(a))\r\n     {\r\n      !Unchecked.Equals(Arrays.get(a,i),Arrays.get(b,i))?eq=false:void 0;\r\n      i=i+1;\r\n     }\r\n    return eq;\r\n   }\r\n  else\r\n   return false;\r\n };\r\n Unchecked.Compare=function(a,b)\r\n {\r\n  var $1,m,$2,cmp,k,k$1;\r\n  if(a===b)\r\n   return 0;\r\n  else\r\n   {\r\n    m=typeof a;\r\n    switch(m==\"function\"?1:m==\"boolean\"?2:m==\"number\"?2:m==\"string\"?2:m==\"object\"?3:0)\r\n    {\r\n     case 0:\r\n      return typeof b==\"undefined\"?0:-1;\r\n     case 1:\r\n      return Operators.FailWith(\"Cannot compare function values.\");\r\n     case 2:\r\n      return a<b?-1:1;\r\n     case 3:\r\n      if(a===null)\r\n       $2=-1;\r\n      else\r\n       if(b===null)\r\n        $2=1;\r\n       else\r\n        if(\"CompareTo\"in a)\r\n         $2=a.CompareTo(b);\r\n        else\r\n         if(\"CompareTo0\"in a)\r\n          $2=a.CompareTo0(b);\r\n         else\r\n          if(a instanceof Global.Array&&b instanceof Global.Array)\r\n           $2=Unchecked.compareArrays(a,b);\r\n          else\r\n           if(a instanceof Date&&b instanceof Date)\r\n            $2=Unchecked.compareDates(a,b);\r\n           else\r\n            {\r\n             cmp=[0];\r\n             for(var k$2 in a)if(function(k$3)\r\n             {\r\n              return!a.hasOwnProperty(k$3)?false:!b.hasOwnProperty(k$3)?(cmp[0]=1,true):(cmp[0]=Unchecked.Compare(a[k$3],b[k$3]),cmp[0]!==0);\r\n             }(k$2))\r\n              break;\r\n             if(cmp[0]===0)\r\n              {\r\n               for(var k$3 in b)if(function(k$4)\r\n               {\r\n                return!b.hasOwnProperty(k$4)?false:!a.hasOwnProperty(k$4)&&(cmp[0]=-1,true);\r\n               }(k$3))\r\n                break;\r\n              }\r\n             $2=cmp[0];\r\n            }\r\n      return $2;\r\n    }\r\n   }\r\n };\r\n Unchecked.compareDates=function(a,b)\r\n {\r\n  return Unchecked.Compare(a.getTime(),b.getTime());\r\n };\r\n Unchecked.compareArrays=function(a,b)\r\n {\r\n  var cmp,i;\r\n  if(Arrays.length(a)<Arrays.length(b))\r\n   return -1;\r\n  else\r\n   if(Arrays.length(a)>Arrays.length(b))\r\n    return 1;\r\n   else\r\n    {\r\n     cmp=0;\r\n     i=0;\r\n     while(cmp===0&&i<Arrays.length(a))\r\n      {\r\n       cmp=Unchecked.Compare(Arrays.get(a,i),Arrays.get(b,i));\r\n       i=i+1;\r\n      }\r\n     return cmp;\r\n    }\r\n };\r\n FSharpValueOption=Core.FSharpValueOption=Runtime.Class({\r\n  get_Value:function()\r\n  {\r\n   return this.$==1?this.$0:Operators.InvalidOp(\"ValueOption.Value\");\r\n  }\r\n },null,FSharpValueOption);\r\n FSharpValueOption.ValueNone=new FSharpValueOption({\r\n  $:0\r\n });\r\n FSharpValueOption.get_Test=function()\r\n {\r\n  return(new FSharpValueOption({\r\n   $:1,\r\n   $0:2\r\n  })).get_Value();\r\n };\r\n Numeric.TryParseBool=function(s,r)\r\n {\r\n  var m;\r\n  m=s.toLowerCase();\r\n  return m===\"true\"?(r.set(true),true):m===\"false\"&&(r.set(false),true);\r\n };\r\n Numeric.ParseBool=function(s)\r\n {\r\n  var m;\r\n  m=s.toLowerCase();\r\n  if(m===\"true\")\r\n   return true;\r\n  else\r\n   if(m===\"false\")\r\n    return false;\r\n   else\r\n    throw new FormatException.New$1(\"String was not recognized as a valid Boolean.\");\r\n };\r\n Numeric.TryParse=function(s,min,max,r)\r\n {\r\n  var x,ok;\r\n  x=+s;\r\n  ok=x===x-x%1&&x>=min&&x<=max;\r\n  ok?r.set(x):void 0;\r\n  return ok;\r\n };\r\n Numeric.Parse=function(s,min,max,overflowMsg)\r\n {\r\n  var x;\r\n  x=+s;\r\n  if(x!==x-x%1)\r\n   throw new FormatException.New$1(\"Input string was not in a correct format.\");\r\n  else\r\n   if(x<min||x>max)\r\n    throw new OverflowException.New$1(overflowMsg);\r\n   else\r\n    return x;\r\n };\r\n Numeric.ParseByte=function(s)\r\n {\r\n  return Numeric.Parse(s,0,255,\"Value was either too large or too small for an unsigned byte.\");\r\n };\r\n Numeric.TryParseByte=function(s,r)\r\n {\r\n  return Numeric.TryParse(s,0,255,r);\r\n };\r\n Numeric.ParseSByte=function(s)\r\n {\r\n  return Numeric.Parse(s,-128,127,\"Value was either too large or too small for a signed byte.\");\r\n };\r\n Numeric.TryParseSByte=function(s,r)\r\n {\r\n  return Numeric.TryParse(s,-128,127,r);\r\n };\r\n Numeric.ParseInt16=function(s)\r\n {\r\n  return Numeric.Parse(s,-32768,32767,\"Value was either too large or too small for an Int16.\");\r\n };\r\n Numeric.TryParseInt16=function(s,r)\r\n {\r\n  return Numeric.TryParse(s,-32768,32767,r);\r\n };\r\n Numeric.ParseInt32=function(s)\r\n {\r\n  return Numeric.Parse(s,-2147483648,2147483647,\"Value was either too large or too small for an Int32.\");\r\n };\r\n Numeric.TryParseInt32=function(s,r)\r\n {\r\n  return Numeric.TryParse(s,-2147483648,2147483647,r);\r\n };\r\n Numeric.ParseUInt16=function(s)\r\n {\r\n  return Numeric.Parse(s,0,65535,\"Value was either too large or too small for an UInt16.\");\r\n };\r\n Numeric.TryParseUInt16=function(s,r)\r\n {\r\n  return Numeric.TryParse(s,0,65535,r);\r\n };\r\n Numeric.ParseUInt32=function(s)\r\n {\r\n  return Numeric.Parse(s,0,4294967295,\"Value was either too large or too small for an UInt32.\");\r\n };\r\n Numeric.TryParseUInt32=function(s,r)\r\n {\r\n  return Numeric.TryParse(s,0,4294967295,r);\r\n };\r\n Numeric.ParseInt64=function(s)\r\n {\r\n  return Numeric.Parse(s,-9223372036854775808,9223372036854775807,\"Value was either too large or too small for an Int64.\");\r\n };\r\n Numeric.TryParseInt64=function(s,r)\r\n {\r\n  return Numeric.TryParse(s,-9223372036854775808,9223372036854775807,r);\r\n };\r\n Numeric.ParseUInt64=function(s)\r\n {\r\n  return Numeric.Parse(s,0,18446744073709551615,\"Value was either too large or too small for an UInt64.\");\r\n };\r\n Numeric.TryParseUInt64=function(s,r)\r\n {\r\n  return Numeric.TryParse(s,0,18446744073709551615,r);\r\n };\r\n}());\r\n"
    }
  ]
}
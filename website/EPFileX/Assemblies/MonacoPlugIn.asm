{
  "asName": "MonacoPlugIn",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm",
    "WebSharper.Web.asm",
    "WebSharper.Sitelets.asm",
    "WebSharper.Control.asm",
    "WebSharper.UI.asm",
    "WebSharper.UI.Templating.Runtime.asm",
    "LayoutEngine.asm"
  ],
  "resources": [
    "<script src=\"/EPFileX/monaco/package/min/vs/loader.js\" type=\"text/javascript\" charset=\"UTF-8\"></script>"
  ],
  "modules": [
    {
      "moName": "FsRootDll.Library+ResultMessage`1",
      "methods": [
        {
          "meName": "_unique_NoMsg",
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
      "moName": "FsRootDll.Library+ResultMessageHelpers",
      "methods": [
        {
          "meName": "infof",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "PrintfFormat<'a, unit, string, FsRootDll.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "warningf",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "PrintfFormat<'a, unit, string, FsRootDll.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "errorMsgf",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "PrintfFormat<'a, unit, string, FsRootDll.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.Library+ResultMessage",
      "methods": [
        {
          "meName": "summarizedI",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "summarizedW",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "summarized",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "summarizedF",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> (int * int * int))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "summaryF",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> (int * int * int))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "reduceMsgs",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+ResultMessage<'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "IEnumerable<FsRootDll.Library+ResultMessage<'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "addMsg",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+ResultMessage<'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "countI",
          "isField": 0,
          "type": {
            "tName": "(int * int * int)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "countW",
          "isField": 0,
          "type": {
            "tName": "(int * int * int)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "count",
          "isField": 0,
          "type": {
            "tName": "(int * int * int)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "countF",
          "isField": 0,
          "type": {
            "tName": "(int * int * int)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> (int * int * int))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "isFatalW",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "isFatal",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "isFatalF",
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
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "isWarningOrInfoW",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "isWarningOrInfo",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "isWarningOrInfoF",
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
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "isInfoI",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "isInfo",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "isInfoF",
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
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "freeMessageI",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+ResultMessage<'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "freeMessageW",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+ResultMessage<'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "freeMessage",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+ResultMessage<'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "freeMessageF",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+ResultMessage<'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "('a -> FsRootDll.Library+ResultMessage<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "bindMessage",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+ResultMessage<'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "('a -> FsRootDll.Library+ResultMessage<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "exclnoMsg",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<FsRootDll.Library+ResultMessage<'a>>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<FsRootDll.Library+ResultMessage<'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "noMsg",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.Library+Monads+Seq",
      "methods": [
        {
          "meName": "ofOption",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
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
          "meName": "absorbR",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<Result<'a, 'b>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "absorbO",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<Option<'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "insertR",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<Result<'b, 'c>>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Result<'a, 'c>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "insertO",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<Option<'b>>",
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
          "meName": "rtn",
          "isField": 1,
          "type": {
            "tName": "('a -> IEnumerable<'a>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRootDll.Library+Monads+Async",
      "methods": [
        {
          "meName": "insertR",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<Async<'a>, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "insertO",
          "isField": 0,
          "type": {
            "tName": "Async<Option<'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Option<Async<'a>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "sequenceSeq",
          "isField": 0,
          "type": {
            "tName": "Async<IEnumerable<'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<Async<'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "traverseSeq",
          "isField": 0,
          "type": {
            "tName": "Async<IEnumerable<'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "op_GreaterGreaterEquals",
          "isField": 0,
          "type": {
            "tName": "Async<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<'b>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "sleepThen",
          "isField": 0,
          "type": {
            "tName": "Async<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> 'a)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "apply",
          "isField": 0,
          "type": {
            "tName": "Async<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<('a -> 'b)>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.Library+Monads+Result+Builder",
      "methods": []
    },
    {
      "moName": "FsRootDll.Library+Monads+Result+Operators",
      "methods": [
        {
          "meName": "result",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Result+Builder",
            "asm": "MonacoPlugIn"
          },
          "parms": []
        },
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "Result<'a, 'b>",
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
          "meName": "op_GreaterEqualsGreater",
          "isField": 0,
          "type": {
            "tName": "Result<'d, 'c>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Result<'b, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> Result<'d, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "op_RightShift",
          "isField": 0,
          "type": {
            "tName": "Result<'d, 'c>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Result<'b, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> 'd)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "op_GreaterGreaterEquals",
          "isField": 0,
          "type": {
            "tName": "Result<'c, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<'a, 'b>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Result<'c, 'b>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_BarGreaterGreater",
          "isField": 0,
          "type": {
            "tName": "Result<'c, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<'a, 'b>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> 'c)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.Library+Monads+Result+BuilderP",
      "methods": []
    },
    {
      "moName": "FsRootDll.Library+Monads+Result",
      "methods": [
        {
          "meName": "resultP",
          "isField": 1,
          "type": {
            "tName": "BuilderP",
            "asm": "MonacoPlugIn"
          },
          "parms": []
        },
        {
          "meName": "iterP",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(FsRootDll.Library+ResultMessage<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Result<'b, FsRootDll.Library+ResultMessage<'a>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "mapP",
          "isField": 0,
          "type": {
            "tName": "Result<'b, FsRootDll.Library+ResultMessage<'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Result<'a, FsRootDll.Library+ResultMessage<'c>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "bindP",
          "isField": 0,
          "type": {
            "tName": "Result<'b, FsRootDll.Library+ResultMessage<'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Result<'b, FsRootDll.Library+ResultMessage<'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Result<'a, FsRootDll.Library+ResultMessage<'c>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "freeMessage",
          "isField": 0,
          "type": {
            "tName": "Result<'a, FsRootDll.Library+ResultMessage<'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<'a, FsRootDll.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "result",
          "isField": 1,
          "type": {
            "tName": "Builder",
            "asm": "MonacoPlugIn"
          },
          "parms": []
        },
        {
          "meName": "sequenceSeq",
          "isField": 0,
          "type": {
            "tName": "Result<IEnumerable<'a>, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<Result<'a, 'b>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "traverseSeq",
          "isField": 0,
          "type": {
            "tName": "Result<IEnumerable<'b>, 'c>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Result<'b, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "op_GreaterGreaterEquals",
          "isField": 0,
          "type": {
            "tName": "Result<'c, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<'a, 'b>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Result<'c, 'b>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "absorbO",
          "isField": 0,
          "type": {
            "tName": "Result<'b, 'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> 'a)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Result<Option<'b>, 'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "insertO",
          "isField": 0,
          "type": {
            "tName": "Result<Option<'a>, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Option<Result<'a, 'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ofOption",
          "isField": 0,
          "type": {
            "tName": "Result<'b, 'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> 'a)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "get",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "Result<'a, Object>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "iter",
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
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Result<'b, 'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "failIfFalse",
          "isField": 0,
          "type": {
            "tName": "Result<unit, 'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "bool",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "failIfTrue",
          "isField": 0,
          "type": {
            "tName": "Result<unit, 'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "bool",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "defaultValue",
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
              "tName": "Result<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "defaultWith",
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
              "tName": "Result<'b, 'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "toOption",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "flatten",
          "isField": 0,
          "type": {
            "tName": "Result<'a, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<Result<'a, 'b>, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "join",
          "isField": 0,
          "type": {
            "tName": "Result<'a, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<Result<'a, 'b>, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "Result<'a, 'b>",
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
          "meName": "errorf",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "PrintfFormat<'a, unit, string, Result<'b, string>>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.Library+Monads+ResultM`2",
      "methods": []
    },
    {
      "moName": "FsRootDll.Library+Monads+ResultM+CheckError`1",
      "methods": []
    },
    {
      "moName": "FsRootDll.Library+Monads+ResultM+Builder",
      "methods": []
    },
    {
      "moName": "FsRootDll.Library+Monads+ResultM+Operators",
      "methods": [
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "op_GreaterEqualsGreater",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'d, 'c>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "('a -> FsRootDll.Library+Monads+ResultM<'b, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> FsRootDll.Library+Monads+ResultM<'d, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "op_RightShift",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'d, 'c>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "('a -> FsRootDll.Library+Monads+ResultM<'b, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> 'd)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "op_GreaterGreaterEquals",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'c, 'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "('a -> FsRootDll.Library+Monads+ResultM<'c, 'b>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_BarGreaterGreater",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'c, 'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "('a -> 'c)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.Library+Monads+ResultM",
      "methods": [
        {
          "meName": "sequenceSeq",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<IEnumerable<'a>, 'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "IEnumerable<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "traverseSeq",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<IEnumerable<'b>, 'c>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "('a -> FsRootDll.Library+Monads+ResultM<'b, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "op_GreaterGreaterEquals",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'c, 'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "('a -> FsRootDll.Library+Monads+ResultM<'c, 'b>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "failIfFatalMsgW",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "failIfFatalMsg",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "failIfFatalMsgF",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'b, 'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'b, 'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "addMsg",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'b, 'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'b, 'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "absorbO",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'b, 'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "(unit -> FsRootDll.Library+ResultMessage<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+Monads+ResultM<Option<'b>, 'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "insertO",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<Option<'a>, 'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "Option<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ofResult",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "Result<'a, FsRootDll.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ofOption",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'b, 'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "(unit -> FsRootDll.Library+ResultMessage<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "get",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "iter",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(FsRootDll.Library+ResultMessage<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'b, 'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "mapP",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'b, 'c>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'a, 'c>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "check",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'b, 'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "CheckError<'a>",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'b, 'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "bindM",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "(unit -> FsRootDll.Library+Monads+ResultM<'a, 'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+ResultMessage<'b>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "bindP",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'b, 'c>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "('a -> FsRootDll.Library+Monads+ResultM<'b, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'a, 'c>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "bind",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'b, 'c>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "('a -> FsRootDll.Library+Monads+ResultM<'b, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'a, 'c>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "mapMessage",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'c, 'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "(FsRootDll.Library+ResultMessage<'a> -> FsRootDll.Library+ResultMessage<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'c, 'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "map",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'b, 'c>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'a, 'c>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "defaultValue",
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
              "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "defaultWith",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "(FsRootDll.Library+ResultMessage<'a> -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'b, 'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "toOption",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "toResultD",
          "isField": 0,
          "type": {
            "tName": "Result<('a * FsRootDll.Library+ResultMessage<'b>), FsRootDll.Library+ResultMessage<'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "toResult",
          "isField": 0,
          "type": {
            "tName": "Result<'a, FsRootDll.Library+ResultMessage<'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "freeMessage",
          "isField": 0,
          "type": {
            "tName": "Result<'a, FsRootDll.Library+ResultMessage<'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<'a, FsRootDll.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "rtnr",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "Result<'a, FsRootDll.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "rtnM",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<unit, 'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM<'a, 'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "checkErrorW",
          "isField": 0,
          "type": {
            "tName": "CheckError<'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": []
        },
        {
          "meName": "checkError",
          "isField": 0,
          "type": {
            "tName": "CheckError<'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRootDll.Library+Monads+ResultMAutoOpen",
      "methods": [
        {
          "meName": "resultM",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+ResultM+Builder",
            "asm": "MonacoPlugIn"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRootDll.Library+Monads+AsyncResultM+AsyncResultMBuilder",
      "methods": []
    },
    {
      "moName": "FsRootDll.Library+Monads+AsyncResultM+Operators",
      "methods": [
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
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
          "meName": "op_GreaterEqualsGreater",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'d, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> Async<FsRootDll.Library+Monads+ResultM<'d, 'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "op_GreaterMinusGreater",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'d, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> 'd)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "op_GreaterGreaterEquals",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'c, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<FsRootDll.Library+Monads+ResultM<'c, 'b>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_BarGreaterGreater",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'c, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> 'c)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.Library+Monads+AsyncResultM",
      "methods": [
        {
          "meName": "getResultM",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<FsRootDll.Library+Monads+ResultM<'a, 'b>, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "absorbO",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'b, 'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> FsRootDll.Library+ResultMessage<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<FsRootDll.Library+Monads+ResultM<Option<'b>, 'a>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "absorbR",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<FsRootDll.Library+Monads+ResultM<FsRootDll.Library+Monads+ResultM<'a, 'b>, 'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "insertR",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<Result<'a, 'c>, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>, 'c>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "insertO",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<Option<'a>, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Option<Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "sequenceSeq",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<IEnumerable<'a>, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "traverseSeq",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<IEnumerable<'b>, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "op_GreaterGreaterEquals",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'c, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<FsRootDll.Library+Monads+ResultM<'c, 'b>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "whileLoop",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<unit, 'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> Async<FsRootDll.Library+Monads+ResultM<unit, 'a>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "map",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'c>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "bindR",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+Monads+ResultM<'a, 'c>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "bindrA",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<Result<'a, FsRootDll.Library+ResultMessage<'c>>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "bindM",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+ResultMessage<'b>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "bindr",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Result<'a, FsRootDll.Library+ResultMessage<'c>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "bind",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'c>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "iterpA",
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
              "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "iterpS",
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
              "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "iterA",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(FsRootDll.Library+ResultMessage<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<FsRootDll.Library+Monads+ResultM<'b, 'a>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "iterS",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(FsRootDll.Library+ResultMessage<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<FsRootDll.Library+Monads+ResultM<'b, 'a>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "errorMsgf",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "PrintfFormat<'a, unit, string, Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "rtnrA",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<Result<'a, FsRootDll.Library+ResultMessage<'b>>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "rtnM",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<unit, 'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "rtnR",
          "isField": 0,
          "type": {
            "tName": "Async<'a>",
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
          "meName": "rtnr",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<'a, FsRootDll.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
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
          "meName": "freeMessage",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'a, FsRootDll.Library+ResultMessage<'c>>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<Result<'a, FsRootDll.Library+ResultMessage<'b>>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "mapError",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'c, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(FsRootDll.Library+ResultMessage<'a> -> FsRootDll.Library+ResultMessage<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<FsRootDll.Library+Monads+ResultM<'c, 'a>>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.Library+Monads+AsyncResultMAutoOpen",
      "methods": [
        {
          "meName": "AsyncResultMBuilder.Combine",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+AsyncResultM+AsyncResultMBuilder",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "AsyncResultMBuilder.Bind",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+AsyncResultM+AsyncResultMBuilder",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<FsRootDll.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "AsyncResultMBuilder.ReturnFrom",
          "isField": 0,
          "type": {
            "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+AsyncResultM+AsyncResultMBuilder",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "asyncResultM",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+AsyncResultM+AsyncResultMBuilder",
            "asm": "MonacoPlugIn"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRootDll.Library+Monads",
      "methods": [
        {
          "meName": "|OkM|ErrorM|",
          "isField": 0,
          "type": {
            "tName": "FSharpChoice<('a * FsRootDll.Library+ResultMessage<'b>), FsRootDll.Library+ResultMessage<'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "ResultM<'a, 'b>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "ErrorM",
          "isField": 0,
          "type": {
            "tName": "ResultM<'b, 'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+ResultMessage<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "OkMWithMsg",
          "isField": 0,
          "type": {
            "tName": "ResultM<'a, 'b>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRootDll.Library+ResultMessage<'b>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "OkM",
          "isField": 0,
          "type": {
            "tName": "ResultM<'a, 'b>",
            "asm": "MonacoPlugIn"
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
      "moName": "FsRootDll.Library",
      "methods": [
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
      "moName": "FsRootDll.LibraryJS+Promise",
      "methods": [
        {
          "meName": "ofAsyncResult",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Promise<'a>",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "Async<Result<'a, 'b>>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.LibraryJS+PromiseM",
      "methods": [
        {
          "meName": "ofAsyncResultM",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Promise<'a>",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "Async<FsRootDll.Library+Monads+ResultM<'a, 'b>>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.LibraryJS+GenEditor+Position",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+GenEditor+AnnotationType",
      "methods": [
        {
          "meName": "_unique_Hint",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_Info",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_Warning",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_Error",
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
      "moName": "FsRootDll.LibraryJS+GenEditor+Annotation",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+GenEditor+Completion",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+GenEditor+GenEditorHook`1",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+GenEditor+GenEditor`1",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+GenEditor",
      "methods": [
        {
          "meName": "generateDoc",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "GenEditor<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "bindVarEditor",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(('a -> unit) -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Var<'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "newVarO",
          "isField": 0,
          "type": {
            "tName": "GenEditor<'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "GenEditorHook<'a>",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "Var<Option<string>>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "newText",
          "isField": 0,
          "type": {
            "tName": "GenEditor<'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "GenEditorHook<'a>",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "newVar",
          "isField": 0,
          "type": {
            "tName": "GenEditor<'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "GenEditorHook<'a>",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "var",
          "isField": 0,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "GenEditor<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "disabled",
          "isField": 0,
          "type": {
            "tName": "GenEditor<'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "View<bool>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "GenEditor<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "onRender",
          "isField": 0,
          "type": {
            "tName": "GenEditor<'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "(GenEditor<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "GenEditor<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "onChange",
          "isField": 0,
          "type": {
            "tName": "GenEditor<'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "Option<(GenEditor<'a> -> (string -> unit))>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "GenEditor<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "setVar",
          "isField": 0,
          "type": {
            "tName": "GenEditor<'a>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "GenEditor<'a>",
              "asm": "MonacoPlugIn"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.LibraryJS+ResizeObserver",
      "methods": [
        {
          "meName": "addResizeObserver",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "dimsChanged",
          "isField": 0,
          "type": {
            "tName": "(unit -> bool)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "domRect2Tuple",
          "isField": 0,
          "type": {
            "tName": "(Double * Double * Double * Double)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.DomRect",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "observers",
          "isField": 1,
          "type": {
            "tName": "List<Object>",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "set_observers",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "List<Object>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco+Position",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco+Range",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco+Uri",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco+Location",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco+FindMatch",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco+WordAtPosition",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco+Model",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco+MarkDownString",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco+MarkerSeverity",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco+MarkerData",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco+CompletionItemKind",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco+CompletionItem",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco+Hover",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco+Editor",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco+MonacoConfig",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+Monaco",
      "methods": [
        {
          "meName": "newVarO",
          "isField": 0,
          "type": {
            "tName": "MonacoConfig",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "Var<Option<string>>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "newText",
          "isField": 0,
          "type": {
            "tName": "MonacoConfig",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "var",
          "isField": 0,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "MonacoConfig",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "disabled",
          "isField": 0,
          "type": {
            "tName": "MonacoConfig",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "View<bool>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "MonacoConfig",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "onRender",
          "isField": 0,
          "type": {
            "tName": "MonacoConfig",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "(Editor -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "MonacoConfig",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "onChange",
          "isField": 0,
          "type": {
            "tName": "MonacoConfig",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "(string -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "MonacoConfig",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "setVar",
          "isField": 0,
          "type": {
            "tName": "MonacoConfig",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "MonacoConfig",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "render$951$48",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "MonacoConfig",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "render",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "MonacoConfig",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "loader",
          "isField": 1,
          "type": {
            "tName": "Async<unit>",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "newVar",
          "isField": 0,
          "type": {
            "tName": "MonacoConfig",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.LibraryJS+MonacoGenAdapter+MonacoRT",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+MonacoGenAdapter+CompletionItemProvider",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+MonacoGenAdapter+HoverProvider",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+MonacoGenAdapter+DefinitionProvider",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+MonacoGenAdapter",
      "methods": [
        {
          "meName": "newVar",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+GenEditor+GenEditor<FsRootDll.LibraryJS+Monaco+Editor>",
            "asm": "MonacoPlugIn"
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
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "newRT",
          "isField": 0,
          "type": {
            "tName": "MonacoRT",
            "asm": "MonacoPlugIn"
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
          "meName": "newHook",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+GenEditor+GenEditorHook<FsRootDll.LibraryJS+Monaco+Editor>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "showAnnotations",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "IEnumerable<FsRootDll.LibraryJS+GenEditor+Annotation>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getSelect",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "getWordAt",
          "isField": 0,
          "type": {
            "tName": "Option<(string * FsRootDll.LibraryJS+GenEditor+Position)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "FsRootDll.LibraryJS+GenEditor+Position",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "setValue",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getValue",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "setUri",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "getUri",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "generateDoc$1093$48",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "(FsRootDll.LibraryJS+Monaco+Editor -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.LibraryJS+GenEditor+GenEditor<_>",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "generateDoc",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "FsRootDll.LibraryJS+GenEditor+GenEditor<'a>",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "(FsRootDll.LibraryJS+Monaco+Editor -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "convertGlyphChar",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+Monaco+CompletionItemKind",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "posFromIndex",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+GenEditor+Position",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "indexFromPos",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "FsRootDll.LibraryJS+GenEditor+Position",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "posEd2Gen",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+GenEditor+Position",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "FsRootDll.LibraryJS+Monaco+Position",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "posGen2Ed",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+Monaco+Position",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "FsRootDll.LibraryJS+GenEditor+Position",
              "asm": "MonacoPlugIn"
            }
          ]
        },
        {
          "meName": "bindEditor",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "(FsRootDll.LibraryJS+Monaco+Editor -> Option<'a>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "mapEditor",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "(FsRootDll.LibraryJS+Monaco+Editor -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "iterEditor",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "MonacoPlugIn"
            },
            {
              "tName": "(FsRootDll.LibraryJS+Monaco+Editor -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.LibraryJS+MonacoPlugIn",
      "methods": [
        {
          "meName": "plugInAdded",
          "isField": 1,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "createMonacoEditor",
          "isField": 1,
          "type": {
            "tName": "(string -> (string -> (string -> (string -> Doc))))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "monacoNew",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+GenEditor+GenEditor<FsRootDll.LibraryJS+Monaco+Editor>",
            "asm": "MonacoPlugIn"
          },
          "parms": [
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<string>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<string>",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.LibraryJS",
      "methods": []
    },
    {
      "moName": "StartupCode$MonacoPlugIn$MonacoPlugIn",
      "methods": []
    }
  ],
  "jsModules": [
    {
      "jsName": "WebSharper.js",
      "code": "(function()\r\n{\r\n \"use strict\";\r\n var Global,FsRootDll,Library,ResultMessage,ResultMessageHelpers,Monads,Seq,Async,WebSharper,Obj,Result,Builder,Operators,BuilderP,ResultM,Builder$1,Operators$1,ResultMAutoOpen,AsyncResultM,AsyncResultMBuilder,Operators$2,AsyncResultMAutoOpen,LibraryJS,Promise,PromiseM,GenEditor,Position,AnnotationType,Annotation,Completion,GenEditorHook,GenEditor$1,ResizeObserver,Monaco,Position$1,Range,Uri,Location,FindMatch,WordAtPosition,Model,MarkDownString,MarkerData,CompletionItem,Hover,Editor,MonacoConfig,MonacoGenAdapter,MonacoRT,CompletionItemProvider,HoverProvider,DefinitionProvider,MonacoPlugIn,SC$1,IntelliFactory,Runtime,Utils,Strings,Seq$1,List,Arrays,Concurrency,Enumerator,Result$1,Operators$3,console,UI,View,Unchecked,Var$1,Doc,AttrProxy,AppFramework;\r\n Global=self;\r\n FsRootDll=Global.FsRootDll=Global.FsRootDll||{};\r\n Library=FsRootDll.Library=FsRootDll.Library||{};\r\n ResultMessage=Library.ResultMessage=Library.ResultMessage||{};\r\n ResultMessageHelpers=Library.ResultMessageHelpers=Library.ResultMessageHelpers||{};\r\n Monads=Library.Monads=Library.Monads||{};\r\n Seq=Monads.Seq=Monads.Seq||{};\r\n Async=Monads.Async=Monads.Async||{};\r\n WebSharper=Global.WebSharper;\r\n Obj=WebSharper&&WebSharper.Obj;\r\n Result=Monads.Result=Monads.Result||{};\r\n Builder=Result.Builder=Result.Builder||{};\r\n Operators=Result.Operators=Result.Operators||{};\r\n BuilderP=Result.BuilderP=Result.BuilderP||{};\r\n ResultM=Monads.ResultM=Monads.ResultM||{};\r\n Builder$1=ResultM.Builder=ResultM.Builder||{};\r\n Operators$1=ResultM.Operators=ResultM.Operators||{};\r\n ResultMAutoOpen=Monads.ResultMAutoOpen=Monads.ResultMAutoOpen||{};\r\n AsyncResultM=Monads.AsyncResultM=Monads.AsyncResultM||{};\r\n AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder||{};\r\n Operators$2=AsyncResultM.Operators=AsyncResultM.Operators||{};\r\n AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen||{};\r\n LibraryJS=FsRootDll.LibraryJS=FsRootDll.LibraryJS||{};\r\n Promise=LibraryJS.Promise=LibraryJS.Promise||{};\r\n PromiseM=LibraryJS.PromiseM=LibraryJS.PromiseM||{};\r\n GenEditor=LibraryJS.GenEditor=LibraryJS.GenEditor||{};\r\n Position=GenEditor.Position=GenEditor.Position||{};\r\n AnnotationType=GenEditor.AnnotationType=GenEditor.AnnotationType||{};\r\n Annotation=GenEditor.Annotation=GenEditor.Annotation||{};\r\n Completion=GenEditor.Completion=GenEditor.Completion||{};\r\n GenEditorHook=GenEditor.GenEditorHook=GenEditor.GenEditorHook||{};\r\n GenEditor$1=GenEditor.GenEditor=GenEditor.GenEditor||{};\r\n ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};\r\n Monaco=LibraryJS.Monaco=LibraryJS.Monaco||{};\r\n Position$1=Monaco.Position=Monaco.Position||{};\r\n Range=Monaco.Range=Monaco.Range||{};\r\n Uri=Monaco.Uri=Monaco.Uri||{};\r\n Location=Monaco.Location=Monaco.Location||{};\r\n FindMatch=Monaco.FindMatch=Monaco.FindMatch||{};\r\n WordAtPosition=Monaco.WordAtPosition=Monaco.WordAtPosition||{};\r\n Model=Monaco.Model=Monaco.Model||{};\r\n MarkDownString=Monaco.MarkDownString=Monaco.MarkDownString||{};\r\n MarkerData=Monaco.MarkerData=Monaco.MarkerData||{};\r\n CompletionItem=Monaco.CompletionItem=Monaco.CompletionItem||{};\r\n Hover=Monaco.Hover=Monaco.Hover||{};\r\n Editor=Monaco.Editor=Monaco.Editor||{};\r\n MonacoConfig=Monaco.MonacoConfig=Monaco.MonacoConfig||{};\r\n MonacoGenAdapter=LibraryJS.MonacoGenAdapter=LibraryJS.MonacoGenAdapter||{};\r\n MonacoRT=MonacoGenAdapter.MonacoRT=MonacoGenAdapter.MonacoRT||{};\r\n CompletionItemProvider=MonacoGenAdapter.CompletionItemProvider=MonacoGenAdapter.CompletionItemProvider||{};\r\n HoverProvider=MonacoGenAdapter.HoverProvider=MonacoGenAdapter.HoverProvider||{};\r\n DefinitionProvider=MonacoGenAdapter.DefinitionProvider=MonacoGenAdapter.DefinitionProvider||{};\r\n MonacoPlugIn=LibraryJS.MonacoPlugIn=LibraryJS.MonacoPlugIn||{};\r\n SC$1=Global.StartupCode$MonacoPlugIn$MonacoPlugIn=Global.StartupCode$MonacoPlugIn$MonacoPlugIn||{};\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime=IntelliFactory&&IntelliFactory.Runtime;\r\n Utils=WebSharper&&WebSharper.Utils;\r\n Strings=WebSharper&&WebSharper.Strings;\r\n Seq$1=WebSharper&&WebSharper.Seq;\r\n List=WebSharper&&WebSharper.List;\r\n Arrays=WebSharper&&WebSharper.Arrays;\r\n Concurrency=WebSharper&&WebSharper.Concurrency;\r\n Enumerator=WebSharper&&WebSharper.Enumerator;\r\n Result$1=WebSharper&&WebSharper.Result;\r\n Operators$3=WebSharper&&WebSharper.Operators;\r\n console=Global.console;\r\n UI=WebSharper&&WebSharper.UI;\r\n View=UI&&UI.View;\r\n Unchecked=WebSharper&&WebSharper.Unchecked;\r\n Var$1=UI&&UI.Var$1;\r\n Doc=UI&&UI.Doc;\r\n AttrProxy=UI&&UI.AttrProxy;\r\n AppFramework=LibraryJS&&LibraryJS.AppFramework;\r\n ResultMessage=Library.ResultMessage=Runtime.Class({\r\n  toString:function()\r\n  {\r\n   return this.$==1?(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(\"Error    : \"+Utils.toSafe($2));\r\n    };\r\n   }(Global.id))(this.$0):this.$==2?(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(\"Warning  : \"+Utils.toSafe($2));\r\n    };\r\n   }(Global.id))(this.$0):this.$==3?this.$0:this.$==4?(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(Global.String($2));\r\n    };\r\n   }(Global.id))(this.$0):this.$==5?(((Runtime.Curried3(function($1,$2,$3)\r\n   {\r\n    return $1(\"Exception: \"+Utils.toSafe($2)+\", \"+Utils.toSafe($3));\r\n   }))(Global.id))(this.$0))(this.$1):this.$==6?Strings.concat(\"\\n\",Seq$1.map(Global.String,Seq$1.filter(function(a)\r\n   {\r\n    return a.$!=0;\r\n   },this.$0))):\"\";\r\n  }\r\n },null,ResultMessage);\r\n ResultMessage.NoMsg=new ResultMessage({\r\n  $:0\r\n });\r\n ResultMessageHelpers.infof=function(fmt)\r\n {\r\n  return fmt(function(a)\r\n  {\r\n   return new ResultMessage({\r\n    $:3,\r\n    $0:a\r\n   });\r\n  });\r\n };\r\n ResultMessageHelpers.warningf=function(fmt)\r\n {\r\n  return fmt(function(a)\r\n  {\r\n   return new ResultMessage({\r\n    $:2,\r\n    $0:a\r\n   });\r\n  });\r\n };\r\n ResultMessageHelpers.errorMsgf=function(fmt)\r\n {\r\n  return fmt(function(a)\r\n  {\r\n   return new ResultMessage({\r\n    $:1,\r\n    $0:a\r\n   });\r\n  });\r\n };\r\n ResultMessage.summarizedI=function(msg)\r\n {\r\n  return ResultMessage.summarizedF(function()\r\n  {\r\n   return[0,0,1];\r\n  },msg);\r\n };\r\n ResultMessage.summarizedW=function(msg)\r\n {\r\n  return ResultMessage.summarizedF(function()\r\n  {\r\n   return[0,1,0];\r\n  },msg);\r\n };\r\n ResultMessage.summarized=function(msg)\r\n {\r\n  return ResultMessage.summarizedF(function()\r\n  {\r\n   return[1,0,0];\r\n  },msg);\r\n };\r\n ResultMessage.summarizedF=function(f,msg)\r\n {\r\n  return Strings.concat(\"\\n\",Seq$1.filter(function(y)\r\n  {\r\n   return\"\"!==y;\r\n  },List.ofArray([Global.String(msg),ResultMessage.summaryF(f,msg)])));\r\n };\r\n ResultMessage.summaryF=function(f,msg)\r\n {\r\n  var $1,m;\r\n  m=ResultMessage.countF(f,msg);\r\n  switch(m[0]===0?m[1]===0?0:m[1]===1?m[2]===0?0:($1=m[1],2):($1=m[1],2):m[0]===1?m[1]===0?m[2]===0?0:($1=m[0],1):($1=[m[0],m[1]],3):m[1]===0?($1=m[0],1):($1=[m[0],m[1]],3))\r\n  {\r\n   case 0:\r\n    return\"\";\r\n   case 1:\r\n    return(function($2)\r\n    {\r\n     return function($3)\r\n     {\r\n      return $2(\"Errors   : \"+Global.String($3)+\"\\n\");\r\n     };\r\n    }(Global.id))($1);\r\n   case 2:\r\n    return(function($2)\r\n    {\r\n     return function($3)\r\n     {\r\n      return $2(\"Warnings : \"+Global.String($3)+\"\\n\");\r\n     };\r\n    }(Global.id))($1);\r\n   case 3:\r\n    return(((Runtime.Curried3(function($2,$3,$4)\r\n    {\r\n     return $2(\"Errors   : \"+Global.String($3)+\", Warnings: \"+Global.String($4)+\"\\n\");\r\n    }))(Global.id))($1[0]))($1[1]);\r\n  }\r\n };\r\n ResultMessage.reduceMsgs=function(ms)\r\n {\r\n  return Seq$1.fold(ResultMessage.addMsg,ResultMessage.NoMsg,ms);\r\n };\r\n ResultMessage.addMsg=function(a,b)\r\n {\r\n  return a.$==0?b:a.$==6?b.$==0?a:b.$==6?new ResultMessage({\r\n   $:6,\r\n   $0:a.$0.concat(b.$0)\r\n  }):new ResultMessage({\r\n   $:6,\r\n   $0:a.$0.concat([b])\r\n  }):b.$==0?a:b.$==6?new ResultMessage({\r\n   $:6,\r\n   $0:[a].concat(b.$0)\r\n  }):new ResultMessage({\r\n   $:6,\r\n   $0:[a,b]\r\n  });\r\n };\r\n ResultMessage.countI=function(msg)\r\n {\r\n  return ResultMessage.countF(function()\r\n  {\r\n   return[0,0,1];\r\n  },msg);\r\n };\r\n ResultMessage.countW=function(msg)\r\n {\r\n  return ResultMessage.countF(function()\r\n  {\r\n   return[0,1,0];\r\n  },msg);\r\n };\r\n ResultMessage.count=function(msg)\r\n {\r\n  return ResultMessage.countF(function()\r\n  {\r\n   return[1,0,0];\r\n  },msg);\r\n };\r\n ResultMessage.countF=function(f,msg)\r\n {\r\n  function f$1(f$2,w,i)\r\n  {\r\n   return function(t)\r\n   {\r\n    return[f$2+t[0],w+t[1],i+t[2]];\r\n   };\r\n  }\r\n  return msg.$==0?[0,0,0]:msg.$==3?[0,0,1]:msg.$==2?[0,1,0]:msg.$==4?f(msg.$0):msg.$==6?Seq$1.fold(function($1,$2)\r\n  {\r\n   return(function($3)\r\n   {\r\n    return f$1($3[0],$3[1],$3[2]);\r\n   }($1))($2);\r\n  },[0,0,0],Seq$1.map(function(m)\r\n  {\r\n   return ResultMessage.countF(f,m);\r\n  },ResultMessage.exclnoMsg(msg.$0))):[1,0,0];\r\n };\r\n ResultMessage.isFatalW=function(msg)\r\n {\r\n  return ResultMessage.isFatalF(function()\r\n  {\r\n   return false;\r\n  },msg);\r\n };\r\n ResultMessage.isFatal=function(msg)\r\n {\r\n  return ResultMessage.isFatalF(function()\r\n  {\r\n   return true;\r\n  },msg);\r\n };\r\n ResultMessage.isFatalF=function(f,msg)\r\n {\r\n  return msg.$==0?false:msg.$==3?false:msg.$==2?false:msg.$==4?f(msg.$0):msg.$==6?Seq$1.exists(function(m)\r\n  {\r\n   return ResultMessage.isFatalF(f,m);\r\n  },msg.$0):true;\r\n };\r\n ResultMessage.isWarningOrInfoW=function(msg)\r\n {\r\n  return ResultMessage.isWarningOrInfoF(function()\r\n  {\r\n   return true;\r\n  },msg);\r\n };\r\n ResultMessage.isWarningOrInfo=function(msg)\r\n {\r\n  return ResultMessage.isWarningOrInfoF(function()\r\n  {\r\n   return false;\r\n  },msg);\r\n };\r\n ResultMessage.isWarningOrInfoF=function(f,msg)\r\n {\r\n  return msg.$==2||(msg.$==4?f(msg.$0):msg.$==6&&Seq$1.forall(function(m)\r\n  {\r\n   return ResultMessage.isWarningOrInfoF(f,m)||ResultMessage.isInfoF(f,m);\r\n  },ResultMessage.exclnoMsg(msg.$0)));\r\n };\r\n ResultMessage.isInfoI=function(msg)\r\n {\r\n  return ResultMessage.isInfoF(function()\r\n  {\r\n   return true;\r\n  },msg);\r\n };\r\n ResultMessage.isInfo=function(msg)\r\n {\r\n  return ResultMessage.isInfoF(function()\r\n  {\r\n   return false;\r\n  },msg);\r\n };\r\n ResultMessage.isInfoF=function(f,msg)\r\n {\r\n  return msg.$==3||(msg.$==4?f(msg.$0):msg.$==6&&Seq$1.forall(function(m)\r\n  {\r\n   return ResultMessage.isInfoF(f,m);\r\n  },ResultMessage.exclnoMsg(msg.$0)));\r\n };\r\n ResultMessage.freeMessageI=function(msg)\r\n {\r\n  var f;\r\n  function g(a)\r\n  {\r\n   return new ResultMessage({\r\n    $:3,\r\n    $0:a\r\n   });\r\n  }\r\n  return ResultMessage.freeMessageF((f=function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(Global.String($2));\r\n   };\r\n  }(Global.id),function(x)\r\n  {\r\n   return g(f(x));\r\n  }),msg);\r\n };\r\n ResultMessage.freeMessageW=function(msg)\r\n {\r\n  var f;\r\n  function g(a)\r\n  {\r\n   return new ResultMessage({\r\n    $:2,\r\n    $0:a\r\n   });\r\n  }\r\n  return ResultMessage.freeMessageF((f=function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(Global.String($2));\r\n   };\r\n  }(Global.id),function(x)\r\n  {\r\n   return g(f(x));\r\n  }),msg);\r\n };\r\n ResultMessage.freeMessage=function(msg)\r\n {\r\n  var f;\r\n  function g(a)\r\n  {\r\n   return new ResultMessage({\r\n    $:1,\r\n    $0:a\r\n   });\r\n  }\r\n  return ResultMessage.freeMessageF((f=function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(Global.String($2));\r\n   };\r\n  }(Global.id),function(x)\r\n  {\r\n   return g(f(x));\r\n  }),msg);\r\n };\r\n ResultMessage.freeMessageF=function(f,msg)\r\n {\r\n  return ResultMessage.bindMessage(f,msg);\r\n };\r\n ResultMessage.bindMessage=function(f,msg)\r\n {\r\n  return msg.$==4?f(msg.$0):msg.$==1?new ResultMessage({\r\n   $:1,\r\n   $0:msg.$0\r\n  }):msg.$==3?new ResultMessage({\r\n   $:3,\r\n   $0:msg.$0\r\n  }):msg.$==2?new ResultMessage({\r\n   $:2,\r\n   $0:msg.$0\r\n  }):msg.$==5?new ResultMessage({\r\n   $:5,\r\n   $0:msg.$0,\r\n   $1:msg.$1\r\n  }):msg.$==6?new ResultMessage({\r\n   $:6,\r\n   $0:Arrays.map(function(m)\r\n   {\r\n    return ResultMessage.bindMessage(f,m);\r\n   },msg.$0)\r\n  }):ResultMessage.NoMsg;\r\n };\r\n ResultMessage.exclnoMsg=function(ms)\r\n {\r\n  function g(v)\r\n  {\r\n   return!v;\r\n  }\r\n  return Seq$1.filter(function(x)\r\n  {\r\n   return g(ResultMessage.noMsg(x));\r\n  },ms);\r\n };\r\n ResultMessage.noMsg=function(msg)\r\n {\r\n  return msg.$==0;\r\n };\r\n Seq.ofOption=function(vO)\r\n {\r\n  return vO==null?[]:[vO.$0];\r\n };\r\n Seq.absorbR=function(vOS)\r\n {\r\n  return Seq$1.choose(function(a)\r\n  {\r\n   return a.$==0?{\r\n    $:1,\r\n    $0:a.$0\r\n   }:null;\r\n  },vOS);\r\n };\r\n Seq.absorbO=function(vOS)\r\n {\r\n  return Seq$1.choose(Global.id,vOS);\r\n };\r\n Seq.insertR=function(vSR)\r\n {\r\n  return vSR.$==0?Seq$1.map(function(a)\r\n  {\r\n   return{\r\n    $:0,\r\n    $0:a\r\n   };\r\n  },vSR.$0):(Seq.rtn())(Library.Error$1(vSR.$0));\r\n };\r\n Seq.insertO=function(vSO)\r\n {\r\n  var o;\r\n  o=vSO==null?null:{\r\n   $:1,\r\n   $0:Seq$1.map(function(a)\r\n   {\r\n    return{\r\n     $:1,\r\n     $0:a\r\n    };\r\n   },vSO.$0)\r\n  };\r\n  return o==null?(Seq.rtn())(null):o.$0;\r\n };\r\n Seq.rtn=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rtn;\r\n };\r\n Async.insertR=function(vAR)\r\n {\r\n  function f(a)\r\n  {\r\n   return{\r\n    $:0,\r\n    $0:a\r\n   };\r\n  }\r\n  function g(v)\r\n  {\r\n   return Concurrency.Return(v);\r\n  }\r\n  return vAR.$==0?Concurrency.Bind(vAR.$0,function(x)\r\n  {\r\n   return g(f(x));\r\n  }):Concurrency.Return(Library.Error$1(vAR.$0));\r\n };\r\n Async.insertO=function(vAO)\r\n {\r\n  var o;\r\n  function f(a)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:a\r\n   };\r\n  }\r\n  function g(v)\r\n  {\r\n   return Concurrency.Return(v);\r\n  }\r\n  o=vAO==null?null:{\r\n   $:1,\r\n   $0:Concurrency.Bind(vAO.$0,function(x)\r\n   {\r\n    return g(f(x));\r\n   })\r\n  };\r\n  return o==null?Concurrency.Return(null):o.$0;\r\n };\r\n Async.sequenceSeq=function(sq)\r\n {\r\n  return Async.traverseSeq(Global.id,sq);\r\n };\r\n Async.traverseSeq=function(f,sq)\r\n {\r\n  function g(v)\r\n  {\r\n   return Concurrency.Return(v);\r\n  }\r\n  return Concurrency.Bind(Arrays.foldBack(function(head,tail)\r\n  {\r\n   return Async.op_GreaterGreaterEquals(f(head),function(h)\r\n   {\r\n    return Async.op_GreaterGreaterEquals(tail,function(t)\r\n    {\r\n     return Concurrency.Return(new List.T({\r\n      $:1,\r\n      $0:h,\r\n      $1:t\r\n     }));\r\n    });\r\n   });\r\n  },Arrays.ofSeq(sq),Concurrency.Return(List.T.Empty)),function(x)\r\n  {\r\n   return g(Global.id(x));\r\n  });\r\n };\r\n Async.op_GreaterGreaterEquals=function(v,f)\r\n {\r\n  return Concurrency.Bind(v,f);\r\n };\r\n Async.sleepThen=function(f,milliseconds)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(Concurrency.Sleep(milliseconds),function()\r\n   {\r\n    return Concurrency.Return(f());\r\n   });\r\n  });\r\n };\r\n Async.apply=function(fA,vA)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(Concurrency.StartChild(fA,null),function(a)\r\n   {\r\n    return Concurrency.Bind(Concurrency.StartChild(vA,null),function(a$1)\r\n    {\r\n     return Concurrency.Bind(a,function(a$2)\r\n     {\r\n      return Concurrency.Bind(a$1,function(a$3)\r\n      {\r\n       return Concurrency.Return(a$2(a$3));\r\n      });\r\n     });\r\n    });\r\n   });\r\n  });\r\n };\r\n Builder=Result.Builder=Runtime.Class({\r\n  For:function(sequence,body)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return this.Using(Enumerator.Get(sequence),function(_enum)\r\n   {\r\n    return $this.While(function()\r\n    {\r\n     return _enum.MoveNext();\r\n    },$this.Delay(function()\r\n    {\r\n     return body(_enum.Current());\r\n    }));\r\n   });\r\n  },\r\n  While:function(guard,body)\r\n  {\r\n   function whileLoop(guard$1,body$1)\r\n   {\r\n    return guard$1()?Result$1.Bind(function()\r\n    {\r\n     return whileLoop(guard$1,body$1);\r\n    },body$1()):Result.rtn$1();\r\n   }\r\n   return whileLoop(guard,body);\r\n  },\r\n  Using:function(disposable,body)\r\n  {\r\n   try\r\n   {\r\n    return body(disposable);\r\n   }\r\n   finally\r\n   {\r\n    disposable.Dispose();\r\n   }\r\n  },\r\n  TryFinally:function(body,compensation)\r\n  {\r\n   try\r\n   {\r\n    return body();\r\n   }\r\n   finally\r\n   {\r\n    compensation();\r\n   }\r\n  },\r\n  TryWith:function(body,handler)\r\n  {\r\n   try\r\n   {\r\n    return body();\r\n   }\r\n   catch(e)\r\n   {\r\n    return handler(e);\r\n   }\r\n  },\r\n  Run:function(f)\r\n  {\r\n   return Result$1.Bind(f,{\r\n    $:0,\r\n    $0:null\r\n   });\r\n  },\r\n  Combine:function(a,b)\r\n  {\r\n   return Result$1.Bind(b,a);\r\n  },\r\n  Delay:Global.id,\r\n  Zero:function()\r\n  {\r\n   return Result.rtn$1();\r\n  },\r\n  Bind:function(w,r)\r\n  {\r\n   return Result$1.Bind(r,w);\r\n  },\r\n  ReturnFrom:Global.id,\r\n  Return:function(x)\r\n  {\r\n   return Result.rtn$1(x);\r\n  }\r\n },Obj,Builder);\r\n Builder.New$1=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },Builder);\r\n Operators.result$1=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.result$1;\r\n };\r\n Operators.rtn$1=function(v)\r\n {\r\n  return Result.rtn$1(v);\r\n };\r\n Operators.op_GreaterEqualsGreater$1=function(f,g,v)\r\n {\r\n  return Operators.op_GreaterGreaterEquals$1(f(v),g);\r\n };\r\n Operators.op_RightShift$1=function(f,g,v)\r\n {\r\n  return Operators.op_BarGreaterGreater$1(f(v),g);\r\n };\r\n Operators.op_GreaterGreaterEquals$1=function(v,f)\r\n {\r\n  return Result$1.Bind(f,v);\r\n };\r\n Operators.op_BarGreaterGreater$1=function(v,f)\r\n {\r\n  return Result$1.Map(f,v);\r\n };\r\n BuilderP=Result.BuilderP=Runtime.Class({\r\n  For:function(sequence,body)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return this.Using(Enumerator.Get(sequence),function(_enum)\r\n   {\r\n    return $this.While(function()\r\n    {\r\n     return _enum.MoveNext();\r\n    },$this.Delay(function()\r\n    {\r\n     return body(_enum.Current());\r\n    }));\r\n   });\r\n  },\r\n  While:function(guard,body)\r\n  {\r\n   function whileLoop(guard$1,body$1)\r\n   {\r\n    return guard$1()?Result$1.Bind(function()\r\n    {\r\n     return whileLoop(guard$1,body$1);\r\n    },body$1()):Result.rtn$1();\r\n   }\r\n   return whileLoop(guard,body);\r\n  },\r\n  Using:function(disposable,body)\r\n  {\r\n   try\r\n   {\r\n    return body(disposable);\r\n   }\r\n   finally\r\n   {\r\n    disposable.Dispose();\r\n   }\r\n  },\r\n  TryFinally:function(body,compensation)\r\n  {\r\n   try\r\n   {\r\n    return body();\r\n   }\r\n   finally\r\n   {\r\n    compensation();\r\n   }\r\n  },\r\n  TryWith:function(body,handler)\r\n  {\r\n   try\r\n   {\r\n    return body();\r\n   }\r\n   catch(e)\r\n   {\r\n    return handler(e);\r\n   }\r\n  },\r\n  Run:function(f)\r\n  {\r\n   return Result.bindP(f,{\r\n    $:0,\r\n    $0:null\r\n   });\r\n  },\r\n  Combine:function(a,b)\r\n  {\r\n   return Result$1.Bind(b,a);\r\n  },\r\n  Delay:Global.id,\r\n  Zero:function()\r\n  {\r\n   return Result.rtn$1();\r\n  },\r\n  Bind:function(w,r)\r\n  {\r\n   return Result$1.Bind(r,w);\r\n  },\r\n  ReturnFrom:Global.id,\r\n  Return:function(x)\r\n  {\r\n   return Result.rtn$1(x);\r\n  }\r\n },Obj,BuilderP);\r\n BuilderP.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },BuilderP);\r\n Result.resultP=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.resultP;\r\n };\r\n Result.iterP=function(fE,f,r)\r\n {\r\n  Result.defaultWith$1(fE,Result.mapP(f,r));\r\n };\r\n Result.mapP=function(f,m)\r\n {\r\n  return Result.bindP(function(x)\r\n  {\r\n   return Result.rtn$1(f(x));\r\n  },m);\r\n };\r\n Result.bindP=function(f,r)\r\n {\r\n  if(r.$==1)\r\n   return Library.Error$1(r.$0);\r\n  else\r\n   try\r\n   {\r\n    return f(r.$0);\r\n   }\r\n   catch(e)\r\n   {\r\n    return Library.Error$1(new ResultMessage({\r\n     $:5,\r\n     $0:e.message,\r\n     $1:e.stack\r\n    }));\r\n   }\r\n };\r\n Result.freeMessage=function(r)\r\n {\r\n  return r.$==1?Library.Error$1(ResultMessage.freeMessage(r.$0)):{\r\n   $:0,\r\n   $0:r.$0\r\n  };\r\n };\r\n Result.result$1=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.result;\r\n };\r\n Result.sequenceSeq$1=function(sq)\r\n {\r\n  return Result.traverseSeq$1(Global.id,sq);\r\n };\r\n Result.traverseSeq$1=function(f,sq)\r\n {\r\n  return Result$1.Map(Global.id,Arrays.foldBack(function(head,tail)\r\n  {\r\n   return Result.op_GreaterGreaterEquals$1(f(head),function(h)\r\n   {\r\n    return Result.op_GreaterGreaterEquals$1(tail,function(t)\r\n    {\r\n     return Result.rtn$1(new List.T({\r\n      $:1,\r\n      $0:h,\r\n      $1:t\r\n     }));\r\n    });\r\n   });\r\n  },Arrays.ofSeq(sq),Result.rtn$1(List.T.Empty)));\r\n };\r\n Result.op_GreaterGreaterEquals$1=function(r,f)\r\n {\r\n  return Result$1.Bind(f,r);\r\n };\r\n Result.absorbO$1=function(f,vOR)\r\n {\r\n  return Result$1.Bind(function(v)\r\n  {\r\n   return Result.ofOption$1(f,v);\r\n  },vOR);\r\n };\r\n Result.insertO$1=function(vRO)\r\n {\r\n  var o;\r\n  o=vRO==null?null:{\r\n   $:1,\r\n   $0:Result$1.Map(function(a)\r\n   {\r\n    return{\r\n     $:1,\r\n     $0:a\r\n    };\r\n   },vRO.$0)\r\n  };\r\n  return o==null?{\r\n   $:0,\r\n   $0:null\r\n  }:o.$0;\r\n };\r\n Result.ofOption$1=function(f,vO)\r\n {\r\n  var o;\r\n  o=vO==null?null:{\r\n   $:1,\r\n   $0:{\r\n    $:0,\r\n    $0:vO.$0\r\n   }\r\n  };\r\n  return o==null?function(x)\r\n  {\r\n   return Library.Error$1(f(x));\r\n  }():o.$0;\r\n };\r\n Result.get$1=function(r)\r\n {\r\n  return Result.defaultWith$1(function(x)\r\n  {\r\n   return Operators$3.FailWith(Global.String(x));\r\n  },r);\r\n };\r\n Result.iter$1=function(fE,f,r)\r\n {\r\n  Result.defaultWith$1(fE,Result$1.Map(f,r));\r\n };\r\n Result.failIfFalse$1=function(m,v)\r\n {\r\n  return!v?Library.Error$1(m):{\r\n   $:0,\r\n   $0:null\r\n  };\r\n };\r\n Result.failIfTrue$1=function(m,v)\r\n {\r\n  return v?Library.Error$1(m):{\r\n   $:0,\r\n   $0:null\r\n  };\r\n };\r\n Result.defaultValue$1=function(d,r)\r\n {\r\n  return r.$==1?d:r.$0;\r\n };\r\n Result.defaultWith$1=function(f,r)\r\n {\r\n  return r.$==1?f(r.$0):r.$0;\r\n };\r\n Result.toOption$1=function(r)\r\n {\r\n  return r.$==0?{\r\n   $:1,\r\n   $0:r.$0\r\n  }:null;\r\n };\r\n Result.flatten$1=function(r)\r\n {\r\n  return Result$1.Bind(Global.id,r);\r\n };\r\n Result.join$1=function(r)\r\n {\r\n  return Result$1.Bind(Global.id,r);\r\n };\r\n Result.rtn$1=function(a)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:a\r\n  };\r\n };\r\n Result.errorf$1=function(fmt)\r\n {\r\n  return fmt(Library.Error$1);\r\n };\r\n Builder$1=ResultM.Builder=Runtime.Class({\r\n  For:function(sequence,body)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return this.Using(Enumerator.Get(sequence),function(_enum)\r\n   {\r\n    return $this.While(function()\r\n    {\r\n     return _enum.MoveNext();\r\n    },$this.Delay(function()\r\n    {\r\n     return body(_enum.Current());\r\n    }));\r\n   });\r\n  },\r\n  While:function(guard,body)\r\n  {\r\n   function whileLoop(guard$1,body$1)\r\n   {\r\n    return guard$1()?ResultM.bind(function()\r\n    {\r\n     return whileLoop(guard$1,body$1);\r\n    },body$1()):ResultM.rtn();\r\n   }\r\n   return whileLoop(guard,body);\r\n  },\r\n  Using:function(disposable,body)\r\n  {\r\n   try\r\n   {\r\n    return body(disposable);\r\n   }\r\n   finally\r\n   {\r\n    disposable.Dispose();\r\n   }\r\n  },\r\n  TryFinally:function(body,compensation)\r\n  {\r\n   try\r\n   {\r\n    return body();\r\n   }\r\n   finally\r\n   {\r\n    compensation();\r\n   }\r\n  },\r\n  TryWith:function(body,handler)\r\n  {\r\n   try\r\n   {\r\n    return body();\r\n   }\r\n   catch(e)\r\n   {\r\n    return handler(e);\r\n   }\r\n  },\r\n  Run:function(f)\r\n  {\r\n   return ResultM.bindP(f,Monads.OkM$1());\r\n  },\r\n  Combine:function(a,b)\r\n  {\r\n   return ResultM.bind(b,a);\r\n  },\r\n  Delay:Global.id,\r\n  Zero:function()\r\n  {\r\n   return ResultM.rtn();\r\n  },\r\n  Bind:function(w,r)\r\n  {\r\n   return ResultM.bindM(r,w);\r\n  },\r\n  Bind$1:function(w,r)\r\n  {\r\n   return ResultM.bindP(r,w);\r\n  },\r\n  ReturnFrom:function(x)\r\n  {\r\n   return ResultM.rtnM(x);\r\n  },\r\n  ReturnFrom$1:Global.id,\r\n  ReturnFrom$2:Global.id,\r\n  Return:function(x)\r\n  {\r\n   return ResultM.rtn(x);\r\n  }\r\n },Obj,Builder$1);\r\n Builder$1.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },Builder$1);\r\n Operators$1.rtn=function(v)\r\n {\r\n  return ResultM.rtn(v);\r\n };\r\n Operators$1.op_GreaterEqualsGreater=function(f,g,v)\r\n {\r\n  return Operators$1.op_GreaterGreaterEquals(f(v),g);\r\n };\r\n Operators$1.op_RightShift=function(f,g,v)\r\n {\r\n  return Operators$1.op_BarGreaterGreater(f(v),g);\r\n };\r\n Operators$1.op_GreaterGreaterEquals=function(v,f)\r\n {\r\n  return ResultM.bindP(f,v);\r\n };\r\n Operators$1.op_BarGreaterGreater=function(v,f)\r\n {\r\n  return ResultM.mapP(f,v);\r\n };\r\n ResultM.sequenceSeq=function(sq)\r\n {\r\n  return ResultM.traverseSeq(Global.id,sq);\r\n };\r\n ResultM.traverseSeq=function(f,sq)\r\n {\r\n  return ResultM.map(Global.id,Arrays.foldBack(function(head,tail)\r\n  {\r\n   return ResultM.op_GreaterGreaterEquals(f(head),function(h)\r\n   {\r\n    return ResultM.op_GreaterGreaterEquals(tail,function(t)\r\n    {\r\n     return ResultM.rtn(new List.T({\r\n      $:1,\r\n      $0:h,\r\n      $1:t\r\n     }));\r\n    });\r\n   });\r\n  },Arrays.ofSeq(sq),ResultM.rtn(List.T.Empty)));\r\n };\r\n ResultM.op_GreaterGreaterEquals=function(r,f)\r\n {\r\n  return ResultM.bind(f,r);\r\n };\r\n ResultM.failIfFatalMsgW=function(r)\r\n {\r\n  var a;\r\n  a=Monads.OkM(r);\r\n  return a.$==0?ResultMessage.isFatalW(a.$0[1])?Monads.ErrorM(a.$0[1]):r:r;\r\n };\r\n ResultM.failIfFatalMsg=function(r)\r\n {\r\n  var a;\r\n  a=Monads.OkM(r);\r\n  return a.$==0?ResultMessage.isFatal(a.$0[1])?Monads.ErrorM(a.$0[1]):r:r;\r\n };\r\n ResultM.failIfFatalMsgF=function(f,r)\r\n {\r\n  var a;\r\n  a=Monads.OkM(r);\r\n  return a.$==0?ResultMessage.isFatalF(f,a.$0[1])?Monads.ErrorM(a.$0[1]):r:r;\r\n };\r\n ResultM.addMsg=function(m,r)\r\n {\r\n  return ResultM.mapMessage(function(b)\r\n  {\r\n   return ResultMessage.addMsg(m,b);\r\n  },r);\r\n };\r\n ResultM.absorbO=function(f,vOR)\r\n {\r\n  return ResultM.bindP(function(v)\r\n  {\r\n   return ResultM.ofOption(f,v);\r\n  },vOR);\r\n };\r\n ResultM.insertO=function(vRO)\r\n {\r\n  var o;\r\n  o=vRO==null?null:{\r\n   $:1,\r\n   $0:ResultM.map(function(a)\r\n   {\r\n    return{\r\n     $:1,\r\n     $0:a\r\n    };\r\n   },vRO.$0)\r\n  };\r\n  return o==null?Monads.OkM$1(null):o.$0;\r\n };\r\n ResultM.ofResult=function(vR)\r\n {\r\n  return ResultM.rtnr(vR);\r\n };\r\n ResultM.ofOption=function(f,vO)\r\n {\r\n  var o;\r\n  o=vO==null?null:{\r\n   $:1,\r\n   $0:Monads.OkM$1(vO.$0)\r\n  };\r\n  return o==null?function(x)\r\n  {\r\n   return Monads.ErrorM(f(x));\r\n  }():o.$0;\r\n };\r\n ResultM.get=function(r)\r\n {\r\n  return ResultM.defaultWith(function(x)\r\n  {\r\n   return Operators$3.FailWith(Global.String(x));\r\n  },r);\r\n };\r\n ResultM.iter=function(fM,f,r)\r\n {\r\n  var a;\r\n  a=ResultM.mapP(f,r);\r\n  a.$0==null?fM(a.$1):void 0;\r\n };\r\n ResultM.mapP=function(f,m)\r\n {\r\n  return ResultM.bindP(function(x)\r\n  {\r\n   return ResultM.rtn(f(x));\r\n  },m);\r\n };\r\n ResultM.check=function(a,vR)\r\n {\r\n  var $1;\r\n  return($1=vR.$0,$1!=null&&$1.$==1)?ResultMessage.isFatalF(a.$0,vR.$1)?Monads.ErrorM(vR.$1):vR:vR;\r\n };\r\n ResultM.bindM=function(f,m)\r\n {\r\n  return ResultM.bindP(f,ResultM.rtnM(m));\r\n };\r\n ResultM.bindP=function(f,r)\r\n {\r\n  var m;\r\n  if(r.$0==null)\r\n   return{\r\n    $:0,\r\n    $0:null,\r\n    $1:r.$1\r\n   };\r\n  else\r\n   {\r\n    m=r.$1;\r\n    try\r\n    {\r\n     return ResultM.mapMessage(function(b)\r\n     {\r\n      return ResultMessage.addMsg(m,b);\r\n     },f(r.$0.$0));\r\n    }\r\n    catch(e)\r\n    {\r\n     return Monads.ErrorM(new ResultMessage({\r\n      $:5,\r\n      $0:e.message,\r\n      $1:e.stack\r\n     }));\r\n    }\r\n   }\r\n };\r\n ResultM.bind=function(f,r)\r\n {\r\n  var m;\r\n  return r.$0==null?{\r\n   $:0,\r\n   $0:null,\r\n   $1:r.$1\r\n  }:(m=r.$1,ResultM.mapMessage(function(b)\r\n  {\r\n   return ResultMessage.addMsg(m,b);\r\n  },f(r.$0.$0)));\r\n };\r\n ResultM.mapMessage=function(fM,a)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:a.$0,\r\n   $1:fM(a.$1)\r\n  };\r\n };\r\n ResultM.map=function(f,a)\r\n {\r\n  var o;\r\n  return{\r\n   $:0,\r\n   $0:(o=a.$0,o==null?null:{\r\n    $:1,\r\n    $0:f(o.$0)\r\n   }),\r\n   $1:a.$1\r\n  };\r\n };\r\n ResultM.defaultValue=function(d,r)\r\n {\r\n  return Result.defaultValue$1(d,ResultM.toResult(r));\r\n };\r\n ResultM.defaultWith=function(f,r)\r\n {\r\n  return Result.defaultWith$1(f,ResultM.toResult(r));\r\n };\r\n ResultM.toOption=function(r)\r\n {\r\n  return r.$0;\r\n };\r\n ResultM.toResultD=function(r)\r\n {\r\n  return r.$0==null?Library.Error$1(r.$1):{\r\n   $:0,\r\n   $0:[r.$0.$0,r.$1]\r\n  };\r\n };\r\n ResultM.toResult=function(r)\r\n {\r\n  return r.$0==null?Library.Error$1(r.$1):{\r\n   $:0,\r\n   $0:r.$0.$0\r\n  };\r\n };\r\n ResultM.freeMessage=function(r)\r\n {\r\n  return r.$==1?Library.Error$1(ResultMessage.freeMessage(r.$0)):{\r\n   $:0,\r\n   $0:r.$0\r\n  };\r\n };\r\n ResultM.rtnr=function(vR)\r\n {\r\n  return Result.defaultWith$1(Monads.ErrorM,Result$1.Map(Monads.OkM$1,vR));\r\n };\r\n ResultM.rtnM=function(m)\r\n {\r\n  return Monads.OkMWithMsg(null,m);\r\n };\r\n ResultM.rtn=function(v)\r\n {\r\n  return Monads.OkM$1(v);\r\n };\r\n ResultM.checkErrorW=function()\r\n {\r\n  return{\r\n   $:0,\r\n   $0:function()\r\n   {\r\n    return false;\r\n   }\r\n  };\r\n };\r\n ResultM.checkError=function()\r\n {\r\n  return{\r\n   $:0,\r\n   $0:function()\r\n   {\r\n    return true;\r\n   }\r\n  };\r\n };\r\n ResultMAutoOpen.resultM=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.resultM;\r\n };\r\n AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder=Runtime.Class({\r\n  For:function(s,fRA)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return this.Using(Enumerator.Get(s),function(_enum)\r\n   {\r\n    return $this.While(function()\r\n    {\r\n     return _enum.MoveNext();\r\n    },$this.Delay(function()\r\n    {\r\n     return fRA(_enum.Current());\r\n    }));\r\n   });\r\n  },\r\n  While:function(guard,fRA)\r\n  {\r\n   return AsyncResultM.whileLoop(guard,fRA);\r\n  },\r\n  Using:function(resource,fRA)\r\n  {\r\n   return Concurrency.Using(resource,fRA);\r\n  },\r\n  TryFinally:function(fRA,fn)\r\n  {\r\n   var b;\r\n   b=null;\r\n   return Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.TryFinally(Concurrency.Delay(function()\r\n    {\r\n     return fRA();\r\n    }),function()\r\n    {\r\n     fn();\r\n    });\r\n   });\r\n  },\r\n  TryWith:function(fRA,hnd)\r\n  {\r\n   var b;\r\n   b=null;\r\n   return Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.TryWith(Concurrency.Delay(function()\r\n    {\r\n     return fRA();\r\n    }),function(a)\r\n    {\r\n     return hnd(a);\r\n    });\r\n   });\r\n  },\r\n  Run:function(fRA)\r\n  {\r\n   return AsyncResultM.bind(fRA,AsyncResultM.rtn());\r\n  },\r\n  Delay:Global.id,\r\n  Combine:function(vR,fRA)\r\n  {\r\n   return AsyncResultM.bind(fRA,AsyncResultM.rtnR(vR));\r\n  },\r\n  Combine$1:function(vRA,fRA)\r\n  {\r\n   return AsyncResultM.bind(fRA,vRA);\r\n  },\r\n  Bind:function(w,r)\r\n  {\r\n   return AsyncResultM.bindrA(r,w);\r\n  },\r\n  Bind$1:function(w,r)\r\n  {\r\n   return AsyncResultM.bindR(r,w);\r\n  },\r\n  Bind$2:function(w,r)\r\n  {\r\n   return AsyncResultM.bindM(r,w);\r\n  },\r\n  Bind$3:function(w,r)\r\n  {\r\n   return AsyncResultM.bindr(r,w);\r\n  },\r\n  Bind$4:function(vRA,fRA)\r\n  {\r\n   return AsyncResultM.bind(fRA,vRA);\r\n  },\r\n  Zero:function()\r\n  {\r\n   return AsyncResultM.rtn();\r\n  },\r\n  Return:function(v)\r\n  {\r\n   return AsyncResultM.rtn(v);\r\n  },\r\n  ReturnFrom:function(vR)\r\n  {\r\n   return AsyncResultM.rtnrA(vR);\r\n  },\r\n  ReturnFrom$1:function(vR)\r\n  {\r\n   return AsyncResultM.rtnR(vR);\r\n  },\r\n  ReturnFrom$2:function(vR)\r\n  {\r\n   return AsyncResultM.rtnM(vR);\r\n  },\r\n  ReturnFrom$3:function(vR)\r\n  {\r\n   return AsyncResultM.rtnr(vR);\r\n  },\r\n  ReturnFrom$4:Global.id\r\n },Obj,AsyncResultMBuilder);\r\n AsyncResultMBuilder.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },AsyncResultMBuilder);\r\n Operators$2.rtn=function(v)\r\n {\r\n  return AsyncResultM.rtn(v);\r\n };\r\n Operators$2.op_GreaterEqualsGreater=function(f,g,v)\r\n {\r\n  return Operators$2.op_GreaterGreaterEquals(f(v),g);\r\n };\r\n Operators$2.op_GreaterMinusGreater=function(f,g,v)\r\n {\r\n  return Operators$2.op_BarGreaterGreater(f(v),g);\r\n };\r\n Operators$2.op_GreaterGreaterEquals=function(v,f)\r\n {\r\n  return AsyncResultM.bind(f,v);\r\n };\r\n Operators$2.op_BarGreaterGreater=function(v,f)\r\n {\r\n  return AsyncResultM.map(f,v);\r\n };\r\n AsyncResultM.getResultM=function(a)\r\n {\r\n  function g(v)\r\n  {\r\n   return Concurrency.Return(v);\r\n  }\r\n  return Concurrency.Bind(a,function(x)\r\n  {\r\n   return g(Monads.OkM$1(x));\r\n  });\r\n };\r\n AsyncResultM.absorbO=function(f,vORA)\r\n {\r\n  function f$1(v)\r\n  {\r\n   return ResultM.absorbO(f,v);\r\n  }\r\n  function g(v)\r\n  {\r\n   return Concurrency.Return(v);\r\n  }\r\n  return Concurrency.Bind(vORA,function(x)\r\n  {\r\n   return g(f$1(x));\r\n  });\r\n };\r\n AsyncResultM.absorbR=function(vRRA)\r\n {\r\n  var f;\r\n  function g(v)\r\n  {\r\n   return Concurrency.Return(v);\r\n  }\r\n  return Concurrency.Bind(vRRA,(f=function(r)\r\n  {\r\n   return ResultM.bindP(Global.id,r);\r\n  },function(x)\r\n  {\r\n   return g(f(x));\r\n  }));\r\n };\r\n AsyncResultM.insertR=function(vRAR)\r\n {\r\n  return vRAR.$==0?AsyncResultM.map(function(a)\r\n  {\r\n   return{\r\n    $:0,\r\n    $0:a\r\n   };\r\n  },vRAR.$0):AsyncResultM.rtn(Library.Error$1(vRAR.$0));\r\n };\r\n AsyncResultM.insertO=function(vRAO)\r\n {\r\n  var o;\r\n  o=vRAO==null?null:{\r\n   $:1,\r\n   $0:AsyncResultM.map(function(a)\r\n   {\r\n    return{\r\n     $:1,\r\n     $0:a\r\n    };\r\n   },vRAO.$0)\r\n  };\r\n  return o==null?AsyncResultM.rtn(null):o.$0;\r\n };\r\n AsyncResultM.sequenceSeq=function(sq)\r\n {\r\n  return AsyncResultM.traverseSeq(Global.id,sq);\r\n };\r\n AsyncResultM.traverseSeq=function(f,sq)\r\n {\r\n  return AsyncResultM.map(Global.id,Arrays.foldBack(function(head,tail)\r\n  {\r\n   return AsyncResultM.op_GreaterGreaterEquals(f(head),function(h)\r\n   {\r\n    return AsyncResultM.op_GreaterGreaterEquals(tail,function(t)\r\n    {\r\n     return AsyncResultM.rtn(new List.T({\r\n      $:1,\r\n      $0:h,\r\n      $1:t\r\n     }));\r\n    });\r\n   });\r\n  },Arrays.ofSeq(sq),AsyncResultM.rtn(List.T.Empty)));\r\n };\r\n AsyncResultM.op_GreaterGreaterEquals=function(v,f)\r\n {\r\n  return AsyncResultM.bind(f,v);\r\n };\r\n AsyncResultM.whileLoop=function(cond,fRA)\r\n {\r\n  return cond()?AsyncResultM.bind(function()\r\n  {\r\n   return AsyncResultM.whileLoop(cond,fRA);\r\n  },fRA()):AsyncResultM.rtn();\r\n };\r\n AsyncResultM.map=function(f,m)\r\n {\r\n  return AsyncResultM.bind(function(x)\r\n  {\r\n   return AsyncResultM.rtn(f(x));\r\n  },m);\r\n };\r\n AsyncResultM.bindR=function(f,a)\r\n {\r\n  return AsyncResultM.bind(f,AsyncResultM.rtnR(a));\r\n };\r\n AsyncResultM.bindrA=function(f,a)\r\n {\r\n  return AsyncResultM.bind(f,AsyncResultM.rtnrA(a));\r\n };\r\n AsyncResultM.bindM=function(f,a)\r\n {\r\n  return AsyncResultM.bind(f,AsyncResultM.rtnM(a));\r\n };\r\n AsyncResultM.bindr=function(f,a)\r\n {\r\n  return AsyncResultM.bind(f,AsyncResultM.rtnr(a));\r\n };\r\n AsyncResultM.bind=function(fRA,vRA)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.TryWith(Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.Bind(vRA,function(a)\r\n    {\r\n     var a$1,m;\r\n     function f(r)\r\n     {\r\n      return ResultM.addMsg(m,r);\r\n     }\r\n     function g(v)\r\n     {\r\n      return Concurrency.Return(v);\r\n     }\r\n     a$1=Monads.OkM(a);\r\n     return a$1.$==1?Concurrency.Return(Monads.ErrorM(a$1.$0)):(m=a$1.$0[1],Concurrency.Bind(fRA(a$1.$0[0]),function(x)\r\n     {\r\n      return g(f(x));\r\n     }));\r\n    });\r\n   }),function(a)\r\n   {\r\n    return Concurrency.Return(Monads.ErrorM(new ResultMessage({\r\n     $:5,\r\n     $0:a.message,\r\n     $1:a.stack\r\n    })));\r\n   });\r\n  });\r\n };\r\n AsyncResultM.iterpA=function(f,vRA)\r\n {\r\n  function g(v)\r\n  {\r\n   Library.print$1(v);\r\n  }\r\n  AsyncResultM.iterA(function(x)\r\n  {\r\n   return g(ResultMessage.summarized(x));\r\n  },f,vRA);\r\n };\r\n AsyncResultM.iterpS=function(f,vRA)\r\n {\r\n  function g(v)\r\n  {\r\n   Library.print$1(v);\r\n  }\r\n  AsyncResultM.iterS(function(x)\r\n  {\r\n   return g(ResultMessage.summarized(x));\r\n  },f,vRA);\r\n };\r\n AsyncResultM.iterA=function(fE,f,vRA)\r\n {\r\n  function f$1(r)\r\n  {\r\n   ResultM.iter(fE,f,r);\r\n  }\r\n  function g(v)\r\n  {\r\n   return Concurrency.Return(v);\r\n  }\r\n  Concurrency.Start(Concurrency.Bind(vRA,function(x)\r\n  {\r\n   return g(f$1(x));\r\n  }),null);\r\n };\r\n AsyncResultM.iterS=function(fE,f,vRA)\r\n {\r\n  throw\"iterS cannot be used in JavaScript!\";\r\n };\r\n AsyncResultM.errorMsgf=function(fmt)\r\n {\r\n  var f;\r\n  function f$1(a)\r\n  {\r\n   return new ResultMessage({\r\n    $:1,\r\n    $0:a\r\n   });\r\n  }\r\n  function g(a)\r\n  {\r\n   return Concurrency.Return(a);\r\n  }\r\n  return fmt((f=function(x)\r\n  {\r\n   return Monads.ErrorM(f$1(x));\r\n  },function(x)\r\n  {\r\n   return g(f(x));\r\n  }));\r\n };\r\n AsyncResultM.rtnrA=function(vrA)\r\n {\r\n  function g(v)\r\n  {\r\n   return Concurrency.Return(v);\r\n  }\r\n  return Concurrency.Bind(vrA,function(x)\r\n  {\r\n   return g(ResultM.ofResult(x));\r\n  });\r\n };\r\n AsyncResultM.rtnM=function(vM)\r\n {\r\n  return Concurrency.Return(ResultM.rtnM(vM));\r\n };\r\n AsyncResultM.rtnR=function(vR)\r\n {\r\n  return Concurrency.Return(vR);\r\n };\r\n AsyncResultM.rtnr=function(vR)\r\n {\r\n  return Concurrency.Return(ResultM.rtnr(vR));\r\n };\r\n AsyncResultM.rtn=function(v)\r\n {\r\n  return Concurrency.Return(Monads.OkM$1(v));\r\n };\r\n AsyncResultM.freeMessage=function(v)\r\n {\r\n  function g(v$1)\r\n  {\r\n   return Concurrency.Return(v$1);\r\n  }\r\n  return Concurrency.Bind(v,function(x)\r\n  {\r\n   return g(ResultM.freeMessage(x));\r\n  });\r\n };\r\n AsyncResultM.mapError=function(fE,v)\r\n {\r\n  function f(a)\r\n  {\r\n   return ResultM.mapMessage(fE,a);\r\n  }\r\n  function g(v$1)\r\n  {\r\n   return Concurrency.Return(v$1);\r\n  }\r\n  return Concurrency.Bind(v,function(x)\r\n  {\r\n   return g(f(x));\r\n  });\r\n };\r\n AsyncResultMAutoOpen[\"AsyncResultMBuilder.Combine\"]=function(__,vA,fRA)\r\n {\r\n  function g(v)\r\n  {\r\n   return Concurrency.Return(v);\r\n  }\r\n  return AsyncResultM.bind(fRA,Concurrency.Bind(vA,function(x)\r\n  {\r\n   return g(Monads.OkM$1(x));\r\n  }));\r\n };\r\n AsyncResultMAutoOpen[\"AsyncResultMBuilder.Bind\"]=function(__,vA,fRA)\r\n {\r\n  function g(v)\r\n  {\r\n   return Concurrency.Return(v);\r\n  }\r\n  return AsyncResultM.bind(fRA,Concurrency.Bind(vA,function(x)\r\n  {\r\n   return g(Monads.OkM$1(x));\r\n  }));\r\n };\r\n AsyncResultMAutoOpen[\"AsyncResultMBuilder.ReturnFrom\"]=function(__,vA)\r\n {\r\n  function g(v)\r\n  {\r\n   return Concurrency.Return(v);\r\n  }\r\n  return Concurrency.Bind(vA,function(x)\r\n  {\r\n   return g(Monads.OkM$1(x));\r\n  });\r\n };\r\n AsyncResultMAutoOpen.asyncResultM=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.asyncResultM;\r\n };\r\n Monads.OkM=function(r)\r\n {\r\n  return r.$0==null?{\r\n   $:1,\r\n   $0:r.$1\r\n  }:{\r\n   $:0,\r\n   $0:[r.$0.$0,r.$1]\r\n  };\r\n };\r\n Monads.ErrorM=function(m)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:null,\r\n   $1:m\r\n  };\r\n };\r\n Monads.OkMWithMsg=function(v,m)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:{\r\n    $:1,\r\n    $0:v\r\n   },\r\n   $1:m\r\n  };\r\n };\r\n Monads.OkM$1=function(v)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:{\r\n    $:1,\r\n    $0:v\r\n   },\r\n   $1:ResultMessage.NoMsg\r\n  };\r\n };\r\n Library.print$1=function(v)\r\n {\r\n  if(typeof v==\"string\")\r\n   ((function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(Utils.toSafe($2));\r\n    };\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }))(v));\r\n  else\r\n   ((function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(Utils.prettyPrint($2));\r\n    };\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }))(v));\r\n };\r\n Library.Error$1=function(a)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:a\r\n  };\r\n };\r\n Promise.ofAsyncResult=function(v)\r\n {\r\n  return new Global.Promise(function(resolve,reject)\r\n  {\r\n   Concurrency.StartWithContinuations(v,function(a)\r\n   {\r\n    if(a.$==1)\r\n     reject((function($1)\r\n     {\r\n      return function($2)\r\n      {\r\n       return $1(Utils.prettyPrint($2));\r\n      };\r\n     }(Global.id))(a.$0));\r\n    else\r\n     resolve(a.$0);\r\n   },function(a)\r\n   {\r\n    reject(a);\r\n   },function(a)\r\n   {\r\n    reject(a);\r\n   },null);\r\n  });\r\n };\r\n PromiseM.ofAsyncResultM=function(v)\r\n {\r\n  return new Global.Promise(function(resolve,reject)\r\n  {\r\n   Concurrency.StartWithContinuations(v,function(a)\r\n   {\r\n    var a$1;\r\n    a$1=Monads.OkM(a);\r\n    a$1.$==1?reject(ResultMessage.summarized(a$1.$0)):resolve(a$1.$0[0]);\r\n   },function(a)\r\n   {\r\n    reject(a);\r\n   },function(a)\r\n   {\r\n    reject(a);\r\n   },null);\r\n  });\r\n };\r\n Position.New=function(line,col)\r\n {\r\n  return{\r\n   line:line,\r\n   col:col\r\n  };\r\n };\r\n AnnotationType.Hint={\r\n  $:3\r\n };\r\n AnnotationType.Info={\r\n  $:2\r\n };\r\n AnnotationType.Warning={\r\n  $:1\r\n };\r\n AnnotationType.Error={\r\n  $:0\r\n };\r\n Annotation.New=function(startP,endP,severity,message)\r\n {\r\n  return{\r\n   startP:startP,\r\n   endP:endP,\r\n   severity:severity,\r\n   message:message\r\n  };\r\n };\r\n Completion.New=function(kind,label,detail,replace)\r\n {\r\n  return{\r\n   kind:kind,\r\n   label:label,\r\n   detail:detail,\r\n   replace:replace\r\n  };\r\n };\r\n GenEditorHook.New=function(generateDoc,getValue,setValue,setDisabled,showAnnotations,posFromIndex,indexFromPos,getWordAt,getSelectionText,getUri,setUri,hookOnChange)\r\n {\r\n  return{\r\n   generateDoc:generateDoc,\r\n   getValue:getValue,\r\n   setValue:setValue,\r\n   setDisabled:setDisabled,\r\n   showAnnotations:showAnnotations,\r\n   posFromIndex:posFromIndex,\r\n   indexFromPos:indexFromPos,\r\n   getWordAt:getWordAt,\r\n   getSelectionText:getSelectionText,\r\n   getUri:getUri,\r\n   setUri:setUri,\r\n   hookOnChange:hookOnChange\r\n  };\r\n };\r\n GenEditor$1.New=function(_var,disabled,annotations,onChange,onRender,autoCompletion,toolTip,declaration,editorO,editorHook)\r\n {\r\n  return{\r\n   \"var\":_var,\r\n   disabled:disabled,\r\n   annotations:annotations,\r\n   onChange:onChange,\r\n   onRender:onRender,\r\n   autoCompletion:autoCompletion,\r\n   toolTip:toolTip,\r\n   declaration:declaration,\r\n   editorO:editorO,\r\n   editorHook:editorHook\r\n  };\r\n };\r\n GenEditor.generateDoc=function(genE)\r\n {\r\n  var onChange,o,o$1;\r\n  onChange=(o=(o$1=genE.onChange,o$1==null?null:{\r\n   $:1,\r\n   $0:o$1.$0(genE)\r\n  }),o==null?Global.ignore:o.$0);\r\n  return(genE.editorHook.generateDoc(genE))(function(ed)\r\n  {\r\n   genE.editorO={\r\n    $:1,\r\n    $0:ed\r\n   };\r\n   GenEditor.bindVarEditor(genE.editorHook.hookOnChange,genE.editorHook.getValue,genE.editorHook.setValue,onChange,genE[\"var\"]);\r\n   View.Sink(genE.editorHook.showAnnotations,genE.annotations);\r\n   View.Sink(genE.editorHook.setDisabled,genE.disabled);\r\n   genE.onRender(genE);\r\n  });\r\n };\r\n GenEditor.bindVarEditor=function(setEvent,getVal,setVal,onChange,_var)\r\n {\r\n  var editorChanged,varChanged;\r\n  editorChanged=[0];\r\n  varChanged=[0];\r\n  setEvent(function()\r\n  {\r\n   var v;\r\n   v=getVal();\r\n   !Unchecked.Equals(_var.Get(),v)?(editorChanged[0]=editorChanged[0]+1,_var.Set(v),onChange(v)):void 0;\r\n  });\r\n  View.Sink(function()\r\n  {\r\n   if(editorChanged[0]>varChanged[0])\r\n    varChanged[0]=editorChanged[0];\r\n   else\r\n    if(!Unchecked.Equals(getVal(),_var.Get()))\r\n     setVal(_var.Get());\r\n  },_var.get_View());\r\n };\r\n GenEditor.newVarO=function(edh,v)\r\n {\r\n  var x;\r\n  x=GenEditor.newVar(edh,Var$1.Lens(v,function(o)\r\n  {\r\n   return o==null?\"\":o.$0;\r\n  },function(sO,s)\r\n  {\r\n   return sO==null?null:{\r\n    $:1,\r\n    $0:s\r\n   };\r\n  }));\r\n  return GenEditor.disabled(View.Map(function($1)\r\n  {\r\n   return $1==null;\r\n  },v.get_View()),x);\r\n };\r\n GenEditor.newText=function(edh,v)\r\n {\r\n  return GenEditor.newVar(edh,Var$1.Create$1(v));\r\n };\r\n GenEditor.newVar=function(edh,_var)\r\n {\r\n  return GenEditor$1.New(_var,View.Const(false),View.Const([]),null,Global.ignore,null,null,null,null,edh);\r\n };\r\n GenEditor[\"var\"]=function(genE)\r\n {\r\n  return genE[\"var\"];\r\n };\r\n GenEditor.disabled=function(dis,genE)\r\n {\r\n  return GenEditor$1.New(genE[\"var\"],dis,genE.annotations,genE.onChange,genE.onRender,genE.autoCompletion,genE.toolTip,genE.declaration,genE.editorO,genE.editorHook);\r\n };\r\n GenEditor.onRender=function(f,genE)\r\n {\r\n  return GenEditor$1.New(genE[\"var\"],genE.disabled,genE.annotations,genE.onChange,f,genE.autoCompletion,genE.toolTip,genE.declaration,genE.editorO,genE.editorHook);\r\n };\r\n GenEditor.onChange=function(f,genE)\r\n {\r\n  return GenEditor$1.New(genE[\"var\"],genE.disabled,genE.annotations,f,genE.onRender,genE.autoCompletion,genE.toolTip,genE.declaration,genE.editorO,genE.editorHook);\r\n };\r\n GenEditor.setVar=function(v,genE)\r\n {\r\n  return GenEditor$1.New(v,genE.disabled,genE.annotations,genE.onChange,genE.onRender,genE.autoCompletion,genE.toolTip,genE.declaration,genE.editorO,genE.editorHook);\r\n };\r\n ResizeObserver.addResizeObserver$1=function(f,el)\r\n {\r\n  var r,ro,changed,b;\r\n  try\r\n  {\r\n   r=!(!Global.ResizeObserver);\r\n  }\r\n  catch(e)\r\n  {\r\n   r=false;\r\n  }\r\n  if(r)\r\n   {\r\n    ro=new Global.ResizeObserver(f);\r\n    ResizeObserver.set_observers$1(new List.T({\r\n     $:1,\r\n     $0:ro,\r\n     $1:ResizeObserver.observers$1()\r\n    }));\r\n    ro.observe(el);\r\n   }\r\n  else\r\n   {\r\n    changed=ResizeObserver.dimsChanged$1(el);\r\n    Concurrency.Start((b=null,Concurrency.Delay(function()\r\n    {\r\n     return Concurrency.While(function()\r\n     {\r\n      return el.isConnected;\r\n     },Concurrency.Delay(function()\r\n     {\r\n      return Concurrency.Bind(Concurrency.Sleep(110),function()\r\n      {\r\n       return changed()?(f(),Concurrency.Zero()):Concurrency.Zero();\r\n      });\r\n     }));\r\n    })),null);\r\n   }\r\n };\r\n ResizeObserver.dimsChanged$1=function(el)\r\n {\r\n  var dims;\r\n  dims=[el.getBoundingClientRect()];\r\n  return function()\r\n  {\r\n   var ndims;\r\n   ndims=el.getBoundingClientRect();\r\n   return Unchecked.Equals(ResizeObserver.domRect2Tuple$1(dims[0]),ResizeObserver.domRect2Tuple$1(ndims))?false:(dims[0]=ndims,true);\r\n  };\r\n };\r\n ResizeObserver.domRect2Tuple$1=function(r)\r\n {\r\n  return[r.top,r.left,r.width,r.height];\r\n };\r\n ResizeObserver.observers$1=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.observers;\r\n };\r\n ResizeObserver.set_observers$1=function($1)\r\n {\r\n  SC$1.$cctor();\r\n  SC$1.observers=$1;\r\n };\r\n Position$1.New=function(column,lineNumber)\r\n {\r\n  return{\r\n   column:column,\r\n   lineNumber:lineNumber\r\n  };\r\n };\r\n Range.New=function(startColumn,endColumn,startLineNumber,endLineNumber)\r\n {\r\n  return{\r\n   startColumn:startColumn,\r\n   endColumn:endColumn,\r\n   startLineNumber:startLineNumber,\r\n   endLineNumber:endLineNumber\r\n  };\r\n };\r\n Uri.New=function(authority,fragment,fsPath,path,query,scheme)\r\n {\r\n  return{\r\n   authority:authority,\r\n   fragment:fragment,\r\n   fsPath:fsPath,\r\n   path:path,\r\n   query:query,\r\n   scheme:scheme\r\n  };\r\n };\r\n Location.New=function(range,uri)\r\n {\r\n  return{\r\n   range:range,\r\n   uri:uri\r\n  };\r\n };\r\n FindMatch.New=function(matches,range)\r\n {\r\n  return{\r\n   matches:matches,\r\n   range:range\r\n  };\r\n };\r\n WordAtPosition.New=function(endColumn,startColumn,word)\r\n {\r\n  return{\r\n   endColumn:endColumn,\r\n   startColumn:startColumn,\r\n   word:word\r\n  };\r\n };\r\n Model.New=function(uri)\r\n {\r\n  return{\r\n   uri:uri\r\n  };\r\n };\r\n MarkDownString.New=function(value,isTrusted)\r\n {\r\n  return{\r\n   value:value,\r\n   isTrusted:isTrusted\r\n  };\r\n };\r\n MarkerData.New=function(startColumn,endColumn,startLineNumber,endLineNumber,severity,message)\r\n {\r\n  return{\r\n   startColumn:startColumn,\r\n   endColumn:endColumn,\r\n   startLineNumber:startLineNumber,\r\n   endLineNumber:endLineNumber,\r\n   severity:severity,\r\n   message:message\r\n  };\r\n };\r\n CompletionItem.New=function(kind,label,detail)\r\n {\r\n  return{\r\n   kind:kind,\r\n   label:label,\r\n   detail:detail\r\n  };\r\n };\r\n Hover.New=function(contents,range)\r\n {\r\n  return{\r\n   contents:contents,\r\n   range:range\r\n  };\r\n };\r\n Editor=Monaco.Editor=Runtime.Class({},Obj,Editor);\r\n Editor.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },Editor);\r\n MonacoConfig.New=function(_var,onChange,onRender,editorO,disabled,options,overrides)\r\n {\r\n  return{\r\n   \"var\":_var,\r\n   onChange:onChange,\r\n   onRender:onRender,\r\n   editorO:editorO,\r\n   disabled:disabled,\r\n   options:options,\r\n   overrides:overrides\r\n  };\r\n };\r\n Monaco.newVarO=function(v)\r\n {\r\n  var x;\r\n  x=Monaco.newVar(Var$1.Lens(v,function(o)\r\n  {\r\n   return o==null?\"\":o.$0;\r\n  },function(sO,s)\r\n  {\r\n   return sO==null?null:{\r\n    $:1,\r\n    $0:s\r\n   };\r\n  }));\r\n  return Monaco.disabled(View.Map(function($1)\r\n  {\r\n   return $1==null;\r\n  },v.get_View()),x);\r\n };\r\n Monaco.newText=function(v)\r\n {\r\n  return Monaco.newVar(Var$1.Create$1(v));\r\n };\r\n Monaco[\"var\"]=function(monc)\r\n {\r\n  return monc[\"var\"];\r\n };\r\n Monaco.disabled=function(dis,monc)\r\n {\r\n  return MonacoConfig.New(monc[\"var\"],monc.onChange,monc.onRender,monc.editorO,dis,monc.options,monc.overrides);\r\n };\r\n Monaco.onRender=function(f,monc)\r\n {\r\n  return MonacoConfig.New(monc[\"var\"],monc.onChange,{\r\n   $:1,\r\n   $0:f\r\n  },monc.editorO,monc.disabled,monc.options,monc.overrides);\r\n };\r\n Monaco.onChange=function(f,monc)\r\n {\r\n  return MonacoConfig.New(monc[\"var\"],f,monc.onRender,monc.editorO,monc.disabled,monc.options,monc.overrides);\r\n };\r\n Monaco.setVar=function(v,monc)\r\n {\r\n  return MonacoConfig.New(v,monc.onChange,monc.onRender,monc.editorO,monc.disabled,monc.options,monc.overrides);\r\n };\r\n Monaco.render$951$48=function(monc)\r\n {\r\n  return function(elchild)\r\n  {\r\n   var editor,_elt,o;\r\n   editor=(_elt=elchild.parentElement,self.monaco.editor.create(_elt,monc.options,monc.overrides));\r\n   ResizeObserver.addResizeObserver$1(function()\r\n   {\r\n    editor.layout();\r\n   },elchild.parentElement);\r\n   elchild.parentNode.removeChild(elchild);\r\n   monc.editorO={\r\n    $:1,\r\n    $0:editor\r\n   };\r\n   o=monc.onRender;\r\n   o==null?void 0:o.$0(editor);\r\n   GenEditor.bindVarEditor(function(a)\r\n   {\r\n    editor.onDidChangeModelContent(a);\r\n   },function()\r\n   {\r\n    return editor.getValue();\r\n   },function(a)\r\n   {\r\n    editor.setValue(a);\r\n   },monc.onChange,monc[\"var\"]);\r\n  };\r\n };\r\n Monaco.render=function(monc)\r\n {\r\n  var b;\r\n  return Doc.Async((b=null,Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(Monaco.loader(),function()\r\n   {\r\n    return Concurrency.Return(Doc.Element(\"div\",[AttrProxy.OnAfterRenderImpl(function(elchild)\r\n    {\r\n     var editor,_elt,o;\r\n     editor=(_elt=elchild.parentElement,self.monaco.editor.create(_elt,monc.options,monc.overrides));\r\n     ResizeObserver.addResizeObserver$1(function()\r\n     {\r\n      editor.layout();\r\n     },elchild.parentElement);\r\n     elchild.parentNode.removeChild(elchild);\r\n     monc.editorO={\r\n      $:1,\r\n      $0:editor\r\n     };\r\n     o=monc.onRender;\r\n     o==null?void 0:o.$0(editor);\r\n     GenEditor.bindVarEditor(function(a)\r\n     {\r\n      editor.onDidChangeModelContent(a);\r\n     },function()\r\n     {\r\n      return editor.getValue();\r\n     },function(a)\r\n     {\r\n      editor.setValue(a);\r\n     },monc.onChange,monc[\"var\"]);\r\n    })],[]));\r\n   });\r\n  })));\r\n };\r\n Monaco.loader=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.loader;\r\n };\r\n Monaco.newVar=function(_var)\r\n {\r\n  return MonacoConfig.New(_var,Global.ignore,null,null,View.Const(false),null,null);\r\n };\r\n MonacoRT.New=function(editorO,onChange,options,overrides)\r\n {\r\n  return{\r\n   editorO:editorO,\r\n   onChange:onChange,\r\n   options:options,\r\n   overrides:overrides\r\n  };\r\n };\r\n CompletionItemProvider=MonacoGenAdapter.CompletionItemProvider=Runtime.Class({\r\n  resolveCompletionItem:function(item,token)\r\n  {\r\n   return CompletionItem.New(item.kind,item.label,\"more details\");\r\n  },\r\n  provideCompletionItems:function(model,pos,token,context)\r\n  {\r\n   var $this,b;\r\n   $this=this;\r\n   return PromiseM.ofAsyncResultM((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()\r\n   {\r\n    return AsyncResultMAutoOpen[\"AsyncResultMBuilder.Bind\"](b,$this.autoComplete(Position.New(pos.lineNumber,pos.column)),function(a)\r\n    {\r\n     return b.Return(Arrays.map(function(comp)\r\n     {\r\n      return CompletionItem.New(MonacoGenAdapter.convertGlyphChar(comp.kind),comp.label,comp.detail);\r\n     },a));\r\n    });\r\n   }))));\r\n  }\r\n },Obj,CompletionItemProvider);\r\n CompletionItemProvider.New=Runtime.Ctor(function(autoComplete)\r\n {\r\n  Obj.New.call(this);\r\n  this.autoComplete=autoComplete;\r\n },CompletionItemProvider);\r\n HoverProvider=MonacoGenAdapter.HoverProvider=Runtime.Class({\r\n  provideHover:function(model,pos,token)\r\n  {\r\n   var $this,b;\r\n   $this=this;\r\n   return PromiseM.ofAsyncResultM((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()\r\n   {\r\n    return AsyncResultMAutoOpen[\"AsyncResultMBuilder.Bind\"](b,$this.toolTip(Position.New(pos.lineNumber,pos.column)),function(a)\r\n    {\r\n     return a!=null&&a.$==1?b.Return(Hover.New([MarkDownString.New(a.$0,true)],null)):b.Return(null);\r\n    });\r\n   }))));\r\n  }\r\n },Obj,HoverProvider);\r\n HoverProvider.New=Runtime.Ctor(function(toolTip)\r\n {\r\n  Obj.New.call(this);\r\n  this.toolTip=toolTip;\r\n },HoverProvider);\r\n DefinitionProvider=MonacoGenAdapter.DefinitionProvider=Runtime.Class({\r\n  provideDefinition:function(model,pos,token)\r\n  {\r\n   var $this,b;\r\n   $this=this;\r\n   return PromiseM.ofAsyncResultM((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()\r\n   {\r\n    return AsyncResultMAutoOpen[\"AsyncResultMBuilder.Bind\"](b,$this.declaration(Position.New(pos.lineNumber,pos.column)),function(a)\r\n    {\r\n     var pos$1;\r\n     return a!=null&&a.$==1?(pos$1=a.$0[0],b.Return(Location.New(Range.New(pos$1.col,pos$1.col,pos$1.line,pos$1.line),self.monaco.Uri.parse(a.$0[1])))):b.Return(null);\r\n    });\r\n   }))));\r\n  }\r\n },Obj,DefinitionProvider);\r\n DefinitionProvider.New=Runtime.Ctor(function(declaration)\r\n {\r\n  Obj.New.call(this);\r\n  this.declaration=declaration;\r\n },DefinitionProvider);\r\n MonacoGenAdapter.newVar=function(options,overrides,v)\r\n {\r\n  return GenEditor.newVar(MonacoGenAdapter.newHook(MonacoGenAdapter.newRT(options,overrides)),v);\r\n };\r\n MonacoGenAdapter.newRT=function(options,overrides)\r\n {\r\n  return MonacoRT.New(null,Global.ignore,options,overrides);\r\n };\r\n MonacoGenAdapter.newHook=function(monRT)\r\n {\r\n  function g(g$1,o)\r\n  {\r\n   return MonacoGenAdapter.generateDoc(monRT,g$1,o);\r\n  }\r\n  return GenEditorHook.New(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return g($1,$2);\r\n   };\r\n  },function()\r\n  {\r\n   return MonacoGenAdapter.getValue(monRT);\r\n  },function(t)\r\n  {\r\n   MonacoGenAdapter.setValue(monRT,t);\r\n  },Global.ignore,function(a)\r\n  {\r\n   MonacoGenAdapter.showAnnotations(monRT,a);\r\n  },function(i)\r\n  {\r\n   return MonacoGenAdapter.posFromIndex(monRT,i);\r\n  },function(p)\r\n  {\r\n   return MonacoGenAdapter.indexFromPos(monRT,p);\r\n  },function(p)\r\n  {\r\n   return MonacoGenAdapter.getWordAt(monRT,p);\r\n  },function()\r\n  {\r\n   return MonacoGenAdapter.getSelect(monRT);\r\n  },function()\r\n  {\r\n   return MonacoGenAdapter.getUri(monRT);\r\n  },function(u)\r\n  {\r\n   MonacoGenAdapter.setUri(monRT,u);\r\n  },function(f)\r\n  {\r\n   monRT.onChange=f;\r\n  });\r\n };\r\n MonacoGenAdapter.showAnnotations=function(monRT,ans)\r\n {\r\n  MonacoGenAdapter.iterEditor(monRT,function(ed)\r\n  {\r\n   var ms,_m;\r\n   ms=Arrays.ofSeq(Seq$1.map(function(an)\r\n   {\r\n    var m;\r\n    return MarkerData.New(an.startP.col,an.endP.col,an.startP.line,an.endP.line,(m=an.severity,m.$==0?8:m.$==1?4:m.$==3?1:2),an.message);\r\n   },ans));\r\n   _m=ed.getModel();\r\n   self.monaco.editor.setModelMarkers(_m,\"annotations\",ms);\r\n  });\r\n };\r\n MonacoGenAdapter.getSelect=function(monRT)\r\n {\r\n  var o;\r\n  o=MonacoGenAdapter.mapEditor(monRT,function(ed)\r\n  {\r\n   var x;\r\n   x=ed.getSelection();\r\n   return ed.getModel().getValueInRange(x);\r\n  });\r\n  return o==null?\"\":o.$0;\r\n };\r\n MonacoGenAdapter.getWordAt=function(monRT,pos)\r\n {\r\n  return MonacoGenAdapter.bindEditor(monRT,function(ed)\r\n  {\r\n   var word;\r\n   word=ed.getModel().getWordAtPosition(Position$1.New(pos.col,pos.line));\r\n   return!word?null:{\r\n    $:1,\r\n    $0:[word.word,Position.New(pos.line,word.startColumn)]\r\n   };\r\n  });\r\n };\r\n MonacoGenAdapter.setValue=function(monRT,txt)\r\n {\r\n  MonacoGenAdapter.iterEditor(monRT,function(ed)\r\n  {\r\n   ed.setValue(txt);\r\n  });\r\n };\r\n MonacoGenAdapter.getValue=function(monRT)\r\n {\r\n  var o;\r\n  o=MonacoGenAdapter.mapEditor(monRT,function(ed)\r\n  {\r\n   return ed.getValue();\r\n  });\r\n  return o==null?\"\":o.$0;\r\n };\r\n MonacoGenAdapter.setUri=function(monRT,uri)\r\n {\r\n  MonacoGenAdapter.iterEditor(monRT,function(ed)\r\n  {\r\n   ed.getModel().uri=self.monaco.Uri.parse(uri);\r\n  });\r\n };\r\n MonacoGenAdapter.getUri=function(monRT)\r\n {\r\n  var o;\r\n  o=MonacoGenAdapter.mapEditor(monRT,function(ed)\r\n  {\r\n   return Global.String(ed.getModel().uri);\r\n  });\r\n  return o==null?\"\":o.$0;\r\n };\r\n MonacoGenAdapter.generateDoc$1093$48=function(monRT,onRender,genE)\r\n {\r\n  return function(elchild)\r\n  {\r\n   var editor,_elt,o,_p,o$1,_p$1,o$2,_p$2;\r\n   editor=(_elt=elchild.parentElement,self.monaco.editor.create(_elt,monRT.options,monRT.overrides));\r\n   ResizeObserver.addResizeObserver$1(function()\r\n   {\r\n    editor.layout();\r\n   },elchild.parentElement);\r\n   elchild.parentNode.removeChild(elchild);\r\n   monRT.editorO={\r\n    $:1,\r\n    $0:editor\r\n   };\r\n   onRender(editor);\r\n   editor.onDidChangeModelContent(monRT.onChange);\r\n   o=genE.toolTip;\r\n   o==null?void 0:(_p=new HoverProvider.New(o.$0(genE)),self.monaco.languages.registerHoverProvider(\"fsharp\",_p));\r\n   o$1=genE.declaration;\r\n   o$1==null?void 0:(_p$1=new DefinitionProvider.New(o$1.$0(genE)),self.monaco.languages.registerDefinitionProvider(\"fsharp\",_p$1));\r\n   o$2=genE.autoCompletion;\r\n   o$2==null?void 0:(_p$2=new CompletionItemProvider.New(o$2.$0(genE)),self.monaco.languages.registerCompletionItemProvider(\"fsharp\",_p$2));\r\n  };\r\n };\r\n MonacoGenAdapter.generateDoc=function(monRT,genE,onRender)\r\n {\r\n  var b;\r\n  return Doc.Async((b=null,Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(Monaco.loader(),function()\r\n   {\r\n    return Concurrency.Return(Doc.Element(\"div\",[AttrProxy.OnAfterRenderImpl(function(elchild)\r\n    {\r\n     var editor,_elt,o,_p,o$1,_p$1,o$2,_p$2;\r\n     editor=(_elt=elchild.parentElement,self.monaco.editor.create(_elt,monRT.options,monRT.overrides));\r\n     ResizeObserver.addResizeObserver$1(function()\r\n     {\r\n      editor.layout();\r\n     },elchild.parentElement);\r\n     elchild.parentNode.removeChild(elchild);\r\n     monRT.editorO={\r\n      $:1,\r\n      $0:editor\r\n     };\r\n     onRender(editor);\r\n     editor.onDidChangeModelContent(monRT.onChange);\r\n     o=genE.toolTip;\r\n     o==null?void 0:(_p=new HoverProvider.New(o.$0(genE)),self.monaco.languages.registerHoverProvider(\"fsharp\",_p));\r\n     o$1=genE.declaration;\r\n     o$1==null?void 0:(_p$1=new DefinitionProvider.New(o$1.$0(genE)),self.monaco.languages.registerDefinitionProvider(\"fsharp\",_p$1));\r\n     o$2=genE.autoCompletion;\r\n     o$2==null?void 0:(_p$2=new CompletionItemProvider.New(o$2.$0(genE)),self.monaco.languages.registerCompletionItemProvider(\"fsharp\",_p$2));\r\n    })],[]));\r\n   });\r\n  })));\r\n };\r\n MonacoGenAdapter.convertGlyphChar=function(a)\r\n {\r\n  return a===\"C\"?6:a===\"E\"?12:a===\"S\"?11:a===\"I\"?7:a===\"N\"?8:a===\"M\"?1:a===\"P\"?9:a===\"F\"?4:a===\"T\"?6:a===\"K\"?13:0;\r\n };\r\n MonacoGenAdapter.posFromIndex=function(monRT,i)\r\n {\r\n  var o;\r\n  o=MonacoGenAdapter.mapEditor(monRT,function(ed)\r\n  {\r\n   return MonacoGenAdapter.posEd2Gen(ed.getModel().getPositionAt(i));\r\n  });\r\n  return o==null?Position.New(1,1):o.$0;\r\n };\r\n MonacoGenAdapter.indexFromPos=function(monRT,p)\r\n {\r\n  var o;\r\n  o=MonacoGenAdapter.mapEditor(monRT,function(ed)\r\n  {\r\n   return ed.getModel().getOffsetAt(MonacoGenAdapter.posGen2Ed(p));\r\n  });\r\n  return o==null?-1:o.$0;\r\n };\r\n MonacoGenAdapter.posEd2Gen=function(p)\r\n {\r\n  return Position.New(p.lineNumber,p.column);\r\n };\r\n MonacoGenAdapter.posGen2Ed=function(p)\r\n {\r\n  return Position$1.New(p.col,p.line);\r\n };\r\n MonacoGenAdapter.bindEditor=function(monRT,f)\r\n {\r\n  var m;\r\n  m=monRT.editorO;\r\n  return m!=null&&m.$==1?f(m.$0):null;\r\n };\r\n MonacoGenAdapter.mapEditor=function(monRT,f)\r\n {\r\n  var m;\r\n  m=monRT.editorO;\r\n  return m!=null&&m.$==1?{\r\n   $:1,\r\n   $0:f(m.$0)\r\n  }:null;\r\n };\r\n MonacoGenAdapter.iterEditor=function(monRT,f)\r\n {\r\n  var m;\r\n  m=monRT.editorO;\r\n  m!=null&&m.$==1?f(m.$0):void 0;\r\n };\r\n MonacoPlugIn.plugInAdded=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.plugInAdded;\r\n };\r\n MonacoPlugIn.createMonacoEditor=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.createMonacoEditor;\r\n };\r\n MonacoPlugIn.monacoNew=function(_var,langW,themeW)\r\n {\r\n  return GenEditor.onRender(function(ged)\r\n  {\r\n   var o,ed;\r\n   o=ged.editorO;\r\n   o==null?void 0:(ed=o.$0,View.Sink(function(lang)\r\n   {\r\n    var _m;\r\n    _m=ed.getModel();\r\n    self.monaco.editor.setModelLanguage(_m,lang);\r\n   },langW));\r\n   View.Sink(function(a)\r\n   {\r\n    self.monaco.editor.setTheme(a);\r\n   },themeW);\r\n  },MonacoGenAdapter.newVar(function()\r\n  {\r\n   return{};\r\n  },function()\r\n  {\r\n   return{};\r\n  },_var));\r\n };\r\n SC$1.$cctor=function()\r\n {\r\n  var b,b$1;\r\n  SC$1.$cctor=Global.ignore;\r\n  SC$1.rtn=function(v)\r\n  {\r\n   return[v];\r\n  };\r\n  SC$1.result=new Builder.New$1();\r\n  SC$1.result$1=Result.result$1();\r\n  SC$1.resultP=new BuilderP.New();\r\n  SC$1.resultM=new Builder$1.New();\r\n  SC$1.asyncResultM=new AsyncResultMBuilder.New();\r\n  SC$1.observers=List.T.Empty;\r\n  SC$1.loader=(b=null,Concurrency.Delay(function()\r\n  {\r\n   self.require.config({\r\n    paths:{\r\n     vs:\"/EPFileX/monaco/package/min/vs\"\r\n    }\r\n   });\r\n   return Concurrency.Bind(Concurrency.FromContinuations(function(success,failed)\r\n   {\r\n    return self.require([\"vs/editor/editor.main\"],success,failed);\r\n   }),function()\r\n   {\r\n    return Concurrency.Return(null);\r\n   });\r\n  }));\r\n  SC$1.createMonacoEditor=AppFramework.depWithExtracts(function($1,$2,extractText)\r\n  {\r\n   return Runtime.Curried(function(varP,lang,theme,$3)\r\n   {\r\n    return AppFramework.docWithVar(function(_var)\r\n    {\r\n     var i;\r\n     return Doc.Element(\"div\",[],[GenEditor.generateDoc((i=MonacoPlugIn.monacoNew(_var,extractText(lang),extractText(theme)),GenEditor$1.New(i[\"var\"],i.disabled,View.Const([]),i.onChange,i.onRender,null,null,null,i.editorO,i.editorHook)))]);\r\n    },varP);\r\n   },4);\r\n  });\r\n  SC$1.plugInAdded=AppFramework.addPlugIn((b$1=AppFramework.plugin(),b$1.AddDoc4(b$1.Name(b$1.Yield(),\"Monaco\"),\"editor\",MonacoPlugIn.createMonacoEditor(),\"var\",\"Language\",\"theme\",\"Annotations\")));\r\n };\r\n}());\r\n"
    }
  ]
}
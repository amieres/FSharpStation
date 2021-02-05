{
  "asName": "FSharpStation",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm",
    "WebSharper.Web.asm",
    "WebSharper.Sitelets.asm",
    "WebSharper.Control.asm",
    "WebSharper.UI.asm",
    "WebSharper.UI.Templating.Runtime.asm",
    "WebSharper.Owin.WebSocket.asm"
  ],
  "resources": [
    "<script src=\"/EPFileX/monaco/package/min/vs/loader.js\" type=\"text/javascript\" charset=\"UTF-8\"></script>"
  ],
  "modules": [
    {
      "moName": "FsRoot.Library+StringId`1",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+GuidId`1",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Log",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Dict",
      "methods": [
        {
          "meName": "add",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
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
              "tName": "Dictionary<'a, 'b>",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+LDict",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+ResultMessage`1",
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
      "moName": "FsRoot.Library+ResultMessageHelpers",
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
              "tName": "PrintfFormat<'a, unit, string, FsRoot.Library+ResultMessage<'b>>",
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
              "tName": "PrintfFormat<'a, unit, string, FsRoot.Library+ResultMessage<'b>>",
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
              "tName": "PrintfFormat<'a, unit, string, FsRoot.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+ResultMessage",
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "reduceMsgs",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+ResultMessage<'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "IEnumerable<FsRoot.Library+ResultMessage<'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "addMsg",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+ResultMessage<'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "freeMessageI",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+ResultMessage<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "freeMessageW",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+ResultMessage<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "freeMessage",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+ResultMessage<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "freeMessageF",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+ResultMessage<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+ResultMessage<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "bindMessage",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+ResultMessage<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+ResultMessage<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "exclnoMsg",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<FsRoot.Library+ResultMessage<'a>>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<FsRoot.Library+ResultMessage<'a>>",
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
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Memoize",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+Seq",
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
      "moName": "FsRoot.Library+Monads+Option",
      "methods": [
        {
          "meName": "absorbR",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
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
          "meName": "insertR",
          "isField": 0,
          "type": {
            "tName": "Option<Result<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<Option<'a>, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "sequenceSeq",
          "isField": 0,
          "type": {
            "tName": "Option<IEnumerable<'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<Option<'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "traverseSeq",
          "isField": 0,
          "type": {
            "tName": "Option<IEnumerable<'b>>",
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
          "meName": "op_GreaterGreaterEquals",
          "isField": 0,
          "type": {
            "tName": "Option<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Option<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Option<'b>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "bindNone",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> Option<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "mapNone",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "(unit -> 'a)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "apply",
          "isField": 0,
          "type": {
            "tName": "Option<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Option<('a -> 'b)>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "join",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Option<Option<'a>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "iter",
          "isField": 0,
          "type": {
            "tName": "(Option<'a> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "rtn",
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
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Monads+Async",
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
          "meName": "sequenceSeqS",
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
      "moName": "FsRoot.Library+Monads+State+CEBuilder",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+State+Operators",
      "methods": [
        {
          "meName": "op_BarGreaterGreater",
          "isField": 0,
          "type": {
            "tName": "('b -> ('b * 'c))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('b -> ('b * 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> 'c)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_GreaterGreaterEquals",
          "isField": 0,
          "type": {
            "tName": "('b -> ('b * 'c))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('b -> ('b * 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> ('b -> ('b * 'c)))",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Monads+State",
      "methods": [
        {
          "meName": "state",
          "isField": 1,
          "type": {
            "tName": "CEBuilder",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "map",
          "isField": 0,
          "type": {
            "tName": "(('c -> ('c * 'a)) -> ('c -> ('c * 'b)))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "bind",
          "isField": 0,
          "type": {
            "tName": "('c * 'b)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('c -> ('c * 'b)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('c -> ('c * 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'c",
              "asm": ""
            }
          ]
        },
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "('b * 'a)",
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
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Monads+Result+Builder",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+Result+Operators",
      "methods": [
        {
          "meName": "result",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Result+Builder",
            "asm": "FSharpStation"
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
      "moName": "FsRoot.Library+Monads+Result+BuilderP",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+Result",
      "methods": [
        {
          "meName": "resultP",
          "isField": 1,
          "type": {
            "tName": "BuilderP",
            "asm": "FSharpStation"
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
              "tName": "(FsRoot.Library+ResultMessage<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Result<'b, FsRoot.Library+ResultMessage<'a>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "mapP",
          "isField": 0,
          "type": {
            "tName": "Result<'b, FsRoot.Library+ResultMessage<'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Result<'a, FsRoot.Library+ResultMessage<'c>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "bindP",
          "isField": 0,
          "type": {
            "tName": "Result<'b, FsRoot.Library+ResultMessage<'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Result<'b, FsRoot.Library+ResultMessage<'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Result<'a, FsRoot.Library+ResultMessage<'c>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "freeMessage",
          "isField": 0,
          "type": {
            "tName": "Result<'a, FsRoot.Library+ResultMessage<'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<'a, FsRoot.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "result",
          "isField": 1,
          "type": {
            "tName": "Builder",
            "asm": "FSharpStation"
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
      "moName": "FsRoot.Library+Monads+Depend+Depend`1",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+Depend+DependBuilder",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+Depend+Operators",
      "methods": [
        {
          "meName": "op_GreaterMultiplyGreater",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<('a -> 'c)>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+Depend+Depend<('b -> 'c)>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "op_LessMultiplyGreater",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+Depend+Depend<('a -> 'b)>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+Monads+Depend+Depend<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "op_GreaterEqualsMultiply",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+Depend+Depend<'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+Monads+Depend+Depend<('a -> 'b)>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "op_BarMultiplyGreater",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+Monads+Depend+Depend<('a -> 'b)>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "op_BarGreaterGreater",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+Depend+Depend<'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_GreaterGreaterEquals",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+Depend+Depend<'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "('a -> FsRoot.Library+Monads+Depend+Depend<'b>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "depend",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+DependBuilder",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "rtn",
          "isField": 1,
          "type": {
            "tName": "('a -> FsRoot.Library+Monads+Depend+Depend<'a>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Monads+Depend",
      "methods": [
        {
          "meName": "toString",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Depend<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "getDependencies",
          "isField": 0,
          "type": {
            "tName": "List<Depend<'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Depend<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "depend",
          "isField": 1,
          "type": {
            "tName": "DependBuilder",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "resolver",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "IEnumerable<(string * 'a)>",
              "asm": "netstandard"
            },
            {
              "tName": "Depend<'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "replacerDef",
          "isField": 0,
          "type": {
            "tName": "Depend<'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "IEnumerable<(string * (string * Object))>",
              "asm": "netstandard"
            },
            {
              "tName": "Depend<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "replacer",
          "isField": 0,
          "type": {
            "tName": "Depend<'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "IEnumerable<(string * Object)>",
              "asm": "netstandard"
            },
            {
              "tName": "Depend<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "apply",
          "isField": 0,
          "type": {
            "tName": "Depend<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Depend<('a -> 'b)>",
              "asm": "FSharpStation"
            },
            {
              "tName": "Depend<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "map",
          "isField": 0,
          "type": {
            "tName": "(Depend<'a> -> Depend<'b>)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "Depend<'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "bind",
          "isField": 0,
          "type": {
            "tName": "Depend<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> Depend<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Depend<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "dependByName",
          "isField": 0,
          "type": {
            "tName": "Depend<'b>",
            "asm": "FSharpStation"
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
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Monads+FusionM`3",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+FusionM+Operators",
      "methods": [
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
            "asm": "FSharpStation"
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
            "tName": "FsRoot.Library+Monads+FusionM<'e, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+Monads+FusionM<'b, 'c, 'd>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> FsRoot.Library+Monads+FusionM<'e, 'c, 'd>)",
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
            "tName": "FsRoot.Library+Monads+FusionM<'e, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+Monads+FusionM<'b, 'c, 'd>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> 'e)",
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
            "tName": "FsRoot.Library+Monads+FusionM<'d, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "('a -> FsRoot.Library+Monads+FusionM<'d, 'b, 'c>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_BarGreaterGreater",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'d, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "('a -> 'd)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_LessMultiplyGreater",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'b, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<('a -> 'b), 'c, 'd>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, 'c, 'd>",
              "asm": "FSharpStation"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Monads+FusionM+Builder+Builder",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+FusionM+Builder",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+FusionM",
      "methods": [
        {
          "meName": "fusion",
          "isField": 1,
          "type": {
            "tName": "Builder+Builder",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "absorbO",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'b, 'c, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(unit -> FsRoot.Library+ResultMessage<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<Option<'b>, 'c, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "absorbR",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, 'c, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<Result<'a, FsRoot.Library+ResultMessage<'b>>, 'c, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "insertSnd",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<('a * 'd), 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "'d",
              "asm": ""
            }
          ]
        },
        {
          "meName": "insertFst",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<('a * 'b), 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<'b, 'c, 'd>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "insertR",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Result<'a, 'd>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Result<FsRoot.Library+Monads+FusionM<'a, 'b, 'c>, 'd>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "insertO",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<'a>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Option<FsRoot.Library+Monads+FusionM<'a, 'b, 'c>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "iterResultPrint",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, unit, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "iterResult",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(FsRoot.Library+ResultMessage<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<'b, unit, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "runResult",
          "isField": 0,
          "type": {
            "tName": "Result<('a * FsRoot.Library+ResultMessage<'b>), FsRoot.Library+ResultMessage<'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, unit, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "runReader",
          "isField": 0,
          "type": {
            "tName": "Result<('b * FsRoot.Library+ResultMessage<'c>), FsRoot.Library+ResultMessage<'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<'b, 'a, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "mapReader",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'b, 'd, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<'b, 'a, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "readerFun",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'b, 'a, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "sequenceSeq",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<'a>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "IEnumerable<FsRoot.Library+Monads+FusionM<'a, 'b, 'c>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "traverseSeq",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<'b>, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+Monads+FusionM<'b, 'c, 'd>)",
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
            "tName": "FsRoot.Library+Monads+FusionM<'d, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "('a -> FsRoot.Library+Monads+FusionM<'d, 'b, 'c>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "apply",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'b, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<('a -> 'b), 'c, 'd>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, 'c, 'd>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "memoizeRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'c, 'a, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> (('b -> Option<'c>) * ('b -> (('b -> 'c) -> 'c))))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> FsRoot.Library+Monads+FusionM<'c, 'a, 'd>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "iterReader",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(FsRoot.Library+ResultMessage<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'c",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<'b, 'c, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "mapState",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'c, 'a, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> ('b -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<'c, 'b, 'd>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "freeMessageW",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "freeMessage",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "freeMessageF",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'c, 'd, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+ResultMessage<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<'c, 'd, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "ofFusionM",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "ofResultMessage",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<unit, 'b, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "ofMessage",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<unit, 'b, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "ofOption",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'b, 'c, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(unit -> FsRoot.Library+ResultMessage<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ofResult",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Result<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ofResultS",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Result<'a, string>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ofResultM",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, 'c, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Result<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ofResultRM",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, 'c, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Result<'a, FsRoot.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "inling",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<'b>, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<'b, 'c, 'd>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "check",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<unit, 'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "putS",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<unit, 'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "getR",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<FsRoot.Library+ResultMessage<'a>, 'b, 'a>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "getS",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, 'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "ErrorF",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'b, 'c, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "OkFMsg",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, 'c, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+ResultMessage<'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "OkF",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "run",
          "isField": 0,
          "type": {
            "tName": "(Option<'b> * 'a * FsRoot.Library+ResultMessage<'c>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<'b, 'a, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "from",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "getFun",
          "isField": 0,
          "type": {
            "tName": "(('b * FsRoot.Library+ResultMessage<'c>) -> (Option<'a> * 'b * FsRoot.Library+ResultMessage<'c>))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "wrap",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'c, 'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(('a * FsRoot.Library+ResultMessage<'b>) -> (Option<'c> * 'a * FsRoot.Library+ResultMessage<'b>))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "map",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'b, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, 'c, 'd>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "bind",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'b, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+Monads+FusionM<'b, 'c, 'd>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, 'c, 'd>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
            "asm": "FSharpStation"
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
      "moName": "FsRoot.Library+Monads+FusionAsyncM`3",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+FusionAsyncM+Operators",
      "methods": [
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
            "asm": "FSharpStation"
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
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'e, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+Monads+FusionAsyncM<'b, 'c, 'd>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> FsRoot.Library+Monads+FusionAsyncM<'e, 'c, 'd>)",
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
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'e, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+Monads+FusionAsyncM<'b, 'c, 'd>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> 'e)",
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
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'d, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "('a -> FsRoot.Library+Monads+FusionAsyncM<'d, 'b, 'c>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_BarGreaterGreater",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'d, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "('a -> 'd)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_LessMultiplyGreater",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<('a -> 'b), 'c, 'd>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'c, 'd>",
              "asm": "FSharpStation"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Monads+FusionAsyncM+Builder+Builder",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+FusionAsyncM+Builder",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+FusionAsyncM",
      "methods": [
        {
          "meName": "fusion",
          "isField": 1,
          "type": {
            "tName": "Builder+Builder",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "iterResultPrintA",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, unit, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "iterResultPrint",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, unit, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "iterResultA",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(FsRoot.Library+ResultMessage<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, unit, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "iterResult",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(FsRoot.Library+ResultMessage<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, unit, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "runResult",
          "isField": 0,
          "type": {
            "tName": "Async<Result<('a * FsRoot.Library+ResultMessage<'b>), FsRoot.Library+ResultMessage<'b>>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, unit, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "runReader",
          "isField": 0,
          "type": {
            "tName": "Async<Result<('b * FsRoot.Library+ResultMessage<'c>), FsRoot.Library+ResultMessage<'c>>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, 'a, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "mapReader",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, 'd, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, 'a, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "absorbO",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, 'c, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(unit -> FsRoot.Library+ResultMessage<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<Option<'b>, 'c, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "absorbR",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'c, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<Result<'a, FsRoot.Library+ResultMessage<'b>>, 'c, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "insertSnd",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<('a * 'd), 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "'d",
              "asm": ""
            }
          ]
        },
        {
          "meName": "insertFst",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<('a * 'b), 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, 'c, 'd>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "insertR",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<Result<'a, 'd>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Result<FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>, 'd>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "insertO",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<Option<'a>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Option<FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "readerFun",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, 'a, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "freeMessageW",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "freeMessage",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "sequenceSeq",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<IEnumerable<'a>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "IEnumerable<FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "traverseSeq",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<IEnumerable<'b>, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+Monads+FusionAsyncM<'b, 'c, 'd>)",
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
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'d, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "('a -> FsRoot.Library+Monads+FusionAsyncM<'d, 'b, 'c>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "apply",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<('a -> 'b), 'c, 'd>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'c, 'd>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "memoizeRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'c, 'a, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> (('b -> Option<'c>) * ('b -> (('b -> 'c) -> 'c))))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> FsRoot.Library+Monads+FusionAsyncM<'c, 'a, 'd>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "iterReaderA",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(FsRoot.Library+ResultMessage<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'c",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, 'c, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "iterReader",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(FsRoot.Library+ResultMessage<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'c",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, 'c, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "mapState",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'c, 'a, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> ('b -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'c, 'b, 'd>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "freeMessageF",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'c, 'd, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+ResultMessage<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'c, 'd, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "ofFusionM",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "ofAsyncResultRM",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'c, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Async<Result<'a, FsRoot.Library+ResultMessage<'b>>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ofAsync",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ofResultMessage",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<unit, 'b, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "ofMessage",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<unit, 'b, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "ofOption",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, 'c, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(unit -> FsRoot.Library+ResultMessage<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ofResult",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Result<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ofResultS",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Result<'a, string>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ofResultM",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'c, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Result<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ofResultRM",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'c, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Result<'a, FsRoot.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "getOption",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<Option<'a>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "check",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<unit, 'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "putS",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<unit, 'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "getR",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<FsRoot.Library+ResultMessage<'a>, 'b, 'a>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "getS",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "ErrorF",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, 'c, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "OkFMsg",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'c, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+ResultMessage<'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "OkF",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "run",
          "isField": 0,
          "type": {
            "tName": "Async<(Option<'b> * 'a * FsRoot.Library+ResultMessage<'c>)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, 'a, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "from",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "getFun",
          "isField": 0,
          "type": {
            "tName": "(('b * FsRoot.Library+ResultMessage<'c>) -> Async<(Option<'a> * 'b * FsRoot.Library+ResultMessage<'c>)>)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "wrap",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'c, 'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(('a * FsRoot.Library+ResultMessage<'b>) -> Async<(Option<'c> * 'a * FsRoot.Library+ResultMessage<'b>)>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "map",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'c, 'd>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "bind",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'b, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+Monads+FusionAsyncM<'b, 'c, 'd>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'c, 'd>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
            "asm": "FSharpStation"
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
      "moName": "FsRoot.Library+Monads+ResultM`2",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+ResultM+CheckError`1",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+ResultM+Builder",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+ResultM+Operators",
      "methods": [
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
            "asm": "FSharpStation"
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
            "tName": "FsRoot.Library+Monads+ResultM<'d, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+Monads+ResultM<'b, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> FsRoot.Library+Monads+ResultM<'d, 'c>)",
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
            "tName": "FsRoot.Library+Monads+ResultM<'d, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+Monads+ResultM<'b, 'c>)",
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
            "tName": "FsRoot.Library+Monads+ResultM<'c, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
              "asm": "FSharpStation"
            },
            {
              "tName": "('a -> FsRoot.Library+Monads+ResultM<'c, 'b>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_BarGreaterGreater",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'c, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
              "asm": "FSharpStation"
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
      "moName": "FsRoot.Library+Monads+ResultM",
      "methods": [
        {
          "meName": "sequenceSeq",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<IEnumerable<'a>, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "IEnumerable<FsRoot.Library+Monads+ResultM<'a, 'b>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "traverseSeq",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<IEnumerable<'b>, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+Monads+ResultM<'b, 'c>)",
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
            "tName": "FsRoot.Library+Monads+ResultM<'c, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
              "asm": "FSharpStation"
            },
            {
              "tName": "('a -> FsRoot.Library+Monads+ResultM<'c, 'b>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "failIfFatalMsgW",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "failIfFatalMsg",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "failIfFatalMsgF",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'b, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+ResultM<'b, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "addMsg",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'b, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+Monads+ResultM<'b, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "absorbO",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'b, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(unit -> FsRoot.Library+ResultMessage<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+ResultM<Option<'b>, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "insertO",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<Option<'a>, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Option<FsRoot.Library+Monads+ResultM<'a, 'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ofResult",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Result<'a, FsRoot.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ofOption",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'b, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(unit -> FsRoot.Library+ResultMessage<'a>)",
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
              "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
              "asm": "FSharpStation"
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
              "tName": "(FsRoot.Library+ResultMessage<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+ResultM<'b, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "mapP",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+ResultM<'a, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "check",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'b, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "CheckError<'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+Monads+ResultM<'b, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "bindM",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(unit -> FsRoot.Library+Monads+ResultM<'a, 'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+ResultMessage<'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "bindP",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+Monads+ResultM<'b, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+ResultM<'a, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "bind",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.Library+Monads+ResultM<'b, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+ResultM<'a, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "mapMessage",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'c, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(FsRoot.Library+ResultMessage<'a> -> FsRoot.Library+ResultMessage<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+ResultM<'c, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "map",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+ResultM<'a, 'c>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
              "asm": "FSharpStation"
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
              "tName": "(FsRoot.Library+ResultMessage<'a> -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+ResultM<'b, 'a>",
              "asm": "FSharpStation"
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
              "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "toResultD",
          "isField": 0,
          "type": {
            "tName": "Result<('a * FsRoot.Library+ResultMessage<'b>), FsRoot.Library+ResultMessage<'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "toResult",
          "isField": 0,
          "type": {
            "tName": "Result<'a, FsRoot.Library+ResultMessage<'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "freeMessage",
          "isField": 0,
          "type": {
            "tName": "Result<'a, FsRoot.Library+ResultMessage<'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<'a, FsRoot.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "rtnr",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Result<'a, FsRoot.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "rtnM",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<unit, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM<'a, 'b>",
            "asm": "FSharpStation"
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
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "checkError",
          "isField": 0,
          "type": {
            "tName": "CheckError<'a>",
            "asm": "FSharpStation"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Monads+ResultMAutoOpen",
      "methods": [
        {
          "meName": "resultM",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+ResultM+Builder",
            "asm": "FSharpStation"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Monads+AsyncResult",
      "methods": [
        {
          "meName": "tryFinally",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> Async<Result<'a, 'b>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "tryWith",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(Exception -> Async<Result<'a, 'b>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> Async<Result<'a, 'b>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "absorbO",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'b, 'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> 'a)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<Result<Option<'b>, 'a>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "absorbR",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<Result<Result<'a, 'b>, 'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "insertR",
          "isField": 0,
          "type": {
            "tName": "Async<Result<Result<'a, 'c>, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<Async<Result<'a, 'b>>, 'c>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "insertO",
          "isField": 0,
          "type": {
            "tName": "Async<Result<Option<'a>, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Option<Async<Result<'a, 'b>>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "sequenceSeqS",
          "isField": 0,
          "type": {
            "tName": "(IEnumerable<Async<Result<'b, 'a>>> -> Async<Result<IEnumerable<'b>, 'c>>)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "sequenceSeq",
          "isField": 0,
          "type": {
            "tName": "Async<Result<IEnumerable<'a>, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<Async<Result<'a, 'b>>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "traverseSeq",
          "isField": 0,
          "type": {
            "tName": "Async<Result<IEnumerable<'b>, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<Result<'b, 'c>>)",
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
            "tName": "Async<Result<'c, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<Result<'a, 'b>>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<Result<'c, 'b>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "whileLoop",
          "isField": 0,
          "type": {
            "tName": "Async<Result<unit, 'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> Async<Result<unit, 'a>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "getResult",
          "isField": 0,
          "type": {
            "tName": "Async<Result<Result<'a, 'b>, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<Result<'a, 'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "mapP",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'b, FsRoot.Library+ResultMessage<'c>>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<Result<'a, FsRoot.Library+ResultMessage<'c>>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "map",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<Result<'a, 'c>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "bindP",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'b, FsRoot.Library+ResultMessage<'c>>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<Result<'b, FsRoot.Library+ResultMessage<'c>>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<Result<'a, FsRoot.Library+ResultMessage<'c>>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "bind",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<Result<'b, 'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<Result<'a, 'c>>",
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
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<Result<'b, 'a>>",
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
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<Result<'b, 'a>>",
              "asm": "FSharp.Core"
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
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'a, 'b>>",
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
            "tName": "Async<Result<'a, FsRoot.Library+ResultMessage<'c>>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<Result<'a, FsRoot.Library+ResultMessage<'b>>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "mapError",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'c, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<Result<'c, 'a>>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Monads+AsyncResultBuilder",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+AsyncResultBuilderP",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+Extensions",
      "methods": [
        {
          "meName": "AsyncResultBuilderP.Combine",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'b, FsRoot.Library+ResultMessage<'a>>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+AsyncResultBuilderP",
              "asm": "FSharpStation"
            },
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<Result<'b, FsRoot.Library+ResultMessage<'a>>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "AsyncResultBuilderP.Bind",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'b, FsRoot.Library+ResultMessage<'a>>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+AsyncResultBuilderP",
              "asm": "FSharpStation"
            },
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<Result<'b, FsRoot.Library+ResultMessage<'a>>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "AsyncResultBuilderP.ReturnFrom",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'a, FsRoot.Library+ResultMessage<'a>>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+AsyncResultBuilderP",
              "asm": "FSharpStation"
            },
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "AsyncResultBuilder.Combine",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+AsyncResultBuilder",
              "asm": "FSharpStation"
            },
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<Result<'b, 'c>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "AsyncResultBuilder.Bind",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+AsyncResultBuilder",
              "asm": "FSharpStation"
            },
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<Result<'b, 'c>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "AsyncResultBuilder.ReturnFrom",
          "isField": 0,
          "type": {
            "tName": "Async<Result<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+AsyncResultBuilder",
              "asm": "FSharpStation"
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
      "moName": "FsRoot.Library+Monads+AsyncResultM+AsyncResultMBuilder",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+Monads+AsyncResultM+Operators",
      "methods": [
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'b>>",
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
            "tName": "Async<FsRoot.Library+Monads+ResultM<'d, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<FsRoot.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> Async<FsRoot.Library+Monads+ResultM<'d, 'c>>)",
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
            "tName": "Async<FsRoot.Library+Monads+ResultM<'d, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<FsRoot.Library+Monads+ResultM<'b, 'c>>)",
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
            "tName": "Async<FsRoot.Library+Monads+ResultM<'c, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'b>>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<FsRoot.Library+Monads+ResultM<'c, 'b>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_BarGreaterGreater",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'c, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'b>>",
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
      "moName": "FsRoot.Library+Monads+AsyncResultM",
      "methods": [
        {
          "meName": "getResultM",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<FsRoot.Library+Monads+ResultM<'a, 'b>, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "absorbO",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'b, 'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> FsRoot.Library+ResultMessage<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<FsRoot.Library+Monads+ResultM<Option<'b>, 'a>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "absorbR",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<FsRoot.Library+Monads+ResultM<FsRoot.Library+Monads+ResultM<'a, 'b>, 'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "insertR",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<Result<'a, 'c>, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<Async<FsRoot.Library+Monads+ResultM<'a, 'b>>, 'c>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "insertO",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<Option<'a>, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Option<Async<FsRoot.Library+Monads+ResultM<'a, 'b>>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "sequenceSeq",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<IEnumerable<'a>, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<Async<FsRoot.Library+Monads+ResultM<'a, 'b>>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "traverseSeq",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<IEnumerable<'b>, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<FsRoot.Library+Monads+ResultM<'b, 'c>>)",
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
            "tName": "Async<FsRoot.Library+Monads+ResultM<'c, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'b>>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<FsRoot.Library+Monads+ResultM<'c, 'b>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "whileLoop",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<unit, 'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> Async<FsRoot.Library+Monads+ResultM<unit, 'a>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "map",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'c>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "bindR",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<FsRoot.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+ResultM<'a, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "bindrA",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<FsRoot.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<Result<'a, FsRoot.Library+ResultMessage<'c>>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "bindM",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> Async<FsRoot.Library+Monads+ResultM<'a, 'b>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+ResultMessage<'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "bindr",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<FsRoot.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Result<'a, FsRoot.Library+ResultMessage<'c>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "bind",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<FsRoot.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'c>>",
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
              "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'b>>",
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
              "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'b>>",
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
              "tName": "(FsRoot.Library+ResultMessage<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<FsRoot.Library+Monads+ResultM<'b, 'a>>",
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
              "tName": "(FsRoot.Library+ResultMessage<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<FsRoot.Library+Monads+ResultM<'b, 'a>>",
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
              "tName": "PrintfFormat<'a, unit, string, Async<FsRoot.Library+Monads+ResultM<'b, 'c>>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "rtnrA",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<Result<'a, FsRoot.Library+ResultMessage<'b>>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "rtnM",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<unit, 'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
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
            "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Result<'a, FsRoot.Library+ResultMessage<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'b>>",
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
            "tName": "Async<Result<'a, FsRoot.Library+ResultMessage<'c>>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<Result<'a, FsRoot.Library+ResultMessage<'b>>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "mapError",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'c, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(FsRoot.Library+ResultMessage<'a> -> FsRoot.Library+ResultMessage<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Async<FsRoot.Library+Monads+ResultM<'c, 'a>>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Monads+AsyncResultMAutoOpen",
      "methods": [
        {
          "meName": "AsyncResultMBuilder.Combine",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+AsyncResultM+AsyncResultMBuilder",
              "asm": "FSharpStation"
            },
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<FsRoot.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "AsyncResultMBuilder.Bind",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'b, 'c>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+AsyncResultM+AsyncResultMBuilder",
              "asm": "FSharpStation"
            },
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<FsRoot.Library+Monads+ResultM<'b, 'c>>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "AsyncResultMBuilder.ReturnFrom",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+AsyncResultM+AsyncResultMBuilder",
              "asm": "FSharpStation"
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
            "tName": "FsRoot.Library+Monads+AsyncResultM+AsyncResultMBuilder",
            "asm": "FSharpStation"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Monads",
      "methods": [
        {
          "meName": "asyncResultP",
          "isField": 1,
          "type": {
            "tName": "AsyncResultBuilderP",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "asyncResult",
          "isField": 1,
          "type": {
            "tName": "AsyncResultBuilder",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "|OkM|ErrorM|",
          "isField": 0,
          "type": {
            "tName": "FSharpChoice<('a * FsRoot.Library+ResultMessage<'b>), FsRoot.Library+ResultMessage<'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "ResultM<'a, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "ErrorM",
          "isField": 0,
          "type": {
            "tName": "ResultM<'b, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+ResultMessage<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "OkMWithMsg",
          "isField": 0,
          "type": {
            "tName": "ResultM<'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRoot.Library+ResultMessage<'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "OkM",
          "isField": 0,
          "type": {
            "tName": "ResultM<'a, 'b>",
            "asm": "FSharpStation"
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
      "moName": "FsRoot.Library+MailboxProcessorExt",
      "methods": [
        {
          "meName": "PostAndAsyncReply",
          "isField": 0,
          "type": {
            "tName": "Async<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FSharpMailboxProcessor<(FSharpAsyncReplyChannel<'a> * 'b)>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Mailbox+StateFull",
      "methods": [
        {
          "meName": "applyReply",
          "isField": 0,
          "type": {
            "tName": "Async<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> ('a * 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FSharpMailboxProcessor<('a -> Async<'a>)>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "applyReplyA",
          "isField": 0,
          "type": {
            "tName": "Async<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<('a * 'b)>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FSharpMailboxProcessor<('a -> Async<'a>)>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "apply",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'a)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FSharpMailboxProcessor<('a -> Async<'a>)>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "applyA",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Async<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FSharpMailboxProcessor<('a -> Async<'a>)>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "setState",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FSharpMailboxProcessor<('a -> Async<'a>)>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "getStateA",
          "isField": 0,
          "type": {
            "tName": "Async<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FSharpMailboxProcessor<('a -> Async<'a>)>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Mailbox",
      "methods": [
        {
          "meName": "defHandler",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
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
          "meName": "stateFull",
          "isField": 0,
          "type": {
            "tName": "FSharpMailboxProcessor<('a -> Async<'a>)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(Exception -> ('a -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "fold",
          "isField": 0,
          "type": {
            "tName": "FSharpMailboxProcessor<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(Exception -> ('a -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> ('b -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "foldA",
          "isField": 0,
          "type": {
            "tName": "FSharpMailboxProcessor<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(Exception -> ('a -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> ('b -> Async<'a>))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "call",
          "isField": 0,
          "type": {
            "tName": "FSharpMailboxProcessor<(FSharpAsyncReplyChannel<'b> * 'a)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(Exception -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "callA",
          "isField": 0,
          "type": {
            "tName": "FSharpMailboxProcessor<(FSharpAsyncReplyChannel<'b> * 'a)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(Exception -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<'b>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "iter",
          "isField": 0,
          "type": {
            "tName": "FSharpMailboxProcessor<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(Exception -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "iterA",
          "isField": 0,
          "type": {
            "tName": "FSharpMailboxProcessor<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(Exception -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Async<unit>)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+ResourceAgentState`2",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+ResourceAgent`2",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+AgentReaderM",
      "methods": [
        {
          "meName": "runSameConfig",
          "isField": 0,
          "type": {
            "tName": "Async<Result<('c * FsRoot.Library+ResultMessage<'d>), FsRoot.Library+ResultMessage<'d>>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+ResourceAgent<'a, 'b>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'c, (FsRoot.Library+ResourceAgent<'a, 'b> * 'b), 'd>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "run",
          "isField": 0,
          "type": {
            "tName": "Async<Result<('c * FsRoot.Library+ResultMessage<'d>), FsRoot.Library+ResultMessage<'d>>>",
            "asm": "FSharp.Core"
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
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'c, ('a * 'b), 'd>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "ofResourceRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, (FsRoot.Library+ResourceAgent<'b, 'd> * 'd), 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionAsyncM<'a, 'b, 'c>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "createAgentRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<'c, (FsRoot.Library+ResourceAgent<'a, 'd> * 'd), 'e>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> Async<'c>))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+CommArgRoot+CommArgId",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+CommArgRoot+CommArg",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+CommArgRoot+CommArgCollection`1",
      "methods": [
        {
          "meName": "op_Addition",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'b>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "op_Addition",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'b>",
              "asm": "FSharpStation"
            },
            {
              "tName": "(FsRoot.Library+CommArgRoot+CommArg * FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'b>, 'b>)",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "op_Addition",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'b>",
              "asm": "FSharpStation"
            },
            {
              "tName": "IEnumerable<(FsRoot.Library+CommArgRoot+CommArg * FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'b>, 'b>)>",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+CommArgRoot+TypedCommArg`1",
      "methods": [
        {
          "meName": "op_DivisionAssignment",
          "isField": 0,
          "type": {
            "tName": "(FsRoot.Library+CommArgRoot+CommArg * FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'b>, 'b>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "(FsRoot.Library+CommArgRoot+CommArgCollection<'b> -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_DivisionAssignment",
          "isField": 0,
          "type": {
            "tName": "(FsRoot.Library+CommArgRoot+CommArg * FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'b>, 'b>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, FsRoot.Library+CommArgRoot+CommArgCollection<'b>, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "op_DivisionAssignment",
          "isField": 0,
          "type": {
            "tName": "(FsRoot.Library+CommArgRoot+CommArg * FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'b>, 'b>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<'a>",
              "asm": "FSharpStation"
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
      "moName": "FsRoot.Library+CommArgRoot+CommArgModule",
      "methods": [
        {
          "meName": "getFloatR",
          "isField": 0,
          "type": {
            "tName": "Result<Double, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<Double>",
              "asm": "FSharpStation"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "getBoolR",
          "isField": 0,
          "type": {
            "tName": "Result<bool, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<bool>",
              "asm": "FSharpStation"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "getStringR",
          "isField": 0,
          "type": {
            "tName": "Result<string, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<string>",
              "asm": "FSharpStation"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "getIntR",
          "isField": 0,
          "type": {
            "tName": "Result<int, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<int>",
              "asm": "FSharpStation"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "getValueR",
          "isField": 0,
          "type": {
            "tName": "Result<'a, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getVRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, FsRoot.Library+CommArgRoot+CommArgCollection<'b>, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'b>, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "argumentTRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<string, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+CommArg",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "argumentRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<string, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+CommArg",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "NewFloat",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<Double>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "(Double -> string)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "NewBool",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<bool>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "(bool -> string)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "NewString",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<string>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "(string -> string)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "NewInt",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<int>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "(int -> string)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "New",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+CommArgRoot+CommArgCollection",
      "methods": [
        {
          "meName": "addPairsRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<unit, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "IEnumerable<(FsRoot.Library+CommArgRoot+CommArg * FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>)>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "appendRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<unit, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "addPairs",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "IEnumerable<(FsRoot.Library+CommArgRoot+CommArg * FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>)>",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "append",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "addPair",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+CommArg",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "getBoolR",
          "isField": 0,
          "type": {
            "tName": "Result<bool, FsRoot.Library+ResultMessage<'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<bool>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "buildArgRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<string, FsRoot.Library+CommArgRoot+CommArgCollection<'b>, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "getBoolRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<bool, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<bool>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "getFloatRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Double, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<Double>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "getStringRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<string, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<string>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "getIntRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<int, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<int>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "getValueRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<'a, FsRoot.Library+CommArgRoot+CommArgCollection<'b>, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "findArgRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<(FsRoot.Library+CommArgRoot+CommArg * Object), FsRoot.Library+CommArgRoot+CommArgCollection<'b>, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryBuildArgORm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<string>, FsRoot.Library+CommArgRoot+CommArgCollection<'b>, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetFloatORm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<Double>, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<Double>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetBoolORm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<bool>, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<bool>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetStringORm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<string>, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<string>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetIntORm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<int>, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<int>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetValueORm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<'a>, FsRoot.Library+CommArgRoot+CommArgCollection<'b>, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryFindArgORm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<(FsRoot.Library+CommArgRoot+CommArg * Object)>, FsRoot.Library+CommArgRoot+CommArgCollection<'b>, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryFindArgO",
          "isField": 0,
          "type": {
            "tName": "Option<(FsRoot.Library+CommArgRoot+CommArg * FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'b>, 'b>)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "argumentNotFound",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+ResultMessage<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "unit",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "containsAnyOfRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<bool, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Set<FsRoot.Library+CommArgRoot+CommArgId>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "argumentsRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<string>, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "((FsRoot.Library+CommArgRoot+CommArg * FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>) -> bool)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "filterRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<(FsRoot.Library+CommArgRoot+CommArg * FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>)>, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "((FsRoot.Library+CommArgRoot+CommArg * FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>) -> bool)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "existsRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<bool, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "((FsRoot.Library+CommArgRoot+CommArg * FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>) -> bool)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "argsRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<(FsRoot.Library+CommArgRoot+CommArg * FsRoot.Library+Monads+FusionM<Object, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'a>)>, FsRoot.Library+CommArgRoot+CommArgCollection<'a>, 'b>",
            "asm": "FSharpStation"
          },
          "parms": []
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
              "tName": "FsRoot.Library+CommArgRoot+TypedCommArg<'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+CommArgRoot+CommArgCollection<'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "trueForAll",
          "isField": 0,
          "type": {
            "tName": "bool",
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
      "moName": "FsRoot.Library+CommArgRoot",
      "methods": [
        {
          "meName": "CommArgCollection",
          "isField": 0,
          "type": {
            "tName": "CommArgCollection<'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "IEnumerable<(CommArg * FsRoot.Library+Monads+FusionM<Object, CommArgCollection<'a>, 'a>)>",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+FsCode",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+FsCodeModule+PreproDirective",
      "methods": [
        {
          "meName": "_unique_NoPrepo",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_PrepoEndIf",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_PrepoElse",
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
      "moName": "FsRoot.Library+FsCodeModule+PrepState",
      "methods": [
        {
          "meName": "_unique_LevelZero",
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
      "moName": "FsRoot.Library+FsCodeModule",
      "methods": [
        {
          "meName": "getSourceDir",
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
          "meName": "separateDirectives",
          "isField": 0,
          "type": {
            "tName": "(string[] * string[] * string[] * string[] * Option<string>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<PreproDirective>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getTopDirectives",
          "isField": 0,
          "type": {
            "tName": "(string[] * PreproDirective[])",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<(string * PreproDirective)>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "filterPreps",
          "isField": 0,
          "type": {
            "tName": "PreproDirective[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<PreproDirective>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "prev",
          "isField": 0,
          "type": {
            "tName": "PrepState",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "PrepState",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "isActive",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "PrepState",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "separatePrepros",
          "isField": 0,
          "type": {
            "tName": "(string * PreproDirective)[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "extractDefines",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+FsCode",
              "asm": "FSharpStation"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library+SnippetId",
      "methods": [
        {
          "meName": "get_Empty",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+SnippetId",
            "asm": "FSharpStation"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.Library+Snippet",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+SnippetReference",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+SnippetCollection",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+SnippetModule",
      "methods": [
        {
          "meName": "codeFsxRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<string, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "fastCodeRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<(string * ((FsRoot.Library+SnippetId * string) * (int * int * int))[]), FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Option<FsRoot.Library+SnippetId>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<FsRoot.Library+SnippetId>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "fastReducedRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<((FsRoot.Library+SnippetId * string * int * int)[] * string[] * FsRoot.Library+FsCodeModule+PreproDirective[]), FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Option<FsRoot.Library+SnippetId>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<FsRoot.Library+SnippetId>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "reducedOthersORmMemo",
          "isField": 0,
          "type": {
            "tName": "((bool * FsRoot.Library+SnippetId * Set<FsRoot.Library+SnippetId>) -> FsRoot.Library+Monads+FusionM<Option<((FsRoot.Library+SnippetId * string * int * int)[] * string[] * FsRoot.Library+FsCodeModule+PreproDirective[])>, FsRoot.Library+SnippetCollection, 'a>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "reducedOthersORm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<((FsRoot.Library+SnippetId * string * int * int)[] * string[] * FsRoot.Library+FsCodeModule+PreproDirective[])>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            },
            {
              "tName": "Set<FsRoot.Library+SnippetId>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "finishCode",
          "isField": 0,
          "type": {
            "tName": "(string * ((FsRoot.Library+SnippetId * string) * (int * int * int))[])",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(FsRoot.Library+SnippetId * string * int * int)[]",
              "asm": "netstandard"
            },
            {
              "tName": "string[]",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.Library+FsCodeModule+PreproDirective[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "reducedCodeRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<((FsRoot.Library+SnippetId * string * int * int)[] * string[] * FsRoot.Library+FsCodeModule+PreproDirective[]), FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "IEnumerable<FsRoot.Library+Snippet>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "addSeps",
          "isField": 0,
          "type": {
            "tName": "((FsRoot.Library+SnippetId * string * int * int)[] * string[] * FsRoot.Library+FsCodeModule+PreproDirective[])",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(FsRoot.Library+SnippetId * string * int * int)[]",
              "asm": "netstandard"
            },
            {
              "tName": "string[]",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.Library+FsCodeModule+PreproDirective[]",
              "asm": "netstandard"
            },
            {
              "tName": "(FsRoot.Library+SnippetId * string * int * int)[]",
              "asm": "netstandard"
            },
            {
              "tName": "string[]",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.Library+FsCodeModule+PreproDirective[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "separateCodeRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<((FsRoot.Library+SnippetId * string * int * int)[] * string[] * FsRoot.Library+FsCodeModule+PreproDirective[]), FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "ancestorsRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<List<FsRoot.Library+Snippet>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "levelRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<int, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "indentRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<int, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "propertyHierORm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<(FsRoot.Library+Snippet * (string * string))>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "modifiedRecRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<bool, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "predsGenerationRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<DateTime, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "uniquePredsRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<List<FsRoot.Library+SnippetId>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "predsLRmMemo",
          "isField": 0,
          "type": {
            "tName": "(FsRoot.Library+SnippetId -> FsRoot.Library+Monads+FusionM<List<FsRoot.Library+SnippetId>, FsRoot.Library+SnippetCollection, 'a>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "predsLRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<List<FsRoot.Library+SnippetId>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "snippetFromRefORm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<FsRoot.Library+Snippet>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetReference",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "snippetFromPathORm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<FsRoot.Library+Snippet>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "pathRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<List<FsRoot.Library+SnippetId>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "snippetNameRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<string, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "snippetRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<FsRoot.Library+Snippet, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "prepareCodeRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<string, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "orderedRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<FsRoot.Library+Snippet>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "childrenRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<FsRoot.Library+Snippet>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "modifiedRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<bool, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "maxGenerationRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<DateTime, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "predecessorsRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<FsRoot.Library+Snippet>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "parentORm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<FsRoot.Library+Snippet>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "snippetORm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<FsRoot.Library+Snippet>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "propertyPairO",
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
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "propertyPair",
          "isField": 0,
          "type": {
            "tName": "(string * string)",
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
          "meName": "tieFighter",
          "isField": 1,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "propertyO",
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
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "nameSanitized",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "snippetName",
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
          "meName": "defaultSnippet",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Snippet",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "New",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Snippet",
            "asm": "FSharpStation"
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
              "tName": "Option<FsRoot.Library+SnippetId>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "getNextModified",
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
      "moName": "FsRoot.Library+Hole",
      "methods": [
        {
          "meName": "_unique_Hole",
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
      "moName": "FsRoot.Library+TreeReader+Node`3",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+TreeReader",
      "methods": [
        {
          "meName": "removeNodeOutdentChildren",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<Node<'a, 'b, 'c>>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Node<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "IEnumerable<Node<'a, 'b, 'c>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "outdentNode",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<Node<'a, 'b, 'c>>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Node<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "IEnumerable<Node<'a, 'b, 'c>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "indentNode",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<Node<'a, 'b, 'c>>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Node<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "IEnumerable<Node<'a, 'b, 'c>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "addChild",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<Node<'a, 'b, 'c>>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "Node<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "Node<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "IEnumerable<Node<'a, 'b, 'c>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "moveToSibling2",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<Node<'a, 'b, 'c>>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "bool",
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
              "tName": "IEnumerable<Node<'a, 'b, 'c>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "moveToSibling",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<Node<'a, 'b, 'c>>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "Node<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "Node<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "IEnumerable<Node<'a, 'b, 'c>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "tryFindId",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<Node<'a, 'b, 'c>>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "IEnumerable<Node<'a, 'b, 'c>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "tryFind",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Option<Node<'a, 'b, 'c>>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(Node<'a, 'b, 'c> -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<Node<'a, 'b, 'c>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "addSibling",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<Node<'a, 'b, 'c>>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "Node<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "Node<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "IEnumerable<Node<'a, 'b, 'c>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "addToParent",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<Node<'a, 'b, 'c>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "(Node<'a, 'b, 'c> -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Node<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "Node<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "IEnumerable<Node<'a, 'b, 'c>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "addNodeToSeq",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<Node<'a, 'b, 'c>>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "(Node<'a, 'b, 'c> -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Node<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "IEnumerable<Node<'a, 'b, 'c>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "removeNodes",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<List<Node<'a, 'b, 'c>>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(Node<'a, 'b, 'c> -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<Node<'a, 'b, 'c>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "removeNode",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<Node<'a, 'b, 'c>>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Node<'a, 'b, 'c>",
              "asm": "FSharpStation"
            },
            {
              "tName": "IEnumerable<Node<'a, 'b, 'c>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "listNodes",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<IEnumerable<(Node<'a, 'b, 'c> * int)>, 'b, 'c>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<Node<'a, 'b, 'c>>",
              "asm": "netstandard"
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
          "meName": "delayedVar",
          "isField": 0,
          "type": {
            "tName": "Var<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "Var<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "delayed",
          "isField": 0,
          "type": {
            "tName": "('a -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "delayedA",
          "isField": 0,
          "type": {
            "tName": "('a -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> Async<unit>)",
              "asm": "FSharp.Core"
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
      "moName": "FsRoot.LibraryJS+Promise",
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
      "moName": "FsRoot.LibraryJS+PromiseM",
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
              "tName": "Async<FsRoot.Library+Monads+ResultM<'a, 'b>>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+View",
      "methods": [
        {
          "meName": "sequenceListApp",
          "isField": 0,
          "type": {
            "tName": "View<List<'a>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "List<View<'a>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "traverseListApp",
          "isField": 0,
          "type": {
            "tName": "View<List<'b>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> View<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_LessMultiplyGreater",
          "isField": 0,
          "type": {
            "tName": "View<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<('a -> 'b)>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "sequenceSeq",
          "isField": 0,
          "type": {
            "tName": "View<IEnumerable<'a>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<View<'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "traverseSeq",
          "isField": 0,
          "type": {
            "tName": "View<IEnumerable<'b>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> View<'b>)",
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
            "tName": "View<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('a -> View<'b>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "View<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "map",
          "isField": 0,
          "type": {
            "tName": "View<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "bind",
          "isField": 0,
          "type": {
            "tName": "View<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> View<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "insertWO",
          "isField": 0,
          "type": {
            "tName": "View<Option<'a>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Option<View<'a>>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+Var",
      "methods": [
        {
          "meName": "lensView",
          "isField": 0,
          "type": {
            "tName": "Var<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> ('b -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'c>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Var<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "freshId",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "counter",
          "isField": 1,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "set_counter",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
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
      "moName": "FsRoot.LibraryJS+ListModel",
      "methods": [
        {
          "meName": "MapLens",
          "isField": 0,
          "type": {
            "tName": "View<IEnumerable<'c>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Option<View<('a -> bool)>>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> (Var<'a> -> 'c))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "ListModel<'b, 'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "refreshLM",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "ListModel<'a, 'b>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "IEnumerable<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "currentLens",
          "isField": 0,
          "type": {
            "tName": "Var<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "View<Option<'b>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "ListModel<'b, 'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "currentLensUpd'",
          "isField": 0,
          "type": {
            "tName": "Var<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "View<Option<'b>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "ListModel<'b, 'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "currentLensUpd",
          "isField": 0,
          "type": {
            "tName": "Var<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "Var<Option<'b>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('a -> ('b -> unit))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "ListModel<'b, 'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "lensDef",
          "isField": 0,
          "type": {
            "tName": "Var<'a>",
            "asm": "WebSharper.UI"
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
              "tName": "ListModel<'b, 'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "docLensMapViewO",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "(IEnumerable<'a> -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('c -> (Var<'a> -> 'd))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "ListModel<'c, 'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "docLensMapView",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(IEnumerable<'a> -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('c -> (Var<'a> -> 'd))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "ListModel<'c, 'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "lensIntoO'",
          "isField": 0,
          "type": {
            "tName": "Var<'c>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "ListModel<'a, 'b>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "(Option<'b> -> 'c)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> ('c -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "View<'c>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "lensInto'",
          "isField": 0,
          "type": {
            "tName": "Var<'c>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "ListModel<'a, 'b>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('b -> 'c)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> ('c -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "View<'c>",
              "asm": "WebSharper.UI"
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
      "moName": "FsRoot.LibraryJS+GenEditor+Position",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+GenEditor+AnnotationType",
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
      "moName": "FsRoot.LibraryJS+GenEditor+Annotation",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+GenEditor+Completion",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+GenEditor+GenEditorHook`1",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+GenEditor+GenEditor`1",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+GenEditor",
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
              "asm": "FSharpStation"
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
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "GenEditorHook<'a>",
              "asm": "FSharpStation"
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
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "GenEditorHook<'a>",
              "asm": "FSharpStation"
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
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "GenEditorHook<'a>",
              "asm": "FSharpStation"
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
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "disabled",
          "isField": 0,
          "type": {
            "tName": "GenEditor<'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "View<bool>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "GenEditor<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "onRender",
          "isField": 0,
          "type": {
            "tName": "GenEditor<'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(GenEditor<'a> -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "GenEditor<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "onChange",
          "isField": 0,
          "type": {
            "tName": "GenEditor<'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Option<(GenEditor<'a> -> (string -> unit))>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "GenEditor<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "setVar",
          "isField": 0,
          "type": {
            "tName": "GenEditor<'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "GenEditor<'a>",
              "asm": "FSharpStation"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+Serializer",
      "methods": [
        {
          "meName": "serLMdField",
          "isField": 0,
          "type": {
            "tName": "(string * ('a -> string) * ('a -> (Object -> 'a)))",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> ListModel<'b, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('c -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Object -> 'c)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "serVarField",
          "isField": 0,
          "type": {
            "tName": "(string * ('a -> string) * ('a -> (Object -> 'a)))",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> Var<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Object -> 'b)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "serMap",
          "isField": 0,
          "type": {
            "tName": "((Map<'a, 'b> -> string) * (Object -> Map<'a, 'b>))",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Object -> 'a)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Object -> 'b)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "serDup",
          "isField": 0,
          "type": {
            "tName": "((('a * 'b) -> string) * (Object -> ('a * 'b)))",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Object -> 'a)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Object -> 'b)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "serOpt",
          "isField": 0,
          "type": {
            "tName": "((Option<'a> -> string) * (Object -> Option<'a>))",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Object -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "serSet",
          "isField": 0,
          "type": {
            "tName": "((Set<'a> -> string) * (Object -> Set<'a>))",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Object -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "serLst",
          "isField": 0,
          "type": {
            "tName": "((List<'a> -> string) * (Object -> List<'a>))",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Object -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "serArr",
          "isField": 0,
          "type": {
            "tName": "(('a[] -> string) * (Object -> 'a[]))",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Object -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "serSeq",
          "isField": 0,
          "type": {
            "tName": "((IEnumerable<'a> -> string) * (Object -> IEnumerable<'a>))",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Object -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "serFieldO",
          "isField": 0,
          "type": {
            "tName": "(string * ('a -> Option<string>) * ('a -> ('c -> 'a)))",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> Option<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Option<'b> -> ('a -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Object -> 'b)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "serField",
          "isField": 0,
          "type": {
            "tName": "(string * ('a -> Option<string>) * ('a -> (Object -> 'a)))",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> ('a -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Object -> 'b)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "serDate",
          "isField": 1,
          "type": {
            "tName": "((DateTime -> string) * (Object -> DateTime))",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "serString",
          "isField": 1,
          "type": {
            "tName": "((string -> string) * (Object -> string))",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "serBool",
          "isField": 1,
          "type": {
            "tName": "((bool -> string) * (Object -> bool))",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "serInt",
          "isField": 1,
          "type": {
            "tName": "((int -> string) * (Object -> int))",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "serFloat",
          "isField": 1,
          "type": {
            "tName": "((Double -> string) * (Object -> Double))",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "sprintA",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<string>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "deserGuid",
          "isField": 1,
          "type": {
            "tName": "(Guid -> Guid)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "|Exists|_|",
          "isField": 0,
          "type": {
            "tName": "Option<'b>",
            "asm": "FSharp.Core"
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
        },
        {
          "meName": "ifUndefF",
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
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "ifUndef",
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
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+REGEX",
      "methods": [
        {
          "meName": "|Identifier|_|",
          "isField": 0,
          "type": {
            "tName": "Option<string>",
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
          "meName": "getEndWord",
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
          "meName": "getStartWord",
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
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+Hoverable+Hoverable",
      "methods": [
        {
          "meName": "get_Demo",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "Content$3203$81",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Elt",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "get_Attributes$3199$69",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+Hoverable+Hoverable",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "get_Attributes$3198$69",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+Hoverable+Hoverable",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "New",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+Hoverable+Hoverable",
            "asm": "FSharpStation"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+Hoverable",
      "methods": [
        {
          "meName": "hoverable",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Elt",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+ResizeObserver",
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
      "moName": "FsRoot.LibraryJS+WebComponent+WcTabStrip+WcTabStripT",
      "methods": [
        {
          "meName": "Constructor",
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
      "moName": "FsRoot.LibraryJS+WebComponent+WcTabStrip",
      "methods": [
        {
          "meName": "init",
          "isField": 1,
          "type": {
            "tName": "Lazy<unit>",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "tabStrip$3347$64",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "Var<int>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "tabStrip",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Var<int>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<(string * 'a)>",
              "asm": "netstandard"
            },
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "css",
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
      "moName": "FsRoot.LibraryJS+WebComponent+WcSplitter+WcSplitterT",
      "methods": [
        {
          "meName": "Constructor",
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
      "moName": "FsRoot.LibraryJS+WebComponent+WcSplitter",
      "methods": [
        {
          "meName": "init",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(View<string> -> ((WebSharper.JavaScript.Dom.Element -> unit) -> ((WebSharper.JavaScript.Dom.Element -> unit) -> ((WebSharper.JavaScript.Dom.MouseEvent -> unit) -> (View<string> -> Doc)))))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(View<string> -> ((WebSharper.JavaScript.Dom.Element -> unit) -> ((WebSharper.JavaScript.Dom.Element -> unit) -> ((WebSharper.JavaScript.Dom.MouseEvent -> unit) -> (View<string> -> Doc)))))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "layoutVertical",
          "isField": 1,
          "type": {
            "tName": "(View<string> -> ((WebSharper.JavaScript.Dom.Element -> unit) -> ((WebSharper.JavaScript.Dom.Element -> unit) -> ((WebSharper.JavaScript.Dom.MouseEvent -> unit) -> (View<string> -> Doc)))))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "set_layoutVertical",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(View<string> -> ((WebSharper.JavaScript.Dom.Element -> unit) -> ((WebSharper.JavaScript.Dom.Element -> unit) -> ((WebSharper.JavaScript.Dom.MouseEvent -> unit) -> (View<string> -> Doc)))))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "layoutHorizontal",
          "isField": 1,
          "type": {
            "tName": "(View<string> -> ((WebSharper.JavaScript.Dom.Element -> unit) -> ((WebSharper.JavaScript.Dom.Element -> unit) -> ((WebSharper.JavaScript.Dom.MouseEvent -> unit) -> (View<string> -> Doc)))))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "set_layoutHorizontal",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(View<string> -> ((WebSharper.JavaScript.Dom.Element -> unit) -> ((WebSharper.JavaScript.Dom.Element -> unit) -> ((WebSharper.JavaScript.Dom.MouseEvent -> unit) -> (View<string> -> Doc)))))",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+WebComponent",
      "methods": [
        {
          "meName": "defineWebComponent",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
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
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco+Position",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco+Range",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco+Uri",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco+Location",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco+FindMatch",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco+WordAtPosition",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco+Model",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco+MarkDownString",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco+MarkerSeverity",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco+MarkerData",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco+CompletionItemKind",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco+CompletionItem",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco+Hover",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco+Editor",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco+MonacoConfig",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Monaco",
      "methods": [
        {
          "meName": "newVarO",
          "isField": 0,
          "type": {
            "tName": "MonacoConfig",
            "asm": "FSharpStation"
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
            "asm": "FSharpStation"
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
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "disabled",
          "isField": 0,
          "type": {
            "tName": "MonacoConfig",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "View<bool>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "MonacoConfig",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "onRender",
          "isField": 0,
          "type": {
            "tName": "MonacoConfig",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(Editor -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "MonacoConfig",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "onChange",
          "isField": 0,
          "type": {
            "tName": "MonacoConfig",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(string -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "MonacoConfig",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "setVar",
          "isField": 0,
          "type": {
            "tName": "MonacoConfig",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "MonacoConfig",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "render$3716$48",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "MonacoConfig",
              "asm": "FSharpStation"
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
              "asm": "FSharpStation"
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
            "asm": "FSharpStation"
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
      "moName": "FsRoot.LibraryJS+MonacoGenAdapter+MonacoRT",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+MonacoGenAdapter+CompletionItemProvider",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+MonacoGenAdapter+HoverProvider",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+MonacoGenAdapter+DefinitionProvider",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+MonacoGenAdapter",
      "methods": [
        {
          "meName": "newVar",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+GenEditor+GenEditor<FsRoot.LibraryJS+Monaco+Editor>",
            "asm": "FSharpStation"
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
            "asm": "FSharpStation"
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
            "tName": "FsRoot.LibraryJS+GenEditor+GenEditorHook<FsRoot.LibraryJS+Monaco+Editor>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "FSharpStation"
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
              "asm": "FSharpStation"
            },
            {
              "tName": "IEnumerable<FsRoot.LibraryJS+GenEditor+Annotation>",
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
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "getWordAt",
          "isField": 0,
          "type": {
            "tName": "Option<(string * FsRoot.LibraryJS+GenEditor+Position)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.LibraryJS+GenEditor+Position",
              "asm": "FSharpStation"
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
              "asm": "FSharpStation"
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
              "asm": "FSharpStation"
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
              "asm": "FSharpStation"
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
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "generateDoc$3858$48",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "FSharpStation"
            },
            {
              "tName": "(FsRoot.LibraryJS+Monaco+Editor -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.LibraryJS+GenEditor+GenEditor<_>",
              "asm": "FSharpStation"
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
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.LibraryJS+GenEditor+GenEditor<'a>",
              "asm": "FSharpStation"
            },
            {
              "tName": "(FsRoot.LibraryJS+Monaco+Editor -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "convertGlyphChar",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+Monaco+CompletionItemKind",
            "asm": "FSharpStation"
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
            "tName": "FsRoot.LibraryJS+GenEditor+Position",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "MonacoRT",
              "asm": "FSharpStation"
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
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.LibraryJS+GenEditor+Position",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "posEd2Gen",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+GenEditor+Position",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+Monaco+Position",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "posGen2Ed",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+Monaco+Position",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+GenEditor+Position",
              "asm": "FSharpStation"
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
              "asm": "FSharpStation"
            },
            {
              "tName": "(FsRoot.LibraryJS+Monaco+Editor -> Option<'a>)",
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
              "asm": "FSharpStation"
            },
            {
              "tName": "(FsRoot.LibraryJS+Monaco+Editor -> 'a)",
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
              "asm": "FSharpStation"
            },
            {
              "tName": "(FsRoot.LibraryJS+Monaco+Editor -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+AppFrameworkTemplate",
      "methods": [
        {
          "meName": "html",
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
      "moName": "FsRoot.LibraryJS+AppFramework+PlgElemName",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+PlugInName",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+PlugInVar",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+PlugInView",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+DocFunction",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+PlugInDoc",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+ActFunction",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+PlugInAction",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+PlugInQuery",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+PlugIn",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+PlugInBuilder",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+TextData",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+Fun`2",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+Val`1",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+P`1",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+Val",
      "methods": [
        {
          "meName": "textAtt",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+Val<string>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "textDoc",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+Val<string>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "addAtt",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+Val<IEnumerable<Attr>>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Attr",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "FsRoot.LibraryJS+AppFramework+Val<IEnumerable<Attr>>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "addDoc",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+Val<IEnumerable<Doc>>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "FsRoot.LibraryJS+AppFramework+Val<IEnumerable<Doc>>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "toView",
          "isField": 0,
          "type": {
            "tName": "View<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+Val<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "sequenceListApp",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+Val<List<'a>>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "List<FsRoot.LibraryJS+AppFramework+Val<'a>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "traverseListApp",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+Val<List<'b>>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> FsRoot.LibraryJS+AppFramework+Val<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_LessMultiplyGreater",
          "isField": 1,
          "type": {
            "tName": "(FsRoot.LibraryJS+AppFramework+Val<('a -> 'b)> -> (FsRoot.LibraryJS+AppFramework+Val<'a> -> FsRoot.LibraryJS+AppFramework+Val<'b>))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "apply",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+Val<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+Val<('a -> 'b)>",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.LibraryJS+AppFramework+Val<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+Val<'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "map",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+Val<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.LibraryJS+AppFramework+Val<'a>",
              "asm": "FSharpStation"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+AAttr",
      "methods": [
        {
          "meName": "_unique_AEmpty",
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
      "moName": "FsRoot.LibraryJS+AppFramework+Extract0+TextType",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework+Extract0",
      "methods": [
        {
          "meName": "extractTextD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(string -> View<string>)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "extractAtsD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(string -> IEnumerable<Attr>)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "getTextValD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(string -> FsRoot.LibraryJS+AppFramework+Val<string>)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "getTextValFromSeqD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(List<TextType> -> FsRoot.LibraryJS+AppFramework+Val<string>)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "extractDocD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(string -> Doc)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "getDocFromTextTypesD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(List<TextType> -> Doc)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "getTextActViewFromReferenceD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(string -> View<FSharpChoice<string, FsRoot.LibraryJS+AppFramework+PlugInAction>>)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "getDocFromReferenceD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(string -> Doc)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "getTextData",
          "isField": 0,
          "type": {
            "tName": "List<TextType>",
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
          "meName": "getOneTextData",
          "isField": 0,
          "type": {
            "tName": "List<TextType>",
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
          "meName": "getTextActViewFromReference",
          "isField": 0,
          "type": {
            "tName": "View<FSharpChoice<string, FsRoot.LibraryJS+AppFramework+PlugInAction>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getDocFromReference",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
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
      "moName": "FsRoot.LibraryJS+AppFramework+ListModelData`2",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+AppFramework",
      "methods": [
        {
          "meName": "mapVarO",
          "isField": 0,
          "type": {
            "tName": "Var<Option<'a>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> Option<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> 'a)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Var<Option<'b>>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "lensStrO",
          "isField": 0,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Var<Option<string>>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "concatMainDocs",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<PlugIn>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "op_Dereference",
          "isField": 0,
          "type": {
            "tName": "P<Val<'a>>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "getMainDoc",
          "isField": 1,
          "type": {
            "tName": "Lazy<Doc>",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "splitterPerc",
          "isField": 1,
          "type": {
            "tName": "(string -> (string -> (string -> (string -> (string -> Doc)))))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "addPlugIn",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "PlugIn",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "select",
          "isField": 1,
          "type": {
            "tName": "(string -> (string -> (string -> (string -> Doc))))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "delayAction",
          "isField": 1,
          "type": {
            "tName": "(Object -> (Object -> unit))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "callAction",
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
          "meName": "callAction0",
          "isField": 1,
          "type": {
            "tName": "(string -> (Object -> (Object -> unit)))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "trigActChange",
          "isField": 1,
          "type": {
            "tName": "(string -> (string -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "trigAct",
          "isField": 1,
          "type": {
            "tName": "(string -> (string -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "dragSplitter",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
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
          "meName": "dragSplitter0",
          "isField": 1,
          "type": {
            "tName": "((string * WebSharper.JavaScript.Dom.MouseEvent) -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "draggingEvent",
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
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "WebSharper.JavaScript.Dom.MouseEvent",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "getValDirect",
          "isField": 1,
          "type": {
            "tName": "(string -> string)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "setVarDirectD",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
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
          "meName": "setVarDirect",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
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
          "meName": "setVarDirect0",
          "isField": 1,
          "type": {
            "tName": "((Object * Object) -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "setVar",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
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
          "meName": "setVar0",
          "isField": 1,
          "type": {
            "tName": "((Object * Object) -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "docReference",
          "isField": 1,
          "type": {
            "tName": "(string -> Doc)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "|Lazy|",
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
          "meName": "htmlDoc",
          "isField": 1,
          "type": {
            "tName": "(string -> Doc)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "textArea",
          "isField": 1,
          "type": {
            "tName": "(string -> (string -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "input",
          "isField": 1,
          "type": {
            "tName": "(string -> (string -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "inputLabel",
          "isField": 1,
          "type": {
            "tName": "(string -> (string -> (string -> Doc)))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "inputFile$5090$67",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInAction",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "inputFile$5089$67",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "inputFile",
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
          "meName": "docWithVar",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(Var<string> -> Doc)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "depWithExtracts",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "(((string -> IEnumerable<Attr>) * (string -> Doc) * (string -> View<string>)) -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "getParmRef",
          "isField": 0,
          "type": {
            "tName": "(PlugInName * PlgElemName)",
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
          "meName": "runDef",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+Depend+Depend<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "defPlugInName",
          "isField": 1,
          "type": {
            "tName": "PlugInName",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "extractAttD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(string -> Attr)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "extractAtsD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(string -> IEnumerable<Attr>)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "extractDocD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(string -> Doc)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "extractTextD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(string -> View<string>)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "run",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+Monads+Depend+Depend<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "errDocf",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "PrintfFormat<'a, unit, string, Doc>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "errDoc",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getTextActViewD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(string -> View<FSharpChoice<string, PlugInAction>>)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "getDocD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(string -> Doc)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "getDocwD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(string -> Doc)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "currentPlugInNameD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<PlugInName>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "currentPlugInNameDef",
          "isField": 1,
          "type": {
            "tName": "PlugInName",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "valToAttr",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Val<string>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "valToStyle",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Val<string>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "choiceToString",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FSharpChoice<string, 'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "makeAViewDoc0",
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
          "meName": "makeAViewDocL",
          "isField": 0,
          "type": {
            "tName": "Lazy<Doc>",
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
          "meName": "makeAViewDoc",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(unit -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "baseView",
          "isField": 1,
          "type": {
            "tName": "View<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "mainX",
          "isField": 1,
          "type": {
            "tName": "Val<int>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "a11V",
          "isField": 1,
          "type": {
            "tName": "Var<int>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "add1",
          "isField": 0,
          "type": {
            "tName": "int",
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
          "meName": "unwrapBindWrap",
          "isField": 0,
          "type": {
            "tName": "P<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "P<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "bindWrap",
          "isField": 0,
          "type": {
            "tName": "P<'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> P<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+Depend+Depend<'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "getAttrs",
          "isField": 0,
          "type": {
            "tName": "List<Attr>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getTextData",
          "isField": 0,
          "type": {
            "tName": "View<TextData>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getOneTextData",
          "isField": 0,
          "type": {
            "tName": "View<TextData>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
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
          "meName": "tryGetWoW",
          "isField": 0,
          "type": {
            "tName": "Option<View<string>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetVoV",
          "isField": 0,
          "type": {
            "tName": "Option<Var<string>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetDoc",
          "isField": 0,
          "type": {
            "tName": "Option<PlugInDoc>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetQry",
          "isField": 0,
          "type": {
            "tName": "Option<PlugInQuery>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetAct",
          "isField": 0,
          "type": {
            "tName": "Option<PlugInAction>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetViw",
          "isField": 0,
          "type": {
            "tName": "Option<PlugInView>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetVar",
          "isField": 0,
          "type": {
            "tName": "Option<PlugInVar>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetPlugIn",
          "isField": 0,
          "type": {
            "tName": "Option<PlugIn>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetWoWW",
          "isField": 0,
          "type": {
            "tName": "View<Option<string>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetVoVW",
          "isField": 0,
          "type": {
            "tName": "View<Option<Var<string>>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetDocW",
          "isField": 0,
          "type": {
            "tName": "View<Option<PlugInDoc>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetQryW",
          "isField": 0,
          "type": {
            "tName": "View<Option<PlugInQuery>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetActW",
          "isField": 0,
          "type": {
            "tName": "View<Option<PlugInAction>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetViwW",
          "isField": 0,
          "type": {
            "tName": "View<Option<PlugInView>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetVarW",
          "isField": 0,
          "type": {
            "tName": "View<Option<PlugInVar>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "tryGetPlugInW",
          "isField": 0,
          "type": {
            "tName": "View<Option<PlugIn>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "plugin",
          "isField": 1,
          "type": {
            "tName": "PlugInBuilder",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "newDocF",
          "isField": 0,
          "type": {
            "tName": "PlugInDoc",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            },
            {
              "tName": "DocFunction",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "newDocL",
          "isField": 0,
          "type": {
            "tName": "PlugInDoc",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            },
            {
              "tName": "Lazy<DocFunction>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "newActF",
          "isField": 0,
          "type": {
            "tName": "PlugInAction",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            },
            {
              "tName": "ActFunction",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "newAct",
          "isField": 0,
          "type": {
            "tName": "PlugInAction",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            },
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "newQry",
          "isField": 0,
          "type": {
            "tName": "PlugInQuery",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            },
            {
              "tName": "(Object -> Object)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "newDoc0",
          "isField": 0,
          "type": {
            "tName": "PlugInDoc",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            },
            {
              "tName": "(unit -> Doc)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "newDoc",
          "isField": 0,
          "type": {
            "tName": "PlugInDoc",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            },
            {
              "tName": "Lazy<Doc>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "newViw",
          "isField": 0,
          "type": {
            "tName": "PlugInView",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            },
            {
              "tName": "View<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "newVar",
          "isField": 0,
          "type": {
            "tName": "PlugInVar",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "FSharpStation"
            },
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "vertical$4568$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(WebSharper.JavaScript.Dom.MouseEvent -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "vertical$4567$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "vertical$4566$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "vertical",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<string>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(WebSharper.JavaScript.Dom.MouseEvent -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "horizontal$4560$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(WebSharper.JavaScript.Dom.MouseEvent -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "horizontal$4559$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "horizontal$4558$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "horizontal",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<string>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(WebSharper.JavaScript.Dom.MouseEvent -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "mainDoc$4549$42",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
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
          "meName": "getMainClientDoc",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "getActualDoc",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInDoc",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "AppFwkClient",
          "isField": 1,
          "type": {
            "tName": "Lazy<Doc>",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "renderQueries$4512$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInQuery",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "renderQueries",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "renderActions$4501$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInAction",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "renderActions",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "callFunction",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
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
              "tName": "ActFunction",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "renderDocs$4481$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInDoc",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "renderDocs",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "docParms",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "PlugInDoc",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "renderViews",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "renderVars",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "renderPlugIns$4440$35",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "renderPlugIns",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "currentPlugInV",
          "isField": 1,
          "type": {
            "tName": "Var<PlugIn>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "currentPlugInW",
          "isField": 1,
          "type": {
            "tName": "View<PlugIn>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "selectionPlugInO",
          "isField": 1,
          "type": {
            "tName": "Var<Option<PlugInName>>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "splitName",
          "isField": 0,
          "type": {
            "tName": "(string -> (PlugInName * PlgElemName))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "defaultPlugIn",
          "isField": 0,
          "type": {
            "tName": "PlugIn",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "TemplateFileName",
          "isField": 1,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "mainDocV",
          "isField": 1,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "plugIns",
          "isField": 1,
          "type": {
            "tName": "ListModel<PlugInName, PlugIn>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+LM",
      "methods": [
        {
          "meName": "addElements",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+ListModelData<'a, 'b>",
              "asm": "FSharpStation"
            },
            {
              "tName": "IEnumerable<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getDoc",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+ListModelData<'b, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "(unit -> 'a)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<View<('a -> bool)>>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(FsRoot.LibraryJS+AppFramework+ListModelData<'b, 'a> -> (View<Option<'b>> -> (Var<'a> -> 'c)))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "getDocFor",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+ListModelData<'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "ListModel<'a, 'b>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "(unit -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<View<('b -> bool)>>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(FsRoot.LibraryJS+AppFramework+ListModelData<'a, 'b> -> (View<Option<'a>> -> (Var<'b> -> 'c)))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "getDocForW",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+ListModelData<'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "View<ListModel<'a, 'b>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('b -> 'a)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "(unit -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<View<('b -> bool)>>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(FsRoot.LibraryJS+AppFramework+ListModelData<'a, 'b> -> (View<Option<'a>> -> (Var<'b> -> 'c)))",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+StartAppFramework",
      "methods": [
        {
          "meName": "startWith",
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
          "meName": "startWithHtmlD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(unit -> unit)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "htmlD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<Object>",
            "asm": "FSharpStation"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+AppFrameworkUI",
      "methods": [
        {
          "meName": "failCreate",
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
              "tName": "unit",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "defAct",
          "isField": 1,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+PlugInAction",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "defViw",
          "isField": 1,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+PlugInView",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "defVar",
          "isField": 1,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+PlugInVar",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "defDoc",
          "isField": 1,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+PlugInDoc",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "defPlg",
          "isField": 1,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+PlugIn",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "showDoc$5637$35",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<Option<_>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "FsRoot.LibraryJS+AppFramework+ListModelData<_, FsRoot.LibraryJS+AppFramework+PlugInDoc>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "showDoc",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+ListModelData<'a, FsRoot.LibraryJS+AppFramework+PlugInDoc>",
              "asm": "FSharpStation"
            },
            {
              "tName": "View<Option<'a>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Var<FsRoot.LibraryJS+AppFramework+PlugInDoc>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "showAct$5630$35",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<Option<_>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "FsRoot.LibraryJS+AppFramework+ListModelData<_, FsRoot.LibraryJS+AppFramework+PlugInAction>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "showAct",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+ListModelData<'a, FsRoot.LibraryJS+AppFramework+PlugInAction>",
              "asm": "FSharpStation"
            },
            {
              "tName": "View<Option<'a>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Var<FsRoot.LibraryJS+AppFramework+PlugInAction>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "showView$5618$35",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<Option<_>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "FsRoot.LibraryJS+AppFramework+ListModelData<_, FsRoot.LibraryJS+AppFramework+PlugInView>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "showView",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+ListModelData<'a, FsRoot.LibraryJS+AppFramework+PlugInView>",
              "asm": "FSharpStation"
            },
            {
              "tName": "View<Option<'a>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Var<FsRoot.LibraryJS+AppFramework+PlugInView>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "showVar$5606$35",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<Option<_>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "FsRoot.LibraryJS+AppFramework+ListModelData<_, FsRoot.LibraryJS+AppFramework+PlugInVar>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "showVar",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+ListModelData<'a, FsRoot.LibraryJS+AppFramework+PlugInVar>",
              "asm": "FSharpStation"
            },
            {
              "tName": "View<Option<'a>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Var<FsRoot.LibraryJS+AppFramework+PlugInVar>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "showPlugIn$5594$35",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<Option<_>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "FsRoot.LibraryJS+AppFramework+ListModelData<_, FsRoot.LibraryJS+AppFramework+PlugIn>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "showPlugIn",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+ListModelData<'a, FsRoot.LibraryJS+AppFramework+PlugIn>",
              "asm": "FSharpStation"
            },
            {
              "tName": "View<Option<'a>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Var<FsRoot.LibraryJS+AppFramework+PlugIn>",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngine",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+LayoutEntry",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Token",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Measures",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+ItemRef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+DocRef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+ActRef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+VarRef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+ViwRef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+TextVal",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+AttrVal",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+NodeRef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+ParmRef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+RefType",
      "methods": [
        {
          "meName": "_unique_RPlg",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_RAct",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_RViw",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_RVar",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_RDoc",
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
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+SplitterDef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+ButtonDef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+InputDef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+TextAreaDef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+DocFDef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+ConcatDef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+ElementDef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+TemplateDef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+ActDef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+ActDefs",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+VarDef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+ViwDef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+VJSDef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+PlgDef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+DocDef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+Entry",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+EntryDef",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax",
      "methods": [
        {
          "meName": "createEntryO2",
          "isField": 0,
          "type": {
            "tName": "(string -> Option<Result<(string * Entry), string>>)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "Dictionary<string, Entry>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "createEntryO",
          "isField": 0,
          "type": {
            "tName": "Option<EntryDef>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(ItemRef -> (RefType * Option<Entry>))",
              "asm": "FSharp.Core"
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
        },
        {
          "meName": "|R|_|",
          "isField": 0,
          "type": {
            "tName": "Option<ItemRef>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+LayoutEngineModule+Token",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "entryRef",
          "isField": 0,
          "type": {
            "tName": "Option<EntryDef>",
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
              "tName": "RefType",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "entryPlg",
          "isField": 0,
          "type": {
            "tName": "Option<EntryDef>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "PlgDef",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "entryVar",
          "isField": 0,
          "type": {
            "tName": "Option<EntryDef>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "VarDef",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "entryVJS",
          "isField": 0,
          "type": {
            "tName": "Option<EntryDef>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "VJSDef",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "entryView",
          "isField": 0,
          "type": {
            "tName": "Option<EntryDef>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "ViwDef",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "entryActs",
          "isField": 0,
          "type": {
            "tName": "Option<EntryDef>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "ActDefs",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "entryAct",
          "isField": 0,
          "type": {
            "tName": "Option<EntryDef>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "ActDef",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "entryDoc",
          "isField": 0,
          "type": {
            "tName": "Option<EntryDef>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "DocDef",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "entryDef",
          "isField": 0,
          "type": {
            "tName": "EntryDef",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Entry",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "templateDef",
          "isField": 0,
          "type": {
            "tName": "TemplateDef",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "ParmRef",
              "asm": "FSharpStation"
            },
            {
              "tName": "(string * VarRef)[]",
              "asm": "netstandard"
            },
            {
              "tName": "(string * ParmRef)[]",
              "asm": "netstandard"
            },
            {
              "tName": "(string * DocRef)[]",
              "asm": "netstandard"
            },
            {
              "tName": "(string * ActRef)[]",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Layout+Node",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Layout+Splitter",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+LayoutEngineModule+Layout",
      "methods": [
        {
          "meName": "createLayoutDefinitions",
          "isField": 0,
          "type": {
            "tName": "(string * string[])",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Node",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "extractNodes",
          "isField": 0,
          "type": {
            "tName": "Node",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "cleanSpaces",
          "isField": 0,
          "type": {
            "tName": "string[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "verticalSplit",
          "isField": 0,
          "type": {
            "tName": "Option<(string[] * string[] * FsRoot.LibraryJS+LayoutEngineModule+Measures)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "transpose",
          "isField": 0,
          "type": {
            "tName": "string[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "horizontalSplit",
          "isField": 0,
          "type": {
            "tName": "Option<(string[] * string[] * FsRoot.LibraryJS+LayoutEngineModule+Measures)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "extractMeasuresO",
          "isField": 0,
          "type": {
            "tName": "Option<FsRoot.LibraryJS+LayoutEngineModule+Measures>",
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
      "moName": "FsRoot.LibraryJS+LayoutEngineModule",
      "methods": [
        {
          "meName": "newLyt",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+LayoutEngine",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "refreshEntries",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "IEnumerable<LayoutEntry>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "none",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "getQueryEntries",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<FsRoot.LibraryJS+AppFramework+PlugInQuery>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<LayoutEntry>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getActionEntries",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<FsRoot.LibraryJS+AppFramework+PlugInAction>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<LayoutEntry>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getViewEntries",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<FsRoot.LibraryJS+AppFramework+PlugInView>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<LayoutEntry>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getVarEntries",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<FsRoot.LibraryJS+AppFramework+PlugInVar>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<LayoutEntry>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getDocEntries",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<FsRoot.LibraryJS+AppFramework+PlugInDoc>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<LayoutEntry>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getText",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "Token",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "parseEntries",
          "isField": 0,
          "type": {
            "tName": "Result<(string * Syntax+Entry), string>[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "processText",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(string -> Option<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "processLines",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(string -> Option<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "string[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "createLines",
          "isField": 0,
          "type": {
            "tName": "(string[] * string[])",
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
              "tName": "string[]",
              "asm": "netstandard"
            },
            {
              "tName": "string[]",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "string[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getExtraLines",
          "isField": 0,
          "type": {
            "tName": "(string[] * string[])",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(string -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "string[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "notEmpty",
          "isField": 1,
          "type": {
            "tName": "(string -> bool)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "emptyLine",
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
          "meName": "splitTokens",
          "isField": 0,
          "type": {
            "tName": "List<Token>",
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
          "meName": "doubleQuote",
          "isField": 0,
          "type": {
            "tName": "List<Token>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "List<Token>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "variableSplitter",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "Double",
              "asm": "netstandard"
            },
            {
              "tName": "Double",
              "asm": "netstandard"
            },
            {
              "tName": "Double",
              "asm": "netstandard"
            },
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "fixedSplitter",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "Double",
              "asm": "netstandard"
            },
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "|Measures|_|",
          "isField": 0,
          "type": {
            "tName": "Option<Measures>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Token",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "splitInTwo",
          "isField": 0,
          "type": {
            "tName": "(string -> string[])",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "splitSemiColon",
          "isField": 1,
          "type": {
            "tName": "(string -> IEnumerable<string>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "splitChar",
          "isField": 0,
          "type": {
            "tName": "(string -> IEnumerable<string>)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "|Var|Doc|View|ViewJS|Docs|Action|Nothing|",
          "isField": 0,
          "type": {
            "tName": "FSharpChoice`7<unit, unit, unit, unit, unit, unit, unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Token",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "|PlugIn|Button|Input|TextArea|Select|Actions|Nothing|",
          "isField": 0,
          "type": {
            "tName": "FSharpChoice`7<unit, unit, unit, unit, unit, unit, unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Token",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "|Vertical|Horizontal|Layout|Grid|Template|Elem|Nothing|",
          "isField": 0,
          "type": {
            "tName": "FSharpChoice`7<unit, unit, unit, unit, unit, string, unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Token",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "|I|_|",
          "isField": 0,
          "type": {
            "tName": "Option<string>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Token",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "|Identifier|_|",
          "isField": 0,
          "type": {
            "tName": "Option<string>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Token",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "|S|",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Token",
              "asm": "FSharpStation"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+NewLY+P",
      "methods": [
        {
          "meName": "run",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.LibraryJS+AppFramework+P<'a>",
              "asm": "FSharpStation"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+NewLY",
      "methods": [
        {
          "meName": "addNewLayoutAct",
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
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "addLayout",
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
          "meName": "addNewLayout",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+LayoutEngine",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "generateEntries",
          "isField": 0,
          "type": {
            "tName": "(IEnumerable<(string * FsRoot.LibraryJS+LayoutEngineModule+Syntax+Entry)> -> IEnumerable<FsRoot.LibraryJS+LayoutEngineModule+LayoutEntry>)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "defTemplateM",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.LibraryJS+AppFramework+PlugInName * string * FsRoot.LibraryJS+LayoutEngineModule+Syntax+TemplateDef) -> (unit -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defSplitterM",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.LibraryJS+AppFramework+PlugInName * string * bool * FsRoot.LibraryJS+LayoutEngineModule+Measures * FsRoot.LibraryJS+LayoutEngineModule+Syntax+DocRef * FsRoot.LibraryJS+LayoutEngineModule+Syntax+DocRef) -> (unit -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defViewJSM",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.LibraryJS+AppFramework+PlugInName * string * List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+ParmRef>) -> View<string>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defViewM",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.LibraryJS+AppFramework+PlugInName * string * List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+ParmRef>) -> View<string>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defConcatM",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.LibraryJS+AppFramework+PlugInName * string * List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+NodeRef>) -> (unit -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defElementM",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.LibraryJS+AppFramework+PlugInName * string * string * FsRoot.LibraryJS+LayoutEngineModule+Syntax+ParmRef * List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+NodeRef>) -> (unit -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defTextAreaM",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.LibraryJS+AppFramework+PlugInName * string * FsRoot.LibraryJS+LayoutEngineModule+Syntax+VarRef * FsRoot.LibraryJS+LayoutEngineModule+Syntax+AttrVal[]) -> (unit -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defInputM",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.LibraryJS+AppFramework+PlugInName * string * FsRoot.LibraryJS+LayoutEngineModule+Syntax+VarRef * FsRoot.LibraryJS+LayoutEngineModule+Syntax+AttrVal[]) -> (unit -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defButtonM",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.LibraryJS+AppFramework+PlugInName * string * FsRoot.LibraryJS+LayoutEngineModule+Syntax+ActRef * FsRoot.LibraryJS+LayoutEngineModule+Syntax+AttrVal[] * List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+TextVal>) -> (unit -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defActionsM",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.LibraryJS+AppFramework+PlugInName * string * List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+ActRef>) -> FsRoot.LibraryJS+AppFramework+ActFunction)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defActionM",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.LibraryJS+AppFramework+PlugInName * string * FsRoot.LibraryJS+LayoutEngineModule+Syntax+ActRef * List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+ParmRef>) -> FsRoot.LibraryJS+AppFramework+ActFunction)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defDocFM",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.LibraryJS+AppFramework+PlugInName * string * FsRoot.LibraryJS+LayoutEngineModule+Syntax+DocRef * List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+ParmRef>) -> Lazy<FsRoot.LibraryJS+AppFramework+DocFunction>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defVarM",
          "isField": 0,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
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
          "meName": "defVarM0",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.LibraryJS+AppFramework+PlugInName * string * string) -> Var<string>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "initVal",
          "isField": 1,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "defTemplate",
          "isField": 0,
          "type": {
            "tName": "(unit -> Doc)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+TemplateDef",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "defSplitter",
          "isField": 0,
          "type": {
            "tName": "(unit -> Doc)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.LibraryJS+LayoutEngineModule+Measures",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+DocRef",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+DocRef",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "defButton",
          "isField": 0,
          "type": {
            "tName": "(unit -> Doc)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "IEnumerable<FsRoot.LibraryJS+LayoutEngineModule+Syntax+AttrVal>",
              "asm": "netstandard"
            },
            {
              "tName": "List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+TextVal>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "defDocF",
          "isField": 0,
          "type": {
            "tName": "Lazy<FsRoot.LibraryJS+AppFramework+DocFunction>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+DocRef",
              "asm": "FSharpStation"
            },
            {
              "tName": "List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+ParmRef>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "defConcat",
          "isField": 0,
          "type": {
            "tName": "(unit -> Doc)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+NodeRef>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "defElement",
          "isField": 0,
          "type": {
            "tName": "(unit -> Doc)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+ParmRef",
              "asm": "FSharpStation"
            },
            {
              "tName": "List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+NodeRef>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "defTextArea",
          "isField": 0,
          "type": {
            "tName": "(unit -> Doc)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "IEnumerable<FsRoot.LibraryJS+LayoutEngineModule+Syntax+AttrVal>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "defInput",
          "isField": 0,
          "type": {
            "tName": "(unit -> Doc)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "IEnumerable<FsRoot.LibraryJS+LayoutEngineModule+Syntax+AttrVal>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "defViewJS",
          "isField": 0,
          "type": {
            "tName": "View<string>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+ParmRef>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "defView",
          "isField": 0,
          "type": {
            "tName": "View<string>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+ParmRef>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "defActions",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+ActFunction",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+ActRef>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "defAction",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+ActFunction",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
              "asm": "FSharpStation"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+ActRef",
              "asm": "FSharpStation"
            },
            {
              "tName": "List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+ParmRef>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "defVar",
          "isField": 0,
          "type": {
            "tName": "Var<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "getParamTextD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(FsRoot.LibraryJS+LayoutEngineModule+Syntax+ParmRef -> ((Object -> unit) -> unit))>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "getParam2D",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(FsRoot.LibraryJS+LayoutEngineModule+Syntax+ParmRef -> string)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "itemRefToAbsolute",
          "isField": 0,
          "type": {
            "tName": "(FsRoot.LibraryJS+LayoutEngineModule+Syntax+ItemRef -> string)",
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
          "meName": "getParamD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(FsRoot.LibraryJS+LayoutEngineModule+Syntax+ParmRef -> View<Object>)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "actRefToActD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(FsRoot.LibraryJS+LayoutEngineModule+Syntax+ActRef -> FsRoot.LibraryJS+AppFramework+PlugInAction)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "varRefToVarD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(FsRoot.LibraryJS+LayoutEngineModule+Syntax+VarRef -> Var<string>)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "nodeRefToDocD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<(FsRoot.LibraryJS+LayoutEngineModule+Syntax+NodeRef -> Doc)>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "|ActRVs|",
          "isField": 0,
          "type": {
            "tName": "List<FsRoot.LibraryJS+LayoutEngineModule+Syntax+TextVal>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+ActRef",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "textValToTextType",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+Extract0+TextType",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+TextVal",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "itemRefToString",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+ItemRef",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "itemRefToTextType",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+Extract0+TextType",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+LayoutEngineModule+Syntax+ItemRef",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "currentPlugInNameD",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library+Monads+Depend+Depend<FsRoot.LibraryJS+AppFramework+PlugInName>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "currentPlugInNameDef",
          "isField": 1,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "pb",
          "isField": 1,
          "type": {
            "tName": "Double",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "pa",
          "isField": 1,
          "type": {
            "tName": "View<int>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "aV",
          "isField": 1,
          "type": {
            "tName": "Var<int>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "concat",
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
              "tName": "Double",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS",
      "methods": [
        {
          "meName": "rexEmail",
          "isField": 1,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "rexGuid",
          "isField": 1,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "|REGEX|_|",
          "isField": 0,
          "type": {
            "tName": "Option<string[]>",
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
        }
      ]
    },
    {
      "moName": "FsRoot.Library2+FsiAgent+Config",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsiAgent",
      "methods": [
        {
          "meName": "extractConfig",
          "isField": 0,
          "type": {
            "tName": "Config",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.Library+FsCode",
              "asm": "FSharpStation"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library2+WebSockets+Address",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+WebSockets+BrokerRequest",
      "methods": [
        {
          "meName": "_unique_BRGetProcessId",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_BRGetConnections",
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
      "moName": "FsRoot.Library2+WebSockets+BrokerReply",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+WebSockets+MessageType",
      "methods": [
        {
          "meName": "_unique_MsgRequestForEcho",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_MsgRequestForId",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_MsgFromBroker",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_MsgReply",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_MsgRequest",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_MsgInformation",
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
      "moName": "FsRoot.Library2+WebSockets+BrokerMessage",
      "methods": [
        {
          "meName": "_unique_BMReceiverCantReply",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_BMOnlyBrokerShouldUse",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_BMOk",
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
      "moName": "FsRoot.Library2+WebSockets+Replier",
      "methods": [
        {
          "meName": "_unique_Receiver",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_Broker",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_NoReply",
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
      "moName": "FsRoot.Library2+WebSockets+MessageGeneric",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+WebSockets+ClientTypeFSharp",
      "methods": [
        {
          "meName": "_unique_FSharp",
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
      "moName": "FsRoot.Library2+WebSockets+ClientTypeFSStation",
      "methods": [
        {
          "meName": "_unique_FSStation",
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
      "moName": "FsRoot.Library2+WebSockets+ClientTypeJScript",
      "methods": [
        {
          "meName": "_unique_JScript",
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
      "moName": "FsRoot.Library2+WebSockets+ReplyHandler+WaitForReplyMsg",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+WebSockets+ReplyHandler+Handler",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+WebSockets+ReplyHandler",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+WebSockets+WSMessagingClient",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+WebSockets",
      "methods": [
        {
          "meName": "extractEndPoint",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "makeReply",
          "isField": 0,
          "type": {
            "tName": "MessageGeneric",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "MessageGeneric",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "mapPayload",
          "isField": 0,
          "type": {
            "tName": "MessageGeneric",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "(string -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "MessageGeneric",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "msgId",
          "isField": 0,
          "type": {
            "tName": "MessageGeneric",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Guid",
              "asm": "netstandard"
            },
            {
              "tName": "MessageGeneric",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "replier",
          "isField": 0,
          "type": {
            "tName": "MessageGeneric",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Replier",
              "asm": "FSharpStation"
            },
            {
              "tName": "MessageGeneric",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "subtype",
          "isField": 0,
          "type": {
            "tName": "MessageGeneric",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "MessageGeneric",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "msgType",
          "isField": 0,
          "type": {
            "tName": "MessageGeneric",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "MessageType",
              "asm": "FSharpStation"
            },
            {
              "tName": "MessageGeneric",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "destination",
          "isField": 0,
          "type": {
            "tName": "MessageGeneric",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Address",
              "asm": "FSharpStation"
            },
            {
              "tName": "MessageGeneric",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "from",
          "isField": 0,
          "type": {
            "tName": "MessageGeneric",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "Address",
              "asm": "FSharpStation"
            },
            {
              "tName": "MessageGeneric",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "MessageBrokerAddress",
          "isField": 1,
          "type": {
            "tName": "Address",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "MessageBrokerId",
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
      "moName": "FsRoot.Library2+FSMessage",
      "methods": [
        {
          "meName": "_unique_MsgGetUrl",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_MsgGetId",
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
      "moName": "FsRoot.Library2+FSResponse",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FSharpStationClient",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+ResponseError",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+Location",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+CompletionResponse",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+OverloadDescription",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+OverloadParameter",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+Overload",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+Parameter",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+SignatureData",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+MethodResponse",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+SymbolUseRange",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+SymbolUseResponse",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+HelpTextResponse",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+CompilerLocationResponse",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+FSharpErrorInfo",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+ErrorResponse",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+Colorization",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+Declaration",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+DeclarationResponse",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+OpenNamespace",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+QualifySymbol",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+ResolveNamespaceResponse",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+UnionCaseResponse",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes+Kind",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+CommTypes",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+MsgTypes+ParseRequest",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+MsgTypes+DeclarationsRequest",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+MsgTypes+CompletionRequest",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+MsgTypes+PositionRequest",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+MsgTypes+ProjectRequest",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+MsgTypes+LintRequest",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+MsgTypes+HelptextRequest",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+MsgTypes+WorkspacePeekRequest",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+MsgTypes+FARequest",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+MsgTypes",
      "methods": []
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete+Calls",
      "methods": [
        {
          "meName": "symbolUseProject",
          "isField": 0,
          "type": {
            "tName": "Async<Result<(FsRoot.Library2+FsAutoComplete+CommTypes+SymbolUseResponse * FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]), FsRoot.Library+ResultMessage<FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]>>>",
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
          "meName": "symbolUse",
          "isField": 0,
          "type": {
            "tName": "Async<Result<(FsRoot.Library2+FsAutoComplete+CommTypes+SymbolUseResponse * FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]), FsRoot.Library+ResultMessage<FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]>>>",
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
          "meName": "helpText",
          "isField": 0,
          "type": {
            "tName": "Async<Result<(FsRoot.Library2+FsAutoComplete+CommTypes+HelpTextResponse * FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]), FsRoot.Library+ResultMessage<FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]>>>",
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
          "meName": "declarations",
          "isField": 0,
          "type": {
            "tName": "Async<Result<(FsRoot.Library2+FsAutoComplete+CommTypes+DeclarationResponse[] * FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]), FsRoot.Library+ResultMessage<FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]>>>",
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
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "findDeclaration",
          "isField": 0,
          "type": {
            "tName": "Async<Result<(FsRoot.Library2+FsAutoComplete+CommTypes+Location * FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]), FsRoot.Library+ResultMessage<FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]>>>",
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
          "meName": "findTypeDecl",
          "isField": 0,
          "type": {
            "tName": "Async<Result<(FsRoot.Library2+FsAutoComplete+CommTypes+Location * FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]), FsRoot.Library+ResultMessage<FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]>>>",
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
          "meName": "completion",
          "isField": 0,
          "type": {
            "tName": "Async<Result<(FsRoot.Library2+FsAutoComplete+CommTypes+CompletionResponse[] * FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]), FsRoot.Library+ResultMessage<FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]>>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "bool",
              "asm": "netstandard"
            },
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
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "signatureData",
          "isField": 0,
          "type": {
            "tName": "Async<Result<(FsRoot.Library2+FsAutoComplete+CommTypes+SignatureData * FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]), FsRoot.Library+ResultMessage<FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]>>>",
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
          "meName": "signature",
          "isField": 0,
          "type": {
            "tName": "Async<Result<(string * FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]), FsRoot.Library+ResultMessage<FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]>>>",
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
          "meName": "toolTip",
          "isField": 0,
          "type": {
            "tName": "Async<Result<(FsRoot.Library2+FsAutoComplete+CommTypes+OverloadDescription[][] * FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]), FsRoot.Library+ResultMessage<FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]>>>",
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
          "meName": "parseCode",
          "isField": 0,
          "type": {
            "tName": "Async<Result<(FsRoot.Library2+FsAutoComplete+CommTypes+ErrorResponse * FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]), FsRoot.Library+ResultMessage<FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]>>>",
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
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "FSAutocompleteCall",
          "isField": 0,
          "type": {
            "tName": "Async<Result<('a * FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]), FsRoot.Library+ResultMessage<FsRoot.Library2+FsAutoComplete+CommTypes+Kind[]>>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "(FsRoot.Library2+FsAutoComplete+CommTypes+Kind -> Option<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library2+FsAutoComplete+MsgTypes+FARequest",
              "asm": "FSharpStation"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.Library2+FsAutoComplete",
      "methods": []
    },
    {
      "moName": "FsRoot.FSharpStation+FStation",
      "methods": [
        {
          "meName": "appendMsgs",
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
          "meName": "appendText",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "outputMsgs",
          "isField": 1,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "annotationsV",
          "isField": 1,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "srcDir",
          "isField": 1,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "set_srcDir",
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
          "meName": "rootDir",
          "isField": 1,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "set_rootDir",
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
          "meName": "id",
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
      "moName": "FsRoot.FSharpStation+Snippets",
      "methods": [
        {
          "meName": "setProperty",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
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
          "meName": "toggleCollapse",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "newSnippet",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "addSnippetRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<unit, FsRoot.Library+SnippetCollection, string>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "setSnippetsGen",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<FsRoot.Library+Snippet>",
              "asm": "netstandard"
            },
            {
              "tName": "Set<FsRoot.Library+SnippetId>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "updateGeneration",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "moveNode",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "indentOut",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "indentIn",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "deleteCurrentSnippet",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "expandClassW",
          "isField": 0,
          "type": {
            "tName": "View<string>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "expandClassRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<string, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "togglePredecessor",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "isIncludedPredecessorW",
          "isField": 0,
          "type": {
            "tName": "View<bool>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "isIndirectPredecessorW",
          "isField": 0,
          "type": {
            "tName": "View<bool>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "treenode",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+TreeReader+Node<FsRoot.Library+SnippetId, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "setChildrenRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionM<unit, 'c, 'd>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+TreeReader+Node<FsRoot.Library+SnippetId, 'a, 'b>[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "currentLayoutJSDW",
          "isField": 1,
          "type": {
            "tName": "View<Option<(FsRoot.Library+SnippetId * string)>>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "currentLayoutDW",
          "isField": 1,
          "type": {
            "tName": "View<Option<(string * string)>>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "currentPathW",
          "isField": 1,
          "type": {
            "tName": "View<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "SaveAsClassW",
          "isField": 1,
          "type": {
            "tName": "View<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "hasChangedW",
          "isField": 0,
          "type": {
            "tName": "View<bool>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "codeStartsW",
          "isField": 1,
          "type": {
            "tName": "View<((FsRoot.Library+SnippetId * string) * (int * int * int))[]>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "FsCodeW",
          "isField": 1,
          "type": {
            "tName": "View<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "codeAndStartsW",
          "isField": 1,
          "type": {
            "tName": "View<(string * ((FsRoot.Library+SnippetId * string) * (int * int * int))[])>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "getHierarchyW",
          "isField": 1,
          "type": {
            "tName": "View<(FsRoot.Library+SnippetId * int)[]>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "findSnippetV",
          "isField": 0,
          "type": {
            "tName": "Var<FsRoot.Library+Snippet>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "findSnippetW",
          "isField": 0,
          "type": {
            "tName": "View<FsRoot.Library+Snippet>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "codeSnippetClassW",
          "isField": 0,
          "type": {
            "tName": "View<string>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "selectedClassW",
          "isField": 0,
          "type": {
            "tName": "View<string>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "currentSnippetV",
          "isField": 1,
          "type": {
            "tName": "Var<FsRoot.Library+Snippet>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "codeSnippetW",
          "isField": 1,
          "type": {
            "tName": "View<FsRoot.Library+Snippet>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "currentSnippetW",
          "isField": 1,
          "type": {
            "tName": "View<FsRoot.Library+Snippet>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "CurrentSnippetIdW",
          "isField": 1,
          "type": {
            "tName": "View<FsRoot.Library+SnippetId>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "isDescendantOf",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "getParentIdO",
          "isField": 1,
          "type": {
            "tName": "(FsRoot.Library+SnippetId -> Option<FsRoot.Library+SnippetId>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "getParentIdONotMemo",
          "isField": 0,
          "type": {
            "tName": "Option<FsRoot.Library+SnippetId>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "getSnippetsGen",
          "isField": 0,
          "type": {
            "tName": "(IEnumerable<FsRoot.Library+Snippet> * DateTime * Set<FsRoot.Library+SnippetId>)",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "setSnippet",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "setCurrentSnippetIdO",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Option<FsRoot.Library+SnippetId>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "expandParents",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "runReader",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "(FsRoot.Library+ResultMessage<'a> -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.Library+Monads+FusionM<'b, FsRoot.Library+SnippetCollection, 'a>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "runReaderResult",
          "isField": 0,
          "type": {
            "tName": "Result<'a, FsRoot.Library+ResultMessage<'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<'a, FsRoot.Library+SnippetCollection, 'b>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "iterReader",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Monads+FusionM<unit, FsRoot.Library+SnippetCollection, string>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "handleError",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "FsRoot.Library+ResultMessage<string>",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "snippetsColl",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+SnippetCollection",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "prepCode",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "prepAnyCode",
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
          "meName": "clearPredsCache",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "clearParent",
          "isField": 1,
          "type": {
            "tName": "(unit -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "parentCache",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.Library+SnippetId -> Option<Option<FsRoot.Library+SnippetId>>) * (FsRoot.Library+SnippetId -> ((FsRoot.Library+SnippetId -> Option<FsRoot.Library+SnippetId>) -> Option<FsRoot.Library+SnippetId>)))",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "clearReduc",
          "isField": 1,
          "type": {
            "tName": "(unit -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "reducCache",
          "isField": 1,
          "type": {
            "tName": "(((bool * FsRoot.Library+SnippetId * Set<FsRoot.Library+SnippetId>) -> Option<Option<((FsRoot.Library+SnippetId * string * int * int)[] * string[] * FsRoot.Library+FsCodeModule+PreproDirective[])>>) * ((bool * FsRoot.Library+SnippetId * Set<FsRoot.Library+SnippetId>) -> (((bool * FsRoot.Library+SnippetId * Set<FsRoot.Library+SnippetId>) -> Option<((FsRoot.Library+SnippetId * string * int * int)[] * string[] * FsRoot.Library+FsCodeModule+PreproDirective[])>) -> Option<((FsRoot.Library+SnippetId * string * int * int)[] * string[] * FsRoot.Library+FsCodeModule+PreproDirective[])>)))",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "clearPreds",
          "isField": 1,
          "type": {
            "tName": "(unit -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "predsCache",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.Library+SnippetId -> Option<List<FsRoot.Library+SnippetId>>) * (FsRoot.Library+SnippetId -> ((FsRoot.Library+SnippetId -> List<FsRoot.Library+SnippetId>) -> List<FsRoot.Library+SnippetId>)))",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "collapsedV",
          "isField": 1,
          "type": {
            "tName": "Var<Set<FsRoot.Library+SnippetId>>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "codeSnippetIdOV",
          "isField": 1,
          "type": {
            "tName": "Var<Option<FsRoot.Library+SnippetId>>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "currentSnippetIdOV",
          "isField": 1,
          "type": {
            "tName": "Var<Option<FsRoot.Library+SnippetId>>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "generation",
          "isField": 1,
          "type": {
            "tName": "Var<DateTime>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "hierarchy",
          "isField": 1,
          "type": {
            "tName": "Var<FsRoot.Library+TreeReader+Node<FsRoot.Library+SnippetId, FsRoot.Library+SnippetCollection, string>[]>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "snippets",
          "isField": 1,
          "type": {
            "tName": "ListModel<FsRoot.Library+SnippetId, FsRoot.Library+Snippet>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.FSharpStation+DragDrop+DragInfo",
      "methods": [
        {
          "meName": "_unique_DragNone",
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
      "moName": "FsRoot.FSharpStation+DragDrop",
      "methods": [
        {
          "meName": "getDragNIdO",
          "isField": 0,
          "type": {
            "tName": "Option<FsRoot.Library+SnippetId>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "setDragNode",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "setDragNone",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "drag",
          "isField": 1,
          "type": {
            "tName": "DragInfo",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "set_drag",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "DragInfo",
              "asm": "FSharpStation"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.FSharpStation+Templating",
      "methods": [
        {
          "meName": "TemplatesFileName",
          "isField": 1,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "rootdir",
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
      "moName": "FsRoot.FSharpStation+RenderSnippets",
      "methods": [
        {
          "meName": "render",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "snippets$8781$40",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "snippets$8780$40",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "snippets$8779$40",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "snippets$8778$40",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "snippets$8777$40",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "snippets$8776$40",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "snippets$8775$40",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "snippets",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "scrollIntoView",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "View<bool>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.FSharpStation+RenderProperties",
      "methods": [
        {
          "meName": "render$8820$34",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "render",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "properties$8813$33",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "properties",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "remProperty",
          "isField": 0,
          "type": {
            "tName": "unit",
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
          "meName": "addProperty",
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
      "moName": "FsRoot.FSharpStation+Markdown",
      "methods": []
    },
    {
      "moName": "FsRoot.FSharpStation+Monaco+HoverProvider",
      "methods": []
    },
    {
      "moName": "FsRoot.FSharpStation+Monaco+CompletionItemProvider",
      "methods": []
    },
    {
      "moName": "FsRoot.FSharpStation+Monaco+DefinitionProvider",
      "methods": []
    },
    {
      "moName": "FsRoot.FSharpStation+Monaco+MonacoOptions",
      "methods": []
    },
    {
      "moName": "FsRoot.FSharpStation+Monaco+ITextModelService",
      "methods": []
    },
    {
      "moName": "FsRoot.FSharpStation+Monaco",
      "methods": [
        {
          "meName": "getSelection",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "goto",
          "isField": 0,
          "type": {
            "tName": "Async<unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
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
          "meName": "editorDoc",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "editorConfigO",
          "isField": 1,
          "type": {
            "tName": "Option<FsRoot.LibraryJS+Monaco+MonacoConfig>",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "set_editorConfigO",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Option<FsRoot.LibraryJS+Monaco+MonacoConfig>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "parse",
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
              "tName": "((FsRoot.Library+SnippetId * string) * (int * int * int))[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "monacoNew",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.LibraryJS+Monaco+MonacoConfig>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Option<View<FsRoot.LibraryJS+Monaco+MarkerData[]>>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<(string -> (int -> (int -> unit)))>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<(((string * string * string)[] -> ((int * int) -> ((int * int) -> unit))) -> (string -> (int -> (int -> unit))))>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "textModelResolverService",
          "isField": 0,
          "type": {
            "tName": "ITextModelService",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "openCodeEditor",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Promise<FsRoot.LibraryJS+Monaco+Editor>",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.LibraryJS+Monaco+Editor",
              "asm": "FSharpStation"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "gotoEditor",
          "isField": 0,
          "type": {
            "tName": "Async<unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+Monaco+Editor",
              "asm": "FSharpStation"
            },
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
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
          "meName": "transformAnnotations",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+Monaco+MarkerData[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "convertGlyphChar",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+Monaco+CompletionItemKind",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "fileName",
          "isField": 1,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "set_fileName",
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
          "meName": "overDescriptions",
          "isField": 0,
          "type": {
            "tName": "Async<IEnumerable<string>>",
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
          "meName": "fixMarkDown",
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
          "meName": "getSnippetModel",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+Monaco+Model",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+SnippetId",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "getModelUri",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+Monaco+Model",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.LibraryJS+Monaco+Uri",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "getSnipIdIndentAndFirst",
          "isField": 0,
          "type": {
            "tName": "(FsRoot.Library+SnippetId * int * int)",
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
          "meName": "getIndentAndFirst",
          "isField": 0,
          "type": {
            "tName": "(int * int)",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "defaultStart",
          "isField": 1,
          "type": {
            "tName": "(Option<((FsRoot.Library+SnippetId * string) * (int * int * int))> -> ((FsRoot.Library+SnippetId * string) * (int * int * int)))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "startsV",
          "isField": 1,
          "type": {
            "tName": "Var<((FsRoot.Library+SnippetId * string) * (int * int * int))[]>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.FSharpStation+JumpTo",
      "methods": [
        {
          "meName": "jumpToRef",
          "isField": 0,
          "type": {
            "tName": "unit",
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
          "meName": "jumpToLine",
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
          "meName": "rexGuid",
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
      "moName": "FsRoot.FSharpStation+CustomAction",
      "methods": [
        {
          "meName": "setScrollToBottom",
          "isField": 1,
          "type": {
            "tName": "(WebSharper.JavaScript.Dom.Element -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "scrollToBottom",
          "isField": 0,
          "type": {
            "tName": "unit",
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
          "meName": "setCurrentProperty",
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
          "meName": "getCurrentProperty",
          "isField": 0,
          "type": {
            "tName": "Async<Result<string, FsRoot.Library+ResultMessage<'a>>>",
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
          "meName": "buttonClick",
          "isField": 0,
          "type": {
            "tName": "unit",
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
          "meName": "actionClick",
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
          "meName": "actionSnp",
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
          "meName": "actionSnpRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<Result<(string * FsRoot.Library+ResultMessage<FsRoot.LibraryNoJS+RunProcess+ShellResponse>), FsRoot.Library+ResultMessage<FsRoot.LibraryNoJS+RunProcess+ShellResponse>>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
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
          "meName": "setSnippetContent",
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
          "meName": "actionClickRm",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<Result<(string * FsRoot.Library+ResultMessage<FsRoot.LibraryNoJS+RunProcess+ShellResponse>), FsRoot.Library+ResultMessage<FsRoot.LibraryNoJS+RunProcess+ShellResponse>>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "fetchValue",
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
          "meName": "getCode",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<string, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "codeModule",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<string, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getBaseSnippet",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<FsRoot.Library+Snippet, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "translateString",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(string -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "propO",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<Option<string>, FsRoot.Library+SnippetCollection, 'a>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "FsRoot.Library+Snippet",
              "asm": "FSharpStation"
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
      "moName": "FsRoot.FSharpStation+Serializer+Model",
      "methods": []
    },
    {
      "moName": "FsRoot.FSharpStation+Serializer",
      "methods": [
        {
          "meName": "serModel",
          "isField": 1,
          "type": {
            "tName": "((Model -> string) * (Object -> Model))",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "getModel",
          "isField": 0,
          "type": {
            "tName": "Model",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "IEnumerable<FsRoot.Library+Snippet>",
              "asm": "netstandard"
            },
            {
              "tName": "DateTime",
              "asm": "netstandard"
            },
            {
              "tName": "Set<FsRoot.Library+SnippetId>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "serSnippet",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.Library+Snippet -> string) * (Object -> FsRoot.Library+Snippet))",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "serSnippetId",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.Library+SnippetId -> string) * (Object -> FsRoot.Library+SnippetId))",
            "asm": "netstandard"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.FSharpStation+LoadSave",
      "methods": [
        {
          "meName": "saveAs",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "loadTextFile",
          "isField": 0,
          "type": {
            "tName": "unit",
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
          "meName": "parseText",
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
          "meName": "canLoad",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "fileName",
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
      "moName": "FsRoot.FSharpStation+Importer",
      "methods": [
        {
          "meName": "importFile",
          "isField": 0,
          "type": {
            "tName": "unit",
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
          "meName": "parseText",
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
          "meName": "serSnippets",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.Library+Snippet[] -> string) * (Object -> FsRoot.Library+Snippet[]))",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "serSnippet2",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.Library+Snippet -> string) * (Object -> FsRoot.Library+Snippet))",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "serSnippetId2",
          "isField": 1,
          "type": {
            "tName": "((FsRoot.Library+SnippetId -> string) * (Object -> FsRoot.Library+SnippetId))",
            "asm": "netstandard"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.FSharpStation+MainProgram+EndPoint",
      "methods": [
        {
          "meName": "_unique_NoSnippet",
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
      "moName": "FsRoot.FSharpStation+MainProgram",
      "methods": [
        {
          "meName": "mainProgram",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "contentV",
          "isField": 1,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "snippetNameV",
          "isField": 1,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "mainDoc$9584$78",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(Templating.Runtime.Server+TemplateEvent<Vars, WebSharper.JavaScript.Dom.MouseEvent> -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "mainDoc$9575$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "mainDoc$9574$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "mainDoc$9573$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "mainDoc$9572$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "mainDoc$9571$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
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
          "meName": "buttonsRight$9557$74",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(Templating.Runtime.Server+TemplateEvent<Vars, WebSharper.JavaScript.Dom.MouseEvent> -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "buttonsRight$9556$74",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(Templating.Runtime.Server+TemplateEvent<Vars, WebSharper.JavaScript.Dom.MouseEvent> -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "buttonsRight$9555$74",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(Templating.Runtime.Server+TemplateEvent<Vars, WebSharper.JavaScript.Dom.MouseEvent> -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "buttonsRight$9554$74",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(Templating.Runtime.Server+TemplateEvent<Vars, WebSharper.JavaScript.Dom.MouseEvent> -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "buttonsRight$9553$74",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(Templating.Runtime.Server+TemplateEvent<Vars, WebSharper.JavaScript.Dom.MouseEvent> -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "buttonsRight",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "hookDoc",
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
            },
            {
              "tName": "('a -> (Doc -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "hookAct",
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
            },
            {
              "tName": "('a -> (('b -> unit) -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "hookViw",
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
            },
            {
              "tName": "('a -> (View<string> -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "hookVar",
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
            },
            {
              "tName": "('a -> (Var<string> -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "FStationLyt",
          "isField": 1,
          "type": {
            "tName": "FsRoot.LibraryJS+AppFramework+PlugInName",
            "asm": "FSharpStation"
          },
          "parms": []
        },
        {
          "meName": "deleteSnippet",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "selectionToFsi",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "runFsCode",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "endPointV",
          "isField": 1,
          "type": {
            "tName": "Var<EndPoint>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.FSharpStation+Messaging",
      "methods": [
        {
          "meName": "processMessage",
          "isField": 0,
          "type": {
            "tName": "Async<Result<FsRoot.Library2+FSResponse, FsRoot.Library+ResultMessage<string>>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.Library2+FSMessage",
              "asm": "FSharpStation"
            }
          ]
        },
        {
          "meName": "setValue",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<FsRoot.Library2+FSResponse, 'a, 'b>",
            "asm": "FSharpStation"
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
          "meName": "getValue",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<FsRoot.Library2+FSResponse, 'a, 'b>",
            "asm": "FSharpStation"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "actionCall",
          "isField": 0,
          "type": {
            "tName": "FsRoot.Library+Monads+FusionAsyncM<FsRoot.Library2+FSResponse, 'c, 'd>",
            "asm": "FSharpStation"
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
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "wsStationClient",
          "isField": 1,
          "type": {
            "tName": "FsRoot.Library2+WebSockets+WSMessagingClient",
            "asm": "FSharpStation"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.FSharpStation+Server",
      "methods": [
        {
          "meName": "content$9852$54",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.FSharpStation",
      "methods": []
    },
    {
      "moName": "StartupCode$FSharpStation$FSharpStation",
      "methods": []
    },
    {
      "moName": "Generated$FSharpStation",
      "methods": [
        {
          "meName": "FSharpStation_JsonDecoder._v$4",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder.j$4",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder.j$6",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder.j$7",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder.j$8",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.appfwkclient",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.fixedsplitterhor",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Router.r",
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
        },
        {
          "meName": "FSharpStation_JsonDecoder._v$6",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder.j$5",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder.j$6",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder._v$5",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder.j$4",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$1",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder._v$4",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder.j$5",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder._v$5",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.fixedsplitterver",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder._v$8",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder._v$7",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder._v$6",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.wcompsplitterver",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.wcompsplitterhor",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.appframework",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.tile",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.action",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.namevalue",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.namevalueinput",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$3",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$27",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$26",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$25",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$24",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$23",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$22",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$21",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$4",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$1",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$20",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$18",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$19",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$16",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$17",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$15",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$14",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$8",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$10",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$11",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$13",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$12",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$9",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$5",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$7",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$6",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$29",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$28",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.snippetlist",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.snippet",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.propertytable",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.property",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.layout",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.fixedsplitterver$1",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.fixedsplitterhor$1",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_Templates.buttonsright",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$30",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$32",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$31",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder.j$9",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder._v$9",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$33",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder.j$7",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder._v$7",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder.j$8",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder._v$8",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$36",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$35",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$3",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$34",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$37",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$38",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_GeneratedPrintf.p$39",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$25",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$24",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$23",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$21",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$19",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$22",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$20",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$17",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$16",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$18",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$15",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$13",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$14",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$10",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$11",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$12",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$8",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$9",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$7",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$5",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$6",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "GeneratedPrintf.p$4",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder._v",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder._v$1",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder.j$1",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder._v$2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder.j$2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder._v$3",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder.j$3",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonEncoder.j",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder._v",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder._v$1",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder.j$1",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder._v$2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder.j$2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder._v$3",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder.j$3",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "FSharpStation_JsonDecoder.j",
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
    }
  ]
}
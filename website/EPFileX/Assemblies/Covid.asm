{
  "asName": "Covid",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm",
    "WebSharper.Web.asm",
    "WebSharper.Sitelets.asm",
    "WebSharper.Control.asm",
    "WebSharper.UI.asm",
    "WebSharper.UI.Templating.Runtime.asm",
    "WebSharper.Data.asm",
    "testing.asm"
  ],
  "resources": [],
  "modules": [
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
      "moName": "FsRoot.Library+Monads",
      "methods": []
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
      "moName": "FsRoot.TestingJS+Covid+State",
      "methods": []
    },
    {
      "moName": "FsRoot.TestingJS+Covid+people",
      "methods": []
    },
    {
      "moName": "FsRoot.TestingJS+Covid+Function",
      "methods": []
    },
    {
      "moName": "FsRoot.TestingJS+Covid",
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
          "meName": "dataTable",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "valuesRow",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "DateTime",
              "asm": "netstandard"
            },
            {
              "tName": "(State * Option<int>)[]",
              "asm": "netstandard"
            },
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "valueCell",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "thousandsO",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Option<int>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "columns",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "statesBar",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "dataSel",
          "isField": 1,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "title",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "statesList",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "statesInput",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "reorderButton",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "bootstrap",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "alignRight",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "reorderStates",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "rowsW",
          "isField": 1,
          "type": {
            "tName": "View<IEnumerable<(DateTime * (State * Option<int>)[] * Option<int>)>>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "functionV",
          "isField": 1,
          "type": {
            "tName": "Var<Function>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "funcs",
          "isField": 1,
          "type": {
            "tName": "List<Function>",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "fname",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Function",
              "asm": "testing"
            }
          ]
        },
        {
          "meName": "yearly",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Map<DateTime, int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "DateTime",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "monthly",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Map<DateTime, int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "DateTime",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "weekly",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Map<DateTime, int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "DateTime",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "daily",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Map<DateTime, int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "DateTime",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "deathsSince",
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
              "tName": "Map<DateTime, int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "DateTime",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getPrior",
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
              "tName": "Map<DateTime, int>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "DateTime",
              "asm": "netstandard"
            }
          ]
        },
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
          "meName": "columnsW",
          "isField": 1,
          "type": {
            "tName": "View<IEnumerable<string>>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "totalizeW",
          "isField": 1,
          "type": {
            "tName": "View<bool>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "statesW",
          "isField": 1,
          "type": {
            "tName": "View<State[]>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "delayedV",
          "isField": 1,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "statesV",
          "isField": 1,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "toggleSt",
          "isField": 1,
          "type": {
            "tName": "Var<Option<(string * State)>>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "ahora",
          "isField": 1,
          "type": {
            "tName": "DateTime",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "printDeaths",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "State",
              "asm": "testing"
            }
          ]
        },
        {
          "meName": "deaths",
          "isField": 0,
          "type": {
            "tName": "Async<(State * Map<DateTime, int>)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "State",
              "asm": "testing"
            }
          ]
        },
        {
          "meName": "deathsA",
          "isField": 0,
          "type": {
            "tName": "Async<Map<DateTime, int>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "State",
              "asm": "testing"
            }
          ]
        },
        {
          "meName": "getStateDaily",
          "isField": 0,
          "type": {
            "tName": "Async<Root[]>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "State",
              "asm": "testing"
            }
          ]
        },
        {
          "meName": "CovidStatesDailyUrl",
          "isField": 1,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "CovidStatesCurrentUrl",
          "isField": 1,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "getStatesPop",
          "isField": 1,
          "type": {
            "tName": "(Set<State> -> int)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "getStatesPopM",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Set<State>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "getStatePop",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "State",
              "asm": "testing"
            }
          ]
        },
        {
          "meName": "splitStates",
          "isField": 0,
          "type": {
            "tName": "State[]",
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
          "meName": "statesCodes",
          "isField": 1,
          "type": {
            "tName": "List<(string * State)>",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "statesPop2019",
          "isField": 1,
          "type": {
            "tName": "Map<State, int>",
            "asm": "FSharp.Core"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.TestingJS",
      "methods": []
    },
    {
      "moName": "StartupCode$testing$testing",
      "methods": []
    }
  ],
  "jsModules": [
    {
      "jsName": "WebSharper.js",
      "code": "(function()\r\n{\r\n \"use strict\";\r\n var Global,FsRoot,Library,Monads,Seq,Async,String,ParseO,TestingJS,Covid,State,Function,SC$1,WebSharper,Seq$1,Concurrency,Arrays,List,Strings,Slice,Operators,Char,Unchecked,UI,Var$1,View,CancellationTokenSource,Utils,console,IntelliFactory,Runtime,Doc,AttrModule,Client,Templates,AttrProxy,Collections,Map,FSharpMap,Data,TxtRuntime,FSharp,Data$1,Runtime$1,IO,JSON,FSharpSet,BalancedTree,Set,DateUtil,Numeric,System,Guid,Dictionary,Date;\r\n Global=self;\r\n FsRoot=Global.FsRoot=Global.FsRoot||{};\r\n Library=FsRoot.Library=FsRoot.Library||{};\r\n Monads=Library.Monads=Library.Monads||{};\r\n Seq=Monads.Seq=Monads.Seq||{};\r\n Async=Monads.Async=Monads.Async||{};\r\n String=Library.String=Library.String||{};\r\n ParseO=Library.ParseO=Library.ParseO||{};\r\n TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};\r\n Covid=TestingJS.Covid=TestingJS.Covid||{};\r\n State=Covid.State=Covid.State||{};\r\n Function=Covid.Function=Covid.Function||{};\r\n SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};\r\n WebSharper=Global.WebSharper;\r\n Seq$1=WebSharper&&WebSharper.Seq;\r\n Concurrency=WebSharper&&WebSharper.Concurrency;\r\n Arrays=WebSharper&&WebSharper.Arrays;\r\n List=WebSharper&&WebSharper.List;\r\n Strings=WebSharper&&WebSharper.Strings;\r\n Slice=WebSharper&&WebSharper.Slice;\r\n Operators=WebSharper&&WebSharper.Operators;\r\n Char=WebSharper&&WebSharper.Char;\r\n Unchecked=WebSharper&&WebSharper.Unchecked;\r\n UI=WebSharper&&WebSharper.UI;\r\n Var$1=UI&&UI.Var$1;\r\n View=UI&&UI.View;\r\n CancellationTokenSource=WebSharper&&WebSharper.CancellationTokenSource;\r\n Utils=WebSharper&&WebSharper.Utils;\r\n console=Global.console;\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime=IntelliFactory&&IntelliFactory.Runtime;\r\n Doc=UI&&UI.Doc;\r\n AttrModule=UI&&UI.AttrModule;\r\n Client=UI&&UI.Client;\r\n Templates=Client&&Client.Templates;\r\n AttrProxy=UI&&UI.AttrProxy;\r\n Collections=WebSharper&&WebSharper.Collections;\r\n Map=Collections&&Collections.Map;\r\n FSharpMap=Collections&&Collections.FSharpMap;\r\n Data=WebSharper&&WebSharper.Data;\r\n TxtRuntime=Data&&Data.TxtRuntime;\r\n FSharp=Global.FSharp;\r\n Data$1=FSharp&&FSharp.Data;\r\n Runtime$1=Data$1&&Data$1.Runtime;\r\n IO=Runtime$1&&Runtime$1.IO;\r\n JSON=Global.JSON;\r\n FSharpSet=Collections&&Collections.FSharpSet;\r\n BalancedTree=Collections&&Collections.BalancedTree;\r\n Set=Collections&&Collections.Set;\r\n DateUtil=WebSharper&&WebSharper.DateUtil;\r\n Numeric=WebSharper&&WebSharper.Numeric;\r\n System=Global.System;\r\n Guid=System&&System.Guid;\r\n Dictionary=Collections&&Collections.Dictionary;\r\n Date=Global.Date;\r\n Seq.ofOption=function(vO)\r\n {\r\n  return vO==null?[]:[vO.$0];\r\n };\r\n Seq.absorbR=function(vOS)\r\n {\r\n  return Seq$1.choose(function(a)\r\n  {\r\n   return a.$==0?{\r\n    $:1,\r\n    $0:a.$0\r\n   }:null;\r\n  },vOS);\r\n };\r\n Seq.absorbO=function(vOS)\r\n {\r\n  return Seq$1.choose(Global.id,vOS);\r\n };\r\n Seq.insertR=function(vSR)\r\n {\r\n  return vSR.$==0?Seq$1.map(function(a)\r\n  {\r\n   return{\r\n    $:0,\r\n    $0:a\r\n   };\r\n  },vSR.$0):(Seq.rtn())(Library.Error(vSR.$0));\r\n };\r\n Seq.insertO=function(vSO)\r\n {\r\n  var o;\r\n  o=vSO==null?null:{\r\n   $:1,\r\n   $0:Seq$1.map(function(a)\r\n   {\r\n    return{\r\n     $:1,\r\n     $0:a\r\n    };\r\n   },vSO.$0)\r\n  };\r\n  return o==null?(Seq.rtn())(null):o.$0;\r\n };\r\n Seq.rtn=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rtn;\r\n };\r\n Async.insertR=function(vAR)\r\n {\r\n  function f(a)\r\n  {\r\n   return{\r\n    $:0,\r\n    $0:a\r\n   };\r\n  }\r\n  function g(v)\r\n  {\r\n   return Concurrency.Return(v);\r\n  }\r\n  return vAR.$==0?Concurrency.Bind(vAR.$0,function(x)\r\n  {\r\n   return g(f(x));\r\n  }):Concurrency.Return(Library.Error(vAR.$0));\r\n };\r\n Async.insertO=function(vAO)\r\n {\r\n  var o;\r\n  function f(a)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:a\r\n   };\r\n  }\r\n  function g(v)\r\n  {\r\n   return Concurrency.Return(v);\r\n  }\r\n  o=vAO==null?null:{\r\n   $:1,\r\n   $0:Concurrency.Bind(vAO.$0,function(x)\r\n   {\r\n    return g(f(x));\r\n   })\r\n  };\r\n  return o==null?Concurrency.Return(null):o.$0;\r\n };\r\n Async.sequenceSeqS=function(sq)\r\n {\r\n  throw\"traverseSeqS cannot be used in JavaScript!\";\r\n };\r\n Async.sequenceSeq=function(sq)\r\n {\r\n  return Async.traverseSeq(Global.id,sq);\r\n };\r\n Async.traverseSeq=function(f,sq)\r\n {\r\n  function g(v)\r\n  {\r\n   return Concurrency.Return(v);\r\n  }\r\n  return Concurrency.Bind(Arrays.foldBack(function(head,tail)\r\n  {\r\n   return Async.op_GreaterGreaterEquals(f(head),function(h)\r\n   {\r\n    return Async.op_GreaterGreaterEquals(tail,function(t)\r\n    {\r\n     return Concurrency.Return(new List.T({\r\n      $:1,\r\n      $0:h,\r\n      $1:t\r\n     }));\r\n    });\r\n   });\r\n  },Arrays.ofSeq(sq),Concurrency.Return(List.T.Empty)),function(x)\r\n  {\r\n   return g(Global.id(x));\r\n  });\r\n };\r\n Async.op_GreaterGreaterEquals=function(v,f)\r\n {\r\n  return Concurrency.Bind(v,f);\r\n };\r\n Async.sleepThen=function(f,milliseconds)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(Concurrency.Sleep(milliseconds),function()\r\n   {\r\n    return Concurrency.Return(f());\r\n   });\r\n  });\r\n };\r\n Async.apply=function(fA,vA)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(Concurrency.StartChild(fA,null),function(a)\r\n   {\r\n    return Concurrency.Bind(Concurrency.StartChild(vA,null),function(a$1)\r\n    {\r\n     return Concurrency.Bind(a,function(a$2)\r\n     {\r\n      return Concurrency.Bind(a$1,function(a$3)\r\n      {\r\n       return Concurrency.Return(a$2(a$3));\r\n      });\r\n     });\r\n    });\r\n   });\r\n  });\r\n };\r\n String.thousands=function(n)\r\n {\r\n  var v,c,r,s;\r\n  v=(c=n<0?-n:n,Global.String(c));\r\n  r=v.length%3;\r\n  s=r===0?3:r;\r\n  return n<0?\"-\"+Strings.concat(\",\",List.ofSeq(Seq$1.delay(function()\r\n  {\r\n   return Seq$1.append([Slice.string(v,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:s-1\r\n   })],Seq$1.delay(function()\r\n   {\r\n    return Seq$1.map(function(i)\r\n    {\r\n     return Slice.string(v,{\r\n      $:1,\r\n      $0:i*3+s\r\n     },{\r\n      $:1,\r\n      $0:i*3+s+2\r\n     });\r\n    },Operators.range(0,((v.length-s)/3>>0)-1));\r\n   }));\r\n  }))):Strings.concat(\",\",List.ofSeq(Seq$1.delay(function()\r\n  {\r\n   return Seq$1.append([Slice.string(v,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:s-1\r\n   })],Seq$1.delay(function()\r\n   {\r\n    return Seq$1.map(function(i)\r\n    {\r\n     return Slice.string(v,{\r\n      $:1,\r\n      $0:i*3+s\r\n     },{\r\n      $:1,\r\n      $0:i*3+s+2\r\n     });\r\n    },Operators.range(0,((v.length-s)/3>>0)-1));\r\n   }));\r\n  })));\r\n };\r\n String.WhiteSpace=function(s)\r\n {\r\n  function g(v)\r\n  {\r\n   return!v;\r\n  }\r\n  return Seq$1.exists(function(x)\r\n  {\r\n   return g(Char.IsWhiteSpace(x));\r\n  },s)?null:{\r\n   $:1,\r\n   $0:null\r\n  };\r\n };\r\n String.EndsWith=function(ends,s)\r\n {\r\n  return Strings.EndsWith(s,ends)?{\r\n   $:1,\r\n   $0:Slice.string(s,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:s.length-ends.length-1\r\n   })\r\n  }:null;\r\n };\r\n String.StartsWith=function(start,s)\r\n {\r\n  return Strings.StartsWith(s,start)?{\r\n   $:1,\r\n   $0:Slice.string(s,{\r\n    $:1,\r\n    $0:start.length\r\n   },null)\r\n  }:null;\r\n };\r\n String.skipLastLine=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.skipLastLine;\r\n };\r\n String.indentStr=function(i)\r\n {\r\n  function f(s)\r\n  {\r\n   return String.indent(i,s);\r\n  }\r\n  function g(s)\r\n  {\r\n   return Strings.concat(\"\\n\",s);\r\n  }\r\n  return function(x)\r\n  {\r\n   return g(f(x));\r\n  };\r\n };\r\n String.unindentStr=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.unindentStr;\r\n };\r\n String.indent=function(n,s)\r\n {\r\n  var x,x$1;\r\n  x=Strings.SplitChars(s,[\"\\n\"],0);\r\n  return Seq$1.map((x$1=Strings.replicate(n,\" \"),function(y)\r\n  {\r\n   return x$1+y;\r\n  }),x);\r\n };\r\n String.unindent=function(s)\r\n {\r\n  var lines,n,o,o$1;\r\n  lines=Strings.SplitChars(s,[\"\\n\"],0);\r\n  n=(o=Seq$1.tryFindIndex(function(y)\r\n  {\r\n   return\" \"!==y;\r\n  },(o$1=Seq$1.tryFind(function(l)\r\n  {\r\n   return Strings.Trim(l)!==\"\";\r\n  },lines),o$1==null?\"\":o$1.$0)),o==null?0:o.$0);\r\n  return Seq$1.filter(function(s$1)\r\n  {\r\n   return!Strings.StartsWith(s$1,\"# 1 \");\r\n  },Seq$1.map(function(l)\r\n  {\r\n   return l.length<=n?\"\":l.substring(n);\r\n  },lines));\r\n };\r\n String.skipFirstLine=function(txt)\r\n {\r\n  var i;\r\n  i=txt.indexOf(\"\\n\");\r\n  return i<0?\"\":Slice.string(txt,{\r\n   $:1,\r\n   $0:i+1\r\n  },null);\r\n };\r\n String.append=function(a,b)\r\n {\r\n  return a+b;\r\n };\r\n String.right=function(n,s)\r\n {\r\n  return Library[\"String.Right\"](s,n);\r\n };\r\n String.left=function(n,s)\r\n {\r\n  return Library[\"String.Left\"](s,n);\r\n };\r\n String.trim=function(s)\r\n {\r\n  return Strings.Trim(s);\r\n };\r\n String.contains=function(sub,whole)\r\n {\r\n  return whole.indexOf(sub)!=-1;\r\n };\r\n String.delimitedO=function(op,cl,txt)\r\n {\r\n  var o,$1,bef,o$1,$2;\r\n  o=String.splitInTwoO(op,txt);\r\n  return o==null?null:($1=o.$0,(bef=$1[0],(o$1=String.splitInTwoO(cl,$1[1]),o$1==null?null:{\r\n   $:1,\r\n   $0:($2=o$1.$0,[bef,$2[0],$2[1]])\r\n  })));\r\n };\r\n String.splitInTwoO=function(spl,txt)\r\n {\r\n  var i;\r\n  i=txt.indexOf(spl);\r\n  return i===-1?null:{\r\n   $:1,\r\n   $0:[Library[\"String.Left\"](txt,i),txt.substring(i+spl.length)]\r\n  };\r\n };\r\n String.splitByChar=function(c,s)\r\n {\r\n  return Strings.SplitChars(s,[c],0);\r\n };\r\n ParseO.Guid=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Guid|_|\"];\r\n };\r\n ParseO.Double=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Double|_|\"];\r\n };\r\n ParseO.Single=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Single|_|\"];\r\n };\r\n ParseO.Int64=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Int64|_|\"];\r\n };\r\n ParseO.Int=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Int|_|\"];\r\n };\r\n ParseO.Date=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Date|_|\"];\r\n };\r\n ParseO.parseGuidO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseGuidO;\r\n };\r\n ParseO.parseDoubleO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseDoubleO;\r\n };\r\n ParseO.parseSingleO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseSingleO;\r\n };\r\n ParseO.parseInt64O=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseInt64O;\r\n };\r\n ParseO.parseIntO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseIntO;\r\n };\r\n ParseO.parseDateO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseDateO;\r\n };\r\n ParseO.parseDateO2=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseDateO2;\r\n };\r\n ParseO.tryParseWith=function(tryParseFunc)\r\n {\r\n  function g($1,$2)\r\n  {\r\n   return $1?{\r\n    $:1,\r\n    $0:$2\r\n   }:null;\r\n  }\r\n  return function(x)\r\n  {\r\n   return g.apply(null,tryParseFunc(x));\r\n  };\r\n };\r\n Library[\"String.Right\"]=function(_this,n)\r\n {\r\n  var a,b;\r\n  return Library[\"String.Substring2\"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);\r\n };\r\n Library[\"String.Left\"]=function(_this,n)\r\n {\r\n  return n<0?Library[\"String.Substring2\"](_this,0,_this.length+n):Library[\"String.Substring2\"](_this,0,n);\r\n };\r\n Library[\"String.Substring2\"]=function(_this,from,n)\r\n {\r\n  var from$1,b;\r\n  while(true)\r\n   {\r\n    if(n<=0)\r\n     return\"\";\r\n    else\r\n     if(from>=_this.length)\r\n      return\"\";\r\n     else\r\n      if(from<0)\r\n       {\r\n        from$1=from;\r\n        from=0;\r\n        n=n+from$1;\r\n       }\r\n      else\r\n       return Strings.Substring(_this,from,(b=_this.length-from,Unchecked.Compare(n,b)===-1?n:b));\r\n   }\r\n };\r\n Library.delayedVar=function(delay,_var)\r\n {\r\n  var delayedV,x;\r\n  delayedV=Var$1.Create$1(_var.Get());\r\n  x=_var.get_View();\r\n  View.Sink(Library.delayed(delay,function(a)\r\n  {\r\n   delayedV.Set(a);\r\n  }),x);\r\n  return delayedV;\r\n };\r\n Library.delayed=function(delay,doF)\r\n {\r\n  function g()\r\n  {\r\n   return Concurrency.Return(null);\r\n  }\r\n  return Library.delayedA(delay,function(x)\r\n  {\r\n   return g(doF(x));\r\n  });\r\n };\r\n Library.delayedA=function(delay,doF)\r\n {\r\n  var cancelTokenO;\r\n  cancelTokenO=null;\r\n  return function(parm)\r\n  {\r\n   var b;\r\n   cancelTokenO==null?void 0:cancelTokenO.$0.Cancel$1();\r\n   cancelTokenO={\r\n    $:1,\r\n    $0:new CancellationTokenSource.New()\r\n   };\r\n   Concurrency.Start((b=null,Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.Bind(Concurrency.Sleep(delay),function()\r\n    {\r\n     return Concurrency.Bind(doF(parm),function()\r\n     {\r\n      return Concurrency.Return(null);\r\n     });\r\n    });\r\n   })),{\r\n    $:1,\r\n    $0:cancelTokenO.$0\r\n   });\r\n  };\r\n };\r\n Library.print=function(v)\r\n {\r\n  if(typeof v==\"string\")\r\n   ((function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(Utils.toSafe($2));\r\n    };\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }))(v));\r\n  else\r\n   ((function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(Utils.prettyPrint($2));\r\n    };\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }))(v));\r\n };\r\n Library.Error=function(a)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:a\r\n  };\r\n };\r\n State=Covid.State=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,State);\r\n Function=Covid.Function=Runtime.Class({\r\n  Equals:function(b)\r\n  {\r\n   return b instanceof Function&&this.get_Id()===b.get_Id();\r\n  },\r\n  GetHashCode:function()\r\n  {\r\n   return Unchecked.Hash(this.get_Id());\r\n  },\r\n  get_F:function()\r\n  {\r\n   return this.$1;\r\n  },\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,Function);\r\n Covid.main=function()\r\n {\r\n  var x,a;\r\n  x=Doc.Element(\"div\",[AttrModule.Class(\"xcontainer\")],[Covid.title(),Covid.statesBar(),Doc.Element(\"div\",[],[Doc.TextNode(\"Data: \"),Covid.dataSel()]),Covid.dataTable(),Covid.bootstrap()]);\r\n  a=self.document.body;\r\n  Templates.LoadLocalTemplates(\"\");\r\n  Doc.Run(a,x);\r\n };\r\n Covid.dataTable=function()\r\n {\r\n  return Doc.Element(\"table\",[AttrModule.Class(\"table table-sm\")],[Doc.Element(\"tr\",[],[Doc.Element(\"th\",[],[Doc.TextNode(\"Date\")]),Covid.columns()]),Doc.Convert(function($1)\r\n  {\r\n   return Covid.valuesRow($1[0],$1[1],$1[2]);\r\n  },Covid.rowsW())]);\r\n };\r\n Covid.valuesRow=function(date,values,totalO)\r\n {\r\n  return Doc.Element(\"tr\",[],List.ofSeq(Seq$1.delay(function()\r\n  {\r\n   return Seq$1.append([Doc.Element(\"th\",[],[Doc.TextNode((new Global.Date(date)).toLocaleDateString())])],Seq$1.delay(function()\r\n   {\r\n    function f(t)\r\n    {\r\n     return t[1];\r\n    }\r\n    return Seq$1.append(Seq$1.map(function(x)\r\n    {\r\n     return Covid.valueCell(f(x));\r\n    },values),Seq$1.delay(function()\r\n    {\r\n     return totalO==null?[]:[Doc.Element(\"th\",[Covid.alignRight()],[Doc.TextNode(Covid.thousands(totalO.$0))])];\r\n    }));\r\n   }));\r\n  })));\r\n };\r\n Covid.valueCell=function(v)\r\n {\r\n  return Doc.Element(\"td\",[Covid.alignRight()],[Doc.TextNode(Covid.thousandsO(v))]);\r\n };\r\n Covid.thousandsO=function(v)\r\n {\r\n  var o;\r\n  o=v==null?null:{\r\n   $:1,\r\n   $0:Covid.thousands(v.$0)\r\n  };\r\n  return o==null?\"\":o.$0;\r\n };\r\n Covid.columns=function()\r\n {\r\n  return Doc.Convert(function(col)\r\n  {\r\n   return Doc.Element(\"th\",[Covid.alignRight()],[Doc.TextNode(col)]);\r\n  },Covid.columnsW());\r\n };\r\n Covid.statesBar=function()\r\n {\r\n  return Doc.Element(\"div\",[],[Doc.TextNode(\"States: \"),Covid.statesInput(),Covid.reorderButton(),Covid.statesList()]);\r\n };\r\n Covid.dataSel=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.dataSel;\r\n };\r\n Covid.title=function()\r\n {\r\n  return Doc.Element(\"h1\",[],[Doc.TextNode(\"Covid Statistics\")]);\r\n };\r\n Covid.statesList=function()\r\n {\r\n  return Doc.SelectOptional([],\"Add State\",function(t)\r\n  {\r\n   return t[0];\r\n  },Covid.statesCodes(),Covid.toggleSt());\r\n };\r\n Covid.statesInput=function()\r\n {\r\n  return Doc.Input([AttrProxy.Create(\"style\",\"width: 70%\")],Covid.statesV());\r\n };\r\n Covid.reorderButton=function()\r\n {\r\n  return Doc.Button(\"Reorder\",[],function()\r\n  {\r\n   Covid.reorderStates();\r\n  });\r\n };\r\n Covid.bootstrap=function()\r\n {\r\n  return Doc.Verbatim(\"<link rel=\\\"stylesheet\\\" href=\\\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\\\" integrity=\\\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\\\" crossorigin=\\\"anonymous\\\"> \");\r\n };\r\n Covid.alignRight=function()\r\n {\r\n  return AttrModule.Style(\"text-align\",\"right\");\r\n };\r\n Covid.reorderStates=function()\r\n {\r\n  View.Get(function(days)\r\n  {\r\n   var a;\r\n   function m(st,a$1)\r\n   {\r\n    return st.get_Id();\r\n   }\r\n   a=Strings.concat(\" \",Seq$1.map(function($1)\r\n   {\r\n    return m($1[0],$1[1]);\r\n   },Seq$1.sortByDescending(function(t)\r\n   {\r\n    return t[1];\r\n   },(Seq$1.maxBy(function($1)\r\n   {\r\n    return Global.id($1[0],$1[1],$1[2]);\r\n   },days))[1])));\r\n   Covid.statesV().Set(a);\r\n  },Covid.rowsW());\r\n };\r\n Covid.rowsW=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rowsW;\r\n };\r\n Covid.functionV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.functionV;\r\n };\r\n Covid.funcs=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.funcs;\r\n };\r\n Covid.fname=function(a)\r\n {\r\n  return a.$0;\r\n };\r\n Covid.yearly=function(data,d,v)\r\n {\r\n  return 52*Covid.weekly(data,d,v);\r\n };\r\n Covid.monthly=function(data,d,v)\r\n {\r\n  return Covid.deathsSince(30,data,d,v);\r\n };\r\n Covid.weekly=function(data,d,v)\r\n {\r\n  return Covid.deathsSince(7,data,d,v);\r\n };\r\n Covid.daily=function(data,d,v)\r\n {\r\n  return Covid.deathsSince(1,data,d,v);\r\n };\r\n Covid.deathsSince=function(n,data,d,v)\r\n {\r\n  return v-Covid.getPrior(-n,data,d);\r\n };\r\n Covid.getPrior=function(n,data,d)\r\n {\r\n  var o;\r\n  o=Map.TryFind(d+n*86400000,data);\r\n  return o==null?0:o.$0;\r\n };\r\n Covid.thousands=function(n)\r\n {\r\n  return n<0?\"-\"+function(acc,a)\r\n  {\r\n   var x;\r\n   while(true)\r\n    if(a===\"\")\r\n     return acc;\r\n    else\r\n     {\r\n      x=a;\r\n      acc=Library[\"String.Right\"](x,3)+(acc===\"\"?\"\":\",\"+acc);\r\n      a=Library[\"String.Left\"](x,-3);\r\n     }\r\n  }(\"\",Global.String(n<0?-n:n)):function(acc,a)\r\n  {\r\n   var x;\r\n   while(true)\r\n    if(a===\"\")\r\n     return acc;\r\n    else\r\n     {\r\n      x=a;\r\n      acc=Library[\"String.Right\"](x,3)+(acc===\"\"?\"\":\",\"+acc);\r\n      a=Library[\"String.Left\"](x,-3);\r\n     }\r\n  }(\"\",Global.String(n<0?-n:n));\r\n };\r\n Covid.columnsW=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.columnsW;\r\n };\r\n Covid.totalizeW=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.totalizeW;\r\n };\r\n Covid.statesW=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.statesW;\r\n };\r\n Covid.delayedV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.delayedV;\r\n };\r\n Covid.statesV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.statesV;\r\n };\r\n Covid.toggleSt=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.toggleSt;\r\n };\r\n Covid.ahora=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.ahora;\r\n };\r\n Covid.printDeaths=function(st)\r\n {\r\n  var b;\r\n  Concurrency.Start((b=null,Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(Covid.deathsA(st),function(a)\r\n   {\r\n    Seq$1.iter(function(kvp)\r\n    {\r\n     (((Runtime.Curried3(function($1,$2,$3)\r\n     {\r\n      return $1(Utils.prettyPrint($2)+\" \"+Global.String($3));\r\n     }))(function(s)\r\n     {\r\n      console.log(s);\r\n     }))(kvp.K))(kvp.V);\r\n    },a);\r\n    return Concurrency.Zero();\r\n   });\r\n  })),null);\r\n };\r\n Covid.deaths=function(st)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(Covid.deathsA(st),function(a)\r\n   {\r\n    return Concurrency.Return([st,a]);\r\n   });\r\n  });\r\n };\r\n Covid.deathsA=function(st)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(Covid.getStateDaily(st),function(a)\r\n   {\r\n    return Concurrency.Return(new FSharpMap.New(Seq$1.sort(Arrays.choose(function(d)\r\n    {\r\n     var o,x,prop,v,prop$1,opt,v$1,prop$2,opt$1,v$2,prop$3,opt$2;\r\n     o=(x=(prop=\"death\",prop in d?{\r\n      $:1,\r\n      $0:d[prop]\r\n     }:null),x==null?null:{\r\n      $:1,\r\n      $0:1*x.$0\r\n     });\r\n     return o==null?null:{\r\n      $:1,\r\n      $0:[(new Global.Date((v=(prop$1=\"date\",prop$1 in d?{\r\n       $:1,\r\n       $0:d[prop$1]\r\n      }:null),(opt=v==null?null:{\r\n       $:1,\r\n       $0:1*v.$0\r\n      },opt==null?null:opt.$0))/10000>>0,((v$1=(prop$2=\"date\",prop$2 in d?{\r\n       $:1,\r\n       $0:d[prop$2]\r\n      }:null),(opt$1=v$1==null?null:{\r\n       $:1,\r\n       $0:1*v$1.$0\r\n      },opt$1==null?null:opt$1.$0))/100>>0)%100-1,(v$2=(prop$3=\"date\",prop$3 in d?{\r\n       $:1,\r\n       $0:d[prop$3]\r\n      }:null),(opt$2=v$2==null?null:{\r\n       $:1,\r\n       $0:1*v$2.$0\r\n      },opt$2==null?null:opt$2.$0))%100)).getTime(),o.$0*1]\r\n     };\r\n    },a))));\r\n   });\r\n  });\r\n };\r\n Covid.getStateDaily=function(a)\r\n {\r\n  var st;\r\n  st=a.$0;\r\n  return TxtRuntime.AsyncMap(IO.asyncReadTextAtRuntime(false,\"D:\\\\Abe\\\\CIPHERWorkspace\\\\FSharpStation\\\\src\",\"\",\"JSON\",\"\",Strings.Replace(\"https://covidtracking.com/api/v1/states/TX/daily.json\",st===\"US\"?\"/states/TX/\":\"/TX/\",\"/\"+st.toLowerCase()+\"/\")),function(t)\r\n  {\r\n   return Unchecked.Equals(typeof t,\"string\")?JSON.parse(t):t;\r\n  });\r\n };\r\n Covid.CovidStatesDailyUrl=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.CovidStatesDailyUrl;\r\n };\r\n Covid.CovidStatesCurrentUrl=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.CovidStatesCurrentUrl;\r\n };\r\n Covid.getStatesPop=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.getStatesPop;\r\n };\r\n Covid.getStatesPopM=function(sts)\r\n {\r\n  var x;\r\n  return Seq$1.sum(new FSharpSet.New$1(BalancedTree.OfSeq(Seq$1.map(Covid.getStatePop,Set.Filter((x=new State({\r\n   $:0,\r\n   $0:\"US\"\r\n  }),function(y)\r\n  {\r\n   return!Unchecked.Equals(x,y);\r\n  }),sts)))));\r\n };\r\n Covid.getStatePop=function(st)\r\n {\r\n  var o;\r\n  o=Map.TryFind(st,Covid.statesPop2019());\r\n  return o==null?100000:o.$0;\r\n };\r\n Covid.splitStates=function(sts)\r\n {\r\n  return Arrays.map(function(a)\r\n  {\r\n   return new State({\r\n    $:0,\r\n    $0:a\r\n   });\r\n  },Strings.SplitChars(Strings.Trim(sts),[\" \"],0));\r\n };\r\n Covid.statesCodes=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.statesCodes;\r\n };\r\n Covid.statesPop2019=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.statesPop2019;\r\n };\r\n SC$1.$cctor=function()\r\n {\r\n  var f,g,p,cache,getOrAdd,x,f$1,f$2,p$1,x$1,g$1,$1,$2,b;\r\n  SC$1.$cctor=Global.ignore;\r\n  function g$2(s)\r\n  {\r\n   return Strings.concat(\"\\n\",s);\r\n  }\r\n  function f$3(s)\r\n  {\r\n   return String.splitByChar(\"\\n\",s);\r\n  }\r\n  function g$3(s)\r\n  {\r\n   var a$1,b$1;\r\n   return Slice.array(s,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:(a$1=0,(b$1=Arrays.length(s)-2,Unchecked.Compare(a$1,b$1)===1?a$1:b$1))\r\n   });\r\n  }\r\n  function g$4(s)\r\n  {\r\n   return Strings.concat(\"\\n\",s);\r\n  }\r\n  function f$4(s)\r\n  {\r\n   return s+\"T00:00:00\";\r\n  }\r\n  function checkO(v)\r\n  {\r\n   var res;\r\n   res=0;\r\n   return cache.TryGetValue(v,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v$1)\r\n    {\r\n     res=v$1;\r\n    }\r\n   })?{\r\n    $:1,\r\n    $0:res\r\n   }:null;\r\n  }\r\n  function store(v,res)\r\n  {\r\n   cache.set_Item(v,res);\r\n   return res;\r\n  }\r\n  function getOrAdd$1(p$2,f$7)\r\n  {\r\n   var o;\r\n   o=checkO(p$2);\r\n   return o==null?store(p$2,f$7(p$2)):o.$0;\r\n  }\r\n  function f$5(t)\r\n  {\r\n   return t[1];\r\n  }\r\n  function g$5(a$1)\r\n  {\r\n   return a$1.$0;\r\n  }\r\n  function f$6(x$2,y)\r\n  {\r\n   return x$2>y;\r\n  }\r\n  function a(states,totalize)\r\n  {\r\n   return Seq$1.delay(function()\r\n   {\r\n    return Seq$1.append(Seq$1.map(function(st)\r\n    {\r\n     return st.get_Id();\r\n    },states),Seq$1.delay(function()\r\n    {\r\n     return totalize?[\"Total\"]:[];\r\n    }));\r\n   });\r\n  }\r\n  SC$1.rtn=function(v)\r\n  {\r\n   return[v];\r\n  };\r\n  SC$1.unindentStr=function(x$2)\r\n  {\r\n   return g$2(String.unindent(x$2));\r\n  };\r\n  SC$1.skipLastLine=(f=function(x$2)\r\n  {\r\n   return g$3(f$3(x$2));\r\n  },function(x$2)\r\n  {\r\n   return g$4(f(x$2));\r\n  });\r\n  SC$1.parseDateO2=(g=ParseO.tryParseWith(function(a$1)\r\n  {\r\n   var o,m;\r\n   o=0;\r\n   return[(m=DateUtil.TryParse(a$1),m!=null&&m.$==1&&(o=m.$0,true)),o];\r\n  }),function(x$2)\r\n  {\r\n   return g(f$4(x$2));\r\n  });\r\n  SC$1.parseDateO=ParseO.tryParseWith(function(a$1)\r\n  {\r\n   var o,m;\r\n   o=0;\r\n   return[(m=DateUtil.TryParse(a$1),m!=null&&m.$==1&&(o=m.$0,true)),o];\r\n  });\r\n  SC$1.parseIntO=ParseO.tryParseWith(function(a$1)\r\n  {\r\n   var o;\r\n   o=0;\r\n   return[Numeric.TryParseInt32(a$1,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o];\r\n  });\r\n  SC$1.parseInt64O=ParseO.tryParseWith(function(a$1)\r\n  {\r\n   var o;\r\n   o=0;\r\n   return[Numeric.TryParseInt64(a$1,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o];\r\n  });\r\n  SC$1.parseSingleO=ParseO.tryParseWith(function(a$1)\r\n  {\r\n   var o,$3;\r\n   o=0;\r\n   return[($3=Global.Number(a$1),Global.isNaN($3)?false:(o=$3,true)),o];\r\n  });\r\n  SC$1.parseDoubleO=ParseO.tryParseWith(function(a$1)\r\n  {\r\n   var o,$3;\r\n   o=0;\r\n   return[($3=Global.Number(a$1),Global.isNaN($3)?false:(o=$3,true)),o];\r\n  });\r\n  SC$1.parseGuidO=ParseO.tryParseWith(function(a$1)\r\n  {\r\n   var o;\r\n   o=null;\r\n   return[Guid.TryParse(a$1,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o];\r\n  });\r\n  SC$1[\"|Date|_|\"]=ParseO.parseDateO();\r\n  SC$1[\"|Int|_|\"]=ParseO.parseIntO();\r\n  SC$1[\"|Int64|_|\"]=ParseO.parseInt64O();\r\n  SC$1[\"|Single|_|\"]=ParseO.parseSingleO();\r\n  SC$1[\"|Double|_|\"]=ParseO.parseDoubleO();\r\n  SC$1[\"|Guid|_|\"]=ParseO.parseGuidO();\r\n  SC$1.statesPop2019=new FSharpMap.New(List.ofArray([[new State({\r\n   $:0,\r\n   $0:\"US\"\r\n  }),328239523],[new State({\r\n   $:0,\r\n   $0:\"AL\"\r\n  }),4903185],[new State({\r\n   $:0,\r\n   $0:\"AK\"\r\n  }),731545],[new State({\r\n   $:0,\r\n   $0:\"AZ\"\r\n  }),7278717],[new State({\r\n   $:0,\r\n   $0:\"AR\"\r\n  }),3017804],[new State({\r\n   $:0,\r\n   $0:\"CA\"\r\n  }),39512223],[new State({\r\n   $:0,\r\n   $0:\"CO\"\r\n  }),5758736],[new State({\r\n   $:0,\r\n   $0:\"CT\"\r\n  }),3565287],[new State({\r\n   $:0,\r\n   $0:\"DE\"\r\n  }),973764],[new State({\r\n   $:0,\r\n   $0:\"DC\"\r\n  }),705749],[new State({\r\n   $:0,\r\n   $0:\"FL\"\r\n  }),21477737],[new State({\r\n   $:0,\r\n   $0:\"GA\"\r\n  }),10617423],[new State({\r\n   $:0,\r\n   $0:\"HI\"\r\n  }),1415872],[new State({\r\n   $:0,\r\n   $0:\"ID\"\r\n  }),1787065],[new State({\r\n   $:0,\r\n   $0:\"IL\"\r\n  }),12671821],[new State({\r\n   $:0,\r\n   $0:\"IN\"\r\n  }),6732219],[new State({\r\n   $:0,\r\n   $0:\"IA\"\r\n  }),3155070],[new State({\r\n   $:0,\r\n   $0:\"KS\"\r\n  }),2913314],[new State({\r\n   $:0,\r\n   $0:\"KY\"\r\n  }),4467673],[new State({\r\n   $:0,\r\n   $0:\"LA\"\r\n  }),4648794],[new State({\r\n   $:0,\r\n   $0:\"ME\"\r\n  }),1344212],[new State({\r\n   $:0,\r\n   $0:\"MD\"\r\n  }),6045680],[new State({\r\n   $:0,\r\n   $0:\"MA\"\r\n  }),6892503],[new State({\r\n   $:0,\r\n   $0:\"MI\"\r\n  }),9986857],[new State({\r\n   $:0,\r\n   $0:\"MN\"\r\n  }),5639632],[new State({\r\n   $:0,\r\n   $0:\"MS\"\r\n  }),2976149],[new State({\r\n   $:0,\r\n   $0:\"MO\"\r\n  }),6137428],[new State({\r\n   $:0,\r\n   $0:\"MT\"\r\n  }),1068778],[new State({\r\n   $:0,\r\n   $0:\"NE\"\r\n  }),1934408],[new State({\r\n   $:0,\r\n   $0:\"NV\"\r\n  }),3080156],[new State({\r\n   $:0,\r\n   $0:\"NH\"\r\n  }),1359711],[new State({\r\n   $:0,\r\n   $0:\"NJ\"\r\n  }),8882190],[new State({\r\n   $:0,\r\n   $0:\"NM\"\r\n  }),2096829],[new State({\r\n   $:0,\r\n   $0:\"NY\"\r\n  }),19453561],[new State({\r\n   $:0,\r\n   $0:\"NC\"\r\n  }),10488084],[new State({\r\n   $:0,\r\n   $0:\"ND\"\r\n  }),762062],[new State({\r\n   $:0,\r\n   $0:\"OH\"\r\n  }),11689100],[new State({\r\n   $:0,\r\n   $0:\"OK\"\r\n  }),3956971],[new State({\r\n   $:0,\r\n   $0:\"OR\"\r\n  }),4217737],[new State({\r\n   $:0,\r\n   $0:\"PA\"\r\n  }),12801989],[new State({\r\n   $:0,\r\n   $0:\"RI\"\r\n  }),1059361],[new State({\r\n   $:0,\r\n   $0:\"SC\"\r\n  }),5148714],[new State({\r\n   $:0,\r\n   $0:\"SD\"\r\n  }),884659],[new State({\r\n   $:0,\r\n   $0:\"TN\"\r\n  }),6829174],[new State({\r\n   $:0,\r\n   $0:\"TX\"\r\n  }),28995881],[new State({\r\n   $:0,\r\n   $0:\"UT\"\r\n  }),3205958],[new State({\r\n   $:0,\r\n   $0:\"VT\"\r\n  }),623989],[new State({\r\n   $:0,\r\n   $0:\"VA\"\r\n  }),8535519],[new State({\r\n   $:0,\r\n   $0:\"WA\"\r\n  }),7614893],[new State({\r\n   $:0,\r\n   $0:\"WV\"\r\n  }),1792147],[new State({\r\n   $:0,\r\n   $0:\"WI\"\r\n  }),5822434],[new State({\r\n   $:0,\r\n   $0:\"WY\"\r\n  }),578759],[new State({\r\n   $:0,\r\n   $0:\"PR\"\r\n  }),3193694]]));\r\n  SC$1.statesCodes=List.ofArray([[\"Alabama\",new State({\r\n   $:0,\r\n   $0:\"AL\"\r\n  })],[\"Alaska\",new State({\r\n   $:0,\r\n   $0:\"AK\"\r\n  })],[\"Arizona\",new State({\r\n   $:0,\r\n   $0:\"AZ\"\r\n  })],[\"Arkansas\",new State({\r\n   $:0,\r\n   $0:\"AR\"\r\n  })],[\"California\",new State({\r\n   $:0,\r\n   $0:\"CA\"\r\n  })],[\"Colorado\",new State({\r\n   $:0,\r\n   $0:\"CO\"\r\n  })],[\"Connecticut\",new State({\r\n   $:0,\r\n   $0:\"CT\"\r\n  })],[\"Delaware\",new State({\r\n   $:0,\r\n   $0:\"DE\"\r\n  })],[\"Florida\",new State({\r\n   $:0,\r\n   $0:\"FL\"\r\n  })],[\"Georgia\",new State({\r\n   $:0,\r\n   $0:\"GA\"\r\n  })],[\"Hawaii\",new State({\r\n   $:0,\r\n   $0:\"HI\"\r\n  })],[\"Idaho\",new State({\r\n   $:0,\r\n   $0:\"ID\"\r\n  })],[\"Illinois\",new State({\r\n   $:0,\r\n   $0:\"IL\"\r\n  })],[\"Indiana\",new State({\r\n   $:0,\r\n   $0:\"IN\"\r\n  })],[\"Iowa\",new State({\r\n   $:0,\r\n   $0:\"IA\"\r\n  })],[\"Kansas\",new State({\r\n   $:0,\r\n   $0:\"KS\"\r\n  })],[\"Kentucky\",new State({\r\n   $:0,\r\n   $0:\"KY\"\r\n  })],[\"Louisiana\",new State({\r\n   $:0,\r\n   $0:\"LA\"\r\n  })],[\"Maine\",new State({\r\n   $:0,\r\n   $0:\"ME\"\r\n  })],[\"Maryland\",new State({\r\n   $:0,\r\n   $0:\"MD\"\r\n  })],[\"Massachusetts\",new State({\r\n   $:0,\r\n   $0:\"MA\"\r\n  })],[\"Michigan\",new State({\r\n   $:0,\r\n   $0:\"MI\"\r\n  })],[\"Minnesota\",new State({\r\n   $:0,\r\n   $0:\"MN\"\r\n  })],[\"Mississippi\",new State({\r\n   $:0,\r\n   $0:\"MS\"\r\n  })],[\"Missouri\",new State({\r\n   $:0,\r\n   $0:\"MO\"\r\n  })],[\"Montana\",new State({\r\n   $:0,\r\n   $0:\"MT\"\r\n  })],[\"Nebraska\",new State({\r\n   $:0,\r\n   $0:\"NE\"\r\n  })],[\"Nevada\",new State({\r\n   $:0,\r\n   $0:\"NV\"\r\n  })],[\"New Hampshire\",new State({\r\n   $:0,\r\n   $0:\"NH\"\r\n  })],[\"New Jersey\",new State({\r\n   $:0,\r\n   $0:\"NJ\"\r\n  })],[\"New Mexico\",new State({\r\n   $:0,\r\n   $0:\"NM\"\r\n  })],[\"New York\",new State({\r\n   $:0,\r\n   $0:\"NY\"\r\n  })],[\"North Carolina\",new State({\r\n   $:0,\r\n   $0:\"NC\"\r\n  })],[\"North Dakota\",new State({\r\n   $:0,\r\n   $0:\"ND\"\r\n  })],[\"Ohio\",new State({\r\n   $:0,\r\n   $0:\"OH\"\r\n  })],[\"Oklahoma\",new State({\r\n   $:0,\r\n   $0:\"OK\"\r\n  })],[\"Oregon\",new State({\r\n   $:0,\r\n   $0:\"OR\"\r\n  })],[\"Pennsylvania\",new State({\r\n   $:0,\r\n   $0:\"PA\"\r\n  })],[\"Rhode Island\",new State({\r\n   $:0,\r\n   $0:\"RI\"\r\n  })],[\"South Carolina\",new State({\r\n   $:0,\r\n   $0:\"SC\"\r\n  })],[\"South Dakota\",new State({\r\n   $:0,\r\n   $0:\"SD\"\r\n  })],[\"Tennessee\",new State({\r\n   $:0,\r\n   $0:\"TN\"\r\n  })],[\"Texas\",new State({\r\n   $:0,\r\n   $0:\"TX\"\r\n  })],[\"Utah\",new State({\r\n   $:0,\r\n   $0:\"UT\"\r\n  })],[\"Vermont\",new State({\r\n   $:0,\r\n   $0:\"VT\"\r\n  })],[\"Virginia\",new State({\r\n   $:0,\r\n   $0:\"VA\"\r\n  })],[\"Washington\",new State({\r\n   $:0,\r\n   $0:\"WA\"\r\n  })],[\"West Virginia\",new State({\r\n   $:0,\r\n   $0:\"WV\"\r\n  })],[\"Wisconsin\",new State({\r\n   $:0,\r\n   $0:\"WI\"\r\n  })],[\"Wyoming\",new State({\r\n   $:0,\r\n   $0:\"WY\"\r\n  })],[\"American Samoa\",new State({\r\n   $:0,\r\n   $0:\"AS\"\r\n  })],[\"District of Columbia\",new State({\r\n   $:0,\r\n   $0:\"DC\"\r\n  })],[\"Guam\",new State({\r\n   $:0,\r\n   $0:\"GU\"\r\n  })],[\"Northern Mariana Islands\",new State({\r\n   $:0,\r\n   $0:\"MP\"\r\n  })],[\"Puerto Rico\",new State({\r\n   $:0,\r\n   $0:\"PR\"\r\n  })],[\"Virgin Islands\",new State({\r\n   $:0,\r\n   $0:\"VI\"\r\n  })]]);\r\n  SC$1.getStatesPop=(p=(cache=new Dictionary.New$5(),[[checkO,function($3)\r\n  {\r\n   return function($4)\r\n   {\r\n    return getOrAdd$1($3,$4);\r\n   };\r\n  }],function()\r\n  {\r\n   cache.Clear();\r\n  }]),(getOrAdd=p[0][1],[function(p$2)\r\n  {\r\n   return(getOrAdd(p$2))(Covid.getStatesPopM);\r\n  },p[1]]))[0];\r\n  SC$1.CovidStatesCurrentUrl=\"https://covidtracking.com/api/v1/states/TX/current.json\";\r\n  SC$1.CovidStatesDailyUrl=\"https://covidtracking.com/api/v1/states/TX/daily.json\";\r\n  SC$1.ahora=Date.now();\r\n  SC$1.toggleSt=Var$1.Create$1(null);\r\n  SC$1.statesV=Var$1.Create$1(Strings.concat(\" \",List.map(function(x$2)\r\n  {\r\n   return g$5(f$5(x$2));\r\n  },Covid.statesCodes())));\r\n  SC$1.delayedV=Library.delayedVar(1000,Covid.statesV());\r\n  SC$1.statesW=View.Map(Covid.splitStates,Covid.delayedV().get_View());\r\n  SC$1.totalizeW=(x=Covid.statesW(),View.Map((f$1=(f$2=(p$1=(x$1=new State({\r\n   $:0,\r\n   $0:\"US\"\r\n  }),function(y)\r\n  {\r\n   return!Unchecked.Equals(x$1,y);\r\n  }),function(s)\r\n  {\r\n   return Seq$1.filter(p$1,s);\r\n  }),function(x$2)\r\n  {\r\n   return Seq$1.length(f$2(x$2));\r\n  }),(g$1=function(b$1)\r\n  {\r\n   return f$6(b$1,1);\r\n  },function(x$2)\r\n  {\r\n   return g$1(f$1(x$2));\r\n  })),x));\r\n  SC$1.columnsW=($1=Covid.statesW(),($2=Covid.totalizeW(),(((Runtime.Curried3(View.Map2))(a))($1))($2)));\r\n  View.Sink(function(a$1)\r\n  {\r\n   var st;\r\n   if(a$1!=null&&a$1.$==1)\r\n    {\r\n     st=a$1.$0[1];\r\n     View.Get(function(sts)\r\n     {\r\n      var a$2;\r\n      a$2=Strings.concat(\" \",Seq$1.map(function(st$1)\r\n      {\r\n       return st$1.get_Id();\r\n      },Seq$1.contains(st,sts)?Seq$1.filter(function(y)\r\n      {\r\n       return!Unchecked.Equals(st,y);\r\n      },sts):Seq$1.append(sts,[st])));\r\n      Covid.statesV().Set(a$2);\r\n      Covid.toggleSt().Set(null);\r\n     },Covid.statesW());\r\n    }\r\n  },Covid.toggleSt().get_View());\r\n  SC$1.funcs=List.ofArray([new Function({\r\n   $:0,\r\n   $0:\"yearly deaths per 100K\",\r\n   $1:Runtime.Curried(function(data,d,v,getPop)\r\n   {\r\n    return Covid.yearly(data,d,v)*100000/getPop()>>0;\r\n   },4)\r\n  }),new Function({\r\n   $:0,\r\n   $0:\"total deaths per 1M\",\r\n   $1:Runtime.Curried(function($3,$4,v,getPop)\r\n   {\r\n    return v*1000000/getPop()>>0;\r\n   },4)\r\n  }),new Function({\r\n   $:0,\r\n   $0:\"total deaths\",\r\n   $1:Runtime.Curried(function($3,$4,v,$5)\r\n   {\r\n    return v/1>>0;\r\n   },4)\r\n  }),new Function({\r\n   $:0,\r\n   $0:\"day deaths\",\r\n   $1:Runtime.Curried(function(data,d,v,$3)\r\n   {\r\n    return Covid.daily(data,d,v)/1>>0;\r\n   },4)\r\n  }),new Function({\r\n   $:0,\r\n   $0:\"week deaths\",\r\n   $1:Runtime.Curried(function(data,d,v,$3)\r\n   {\r\n    return Covid.weekly(data,d,v)/1>>0;\r\n   },4)\r\n  }),new Function({\r\n   $:0,\r\n   $0:\"30 days deaths\",\r\n   $1:Runtime.Curried(function(data,d,v,$3)\r\n   {\r\n    return Covid.monthly(data,d,v)/1>>0;\r\n   },4)\r\n  }),new Function({\r\n   $:0,\r\n   $0:\"7 days yearly\",\r\n   $1:Runtime.Curried(function(data,d,v,$3)\r\n   {\r\n    return Covid.yearly(data,d,v)/1>>0;\r\n   },4)\r\n  }),new Function({\r\n   $:0,\r\n   $0:\"population\",\r\n   $1:Runtime.Curried(function($3,$4,$5,getPop)\r\n   {\r\n    return getPop()/1>>0;\r\n   },4)\r\n  })]);\r\n  SC$1.functionV=Var$1.Create$1(Seq$1.head(Covid.funcs()));\r\n  SC$1.rowsW=(b=View.get_Do(),View.Bind(function(a$1)\r\n  {\r\n   return View.Bind(function(a$2)\r\n   {\r\n    return View.Bind(function(a$3)\r\n    {\r\n     return View.Bind(function(a$4)\r\n     {\r\n      var totals,totals2;\r\n      function getTot()\r\n      {\r\n       return(Covid.getStatesPop())(new FSharpSet.New(a$1));\r\n      }\r\n      function f$7(all,t)\r\n      {\r\n       var st,data;\r\n       function f$8(m$2,kvp)\r\n       {\r\n        var text,newV,x$2,v;\r\n        text=((((a$4.get_F())(data))(kvp.K))(kvp.V))(function()\r\n        {\r\n         return Covid.getStatePop(st);\r\n        });\r\n        newV=(x$2=Map.TryFind(kvp.K,m$2),(v=new FSharpMap.New([]),x$2==null?v:x$2.$0)).Add(st,[kvp.V,text]);\r\n        return m$2.Add(kvp.K,newV);\r\n       }\r\n       st=t[0];\r\n       data=t[1];\r\n       return(((Runtime.Curried3(Seq$1.fold))(f$8))(all))(data);\r\n      }\r\n      function m(date,value,a$5)\r\n      {\r\n       return[date,value];\r\n      }\r\n      function m$1(date,value,row)\r\n      {\r\n       return[date,Arrays.ofSeq(Seq$1.delay(function()\r\n       {\r\n        return Seq$1.map(function(st)\r\n        {\r\n         var o;\r\n         return[st,(o=Map.TryFind(st,row),o==null?null:{\r\n          $:1,\r\n          $0:o.$0[1]\r\n         })];\r\n        },a$1);\r\n       })),a$3?{\r\n        $:1,\r\n        $0:((((a$4.get_F())(totals2))(date))(value))(getTot)\r\n       }:null];\r\n      }\r\n      totals=Seq$1.map(function(dayvp)\r\n      {\r\n       var total;\r\n       total=Seq$1.sum(Seq$1.choose(function(kvp)\r\n       {\r\n        return kvp.K.get_Id()===\"US\"?null:{\r\n         $:1,\r\n         $0:kvp.V[0]\r\n        };\r\n       },dayvp.V));\r\n       return[dayvp.K,total,dayvp.V];\r\n      },(((Runtime.Curried3(Seq$1.fold))(f$7))(new FSharpMap.New([])))(a$2));\r\n      totals2=new FSharpMap.New(Seq$1.map(function($3)\r\n      {\r\n       return m($3[0],$3[1],$3[2]);\r\n      },totals));\r\n      return View.Const(Seq$1.sortDescending(Seq$1.map(function($3)\r\n      {\r\n       return m$1($3[0],$3[1],$3[2]);\r\n      },totals)));\r\n     },Covid.functionV().get_View());\r\n    },Covid.totalizeW());\r\n   },View.MapAsync(Global.id,View.Const(Concurrency.Parallel(Arrays.map(Covid.deaths,a$1)))));\r\n  },Covid.statesW()));\r\n  SC$1.dataSel=Doc.Select([],Covid.fname,Covid.funcs(),Covid.functionV());\r\n };\r\n Runtime.OnLoad(function()\r\n {\r\n  Covid.main();\r\n });\r\n}());\r\n"
    }
  ]
}
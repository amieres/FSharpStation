{
  "asName": "LayoutEngine",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm",
    "WebSharper.Web.asm",
    "WebSharper.Sitelets.asm",
    "WebSharper.Control.asm",
    "WebSharper.UI.asm",
    "WebSharper.UI.Templating.Runtime.asm"
  ],
  "resources": [],
  "modules": [
    {
      "moName": "FsRootDll.Library+StringId`1",
      "methods": []
    },
    {
      "moName": "FsRootDll.Library+GuidId`1",
      "methods": []
    },
    {
      "moName": "FsRootDll.Library+Log",
      "methods": []
    },
    {
      "moName": "FsRootDll.Library+Dict",
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
      "moName": "FsRootDll.Library+LDict",
      "methods": []
    },
    {
      "moName": "FsRootDll.Library+Memoize",
      "methods": []
    },
    {
      "moName": "FsRootDll.Library+Monads+State+CEBuilder",
      "methods": []
    },
    {
      "moName": "FsRootDll.Library+Monads+State+Operators",
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
      "moName": "FsRootDll.Library+Monads+State",
      "methods": [
        {
          "meName": "state",
          "isField": 1,
          "type": {
            "tName": "CEBuilder",
            "asm": "LayoutEngine"
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
            "asm": "LayoutEngine"
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
      "moName": "FsRootDll.Library+Monads+Result",
      "methods": [
        {
          "meName": "result",
          "isField": 1,
          "type": {
            "tName": "Builder",
            "asm": "LayoutEngine"
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
      "moName": "FsRootDll.Library+Monads+Depend+Depend`1",
      "methods": []
    },
    {
      "moName": "FsRootDll.Library+Monads+Depend+DependBuilder",
      "methods": []
    },
    {
      "moName": "FsRootDll.Library+Monads+Depend+Operators",
      "methods": [
        {
          "meName": "op_GreaterMultiplyGreater",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<('a -> 'c)>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+Monads+Depend+Depend<('b -> 'c)>",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "op_LessMultiplyGreater",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<'b>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+Depend+Depend<('a -> 'b)>",
              "asm": "LayoutEngine"
            },
            {
              "tName": "FsRootDll.Library+Monads+Depend+Depend<'a>",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "op_GreaterEqualsMultiply",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<'b>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+Depend+Depend<'a>",
              "asm": "LayoutEngine"
            },
            {
              "tName": "FsRootDll.Library+Monads+Depend+Depend<('a -> 'b)>",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "op_BarMultiplyGreater",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<'b>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRootDll.Library+Monads+Depend+Depend<('a -> 'b)>",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "op_BarGreaterGreater",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<'b>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+Depend+Depend<'a>",
              "asm": "LayoutEngine"
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
            "tName": "FsRootDll.Library+Monads+Depend+Depend<'b>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "FsRootDll.Library+Monads+Depend+Depend<'a>",
              "asm": "LayoutEngine"
            },
            {
              "tName": "('a -> FsRootDll.Library+Monads+Depend+Depend<'b>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "depend",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+DependBuilder",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "rtn",
          "isField": 1,
          "type": {
            "tName": "('a -> FsRootDll.Library+Monads+Depend+Depend<'a>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRootDll.Library+Monads+Depend",
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "depend",
          "isField": 1,
          "type": {
            "tName": "DependBuilder",
            "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "replacerDef",
          "isField": 0,
          "type": {
            "tName": "Depend<'a>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "IEnumerable<(string * (string * Object))>",
              "asm": "netstandard"
            },
            {
              "tName": "Depend<'a>",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "replacer",
          "isField": 0,
          "type": {
            "tName": "Depend<'a>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "IEnumerable<(string * Object)>",
              "asm": "netstandard"
            },
            {
              "tName": "Depend<'a>",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "apply",
          "isField": 0,
          "type": {
            "tName": "Depend<'b>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "Depend<('a -> 'b)>",
              "asm": "LayoutEngine"
            },
            {
              "tName": "Depend<'a>",
              "asm": "LayoutEngine"
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
            "asm": "LayoutEngine"
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
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "('a -> Depend<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Depend<'a>",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "dependByName",
          "isField": 0,
          "type": {
            "tName": "Depend<'b>",
            "asm": "LayoutEngine"
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
      "moName": "FsRootDll.Library+Monads",
      "methods": []
    },
    {
      "moName": "FsRootDll.Library+String",
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
              "tName": "'a",
              "asm": ""
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
      "moName": "FsRootDll.Library+ParseO",
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
      "moName": "FsRootDll.Library",
      "methods": [
        {
          "meName": "String.get_toUnderscore",
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
      "moName": "FsRootDll.LibraryJS+View",
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
      "moName": "FsRootDll.LibraryJS+Var",
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
      "moName": "FsRootDll.LibraryJS+ListModel",
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
      "moName": "FsRootDll.LibraryJS+REGEX",
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
      "moName": "FsRootDll.LibraryJS+Hoverable+Hoverable",
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
          "meName": "Content$758$81",
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
          "meName": "get_Attributes$754$69",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRootDll.LibraryJS+Hoverable+Hoverable",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "get_Attributes$753$69",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRootDll.LibraryJS+Hoverable+Hoverable",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "New",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+Hoverable+Hoverable",
            "asm": "LayoutEngine"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRootDll.LibraryJS+Hoverable",
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
      "moName": "FsRootDll.LibraryJS+WebComponent+WcTabStrip+WcTabStripT",
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
      "moName": "FsRootDll.LibraryJS+WebComponent+WcTabStrip",
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
          "meName": "tabStrip$902$64",
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
      "moName": "FsRootDll.LibraryJS+WebComponent+WcSplitter+WcSplitterT",
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
      "moName": "FsRootDll.LibraryJS+WebComponent+WcSplitter",
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
      "moName": "FsRootDll.LibraryJS+WebComponent",
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
      "moName": "FsRootDll.LibraryJS+AppFrameworkTemplate",
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
      "moName": "FsRootDll.LibraryJS+AppFramework+PlgElemName",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+PlugInVar",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+PlugInView",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+DocFunction",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+PlugInDoc",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+ActFunction",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+PlugInAction",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+PlugInQuery",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+PlugIn",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+PlugInBuilder",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+TextData",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+Fun`2",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+Val`1",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+P`1",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+Val",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+Val<string>",
              "asm": "LayoutEngine"
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
              "tName": "FsRootDll.LibraryJS+AppFramework+Val<string>",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "addAtt",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+Val<IEnumerable<Attr>>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "Attr",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "FsRootDll.LibraryJS+AppFramework+Val<IEnumerable<Attr>>",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "addDoc",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+Val<IEnumerable<Doc>>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "FsRootDll.LibraryJS+AppFramework+Val<IEnumerable<Doc>>",
              "asm": "LayoutEngine"
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
              "tName": "FsRootDll.LibraryJS+AppFramework+Val<'a>",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "sequenceListApp",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+Val<List<'a>>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "List<FsRootDll.LibraryJS+AppFramework+Val<'a>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "traverseListApp",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+Val<List<'b>>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "('a -> FsRootDll.LibraryJS+AppFramework+Val<'b>)",
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
            "tName": "(FsRootDll.LibraryJS+AppFramework+Val<('a -> 'b)> -> (FsRootDll.LibraryJS+AppFramework+Val<'a> -> FsRootDll.LibraryJS+AppFramework+Val<'b>))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "apply",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+Val<'b>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "FsRootDll.LibraryJS+AppFramework+Val<('a -> 'b)>",
              "asm": "LayoutEngine"
            },
            {
              "tName": "FsRootDll.LibraryJS+AppFramework+Val<'a>",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "rtn",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+Val<'a>",
            "asm": "LayoutEngine"
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
            "tName": "FsRootDll.LibraryJS+AppFramework+Val<'b>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.LibraryJS+AppFramework+Val<'a>",
              "asm": "LayoutEngine"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+AAttr",
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
      "moName": "FsRootDll.LibraryJS+AppFramework+Extract0+TextType",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework+Extract0",
      "methods": [
        {
          "meName": "extractTextD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(string -> View<string>)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "extractAtsD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(string -> IEnumerable<Attr>)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "getTextValD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(string -> FsRootDll.LibraryJS+AppFramework+Val<string>)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "getTextValFromSeqD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(List<TextType> -> FsRootDll.LibraryJS+AppFramework+Val<string>)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "extractDocD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(string -> Doc)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "getDocFromTextTypesD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(List<TextType> -> Doc)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "getTextActViewFromReferenceD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(string -> View<FSharpChoice<string, FsRootDll.LibraryJS+AppFramework+PlugInAction>>)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "getDocFromReferenceD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(string -> Doc)>",
            "asm": "LayoutEngine"
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
            "tName": "View<FSharpChoice<string, FsRootDll.LibraryJS+AppFramework+PlugInAction>>",
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
      "moName": "FsRootDll.LibraryJS+AppFramework+ListModelData`2",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFramework",
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
            "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
          "meName": "inputFile$2231$67",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInAction",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "inputFile$2230$67",
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
              "tName": "FsRootDll.Library+Monads+Depend+Depend<'a>",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "defPlugInName",
          "isField": 1,
          "type": {
            "tName": "PlugInName",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "extractAttD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(string -> Attr)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "extractAtsD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(string -> IEnumerable<Attr>)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "extractDocD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(string -> Doc)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "extractTextD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(string -> View<string>)>",
            "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            },
            {
              "tName": "FsRootDll.Library+Monads+Depend+Depend<'a>",
              "asm": "LayoutEngine"
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
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(string -> View<FSharpChoice<string, PlugInAction>>)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "getDocD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(string -> Doc)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "getDocwD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(string -> Doc)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "currentPlugInNameD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<PlugInName>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "currentPlugInNameDef",
          "isField": 1,
          "type": {
            "tName": "PlugInName",
            "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
            "asm": "LayoutEngine"
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
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "P<'a>",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "bindWrap",
          "isField": 0,
          "type": {
            "tName": "P<'b>",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "('a -> P<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRootDll.Library+Monads+Depend+Depend<'a>",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            },
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            },
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            },
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            },
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            },
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            },
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            },
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            },
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            },
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            },
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            },
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            },
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            },
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            },
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "plugin",
          "isField": 1,
          "type": {
            "tName": "PlugInBuilder",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "newDocF",
          "isField": 0,
          "type": {
            "tName": "PlugInDoc",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
            },
            {
              "tName": "DocFunction",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "newDocL",
          "isField": 0,
          "type": {
            "tName": "PlugInDoc",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
            },
            {
              "tName": "ActFunction",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "newAct",
          "isField": 0,
          "type": {
            "tName": "PlugInAction",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
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
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "PlgElemName",
              "asm": "LayoutEngine"
            },
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "vertical$1709$39",
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
          "meName": "vertical$1708$39",
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
          "meName": "vertical$1707$39",
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
          "meName": "horizontal$1701$39",
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
          "meName": "horizontal$1700$39",
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
          "meName": "horizontal$1699$39",
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
          "meName": "mainDoc$1690$42",
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
              "asm": "LayoutEngine"
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
          "meName": "renderQueries$1653$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInQuery",
              "asm": "LayoutEngine"
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
          "meName": "renderActions$1642$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInAction",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "renderDocs$1622$39",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInDoc",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
          "meName": "renderPlugIns$1581$35",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "PlugInName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "defaultPlugIn",
          "isField": 0,
          "type": {
            "tName": "PlugIn",
            "asm": "LayoutEngine"
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
      "moName": "FsRootDll.LibraryJS+LM",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<'a, 'b>",
              "asm": "LayoutEngine"
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
            "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<'b, 'a>",
            "asm": "LayoutEngine"
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
              "tName": "(FsRootDll.LibraryJS+AppFramework+ListModelData<'b, 'a> -> (View<Option<'b>> -> (Var<'a> -> 'c)))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "getDocFor",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<'a, 'b>",
            "asm": "LayoutEngine"
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
              "tName": "(FsRootDll.LibraryJS+AppFramework+ListModelData<'a, 'b> -> (View<Option<'a>> -> (Var<'b> -> 'c)))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "getDocForW",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<'a, 'b>",
            "asm": "LayoutEngine"
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
              "tName": "(FsRootDll.LibraryJS+AppFramework+ListModelData<'a, 'b> -> (View<Option<'a>> -> (Var<'b> -> 'c)))",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.LibraryJS+StartAppFramework",
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
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(unit -> unit)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "htmlD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<Object>",
            "asm": "LayoutEngine"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRootDll.LibraryJS+AppFrameworkUI",
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
          "meName": "plgDocsList",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<FsRootDll.LibraryJS+AppFramework+PlgElemName, FsRootDll.LibraryJS+AppFramework+PlugInDoc>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "plgActsList",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<FsRootDll.LibraryJS+AppFramework+PlgElemName, FsRootDll.LibraryJS+AppFramework+PlugInAction>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "plgViewsList",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<FsRootDll.LibraryJS+AppFramework+PlgElemName, FsRootDll.LibraryJS+AppFramework+PlugInView>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "plgVarsList",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<FsRootDll.LibraryJS+AppFramework+PlgElemName, FsRootDll.LibraryJS+AppFramework+PlugInVar>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "pluginsList",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<FsRootDll.LibraryJS+AppFramework+PlugInName, FsRootDll.LibraryJS+AppFramework+PlugIn>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
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
            "tName": "FsRootDll.LibraryJS+AppFramework+PlugInAction",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "defViw",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+PlugInView",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "defVar",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+PlugInVar",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "defDoc",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+PlugInDoc",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "defPlg",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+PlugIn",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "showDoc$2778$35",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<_, FsRootDll.LibraryJS+AppFramework+PlugInDoc>",
              "asm": "LayoutEngine"
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
              "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<'a, FsRootDll.LibraryJS+AppFramework+PlugInDoc>",
              "asm": "LayoutEngine"
            },
            {
              "tName": "View<Option<'a>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Var<FsRootDll.LibraryJS+AppFramework+PlugInDoc>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "showAct$2771$35",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<_, FsRootDll.LibraryJS+AppFramework+PlugInAction>",
              "asm": "LayoutEngine"
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
              "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<'a, FsRootDll.LibraryJS+AppFramework+PlugInAction>",
              "asm": "LayoutEngine"
            },
            {
              "tName": "View<Option<'a>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Var<FsRootDll.LibraryJS+AppFramework+PlugInAction>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "showView$2759$35",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<_, FsRootDll.LibraryJS+AppFramework+PlugInView>",
              "asm": "LayoutEngine"
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
              "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<'a, FsRootDll.LibraryJS+AppFramework+PlugInView>",
              "asm": "LayoutEngine"
            },
            {
              "tName": "View<Option<'a>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Var<FsRootDll.LibraryJS+AppFramework+PlugInView>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "showVar$2747$35",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<_, FsRootDll.LibraryJS+AppFramework+PlugInVar>",
              "asm": "LayoutEngine"
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
              "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<'a, FsRootDll.LibraryJS+AppFramework+PlugInVar>",
              "asm": "LayoutEngine"
            },
            {
              "tName": "View<Option<'a>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Var<FsRootDll.LibraryJS+AppFramework+PlugInVar>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "showPlugIn$2735$35",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<_, FsRootDll.LibraryJS+AppFramework+PlugIn>",
              "asm": "LayoutEngine"
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
              "tName": "FsRootDll.LibraryJS+AppFramework+ListModelData<'a, FsRootDll.LibraryJS+AppFramework+PlugIn>",
              "asm": "LayoutEngine"
            },
            {
              "tName": "View<Option<'a>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Var<FsRootDll.LibraryJS+AppFramework+PlugIn>",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngine",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+LayoutEntry",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Token",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Measures",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ItemRef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+DocRef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ActRef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+VarRef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ViwRef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+TextVal",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+AttrVal",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+NodeRef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ParmRef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+RefType",
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
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+SplitterDef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ButtonDef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+InputDef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+TextAreaDef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+DocFDef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ConcatDef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ElementDef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+TemplateDef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ActDef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ActDefs",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+VarDef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ViwDef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+VJSDef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+PlgDef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+DocDef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+Entry",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+EntryDef",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
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
              "tName": "FsRootDll.LibraryJS+LayoutEngineModule+Token",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "entryDef",
          "isField": 0,
          "type": {
            "tName": "EntryDef",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Entry",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "templateDef",
          "isField": 0,
          "type": {
            "tName": "TemplateDef",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "ParmRef",
              "asm": "LayoutEngine"
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
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Layout+Node",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Layout+Splitter",
      "methods": []
    },
    {
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule+Layout",
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
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "extractNodes",
          "isField": 0,
          "type": {
            "tName": "Node",
            "asm": "LayoutEngine"
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
            "tName": "Option<(string[] * string[] * FsRootDll.LibraryJS+LayoutEngineModule+Measures)>",
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
            "tName": "Option<(string[] * string[] * FsRootDll.LibraryJS+LayoutEngineModule+Measures)>",
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
            "tName": "Option<FsRootDll.LibraryJS+LayoutEngineModule+Measures>",
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
      "moName": "FsRootDll.LibraryJS+LayoutEngineModule",
      "methods": [
        {
          "meName": "newLyt",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+LayoutEngine",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
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
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
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
            "tName": "IEnumerable<FsRootDll.LibraryJS+AppFramework+PlugInQuery>",
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
            "tName": "IEnumerable<FsRootDll.LibraryJS+AppFramework+PlugInAction>",
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
            "tName": "IEnumerable<FsRootDll.LibraryJS+AppFramework+PlugInView>",
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
            "tName": "IEnumerable<FsRootDll.LibraryJS+AppFramework+PlugInVar>",
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
            "tName": "IEnumerable<FsRootDll.LibraryJS+AppFramework+PlugInDoc>",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
            },
            {
              "tName": "Token",
              "asm": "LayoutEngine"
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
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
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
              "asm": "LayoutEngine"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.LibraryJS+NewLY+P",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
            },
            {
              "tName": "FsRootDll.LibraryJS+AppFramework+P<'a>",
              "asm": "LayoutEngine"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRootDll.LibraryJS+NewLY",
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
              "tName": "FsRootDll.LibraryJS+LayoutEngine",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "generateEntries",
          "isField": 0,
          "type": {
            "tName": "(IEnumerable<(string * FsRootDll.LibraryJS+LayoutEngineModule+Syntax+Entry)> -> IEnumerable<FsRootDll.LibraryJS+LayoutEngineModule+LayoutEntry>)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "defTemplateM",
          "isField": 1,
          "type": {
            "tName": "((FsRootDll.LibraryJS+AppFramework+PlugInName * string * FsRootDll.LibraryJS+LayoutEngineModule+Syntax+TemplateDef) -> (unit -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defSplitterM",
          "isField": 1,
          "type": {
            "tName": "((FsRootDll.LibraryJS+AppFramework+PlugInName * string * bool * FsRootDll.LibraryJS+LayoutEngineModule+Measures * FsRootDll.LibraryJS+LayoutEngineModule+Syntax+DocRef * FsRootDll.LibraryJS+LayoutEngineModule+Syntax+DocRef) -> (unit -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defViewJSM",
          "isField": 1,
          "type": {
            "tName": "((FsRootDll.LibraryJS+AppFramework+PlugInName * string * List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ParmRef>) -> View<string>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defViewM",
          "isField": 1,
          "type": {
            "tName": "((FsRootDll.LibraryJS+AppFramework+PlugInName * string * List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ParmRef>) -> View<string>)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defConcatM",
          "isField": 1,
          "type": {
            "tName": "((FsRootDll.LibraryJS+AppFramework+PlugInName * string * List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+NodeRef>) -> (unit -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defElementM",
          "isField": 1,
          "type": {
            "tName": "((FsRootDll.LibraryJS+AppFramework+PlugInName * string * string * FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ParmRef * List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+NodeRef>) -> (unit -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defTextAreaM",
          "isField": 1,
          "type": {
            "tName": "((FsRootDll.LibraryJS+AppFramework+PlugInName * string * FsRootDll.LibraryJS+LayoutEngineModule+Syntax+VarRef * FsRootDll.LibraryJS+LayoutEngineModule+Syntax+AttrVal[]) -> (unit -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defInputM",
          "isField": 1,
          "type": {
            "tName": "((FsRootDll.LibraryJS+AppFramework+PlugInName * string * FsRootDll.LibraryJS+LayoutEngineModule+Syntax+VarRef * FsRootDll.LibraryJS+LayoutEngineModule+Syntax+AttrVal[]) -> (unit -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defButtonM",
          "isField": 1,
          "type": {
            "tName": "((FsRootDll.LibraryJS+AppFramework+PlugInName * string * FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ActRef * FsRootDll.LibraryJS+LayoutEngineModule+Syntax+AttrVal[] * List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+TextVal>) -> (unit -> Doc))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defActionsM",
          "isField": 1,
          "type": {
            "tName": "((FsRootDll.LibraryJS+AppFramework+PlugInName * string * List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ActRef>) -> FsRootDll.LibraryJS+AppFramework+ActFunction)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defActionM",
          "isField": 1,
          "type": {
            "tName": "((FsRootDll.LibraryJS+AppFramework+PlugInName * string * FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ActRef * List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ParmRef>) -> FsRootDll.LibraryJS+AppFramework+ActFunction)",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "defDocFM",
          "isField": 1,
          "type": {
            "tName": "((FsRootDll.LibraryJS+AppFramework+PlugInName * string * FsRootDll.LibraryJS+LayoutEngineModule+Syntax+DocRef * List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ParmRef>) -> Lazy<FsRootDll.LibraryJS+AppFramework+DocFunction>)",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
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
            "tName": "((FsRootDll.LibraryJS+AppFramework+PlugInName * string * string) -> Var<string>)",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+TemplateDef",
              "asm": "LayoutEngine"
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
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
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
              "tName": "FsRootDll.LibraryJS+LayoutEngineModule+Measures",
              "asm": "LayoutEngine"
            },
            {
              "tName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+DocRef",
              "asm": "LayoutEngine"
            },
            {
              "tName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+DocRef",
              "asm": "LayoutEngine"
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
              "tName": "IEnumerable<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+AttrVal>",
              "asm": "netstandard"
            },
            {
              "tName": "List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+TextVal>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "defDocF",
          "isField": 0,
          "type": {
            "tName": "Lazy<FsRootDll.LibraryJS+AppFramework+DocFunction>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+DocRef",
              "asm": "LayoutEngine"
            },
            {
              "tName": "List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ParmRef>",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+NodeRef>",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
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
              "tName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ParmRef",
              "asm": "LayoutEngine"
            },
            {
              "tName": "List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+NodeRef>",
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
              "tName": "IEnumerable<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+AttrVal>",
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
              "tName": "IEnumerable<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+AttrVal>",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ParmRef>",
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
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ParmRef>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "defActions",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+ActFunction",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ActRef>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "defAction",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+ActFunction",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ActRef",
              "asm": "LayoutEngine"
            },
            {
              "tName": "List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ParmRef>",
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
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ParmRef -> ((Object -> unit) -> unit))>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "getParam2D",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ParmRef -> string)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "itemRefToAbsolute",
          "isField": 0,
          "type": {
            "tName": "(FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ItemRef -> string)",
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
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ParmRef -> View<Object>)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "actRefToActD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ActRef -> FsRootDll.LibraryJS+AppFramework+PlugInAction)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "varRefToVarD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(FsRootDll.LibraryJS+LayoutEngineModule+Syntax+VarRef -> Var<string>)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "nodeRefToDocD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<(FsRootDll.LibraryJS+LayoutEngineModule+Syntax+NodeRef -> Doc)>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "|ActRVs|",
          "isField": 0,
          "type": {
            "tName": "List<FsRootDll.LibraryJS+LayoutEngineModule+Syntax+TextVal>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ActRef",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "textValToTextType",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+Extract0+TextType",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+TextVal",
              "asm": "LayoutEngine"
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
              "tName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ItemRef",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "itemRefToTextType",
          "isField": 0,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+Extract0+TextType",
            "asm": "LayoutEngine"
          },
          "parms": [
            {
              "tName": "FsRootDll.LibraryJS+LayoutEngineModule+Syntax+ItemRef",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "callDocPFn",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
              "asm": "LayoutEngine"
            },
            {
              "tName": "FsRootDll.LibraryJS+AppFramework+P<FsRootDll.LibraryJS+AppFramework+Fun<'a, Doc>>",
              "asm": "LayoutEngine"
            }
          ]
        },
        {
          "meName": "split2",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+P<FsRootDll.LibraryJS+AppFramework+Fun<Doc, Doc>>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "split",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+P<FsRootDll.LibraryJS+AppFramework+Fun<Doc, Doc>>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "appFwk",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+P<FsRootDll.LibraryJS+AppFramework+Fun<IEnumerable<Doc>, Doc>>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "main2",
          "isField": 1,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "main",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+P<FsRootDll.LibraryJS+AppFramework+Fun<IEnumerable<Doc>, Doc>>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "main1",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+P<FsRootDll.LibraryJS+AppFramework+Fun<string, string>>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "main0",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+P<FsRootDll.LibraryJS+AppFramework+Fun<Double, string>>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "aString",
          "isField": 1,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "sayHello",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+P<FsRootDll.LibraryJS+AppFramework+Fun<IEnumerable<Doc>, Doc>>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "now",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+P<FsRootDll.LibraryJS+AppFramework+Fun<string, string>>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "enterName",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+P<FsRootDll.LibraryJS+AppFramework+Fun<string, string>>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "checkName",
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
          "meName": "name",
          "isField": 1,
          "type": {
            "tName": "Var<string>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "currentPlugInNameD",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.Library+Monads+Depend+Depend<FsRootDll.LibraryJS+AppFramework+PlugInName>",
            "asm": "LayoutEngine"
          },
          "parms": []
        },
        {
          "meName": "currentPlugInNameDef",
          "isField": 1,
          "type": {
            "tName": "FsRootDll.LibraryJS+AppFramework+PlugInName",
            "asm": "LayoutEngine"
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
      "moName": "FsRootDll.LibraryJS",
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
      "moName": "StartupCode$LayoutEngine$LayoutEngine",
      "methods": []
    },
    {
      "moName": "Generated$LayoutEngine",
      "methods": [
        {
          "meName": "LayoutEngine_GeneratedPrintf.p",
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
          "meName": "LayoutEngine_GeneratedPrintf.p$1",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_Templates.wcompsplitterver",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_Templates.wcompsplitterhor",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_Templates.appframework",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_Templates.tile",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_Templates.action",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_Templates.namevalue",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_Templates.namevalueinput",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$2",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$26",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$25",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$24",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$23",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$22",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$21",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$20",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$3",
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
          "meName": "LayoutEngine_GeneratedPrintf.p$19",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$17",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$18",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$15",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$16",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$14",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$13",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$7",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$9",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$10",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$12",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$11",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$8",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$4",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$6",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$5",
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
          "meName": "LayoutEngine_GeneratedPrintf.p$28",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_GeneratedPrintf.p$27",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_Templates.fixedsplitterhor",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_Templates.fixedsplitterver",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "LayoutEngine_Templates.appfwkclient",
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
      "code": "(function()\r\n{\r\n \"use strict\";\r\n var Global,FsRootDll,Library,StringId,GuidId,Dict,WebSharper,Obj,Monads,State,CEBuilder,Operators,Result,Builder,Operators$1,Depend,DependBuilder,Operators$2,String,ParseO,LibraryJS,View,Var,ListModel,REGEX,Hoverable,Hoverable$1,ResizeObserver,WebComponent,WcTabStrip,WcTabStripT,WcSplitter,WcSplitterT,AppFrameworkTemplate,AppFramework,PlgElemName,PlugInName,PlugInVar,PlugInView,PlugInDoc,PlugInAction,PlugInQuery,PlugIn,PlugInBuilder,Fun,P,Val,AAttr,Extract0,ListModelData,LM,StartAppFramework,AppFrameworkUI,LayoutEngine,LayoutEngineModule,Measures,Syntax,RefType,TemplateDef,Layout,NewLY,P$1,SC$1,LayoutEngine_GeneratedPrintf,GeneratedPrintf,LayoutEngine_Templates,IntelliFactory,Runtime,Enumerator,Result$1,Arrays,List,Operators$3,Strings,Seq,Utils,Slice,Char,Unchecked,Concurrency,CancellationTokenSource,console,UI,View$1,Var$1,Collections,FSharpSet,FromView,Doc,DomUtility,AttrModule,AttrProxy,Var$2,Node,Client,Templates,Reflect,Object,Lazy,Templating,Runtime$1,Server,ProviderBuilder,Handler,TemplateInstance,ListModel$1,FSharpMap,Math,Dictionary,MatchFailureException,System,Guid,DateUtil,Numeric,Attrs,Input,Mouse,Keyboard,Date;\r\n Global=self;\r\n FsRootDll=Global.FsRootDll=Global.FsRootDll||{};\r\n Library=FsRootDll.Library=FsRootDll.Library||{};\r\n StringId=Library.StringId=Library.StringId||{};\r\n GuidId=Library.GuidId=Library.GuidId||{};\r\n Dict=Library.Dict=Library.Dict||{};\r\n WebSharper=Global.WebSharper;\r\n Obj=WebSharper&&WebSharper.Obj;\r\n Monads=Library.Monads=Library.Monads||{};\r\n State=Monads.State=Monads.State||{};\r\n CEBuilder=State.CEBuilder=State.CEBuilder||{};\r\n Operators=State.Operators=State.Operators||{};\r\n Result=Monads.Result=Monads.Result||{};\r\n Builder=Result.Builder=Result.Builder||{};\r\n Operators$1=Result.Operators=Result.Operators||{};\r\n Depend=Monads.Depend=Monads.Depend||{};\r\n DependBuilder=Depend.DependBuilder=Depend.DependBuilder||{};\r\n Operators$2=Depend.Operators=Depend.Operators||{};\r\n String=Library.String=Library.String||{};\r\n ParseO=Library.ParseO=Library.ParseO||{};\r\n LibraryJS=FsRootDll.LibraryJS=FsRootDll.LibraryJS||{};\r\n View=LibraryJS.View=LibraryJS.View||{};\r\n Var=LibraryJS.Var=LibraryJS.Var||{};\r\n ListModel=LibraryJS.ListModel=LibraryJS.ListModel||{};\r\n REGEX=LibraryJS.REGEX=LibraryJS.REGEX||{};\r\n Hoverable=LibraryJS.Hoverable=LibraryJS.Hoverable||{};\r\n Hoverable$1=Hoverable.Hoverable=Hoverable.Hoverable||{};\r\n ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};\r\n WebComponent=LibraryJS.WebComponent=LibraryJS.WebComponent||{};\r\n WcTabStrip=WebComponent.WcTabStrip=WebComponent.WcTabStrip||{};\r\n WcTabStripT=WcTabStrip.WcTabStripT=WcTabStrip.WcTabStripT||{};\r\n WcSplitter=WebComponent.WcSplitter=WebComponent.WcSplitter||{};\r\n WcSplitterT=WcSplitter.WcSplitterT=WcSplitter.WcSplitterT||{};\r\n AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate||{};\r\n AppFramework=LibraryJS.AppFramework=LibraryJS.AppFramework||{};\r\n PlgElemName=AppFramework.PlgElemName=AppFramework.PlgElemName||{};\r\n PlugInName=AppFramework.PlugInName=AppFramework.PlugInName||{};\r\n PlugInVar=AppFramework.PlugInVar=AppFramework.PlugInVar||{};\r\n PlugInView=AppFramework.PlugInView=AppFramework.PlugInView||{};\r\n PlugInDoc=AppFramework.PlugInDoc=AppFramework.PlugInDoc||{};\r\n PlugInAction=AppFramework.PlugInAction=AppFramework.PlugInAction||{};\r\n PlugInQuery=AppFramework.PlugInQuery=AppFramework.PlugInQuery||{};\r\n PlugIn=AppFramework.PlugIn=AppFramework.PlugIn||{};\r\n PlugInBuilder=AppFramework.PlugInBuilder=AppFramework.PlugInBuilder||{};\r\n Fun=AppFramework.Fun=AppFramework.Fun||{};\r\n P=AppFramework.P=AppFramework.P||{};\r\n Val=AppFramework.Val=AppFramework.Val||{};\r\n AAttr=AppFramework.AAttr=AppFramework.AAttr||{};\r\n Extract0=AppFramework.Extract0=AppFramework.Extract0||{};\r\n ListModelData=AppFramework.ListModelData=AppFramework.ListModelData||{};\r\n LM=LibraryJS.LM=LibraryJS.LM||{};\r\n StartAppFramework=LibraryJS.StartAppFramework=LibraryJS.StartAppFramework||{};\r\n AppFrameworkUI=LibraryJS.AppFrameworkUI=LibraryJS.AppFrameworkUI||{};\r\n LayoutEngine=LibraryJS.LayoutEngine=LibraryJS.LayoutEngine||{};\r\n LayoutEngineModule=LibraryJS.LayoutEngineModule=LibraryJS.LayoutEngineModule||{};\r\n Measures=LayoutEngineModule.Measures=LayoutEngineModule.Measures||{};\r\n Syntax=LayoutEngineModule.Syntax=LayoutEngineModule.Syntax||{};\r\n RefType=Syntax.RefType=Syntax.RefType||{};\r\n TemplateDef=Syntax.TemplateDef=Syntax.TemplateDef||{};\r\n Layout=LayoutEngineModule.Layout=LayoutEngineModule.Layout||{};\r\n NewLY=LibraryJS.NewLY=LibraryJS.NewLY||{};\r\n P$1=NewLY.P=NewLY.P||{};\r\n SC$1=Global.StartupCode$LayoutEngine$LayoutEngine=Global.StartupCode$LayoutEngine$LayoutEngine||{};\r\n LayoutEngine_GeneratedPrintf=Global.LayoutEngine_GeneratedPrintf=Global.LayoutEngine_GeneratedPrintf||{};\r\n GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};\r\n LayoutEngine_Templates=Global.LayoutEngine_Templates=Global.LayoutEngine_Templates||{};\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime=IntelliFactory&&IntelliFactory.Runtime;\r\n Enumerator=WebSharper&&WebSharper.Enumerator;\r\n Result$1=WebSharper&&WebSharper.Result;\r\n Arrays=WebSharper&&WebSharper.Arrays;\r\n List=WebSharper&&WebSharper.List;\r\n Operators$3=WebSharper&&WebSharper.Operators;\r\n Strings=WebSharper&&WebSharper.Strings;\r\n Seq=WebSharper&&WebSharper.Seq;\r\n Utils=WebSharper&&WebSharper.Utils;\r\n Slice=WebSharper&&WebSharper.Slice;\r\n Char=WebSharper&&WebSharper.Char;\r\n Unchecked=WebSharper&&WebSharper.Unchecked;\r\n Concurrency=WebSharper&&WebSharper.Concurrency;\r\n CancellationTokenSource=WebSharper&&WebSharper.CancellationTokenSource;\r\n console=Global.console;\r\n UI=WebSharper&&WebSharper.UI;\r\n View$1=UI&&UI.View;\r\n Var$1=UI&&UI.Var;\r\n Collections=WebSharper&&WebSharper.Collections;\r\n FSharpSet=Collections&&Collections.FSharpSet;\r\n FromView=UI&&UI.FromView;\r\n Doc=UI&&UI.Doc;\r\n DomUtility=UI&&UI.DomUtility;\r\n AttrModule=UI&&UI.AttrModule;\r\n AttrProxy=UI&&UI.AttrProxy;\r\n Var$2=UI&&UI.Var$1;\r\n Node=Global.Node;\r\n Client=UI&&UI.Client;\r\n Templates=Client&&Client.Templates;\r\n Reflect=Global.Reflect;\r\n Object=Global.Object;\r\n Lazy=WebSharper&&WebSharper.Lazy;\r\n Templating=UI&&UI.Templating;\r\n Runtime$1=Templating&&Templating.Runtime;\r\n Server=Runtime$1&&Runtime$1.Server;\r\n ProviderBuilder=Server&&Server.ProviderBuilder;\r\n Handler=Server&&Server.Handler;\r\n TemplateInstance=Server&&Server.TemplateInstance;\r\n ListModel$1=UI&&UI.ListModel;\r\n FSharpMap=Collections&&Collections.FSharpMap;\r\n Math=Global.Math;\r\n Dictionary=Collections&&Collections.Dictionary;\r\n MatchFailureException=WebSharper&&WebSharper.MatchFailureException;\r\n System=Global.System;\r\n Guid=System&&System.Guid;\r\n DateUtil=WebSharper&&WebSharper.DateUtil;\r\n Numeric=WebSharper&&WebSharper.Numeric;\r\n Attrs=UI&&UI.Attrs;\r\n Input=UI&&UI.Input;\r\n Mouse=Input&&Input.Mouse;\r\n Keyboard=Input&&Input.Keyboard;\r\n Date=Global.Date;\r\n StringId=Library.StringId=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,StringId);\r\n GuidId=Library.GuidId=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,GuidId);\r\n Dict.add=function(key,v,dict)\r\n {\r\n  if(dict.ContainsKey(key))\r\n   dict.set_Item(key,v);\r\n  else\r\n   dict.Add(key,v);\r\n };\r\n CEBuilder=State.CEBuilder=Runtime.Class({\r\n  Delay:function(f)\r\n  {\r\n   return f();\r\n  },\r\n  Return:function(v)\r\n  {\r\n   return function(s)\r\n   {\r\n    return State.rtn(v,s);\r\n   };\r\n  },\r\n  Bind:function(m,f)\r\n  {\r\n   return function(s)\r\n   {\r\n    return State.bind(f,m,s);\r\n   };\r\n  }\r\n },Obj,CEBuilder);\r\n CEBuilder.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },CEBuilder);\r\n Operators.op_BarGreaterGreater=function(ma,f)\r\n {\r\n  return(State.map(f))(ma);\r\n };\r\n Operators.op_GreaterGreaterEquals=function(ma,f)\r\n {\r\n  return function(s)\r\n  {\r\n   return State.bind(f,ma,s);\r\n  };\r\n };\r\n State.state=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.state;\r\n };\r\n State.map=function(f)\r\n {\r\n  var f$1;\r\n  f$1=function(x)\r\n  {\r\n   var $1;\r\n   $1=f(x);\r\n   return function($2)\r\n   {\r\n    return State.rtn($1,$2);\r\n   };\r\n  };\r\n  return(Runtime.Curried3(State.bind))(f$1);\r\n };\r\n State.bind=function(f,ma,s1)\r\n {\r\n  var p;\r\n  p=ma(s1);\r\n  return(f(p[1]))(p[0]);\r\n };\r\n State.rtn=function(v,s)\r\n {\r\n  return[s,v];\r\n };\r\n Builder=Result.Builder=Runtime.Class({\r\n  For:function(sequence,body)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return this.Using(Enumerator.Get(sequence),function(_enum)\r\n   {\r\n    return $this.While(function()\r\n    {\r\n     return _enum.MoveNext();\r\n    },$this.Delay(function()\r\n    {\r\n     return body(_enum.Current());\r\n    }));\r\n   });\r\n  },\r\n  While:function(guard,body)\r\n  {\r\n   function whileLoop(guard$1,body$1)\r\n   {\r\n    return guard$1()?Result$1.Bind(function()\r\n    {\r\n     return whileLoop(guard$1,body$1);\r\n    },body$1()):Result.rtn();\r\n   }\r\n   return whileLoop(guard,body);\r\n  },\r\n  Using:function(disposable,body)\r\n  {\r\n   try\r\n   {\r\n    return body(disposable);\r\n   }\r\n   finally\r\n   {\r\n    disposable.Dispose();\r\n   }\r\n  },\r\n  TryFinally:function(body,compensation)\r\n  {\r\n   try\r\n   {\r\n    return body();\r\n   }\r\n   finally\r\n   {\r\n    compensation();\r\n   }\r\n  },\r\n  TryWith:function(body,handler)\r\n  {\r\n   try\r\n   {\r\n    return body();\r\n   }\r\n   catch(e)\r\n   {\r\n    return handler(e);\r\n   }\r\n  },\r\n  Run:function(f)\r\n  {\r\n   return Result$1.Bind(f,{\r\n    $:0,\r\n    $0:null\r\n   });\r\n  },\r\n  Combine:function(a,b)\r\n  {\r\n   return Result$1.Bind(b,a);\r\n  },\r\n  Delay:Global.id,\r\n  Zero:function()\r\n  {\r\n   return Result.rtn();\r\n  },\r\n  Bind:function(w,r)\r\n  {\r\n   return Result$1.Bind(r,w);\r\n  },\r\n  ReturnFrom:Global.id,\r\n  Return:function(x)\r\n  {\r\n   return Result.rtn(x);\r\n  }\r\n },Obj,Builder);\r\n Builder.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },Builder);\r\n Operators$1.result=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.result$1;\r\n };\r\n Operators$1.rtn=function(v)\r\n {\r\n  return Result.rtn(v);\r\n };\r\n Operators$1.op_GreaterEqualsGreater=function(f,g,v)\r\n {\r\n  return Operators$1.op_GreaterGreaterEquals(f(v),g);\r\n };\r\n Operators$1.op_RightShift=function(f,g,v)\r\n {\r\n  return Operators$1.op_BarGreaterGreater(f(v),g);\r\n };\r\n Operators$1.op_GreaterGreaterEquals=function(v,f)\r\n {\r\n  return Result$1.Bind(f,v);\r\n };\r\n Operators$1.op_BarGreaterGreater=function(v,f)\r\n {\r\n  return Result$1.Map(f,v);\r\n };\r\n Result.result=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.result;\r\n };\r\n Result.sequenceSeq=function(sq)\r\n {\r\n  return Result.traverseSeq(Global.id,sq);\r\n };\r\n Result.traverseSeq=function(f,sq)\r\n {\r\n  return Result$1.Map(Global.id,Arrays.foldBack(function(head,tail)\r\n  {\r\n   return Result.op_GreaterGreaterEquals(f(head),function(h)\r\n   {\r\n    return Result.op_GreaterGreaterEquals(tail,function(t)\r\n    {\r\n     return Result.rtn(new List.T({\r\n      $:1,\r\n      $0:h,\r\n      $1:t\r\n     }));\r\n    });\r\n   });\r\n  },Arrays.ofSeq(sq),Result.rtn(List.T.Empty)));\r\n };\r\n Result.op_GreaterGreaterEquals=function(r,f)\r\n {\r\n  return Result$1.Bind(f,r);\r\n };\r\n Result.absorbO=function(f,vOR)\r\n {\r\n  return Result$1.Bind(function(v)\r\n  {\r\n   return Result.ofOption(f,v);\r\n  },vOR);\r\n };\r\n Result.insertO=function(vRO)\r\n {\r\n  var o;\r\n  o=vRO==null?null:{\r\n   $:1,\r\n   $0:Result$1.Map(function(a)\r\n   {\r\n    return{\r\n     $:1,\r\n     $0:a\r\n    };\r\n   },vRO.$0)\r\n  };\r\n  return o==null?{\r\n   $:0,\r\n   $0:null\r\n  }:o.$0;\r\n };\r\n Result.ofOption=function(f,vO)\r\n {\r\n  var o;\r\n  o=vO==null?null:{\r\n   $:1,\r\n   $0:{\r\n    $:0,\r\n    $0:vO.$0\r\n   }\r\n  };\r\n  return o==null?function(x)\r\n  {\r\n   return Library.Error(f(x));\r\n  }():o.$0;\r\n };\r\n Result.get=function(r)\r\n {\r\n  return Result.defaultWith(function(x)\r\n  {\r\n   return Operators$3.FailWith(Global.String(x));\r\n  },r);\r\n };\r\n Result.iter=function(fE,f,r)\r\n {\r\n  Result.defaultWith(fE,Result$1.Map(f,r));\r\n };\r\n Result.failIfFalse=function(m,v)\r\n {\r\n  return!v?Library.Error(m):{\r\n   $:0,\r\n   $0:null\r\n  };\r\n };\r\n Result.failIfTrue=function(m,v)\r\n {\r\n  return v?Library.Error(m):{\r\n   $:0,\r\n   $0:null\r\n  };\r\n };\r\n Result.defaultValue=function(d,r)\r\n {\r\n  return r.$==1?d:r.$0;\r\n };\r\n Result.defaultWith=function(f,r)\r\n {\r\n  return r.$==1?f(r.$0):r.$0;\r\n };\r\n Result.toOption=function(r)\r\n {\r\n  return r.$==0?{\r\n   $:1,\r\n   $0:r.$0\r\n  }:null;\r\n };\r\n Result.flatten=function(r)\r\n {\r\n  return Result$1.Bind(Global.id,r);\r\n };\r\n Result.join=function(r)\r\n {\r\n  return Result$1.Bind(Global.id,r);\r\n };\r\n Result.rtn=function(a)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:a\r\n  };\r\n };\r\n Result.errorf=function(fmt)\r\n {\r\n  return fmt(Library.Error);\r\n };\r\n DependBuilder=Depend.DependBuilder=Runtime.Class({\r\n  Delay:function(f)\r\n  {\r\n   return f();\r\n  },\r\n  Return:function(v)\r\n  {\r\n   return Depend.rtn(v);\r\n  },\r\n  Bind:function(m,f)\r\n  {\r\n   return Depend.bind(f,m);\r\n  }\r\n },Obj,DependBuilder);\r\n DependBuilder.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },DependBuilder);\r\n Operators$2.op_GreaterMultiplyGreater=function(g,mf)\r\n {\r\n  var b;\r\n  b=Operators$2.depend();\r\n  return b.Delay(function()\r\n  {\r\n   return b.Bind(mf,function(a)\r\n   {\r\n    return b.Return(function(x)\r\n    {\r\n     return a(g(x));\r\n    });\r\n   });\r\n  });\r\n };\r\n Operators$2.op_LessMultiplyGreater=function(mf,mp)\r\n {\r\n  return Depend.apply(mf,mp);\r\n };\r\n Operators$2.op_GreaterEqualsMultiply=function(mp,mf)\r\n {\r\n  return Depend.apply(mf,mp);\r\n };\r\n Operators$2.op_BarMultiplyGreater=function(p,mf)\r\n {\r\n  return Depend.apply(mf,(Operators$2.rtn())(p));\r\n };\r\n Operators$2.op_BarGreaterGreater=function(ma,f)\r\n {\r\n  return(Depend.map(f))(ma);\r\n };\r\n Operators$2.op_GreaterGreaterEquals=function(ma,f)\r\n {\r\n  return Depend.bind(f,ma);\r\n };\r\n Operators$2.depend=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.depend$1;\r\n };\r\n Operators$2.rtn=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rtn;\r\n };\r\n Depend.toString=function(dep)\r\n {\r\n  return Strings.concat(\"\\n\",Seq.sort(Seq.distinct(Seq.map(function(a)\r\n  {\r\n   var $1,$2;\r\n   return(a.$==0?($2=a.$0,$2!=null&&$2.$==1)?($1=[a.$1,a.$0.$0[0],a.$0.$0[1]],true):($1=a,false):($1=a,false))?(((Runtime.Curried3(function($3,$4,$5)\r\n   {\r\n    return $3(Strings.PadRight(Utils.toSafe($4),50)+\" \"+Utils.prettyPrint($5));\r\n   }))(Global.id))($1[1]))($1[2]):Global.String($1);\r\n  },Depend.getDependencies(dep)))));\r\n };\r\n Depend.getDependencies=function(dep)\r\n {\r\n  return List.rev(List.filter(function(a)\r\n  {\r\n   return a.$==0?a.$0!=null:true;\r\n  },function(lst,dep$1)\r\n  {\r\n   var $1,lst2,k,v,k$1;\r\n   while(true)\r\n    {\r\n     lst2=new List.T({\r\n      $:1,\r\n      $0:dep$1,\r\n      $1:lst\r\n     });\r\n     if(dep$1.$==1)\r\n      return lst2;\r\n     else\r\n      if($1=dep$1.$0,$1!=null&&$1.$==1)\r\n       {\r\n        k=dep$1.$1;\r\n        v=dep$1.$0.$0[1];\r\n        lst=lst2;\r\n        dep$1=k(v);\r\n       }\r\n      else\r\n       {\r\n        k$1=dep$1.$1;\r\n        lst=lst2;\r\n        dep$1=k$1(void 0);\r\n       }\r\n    }\r\n  }(List.T.Empty,dep)));\r\n };\r\n Depend.depend=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.depend;\r\n };\r\n Depend.resolver=function(lst,depend)\r\n {\r\n  function resolve(a)\r\n  {\r\n   var $1,k,nm,o,o$1;\r\n   function f(t)\r\n   {\r\n    return t[0];\r\n   }\r\n   function g(y)\r\n   {\r\n    return nm===y;\r\n   }\r\n   return a.$==1?a.$0:($1=a.$0,$1!=null&&$1.$==1)?(k=a.$1,(nm=a.$0.$0[0],resolve((o=(o$1=Seq.tryFind(function(x)\r\n   {\r\n    return g(f(x));\r\n   },lst),o$1==null?null:{\r\n    $:1,\r\n    $0:k(o$1.$0[1])\r\n   }),o==null?k(a.$0.$0[1]):o.$0)))):resolve(a.$1(void 0));\r\n  }\r\n  return resolve(depend);\r\n };\r\n Depend.replacerDef=function(lst,depend)\r\n {\r\n  function replace(a)\r\n  {\r\n   var $1,k,nm,o,o$1,$2,f;\r\n   function p(a$1,a$2)\r\n   {\r\n    return a$2[0]===nm;\r\n   }\r\n   return a.$==1?{\r\n    $:1,\r\n    $0:a.$0\r\n   }:($1=a.$0,$1!=null&&$1.$==1)?(k=a.$1,(nm=a.$0.$0[0],(o=(o$1=Seq.tryFind(function($3)\r\n   {\r\n    return p($3[0],$3[1]);\r\n   },lst),o$1==null?null:{\r\n    $:1,\r\n    $0:($2=o$1.$0,{\r\n     $:0,\r\n     $0:{\r\n      $:1,\r\n      $0:[$2[0],$2[1][1]]\r\n     },\r\n     $1:function(x)\r\n     {\r\n      return replace(k(x));\r\n     }\r\n    })\r\n   }),o==null?{\r\n    $:0,\r\n    $0:{\r\n     $:1,\r\n     $0:[nm,a.$0.$0[1]]\r\n    },\r\n    $1:function(x)\r\n    {\r\n     return replace(k(x));\r\n    }\r\n   }:o.$0))):{\r\n    $:0,\r\n    $0:null,\r\n    $1:(f=a.$1,function(x)\r\n    {\r\n     return replace(f(x));\r\n    })\r\n   };\r\n  }\r\n  return replace(depend);\r\n };\r\n Depend.replacer=function(lst,depend)\r\n {\r\n  function replace(a)\r\n  {\r\n   var $1,k,nm,o,o$1,f;\r\n   function f$1(t)\r\n   {\r\n    return t[0];\r\n   }\r\n   function g(y)\r\n   {\r\n    return nm===y;\r\n   }\r\n   return a.$==1?{\r\n    $:1,\r\n    $0:a.$0\r\n   }:($1=a.$0,$1!=null&&$1.$==1)?(k=a.$1,(nm=a.$0.$0[0],(o=(o$1=Seq.tryFind(function(x)\r\n   {\r\n    return g(f$1(x));\r\n   },lst),o$1==null?null:{\r\n    $:1,\r\n    $0:{\r\n     $:0,\r\n     $0:{\r\n      $:1,\r\n      $0:[nm,o$1.$0[1]]\r\n     },\r\n     $1:function(x)\r\n     {\r\n      return replace(k(x));\r\n     }\r\n    }\r\n   }),o==null?{\r\n    $:0,\r\n    $0:{\r\n     $:1,\r\n     $0:[nm,a.$0.$0[1]]\r\n    },\r\n    $1:function(x)\r\n    {\r\n     return replace(k(x));\r\n    }\r\n   }:o.$0))):{\r\n    $:0,\r\n    $0:null,\r\n    $1:(f=a.$1,function(x)\r\n    {\r\n     return replace(f(x));\r\n    })\r\n   };\r\n  }\r\n  return replace(depend);\r\n };\r\n Depend.apply=function(fR,vR)\r\n {\r\n  return Depend.bind(function(b)\r\n  {\r\n   return(Depend.map(b))(vR);\r\n  },fR);\r\n };\r\n Depend.map=function(f)\r\n {\r\n  var f$1;\r\n  f$1=function(x)\r\n  {\r\n   return Depend.rtn(f(x));\r\n  };\r\n  return function(p)\r\n  {\r\n   return Depend.bind(f$1,p);\r\n  };\r\n };\r\n Depend.rtn=function(a)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:a\r\n  };\r\n };\r\n Depend.bind=function(f,pa)\r\n {\r\n  function bindR(a)\r\n  {\r\n   var v,k;\r\n   return a.$==1?(v=a.$0,{\r\n    $:0,\r\n    $0:null,\r\n    $1:function()\r\n    {\r\n     return f(v);\r\n    }\r\n   }):(k=a.$1,{\r\n    $:0,\r\n    $0:a.$0,\r\n    $1:function(p)\r\n    {\r\n     return bindR(k(p));\r\n    }\r\n   });\r\n  }\r\n  return bindR(pa);\r\n };\r\n Depend.dependByName=function(nm,defF,kf)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:{\r\n    $:1,\r\n    $0:[nm,defF]\r\n   },\r\n   $1:function(f)\r\n   {\r\n    return{\r\n     $:1,\r\n     $0:kf(f)\r\n    };\r\n   }\r\n  };\r\n };\r\n String.thousands=function(n)\r\n {\r\n  var v,r,s;\r\n  v=Global.String(n);\r\n  r=v.length%3;\r\n  s=r===0?3:r;\r\n  return Strings.concat(\",\",List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.append([Slice.string(v,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:s-1\r\n   })],Seq.delay(function()\r\n   {\r\n    return Seq.map(function(i)\r\n    {\r\n     return Slice.string(v,{\r\n      $:1,\r\n      $0:i*3+s\r\n     },{\r\n      $:1,\r\n      $0:i*3+s+2\r\n     });\r\n    },Operators$3.range(0,((v.length-s)/3>>0)-1));\r\n   }));\r\n  })));\r\n };\r\n String.EndsWith=function(ends,s)\r\n {\r\n  return Strings.EndsWith(s,ends)?{\r\n   $:1,\r\n   $0:Slice.string(s,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:s.length-ends.length-1\r\n   })\r\n  }:null;\r\n };\r\n String.StartsWith=function(start,s)\r\n {\r\n  return Strings.StartsWith(s,start)?{\r\n   $:1,\r\n   $0:Slice.string(s,{\r\n    $:1,\r\n    $0:start.length\r\n   },null)\r\n  }:null;\r\n };\r\n String.skipLastLine=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.skipLastLine;\r\n };\r\n String.indentStr=function(i)\r\n {\r\n  function f(s)\r\n  {\r\n   return String.indent(i,s);\r\n  }\r\n  function g(s)\r\n  {\r\n   return Strings.concat(\"\\n\",s);\r\n  }\r\n  return function(x)\r\n  {\r\n   return g(f(x));\r\n  };\r\n };\r\n String.unindentStr=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.unindentStr;\r\n };\r\n String.indent=function(n,s)\r\n {\r\n  var x,x$1;\r\n  x=Strings.SplitChars(s,[\"\\n\"],0);\r\n  return Seq.map((x$1=Strings.replicate(n,\" \"),function(y)\r\n  {\r\n   return x$1+y;\r\n  }),x);\r\n };\r\n String.unindent=function(s)\r\n {\r\n  var lines,n,o,o$1;\r\n  lines=Strings.SplitChars(s,[\"\\n\"],0);\r\n  n=(o=Seq.tryFindIndex(function(y)\r\n  {\r\n   return\" \"!==y;\r\n  },(o$1=Seq.tryFind(function(l)\r\n  {\r\n   return Strings.Trim(l)!==\"\";\r\n  },lines),o$1==null?\"\":o$1.$0)),o==null?0:o.$0);\r\n  return Seq.filter(function(s$1)\r\n  {\r\n   return!Strings.StartsWith(s$1,\"# 1 \");\r\n  },Seq.map(function(l)\r\n  {\r\n   return l.length<=n?\"\":l.substring(n);\r\n  },lines));\r\n };\r\n String.skipFirstLine=function(txt)\r\n {\r\n  var i;\r\n  i=txt.indexOf(\"\\n\");\r\n  return i<0?\"\":Slice.string(txt,{\r\n   $:1,\r\n   $0:i+1\r\n  },null);\r\n };\r\n String.append=function(a,b)\r\n {\r\n  return a+b;\r\n };\r\n String.right=function(n,s)\r\n {\r\n  return Library[\"String.Right\"](s,n);\r\n };\r\n String.left=function(n,s)\r\n {\r\n  return Library[\"String.Left\"](s,n);\r\n };\r\n String.trim=function(s)\r\n {\r\n  return Strings.Trim(s);\r\n };\r\n String.contains=function(sub,whole)\r\n {\r\n  return whole.indexOf(sub)!=-1;\r\n };\r\n String.delimitedO=function(op,cl,txt)\r\n {\r\n  var o,$1,bef,o$1,$2;\r\n  o=String.splitInTwoO(op,txt);\r\n  return o==null?null:($1=o.$0,(bef=$1[0],(o$1=String.splitInTwoO(cl,$1[1]),o$1==null?null:{\r\n   $:1,\r\n   $0:($2=o$1.$0,[bef,$2[0],$2[1]])\r\n  })));\r\n };\r\n String.splitInTwoO=function(spl,txt)\r\n {\r\n  var i;\r\n  i=txt.indexOf(spl);\r\n  return i===-1?null:{\r\n   $:1,\r\n   $0:[Library[\"String.Left\"](txt,i),txt.substring(i+spl.length)]\r\n  };\r\n };\r\n String.splitByChar=function(c,s)\r\n {\r\n  return Strings.SplitChars(s,[c],0);\r\n };\r\n ParseO.Guid=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Guid|_|\"];\r\n };\r\n ParseO.Double=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Double|_|\"];\r\n };\r\n ParseO.Single=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Single|_|\"];\r\n };\r\n ParseO.Int64=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Int64|_|\"];\r\n };\r\n ParseO.Int=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Int|_|\"];\r\n };\r\n ParseO.Date=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1[\"|Date|_|\"];\r\n };\r\n ParseO.parseGuidO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseGuidO;\r\n };\r\n ParseO.parseDoubleO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseDoubleO;\r\n };\r\n ParseO.parseSingleO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseSingleO;\r\n };\r\n ParseO.parseInt64O=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseInt64O;\r\n };\r\n ParseO.parseIntO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseIntO;\r\n };\r\n ParseO.parseDateO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseDateO;\r\n };\r\n ParseO.parseDateO2=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.parseDateO2;\r\n };\r\n ParseO.tryParseWith=function(tryParseFunc)\r\n {\r\n  function g($1,$2)\r\n  {\r\n   return $1?{\r\n    $:1,\r\n    $0:$2\r\n   }:null;\r\n  }\r\n  return function(x)\r\n  {\r\n   return g.apply(null,tryParseFunc(x));\r\n  };\r\n };\r\n Library[\"String.get_toUnderscore\"]=function(_this,u)\r\n {\r\n  return Arrays.ofSeq(Seq.collect(Global.id,Seq.mapi(function(i,c)\r\n  {\r\n   return i>0&&Char.IsUpper(c)?List.ofArray([\"_\",c]):List.ofArray([c]);\r\n  },_this))).join(\"\");\r\n };\r\n Library[\"String.Right\"]=function(_this,n)\r\n {\r\n  var a,b;\r\n  return Library[\"String.Substring2\"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);\r\n };\r\n Library[\"String.Left\"]=function(_this,n)\r\n {\r\n  return n<0?Library[\"String.Substring2\"](_this,0,_this.length+n):Library[\"String.Substring2\"](_this,0,n);\r\n };\r\n Library[\"String.Substring2\"]=function(_this,from,n)\r\n {\r\n  var from$1,b;\r\n  while(true)\r\n   {\r\n    if(n<=0)\r\n     return\"\";\r\n    else\r\n     if(from>=_this.length)\r\n      return\"\";\r\n     else\r\n      if(from<0)\r\n       {\r\n        from$1=from;\r\n        from=0;\r\n        n=n+from$1;\r\n       }\r\n      else\r\n       return Strings.Substring(_this,from,(b=_this.length-from,Unchecked.Compare(n,b)===-1?n:b));\r\n   }\r\n };\r\n Library.delayed=function(delay,doF)\r\n {\r\n  function g()\r\n  {\r\n   return Concurrency.Return(null);\r\n  }\r\n  return Library.delayedA(delay,function(x)\r\n  {\r\n   return g(doF(x));\r\n  });\r\n };\r\n Library.delayedA=function(delay,doF)\r\n {\r\n  var cancelTokenO;\r\n  cancelTokenO=null;\r\n  return function(parm)\r\n  {\r\n   var b;\r\n   cancelTokenO==null?void 0:cancelTokenO.$0.Cancel$1();\r\n   cancelTokenO={\r\n    $:1,\r\n    $0:new CancellationTokenSource.New()\r\n   };\r\n   Concurrency.Start((b=null,Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.Bind(Concurrency.Sleep(delay),function()\r\n    {\r\n     return Concurrency.Bind(doF(parm),function()\r\n     {\r\n      return Concurrency.Return(null);\r\n     });\r\n    });\r\n   })),{\r\n    $:1,\r\n    $0:cancelTokenO.$0\r\n   });\r\n  };\r\n };\r\n Library.print=function(v)\r\n {\r\n  if(typeof v==\"string\")\r\n   ((function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(Utils.toSafe($2));\r\n    };\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }))(v));\r\n  else\r\n   ((function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(Utils.prettyPrint($2));\r\n    };\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }))(v));\r\n };\r\n Library.Error=function(a)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:a\r\n  };\r\n };\r\n View.sequenceListApp=function(list)\r\n {\r\n  return View.traverseListApp(Global.id,list);\r\n };\r\n View.traverseListApp=function(f,list)\r\n {\r\n  function cons(head,tail)\r\n  {\r\n   return new List.T({\r\n    $:1,\r\n    $0:head,\r\n    $1:tail\r\n   });\r\n  }\r\n  return List.foldBack(function(head,tail)\r\n  {\r\n   return View.op_LessMultiplyGreater(View.op_LessMultiplyGreater(View.rtn(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return cons($1,$2);\r\n    };\r\n   }),f(head)),tail);\r\n  },list,View.rtn(List.T.Empty));\r\n };\r\n View.op_LessMultiplyGreater=function(a,a$1)\r\n {\r\n  return View$1.Apply(a,a$1);\r\n };\r\n View.sequenceSeq=function(sq)\r\n {\r\n  return View.traverseSeq(Global.id,sq);\r\n };\r\n View.traverseSeq=function(f,sq)\r\n {\r\n  return View.map(Global.id,Arrays.foldBack(function(head,tail)\r\n  {\r\n   return View.op_GreaterGreaterEquals(f(head),function(h)\r\n   {\r\n    return View.op_GreaterGreaterEquals(tail,function(t)\r\n    {\r\n     return View.rtn(new List.T({\r\n      $:1,\r\n      $0:h,\r\n      $1:t\r\n     }));\r\n    });\r\n   });\r\n  },Arrays.ofSeq(sq),View.rtn(List.T.Empty)));\r\n };\r\n View.op_GreaterGreaterEquals=function(v,f)\r\n {\r\n  return View.bind(f,v);\r\n };\r\n View.rtn=function(a)\r\n {\r\n  return View$1.Const(a);\r\n };\r\n View.map=function(a,a$1)\r\n {\r\n  return View$1.Map(a,a$1);\r\n };\r\n View.bind=function(a,a$1)\r\n {\r\n  return View$1.Bind(a,a$1);\r\n };\r\n View.insertWO=function(a)\r\n {\r\n  return a==null?View$1.Const(null):View$1.Map(function(a$1)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:a$1\r\n   };\r\n  },a.$0);\r\n };\r\n Var.lensView=function(get,update,view0,_var)\r\n {\r\n  var id,view,$1;\r\n  id=Var.freshId();\r\n  view=View$1.Map2(function(v)\r\n  {\r\n   return get(v);\r\n  },_var.get_View(),view0);\r\n  $1=new UI.Var({\r\n   Get:function()\r\n   {\r\n    return get(_var.Get());\r\n   },\r\n   Set:function(v)\r\n   {\r\n    return _var.Update(function(t)\r\n    {\r\n     return update(t,v);\r\n    });\r\n   },\r\n   SetFinal:function(v)\r\n   {\r\n    return this.Set(v);\r\n   },\r\n   Update:function(f)\r\n   {\r\n    return _var.Update(function(t)\r\n    {\r\n     return update(t,f(get(t)));\r\n    });\r\n   },\r\n   UpdateMaybe:function(f)\r\n   {\r\n    return _var.UpdateMaybe(function(t)\r\n    {\r\n     var x;\r\n     x=f(get(t));\r\n     return x==null?null:{\r\n      $:1,\r\n      $0:update(t,x.$0)\r\n     };\r\n    });\r\n   },\r\n   get_View:function()\r\n   {\r\n    return view;\r\n   },\r\n   get_Id:function()\r\n   {\r\n    return id;\r\n   }\r\n  });\r\n  Var$1.New.call($1);\r\n  return $1;\r\n };\r\n Var.freshId=function()\r\n {\r\n  Var.set_counter(Var.counter()+1);\r\n  return\"varuid\"+Global.String(Var.counter());\r\n };\r\n Var.counter=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.counter;\r\n };\r\n Var.set_counter=function($1)\r\n {\r\n  SC$1.$cctor();\r\n  SC$1.counter=$1;\r\n };\r\n ListModel.MapLens=function(predO,f,m)\r\n {\r\n  function get(k,v)\r\n  {\r\n   return f(k,m.Lens(k));\r\n  }\r\n  function a(vms,pred)\r\n  {\r\n   return Arrays.filter(pred,vms);\r\n  }\r\n  return predO!=null&&predO.$==1?View$1.MapSeqCachedViewBy(m.key,get,(((Runtime.Curried3(View$1.Map2))(a))(m[\"var\"].get_View()))(predO.$0)):View$1.MapSeqCachedViewBy(m.key,get,m[\"var\"].get_View());\r\n };\r\n ListModel.refreshLM=function(lm,elems)\r\n {\r\n  var keys;\r\n  lm.AppendMany(elems);\r\n  keys=new FSharpSet.New(Seq.map(lm.key,elems));\r\n  Seq.iter(function(e)\r\n  {\r\n   if(!keys.Contains(lm.key(e)))\r\n    lm.RemoveByKey(lm.key(e));\r\n  },Seq.cache(lm));\r\n };\r\n ListModel.currentLens=function(def,curr,model)\r\n {\r\n  return ListModel[\"currentLensUpd'\"](def,curr,function(v)\r\n  {\r\n   model.UpdateBy(function()\r\n   {\r\n    return model.TryFindByKey(model.key(v))==null?null:{\r\n     $:1,\r\n     $0:v\r\n    };\r\n   },model.key(v));\r\n  },model);\r\n };\r\n ListModel[\"currentLensUpd'\"]=function(def,curr,upd,model)\r\n {\r\n  return new FromView.New(View$1.Map2(function(_mdl,kO)\r\n  {\r\n   var o;\r\n   o=kO==null?null:model.TryFindByKey(kO.$0);\r\n   return o==null?def:o.$0;\r\n  },model.v,curr),upd);\r\n };\r\n ListModel.currentLensUpd=function(def,curr,upd,model)\r\n {\r\n  var f;\r\n  function b(a)\r\n  {\r\n   return model.TryFindByKey(a);\r\n  }\r\n  function g(o)\r\n  {\r\n   return o==null?def:o.$0;\r\n  }\r\n  return Var.lensView((f=function(o)\r\n  {\r\n   return o==null?null:b(o.$0);\r\n  },function(x)\r\n  {\r\n   return g(f(x));\r\n  }),function(kO,v)\r\n  {\r\n   var a;\r\n   a=upd(v);\r\n   kO==null?void 0:a(kO.$0);\r\n   return kO;\r\n  },model.v,curr);\r\n };\r\n ListModel.lensDef=function(def,k,m)\r\n {\r\n  function get(o)\r\n  {\r\n   return o==null?def:o.$0;\r\n  }\r\n  return ListModel[\"lensIntoO'\"](m,get,function()\r\n  {\r\n   return Global.id;\r\n  },k,View$1.Map(get,m.TryFindByKeyAsView(k)));\r\n };\r\n ListModel.docLensMapViewO=function(def,mapView,f,m)\r\n {\r\n  function get(k,v)\r\n  {\r\n   return f(k,ListModel[\"lensIntoO'\"](m,function(o)\r\n   {\r\n    return o==null?def:o.$0;\r\n   },function()\r\n   {\r\n    return Global.id;\r\n   },k,v));\r\n  }\r\n  return Doc.ConvertSeqBy(m.key,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return get($1,$2);\r\n   };\r\n  },View$1.Map(mapView,m.v));\r\n };\r\n ListModel.docLensMapView=function(mapView,f,m)\r\n {\r\n  function get(k,v)\r\n  {\r\n   return f(k,ListModel[\"lensInto'\"](m,Global.id,function()\r\n   {\r\n    return Global.id;\r\n   },k,v));\r\n  }\r\n  return Doc.ConvertSeqBy(m.key,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return get($1,$2);\r\n   };\r\n  },View$1.Map(mapView,m.v));\r\n };\r\n ListModel[\"lensIntoO'\"]=function(m,get,update,key,view)\r\n {\r\n  var id,$1;\r\n  id=Var.freshId();\r\n  $1=new Var$1({\r\n   Get:function()\r\n   {\r\n    return get(m.TryFindByKey(key));\r\n   },\r\n   Set:function(v)\r\n   {\r\n    return m.UpdateBy(function(i)\r\n    {\r\n     return{\r\n      $:1,\r\n      $0:(update(i))(v)\r\n     };\r\n    },key);\r\n   },\r\n   Update:function(f)\r\n   {\r\n    return m.UpdateBy(function(i)\r\n    {\r\n     var x;\r\n     return{\r\n      $:1,\r\n      $0:(x=f(get({\r\n       $:1,\r\n       $0:i\r\n      })),(update(i))(x))\r\n     };\r\n    },key);\r\n   },\r\n   UpdateMaybe:function(f)\r\n   {\r\n    return m.UpdateBy(function(i)\r\n    {\r\n     var x,m$1;\r\n     x=f(get({\r\n      $:1,\r\n      $0:i\r\n     }));\r\n     m$1=update(i);\r\n     return x==null?null:{\r\n      $:1,\r\n      $0:m$1(x.$0)\r\n     };\r\n    },key);\r\n   },\r\n   SetFinal:function(v)\r\n   {\r\n    return this.Set(v);\r\n   },\r\n   get_View:function()\r\n   {\r\n    return view;\r\n   },\r\n   get_Id:function()\r\n   {\r\n    return id;\r\n   }\r\n  });\r\n  Var$1.New.call($1);\r\n  return $1;\r\n };\r\n ListModel[\"lensInto'\"]=function(m,get,update,key,view)\r\n {\r\n  var id,$1;\r\n  id=Var.freshId();\r\n  $1=new Var$1({\r\n   Get:function()\r\n   {\r\n    return get(m.FindByKey(key));\r\n   },\r\n   Set:function(v)\r\n   {\r\n    return m.UpdateBy(function(i)\r\n    {\r\n     return{\r\n      $:1,\r\n      $0:(update(i))(v)\r\n     };\r\n    },key);\r\n   },\r\n   Update:function(f)\r\n   {\r\n    return m.UpdateBy(function(i)\r\n    {\r\n     var x;\r\n     return{\r\n      $:1,\r\n      $0:(x=f(get(i)),(update(i))(x))\r\n     };\r\n    },key);\r\n   },\r\n   UpdateMaybe:function(f)\r\n   {\r\n    return m.UpdateBy(function(i)\r\n    {\r\n     var x,m$1;\r\n     x=f(get(i));\r\n     m$1=update(i);\r\n     return x==null?null:{\r\n      $:1,\r\n      $0:m$1(x.$0)\r\n     };\r\n    },key);\r\n   },\r\n   SetFinal:function(v)\r\n   {\r\n    return this.Set(v);\r\n   },\r\n   get_View:function()\r\n   {\r\n    return view;\r\n   },\r\n   get_Id:function()\r\n   {\r\n    return id;\r\n   }\r\n  });\r\n  Var$1.New.call($1);\r\n  return $1;\r\n };\r\n REGEX.Identifier=function(a)\r\n {\r\n  var $1,a$1,t;\r\n  return(a$1=LibraryJS.REGEX$1(\"^[$a-zA-Z_][0-9a-zA-Z_\\\\.\\\\-$]*$\",\"\",a),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($1=Arrays.get(a$1.$0,0),true)))?{\r\n   $:1,\r\n   $0:$1\r\n  }:null;\r\n };\r\n REGEX.getEndWord=function(line,ch)\r\n {\r\n  var a,t;\r\n  a=LibraryJS.REGEX$1(\"^([a-zA-Z_]\\\\w*)\",\"g\",line.substring(ch));\r\n  return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):\"\":\"\";\r\n };\r\n REGEX.getStartWord=function(line,ch)\r\n {\r\n  var a,t;\r\n  a=LibraryJS.REGEX$1(\"([a-zA-Z_]\\\\w*)$\",\"g\",Strings.Substring(line,0,ch));\r\n  return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):\"\":\"\";\r\n };\r\n Hoverable$1=Hoverable.Hoverable=Runtime.Class({\r\n  Content:function(e)\r\n  {\r\n   return e.on(\"mouseenter\",function()\r\n   {\r\n    return DomUtility.AddClass(e.elt,\"hovering\");\r\n   }).on(\"mouseleave\",function()\r\n   {\r\n    return DomUtility.RemoveClass(e.elt,\"hovering\");\r\n   });\r\n  },\r\n  Content$1:function(ds)\r\n  {\r\n   return Doc.Element(\"div\",this.get_Attributes(),ds);\r\n  },\r\n  get_Attributes:function()\r\n  {\r\n   var $this,view;\r\n   $this=this;\r\n   return List.ofArray([(view=View$1.Const(\"hovering\"),AttrModule.DynamicPred(\"class\",this.hover.get_View(),view)),AttrProxy.HandlerImpl(\"mouseenter\",function()\r\n   {\r\n    return function()\r\n    {\r\n     return $this.hover.Set(true);\r\n    };\r\n   }),AttrProxy.HandlerImpl(\"mouseleave\",function()\r\n   {\r\n    return function()\r\n    {\r\n     return $this.hover.Set(false);\r\n    };\r\n   })]);\r\n  }\r\n },null,Hoverable$1);\r\n Hoverable$1.get_Demo=function()\r\n {\r\n  return Hoverable$1.New$1().Content(Doc.Element(\"div\",[AttrProxy.Create(\"style\",\"flex-flow: column;\")],[Doc.TextNode(\"Hover over me!\")]));\r\n };\r\n Hoverable$1.Content$758$81=Runtime.Curried3(function(e,$1,$2)\r\n {\r\n  return DomUtility.RemoveClass(e.elt,\"hovering\");\r\n });\r\n Hoverable$1.get_Attributes$754$69=Runtime.Curried3(function(_this,$1,$2)\r\n {\r\n  return _this.hover.Set(false);\r\n });\r\n Hoverable$1.get_Attributes$753$69=Runtime.Curried3(function(_this,$1,$2)\r\n {\r\n  return _this.hover.Set(true);\r\n });\r\n Hoverable$1.New$1=function()\r\n {\r\n  return Hoverable$1.New(Var$2.Create$1(false));\r\n };\r\n Hoverable$1.New=function(hover)\r\n {\r\n  return new Hoverable$1({\r\n   hover:hover\r\n  });\r\n };\r\n Hoverable.hoverable=function(e)\r\n {\r\n  return Hoverable$1.New$1().Content(e);\r\n };\r\n ResizeObserver.addResizeObserver=function(f,el)\r\n {\r\n  var r,ro,changed,b;\r\n  try\r\n  {\r\n   r=!(!Global.ResizeObserver);\r\n  }\r\n  catch(e)\r\n  {\r\n   r=false;\r\n  }\r\n  if(r)\r\n   {\r\n    ro=new Global.ResizeObserver(f);\r\n    ResizeObserver.set_observers(new List.T({\r\n     $:1,\r\n     $0:ro,\r\n     $1:ResizeObserver.observers()\r\n    }));\r\n    ro.observe(el);\r\n   }\r\n  else\r\n   {\r\n    changed=ResizeObserver.dimsChanged(el);\r\n    Concurrency.Start((b=null,Concurrency.Delay(function()\r\n    {\r\n     return Concurrency.While(function()\r\n     {\r\n      return el.isConnected;\r\n     },Concurrency.Delay(function()\r\n     {\r\n      return Concurrency.Bind(Concurrency.Sleep(110),function()\r\n      {\r\n       return changed()?(f(),Concurrency.Zero()):Concurrency.Zero();\r\n      });\r\n     }));\r\n    })),null);\r\n   }\r\n };\r\n ResizeObserver.dimsChanged=function(el)\r\n {\r\n  var dims;\r\n  dims=[el.getBoundingClientRect()];\r\n  return function()\r\n  {\r\n   var ndims;\r\n   ndims=el.getBoundingClientRect();\r\n   return Unchecked.Equals(ResizeObserver.domRect2Tuple(dims[0]),ResizeObserver.domRect2Tuple(ndims))?false:(dims[0]=ndims,true);\r\n  };\r\n };\r\n ResizeObserver.domRect2Tuple=function(r)\r\n {\r\n  return[r.top,r.left,r.width,r.height];\r\n };\r\n ResizeObserver.observers=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.observers;\r\n };\r\n ResizeObserver.set_observers=function($1)\r\n {\r\n  SC$1.$cctor();\r\n  SC$1.observers=$1;\r\n };\r\n WcTabStripT=WcTabStrip.WcTabStripT=Runtime.Class({\r\n  connectedCallback:function()\r\n  {\r\n   var $this,el,shadowRoot,elsh;\r\n   function addTab()\r\n   {\r\n    var a,top,tabs;\r\n    top=!el.hasAttribute(\"bottom\");\r\n    tabs=List.ofSeq(Seq.delay(function()\r\n    {\r\n     return Seq.collect(function(i)\r\n     {\r\n      var node;\r\n      node=el.childNodes[i-1];\r\n      return Unchecked.Equals(node.nodeType,Node.ELEMENT_NODE)?[[node.hasAttribute(\"tabname\")?node.getAttribute(\"tabname\"):(function($1)\r\n      {\r\n       return function($2)\r\n       {\r\n        return $1(\"Tab \"+Global.String($2));\r\n       };\r\n      }(Global.id))(i),node]]:[];\r\n     },Operators$3.range(1,el.childNodes.length));\r\n    }));\r\n    while(elsh.childNodes.length>0)\r\n     elsh.removeChild(elsh.lastChild);\r\n    a=WcTabStrip.tabStrip($this.selected,top,true,tabs,Doc.Element(\"slot\",List.T.Empty,List.T.Empty));\r\n    Templates.LoadLocalTemplates(\"\");\r\n    Doc.Run(elsh,a);\r\n   }\r\n   $this=this;\r\n   !this.added?(el=this,shadowRoot=el.attachShadow({\r\n    mode:\"open\"\r\n   }),elsh=self.document.createElement(\"div\"),shadowRoot.appendChild(elsh),addTab(),el.addEventListener(\"DOMSubtreeModified\",Library.delayed(50,addTab)),this.added=true):void 0;\r\n  }\r\n },Obj,WcTabStripT);\r\n WcTabStripT.Constructor=function()\r\n {\r\n  var _this,r;\r\n  _this=(r=Reflect.construct(self.HTMLElement,[],this.__proto__.constructor),r);\r\n  self.FsRootDll.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New.call(_this);\r\n  return _this;\r\n };\r\n WcTabStripT.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n  this.added=false;\r\n  this.selected=Var$2.Create$1(1);\r\n  (function($1)\r\n  {\r\n   return $1(\"WcTabStripT initializer\");\r\n  }(function(s)\r\n  {\r\n   console.log(s);\r\n  }));\r\n },WcTabStripT);\r\n WcTabStrip.init=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.init;\r\n };\r\n WcTabStrip.tabStrip$902$64=function(i,selected)\r\n {\r\n  return function()\r\n  {\r\n   return function()\r\n   {\r\n    return selected.Set(i+1);\r\n   };\r\n  };\r\n };\r\n WcTabStrip.tabStrip=function(selected,top,horizontal,tabs,content)\r\n {\r\n  var strip;\r\n  strip=Doc.Element(\"div\",[AttrProxy.Create(\"class\",(((Runtime.Curried3(function($1,$2,$3)\r\n  {\r\n   return $1(\"tab-strip \"+Utils.toSafe($2)+\" \"+Utils.toSafe($3));\r\n  }))(Global.id))(top?\"top\":\"bottom\"))(horizontal?\"horizontal\":\"vertical\"))],List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.collect(function(m)\r\n   {\r\n    var i;\r\n    i=m[0];\r\n    return[Hoverable$1.New$1().Content(Doc.Element(\"div\",[AttrModule.Dynamic(\"class\",View$1.Map(function(sel)\r\n    {\r\n     return\"tab\"+(sel===i+1?\" selected\":\"\");\r\n    },selected.get_View())),AttrProxy.Create(\"draggable\",\"true\"),AttrProxy.HandlerImpl(\"click\",function()\r\n    {\r\n     return function()\r\n     {\r\n      return selected.Set(i+1);\r\n     };\r\n    })],[Doc.TextNode(m[1][0])]))];\r\n   },Seq.indexed(tabs));\r\n  })));\r\n  return Doc.Element(\"div\",[AttrProxy.Create(\"class\",\"tab-panel\")],List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.append(top?[strip]:[],Seq.delay(function()\r\n   {\r\n    return Seq.append([Doc.Element(\"div\",[AttrProxy.Create(\"class\",\"tab-content\")],[content])],Seq.delay(function()\r\n    {\r\n     return Seq.append(!top?[strip]:[],Seq.delay(function()\r\n     {\r\n      return Seq.append([Doc.Element(\"style\",List.T.Empty,List.ofArray([Doc.TextNode(WcTabStrip.css())]))],Seq.delay(function()\r\n      {\r\n       return[Doc.Element(\"style\",List.T.Empty,List.ofArray([Doc.TextView(View$1.Map(function($1)\r\n       {\r\n        return function($2)\r\n        {\r\n         return $1(\"\\r\\n                                              ::slotted(*              ) { display: none }\\r\\n                                              ::slotted(*:nth-child(\"+Global.String($2)+\")) { display: grid }\\r\\n                                           \");\r\n        };\r\n       }(Global.id),selected.get_View()))]))];\r\n      }));\r\n     }));\r\n    }));\r\n   }));\r\n  })));\r\n };\r\n WcTabStrip.css=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.css;\r\n };\r\n WcSplitterT=WcSplitter.WcSplitterT=Runtime.Class({\r\n  connectedCallback:function()\r\n  {\r\n   var el,shadowRoot,elsh,minV,maxV,value,first,vertical,size,padding,gap,dragging,startP,start,domElem,a;\r\n   function sizeCalc(sh)\r\n   {\r\n    var p,pt,pb,r;\r\n    p=vertical?[\"padding-left\",\"padding-right\",\"grid-column-gap\"]:[\"padding-top\",\"padding-bottom\",\"grid-row-gap\"];\r\n    pt=Global.parseFloat(\"0\"+Global.jQuery(sh.parentElement.parentElement).css(p[0]));\r\n    pb=Global.parseFloat(\"0\"+Global.jQuery(sh.parentElement.parentElement).css(p[1]));\r\n    gap.Set(Global.parseFloat(\"0\"+Global.jQuery(sh.parentElement.parentElement).css(p[2])));\r\n    padding[0]=pt+pb;\r\n    r=el.getBoundingClientRect();\r\n    return vertical?first?[r.width,r.height]:[-r.width,r.height]:first?[r.height,r.width]:[-r.height,r.width];\r\n   }\r\n   function mouseCoord(ev)\r\n   {\r\n    return vertical?ev.clientX:ev.clientY;\r\n   }\r\n   function drag(ev)\r\n   {\r\n    var v,b;\r\n    v=(mouseCoord(ev)-start[0])*100/size[0][0]+startP[0];\r\n    value.Set((b=Unchecked.Compare(minV,v)===1?minV:v,Unchecked.Compare(maxV,b)===-1?maxV:b));\r\n   }\r\n   function finishDragging()\r\n   {\r\n    if(dragging[0])\r\n     {\r\n      dragging[0]=false;\r\n      self.removeEventListener(\"mousemove\",drag,false);\r\n      self.removeEventListener(\"mouseup\",finishDragging,false);\r\n     }\r\n   }\r\n   function startDragging(ev)\r\n   {\r\n    var o,o$1;\r\n    if(!dragging[0])\r\n     {\r\n      dragging[0]=true;\r\n      startP[0]=value.Get();\r\n      start[0]=mouseCoord(ev);\r\n      size[0]=(o=(o$1=domElem[0],o$1==null?null:{\r\n       $:1,\r\n       $0:sizeCalc(o$1.$0)\r\n      }),o==null?[100,500]:o.$0);\r\n      self.addEventListener(\"mousemove\",drag,false);\r\n      self.addEventListener(\"mouseup\",finishDragging,false);\r\n      ev.preventDefault();\r\n     }\r\n   }\r\n   function partSizes(sz,gap$1,pad,spl)\r\n   {\r\n    return[(sz-gap$1-pad)*spl/100,(sz-gap$1-pad)*(100-spl)/100];\r\n   }\r\n   function styleSections(p1,p2)\r\n   {\r\n    return(((((Runtime.Curried(function($1,$2,$3,$4,$5)\r\n    {\r\n     return $1(\" \"+$2.toFixed(2)+\"px \"+$3.toFixed(2)+\"px ; \"+Utils.toSafe($4)+\" : \"+$5.toFixed(2)+\"px; \");\r\n    },5))(Global.id))(p1))(p2))(vertical?\"height\":\"width\"))(size[0][1]);\r\n   }\r\n   function recalc()\r\n   {\r\n    var o;\r\n    o=domElem[0];\r\n    o==null?void 0:size[0]=sizeCalc(o.$0);\r\n    value.Set(value.Get());\r\n   }\r\n   if(!this.added)\r\n    {\r\n     el=this;\r\n     shadowRoot=el.attachShadow({\r\n      mode:\"open\"\r\n     });\r\n     elsh=self.document.createElement(\"div\");\r\n     minV=el.hasAttribute(\"min\")?Global.parseFloat(el.getAttribute(\"min\")):4;\r\n     maxV=el.hasAttribute(\"max\")?Global.parseFloat(el.getAttribute(\"max\")):96;\r\n     value=Var$2.Create$1(el.hasAttribute(\"value\")?Global.parseFloat(el.getAttribute(\"value\")):50);\r\n     first=!el.hasAttribute(\"second\");\r\n     vertical=el.hasAttribute(\"vertical\");\r\n     size=[[0,0]];\r\n     padding=[0];\r\n     gap=Var$2.Create$1(0);\r\n     dragging=[false];\r\n     startP=[0];\r\n     start=[0];\r\n     domElem=[null];\r\n     a=(((((vertical?WcSplitter.layoutVertical():WcSplitter.layoutHorizontal())(View$1.Map(function(spl)\r\n     {\r\n      var x;\r\n      x=partSizes(size[0][0],gap.Get(),padding[0],spl);\r\n      return styleSections.apply(null,x);\r\n     },value.get_View())))(function()\r\n     {\r\n      ResizeObserver.addResizeObserver(recalc,el);\r\n      recalc();\r\n     }))(function(sp)\r\n     {\r\n      domElem[0]={\r\n       $:1,\r\n       $0:sp\r\n      };\r\n      recalc();\r\n     }))(function(me)\r\n     {\r\n      startDragging(me);\r\n     }))(View$1.Map(function($1)\r\n     {\r\n      return function($2)\r\n      {\r\n       return $1(Utils.prettyPrint($2)+\"px\");\r\n      };\r\n     }(Global.id),gap.get_View()));\r\n     Templates.LoadLocalTemplates(\"\");\r\n     Doc.Run(elsh,a);\r\n     shadowRoot.appendChild(elsh.firstChild);\r\n     this.added=true;\r\n    }\r\n  }\r\n },Obj,WcSplitterT);\r\n WcSplitterT.Constructor=function()\r\n {\r\n  var _this,r;\r\n  _this=(r=Reflect.construct(self.HTMLElement,[],this.__proto__.constructor),r);\r\n  self.FsRootDll.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New.call(_this);\r\n  return _this;\r\n };\r\n WcSplitterT.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n  this.added=false;\r\n  (function($1)\r\n  {\r\n   return $1(\"WcSplitterT initializer\");\r\n  }(function(s)\r\n  {\r\n   console.log(s);\r\n  }));\r\n },WcSplitterT);\r\n WcSplitter.init=function(layoutH,layoutV)\r\n {\r\n  var o;\r\n  o=new WcSplitterT.New();\r\n  WcSplitter.set_layoutHorizontal(layoutH);\r\n  WcSplitter.set_layoutVertical(layoutV);\r\n  WebComponent.defineWebComponent(\"wcomp-splitter\",WcSplitterT.Constructor,self.FsRootDll.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New);\r\n };\r\n WcSplitter.layoutVertical=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.layoutVertical;\r\n };\r\n WcSplitter.set_layoutVertical=function($1)\r\n {\r\n  SC$1.$cctor();\r\n  SC$1.layoutVertical=$1;\r\n };\r\n WcSplitter.layoutHorizontal=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.layoutHorizontal;\r\n };\r\n WcSplitter.set_layoutHorizontal=function($1)\r\n {\r\n  SC$1.$cctor();\r\n  SC$1.layoutHorizontal=$1;\r\n };\r\n WebComponent.defineWebComponent=function(_nm,_o,_c)\r\n {\r\n  try\r\n  {\r\n   console.log(\"defineWebComponent: \"+_nm);\r\n   Object.setPrototypeOf(_c.prototype,self.HTMLElement.prototype);\r\n   Object.setPrototypeOf(_c,self.HTMLElement);\r\n   Object.setPrototypeOf(_o.prototype,_c.prototype);\r\n   self.customElements.define(_nm,_o);\r\n  }\r\n  catch(m)\r\n  {\r\n   (function($1)\r\n   {\r\n    return $1(\"Failed to define WebComponent. Not supported.\");\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }));\r\n  }\r\n };\r\n AppFrameworkTemplate.html=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.html;\r\n };\r\n PlgElemName=AppFramework.PlgElemName=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,PlgElemName);\r\n PlugInName=AppFramework.PlugInName=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,PlugInName);\r\n PlugInVar.New=function(varName,varVar)\r\n {\r\n  return{\r\n   varName:varName,\r\n   varVar:varVar\r\n  };\r\n };\r\n PlugInView.New=function(viwName,viwView)\r\n {\r\n  return{\r\n   viwName:viwName,\r\n   viwView:viwView\r\n  };\r\n };\r\n PlugInDoc.New=function(docName,docDoc)\r\n {\r\n  return{\r\n   docName:docName,\r\n   docDoc:docDoc\r\n  };\r\n };\r\n PlugInAction.New=function(actName,actFunction,actEnabled)\r\n {\r\n  return{\r\n   actName:actName,\r\n   actFunction:actFunction,\r\n   actEnabled:actEnabled\r\n  };\r\n };\r\n PlugInQuery.New=function(qryName,qryFunction)\r\n {\r\n  return{\r\n   qryName:qryName,\r\n   qryFunction:qryFunction\r\n  };\r\n };\r\n PlugIn.New=function(plgName,plgVars,plgViews,plgDocs,plgActions,plgQueries)\r\n {\r\n  return{\r\n   plgName:plgName,\r\n   plgVars:plgVars,\r\n   plgViews:plgViews,\r\n   plgDocs:plgDocs,\r\n   plgActions:plgActions,\r\n   plgQueries:plgQueries\r\n  };\r\n };\r\n PlugInBuilder=AppFramework.PlugInBuilder=Runtime.Class({\r\n  Merge:function(plg,prefix,p2)\r\n  {\r\n   plg.plgVars.AppendMany(Seq.map(function(v)\r\n   {\r\n    return PlugInVar.New(new PlgElemName({\r\n     $:0,\r\n     $0:prefix+v.varName.get_Id()\r\n    }),v.varVar);\r\n   },p2.plgVars));\r\n   plg.plgViews.AppendMany(Seq.map(function(w)\r\n   {\r\n    return PlugInView.New(new PlgElemName({\r\n     $:0,\r\n     $0:prefix+w.viwName.get_Id()\r\n    }),w.viwView);\r\n   },p2.plgViews));\r\n   plg.plgDocs.AppendMany(Seq.map(function(d)\r\n   {\r\n    return PlugInDoc.New(new PlgElemName({\r\n     $:0,\r\n     $0:prefix+d.docName.get_Id()\r\n    }),d.docDoc);\r\n   },p2.plgDocs));\r\n   plg.plgActions.AppendMany(Seq.map(function(a)\r\n   {\r\n    return PlugInAction.New(new PlgElemName({\r\n     $:0,\r\n     $0:prefix+a.actName.get_Id()\r\n    }),a.actFunction,a.actEnabled);\r\n   },p2.plgActions));\r\n   plg.plgQueries.AppendMany(Seq.map(function(q)\r\n   {\r\n    return PlugInQuery.New(new PlgElemName({\r\n     $:0,\r\n     $0:prefix+q.qryName.get_Id()\r\n    }),q.qryFunction);\r\n   },p2.plgQueries));\r\n   return plg;\r\n  },\r\n  AddViw:function(plg,name,viw)\r\n  {\r\n   plg.plgViews.Append(AppFramework.newViw(new PlgElemName({\r\n    $:0,\r\n    $0:name\r\n   }),viw));\r\n   return plg;\r\n  },\r\n  AddActO:function(plg,name,actO)\r\n  {\r\n   actO==null?void 0:plg.plgActions.Append(AppFramework.newAct(new PlgElemName({\r\n    $:0,\r\n    $0:name\r\n   }),actO.$0));\r\n   return plg;\r\n  },\r\n  AddAct2:function(plg,name,act,p1,p2)\r\n  {\r\n   plg.plgActions.Append(AppFramework.newActF(new PlgElemName({\r\n    $:0,\r\n    $0:name\r\n   }),{\r\n    $:2,\r\n    $0:act,\r\n    $1:p1,\r\n    $2:p2\r\n   }));\r\n   return plg;\r\n  },\r\n  AddAct1:function(plg,name,act,p1)\r\n  {\r\n   plg.plgActions.Append(AppFramework.newActF(new PlgElemName({\r\n    $:0,\r\n    $0:name\r\n   }),{\r\n    $:1,\r\n    $0:act,\r\n    $1:p1\r\n   }));\r\n   return plg;\r\n  },\r\n  AddAct:function(plg,name,act)\r\n  {\r\n   plg.plgActions.Append(AppFramework.newAct(new PlgElemName({\r\n    $:0,\r\n    $0:name\r\n   }),act));\r\n   return plg;\r\n  },\r\n  AddQry:function(plg,name,qry)\r\n  {\r\n   plg.plgQueries.Append(AppFramework.newQry(new PlgElemName({\r\n    $:0,\r\n    $0:name\r\n   }),qry));\r\n   return plg;\r\n  },\r\n  AddDoc5:function(plg,name,doc,a,b,c,d,e)\r\n  {\r\n   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({\r\n    $:0,\r\n    $0:name\r\n   }),{\r\n    $:6,\r\n    $0:doc,\r\n    $1:a,\r\n    $2:b,\r\n    $3:c,\r\n    $4:d,\r\n    $5:e\r\n   }));\r\n   return plg;\r\n  },\r\n  AddDoc4:function(plg,name,doc,a,b,c,d)\r\n  {\r\n   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({\r\n    $:0,\r\n    $0:name\r\n   }),{\r\n    $:5,\r\n    $0:doc,\r\n    $1:a,\r\n    $2:b,\r\n    $3:c,\r\n    $4:d\r\n   }));\r\n   return plg;\r\n  },\r\n  AddDoc3:function(plg,name,doc,a,b,c)\r\n  {\r\n   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({\r\n    $:0,\r\n    $0:name\r\n   }),{\r\n    $:4,\r\n    $0:doc,\r\n    $1:a,\r\n    $2:b,\r\n    $3:c\r\n   }));\r\n   return plg;\r\n  },\r\n  AddDoc2:function(plg,name,doc,p1,p2)\r\n  {\r\n   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({\r\n    $:0,\r\n    $0:name\r\n   }),{\r\n    $:3,\r\n    $0:doc,\r\n    $1:p1,\r\n    $2:p2\r\n   }));\r\n   return plg;\r\n  },\r\n  AddDoc1:function(plg,name,doc,p1)\r\n  {\r\n   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({\r\n    $:0,\r\n    $0:name\r\n   }),{\r\n    $:2,\r\n    $0:doc,\r\n    $1:p1\r\n   }));\r\n   return plg;\r\n  },\r\n  AddDoc0:function(plg,name,doc)\r\n  {\r\n   plg.plgDocs.Append(AppFramework.newDoc0(new PlgElemName({\r\n    $:0,\r\n    $0:name\r\n   }),doc));\r\n   return plg;\r\n  },\r\n  AddDoc:function(plg,name,doc)\r\n  {\r\n   plg.plgDocs.Append(AppFramework.newDoc(new PlgElemName({\r\n    $:0,\r\n    $0:name\r\n   }),doc));\r\n   return plg;\r\n  },\r\n  AddVar:function(plg,name,_var)\r\n  {\r\n   plg.plgVars.Append(AppFramework.newVar(new PlgElemName({\r\n    $:0,\r\n    $0:name\r\n   }),_var));\r\n   return plg;\r\n  },\r\n  Name:function(plg,name)\r\n  {\r\n   return PlugIn.New(new PlugInName({\r\n    $:0,\r\n    $0:name\r\n   }),plg.plgVars,plg.plgViews,plg.plgDocs,plg.plgActions,plg.plgQueries);\r\n  },\r\n  For:function(coll,func)\r\n  {\r\n   var ie;\r\n   ie=Enumerator.Get(coll);\r\n   while(ie.MoveNext())\r\n    func(ie.Current());\r\n  },\r\n  Yield:function()\r\n  {\r\n   return this.Zero();\r\n  },\r\n  Zero:function()\r\n  {\r\n   var i;\r\n   i=AppFramework.defaultPlugIn();\r\n   return PlugIn.New(new PlugInName({\r\n    $:0,\r\n    $0:\"Main\"\r\n   }),i.plgVars,i.plgViews,i.plgDocs,i.plgActions,i.plgQueries);\r\n  }\r\n },Obj,PlugInBuilder);\r\n PlugInBuilder.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },PlugInBuilder);\r\n Fun.New=function(f,p)\r\n {\r\n  return{\r\n   f:f,\r\n   p:p\r\n  };\r\n };\r\n P.New=function(r)\r\n {\r\n  return{\r\n   r:r\r\n  };\r\n };\r\n Val.textAtt=function(a)\r\n {\r\n  var $1;\r\n  $1=Operators$3.FailWith;\r\n  return $1(\"textAtt not implemented\");\r\n };\r\n Val.textDoc=function(a)\r\n {\r\n  return a.$==0?Doc.TextView(a.$0):Doc.TextNode(a.$0);\r\n };\r\n Val.addAtt=function(a,atts)\r\n {\r\n  return atts.$==0?function($1)\r\n  {\r\n   return $1(\"addAtt for VView not implemented\");\r\n  }(Operators$3.FailWith):{\r\n   $:1,\r\n   $0:Seq.append(atts.$0,[a])\r\n  };\r\n };\r\n Val.addDoc=function(d,docs)\r\n {\r\n  return docs.$==0?{\r\n   $:1,\r\n   $0:[Doc.BindView(Doc.Concat,docs.$0),d]\r\n  }:{\r\n   $:1,\r\n   $0:Seq.append(docs.$0,[d])\r\n  };\r\n };\r\n Val.toView=function(a)\r\n {\r\n  return a.$==0?a.$0:View$1.Const(a.$0);\r\n };\r\n Val.sequenceListApp=function(list)\r\n {\r\n  return Val.traverseListApp(Global.id,list);\r\n };\r\n Val.traverseListApp=function(f,list)\r\n {\r\n  function cons(head,tail)\r\n  {\r\n   return new List.T({\r\n    $:1,\r\n    $0:head,\r\n    $1:tail\r\n   });\r\n  }\r\n  return List.foldBack(function(head,tail)\r\n  {\r\n   return((Val.op_LessMultiplyGreater())(((Val.op_LessMultiplyGreater())(Val.rtn(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return cons($1,$2);\r\n    };\r\n   })))(f(head))))(tail);\r\n  },list,Val.rtn(List.T.Empty));\r\n };\r\n Val.op_LessMultiplyGreater=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.op_LessMultiplyGreater;\r\n };\r\n Val.apply=function(fv,vv)\r\n {\r\n  return fv.$==0?vv.$==1?{\r\n   $:0,\r\n   $0:View$1.Apply(fv.$0,View$1.Const(vv.$0))\r\n  }:{\r\n   $:0,\r\n   $0:View$1.Apply(fv.$0,vv.$0)\r\n  }:vv.$==0?{\r\n   $:0,\r\n   $0:View$1.Apply(View$1.Const(fv.$0),vv.$0)\r\n  }:{\r\n   $:1,\r\n   $0:fv.$0(vv.$0)\r\n  };\r\n };\r\n Val.rtn=function(a)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:a\r\n  };\r\n };\r\n Val.map=function(f,a)\r\n {\r\n  return a.$==0?{\r\n   $:0,\r\n   $0:View$1.Map(f,a.$0)\r\n  }:{\r\n   $:1,\r\n   $0:f(a.$0)\r\n  };\r\n };\r\n AAttr.AEmpty={\r\n  $:3\r\n };\r\n Extract0.extractTextD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.extractTextD;\r\n };\r\n Extract0.extractAtsD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.extractAtsD;\r\n };\r\n Extract0.getTextValD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.getTextValD;\r\n };\r\n Extract0.getTextValFromSeqD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.getTextValFromSeqD;\r\n };\r\n Extract0.extractDocD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.extractDocD;\r\n };\r\n Extract0.getDocFromTextTypesD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.getDocFromTextTypesD;\r\n };\r\n Extract0.getTextActViewFromReferenceD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.getTextActViewFromReferenceD;\r\n };\r\n Extract0.getDocFromReferenceD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.getDocFromReferenceD;\r\n };\r\n Extract0.getTextData=function(txt)\r\n {\r\n  var o,o$1,$1;\r\n  o=(o$1=String.delimitedO(\"@{\",\"}\",txt),o$1==null?null:{\r\n   $:1,\r\n   $0:($1=o$1.$0,Extract0.getOneTextData($1[0],$1[1],$1[2]))\r\n  });\r\n  return o==null?List.ofArray([{\r\n   $:0,\r\n   $0:txt\r\n  }]):o.$0;\r\n };\r\n Extract0.getOneTextData=function(bef,name,aft)\r\n {\r\n  return(bef===\"\"?Global.id:function(ls)\r\n  {\r\n   return new List.T({\r\n    $:1,\r\n    $0:{\r\n     $:0,\r\n     $0:bef\r\n    },\r\n    $1:ls\r\n   });\r\n  })(new List.T({\r\n   $:1,\r\n   $0:{\r\n    $:1,\r\n    $0:name\r\n   },\r\n   $1:aft===\"\"?List.T.Empty:Extract0.getTextData(aft)\r\n  }));\r\n };\r\n Extract0.getTextActViewFromReference=function(ref)\r\n {\r\n  return View$1.Const({\r\n   $:0,\r\n   $0:(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(\"getTextActViewFromReference not implemented: @{\"+Utils.toSafe($2)+\"}\");\r\n    };\r\n   }(Global.id))(ref)\r\n  });\r\n };\r\n Extract0.getDocFromReference=function(ref)\r\n {\r\n  return Doc.TextNode((function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"getDocFromReference not implemented: @{\"+Utils.toSafe($2)+\"}\");\r\n   };\r\n  }(Global.id))(ref));\r\n };\r\n ListModelData=AppFramework.ListModelData=Runtime.Class({\r\n  get_CurrentV:function()\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return new FromView.New(this.get_CurrentW(),function(v)\r\n   {\r\n    var m,k;\r\n    m=$this.selV.Get();\r\n    m==null?void 0:(k=m.$0,View$1.Get(function(elems)\r\n    {\r\n     if(elems.ContainsKey(k))\r\n      elems.Append(v);\r\n    },$this.elemsW));\r\n   });\r\n  },\r\n  get_CurrentW:function()\r\n  {\r\n   var $this,b;\r\n   $this=this;\r\n   b=View$1.get_Do();\r\n   return View$1.Bind(function(a)\r\n   {\r\n    return View$1.Bind(function(a$1)\r\n    {\r\n     return a$1==null?View$1.Const($this.def):View$1.Bind(function(a$2)\r\n     {\r\n      return a$2==null?View$1.Const($this.def):View$1.Const(a$2.$0);\r\n     },a.TryFindByKeyAsView(a$1.$0));\r\n    },$this.selV.get_View());\r\n   },this.elemsW);\r\n  },\r\n  PlugIn:function(ofStrO,toStr)\r\n  {\r\n   var b,f;\r\n   function g(v)\r\n   {\r\n   }\r\n   b=AppFramework.plugin();\r\n   return b.AddAct(b.AddAct(b.AddVar(b.AddDoc0(b.Yield(),\"list\",this.doc),\"sel\",AppFramework.lensStrO(AppFramework.mapVarO(ofStrO,toStr,this.selV))),\"add\",(f=this.add,function(x)\r\n   {\r\n    return g(f(x));\r\n   })),\"del\",this.delCur);\r\n  }\r\n },null,ListModelData);\r\n ListModelData.New=function(elemsW,doc,selV,add,delCur,def)\r\n {\r\n  return new ListModelData({\r\n   elemsW:elemsW,\r\n   doc:doc,\r\n   selV:selV,\r\n   add:add,\r\n   delCur:delCur,\r\n   def:def\r\n  });\r\n };\r\n AppFramework.mapVarO=function(ofBO,toB,sel)\r\n {\r\n  return new FromView.New(View$1.Map(function($1)\r\n  {\r\n   return $1==null?null:{\r\n    $:1,\r\n    $0:toB($1.$0)\r\n   };\r\n  },sel.get_View()),function(a)\r\n  {\r\n   var o;\r\n   if(a!=null&&a.$==1)\r\n    {\r\n     o=ofBO(a.$0);\r\n     o==null?void 0:sel.Set({\r\n      $:1,\r\n      $0:o.$0\r\n     });\r\n    }\r\n   else\r\n    sel.Set(null);\r\n  });\r\n };\r\n AppFramework.lensStrO=function(sel)\r\n {\r\n  return new FromView.New(View$1.Map(function($1)\r\n  {\r\n   return $1!=null&&$1.$==1?$1.$0:\"\";\r\n  },sel.get_View()),function(s)\r\n  {\r\n   if(s===\"\")\r\n    sel.Set(null);\r\n   else\r\n    sel.Set({\r\n     $:1,\r\n     $0:s\r\n    });\r\n  });\r\n };\r\n AppFramework.concatMainDocs=function(plugins)\r\n {\r\n  return Doc.Concat(Seq.choose(function(a)\r\n  {\r\n   var a$1;\r\n   a$1=AppFramework.Lazy(a.docDoc);\r\n   return a$1.$==0?{\r\n    $:1,\r\n    $0:a$1.$0\r\n   }:a$1.$==1?{\r\n    $:1,\r\n    $0:a$1.$0()\r\n   }:null;\r\n  },Seq.choose(function(plg)\r\n  {\r\n   return Seq.tryHead(plg.plgDocs);\r\n  },plugins)));\r\n };\r\n AppFramework.op_Dereference=function(v)\r\n {\r\n  return P.New((Operators$2.rtn())({\r\n   $:1,\r\n   $0:v\r\n  }));\r\n };\r\n AppFramework.getMainDoc=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.getMainDoc;\r\n };\r\n AppFramework.splitterPerc=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.splitterPerc;\r\n };\r\n AppFramework.addPlugIn=function(p)\r\n {\r\n  p.plgViews.Append(AppFramework.newViw(new PlgElemName({\r\n   $:0,\r\n   $0:\"PlugInName\"\r\n  }),View$1.Const(p.plgName.get_Id())));\r\n  AppFramework.plugIns().Append(p);\r\n };\r\n AppFramework.select=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.select;\r\n };\r\n AppFramework.delayAction=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.delayAction;\r\n };\r\n AppFramework.callAction=function(actN,p1,p2)\r\n {\r\n  (((function(a)\r\n  {\r\n   return(AppFramework.callAction0())(a);\r\n  }(actN))(p1))(p2));\r\n };\r\n AppFramework.callAction0=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.callAction0;\r\n };\r\n AppFramework.trigActChange=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.trigActChange;\r\n };\r\n AppFramework.trigAct=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.trigAct;\r\n };\r\n AppFramework.dragSplitter=function(varN,eventD)\r\n {\r\n  (AppFramework.dragSplitter0())([varN,eventD]);\r\n };\r\n AppFramework.dragSplitter0=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.dragSplitter0;\r\n };\r\n AppFramework.draggingEvent=function(first,value,ev)\r\n {\r\n  var el,vertical,startP,o,x,start,gap,size;\r\n  function getSize(el$1)\r\n  {\r\n   return vertical?first?el$1.getBoundingClientRect().width:-el$1.getBoundingClientRect().width:first?el$1.getBoundingClientRect().height:-el$1.getBoundingClientRect().height;\r\n  }\r\n  function mouseCoord(ev$1)\r\n  {\r\n   return vertical?ev$1.clientX:ev$1.clientY;\r\n  }\r\n  function drag(ev$1)\r\n  {\r\n   var v,e,e$1,a,a$1;\r\n   v=String.left(5,Global.String((e=(e$1=(mouseCoord(ev$1)-start)*100/(size-gap)+startP,(a=0,Unchecked.Compare(a,e$1)===1?a:e$1)),(a$1=100,Unchecked.Compare(a$1,e)===-1?a$1:e))));\r\n   value.Get()!==v?value.Set(v):void 0;\r\n  }\r\n  function finishDragging()\r\n  {\r\n   self.removeEventListener(\"mousemove\",drag,false);\r\n   self.removeEventListener(\"mouseup\",finishDragging,false);\r\n  }\r\n  el=ev.toElement;\r\n  vertical=el.parentElement.hasAttribute(\"vertical\");\r\n  startP=(o=(x=value.Get(),(ParseO.parseDoubleO())(x)),o==null?0:o.$0);\r\n  start=mouseCoord(ev);\r\n  gap=getSize(el);\r\n  size=getSize(el.parentElement);\r\n  self.addEventListener(\"mousemove\",drag,false);\r\n  self.addEventListener(\"mouseup\",finishDragging,false);\r\n  ev.preventDefault();\r\n };\r\n AppFramework.getValDirect=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.getValDirect;\r\n };\r\n AppFramework.setVarDirectD=function(varN,value)\r\n {\r\n  (Library.delayed(100,function(v)\r\n  {\r\n   AppFramework.setVarDirect(varN,v);\r\n  }))(value);\r\n };\r\n AppFramework.setVarDirect=function(varN,value)\r\n {\r\n  (AppFramework.setVarDirect0())([varN,value]);\r\n };\r\n AppFramework.setVarDirect0=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.setVarDirect0;\r\n };\r\n AppFramework.setVar=function(varN,value)\r\n {\r\n  (AppFramework.setVar0())([varN,value]);\r\n };\r\n AppFramework.setVar0=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.setVar0;\r\n };\r\n AppFramework.docReference=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.docReference;\r\n };\r\n AppFramework.Lazy=function(l)\r\n {\r\n  return l.f();\r\n };\r\n AppFramework.htmlDoc=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.htmlDoc;\r\n };\r\n AppFramework.textArea=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.textArea;\r\n };\r\n AppFramework.input=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.input;\r\n };\r\n AppFramework.inputLabel=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.inputLabel;\r\n };\r\n AppFramework.inputFile$2231$67=Runtime.Curried3(function(act,el,ev)\r\n {\r\n  return AppFramework.callFunction(el,ev,act.actFunction);\r\n });\r\n AppFramework.inputFile$2230$67=Runtime.Curried3(function($1,el,$2)\r\n {\r\n  el.value=\"\";\r\n });\r\n AppFramework.inputFile=function(attrs,labelName,actName)\r\n {\r\n  var o,o$1,t,act;\r\n  o=(o$1=(t=(AppFramework.splitName(AppFramework.defPlugInName()))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{\r\n   $:1,\r\n   $0:(act=o$1.$0,Doc.Element(\"div\",AppFramework.getAttrs(AppFramework.defPlugInName(),attrs),[Doc.Element(\"div\",[AttrProxy.Create(\"class\",\"input-group\")],[Doc.Element(\"span\",[AttrProxy.Create(\"class\",\"input-group-btn\")],[Doc.Element(\"label\",[AttrProxy.Create(\"class\",\"btn\")],[Doc.TextNode(labelName),Doc.Element(\"input\",[AttrProxy.Create(\"class\",\"form-control\"),AttrProxy.Create(\"type\",\"file\"),AttrModule.Style(\"display\",\"none\"),AttrProxy.HandlerImpl(\"click\",function(el)\r\n   {\r\n    return function()\r\n    {\r\n     el.value=\"\";\r\n    };\r\n   }),AttrProxy.HandlerImpl(\"change\",function(el)\r\n   {\r\n    return function(ev)\r\n    {\r\n     return AppFramework.callFunction(el,ev,act.actFunction);\r\n    };\r\n   })],[])])])])]))\r\n  });\r\n  return o==null?AppFramework.errDoc((function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"Action not found \"+Utils.toSafe($2));\r\n   };\r\n  }(Global.id))(actName)):o.$0;\r\n };\r\n AppFramework.docWithVar=function(f,_var)\r\n {\r\n  var g,t;\r\n  function f$1(o)\r\n  {\r\n   return o==null?null:{\r\n    $:1,\r\n    $0:f(o.$0)\r\n   };\r\n  }\r\n  function d()\r\n  {\r\n   return AppFramework.errDoc((function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(\"Var not found \"+Utils.toSafe($2));\r\n    };\r\n   }(Global.id))(_var));\r\n  }\r\n  return Doc.BindView((g=function(o)\r\n  {\r\n   return o==null?d():o.$0;\r\n  },function(x)\r\n  {\r\n   return g(f$1(x));\r\n  }),(t=AppFramework.getParmRef(_var),AppFramework.tryGetVoVW(t[0],t[1])));\r\n };\r\n AppFramework.depWithExtracts=function(f)\r\n {\r\n  var b;\r\n  return AppFramework.runDef((b=Depend.depend(),b.Delay(function()\r\n  {\r\n   return b.Bind(AppFramework.extractAtsD(),function(a)\r\n   {\r\n    return b.Bind(AppFramework.extractDocD(),function(a$1)\r\n    {\r\n     return b.Bind(AppFramework.extractTextD(),function(a$2)\r\n     {\r\n      return b.Return(f(a,a$1,a$2));\r\n     });\r\n    });\r\n   });\r\n  })));\r\n };\r\n AppFramework.getParmRef=function(_var)\r\n {\r\n  var x,o,o$1,$1,b;\r\n  x=(o=(o$1=String.delimitedO(\"@{\",\"}\",_var),o$1==null?null:{\r\n   $:1,\r\n   $0:($1=o$1.$0,($1[0],b=$1[1],$1[2],b))\r\n  }),o==null?_var:o.$0);\r\n  return(AppFramework.splitName(AppFramework.defPlugInName()))(x);\r\n };\r\n AppFramework.runDef=function(d)\r\n {\r\n  return AppFramework.run(AppFramework.defPlugInName(),d);\r\n };\r\n AppFramework.defPlugInName=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defPlugInName;\r\n };\r\n AppFramework.extractAttD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.extractAttD;\r\n };\r\n AppFramework.extractAtsD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.extractAtsD$1;\r\n };\r\n AppFramework.extractDocD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.extractDocD$1;\r\n };\r\n AppFramework.extractTextD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.extractTextD$1;\r\n };\r\n AppFramework.run=function(pin,d)\r\n {\r\n  var x,b;\r\n  x=(b=Operators$2.depend(),b.Delay(function()\r\n  {\r\n   return b.Bind(AppFramework.getDocwD(),function(a)\r\n   {\r\n    return b.Bind(AppFramework.getTextActViewD(),function(a$1)\r\n    {\r\n     return b.Bind(AppFramework.currentPlugInNameD(),function(a$2)\r\n     {\r\n      return b.Return(Depend.resolver(List.ofArray([[\"getDocFromReference\",a],[\"getTextActViewFromReference\",a$1],[\"currentPlugInName\",a$2]]),d));\r\n     });\r\n    });\r\n   });\r\n  }));\r\n  return Depend.resolver(List.ofArray([[\"currentPlugInName\",pin]]),x);\r\n };\r\n AppFramework.errDocf=function(fmt)\r\n {\r\n  return fmt(AppFramework.errDoc);\r\n };\r\n AppFramework.errDoc=function(txt)\r\n {\r\n  return Doc.Element(\"div\",[],[Doc.TextNode(txt)]);\r\n };\r\n AppFramework.getTextActViewD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.getTextActViewD;\r\n };\r\n AppFramework.getDocD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.getDocD;\r\n };\r\n AppFramework.getDocwD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.getDocwD;\r\n };\r\n AppFramework.currentPlugInNameD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.currentPlugInNameD;\r\n };\r\n AppFramework.currentPlugInNameDef=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.currentPlugInNameDef;\r\n };\r\n AppFramework.valToAttr=function(atn,a)\r\n {\r\n  return a.$==0?AttrModule.Dynamic(atn,a.$0):AttrProxy.Create(atn,a.$0);\r\n };\r\n AppFramework.valToStyle=function(atn,a)\r\n {\r\n  return a.$==0?AttrModule.DynamicStyle(atn,a.$0):AttrModule.Style(atn,a.$0);\r\n };\r\n AppFramework.choiceToString=function(a)\r\n {\r\n  return a.$==1?(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"@{\"+Utils.prettyPrint($2)+\"}\");\r\n   };\r\n  }(Global.id))(a.$0):a.$0;\r\n };\r\n AppFramework.makeAViewDoc0=Global.id;\r\n AppFramework.makeAViewDocL=function(f)\r\n {\r\n  return Lazy.Create(function()\r\n  {\r\n   return AppFramework.makeAViewDoc(f);\r\n  });\r\n };\r\n AppFramework.makeAViewDoc=function(f)\r\n {\r\n  return Doc.BindView(function()\r\n  {\r\n   return f();\r\n  },AppFramework.baseView());\r\n };\r\n AppFramework.baseView=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.baseView;\r\n };\r\n AppFramework.mainX=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainX;\r\n };\r\n AppFramework.a11V=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.a11V;\r\n };\r\n AppFramework.add1=function(a)\r\n {\r\n  return a+1;\r\n };\r\n AppFramework.unwrapBindWrap=function(f,pv)\r\n {\r\n  return P.New(Operators$2.op_BarGreaterGreater(pv.r,f));\r\n };\r\n AppFramework.bindWrap=function(f,pv)\r\n {\r\n  return P.New(Operators$2.op_GreaterGreaterEquals(pv,function(v)\r\n  {\r\n   return f(v).r;\r\n  }));\r\n };\r\n AppFramework.getAttrs=function(lytNm,attrs)\r\n {\r\n  return List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.append(Seq.choose(function(a)\r\n   {\r\n    var $1,value,value$1,name;\r\n    function s(el,a$1)\r\n    {\r\n     var act;\r\n     if(a$1.$==1)\r\n      {\r\n       act=a$1.$0;\r\n       try\r\n       {\r\n        return el.addEventListener(Strings.Trim(name),function(ev)\r\n        {\r\n         return AppFramework.callFunction(el,ev,act.actFunction);\r\n        },false);\r\n       }\r\n       catch(e)\r\n       {\r\n        return(function($2)\r\n        {\r\n         return function($3)\r\n         {\r\n          return $2(Utils.prettyPrint($3));\r\n         };\r\n        }(function(s$1)\r\n        {\r\n         console.log(s$1);\r\n        }))(e);\r\n       }\r\n      }\r\n     else\r\n      try\r\n      {\r\n       return el.setAttribute(Strings.Trim(name),Strings.Trim(a$1.$0));\r\n      }\r\n      catch(e$1)\r\n      {\r\n       return(function($2)\r\n       {\r\n        return function($3)\r\n        {\r\n         return $2(Utils.prettyPrint($3));\r\n        };\r\n       }(function(s$1)\r\n       {\r\n        console.log(s$1);\r\n       }))(e$1);\r\n      }\r\n    }\r\n    return!Unchecked.Equals(a,null)&&a.length===2&&(value=Arrays.get(a,1),Strings.Trim(Arrays.get(a,0))!==\"\"&&Strings.Trim(value)!==\"\")?(value$1=Arrays.get(a,1),(name=Arrays.get(a,0),{\r\n     $:1,\r\n     $0:AttrModule.DynamicCustom(function($2)\r\n     {\r\n      return function($3)\r\n      {\r\n       return s($2,$3);\r\n      };\r\n     },AppFramework.getTextData(lytNm,Strings.Trim(value$1)))\r\n    })):null;\r\n   },Seq.map(function(s)\r\n   {\r\n    return String.splitByChar(\"=\",s);\r\n   },String.splitByChar(\";\",attrs))),Seq.delay(function()\r\n   {\r\n    return Seq.choose(function(a)\r\n    {\r\n     var $1,value,value$1,name,x;\r\n     return!Unchecked.Equals(a,null)&&a.length===2&&(value=Arrays.get(a,1),Strings.Trim(Arrays.get(a,0))!==\"\"&&Strings.Trim(value)!==\"\")?(value$1=Arrays.get(a,1),(name=Arrays.get(a,0),{\r\n      $:1,\r\n      $0:(x=View$1.Map(function(a$1)\r\n      {\r\n       return a$1.$==1?(function($2)\r\n       {\r\n        return function($3)\r\n        {\r\n         return $2(\"@{\"+Utils.toSafe($3)+\"}\");\r\n        };\r\n       }(Global.id))(a$1.$0.actName.get_Id()):Strings.Trim(a$1.$0);\r\n      },AppFramework.getTextData(lytNm,Strings.Trim(value$1))),AttrModule.DynamicStyle(Strings.Trim(name),x))\r\n     })):null;\r\n    },Seq.map(function(s)\r\n    {\r\n     return String.splitByChar(\":\",s);\r\n    },String.splitByChar(\";\",attrs)));\r\n   }));\r\n  }));\r\n };\r\n AppFramework.getTextData=function(lytNm,txt)\r\n {\r\n  var o,o$1,$1,bef;\r\n  o=(o$1=String.delimitedO(\"@{\",\"}\",txt),o$1==null?null:{\r\n   $:1,\r\n   $0:($1=o$1.$0,(bef=$1[0],AppFramework.getOneTextData(lytNm,$1[1],bef,$1[2])))\r\n  });\r\n  return o==null?View$1.Const({\r\n   $:0,\r\n   $0:txt\r\n  }):o.$0;\r\n };\r\n AppFramework.getOneTextData=function(lytNm,name,bef,aft)\r\n {\r\n  var p,plg,n;\r\n  p=(AppFramework.splitName(lytNm))(name);\r\n  plg=p[0];\r\n  n=p[1];\r\n  return View$1.Bind(function(a)\r\n  {\r\n   return a==null?View$1.Bind(function(a$1)\r\n   {\r\n    var txt;\r\n    return a$1==null?View$1.Const({\r\n     $:0,\r\n     $0:((((Runtime.Curried(function($1,$2,$3,$4)\r\n     {\r\n      return $1(Utils.toSafe($2)+\" @{Missing \"+Utils.toSafe($3)+\"}\"+Utils.toSafe($4));\r\n     },4))(Global.id))(bef))(name))(aft)\r\n    }):(txt=a$1.$0,View$1.Bind(function(a$2)\r\n    {\r\n     return a$2.$==1?View$1.Const({\r\n      $:0,\r\n      $0:(function($1)\r\n      {\r\n       return function($2)\r\n       {\r\n        return $1(\"Unexpected Action @{\"+Utils.toSafe($2)+\"}\");\r\n       };\r\n      }(Global.id))(a$2.$0.actName.get_Id())\r\n     }):View$1.Const({\r\n      $:0,\r\n      $0:bef+txt+a$2.$0\r\n     });\r\n    },AppFramework.getTextData(lytNm,aft)));\r\n   },AppFramework.tryGetWoWW(plg,n)):View$1.Const({\r\n    $:1,\r\n    $0:a.$0\r\n   });\r\n  },AppFramework.tryGetActW(plg,n));\r\n };\r\n AppFramework.tryGetWoW=function(plgName,viwName)\r\n {\r\n  var o,o$1,o$2;\r\n  o=(o$1=AppFramework.tryGetViw(plgName,viwName),o$1==null?null:{\r\n   $:1,\r\n   $0:{\r\n    $:1,\r\n    $0:o$1.$0.viwView\r\n   }\r\n  });\r\n  return o==null?(o$2=AppFramework.tryGetVar(plgName,viwName),o$2==null?null:{\r\n   $:1,\r\n   $0:o$2.$0.varVar.get_View()\r\n  }):o.$0;\r\n };\r\n AppFramework.tryGetVoV=function(plgName,varName)\r\n {\r\n  var o,o$1,o$2;\r\n  o=(o$1=AppFramework.tryGetVar(plgName,varName),o$1==null?null:{\r\n   $:1,\r\n   $0:{\r\n    $:1,\r\n    $0:o$1.$0.varVar\r\n   }\r\n  });\r\n  return o==null?(o$2=AppFramework.tryGetViw(plgName,varName),o$2==null?null:{\r\n   $:1,\r\n   $0:new FromView.New(o$2.$0.viwView,Global.ignore)\r\n  }):o.$0;\r\n };\r\n AppFramework.tryGetDoc=function(plgName,docName)\r\n {\r\n  var o;\r\n  o=AppFramework.tryGetPlugIn(plgName);\r\n  return o==null?null:o.$0.plgDocs.TryFindByKey(docName);\r\n };\r\n AppFramework.tryGetQry=function(plgName,qryName)\r\n {\r\n  var o;\r\n  o=AppFramework.tryGetPlugIn(plgName);\r\n  return o==null?null:o.$0.plgQueries.TryFindByKey(qryName);\r\n };\r\n AppFramework.tryGetAct=function(plgName,actName)\r\n {\r\n  var o;\r\n  o=AppFramework.tryGetPlugIn(plgName);\r\n  return o==null?null:o.$0.plgActions.TryFindByKey(actName);\r\n };\r\n AppFramework.tryGetViw=function(plgName,viwName)\r\n {\r\n  var o;\r\n  o=AppFramework.tryGetPlugIn(plgName);\r\n  return o==null?null:o.$0.plgViews.TryFindByKey(viwName);\r\n };\r\n AppFramework.tryGetVar=function(plgName,varName)\r\n {\r\n  var o;\r\n  o=AppFramework.tryGetPlugIn(plgName);\r\n  return o==null?null:o.$0.plgVars.TryFindByKey(varName);\r\n };\r\n AppFramework.tryGetPlugIn=function(plgName)\r\n {\r\n  return AppFramework.plugIns().TryFindByKey(plgName);\r\n };\r\n AppFramework.tryGetWoWW=function(plgName,viwName)\r\n {\r\n  return View$1.Bind(function(a)\r\n  {\r\n   return a==null?View$1.Bind(function(a$1)\r\n   {\r\n    return a$1==null?View$1.Const(null):View$1.Map(function(a$2)\r\n    {\r\n     return{\r\n      $:1,\r\n      $0:a$2\r\n     };\r\n    },a$1.$0.varVar.get_View());\r\n   },AppFramework.tryGetVarW(plgName,viwName)):View$1.Map(function(a$1)\r\n   {\r\n    return{\r\n     $:1,\r\n     $0:a$1\r\n    };\r\n   },a.$0.viwView);\r\n  },AppFramework.tryGetViwW(plgName,viwName));\r\n };\r\n AppFramework.tryGetVoVW=function(plgName,varName)\r\n {\r\n  return View$1.Bind(function(a)\r\n  {\r\n   return a==null?View$1.Map(function(a$1)\r\n   {\r\n    return a$1==null?null:{\r\n     $:1,\r\n     $0:new FromView.New(a$1.$0.viwView,Global.ignore)\r\n    };\r\n   },AppFramework.tryGetViwW(plgName,varName)):View$1.Const({\r\n    $:1,\r\n    $0:a.$0.varVar\r\n   });\r\n  },AppFramework.tryGetVarW(plgName,varName));\r\n };\r\n AppFramework.tryGetDocW=function(plgName,docName)\r\n {\r\n  return View$1.Bind(function(a)\r\n  {\r\n   return a!=null&&a.$==1?a.$0.plgDocs.TryFindByKeyAsView(docName):View$1.Const(null);\r\n  },AppFramework.tryGetPlugInW(plgName));\r\n };\r\n AppFramework.tryGetQryW=function(plgName,qryName)\r\n {\r\n  return View$1.Bind(function(a)\r\n  {\r\n   return a!=null&&a.$==1?a.$0.plgQueries.TryFindByKeyAsView(qryName):View$1.Const(null);\r\n  },AppFramework.tryGetPlugInW(plgName));\r\n };\r\n AppFramework.tryGetActW=function(plgName,actName)\r\n {\r\n  return View$1.Bind(function(a)\r\n  {\r\n   return a!=null&&a.$==1?a.$0.plgActions.TryFindByKeyAsView(actName):View$1.Const(null);\r\n  },AppFramework.tryGetPlugInW(plgName));\r\n };\r\n AppFramework.tryGetViwW=function(plgName,viwName)\r\n {\r\n  return View$1.Bind(function(a)\r\n  {\r\n   return a!=null&&a.$==1?a.$0.plgViews.TryFindByKeyAsView(viwName):View$1.Const(null);\r\n  },AppFramework.tryGetPlugInW(plgName));\r\n };\r\n AppFramework.tryGetVarW=function(plgName,varName)\r\n {\r\n  return View$1.Bind(function(a)\r\n  {\r\n   return a!=null&&a.$==1?a.$0.plgVars.TryFindByKeyAsView(varName):View$1.Const(null);\r\n  },AppFramework.tryGetPlugInW(plgName));\r\n };\r\n AppFramework.tryGetPlugInW=function(plgName)\r\n {\r\n  return AppFramework.plugIns().TryFindByKeyAsView(plgName);\r\n };\r\n AppFramework.plugin=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.plugin;\r\n };\r\n AppFramework.newDocF=function(name,docF)\r\n {\r\n  return PlugInDoc.New(name,Lazy.Create(function()\r\n  {\r\n   return docF;\r\n  }));\r\n };\r\n AppFramework.newDocL=function(name,docL)\r\n {\r\n  return PlugInDoc.New(name,docL);\r\n };\r\n AppFramework.newActF=function(name,fncF)\r\n {\r\n  return PlugInAction.New(name,fncF,View$1.Const(true));\r\n };\r\n AppFramework.newAct=function(name,fnc)\r\n {\r\n  return PlugInAction.New(name,{\r\n   $:0,\r\n   $0:fnc\r\n  },View$1.Const(true));\r\n };\r\n AppFramework.newQry=function(name,qry)\r\n {\r\n  return PlugInQuery.New(name,qry);\r\n };\r\n AppFramework.newDoc0=function(name,f)\r\n {\r\n  return PlugInDoc.New(name,Lazy.Create(function()\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:f\r\n   };\r\n  }));\r\n };\r\n AppFramework.newDoc=function(name,doc)\r\n {\r\n  return PlugInDoc.New(name,Lazy.Create(function()\r\n  {\r\n   return{\r\n    $:0,\r\n    $0:doc.f()\r\n   };\r\n  }));\r\n };\r\n AppFramework.newViw=function(name,viw)\r\n {\r\n  return PlugInView.New(name,viw);\r\n };\r\n AppFramework.newVar=function(name,_var)\r\n {\r\n  return PlugInVar.New(name,_var);\r\n };\r\n AppFramework.vertical$1709$39=function(mouseDown)\r\n {\r\n  return function(te)\r\n  {\r\n   mouseDown(te.Event);\r\n  };\r\n };\r\n AppFramework.vertical$1708$39=Global.id;\r\n AppFramework.vertical$1707$39=Global.id;\r\n AppFramework.vertical=function(partSizes,afterRender,afterRenderSp,mouseDown,gap)\r\n {\r\n  var b,t,p,i;\r\n  return(b=(t=ProviderBuilder.Make().WithHole({\r\n   $:2,\r\n   $0:\"partsizes\",\r\n   $1:partSizes\r\n  }).WithHole({\r\n   $:7,\r\n   $0:\"afterrender\",\r\n   $1:afterRender\r\n  }).WithHole({\r\n   $:7,\r\n   $0:\"afterrendersp\",\r\n   $1:afterRenderSp\r\n  }),t.WithHole(Handler.EventQ2(t.k,\"mousedown\",function()\r\n  {\r\n   return t.i;\r\n  },function(te)\r\n  {\r\n   mouseDown(te.Event);\r\n  }))).WithHole({\r\n   $:2,\r\n   $0:\"gap\",\r\n   $1:gap\r\n  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.wcompsplitterver(p[0])),(b.i=i,i)))).get_Doc();\r\n };\r\n AppFramework.horizontal$1701$39=function(mouseDown)\r\n {\r\n  return function(te)\r\n  {\r\n   mouseDown(te.Event);\r\n  };\r\n };\r\n AppFramework.horizontal$1700$39=Global.id;\r\n AppFramework.horizontal$1699$39=Global.id;\r\n AppFramework.horizontal=function(partSizes,afterRender,afterRenderSp,mouseDown,gap)\r\n {\r\n  var b,t,p,i;\r\n  return(b=(t=ProviderBuilder.Make().WithHole({\r\n   $:2,\r\n   $0:\"partsizes\",\r\n   $1:partSizes\r\n  }).WithHole({\r\n   $:7,\r\n   $0:\"afterrender\",\r\n   $1:afterRender\r\n  }).WithHole({\r\n   $:7,\r\n   $0:\"afterrendersp\",\r\n   $1:afterRenderSp\r\n  }),t.WithHole(Handler.EventQ2(t.k,\"mousedown\",function()\r\n  {\r\n   return t.i;\r\n  },function(te)\r\n  {\r\n   mouseDown(te.Event);\r\n  }))).WithHole({\r\n   $:2,\r\n   $0:\"gap\",\r\n   $1:gap\r\n  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.wcompsplitterhor(p[0])),(b.i=i,i)))).get_Doc();\r\n };\r\n AppFramework.mainDoc$1690$42=function()\r\n {\r\n  return function()\r\n  {\r\n   AppFramework.mainDocV().Set(\"AppFramework.AppFwkClient\");\r\n  };\r\n };\r\n AppFramework.mainDoc=function()\r\n {\r\n  var b,M,t,M$1,p,i;\r\n  return(b=(M=AppFramework.getMainClientDoc(),(t=(M$1=AppFramework.mainDocV().get_View(),ProviderBuilder.Make().WithHole({\r\n   $:2,\r\n   $0:\"maindoc\",\r\n   $1:M$1\r\n  })),t.WithHole(Handler.EventQ2(t.k,\"goclient\",function()\r\n  {\r\n   return t.i;\r\n  },function()\r\n  {\r\n   AppFramework.mainDocV().Set(\"AppFramework.AppFwkClient\");\r\n  }))).WithHole({\r\n   $:0,\r\n   $0:\"mainclient\",\r\n   $1:M\r\n  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.appframework(p[0])),(b.i=i,i)))).get_Doc();\r\n };\r\n AppFramework.getMainClientDoc=function()\r\n {\r\n  var x;\r\n  return Doc.EmbedView((x=AppFramework.plugIns().v,View$1.Map2(function(mainDoc,plgs)\r\n  {\r\n   var x$1,v;\r\n   x$1=Seq.tryPick(function(plg)\r\n   {\r\n    var o;\r\n    o=Seq.tryFind(function(doc)\r\n    {\r\n     return plg.plgName.get_Id()===mainDoc||plg.plgName.get_Id()+\".\"+doc.docName.get_Id()===mainDoc;\r\n    },plg.plgDocs);\r\n    return o==null?null:{\r\n     $:1,\r\n     $0:AppFramework.getActualDoc(o.$0)\r\n    };\r\n   },plgs);\r\n   v=AppFramework.AppFwkClient().f();\r\n   return x$1==null?v:x$1.$0;\r\n  },AppFramework.mainDocV().get_View(),x)));\r\n };\r\n AppFramework.getActualDoc=function(doc)\r\n {\r\n  var m;\r\n  m=doc.docDoc.f();\r\n  return m.$==0?m.$0:m.$==1?m.$0():Doc.Element(\"div\",[],[Doc.TextNode((function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"Doc with parameters not allowed here: \"+GeneratedPrintf.p($2));\r\n   };\r\n  }(Global.id))(doc))]);\r\n };\r\n AppFramework.AppFwkClient=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.AppFwkClient;\r\n };\r\n AppFramework.renderQueries$1653$39=function(qry)\r\n {\r\n  return function()\r\n  {\r\n   Global.alert(qry.qryFunction(null));\r\n  };\r\n };\r\n AppFramework.renderQueries=function()\r\n {\r\n  function a(plg,qry)\r\n  {\r\n   return[plg.plgName,qry.qryName];\r\n  }\r\n  function a$1(plg,qry)\r\n  {\r\n   var b,t,N,p,i;\r\n   return(b=(t=(N=qry.qryName.get_Id(),ProviderBuilder.Make().WithHole({\r\n    $:1,\r\n    $0:\"name\",\r\n    $1:N\r\n   })),t.WithHole(Handler.EventQ2(t.k,\"select\",function()\r\n   {\r\n    return t.i;\r\n   },function()\r\n   {\r\n    Global.alert(qry.qryFunction(null));\r\n   }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();\r\n  }\r\n  return Doc.ConvertBy(function($1)\r\n  {\r\n   return a($1[0],$1[1]);\r\n  },function($1)\r\n  {\r\n   return a$1($1[0],$1[1]);\r\n  },View$1.Map(function(plg)\r\n  {\r\n   return Seq.map(function(v)\r\n   {\r\n    return[plg,v];\r\n   },plg.plgQueries);\r\n  },AppFramework.currentPlugInW()));\r\n };\r\n AppFramework.renderActions$1642$39=function(act)\r\n {\r\n  return function(ev)\r\n  {\r\n   AppFramework.callFunction(null,ev,act.actFunction);\r\n  };\r\n };\r\n AppFramework.renderActions=function()\r\n {\r\n  function a(plg,act)\r\n  {\r\n   return[plg.plgName,act.actName];\r\n  }\r\n  function a$1(plg,act)\r\n  {\r\n   var parms,m,x,x$1,b,A,t,N,p,i;\r\n   parms=(m=act.actFunction,m.$==1?(x=Strings.concat(\", \",List.ofArray([m.$1])),(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(\"(\"+Utils.toSafe($2)+\")\");\r\n    };\r\n   }(Global.id))(x)):m.$==2?(x$1=Strings.concat(\", \",List.ofArray([m.$1,m.$2])),(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(\"(\"+Utils.toSafe($2)+\")\");\r\n    };\r\n   }(Global.id))(x$1)):\"\");\r\n   return(b=(A=AttrModule.DynamicPred(\"disabled\",View$1.Map(function($1)\r\n   {\r\n    return!$1;\r\n   },act.actEnabled),View$1.Const(\"\")),(t=(N=act.actName.get_Id()+parms,ProviderBuilder.Make().WithHole({\r\n    $:1,\r\n    $0:\"name\",\r\n    $1:N\r\n   })),t.WithHole(Handler.EventQ2(t.k,\"click\",function()\r\n   {\r\n    return t.i;\r\n   },function(ev)\r\n   {\r\n    AppFramework.callFunction(null,ev,act.actFunction);\r\n   }))).WithHole({\r\n    $:3,\r\n    $0:\"attrs\",\r\n    $1:A\r\n   })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.action(p[0])),(b.i=i,i)))).get_Doc();\r\n  }\r\n  return Doc.ConvertBy(function($1)\r\n  {\r\n   return a($1[0],$1[1]);\r\n  },function($1)\r\n  {\r\n   return a$1($1[0],$1[1]);\r\n  },View$1.Map(function(plg)\r\n  {\r\n   return Seq.map(function(v)\r\n   {\r\n    return[plg,v];\r\n   },plg.plgActions);\r\n  },AppFramework.currentPlugInW()));\r\n };\r\n AppFramework.callFunction=function(p1,p2,actF)\r\n {\r\n  if(actF.$==1)\r\n   actF.$0(p2);\r\n  else\r\n   if(actF.$==2)\r\n    (actF.$0(p1))(p2);\r\n   else\r\n    actF.$0();\r\n };\r\n AppFramework.renderDocs$1622$39=function(doc)\r\n {\r\n  return function()\r\n  {\r\n   View$1.Get(function(plg)\r\n   {\r\n    var a;\r\n    a=plg.plgName.get_Id()+\".\"+doc.docName.get_Id();\r\n    AppFramework.mainDocV().Set(a);\r\n   },AppFramework.currentPlugInW());\r\n  };\r\n };\r\n AppFramework.renderDocs=function()\r\n {\r\n  function a(plg,doc)\r\n  {\r\n   return[plg.plgName,doc.docName];\r\n  }\r\n  function a$1(plg,doc)\r\n  {\r\n   var b,t,N,p,i;\r\n   return(b=(t=(N=doc.docName.get_Id()+AppFramework.docParms(doc),ProviderBuilder.Make().WithHole({\r\n    $:1,\r\n    $0:\"name\",\r\n    $1:N\r\n   })),t.WithHole(Handler.EventQ2(t.k,\"select\",function()\r\n   {\r\n    return t.i;\r\n   },function()\r\n   {\r\n    View$1.Get(function(plg$1)\r\n    {\r\n     var a$2;\r\n     a$2=plg$1.plgName.get_Id()+\".\"+doc.docName.get_Id();\r\n     AppFramework.mainDocV().Set(a$2);\r\n    },AppFramework.currentPlugInW());\r\n   }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();\r\n  }\r\n  return Doc.ConvertBy(function($1)\r\n  {\r\n   return a($1[0],$1[1]);\r\n  },function($1)\r\n  {\r\n   return a$1($1[0],$1[1]);\r\n  },View$1.Bind(function(plg)\r\n  {\r\n   function m(v)\r\n   {\r\n    return[plg,v];\r\n   }\r\n   return View$1.Map(function(s)\r\n   {\r\n    return Seq.map(m,s);\r\n   },plg.plgDocs.v);\r\n  },AppFramework.currentPlugInW()));\r\n };\r\n AppFramework.docParms=function(doc)\r\n {\r\n  var m,x,x$1,x$2,x$3,x$4;\r\n  m=doc.docDoc.f();\r\n  return m.$==1?\"()\":m.$==2?(x=Strings.concat(\", \",List.ofArray([m.$1])),(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"(\"+Utils.toSafe($2)+\")\");\r\n   };\r\n  }(Global.id))(x)):m.$==3?(x$1=Strings.concat(\", \",List.ofArray([m.$1,m.$2])),(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"(\"+Utils.toSafe($2)+\")\");\r\n   };\r\n  }(Global.id))(x$1)):m.$==4?(x$2=Strings.concat(\", \",List.ofArray([m.$1,m.$2,m.$3])),(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"(\"+Utils.toSafe($2)+\")\");\r\n   };\r\n  }(Global.id))(x$2)):m.$==5?(x$3=Strings.concat(\", \",List.ofArray([m.$1,m.$2,m.$3,m.$4])),(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"(\"+Utils.toSafe($2)+\")\");\r\n   };\r\n  }(Global.id))(x$3)):m.$==6?(x$4=Strings.concat(\", \",List.ofArray([m.$1,m.$2,m.$3,m.$4,m.$5])),(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"(\"+Utils.toSafe($2)+\")\");\r\n   };\r\n  }(Global.id))(x$4)):\"\";\r\n };\r\n AppFramework.renderViews=function()\r\n {\r\n  function a(plg,viw)\r\n  {\r\n   return[plg.plgName,viw.viwName];\r\n  }\r\n  function a$1(plg,viw)\r\n  {\r\n   var b,N,p,i;\r\n   return(b=(N=viw.viwName.get_Id(),ProviderBuilder.Make().WithHole({\r\n    $:1,\r\n    $0:\"name\",\r\n    $1:N\r\n   })).WithHole({\r\n    $:2,\r\n    $0:\"value\",\r\n    $1:viw.viwView\r\n   }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.namevalue(p[0])),(b.i=i,i)))).get_Doc();\r\n  }\r\n  return Doc.ConvertBy(function($1)\r\n  {\r\n   return a($1[0],$1[1]);\r\n  },function($1)\r\n  {\r\n   return a$1($1[0],$1[1]);\r\n  },View$1.Map(function(plg)\r\n  {\r\n   return Seq.map(function(v)\r\n   {\r\n    return[plg,v];\r\n   },plg.plgViews);\r\n  },AppFramework.currentPlugInW()));\r\n };\r\n AppFramework.renderVars=function()\r\n {\r\n  function a(plg,_var)\r\n  {\r\n   return[plg.plgName,_var.varName];\r\n  }\r\n  function a$1(plg,_var)\r\n  {\r\n   var b,N,p,i;\r\n   return(b=(N=_var.varName.get_Id(),ProviderBuilder.Make().WithHole({\r\n    $:1,\r\n    $0:\"name\",\r\n    $1:N\r\n   })).WithHole({\r\n    $:8,\r\n    $0:\"value\",\r\n    $1:_var.varVar\r\n   }),(p=Handler.CompleteHoles(b.k,b.h,[[\"value\",0]]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.namevalueinput(p[0])),(b.i=i,i)))).get_Doc();\r\n  }\r\n  return Doc.ConvertBy(function($1)\r\n  {\r\n   return a($1[0],$1[1]);\r\n  },function($1)\r\n  {\r\n   return a$1($1[0],$1[1]);\r\n  },View$1.Map(function(plg)\r\n  {\r\n   return Seq.map(function(v)\r\n   {\r\n    return[plg,v];\r\n   },plg.plgVars);\r\n  },AppFramework.currentPlugInW()));\r\n };\r\n AppFramework.renderPlugIns$1581$35=function(name)\r\n {\r\n  return function()\r\n  {\r\n   AppFramework.selectionPlugInO().Set({\r\n    $:1,\r\n    $0:name\r\n   });\r\n  };\r\n };\r\n AppFramework.renderPlugIns=function()\r\n {\r\n  return Doc.Flatten(AppFramework.plugIns().MapLens(function($1)\r\n  {\r\n   var b,t,N,p,i;\r\n   return(b=(t=(N=$1.get_Id(),ProviderBuilder.Make().WithHole({\r\n    $:1,\r\n    $0:\"name\",\r\n    $1:N\r\n   })),t.WithHole(Handler.EventQ2(t.k,\"select\",function()\r\n   {\r\n    return t.i;\r\n   },function()\r\n   {\r\n    AppFramework.selectionPlugInO().Set({\r\n     $:1,\r\n     $0:$1\r\n    });\r\n   }))).WithHole({\r\n    $:2,\r\n    $0:\"selected\",\r\n    $1:View$1.Map(function($2)\r\n    {\r\n     return Unchecked.Equals($2,{\r\n      $:1,\r\n      $0:$1\r\n     })?\"selected\":\"\";\r\n    },AppFramework.selectionPlugInO().get_View())\r\n   }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();\r\n  }));\r\n };\r\n AppFramework.currentPlugInV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.currentPlugInV;\r\n };\r\n AppFramework.currentPlugInW=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.currentPlugInW;\r\n };\r\n AppFramework.selectionPlugInO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.selectionPlugInO;\r\n };\r\n AppFramework.splitName=function(lytNm)\r\n {\r\n  function f(s)\r\n  {\r\n   return String.splitByChar(\".\",s);\r\n  }\r\n  function g(a)\r\n  {\r\n   return Arrays.length(a)===1?[lytNm,new PlgElemName({\r\n    $:0,\r\n    $0:Strings.Trim(Arrays.get(a,0))\r\n   })]:[new PlugInName({\r\n    $:0,\r\n    $0:Strings.Trim(Arrays.get(a,0))\r\n   }),new PlgElemName({\r\n    $:0,\r\n    $0:Strings.Trim(Arrays.get(a,1))\r\n   })];\r\n  }\r\n  return function(x)\r\n  {\r\n   return g(f(x));\r\n  };\r\n };\r\n AppFramework.defaultPlugIn=function()\r\n {\r\n  return PlugIn.New(new PlugInName({\r\n   $:0,\r\n   $0:\"\"\r\n  }),new ListModel$1.New$1(function(_var)\r\n  {\r\n   return _var.varName;\r\n  }),new ListModel$1.New$1(function(viw)\r\n  {\r\n   return viw.viwName;\r\n  }),new ListModel$1.New$1(function(doc)\r\n  {\r\n   return doc.docName;\r\n  }),new ListModel$1.New$1(function(act)\r\n  {\r\n   return act.actName;\r\n  }),new ListModel$1.New$1(function(qry)\r\n  {\r\n   return qry.qryName;\r\n  }));\r\n };\r\n AppFramework.TemplateFileName=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.TemplateFileName;\r\n };\r\n AppFramework.mainDocV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainDocV;\r\n };\r\n AppFramework.plugIns=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.plugIns;\r\n };\r\n LM.addElements=function(li,elems)\r\n {\r\n  View$1.Get(function(elements)\r\n  {\r\n   elements.AppendMany(elems);\r\n  },li.elemsW);\r\n };\r\n LM.getDoc=function(keyF,def,newF,predWO,elUI)\r\n {\r\n  return LM.getDocFor(ListModel$1.Create(keyF,List.T.Empty),def,newF,predWO,elUI);\r\n };\r\n LM.getDocFor=function(elements,def,newF,predWO,elUI)\r\n {\r\n  return LM.getDocForW(View$1.Const(elements),elements.key,def,newF,predWO,elUI);\r\n };\r\n LM.getDocForW=function(elementsW,keyF,def,newF,predWO,elUI)\r\n {\r\n  var selected0,selectedV,b,result,elUIF,listW;\r\n  function _delete(k,u)\r\n  {\r\n   selectedV.Set(null);\r\n   return View$1.Get(function(elements)\r\n   {\r\n    elements.RemoveByKey(k);\r\n   },elementsW);\r\n  }\r\n  selected0=Var$2.Create$1(null);\r\n  selectedV=new FromView.New((b=View$1.get_Do(),View$1.Bind(function(a)\r\n  {\r\n   return View$1.Bind(function(a$1)\r\n   {\r\n    var sel;\r\n    return a$1!=null&&a$1.$==1?(sel=a$1.$0,View$1.Bind(function(a$2)\r\n    {\r\n     return!a$2?View$1.Const(null):View$1.Const({\r\n      $:1,\r\n      $0:sel\r\n     });\r\n    },a.ContainsKeyAsView(sel))):View$1.Const(null);\r\n   },selected0.get_View());\r\n  },elementsW)),function(v)\r\n  {\r\n   View$1.Get(function(elements)\r\n   {\r\n    var v$1,$1;\r\n    v$1=v!=null&&v.$==1&&(elements.ContainsKey(v.$0)&&($1=v.$0,true))?{\r\n     $:1,\r\n     $0:$1\r\n    }:null;\r\n    !Unchecked.Equals(selected0.Get(),v$1)?selected0.Set(v$1):void 0;\r\n   },elementsW);\r\n  });\r\n  result=ListModelData.New(elementsW,Doc.get_Empty,selectedV,function()\r\n  {\r\n   var n;\r\n   n=newF();\r\n   View$1.Get(function(elements)\r\n   {\r\n    elements.Append(n);\r\n    selectedV.Set({\r\n     $:1,\r\n     $0:keyF(n)\r\n    });\r\n   },elementsW);\r\n   return n;\r\n  },function()\r\n  {\r\n   var o;\r\n   o=selectedV.Get();\r\n   o==null?void 0:_delete(o.$0,null);\r\n  },def);\r\n  elUIF=elUI(result);\r\n  listW=View$1.Bind(function(elems)\r\n  {\r\n   return ListModel.MapLens(predWO,function(k,v)\r\n   {\r\n    return(elUIF(View$1.Const({\r\n     $:1,\r\n     $0:k\r\n    })))(v);\r\n   },elems);\r\n  },elementsW);\r\n  return ListModelData.New(result.elemsW,function()\r\n  {\r\n   return Doc.Convert(Global.id,listW);\r\n  },result.selV,result.add,result.delCur,result.def);\r\n };\r\n StartAppFramework.startWith=function(html)\r\n {\r\n  var x;\r\n  x=StartAppFramework.startWithHtmlD();\r\n  (Depend.resolver(List.ofArray([[\"AppFrameworkTemplate.html\",AppFrameworkTemplate.html()+html]]),x))();\r\n };\r\n StartAppFramework.startWithHtmlD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.startWithHtmlD;\r\n };\r\n StartAppFramework.htmlD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.htmlD;\r\n };\r\n AppFrameworkUI.plugInAdded=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.plugInAdded;\r\n };\r\n AppFrameworkUI.plgDocsList=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.plgDocsList;\r\n };\r\n AppFrameworkUI.plgActsList=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.plgActsList;\r\n };\r\n AppFrameworkUI.plgViewsList=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.plgViewsList;\r\n };\r\n AppFrameworkUI.plgVarsList=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.plgVarsList;\r\n };\r\n AppFrameworkUI.pluginsList=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.pluginsList;\r\n };\r\n AppFrameworkUI.failCreate=function(s,u)\r\n {\r\n  return(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"Create \"+Utils.toSafe($2)+\" not implemented\");\r\n   };\r\n  }(Operators$3.FailWith))(s);\r\n };\r\n AppFrameworkUI.defAct=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defAct;\r\n };\r\n AppFrameworkUI.defViw=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defViw;\r\n };\r\n AppFrameworkUI.defVar=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defVar;\r\n };\r\n AppFrameworkUI.defDoc=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defDoc;\r\n };\r\n AppFrameworkUI.defPlg=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defPlg;\r\n };\r\n AppFrameworkUI.showDoc$2778$35=function(k,lmd)\r\n {\r\n  return function()\r\n  {\r\n   var o;\r\n   View$1.Get((o=lmd.selV,function(a)\r\n   {\r\n    o.Set(a);\r\n   }),k);\r\n  };\r\n };\r\n AppFrameworkUI.showDoc=function(lmd,k,docV)\r\n {\r\n  var b,t,p,i;\r\n  return(b=(t=ProviderBuilder.Make().WithHole({\r\n   $:2,\r\n   $0:\"name\",\r\n   $1:View$1.Map2(function($1,$2)\r\n   {\r\n    return $1.docName.get_Id()+AppFramework.docParms($2);\r\n   },docV.get_View(),docV.get_View())\r\n  }),t.WithHole(Handler.EventQ2(t.k,\"select\",function()\r\n  {\r\n   return t.i;\r\n  },function()\r\n  {\r\n   var o;\r\n   View$1.Get((o=lmd.selV,function(a)\r\n   {\r\n    o.Set(a);\r\n   }),k);\r\n  }))).WithHole({\r\n   $:2,\r\n   $0:\"selected\",\r\n   $1:View$1.Map2(function($1,$2)\r\n   {\r\n    return Unchecked.Equals($1,$2)?\"selected\":\"\";\r\n   },lmd.selV.get_View(),k)\r\n  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();\r\n };\r\n AppFrameworkUI.showAct$2771$35=function(k,lmd)\r\n {\r\n  return function()\r\n  {\r\n   var o;\r\n   View$1.Get((o=lmd.selV,function(a)\r\n   {\r\n    o.Set(a);\r\n   }),k);\r\n  };\r\n };\r\n AppFrameworkUI.showAct=function(lmd,k,actV)\r\n {\r\n  var b,t,p,i;\r\n  function parms(act)\r\n  {\r\n   var m,x,x$1;\r\n   m=act.actFunction;\r\n   return m.$==1?(x=Strings.concat(\", \",List.ofArray([m.$1])),(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(\"(\"+Utils.toSafe($2)+\")\");\r\n    };\r\n   }(Global.id))(x)):m.$==2?(x$1=Strings.concat(\", \",List.ofArray([m.$1,m.$2])),(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(\"(\"+Utils.toSafe($2)+\")\");\r\n    };\r\n   }(Global.id))(x$1)):\"\";\r\n  }\r\n  return(b=(t=ProviderBuilder.Make().WithHole({\r\n   $:2,\r\n   $0:\"name\",\r\n   $1:View$1.Map2(function($1,$2)\r\n   {\r\n    return $1.actName.get_Id()+parms($2);\r\n   },actV.get_View(),actV.get_View())\r\n  }),t.WithHole(Handler.EventQ2(t.k,\"select\",function()\r\n  {\r\n   return t.i;\r\n  },function()\r\n  {\r\n   var o;\r\n   View$1.Get((o=lmd.selV,function(a)\r\n   {\r\n    o.Set(a);\r\n   }),k);\r\n  }))).WithHole({\r\n   $:2,\r\n   $0:\"selected\",\r\n   $1:View$1.Map2(function($1,$2)\r\n   {\r\n    return Unchecked.Equals($1,$2)?\"selected\":\"\";\r\n   },lmd.selV.get_View(),k)\r\n  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();\r\n };\r\n AppFrameworkUI.showView$2759$35=function(k,lmd)\r\n {\r\n  return function()\r\n  {\r\n   var o;\r\n   View$1.Get((o=lmd.selV,function(a)\r\n   {\r\n    o.Set(a);\r\n   }),k);\r\n  };\r\n };\r\n AppFrameworkUI.showView=function(lmd,k,viwV)\r\n {\r\n  var nameW,b,b$1,t,p,i;\r\n  nameW=(b=View$1.get_Do(),View$1.Bind(function(a)\r\n  {\r\n   return View$1.Bind(function(a$1)\r\n   {\r\n    return View$1.Const(a.viwName.get_Id()+\" = \"+a$1);\r\n   },a.viwView);\r\n  },viwV.get_View()));\r\n  return(b$1=(t=ProviderBuilder.Make().WithHole({\r\n   $:2,\r\n   $0:\"name\",\r\n   $1:nameW\r\n  }),t.WithHole(Handler.EventQ2(t.k,\"select\",function()\r\n  {\r\n   return t.i;\r\n  },function()\r\n  {\r\n   var o;\r\n   View$1.Get((o=lmd.selV,function(a)\r\n   {\r\n    o.Set(a);\r\n   }),k);\r\n  }))).WithHole({\r\n   $:2,\r\n   $0:\"selected\",\r\n   $1:View$1.Map2(function($1,$2)\r\n   {\r\n    return Unchecked.Equals($1,$2)?\"selected\":\"\";\r\n   },lmd.selV.get_View(),k)\r\n  }),(p=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b$1.i=i,i)))).get_Doc();\r\n };\r\n AppFrameworkUI.showVar$2747$35=function(k,lmd)\r\n {\r\n  return function()\r\n  {\r\n   var o;\r\n   View$1.Get((o=lmd.selV,function(a)\r\n   {\r\n    o.Set(a);\r\n   }),k);\r\n  };\r\n };\r\n AppFrameworkUI.showVar=function(lmd,k,varV)\r\n {\r\n  var nameW,b,b$1,t,p,i;\r\n  nameW=(b=View$1.get_Do(),View$1.Bind(function(a)\r\n  {\r\n   return View$1.Bind(function(a$1)\r\n   {\r\n    return View$1.Const(a.varName.get_Id()+\" = \"+a$1);\r\n   },a.varVar.get_View());\r\n  },varV.get_View()));\r\n  return(b$1=(t=ProviderBuilder.Make().WithHole({\r\n   $:2,\r\n   $0:\"name\",\r\n   $1:nameW\r\n  }),t.WithHole(Handler.EventQ2(t.k,\"select\",function()\r\n  {\r\n   return t.i;\r\n  },function()\r\n  {\r\n   var o;\r\n   View$1.Get((o=lmd.selV,function(a)\r\n   {\r\n    o.Set(a);\r\n   }),k);\r\n  }))).WithHole({\r\n   $:2,\r\n   $0:\"selected\",\r\n   $1:View$1.Map2(function($1,$2)\r\n   {\r\n    return Unchecked.Equals($1,$2)?\"selected\":\"\";\r\n   },lmd.selV.get_View(),k)\r\n  }),(p=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b$1.i=i,i)))).get_Doc();\r\n };\r\n AppFrameworkUI.showPlugIn$2735$35=function(k,lmd)\r\n {\r\n  return function()\r\n  {\r\n   var o;\r\n   View$1.Get((o=lmd.selV,function(a)\r\n   {\r\n    o.Set(a);\r\n   }),k);\r\n  };\r\n };\r\n AppFrameworkUI.showPlugIn=function(lmd,k,plgV)\r\n {\r\n  var b,t,p,i;\r\n  return(b=(t=ProviderBuilder.Make().WithHole({\r\n   $:2,\r\n   $0:\"name\",\r\n   $1:View$1.Map(function($1)\r\n   {\r\n    return $1.plgName.get_Id();\r\n   },plgV.get_View())\r\n  }),t.WithHole(Handler.EventQ2(t.k,\"select\",function()\r\n  {\r\n   return t.i;\r\n  },function()\r\n  {\r\n   var o;\r\n   View$1.Get((o=lmd.selV,function(a)\r\n   {\r\n    o.Set(a);\r\n   }),k);\r\n  }))).WithHole({\r\n   $:2,\r\n   $0:\"selected\",\r\n   $1:View$1.Map2(function($1,$2)\r\n   {\r\n    return Unchecked.Equals($1,$2)?\"selected\":\"\";\r\n   },lmd.selV.get_View(),k)\r\n  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();\r\n };\r\n LayoutEngine.New=function(lytName,lytDefinition)\r\n {\r\n  return{\r\n   lytName:lytName,\r\n   lytDefinition:lytDefinition\r\n  };\r\n };\r\n Measures=LayoutEngineModule.Measures=Runtime.Class({\r\n  toString:function()\r\n  {\r\n   return this.$==1?((((Runtime.Curried(function($1,$2,$3,$4)\r\n   {\r\n    return $1(Global.String($2)+\"-\"+Global.String($3)+\"-\"+Global.String($4));\r\n   },4))(Global.id))(Operators$3.toInt(this.$0)))(Operators$3.toInt(this.$1)))(Operators$3.toInt(this.$2)):Global.String(Operators$3.toInt(this.$1?this.$0:-this.$0));\r\n  }\r\n },null,Measures);\r\n RefType.RPlg={\r\n  $:4\r\n };\r\n RefType.RAct={\r\n  $:3\r\n };\r\n RefType.RViw={\r\n  $:2\r\n };\r\n RefType.RVar={\r\n  $:1\r\n };\r\n RefType.RDoc={\r\n  $:0\r\n };\r\n TemplateDef.New=function(tmpName,vars,views,docs,actions,attrs)\r\n {\r\n  return{\r\n   tmpName:tmpName,\r\n   vars:vars,\r\n   views:views,\r\n   docs:docs,\r\n   actions:actions,\r\n   attrs:attrs\r\n  };\r\n };\r\n Syntax.createEntryO2=function(lytNm,refs)\r\n {\r\n  function addR(nm,en)\r\n  {\r\n   return refs.ContainsKey(nm)?((Result.errorf(Runtime.Curried3(function($1,$2,$3)\r\n   {\r\n    return $1(\"Already exists \"+Utils.toSafe($2)+\" : \"+LayoutEngine_GeneratedPrintf.p$2($3)+\" \");\r\n   })))(nm))(en):(refs.Add(nm,en),{\r\n    $:0,\r\n    $0:null\r\n   });\r\n  }\r\n  function ok(nm,en)\r\n  {\r\n   return Result$1.Map(function()\r\n   {\r\n    return[nm,en];\r\n   },addR(nm,en));\r\n  }\r\n  function ko(msg,line)\r\n  {\r\n   return Result$1.Bind(function()\r\n   {\r\n    return{\r\n     $:1,\r\n     $0:msg\r\n    };\r\n   },addR(Seq.head(Strings.SplitChars(line,[\" \",\"\\u0009\"],1)),{\r\n    $:0,\r\n    $0:{\r\n     $:6,\r\n     $0:{\r\n      $:0,\r\n      $0:\"div\",\r\n      $1:{\r\n       $:0,\r\n       $0:List.T.Empty\r\n      },\r\n      $2:List.ofArray([{\r\n       $:0,\r\n       $0:List.ofArray([{\r\n        $:0,\r\n        $0:msg\r\n       }])\r\n      }])\r\n     }\r\n    }\r\n   }));\r\n  }\r\n  function getRef(nm)\r\n  {\r\n   try\r\n   {\r\n    return refs.get_Item(nm);\r\n   }\r\n   catch(e)\r\n   {\r\n    return(function($1)\r\n    {\r\n     return function($2)\r\n     {\r\n      return $1(\"Could not find reference to \"+Utils.toSafe($2));\r\n     };\r\n    }(Operators$3.FailWith))(nm);\r\n   }\r\n  }\r\n  function getType(rf)\r\n  {\r\n   var entry,nm,ly,$1,a,m,pg,nmm;\r\n   if(rf.$==1)\r\n    {\r\n     nm=rf.$1;\r\n     ly=rf.$0;\r\n     try\r\n     {\r\n      a=getRef(ly);\r\n      if(a.$==6)\r\n       try\r\n       {\r\n        $1=a.$0.$0.get_Item(nm);\r\n       }\r\n       catch(e)\r\n       {\r\n        $1=(((Runtime.Curried3(function($2,$3,$4)\r\n        {\r\n         return $2(\"Could not find reference to \"+Utils.toSafe($3)+\".\"+Utils.toSafe($4));\r\n        }))(Operators$3.FailWith))(ly))(nm);\r\n       }\r\n      else\r\n       $1=(function($2)\r\n       {\r\n        return function($3)\r\n        {\r\n         return $2(\"PlugIn not registered: \"+LayoutEngine_GeneratedPrintf.p$1($3));\r\n        };\r\n       }(Operators$3.FailWith))(rf);\r\n      return[$1,null];\r\n     }\r\n     catch(e$1)\r\n     {\r\n      m=AppFramework.tryGetPlugIn(new PlugInName({\r\n       $:0,\r\n       $0:ly\r\n      }));\r\n      return m!=null&&m.$==1?(pg=m.$0,nmm=new PlgElemName({\r\n       $:0,\r\n       $0:nm\r\n      }),[pg.plgDocs.ContainsKey(nmm)?RefType.RDoc:pg.plgActions.ContainsKey(nmm)?RefType.RAct:pg.plgVars.ContainsKey(nmm)?RefType.RVar:pg.plgViews.ContainsKey(nmm)?RefType.RViw:(((Runtime.Curried3(function($2,$3,$4)\r\n      {\r\n       return $2(\"Could not find reference to \"+Utils.toSafe($3)+\".\"+Utils.toSafe($4));\r\n      }))(Operators$3.FailWith))(ly))(nm),null]):Operators$3.FailWith(e$1.message);\r\n     }\r\n    }\r\n   else\r\n    {\r\n     entry=getRef(rf.$0);\r\n     return[entry.$==1?RefType.RAct:entry.$==2?RefType.RAct:entry.$==3?RefType.RVar:entry.$==4?RefType.RViw:entry.$==5?RefType.RViw:entry.$==7?RefType.RPlg:entry.$==6?(function($2)\r\n     {\r\n      return function($3)\r\n      {\r\n       return $2(\"PlugIn should not be referenced by itself: \"+LayoutEngine_GeneratedPrintf.p$1($3));\r\n      };\r\n     }(Operators$3.FailWith))(rf):RefType.RDoc,{\r\n      $:1,\r\n      $0:entry\r\n     }];\r\n    }\r\n  }\r\n  return function(line)\r\n  {\r\n   var $1,a;\r\n   try\r\n   {\r\n    $1=(a=Syntax.createEntryO(getType,lytNm,line),a==null?ko((function($2)\r\n    {\r\n     return function($3)\r\n     {\r\n      return $2(\"Line not matched!: \"+Utils.toSafe($3));\r\n     };\r\n    }(Global.id))(line),line):ok(a.$0.$0,a.$0.$1));\r\n   }\r\n   catch(e)\r\n   {\r\n    $1=ko(e.message,line);\r\n   }\r\n   return{\r\n    $:1,\r\n    $0:$1\r\n   };\r\n  };\r\n };\r\n Syntax.createEntryO=function(getType,lytNm,line)\r\n {\r\n  var m,$1,a,a$1,$2,a$2,a$3,$3,a$4,a$5,$4,a$6,a$7,$5,a$8,a$9,$6,a$10,a$11,a$12,a$13,$7,a$14,a$15,a$16,a$17,$8,a$18,a$19,a$20,a$21,$9,a$22,a$23,a$24,$10,a$25,a$26,a$27,$11,a$28,a$29,$12,a$30,$13,a$31,a$32,a$33,$14,a$34,a$35,$15,a$36,a$37,$16,a$38,a$39,$17,a$40,a$41,$18,a$42,a$43,a$44,$19,a$45,a$46,a$47,a$48,a$49,a$50,a$51,a$52,a$53,a$54,a$55,$20,a$56,a$57,a$58,a$59;\r\n  function Rt(a$60)\r\n  {\r\n   var a$61,itr;\r\n   a$61=Syntax.R(a$60);\r\n   return a$61!=null&&a$61.$==1?(itr=a$61.$0,{\r\n    $:1,\r\n    $0:[getType(itr),itr]\r\n   }):null;\r\n  }\r\n  function DocRf(a$60)\r\n  {\r\n   var $21,a$61;\r\n   return(a$61=Rt(a$60),a$61!=null&&a$61.$==1&&(a$61.$0[0][0].$==0&&($21=a$61.$0[1],true)))?{\r\n    $:1,\r\n    $0:{\r\n     $:0,\r\n     $0:$21\r\n    }\r\n   }:null;\r\n  }\r\n  function VarRf(a$60)\r\n  {\r\n   var $21,a$61;\r\n   return(a$61=Rt(a$60),a$61!=null&&a$61.$==1&&(a$61.$0[0][0].$==1&&($21=a$61.$0[1],true)))?{\r\n    $:1,\r\n    $0:{\r\n     $:0,\r\n     $0:$21\r\n    }\r\n   }:null;\r\n  }\r\n  function ViwRf(a$60)\r\n  {\r\n   var $21,a$61;\r\n   return(a$61=Rt(a$60),a$61!=null&&a$61.$==1&&(a$61.$0[0][0].$==2&&($21=a$61.$0[1],true)))?{\r\n    $:1,\r\n    $0:{\r\n     $:0,\r\n     $0:$21\r\n    }\r\n   }:null;\r\n  }\r\n  function ActRf(a$60)\r\n  {\r\n   var $21,a$61;\r\n   return(a$61=Rt(a$60),a$61!=null&&a$61.$==1&&(a$61.$0[0][0].$==3&&($21=a$61.$0[1],true)))?{\r\n    $:1,\r\n    $0:{\r\n     $:0,\r\n     $0:$21\r\n    }\r\n   }:null;\r\n  }\r\n  function PlgRf(a$60)\r\n  {\r\n   var $21,a$61,$22;\r\n   return(a$61=Rt(a$60),a$61!=null&&a$61.$==1&&(a$61.$0[0][0].$==4&&(($22=a$61.$0[0][1],$22!=null&&$22.$==1)&&(a$61.$0[0][1].$0.$==7&&($21=[a$61.$0[0][1].$0.$0,a$61.$0[1]],true)))))?{\r\n    $:1,\r\n    $0:$21[0]\r\n   }:null;\r\n  }\r\n  function Name(a$60)\r\n  {\r\n   var $21,a$61;\r\n   return(a$61=Syntax.R(a$60),a$61!=null&&a$61.$==1&&(a$61.$0.$==0&&($21=a$61.$0.$0,true)))?{\r\n    $:1,\r\n    $0:$21\r\n   }:null;\r\n  }\r\n  function NamU(a$60)\r\n  {\r\n   var $21,a$61;\r\n   return(a$61=Name(a$60),a$61!=null&&a$61.$==1&&(Strings.StartsWith(a$61.$0,\"_\")&&($21=a$61.$0,true)))?{\r\n    $:1,\r\n    $0:$21\r\n   }:null;\r\n  }\r\n  function Tr(a$60)\r\n  {\r\n   var a$61,a$62,a$63;\r\n   a$61=VarRf(a$60);\r\n   return a$61!=null&&a$61.$==1?{\r\n    $:1,\r\n    $0:{\r\n     $:1,\r\n     $0:a$61.$0\r\n    }\r\n   }:(a$62=ViwRf(a$60),a$62!=null&&a$62.$==1?{\r\n    $:1,\r\n    $0:{\r\n     $:2,\r\n     $0:a$62.$0\r\n    }\r\n   }:(a$63=ActRf(a$60),a$63!=null&&a$63.$==1?{\r\n    $:1,\r\n    $0:{\r\n     $:3,\r\n     $0:a$63.$0\r\n    }\r\n   }:null));\r\n  }\r\n  function Indi(txt)\r\n  {\r\n   var m$1;\r\n   m$1=String.delimitedO(\"@{\",\"}\",txt);\r\n   return m$1!=null&&m$1.$==1?{\r\n    $:1,\r\n    $0:[m$1.$0[0],{\r\n     $:1,\r\n     $0:m$1.$0[1]\r\n    },m$1.$0[2]]\r\n   }:null;\r\n  }\r\n  function Tx(txt)\r\n  {\r\n   var $21,a$60,a$61,aft,bef,tl,a$62,$22;\r\n   return(a$60=Indi(txt),a$60!=null&&a$60.$==1&&(a$61=Tr(a$60.$0[1]),a$61!=null&&a$61.$==1&&($21=[a$60.$0[2],a$60.$0[0],a$61.$0],true)))?(aft=$21[0],(bef=$21[1],(tl=bef===\"\"?List.ofArray([$21[2]]):List.ofArray([{\r\n    $:0,\r\n    $0:bef\r\n   },$21[2]]),aft===\"\"?{\r\n    $:1,\r\n    $0:tl\r\n   }:(a$62=Tx(aft),a$62!=null&&a$62.$==1?{\r\n    $:1,\r\n    $0:List.append(tl,a$62.$0)\r\n   }:null)))):($22=Indi(txt),$22!=null&&$22.$==1)?null:{\r\n    $:1,\r\n    $0:List.ofArray([{\r\n     $:0,\r\n     $0:txt\r\n    }])\r\n   };\r\n  }\r\n  function ActI(txt)\r\n  {\r\n   var $21,a$60,a$61;\r\n   return(a$60=Indi(txt),a$60!=null&&a$60.$==1&&(a$61=ActRf(a$60.$0[1]),a$61!=null&&a$61.$==1&&(Strings.Trim(a$60.$0[0])===\"\"&&Strings.Trim(a$60.$0[2])===\"\"&&($21=[a$60.$0[2],a$61.$0,a$60.$0[0]],true))))?{\r\n    $:1,\r\n    $0:$21[1]\r\n   }:null;\r\n  }\r\n  function QTx(a$60)\r\n  {\r\n   var $21,a$61;\r\n   return a$60.$==0&&(a$61=Tx(a$60.$0),a$61!=null&&a$61.$==1&&($21=a$61.$0,true))?{\r\n    $:1,\r\n    $0:$21\r\n   }:null;\r\n  }\r\n  function At(a$60)\r\n  {\r\n   return a$60.$==0?{\r\n    $:1,\r\n    $0:Arrays.ofSeq(Seq.choose(function(a$61)\r\n    {\r\n     var m$1,$21,a$62,$22,a$63,m$2,$23,a$64;\r\n     m$1=(LayoutEngineModule.splitInTwo(\"=\"))(a$61);\r\n     return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$62=ActI(Arrays.get(m$1,1)),a$62!=null&&a$62.$==1&&($21=[a$62.$0,Arrays.get(m$1,0)],true))?{\r\n      $:1,\r\n      $0:{\r\n       $:2,\r\n       $0:Strings.Trim($21[1]),\r\n       $1:$21[0]\r\n      }\r\n     }:!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$63=Tx(Arrays.get(m$1,1)),a$63!=null&&a$63.$==1&&($22=[Arrays.get(m$1,0),a$63.$0],true))?{\r\n      $:1,\r\n      $0:{\r\n       $:1,\r\n       $0:Strings.Trim($22[0]),\r\n       $1:$22[1]\r\n      }\r\n     }:(m$2=(LayoutEngineModule.splitInTwo(\":\"))(a$61),!Unchecked.Equals(m$2,null)&&m$2.length===2&&(a$64=Tx(Arrays.get(m$2,1)),a$64!=null&&a$64.$==1&&($23=[Arrays.get(m$2,0),a$64.$0],true))?{\r\n      $:1,\r\n      $0:{\r\n       $:0,\r\n       $0:Strings.Trim($23[0]),\r\n       $1:$23[1]\r\n      }\r\n     }:(function($24)\r\n     {\r\n      return function($25)\r\n      {\r\n       return $24(\"Attributes should be like: \\\"name=val\\\" or \\\"name:val\\\" and separated by ';' : \"+Utils.toSafe($25));\r\n      };\r\n     }(Operators$3.FailWith))(a$61));\r\n    },(LayoutEngineModule.splitSemiColon())(a$60.$0)))\r\n   }:null;\r\n  }\r\n  function Pr(a$60)\r\n  {\r\n   var a$61,a$62,a$63,a$64,a$65;\r\n   a$61=QTx(a$60);\r\n   return a$61!=null&&a$61.$==1?{\r\n    $:1,\r\n    $0:{\r\n     $:0,\r\n     $0:a$61.$0\r\n    }\r\n   }:(a$62=DocRf(a$60),a$62!=null&&a$62.$==1?{\r\n    $:1,\r\n    $0:{\r\n     $:1,\r\n     $0:a$62.$0\r\n    }\r\n   }:(a$63=VarRf(a$60),a$63!=null&&a$63.$==1?{\r\n    $:1,\r\n    $0:{\r\n     $:2,\r\n     $0:a$63.$0\r\n    }\r\n   }:(a$64=ViwRf(a$60),a$64!=null&&a$64.$==1?{\r\n    $:1,\r\n    $0:{\r\n     $:3,\r\n     $0:a$64.$0\r\n    }\r\n   }:(a$65=ActRf(a$60),a$65!=null&&a$65.$==1?{\r\n    $:1,\r\n    $0:{\r\n     $:4,\r\n     $0:a$65.$0\r\n    }\r\n   }:null))));\r\n  }\r\n  function Prs(a$60)\r\n  {\r\n   var $21,a$61,a$62;\r\n   switch(a$60.$==1?(a$61=Pr(a$60.$0),a$61!=null&&a$61.$==1?(a$62=Prs(a$60.$1),a$62!=null&&a$62.$==1?($21=[a$61.$0,a$62.$0],1):2):2):0)\r\n   {\r\n    case 0:\r\n     return{\r\n      $:1,\r\n      $0:List.T.Empty\r\n     };\r\n    case 1:\r\n     return{\r\n      $:1,\r\n      $0:new List.T({\r\n       $:1,\r\n       $0:$21[0],\r\n       $1:$21[1]\r\n      })\r\n     };\r\n    case 2:\r\n     return null;\r\n   }\r\n  }\r\n  function ActRfs(a$60)\r\n  {\r\n   var $21,a$61,a$62;\r\n   switch(a$60.$==1?(a$61=ActRf(a$60.$0),a$61!=null&&a$61.$==1?(a$62=ActRfs(a$60.$1),a$62!=null&&a$62.$==1?($21=[a$61.$0,a$62.$0],1):2):2):0)\r\n   {\r\n    case 0:\r\n     return{\r\n      $:1,\r\n      $0:List.T.Empty\r\n     };\r\n    case 1:\r\n     return{\r\n      $:1,\r\n      $0:new List.T({\r\n       $:1,\r\n       $0:$21[0],\r\n       $1:$21[1]\r\n      })\r\n     };\r\n    case 2:\r\n     return null;\r\n   }\r\n  }\r\n  function Nd(a$60)\r\n  {\r\n   var a$61,a$62,a$63,a$64;\r\n   a$61=QTx(a$60);\r\n   return a$61!=null&&a$61.$==1?{\r\n    $:1,\r\n    $0:{\r\n     $:0,\r\n     $0:a$61.$0\r\n    }\r\n   }:(a$62=DocRf(a$60),a$62!=null&&a$62.$==1?{\r\n    $:1,\r\n    $0:{\r\n     $:1,\r\n     $0:a$62.$0\r\n    }\r\n   }:(a$63=VarRf(a$60),a$63!=null&&a$63.$==1?{\r\n    $:1,\r\n    $0:{\r\n     $:2,\r\n     $0:a$63.$0\r\n    }\r\n   }:(a$64=ViwRf(a$60),a$64!=null&&a$64.$==1?{\r\n    $:1,\r\n    $0:{\r\n     $:3,\r\n     $0:a$64.$0\r\n    }\r\n   }:null)));\r\n  }\r\n  function Nds(a$60)\r\n  {\r\n   var $21,a$61,a$62;\r\n   switch(a$60.$==1?(a$61=Nd(a$60.$0),a$61!=null&&a$61.$==1?(a$62=Nds(a$60.$1),a$62!=null&&a$62.$==1?($21=[a$61.$0,a$62.$0],1):2):2):0)\r\n   {\r\n    case 0:\r\n     return{\r\n      $:1,\r\n      $0:List.T.Empty\r\n     };\r\n    case 1:\r\n     return{\r\n      $:1,\r\n      $0:new List.T({\r\n       $:1,\r\n       $0:$21[0],\r\n       $1:$21[1]\r\n      })\r\n     };\r\n    case 2:\r\n     return null;\r\n   }\r\n  }\r\n  function Pgs(a$60)\r\n  {\r\n   var $21,a$61,a$62;\r\n   switch(a$60.$==1?(a$61=PlgRf(a$60.$0),a$61!=null&&a$61.$==1?(a$62=Pgs(a$60.$1),a$62!=null&&a$62.$==1?($21=[a$61.$0,a$62.$0],1):2):2):0)\r\n   {\r\n    case 0:\r\n     return{\r\n      $:1,\r\n      $0:List.T.Empty\r\n     };\r\n    case 1:\r\n     return{\r\n      $:1,\r\n      $0:new List.T({\r\n       $:1,\r\n       $0:$21[0],\r\n       $1:$21[1]\r\n      })\r\n     };\r\n    case 2:\r\n     return null;\r\n   }\r\n  }\r\n  m=LayoutEngineModule.splitTokens(line);\r\n  return m.$==1&&(a=Name(m.$0),a!=null&&a.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==0&&(a$1=Pgs(m.$1.$1),a$1!=null&&a$1.$==1&&($1=[a$1.$0,a.$0],true)))))?Syntax.entryPlg($1[1],{\r\n   $:0,\r\n   $0:new FSharpMap.New($1[0])\r\n  }):m.$==1&&(a$2=NamU(m.$0),a$2!=null&&a$2.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$3=Name(m.$1.$1.$0),a$3!=null&&a$3.$==1&&(m.$1.$1.$1.$==0&&($2=[a$2.$0,a$3.$0],true)))))))?Syntax.entryRef($2[0],$2[1],RefType.RDoc):m.$==1&&(a$4=NamU(m.$0),a$4!=null&&a$4.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$5=Name(m.$1.$1.$0),a$5!=null&&a$5.$==1&&(m.$1.$1.$1.$==0&&($3=[a$4.$0,a$5.$0],true)))))))?Syntax.entryRef($3[0],$3[1],RefType.RVar):m.$==1&&(a$6=NamU(m.$0),a$6!=null&&a$6.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==2&&(m.$1.$1.$==1&&(a$7=Name(m.$1.$1.$0),a$7!=null&&a$7.$==1&&(m.$1.$1.$1.$==0&&($4=[a$6.$0,a$7.$0],true)))))))?Syntax.entryRef($4[0],$4[1],RefType.RViw):m.$==1&&(a$8=NamU(m.$0),a$8!=null&&a$8.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==5&&(m.$1.$1.$==1&&(a$9=Name(m.$1.$1.$0),a$9!=null&&a$9.$==1&&(m.$1.$1.$1.$==0&&($5=[a$8.$0,a$9.$0],true)))))))?Syntax.entryRef($5[0],$5[1],RefType.RAct):m.$==1&&(a$10=Name(m.$0),a$10!=null&&a$10.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$11=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$11!=null&&a$11.$==1&&(m.$1.$1.$1.$==1&&(a$12=DocRf(m.$1.$1.$1.$0),a$12!=null&&a$12.$==1&&(m.$1.$1.$1.$1.$==1&&(a$13=DocRf(m.$1.$1.$1.$1.$0),a$13!=null&&a$13.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($6=[a$12.$0,a$11.$0,a$10.$0,a$13.$0],true)))))))))))?Syntax.entryDoc($6[2],{\r\n   $:0,\r\n   $0:{\r\n    $:0,\r\n    $0:true,\r\n    $1:$6[1],\r\n    $2:$6[0],\r\n    $3:$6[3]\r\n   }\r\n  }):m.$==1&&(a$14=Name(m.$0),a$14!=null&&a$14.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$15=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$15!=null&&a$15.$==1&&(m.$1.$1.$1.$==1&&(a$16=DocRf(m.$1.$1.$1.$0),a$16!=null&&a$16.$==1&&(m.$1.$1.$1.$1.$==1&&(a$17=DocRf(m.$1.$1.$1.$1.$0),a$17!=null&&a$17.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($7=[a$16.$0,a$15.$0,a$14.$0,a$17.$0],true)))))))))))?Syntax.entryDoc($7[2],{\r\n   $:0,\r\n   $0:{\r\n    $:0,\r\n    $0:false,\r\n    $1:$7[1],\r\n    $2:$7[0],\r\n    $3:$7[3]\r\n   }\r\n  }):m.$==1&&(a$18=Name(m.$0),a$18!=null&&a$18.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$19=ActRf(m.$1.$1.$0),a$19!=null&&a$19.$==1&&(m.$1.$1.$1.$==1&&(a$20=At(m.$1.$1.$1.$0),a$20!=null&&a$20.$==1&&(m.$1.$1.$1.$1.$==1&&(a$21=QTx(m.$1.$1.$1.$1.$0),a$21!=null&&a$21.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($8=[a$19.$0,a$20.$0,a$18.$0,a$21.$0],true)))))))))))?Syntax.entryDoc($8[2],{\r\n   $:1,\r\n   $0:{\r\n    $:0,\r\n    $0:$8[0],\r\n    $1:$8[1],\r\n    $2:$8[3]\r\n   }\r\n  }):m.$==1&&(a$22=Name(m.$0),a$22!=null&&a$22.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==2&&(m.$1.$1.$==1&&(a$23=VarRf(m.$1.$1.$0),a$23!=null&&a$23.$==1&&(m.$1.$1.$1.$==1&&(a$24=At(m.$1.$1.$1.$0),a$24!=null&&a$24.$==1&&(m.$1.$1.$1.$1.$==0&&($9=[a$24.$0,a$22.$0,a$23.$0],true)))))))))?Syntax.entryDoc($9[1],{\r\n   $:2,\r\n   $0:{\r\n    $:0,\r\n    $0:$9[2],\r\n    $1:$9[0]\r\n   }\r\n  }):m.$==1&&(a$25=Name(m.$0),a$25!=null&&a$25.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==3&&(m.$1.$1.$==1&&(a$26=VarRf(m.$1.$1.$0),a$26!=null&&a$26.$==1&&(m.$1.$1.$1.$==1&&(a$27=At(m.$1.$1.$1.$0),a$27!=null&&a$27.$==1&&(m.$1.$1.$1.$1.$==0&&($10=[a$27.$0,a$25.$0,a$26.$0],true)))))))))?Syntax.entryDoc($10[1],{\r\n   $:3,\r\n   $0:{\r\n    $:0,\r\n    $0:$10[2],\r\n    $1:$10[0]\r\n   }\r\n  }):m.$==1&&(a$28=Name(m.$0),a$28!=null&&a$28.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$29=(a$30=QTx(m.$1.$1.$0),a$30!=null&&a$30.$==1&&(a$30.$0.$==1&&(a$30.$0.$0.$==0&&(a$30.$0.$1.$==0&&($12=a$30.$0.$0.$0,true)))))?{\r\n   $:1,\r\n   $0:$12\r\n  }:null,a$29!=null&&a$29.$==1&&(m.$1.$1.$1.$==0&&($11=[a$28.$0,a$29.$0],true)))))))?Syntax.entryVar($11[0],{\r\n   $:0,\r\n   $0:Strings.Trim($11[1])\r\n  }):m.$==1&&(a$31=Name(m.$0),a$31!=null&&a$31.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$32=DocRf(m.$1.$1.$0),a$32!=null&&a$32.$==1&&(a$33=Prs(m.$1.$1.$1),a$33!=null&&a$33.$==1&&($13=[a$32.$0,a$31.$0,a$33.$0],true)))))))?Syntax.entryDoc($13[1],{\r\n   $:4,\r\n   $0:{\r\n    $:0,\r\n    $0:$13[0],\r\n    $1:$13[2]\r\n   }\r\n  }):m.$==1&&(a$34=Name(m.$0),a$34!=null&&a$34.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==2&&(a$35=Prs(m.$1.$1),a$35!=null&&a$35.$==1&&($14=[a$34.$0,a$35.$0],true)))))?Syntax.entryView($14[0],{\r\n   $:0,\r\n   $0:$14[1]\r\n  }):m.$==1&&(a$36=Name(m.$0),a$36!=null&&a$36.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==3&&(a$37=Prs(m.$1.$1),a$37!=null&&a$37.$==1&&($15=[a$36.$0,a$37.$0],true)))))?Syntax.entryVJS($15[0],{\r\n   $:0,\r\n   $0:$15[1]\r\n  }):m.$==1&&(a$38=Name(m.$0),a$38!=null&&a$38.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==4&&(a$39=Nds(m.$1.$1),a$39!=null&&a$39.$==1&&($16=[a$38.$0,a$39.$0],true)))))?Syntax.entryDoc($16[0],{\r\n   $:5,\r\n   $0:{\r\n    $:0,\r\n    $0:$16[1]\r\n   }\r\n  }):m.$==1&&(a$40=Name(m.$0),a$40!=null&&a$40.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==5&&(a$41=ActRfs(m.$1.$1),a$41!=null&&a$41.$==1&&($17=[a$41.$0,a$40.$0],true)))))?Syntax.entryActs($17[1],{\r\n   $:0,\r\n   $0:$17[0]\r\n  }):m.$==1&&(a$42=Name(m.$0),a$42!=null&&a$42.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==5&&(m.$1.$1.$==1&&(a$43=ActRf(m.$1.$1.$0),a$43!=null&&a$43.$==1&&(a$44=Prs(m.$1.$1.$1),a$44!=null&&a$44.$==1&&($18=[a$43.$0,a$42.$0,a$44.$0],true)))))))?Syntax.entryAct($18[1],{\r\n   $:0,\r\n   $0:$18[0],\r\n   $1:$18[2]\r\n  }):m.$==1&&(a$45=Name(m.$0),a$45!=null&&a$45.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==4&&(m.$1.$1.$==1&&(a$46=Name(m.$1.$1.$0),a$46!=null&&a$46.$==1&&(m.$1.$1.$1.$==1&&(a$47=Pr(m.$1.$1.$1.$0),a$47!=null&&a$47.$==1&&(m.$1.$1.$1.$1.$==1&&(a$48=(a$49=m.$1.$1.$1.$1.$0,a$49.$==0?{\r\n   $:1,\r\n   $0:Arrays.ofSeq(Seq.choose(function(a$60)\r\n   {\r\n    var m$1,$21,a$61,a$62;\r\n    m$1=Arrays.map(LayoutEngineModule.splitTokens,(LayoutEngineModule.splitInTwo(\":\"))(a$60));\r\n    return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(Arrays.get(m$1,0).$==1&&(a$61=Name(Arrays.get(m$1,0).$0),a$61!=null&&a$61.$==1&&(Arrays.get(m$1,0).$1.$==0&&(Arrays.get(m$1,1).$==1&&(a$62=Pr(Arrays.get(m$1,1).$0),a$62!=null&&a$62.$==1&&(Arrays.get(m$1,1).$1.$==0&&($21=[a$61.$0,a$62.$0],true)))))))?{\r\n     $:1,\r\n     $0:[$21[0],$21[1]]\r\n    }:(function($22)\r\n    {\r\n     return function($23)\r\n     {\r\n      return $22(\"Expecting Views \\\"name:view\\\" separated by ';' : \"+Utils.toSafe($23));\r\n     };\r\n    }(Operators$3.FailWith))(a$60);\r\n   },(LayoutEngineModule.splitSemiColon())(a$49.$0)))\r\n  }:null),a$48!=null&&a$48.$==1&&(m.$1.$1.$1.$1.$1.$==1&&(a$50=(a$51=m.$1.$1.$1.$1.$1.$0,a$51.$==0?{\r\n   $:1,\r\n   $0:Arrays.ofSeq(Seq.choose(function(a$60)\r\n   {\r\n    var m$1,$21,a$61,a$62;\r\n    m$1=Arrays.map(function(a$63)\r\n    {\r\n     return{\r\n      $:1,\r\n      $0:a$63\r\n     };\r\n    },(LayoutEngineModule.splitInTwo(\":\"))(a$60));\r\n    return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$61=Name(Arrays.get(m$1,0)),a$61!=null&&a$61.$==1&&(a$62=DocRf(Arrays.get(m$1,1)),a$62!=null&&a$62.$==1&&($21=[a$61.$0,a$62.$0],true)))?{\r\n     $:1,\r\n     $0:[$21[0],$21[1]]\r\n    }:(function($22)\r\n    {\r\n     return function($23)\r\n     {\r\n      return $22(\"Expecting Docs \\\"name:doc\\\" separated by ';' : \"+Utils.toSafe($23));\r\n     };\r\n    }(Operators$3.FailWith))(a$60);\r\n   },(LayoutEngineModule.splitSemiColon())(a$51.$0)))\r\n  }:null),a$50!=null&&a$50.$==1&&(m.$1.$1.$1.$1.$1.$1.$==1&&(a$52=(a$53=m.$1.$1.$1.$1.$1.$1.$0,a$53.$==0?{\r\n   $:1,\r\n   $0:Arrays.ofSeq(Seq.choose(function(a$60)\r\n   {\r\n    var m$1,$21,a$61,a$62;\r\n    m$1=Arrays.map(function(a$63)\r\n    {\r\n     return{\r\n      $:1,\r\n      $0:a$63\r\n     };\r\n    },(LayoutEngineModule.splitInTwo(\":\"))(a$60));\r\n    return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$61=Name(Arrays.get(m$1,0)),a$61!=null&&a$61.$==1&&(a$62=VarRf(Arrays.get(m$1,1)),a$62!=null&&a$62.$==1&&($21=[a$61.$0,a$62.$0],true)))?{\r\n     $:1,\r\n     $0:[$21[0],$21[1]]\r\n    }:(function($22)\r\n    {\r\n     return function($23)\r\n     {\r\n      return $22(\"Expecting Vars \\\"name:var\\\" separated by ';' : \"+Utils.toSafe($23));\r\n     };\r\n    }(Operators$3.FailWith))(a$60);\r\n   },(LayoutEngineModule.splitSemiColon())(a$53.$0)))\r\n  }:null),a$52!=null&&a$52.$==1&&(m.$1.$1.$1.$1.$1.$1.$1.$==1&&(a$54=(a$55=m.$1.$1.$1.$1.$1.$1.$1.$0,a$55.$==0?{\r\n   $:1,\r\n   $0:Arrays.ofSeq(Seq.choose(function(a$60)\r\n   {\r\n    var m$1,$21,a$61,a$62;\r\n    m$1=Arrays.map(LayoutEngineModule.splitTokens,(LayoutEngineModule.splitInTwo(\":\"))(a$60));\r\n    return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(Arrays.get(m$1,0).$==1&&(a$61=Name(Arrays.get(m$1,0).$0),a$61!=null&&a$61.$==1&&(Arrays.get(m$1,0).$1.$==0&&(Arrays.get(m$1,1).$==1&&(a$62=ActRf(Arrays.get(m$1,1).$0),a$62!=null&&a$62.$==1&&(Arrays.get(m$1,1).$1.$==0&&($21=[a$61.$0,a$62.$0],true)))))))?{\r\n     $:1,\r\n     $0:[$21[0],$21[1]]\r\n    }:(function($22)\r\n    {\r\n     return function($23)\r\n     {\r\n      return $22(\"Expecting Actions \\\"name:action\\\" separated by ';' : \"+Utils.toSafe($23));\r\n     };\r\n    }(Operators$3.FailWith))(a$60);\r\n   },(LayoutEngineModule.splitSemiColon())(a$55.$0)))\r\n  }:null),a$54!=null&&a$54.$==1&&(m.$1.$1.$1.$1.$1.$1.$1.$1.$==0&&($19=[a$54.$0,a$47.$0,a$50.$0,a$45.$0,a$46.$0,a$52.$0,a$48.$0],true)))))))))))))))))?Syntax.entryDoc($19[3],{\r\n   $:7,\r\n   $0:Syntax.templateDef($19[4],$19[1],$19[5],$19[6],$19[2],$19[0])\r\n  }):m.$==1&&(a$56=Name(m.$0),a$56!=null&&a$56.$==1&&(m.$1.$==1&&(a$57=LayoutEngineModule.Vertical(m.$1.$0),a$57.$==5&&(m.$1.$1.$==1&&(a$58=Pr(m.$1.$1.$0),a$58!=null&&a$58.$==1&&(a$59=Nds(m.$1.$1.$1),a$59!=null&&a$59.$==1&&($20=[a$58.$0,a$57.$0,a$56.$0,a$59.$0],true)))))))?Syntax.entryDoc($20[2],{\r\n   $:6,\r\n   $0:{\r\n    $:0,\r\n    $0:$20[1],\r\n    $1:$20[0],\r\n    $2:$20[3]\r\n   }\r\n  }):null;\r\n };\r\n Syntax.R=function(a)\r\n {\r\n  var a$1,m,n;\r\n  a$1=LayoutEngineModule.Identifier(a);\r\n  return a$1!=null&&a$1.$==1?(m=Strings.SplitChars(a$1.$0,[\".\"],0),!Unchecked.Equals(m,null)&&m.length===1?{\r\n   $:1,\r\n   $0:{\r\n    $:0,\r\n    $0:Arrays.get(m,0)\r\n   }\r\n  }:!Unchecked.Equals(m,null)&&m.length===2?(n=Arrays.get(m,1),{\r\n   $:1,\r\n   $0:{\r\n    $:1,\r\n    $0:Arrays.get(m,0),\r\n    $1:n\r\n   }\r\n  }):null):null;\r\n };\r\n Syntax.entryRef=function(n,e,e$1)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:Syntax.entryDef(n,{\r\n    $:7,\r\n    $0:[e,e$1]\r\n   })\r\n  };\r\n };\r\n Syntax.entryPlg=function(n,p)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:Syntax.entryDef(n,{\r\n    $:6,\r\n    $0:p\r\n   })\r\n  };\r\n };\r\n Syntax.entryVar=function(n,v)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:Syntax.entryDef(n,{\r\n    $:3,\r\n    $0:v\r\n   })\r\n  };\r\n };\r\n Syntax.entryVJS=function(n,w)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:Syntax.entryDef(n,{\r\n    $:5,\r\n    $0:w\r\n   })\r\n  };\r\n };\r\n Syntax.entryView=function(n,w)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:Syntax.entryDef(n,{\r\n    $:4,\r\n    $0:w\r\n   })\r\n  };\r\n };\r\n Syntax.entryActs=function(n,a)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:Syntax.entryDef(n,{\r\n    $:2,\r\n    $0:a\r\n   })\r\n  };\r\n };\r\n Syntax.entryAct=function(n,a)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:Syntax.entryDef(n,{\r\n    $:1,\r\n    $0:a\r\n   })\r\n  };\r\n };\r\n Syntax.entryDoc=function(n,d)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:Syntax.entryDef(n,{\r\n    $:0,\r\n    $0:d\r\n   })\r\n  };\r\n };\r\n Syntax.entryDef=function(n,e)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:n,\r\n   $1:e\r\n  };\r\n };\r\n Syntax.templateDef=function(nm,ats,vs,ws,ds,acs)\r\n {\r\n  return TemplateDef.New(nm,vs,ws,ds,acs,ats);\r\n };\r\n Layout.createLayoutDefinitions=function(nameBase,node)\r\n {\r\n  var dir,meas,p,name1,def1,p$1,name2,def2,t,t$1;\r\n  return node.$==1?(dir=node.$0.$0,(meas=node.$0.$1,(p=Layout.createLayoutDefinitions(nameBase+\"_1\",node.$0.$2),(name1=p[0],(def1=p[1],(p$1=Layout.createLayoutDefinitions(nameBase+\"_2\",node.$0.$3),(name2=p$1[0],(def2=p$1[1],[nameBase,Arrays.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.append([Strings.concat(\" \",List.ofArray([nameBase,dir?\"vertical\":\"horizontal\",Global.String(meas),name1,name2]))],Seq.delay(function()\r\n   {\r\n    return Seq.append(def1,Seq.delay(function()\r\n    {\r\n     return def2;\r\n    }));\r\n   }));\r\n  }))])))))))):(t=node.$0,!Unchecked.Equals(t,null)&&t.length===0)?[\"___\",[]]:(t$1=node.$0,!Unchecked.Equals(t$1,null)&&t$1.length===1)?[Arrays.get(node.$0,0),[]]:[nameBase,[nameBase+\" div \\\"\\\" \"+Strings.concat(\" \",node.$0)]];\r\n };\r\n Layout.extractNodes=function(lyt)\r\n {\r\n  var m,m$1;\r\n  function checkSplitter(dir,m$2,one,two)\r\n  {\r\n   var $1,$2,$3,t,t$1,t$2;\r\n   $1=Layout.extractNodes(one);\r\n   $2=Layout.extractNodes(two);\r\n   return($1.$==0?(t=$1.$0,!Unchecked.Equals(t,null)&&t.length===0)?($3=$2,true):$2.$==0?(t$1=$2.$0,!Unchecked.Equals(t$1,null)&&t$1.length===0)?($3=$1,true):($3=[$1,$2],false):($3=[$1,$2],false):$2.$==0?(t$2=$2.$0,!Unchecked.Equals(t$2,null)&&t$2.length===0)?($3=$1,true):($3=[$1,$2],false):($3=[$1,$2],false))?$3:{\r\n    $:1,\r\n    $0:{\r\n     $:0,\r\n     $0:dir,\r\n     $1:m$2,\r\n     $2:$3[0],\r\n     $3:$3[1]\r\n    }\r\n   };\r\n  }\r\n  m=Layout.horizontalSplit(lyt);\r\n  return m!=null&&m.$==1?checkSplitter(false,m.$0[2],m.$0[0],m.$0[1]):(m$1=Layout.verticalSplit(lyt),m$1!=null&&m$1.$==1?checkSplitter(true,m$1.$0[2],m$1.$0[0],m$1.$0[1]):{\r\n   $:0,\r\n   $0:Layout.cleanSpaces(lyt)\r\n  });\r\n };\r\n Layout.cleanSpaces=function(lyt)\r\n {\r\n  return Arrays.filter(function(a)\r\n  {\r\n   var $1;\r\n   return!($1=(ParseO.Int())(a),$1!=null&&$1.$==1);\r\n  },Strings.SplitStrings(Strings.concat(\" \",lyt),[\" \"],1));\r\n };\r\n Layout.verticalSplit=function(lyt)\r\n {\r\n  var lines,o,o$1,o$2,i,$1,l,r,x,v;\r\n  function c(i$1,l$1)\r\n  {\r\n   var $2,a,t;\r\n   return(a=LibraryJS.REGEX$1(\"^ *\\\\|+ *$\",\"\",l$1),a!=null&&a.$==1&&(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1))?{\r\n    $:1,\r\n    $0:[i$1,l$1.indexOf(\"|\")]\r\n   }:null;\r\n  }\r\n  function g(y)\r\n  {\r\n   return Unchecked.Equals(null,y);\r\n  }\r\n  function g$1(y)\r\n  {\r\n   return Unchecked.Equals(null,y);\r\n  }\r\n  lines=Layout.transpose(lyt);\r\n  o=(o$1=(o$2=Seq.tryHead(Seq.sortBy(function(t)\r\n  {\r\n   return t[1];\r\n  },Seq.choose(function($2)\r\n  {\r\n   return c($2[0],$2[1]);\r\n  },Seq.indexed(lines)))),o$2==null?null:{\r\n   $:1,\r\n   $0:o$2.$0[0]\r\n  }),o$1==null?null:{\r\n   $:1,\r\n   $0:(i=o$1.$0,[Layout.transpose(Slice.array(lines,null,{\r\n    $:1,\r\n    $0:i-1\r\n   })),Layout.transpose(Slice.array(lines,{\r\n    $:1,\r\n    $0:i+1\r\n   },null))])\r\n  });\r\n  return o==null?null:{\r\n   $:1,\r\n   $0:($1=o.$0,(l=$1[0],(r=$1[1],[Arrays.filter(function(x$1)\r\n   {\r\n    return g(Layout.extractMeasuresO(x$1));\r\n   },l),Arrays.filter(function(x$1)\r\n   {\r\n    return g$1(Layout.extractMeasuresO(x$1));\r\n   },r),(x=Seq.tryHead(Seq.delay(function()\r\n   {\r\n    return Seq.append(Seq.choose(Layout.extractMeasuresO,l),Seq.delay(function()\r\n    {\r\n     return Seq.map(function(a)\r\n     {\r\n      return a.$==0?a.$1?new Measures({\r\n       $:0,\r\n       $0:a.$0,\r\n       $1:false\r\n      }):a:a;\r\n     },Seq.choose(Layout.extractMeasuresO,r));\r\n    }));\r\n   })),(v=new Measures({\r\n    $:1,\r\n    $0:5,\r\n    $1:50,\r\n    $2:95\r\n   }),x==null?v:x.$0))])))\r\n  };\r\n };\r\n Layout.transpose=function(lines)\r\n {\r\n  var max;\r\n  max=Seq.max(Seq.map(function(l)\r\n  {\r\n   return l.length;\r\n  },lines));\r\n  return Arrays.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.map(function(i)\r\n   {\r\n    return Arrays.ofSeq(Seq.delay(function()\r\n    {\r\n     return Seq.map(function(l)\r\n     {\r\n      return l.length>i?l[i]:\" \";\r\n     },lines);\r\n    })).join(\"\");\r\n   },Operators$3.range(0,max-1));\r\n  }));\r\n };\r\n Layout.horizontalSplit=function(lines)\r\n {\r\n  var o,o$1,$1,i,ms;\r\n  function c(i$1,l)\r\n  {\r\n   var a,x,o$2,v;\r\n   a=LibraryJS.REGEX$1(\"^ *--+([ ^v0-9]*)-* *$\",\"\",l);\r\n   return a!=null&&a.$==1?{\r\n    $:1,\r\n    $0:[[i$1,(x=(o$2=Seq.tryItem(1,a.$0),o$2==null?null:Layout.extractMeasuresO(Strings.Replace(Strings.Replace(o$2.$0,\"^\",\"\"),\"v\",\"-\"))),(v=new Measures({\r\n     $:1,\r\n     $0:5,\r\n     $1:50,\r\n     $2:95\r\n    }),x==null?v:x.$0))],l.indexOf(\"-\")]\r\n   }:null;\r\n  }\r\n  o=(o$1=Seq.tryHead(Seq.sortBy(function(t)\r\n  {\r\n   return t[1];\r\n  },Seq.choose(function($2)\r\n  {\r\n   return c($2[0],$2[1]);\r\n  },Seq.indexed(lines)))),o$1==null?null:{\r\n   $:1,\r\n   $0:o$1.$0[0]\r\n  });\r\n  return o==null?null:{\r\n   $:1,\r\n   $0:($1=o.$0,(i=$1[0],(ms=$1[1],[Slice.array(lines,null,{\r\n    $:1,\r\n    $0:i-1\r\n   }),Slice.array(lines,{\r\n    $:1,\r\n    $0:i+1\r\n   },null),ms])))\r\n  };\r\n };\r\n Layout.extractMeasuresO=function(m)\r\n {\r\n  var m$1,$1,a,$2,a$1,a$2,a$3;\r\n  m$1=Strings.SplitChars(m,[\" \"],1);\r\n  return!Unchecked.Equals(m$1,null)&&m$1.length===1&&(a=(ParseO.Int())(Arrays.get(m$1,0)),a!=null&&a.$==1&&($1=a.$0,true))?{\r\n   $:1,\r\n   $0:new Measures({\r\n    $:0,\r\n    $0:Math.abs($1),\r\n    $1:$1>=0\r\n   })\r\n  }:!Unchecked.Equals(m$1,null)&&m$1.length===3&&(a$1=(ParseO.Int())(Arrays.get(m$1,0)),a$1!=null&&a$1.$==1&&(a$2=(ParseO.Int())(Arrays.get(m$1,1)),a$2!=null&&a$2.$==1&&(a$3=(ParseO.Int())(Arrays.get(m$1,2)),a$3!=null&&a$3.$==1&&($2=[a$3.$0,a$1.$0,a$2.$0],true))))?{\r\n   $:1,\r\n   $0:new Measures({\r\n    $:1,\r\n    $0:$2[1],\r\n    $1:$2[2],\r\n    $2:$2[0]\r\n   })\r\n  }:null;\r\n };\r\n LayoutEngineModule.newLyt=function(name,lyt)\r\n {\r\n  return LayoutEngine.New(name,Var$2.Create$1(lyt));\r\n };\r\n LayoutEngineModule.refreshEntries=function(lytN,entries)\r\n {\r\n  var plg,m,plg$1,i;\r\n  plg=(m=AppFramework.tryGetPlugIn(lytN),m==null?(plg$1=(i=AppFramework.defaultPlugIn(),PlugIn.New(lytN,i.plgVars,i.plgViews,i.plgDocs,i.plgActions,i.plgQueries)),(AppFramework.addPlugIn(plg$1),plg$1)):m.$0);\r\n  ListModel.refreshLM(plg.plgVars,Arrays.ofSeq(Seq.delay(function()\r\n  {\r\n   return LayoutEngineModule.getVarEntries(entries);\r\n  })));\r\n  ListModel.refreshLM(plg.plgViews,Arrays.ofSeq(Seq.delay(function()\r\n  {\r\n   return LayoutEngineModule.getViewEntries(entries);\r\n  })));\r\n  ListModel.refreshLM(plg.plgActions,Arrays.ofSeq(Seq.delay(function()\r\n  {\r\n   return LayoutEngineModule.getActionEntries(entries);\r\n  })));\r\n  ListModel.refreshLM(plg.plgQueries,Arrays.ofSeq(Seq.delay(function()\r\n  {\r\n   return LayoutEngineModule.getQueryEntries(entries);\r\n  })));\r\n  ListModel.refreshLM(plg.plgDocs,Arrays.ofSeq(Seq.delay(function()\r\n  {\r\n   return LayoutEngineModule.getDocEntries(entries);\r\n  })));\r\n };\r\n LayoutEngineModule.none=function(x)\r\n {\r\n  return Doc.Element(\"span\",[],[]);\r\n };\r\n LayoutEngineModule.getQueryEntries=function(entries)\r\n {\r\n  function f(t)\r\n  {\r\n   return t[1];\r\n  }\r\n  return Seq.map(function(x)\r\n  {\r\n   return Seq.last(f(x));\r\n  },Seq.groupBy(function(v)\r\n  {\r\n   return v.qryName;\r\n  },Seq.choose(function(a)\r\n  {\r\n   return a.$==4?{\r\n    $:1,\r\n    $0:a.$0\r\n   }:null;\r\n  },entries)));\r\n };\r\n LayoutEngineModule.getActionEntries=function(entries)\r\n {\r\n  function f(t)\r\n  {\r\n   return t[1];\r\n  }\r\n  return Seq.map(function(x)\r\n  {\r\n   return Seq.last(f(x));\r\n  },Seq.groupBy(function(v)\r\n  {\r\n   return v.actName;\r\n  },Seq.choose(function(a)\r\n  {\r\n   return a.$==3?{\r\n    $:1,\r\n    $0:a.$0\r\n   }:null;\r\n  },entries)));\r\n };\r\n LayoutEngineModule.getViewEntries=function(entries)\r\n {\r\n  function f(t)\r\n  {\r\n   return t[1];\r\n  }\r\n  return Seq.map(function(x)\r\n  {\r\n   return Seq.last(f(x));\r\n  },Seq.groupBy(function(v)\r\n  {\r\n   return v.viwName;\r\n  },Seq.choose(function(a)\r\n  {\r\n   return a.$==1?{\r\n    $:1,\r\n    $0:a.$0\r\n   }:null;\r\n  },entries)));\r\n };\r\n LayoutEngineModule.getVarEntries=function(entries)\r\n {\r\n  function f(t)\r\n  {\r\n   return t[1];\r\n  }\r\n  return Seq.map(function(x)\r\n  {\r\n   return Seq.last(f(x));\r\n  },Seq.groupBy(function(v)\r\n  {\r\n   return v.varName;\r\n  },Seq.choose(function(a)\r\n  {\r\n   return a.$==0?{\r\n    $:1,\r\n    $0:a.$0\r\n   }:null;\r\n  },entries)));\r\n };\r\n LayoutEngineModule.getDocEntries=function(entries)\r\n {\r\n  function f(t)\r\n  {\r\n   return t[1];\r\n  }\r\n  return Seq.map(function(x)\r\n  {\r\n   return Seq.last(f(x));\r\n  },Seq.groupBy(function(d)\r\n  {\r\n   return d.docName;\r\n  },Seq.choose(function(a)\r\n  {\r\n   return a.$==2?{\r\n    $:1,\r\n    $0:a.$0\r\n   }:null;\r\n  },entries)));\r\n };\r\n LayoutEngineModule.getText=function(lytNm,txtName)\r\n {\r\n  var a,id,p,plg,nm,o,o$1,o$2,o$3;\r\n  a=LayoutEngineModule.Identifier(txtName);\r\n  return a!=null&&a.$==1?(id=a.$0,(p=(AppFramework.splitName(lytNm))(id),(plg=p[0],(nm=p[1],(o=(o$1=AppFramework.tryGetViw(plg,nm),o$1==null?null:{\r\n   $:1,\r\n   $0:Doc.TextView(o$1.$0.viwView)\r\n  }),o==null?(o$2=(o$3=AppFramework.tryGetVar(plg,nm),o$3==null?null:{\r\n   $:1,\r\n   $0:Doc.TextView(o$3.$0.varVar.get_View())\r\n  }),o$2==null?Doc.TextNode(id):o$2.$0):o.$0))))):Doc.TextNode(LayoutEngineModule.S(txtName));\r\n };\r\n LayoutEngineModule.parseEntries=function(lytNm,txt)\r\n {\r\n  var localRefs,x;\r\n  localRefs=new Dictionary.New$5();\r\n  x=(((Runtime.Curried3(function($1,$2,$3)\r\n  {\r\n   return $1(\"PlugInName View \\\"\"+Utils.toSafe($2)+\"\\\"\\n\"+Utils.toSafe($3));\r\n  }))(Global.id))(lytNm.get_Id()))(txt);\r\n  return LayoutEngineModule.processText(Syntax.createEntryO2(lytNm,localRefs),x);\r\n };\r\n LayoutEngineModule.processText=function(f,txt)\r\n {\r\n  return LayoutEngineModule.processLines(f,Strings.SplitChars(txt,[\"\\n\",\"\\r\"],1));\r\n };\r\n LayoutEngineModule.processLines=function(f,ls)\r\n {\r\n  function processLinesR(ls$1)\r\n  {\r\n   var m,l,m$1,$1,a,p,p$1,rest,docs,p$2,names,ls$2;\r\n   m=Seq.tryHead(ls$1);\r\n   return m!=null&&m.$==1?(l=m.$0,(m$1=LayoutEngineModule.splitTokens(l),m$1.$==1&&(a=LayoutEngineModule.Identifier(m$1.$0),a!=null&&a.$==1&&(m$1.$1.$==1&&(LayoutEngineModule.Vertical(m$1.$1.$0).$==2&&(m$1.$1.$1.$==0&&($1=a.$0,true)))))?(p=LayoutEngineModule.getExtraLines(function(l$1)\r\n   {\r\n    return Strings.StartsWith(Strings.Trim(l$1),\"|\");\r\n   },ls$1),processLinesR((Layout.createLayoutDefinitions($1,Layout.extractNodes(p[0])))[1].concat(p[1]))):m$1.$==0?processLinesR(Slice.array(ls$1,{\r\n    $:1,\r\n    $0:1\r\n   },null)):(p$1=LayoutEngineModule.getExtraLines(function(l$1)\r\n   {\r\n    return Strings.StartsWith(Strings.Trim(l$1),\":\");\r\n   },ls$1),(rest=p$1[1],(docs=p$1[0],Arrays.length(docs)>0?(p$2=LayoutEngineModule.createLines(Seq.nth(0,Strings.SplitChars(l,[\" \"],1)),1,[],[],1,docs),(names=p$2[0],(ls$2=p$2[1],processLinesR(Arrays.ofSeq(Seq.delay(function()\r\n   {\r\n    return Seq.append(ls$2,Seq.delay(function()\r\n    {\r\n     return Seq.append([l+\" \"+Strings.concat(\" \",names)],Seq.delay(function()\r\n     {\r\n      return rest;\r\n     }));\r\n    }));\r\n   })))))):Arrays.ofSeq(Seq.delay(function()\r\n   {\r\n    var m$2;\r\n    return Seq.append((m$2=f(l),m$2!=null&&m$2.$==1?[m$2.$0]:[]),Seq.delay(function()\r\n    {\r\n     return processLinesR(rest);\r\n    }));\r\n   }))))))):[];\r\n  }\r\n  return processLinesR(ls);\r\n };\r\n LayoutEngineModule.createLines=function(baseName,n,names,lines,i,ls)\r\n {\r\n  var prefix,prefix2,m,a,l,p,name,p$1,childrenLines,childNames;\r\n  prefix=Strings.replicate(n,\":\");\r\n  prefix2=\":\"+prefix;\r\n  m=Seq.tryHead(ls);\r\n  return m!=null&&m.$==1?(a=String.StartsWith(prefix,Strings.Trim(m.$0)),a!=null&&a.$==1?(l=a.$0,(p=LayoutEngineModule.getExtraLines(function(l$1)\r\n  {\r\n   return Strings.StartsWith(Strings.Trim(l$1),prefix2);\r\n  },ls),(name=(((Runtime.Curried3(function($1,$2,$3)\r\n  {\r\n   return $1(\"_\"+Utils.toSafe($2)+\"_\"+Global.String($3));\r\n  }))(Global.id))(baseName))(i),(p$1=LayoutEngineModule.createLines(name,n+1,[],[],1,p[0]),(childrenLines=p$1[1],(childNames=p$1[0],LayoutEngineModule.createLines(baseName,n,Arrays.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.append(names,Seq.delay(function()\r\n   {\r\n    return[name];\r\n   }));\r\n  })),Arrays.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.append(lines,Seq.delay(function()\r\n   {\r\n    return Seq.append(childrenLines,Seq.delay(function()\r\n    {\r\n     return[name+\" \"+l+\" \"+Strings.concat(\" \",childNames)];\r\n    }));\r\n   }));\r\n  })),i+1,p[1]))))))):[names,lines]):[names,lines];\r\n };\r\n LayoutEngineModule.getExtraLines=function(pred,ls)\r\n {\r\n  var i,x,o,v,a;\r\n  i=(x=(o=Seq.tryFindIndex(function(l)\r\n  {\r\n   return(LayoutEngineModule.notEmpty())(l)&&!pred(l);\r\n  },Seq.skip(1,ls)),o==null?null:{\r\n   $:1,\r\n   $0:1+o.$0\r\n  }),(v=Arrays.length(ls),x==null?v:x.$0));\r\n  return[(a=Slice.array(ls,{\r\n   $:1,\r\n   $0:1\r\n  },{\r\n   $:1,\r\n   $0:i-1\r\n  }),Arrays.filter(LayoutEngineModule.notEmpty(),a)),Slice.array(ls,{\r\n   $:1,\r\n   $0:i\r\n  },null)];\r\n };\r\n LayoutEngineModule.notEmpty=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.notEmpty;\r\n };\r\n LayoutEngineModule.emptyLine=function(l)\r\n {\r\n  var lt;\r\n  lt=Strings.Trim(l);\r\n  return lt===\"\"||Strings.StartsWith(lt,\"//\");\r\n };\r\n LayoutEngineModule.splitTokens=function(line)\r\n {\r\n  return LayoutEngineModule.doubleQuote(List.ofSeq(Seq.collect(Global.id,Seq.mapi(function(i,s)\r\n  {\r\n   var t;\r\n   return i%2===1?[{\r\n    $:0,\r\n    $0:s\r\n   }]:s===\"\"?[{\r\n    $:0,\r\n    $0:\"\\\"\"\r\n   }]:(t=Strings.Trim(s),t===\"\"?[]:Arrays.map(function(a)\r\n   {\r\n    return{\r\n     $:1,\r\n     $0:a\r\n    };\r\n   },Strings.SplitChars(t,[\" \"],1)));\r\n  },String.splitByChar(\"\\\"\",Unchecked.Equals(Seq.tryHead(line),{\r\n   $:1,\r\n   $0:\"\\\"\"\r\n  })?\" \"+line:line)))));\r\n };\r\n LayoutEngineModule.doubleQuote=function(a)\r\n {\r\n  var $1,$2,$3;\r\n  switch(a.$==1?a.$0.$==1?Strings.StartsWith(a.$0.$0,\"//\")?($1=a.$0.$0,1):2:2:0)\r\n  {\r\n   case 0:\r\n    return List.T.Empty;\r\n   case 1:\r\n    return List.T.Empty;\r\n   case 2:\r\n    switch(a.$==1?a.$0.$==0?a.$1.$==1?a.$1.$0.$==0?a.$1.$0.$0===\"\\\"\"?a.$1.$1.$==0?($3=a.$0.$0,1):a.$1.$1.$0.$==0?($3=[a.$1.$1.$1,a.$0.$0,a.$1.$1.$0.$0],0):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):3)\r\n    {\r\n     case 0:\r\n      $2=LayoutEngineModule.doubleQuote(new List.T({\r\n       $:1,\r\n       $0:{\r\n        $:0,\r\n        $0:$3[1]+\"\\\"\"+$3[2]\r\n       },\r\n       $1:$3[0]\r\n      }));\r\n      break;\r\n     case 1:\r\n      $2=List.ofArray([{\r\n       $:0,\r\n       $0:$3\r\n      }]);\r\n      break;\r\n     case 2:\r\n      $2=new List.T({\r\n       $:1,\r\n       $0:$3[0],\r\n       $1:LayoutEngineModule.doubleQuote($3[1])\r\n      });\r\n      break;\r\n     case 3:\r\n      throw new MatchFailureException.New(\"D:\\\\Abe\\\\CIPHERWorkspace\\\\FSharpStation\\\\projects\\\\LayoutEngine\\\\src\\\\LayoutEngine.fs\",2932,38);\r\n    }\r\n    return $2;\r\n  }\r\n };\r\n LayoutEngineModule.variableSplitter=function(vertical,min,value,max,doc1,doc2)\r\n {\r\n  return Doc.Element(\"wcomp-splitter\",List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.append(vertical?[AttrProxy.Create(\"vertical\",\"\")]:[],Seq.delay(function()\r\n   {\r\n    return Seq.append([AttrProxy.Create(\"min\",Global.String(min))],Seq.delay(function()\r\n    {\r\n     return Seq.append([AttrProxy.Create(\"value\",Global.String(value))],Seq.delay(function()\r\n     {\r\n      return[AttrProxy.Create(\"max\",Global.String(max))];\r\n     }));\r\n    }));\r\n   }));\r\n  })),List.ofArray([doc1,doc2]));\r\n };\r\n LayoutEngineModule.fixedSplitter=function(vertical,pixel,first,doc1,doc2)\r\n {\r\n  var sizes,b,p,i,b$1,p$1,i$1;\r\n  sizes=(((first?Runtime.Curried3(function($1,$2,$3)\r\n  {\r\n   return $1($2.toFixed(6)+\"px calc(100% - \"+$3.toFixed(6)+\"px)\");\r\n  }):Runtime.Curried3(function($1,$2,$3)\r\n  {\r\n   return $1(\"calc(100% - \"+$2.toFixed(6)+\"px) \"+$3.toFixed(6)+\"px\");\r\n  }))(Global.id))(pixel))(pixel);\r\n  return vertical?(b=ProviderBuilder.Make().WithHole({\r\n   $:1,\r\n   $0:\"partsizes\",\r\n   $1:sizes\r\n  }).WithHole({\r\n   $:0,\r\n   $0:\"first\",\r\n   $1:doc1\r\n  }).WithHole({\r\n   $:0,\r\n   $0:\"second\",\r\n   $1:doc2\r\n  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.fixedsplitterver(p[0])),(b.i=i,i)))).get_Doc():(b$1=ProviderBuilder.Make().WithHole({\r\n   $:1,\r\n   $0:\"partsizes\",\r\n   $1:sizes\r\n  }).WithHole({\r\n   $:0,\r\n   $0:\"first\",\r\n   $1:doc1\r\n  }).WithHole({\r\n   $:0,\r\n   $0:\"second\",\r\n   $1:doc2\r\n  }),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],LayoutEngine_Templates.fixedsplitterhor(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();\r\n };\r\n LayoutEngineModule.Measures$1=function(a)\r\n {\r\n  var a$1,$1,a$2,$2,a$3,$3,a$4,a$5,a$6;\r\n  return a.$==1?(a$1=String.splitByChar(\"-\",a.$0),!Unchecked.Equals(a$1,null)&&a$1.length===1&&(a$2=(ParseO.Double())(Arrays.get(a$1,0)),a$2!=null&&a$2.$==1&&($1=a$2.$0,true))?{\r\n   $:1,\r\n   $0:new Measures({\r\n    $:0,\r\n    $0:$1,\r\n    $1:true\r\n   })\r\n  }:!Unchecked.Equals(a$1,null)&&a$1.length===2&&(Arrays.get(a$1,0)===\"\"&&(a$3=(ParseO.Double())(Arrays.get(a$1,1)),a$3!=null&&a$3.$==1&&($2=a$3.$0,true)))?{\r\n   $:1,\r\n   $0:new Measures({\r\n    $:0,\r\n    $0:$2,\r\n    $1:false\r\n   })\r\n  }:!Unchecked.Equals(a$1,null)&&a$1.length===3&&(a$4=(ParseO.Double())(Arrays.get(a$1,0)),a$4!=null&&a$4.$==1&&(a$5=(ParseO.Double())(Arrays.get(a$1,1)),a$5!=null&&a$5.$==1&&(a$6=(ParseO.Double())(Arrays.get(a$1,2)),a$6!=null&&a$6.$==1&&($3=[a$6.$0,a$4.$0,a$5.$0],true))))?{\r\n   $:1,\r\n   $0:new Measures({\r\n    $:1,\r\n    $0:$3[1],\r\n    $1:$3[2],\r\n    $2:$3[0]\r\n   })\r\n  }:null):null;\r\n };\r\n LayoutEngineModule.splitInTwo=function(ch)\r\n {\r\n  var f;\r\n  f=LayoutEngineModule.splitChar(ch);\r\n  return function(x)\r\n  {\r\n   return Arrays.ofSeq(f(x));\r\n  };\r\n };\r\n LayoutEngineModule.splitSemiColon=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.splitSemiColon;\r\n };\r\n LayoutEngineModule.splitChar=function(ch)\r\n {\r\n  function f(s)\r\n  {\r\n   return String.splitByChar(ch,s);\r\n  }\r\n  function g(s)\r\n  {\r\n   return Seq.map(String.trim,s);\r\n  }\r\n  return function(x)\r\n  {\r\n   return g(f(x));\r\n  };\r\n };\r\n LayoutEngineModule.Var=function(a)\r\n {\r\n  var $1,$2,$3,$4,$5,$6;\r\n  return a.$==1&&(a.$0===\"Var\"&&($1=a.$0,true))?{\r\n   $:0,\r\n   $0:null\r\n  }:a.$==1&&(a.$0===\"Doc\"&&($2=a.$0,true))?{\r\n   $:1,\r\n   $0:null\r\n  }:a.$==1&&(a.$0===\"View\"&&($3=a.$0,true))?{\r\n   $:2,\r\n   $0:null\r\n  }:a.$==1&&(a.$0===\"ViewJS\"&&($4=a.$0,true))?{\r\n   $:3,\r\n   $0:null\r\n  }:a.$==1&&(a.$0===\"Docs\"&&($5=a.$0,true))?{\r\n   $:4,\r\n   $0:null\r\n  }:a.$==1&&(a.$0===\"Action\"&&($6=a.$0,true))?{\r\n   $:5,\r\n   $0:null\r\n  }:{\r\n   $:6,\r\n   $0:null\r\n  };\r\n };\r\n LayoutEngineModule.PlugIn=function(a)\r\n {\r\n  var $1,$2,$3,$4,$5,$6;\r\n  return a.$==1&&(a.$0===\"PlugIn\"&&($1=a.$0,true))?{\r\n   $:0,\r\n   $0:null\r\n  }:a.$==1&&(a.$0===\"Button\"&&($2=a.$0,true))?{\r\n   $:1,\r\n   $0:null\r\n  }:a.$==1&&(a.$0===\"input\"&&($3=a.$0,true))?{\r\n   $:2,\r\n   $0:null\r\n  }:a.$==1&&(a.$0===\"textarea\"&&($4=a.$0,true))?{\r\n   $:3,\r\n   $0:null\r\n  }:a.$==1&&(a.$0===\"select\"&&($5=a.$0,true))?{\r\n   $:4,\r\n   $0:null\r\n  }:a.$==1&&(a.$0===\"Actions\"&&($6=a.$0,true))?{\r\n   $:5,\r\n   $0:null\r\n  }:{\r\n   $:6,\r\n   $0:null\r\n  };\r\n };\r\n LayoutEngineModule.Vertical=function(a)\r\n {\r\n  var $1,$2,$3,$4,$5,a$1;\r\n  return a.$==1&&(a.$0===\"vertical\"&&($1=a.$0,true))?{\r\n   $:0,\r\n   $0:null\r\n  }:a.$==1&&(a.$0===\"horizontal\"&&($2=a.$0,true))?{\r\n   $:1,\r\n   $0:null\r\n  }:a.$==1&&(a.$0===\"layout\"&&($3=a.$0,true))?{\r\n   $:2,\r\n   $0:null\r\n  }:a.$==1&&(a.$0===\"grid\"&&($4=a.$0,true))?{\r\n   $:3,\r\n   $0:null\r\n  }:a.$==1&&(a.$0===\"template\"&&($5=a.$0,true))?{\r\n   $:4,\r\n   $0:null\r\n  }:(a$1=LayoutEngineModule.Identifier(a),a$1!=null&&a$1.$==1?{\r\n   $:5,\r\n   $0:a$1.$0\r\n  }:{\r\n   $:6,\r\n   $0:null\r\n  });\r\n };\r\n LayoutEngineModule.I=function(a)\r\n {\r\n  var a$1;\r\n  a$1=LayoutEngineModule.Identifier(a);\r\n  return a$1!=null&&a$1.$==1?{\r\n   $:1,\r\n   $0:a$1.$0\r\n  }:null;\r\n };\r\n LayoutEngineModule.Identifier=function(a)\r\n {\r\n  var $1,a$1,t;\r\n  return a.$==1&&(a$1=LibraryJS.REGEX$1(\"^[$a-zA-Z_][0-9a-zA-Z_\\\\.\\\\-$]*$\",\"\",a.$0),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($1=Arrays.get(a$1.$0,0),true)))?{\r\n   $:1,\r\n   $0:$1\r\n  }:null;\r\n };\r\n LayoutEngineModule.S=function(a)\r\n {\r\n  return a.$==1?a.$0:a.$0;\r\n };\r\n P$1.run=function(pin,p)\r\n {\r\n  return AppFramework.run(pin,p.r);\r\n };\r\n NewLY.addNewLayoutAct=function(name,layout)\r\n {\r\n  var x;\r\n  NewLY.addLayout(!Unchecked.Equals(name,null)?name:\"Lyt_\"+Strings.Replace(Global.String(Guid.NewGuid()),\"-\",\"\"),(x=!Unchecked.Equals(layout,null)&&!Unchecked.Equals(name,null)?layout:\"\\r\\n                                        perc  Var \\\"50\\\"\\r\\n                                        perc2 Var \\\"50\\\"\\r\\n                                        gap  Var \\\"5px\\\"\\r\\n            \\r\\n                                        Ask1 div \\\"background:lightblue; height:100%\\\"\\r\\n                                        : Doc AF.InputLabel \\\"placeholder=Type percentage here...\\\" \\\"Percentage (%):\\\" perc\\r\\n            \\r\\n                                        Ask2a div \\\"background:pink; height:100%\\\"\\r\\n                                        : Doc AF.InputLabel \\\"placeholder=Type percentage here...\\\" \\\"Percentage (%):\\\" perc2\\r\\n            \\r\\n                                        Ask2b div \\\"background:lightgreen; height:100%\\\"\\r\\n                                        : Doc AF.InputLabel \\\"placeholder=Type gap here...\\\" \\\"Gap:\\\" gap\\r\\n            \\r\\n                                        dragSplitter  Action AF.DragSplitter \\\"@{PlugInName}.perc\\\"\\r\\n                                        dragSplitter2 Action AF.DragSplitter \\\"@{PlugInName}.perc2\\\"\\r\\n            \\r\\n                                        Ask2 template HSplitter1 \\\"height:100%\\\" \\\"gap:gap\\\" \\\"doc1: Ask2a; doc2:Ask2b\\\" \\\"perc:perc2\\\" \\\"MouseDown:dragSplitter2\\\"\\r\\n            \\r\\n                                        main div \\\"\\\"\\r\\n                                        :    template VSplitter1  \\\"height:100%\\\" \\\"gap:gap\\\" \\\"doc1: Ask1 ; doc2:Ask2 \\\" \\\"perc:perc \\\" \\\"MouseDown:dragSplitter \\\"\\r\\n            \\r\\n                                        split horizontal 0-50-100 AppFramework.AppFwkClient main\\r\\n                                    \",(String.unindentStr())(x)));\r\n };\r\n NewLY.addLayout=function(name,content)\r\n {\r\n  NewLY.addNewLayout(LayoutEngineModule.newLyt(new PlugInName({\r\n   $:0,\r\n   $0:name\r\n  }),content));\r\n };\r\n NewLY.addNewLayout=function(lyt)\r\n {\r\n  var parseW,l,errorsW,f,defsW,f$1,g,entries,g$1,l$1;\r\n  function c(a)\r\n  {\r\n   return a.$==1?{\r\n    $:1,\r\n    $0:a.$0\r\n   }:null;\r\n  }\r\n  function g$2(s)\r\n  {\r\n   return Strings.concat(\"\\n\",s);\r\n  }\r\n  function c$1(a)\r\n  {\r\n   return a.$==0?{\r\n    $:1,\r\n    $0:a.$0\r\n   }:null;\r\n  }\r\n  function f$2(s)\r\n  {\r\n   return Seq.append(entries,s);\r\n  }\r\n  parseW=View$1.Map((l=lyt.lytName,function(t)\r\n  {\r\n   return LayoutEngineModule.parseEntries(l,t);\r\n  }),lyt.lytDefinition.get_View());\r\n  errorsW=View$1.Map((f=function(s)\r\n  {\r\n   return Seq.choose(c,s);\r\n  },function(x)\r\n  {\r\n   return g$2(f(x));\r\n  }),parseW);\r\n  defsW=View$1.Map((f$1=function(s)\r\n  {\r\n   return Seq.choose(c$1,s);\r\n  },(g=NewLY.generateEntries(lyt.lytName),function(x)\r\n  {\r\n   return g(f$1(x));\r\n  })),parseW);\r\n  entries=List.ofArray([{\r\n   $:0,\r\n   $0:AppFramework.newVar(new PlgElemName({\r\n    $:0,\r\n    $0:\"Layout\"\r\n   }),lyt.lytDefinition)\r\n  },{\r\n   $:1,\r\n   $0:AppFramework.newViw(new PlgElemName({\r\n    $:0,\r\n    $0:\"ParseMsgs\"\r\n   }),errorsW)\r\n  }]);\r\n  View$1.Sink((g$1=(l$1=lyt.lytName,function(e)\r\n  {\r\n   LayoutEngineModule.refreshEntries(l$1,e);\r\n  }),function(x)\r\n  {\r\n   return g$1(f$2(x));\r\n  }),defsW);\r\n };\r\n NewLY.generateEntries=function(lytN)\r\n {\r\n  function c($1,$2)\r\n  {\r\n   var x,x$1,x$2,x$3,x$4,x$5,x$6,x$7,x$8,x$9,x$10,x$11,x$12;\r\n   return $2.$==0?$2.$0.$==1?{\r\n    $:1,\r\n    $0:{\r\n     $:2,\r\n     $0:(x=(NewLY.defButtonM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2]),AppFramework.newDoc0(new PlgElemName({\r\n      $:0,\r\n      $0:$1\r\n     }),x))\r\n    }\r\n   }:$2.$0.$==2?{\r\n    $:1,\r\n    $0:{\r\n     $:2,\r\n     $0:(x$1=(NewLY.defInputM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]),AppFramework.newDoc0(new PlgElemName({\r\n      $:0,\r\n      $0:$1\r\n     }),x$1))\r\n    }\r\n   }:$2.$0.$==3?{\r\n    $:1,\r\n    $0:{\r\n     $:2,\r\n     $0:(x$2=(NewLY.defTextAreaM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]),AppFramework.newDoc0(new PlgElemName({\r\n      $:0,\r\n      $0:$1\r\n     }),x$2))\r\n    }\r\n   }:$2.$0.$==5?{\r\n    $:1,\r\n    $0:{\r\n     $:2,\r\n     $0:(x$3=(NewLY.defConcatM())([lytN,$1,$2.$0.$0.$0]),AppFramework.newDoc0(new PlgElemName({\r\n      $:0,\r\n      $0:$1\r\n     }),x$3))\r\n    }\r\n   }:$2.$0.$==6?{\r\n    $:1,\r\n    $0:{\r\n     $:2,\r\n     $0:(x$4=(NewLY.defElementM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2]),AppFramework.newDoc0(new PlgElemName({\r\n      $:0,\r\n      $0:$1\r\n     }),x$4))\r\n    }\r\n   }:$2.$0.$==4?{\r\n    $:1,\r\n    $0:{\r\n     $:2,\r\n     $0:(x$5=(NewLY.defDocFM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]),AppFramework.newDocL(new PlgElemName({\r\n      $:0,\r\n      $0:$1\r\n     }),x$5))\r\n    }\r\n   }:$2.$0.$==7?{\r\n    $:1,\r\n    $0:{\r\n     $:2,\r\n     $0:(x$6=(NewLY.defTemplateM())([lytN,$1,$2.$0.$0]),AppFramework.newDoc0(new PlgElemName({\r\n      $:0,\r\n      $0:$1\r\n     }),x$6))\r\n    }\r\n   }:{\r\n    $:1,\r\n    $0:{\r\n     $:2,\r\n     $0:(x$7=(NewLY.defSplitterM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2,$2.$0.$0.$3]),AppFramework.newDoc0(new PlgElemName({\r\n      $:0,\r\n      $0:$1\r\n     }),x$7))\r\n    }\r\n   }:$2.$==1?{\r\n    $:1,\r\n    $0:{\r\n     $:3,\r\n     $0:(x$8=(NewLY.defActionM())([lytN,$1,$2.$0.$0,$2.$0.$1]),AppFramework.newActF(new PlgElemName({\r\n      $:0,\r\n      $0:$1\r\n     }),x$8))\r\n    }\r\n   }:$2.$==2?{\r\n    $:1,\r\n    $0:{\r\n     $:3,\r\n     $0:(x$9=(NewLY.defActionsM())([lytN,$1,$2.$0.$0]),AppFramework.newActF(new PlgElemName({\r\n      $:0,\r\n      $0:$1\r\n     }),x$9))\r\n    }\r\n   }:$2.$==4?{\r\n    $:1,\r\n    $0:{\r\n     $:1,\r\n     $0:(x$10=(NewLY.defViewM())([lytN,$1,$2.$0.$0]),AppFramework.newViw(new PlgElemName({\r\n      $:0,\r\n      $0:$1\r\n     }),x$10))\r\n    }\r\n   }:$2.$==5?{\r\n    $:1,\r\n    $0:{\r\n     $:1,\r\n     $0:(x$11=(NewLY.defViewJSM())([lytN,$1,$2.$0.$0]),AppFramework.newViw(new PlgElemName({\r\n      $:0,\r\n      $0:$1\r\n     }),x$11))\r\n    }\r\n   }:$2.$==7?null:$2.$==6?null:{\r\n    $:1,\r\n    $0:{\r\n     $:0,\r\n     $0:(x$12=NewLY.defVarM(lytN,$1,$2.$0.$0),AppFramework.newVar(new PlgElemName({\r\n      $:0,\r\n      $0:$1\r\n     }),x$12))\r\n    }\r\n   };\r\n  }\r\n  return function(s)\r\n  {\r\n   return Seq.choose(function($1)\r\n   {\r\n    return c($1[0],$1[1]);\r\n   },s);\r\n  };\r\n };\r\n NewLY.defTemplateM=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defTemplateM;\r\n };\r\n NewLY.defSplitterM=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defSplitterM;\r\n };\r\n NewLY.defViewJSM=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defViewJSM;\r\n };\r\n NewLY.defViewM=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defViewM;\r\n };\r\n NewLY.defConcatM=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defConcatM;\r\n };\r\n NewLY.defElementM=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defElementM;\r\n };\r\n NewLY.defTextAreaM=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defTextAreaM;\r\n };\r\n NewLY.defInputM=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defInputM;\r\n };\r\n NewLY.defButtonM=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defButtonM;\r\n };\r\n NewLY.defActionsM=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defActionsM;\r\n };\r\n NewLY.defActionM=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defActionM;\r\n };\r\n NewLY.defDocFM=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defDocFM;\r\n };\r\n NewLY.defVarM=function(l,n,i)\r\n {\r\n  var v;\r\n  v=(NewLY.defVarM0())([l,n,NewLY.initVal()]);\r\n  v.Get()===NewLY.initVal()?v.Set(i):void 0;\r\n  return v;\r\n };\r\n NewLY.defVarM0=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.defVarM0;\r\n };\r\n NewLY.initVal=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.initVal;\r\n };\r\n NewLY.defTemplate=function(lytN,n,tmpDef)\r\n {\r\n  var b;\r\n  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()\r\n  {\r\n   return b.Bind(NewLY.nodeRefToDocD(),function(a)\r\n   {\r\n    return b.Bind(NewLY.varRefToVarD(),function(a$1)\r\n    {\r\n     return b.Bind(AppFramework.extractTextD(),function(a$2)\r\n     {\r\n      return b.Bind(AppFramework.extractAtsD(),function(a$3)\r\n      {\r\n       return b.Bind(NewLY.actRefToActD(),function(a$4)\r\n       {\r\n        return b.Bind(NewLY.getParam2D(),function(a$5)\r\n        {\r\n         return b.Return(AppFramework.makeAViewDoc0(function()\r\n         {\r\n          var attrs,x,s;\r\n          function eventAct(act,el,ev)\r\n          {\r\n           return AppFramework.callFunction(el,ev,act.actFunction);\r\n          }\r\n          try\r\n          {\r\n           attrs=a$3(a$5(tmpDef.attrs));\r\n           Templates.LoadLocalTemplates(\"local\");\r\n           x=(Seq.isEmpty(attrs)?Global.id:(s=[{\r\n            $:3,\r\n            $0:\"attrs\",\r\n            $1:AttrProxy.Concat(attrs)\r\n           }],function(s$1)\r\n           {\r\n            return Seq.append(s,s$1);\r\n           }))(Seq.delay(function()\r\n           {\r\n            function m(nm,vr)\r\n            {\r\n             return{\r\n              $:8,\r\n              $0:nm.toLowerCase(),\r\n              $1:a$1(vr)\r\n             };\r\n            }\r\n            return Seq.append(Seq.map(function($1)\r\n            {\r\n             return m($1[0],$1[1]);\r\n            },tmpDef.vars),Seq.delay(function()\r\n            {\r\n             function m$1(nm,wr)\r\n             {\r\n              return{\r\n               $:2,\r\n               $0:nm.toLowerCase(),\r\n               $1:a$2(a$5(wr))\r\n              };\r\n             }\r\n             return Seq.append(Seq.map(function($1)\r\n             {\r\n              return m$1($1[0],$1[1]);\r\n             },tmpDef.views),Seq.delay(function()\r\n             {\r\n              function m$2(nm,nr)\r\n              {\r\n               return{\r\n                $:0,\r\n                $0:nm.toLowerCase(),\r\n                $1:a({\r\n                 $:1,\r\n                 $0:nr\r\n                })\r\n               };\r\n              }\r\n              return Seq.append(Seq.map(function($1)\r\n              {\r\n               return m$2($1[0],$1[1]);\r\n              },tmpDef.docs),Seq.delay(function()\r\n              {\r\n               function m$3(nm,ar)\r\n               {\r\n                var $1;\r\n                return{\r\n                 $:4,\r\n                 $0:nm.toLowerCase(),\r\n                 $1:($1=a$4(ar),(Runtime.Curried3(eventAct))($1))\r\n                };\r\n               }\r\n               return Seq.map(function($1)\r\n               {\r\n                return m$3($1[0],$1[1]);\r\n               },tmpDef.actions);\r\n              }));\r\n             }));\r\n            }));\r\n           }));\r\n           return Templates.NamedTemplate(\"local\",{\r\n            $:1,\r\n            $0:tmpDef.tmpName.toLowerCase()\r\n           },x);\r\n          }\r\n          catch(e)\r\n          {\r\n           return Doc.TextNode(e.message);\r\n          }\r\n         }));\r\n        });\r\n       });\r\n      });\r\n     });\r\n    });\r\n   });\r\n  })));\r\n };\r\n NewLY.defSplitter=function(lytN,n,v,m,a,a$1)\r\n {\r\n  var l,r,b;\r\n  l=a.$0;\r\n  r=a$1.$0;\r\n  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()\r\n  {\r\n   return b.Bind(Extract0.getDocFromTextTypesD(),function(a$2)\r\n   {\r\n    return b.Return(function()\r\n    {\r\n     function getDoc(d)\r\n     {\r\n      return AppFramework.makeAViewDoc(function()\r\n      {\r\n       return a$2(List.ofArray([NewLY.itemRefToTextType(d)]));\r\n      });\r\n     }\r\n     return m.$==1?LayoutEngineModule.variableSplitter(v,m.$0,m.$1,m.$2,getDoc(l),getDoc(r)):LayoutEngineModule.fixedSplitter(v,m.$0,m.$1,getDoc(l),getDoc(r));\r\n    });\r\n   });\r\n  })));\r\n };\r\n NewLY.defButton=function(lytN,n,ac,attrs,tx)\r\n {\r\n  return AppFramework.makeAViewDoc0(function()\r\n  {\r\n   return AppFramework.errDocf(function($1)\r\n   {\r\n    return $1(\"Button deprecated use button \\\"click=@{Action}\\\"\");\r\n   });\r\n  });\r\n };\r\n NewLY.defDocF=function(lytN,n,a,ds)\r\n {\r\n  var dc,b;\r\n  dc=a.$0;\r\n  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()\r\n  {\r\n   return b.Bind(NewLY.currentPlugInNameD(),function(a$1)\r\n   {\r\n    return b.Bind(NewLY.getParam2D(),function(a$2)\r\n    {\r\n     var p,x,lyt,elem;\r\n     function passParm($1,$2)\r\n     {\r\n      var a$3,f1;\r\n      return $1.$==0?$2.$==0?$1:{\r\n       $:0,\r\n       $0:$1.$0\r\n      }:$1.$==2?$2.$==1?(a$3=$2.$0,(f1=$1.$0,{\r\n       $:1,\r\n       $0:function()\r\n       {\r\n        return f1(a$2(a$3));\r\n       }\r\n      })):$1:$1.$==3?$2.$==1?passParm({\r\n       $:2,\r\n       $0:$1.$0(a$2($2.$0)),\r\n       $1:$1.$2\r\n      },$2.$1):$1:$1.$==4?$2.$==1?passParm({\r\n       $:3,\r\n       $0:$1.$0(a$2($2.$0)),\r\n       $1:$1.$2,\r\n       $2:$1.$3\r\n      },$2.$1):$1:$1.$==5?$2.$==1?passParm({\r\n       $:4,\r\n       $0:$1.$0(a$2($2.$0)),\r\n       $1:$1.$2,\r\n       $2:$1.$3,\r\n       $3:$1.$4\r\n      },$2.$1):$1:$1.$==6?$2.$==1?passParm({\r\n       $:5,\r\n       $0:$1.$0(a$2($2.$0)),\r\n       $1:$1.$2,\r\n       $2:$1.$3,\r\n       $3:$1.$4,\r\n       $4:$1.$5\r\n      },$2.$1):$1:{\r\n       $:0,\r\n       $0:$1.$0()\r\n      };\r\n     }\r\n     p=(x=NewLY.itemRefToString(dc),(AppFramework.splitName(a$1))(x));\r\n     lyt=p[0];\r\n     elem=p[1];\r\n     return b.Return(Lazy.Create(function()\r\n     {\r\n      var o,o$1;\r\n      o=(o$1=AppFramework.tryGetDoc(lyt,elem),o$1==null?null:{\r\n       $:1,\r\n       $0:passParm(o$1.$0.docDoc.f(),ds)\r\n      });\r\n      return o==null?{\r\n       $:0,\r\n       $0:AppFramework.errDoc((function($1)\r\n       {\r\n        return function($2)\r\n        {\r\n         return $1(\"Missing doc: \"+LayoutEngine_GeneratedPrintf.p$1($2));\r\n        };\r\n       }(Global.id))(dc))\r\n      }:o.$0;\r\n     }));\r\n    });\r\n   });\r\n  })));\r\n };\r\n NewLY.defConcat=function(lytN,n,docs)\r\n {\r\n  var b;\r\n  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()\r\n  {\r\n   return b.Bind(NewLY.nodeRefToDocD(),function(a)\r\n   {\r\n    return b.Return(AppFramework.makeAViewDoc0(function()\r\n    {\r\n     return Doc.Concat(Seq.map(a,docs));\r\n    }));\r\n   });\r\n  })));\r\n };\r\n NewLY.defElement=function(lytN,n,elem,attrs,docs)\r\n {\r\n  var b;\r\n  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()\r\n  {\r\n   return b.Bind(NewLY.nodeRefToDocD(),function(a)\r\n   {\r\n    return b.Bind(AppFramework.extractAtsD(),function(a$1)\r\n    {\r\n     return b.Bind(NewLY.getParam2D(),function(a$2)\r\n     {\r\n      return b.Return(AppFramework.makeAViewDoc0(function()\r\n      {\r\n       try\r\n       {\r\n        return Doc.Element(elem,a$1(a$2(attrs)),Seq.map(a,docs));\r\n       }\r\n       catch(e)\r\n       {\r\n        return Doc.TextNode(e.message);\r\n       }\r\n      }));\r\n     });\r\n    });\r\n   });\r\n  })));\r\n };\r\n NewLY.defTextArea=function(lytN,n,v,attrs)\r\n {\r\n  return AppFramework.makeAViewDoc0(function()\r\n  {\r\n   return AppFramework.errDocf(function($1)\r\n   {\r\n    return $1(\"TextArea deprecated use AF.TextArea\");\r\n   });\r\n  });\r\n };\r\n NewLY.defInput=function(lytN,n,v,attrs)\r\n {\r\n  return AppFramework.makeAViewDoc0(function()\r\n  {\r\n   return AppFramework.errDocf(function($1)\r\n   {\r\n    return $1(\"input deprecated use AF.Input\");\r\n   });\r\n  });\r\n };\r\n NewLY.defViewJS=function(lytN,n,ps)\r\n {\r\n  var b;\r\n  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()\r\n  {\r\n   return b.Bind(NewLY.currentPlugInNameD(),function()\r\n   {\r\n    return b.Bind(NewLY.getParamD(),function(a)\r\n    {\r\n     return b.Return(View$1.Bind(function()\r\n     {\r\n      try\r\n      {\r\n       return View$1.Map(function(ar)\r\n       {\r\n        try\r\n        {\r\n         return!Unchecked.Equals(ar,null)&&ar.length===0?\"No JS function specified\":!Unchecked.Equals(ar,null)&&ar.length===1?Global.String(Global[\"eval\"](Arrays.get(ar,0))):Global.String(Global[\"eval\"](Arrays.get(ar,0)).apply(null,Slice.array(ar,{\r\n          $:1,\r\n          $0:1\r\n         },null)));\r\n        }\r\n        catch(e)\r\n        {\r\n         return e.message;\r\n        }\r\n       },View$1.Map(Arrays.ofSeq,View.traverseSeq(a,ps)));\r\n      }\r\n      catch(e)\r\n      {\r\n       return View$1.Const(e.message);\r\n      }\r\n     },AppFramework.baseView()));\r\n    });\r\n   });\r\n  })));\r\n };\r\n NewLY.defView=function(lytN,n,ps)\r\n {\r\n  var b;\r\n  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()\r\n  {\r\n   return b.Bind(NewLY.currentPlugInNameD(),function()\r\n   {\r\n    return b.Bind(NewLY.getParam2D(),function(a)\r\n    {\r\n     return b.Bind(AppFramework.extractTextD(),function(a$1)\r\n     {\r\n      return b.Return(View$1.Bind(function()\r\n      {\r\n       function g(s)\r\n       {\r\n        return Strings.concat(\"\",s);\r\n       }\r\n       return View$1.Map(function(x)\r\n       {\r\n        return g(Arrays.ofSeq(x));\r\n       },View.traverseSeq(function(x)\r\n       {\r\n        return a$1(a(x));\r\n       },ps));\r\n      },AppFramework.baseView()));\r\n     });\r\n    });\r\n   });\r\n  })));\r\n };\r\n NewLY.defActions=function(lytN,n,acs)\r\n {\r\n  var b;\r\n  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()\r\n  {\r\n   return b.Bind(NewLY.currentPlugInNameD(),function(a)\r\n   {\r\n    return b.Bind(NewLY.getParamTextD(),function()\r\n    {\r\n     return b.Return({\r\n      $:0,\r\n      $0:function()\r\n      {\r\n       Seq.iter(function(a$1)\r\n       {\r\n        var r,o,o$1,t;\r\n        r=NewLY.itemRefToString(a$1.$0);\r\n        AppFramework.callFunction(null,null,(o=(o$1=(t=(AppFramework.splitName(a))(r),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{\r\n         $:1,\r\n         $0:o$1.$0.actFunction\r\n        }),o==null?{\r\n         $:0,\r\n         $0:function()\r\n         {\r\n          ((function($1)\r\n          {\r\n           return function($2)\r\n           {\r\n            return $1(\"Action Not Found \"+Utils.toSafe($2));\r\n           };\r\n          }(function(s)\r\n          {\r\n           console.log(s);\r\n          }))(r));\r\n         }\r\n        }:o.$0));\r\n       },acs);\r\n      }\r\n     });\r\n    });\r\n   });\r\n  })));\r\n };\r\n NewLY.defAction=function(lytN,n,a,ps)\r\n {\r\n  var ac,b;\r\n  ac=a.$0;\r\n  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()\r\n  {\r\n   return b.Bind(NewLY.currentPlugInNameD(),function(a$1)\r\n   {\r\n    return b.Bind(NewLY.getParamTextD(),function(a$2)\r\n    {\r\n     var o,t,$1,$2,r,o$1,act,$3,f,t1,f$1,t1$1,t2,f$2,t1$2;\r\n     r=NewLY.itemRefToString(ac);\r\n     o$1=(t=(AppFramework.splitName(a$1))(r),AppFramework.tryGetAct(t[0],t[1]));\r\n     if(o$1==null)\r\n      o=null;\r\n     else\r\n      {\r\n       act=o$1.$0;\r\n       if(ps.$===0)\r\n        $1=act.actFunction;\r\n       else\r\n        {\r\n         $3=act.actFunction;\r\n         switch($3.$==1?ps.$==1?ps.$1.$==0?($2=[$3.$0,ps.$0],0):3:3:$3.$==2?ps.$==1?ps.$1.$==0?($2=[$3.$0,$3.$2,ps.$0],2):ps.$1.$1.$==0?($2=[$3.$0,ps.$0,ps.$1.$0],1):3:3:3)\r\n         {\r\n          case 0:\r\n           $1=(f=$2[0],(t1=$2[1],{\r\n            $:0,\r\n            $0:function()\r\n            {\r\n             (a$2(t1))(f);\r\n            }\r\n           }));\r\n           break;\r\n          case 1:\r\n           $1=(f$1=$2[0],(t1$1=$2[1],(t2=$2[2],{\r\n            $:0,\r\n            $0:function()\r\n            {\r\n             (a$2(t1$1))(function(p1)\r\n             {\r\n              (a$2(t2))(f$1(p1));\r\n             });\r\n            }\r\n           })));\r\n           break;\r\n          case 2:\r\n           $1=(f$2=$2[0],(t1$2=$2[2],{\r\n            $:1,\r\n            $0:function(p2)\r\n            {\r\n             (a$2(t1$2))(function(p1)\r\n             {\r\n              (f$2(p1))(p2);\r\n             });\r\n            },\r\n            $1:$2[1]\r\n           }));\r\n           break;\r\n          case 3:\r\n           $1={\r\n            $:0,\r\n            $0:function()\r\n            {\r\n             ((((Runtime.Curried(function($4,$5,$6,$7)\r\n             {\r\n              return $4(\"Parameters do not coincide for Action \"+Utils.toSafe($5)+\" \"+Utils.printList(function($8)\r\n              {\r\n               return LayoutEngine_GeneratedPrintf.p$16($8);\r\n              },$6)+\" \"+GeneratedPrintf.p$2($7));\r\n             },4))(function(s)\r\n             {\r\n              console.log(s);\r\n             }))(r))(ps))(act);\r\n            }\r\n           };\r\n           break;\r\n         }\r\n        }\r\n       o={\r\n        $:1,\r\n        $0:$1\r\n       };\r\n      }\r\n     return b.Return(o==null?{\r\n      $:0,\r\n      $0:function()\r\n      {\r\n       ((function($4)\r\n       {\r\n        return function($5)\r\n        {\r\n         return $4(\"Action Not Found \"+Utils.toSafe($5));\r\n        };\r\n       }(function(s)\r\n       {\r\n        console.log(s);\r\n       }))(r));\r\n      }\r\n     }:o.$0);\r\n    });\r\n   });\r\n  })));\r\n };\r\n NewLY.defVar=function(lytN,n,v)\r\n {\r\n  return Var$2.Create$1(v);\r\n };\r\n NewLY.getParamTextD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.getParamTextD;\r\n };\r\n NewLY.getParam2D=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.getParam2D;\r\n };\r\n NewLY.itemRefToAbsolute=function(lyt)\r\n {\r\n  function f(a)\r\n  {\r\n   return a.$==1?[a.$0,a.$1]:[lyt,a.$0];\r\n  }\r\n  function g(a,b)\r\n  {\r\n   return(((Runtime.Curried3(function($1,$2,$3)\r\n   {\r\n    return $1(Utils.toSafe($2)+\".\"+Utils.toSafe($3));\r\n   }))(Global.id))(a))(b);\r\n  }\r\n  return function(x)\r\n  {\r\n   return g.apply(null,f(x));\r\n  };\r\n };\r\n NewLY.getParamD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.getParamD;\r\n };\r\n NewLY.actRefToActD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.actRefToActD;\r\n };\r\n NewLY.varRefToVarD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.varRefToVarD;\r\n };\r\n NewLY.nodeRefToDocD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.nodeRefToDocD;\r\n };\r\n NewLY.ActRVs=function(a)\r\n {\r\n  return List.ofArray([{\r\n   $:1,\r\n   $0:{\r\n    $:0,\r\n    $0:a.$0\r\n   }\r\n  }]);\r\n };\r\n NewLY.textValToTextType=function(a)\r\n {\r\n  var $1;\r\n  return(a.$==3?($1=a.$0.$0,false):a.$==4?($1=a.$0.$0,false):a.$==1?($1=a.$0.$0,false):a.$==2?($1=a.$0.$0,false):true)?{\r\n   $:0,\r\n   $0:a.$0\r\n  }:NewLY.itemRefToTextType($1);\r\n };\r\n NewLY.itemRefToString=function(a)\r\n {\r\n  return a.$==1?(((Runtime.Curried3(function($1,$2,$3)\r\n  {\r\n   return $1(Utils.toSafe($2)+\".\"+Utils.toSafe($3));\r\n  }))(Global.id))(a.$0))(a.$1):a.$0;\r\n };\r\n NewLY.itemRefToTextType=function(a)\r\n {\r\n  return a.$==1?{\r\n   $:1,\r\n   $0:(((Runtime.Curried3(function($1,$2,$3)\r\n   {\r\n    return $1(Utils.toSafe($2)+\".\"+Utils.toSafe($3));\r\n   }))(Global.id))(a.$0))(a.$1)\r\n  }:{\r\n   $:1,\r\n   $0:a.$0\r\n  };\r\n };\r\n NewLY.callDocPFn=function(pin,pf)\r\n {\r\n  var f;\r\n  f=P$1.run(pin,pf);\r\n  return AppFramework.makeAViewDoc(function()\r\n  {\r\n   var m;\r\n   m=f.f.$==0?f.p.$==1?{\r\n    $:0,\r\n    $0:View$1.Apply(f.f.$0,View$1.Const(f.p.$0))\r\n   }:{\r\n    $:0,\r\n    $0:View$1.Apply(f.f.$0,f.p.$0)\r\n   }:f.p.$==0?{\r\n    $:0,\r\n    $0:View$1.Apply(View$1.Const(f.f.$0),f.p.$0)\r\n   }:{\r\n    $:1,\r\n    $0:f.f.$0(f.p.$0)\r\n   };\r\n   return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;\r\n  });\r\n };\r\n NewLY.split2=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.split2;\r\n };\r\n NewLY.split=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.split;\r\n };\r\n NewLY.appFwk=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.appFwk;\r\n };\r\n NewLY.main2=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.main2;\r\n };\r\n NewLY.main=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.main;\r\n };\r\n NewLY.main1=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.main1;\r\n };\r\n NewLY.main0=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.main0;\r\n };\r\n NewLY.aString=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.aString;\r\n };\r\n NewLY.sayHello=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.sayHello;\r\n };\r\n NewLY.now=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.now;\r\n };\r\n NewLY.enterName=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.enterName;\r\n };\r\n NewLY.checkName=function(n)\r\n {\r\n  return n===Slice.string(\"World\",{\r\n   $:1,\r\n   $0:0\r\n  },{\r\n   $:1,\r\n   $0:n.length-1\r\n  })||n.length<=1?\"<---- Please enter your name\":\"\";\r\n };\r\n NewLY.name=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.name;\r\n };\r\n NewLY.currentPlugInNameD=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.currentPlugInNameD$1;\r\n };\r\n NewLY.currentPlugInNameDef=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.currentPlugInNameDef$1;\r\n };\r\n NewLY.pb=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.pb;\r\n };\r\n NewLY.pa=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.pa;\r\n };\r\n NewLY.aV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.aV;\r\n };\r\n NewLY.concat=function(a,b)\r\n {\r\n  return(((Runtime.Curried3(function($1,$2,$3)\r\n  {\r\n   return $1(\"Concat(\"+Global.String($2)+\", \"+$3.toFixed(6)+\")\");\r\n  }))(Global.id))(a))(b);\r\n };\r\n LibraryJS.rexEmail=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rexEmail;\r\n };\r\n LibraryJS.rexGuid=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rexGuid;\r\n };\r\n LibraryJS.REGEX$1=function(expr,opt,value)\r\n {\r\n  var m;\r\n  return value===null?null:(m=(new Global.String(value)).match(new Global.RegExp(expr,opt)),Unchecked.Equals(m,null)?null:!Unchecked.Equals(m,null)&&m.length===0?null:{\r\n   $:1,\r\n   $0:m\r\n  });\r\n };\r\n SC$1.$cctor=function()\r\n {\r\n  var f,g,b,b$1,b$2,b$3,b$4,b$5,b$6,b$7,b$8,b$9,b$10,b$11,b$12,f$1,g$1,pf,p,pf$1,p$1,sayHello_0,c,vf,a,vf$1,c$1,vf$2,pc,pf$2,p$2,p$3,pc$1,vf$3,p$4,c$2,c$3,c$4,c$5,c$6,c$7,c$8,c$9,c$10,vf$4,c$11,vf$5,c$12,vf$6,pc$2,vf$7,p$5,b$13,b$14,b$15,b$16,b$17,b$18,p$6,cache,getOrAdd,p$7,cache$1,getOrAdd$1,p$8,cache$2,getOrAdd$2,p$9,cache$3,getOrAdd$3,p$10,cache$4,getOrAdd$4,p$11,cache$5,getOrAdd$5,p$12,cache$6,getOrAdd$6,p$13,cache$7,getOrAdd$7,p$14,cache$8,getOrAdd$8,p$15,cache$9,getOrAdd$9,p$16,cache$10,getOrAdd$10,p$17,cache$11,getOrAdd$11,p$18,cache$12,getOrAdd$12,o;\r\n  SC$1.$cctor=Global.ignore;\r\n  function g$2(s)\r\n  {\r\n   return Strings.concat(\"\\n\",s);\r\n  }\r\n  function f$2(s)\r\n  {\r\n   return String.splitByChar(\"\\n\",s);\r\n  }\r\n  function g$3(s)\r\n  {\r\n   var a$1,b$19;\r\n   return Slice.array(s,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:(a$1=0,(b$19=Arrays.length(s)-2,Unchecked.Compare(a$1,b$19)===1?a$1:b$19))\r\n   });\r\n  }\r\n  function g$4(s)\r\n  {\r\n   return Strings.concat(\"\\n\",s);\r\n  }\r\n  function f$3(s)\r\n  {\r\n   return s+\"T00:00:00\";\r\n  }\r\n  function f$4(extractAts,extractDoc)\r\n  {\r\n   return function(attrs)\r\n   {\r\n    return function(labelName)\r\n    {\r\n     function f$19(_var)\r\n     {\r\n      return Doc.Element(\"div\",extractAts(attrs),[Doc.Element(\"div\",[AttrProxy.Create(\"class\",\"input-group\")],[Doc.Element(\"span\",[AttrProxy.Create(\"class\",\"input-group-addon\")],[extractDoc(labelName)]),Doc.Input([AttrProxy.Create(\"class\",\"form-control\")],_var)])]);\r\n     }\r\n     return function(v)\r\n     {\r\n      return AppFramework.docWithVar(f$19,v);\r\n     };\r\n    };\r\n   };\r\n  }\r\n  function f$5(extractAts,attrs)\r\n  {\r\n   var f$19,a$1;\r\n   f$19=(a$1=extractAts(attrs),function(a$2)\r\n   {\r\n    return Doc.Input(a$1,a$2);\r\n   });\r\n   return function(v)\r\n   {\r\n    return AppFramework.docWithVar(f$19,v);\r\n   };\r\n  }\r\n  function f$6(extractAts,attrs)\r\n  {\r\n   var f$19,a$1;\r\n   f$19=(a$1=extractAts(attrs),function(a$2)\r\n   {\r\n    return Doc.InputArea(a$1,a$2);\r\n   });\r\n   return function(v)\r\n   {\r\n    return AppFramework.docWithVar(f$19,v);\r\n   };\r\n  }\r\n  function f$7(t,t$1)\r\n  {\r\n   var o$1,t$2;\r\n   o$1=(t$2=AppFramework.getParmRef(t$1[0]),AppFramework.tryGetVoV(t$2[0],t$2[1]));\r\n   o$1==null?void 0:o$1.$0.Set(t$1[1]);\r\n  }\r\n  function f$8(t,varN)\r\n  {\r\n   var o$1,o$2,t$1;\r\n   o$1=(o$2=(t$1=AppFramework.getParmRef(varN),AppFramework.tryGetWoW(t$1[0],t$1[1])),o$2==null?null:View$1.TryGet(o$2.$0));\r\n   return o$1==null?null:o$1.$0;\r\n  }\r\n  function f$9(t,t$1)\r\n  {\r\n   var o$1,t$2;\r\n   o$1=(t$2=AppFramework.getParmRef(t$1[0]),AppFramework.tryGetVoV(t$2[0],t$2[1]));\r\n   o$1==null?void 0:AppFramework.draggingEvent(true,o$1.$0,t$1[1]);\r\n  }\r\n  function f$10(t,actN,p1,p2)\r\n  {\r\n   var o$1,t$1;\r\n   o$1=(t$1=AppFramework.getParmRef(actN),AppFramework.tryGetAct(t$1[0],t$1[1]));\r\n   return o$1==null?null:AppFramework.callFunction(p1,p2,o$1.$0.actFunction);\r\n  }\r\n  function f$11(extractAts,template,attrs,doc1,doc2)\r\n  {\r\n   function f$19(_var)\r\n   {\r\n    return Doc.Element(\"div\",extractAts(attrs),[(AppFramework.docReference())(doc1),(AppFramework.docReference())(doc2)]);\r\n   }\r\n   return function(v)\r\n   {\r\n    return AppFramework.docWithVar(f$19,v);\r\n   };\r\n  }\r\n  function f$12(t)\r\n  {\r\n   return t[0];\r\n  }\r\n  function f$13(t)\r\n  {\r\n   return t[1];\r\n  }\r\n  function f$14(a$1)\r\n  {\r\n   return new PlugInName({\r\n    $:0,\r\n    $0:a$1\r\n   });\r\n  }\r\n  function g$5(a$1)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:a$1\r\n   };\r\n  }\r\n  function f$15(a$1)\r\n  {\r\n   return new PlgElemName({\r\n    $:0,\r\n    $0:a$1\r\n   });\r\n  }\r\n  function g$6(a$1)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:a$1\r\n   };\r\n  }\r\n  function f$16(a$1)\r\n  {\r\n   return new PlgElemName({\r\n    $:0,\r\n    $0:a$1\r\n   });\r\n  }\r\n  function g$7(a$1)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:a$1\r\n   };\r\n  }\r\n  function f$17(a$1)\r\n  {\r\n   return new PlgElemName({\r\n    $:0,\r\n    $0:a$1\r\n   });\r\n  }\r\n  function g$8(a$1)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:a$1\r\n   };\r\n  }\r\n  function f$18(a$1)\r\n  {\r\n   return new PlgElemName({\r\n    $:0,\r\n    $0:a$1\r\n   });\r\n  }\r\n  function g$9(a$1)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:a$1\r\n   };\r\n  }\r\n  function p$19(y)\r\n  {\r\n   return\"\"!==y;\r\n  }\r\n  function g$10(v)\r\n  {\r\n   return!v;\r\n  }\r\n  function checkO(v)\r\n  {\r\n   var res;\r\n   res=null;\r\n   return cache.TryGetValue(v,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v$1)\r\n    {\r\n     res=v$1;\r\n    }\r\n   })?{\r\n    $:1,\r\n    $0:res\r\n   }:null;\r\n  }\r\n  function store(v,res)\r\n  {\r\n   cache.set_Item(v,res);\r\n   return res;\r\n  }\r\n  function getOrAdd$13(p$20,f$19)\r\n  {\r\n   var o$1;\r\n   o$1=checkO(p$20);\r\n   return o$1==null?store(p$20,f$19(p$20)):o$1.$0;\r\n  }\r\n  function checkO$1(v)\r\n  {\r\n   var res;\r\n   res=null;\r\n   return cache$1.TryGetValue(v,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v$1)\r\n    {\r\n     res=v$1;\r\n    }\r\n   })?{\r\n    $:1,\r\n    $0:res\r\n   }:null;\r\n  }\r\n  function store$1(v,res)\r\n  {\r\n   cache$1.set_Item(v,res);\r\n   return res;\r\n  }\r\n  function getOrAdd$14(p$20,f$19)\r\n  {\r\n   var o$1;\r\n   o$1=checkO$1(p$20);\r\n   return o$1==null?store$1(p$20,f$19(p$20)):o$1.$0;\r\n  }\r\n  function checkO$2(v)\r\n  {\r\n   var res;\r\n   res=null;\r\n   return cache$2.TryGetValue(v,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v$1)\r\n    {\r\n     res=v$1;\r\n    }\r\n   })?{\r\n    $:1,\r\n    $0:res\r\n   }:null;\r\n  }\r\n  function store$2(v,res)\r\n  {\r\n   cache$2.set_Item(v,res);\r\n   return res;\r\n  }\r\n  function getOrAdd$15(p$20,f$19)\r\n  {\r\n   var o$1;\r\n   o$1=checkO$2(p$20);\r\n   return o$1==null?store$2(p$20,f$19(p$20)):o$1.$0;\r\n  }\r\n  function checkO$3(v)\r\n  {\r\n   var res;\r\n   res=null;\r\n   return cache$3.TryGetValue(v,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v$1)\r\n    {\r\n     res=v$1;\r\n    }\r\n   })?{\r\n    $:1,\r\n    $0:res\r\n   }:null;\r\n  }\r\n  function store$3(v,res)\r\n  {\r\n   cache$3.set_Item(v,res);\r\n   return res;\r\n  }\r\n  function getOrAdd$16(p$20,f$19)\r\n  {\r\n   var o$1;\r\n   o$1=checkO$3(p$20);\r\n   return o$1==null?store$3(p$20,f$19(p$20)):o$1.$0;\r\n  }\r\n  function checkO$4(v)\r\n  {\r\n   var res;\r\n   res=null;\r\n   return cache$4.TryGetValue(v,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v$1)\r\n    {\r\n     res=v$1;\r\n    }\r\n   })?{\r\n    $:1,\r\n    $0:res\r\n   }:null;\r\n  }\r\n  function store$4(v,res)\r\n  {\r\n   cache$4.set_Item(v,res);\r\n   return res;\r\n  }\r\n  function getOrAdd$17(p$20,f$19)\r\n  {\r\n   var o$1;\r\n   o$1=checkO$4(p$20);\r\n   return o$1==null?store$4(p$20,f$19(p$20)):o$1.$0;\r\n  }\r\n  function checkO$5(v)\r\n  {\r\n   var res;\r\n   res=null;\r\n   return cache$5.TryGetValue(v,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v$1)\r\n    {\r\n     res=v$1;\r\n    }\r\n   })?{\r\n    $:1,\r\n    $0:res\r\n   }:null;\r\n  }\r\n  function store$5(v,res)\r\n  {\r\n   cache$5.set_Item(v,res);\r\n   return res;\r\n  }\r\n  function getOrAdd$18(p$20,f$19)\r\n  {\r\n   var o$1;\r\n   o$1=checkO$5(p$20);\r\n   return o$1==null?store$5(p$20,f$19(p$20)):o$1.$0;\r\n  }\r\n  function checkO$6(v)\r\n  {\r\n   var res;\r\n   res=null;\r\n   return cache$6.TryGetValue(v,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v$1)\r\n    {\r\n     res=v$1;\r\n    }\r\n   })?{\r\n    $:1,\r\n    $0:res\r\n   }:null;\r\n  }\r\n  function store$6(v,res)\r\n  {\r\n   cache$6.set_Item(v,res);\r\n   return res;\r\n  }\r\n  function getOrAdd$19(p$20,f$19)\r\n  {\r\n   var o$1;\r\n   o$1=checkO$6(p$20);\r\n   return o$1==null?store$6(p$20,f$19(p$20)):o$1.$0;\r\n  }\r\n  function checkO$7(v)\r\n  {\r\n   var res;\r\n   res=null;\r\n   return cache$7.TryGetValue(v,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v$1)\r\n    {\r\n     res=v$1;\r\n    }\r\n   })?{\r\n    $:1,\r\n    $0:res\r\n   }:null;\r\n  }\r\n  function store$7(v,res)\r\n  {\r\n   cache$7.set_Item(v,res);\r\n   return res;\r\n  }\r\n  function getOrAdd$20(p$20,f$19)\r\n  {\r\n   var o$1;\r\n   o$1=checkO$7(p$20);\r\n   return o$1==null?store$7(p$20,f$19(p$20)):o$1.$0;\r\n  }\r\n  function checkO$8(v)\r\n  {\r\n   var res;\r\n   res=null;\r\n   return cache$8.TryGetValue(v,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v$1)\r\n    {\r\n     res=v$1;\r\n    }\r\n   })?{\r\n    $:1,\r\n    $0:res\r\n   }:null;\r\n  }\r\n  function store$8(v,res)\r\n  {\r\n   cache$8.set_Item(v,res);\r\n   return res;\r\n  }\r\n  function getOrAdd$21(p$20,f$19)\r\n  {\r\n   var o$1;\r\n   o$1=checkO$8(p$20);\r\n   return o$1==null?store$8(p$20,f$19(p$20)):o$1.$0;\r\n  }\r\n  function checkO$9(v)\r\n  {\r\n   var res;\r\n   res=null;\r\n   return cache$9.TryGetValue(v,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v$1)\r\n    {\r\n     res=v$1;\r\n    }\r\n   })?{\r\n    $:1,\r\n    $0:res\r\n   }:null;\r\n  }\r\n  function store$9(v,res)\r\n  {\r\n   cache$9.set_Item(v,res);\r\n   return res;\r\n  }\r\n  function getOrAdd$22(p$20,f$19)\r\n  {\r\n   var o$1;\r\n   o$1=checkO$9(p$20);\r\n   return o$1==null?store$9(p$20,f$19(p$20)):o$1.$0;\r\n  }\r\n  function checkO$10(v)\r\n  {\r\n   var res;\r\n   res=null;\r\n   return cache$10.TryGetValue(v,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v$1)\r\n    {\r\n     res=v$1;\r\n    }\r\n   })?{\r\n    $:1,\r\n    $0:res\r\n   }:null;\r\n  }\r\n  function store$10(v,res)\r\n  {\r\n   cache$10.set_Item(v,res);\r\n   return res;\r\n  }\r\n  function getOrAdd$23(p$20,f$19)\r\n  {\r\n   var o$1;\r\n   o$1=checkO$10(p$20);\r\n   return o$1==null?store$10(p$20,f$19(p$20)):o$1.$0;\r\n  }\r\n  function checkO$11(v)\r\n  {\r\n   var res;\r\n   res=null;\r\n   return cache$11.TryGetValue(v,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v$1)\r\n    {\r\n     res=v$1;\r\n    }\r\n   })?{\r\n    $:1,\r\n    $0:res\r\n   }:null;\r\n  }\r\n  function store$11(v,res)\r\n  {\r\n   cache$11.set_Item(v,res);\r\n   return res;\r\n  }\r\n  function getOrAdd$24(p$20,f$19)\r\n  {\r\n   var o$1;\r\n   o$1=checkO$11(p$20);\r\n   return o$1==null?store$11(p$20,f$19(p$20)):o$1.$0;\r\n  }\r\n  function checkO$12(v)\r\n  {\r\n   var res;\r\n   res=null;\r\n   return cache$12.TryGetValue(v,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v$1)\r\n    {\r\n     res=v$1;\r\n    }\r\n   })?{\r\n    $:1,\r\n    $0:res\r\n   }:null;\r\n  }\r\n  function store$12(v,res)\r\n  {\r\n   cache$12.set_Item(v,res);\r\n   return res;\r\n  }\r\n  function getOrAdd$25(p$20,f$19)\r\n  {\r\n   var o$1;\r\n   o$1=checkO$12(p$20);\r\n   return o$1==null?store$12(p$20,f$19(p$20)):o$1.$0;\r\n  }\r\n  SC$1.state=new CEBuilder.New();\r\n  SC$1.result=new Builder.New();\r\n  SC$1.result$1=Result.result();\r\n  SC$1.depend=new DependBuilder.New();\r\n  SC$1.rtn=Depend.rtn;\r\n  SC$1.depend$1=Depend.depend();\r\n  SC$1.unindentStr=function(x)\r\n  {\r\n   return g$2(String.unindent(x));\r\n  };\r\n  SC$1.skipLastLine=(f=function(x)\r\n  {\r\n   return g$3(f$2(x));\r\n  },function(x)\r\n  {\r\n   return g$4(f(x));\r\n  });\r\n  SC$1.parseDateO2=(g=ParseO.tryParseWith(function(a$1)\r\n  {\r\n   var o$1,m;\r\n   o$1=0;\r\n   return[(m=DateUtil.TryParse(a$1),m!=null&&m.$==1&&(o$1=m.$0,true)),o$1];\r\n  }),function(x)\r\n  {\r\n   return g(f$3(x));\r\n  });\r\n  SC$1.parseDateO=ParseO.tryParseWith(function(a$1)\r\n  {\r\n   var o$1,m;\r\n   o$1=0;\r\n   return[(m=DateUtil.TryParse(a$1),m!=null&&m.$==1&&(o$1=m.$0,true)),o$1];\r\n  });\r\n  SC$1.parseIntO=ParseO.tryParseWith(function(a$1)\r\n  {\r\n   var o$1;\r\n   o$1=0;\r\n   return[Numeric.TryParseInt32(a$1,{\r\n    get:function()\r\n    {\r\n     return o$1;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o$1=v;\r\n    }\r\n   }),o$1];\r\n  });\r\n  SC$1.parseInt64O=ParseO.tryParseWith(function(a$1)\r\n  {\r\n   var o$1;\r\n   o$1=0;\r\n   return[Numeric.TryParseInt64(a$1,{\r\n    get:function()\r\n    {\r\n     return o$1;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o$1=v;\r\n    }\r\n   }),o$1];\r\n  });\r\n  SC$1.parseSingleO=ParseO.tryParseWith(function(a$1)\r\n  {\r\n   var o$1,$1;\r\n   o$1=0;\r\n   return[($1=Global.Number(a$1),Global.isNaN($1)?false:(o$1=$1,true)),o$1];\r\n  });\r\n  SC$1.parseDoubleO=ParseO.tryParseWith(function(a$1)\r\n  {\r\n   var o$1,$1;\r\n   o$1=0;\r\n   return[($1=Global.Number(a$1),Global.isNaN($1)?false:(o$1=$1,true)),o$1];\r\n  });\r\n  SC$1.parseGuidO=ParseO.tryParseWith(function(a$1)\r\n  {\r\n   var o$1;\r\n   o$1=null;\r\n   return[Guid.TryParse(a$1,{\r\n    get:function()\r\n    {\r\n     return o$1;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o$1=v;\r\n    }\r\n   }),o$1];\r\n  });\r\n  SC$1[\"|Date|_|\"]=ParseO.parseDateO();\r\n  SC$1[\"|Int|_|\"]=ParseO.parseIntO();\r\n  SC$1[\"|Int64|_|\"]=ParseO.parseInt64O();\r\n  SC$1[\"|Single|_|\"]=ParseO.parseSingleO();\r\n  SC$1[\"|Double|_|\"]=ParseO.parseDoubleO();\r\n  SC$1[\"|Guid|_|\"]=ParseO.parseGuidO();\r\n  SC$1.counter=1;\r\n  SC$1.rexGuid=\"([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})\";\r\n  SC$1.rexEmail=\"(([^<>()\\\\[\\\\]\\\\\\\\.,;:\\\\s@\\\"]+(\\\\.[^<>()\\\\[\\\\]\\\\\\\\.,;:\\\\s@\\\"]+)*)|(\\\".+\\\"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*\";\r\n  SC$1.observers=List.T.Empty;\r\n  SC$1.css=\"\\r\\n                .tab-panel {\\r\\n                 overflow  : hidden   ;\\r\\n                 display   : flex     ;\\r\\n                 flex-flow : column   ;\\r\\n                 background: lightgray;\\r\\n                 height    : 100%    ;\\r\\n                 width     : 100%    ;\\r\\n                }\\r\\n                .tab-content {\\r\\n                 flex      : 1 1     ;\\r\\n                 overflow  : auto    ;\\r\\n                 position  : relative;\\r\\n                }\\r\\n                .tab-children {\\r\\n                 height    : 100%    ;\\r\\n                 width     : 100%    ;\\r\\n                 position  : absolute;\\r\\n                 display   : grid    ;\\r\\n                }\\r\\n                .tab-strip {\\r\\n                 padding   : 0pt     ;\\r\\n                 flex      : 0 0     ;\\r\\n                }\\r\\n                .tab {\\r\\n                 border     : 0.2pt solid transparent;\\r\\n                 padding    : 0pt 4pt;\\r\\n                 display    : inline-block;\\r\\n                 font-family: sans-serif;\\r\\n                 font-weight: 200;\\r\\n                 font-size  : small;\\r\\n                 color      : #666;\\r\\n                 cursor     : pointer;\\r\\n                }\\r\\n                .top>.tab {\\r\\n                 border-radius: 2pt 2pt 0pt 0pt;\\r\\n                 border-bottom-width: 0pt;\\r\\n                 vertical-align: bottom;\\r\\n                }\\r\\n                .bottom>.tab {\\r\\n                 border-top-width: 0pt;\\r\\n                 border-radius: 0pt 0pt 2pt 2pt;\\r\\n                 vertical-align: top;\\r\\n                }\\r\\n                .horizontal>.tab:not(:first-child) {\\r\\n                 border-left-width: 0pt;\\r\\n                }\\r\\n                .tab.hovering {\\r\\n                 background: red;\\r\\n                }\\r\\n                .tab.selected {\\r\\n                 background: white;\\r\\n                 border-left-width: 0.2pt;\\r\\n                 color: black;\\r\\n                 font-weight: 500;\\r\\n                 border-color: black;\\r\\n                }\\r\\n                .horizontal>.tab.selected {\\r\\n                 border-left-width: 0.2pt;\\r\\n                }\\r\\n                ::slotted(*              ) { \\r\\n                 width : 100%;\\r\\n                 height: 100%;\\r\\n                }\\r\\n                        \";\r\n  SC$1.init=Lazy.Create(function()\r\n  {\r\n   var o$1;\r\n   o$1=new WcTabStripT.New();\r\n   WebComponent.defineWebComponent(\"wcomp-tabstrip\",WcTabStripT.Constructor,self.FsRootDll.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New);\r\n  });\r\n  SC$1.layoutHorizontal=Runtime.Curried(function($1,$2,$3,$4,$5)\r\n  {\r\n   return Doc.get_Empty();\r\n  },5);\r\n  SC$1.layoutVertical=Runtime.Curried(function($1,$2,$3,$4,$5)\r\n  {\r\n   return Doc.get_Empty();\r\n  },5);\r\n  SC$1.html=\"\\r\\n            <div style=\\\"display:none\\\" >\\r\\n                <div links>\\r\\n                    <link  href=\\\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\\\" type=\\\"text/css\\\" rel=\\\"stylesheet\\\">\\r\\n                    <script src=\\\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\\\"   type=\\\"text/javascript\\\"></script>\\r\\n                </div>\\r\\n                <div ws-template=\\\"AppFramework\\\" style=\\\"height: calc(100vh - 4px); width: calc(100vw - 4px) \\\" class=\\\"relative\\\" >\\r\\n                    <div ws-hole=\\\"MainClient\\\"></div>\\r\\n                    <div class=\\\"AppFrameworkGo\\\"><button ws-onclick=\\\"GoClient\\\">${MainDoc}</button></div>\\r\\n                </div>\\r\\n                <div ws-template=\\\"VSplitter1\\\" class=\\\"versplitter\\\" ws-attr=\\\"Attrs\\\" vertical>\\r\\n                    <div style=\\\"min-width :Calc((100% - ${gap}) *        ${perc}  / 100);max-width :Calc((100% - ${gap}) *        ${perc}  / 100)\\\">${doc1}</div>\\r\\n                    <div style=\\\"min-width :             ${gap}\\\" ws-onmousedown=\\\"MouseDown\\\" ></div>\\r\\n                    <div style=\\\"min-width :Calc((100% - ${gap}) * (100 - ${perc}) / 100);max-width :Calc((100% - ${gap}) * (100 - ${perc}) / 100)\\\">${doc2}</div>\\r\\n                </div>\\r\\n                <div ws-template=\\\"HSplitter1\\\" class=\\\"horsplitter\\\" ws-attr=\\\"Attrs\\\">\\r\\n                    <div style=\\\"min-height:Calc((100% - ${gap}) *        ${perc}  / 100);max-height:Calc((100% - ${gap}) *        ${perc}  / 100)\\\">${doc1}</div>\\r\\n                    <div style=\\\"min-height:             ${gap}\\\" ws-onmousedown=\\\"MouseDown\\\" ></div>\\r\\n                    <div style=\\\"min-height:Calc((100% - ${gap}) * (100 - ${perc}) / 100);max-height:Calc((100% - ${gap}) * (100 - ${perc}) / 100)\\\">${doc2}</div>\\r\\n                </div>\\r\\n                <style>\\r\\n                    .horsplitter                    { display: flex; flex-direction:column              } \\r\\n                    .horsplitter > div:nth-child(2) { background: #eef; cursor: row-resize; z-index:400 }\\r\\n                    .horsplitter > div              { overflow: hidden                                  }\\r\\n                    .versplitter                    { display: flex; flex-direction:row                 } \\r\\n                    .versplitter > div:nth-child(2) { background: #eef; cursor: col-resize; z-index:400 }\\r\\n                    .versplitter > div              { overflow: hidden                                  }\\r\\n                </style>\\r\\n                <style>\\r\\n                    .AppFrameworkGo {\\r\\n                        max-width: 2px;\\r\\n                        max-height: 2px;\\r\\n                        z-index: 4000;\\r\\n                        overflow: hidden;\\r\\n                        position: fixed;\\r\\n                        top: 0px;\\r\\n                        left: 0px;\\r\\n                    }\\r\\n                </style>\\r\\n                <div ws-template=\\\"FixedSplitterVer\\\" \\r\\n                    style=\\\"display: grid; \\r\\n                           grid-gap: 0px; \\r\\n                           box-sizing: border-box; \\r\\n                           height: 100%;\\r\\n                           width : 100%;\\r\\n                           grid-template-areas: 'one two'; \\r\\n                           grid-template-rows   :100%; \\r\\n                           overflow: hidden; \\r\\n                           grid-template-columns: ${PartSizes}\\\"  >\\r\\n                   <div ws-hole=\\\"First\\\"  style=\\\"grid-area: one; \\\" class=\\\"relative\\\" ></div>\\r\\n                   <div ws-hole=\\\"Second\\\" style=\\\"grid-area: two; \\\" class=\\\"relative\\\" ></div>\\r\\n                </div>               \\r\\n                <div ws-template=\\\"FixedSplitterHor\\\" \\r\\n               style=\\\"display: grid; \\r\\n                      grid-gap: 0px; \\r\\n                      box-sizing: border-box; \\r\\n                      height: 100%;\\r\\n                      width : 100%;\\r\\n                      grid-template-areas: 'one' 'two'; \\r\\n                      grid-template-columns:100%; \\r\\n                      overflow: hidden; \\r\\n                      grid-template-rows   : ${PartSizes}\\\"  >\\r\\n              <div ws-hole=\\\"First\\\"  style=\\\"grid-area: one; \\\" class=\\\"relative\\\" ></div>\\r\\n              <div ws-hole=\\\"Second\\\" style=\\\"grid-area: two; \\\" class=\\\"relative\\\" ></div>\\r\\n                </div>               \\r\\n                <div ws-template=\\\"WCompSplitterHor\\\" \\r\\n                     ws-onafterrender=\\\"AfterRender\\\"\\r\\n                     style=\\\"display: grid;\\r\\n                            grid-gap: 5px; \\r\\n                            box-sizing: border-box; \\r\\n                            grid-template-areas: 'one' 'two'; \\r\\n                            grid-template-columns:100%; \\r\\n                            overflow: hidden; \\r\\n                            grid-template-rows   : ${PartSizes}\\\" \\r\\n                     >\\r\\n                     <slot></slot>\\r\\n                    <slot name=\\\"splitter\\\">  <div style=\\\"grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}\\\" ws-onmousedown=\\\"MouseDown\\\" ws-onafterrender=\\\"AfterRenderSp\\\" ></div> </slot>\\r\\n                    <style>\\r\\n                        ::slotted(*) {\\r\\n                            display: grid;\\r\\n                            height : 100%;\\r\\n                            width  : 100%;\\r\\n                            overflow: hidden;\\r\\n                        }\\r\\n                        ::slotted(*:nth-child(2)) {\\r\\n                            grid-area: two;\\r\\n                        }\\r\\n                        ::slotted(*[slot=\\\"splitter\\\"]) {\\r\\n                            grid-row:2; grid-column:1 / 1 ; \\r\\n                            cursor: row-resize; \\r\\n                            z-index: 3; \\r\\n                            background-color: #eef ; \\r\\n                            height: ${Gap}; \\r\\n                            margin-top :-${Gap}\\r\\n                        }\\r\\n                    </style>\\r\\n                </div>        \\r\\n                <div ws-template=\\\"WCompSplitterVer\\\" \\r\\n                     ws-onafterrender=\\\"AfterRender\\\"\\r\\n                     style=\\\"display: grid; \\r\\n                            grid-gap: 5px; \\r\\n                            box-sizing: border-box; \\r\\n                            grid-template-areas: 'one two'; \\r\\n                            grid-template-rows   :100%; \\r\\n                            overflow: hidden; \\r\\n                            grid-template-columns: ${PartSizes}\\\"  >\\r\\n                    <slot></slot>\\r\\n                    <slot name=\\\"splitter\\\"> <div style=\\\"grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}\\\" ws-onmousedown=\\\"MouseDown\\\" ws-onafterrender=\\\"AfterRenderSp\\\" ></div> </slot>\\r\\n                    <style>\\r\\n                        ::slotted(*) {\\r\\n                            display: grid;\\r\\n                            height : 100%;\\r\\n                            width  : 100%;\\r\\n                            overflow: hidden;\\r\\n                        }\\r\\n                        ::slotted(*:nth-child(2)) {\\r\\n                            grid-area: two;\\r\\n                        }\\r\\n                        ::slotted(*[slot=\\\"splitter\\\"]) {\\r\\n                            grid-column:2; grid-row:1 / 1\\r\\n                            cursor: column-resize; \\r\\n                            z-index: 3; \\r\\n                            background-color: #eef ; \\r\\n                            width: ${Gap}; \\r\\n                            margin-left:-${Gap}\\r\\n                        }\\r\\n                    </style>\\r\\n                </div>\\r\\n                <div ws-template=\\\"AppFwkClient\\\" >\\r\\n                    <ws-FixedSplitterHor>\\r\\n                        <PartSizes>55px calc(100% - 55px)</PartSizes>\\r\\n                        <First>\\r\\n                            <span style=\\\"display: grid;\\r\\n                                  grid-template-columns: 30% 20% 20% 10%;\\r\\n                                  grid-gap: 25px;\\r\\n                                \\\">\\r\\n                                <div class=\\\"mainTitle\\\">AppFramework</div>\\r\\n                            </span>\\r\\n                        </First>\\r\\n                        <Second>\\r\\n                                <ws-FixedSplitterVer>\\r\\n                                    <PartSizes>calc(100% - 2px) 2px</PartSizes>\\r\\n                                    <First>\\r\\n                                        <wcomp-splitter vertical value=\\\"18\\\" max=\\\"100\\\">\\r\\n                                            <div><div ws-hole=\\\"PlugIns\\\" style=\\\"overflow:auto\\\" >\\r\\n                                                <div ws-template=\\\"Tile\\\">\\r\\n                                                    <div draggable=\\\"true\\\" class=\\\"code-editor-list-tile ${Predecessor} ${Selected}\\\" \\r\\n                                                    ws-ondrag=\\\"Drag\\\"\\r\\n                                                    ws-ondragover=\\\"DragOver\\\"\\r\\n                                                    ws-ondrop=\\\"Drop\\\"\\r\\n                                                   >\\r\\n                                                   <span class=\\\"node ${Parent} ${ErrorMsg}\\\" title=\\\"expand\\\" ws-onclick=\\\"ToggleCollapse\\\"></span>\\r\\n                                                   <div  class=\\\"code-editor-list-text\\\" style=\\\"text-indent:${Indent}em; white-space: pre\\\" ws-onclick=\\\"Select\\\" ws-onafterrender=\\\"AfterRender\\\" >${Name}</div>\\r\\n                                                   <span class=\\\"predecessor\\\" title=\\\"toggle predecessor\\\" ws-onclick=\\\"TogglePred\\\">X</span>\\r\\n                                               </div>\\r\\n                                       \\r\\n                                                </div>\\r\\n                                            </div></div>\\r\\n                                            <wcomp-splitter vertical value=\\\"80\\\" min=\\\"30\\\" max=\\\"100\\\">\\r\\n                                                <ws-FixedSplitterHor>\\r\\n                                                    <PartSizes>32px calc(100% - 32px)</PartSizes>\\r\\n                                                    <First>\\r\\n                                                        <div>\\r\\n                                                            <div class=\\\"input-group\\\">\\r\\n                                                                <span class=\\\"input-group-addon\\\">${PlugInName}</span>\\r\\n                                                            </div>\\r\\n                                                        </div>\\r\\n                                                    </First>\\r\\n                                                    <Second>\\r\\n                                                        <div style=\\\"overflow:auto; display:flex; flex-direction:column\\\">\\r\\n                                                            <div>\\r\\n                                                                <h3>Vars:</h3>\\r\\n                                                                <table style=\\\"overflow:auto;width:100%\\\" class=\\\"table table-condensed table-striped\\\">\\r\\n                                                                    <thead>\\r\\n                                                                        <th style=\\\"width: 10%  \\\">Name</th>\\r\\n                                                                        <th style=\\\"width: 90% \\\">Value</th>\\r\\n                                                                    </thead>\\r\\n                                                                    <tbody ws-hole=\\\"Vars\\\">\\r\\n                                                                    <tr ws-template=\\\"NameValueInput\\\" >\\r\\n                                                                        <td >${Name}:</td>\\r\\n                                                                        <td>\\r\\n                                                                        <textarea placeholder=\\\"Value...\\\" ws-var=\\\"Value\\\" style=\\\"resize:vertical; width:100%\\\" spellcheck=\\\"false\\\"></textarea>\\r\\n                                                                        </td>\\r\\n                                                                    </tr>\\r\\n                                                                    </tbody>\\r\\n                                                                </table>\\r\\n                                                            </div>\\r\\n                                                            <div>\\r\\n                                                                <h3>Views:</h3>\\r\\n                                                                <table style=\\\"overflow:auto\\\" class=\\\"table table-condensed table-striped\\\" >\\r\\n                                                                    <thead>\\r\\n                                                                        <th style=\\\"width: 10%  \\\">Name</th>\\r\\n                                                                        <th style=\\\"width: 90% \\\">Value</th>\\r\\n                                                                    </thead>\\r\\n                                                                    <tbody ws-hole=\\\"Views\\\" >\\r\\n                                                                    <tr ws-template=\\\"NameValue\\\" class=\\\"\\\">\\r\\n                                                                        <td>${Name}:</td>\\r\\n                                                                        <td>${Value}</td>\\r\\n                                                                    </tr>\\r\\n                                                                    </tbody>\\r\\n                                                                </table>\\r\\n                                                            </div>\\r\\n                                                            <div>\\r\\n                                                                <h3>Docs:</h3>\\r\\n                                                                <div ws-hole=\\\"Docs\\\" style=\\\"overflow:auto\\\" ></div>\\r\\n                                                            </div>\\r\\n                                                            <div>\\r\\n                                                                <h3>Queries:</h3>\\r\\n                                                                <table style=\\\"overflow:auto\\\" >\\r\\n                                                                    <tbody ws-hole=\\\"Queries\\\" >\\r\\n                                                                    </tbody>\\r\\n                                                                </table>\\r\\n                                                            </div>\\r\\n                                                        </div>\\r\\n                                                    </Second>\\r\\n                                                </ws-FixedSplitterHor>\\r\\n                                        <div style=\\\"font-size:small; overflow: hidden; display: flex; flex-direction: column;\\\"  class=\\\"absolute\\\" ws-hole=\\\"Actions\\\" >\\r\\n                                            <button ws-template=\\\"Action\\\" style=\\\"font-size:small\\\" ws-onclick=\\\"Click\\\" class=\\\"btn\\\" type=\\\"button\\\" id=\\\"\\\" ws-attr=\\\"Attrs\\\" >${Name}</button>\\r\\n                                        </div>\\r\\n                                            </wcomp-splitter>\\r\\n                                        </wcomp-splitter>\\r\\n                                    </First>\\r\\n                                    <Second>\\r\\n                                                <wcomp-tabstrip >\\r\\n                                                    <div tabname=\\\"Properties\\\">\\r\\n                                                        <div>\\r\\n                                                            <table style=\\\"border-spacing:0px\\\">\\r\\n                                                                <thead>\\r\\n                                                                    <th style=\\\"width: 30%  \\\">Name</th>\\r\\n                                                                    <th style=\\\"width: 70% \\\">Value</th>\\r\\n                                                                </thead>\\r\\n                                                                <tbody ws-hole=\\\"Properties\\\" ws-children-template=\\\"Property\\\">\\r\\n                                                                    <tr ws-onclick=\\\"Select\\\" style=\\\"margin-bottom: 2px\\\" class=\\\"level  \\\">\\r\\n                                                                        <td class=\\\"level-item\\\">\\r\\n                                                                            <div>\\r\\n                                                                                <input ws-var=\\\"Name\\\" type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"\\\" placeholder=\\\"Property...\\\">\\r\\n                                                                            </div>\\r\\n                                                                        </td>\\r\\n                                                                        <td class=\\\"level-item\\\">\\r\\n                                                                            <div>\\r\\n                                                                                <textarea ws-var=\\\"Value\\\" class=\\\"form-control\\\" id=\\\"\\\" placeholder=\\\"Value...\\\"></textarea>\\r\\n                                                                            </div>\\r\\n                                                                        </td>\\r\\n                                                                        <td class=\\\"level-item\\\">\\r\\n                                                                            <div style=\\\" cursor: pointer \\\" title=\\\"remove\\\">\\r\\n                                                                                <button ws-onclick=\\\"Remove\\\" class=\\\"delete is-small\\\">x</button>\\r\\n                                                                            </div>\\r\\n                                                                        </td>\\r\\n                                                                    </tr>\\r\\n                                                                </tbody>\\r\\n                                                            </table>\\r\\n                                                            <button ws-onclick=\\\"AddProperty\\\" class=\\\"add is-small\\\">add ...</button>\\r\\n                                                        </div>\\r\\n                                                    </div>\\r\\n                                                </wcomp-tabstrip>\\r\\n                                    </Second>\\r\\n                                </ws-FixedSplitterVer>\\r\\n                        </Second>\\r\\n                    </ws-FixedSplitterHor>\\r\\n                </div>\\r\\n                <style style=\\\"display: none\\\">\\r\\n                        .Hidden     { display   : none         }\\r\\n                        table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\\r\\n                        td input.form-control { \\r\\n                            padding    : 0px; \\r\\n                            font-family: monospace;\\r\\n                            font-size  :   small;\\r\\n                            margin-top :   0px;\\r\\n                            margin-left: -2px;\\r\\n                            width      : 100%\\r\\n                        }\\r\\n                        td select {\\r\\n                            font-size : smaller;\\r\\n                            max-width : 8ch;\\r\\n                        }\\r\\n                        textarea {\\r\\n                           resize : vertical;\\r\\n                        }\\r\\n                        .tab-content {\\r\\n                            overflow: hidden\\r\\n                        }\\r\\n                        .tab-children {\\r\\n                            position:relative;\\r\\n                        }\\r\\n                        .tab-children>div>* {\\r\\n                            position:absolute;\\r\\n                            height: 100%;\\r\\n                            width:  100%;\\r\\n                            display: grid;\\r\\n                        }\\r\\n                        .relative {\\r\\n                            position:relative;\\r\\n                        }\\r\\n                        .relative>* {\\r\\n                            position:absolute;\\r\\n                            height: 100%;\\r\\n                            width:  100%;\\r\\n                            display: grid;\\r\\n                        }\\r\\n                        table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\\r\\n                        table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\\r\\n                        table.table-striped    tbody input              { background: transparent; border: none}\\r\\n                        table.table-striped    tbody select             { background: transparent; border: none}\\r\\n                        table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\\r\\n                        table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\\r\\n                        table.table            tbody tr.hover           { border    : solid thin transparent; } \\r\\n                        table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \\r\\n                        table.table            tbody th:hover           { background: gray; cursor: pointer }\\r\\n                        table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \\r\\n                                                                   border-bottom: solid thin blue     ; } \\r\\n                        table.table            tbody tr.selected { background   : #b9eeff             ; }\\r\\n                        table.table            tbody tr.formula.selected { background: #20f7f7             ; }\\r\\n                        thead { color: gray }\\r\\n                        h3 { \\r\\n                            color: gray;\\r\\n                            line-height: 1em;\\r\\n                        }\\r\\n                        button       { border: solid thin transparent ; border-radius: 3px; }\\r\\n                        button:hover { border: solid thin blue }\\r\\n                        .indenter { position  : absolute; \\r\\n                                    top:0px; bottom:0px; left:0px; \\r\\n                                    background: white; color:white;\\r\\n                                    border-right: gray thin dotted;\\r\\n                                    }\\r\\n                        body {\\r\\n                            color      : #333;\\r\\n                            font-size  : small;\\r\\n                            font-family: monospace;\\r\\n                            line-height: 1.2;\\r\\n                        }\\r\\n                        .mainTitle {  \\r\\n                            font-size: 48px;\\r\\n                            font-weight: 500;\\r\\n                            color: gray;\\r\\n                            margin-top: -12px;\\r\\n                        }\\r\\n                        .CodeMirror {\\r\\n                            height: 100%;\\r\\n                        }\\r\\n                        \\r\\n                      \\r\\n                        body { margin: 0px }     \\r\\n                             \\r\\n                        div textarea {\\r\\n                            font-family     : monospace;\\r\\n                        }\\r\\n                        .code-editor-list-tile {\\r\\n                            white-space     : nowrap; \\r\\n                            border-style    : solid none none;\\r\\n                            border-color    : white;\\r\\n                            border-width    : 1px;\\r\\n                            background-color: #D8D8D8;\\r\\n                            display         : flex;\\r\\n                        }\\r\\n                        .code-editor-list-text{\\r\\n                            padding         : 1px 10px 1px 5px;\\r\\n                            overflow        : hidden;\\r\\n                            text-overflow   : ellipsis;\\r\\n                            white-space     : nowrap;\\r\\n                            flex            : 1;\\r\\n                        }\\r\\n                        \\r\\n                        .code-editor-list-tile span.node.ErrorMsg {\\r\\n                            background-color: red\\r\\n                        }\\r\\n                        .code-editor-list-tile span.node.expanded::before {\\r\\n                            content: \\\"-\\\"\\r\\n                        }\\r\\n                        .code-editor-list-tile span.node.collapsed::before {\\r\\n                            content: \\\"+\\\"\\r\\n                        }\\r\\n                        .code-editor-list-tile.direct-predecessor {\\r\\n                            font-weight     : bold;\\r\\n                            color           : blue;\\r\\n                        }\\r\\n                        .code-editor-list-tile.indirect-predecessor {\\r\\n                            color           : blue;\\r\\n                        }\\r\\n                        .code-editor-list-tile.included-predecessor {\\r\\n                            color           : chocolate;\\r\\n                        }\\r\\n                        .code-editor-list-tile.selected {\\r\\n                            background-color: #77F;\\r\\n                            color           : white;\\r\\n                        }\\r\\n                        .code-editor-list-tile.codeSnippet {\\r\\n                            text-decoration: underline\\r\\n                        }\\r\\n                        .code-editor-list-tile:hover {\\r\\n                            background      : lightgray;\\r\\n                        }\\r\\n                        .code-editor-list-tile.selected:hover {\\r\\n                            background      : blue;\\r\\n                        }\\r\\n                        .code-editor-list-tile>.predecessor {\\r\\n                            font-weight     : bold;\\r\\n                            border-style    : inset;\\r\\n                            border-width    : 1px;\\r\\n                            text-align      : center;\\r\\n                            color           : transparent;\\r\\n                        }\\r\\n                        .code-editor-list-tile.direct-predecessor>.predecessor {\\r\\n                            color           : blue;\\r\\n                        }\\r\\n                        \\r\\n                        .CodeMirror { height: 100%; }\\r\\n                        \\r\\n                        .node {\\r\\n                            background-color: white; \\r\\n                            width           : 2ch; \\r\\n                            color           : #A03; \\r\\n                            font-weight     : bold; \\r\\n                            text-align      : center;\\r\\n                            font-family     : arial;\\r\\n                        }\\r\\n                        .Warning { text-decoration: underline lightblue } \\r\\n                        .Error   { text-decoration: underline red       } \\r\\n                        \\r\\n                    </style>\\r\\n            </div>\\r\\n            \";\r\n  SC$1.plugIns=new ListModel$1.New$1(function(plg)\r\n  {\r\n   return plg.plgName;\r\n  });\r\n  SC$1.mainDocV=Var$2.Create$1(\"AppFramework.AppFwkClient\");\r\n  SC$1.TemplateFileName=\"D:\\\\Abe\\\\CIPHERWorkspace\\\\FSharpStation\\\\projects\\\\LayoutEngine\\\\website\\\\AppFramework.html\";\r\n  SC$1.selectionPlugInO=Var$2.Create$1({\r\n   $:1,\r\n   $0:new PlugInName({\r\n    $:0,\r\n    $0:\"AppFramework\"\r\n   })\r\n  });\r\n  SC$1.currentPlugInW=View$1.Map(function(o$1)\r\n  {\r\n   return o$1==null?AppFramework.defaultPlugIn():o$1.$0;\r\n  },View$1.Bind(function(a$1)\r\n  {\r\n   return a$1==null?View$1.Const({\r\n    $:1,\r\n    $0:AppFramework.defaultPlugIn()\r\n   }):AppFramework.plugIns().TryFindByKeyAsView(a$1.$0);\r\n  },AppFramework.selectionPlugInO().get_View()));\r\n  SC$1.currentPlugInV=new FromView.New(AppFramework.currentPlugInW(),function(a$1)\r\n  {\r\n   AppFramework.plugIns().Append(a$1);\r\n  });\r\n  SC$1.AppFwkClient=Lazy.Create(function()\r\n  {\r\n   var b$19,Q,A,D,V,V$1,P$2,p$20,i;\r\n   return(b$19=(Q=AppFramework.renderQueries(),(A=AppFramework.renderActions(),(D=AppFramework.renderDocs(),(V=AppFramework.renderViews(),(V$1=AppFramework.renderVars(),(P$2=AppFramework.renderPlugIns(),ProviderBuilder.Make().WithHole({\r\n    $:0,\r\n    $0:\"plugins\",\r\n    $1:P$2\r\n   })).WithHole({\r\n    $:2,\r\n    $0:\"pluginname\",\r\n    $1:View$1.Map(function($1)\r\n    {\r\n     return $1.plgName.get_Id();\r\n    },AppFramework.currentPlugInW())\r\n   }).WithHole({\r\n    $:0,\r\n    $0:\"vars\",\r\n    $1:V$1\r\n   })).WithHole({\r\n    $:0,\r\n    $0:\"views\",\r\n    $1:V\r\n   })).WithHole({\r\n    $:0,\r\n    $0:\"docs\",\r\n    $1:D\r\n   })).WithHole({\r\n    $:0,\r\n    $0:\"actions\",\r\n    $1:A\r\n   })).WithHole({\r\n    $:0,\r\n    $0:\"queries\",\r\n    $1:Q\r\n   })),(p$20=Handler.CompleteHoles(b$19.k,b$19.h,[]),(i=new TemplateInstance.New(p$20[1],LayoutEngine_Templates.appfwkclient(p$20[0])),(b$19.i=i,i)))).get_Doc();\r\n  });\r\n  SC$1.plugin=new PlugInBuilder.New();\r\n  SC$1.a11V=Var$2.Create$1(11);\r\n  SC$1.mainX={\r\n   $:0,\r\n   $0:AppFramework.a11V().get_View()\r\n  };\r\n  SC$1.baseView=AppFramework.mainDocV().get_View();\r\n  SC$1.op_LessMultiplyGreater=function(f$19)\r\n  {\r\n   return function(v)\r\n   {\r\n    return Val.apply(f$19,v);\r\n   };\r\n  };\r\n  SC$1.getDocFromReferenceD=Depend.dependByName(\"getDocFromReference\",Extract0.getDocFromReference,Global.id);\r\n  SC$1.getTextActViewFromReferenceD=Depend.dependByName(\"getTextActViewFromReference\",Extract0.getTextActViewFromReference,Global.id);\r\n  SC$1.getDocFromTextTypesD=(b=Depend.depend(),b.Delay(function()\r\n  {\r\n   return b.Bind(Extract0.getDocFromReferenceD(),function(a$1)\r\n   {\r\n    var f$19;\r\n    function m(a$2)\r\n    {\r\n     return a$2.$==1?a$1(a$2.$0):Doc.TextNode(a$2.$0);\r\n    }\r\n    return b.Return((f$19=function(l)\r\n    {\r\n     return List.map(m,l);\r\n    },function(x)\r\n    {\r\n     return Doc.Concat(f$19(x));\r\n    }));\r\n   });\r\n  }));\r\n  SC$1.extractDocD=(b$1=Depend.depend(),b$1.Delay(function()\r\n  {\r\n   return b$1.Bind(Extract0.getDocFromTextTypesD(),function(a$1)\r\n   {\r\n    return b$1.Return(function(x)\r\n    {\r\n     return a$1(Extract0.getTextData(x));\r\n    });\r\n   });\r\n  }));\r\n  SC$1.getTextValFromSeqD=(b$2=Depend.depend(),b$2.Delay(function()\r\n  {\r\n   return b$2.Bind(Extract0.getTextActViewFromReferenceD(),function(a$1)\r\n   {\r\n    var f$19,g$11,f$20;\r\n    function f$21(a$2)\r\n    {\r\n     var r;\r\n     return a$2.$==1?(r=a$2.$0,{\r\n      $:0,\r\n      $0:View$1.Map(function(a$3)\r\n      {\r\n       return a$3.$==1?(function($1)\r\n       {\r\n        return function($2)\r\n        {\r\n         return $1(\"@{\"+Utils.toSafe($2)+\"}\");\r\n        };\r\n       }(Global.id))(r):a$3.$0;\r\n      },a$1(r))\r\n     }):{\r\n      $:1,\r\n      $0:a$2.$0\r\n     };\r\n    }\r\n    return b$2.Return((f$19=function(l)\r\n    {\r\n     return Val.traverseListApp(f$21,l);\r\n    },(g$11=(f$20={\r\n     $:1,\r\n     $0:function(s)\r\n     {\r\n      return Strings.concat(\"\",s);\r\n     }\r\n    },function(v)\r\n    {\r\n     return Val.apply(f$20,v);\r\n    }),function(x)\r\n    {\r\n     return g$11(f$19(x));\r\n    })));\r\n   });\r\n  }));\r\n  SC$1.getTextValD=Operators$2.op_GreaterMultiplyGreater(Extract0.getTextData,Extract0.getTextValFromSeqD());\r\n  SC$1.extractAtsD=(b$3=Depend.depend(),b$3.Delay(function()\r\n  {\r\n   return b$3.Bind(Extract0.getTextValD(),function(a$1)\r\n   {\r\n    return b$3.Bind(Extract0.getTextActViewFromReferenceD(),function(a$2)\r\n    {\r\n     return b$3.Return(function(txt)\r\n     {\r\n      var a$3,m;\r\n      function parseAttr(t)\r\n      {\r\n       var m$1,sty,m$2,atv,atn,m$3,$1;\r\n       m$1=Strings.SplitChars(t,[\":\"],0);\r\n       return!Unchecked.Equals(m$1,null)&&m$1.length===2?(sty=Arrays.get(m$1,1),{\r\n        $:0,\r\n        $0:Arrays.get(m$1,0),\r\n        $1:sty\r\n       }):(m$2=Arrays.map(Strings.Trim,Strings.SplitChars(t,[\"=\"],0)),!Unchecked.Equals(m$2,null)&&m$2.length===2?(atv=Arrays.get(m$2,1),(atn=Arrays.get(m$2,0),(m$3=Extract0.getTextData(atv),m$3.$==1&&(m$3.$0.$==1&&(m$3.$1.$==0&&($1=m$3.$0.$0,true)))?{\r\n        $:2,\r\n        $0:atn,\r\n        $1:$1\r\n       }:{\r\n        $:1,\r\n        $0:atn,\r\n        $1:atv\r\n       }))):!Unchecked.Equals(m$2,null)&&m$2.length===1?{\r\n        $:1,\r\n        $0:Arrays.get(m$2,0),\r\n        $1:\"\"\r\n       }:AAttr.AEmpty);\r\n      }\r\n      function splitAttrs(txt$1)\r\n      {\r\n       return Seq.filter(function(y)\r\n       {\r\n        return\"\"!==y;\r\n       },Seq.map(Strings.Trim,Strings.SplitChars(txt$1,[\";\"],0)));\r\n      }\r\n      function addedListeners(el)\r\n      {\r\n       var v;\r\n       v=el.addedListeners;\r\n       return!v?[]:v;\r\n      }\r\n      function setCustomAttr(atn,el,a$4)\r\n      {\r\n       var act,p$20,same,i,$1;\r\n       function listener(ev)\r\n       {\r\n        AppFramework.callFunction(el,ev,act.actFunction);\r\n       }\r\n       function f$19(t)\r\n       {\r\n        return t[0];\r\n       }\r\n       function g$12(y)\r\n       {\r\n        return atn===y;\r\n       }\r\n       if(a$4.$==1)\r\n        {\r\n         act=a$4.$0;\r\n         p$20=Arrays.partition(function(x)\r\n         {\r\n          return g$12(f$19(x));\r\n         },addedListeners(el));\r\n         same=p$20[0];\r\n         for(i=0,$1=same.length-1;i<=$1;i++)(function()\r\n         {\r\n          return el.removeEventListener(atn,(Arrays.get(same,i))[1]);\r\n         }());\r\n         el.addEventListener(atn,listener,false);\r\n         el.addedListeners=p$20[1].concat([[atn,listener]]);\r\n         return;\r\n        }\r\n       else\r\n        try\r\n        {\r\n         return el.setAttribute(atn,Strings.Trim(a$4.$0));\r\n        }\r\n        catch(e)\r\n        {\r\n         return(function($2)\r\n         {\r\n          return function($3)\r\n          {\r\n           return $2(Utils.prettyPrint($3));\r\n          };\r\n         }(function(s$1)\r\n         {\r\n          console.log(s$1);\r\n         }))(e);\r\n        }\r\n      }\r\n      function viewAttr(atn)\r\n      {\r\n       function s$1($1,$2)\r\n       {\r\n        return setCustomAttr(atn,$1,$2);\r\n       }\r\n       return function(v)\r\n       {\r\n        return AttrModule.DynamicCustom(function($1)\r\n        {\r\n         return function($2)\r\n         {\r\n          return s$1($1,$2);\r\n         };\r\n        },v);\r\n       };\r\n      }\r\n      function constAttr(a$4)\r\n      {\r\n       var x;\r\n       return a$4.$==1?AppFramework.valToAttr(a$4.$0,a$1(a$4.$1)):a$4.$==2?(x=a$2(a$4.$1),(viewAttr(a$4.$0))(x)):a$4.$==3?Attrs.EmptyAttr():AppFramework.valToStyle(a$4.$0,a$1(a$4.$1));\r\n      }\r\n      function s(el,sq)\r\n      {\r\n       var f$19,styles,atts,attsNow,names,i,e,nm,i$1,e$1,f$20,a$4,i$2,$1,f$21,i$3,e$2;\r\n       function m$1(t)\r\n       {\r\n        return t[0];\r\n       }\r\n       function g$12(a$5)\r\n       {\r\n        return new FSharpSet.New(a$5);\r\n       }\r\n       styles=Seq.choose(function(a$5)\r\n       {\r\n        return a$5.$==0?{\r\n         $:1,\r\n         $0:a$5.$0+\":\"+a$5.$1\r\n        }:null;\r\n       },sq);\r\n       atts=Arrays.ofSeq(Seq.delay(function()\r\n       {\r\n        return Seq.append(!Seq.isEmpty(styles)?[[\"style\",Strings.concat(\";\",styles)]]:[],Seq.delay(function()\r\n        {\r\n         return Seq.choose(function(a$5)\r\n         {\r\n          return a$5.$==1?{\r\n           $:1,\r\n           $0:[a$5.$0,a$5.$1]\r\n          }:a$5.$==2?{\r\n           $:1,\r\n           $0:[a$5.$0,a$5.$1]\r\n          }:a$5.$==3?null:null;\r\n         },sq);\r\n        }));\r\n       }));\r\n       attsNow=List.ofSeq(Seq.delay(function()\r\n       {\r\n        return Seq.map(function(i$4)\r\n        {\r\n         return[el.attributes.item(i$4).name,el.attributes.item(i$4).value];\r\n        },List.ofSeq(Operators$3.range(0,el.attributes.length-1)));\r\n       }));\r\n       names=(f$19=function(s$1)\r\n       {\r\n        return Seq.map(m$1,s$1);\r\n       },function(x)\r\n       {\r\n        return g$12(f$19(x));\r\n       });\r\n       i=FSharpSet.op_Subtraction(names(attsNow),names(atts));\r\n       e=Enumerator.Get(i);\r\n       try\r\n       {\r\n        while(e.MoveNext())\r\n         {\r\n          nm=e.Current();\r\n          try\r\n          {\r\n           el.attributes.removeNamedItem(nm);\r\n          }\r\n          catch(e$3)\r\n          {\r\n           ((function($2)\r\n           {\r\n            return function($3)\r\n            {\r\n             return $2(Utils.prettyPrint($3));\r\n            };\r\n           }(function(s$1)\r\n           {\r\n            console.log(s$1);\r\n           }))(e$3));\r\n          }\r\n         }\r\n       }\r\n       finally\r\n       {\r\n        if(typeof e==\"object\"&&\"Dispose\"in e)\r\n         e.Dispose();\r\n       }\r\n       i$1=FSharpSet.op_Subtraction(new FSharpSet.New(atts),new FSharpSet.New(attsNow));\r\n       e$1=Enumerator.Get(i$1);\r\n       try\r\n       {\r\n        while(e$1.MoveNext())\r\n         {\r\n          f$20=e$1.Current();\r\n          try\r\n          {\r\n           el.setAttribute(f$20[0],f$20[1]);\r\n          }\r\n          catch(e$4)\r\n          {\r\n           ((function($2)\r\n           {\r\n            return function($3)\r\n            {\r\n             return $2(Utils.prettyPrint($3));\r\n            };\r\n           }(function(s$1)\r\n           {\r\n            console.log(s$1);\r\n           }))(e$4));\r\n          }\r\n         }\r\n       }\r\n       finally\r\n       {\r\n        if(typeof e$1==\"object\"&&\"Dispose\"in e$1)\r\n         e$1.Dispose();\r\n       }\r\n       a$4=addedListeners(el);\r\n       for(i$2=0,$1=a$4.length-1;i$2<=$1;i$2++){\r\n        f$21=Arrays.get(a$4,i$2);\r\n        try\r\n        {\r\n         el.removeEventListener(f$21[0],f$21[1]);\r\n        }\r\n        catch(e$5)\r\n        {\r\n         ((function($2)\r\n         {\r\n          return function($3)\r\n          {\r\n           return $2(Utils.prettyPrint($3));\r\n          };\r\n         }(function(s$1)\r\n         {\r\n          console.log(s$1);\r\n         }))(e$5));\r\n        }\r\n       }\r\n       i$3=Seq.choose(function(a$5)\r\n       {\r\n        return a$5.$==2?{\r\n         $:1,\r\n         $0:[a$5.$0,a$5.$1]\r\n        }:null;\r\n       },sq);\r\n       e$2=Enumerator.Get(i$3);\r\n       try\r\n       {\r\n        while(e$2.MoveNext())\r\n         (function()\r\n         {\r\n          var f$22,$2;\r\n          f$22=e$2.Current();\r\n          return View$1.Get(($2=f$22[0],function($3)\r\n          {\r\n           return setCustomAttr($2,el,$3);\r\n          }),a$2(f$22[1]));\r\n         }());\r\n        return;\r\n       }\r\n       finally\r\n       {\r\n        if(typeof e$2==\"object\"&&\"Dispose\"in e$2)\r\n         e$2.Dispose();\r\n       }\r\n      }\r\n      function g$11(s$1)\r\n      {\r\n       return Seq.map(parseAttr,s$1);\r\n      }\r\n      a$3=Arrays.ofSeq(splitAttrs(txt));\r\n      return!Unchecked.Equals(a$3,null)&&a$3.length===1?[(m=a$1(Arrays.get(a$3,0)),m.$==0?AttrModule.DynamicCustom(function($1)\r\n      {\r\n       return function($2)\r\n       {\r\n        return s($1,$2);\r\n       };\r\n      },View$1.Map(function(x)\r\n      {\r\n       return g$11(splitAttrs(x));\r\n      },m.$0)):constAttr(parseAttr(m.$0)))]:Seq.map(function(x)\r\n      {\r\n       return constAttr(parseAttr(x));\r\n      },a$3);\r\n     });\r\n    });\r\n   });\r\n  }));\r\n  SC$1.extractTextD=(b$4=Depend.depend(),b$4.Delay(function()\r\n  {\r\n   return b$4.Bind(Extract0.getTextValD(),function(a$1)\r\n   {\r\n    return b$4.Return(function(x)\r\n    {\r\n     return Val.toView(a$1(x));\r\n    });\r\n   });\r\n  }));\r\n  SC$1.currentPlugInNameDef=new PlugInName({\r\n   $:0,\r\n   $0:\"NewLYx\"\r\n  });\r\n  SC$1.currentPlugInNameD=Depend.dependByName(\"currentPlugInName\",AppFramework.currentPlugInNameDef(),Global.id);\r\n  SC$1.getDocwD=(b$5=Depend.depend(),b$5.Delay(function()\r\n  {\r\n   return b$5.Bind(AppFramework.currentPlugInNameD(),function(a$1)\r\n   {\r\n    return b$5.Return(function(r)\r\n    {\r\n     var p$20,pName,oName;\r\n     p$20=(AppFramework.splitName(a$1))(r);\r\n     pName=p$20[0];\r\n     oName=p$20[1];\r\n     return Doc.BindView(function(docO)\r\n     {\r\n      var o$1;\r\n      function d()\r\n      {\r\n       return(function($1)\r\n       {\r\n        return function($2)\r\n        {\r\n         return $1(\"Reference not found @{\"+Utils.toSafe($2)+\"}\");\r\n        };\r\n       }(Global.id))(r);\r\n      }\r\n      o$1=docO==null?null:{\r\n       $:1,\r\n       $0:AppFramework.getActualDoc(docO.$0)\r\n      };\r\n      return o$1==null?Doc.TextView(View$1.Map(function(o$2)\r\n      {\r\n       return o$2==null?d():o$2.$0;\r\n      },AppFramework.tryGetWoWW(pName,oName))):o$1.$0;\r\n     },AppFramework.tryGetDocW(pName,oName));\r\n    });\r\n   });\r\n  }));\r\n  SC$1.getDocD=(b$6=Depend.depend(),b$6.Delay(function()\r\n  {\r\n   return b$6.Bind(AppFramework.currentPlugInNameD(),function(a$1)\r\n   {\r\n    return b$6.Return(function(r)\r\n    {\r\n     var p$20,pName,oName,o$1,o$2,o$3;\r\n     p$20=(AppFramework.splitName(a$1))(r);\r\n     pName=p$20[0];\r\n     oName=p$20[1];\r\n     o$1=(o$2=AppFramework.tryGetDoc(pName,oName),o$2==null?null:{\r\n      $:1,\r\n      $0:AppFramework.getActualDoc(o$2.$0)\r\n     });\r\n     return o$1==null?Doc.TextView((o$3=AppFramework.tryGetWoW(pName,oName),o$3==null?View$1.Const((function($1)\r\n     {\r\n      return function($2)\r\n      {\r\n       return $1(\"Reference not found @{\"+Utils.toSafe($2)+\"}\");\r\n      };\r\n     }(Global.id))(r)):o$3.$0)):o$1.$0;\r\n    });\r\n   });\r\n  }));\r\n  SC$1.getTextActViewD=(b$7=Depend.depend(),b$7.Delay(function()\r\n  {\r\n   return b$7.Bind(AppFramework.currentPlugInNameD(),function(a$1)\r\n   {\r\n    return b$7.Return(function(r)\r\n    {\r\n     var p$20,pName,oName;\r\n     p$20=(AppFramework.splitName(a$1))(r);\r\n     pName=p$20[0];\r\n     oName=p$20[1];\r\n     return View$1.Bind(function(a$2)\r\n     {\r\n      function d()\r\n      {\r\n       return(function($1)\r\n       {\r\n        return function($2)\r\n        {\r\n         return $1(\"Text Reference not found @{\"+Utils.toSafe($2)+\"}\");\r\n        };\r\n       }(Global.id))(r);\r\n      }\r\n      return a$2==null?View$1.Map(function(a$3)\r\n      {\r\n       return{\r\n        $:0,\r\n        $0:a$3\r\n       };\r\n      },View$1.Map(function(o$1)\r\n      {\r\n       return o$1==null?d():o$1.$0;\r\n      },AppFramework.tryGetWoWW(pName,oName))):View$1.Const({\r\n       $:1,\r\n       $0:a$2.$0\r\n      });\r\n     },AppFramework.tryGetActW(pName,oName));\r\n    });\r\n   });\r\n  }));\r\n  SC$1.extractTextD$1=Extract0.extractTextD();\r\n  SC$1.extractDocD$1=Extract0.extractDocD();\r\n  SC$1.extractAtsD$1=Extract0.extractAtsD();\r\n  SC$1.extractAttD=(b$8=Operators$2.depend(),b$8.Delay(function()\r\n  {\r\n   return b$8.Bind(AppFramework.extractAtsD(),function(a$1)\r\n   {\r\n    return b$8.Return(function(p$20)\r\n    {\r\n     return AttrProxy.Concat(a$1(p$20));\r\n    });\r\n   });\r\n  }));\r\n  SC$1.defPlugInName=new PlugInName({\r\n   $:0,\r\n   $0:\"AppFramework\"\r\n  });\r\n  SC$1.inputLabel=AppFramework.depWithExtracts(function($1,$2,$3)\r\n  {\r\n   return f$4.apply(null,[$1,$2,$3]);\r\n  });\r\n  SC$1.input=AppFramework.depWithExtracts(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return f$5($1,$2);\r\n   };\r\n  });\r\n  SC$1.textArea=AppFramework.depWithExtracts(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return f$6($1,$2);\r\n   };\r\n  });\r\n  SC$1.htmlDoc=AppFramework.depWithExtracts(function($1,$2,extractText)\r\n  {\r\n   return function(html)\r\n   {\r\n    return Doc.BindView(Doc.Verbatim,extractText(html));\r\n   };\r\n  });\r\n  SC$1.docReference=AppFramework.depWithExtracts(function($1,$2,extractText)\r\n  {\r\n   return function(docName)\r\n   {\r\n    var x;\r\n    function f$19(a$1,a$2)\r\n    {\r\n     return function(f$20)\r\n     {\r\n      return(f$20(a$1))(a$2);\r\n     };\r\n    }\r\n    return Doc.BindView(function(a$1)\r\n    {\r\n     var a$2;\r\n     return a$1==null?(AppFramework.errDocf(function($3)\r\n     {\r\n      return function($4)\r\n      {\r\n       return $3(\"Doc not found: \"+Utils.toSafe($4));\r\n      };\r\n     }))(docName):(a$2=AppFramework.Lazy(a$1.$0.docDoc),a$2.$==0?a$2.$0:a$2.$==1?a$2.$0():(AppFramework.errDocf(function($3)\r\n     {\r\n      return function($4)\r\n      {\r\n       return $3(\"Doc parameters not resolved: \"+GeneratedPrintf.p($4));\r\n      };\r\n     }))(a$1.$0));\r\n    },View$1.Bind(function(b$19)\r\n    {\r\n     return(function($3)\r\n     {\r\n      return f$19($3[0],$3[1]);\r\n     }(b$19))(function($3)\r\n     {\r\n      return function($4)\r\n      {\r\n       return AppFramework.tryGetDocW($3,$4);\r\n      };\r\n     });\r\n    },(x=extractText(docName),View$1.Map(AppFramework.splitName(AppFramework.defPlugInName()),x))));\r\n   };\r\n  });\r\n  SC$1.setVar0=AppFramework.depWithExtracts(function($1,$2,extractText)\r\n  {\r\n   return function(t)\r\n   {\r\n    var o$1,t$1,_var;\r\n    o$1=(t$1=AppFramework.getParmRef(t[0]),AppFramework.tryGetVoV(t$1[0],t$1[1]));\r\n    o$1==null?void 0:(_var=o$1.$0,View$1.Get(function(a$1)\r\n    {\r\n     _var.Set(a$1);\r\n    },extractText(t[1])));\r\n   };\r\n  });\r\n  SC$1.setVarDirect0=AppFramework.depWithExtracts(function($1,$2,$3)\r\n  {\r\n   var $4;\r\n   $4=[$1,$2,$3];\r\n   return function($5)\r\n   {\r\n    return f$7($4,$5);\r\n   };\r\n  });\r\n  SC$1.getValDirect=AppFramework.depWithExtracts(function($1,$2,$3)\r\n  {\r\n   var $4;\r\n   $4=[$1,$2,$3];\r\n   return function($5)\r\n   {\r\n    return f$8($4,$5);\r\n   };\r\n  });\r\n  SC$1.dragSplitter0=AppFramework.depWithExtracts(function($1,$2,$3)\r\n  {\r\n   var $4;\r\n   $4=[$1,$2,$3];\r\n   return function($5)\r\n   {\r\n    return f$9($4,$5);\r\n   };\r\n  });\r\n  SC$1.trigAct=AppFramework.depWithExtracts(function($1,$2,extractText)\r\n  {\r\n   return function(trigger)\r\n   {\r\n    return function(actN)\r\n    {\r\n     function f$19(a$1)\r\n     {\r\n      var o$1,t;\r\n      if(a$1===null)\r\n       ;\r\n      else\r\n       {\r\n        o$1=(t=AppFramework.getParmRef(actN),AppFramework.tryGetAct(t[0],t[1]));\r\n        o$1==null?void 0:AppFramework.callFunction(null,null,o$1.$0.actFunction);\r\n       }\r\n     }\r\n     function g$11()\r\n     {\r\n      return Doc.Element(\"div\",[],[]);\r\n     }\r\n     return Doc.BindView(function(x)\r\n     {\r\n      return g$11(f$19(x));\r\n     },extractText(trigger));\r\n    };\r\n   };\r\n  });\r\n  SC$1.trigActChange=AppFramework.depWithExtracts(function($1,$2,extractText)\r\n  {\r\n   return function(trigger)\r\n   {\r\n    return function(actN)\r\n    {\r\n     var v,prior;\r\n     function f$19(a$1)\r\n     {\r\n      var o$1,t;\r\n      if(a$1===null)\r\n       ;\r\n      else\r\n       {\r\n        o$1=(t=AppFramework.getParmRef(actN),AppFramework.tryGetAct(t[0],t[1]));\r\n        o$1==null?void 0:AppFramework.callFunction(null,null,o$1.$0.actFunction);\r\n       }\r\n     }\r\n     function g$11()\r\n     {\r\n      return\"\";\r\n     }\r\n     return Doc.TextView(View$1.Map(function(x)\r\n     {\r\n      return g$11(f$19(x));\r\n     },(v=extractText(trigger),(prior=[Var$2.Create$1(null)],(View$1.Sink(function(v$1)\r\n     {\r\n      if(!Unchecked.Equals(prior[0].Get(),v$1))\r\n       prior[0].Set(v$1);\r\n     },v),prior[0].get_View())))));\r\n    };\r\n   };\r\n  });\r\n  SC$1.callAction0=AppFramework.depWithExtracts(function($1,$2,$3)\r\n  {\r\n   var $4;\r\n   $4=[$1,$2,$3];\r\n   return Runtime.Curried(f$10,3,[$4]);\r\n  });\r\n  SC$1.delayAction=AppFramework.depWithExtracts(function($1,$2,extractText)\r\n  {\r\n   return function(delay)\r\n   {\r\n    return function(actN)\r\n    {\r\n     var o$1,t,a$1,b$19;\r\n     o$1=(t=AppFramework.getParmRef(actN),AppFramework.tryGetAct(t[0],t[1]));\r\n     return o$1==null?null:(a$1=o$1.$0,Concurrency.Start((b$19=null,Concurrency.Delay(function()\r\n     {\r\n      return Concurrency.Bind(View$1.GetAsync(extractText(delay)),function(a$2)\r\n      {\r\n       var o$2;\r\n       return Concurrency.Bind(Concurrency.Sleep((o$2=(ParseO.parseIntO())(a$2),o$2==null?100:o$2.$0)),function()\r\n       {\r\n        AppFramework.callFunction(null,null,a$1.actFunction);\r\n        return Concurrency.Zero();\r\n       });\r\n      });\r\n     })),null));\r\n    };\r\n   };\r\n  });\r\n  SC$1.select=AppFramework.depWithExtracts(function(extractAts,$1,extractText)\r\n  {\r\n   return Runtime.Curried3(function(attrs,none,vals)\r\n   {\r\n    function f$19(_var)\r\n    {\r\n     var valsW,varO;\r\n     valsW=View$1.Map(function($2)\r\n     {\r\n      return List.ofSeq(Strings.SplitChars($2,[\";\"],0));\r\n     },extractText(vals));\r\n     varO=new FromView.New(View$1.Map2(function($2,$3)\r\n     {\r\n      return Seq.contains(Strings.Trim($2),$3)?{\r\n       $:1,\r\n       $0:Strings.Trim($2)\r\n      }:null;\r\n     },_var.get_View(),valsW),function(a$1)\r\n     {\r\n      var s;\r\n      if(a$1!=null&&a$1.$==1)\r\n       {\r\n        s=a$1.$0;\r\n        View$1.Get(function(vs)\r\n        {\r\n         if(Seq.contains(s,vs))\r\n          _var.Set(s);\r\n        },valsW);\r\n       }\r\n      else\r\n       _var.Set(\"\");\r\n     });\r\n     return Doc.SelectDynOptional(extractAts(attrs),none,Global.id,valsW,varO);\r\n    }\r\n    return function(v)\r\n    {\r\n     return AppFramework.docWithVar(f$19,v);\r\n    };\r\n   });\r\n  });\r\n  SC$1.splitterPerc=AppFramework.depWithExtracts(Runtime.Curried(f$11,5));\r\n  AppFramework.addPlugIn((b$9=AppFramework.plugin(),b$9.AddAct(b$9.AddDoc(b$9.AddVar(b$9.Name(b$9.Yield(),\"AppFramework\"),\"mainDocV\",AppFramework.mainDocV()),\"AppFwkClient\",AppFramework.AppFwkClient()),\"Hello\",function()\r\n  {\r\n   self.alert(\"Hello!\");\r\n  })));\r\n  AppFramework.addPlugIn((b$10=AppFramework.plugin(),b$10.AddViw(b$10.AddViw(b$10.AddViw(b$10.AddViw(b$10.AddViw(b$10.AddViw(b$10.AddQry(b$10.AddAct2(b$10.AddAct(b$10.AddAct2(b$10.AddAct2(b$10.AddAct2(b$10.AddAct2(b$10.AddDoc5(b$10.AddDoc3(b$10.AddDoc3(b$10.AddDoc4(b$10.AddDoc2(b$10.AddDoc2(b$10.AddDoc2(b$10.AddDoc2(b$10.AddDoc1(b$10.AddDoc1(b$10.Name(b$10.Yield(),\"AF\"),\"DocReference\",AppFramework.docReference(),\"DocName\"),\"HtmlDoc\",AppFramework.htmlDoc(),\"Html\"),\"TrigAction\",AppFramework.trigAct(),\"Trigger\",\"Action\"),\"TrigChange\",AppFramework.trigActChange(),\"Trigger\",\"Action\"),\"Input\",AppFramework.input(),\"Attrs\",\"Var\"),\"TextArea\",AppFramework.textArea(),\"Attrs\",\"Var\"),\"Select\",AppFramework.select(),\"Attrs\",\"None\",\"Vals\",\"Var\"),\"InputFile\",Runtime.Curried3(AppFramework.inputFile),\"Attrs\",\"Label\",\"Action\"),\"InputLabel\",AppFramework.inputLabel(),\"Attrs\",\"Label\",\"Var\"),\"SplitterPerc\",AppFramework.splitterPerc(),\"Template\",\"Attrs\",\"doc1\",\"doc2\",\"Var\"),\"SetVar\",function(v)\r\n  {\r\n   return function(v$1)\r\n   {\r\n    return AppFramework.setVar(v,v$1);\r\n   };\r\n  },\"Var\",\"Value\"),\"SetVarDirect\",function(v)\r\n  {\r\n   return function(v$1)\r\n   {\r\n    return AppFramework.setVarDirect(v,v$1);\r\n   };\r\n  },\"Var\",\"from\"),\"SetVarDirectD\",function(v)\r\n  {\r\n   return function(v$1)\r\n   {\r\n    return AppFramework.setVarDirectD(v,v$1);\r\n   };\r\n  },\"Var\",\"from\"),\"DelayAction\",AppFramework.delayAction(),\"delay\",\"Äction\"),\"Hello\",function()\r\n  {\r\n   self.alert(\"Hello!\");\r\n  }),\"DragSplitter\",function(v)\r\n  {\r\n   return function(e)\r\n   {\r\n    return AppFramework.dragSplitter(v,e);\r\n   };\r\n  },\"Var\",\"dragEvent\"),\"getDocNames\",function()\r\n  {\r\n   return Arrays.ofSeq(Seq.collect(function(plg)\r\n   {\r\n    return Seq.map(function(doc)\r\n    {\r\n     return plg.plgName.get_Id()+\".\"+doc.docName.get_Id();\r\n    },plg.plgDocs);\r\n   },(AppFramework.plugIns())[\"var\"].Get()));\r\n  }),\"MouseX\",View$1.Map(function(x)\r\n  {\r\n   return Global.String(f$12(x));\r\n  },Mouse.get_Position())),\"MouseY\",View$1.Map(function(x)\r\n  {\r\n   return Global.String(f$13(x));\r\n  },Mouse.get_Position())),\"MouseLeft\",View$1.Map(function(a$1)\r\n  {\r\n   return a$1?\"1\":\"0\";\r\n  },Mouse.get_LeftPressed())),\"MouseRight\",View$1.Map(function(a$1)\r\n  {\r\n   return a$1?\"1\":\"0\";\r\n  },Mouse.get_RightPressed())),\"MouseMiddle\",View$1.Map(function(a$1)\r\n  {\r\n   return a$1?\"1\":\"0\";\r\n  },Mouse.get_MiddlePressed())),\"Keyboard\",View$1.Map(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(Utils.printList(Utils.prettyPrint,$2));\r\n   };\r\n  }(Global.id),Keyboard.get_KeysPressed()))));\r\n  SC$1.getMainDoc=Lazy.Create(function()\r\n  {\r\n   WcSplitter.init(Runtime.Curried(AppFramework.horizontal,5),Runtime.Curried(AppFramework.vertical,5));\r\n   WcTabStrip.init().f();\r\n   return AppFramework.mainDoc();\r\n  });\r\n  SC$1.htmlD=Depend.dependByName(\"AppFrameworkTemplate.html\",AppFrameworkTemplate.html(),Global.id);\r\n  SC$1.startWithHtmlD=(b$11=Depend.depend(),b$11.Delay(function()\r\n  {\r\n   return b$11.Bind(StartAppFramework.htmlD(),function(a$1)\r\n   {\r\n    return b$11.Return(function()\r\n    {\r\n     var d,x,a$2;\r\n     d=self.document.createElement(\"div\");\r\n     self.document.body.appendChild(d);\r\n     d.outerHTML=a$1;\r\n     x=AppFramework.getMainDoc().f();\r\n     a$2=self.document.body;\r\n     Templates.LoadLocalTemplates(\"\");\r\n     Doc.RunAppend(a$2,x);\r\n    });\r\n   });\r\n  }));\r\n  SC$1.defPlg=AppFramework.defaultPlugIn();\r\n  SC$1.defDoc=AppFramework.newDoc(new PlgElemName({\r\n   $:0,\r\n   $0:\"_\"\r\n  }),Lazy.Create(Doc.get_Empty));\r\n  SC$1.defVar=AppFramework.newVar(new PlgElemName({\r\n   $:0,\r\n   $0:\"_\"\r\n  }),Var$2.Create$1(\"\"));\r\n  SC$1.defViw=AppFramework.newViw(new PlgElemName({\r\n   $:0,\r\n   $0:\"_\"\r\n  }),View$1.Const(\"\"));\r\n  SC$1.defAct=AppFramework.newAct(new PlgElemName({\r\n   $:0,\r\n   $0:\"_\"\r\n  }),Global.ignore);\r\n  SC$1.pluginsList=LM.getDocFor(AppFramework.plugIns(),AppFrameworkUI.defPlg(),function()\r\n  {\r\n   return AppFrameworkUI.failCreate(\"plugin\",void 0);\r\n  },null,Runtime.Curried3(AppFrameworkUI.showPlugIn));\r\n  SC$1.plgVarsList=LM.getDocForW(View$1.Map(function($1)\r\n  {\r\n   return $1.plgVars;\r\n  },AppFrameworkUI.pluginsList().get_CurrentW()),function(plgVar)\r\n  {\r\n   return plgVar.varName;\r\n  },AppFrameworkUI.defVar(),function()\r\n  {\r\n   return AppFrameworkUI.failCreate(\"Var\",void 0);\r\n  },null,Runtime.Curried3(AppFrameworkUI.showVar));\r\n  SC$1.plgViewsList=LM.getDocForW(View$1.Map(function($1)\r\n  {\r\n   return $1.plgViews;\r\n  },AppFrameworkUI.pluginsList().get_CurrentW()),function(plgViw)\r\n  {\r\n   return plgViw.viwName;\r\n  },AppFrameworkUI.defViw(),function()\r\n  {\r\n   return AppFrameworkUI.failCreate(\"View\",void 0);\r\n  },null,Runtime.Curried3(AppFrameworkUI.showView));\r\n  SC$1.plgActsList=LM.getDocForW(View$1.Map(function($1)\r\n  {\r\n   return $1.plgActions;\r\n  },AppFrameworkUI.pluginsList().get_CurrentW()),function(plgAct)\r\n  {\r\n   return plgAct.actName;\r\n  },AppFrameworkUI.defAct(),function()\r\n  {\r\n   return AppFrameworkUI.failCreate(\"Action\",void 0);\r\n  },null,Runtime.Curried3(AppFrameworkUI.showAct));\r\n  SC$1.plgDocsList=LM.getDocForW(View$1.Map(function($1)\r\n  {\r\n   return $1.plgDocs;\r\n  },AppFrameworkUI.pluginsList().get_CurrentW()),function(plgDoc)\r\n  {\r\n   return plgDoc.docName;\r\n  },AppFrameworkUI.defDoc(),function()\r\n  {\r\n   return AppFrameworkUI.failCreate(\"Doc\",void 0);\r\n  },null,Runtime.Curried3(AppFrameworkUI.showDoc));\r\n  SC$1.plugInAdded=AppFramework.addPlugIn((b$12=AppFramework.plugin(),b$12.Merge(b$12.Merge(b$12.Merge(b$12.Merge(b$12.Merge(b$12.Name(b$12.Yield(),\"AppFrmkUI\"),\"plugIns_\",AppFrameworkUI.pluginsList().PlugIn(function(x)\r\n  {\r\n   return g$5(f$14(x));\r\n  },function(n)\r\n  {\r\n   return n.get_Id();\r\n  })),\"plgVars_\",AppFrameworkUI.plgVarsList().PlugIn(function(x)\r\n  {\r\n   return g$6(f$15(x));\r\n  },function(n)\r\n  {\r\n   return n.get_Id();\r\n  })),\"plgViews_\",AppFrameworkUI.plgViewsList().PlugIn(function(x)\r\n  {\r\n   return g$7(f$16(x));\r\n  },function(n)\r\n  {\r\n   return n.get_Id();\r\n  })),\"plgActs_\",AppFrameworkUI.plgActsList().PlugIn(function(x)\r\n  {\r\n   return g$8(f$17(x));\r\n  },function(n)\r\n  {\r\n   return n.get_Id();\r\n  })),\"plgDocs_\",AppFrameworkUI.plgDocsList().PlugIn(function(x)\r\n  {\r\n   return g$9(f$18(x));\r\n  },function(n)\r\n  {\r\n   return n.get_Id();\r\n  }))));\r\n  SC$1.splitSemiColon=(f$1=LayoutEngineModule.splitChar(\";\"),(g$1=function(s)\r\n  {\r\n   return Seq.filter(p$19,s);\r\n  },function(x)\r\n  {\r\n   return g$1(f$1(x));\r\n  }));\r\n  SC$1.notEmpty=function(x)\r\n  {\r\n   return g$10(LayoutEngineModule.emptyLine(x));\r\n  };\r\n  SC$1.aV=Var$2.Create$1(4);\r\n  SC$1.pa=NewLY.aV().get_View();\r\n  SC$1.pb=6.2;\r\n  SC$1.currentPlugInNameDef$1=new PlugInName({\r\n   $:0,\r\n   $0:\"NewLYx\"\r\n  });\r\n  SC$1.currentPlugInNameD$1=Depend.dependByName(\"currentPlugInName\",NewLY.currentPlugInNameDef(),Global.id);\r\n  SC$1.name=Var$2.Create$1(\"World\");\r\n  SC$1.enterName=(pf=AppFramework.op_Dereference(NewLY.checkName),(p={\r\n   $:0,\r\n   $0:NewLY.name().get_View()\r\n  },P.New(Operators$2.op_BarGreaterGreater(pf.r,function(f$19)\r\n  {\r\n   return Fun.New(f$19,p);\r\n  }))));\r\n  SC$1.now=(pf$1=AppFramework.op_Dereference(function()\r\n  {\r\n   var n;\r\n   n=new Global.Date(Date.now());\r\n   return n.getFullYear()+\"-\"+(\"0\"+(n.getMonth()+1)).slice(-2)+\"-\"+(\"0\"+n.getDate()).slice(-2)+\" \"+(\"0\"+n.getHours()).slice(-2)+\":\"+(\"0\"+n.getMinutes()).slice(-2)+\":\"+(\"0\"+n.getSeconds()).slice(-2)+\":\"+(\"00\"+n.getMilliseconds()).slice(-3);\r\n  }),(p$1={\r\n   $:0,\r\n   $0:NewLY.name().get_View()\r\n  },P.New(Operators$2.op_BarGreaterGreater(pf$1.r,function(f$19)\r\n  {\r\n   return Fun.New(f$19,p$1);\r\n  }))));\r\n  SC$1.sayHello=(sayHello_0=(c=(vf=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(extractDoc)\r\n  {\r\n   var p$20;\r\n   p$20={\r\n    $:1,\r\n    $0:[extractDoc(\"Hello @{name}!\")]\r\n   };\r\n   return P.New(Operators$2.op_BarGreaterGreater(vf.r,function(f$19)\r\n   {\r\n    return Fun.New(f$19,p$20);\r\n   }));\r\n  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)\r\n  {\r\n   return AppFramework.unwrapBindWrap(function(c$13)\r\n   {\r\n    return Fun.New(c$13.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{\r\n     $:0,\r\n     $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))\r\n    }:{\r\n     $:0,\r\n     $0:View$1.Apply(aF.f.$0,aF.p.$0)\r\n    }:aF.p.$==0?{\r\n     $:0,\r\n     $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)\r\n    }:{\r\n     $:1,\r\n     $0:aF.f.$0(aF.p.$0)\r\n    }),c$13.p));\r\n   },c);\r\n  },NewLY.enterName().r)),(a=(vf$1=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(extractDoc)\r\n  {\r\n   var p$20;\r\n   p$20={\r\n    $:1,\r\n    $0:[extractDoc(\"How are you?\")]\r\n   };\r\n   return P.New(Operators$2.op_BarGreaterGreater(vf$1.r,function(f$19)\r\n   {\r\n    return Fun.New(f$19,p$20);\r\n   }));\r\n  },AppFramework.extractDocD())),(c$1=(vf$2=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(aF)\r\n  {\r\n   var p$20;\r\n   p$20={\r\n    $:1,\r\n    $0:[AppFramework.makeAViewDoc(function()\r\n    {\r\n     var m;\r\n     m=aF.f.$==0?aF.p.$==1?{\r\n      $:0,\r\n      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))\r\n     }:{\r\n      $:0,\r\n      $0:View$1.Apply(aF.f.$0,aF.p.$0)\r\n     }:aF.p.$==0?{\r\n      $:0,\r\n      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)\r\n     }:{\r\n      $:1,\r\n      $0:aF.f.$0(aF.p.$0)\r\n     };\r\n     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;\r\n    })]\r\n   };\r\n   return P.New(Operators$2.op_BarGreaterGreater(vf$2.r,function(f$19)\r\n   {\r\n    return Fun.New(f$19,p$20);\r\n   }));\r\n  },sayHello_0.r)),AppFramework.bindWrap(function(aF)\r\n  {\r\n   return AppFramework.unwrapBindWrap(function(c$13)\r\n   {\r\n    return Fun.New(c$13.f,Val.addDoc(AppFramework.makeAViewDoc(function()\r\n    {\r\n     var m;\r\n     m=aF.f.$==0?aF.p.$==1?{\r\n      $:0,\r\n      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))\r\n     }:{\r\n      $:0,\r\n      $0:View$1.Apply(aF.f.$0,aF.p.$0)\r\n     }:aF.p.$==0?{\r\n      $:0,\r\n      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)\r\n     }:{\r\n      $:1,\r\n      $0:aF.f.$0(aF.p.$0)\r\n     };\r\n     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;\r\n    }),c$13.p));\r\n   },c$1);\r\n  },a.r))));\r\n  SC$1.aString=Var$2.Lens(NewLY.aV(),Global.String,function(a$1,v)\r\n  {\r\n   return Operators$3.toInt(Global.Number(v));\r\n  });\r\n  SC$1.main0=(pc=(pf$2=AppFramework.op_Dereference(function(a$1)\r\n  {\r\n   return function(b$19)\r\n   {\r\n    return NewLY.concat(a$1,b$19);\r\n   };\r\n  }),(p$2={\r\n   $:0,\r\n   $0:NewLY.aV().get_View()\r\n  },P.New(Operators$2.op_BarGreaterGreater(pf$2.r,function(f$19)\r\n  {\r\n   return Fun.New(f$19,p$2);\r\n  })))),(p$3={\r\n   $:1,\r\n   $0:3.2\r\n  },P.New(Operators$2.op_BarGreaterGreater(pc.r,function(c$13)\r\n  {\r\n   return Fun.New(c$13.f.$==0?c$13.p.$==1?{\r\n    $:0,\r\n    $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))\r\n   }:{\r\n    $:0,\r\n    $0:View$1.Apply(c$13.f.$0,c$13.p.$0)\r\n   }:c$13.p.$==0?{\r\n    $:0,\r\n    $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)\r\n   }:{\r\n    $:1,\r\n    $0:c$13.f.$0(c$13.p.$0)\r\n   },p$3);\r\n  }))));\r\n  SC$1.main1=(pc$1=(vf$3=AppFramework.op_Dereference((Runtime.Curried3(function($1,$2,$3)\r\n  {\r\n   return $1(\"result = \"+Utils.toSafe($2)+\" \"+Utils.toSafe($3));\r\n  }))(Global.id)),AppFramework.bindWrap(function(aF)\r\n  {\r\n   var p$20;\r\n   p$20=aF.f.$==0?aF.p.$==1?{\r\n    $:0,\r\n    $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))\r\n   }:{\r\n    $:0,\r\n    $0:View$1.Apply(aF.f.$0,aF.p.$0)\r\n   }:aF.p.$==0?{\r\n    $:0,\r\n    $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)\r\n   }:{\r\n    $:1,\r\n    $0:aF.f.$0(aF.p.$0)\r\n   };\r\n   return P.New(Operators$2.op_BarGreaterGreater(vf$3.r,function(f$19)\r\n   {\r\n    return Fun.New(f$19,p$20);\r\n   }));\r\n  },NewLY.main0().r)),(p$4={\r\n   $:1,\r\n   $0:\"main0\"\r\n  },P.New(Operators$2.op_BarGreaterGreater(pc$1.r,function(c$13)\r\n  {\r\n   return Fun.New(c$13.f.$==0?c$13.p.$==1?{\r\n    $:0,\r\n    $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))\r\n   }:{\r\n    $:0,\r\n    $0:View$1.Apply(c$13.f.$0,c$13.p.$0)\r\n   }:c$13.p.$==0?{\r\n    $:0,\r\n    $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)\r\n   }:{\r\n    $:1,\r\n    $0:c$13.f.$0(c$13.p.$0)\r\n   },p$4);\r\n  }))));\r\n  SC$1.main=(c$2=(c$3=(c$4=(c$5=(c$6=(c$7=(c$8=(c$9=(c$10=(vf$4=AppFramework.op_Dereference((Runtime.Curried3(Doc.Element))(\"h3\")),AppFramework.bindWrap(function(extractAts)\r\n  {\r\n   var p$20;\r\n   p$20={\r\n    $:1,\r\n    $0:extractAts(\"color:@{name}; background:red; click=@{AppFramework.Hello}\")\r\n   };\r\n   return P.New(Operators$2.op_BarGreaterGreater(vf$4.r,function(f$19)\r\n   {\r\n    return Fun.New(f$19,p$20);\r\n   }));\r\n  },AppFramework.extractAtsD())),AppFramework.bindWrap(function(extractDoc)\r\n  {\r\n   var p$20;\r\n   p$20={\r\n    $:1,\r\n    $0:[extractDoc(\"MAIN:\")]\r\n   };\r\n   return P.New(Operators$2.op_BarGreaterGreater(c$10.r,function(c$13)\r\n   {\r\n    return Fun.New(c$13.f.$==0?c$13.p.$==1?{\r\n     $:0,\r\n     $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))\r\n    }:{\r\n     $:0,\r\n     $0:View$1.Apply(c$13.f.$0,c$13.p.$0)\r\n    }:c$13.p.$==0?{\r\n     $:0,\r\n     $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)\r\n    }:{\r\n     $:1,\r\n     $0:c$13.f.$0(c$13.p.$0)\r\n    },p$20);\r\n   }));\r\n  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)\r\n  {\r\n   return AppFramework.unwrapBindWrap(function(c$13)\r\n   {\r\n    return Fun.New(c$13.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{\r\n     $:0,\r\n     $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))\r\n    }:{\r\n     $:0,\r\n     $0:View$1.Apply(aF.f.$0,aF.p.$0)\r\n    }:aF.p.$==0?{\r\n     $:0,\r\n     $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)\r\n    }:{\r\n     $:1,\r\n     $0:aF.f.$0(aF.p.$0)\r\n    }),c$13.p));\r\n   },c$9);\r\n  },NewLY.main1().r)),AppFramework.bindWrap(function(aF)\r\n  {\r\n   return AppFramework.unwrapBindWrap(function(c$13)\r\n   {\r\n    return Fun.New(c$13.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{\r\n     $:0,\r\n     $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))\r\n    }:{\r\n     $:0,\r\n     $0:View$1.Apply(aF.f.$0,aF.p.$0)\r\n    }:aF.p.$==0?{\r\n     $:0,\r\n     $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)\r\n    }:{\r\n     $:1,\r\n     $0:aF.f.$0(aF.p.$0)\r\n    }),c$13.p));\r\n   },c$8);\r\n  },NewLY.main1().r)),AppFramework.bindWrap(function(extractDoc)\r\n  {\r\n   return AppFramework.unwrapBindWrap(function(c$13)\r\n   {\r\n    return Fun.New(c$13.f,Val.addDoc(extractDoc(\":\"),c$13.p));\r\n   },c$7);\r\n  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)\r\n  {\r\n   return AppFramework.unwrapBindWrap(function(c$13)\r\n   {\r\n    return Fun.New(c$13.f,Val.addDoc(AppFramework.makeAViewDoc(function()\r\n    {\r\n     var m;\r\n     m=aF.f.$==0?aF.p.$==1?{\r\n      $:0,\r\n      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))\r\n     }:{\r\n      $:0,\r\n      $0:View$1.Apply(aF.f.$0,aF.p.$0)\r\n     }:aF.p.$==0?{\r\n      $:0,\r\n      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)\r\n     }:{\r\n      $:1,\r\n      $0:aF.f.$0(aF.p.$0)\r\n     };\r\n     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;\r\n    }),c$13.p));\r\n   },c$6);\r\n  },NewLY.sayHello().r)),AppFramework.bindWrap(function(extractDoc)\r\n  {\r\n   return AppFramework.unwrapBindWrap(function(c$13)\r\n   {\r\n    return Fun.New(c$13.f,Val.addDoc(extractDoc(\":\"),c$13.p));\r\n   },c$5);\r\n  },AppFramework.extractDocD())),AppFramework.bindWrap(function(extractDoc)\r\n  {\r\n   return AppFramework.unwrapBindWrap(function(c$13)\r\n   {\r\n    return Fun.New(c$13.f,Val.addDoc(extractDoc(\" Más >> \"),c$13.p));\r\n   },c$4);\r\n  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)\r\n  {\r\n   return AppFramework.unwrapBindWrap(function(c$13)\r\n   {\r\n    return Fun.New(c$13.f,Val.addDoc(AppFramework.makeAViewDoc(function()\r\n    {\r\n     var m;\r\n     m=aF.f.$==0?aF.p.$==1?{\r\n      $:0,\r\n      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))\r\n     }:{\r\n      $:0,\r\n      $0:View$1.Apply(aF.f.$0,aF.p.$0)\r\n     }:aF.p.$==0?{\r\n      $:0,\r\n      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)\r\n     }:{\r\n      $:1,\r\n      $0:aF.f.$0(aF.p.$0)\r\n     };\r\n     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;\r\n    }),c$13.p));\r\n   },c$3);\r\n  },NewLY.sayHello().r)),AppFramework.bindWrap(function(extractDoc)\r\n  {\r\n   return AppFramework.unwrapBindWrap(function(c$13)\r\n   {\r\n    return Fun.New(c$13.f,Val.addDoc(extractDoc(\" <<\"),c$13.p));\r\n   },c$2);\r\n  },AppFramework.extractDocD()));\r\n  SC$1.main2=AppFramework.makeAViewDoc(function()\r\n  {\r\n   return Doc.Element(\"h4\",[AttrModule.Dynamic(\"style\",View$1.Map(function($1)\r\n   {\r\n    return\"color:\"+$1;\r\n   },NewLY.name().get_View()))],[Doc.TextNode(\"MAIN2:\"),Doc.TextView(NewLY.name().get_View())]);\r\n  });\r\n  SC$1.appFwk=(c$11=(vf$5=AppFramework.op_Dereference((Runtime.Curried3(Doc.Element))(\"div\")),AppFramework.bindWrap(function(extractAts)\r\n  {\r\n   var p$20;\r\n   p$20={\r\n    $:1,\r\n    $0:extractAts(\"color:@{name}\")\r\n   };\r\n   return P.New(Operators$2.op_BarGreaterGreater(vf$5.r,function(f$19)\r\n   {\r\n    return Fun.New(f$19,p$20);\r\n   }));\r\n  },AppFramework.extractAtsD())),AppFramework.bindWrap(function(extractDoc)\r\n  {\r\n   var p$20;\r\n   p$20={\r\n    $:1,\r\n    $0:[extractDoc(\"@{AppFramework.AppFwkClient}\")]\r\n   };\r\n   return P.New(Operators$2.op_BarGreaterGreater(c$11.r,function(c$13)\r\n   {\r\n    return Fun.New(c$13.f.$==0?c$13.p.$==1?{\r\n     $:0,\r\n     $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))\r\n    }:{\r\n     $:0,\r\n     $0:View$1.Apply(c$13.f.$0,c$13.p.$0)\r\n    }:c$13.p.$==0?{\r\n     $:0,\r\n     $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)\r\n    }:{\r\n     $:1,\r\n     $0:c$13.f.$0(c$13.p.$0)\r\n    },p$20);\r\n   }));\r\n  },AppFramework.extractDocD()));\r\n  SC$1.split=(c$12=(vf$6=AppFramework.op_Dereference(Runtime.Curried(LayoutEngineModule.variableSplitter,2,[false,0,50,100])),AppFramework.bindWrap(function(aF)\r\n  {\r\n   var p$20;\r\n   p$20={\r\n    $:1,\r\n    $0:AppFramework.makeAViewDoc(function()\r\n    {\r\n     var m;\r\n     m=aF.f.$==0?aF.p.$==1?{\r\n      $:0,\r\n      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))\r\n     }:{\r\n      $:0,\r\n      $0:View$1.Apply(aF.f.$0,aF.p.$0)\r\n     }:aF.p.$==0?{\r\n      $:0,\r\n      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)\r\n     }:{\r\n      $:1,\r\n      $0:aF.f.$0(aF.p.$0)\r\n     };\r\n     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;\r\n    })\r\n   };\r\n   return P.New(Operators$2.op_BarGreaterGreater(vf$6.r,function(f$19)\r\n   {\r\n    return Fun.New(f$19,p$20);\r\n   }));\r\n  },NewLY.appFwk().r)),AppFramework.bindWrap(function(aF)\r\n  {\r\n   var p$20;\r\n   p$20={\r\n    $:1,\r\n    $0:AppFramework.makeAViewDoc(function()\r\n    {\r\n     var m;\r\n     m=aF.f.$==0?aF.p.$==1?{\r\n      $:0,\r\n      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))\r\n     }:{\r\n      $:0,\r\n      $0:View$1.Apply(aF.f.$0,aF.p.$0)\r\n     }:aF.p.$==0?{\r\n      $:0,\r\n      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)\r\n     }:{\r\n      $:1,\r\n      $0:aF.f.$0(aF.p.$0)\r\n     };\r\n     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;\r\n    })\r\n   };\r\n   return P.New(Operators$2.op_BarGreaterGreater(c$12.r,function(c$13)\r\n   {\r\n    return Fun.New(c$13.f.$==0?c$13.p.$==1?{\r\n     $:0,\r\n     $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))\r\n    }:{\r\n     $:0,\r\n     $0:View$1.Apply(c$13.f.$0,c$13.p.$0)\r\n    }:c$13.p.$==0?{\r\n     $:0,\r\n     $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)\r\n    }:{\r\n     $:1,\r\n     $0:c$13.f.$0(c$13.p.$0)\r\n    },p$20);\r\n   }));\r\n  },NewLY.main().r));\r\n  SC$1.split2=(pc$2=(vf$7=AppFramework.op_Dereference(Runtime.Curried(LayoutEngineModule.variableSplitter,2,[false,0,50,100])),AppFramework.bindWrap(function(aF)\r\n  {\r\n   var p$20;\r\n   p$20={\r\n    $:1,\r\n    $0:AppFramework.makeAViewDoc(function()\r\n    {\r\n     var m;\r\n     m=aF.f.$==0?aF.p.$==1?{\r\n      $:0,\r\n      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))\r\n     }:{\r\n      $:0,\r\n      $0:View$1.Apply(aF.f.$0,aF.p.$0)\r\n     }:aF.p.$==0?{\r\n      $:0,\r\n      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)\r\n     }:{\r\n      $:1,\r\n      $0:aF.f.$0(aF.p.$0)\r\n     };\r\n     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;\r\n    })\r\n   };\r\n   return P.New(Operators$2.op_BarGreaterGreater(vf$7.r,function(f$19)\r\n   {\r\n    return Fun.New(f$19,p$20);\r\n   }));\r\n  },NewLY.appFwk().r)),(p$5={\r\n   $:1,\r\n   $0:NewLY.main2()\r\n  },P.New(Operators$2.op_BarGreaterGreater(pc$2.r,function(c$13)\r\n  {\r\n   return Fun.New(c$13.f.$==0?c$13.p.$==1?{\r\n    $:0,\r\n    $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))\r\n   }:{\r\n    $:0,\r\n    $0:View$1.Apply(c$13.f.$0,c$13.p.$0)\r\n   }:c$13.p.$==0?{\r\n    $:0,\r\n    $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)\r\n   }:{\r\n    $:1,\r\n    $0:c$13.f.$0(c$13.p.$0)\r\n   },p$5);\r\n  }))));\r\n  SC$1.nodeRefToDocD=(b$13=Depend.depend(),b$13.Delay(function()\r\n  {\r\n   return b$13.Bind(Extract0.getDocFromTextTypesD(),function(a$1)\r\n   {\r\n    function f$19(a$2)\r\n    {\r\n     var $1;\r\n     return(a$2.$==1?($1=a$2.$0.$0,false):a$2.$==2?($1=a$2.$0.$0,false):a$2.$==3?($1=a$2.$0.$0,false):true)?List.map(NewLY.textValToTextType,a$2.$0):List.ofArray([NewLY.itemRefToTextType($1)]);\r\n    }\r\n    return b$13.Return(function(x)\r\n    {\r\n     return a$1(f$19(x));\r\n    });\r\n   });\r\n  }));\r\n  SC$1.varRefToVarD=(b$14=Depend.depend(),b$14.Delay(function()\r\n  {\r\n   return b$14.Bind(NewLY.currentPlugInNameD(),function(a$1)\r\n   {\r\n    return b$14.Return(function(a$2)\r\n    {\r\n     var r,o$1,o$2,t;\r\n     r=NewLY.itemRefToString(a$2.$0);\r\n     o$1=(o$2=(t=(AppFramework.splitName(a$1))(r),AppFramework.tryGetVar(t[0],t[1])),o$2==null?null:{\r\n      $:1,\r\n      $0:o$2.$0.varVar\r\n     });\r\n     return o$1==null?new FromView.New(View$1.Const((function($1)\r\n     {\r\n      return function($2)\r\n      {\r\n       return $1(\"Could not find var \"+Utils.toSafe($2));\r\n      };\r\n     }(Global.id))(r)),Global.ignore):o$1.$0;\r\n    });\r\n   });\r\n  }));\r\n  SC$1.actRefToActD=(b$15=Depend.depend(),b$15.Delay(function()\r\n  {\r\n   return b$15.Bind(NewLY.currentPlugInNameD(),function(a$1)\r\n   {\r\n    return b$15.Return(function(a$2)\r\n    {\r\n     var r,o$1,t;\r\n     r=NewLY.itemRefToString(a$2.$0);\r\n     o$1=(t=(AppFramework.splitName(a$1))(r),AppFramework.tryGetAct(t[0],t[1]));\r\n     return o$1==null?AppFramework.newAct(new PlgElemName({\r\n      $:0,\r\n      $0:r\r\n     }),function()\r\n     {\r\n      ((function($1)\r\n      {\r\n       return function($2)\r\n       {\r\n        return $1(\"Could not find action \"+Utils.toSafe($2));\r\n       };\r\n      }(function(s)\r\n      {\r\n       console.log(s);\r\n      }))(r));\r\n     }):o$1.$0;\r\n    });\r\n   });\r\n  }));\r\n  SC$1.getParamD=(b$16=Depend.depend(),b$16.Delay(function()\r\n  {\r\n   return b$16.Bind(NewLY.currentPlugInNameD(),function(a$1)\r\n   {\r\n    return b$16.Bind(Extract0.getTextValFromSeqD(),function(a$2)\r\n    {\r\n     return b$16.Return(function(p$20)\r\n     {\r\n      var refToSplit,g$11,r,f$19,m,g$12,t,r$1,f$20,m$1,g$13,g$14,t$1,r$2,f$21,m$2,g$15,g$16,t$2,r$3,f$22,m$3,g$17,t$3;\r\n      function f$23(d$4)\r\n      {\r\n       return d$4.docDoc;\r\n      }\r\n      function d()\r\n      {\r\n       return(function($1)\r\n       {\r\n        return function($2)\r\n        {\r\n         return $1(\"missing ref Doc \"+LayoutEngine_GeneratedPrintf.p$1($2));\r\n        };\r\n       }(Global.id))(r);\r\n      }\r\n      function f$24(v)\r\n      {\r\n       return v.varVar.get_View();\r\n      }\r\n      function d$1()\r\n      {\r\n       return View$1.Const((function($1)\r\n       {\r\n        return function($2)\r\n        {\r\n         return $1(\"missing ref Var \"+LayoutEngine_GeneratedPrintf.p$1($2));\r\n        };\r\n       }(Global.id))(r$1));\r\n      }\r\n      function f$25(v)\r\n      {\r\n       return v.viwView;\r\n      }\r\n      function d$2()\r\n      {\r\n       return View$1.Const((function($1)\r\n       {\r\n        return function($2)\r\n        {\r\n         return $1(\"missing ref View \"+LayoutEngine_GeneratedPrintf.p$1($2));\r\n        };\r\n       }(Global.id))(r$2));\r\n      }\r\n      function f$26(v)\r\n      {\r\n       return v.actFunction;\r\n      }\r\n      function d$3()\r\n      {\r\n       return(function($1)\r\n       {\r\n        return function($2)\r\n        {\r\n         return $1(\"missing ref Action \"+LayoutEngine_GeneratedPrintf.p$1($2));\r\n        };\r\n       }(Global.id))(r$3);\r\n      }\r\n      refToSplit=(g$11=AppFramework.splitName(a$1),function(x)\r\n      {\r\n       return g$11(NewLY.itemRefToString(x));\r\n      });\r\n      return p$20.$==1?(r=p$20.$0.$0,View$1.Map((f$19=(m=function(x)\r\n      {\r\n       var v;\r\n       v=f$23(x);\r\n       return v;\r\n      },function(o$1)\r\n      {\r\n       return o$1==null?null:{\r\n        $:1,\r\n        $0:m(o$1.$0)\r\n       };\r\n      }),(g$12=function(o$1)\r\n      {\r\n       return o$1==null?d():o$1.$0;\r\n      },function(x)\r\n      {\r\n       return g$12(f$19(x));\r\n      })),(t=refToSplit(r),AppFramework.tryGetDocW(t[0],t[1])))):p$20.$==2?(r$1=p$20.$0.$0,View$1.Bind((f$20=(m$1=(g$13=function(a$3)\r\n      {\r\n       return View$1.Map(Global.id,a$3);\r\n      },function(x)\r\n      {\r\n       return g$13(f$24(x));\r\n      }),function(o$1)\r\n      {\r\n       return o$1==null?null:{\r\n        $:1,\r\n        $0:m$1(o$1.$0)\r\n       };\r\n      }),(g$14=function(o$1)\r\n      {\r\n       return o$1==null?d$1():o$1.$0;\r\n      },function(x)\r\n      {\r\n       return g$14(f$20(x));\r\n      })),(t$1=refToSplit(r$1),AppFramework.tryGetVarW(t$1[0],t$1[1])))):p$20.$==3?(r$2=p$20.$0.$0,View$1.Bind((f$21=(m$2=(g$15=function(a$3)\r\n      {\r\n       return View$1.Map(Global.id,a$3);\r\n      },function(x)\r\n      {\r\n       return g$15(f$25(x));\r\n      }),function(o$1)\r\n      {\r\n       return o$1==null?null:{\r\n        $:1,\r\n        $0:m$2(o$1.$0)\r\n       };\r\n      }),(g$16=function(o$1)\r\n      {\r\n       return o$1==null?d$2():o$1.$0;\r\n      },function(x)\r\n      {\r\n       return g$16(f$21(x));\r\n      })),(t$2=refToSplit(r$2),AppFramework.tryGetViwW(t$2[0],t$2[1])))):p$20.$==4?(r$3=p$20.$0.$0,View$1.Map((f$22=(m$3=function(x)\r\n      {\r\n       var v;\r\n       v=f$26(x);\r\n       return v;\r\n      },function(o$1)\r\n      {\r\n       return o$1==null?null:{\r\n        $:1,\r\n        $0:m$3(o$1.$0)\r\n       };\r\n      }),(g$17=function(o$1)\r\n      {\r\n       return o$1==null?d$3():o$1.$0;\r\n      },function(x)\r\n      {\r\n       return g$17(f$22(x));\r\n      })),(t$3=refToSplit(r$3),AppFramework.tryGetActW(t$3[0],t$3[1])))):View$1.Map(Global.id,Val.toView(a$2(List.map(NewLY.textValToTextType,p$20.$0))));\r\n     });\r\n    });\r\n   });\r\n  }));\r\n  SC$1.getParam2D=(b$17=Depend.depend(),b$17.Delay(function()\r\n  {\r\n   return b$17.Bind(NewLY.currentPlugInNameD(),function(a$1)\r\n   {\r\n    return b$17.Bind(Extract0.getTextValFromSeqD(),function()\r\n    {\r\n     return b$17.Return(function(p$20)\r\n     {\r\n      var toAbs,f$19,g$11,$1;\r\n      toAbs=(f$19=NewLY.itemRefToAbsolute(a$1.get_Id()),(g$11=function($2)\r\n      {\r\n       return function($3)\r\n       {\r\n        return $2(\"@{\"+Utils.toSafe($3)+\"}\");\r\n       };\r\n      }(Global.id),function(x)\r\n      {\r\n       return g$11(f$19(x));\r\n      }));\r\n      return(p$20.$==3?($1=p$20.$0.$0,false):p$20.$==1?($1=p$20.$0.$0,false):p$20.$==2?($1=p$20.$0.$0,false):p$20.$==4?($1=p$20.$0.$0,false):true)?Strings.concat(\"\",Seq.map(function(a$2)\r\n      {\r\n       var $2;\r\n       return(a$2.$==1?($2=a$2.$0.$0,false):a$2.$==3?($2=a$2.$0.$0,false):a$2.$==4?($2=a$2.$0.$0,false):a$2.$==2?($2=a$2.$0.$0,false):true)?a$2.$0:toAbs($2);\r\n      },p$20.$0)):toAbs($1);\r\n     });\r\n    });\r\n   });\r\n  }));\r\n  SC$1.getParamTextD=(b$18=Depend.depend(),b$18.Delay(function()\r\n  {\r\n   return b$18.Bind(NewLY.currentPlugInNameD(),function(a$1)\r\n   {\r\n    return b$18.Bind(Extract0.getTextValFromSeqD(),function(a$2)\r\n    {\r\n     return b$18.Return(function(p$20)\r\n     {\r\n      return function(f$19)\r\n      {\r\n       var refToSplit,g$11,o$1,t,o$2,t$1,o$3,t$2,o$4,t$3;\r\n       refToSplit=(g$11=AppFramework.splitName(a$1),function(x)\r\n       {\r\n        return g$11(NewLY.itemRefToString(x));\r\n       });\r\n       return p$20.$==1?(o$1=(t=refToSplit(p$20.$0.$0),AppFramework.tryGetDoc(t[0],t[1])),o$1==null?null:f$19(o$1.$0.docDoc)):p$20.$==2?(o$2=(t$1=refToSplit(p$20.$0.$0),AppFramework.tryGetVar(t$1[0],t$1[1])),o$2==null?null:View$1.Get(function(x)\r\n       {\r\n        return f$19(Global.id(x));\r\n       },o$2.$0.varVar.get_View())):p$20.$==3?(o$3=(t$2=refToSplit(p$20.$0.$0),AppFramework.tryGetViw(t$2[0],t$2[1])),o$3==null?null:View$1.Get(function(x)\r\n       {\r\n        return f$19(Global.id(x));\r\n       },o$3.$0.viwView)):p$20.$==4?(o$4=(t$3=refToSplit(p$20.$0.$0),AppFramework.tryGetAct(t$3[0],t$3[1])),o$4==null?null:f$19(o$4.$0.actFunction)):View$1.Get(function(x)\r\n       {\r\n        return f$19(Global.id(x));\r\n       },Val.toView(a$2(List.map(NewLY.textValToTextType,p$20.$0))));\r\n      };\r\n     });\r\n    });\r\n   });\r\n  }));\r\n  SC$1.initVal=\"-<InitValue>-\";\r\n  SC$1.defVarM0=(p$6=(cache=new Dictionary.New$5(),[[checkO,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return getOrAdd$13($1,$2);\r\n   };\r\n  }],function()\r\n  {\r\n   cache.Clear();\r\n  }]),(getOrAdd=p$6[0][1],[function(p$20)\r\n  {\r\n   return(getOrAdd(p$20))(function($1)\r\n   {\r\n    return NewLY.defVar($1[0],$1[1],$1[2]);\r\n   });\r\n  },p$6[1]]))[0];\r\n  SC$1.defDocFM=(p$7=(cache$1=new Dictionary.New$5(),[[checkO$1,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return getOrAdd$14($1,$2);\r\n   };\r\n  }],function()\r\n  {\r\n   cache$1.Clear();\r\n  }]),(getOrAdd$1=p$7[0][1],[function(p$20)\r\n  {\r\n   return(getOrAdd$1(p$20))(function($1)\r\n   {\r\n    return NewLY.defDocF($1[0],$1[1],$1[2],$1[3]);\r\n   });\r\n  },p$7[1]]))[0];\r\n  SC$1.defActionM=(p$8=(cache$2=new Dictionary.New$5(),[[checkO$2,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return getOrAdd$15($1,$2);\r\n   };\r\n  }],function()\r\n  {\r\n   cache$2.Clear();\r\n  }]),(getOrAdd$2=p$8[0][1],[function(p$20)\r\n  {\r\n   return(getOrAdd$2(p$20))(function($1)\r\n   {\r\n    return NewLY.defAction($1[0],$1[1],$1[2],$1[3]);\r\n   });\r\n  },p$8[1]]))[0];\r\n  SC$1.defActionsM=(p$9=(cache$3=new Dictionary.New$5(),[[checkO$3,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return getOrAdd$16($1,$2);\r\n   };\r\n  }],function()\r\n  {\r\n   cache$3.Clear();\r\n  }]),(getOrAdd$3=p$9[0][1],[function(p$20)\r\n  {\r\n   return(getOrAdd$3(p$20))(function($1)\r\n   {\r\n    return NewLY.defActions($1[0],$1[1],$1[2]);\r\n   });\r\n  },p$9[1]]))[0];\r\n  SC$1.defButtonM=(p$10=(cache$4=new Dictionary.New$5(),[[checkO$4,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return getOrAdd$17($1,$2);\r\n   };\r\n  }],function()\r\n  {\r\n   cache$4.Clear();\r\n  }]),(getOrAdd$4=p$10[0][1],[function(p$20)\r\n  {\r\n   return(getOrAdd$4(p$20))(function($1)\r\n   {\r\n    return NewLY.defButton($1[0],$1[1],$1[2],$1[3],$1[4]);\r\n   });\r\n  },p$10[1]]))[0];\r\n  SC$1.defInputM=(p$11=(cache$5=new Dictionary.New$5(),[[checkO$5,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return getOrAdd$18($1,$2);\r\n   };\r\n  }],function()\r\n  {\r\n   cache$5.Clear();\r\n  }]),(getOrAdd$5=p$11[0][1],[function(p$20)\r\n  {\r\n   return(getOrAdd$5(p$20))(function($1)\r\n   {\r\n    return NewLY.defInput($1[0],$1[1],$1[2],$1[3]);\r\n   });\r\n  },p$11[1]]))[0];\r\n  SC$1.defTextAreaM=(p$12=(cache$6=new Dictionary.New$5(),[[checkO$6,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return getOrAdd$19($1,$2);\r\n   };\r\n  }],function()\r\n  {\r\n   cache$6.Clear();\r\n  }]),(getOrAdd$6=p$12[0][1],[function(p$20)\r\n  {\r\n   return(getOrAdd$6(p$20))(function($1)\r\n   {\r\n    return NewLY.defTextArea($1[0],$1[1],$1[2],$1[3]);\r\n   });\r\n  },p$12[1]]))[0];\r\n  SC$1.defElementM=(p$13=(cache$7=new Dictionary.New$5(),[[checkO$7,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return getOrAdd$20($1,$2);\r\n   };\r\n  }],function()\r\n  {\r\n   cache$7.Clear();\r\n  }]),(getOrAdd$7=p$13[0][1],[function(p$20)\r\n  {\r\n   return(getOrAdd$7(p$20))(function($1)\r\n   {\r\n    return NewLY.defElement($1[0],$1[1],$1[2],$1[3],$1[4]);\r\n   });\r\n  },p$13[1]]))[0];\r\n  SC$1.defConcatM=(p$14=(cache$8=new Dictionary.New$5(),[[checkO$8,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return getOrAdd$21($1,$2);\r\n   };\r\n  }],function()\r\n  {\r\n   cache$8.Clear();\r\n  }]),(getOrAdd$8=p$14[0][1],[function(p$20)\r\n  {\r\n   return(getOrAdd$8(p$20))(function($1)\r\n   {\r\n    return NewLY.defConcat($1[0],$1[1],$1[2]);\r\n   });\r\n  },p$14[1]]))[0];\r\n  SC$1.defViewM=(p$15=(cache$9=new Dictionary.New$5(),[[checkO$9,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return getOrAdd$22($1,$2);\r\n   };\r\n  }],function()\r\n  {\r\n   cache$9.Clear();\r\n  }]),(getOrAdd$9=p$15[0][1],[function(p$20)\r\n  {\r\n   return(getOrAdd$9(p$20))(function($1)\r\n   {\r\n    return NewLY.defView($1[0],$1[1],$1[2]);\r\n   });\r\n  },p$15[1]]))[0];\r\n  SC$1.defViewJSM=(p$16=(cache$10=new Dictionary.New$5(),[[checkO$10,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return getOrAdd$23($1,$2);\r\n   };\r\n  }],function()\r\n  {\r\n   cache$10.Clear();\r\n  }]),(getOrAdd$10=p$16[0][1],[function(p$20)\r\n  {\r\n   return(getOrAdd$10(p$20))(function($1)\r\n   {\r\n    return NewLY.defViewJS($1[0],$1[1],$1[2]);\r\n   });\r\n  },p$16[1]]))[0];\r\n  SC$1.defSplitterM=(p$17=(cache$11=new Dictionary.New$5(),[[checkO$11,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return getOrAdd$24($1,$2);\r\n   };\r\n  }],function()\r\n  {\r\n   cache$11.Clear();\r\n  }]),(getOrAdd$11=p$17[0][1],[function(p$20)\r\n  {\r\n   return(getOrAdd$11(p$20))(function($1)\r\n   {\r\n    return NewLY.defSplitter($1[0],$1[1],$1[2],$1[3],$1[4],$1[5]);\r\n   });\r\n  },p$17[1]]))[0];\r\n  SC$1.defTemplateM=(p$18=(cache$12=new Dictionary.New$5(),[[checkO$12,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return getOrAdd$25($1,$2);\r\n   };\r\n  }],function()\r\n  {\r\n   cache$12.Clear();\r\n  }]),(getOrAdd$12=p$18[0][1],[function(p$20)\r\n  {\r\n   return(getOrAdd$12(p$20))(function($1)\r\n   {\r\n    return NewLY.defTemplate($1[0],$1[1],$1[2]);\r\n   });\r\n  },p$18[1]]))[0];\r\n  o=AppFramework.tryGetPlugIn(AppFramework.defPlugInName());\r\n  o==null?void 0:o.$0.plgActions.Append(AppFramework.newActF(new PlgElemName({\r\n   $:0,\r\n   $0:\"AddLayout\"\r\n  }),{\r\n   $:2,\r\n   $0:function(n)\r\n   {\r\n    return function(l)\r\n    {\r\n     return NewLY.addNewLayoutAct(n,l);\r\n    };\r\n   },\r\n   $1:\"[Name]\",\r\n   $2:\"[Layout]\"\r\n  }));\r\n };\r\n LayoutEngine_GeneratedPrintf.p=function($1)\r\n {\r\n  return\"PlgElemName \"+Utils.prettyPrint($1.$0);\r\n };\r\n GeneratedPrintf.p=function($1)\r\n {\r\n  return\"{\"+(\"docName = \"+LayoutEngine_GeneratedPrintf.p($1.docName))+\"; \"+(\"docDoc = \"+Utils.prettyPrint($1.docDoc))+\"}\";\r\n };\r\n LayoutEngine_GeneratedPrintf.p$1=function($1)\r\n {\r\n  return $1.$==1?\"FullRef (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\")\":\"LocalRef \"+Utils.prettyPrint($1.$0);\r\n };\r\n LayoutEngine_Templates.wcompsplitterver=function(h)\r\n {\r\n  Templates.LoadLocalTemplates(\"appframework\");\r\n  return h?Templates.NamedTemplate(\"appframework\",{\r\n   $:1,\r\n   $0:\"wcompsplitterver\"\r\n  },h):void 0;\r\n };\r\n LayoutEngine_Templates.wcompsplitterhor=function(h)\r\n {\r\n  Templates.LoadLocalTemplates(\"appframework\");\r\n  return h?Templates.NamedTemplate(\"appframework\",{\r\n   $:1,\r\n   $0:\"wcompsplitterhor\"\r\n  },h):void 0;\r\n };\r\n LayoutEngine_Templates.appframework=function(h)\r\n {\r\n  Templates.LoadLocalTemplates(\"appframework\");\r\n  return h?Templates.NamedTemplate(\"appframework\",{\r\n   $:1,\r\n   $0:\"appframework\"\r\n  },h):void 0;\r\n };\r\n LayoutEngine_Templates.tile=function(h)\r\n {\r\n  Templates.LoadLocalTemplates(\"appframework\");\r\n  return h?Templates.NamedTemplate(\"appframework\",{\r\n   $:1,\r\n   $0:\"tile\"\r\n  },h):void 0;\r\n };\r\n LayoutEngine_Templates.action=function(h)\r\n {\r\n  Templates.LoadLocalTemplates(\"appframework\");\r\n  return h?Templates.NamedTemplate(\"appframework\",{\r\n   $:1,\r\n   $0:\"action\"\r\n  },h):void 0;\r\n };\r\n LayoutEngine_Templates.namevalue=function(h)\r\n {\r\n  Templates.LoadLocalTemplates(\"appframework\");\r\n  return h?Templates.NamedTemplate(\"appframework\",{\r\n   $:1,\r\n   $0:\"namevalue\"\r\n  },h):void 0;\r\n };\r\n LayoutEngine_Templates.namevalueinput=function(h)\r\n {\r\n  Templates.LoadLocalTemplates(\"appframework\");\r\n  return h?Templates.NamedTemplate(\"appframework\",{\r\n   $:1,\r\n   $0:\"namevalueinput\"\r\n  },h):void 0;\r\n };\r\n LayoutEngine_GeneratedPrintf.p$2=function($1)\r\n {\r\n  return $1.$==7?\"EnPlgRef \"+(\"(\"+Utils.prettyPrint($1.$0[0])+\", \"+LayoutEngine_GeneratedPrintf.p$26($1.$0[1])+\")\"):$1.$==6?\"EnPlgDef \"+LayoutEngine_GeneratedPrintf.p$25($1.$0):$1.$==5?\"EnVJSDef \"+LayoutEngine_GeneratedPrintf.p$24($1.$0):$1.$==4?\"EnViwDef \"+LayoutEngine_GeneratedPrintf.p$23($1.$0):$1.$==3?\"EnVarDef \"+LayoutEngine_GeneratedPrintf.p$22($1.$0):$1.$==2?\"EnActDefs \"+LayoutEngine_GeneratedPrintf.p$21($1.$0):$1.$==1?\"EnActDef \"+LayoutEngine_GeneratedPrintf.p$20($1.$0):\"EnDocDef \"+LayoutEngine_GeneratedPrintf.p$3($1.$0);\r\n };\r\n LayoutEngine_GeneratedPrintf.p$26=function($1)\r\n {\r\n  return $1.$==4?\"RPlg\":$1.$==3?\"RAct\":$1.$==2?\"RViw\":$1.$==1?\"RVar\":\"RDoc\";\r\n };\r\n LayoutEngine_GeneratedPrintf.p$25=function($1)\r\n {\r\n  return\"PlgDef \"+Utils.prettyPrint($1.$0);\r\n };\r\n LayoutEngine_GeneratedPrintf.p$24=function($1)\r\n {\r\n  return\"VJSDef \"+Utils.printList(function($2)\r\n  {\r\n   return LayoutEngine_GeneratedPrintf.p$16($2);\r\n  },$1.$0);\r\n };\r\n LayoutEngine_GeneratedPrintf.p$23=function($1)\r\n {\r\n  return\"ViwDef \"+Utils.printList(function($2)\r\n  {\r\n   return LayoutEngine_GeneratedPrintf.p$16($2);\r\n  },$1.$0);\r\n };\r\n LayoutEngine_GeneratedPrintf.p$22=function($1)\r\n {\r\n  return\"VarDef \"+Utils.prettyPrint($1.$0);\r\n };\r\n LayoutEngine_GeneratedPrintf.p$21=function($1)\r\n {\r\n  return\"ActDefs \"+Utils.printList(function($2)\r\n  {\r\n   return LayoutEngine_GeneratedPrintf.p$8($2);\r\n  },$1.$0);\r\n };\r\n LayoutEngine_GeneratedPrintf.p$20=function($1)\r\n {\r\n  return\"ActDef (\"+LayoutEngine_GeneratedPrintf.p$8($1.$0)+\", \"+Utils.printList(function($2)\r\n  {\r\n   return LayoutEngine_GeneratedPrintf.p$16($2);\r\n  },$1.$1)+\")\";\r\n };\r\n LayoutEngine_GeneratedPrintf.p$3=function($1)\r\n {\r\n  return $1.$==7?\"DcTemplate \"+GeneratedPrintf.p$1($1.$0):$1.$==6?\"DcElement \"+LayoutEngine_GeneratedPrintf.p$19($1.$0):$1.$==5?\"DcConcat \"+LayoutEngine_GeneratedPrintf.p$17($1.$0):$1.$==4?\"DcDocF \"+LayoutEngine_GeneratedPrintf.p$15($1.$0):$1.$==3?\"DcTextArea \"+LayoutEngine_GeneratedPrintf.p$14($1.$0):$1.$==2?\"DcInput \"+LayoutEngine_GeneratedPrintf.p$13($1.$0):$1.$==1?\"DcButton \"+LayoutEngine_GeneratedPrintf.p$7($1.$0):\"DcSplitter \"+LayoutEngine_GeneratedPrintf.p$4($1.$0);\r\n };\r\n GeneratedPrintf.p$1=function($1)\r\n {\r\n  return\"{\"+(\"tmpName = \"+Utils.prettyPrint($1.tmpName))+\"; \"+(\"vars = \"+Utils.printArray(function($2)\r\n  {\r\n   return\"(\"+Utils.prettyPrint($2[0])+\", \"+LayoutEngine_GeneratedPrintf.p$11($2[1])+\")\";\r\n  },$1.vars))+\"; \"+(\"views = \"+Utils.printArray(function($2)\r\n  {\r\n   return\"(\"+Utils.prettyPrint($2[0])+\", \"+LayoutEngine_GeneratedPrintf.p$16($2[1])+\")\";\r\n  },$1.views))+\"; \"+(\"docs = \"+Utils.printArray(function($2)\r\n  {\r\n   return\"(\"+Utils.prettyPrint($2[0])+\", \"+LayoutEngine_GeneratedPrintf.p$6($2[1])+\")\";\r\n  },$1.docs))+\"; \"+(\"actions = \"+Utils.printArray(function($2)\r\n  {\r\n   return\"(\"+Utils.prettyPrint($2[0])+\", \"+LayoutEngine_GeneratedPrintf.p$8($2[1])+\")\";\r\n  },$1.actions))+\"; \"+(\"attrs = \"+LayoutEngine_GeneratedPrintf.p$16($1.attrs))+\"}\";\r\n };\r\n LayoutEngine_GeneratedPrintf.p$19=function($1)\r\n {\r\n  return\"ElementDef (\"+Utils.prettyPrint($1.$0)+\", \"+LayoutEngine_GeneratedPrintf.p$16($1.$1)+\", \"+Utils.printList(function($2)\r\n  {\r\n   return LayoutEngine_GeneratedPrintf.p$18($2);\r\n  },$1.$2)+\")\";\r\n };\r\n LayoutEngine_GeneratedPrintf.p$17=function($1)\r\n {\r\n  return\"ConcatDef \"+Utils.printList(function($2)\r\n  {\r\n   return LayoutEngine_GeneratedPrintf.p$18($2);\r\n  },$1.$0);\r\n };\r\n LayoutEngine_GeneratedPrintf.p$18=function($1)\r\n {\r\n  return $1.$==3?\"NdViwRef \"+LayoutEngine_GeneratedPrintf.p$12($1.$0):$1.$==2?\"NdVarRef \"+LayoutEngine_GeneratedPrintf.p$11($1.$0):$1.$==1?\"NdDocRef \"+LayoutEngine_GeneratedPrintf.p$6($1.$0):\"NdTextValL \"+Utils.printList(function($2)\r\n  {\r\n   return LayoutEngine_GeneratedPrintf.p$10($2);\r\n  },$1.$0);\r\n };\r\n LayoutEngine_GeneratedPrintf.p$15=function($1)\r\n {\r\n  return\"DocFDef (\"+LayoutEngine_GeneratedPrintf.p$6($1.$0)+\", \"+Utils.printList(function($2)\r\n  {\r\n   return LayoutEngine_GeneratedPrintf.p$16($2);\r\n  },$1.$1)+\")\";\r\n };\r\n LayoutEngine_GeneratedPrintf.p$16=function($1)\r\n {\r\n  return $1.$==4?\"PrActRef \"+LayoutEngine_GeneratedPrintf.p$8($1.$0):$1.$==3?\"PrViwRef \"+LayoutEngine_GeneratedPrintf.p$12($1.$0):$1.$==2?\"PrVarRef \"+LayoutEngine_GeneratedPrintf.p$11($1.$0):$1.$==1?\"PrDocRef \"+LayoutEngine_GeneratedPrintf.p$6($1.$0):\"PrTextValL \"+Utils.printList(function($2)\r\n  {\r\n   return LayoutEngine_GeneratedPrintf.p$10($2);\r\n  },$1.$0);\r\n };\r\n LayoutEngine_GeneratedPrintf.p$14=function($1)\r\n {\r\n  return\"TextAreaDef (\"+LayoutEngine_GeneratedPrintf.p$11($1.$0)+\", \"+Utils.printArray(function($2)\r\n  {\r\n   return LayoutEngine_GeneratedPrintf.p$9($2);\r\n  },$1.$1)+\")\";\r\n };\r\n LayoutEngine_GeneratedPrintf.p$13=function($1)\r\n {\r\n  return\"InputDef (\"+LayoutEngine_GeneratedPrintf.p$11($1.$0)+\", \"+Utils.printArray(function($2)\r\n  {\r\n   return LayoutEngine_GeneratedPrintf.p$9($2);\r\n  },$1.$1)+\")\";\r\n };\r\n LayoutEngine_GeneratedPrintf.p$7=function($1)\r\n {\r\n  return\"ButtonDef (\"+LayoutEngine_GeneratedPrintf.p$8($1.$0)+\", \"+Utils.printArray(function($2)\r\n  {\r\n   return LayoutEngine_GeneratedPrintf.p$9($2);\r\n  },$1.$1)+\", \"+Utils.printList(function($2)\r\n  {\r\n   return LayoutEngine_GeneratedPrintf.p$10($2);\r\n  },$1.$2)+\")\";\r\n };\r\n LayoutEngine_GeneratedPrintf.p$9=function($1)\r\n {\r\n  return $1.$==2?\"AtAct (\"+Utils.prettyPrint($1.$0)+\", \"+LayoutEngine_GeneratedPrintf.p$8($1.$1)+\")\":$1.$==1?\"AtAttr (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.printList(function($2)\r\n  {\r\n   return LayoutEngine_GeneratedPrintf.p$10($2);\r\n  },$1.$1)+\")\":\"AtStyle (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.printList(function($2)\r\n  {\r\n   return LayoutEngine_GeneratedPrintf.p$10($2);\r\n  },$1.$1)+\")\";\r\n };\r\n LayoutEngine_GeneratedPrintf.p$10=function($1)\r\n {\r\n  return $1.$==4?\"TvDocRef \"+LayoutEngine_GeneratedPrintf.p$6($1.$0):$1.$==3?\"TvActRef \"+LayoutEngine_GeneratedPrintf.p$8($1.$0):$1.$==2?\"TvViwRef \"+LayoutEngine_GeneratedPrintf.p$12($1.$0):$1.$==1?\"TvVarRef \"+LayoutEngine_GeneratedPrintf.p$11($1.$0):\"TvConst \"+Utils.prettyPrint($1.$0);\r\n };\r\n LayoutEngine_GeneratedPrintf.p$12=function($1)\r\n {\r\n  return\"ViwRef \"+LayoutEngine_GeneratedPrintf.p$1($1.$0);\r\n };\r\n LayoutEngine_GeneratedPrintf.p$11=function($1)\r\n {\r\n  return\"VarRef \"+LayoutEngine_GeneratedPrintf.p$1($1.$0);\r\n };\r\n LayoutEngine_GeneratedPrintf.p$8=function($1)\r\n {\r\n  return\"ActRef \"+LayoutEngine_GeneratedPrintf.p$1($1.$0);\r\n };\r\n LayoutEngine_GeneratedPrintf.p$4=function($1)\r\n {\r\n  return\"SplitterDef (\"+Utils.prettyPrint($1.$0)+\", \"+LayoutEngine_GeneratedPrintf.p$5($1.$1)+\", \"+LayoutEngine_GeneratedPrintf.p$6($1.$2)+\", \"+LayoutEngine_GeneratedPrintf.p$6($1.$3)+\")\";\r\n };\r\n LayoutEngine_GeneratedPrintf.p$6=function($1)\r\n {\r\n  return\"DocRef \"+LayoutEngine_GeneratedPrintf.p$1($1.$0);\r\n };\r\n LayoutEngine_GeneratedPrintf.p$5=function($1)\r\n {\r\n  return $1.$==1?\"Variable (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\", \"+Utils.prettyPrint($1.$2)+\")\":\"Fixed (\"+Utils.prettyPrint($1.$0)+\", \"+Utils.prettyPrint($1.$1)+\")\";\r\n };\r\n GeneratedPrintf.p$2=function($1)\r\n {\r\n  return\"{\"+(\"actName = \"+LayoutEngine_GeneratedPrintf.p($1.actName))+\"; \"+(\"actFunction = \"+LayoutEngine_GeneratedPrintf.p$27($1.actFunction))+\"; \"+(\"actEnabled = \"+LayoutEngine_GeneratedPrintf.p$28($1.actEnabled))+\"}\";\r\n };\r\n LayoutEngine_GeneratedPrintf.p$28=function($1)\r\n {\r\n  return\"View <fun>\";\r\n };\r\n LayoutEngine_GeneratedPrintf.p$27=function($1)\r\n {\r\n  return $1.$==2?\"FunAct2 (<fun>, \"+Utils.prettyPrint($1.$1)+\", \"+Utils.prettyPrint($1.$2)+\")\":$1.$==1?\"FunAct1 (<fun>, \"+Utils.prettyPrint($1.$1)+\")\":\"FunAct0 <fun>\";\r\n };\r\n LayoutEngine_Templates.fixedsplitterhor=function(h)\r\n {\r\n  Templates.LoadLocalTemplates(\"appframework\");\r\n  return h?Templates.NamedTemplate(\"appframework\",{\r\n   $:1,\r\n   $0:\"fixedsplitterhor\"\r\n  },h):void 0;\r\n };\r\n LayoutEngine_Templates.fixedsplitterver=function(h)\r\n {\r\n  Templates.LoadLocalTemplates(\"appframework\");\r\n  return h?Templates.NamedTemplate(\"appframework\",{\r\n   $:1,\r\n   $0:\"fixedsplitterver\"\r\n  },h):void 0;\r\n };\r\n LayoutEngine_Templates.appfwkclient=function(h)\r\n {\r\n  LayoutEngine_Templates.fixedsplitterhor();\r\n  LayoutEngine_Templates.fixedsplitterver();\r\n  Templates.LoadLocalTemplates(\"appframework\");\r\n  return h?Templates.NamedTemplate(\"appframework\",{\r\n   $:1,\r\n   $0:\"appfwkclient\"\r\n  },h):void 0;\r\n };\r\n}());\r\n"
    }
  ]
}
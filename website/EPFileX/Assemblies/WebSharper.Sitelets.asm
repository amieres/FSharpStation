{
  "asName": "WebSharper.Sitelets",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm",
    "WebSharper.Web.asm"
  ],
  "resources": [],
  "modules": [
    {
      "moName": "WebSharper.Sitelets.Extensions",
      "methods": []
    },
    {
      "moName": "WebSharper.Sitelets.StringEncoding",
      "methods": [
        {
          "meName": "read",
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
          "meName": "readEscapedFromChars",
          "isField": 0,
          "type": {
            "tName": "(int * List<int>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "List<int>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_PlusPlus",
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
          "meName": "write",
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
          "meName": "writeEscapedAsString",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "isUnreserved",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "Char",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.Sitelets.PathUtil",
      "methods": [
        {
          "meName": "WriteLink",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "List<string>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Map<string, string>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "WriteQuery",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Map<string, string>",
              "asm": "FSharp.Core"
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
              "tName": "List<string>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.Sitelets.Route",
      "methods": [
        {
          "meName": "FromHash",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Route",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Option<bool>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "FromUrl",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Route",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Option<bool>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "WriteQuery",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Map<string, string>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ParseQuery",
          "isField": 0,
          "type": {
            "tName": "Map<string, string>",
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
          "meName": "Combine",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Route",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "IEnumerable<WebSharper.Sitelets.Route>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Segment",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Route",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "List<string>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<string>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Segment",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Route",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "List<string>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Segment",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Route",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "get_Empty",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Route",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.Sitelets.List",
      "methods": [
        {
          "meName": "startsWith",
          "isField": 0,
          "type": {
            "tName": "Option<List<'a>>",
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
        }
      ]
    },
    {
      "moName": "WebSharper.Sitelets.Router",
      "methods": [
        {
          "meName": "op_Addition",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router",
              "asm": "WebSharper.Sitelets"
            },
            {
              "tName": "WebSharper.Sitelets.Router",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "op_Division",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router",
              "asm": "WebSharper.Sitelets"
            },
            {
              "tName": "WebSharper.Sitelets.Router",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "FromString",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router",
            "asm": "WebSharper.Sitelets"
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
      "moName": "WebSharper.Sitelets.Router`1",
      "methods": [
        {
          "meName": "op_Addition",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            },
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "op_Division",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            },
            {
              "tName": "WebSharper.Sitelets.Router",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "op_Division",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router",
              "asm": "WebSharper.Sitelets"
            },
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "op_Division",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<('a * 'b)>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            },
            {
              "tName": "WebSharper.Sitelets.Router<'b>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.Sitelets.RouterModule+ListArrayConverter`1",
      "methods": []
    },
    {
      "moName": "WebSharper.Sitelets.RouterModule",
      "methods": [
        {
          "meName": "CastImpl",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'b>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "('a -> Option<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> Option<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "UnboxImpl",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "(Object -> Option<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.Sitelets.Router<Object>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "BoxImpl",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Object>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "(Object -> Option<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "List",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<List<'a>>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "Option",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Option<'a>>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "Nullable",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Nullable<'a>>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "Array",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a[]>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "Delay",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "(unit -> WebSharper.Sitelets.Router<'a>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Single",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
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
          "meName": "Table",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "IEnumerable<('a * string)>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Sum",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "IEnumerable<WebSharper.Sitelets.Router<'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "MapTo",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "WebSharper.Sitelets.Router",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "Filter",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "TryMap",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'b>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "('a -> Option<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> Option<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "Map",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'b>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> 'a)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "Embed",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'b>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> Option<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "Slice",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'b>",
            "asm": "WebSharper.Sitelets"
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
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "HashLink",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Fetch",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Promise<WebSharper.JavaScript.Response>",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Ajax",
          "isField": 0,
          "type": {
            "tName": "Async<string>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Link",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "TryLink",
          "isField": 0,
          "type": {
            "tName": "Option<string>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Write",
          "isField": 0,
          "type": {
            "tName": "Option<WebSharper.Sitelets.Route>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
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
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            },
            {
              "tName": "WebSharper.Sitelets.Route",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "FormData",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "Body",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "(string -> Option<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Method",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "QueryNullable",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Nullable<'a>>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "QueryOption",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Option<'a>>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "Query",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "CreateWithQuery",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "('a -> (List<string> * Map<string, string>))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "((List<string> * Map<string, string>) -> Option<'a>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Create",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "('a -> List<string>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(List<string> -> Option<'a>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "New",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.IRouter<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "(WebSharper.Sitelets.Http+Request -> Option<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Option<Uri>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Empty",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.Sitelets.RouterExtensions",
      "methods": []
    },
    {
      "moName": "WebSharper.Sitelets.RouterOperators",
      "methods": [
        {
          "meName": "JSClass",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Object>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "(unit -> Object)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(string * bool * WebSharper.Sitelets.Router<Object>)[]",
              "asm": "netstandard"
            },
            {
              "tName": "(Option<string> * WebSharper.JavaScript.Union<string, int>[])[]",
              "asm": "netstandard"
            },
            {
              "tName": "WebSharper.Sitelets.Router<Object>[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "JSUnion",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Object>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "(Option<Object> * (Option<string> * string[])[] * WebSharper.Sitelets.Router<Object>[])[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "isCorrectMethod",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Option<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "JSRecord",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Object>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "(string * bool * WebSharper.Sitelets.Router<Object>)[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "JSTuple",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Object>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<Object>[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Tuple",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Object>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "(Object -> Object[])",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Object[] -> Object)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.Sitelets.Router<Object>[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "rDateTime",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<DateTime>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rWildcardList",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<List<'a>>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "rWildcardArray",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Sitelets.Router<'a[]>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": [
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "rWildcard",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<string>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rBool",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<bool>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rSingle",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Single>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rUInt64",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<UInt64>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rInt64",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Int64>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rUInt",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<UInt32>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rUInt16",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<UInt16>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rInt16",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Int16>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rByte",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Byte>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rSByte",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<SByte>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rDouble",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Double>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rInt",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<int>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rGuid",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Guid>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rChar",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<Char>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rString",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router<string>",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        },
        {
          "meName": "rRoot",
          "isField": 1,
          "type": {
            "tName": "WebSharper.Sitelets.Router",
            "asm": "WebSharper.Sitelets"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "StartupCode$WebSharper_Sitelets$Router",
      "methods": []
    },
    {
      "moName": "WebSharper.Sitelets.InferRouter+Router",
      "methods": []
    }
  ],
  "jsModules": [
    {
      "jsName": "WebSharper.js",
      "code": "(function()\r\n{\r\n \"use strict\";\r\n var Global,WebSharper,Sitelets,StringEncoding,PathUtil,Route,List,Router,Obj,RouterModule,ListArrayConverter,RouterOperators,SC$1,Strings,String,List$1,Seq,Collections,Map,Arrays,IntelliFactory,Runtime,FSharpMap,Unchecked,Utils,console,Lazy,Nullable,Numeric,Operators,Concurrency,$,Char,System,Guid,Slice;\r\n Global=self;\r\n WebSharper=Global.WebSharper=Global.WebSharper||{};\r\n Sitelets=WebSharper.Sitelets=WebSharper.Sitelets||{};\r\n StringEncoding=Sitelets.StringEncoding=Sitelets.StringEncoding||{};\r\n PathUtil=Sitelets.PathUtil=Sitelets.PathUtil||{};\r\n Route=Sitelets.Route=Sitelets.Route||{};\r\n List=Sitelets.List=Sitelets.List||{};\r\n Router=Sitelets.Router=Sitelets.Router||{};\r\n Obj=WebSharper&&WebSharper.Obj;\r\n RouterModule=Sitelets.RouterModule=Sitelets.RouterModule||{};\r\n ListArrayConverter=RouterModule.ListArrayConverter=RouterModule.ListArrayConverter||{};\r\n RouterOperators=Sitelets.RouterOperators=Sitelets.RouterOperators||{};\r\n SC$1=Global.StartupCode$WebSharper_Sitelets$Router=Global.StartupCode$WebSharper_Sitelets$Router||{};\r\n Strings=WebSharper&&WebSharper.Strings;\r\n String=Global.String;\r\n List$1=WebSharper&&WebSharper.List;\r\n Seq=WebSharper&&WebSharper.Seq;\r\n Collections=WebSharper&&WebSharper.Collections;\r\n Map=Collections&&Collections.Map;\r\n Arrays=WebSharper&&WebSharper.Arrays;\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime=IntelliFactory&&IntelliFactory.Runtime;\r\n FSharpMap=Collections&&Collections.FSharpMap;\r\n Unchecked=WebSharper&&WebSharper.Unchecked;\r\n Utils=WebSharper&&WebSharper.Utils;\r\n console=Global.console;\r\n Lazy=WebSharper&&WebSharper.Lazy;\r\n Nullable=WebSharper&&WebSharper.Nullable;\r\n Numeric=WebSharper&&WebSharper.Numeric;\r\n Operators=WebSharper&&WebSharper.Operators;\r\n Concurrency=WebSharper&&WebSharper.Concurrency;\r\n $=Global.jQuery;\r\n Char=WebSharper&&WebSharper.Char;\r\n System=Global.System;\r\n Guid=System&&System.Guid;\r\n Slice=WebSharper&&WebSharper.Slice;\r\n StringEncoding.read=function(s)\r\n {\r\n  var buf;\r\n  buf=[];\r\n  return function(chars)\r\n  {\r\n   var m;\r\n   while(true)\r\n    {\r\n     m=StringEncoding.readEscapedFromChars(chars);\r\n     if(m[0]===-2)\r\n      return null;\r\n     else\r\n      if(m[0]===-1)\r\n       return{\r\n        $:1,\r\n        $0:(function(s$1)\r\n        {\r\n         return function(s$2)\r\n         {\r\n          return Strings.concat(s$1,s$2);\r\n         };\r\n        }(\"\"))(buf)\r\n       };\r\n      else\r\n       {\r\n        buf.push(String.fromCharCode(m[0]));\r\n        chars=m[1];\r\n       }\r\n    }\r\n  }(List$1.ofSeq(Seq.map(function(v)\r\n  {\r\n   return v.charCodeAt();\r\n  },s)));\r\n };\r\n StringEncoding.readEscapedFromChars=function(chars)\r\n {\r\n  var chars$1,m,m$1,a,b,c,d,y;\r\n  function read()\r\n  {\r\n   var t,h;\r\n   return chars$1.$==1?(t=chars$1.$1,(h=chars$1.$0,(chars$1=t,h))):-1;\r\n  }\r\n  function hex(x)\r\n  {\r\n   return x>=\"0\".charCodeAt()&&x<=\"9\".charCodeAt()?x-\"0\".charCodeAt():x>=\"a\".charCodeAt()&&x<=\"f\".charCodeAt()?x-\"a\".charCodeAt()+10:x>=\"A\".charCodeAt()&&x<=\"F\".charCodeAt()?x-\"A\".charCodeAt()+10:-2;\r\n  }\r\n  chars$1=chars;\r\n  return[(m=read(),m===\"~\".charCodeAt()?(m$1=read(),m$1===\"u\".charCodeAt()?(a=read(),(b=read(),(c=read(),(d=read(),a>=0&&b>=0&&c>=0&&d>=0?StringEncoding.op_PlusPlus(StringEncoding.op_PlusPlus(StringEncoding.op_PlusPlus(hex(a),hex(b)),hex(c)),hex(d)):-2)))):(y=read(),m$1>=0&&y>=0?StringEncoding.op_PlusPlus(hex(m$1),hex(y)):-2)):m),chars$1];\r\n };\r\n StringEncoding.op_PlusPlus=function(a,b)\r\n {\r\n  return(a<<4)+b;\r\n };\r\n StringEncoding.write=function(s)\r\n {\r\n  return Strings.concat(\"\",Seq.mapi(function(i,c)\r\n  {\r\n   return StringEncoding.writeEscapedAsString(i+1===s.length,c);\r\n  },s));\r\n };\r\n StringEncoding.writeEscapedAsString=function(isLast,c)\r\n {\r\n  var k;\r\n  k=c.charCodeAt();\r\n  return StringEncoding.isUnreserved(isLast,c)?c:k<256?\"~\"+Strings.PadLeftWith(k.toString(16),2,\"0\"):\"~u\"+Strings.PadLeftWith(k.toString(16),4,\"0\");\r\n };\r\n StringEncoding.isUnreserved=function(isLast,c)\r\n {\r\n  return c===\"-\"||(c===\".\"?!isLast:c===\"_\"||(c>=\"A\"&&c<=\"Z\"||(c>=\"a\"&&c<=\"z\"||c>=\"0\"&&c<=\"9\")));\r\n };\r\n PathUtil.WriteLink=function(s,q)\r\n {\r\n  var query;\r\n  query=q.get_IsEmpty()?\"\":\"?\"+PathUtil.WriteQuery(q);\r\n  return\"/\"+PathUtil.Concat(s)+query;\r\n };\r\n PathUtil.WriteQuery=function(q)\r\n {\r\n  function m(k,v)\r\n  {\r\n   return k+\"=\"+v;\r\n  }\r\n  return Strings.concat(\"&\",Seq.map(function($1)\r\n  {\r\n   return m($1[0],$1[1]);\r\n  },Map.ToSeq(q)));\r\n };\r\n PathUtil.Concat=function(xs)\r\n {\r\n  var sb,start;\r\n  sb=[];\r\n  start=true;\r\n  List$1.iter(function(x)\r\n  {\r\n   if(!Strings.IsNullOrEmpty(x))\r\n    {\r\n     start?start=false:sb.push(\"/\");\r\n     sb.push(x);\r\n    }\r\n  },xs);\r\n  return Strings.Join(\"\",Arrays.ofSeq(sb));\r\n };\r\n Route=Sitelets.Route=Runtime.Class({\r\n  ToLink:function()\r\n  {\r\n   return PathUtil.WriteLink(this.Segments,this.QueryArgs);\r\n  }\r\n },null,Route);\r\n Route.FromHash=function(path,strict)\r\n {\r\n  var m,h;\r\n  m=path.indexOf(\"#\");\r\n  return m===-1?Route.get_Empty():(h=path.substring(m+1),strict!=null&&strict.$0?h===\"\"||h===\"/\"?Route.get_Empty():Strings.StartsWith(h,\"/\")?Route.FromUrl(h.substring(1),{\r\n   $:1,\r\n   $0:true\r\n  }):Route.Segment$2(h):Route.FromUrl(path.substring(m),{\r\n   $:1,\r\n   $0:false\r\n  }));\r\n };\r\n Route.FromUrl=function(path,strict)\r\n {\r\n  var p,m,i;\r\n  p=(m=path.indexOf(\"?\"),m===-1?[path,new FSharpMap.New([])]:[Strings.Substring(path,0,m),Route.ParseQuery(path.substring(m+1))]);\r\n  i=Route.get_Empty();\r\n  return Route.New(List$1.ofArray(Strings.SplitChars(p[0],[\"/\"],strict!=null&&strict.$0?0:1)),p[1],i.FormData,i.Method,i.Body);\r\n };\r\n Route.WriteQuery=function(q)\r\n {\r\n  return PathUtil.WriteQuery(q);\r\n };\r\n Route.ParseQuery=function(q)\r\n {\r\n  return Map.OfArray(Arrays.ofSeq(Arrays.choose(function(kv)\r\n  {\r\n   var m,v;\r\n   m=Strings.SplitChars(kv,[\"=\"],0);\r\n   return!Unchecked.Equals(m,null)&&m.length===2?(v=Arrays.get(m,1),{\r\n    $:1,\r\n    $0:[Arrays.get(m,0),v]\r\n   }):((function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(\"wrong format for query argument: \"+Utils.toSafe($2));\r\n    };\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }))(kv),null);\r\n  },Strings.SplitChars(q,[\"&\"],0))));\r\n };\r\n Route.Combine=function(paths)\r\n {\r\n  var method,body,queryArgs,formData,i,$1,paths$1,m,segments,l;\r\n  paths$1=Arrays.ofSeq(paths);\r\n  m=Arrays.length(paths$1);\r\n  if(m===0)\r\n   return Route.get_Empty();\r\n  else\r\n   if(m===1)\r\n    return Arrays.get(paths$1,0);\r\n   else\r\n    {\r\n     method=null;\r\n     body=null;\r\n     segments=[];\r\n     queryArgs=new FSharpMap.New([]);\r\n     formData=new FSharpMap.New([]);\r\n     i=0;\r\n     l=Arrays.length(paths$1);\r\n     while(i<l)\r\n      (function()\r\n      {\r\n       var p,m$1,m$2;\r\n       p=Arrays.get(paths$1,i);\r\n       m$1=p.Method;\r\n       m$1!=null&&m$1.$==1?method=m$1:void 0;\r\n       m$2=p.Body.f();\r\n       m$2===null?void 0:body=m$2;\r\n       queryArgs=Map.FoldBack(function(k,v,t)\r\n       {\r\n        return t.Add(k,v);\r\n       },queryArgs,p.QueryArgs);\r\n       formData=Map.FoldBack(function(k,v,t)\r\n       {\r\n        return t.Add(k,v);\r\n       },formData,p.FormData);\r\n       List$1.iter(function(a)\r\n       {\r\n        segments.push(a);\r\n       },p.Segments);\r\n       i=i+1;\r\n      }());\r\n     return Route.New(List$1.ofSeq(segments),queryArgs,formData,method,Lazy.CreateFromValue(body));\r\n    }\r\n };\r\n Route.Segment=function(s,m)\r\n {\r\n  var i;\r\n  i=Route.get_Empty();\r\n  return Route.New(s,i.QueryArgs,i.FormData,m,i.Body);\r\n };\r\n Route.Segment$1=function(s)\r\n {\r\n  var i;\r\n  i=Route.get_Empty();\r\n  return Route.New(s,i.QueryArgs,i.FormData,i.Method,i.Body);\r\n };\r\n Route.Segment$2=function(s)\r\n {\r\n  var i;\r\n  i=Route.get_Empty();\r\n  return Route.New(List$1.ofArray([s]),i.QueryArgs,i.FormData,i.Method,i.Body);\r\n };\r\n Route.get_Empty=function()\r\n {\r\n  return Route.New(List$1.T.Empty,new FSharpMap.New([]),new FSharpMap.New([]),null,Lazy.CreateFromValue(null));\r\n };\r\n Route.New=function(Segments,QueryArgs,FormData,Method,Body)\r\n {\r\n  return new Route({\r\n   Segments:Segments,\r\n   QueryArgs:QueryArgs,\r\n   FormData:FormData,\r\n   Method:Method,\r\n   Body:Body\r\n  });\r\n };\r\n List.startsWith=function(s,l)\r\n {\r\n  var $1;\r\n  switch(s.$==1?l.$==1?Unchecked.Equals(s.$0,l.$0)?($1=[l.$0,l.$1,s.$0,s.$1],1):2:2:0)\r\n  {\r\n   case 0:\r\n    return{\r\n     $:1,\r\n     $0:l\r\n    };\r\n   case 1:\r\n    return List.startsWith($1[3],$1[1]);\r\n   case 2:\r\n    return null;\r\n  }\r\n };\r\n Router.op_Addition=function(a,b)\r\n {\r\n  return Router.New(function(path)\r\n  {\r\n   return Seq.append(a.Parse(path),b.Parse(path));\r\n  },a.Segment);\r\n };\r\n Router.op_Division=function(before,after)\r\n {\r\n  return Router.New(function(path)\r\n  {\r\n   return Seq.collect(after.Parse,before.Parse(path));\r\n  },Seq.append(before.Segment,after.Segment));\r\n };\r\n Router.FromString=function(name)\r\n {\r\n  var parts,parts$1;\r\n  parts=Strings.SplitChars(name,[\"/\"],1);\r\n  return parts.length==0?Router.New(function(path)\r\n  {\r\n   return[path];\r\n  },[]):(parts$1=List$1.ofArray(parts),Router.New(function(path)\r\n  {\r\n   var m;\r\n   m=List.startsWith(parts$1,path.Segments);\r\n   return m!=null&&m.$==1?[Route.New(m.$0,path.QueryArgs,path.FormData,path.Method,path.Body)]:[];\r\n  },[Route.Segment$1(parts$1)]));\r\n };\r\n Router.New=function(Parse,Segment)\r\n {\r\n  return{\r\n   Parse:Parse,\r\n   Segment:Segment\r\n  };\r\n };\r\n Router.op_Addition$1=function(a,b)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   return Seq.append(a.Parse(path),b.Parse(path));\r\n  },function(value)\r\n  {\r\n   var m;\r\n   m=a.Write(value);\r\n   return m==null?b.Write(value):m;\r\n  });\r\n };\r\n Router.op_Division$1=function(before,after)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   function m(p,x)\r\n   {\r\n    return Seq.map(function(p$1)\r\n    {\r\n     return[p$1,x];\r\n    },after.Parse(p));\r\n   }\r\n   return Seq.collect(function($1)\r\n   {\r\n    return m($1[0],$1[1]);\r\n   },before.Parse(path));\r\n  },function(v)\r\n  {\r\n   var o;\r\n   o=before.Write(v);\r\n   return o==null?null:{\r\n    $:1,\r\n    $0:Seq.append(o.$0,after.Segment)\r\n   };\r\n  });\r\n };\r\n Router.op_Division$2=function(before,after)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   return Seq.collect(after.Parse,before.Parse(path));\r\n  },function(v)\r\n  {\r\n   var o;\r\n   o=after.Write(v);\r\n   return o==null?null:{\r\n    $:1,\r\n    $0:Seq.append(before.Segment,o.$0)\r\n   };\r\n  });\r\n };\r\n Router.op_Division$3=function(before,after)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   function m(p,x)\r\n   {\r\n    function m$1(p$1,y)\r\n    {\r\n     return[p$1,[x,y]];\r\n    }\r\n    return Seq.map(function($1)\r\n    {\r\n     return m$1($1[0],$1[1]);\r\n    },after.Parse(p));\r\n   }\r\n   return Seq.collect(function($1)\r\n   {\r\n    return m($1[0],$1[1]);\r\n   },before.Parse(path));\r\n  },function(t)\r\n  {\r\n   var $1,$2,$3;\r\n   $1=before.Write(t[0]);\r\n   $2=after.Write(t[1]);\r\n   return $1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3=[$1.$0,$2.$0],true))?{\r\n    $:1,\r\n    $0:Seq.append($3[0],$3[1])\r\n   }:null;\r\n  });\r\n };\r\n Router.New$1=function(Parse,Write)\r\n {\r\n  return{\r\n   Parse:Parse,\r\n   Write:Write\r\n  };\r\n };\r\n ListArrayConverter=RouterModule.ListArrayConverter=Runtime.Class({\r\n  WebSharper_Sitelets_RouterModule_IListArrayConverter$ToArray:function(l)\r\n  {\r\n   return Arrays.ofList(l);\r\n  },\r\n  WebSharper_Sitelets_RouterModule_IListArrayConverter$OfArray:function(a)\r\n  {\r\n   return List$1.ofArray(a);\r\n  }\r\n },Obj,ListArrayConverter);\r\n ListArrayConverter.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },ListArrayConverter);\r\n RouterModule.Cast=function(tryParseCast,tryWriteCast,router)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   function c(p,v)\r\n   {\r\n    var m;\r\n    m=tryParseCast(v);\r\n    return m!=null&&m.$==1?{\r\n     $:1,\r\n     $0:[p,m.$0]\r\n    }:null;\r\n   }\r\n   return Seq.choose(function($1)\r\n   {\r\n    return c($1[0],$1[1]);\r\n   },router.Parse(path));\r\n  },function(value)\r\n  {\r\n   var o;\r\n   o=tryWriteCast(value);\r\n   return o==null?null:router.Write(o.$0);\r\n  });\r\n };\r\n RouterModule.Unbox=function(tryUnbox,router)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   function c(p,v)\r\n   {\r\n    var m;\r\n    m=tryUnbox(v);\r\n    return m!=null&&m.$==1?{\r\n     $:1,\r\n     $0:[p,m.$0]\r\n    }:null;\r\n   }\r\n   return Seq.choose(function($1)\r\n   {\r\n    return c($1[0],$1[1]);\r\n   },router.Parse(path));\r\n  },router.Write);\r\n };\r\n RouterModule.Box=function(tryUnbox,router)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   function m(p,v)\r\n   {\r\n    return[p,v];\r\n   }\r\n   return Seq.map(function($1)\r\n   {\r\n    return m($1[0],$1[1]);\r\n   },router.Parse(path));\r\n  },function(value)\r\n  {\r\n   var o;\r\n   o=tryUnbox(value);\r\n   return o==null?null:router.Write(o.$0);\r\n  });\r\n };\r\n RouterModule.List=function(item)\r\n {\r\n  return RouterModule.Map(List$1.ofArray,Arrays.ofList,RouterModule.Array(item));\r\n };\r\n RouterModule.Option=function(item)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   var $1,m;\r\n   m=path.Segments;\r\n   function m$1(p,v)\r\n   {\r\n    return[p,{\r\n     $:1,\r\n     $0:v\r\n    }];\r\n   }\r\n   switch(m.$==1?m.$0===\"None\"?($1=m.$1,0):m.$0===\"Some\"?($1=m.$1,1):2:2)\r\n   {\r\n    case 0:\r\n     return[[Route.New($1,path.QueryArgs,path.FormData,path.Method,path.Body),null]];\r\n    case 1:\r\n     return Seq.map(function($2)\r\n     {\r\n      return m$1($2[0],$2[1]);\r\n     },item.Parse(Route.New($1,path.QueryArgs,path.FormData,path.Method,path.Body)));\r\n    case 2:\r\n     return[];\r\n   }\r\n  },function(value)\r\n  {\r\n   var x,m,s;\r\n   return value!=null&&value.$==1?(x=item.Write(value.$0),(m=(s=[Route.Segment$2(\"Some\")],function(s$1)\r\n   {\r\n    return Seq.append(s,s$1);\r\n   }),x==null?null:{\r\n    $:1,\r\n    $0:m(x.$0)\r\n   })):{\r\n    $:1,\r\n    $0:[Route.Segment$2(\"None\")]\r\n   };\r\n  });\r\n };\r\n RouterModule.Nullable=function(item)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   var m,$1;\r\n   function m$1(p,v)\r\n   {\r\n    return[p,v];\r\n   }\r\n   m=path.Segments;\r\n   return m.$==1&&(m.$0===\"null\"&&($1=m.$1,true))?[[Route.New($1,path.QueryArgs,path.FormData,path.Method,path.Body),null]]:Seq.map(function($2)\r\n   {\r\n    return m$1($2[0],$2[1]);\r\n   },item.Parse(path));\r\n  },function(value)\r\n  {\r\n   return value!=null?item.Write(Nullable.get(value)):{\r\n    $:1,\r\n    $0:[Route.Segment$2(\"null\")]\r\n   };\r\n  });\r\n };\r\n RouterModule.Array=function(item)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   var m,m$1,o;\r\n   function collect(l,path$1,acc)\r\n   {\r\n    function m$2(p,a)\r\n    {\r\n     return collect(l-1,p,new List$1.T({\r\n      $:1,\r\n      $0:a,\r\n      $1:acc\r\n     }));\r\n    }\r\n    return l===0?[[path$1,Arrays.ofList(List$1.rev(acc))]]:Seq.collect(function($1)\r\n    {\r\n     return m$2($1[0],$1[1]);\r\n    },item.Parse(path$1));\r\n   }\r\n   m=path.Segments;\r\n   return m.$==1?(m$1=(o=0,[Numeric.TryParseInt32(m.$0,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o]),m$1[0]?collect(m$1[1],Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),List$1.T.Empty):[]):[];\r\n  },function(value)\r\n  {\r\n   var parts;\r\n   parts=Arrays.map(item.Write,value);\r\n   return Arrays.forall(function(o)\r\n   {\r\n    return o!=null;\r\n   },parts)?{\r\n    $:1,\r\n    $0:Seq.append([Route.Segment$2(String(Arrays.length(value)))],Seq.collect(function(o)\r\n    {\r\n     return o.$0;\r\n    },parts))\r\n   }:null;\r\n  });\r\n };\r\n RouterModule.Delay=function(getRouter)\r\n {\r\n  var r;\r\n  r=Lazy.Create(getRouter);\r\n  return Router.New$1(function(path)\r\n  {\r\n   return r.f().Parse(path);\r\n  },function(value)\r\n  {\r\n   return r.f().Write(value);\r\n  });\r\n };\r\n RouterModule.Single=function(endpoint,route)\r\n {\r\n  var parts,parts$1;\r\n  parts=Strings.SplitChars(route,[\"/\"],1);\r\n  return parts.length==0?Router.New$1(function(path)\r\n  {\r\n   return[[path,endpoint]];\r\n  },function(value)\r\n  {\r\n   return Unchecked.Equals(value,endpoint)?{\r\n    $:1,\r\n    $0:[]\r\n   }:null;\r\n  }):(parts$1=List$1.ofArray(parts),Router.New$1(function(path)\r\n  {\r\n   var m;\r\n   m=List.startsWith(parts$1,path.Segments);\r\n   return m!=null&&m.$==1?[[Route.New(m.$0,path.QueryArgs,path.FormData,path.Method,path.Body),endpoint]]:[];\r\n  },function(value)\r\n  {\r\n   return Unchecked.Equals(value,endpoint)?{\r\n    $:1,\r\n    $0:[Route.Segment$1(parts$1)]\r\n   }:null;\r\n  }));\r\n };\r\n RouterModule.Table=function(mapping)\r\n {\r\n  function m(v,s)\r\n  {\r\n   return RouterModule.MapTo(v,Router.FromString(s));\r\n  }\r\n  return RouterModule.Sum(Seq.map(function($1)\r\n  {\r\n   return m($1[0],$1[1]);\r\n  },mapping));\r\n };\r\n RouterModule.Sum=function(routers)\r\n {\r\n  var routers$1;\r\n  routers$1=Arrays.ofSeq(routers);\r\n  return Router.New$1(function(path)\r\n  {\r\n   return Seq.collect(function(r)\r\n   {\r\n    return r.Parse(path);\r\n   },routers$1);\r\n  },function(value)\r\n  {\r\n   return Seq.tryPick(function(r)\r\n   {\r\n    return r.Write(value);\r\n   },routers$1);\r\n  });\r\n };\r\n RouterModule.MapTo=function(value,router)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   return Seq.map(function(p)\r\n   {\r\n    return[p,value];\r\n   },router.Parse(path));\r\n  },function(v)\r\n  {\r\n   return Unchecked.Equals(v,value)?{\r\n    $:1,\r\n    $0:router.Segment\r\n   }:null;\r\n  });\r\n };\r\n RouterModule.Filter=function(predicate,router)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   function f(t)\r\n   {\r\n    return t[1];\r\n   }\r\n   return Seq.filter(function(x)\r\n   {\r\n    return predicate(f(x));\r\n   },router.Parse(path));\r\n  },function(value)\r\n  {\r\n   return predicate(value)?router.Write(value):null;\r\n  });\r\n };\r\n RouterModule.TryMap=function(decode,encode,router)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   function c(p,v)\r\n   {\r\n    var o;\r\n    o=decode(v);\r\n    return o==null?null:{\r\n     $:1,\r\n     $0:[p,o.$0]\r\n    };\r\n   }\r\n   return Seq.choose(function($1)\r\n   {\r\n    return c($1[0],$1[1]);\r\n   },router.Parse(path));\r\n  },function(value)\r\n  {\r\n   var o;\r\n   o=encode(value);\r\n   return o==null?null:router.Write(o.$0);\r\n  });\r\n };\r\n RouterModule.Map=function(decode,encode,router)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   function m(p,v)\r\n   {\r\n    return[p,decode(v)];\r\n   }\r\n   return Seq.map(function($1)\r\n   {\r\n    return m($1[0],$1[1]);\r\n   },router.Parse(path));\r\n  },function(value)\r\n  {\r\n   return router.Write(encode(value));\r\n  });\r\n };\r\n RouterModule.Embed=function(decode,encode,router)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   function m(p,v)\r\n   {\r\n    return[p,decode(v)];\r\n   }\r\n   return Seq.map(function($1)\r\n   {\r\n    return m($1[0],$1[1]);\r\n   },router.Parse(path));\r\n  },function(value)\r\n  {\r\n   var o;\r\n   o=encode(value);\r\n   return o==null?null:router.Write(o.$0);\r\n  });\r\n };\r\n RouterModule.Slice=function(decode,encode,router)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   function c(p,v)\r\n   {\r\n    var o;\r\n    o=decode(v);\r\n    return o==null?null:{\r\n     $:1,\r\n     $0:[p,o.$0]\r\n    };\r\n   }\r\n   return Seq.choose(function($1)\r\n   {\r\n    return c($1[0],$1[1]);\r\n   },router.Parse(path));\r\n  },function(value)\r\n  {\r\n   return router.Write(encode(value));\r\n  });\r\n };\r\n RouterModule.HashLink=function(router,endpoint)\r\n {\r\n  return\"#\"+RouterModule.Link(router,endpoint);\r\n };\r\n RouterModule.Fetch=function(router,endpoint)\r\n {\r\n  var m,path,options,m$1,m$2,fd;\r\n  m=RouterModule.Write(router,endpoint);\r\n  return m!=null&&m.$==1?(path=m.$0,(options={},(m$1=path.Method,m$1==null?void 0:options.method=m$1.$0,m$2=path.Body.f(),m$2===null?!path.FormData.get_IsEmpty()?(fd=new Global.FormData(),Map.Iterate(function(k,v)\r\n  {\r\n   return fd.append(k,v);\r\n  },path.FormData),options.body=fd):void 0:options.body=m$2,path.Method==null?options.method=\"POST\":void 0,self.fetch(path.ToLink(),options)))):Operators.FailWith(\"Failed to map endpoint to request\");\r\n };\r\n RouterModule.Ajax=function(router,endpoint)\r\n {\r\n  var m,path,settings,r,m$1,m$2,fd;\r\n  m=RouterModule.Write(router,endpoint);\r\n  return m!=null&&m.$==1?(path=m.$0,(settings=(r={},r.dataType=\"text\",r),(m$1=path.Method,m$1!=null&&m$1.$==1?settings.type=m$1.$0:void 0,m$2=path.Body.f(),m$2===null?!path.FormData.get_IsEmpty()?(fd=new Global.FormData(),Map.Iterate(function(k,v)\r\n  {\r\n   return fd.append(k,v);\r\n  },path.FormData),settings.contentType=false,settings.data=fd,settings.processData=false):void 0:(settings.contentType=\"application/json\",settings.data=m$2,settings.processData=false),path.Method==null?settings.type=\"POST\":void 0,Concurrency.FromContinuations(function(ok,err)\r\n  {\r\n   settings.success=function(res)\r\n   {\r\n    return ok(res);\r\n   };\r\n   settings.error=function(a,a$1,msg)\r\n   {\r\n    return err(new Global.Error(msg));\r\n   };\r\n   $.ajax(path.ToLink(),settings);\r\n  })))):Operators.FailWith(\"Failed to map endpoint to request\");\r\n };\r\n RouterModule.Link=function(router,endpoint)\r\n {\r\n  var m;\r\n  m=RouterModule.Write(router,endpoint);\r\n  return m==null?\"\":m.$0.ToLink();\r\n };\r\n RouterModule.TryLink=function(router,endpoint)\r\n {\r\n  var m;\r\n  m=RouterModule.Write(router,endpoint);\r\n  return m==null?null:{\r\n   $:1,\r\n   $0:m.$0.ToLink()\r\n  };\r\n };\r\n RouterModule.Write=function(router,endpoint)\r\n {\r\n  var o;\r\n  o=router.Write(endpoint);\r\n  return o==null?null:{\r\n   $:1,\r\n   $0:Route.Combine(o.$0)\r\n  };\r\n };\r\n RouterModule.Parse=function(router,path)\r\n {\r\n  function c(path$1,value)\r\n  {\r\n   return path$1.Segments.$==0?{\r\n    $:1,\r\n    $0:value\r\n   }:null;\r\n  }\r\n  return Seq.tryPick(function($1)\r\n  {\r\n   return c($1[0],$1[1]);\r\n  },router.Parse(path));\r\n };\r\n RouterModule.FormData=function(item)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   function m(a,r)\r\n   {\r\n    return[path,r];\r\n   }\r\n   return Seq.map(function($1)\r\n   {\r\n    return m($1[0],$1[1]);\r\n   },item.Parse(Route.New(path.Segments,path.FormData,path.FormData,path.Method,path.Body)));\r\n  },function(value)\r\n  {\r\n   var o;\r\n   o=item.Write(value);\r\n   return o==null?null:{\r\n    $:1,\r\n    $0:Seq.map(function(p)\r\n    {\r\n     return Route.New(p.Segments,new FSharpMap.New([]),p.QueryArgs,p.Method,p.Body);\r\n    },o.$0)\r\n   };\r\n  });\r\n };\r\n RouterModule.Body=function(deserialize,serialize)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   var m,m$1;\r\n   m=path.Body.f();\r\n   return m===null?[]:(m$1=deserialize(m),m$1!=null&&m$1.$==1?[[Route.New(path.Segments,path.QueryArgs,path.FormData,path.Method,Lazy.CreateFromValue(null)),m$1.$0]]:[]);\r\n  },function(value)\r\n  {\r\n   var i;\r\n   return{\r\n    $:1,\r\n    $0:[(i=Route.get_Empty(),Route.New(i.Segments,i.QueryArgs,i.FormData,i.Method,Lazy.CreateFromValue(serialize(value))))]\r\n   };\r\n  });\r\n };\r\n RouterModule.Method=function(m)\r\n {\r\n  var i;\r\n  return Router.New(function(path)\r\n  {\r\n   var m$1,$1;\r\n   m$1=path.Method;\r\n   return m$1!=null&&m$1.$==1&&(m$1.$0===m&&($1=m$1.$0,true))?[path]:[];\r\n  },[(i=Route.get_Empty(),Route.New(i.Segments,i.QueryArgs,i.FormData,{\r\n   $:1,\r\n   $0:m\r\n  },i.Body))]);\r\n };\r\n RouterModule.QueryNullable=function(key,item)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   var m,newQa,i;\r\n   function m$1(a,v)\r\n   {\r\n    return[Route.New(path.Segments,newQa,path.FormData,path.Method,path.Body),v];\r\n   }\r\n   m=path.QueryArgs.TryFind(key);\r\n   return m!=null&&m.$==1?(newQa=path.QueryArgs.Remove(key),Seq.map(function($1)\r\n   {\r\n    return m$1($1[0],$1[1]);\r\n   },item.Parse((i=Route.get_Empty(),Route.New(List$1.ofArray([m.$0]),i.QueryArgs,i.FormData,i.Method,i.Body))))):[[path,null]];\r\n  },function(value)\r\n  {\r\n   var o,m,$1,i;\r\n   return value!=null?(o=item.Write(Nullable.get(value)),o==null?null:{\r\n    $:1,\r\n    $0:(m=Route.Combine(o.$0).Segments,m.$==1&&(m.$1.$==0&&($1=m.$0,true))?[(i=Route.get_Empty(),Route.New(i.Segments,Map.OfArray(Arrays.ofSeq(List$1.ofArray([[key,$1]]))),i.FormData,i.Method,i.Body))]:[])\r\n   }):{\r\n    $:1,\r\n    $0:[]\r\n   };\r\n  });\r\n };\r\n RouterModule.QueryOption=function(key,item)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   var m,newQa,i;\r\n   function m$1(a,v)\r\n   {\r\n    return[Route.New(path.Segments,newQa,path.FormData,path.Method,path.Body),{\r\n     $:1,\r\n     $0:v\r\n    }];\r\n   }\r\n   m=path.QueryArgs.TryFind(key);\r\n   return m!=null&&m.$==1?(newQa=path.QueryArgs.Remove(key),Seq.map(function($1)\r\n   {\r\n    return m$1($1[0],$1[1]);\r\n   },item.Parse((i=Route.get_Empty(),Route.New(List$1.ofArray([m.$0]),i.QueryArgs,i.FormData,i.Method,i.Body))))):[[path,null]];\r\n  },function(value)\r\n  {\r\n   var o,m,$1,i;\r\n   return value!=null&&value.$==1?(o=item.Write(value.$0),o==null?null:{\r\n    $:1,\r\n    $0:(m=Route.Combine(o.$0).Segments,m.$==1&&(m.$1.$==0&&($1=m.$0,true))?[(i=Route.get_Empty(),Route.New(i.Segments,Map.OfArray(Arrays.ofSeq(List$1.ofArray([[key,$1]]))),i.FormData,i.Method,i.Body))]:[])\r\n   }):{\r\n    $:1,\r\n    $0:[]\r\n   };\r\n  });\r\n };\r\n RouterModule.Query=function(key,item)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   var m,newQa,i;\r\n   function m$1(p,v)\r\n   {\r\n    return[Route.New(path.Segments,newQa,path.FormData,path.Method,path.Body),v];\r\n   }\r\n   m=path.QueryArgs.TryFind(key);\r\n   return m!=null&&m.$==1?(newQa=path.QueryArgs.Remove(key),Seq.map(function($1)\r\n   {\r\n    return m$1($1[0],$1[1]);\r\n   },item.Parse((i=Route.get_Empty(),Route.New(List$1.ofArray([m.$0]),i.QueryArgs,i.FormData,i.Method,i.Body))))):[];\r\n  },function(value)\r\n  {\r\n   var o,m,$1,i;\r\n   o=item.Write(value);\r\n   return o==null?null:{\r\n    $:1,\r\n    $0:(m=Route.Combine(o.$0).Segments,m.$==1&&(m.$1.$==0&&($1=m.$0,true))?[(i=Route.get_Empty(),Route.New(i.Segments,Map.OfArray(Arrays.ofSeq(List$1.ofArray([[key,$1]]))),i.FormData,i.Method,i.Body))]:[])\r\n   };\r\n  });\r\n };\r\n RouterModule.CreateWithQuery=function(ser,des)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   var m;\r\n   m=des(path.Segments,path.QueryArgs);\r\n   return m==null?[]:[[Route.New(List$1.T.Empty,path.QueryArgs,path.FormData,path.Method,path.Body),m.$0]];\r\n  },function(value)\r\n  {\r\n   var p,i;\r\n   p=ser(value);\r\n   return{\r\n    $:1,\r\n    $0:[(i=Route.get_Empty(),Route.New(p[0],p[1],i.FormData,i.Method,i.Body))]\r\n   };\r\n  });\r\n };\r\n RouterModule.Create=function(ser,des)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   var m;\r\n   m=des(path.Segments);\r\n   return m==null?[]:[[Route.New(List$1.T.Empty,path.QueryArgs,path.FormData,path.Method,path.Body),m.$0]];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$1(ser(value))]\r\n   };\r\n  });\r\n };\r\n RouterModule.New=function(route,link)\r\n {\r\n  var $1;\r\n  $1={\r\n   WebSharper_Sitelets_IRouter_1$Route:route,\r\n   WebSharper_Sitelets_IRouter_1$Link:link\r\n  };\r\n  Obj.New.call($1);\r\n  return $1;\r\n };\r\n RouterModule.Empty=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.Empty;\r\n };\r\n RouterOperators.JSClass=function(ctor,fields,endpoints,subClasses)\r\n {\r\n  var partsAndRoutersLists,thisClass;\r\n  function readFields(value)\r\n  {\r\n   function m$1(fn,opt,a)\r\n   {\r\n    var v;\r\n    return opt?(v=value[fn],Unchecked.Equals(v,void 0)?null:{\r\n     $:1,\r\n     $0:v\r\n    }):value[fn];\r\n   }\r\n   return Arrays.map(function($1)\r\n   {\r\n    return m$1($1[0],$1[1],$1[2]);\r\n   },fields);\r\n  }\r\n  function createObject(fieldValues)\r\n  {\r\n   var o;\r\n   function a(fn,opt,a$1)\r\n   {\r\n    return function(v)\r\n    {\r\n     if(opt)\r\n     {\r\n      if(v!=null&&v.$==1)\r\n       o[fn]=v.$0;\r\n     }\r\n     else\r\n      o[fn]=v;\r\n    };\r\n   }\r\n   o=ctor();\r\n   (((Runtime.Curried3(Arrays.iter2))(function($1,$2)\r\n   {\r\n    return(function($3)\r\n    {\r\n     return a($3[0],$3[1],$3[2]);\r\n    }($1))($2);\r\n   }))(fields))(fieldValues);\r\n   return o;\r\n  }\r\n  function m(m$1,ep)\r\n  {\r\n   return[m$1,List$1.ofSeq(Seq.map(function(p)\r\n   {\r\n    return typeof p==\"number\"?{\r\n     $:1,\r\n     $0:[p,(Arrays.get(fields,p))[2]]\r\n    }:{\r\n     $:0,\r\n     $0:p\r\n    };\r\n   },ep))];\r\n  }\r\n  partsAndRoutersLists=Arrays.map(function($1)\r\n  {\r\n   return m($1[0],$1[1]);\r\n  },endpoints);\r\n  thisClass=Router.New$1(function(path)\r\n  {\r\n   function collect(fields$1,path$1,arr)\r\n   {\r\n    var i,t,m$2,$1;\r\n    function m$3(p,a)\r\n    {\r\n     var narr;\r\n     narr=arr.slice();\r\n     Arrays.set(narr,i,a);\r\n     return collect(t,p,narr);\r\n    }\r\n    return fields$1.$==1?fields$1.$0.$==1?(i=fields$1.$0.$0[0],(t=fields$1.$1,Seq.collect(function($2)\r\n    {\r\n     return m$3($2[0],$2[1]);\r\n    },fields$1.$0.$0[1].Parse(path$1)))):(m$2=path$1.Segments,m$2.$==1&&(m$2.$0===fields$1.$0.$0&&($1=[m$2.$0,m$2.$1],true))?collect(fields$1.$1,Route.New($1[1],path$1.QueryArgs,path$1.FormData,path$1.Method,path$1.Body),arr):[]):[[path$1,createObject(arr)]];\r\n   }\r\n   function m$1(m$2,ps)\r\n   {\r\n    return RouterOperators.isCorrectMethod(m$2,path.Method)?collect(ps,path,Arrays.create(Arrays.length(fields),null)):[];\r\n   }\r\n   return Seq.collect(function($1)\r\n   {\r\n    return m$1($1[0],$1[1]);\r\n   },partsAndRoutersLists);\r\n  },function(value)\r\n  {\r\n   var values,p,method,parts,w,i;\r\n   values=readFields(value);\r\n   p=Arrays.get(endpoints,0);\r\n   method=p[0];\r\n   parts=Arrays.map(function(a)\r\n   {\r\n    return typeof a==\"number\"?(Arrays.get(fields,a))[2].Write(Arrays.get(values,a)):{\r\n     $:1,\r\n     $0:[Route.Segment$2(a)]\r\n    };\r\n   },p[1]);\r\n   return Arrays.forall(function(o)\r\n   {\r\n    return o!=null;\r\n   },parts)?(w=Seq.collect(function(o)\r\n   {\r\n    return o.$0;\r\n   },parts),method==null?{\r\n    $:1,\r\n    $0:w\r\n   }:{\r\n    $:1,\r\n    $0:Seq.append([(i=Route.get_Empty(),Route.New(i.Segments,i.QueryArgs,i.FormData,method,i.Body))],w)\r\n   }):null;\r\n  });\r\n  return subClasses.length==0?thisClass:RouterModule.Sum(Seq.append(subClasses,[thisClass]));\r\n };\r\n RouterOperators.JSUnion=function(t,cases)\r\n {\r\n  var parseCases;\r\n  function getTag(value)\r\n  {\r\n   var constIndex;\r\n   function p($1)\r\n   {\r\n    return $1!=null&&$1.$==1&&Unchecked.Equals(value,$1.$0);\r\n   }\r\n   constIndex=Seq.tryFindIndex(function($1)\r\n   {\r\n    return p($1[0]);\r\n   },cases);\r\n   return constIndex!=null&&constIndex.$==1?constIndex.$0:value.$;\r\n  }\r\n  function readFields(tag,value)\r\n  {\r\n   return Arrays.init(Arrays.length((Arrays.get(cases,tag))[2]),function(i)\r\n   {\r\n    return value[\"$\"+String(i)];\r\n   });\r\n  }\r\n  function createCase(tag,fieldValues)\r\n  {\r\n   var o,m$1,$1;\r\n   o=t==null?{}:new t();\r\n   m$1=Arrays.get(cases,tag);\r\n   return($1=m$1[0],$1!=null&&$1.$==1)?m$1[0].$0:(o.$=tag,Seq.iteri(function(i,v)\r\n   {\r\n    o[\"$\"+String(i)]=v;\r\n   },fieldValues),o);\r\n  }\r\n  function m(i,a)\r\n  {\r\n   var fields;\r\n   function m$1(m$2,p)\r\n   {\r\n    return[i,m$2,p,fields];\r\n   }\r\n   fields=a[2];\r\n   return Seq.map(function($1)\r\n   {\r\n    return m$1($1[0],$1[1]);\r\n   },a[1]);\r\n  }\r\n  parseCases=Seq.collect(function($1)\r\n  {\r\n   return m($1[0],$1[1]);\r\n  },Seq.indexed(cases));\r\n  return Router.New$1(function(path)\r\n  {\r\n   function m$1(i,m$2,s,fields)\r\n   {\r\n    var m$3,p,m$4;\r\n    function collect(fields$1,path$1,acc)\r\n    {\r\n     var t$1;\r\n     function m$5(p$1,a)\r\n     {\r\n      return collect(t$1,p$1,new List$1.T({\r\n       $:1,\r\n       $0:a,\r\n       $1:acc\r\n      }));\r\n     }\r\n     return fields$1.$==1?(t$1=fields$1.$1,Seq.collect(function($1)\r\n     {\r\n      return m$5($1[0],$1[1]);\r\n     },fields$1.$0.Parse(path$1))):[[path$1,createCase(i,Arrays.ofList(List$1.rev(acc)))]];\r\n    }\r\n    return RouterOperators.isCorrectMethod(m$2,path.Method)?(m$3=List.startsWith(List$1.ofArray(s),path.Segments),m$3==null?[]:(p=m$3.$0,(m$4=List$1.ofArray(fields),m$4.$==0?[[Route.New(p,path.QueryArgs,path.FormData,path.Method,path.Body),createCase(i,[])]]:collect(m$4,Route.New(p,path.QueryArgs,path.FormData,path.Method,path.Body),List$1.T.Empty)))):[];\r\n   }\r\n   return Seq.collect(function($1)\r\n   {\r\n    return m$1($1[0],$1[1],$1[2],$1[3]);\r\n   },parseCases);\r\n  },function(value)\r\n  {\r\n   var tag,p,fields,p$1,casePath,fieldParts;\r\n   function m$1(v,f)\r\n   {\r\n    return f.Write(v);\r\n   }\r\n   tag=getTag(value);\r\n   p=Arrays.get(cases,tag);\r\n   fields=p[2];\r\n   p$1=Arrays.get(p[1],0);\r\n   casePath=[Route.Segment(List$1.ofArray(p$1[1]),p$1[0])];\r\n   return!Unchecked.Equals(fields,null)&&fields.length===0?{\r\n    $:1,\r\n    $0:casePath\r\n   }:(fieldParts=(((Runtime.Curried3(Arrays.map2))(m$1))(readFields(tag,value)))(fields),Arrays.forall(function(o)\r\n   {\r\n    return o!=null;\r\n   },fieldParts)?{\r\n    $:1,\r\n    $0:Seq.append(casePath,Seq.collect(function(o)\r\n    {\r\n     return o.$0;\r\n    },fieldParts))\r\n   }:null);\r\n  });\r\n };\r\n RouterOperators.isCorrectMethod=function(m,p)\r\n {\r\n  return p!=null&&p.$==1?m!=null&&m.$==1?Unchecked.Equals(p.$0,m.$0):true:!(m!=null&&m.$==1);\r\n };\r\n RouterOperators.JSRecord=function(t,fields)\r\n {\r\n  var fields$1,fieldsList;\r\n  function readFields(value)\r\n  {\r\n   function m$1(fn,opt,a)\r\n   {\r\n    var v;\r\n    return opt?(v=value[fn],Unchecked.Equals(v,void 0)?null:{\r\n     $:1,\r\n     $0:v\r\n    }):value[fn];\r\n   }\r\n   return Arrays.map(function($1)\r\n   {\r\n    return m$1($1[0],$1[1],$1[2]);\r\n   },fields);\r\n  }\r\n  function createRecord(fieldValues)\r\n  {\r\n   var o;\r\n   function a(fn,opt,a$1)\r\n   {\r\n    return function(v)\r\n    {\r\n     if(opt)\r\n     {\r\n      if(v!=null&&v.$==1)\r\n       o[fn]=v.$0;\r\n     }\r\n     else\r\n      o[fn]=v;\r\n    };\r\n   }\r\n   o=t==null?{}:new t();\r\n   (((Runtime.Curried3(Arrays.iter2))(function($1,$2)\r\n   {\r\n    return(function($3)\r\n    {\r\n     return a($3[0],$3[1],$3[2]);\r\n    }($1))($2);\r\n   }))(fields))(fieldValues);\r\n   return o;\r\n  }\r\n  function m(a,a$1,r)\r\n  {\r\n   return r;\r\n  }\r\n  fields$1=Arrays.map(function($1)\r\n  {\r\n   return m($1[0],$1[1],$1[2]);\r\n  },fields);\r\n  fieldsList=List$1.ofArray(fields$1);\r\n  return Router.New$1(function(path)\r\n  {\r\n   function collect(fields$2,path$1,acc)\r\n   {\r\n    var t$1;\r\n    function m$1(p,a)\r\n    {\r\n     return collect(t$1,p,new List$1.T({\r\n      $:1,\r\n      $0:a,\r\n      $1:acc\r\n     }));\r\n    }\r\n    return fields$2.$==1?(t$1=fields$2.$1,Seq.collect(function($1)\r\n    {\r\n     return m$1($1[0],$1[1]);\r\n    },fields$2.$0.Parse(path$1))):[[path$1,createRecord(Arrays.ofList(List$1.rev(acc)))]];\r\n   }\r\n   return collect(fieldsList,path,List$1.T.Empty);\r\n  },function(value)\r\n  {\r\n   var parts;\r\n   function m$1(v,r)\r\n   {\r\n    return r.Write(v);\r\n   }\r\n   parts=(((Runtime.Curried3(Arrays.map2))(m$1))(readFields(value)))(fields$1);\r\n   return Arrays.forall(function(o)\r\n   {\r\n    return o!=null;\r\n   },parts)?{\r\n    $:1,\r\n    $0:Seq.collect(function(o)\r\n    {\r\n     return o.$0;\r\n    },parts)\r\n   }:null;\r\n  });\r\n };\r\n RouterOperators.JSTuple=function(items)\r\n {\r\n  return RouterOperators.Tuple(function(value)\r\n  {\r\n   return Arrays.init(Arrays.length(items),function(i)\r\n   {\r\n    return value[i];\r\n   });\r\n  },Global.id,items);\r\n };\r\n RouterOperators.Tuple=function(readItems,createTuple,items)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   function collect(elems,path$1,acc)\r\n   {\r\n    var t;\r\n    function m(p,a)\r\n    {\r\n     return collect(t,p,new List$1.T({\r\n      $:1,\r\n      $0:a,\r\n      $1:acc\r\n     }));\r\n    }\r\n    return elems.$==1?(t=elems.$1,Seq.collect(function($1)\r\n    {\r\n     return m($1[0],$1[1]);\r\n    },elems.$0.Parse(path$1))):[[path$1,createTuple(Arrays.ofList(List$1.rev(acc)))]];\r\n   }\r\n   return collect(List$1.ofArray(items),path,List$1.T.Empty);\r\n  },function(value)\r\n  {\r\n   var parts;\r\n   function m(v,r)\r\n   {\r\n    return r.Write(v);\r\n   }\r\n   parts=(((Runtime.Curried3(Arrays.map2))(m))(readItems(value)))(items);\r\n   return Arrays.forall(function(o)\r\n   {\r\n    return o!=null;\r\n   },parts)?{\r\n    $:1,\r\n    $0:Seq.collect(function(o)\r\n    {\r\n     return o.$0;\r\n    },parts)\r\n   }:null;\r\n  });\r\n };\r\n RouterOperators.rDateTime=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rDateTime;\r\n };\r\n RouterOperators.rWildcardList=function(item)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   function collect(path$1,acc)\r\n   {\r\n    function m(p,a)\r\n    {\r\n     return collect(p,new List$1.T({\r\n      $:1,\r\n      $0:a,\r\n      $1:acc\r\n     }));\r\n    }\r\n    return path$1.Segments.$==0?[[path$1,List$1.rev(acc)]]:Seq.collect(function($1)\r\n    {\r\n     return m($1[0],$1[1]);\r\n    },item.Parse(path$1));\r\n   }\r\n   return collect(path,List$1.T.Empty);\r\n  },function(value)\r\n  {\r\n   var parts;\r\n   parts=List$1.map(item.Write,value);\r\n   return List$1.forAll(function(o)\r\n   {\r\n    return o!=null;\r\n   },parts)?{\r\n    $:1,\r\n    $0:Seq.collect(function(o)\r\n    {\r\n     return o.$0;\r\n    },parts)\r\n   }:null;\r\n  });\r\n };\r\n RouterOperators.rWildcardArray=function(item)\r\n {\r\n  return Router.New$1(function(path)\r\n  {\r\n   function collect(path$1,acc)\r\n   {\r\n    function m(p,a)\r\n    {\r\n     return collect(p,new List$1.T({\r\n      $:1,\r\n      $0:a,\r\n      $1:acc\r\n     }));\r\n    }\r\n    return path$1.Segments.$==0?[[path$1,Arrays.ofList(List$1.rev(acc))]]:Seq.collect(function($1)\r\n    {\r\n     return m($1[0],$1[1]);\r\n    },item.Parse(path$1));\r\n   }\r\n   return collect(path,List$1.T.Empty);\r\n  },function(value)\r\n  {\r\n   var parts;\r\n   parts=Arrays.map(item.Write,value);\r\n   return Arrays.forall(function(o)\r\n   {\r\n    return o!=null;\r\n   },parts)?{\r\n    $:1,\r\n    $0:Seq.collect(function(o)\r\n    {\r\n     return o.$0;\r\n    },parts)\r\n   }:null;\r\n  });\r\n };\r\n RouterOperators.rWildcard=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rWildcard;\r\n };\r\n RouterOperators.rBool=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rBool;\r\n };\r\n RouterOperators.rSingle=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rSingle;\r\n };\r\n RouterOperators.rUInt64=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rUInt64;\r\n };\r\n RouterOperators.rInt64=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rInt64;\r\n };\r\n RouterOperators.rUInt=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rUInt;\r\n };\r\n RouterOperators.rUInt16=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rUInt16;\r\n };\r\n RouterOperators.rInt16=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rInt16;\r\n };\r\n RouterOperators.rByte=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rByte;\r\n };\r\n RouterOperators.rSByte=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rSByte;\r\n };\r\n RouterOperators.rDouble=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rDouble;\r\n };\r\n RouterOperators.rInt=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rInt;\r\n };\r\n RouterOperators.rGuid=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rGuid;\r\n };\r\n RouterOperators.rChar=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rChar;\r\n };\r\n RouterOperators.rString=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rString;\r\n };\r\n RouterOperators.rRoot=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.rRoot;\r\n };\r\n SC$1.$cctor=function()\r\n {\r\n  SC$1.$cctor=Global.ignore;\r\n  function pInt(x)\r\n  {\r\n   var m,o;\r\n   m=(o=0,[Numeric.TryParseInt32(x,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o]);\r\n   return m[0]?{\r\n    $:1,\r\n    $0:m[1]\r\n   }:null;\r\n  }\r\n  SC$1.Empty=Router.New$1(function()\r\n  {\r\n   return[];\r\n  },function()\r\n  {\r\n   return null;\r\n  });\r\n  SC$1.rRoot=Router.New(function(path)\r\n  {\r\n   return[path];\r\n  },[]);\r\n  SC$1.rString=Router.New$1(function(path)\r\n  {\r\n   var m,m$1;\r\n   m=path.Segments;\r\n   return m.$==1?(m$1=StringEncoding.read(m.$0),m$1!=null&&m$1.$==1?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),m$1.$0]]:[]):[];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2(value==null?\"null\":StringEncoding.write(value))]\r\n   };\r\n  });\r\n  SC$1.rChar=Router.New$1(function(path)\r\n  {\r\n   var m,m$1,$1;\r\n   m=path.Segments;\r\n   return m.$==1?(m$1=StringEncoding.read(m.$0),m$1!=null&&m$1.$==1&&(m$1.$0.length===1&&($1=m$1.$0,true))?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),Char.Parse($1)]]:[]):[];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2(value)]\r\n   };\r\n  });\r\n  SC$1.rGuid=Router.New$1(function(path)\r\n  {\r\n   var m,res;\r\n   m=path.Segments;\r\n   return m.$==1?(res=null,Guid.TryParse(m.$0,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v)\r\n    {\r\n     res=v;\r\n    }\r\n   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2(String(value))]\r\n   };\r\n  });\r\n  SC$1.rInt=Router.New$1(function(path)\r\n  {\r\n   var m,res;\r\n   m=path.Segments;\r\n   return m.$==1?(res=0,Numeric.TryParseInt32(m.$0,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v)\r\n    {\r\n     res=v;\r\n    }\r\n   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2(String(value))]\r\n   };\r\n  });\r\n  SC$1.rDouble=Router.New$1(function(path)\r\n  {\r\n   var m,res,$1;\r\n   m=path.Segments;\r\n   return m.$==1?(res=0,($1=Global.Number(m.$0),Global.isNaN($1)?false:(res=$1,true))?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2(String(value))]\r\n   };\r\n  });\r\n  SC$1.rSByte=Router.New$1(function(path)\r\n  {\r\n   var m,res;\r\n   m=path.Segments;\r\n   return m.$==1?(res=0,Numeric.TryParseSByte(m.$0,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v)\r\n    {\r\n     res=v;\r\n    }\r\n   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2(String(value))]\r\n   };\r\n  });\r\n  SC$1.rByte=Router.New$1(function(path)\r\n  {\r\n   var m,res;\r\n   m=path.Segments;\r\n   return m.$==1?(res=0,Numeric.TryParseByte(m.$0,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v)\r\n    {\r\n     res=v;\r\n    }\r\n   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2(String(value))]\r\n   };\r\n  });\r\n  SC$1.rInt16=Router.New$1(function(path)\r\n  {\r\n   var m,res;\r\n   m=path.Segments;\r\n   return m.$==1?(res=0,Numeric.TryParseInt16(m.$0,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v)\r\n    {\r\n     res=v;\r\n    }\r\n   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2(String(value))]\r\n   };\r\n  });\r\n  SC$1.rUInt16=Router.New$1(function(path)\r\n  {\r\n   var m,res;\r\n   m=path.Segments;\r\n   return m.$==1?(res=0,Numeric.TryParseUInt16(m.$0,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v)\r\n    {\r\n     res=v;\r\n    }\r\n   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2(String(value))]\r\n   };\r\n  });\r\n  SC$1.rUInt=Router.New$1(function(path)\r\n  {\r\n   var m,res;\r\n   m=path.Segments;\r\n   return m.$==1?(res=0,Numeric.TryParseUInt32(m.$0,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v)\r\n    {\r\n     res=v;\r\n    }\r\n   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2(String(value))]\r\n   };\r\n  });\r\n  SC$1.rInt64=Router.New$1(function(path)\r\n  {\r\n   var m,res;\r\n   m=path.Segments;\r\n   return m.$==1?(res=0,Numeric.TryParseInt64(m.$0,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v)\r\n    {\r\n     res=v;\r\n    }\r\n   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2(String(value))]\r\n   };\r\n  });\r\n  SC$1.rUInt64=Router.New$1(function(path)\r\n  {\r\n   var m,res;\r\n   m=path.Segments;\r\n   return m.$==1?(res=0,Numeric.TryParseUInt64(m.$0,{\r\n    get:function()\r\n    {\r\n     return res;\r\n    },\r\n    set:function(v)\r\n    {\r\n     res=v;\r\n    }\r\n   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2(String(value))]\r\n   };\r\n  });\r\n  SC$1.rSingle=Router.New$1(function(path)\r\n  {\r\n   var m,res,$1;\r\n   m=path.Segments;\r\n   return m.$==1?(res=0,($1=Global.Number(m.$0),Global.isNaN($1)?false:(res=$1,true))?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2(String(value))]\r\n   };\r\n  });\r\n  SC$1.rBool=Router.New$1(function(path)\r\n  {\r\n   var m,m$1,o;\r\n   m=path.Segments;\r\n   return m.$==1?(m$1=(o=null,[Numeric.TryParseBool(m.$0,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o]),m$1[0]?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),m$1[1]]]:[]):[];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2(value?\"True\":\"False\")]\r\n   };\r\n  });\r\n  SC$1.rWildcard=Router.New$1(function(path)\r\n  {\r\n   return[[Route.New(List$1.T.Empty,path.QueryArgs,path.FormData,path.Method,path.Body),Strings.concat(\"/\",path.Segments)]];\r\n  },function(value)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2(value)]\r\n   };\r\n  });\r\n  SC$1.rDateTime=Router.New$1(function(path)\r\n  {\r\n   var m,h,$1,$2,$3,$4,$5,$6,$7;\r\n   m=path.Segments;\r\n   return m.$==1?(h=m.$0,h.length===19&&h[4]===\"-\"&&h[7]===\"-\"&&h[10]===\"-\"&&h[13]===\".\"&&h[16]===\".\"?($1=pInt(Slice.string(h,{\r\n    $:1,\r\n    $0:0\r\n   },{\r\n    $:1,\r\n    $0:3\r\n   })),($2=pInt(Slice.string(h,{\r\n    $:1,\r\n    $0:5\r\n   },{\r\n    $:1,\r\n    $0:6\r\n   })),($3=pInt(Slice.string(h,{\r\n    $:1,\r\n    $0:8\r\n   },{\r\n    $:1,\r\n    $0:9\r\n   })),($4=pInt(Slice.string(h,{\r\n    $:1,\r\n    $0:11\r\n   },{\r\n    $:1,\r\n    $0:12\r\n   })),($5=pInt(Slice.string(h,{\r\n    $:1,\r\n    $0:14\r\n   },{\r\n    $:1,\r\n    $0:15\r\n   })),($6=pInt(Slice.string(h,{\r\n    $:1,\r\n    $0:17\r\n   },{\r\n    $:1,\r\n    $0:18\r\n   })),$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3!=null&&$3.$==1&&($4!=null&&$4.$==1&&($5!=null&&$5.$==1&&($6!=null&&$6.$==1&&($7=[$3.$0,$4.$0,$2.$0,$5.$0,$6.$0,$1.$0],true))))))?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),(new Global.Date($7[5],$7[2]-1,$7[0],$7[1],$7[3],$7[4])).getTime()]]:[])))))):[]):[];\r\n  },function(d)\r\n  {\r\n   var s,m;\r\n   function pad2(x)\r\n   {\r\n    var s$1;\r\n    s$1=String(x);\r\n    return s$1.length===1?\"0\"+s$1:s$1;\r\n   }\r\n   return{\r\n    $:1,\r\n    $0:[Route.Segment$2((s=String((new Global.Date(d)).getFullYear()),(m=s.length,m===1?\"000\"+s:m===2?\"00\"+s:m===3?\"0\"+s:s))+\"-\"+pad2((new Global.Date(d)).getMonth()+1)+\"-\"+pad2((new Global.Date(d)).getDate())+\"-\"+pad2((new Global.Date(d)).getHours())+\".\"+pad2((new Global.Date(d)).getMinutes())+\".\"+pad2((new Global.Date(d)).getSeconds()))]\r\n   };\r\n  });\r\n };\r\n}());\r\n"
    }
  ]
}
{
  "asName": "WebSharper.UI",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm",
    "WebSharper.Control.asm",
    "WebSharper.Web.asm",
    "WebSharper.Sitelets.asm"
  ],
  "resources": [],
  "modules": [
    {
      "moName": "WebSharper.UI.Array",
      "methods": [
        {
          "meName": "mapInPlace",
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
          "meName": "ofSeqNonCopying",
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
          "meName": "MapTreeReduce",
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
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "('b -> ('b -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TreeReduce",
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
              "tName": "('a -> ('a -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.String",
      "methods": [
        {
          "meName": "isBlank",
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
        }
      ]
    },
    {
      "moName": "WebSharper.UI.List",
      "methods": [
        {
          "meName": "maybeReplaceFirst",
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
              "tName": "('a -> Option<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "replaceFirst",
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
              "tName": "('a -> 'a)",
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
      "moName": "WebSharper.UI.Abbrev+Fresh",
      "methods": [
        {
          "meName": "Id",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "Int",
          "isField": 0,
          "type": {
            "tName": "int",
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
      "moName": "WebSharper.UI.Abbrev+HashSet",
      "methods": [
        {
          "meName": "Filter",
          "isField": 0,
          "type": {
            "tName": "HashSet<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "HashSet<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Intersect",
          "isField": 0,
          "type": {
            "tName": "HashSet<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "HashSet<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "HashSet<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Except",
          "isField": 0,
          "type": {
            "tName": "HashSet<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "HashSet<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "HashSet<'a>",
              "asm": "netstandard"
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
              "tName": "HashSet<'a>",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Abbrev+Dict",
      "methods": [
        {
          "meName": "ToValueArray",
          "isField": 0,
          "type": {
            "tName": "'b[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Dictionary<'a, 'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ToKeyArray",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Dictionary<'a, 'b>",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Abbrev+Queue",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Abbrev+Slot`2",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Abbrev+Slot",
      "methods": [
        {
          "meName": "Create",
          "isField": 0,
          "type": {
            "tName": "Abbrev+Slot<'a, 'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
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
      "moName": "WebSharper.UI.Abbrev+Async",
      "methods": [
        {
          "meName": "OnError",
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
          "meName": "StartTo",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Abbrev+Mailbox+MailboxState",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Abbrev+Mailbox",
      "methods": [
        {
          "meName": "StartProcessor",
          "isField": 0,
          "type": {
            "tName": "(unit -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Async<unit>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "StartupCode$WebSharper_UI$Abbrev",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.AppendList",
      "methods": [
        {
          "meName": "FromArray",
          "isField": 0,
          "type": {
            "tName": "AppendList<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
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
              "tName": "AppendList<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Single",
          "isField": 0,
          "type": {
            "tName": "AppendList<'a>",
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
          "meName": "Concat",
          "isField": 0,
          "type": {
            "tName": "AppendList<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<AppendList<'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Append",
          "isField": 0,
          "type": {
            "tName": "AppendList<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "AppendList<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "AppendList<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Empty",
          "isField": 1,
          "type": {
            "tName": "AppendList<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "StartupCode$WebSharper_UI$AppendList",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.DomUtility+InsertPos",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.DomUtility",
      "methods": [
        {
          "meName": "SetProperty",
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
          "meName": "IterSelector",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ChildrenArray",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Dom.Node[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "RemoveClass",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "AddClass",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "setClass",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "getClass",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "clsRE",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.RegExp",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "InsertAt",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "InsertPos",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "RemoveNode",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "SetStyle",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
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
          "meName": "SetAttr",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
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
          "meName": "RemoveAttr",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "CreateAttr",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Dom.Attr",
            "asm": "WebSharper.JavaScript"
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
          "meName": "CreateText",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Dom.Text",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "CreateSvgElement",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Dom.Element",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "CreateElement",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Dom.Element",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
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
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "ClearAttrs",
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
          "meName": "AppendTo",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "Doc",
          "isField": 1,
          "type": {
            "tName": "WebSharper.JavaScript.Dom.Document",
            "asm": "WebSharper.JavaScript"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "StartupCode$WebSharper_UI$DomUtility",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Trie+LookupResult`2",
      "methods": [
        {
          "meName": "_unique_NotFound",
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
      "moName": "WebSharper.UI.Trie",
      "methods": [
        {
          "meName": "Empty",
          "isField": 1,
          "type": {
            "tName": "Trie<'a, 'b>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "Lookup",
          "isField": 0,
          "type": {
            "tName": "LookupResult<'a, 'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Trie<'a, 'b>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Look",
          "isField": 0,
          "type": {
            "tName": "LookupResult<'a, 'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Trie<'a, 'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "ToArray",
          "isField": 0,
          "type": {
            "tName": "'b[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Trie<'a, 'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Mapi",
          "isField": 0,
          "type": {
            "tName": "Trie<'a, 'c>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(int -> (List<'a> -> ('b -> 'c)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Trie<'a, 'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map",
          "isField": 0,
          "type": {
            "tName": "Trie<'a, 'c>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(List<'a> -> ('b -> 'c))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Trie<'a, 'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "MapLoop",
          "isField": 0,
          "type": {
            "tName": "Trie<'a, 'c>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(List<'a> -> ('b -> 'c))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Trie<'a, 'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Merge",
          "isField": 0,
          "type": {
            "tName": "Option<Trie<'a, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<Trie<'a, 'b>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "IsLeaf",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Trie<'a, 'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "MergeMaps",
          "isField": 0,
          "type": {
            "tName": "Option<Map<'c, 'b>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(List<'a> -> Option<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<Map<'c, 'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "AllSome",
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
          "meName": "MultiAdd",
          "isField": 0,
          "type": {
            "tName": "Map<'a, List<'b>>",
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
              "tName": "Map<'a, List<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "MultiFind",
          "isField": 0,
          "type": {
            "tName": "List<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "Map<'a, List<'b>>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Prefix",
          "isField": 0,
          "type": {
            "tName": "Trie<'a, 'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "Trie<'a, 'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Leaf",
          "isField": 0,
          "type": {
            "tName": "Trie<'b, 'a>",
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
          "meName": "TrieBranch",
          "isField": 0,
          "type": {
            "tName": "Trie<'a, 'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Map<'a, Trie<'a, 'b>>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "StartupCode$WebSharper_UI$Trie",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Resources.H5FModule",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.SnapState`1",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.SnapInternals",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Snap`1",
      "methods": [
        {
          "meName": "Obsolete",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.ISnap",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Snap",
      "methods": [
        {
          "meName": "MapAsync",
          "isField": 0,
          "type": {
            "tName": "Snap<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> Async<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "SnapshotOn",
          "isField": 0,
          "type": {
            "tName": "Snap<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Snap<'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map3",
          "isField": 0,
          "type": {
            "tName": "Snap<'d>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c -> 'd)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Snap<'b>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Snap<'c>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map3Opt6",
          "isField": 0,
          "type": {
            "tName": "Snap<'d>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c -> 'd)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'c",
              "asm": ""
            },
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Snap<'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map3Opt5",
          "isField": 0,
          "type": {
            "tName": "Snap<'d>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c -> 'd)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Snap<'c>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map3Opt4",
          "isField": 0,
          "type": {
            "tName": "Snap<'d>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c -> 'd)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "'c",
              "asm": ""
            },
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map3Opt3",
          "isField": 0,
          "type": {
            "tName": "Snap<'d>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c -> 'd)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "Snap<'b>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Snap<'c>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map3Opt2",
          "isField": 0,
          "type": {
            "tName": "Snap<'d>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c -> 'd)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "'c",
              "asm": ""
            },
            {
              "tName": "Snap<'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map3Opt1",
          "isField": 0,
          "type": {
            "tName": "Snap<'d>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c -> 'd)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "Snap<'c>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map2Unit",
          "isField": 0,
          "type": {
            "tName": "Snap<unit>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Snap<unit>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Snap<unit>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map2",
          "isField": 0,
          "type": {
            "tName": "Snap<'c>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'c))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Snap<'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map2Opt2",
          "isField": 0,
          "type": {
            "tName": "Snap<'c>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'c))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map2Opt1",
          "isField": 0,
          "type": {
            "tName": "Snap<'c>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'c))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "Snap<'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "MapCachedBy",
          "isField": 0,
          "type": {
            "tName": "Snap<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('a -> bool))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FSharpRef<Option<('a * 'b)>>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Copy",
          "isField": 0,
          "type": {
            "tName": "Snap<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "WithInitOption",
          "isField": 0,
          "type": {
            "tName": "Snap<Option<'a>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "WithInit",
          "isField": 0,
          "type": {
            "tName": "Snap<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map",
          "isField": 0,
          "type": {
            "tName": "Snap<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Sequence",
          "isField": 0,
          "type": {
            "tName": "Snap<IEnumerable<'a>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Snap<'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "CreateForeverAsync",
          "isField": 0,
          "type": {
            "tName": "Snap<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "JoinInner",
          "isField": 0,
          "type": {
            "tName": "Snap<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Snap<(unit -> Snap<'a>)>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Join",
          "isField": 0,
          "type": {
            "tName": "Snap<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Snap<(unit -> Snap<'a>)>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "ValueAndForever",
          "isField": 0,
          "type": {
            "tName": "Option<('a * bool)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "WhenObsoleteRun",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "WhenObsolete",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "ISnap",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "WhenReady",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "WhenRun",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "When",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "ISnap",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "EnqueueSafe",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Queue<WebSharper.JavaScript.Union<ISnap, (unit -> unit)>>",
              "asm": "netstandard"
            },
            {
              "tName": "WebSharper.JavaScript.Union<ISnap, (unit -> unit)>",
              "asm": "WebSharper.Core"
            }
          ]
        },
        {
          "meName": "MarkDone",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Snap<'b>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "MarkReady",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "MarkForever",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "TryGet",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Snap<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Var`1",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.View`1",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.ViewOptimization",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.ConcreteVar`1",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Var",
      "methods": [
        {
          "meName": "MapLens",
          "isField": 0,
          "type": {
            "tName": "View<IEnumerable<'b>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> 'c)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Var<'a> -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Var<List<'a>>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Lens",
          "isField": 0,
          "type": {
            "tName": "Var<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Var<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> ('b -> 'a))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Update",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Var<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('a -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "SetFinal",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Var<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Set",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Var<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "CreateWaiting",
          "isField": 0,
          "type": {
            "tName": "Var<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "Create",
          "isField": 0,
          "type": {
            "tName": "Var<unit>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "CreateLogged",
          "isField": 0,
          "type": {
            "tName": "Var<'a>",
            "asm": "WebSharper.UI"
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
          "meName": "Create",
          "isField": 0,
          "type": {
            "tName": "Var<'a>",
            "asm": "WebSharper.UI"
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
      "moName": "WebSharper.UI.Updates",
      "methods": [
        {
          "meName": "Create",
          "isField": 0,
          "type": {
            "tName": "Updates",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<unit>",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.View",
      "methods": [
        {
          "meName": "get_Do",
          "isField": 0,
          "type": {
            "tName": "ViewBuilder",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "Apply",
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
          "meName": "AsyncAwait",
          "isField": 0,
          "type": {
            "tName": "Async<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "RemovableSink",
          "isField": 0,
          "type": {
            "tName": "(unit -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Sink",
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
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "TryFinally",
          "isField": 0,
          "type": {
            "tName": "View<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "TryWith",
          "isField": 0,
          "type": {
            "tName": "View<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(Exception -> View<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "ConstAsync",
          "isField": 0,
          "type": {
            "tName": "View<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Async<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Const",
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
          "meName": "Sequence",
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
          "meName": "UpdateWhile",
          "isField": 0,
          "type": {
            "tName": "View<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "View<bool>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "BindInner",
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
          "meName": "JoinInner",
          "isField": 0,
          "type": {
            "tName": "View<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<View<'a>>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Bind",
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
          "meName": "Join",
          "isField": 0,
          "type": {
            "tName": "View<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<View<'a>>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "MapSeqCachedView",
          "isField": 0,
          "type": {
            "tName": "View<IEnumerable<'b>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(View<'a> -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'c>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "MapSeqCachedViewBy",
          "isField": 0,
          "type": {
            "tName": "View<IEnumerable<'b>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> 'c)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('c -> (View<'a> -> 'b))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'d>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "ConvertSeqNode",
          "isField": 0,
          "type": {
            "tName": "ViewNode<'a, 'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(View<'a> -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "MapSeqCached",
          "isField": 0,
          "type": {
            "tName": "View<IEnumerable<'b>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'c>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "MapSeqCachedBy",
          "isField": 0,
          "type": {
            "tName": "View<IEnumerable<'b>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> 'c)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'d>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "SnapshotOn",
          "isField": 0,
          "type": {
            "tName": "View<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "View<'b>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "GetAsync",
          "isField": 0,
          "type": {
            "tName": "Async<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "WithInitOption",
          "isField": 0,
          "type": {
            "tName": "View<Option<'a>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "WithInit",
          "isField": 0,
          "type": {
            "tName": "View<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Get",
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
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "TryGet",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "MapAsync2",
          "isField": 0,
          "type": {
            "tName": "View<'c>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> Async<'c>))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "MapAsync",
          "isField": 0,
          "type": {
            "tName": "View<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> Async<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map3",
          "isField": 0,
          "type": {
            "tName": "View<'d>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> ('c -> 'd)))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<'b>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<'c>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map2Unit",
          "isField": 0,
          "type": {
            "tName": "View<unit>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<unit>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<unit>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map2",
          "isField": 0,
          "type": {
            "tName": "View<'c>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'c))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "MapCached",
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
          "meName": "MapCachedBy",
          "isField": 0,
          "type": {
            "tName": "View<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('a -> bool))",
              "asm": "FSharp.Core"
            },
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
          "meName": "Map",
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
          "meName": "CreateLazy",
          "isField": 0,
          "type": {
            "tName": "View<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(unit -> Snap<'a>)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.FromView`1",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.ViewBuilder",
      "methods": [
        {
          "meName": "_unique_B",
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
      "moName": "WebSharper.UI.Submitter`1",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Submitter",
      "methods": [
        {
          "meName": "CreateOption",
          "isField": 0,
          "type": {
            "tName": "Submitter<Option<'a>>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.V",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Key",
      "methods": [
        {
          "meName": "Fresh",
          "isField": 0,
          "type": {
            "tName": "Key",
            "asm": "WebSharper.UI"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Model`2",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Model",
      "methods": [
        {
          "meName": "Update",
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
              "tName": "Model<'b, 'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Create",
          "isField": 0,
          "type": {
            "tName": "Model<'b, 'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
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
      "moName": "WebSharper.UI.Serializer",
      "methods": [
        {
          "meName": "Default",
          "isField": 1,
          "type": {
            "tName": "Serializer<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Storage+ArrayStorage`1",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Storage+LocalStorageBackend`1",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Storage",
      "methods": [
        {
          "meName": "LocalStorage",
          "isField": 0,
          "type": {
            "tName": "Storage<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Serializer<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "InMemory",
          "isField": 0,
          "type": {
            "tName": "Storage<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.ListModelState`1",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.ListModel`2",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.ListModels",
      "methods": [
        {
          "meName": "Contains",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
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
              "tName": "'a[]",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.ListModel",
      "methods": [
        {
          "meName": "Wrap",
          "isField": 0,
          "type": {
            "tName": "ListModel<'a, 'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "ListModel<'a, 'c>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('b -> 'c)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('c -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('b -> ('c -> 'b))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "FromSeq",
          "isField": 0,
          "type": {
            "tName": "ListModel<'a, 'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Create",
          "isField": 0,
          "type": {
            "tName": "ListModel<'a, 'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('b -> 'a)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "CreateWithStorage",
          "isField": 0,
          "type": {
            "tName": "ListModel<'a, 'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('b -> 'a)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Storage<'b>",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "StartupCode$WebSharper_UI$Models",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.VarModule",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.ReactiveExtensions",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.DoubleInterpolation",
      "methods": [
        {
          "meName": "_unique_DoubleInterpolation",
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
      "moName": "WebSharper.UI.Interpolation",
      "methods": [
        {
          "meName": "get_Double",
          "isField": 0,
          "type": {
            "tName": "Interpolation<Double>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Easing",
      "methods": [
        {
          "meName": "get_CubicInOut",
          "isField": 0,
          "type": {
            "tName": "Easing",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "Custom",
          "isField": 0,
          "type": {
            "tName": "Easing",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(Double -> Double)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Easings",
      "methods": [
        {
          "meName": "CubicInOut",
          "isField": 1,
          "type": {
            "tName": "Easing",
            "asm": "WebSharper.UI"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Anim",
      "methods": [
        {
          "meName": "get_Empty",
          "isField": 0,
          "type": {
            "tName": "Anim",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "WhenDone",
          "isField": 0,
          "type": {
            "tName": "Anim",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Anim",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Run",
          "isField": 0,
          "type": {
            "tName": "Async<unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Anim<unit>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Play",
          "isField": 0,
          "type": {
            "tName": "Async<unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Anim",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Pack",
          "isField": 0,
          "type": {
            "tName": "Anim",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Anim<unit>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Map",
          "isField": 0,
          "type": {
            "tName": "Anim<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Anim<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Delayed",
          "isField": 0,
          "type": {
            "tName": "Anim<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Interpolation<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Easing",
              "asm": "WebSharper.UI"
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
          "meName": "Simple",
          "isField": 0,
          "type": {
            "tName": "Anim<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Interpolation<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Easing",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Double",
              "asm": "netstandard"
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
          "meName": "Const",
          "isField": 0,
          "type": {
            "tName": "Anim<'a>",
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
          "meName": "Concat",
          "isField": 0,
          "type": {
            "tName": "Anim",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Anim>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Append",
          "isField": 0,
          "type": {
            "tName": "Anim",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Anim",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Anim",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "set_UseAnimations",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "get_UseAnimations",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Anims",
      "methods": [
        {
          "meName": "UseAnimations",
          "isField": 1,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "set_UseAnimations",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Actions",
          "isField": 0,
          "type": {
            "tName": "Anim<unit>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Anim",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "ConcatActions",
          "isField": 0,
          "type": {
            "tName": "Anim<unit>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Anim<unit>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Prolong",
          "isField": 0,
          "type": {
            "tName": "Anim<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Double",
              "asm": "netstandard"
            },
            {
              "tName": "Anim<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Const",
          "isField": 0,
          "type": {
            "tName": "Anim<'a>",
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
          "meName": "Def",
          "isField": 0,
          "type": {
            "tName": "Anim<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Double",
              "asm": "netstandard"
            },
            {
              "tName": "(Double -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Finalize",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Anim",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "List",
          "isField": 0,
          "type": {
            "tName": "AppendList<Animation>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Anim",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Trans`1",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Trans",
      "methods": [
        {
          "meName": "Exit",
          "isField": 0,
          "type": {
            "tName": "Trans<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> Anim<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Trans<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Enter",
          "isField": 0,
          "type": {
            "tName": "Trans<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> Anim<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Trans<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Change",
          "isField": 0,
          "type": {
            "tName": "Trans<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('a -> Anim<'a>))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Trans<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Create",
          "isField": 0,
          "type": {
            "tName": "Trans<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> ('a -> Anim<'a>))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Trivial",
          "isField": 0,
          "type": {
            "tName": "Trans<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "CanAnimateExit",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Trans<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "CanAnimateEnter",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Trans<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "CanAnimateChange",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Trans<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "AnimateExit",
          "isField": 0,
          "type": {
            "tName": "Anim<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Trans<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "AnimateEnter",
          "isField": 0,
          "type": {
            "tName": "Anim<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Trans<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "AnimateChange",
          "isField": 0,
          "type": {
            "tName": "Anim<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Trans<'a>",
              "asm": "WebSharper.UI"
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
        }
      ]
    },
    {
      "moName": "StartupCode$WebSharper_UI$Animation",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.OnAfterRenderControl",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Client.AnimatedAttrNode`1",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Client.DynamicAttrNode`1",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Attr",
      "methods": [
        {
          "meName": "Handler",
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
              "tName": "Microsoft.FSharp.Quotations.FSharpExpr<(WebSharper.JavaScript.Dom.Element -> ('a -> unit))>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "HandlerImpl",
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
              "tName": "Microsoft.FSharp.Quotations.FSharpExpr<(WebSharper.JavaScript.Dom.Element -> ('a -> unit))>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "OnAfterRenderImpl",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Microsoft.FSharp.Quotations.FSharpExpr<(WebSharper.JavaScript.Dom.Element -> unit)>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Concat",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Append",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Attr",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Attr",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Create",
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
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Client.Attrs+Dyn",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Client.Attrs",
      "methods": [
        {
          "meName": "Static",
          "isField": 0,
          "type": {
            "tName": "Attr",
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
          "meName": "Dynamic",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> ('a -> unit))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Animated",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Trans<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> ('a -> unit))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "EmptyAttr",
          "isField": 1,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "AppendTree",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Attr",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Attr",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "GetChangeAnim",
          "isField": 0,
          "type": {
            "tName": "Anim",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Dyn",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "GetExitAnim",
          "isField": 0,
          "type": {
            "tName": "Anim",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Dyn",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "GetEnterAnim",
          "isField": 0,
          "type": {
            "tName": "Anim",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Dyn",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "GetAnim",
          "isField": 0,
          "type": {
            "tName": "Anim",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Dyn",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "(Client.IAttrNode -> (WebSharper.JavaScript.Dom.Element -> Anim))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Updates",
          "isField": 0,
          "type": {
            "tName": "View<unit>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Dyn",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Empty",
          "isField": 0,
          "type": {
            "tName": "Dyn",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "Insert",
          "isField": 0,
          "type": {
            "tName": "Dyn",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Attr",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Sync",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Dyn",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "SetFlags",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Attr",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Client.AttrFlags",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Flags",
          "isField": 0,
          "type": {
            "tName": "Client.AttrFlags",
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
          "meName": "HasExitAnim",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Dyn",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "HasEnterAnim",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Dyn",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "HasChangeAnim",
          "isField": 0,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Dyn",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Client.CheckedInput`1",
      "methods": [
        {
          "meName": "Make",
          "isField": 0,
          "type": {
            "tName": "Client.CheckedInput<'a>",
            "asm": "WebSharper.UI"
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
      "moName": "WebSharper.UI.Client.Attr",
      "methods": [
        {
          "meName": "ValidateForm",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "Checked",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Var<bool>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "FloatValue",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Var<Client.CheckedInput<Double>>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "FloatValueUnchecked",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Var<Double>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "IntValue",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Var<Client.CheckedInput<int>>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "IntValueUnchecked",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Var<int>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Value",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "ContentEditableHtml",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "ContentEditableText",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "CustomValue",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Var<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(string -> Option<'a>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "CustomVar",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Var<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> ('a -> unit))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> Option<'a>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "DynamicProp",
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
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "DynamicPred",
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
              "tName": "View<bool>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "DynamicClass",
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
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Class",
          "isField": 0,
          "type": {
            "tName": "Attr",
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
          "meName": "DynamicClassPred",
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
              "tName": "View<bool>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "OnAfterRenderView",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> ('a -> unit))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "OnAfterRender",
          "isField": 0,
          "type": {
            "tName": "Attr",
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
          "meName": "HandlerView",
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
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> ('b -> ('a -> unit)))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Handler",
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
              "tName": "(WebSharper.JavaScript.Dom.Element -> ('a -> unit))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "DynamicStyle",
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
              "tName": "View<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "DynamicCustom",
          "isField": 0,
          "type": {
            "tName": "Attr",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> ('a -> unit))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Dynamic",
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
              "tName": "View<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "AnimatedStyle",
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
              "tName": "Trans<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Animated",
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
              "tName": "Trans<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
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
      "moName": "StartupCode$WebSharper_UI$Attr_Client",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.TemplateHole",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Client.Settings",
      "methods": [
        {
          "meName": "BatchUpdatesEnabled",
          "isField": 1,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "set_BatchUpdatesEnabled",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Client.DocNode",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Client.DocElemNode",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Client.Docs+DomNodes",
      "methods": [
        {
          "meName": "FoldBack",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "(WebSharper.JavaScript.Dom.Node -> ('a -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Client.Docs+DomNodes",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Iter",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(WebSharper.JavaScript.Dom.Node -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Client.Docs+DomNodes",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Except",
          "isField": 0,
          "type": {
            "tName": "Client.Docs+DomNodes",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Client.Docs+DomNodes",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Client.Docs+DomNodes",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "DocChildren",
          "isField": 0,
          "type": {
            "tName": "Client.Docs+DomNodes",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Client.DocElemNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Children",
          "isField": 0,
          "type": {
            "tName": "Client.Docs+DomNodes",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Option<(WebSharper.JavaScript.Dom.Node * WebSharper.JavaScript.Dom.Node)>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Client.Docs+NodeSet",
      "methods": [
        {
          "meName": "ToArray",
          "isField": 0,
          "type": {
            "tName": "Client.DocElemNode[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Client.Docs+NodeSet",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "get_Empty",
          "isField": 0,
          "type": {
            "tName": "Client.Docs+NodeSet",
            "asm": "WebSharper.UI"
          },
          "parms": []
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
              "tName": "Client.Docs+NodeSet",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Intersect",
          "isField": 0,
          "type": {
            "tName": "Client.Docs+NodeSet",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Client.Docs+NodeSet",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Client.Docs+NodeSet",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Except",
          "isField": 0,
          "type": {
            "tName": "Client.Docs+NodeSet",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Client.Docs+NodeSet",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Client.Docs+NodeSet",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "FindAll",
          "isField": 0,
          "type": {
            "tName": "Client.Docs+NodeSet",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Client.DocNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Filter",
          "isField": 0,
          "type": {
            "tName": "Client.Docs+NodeSet",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(Client.DocElemNode -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Client.Docs+NodeSet",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Client.Docs+RunState",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Client.Docs",
      "methods": [
        {
          "meName": "UpdateTextNode",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Client.DocTextNode",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "CreateTextNode",
          "isField": 0,
          "type": {
            "tName": "Client.DocTextNode",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "UpdateEmbedNode",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Client.DocEmbedNode",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Client.DocNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "CreateEmbedNode",
          "isField": 0,
          "type": {
            "tName": "Client.DocEmbedNode",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "PerformSyncUpdate",
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
              "tName": "RunState",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Client.DocNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "PerformAnimatedUpdate",
          "isField": 0,
          "type": {
            "tName": "Async<unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "RunState",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Client.DocNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "SyncElemNodesNextFrame",
          "isField": 0,
          "type": {
            "tName": "Async<unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "RunState",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "ComputeEnterAnim",
          "isField": 0,
          "type": {
            "tName": "Anim",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "RunState",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "NodeSet",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "ComputeChangeAnim",
          "isField": 0,
          "type": {
            "tName": "Anim",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "RunState",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "NodeSet",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "ComputeExitAnim",
          "isField": 0,
          "type": {
            "tName": "Anim",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "RunState",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "NodeSet",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "CreateDelimitedRunState",
          "isField": 0,
          "type": {
            "tName": "RunState",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Client.DocNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "CreateRunState",
          "isField": 0,
          "type": {
            "tName": "RunState",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Client.DocNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "CreateDelimitedElemNode",
          "isField": 0,
          "type": {
            "tName": "Client.DocElemNode",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Attr",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Client.DocNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "CreateElemNode",
          "isField": 0,
          "type": {
            "tName": "Client.DocElemNode",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Attr",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Client.DocNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "SyncElemNode",
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
              "tName": "Client.DocElemNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Sync",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Client.DocNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "AfterRender",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Client.DocElemNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "InsertBeforeDelim",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Dom.Node",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Client.DocNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "LinkPrevElement",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Client.DocNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "LinkElement",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Client.DocNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "SyncElement",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Client.DocElemNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "DoSyncElement",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Client.DocElemNode",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "InsertDoc",
          "isField": 0,
          "type": {
            "tName": "DomUtility+InsertPos",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Client.DocNode",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "DomUtility+InsertPos",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "InsertNode",
          "isField": 0,
          "type": {
            "tName": "DomUtility+InsertPos",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "DomUtility+InsertPos",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Doc",
      "methods": [
        {
          "meName": "SvgElementMixed",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<Object>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SvgElement",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<Doc>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ElementMixed",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<Object>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ConcatMixed",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Object[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "MixedNodes",
          "isField": 0,
          "type": {
            "tName": "(IEnumerable<Attr> * IEnumerable<Doc>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<Object>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ToMixedDoc",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Element",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<Doc>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Radio",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "Var<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "LinkView",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Link",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ButtonView",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Button",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Clickable",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Dom.Element",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "CheckBoxGroup",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "Var<List<'a>>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "CheckBox",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "Var<bool>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "SelectDynOptional",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<List<'a>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Var<Option<'a>>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "SelectOptional",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Var<Option<'a>>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Select",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Var<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "SelectDyn",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<List<'a>>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Var<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "SelectImpl",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(FSharpRef<List<'a>> -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Var<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "InputArea",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "FloatInput",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "Var<Client.CheckedInput<Double>>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "FloatInputUnchecked",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "Var<Double>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "IntInput",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "Var<Client.CheckedInput<int>>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "IntInputUnchecked",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "Var<int>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "PasswordBox",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Input",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Attr>",
              "asm": "netstandard"
            },
            {
              "tName": "Var<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "InputInternal",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "(WebSharper.JavaScript.Dom.Element -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ConvertSeqVarBy",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'c",
              "asm": ""
            },
            {
              "tName": "Var<List<'a>>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "ConvertSeqBy",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'c",
              "asm": ""
            },
            {
              "tName": "View<'d>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "ConvertSeq",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(View<'a> -> Doc)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "ConvertBy",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Doc)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'c>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Convert",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> Doc)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'b>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Flatten",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "TextView",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<string>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "RunReplaceById",
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
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "RunById",
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
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Run",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "RunInPlace",
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
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "RunPrependById",
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
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "RunPrepend",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "RunAppendById",
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
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "RunAppend",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "RunAfterById",
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
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "RunAfter",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "RunBeforeById",
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
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "RunBefore",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "RunBetween",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Async",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Async<Doc>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "BindView",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> Doc)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "View<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "EmbedView",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "View<Doc>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Verbatim",
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
          "meName": "StaticProxy",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "TextNode",
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
          "meName": "get_Empty",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "Concat",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<Doc>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Append",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
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
          "meName": "Mk",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Client.DocNode",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<unit>",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Elt",
      "methods": [
        {
          "meName": "TreeNode",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Client.DocTreeNode",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "View<unit>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "New",
          "isField": 0,
          "type": {
            "tName": "Elt",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Attr",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Client.EltUpdater",
      "methods": []
    },
    {
      "moName": "StartupCode$WebSharper_UI$Doc_Proxy",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Client.Templates+Prepare",
      "methods": [
        {
          "meName": "failNotLoaded",
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
          "meName": "fill",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "fillTextHole",
          "isField": 0,
          "type": {
            "tName": "Option<string>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
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
          "meName": "removeHolesExcept",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "HashSet<string>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "fillInstanceAttrs",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "mapHoles",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "Dictionary<string, string>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "convertTextNode",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Node",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "convertAttrs",
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
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Client.Templates",
      "methods": [
        {
          "meName": "GetOrLoadTemplate",
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
              "tName": "Option<string>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> WebSharper.JavaScript.Dom.Node[])",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<TemplateHole>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "NamedTemplate",
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
              "tName": "Option<string>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEnumerable<TemplateHole>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Template",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Node[]",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<TemplateHole>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "RunFullDocTemplate",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "IEnumerable<TemplateHole>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "LoadLocalTemplates",
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
          "meName": "LoadNestedTemplates",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "PrepareTemplate",
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
              "tName": "Option<string>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> WebSharper.JavaScript.Dom.Node[])",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "PrepareSingleTemplate",
          "isField": 0,
          "type": {
            "tName": "(Option<(string -> unit)> -> unit)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Option<string>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "PrepareTemplateStrict",
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
              "tName": "Option<string>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.JavaScript.Dom.Node[]",
              "asm": "netstandard"
            },
            {
              "tName": "Option<WebSharper.JavaScript.Dom.Element>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<(string -> unit)>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "FakeRootSingle",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Dom.Element",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            }
          ]
        },
        {
          "meName": "FakeRoot",
          "isField": 0,
          "type": {
            "tName": "WebSharper.JavaScript.Dom.Element",
            "asm": "WebSharper.JavaScript"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Node[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ChildrenTemplate",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "IEnumerable<TemplateHole>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "InlineTemplate",
          "isField": 0,
          "type": {
            "tName": "(Client.DocTreeNode * View<unit>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.Dom.Element",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "IEnumerable<TemplateHole>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TextHoleRE",
          "isField": 1,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "LocalTemplatesLoaded",
          "isField": 1,
          "type": {
            "tName": "bool",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "set_LocalTemplatesLoaded",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "LoadedTemplateFile",
          "isField": 0,
          "type": {
            "tName": "Dictionary<string, WebSharper.JavaScript.Dom.Element>",
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
          "meName": "LoadedTemplates",
          "isField": 1,
          "type": {
            "tName": "Dictionary<string, Dictionary<string, WebSharper.JavaScript.Dom.Element>>",
            "asm": "netstandard"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "StartupCode$WebSharper_UI$Templates",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Client.EltExtensions",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Client.Doc",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Client.Elt",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Client.DocExtensions",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Flow`1",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Flow",
      "methods": [
        {
          "meName": "get_Do",
          "isField": 0,
          "type": {
            "tName": "FlowBuilder",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "Static",
          "isField": 0,
          "type": {
            "tName": "Flow<unit>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Doc",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Define",
          "isField": 0,
          "type": {
            "tName": "Flow<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(('a -> unit) -> Doc)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Embed",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Flow<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Return",
          "isField": 0,
          "type": {
            "tName": "Flow<'a>",
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
          "meName": "Bind",
          "isField": 0,
          "type": {
            "tName": "Flow<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Flow<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "('a -> Flow<'b>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Map",
          "isField": 0,
          "type": {
            "tName": "Flow<'b>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Flow<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.FlowBuilder",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.HtmlModule+Elt",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.HtmlModule+Tags",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.HtmlModule+SvgElements+Elt",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.HtmlModule+SvgElements",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.HtmlModule+attr",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.HtmlModule+SvgAttributes",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.HtmlModule",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.HtmlModule+on",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Client.HtmlExtensions+on",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Client.HtmlExtensions",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Notation",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.TypeProviderHelpers",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Router",
      "methods": [
        {
          "meName": "InstallHash",
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
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "InstallHashInto",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Var<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "getCurrentHash",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "(string -> Option<'a>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Install",
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
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "InstallInto",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Var<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "WebSharper.Sitelets.Router<'a>",
              "asm": "WebSharper.Sitelets"
            }
          ]
        },
        {
          "meName": "findLinkHref",
          "isField": 0,
          "type": {
            "tName": "Option<string>",
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
          "meName": "hrefToAbsolute",
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
          "meName": "trimFragment",
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
          "meName": "getCurrent",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "(WebSharper.Sitelets.Route -> Option<'a>)",
              "asm": "FSharp.Core"
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
      "moName": "WebSharper.UI.RouterExtensions",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Route+T",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Route",
      "methods": [
        {
          "meName": "Append",
          "isField": 0,
          "type": {
            "tName": "T",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "T",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "T",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "FromList",
          "isField": 0,
          "type": {
            "tName": "T",
            "asm": "WebSharper.UI"
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
          "meName": "ToList",
          "isField": 0,
          "type": {
            "tName": "(List<string> * Map<string, string>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "T",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "SameHash",
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
          "meName": "MakeHash",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "T",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "ParseHash",
          "isField": 0,
          "type": {
            "tName": "T",
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
          "meName": "NoHash",
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
      "moName": "WebSharper.UI.Routing",
      "methods": [
        {
          "meName": "DoLink",
          "isField": 0,
          "type": {
            "tName": "Route+T",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "RouteMap<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "DoRoute",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "RouteMap<'a>",
              "asm": "WebSharper.UI"
            },
            {
              "tName": "Route+T",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "InstallMap",
          "isField": 0,
          "type": {
            "tName": "Var<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "RouteMap<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.RouteMap",
      "methods": [
        {
          "meName": "Install",
          "isField": 0,
          "type": {
            "tName": "Var<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "RouteMap<'a>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "Create",
          "isField": 0,
          "type": {
            "tName": "RouteMap<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> List<string>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(List<string> -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "CreateWithQuery",
          "isField": 0,
          "type": {
            "tName": "RouteMap<'a>",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "('a -> (List<string> * Map<string, string>))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "((List<string> * Map<string, string>) -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Input+MousePosSt",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Input+MouseBtnSt",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Input+Mouse",
      "methods": [
        {
          "meName": "get_MousePressed",
          "isField": 0,
          "type": {
            "tName": "View<bool>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "get_RightPressed",
          "isField": 0,
          "type": {
            "tName": "View<bool>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "get_MiddlePressed",
          "isField": 0,
          "type": {
            "tName": "View<bool>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "get_LeftPressed",
          "isField": 0,
          "type": {
            "tName": "View<bool>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "get_Position",
          "isField": 0,
          "type": {
            "tName": "View<(int * int)>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Input+KeyListenerSt",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Input+Keyboard",
      "methods": [
        {
          "meName": "IsPressed",
          "isField": 0,
          "type": {
            "tName": "View<bool>",
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
          "meName": "get_LastPressed",
          "isField": 0,
          "type": {
            "tName": "View<int>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "get_KeysPressed",
          "isField": 0,
          "type": {
            "tName": "View<List<int>>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Input",
      "methods": [
        {
          "meName": "ActivateKeyListener",
          "isField": 1,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "KeyListenerState",
          "isField": 1,
          "type": {
            "tName": "KeyListenerSt",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "ActivateButtonListener",
          "isField": 1,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "MouseBtnSt",
          "isField": 1,
          "type": {
            "tName": "MouseBtnSt",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "MousePosSt",
          "isField": 1,
          "type": {
            "tName": "MousePosSt",
            "asm": "WebSharper.UI"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "StartupCode$WebSharper_UI$Input",
      "methods": []
    }
  ],
  "jsModules": [
    {
      "jsName": "WebSharper.UI.h5f.js",
      "code": "/*! H5F\r\n* https://github.com/ryanseddon/H5F/\r\n* Copyright (c) Ryan Seddon | Licensed MIT */\r\n(function (e, t) { \"function\" == typeof define && define.amd ? define(t) : \"object\" == typeof module && module.exports ? module.exports = t() : e.H5F = t() })(this, function () { var e, t, a, i, n, r, l, s, o, u, d, c, v, p, f, m, b, h, g, y, w, C, N, A, E, $, x = document, k = x.createElement(\"input\"), q = /^[a-zA-Z0-9.!#$%&'*+-\\/=?\\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/, M = /[a-z][\\-\\.+a-z]*:\\/\\//i, L = /^(input|select|textarea)$/i; return r = function (e, t) { var a = !e.nodeType || !1, i = { validClass: \"valid\", invalidClass: \"error\", requiredClass: \"required\", placeholderClass: \"placeholder\", onSubmit: Function.prototype, onInvalid: Function.prototype }; if (\"object\" == typeof t) for (var r in i) t[r] === void 0 && (t[r] = i[r]); if (n = t || i, a) for (var s = 0, o = e.length; o > s; s++) l(e[s]); else l(e) }, l = function (a) { var i, r = a.elements, l = r.length, c = !!a.attributes.novalidate; if (g(a, \"invalid\", o, !0), g(a, \"blur\", o, !0), g(a, \"input\", o, !0), g(a, \"keyup\", o, !0), g(a, \"focus\", o, !0), g(a, \"change\", o, !0), g(a, \"click\", u, !0), g(a, \"submit\", function (i) { return e = !0, t || c || a.checkValidity() ? (n.onSubmit.call(a, i), void 0) : (w(i), void 0) }, !1), !v()) for (a.checkValidity = function () { return d(a) }; l--;) i = !!r[l].attributes.required, \"fieldset\" !== r[l].nodeName.toLowerCase() && s(r[l]) }, s = function (e) { var t = e, a = h(t), n = { type: t.getAttribute(\"type\"), pattern: t.getAttribute(\"pattern\"), placeholder: t.getAttribute(\"placeholder\") }, r = /^(email|url)$/i, l = /^(input|keyup)$/i, s = r.test(n.type) ? n.type : n.pattern ? n.pattern : !1, o = p(t, s), u = m(t, \"step\"), v = m(t, \"min\"), b = m(t, \"max\"), g = !(\"\" === t.validationMessage || void 0 === t.validationMessage); t.checkValidity = function () { return d.call(this, t) }, t.setCustomValidity = function (e) { c.call(t, e) }, t.validity = { valueMissing: a, patternMismatch: o, rangeUnderflow: v, rangeOverflow: b, stepMismatch: u, customError: g, valid: !(a || o || u || v || b || g) }, n.placeholder && !l.test(i) && f(t) }, o = function (e) { var t = C(e) || e, a = /^(input|keyup|focusin|focus|change)$/i, r = /^(submit|image|button|reset)$/i, l = /^(checkbox|radio)$/i, u = !0; !L.test(t.nodeName) || r.test(t.type) || r.test(t.nodeName) || (i = e.type, v() || s(t), t.validity.valid && (\"\" !== t.value || l.test(t.type)) || t.value !== t.getAttribute(\"placeholder\") && t.validity.valid ? (A(t, [n.invalidClass, n.requiredClass]), N(t, n.validClass)) : a.test(i) ? t.validity.valueMissing && A(t, [n.requiredClass, n.invalidClass, n.validClass]) : t.validity.valueMissing ? (A(t, [n.invalidClass, n.validClass]), N(t, n.requiredClass)) : t.validity.valid || (A(t, [n.validClass, n.requiredClass]), N(t, n.invalidClass)), \"input\" === i && u && (y(t.form, \"keyup\", o, !0), u = !1)) }, d = function (t) { var a, i, r, l, s, u = !1; if (\"form\" === t.nodeName.toLowerCase()) { a = t.elements; for (var d = 0, c = a.length; c > d; d++) i = a[d], r = !!i.attributes.disabled, l = !!i.attributes.required, s = !!i.attributes.pattern, \"fieldset\" !== i.nodeName.toLowerCase() && !r && (l || s && l) && (o(i), i.validity.valid || u || (e && i.focus(), u = !0, n.onInvalid.call(t, i))); return !u } return o(t), t.validity.valid }, c = function (e) { var t = this; t.validationMessage = e }, u = function (e) { var a = C(e); a.attributes.formnovalidate && \"submit\" === a.type && (t = !0) }, v = function () { return E(k, \"validity\") && E(k, \"checkValidity\") }, p = function (e, t) { if (\"email\" === t) return !q.test(e.value); if (\"url\" === t) return !M.test(e.value); if (t) { var i = e.getAttribute(\"placeholder\"), n = e.value; return a = RegExp(\"^(?:\" + t + \")$\"), n === i ? !1 : \"\" === n ? !1 : !a.test(e.value) } return !1 }, f = function (e) { var t = { placeholder: e.getAttribute(\"placeholder\") }, a = /^(focus|focusin|submit)$/i, r = /^(input|textarea)$/i, l = /^password$/i, s = !!(\"placeholder\" in k); s || !r.test(e.nodeName) || l.test(e.type) || (\"\" !== e.value || a.test(i) ? e.value === t.placeholder && a.test(i) && (e.value = \"\", A(e, n.placeholderClass)) : (e.value = t.placeholder, g(e.form, \"submit\", function () { i = \"submit\", f(e) }, !0), N(e, n.placeholderClass))) }, m = function (e, t) { var a = parseInt(e.getAttribute(\"min\"), 10) || 0, i = parseInt(e.getAttribute(\"max\"), 10) || !1, n = parseInt(e.getAttribute(\"step\"), 10) || 1, r = parseInt(e.value, 10), l = (r - a) % n; return h(e) || isNaN(r) ? \"number\" === e.getAttribute(\"type\") ? !0 : !1 : \"step\" === t ? e.getAttribute(\"step\") ? 0 !== l : !1 : \"min\" === t ? e.getAttribute(\"min\") ? a > r : !1 : \"max\" === t ? e.getAttribute(\"max\") ? r > i : !1 : void 0 }, b = function (e) { var t = !!e.attributes.required; return t ? h(e) : !1 }, h = function (e) { var t = e.getAttribute(\"placeholder\"), a = /^(checkbox|radio)$/i, i = !!e.attributes.required; return !(!i || \"\" !== e.value && e.value !== t && (!a.test(e.type) || $(e))) }, g = function (e, t, a, i) { E(window, \"addEventListener\") ? e.addEventListener(t, a, i) : E(window, \"attachEvent\") && window.event !== void 0 && (\"blur\" === t ? t = \"focusout\" : \"focus\" === t && (t = \"focusin\"), e.attachEvent(\"on\" + t, a)) }, y = function (e, t, a, i) { E(window, \"removeEventListener\") ? e.removeEventListener(t, a, i) : E(window, \"detachEvent\") && window.event !== void 0 && e.detachEvent(\"on\" + t, a) }, w = function (e) { e = e || window.event, e.stopPropagation && e.preventDefault ? (e.stopPropagation(), e.preventDefault()) : (e.cancelBubble = !0, e.returnValue = !1) }, C = function (e) { return e = e || window.event, e.target || e.srcElement }, N = function (e, t) { var a; e.className ? (a = RegExp(\"(^|\\\\s)\" + t + \"(\\\\s|$)\"), a.test(e.className) || (e.className += \" \" + t)) : e.className = t }, A = function (e, t) { var a, i, n = \"object\" == typeof t ? t.length : 1, r = n; if (e.className) if (e.className === t) e.className = \"\"; else for (; n--;) a = RegExp(\"(^|\\\\s)\" + (r > 1 ? t[n] : t) + \"(\\\\s|$)\"), i = e.className.match(a), i && 3 === i.length && (e.className = e.className.replace(a, i[1] && i[2] ? \" \" : \"\")) }, E = function (e, t) { var a = typeof e[t], i = RegExp(\"^function|object$\", \"i\"); return !!(i.test(a) && e[t] || \"unknown\" === a) }, $ = function (e) { for (var t = document.getElementsByName(e.name), a = 0; t.length > a; a++) if (t[a].checked) return !0; return !1 }, { setup: r } });"
    },
    {
      "jsName": "WebSharper.js",
      "code": "(function()\r\n{\r\n \"use strict\";\r\n var Global,WebSharper,UI,Array,String,List,Abbrev,Fresh,HashSet,Dict,Obj,Slot,Async,Mailbox,SC$1,AppendList,SC$2,DomUtility,SC$3,Trie,LookupResult,SC$4,Snap,Var,View,ConcreteVar,Var$1,Updates,FromView,ViewBuilder,Submitter,Key,Model,Serializer,Storage,ArrayStorage,LocalStorageBackend,ListModel,ListModels,SC$5,ReactiveExtensions,DoubleInterpolation,Interpolation,Easing,Easings,An,Anims,Trans,SC$6,Web,Control,OnAfterRenderControl,AnimatedAttrNode,DynamicAttrNode,AttrProxy,Client,Attrs,Dyn,Attrs$1,CheckedInput,AttrModule,SC$7,Settings,DocElemNode,Docs,DomNodes,NodeSet,RunState,Docs$1,Doc,Elt,EltUpdater,SC$8,Templates,Prepare,SC$9,Flow,FlowBuilder,HtmlModule,attr,Router,Route,Routing,RouteMap,Input,MousePosSt,MouseBtnSt,Mouse,KeyListenerSt,Keyboard,SC$10,List$1,Arrays,Enumerator,Strings,Char,Collections,HashSet$1,Seq,IntelliFactory,Runtime,Unchecked,console,Concurrency,Map,FSharpMap,Operators,Queue,Lazy,Dictionary,JSON,Numeric,Node,$,Slice,Sitelets,RouterModule,Route$1,Utils,Option;\r\n Global=self;\r\n WebSharper=Global.WebSharper=Global.WebSharper||{};\r\n UI=WebSharper.UI=WebSharper.UI||{};\r\n Array=UI.Array=UI.Array||{};\r\n String=UI.String=UI.String||{};\r\n List=UI.List=UI.List||{};\r\n Abbrev=UI.Abbrev=UI.Abbrev||{};\r\n Fresh=Abbrev.Fresh=Abbrev.Fresh||{};\r\n HashSet=Abbrev.HashSet=Abbrev.HashSet||{};\r\n Dict=Abbrev.Dict=Abbrev.Dict||{};\r\n Obj=WebSharper&&WebSharper.Obj;\r\n Slot=Abbrev.Slot=Abbrev.Slot||{};\r\n Async=Abbrev.Async=Abbrev.Async||{};\r\n Mailbox=Abbrev.Mailbox=Abbrev.Mailbox||{};\r\n SC$1=Global.StartupCode$WebSharper_UI$Abbrev=Global.StartupCode$WebSharper_UI$Abbrev||{};\r\n AppendList=UI.AppendList=UI.AppendList||{};\r\n SC$2=Global.StartupCode$WebSharper_UI$AppendList=Global.StartupCode$WebSharper_UI$AppendList||{};\r\n DomUtility=UI.DomUtility=UI.DomUtility||{};\r\n SC$3=Global.StartupCode$WebSharper_UI$DomUtility=Global.StartupCode$WebSharper_UI$DomUtility||{};\r\n Trie=UI.Trie=UI.Trie||{};\r\n LookupResult=Trie.LookupResult=Trie.LookupResult||{};\r\n SC$4=Global.StartupCode$WebSharper_UI$Trie=Global.StartupCode$WebSharper_UI$Trie||{};\r\n Snap=UI.Snap=UI.Snap||{};\r\n Var=UI.Var=UI.Var||{};\r\n View=UI.View=UI.View||{};\r\n ConcreteVar=UI.ConcreteVar=UI.ConcreteVar||{};\r\n Var$1=UI.Var$1=UI.Var$1||{};\r\n Updates=UI.Updates=UI.Updates||{};\r\n FromView=UI.FromView=UI.FromView||{};\r\n ViewBuilder=UI.ViewBuilder=UI.ViewBuilder||{};\r\n Submitter=UI.Submitter=UI.Submitter||{};\r\n Key=UI.Key=UI.Key||{};\r\n Model=UI.Model=UI.Model||{};\r\n Serializer=UI.Serializer=UI.Serializer||{};\r\n Storage=UI.Storage=UI.Storage||{};\r\n ArrayStorage=Storage.ArrayStorage=Storage.ArrayStorage||{};\r\n LocalStorageBackend=Storage.LocalStorageBackend=Storage.LocalStorageBackend||{};\r\n ListModel=UI.ListModel=UI.ListModel||{};\r\n ListModels=UI.ListModels=UI.ListModels||{};\r\n SC$5=Global.StartupCode$WebSharper_UI$Models=Global.StartupCode$WebSharper_UI$Models||{};\r\n ReactiveExtensions=UI.ReactiveExtensions=UI.ReactiveExtensions||{};\r\n DoubleInterpolation=UI.DoubleInterpolation=UI.DoubleInterpolation||{};\r\n Interpolation=UI.Interpolation=UI.Interpolation||{};\r\n Easing=UI.Easing=UI.Easing||{};\r\n Easings=UI.Easings=UI.Easings||{};\r\n An=UI.An=UI.An||{};\r\n Anims=UI.Anims=UI.Anims||{};\r\n Trans=UI.Trans=UI.Trans||{};\r\n SC$6=Global.StartupCode$WebSharper_UI$Animation=Global.StartupCode$WebSharper_UI$Animation||{};\r\n Web=WebSharper&&WebSharper.Web;\r\n Control=Web&&Web.Control;\r\n OnAfterRenderControl=UI.OnAfterRenderControl=UI.OnAfterRenderControl||{};\r\n AnimatedAttrNode=UI.AnimatedAttrNode=UI.AnimatedAttrNode||{};\r\n DynamicAttrNode=UI.DynamicAttrNode=UI.DynamicAttrNode||{};\r\n AttrProxy=UI.AttrProxy=UI.AttrProxy||{};\r\n Client=UI.Client=UI.Client||{};\r\n Attrs=Client.Attrs=Client.Attrs||{};\r\n Dyn=Attrs.Dyn=Attrs.Dyn||{};\r\n Attrs$1=UI.Attrs=UI.Attrs||{};\r\n CheckedInput=UI.CheckedInput=UI.CheckedInput||{};\r\n AttrModule=UI.AttrModule=UI.AttrModule||{};\r\n SC$7=Global.StartupCode$WebSharper_UI$Attr_Client=Global.StartupCode$WebSharper_UI$Attr_Client||{};\r\n Settings=Client.Settings=Client.Settings||{};\r\n DocElemNode=UI.DocElemNode=UI.DocElemNode||{};\r\n Docs=Client.Docs=Client.Docs||{};\r\n DomNodes=Docs.DomNodes=Docs.DomNodes||{};\r\n NodeSet=Docs.NodeSet=Docs.NodeSet||{};\r\n RunState=Docs.RunState=Docs.RunState||{};\r\n Docs$1=UI.Docs=UI.Docs||{};\r\n Doc=UI.Doc=UI.Doc||{};\r\n Elt=UI.Elt=UI.Elt||{};\r\n EltUpdater=Client.EltUpdater=Client.EltUpdater||{};\r\n SC$8=Global.StartupCode$WebSharper_UI$Doc_Proxy=Global.StartupCode$WebSharper_UI$Doc_Proxy||{};\r\n Templates=Client.Templates=Client.Templates||{};\r\n Prepare=Templates.Prepare=Templates.Prepare||{};\r\n SC$9=Global.StartupCode$WebSharper_UI$Templates=Global.StartupCode$WebSharper_UI$Templates||{};\r\n Flow=UI.Flow=UI.Flow||{};\r\n FlowBuilder=UI.FlowBuilder=UI.FlowBuilder||{};\r\n HtmlModule=UI.HtmlModule=UI.HtmlModule||{};\r\n attr=HtmlModule.attr=HtmlModule.attr||{};\r\n Router=UI.Router=UI.Router||{};\r\n Route=UI.Route=UI.Route||{};\r\n Routing=UI.Routing=UI.Routing||{};\r\n RouteMap=UI.RouteMap=UI.RouteMap||{};\r\n Input=UI.Input=UI.Input||{};\r\n MousePosSt=Input.MousePosSt=Input.MousePosSt||{};\r\n MouseBtnSt=Input.MouseBtnSt=Input.MouseBtnSt||{};\r\n Mouse=Input.Mouse=Input.Mouse||{};\r\n KeyListenerSt=Input.KeyListenerSt=Input.KeyListenerSt||{};\r\n Keyboard=Input.Keyboard=Input.Keyboard||{};\r\n SC$10=Global.StartupCode$WebSharper_UI$Input=Global.StartupCode$WebSharper_UI$Input||{};\r\n List$1=WebSharper&&WebSharper.List;\r\n Arrays=WebSharper&&WebSharper.Arrays;\r\n Enumerator=WebSharper&&WebSharper.Enumerator;\r\n Strings=WebSharper&&WebSharper.Strings;\r\n Char=WebSharper&&WebSharper.Char;\r\n Collections=WebSharper&&WebSharper.Collections;\r\n HashSet$1=Collections&&Collections.HashSet;\r\n Seq=WebSharper&&WebSharper.Seq;\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime=IntelliFactory&&IntelliFactory.Runtime;\r\n Unchecked=WebSharper&&WebSharper.Unchecked;\r\n console=Global.console;\r\n Concurrency=WebSharper&&WebSharper.Concurrency;\r\n Map=Collections&&Collections.Map;\r\n FSharpMap=Collections&&Collections.FSharpMap;\r\n Operators=WebSharper&&WebSharper.Operators;\r\n Queue=WebSharper&&WebSharper.Queue;\r\n Lazy=WebSharper&&WebSharper.Lazy;\r\n Dictionary=Collections&&Collections.Dictionary;\r\n JSON=Global.JSON;\r\n Numeric=WebSharper&&WebSharper.Numeric;\r\n Node=Global.Node;\r\n $=Global.jQuery;\r\n Slice=WebSharper&&WebSharper.Slice;\r\n Sitelets=WebSharper&&WebSharper.Sitelets;\r\n RouterModule=Sitelets&&Sitelets.RouterModule;\r\n Route$1=Sitelets&&Sitelets.Route;\r\n Utils=WebSharper&&WebSharper.Utils;\r\n Option=WebSharper&&WebSharper.Option;\r\n Array.mapInPlace=function(f,arr)\r\n {\r\n  var i,$1;\r\n  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=f(arr[i]);\r\n  return arr;\r\n };\r\n Array.ofSeqNonCopying=function(xs)\r\n {\r\n  var q,o;\r\n  if(xs instanceof Global.Array)\r\n   return xs;\r\n  else\r\n   if(xs instanceof List$1.T)\r\n    return Arrays.ofList(xs);\r\n   else\r\n    if(xs===null)\r\n     return[];\r\n    else\r\n     {\r\n      q=[];\r\n      o=Enumerator.Get(xs);\r\n      try\r\n      {\r\n       while(o.MoveNext())\r\n        q.push(o.Current());\r\n       return q;\r\n      }\r\n      finally\r\n      {\r\n       if(typeof o==\"object\"&&\"Dispose\"in o)\r\n        o.Dispose();\r\n      }\r\n     }\r\n };\r\n Array.MapTreeReduce=function(mapping,defaultValue,reduction,array)\r\n {\r\n  var l;\r\n  function loop(off,len)\r\n  {\r\n   var $1,l2;\r\n   return len<=0?defaultValue:len===1&&(off>=0&&off<l)?mapping(Arrays.get(array,off)):(l2=len/2>>0,reduction(loop(off,l2),loop(off+l2,len-l2)));\r\n  }\r\n  l=Arrays.length(array);\r\n  return loop(0,l);\r\n };\r\n Array.TreeReduce=function(defaultValue,reduction,array)\r\n {\r\n  var l;\r\n  function loop(off,len)\r\n  {\r\n   var $1,l2;\r\n   return len<=0?defaultValue:len===1&&(off>=0&&off<l)?Arrays.get(array,off):(l2=len/2>>0,reduction(loop(off,l2),loop(off+l2,len-l2)));\r\n  }\r\n  l=Arrays.length(array);\r\n  return loop(0,l);\r\n };\r\n String.isBlank=function(s)\r\n {\r\n  return Strings.forall(Char.IsWhiteSpace,s);\r\n };\r\n List.maybeReplaceFirst=function(k,f,l)\r\n {\r\n  var didIt;\r\n  didIt=[false];\r\n  return List$1.map(function(x)\r\n  {\r\n   var x$1;\r\n   return!didIt[0]&&k(x)?(x$1=f(x),x$1==null?x:x$1.$0):x;\r\n  },l);\r\n };\r\n List.replaceFirst=function(k,f,l)\r\n {\r\n  var didIt;\r\n  didIt=[false];\r\n  return List$1.map(function(x)\r\n  {\r\n   return!didIt[0]&&k(x)?f(x):x;\r\n  },l);\r\n };\r\n Fresh.Id=function()\r\n {\r\n  Fresh.set_counter(Fresh.counter()+1);\r\n  return\"uid\"+Global.String(Fresh.counter());\r\n };\r\n Fresh.Int=function()\r\n {\r\n  Fresh.set_counter(Fresh.counter()+1);\r\n  return Fresh.counter();\r\n };\r\n Fresh.counter=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.counter;\r\n };\r\n Fresh.set_counter=function($1)\r\n {\r\n  SC$1.$cctor();\r\n  SC$1.counter=$1;\r\n };\r\n HashSet.Filter=function(ok,set)\r\n {\r\n  return new HashSet$1.New$2(Arrays.filter(ok,HashSet.ToArray(set)));\r\n };\r\n HashSet.Intersect=function(a,b)\r\n {\r\n  var set;\r\n  set=new HashSet$1.New$2(HashSet.ToArray(a));\r\n  set.IntersectWith(HashSet.ToArray(b));\r\n  return set;\r\n };\r\n HashSet.Except=function(excluded,included)\r\n {\r\n  var set;\r\n  set=new HashSet$1.New$2(HashSet.ToArray(included));\r\n  set.ExceptWith(HashSet.ToArray(excluded));\r\n  return set;\r\n };\r\n HashSet.ToArray=function(set)\r\n {\r\n  var arr;\r\n  arr=Arrays.create(set.get_Count(),void 0);\r\n  set.CopyTo(arr);\r\n  return arr;\r\n };\r\n Dict.ToValueArray=function(d)\r\n {\r\n  var arr;\r\n  arr=Arrays.create(d.count,void 0);\r\n  Seq.iteri(function(i,kv)\r\n  {\r\n   return Arrays.set(arr,i,kv.V);\r\n  },d);\r\n  return arr;\r\n };\r\n Dict.ToKeyArray=function(d)\r\n {\r\n  var arr;\r\n  arr=Arrays.create(d.count,void 0);\r\n  Seq.iteri(function(i,kv)\r\n  {\r\n   return Arrays.set(arr,i,kv.K);\r\n  },d);\r\n  return arr;\r\n };\r\n Slot=Abbrev.Slot=Runtime.Class({\r\n  GetHashCode:function()\r\n  {\r\n   return Unchecked.Hash(this.key(this.value));\r\n  },\r\n  Equals:function(o)\r\n  {\r\n   return Unchecked.Equals(this.key(this.value),this.key(o.get_Value()));\r\n  },\r\n  get_Value:function()\r\n  {\r\n   return this.value;\r\n  }\r\n },Obj,Slot);\r\n Slot.New=Runtime.Ctor(function(key,value)\r\n {\r\n  Obj.New.call(this);\r\n  this.key=key;\r\n  this.value=value;\r\n },Slot);\r\n Slot.Create=function(key,value)\r\n {\r\n  return new Slot.New(key,value);\r\n };\r\n Async.OnError=function(e)\r\n {\r\n  return console.log(\"WebSharper UI: Uncaught asynchronous exception\",e);\r\n };\r\n Async.StartTo=function(comp,k)\r\n {\r\n  Concurrency.StartWithContinuations(comp,k,function(e)\r\n  {\r\n   Async.OnError(e);\r\n  },Global.ignore,null);\r\n };\r\n Mailbox.StartProcessor=function(procAsync)\r\n {\r\n  var st;\r\n  function work()\r\n  {\r\n   var b;\r\n   b=null;\r\n   return Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.Bind(procAsync,function()\r\n    {\r\n     var m;\r\n     m=st[0];\r\n     return m===1?(st[0]=0,Concurrency.Zero()):m===2?(st[0]=1,work()):Concurrency.Zero();\r\n    });\r\n   });\r\n  }\r\n  st=[0];\r\n  return function()\r\n  {\r\n   var m;\r\n   m=st[0];\r\n   m===0?(st[0]=1,Concurrency.Start(work(),null)):m===1?st[0]=2:void 0;\r\n  };\r\n };\r\n SC$1.$cctor=function()\r\n {\r\n  SC$1.$cctor=Global.ignore;\r\n  SC$1.counter=0;\r\n };\r\n AppendList.FromArray=function(xs)\r\n {\r\n  var m;\r\n  m=xs.length;\r\n  return m===0?{\r\n   $:0\r\n  }:m===1?{\r\n   $:1,\r\n   $0:Arrays.get(xs,0)\r\n  }:{\r\n   $:3,\r\n   $0:xs.slice()\r\n  };\r\n };\r\n AppendList.ToArray=function(xs)\r\n {\r\n  var out;\r\n  function loop(xs$1)\r\n  {\r\n   if(xs$1.$==1)\r\n    out.push(xs$1.$0);\r\n   else\r\n    if(xs$1.$==2)\r\n     {\r\n      loop(xs$1.$0);\r\n      loop(xs$1.$1);\r\n     }\r\n    else\r\n     if(xs$1.$==3)\r\n      Arrays.iter(function(v)\r\n      {\r\n       out.push(v);\r\n      },xs$1.$0);\r\n  }\r\n  out=[];\r\n  loop(xs);\r\n  return out.slice(0);\r\n };\r\n AppendList.Single=function(x)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:x\r\n  };\r\n };\r\n AppendList.Concat=function(xs)\r\n {\r\n  var x;\r\n  x=Array.ofSeqNonCopying(xs);\r\n  return Array.TreeReduce(AppendList.Empty(),AppendList.Append,x);\r\n };\r\n AppendList.Append=function(x,y)\r\n {\r\n  return x.$==0?y:y.$==0?x:{\r\n   $:2,\r\n   $0:x,\r\n   $1:y\r\n  };\r\n };\r\n AppendList.Empty=function()\r\n {\r\n  SC$2.$cctor();\r\n  return SC$2.Empty;\r\n };\r\n SC$2.$cctor=function()\r\n {\r\n  SC$2.$cctor=Global.ignore;\r\n  SC$2.Empty={\r\n   $:0\r\n  };\r\n };\r\n DomUtility.SetProperty=function(target,name,value)\r\n {\r\n  return target.setProperty(name,value);\r\n };\r\n DomUtility.IterSelector=function(el,selector,f)\r\n {\r\n  var l,i,$1;\r\n  l=el.querySelectorAll(selector);\r\n  for(i=0,$1=l.length-1;i<=$1;i++)f(l[i]);\r\n };\r\n DomUtility.ChildrenArray=function(element)\r\n {\r\n  var a,i,$1;\r\n  a=[];\r\n  for(i=0,$1=element.childNodes.length-1;i<=$1;i++)a.push(element.childNodes[i]);\r\n  return a;\r\n };\r\n DomUtility.RemoveClass=function(element,cl)\r\n {\r\n  var _this;\r\n  DomUtility.setClass(element,(_this=DomUtility.clsRE(cl),DomUtility.getClass(element).replace(_this,function($1,$2,$3)\r\n  {\r\n   return $2===\"\"||$3===\"\"?\"\":\" \";\r\n  })));\r\n };\r\n DomUtility.AddClass=function(element,cl)\r\n {\r\n  var c;\r\n  c=DomUtility.getClass(element);\r\n  c===\"\"?DomUtility.setClass(element,cl):!DomUtility.clsRE(cl).test(c)?DomUtility.setClass(element,c+\" \"+cl):void 0;\r\n };\r\n DomUtility.setClass=function(element,value)\r\n {\r\n  if(element instanceof Global.SVGElement)\r\n   element.setAttribute(\"class\",value);\r\n  else\r\n   element.className=value;\r\n };\r\n DomUtility.getClass=function(element)\r\n {\r\n  return element instanceof Global.SVGElement?element.getAttribute(\"class\"):element.className;\r\n };\r\n DomUtility.clsRE=function(cls)\r\n {\r\n  return new Global.RegExp(\"(\\\\s+|^)\"+cls+\"(?:\\\\s+\"+cls+\")*(\\\\s+|$)\",\"g\");\r\n };\r\n DomUtility.InsertAt=function(parent,pos,node)\r\n {\r\n  var m;\r\n  if(!(node.parentNode===parent&&pos===(m=node.nextSibling,Unchecked.Equals(m,null)?null:m)))\r\n   parent.insertBefore(node,pos);\r\n };\r\n DomUtility.RemoveNode=function(parent,el)\r\n {\r\n  if(el.parentNode===parent)\r\n   parent.removeChild(el);\r\n };\r\n DomUtility.SetStyle=function(el,name,value)\r\n {\r\n  DomUtility.SetProperty(el.style,name,value);\r\n };\r\n DomUtility.SetAttr=function(el,name,value)\r\n {\r\n  el.setAttribute(name,value);\r\n };\r\n DomUtility.RemoveAttr=function(el,attrName)\r\n {\r\n  el.removeAttribute(attrName);\r\n };\r\n DomUtility.CreateAttr=function(name,value)\r\n {\r\n  var a;\r\n  a=DomUtility.Doc().createAttribute(name);\r\n  a.value=value;\r\n  return a;\r\n };\r\n DomUtility.CreateText=function(s)\r\n {\r\n  return DomUtility.Doc().createTextNode(s);\r\n };\r\n DomUtility.CreateSvgElement=function(name)\r\n {\r\n  return DomUtility.Doc().createElementNS(\"http://www.w3.org/2000/svg\",name);\r\n };\r\n DomUtility.CreateElement=function(name)\r\n {\r\n  return DomUtility.Doc().createElement(name);\r\n };\r\n DomUtility.Clear=function(ctx)\r\n {\r\n  while(ctx.hasChildNodes())\r\n   ctx.removeChild(ctx.firstChild);\r\n };\r\n DomUtility.ClearAttrs=function(ctx)\r\n {\r\n  while(ctx.hasAttributes())\r\n   ctx.removeAttributeNode(ctx.attributes.item(0));\r\n };\r\n DomUtility.AppendTo=function(ctx,node)\r\n {\r\n  ctx.appendChild(node);\r\n };\r\n DomUtility.Doc=function()\r\n {\r\n  SC$3.$cctor();\r\n  return SC$3.Doc;\r\n };\r\n SC$3.$cctor=function()\r\n {\r\n  SC$3.$cctor=Global.ignore;\r\n  SC$3.Doc=self.document;\r\n };\r\n LookupResult.NotFound={\r\n  $:1\r\n };\r\n Trie.Empty=function()\r\n {\r\n  SC$4.$cctor();\r\n  return SC$4.Empty;\r\n };\r\n Trie.Lookup=function(trie,key)\r\n {\r\n  return Trie.Look(List$1.ofSeq(key),trie);\r\n };\r\n Trie.Look=function(key,trie)\r\n {\r\n  var $1,m;\r\n  switch(trie.$==2?($1=trie.$0,0):trie.$==0?key.$==1?($1=[key.$0,key.$1,trie.$0],1):2:2)\r\n  {\r\n   case 0:\r\n    return{\r\n     $:0,\r\n     $0:$1,\r\n     $1:key\r\n    };\r\n   case 1:\r\n    m=Map.TryFind($1[0],$1[2]);\r\n    return m==null?LookupResult.NotFound:Trie.Look($1[1],m.$0);\r\n   case 2:\r\n    return LookupResult.NotFound;\r\n  }\r\n };\r\n Trie.ToArray=function(trie)\r\n {\r\n  var all;\r\n  all=[];\r\n  Trie.Map(function()\r\n  {\r\n   return function(v)\r\n   {\r\n    return all.push(v);\r\n   };\r\n  },trie);\r\n  return all.slice(0);\r\n };\r\n Trie.Mapi=function(f,trie)\r\n {\r\n  var counter;\r\n  function next()\r\n  {\r\n   var c;\r\n   c=counter[0];\r\n   counter[0]=c+1;\r\n   return c;\r\n  }\r\n  counter=[0];\r\n  return Trie.Map(function(x)\r\n  {\r\n   return f(next(),x);\r\n  },trie);\r\n };\r\n Trie.Map=function(f,trie)\r\n {\r\n  return Trie.MapLoop(List$1.T.Empty,f,trie);\r\n };\r\n Trie.MapLoop=function(loc,f,trie)\r\n {\r\n  return trie.$==1?{\r\n   $:1\r\n  }:trie.$==2?{\r\n   $:2,\r\n   $0:(f(loc))(trie.$0)\r\n  }:Trie.TrieBranch(Map.Map(function(k,v)\r\n  {\r\n   return Trie.MapLoop(List$1.append(loc,List$1.ofArray([k])),f,v);\r\n  },trie.$0));\r\n };\r\n Trie.Merge=function(ts)\r\n {\r\n  var ts$1,m,o;\r\n  ts$1=Array.ofSeqNonCopying(ts);\r\n  m=Arrays.length(ts$1);\r\n  return m===0?{\r\n   $:1,\r\n   $0:{\r\n    $:1\r\n   }\r\n  }:m===1?{\r\n   $:1,\r\n   $0:Arrays.get(ts$1,0)\r\n  }:Arrays.exists(Trie.IsLeaf,ts$1)?null:(o=Trie.MergeMaps(Trie.Merge,Seq.choose(function(a)\r\n  {\r\n   return a.$==0?{\r\n    $:1,\r\n    $0:a.$0\r\n   }:null;\r\n  },ts$1)),o==null?null:{\r\n   $:1,\r\n   $0:Trie.TrieBranch(o.$0)\r\n  });\r\n };\r\n Trie.IsLeaf=function(t)\r\n {\r\n  return t.$==2;\r\n };\r\n Trie.MergeMaps=function(merge,maps)\r\n {\r\n  var o,x;\r\n  function m(k,vs)\r\n  {\r\n   var o$1;\r\n   o$1=merge(vs);\r\n   return o$1==null?null:{\r\n    $:1,\r\n    $0:[k,o$1.$0]\r\n   };\r\n  }\r\n  o=Trie.AllSome(Seq.map(function($1)\r\n  {\r\n   return m($1[0],$1[1]);\r\n  },Map.ToSeq((x=Seq.collect(Map.ToSeq,maps),Seq.fold(function(s,t)\r\n  {\r\n   return Trie.MultiAdd(t[0],t[1],s);\r\n  },new FSharpMap.New([]),x)))));\r\n  return o==null?null:{\r\n   $:1,\r\n   $0:Map.OfArray(Arrays.ofSeq(o.$0))\r\n  };\r\n };\r\n Trie.AllSome=function(xs)\r\n {\r\n  var ok,e,r,m;\r\n  e=Enumerator.Get(xs);\r\n  r=[];\r\n  ok=true;\r\n  while(ok&&e.MoveNext())\r\n   {\r\n    m=e.Current();\r\n    m!=null&&m.$==1?r.push(m.$0):ok=false;\r\n   }\r\n  return ok?{\r\n   $:1,\r\n   $0:r.slice()\r\n  }:null;\r\n };\r\n Trie.MultiAdd=function(key,value,map)\r\n {\r\n  return map.Add(key,new List$1.T({\r\n   $:1,\r\n   $0:value,\r\n   $1:Trie.MultiFind(key,map)\r\n  }));\r\n };\r\n Trie.MultiFind=function(key,map)\r\n {\r\n  var x;\r\n  x=Map.TryFind(key,map);\r\n  return x==null?List$1.T.Empty:x.$0;\r\n };\r\n Trie.Prefix=function(key,trie)\r\n {\r\n  return Trie.TrieBranch(new FSharpMap.New(List$1.ofArray([[key,trie]])));\r\n };\r\n Trie.Leaf=function(v)\r\n {\r\n  return{\r\n   $:2,\r\n   $0:v\r\n  };\r\n };\r\n Trie.TrieBranch=function(xs)\r\n {\r\n  return xs.get_IsEmpty()?{\r\n   $:1\r\n  }:{\r\n   $:0,\r\n   $0:xs\r\n  };\r\n };\r\n SC$4.$cctor=function()\r\n {\r\n  SC$4.$cctor=Global.ignore;\r\n  SC$4.Empty={\r\n   $:1\r\n  };\r\n };\r\n Snap.Obsolete=function(sn)\r\n {\r\n  var $1,m,i,$2,o;\r\n  m=sn.s;\r\n  if(m==null||(m!=null&&m.$==2?($1=m.$1,false):m!=null&&m.$==3?($1=m.$1,false):true))\r\n   void 0;\r\n  else\r\n   {\r\n    sn.s=null;\r\n    for(i=0,$2=Arrays.length($1)-1;i<=$2;i++){\r\n     o=Arrays.get($1,i);\r\n     typeof o==\"object\"?function(sn$1)\r\n     {\r\n      Snap.Obsolete(sn$1);\r\n     }(o):o();\r\n    }\r\n   }\r\n };\r\n Snap.New=function(State)\r\n {\r\n  return{\r\n   s:State\r\n  };\r\n };\r\n Snap.MapAsync=function(fn,snap)\r\n {\r\n  var res;\r\n  res=Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  });\r\n  Snap.When(snap,function(v)\r\n  {\r\n   Async.StartTo(fn(v),function(v$1)\r\n   {\r\n    Snap.MarkDone(res,snap,v$1);\r\n   });\r\n  },res);\r\n  return res;\r\n };\r\n Snap.SnapshotOn=function(sn1,sn2)\r\n {\r\n  var res;\r\n  function cont(a)\r\n  {\r\n   var m,$1,$2;\r\n   if(!(m=res.s,m!=null&&m.$==0||m!=null&&m.$==2))\r\n    {\r\n     $1=Snap.ValueAndForever(sn1);\r\n     $2=Snap.ValueAndForever(sn2);\r\n     $1!=null&&$1.$==1?$2!=null&&$2.$==1?$1.$0[1]||$2.$0[1]?Snap.MarkForever(res,$2.$0[0]):Snap.MarkReady(res,$2.$0[0]):void 0:void 0;\r\n    }\r\n  }\r\n  res=Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  });\r\n  Snap.When(sn1,cont,res);\r\n  Snap.WhenReady(sn2,cont);\r\n  return res;\r\n };\r\n Snap.Map3=function(fn,sn1,sn2,sn3)\r\n {\r\n  var $1,$2,$3,res;\r\n  function cont(a)\r\n  {\r\n   var m,$4,$5,$6;\r\n   if(!(m=res.s,m!=null&&m.$==0||m!=null&&m.$==2))\r\n    {\r\n     $4=Snap.ValueAndForever(sn1);\r\n     $5=Snap.ValueAndForever(sn2);\r\n     $6=Snap.ValueAndForever(sn3);\r\n     $4!=null&&$4.$==1?$5!=null&&$5.$==1?$6!=null&&$6.$==1?$4.$0[1]&&$5.$0[1]&&$6.$0[1]?Snap.MarkForever(res,fn($4.$0[0],$5.$0[0],$6.$0[0])):Snap.MarkReady(res,fn($4.$0[0],$5.$0[0],$6.$0[0])):void 0:void 0:void 0;\r\n    }\r\n  }\r\n  $1=sn1.s;\r\n  $2=sn2.s;\r\n  $3=sn3.s;\r\n  return $1!=null&&$1.$==0?$2!=null&&$2.$==0?$3!=null&&$3.$==0?Snap.New({\r\n   $:0,\r\n   $0:fn($1.$0,$2.$0,$3.$0)\r\n  }):Snap.Map3Opt1(fn,$1.$0,$2.$0,sn3):$3!=null&&$3.$==0?Snap.Map3Opt2(fn,$1.$0,$3.$0,sn2):Snap.Map3Opt3(fn,$1.$0,sn2,sn3):$2!=null&&$2.$==0?$3!=null&&$3.$==0?Snap.Map3Opt4(fn,$2.$0,$3.$0,sn1):Snap.Map3Opt5(fn,$2.$0,sn1,sn3):$3!=null&&$3.$==0?Snap.Map3Opt6(fn,$3.$0,sn1,sn2):(res=Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  }),(Snap.When(sn1,cont,res),Snap.When(sn2,cont,res),Snap.When(sn3,cont,res),res));\r\n };\r\n Snap.Map3Opt6=function(fn,z,sn1,sn2)\r\n {\r\n  return Snap.Map2(function($1,$2)\r\n  {\r\n   return fn($1,$2,z);\r\n  },sn1,sn2);\r\n };\r\n Snap.Map3Opt5=function(fn,y,sn1,sn3)\r\n {\r\n  return Snap.Map2(function($1,$2)\r\n  {\r\n   return fn($1,y,$2);\r\n  },sn1,sn3);\r\n };\r\n Snap.Map3Opt4=function(fn,y,z,sn1)\r\n {\r\n  return Snap.Map(function(x)\r\n  {\r\n   return fn(x,y,z);\r\n  },sn1);\r\n };\r\n Snap.Map3Opt3=function(fn,x,sn2,sn3)\r\n {\r\n  return Snap.Map2(function($1,$2)\r\n  {\r\n   return fn(x,$1,$2);\r\n  },sn2,sn3);\r\n };\r\n Snap.Map3Opt2=function(fn,x,z,sn2)\r\n {\r\n  return Snap.Map(function(y)\r\n  {\r\n   return fn(x,y,z);\r\n  },sn2);\r\n };\r\n Snap.Map3Opt1=function(fn,x,y,sn3)\r\n {\r\n  return Snap.Map(function(z)\r\n  {\r\n   return fn(x,y,z);\r\n  },sn3);\r\n };\r\n Snap.Map2Unit=function(sn1,sn2)\r\n {\r\n  var $1,$2,res;\r\n  function cont()\r\n  {\r\n   var m,$3,$4;\r\n   if(!(m=res.s,m!=null&&m.$==0||m!=null&&m.$==2))\r\n    {\r\n     $3=Snap.ValueAndForever(sn1);\r\n     $4=Snap.ValueAndForever(sn2);\r\n     $3!=null&&$3.$==1?$4!=null&&$4.$==1?$3.$0[1]&&$4.$0[1]?Snap.MarkForever(res,null):Snap.MarkReady(res,null):void 0:void 0;\r\n    }\r\n  }\r\n  $1=sn1.s;\r\n  $2=sn2.s;\r\n  return $1!=null&&$1.$==0?$2!=null&&$2.$==0?Snap.New({\r\n   $:0,\r\n   $0:null\r\n  }):sn2:$2!=null&&$2.$==0?sn1:(res=Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  }),(Snap.When(sn1,cont,res),Snap.When(sn2,cont,res),res));\r\n };\r\n Snap.Map2=function(fn,sn1,sn2)\r\n {\r\n  var $1,$2,res;\r\n  function cont(a)\r\n  {\r\n   var m,$3,$4;\r\n   if(!(m=res.s,m!=null&&m.$==0||m!=null&&m.$==2))\r\n    {\r\n     $3=Snap.ValueAndForever(sn1);\r\n     $4=Snap.ValueAndForever(sn2);\r\n     $3!=null&&$3.$==1?$4!=null&&$4.$==1?$3.$0[1]&&$4.$0[1]?Snap.MarkForever(res,fn($3.$0[0],$4.$0[0])):Snap.MarkReady(res,fn($3.$0[0],$4.$0[0])):void 0:void 0;\r\n    }\r\n  }\r\n  $1=sn1.s;\r\n  $2=sn2.s;\r\n  return $1!=null&&$1.$==0?$2!=null&&$2.$==0?Snap.New({\r\n   $:0,\r\n   $0:fn($1.$0,$2.$0)\r\n  }):Snap.Map2Opt1(fn,$1.$0,sn2):$2!=null&&$2.$==0?Snap.Map2Opt2(fn,$2.$0,sn1):(res=Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  }),(Snap.When(sn1,cont,res),Snap.When(sn2,cont,res),res));\r\n };\r\n Snap.Map2Opt2=function(fn,y,sn1)\r\n {\r\n  return Snap.Map(function(x)\r\n  {\r\n   return fn(x,y);\r\n  },sn1);\r\n };\r\n Snap.Map2Opt1=function(fn,x,sn2)\r\n {\r\n  return Snap.Map(function(y)\r\n  {\r\n   return fn(x,y);\r\n  },sn2);\r\n };\r\n Snap.MapCachedBy=function(eq,prev,fn,sn)\r\n {\r\n  return Snap.Map(function(x)\r\n  {\r\n   var m,$1,y;\r\n   m=prev[0];\r\n   return m!=null&&m.$==1&&(eq(x,m.$0[0])&&($1=[m.$0[0],m.$0[1]],true))?$1[1]:(y=fn(x),(prev[0]={\r\n    $:1,\r\n    $0:[x,y]\r\n   },y));\r\n  },sn);\r\n };\r\n Snap.Copy=function(sn)\r\n {\r\n  var m,res,res$1;\r\n  m=sn.s;\r\n  return m==null?sn:m!=null&&m.$==2?(res=Snap.New({\r\n   $:2,\r\n   $0:m.$0,\r\n   $1:[]\r\n  }),(Snap.WhenObsolete(sn,res),res)):m!=null&&m.$==3?(res$1=Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  }),(Snap.When(sn,function(v)\r\n  {\r\n   Snap.MarkDone(res$1,sn,v);\r\n  },res$1),res$1)):sn;\r\n };\r\n Snap.WithInitOption=function(sn)\r\n {\r\n  var m,res,res$1;\r\n  m=sn.s;\r\n  return m==null?Snap.New(null):m!=null&&m.$==2?(res=Snap.New({\r\n   $:2,\r\n   $0:{\r\n    $:1,\r\n    $0:m.$0\r\n   },\r\n   $1:[]\r\n  }),(Snap.WhenObsolete(sn,res),res)):m!=null&&m.$==3?(res$1=Snap.New({\r\n   $:2,\r\n   $0:null,\r\n   $1:[]\r\n  }),(Snap.When(sn,function()\r\n  {\r\n   Snap.Obsolete(res$1);\r\n  },res$1),res$1)):Snap.New({\r\n   $:0,\r\n   $0:{\r\n    $:1,\r\n    $0:m.$0\r\n   }\r\n  });\r\n };\r\n Snap.WithInit=function(x,sn)\r\n {\r\n  var m,res,res$1;\r\n  m=sn.s;\r\n  return m==null?sn:m!=null&&m.$==2?(res=Snap.New({\r\n   $:2,\r\n   $0:m.$0,\r\n   $1:[]\r\n  }),(Snap.WhenObsolete(sn,res),res)):m!=null&&m.$==3?(res$1=Snap.New({\r\n   $:2,\r\n   $0:x,\r\n   $1:[]\r\n  }),(Snap.When(sn,function()\r\n  {\r\n   Snap.Obsolete(res$1);\r\n  },res$1),res$1)):sn;\r\n };\r\n Snap.Map=function(fn,sn)\r\n {\r\n  var m,res;\r\n  m=sn.s;\r\n  return m!=null&&m.$==0?Snap.New({\r\n   $:0,\r\n   $0:fn(m.$0)\r\n  }):(res=Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  }),(Snap.When(sn,function(a)\r\n  {\r\n   Snap.MarkDone(res,sn,fn(a));\r\n  },res),res));\r\n };\r\n Snap.Sequence=function(snaps)\r\n {\r\n  var snaps$1,res,w;\r\n  function cont(a)\r\n  {\r\n   var vs;\r\n   if(w[0]===0)\r\n    {\r\n     vs=Arrays.map(function(s)\r\n     {\r\n      var m;\r\n      m=s.s;\r\n      return m!=null&&m.$==0?m.$0:m!=null&&m.$==2?m.$0:Operators.FailWith(\"value not found by View.Sequence\");\r\n     },snaps$1);\r\n     Arrays.forall(function(a$1)\r\n     {\r\n      var $1;\r\n      $1=a$1.s;\r\n      return $1!=null&&$1.$==0;\r\n     },snaps$1)?Snap.MarkForever(res,vs):Snap.MarkReady(res,vs);\r\n    }\r\n   else\r\n    w[0]--;\r\n  }\r\n  snaps$1=Arrays.ofSeq(snaps);\r\n  return snaps$1.length==0?Snap.New({\r\n   $:0,\r\n   $0:[]\r\n  }):(res=Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  }),(w=[Arrays.length(snaps$1)-1],(Arrays.iter(function(s)\r\n  {\r\n   Snap.When(s,cont,res);\r\n  },snaps$1),res)));\r\n };\r\n Snap.CreateForeverAsync=function(a)\r\n {\r\n  var o;\r\n  o=Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  });\r\n  Async.StartTo(a,function(v)\r\n  {\r\n   Snap.MarkForever(o,v);\r\n  });\r\n  return o;\r\n };\r\n Snap.JoinInner=function(snap)\r\n {\r\n  var res;\r\n  res=Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  });\r\n  Snap.When(snap,function(x)\r\n  {\r\n   var y;\r\n   y=x();\r\n   Snap.When(y,function(v)\r\n   {\r\n    var $1,$2;\r\n    if(($1=y.s,$1!=null&&$1.$==0)&&($2=snap.s,$2!=null&&$2.$==0))\r\n     Snap.MarkForever(res,v);\r\n    else\r\n     Snap.MarkReady(res,v);\r\n   },res);\r\n   Snap.WhenObsolete(snap,y);\r\n  },res);\r\n  return res;\r\n };\r\n Snap.Join=function(snap)\r\n {\r\n  var res;\r\n  res=Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  });\r\n  Snap.When(snap,function(x)\r\n  {\r\n   var y;\r\n   y=x();\r\n   Snap.When(y,function(v)\r\n   {\r\n    var $1,$2;\r\n    if(($1=y.s,$1!=null&&$1.$==0)&&($2=snap.s,$2!=null&&$2.$==0))\r\n     Snap.MarkForever(res,v);\r\n    else\r\n     Snap.MarkReady(res,v);\r\n   },res);\r\n  },res);\r\n  return res;\r\n };\r\n Snap.ValueAndForever=function(snap)\r\n {\r\n  var m;\r\n  m=snap.s;\r\n  return m!=null&&m.$==0?{\r\n   $:1,\r\n   $0:[m.$0,true]\r\n  }:m!=null&&m.$==2?{\r\n   $:1,\r\n   $0:[m.$0,false]\r\n  }:null;\r\n };\r\n Snap.WhenObsoleteRun=function(snap,obs)\r\n {\r\n  var m;\r\n  m=snap.s;\r\n  m==null?obs():m!=null&&m.$==2?m.$1.push(obs):m!=null&&m.$==3?m.$1.push(obs):void 0;\r\n };\r\n Snap.WhenObsolete=function(snap,obs)\r\n {\r\n  var m;\r\n  m=snap.s;\r\n  m==null?Snap.Obsolete(obs):m!=null&&m.$==2?Snap.EnqueueSafe(m.$1,obs):m!=null&&m.$==3?Snap.EnqueueSafe(m.$1,obs):void 0;\r\n };\r\n Snap.WhenReady=function(snap,avail)\r\n {\r\n  var $1,m;\r\n  m=snap.s;\r\n  switch(m!=null&&m.$==2?($1=m.$0,0):m==null?1:m!=null&&m.$==3?2:($1=m.$0,0))\r\n  {\r\n   case 0:\r\n    avail($1);\r\n    break;\r\n   case 1:\r\n    null;\r\n    break;\r\n   case 2:\r\n    m.$0.push(avail);\r\n    break;\r\n  }\r\n };\r\n Snap.WhenRun=function(snap,avail,obs)\r\n {\r\n  var m;\r\n  m=snap.s;\r\n  m==null?obs():m!=null&&m.$==2?(m.$1.push(obs),avail(m.$0)):m!=null&&m.$==3?(m.$0.push(avail),m.$1.push(obs)):avail(m.$0);\r\n };\r\n Snap.When=function(snap,avail,obs)\r\n {\r\n  var m;\r\n  m=snap.s;\r\n  m==null?Snap.Obsolete(obs):m!=null&&m.$==2?(Snap.EnqueueSafe(m.$1,obs),avail(m.$0)):m!=null&&m.$==3?(m.$0.push(avail),Snap.EnqueueSafe(m.$1,obs)):avail(m.$0);\r\n };\r\n Snap.EnqueueSafe=function(q,x)\r\n {\r\n  var qcopy,i,$1,o;\r\n  q.push(x);\r\n  if(q.length%20===0)\r\n   {\r\n    qcopy=q.slice(0);\r\n    Queue.Clear(q);\r\n    for(i=0,$1=Arrays.length(qcopy)-1;i<=$1;i++){\r\n     o=Arrays.get(qcopy,i);\r\n     typeof o==\"object\"?function(sn)\r\n     {\r\n      if(sn.s)\r\n       q.push(sn);\r\n     }(o):function(f)\r\n     {\r\n      q.push(f);\r\n     }(o);\r\n    }\r\n   }\r\n  else\r\n   void 0;\r\n };\r\n Snap.MarkDone=function(res,sn,v)\r\n {\r\n  var $1;\r\n  if($1=sn.s,$1!=null&&$1.$==0)\r\n   Snap.MarkForever(res,v);\r\n  else\r\n   Snap.MarkReady(res,v);\r\n };\r\n Snap.MarkReady=function(sn,v)\r\n {\r\n  var m,qa,i,$1;\r\n  m=sn.s;\r\n  if(m!=null&&m.$==3)\r\n   {\r\n    sn.s={\r\n     $:2,\r\n     $0:v,\r\n     $1:m.$1\r\n    };\r\n    qa=m.$0;\r\n    for(i=0,$1=Arrays.length(qa)-1;i<=$1;i++)(Arrays.get(qa,i))(v);\r\n   }\r\n  else\r\n   void 0;\r\n };\r\n Snap.MarkForever=function(sn,v)\r\n {\r\n  var m,qa,i,$1;\r\n  m=sn.s;\r\n  if(m!=null&&m.$==3)\r\n   {\r\n    sn.s={\r\n     $:0,\r\n     $0:v\r\n    };\r\n    qa=m.$0;\r\n    for(i=0,$1=Arrays.length(qa)-1;i<=$1;i++)(Arrays.get(qa,i))(v);\r\n   }\r\n  else\r\n   void 0;\r\n };\r\n Snap.TryGet=function(snap)\r\n {\r\n  var m,$1;\r\n  m=snap.s;\r\n  return(m!=null&&m.$==0?($1=m.$0,true):m!=null&&m.$==2&&($1=m.$0,true))?{\r\n   $:1,\r\n   $0:$1\r\n  }:null;\r\n };\r\n Var=UI.Var=Runtime.Class({},Obj,Var);\r\n Var.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },Var);\r\n View=UI.View=Runtime.Class({\r\n  get_V:function()\r\n  {\r\n   return Operators.FailWith(\"View<'T>.V can only be called in an argument to a V-enabled function or if 'T = Doc.\");\r\n  }\r\n },null,View);\r\n ConcreteVar=UI.ConcreteVar=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return\"uinref\"+Global.String(this.id);\r\n  },\r\n  get_View:function()\r\n  {\r\n   return this.view;\r\n  },\r\n  UpdateMaybe:function(f)\r\n  {\r\n   var m;\r\n   m=f(this.Get());\r\n   m!=null&&m.$==1?this.Set(m.$0):void 0;\r\n  },\r\n  Update:function(f)\r\n  {\r\n   this.Set(f(this.Get()));\r\n  },\r\n  SetFinal:function(v)\r\n  {\r\n   if(this.isConst)\r\n    (function($1)\r\n    {\r\n     return $1(\"WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal\");\r\n    }(function(s)\r\n    {\r\n     console.log(s);\r\n    }));\r\n   else\r\n    {\r\n     Snap.Obsolete(this.snap);\r\n     this.isConst=true;\r\n     this.current=v;\r\n     this.snap=Snap.New({\r\n      $:0,\r\n      $0:v\r\n     });\r\n    }\r\n  },\r\n  Set:function(v)\r\n  {\r\n   if(this.isConst)\r\n    (function($1)\r\n    {\r\n     return $1(\"WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal\");\r\n    }(function(s)\r\n    {\r\n     console.log(s);\r\n    }));\r\n   else\r\n    {\r\n     Snap.Obsolete(this.snap);\r\n     this.current=v;\r\n     this.snap=Snap.New({\r\n      $:2,\r\n      $0:v,\r\n      $1:[]\r\n     });\r\n    }\r\n  },\r\n  Get:function()\r\n  {\r\n   return this.current;\r\n  }\r\n },Var,ConcreteVar);\r\n ConcreteVar.New=Runtime.Ctor(function(isConst,initSnap,initValue)\r\n {\r\n  var $this;\r\n  $this=this;\r\n  Var.New.call(this);\r\n  this.isConst=isConst;\r\n  this.current=initValue;\r\n  this.snap=initSnap;\r\n  this.view=function()\r\n  {\r\n   return $this.snap;\r\n  };\r\n  this.id=Fresh.Int();\r\n },ConcreteVar);\r\n Var$1=UI.Var$1=Runtime.Class({},Obj,Var$1);\r\n Var$1.MapLens=function(getKey,f,_var)\r\n {\r\n  return View.MapSeqCachedViewBy(getKey,function(k,v)\r\n  {\r\n   var id,$1;\r\n   function isThis(a)\r\n   {\r\n    return Unchecked.Equals(getKey(a),k);\r\n   }\r\n   id=Fresh.Id();\r\n   return f(($1=new Var({\r\n    Get:function()\r\n    {\r\n     return Seq.find(isThis,_var.Get());\r\n    },\r\n    Set:function(v$1)\r\n    {\r\n     function f$1(a)\r\n     {\r\n      return v$1;\r\n     }\r\n     return _var.Update(function(l)\r\n     {\r\n      return List.replaceFirst(isThis,f$1,l);\r\n     });\r\n    },\r\n    SetFinal:function(v$1)\r\n    {\r\n     return this.Set(v$1);\r\n    },\r\n    Update:function(f$1)\r\n    {\r\n     return _var.Update(function(l)\r\n     {\r\n      return List.replaceFirst(isThis,f$1,l);\r\n     });\r\n    },\r\n    UpdateMaybe:function(f$1)\r\n    {\r\n     return _var.Update(function(l)\r\n     {\r\n      return List.maybeReplaceFirst(isThis,f$1,l);\r\n     });\r\n    },\r\n    get_View:function()\r\n    {\r\n     return v;\r\n    },\r\n    get_Id:function()\r\n    {\r\n     return id;\r\n    }\r\n   }),(Var.New.call($1),$1)));\r\n  },_var.get_View());\r\n };\r\n Var$1.Lens=function(_var,get,update)\r\n {\r\n  var id,view,$1;\r\n  id=Fresh.Id();\r\n  view=View.Map(get,_var.get_View());\r\n  $1=new Var({\r\n   Get:function()\r\n   {\r\n    return get(_var.Get());\r\n   },\r\n   Set:function(v)\r\n   {\r\n    return _var.Update(function(t)\r\n    {\r\n     return update(t,v);\r\n    });\r\n   },\r\n   SetFinal:function(v)\r\n   {\r\n    return this.Set(v);\r\n   },\r\n   Update:function(f)\r\n   {\r\n    return _var.Update(function(t)\r\n    {\r\n     return update(t,f(get(t)));\r\n    });\r\n   },\r\n   UpdateMaybe:function(f)\r\n   {\r\n    return _var.UpdateMaybe(function(t)\r\n    {\r\n     var x;\r\n     x=f(get(t));\r\n     return x==null?null:{\r\n      $:1,\r\n      $0:update(t,x.$0)\r\n     };\r\n    });\r\n   },\r\n   get_View:function()\r\n   {\r\n    return view;\r\n   },\r\n   get_Id:function()\r\n   {\r\n    return id;\r\n   }\r\n  });\r\n  Var.New.call($1);\r\n  return $1;\r\n };\r\n Var$1.Update=function(_var,fn)\r\n {\r\n  Var$1.Set(_var,fn(_var.Get()));\r\n };\r\n Var$1.SetFinal=function(_var,value)\r\n {\r\n  _var.SetFinal(value);\r\n };\r\n Var$1.Set=function(_var,value)\r\n {\r\n  _var.Set(value);\r\n };\r\n Var$1.CreateWaiting=function()\r\n {\r\n  return new ConcreteVar.New(false,Snap.New({\r\n   $:3,\r\n   $0:[],\r\n   $1:[]\r\n  }),null);\r\n };\r\n Var$1.Create=function()\r\n {\r\n  return new ConcreteVar.New(false,Snap.New({\r\n   $:2,\r\n   $0:null,\r\n   $1:[]\r\n  }),null);\r\n };\r\n Var$1.CreateLogged=function(name,v)\r\n {\r\n  var res;\r\n  !self.UINVars?self.UINVars=[]:void 0;\r\n  res=Var$1.Create$1(v);\r\n  self.UINVars.push([name,res]);\r\n  return res;\r\n };\r\n Var$1.Create$1=function(v)\r\n {\r\n  return new ConcreteVar.New(false,Snap.New({\r\n   $:2,\r\n   $0:v,\r\n   $1:[]\r\n  }),v);\r\n };\r\n Var$1.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },Var$1);\r\n Updates=UI.Updates=Runtime.Class({\r\n  set_Value:function(v)\r\n  {\r\n   var sn;\r\n   sn=this.s;\r\n   !(sn===null)?Snap.Obsolete(sn):void 0;\r\n   this.c=v;\r\n  }\r\n },null,Updates);\r\n Updates.Create=function(v)\r\n {\r\n  var _var;\r\n  _var=null;\r\n  _var=Updates.New(v,null,function()\r\n  {\r\n   var c;\r\n   c=_var.s;\r\n   return c===null?(c=Snap.Copy(_var.c()),_var.s=c,Snap.WhenObsoleteRun(c,function()\r\n   {\r\n    _var.s=null;\r\n   }),c):c;\r\n  });\r\n  return _var;\r\n };\r\n Updates.New=function(Current,Snap$1,VarView)\r\n {\r\n  return new Updates({\r\n   c:Current,\r\n   s:Snap$1,\r\n   v:VarView\r\n  });\r\n };\r\n View.get_Do=function()\r\n {\r\n  return ViewBuilder.B;\r\n };\r\n View.Apply=function(fn,view)\r\n {\r\n  return View.Map2(function(f,x)\r\n  {\r\n   return f(x);\r\n  },fn,view);\r\n };\r\n View.AsyncAwait=function(filter,view)\r\n {\r\n  function a(ok)\r\n  {\r\n   var r,remove;\r\n   function r$1()\r\n   {\r\n    return View.RemovableSink(function(value)\r\n    {\r\n     if(filter(value))\r\n      {\r\n       (Lazy.Force(r))();\r\n       ok(value);\r\n      }\r\n    },view);\r\n   }\r\n   r=Lazy.Create(r$1);\r\n   remove=Lazy.Force(r);\r\n  }\r\n  return Concurrency.FromContinuations(function($1,$2,$3)\r\n  {\r\n   return a.apply(null,[$1,$2,$3]);\r\n  });\r\n };\r\n View.RemovableSink=function(act,a)\r\n {\r\n  var cont;\r\n  function loop()\r\n  {\r\n   Snap.WhenRun(a(),function(x)\r\n   {\r\n    if(cont[0])\r\n     act(x);\r\n   },function()\r\n   {\r\n    if(cont[0])\r\n     Concurrency.scheduler().Fork(loop);\r\n   });\r\n  }\r\n  cont=[true];\r\n  Concurrency.scheduler().Fork(loop);\r\n  return function()\r\n  {\r\n   cont[0]=false;\r\n  };\r\n };\r\n View.Sink=function(act,a)\r\n {\r\n  function loop()\r\n  {\r\n   Snap.WhenRun(a(),act,function()\r\n   {\r\n    Concurrency.scheduler().Fork(loop);\r\n   });\r\n  }\r\n  Concurrency.scheduler().Fork(loop);\r\n };\r\n View.TryFinally=function(f,a)\r\n {\r\n  return View.CreateLazy(function()\r\n  {\r\n   try\r\n   {\r\n    return a();\r\n   }\r\n   finally\r\n   {\r\n    f();\r\n   }\r\n  });\r\n };\r\n View.TryWith=function(f,a)\r\n {\r\n  return View.CreateLazy(function()\r\n  {\r\n   try\r\n   {\r\n    return a();\r\n   }\r\n   catch(exn)\r\n   {\r\n    return(f(exn))();\r\n   }\r\n  });\r\n };\r\n View.ConstAsync=function(a)\r\n {\r\n  var o;\r\n  o=Snap.CreateForeverAsync(a);\r\n  return function()\r\n  {\r\n   return o;\r\n  };\r\n };\r\n View.Const=function(x)\r\n {\r\n  var o;\r\n  o=Snap.New({\r\n   $:0,\r\n   $0:x\r\n  });\r\n  return function()\r\n  {\r\n   return o;\r\n  };\r\n };\r\n View.Sequence=function(views)\r\n {\r\n  return View.CreateLazy(function()\r\n  {\r\n   return Snap.Sequence(Seq.map(function(a)\r\n   {\r\n    return a();\r\n   },views));\r\n  });\r\n };\r\n View.UpdateWhile=function(def,v1,v2)\r\n {\r\n  var value;\r\n  value=[def];\r\n  return View.BindInner(function(pred)\r\n  {\r\n   return pred?View.Map(function(v)\r\n   {\r\n    value[0]=v;\r\n    return v;\r\n   },v2):View.Const(value[0]);\r\n  },v1);\r\n };\r\n View.BindInner=function(fn,view)\r\n {\r\n  return View.JoinInner(View.Map(fn,view));\r\n };\r\n View.JoinInner=function(a)\r\n {\r\n  return View.CreateLazy(function()\r\n  {\r\n   return Snap.JoinInner(a());\r\n  });\r\n };\r\n View.Bind=function(fn,view)\r\n {\r\n  return View.Join(View.Map(fn,view));\r\n };\r\n View.Join=function(a)\r\n {\r\n  return View.CreateLazy(function()\r\n  {\r\n   return Snap.Join(a());\r\n  });\r\n };\r\n View.MapSeqCachedView=function(conv,view)\r\n {\r\n  function a(a$1)\r\n  {\r\n   return conv;\r\n  }\r\n  return View.MapSeqCachedViewBy(Global.id,function($1,$2)\r\n  {\r\n   return(a($1))($2);\r\n  },view);\r\n };\r\n View.MapSeqCachedViewBy=function(key,conv,view)\r\n {\r\n  var state;\r\n  state=[new Dictionary.New$5()];\r\n  return View.Map(function(xs)\r\n  {\r\n   var prevState,newState,result;\r\n   prevState=state[0];\r\n   newState=new Dictionary.New$5();\r\n   result=Array.mapInPlace(function(x)\r\n   {\r\n    var k,node,n;\r\n    k=key(x);\r\n    node=prevState.ContainsKey(k)?(n=prevState.get_Item(k),(Var$1.Set(n.r,x),n)):View.ConvertSeqNode(function(v)\r\n    {\r\n     return conv(k,v);\r\n    },x);\r\n    newState.set_Item(k,node);\r\n    return node.e;\r\n   },Arrays.ofSeq(xs));\r\n   state[0]=newState;\r\n   return result;\r\n  },view);\r\n };\r\n View.ConvertSeqNode=function(conv,value)\r\n {\r\n  var _var,view;\r\n  _var=Var$1.Create$1(value);\r\n  view=_var.get_View();\r\n  return{\r\n   e:conv(view),\r\n   r:_var,\r\n   w:view\r\n  };\r\n };\r\n View.MapSeqCached=function(conv,view)\r\n {\r\n  return View.MapSeqCachedBy(Global.id,conv,view);\r\n };\r\n View.MapSeqCachedBy=function(key,conv,view)\r\n {\r\n  var state;\r\n  state=[new Dictionary.New$5()];\r\n  return View.Map(function(xs)\r\n  {\r\n   var prevState,newState,result;\r\n   prevState=state[0];\r\n   newState=new Dictionary.New$5();\r\n   result=Array.mapInPlace(function(x)\r\n   {\r\n    var k,res;\r\n    k=key(x);\r\n    res=prevState.ContainsKey(k)?prevState.get_Item(k):conv(x);\r\n    newState.set_Item(k,res);\r\n    return res;\r\n   },Arrays.ofSeq(xs));\r\n   state[0]=newState;\r\n   return result;\r\n  },view);\r\n };\r\n View.SnapshotOn=function(def,a,a$1)\r\n {\r\n  var sInit;\r\n  sInit=Snap.New({\r\n   $:2,\r\n   $0:def,\r\n   $1:[]\r\n  });\r\n  return View.CreateLazy(function()\r\n  {\r\n   return sInit.s==null?Snap.SnapshotOn(a(),a$1()):(Snap.WhenObsolete(a(),sInit),sInit);\r\n  });\r\n };\r\n View.GetAsync=function(v)\r\n {\r\n  return Concurrency.FromContinuations(function(ok)\r\n  {\r\n   return View.Get(ok,v);\r\n  });\r\n };\r\n View.WithInitOption=function(a)\r\n {\r\n  return View.CreateLazy(function()\r\n  {\r\n   return Snap.WithInitOption(a());\r\n  });\r\n };\r\n View.WithInit=function(x,a)\r\n {\r\n  return View.CreateLazy(function()\r\n  {\r\n   return Snap.WithInit(x,a());\r\n  });\r\n };\r\n View.Get=function(f,a)\r\n {\r\n  var ok;\r\n  function obs()\r\n  {\r\n   Snap.WhenRun(a(),function(v)\r\n   {\r\n    if(!ok[0])\r\n     {\r\n      ok[0]=true;\r\n      f(v);\r\n     }\r\n   },function()\r\n   {\r\n    if(!ok[0])\r\n     obs();\r\n   });\r\n  }\r\n  ok=[false];\r\n  obs();\r\n };\r\n View.TryGet=function(a)\r\n {\r\n  return Snap.TryGet(a());\r\n };\r\n View.MapAsync2=function(fn,v1,v2)\r\n {\r\n  return View.MapAsync(Global.id,View.Map2(fn,v1,v2));\r\n };\r\n View.MapAsync=function(fn,a)\r\n {\r\n  return View.CreateLazy(function()\r\n  {\r\n   return Snap.MapAsync(fn,a());\r\n  });\r\n };\r\n View.Map3=function(fn,a,a$1,a$2)\r\n {\r\n  return View.CreateLazy(function()\r\n  {\r\n   return Snap.Map3(fn,a(),a$1(),a$2());\r\n  });\r\n };\r\n View.Map2Unit=function(a,a$1)\r\n {\r\n  return View.CreateLazy(function()\r\n  {\r\n   return Snap.Map2Unit(a(),a$1());\r\n  });\r\n };\r\n View.Map2=function(fn,a,a$1)\r\n {\r\n  return View.CreateLazy(function()\r\n  {\r\n   return Snap.Map2(fn,a(),a$1());\r\n  });\r\n };\r\n View.MapCached=function(fn,v)\r\n {\r\n  return View.MapCachedBy(Unchecked.Equals,fn,v);\r\n };\r\n View.MapCachedBy=function(eq,fn,a)\r\n {\r\n  var vref;\r\n  vref=[null];\r\n  return View.CreateLazy(function()\r\n  {\r\n   return Snap.MapCachedBy(eq,vref,fn,a());\r\n  });\r\n };\r\n View.Map=function(fn,a)\r\n {\r\n  return View.CreateLazy(function()\r\n  {\r\n   return Snap.Map(fn,a());\r\n  });\r\n };\r\n View.CreateLazy=function(observe)\r\n {\r\n  var lv;\r\n  lv={\r\n   c:null,\r\n   o:observe\r\n  };\r\n  return function()\r\n  {\r\n   var c,$1;\r\n   c=lv.c;\r\n   return c===null?(c=lv.o(),lv.c=c,($1=c.s,$1!=null&&$1.$==0)?lv.o=null:Snap.WhenObsoleteRun(c,function()\r\n   {\r\n    lv.c=null;\r\n   }),c):c;\r\n  };\r\n };\r\n FromView=UI.FromView=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return\"uinref\"+Global.String(this.id);\r\n  },\r\n  SetFinal:function(x)\r\n  {\r\n   this.set(x);\r\n  },\r\n  Update:function(f)\r\n  {\r\n   var g;\r\n   View.Get((g=this.set,function(x)\r\n   {\r\n    return g(f(x));\r\n   }),this.view);\r\n  },\r\n  UpdateMaybe:function(f)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   View.Get(function(x)\r\n   {\r\n    var m;\r\n    m=f(x);\r\n    m!=null&&m.$==1?$this.set(m.$0):void 0;\r\n   },this.view);\r\n  },\r\n  Set:function(x)\r\n  {\r\n   this.set(x);\r\n  },\r\n  Get:function()\r\n  {\r\n   return this.current;\r\n  },\r\n  get_View:function()\r\n  {\r\n   return this.view;\r\n  }\r\n },Var,FromView);\r\n FromView.New=Runtime.Ctor(function(view,set)\r\n {\r\n  var $this,m;\r\n  $this=this;\r\n  Var.New.call(this);\r\n  this.set=set;\r\n  this.id=Fresh.Int();\r\n  this.current=(m=View.TryGet(view),m==null?null:m.$0);\r\n  this.view=View.Map(function(x)\r\n  {\r\n   $this.current=x;\r\n   return x;\r\n  },view);\r\n },FromView);\r\n ViewBuilder.B={\r\n  $:0\r\n };\r\n Submitter=UI.Submitter=Runtime.Class({\r\n  Trigger:function()\r\n  {\r\n   this[\"var\"].Set(null);\r\n  }\r\n },Obj,Submitter);\r\n Submitter.New=Runtime.Ctor(function(input,init)\r\n {\r\n  Obj.New.call(this);\r\n  this.input=input;\r\n  this[\"var\"]=Var$1.Create();\r\n  this.view=View.SnapshotOn(init,this[\"var\"].get_View(),this.input);\r\n },Submitter);\r\n Submitter.CreateOption=function(input)\r\n {\r\n  return new Submitter.New(View.Map(function(a)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:a\r\n   };\r\n  },input),null);\r\n };\r\n Key.Fresh=function()\r\n {\r\n  return{\r\n   $:0,\r\n   $0:Fresh.Int()\r\n  };\r\n };\r\n Model=UI.Model=Runtime.Class({},Obj,Model);\r\n Model.New=Runtime.Ctor(function(proj,init)\r\n {\r\n  var _var;\r\n  _var=Var$1.Create$1(init);\r\n  Model.New$1.call(this,_var,View.Map(proj,_var.get_View()));\r\n },Model);\r\n Model.New$1=Runtime.Ctor(function(_var,view)\r\n {\r\n  Obj.New.call(this);\r\n  this[\"var\"]=_var;\r\n  this.view=view;\r\n },Model);\r\n Model.Update=function(update,m)\r\n {\r\n  Var$1.Update(m[\"var\"],function(x)\r\n  {\r\n   update(x);\r\n   return x;\r\n  });\r\n };\r\n Model.Create=function(proj,init)\r\n {\r\n  return new Model.New(proj,init);\r\n };\r\n Serializer.Default=function()\r\n {\r\n  SC$5.$cctor();\r\n  return SC$5.Default;\r\n };\r\n ArrayStorage=Storage.ArrayStorage=Runtime.Class({\r\n  SSet:function(coll)\r\n  {\r\n   return Arrays.ofSeq(coll);\r\n  },\r\n  SSetAt:function(idx,elem,arr)\r\n  {\r\n   Arrays.set(arr,idx,elem);\r\n   return arr;\r\n  },\r\n  SRemoveIf:function(pred,arr)\r\n  {\r\n   return Arrays.filter(function(i)\r\n   {\r\n    return!pred(i);\r\n   },arr);\r\n  },\r\n  SInit:function()\r\n  {\r\n   return this.init;\r\n  },\r\n  SPrependMany:function(is,arr)\r\n  {\r\n   var ps;\r\n   ps=Array.ofSeqNonCopying(is);\r\n   arr.unshift.apply(arr,ps);\r\n   return arr;\r\n  },\r\n  SPrepend:function(i,arr)\r\n  {\r\n   arr.unshift(i);\r\n   return arr;\r\n  },\r\n  SAppendMany:function(is,arr)\r\n  {\r\n   var ps;\r\n   ps=Array.ofSeqNonCopying(is);\r\n   arr.push.apply(arr,ps);\r\n   return arr;\r\n  },\r\n  SAppend:function(i,arr)\r\n  {\r\n   arr.push(i);\r\n   return arr;\r\n  }\r\n },Obj,ArrayStorage);\r\n ArrayStorage.New=Runtime.Ctor(function(init)\r\n {\r\n  Obj.New.call(this);\r\n  this.init=init;\r\n },ArrayStorage);\r\n LocalStorageBackend=Storage.LocalStorageBackend=Runtime.Class({\r\n  clear:function()\r\n  {\r\n   this.storage.removeItem(this.id);\r\n  },\r\n  set:function(arr)\r\n  {\r\n   this.storage.setItem(this.id,JSON.stringify(Arrays.map(this.serializer.Encode,arr)));\r\n   return arr;\r\n  },\r\n  SSet:function(coll)\r\n  {\r\n   return this.set(Arrays.ofSeq(coll));\r\n  },\r\n  SSetAt:function(idx,elem,arr)\r\n  {\r\n   Arrays.set(arr,idx,elem);\r\n   return this.set(arr);\r\n  },\r\n  SRemoveIf:function(pred,arr)\r\n  {\r\n   return this.set(Arrays.filter(function(i)\r\n   {\r\n    return!pred(i);\r\n   },arr));\r\n  },\r\n  SInit:function()\r\n  {\r\n   var item;\r\n   item=this.storage.getItem(this.id);\r\n   if(item===null)\r\n    return[];\r\n   else\r\n    try\r\n    {\r\n     return Arrays.map(this.serializer.Decode,JSON.parse(item));\r\n    }\r\n    catch(m)\r\n    {\r\n     return[];\r\n    }\r\n  },\r\n  SPrependMany:function(is,arr)\r\n  {\r\n   var ps;\r\n   ps=Array.ofSeqNonCopying(is);\r\n   arr.unshift.apply(arr,ps);\r\n   return this.set(arr);\r\n  },\r\n  SPrepend:function(i,arr)\r\n  {\r\n   arr.unshift(i);\r\n   return this.set(arr);\r\n  },\r\n  SAppendMany:function(is,arr)\r\n  {\r\n   var ps;\r\n   ps=Array.ofSeqNonCopying(is);\r\n   arr.push.apply(arr,ps);\r\n   return this.set(arr);\r\n  },\r\n  SAppend:function(i,arr)\r\n  {\r\n   arr.push(i);\r\n   return this.set(arr);\r\n  }\r\n },Obj,LocalStorageBackend);\r\n LocalStorageBackend.New=Runtime.Ctor(function(id,serializer)\r\n {\r\n  Obj.New.call(this);\r\n  this.id=id;\r\n  this.serializer=serializer;\r\n  this.storage=self.localStorage;\r\n },LocalStorageBackend);\r\n Storage.LocalStorage=function(id,serializer)\r\n {\r\n  return new LocalStorageBackend.New(id,serializer);\r\n };\r\n Storage.InMemory=function(init)\r\n {\r\n  return new ArrayStorage.New(init);\r\n };\r\n ListModel=UI.ListModel=Runtime.Class({\r\n  Wrap:function(extract,wrap,update)\r\n  {\r\n   return ListModel.Wrap(this,extract,wrap,update);\r\n  },\r\n  MapLens:function(f)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return View.MapSeqCachedViewBy($this.key,function(k,v)\r\n   {\r\n    return f(k,$this[\"LensInto'\"](Global.id,function($1,$2)\r\n    {\r\n     return $2;\r\n    },k,v));\r\n   },this[\"var\"].get_View());\r\n  },\r\n  Lens:function(key)\r\n  {\r\n   return this.LensInto(Global.id,function(a,x)\r\n   {\r\n    return x;\r\n   },key);\r\n  },\r\n  LensInto:function(get,update,key)\r\n  {\r\n   return this[\"LensInto'\"](get,update,key,View.Map(get,this.FindByKeyAsView(key)));\r\n  },\r\n  \"LensInto'\":function(get,update,key,view)\r\n  {\r\n   var $this,id,$1;\r\n   $this=this;\r\n   id=Fresh.Id();\r\n   $1=new Var({\r\n    Get:function()\r\n    {\r\n     return get($this.FindByKey(key));\r\n    },\r\n    Set:function(v)\r\n    {\r\n     return $this.UpdateBy(function(i)\r\n     {\r\n      return{\r\n       $:1,\r\n       $0:update(i,v)\r\n      };\r\n     },key);\r\n    },\r\n    SetFinal:function(v)\r\n    {\r\n     return this.Set(v);\r\n    },\r\n    Update:function(f)\r\n    {\r\n     return $this.UpdateBy(function(i)\r\n     {\r\n      return{\r\n       $:1,\r\n       $0:update(i,f(get(i)))\r\n      };\r\n     },key);\r\n    },\r\n    UpdateMaybe:function(f)\r\n    {\r\n     return $this.UpdateBy(function(i)\r\n     {\r\n      var x;\r\n      x=f(get(i));\r\n      return x==null?null:{\r\n       $:1,\r\n       $0:update(i,x.$0)\r\n      };\r\n     },key);\r\n    },\r\n    get_View:function()\r\n    {\r\n     return view;\r\n    },\r\n    get_Id:function()\r\n    {\r\n     return id;\r\n    }\r\n   });\r\n   Var.New.call($1);\r\n   return $1;\r\n  },\r\n  get_LengthAsView:function()\r\n  {\r\n   return View.Map(Arrays.length,this[\"var\"].get_View());\r\n  },\r\n  get_Length:function()\r\n  {\r\n   return Arrays.length(this[\"var\"].Get());\r\n  },\r\n  Clear:function()\r\n  {\r\n   this[\"var\"].Set(this.storage.SSet([]));\r\n   this.ObsoleteAll();\r\n  },\r\n  UpdateBy:function(fn,key)\r\n  {\r\n   var $this,v,m,index,m$1;\r\n   $this=this;\r\n   v=this[\"var\"].Get();\r\n   m=Arrays.tryFindIndex(function(it)\r\n   {\r\n    return Unchecked.Equals($this.key(it),key);\r\n   },v);\r\n   m!=null&&m.$==1?(index=m.$0,m$1=fn(Arrays.get(v,index)),m$1!=null&&m$1.$==1?(this[\"var\"].Set(this.storage.SSetAt(index,m$1.$0,v)),this.ObsoleteKey(key)):void 0):void 0;\r\n  },\r\n  UpdateAll:function(fn)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   this[\"var\"].Update(function(a)\r\n   {\r\n    Arrays.iteri(function(i,x)\r\n    {\r\n     var o;\r\n     o=fn(x);\r\n     return o==null?null:Arrays.set(a,i,o.$0);\r\n    },a);\r\n    return $this.storage.SSet(a);\r\n   });\r\n   this.ObsoleteAll();\r\n  },\r\n  FindByKeyAsView:function(key)\r\n  {\r\n   return View.Map(function(o)\r\n   {\r\n    return o.$0;\r\n   },this.TryFindByKeyAsView(key));\r\n  },\r\n  TryFindByKeyAsView:function(key)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return function()\r\n   {\r\n    var m,o,sn;\r\n    m=(o=null,[$this.it.TryGetValue(key,{\r\n     get:function()\r\n     {\r\n      return o;\r\n     },\r\n     set:function(v)\r\n     {\r\n      o=v;\r\n     }\r\n    }),o]);\r\n    return m[0]?m[1]:(sn=Snap.New({\r\n     $:2,\r\n     $0:$this.TryFindByKey(key),\r\n     $1:[]\r\n    }),($this.it.Add(key,sn),sn));\r\n   };\r\n  },\r\n  TryFindByKey:function(key)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return Arrays.tryFind(function(it)\r\n   {\r\n    return Unchecked.Equals($this.key(it),key);\r\n   },this[\"var\"].Get());\r\n  },\r\n  FindByKey:function(key)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return Arrays.find(function(it)\r\n   {\r\n    return Unchecked.Equals($this.key(it),key);\r\n   },this[\"var\"].Get());\r\n  },\r\n  TryFindAsView:function(pred)\r\n  {\r\n   return View.Map(function(a)\r\n   {\r\n    return Arrays.tryFind(pred,a);\r\n   },this[\"var\"].get_View());\r\n  },\r\n  FindAsView:function(pred)\r\n  {\r\n   return View.Map(function(a)\r\n   {\r\n    return Arrays.find(pred,a);\r\n   },this[\"var\"].get_View());\r\n  },\r\n  TryFind:function(pred)\r\n  {\r\n   return Arrays.tryFind(pred,this[\"var\"].Get());\r\n  },\r\n  Find:function(pred)\r\n  {\r\n   return Arrays.find(pred,this[\"var\"].Get());\r\n  },\r\n  ContainsKeyAsView:function(key)\r\n  {\r\n   var $this;\r\n   function p(it)\r\n   {\r\n    return Unchecked.Equals($this.key(it),key);\r\n   }\r\n   $this=this;\r\n   return View.Map(function(a)\r\n   {\r\n    return Arrays.exists(p,a);\r\n   },this[\"var\"].get_View());\r\n  },\r\n  ContainsKey:function(key)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return Arrays.exists(function(it)\r\n   {\r\n    return Unchecked.Equals($this.key(it),key);\r\n   },this[\"var\"].Get());\r\n  },\r\n  Set:function(lst)\r\n  {\r\n   this[\"var\"].Set(this.storage.SSet(lst));\r\n   this.ObsoleteAll();\r\n  },\r\n  Iter:function(fn)\r\n  {\r\n   Arrays.iter(fn,this[\"var\"].Get());\r\n  },\r\n  RemoveByKey:function(key)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   this[\"var\"].Set(this.storage.SRemoveIf(function(i)\r\n   {\r\n    return Unchecked.Equals($this.key(i),key);\r\n   },this[\"var\"].Get()));\r\n   this.ObsoleteKey(key);\r\n  },\r\n  RemoveBy:function(f)\r\n  {\r\n   var a,i,$1,v;\r\n   a=this[\"var\"].Get();\r\n   for(i=0,$1=a.length-1;i<=$1;i++){\r\n    v=Arrays.get(a,i);\r\n    f(v)?this.ObsoleteKey(this.key(v)):void 0;\r\n   }\r\n   this[\"var\"].Set(this.storage.SRemoveIf(f,this[\"var\"].Get()));\r\n  },\r\n  Remove:function(item)\r\n  {\r\n   var $this,v,keyFn,k;\r\n   $this=this;\r\n   v=this[\"var\"].Get();\r\n   ListModels.Contains($this.key,item,v)?(keyFn=$this.key,k=keyFn(item),this[\"var\"].Set(this.storage.SRemoveIf(function(i)\r\n   {\r\n    return Unchecked.Equals(keyFn(i),k);\r\n   },v)),this.ObsoleteKey(k)):void 0;\r\n  },\r\n  PrependMany:function(items)\r\n  {\r\n   var $this,toPrepend;\r\n   function f(v,item)\r\n   {\r\n    var t,m;\r\n    t=$this.key(item);\r\n    $this.ObsoleteKey(t);\r\n    m=Arrays.tryFindIndex(function(it)\r\n    {\r\n     return Unchecked.Equals($this.key(it),t);\r\n    },v);\r\n    return m==null?(toPrepend.push(item),v):$this.storage.SSetAt(m.$0,item,v);\r\n   }\r\n   $this=this;\r\n   toPrepend=[];\r\n   this[\"var\"].Set(this.storage.SPrependMany(toPrepend,(((Runtime.Curried3(Seq.fold))(f))(this[\"var\"].Get()))(items)));\r\n  },\r\n  Prepend:function(item)\r\n  {\r\n   var $this,v,t,m;\r\n   $this=this;\r\n   v=this[\"var\"].Get();\r\n   t=this.key(item);\r\n   m=Arrays.tryFindIndex(function(it)\r\n   {\r\n    return Unchecked.Equals($this.key(it),t);\r\n   },v);\r\n   m!=null&&m.$==1?this[\"var\"].Set(this.storage.SSetAt(m.$0,item,v)):this[\"var\"].Set(this.storage.SPrepend(item,v));\r\n   this.ObsoleteKey(t);\r\n  },\r\n  AppendMany:function(items)\r\n  {\r\n   var $this,toAppend;\r\n   function f(v,item)\r\n   {\r\n    var t,m;\r\n    t=$this.key(item);\r\n    $this.ObsoleteKey(t);\r\n    m=Arrays.tryFindIndex(function(it)\r\n    {\r\n     return Unchecked.Equals($this.key(it),t);\r\n    },v);\r\n    return m==null?(toAppend.push(item),v):$this.storage.SSetAt(m.$0,item,v);\r\n   }\r\n   $this=this;\r\n   toAppend=[];\r\n   this[\"var\"].Set(this.storage.SAppendMany(toAppend,(((Runtime.Curried3(Seq.fold))(f))(this[\"var\"].Get()))(items)));\r\n  },\r\n  Append:function(item)\r\n  {\r\n   var $this,v,t,m;\r\n   $this=this;\r\n   v=this[\"var\"].Get();\r\n   t=this.key(item);\r\n   m=Arrays.tryFindIndex(function(it)\r\n   {\r\n    return Unchecked.Equals($this.key(it),t);\r\n   },v);\r\n   m!=null&&m.$==1?this[\"var\"].Set(this.storage.SSetAt(m.$0,item,v)):this[\"var\"].Set(this.storage.SAppend(item,v));\r\n   this.ObsoleteKey(t);\r\n  },\r\n  ObsoleteAll:function()\r\n  {\r\n   Seq.iter(function(ksn)\r\n   {\r\n    Snap.Obsolete(ksn.V);\r\n   },this.it);\r\n   this.it.Clear();\r\n  },\r\n  ObsoleteKey:function(key)\r\n  {\r\n   var m,o;\r\n   m=(o=null,[this.it.TryGetValue(key,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o]);\r\n   m[0]?(Snap.Obsolete(m[1]),this.it.Remove(key)):void 0;\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return Enumerator.Get0(this[\"var\"].Get());\r\n  },\r\n  GetEnumerator:function()\r\n  {\r\n   return Enumerator.Get(this[\"var\"].Get());\r\n  }\r\n },Obj,ListModel);\r\n ListModel.New=Runtime.Ctor(function(key,storage)\r\n {\r\n  ListModel.New$3.call(this,key,Var$1.Create$1(Arrays.ofSeq(Seq.distinctBy(key,storage.SInit()))),storage);\r\n },ListModel);\r\n ListModel.New$1=Runtime.Ctor(function(key)\r\n {\r\n  ListModel.New$2.call(this,key,[]);\r\n },ListModel);\r\n ListModel.New$2=Runtime.Ctor(function(key,init)\r\n {\r\n  var init$1;\r\n  init$1=Arrays.ofSeq(init);\r\n  ListModel.New$3.call(this,key,Var$1.Create$1(init$1),Storage.InMemory(init$1));\r\n },ListModel);\r\n ListModel.New$3=Runtime.Ctor(function(key,_var,storage)\r\n {\r\n  Obj.New.call(this);\r\n  this.key=key;\r\n  this[\"var\"]=_var;\r\n  this.storage=storage;\r\n  this.v=View.Map(function(x)\r\n  {\r\n   return x.slice();\r\n  },this[\"var\"].get_View());\r\n  this.it=new Dictionary.New$5();\r\n },ListModel);\r\n ListModels.Contains=function(keyFn,item,xs)\r\n {\r\n  var t;\r\n  t=keyFn(item);\r\n  return Arrays.exists(function(it)\r\n  {\r\n   return Unchecked.Equals(keyFn(it),t);\r\n  },xs);\r\n };\r\n ListModel.Wrap=function(underlying,extract,createItem,updateItem)\r\n {\r\n  var state,init;\r\n  state=[new Dictionary.New$5()];\r\n  init=Arrays.map(function(u)\r\n  {\r\n   var t;\r\n   t=createItem(u);\r\n   state[0].set_Item(underlying.key(u),t);\r\n   return t;\r\n  },underlying[\"var\"].Get());\r\n  return new ListModel.New$3(function(d)\r\n  {\r\n   return underlying.key(extract(d));\r\n  },Var$1.Lens(underlying[\"var\"],function(us)\r\n  {\r\n   var newState,ts;\r\n   newState=new Dictionary.New$5();\r\n   ts=Arrays.map(function(u)\r\n   {\r\n    var k,t;\r\n    k=underlying.key(u);\r\n    t=state[0].ContainsKey(k)?updateItem(state[0].get_Item(k),u):createItem(u);\r\n    newState.set_Item(k,t);\r\n    return t;\r\n   },us);\r\n   state[0]=newState;\r\n   return ts;\r\n  },function(us,ts)\r\n  {\r\n   var newState,us$1;\r\n   newState=new Dictionary.New$5();\r\n   us$1=Arrays.map(function(t)\r\n   {\r\n    var u;\r\n    u=extract(t);\r\n    newState.set_Item(underlying.key(u),t);\r\n    return u;\r\n   },ts);\r\n   state[0]=newState;\r\n   return us$1;\r\n  }),Storage.InMemory(init));\r\n };\r\n ListModel.FromSeq=function(init)\r\n {\r\n  return ListModel.Create(Global.id,init);\r\n };\r\n ListModel.Create=function(key,init)\r\n {\r\n  return ListModel.CreateWithStorage(key,Storage.InMemory(Arrays.ofSeq(init)));\r\n };\r\n ListModel.CreateWithStorage=function(key,storage)\r\n {\r\n  return new ListModel.New(key,storage);\r\n };\r\n SC$5.$cctor=function()\r\n {\r\n  SC$5.$cctor=Global.ignore;\r\n  SC$5.Default={\r\n   Encode:Global.id,\r\n   Decode:Global.id\r\n  };\r\n };\r\n ReactiveExtensions=UI.ReactiveExtensions=Runtime.Class({},Obj,ReactiveExtensions);\r\n ReactiveExtensions.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },ReactiveExtensions);\r\n DoubleInterpolation=UI.DoubleInterpolation=Runtime.Class({\r\n  Interpolate:function(t,x,y)\r\n  {\r\n   return x+t*(y-x);\r\n  }\r\n },null,DoubleInterpolation);\r\n DoubleInterpolation.DoubleInterpolation=new DoubleInterpolation({\r\n  $:0\r\n });\r\n Interpolation.get_Double=function()\r\n {\r\n  return DoubleInterpolation.DoubleInterpolation;\r\n };\r\n Easing=UI.Easing=Runtime.Class({\r\n  TransformTime:function(t)\r\n  {\r\n   return this.transformTime(t);\r\n  }\r\n },Obj,Easing);\r\n Easing.get_CubicInOut=function()\r\n {\r\n  return Easings.CubicInOut();\r\n };\r\n Easing.Custom=function(f)\r\n {\r\n  return new Easing.New(f);\r\n };\r\n Easing.New=Runtime.Ctor(function(transformTime)\r\n {\r\n  Obj.New.call(this);\r\n  this.transformTime=transformTime;\r\n },Easing);\r\n Easings.CubicInOut=function()\r\n {\r\n  SC$6.$cctor();\r\n  return SC$6.CubicInOut;\r\n };\r\n An.get_Empty=function()\r\n {\r\n  return{\r\n   $:0,\r\n   $0:AppendList.Empty()\r\n  };\r\n };\r\n An.WhenDone=function(f,main)\r\n {\r\n  return An.Append({\r\n   $:0,\r\n   $0:AppendList.Single({\r\n    $:0,\r\n    $0:f\r\n   })\r\n  },main);\r\n };\r\n An.Run=function(k,anim)\r\n {\r\n  var dur;\r\n  function a(ok)\r\n  {\r\n   function loop(start,now)\r\n   {\r\n    var t;\r\n    t=now-start;\r\n    anim.Compute(t);\r\n    k();\r\n    return t<=dur?void Global.requestAnimationFrame(function(t$1)\r\n    {\r\n     loop(start,t$1);\r\n    }):ok();\r\n   }\r\n   Global.requestAnimationFrame(function(t)\r\n   {\r\n    loop(t,t);\r\n   });\r\n  }\r\n  dur=anim.Duration;\r\n  return dur===0?Concurrency.Zero():Concurrency.FromContinuations(function($1,$2,$3)\r\n  {\r\n   return a.apply(null,[$1,$2,$3]);\r\n  });\r\n };\r\n An.Play=function(anim)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(An.Run(Global.ignore,Anims.Actions(anim)),function()\r\n   {\r\n    Anims.Finalize(anim);\r\n    return Concurrency.Return(null);\r\n   });\r\n  });\r\n };\r\n An.Pack=function(anim)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:AppendList.Single({\r\n    $:1,\r\n    $0:anim\r\n   })\r\n  };\r\n };\r\n An.Map=function(f,anim)\r\n {\r\n  var f$1;\r\n  return Anims.Def(anim.Duration,(f$1=anim.Compute,function(x)\r\n  {\r\n   return f(f$1(x));\r\n  }));\r\n };\r\n An.Delayed=function(inter,easing,dur,delay,x,y)\r\n {\r\n  return{\r\n   Compute:function(t)\r\n   {\r\n    return t<=delay?x:inter.Interpolate(easing.TransformTime((t-delay)/dur),x,y);\r\n   },\r\n   Duration:dur+delay\r\n  };\r\n };\r\n An.Simple=function(inter,easing,dur,x,y)\r\n {\r\n  return{\r\n   Compute:function(t)\r\n   {\r\n    return inter.Interpolate(easing.TransformTime(t/dur),x,y);\r\n   },\r\n   Duration:dur\r\n  };\r\n };\r\n An.Const=function(v)\r\n {\r\n  return Anims.Const(v);\r\n };\r\n An.Concat=function(xs)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:AppendList.Concat(Seq.map(Anims.List,xs))\r\n  };\r\n };\r\n An.Append=function(a,a$1)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:AppendList.Append(a.$0,a$1.$0)\r\n  };\r\n };\r\n An.set_UseAnimations=function(v)\r\n {\r\n  Anims.set_UseAnimations(v);\r\n };\r\n An.get_UseAnimations=function()\r\n {\r\n  return Anims.UseAnimations();\r\n };\r\n Anims.UseAnimations=function()\r\n {\r\n  SC$6.$cctor();\r\n  return SC$6.UseAnimations;\r\n };\r\n Anims.set_UseAnimations=function($1)\r\n {\r\n  SC$6.$cctor();\r\n  SC$6.UseAnimations=$1;\r\n };\r\n Anims.Actions=function(a)\r\n {\r\n  return Anims.ConcatActions(Arrays.choose(function(a$1)\r\n  {\r\n   return a$1.$==1?{\r\n    $:1,\r\n    $0:a$1.$0\r\n   }:null;\r\n  },AppendList.ToArray(a.$0)));\r\n };\r\n Anims.ConcatActions=function(xs)\r\n {\r\n  var xs$1,m,dur,xs$2;\r\n  xs$1=Array.ofSeqNonCopying(xs);\r\n  m=Arrays.length(xs$1);\r\n  return m===0?Anims.Const():m===1?Arrays.get(xs$1,0):(dur=Seq.max(Seq.map(function(anim)\r\n  {\r\n   return anim.Duration;\r\n  },xs$1)),(xs$2=Arrays.map(function(a)\r\n  {\r\n   return Anims.Prolong(dur,a);\r\n  },xs$1),Anims.Def(dur,function(t)\r\n  {\r\n   Arrays.iter(function(anim)\r\n   {\r\n    anim.Compute(t);\r\n   },xs$2);\r\n  })));\r\n };\r\n Anims.Prolong=function(nextDuration,anim)\r\n {\r\n  var comp,dur,last;\r\n  comp=anim.Compute;\r\n  dur=anim.Duration;\r\n  last=Lazy.Create(function()\r\n  {\r\n   return anim.Compute(anim.Duration);\r\n  });\r\n  return{\r\n   Compute:function(t)\r\n   {\r\n    return t>=dur?last.f():comp(t);\r\n   },\r\n   Duration:nextDuration\r\n  };\r\n };\r\n Anims.Const=function(v)\r\n {\r\n  return Anims.Def(0,function()\r\n  {\r\n   return v;\r\n  });\r\n };\r\n Anims.Def=function(d,f)\r\n {\r\n  return{\r\n   Compute:f,\r\n   Duration:d\r\n  };\r\n };\r\n Anims.Finalize=function(a)\r\n {\r\n  Arrays.iter(function(a$1)\r\n  {\r\n   if(a$1.$==0)\r\n    a$1.$0();\r\n  },AppendList.ToArray(a.$0));\r\n };\r\n Anims.List=function(a)\r\n {\r\n  return a.$0;\r\n };\r\n Trans=UI.Trans=Runtime.Class({\r\n  Copy:function(change,enter,exit,flags)\r\n  {\r\n   var $this,ch,d,d$1,d$2;\r\n   function d$3(a,a$1)\r\n   {\r\n    return $this.TChange(a,a$1);\r\n   }\r\n   $this=this;\r\n   ch=change==null?function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return d$3($1,$2);\r\n    };\r\n   }:change.$0;\r\n   return new Trans.New$3(function(d$4,d$5)\r\n   {\r\n    return(ch(d$4))(d$5);\r\n   },(d=this.get_TEnter(),enter==null?d:enter.$0),(d$1=this.get_TExit(),exit==null?d$1:exit.$0),(d$2=this.get_TFlags(),flags==null?d$2:flags.$0));\r\n  },\r\n  get_TFlags:function()\r\n  {\r\n   return this.flags;\r\n  },\r\n  get_TExit:function()\r\n  {\r\n   return this.exit;\r\n  },\r\n  get_TEnter:function()\r\n  {\r\n   return this.enter;\r\n  },\r\n  TChange:function(x,y)\r\n  {\r\n   return this.change(x,y);\r\n  }\r\n },Obj,Trans);\r\n Trans.New=Runtime.Ctor(function(ch,enter,exit)\r\n {\r\n  Trans.New$3.call(this,ch,Unchecked.Equals(enter,null)?An.Const:enter,Unchecked.Equals(exit,null)?An.Const:exit,1|(Unchecked.Equals(enter,null)?0:2)|(Unchecked.Equals(exit,null)?0:4));\r\n },Trans);\r\n Trans.New$1=Runtime.Ctor(function(ch)\r\n {\r\n  Trans.New$3.call(this,ch,An.Const,An.Const,1);\r\n },Trans);\r\n Trans.New$2=Runtime.Ctor(function()\r\n {\r\n  Trans.New$3.call(this,function(x,y)\r\n  {\r\n   return An.Const(y);\r\n  },An.Const,An.Const,0);\r\n },Trans);\r\n Trans.New$3=Runtime.Ctor(function(change,enter,exit,flags)\r\n {\r\n  Obj.New.call(this);\r\n  this.change=change;\r\n  this.enter=enter;\r\n  this.exit=exit;\r\n  this.flags=flags;\r\n },Trans);\r\n Trans.Exit=function(f,tr)\r\n {\r\n  return tr.Copy(null,null,{\r\n   $:1,\r\n   $0:f\r\n  },{\r\n   $:1,\r\n   $0:tr.get_TFlags()|4\r\n  });\r\n };\r\n Trans.Enter=function(f,tr)\r\n {\r\n  return tr.Copy(null,{\r\n   $:1,\r\n   $0:f\r\n  },null,{\r\n   $:1,\r\n   $0:tr.get_TFlags()|2\r\n  });\r\n };\r\n Trans.Change=function(ch,tr)\r\n {\r\n  return tr.Copy({\r\n   $:1,\r\n   $0:ch\r\n  },null,null,{\r\n   $:1,\r\n   $0:tr.get_TFlags()|1\r\n  });\r\n };\r\n Trans.Create=function(ch)\r\n {\r\n  return new Trans.New$1(ch);\r\n };\r\n Trans.Trivial=function()\r\n {\r\n  return new Trans.New$2();\r\n };\r\n Trans.CanAnimateExit=function(tr)\r\n {\r\n  var c,flag;\r\n  c=tr.get_TFlags();\r\n  flag=4;\r\n  return(c&flag)===flag;\r\n };\r\n Trans.CanAnimateEnter=function(tr)\r\n {\r\n  var c,flag;\r\n  c=tr.get_TFlags();\r\n  flag=2;\r\n  return(c&flag)===flag;\r\n };\r\n Trans.CanAnimateChange=function(tr)\r\n {\r\n  var c,flag;\r\n  c=tr.get_TFlags();\r\n  flag=1;\r\n  return(c&flag)===flag;\r\n };\r\n Trans.AnimateExit=function(tr,x)\r\n {\r\n  return(tr.get_TExit())(x);\r\n };\r\n Trans.AnimateEnter=function(tr,x)\r\n {\r\n  return(tr.get_TEnter())(x);\r\n };\r\n Trans.AnimateChange=function(tr,x,y)\r\n {\r\n  return tr.TChange(x,y);\r\n };\r\n SC$6.$cctor=function()\r\n {\r\n  SC$6.$cctor=Global.ignore;\r\n  SC$6.CubicInOut=Easing.Custom(function(t)\r\n  {\r\n   var t2;\r\n   t2=t*t;\r\n   return 3*t2-2*(t2*t);\r\n  });\r\n  SC$6.UseAnimations=true;\r\n };\r\n OnAfterRenderControl=UI.OnAfterRenderControl=Runtime.Class({\r\n  get_Body:function()\r\n  {\r\n   var $1,l,i,$2,x,f;\r\n   l=self.document.querySelectorAll(\"[ws-runafterrender]\");\r\n   for(i=0,$2=l.length-1;i<=$2;i++){\r\n    x=l[i];\r\n    f=Global[\"eval\"](x.getAttribute(\"ws-runafterrender\"));\r\n    x.removeAttribute(\"ws-runafterrender\");\r\n    f(x);\r\n   }\r\n   $1={\r\n    ReplaceInDom:function()\r\n    {\r\n     return null;\r\n    }\r\n   };\r\n   Obj.New.call($1);\r\n   return $1;\r\n  }\r\n },Control,OnAfterRenderControl);\r\n AnimatedAttrNode=UI.AnimatedAttrNode=Runtime.Class({\r\n  sync:function(p)\r\n  {\r\n   var x;\r\n   if(this.dirty)\r\n    {\r\n     x=this.logical;\r\n     x==null?void 0:(this.push(p))(x.$0);\r\n     this.visible=this.logical;\r\n     this.dirty=false;\r\n    }\r\n  },\r\n  pushVisible:function(el,v)\r\n  {\r\n   this.visible={\r\n    $:1,\r\n    $0:v\r\n   };\r\n   this.dirty=true;\r\n   (this.push(el))(v);\r\n  },\r\n  NChanged:function()\r\n  {\r\n   return this.updates;\r\n  },\r\n  NSync:Global.ignore,\r\n  NGetExitAnim:function(parent)\r\n  {\r\n   var $this,m;\r\n   $this=this;\r\n   return An.WhenDone(function()\r\n   {\r\n    $this.dirty=true;\r\n    $this.visible=null;\r\n   },(m=this.visible,m!=null&&m.$==1?An.Pack(An.Map(function(v)\r\n   {\r\n    $this.pushVisible(parent,v);\r\n   },Trans.AnimateExit(this.tr,m.$0))):An.get_Empty()));\r\n  },\r\n  NGetEnterAnim:function(parent)\r\n  {\r\n   var $this,$1,$2,$3,$4;\r\n   $this=this;\r\n   return An.WhenDone(function()\r\n   {\r\n    $this.sync(parent);\r\n   },($1=this.visible,($2=this.logical,$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&(this.dirty&&($3=[$2.$0,$1.$0],true)))?An.Pack(An.Map(function(v)\r\n   {\r\n    $this.pushVisible(parent,v);\r\n   },Trans.AnimateChange(this.tr,$3[1],$3[0]))):$1==null&&($2!=null&&$2.$==1)?An.Pack(An.Map(function(v)\r\n   {\r\n    $this.pushVisible(parent,v);\r\n   },Trans.AnimateEnter(this.tr,$2.$0))):An.get_Empty())));\r\n  },\r\n  NGetChangeAnim:function(parent)\r\n  {\r\n   var $this,$1,$2,$3;\r\n   $this=this;\r\n   return An.WhenDone(function()\r\n   {\r\n    $this.sync(parent);\r\n   },($1=this.visible,($2=this.logical,$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&(this.dirty&&($3=[$2.$0,$1.$0],true)))?An.Pack(An.Map(function(v)\r\n   {\r\n    $this.pushVisible(parent,v);\r\n   },Trans.AnimateChange(this.tr,$3[1],$3[0]))):An.get_Empty())));\r\n  }\r\n },Obj,AnimatedAttrNode);\r\n AnimatedAttrNode.New=Runtime.Ctor(function(tr,view,push)\r\n {\r\n  var $this;\r\n  $this=this;\r\n  Obj.New.call(this);\r\n  this.tr=tr;\r\n  this.push=push;\r\n  this.logical=null;\r\n  this.visible=null;\r\n  this.dirty=true;\r\n  this.updates=View.Map(function(x)\r\n  {\r\n   $this.logical={\r\n    $:1,\r\n    $0:x\r\n   };\r\n   $this.dirty=true;\r\n  },view);\r\n },AnimatedAttrNode);\r\n DynamicAttrNode=UI.DynamicAttrNode=Runtime.Class({\r\n  NChanged:function()\r\n  {\r\n   return this.updates;\r\n  },\r\n  NSync:function(parent)\r\n  {\r\n   if(this.dirty)\r\n    {\r\n     (this.push(parent))(this.value);\r\n     this.dirty=false;\r\n    }\r\n  },\r\n  NGetExitAnim:function(parent)\r\n  {\r\n   return An.get_Empty();\r\n  },\r\n  NGetEnterAnim:function(parent)\r\n  {\r\n   return An.get_Empty();\r\n  },\r\n  NGetChangeAnim:function(parent)\r\n  {\r\n   return An.get_Empty();\r\n  }\r\n },Obj,DynamicAttrNode);\r\n DynamicAttrNode.New=Runtime.Ctor(function(view,push)\r\n {\r\n  var $this;\r\n  $this=this;\r\n  Obj.New.call(this);\r\n  this.push=push;\r\n  this.value=void 0;\r\n  this.dirty=false;\r\n  this.updates=View.Map(function(x)\r\n  {\r\n   $this.value=x;\r\n   $this.dirty=true;\r\n  },view);\r\n },DynamicAttrNode);\r\n AttrProxy=UI.AttrProxy=Runtime.Class({},null,AttrProxy);\r\n AttrProxy.Handler=function(event,q)\r\n {\r\n  return AttrProxy.HandlerImpl(event,q);\r\n };\r\n AttrProxy.HandlerImpl=function(event,q)\r\n {\r\n  return Attrs$1.Static(function(el)\r\n  {\r\n   el.addEventListener(event,function(d)\r\n   {\r\n    return(q(el))(d);\r\n   },false);\r\n  });\r\n };\r\n AttrProxy.OnAfterRenderImpl=function(q)\r\n {\r\n  return new AttrProxy({\r\n   $:4,\r\n   $0:q\r\n  });\r\n };\r\n AttrProxy.Concat=function(xs)\r\n {\r\n  var x;\r\n  x=Array.ofSeqNonCopying(xs);\r\n  return Array.TreeReduce(Attrs$1.EmptyAttr(),AttrProxy.Append,x);\r\n };\r\n AttrProxy.Append=function(a,b)\r\n {\r\n  return Attrs$1.AppendTree(a,b);\r\n };\r\n AttrProxy.Create=function(name,value)\r\n {\r\n  return Attrs$1.Static(function(el)\r\n  {\r\n   DomUtility.SetAttr(el,name,value);\r\n  });\r\n };\r\n Dyn.New=function(DynElem,DynFlags,DynNodes,OnAfterRender)\r\n {\r\n  var $1;\r\n  $1={\r\n   DynElem:DynElem,\r\n   DynFlags:DynFlags,\r\n   DynNodes:DynNodes\r\n  };\r\n  Runtime.SetOptional($1,\"OnAfterRender\",OnAfterRender);\r\n  return $1;\r\n };\r\n Attrs$1.Static=function(attr$1)\r\n {\r\n  return new AttrProxy({\r\n   $:3,\r\n   $0:attr$1\r\n  });\r\n };\r\n Attrs$1.Dynamic=function(view,set)\r\n {\r\n  return new AttrProxy({\r\n   $:1,\r\n   $0:new DynamicAttrNode.New(view,set)\r\n  });\r\n };\r\n Attrs$1.Animated=function(tr,view,set)\r\n {\r\n  var node,flags,n;\r\n  node=new AnimatedAttrNode.New(tr,view,set);\r\n  flags=4;\r\n  Trans.CanAnimateEnter(tr)?flags=flags|1:void 0;\r\n  Trans.CanAnimateExit(tr)?flags=flags|2:void 0;\r\n  n=new AttrProxy({\r\n   $:1,\r\n   $0:node\r\n  });\r\n  Attrs$1.SetFlags(n,flags);\r\n  return n;\r\n };\r\n Attrs$1.EmptyAttr=function()\r\n {\r\n  SC$7.$cctor();\r\n  return SC$7.EmptyAttr;\r\n };\r\n Attrs$1.AppendTree=function(a,b)\r\n {\r\n  var x;\r\n  return a===null?b:b===null?a:(x=new AttrProxy({\r\n   $:2,\r\n   $0:a,\r\n   $1:b\r\n  }),(Attrs$1.SetFlags(x,Attrs$1.Flags(a)|Attrs$1.Flags(b)),x));\r\n };\r\n Attrs$1.GetChangeAnim=function(dyn)\r\n {\r\n  return Attrs$1.GetAnim(dyn,function($1,$2)\r\n  {\r\n   return $1.NGetChangeAnim($2);\r\n  });\r\n };\r\n Attrs$1.GetExitAnim=function(dyn)\r\n {\r\n  return Attrs$1.GetAnim(dyn,function($1,$2)\r\n  {\r\n   return $1.NGetExitAnim($2);\r\n  });\r\n };\r\n Attrs$1.GetEnterAnim=function(dyn)\r\n {\r\n  return Attrs$1.GetAnim(dyn,function($1,$2)\r\n  {\r\n   return $1.NGetEnterAnim($2);\r\n  });\r\n };\r\n Attrs$1.GetAnim=function(dyn,f)\r\n {\r\n  return An.Concat(Arrays.map(function(n)\r\n  {\r\n   return f(n,dyn.DynElem);\r\n  },dyn.DynNodes));\r\n };\r\n Attrs$1.Updates=function(dyn)\r\n {\r\n  return Array.MapTreeReduce(function(x)\r\n  {\r\n   return x.NChanged();\r\n  },View.Const(),View.Map2Unit,dyn.DynNodes);\r\n };\r\n Attrs$1.Empty=function(e)\r\n {\r\n  return Dyn.New(e,0,[],null);\r\n };\r\n Attrs$1.Insert=function(elem,tree)\r\n {\r\n  var nodes,oar,arr;\r\n  function loop(node)\r\n  {\r\n   if(!(node===null))\r\n    if(node!=null&&node.$==1)\r\n     nodes.push(node.$0);\r\n    else\r\n     if(node!=null&&node.$==2)\r\n      {\r\n       loop(node.$0);\r\n       loop(node.$1);\r\n      }\r\n     else\r\n      if(node!=null&&node.$==3)\r\n       node.$0(elem);\r\n      else\r\n       if(node!=null&&node.$==4)\r\n        oar.push(node.$0);\r\n  }\r\n  nodes=[];\r\n  oar=[];\r\n  loop(tree);\r\n  arr=nodes.slice(0);\r\n  return Dyn.New(elem,Attrs$1.Flags(tree),arr,oar.length===0?null:{\r\n   $:1,\r\n   $0:function(el)\r\n   {\r\n    Seq.iter(function(f)\r\n    {\r\n     f(el);\r\n    },oar);\r\n   }\r\n  });\r\n };\r\n Attrs$1.Sync=function(elem,dyn)\r\n {\r\n  Arrays.iter(function(d)\r\n  {\r\n   d.NSync(elem);\r\n  },dyn.DynNodes);\r\n };\r\n Attrs$1.SetFlags=function(a,f)\r\n {\r\n  a.flags=f;\r\n };\r\n Attrs$1.Flags=function(a)\r\n {\r\n  return a!==null&&a.hasOwnProperty(\"flags\")?a.flags:0;\r\n };\r\n Attrs$1.HasExitAnim=function(attr$1)\r\n {\r\n  var flag;\r\n  flag=2;\r\n  return(attr$1.DynFlags&flag)===flag;\r\n };\r\n Attrs$1.HasEnterAnim=function(attr$1)\r\n {\r\n  var flag;\r\n  flag=1;\r\n  return(attr$1.DynFlags&flag)===flag;\r\n };\r\n Attrs$1.HasChangeAnim=function(attr$1)\r\n {\r\n  var flag;\r\n  flag=4;\r\n  return(attr$1.DynFlags&flag)===flag;\r\n };\r\n CheckedInput=UI.CheckedInput=Runtime.Class({\r\n  get_Input:function()\r\n  {\r\n   return this.$==1?this.$0:this.$==2?this.$0:this.$1;\r\n  }\r\n },null,CheckedInput);\r\n CheckedInput.Make=function(x)\r\n {\r\n  return new CheckedInput({\r\n   $:0,\r\n   $0:x,\r\n   $1:Global.String(x)\r\n  });\r\n };\r\n AttrModule.ValidateForm=function()\r\n {\r\n  return AttrModule.OnAfterRender(function(e)\r\n  {\r\n   if(self.H5F)\r\n    self.H5F.setup(e);\r\n  });\r\n };\r\n AttrModule.Checked=function(_var)\r\n {\r\n  function onSet(el,ev)\r\n  {\r\n   return!Unchecked.Equals(_var.Get(),el.checked)?_var.Set(el.checked):null;\r\n  }\r\n  return AttrProxy.Concat([AttrModule.DynamicProp(\"checked\",_var.get_View()),AttrModule.Handler(\"change\",function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return onSet($1,$2);\r\n   };\r\n  })]);\r\n };\r\n AttrModule.FloatValue=function(_var)\r\n {\r\n  return AttrModule.CustomVar(_var,function($1,$2)\r\n  {\r\n   var i;\r\n   i=$2.get_Input();\r\n   return $1.value!==i?void($1.value=i):null;\r\n  },function(el)\r\n  {\r\n   var s,i;\r\n   s=el.value;\r\n   return{\r\n    $:1,\r\n    $0:String.isBlank(s)?(el.checkValidity?el.checkValidity():true)?new CheckedInput({\r\n     $:2,\r\n     $0:s\r\n    }):new CheckedInput({\r\n     $:1,\r\n     $0:s\r\n    }):(i=+s,Global.isNaN(i)?new CheckedInput({\r\n     $:1,\r\n     $0:s\r\n    }):new CheckedInput({\r\n     $:0,\r\n     $0:i,\r\n     $1:s\r\n    }))\r\n   };\r\n  });\r\n };\r\n AttrModule.FloatValueUnchecked=function(_var)\r\n {\r\n  return AttrModule.CustomValue(_var,Global.String,function(s)\r\n  {\r\n   var pd;\r\n   return String.isBlank(s)?{\r\n    $:1,\r\n    $0:0\r\n   }:(pd=+s,Global.isNaN(pd)?null:{\r\n    $:1,\r\n    $0:pd\r\n   });\r\n  });\r\n };\r\n AttrModule.IntValue=function(_var)\r\n {\r\n  return AttrModule.CustomVar(_var,function($1,$2)\r\n  {\r\n   var i;\r\n   i=$2.get_Input();\r\n   return $1.value!==i?void($1.value=i):null;\r\n  },function(el)\r\n  {\r\n   var s,m,o;\r\n   s=el.value;\r\n   return{\r\n    $:1,\r\n    $0:String.isBlank(s)?(el.checkValidity?el.checkValidity():true)?new CheckedInput({\r\n     $:2,\r\n     $0:s\r\n    }):new CheckedInput({\r\n     $:1,\r\n     $0:s\r\n    }):(m=(o=0,[Numeric.TryParseInt32(s,{\r\n     get:function()\r\n     {\r\n      return o;\r\n     },\r\n     set:function(v)\r\n     {\r\n      o=v;\r\n     }\r\n    }),o]),m[0]?new CheckedInput({\r\n     $:0,\r\n     $0:m[1],\r\n     $1:s\r\n    }):new CheckedInput({\r\n     $:1,\r\n     $0:s\r\n    }))\r\n   };\r\n  });\r\n };\r\n AttrModule.IntValueUnchecked=function(_var)\r\n {\r\n  return AttrModule.CustomValue(_var,Global.String,function(s)\r\n  {\r\n   var pd;\r\n   return String.isBlank(s)?{\r\n    $:1,\r\n    $0:0\r\n   }:(pd=+s,pd!==pd>>0?null:{\r\n    $:1,\r\n    $0:pd\r\n   });\r\n  });\r\n };\r\n AttrModule.Value=function(_var)\r\n {\r\n  function g(a)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:a\r\n   };\r\n  }\r\n  return AttrModule.CustomValue(_var,Global.id,function(x)\r\n  {\r\n   return g(Global.id(x));\r\n  });\r\n };\r\n AttrModule.ContentEditableHtml=function(_var)\r\n {\r\n  var x;\r\n  x=AttrModule.CustomVar(_var,function($1,$2)\r\n  {\r\n   $1.innerHTML=$2;\r\n  },function(e)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:e.innerHTML\r\n   };\r\n  });\r\n  return AttrProxy.Append(AttrProxy.Create(\"contenteditable\",\"true\"),x);\r\n };\r\n AttrModule.ContentEditableText=function(_var)\r\n {\r\n  var x;\r\n  x=AttrModule.CustomVar(_var,function($1,$2)\r\n  {\r\n   $1.textContent=$2;\r\n  },function(e)\r\n  {\r\n   return{\r\n    $:1,\r\n    $0:e.textContent\r\n   };\r\n  });\r\n  return AttrProxy.Append(AttrProxy.Create(\"contenteditable\",\"true\"),x);\r\n };\r\n AttrModule.CustomValue=function(_var,toString,fromString)\r\n {\r\n  return AttrModule.CustomVar(_var,function($1,$2)\r\n  {\r\n   $1.value=toString($2);\r\n  },function(e)\r\n  {\r\n   return fromString(e.value);\r\n  });\r\n };\r\n AttrModule.CustomVar=function(_var,set,get)\r\n {\r\n  function onChange(el,e)\r\n  {\r\n   return _var.UpdateMaybe(function(v)\r\n   {\r\n    var m,$1;\r\n    m=get(el);\r\n    return m!=null&&m.$==1&&(!Unchecked.Equals(m.$0,v)&&($1=[m,m.$0],true))?$1[0]:null;\r\n   });\r\n  }\r\n  function set$1(e,v)\r\n  {\r\n   var m,$1;\r\n   m=get(e);\r\n   return m!=null&&m.$==1&&(Unchecked.Equals(m.$0,v)&&($1=m.$0,true))?null:set(e,v);\r\n  }\r\n  return AttrProxy.Concat([AttrModule.Handler(\"change\",function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return onChange($1,$2);\r\n   };\r\n  }),AttrModule.Handler(\"input\",function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return onChange($1,$2);\r\n   };\r\n  }),AttrModule.Handler(\"keypress\",function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return onChange($1,$2);\r\n   };\r\n  }),AttrModule.DynamicCustom(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return set$1($1,$2);\r\n   };\r\n  },_var.get_View())]);\r\n };\r\n AttrModule.DynamicProp=function(name,view)\r\n {\r\n  return Attrs$1.Dynamic(view,function(el)\r\n  {\r\n   return function(v)\r\n   {\r\n    el[name]=v;\r\n   };\r\n  });\r\n };\r\n AttrModule.DynamicPred=function(name,predView,valView)\r\n {\r\n  function viewFn(el,t)\r\n  {\r\n   return t[0]?DomUtility.SetAttr(el,name,t[1]):DomUtility.RemoveAttr(el,name);\r\n  }\r\n  return Attrs$1.Dynamic(View.Map2(function(pred,value)\r\n  {\r\n   return[pred,value];\r\n  },predView,valView),function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return viewFn($1,$2);\r\n   };\r\n  });\r\n };\r\n AttrModule.DynamicClass=function(name,view,ok)\r\n {\r\n  return AttrModule.DynamicClassPred(name,View.Map(ok,view));\r\n };\r\n AttrModule.Class=function(name)\r\n {\r\n  return AttrModule.ClassPred(name,true);\r\n };\r\n AttrModule.ClassPred=function(name,isSet)\r\n {\r\n  return Attrs$1.Static(function(el)\r\n  {\r\n   if(isSet)\r\n    DomUtility.AddClass(el,name);\r\n   else\r\n    DomUtility.RemoveClass(el,name);\r\n  });\r\n };\r\n AttrModule.DynamicClassPred=function(name,view)\r\n {\r\n  return Attrs$1.Dynamic(view,function(el)\r\n  {\r\n   return function(v)\r\n   {\r\n    return v?DomUtility.AddClass(el,name):DomUtility.RemoveClass(el,name);\r\n   };\r\n  });\r\n };\r\n AttrModule.OnAfterRenderView=function(v,callback)\r\n {\r\n  var id;\r\n  id=Fresh.Id();\r\n  return AttrProxy.Append(AttrModule.OnAfterRender(function(el)\r\n  {\r\n   callback(el,el[id]);\r\n  }),AttrModule.DynamicCustom(function(el)\r\n  {\r\n   return function(x)\r\n   {\r\n    el[id]=x;\r\n   };\r\n  },v));\r\n };\r\n AttrModule.OnAfterRender=function(callback)\r\n {\r\n  return new AttrProxy({\r\n   $:4,\r\n   $0:callback\r\n  });\r\n };\r\n AttrModule.HandlerView=function(name,view,callback)\r\n {\r\n  return Attrs$1.Static(function(el)\r\n  {\r\n   var callback$1;\r\n   callback$1=callback(el);\r\n   el.addEventListener(name,function(ev)\r\n   {\r\n    return View.Get(callback$1(ev),view);\r\n   },false);\r\n  });\r\n };\r\n AttrModule.Handler=function(name,callback)\r\n {\r\n  return Attrs$1.Static(function(el)\r\n  {\r\n   el.addEventListener(name,function(d)\r\n   {\r\n    return(callback(el))(d);\r\n   },false);\r\n  });\r\n };\r\n AttrModule.DynamicStyle=function(name,view)\r\n {\r\n  return Attrs$1.Dynamic(view,function(el)\r\n  {\r\n   return function(v)\r\n   {\r\n    return DomUtility.SetStyle(el,name,v);\r\n   };\r\n  });\r\n };\r\n AttrModule.DynamicCustom=function(set,view)\r\n {\r\n  return Attrs$1.Dynamic(view,set);\r\n };\r\n AttrModule.Dynamic=function(name,view)\r\n {\r\n  return Attrs$1.Dynamic(view,function(el)\r\n  {\r\n   return function(v)\r\n   {\r\n    return DomUtility.SetAttr(el,name,v);\r\n   };\r\n  });\r\n };\r\n AttrModule.AnimatedStyle=function(name,tr,view,attr$1)\r\n {\r\n  return Attrs$1.Animated(tr,view,function(el)\r\n  {\r\n   return function(v)\r\n   {\r\n    return DomUtility.SetStyle(el,name,attr$1(v));\r\n   };\r\n  });\r\n };\r\n AttrModule.Animated=function(name,tr,view,attr$1)\r\n {\r\n  return Attrs$1.Animated(tr,view,function(el)\r\n  {\r\n   return function(v)\r\n   {\r\n    return DomUtility.SetAttr(el,name,attr$1(v));\r\n   };\r\n  });\r\n };\r\n AttrModule.Style=function(name,value)\r\n {\r\n  return Attrs$1.Static(function(el)\r\n  {\r\n   DomUtility.SetStyle(el,name,value);\r\n  });\r\n };\r\n SC$7.$cctor=function()\r\n {\r\n  SC$7.$cctor=Global.ignore;\r\n  SC$7.EmptyAttr=null;\r\n };\r\n Settings.BatchUpdatesEnabled=function()\r\n {\r\n  SC$8.$cctor();\r\n  return SC$8.BatchUpdatesEnabled;\r\n };\r\n Settings.set_BatchUpdatesEnabled=function($1)\r\n {\r\n  SC$8.$cctor();\r\n  SC$8.BatchUpdatesEnabled=$1;\r\n };\r\n DocElemNode=UI.DocElemNode=Runtime.Class({\r\n  GetHashCode:function()\r\n  {\r\n   return this.ElKey;\r\n  },\r\n  Equals:function(o)\r\n  {\r\n   return this.ElKey===o.ElKey;\r\n  }\r\n },null,DocElemNode);\r\n DocElemNode.New=function(Attr,Children,Delimiters,El,ElKey,Render)\r\n {\r\n  var $1;\r\n  return new DocElemNode(($1={\r\n   Attr:Attr,\r\n   Children:Children,\r\n   El:El,\r\n   ElKey:ElKey\r\n  },(Runtime.SetOptional($1,\"Delimiters\",Delimiters),Runtime.SetOptional($1,\"Render\",Render),$1)));\r\n };\r\n DomNodes.FoldBack=function(f,a,z)\r\n {\r\n  return Arrays.foldBack(f,a.$0,z);\r\n };\r\n DomNodes.Iter=function(f,a)\r\n {\r\n  Arrays.iter(f,a.$0);\r\n };\r\n DomNodes.Except=function(a,a$1)\r\n {\r\n  var excluded;\r\n  excluded=a.$0;\r\n  return{\r\n   $:0,\r\n   $0:Arrays.filter(function(n)\r\n   {\r\n    return Arrays.forall(function(k)\r\n    {\r\n     return!(n===k);\r\n    },excluded);\r\n   },a$1.$0)\r\n  };\r\n };\r\n DomNodes.DocChildren=function(node)\r\n {\r\n  var q;\r\n  function loop(doc)\r\n  {\r\n   if(doc!=null&&doc.$==2)\r\n    loop(doc.$0.Current);\r\n   else\r\n    if(doc!=null&&doc.$==1)\r\n     q.push(doc.$0.El);\r\n    else\r\n     if(doc==null)\r\n      ;\r\n     else\r\n      if(doc!=null&&doc.$==5)\r\n       q.push(doc.$0);\r\n      else\r\n       if(doc!=null&&doc.$==4)\r\n        q.push(doc.$0.Text);\r\n       else\r\n        if(doc!=null&&doc.$==6)\r\n         Arrays.iter(function(a)\r\n         {\r\n          if(a==null||a.constructor===Global.Object)\r\n           loop(a);\r\n          else\r\n           q.push(a);\r\n         },doc.$0.Els);\r\n        else\r\n         {\r\n          loop(doc.$0);\r\n          loop(doc.$1);\r\n         }\r\n  }\r\n  q=[];\r\n  loop(node.Children);\r\n  return{\r\n   $:0,\r\n   $0:Array.ofSeqNonCopying(q)\r\n  };\r\n };\r\n DomNodes.Children=function(elem,delims)\r\n {\r\n  var n,o,a;\r\n  if(delims!=null&&delims.$==1)\r\n   {\r\n    a=[];\r\n    n=delims.$0[0].nextSibling;\r\n    while(n!==delims.$0[1])\r\n     {\r\n      a.push(n);\r\n      n=n.nextSibling;\r\n     }\r\n    return{\r\n     $:0,\r\n     $0:a\r\n    };\r\n   }\r\n  else\r\n   return{\r\n    $:0,\r\n    $0:Arrays.init(elem.childNodes.length,(o=elem.childNodes,function(a$1)\r\n    {\r\n     return o[a$1];\r\n    }))\r\n   };\r\n };\r\n NodeSet.ToArray=function(a)\r\n {\r\n  return HashSet.ToArray(a.$0);\r\n };\r\n NodeSet.get_Empty=function()\r\n {\r\n  return{\r\n   $:0,\r\n   $0:new HashSet$1.New$3()\r\n  };\r\n };\r\n NodeSet.IsEmpty=function(a)\r\n {\r\n  return a.$0.get_Count()===0;\r\n };\r\n NodeSet.Intersect=function(a,a$1)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:HashSet.Intersect(a.$0,a$1.$0)\r\n  };\r\n };\r\n NodeSet.Except=function(a,a$1)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:HashSet.Except(a.$0,a$1.$0)\r\n  };\r\n };\r\n NodeSet.FindAll=function(doc)\r\n {\r\n  var q;\r\n  function loop(node)\r\n  {\r\n   if(node!=null&&node.$==0)\r\n    {\r\n     loop(node.$0);\r\n     loop(node.$1);\r\n    }\r\n   else\r\n    if(node!=null&&node.$==1)\r\n     loopEN(node.$0);\r\n    else\r\n     if(node!=null&&node.$==2)\r\n      loop(node.$0.Current);\r\n     else\r\n      if(node!=null&&node.$==6)\r\n       Arrays.iter(loopEN,node.$0.Holes);\r\n  }\r\n  function loopEN(el)\r\n  {\r\n   q.push(el);\r\n   loop(el.Children);\r\n  }\r\n  q=[];\r\n  loop(doc);\r\n  return{\r\n   $:0,\r\n   $0:new HashSet$1.New$2(q)\r\n  };\r\n };\r\n NodeSet.Filter=function(f,a)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:HashSet.Filter(f,a.$0)\r\n  };\r\n };\r\n RunState.New=function(PreviousNodes,Top)\r\n {\r\n  return{\r\n   PreviousNodes:PreviousNodes,\r\n   Top:Top\r\n  };\r\n };\r\n Docs$1.UpdateTextNode=function(n,t)\r\n {\r\n  n.Value=t;\r\n  n.Dirty=true;\r\n };\r\n Docs$1.CreateTextNode=function()\r\n {\r\n  return{\r\n   Text:DomUtility.CreateText(\"\"),\r\n   Dirty:false,\r\n   Value:\"\"\r\n  };\r\n };\r\n Docs$1.UpdateEmbedNode=function(node,upd)\r\n {\r\n  node.Current=upd;\r\n  node.Dirty=true;\r\n };\r\n Docs$1.CreateEmbedNode=function()\r\n {\r\n  return{\r\n   Current:null,\r\n   Dirty:false\r\n  };\r\n };\r\n Docs$1.PerformSyncUpdate=function(childrenOnly,st,doc)\r\n {\r\n  var cur;\r\n  cur=NodeSet.FindAll(doc);\r\n  Docs$1.SyncElemNode(childrenOnly,st.Top);\r\n  st.PreviousNodes=cur;\r\n };\r\n Docs$1.PerformAnimatedUpdate=function(childrenOnly,st,doc)\r\n {\r\n  var b;\r\n  return An.get_UseAnimations()?(b=null,Concurrency.Delay(function()\r\n  {\r\n   var cur,change,enter;\r\n   cur=NodeSet.FindAll(doc);\r\n   change=Docs$1.ComputeChangeAnim(st,cur);\r\n   enter=Docs$1.ComputeEnterAnim(st,cur);\r\n   return Concurrency.Bind(An.Play(An.Append(change,Docs$1.ComputeExitAnim(st,cur))),function()\r\n   {\r\n    return Concurrency.Bind(Docs$1.SyncElemNodesNextFrame(childrenOnly,st),function()\r\n    {\r\n     return Concurrency.Bind(An.Play(enter),function()\r\n     {\r\n      st.PreviousNodes=cur;\r\n      return Concurrency.Return(null);\r\n     });\r\n    });\r\n   });\r\n  })):Docs$1.SyncElemNodesNextFrame(childrenOnly,st);\r\n };\r\n Docs$1.SyncElemNodesNextFrame=function(childrenOnly,st)\r\n {\r\n  function a(ok)\r\n  {\r\n   Global.requestAnimationFrame(function()\r\n   {\r\n    Docs$1.SyncElemNode(childrenOnly,st.Top);\r\n    ok();\r\n   });\r\n  }\r\n  return Settings.BatchUpdatesEnabled()?Concurrency.FromContinuations(function($1,$2,$3)\r\n  {\r\n   return a.apply(null,[$1,$2,$3]);\r\n  }):(Docs$1.SyncElemNode(childrenOnly,st.Top),Concurrency.Return(null));\r\n };\r\n Docs$1.ComputeEnterAnim=function(st,cur)\r\n {\r\n  return An.Concat(Arrays.map(function(n)\r\n  {\r\n   return Attrs$1.GetEnterAnim(n.Attr);\r\n  },NodeSet.ToArray(NodeSet.Except(st.PreviousNodes,NodeSet.Filter(function(n)\r\n  {\r\n   return Attrs$1.HasEnterAnim(n.Attr);\r\n  },cur)))));\r\n };\r\n Docs$1.ComputeChangeAnim=function(st,cur)\r\n {\r\n  var relevant;\r\n  function a(n)\r\n  {\r\n   return Attrs$1.HasChangeAnim(n.Attr);\r\n  }\r\n  relevant=function(a$1)\r\n  {\r\n   return NodeSet.Filter(a,a$1);\r\n  };\r\n  return An.Concat(Arrays.map(function(n)\r\n  {\r\n   return Attrs$1.GetChangeAnim(n.Attr);\r\n  },NodeSet.ToArray(NodeSet.Intersect(relevant(st.PreviousNodes),relevant(cur)))));\r\n };\r\n Docs$1.ComputeExitAnim=function(st,cur)\r\n {\r\n  return An.Concat(Arrays.map(function(n)\r\n  {\r\n   return Attrs$1.GetExitAnim(n.Attr);\r\n  },NodeSet.ToArray(NodeSet.Except(cur,NodeSet.Filter(function(n)\r\n  {\r\n   return Attrs$1.HasExitAnim(n.Attr);\r\n  },st.PreviousNodes)))));\r\n };\r\n Docs$1.CreateDelimitedRunState=function(ldelim,rdelim,doc)\r\n {\r\n  return RunState.New(NodeSet.get_Empty(),Docs$1.CreateDelimitedElemNode(ldelim,rdelim,Attrs$1.EmptyAttr(),doc));\r\n };\r\n Docs$1.CreateRunState=function(parent,doc)\r\n {\r\n  return RunState.New(NodeSet.get_Empty(),Docs$1.CreateElemNode(parent,Attrs$1.EmptyAttr(),doc));\r\n };\r\n Docs$1.CreateDelimitedElemNode=function(ldelim,rdelim,attr$1,children)\r\n {\r\n  var el,attr$2;\r\n  el=ldelim.parentNode;\r\n  Docs$1.LinkPrevElement(rdelim,children);\r\n  attr$2=Attrs$1.Insert(el,attr$1);\r\n  return DocElemNode.New(attr$2,children,{\r\n   $:1,\r\n   $0:[ldelim,rdelim]\r\n  },el,Fresh.Int(),Runtime.GetOptional(attr$2.OnAfterRender));\r\n };\r\n Docs$1.CreateElemNode=function(el,attr$1,children)\r\n {\r\n  var attr$2;\r\n  Docs$1.LinkElement(el,children);\r\n  attr$2=Attrs$1.Insert(el,attr$1);\r\n  return DocElemNode.New(attr$2,children,null,el,Fresh.Int(),Runtime.GetOptional(attr$2.OnAfterRender));\r\n };\r\n Docs$1.SyncElemNode=function(childrenOnly,el)\r\n {\r\n  !childrenOnly?Docs$1.SyncElement(el):void 0;\r\n  Docs$1.Sync(el.Children);\r\n  Docs$1.AfterRender(el);\r\n };\r\n Docs$1.Sync=function(doc)\r\n {\r\n  var d,t;\r\n  if(doc!=null&&doc.$==1)\r\n   Docs$1.SyncElemNode(false,doc.$0);\r\n  else\r\n   if(doc!=null&&doc.$==2)\r\n    Docs$1.Sync(doc.$0.Current);\r\n   else\r\n    if(doc==null)\r\n     ;\r\n    else\r\n     if(doc!=null&&doc.$==5)\r\n      ;\r\n     else\r\n      if(doc!=null&&doc.$==4)\r\n       {\r\n        d=doc.$0;\r\n        d.Dirty?(d.Text.nodeValue=d.Value,d.Dirty=false):void 0;\r\n       }\r\n      else\r\n       if(doc!=null&&doc.$==6)\r\n        {\r\n         t=doc.$0;\r\n         Arrays.iter(function(e)\r\n         {\r\n          Docs$1.SyncElemNode(false,e);\r\n         },t.Holes);\r\n         Arrays.iter(function(t$1)\r\n         {\r\n          Attrs$1.Sync(t$1[0],t$1[1]);\r\n         },t.Attrs);\r\n         Docs$1.AfterRender(t);\r\n        }\r\n       else\r\n        {\r\n         Docs$1.Sync(doc.$0);\r\n         Docs$1.Sync(doc.$1);\r\n        }\r\n };\r\n Docs$1.AfterRender=function(el)\r\n {\r\n  var m;\r\n  m=Runtime.GetOptional(el.Render);\r\n  m!=null&&m.$==1?(m.$0(el.El),Runtime.SetOptional(el,\"Render\",null)):void 0;\r\n };\r\n Docs$1.InsertBeforeDelim=function(afterDelim,doc)\r\n {\r\n  var p,before;\r\n  p=afterDelim.parentNode;\r\n  before=self.document.createTextNode(\"\");\r\n  p.insertBefore(before,afterDelim);\r\n  Docs$1.LinkPrevElement(afterDelim,doc);\r\n  return before;\r\n };\r\n Docs$1.LinkPrevElement=function(el,children)\r\n {\r\n  Docs$1.InsertDoc(el.parentNode,children,el);\r\n };\r\n Docs$1.LinkElement=function(el,children)\r\n {\r\n  Docs$1.InsertDoc(el,children,null);\r\n };\r\n Docs$1.SyncElement=function(el)\r\n {\r\n  function hasDirtyChildren(el$1)\r\n  {\r\n   function dirty(doc)\r\n   {\r\n    var d,t;\r\n    return doc!=null&&doc.$==0?dirty(doc.$0)||dirty(doc.$1):doc!=null&&doc.$==2?(d=doc.$0,d.Dirty||dirty(d.Current)):doc!=null&&doc.$==6&&(t=doc.$0,t.Dirty||Arrays.exists(hasDirtyChildren,t.Holes));\r\n   }\r\n   return dirty(el$1.Children);\r\n  }\r\n  Attrs$1.Sync(el.El,el.Attr);\r\n  hasDirtyChildren(el)?Docs$1.DoSyncElement(el):void 0;\r\n };\r\n Docs$1.DoSyncElement=function(el)\r\n {\r\n  var parent,p,m;\r\n  function ins(doc,pos)\r\n  {\r\n   var d,t;\r\n   return doc!=null&&doc.$==1?doc.$0.El:doc!=null&&doc.$==2?(d=doc.$0,d.Dirty?(d.Dirty=false,Docs$1.InsertDoc(parent,d.Current,pos)):ins(d.Current,pos)):doc==null?pos:doc!=null&&doc.$==4?doc.$0.Text:doc!=null&&doc.$==5?doc.$0:doc!=null&&doc.$==6?(t=doc.$0,(t.Dirty?t.Dirty=false:void 0,Arrays.foldBack(function($1,$2)\r\n   {\r\n    return $1==null||$1.constructor===Global.Object?ins($1,$2):$1;\r\n   },t.Els,pos))):ins(doc.$0,ins(doc.$1,pos));\r\n  }\r\n  parent=el.El;\r\n  DomNodes.Iter((p=el.El,function(e)\r\n  {\r\n   DomUtility.RemoveNode(p,e);\r\n  }),DomNodes.Except(DomNodes.DocChildren(el),DomNodes.Children(el.El,Runtime.GetOptional(el.Delimiters))));\r\n  ins(el.Children,(m=Runtime.GetOptional(el.Delimiters),m!=null&&m.$==1?m.$0[1]:null));\r\n };\r\n Docs$1.InsertDoc=function(parent,doc,pos)\r\n {\r\n  var d;\r\n  return doc!=null&&doc.$==1?Docs$1.InsertNode(parent,doc.$0.El,pos):doc!=null&&doc.$==2?(d=doc.$0,(d.Dirty=false,Docs$1.InsertDoc(parent,d.Current,pos))):doc==null?pos:doc!=null&&doc.$==4?Docs$1.InsertNode(parent,doc.$0.Text,pos):doc!=null&&doc.$==5?Docs$1.InsertNode(parent,doc.$0,pos):doc!=null&&doc.$==6?Arrays.foldBack(function($1,$2)\r\n  {\r\n   return $1==null||$1.constructor===Global.Object?Docs$1.InsertDoc(parent,$1,$2):Docs$1.InsertNode(parent,$1,$2);\r\n  },doc.$0.Els,pos):Docs$1.InsertDoc(parent,doc.$0,Docs$1.InsertDoc(parent,doc.$1,pos));\r\n };\r\n Docs$1.InsertNode=function(parent,node,pos)\r\n {\r\n  DomUtility.InsertAt(parent,pos,node);\r\n  return node;\r\n };\r\n Doc=UI.Doc=Runtime.Class({\r\n  ReplaceInDom:function(elt)\r\n  {\r\n   var rdelim;\r\n   rdelim=self.document.createTextNode(\"\");\r\n   elt.parentNode.replaceChild(rdelim,elt);\r\n   Doc.RunBefore(rdelim,this);\r\n  }\r\n },Obj,Doc);\r\n Doc.SvgElementMixed=function(tagname,nodes)\r\n {\r\n  var p;\r\n  p=Doc.MixedNodes(nodes);\r\n  return Doc.SvgElement(tagname,p[0],p[1]);\r\n };\r\n Doc.SvgElement=function(name,attr$1,children)\r\n {\r\n  var a,a$1;\r\n  a=AttrProxy.Concat(attr$1);\r\n  a$1=Doc.Concat(children);\r\n  return Elt.New(DomUtility.CreateSvgElement(name),a,a$1);\r\n };\r\n Doc.ElementMixed=function(tagname,nodes)\r\n {\r\n  var p;\r\n  p=Doc.MixedNodes(nodes);\r\n  return Doc.Element(tagname,p[0],p[1]);\r\n };\r\n Doc.ConcatMixed=function(elts)\r\n {\r\n  return Doc.Concat(Seq.map(Doc.ToMixedDoc,elts));\r\n };\r\n Doc.MixedNodes=function(nodes)\r\n {\r\n  var attrs,children,e,n;\r\n  attrs=[];\r\n  children=[];\r\n  e=Enumerator.Get(nodes);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    {\r\n     n=e.Current();\r\n     n instanceof AttrProxy?attrs.push(n):children.push(Doc.ToMixedDoc(n));\r\n    }\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n  return[attrs,children];\r\n };\r\n Doc.ToMixedDoc=function(o)\r\n {\r\n  return o instanceof Doc?o:typeof o==\"string\"?Doc.TextNode(o):o instanceof Global.Element?Doc.StaticProxy(o):typeof o==\"function\"?Doc.EmbedView(View.Map(Doc.ToMixedDoc,o)):o instanceof Var?Doc.EmbedView(View.Map(Doc.ToMixedDoc,o.get_View())):Unchecked.Equals(o,null)?Doc.get_Empty():Doc.TextNode(Global.String(o));\r\n };\r\n Doc.Element=function(name,attr$1,children)\r\n {\r\n  var a,a$1;\r\n  a=AttrProxy.Concat(attr$1);\r\n  a$1=Doc.Concat(children);\r\n  return Elt.New(DomUtility.CreateElement(name),a,a$1);\r\n };\r\n Doc.Radio=function(attrs,value,_var)\r\n {\r\n  var el,valAttr;\r\n  el=DomUtility.CreateElement(\"input\");\r\n  el.addEventListener(\"click\",function()\r\n  {\r\n   return _var.Set(value);\r\n  },false);\r\n  valAttr=AttrModule.DynamicProp(\"checked\",View.Map(function(x)\r\n  {\r\n   return Unchecked.Equals(x,value);\r\n  },_var.get_View()));\r\n  return Elt.New(el,AttrProxy.Concat(List$1.append(List$1.ofArray([AttrProxy.Create(\"type\",\"radio\"),AttrProxy.Create(\"name\",_var.get_Id()),valAttr]),List$1.ofSeq(attrs))),Doc.get_Empty());\r\n };\r\n Doc.LinkView=function(caption,attrs,view,action)\r\n {\r\n  var attrs$1;\r\n  attrs$1=AttrProxy.Concat(Seq.append([AttrModule.HandlerView(\"click\",view,function()\r\n  {\r\n   return function()\r\n   {\r\n    return action;\r\n   };\r\n  }),AttrProxy.Create(\"href\",\"#\")],attrs));\r\n  return Elt.New(DomUtility.CreateElement(\"a\"),attrs$1,Doc.TextNode(caption));\r\n };\r\n Doc.Link=function(caption,attrs,action)\r\n {\r\n  var attrs$1,x;\r\n  attrs$1=(x=AttrProxy.Concat(attrs),AttrProxy.Append(AttrProxy.Create(\"href\",\"#\"),x));\r\n  return Elt.New(Doc.Clickable(\"a\",action),attrs$1,Doc.TextNode(caption));\r\n };\r\n Doc.ButtonView=function(caption,attrs,view,action)\r\n {\r\n  var attrs$1;\r\n  attrs$1=AttrProxy.Concat(Seq.append([AttrModule.HandlerView(\"click\",view,function()\r\n  {\r\n   return function()\r\n   {\r\n    return action;\r\n   };\r\n  })],attrs));\r\n  return Elt.New(DomUtility.CreateElement(\"button\"),attrs$1,Doc.TextNode(caption));\r\n };\r\n Doc.Button=function(caption,attrs,action)\r\n {\r\n  var attrs$1;\r\n  attrs$1=AttrProxy.Concat(attrs);\r\n  return Elt.New(Doc.Clickable(\"button\",action),attrs$1,Doc.TextNode(caption));\r\n };\r\n Doc.Clickable=function(elem,action)\r\n {\r\n  var el;\r\n  el=DomUtility.CreateElement(elem);\r\n  el.addEventListener(\"click\",function(ev)\r\n  {\r\n   ev.preventDefault();\r\n   return action();\r\n  },false);\r\n  return el;\r\n };\r\n Doc.CheckBoxGroup=function(attrs,item,chk)\r\n {\r\n  function p(y)\r\n  {\r\n   return Unchecked.Equals(item,y);\r\n  }\r\n  return Doc.CheckBox(attrs,Var$1.Lens(chk,function(l)\r\n  {\r\n   return List$1.exists(p,l);\r\n  },function(l,b)\r\n  {\r\n   return b?List$1.exists(function(y)\r\n   {\r\n    return Unchecked.Equals(item,y);\r\n   },l)?l:new List$1.T({\r\n    $:1,\r\n    $0:item,\r\n    $1:l\r\n   }):List$1.filter(function(y)\r\n   {\r\n    return!Unchecked.Equals(item,y);\r\n   },l);\r\n  }));\r\n };\r\n Doc.CheckBox=function(attrs,chk)\r\n {\r\n  return Doc.InputInternal(\"input\",function()\r\n  {\r\n   return Seq.append(attrs,[AttrProxy.Create(\"type\",\"checkbox\"),AttrModule.Checked(chk)]);\r\n  });\r\n };\r\n Doc.SelectDynOptional=function(attrs,noneText,show,vOptions,current)\r\n {\r\n  return Doc.SelectDyn(attrs,function(a)\r\n  {\r\n   return a!=null&&a.$==1?show(a.$0):noneText;\r\n  },View.Map(function(options)\r\n  {\r\n   return new List$1.T({\r\n    $:1,\r\n    $0:null,\r\n    $1:List$1.map(function(a)\r\n    {\r\n     return{\r\n      $:1,\r\n      $0:a\r\n     };\r\n    },options)\r\n   });\r\n  },vOptions),current);\r\n };\r\n Doc.SelectOptional=function(attrs,noneText,show,options,current)\r\n {\r\n  return Doc.Select(attrs,function(a)\r\n  {\r\n   return a!=null&&a.$==1?show(a.$0):noneText;\r\n  },new List$1.T({\r\n   $:1,\r\n   $0:null,\r\n   $1:List$1.map(function(a)\r\n   {\r\n    return{\r\n     $:1,\r\n     $0:a\r\n    };\r\n   },options)\r\n  }),current);\r\n };\r\n Doc.Select=function(attrs,show,options,current)\r\n {\r\n  return Doc.SelectImpl(attrs,show,function(rOptions)\r\n  {\r\n   rOptions[0]=options;\r\n   return Doc.Concat(List$1.mapi(function(i,o)\r\n   {\r\n    return Doc.Element(\"option\",List$1.ofArray([AttrProxy.Create(\"value\",Global.String(i))]),List$1.ofArray([Doc.TextNode(show(o))]));\r\n   },options));\r\n  },current);\r\n };\r\n Doc.SelectDyn=function(attrs,show,vOptions,current)\r\n {\r\n  return Doc.SelectImpl(attrs,show,function(options)\r\n  {\r\n   function a(i,o)\r\n   {\r\n    return Doc.Element(\"option\",List$1.ofArray([AttrProxy.Create(\"value\",Global.String(i))]),List$1.ofArray([Doc.TextNode(show(o))]));\r\n   }\r\n   return Doc.Convert(function($1)\r\n   {\r\n    return a($1[0],$1[1]);\r\n   },View.Map(function(l)\r\n   {\r\n    options[0]=l;\r\n    return Seq.mapi(function(i,x)\r\n    {\r\n     return[i,x];\r\n    },l);\r\n   },vOptions));\r\n  },current);\r\n };\r\n Doc.SelectImpl=function(attrs,show,optionElements,current)\r\n {\r\n  var options,el,selectedItemAttr,x;\r\n  function getIndex(el$1)\r\n  {\r\n   return el$1.selectedIndex;\r\n  }\r\n  function setIndex(el$1,i)\r\n  {\r\n   el$1.selectedIndex=i;\r\n  }\r\n  function getSelectedItem(el$1)\r\n  {\r\n   var i;\r\n   i=getIndex(el$1);\r\n   return options[0].get_Item(i);\r\n  }\r\n  function itemIndex(x$1)\r\n  {\r\n   return Seq.findIndex(function(y)\r\n   {\r\n    return Unchecked.Equals(x$1,y);\r\n   },options[0]);\r\n  }\r\n  function setSelectedItem(el$1,item)\r\n  {\r\n   return setIndex(el$1,itemIndex(item));\r\n  }\r\n  options=[List$1.T.Empty];\r\n  el=DomUtility.CreateElement(\"select\");\r\n  selectedItemAttr=AttrModule.DynamicCustom(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return setSelectedItem($1,$2);\r\n   };\r\n  },current.get_View());\r\n  el.addEventListener(\"change\",function()\r\n  {\r\n   current.UpdateMaybe(function(x$1)\r\n   {\r\n    var y;\r\n    y=getSelectedItem(el);\r\n    return Unchecked.Equals(x$1,y)?null:{\r\n     $:1,\r\n     $0:y\r\n    };\r\n   });\r\n  },false);\r\n  return Elt.New(el,(x=AttrProxy.Append(selectedItemAttr,AttrProxy.Concat(attrs)),AttrProxy.Append(AttrModule.OnAfterRender(function(el$1)\r\n  {\r\n   setSelectedItem(el$1,current.Get());\r\n  }),x)),optionElements(options));\r\n };\r\n Doc.InputArea=function(attr$1,_var)\r\n {\r\n  return Doc.InputInternal(\"textarea\",function()\r\n  {\r\n   return Seq.append(attr$1,[AttrModule.Value(_var)]);\r\n  });\r\n };\r\n Doc.FloatInput=function(attr$1,_var)\r\n {\r\n  return Doc.InputInternal(\"input\",function()\r\n  {\r\n   return Seq.append(attr$1,[AttrModule.FloatValue(_var),AttrProxy.Create(\"type\",\"number\")]);\r\n  });\r\n };\r\n Doc.FloatInputUnchecked=function(attr$1,_var)\r\n {\r\n  return Doc.InputInternal(\"input\",function()\r\n  {\r\n   return Seq.append(attr$1,[_var.Get()===0?AttrProxy.Create(\"value\",\"0\"):Attrs$1.EmptyAttr(),AttrModule.FloatValueUnchecked(_var),AttrProxy.Create(\"type\",\"number\")]);\r\n  });\r\n };\r\n Doc.IntInput=function(attr$1,_var)\r\n {\r\n  return Doc.InputInternal(\"input\",function()\r\n  {\r\n   return Seq.append(attr$1,[AttrModule.IntValue(_var),AttrProxy.Create(\"type\",\"number\")]);\r\n  });\r\n };\r\n Doc.IntInputUnchecked=function(attr$1,_var)\r\n {\r\n  return Doc.InputInternal(\"input\",function()\r\n  {\r\n   return Seq.append(attr$1,[_var.Get()===0?AttrProxy.Create(\"value\",\"0\"):Attrs$1.EmptyAttr(),AttrModule.IntValueUnchecked(_var),AttrProxy.Create(\"type\",\"number\")]);\r\n  });\r\n };\r\n Doc.PasswordBox=function(attr$1,_var)\r\n {\r\n  return Doc.InputInternal(\"input\",function()\r\n  {\r\n   return Seq.append(attr$1,[AttrModule.Value(_var),AttrProxy.Create(\"type\",\"password\")]);\r\n  });\r\n };\r\n Doc.Input=function(attr$1,_var)\r\n {\r\n  return Doc.InputInternal(\"input\",function()\r\n  {\r\n   return Seq.append(attr$1,[AttrModule.Value(_var)]);\r\n  });\r\n };\r\n Doc.InputInternal=function(elemTy,attr$1)\r\n {\r\n  var el;\r\n  el=DomUtility.CreateElement(elemTy);\r\n  return Elt.New(el,AttrProxy.Concat(attr$1(el)),Doc.get_Empty());\r\n };\r\n Doc.ConvertSeqVarBy=function(key,render,_var)\r\n {\r\n  return Doc.Flatten(Var$1.MapLens(key,render,_var));\r\n };\r\n Doc.ConvertSeqBy=function(key,render,view)\r\n {\r\n  return Doc.Flatten(View.MapSeqCachedViewBy(key,function($1,$2)\r\n  {\r\n   return(render($1))($2);\r\n  },view));\r\n };\r\n Doc.ConvertSeq=function(render,view)\r\n {\r\n  return Doc.Flatten(View.MapSeqCachedView(render,view));\r\n };\r\n Doc.ConvertBy=function(key,render,view)\r\n {\r\n  return Doc.Flatten(View.MapSeqCachedBy(key,render,view));\r\n };\r\n Doc.Convert=function(render,view)\r\n {\r\n  return Doc.Flatten(View.MapSeqCached(render,view));\r\n };\r\n Doc.Flatten=function(view)\r\n {\r\n  return Doc.EmbedView(View.Map(Doc.Concat,view));\r\n };\r\n Doc.TextView=function(txt)\r\n {\r\n  var node;\r\n  node=Docs$1.CreateTextNode();\r\n  return Doc.Mk({\r\n   $:4,\r\n   $0:node\r\n  },View.Map(function(t)\r\n  {\r\n   Docs$1.UpdateTextNode(node,t);\r\n  },txt));\r\n };\r\n Doc.RunReplaceById=function(id,tr)\r\n {\r\n  var m;\r\n  m=DomUtility.Doc().getElementById(id);\r\n  Unchecked.Equals(m,null)?Operators.FailWith(\"invalid id: \"+id):tr.ReplaceInDom(m);\r\n };\r\n Doc.RunById=function(id,tr)\r\n {\r\n  var m;\r\n  m=DomUtility.Doc().getElementById(id);\r\n  Unchecked.Equals(m,null)?Operators.FailWith(\"invalid id: \"+id):Doc.Run(m,tr);\r\n };\r\n Doc.Run=function(parent,doc)\r\n {\r\n  Docs$1.LinkElement(parent,doc.docNode);\r\n  Doc.RunInPlace(false,parent,doc);\r\n };\r\n Doc.RunInPlace=function(childrenOnly,parent,doc)\r\n {\r\n  var st;\r\n  st=Docs$1.CreateRunState(parent,doc.docNode);\r\n  View.Sink(An.get_UseAnimations()||Settings.BatchUpdatesEnabled()?Mailbox.StartProcessor(Docs$1.PerformAnimatedUpdate(childrenOnly,st,doc.docNode)):function()\r\n  {\r\n   Docs$1.PerformSyncUpdate(childrenOnly,st,doc.docNode);\r\n  },doc.updates);\r\n };\r\n Doc.RunPrependById=function(id,doc)\r\n {\r\n  var m;\r\n  m=DomUtility.Doc().getElementById(id);\r\n  Unchecked.Equals(m,null)?Operators.FailWith(\"invalid id: \"+id):Doc.RunPrepend(m,doc);\r\n };\r\n Doc.RunPrepend=function(parent,doc)\r\n {\r\n  var rdelim;\r\n  rdelim=self.document.createTextNode(\"\");\r\n  parent.insertBefore(rdelim,parent.firstChild);\r\n  Doc.RunBefore(rdelim,doc);\r\n };\r\n Doc.RunAppendById=function(id,doc)\r\n {\r\n  var m;\r\n  m=DomUtility.Doc().getElementById(id);\r\n  Unchecked.Equals(m,null)?Operators.FailWith(\"invalid id: \"+id):Doc.RunAppend(m,doc);\r\n };\r\n Doc.RunAppend=function(parent,doc)\r\n {\r\n  var rdelim;\r\n  rdelim=self.document.createTextNode(\"\");\r\n  parent.appendChild(rdelim);\r\n  Doc.RunBefore(rdelim,doc);\r\n };\r\n Doc.RunAfterById=function(id,doc)\r\n {\r\n  var m;\r\n  m=DomUtility.Doc().getElementById(id);\r\n  Unchecked.Equals(m,null)?Operators.FailWith(\"invalid id: \"+id):Doc.RunAfter(m,doc);\r\n };\r\n Doc.RunAfter=function(ldelim,doc)\r\n {\r\n  var rdelim;\r\n  rdelim=self.document.createTextNode(\"\");\r\n  ldelim.parentNode.insertBefore(rdelim,ldelim.nextSibling);\r\n  Doc.RunBetween(ldelim,rdelim,doc);\r\n };\r\n Doc.RunBeforeById=function(id,doc)\r\n {\r\n  var m;\r\n  m=DomUtility.Doc().getElementById(id);\r\n  Unchecked.Equals(m,null)?Operators.FailWith(\"invalid id: \"+id):Doc.RunBefore(m,doc);\r\n };\r\n Doc.RunBefore=function(rdelim,doc)\r\n {\r\n  var ldelim;\r\n  ldelim=self.document.createTextNode(\"\");\r\n  rdelim.parentNode.insertBefore(ldelim,rdelim);\r\n  Doc.RunBetween(ldelim,rdelim,doc);\r\n };\r\n Doc.RunBetween=function(ldelim,rdelim,doc)\r\n {\r\n  var st;\r\n  Docs$1.LinkPrevElement(rdelim,doc.docNode);\r\n  st=Docs$1.CreateDelimitedRunState(ldelim,rdelim,doc.docNode);\r\n  View.Sink(An.get_UseAnimations()||Settings.BatchUpdatesEnabled()?Mailbox.StartProcessor(Docs$1.PerformAnimatedUpdate(false,st,doc.docNode)):function()\r\n  {\r\n   Docs$1.PerformSyncUpdate(false,st,doc.docNode);\r\n  },doc.updates);\r\n };\r\n Doc.Async=function(a)\r\n {\r\n  return Doc.EmbedView(View.MapAsync(Global.id,View.Const(a)));\r\n };\r\n Doc.BindView=function(f,view)\r\n {\r\n  return Doc.EmbedView(View.Map(f,view));\r\n };\r\n Doc.EmbedView=function(view)\r\n {\r\n  var node;\r\n  node=Docs$1.CreateEmbedNode();\r\n  return Doc.Mk({\r\n   $:2,\r\n   $0:node\r\n  },View.Map(Global.ignore,View.Bind(function(doc)\r\n  {\r\n   Docs$1.UpdateEmbedNode(node,doc.docNode);\r\n   return doc.updates;\r\n  },view)));\r\n };\r\n Doc.Verbatim=function(html)\r\n {\r\n  var m;\r\n  return Doc.Mk(Array.MapTreeReduce(function(n)\r\n  {\r\n   return Unchecked.Equals(n.nodeType,Node.TEXT_NODE)?{\r\n    $:5,\r\n    $0:n\r\n   }:{\r\n    $:1,\r\n    $0:Docs$1.CreateElemNode(n,Attrs$1.EmptyAttr(),null)\r\n   };\r\n  },null,function(x,y)\r\n  {\r\n   return{\r\n    $:0,\r\n    $0:x,\r\n    $1:y\r\n   };\r\n  },(m=$.parseHTML(html),Unchecked.Equals(m,null)?[]:m)),View.Const());\r\n };\r\n Doc.StaticProxy=function(el)\r\n {\r\n  return Elt.New(el,Attrs$1.EmptyAttr(),Doc.get_Empty());\r\n };\r\n Doc.TextNode=function(v)\r\n {\r\n  return Doc.Mk({\r\n   $:5,\r\n   $0:DomUtility.CreateText(v)\r\n  },View.Const());\r\n };\r\n Doc.get_Empty=function()\r\n {\r\n  return Doc.Mk(null,View.Const());\r\n };\r\n Doc.Concat=function(xs)\r\n {\r\n  var x;\r\n  x=Array.ofSeqNonCopying(xs);\r\n  return Array.TreeReduce(Doc.get_Empty(),Doc.Append,x);\r\n };\r\n Doc.Append=function(a,b)\r\n {\r\n  return Doc.Mk({\r\n   $:0,\r\n   $0:a.docNode,\r\n   $1:b.docNode\r\n  },View.Map2Unit(a.updates,b.updates));\r\n };\r\n Doc.Mk=function(node,updates)\r\n {\r\n  return new Doc.New(node,updates);\r\n };\r\n Doc.New=Runtime.Ctor(function(docNode,updates)\r\n {\r\n  Obj.New.call(this);\r\n  this.docNode=docNode;\r\n  this.updates=updates;\r\n },Doc);\r\n Elt=UI.Elt=Runtime.Class({\r\n  SetStyle:function(style,value)\r\n  {\r\n   this.elt.style[style]=value;\r\n  },\r\n  HasClass:function(cls)\r\n  {\r\n   return(new Global.RegExp(\"(\\\\s|^)\"+cls+\"(\\\\s|$)\")).test(this.elt.className);\r\n  },\r\n  GetProperty:function(name)\r\n  {\r\n   return this.elt[name];\r\n  },\r\n  SetProperty:function(name,value)\r\n  {\r\n   this.elt[name]=value;\r\n  },\r\n  RemoveAttribute:function(name)\r\n  {\r\n   this.elt.removeAttribute(name);\r\n  },\r\n  HasAttribute:function(name)\r\n  {\r\n   return this.elt.hasAttribute(name);\r\n  },\r\n  GetAttribute:function(name)\r\n  {\r\n   return this.elt.getAttribute(name);\r\n  },\r\n  SetAttribute:function(name,value)\r\n  {\r\n   this.elt.setAttribute(name,value);\r\n  },\r\n  SetText:function(v)\r\n  {\r\n   var m;\r\n   m=this.docNode$1;\r\n   m!=null&&m.$==1?m.$0.Children=null:m!=null&&m.$==6?(m.$0.Els=[],this.ClearHoles()):Operators.FailWith(\"Invalid docNode in Elt\");\r\n   this.rvUpdates.set_Value(View.Const());\r\n   this.elt.textContent=v;\r\n  },\r\n  GetText:function()\r\n  {\r\n   return this.elt.textContent;\r\n  },\r\n  SetValue:function(v)\r\n  {\r\n   this.elt.value=v;\r\n  },\r\n  GetValue:function()\r\n  {\r\n   return this.elt.value;\r\n  },\r\n  Id:function()\r\n  {\r\n   return this.elt.id;\r\n  },\r\n  Html:function()\r\n  {\r\n   return this.elt.outerHTML;\r\n  },\r\n  Clear:function()\r\n  {\r\n   var m;\r\n   m=this.docNode$1;\r\n   m!=null&&m.$==1?m.$0.Children=null:m!=null&&m.$==6?(m.$0.Els=[],this.ClearHoles()):Operators.FailWith(\"Invalid docNode in Elt\");\r\n   this.rvUpdates.set_Value(View.Const());\r\n   while(this.elt.hasChildNodes())\r\n    this.elt.removeChild(this.elt.firstChild);\r\n  },\r\n  Prepend:function(doc)\r\n  {\r\n   var m,e,m$1,after,before;\r\n   m=this.docNode$1;\r\n   m!=null&&m.$==1?(e=m.$0,e.Children={\r\n    $:0,\r\n    $0:doc.docNode,\r\n    $1:e.Children\r\n   },Docs$1.InsertDoc(this.elt,doc.docNode,(m$1=this.elt.firstChild,Unchecked.Equals(m$1,null)?null:m$1))):m!=null&&m.$==6?(after=this.elt.insertBefore(self.document.createTextNode(\"\"),this.elt.firstChild),before=Docs$1.InsertBeforeDelim(after,doc.docNode),this.AddHole(DocElemNode.New(Attrs$1.Empty(this.elt),doc.docNode,{\r\n    $:1,\r\n    $0:[before,after]\r\n   },this.elt,Fresh.Int(),null))):Operators.FailWith(\"Invalid docNode in Elt\");\r\n   this.rvUpdates.set_Value(View.Map2Unit(this.rvUpdates.c,doc.updates));\r\n  },\r\n  Append:function(doc)\r\n  {\r\n   var m,e,after,before;\r\n   m=this.docNode$1;\r\n   m!=null&&m.$==1?(e=m.$0,e.Children={\r\n    $:0,\r\n    $0:e.Children,\r\n    $1:doc.docNode\r\n   },Docs$1.InsertDoc(this.elt,doc.docNode,null)):m!=null&&m.$==6?(after=this.elt.appendChild(self.document.createTextNode(\"\")),before=Docs$1.InsertBeforeDelim(after,doc.docNode),this.AddHole(DocElemNode.New(Attrs$1.Empty(this.elt),doc.docNode,{\r\n    $:1,\r\n    $0:[before,after]\r\n   },this.elt,Fresh.Int(),null))):Operators.FailWith(\"Invalid docNode in Elt\");\r\n   this.rvUpdates.set_Value(View.Map2Unit(this.rvUpdates.c,doc.updates));\r\n  },\r\n  ToUpdater:function()\r\n  {\r\n   var m,$1,$2;\r\n   return new EltUpdater.New((m=this.docNode$1,m!=null&&m.$==1?Runtime.DeleteEmptyFields({\r\n    Els:[this.elt],\r\n    Dirty:true,\r\n    Holes:[],\r\n    Attrs:[[this.elt,m.$0.Attr]],\r\n    Render:($1=null,$1?$1.$0:void 0),\r\n    El:($2={\r\n     $:1,\r\n     $0:this.elt\r\n    },$2?$2.$0:void 0)\r\n   },[\"Render\",\"El\"]):m!=null&&m.$==6?m.$0:Operators.FailWith(\"Invalid docNode in Elt\")),this.updates$1,this.elt,this.rvUpdates,Var$1.Create$1([]));\r\n  },\r\n  OnAfterRenderView:function(view,cb)\r\n  {\r\n   var $this,id;\r\n   $this=this;\r\n   id=Fresh.Id();\r\n   this.Append(Doc.BindView(function(x)\r\n   {\r\n    $this.elt[id]=x;\r\n    return Doc.get_Empty();\r\n   },view));\r\n   return this[\"OnAfterRender'\"](function(e)\r\n   {\r\n    cb(e,e[id]);\r\n   });\r\n  },\r\n  OnAfterRender:function(cb)\r\n  {\r\n   return this[\"OnAfterRender'\"](cb);\r\n  },\r\n  \"OnAfterRender'\":function(cb)\r\n  {\r\n   var m,e,m$1,f,e$1,m$2,f$1;\r\n   m=this.docNode$1;\r\n   m!=null&&m.$==1?(e=m.$0,Runtime.SetOptional(e,\"Render\",(m$1=Runtime.GetOptional(e.Render),m$1!=null&&m$1.$==1?(f=m$1.$0,{\r\n    $:1,\r\n    $0:function(el)\r\n    {\r\n     f(el);\r\n     cb(el);\r\n    }\r\n   }):{\r\n    $:1,\r\n    $0:cb\r\n   }))):m!=null&&m.$==6?(e$1=m.$0,Runtime.SetOptional(e$1,\"Render\",(m$2=Runtime.GetOptional(e$1.Render),m$2!=null&&m$2.$==1?(f$1=m$2.$0,{\r\n    $:1,\r\n    $0:function(el)\r\n    {\r\n     f$1(el);\r\n     cb(el);\r\n    }\r\n   }):{\r\n    $:1,\r\n    $0:cb\r\n   }))):Operators.FailWith(\"Invalid docNode in Elt\");\r\n   return this;\r\n  },\r\n  onView:function(ev,view,cb)\r\n  {\r\n   var cb$1;\r\n   cb$1=cb(this.elt);\r\n   this.elt.addEventListener(ev,function(ev$1)\r\n   {\r\n    return View.Get(cb$1(ev$1),view);\r\n   },false);\r\n   return this;\r\n  },\r\n  on:function(ev,cb)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   this.elt.addEventListener(ev,function(ev$1)\r\n   {\r\n    return cb($this.elt,ev$1);\r\n   },false);\r\n   return this;\r\n  },\r\n  ClearHoles:function()\r\n  {\r\n   var m;\r\n   m=this.docNode$1;\r\n   m!=null&&m.$==6?m.$0.Holes=[]:void 0;\r\n  },\r\n  AddHole:function(h)\r\n  {\r\n   var m;\r\n   m=this.docNode$1;\r\n   m!=null&&m.$==6?m.$0.Holes.push(h):void 0;\r\n  }\r\n },Doc,Elt);\r\n Elt.TreeNode=function(tree,updates)\r\n {\r\n  var rvUpdates,x;\r\n  function f(t)\r\n  {\r\n   return t[1];\r\n  }\r\n  rvUpdates=Updates.Create(updates);\r\n  return new Elt.New$1({\r\n   $:6,\r\n   $0:tree\r\n  },View.Map2Unit((x=Arrays.map(function(x$1)\r\n  {\r\n   return Attrs$1.Updates(f(x$1));\r\n  },tree.Attrs),Array.TreeReduce(View.Const(),View.Map2Unit,x)),rvUpdates.v),Arrays.get(tree.Els,0),rvUpdates);\r\n };\r\n Elt.New=function(el,attr$1,children)\r\n {\r\n  var node,rvUpdates;\r\n  node=Docs$1.CreateElemNode(el,attr$1,children.docNode);\r\n  rvUpdates=Updates.Create(children.updates);\r\n  return new Elt.New$1({\r\n   $:1,\r\n   $0:node\r\n  },View.Map2Unit(Attrs$1.Updates(node.Attr),rvUpdates.v),el,rvUpdates);\r\n };\r\n Elt.New$1=Runtime.Ctor(function(docNode,updates,elt,rvUpdates)\r\n {\r\n  Doc.New.call(this,docNode,updates);\r\n  this.docNode$1=docNode;\r\n  this.updates$1=updates;\r\n  this.elt=elt;\r\n  this.rvUpdates=rvUpdates;\r\n },Elt);\r\n EltUpdater=Client.EltUpdater=Runtime.Class({\r\n  ClearHoles:function()\r\n  {\r\n   this.origHoles=[];\r\n   this.treeNode.Holes=[];\r\n   this.holeUpdates.Set([]);\r\n  },\r\n  AddHole:function(h)\r\n  {\r\n   this.origHoles.push(h);\r\n   this.treeNode.Holes=this.treeNode.Holes.concat([h]);\r\n  },\r\n  RemoveAllUpdated:function()\r\n  {\r\n   this.treeNode.Holes=this.origHoles;\r\n   this.holeUpdates.Set([]);\r\n  },\r\n  RemoveUpdated:function(doc)\r\n  {\r\n   var m,k;\r\n   function p($1)\r\n   {\r\n    return $1!==k;\r\n   }\r\n   m=doc.docNode;\r\n   m!=null&&m.$==1?(k=m.$0.ElKey,this.treeNode.Holes=Arrays.filter(function(h)\r\n   {\r\n    return h.ElKey!==k;\r\n   },this.treeNode.Holes),this.holeUpdates.Set(Arrays.filter(function($1)\r\n   {\r\n    return p($1[0]);\r\n   },this.holeUpdates.Get()))):Operators.FailWith(\"DocUpdater.RemoveUpdated expects a single element node\");\r\n  },\r\n  AddUpdated:function(doc)\r\n  {\r\n   var m,e,hu;\r\n   m=doc.docNode;\r\n   m!=null&&m.$==1?(e=m.$0,this.treeNode.Holes=this.treeNode.Holes.concat([e]),hu=this.holeUpdates.Get(),hu.push([e.ElKey,doc.updates]),this.holeUpdates.Set(hu)):Operators.FailWith(\"DocUpdater.AddUpdated expects a single element node\");\r\n  }\r\n },Elt,EltUpdater);\r\n EltUpdater.New=Runtime.Ctor(function(treeNode,updates,elt,rvUpdates,holeUpdates)\r\n {\r\n  var x,f,g,d;\r\n  function m(t)\r\n  {\r\n   return t[1];\r\n  }\r\n  Elt.New$1.call(this,{\r\n   $:6,\r\n   $0:treeNode\r\n  },View.Map2Unit(updates,(x=holeUpdates.get_View(),View.BindInner((f=function(a)\r\n  {\r\n   return Arrays.map(m,a);\r\n  },(g=(d=View.Const(),function(a)\r\n  {\r\n   return Array.TreeReduce(d,View.Map2Unit,a);\r\n  }),function(x$1)\r\n  {\r\n   return g(f(x$1));\r\n  })),x))),elt,rvUpdates);\r\n  this.treeNode=treeNode;\r\n  this.holeUpdates=holeUpdates;\r\n  this.origHoles=this.treeNode.Holes;\r\n },EltUpdater);\r\n SC$8.$cctor=function()\r\n {\r\n  SC$8.$cctor=Global.ignore;\r\n  SC$8.BatchUpdatesEnabled=true;\r\n };\r\n Prepare.failNotLoaded=function(name)\r\n {\r\n  console.warn(\"Instantiating non-loaded template\",name);\r\n };\r\n Prepare.fill=function(fillWith,p,n)\r\n {\r\n  while(true)\r\n   if(fillWith.hasChildNodes())\r\n    n=p.insertBefore(fillWith.lastChild,n);\r\n   else\r\n    return null;\r\n };\r\n Prepare.fillTextHole=function(instance,fillWith,templateName)\r\n {\r\n  var m;\r\n  m=instance.querySelector(\"[ws-replace]\");\r\n  return Unchecked.Equals(m,null)?(console.warn(\"Filling non-existent text hole\",templateName),null):(m.parentNode.replaceChild(new Global.Text(fillWith),m),{\r\n   $:1,\r\n   $0:m.getAttribute(\"ws-replace\")\r\n  });\r\n };\r\n Prepare.removeHolesExcept=function(instance,dontRemove)\r\n {\r\n  function run(attrName)\r\n  {\r\n   DomUtility.IterSelector(instance,\"[\"+attrName+\"]\",function(e)\r\n   {\r\n    if(!dontRemove.Contains(e.getAttribute(attrName)))\r\n     e.removeAttribute(attrName);\r\n   });\r\n  }\r\n  run(\"ws-attr\");\r\n  run(\"ws-onafterrender\");\r\n  run(\"ws-var\");\r\n  DomUtility.IterSelector(instance,\"[ws-hole]\",function(e)\r\n  {\r\n   if(!dontRemove.Contains(e.getAttribute(\"ws-hole\")))\r\n    {\r\n     e.removeAttribute(\"ws-hole\");\r\n     while(e.hasChildNodes())\r\n      e.removeChild(e.lastChild);\r\n    }\r\n  });\r\n  DomUtility.IterSelector(instance,\"[ws-replace]\",function(e)\r\n  {\r\n   if(!dontRemove.Contains(e.getAttribute(\"ws-replace\")))\r\n    e.parentNode.removeChild(e);\r\n  });\r\n  DomUtility.IterSelector(instance,\"[ws-on]\",function(e)\r\n  {\r\n   e.setAttribute(\"ws-on\",Strings.concat(\" \",Arrays.filter(function(x)\r\n   {\r\n    return dontRemove.Contains(Arrays.get(Strings.SplitChars(x,[\":\"],1),1));\r\n   },Strings.SplitChars(e.getAttribute(\"ws-on\"),[\" \"],1))));\r\n  });\r\n  DomUtility.IterSelector(instance,\"[ws-attr-holes]\",function(e)\r\n  {\r\n   var holeAttrs,i,$1,attrName,_this;\r\n   holeAttrs=Strings.SplitChars(e.getAttribute(\"ws-attr-holes\"),[\" \"],1);\r\n   for(i=0,$1=holeAttrs.length-1;i<=$1;i++){\r\n    attrName=Arrays.get(holeAttrs,i);\r\n    e.setAttribute(attrName,(_this=new Global.RegExp(Templates.TextHoleRE(),\"g\"),e.getAttribute(attrName).replace(_this,function($2,$3)\r\n    {\r\n     return dontRemove.Contains($3)?$2:\"\";\r\n    })));\r\n   }\r\n  });\r\n };\r\n Prepare.fillInstanceAttrs=function(instance,fillWith)\r\n {\r\n  var name,m,i,$1,a;\r\n  Prepare.convertAttrs(fillWith);\r\n  name=fillWith.nodeName.toLowerCase();\r\n  m=instance.querySelector(\"[ws-attr=\"+name+\"]\");\r\n  if(Unchecked.Equals(m,null))\r\n   console.warn(\"Filling non-existent attr hole\",name);\r\n  else\r\n   {\r\n    m.removeAttribute(\"ws-attr\");\r\n    for(i=0,$1=fillWith.attributes.length-1;i<=$1;i++){\r\n     a=fillWith.attributes.item(i);\r\n     a.name===\"class\"&&m.hasAttribute(\"class\")?m.setAttribute(\"class\",m.getAttribute(\"class\")+\" \"+a.nodeValue):m.setAttribute(a.name,a.nodeValue);\r\n    }\r\n   }\r\n };\r\n Prepare.mapHoles=function(t,mappings)\r\n {\r\n  function run(attrName)\r\n  {\r\n   DomUtility.IterSelector(t,\"[\"+attrName+\"]\",function(e)\r\n   {\r\n    var m,o;\r\n    m=(o=null,[mappings.TryGetValue(e.getAttribute(attrName).toLowerCase(),{\r\n     get:function()\r\n     {\r\n      return o;\r\n     },\r\n     set:function(v)\r\n     {\r\n      o=v;\r\n     }\r\n    }),o]);\r\n    m[0]?e.setAttribute(attrName,m[1]):void 0;\r\n   });\r\n  }\r\n  run(\"ws-hole\");\r\n  run(\"ws-replace\");\r\n  run(\"ws-attr\");\r\n  run(\"ws-onafterrender\");\r\n  run(\"ws-var\");\r\n  DomUtility.IterSelector(t,\"[ws-on]\",function(e)\r\n  {\r\n   e.setAttribute(\"ws-on\",Strings.concat(\" \",Arrays.map(function(x)\r\n   {\r\n    var a,m,o;\r\n    a=Strings.SplitChars(x,[\":\"],1);\r\n    m=(o=null,[mappings.TryGetValue(Arrays.get(a,1),{\r\n     get:function()\r\n     {\r\n      return o;\r\n     },\r\n     set:function(v)\r\n     {\r\n      o=v;\r\n     }\r\n    }),o]);\r\n    return m[0]?Arrays.get(a,0)+\":\"+m[1]:x;\r\n   },Strings.SplitChars(e.getAttribute(\"ws-on\"),[\" \"],1))));\r\n  });\r\n  DomUtility.IterSelector(t,\"[ws-attr-holes]\",function(e)\r\n  {\r\n   var holeAttrs,i,$1;\r\n   holeAttrs=Strings.SplitChars(e.getAttribute(\"ws-attr-holes\"),[\" \"],1);\r\n   for(i=0,$1=holeAttrs.length-1;i<=$1;i++)(function()\r\n   {\r\n    var attrName;\r\n    function f(s,a)\r\n    {\r\n     var a$1;\r\n     a$1=Operators.KeyValue(a);\r\n     return s.replace(new Global.RegExp(\"\\\\${\"+a$1[0]+\"}\",\"ig\"),\"${\"+a$1[1]+\"}\");\r\n    }\r\n    attrName=Arrays.get(holeAttrs,i);\r\n    return e.setAttribute(attrName,(((Runtime.Curried3(Seq.fold))(f))(e.getAttribute(attrName)))(mappings));\r\n   }());\r\n  });\r\n };\r\n Prepare.convertTextNode=function(n)\r\n {\r\n  var m,li,$1,s,strRE,hole;\r\n  m=null;\r\n  li=0;\r\n  s=n.textContent;\r\n  strRE=new Global.RegExp(Templates.TextHoleRE(),\"g\");\r\n  while(m=strRE.exec(s),m!==null)\r\n   {\r\n    n.parentNode.insertBefore(self.document.createTextNode(Slice.string(s,{\r\n     $:1,\r\n     $0:li\r\n    },{\r\n     $:1,\r\n     $0:strRE.lastIndex-Arrays.get(m,0).length-1\r\n    })),n);\r\n    li=strRE.lastIndex;\r\n    hole=self.document.createElement(\"span\");\r\n    hole.setAttribute(\"ws-replace\",Arrays.get(m,1).toLowerCase());\r\n    n.parentNode.insertBefore(hole,n);\r\n   }\r\n  strRE.lastIndex=0;\r\n  n.textContent=Slice.string(s,{\r\n   $:1,\r\n   $0:li\r\n  },null);\r\n };\r\n Prepare.convertAttrs=function(el)\r\n {\r\n  var attrs,toRemove,events,holedAttrs,i,$1,a,_this;\r\n  function lowercaseAttr(name)\r\n  {\r\n   var m;\r\n   m=el.getAttribute(name);\r\n   m===null?void 0:el.setAttribute(name,m.toLowerCase());\r\n  }\r\n  attrs=el.attributes;\r\n  toRemove=[];\r\n  events=[];\r\n  holedAttrs=[];\r\n  for(i=0,$1=attrs.length-1;i<=$1;i++){\r\n   a=attrs.item(i);\r\n   Strings.StartsWith(a.nodeName,\"ws-on\")&&a.nodeName!==\"ws-onafterrender\"&&a.nodeName!==\"ws-on\"?(toRemove.push(a.nodeName),events.push(Slice.string(a.nodeName,{\r\n    $:1,\r\n    $0:\"ws-on\".length\r\n   },null)+\":\"+a.nodeValue.toLowerCase())):!Strings.StartsWith(a.nodeName,\"ws-\")&&(new Global.RegExp(Templates.TextHoleRE())).test(a.nodeValue)?(a.nodeValue=(_this=new Global.RegExp(Templates.TextHoleRE(),\"g\"),a.nodeValue.replace(_this,function($2,$3)\r\n   {\r\n    return\"${\"+$3.toLowerCase()+\"}\";\r\n   })),holedAttrs.push(a.nodeName)):void 0;\r\n  }\r\n  !(events.length==0)?el.setAttribute(\"ws-on\",Strings.concat(\" \",events)):void 0;\r\n  !(holedAttrs.length==0)?el.setAttribute(\"ws-attr-holes\",Strings.concat(\" \",holedAttrs)):void 0;\r\n  lowercaseAttr(\"ws-hole\");\r\n  lowercaseAttr(\"ws-replace\");\r\n  lowercaseAttr(\"ws-attr\");\r\n  lowercaseAttr(\"ws-onafterrender\");\r\n  lowercaseAttr(\"ws-var\");\r\n  Arrays.iter(function(a$1)\r\n  {\r\n   el.removeAttribute(a$1);\r\n  },toRemove);\r\n };\r\n Templates.GetOrLoadTemplate=function(baseName,name,els,fillWith)\r\n {\r\n  Templates.LoadLocalTemplates(\"\");\r\n  Templates.PrepareTemplate(baseName,name,els);\r\n  return Templates.NamedTemplate(baseName,name,fillWith);\r\n };\r\n Templates.NamedTemplate=function(baseName,name,fillWith)\r\n {\r\n  var m,o;\r\n  m=(o=null,[Templates.LoadedTemplateFile(baseName).TryGetValue(name==null?\"\":name.$0,{\r\n   get:function()\r\n   {\r\n    return o;\r\n   },\r\n   set:function(v)\r\n   {\r\n    o=v;\r\n   }\r\n  }),o]);\r\n  return m[0]?Templates.ChildrenTemplate(m[1].cloneNode(true),fillWith):(console.warn(\"Local template doesn't exist\",name),Doc.get_Empty());\r\n };\r\n Templates.Template=function(els,fillWith)\r\n {\r\n  return Templates.ChildrenTemplate(Templates.FakeRoot(els),fillWith);\r\n };\r\n Templates.RunFullDocTemplate=function(fillWith)\r\n {\r\n  var x,a;\r\n  Templates.LoadLocalTemplates(\"\");\r\n  Templates.PrepareTemplateStrict(\"\",null,DomUtility.ChildrenArray(self.document.body),{\r\n   $:1,\r\n   $0:self.document.body\r\n  },null);\r\n  x=Templates.ChildrenTemplate(self.document.body,fillWith);\r\n  a=self.document.body;\r\n  (function(a$1)\r\n  {\r\n   Doc.RunInPlace(true,a,a$1);\r\n  }(x));\r\n  return x;\r\n };\r\n Templates.LoadLocalTemplates=function(baseName)\r\n {\r\n  !Templates.LocalTemplatesLoaded()?(Templates.set_LocalTemplatesLoaded(true),Templates.LoadNestedTemplates(self.document.body,\"\")):void 0;\r\n  Templates.LoadedTemplates().set_Item(baseName,Templates.LoadedTemplateFile(\"\"));\r\n };\r\n Templates.LoadNestedTemplates=function(root,baseName)\r\n {\r\n  var loadedTpls,rawTpls,wsTemplates,i,$1,node,name,wsChildrenTemplates,i$1,$2,node$1,name$1,els,instantiated;\r\n  function prepareTemplate(name$2)\r\n  {\r\n   var m,o;\r\n   if(!loadedTpls.ContainsKey(name$2))\r\n    {\r\n     m=(o=null,[rawTpls.TryGetValue(name$2,{\r\n      get:function()\r\n      {\r\n       return o;\r\n      },\r\n      set:function(v)\r\n      {\r\n       o=v;\r\n      }\r\n     }),o]);\r\n     m[0]?(instantiated.Add(name$2),rawTpls.Remove(name$2),Templates.PrepareTemplateStrict(baseName,{\r\n      $:1,\r\n      $0:name$2\r\n     },m[1][0],{\r\n      $:1,\r\n      $0:m[1][1]\r\n     },{\r\n      $:1,\r\n      $0:prepareTemplate\r\n     })):console.warn(instantiated.Contains(name$2)?\"Encountered loop when instantiating \"+name$2:\"Local template does not exist: \"+name$2);\r\n    }\r\n  }\r\n  loadedTpls=Templates.LoadedTemplateFile(baseName);\r\n  rawTpls=new Dictionary.New$5();\r\n  wsTemplates=root.querySelectorAll(\"[ws-template]\");\r\n  for(i=0,$1=wsTemplates.length-1;i<=$1;i++){\r\n   node=wsTemplates[i];\r\n   name=node.getAttribute(\"ws-template\").toLowerCase();\r\n   node.removeAttribute(\"ws-template\");\r\n   rawTpls.set_Item(name,[[node],Templates.FakeRootSingle(node)]);\r\n  }\r\n  wsChildrenTemplates=root.querySelectorAll(\"[ws-children-template]\");\r\n  for(i$1=0,$2=wsChildrenTemplates.length-1;i$1<=$2;i$1++){\r\n   node$1=wsChildrenTemplates[i$1];\r\n   name$1=node$1.getAttribute(\"ws-children-template\").toLowerCase();\r\n   node$1.removeAttribute(\"ws-children-template\");\r\n   rawTpls.set_Item(name$1,(els=DomUtility.ChildrenArray(node$1),[els,Templates.FakeRoot(els)]));\r\n  }\r\n  instantiated=new HashSet$1.New$3();\r\n  while(rawTpls.count>0)\r\n   prepareTemplate(Seq.head(rawTpls.get_Keys()));\r\n };\r\n Templates.PrepareTemplate=function(baseName,name,els)\r\n {\r\n  var els$1,i,$1,el,m;\r\n  if(!Templates.LoadedTemplateFile(baseName).ContainsKey(name==null?\"\":name.$0))\r\n   {\r\n    els$1=els();\r\n    for(i=0,$1=els$1.length-1;i<=$1;i++){\r\n     el=Arrays.get(els$1,i);\r\n     m=el.parentNode;\r\n     Unchecked.Equals(m,null)?void 0:m.removeChild(el);\r\n    }\r\n    Templates.PrepareTemplateStrict(baseName,name,els$1,null,null);\r\n   }\r\n };\r\n Templates.PrepareSingleTemplate=function(baseName,name,el)\r\n {\r\n  var root,e,r;\r\n  root=Templates.FakeRootSingle(el);\r\n  e=[el];\r\n  r={\r\n   $:1,\r\n   $0:root\r\n  };\r\n  return function(p)\r\n  {\r\n   Templates.PrepareTemplateStrict(baseName,name,e,r,p);\r\n  };\r\n };\r\n Templates.PrepareTemplateStrict=function(baseName,name,els,root,prepareLocalTemplate)\r\n {\r\n  var fakeroot,name$1;\r\n  function recF(recI,$1)\r\n  {\r\n   var next,m,$2,x,f,name$2,p,instName,instBaseName,d,t,instance,usedHoles,mappings,attrs,i,$3,name$3,m$1,i$1,$4,n,singleTextFill,i$2,$5,n$1;\r\n   function g(v)\r\n   {\r\n   }\r\n   while(true)\r\n    switch(recI)\r\n    {\r\n     case 0:\r\n      if($1!==null)\r\n       {\r\n        next=$1.nextSibling;\r\n        if(Unchecked.Equals($1.nodeType,Node.TEXT_NODE))\r\n         Prepare.convertTextNode($1);\r\n        else\r\n         if(Unchecked.Equals($1.nodeType,Node.ELEMENT_NODE))\r\n          convertElement($1);\r\n        $1=next;\r\n       }\r\n      else\r\n       return null;\r\n      break;\r\n     case 1:\r\n      name$2=Slice.string($1.nodeName,{\r\n       $:1,\r\n       $0:3\r\n      },null).toLowerCase();\r\n      p=(m=name$2.indexOf(\".\"),m===-1?[baseName,name$2]:[Slice.string(name$2,null,{\r\n       $:1,\r\n       $0:m-1\r\n      }),Slice.string(name$2,{\r\n       $:1,\r\n       $0:m+1\r\n      },null)]);\r\n      instName=p[1];\r\n      instBaseName=p[0];\r\n      if(instBaseName!==\"\"&&!Templates.LoadedTemplates().ContainsKey(instBaseName))\r\n       return Prepare.failNotLoaded(instName);\r\n      else\r\n       {\r\n        if(instBaseName===\"\"&&prepareLocalTemplate!=null)\r\n         prepareLocalTemplate.$0(instName);\r\n        d=Templates.LoadedTemplates().get_Item(instBaseName);\r\n        if(!d.ContainsKey(instName))\r\n         return Prepare.failNotLoaded(instName);\r\n        else\r\n         {\r\n          t=d.get_Item(instName);\r\n          instance=t.cloneNode(true);\r\n          usedHoles=new HashSet$1.New$3();\r\n          mappings=new Dictionary.New$5();\r\n          attrs=$1.attributes;\r\n          for(i=0,$3=attrs.length-1;i<=$3;i++){\r\n           name$3=attrs.item(i).name.toLowerCase();\r\n           mappings.set_Item(name$3,(m$1=attrs.item(i).nodeValue,m$1===\"\"?name$3:m$1.toLowerCase()));\r\n           !usedHoles.Add(name$3)?console.warn(\"Hole mapped twice\",name$3):void 0;\r\n          }\r\n          for(i$1=0,$4=$1.childNodes.length-1;i$1<=$4;i$1++){\r\n           n=$1.childNodes[i$1];\r\n           Unchecked.Equals(n.nodeType,Node.ELEMENT_NODE)?!usedHoles.Add(n.nodeName.toLowerCase())?console.warn(\"Hole filled twice\",instName):void 0:void 0;\r\n          }\r\n          singleTextFill=$1.childNodes.length===1&&Unchecked.Equals($1.firstChild.nodeType,Node.TEXT_NODE);\r\n          if(singleTextFill)\r\n           {\r\n            x=Prepare.fillTextHole(instance,$1.firstChild.textContent,instName);\r\n            ((function(a)\r\n            {\r\n             return function(o)\r\n             {\r\n              if(o!=null)\r\n               a(o.$0);\r\n             };\r\n            }((f=function(usedHoles$1)\r\n            {\r\n             return function(a)\r\n             {\r\n              return usedHoles$1.Add(a);\r\n             };\r\n            }(usedHoles),function(x$1)\r\n            {\r\n             return g(f(x$1));\r\n            })))(x));\r\n           }\r\n          Prepare.removeHolesExcept(instance,usedHoles);\r\n          if(!singleTextFill)\r\n           {\r\n            for(i$2=0,$5=$1.childNodes.length-1;i$2<=$5;i$2++){\r\n             n$1=$1.childNodes[i$2];\r\n             Unchecked.Equals(n$1.nodeType,Node.ELEMENT_NODE)?n$1.hasAttributes()?Prepare.fillInstanceAttrs(instance,n$1):fillDocHole(instance,n$1):void 0;\r\n            }\r\n           }\r\n          Prepare.mapHoles(instance,mappings);\r\n          Prepare.fill(instance,$1.parentNode,$1);\r\n          $1.parentNode.removeChild($1);\r\n          return;\r\n         }\r\n       }\r\n      break;\r\n    }\r\n  }\r\n  function fillDocHole(instance,fillWith)\r\n  {\r\n   var m,name$2,m$1;\r\n   function fillHole(p,n)\r\n   {\r\n    var parsed,i,$1;\r\n    if(name$2===\"title\"&&fillWith.hasChildNodes())\r\n     {\r\n      parsed=$.parseHTML(fillWith.textContent);\r\n      fillWith.removeChild(fillWith.firstChild);\r\n      for(i=0,$1=parsed.length-1;i<=$1;i++)fillWith.appendChild(Arrays.get(parsed,i));\r\n     }\r\n    else\r\n     null;\r\n    convertElement(fillWith);\r\n    return Prepare.fill(fillWith,p,n);\r\n   }\r\n   name$2=fillWith.nodeName.toLowerCase();\r\n   DomUtility.IterSelector(instance,\"[ws-attr-holes]\",function(e)\r\n   {\r\n    var holeAttrs,i,$1,attrName,_this;\r\n    holeAttrs=Strings.SplitChars(e.getAttribute(\"ws-attr-holes\"),[\" \"],1);\r\n    for(i=0,$1=holeAttrs.length-1;i<=$1;i++){\r\n     attrName=Arrays.get(holeAttrs,i);\r\n     e.setAttribute(attrName,(_this=new Global.RegExp(\"\\\\${\"+name$2+\"}\",\"ig\"),e.getAttribute(attrName).replace(_this,fillWith.textContent)));\r\n    }\r\n   });\r\n   m$1=instance.querySelector(\"[ws-hole=\"+name$2+\"]\");\r\n   if(Unchecked.Equals(m$1,null))\r\n    {\r\n     m=instance.querySelector(\"[ws-replace=\"+name$2+\"]\");\r\n     return Unchecked.Equals(m,null)?null:(fillHole(m.parentNode,m),void m.parentNode.removeChild(m));\r\n    }\r\n   else\r\n    {\r\n     while(m$1.hasChildNodes())\r\n      m$1.removeChild(m$1.lastChild);\r\n     m$1.removeAttribute(\"ws-hole\");\r\n     return fillHole(m$1,null);\r\n    }\r\n  }\r\n  function convertElement(el)\r\n  {\r\n   if(Strings.StartsWith(el.nodeName.toLowerCase(),\"ws-\"))\r\n    convertInstantiation(el);\r\n   else\r\n    {\r\n     Prepare.convertAttrs(el);\r\n     convertNodeAndSiblings(el.firstChild);\r\n    }\r\n  }\r\n  function convertNodeAndSiblings(n)\r\n  {\r\n   return recF(0,n);\r\n  }\r\n  function convertInstantiation(el)\r\n  {\r\n   return recF(1,el);\r\n  }\r\n  fakeroot=root==null?Templates.FakeRoot(els):root.$0;\r\n  name$1=(name==null?\"\":name.$0).toLowerCase();\r\n  Templates.LoadedTemplateFile(baseName).set_Item(name$1,fakeroot);\r\n  Arrays.length(els)>0?(function(el)\r\n  {\r\n   var m,m$1,name$2,name$3;\r\n   while(true)\r\n    {\r\n     m=el.querySelector(\"[ws-template]\");\r\n     if(Unchecked.Equals(m,null))\r\n      {\r\n       m$1=el.querySelector(\"[ws-children-template]\");\r\n       if(Unchecked.Equals(m$1,null))\r\n        return null;\r\n       else\r\n        {\r\n         name$2=m$1.getAttribute(\"ws-children-template\");\r\n         m$1.removeAttribute(\"ws-children-template\");\r\n         Templates.PrepareTemplateStrict(baseName,{\r\n          $:1,\r\n          $0:name$2\r\n         },DomUtility.ChildrenArray(m$1),null,null);\r\n         el=el;\r\n        }\r\n      }\r\n     else\r\n      {\r\n       name$3=m.getAttribute(\"ws-template\");\r\n       (Templates.PrepareSingleTemplate(baseName,{\r\n        $:1,\r\n        $0:name$3\r\n       },m))(null);\r\n       el=el;\r\n      }\r\n    }\r\n  }(fakeroot),convertNodeAndSiblings(Arrays.get(els,0))):void 0;\r\n };\r\n Templates.FakeRootSingle=function(el)\r\n {\r\n  var m,m$1,n;\r\n  el.removeAttribute(\"ws-template\");\r\n  m=el.getAttribute(\"ws-replace\");\r\n  m===null?void 0:(el.removeAttribute(\"ws-replace\"),m$1=el.parentNode,Unchecked.Equals(m$1,null)?void 0:(n=self.document.createElement(el.tagName),n.setAttribute(\"ws-replace\",m),m$1.replaceChild(n,el)));\r\n  return Templates.FakeRoot([el]);\r\n };\r\n Templates.FakeRoot=function(els)\r\n {\r\n  var fakeroot,i,$1;\r\n  fakeroot=self.document.createElement(\"div\");\r\n  for(i=0,$1=els.length-1;i<=$1;i++)fakeroot.appendChild(Arrays.get(els,i));\r\n  return fakeroot;\r\n };\r\n Templates.ChildrenTemplate=function(el,fillWith)\r\n {\r\n  var p,updates,docTreeNode,m,$1;\r\n  p=Templates.InlineTemplate(el,fillWith);\r\n  updates=p[1];\r\n  docTreeNode=p[0];\r\n  m=docTreeNode.Els;\r\n  return!Unchecked.Equals(m,null)&&m.length===1&&(Arrays.get(m,0)instanceof Node&&(Unchecked.Equals(Arrays.get(m,0).nodeType,Node.ELEMENT_NODE)&&($1=Arrays.get(m,0),true)))?Elt.TreeNode(docTreeNode,updates):Doc.Mk({\r\n   $:6,\r\n   $0:docTreeNode\r\n  },updates);\r\n };\r\n Templates.InlineTemplate=function(el,fillWith)\r\n {\r\n  var els,$1,$2,$3,holes,updates,attrs,afterRender,fw,e,x;\r\n  function addAttr(el$1,attr$1)\r\n  {\r\n   var attr$2,m,f;\r\n   attr$2=Attrs$1.Insert(el$1,attr$1);\r\n   updates.push(Attrs$1.Updates(attr$2));\r\n   attrs.push([el$1,attr$2]);\r\n   m=Runtime.GetOptional(attr$2.OnAfterRender);\r\n   return m==null?null:(f=m.$0,void afterRender.push(function()\r\n   {\r\n    f(el$1);\r\n   }));\r\n  }\r\n  function tryGetAsDoc(name)\r\n  {\r\n   var m,o;\r\n   m=(o=null,[fw.TryGetValue(name,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o]);\r\n   return m[0]?m[1].$==0?{\r\n    $:1,\r\n    $0:m[1].$1\r\n   }:m[1].$==1?{\r\n    $:1,\r\n    $0:Doc.TextNode(m[1].$1)\r\n   }:m[1].$==2?{\r\n    $:1,\r\n    $0:Doc.TextView(m[1].$1)\r\n   }:m[1].$==8?{\r\n    $:1,\r\n    $0:Doc.TextView(m[1].$1.get_View())\r\n   }:m[1].$==9?{\r\n    $:1,\r\n    $0:Doc.TextView(View.Map(Global.String,m[1].$1.get_View()))\r\n   }:m[1].$==10?{\r\n    $:1,\r\n    $0:Doc.TextView(View.Map(function(i)\r\n    {\r\n     return i.get_Input();\r\n    },m[1].$1.get_View()))\r\n   }:m[1].$==11?{\r\n    $:1,\r\n    $0:Doc.TextView(View.Map(Global.String,m[1].$1.get_View()))\r\n   }:m[1].$==12?{\r\n    $:1,\r\n    $0:Doc.TextView(View.Map(function(i)\r\n    {\r\n     return i.get_Input();\r\n    },m[1].$1.get_View()))\r\n   }:m[1].$==13?{\r\n    $:1,\r\n    $0:Doc.TextView(View.Map(Global.String,m[1].$1.get_View()))\r\n   }:(console.warn(\"Content hole filled with attribute data\",name),null):null;\r\n  }\r\n  holes=[];\r\n  updates=[];\r\n  attrs=[];\r\n  afterRender=[];\r\n  fw=new Dictionary.New$5();\r\n  e=Enumerator.Get(fillWith);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    {\r\n     x=e.Current();\r\n     fw.set_Item(x.$0,x);\r\n    }\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n  els=DomUtility.ChildrenArray(el);\r\n  DomUtility.IterSelector(el,\"[ws-hole]\",function(p)\r\n  {\r\n   var m,doc,name;\r\n   name=p.getAttribute(\"ws-hole\");\r\n   p.removeAttribute(\"ws-hole\");\r\n   while(p.hasChildNodes())\r\n    p.removeChild(p.lastChild);\r\n   m=tryGetAsDoc(name);\r\n   m!=null&&m.$==1?(doc=m.$0,Docs$1.LinkElement(p,doc.docNode),holes.push(DocElemNode.New(Attrs$1.Empty(p),doc.docNode,null,p,Fresh.Int(),null)),updates.push(doc.updates)):void 0;\r\n  });\r\n  DomUtility.IterSelector(el,\"[ws-replace]\",function(e$1)\r\n  {\r\n   var m,doc,p,after,before,o;\r\n   m=tryGetAsDoc(e$1.getAttribute(\"ws-replace\"));\r\n   m!=null&&m.$==1?(doc=m.$0,p=e$1.parentNode,after=self.document.createTextNode(\"\"),p.replaceChild(after,e$1),before=Docs$1.InsertBeforeDelim(after,doc.docNode),o=Arrays.tryFindIndex(function(y)\r\n   {\r\n    return e$1===y;\r\n   },els),o==null?void 0:Arrays.set(els,o.$0,doc.docNode),holes.push(DocElemNode.New(Attrs$1.Empty(p),doc.docNode,{\r\n    $:1,\r\n    $0:[before,after]\r\n   },p,Fresh.Int(),null)),updates.push(doc.updates)):void 0;\r\n  });\r\n  DomUtility.IterSelector(el,\"[ws-attr]\",function(e$1)\r\n  {\r\n   var name,m,o;\r\n   name=e$1.getAttribute(\"ws-attr\");\r\n   e$1.removeAttribute(\"ws-attr\");\r\n   m=(o=null,[fw.TryGetValue(name,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o]);\r\n   m[0]?m[1].$==3?addAttr(e$1,m[1].$1):console.warn(\"Attribute hole filled with non-attribute data\",name):void 0;\r\n  });\r\n  DomUtility.IterSelector(el,\"[ws-on]\",function(e$1)\r\n  {\r\n   addAttr(e$1,AttrProxy.Concat(Arrays.choose(function(x$1)\r\n   {\r\n    var a,m,o;\r\n    a=Strings.SplitChars(x$1,[\":\"],1);\r\n    m=(o=null,[fw.TryGetValue(Arrays.get(a,1),{\r\n     get:function()\r\n     {\r\n      return o;\r\n     },\r\n     set:function(v)\r\n     {\r\n      o=v;\r\n     }\r\n    }),o]);\r\n    return m[0]?m[1].$==4?{\r\n     $:1,\r\n     $0:AttrModule.Handler(Arrays.get(a,0),m[1].$1)\r\n    }:m[1].$==5?{\r\n     $:1,\r\n     $0:AttrProxy.Handler(Arrays.get(a,0),m[1].$2)\r\n    }:(console.warn(\"Event hole on\"+Arrays.get(a,0)+\" filled with non-event data\",Arrays.get(a,1)),null):null;\r\n   },Strings.SplitChars(e$1.getAttribute(\"ws-on\"),[\" \"],1))));\r\n   e$1.removeAttribute(\"ws-on\");\r\n  });\r\n  DomUtility.IterSelector(el,\"[ws-onafterrender]\",function(e$1)\r\n  {\r\n   var name,m,o;\r\n   name=e$1.getAttribute(\"ws-onafterrender\");\r\n   m=(o=null,[fw.TryGetValue(name,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o]);\r\n   m[0]?m[1].$==6?(e$1.removeAttribute(\"ws-onafterrender\"),addAttr(e$1,AttrModule.OnAfterRender(m[1].$1))):m[1].$==7?(e$1.removeAttribute(\"ws-onafterrender\"),addAttr(e$1,AttrModule.OnAfterRender(m[1].$1))):console.warn(\"onafterrender hole filled with non-onafterrender data\",name):void 0;\r\n  });\r\n  DomUtility.IterSelector(el,\"[ws-var]\",function(e$1)\r\n  {\r\n   var name,m,o;\r\n   name=e$1.getAttribute(\"ws-var\");\r\n   e$1.removeAttribute(\"ws-var\");\r\n   m=(o=null,[fw.TryGetValue(name,{\r\n    get:function()\r\n    {\r\n     return o;\r\n    },\r\n    set:function(v)\r\n    {\r\n     o=v;\r\n    }\r\n   }),o]);\r\n   m[0]?m[1].$==8?addAttr(e$1,AttrModule.Value(m[1].$1)):m[1].$==9?addAttr(e$1,AttrModule.Checked(m[1].$1)):m[1].$==10?addAttr(e$1,AttrModule.IntValue(m[1].$1)):m[1].$==11?addAttr(e$1,AttrModule.IntValueUnchecked(m[1].$1)):m[1].$==12?addAttr(e$1,AttrModule.FloatValue(m[1].$1)):m[1].$==13?addAttr(e$1,AttrModule.FloatValueUnchecked(m[1].$1)):console.warn(\"Var hole filled with non-Var data\",name):void 0;\r\n  });\r\n  DomUtility.IterSelector(el,\"[ws-attr-holes]\",function(e$1)\r\n  {\r\n   var re,holeAttrs,i,$4;\r\n   re=new Global.RegExp(Templates.TextHoleRE(),\"g\");\r\n   holeAttrs=Strings.SplitChars(e$1.getAttribute(\"ws-attr-holes\"),[\" \"],1);\r\n   e$1.removeAttribute(\"ws-attr-holes\");\r\n   for(i=0,$4=holeAttrs.length-1;i<=$4;i++)(function()\r\n   {\r\n    var m,lastIndex,$5,finalText,value,s,s$1,s$2,s$3,attrName,s$4,res,textBefore;\r\n    attrName=Arrays.get(holeAttrs,i);\r\n    s$4=e$1.getAttribute(attrName);\r\n    m=null;\r\n    lastIndex=0;\r\n    res=[];\r\n    while(m=re.exec(s$4),m!==null)\r\n     {\r\n      textBefore=Slice.string(s$4,{\r\n       $:1,\r\n       $0:lastIndex\r\n      },{\r\n       $:1,\r\n       $0:re.lastIndex-Arrays.get(m,0).length-1\r\n      });\r\n      lastIndex=re.lastIndex;\r\n      res.push([textBefore,Arrays.get(m,1)]);\r\n     }\r\n    finalText=Slice.string(s$4,{\r\n     $:1,\r\n     $0:lastIndex\r\n    },null);\r\n    re.lastIndex=0;\r\n    value=Arrays.foldBack(function($6,$7)\r\n    {\r\n     return(function(t)\r\n     {\r\n      var textBefore$1,holeName;\r\n      textBefore$1=t[0];\r\n      holeName=t[1];\r\n      return function(t$1)\r\n      {\r\n       var textAfter,views,holeContent,m$1,o;\r\n       textAfter=t$1[0];\r\n       views=t$1[1];\r\n       holeContent=(m$1=(o=null,[fw.TryGetValue(holeName,{\r\n        get:function()\r\n        {\r\n         return o;\r\n        },\r\n        set:function(v)\r\n        {\r\n         o=v;\r\n        }\r\n       }),o]),m$1[0]?m$1[1].$==1?{\r\n        $:0,\r\n        $0:m$1[1].$1\r\n       }:m$1[1].$==2?{\r\n        $:1,\r\n        $0:m$1[1].$1\r\n       }:m$1[1].$==8?{\r\n        $:1,\r\n        $0:m$1[1].$1.get_View()\r\n       }:m$1[1].$==9?{\r\n        $:1,\r\n        $0:View.Map(Global.String,m$1[1].$1.get_View())\r\n       }:m$1[1].$==10?{\r\n        $:1,\r\n        $0:View.Map(function(i$1)\r\n        {\r\n         return i$1.get_Input();\r\n        },m$1[1].$1.get_View())\r\n       }:m$1[1].$==11?{\r\n        $:1,\r\n        $0:View.Map(Global.String,m$1[1].$1.get_View())\r\n       }:m$1[1].$==12?{\r\n        $:1,\r\n        $0:View.Map(function(i$1)\r\n        {\r\n         return i$1.get_Input();\r\n        },m$1[1].$1.get_View())\r\n       }:m$1[1].$==13?{\r\n        $:1,\r\n        $0:View.Map(Global.String,m$1[1].$1.get_View())\r\n       }:(console.warn(\"Attribute value hole filled with non-text data\",holeName),{\r\n        $:0,\r\n        $0:\"\"\r\n       }):{\r\n        $:0,\r\n        $0:\"\"\r\n       });\r\n       return holeContent.$==1?[textBefore$1,new List$1.T({\r\n        $:1,\r\n        $0:textAfter===\"\"?holeContent.$0:View.Map(function(s$5)\r\n        {\r\n         return s$5+textAfter;\r\n        },holeContent.$0),\r\n        $1:views\r\n       })]:[textBefore$1+holeContent.$0+textAfter,views];\r\n      };\r\n     }($6))($7);\r\n    },res,[finalText,List$1.T.Empty]);\r\n    return addAttr(e$1,value[1].$==1?value[1].$1.$==1?value[1].$1.$1.$==1?value[1].$1.$1.$1.$==0?(s=value[0],AttrModule.Dynamic(attrName,View.Map3(function(v1,v2,v3)\r\n    {\r\n     return s+v1+v2+v3;\r\n    },value[1].$0,value[1].$1.$0,value[1].$1.$1.$0))):(s$1=value[0],AttrModule.Dynamic(attrName,View.Map(function(vs)\r\n    {\r\n     return s$1+Strings.concat(\"\",vs);\r\n    },View.Sequence(value[1])))):(s$2=value[0],AttrModule.Dynamic(attrName,View.Map2(function(v1,v2)\r\n    {\r\n     return s$2+v1+v2;\r\n    },value[1].$0,value[1].$1.$0))):value[0]===\"\"?AttrModule.Dynamic(attrName,value[1].$0):(s$3=value[0],AttrModule.Dynamic(attrName,View.Map(function(v)\r\n    {\r\n     return s$3+v;\r\n    },value[1].$0))):AttrProxy.Create(attrName,value[0]));\r\n   }());\r\n  });\r\n  return[Runtime.DeleteEmptyFields({\r\n   Els:els,\r\n   Dirty:true,\r\n   Holes:holes,\r\n   Attrs:attrs,\r\n   Render:($1=afterRender.length==0?null:{\r\n    $:1,\r\n    $0:function(el$1)\r\n    {\r\n     Arrays.iter(function(f)\r\n     {\r\n      f(el$1);\r\n     },afterRender);\r\n    }\r\n   },$1?$1.$0:void 0),\r\n   El:($2=!Unchecked.Equals(els,null)&&els.length===1&&(Arrays.get(els,0)instanceof Node&&(Arrays.get(els,0)instanceof Global.Element&&($3=Arrays.get(els,0),true)))?{\r\n    $:1,\r\n    $0:$3\r\n   }:null,$2?$2.$0:void 0)\r\n  },[\"Render\",\"El\"]),Array.TreeReduce(View.Const(),View.Map2Unit,updates)];\r\n };\r\n Templates.TextHoleRE=function()\r\n {\r\n  SC$9.$cctor();\r\n  return SC$9.TextHoleRE;\r\n };\r\n Templates.LocalTemplatesLoaded=function()\r\n {\r\n  SC$9.$cctor();\r\n  return SC$9.LocalTemplatesLoaded;\r\n };\r\n Templates.set_LocalTemplatesLoaded=function($1)\r\n {\r\n  SC$9.$cctor();\r\n  SC$9.LocalTemplatesLoaded=$1;\r\n };\r\n Templates.LoadedTemplateFile=function(name)\r\n {\r\n  var m,o,d;\r\n  m=(o=null,[Templates.LoadedTemplates().TryGetValue(name,{\r\n   get:function()\r\n   {\r\n    return o;\r\n   },\r\n   set:function(v)\r\n   {\r\n    o=v;\r\n   }\r\n  }),o]);\r\n  return m[0]?m[1]:(d=new Dictionary.New$5(),(Templates.LoadedTemplates().set_Item(name,d),d));\r\n };\r\n Templates.LoadedTemplates=function()\r\n {\r\n  SC$9.$cctor();\r\n  return SC$9.LoadedTemplates;\r\n };\r\n SC$9.$cctor=function()\r\n {\r\n  SC$9.$cctor=Global.ignore;\r\n  SC$9.LoadedTemplates=new Dictionary.New$5();\r\n  SC$9.LocalTemplatesLoaded=false;\r\n  SC$9.TextHoleRE=\"\\\\${([^}]+)}\";\r\n };\r\n Flow=UI.Flow=Runtime.Class({\r\n  get_Render:function()\r\n  {\r\n   return this.render;\r\n  }\r\n },Obj,Flow);\r\n Flow.New=Runtime.Ctor(function(define)\r\n {\r\n  Flow.New$1.call(this,function(_var)\r\n  {\r\n   return function(cont)\r\n   {\r\n    return Var$1.Set(_var,define(cont));\r\n   };\r\n  });\r\n },Flow);\r\n Flow.New$1=Runtime.Ctor(function(render)\r\n {\r\n  Obj.New.call(this);\r\n  this.render=render;\r\n },Flow);\r\n Flow.get_Do=function()\r\n {\r\n  return new FlowBuilder.New();\r\n };\r\n Flow.Static=function(doc)\r\n {\r\n  return new Flow.New$1(function(_var)\r\n  {\r\n   return function(cont)\r\n   {\r\n    Var$1.Set(_var,doc);\r\n    return cont();\r\n   };\r\n  });\r\n };\r\n Flow.Define=function(f)\r\n {\r\n  return new Flow.New(function(x)\r\n  {\r\n   return f(function(a)\r\n   {\r\n    x(a);\r\n   });\r\n  });\r\n };\r\n Flow.Embed=function(fl)\r\n {\r\n  var _var;\r\n  _var=Var$1.Create$1(Doc.get_Empty());\r\n  ((fl.get_Render())(_var))(Global.ignore);\r\n  return Doc.EmbedView(_var.get_View());\r\n };\r\n Flow.Return=function(x)\r\n {\r\n  return new Flow.New$1(function()\r\n  {\r\n   return function(cont)\r\n   {\r\n    return cont(x);\r\n   };\r\n  });\r\n };\r\n Flow.Bind=function(m,k)\r\n {\r\n  return new Flow.New$1(function(_var)\r\n  {\r\n   return function(cont)\r\n   {\r\n    return((m.get_Render())(_var))(function(r)\r\n    {\r\n     ((k(r).get_Render())(_var))(cont);\r\n    });\r\n   };\r\n  });\r\n };\r\n Flow.Map=function(f,x)\r\n {\r\n  return new Flow.New$1(function(_var)\r\n  {\r\n   return function(cont)\r\n   {\r\n    return((x.get_Render())(_var))(function(r)\r\n    {\r\n     cont(f(r));\r\n    });\r\n   };\r\n  });\r\n };\r\n FlowBuilder=UI.FlowBuilder=Runtime.Class({\r\n  ReturnFrom:Global.id,\r\n  Return:function(value)\r\n  {\r\n   return Flow.Return(value);\r\n  },\r\n  Bind:function(comp,func)\r\n  {\r\n   return Flow.Bind(comp,func);\r\n  }\r\n },Obj,FlowBuilder);\r\n FlowBuilder.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },FlowBuilder);\r\n attr=HtmlModule.attr=Runtime.Class({},Obj,attr);\r\n attr.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },attr);\r\n Router.InstallHash=function(onParseError,router)\r\n {\r\n  var _var;\r\n  _var=Var$1.Create$1(Router.getCurrentHash(function(h)\r\n  {\r\n   return RouterModule.Parse(router,Route$1.FromHash(h,{\r\n    $:1,\r\n    $0:true\r\n   }));\r\n  },onParseError));\r\n  Router.InstallHashInto(_var,onParseError,router);\r\n  return _var;\r\n };\r\n Router.InstallHashInto=function(_var,onParseError,router)\r\n {\r\n  function parse(h)\r\n  {\r\n   return RouterModule.Parse(router,Route$1.FromHash(h,{\r\n    $:1,\r\n    $0:true\r\n   }));\r\n  }\r\n  function cur()\r\n  {\r\n   return Router.getCurrentHash(parse,onParseError);\r\n  }\r\n  function set(value)\r\n  {\r\n   if(!Unchecked.Equals(_var.Get(),value))\r\n    _var.Set(value);\r\n  }\r\n  self.addEventListener(\"popstate\",function()\r\n  {\r\n   return set(cur());\r\n  },false);\r\n  self.addEventListener(\"hashchange\",function()\r\n  {\r\n   return set(cur());\r\n  },false);\r\n  self.document.body.addEventListener(\"click\",function(ev)\r\n  {\r\n   var o,o$1,href;\r\n   o=(o$1=Router.findLinkHref(ev.target),o$1==null?null:(href=o$1.$0,Strings.StartsWith(href,\"#\")?parse(href):null));\r\n   return o==null?null:(set(o.$0),ev.preventDefault());\r\n  },false);\r\n  View.Sink(function(value)\r\n  {\r\n   var url;\r\n   if(!Unchecked.Equals(value,cur()))\r\n    {\r\n     url=RouterModule.HashLink(router,value);\r\n     self.history.pushState(null,null,url);\r\n    }\r\n  },_var.get_View());\r\n };\r\n Router.getCurrentHash=function(parse,onParseError)\r\n {\r\n  var h,m;\r\n  h=self.location.hash;\r\n  m=parse(h);\r\n  return m==null?((function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"Failed to parse route: \"+Utils.toSafe($2));\r\n   };\r\n  }(function(s)\r\n  {\r\n   console.log(s);\r\n  }))(h),onParseError):m.$0;\r\n };\r\n Router.Install=function(onParseError,router)\r\n {\r\n  var _var;\r\n  _var=Var$1.Create$1(Router.getCurrent(function(p)\r\n  {\r\n   return RouterModule.Parse(router,p);\r\n  },onParseError));\r\n  Router.InstallInto(_var,onParseError,router);\r\n  return _var;\r\n };\r\n Router.InstallInto=function(_var,onParseError,router)\r\n {\r\n  function parse(p)\r\n  {\r\n   return RouterModule.Parse(router,p);\r\n  }\r\n  function cur()\r\n  {\r\n   return Router.getCurrent(parse,onParseError);\r\n  }\r\n  function set(value)\r\n  {\r\n   if(!Unchecked.Equals(_var.Get(),value))\r\n    _var.Set(value);\r\n  }\r\n  self.addEventListener(\"popstate\",function()\r\n  {\r\n   return set(cur());\r\n  },false);\r\n  self.document.body.addEventListener(\"click\",function(ev)\r\n  {\r\n   var o,o$1,o$2;\r\n   o=(o$1=(o$2=Router.findLinkHref(ev.target),o$2==null?null:Router.hrefToAbsolute(o$2.$0)),o$1==null?null:parse(Route$1.FromUrl(o$1.$0,null)));\r\n   return o==null?null:(set(o.$0),ev.preventDefault());\r\n  },false);\r\n  View.Sink(function(value)\r\n  {\r\n   var url;\r\n   if(!Unchecked.Equals(value,cur()))\r\n    {\r\n     url=RouterModule.Link(router,value);\r\n     self.history.pushState(null,null,url);\r\n    }\r\n  },_var.get_View());\r\n };\r\n Router.findLinkHref=function(n)\r\n {\r\n  while(true)\r\n   if(n.tagName===\"A\")\r\n    return Option.ofObj(n.getAttribute(\"href\"));\r\n   else\r\n    if(n===self.document.body)\r\n     return null;\r\n    else\r\n     n=n.parentNode;\r\n };\r\n Router.hrefToAbsolute=function(href)\r\n {\r\n  var s;\r\n  return Strings.StartsWith(href,\"?\")?{\r\n   $:1,\r\n   $0:Router.trimFragment(self.location.pathname+href)\r\n  }:Strings.StartsWith(href,\"#\")?null:Strings.StartsWith(href,\"/\")?{\r\n   $:1,\r\n   $0:Router.trimFragment(href)\r\n  }:(new Global.RegExp(\"^[a-zA-Z0-9]:\")).test(href)?null:(s=self.location.pathname,{\r\n   $:1,\r\n   $0:Router.trimFragment(Slice.string(s,null,{\r\n    $:1,\r\n    $0:s.lastIndexOf(\"/\")\r\n   })+href)\r\n  });\r\n };\r\n Router.trimFragment=function(url)\r\n {\r\n  var m;\r\n  m=url.indexOf(\"#\");\r\n  return m===-1?url:Slice.string(url,null,{\r\n   $:1,\r\n   $0:m-1\r\n  });\r\n };\r\n Router.getCurrent=function(parse,onParseError)\r\n {\r\n  var loc,p,m;\r\n  loc=self.location;\r\n  p=Route$1.FromUrl(loc.pathname+loc.search,null);\r\n  m=parse(p);\r\n  return m==null?((function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"Failed to parse route: \"+Utils.toSafe($2));\r\n   };\r\n  }(function(s)\r\n  {\r\n   console.log(s);\r\n  }))(p.ToLink()),onParseError):m.$0;\r\n };\r\n Route.Append=function(a,a$1)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:AppendList.Append(a.$0,a$1.$0),\r\n   $1:Map.FoldBack(function($1,$2,$3)\r\n   {\r\n    return $3.Add($1,$2);\r\n   },a.$1,a$1.$1)\r\n  };\r\n };\r\n Route.FromList=function(xs,q)\r\n {\r\n  return{\r\n   $:0,\r\n   $0:AppendList.FromArray(Arrays.ofList(xs)),\r\n   $1:q\r\n  };\r\n };\r\n Route.ToList=function(a)\r\n {\r\n  return[List$1.ofArray(AppendList.ToArray(a.$0)),a.$1];\r\n };\r\n Route.SameHash=function(a,b)\r\n {\r\n  return Route.NoHash(a)===Route.NoHash(b);\r\n };\r\n Route.MakeHash=function(a)\r\n {\r\n  var query,path;\r\n  query=a.$1;\r\n  path=Strings.concat(\"/\",Arrays.map(function(x)\r\n  {\r\n   return Global.encodeURIComponent(x);\r\n  },AppendList.ToArray(a.$0)));\r\n  return query.get_IsEmpty()?path:path+\"?\"+Strings.concat(\"&\",Seq.map(function(a$1)\r\n  {\r\n   var a$2;\r\n   a$2=Operators.KeyValue(a$1);\r\n   return Global.encodeURIComponent(a$2[0])+\"=\"+Global.encodeURIComponent(a$2[1]);\r\n  },query));\r\n };\r\n Route.ParseHash=function(hash)\r\n {\r\n  var hash$1,p,m,path;\r\n  hash$1=Route.NoHash(hash);\r\n  p=(m=hash$1.indexOf(\"?\"),m===-1?[hash$1,\"\"]:[Slice.string(hash$1,null,{\r\n   $:1,\r\n   $0:m-1\r\n  }),Slice.string(hash$1,{\r\n   $:1,\r\n   $0:m+1\r\n  },null)]);\r\n  path=p[0];\r\n  return{\r\n   $:0,\r\n   $0:AppendList.FromArray(path===\"\"?[]:Arrays.map(function(x)\r\n   {\r\n    return Global.decodeURIComponent(x);\r\n   },Strings.SplitChars(path,[\"/\"],0))),\r\n   $1:Map.OfArray(Arrays.map(function(s)\r\n   {\r\n    var m$1;\r\n    m$1=s.indexOf(\"=\");\r\n    return m$1===-1?[Global.decodeURIComponent(s),\"\"]:[Global.decodeURIComponent(Slice.string(s,null,{\r\n     $:1,\r\n     $0:m$1-1\r\n    })),Global.decodeURIComponent(Slice.string(s,{\r\n     $:1,\r\n     $0:m$1+1\r\n    },null))];\r\n   },Strings.SplitChars(p[1],[\"&\"],0)))\r\n  };\r\n };\r\n Route.NoHash=function(s)\r\n {\r\n  return Strings.StartsWith(s,\"#\")?s.substring(1):s;\r\n };\r\n Routing.DoLink=function(map,va)\r\n {\r\n  var t;\r\n  t=map.Ser(va);\r\n  return Route.FromList(t[0],t[1]);\r\n };\r\n Routing.DoRoute=function(map,route)\r\n {\r\n  return map.Des(Route.ToList(route));\r\n };\r\n Routing.InstallMap=function(rt)\r\n {\r\n  var _var;\r\n  function same(a,b)\r\n  {\r\n   return Unchecked.Equals(rt.Ser(a),rt.Ser(b));\r\n  }\r\n  function cur()\r\n  {\r\n   return rt.Des(Route.ToList(Route.ParseHash(self.location.hash)));\r\n  }\r\n  function set(value)\r\n  {\r\n   if(!same(_var.Get(),value))\r\n    _var.Set(value);\r\n  }\r\n  function onUpdate(evt)\r\n  {\r\n   return set(cur());\r\n  }\r\n  _var=Var$1.Create$1(cur());\r\n  self.onpopstate=onUpdate;\r\n  self.onhashchange=onUpdate;\r\n  View.Sink(function(loc)\r\n  {\r\n   var ha,t;\r\n   ha=Route.MakeHash((t=rt.Ser(loc),Route.FromList(t[0],t[1])));\r\n   !Route.SameHash(self.location.hash,ha)?self.location.replace(\"#\"+ha):void 0;\r\n  },_var.get_View());\r\n  return _var;\r\n };\r\n RouteMap.Install=function(map)\r\n {\r\n  return Routing.InstallMap(map);\r\n };\r\n RouteMap.Create=function(ser,des)\r\n {\r\n  function f(t)\r\n  {\r\n   return t[0];\r\n  }\r\n  return{\r\n   Des:function(x)\r\n   {\r\n    return des(f(x));\r\n   },\r\n   Ser:function(x)\r\n   {\r\n    return[ser(x),new FSharpMap.New([])];\r\n   }\r\n  };\r\n };\r\n RouteMap.CreateWithQuery=function(ser,des)\r\n {\r\n  return{\r\n   Des:des,\r\n   Ser:ser\r\n  };\r\n };\r\n MousePosSt.New=function(Active,PosV)\r\n {\r\n  return{\r\n   Active:Active,\r\n   PosV:PosV\r\n  };\r\n };\r\n MouseBtnSt.New=function(Active,Left,Middle,Right)\r\n {\r\n  return{\r\n   Active:Active,\r\n   Left:Left,\r\n   Middle:Middle,\r\n   Right:Right\r\n  };\r\n };\r\n Mouse.get_MousePressed=function()\r\n {\r\n  Input.ActivateButtonListener();\r\n  return View.Apply(View.Apply(View.Apply(View.Const(Runtime.Curried3(function(l,m,r)\r\n  {\r\n   return l||m||r;\r\n  })),Input.MouseBtnSt$1().Left.get_View()),Input.MouseBtnSt$1().Middle.get_View()),Input.MouseBtnSt$1().Right.get_View());\r\n };\r\n Mouse.get_RightPressed=function()\r\n {\r\n  Input.ActivateButtonListener();\r\n  return Input.MouseBtnSt$1().Right.get_View();\r\n };\r\n Mouse.get_MiddlePressed=function()\r\n {\r\n  Input.ActivateButtonListener();\r\n  return Input.MouseBtnSt$1().Middle.get_View();\r\n };\r\n Mouse.get_LeftPressed=function()\r\n {\r\n  Input.ActivateButtonListener();\r\n  return Input.MouseBtnSt$1().Left.get_View();\r\n };\r\n Mouse.get_Position=function()\r\n {\r\n  !Input.MousePosSt$1().Active?(self.document.addEventListener(\"mousemove\",function(evt)\r\n  {\r\n   Var$1.Set(Input.MousePosSt$1().PosV,[evt.clientX,evt.clientY]);\r\n  },false),Input.MousePosSt$1().Active=true):void 0;\r\n  return Input.MousePosSt$1().PosV.get_View();\r\n };\r\n KeyListenerSt.New=function(KeysPressed,KeyListenerActive,LastPressed)\r\n {\r\n  return{\r\n   KeysPressed:KeysPressed,\r\n   KeyListenerActive:KeyListenerActive,\r\n   LastPressed:LastPressed\r\n  };\r\n };\r\n Keyboard.IsPressed=function(key)\r\n {\r\n  function p(x)\r\n  {\r\n   return x===key;\r\n  }\r\n  Input.ActivateKeyListener();\r\n  return View.Map(function(l)\r\n  {\r\n   return List$1.exists(p,l);\r\n  },Input.KeyListenerState().KeysPressed.get_View());\r\n };\r\n Keyboard.get_LastPressed=function()\r\n {\r\n  Input.ActivateKeyListener();\r\n  return Input.KeyListenerState().LastPressed.get_View();\r\n };\r\n Keyboard.get_KeysPressed=function()\r\n {\r\n  Input.ActivateKeyListener();\r\n  return Input.KeyListenerState().KeysPressed.get_View();\r\n };\r\n Input.ActivateKeyListener=function()\r\n {\r\n  SC$10.$cctor();\r\n  return SC$10.ActivateKeyListener;\r\n };\r\n Input.KeyListenerState=function()\r\n {\r\n  SC$10.$cctor();\r\n  return SC$10.KeyListenerState;\r\n };\r\n Input.ActivateButtonListener=function()\r\n {\r\n  SC$10.$cctor();\r\n  return SC$10.ActivateButtonListener;\r\n };\r\n Input.MouseBtnSt$1=function()\r\n {\r\n  SC$10.$cctor();\r\n  return SC$10.MouseBtnSt;\r\n };\r\n Input.MousePosSt$1=function()\r\n {\r\n  SC$10.$cctor();\r\n  return SC$10.MousePosSt;\r\n };\r\n SC$10.$cctor=function()\r\n {\r\n  SC$10.$cctor=Global.ignore;\r\n  function buttonListener(evt,down)\r\n  {\r\n   var m;\r\n   m=evt.button;\r\n   return m===0?Var$1.Set(Input.MouseBtnSt$1().Left,down):m===1?Var$1.Set(Input.MouseBtnSt$1().Middle,down):m===2?Var$1.Set(Input.MouseBtnSt$1().Right,down):null;\r\n  }\r\n  SC$10.MousePosSt=MousePosSt.New(false,Var$1.Create$1([0,0]));\r\n  SC$10.MouseBtnSt=MouseBtnSt.New(false,Var$1.Create$1(false),Var$1.Create$1(false),Var$1.Create$1(false));\r\n  SC$10.ActivateButtonListener=!Input.MouseBtnSt$1().Active?(Input.MouseBtnSt$1().Active=true,self.document.addEventListener(\"mousedown\",function(evt)\r\n  {\r\n   return buttonListener(evt,true);\r\n  },false),self.document.addEventListener(\"mouseup\",function(evt)\r\n  {\r\n   return buttonListener(evt,false);\r\n  },false)):null;\r\n  SC$10.KeyListenerState=KeyListenerSt.New(Var$1.Create$1(List$1.T.Empty),false,Var$1.Create$1(-1));\r\n  SC$10.ActivateKeyListener=!Input.KeyListenerState().KeyListenerActive?($(self.document).keydown(function(evt)\r\n  {\r\n   var keyCode,xs;\r\n   keyCode=evt.which;\r\n   Var$1.Set(Input.KeyListenerState().LastPressed,keyCode);\r\n   xs=Input.KeyListenerState().KeysPressed.Get();\r\n   return!List$1.exists(function(x)\r\n   {\r\n    return x===keyCode;\r\n   },xs)?Input.KeyListenerState().KeysPressed.Set(List$1.append(xs,List$1.ofArray([keyCode]))):null;\r\n  }),void $(self.document).keyup(function(evt)\r\n  {\r\n   var keyCode;\r\n   function p(x)\r\n   {\r\n    return x!==keyCode;\r\n   }\r\n   keyCode=evt.which;\r\n   return Var$1.Update(Input.KeyListenerState().KeysPressed,function(l)\r\n   {\r\n    return List$1.filter(p,l);\r\n   });\r\n  })):null;\r\n };\r\n}());\r\n"
    }
  ]
}
{
  "asName": "WebSharper.Collections",
  "dependencies": [
    "WebSharper.Main.asm"
  ],
  "resources": [],
  "modules": [
    {
      "moName": "WebSharper.Collections.BalancedTree+Tree`1",
      "methods": []
    },
    {
      "moName": "WebSharper.Collections.BalancedTree",
      "methods": [
        {
          "meName": "TryFind",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "Tree<'a>",
              "asm": "WebSharper.Collections"
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
              "tName": "Tree<'a>",
              "asm": "WebSharper.Collections"
            }
          ]
        },
        {
          "meName": "Add",
          "isField": 0,
          "type": {
            "tName": "Tree<'a>",
            "asm": "WebSharper.Collections"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "Tree<'a>",
              "asm": "WebSharper.Collections"
            }
          ]
        },
        {
          "meName": "Remove",
          "isField": 0,
          "type": {
            "tName": "Tree<'a>",
            "asm": "WebSharper.Collections"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "Tree<'a>",
              "asm": "WebSharper.Collections"
            }
          ]
        },
        {
          "meName": "Put",
          "isField": 0,
          "type": {
            "tName": "Tree<'a>",
            "asm": "WebSharper.Collections"
          },
          "parms": [
            {
              "tName": "('a -> ('a -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "Tree<'a>",
              "asm": "WebSharper.Collections"
            }
          ]
        },
        {
          "meName": "Rebuild",
          "isField": 0,
          "type": {
            "tName": "Tree<'a>",
            "asm": "WebSharper.Collections"
          },
          "parms": [
            {
              "tName": "(bool * 'a * Tree<'a>)[]",
              "asm": "netstandard"
            },
            {
              "tName": "Tree<'a>",
              "asm": "WebSharper.Collections"
            }
          ]
        },
        {
          "meName": "Lookup",
          "isField": 0,
          "type": {
            "tName": "(Tree<'a> * 'b[])",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "Tree<'a>",
              "asm": "WebSharper.Collections"
            }
          ]
        },
        {
          "meName": "OfSeq",
          "isField": 0,
          "type": {
            "tName": "Tree<'a>",
            "asm": "WebSharper.Collections"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Build",
          "isField": 0,
          "type": {
            "tName": "Tree<'a>",
            "asm": "WebSharper.Collections"
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
          "meName": "Enumerate",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
            },
            {
              "tName": "Tree<'a>",
              "asm": "WebSharper.Collections"
            }
          ]
        },
        {
          "meName": "Branch",
          "isField": 0,
          "type": {
            "tName": "Tree<'a>",
            "asm": "WebSharper.Collections"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "Tree<'a>",
              "asm": "WebSharper.Collections"
            },
            {
              "tName": "Tree<'a>",
              "asm": "WebSharper.Collections"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.Collections.Pair`2",
      "methods": []
    },
    {
      "moName": "WebSharper.Collections.MapUtil",
      "methods": [
        {
          "meName": "fromSeq",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Collections.BalancedTree+Tree<WebSharper.Collections.Pair<'a, 'b>>",
            "asm": "WebSharper.Collections"
          },
          "parms": [
            {
              "tName": "IEnumerable<('a * 'b)>",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Collections.FSharpMap`2",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Collections.MapModule",
      "methods": [
        {
          "meName": "Map",
          "isField": 0,
          "type": {
            "tName": "Map<'a, 'c>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'c))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Map<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "TryPick",
          "isField": 0,
          "type": {
            "tName": "Option<'c>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> Option<'c>))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Map<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "TryFindKey",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> bool))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Map<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "TryFind",
          "isField": 0,
          "type": {
            "tName": "Option<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "Map<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ToSeq",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<('a * 'b)>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Map<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Pick",
          "isField": 0,
          "type": {
            "tName": "'c",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> ('b -> Option<'c>))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Map<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Partition",
          "isField": 0,
          "type": {
            "tName": "(Map<'a, 'b> * Map<'a, 'b>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> bool))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Map<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "OfArray",
          "isField": 0,
          "type": {
            "tName": "Map<'a, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a * 'b)[]",
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
              "tName": "('a -> ('b -> unit))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Map<'a, 'b>",
              "asm": "FSharp.Core"
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
              "tName": "('a -> ('b -> bool))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Map<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "FoldBack",
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
              "tName": "Map<'a, 'b>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'c",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Fold",
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
              "tName": "Map<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "FindKey",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "('a -> ('b -> bool))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Map<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Filter",
          "isField": 0,
          "type": {
            "tName": "Map<'a, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> bool))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Map<'a, 'b>",
              "asm": "FSharp.Core"
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
              "tName": "('a -> ('b -> bool))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Map<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Collections.FSharpSet`1",
      "methods": [
        {
          "meName": "op_Subtraction",
          "isField": 0,
          "type": {
            "tName": "Set<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Set<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Set<'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "op_Addition",
          "isField": 0,
          "type": {
            "tName": "Set<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Set<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Set<'a>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Collections.SetModule",
      "methods": [
        {
          "meName": "Partition",
          "isField": 0,
          "type": {
            "tName": "(Set<'a> * Set<'a>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Set<'a>",
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
              "tName": "Set<'a>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'b",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Filter",
          "isField": 0,
          "type": {
            "tName": "Set<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Set<'a>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "System.Collections.ObjectModel.ReadOnlyCollection`1",
      "methods": []
    },
    {
      "moName": "System.Array",
      "methods": []
    },
    {
      "moName": "System.Collections.Generic.List`1+Enumerator",
      "methods": []
    },
    {
      "moName": "System.Collections.Generic.List`1",
      "methods": [
        {
          "meName": "RemoveAll",
          "isField": 0,
          "type": {
            "tName": "int",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Predicate<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Remove",
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
      "moName": "System.Collections.Generic.LinkedListNode`1",
      "methods": []
    },
    {
      "moName": "System.Collections.Generic.LinkedList`1+Enumerator",
      "methods": []
    },
    {
      "moName": "System.Collections.Generic.LinkedList`1",
      "methods": []
    },
    {
      "moName": "WebSharper.Collections.LinkedList",
      "methods": []
    },
    {
      "moName": "WebSharper.Grouping`2",
      "methods": []
    },
    {
      "moName": "WebSharper.FsComparer`1",
      "methods": []
    },
    {
      "moName": "WebSharper.ProjectionComparer`2",
      "methods": []
    },
    {
      "moName": "WebSharper.CompoundComparer`1",
      "methods": []
    },
    {
      "moName": "WebSharper.ReverseComparer`2",
      "methods": []
    },
    {
      "moName": "WebSharper.OrderedEnumerable`1",
      "methods": []
    },
    {
      "moName": "System.Linq.Enumerable",
      "methods": [
        {
          "meName": "JSElementAtOrDefault",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
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
          "meName": "JSFirstOrDefault",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "JSFirstOrDefault",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, bool>",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "JSLastOrDefault",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, bool>",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "JSSingleOrDefault",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, bool>",
              "asm": "netstandard"
            },
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Where",
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
              "tName": "Func<'a, int, bool>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Union",
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
            },
            {
              "tName": "IEqualityComparer<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ToDictionary",
          "isField": 0,
          "type": {
            "tName": "Dictionary<'b, 'c>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, 'b>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, 'c>",
              "asm": "netstandard"
            },
            {
              "tName": "IEqualityComparer<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "ToDictionary",
          "isField": 0,
          "type": {
            "tName": "Dictionary<'b, 'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, 'b>",
              "asm": "netstandard"
            },
            {
              "tName": "IEqualityComparer<'b>",
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
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, bool>",
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
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, int, bool>",
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
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Sum",
          "isField": 0,
          "type": {
            "tName": "Nullable<Double>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<Nullable<Double>>",
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
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, bool>",
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
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, int, bool>",
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
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Single",
          "isField": 0,
          "type": {
            "tName": "'a",
            "asm": ""
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, bool>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SequenceEqual",
          "isField": 0,
          "type": {
            "tName": "bool",
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
            },
            {
              "tName": "IEqualityComparer<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SelectMany",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'c>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, int, IEnumerable<'b>>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, 'b, 'c>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SelectMany",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'c>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, IEnumerable<'b>>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, 'b, 'c>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "SelectMany",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'b>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, int, IEnumerable<'b>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Select",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'b>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, int, 'b>",
              "asm": "netstandard"
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
          "meName": "Repeat",
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
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Range",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<int>",
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
          "meName": "OrderByDescending",
          "isField": 0,
          "type": {
            "tName": "Linq.IOrderedEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, 'b>",
              "asm": "netstandard"
            },
            {
              "tName": "IComparer<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "OrderBy",
          "isField": 0,
          "type": {
            "tName": "Linq.IOrderedEnumerable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, 'b>",
              "asm": "netstandard"
            },
            {
              "tName": "IComparer<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Min",
          "isField": 0,
          "type": {
            "tName": "Nullable<Double>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<Nullable<Double>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Max",
          "isField": 0,
          "type": {
            "tName": "Nullable<Double>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<Nullable<Double>>",
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
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, bool>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "LastPred",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, bool>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Join",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'d>",
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
              "tName": "Func<'a, 'c>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'b, 'c>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, 'b, 'd>",
              "asm": "netstandard"
            },
            {
              "tName": "IEqualityComparer<'c>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Intersect",
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
            },
            {
              "tName": "IEqualityComparer<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "GroupJoin",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'d>",
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
              "tName": "Func<'a, 'c>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'b, 'c>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, IEnumerable<'b>, 'd>",
              "asm": "netstandard"
            },
            {
              "tName": "IEqualityComparer<'c>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "GroupBy",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<'d>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, 'b>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, 'c>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'b, IEnumerable<'c>, 'd>",
              "asm": "netstandard"
            },
            {
              "tName": "IEqualityComparer<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "GroupBy",
          "isField": 0,
          "type": {
            "tName": "IEnumerable<Linq.IGrouping<'b, 'c>>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, 'b>",
              "asm": "netstandard"
            },
            {
              "tName": "Func<'a, 'c>",
              "asm": "netstandard"
            },
            {
              "tName": "IEqualityComparer<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Except",
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
            },
            {
              "tName": "IEqualityComparer<'a>",
              "asm": "netstandard"
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
            },
            {
              "tName": "IEqualityComparer<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "DefaultIfEmpty",
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
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Average",
          "isField": 0,
          "type": {
            "tName": "Nullable<Double>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<Nullable<Double>>",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Linq.QuerySource`2",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Linq.QueryBuilder",
      "methods": [
        {
          "meName": "AverageByNullableImpl",
          "isField": 0,
          "type": {
            "tName": "Nullable<'c>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Microsoft.FSharp.Linq.QuerySource<'a, 'b>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Nullable<'c>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "SumByNullableImpl",
          "isField": 0,
          "type": {
            "tName": "Nullable<'c>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "Microsoft.FSharp.Linq.QuerySource<'a, 'b>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> Nullable<'c>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "CheckThenBySource",
          "isField": 0,
          "type": {
            "tName": "Linq.IOrderedEnumerable<'a>",
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
      "moName": "Microsoft.FSharp.Core.ExtraTopLevelOperators",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Linq.QueryRunExtensions.HighPriority",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Linq.QueryRunExtensions.LowPriority",
      "methods": []
    }
  ],
  "jsModules": [
    {
      "jsName": "WebSharper.js",
      "code": "(function()\r\n{\r\n \"use strict\";\r\n var Global,WebSharper,Collections,BalancedTree,Tree,Pair,MapUtil,Obj,FSharpMap,Map,FSharpSet,Set,ListEnumerator,List,LinkedListEnumerator,LinkedList,Grouping,FsComparer,ProjectionComparer,CompoundComparer,ReverseComparer,OrderedEnumerable,Linq,Query,Arrays,Seq,Unchecked,List$1,IntelliFactory,Runtime,Enumerator,Operators,HashSet,Dictionary,Nullable,Option;\r\n Global=self;\r\n WebSharper=Global.WebSharper=Global.WebSharper||{};\r\n Collections=WebSharper.Collections=WebSharper.Collections||{};\r\n BalancedTree=Collections.BalancedTree=Collections.BalancedTree||{};\r\n Tree=BalancedTree.Tree=BalancedTree.Tree||{};\r\n Pair=Collections.Pair=Collections.Pair||{};\r\n MapUtil=Collections.MapUtil=Collections.MapUtil||{};\r\n Obj=WebSharper&&WebSharper.Obj;\r\n FSharpMap=Collections.FSharpMap=Collections.FSharpMap||{};\r\n Map=Collections.Map=Collections.Map||{};\r\n FSharpSet=Collections.FSharpSet=Collections.FSharpSet||{};\r\n Set=Collections.Set=Collections.Set||{};\r\n ListEnumerator=Collections.ListEnumerator=Collections.ListEnumerator||{};\r\n List=Collections.List=Collections.List||{};\r\n LinkedListEnumerator=Collections.LinkedListEnumerator=Collections.LinkedListEnumerator||{};\r\n LinkedList=Collections.LinkedList=Collections.LinkedList||{};\r\n Grouping=WebSharper.Grouping=WebSharper.Grouping||{};\r\n FsComparer=WebSharper.FsComparer=WebSharper.FsComparer||{};\r\n ProjectionComparer=WebSharper.ProjectionComparer=WebSharper.ProjectionComparer||{};\r\n CompoundComparer=WebSharper.CompoundComparer=WebSharper.CompoundComparer||{};\r\n ReverseComparer=WebSharper.ReverseComparer=WebSharper.ReverseComparer||{};\r\n OrderedEnumerable=WebSharper.OrderedEnumerable=WebSharper.OrderedEnumerable||{};\r\n Linq=WebSharper.Linq=WebSharper.Linq||{};\r\n Query=WebSharper.Query=WebSharper.Query||{};\r\n Arrays=WebSharper&&WebSharper.Arrays;\r\n Seq=WebSharper&&WebSharper.Seq;\r\n Unchecked=WebSharper&&WebSharper.Unchecked;\r\n List$1=WebSharper&&WebSharper.List;\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime=IntelliFactory&&IntelliFactory.Runtime;\r\n Enumerator=WebSharper&&WebSharper.Enumerator;\r\n Operators=WebSharper&&WebSharper.Operators;\r\n HashSet=Collections&&Collections.HashSet;\r\n Dictionary=Collections&&Collections.Dictionary;\r\n Nullable=WebSharper&&WebSharper.Nullable;\r\n Option=WebSharper&&WebSharper.Option;\r\n Tree.New=function(Node,Left,Right,Height,Count)\r\n {\r\n  return{\r\n   Node:Node,\r\n   Left:Left,\r\n   Right:Right,\r\n   Height:Height,\r\n   Count:Count\r\n  };\r\n };\r\n BalancedTree.TryFind=function(v,t)\r\n {\r\n  var x;\r\n  x=(BalancedTree.Lookup(v,t))[0];\r\n  return x==null?null:{\r\n   $:1,\r\n   $0:x.Node\r\n  };\r\n };\r\n BalancedTree.Contains=function(v,t)\r\n {\r\n  return!((BalancedTree.Lookup(v,t))[0]==null);\r\n };\r\n BalancedTree.Add=function(x,t)\r\n {\r\n  return BalancedTree.Put(function($1,$2)\r\n  {\r\n   return $2;\r\n  },x,t);\r\n };\r\n BalancedTree.Remove=function(k,src)\r\n {\r\n  var p,t,spine,d;\r\n  p=BalancedTree.Lookup(k,src);\r\n  t=p[0];\r\n  spine=p[1];\r\n  return t==null?src:t.Right==null?BalancedTree.Rebuild(spine,t.Left):t.Left==null?BalancedTree.Rebuild(spine,t.Right):BalancedTree.Rebuild(spine,(d=Arrays.ofSeq(Seq.append(BalancedTree.Enumerate(false,t.Left),BalancedTree.Enumerate(false,t.Right))),BalancedTree.Build(d,0,d.length-1)));\r\n };\r\n BalancedTree.Put=function(combine,k,t)\r\n {\r\n  var p,t$1;\r\n  p=BalancedTree.Lookup(k,t);\r\n  t$1=p[0];\r\n  return t$1==null?BalancedTree.Rebuild(p[1],BalancedTree.Branch(k,null,null)):BalancedTree.Rebuild(p[1],BalancedTree.Branch(combine(t$1.Node,k),t$1.Left,t$1.Right));\r\n };\r\n BalancedTree.Rebuild=function(spine,t)\r\n {\r\n  var t$1,i,$1,m,x,l,m$1,x$1,r,m$2;\r\n  function h(x$2)\r\n  {\r\n   return x$2==null?0:x$2.Height;\r\n  }\r\n  t$1=t;\r\n  for(i=0,$1=Arrays.length(spine)-1;i<=$1;i++){\r\n   t$1=(m=Arrays.get(spine,i),m[0]?(x=m[1],(l=m[2],h(t$1)>h(l)+1?h(t$1.Left)===h(t$1.Right)+1?(m$1=t$1.Left,BalancedTree.Branch(m$1.Node,BalancedTree.Branch(x,l,m$1.Left),BalancedTree.Branch(t$1.Node,m$1.Right,t$1.Right))):BalancedTree.Branch(t$1.Node,BalancedTree.Branch(x,l,t$1.Left),t$1.Right):BalancedTree.Branch(x,l,t$1))):(x$1=m[1],(r=m[2],h(t$1)>h(r)+1?h(t$1.Right)===h(t$1.Left)+1?(m$2=t$1.Right,BalancedTree.Branch(m$2.Node,BalancedTree.Branch(t$1.Node,t$1.Left,m$2.Left),BalancedTree.Branch(x$1,m$2.Right,r))):BalancedTree.Branch(t$1.Node,t$1.Left,BalancedTree.Branch(x$1,t$1.Right,r)):BalancedTree.Branch(x$1,t$1,r))));\r\n  }\r\n  return t$1;\r\n };\r\n BalancedTree.Lookup=function(k,t)\r\n {\r\n  var spine,t$1,loop,m;\r\n  spine=[];\r\n  t$1=t;\r\n  loop=true;\r\n  while(loop)\r\n   if(t$1==null)\r\n    loop=false;\r\n   else\r\n    {\r\n     m=Unchecked.Compare(k,t$1.Node);\r\n     m===0?loop=false:m===1?(spine.unshift([true,t$1.Node,t$1.Left]),t$1=t$1.Right):(spine.unshift([false,t$1.Node,t$1.Right]),t$1=t$1.Left);\r\n    }\r\n  return[t$1,spine];\r\n };\r\n BalancedTree.OfSeq=function(data)\r\n {\r\n  var a;\r\n  a=Arrays.ofSeq(Seq.distinct(data));\r\n  Arrays.sortInPlace(a);\r\n  return BalancedTree.Build(a,0,a.length-1);\r\n };\r\n BalancedTree.Build=function(data,min,max)\r\n {\r\n  var center,left,right;\r\n  return max-min+1<=0?null:(center=(min+max)/2>>0,(left=BalancedTree.Build(data,min,center-1),(right=BalancedTree.Build(data,center+1,max),BalancedTree.Branch(Arrays.get(data,center),left,right))));\r\n };\r\n BalancedTree.Enumerate=function(flip,t)\r\n {\r\n  function gen(t$1,spine)\r\n  {\r\n   var t$2;\r\n   while(true)\r\n    if(t$1==null)\r\n     return spine.$==1?{\r\n      $:1,\r\n      $0:[spine.$0[0],[spine.$0[1],spine.$1]]\r\n     }:null;\r\n    else\r\n     if(flip)\r\n      {\r\n       t$2=t$1;\r\n       t$1=t$2.Right;\r\n       spine=new List$1.T({\r\n        $:1,\r\n        $0:[t$2.Node,t$2.Left],\r\n        $1:spine\r\n       });\r\n      }\r\n     else\r\n      {\r\n       t$2=t$1;\r\n       t$1=t$2.Left;\r\n       spine=new List$1.T({\r\n        $:1,\r\n        $0:[t$2.Node,t$2.Right],\r\n        $1:spine\r\n       });\r\n      }\r\n  }\r\n  return Seq.unfold(function($1)\r\n  {\r\n   return gen($1[0],$1[1]);\r\n  },[t,List$1.T.Empty]);\r\n };\r\n BalancedTree.Branch=function(node,left,right)\r\n {\r\n  var a,b;\r\n  return Tree.New(node,left,right,1+(a=left==null?0:left.Height,(b=right==null?0:right.Height,Unchecked.Compare(a,b)===1?a:b)),1+(left==null?0:left.Count)+(right==null?0:right.Count));\r\n };\r\n Pair=Collections.Pair=Runtime.Class({\r\n  Equals:function(other)\r\n  {\r\n   return Unchecked.Equals(this.Key,other.Key);\r\n  },\r\n  GetHashCode:function()\r\n  {\r\n   return Unchecked.Hash(this.Key);\r\n  },\r\n  CompareTo0:function(other)\r\n  {\r\n   return Unchecked.Compare(this.Key,other.Key);\r\n  }\r\n },null,Pair);\r\n Pair.New=function(Key,Value)\r\n {\r\n  return new Pair({\r\n   Key:Key,\r\n   Value:Value\r\n  });\r\n };\r\n MapUtil.fromSeq=function(s)\r\n {\r\n  var a;\r\n  a=Arrays.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.collect(function(m)\r\n   {\r\n    return[Pair.New(m[0],m[1])];\r\n   },Seq.distinctBy(function(t)\r\n   {\r\n    return t[0];\r\n   },s));\r\n  }));\r\n  Arrays.sortInPlace(a);\r\n  return BalancedTree.Build(a,0,a.length-1);\r\n };\r\n FSharpMap=Collections.FSharpMap=Runtime.Class({\r\n  Equals:function(other)\r\n  {\r\n   return this.get_Count()===other.get_Count()&&Seq.forall2(Unchecked.Equals,this,other);\r\n  },\r\n  GetHashCode:function()\r\n  {\r\n   return Unchecked.Hash(Arrays.ofSeq(this));\r\n  },\r\n  GetEnumerator$1:function()\r\n  {\r\n   return Enumerator.Get(Seq.map(function(kv)\r\n   {\r\n    return{\r\n     K:kv.Key,\r\n     V:kv.Value\r\n    };\r\n   },BalancedTree.Enumerate(false,this.tree)));\r\n  },\r\n  TryFind:function(k)\r\n  {\r\n   var o;\r\n   o=BalancedTree.TryFind(Pair.New(k,void 0),this.tree);\r\n   return o==null?null:{\r\n    $:1,\r\n    $0:o.$0.Value\r\n   };\r\n  },\r\n  Remove:function(k)\r\n  {\r\n   return new FSharpMap.New$1(BalancedTree.Remove(Pair.New(k,void 0),this.tree));\r\n  },\r\n  get_Item:function(k)\r\n  {\r\n   var m;\r\n   m=this.TryFind(k);\r\n   return m==null?Operators.FailWith(\"The given key was not present in the dictionary.\"):m.$0;\r\n  },\r\n  get_IsEmpty:function()\r\n  {\r\n   return this.tree==null;\r\n  },\r\n  get_Count:function()\r\n  {\r\n   var tree;\r\n   tree=this.tree;\r\n   return tree==null?0:tree.Count;\r\n  },\r\n  TryGetValue:function(k,r)\r\n  {\r\n   var m;\r\n   m=this.TryFind(k);\r\n   return m!=null&&m.$==1&&(r.set(m.$0),true);\r\n  },\r\n  ContainsKey:function(k)\r\n  {\r\n   return BalancedTree.Contains(Pair.New(k,void 0),this.tree);\r\n  },\r\n  Add:function(k,v)\r\n  {\r\n   return new FSharpMap.New$1(BalancedTree.Add(Pair.New(k,v),this.tree));\r\n  },\r\n  get_Tree:function()\r\n  {\r\n   return this.tree;\r\n  },\r\n  GetEnumerator:function()\r\n  {\r\n   return this.GetEnumerator$1();\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return this.GetEnumerator$1();\r\n  },\r\n  CompareTo0:function(other)\r\n  {\r\n   return Seq.compareWith(Unchecked.Compare,this,other);\r\n  }\r\n },Obj,FSharpMap);\r\n FSharpMap.New=Runtime.Ctor(function(s)\r\n {\r\n  FSharpMap.New$1.call(this,MapUtil.fromSeq(s));\r\n },FSharpMap);\r\n FSharpMap.New$1=Runtime.Ctor(function(tree)\r\n {\r\n  Obj.New.call(this);\r\n  this.tree=tree;\r\n },FSharpMap);\r\n Map.Map=function(f,m)\r\n {\r\n  return new FSharpMap.New$1(BalancedTree.OfSeq(Seq.map(function(kv)\r\n  {\r\n   return Pair.New(kv.Key,f(kv.Key,kv.Value));\r\n  },BalancedTree.Enumerate(false,m.get_Tree()))));\r\n };\r\n Map.TryPick=function(f,m)\r\n {\r\n  return Seq.tryPick(function(kv)\r\n  {\r\n   return f(kv.K,kv.V);\r\n  },m);\r\n };\r\n Map.TryFindKey=function(f,m)\r\n {\r\n  return Seq.tryPick(function(kv)\r\n  {\r\n   return f(kv.K,kv.V)?{\r\n    $:1,\r\n    $0:kv.K\r\n   }:null;\r\n  },m);\r\n };\r\n Map.TryFind=function(k,m)\r\n {\r\n  return m.TryFind(k);\r\n };\r\n Map.ToSeq=function(m)\r\n {\r\n  return Seq.map(function(kv)\r\n  {\r\n   return[kv.Key,kv.Value];\r\n  },BalancedTree.Enumerate(false,m.get_Tree()));\r\n };\r\n Map.Pick=function(f,m)\r\n {\r\n  return Seq.pick(function(kv)\r\n  {\r\n   return f(kv.K,kv.V);\r\n  },m);\r\n };\r\n Map.Partition=function(f,m)\r\n {\r\n  var p,data,data$1;\r\n  p=Arrays.partition(function(kv)\r\n  {\r\n   return f(kv.Key,kv.Value);\r\n  },Arrays.ofSeq(BalancedTree.Enumerate(false,m.get_Tree())));\r\n  return[new FSharpMap.New$1((data=p[0],BalancedTree.Build(data,0,data.length-1))),new FSharpMap.New$1((data$1=p[1],BalancedTree.Build(data$1,0,data$1.length-1)))];\r\n };\r\n Map.OfArray=function(a)\r\n {\r\n  return new FSharpMap.New$1(BalancedTree.OfSeq(Seq.map(function($1)\r\n  {\r\n   return Pair.New($1[0],$1[1]);\r\n  },a)));\r\n };\r\n Map.Iterate=function(f,m)\r\n {\r\n  Seq.iter(function(kv)\r\n  {\r\n   f(kv.K,kv.V);\r\n  },m);\r\n };\r\n Map.ForAll=function(f,m)\r\n {\r\n  return Seq.forall(function(kv)\r\n  {\r\n   return f(kv.K,kv.V);\r\n  },m);\r\n };\r\n Map.FoldBack=function(f,m,s)\r\n {\r\n  return Seq.fold(function(s$1,kv)\r\n  {\r\n   return f(kv.Key,kv.Value,s$1);\r\n  },s,BalancedTree.Enumerate(true,m.get_Tree()));\r\n };\r\n Map.Fold=function(f,s,m)\r\n {\r\n  return Seq.fold(function(s$1,kv)\r\n  {\r\n   return f(s$1,kv.Key,kv.Value);\r\n  },s,BalancedTree.Enumerate(false,m.get_Tree()));\r\n };\r\n Map.FindKey=function(f,m)\r\n {\r\n  return Seq.pick(function(kv)\r\n  {\r\n   return f(kv.K,kv.V)?{\r\n    $:1,\r\n    $0:kv.K\r\n   }:null;\r\n  },m);\r\n };\r\n Map.Filter=function(f,m)\r\n {\r\n  var d;\r\n  return new FSharpMap.New$1((d=Arrays.ofSeq(Seq.filter(function(kv)\r\n  {\r\n   return f(kv.Key,kv.Value);\r\n  },BalancedTree.Enumerate(false,m.get_Tree()))),BalancedTree.Build(d,0,d.length-1)));\r\n };\r\n Map.Exists=function(f,m)\r\n {\r\n  return Seq.exists(function(kv)\r\n  {\r\n   return f(kv.K,kv.V);\r\n  },m);\r\n };\r\n FSharpSet=Collections.FSharpSet=Runtime.Class({\r\n  Equals:function(other)\r\n  {\r\n   return this.get_Count()===other.get_Count()&&Seq.forall2(Unchecked.Equals,this,other);\r\n  },\r\n  GetHashCode:function()\r\n  {\r\n   return -1741749453+Unchecked.Hash(Arrays.ofSeq(this));\r\n  },\r\n  GetEnumerator$1:function()\r\n  {\r\n   return Enumerator.Get(BalancedTree.Enumerate(false,this.tree));\r\n  },\r\n  Remove:function(v)\r\n  {\r\n   return new FSharpSet.New$1(BalancedTree.Remove(v,this.tree));\r\n  },\r\n  get_MinimumElement:function()\r\n  {\r\n   return Seq.head(BalancedTree.Enumerate(false,this.tree));\r\n  },\r\n  get_MaximumElement:function()\r\n  {\r\n   return Seq.head(BalancedTree.Enumerate(true,this.tree));\r\n  },\r\n  IsSupersetOf:function(s)\r\n  {\r\n   var $this;\r\n   $this=this;\r\n   return Seq.forall(function(a)\r\n   {\r\n    return $this.Contains(a);\r\n   },s);\r\n  },\r\n  IsSubsetOf:function(s)\r\n  {\r\n   return Seq.forall(function(a)\r\n   {\r\n    return s.Contains(a);\r\n   },this);\r\n  },\r\n  IsProperSupersetOf:function(s)\r\n  {\r\n   return this.IsSupersetOf(s)&&this.get_Count()>s.get_Count();\r\n  },\r\n  IsProperSubsetOf:function(s)\r\n  {\r\n   return this.IsSubsetOf(s)&&this.get_Count()<s.get_Count();\r\n  },\r\n  get_Tree:function()\r\n  {\r\n   return this.tree;\r\n  },\r\n  get_IsEmpty:function()\r\n  {\r\n   return this.tree==null;\r\n  },\r\n  get_Count:function()\r\n  {\r\n   var tree;\r\n   tree=this.tree;\r\n   return tree==null?0:tree.Count;\r\n  },\r\n  Contains:function(v)\r\n  {\r\n   return BalancedTree.Contains(v,this.tree);\r\n  },\r\n  Add:function(x)\r\n  {\r\n   return new FSharpSet.New$1(BalancedTree.Add(x,this.tree));\r\n  },\r\n  sub:function(x)\r\n  {\r\n   return Set.Filter(function(x$1)\r\n   {\r\n    return!x.Contains(x$1);\r\n   },this);\r\n  },\r\n  add:function(x)\r\n  {\r\n   return new FSharpSet.New$1(BalancedTree.OfSeq(Seq.append(this,x)));\r\n  },\r\n  CompareTo0:function(other)\r\n  {\r\n   return Seq.compareWith(Unchecked.Compare,this,other);\r\n  },\r\n  GetEnumerator:function()\r\n  {\r\n   return this.GetEnumerator$1();\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return this.GetEnumerator$1();\r\n  }\r\n },Obj,FSharpSet);\r\n FSharpSet.op_Subtraction=function(x,y)\r\n {\r\n  return Set.Filter(function(x$1)\r\n  {\r\n   return!y.Contains(x$1);\r\n  },x);\r\n };\r\n FSharpSet.op_Addition=function(x,y)\r\n {\r\n  return new FSharpSet.New$1(BalancedTree.OfSeq(Seq.append(x,y)));\r\n };\r\n FSharpSet.New=Runtime.Ctor(function(s)\r\n {\r\n  FSharpSet.New$1.call(this,BalancedTree.OfSeq(s));\r\n },FSharpSet);\r\n FSharpSet.New$1=Runtime.Ctor(function(tree)\r\n {\r\n  Obj.New.call(this);\r\n  this.tree=tree;\r\n },FSharpSet);\r\n Set.Partition=function(f,a)\r\n {\r\n  var p;\r\n  p=Arrays.partition(f,Arrays.ofSeq(a));\r\n  return[new FSharpSet.New$1(BalancedTree.OfSeq(p[0])),new FSharpSet.New$1(BalancedTree.OfSeq(p[1]))];\r\n };\r\n Set.FoldBack=function(f,a,s)\r\n {\r\n  return Seq.fold(function($1,$2)\r\n  {\r\n   return f($2,$1);\r\n  },s,BalancedTree.Enumerate(true,a.get_Tree()));\r\n };\r\n Set.Filter=function(f,s)\r\n {\r\n  var data;\r\n  return new FSharpSet.New$1((data=Arrays.ofSeq(Seq.filter(f,s)),BalancedTree.Build(data,0,data.length-1)));\r\n };\r\n ListEnumerator=Collections.ListEnumerator=Runtime.Class({\r\n  get_Current:function()\r\n  {\r\n   return Arrays.get(this.arr,this.i);\r\n  },\r\n  MoveNext$1:function()\r\n  {\r\n   this.i=this.i+1;\r\n   return this.i<Arrays.length(this.arr);\r\n  },\r\n  Dispose:Global.ignore,\r\n  Current:function()\r\n  {\r\n   return Arrays.get(this.arr,this.i);\r\n  },\r\n  Reset:function()\r\n  {\r\n   Operators.FailWith(\"IEnumerator.Reset not supported\");\r\n  },\r\n  Current0:function()\r\n  {\r\n   return Arrays.get(this.arr,this.i);\r\n  },\r\n  MoveNext:function()\r\n  {\r\n   return this.MoveNext$1();\r\n  }\r\n },Obj,ListEnumerator);\r\n ListEnumerator.New=Runtime.Ctor(function(arr)\r\n {\r\n  Obj.New.call(this);\r\n  this.arr=arr;\r\n  this.i=-1;\r\n },ListEnumerator);\r\n List=Collections.List=Runtime.Class({\r\n  GetEnumerator:function()\r\n  {\r\n   return Enumerator.Get(this);\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return Enumerator.Get0(this);\r\n  }\r\n },null,List);\r\n List.RemoveAll=function($this,pred)\r\n {\r\n  var removed,i,j,_delete;\r\n  removed=0;\r\n  i=0;\r\n  while(i<Arrays.length($this))\r\n   if(pred($this[i]))\r\n    {\r\n     j=i+1;\r\n     while(j<Arrays.length($this)&&pred($this[j]))\r\n      j=j+1;\r\n     removed=removed+j-i;\r\n     _delete=j-i;\r\n     $this.splice.apply($this,[i,_delete]);\r\n    }\r\n   else\r\n    i=i+1;\r\n  return removed;\r\n };\r\n List.Remove=function($this,item)\r\n {\r\n  var m;\r\n  m=Arrays.findIndexBound($this,0,Arrays.length($this),item==null?function(v)\r\n  {\r\n   return v==null;\r\n  }:function(a)\r\n  {\r\n   return Unchecked.Equals(item,a);\r\n  });\r\n  return m===-1?false:($this.splice.apply($this,[m,1]),true);\r\n };\r\n LinkedListEnumerator=Collections.LinkedListEnumerator=Runtime.Class({\r\n  Reset:Global.ignore,\r\n  Dispose:Global.ignore,\r\n  MoveNext:function()\r\n  {\r\n   this.c=this.c.n;\r\n   return!Unchecked.Equals(this.c,null);\r\n  },\r\n  Current0:function()\r\n  {\r\n   return this.c.v;\r\n  },\r\n  Current:function()\r\n  {\r\n   return this.c.v;\r\n  }\r\n },Obj,LinkedListEnumerator);\r\n LinkedListEnumerator.New=Runtime.Ctor(function(l)\r\n {\r\n  Obj.New.call(this);\r\n  this.c=l;\r\n },LinkedListEnumerator);\r\n LinkedList=Collections.LinkedList=Runtime.Class({\r\n  RemoveLast:function()\r\n  {\r\n   this.Remove$1(this.p);\r\n  },\r\n  RemoveFirst:function()\r\n  {\r\n   this.Remove$1(this.n);\r\n  },\r\n  Remove:function(value)\r\n  {\r\n   var node;\r\n   node=this.Find(value);\r\n   return Unchecked.Equals(node,null)?false:(this.Remove$1(node),true);\r\n  },\r\n  Remove$1:function(node)\r\n  {\r\n   var before,after;\r\n   before=node.p;\r\n   after=node.n;\r\n   Unchecked.Equals(before,null)?this.n=after:before.n=after;\r\n   Unchecked.Equals(after,null)?this.p=before:after.p=before;\r\n   this.c=this.c-1;\r\n  },\r\n  GetEnumerator$1:function()\r\n  {\r\n   return new LinkedListEnumerator.New(this);\r\n  },\r\n  FindLast:function(value)\r\n  {\r\n   var node,notFound;\r\n   node=this.p;\r\n   notFound=true;\r\n   while(notFound&&!Unchecked.Equals(node,null))\r\n    if(node.v==value)\r\n     notFound=false;\r\n    else\r\n     node=node.p;\r\n   return notFound?null:node;\r\n  },\r\n  Find:function(value)\r\n  {\r\n   var node,notFound;\r\n   node=this.n;\r\n   notFound=true;\r\n   while(notFound&&!Unchecked.Equals(node,null))\r\n    if(node.v==value)\r\n     notFound=false;\r\n    else\r\n     node=node.n;\r\n   return notFound?null:node;\r\n  },\r\n  Contains:function(value)\r\n  {\r\n   var found,node;\r\n   found=false;\r\n   node=this.n;\r\n   while(!Unchecked.Equals(node,null)&&!found)\r\n    if(node.v==value)\r\n     found=true;\r\n    else\r\n     node=node.n;\r\n   return found;\r\n  },\r\n  Clear:function()\r\n  {\r\n   this.c=0;\r\n   this.n=null;\r\n   this.p=null;\r\n  },\r\n  AddLast:function(value)\r\n  {\r\n   var node;\r\n   return this.c===0?(node={\r\n    p:null,\r\n    n:null,\r\n    v:value\r\n   },(this.n=node,this.p=this.n,this.c=1,node)):this.AddAfter(this.p,value);\r\n  },\r\n  AddFirst:function(value)\r\n  {\r\n   var node;\r\n   return this.c===0?(node={\r\n    p:null,\r\n    n:null,\r\n    v:value\r\n   },(this.n=node,this.p=this.n,this.c=1,node)):this.AddBefore(this.n,value);\r\n  },\r\n  AddBefore:function(before,value)\r\n  {\r\n   var after,node;\r\n   after=before.p;\r\n   node={\r\n    p:after,\r\n    n:before,\r\n    v:value\r\n   };\r\n   Unchecked.Equals(before.p,null)?this.n=node:void 0;\r\n   before.p=node;\r\n   !Unchecked.Equals(after,null)?after.n=node:void 0;\r\n   this.c=this.c+1;\r\n   return node;\r\n  },\r\n  AddAfter:function(after,value)\r\n  {\r\n   var before,node;\r\n   before=after.n;\r\n   node={\r\n    p:after,\r\n    n:before,\r\n    v:value\r\n   };\r\n   Unchecked.Equals(after.n,null)?this.p=node:void 0;\r\n   after.n=node;\r\n   !Unchecked.Equals(before,null)?before.p=node:void 0;\r\n   this.c=this.c+1;\r\n   return node;\r\n  },\r\n  GetEnumerator:function()\r\n  {\r\n   return this.GetEnumerator$1();\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return this.GetEnumerator$1();\r\n  }\r\n },Obj,LinkedList);\r\n LinkedList.New=Runtime.Ctor(function()\r\n {\r\n  LinkedList.New$1.call(this,[]);\r\n },LinkedList);\r\n LinkedList.New$1=Runtime.Ctor(function(coll)\r\n {\r\n  var ie,node;\r\n  Obj.New.call(this);\r\n  this.c=0;\r\n  this.n=null;\r\n  this.p=null;\r\n  ie=Enumerator.Get(coll);\r\n  ie.MoveNext()?(this.n={\r\n   p:null,\r\n   n:null,\r\n   v:ie.Current()\r\n  },this.p=this.n,this.c=1):void 0;\r\n  while(ie.MoveNext())\r\n   {\r\n    node={\r\n     p:this.p,\r\n     n:null,\r\n     v:ie.Current()\r\n    };\r\n    this.p.n=node;\r\n    this.p=node;\r\n    this.c=this.c+1;\r\n   }\r\n },LinkedList);\r\n Grouping=WebSharper.Grouping=Runtime.Class({\r\n  System_Linq_IGrouping_2$get_Key:function()\r\n  {\r\n   return this.k;\r\n  },\r\n  GetEnumerator0:function()\r\n  {\r\n   return Enumerator.Get0(this.v);\r\n  },\r\n  GetEnumerator:function()\r\n  {\r\n   return Enumerator.Get(this.v);\r\n  }\r\n },Obj,Grouping);\r\n Grouping.New=Runtime.Ctor(function(k,v)\r\n {\r\n  Obj.New.call(this);\r\n  this.k=k;\r\n  this.v=v;\r\n },Grouping);\r\n FsComparer=WebSharper.FsComparer=Runtime.Class({\r\n  Compare:function(x,y)\r\n  {\r\n   return Unchecked.Compare(x,y);\r\n  }\r\n },Obj,FsComparer);\r\n FsComparer.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },FsComparer);\r\n ProjectionComparer=WebSharper.ProjectionComparer=Runtime.Class({\r\n  Compare:function(x,y)\r\n  {\r\n   return this.primary.Compare(this.projection(x),this.projection(y));\r\n  }\r\n },Obj,ProjectionComparer);\r\n ProjectionComparer.New=Runtime.Ctor(function(primary,projection)\r\n {\r\n  Obj.New.call(this);\r\n  this.primary=primary;\r\n  this.projection=projection;\r\n },ProjectionComparer);\r\n CompoundComparer=WebSharper.CompoundComparer=Runtime.Class({\r\n  Compare:function(x,y)\r\n  {\r\n   var m;\r\n   m=this.primary.Compare(x,y);\r\n   return m===0?this.secondary.Compare(x,y):m;\r\n  }\r\n },Obj,CompoundComparer);\r\n CompoundComparer.New=Runtime.Ctor(function(primary,secondary)\r\n {\r\n  Obj.New.call(this);\r\n  this.primary=primary;\r\n  this.secondary=secondary;\r\n },CompoundComparer);\r\n ReverseComparer=WebSharper.ReverseComparer=Runtime.Class({\r\n  Compare:function(x,y)\r\n  {\r\n   return this.primary.Compare(this.projection(y),this.projection(x));\r\n  }\r\n },Obj,ReverseComparer);\r\n ReverseComparer.New=Runtime.Ctor(function(primary,projection)\r\n {\r\n  Obj.New.call(this);\r\n  this.primary=primary;\r\n  this.projection=projection;\r\n },ReverseComparer);\r\n OrderedEnumerable=WebSharper.OrderedEnumerable=Runtime.Class({\r\n  GetEnumerator0:function()\r\n  {\r\n   return Enumerator.Get(this);\r\n  },\r\n  GetEnumerator:function()\r\n  {\r\n   var $this,a;\r\n   $this=this;\r\n   a=Arrays.ofSeq(this.source);\r\n   Arrays.sortInPlaceWith(function($1,$2)\r\n   {\r\n    return $this.primary.Compare($1,$2);\r\n   },a);\r\n   return Enumerator.Get(a);\r\n  },\r\n  System_Linq_IOrderedEnumerable_1$CreateOrderedEnumerable:function(keySelector,secondary,descending)\r\n  {\r\n   return new OrderedEnumerable.New(this.source,new CompoundComparer.New(this.primary,descending?new ReverseComparer.New(secondary,keySelector):new ProjectionComparer.New(secondary,keySelector)));\r\n  }\r\n },Obj,OrderedEnumerable);\r\n OrderedEnumerable.New=Runtime.Ctor(function(source,primary)\r\n {\r\n  Obj.New.call(this);\r\n  this.source=source;\r\n  this.primary=primary;\r\n },OrderedEnumerable);\r\n Linq.ElementAtOrDefault=function(_this,index,defaultValue)\r\n {\r\n  try\r\n  {\r\n   return Seq.nth(index,_this);\r\n  }\r\n  catch(m)\r\n  {\r\n   return defaultValue;\r\n  }\r\n };\r\n Linq.FirstOrDefault=function(_this,defaultValue)\r\n {\r\n  var e;\r\n  e=Enumerator.Get(_this);\r\n  try\r\n  {\r\n   return e.MoveNext()?e.Current():defaultValue;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Linq.FirstOrDefault$1=function(_this,predicate,defaultValue)\r\n {\r\n  var m;\r\n  m=Seq.tryFind(predicate,_this);\r\n  return m==null?defaultValue:m.$0;\r\n };\r\n Linq.LastOrDefault=function(_this,predicate,defaultValue)\r\n {\r\n  var m;\r\n  m=Linq.LastPred(_this,predicate);\r\n  return m==null?defaultValue:m.$0;\r\n };\r\n Linq.SingleOrDefault=function(_this,predicate,defaultValue)\r\n {\r\n  var e,found;\r\n  e=Enumerator.Get(_this);\r\n  try\r\n  {\r\n   found=null;\r\n   while(e.MoveNext())\r\n    if(predicate(e.Current()))\r\n     if(found!=null&&found.$==1)\r\n      Operators.InvalidOp(\"Sequence contains more than one element\");\r\n     else\r\n      found={\r\n       $:1,\r\n       $0:e.Current()\r\n      };\r\n   return found==null?defaultValue:found.$0;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Linq.Where=function(_this,predicate)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Seq.enumUsing(Enumerator.Get(_this),function(e)\r\n   {\r\n    var i;\r\n    i=0;\r\n    return Seq.enumWhile(function()\r\n    {\r\n     return e.MoveNext();\r\n    },Seq.delay(function()\r\n    {\r\n     return Seq.append(predicate(e.Current(),i)?[e.Current()]:[],Seq.delay(function()\r\n     {\r\n      i=i+1;\r\n      return[];\r\n     }));\r\n    }));\r\n   });\r\n  });\r\n };\r\n Linq.Union=function(_this,second,comparer)\r\n {\r\n  var tbl,e;\r\n  tbl=new HashSet.New(_this,comparer);\r\n  e=Enumerator.Get(second);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    tbl.Add(e.Current());\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n  return tbl;\r\n };\r\n Linq.ToDictionary=function(_this,keySelector,elementSelector,comparer)\r\n {\r\n  var d;\r\n  d=new Dictionary.New$3(comparer);\r\n  Seq.iter(function(x)\r\n  {\r\n   d.Add(keySelector(x),elementSelector(x));\r\n  },_this);\r\n  return d;\r\n };\r\n Linq.ToDictionary$1=function(_this,keySelector,comparer)\r\n {\r\n  var d;\r\n  d=new Dictionary.New$3(comparer);\r\n  Seq.iter(function(x)\r\n  {\r\n   d.Add(keySelector(x),x);\r\n  },_this);\r\n  return d;\r\n };\r\n Linq.TakeWhile=function(_this,predicate)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Seq.enumUsing(Enumerator.Get(_this),function(e)\r\n   {\r\n    return Seq.enumWhile(function()\r\n    {\r\n     return e.MoveNext()&&predicate(e.Current());\r\n    },Seq.delay(function()\r\n    {\r\n     return[e.Current()];\r\n    }));\r\n   });\r\n  });\r\n };\r\n Linq.TakeWhile$1=function(_this,predicate)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Seq.enumUsing(Enumerator.Get(_this),function(e)\r\n   {\r\n    var i;\r\n    i=0;\r\n    return Seq.enumWhile(function()\r\n    {\r\n     return e.MoveNext()&&predicate(e.Current(),i);\r\n    },Seq.delay(function()\r\n    {\r\n     i=i+1;\r\n     return[e.Current()];\r\n    }));\r\n   });\r\n  });\r\n };\r\n Linq.Take=function(_this,count)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Seq.enumUsing(Enumerator.Get(_this),function(e)\r\n   {\r\n    var i;\r\n    i=0;\r\n    return Seq.enumWhile(function()\r\n    {\r\n     return i<count&&e.MoveNext();\r\n    },Seq.delay(function()\r\n    {\r\n     i=i+1;\r\n     return[e.Current()];\r\n    }));\r\n   });\r\n  });\r\n };\r\n Linq.Sum=function(_this)\r\n {\r\n  var s;\r\n  s=Seq.choose(function(x)\r\n  {\r\n   return x!=null?{\r\n    $:1,\r\n    $0:Nullable.get(x)\r\n   }:null;\r\n  },_this);\r\n  return Seq.isEmpty(s)?null:Seq.sum(s);\r\n };\r\n Linq.SkipWhile=function(_this,predicate)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Seq.enumUsing(Enumerator.Get(_this),function(e)\r\n   {\r\n    var predWasTrue;\r\n    predWasTrue=true;\r\n    return Seq.append(Seq.enumWhile(function()\r\n    {\r\n     return predWasTrue&&e.MoveNext();\r\n    },Seq.delay(function()\r\n    {\r\n     return!predicate(e.Current())?(predWasTrue=false,[]):[];\r\n    })),Seq.delay(function()\r\n    {\r\n     return!predWasTrue?Seq.append([e.Current()],Seq.delay(function()\r\n     {\r\n      return Seq.enumWhile(function()\r\n      {\r\n       return e.MoveNext();\r\n      },Seq.delay(function()\r\n      {\r\n       return[e.Current()];\r\n      }));\r\n     })):[];\r\n    }));\r\n   });\r\n  });\r\n };\r\n Linq.SkipWhile$1=function(_this,predicate)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Seq.enumUsing(Enumerator.Get(_this),function(e)\r\n   {\r\n    var i,predWasTrue;\r\n    i=0;\r\n    predWasTrue=true;\r\n    return Seq.append(Seq.enumWhile(function()\r\n    {\r\n     return predWasTrue&&e.MoveNext();\r\n    },Seq.delay(function()\r\n    {\r\n     return predicate(e.Current(),i)?(i=i+1,[]):(predWasTrue=false,[]);\r\n    })),Seq.delay(function()\r\n    {\r\n     return!predWasTrue?Seq.append([e.Current()],Seq.delay(function()\r\n     {\r\n      return Seq.enumWhile(function()\r\n      {\r\n       return e.MoveNext();\r\n      },Seq.delay(function()\r\n      {\r\n       return[e.Current()];\r\n      }));\r\n     })):[];\r\n    }));\r\n   });\r\n  });\r\n };\r\n Linq.Skip=function(_this,count)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Seq.enumUsing(Enumerator.Get(_this),function(e)\r\n   {\r\n    var i;\r\n    i=0;\r\n    return Seq.append(Seq.enumWhile(function()\r\n    {\r\n     return i<count&&e.MoveNext();\r\n    },Seq.delay(function()\r\n    {\r\n     i=i+1;\r\n     return[];\r\n    })),Seq.delay(function()\r\n    {\r\n     return Seq.enumWhile(function()\r\n     {\r\n      return e.MoveNext();\r\n     },Seq.delay(function()\r\n     {\r\n      return[e.Current()];\r\n     }));\r\n    }));\r\n   });\r\n  });\r\n };\r\n Linq.Single=function(_this,predicate)\r\n {\r\n  var x;\r\n  function f(state,cur)\r\n  {\r\n   return predicate(cur)?state!=null?Operators.InvalidOp(\"Sequence contains more than one matching element\"):{\r\n    $:1,\r\n    $0:cur\r\n   }:state;\r\n  }\r\n  x=(((Runtime.Curried3(Seq.fold))(f))(null))(_this);\r\n  return x!=null&&x.$==1?x.$0:Operators.InvalidOp(\"Sequence contains no elements\");\r\n };\r\n Linq.SequenceEqual=function(_this,second,comparer)\r\n {\r\n  var e1,$1,e2;\r\n  e1=Enumerator.Get(_this);\r\n  try\r\n  {\r\n   e2=Enumerator.Get(_this);\r\n   try\r\n   {\r\n    $1=function()\r\n    {\r\n     while(true)\r\n      if(e1.MoveNext())\r\n      {\r\n       if(!(e2.MoveNext()&&comparer.CEquals(e1.Current(),e2.Current())))\r\n        return false;\r\n      }\r\n      else\r\n       return!e2.MoveNext();\r\n    }();\r\n   }\r\n   finally\r\n   {\r\n    if(typeof e2==\"object\"&&\"Dispose\"in e2)\r\n     e2.Dispose();\r\n   }\r\n   return $1;\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e1==\"object\"&&\"Dispose\"in e1)\r\n    e1.Dispose();\r\n  }\r\n };\r\n Linq.SelectMany=function(_this,selector,collectionSelector)\r\n {\r\n  function m(t,cs)\r\n  {\r\n   return Seq.map(function(c)\r\n   {\r\n    return collectionSelector(t,c);\r\n   },cs);\r\n  }\r\n  return Seq.collect(function($1)\r\n  {\r\n   return m($1[0],$1[1]);\r\n  },Seq.mapi(function(i,t)\r\n  {\r\n   return[t,selector(t,i)];\r\n  },_this));\r\n };\r\n Linq.SelectMany$1=function(_this,selector,collectionSelector)\r\n {\r\n  function m(t,cs)\r\n  {\r\n   return Seq.map(function(c)\r\n   {\r\n    return collectionSelector(t,c);\r\n   },cs);\r\n  }\r\n  return Seq.collect(function($1)\r\n  {\r\n   return m($1[0],$1[1]);\r\n  },Seq.map(function(t)\r\n  {\r\n   return[t,selector(t)];\r\n  },_this));\r\n };\r\n Linq.SelectMany$2=function(_this,selector)\r\n {\r\n  return Seq.concat(Seq.mapi(function($1,$2)\r\n  {\r\n   return selector($2,$1);\r\n  },_this));\r\n };\r\n Linq.Select=function(_this,selector)\r\n {\r\n  return Seq.mapi(function($1,$2)\r\n  {\r\n   return selector($2,$1);\r\n  },_this);\r\n };\r\n Linq.Reverse=function(_this)\r\n {\r\n  return Arrays.ofSeq(_this).slice().reverse();\r\n };\r\n Linq.Repeat=function(element,count)\r\n {\r\n  return Seq.init(count,function()\r\n  {\r\n   return element;\r\n  });\r\n };\r\n Linq.Range=function(start,count)\r\n {\r\n  return Seq.init(count,function(y)\r\n  {\r\n   return start+y;\r\n  });\r\n };\r\n Linq.OrderByDescending=function(_this,keySelector,comparer)\r\n {\r\n  return new OrderedEnumerable.New(_this,new ReverseComparer.New(comparer,keySelector));\r\n };\r\n Linq.OrderBy=function(_this,keySelector,comparer)\r\n {\r\n  return new OrderedEnumerable.New(_this,new ProjectionComparer.New(comparer,keySelector));\r\n };\r\n Linq.Min=function(_this)\r\n {\r\n  var s;\r\n  s=Seq.choose(function(x)\r\n  {\r\n   return x!=null?{\r\n    $:1,\r\n    $0:Nullable.get(x)\r\n   }:null;\r\n  },_this);\r\n  return Seq.isEmpty(s)?null:Seq.min(s);\r\n };\r\n Linq.Max=function(_this)\r\n {\r\n  var s;\r\n  s=Seq.choose(function(x)\r\n  {\r\n   return x!=null?{\r\n    $:1,\r\n    $0:Nullable.get(x)\r\n   }:null;\r\n  },_this);\r\n  return Seq.isEmpty(s)?null:Seq.max(s);\r\n };\r\n Linq.Last=function(_this,predicate)\r\n {\r\n  var m;\r\n  m=Linq.LastPred(_this,predicate);\r\n  return m==null?Operators.InvalidOp(\"Sequence contains no matching element\"):m.$0;\r\n };\r\n Linq.LastPred=function(_this,predicate)\r\n {\r\n  function f(acc,elt)\r\n  {\r\n   return predicate(elt)?{\r\n    $:1,\r\n    $0:elt\r\n   }:acc;\r\n  }\r\n  return(((Runtime.Curried3(Seq.fold))(f))(null))(_this);\r\n };\r\n Linq.Join=function(outer,inner,outerKeySelector,innerKeySelector,resultSelector,comparer)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   var t,a,e;\r\n   t=new Dictionary.New$3(comparer);\r\n   a=Arrays.ofSeq(Seq.delay(function()\r\n   {\r\n    return Seq.collect(function(o)\r\n    {\r\n     var k,o$1,pair;\r\n     k=outerKeySelector(o);\r\n     return(o$1=null,[t.TryGetValue(k,{\r\n      get:function()\r\n      {\r\n       return o$1;\r\n      },\r\n      set:function(v)\r\n      {\r\n       o$1=v;\r\n      }\r\n     }),o$1])[0]?[]:(pair=[o,[]],(t.Add(k,pair),[pair]));\r\n    },outer);\r\n   }));\r\n   e=Enumerator.Get(inner);\r\n   try\r\n   {\r\n    while(e.MoveNext())\r\n     (function()\r\n     {\r\n      var i,m,o;\r\n      i=e.Current();\r\n      m=(o=null,[t.TryGetValue(innerKeySelector(i),{\r\n       get:function()\r\n       {\r\n        return o;\r\n       },\r\n       set:function(v)\r\n       {\r\n        o=v;\r\n       }\r\n      }),o]);\r\n      return m[0]?void m[1][1].push(i):null;\r\n     }());\r\n   }\r\n   finally\r\n   {\r\n    if(typeof e==\"object\"&&\"Dispose\"in e)\r\n     e.Dispose();\r\n   }\r\n   return Arrays.ofSeq(Seq.delay(function()\r\n   {\r\n    return Seq.collect(function(m)\r\n    {\r\n     var o;\r\n     o=m[0];\r\n     return Seq.map(function(i)\r\n     {\r\n      return resultSelector(o,i);\r\n     },m[1]);\r\n    },a);\r\n   }));\r\n  });\r\n };\r\n Linq.Intersect=function(_this,second,comparer)\r\n {\r\n  var t1;\r\n  t1=new HashSet.New(_this,comparer);\r\n  return Seq.delay(function()\r\n  {\r\n   var t2;\r\n   t2=new HashSet.New$1(comparer);\r\n   return Seq.collect(function(x)\r\n   {\r\n    return t1.Contains(x)&&t2.Add(x)?[x]:[];\r\n   },second);\r\n  });\r\n };\r\n Linq.GroupJoin=function(outer,inner,outerKeySelector,innerKeySelector,resultSelector,comparer)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   var t,a,e;\r\n   t=new Dictionary.New$3(comparer);\r\n   a=Arrays.ofSeq(Seq.delay(function()\r\n   {\r\n    return Seq.collect(function(o)\r\n    {\r\n     var k,o$1,pair;\r\n     k=outerKeySelector(o);\r\n     return(o$1=null,[t.TryGetValue(k,{\r\n      get:function()\r\n      {\r\n       return o$1;\r\n      },\r\n      set:function(v)\r\n      {\r\n       o$1=v;\r\n      }\r\n     }),o$1])[0]?[]:(pair=[o,[]],(t.Add(k,pair),[pair]));\r\n    },outer);\r\n   }));\r\n   e=Enumerator.Get(inner);\r\n   try\r\n   {\r\n    while(e.MoveNext())\r\n     (function()\r\n     {\r\n      var i,m,o;\r\n      i=e.Current();\r\n      m=(o=null,[t.TryGetValue(innerKeySelector(i),{\r\n       get:function()\r\n       {\r\n        return o;\r\n       },\r\n       set:function(v)\r\n       {\r\n        o=v;\r\n       }\r\n      }),o]);\r\n      return m[0]?void m[1][1].push(i):null;\r\n     }());\r\n   }\r\n   finally\r\n   {\r\n    if(typeof e==\"object\"&&\"Dispose\"in e)\r\n     e.Dispose();\r\n   }\r\n   Arrays.iteri(function(i,t$1)\r\n   {\r\n    return Arrays.set(a,i,resultSelector(t$1[0],t$1[1]));\r\n   },a);\r\n   return a;\r\n  });\r\n };\r\n Linq.GroupBy=function(_this,keySelector,elementSelector,resultSelector,comparer)\r\n {\r\n  return Seq.map(function(g)\r\n  {\r\n   return resultSelector(g.System_Linq_IGrouping_2$get_Key(),g);\r\n  },Linq.GroupBy$1(_this,keySelector,elementSelector,comparer));\r\n };\r\n Linq.GroupBy$1=function(_this,keySelector,elementSelector,comparer)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Arrays.ofSeq(Seq.delay(function()\r\n   {\r\n    var t;\r\n    t=new Dictionary.New$3(comparer);\r\n    return Seq.collect(function(x)\r\n    {\r\n     var k,e,m,o,a;\r\n     k=keySelector(x);\r\n     e=elementSelector(x);\r\n     m=(o=null,[t.TryGetValue(k,{\r\n      get:function()\r\n      {\r\n       return o;\r\n      },\r\n      set:function(v)\r\n      {\r\n       o=v;\r\n      }\r\n     }),o]);\r\n     return m[0]?(m[1].push(e),[]):(a=[],(a.push(e),t.set_Item(k,a),[new Grouping.New(k,a)]));\r\n    },_this);\r\n   }));\r\n  });\r\n };\r\n Linq.Except=function(_this,second,comparer)\r\n {\r\n  var tbl,e;\r\n  tbl=new HashSet.New(_this,comparer);\r\n  e=Enumerator.Get(second);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    tbl.Remove(e.Current());\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n  return tbl;\r\n };\r\n Linq.Distinct=function(_this,comparer)\r\n {\r\n  return Seq.delay(function()\r\n  {\r\n   return Seq.enumUsing(Enumerator.Get(_this),function(e)\r\n   {\r\n    var tbl;\r\n    tbl=new HashSet.New$1(comparer);\r\n    return Seq.enumWhile(function()\r\n    {\r\n     return e.MoveNext();\r\n    },Seq.delay(function()\r\n    {\r\n     return tbl.Add(e.Current())?[e.Current()]:[];\r\n    }));\r\n   });\r\n  });\r\n };\r\n Linq.DefaultIfEmpty=function(_this,defaultValue)\r\n {\r\n  return Seq.isEmpty(_this)?[defaultValue]:_this;\r\n };\r\n Linq.Average=function(_this)\r\n {\r\n  var x,e,c,c$1;\r\n  x=[];\r\n  e=Enumerator.Get(_this);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    {\r\n     if(c=e.Current(),c!=null)\r\n      {\r\n       x.push((c$1=e.Current(),Nullable.get(c$1)));\r\n      }\r\n    }\r\n   return Arrays.length(x)===0?null:Seq.sum(x)/Arrays.length(x);\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n };\r\n Query=WebSharper.Query=Runtime.Class({},Obj,Query);\r\n Query.averageByNullable=function(source,projection)\r\n {\r\n  var filtered;\r\n  filtered=Arrays.ofSeq(Seq.choose(function(x)\r\n  {\r\n   return Option.ofNullable(projection(x));\r\n  },source));\r\n  return Arrays.length(filtered)===0?null:Arrays.average(filtered);\r\n };\r\n Query.sumByNullable=function(source,projection)\r\n {\r\n  return Arrays.sum(Arrays.ofSeq(Seq.choose(function(x)\r\n  {\r\n   return Option.ofNullable(projection(x));\r\n  },source)));\r\n };\r\n Query.CheckThenBySource=function(source)\r\n {\r\n  return typeof source==\"object\"&&\"System_Linq_IOrderedEnumerable_1$CreateOrderedEnumerable\"in source?source:Operators.FailWith(\"'thenBy' and 'thenByDescending' may only be used with an ordered input\");\r\n };\r\n Query.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },Query);\r\n}());\r\n"
    }
  ]
}
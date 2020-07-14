{
  "asName": "FShUI",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm",
    "WebSharper.Web.asm",
    "WebSharper.Sitelets.asm",
    "WebSharper.Control.asm",
    "WebSharper.UI.asm",
    "WebSharper.UI.Templating.Runtime.asm",
    "WebSharper.Data.asm",
    "FShUIAssemblyData.asm"
  ],
  "resources": [],
  "modules": [
    {
      "moName": "FsRoot.Library",
      "methods": [
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
      "moName": "FsRoot.LibraryJS+FShUI_AssemblyData2",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Composition+MethodDef2",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Composition+SimpleComposition",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Composition+SimpleEntry",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+Composition",
      "methods": [
        {
          "meName": "showCompositions",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "createComposedFunction$448$43",
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
          "meName": "createComposedFunction$447$43",
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
          "meName": "createComposedFunction$440$43",
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
          "meName": "createComposedFunction",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "showSimpleEntry",
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
              "tName": "Var<(Guid * SimpleEntry)>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "showSimpleComposition$399$54",
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
          "meName": "showSimpleComposition$388$54",
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
          "meName": "showSimpleComposition",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Guid",
              "asm": "netstandard"
            },
            {
              "tName": "Var<(Guid * SimpleComposition)>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "showSimpleString",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Guid",
              "asm": "netstandard"
            },
            {
              "tName": "Var<(Guid * (string * string))>",
              "asm": "WebSharper.UI"
            }
          ]
        },
        {
          "meName": "compositionsL",
          "isField": 1,
          "type": {
            "tName": "ListModel<Guid, (Guid * SimpleEntry)>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "selectedMethod",
          "isField": 1,
          "type": {
            "tName": "Var<Option<(FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyName * MethodDef2)>>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "createComposedAssembly",
          "isField": 0,
          "type": {
            "tName": "FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyDef",
            "asm": "FShUIAssemblyData"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyName",
              "asm": "FShUIAssemblyData"
            },
            {
              "tName": "SimpleEntry[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "createComposedModule",
          "isField": 0,
          "type": {
            "tName": "(FsRoot.LibraryJS+FShUI_AssemblyData+ModuleDef * FsRoot.LibraryJS+FShUI_AssemblyData+JSCode)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+FShUI_AssemblyData+ModuleName",
              "asm": "FShUIAssemblyData"
            },
            {
              "tName": "SimpleEntry[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "composeVarStr",
          "isField": 0,
          "type": {
            "tName": "(FsRoot.LibraryJS+FShUI_AssemblyData+MethodDef * string)",
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
          "meName": "composeString",
          "isField": 0,
          "type": {
            "tName": "(FsRoot.LibraryJS+FShUI_AssemblyData+MethodDef * string)",
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
          "meName": "composeMethod",
          "isField": 0,
          "type": {
            "tName": "(FsRoot.LibraryJS+FShUI_AssemblyData+MethodDef * string)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+FShUI_AssemblyData+MethodName",
              "asm": "FShUIAssemblyData"
            },
            {
              "tName": "MethodDef2",
              "asm": "FShUI"
            },
            {
              "tName": "MethodDef2",
              "asm": "FShUI"
            },
            {
              "tName": "IEnumerable<int>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "invokeMethodJS",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "MethodDef2",
              "asm": "FShUI"
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
      "moName": "FsRoot.LibraryJS+WsComposition+Reference`2",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+WsComposition+HtmlElemTag",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+WsComposition+LocalId",
      "methods": []
    },
    {
      "moName": "FsRoot.LibraryJS+WsComposition+DocComposition",
      "methods": [
        {
          "meName": "_unique_DOCEmpty",
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
      "moName": "FsRoot.LibraryJS+WsComposition",
      "methods": [
        {
          "meName": "getUIDoc",
          "isField": 0,
          "type": {
            "tName": "Doc",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "(DocComposition -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "DocComposition",
              "asm": "FShUI"
            }
          ]
        },
        {
          "meName": "currentNodeO",
          "isField": 1,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+FShUI+LoadAsm",
      "methods": [
        {
          "meName": "fetchAsmData",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyDef>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyRef",
              "asm": "FShUIAssemblyData"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+FShUI",
      "methods": [
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
          "meName": "processAssembly",
          "isField": 0,
          "type": {
            "tName": "Async<unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyDef",
              "asm": "FShUIAssemblyData"
            }
          ]
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
              "tName": "FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyRef",
              "asm": "FShUIAssemblyData"
            }
          ]
        },
        {
          "meName": "restartAssemblies",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
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
              "tName": "FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyDef",
              "asm": "FShUIAssemblyData"
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
              "tName": "FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyRef",
              "asm": "FShUIAssemblyData"
            }
          ]
        },
        {
          "meName": "assemblies",
          "isField": 1,
          "type": {
            "tName": "ListModel<FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyName, FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyDef>",
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
              "tName": "(FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyRef -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyDef -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyRef -> Async<FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyDef>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyRef",
              "asm": "FShUIAssemblyData"
            }
          ]
        },
        {
          "meName": "processAssembly'",
          "isField": 0,
          "type": {
            "tName": "Async<unit>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyRef -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyDef -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyRef -> Async<FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyDef>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyDef",
              "asm": "FShUIAssemblyData"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS+AssemblyUI",
      "methods": [
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
              "tName": "FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyDef",
              "asm": "FShUIAssemblyData"
            }
          ]
        },
        {
          "meName": "showAdd",
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
              "tName": "FsRoot.LibraryJS+WsComposition+DocComposition",
              "asm": "FShUI"
            }
          ]
        },
        {
          "meName": "addDOC",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FsRoot.LibraryJS+WsComposition+DocComposition",
              "asm": "FShUI"
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
              "tName": "(FsRoot.LibraryJS+FShUI_AssemblyData+MethodDef -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyDef",
              "asm": "FShUIAssemblyData"
            },
            {
              "tName": "(FsRoot.LibraryJS+FShUI_AssemblyData+ModuleDef -> (FsRoot.LibraryJS+FShUI_AssemblyData+MethodDef -> 'a))",
              "asm": "FSharp.Core"
            }
          ]
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
          "meName": "mainDocNameVar",
          "isField": 1,
          "type": {
            "tName": "Var<FsRoot.LibraryJS+WsComposition+DocComposition>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "selectedAssembly",
          "isField": 1,
          "type": {
            "tName": "Var<Option<FsRoot.LibraryJS+FShUI_AssemblyData+AssemblyName>>",
            "asm": "WebSharper.UI"
          },
          "parms": []
        },
        {
          "meName": "click$721$45",
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
          "meName": "loadCompossedAssembly",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "loadFsTranslator",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
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
        }
      ]
    },
    {
      "moName": "FsRoot.LibraryJS",
      "methods": []
    },
    {
      "moName": "StartupCode$FShUI$FShUI",
      "methods": []
    }
  ],
  "jsModules": [
    {
      "jsName": "WebSharper.js",
      "code": "(function()\r\n{\r\n \"use strict\";\r\n var Global,FsRoot,Library,LibraryJS,Composition,MethodDef2,SimpleComposition,SimpleEntry,WsComposition,Reference,HtmlElemTag,LocalId,DocComposition,FShUI,LoadAsm,AssemblyUI,SC$1,WebSharper,UI,Var$1,View,Concurrency,CancellationTokenSource,IntelliFactory,Runtime,Doc,Operators,System,Guid,FShUI_AssemblyData,List,AttrProxy,Utils,Strings,Seq,FromView,Unchecked,Arrays,AssemblyDef,ModuleDef,MethodDef,TypeRef,Slice,Data,TxtRuntime,FSharp,Data$1,Runtime$1,IO,JSON,console,AttrModule,ListModel;\r\n Global=self;\r\n FsRoot=Global.FsRoot=Global.FsRoot||{};\r\n Library=FsRoot.Library=FsRoot.Library||{};\r\n LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};\r\n Composition=LibraryJS.Composition=LibraryJS.Composition||{};\r\n MethodDef2=Composition.MethodDef2=Composition.MethodDef2||{};\r\n SimpleComposition=Composition.SimpleComposition=Composition.SimpleComposition||{};\r\n SimpleEntry=Composition.SimpleEntry=Composition.SimpleEntry||{};\r\n WsComposition=LibraryJS.WsComposition=LibraryJS.WsComposition||{};\r\n Reference=WsComposition.Reference=WsComposition.Reference||{};\r\n HtmlElemTag=WsComposition.HtmlElemTag=WsComposition.HtmlElemTag||{};\r\n LocalId=WsComposition.LocalId=WsComposition.LocalId||{};\r\n DocComposition=WsComposition.DocComposition=WsComposition.DocComposition||{};\r\n FShUI=LibraryJS.FShUI=LibraryJS.FShUI||{};\r\n LoadAsm=FShUI.LoadAsm=FShUI.LoadAsm||{};\r\n AssemblyUI=LibraryJS.AssemblyUI=LibraryJS.AssemblyUI||{};\r\n SC$1=Global.StartupCode$FShUI$FShUI=Global.StartupCode$FShUI$FShUI||{};\r\n WebSharper=Global.WebSharper;\r\n UI=WebSharper&&WebSharper.UI;\r\n Var$1=UI&&UI.Var$1;\r\n View=UI&&UI.View;\r\n Concurrency=WebSharper&&WebSharper.Concurrency;\r\n CancellationTokenSource=WebSharper&&WebSharper.CancellationTokenSource;\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime=IntelliFactory&&IntelliFactory.Runtime;\r\n Doc=UI&&UI.Doc;\r\n Operators=WebSharper&&WebSharper.Operators;\r\n System=Global.System;\r\n Guid=System&&System.Guid;\r\n FShUI_AssemblyData=LibraryJS&&LibraryJS.FShUI_AssemblyData;\r\n List=WebSharper&&WebSharper.List;\r\n AttrProxy=UI&&UI.AttrProxy;\r\n Utils=WebSharper&&WebSharper.Utils;\r\n Strings=WebSharper&&WebSharper.Strings;\r\n Seq=WebSharper&&WebSharper.Seq;\r\n FromView=UI&&UI.FromView;\r\n Unchecked=WebSharper&&WebSharper.Unchecked;\r\n Arrays=WebSharper&&WebSharper.Arrays;\r\n AssemblyDef=FShUI_AssemblyData&&FShUI_AssemblyData.AssemblyDef;\r\n ModuleDef=FShUI_AssemblyData&&FShUI_AssemblyData.ModuleDef;\r\n MethodDef=FShUI_AssemblyData&&FShUI_AssemblyData.MethodDef;\r\n TypeRef=FShUI_AssemblyData&&FShUI_AssemblyData.TypeRef;\r\n Slice=WebSharper&&WebSharper.Slice;\r\n Data=WebSharper&&WebSharper.Data;\r\n TxtRuntime=Data&&Data.TxtRuntime;\r\n FSharp=Global.FSharp;\r\n Data$1=FSharp&&FSharp.Data;\r\n Runtime$1=Data$1&&Data$1.Runtime;\r\n IO=Runtime$1&&Runtime$1.IO;\r\n JSON=Global.JSON;\r\n console=Global.console;\r\n AttrModule=UI&&UI.AttrModule;\r\n ListModel=UI&&UI.ListModel;\r\n Library.delayedVar=function(delay,_var)\r\n {\r\n  var delayedV,x;\r\n  delayedV=Var$1.Create$1(_var.Get());\r\n  x=_var.get_View();\r\n  View.Sink(Library.delayed(delay,function(a)\r\n  {\r\n   delayedV.Set(a);\r\n  }),x);\r\n  return delayedV;\r\n };\r\n Library.delayed=function(delay,doF)\r\n {\r\n  function g()\r\n  {\r\n   return Concurrency.Return(null);\r\n  }\r\n  return Library.delayedA(delay,function(x)\r\n  {\r\n   return g(doF(x));\r\n  });\r\n };\r\n Library.delayedA=function(delay,doF)\r\n {\r\n  var cancelTokenO;\r\n  cancelTokenO=null;\r\n  return function(parm)\r\n  {\r\n   var b;\r\n   cancelTokenO==null?void 0:cancelTokenO.$0.Cancel$1();\r\n   cancelTokenO={\r\n    $:1,\r\n    $0:new CancellationTokenSource.New()\r\n   };\r\n   Concurrency.Start((b=null,Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.Bind(Concurrency.Sleep(delay),function()\r\n    {\r\n     return Concurrency.Bind(doF(parm),function()\r\n     {\r\n      return Concurrency.Return(null);\r\n     });\r\n    });\r\n   })),{\r\n    $:1,\r\n    $0:cancelTokenO.$0\r\n   });\r\n  };\r\n };\r\n Library.Error=function(a)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:a\r\n  };\r\n };\r\n MethodDef2.New=function(def,modName)\r\n {\r\n  return{\r\n   def:def,\r\n   modName:modName\r\n  };\r\n };\r\n SimpleComposition=Composition.SimpleComposition=Runtime.Class({\r\n  GetMethodDefsJS:function()\r\n  {\r\n   return Composition.composeMethod(this.name,this.pre,this.pos,this.rparms);\r\n  }\r\n },null,SimpleComposition);\r\n SimpleComposition.New=function(name,pre,pos,rparms)\r\n {\r\n  return new SimpleComposition({\r\n   name:name,\r\n   pre:pre,\r\n   pos:pos,\r\n   rparms:rparms\r\n  });\r\n };\r\n SimpleEntry=Composition.SimpleEntry=Runtime.Class({\r\n  GetMethodDefsJS:function()\r\n  {\r\n   return this.$==1?Composition.composeString(this.$0,this.$1):this.$==2?Composition.composeVarStr(this.$0,this.$1):this.$0.GetMethodDefsJS();\r\n  }\r\n },null,SimpleEntry);\r\n Composition.showCompositions=function()\r\n {\r\n  return Doc.Element(\"div\",[],[Doc.Flatten(Composition.compositionsL().MapLens(function($1,$2)\r\n  {\r\n   var m;\r\n   function a(id,se)\r\n   {\r\n    return se.$==1?[id,[se.$0,se.$1]]:Operators.FailWith(\"Should not happen\");\r\n   }\r\n   function a$1(id,se)\r\n   {\r\n    return se.$==2?[id,[se.$0,se.$1]]:Operators.FailWith(\"Should not happen\");\r\n   }\r\n   function a$2(id,se)\r\n   {\r\n    return se.$==0?[id,se.$0]:Operators.FailWith(\"Should not happen\");\r\n   }\r\n   m=$2.Get();\r\n   return m[1].$==1?Composition.showSimpleString(m[0],Var$1.Lens($2,function($3)\r\n   {\r\n    return a($3[0],$3[1]);\r\n   },function(a$3,t)\r\n   {\r\n    var t$1;\r\n    return[t[0],(t$1=t[1],new SimpleEntry({\r\n     $:1,\r\n     $0:t$1[0],\r\n     $1:t$1[1]\r\n    }))];\r\n   })):m[1].$==2?Composition.showSimpleString(m[0],Var$1.Lens($2,function($3)\r\n   {\r\n    return a$1($3[0],$3[1]);\r\n   },function(a$3,t)\r\n   {\r\n    var t$1;\r\n    return[t[0],(t$1=t[1],new SimpleEntry({\r\n     $:2,\r\n     $0:t$1[0],\r\n     $1:t$1[1]\r\n    }))];\r\n   })):Composition.showSimpleComposition(m[0],Var$1.Lens($2,function($3)\r\n   {\r\n    return a$2($3[0],$3[1]);\r\n   },function(a$3,t)\r\n   {\r\n    return[t[0],new SimpleEntry({\r\n     $:0,\r\n     $0:t[1]\r\n    })];\r\n   }));\r\n  })),Composition.createComposedFunction()]);\r\n };\r\n Composition.createComposedFunction$448$43=Runtime.Curried3(function(clickVarStr,$1,$2)\r\n {\r\n  return clickVarStr();\r\n });\r\n Composition.createComposedFunction$447$43=Runtime.Curried3(function(clickString,$1,$2)\r\n {\r\n  return clickString();\r\n });\r\n Composition.createComposedFunction$440$43=Runtime.Curried3(function(clickFunc,$1,$2)\r\n {\r\n  return clickFunc();\r\n });\r\n Composition.createComposedFunction=function()\r\n {\r\n  function clickFunc()\r\n  {\r\n   var m,md;\r\n   m=Composition.selectedMethod().Get();\r\n   m!=null&&m.$==1?(md=m.$0[1],Composition.compositionsL().Append([Guid.NewGuid(),new SimpleEntry({\r\n    $:0,\r\n    $0:SimpleComposition.New(new FShUI_AssemblyData.MethodName({\r\n     $:0,\r\n     $0:\"newMethod\"\r\n    }),md,md,[0])\r\n   })])):void 0;\r\n  }\r\n  function clickString()\r\n  {\r\n   Composition.compositionsL().Append([Guid.NewGuid(),new SimpleEntry({\r\n    $:1,\r\n    $0:\"newString\",\r\n    $1:\"value\"\r\n   })]);\r\n  }\r\n  function clickVarStr()\r\n  {\r\n   Composition.compositionsL().Append([Guid.NewGuid(),new SimpleEntry({\r\n    $:2,\r\n    $0:\"newString\",\r\n    $1:\"value\"\r\n   })]);\r\n  }\r\n  return Doc.Concat(List.ofArray([Doc.Element(\"button\",[AttrProxy.HandlerImpl(\"click\",function()\r\n  {\r\n   return function()\r\n   {\r\n    return clickFunc();\r\n   };\r\n  })],[Doc.TextView(View.Map(function(a)\r\n  {\r\n   return a!=null&&a.$==1?(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(\"Compose \"+Utils.toSafe($2));\r\n    };\r\n   }(Global.id))(a.$0[1].def.name.get_Id()):\"Select a function to compose\";\r\n  },Composition.selectedMethod().get_View()))]),Doc.Element(\"button\",[AttrProxy.HandlerImpl(\"click\",function()\r\n  {\r\n   return function()\r\n   {\r\n    return clickString();\r\n   };\r\n  })],[Doc.TextNode(\"Add string\")]),Doc.Element(\"button\",[AttrProxy.HandlerImpl(\"click\",function()\r\n  {\r\n   return function()\r\n   {\r\n    return clickVarStr();\r\n   };\r\n  })],[Doc.TextNode(\"Add Var<string>\")])]));\r\n };\r\n Composition.showSimpleEntry=function(id,idcompV)\r\n {\r\n  function a(f,v)\r\n  {\r\n   return[f,v];\r\n  }\r\n  Var$1.Lens(idcompV,function(t)\r\n  {\r\n   return t[1];\r\n  },function($1,$2)\r\n  {\r\n   return(function($3)\r\n   {\r\n    var $4;\r\n    $4=$3[0];\r\n    return function($5)\r\n    {\r\n     return a($4,$5);\r\n    };\r\n   }($1))($2);\r\n  });\r\n };\r\n Composition.showSimpleComposition$399$54=Runtime.Curried3(function(clickPos,$1,$2)\r\n {\r\n  return clickPos();\r\n });\r\n Composition.showSimpleComposition$388$54=Runtime.Curried3(function(clickPre,$1,$2)\r\n {\r\n  return clickPre();\r\n });\r\n Composition.showSimpleComposition=function(id,idcompV)\r\n {\r\n  var compV;\r\n  function a(f,v)\r\n  {\r\n   return[f,v];\r\n  }\r\n  function clickPre()\r\n  {\r\n   var m,i;\r\n   m=Composition.selectedMethod().Get();\r\n   m!=null&&m.$==1?compV.Set((i=compV.Get(),SimpleComposition.New(i.name,m.$0[1],i.pos,i.rparms))):void 0;\r\n  }\r\n  function clickPos()\r\n  {\r\n   var m,i;\r\n   m=Composition.selectedMethod().Get();\r\n   m!=null&&m.$==1?compV.Set((i=compV.Get(),SimpleComposition.New(i.name,i.pre,m.$0[1],i.rparms))):void 0;\r\n  }\r\n  compV=Var$1.Lens(idcompV,function(t)\r\n  {\r\n   return t[1];\r\n  },function($1,$2)\r\n  {\r\n   return(function($3)\r\n   {\r\n    var $4;\r\n    $4=$3[0];\r\n    return function($5)\r\n    {\r\n     return a($4,$5);\r\n    };\r\n   }($1))($2);\r\n  });\r\n  return Doc.Concat([Doc.Element(\"tr\",[],[Doc.Input(List.T.Empty,Var$1.Lens(compV,function(c)\r\n  {\r\n   return c.name.get_Id();\r\n  },function(c,v)\r\n  {\r\n   return SimpleComposition.New(new FShUI_AssemblyData.MethodName({\r\n    $:0,\r\n    $0:v\r\n   }),c.pre,c.pos,c.rparms);\r\n  })),Doc.TextNode(\" = \"),Doc.Element(\"button\",[AttrProxy.HandlerImpl(\"dblclick\",function()\r\n  {\r\n   return function()\r\n   {\r\n    return clickPre();\r\n   };\r\n  })],[Doc.TextView(View.Map(function(c)\r\n  {\r\n   return c.pre.def.name.get_Id();\r\n  },compV.get_View()))]),Doc.TextNode(\" : (\"),Doc.BindView(function(comp)\r\n  {\r\n   return Doc.TextNode(Strings.concat(\" -> \",Seq.map(function(t)\r\n   {\r\n    return t.name.get_Id();\r\n   },comp.pre.def.parms)));\r\n  },compV.get_View()),Doc.TextNode(\" -> \"),Doc.TextView(View.Map(function(c)\r\n  {\r\n   return c.pre.def.retType.name.get_Id();\r\n  },compV.get_View())),Doc.TextNode(\") >> \"),Doc.Element(\"button\",[AttrProxy.HandlerImpl(\"dblclick\",function()\r\n  {\r\n   return function()\r\n   {\r\n    return clickPos();\r\n   };\r\n  })],[Doc.TextView(View.Map(function(c)\r\n  {\r\n   return c.pos.def.name.get_Id();\r\n  },compV.get_View()))]),Doc.TextNode(\" : (\"),Doc.BindView(function(comp)\r\n  {\r\n   return Doc.Concat(List.ofSeq(Seq.delay(function()\r\n   {\r\n    return Seq.collect(function(i)\r\n    {\r\n     var checkV,attrOK;\r\n     checkV=new FromView.New(View.Const(Seq.contains(i,comp.rparms)),function(v)\r\n     {\r\n      var i$1,s;\r\n      function p(y)\r\n      {\r\n       return i!==y;\r\n      }\r\n      compV.Set((i$1=compV.Get(),SimpleComposition.New(i$1.name,i$1.pre,i$1.pos,Seq.cache((v?(s=[i],function(s$1)\r\n      {\r\n       return Seq.append(s,s$1);\r\n      }):function(s$1)\r\n      {\r\n       return Seq.filter(p,s$1);\r\n      })(compV.Get().rparms)))));\r\n     });\r\n     attrOK=AttrProxy.Create(\"style\",Seq.contains(i,comp.rparms)&&!Unchecked.Equals(comp.pre.def.retType,Arrays.get(comp.pos.def.parms,i))?\"text-decoration: line-through\":\"\");\r\n     return[Doc.Element(\"span\",[],[Doc.CheckBox([],checkV),Doc.Element(\"span\",[attrOK],[Doc.TextNode(Arrays.get(comp.pos.def.parms,i).name.get_Id())]),Doc.TextNode(\" -> \")])];\r\n    },Operators.range(0,Arrays.length(comp.pos.def.parms)-1));\r\n   })));\r\n  },compV.get_View()),Doc.TextView(View.Map(function(c)\r\n  {\r\n   return c.pos.def.retType.name.get_Id();\r\n  },compV.get_View())),Doc.TextNode(\" ) \"),Doc.Button(\"x\",[],function()\r\n  {\r\n   Composition.compositionsL().RemoveByKey(id);\r\n  })])]);\r\n };\r\n Composition.showSimpleString=function(id,idcompV)\r\n {\r\n  var nameV,valV;\r\n  function a(f$2,a$2)\r\n  {\r\n   return function(nm)\r\n   {\r\n    return[f$2,[nm,a$2[1]]];\r\n   };\r\n  }\r\n  function f(t)\r\n  {\r\n   return t[1];\r\n  }\r\n  function g(t)\r\n  {\r\n   return t[0];\r\n  }\r\n  function a$1(f$2,a$2)\r\n  {\r\n   return function(v)\r\n   {\r\n    return[f$2,[a$2[0],v]];\r\n   };\r\n  }\r\n  function f$1(t)\r\n  {\r\n   return t[1];\r\n  }\r\n  function g$1(t)\r\n  {\r\n   return t[1];\r\n  }\r\n  nameV=Var$1.Lens(idcompV,function(x)\r\n  {\r\n   return g(f(x));\r\n  },function($1,$2)\r\n  {\r\n   return(function($3)\r\n   {\r\n    return a($3[0],$3[1]);\r\n   }($1))($2);\r\n  });\r\n  valV=Var$1.Lens(idcompV,function(x)\r\n  {\r\n   return g$1(f$1(x));\r\n  },function($1,$2)\r\n  {\r\n   return(function($3)\r\n   {\r\n    return a$1($3[0],$3[1]);\r\n   }($1))($2);\r\n  });\r\n  return Doc.Concat([Doc.Element(\"tr\",[],[Doc.Input([],nameV),Doc.TextNode(\" = \"),Doc.Input([],valV),Doc.Button(\"x\",[],function()\r\n  {\r\n   Composition.compositionsL().RemoveByKey(id);\r\n  })])]);\r\n };\r\n Composition.compositionsL=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.compositionsL;\r\n };\r\n Composition.selectedMethod=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.selectedMethod;\r\n };\r\n Composition.createComposedAssembly=function(name,comps)\r\n {\r\n  var p;\r\n  p=Composition.createComposedModule(new FShUI_AssemblyData.ModuleName({\r\n   $:0,\r\n   $0:name.get_Id()\r\n  }),comps);\r\n  return AssemblyDef.New(name,new FShUI_AssemblyData.AssemblyRef({\r\n   $:0,\r\n   $0:name.get_Id()\r\n  }),[p[0]],[],[],[[name.get_Id(),p[1]]]);\r\n };\r\n Composition.createComposedModule=function(name,comps)\r\n {\r\n  var p,x;\r\n  p=Arrays.unzip(Arrays.map(function(x$1)\r\n  {\r\n   return x$1.GetMethodDefsJS();\r\n  },comps));\r\n  return[ModuleDef.New(name,p[0]),new FShUI_AssemblyData.JSCode({\r\n   $:0,\r\n   $0:(x=Strings.concat(\",\\n    \",p[1]),(((Runtime.Curried3(function($1,$2,$3)\r\n   {\r\n    return $1(Utils.toSafe($2)+\" = {\\n    \"+Utils.toSafe($3)+\"\\n}\");\r\n   }))(Global.id))(name.get_Id2()))(x))\r\n  })];\r\n };\r\n Composition.composeVarStr=function(name,ss)\r\n {\r\n  return[MethodDef.New(new FShUI_AssemblyData.MethodName({\r\n   $:0,\r\n   $0:name\r\n  }),TypeRef.New(new FShUI_AssemblyData.TypeName({\r\n   $:0,\r\n   $0:\"Var<string>\"\r\n  }),new FShUI_AssemblyData.AssemblyName({\r\n   $:0,\r\n   $0:\"WebSharper.UI\"\r\n  })),[],true),(((Runtime.Curried3(function($1,$2,$3)\r\n  {\r\n   return $1(Utils.toSafe($2)+\" : (function(v) { return function() { return v} })(WebSharper.UI.Var$1.Create$1('\"+Utils.toSafe($3)+\"'))\");\r\n  }))(Global.id))(name))(Strings.Replace(ss,\"'\",\"''\"))];\r\n };\r\n Composition.composeString=function(name,ss)\r\n {\r\n  return[MethodDef.New(new FShUI_AssemblyData.MethodName({\r\n   $:0,\r\n   $0:name\r\n  }),TypeRef.New(new FShUI_AssemblyData.TypeName({\r\n   $:0,\r\n   $0:\"string\"\r\n  }),new FShUI_AssemblyData.AssemblyName({\r\n   $:0,\r\n   $0:\"netstandard\"\r\n  })),[],true),(((Runtime.Curried3(function($1,$2,$3)\r\n  {\r\n   return $1(Utils.toSafe($2)+\" : function() { return '\"+Utils.toSafe($3)+\"' }\");\r\n  }))(Global.id))(name))(Strings.Replace(ss,\"'\",\"''\"))];\r\n };\r\n Composition.composeMethod=function(name,pre,pos,rparms)\r\n {\r\n  var nparms,nparmsDecl,x,preParms,x$1,posParms,x$2,preCall,posCall;\r\n  nparms=Arrays.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.append(pre.def.parms,Seq.delay(function()\r\n   {\r\n    return Seq.collect(function(i)\r\n    {\r\n     return!Seq.contains(i,rparms)?[Arrays.get(pos.def.parms,i)]:[];\r\n    },Operators.range(0,Arrays.length(pos.def.parms)-1));\r\n   }));\r\n  }));\r\n  nparmsDecl=Strings.concat(\", \",(x=List.ofSeq(Operators.range(0,Arrays.length(nparms)-1)),Seq.map(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"p\"+Global.String($2));\r\n   };\r\n  }(Global.id),x)));\r\n  preParms=Strings.concat(\", \",(x$1=List.ofSeq(Operators.range(0,Arrays.length(pre.def.parms)-1)),Seq.map(function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return $1(\"p\"+Global.String($2));\r\n   };\r\n  }(Global.id),x$1)));\r\n  posParms=Strings.concat(\", \",(x$2=List.ofSeq(Operators.range(0,Arrays.length(pos.def.parms)-1)),Seq.mapFold(function(j,i)\r\n  {\r\n   return Seq.contains(i,rparms)?[\"v\",j]:[(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(\"p\"+Global.String($2));\r\n    };\r\n   }(Global.id))(j),j+1];\r\n  },Arrays.length(pre.def.parms),x$2))[0]);\r\n  preCall=Composition.invokeMethodJS(pre,preParms);\r\n  posCall=Composition.invokeMethodJS(pos,posParms);\r\n  return[MethodDef.New(name,pos.def.retType,nparms,false),(((((Runtime.Curried(function($1,$2,$3,$4,$5)\r\n  {\r\n   return $1(Utils.toSafe($2)+\" : function(\"+Utils.toSafe($3)+\") { var v = \"+Utils.toSafe($4)+\"; return \"+Utils.toSafe($5)+\"; }\");\r\n  },5))(Global.id))(name.get_Id()))(nparmsDecl))(preCall))(posCall)];\r\n };\r\n Composition.invokeMethodJS=function(md,parms)\r\n {\r\n  return((((Runtime.Curried(function($1,$2,$3,$4)\r\n  {\r\n   return $1(Utils.toSafe($2)+\".\"+Utils.toSafe($3)+\"(\"+Utils.toSafe($4)+\")\");\r\n  },4))(Global.id))(md.modName.get_Id2()))(md.def.name.get_Id()))(parms);\r\n };\r\n Reference=WsComposition.Reference=Runtime.Class({\r\n  toString:function()\r\n  {\r\n   return this.$==0?this.$0:this.$==1?(((Runtime.Curried3(function($1,$2,$3)\r\n   {\r\n    return $1(Utils.toSafe($2)+\".\"+Utils.toSafe($3));\r\n   }))(Global.id))(this.$0.get_Id2()))(this.$1.name.get_Id()):this.$1;\r\n  },\r\n  GetFunc:function()\r\n  {\r\n   var $1,$2;\r\n   function getFunc(js,p)\r\n   {\r\n    try\r\n    {\r\n     return(Global[\"eval\"](js))(p);\r\n    }\r\n    catch(e)\r\n    {\r\n     return(((Runtime.Curried3(function($3,$4,$5)\r\n     {\r\n      return $3(\"Error \"+Utils.toSafe($4)+\" \\n Evaluating JS: \"+Utils.toSafe($5));\r\n     }))(Operators.FailWith))(e.message))(js);\r\n    }\r\n   }\r\n   return this.$==0?($1=this.$0,function($3)\r\n   {\r\n    return getFunc($1,$3);\r\n   }):this.$==1?($2=(((Runtime.Curried3(function($3,$4,$5)\r\n   {\r\n    return $3(Utils.toSafe($4)+\".\"+Utils.toSafe($5));\r\n   }))(Global.id))(this.$0.get_Id2()))(this.$1.name.get_Id()),function($3)\r\n   {\r\n    return getFunc($2,$3);\r\n   }):this.$0;\r\n  }\r\n },null,Reference);\r\n HtmlElemTag=WsComposition.HtmlElemTag=Runtime.Class({\r\n  toString:function()\r\n  {\r\n   return(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(\"<\"+Utils.toSafe($2)+\">\");\r\n    };\r\n   }(Global.id))(this.get_Id());\r\n  },\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,HtmlElemTag);\r\n LocalId=WsComposition.LocalId=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,LocalId);\r\n DocComposition=WsComposition.DocComposition=Runtime.Class({\r\n  GetDoc:function()\r\n  {\r\n   var x,x$1,x$2,x$3,x$4,x$5,o,o$1,$1;\r\n   function m(tag,ds)\r\n   {\r\n    return Doc.Element(tag.get_Id(),List.T.Empty,ds);\r\n   }\r\n   return this.$==1?Doc.TextView(this.$1.get_View()):this.$==2?Doc.Button(this.$1,[],this.$0.GetFunc()):this.$==3?Doc.TextNode((x=(this.$0.GetFunc())(),(function($2)\r\n   {\r\n    return function($3)\r\n    {\r\n     return $2(Global.String($3));\r\n    };\r\n   }(Global.id))(x))):this.$==4?Doc.TextView((x$1=(this.$0.GetFunc())(),View.Map(function($2)\r\n   {\r\n    return function($3)\r\n    {\r\n     return $2(Global.String($3));\r\n    };\r\n   }(Global.id),x$1))):this.$==5?Doc.TextView((x$2=(this.$0.GetFunc())().get_View(),View.Map(function($2)\r\n   {\r\n    return function($3)\r\n    {\r\n     return $2(Global.String($3));\r\n    };\r\n   }(Global.id),x$2))):this.$==6?Doc.TextNode((x$3=(this.$0.GetFunc())(),(function($2)\r\n   {\r\n    return function($3)\r\n    {\r\n     return $2(Utils.prettyPrint($3));\r\n    };\r\n   }(Global.id))(x$3))):this.$==7?Doc.TextView((x$4=(this.$0.GetFunc())(),View.Map(function($2)\r\n   {\r\n    return function($3)\r\n    {\r\n     return $2(Utils.prettyPrint($3));\r\n    };\r\n   }(Global.id),x$4))):this.$==8?Doc.TextView((x$5=(this.$0.GetFunc())().get_View(),View.Map(function($2)\r\n   {\r\n    return function($3)\r\n    {\r\n     return $2(Utils.prettyPrint($3));\r\n    };\r\n   }(Global.id),x$5))):this.$==9?Doc.TextNode((this.$0.GetFunc())()):this.$==10?Doc.TextView((this.$0.GetFunc())()):this.$==11?Doc.TextView((this.$0.GetFunc())().get_View()):this.$==12?Doc.Input(List.T.Empty,(this.$0.GetFunc())()):this.$==13?Doc.InputArea(List.T.Empty,(this.$0.GetFunc())()):this.$==14?(this.$0.GetFunc())():this.$==15?Doc.EmbedView((this.$0.GetFunc())()):this.$==16?this.$1():this.$==17?Doc.get_Empty():this.$==18?(o=(o$1=this.$0,o$1==null?null:{\r\n    $:1,\r\n    $0:($1=o$1.$0,function($2)\r\n    {\r\n     return m($1,$2);\r\n    })\r\n   }),(o==null?Doc.Concat:o.$0)(Arrays.map(function(dc)\r\n   {\r\n    return dc.GetDoc();\r\n   },this.$1))):Doc.TextNode(this.$1);\r\n  }\r\n },null,DocComposition);\r\n DocComposition.DOCEmpty=new DocComposition({\r\n  $:17\r\n });\r\n WsComposition.getUIDoc=function(setDOC,a)\r\n {\r\n  var ref,tO,dcs,tagV,o,nm;\r\n  function setDOCH(tO$1,dcs$1)\r\n  {\r\n   setDOC(new DocComposition({\r\n    $:18,\r\n    $0:tO$1,\r\n    $1:dcs$1\r\n   }));\r\n  }\r\n  return a.$==1?Doc.TextNode(a.$0.get_Id()):a.$==2?(ref=a.$0,Doc.Input(List.T.Empty,new FromView.New(View.Const(a.$1),Library.delayed(1000,function(v)\r\n  {\r\n   setDOC(new DocComposition({\r\n    $:2,\r\n    $0:ref,\r\n    $1:v\r\n   }));\r\n  })))):a.$==3?Doc.TextNode(Global.String(a.$0)):a.$==4?Doc.TextNode(Global.String(a.$0)):a.$==5?Doc.TextNode(Global.String(a.$0)):a.$==6?Doc.TextNode(Global.String(a.$0)):a.$==7?Doc.TextNode(Global.String(a.$0)):a.$==8?Doc.TextNode(Global.String(a.$0)):a.$==9?Doc.TextNode(Global.String(a.$0)):a.$==10?Doc.TextNode(Global.String(a.$0)):a.$==11?Doc.TextNode(Global.String(a.$0)):a.$==12?Doc.TextNode(Global.String(a.$0)):a.$==13?Doc.TextNode(Global.String(a.$0)):a.$==14?Doc.TextNode(Global.String(a.$0)):a.$==15?Doc.TextNode(Global.String(a.$0)):a.$==16?Doc.TextNode(a.$0.get_Id()):a.$==17?Doc.TextNode(\"Empty\"):a.$==18?(tO=a.$0,(dcs=a.$1,(tagV=new FromView.New(View.Const((o=tO==null?null:{\r\n   $:1,\r\n   $0:tO.$0.get_Id()\r\n  },o==null?\"\":o.$0)),Library.delayed(1000,function(v)\r\n  {\r\n   var m;\r\n   setDOC(new DocComposition({\r\n    $:18,\r\n    $0:(m=Strings.Trim(v),m===\"\"?null:{\r\n     $:1,\r\n     $0:new HtmlElemTag({\r\n      $:0,\r\n      $0:m\r\n     })\r\n    }),\r\n    $1:dcs\r\n   }));\r\n  })),Doc.Element(\"tr\",[],[Doc.TextNode(\"Html \"),Doc.Input([],tagV),Doc.Element(\"table\",List.T.Empty,Arrays.mapi(function(i,dc)\r\n  {\r\n   return Doc.Element(\"tr\",[],[Doc.Element(\"td\",[],List.ofSeq(Seq.delay(function()\r\n   {\r\n    return i>0?[Doc.Button(\"^\",[],function()\r\n    {\r\n     setDOCH(tO,Arrays.collect(Global.id,[Slice.array(dcs,null,{\r\n      $:1,\r\n      $0:i-2\r\n     }),[dc,Arrays.get(dcs,i-1)],Slice.array(dcs,{\r\n      $:1,\r\n      $0:i+1\r\n     },null)]));\r\n    })]:[];\r\n   }))),Doc.Element(\"td\",[],List.ofSeq(Seq.delay(function()\r\n   {\r\n    return i<Arrays.length(dcs)-1?[Doc.Button(\"v\",[],function()\r\n    {\r\n     setDOCH(tO,Arrays.collect(Global.id,[Slice.array(dcs,null,{\r\n      $:1,\r\n      $0:i-1\r\n     }),[Arrays.get(dcs,i+1),dc],Slice.array(dcs,{\r\n      $:1,\r\n      $0:i+2\r\n     },null)]));\r\n    })]:[];\r\n   }))),Doc.Element(\"td\",[],[WsComposition.getUIDoc(function(ndc)\r\n   {\r\n    setDOCH(tO,Arrays.collect(Global.id,[Slice.array(dcs,null,{\r\n     $:1,\r\n     $0:i-1\r\n    }),[ndc],Slice.array(dcs,{\r\n     $:1,\r\n     $0:i+1\r\n    },null)]));\r\n   },dc)]),Doc.Element(\"td\",[],List.ofSeq(Seq.delay(function()\r\n   {\r\n    return[Doc.Button(\"x\",[],function()\r\n    {\r\n     setDOCH(tO,Arrays.collect(Global.id,[Slice.array(dcs,null,{\r\n      $:1,\r\n      $0:i-1\r\n     }),Slice.array(dcs,{\r\n      $:1,\r\n      $0:i+1\r\n     },null)]));\r\n    })];\r\n   })))]);\r\n  },dcs))])))):(nm=a.$0,Doc.Input(List.T.Empty,new FromView.New(View.Const(a.$1),Library.delayed(1000,function(v)\r\n  {\r\n   var m;\r\n   m=Strings.Trim(v);\r\n   m===\"\"?void 0:new HtmlElemTag({\r\n    $:0,\r\n    $0:m\r\n   });\r\n   setDOC(new DocComposition({\r\n    $:0,\r\n    $0:nm,\r\n    $1:v\r\n   }));\r\n  }))));\r\n };\r\n WsComposition.currentNodeO=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.currentNodeO;\r\n };\r\n LoadAsm.fetchAsmData=function(folder,a)\r\n {\r\n  var url,b;\r\n  url=a.$0;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(TxtRuntime.AsyncMap(IO.asyncReadTextAtRuntime(false,\"D:\\\\Abe\\\\CIPHERWorkspace\\\\FSharpStation\\\\projects\\\\Modules\\\\src\",\"\",\"JSON\",\"\",url.indexOf(\"/\")!=-1?url:folder+url),function(t)\r\n   {\r\n    return Unchecked.Equals(typeof t,\"string\")?JSON.parse(t):t;\r\n   }),function(a$1)\r\n   {\r\n    var n,prop,opt,s,j,d,r;\r\n    return Concurrency.Return((n=new FShUI_AssemblyData.AssemblyName({\r\n     $:0,\r\n     $0:(opt=(prop=\"asName\",prop in a$1?{\r\n      $:1,\r\n      $0:a$1[prop]\r\n     }:null),opt==null?null:opt.$0)\r\n    }),(s=new FShUI_AssemblyData.AssemblyRef({\r\n     $:0,\r\n     $0:url\r\n    }),(j=Arrays.map(function(j$1)\r\n    {\r\n     var prop$1,opt$1,prop$2,opt$2;\r\n     return[(opt$1=(prop$1=\"jsName\",prop$1 in j$1?{\r\n      $:1,\r\n      $0:j$1[prop$1]\r\n     }:null),opt$1==null?null:opt$1.$0),new FShUI_AssemblyData.JSCode({\r\n      $:0,\r\n      $0:(opt$2=(prop$2=\"code\",prop$2 in j$1?{\r\n       $:1,\r\n       $0:j$1[prop$2]\r\n      }:null),opt$2==null?null:opt$2.$0)\r\n     })];\r\n    },a$1.jsModules),(d=Arrays.map(function(a$2)\r\n    {\r\n     return new FShUI_AssemblyData.AssemblyRef({\r\n      $:0,\r\n      $0:a$2\r\n     });\r\n    },a$1.dependencies),(r=Arrays.map(function(a$2)\r\n    {\r\n     return new FShUI_AssemblyData.Resource({\r\n      $:0,\r\n      $0:a$2\r\n     });\r\n    },a$1.resources),AssemblyDef.New(n,s,Arrays.map(function(mo)\r\n    {\r\n     var prop$1,opt$1;\r\n     return ModuleDef.New(new FShUI_AssemblyData.ModuleName({\r\n      $:0,\r\n      $0:(opt$1=(prop$1=\"moName\",prop$1 in mo?{\r\n       $:1,\r\n       $0:mo[prop$1]\r\n      }:null),opt$1==null?null:opt$1.$0)\r\n     }),Arrays.map(function(me)\r\n     {\r\n      var n$1,prop$2,opt$2,i,v,prop$3,opt$3,x,prop$4,opt$4,x$1,prop$5,opt$5;\r\n      n$1=new FShUI_AssemblyData.MethodName({\r\n       $:0,\r\n       $0:(opt$2=(prop$2=\"meName\",prop$2 in me?{\r\n        $:1,\r\n        $0:me[prop$2]\r\n       }:null),opt$2==null?null:opt$2.$0)\r\n      });\r\n      i=(v=(prop$3=\"isField\",prop$3 in me?{\r\n       $:1,\r\n       $0:me[prop$3]\r\n      }:null),(opt$3=v==null?null:{\r\n       $:1,\r\n       $0:1*v.$0\r\n      },opt$3==null?null:opt$3.$0))===1;\r\n      return MethodDef.New(n$1,TypeRef.New(new FShUI_AssemblyData.TypeName({\r\n       $:0,\r\n       $0:(opt$4=(x=me.type,(prop$4=\"tName\",prop$4 in x?{\r\n        $:1,\r\n        $0:x[prop$4]\r\n       }:null)),opt$4==null?null:opt$4.$0)\r\n      }),new FShUI_AssemblyData.AssemblyName({\r\n       $:0,\r\n       $0:(opt$5=(x$1=me.type,(prop$5=\"asm\",prop$5 in x$1?{\r\n        $:1,\r\n        $0:x$1[prop$5]\r\n       }:null)),opt$5==null?null:opt$5.$0)\r\n      })),Arrays.map(function(p)\r\n      {\r\n       var prop$6,opt$6,prop$7,opt$7;\r\n       return TypeRef.New(new FShUI_AssemblyData.TypeName({\r\n        $:0,\r\n        $0:(opt$6=(prop$6=\"tName\",prop$6 in p?{\r\n         $:1,\r\n         $0:p[prop$6]\r\n        }:null),opt$6==null?null:opt$6.$0)\r\n       }),new FShUI_AssemblyData.AssemblyName({\r\n        $:0,\r\n        $0:(opt$7=(prop$7=\"asm\",prop$7 in p?{\r\n         $:1,\r\n         $0:p[prop$7]\r\n        }:null),opt$7==null?null:opt$7.$0)\r\n       }));\r\n      },me.parms),i);\r\n     },mo.methods));\r\n    },a$1.modules),d,r,j)))))));\r\n   });\r\n  });\r\n };\r\n FShUI.alreadyLoaded=function()\r\n {\r\n  return Seq.length((FShUI.assemblies())[\"var\"].Get())>0;\r\n };\r\n FShUI.processAssembly=function(def)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(FShUI[\"processAssembly'\"](FShUI.isLoaded,function(d)\r\n   {\r\n    FShUI.loadDef(d);\r\n   },function(a)\r\n   {\r\n    return LoadAsm.fetchAsmData(FShUI.Folder(),a);\r\n   },def),function()\r\n   {\r\n    FShUI.restartAssemblies();\r\n    return Concurrency.Zero();\r\n   });\r\n  });\r\n };\r\n FShUI.loadAssembly=function(asm)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(FShUI[\"loadAssembly'\"](FShUI.isLoaded,function(d)\r\n   {\r\n    FShUI.loadDef(d);\r\n   },function(a)\r\n   {\r\n    return LoadAsm.fetchAsmData(FShUI.Folder(),a);\r\n   },asm),function()\r\n   {\r\n    FShUI.restartAssemblies();\r\n    return Concurrency.Zero();\r\n   });\r\n  });\r\n };\r\n FShUI.restartAssemblies=function()\r\n {\r\n  var asms;\r\n  asms=Arrays.ofSeq((FShUI.assemblies())[\"var\"].Get());\r\n  FShUI.assemblies().Set(asms);\r\n };\r\n FShUI.Folder=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.Folder;\r\n };\r\n FShUI.loadDef=function(def)\r\n {\r\n  var a,i,$1,f;\r\n  try\r\n  {\r\n   a=def.javaScripts;\r\n   for(i=0,$1=a.length-1;i<=$1;i++){\r\n    f=Arrays.get(a,i);\r\n    Global[\"eval\"](((((Runtime.Curried(function($2,$3,$4,$5)\r\n    {\r\n     return $2(\"console.log('loading \"+Utils.toSafe($3)+\" \"+Utils.toSafe($4)+\" ...');\"+Utils.toSafe($5));\r\n    },4))(Global.id))(def.name.get_Id()))(f[0]))(f[1].get_Id()));\r\n   }\r\n   FShUI.assemblies().Append(def);\r\n  }\r\n  catch(e)\r\n  {\r\n   ((function($2)\r\n   {\r\n    return function($3)\r\n    {\r\n     return $2(Utils.prettyPrint($3));\r\n    };\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }))(e));\r\n  }\r\n };\r\n FShUI.isLoaded=function(asmRef)\r\n {\r\n  return FShUI.assemblies().TryFind(function(ad)\r\n  {\r\n   return Unchecked.Equals(ad.self,asmRef);\r\n  })!=null;\r\n };\r\n FShUI.assemblies=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.assemblies;\r\n };\r\n FShUI[\"loadAssembly'\"]=function(isLoaded,loadDef,fetchAsmData,asm)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return isLoaded(asm)?Concurrency.Zero():Concurrency.Bind(fetchAsmData(asm),function(a)\r\n   {\r\n    return Concurrency.Bind(FShUI[\"processAssembly'\"](isLoaded,loadDef,fetchAsmData,a),function()\r\n    {\r\n     return Concurrency.Return(null);\r\n    });\r\n   });\r\n  });\r\n };\r\n FShUI[\"processAssembly'\"]=function(isLoaded,loadDef,fetchAsmData,def)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Combine(Concurrency.For(def.resources,function(a)\r\n   {\r\n    var pelem,elem,nelem;\r\n    pelem=self.document.createElement(\"div\");\r\n    pelem.innerHTML=a.get_Id();\r\n    elem=pelem.firstChild;\r\n    nelem=self.document.createElement(elem.localName);\r\n    return Concurrency.Combine(Concurrency.For(Operators.range(0,elem.attributes.length-1),function(a$1)\r\n    {\r\n     nelem.setAttribute(elem.attributes.item(a$1).nodeName,elem.attributes.item(a$1).nodeValue);\r\n     return Concurrency.Zero();\r\n    }),Concurrency.Delay(function()\r\n    {\r\n     self.document.head.appendChild(nelem);\r\n     return Concurrency.Zero();\r\n    }));\r\n   }),Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.Combine(Concurrency.For(def.dependencies,function(a)\r\n    {\r\n     return Concurrency.Bind(FShUI[\"loadAssembly'\"](isLoaded,loadDef,fetchAsmData,a),function()\r\n     {\r\n      return Concurrency.Return(null);\r\n     });\r\n    }),Concurrency.Delay(function()\r\n    {\r\n     loadDef(def);\r\n     return Concurrency.Zero();\r\n    }));\r\n   }));\r\n  });\r\n };\r\n AssemblyUI.mainSubDoc=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainSubDoc;\r\n };\r\n AssemblyUI.mainDocInput=function()\r\n {\r\n  function s(a)\r\n  {\r\n   AssemblyUI.mainDocNameVar().Set(a);\r\n  }\r\n  return Doc.Element(\"div\",[],[Doc.TextNode(\"mainDocNameVar:\"),Doc.Button(\"Clear\",[],function()\r\n  {\r\n   AssemblyUI.mainDocNameVar().Set(DocComposition.DOCEmpty);\r\n  }),Doc.BindView(function(a)\r\n  {\r\n   return WsComposition.getUIDoc(s,a);\r\n  },AssemblyUI.mainDocNameVar().get_View()),Doc.Button(\"Add text\",[],function()\r\n  {\r\n   AssemblyUI.addDOC(new DocComposition({\r\n    $:0,\r\n    $0:new LocalId({\r\n     $:0,\r\n     $0:\"t1\"\r\n    }),\r\n    $1:\"Text\"\r\n   }));\r\n  }),Doc.Button(\"Add html\",[],function()\r\n  {\r\n   AssemblyUI.addDOC(new DocComposition({\r\n    $:18,\r\n    $0:{\r\n     $:1,\r\n     $0:new HtmlElemTag({\r\n      $:0,\r\n      $0:\"br\"\r\n     })\r\n    },\r\n    $1:[]\r\n   }));\r\n  })]);\r\n };\r\n AssemblyUI.mainDocVar=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainDocVar;\r\n };\r\n AssemblyUI.assembliesDoc=function()\r\n {\r\n  return Doc.Concat([Doc.Element(\"div\",[],[Doc.Button(\"Load module:\",[],function()\r\n  {\r\n   AssemblyUI.loadThisModule();\r\n  }),Doc.Input([],AssemblyUI.thisModuleV())]),Doc.Button(\"Load F# Translator\",[],function()\r\n  {\r\n   AssemblyUI.loadFsTranslator();\r\n  }),Composition.showCompositions(),Doc.Button(\"Load Compossed Assemby\",[],function()\r\n  {\r\n   AssemblyUI.loadCompossedAssembly();\r\n  }),AssemblyUI.listAssembliesDoc(),AssemblyUI.currentAssembly(),AssemblyUI.styleDoc()]);\r\n };\r\n AssemblyUI.currentAssembly=function()\r\n {\r\n  var b;\r\n  return Doc.BindView(Global.id,(b=View.get_Do(),View.Bind(function(a)\r\n  {\r\n   return a!=null&&a.$==1?View.Bind(function(a$1)\r\n   {\r\n    return a$1!=null&&a$1.$==1?View.Const(AssemblyUI.assemblyDoc(a$1.$0)):View.Const(Doc.get_Empty());\r\n   },FShUI.assemblies().TryFindByKeyAsView(a.$0)):View.Const(Doc.get_Empty());\r\n  },AssemblyUI.selectedAssembly().get_View())));\r\n };\r\n AssemblyUI.assemblyDoc=function(asm)\r\n {\r\n  var groups,y;\r\n  function emptyDoc(mo,me)\r\n  {\r\n   return Doc.get_Empty();\r\n  }\r\n  function showView(mo,me)\r\n  {\r\n   var docc;\r\n   return me.retType.name.get_Id()===\"View<string>\"?(docc=new DocComposition({\r\n    $:10,\r\n    $0:new Reference({\r\n     $:1,\r\n     $0:mo.name,\r\n     $1:me\r\n    })\r\n   }),Doc.Concat([AssemblyUI.showAdd(\"Add\",docc),docc.GetDoc()])):AssemblyUI.showAdd(\"Add\",new DocComposition({\r\n    $:7,\r\n    $0:new Reference({\r\n     $:1,\r\n     $0:mo.name,\r\n     $1:me\r\n    })\r\n   }));\r\n  }\r\n  function inputVar(mo,me)\r\n  {\r\n   var ref,doci,doca;\r\n   return me.retType.name.get_Id()===\"Var<string>\"?(ref=new Reference({\r\n    $:1,\r\n    $0:mo.name,\r\n    $1:me\r\n   }),(doci=new DocComposition({\r\n    $:12,\r\n    $0:ref\r\n   }),(doca=new DocComposition({\r\n    $:13,\r\n    $0:ref\r\n   }),Doc.Concat([AssemblyUI.showAdd(\"Text\",new DocComposition({\r\n    $:11,\r\n    $0:ref\r\n   })),AssemblyUI.showAdd(\"Input\",doci),AssemblyUI.showAdd(\"Area\",doca),doci.GetDoc()])))):AssemblyUI.showAdd(\"Add\",new DocComposition({\r\n    $:8,\r\n    $0:new Reference({\r\n     $:1,\r\n     $0:mo.name,\r\n     $1:me\r\n    })\r\n   }));\r\n  }\r\n  function printText(mo,me)\r\n  {\r\n   var docc;\r\n   return me.retType.name.get_Id()===\"string\"?(docc=new DocComposition({\r\n    $:9,\r\n    $0:new Reference({\r\n     $:1,\r\n     $0:mo.name,\r\n     $1:me\r\n    })\r\n   }),Doc.Concat([AssemblyUI.showAdd(\"Add\",docc),docc.GetDoc()])):AssemblyUI.showAdd(\"Add\",new DocComposition({\r\n    $:6,\r\n    $0:new Reference({\r\n     $:1,\r\n     $0:mo.name,\r\n     $1:me\r\n    })\r\n   }));\r\n  }\r\n  function showDoc(mo,me)\r\n  {\r\n   return AssemblyUI.showAdd(\"Add\",new DocComposition({\r\n    $:14,\r\n    $0:new Reference({\r\n     $:1,\r\n     $0:mo.name,\r\n     $1:me\r\n    })\r\n   }));\r\n  }\r\n  function showAct(mo,me)\r\n  {\r\n   return AssemblyUI.showAdd(\"Add\",new DocComposition({\r\n    $:2,\r\n    $0:new Reference({\r\n     $:1,\r\n     $0:mo.name,\r\n     $1:me\r\n    }),\r\n    $1:me.name.get_Id()\r\n   }));\r\n  }\r\n  function m(oldp,t)\r\n  {\r\n   var p;\r\n   p=t[2];\r\n   return[[t[0],[t[1],function(me)\r\n   {\r\n    return p(me)&&!oldp(me);\r\n   }]],function(me)\r\n   {\r\n    return p(me)||oldp(me);\r\n   }];\r\n  }\r\n  groups=Arrays.ofSeq(Seq.map(function(t)\r\n  {\r\n   return t[1];\r\n  },Seq.sortBy(function(t)\r\n  {\r\n   return t[0];\r\n  },(y=List.ofArray([[1,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return inputVar($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return Strings.StartsWith(me.retType.name.get_Id(),\"Var<\")&&me.isField;\r\n  }],[2,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return showView($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return Strings.StartsWith(me.retType.name.get_Id(),\"View<\")&&me.isField;\r\n  }],[3,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return printText($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return me.retType.name.get_Id()!==\"Doc\"&&me.isField&&!(me.retType.name.get_Id().indexOf(\"->\")!=-1);\r\n  }],[0,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return showDoc($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return me.retType.name.get_Id()===\"Doc\"&&(me.isField||Seq.isEmpty(me.parms));\r\n  }],[1,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return showAct($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return me.retType.name.get_Id()===\"unit\"&&!me.isField&&Seq.isEmpty(me.parms);\r\n  }],[4,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return emptyDoc($1,$2);\r\n   };\r\n  },function()\r\n  {\r\n   return true;\r\n  }]]),(((Runtime.Curried3(Seq.mapFold))(m))(function()\r\n  {\r\n   return false;\r\n  }))(y))[0])));\r\n  return Doc.Concat([Doc.Element(\"h3\",[],[Doc.TextNode(asm.name.get_Id())]),Doc.Element(\"div\",[AttrModule.Class(\"wsfmwk-alternate\")],List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.collect(function(m$1)\r\n   {\r\n    var f;\r\n    f=m$1[0];\r\n    return[AssemblyUI.methodRows(m$1[1],asm,function($1,$2)\r\n    {\r\n     return(f($1))($2);\r\n    })];\r\n   },groups);\r\n  })))]);\r\n };\r\n AssemblyUI.showAdd=function(txt,docc)\r\n {\r\n  return Doc.Button(txt,[],function()\r\n  {\r\n   AssemblyUI.addDOC(docc);\r\n  });\r\n };\r\n AssemblyUI.addDOC=function(docc)\r\n {\r\n  var a,m;\r\n  a=(m=AssemblyUI.mainDocNameVar().Get(),m.$==17?docc:m.$==18?new DocComposition({\r\n   $:18,\r\n   $0:m.$0,\r\n   $1:m.$1.concat([docc])\r\n  }):new DocComposition({\r\n   $:18,\r\n   $0:null,\r\n   $1:[m,docc]\r\n  }));\r\n  AssemblyUI.mainDocNameVar().Set(a);\r\n };\r\n AssemblyUI.styleDoc=function()\r\n {\r\n  return Doc.Element(\"style\",List.T.Empty,List.ofArray([Doc.TextNode(\"\\r\\n                            .wsfmwk-alternate > * :nth-child(even) {background: #CCF}\\r\\n                            .wsfmwk-alternate > * :nth-child(odd ) {background: #CFC}\\r\\n                            .wsfmwk-alternate td { border: white ; border-style: solid ; border-width: thin}\\r\\n                            .wsfmwk-alternate tr { border: white ; border-style: solid ; border-width: thin}\\r\\n                        \")]));\r\n };\r\n AssemblyUI.methodRows=function(p,asm,f)\r\n {\r\n  return Doc.Element(\"table\",[AttrProxy.Create(\"style\",\"font-family: monospace\")],List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.collect(function(mo)\r\n   {\r\n    var methods;\r\n    methods=Seq.filter(p,mo.methods);\r\n    return Seq.length(methods)>0?[Doc.Element(\"tr\",[],List.ofSeq(Seq.delay(function()\r\n    {\r\n     return[Doc.Element(\"td\",[],List.ofSeq(Seq.delay(function()\r\n     {\r\n      return Seq.append([Doc.Element(\"b\",[],[Doc.TextNode(mo.name.get_Id2())])],Seq.delay(function()\r\n      {\r\n       return Seq.collect(function(me)\r\n       {\r\n        var s;\r\n        return[Doc.Element(\"tr\",[AssemblyUI.click(function()\r\n        {\r\n         Composition.selectedMethod().Set({\r\n          $:1,\r\n          $0:[asm.name,MethodDef2.New(me,mo.name)]\r\n         });\r\n        })],[Doc.Element(\"td\",[],[Doc.TextNode(me.name.get_Id())]),Doc.Element(\"td\",[],[Doc.TextNode(me.isField?\"\":(s=Strings.concat(\" -> \",Seq.map(function(t)\r\n        {\r\n         return t.name.get_Id();\r\n        },me.parms)),s===\"\"?\"unit\":s))]),Doc.Element(\"td\",[AssemblyUI.nobr()],[Doc.TextNode(me.isField?\":\":\" -> \")]),Doc.Element(\"td\",[],[Doc.TextNode(me.retType.name.get_Id())]),Doc.Element(\"td\",[],[f(mo,me)])])];\r\n       },methods);\r\n      }));\r\n     })))];\r\n    })))]:[];\r\n   },asm.modules);\r\n  })));\r\n };\r\n AssemblyUI.listAssembliesDoc=function()\r\n {\r\n  var m;\r\n  function f(r,asmW)\r\n  {\r\n   return Doc.Element(\"tr\",[],[Doc.Element(\"td\",[AssemblyUI.click(function()\r\n   {\r\n    AssemblyUI.selectedAssembly().Set({\r\n     $:1,\r\n     $0:r\r\n    });\r\n   })],[Doc.TextView(View.Map(function($1)\r\n   {\r\n    return $1.name.get_Id();\r\n   },asmW))])]);\r\n  }\r\n  return Doc.Element(\"table\",[],[(m=FShUI.assemblies(),Doc.ConvertSeqBy(m.key,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return f($1,$2);\r\n   };\r\n  },m[\"var\"].get_View()))]);\r\n };\r\n AssemblyUI.mainDocNameVar=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainDocNameVar;\r\n };\r\n AssemblyUI.selectedAssembly=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.selectedAssembly;\r\n };\r\n AssemblyUI.click$721$45=Runtime.Curried3(function(f,$1,$2)\r\n {\r\n  return f();\r\n });\r\n AssemblyUI.click=function(f)\r\n {\r\n  return AttrProxy.HandlerImpl(\"click\",function()\r\n  {\r\n   return function()\r\n   {\r\n    return f();\r\n   };\r\n  });\r\n };\r\n AssemblyUI.nobr=function()\r\n {\r\n  return AttrProxy.Create(\"style\",\"white-space: nowrap\");\r\n };\r\n AssemblyUI.loadCompossedAssembly=function()\r\n {\r\n  Concurrency.Start(FShUI.processAssembly(Composition.createComposedAssembly(new FShUI_AssemblyData.AssemblyName({\r\n   $:0,\r\n   $0:\"ComposedAssembly\"\r\n  }),Arrays.ofSeq(Seq.map(function(t)\r\n  {\r\n   return t[1];\r\n  },(Composition.compositionsL())[\"var\"].Get())))),null);\r\n };\r\n AssemblyUI.loadFsTranslator=function()\r\n {\r\n  Concurrency.Start(FShUI.loadAssembly(new FShUI_AssemblyData.AssemblyRef({\r\n   $:0,\r\n   $0:\"WsTranslatorLoader.asm\"\r\n  })),null);\r\n };\r\n AssemblyUI.loadThisModule=function()\r\n {\r\n  Concurrency.Start(FShUI.loadAssembly(new FShUI_AssemblyData.AssemblyRef({\r\n   $:0,\r\n   $0:AssemblyUI.thisModuleV().Get()\r\n  })),null);\r\n };\r\n AssemblyUI.thisModuleV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.thisModuleV;\r\n };\r\n SC$1.$cctor=function()\r\n {\r\n  SC$1.$cctor=Global.ignore;\r\n  SC$1.selectedMethod=Var$1.Create$1(null);\r\n  SC$1.compositionsL=ListModel.Create(function(t)\r\n  {\r\n   return t[0];\r\n  },[]);\r\n  SC$1.currentNodeO=null;\r\n  SC$1.assemblies=ListModel.Create(function(ad)\r\n  {\r\n   return ad.name;\r\n  },List.T.Empty);\r\n  SC$1.Folder=\"/EPFileX/Assemblies/\";\r\n  SC$1.thisModuleV=Var$1.Create$1(\"Covid.asm\");\r\n  SC$1.selectedAssembly=Var$1.Create$1(null);\r\n  SC$1.mainDocNameVar=Var$1.Create$1(new DocComposition({\r\n   $:0,\r\n   $0:new LocalId({\r\n    $:0,\r\n    $0:\"NotInitialized\"\r\n   }),\r\n   $1:\"mainDocNameVar Not initialized yet\"\r\n  }));\r\n  SC$1.mainDocVar=Var$1.Create$1(Doc.Element(\"h1\",[],[Doc.TextNode(\"mainDocVar not initialized\")]));\r\n  View.Sink(function(docc)\r\n  {\r\n   var a;\r\n   a=docc.GetDoc();\r\n   AssemblyUI.mainDocVar().Set(a);\r\n  },AssemblyUI.mainDocNameVar().get_View());\r\n  SC$1.mainSubDoc=Doc.BindView(Global.id,AssemblyUI.mainDocVar().get_View());\r\n };\r\n}());\r\n"
    }
  ]
}
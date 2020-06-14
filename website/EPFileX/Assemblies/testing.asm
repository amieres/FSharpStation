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
    "WebSharper.Data.asm"
  ],
  "modules": [
    {
      "moName": "FsRoot.TestingJS+WSFrameworkTest",
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
      "moName": "FsRoot.TestingJS+AssemblyData+ModuleName",
      "methods": []
    },
    {
      "moName": "FsRoot.TestingJS+AssemblyData+TypeName",
      "methods": []
    },
    {
      "moName": "FsRoot.TestingJS+AssemblyData+MethodName",
      "methods": []
    },
    {
      "moName": "FsRoot.TestingJS+AssemblyData+AssemblyName",
      "methods": []
    },
    {
      "moName": "FsRoot.TestingJS+AssemblyData+AssemblyRef",
      "methods": []
    },
    {
      "moName": "FsRoot.TestingJS+AssemblyData+JSCode",
      "methods": []
    },
    {
      "moName": "FsRoot.TestingJS+AssemblyData+ModuleRef",
      "methods": []
    },
    {
      "moName": "FsRoot.TestingJS+AssemblyData+TypeRef",
      "methods": []
    },
    {
      "moName": "FsRoot.TestingJS+AssemblyData+MethodDef",
      "methods": []
    },
    {
      "moName": "FsRoot.TestingJS+AssemblyData+ModuleDef",
      "methods": []
    },
    {
      "moName": "FsRoot.TestingJS+AssemblyData+AssemblyDef",
      "methods": []
    },
    {
      "moName": "FsRoot.TestingJS+AssemblyData+LoadAsm",
      "methods": [
        {
          "meName": "fetchAsmData",
          "isField": 0,
          "type": {
            "tName": "Async<FsRoot.TestingJS+AssemblyData+AssemblyDef>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "FsRoot.TestingJS+AssemblyData+AssemblyRef",
              "asm": "testing"
            }
          ]
        }
      ]
    },
    {
      "moName": "FsRoot.TestingJS+AssemblyData",
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
          "meName": "click$477$45",
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
      "moName": "FsRoot.TestingJS+WSFramework",
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
      "moName": "FsRoot.TestingJS",
      "methods": []
    },
    {
      "moName": "StartupCode$testing$testing",
      "methods": []
    }
  ],
  "js": "(function()\r\n{\r\n \"use strict\";\r\n var Global,FsRoot,TestingJS,WSFrameworkTest,AssemblyData,ModuleName,TypeName,MethodName,AssemblyName,AssemblyRef,JSCode,ModuleRef,TypeRef,MethodDef,ModuleDef,AssemblyDef,LoadAsm,WSFramework,SC$1,WebSharper,UI,Doc,IntelliFactory,Runtime,Strings,Concurrency,Data,TxtRuntime,FSharp,Data$1,Runtime$1,IO,Unchecked,JSON,Arrays,View,List,Utils,Slice,Seq,AttrModule,AttrProxy,Date,console,Client,Templates,Var$1,ListModel;\r\n Global=self;\r\n FsRoot=Global.FsRoot=Global.FsRoot||{};\r\n TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};\r\n WSFrameworkTest=TestingJS.WSFrameworkTest=TestingJS.WSFrameworkTest||{};\r\n AssemblyData=TestingJS.AssemblyData=TestingJS.AssemblyData||{};\r\n ModuleName=AssemblyData.ModuleName=AssemblyData.ModuleName||{};\r\n TypeName=AssemblyData.TypeName=AssemblyData.TypeName||{};\r\n MethodName=AssemblyData.MethodName=AssemblyData.MethodName||{};\r\n AssemblyName=AssemblyData.AssemblyName=AssemblyData.AssemblyName||{};\r\n AssemblyRef=AssemblyData.AssemblyRef=AssemblyData.AssemblyRef||{};\r\n JSCode=AssemblyData.JSCode=AssemblyData.JSCode||{};\r\n ModuleRef=AssemblyData.ModuleRef=AssemblyData.ModuleRef||{};\r\n TypeRef=AssemblyData.TypeRef=AssemblyData.TypeRef||{};\r\n MethodDef=AssemblyData.MethodDef=AssemblyData.MethodDef||{};\r\n ModuleDef=AssemblyData.ModuleDef=AssemblyData.ModuleDef||{};\r\n AssemblyDef=AssemblyData.AssemblyDef=AssemblyData.AssemblyDef||{};\r\n LoadAsm=AssemblyData.LoadAsm=AssemblyData.LoadAsm||{};\r\n WSFramework=TestingJS.WSFramework=TestingJS.WSFramework||{};\r\n SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};\r\n WebSharper=Global.WebSharper;\r\n UI=WebSharper&&WebSharper.UI;\r\n Doc=UI&&UI.Doc;\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime=IntelliFactory&&IntelliFactory.Runtime;\r\n Strings=WebSharper&&WebSharper.Strings;\r\n Concurrency=WebSharper&&WebSharper.Concurrency;\r\n Data=WebSharper&&WebSharper.Data;\r\n TxtRuntime=Data&&Data.TxtRuntime;\r\n FSharp=Global.FSharp;\r\n Data$1=FSharp&&FSharp.Data;\r\n Runtime$1=Data$1&&Data$1.Runtime;\r\n IO=Runtime$1&&Runtime$1.IO;\r\n Unchecked=WebSharper&&WebSharper.Unchecked;\r\n JSON=Global.JSON;\r\n Arrays=WebSharper&&WebSharper.Arrays;\r\n View=UI&&UI.View;\r\n List=WebSharper&&WebSharper.List;\r\n Utils=WebSharper&&WebSharper.Utils;\r\n Slice=WebSharper&&WebSharper.Slice;\r\n Seq=WebSharper&&WebSharper.Seq;\r\n AttrModule=UI&&UI.AttrModule;\r\n AttrProxy=UI&&UI.AttrProxy;\r\n Date=Global.Date;\r\n console=Global.console;\r\n Client=UI&&UI.Client;\r\n Templates=Client&&Client.Templates;\r\n Var$1=UI&&UI.Var$1;\r\n ListModel=UI&&UI.ListModel;\r\n WSFrameworkTest.mainDocNameVar=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainDocNameVar;\r\n };\r\n WSFrameworkTest.mainDoc=function()\r\n {\r\n  return Doc.Element(\"div\",[],[Doc.Element(\"h1\",[],[Doc.TextNode(\"Hello WSFramework\")]),WSFrameworkTest.testVarInput(),WSFrameworkTest.testVarOut()]);\r\n };\r\n WSFrameworkTest.testVarOut=function()\r\n {\r\n  return Doc.Element(\"div\",[],[Doc.TextView(WSFrameworkTest.testVar().get_View())]);\r\n };\r\n WSFrameworkTest.testVarInput=function()\r\n {\r\n  return Doc.Element(\"div\",[],[Doc.Input([],WSFrameworkTest.testVar())]);\r\n };\r\n WSFrameworkTest.testVar=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.testVar;\r\n };\r\n ModuleName=AssemblyData.ModuleName=Runtime.Class({\r\n  get_Id2:function()\r\n  {\r\n   return Strings.Replace(this.get_Id(),\"+\",\".\");\r\n  },\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,ModuleName);\r\n TypeName=AssemblyData.TypeName=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,TypeName);\r\n MethodName=AssemblyData.MethodName=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,MethodName);\r\n AssemblyName=AssemblyData.AssemblyName=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,AssemblyName);\r\n AssemblyRef=AssemblyData.AssemblyRef=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,AssemblyRef);\r\n JSCode=AssemblyData.JSCode=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,JSCode);\r\n ModuleRef.New=function(name,asmName)\r\n {\r\n  return{\r\n   name:name,\r\n   asmName:asmName\r\n  };\r\n };\r\n TypeRef.New=function(name,asm)\r\n {\r\n  return{\r\n   name:name,\r\n   asm:asm\r\n  };\r\n };\r\n MethodDef.New=function(name,retType,parms,isField)\r\n {\r\n  return{\r\n   name:name,\r\n   retType:retType,\r\n   parms:parms,\r\n   isField:isField\r\n  };\r\n };\r\n ModuleDef.New=function(name,methods)\r\n {\r\n  return{\r\n   name:name,\r\n   methods:methods\r\n  };\r\n };\r\n AssemblyDef.New=function(name,self$1,modules,dependencies,javaScript)\r\n {\r\n  return{\r\n   name:name,\r\n   self:self$1,\r\n   modules:modules,\r\n   dependencies:dependencies,\r\n   javaScript:javaScript\r\n  };\r\n };\r\n LoadAsm.fetchAsmData=function(folder,a)\r\n {\r\n  var url,b;\r\n  url=a.$0;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(TxtRuntime.AsyncMap(IO.asyncReadTextAtRuntime(false,\"D:\\\\Abe\\\\CIPHERWorkspace\\\\FSharpStation\\\\src\",\"\",\"JSON\",\"\",url.indexOf(\"/\")!=-1?url:folder+url),function(t)\r\n   {\r\n    return Unchecked.Equals(typeof t,\"string\")?JSON.parse(t):t;\r\n   }),function(a$1)\r\n   {\r\n    var n,prop,opt,s,j,prop$1,opt$1,d;\r\n    return Concurrency.Return((n=new AssemblyName({\r\n     $:0,\r\n     $0:(opt=(prop=\"asName\",prop in a$1?{\r\n      $:1,\r\n      $0:a$1[prop]\r\n     }:null),opt==null?null:opt.$0)\r\n    }),(s=new AssemblyRef({\r\n     $:0,\r\n     $0:url\r\n    }),(j=new JSCode({\r\n     $:0,\r\n     $0:(opt$1=(prop$1=\"js\",prop$1 in a$1?{\r\n      $:1,\r\n      $0:a$1[prop$1]\r\n     }:null),opt$1==null?null:opt$1.$0)\r\n    }),(d=Arrays.map(function(a$2)\r\n    {\r\n     return new AssemblyRef({\r\n      $:0,\r\n      $0:a$2\r\n     });\r\n    },a$1.dependencies),AssemblyDef.New(n,s,Arrays.map(function(mo)\r\n    {\r\n     var prop$2,opt$2;\r\n     return ModuleDef.New(new ModuleName({\r\n      $:0,\r\n      $0:(opt$2=(prop$2=\"moName\",prop$2 in mo?{\r\n       $:1,\r\n       $0:mo[prop$2]\r\n      }:null),opt$2==null?null:opt$2.$0)\r\n     }),Arrays.map(function(me)\r\n     {\r\n      var n$1,prop$3,opt$3,i,v,prop$4,opt$4,x,prop$5,opt$5,x$1,prop$6,opt$6;\r\n      n$1=new MethodName({\r\n       $:0,\r\n       $0:(opt$3=(prop$3=\"meName\",prop$3 in me?{\r\n        $:1,\r\n        $0:me[prop$3]\r\n       }:null),opt$3==null?null:opt$3.$0)\r\n      });\r\n      i=(v=(prop$4=\"isField\",prop$4 in me?{\r\n       $:1,\r\n       $0:me[prop$4]\r\n      }:null),(opt$4=v==null?null:{\r\n       $:1,\r\n       $0:1*v.$0\r\n      },opt$4==null?null:opt$4.$0))===1;\r\n      return MethodDef.New(n$1,TypeRef.New(new TypeName({\r\n       $:0,\r\n       $0:(opt$5=(x=me.type,(prop$5=\"tName\",prop$5 in x?{\r\n        $:1,\r\n        $0:x[prop$5]\r\n       }:null)),opt$5==null?null:opt$5.$0)\r\n      }),new AssemblyName({\r\n       $:0,\r\n       $0:(opt$6=(x$1=me.type,(prop$6=\"asm\",prop$6 in x$1?{\r\n        $:1,\r\n        $0:x$1[prop$6]\r\n       }:null)),opt$6==null?null:opt$6.$0)\r\n      })),Arrays.map(function(p)\r\n      {\r\n       var prop$7,opt$7,prop$8,opt$8;\r\n       return TypeRef.New(new TypeName({\r\n        $:0,\r\n        $0:(opt$7=(prop$7=\"tName\",prop$7 in p?{\r\n         $:1,\r\n         $0:p[prop$7]\r\n        }:null),opt$7==null?null:opt$7.$0)\r\n       }),new AssemblyName({\r\n        $:0,\r\n        $0:(opt$8=(prop$8=\"asm\",prop$8 in p?{\r\n         $:1,\r\n         $0:p[prop$8]\r\n        }:null),opt$8==null?null:opt$8.$0)\r\n       }));\r\n      },me.parms),i);\r\n     },mo.methods));\r\n    },a$1.modules),d,j))))));\r\n   });\r\n  });\r\n };\r\n AssemblyData.assembliesDoc=function()\r\n {\r\n  return Doc.Concat([Doc.Button(\"Load module:\",[],function()\r\n  {\r\n   AssemblyData.loadThisModule();\r\n  }),Doc.Input([],AssemblyData.thisModuleV()),AssemblyData.listAssembliesDoc(),AssemblyData.currentAssembly(),AssemblyData.styleDoc()]);\r\n };\r\n AssemblyData.currentAssembly=function()\r\n {\r\n  var b;\r\n  return Doc.BindView(Global.id,(b=View.get_Do(),View.Bind(function(a)\r\n  {\r\n   return a!=null&&a.$==1?View.Bind(function(a$1)\r\n   {\r\n    return a$1!=null&&a$1.$==1?View.Const(AssemblyData.assemblyDoc(a$1.$0)):View.Const(Doc.get_Empty());\r\n   },AssemblyData.assemblies().TryFindByKeyAsView(a.$0)):View.Const(Doc.get_Empty());\r\n  },AssemblyData.selectedAssembly().get_View())));\r\n };\r\n AssemblyData.assemblyDoc=function(asm)\r\n {\r\n  var groups,y;\r\n  function emptyDoc(mo,me)\r\n  {\r\n   return Doc.get_Empty();\r\n  }\r\n  function inputVar(mo,me)\r\n  {\r\n   if(me.retType.name.get_Id()!==\"Var<string>\")\r\n    return Doc.get_Empty();\r\n   else\r\n    try\r\n    {\r\n     return Doc.Input(List.T.Empty,Global[\"eval\"]((((Runtime.Curried3(function($1,$2,$3)\r\n     {\r\n      return $1(Utils.toSafe($2)+\".\"+Utils.toSafe($3)+\"()\");\r\n     }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id())));\r\n    }\r\n    catch(e)\r\n    {\r\n     return Doc.TextNode(e.message);\r\n    }\r\n  }\r\n  function printText(mo,me)\r\n  {\r\n   var $1,x;\r\n   if(me.retType.name.get_Id().indexOf(\"<\")!=-1)\r\n    return Doc.get_Empty();\r\n   else\r\n    {\r\n     try\r\n     {\r\n      $1=(x=Global[\"eval\"]((((Runtime.Curried3(function($2,$3,$4)\r\n      {\r\n       return $2(Utils.toSafe($3)+\".\"+Utils.toSafe($4)+\"()\");\r\n      }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id())),(function($2)\r\n      {\r\n       return function($3)\r\n       {\r\n        return $2(Utils.prettyPrint($3));\r\n       };\r\n      }(Global.id))(x));\r\n     }\r\n     catch(e)\r\n     {\r\n      $1=e.message;\r\n     }\r\n     return Doc.TextNode($1);\r\n    }\r\n  }\r\n  function showDoc(mo,me)\r\n  {\r\n   return Doc.Concat([Doc.Button(\"Show\",[],function()\r\n   {\r\n    var a,x;\r\n    a=(x=(((Runtime.Curried3(function($1,$2,$3)\r\n    {\r\n     return $1(Utils.toSafe($2)+\".\"+Utils.toSafe($3)+\"()\");\r\n    }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id()),(function($1)\r\n    {\r\n     return function($2)\r\n     {\r\n      return $1(\"WebSharper.UI.Doc.Concat([\"+Utils.toSafe($2)+\"])\");\r\n     };\r\n    }(Global.id))(x));\r\n    WSFrameworkTest.mainDocNameVar().Set(a);\r\n   }),Doc.Button(\"Add\",[],function()\r\n   {\r\n    var code,a,x;\r\n    code=WSFrameworkTest.mainDocNameVar().Get();\r\n    a=(x=(((Runtime.Curried3(function($1,$2,$3)\r\n    {\r\n     return $1(Utils.toSafe($2)+\".\"+Utils.toSafe($3)+\"()\");\r\n    }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id()),(((Runtime.Curried3(function($1,$2,$3)\r\n    {\r\n     return $1(Utils.toSafe($2)+\", \"+Utils.toSafe($3)+\"])\");\r\n    }))(Global.id))(Slice.string(code,null,{\r\n     $:1,\r\n     $0:code.length-3\r\n    })))(x));\r\n    WSFrameworkTest.mainDocNameVar().Set(a);\r\n   })]);\r\n  }\r\n  function m(oldp,t)\r\n  {\r\n   var p;\r\n   p=t[1];\r\n   return[[t[0],function(me)\r\n   {\r\n    return p(me)&&!oldp(me);\r\n   }],function(me)\r\n   {\r\n    return p(me)||oldp(me);\r\n   }];\r\n  }\r\n  groups=(y=List.ofArray([[function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return inputVar($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return Strings.StartsWith(me.retType.name.get_Id(),\"Var<\")&&me.isField;\r\n  }],[function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return emptyDoc($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return Strings.StartsWith(me.retType.name.get_Id(),\"View<\")&&me.isField;\r\n  }],[function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return printText($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return me.retType.name.get_Id()!==\"Doc\"&&me.isField&&!(me.retType.name.get_Id().indexOf(\"->\")!=-1);\r\n  }],[function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return showDoc($1,$2);\r\n   };\r\n  },function(me)\r\n  {\r\n   return me.retType.name.get_Id()===\"Doc\"&&(me.isField||Seq.isEmpty(me.parms));\r\n  }],[function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return emptyDoc($1,$2);\r\n   };\r\n  },function()\r\n  {\r\n   return true;\r\n  }]]),(((Runtime.Curried3(Seq.mapFold))(m))(function()\r\n  {\r\n   return false;\r\n  }))(y))[0];\r\n  return Doc.Concat([Doc.Element(\"h3\",[],[Doc.TextNode(asm.name.get_Id())]),Doc.Element(\"div\",[AttrModule.Class(\"wsfmwk-alternate\")],List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.collect(function(m$1)\r\n   {\r\n    var f;\r\n    f=m$1[0];\r\n    return[AssemblyData.methodRows(m$1[1],asm,function($1,$2)\r\n    {\r\n     return(f($1))($2);\r\n    })];\r\n   },groups);\r\n  })))]);\r\n };\r\n AssemblyData.styleDoc=function()\r\n {\r\n  return Doc.Element(\"style\",List.T.Empty,List.ofArray([Doc.TextNode(\"\\r\\n                            .wsfmwk-alternate > * :nth-child(even) {background: #CCF}\\r\\n                            .wsfmwk-alternate > * :nth-child(odd ) {background: #CFC}\\r\\n                            .wsfmwk-alternate td { border: white ; border-style: solid ; border-width: thin}\\r\\n                            .wsfmwk-alternate tr { border: white ; border-style: solid ; border-width: thin}\\r\\n                        \")]));\r\n };\r\n AssemblyData.methodRows=function(p,asm,f)\r\n {\r\n  return Doc.Element(\"table\",[AttrProxy.Create(\"style\",\"font-family: monospace\")],List.ofSeq(Seq.delay(function()\r\n  {\r\n   return Seq.collect(function(mo)\r\n   {\r\n    var methods;\r\n    methods=Seq.filter(p,mo.methods);\r\n    return Seq.length(methods)>0?[Doc.Element(\"tr\",[],List.ofSeq(Seq.delay(function()\r\n    {\r\n     return[Doc.Element(\"td\",[],List.ofSeq(Seq.delay(function()\r\n     {\r\n      return Seq.append([Doc.Element(\"b\",[],[Doc.TextNode(mo.name.get_Id2())])],Seq.delay(function()\r\n      {\r\n       return Seq.collect(function(me)\r\n       {\r\n        var x;\r\n        return[Doc.Element(\"tr\",[AssemblyData.click(function()\r\n        {\r\n         AssemblyData.selectedMethod().Set({\r\n          $:1,\r\n          $0:[mo.name,me.name]\r\n         });\r\n        })],[Doc.Element(\"td\",[],[Doc.TextNode(me.name.get_Id())]),Doc.Element(\"td\",[],[Doc.TextNode(me.isField?\"\":(x=Strings.concat(\", \",Seq.map(function(t)\r\n        {\r\n         return t.name.get_Id();\r\n        },me.parms)),(function($1)\r\n        {\r\n         return function($2)\r\n         {\r\n          return $1(\"(\"+Utils.toSafe($2)+\")\");\r\n         };\r\n        }(Global.id))(x)))]),Doc.Element(\"td\",[AssemblyData.nobr()],[Doc.TextNode(me.isField?\":\":\" -> \")]),Doc.Element(\"td\",[],[Doc.TextNode(me.retType.name.get_Id())]),Doc.Element(\"td\",[],[f(mo,me)])])];\r\n       },methods);\r\n      }));\r\n     })))];\r\n    })))]:[];\r\n   },asm.modules);\r\n  })));\r\n };\r\n AssemblyData.selectedMethod=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.selectedMethod;\r\n };\r\n AssemblyData.listAssembliesDoc=function()\r\n {\r\n  var m;\r\n  function f(r,asmW)\r\n  {\r\n   return Doc.Element(\"tr\",[],[Doc.Element(\"td\",[AssemblyData.click(function()\r\n   {\r\n    AssemblyData.selectedAssembly().Set({\r\n     $:1,\r\n     $0:r\r\n    });\r\n   })],[Doc.TextView(View.Map(function($1)\r\n   {\r\n    return $1.name.get_Id();\r\n   },asmW))])]);\r\n  }\r\n  return Doc.Element(\"table\",[],[(m=AssemblyData.assemblies(),Doc.ConvertSeqBy(m.key,function($1)\r\n  {\r\n   return function($2)\r\n   {\r\n    return f($1,$2);\r\n   };\r\n  },m[\"var\"].get_View()))]);\r\n };\r\n AssemblyData.selectedAssembly=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.selectedAssembly;\r\n };\r\n AssemblyData.click$477$45=Runtime.Curried3(function(f,$1,$2)\r\n {\r\n  return f();\r\n });\r\n AssemblyData.click=function(f)\r\n {\r\n  return AttrProxy.HandlerImpl(\"click\",function()\r\n  {\r\n   return function()\r\n   {\r\n    return f();\r\n   };\r\n  });\r\n };\r\n AssemblyData.nobr=function()\r\n {\r\n  return AttrProxy.Create(\"style\",\"white-space: nowrap\");\r\n };\r\n AssemblyData.loadThisModule=function()\r\n {\r\n  Concurrency.Start(AssemblyData.loadAssembly(new AssemblyRef({\r\n   $:0,\r\n   $0:AssemblyData.thisModuleV().Get()\r\n  })),null);\r\n };\r\n AssemblyData.thisModuleV=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.thisModuleV;\r\n };\r\n AssemblyData.alreadyLoaded=function()\r\n {\r\n  return Seq.length((AssemblyData.assemblies())[\"var\"].Get())>0;\r\n };\r\n AssemblyData.loadTesting=function()\r\n {\r\n  Concurrency.Start(AssemblyData.loadAssembly(new AssemblyRef({\r\n   $:0,\r\n   $0:(function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(\"testing.asm?q=\"+Utils.prettyPrint($2));\r\n    };\r\n   }(Global.id))(Date.now())\r\n  })),null);\r\n };\r\n AssemblyData.loadAssembly=function(asm)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(AssemblyData[\"loadAssembly'\"](AssemblyData.isLoaded,function(d)\r\n   {\r\n    AssemblyData.loadDef(d);\r\n   },function(a)\r\n   {\r\n    return LoadAsm.fetchAsmData(AssemblyData.Folder(),a);\r\n   },asm),function()\r\n   {\r\n    var asms;\r\n    asms=Arrays.ofSeq((AssemblyData.assemblies())[\"var\"].Get());\r\n    self.IntelliFactory.Runtime.Start();\r\n    AssemblyData.saveAssemblies(asms);\r\n    return Concurrency.Zero();\r\n   });\r\n  });\r\n };\r\n AssemblyData.saveAssemblies=function(asms)\r\n {\r\n  AssemblyData.assemblies().Set(asms);\r\n };\r\n AssemblyData.Folder=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.Folder;\r\n };\r\n AssemblyData.loadDef=function(def)\r\n {\r\n  var asms;\r\n  try\r\n  {\r\n   asms=List.ofSeq((AssemblyData.assemblies())[\"var\"].Get());\r\n   Global[\"eval\"]((((Runtime.Curried3(function($1,$2,$3)\r\n   {\r\n    return $1(\"console.log('loading \"+Utils.toSafe($2)+\" ...');\"+Utils.toSafe($3));\r\n   }))(Global.id))(def.name.get_Id()))(def.javaScript.get_Id()));\r\n   AssemblyData.assemblies().Set(new List.T({\r\n    $:1,\r\n    $0:def,\r\n    $1:asms\r\n   }));\r\n  }\r\n  catch(e)\r\n  {\r\n   ((function($1)\r\n   {\r\n    return function($2)\r\n    {\r\n     return $1(Utils.prettyPrint($2));\r\n    };\r\n   }(function(s)\r\n   {\r\n    console.log(s);\r\n   }))(e));\r\n  }\r\n };\r\n AssemblyData.isLoaded=function(asmRef)\r\n {\r\n  return AssemblyData.assemblies().TryFind(function(ad)\r\n  {\r\n   return Unchecked.Equals(ad.self,asmRef);\r\n  })!=null;\r\n };\r\n AssemblyData.assemblies=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.assemblies;\r\n };\r\n AssemblyData[\"loadAssembly'\"]=function(isLoaded,loadDef,fetchAsmData,asm)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return isLoaded(asm)?Concurrency.Zero():Concurrency.Bind(fetchAsmData(asm),function(a)\r\n   {\r\n    return Concurrency.Combine(Concurrency.For(a.dependencies,function(a$1)\r\n    {\r\n     return Concurrency.Bind(AssemblyData[\"loadAssembly'\"](isLoaded,loadDef,fetchAsmData,a$1),function()\r\n     {\r\n      return Concurrency.Return(null);\r\n     });\r\n    }),Concurrency.Delay(function()\r\n    {\r\n     loadDef(a);\r\n     return Concurrency.Zero();\r\n    }));\r\n   });\r\n  });\r\n };\r\n WSFramework.main=function()\r\n {\r\n  var x,a;\r\n  if(AssemblyData.alreadyLoaded())\r\n   {\r\n    x=Doc.Element(\"div\",[],[WSFramework.mainDocInput(),AssemblyData.assembliesDoc(),Doc.Element(\"div\",[],[WSFramework.mainSubDoc()])]);\r\n    a=self.document.body;\r\n    Templates.LoadLocalTemplates(\"\");\r\n    Doc.Run(a,x);\r\n   }\r\n  else\r\n   AssemblyData.loadTesting();\r\n };\r\n WSFramework.mainSubDoc=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainSubDoc;\r\n };\r\n WSFramework.mainDocInput=function()\r\n {\r\n  return Doc.Element(\"div\",[],[Doc.Input([AttrProxy.Create(\"style\",\"width: 100%\")],WSFramework.mainDocNameVar())]);\r\n };\r\n WSFramework.mainDocVar=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainDocVar;\r\n };\r\n WSFramework.mainDocNameVar=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.mainDocNameVar$1;\r\n };\r\n SC$1.$cctor=function()\r\n {\r\n  SC$1.$cctor=Global.ignore;\r\n  SC$1.testVar=Var$1.Create$1(\"Hello WSFrameWork\");\r\n  SC$1.mainDocNameVar=Var$1.Create$1(\"FsRoot.TestingJS.WSFrameworkTest.mainDoc()\");\r\n  SC$1.assemblies=ListModel.Create(function(ad)\r\n  {\r\n   return ad.name;\r\n  },List.T.Empty);\r\n  SC$1.Folder=\"/EPFileX/Assemblies/\";\r\n  SC$1.thisModuleV=Var$1.Create$1(\"Covid.asm\");\r\n  SC$1.selectedAssembly=Var$1.Create$1(null);\r\n  SC$1.selectedMethod=Var$1.Create$1(null);\r\n  SC$1.mainDocNameVar$1=WSFrameworkTest.mainDocNameVar();\r\n  SC$1.mainDocVar=Var$1.Create$1(Doc.Element(\"h1\",[],[Doc.TextNode(\"mainDocVar not initialized\")]));\r\n  View.Sink(function(nm)\r\n  {\r\n   var docObj;\r\n   try\r\n   {\r\n    docObj=Global[\"eval\"](nm);\r\n    docObj instanceof Doc?WSFramework.mainDocVar().Set(docObj):typeof docObj==\"string\"?WSFramework.mainDocVar().Set(Doc.TextNode(docObj)):docObj instanceof UI.Var?WSFramework.mainDocVar().Set(Doc.TextView(docObj.get_View())):docObj instanceof View?WSFramework.mainDocVar().Set(Doc.TextView(docObj)):console.log(\"mainDocNameVar type mismatch: \",docObj);\r\n   }\r\n   catch(e)\r\n   {\r\n    ((function($1)\r\n    {\r\n     return function($2)\r\n     {\r\n      return $1(Utils.prettyPrint($2));\r\n     };\r\n    }(function(s)\r\n    {\r\n     console.log(s);\r\n    }))(e));\r\n   }\r\n  },WSFramework.mainDocNameVar().get_View());\r\n  SC$1.mainSubDoc=Doc.BindView(Global.id,WSFramework.mainDocVar().get_View());\r\n };\r\n Runtime.OnLoad(function()\r\n {\r\n  WSFramework.main();\r\n });\r\n}());\r\n"
}
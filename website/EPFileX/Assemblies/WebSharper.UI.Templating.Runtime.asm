{
  "asName": "WebSharper.UI.Templating.Runtime",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm",
    "WebSharper.Control.asm",
    "WebSharper.Web.asm",
    "WebSharper.Sitelets.asm",
    "WebSharper.UI.asm"
  ],
  "modules": [
    {
      "moName": "WebSharper.UI.Templating.Runtime.Server+TemplateInitializer",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Templating.Runtime.Server+TemplateInstances",
      "methods": [
        {
          "meName": "GetInstance",
          "isField": 0,
          "type": {
            "tName": "Templating.Runtime.Server+TemplateInstance",
            "asm": "WebSharper.UI.Templating.Runtime"
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
      "moName": "WebSharper.UI.Templating.Runtime.Server+Handler",
      "methods": [
        {
          "meName": "CompleteHoles$138$20",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
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
        },
        {
          "meName": "EventQ2$114$42",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Microsoft.FSharp.Quotations.FSharpExpr<(Templating.Runtime.Server+TemplateEvent<Object, _> -> unit)>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "CompleteHoles",
          "isField": 0,
          "type": {
            "tName": "(IEnumerable<TemplateHole> * Templating.Runtime.Server+CompletedHoles)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "IEnumerable<TemplateHole>",
              "asm": "netstandard"
            },
            {
              "tName": "(string * Templating.Runtime.Server+ValTy)[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "EventQ2",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
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
              "tName": "(unit -> Templating.Runtime.Server+TemplateInstance)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Microsoft.FSharp.Quotations.FSharpExpr<(Templating.Runtime.Server+TemplateEvent<Object, 'a> -> unit)>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Templating.Runtime.Server+ProviderBuilder",
      "methods": [
        {
          "meName": "Make",
          "isField": 0,
          "type": {
            "tName": "Templating.Runtime.Server+ProviderBuilder",
            "asm": "WebSharper.UI.Templating.Runtime"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.UI.Templating.Runtime.Server+TemplateInstance",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Templating.Runtime.Server+Runtime",
      "methods": []
    },
    {
      "moName": "WebSharper.UI.Templating.Runtime.Client",
      "methods": [
        {
          "meName": "AfterRenderQ2$58$26",
          "isField": 0,
          "type": {
            "tName": "TemplateHole",
            "asm": "WebSharper.UI"
          },
          "parms": [
            {
              "tName": "Microsoft.FSharp.Quotations.FSharpExpr<(unit -> unit)>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "|Box|",
          "isField": 0,
          "type": {
            "tName": "Object",
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
      "moName": "WebSharper.UI.Templating.Runtime.Client+HandlerProxy",
      "methods": []
    }
  ],
  "js": "(function()\r\n{\r\n \"use strict\";\r\n var Global,WebSharper,Obj,UI,Templating,Runtime,Server,TemplateInitializer,TemplateInstances,Handler,ProviderBuilder,TemplateInstance,Client,IntelliFactory,Runtime$1,Collections,Dictionary,Arrays,Var$1,Operators,Doc,Activator,HashSet,Enumerator,Seq,System,Guid;\r\n Global=self;\r\n WebSharper=Global.WebSharper;\r\n Obj=WebSharper&&WebSharper.Obj;\r\n UI=WebSharper.UI=WebSharper.UI||{};\r\n Templating=UI.Templating=UI.Templating||{};\r\n Runtime=Templating.Runtime=Templating.Runtime||{};\r\n Server=Runtime.Server=Runtime.Server||{};\r\n TemplateInitializer=Server.TemplateInitializer=Server.TemplateInitializer||{};\r\n TemplateInstances=Server.TemplateInstances=Server.TemplateInstances||{};\r\n Handler=Server.Handler=Server.Handler||{};\r\n ProviderBuilder=Server.ProviderBuilder=Server.ProviderBuilder||{};\r\n TemplateInstance=Server.TemplateInstance=Server.TemplateInstance||{};\r\n Client=Runtime.Client=Runtime.Client||{};\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime$1=IntelliFactory&&IntelliFactory.Runtime;\r\n Collections=WebSharper&&WebSharper.Collections;\r\n Dictionary=Collections&&Collections.Dictionary;\r\n Arrays=WebSharper&&WebSharper.Arrays;\r\n Var$1=UI&&UI.Var$1;\r\n Operators=WebSharper&&WebSharper.Operators;\r\n Doc=UI&&UI.Doc;\r\n Activator=WebSharper&&WebSharper.Activator;\r\n HashSet=Collections&&Collections.HashSet;\r\n Enumerator=WebSharper&&WebSharper.Enumerator;\r\n Seq=WebSharper&&WebSharper.Seq;\r\n System=Global.System;\r\n Guid=System&&System.Guid;\r\n TemplateInitializer=Server.TemplateInitializer=Runtime$1.Class({\r\n  get_Vars:function()\r\n  {\r\n   return this.vars;\r\n  },\r\n  get_Id:function()\r\n  {\r\n   return this.id;\r\n  },\r\n  get_Instance:function()\r\n  {\r\n   var i,d,a,i$1,$1,f,t;\r\n   if(this.hasOwnProperty(\"instance\"))\r\n    return this.instance;\r\n   else\r\n    {\r\n     d=new Dictionary.New$5();\r\n     a=this.vars;\r\n     for(i$1=0,$1=a.length-1;i$1<=$1;i$1++){\r\n      f=Arrays.get(a,i$1);\r\n      t=f[1];\r\n      d.set_Item(f[0],t===0?Var$1.Create$1(\"\"):t===1?Var$1.Create$1(0):t===2?Var$1.Create$1(false):Operators.FailWith(\"Invalid value type\"));\r\n     }\r\n     i=new TemplateInstance.New({\r\n      $:0,\r\n      $0:d\r\n     },Doc.get_Empty());\r\n     this.instance=i;\r\n     return i;\r\n    }\r\n  }\r\n },Obj,TemplateInitializer);\r\n TemplateInitializer.New=Runtime$1.Ctor(function(id,vars)\r\n {\r\n  Obj.New.call(this);\r\n  this.id=id;\r\n  this.vars=vars;\r\n },TemplateInitializer);\r\n TemplateInstances=Server.TemplateInstances=Runtime$1.Class({},Obj,TemplateInstances);\r\n TemplateInstances.GetInstance=function(key)\r\n {\r\n  return(Activator.Instances())[key].get_Instance();\r\n };\r\n TemplateInstances.New=Runtime$1.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n },TemplateInstances);\r\n Handler.CompleteHoles$138$20=function(key,s)\r\n {\r\n  return function(el)\r\n  {\r\n   return function()\r\n   {\r\n    return TemplateInstances.GetInstance(key).Hole(s).Set(el.value);\r\n   };\r\n  };\r\n };\r\n Handler.EventQ2$114$42=function(key,f)\r\n {\r\n  return function(el)\r\n  {\r\n   return function(ev)\r\n   {\r\n    return f({\r\n     Vars:TemplateInstances.GetInstance(key),\r\n     Target:el,\r\n     Event:ev\r\n    });\r\n   };\r\n  };\r\n };\r\n Handler.CompleteHoles=function(a,filledHoles,vars)\r\n {\r\n  var allVars,filledVars,e,h,$1,n;\r\n  function c(name,ty)\r\n  {\r\n   var p,r,r$1,r$2;\r\n   return filledVars.Contains(name)?null:(p=ty===0?(r=Var$1.Create$1(\"\"),[{\r\n    $:8,\r\n    $0:name,\r\n    $1:r\r\n   },r]):ty===1?(r$1=Var$1.Create$1(0),[{\r\n    $:13,\r\n    $0:name,\r\n    $1:r$1\r\n   },r$1]):ty===2?(r$2=Var$1.Create$1(false),[{\r\n    $:9,\r\n    $0:name,\r\n    $1:r$2\r\n   },r$2]):Operators.FailWith(\"Invalid value type\"),(allVars.set_Item(name,p[1]),{\r\n    $:1,\r\n    $0:p[0]\r\n   }));\r\n  }\r\n  allVars=new Dictionary.New$5();\r\n  filledVars=new HashSet.New$3();\r\n  e=Enumerator.Get(filledHoles);\r\n  try\r\n  {\r\n   while(e.MoveNext())\r\n    {\r\n     h=e.Current();\r\n     (h.$==8?($1=[h.$0,Client.Box(h.$1)],true):h.$==11?($1=[h.$0,Client.Box(h.$1)],true):h.$==10?($1=[h.$0,Client.Box(h.$1)],true):h.$==13?($1=[h.$0,Client.Box(h.$1)],true):h.$==12?($1=[h.$0,Client.Box(h.$1)],true):h.$==9&&($1=[h.$0,Client.Box(h.$1)],true))?(n=$1[0],filledVars.Add(n),allVars.set_Item(n,$1[1])):void 0;\r\n    }\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e==\"object\"&&\"Dispose\"in e)\r\n    e.Dispose();\r\n  }\r\n  return[Seq.append(filledHoles,Arrays.choose(function($2)\r\n  {\r\n   return c($2[0],$2[1]);\r\n  },vars)),{\r\n   $:0,\r\n   $0:allVars\r\n  }];\r\n };\r\n Handler.EventQ2=function(key,holeName,ti,f)\r\n {\r\n  return{\r\n   $:5,\r\n   $0:holeName,\r\n   $1:true,\r\n   $2:function(el)\r\n   {\r\n    return function(ev)\r\n    {\r\n     return f({\r\n      Vars:ti(),\r\n      Target:el,\r\n      Event:ev\r\n     });\r\n    };\r\n   }\r\n  };\r\n };\r\n ProviderBuilder=Server.ProviderBuilder=Runtime$1.Class({\r\n  WithHole:function(h)\r\n  {\r\n   this.h.push(h);\r\n   return this;\r\n  }\r\n },null,ProviderBuilder);\r\n ProviderBuilder.Make=function()\r\n {\r\n  var c;\r\n  return ProviderBuilder.New(null,(c=Guid.NewGuid(),Global.String(c)),[]);\r\n };\r\n ProviderBuilder.New=function(Instance,Key,Holes)\r\n {\r\n  return new ProviderBuilder({\r\n   i:Instance,\r\n   k:Key,\r\n   h:Holes\r\n  });\r\n };\r\n TemplateInstance=Server.TemplateInstance=Runtime$1.Class({\r\n  Hole:function(name)\r\n  {\r\n   return this.allVars.get_Item(name);\r\n  },\r\n  get_Doc:function()\r\n  {\r\n   return this.doc;\r\n  }\r\n },Obj,TemplateInstance);\r\n TemplateInstance.New=Runtime$1.Ctor(function(c,doc)\r\n {\r\n  Obj.New.call(this);\r\n  this.doc=doc;\r\n  this.allVars=c.$==0?c.$0:Operators.FailWith(\"Should not happen\");\r\n },TemplateInstance);\r\n Client.AfterRenderQ2$58$26=function(f)\r\n {\r\n  return function()\r\n  {\r\n   f();\r\n  };\r\n };\r\n Client.Box=Global.id;\r\n}());\r\n"
}
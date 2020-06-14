{
  "asName": "WebSharper.Data",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm",
    "WebSharper.Control.asm",
    "WebSharper.Web.asm",
    "WebSharper.Sitelets.asm"
  ],
  "modules": [
    {
      "moName": "System.IO.StringReader",
      "methods": []
    },
    {
      "moName": "WebSharper.Data.Pervasives",
      "methods": [
        {
          "meName": "randomFunctionName",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "FSharp.Data.Runtime.WorldBank.WorldBankData",
      "methods": []
    },
    {
      "moName": "WebSharper.Data.WBRuntime+WorldBankCountry",
      "methods": []
    },
    {
      "moName": "WebSharper.Data.WBRuntime+WorldBankRuntime",
      "methods": [
        {
          "meName": "AsyncGetIndicator",
          "isField": 0,
          "type": {
            "tName": "Async<Object>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.Data.WBRuntime+WorldBankCountry",
              "asm": "WebSharper.Data"
            },
            {
              "tName": "string",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "GetIndicators",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Data.WBRuntime+WorldBankCountry",
            "asm": "WebSharper.Data"
          },
          "parms": [
            {
              "tName": "WebSharper.Data.WBRuntime+WorldBankCountry",
              "asm": "WebSharper.Data"
            }
          ]
        },
        {
          "meName": "GetCountry",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Data.WBRuntime+WorldBankCountry",
            "asm": "WebSharper.Data"
          },
          "parms": [
            {
              "tName": "FSharp.Data.Runtime.WorldBank.WorldBankData",
              "asm": "FSharp.Data"
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
      "moName": "WebSharper.Data.WBRuntime",
      "methods": [
        {
          "meName": "worldBankUrl",
          "isField": 0,
          "type": {
            "tName": "string",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FSharp.Data.Runtime.WorldBank.WorldBankData",
              "asm": "FSharp.Data"
            },
            {
              "tName": "List<string>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "List<(string * string)>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "FSharp.Data.Runtime.WorldBank.IWorldBankData",
      "methods": []
    },
    {
      "moName": "FSharp.Data.Runtime.WorldBank.ICountry",
      "methods": []
    },
    {
      "moName": "FSharp.Data.Runtime.WorldBank.ICountryCollection",
      "methods": []
    },
    {
      "moName": "FSharp.Data.Runtime.WorldBank.IIndicators",
      "methods": []
    },
    {
      "moName": "FSharp.Data.Runtime.WorldBank.Country",
      "methods": []
    },
    {
      "moName": "FSharp.Data.Runtime.WorldBank.Indicator",
      "methods": []
    },
    {
      "moName": "WebSharper.Data.Utils",
      "methods": []
    },
    {
      "moName": "WebSharper.Data.JSRuntime",
      "methods": [
        {
          "meName": "GetArrayChildByTypeTag",
          "isField": 0,
          "type": {
            "tName": "FSharp.Data.Runtime.BaseTypes.IJsonDocument",
            "asm": "FSharp.Data"
          },
          "parms": [
            {
              "tName": "FSharp.Data.Runtime.BaseTypes.IJsonDocument",
              "asm": "FSharp.Data"
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
          "meName": "TryGetArrayChildByTypeTag",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FSharp.Data.Runtime.BaseTypes.IJsonDocument",
              "asm": "FSharp.Data"
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
              "tName": "Func<FSharp.Data.Runtime.BaseTypes.IJsonDocument, 'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "TryGetValueByTypeTag",
          "isField": 0,
          "type": {
            "tName": "Option<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "FSharp.Data.Runtime.BaseTypes.IJsonDocument",
              "asm": "FSharp.Data"
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
              "tName": "Func<FSharp.Data.Runtime.BaseTypes.IJsonDocument, 'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "GetArrayChildrenByTypeTag",
          "isField": 0,
          "type": {
            "tName": "'a[]",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "FSharp.Data.Runtime.BaseTypes.IJsonDocument",
              "asm": "FSharp.Data"
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
              "tName": "Func<FSharp.Data.Runtime.BaseTypes.IJsonDocument, 'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "matchTag",
          "isField": 0,
          "type": {
            "tName": "Option<Object>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Object",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.Data.TxtRuntime",
      "methods": [
        {
          "meName": "AsyncMap",
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
              "tName": "Func<'a, 'b>",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "FSharp.Data.JsonValue",
      "methods": []
    },
    {
      "moName": "FSharp.Data.Runtime.BaseTypes.JsonDocument",
      "methods": []
    },
    {
      "moName": "FSharp.Data.Runtime.BaseTypes.IJsonDocument",
      "methods": []
    },
    {
      "moName": "FSharp.Data.Runtime.JsonValueOptionAndPath",
      "methods": []
    },
    {
      "moName": "FSharp.Data.Runtime.TextRuntime",
      "methods": []
    },
    {
      "moName": "FSharp.Data.Runtime.IO",
      "methods": [
        {
          "meName": "asyncReadTextAtRuntimeWithDesignTimeRules",
          "isField": 0,
          "type": {
            "tName": "Async<IO.TextReader>",
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
          "meName": "asyncReadTextAtRuntime",
          "isField": 0,
          "type": {
            "tName": "Async<IO.TextReader>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "bool",
              "asm": "netstandard"
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
      "moName": "FSharp.Data.Runtime.JsonRuntime",
      "methods": []
    }
  ],
  "js": "(function()\r\n{\r\n \"use strict\";\r\n var Global,WebSharper,Data,Pervasives,WBRuntime,WorldBankCountry,WorldBankRuntime,Obj,FSharp,Data$1,Runtime,WorldBank,Indicator,JSRuntime,TxtRuntime,IO,Strings,System,Guid,Concurrency,$,List,JavaScript,Pervasives$1,Arrays,IntelliFactory,Runtime$1,Operators,Array,Unchecked;\r\n Global=self;\r\n WebSharper=Global.WebSharper=Global.WebSharper||{};\r\n Data=WebSharper.Data=WebSharper.Data||{};\r\n Pervasives=Data.Pervasives=Data.Pervasives||{};\r\n WBRuntime=Data.WBRuntime=Data.WBRuntime||{};\r\n WorldBankCountry=WBRuntime.WorldBankCountry=WBRuntime.WorldBankCountry||{};\r\n WorldBankRuntime=WBRuntime.WorldBankRuntime=WBRuntime.WorldBankRuntime||{};\r\n Obj=WebSharper&&WebSharper.Obj;\r\n FSharp=Global.FSharp=Global.FSharp||{};\r\n Data$1=FSharp.Data=FSharp.Data||{};\r\n Runtime=Data$1.Runtime=Data$1.Runtime||{};\r\n WorldBank=Runtime.WorldBank=Runtime.WorldBank||{};\r\n Indicator=WorldBank.Indicator=WorldBank.Indicator||{};\r\n JSRuntime=Data.JSRuntime=Data.JSRuntime||{};\r\n TxtRuntime=Data.TxtRuntime=Data.TxtRuntime||{};\r\n IO=Runtime.IO=Runtime.IO||{};\r\n Strings=WebSharper&&WebSharper.Strings;\r\n System=Global.System;\r\n Guid=System&&System.Guid;\r\n Concurrency=WebSharper&&WebSharper.Concurrency;\r\n $=Global.jQuery;\r\n List=WebSharper&&WebSharper.List;\r\n JavaScript=WebSharper&&WebSharper.JavaScript;\r\n Pervasives$1=JavaScript&&JavaScript.Pervasives;\r\n Arrays=WebSharper&&WebSharper.Arrays;\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime$1=IntelliFactory&&IntelliFactory.Runtime;\r\n Operators=WebSharper&&WebSharper.Operators;\r\n Array=Global.Array;\r\n Unchecked=WebSharper&&WebSharper.Unchecked;\r\n Pervasives.randomFunctionName=function()\r\n {\r\n  var c;\r\n  return Strings.ReplaceChar((c=Guid.NewGuid(),Global.String(c)).toLowerCase(),\"-\",\"_\");\r\n };\r\n WorldBankCountry.New=function(Context,Code,Name)\r\n {\r\n  return{\r\n   Context:Context,\r\n   Code:Code,\r\n   Name:Name\r\n  };\r\n };\r\n WorldBankRuntime.AsyncGetIndicator=function(country,indicator)\r\n {\r\n  return Concurrency.FromContinuations(function(ok,ko)\r\n  {\r\n   var guid,r;\r\n   guid=Pervasives.randomFunctionName();\r\n   $.ajax((r={},r.url=WBRuntime.worldBankUrl(country.Context,List.ofArray([\"countries\",country.Code,\"indicators\",indicator]),List.ofArray([[\"date\",\"1900:2050\"],[\"format\",\"jsonp\"]])),r.dataType=\"jsonp\",r.jsonp=\"prefix\",r.jsonpCallback=\"jsonp\"+guid,r.error=function(jqXHR,textStatus,error)\r\n   {\r\n    return ko(new Global.Error(textStatus+error));\r\n   },r.success=function(data)\r\n   {\r\n    return ok(Pervasives$1.NewFromSeq(Arrays.choose(function(e)\r\n    {\r\n     return e.value==null?null:{\r\n      $:1,\r\n      $0:[e.date,e.value]\r\n     };\r\n    },Arrays.get(data,1)).slice().reverse()));\r\n   },r));\r\n  });\r\n };\r\n WorldBankRuntime.GetIndicators=Global.id;\r\n WorldBankRuntime.GetCountry=function(countries,code,name)\r\n {\r\n  return WorldBankCountry.New(countries,code,name);\r\n };\r\n WBRuntime.worldBankUrl=function(wb,functions,props)\r\n {\r\n  function m(key,value)\r\n  {\r\n   return\"&\"+key+\"=\"+Global.encodeURIComponent(value);\r\n  }\r\n  return wb.serviceUrl+\"/\"+Strings.concat(\"\",List.map(function(m$1)\r\n  {\r\n   return\"/\"+Global.encodeURIComponent(m$1);\r\n  },functions))+\"?per_page=1000\"+Strings.concat(\"\",List.map(function($1)\r\n  {\r\n   return m($1[0],$1[1]);\r\n  },props));\r\n };\r\n Indicator=WorldBank.Indicator=Runtime$1.Class({\r\n  TryGetValueAt:function(year)\r\n  {\r\n   var e;\r\n   e=this[Global.String(year)];\r\n   return e==void 0?null:{\r\n    $:1,\r\n    $0:e\r\n   };\r\n  }\r\n },Obj,Indicator);\r\n JSRuntime.GetArrayChildByTypeTag=function(value,cultureStr,tagCode)\r\n {\r\n  var arr;\r\n  arr=JSRuntime.GetArrayChildrenByTypeTag(value,cultureStr,tagCode,Global.id);\r\n  return Arrays.length(arr)===1?Arrays.get(arr,0):Operators.FailWith(\"JSON mismatch: Expected single value, but found multiple.\");\r\n };\r\n JSRuntime.TryGetArrayChildByTypeTag=function(doc,cultureStr,tagCode,mapping)\r\n {\r\n  var arr;\r\n  arr=JSRuntime.GetArrayChildrenByTypeTag(doc,cultureStr,tagCode,mapping);\r\n  return Arrays.length(arr)===1?{\r\n   $:1,\r\n   $0:Arrays.get(arr,0)\r\n  }:Arrays.length(arr)===0?null:Operators.FailWith(\"JSON mismatch: Expected Array with single or no elements.\");\r\n };\r\n JSRuntime.TryGetValueByTypeTag=function(doc,cultureStr,tagCode,mapping)\r\n {\r\n  var o;\r\n  o=JSRuntime.matchTag(tagCode,doc);\r\n  return o==null?null:{\r\n   $:1,\r\n   $0:mapping(o.$0)\r\n  };\r\n };\r\n JSRuntime.GetArrayChildrenByTypeTag=function(doc,cultureStr,tagCode,mapping)\r\n {\r\n  return Array.isArray(doc)?Arrays.map(function(x)\r\n  {\r\n   return mapping(Global.id(x));\r\n  },Arrays.choose(function(v)\r\n  {\r\n   return JSRuntime.matchTag(tagCode,v);\r\n  },doc)):Operators.FailWith(\"JSON mismatch: Expected Array node\");\r\n };\r\n JSRuntime.matchTag=function(tagCode,value)\r\n {\r\n  var v;\r\n  return value==null?null:Unchecked.Equals(typeof value,\"boolean\")&&tagCode===\"Boolean\"?{\r\n   $:1,\r\n   $0:value\r\n  }:Unchecked.Equals(typeof value,\"number\")&&tagCode===\"Number\"?{\r\n   $:1,\r\n   $0:value\r\n  }:Unchecked.Equals(typeof value,\"string\")&&tagCode===\"Number\"?(v=1*value,Global.isNaN(v)?null:{\r\n   $:1,\r\n   $0:v\r\n  }):Unchecked.Equals(typeof value,\"string\")&&tagCode===\"String\"?{\r\n   $:1,\r\n   $0:value\r\n  }:Array.isArray(value)&&tagCode===\"Array\"?{\r\n   $:1,\r\n   $0:value\r\n  }:Unchecked.Equals(typeof value,\"object\")&&tagCode===\"Record\"?{\r\n   $:1,\r\n   $0:value\r\n  }:null;\r\n };\r\n TxtRuntime.AsyncMap=function(comp,mapping)\r\n {\r\n  var b;\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(comp,function(a)\r\n   {\r\n    return Concurrency.Return(mapping(a));\r\n   });\r\n  });\r\n };\r\n IO.asyncReadTextAtRuntimeWithDesignTimeRules=function(defaultResolutionFolder,resolutionFolder,formatName,encodingStr,uri)\r\n {\r\n  return IO.asyncReadTextAtRuntime(false,defaultResolutionFolder,resolutionFolder,formatName,encodingStr,uri);\r\n };\r\n IO.asyncReadTextAtRuntime=function(forFSI,defaultResolutionFolder,resolutionFolder,formatName,encodingStr,uri)\r\n {\r\n  function a(ok,ko)\r\n  {\r\n   var p,l,settings,r,fn;\r\n   p=(l=uri.toLowerCase(),Strings.StartsWith(l,\"jsonp|\")?[uri.substring(6),true]:Strings.StartsWith(l,\"json|\")?[uri.substring(5),false]:[uri,false]);\r\n   settings=(r={},r.dataType=\"json\",r.success=function(data)\r\n   {\r\n    return ok(data);\r\n   },r.error=function(a$1,a$2,err)\r\n   {\r\n    return ko(new Global.Error(err));\r\n   },r);\r\n   p[1]?(fn=Pervasives.randomFunctionName(),settings.dataType=\"jsonp\",settings.jsonp=\"prefix\",settings.jsonpCallback=\"jsonp\"+fn):void 0;\r\n   $.ajax(p[0],settings);\r\n  }\r\n  return Concurrency.FromContinuations(function($1,$2,$3)\r\n  {\r\n   return a.apply(null,[$1,$2,$3]);\r\n  });\r\n };\r\n}());\r\n"
}
{
  "asName": "WebSharper.Web",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm"
  ],
  "modules": [
    {
      "moName": "WebSharper.ClientSideJson+Provider",
      "methods": [
        {
          "meName": "DecodeLinkedList",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Object -> LinkedList<'a>))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> (Object -> 'a))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "DecodeArrayDictionary",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Object -> Dictionary<'a, 'b>))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> (Object -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> (Object -> 'b))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "DecodeStringDictionary",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Object -> Dictionary<string, 'a>))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> (Object -> 'a))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "DecodeArrayMap",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Object -> Map<'a, 'b>))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> (Object -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> (Object -> 'b))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "DecodeStringMap",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Object -> Map<string, 'a>))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> (Object -> 'a))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "DecodeArray",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Object -> 'a[]))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> (Object -> 'a))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "DecodeUnion",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Object -> 'a))",
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
              "tName": "(string * (string * string * (unit -> (Object -> Object)) * WebSharper.ClientSideJson+OptionalFieldKind)[])[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "DecodeRecord",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Object -> 'a))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "(string * (unit -> (Object -> Object)) * WebSharper.ClientSideJson+OptionalFieldKind)[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "DecodeSet",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Object -> Set<'a>))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> (Object -> 'a))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "DecodeList",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Object -> List<'a>))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> (Object -> 'a))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "DecodeDateTimeOffset",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Object -> DateTimeOffset))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "DecodeDateTime",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Object -> DateTime))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "DecodeTuple",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Object -> Object[]))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> (Object -> Object))[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "EncodeLinkedList",
          "isField": 0,
          "type": {
            "tName": "(unit -> (LinkedList<Object> -> Object))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> (Object -> Object))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "EncodeArrayDictionary",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Dictionary<'a, 'b> -> Object))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> ('a -> Object))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> ('b -> Object))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "EncodeStringDictionary",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Dictionary<string, 'a> -> Object))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> ('a -> Object))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "EncodeArrayMap",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Map<'a, 'b> -> Object))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> ('a -> Object))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> ('b -> Object))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "EncodeStringMap",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Map<string, 'a> -> Object))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> ('a -> Object))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "EncodeSet",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Set<'a> -> Object))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> ('a -> Object))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "EncodeArray",
          "isField": 0,
          "type": {
            "tName": "(unit -> ('a[] -> Object))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> ('a -> Object))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "EncodeUnion",
          "isField": 0,
          "type": {
            "tName": "(unit -> ('a -> Object))",
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
              "tName": "(string * (string * string * (unit -> (Object -> Object)) * WebSharper.ClientSideJson+OptionalFieldKind)[])[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "EncodeRecord",
          "isField": 0,
          "type": {
            "tName": "(unit -> ('a -> Object))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "Object",
              "asm": "netstandard"
            },
            {
              "tName": "(string * (unit -> (Object -> Object)) * WebSharper.ClientSideJson+OptionalFieldKind)[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "EncodeList",
          "isField": 0,
          "type": {
            "tName": "(unit -> (List<'a> -> Object))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> ('a -> Object))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "EncodeDateTimeOffset",
          "isField": 0,
          "type": {
            "tName": "(unit -> (DateTimeOffset -> Object))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "EncodeDateTime",
          "isField": 0,
          "type": {
            "tName": "(unit -> (DateTime -> Object))",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "EncodeTuple",
          "isField": 0,
          "type": {
            "tName": "(unit -> (Object[] -> Object))",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(unit -> (Object -> Object))[]",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Id",
          "isField": 0,
          "type": {
            "tName": "(unit -> ('a -> 'a))",
            "asm": "FSharp.Core"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.TypedJson",
      "methods": []
    },
    {
      "moName": "WebSharper.Web.Control",
      "methods": []
    },
    {
      "moName": "WebSharper.Web.FSharpInlineControl",
      "methods": []
    },
    {
      "moName": "WebSharper.Web.InlineControl",
      "methods": []
    },
    {
      "moName": "WebSharper.WebExtensions",
      "methods": []
    }
  ],
  "js": "(function()\r\n{\r\n \"use strict\";\r\n var Global,WebSharper,ClientSideJson,Provider,Web,Control,FSharpInlineControl,InlineControl,IntelliFactory,Runtime,Collections,LinkedList,Arrays,Dictionary,FSharpMap,List,Operators,Unchecked,FSharpSet,BalancedTree,Enumerator,Map,Seq,DateTimeOffset;\r\n Global=self;\r\n WebSharper=Global.WebSharper=Global.WebSharper||{};\r\n ClientSideJson=WebSharper.ClientSideJson=WebSharper.ClientSideJson||{};\r\n Provider=ClientSideJson.Provider=ClientSideJson.Provider||{};\r\n Web=WebSharper.Web=WebSharper.Web||{};\r\n Control=Web.Control=Web.Control||{};\r\n FSharpInlineControl=Web.FSharpInlineControl=Web.FSharpInlineControl||{};\r\n InlineControl=Web.InlineControl=Web.InlineControl||{};\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime=IntelliFactory&&IntelliFactory.Runtime;\r\n Collections=WebSharper&&WebSharper.Collections;\r\n LinkedList=Collections&&Collections.LinkedList;\r\n Arrays=WebSharper&&WebSharper.Arrays;\r\n Dictionary=Collections&&Collections.Dictionary;\r\n FSharpMap=Collections&&Collections.FSharpMap;\r\n List=WebSharper&&WebSharper.List;\r\n Operators=WebSharper&&WebSharper.Operators;\r\n Unchecked=WebSharper&&WebSharper.Unchecked;\r\n FSharpSet=Collections&&Collections.FSharpSet;\r\n BalancedTree=Collections&&Collections.BalancedTree;\r\n Enumerator=WebSharper&&WebSharper.Enumerator;\r\n Map=Collections&&Collections.Map;\r\n Seq=WebSharper&&WebSharper.Seq;\r\n DateTimeOffset=WebSharper&&WebSharper.DateTimeOffset;\r\n Provider.DecodeLinkedList=Runtime.Curried3(function(decEl,$1,o)\r\n {\r\n  var l,decEl$1,i,$2;\r\n  l=new LinkedList.New();\r\n  decEl$1=decEl();\r\n  for(i=0,$2=o.length-1;i<=$2;i++)l.AddLast(decEl$1(Arrays.get(o,i)));\r\n  return l;\r\n });\r\n Provider.DecodeArrayDictionary=function(decKey,decEl)\r\n {\r\n  return function()\r\n  {\r\n   return function(o)\r\n   {\r\n    var decKey$1,decEl$1,d,i,$1,f;\r\n    decKey$1=decKey();\r\n    decEl$1=decEl();\r\n    d=new Dictionary.New$5();\r\n    for(i=0,$1=o.length-1;i<=$1;i++){\r\n     f=Arrays.get(o,i);\r\n     d.Add(decKey$1(f[0]),decEl$1(f[1]));\r\n    }\r\n    return d;\r\n   };\r\n  };\r\n };\r\n Provider.DecodeStringDictionary=Runtime.Curried3(function(decEl,$1,o)\r\n {\r\n  var d,decEl$1,k;\r\n  d=new Dictionary.New$5();\r\n  decEl$1=decEl();\r\n  for(var k$1 in o)if(function(k$2)\r\n  {\r\n   d.Add(k$2,decEl$1(o[k$2]));\r\n   return false;\r\n  }(k$1))\r\n   break;\r\n  return d;\r\n });\r\n Provider.DecodeArrayMap=function(decKey,decEl)\r\n {\r\n  return function()\r\n  {\r\n   return function(o)\r\n   {\r\n    var m,decKey$1,decEl$1,i,$1,f;\r\n    decKey$1=decKey();\r\n    decEl$1=decEl();\r\n    m=new FSharpMap.New(List.T.Empty);\r\n    for(i=0,$1=o.length-1;i<=$1;i++){\r\n     f=Arrays.get(o,i);\r\n     m=m.Add(decKey$1(f[0]),decEl$1(f[1]));\r\n    }\r\n    return m;\r\n   };\r\n  };\r\n };\r\n Provider.DecodeStringMap=Runtime.Curried3(function(decEl,$1,o)\r\n {\r\n  var m,decEl$1,k;\r\n  m=[new FSharpMap.New([])];\r\n  decEl$1=decEl();\r\n  for(var k$1 in o)if(function(k$2)\r\n  {\r\n   var v;\r\n   m[0]=(v=decEl$1(o[k$2]),m[0].Add(k$2,v));\r\n   return false;\r\n  }(k$1))\r\n   break;\r\n  return m[0];\r\n });\r\n Provider.DecodeArray=function(decEl)\r\n {\r\n  return Provider.EncodeArray(decEl);\r\n };\r\n Provider.DecodeUnion=function(t,discr,cases)\r\n {\r\n  return function()\r\n  {\r\n   return function(x)\r\n   {\r\n    var tag,tagName,o,r,k;\r\n    function p(name,a$1)\r\n    {\r\n     return name===tagName;\r\n    }\r\n    function a(from,to,dec,kind)\r\n    {\r\n     var r$1;\r\n     if(from===null)\r\n      {\r\n       r$1=(dec(null))(x);\r\n       to?delete r$1[discr]:void 0;\r\n       o.$0=r$1;\r\n      }\r\n     else\r\n      if(kind===0)\r\n       o[from]=(dec(null))(x[to]);\r\n      else\r\n       if(kind===1)\r\n        o[from]=x.hasOwnProperty(to)?{\r\n         $:1,\r\n         $0:(dec(null))(x[to])\r\n        }:null;\r\n       else\r\n        Operators.FailWith(\"Invalid field option kind\");\r\n    }\r\n    if(typeof x===\"object\"&&x!=null)\r\n     {\r\n      o=t===void 0?{}:new t();\r\n      if(Unchecked.Equals(typeof discr,\"string\"))\r\n       tag=(tagName=x[discr],Arrays.findIndex(function($1)\r\n       {\r\n        return p($1[0],$1[1]);\r\n       },cases));\r\n      else\r\n       {\r\n        r=[void 0];\r\n        for(var k$1 in discr)if(function(k$2)\r\n        {\r\n         return x.hasOwnProperty(k$2)&&(r[0]=discr[k$2],true);\r\n        }(k$1))\r\n         break;\r\n        tag=r[0];\r\n       }\r\n      o.$=tag;\r\n      Arrays.iter(function($1)\r\n      {\r\n       return a($1[0],$1[1],$1[2],$1[3]);\r\n      },(Arrays.get(cases,tag))[1]);\r\n      return o;\r\n     }\r\n    else\r\n     return x;\r\n   };\r\n  };\r\n };\r\n Provider.DecodeRecord=function(t,fields)\r\n {\r\n  return function()\r\n  {\r\n   return function(x)\r\n   {\r\n    var o;\r\n    function a(name,dec,kind)\r\n    {\r\n     if(kind===0)\r\n     {\r\n      if(x.hasOwnProperty(name))\r\n       o[name]=(dec(null))(x[name]);\r\n      else\r\n       Operators.FailWith(\"Missing mandatory field: \"+name);\r\n     }\r\n     else\r\n      if(kind===1)\r\n       o[name]=x.hasOwnProperty(name)?{\r\n        $:1,\r\n        $0:(dec(null))(x[name])\r\n       }:null;\r\n      else\r\n       if(kind===2)\r\n       {\r\n        if(x.hasOwnProperty(name))\r\n         o[name]=(dec(null))(x[name]);\r\n       }\r\n       else\r\n        if(kind===3)\r\n        {\r\n         if(x[name]===void 0)\r\n          o[name]=(dec(null))(x[name]);\r\n        }\r\n        else\r\n         Operators.FailWith(\"Invalid field option kind\");\r\n    }\r\n    o=t===void 0?{}:new t();\r\n    Arrays.iter(function($1)\r\n    {\r\n     return a($1[0],$1[1],$1[2]);\r\n    },fields);\r\n    return o;\r\n   };\r\n  };\r\n };\r\n Provider.DecodeSet=Runtime.Curried3(function(decEl,$1,a)\r\n {\r\n  return new FSharpSet.New$1(BalancedTree.OfSeq(Arrays.map(decEl(),a)));\r\n });\r\n Provider.DecodeList=Runtime.Curried3(function(decEl,$1,a)\r\n {\r\n  var e;\r\n  e=decEl();\r\n  return List.init(Arrays.length(a),function(i)\r\n  {\r\n   return e(Arrays.get(a,i));\r\n  });\r\n });\r\n Provider.DecodeDateTimeOffset=Runtime.Curried3(function($1,$2,x)\r\n {\r\n  return x.hasOwnProperty(\"d\")?{\r\n   d:(new Global.Date(x.d)).getTime(),\r\n   o:Operators.toInt(x.o*60000/60000)\r\n  }:{\r\n   d:(new Global.Date(x)).getTime(),\r\n   o:Operators.toInt(0/60000)\r\n  };\r\n });\r\n Provider.DecodeDateTime=Runtime.Curried3(function($1,$2,x)\r\n {\r\n  return x.hasOwnProperty(\"d\")?(new Global.Date(x.d)).getTime():(new Global.Date(x)).getTime();\r\n });\r\n Provider.DecodeTuple=function(decs)\r\n {\r\n  return Provider.EncodeTuple(decs);\r\n };\r\n Provider.EncodeLinkedList=Runtime.Curried3(function(encEl,$1,d)\r\n {\r\n  var o,e,e$1;\r\n  o=[];\r\n  e=encEl();\r\n  e$1=Enumerator.Get(d);\r\n  try\r\n  {\r\n   while(e$1.MoveNext())\r\n    o.push(e(e$1.Current()));\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e$1==\"object\"&&\"Dispose\"in e$1)\r\n    e$1.Dispose();\r\n  }\r\n  return o;\r\n });\r\n Provider.EncodeArrayDictionary=function(encKey,encEl)\r\n {\r\n  return function()\r\n  {\r\n   return function(d)\r\n   {\r\n    var e,a,k,e$1,a$1,ps;\r\n    a=[];\r\n    k=encKey();\r\n    e$1=encEl();\r\n    e=d.GetEnumerator$1();\r\n    try\r\n    {\r\n     while(e.MoveNext())\r\n      {\r\n       a$1=Operators.KeyValue(e.Current());\r\n       ps=[[k(a$1[0]),e$1(a$1[1])]];\r\n       a.push.apply(a,ps);\r\n      }\r\n    }\r\n    finally\r\n    {\r\n     e.Dispose();\r\n    }\r\n    return a;\r\n   };\r\n  };\r\n };\r\n Provider.EncodeStringDictionary=Runtime.Curried3(function(encEl,$1,d)\r\n {\r\n  var o,e,e$1,a;\r\n  o={};\r\n  e=encEl();\r\n  e$1=Enumerator.Get(d);\r\n  try\r\n  {\r\n   while(e$1.MoveNext())\r\n    {\r\n     a=Operators.KeyValue(e$1.Current());\r\n     o[a[0]]=e(a[1]);\r\n    }\r\n  }\r\n  finally\r\n  {\r\n   if(typeof e$1==\"object\"&&\"Dispose\"in e$1)\r\n    e$1.Dispose();\r\n  }\r\n  return o;\r\n });\r\n Provider.EncodeArrayMap=function(encKey,encEl)\r\n {\r\n  return function()\r\n  {\r\n   return function(m)\r\n   {\r\n    var a,k,e;\r\n    a=[];\r\n    k=encKey();\r\n    e=encEl();\r\n    Map.Iterate(function(key,el)\r\n    {\r\n     var ps;\r\n     ps=[[k(key),e(el)]],a.push.apply(a,ps);\r\n    },m);\r\n    return a;\r\n   };\r\n  };\r\n };\r\n Provider.EncodeStringMap=Runtime.Curried3(function(encEl,$1,m)\r\n {\r\n  var o,e;\r\n  o={};\r\n  e=encEl();\r\n  Map.Iterate(function(k,v)\r\n  {\r\n   o[k]=e(v);\r\n  },m);\r\n  return o;\r\n });\r\n Provider.EncodeSet=Runtime.Curried3(function(encEl,$1,s)\r\n {\r\n  var a,e;\r\n  a=[];\r\n  e=encEl();\r\n  Seq.iter(function(x)\r\n  {\r\n   a.push(e(x));\r\n  },s);\r\n  return a;\r\n });\r\n Provider.EncodeArray=Runtime.Curried3(function(encEl,$1,a)\r\n {\r\n  return Arrays.map(encEl(),a);\r\n });\r\n Provider.EncodeUnion=function(a,discr,cases)\r\n {\r\n  return function()\r\n  {\r\n   return function(x)\r\n   {\r\n    var o,p;\r\n    function a$1(from,to,enc,kind)\r\n    {\r\n     var record,k,m;\r\n     if(from===null)\r\n      {\r\n       record=(enc(null))(x.$0);\r\n       for(var k$1 in record)if(function(f)\r\n       {\r\n        o[f]=record[f];\r\n        return false;\r\n       }(k$1))\r\n        break;\r\n      }\r\n     else\r\n      if(kind===0)\r\n       o[to]=(enc(null))(x[from]);\r\n      else\r\n       if(kind===1)\r\n        {\r\n         m=x[from];\r\n         m==null?void 0:o[to]=(enc(null))(m.$0);\r\n        }\r\n       else\r\n        Operators.FailWith(\"Invalid field option kind\");\r\n    }\r\n    return typeof x===\"object\"&&x!=null?(o={},(p=Arrays.get(cases,x.$),(Unchecked.Equals(typeof discr,\"string\")?o[discr]=p[0]:void 0,Arrays.iter(function($1)\r\n    {\r\n     return a$1($1[0],$1[1],$1[2],$1[3]);\r\n    },p[1]),o))):x;\r\n   };\r\n  };\r\n };\r\n Provider.EncodeRecord=function(a,fields)\r\n {\r\n  return function()\r\n  {\r\n   return function(x)\r\n   {\r\n    var o;\r\n    function a$1(name,enc,kind)\r\n    {\r\n     var m;\r\n     if(kind===0)\r\n      o[name]=(enc(null))(x[name]);\r\n     else\r\n      if(kind===1)\r\n       {\r\n        m=x[name];\r\n        m==null?void 0:o[name]=(enc(null))(m.$0);\r\n       }\r\n      else\r\n       if(kind===2)\r\n       {\r\n        if(x.hasOwnProperty(name))\r\n         o[name]=(enc(null))(x[name]);\r\n       }\r\n       else\r\n        if(kind===3)\r\n        {\r\n         if(x[name]===void 0)\r\n          o[name]=(enc(null))(x[name]);\r\n        }\r\n        else\r\n         Operators.FailWith(\"Invalid field option kind\");\r\n    }\r\n    o={};\r\n    Arrays.iter(function($1)\r\n    {\r\n     return a$1($1[0],$1[1],$1[2]);\r\n    },fields);\r\n    return o;\r\n   };\r\n  };\r\n };\r\n Provider.EncodeList=Runtime.Curried3(function(encEl,$1,l)\r\n {\r\n  var a,e;\r\n  a=[];\r\n  e=encEl();\r\n  List.iter(function(x)\r\n  {\r\n   a.push(e(x));\r\n  },l);\r\n  return a;\r\n });\r\n Provider.EncodeDateTimeOffset=Runtime.Curried3(function($1,$2,x)\r\n {\r\n  return{\r\n   d:(new Global.Date(DateTimeOffset.get_DateTime(x))).toISOString(),\r\n   o:x.o\r\n  };\r\n });\r\n Provider.EncodeDateTime=Runtime.Curried3(function($1,$2,x)\r\n {\r\n  return(new Global.Date(x)).toISOString();\r\n });\r\n Provider.EncodeTuple=Runtime.Curried3(function(encs,$1,args)\r\n {\r\n  return Arrays.map2(function($2,$3)\r\n  {\r\n   return($2(null))($3);\r\n  },encs,args);\r\n });\r\n Provider.Id=Runtime.Curried3(function($1,$2,x)\r\n {\r\n  return x;\r\n });\r\n Control=Web.Control=Runtime.Class({\r\n  Body:function()\r\n  {\r\n   return this.get_Body();\r\n  }\r\n },null,Control);\r\n FSharpInlineControl=Web.FSharpInlineControl=Runtime.Class({\r\n  get_Body:function()\r\n  {\r\n   return Arrays.fold(function($1,$2)\r\n   {\r\n    return $1[$2];\r\n   },self,this.funcName).apply(null,this.args);\r\n  }\r\n },Control,FSharpInlineControl);\r\n InlineControl=Web.InlineControl=Runtime.Class({\r\n  get_Body:function()\r\n  {\r\n   return Arrays.fold(function($1,$2)\r\n   {\r\n    return $1[$2];\r\n   },self,this.funcName).apply(null,this.args);\r\n  }\r\n },Control,InlineControl);\r\n}());\r\n"
}
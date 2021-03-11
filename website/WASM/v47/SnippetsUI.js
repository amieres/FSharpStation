(function(Global)
{
 "use strict";
 var FsRootDll,Library,UoM,Unsafe,Dict,Monads,Seq,SplitByOption,Option,String,ParseO,Serializer,JsonIntermediate,Snippet,SnippetModule,SnippetSerialize,Model,LibraryJS,View,Serializer$1,Util,DragDrop,DragInfo,SnippetsUI,SnippetHierData,SaveLoad,SC$1,SnippetsUI_Templates,WebSharper,Seq$1,IntelliFactory,Runtime,Arrays,List,Strings,Slice,Operators,Char,Unchecked,Collections,FSharpMap,Utils,FSharpSet,BalancedTree,Option$1,System,Guid,Date,UI,View$1,JSON,Var$1,Doc,FromView,AttrModule,Concurrency,JavaScript,Promise,console,Templating,Runtime$1,Server,ProviderBuilder,Handler,TemplateInstance,Dictionary,Enumerator,DateUtil,Numeric,ListModel,LM,AppFramework,LayoutEngineModule,Map,Client,Templates;
 FsRootDll=Global.FsRootDll=Global.FsRootDll||{};
 Library=FsRootDll.Library=FsRootDll.Library||{};
 UoM=Library.UoM=Library.UoM||{};
 Unsafe=UoM.Unsafe=UoM.Unsafe||{};
 Dict=Library.Dict=Library.Dict||{};
 Monads=Library.Monads=Library.Monads||{};
 Seq=Monads.Seq=Monads.Seq||{};
 SplitByOption=Seq.SplitByOption=Seq.SplitByOption||{};
 Option=Monads.Option=Monads.Option||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 Serializer=Library.Serializer=Library.Serializer||{};
 JsonIntermediate=Serializer.JsonIntermediate=Serializer.JsonIntermediate||{};
 Snippet=Library.Snippet=Library.Snippet||{};
 SnippetModule=Library.SnippetModule=Library.SnippetModule||{};
 SnippetSerialize=Library.SnippetSerialize=Library.SnippetSerialize||{};
 Model=SnippetSerialize.Model=SnippetSerialize.Model||{};
 LibraryJS=FsRootDll.LibraryJS=FsRootDll.LibraryJS||{};
 View=LibraryJS.View=LibraryJS.View||{};
 Serializer$1=LibraryJS.Serializer=LibraryJS.Serializer||{};
 Util=LibraryJS.Util=LibraryJS.Util||{};
 DragDrop=LibraryJS.DragDrop=LibraryJS.DragDrop||{};
 DragInfo=DragDrop.DragInfo=DragDrop.DragInfo||{};
 SnippetsUI=LibraryJS.SnippetsUI=LibraryJS.SnippetsUI||{};
 SnippetHierData=SnippetsUI.SnippetHierData=SnippetsUI.SnippetHierData||{};
 SaveLoad=SnippetsUI.SaveLoad=SnippetsUI.SaveLoad||{};
 SC$1=Global.StartupCode$SnippetsUI$SnippetsUI=Global.StartupCode$SnippetsUI$SnippetsUI||{};
 SnippetsUI_Templates=Global.SnippetsUI_Templates=Global.SnippetsUI_Templates||{};
 WebSharper=Global.WebSharper;
 Seq$1=WebSharper&&WebSharper.Seq;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Arrays=WebSharper&&WebSharper.Arrays;
 List=WebSharper&&WebSharper.List;
 Strings=WebSharper&&WebSharper.Strings;
 Slice=WebSharper&&WebSharper.Slice;
 Operators=WebSharper&&WebSharper.Operators;
 Char=WebSharper&&WebSharper.Char;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpMap=Collections&&Collections.FSharpMap;
 Utils=WebSharper&&WebSharper.Utils;
 FSharpSet=Collections&&Collections.FSharpSet;
 BalancedTree=Collections&&Collections.BalancedTree;
 Option$1=WebSharper&&WebSharper.Option;
 System=Global.System;
 Guid=System&&System.Guid;
 Date=Global.Date;
 UI=WebSharper&&WebSharper.UI;
 View$1=UI&&UI.View;
 JSON=Global.JSON;
 Var$1=UI&&UI.Var$1;
 Doc=UI&&UI.Doc;
 FromView=UI&&UI.FromView;
 AttrModule=UI&&UI.AttrModule;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 JavaScript=WebSharper&&WebSharper.JavaScript;
 Promise=JavaScript&&JavaScript.Promise;
 console=Global.console;
 Templating=UI&&UI.Templating;
 Runtime$1=Templating&&Templating.Runtime;
 Server=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 Dictionary=Collections&&Collections.Dictionary;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 ListModel=UI&&UI.ListModel;
 LM=LibraryJS&&LibraryJS.LM;
 AppFramework=LibraryJS&&LibraryJS.AppFramework;
 LayoutEngineModule=LibraryJS&&LibraryJS.LayoutEngineModule;
 Map=Collections&&Collections.Map;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Unsafe.cast=Global.id;
 Dict.add$1=function(key,v,dict)
 {
  if(dict.ContainsKey(key))
   dict.set_Item(key,v);
  else
   dict.Add(key,v);
 };
 SplitByOption.IncludeSecond={
  $:2
 };
 SplitByOption.IncludeFirst={
  $:1
 };
 SplitByOption.Exclude={
  $:0
 };
 Seq.splitBy=function(f,opt,s)
 {
  var g;
  function f$1(t)
  {
   return t[1];
  }
  function m(t)
  {
   return t[0];
  }
  function m$1(i,a)
  {
   return f(a)?[opt.$==1?{
    $:1,
    $0:[a,i]
   }:opt.$==2?{
    $:1,
    $0:[a,i+1]
   }:null,i+1]:[{
    $:1,
    $0:[a,i]
   },i];
  }
  return Seq$1.map((g=function(s$1)
  {
   return Seq$1.map(m,s$1);
  },function(x)
  {
   return g(f$1(x));
  }),Seq$1.groupBy(function(t)
  {
   return t[1];
  },Seq$1.choose(Global.id,((((Runtime.Curried3(Seq$1.mapFold))(m$1))(0))(s))[0])));
 };
 Seq.ofOption=function(vO)
 {
  return vO==null?[]:[vO.$0];
 };
 Seq.absorbR=function(vOS)
 {
  return Seq$1.choose(function(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  },vOS);
 };
 Seq.absorbO=function(vOS)
 {
  return Seq$1.choose(Global.id,vOS);
 };
 Seq.insertR=function(vSR)
 {
  return vSR.$==0?Seq$1.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vSR.$0):(Seq.rtn())(Library.Error$1(vSR.$0));
 };
 Seq.insertO=function(vSO)
 {
  var o;
  o=vSO==null?null:{
   $:1,
   $0:Seq$1.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vSO.$0)
  };
  return o==null?(Seq.rtn())(null):o.$0;
 };
 Seq.rtn=function()
 {
  SC$1.$cctor();
  return SC$1.rtn;
 };
 Option.absorbR=function(vRO)
 {
  var $1,c;
  return vRO!=null&&vRO.$==1&&(c=vRO.$0,c.$==0&&($1=c.$0,true))?{
   $:1,
   $0:$1
  }:null;
 };
 Option.insertR=function(vOR)
 {
  var x;
  return vOR.$==0?(x=vOR.$0,x==null?null:{
   $:1,
   $0:{
    $:0,
    $0:x.$0
   }
  }):Option.rtn(Library.Error$1(vOR.$0));
 };
 Option.sequenceSeq=function(sq)
 {
  return Option.traverseSeq(Global.id,sq);
 };
 Option.traverseSeq=function(f,sq)
 {
  var o;
  o=Arrays.foldBack(function(head,tail)
  {
   return Option.op_GreaterGreaterEquals(f(head),function(h)
   {
    return Option.op_GreaterGreaterEquals(tail,function(t)
    {
     return Option.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Option.rtn(List.T.Empty));
  return o==null?null:{
   $:1,
   $0:o.$0
  };
 };
 Option.op_GreaterGreaterEquals=function(v,f)
 {
  return v==null?null:f(v.$0);
 };
 Option.bindNone=function(f,o)
 {
  return o!=null&&o.$==1?{
   $:1,
   $0:o.$0
  }:f();
 };
 Option.mapNone=function(f,o)
 {
  return o==null?f():o.$0;
 };
 Option.apply=function(fO,vO)
 {
  var $1;
  return fO!=null&&fO.$==1&&(vO!=null&&vO.$==1&&($1=[fO.$0,vO.$0],true))?{
   $:1,
   $0:$1[0]($1[1])
  }:null;
 };
 Option.join=function(o)
 {
  return o==null?null:o.$0;
 };
 Option.iter=function(f)
 {
  function f$1(o)
  {
   return o==null?null:{
    $:1,
    $0:f(o.$0)
   };
  }
  function g(o)
  {
   if(o==null)
    ;
  }
  return function(x)
  {
   return g(f$1(x));
  };
 };
 Option.rtn=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 String.thousands$1=function(n)
 {
  var v,c,r,s;
  v=(c=n<0?-n:n,Global.String(c));
  r=v.length%3;
  s=r===0?3:r;
  return n<0?"-"+Strings.concat(",",List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append([Slice.string(v,{
    $:1,
    $0:0
   },{
    $:1,
    $0:s-1
   })],Seq$1.delay(function()
   {
    return Seq$1.map(function(i)
    {
     return Slice.string(v,{
      $:1,
      $0:i*3+s
     },{
      $:1,
      $0:i*3+s+2
     });
    },Operators.range(0,((v.length-s)/3>>0)-1));
   }));
  }))):Strings.concat(",",List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append([Slice.string(v,{
    $:1,
    $0:0
   },{
    $:1,
    $0:s-1
   })],Seq$1.delay(function()
   {
    return Seq$1.map(function(i)
    {
     return Slice.string(v,{
      $:1,
      $0:i*3+s
     },{
      $:1,
      $0:i*3+s+2
     });
    },Operators.range(0,((v.length-s)/3>>0)-1));
   }));
  })));
 };
 String.WhiteSpace$1=function(s)
 {
  function g(v)
  {
   return!v;
  }
  return Seq$1.exists(function(x)
  {
   return g(Char.IsWhiteSpace(x));
  },s)?null:{
   $:1,
   $0:null
  };
 };
 String.EndsWith$1=function(ends,s)
 {
  return Strings.EndsWith(s,ends)?{
   $:1,
   $0:Slice.string(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:s.length-ends.length-1
   })
  }:null;
 };
 String.StartsWith$1=function(start,s)
 {
  return Strings.StartsWith(s,start)?{
   $:1,
   $0:Slice.string(s,{
    $:1,
    $0:start.length
   },null)
  }:null;
 };
 String.skipLastLine$1=function()
 {
  SC$1.$cctor();
  return SC$1.skipLastLine;
 };
 String.indentStr$1=function(i)
 {
  function f(s)
  {
   return String.indent$1(i,s);
  }
  function g(s)
  {
   return Strings.concat("\n",s);
  }
  return function(x)
  {
   return g(f(x));
  };
 };
 String.unindentStr$1=function()
 {
  SC$1.$cctor();
  return SC$1.unindentStr;
 };
 String.indent$1=function(n,s)
 {
  var x,x$1;
  x=Strings.SplitChars(s,["\n"],0);
  return Seq$1.map((x$1=Strings.replicate(n," "),function(y)
  {
   return x$1+y;
  }),x);
 };
 String.unindent$1=function(s)
 {
  var lines,n,o,o$1;
  lines=Strings.SplitChars(s,["\n"],0);
  n=(o=Seq$1.tryFindIndex(function(y)
  {
   return" "!==y;
  },(o$1=Seq$1.tryFind(function(l)
  {
   return Strings.Trim(l)!=="";
  },lines),o$1==null?"":o$1.$0)),o==null?0:o.$0);
  return Seq$1.filter(function(s$1)
  {
   return!Strings.StartsWith(s$1,"# 1 ");
  },Seq$1.map(function(l)
  {
   return l.length<=n?"":l.substring(n);
  },lines));
 };
 String.skipFirstLine$1=function(txt)
 {
  var i;
  i=txt.indexOf("\n");
  return i<0?"":Slice.string(txt,{
   $:1,
   $0:i+1
  },null);
 };
 String.append$1=function(a,b)
 {
  return a+b;
 };
 String.right$1=function(n,s)
 {
  return Library["String.Right$1"](s,n);
 };
 String.left$1=function(n,s)
 {
  return Library["String.Left$1"](s,n);
 };
 String.trim$1=function(s)
 {
  return Strings.Trim(s);
 };
 String.contains$1=function(sub,whole)
 {
  return whole.indexOf(sub)!=-1;
 };
 String.delimitedO$1=function(op,cl,txt)
 {
  var o,$1,bef,o$1,$2;
  o=String.splitInTwoO$1(op,txt);
  return o==null?null:($1=o.$0,(bef=$1[0],(o$1=String.splitInTwoO$1(cl,$1[1]),o$1==null?null:{
   $:1,
   $0:($2=o$1.$0,[bef,$2[0],$2[1]])
  })));
 };
 String.splitInTwoO$1=function(spl,txt)
 {
  var i;
  i=txt.indexOf(spl);
  return i===-1?null:{
   $:1,
   $0:[Library["String.Left$1"](txt,i),txt.substring(i+spl.length)]
  };
 };
 String.splitByChar$1=function(c,s)
 {
  return Strings.SplitChars(s,[c],0);
 };
 ParseO.Guid$1=function()
 {
  SC$1.$cctor();
  return SC$1["|Guid|_|"];
 };
 ParseO.Double$1=function()
 {
  SC$1.$cctor();
  return SC$1["|Double|_|"];
 };
 ParseO.Single$1=function()
 {
  SC$1.$cctor();
  return SC$1["|Single|_|"];
 };
 ParseO.Int64$1=function()
 {
  SC$1.$cctor();
  return SC$1["|Int64|_|"];
 };
 ParseO.Int$1=function()
 {
  SC$1.$cctor();
  return SC$1["|Int|_|"];
 };
 ParseO.Date$1=function()
 {
  SC$1.$cctor();
  return SC$1["|Date|_|"];
 };
 ParseO.parseGuidO$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseGuidO;
 };
 ParseO.parseDoubleO$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseDoubleO;
 };
 ParseO.parseSingleO$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseSingleO;
 };
 ParseO.parseInt64O$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseInt64O;
 };
 ParseO.parseIntO$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseIntO;
 };
 ParseO.parseDateO$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO;
 };
 ParseO.parseDateO2$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO2;
 };
 ParseO.tryParseWith$1=function(tryParseFunc)
 {
  function g($1,$2)
  {
   return $1?{
    $:1,
    $0:$2
   }:null;
  }
  return function(x)
  {
   return g.apply(null,tryParseFunc(x));
  };
 };
 JsonIntermediate.New=function(tryFloat,tryInt,tryString,tryBool,tryArray,tryField,isObject,isNull,toString)
 {
  return{
   tryFloat:tryFloat,
   tryInt:tryInt,
   tryString:tryString,
   tryBool:tryBool,
   tryArray:tryArray,
   tryField:tryField,
   isObject:isObject,
   isNull:isNull,
   toString:toString
  };
 };
 Serializer.serGuid=function()
 {
  SC$1.$cctor();
  return SC$1.serGuid;
 };
 Serializer.serCn=function(s,s$1,c)
 {
  return Serializer.map(Global.ignore,Global.ignore,s,s$1);
 };
 Serializer.serC=function(s,s$1,c)
 {
  return Serializer.mapO(function()
  {
   return c;
  },function(v)
  {
   return Unchecked.Equals(v,c)?{
    $:1,
    $0:null
   }:null;
  },s,s$1);
 };
 Serializer.mapO=function(g,f,a,a$1)
 {
  function g$1(o)
  {
   return o==null?null:f(o.$0);
  }
  return[function(x)
  {
   return a(g(x));
  },function(x)
  {
   return g$1(a$1(x));
  }];
 };
 Serializer.map=function(g,f,a,a$1)
 {
  function g$1(o)
  {
   return o==null?null:{
    $:1,
    $0:f(o.$0)
   };
  }
  return[function(x)
  {
   return a(g(x));
  },function(x)
  {
   return g$1(a$1(x));
  }];
 };
 Serializer.serTypedRegisters=function()
 {
  SC$1.$cctor();
  return SC$1.serTypedRegisters;
 };
 Serializer.serMap=function(s,s$1,s$2,s$3)
 {
  var serKVPs,t,f,g,f$1,g$1;
  function m(kvp)
  {
   return[kvp.K,kvp.V];
  }
  function m$1(a)
  {
   return new FSharpMap.New(a);
  }
  serKVPs=(t=Serializer.serDup([s,s$1],[s$2,s$3]),Serializer.serSeq(t[0],t[1]));
  return[(f=function(s$4)
  {
   return Seq$1.map(m,s$4);
  },(g=serKVPs[0],function(x)
  {
   return g(f(x));
  })),(f$1=serKVPs[1],(g$1=function(o)
  {
   return o==null?null:{
    $:1,
    $0:m$1(o.$0)
   };
  },function(x)
  {
   return g$1(f$1(x));
  }))];
 };
 Serializer.serPair=function(s,s$1,s$2,s$3)
 {
  return Serializer.serDup([s,s$1],[s$2,s$3]);
 };
 Serializer.serTrp=function(sF,sS,sT)
 {
  return[function(t)
  {
   return((((Runtime.Curried(function($1,$2,$3,$4)
   {
    return $1("["+Utils.toSafe($2)+", "+Utils.toSafe($3)+", "+Utils.toSafe($4)+"]");
   },4))(Global.id))(sF[0](t[0])))(sS[0](t[1])))(sT[0](t[2]));
  },function(j)
  {
   var a,$1,t,$2,$3,$4,$5;
   a=j.tryArray();
   return a!=null&&a.$==1&&((t=a.$0,!Unchecked.Equals(t,null)&&t.length===3)&&($1=[Arrays.get(a.$0,0),Arrays.get(a.$0,1),Arrays.get(a.$0,2)],true))?($2=sF[1]($1[0]),($3=sS[1]($1[1]),($4=sT[1]($1[2]),$2!=null&&$2.$==1&&($3!=null&&$3.$==1&&($4!=null&&$4.$==1&&($5=[$2.$0,$3.$0,$4.$0],true)))?{
    $:1,
    $0:[$5[0],$5[1],$5[2]]
   }:null))):null;
  }];
 };
 Serializer.serDup=function(serFst,serSnd)
 {
  return[function(t)
  {
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("["+Utils.toSafe($2)+", "+Utils.toSafe($3)+"]");
   }))(Global.id))(serFst[0](t[0])))(serSnd[0](t[1]));
  },function(j)
  {
   var a,$1,t,$2,$3,$4;
   a=j.tryArray();
   return a!=null&&a.$==1&&((t=a.$0,!Unchecked.Equals(t,null)&&t.length===2)&&($1=[Arrays.get(a.$0,0),Arrays.get(a.$0,1)],true))?($2=serFst[1]($1[0]),($3=serSnd[1]($1[1]),$2!=null&&$2.$==1&&($3!=null&&$3.$==1&&($4=[$2.$0,$3.$0],true))?{
    $:1,
    $0:[$4[0],$4[1]]
   }:null)):null;
  }];
 };
 Serializer.serOpt=function(s,s$1)
 {
  var ser,f,m;
  function g(o)
  {
   return o==null?"null":o.$0;
  }
  ser=[s,s$1];
  return[(f=(m=ser[0],function(o)
  {
   return o==null?null:{
    $:1,
    $0:m(o.$0)
   };
  }),function(x)
  {
   return g(f(x));
  }),function(j)
  {
   return{
    $:1,
    $0:j.isNull()?null:ser[1](j)
   };
  }];
 };
 Serializer.serSet=function(s,s$1)
 {
  var ser,f,m;
  ser=[s,s$1];
  return[(f=(m=ser[0],function(s$2)
  {
   return new FSharpSet.New$1(BalancedTree.OfSeq(Seq$1.map(m,s$2)));
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),function(j)
  {
   var o,x,m$1,c;
   o=(x=j.tryArray(),(m$1=(c=ser[1],function(a)
   {
    return Arrays.choose(c,a);
   }),x==null?null:{
    $:1,
    $0:m$1(x.$0)
   }));
   return o==null?null:{
    $:1,
    $0:new FSharpSet.New(o.$0)
   };
  }];
 };
 Serializer.serLst=function(s,s$1)
 {
  var ser,f,m;
  ser=[s,s$1];
  return[(f=(m=ser[0],function(l)
  {
   return List.map(m,l);
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),function(j)
  {
   var o,x,m$1,c;
   o=(x=j.tryArray(),(m$1=(c=ser[1],function(a)
   {
    return Arrays.choose(c,a);
   }),x==null?null:{
    $:1,
    $0:m$1(x.$0)
   }));
   return o==null?null:{
    $:1,
    $0:List.ofSeq(o.$0)
   };
  }];
 };
 Serializer.serArr=function(s,s$1)
 {
  var ser,f,m;
  ser=[s,s$1];
  return[(f=(m=ser[0],function(a)
  {
   return Arrays.map(m,a);
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),function(j)
  {
   var x,m$1,c;
   x=j.tryArray();
   m$1=(c=ser[1],function(a)
   {
    return Arrays.choose(c,a);
   });
   return x==null?null:{
    $:1,
    $0:m$1(x.$0)
   };
  }];
 };
 Serializer.serSeq=function(s,s$1)
 {
  var ser,f,m;
  ser=[s,s$1];
  return[(f=(m=ser[0],function(s$2)
  {
   return Seq$1.map(m,s$2);
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),function(j)
  {
   var o,x,m$1,c;
   o=(x=j.tryArray(),(m$1=(c=ser[1],function(a)
   {
    return Arrays.choose(c,a);
   }),x==null?null:{
    $:1,
    $0:m$1(x.$0)
   }));
   return o==null?null:{
    $:1,
    $0:o.$0
   };
  }];
 };
 Serializer.serFieldO=function(name,get,set,a,a$1)
 {
  function g(o)
  {
   return o==null?null:{
    $:1,
    $0:a(o.$0)
   };
  }
  return[name,function(x)
  {
   return g(get(x));
  },function(rc)
  {
   var f,m;
   function g$1(b)
   {
    return set(b,rc);
   }
   function g$2(o)
   {
    return o==null?rc:o.$0;
   }
   f=(m=function(x)
   {
    return g$1(a$1(x));
   },function(o)
   {
    return o==null?null:{
     $:1,
     $0:m(o.$0)
    };
   });
   return function(x)
   {
    return g$2(f(x));
   };
  }];
 };
 Serializer.serField=function(name,get,set,a,a$1)
 {
  var f;
  function g(a$2)
  {
   return{
    $:1,
    $0:a$2
   };
  }
  return[name,(f=function(x)
  {
   return a(get(x));
  },function(x)
  {
   return g(f(x));
  }),function(rc)
  {
   var f$1,b,g$1;
   function m(b$1)
   {
    return set(b$1,rc);
   }
   function g$2(o)
   {
    return o==null?rc:o.$0;
   }
   f$1=(b=(g$1=function(o)
   {
    return o==null?null:{
     $:1,
     $0:m(o.$0)
    };
   },function(x)
   {
    return g$1(a$1(x));
   }),function(o)
   {
    return o==null?null:b(o.$0);
   });
   return function(x)
   {
    return g$2(f$1(x));
   };
  }];
 };
 Serializer.serDate=function()
 {
  SC$1.$cctor();
  return SC$1.serDate;
 };
 Serializer.serBool=function()
 {
  SC$1.$cctor();
  return SC$1.serBool;
 };
 Serializer.serInt64=function()
 {
  SC$1.$cctor();
  return SC$1.serInt64;
 };
 Serializer.serInt=function()
 {
  SC$1.$cctor();
  return SC$1.serInt;
 };
 Serializer.serFloat=function()
 {
  SC$1.$cctor();
  return SC$1.serFloat;
 };
 Serializer.serString=function()
 {
  SC$1.$cctor();
  return SC$1.serString;
 };
 Serializer.toJsonString=function(v)
 {
  return Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(["\""],Seq$1.delay(function()
   {
    return Seq$1.append(!Strings.IsNullOrEmpty(v)?Seq$1.collect(function(i)
    {
     var c,ci;
     c=v[i];
     ci=c.charCodeAt();
     return ci>=0&&ci<=7||ci===11||ci>=14&&ci<=31?(function($1)
     {
      return function($2)
      {
       return $1("\\u"+Utils.padNumLeft($2.toString(16),4));
      };
     }(Global.id))(ci):c==="\u0008"?"\\b":c==="\u0009"?"\\t":c==="\n"?"\\n":c==="\u000c"?"\\f":c==="\r"?"\\r":c==="\""?"\\\"":c==="\\"?"\\\\":[c];
    },Operators.range(0,v.length-1)):[],Seq$1.delay(function()
    {
     return["\""];
    }));
   }));
  })).join("");
 };
 Serializer.sprintA=function(v)
 {
  var x;
  x=Strings.concat(", ",v);
  return(function($1)
  {
   return function($2)
   {
    return $1("["+Utils.toSafe($2)+"]");
   };
  }(Global.id))(x);
 };
 Serializer.Field=function(field,j)
 {
  return j.tryField(field);
 };
 Serializer.serialize=function(s,s$1,v)
 {
  return[s,s$1][0](v);
 };
 Snippet.New=function(snpId,snpName,snpContent,snpParentIdO,snpPredIds,snpProperties,snpModified)
 {
  return{
   snpId:snpId,
   snpName:snpName,
   snpContent:snpContent,
   snpParentIdO:snpParentIdO,
   snpPredIds:snpPredIds,
   snpProperties:snpProperties,
   snpModified:snpModified
  };
 };
 SnippetModule.hasChildren=function(getSnippets,snp)
 {
  var snps,m,o,o$1;
  snps=getSnippets();
  m=Seq$1.tryFindIndex(function(s)
  {
   return Unchecked.Equals(s.snpId,snp.snpId);
  },snps);
  return m!=null&&m.$==1&&(o=(o$1=Seq$1.tryItem(m.$0+1,snps),o$1==null?null:{
   $:1,
   $0:Unchecked.Equals(o$1.$0.snpParentIdO,{
    $:1,
    $0:snp.snpId
   })
  }),o==null?false:o.$0);
 };
 SnippetModule.getLevel=function(tryFindSnippet,snp)
 {
  function level(lvl,snp1)
  {
   var o,m;
   while(true)
    {
     m=(o=snp1.snpParentIdO,o==null?null:tryFindSnippet(o.$0));
     if(m!=null&&m.$==1)
      {
       lvl=lvl+1;
       snp1=m.$0;
      }
     else
      return lvl;
    }
  }
  return level(0,snp);
 };
 SnippetModule.allPredecessors=function(tryFindSnippet,snp)
 {
  var parentS;
  function getPreds(out,searched,toSearch)
  {
   var sid,toSearch1,searched1,m,snp1,news,out1,toSearch2;
   while(true)
    if(toSearch.get_IsEmpty())
     return out;
    else
     {
      sid=Seq$1.head(toSearch);
      toSearch1=toSearch.Remove(sid);
      searched1=searched.Add(sid);
      m=tryFindSnippet(sid);
      if(m!=null&&m.$==1)
       {
        snp1=m.$0;
        news=FSharpSet.op_Addition(new FSharpSet.New(Option$1.toArray(snp1.snpParentIdO)),new FSharpSet.New(snp1.snpPredIds));
        out1=out.Add(snp1);
        toSearch2=FSharpSet.op_Addition(toSearch1,FSharpSet.op_Subtraction(news,searched1));
        out=out1;
        searched=searched1;
        toSearch=toSearch2;
       }
      else
       {
        searched=searched1;
        toSearch=toSearch1;
       }
     }
  }
  parentS=new FSharpSet.New(Option$1.toArray(snp.snpParentIdO));
  return getPreds(new FSharpSet.New$1(null),(new FSharpSet.New$1(null)).Add(snp.snpId),FSharpSet.op_Addition(parentS,new FSharpSet.New(snp.snpPredIds)));
 };
 SnippetModule.indirectPredecessorIds=function(tryFindSnippet,snpId,snpParentIdO,snpPredIds)
 {
  var parentS;
  function getPreds(out,searched,toSearch)
  {
   var sid,toSearch1,searched1,m,snp1,news,out1,toSearch2;
   while(true)
    if(toSearch.get_IsEmpty())
     return out;
    else
     {
      sid=Seq$1.head(toSearch);
      toSearch1=toSearch.Remove(sid);
      searched1=searched.Add(sid);
      m=tryFindSnippet(sid);
      if(m!=null&&m.$==1)
       {
        snp1=m.$0;
        news=FSharpSet.op_Addition(new FSharpSet.New(Option$1.toArray(snp1.snpParentIdO)),new FSharpSet.New(snp1.snpPredIds));
        out1=FSharpSet.op_Addition(out,news);
        toSearch2=FSharpSet.op_Addition(toSearch1,FSharpSet.op_Subtraction(news,searched1));
        out=out1;
        searched=searched1;
        toSearch=toSearch2;
       }
      else
       {
        searched=searched1;
        toSearch=toSearch1;
       }
     }
  }
  parentS=new FSharpSet.New(Option$1.toArray(snpParentIdO));
  return getPreds(parentS,(new FSharpSet.New$1(null)).Add(snpId),FSharpSet.op_Addition(parentS,snpPredIds));
 };
 SnippetModule.defaultSnippet=function()
 {
  SC$1.$cctor();
  return SC$1.defaultSnippet;
 };
 SnippetModule.New=function(name,content,parentO)
 {
  return Snippet.New(Guid.NewGuid(),name,content,parentO,new FSharpSet.New$1(null),[],SnippetModule.getNextModified());
 };
 SnippetModule.getNextModified=function()
 {
  return Date.now();
 };
 Model.New=function(snippets,modified,collapsed)
 {
  return{
   snippets:snippets,
   modified:modified,
   collapsed:collapsed
  };
 };
 SnippetSerialize.serModel=function()
 {
  SC$1.$cctor();
  return SC$1.serModel;
 };
 SnippetSerialize.getModel=function(snippets,gen,coll)
 {
  return Model.New(Arrays.ofSeq(snippets),gen,coll);
 };
 SnippetSerialize.serSnippet=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippet;
 };
 SnippetSerialize.serSnippetId=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippetId;
 };
 Library["String.Right$1"]=function(_this,n)
 {
  var a,b;
  return Library["String.Substring2$1"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);
 };
 Library["String.Left$1"]=function(_this,n)
 {
  return n<0?Library["String.Substring2$1"](_this,0,_this.length+n):Library["String.Substring2$1"](_this,0,n);
 };
 Library["String.Substring2$1"]=function(_this,from,n)
 {
  var from$1,b;
  while(true)
   {
    if(n<=0)
     return"";
    else
     if(from>=_this.length)
      return"";
     else
      if(from<0)
       {
        from$1=from;
        from=0;
        n=n+from$1;
       }
      else
       return Strings.Substring(_this,from,(b=_this.length-from,Unchecked.Compare(n,b)===-1?n:b));
   }
 };
 Library.Error$1=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 View.sequenceListApp$1=function(list)
 {
  return View.traverseListApp$1(Global.id,list);
 };
 View.traverseListApp$1=function(f,list)
 {
  function cons(head,tail)
  {
   return new List.T({
    $:1,
    $0:head,
    $1:tail
   });
  }
  return List.foldBack(function(head,tail)
  {
   return View.op_LessMultiplyGreater$1(View.op_LessMultiplyGreater$1(View.rtn$1(function($1)
   {
    return function($2)
    {
     return cons($1,$2);
    };
   }),f(head)),tail);
  },list,View.rtn$1(List.T.Empty));
 };
 View.op_LessMultiplyGreater$1=function(a,a$1)
 {
  return View$1.Apply(a,a$1);
 };
 View.sequenceSeq$1=function(sq)
 {
  return View.traverseSeq$1(Global.id,sq);
 };
 View.traverseSeq$1=function(f,sq)
 {
  return View.map$1(Global.id,Arrays.foldBack(function(head,tail)
  {
   return View.op_GreaterGreaterEquals$1(f(head),function(h)
   {
    return View.op_GreaterGreaterEquals$1(tail,function(t)
    {
     return View.rtn$1(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),View.rtn$1(List.T.Empty)));
 };
 View.op_GreaterGreaterEquals$1=function(v,f)
 {
  return View.bind$1(f,v);
 };
 View.rtn$1=function(a)
 {
  return View$1.Const(a);
 };
 View.map$1=function(a,a$1)
 {
  return View$1.Map(a,a$1);
 };
 View.bind$1=function(a,a$1)
 {
  return View$1.Bind(a,a$1);
 };
 View.insertWO$1=function(a)
 {
  return a==null?View$1.Const(null):View$1.Map(function(a$1)
  {
   return{
    $:1,
    $0:a$1
   };
  },a.$0);
 };
 Serializer$1.deserializeWithFail=function(s,s$1)
 {
  return Serializer$1.deserialize(function()
  {
   return Operators.FailWith("Error expecting float");
  },function()
  {
   return Operators.FailWith("Error expecting int");
  },function()
  {
   return Operators.FailWith("Error expecting string");
  },function()
  {
   return Operators.FailWith("Error expecting bool");
  },function()
  {
   return Operators.FailWith("Error expecting array");
  },s,s$1);
 };
 Serializer$1.deserializeWithDefs=function(s,s$1)
 {
  return Serializer$1.deserialize(function()
  {
   return{
    $:1,
    $0:0
   };
  },function()
  {
   return{
    $:1,
    $0:0
   };
  },function()
  {
   return{
    $:1,
    $0:""
   };
  },function()
  {
   return{
    $:1,
    $0:false
   };
  },function()
  {
   return{
    $:1,
    $0:[]
   };
  },s,s$1);
 };
 Serializer$1.tryDeserialize=function(s,s$1)
 {
  return Serializer$1.deserialize(function()
  {
   return null;
  },function()
  {
   return null;
  },function()
  {
   return null;
  },function()
  {
   return null;
  },function()
  {
   return null;
  },s,s$1);
 };
 Serializer$1.deserialize=function(df,di,ds,db,da,s,s$1)
 {
  var f,g;
  function f$1(a)
  {
   return JSON.parse(a);
  }
  function g$1(o)
  {
   return Serializer$1.getJsonIntermediate(df,di,ds,db,da,o);
  }
  f=function(x)
  {
   return g$1(f$1(x));
  };
  g=[s,s$1][1];
  return function(x)
  {
   return g(f(x));
  };
 };
 Serializer$1.getJsonIntermediate=function(df,di,ds,db,da,o)
 {
  function jsonInt(o$1)
  {
   return Serializer$1.getJsonIntermediate(df,di,ds,db,da,o$1);
  }
  return JsonIntermediate.New(function()
  {
   var o$1;
   o$1=!o?null:typeof o=="number"?{
    $:1,
    $0:o
   }:null;
   return o$1==null?df():o$1;
  },function()
  {
   var o$1;
   o$1=!o?null:typeof o=="number"?{
    $:1,
    $0:o
   }:null;
   return o$1==null?di():o$1;
  },function()
  {
   var o$1;
   o$1=!o?null:typeof o=="string"?{
    $:1,
    $0:o
   }:null;
   return o$1==null?ds():o$1;
  },function()
  {
   var o$1;
   o$1=!o?null:typeof o=="boolean"?{
    $:1,
    $0:o
   }:null;
   return o$1==null?db():o$1;
  },function()
  {
   var o$1;
   o$1=!o?null:o instanceof Global.Array?{
    $:1,
    $0:Arrays.map(jsonInt,o)
   }:null;
   return o$1==null?da(jsonInt):o$1;
  },function(fl)
  {
   var m;
   return!o?null:(m=o[fl],Unchecked.Equals(m,null)?{
    $:1,
    $0:jsonInt(null)
   }:!m?null:{
    $:1,
    $0:jsonInt(m)
   });
  },function()
  {
   return Unchecked.Equals(typeof o,"object")&&!Unchecked.Equals(o,null);
  },function()
  {
   return Unchecked.Equals(o,null);
  },function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(o);
  });
 };
 Serializer$1.serLMdField=function(name,lmd,s,s$1)
 {
  var serS,f,g;
  function g$1(lm)
  {
   return lm["var"].Get();
  }
  serS=Serializer.serSeq(s,s$1);
  return[name,(f=function(x)
  {
   return g$1(lmd(x));
  },(g=serS[0],function(x)
  {
   return g(f(x));
  })),function(rc)
  {
   return function(b)
   {
    var x,o;
    return(x=serS[1](b),((Option.iter((o=lmd(rc),function(a)
    {
     o.Set(a);
    })))(x),x))==null?null:{
     $:1,
     $0:rc
    };
   };
  }];
 };
 Serializer$1.serVarField=function(name,_var,s,s$1)
 {
  var f;
  function g(a)
  {
   return a.Get();
  }
  return[name,(f=function(x)
  {
   return g(_var(x));
  },function(x)
  {
   return s(f(x));
  }),function(rc)
  {
   return function(o)
   {
    var x,a;
    return(x=s$1(o),((Option.iter((a=_var(rc),function(a$1)
    {
     return Var$1.Set(a,a$1);
    })))(x),x))==null?null:{
     $:1,
     $0:rc
    };
   };
  }];
 };
 Util.orderedList=function(l)
 {
  return Doc.Element("ol",[],[l]);
 };
 Util.newButton=function(f)
 {
  return Util.simpleButton("New",f);
 };
 Util.simpleButton=function(txt,f)
 {
  function g(v)
  {
  }
  return Doc.Button(txt,[],function(x)
  {
   return g(f(x));
  });
 };
 Util.unselectorV=function()
 {
  SC$1.$cctor();
  return SC$1.unselectorV;
 };
 Util.selectorLensGuid=function(sel)
 {
  return(Util.selectorLens(function(v)
  {
   var c;
   c=v;
   return Global.String(c);
  },ParseO.parseGuidO$1()))(sel);
 };
 Util.selectorLensInt=function(sel)
 {
  return(Util.selectorLens(function(v)
  {
   var c;
   c=v;
   return Global.String(c);
  },ParseO.parseIntO$1()))(sel);
 };
 Util.selectorLens=function(toStr,ofStrO)
 {
  function f(s)
  {
   return Util.mapVarO(toStr,ofStrO,s);
  }
  return function(x)
  {
   return Util.lensStrO(f(x));
  };
 };
 Util.mapVarO=function(toB,ofBO,sel)
 {
  return new FromView.New(View$1.Map(function($1)
  {
   return $1==null?null:{
    $:1,
    $0:toB($1.$0)
   };
  },sel.get_View()),function(a)
  {
   var x;
   function f(a$1)
   {
    return{
     $:1,
     $0:a$1
    };
   }
   function g(a$1)
   {
    sel.Set(a$1);
   }
   if(a!=null&&a.$==1)
    {
     x=ofBO(a.$0);
     (Option.iter(function(x$1)
     {
      return g(f(x$1));
     }))(x);
    }
   else
    sel.Set(null);
  });
 };
 Util.lensStrO=function(sel)
 {
  return new FromView.New(View$1.Map(function($1)
  {
   return $1!=null&&$1.$==1?$1.$0:"";
  },sel.get_View()),function(s)
  {
   if(s==="")
    sel.Set(null);
   else
    sel.Set({
     $:1,
     $0:s
    });
  });
 };
 Util.textLine=function(txtW)
 {
  return Doc.Element("div",[],[Doc.TextView(txtW)]);
 };
 Util.lensFloat2Str=function(v)
 {
  var f;
  function g(a)
  {
   if(a!=null&&a.$==1)
    if(a.$0!==v.Get())
     v.Set(a.$0);
  }
  return new FromView.New(View$1.Map(function($1)
  {
   return(function($2)
   {
    return function($3)
    {
     return $2(Utils.prettyPrint($3));
    };
   }(Global.id))($1);
  },v.get_View()),(f=ParseO.parseDoubleO$1(),function(x)
  {
   return g(f(x));
  }));
 };
 Util.disabled=function(disW)
 {
  return AttrModule.DynamicPred("disabled",disW,View$1.Const(""));
 };
 DragInfo.DragNone={
  $:0
 };
 DragDrop.getDragNIdO=function(tnId)
 {
  var $1;
  return DragDrop.drag().$==1&&(!Unchecked.Equals(DragDrop.drag().$0,tnId)&&($1=DragDrop.drag().$0,true))?{
   $:1,
   $0:$1
  }:null;
 };
 DragDrop.setDragNode=function(tnid)
 {
  DragDrop.set_drag({
   $:1,
   $0:tnid
  });
 };
 DragDrop.setDragNone=function()
 {
  DragDrop.set_drag(DragInfo.DragNone);
 };
 DragDrop.drag=function()
 {
  SC$1.$cctor();
  return SC$1.drag;
 };
 DragDrop.set_drag=function($1)
 {
  SC$1.$cctor();
  SC$1.drag=$1;
 };
 SnippetHierData.New=function(level,pos,hasChildren,visible,path,errorO)
 {
  return{
   level:level,
   pos:pos,
   hasChildren:hasChildren,
   visible:visible,
   path:path,
   errorO:errorO
  };
 };
 SaveLoad.saveAs=function()
 {
  var x;
  Global.saveAs(new Global.Blob([(x=SnippetSerialize.getModel((SnippetsUI.snippetsLM())["var"].Get(),Date.now(),SnippetsUI.collapsedV().Get()),(SnippetSerialize.serModel())[0](x))],{
   type:"text/plain;charset=utf-8"
  }),"noname.snippets");
 };
 SaveLoad.loadTextFile=function(element)
 {
  var files,reader;
  files=element.files;
  files.length>0?(reader=new Global.FileReader(),reader.onload=function(e)
  {
   return SaveLoad.updateSnippets(e.target.result);
  },reader.readAsText(files.item(0))):void 0;
 };
 SaveLoad.loadURL=function(url)
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Promise.AsAsync(self.fetch(url)),function(a)
   {
    return Concurrency.Bind(Promise.AsAsync(a.text()),function(a$1)
    {
     SaveLoad.updateSnippets(a$1);
     return Concurrency.Zero();
    });
   });
  })),null);
 };
 SaveLoad.updateSnippets=function(snps)
 {
  var x;
  try
  {
   x=(Serializer$1.deserializeWithDefs((SnippetSerialize.serModel())[0],(SnippetSerialize.serModel())[1]))(snps);
   (Option.iter(function(m)
   {
    SnippetsUI.snippetsLM().Set(m.snippets);
    SnippetsUI.collapsedV().Set(m.collapsed);
   }))(x);
  }
  catch(e)
  {
   Global.alert(Global.String(e));
   ((function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(function(s)
   {
    console.log(s);
   }))(e));
  }
 };
 SnippetsUI.plugInAdded=function()
 {
  SC$1.$cctor();
  return SC$1.plugInAdded;
 };
 SnippetsUI.codeRequiredW=function()
 {
  SC$1.$cctor();
  return SC$1.codeRequiredW;
 };
 SnippetsUI.presencesV=function()
 {
  SC$1.$cctor();
  return SC$1.presencesV;
 };
 SnippetsUI.getPresencesW=function()
 {
  SC$1.$cctor();
  return SC$1.getPresencesW;
 };
 SnippetsUI.predecessorsW=function()
 {
  SC$1.$cctor();
  return SC$1.predecessorsW;
 };
 SnippetsUI.parseW=function()
 {
  SC$1.$cctor();
  return SC$1.parseW;
 };
 SnippetsUI.nextTxtW=function()
 {
  SC$1.$cctor();
  return SC$1.nextTxtW;
 };
 SnippetsUI.prevTxtW=function()
 {
  SC$1.$cctor();
  return SC$1.prevTxtW;
 };
 SnippetsUI.nextSelW=function()
 {
  SC$1.$cctor();
  return SC$1.nextSelW;
 };
 SnippetsUI.prevSelW=function()
 {
  SC$1.$cctor();
  return SC$1.prevSelW;
 };
 SnippetsUI.nextSnpW=function()
 {
  SC$1.$cctor();
  return SC$1.nextSnpW;
 };
 SnippetsUI.prevSnpW=function()
 {
  SC$1.$cctor();
  return SC$1.prevSnpW;
 };
 SnippetsUI.indentOut=function()
 {
  View$1.Get(function(hier)
  {
   var sid,$1,res,$2,hdt,pid,newPidO,elems,m,b,a,a$1;
   function nextPosO(k,i)
   {
    var res$1,m$1,m$2,shd;
    while(true)
     {
      m$1=Arrays.tryItem(i+1,elems);
      if(m$1!=null&&m$1.$==1)
       {
        m$2=(res$1=null,hier.TryGetValue(m$1.$0.snpId,{
         get:function()
         {
          return res$1;
         },
         set:function(v)
         {
          res$1=v;
         }
        })?{
         $:1,
         $0:res$1
        }:null);
        if(m$2!=null&&m$2.$==1)
         {
          shd=m$2.$0;
          if(Seq$1.contains(sid,shd.path))
           {
            k=i+1;
            i=i+1;
           }
          else
           if(Seq$1.contains(pid,shd.path))
            i=i+1;
           else
            return{
             $:1,
             $0:[k,i]
            };
         }
        else
         return null;
       }
      else
       return null;
     }
   }
   sid=SnippetsUI.currentSnippetV().Get().snpId;
   $1=(res=null,hier.TryGetValue(sid,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?{
    $:1,
    $0:res
   }:null);
   $2=SnippetsUI.currentSnippetV().Get().snpParentIdO;
   $1!=null&&$1.$==1?$2!=null&&$2.$==1?(hdt=$1.$0,pid=$2.$0,newPidO=Seq$1.tryItem(Arrays.length(hdt.path)-2,hdt.path),!Unchecked.Equals({
    $:1,
    $0:pid
   },newPidO)?(Var$1.Lens(SnippetsUI.currentSnippetV(),function($3)
   {
    return $3.snpParentIdO;
   },function($3,$4)
   {
    return Snippet.New($3.snpId,$3.snpName,$3.snpContent,$4,$3.snpPredIds,$3.snpProperties,$3.snpModified);
   }).Set(newPidO),elems=Arrays.ofSeq((SnippetsUI.snippetsLM())["var"].Get()),m=nextPosO(hdt.pos,hdt.pos),m!=null&&m.$==1?(b=m.$0[1],a=m.$0[0],a$1=Arrays.concat([Slice.array(elems,{
    $:1,
    $0:0
   },{
    $:1,
    $0:hdt.pos-1
   }),Slice.array(elems,{
    $:1,
    $0:a+1
   },{
    $:1,
    $0:b
   }),Slice.array(elems,{
    $:1,
    $0:hdt.pos
   },{
    $:1,
    $0:a
   }),Slice.array(elems,{
    $:1,
    $0:b+1
   },null)]),SnippetsUI.snippetsLM().Set(a$1)):void 0):void 0):void 0:void 0;
  },SnippetsUI.processHierW());
 };
 SnippetsUI.indentIn=function()
 {
  View$1.Get(function(hier)
  {
   var x,k;
   x=(k=SnippetsUI.currentSnippetV().Get().snpId,function(d)
   {
    var res;
    res=null;
    return d.TryGetValue(k,{
     get:function()
     {
      return res;
     },
     set:function(v)
     {
      res=v;
     }
    })?{
     $:1,
     $0:res
    }:null;
   }(hier));
   (Option.iter(function(hdt)
   {
    var pidO,x$1;
    function newParentO(i)
    {
     var snp;
     while(true)
      if(i===0)
       return null;
      else
       {
        snp=Seq$1.nth(i-1,(SnippetsUI.snippetsLM())["var"].Get());
        if(Unchecked.Equals({
         $:1,
         $0:snp.snpId
        },pidO))
         return null;
        else
         if(Unchecked.Equals(snp.snpParentIdO,pidO))
          return{
           $:1,
           $0:snp.snpId
          };
         else
          i=i-1;
       }
    }
    pidO=SnippetsUI.currentSnippetV().Get().snpParentIdO;
    x$1=newParentO(hdt.pos);
    (Option.iter(function(pid)
    {
     Var$1.Lens(SnippetsUI.currentSnippetV(),function($1)
     {
      return $1.snpParentIdO;
     },function($1,$2)
     {
      return Snippet.New($1.snpId,$1.snpName,$1.snpContent,$2,$1.snpPredIds,$1.snpProperties,$1.snpModified);
     }).Set({
      $:1,
      $0:pid
     });
    }))(x$1);
   }))(x);
  },SnippetsUI.processHierW());
 };
 SnippetsUI.deleteSnippet=function()
 {
  View$1.Get(function(hier)
  {
   var sid,pidO,m,res,hdt,elems,a;
   function nextPos(i)
   {
    var res$1,m$1,snp,m$2;
    while(true)
     {
      m$1=Arrays.tryItem(i,elems);
      if(m$1!=null&&m$1.$==1)
       {
        snp=m$1.$0;
        if(Unchecked.Equals(snp.snpParentIdO,{
         $:1,
         $0:sid
        }))
         {
          Arrays.set(elems,i,Snippet.New(snp.snpId,snp.snpName,snp.snpContent,pidO,snp.snpPredIds,snp.snpProperties,snp.snpModified));
          i=i+1;
         }
        else
         {
          m$2=(res$1=null,hier.TryGetValue(snp.snpId,{
           get:function()
           {
            return res$1;
           },
           set:function(v)
           {
            res$1=v;
           }
          })?{
           $:1,
           $0:res$1
          }:null);
          if(m$2!=null&&m$2.$==1)
          {
           if(Seq$1.contains(sid,m$2.$0.path))
            i=i+1;
           else
            return null;
          }
          else
           return null;
         }
       }
      else
       return null;
     }
   }
   sid=SnippetsUI.currentSnippetV().Get().snpId;
   pidO=SnippetsUI.currentSnippetV().Get().snpParentIdO;
   m=(res=null,hier.TryGetValue(sid,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?{
    $:1,
    $0:res
   }:null);
   m!=null&&m.$==1?(hdt=m.$0,elems=Arrays.ofSeq((SnippetsUI.snippetsLM())["var"].Get()),nextPos(hdt.pos+1),a=Arrays.concat([Slice.array(elems,{
    $:1,
    $0:0
   },{
    $:1,
    $0:hdt.pos-1
   }),Slice.array(elems,{
    $:1,
    $0:hdt.pos+1
   },null)]),SnippetsUI.snippetsLM().Set(a)):void 0;
  },SnippetsUI.processHierW());
 };
 SnippetsUI.addSnippet=function()
 {
  View$1.Get(function(hier)
  {
   var elems,newS,sid,m,res,n,a;
   function nextPos(i)
   {
    var res$1,m$1,m$2;
    while(true)
     {
      m$1=Arrays.tryItem(i+1,elems);
      if(m$1!=null&&m$1.$==1)
       {
        m$2=(res$1=null,hier.TryGetValue(m$1.$0.snpId,{
         get:function()
         {
          return res$1;
         },
         set:function(v)
         {
          res$1=v;
         }
        })?{
         $:1,
         $0:res$1
        }:null);
        if(m$2!=null&&m$2.$==1)
        {
         if(Seq$1.contains(sid,m$2.$0.path))
          i=i+1;
         else
          return i;
        }
        else
         return i;
       }
      else
       return i;
     }
   }
   elems=Arrays.ofSeq((SnippetsUI.snippetsLM())["var"].Get());
   newS=SnippetsUI.snippetList().add();
   sid=SnippetsUI.currentSnippetV().Get().snpId;
   m=(res=null,hier.TryGetValue(sid,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?{
    $:1,
    $0:res
   }:null);
   m!=null&&m.$==1?(n=nextPos(m.$0.pos),a=Arrays.concat([Slice.array(elems,{
    $:1,
    $0:0
   },{
    $:1,
    $0:n
   }),[Snippet.New(newS.snpId,newS.snpName,newS.snpContent,SnippetsUI.currentSnippetV().Get().snpParentIdO,newS.snpPredIds,newS.snpProperties,newS.snpModified)],Slice.array(elems,{
    $:1,
    $0:n+1
   },null)]),SnippetsUI.snippetsLM().Set(a)):void 0;
  },SnippetsUI.processHierW());
 };
 SnippetsUI.curSnp=function()
 {
  SC$1.$cctor();
  return SC$1.curSnp;
 };
 SnippetsUI.propertyV=function(name)
 {
  var f,f$1,p,g;
  function f$2(t)
  {
   return t[0];
  }
  function g$1(y)
  {
   return name===y;
  }
  function m(t)
  {
   return t[1];
  }
  function g$2(o)
  {
   return o==null?"":o.$0;
  }
  return Var$1.Lens(SnippetsUI.currentSnippetPropsV(),(f=(f$1=(p=function(x)
  {
   return g$1(f$2(x));
  },function(s)
  {
   return Seq$1.tryFind(p,s);
  }),(g=function(o)
  {
   return o==null?null:{
    $:1,
    $0:m(o.$0)
   };
  },function(x)
  {
   return g(f$1(x));
  })),function(x)
  {
   return g$2(f(x));
  }),function(ps,a)
  {
   function f$3(t)
   {
    return t[0];
   }
   function g$3(y)
   {
    return name!==y;
   }
   function m$1(n,o)
   {
    return[n,n===name?a:o];
   }
   return a===""?Arrays.filter(function(x)
   {
    return g$3(f$3(x));
   },ps):Seq$1.contains(name,Seq$1.map(function(t)
   {
    return t[0];
   },ps))?Arrays.map(function($1)
   {
    return m$1($1[0],$1[1]);
   },ps):ps.concat([[name,a]]);
  });
 };
 SnippetsUI.currentSnippetPropsV=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetPropsV;
 };
 SnippetsUI.currentSnippetContentV=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetContentV;
 };
 SnippetsUI.currentSnippetNameV=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetNameV;
 };
 SnippetsUI.currentSnippetV=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetV;
 };
 SnippetsUI.snippetList=function()
 {
  SC$1.$cctor();
  return SC$1.snippetList;
 };
 SnippetsUI.wrapNothing=function(a)
 {
  return Doc.Concat;
 };
 SnippetsUI.search=function()
 {
  SC$1.$cctor();
  return SC$1.search;
 };
 SnippetsUI.calcUI$979$44=function(k)
 {
  return function(ev)
  {
   ev.Event.preventDefault();
   View$1.Get(function(a)
   {
    var sid,x;
    if(a!=null&&a.$==1)
     {
      sid=a.$0;
      x=DragDrop.getDragNIdO(sid);
      (Option.iter(function(fr)
      {
       SnippetsUI.moveNode(fr,sid);
      }))(x);
     }
   },k);
  };
 };
 SnippetsUI.calcUI$978$44=function(k)
 {
  return function(ev)
  {
   View$1.Get(function(a)
   {
    if(a!=null&&a.$==1)
     if(DragDrop.getDragNIdO(a.$0)!=null)
      ev.Event.preventDefault();
   },k);
  };
 };
 SnippetsUI.calcUI$977$44=function(k)
 {
  return function(ev)
  {
   View$1.Get(function(a)
   {
    if(a!=null&&a.$==1)
     {
      DragDrop.setDragNode(a.$0);
      ev.Event.stopPropagation();
     }
   },k);
  };
 };
 SnippetsUI.calcUI$968$44=function(snpdW,snp)
 {
  return function()
  {
   View$1.Get(function(snpd)
   {
    var a;
    if(snpd.hasChildren)
     {
      a=((SnippetsUI.collapsedV().Get().Contains(snp.Get().snpId)?function(v)
      {
       return function(s)
       {
        return s.Remove(v);
       };
      }:function(v)
      {
       return function(s)
       {
        return s.Add(v);
       };
      })(snp.Get().snpId))(SnippetsUI.collapsedV().Get());
      SnippetsUI.collapsedV().Set(a);
     }
   },snpdW);
  };
 };
 SnippetsUI.calcUI$962$44=function(k,lmd)
 {
  return function()
  {
   var o;
   View$1.Get((o=lmd.selV,function(a)
   {
    o.Set(a);
   }),k);
  };
 };
 SnippetsUI.calcUI=function(wrapper,allowDelete,lmd)
 {
  var indSelPredIdsW,v,prior;
  indSelPredIdsW=View$1.Map(function($1)
  {
   return(SnippetsUI.indPredIds())($1);
  },(v=View$1.Apply(View$1.Map2(function($1,$2)
  {
   return function($3)
   {
    return[$1.snpId,$2.snpParentIdO,$3.snpPredIds];
   };
  },lmd.get_CurrentV().get_View(),lmd.get_CurrentV().get_View()),lmd.get_CurrentV().get_View()),(prior=[Var$1.Create$1(null)],(View$1.Sink(function(v$1)
  {
   if(!Unchecked.Equals(prior[0].Get(),v$1))
    prior[0].Set(v$1);
  },v),prior[0].get_View()))));
  return function(k)
  {
   return function(snp)
   {
    var snpdW,b,t,t$1,t$2,t$3,_this,_this$1,t$4,_this$2,_this$3,_this$4,p,i;
    View$1.Map(function($1)
    {
     return $1==null;
    },k);
    snpdW=View$1.Map2(function($1,$2)
    {
     var o,k$1,v$1;
     o=(k$1=$2.snpId,function(d)
     {
      var res;
      res=null;
      return d.TryGetValue(k$1,{
       get:function()
       {
        return res;
       },
       set:function(v$2)
       {
        res=v$2;
       }
      })?{
       $:1,
       $0:res
      }:null;
     }($1));
     v$1=SnippetsUI.shdDef();
     return o==null?v$1:o.$0;
    },SnippetsUI.processHierW(),snp.get_View());
    return SnippetsUI.docWrap(wrapper,(b=(t=(t$1=(t$2=(t$3=(_this=(_this$1=(t$4=(_this$2=(_this$3=(_this$4=new ProviderBuilder.New$1(),(_this$4.h.push({
     $:2,
     $0:"name",
     $1:View$1.Map2(function($1,$2)
     {
      return($1.errorO==null?Global.id:function($3)
      {
       return function($4)
       {
        return $3("!"+Utils.toSafe($4));
       };
      }(Global.id))($2.snpName);
     },snpdW,snp.get_View())
    }),_this$4)),(_this$3.h.push({
     $:2,
     $0:"selected",
     $1:View$1.Map2(function($1,$2)
     {
      return Unchecked.Equals($1,$2)?"selected":"";
     },lmd.selV.get_View(),k)
    }),_this$3)),(_this$2.h.push({
     $:2,
     $0:"predecessor",
     $1:View$1.Apply(View$1.Apply(View$1.Apply(View$1.Map2(function($1,$2)
     {
      return Runtime.Curried3(function($3,$4,$5)
      {
       var key;
       return $1!=null&&$1.$==1?(key=$1.$0,(Seq$1.contains(key,$2.snpPredIds)?"direct-predecessor":Seq$1.contains(key,$3)?"indirect-predecessor":Seq$1.contains(key,$4)?"included-predecessor":"")+(Unchecked.Equals($5,$1)?" codeSnippet":"")):"";
      });
     },k,lmd.get_CurrentV().get_View()),indSelPredIdsW),SnippetsUI.allCodePredIdsW()),SnippetsUI.codeSnippetIdV().get_View())
    }),_this$2)),(t$4.h.push(Handler.EventQ2(t$4.k,"select",function()
    {
     return t$4.i;
    },function()
    {
     var o;
     View$1.Get((o=lmd.selV,function(a)
     {
      o.Set(a);
     }),k);
    })),t$4)),(_this$1.h.push({
     $:2,
     $0:"indent",
     $1:View$1.Map(function($1)
     {
      return Global.String(1.5*$1.level);
     },snpdW)
    }),_this$1)),(_this.h.push({
     $:2,
     $0:"parent",
     $1:View$1.Apply(View$1.Map2(function($1,$2)
     {
      return function($3)
      {
       return $1.hasChildren?$2.Contains($3.snpId)?"collapsed":"expanded":"";
      };
     },snpdW,SnippetsUI.collapsedV().get_View()),snp.get_View())
    }),_this)),(t$3.h.push(Handler.EventQ2(t$3.k,"togglecollapse",function()
    {
     return t$3.i;
    },function()
    {
     View$1.Get(function(snpd)
     {
      var a;
      if(snpd.hasChildren)
       {
        a=((SnippetsUI.collapsedV().Get().Contains(snp.Get().snpId)?function(v$1)
        {
         return function(s)
         {
          return s.Remove(v$1);
         };
        }:function(v$1)
        {
         return function(s)
         {
          return s.Add(v$1);
         };
        })(snp.Get().snpId))(SnippetsUI.collapsedV().Get());
        SnippetsUI.collapsedV().Set(a);
       }
     },snpdW);
    })),t$3)),(t$2.h.push(Handler.EventQ2(t$2.k,"drag",function()
    {
     return t$2.i;
    },function(ev)
    {
     View$1.Get(function(a)
     {
      if(a!=null&&a.$==1)
       {
        DragDrop.setDragNode(a.$0);
        ev.Event.stopPropagation();
       }
     },k);
    })),t$2)),(t$1.h.push(Handler.EventQ2(t$1.k,"dragover",function()
    {
     return t$1.i;
    },function(ev)
    {
     View$1.Get(function(a)
     {
      if(a!=null&&a.$==1)
       if(DragDrop.getDragNIdO(a.$0)!=null)
        ev.Event.preventDefault();
     },k);
    })),t$1)),(t.h.push(Handler.EventQ2(t.k,"drop",function()
    {
     return t.i;
    },function(ev)
    {
     ev.Event.preventDefault();
     View$1.Get(function(a)
     {
      var sid,x;
      if(a!=null&&a.$==1)
       {
        sid=a.$0;
        x=DragDrop.getDragNIdO(sid);
        (Option.iter(function(fr)
        {
         SnippetsUI.moveNode(fr,sid);
        }))(x);
       }
     },k);
    })),t)),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],SnippetsUI_Templates.snippet(p[0])),b.i=i,i))).get_Doc());
   };
  };
 };
 SnippetsUI.moveNode=function(frid,toid)
 {
  View$1.Get(function(hier)
  {
   var $1,res,$2,res$1,$3,$4,frdt,frsn,todt,elems,n,newSn,a;
   function nextPos(i)
   {
    var res$2,m,m$1;
    while(true)
     {
      m=Arrays.tryItem(i+1,elems);
      if(m!=null&&m.$==1)
       {
        m$1=(res$2=null,hier.TryGetValue(m.$0.snpId,{
         get:function()
         {
          return res$2;
         },
         set:function(v)
         {
          res$2=v;
         }
        })?{
         $:1,
         $0:res$2
        }:null);
        if(m$1!=null&&m$1.$==1)
        {
         if(Seq$1.contains(frid,m$1.$0.path))
          i=i+1;
         else
          return i;
        }
        else
         return i;
       }
      else
       return i;
     }
   }
   $1=(res=null,hier.TryGetValue(frid,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?{
    $:1,
    $0:res
   }:null);
   $2=(res$1=null,hier.TryGetValue(toid,{
    get:function()
    {
     return res$1;
    },
    set:function(v)
    {
     res$1=v;
    }
   })?{
    $:1,
    $0:res$1
   }:null);
   $3=SnippetsUI.snippetsLM().TryFindByKey(frid);
   $4=SnippetsUI.snippetsLM().TryFindByKey(toid);
   $1!=null&&$1.$==1?$2!=null&&$2.$==1?$3!=null&&$3.$==1?$4!=null&&$4.$==1?(frdt=$1.$0,frsn=$3.$0,todt=$2.$0,Seq$1.contains(frid,todt.path)?void 0:(elems=Arrays.ofSeq((SnippetsUI.snippetsLM())["var"].Get()),n=nextPos(frdt.pos),newSn=Snippet.New(frsn.snpId,frsn.snpName,frsn.snpContent,$4.$0.snpParentIdO,frsn.snpPredIds,frsn.snpProperties,frsn.snpModified),a=Arrays.concat(frdt.pos<todt.pos?[Slice.array(elems,{
    $:1,
    $0:0
   },{
    $:1,
    $0:frdt.pos-1
   }),Slice.array(elems,{
    $:1,
    $0:n+1
   },{
    $:1,
    $0:todt.pos-1
   }),[newSn],Slice.array(elems,{
    $:1,
    $0:frdt.pos+1
   },{
    $:1,
    $0:n
   }),Slice.array(elems,{
    $:1,
    $0:todt.pos
   },null)]:[Slice.array(elems,{
    $:1,
    $0:0
   },{
    $:1,
    $0:todt.pos-1
   }),[newSn],Slice.array(elems,{
    $:1,
    $0:frdt.pos+1
   },{
    $:1,
    $0:n
   }),Slice.array(elems,{
    $:1,
    $0:todt.pos
   },{
    $:1,
    $0:frdt.pos-1
   }),Slice.array(elems,{
    $:1,
    $0:n+1
   },null)]),SnippetsUI.snippetsLM().Set(a))):void 0:void 0:void 0:void 0;
  },SnippetsUI.processHierW());
 };
 SnippetsUI.docWrap=function(wrapper,doc)
 {
  return(wrapper([]))([doc]);
 };
 SnippetsUI.processHierW=function()
 {
  SC$1.$cctor();
  return SC$1.processHierW;
 };
 SnippetsUI.snpIdParentsW=function()
 {
  SC$1.$cctor();
  return SC$1.snpIdParentsW;
 };
 SnippetsUI.processHier=function(snps,collapsed)
 {
  var path,collapse,dSnps,i,e;
  dSnps=new Dictionary.New$5();
  path=[];
  collapse=0;
  i=Seq$1.indexed(snps);
  e=Enumerator.Get(i);
  try
  {
   while(e.MoveNext())
    (function()
    {
     var f,sid,pidO,k,p,pid,m,j,pth,lvl,o,o$1;
     function p$1(a,spid)
     {
      return Unchecked.Equals(spid,pid);
     }
     f=e.Current();
     sid=f[1][0];
     pidO=f[1][1];
     k=f[0];
     p=pidO!=null&&pidO.$==1?(pid=pidO.$0,(m=Seq$1.tryFind(function($1)
     {
      return p$1($1[0],$1[1]);
     },Seq$1.indexed(path)),m!=null&&m.$==1?(j=m.$0[0],[j+1,Slice.array(path,{
      $:1,
      $0:0
     },{
      $:1,
      $0:j
     }),null]):[0,[],{
      $:1,
      $0:(function($1)
      {
       return function($2)
       {
        return $1("Parent not found in path "+Utils.prettyPrint($2));
       };
      }(Global.id))(pid)
     }])):[0,[],null];
     pth=p[1];
     lvl=p[0];
     dSnps.Add(sid,SnippetHierData.New(lvl,k,(o=(o$1=Seq$1.tryItem(k+1,snps),o$1==null?null:{
      $:1,
      $0:Unchecked.Equals({
       $:1,
       $0:sid
      },o$1.$0[1])
     }),o==null?false:o.$0),collapse>=lvl,pth,p[2]));
     path=pth.concat([sid]);
     return collapse>=lvl?void(collapse=collapsed.Contains(sid)?lvl:lvl+1):null;
    }());
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
  return dSnps;
 };
 SnippetsUI.shdDef=function()
 {
  SC$1.$cctor();
  return SC$1.shdDef;
 };
 SnippetsUI.allCodePredIdsW=function()
 {
  SC$1.$cctor();
  return SC$1.allCodePredIdsW;
 };
 SnippetsUI.allCodePredsW=function()
 {
  SC$1.$cctor();
  return SC$1.allCodePredsW;
 };
 SnippetsUI.indPredIds=function()
 {
  SC$1.$cctor();
  return SC$1.indPredIds;
 };
 SnippetsUI.allPredecessors=function()
 {
  SC$1.$cctor();
  return SC$1.allPredecessors;
 };
 SnippetsUI.searchFor=function()
 {
  SC$1.$cctor();
  return SC$1.searchFor;
 };
 SnippetsUI.codeSnippetIdV=function()
 {
  SC$1.$cctor();
  return SC$1.codeSnippetIdV;
 };
 SnippetsUI.collapsedV=function()
 {
  SC$1.$cctor();
  return SC$1.collapsedV;
 };
 SnippetsUI.snippetsLM=function()
 {
  SC$1.$cctor();
  return SC$1.snippetsLM;
 };
 SnippetsUI.TemplateFileName=function()
 {
  SC$1.$cctor();
  return SC$1.TemplateFileName;
 };
 SC$1.$cctor=function()
 {
  var f,g,t,s,x,t$1,t$2,t$3,t$4,t$5,t$6,t$7,t$8,t$9,t$10,t$11,i,x$1,t$12,t$13,t$14,t$15,t$16,t$17,i$1,v,prior,b,b$1,propsV,b$2,x$2,f$1,f$2,l,g$1,b$3,b$4,b$5,b$6,a,f$3,g$2;
  SC$1.$cctor=Global.ignore;
  function g$3(s$1)
  {
   return Strings.concat("\n",s$1);
  }
  function f$4(s$1)
  {
   return String.splitByChar$1("\n",s$1);
  }
  function g$4(s$1)
  {
   var a$1,b$7;
   return Slice.array(s$1,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$1=0,(b$7=Arrays.length(s$1)-2,Unchecked.Compare(a$1,b$7)===1?a$1:b$7))
   });
  }
  function g$5(s$1)
  {
   return Strings.concat("\n",s$1);
  }
  function f$5(s$1)
  {
   return s$1+"T00:00:00";
  }
  function g$6(v$1)
  {
   var c$1;
   c$1=v$1;
   return Global.String(c$1);
  }
  function t$18(a$1)
  {
   return SnippetsUI.snippetsLM().TryFindByKey(a$1);
  }
  function t$19(a$1)
  {
   return SnippetsUI.snippetsLM().TryFindByKey(a$1);
  }
  function c(a$1)
  {
   return a$1.$==1?{
    $:1,
    $0:a$1.$0
   }:null;
  }
  function g$7(s$1)
  {
   return Strings.concat("\n",s$1);
  }
  SC$1.rtn=function(v$1)
  {
   return[v$1];
  };
  SC$1.unindentStr=function(x$3)
  {
   return g$3(String.unindent$1(x$3));
  };
  SC$1.skipLastLine=(f=function(x$3)
  {
   return g$4(f$4(x$3));
  },function(x$3)
  {
   return g$5(f(x$3));
  });
  SC$1.parseDateO2=(g=ParseO.tryParseWith$1(function(a$1)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a$1),m!=null&&m.$==1&&(o=m.$0,true)),o];
  }),function(x$3)
  {
   return g(f$5(x$3));
  });
  SC$1.parseDateO=ParseO.tryParseWith$1(function(a$1)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a$1),m!=null&&m.$==1&&(o=m.$0,true)),o];
  });
  SC$1.parseIntO=ParseO.tryParseWith$1(function(a$1)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt32(a$1,{
    get:function()
    {
     return o;
    },
    set:function(v$1)
    {
     o=v$1;
    }
   }),o];
  });
  SC$1.parseInt64O=ParseO.tryParseWith$1(function(a$1)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt64(a$1,{
    get:function()
    {
     return o;
    },
    set:function(v$1)
    {
     o=v$1;
    }
   }),o];
  });
  SC$1.parseSingleO=ParseO.tryParseWith$1(function(a$1)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a$1),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith$1(function(a$1)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a$1),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseGuidO=ParseO.tryParseWith$1(function(a$1)
  {
   var o;
   o=null;
   return[Guid.TryParse(a$1,{
    get:function()
    {
     return o;
    },
    set:function(v$1)
    {
     o=v$1;
    }
   }),o];
  });
  SC$1["|Date|_|"]=ParseO.parseDateO$1();
  SC$1["|Int|_|"]=ParseO.parseIntO$1();
  SC$1["|Int64|_|"]=ParseO.parseInt64O$1();
  SC$1["|Single|_|"]=ParseO.parseSingleO$1();
  SC$1["|Double|_|"]=ParseO.parseDoubleO$1();
  SC$1["|Guid|_|"]=ParseO.parseGuidO$1();
  SC$1.serString=[Serializer.toJsonString,function(j)
  {
   return j.tryString();
  }];
  SC$1.serFloat=[function(v$1)
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(v$1);
  },function(j)
  {
   return j.tryFloat();
  }];
  SC$1.serInt=[function(v$1)
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(v$1);
  },function(j)
  {
   var o;
   o=j.tryInt();
   return o==null?null:{
    $:1,
    $0:Operators.toInt(o.$0)
   };
  }];
  SC$1.serInt64=[function(v$1)
  {
   var c$1;
   c$1=v$1;
   return Global.String(c$1);
  },function(j)
  {
   return j.tryInt();
  }];
  SC$1.serBool=[function(v$1)
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(v$1);
  },function(j)
  {
   return j.tryBool();
  }];
  SC$1.serDate=[function(x$3)
  {
   return g$6(Global.id(x$3));
  },function(j)
  {
   var o;
   o=j.tryInt();
   return o==null?null:{
    $:1,
    $0:o.$0
   };
  }];
  SC$1.serTypedRegisters=new Dictionary.New$5();
  SC$1.serGuid=(t=Serializer.serString(),Serializer.mapO(Global.String,ParseO.parseGuidO$1(),t[0],t[1]));
  SC$1.defaultSnippet=Snippet.New("00000000-0000-0000-0000-000000000000","","",null,new FSharpSet.New$1(null),[],(new Date(0)).getTime());
  SC$1.serSnippetId=(s="SnippetId",[function(gid)
  {
   var x$3;
   x$3=Global.String(gid);
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("{"+Utils.prettyPrint($2)+" :"+Utils.prettyPrint($3)+"}");
   }))(Global.id))(s))(x$3);
  },function(j)
  {
   var o,o$1,o$2,f$6;
   o=(o$1=(o$2=j.tryField(s),o$2==null?null:o$2.$0.tryString()),(f$6=ParseO.parseGuidO$1(),o$1==null?null:f$6(o$1.$0)));
   return o==null?null:{
    $:1,
    $0:o.$0
   };
  }]);
  SC$1.serSnippet=(x=[(t$1=SnippetSerialize.serSnippetId(),Serializer.serField("snpId",function(s$1)
  {
   return s$1.snpId;
  },function(v$1,s$1)
  {
   return Snippet.New(v$1,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$1[0],t$1[1])),(t$2=Serializer.serString(),Serializer.serField("snpName",function(s$1)
  {
   return s$1.snpName;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,v$1,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$2[0],t$2[1])),(t$3=Serializer.serString(),Serializer.serField("snpContent",function(s$1)
  {
   return s$1.snpContent;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,v$1,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$3[0],t$3[1])),(t$4=(t$5=SnippetSerialize.serSnippetId(),Serializer.serOpt(t$5[0],t$5[1])),Serializer.serField("snpParentIdO",function(s$1)
  {
   return s$1.snpParentIdO;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,v$1,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$4[0],t$4[1])),(t$6=(t$7=SnippetSerialize.serSnippetId(),Serializer.serSet(t$7[0],t$7[1])),Serializer.serField("snpPredIds",function(s$1)
  {
   return s$1.snpPredIds;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,v$1,s$1.snpProperties,s$1.snpModified);
  },t$6[0],t$6[1])),(t$8=(t$9=Serializer.serDup(Serializer.serString(),Serializer.serString()),Serializer.serArr(t$9[0],t$9[1])),Serializer.serField("snpProperties",function(s$1)
  {
   return s$1.snpProperties;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,v$1,s$1.snpModified);
  },t$8[0],t$8[1])),(t$10=Serializer.serInt(),Serializer.serFieldO("snpGeneration",function()
  {
   return null;
  },function(vO,s$1)
  {
   var c$1;
   return vO!=null&&vO.$==1?Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,(c$1=(new Date(0)).getTime(),c$1+vO.$0*3600000)):s$1;
  },t$10[0],t$10[1])),(t$11=Serializer.serDate(),Serializer.serField("snpModified",function(s$1)
  {
   return s$1.snpModified;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,v$1);
  },t$11[0],t$11[1]))],(i=SnippetModule.New("","",null),[function(rc)
  {
   var x$3;
   function c$1(n,ser,_deser)
   {
    var x$4,m;
    x$4=ser(rc);
    m=((Runtime.Curried3(function($1,$2,$3)
    {
     return $1(Utils.prettyPrint($2)+": "+Utils.toSafe($3));
    }))(Global.id))(n);
    return x$4==null?null:{
     $:1,
     $0:m(x$4.$0)
    };
   }
   x$3=Strings.concat(", ",Seq$1.choose(function($1)
   {
    return c$1($1[0],$1[1],$1[2]);
   },x));
   return(function($1)
   {
    return function($2)
    {
     return $1("{"+Utils.toSafe($2)+"}");
    };
   }(Global.id))(x$3);
  },function(j)
  {
   return{
    $:1,
    $0:Seq$1.fold(function(rc,t$20)
    {
     var x$3;
     x$3=j.tryField(t$20[0]);
     return(t$20[2](rc))(x$3);
    },i,x)
   };
  }]));
  SC$1.serModel=(x$1=[(t$12=(t$13=SnippetSerialize.serSnippet(),Serializer.serArr(t$13[0],t$13[1])),Serializer.serField("snippets",function(m)
  {
   return m.snippets;
  },function(v$1,m)
  {
   return Model.New(v$1,m.modified,m.collapsed);
  },t$12[0],t$12[1])),(t$14=Serializer.serInt(),Serializer.serFieldO("generation",function()
  {
   return null;
  },function(vO,m)
  {
   var c$1;
   return vO!=null&&vO.$==1?Model.New(m.snippets,(c$1=(new Date(0)).getTime(),c$1+vO.$0*3600000),m.collapsed):m;
  },t$14[0],t$14[1])),(t$15=Serializer.serDate(),Serializer.serField("modified",function(m)
  {
   return m.modified;
  },function(v$1,m)
  {
   return Model.New(m.snippets,v$1,m.collapsed);
  },t$15[0],t$15[1])),(t$16=(t$17=SnippetSerialize.serSnippetId(),Serializer.serSet(t$17[0],t$17[1])),Serializer.serField("collapsed",function(m)
  {
   return m.collapsed;
  },function(v$1,m)
  {
   return Model.New(m.snippets,m.modified,v$1);
  },t$16[0],t$16[1]))],(i$1=Model.New([],(new Date(0)).getTime(),new FSharpSet.New$1(null)),[function(rc)
  {
   var x$3;
   function c$1(n,ser,_deser)
   {
    var x$4,m;
    x$4=ser(rc);
    m=((Runtime.Curried3(function($1,$2,$3)
    {
     return $1(Utils.prettyPrint($2)+": "+Utils.toSafe($3));
    }))(Global.id))(n);
    return x$4==null?null:{
     $:1,
     $0:m(x$4.$0)
    };
   }
   x$3=Strings.concat(", ",Seq$1.choose(function($1)
   {
    return c$1($1[0],$1[1],$1[2]);
   },x$1));
   return(function($1)
   {
    return function($2)
    {
     return $1("{"+Utils.toSafe($2)+"}");
    };
   }(Global.id))(x$3);
  },function(j)
  {
   return{
    $:1,
    $0:Seq$1.fold(function(rc,t$20)
    {
     var x$3;
     x$3=j.tryField(t$20[0]);
     return(t$20[2](rc))(x$3);
    },i$1,x$1)
   };
  }]));
  SC$1.unselectorV=new FromView.New(View$1.Const(null),Global.ignore);
  SC$1.drag=DragInfo.DragNone;
  SC$1.TemplateFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\website\\Templates.html";
  SC$1.snippetsLM=ListModel.Create(function(e)
  {
   return e.snpId;
  },List.T.Empty);
  SC$1.collapsedV=Var$1.Create$1(new FSharpSet.New$1(null));
  SC$1.codeSnippetIdV=Var$1.Create$1(null);
  SC$1.searchFor=Var$1.Create$1("");
  SC$1.allPredecessors=function(s$1)
  {
   return SnippetModule.allPredecessors(t$18,s$1);
  };
  SC$1.indPredIds=function(t$20)
  {
   return SnippetModule.indirectPredecessorIds(t$19,t$20[0],t$20[1],t$20[2]);
  };
  SC$1.allCodePredsW=View$1.Map(function($1)
  {
   var sid,m;
   return $1!=null&&$1.$==1?(sid=$1.$0,(m=SnippetsUI.snippetsLM().TryFindByKey(sid),m!=null&&m.$==1?(SnippetsUI.allPredecessors())(m.$0):new FSharpSet.New$1(null))):new FSharpSet.New$1(null);
  },SnippetsUI.codeSnippetIdV().get_View());
  SC$1.allCodePredIdsW=View$1.Map(function($1)
  {
   return Seq$1.map(function(snp)
   {
    return snp.snpId;
   },$1);
  },SnippetsUI.allCodePredsW());
  SC$1.shdDef=SnippetHierData.New(0,0,false,true,[],null);
  SC$1.snpIdParentsW=(v=View$1.Map(function($1)
  {
   return Arrays.ofSeq(Seq$1.map(function(snp)
   {
    return[snp.snpId,snp.snpParentIdO];
   },$1));
  },SnippetsUI.snippetsLM().v),(prior=[Var$1.Create$1(null)],(View$1.Sink(function(v$1)
  {
   if(!Unchecked.Equals(prior[0].Get(),v$1))
    prior[0].Set(v$1);
  },v),prior[0].get_View())));
  SC$1.processHierW=(b=View$1.get_Do(),View$1.Bind(function(a$1)
  {
   return View$1.Bind(function(a$2)
   {
    return View$1.Const(SnippetsUI.processHier(a$1,a$2));
   },SnippetsUI.collapsedV().get_View());
  },SnippetsUI.snpIdParentsW()));
  SC$1.search=(b$1=View$1.get_Do(),View$1.Bind(function(a$1)
  {
   function visibleF(snp)
   {
    var o,o$1,k;
    o=(o$1=(k=snp.snpId,function(d)
    {
     var res;
     res=null;
     return d.TryGetValue(k,{
      get:function()
      {
       return res;
      },
      set:function(v$1)
      {
       res=v$1;
      }
     })?{
      $:1,
      $0:res
     }:null;
    }(a$1)),o$1==null?null:{
     $:1,
     $0:o$1.$0.visible
    });
    return o==null||o.$0;
   }
   return View$1.Bind(function(a$2)
   {
    return a$2===""?View$1.Const(visibleF):View$1.Bind(function(a$3)
    {
     return View$1.Bind(function(a$4)
     {
      return a$2==="."?View$1.Const(function(snp)
      {
       return(Unchecked.Equals(a$4,{
        $:1,
        $0:snp.snpId
       })||Seq$1.contains(snp.snpId,a$3))&&visibleF(snp);
      }):View$1.Const(function(snp)
      {
       return snp.snpName.indexOf(a$2)!=-1||snp.snpContent.indexOf(a$2)!=-1;
      });
     },SnippetsUI.codeSnippetIdV().get_View());
    },SnippetsUI.allCodePredIdsW());
   },SnippetsUI.searchFor().get_View());
  },SnippetsUI.processHierW()));
  SC$1.snippetList=LM.getDocFor(SnippetsUI.snippetsLM(),SnippetModule.defaultSnippet(),function()
  {
   return SnippetModule.New("","",null);
  },{
   $:1,
   $0:SnippetsUI.search()
  },function(l$1)
  {
   return SnippetsUI.calcUI(SnippetsUI.wrapNothing,true,l$1);
  });
  View$1.Sink(function(a$1)
  {
   var sid;
   if(a$1!=null&&a$1.$==1)
    {
     sid=a$1.$0;
     View$1.Get(function(allCodePredIds)
     {
      if(!Unchecked.Equals(SnippetsUI.codeSnippetIdV().Get(),{
       $:1,
       $0:sid
      }))
       if(!Seq$1.contains(sid,allCodePredIds))
        SnippetsUI.codeSnippetIdV().Set({
         $:1,
         $0:sid
        });
     },SnippetsUI.allCodePredIdsW());
    }
  },SnippetsUI.snippetList().selV.get_View());
  SC$1.currentSnippetV=Var$1.Lens(SnippetsUI.snippetList().get_CurrentV(),Global.id,function(a$1,x$3)
  {
   return x$3;
  });
  SC$1.currentSnippetNameV=Var$1.Lens(SnippetsUI.currentSnippetV(),function($1)
  {
   return $1.snpName;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$2,$1.snpContent,$1.snpParentIdO,$1.snpPredIds,$1.snpProperties,$1.snpModified);
  });
  SC$1.currentSnippetContentV=Var$1.Lens(SnippetsUI.currentSnippetV(),function($1)
  {
   return $1.snpContent;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$1.snpName,$2,$1.snpParentIdO,$1.snpPredIds,$1.snpProperties,$1.snpModified);
  });
  SC$1.currentSnippetPropsV=(propsV=Var$1.Lens(SnippetsUI.currentSnippetV(),function($1)
  {
   return $1.snpProperties;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$1.snpName,$1.snpContent,$1.snpParentIdO,$1.snpPredIds,$2,$1.snpModified);
  }),new FromView.New(propsV.get_View(),function(v$1)
  {
   if(!Unchecked.Equals(v$1,propsV.Get()))
    propsV.Set(v$1);
  }));
  SC$1.curSnp=(b$2=AppFramework.plugin(),b$2.AddVar(b$2.AddVar(b$2.AddVar(b$2.Yield(),"name",SnippetsUI.currentSnippetNameV()),"content",SnippetsUI.currentSnippetContentV()),"explanation",SnippetsUI.propertyV("Explanation")));
  SC$1.prevSnpW=View$1.Apply(View$1.Map2(function($1,$2)
  {
   return function($3)
   {
    var cid,a$1,o,o$1;
    function p(i$2,snp)
    {
     return Unchecked.Equals(snp.snpId,cid);
    }
    cid=$1.snpId;
    return Seq$1.tryItem((a$1=(o=(o$1=Seq$1.tryFind(function($4)
    {
     return p($4[0],$4[1]);
    },Seq$1.indexed($2)),o$1==null?null:{
     $:1,
     $0:o$1.$0[0]
    }),o==null?0:o.$0),a$1===0?0:a$1-1),$3);
   };
  },SnippetsUI.currentSnippetV().get_View(),SnippetsUI.snippetsLM().v),SnippetsUI.snippetsLM().v);
  SC$1.nextSnpW=View$1.Apply(View$1.Apply(View$1.Map2(function($1,$2)
  {
   return function($3)
   {
    return function($4)
    {
     var cid,a$1,o,o$1;
     function p(i$2,snp)
     {
      return Unchecked.Equals(snp.snpId,cid);
     }
     cid=$1.snpId;
     return Seq$1.tryItem((a$1=(o=(o$1=Seq$1.tryFind(function($5)
     {
      return p($5[0],$5[1]);
     },Seq$1.indexed($2)),o$1==null?null:{
      $:1,
      $0:o$1.$0[0]
     }),o==null?0:o.$0),a$1+1>=Seq$1.length($3)?a$1:a$1+1),$4);
    };
   };
  },SnippetsUI.currentSnippetV().get_View(),SnippetsUI.snippetsLM().v),SnippetsUI.snippetsLM().v),SnippetsUI.snippetsLM().v);
  SC$1.prevSelW=View$1.Map(function($1)
  {
   var o;
   o=$1==null?null:{
    $:1,
    $0:Global.String($1.$0.snpId)
   };
   return o==null?"":o.$0;
  },SnippetsUI.prevSnpW());
  SC$1.nextSelW=View$1.Map(function($1)
  {
   var o;
   o=$1==null?null:{
    $:1,
    $0:Global.String($1.$0.snpId)
   };
   return o==null?"":o.$0;
  },SnippetsUI.nextSnpW());
  SC$1.prevTxtW=View$1.Map(function($1)
  {
   var o;
   o=$1==null?null:{
    $:1,
    $0:$1.$0.snpName
   };
   return o==null?"":o.$0;
  },SnippetsUI.prevSnpW());
  SC$1.nextTxtW=View$1.Map(function($1)
  {
   var o;
   o=$1==null?null:{
    $:1,
    $0:$1.$0.snpName
   };
   return o==null?"":o.$0;
  },SnippetsUI.nextSnpW());
  SC$1.parseW=(x$2=SnippetsUI.currentSnippetContentV().get_View(),View$1.Map((f$1=(f$2=(l=new AppFramework.PlugInName({
   $:0,
   $0:"lytTarget"
  }),function(t$20)
  {
   return LayoutEngineModule.parseEntries(l,t$20);
  }),(g$1=function(s$1)
  {
   return Seq$1.choose(c,s$1);
  },function(x$3)
  {
   return g$1(f$2(x$3));
  })),function(x$3)
  {
   return g$7(f$1(x$3));
  }),x$2));
  SC$1.predecessorsW=(b$3=View$1.get_Do(),View$1.Bind(function(a$1)
  {
   return View$1.Bind(function(a$2)
   {
    var preds;
    preds=new FSharpSet.New$1(BalancedTree.OfSeq(Seq$1.map(function(snp)
    {
     return snp.snpId;
    },(SnippetsUI.allPredecessors())(a$1))));
    return View$1.Const(Seq$1.filter(function(snp)
    {
     return preds.Contains(snp.snpId);
    },a$2));
   },SnippetsUI.snippetsLM().v);
  },SnippetsUI.currentSnippetV().get_View()));
  SC$1.getPresencesW=(b$4=View$1.get_Do(),View$1.Bind(function(a$1)
  {
   var x$3;
   return View$1.Const((x$3=Strings.concat("; ",Seq$1.map(function($1)
   {
    return function($2)
    {
     return $1("\""+Utils.prettyPrint($2)+"\"");
    };
   }(Global.id),Seq$1.map(function(snp)
   {
    return snp.snpId;
   },a$1))),(function($1)
   {
    return function($2)
    {
     return $1("CodePresence.get([| "+Utils.toSafe($2)+" |])");
    };
   }(Global.id))(x$3)));
  },SnippetsUI.predecessorsW()));
  SC$1.presencesV=Var$1.Create$1("");
  SC$1.codeRequiredW=(b$5=View$1.get_Do(),View$1.Bind(function(a$1)
  {
   var presences;
   function c$1($1,$2)
   {
    var $3;
    return $1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3=[$1.$0,$2.$0],true))?{
     $:1,
     $0:[$3[0],$3[1]]
    }:null;
   }
   function m(a$2,b$7)
   {
    var o,o$1;
    return[(o=(ParseO.parseGuidO$1())(a$2),o==null?null:{
     $:1,
     $0:o.$0
    }),(o$1=(ParseO.parseInt64O$1())(b$7),o$1==null?null:{
     $:1,
     $0:o$1.$0
    })];
   }
   presences=new FSharpMap.New(Seq$1.choose(function($1)
   {
    return c$1($1[0],$1[1]);
   },Seq$1.map(function($1)
   {
    return m($1[0],$1[1]);
   },Seq$1.choose(function(t$20)
   {
    return String.splitInTwoO$1(" ",t$20);
   },Seq$1.map(String.trim$1,Strings.SplitChars(a$1,["\n"],0))))));
   return View$1.Bind(function(a$2)
   {
    return View$1.Const(Strings.concat("\n\n",Seq$1.map(function(snp)
    {
     return((((Runtime.Curried(function($1,$2,$3,$4)
     {
      return $1(Utils.toSafe($2)+"\nCodePresence.add \""+Utils.prettyPrint($3)+"\" \""+Global.String($4)+"\"");
     },4))(Global.id))(snp.snpContent))(snp.snpId))(snp.snpModified);
    },Seq$1.skipWhile(function(snp)
    {
     var m$1;
     m$1=Map.TryFind(snp.snpId,presences);
     return m$1!=null&&m$1.$==1&&m$1.$0===snp.snpModified;
    },a$2))));
   },SnippetsUI.predecessorsW());
  },SnippetsUI.presencesV().get_View()));
  SC$1.plugInAdded=AppFramework.addPlugIn((b$6=AppFramework.plugin(),b$6.AddAct(b$6.AddAct(b$6.AddAct(b$6.AddAct(b$6.AddAct(b$6.AddAct(b$6.Merge(b$6.Merge(b$6.AddViw(b$6.AddVar(b$6.AddViw(b$6.AddViw(b$6.AddViw(b$6.AddViw(b$6.AddViw(b$6.AddViw(b$6.AddVar(b$6.Name(b$6.Yield(),"Snippets"),"searchFor",SnippetsUI.searchFor()),"parseOut",SnippetsUI.parseW()),"prevSel",SnippetsUI.prevSelW()),"nextSel",SnippetsUI.nextSelW()),"prevTxt",SnippetsUI.prevTxtW()),"nextTxt",SnippetsUI.nextTxtW()),"getPresences",SnippetsUI.getPresencesW()),"presences",SnippetsUI.presencesV()),"codeRequired",SnippetsUI.codeRequiredW()),"snippets_",(a=(f$3=ParseO.parseGuidO$1(),(g$2=function(o)
  {
   return o==null?null:{
    $:1,
    $0:Global.id(o.$0)
   };
  },function(x$3)
  {
   return g$2(f$3(x$3));
  })),SnippetsUI.snippetList().PlugIn(a,Global.String))),"curSnp_",SnippetsUI.curSnp()),"LoadSnippets",function()
  {
   SaveLoad.loadTextFile(self.document.getElementById("LoadSnippets").firstElementChild.firstElementChild.firstElementChild.firstElementChild);
  }),"SaveSnippets",function()
  {
   SaveLoad.saveAs();
  }),"IndentIn",function()
  {
   SnippetsUI.indentIn();
  }),"IndentOut",function()
  {
   SnippetsUI.indentOut();
  }),"AddSnippet",function()
  {
   SnippetsUI.addSnippet();
  }),"DeleteSnippet",function()
  {
   SnippetsUI.deleteSnippet();
  })));
 };
 SnippetsUI_Templates.snippet=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"snippet"
  },h):void 0;
 };
}(self));

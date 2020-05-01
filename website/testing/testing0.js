(function()
{
 "use strict";
 var Global,FsRoot,Library,Monads,Seq,Async,String,ParseO,TestingJS,Covid,State,Function,SC$1,WebSharper,Seq$1,Concurrency,Arrays,List,Strings,Slice,Operators,Char,Unchecked,UI,Var$1,View,CancellationTokenSource,Utils,console,IntelliFactory,Runtime,Doc,AttrModule,AttrProxy,Client,Templates,Collections,Map,FSharpMap,Data,TxtRuntime,FSharp,Data$1,Runtime$1,IO,JSON,FSharpSet,BalancedTree,Set,DateUtil,Numeric,System,Guid,Dictionary,Date;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 Monads=Library.Monads=Library.Monads||{};
 Seq=Monads.Seq=Monads.Seq||{};
 Async=Monads.Async=Monads.Async||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 Covid=TestingJS.Covid=TestingJS.Covid||{};
 State=Covid.State=Covid.State||{};
 Function=Covid.Function=Covid.Function||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 WebSharper=Global.WebSharper;
 Seq$1=WebSharper&&WebSharper.Seq;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Arrays=WebSharper&&WebSharper.Arrays;
 List=WebSharper&&WebSharper.List;
 Strings=WebSharper&&WebSharper.Strings;
 Slice=WebSharper&&WebSharper.Slice;
 Operators=WebSharper&&WebSharper.Operators;
 Char=WebSharper&&WebSharper.Char;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 UI=WebSharper&&WebSharper.UI;
 Var$1=UI&&UI.Var$1;
 View=UI&&UI.View;
 CancellationTokenSource=WebSharper&&WebSharper.CancellationTokenSource;
 Utils=WebSharper&&WebSharper.Utils;
 console=Global.console;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Doc=UI&&UI.Doc;
 AttrModule=UI&&UI.AttrModule;
 AttrProxy=UI&&UI.AttrProxy;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Collections=WebSharper&&WebSharper.Collections;
 Map=Collections&&Collections.Map;
 FSharpMap=Collections&&Collections.FSharpMap;
 Data=WebSharper&&WebSharper.Data;
 TxtRuntime=Data&&Data.TxtRuntime;
 FSharp=Global.FSharp;
 Data$1=FSharp&&FSharp.Data;
 Runtime$1=Data$1&&Data$1.Runtime;
 IO=Runtime$1&&Runtime$1.IO;
 JSON=Global.JSON;
 FSharpSet=Collections&&Collections.FSharpSet;
 BalancedTree=Collections&&Collections.BalancedTree;
 Set=Collections&&Collections.Set;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 System=Global.System;
 Guid=System&&System.Guid;
 Dictionary=Collections&&Collections.Dictionary;
 Date=Global.Date;
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
  },vSR.$0):(Seq.rtn())(Library.Error(vSR.$0));
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
 Async.insertR=function(vAR)
 {
  function f(a)
  {
   return{
    $:0,
    $0:a
   };
  }
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return vAR.$==0?Concurrency.Bind(vAR.$0,function(x)
  {
   return g(f(x));
  }):Concurrency.Return(Library.Error(vAR.$0));
 };
 Async.insertO=function(vAO)
 {
  var o;
  function f(a)
  {
   return{
    $:1,
    $0:a
   };
  }
  function g(v)
  {
   return Concurrency.Return(v);
  }
  o=vAO==null?null:{
   $:1,
   $0:Concurrency.Bind(vAO.$0,function(x)
   {
    return g(f(x));
   })
  };
  return o==null?Concurrency.Return(null):o.$0;
 };
 Async.sequenceSeq=function(sq)
 {
  return Async.traverseSeq(Global.id,sq);
 };
 Async.traverseSeq=function(f,sq)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(Arrays.foldBack(function(head,tail)
  {
   return Async.op_GreaterGreaterEquals(f(head),function(h)
   {
    return Async.op_GreaterGreaterEquals(tail,function(t)
    {
     return Concurrency.Return(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Concurrency.Return(List.T.Empty)),function(x)
  {
   return g(Global.id(x));
  });
 };
 Async.op_GreaterGreaterEquals=function(v,f)
 {
  return Concurrency.Bind(v,f);
 };
 Async.sleepThen=function(f,milliseconds)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(milliseconds),function()
   {
    return Concurrency.Return(f());
   });
  });
 };
 Async.apply=function(fA,vA)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.StartChild(fA,null),function(a)
   {
    return Concurrency.Bind(Concurrency.StartChild(vA,null),function(a$1)
    {
     return Concurrency.Bind(a,function(a$2)
     {
      return Concurrency.Bind(a$1,function(a$3)
      {
       return Concurrency.Return(a$2(a$3));
      });
     });
    });
   });
  });
 };
 String.thousands=function(n)
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
 String.EndsWith=function(ends,s)
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
 String.StartsWith=function(start,s)
 {
  return Strings.StartsWith(s,start)?{
   $:1,
   $0:Slice.string(s,{
    $:1,
    $0:start.length
   },null)
  }:null;
 };
 String.skipLastLine=function()
 {
  SC$1.$cctor();
  return SC$1.skipLastLine;
 };
 String.indentStr=function(i)
 {
  function f(s)
  {
   return String.indent(i,s);
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
 String.unindentStr=function()
 {
  SC$1.$cctor();
  return SC$1.unindentStr;
 };
 String.indent=function(n,s)
 {
  var x,x$1;
  x=Strings.SplitChars(s,["\n"],0);
  return Seq$1.map((x$1=Strings.replicate(n," "),function(y)
  {
   return x$1+y;
  }),x);
 };
 String.unindent=function(s)
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
 String.skipFirstLine=function(txt)
 {
  var i;
  i=txt.indexOf("\n");
  return i<0?"":Slice.string(txt,{
   $:1,
   $0:i+1
  },null);
 };
 String.append=function(a,b)
 {
  return a+b;
 };
 String.right=function(n,s)
 {
  return Library["String.Right"](s,n);
 };
 String.left=function(n,s)
 {
  return Library["String.Left"](s,n);
 };
 String.trim=function(s)
 {
  return Strings.Trim(s);
 };
 String.contains=function(sub,whole)
 {
  return whole.indexOf(sub)!=-1;
 };
 String.delimitedO=function(op,cl,txt)
 {
  var o,$1,bef,o$1,$2;
  o=String.splitInTwoO(op,txt);
  return o==null?null:($1=o.$0,(bef=$1[0],(o$1=String.splitInTwoO(cl,$1[1]),o$1==null?null:{
   $:1,
   $0:($2=o$1.$0,[bef,$2[0],$2[1]])
  })));
 };
 String.splitInTwoO=function(spl,txt)
 {
  var i;
  i=txt.indexOf(spl);
  return i===-1?null:{
   $:1,
   $0:[Library["String.Left"](txt,i),txt.substring(i+spl.length)]
  };
 };
 String.splitByChar=function(c,s)
 {
  return Strings.SplitChars(s,[c],0);
 };
 ParseO.Guid=function()
 {
  SC$1.$cctor();
  return SC$1["|Guid|_|"];
 };
 ParseO.Double=function()
 {
  SC$1.$cctor();
  return SC$1["|Double|_|"];
 };
 ParseO.Single=function()
 {
  SC$1.$cctor();
  return SC$1["|Single|_|"];
 };
 ParseO.Int64=function()
 {
  SC$1.$cctor();
  return SC$1["|Int64|_|"];
 };
 ParseO.Int=function()
 {
  SC$1.$cctor();
  return SC$1["|Int|_|"];
 };
 ParseO.Date=function()
 {
  SC$1.$cctor();
  return SC$1["|Date|_|"];
 };
 ParseO.parseGuidO=function()
 {
  SC$1.$cctor();
  return SC$1.parseGuidO;
 };
 ParseO.parseDoubleO=function()
 {
  SC$1.$cctor();
  return SC$1.parseDoubleO;
 };
 ParseO.parseSingleO=function()
 {
  SC$1.$cctor();
  return SC$1.parseSingleO;
 };
 ParseO.parseInt64O=function()
 {
  SC$1.$cctor();
  return SC$1.parseInt64O;
 };
 ParseO.parseIntO=function()
 {
  SC$1.$cctor();
  return SC$1.parseIntO;
 };
 ParseO.parseDateO=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO;
 };
 ParseO.parseDateO2=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO2;
 };
 ParseO.tryParseWith=function(tryParseFunc)
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
 Library["String.get_toUnderscore"]=function(_this,u)
 {
  return Arrays.ofSeq(Seq$1.collect(Global.id,Seq$1.mapi(function(i,c)
  {
   return i>0&&Char.IsUpper(c)?List.ofArray(["_",c]):List.ofArray([c]);
  },_this))).join("");
 };
 Library["String.Right"]=function(_this,n)
 {
  var a,b;
  return Library["String.Substring2"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);
 };
 Library["String.Left"]=function(_this,n)
 {
  return n<0?Library["String.Substring2"](_this,0,_this.length+n):Library["String.Substring2"](_this,0,n);
 };
 Library["String.Substring2"]=function(_this,from,n)
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
 Library.delayedVar=function(delay,_var)
 {
  var delayedV,x;
  delayedV=Var$1.Create$1(_var.Get());
  x=_var.get_View();
  View.Sink(Library.delayed(delay,function(a)
  {
   delayedV.Set(a);
  }),x);
  return delayedV;
 };
 Library.delayed=function(delay,doF)
 {
  function g()
  {
   return Concurrency.Return(null);
  }
  return Library.delayedA(delay,function(x)
  {
   return g(doF(x));
  });
 };
 Library.delayedA=function(delay,doF)
 {
  var cancelTokenO;
  cancelTokenO=null;
  return function(parm)
  {
   var b;
   cancelTokenO==null?void 0:cancelTokenO.$0.Cancel$1();
   cancelTokenO={
    $:1,
    $0:new CancellationTokenSource.New()
   };
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(delay),function()
    {
     return Concurrency.Bind(doF(parm),function()
     {
      return Concurrency.Return(null);
     });
    });
   })),{
    $:1,
    $0:cancelTokenO.$0
   });
  };
 };
 Library.print=function(v)
 {
  if(typeof v=="string")
   ((function($1)
   {
    return function($2)
    {
     return $1(Utils.toSafe($2));
    };
   }(function(s)
   {
    console.log(s);
   }))(v));
  else
   ((function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(function(s)
   {
    console.log(s);
   }))(v));
 };
 Library.Error=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 State=Covid.State=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,State);
 Function=Covid.Function=Runtime.Class({
  Equals:function(b)
  {
   return b instanceof Function&&this.get_Id()===b.get_Id();
  },
  GetHashCode:function()
  {
   return Unchecked.Hash(this.get_Id());
  },
  get_F:function()
  {
   return this.$1;
  },
  get_Id:function()
  {
   return this.$0;
  }
 },null,Function);
 Covid.main=function()
 {
  var x,a;
  function a$1(date,values,totalO)
  {
   return Doc.Element("tr",[],List.ofSeq(Seq$1.delay(function()
   {
    return Seq$1.append([Doc.Element("th",[],[Doc.TextNode((new Global.Date(date)).toLocaleDateString())])],Seq$1.delay(function()
    {
     return Seq$1.append(Seq$1.map(function(v)
     {
      var o,o$1;
      return Doc.Element("td",[Covid.alignRight()],[Doc.TextNode((o=(o$1=v[1],o$1==null?null:{
       $:1,
       $0:Covid.thousands(o$1.$0)
      }),o==null?"":o.$0))]);
     },values),Seq$1.delay(function()
     {
      return totalO==null?[]:[Doc.Element("th",[Covid.alignRight()],[Doc.TextNode(Covid.thousands(totalO.$0))])];
     }));
    }));
   })));
  }
  x=Doc.Element("div",[AttrModule.Class("xcontainer")],[Doc.Element("h1",[],[Doc.TextNode("Covid Statistics")]),Doc.Element("div",[],[Doc.TextNode("States: "),Doc.Input([AttrProxy.Create("style","width: 70%")],Covid.statesV()),Doc.Button("Reorder",[],function()
  {
   Covid.reorderStates();
  }),Doc.SelectOptional([],"Add State",function(t)
  {
   return t[0];
  },Covid.statesCodes(),Covid.toggleSt())]),Doc.Element("div",[],[Doc.TextNode("Data: "),Doc.Select([],Covid.fname,Covid.funcs(),Covid.functionV())]),Doc.Element("table",[AttrModule.Class("table table-sm")],[Doc.Element("tr",[],[Doc.Element("th",[],[Doc.TextNode("Date")]),Doc.Convert(function(col)
  {
   return Doc.Element("th",[Covid.alignRight()],[Doc.TextNode(col)]);
  },Covid.columnsW())]),Doc.Convert(function($1)
  {
   return a$1($1[0],$1[1],$1[2]);
  },Covid.rowsW())]),Doc.Verbatim("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\"> ")]);
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 Covid.alignRight=function()
 {
  return AttrModule.Style("text-align","right");
 };
 Covid.reorderStates=function()
 {
  View.Get(function(days)
  {
   var a;
   function m(st,a$1)
   {
    return st.get_Id();
   }
   a=Strings.concat(" ",Seq$1.map(function($1)
   {
    return m($1[0],$1[1]);
   },Seq$1.sortByDescending(function(t)
   {
    return t[1];
   },(Seq$1.maxBy(function($1)
   {
    return Global.id($1[0],$1[1],$1[2]);
   },days))[1])));
   Covid.statesV().Set(a);
  },Covid.rowsW());
 };
 Covid.rowsW=function()
 {
  SC$1.$cctor();
  return SC$1.rowsW;
 };
 Covid.functionV=function()
 {
  SC$1.$cctor();
  return SC$1.functionV;
 };
 Covid.funcs=function()
 {
  SC$1.$cctor();
  return SC$1.funcs;
 };
 Covid.fname=function(a)
 {
  return a.$0;
 };
 Covid.yearly=function(data,d,v)
 {
  return 52*Covid.weekly(data,d,v);
 };
 Covid.monthly=function(data,d,v)
 {
  return Covid.deathsSince(30,data,d,v);
 };
 Covid.weekly=function(data,d,v)
 {
  return Covid.deathsSince(7,data,d,v);
 };
 Covid.daily=function(data,d,v)
 {
  return Covid.deathsSince(1,data,d,v);
 };
 Covid.deathsSince=function(n,data,d,v)
 {
  return v-Covid.getPrior(-n,data,d);
 };
 Covid.getPrior=function(n,data,d)
 {
  var o;
  o=Map.TryFind(d+n*86400000,data);
  return o==null?0:o.$0;
 };
 Covid.thousands=function(n)
 {
  return n<0?"-"+function(acc,a)
  {
   var x;
   while(true)
    if(a==="")
     return acc;
    else
     {
      x=a;
      acc=Library["String.Right"](x,3)+(acc===""?"":","+acc);
      a=Library["String.Left"](x,-3);
     }
  }("",Global.String(n<0?-n:n)):function(acc,a)
  {
   var x;
   while(true)
    if(a==="")
     return acc;
    else
     {
      x=a;
      acc=Library["String.Right"](x,3)+(acc===""?"":","+acc);
      a=Library["String.Left"](x,-3);
     }
  }("",Global.String(n<0?-n:n));
 };
 Covid.columnsW=function()
 {
  SC$1.$cctor();
  return SC$1.columnsW;
 };
 Covid.totalizeW=function()
 {
  SC$1.$cctor();
  return SC$1.totalizeW;
 };
 Covid.statesW=function()
 {
  SC$1.$cctor();
  return SC$1.statesW;
 };
 Covid.delayedV=function()
 {
  SC$1.$cctor();
  return SC$1.delayedV;
 };
 Covid.statesV=function()
 {
  SC$1.$cctor();
  return SC$1.statesV;
 };
 Covid.toggleSt=function()
 {
  SC$1.$cctor();
  return SC$1.toggleSt;
 };
 Covid.ahora=function()
 {
  SC$1.$cctor();
  return SC$1.ahora;
 };
 Covid.printDeaths=function(st)
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Covid.deathsA(st),function(a)
   {
    Seq$1.iter(function(kvp)
    {
     (((Runtime.Curried3(function($1,$2,$3)
     {
      return $1(Utils.prettyPrint($2)+" "+Global.String($3));
     }))(function(s)
     {
      console.log(s);
     }))(kvp.K))(kvp.V);
    },a);
    return Concurrency.Zero();
   });
  })),null);
 };
 Covid.deaths=function(st)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(Covid.deathsA(st),function(a)
   {
    return Concurrency.Return([st,a]);
   });
  });
 };
 Covid.deathsA=function(st)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(Covid.getStateDaily(st),function(a)
   {
    return Concurrency.Return(new FSharpMap.New(Seq$1.sort(Arrays.choose(function(d)
    {
     var o,x,prop,v,prop$1,opt,v$1,prop$2,opt$1,v$2,prop$3,opt$2;
     o=(x=(prop="death",prop in d?{
      $:1,
      $0:d[prop]
     }:null),x==null?null:{
      $:1,
      $0:1*x.$0
     });
     return o==null?null:{
      $:1,
      $0:[(new Global.Date((v=(prop$1="date",prop$1 in d?{
       $:1,
       $0:d[prop$1]
      }:null),(opt=v==null?null:{
       $:1,
       $0:1*v.$0
      },opt==null?null:opt.$0))/10000>>0,((v$1=(prop$2="date",prop$2 in d?{
       $:1,
       $0:d[prop$2]
      }:null),(opt$1=v$1==null?null:{
       $:1,
       $0:1*v$1.$0
      },opt$1==null?null:opt$1.$0))/100>>0)%100-1,(v$2=(prop$3="date",prop$3 in d?{
       $:1,
       $0:d[prop$3]
      }:null),(opt$2=v$2==null?null:{
       $:1,
       $0:1*v$2.$0
      },opt$2==null?null:opt$2.$0))%100)).getTime(),o.$0*1]
     };
    },a))));
   });
  });
 };
 Covid.getStateDaily=function(a)
 {
  var st;
  st=a.$0;
  return TxtRuntime.AsyncMap(IO.asyncReadTextAtRuntime(false,"D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src","","JSON","",Strings.Replace("https://covidtracking.com/api/v1/states/TX/daily.json",st==="US"?"/states/TX/":"/TX/","/"+st+"/")),function(t)
  {
   return Unchecked.Equals(typeof t,"string")?JSON.parse(t):t;
  });
 };
 Covid.CovidStatesDailyUrl=function()
 {
  SC$1.$cctor();
  return SC$1.CovidStatesDailyUrl;
 };
 Covid.CovidStatesCurrentUrl=function()
 {
  SC$1.$cctor();
  return SC$1.CovidStatesCurrentUrl;
 };
 Covid.getStatesPop=function()
 {
  SC$1.$cctor();
  return SC$1.getStatesPop;
 };
 Covid.getStatesPopM=function(sts)
 {
  var x;
  return Seq$1.sum(new FSharpSet.New$1(BalancedTree.OfSeq(Seq$1.map(Covid.getStatePop,Set.Filter((x=new State({
   $:0,
   $0:"US"
  }),function(y)
  {
   return!Unchecked.Equals(x,y);
  }),sts)))));
 };
 Covid.getStatePop=function(st)
 {
  var o;
  o=Map.TryFind(st,Covid.statesPop2019());
  return o==null?100000:o.$0;
 };
 Covid.splitStates=function(sts)
 {
  return Arrays.map(function(a)
  {
   return new State({
    $:0,
    $0:a
   });
  },Strings.SplitChars(Strings.Trim(sts),[" "],0));
 };
 Covid.statesCodes=function()
 {
  SC$1.$cctor();
  return SC$1.statesCodes;
 };
 Covid.statesPop2019=function()
 {
  SC$1.$cctor();
  return SC$1.statesPop2019;
 };
 SC$1.$cctor=function()
 {
  var f,g,p,cache,getOrAdd,x,f$1,f$2,p$1,x$1,g$1,$1,$2,b;
  SC$1.$cctor=Global.ignore;
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
  function f$3(s)
  {
   return String.splitByChar("\n",s);
  }
  function g$3(s)
  {
   var a$1,b$1;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$1=0,(b$1=Arrays.length(s)-2,Unchecked.Compare(a$1,b$1)===1?a$1:b$1))
   });
  }
  function g$4(s)
  {
   return Strings.concat("\n",s);
  }
  function f$4(s)
  {
   return s+"T00:00:00";
  }
  function checkO(v)
  {
   var res;
   res=0;
   return cache.TryGetValue(v,{
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
  }
  function store(v,res)
  {
   cache.set_Item(v,res);
   return res;
  }
  function getOrAdd$1(p$2,f$6)
  {
   var o;
   o=checkO(p$2);
   return o==null?store(p$2,f$6(p$2)):o.$0;
  }
  function f$5(x$2,y)
  {
   return x$2>y;
  }
  function a(states,totalize)
  {
   return Seq$1.delay(function()
   {
    return Seq$1.append(Seq$1.map(function(st)
    {
     return st.get_Id();
    },states),Seq$1.delay(function()
    {
     return totalize?["Total"]:[];
    }));
   });
  }
  SC$1.rtn=function(v)
  {
   return[v];
  };
  SC$1.unindentStr=function(x$2)
  {
   return g$2(String.unindent(x$2));
  };
  SC$1.skipLastLine=(f=function(x$2)
  {
   return g$3(f$3(x$2));
  },function(x$2)
  {
   return g$4(f(x$2));
  });
  SC$1.parseDateO2=(g=ParseO.tryParseWith(function(a$1)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a$1),m!=null&&m.$==1&&(o=m.$0,true)),o];
  }),function(x$2)
  {
   return g(f$4(x$2));
  });
  SC$1.parseDateO=ParseO.tryParseWith(function(a$1)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a$1),m!=null&&m.$==1&&(o=m.$0,true)),o];
  });
  SC$1.parseIntO=ParseO.tryParseWith(function(a$1)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt32(a$1,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o];
  });
  SC$1.parseInt64O=ParseO.tryParseWith(function(a$1)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt64(a$1,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o];
  });
  SC$1.parseSingleO=ParseO.tryParseWith(function(a$1)
  {
   var o,$3;
   o=0;
   return[($3=Global.Number(a$1),Global.isNaN($3)?false:(o=$3,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith(function(a$1)
  {
   var o,$3;
   o=0;
   return[($3=Global.Number(a$1),Global.isNaN($3)?false:(o=$3,true)),o];
  });
  SC$1.parseGuidO=ParseO.tryParseWith(function(a$1)
  {
   var o;
   o=null;
   return[Guid.TryParse(a$1,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o];
  });
  SC$1["|Date|_|"]=ParseO.parseDateO();
  SC$1["|Int|_|"]=ParseO.parseIntO();
  SC$1["|Int64|_|"]=ParseO.parseInt64O();
  SC$1["|Single|_|"]=ParseO.parseSingleO();
  SC$1["|Double|_|"]=ParseO.parseDoubleO();
  SC$1["|Guid|_|"]=ParseO.parseGuidO();
  SC$1.statesPop2019=new FSharpMap.New(List.ofArray([[new State({
   $:0,
   $0:"US"
  }),328239523],[new State({
   $:0,
   $0:"AL"
  }),4903185],[new State({
   $:0,
   $0:"AK"
  }),731545],[new State({
   $:0,
   $0:"AZ"
  }),7278717],[new State({
   $:0,
   $0:"AR"
  }),3017804],[new State({
   $:0,
   $0:"CA"
  }),39512223],[new State({
   $:0,
   $0:"CO"
  }),5758736],[new State({
   $:0,
   $0:"CT"
  }),3565287],[new State({
   $:0,
   $0:"DE"
  }),973764],[new State({
   $:0,
   $0:"DC"
  }),705749],[new State({
   $:0,
   $0:"FL"
  }),21477737],[new State({
   $:0,
   $0:"GA"
  }),10617423],[new State({
   $:0,
   $0:"HI"
  }),1415872],[new State({
   $:0,
   $0:"ID"
  }),1787065],[new State({
   $:0,
   $0:"IL"
  }),12671821],[new State({
   $:0,
   $0:"IN"
  }),6732219],[new State({
   $:0,
   $0:"IA"
  }),3155070],[new State({
   $:0,
   $0:"KS"
  }),2913314],[new State({
   $:0,
   $0:"KY"
  }),4467673],[new State({
   $:0,
   $0:"LA"
  }),4648794],[new State({
   $:0,
   $0:"ME"
  }),1344212],[new State({
   $:0,
   $0:"MD"
  }),6045680],[new State({
   $:0,
   $0:"MA"
  }),6892503],[new State({
   $:0,
   $0:"MI"
  }),9986857],[new State({
   $:0,
   $0:"MN"
  }),5639632],[new State({
   $:0,
   $0:"MS"
  }),2976149],[new State({
   $:0,
   $0:"MO"
  }),6137428],[new State({
   $:0,
   $0:"MT"
  }),1068778],[new State({
   $:0,
   $0:"NE"
  }),1934408],[new State({
   $:0,
   $0:"NV"
  }),3080156],[new State({
   $:0,
   $0:"NH"
  }),1359711],[new State({
   $:0,
   $0:"NJ"
  }),8882190],[new State({
   $:0,
   $0:"NM"
  }),2096829],[new State({
   $:0,
   $0:"NY"
  }),19453561],[new State({
   $:0,
   $0:"NC"
  }),10488084],[new State({
   $:0,
   $0:"ND"
  }),762062],[new State({
   $:0,
   $0:"OH"
  }),11689100],[new State({
   $:0,
   $0:"OK"
  }),3956971],[new State({
   $:0,
   $0:"OR"
  }),4217737],[new State({
   $:0,
   $0:"PA"
  }),12801989],[new State({
   $:0,
   $0:"RI"
  }),1059361],[new State({
   $:0,
   $0:"SC"
  }),5148714],[new State({
   $:0,
   $0:"SD"
  }),884659],[new State({
   $:0,
   $0:"TN"
  }),6829174],[new State({
   $:0,
   $0:"TX"
  }),28995881],[new State({
   $:0,
   $0:"UT"
  }),3205958],[new State({
   $:0,
   $0:"VT"
  }),623989],[new State({
   $:0,
   $0:"VA"
  }),8535519],[new State({
   $:0,
   $0:"WA"
  }),7614893],[new State({
   $:0,
   $0:"WV"
  }),1792147],[new State({
   $:0,
   $0:"WI"
  }),5822434],[new State({
   $:0,
   $0:"WY"
  }),578759],[new State({
   $:0,
   $0:"PR"
  }),3193694]]));
  SC$1.statesCodes=List.ofArray([["Alabama",new State({
   $:0,
   $0:"AL"
  })],["Alaska",new State({
   $:0,
   $0:"AK"
  })],["Arizona",new State({
   $:0,
   $0:"AZ"
  })],["Arkansas",new State({
   $:0,
   $0:"AR"
  })],["California",new State({
   $:0,
   $0:"CA"
  })],["Colorado",new State({
   $:0,
   $0:"CO"
  })],["Connecticut",new State({
   $:0,
   $0:"CT"
  })],["Delaware",new State({
   $:0,
   $0:"DE"
  })],["Florida",new State({
   $:0,
   $0:"FL"
  })],["Georgia",new State({
   $:0,
   $0:"GA"
  })],["Hawaii",new State({
   $:0,
   $0:"HI"
  })],["Idaho",new State({
   $:0,
   $0:"ID"
  })],["Illinois",new State({
   $:0,
   $0:"IL"
  })],["Indiana",new State({
   $:0,
   $0:"IN"
  })],["Iowa",new State({
   $:0,
   $0:"IA"
  })],["Kansas",new State({
   $:0,
   $0:"KS"
  })],["Kentucky",new State({
   $:0,
   $0:"KY"
  })],["Louisiana",new State({
   $:0,
   $0:"LA"
  })],["Maine",new State({
   $:0,
   $0:"ME"
  })],["Maryland",new State({
   $:0,
   $0:"MD"
  })],["Massachusetts",new State({
   $:0,
   $0:"MA"
  })],["Michigan",new State({
   $:0,
   $0:"MI"
  })],["Minnesota",new State({
   $:0,
   $0:"MN"
  })],["Mississippi",new State({
   $:0,
   $0:"MS"
  })],["Missouri",new State({
   $:0,
   $0:"MO"
  })],["Montana",new State({
   $:0,
   $0:"MT"
  })],["Nebraska",new State({
   $:0,
   $0:"NE"
  })],["Nevada",new State({
   $:0,
   $0:"NV"
  })],["New Hampshire",new State({
   $:0,
   $0:"NH"
  })],["New Jersey",new State({
   $:0,
   $0:"NJ"
  })],["New Mexico",new State({
   $:0,
   $0:"NM"
  })],["New York",new State({
   $:0,
   $0:"NY"
  })],["North Carolina",new State({
   $:0,
   $0:"NC"
  })],["North Dakota",new State({
   $:0,
   $0:"ND"
  })],["Ohio",new State({
   $:0,
   $0:"OH"
  })],["Oklahoma",new State({
   $:0,
   $0:"OK"
  })],["Oregon",new State({
   $:0,
   $0:"OR"
  })],["Pennsylvania",new State({
   $:0,
   $0:"PA"
  })],["Rhode Island",new State({
   $:0,
   $0:"RI"
  })],["South Carolina",new State({
   $:0,
   $0:"SC"
  })],["South Dakota",new State({
   $:0,
   $0:"SD"
  })],["Tennessee",new State({
   $:0,
   $0:"TN"
  })],["Texas",new State({
   $:0,
   $0:"TX"
  })],["Utah",new State({
   $:0,
   $0:"UT"
  })],["Vermont",new State({
   $:0,
   $0:"VT"
  })],["Virginia",new State({
   $:0,
   $0:"VA"
  })],["Washington",new State({
   $:0,
   $0:"WA"
  })],["West Virginia",new State({
   $:0,
   $0:"WV"
  })],["Wisconsin",new State({
   $:0,
   $0:"WI"
  })],["Wyoming",new State({
   $:0,
   $0:"WY"
  })],["American Samoa",new State({
   $:0,
   $0:"AS"
  })],["District of Columbia",new State({
   $:0,
   $0:"DC"
  })],["Federated States of Micronesia",new State({
   $:0,
   $0:"FM"
  })],["Guam",new State({
   $:0,
   $0:"GU"
  })],["Marshall Islands",new State({
   $:0,
   $0:"MH"
  })],["Northern Mariana Islands",new State({
   $:0,
   $0:"MP"
  })],["Palau",new State({
   $:0,
   $0:"PW"
  })],["Puerto Rico",new State({
   $:0,
   $0:"PR"
  })],["Virgin Islands",new State({
   $:0,
   $0:"VI"
  })]]);
  SC$1.getStatesPop=(p=(cache=new Dictionary.New$5(),[[checkO,function($3)
  {
   return function($4)
   {
    return getOrAdd$1($3,$4);
   };
  }],function()
  {
   cache.Clear();
  }]),(getOrAdd=p[0][1],[function(p$2)
  {
   return(getOrAdd(p$2))(Covid.getStatesPopM);
  },p[1]]))[0];
  SC$1.CovidStatesCurrentUrl="https://covidtracking.com/api/v1/states/TX/current.json";
  SC$1.CovidStatesDailyUrl="https://covidtracking.com/api/v1/states/TX/daily.json";
  SC$1.ahora=Date.now();
  SC$1.toggleSt=Var$1.Create$1(null);
  SC$1.statesV=Var$1.Create$1("NJ CT NY MA MI RI LA PA IL IN GA CO WA FL MN NV AL NM NC MO WY TX OR ND MT AR SD AK US");
  SC$1.delayedV=Library.delayedVar(1000,Covid.statesV());
  SC$1.statesW=View.Map(Covid.splitStates,Covid.delayedV().get_View());
  SC$1.totalizeW=(x=Covid.statesW(),View.Map((f$1=(f$2=(p$1=(x$1=new State({
   $:0,
   $0:"US"
  }),function(y)
  {
   return!Unchecked.Equals(x$1,y);
  }),function(s)
  {
   return Seq$1.filter(p$1,s);
  }),function(x$2)
  {
   return Seq$1.length(f$2(x$2));
  }),(g$1=function(b$1)
  {
   return f$5(b$1,1);
  },function(x$2)
  {
   return g$1(f$1(x$2));
  })),x));
  SC$1.columnsW=($1=Covid.statesW(),($2=Covid.totalizeW(),(((Runtime.Curried3(View.Map2))(a))($1))($2)));
  View.Sink(function(a$1)
  {
   var st;
   if(a$1!=null&&a$1.$==1)
    {
     st=a$1.$0[1];
     View.Get(function(sts)
     {
      var a$2;
      a$2=Strings.concat(" ",Seq$1.map(function(st$1)
      {
       return st$1.get_Id();
      },Seq$1.contains(st,sts)?Seq$1.filter(function(y)
      {
       return!Unchecked.Equals(st,y);
      },sts):Seq$1.append(sts,[st])));
      Covid.statesV().Set(a$2);
      Covid.toggleSt().Set(null);
     },Covid.statesW());
    }
  },Covid.toggleSt().get_View());
  SC$1.funcs=List.ofArray([new Function({
   $:0,
   $0:"deaths per 100K",
   $1:Runtime.Curried(function(data,d,v,getPop)
   {
    return Covid.yearly(data,d,v)*100000/getPop()>>0;
   },4)
  }),new Function({
   $:0,
   $0:"total deaths",
   $1:Runtime.Curried(function($3,$4,v,$5)
   {
    return v/1>>0;
   },4)
  }),new Function({
   $:0,
   $0:"day deaths",
   $1:Runtime.Curried(function(data,d,v,$3)
   {
    return Covid.daily(data,d,v)/1>>0;
   },4)
  }),new Function({
   $:0,
   $0:"week deaths",
   $1:Runtime.Curried(function(data,d,v,$3)
   {
    return Covid.weekly(data,d,v)/1>>0;
   },4)
  }),new Function({
   $:0,
   $0:"30 days deaths",
   $1:Runtime.Curried(function(data,d,v,$3)
   {
    return Covid.monthly(data,d,v)/1>>0;
   },4)
  }),new Function({
   $:0,
   $0:"7 days yearly",
   $1:Runtime.Curried(function(data,d,v,$3)
   {
    return Covid.yearly(data,d,v)/1>>0;
   },4)
  }),new Function({
   $:0,
   $0:"population",
   $1:Runtime.Curried(function($3,$4,$5,getPop)
   {
    return getPop()/1>>0;
   },4)
  })]);
  SC$1.functionV=Var$1.Create$1(Seq$1.head(Covid.funcs()));
  SC$1.rowsW=(b=View.get_Do(),View.Bind(function(a$1)
  {
   return View.Bind(function(a$2)
   {
    return View.Bind(function(a$3)
    {
     return View.Bind(function(a$4)
     {
      var totals,totals2;
      function getTot()
      {
       return(Covid.getStatesPop())(new FSharpSet.New(a$1));
      }
      function f$6(all,t)
      {
       var st,data;
       function f$7(m$2,kvp)
       {
        var text,newV,x$2,v;
        text=((((a$4.get_F())(data))(kvp.K))(kvp.V))(function()
        {
         return Covid.getStatePop(st);
        });
        newV=(x$2=Map.TryFind(kvp.K,m$2),(v=new FSharpMap.New([]),x$2==null?v:x$2.$0)).Add(st,[kvp.V,text]);
        return m$2.Add(kvp.K,newV);
       }
       st=t[0];
       data=t[1];
       return(((Runtime.Curried3(Seq$1.fold))(f$7))(all))(data);
      }
      function m(date,value,a$5)
      {
       return[date,value];
      }
      function m$1(date,value,row)
      {
       return[date,Arrays.ofSeq(Seq$1.delay(function()
       {
        return Seq$1.map(function(st)
        {
         var o;
         return[st,(o=Map.TryFind(st,row),o==null?null:{
          $:1,
          $0:o.$0[1]
         })];
        },a$1);
       })),a$3?{
        $:1,
        $0:((((a$4.get_F())(totals2))(date))(value))(getTot)
       }:null];
      }
      totals=Seq$1.map(function(dayvp)
      {
       var total;
       total=Seq$1.sum(Seq$1.choose(function(kvp)
       {
        return kvp.K.get_Id()==="US"?null:{
         $:1,
         $0:kvp.V[0]
        };
       },dayvp.V));
       return[dayvp.K,total,dayvp.V];
      },(((Runtime.Curried3(Seq$1.fold))(f$6))(new FSharpMap.New([])))(a$2));
      totals2=new FSharpMap.New(Seq$1.map(function($3)
      {
       return m($3[0],$3[1],$3[2]);
      },totals));
      return View.Const(Seq$1.sortDescending(Seq$1.map(function($3)
      {
       return m$1($3[0],$3[1],$3[2]);
      },totals)));
     },Covid.functionV().get_View());
    },Covid.totalizeW());
   },View.MapAsync(Global.id,View.Const(Concurrency.Parallel(Arrays.map(Covid.deaths,a$1)))));
  },Covid.statesW()));
 };
 Runtime.OnLoad(function()
 {
  Covid.main();
 });
}());

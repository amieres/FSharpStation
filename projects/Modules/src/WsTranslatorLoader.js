(function(Global)
{
 "use strict";
 var FsRoot,Library,String,ParseO,LibraryJS,Pojo,WebSharper,Obj,WsTranslatorLoader,Dependency,WasmStatus,Remoting,IMessagingO,ReturnQueue,CustomXhrProvider,WWorker,WasmLoad,Require,Rpc,UI,SC$1,WsTranslatorLoader_GeneratedPrintf,Strings,List,Seq,Slice,Operators,Char,Unchecked,Utils,console,IntelliFactory,Runtime,Date,Remoting$1,Concurrency,WsTranslator,Arrays,Enumerator,UI$1,Client,Templates,Doc,View,AttrProxy,AttrModule,AjaxRemotingProvider,Log,Math,DateUtil,Numeric,System,Guid,Var$1,Collections,Dictionary,ListModel;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Pojo=LibraryJS.Pojo=LibraryJS.Pojo||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 WsTranslatorLoader=LibraryJS.WsTranslatorLoader=LibraryJS.WsTranslatorLoader||{};
 Dependency=WsTranslatorLoader.Dependency=WsTranslatorLoader.Dependency||{};
 WasmStatus=WsTranslatorLoader.WasmStatus=WsTranslatorLoader.WasmStatus||{};
 Remoting=WsTranslatorLoader.Remoting=WsTranslatorLoader.Remoting||{};
 IMessagingO=Remoting.IMessagingO=Remoting.IMessagingO||{};
 ReturnQueue=Remoting.ReturnQueue=Remoting.ReturnQueue||{};
 CustomXhrProvider=Remoting.CustomXhrProvider=Remoting.CustomXhrProvider||{};
 WWorker=WsTranslatorLoader.WWorker=WsTranslatorLoader.WWorker||{};
 WasmLoad=WsTranslatorLoader.WasmLoad=WsTranslatorLoader.WasmLoad||{};
 Require=WasmLoad.Require=WasmLoad.Require||{};
 Rpc=WsTranslatorLoader.Rpc=WsTranslatorLoader.Rpc||{};
 UI=WsTranslatorLoader.UI=WsTranslatorLoader.UI||{};
 SC$1=Global.StartupCode$WsTranslatorLoader$WsTranslatorLoader=Global.StartupCode$WsTranslatorLoader$WsTranslatorLoader||{};
 WsTranslatorLoader_GeneratedPrintf=Global.WsTranslatorLoader_GeneratedPrintf=Global.WsTranslatorLoader_GeneratedPrintf||{};
 Strings=WebSharper&&WebSharper.Strings;
 List=WebSharper&&WebSharper.List;
 Seq=WebSharper&&WebSharper.Seq;
 Slice=WebSharper&&WebSharper.Slice;
 Operators=WebSharper&&WebSharper.Operators;
 Char=WebSharper&&WebSharper.Char;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Utils=WebSharper&&WebSharper.Utils;
 console=Global.console;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Date=Global.Date;
 Remoting$1=WebSharper&&WebSharper.Remoting;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 WsTranslator=FsRoot&&FsRoot.WsTranslator;
 Arrays=WebSharper&&WebSharper.Arrays;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 UI$1=WebSharper&&WebSharper.UI;
 Client=UI$1&&UI$1.Client;
 Templates=Client&&Client.Templates;
 Doc=UI$1&&UI$1.Doc;
 View=UI$1&&UI$1.View;
 AttrProxy=UI$1&&UI$1.AttrProxy;
 AttrModule=UI$1&&UI$1.AttrModule;
 AjaxRemotingProvider=Remoting$1&&Remoting$1.AjaxRemotingProvider;
 Log=Library&&Library.Log;
 Math=Global.Math;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 System=Global.System;
 Guid=System&&System.Guid;
 Var$1=UI$1&&UI$1.Var$1;
 Collections=WebSharper&&WebSharper.Collections;
 Dictionary=Collections&&Collections.Dictionary;
 ListModel=UI$1&&UI$1.ListModel;
 String.thousands=function(n)
 {
  var v,c,r,s;
  v=(c=n<0?-n:n,Global.String(c));
  r=v.length%3;
  s=r===0?3:r;
  return n<0?"-"+Strings.concat(",",List.ofSeq(Seq.delay(function()
  {
   return Seq.append([Slice.string(v,{
    $:1,
    $0:0
   },{
    $:1,
    $0:s-1
   })],Seq.delay(function()
   {
    return Seq.map(function(i)
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
  }))):Strings.concat(",",List.ofSeq(Seq.delay(function()
  {
   return Seq.append([Slice.string(v,{
    $:1,
    $0:0
   },{
    $:1,
    $0:s-1
   })],Seq.delay(function()
   {
    return Seq.map(function(i)
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
 String.WhiteSpace=function(s)
 {
  function g(v)
  {
   return!v;
  }
  return Seq.exists(function(x)
  {
   return g(Char.IsWhiteSpace(x));
  },s)?null:{
   $:1,
   $0:null
  };
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
  return Seq.map((x$1=Strings.replicate(n," "),function(y)
  {
   return x$1+y;
  }),x);
 };
 String.unindent=function(s)
 {
  var lines,n,o,o$1;
  lines=Strings.SplitChars(s,["\n"],0);
  n=(o=Seq.tryFindIndex(function(y)
  {
   return" "!==y;
  },(o$1=Seq.tryFind(function(l)
  {
   return Strings.Trim(l)!=="";
  },lines),o$1==null?"":o$1.$0)),o==null?0:o.$0);
  return Seq.filter(function(s$1)
  {
   return!Strings.StartsWith(s$1,"# 1 ");
  },Seq.map(function(l)
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
 Library.print$1=function(v)
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
 Library.Error$1=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 Pojo.newPojoOpt=function(propOs)
 {
  function c(n,vO)
  {
   return vO==null?null:{
    $:1,
    $0:[n,vO.$0]
   };
  }
  return Pojo.newPojo(Seq.choose(function($1)
  {
   return c($1[0],$1[1]);
  },propOs));
 };
 Pojo.newPojo=function(props)
 {
  var pojo,f;
  function f$1(a,a$1)
  {
   return function(p)
   {
    return Pojo.addProp(a,a$1,p);
   };
  }
  function g(v)
  {
  }
  pojo={};
  Seq.iter((f=function(b)
  {
   return(function($1)
   {
    return f$1($1[0],$1[1]);
   }(b))(pojo);
  },function(x)
  {
   return g(f(x));
  }),props);
  return pojo;
 };
 Pojo.addProp=function(p,p$1,pojo)
 {
  pojo[p]=p$1;
  return pojo;
 };
 Dependency=WsTranslatorLoader.Dependency=Runtime.Class({
  set_D:function(v)
  {
   this.D=v;
  },
  get_D:function()
  {
   return this.D;
  }
 },Obj,Dependency);
 Dependency.New=Runtime.Ctor(function(def)
 {
  Obj.New.call(this);
  this.D=def;
 },Dependency);
 WasmStatus.WasmWorkerLoaded={
  $:4
 };
 WasmStatus.WasmWorkerLoading={
  $:3
 };
 WasmStatus.WasmLoaded={
  $:2
 };
 WasmStatus.WasmLoading={
  $:1
 };
 WasmStatus.WasmNotLoaded={
  $:0
 };
 IMessagingO.New=function(evalJS,runRpc,returnValue,returnExn,wprintfn)
 {
  return{
   evalJS:evalJS,
   runRpc:runRpc,
   returnValue:returnValue,
   returnExn:returnExn,
   wprintfn:wprintfn
  };
 };
 ReturnQueue.tryGet=function(md)
 {
  var o,arr,m,narr;
  o=ReturnQueue.tryGetS(md);
  return o==null?null:(arr=o.$0,(m=Seq.tryHead(arr),m!=null&&m.$==1?(narr=Slice.array(arr,{
   $:1,
   $0:1
  },null),(ReturnQueue.queues().Remove(md),ReturnQueue.queues().Add(md,narr),{
   $:1,
   $0:m.$0
  })):null));
 };
 ReturnQueue.add=function(md,fs)
 {
  var narr,m;
  narr=(m=ReturnQueue.tryGetS(md),m==null?[fs]:(ReturnQueue.queues().Remove(md),m.$0.concat([fs])));
  ReturnQueue.queues().Add(md,narr);
 };
 ReturnQueue.tryGetS=function(md)
 {
  return(ParseO.tryParseWith(function(a)
  {
   var o;
   o=null;
   return[ReturnQueue.queues().TryGetValue(a,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o];
  }))(md);
 };
 ReturnQueue.queues=function()
 {
  SC$1.$cctor();
  return SC$1.queues;
 };
 CustomXhrProvider=Remoting.CustomXhrProvider=Runtime.Class({
  Sync:function(url,headers,data)
  {
   return Operators.FailWith("CustomXhrProvider.Sync not suppported");
  },
  Async:function(url,headers,data,ok,err)
  {
   var md;
   md=Remoting.getHeaderRpc(headers);
   ReturnQueue.add(md,[ok,err]);
   try
   {
    ((Remoting.printfnLog("Timings",Runtime.Curried3(function($1,$2,$3)
    {
     return $1(Utils.toSafe($2)+" CustomXhrProvider: "+Utils.toSafe($3));
    })))(function(n)
    {
     return n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)+" "+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+"."+("00"+n.getMilliseconds()).slice(-3);
    }(new Global.Date(Date.now()))))(md);
    Remoting.callRunRpc(md,data);
   }
   catch(e)
   {
    Remoting.returnExnExn(md,e);
   }
  }
 },Obj,CustomXhrProvider);
 CustomXhrProvider.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },CustomXhrProvider);
 Remoting.installProvider=function()
 {
  Remoting$1.set_AjaxProvider(new CustomXhrProvider.New());
 };
 Remoting.printfnLog=function(channel,fmt)
 {
  return fmt(function(txt)
  {
   Remoting.logThis(channel,txt);
  });
 };
 Remoting.lt=function()
 {
  SC$1.$cctor();
  return SC$1.lt;
 };
 Remoting.re=function()
 {
  SC$1.$cctor();
  return SC$1.re;
 };
 Remoting.rv=function()
 {
  SC$1.$cctor();
  return SC$1.rv;
 };
 Remoting.evalJS0=function(id,js)
 {
  var r;
  try
  {
   r=Global["eval"](js);
   !r?Remoting.returnValue(id,null):Remoting.returnValue(id,(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(r));
  }
  catch(e)
  {
   Remoting.returnExn(id,(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(e));
  }
 };
 Remoting.logThis=function(channel,txt)
 {
  (Remoting.messaging().get_D().wprintfn(channel))(txt);
 };
 Remoting.returnExn=function(header,e)
 {
  Remoting.messaging().get_D().returnExn([header,e]);
 };
 Remoting.returnValue=function(header,data)
 {
  Remoting.messaging().get_D().returnValue([header,data]);
 };
 Remoting.callEvalJS=function(id,js)
 {
  Remoting.messaging().get_D().evalJS([id,js]);
 };
 Remoting.callRunRpc=function(header,data)
 {
  (Remoting.messaging().get_D().runRpc(header))(data);
 };
 Remoting.messaging=function()
 {
  SC$1.$cctor();
  return SC$1.messaging;
 };
 Remoting.returnExn0=function(md,e)
 {
  Remoting.returnExnExn(md,new Global.Error(e));
 };
 Remoting.returnExnExn=function(md,e)
 {
  var o,$1;
  o=ReturnQueue.tryGet(md);
  o==null?void 0:($1=o.$0,$1[0],$1[1](e));
 };
 Remoting.returnValue0=function(md,v)
 {
  var o,$1,ok;
  o=ReturnQueue.tryGet(md);
  o==null?void 0:($1=o.$0,ok=$1[0],$1[1],ok(v));
 };
 Remoting.originalProvider=function()
 {
  SC$1.$cctor();
  return SC$1.originalProvider;
 };
 Remoting.getHeaderRpc=function(headers)
 {
  return headers["x-websharper-rpc"];
 };
 WWorker.terminate=function()
 {
  var $1;
  if($1=WWorker.workerO(),$1!=null&&$1.$==1)
   {
    WWorker.workerO().$0.terminate();
    WWorker.set_workerO(null);
    ((WsTranslatorLoader.printfnLog())("WASM"))(function($2)
    {
     return $2("Worker terminated!");
    });
    WsTranslatorLoader.wasmStatusV().Set([WasmStatus.WasmNotLoaded,null]);
   }
  else
   ((WsTranslatorLoader.printfnLog())("WASM"))(function($2)
   {
    return $2("Worker is not present");
   });
 };
 WWorker.fromWorker=function(evt)
 {
  var m,v,s;
  m=evt.data;
  m.$==1?Remoting.returnExn0(m.$0,m.$1):m.$==2?(Remoting.messaging().get_D().wprintfn(m.$0))(m.$1):m.$==3?(v=m.$1,s=m.$0,!Unchecked.Equals(WsTranslatorLoader.wasmStatusV().Get(),[s,v])?WsTranslatorLoader.wasmStatusV().Set([s,v]):void 0):Remoting.returnValue0(m.$0,m.$1);
 };
 WWorker.receiveMessage=function(loadInThisThread,evt)
 {
  var m;
  m=evt.data;
  m.$==1?Remoting.callRunRpc(m.$0,m.$1):m.$==2?loadInThisThread(m.$0,m.$1,m.$2):Remoting.callEvalJS(m.$0,m.$1);
 };
 WWorker.workerO=function()
 {
  SC$1.$cctor();
  return SC$1.workerO;
 };
 WWorker.set_workerO=function($1)
 {
  SC$1.$cctor();
  SC$1.workerO=$1;
 };
 Require=WasmLoad.Require=Runtime.Class({},Obj,Require);
 Require.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Require);
 WasmLoad.loadWasmInWorker=function(publishPath,debug,opts)
 {
  var c,w;
  if(!self.document)
   ((WsTranslatorLoader.printfnLog())("WASM"))(function($1)
   {
    return $1("Already in a worker cannot load Wasm in another worker");
   });
  else
   if(!Unchecked.Equals(WsTranslatorLoader.wasmStatusV().Get(),[WasmStatus.WasmNotLoaded,null]))
    {
     (((c=WsTranslatorLoader.printfnLog(),function(a)
     {
      var c$1;
      c$1=c(a);
      return function(a$1)
      {
       var c$2;
       c$2=c$1(a$1);
       return function(t)
       {
        c$2([t[0],t[1]]);
       };
      };
     })("WASM"))(function($1)
     {
      return function($2)
      {
       return $1("Wasm is already "+("("+WsTranslatorLoader_GeneratedPrintf.p($2[0])+", "+WsTranslatorLoader_GeneratedPrintf.p$1($2[1])+")"));
      };
     }))(WsTranslatorLoader.wasmStatusV().Get());
    }
   else
    {
     WsTranslatorLoader.wasmStatusV().Set([WasmStatus.WasmLoading,{
      $:1,
      $0:publishPath
     }]);
     ((WsTranslatorLoader.printfnLog())("WASM"))(function($1)
     {
      return $1("Initiating WebWorker");
     });
     self.IntelliFactory.Runtime.ScriptPath=Runtime.CreateFuncWithArgs(function()
     {
      return WsTranslatorLoader.getId(publishPath)+"loadworker.js";
     });
     w=new Global.Worker(Runtime.ScriptPath("WsTranslatorLoader","WsTranslatorLoader.worker.js"));
     w.postMessage({
      $:2,
      $0:publishPath,
      $1:debug,
      $2:opts
     });
     w.onmessage=WWorker.fromWorker;
     WWorker.set_workerO({
      $:1,
      $0:w
     });
     Remoting.messaging().set_D(IMessagingO.New(function(t)
     {
      w.postMessage({
       $:0,
       $0:t[0],
       $1:t[1]
      });
     },function(h)
     {
      return function(d)
      {
       return w.postMessage({
        $:1,
        $0:h,
        $1:d
       });
      };
     },function(t)
     {
      Remoting.returnValue0(t[0],t[1]);
     },function(t)
     {
      Remoting.returnExn0(t[0],t[1]);
     },Remoting.messaging().get_D().wprintfn));
     Remoting.installProvider();
    }
 };
 WasmLoad.loadInThisThread=function(publishPath,debug,opts)
 {
  var $1,$2,$3;
  $2=!self.document;
  $3=WsTranslatorLoader.wasmStatusV().Get();
  switch($2?$3[0].$==3?1:$3[0].$==1?2:$3[0].$==2?4:$3[0].$==0?6:0:$3[0].$==1?1:$3[0].$==3?3:$3[0].$==4?5:$3[0].$==0?6:0)
  {
   case 0:
    null;
    break;
   case 1:
    ((WsTranslatorLoader.printfnLog())("WASM"))(function($4)
    {
     return $4("WASM is loading");
    });
    break;
   case 2:
    ((WsTranslatorLoader.printfnLog())("WASM"))(function($4)
    {
     return $4("WASM is loading in the main thread");
    });
    break;
   case 3:
    ((WsTranslatorLoader.printfnLog())("WASM"))(function($4)
    {
     return $4("WASM is loading in a WebWorker");
    });
    break;
   case 4:
    ((WsTranslatorLoader.printfnLog())("WASM"))(function($4)
    {
     return $4("WASM is loaded in the main thread");
    });
    break;
   case 5:
    ((WsTranslatorLoader.printfnLog())("WASM"))(function($4)
    {
     return $4("WASM is loaded in a WebWorker");
    });
    break;
   case 6:
    Concurrency.Start(Concurrency.FromContinuations(function(ok,ko)
    {
     var b;
     function init()
     {
      try
      {
       WasmLoad.bindWasm();
       ((WsTranslatorLoader.printfnLog())("WASM"))(function($4)
       {
        return $4("WASM Initialized!");
       });
       WsTranslatorLoader.wasmStatusV().Set([!self.document?WasmStatus.WasmWorkerLoaded:WasmStatus.WasmLoaded,{
        $:1,
        $0:publishPath
       }]);
       ok();
      }
      catch(e)
      {
       ko(e);
      }
     }
     function initializeRuntime()
     {
      var monoSetEnv,o,config,vfs_prefix,deploy_prefix,enable_debugging,file_list;
      try
      {
       monoSetEnv=(o=self.Module.cwrap("mono_wasm_setenv","void",["string","string"]),function(t)
       {
        o(t[0],t[1]);
       });
       debug?(monoSetEnv(["MONO_LOG_LEVEL","debug"]),monoSetEnv(["MONO_LOG_MASK","all"])):(monoSetEnv(["MONO_LOG_LEVEL",""]),monoSetEnv(["MONO_LOG_MASK",""]));
       config=self.config;
       vfs_prefix=config.vfs_prefix;
       deploy_prefix=config.deploy_prefix;
       enable_debugging=config.enable_debugging;
       file_list=config.file_list;
       self.MONO.mono_load_runtime_and_bcl(vfs_prefix,deploy_prefix,enable_debugging,file_list,init);
      }
      catch(e)
      {
       ko(e);
      }
     }
     return Concurrency.Start((b=null,Concurrency.Delay(function()
     {
      return Concurrency.TryWith(Concurrency.Delay(function()
      {
       ((WsTranslatorLoader.printfnLog())("WASM"))(function($4)
       {
        return $4("Loading WASM. Hold on, this may take a while...");
       });
       WsTranslatorLoader.wasmStatusV().Set([!self.document?WasmStatus.WasmWorkerLoading:WasmStatus.WasmLoading,{
        $:1,
        $0:publishPath
       }]);
       return Concurrency.Bind(Concurrency.Sleep(50),function()
       {
        return Concurrency.Combine(!(!self.document)?(Remoting.installProvider(),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
        {
         return Concurrency.Bind(WasmLoad.requireJsA([WsTranslatorLoader.getId(publishPath)+"mono-config.js"]),function()
         {
          var a,a$1;
          self.Module=self.Module||{};
          self.Module.onRuntimeInitialized=initializeRuntime;
          a=WsTranslatorLoader.printfn(function($4)
          {
           return function($5)
           {
            return $4(Utils.toSafe($5));
           };
          });
          self.Module.print=a;
          a$1=WsTranslatorLoader.eprintfn(function($4)
          {
           return function($5)
           {
            return $4(Utils.toSafe($5));
           };
          });
          self.Module.printErr=a$1;
          self.Module.preRun=[function()
          {
           WasmLoad.preloadFiles(WasmLoad.filesToPreload(opts));
          }];
          return Concurrency.Bind(WasmLoad.requireJsA([WsTranslatorLoader.getId(publishPath)+"dotnet.js"]),function()
          {
           return Concurrency.Zero();
          });
         });
        }));
       });
      }),function(a)
      {
       ko(a);
       return Concurrency.Zero();
      });
     })),null);
    }),null);
    break;
  }
 };
 WasmLoad.filesToPreload=function(opts)
 {
  return List.ofSeq(Seq.delay(function()
  {
   return Seq.append(WsTranslator.dlls(),Seq.delay(function()
   {
    return Arrays.choose(function(a)
    {
     var a$1;
     a$1=String.StartsWith("-r:",a);
     return a$1!=null&&a$1.$==1?{
      $:1,
      $0:a$1.$0
     }:null;
    },Strings.SplitChars(opts,["\n"],0));
   }));
  }));
 };
 WasmLoad.preloadFiles=function(files)
 {
  var dirFiles,e;
  self.Browser=Pojo.newPojo([["init",Global.ignore],["asyncLoad",function(url,onload)
  {
   var xhr;
   xhr=new self.XMLHttpRequest();
   xhr.open("GET",url,true);
   xhr.responseType="arraybuffer";
   xhr.onload=function()
   {
    return xhr.status===200||xhr.status===0&&!Unchecked.Equals(xhr.response,null)?onload(new Global.Uint8Array(xhr.response)):(((WsTranslatorLoader.printfnLog())("WASM"))(function($1)
    {
     return function($2)
     {
      return $1("xhr failed: "+Utils.toSafe($2));
     };
    }))(url);
   };
   xhr.onerror=function(d)
   {
    return(((WsTranslatorLoader.printfnLog())("WASM"))(function($1)
    {
     return function($2)
     {
      return $1(Utils.prettyPrint($2));
     };
    }))(d);
   };
   return xhr.send(null);
  }]]);
  self.Module=self.Module||{};
  self.Module.preloadPlugins=[];
  dirFiles=Seq.cache(Seq.distinct(Seq.map(function(a)
  {
   return[Strings.concat("/",Slice.array(a,null,{
    $:1,
    $0:Arrays.length(a)-2
   })),Seq.last(a)];
  },Seq.map(function(a)
  {
   return Arrays.map(Strings.Trim,a);
  },Seq.map(function(s)
  {
   return Strings.SplitChars(Strings.Replace(s,"\\","/"),["/"],0);
  },files)))));
  Seq.iter(function(dir)
  {
   try
   {
    self.FS.mkdir(dir);
   }
   catch(e$1)
   {
    null;
   }
  },Seq.distinct(Seq.map(function(t)
  {
   return t[0];
  },dirFiles)));
  e=Enumerator.Get(dirFiles);
  try
  {
   while(e.MoveNext())
    (function()
    {
     var f,file,dir,from;
     f=e.Current();
     file=f[1];
     dir=f[0];
     from=Strings.Replace((dir==="/managed"?".":"..")+dir+"/"+file,"//","/");
     (((WsTranslatorLoader.printfnLog())("WASM"))(function($1)
     {
      return function($2)
      {
       return $1("Preloading "+Utils.toSafe($2));
      };
     }))(from);
     return self.FS.createPreloadedFile(dir,file,from,1,1);
    }());
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 WasmLoad.bindWasm=function()
 {
  Seq.iter(function(t)
  {
   WasmLoad.bindStaticMethod(t[0],t[1],t[2]);
  },List.ofArray([["WsTranslator47","FsRoot.WsTranslator","runRpc"]]));
 };
 WasmLoad.bindStaticMethod=function(assmbly,path,methd)
 {
  var m;
  self[((((Runtime.Curried(function($1,$2,$3,$4)
  {
   return $1("WASM_"+Utils.toSafe($2)+"_"+Utils.toSafe($3)+"_"+Utils.toSafe($4));
  },4))(Global.id))(assmbly))(Strings.Replace(path,".","_")))(methd)]=(m=((((Runtime.Curried(function($1,$2,$3,$4)
  {
   return $1("["+Utils.toSafe($2)+"]"+Utils.toSafe($3)+":"+Utils.toSafe($4));
  },4))(Global.id))(assmbly))(path))(methd),self.Module.mono_bind_static_method(m));
 };
 WasmLoad.requireJsA=function(fs)
 {
  return Concurrency.FromContinuations(function(ok)
  {
   return Global.requirejs(Arrays.ofSeq(fs),ok);
  });
 };
 WasmLoad.rootPath=function()
 {
  SC$1.$cctor();
  return SC$1.rootPath;
 };
 Rpc.evalJSRpc=function(js)
 {
  return Concurrency.FromContinuations(function(ok,err)
  {
   var f,md;
   md="Rpc.evalJSRpc: -0";
   ReturnQueue.add(md,[(f=WsTranslatorLoader.printfn(function($1)
   {
    return function($2)
    {
     return $1(Utils.toSafe($2));
    };
   }),function(x)
   {
    return ok(f(x));
   }),err]);
   try
   {
    return Remoting.callEvalJS(md,js);
   }
   catch(e)
   {
    return Remoting.returnExnExn(md,e);
   }
  });
 };
 UI.main=function()
 {
  var x,a;
  x=UI.mainDoc();
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 UI.mainDoc=function()
 {
  return Doc.Element("div",[],[Doc.Element("h1",[],[Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1("HELLO WASM"+Utils.toSafe($2)+"!");
   };
  }(Global.id))(WsTranslatorLoader.WasmLoaderVersion()))]),Doc.Element("h2",[],[Doc.TextView(View.Map(function($1)
  {
   return(function($2)
   {
    return function($3)
    {
     return $2("("+WsTranslatorLoader_GeneratedPrintf.p($3[0])+", "+WsTranslatorLoader_GeneratedPrintf.p$1($3[1])+")");
    };
   }(Global.id))([$1[0],$1[1]]);
  },WsTranslatorLoader.wasmStatusV().get_View()))]),Doc.Element("div",[],[Doc.TextNode(" WasmPath:"),Doc.Input([],UI.wasmPathTV())]),Doc.Element("span",[],[Doc.Button("Load as Worker",[],function()
  {
   UI.actLoadAsWorker();
  }),Doc.Button("Terminate Worker",[],function()
  {
   UI.actTerminateWorker();
  }),Doc.Button("Load in Main thread",[],function()
  {
   UI.actLoadInMainThread();
  }),Doc.TextNode(" Debug:"),Doc.CheckBox([],UI.debugV())]),Doc.Element("div",[],[Doc.Element("div",[],[Doc.TextNode("Command: "),Doc.Input([],UI.commandV())]),Doc.InputArea([],UI.codeV()),Doc.InputArea([],UI.optsV()),Doc.InputArea([],UI.jsV())]),Doc.Element("span",[],[Doc.Button("Check",[],function()
  {
   UI.clean();
   UI.callWasmTimed("Check",UI.actCheck,null);
  }),Doc.Button("Compile",[],function()
  {
   UI.clean();
   UI.callWasmTimed("Compile",UI.actCompile,null);
  }),Doc.Button("Run",[],function()
  {
   UI.clean();
   UI.callWasmTimed("Run",UI.actRun,null);
  }),Doc.Button("Evaluate",[],function()
  {
   UI.clean();
   UI.callWasmTimed("Evaluate",UI.actEvalFS,null);
  }),Doc.Button("Translate",[],function()
  {
   UI.clean();
   UI.callWasmTimed("Translate",UI.actTranslate,null);
  }),Doc.Button("Run JS",[],function()
  {
   UI.clean();
   UI.callWasmTimed("Run JS",UI.actEvalJS,null);
  }),Doc.Button("Dir",[],function()
  {
   UI.clean();
   UI.callWasmTimed("Dir",UI.actDir,null);
  }),Doc.Button("Clean",[],function()
  {
   UI.clean();
  })]),Doc.Element("div",[AttrProxy.Create("style","font-family: monospace; white-space:pre")],[UI.tabsDoc(),UI.detailsDoc()])]);
 };
 UI.detailsDoc=function()
 {
  var m;
  function f(ch,textW)
  {
   function f$1(t)
   {
    return t[1];
   }
   function g(t)
   {
    return t[0];
   }
   return Doc.Element("div",[AttrModule.Dynamic("style",View.Map(function(cur)
   {
    return cur===ch?"display:flex; flex-direction:column; overflow:hidden; flex: 1 1 0%":"display: none";
   },UI.curChannel().get_View()))],[Doc.Button("Clean",[],function()
   {
    UI.cleanChannel(ch);
   }),Doc.Element("div",[AttrProxy.Create("style","overflow:auto; flex: 1 1 0%")],[Doc.TextView(View.Map(function(x)
   {
    return g(f$1(x));
   },textW))])]);
  }
  m=UI.detailsV();
  return Doc.ConvertSeqBy(m.key,function($1)
  {
   return function($2)
   {
    return f($1,$2);
   };
  },m["var"].get_View());
 };
 UI.tabsDoc=function()
 {
  var m;
  function f(ch,textW)
  {
   var background,fontWeight;
   function a(a$1,a$2)
   {
    return a$2[1]?"bold":"normal";
   }
   background=View.Map(function(cur)
   {
    return cur===ch?"white":"lightgray";
   },UI.curChannel().get_View());
   fontWeight=View.Map(function($1)
   {
    return a($1[0],$1[1]);
   },textW);
   return Doc.Button(ch,[AttrModule.DynamicStyle("background",background),AttrModule.DynamicStyle("font-weight",fontWeight)],function()
   {
    UI.seenChannel(UI.curChannel().Get());
    UI.curChannel().Set(ch);
    UI.seenChannel(ch);
   });
  }
  m=UI.detailsV();
  return Doc.ConvertSeqBy(m.key,function($1)
  {
   return function($2)
   {
    return f($1,$2);
   };
  },m["var"].get_View());
 };
 UI.actDir=function()
 {
  return(new AjaxRemotingProvider.New()).Async("WsTranslator47:FsRoot.WsTranslator+Rpc.dirRpc:-1181784350",["/"]);
 };
 UI.actTranslate=function()
 {
  var t;
  t=UI.getParms();
  return UI.translateToJs(t[0],t[1],t[2]);
 };
 UI.actEvalJS=function()
 {
  var a,b,n,b$1;
  a=(b=null,Concurrency.Delay(function()
  {
   return Concurrency.TryWith(Concurrency.Delay(function()
   {
    return Concurrency.Bind(Rpc.evalJSRpc(UI.jsV().Get()),function()
    {
     return Concurrency.Return(null);
    });
   }),function(a$1)
   {
    (WsTranslatorLoader.eprintfn(function($1)
    {
     return function($2)
     {
      return $1(Utils.prettyPrint($2));
     };
    }))(a$1);
    return Concurrency.Zero();
   });
  }));
  n="Eval JS";
  b$1=null;
  return Concurrency.Delay(function()
  {
   var start,c;
   ((Log.printfn(Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Utils.toSafe($2)+" Starting "+Utils.toSafe($3));
   })))(function(n$1)
   {
    return n$1.getFullYear()+"-"+("0"+(n$1.getMonth()+1)).slice(-2)+"-"+("0"+n$1.getDate()).slice(-2)+" "+("0"+n$1.getHours()).slice(-2)+":"+("0"+n$1.getMinutes()).slice(-2)+":"+("0"+n$1.getSeconds()).slice(-2)+"."+("00"+n$1.getMilliseconds()).slice(-3);
   }(new Date(Date.now()))))(n);
   start=(c=Date.now(),c*10000);
   return Concurrency.Bind(a,function(a$1)
   {
    var elapsedSpan,c$1;
    elapsedSpan=((c$1=Date.now(),c$1*10000)-start)/10000;
    ((((((Log.printfn(Runtime.Curried(function($1,$2,$3,$4,$5,$6,$7)
    {
     return $1(Utils.toSafe($2)+" Finished "+Utils.toSafe($3)+" "+Global.String($4)+":"+Utils.padNumLeft(Global.String($5),2)+":"+Utils.padNumLeft(Global.String($6),2)+"."+Utils.padNumLeft(Global.String($7),3));
    },7)))(function(n$1)
    {
     return n$1.getFullYear()+"-"+("0"+(n$1.getMonth()+1)).slice(-2)+"-"+("0"+n$1.getDate()).slice(-2)+" "+("0"+n$1.getHours()).slice(-2)+":"+("0"+n$1.getMinutes()).slice(-2)+":"+("0"+n$1.getSeconds()).slice(-2)+"."+("00"+n$1.getMilliseconds()).slice(-3);
    }(new Date(Date.now()))))(n))(Operators.toInt(elapsedSpan/3600000)))(Math.floor(elapsedSpan/60000)%60))(Math.floor(elapsedSpan/1000)%60))(elapsedSpan%1000);
    return Concurrency.Return(a$1);
   });
  });
 };
 UI.actEvalFS=function()
 {
  return(new AjaxRemotingProvider.New()).Async("WsTranslator47:FsRoot.WsTranslator+Rpc.evaluateRpc:-1181784350",[UI.codeV().Get()]);
 };
 UI.actRun=function()
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.TryWith(Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("WsTranslator47:FsRoot.WsTranslator+Rpc.runRpc:-1181784350",[UI.commandV().Get()]),function()
    {
     return Concurrency.Return(null);
    });
   }),function(a)
   {
    (WsTranslatorLoader.eprintfn(function($1)
    {
     return function($2)
     {
      return $1(Utils.prettyPrint($2));
     };
    }))(a);
    return Concurrency.Zero();
   });
  });
 };
 UI.actCompile=function()
 {
  var t;
  t=UI.getParms();
  return UI.compileProject(t[0],t[1],t[2]);
 };
 UI.actCheck=function()
 {
  var t;
  t=UI.getParms();
  return UI.parseAndCheckProject(t[0],t[1],t[2]);
 };
 UI.actToggleDebug=function()
 {
  UI.debugV().Set(!UI.debugV().Get());
 };
 UI.actLoadInMainThread=function()
 {
  WasmLoad.loadInThisThread(UI.wasmPathV().Get(),UI.debugV().Get(),UI.optsV().Get());
 };
 UI.actTerminateWorker=function()
 {
  WWorker.terminate();
 };
 UI.actLoadAsWorker=function()
 {
  WasmLoad.loadWasmInWorker(UI.wasmPathV().Get(),UI.debugV().Get(),UI.optsV().Get());
 };
 UI.translateToJs=function(projectName,opts,code)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("WsTranslator47:FsRoot.WsTranslator+Rpc.translateFsToJsRpc:1355092715",[projectName,opts,code]),function(a)
   {
    var wsO,asmO,x;
    wsO=a[1];
    UI.addErrors(a[0]);
    return wsO==null?(UI.clean(),UI.jsV().Set(""),Concurrency.Zero()):(asmO=wsO.$0[0],(x=asmO==null?"No translation":(UI.jsV().Set(asmO.$0),"Translated!"),(WsTranslatorLoader.printfn(function($1)
    {
     return function($2)
     {
      return $1(Utils.toSafe($2));
     };
    }))(x),UI.addErrors(wsO.$0[1]),UI.addErrors(wsO.$0[2]),Concurrency.Zero()));
   });
  });
 };
 UI.compileProject=function(projectName,opts,code)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("WsTranslator47:FsRoot.WsTranslator+Rpc.compileProjectRpc:35333862",[projectName,opts,code]),function(a)
   {
    UI.addErrors(a[0]);
    (WsTranslatorLoader.printfn(function($1)
    {
     return function($2)
     {
      return $1("Compilation Result = "+Global.String($2));
     };
    }))(a[1]);
    return Concurrency.Zero();
   });
  });
 };
 UI.parseAndCheckProject=function(projectName,opts,code)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("WsTranslator47:FsRoot.WsTranslator+Rpc.parseAndCheckProjectRpc:1033688720",[projectName,opts,code]),function(a)
   {
    UI.addErrors(a[0]);
    (WsTranslatorLoader.printfn(function($1)
    {
     return function($2)
     {
      return $1("("+Utils.prettyPrint($2[0])+", "+Utils.printArray(Utils.prettyPrint,$2[1])+")");
     };
    }))([a[2],a[1]]);
    return Concurrency.Zero();
   });
  });
 };
 UI.addErrors=function(errs)
 {
  UI.addChannel("stderr",Strings.concat("\n",Seq.map(function($1)
  {
   return function($2)
   {
    return $1(Utils.prettyPrint($2));
   };
  }(Global.id),errs)));
 };
 UI.showMessages=function(name,f,msgsW)
 {
  return Doc.BindView(function(msgs)
  {
   return Arrays.length(msgs)===0?Doc.get_Empty():Doc.Element("div",[],[Doc.TextNode(name),Doc.Element("ol",[],[Doc.Concat(Seq.map(function(x)
   {
    return Doc.Element("li",[],[Doc.TextNode(f(x))]);
   },msgs))])]);
  },msgsW);
 };
 UI.getParms=function()
 {
  return["WasmTest",Arrays.filter(function(s)
  {
   return Strings.Trim(s)!=="";
  },Strings.SplitChars("fsc.exe\n"+UI.optsV().Get(),["\n"],0)),UI.codeV().Get()];
 };
 UI.callWasmTimed=function(nm,f,p)
 {
  var a,b;
  Concurrency.Start((a=UI.callWasmA(f,p),(b=null,Concurrency.Delay(function()
  {
   var start,c;
   ((Log.printfn(Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Utils.toSafe($2)+" Starting "+Utils.toSafe($3));
   })))(function(n)
   {
    return n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)+" "+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+"."+("00"+n.getMilliseconds()).slice(-3);
   }(new Date(Date.now()))))(nm);
   start=(c=Date.now(),c*10000);
   return Concurrency.Bind(a,function(a$1)
   {
    var elapsedSpan,c$1;
    elapsedSpan=((c$1=Date.now(),c$1*10000)-start)/10000;
    ((((((Log.printfn(Runtime.Curried(function($1,$2,$3,$4,$5,$6,$7)
    {
     return $1(Utils.toSafe($2)+" Finished "+Utils.toSafe($3)+" "+Global.String($4)+":"+Utils.padNumLeft(Global.String($5),2)+":"+Utils.padNumLeft(Global.String($6),2)+"."+Utils.padNumLeft(Global.String($7),3));
    },7)))(function(n)
    {
     return n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)+" "+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+"."+("00"+n.getMilliseconds()).slice(-3);
    }(new Date(Date.now()))))(nm))(Operators.toInt(elapsedSpan/3600000)))(Math.floor(elapsedSpan/60000)%60))(Math.floor(elapsedSpan/1000)%60))(elapsedSpan%1000);
    return Concurrency.Return(a$1);
   });
  }))),null);
 };
 UI.callWasmA=function(f,p)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Combine(Unchecked.Equals(WsTranslatorLoader.wasmStatusV().Get(),[WasmStatus.WasmNotLoaded,null])?(WasmLoad.loadWasmInWorker(UI.wasmPathV().Get(),UI.debugV().Get(),UI.optsV().Get()),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(50),function()
    {
     return Concurrency.Combine(Concurrency.While(function()
     {
      var m;
      m=WsTranslatorLoader.wasmStatusV().Get();
      return m[0].$==2?false:m[0].$!=4;
     },Concurrency.Delay(function()
     {
      ((WsTranslatorLoader.printfnLog())("WASM"))(function($1)
      {
       return $1("Waiting for WASM to load...");
      });
      return Concurrency.Bind(Concurrency.Sleep(2000),function()
      {
       return Concurrency.Return(null);
      });
     })),Concurrency.Delay(function()
     {
      return Concurrency.TryWith(Concurrency.Delay(function()
      {
       return Concurrency.Bind(f(p),function()
       {
        return Concurrency.Return(null);
       });
      }),function(a)
      {
       (WsTranslatorLoader.eprintfn(function($1)
       {
        return function($2)
        {
         return $1(Utils.prettyPrint($2));
        };
       }))(a);
       return Concurrency.Zero();
      });
     }));
    });
   }));
  });
 };
 UI.seenChannel=function(ch)
 {
  UI.detailsV().Append([ch,[UI.getChannel(ch),false]]);
 };
 UI.clean=function()
 {
  UI.cleanChannel("stdout");
  UI.cleanChannel("stderr");
 };
 UI.cleanChannel=function(ch)
 {
  UI.setChannel(ch,"");
 };
 UI.addChannel=function(ch,v)
 {
  var pre;
  pre=UI.getChannel(ch);
  UI.setChannel(ch,pre+(pre===""?"":"\n")+v);
 };
 UI.setChannel=function(ch,v)
 {
  UI.detailsV().Append([ch,[v,v!==""]]);
 };
 UI.changedChannel=function(ch)
 {
  var o,o$1;
  o=(o$1=UI.detailsV().TryFindByKey(ch),o$1==null?null:{
   $:1,
   $0:o$1.$0[1][1]
  });
  return o==null?false:o.$0;
 };
 UI.getChannel=function(ch)
 {
  var o,o$1;
  o=(o$1=UI.detailsV().TryFindByKey(ch),o$1==null?null:{
   $:1,
   $0:o$1.$0[1][0]
  });
  return o==null?"":o.$0;
 };
 UI.optsV=function()
 {
  SC$1.$cctor();
  return SC$1.optsV;
 };
 UI.codeV=function()
 {
  SC$1.$cctor();
  return SC$1.codeV;
 };
 UI.curChannel=function()
 {
  SC$1.$cctor();
  return SC$1.curChannel;
 };
 UI.jsV=function()
 {
  SC$1.$cctor();
  return SC$1.jsV;
 };
 UI.commandV=function()
 {
  SC$1.$cctor();
  return SC$1.commandV;
 };
 UI.wasmPathTV=function()
 {
  SC$1.$cctor();
  return SC$1.wasmPathTV;
 };
 UI.wasmPathV=function()
 {
  SC$1.$cctor();
  return SC$1.wasmPathV;
 };
 UI.debugV=function()
 {
  SC$1.$cctor();
  return SC$1.debugV;
 };
 UI.detailsV=function()
 {
  SC$1.$cctor();
  return SC$1.detailsV;
 };
 WsTranslatorLoader.eprintfn=function(fmt)
 {
  return fmt(Remoting.messaging().get_D().wprintfn("stderr"));
 };
 WsTranslatorLoader.printfn=function(fmt)
 {
  return fmt(Remoting.messaging().get_D().wprintfn("stdout"));
 };
 WsTranslatorLoader.printfnLog=function()
 {
  SC$1.$cctor();
  return SC$1.printfnLog;
 };
 WsTranslatorLoader.wasmStatusV=function()
 {
  SC$1.$cctor();
  return SC$1.wasmStatusV;
 };
 WsTranslatorLoader.getId=function(a)
 {
  return a.$0;
 };
 WsTranslatorLoader.WasmLoaderVersion=function()
 {
  SC$1.$cctor();
  return SC$1.WasmLoaderVersion;
 };
 SC$1.$cctor=function()
 {
  var f,g,i;
  SC$1.$cctor=Global.ignore;
  function g$1(s)
  {
   return Strings.concat("\n",s);
  }
  function f$1(s)
  {
   return String.splitByChar("\n",s);
  }
  function g$2(s)
  {
   var a,b;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a=0,(b=Arrays.length(s)-2,Unchecked.Compare(a,b)===1?a:b))
   });
  }
  function g$3(s)
  {
   return Strings.concat("\n",s);
  }
  function f$2(s)
  {
   return s+"T00:00:00";
  }
  function w(ch,txt)
  {
   console.log(ch+":: "+txt);
   UI.addChannel(ch,txt);
   return ch==="stderr"?UI.addChannel("stdout",txt):null;
  }
  SC$1.unindentStr=function(x)
  {
   return g$1(String.unindent(x));
  };
  SC$1.skipLastLine=(f=function(x)
  {
   return g$2(f$1(x));
  },function(x)
  {
   return g$3(f(x));
  });
  SC$1.parseDateO2=(g=ParseO.tryParseWith(function(a)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];
  }),function(x)
  {
   return g(f$2(x));
  });
  SC$1.parseDateO=ParseO.tryParseWith(function(a)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];
  });
  SC$1.parseIntO=ParseO.tryParseWith(function(a)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt32(a,{
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
  SC$1.parseInt64O=ParseO.tryParseWith(function(a)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt64(a,{
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
  SC$1.parseSingleO=ParseO.tryParseWith(function(a)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith(function(a)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseGuidO=ParseO.tryParseWith(function(a)
  {
   var o;
   o=null;
   return[Guid.TryParse(a,{
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
  SC$1.WasmLoaderVersion="47";
  SC$1.wasmStatusV=Var$1.Create$1([WasmStatus.WasmNotLoaded,null]);
  SC$1.originalProvider=Remoting$1.AjaxProvider();
  SC$1.queues=new Dictionary.New$5();
  SC$1.messaging=new Dependency.New(IMessagingO.New(function()
  {
   Operators.FailWith("Too early for evalJS");
  },function(h)
  {
   return function(d)
   {
    return self.WASM_WsTranslator47_FsRoot_WsTranslator_runRpc(h,d);
   };
  },function(t)
  {
   Remoting.returnValue0(t[0],t[1]);
  },function(t)
  {
   Remoting.returnExn0(t[0],t[1]);
  },function(ch)
  {
   return function(txt)
   {
    return(((Runtime.Curried3(function($1,$2,$3)
    {
     return $1("EARLY PRINTING! "+Utils.toSafe($2)+":: "+Utils.toSafe($3));
    }))(function(s)
    {
     console.log(s);
    }))(ch))(txt);
   };
  }));
  SC$1.rv=function(t)
  {
   Remoting.returnValue(t[0],t[1]);
  };
  SC$1.re=function(t)
  {
   Remoting.returnExn(t[0],t[1]);
  };
  SC$1.lt=function(t)
  {
   Remoting.logThis(t[0],t[1]);
  };
  SC$1.printfnLog=function(c)
  {
   return function(f$3)
   {
    return Remoting.printfnLog(c,f$3);
   };
  };
  SC$1.workerO=null;
  SC$1.rootPath="/WASM/v47/";
  SC$1.detailsV=ListModel.Create(function(t)
  {
   return t[0];
  },[]);
  SC$1.debugV=Var$1.Create$1(false);
  SC$1.wasmPathV=Var$1.Create$1({
   $:0,
   $0:"/WASM/v47/Interp/"
  });
  SC$1.wasmPathTV=Var$1.Lens(UI.wasmPathV(),function(a)
  {
   return a.$0;
  },function(a,a$1)
  {
   return{
    $:0,
    $0:a$1
   };
  });
  SC$1.commandV=Var$1.Create$1("/tmp/bin.exe 1 2 10 20 30 40");
  SC$1.jsV=Var$1.Create$1("");
  SC$1.curChannel=Var$1.Create$1("WASM");
  SC$1.codeV=Var$1.Create$1("\r\n            //#nowarn \"52\"\r\n            \r\n            let tryParseWith tryParseFunc : string -> _  = tryParseFunc >> function\r\n                    | true, v    -> Some v\r\n                    | false, _   -> None\r\n            let parseIntO = tryParseWith System.Int32   .TryParse\r\n            \r\n            let rec fibo = function\r\n                | 0 | 1 -> 1\r\n                | n -> fibo (n - 1) + fibo (n - 2)\r\n            \r\n            let printFibo n = printfn \"fibo(%d) = %i\" n (fibo n)\r\n            \r\n            let doFibos (args: string []) =\r\n                args\r\n                |> Seq.collect (fun s -> s.Split[| ' ' |])\r\n                |> Seq.choose parseIntO\r\n                |> Seq.iter   printFibo\r\n            \r\n            let nowStamp() = \r\n                let t = System.DateTime.UtcNow // in two steps to avoid Warning: The value has been copied to ensure the original is not mutated\r\n                t.ToString(\"yyyy-MM-dd HH:mm:ss.fff\", System.Globalization.CultureInfo.InvariantCulture)\r\n            \r\n            let inline TimeIt n f p =\r\n                printfn \"%s Starting %s\" (nowStamp()) n\r\n                let start = System.DateTime.UtcNow.Ticks\r\n                f p\r\n                let elapsedSpan = System.TimeSpan(System.DateTime.UtcNow.Ticks - start)\r\n                printfn \"%s Finished %s %0d:%02d:%02d.%03d\" (nowStamp()) n (int elapsedSpan.TotalHours) elapsedSpan.Minutes elapsedSpan.Seconds elapsedSpan.Milliseconds\r\n            \r\n            let [< EntryPoint >] main args =\r\n                TimeIt \"doFibos\" doFibos args\r\n                0\r\n            \r\n                    ");
  SC$1.optsV=Var$1.Create$1(Strings.concat("\n",Seq.map(Strings.Trim,Strings.SplitChars("\r\n                                            /tmp/source.fs\r\n                                            -o:/tmp/bin.exe\r\n                                            -d:WEBSHARPER\r\n                                            --simpleresolution\r\n                                            --nowarn:3186\r\n                                            --optimize-\r\n                                            --noframework\r\n                                            --fullpaths\r\n                                            --warn:3\r\n                                            --target:exe\r\n                                            -r:/dlls/WebSharper.Core.dll\r\n                                            -r:/dlls/WebSharper.Main.dll\r\n                                            -r:/dlls/WebSharper.UI.dll\r\n                                            -r:/dlls/WebSharper.Sitelets.dll\r\n                                            -r:/managed/FSharp.Core.dll\r\n                                            -r:/managed/mscorlib.dll\r\n                                            -r:/managed/netstandard.dll\r\n                                            -r:/managed/System.dll\r\n                                            -r:/managed/System.Core.dll\r\n                                            -r:/managed/System.IO.dll\r\n                                            -r:/managed/System.Runtime.dll\r\n                                            -r:/managed/System.Net.Http.dll\r\n                                            -r:/managed/System.Threading.dll\r\n                                            -r:/managed/System.Numerics.dll\r\n                                            -r:/managed/System.Runtime.Numerics.dll\r\n                                        ",["\n"],0))));
  UI.cleanChannel("stdout");
  UI.cleanChannel("stderr");
  !(!self.document)?Remoting.messaging().set_D((i=Remoting.messaging().get_D(),IMessagingO.New(function(t)
  {
   Remoting.evalJS0(t[0],t[1]);
  },i.runRpc,i.returnValue,i.returnExn,function($1)
  {
   return function($2)
   {
    return w($1,$2);
   };
  }))):void 0;
  Log.printer().set_D(function(txt)
  {
   Remoting.logThis("Timings",txt);
  });
 };
 WsTranslatorLoader_GeneratedPrintf.p$1=function($1)
 {
  return $1==null?"null":"Some "+WsTranslatorLoader_GeneratedPrintf.p$2($1.$0);
 };
 WsTranslatorLoader_GeneratedPrintf.p$2=function($1)
 {
  return"WasmPath "+Utils.prettyPrint($1.$0);
 };
 WsTranslatorLoader_GeneratedPrintf.p=function($1)
 {
  return $1.$==4?"WasmWorkerLoaded":$1.$==3?"WasmWorkerLoading":$1.$==2?"WasmLoaded":$1.$==1?"WasmLoading":"WasmNotLoaded";
 };
}(self));

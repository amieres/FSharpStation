(function()
{
 "use strict";
 var Global,FsRoot,Library,String,ParseO,LibraryJS,Pojo,WasmLoader,WasmStatus,Remoting,IMessagingO,ReturnQueue,WebSharper,Obj,CustomXhrProvider,WWorker,WasmLoad,Require,GlobalModule,UI,WSFrameworkTest,AssemblyData,ModuleName,TypeName,MethodName,AssemblyName,AssemblyRef,JSCode,ModuleRef,TypeRef,MethodDef,ModuleDef,AssemblyDef,LoadAsm,WSFramework,SC$1,testing_GeneratedPrintf,GeneratedPrintf,Strings,List,Seq,Slice,Operators,Char,Unchecked,Utils,console,IntelliFactory,Runtime,Concurrency,Remoting$1,WsTranslator,Arrays,Enumerator,UI$1,Client,Templates,Doc,View,AjaxRemotingProvider,AttrProxy,Data,TxtRuntime,FSharp,Data$1,Runtime$1,IO,JSON,AttrModule,Date,DateUtil,Numeric,System,Guid,Var$1,Collections,Dictionary,ListModel;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Pojo=LibraryJS.Pojo=LibraryJS.Pojo||{};
 WasmLoader=FsRoot.WasmLoader=FsRoot.WasmLoader||{};
 WasmStatus=WasmLoader.WasmStatus=WasmLoader.WasmStatus||{};
 Remoting=WasmLoader.Remoting=WasmLoader.Remoting||{};
 IMessagingO=Remoting.IMessagingO=Remoting.IMessagingO||{};
 ReturnQueue=Remoting.ReturnQueue=Remoting.ReturnQueue||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 CustomXhrProvider=Remoting.CustomXhrProvider=Remoting.CustomXhrProvider||{};
 WWorker=WasmLoader.WWorker=WasmLoader.WWorker||{};
 WasmLoad=WasmLoader.WasmLoad=WasmLoader.WasmLoad||{};
 Require=WasmLoad.Require=WasmLoad.Require||{};
 GlobalModule=WasmLoad.GlobalModule=WasmLoad.GlobalModule||{};
 UI=WasmLoader.UI=WasmLoader.UI||{};
 WSFrameworkTest=FsRoot.WSFrameworkTest=FsRoot.WSFrameworkTest||{};
 AssemblyData=FsRoot.AssemblyData=FsRoot.AssemblyData||{};
 ModuleName=AssemblyData.ModuleName=AssemblyData.ModuleName||{};
 TypeName=AssemblyData.TypeName=AssemblyData.TypeName||{};
 MethodName=AssemblyData.MethodName=AssemblyData.MethodName||{};
 AssemblyName=AssemblyData.AssemblyName=AssemblyData.AssemblyName||{};
 AssemblyRef=AssemblyData.AssemblyRef=AssemblyData.AssemblyRef||{};
 JSCode=AssemblyData.JSCode=AssemblyData.JSCode||{};
 ModuleRef=AssemblyData.ModuleRef=AssemblyData.ModuleRef||{};
 TypeRef=AssemblyData.TypeRef=AssemblyData.TypeRef||{};
 MethodDef=AssemblyData.MethodDef=AssemblyData.MethodDef||{};
 ModuleDef=AssemblyData.ModuleDef=AssemblyData.ModuleDef||{};
 AssemblyDef=AssemblyData.AssemblyDef=AssemblyData.AssemblyDef||{};
 LoadAsm=AssemblyData.LoadAsm=AssemblyData.LoadAsm||{};
 WSFramework=FsRoot.WSFramework=FsRoot.WSFramework||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 testing_GeneratedPrintf=Global.testing_GeneratedPrintf=Global.testing_GeneratedPrintf||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
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
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Remoting$1=WebSharper&&WebSharper.Remoting;
 WsTranslator=FsRoot&&FsRoot.WsTranslator;
 Arrays=WebSharper&&WebSharper.Arrays;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 UI$1=WebSharper&&WebSharper.UI;
 Client=UI$1&&UI$1.Client;
 Templates=Client&&Client.Templates;
 Doc=UI$1&&UI$1.Doc;
 View=UI$1&&UI$1.View;
 AjaxRemotingProvider=Remoting$1&&Remoting$1.AjaxRemotingProvider;
 AttrProxy=UI$1&&UI$1.AttrProxy;
 Data=WebSharper&&WebSharper.Data;
 TxtRuntime=Data&&Data.TxtRuntime;
 FSharp=Global.FSharp;
 Data$1=FSharp&&FSharp.Data;
 Runtime$1=Data$1&&Data$1.Runtime;
 IO=Runtime$1&&Runtime$1.IO;
 JSON=Global.JSON;
 AttrModule=UI$1&&UI$1.AttrModule;
 Date=Global.Date;
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
 IMessagingO.New=function(runRpc,returnValue,returnExn,wprintfn)
 {
  return{
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
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    var md;
    md=Remoting.getHeaderRpc(headers);
    ReturnQueue.add(md,[ok,err]);
    return Concurrency.TryWith(Concurrency.Delay(function()
    {
     Remoting.callRunRpc(md,data);
     return Concurrency.Zero();
    }),function(a)
    {
     Remoting.returnExnExn(md,a);
     return Concurrency.Zero();
    });
   })),null);
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
 Remoting.returnExn=function(header,e)
 {
  Remoting.messaging().returnExn([header,e]);
 };
 Remoting.returnValue=function(header,data)
 {
  Remoting.messaging().returnValue([header,data]);
 };
 Remoting.callRunRpc=function(header,data)
 {
  (Remoting.messaging().runRpc(header))(data);
 };
 Remoting.messaging=function()
 {
  SC$1.$cctor();
  return SC$1.messaging;
 };
 Remoting.set_messaging=function($1)
 {
  SC$1.$cctor();
  SC$1.messaging=$1;
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
    WasmLoader.printfn(function($2)
    {
     return $2("Worker terminated!");
    });
    WasmLoader.wasmStatusV().Set(WasmStatus.WasmNotLoaded);
   }
  else
   WasmLoader.printfn(function($2)
   {
    return $2("Worker is not present");
   });
 };
 WWorker.fromWorker=function(evt)
 {
  var m,v;
  m=evt.data;
  m.$==1?Remoting.returnExn0(m.$0,m.$1):m.$==2?(WasmLoader.printfn(function($1)
  {
   return function($2)
   {
    return $1(Utils.toSafe($2));
   };
  }))(m.$0):m.$==3?(v=m.$0,!Unchecked.Equals(WasmLoader.wasmStatusV().Get(),v)?WasmLoader.wasmStatusV().Set(v):void 0):Remoting.returnValue0(m.$0,m.$1);
 };
 WWorker.receiveMessage=function(loadInThisThread,evt)
 {
  var m;
  m=evt.data;
  m.$==1?(WasmLoader.printfn(function($1)
  {
   return function($2)
   {
    return $1(Utils.toSafe($2));
   };
  }))(m.$0):m.$==2?loadInThisThread(m.$0):Remoting.callRunRpc(m.$0,m.$1);
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
 GlobalModule=WasmLoad.GlobalModule=Runtime.Class({},Obj,GlobalModule);
 GlobalModule.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },GlobalModule);
 WasmLoad.loadWasmInWorker=function(opts)
 {
  var w;
  if(!self.document)
   WasmLoader.printfn(function($1)
   {
    return $1("Already in a worker cannot load Wasm in another worker");
   });
  else
   if(WasmLoader.wasmStatusV().Get().$!==0)
    (WasmLoader.printfn(function($1)
    {
     return function($2)
     {
      return $1("Wasm is already "+testing_GeneratedPrintf.p($2));
     };
    }))(WasmLoader.wasmStatusV().Get());
   else
    {
     WasmLoader.wasmStatusV().Set(WasmStatus.WasmLoading);
     WasmLoader.printfn(function($1)
     {
      return $1("Initiating WebWorker");
     });
     w=new Global.Worker(Runtime.ScriptPath("testing","testing.WasmWorker.js"));
     w.postMessage({
      $:2,
      $0:opts
     });
     w.onmessage=WWorker.fromWorker;
     WWorker.set_workerO({
      $:1,
      $0:w
     });
     Remoting.set_messaging(IMessagingO.New(function(h)
     {
      return function(d)
      {
       return w.postMessage({
        $:0,
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
     },Remoting.messaging().wprintfn));
     Remoting.installProvider();
    }
 };
 WasmLoad.loadInThisThread=function(opts)
 {
  var $1,$2,$3;
  $2=!self.document;
  $3=WasmLoader.wasmStatusV().Get();
  switch($2?$3.$==3?1:$3.$==1?2:$3.$==2?4:$3.$==0?6:0:$3.$==1?1:$3.$==3?3:$3.$==4?5:$3.$==0?6:0)
  {
   case 0:
    null;
    break;
   case 1:
    WasmLoader.printfn(function($4)
    {
     return $4("WASM is loading");
    });
    break;
   case 2:
    WasmLoader.printfn(function($4)
    {
     return $4("WASM is loading in the main thread");
    });
    break;
   case 3:
    WasmLoader.printfn(function($4)
    {
     return $4("WASM is loading in a WebWorker");
    });
    break;
   case 4:
    WasmLoader.printfn(function($4)
    {
     return $4("WASM is loaded in the main thread");
    });
    break;
   case 5:
    WasmLoader.printfn(function($4)
    {
     return $4("WASM is loaded in a WebWorker");
    });
    break;
   case 6:
    Concurrency.Start(Concurrency.FromContinuations(function(ok)
    {
     var b;
     function init()
     {
      WasmLoad.bindWasm();
      WasmLoader.printfn(function($4)
      {
       return $4("WASM Initialized!");
      });
      WasmLoader.wasmStatusV().Set(!self.document?WasmStatus.WasmWorkerLoaded:WasmStatus.WasmLoaded);
      ok();
     }
     return Concurrency.Start((b=null,Concurrency.Delay(function()
     {
      WasmLoader.printfn(function($4)
      {
       return $4("Loading WASM. Hold on, this will take a while...");
      });
      WasmLoader.wasmStatusV().Set(!self.document?WasmStatus.WasmWorkerLoading:WasmStatus.WasmLoading);
      return Concurrency.Bind(Concurrency.Sleep(50),function()
      {
       return Concurrency.Combine(!(!self.document)?(Remoting.installProvider(),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
       {
        self.App=Pojo.newPojo([["init",init]]);
        return Concurrency.Bind(WasmLoad.requireJsA([WasmLoad.rootPath()+"mono-config.js"]),function()
        {
         return Concurrency.Bind(WasmLoad.requireJsA([WasmLoad.rootPath()+"runtime.js"]),function()
         {
          var a,a$1;
          a=WasmLoader.printfn(function($4)
          {
           return function($5)
           {
            return $4(Utils.toSafe($5));
           };
          });
          self.Module.print=a;
          a$1=WasmLoader.printfn(function($4)
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
          return Concurrency.Bind(WasmLoad.requireJsA([WasmLoad.rootPath()+"dotnet.js"]),function()
          {
           return Concurrency.Zero();
          });
         });
        });
       }));
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
  var dirFiles,e,f,file,dir,from;
  self.Browser=Pojo.newPojo([["init",Global.ignore],["asyncLoad",function(url,onload,onerror)
  {
   var xhr;
   xhr=new self.XMLHttpRequest();
   xhr.open("GET",url,true);
   xhr.responseType="arraybuffer";
   xhr.onload=function()
   {
    return xhr.status===200||xhr.status===0&&!Unchecked.Equals(xhr.response,null)?onload(new Global.Uint8Array(xhr.response)):onerror();
   };
   xhr.onerror=function()
   {
    return onerror();
   };
   return xhr.send(null);
  }]]);
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
  Seq.iter(function(dir$1)
  {
   try
   {
    self.FS.mkdir(dir$1);
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
    {
     f=e.Current();
     file=f[1];
     dir=f[0];
     from=Strings.Replace(WasmLoad.rootPath()+dir+"/"+file,"//","/");
     (WasmLoader.printfn(function($1)
     {
      return function($2)
      {
       return $1("Preloading "+Utils.toSafe($2));
      };
     }))(from);
     self.FS.createPreloadedFile(dir,file,from,1,Global.$op21);
    }
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
  },List.ofArray([["WsTranslator","FsRoot.WsTranslator","runRpc"]]));
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
  var c,c$1;
  return Doc.Element("div",[],[Doc.Element("h1",[],[Doc.TextNode("HELLO WASM!")]),Doc.Element("h2",[],[Doc.TextView(View.Map(function($1)
  {
   return(function($2)
   {
    return function($3)
    {
     return $2(testing_GeneratedPrintf.p($3));
    };
   }(Global.id))($1);
  },WasmLoader.wasmStatusV().get_View()))]),Doc.Element("span",[],[Doc.Button("Load as Worker",[],function()
  {
   WasmLoad.loadWasmInWorker(UI.optsV().Get());
  }),Doc.Button("Load in Main thread",[],function()
  {
   WasmLoad.loadInThisThread(UI.optsV().Get());
  }),Doc.Button("Terminate Worker",[],function()
  {
   WWorker.terminate();
  })]),Doc.Element("div",[],[Doc.InputArea([],UI.codeV()),Doc.InputArea([],UI.optsV())]),Doc.Element("span",[],[Doc.Button("Check",[],function()
  {
   UI.callWasmA(function(t)
   {
    return UI.parseAndCheckProject(t[0],t[1],t[2]);
   },UI.getParms());
  }),Doc.Button("Translate",[],function()
  {
   UI.clean();
   WasmLoader.printfn(function($1)
   {
    return $1("Initiating translation:");
   });
   UI.callWasmA(function(t)
   {
    return UI.translateToJs(t[0],t[1],t[2]);
   },UI.getParms());
  }),Doc.Button("Dir",[],function()
  {
   UI.callWasmA(function(d)
   {
    return(new AjaxRemotingProvider.New()).Async("WsTranslator:FsRoot.WsTranslator+Rpc.dirRpc:-1181784350",[d]);
   },"/");
  }),Doc.Button("Clean",[],function()
  {
   UI.clean();
  })]),UI.showMessages("Fsc Messages",function($1)
  {
   return function($2)
   {
    return $1(Utils.prettyPrint($2));
   };
  }(Global.id),UI.fsErrsV().get_View()),UI.showMessages("Ws  Errors",(c=function($1)
  {
   return function($2)
   {
    return $1("("+testing_GeneratedPrintf.p$1($2[0])+", "+testing_GeneratedPrintf.p$2($2[1])+")");
   };
  }(Global.id),function(t)
  {
   return c([t[0],t[1]]);
  }),UI.wsErrsV().get_View()),UI.showMessages("Ws  Warnings",(c$1=function($1)
  {
   return function($2)
   {
    return $1("("+testing_GeneratedPrintf.p$1($2[0])+", "+testing_GeneratedPrintf.p$3($2[1])+")");
   };
  }(Global.id),function(t)
  {
   return c$1([t[0],t[1]]);
  }),UI.wsWrnsV().get_View()),Doc.Element("div",[AttrProxy.Create("style","font-family: monospace; white-space:pre")],[Doc.TextView(UI.detailsV().get_View())])]);
 };
 UI.translateToJs=function(projectName,opts,code)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("WsTranslator:FsRoot.WsTranslator+Rpc.translateFsToJsRpc:957452724",[projectName,opts,code]),function(a)
   {
    var wsO;
    wsO=a[1];
    UI.fsErrsV().Set(a[0]);
    return wsO==null?(UI.clean(),UI.wsErrsV().Set([]),UI.wsWrnsV().Set([]),Concurrency.Zero()):(UI.detailsV().Set(wsO.$0[0]),UI.wsErrsV().Set(Arrays.ofSeq(wsO.$0[1])),UI.wsWrnsV().Set(Arrays.ofSeq(wsO.$0[2])),Concurrency.Zero());
   });
  });
 };
 UI.parseAndCheckProject=function(projectName,opts,code)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("WsTranslator:FsRoot.WsTranslator+Rpc.parseAndCheckProjectRpc:-1474163089",[projectName,opts,code]),function(a)
   {
    var a$1;
    UI.fsErrsV().Set(Arrays.ofSeq(a[0]));
    UI.wsErrsV().Set([]);
    UI.wsWrnsV().Set([]);
    a$1=(function($1)
    {
     return function($2)
     {
      return $1("("+Utils.prettyPrint($2[0])+", "+Utils.printArray(Utils.prettyPrint,$2[1])+")");
     };
    }(Global.id))([a[2],a[1]]);
    UI.detailsV().Set(a$1);
    return Concurrency.Zero();
   });
  });
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
 UI.callWasmA=function(f,p)
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Combine(WasmLoader.wasmStatusV().Get().$===0?(WasmLoad.loadWasmInWorker(UI.optsV().Get()),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(50),function()
    {
     return Concurrency.Combine(Concurrency.While(function()
     {
      var m;
      m=WasmLoader.wasmStatusV().Get();
      return m.$==2?false:m.$!=4;
     },Concurrency.Delay(function()
     {
      WasmLoader.printfn(function($1)
      {
       return $1("Waiting for WASM to load...");
      });
      return Concurrency.Bind(Concurrency.Sleep(2000),function()
      {
       return Concurrency.Return(null);
      });
     })),Concurrency.Delay(function()
     {
      return Concurrency.Bind(f(p),function()
      {
       return Concurrency.Return(null);
      });
     }));
    });
   }));
  })),null);
 };
 UI.clean=function()
 {
  UI.detailsV().Set("");
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
 UI.wsWrnsV=function()
 {
  SC$1.$cctor();
  return SC$1.wsWrnsV;
 };
 UI.wsErrsV=function()
 {
  SC$1.$cctor();
  return SC$1.wsErrsV;
 };
 UI.fsErrsV=function()
 {
  SC$1.$cctor();
  return SC$1.fsErrsV;
 };
 UI.detailsV=function()
 {
  SC$1.$cctor();
  return SC$1.detailsV;
 };
 WasmLoader.printfn=function(fmt)
 {
  return fmt(Remoting.messaging().wprintfn);
 };
 WasmLoader.wasmStatusV=function()
 {
  SC$1.$cctor();
  return SC$1.wasmStatusV;
 };
 WSFrameworkTest.mainDocNameVar=function()
 {
  SC$1.$cctor();
  return SC$1.mainDocNameVar;
 };
 WSFrameworkTest.mainDoc=function()
 {
  return Doc.Element("div",[],[Doc.Element("h1",[],[Doc.TextNode("Hello WSFramework")]),WSFrameworkTest.testVarInput(),WSFrameworkTest.testVarOut()]);
 };
 WSFrameworkTest.testVarOut=function()
 {
  return Doc.Element("div",[],[Doc.TextView(WSFrameworkTest.testVar().get_View())]);
 };
 WSFrameworkTest.testVarInput=function()
 {
  return Doc.Element("div",[],[Doc.Input([],WSFrameworkTest.testVar())]);
 };
 WSFrameworkTest.testVar=function()
 {
  SC$1.$cctor();
  return SC$1.testVar;
 };
 ModuleName=AssemblyData.ModuleName=Runtime.Class({
  get_Id2:function()
  {
   return Strings.Replace(this.get_Id(),"+",".");
  },
  get_Id:function()
  {
   return this.$0;
  }
 },null,ModuleName);
 TypeName=AssemblyData.TypeName=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,TypeName);
 MethodName=AssemblyData.MethodName=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,MethodName);
 AssemblyName=AssemblyData.AssemblyName=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,AssemblyName);
 AssemblyRef=AssemblyData.AssemblyRef=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,AssemblyRef);
 JSCode=AssemblyData.JSCode=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,JSCode);
 ModuleRef.New=function(name,asmName)
 {
  return{
   name:name,
   asmName:asmName
  };
 };
 TypeRef.New=function(name,asm)
 {
  return{
   name:name,
   asm:asm
  };
 };
 MethodDef.New=function(name,retType,parms,isField)
 {
  return{
   name:name,
   retType:retType,
   parms:parms,
   isField:isField
  };
 };
 ModuleDef.New=function(name,methods)
 {
  return{
   name:name,
   methods:methods
  };
 };
 AssemblyDef.New=function(name,self$1,modules,dependencies,javaScript)
 {
  return{
   name:name,
   self:self$1,
   modules:modules,
   dependencies:dependencies,
   javaScript:javaScript
  };
 };
 LoadAsm.fetchAsmData=function(folder,a)
 {
  var url,b;
  url=a.$0;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(TxtRuntime.AsyncMap(IO.asyncReadTextAtRuntime(false,"D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src","","JSON","",url.indexOf("/")!=-1?url:folder+url),function(t)
   {
    return Unchecked.Equals(typeof t,"string")?JSON.parse(t):t;
   }),function(a$1)
   {
    var n,prop,opt,s,j,prop$1,opt$1,d;
    return Concurrency.Return((n=new AssemblyName({
     $:0,
     $0:(opt=(prop="asName",prop in a$1?{
      $:1,
      $0:a$1[prop]
     }:null),opt==null?null:opt.$0)
    }),(s=new AssemblyRef({
     $:0,
     $0:url
    }),(j=new JSCode({
     $:0,
     $0:(opt$1=(prop$1="js",prop$1 in a$1?{
      $:1,
      $0:a$1[prop$1]
     }:null),opt$1==null?null:opt$1.$0)
    }),(d=Arrays.map(function(a$2)
    {
     return new AssemblyRef({
      $:0,
      $0:a$2
     });
    },a$1.dependencies),AssemblyDef.New(n,s,Arrays.map(function(mo)
    {
     var prop$2,opt$2;
     return ModuleDef.New(new ModuleName({
      $:0,
      $0:(opt$2=(prop$2="moName",prop$2 in mo?{
       $:1,
       $0:mo[prop$2]
      }:null),opt$2==null?null:opt$2.$0)
     }),Arrays.map(function(me)
     {
      var n$1,prop$3,opt$3,i,v,prop$4,opt$4,x,prop$5,opt$5,x$1,prop$6,opt$6;
      n$1=new MethodName({
       $:0,
       $0:(opt$3=(prop$3="meName",prop$3 in me?{
        $:1,
        $0:me[prop$3]
       }:null),opt$3==null?null:opt$3.$0)
      });
      i=(v=(prop$4="isField",prop$4 in me?{
       $:1,
       $0:me[prop$4]
      }:null),(opt$4=v==null?null:{
       $:1,
       $0:1*v.$0
      },opt$4==null?null:opt$4.$0))===1;
      return MethodDef.New(n$1,TypeRef.New(new TypeName({
       $:0,
       $0:(opt$5=(x=me.type,(prop$5="tName",prop$5 in x?{
        $:1,
        $0:x[prop$5]
       }:null)),opt$5==null?null:opt$5.$0)
      }),new AssemblyName({
       $:0,
       $0:(opt$6=(x$1=me.type,(prop$6="asm",prop$6 in x$1?{
        $:1,
        $0:x$1[prop$6]
       }:null)),opt$6==null?null:opt$6.$0)
      })),Arrays.map(function(p)
      {
       var prop$7,opt$7,prop$8,opt$8;
       return TypeRef.New(new TypeName({
        $:0,
        $0:(opt$7=(prop$7="tName",prop$7 in p?{
         $:1,
         $0:p[prop$7]
        }:null),opt$7==null?null:opt$7.$0)
       }),new AssemblyName({
        $:0,
        $0:(opt$8=(prop$8="asm",prop$8 in p?{
         $:1,
         $0:p[prop$8]
        }:null),opt$8==null?null:opt$8.$0)
       }));
      },me.parms),i);
     },mo.methods));
    },a$1.modules),d,j))))));
   });
  });
 };
 AssemblyData.assembliesDoc=function()
 {
  return Doc.Concat([Doc.Button("Load module:",[],function()
  {
   AssemblyData.loadThisModule();
  }),Doc.Input([],AssemblyData.thisModuleV()),AssemblyData.listAssembliesDoc(),AssemblyData.currentAssembly(),AssemblyData.styleDoc()]);
 };
 AssemblyData.currentAssembly=function()
 {
  var b;
  return Doc.BindView(Global.id,(b=View.get_Do(),View.Bind(function(a)
  {
   return a!=null&&a.$==1?View.Bind(function(a$1)
   {
    return a$1!=null&&a$1.$==1?View.Const(AssemblyData.assemblyDoc(a$1.$0)):View.Const(Doc.get_Empty());
   },AssemblyData.assemblies().TryFindByKeyAsView(a.$0)):View.Const(Doc.get_Empty());
  },AssemblyData.selectedAssembly().get_View())));
 };
 AssemblyData.assemblyDoc=function(asm)
 {
  var groups,y;
  function emptyDoc(mo,me)
  {
   return Doc.get_Empty();
  }
  function inputVar(mo,me)
  {
   if(me.retType.name.get_Id()!=="Var<string>")
    return Doc.get_Empty();
   else
    try
    {
     return Doc.Input(List.T.Empty,Global["eval"]((((Runtime.Curried3(function($1,$2,$3)
     {
      return $1(Utils.toSafe($2)+"."+Utils.toSafe($3)+"()");
     }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id())));
    }
    catch(e)
    {
     return Doc.TextNode(e.message);
    }
  }
  function printText(mo,me)
  {
   var $1,x;
   if(me.retType.name.get_Id().indexOf("<")!=-1)
    return Doc.get_Empty();
   else
    {
     try
     {
      $1=(x=Global["eval"]((((Runtime.Curried3(function($2,$3,$4)
      {
       return $2(Utils.toSafe($3)+"."+Utils.toSafe($4)+"()");
      }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id())),(function($2)
      {
       return function($3)
       {
        return $2(Utils.prettyPrint($3));
       };
      }(Global.id))(x));
     }
     catch(e)
     {
      $1=e.message;
     }
     return Doc.TextNode($1);
    }
  }
  function showDoc(mo,me)
  {
   return Doc.Concat([Doc.Button("Show",[],function()
   {
    var a,x;
    a=(x=(((Runtime.Curried3(function($1,$2,$3)
    {
     return $1(Utils.toSafe($2)+"."+Utils.toSafe($3)+"()");
    }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id()),(function($1)
    {
     return function($2)
     {
      return $1("WebSharper.UI.Doc.Concat(["+Utils.toSafe($2)+"])");
     };
    }(Global.id))(x));
    WSFrameworkTest.mainDocNameVar().Set(a);
   }),Doc.Button("Add",[],function()
   {
    var code,a,x;
    code=WSFrameworkTest.mainDocNameVar().Get();
    a=(x=(((Runtime.Curried3(function($1,$2,$3)
    {
     return $1(Utils.toSafe($2)+"."+Utils.toSafe($3)+"()");
    }))(Global.id))(mo.name.get_Id2()))(me.name.get_Id()),(((Runtime.Curried3(function($1,$2,$3)
    {
     return $1(Utils.toSafe($2)+", "+Utils.toSafe($3)+"])");
    }))(Global.id))(Slice.string(code,null,{
     $:1,
     $0:code.length-3
    })))(x));
    WSFrameworkTest.mainDocNameVar().Set(a);
   })]);
  }
  function m(oldp,t)
  {
   var p;
   p=t[1];
   return[[t[0],function(me)
   {
    return p(me)&&!oldp(me);
   }],function(me)
   {
    return p(me)||oldp(me);
   }];
  }
  groups=(y=List.ofArray([[function($1)
  {
   return function($2)
   {
    return inputVar($1,$2);
   };
  },function(me)
  {
   return Strings.StartsWith(me.retType.name.get_Id(),"Var<")&&me.isField;
  }],[function($1)
  {
   return function($2)
   {
    return emptyDoc($1,$2);
   };
  },function(me)
  {
   return Strings.StartsWith(me.retType.name.get_Id(),"View<")&&me.isField;
  }],[function($1)
  {
   return function($2)
   {
    return printText($1,$2);
   };
  },function(me)
  {
   return me.retType.name.get_Id()!=="Doc"&&me.isField&&!(me.retType.name.get_Id().indexOf("->")!=-1);
  }],[function($1)
  {
   return function($2)
   {
    return showDoc($1,$2);
   };
  },function(me)
  {
   return me.retType.name.get_Id()==="Doc"&&(me.isField||Seq.isEmpty(me.parms));
  }],[function($1)
  {
   return function($2)
   {
    return emptyDoc($1,$2);
   };
  },function()
  {
   return true;
  }]]),(((Runtime.Curried3(Seq.mapFold))(m))(function()
  {
   return false;
  }))(y))[0];
  return Doc.Concat([Doc.Element("h3",[],[Doc.TextNode(asm.name.get_Id())]),Doc.Element("div",[AttrModule.Class("wsfmwk-alternate")],List.ofSeq(Seq.delay(function()
  {
   return Seq.collect(function(m$1)
   {
    var f;
    f=m$1[0];
    return[AssemblyData.methodRows(m$1[1],asm,function($1,$2)
    {
     return(f($1))($2);
    })];
   },groups);
  })))]);
 };
 AssemblyData.styleDoc=function()
 {
  return Doc.Element("style",List.T.Empty,List.ofArray([Doc.TextNode("\r\n                    .wsfmwk-alternate > * :nth-child(even) {background: #CCF}\r\n                    .wsfmwk-alternate > * :nth-child(odd ) {background: #CFC}\r\n                    .wsfmwk-alternate td { border: white ; border-style: solid ; border-width: thin}\r\n                    .wsfmwk-alternate tr { border: white ; border-style: solid ; border-width: thin}\r\n                ")]));
 };
 AssemblyData.methodRows=function(p,asm,f)
 {
  return Doc.Element("table",[AttrProxy.Create("style","font-family: monospace")],List.ofSeq(Seq.delay(function()
  {
   return Seq.collect(function(mo)
   {
    var methods;
    methods=Seq.filter(p,mo.methods);
    return Seq.length(methods)>0?[Doc.Element("tr",[],List.ofSeq(Seq.delay(function()
    {
     return[Doc.Element("td",[],List.ofSeq(Seq.delay(function()
     {
      return Seq.append([Doc.Element("b",[],[Doc.TextNode(mo.name.get_Id2())])],Seq.delay(function()
      {
       return Seq.collect(function(me)
       {
        var x;
        return[Doc.Element("tr",[AssemblyData.click(function()
        {
         AssemblyData.selectedMethod().Set({
          $:1,
          $0:[mo.name,me.name]
         });
        })],[Doc.Element("td",[],[Doc.TextNode(me.name.get_Id())]),Doc.Element("td",[],[Doc.TextNode(me.isField?"":(x=Strings.concat(", ",Seq.map(function(t)
        {
         return t.name.get_Id();
        },me.parms)),(function($1)
        {
         return function($2)
         {
          return $1("("+Utils.toSafe($2)+")");
         };
        }(Global.id))(x)))]),Doc.Element("td",[AssemblyData.nobr()],[Doc.TextNode(me.isField?":":" -> ")]),Doc.Element("td",[],[Doc.TextNode(me.retType.name.get_Id())]),Doc.Element("td",[],[f(mo,me)])])];
       },methods);
      }));
     })))];
    })))]:[];
   },asm.modules);
  })));
 };
 AssemblyData.selectedMethod=function()
 {
  SC$1.$cctor();
  return SC$1.selectedMethod;
 };
 AssemblyData.listAssembliesDoc=function()
 {
  var m;
  function f(r,asmW)
  {
   return Doc.Element("tr",[],[Doc.Element("td",[AssemblyData.click(function()
   {
    AssemblyData.selectedAssembly().Set({
     $:1,
     $0:r
    });
   })],[Doc.TextView(View.Map(function($1)
   {
    return $1.name.get_Id();
   },asmW))])]);
  }
  return Doc.Element("table",[],[(m=AssemblyData.assemblies(),Doc.ConvertSeqBy(m.key,function($1)
  {
   return function($2)
   {
    return f($1,$2);
   };
  },m["var"].get_View()))]);
 };
 AssemblyData.selectedAssembly=function()
 {
  SC$1.$cctor();
  return SC$1.selectedAssembly;
 };
 AssemblyData.click$1052$37=Runtime.Curried3(function(f,$1,$2)
 {
  return f();
 });
 AssemblyData.click=function(f)
 {
  return AttrProxy.HandlerImpl("click",function()
  {
   return function()
   {
    return f();
   };
  });
 };
 AssemblyData.nobr=function()
 {
  return AttrProxy.Create("style","white-space: nowrap");
 };
 AssemblyData.loadThisModule=function()
 {
  Concurrency.Start(AssemblyData.loadAssembly(new AssemblyRef({
   $:0,
   $0:AssemblyData.thisModuleV().Get()
  })),null);
 };
 AssemblyData.thisModuleV=function()
 {
  SC$1.$cctor();
  return SC$1.thisModuleV;
 };
 AssemblyData.alreadyLoaded=function()
 {
  return Seq.length((AssemblyData.assemblies())["var"].Get())>0;
 };
 AssemblyData.loadTesting=function()
 {
  Concurrency.Start(AssemblyData.loadAssembly(new AssemblyRef({
   $:0,
   $0:(function($1)
   {
    return function($2)
    {
     return $1("testing.asm?q="+Utils.prettyPrint($2));
    };
   }(Global.id))(Date.now())
  })),null);
 };
 AssemblyData.loadAssembly=function(asm)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(AssemblyData["loadAssembly'"](AssemblyData.isLoaded,function(d)
   {
    AssemblyData.loadDef(d);
   },function(a)
   {
    return LoadAsm.fetchAsmData(AssemblyData.Folder(),a);
   },asm),function()
   {
    var asms;
    asms=Arrays.ofSeq((AssemblyData.assemblies())["var"].Get());
    self.IntelliFactory.Runtime.Start();
    AssemblyData.saveAssemblies(asms);
    return Concurrency.Zero();
   });
  });
 };
 AssemblyData.saveAssemblies=function(asms)
 {
  AssemblyData.assemblies().Set(asms);
 };
 AssemblyData.Folder=function()
 {
  SC$1.$cctor();
  return SC$1.Folder;
 };
 AssemblyData.loadDef=function(def)
 {
  var asms;
  try
  {
   asms=List.ofSeq((AssemblyData.assemblies())["var"].Get());
   Global["eval"]((((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("console.log('loading "+Utils.toSafe($2)+" ...');"+Utils.toSafe($3));
   }))(Global.id))(def.name.get_Id()))(def.javaScript.get_Id()));
   AssemblyData.assemblies().Set(new List.T({
    $:1,
    $0:def,
    $1:asms
   }));
  }
  catch(e)
  {
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
 AssemblyData.isLoaded=function(asmRef)
 {
  return AssemblyData.assemblies().TryFind(function(ad)
  {
   return Unchecked.Equals(ad.self,asmRef);
  })!=null;
 };
 AssemblyData.assemblies=function()
 {
  SC$1.$cctor();
  return SC$1.assemblies;
 };
 AssemblyData["loadAssembly'"]=function(isLoaded,loadDef,fetchAsmData,asm)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return isLoaded(asm)?Concurrency.Zero():Concurrency.Bind(fetchAsmData(asm),function(a)
   {
    return Concurrency.Combine(Concurrency.For(a.dependencies,function(a$1)
    {
     return Concurrency.Bind(AssemblyData["loadAssembly'"](isLoaded,loadDef,fetchAsmData,a$1),function()
     {
      return Concurrency.Return(null);
     });
    }),Concurrency.Delay(function()
    {
     loadDef(a);
     return Concurrency.Zero();
    }));
   });
  });
 };
 WSFramework.main=function()
 {
  var x,a;
  if(!(!self.document))
   if(AssemblyData.alreadyLoaded())
    {
     x=Doc.Element("div",[],[WSFramework.mainDocInput(),AssemblyData.assembliesDoc(),UI.mainDoc(),Doc.Element("div",[],[WSFramework.mainSubDoc()])]);
     a=self.document.body;
     Templates.LoadLocalTemplates("");
     Doc.Run(a,x);
    }
   else
    AssemblyData.loadTesting();
 };
 WSFramework.mainSubDoc=function()
 {
  SC$1.$cctor();
  return SC$1.mainSubDoc;
 };
 WSFramework.mainDocInput=function()
 {
  return Doc.Element("div",[],[Doc.Input([AttrProxy.Create("style","width: 100%")],WSFramework.mainDocNameVar())]);
 };
 WSFramework.mainDocVar=function()
 {
  SC$1.$cctor();
  return SC$1.mainDocVar;
 };
 WSFramework.mainDocNameVar=function()
 {
  SC$1.$cctor();
  return SC$1.mainDocNameVar$1;
 };
 SC$1.$cctor=function()
 {
  var f,g;
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
  SC$1.wasmStatusV=Var$1.Create$1(WasmStatus.WasmNotLoaded);
  SC$1.originalProvider=Remoting$1.AjaxProvider();
  SC$1.queues=new Dictionary.New$5();
  SC$1.messaging=IMessagingO.New(function(h)
  {
   return function(d)
   {
    return self.WASM_WsTranslator_FsRoot_WsTranslator_runRpc(h,d);
   };
  },function(t)
  {
   Remoting.returnValue0(t[0],t[1]);
  },function(t)
  {
   Remoting.returnExn0(t[0],t[1]);
  },function($1)
  {
   return function($2)
   {
    return $1("EARLY PRINTING!: "+Utils.toSafe($2));
   };
  }(function(s)
  {
   console.log(s);
  }));
  SC$1.workerO=null;
  SC$1.rootPath="/WASM/publish/";
  SC$1.detailsV=Var$1.Create$1("");
  SC$1.fsErrsV=Var$1.Create$1([]);
  SC$1.wsErrsV=Var$1.Create$1([]);
  SC$1.wsWrnsV=Var$1.Create$1([]);
  SC$1.codeV=Var$1.Create$1("\r\n    open WebSharper\r\n    open WebSharper.UI\r\n    open WebSharper.UI.Html\r\n    \r\n    let name = Var.Create \"World\"\r\n    \r\n    [< Inline \"'Hello inline '\" >]\r\n    let bDoc() = \"Hello\"\r\n    \r\n    let cDoc() = text name.V\r\n    \r\n    let aDoc() = \r\n        div [] [\r\n            text <| bDoc()\r\n            cDoc()\r\n        ]\r\n    \r\n            ");
  SC$1.optsV=Var$1.Create$1(Strings.concat("\n",Seq.map(Strings.Trim,Strings.SplitChars("\r\n                                    /tmp/source.fsx\r\n                                    -o:source.exe\r\n                                    --simpleresolution\r\n                                    --nowarn:3186\r\n                                    --optimize-\r\n                                    --noframework\r\n                                    --fullpaths\r\n                                    --warn:3\r\n                                    --target:exe\r\n                                    -r:/dlls/WebSharper.Core.dll\r\n                                    -r:/dlls/WebSharper.UI.dll\r\n                                    -r:/dlls/WebSharper.Sitelets.dll\r\n                                    -r:/managed/FSharp.Core.dll\r\n                                    -r:/managed/mscorlib.dll\r\n                                    -r:/managed/netstandard.dll\r\n                                    -r:/managed/System.dll\r\n                                    -r:/managed/System.Core.dll\r\n                                    -r:/managed/System.IO.dll\r\n                                    -r:/managed/System.Runtime.dll\r\n                                    -r:/managed/System.Net.Http.dll\r\n                                    -r:/managed/System.Threading.dll\r\n                                    -r:/managed/System.Numerics.dll\r\n                                ",["\n"],0))));
  !(!self.document)?Remoting.set_messaging(IMessagingO.New(Remoting.messaging().runRpc,Remoting.messaging().returnValue,Remoting.messaging().returnExn,function(txt)
  {
   var pre;
   console.log(txt);
   pre=UI.detailsV().Get();
   UI.detailsV().Set(pre+(pre===""?"":"\n")+txt);
  })):void 0;
  SC$1.testVar=Var$1.Create$1("Hello WSFrameWork");
  SC$1.mainDocNameVar=Var$1.Create$1("FsRoot.TestingJS.WSFrameworkTest.mainDoc()");
  SC$1.assemblies=ListModel.Create(function(ad)
  {
   return ad.name;
  },List.T.Empty);
  SC$1.Folder="/EPFileX/Assemblies/";
  SC$1.thisModuleV=Var$1.Create$1("Covid.asm");
  SC$1.selectedAssembly=Var$1.Create$1(null);
  SC$1.selectedMethod=Var$1.Create$1(null);
  SC$1.mainDocNameVar$1=WSFrameworkTest.mainDocNameVar();
  SC$1.mainDocVar=Var$1.Create$1(Doc.Element("h1",[],[Doc.TextNode("mainDocVar not initialized")]));
  View.Sink(function(nm)
  {
   var docObj;
   try
   {
    docObj=Global["eval"](nm);
    docObj instanceof Doc?WSFramework.mainDocVar().Set(docObj):typeof docObj=="string"?WSFramework.mainDocVar().Set(Doc.TextNode(docObj)):docObj instanceof UI$1.Var?WSFramework.mainDocVar().Set(Doc.TextView(docObj.get_View())):docObj instanceof View?WSFramework.mainDocVar().Set(Doc.TextView(docObj)):console.log("mainDocNameVar type mismatch: ",docObj);
   }
   catch(e)
   {
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
  },WSFramework.mainDocNameVar().get_View());
  SC$1.mainSubDoc=Doc.BindView(Global.id,WSFramework.mainDocVar().get_View());
 };
 testing_GeneratedPrintf.p=function($1)
 {
  return $1.$==4?"WasmWorkerLoaded":$1.$==3?"WasmWorkerLoading":$1.$==2?"WasmLoaded":$1.$==1?"WasmLoading":"WasmNotLoaded";
 };
 testing_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==1?"PublicProxy "+Utils.prettyPrint($1.$0):"SourceWarning "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$2=function($1)
 {
  return $1.$==6?"FieldNotFound ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":$1.$==5?"ConstructorNotFound ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.printList(Utils.prettyPrint,$1.$2)+")":$1.$==4?"MethodNameNotFound ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.printList(Utils.prettyPrint,$1.$2)+")":$1.$==3?"MethodNotFound ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.printList(Utils.prettyPrint,$1.$2)+")":$1.$==2?"TypeNotFound "+Utils.prettyPrint($1.$0):$1.$==1?"NameConflict ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":"SourceError "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$1=function($1)
 {
  return $1==null?"null":"Some "+GeneratedPrintf.p($1.$0);
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("FileName = "+Utils.prettyPrint($1.FileName))+"; "+("Start = "+("("+Utils.prettyPrint($1.Start[0])+", "+Utils.prettyPrint($1.Start[1])+")"))+"; "+("End = "+("("+Utils.prettyPrint($1.End[0])+", "+Utils.prettyPrint($1.End[1])+")"))+"}";
 };
 Runtime.OnLoad(function()
 {
  WSFramework.main();
 });
}());

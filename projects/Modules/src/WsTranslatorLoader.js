(function()
{
 "use strict";
 var Global,FsRoot,Library,String,ParseO,LibraryJS,Pojo,WsTranslatorLoader,WasmStatus,Remoting,IMessagingO,ReturnQueue,WebSharper,Obj,CustomXhrProvider,WWorker,WasmLoad,Require,GlobalModule,UI,SC$1,WsTranslatorLoader_GeneratedPrintf,GeneratedPrintf,Strings,List,Seq,Slice,Operators,Char,Unchecked,Utils,console,IntelliFactory,Runtime,Concurrency,Remoting$1,WsTranslator,Arrays,Enumerator,UI$1,Client,Templates,Doc,View,AjaxRemotingProvider,AttrProxy,FShUI,DateUtil,Numeric,System,Guid,Var$1,Collections,Dictionary;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Pojo=LibraryJS.Pojo=LibraryJS.Pojo||{};
 WsTranslatorLoader=LibraryJS.WsTranslatorLoader=LibraryJS.WsTranslatorLoader||{};
 WasmStatus=WsTranslatorLoader.WasmStatus=WsTranslatorLoader.WasmStatus||{};
 Remoting=WsTranslatorLoader.Remoting=WsTranslatorLoader.Remoting||{};
 IMessagingO=Remoting.IMessagingO=Remoting.IMessagingO||{};
 ReturnQueue=Remoting.ReturnQueue=Remoting.ReturnQueue||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 CustomXhrProvider=Remoting.CustomXhrProvider=Remoting.CustomXhrProvider||{};
 WWorker=WsTranslatorLoader.WWorker=WsTranslatorLoader.WWorker||{};
 WasmLoad=WsTranslatorLoader.WasmLoad=WsTranslatorLoader.WasmLoad||{};
 Require=WasmLoad.Require=WasmLoad.Require||{};
 GlobalModule=WasmLoad.GlobalModule=WasmLoad.GlobalModule||{};
 UI=WsTranslatorLoader.UI=WsTranslatorLoader.UI||{};
 SC$1=Global.StartupCode$WsTranslatorLoader$WsTranslatorLoader=Global.StartupCode$WsTranslatorLoader$WsTranslatorLoader||{};
 WsTranslatorLoader_GeneratedPrintf=Global.WsTranslatorLoader_GeneratedPrintf=Global.WsTranslatorLoader_GeneratedPrintf||{};
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
 FShUI=LibraryJS&&LibraryJS.FShUI;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 System=Global.System;
 Guid=System&&System.Guid;
 Var$1=UI$1&&UI$1.Var$1;
 Collections=WebSharper&&WebSharper.Collections;
 Dictionary=Collections&&Collections.Dictionary;
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
 Library.Error$2=function(a)
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
    WsTranslatorLoader.printfn(function($2)
    {
     return $2("Worker terminated!");
    });
    WsTranslatorLoader.wasmStatusV().Set(WasmStatus.WasmNotLoaded);
   }
  else
   WsTranslatorLoader.printfn(function($2)
   {
    return $2("Worker is not present");
   });
 };
 WWorker.fromWorker=function(evt)
 {
  var m,v;
  m=evt.data;
  m.$==1?Remoting.returnExn0(m.$0,m.$1):m.$==2?(WsTranslatorLoader.printfn(function($1)
  {
   return function($2)
   {
    return $1(Utils.toSafe($2));
   };
  }))(m.$0):m.$==3?(v=m.$0,!Unchecked.Equals(WsTranslatorLoader.wasmStatusV().Get(),v)?WsTranslatorLoader.wasmStatusV().Set(v):void 0):Remoting.returnValue0(m.$0,m.$1);
 };
 WWorker.receiveMessage=function(loadInThisThread,evt)
 {
  var m;
  m=evt.data;
  m.$==1?(WsTranslatorLoader.printfn(function($1)
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
   WsTranslatorLoader.printfn(function($1)
   {
    return $1("Already in a worker cannot load Wasm in another worker");
   });
  else
   if(WsTranslatorLoader.wasmStatusV().Get().$!==0)
    (WsTranslatorLoader.printfn(function($1)
    {
     return function($2)
     {
      return $1("Wasm is already "+WsTranslatorLoader_GeneratedPrintf.p($2));
     };
    }))(WsTranslatorLoader.wasmStatusV().Get());
   else
    {
     WsTranslatorLoader.wasmStatusV().Set(WasmStatus.WasmLoading);
     WsTranslatorLoader.printfn(function($1)
     {
      return $1("Initiating WebWorker");
     });
     w=new Global.Worker(Runtime.ScriptPath("WsTranslatorLoader","WsTranslatorLoader.worker.js"));
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
  $3=WsTranslatorLoader.wasmStatusV().Get();
  switch($2?$3.$==3?1:$3.$==1?2:$3.$==2?4:$3.$==0?6:0:$3.$==1?1:$3.$==3?3:$3.$==4?5:$3.$==0?6:0)
  {
   case 0:
    null;
    break;
   case 1:
    WsTranslatorLoader.printfn(function($4)
    {
     return $4("WASM is loading");
    });
    break;
   case 2:
    WsTranslatorLoader.printfn(function($4)
    {
     return $4("WASM is loading in the main thread");
    });
    break;
   case 3:
    WsTranslatorLoader.printfn(function($4)
    {
     return $4("WASM is loading in a WebWorker");
    });
    break;
   case 4:
    WsTranslatorLoader.printfn(function($4)
    {
     return $4("WASM is loaded in the main thread");
    });
    break;
   case 5:
    WsTranslatorLoader.printfn(function($4)
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
      WsTranslatorLoader.printfn(function($4)
      {
       return $4("WASM Initialized!");
      });
      WsTranslatorLoader.wasmStatusV().Set(!self.document?WasmStatus.WasmWorkerLoaded:WasmStatus.WasmLoaded);
      ok();
     }
     return Concurrency.Start((b=null,Concurrency.Delay(function()
     {
      WsTranslatorLoader.printfn(function($4)
      {
       return $4("Loading WASM. Hold on, this will take a while...");
      });
      WsTranslatorLoader.wasmStatusV().Set(!self.document?WasmStatus.WasmWorkerLoading:WasmStatus.WasmLoading);
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
          a=WsTranslatorLoader.printfn(function($4)
          {
           return function($5)
           {
            return $4(Utils.toSafe($5));
           };
          });
          self.Module.print=a;
          a$1=WsTranslatorLoader.printfn(function($4)
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
     (WsTranslatorLoader.printfn(function($1)
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
     return $2(WsTranslatorLoader_GeneratedPrintf.p($3));
    };
   }(Global.id))($1);
  },WsTranslatorLoader.wasmStatusV().get_View()))]),Doc.Element("span",[],[Doc.Button("Load as Worker",[],function()
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
   WsTranslatorLoader.printfn(function($1)
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
    return $1("("+WsTranslatorLoader_GeneratedPrintf.p$1($2[0])+", "+WsTranslatorLoader_GeneratedPrintf.p$2($2[1])+")");
   };
  }(Global.id),function(t)
  {
   return c([t[0],t[1]]);
  }),UI.wsErrsV().get_View()),UI.showMessages("Ws  Warnings",(c$1=function($1)
  {
   return function($2)
   {
    return $1("("+WsTranslatorLoader_GeneratedPrintf.p$1($2[0])+", "+WsTranslatorLoader_GeneratedPrintf.p$3($2[1])+")");
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
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("WsTranslator:FsRoot.WsTranslator+Rpc.translateFsToJsRpc:-829776470",[projectName,opts,code]),function(a)
   {
    var wsO,asmO,a$1,asm,b$1;
    wsO=a[1];
    UI.fsErrsV().Set(a[0]);
    return wsO==null?(UI.clean(),UI.wsErrsV().Set([]),UI.wsWrnsV().Set([]),Concurrency.Zero()):(asmO=wsO.$0[0],(a$1=asmO==null?"No translation":(asm=asmO.$0,(Concurrency.Start((b$1=null,Concurrency.Delay(function()
    {
     return Concurrency.Bind(FShUI.processAssembly(asm),function()
     {
      return Concurrency.Return(null);
     });
    })),null),"Assembly (asm) loaded")),UI.detailsV().Set(a$1),UI.wsErrsV().Set(Arrays.ofSeq(wsO.$0[1])),UI.wsWrnsV().Set(Arrays.ofSeq(wsO.$0[2])),Concurrency.Zero()));
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
   return Concurrency.Combine(WsTranslatorLoader.wasmStatusV().Get().$===0?(WasmLoad.loadWasmInWorker(UI.optsV().Get()),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(50),function()
    {
     return Concurrency.Combine(Concurrency.While(function()
     {
      var m;
      m=WsTranslatorLoader.wasmStatusV().Get();
      return m.$==2?false:m.$!=4;
     },Concurrency.Delay(function()
     {
      WsTranslatorLoader.printfn(function($1)
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
 WsTranslatorLoader.printfn=function(fmt)
 {
  return fmt(Remoting.messaging().wprintfn);
 };
 WsTranslatorLoader.wasmStatusV=function()
 {
  SC$1.$cctor();
  return SC$1.wasmStatusV;
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
  SC$1.codeV=Var$1.Create$1("\r\n            open WebSharper\r\n            open WebSharper.UI\r\n            open WebSharper.UI.Html\r\n            \r\n            let name = Var.Create \"World\"\r\n            \r\n            [< Inline \"'Hello inline '\" >]\r\n            let bDoc() = \"Hello\"\r\n            \r\n            let cDoc() = text name.V\r\n            \r\n            let aDoc() = \r\n                div [] [\r\n                    text <| bDoc()\r\n                    cDoc()\r\n                ]\r\n            \r\n                    ");
  SC$1.optsV=Var$1.Create$1(Strings.concat("\n",Seq.map(Strings.Trim,Strings.SplitChars("\r\n                                            /tmp/source.fsx\r\n                                            -o:source.exe\r\n                                            --simpleresolution\r\n                                            --nowarn:3186\r\n                                            --optimize-\r\n                                            --noframework\r\n                                            --fullpaths\r\n                                            --warn:3\r\n                                            --target:exe\r\n                                            -r:/dlls/WebSharper.Core.dll\r\n                                            -r:/dlls/WebSharper.UI.dll\r\n                                            -r:/dlls/WebSharper.Sitelets.dll\r\n                                            -r:/managed/FSharp.Core.dll\r\n                                            -r:/managed/mscorlib.dll\r\n                                            -r:/managed/netstandard.dll\r\n                                            -r:/managed/System.dll\r\n                                            -r:/managed/System.Core.dll\r\n                                            -r:/managed/System.IO.dll\r\n                                            -r:/managed/System.Runtime.dll\r\n                                            -r:/managed/System.Net.Http.dll\r\n                                            -r:/managed/System.Threading.dll\r\n                                            -r:/managed/System.Numerics.dll\r\n                                        ",["\n"],0))));
  !(!self.document)?Remoting.set_messaging(IMessagingO.New(Remoting.messaging().runRpc,Remoting.messaging().returnValue,Remoting.messaging().returnExn,function(txt)
  {
   var pre;
   console.log(txt);
   pre=UI.detailsV().Get();
   UI.detailsV().Set(pre+(pre===""?"":"\n")+txt);
  })):void 0;
 };
 WsTranslatorLoader_GeneratedPrintf.p=function($1)
 {
  return $1.$==4?"WasmWorkerLoaded":$1.$==3?"WasmWorkerLoading":$1.$==2?"WasmLoaded":$1.$==1?"WasmLoading":"WasmNotLoaded";
 };
 WsTranslatorLoader_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==1?"PublicProxy "+Utils.prettyPrint($1.$0):"SourceWarning "+Utils.prettyPrint($1.$0);
 };
 WsTranslatorLoader_GeneratedPrintf.p$2=function($1)
 {
  return $1.$==6?"FieldNotFound ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":$1.$==5?"ConstructorNotFound ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.printList(Utils.prettyPrint,$1.$2)+")":$1.$==4?"MethodNameNotFound ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.printList(Utils.prettyPrint,$1.$2)+")":$1.$==3?"MethodNotFound ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.printList(Utils.prettyPrint,$1.$2)+")":$1.$==2?"TypeNotFound "+Utils.prettyPrint($1.$0):$1.$==1?"NameConflict ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":"SourceError "+Utils.prettyPrint($1.$0);
 };
 WsTranslatorLoader_GeneratedPrintf.p$1=function($1)
 {
  return $1==null?"null":"Some "+GeneratedPrintf.p($1.$0);
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("FileName = "+Utils.prettyPrint($1.FileName))+"; "+("Start = "+("("+Utils.prettyPrint($1.Start[0])+", "+Utils.prettyPrint($1.Start[1])+")"))+"; "+("End = "+("("+Utils.prettyPrint($1.End[0])+", "+Utils.prettyPrint($1.End[1])+")"))+"}";
 };
}());
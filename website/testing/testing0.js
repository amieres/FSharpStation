(function()
{
 "use strict";
 var Global,FsRoot,Library,String,ParseO,LibraryJS,Pojo,WasmLoader,WasmStatus,Remoting,IMessagingO,ReturnQueue,WebSharper,Obj,CustomXhrProvider,WWorker,WasmLoad,Require,Global$1,SC$1,testing_GeneratedPrintf,GeneratedPrintf,Strings,List,Seq,Slice,Operators,Char,Unchecked,Utils,console,IntelliFactory,Runtime,Concurrency,Remoting$1,Enumerator,Arrays,UI,Client,Templates,Doc,View,AjaxRemotingProvider,AttrProxy,DateUtil,Numeric,System,Guid,Var$1,Collections,Dictionary,Lazy;
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
 Global$1=WasmLoad.Global=WasmLoad.Global||{};
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
 Enumerator=WebSharper&&WebSharper.Enumerator;
 Arrays=WebSharper&&WebSharper.Arrays;
 UI=WebSharper&&WebSharper.UI;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Doc=UI&&UI.Doc;
 View=UI&&UI.View;
 AjaxRemotingProvider=Remoting$1&&Remoting$1.AjaxRemotingProvider;
 AttrProxy=UI&&UI.AttrProxy;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 System=Global.System;
 Guid=System&&System.Guid;
 Var$1=UI&&UI.Var$1;
 Collections=WebSharper&&WebSharper.Collections;
 Dictionary=Collections&&Collections.Dictionary;
 Lazy=WebSharper&&WebSharper.Lazy;
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
 WasmStatus.WasmWorkerFinished={
  $:6
 };
 WasmStatus.WasmWorkerLoaded={
  $:5
 };
 WasmStatus.WasmWorkerLoading={
  $:4
 };
 WasmStatus.WasmFinished={
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
 Remoting.appendMsg=function(txt)
 {
  var pre;
  console.log(txt);
  !(!self.document)?(pre=WasmLoader.detailsV().Get(),WasmLoader.detailsV().Set(pre+(pre===""?"":"\n")+txt)):void 0;
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
 WWorker.receiveMessage=function(evt)
 {
  var m;
  m=evt.data;
  m.$==1?(WasmLoader.printfn(function($1)
  {
   return function($2)
   {
    return $1(Utils.toSafe($2));
   };
  }))(m.$0):Remoting.callRunRpc(m.$0,m.$1);
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
 Global$1=WasmLoad.Global=Runtime.Class({},Obj,Global$1);
 Global$1.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Global$1);
 WasmLoad.loadWasmInWorker=function()
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
     w=new Global.Worker(Runtime.ScriptPath("testing","testing.WasmWorker.js"));
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
     },function(t)
     {
      Remoting.appendMsg(t);
     }));
     Remoting.installProvider();
    }
 };
 WasmLoad.loadWasm=function()
 {
  SC$1.$cctor();
  return SC$1.loadWasm;
 };
 WasmLoad.preloadFiles=function()
 {
  var e,f,pathTo,e$1,file;
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
  e=Enumerator.Get(WasmLoad.filesToPreload());
  try
  {
   while(e.MoveNext())
    {
     f=e.Current();
     pathTo=f[1];
     try
     {
      self.FS.mkdir(pathTo);
     }
     catch(e$2)
     {
      null;
     }
     e$1=Enumerator.Get(f[2]);
     try
     {
      while(e$1.MoveNext())
       {
        file=e$1.Current();
        self.FS.createPreloadedFile(pathTo,file,f[0]+"/"+file,1,Global.$op21);
       }
     }
     finally
     {
      if(typeof e$1=="object"&&"Dispose"in e$1)
       e$1.Dispose();
     }
    }
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 WasmLoad.filesToPreload=function()
 {
  SC$1.$cctor();
  return SC$1.filesToPreload;
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
 WasmLoader.main=function()
 {
  var x,a;
  x=WasmLoader.mainDoc();
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 WasmLoader.mainDoc=function()
 {
  function a($1,$2)
  {
   return Doc.Element("li",[],[Doc.TextNode((function($3)
   {
    return function($4)
    {
     return $3("("+testing_GeneratedPrintf.p$1($4[0])+", "+testing_GeneratedPrintf.p$2($4[1])+")");
    };
   }(Global.id))([$1,$2]))]);
  }
  function a$1($1,$2)
  {
   return Doc.Element("li",[],[Doc.TextNode((function($3)
   {
    return function($4)
    {
     return $3("("+testing_GeneratedPrintf.p$1($4[0])+", "+testing_GeneratedPrintf.p$3($4[1])+")");
    };
   }(Global.id))([$1,$2]))]);
  }
  return Doc.Element("div",[],[Doc.Element("h1",[],[Doc.TextNode("HELLO WASM!")]),Doc.Element("h2",[],[Doc.TextView(View.Map(function($1)
  {
   return(function($2)
   {
    return function($3)
    {
     return $2(testing_GeneratedPrintf.p($3));
    };
   }(Global.id))($1);
  },WasmLoader.wasmStatusV().get_View()))]),Doc.Element("div",[],[Doc.InputArea([],WasmLoader.codeV()),Doc.InputArea([],WasmLoader.optsV())]),Doc.Element("span",[],[Doc.Button("Check",[],function()
  {
   WasmLoader.callWasmA(function(t)
   {
    return WasmLoader.parseAndCheckProject(t[0],t[1],t[2]);
   },WasmLoader.getParms());
  }),Doc.Button("Translate",[],function()
  {
   WasmLoader.detailsV().Set("");
   WasmLoader.printfn(function($1)
   {
    return $1("Initiating translation:");
   });
   WasmLoader.callWasmA(function(t)
   {
    return WasmLoader.translateToJs(t[0],t[1],t[2]);
   },WasmLoader.getParms());
  }),Doc.Button("Dir",[],function()
  {
   WasmLoader.callWasmA(function(d)
   {
    return(new AjaxRemotingProvider.New()).Async("WsTranslator:FsRoot.WsTranslator.dir:-1181784350",[d]);
   },"/");
  }),Doc.Button("Clean",[],function()
  {
   WasmLoader.detailsV().Set("");
  }),Doc.Button("Load as Worker",[],function()
  {
   WasmLoad.loadWasmInWorker();
  })]),Doc.Element("ol",[],[Doc.Convert(function(x)
  {
   return Doc.Element("li",[],[Doc.TextNode((function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(x))]);
  },WasmLoader.fsErrsV().get_View())]),Doc.Element("ol",[],[Doc.Convert(function($1)
  {
   return a($1[0],$1[1]);
  },WasmLoader.wsErrsV().get_View())]),Doc.Element("ol",[],[Doc.Convert(function($1)
  {
   return a$1($1[0],$1[1]);
  },WasmLoader.wsWrnsV().get_View())]),Doc.Element("div",[AttrProxy.Create("style","font-family: monospace; white-space:pre")],[Doc.TextView(WasmLoader.detailsV().get_View())])]);
 };
 WasmLoader.getParms=function()
 {
  return["WasmTest",Strings.SplitChars("fsc.exe\n"+WasmLoader.optsV().Get(),["\n"],0),WasmLoader.codeV().Get()];
 };
 WasmLoader.callWasmA=function(f,p)
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(50),function()
   {
    return Concurrency.Bind(Concurrency.AwaitTask1(WasmLoad.loadWasm().f()),function()
    {
     return Concurrency.Bind(f(p),function()
     {
      return Concurrency.Return(null);
     });
    });
   });
  })),null);
 };
 WasmLoader.translateToJs=function(projectName,opts,code)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("WsTranslator:FsRoot.WsTranslator.translateFsToJsRpc:957452724",[projectName,opts,code]),function(a)
   {
    var wsO;
    wsO=a[1];
    WasmLoader.fsErrsV().Set(a[0]);
    return wsO==null?(WasmLoader.detailsV().Set(""),WasmLoader.wsErrsV().Set([]),WasmLoader.wsWrnsV().Set([]),Concurrency.Zero()):(WasmLoader.detailsV().Set(wsO.$0[0]),WasmLoader.wsErrsV().Set(Arrays.ofSeq(wsO.$0[1])),WasmLoader.wsWrnsV().Set(Arrays.ofSeq(wsO.$0[2])),Concurrency.Zero());
   });
  });
 };
 WasmLoader.parseAndCheckProject=function(projectName,opts,code)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("WsTranslator:FsRoot.WsTranslator.parseAndCheckProjectRpc:-1474163089",[projectName,opts,code]),function(a)
   {
    var a$1;
    WasmLoader.fsErrsV().Set(Arrays.ofSeq(a[0]));
    a$1=(function($1)
    {
     return function($2)
     {
      return $1("("+Utils.prettyPrint($2[0])+", "+Utils.printArray(Utils.prettyPrint,$2[1])+")");
     };
    }(Global.id))([a[2],a[1]]);
    WasmLoader.detailsV().Set(a$1);
    return Concurrency.Zero();
   });
  });
 };
 WasmLoader.printfn=function(fmt)
 {
  return fmt(Remoting.messaging().wprintfn);
 };
 WasmLoader.optsV=function()
 {
  SC$1.$cctor();
  return SC$1.optsV;
 };
 WasmLoader.codeV=function()
 {
  SC$1.$cctor();
  return SC$1.codeV;
 };
 WasmLoader.wsWrnsV=function()
 {
  SC$1.$cctor();
  return SC$1.wsWrnsV;
 };
 WasmLoader.wsErrsV=function()
 {
  SC$1.$cctor();
  return SC$1.wsErrsV;
 };
 WasmLoader.fsErrsV=function()
 {
  SC$1.$cctor();
  return SC$1.fsErrsV;
 };
 WasmLoader.detailsV=function()
 {
  SC$1.$cctor();
  return SC$1.detailsV;
 };
 WasmLoader.wasmStatusV=function()
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
  SC$1.detailsV=Var$1.Create$1("");
  SC$1.fsErrsV=Var$1.Create$1([]);
  SC$1.wsErrsV=Var$1.Create$1([]);
  SC$1.wsWrnsV=Var$1.Create$1([]);
  SC$1.codeV=Var$1.Create$1("printfn \"Hello\"");
  SC$1.optsV=Var$1.Create$1("/tmp/source.fsx\n-o:source.exe\n--simpleresolution\n--nowarn:3186\n--optimize-\n--noframework\n--fullpaths\n--warn:3\n--target:exe\n-r:/tmp/FSharp.Core.dll\n-r:/tmp/mscorlib.dll\n-r:/tmp/netstandard.dll\n-r:/tmp/System.dll\n-r:/tmp/System.Core.dll\n-r:/tmp/System.IO.dll\n-r:/tmp/System.Runtime.dll\n-r:/tmp/System.Net.Http.dll\n-r:/tmp/System.Threading.dll\n-r:/tmp/System.Numerics.dll");
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
  },function(t)
  {
   Remoting.appendMsg(t);
  });
  SC$1.workerO=null;
  SC$1.rootPath="/WASM/publish/";
  SC$1.filesToPreload=List.ofArray([[WasmLoad.rootPath()+"dlls","/tmp",["WebSharper.Main.dll","WebSharper.Collections.dll","WebSharper.Control.dll","WebSharper.Web.dll","WebSharper.Sitelets.dll","WebSharper.UI.dll","WebSharper.UI.Templating.Runtime.dll","WebSharper.Data.dll"]],[WasmLoad.rootPath()+"managed","/tmp",Arrays.choose(function(a)
  {
   var a$1;
   a$1=String.StartsWith("-r:/tmp/",a);
   return a$1!=null&&a$1.$==1?{
    $:1,
    $0:a$1.$0
   }:null;
  },Strings.SplitChars(WasmLoader.optsV().Get(),["\n"],0))]]);
  SC$1.loadWasm=Lazy.Create(function()
  {
   return Concurrency.StartAsTask(Concurrency.FromContinuations(function(ok)
   {
    var b;
    function init()
    {
     WasmLoad.bindWasm();
     WasmLoader.printfn(function($1)
     {
      return $1("WASM Initialized!");
     });
     WasmLoader.wasmStatusV().Set(!self.document?WasmStatus.WasmWorkerLoaded:WasmStatus.WasmLoaded);
     ok();
    }
    return Concurrency.Start((b=null,Concurrency.Delay(function()
    {
     return WasmLoader.wasmStatusV().Get().$!==0?((WasmLoader.printfn(function($1)
     {
      return function($2)
      {
       return $1("Wasm is already "+testing_GeneratedPrintf.p($2));
      };
     }))(WasmLoader.wasmStatusV().Get()),ok(),Concurrency.Zero()):(WasmLoader.printfn(function($1)
     {
      return $1("Loading WASM. Hold on, this will take a while...");
     }),WasmLoader.wasmStatusV().Set(!self.document?WasmStatus.WasmWorkerLoading:WasmStatus.WasmLoading),Concurrency.Bind(Concurrency.Sleep(50),function()
     {
      return Concurrency.Combine(!(!self.document)?(Remoting.installProvider(),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
      {
       self.App=Pojo.newPojo([["init",init]]);
       return Concurrency.Bind(WasmLoad.requireJsA([WasmLoad.rootPath()+"mono-config.js"]),function()
       {
        return Concurrency.Bind(WasmLoad.requireJsA([WasmLoad.rootPath()+"runtime.js"]),function()
        {
         self.Module.print=WasmLoader.printfn(function($1)
         {
          return function($2)
          {
           return $1(Utils.toSafe($2));
          };
         });
         self.Module.printErr=WasmLoader.printfn(function($1)
         {
          return function($2)
          {
           return $1(Utils.toSafe($2));
          };
         });
         self.Module.preRun=[function()
         {
          WasmLoad.preloadFiles();
         }];
         return Concurrency.Bind(WasmLoad.requireJsA([WasmLoad.rootPath()+"dotnet.js"]),function()
         {
          return Concurrency.Zero();
         });
        });
       });
      }));
     }));
    })),null);
   }),null);
  });
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
 testing_GeneratedPrintf.p=function($1)
 {
  return $1.$==6?"WasmWorkerFinished":$1.$==5?"WasmWorkerLoaded":$1.$==4?"WasmWorkerLoading":$1.$==3?"WasmFinished":$1.$==2?"WasmLoaded":$1.$==1?"WasmLoading":"WasmNotLoaded";
 };
 Runtime.OnLoad(function()
 {
  WasmLoader.main();
 });
}());

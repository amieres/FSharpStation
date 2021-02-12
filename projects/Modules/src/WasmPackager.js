(function(Global)
{
 "use strict";
 var FsRoot,Library,ResultMessage,ResultMessageHelpers,Monads,Seq,SplitByOption,Async,WebSharper,Obj,Result,Builder,Operators,BuilderP,FusionM,Operators$1,Builder$1,Builder$2,FusionAsyncM,Operators$2,Builder$3,Builder$4,AsyncResult,AsyncResultBuilder,AsyncResultBuilderP,Extensions,String,ParseO,MailboxProcessorExt,Mailbox,StateFull,CommArgRoot,CommArg,CommArgCollection,TypedCommArg,CommArgModule,FsCodeModule,PreproDirective,PrepState,SnippetId,Snippet,SnippetCollection,SnippetModule,LibraryJS,FShUI_AssemblyData,ModuleName,TypeName,MethodName,AssemblyName,AssemblyRef,JSCode,Resource,ModuleRef,MethodRef,TypeRef,MethodDef,ModuleDef,AssemblyDef,Library2,WebSockets,Address,BrokerRequest,MessageType,BrokerMessage,Replier,MessageGeneric,ClientTypeFSharp,ClientTypeFSStation,ClientTypeJScript,ReplyHandler,Handler,WSMessagingClient,FSMessage,SC$1,WasmPackager_GeneratedPrintf,WasmPackager_JsonEncoder,WasmPackager_JsonDecoder,GeneratedPrintf,IntelliFactory,Runtime,Utils,Strings,Seq$1,List,Arrays,Concurrency,Enumerator,Result$1,Operators$3,Unchecked,Slice,Char,Control,MailboxProcessor,System,Guid,Collections,FSharpSet,Option,Date,console,Map,FSharpMap,JSON,TimeoutException,ClientSideJson,Provider,Owin,WebSocket,Client,WithEncoding,Endpoint,location,DateUtil,Numeric;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 ResultMessage=Library.ResultMessage=Library.ResultMessage||{};
 ResultMessageHelpers=Library.ResultMessageHelpers=Library.ResultMessageHelpers||{};
 Monads=Library.Monads=Library.Monads||{};
 Seq=Monads.Seq=Monads.Seq||{};
 SplitByOption=Seq.SplitByOption=Seq.SplitByOption||{};
 Async=Monads.Async=Monads.Async||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 Operators=Result.Operators=Result.Operators||{};
 BuilderP=Result.BuilderP=Result.BuilderP||{};
 FusionM=Monads.FusionM=Monads.FusionM||{};
 Operators$1=FusionM.Operators=FusionM.Operators||{};
 Builder$1=FusionM.Builder=FusionM.Builder||{};
 Builder$2=Builder$1.Builder=Builder$1.Builder||{};
 FusionAsyncM=Monads.FusionAsyncM=Monads.FusionAsyncM||{};
 Operators$2=FusionAsyncM.Operators=FusionAsyncM.Operators||{};
 Builder$3=FusionAsyncM.Builder=FusionAsyncM.Builder||{};
 Builder$4=Builder$3.Builder=Builder$3.Builder||{};
 AsyncResult=Monads.AsyncResult=Monads.AsyncResult||{};
 AsyncResultBuilder=Monads.AsyncResultBuilder=Monads.AsyncResultBuilder||{};
 AsyncResultBuilderP=Monads.AsyncResultBuilderP=Monads.AsyncResultBuilderP||{};
 Extensions=Monads.Extensions=Monads.Extensions||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 MailboxProcessorExt=Library.MailboxProcessorExt=Library.MailboxProcessorExt||{};
 Mailbox=Library.Mailbox=Library.Mailbox||{};
 StateFull=Mailbox.StateFull=Mailbox.StateFull||{};
 CommArgRoot=Library.CommArgRoot=Library.CommArgRoot||{};
 CommArg=CommArgRoot.CommArg=CommArgRoot.CommArg||{};
 CommArgCollection=CommArgRoot.CommArgCollection=CommArgRoot.CommArgCollection||{};
 TypedCommArg=CommArgRoot.TypedCommArg=CommArgRoot.TypedCommArg||{};
 CommArgModule=CommArgRoot.CommArgModule=CommArgRoot.CommArgModule||{};
 FsCodeModule=Library.FsCodeModule=Library.FsCodeModule||{};
 PreproDirective=FsCodeModule.PreproDirective=FsCodeModule.PreproDirective||{};
 PrepState=FsCodeModule.PrepState=FsCodeModule.PrepState||{};
 SnippetId=Library.SnippetId=Library.SnippetId||{};
 Snippet=Library.Snippet=Library.Snippet||{};
 SnippetCollection=Library.SnippetCollection=Library.SnippetCollection||{};
 SnippetModule=Library.SnippetModule=Library.SnippetModule||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 FShUI_AssemblyData=LibraryJS.FShUI_AssemblyData=LibraryJS.FShUI_AssemblyData||{};
 ModuleName=FShUI_AssemblyData.ModuleName=FShUI_AssemblyData.ModuleName||{};
 TypeName=FShUI_AssemblyData.TypeName=FShUI_AssemblyData.TypeName||{};
 MethodName=FShUI_AssemblyData.MethodName=FShUI_AssemblyData.MethodName||{};
 AssemblyName=FShUI_AssemblyData.AssemblyName=FShUI_AssemblyData.AssemblyName||{};
 AssemblyRef=FShUI_AssemblyData.AssemblyRef=FShUI_AssemblyData.AssemblyRef||{};
 JSCode=FShUI_AssemblyData.JSCode=FShUI_AssemblyData.JSCode||{};
 Resource=FShUI_AssemblyData.Resource=FShUI_AssemblyData.Resource||{};
 ModuleRef=FShUI_AssemblyData.ModuleRef=FShUI_AssemblyData.ModuleRef||{};
 MethodRef=FShUI_AssemblyData.MethodRef=FShUI_AssemblyData.MethodRef||{};
 TypeRef=FShUI_AssemblyData.TypeRef=FShUI_AssemblyData.TypeRef||{};
 MethodDef=FShUI_AssemblyData.MethodDef=FShUI_AssemblyData.MethodDef||{};
 ModuleDef=FShUI_AssemblyData.ModuleDef=FShUI_AssemblyData.ModuleDef||{};
 AssemblyDef=FShUI_AssemblyData.AssemblyDef=FShUI_AssemblyData.AssemblyDef||{};
 Library2=FsRoot.Library2=FsRoot.Library2||{};
 WebSockets=Library2.WebSockets=Library2.WebSockets||{};
 Address=WebSockets.Address=WebSockets.Address||{};
 BrokerRequest=WebSockets.BrokerRequest=WebSockets.BrokerRequest||{};
 MessageType=WebSockets.MessageType=WebSockets.MessageType||{};
 BrokerMessage=WebSockets.BrokerMessage=WebSockets.BrokerMessage||{};
 Replier=WebSockets.Replier=WebSockets.Replier||{};
 MessageGeneric=WebSockets.MessageGeneric=WebSockets.MessageGeneric||{};
 ClientTypeFSharp=WebSockets.ClientTypeFSharp=WebSockets.ClientTypeFSharp||{};
 ClientTypeFSStation=WebSockets.ClientTypeFSStation=WebSockets.ClientTypeFSStation||{};
 ClientTypeJScript=WebSockets.ClientTypeJScript=WebSockets.ClientTypeJScript||{};
 ReplyHandler=WebSockets.ReplyHandler=WebSockets.ReplyHandler||{};
 Handler=ReplyHandler.Handler=ReplyHandler.Handler||{};
 WSMessagingClient=WebSockets.WSMessagingClient=WebSockets.WSMessagingClient||{};
 FSMessage=Library2.FSMessage=Library2.FSMessage||{};
 SC$1=Global.StartupCode$WasmPackager$WasmPackager=Global.StartupCode$WasmPackager$WasmPackager||{};
 WasmPackager_GeneratedPrintf=Global.WasmPackager_GeneratedPrintf=Global.WasmPackager_GeneratedPrintf||{};
 WasmPackager_JsonEncoder=Global.WasmPackager_JsonEncoder=Global.WasmPackager_JsonEncoder||{};
 WasmPackager_JsonDecoder=Global.WasmPackager_JsonDecoder=Global.WasmPackager_JsonDecoder||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Utils=WebSharper&&WebSharper.Utils;
 Strings=WebSharper&&WebSharper.Strings;
 Seq$1=WebSharper&&WebSharper.Seq;
 List=WebSharper&&WebSharper.List;
 Arrays=WebSharper&&WebSharper.Arrays;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 Result$1=WebSharper&&WebSharper.Result;
 Operators$3=WebSharper&&WebSharper.Operators;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Slice=WebSharper&&WebSharper.Slice;
 Char=WebSharper&&WebSharper.Char;
 Control=WebSharper&&WebSharper.Control;
 MailboxProcessor=Control&&Control.MailboxProcessor;
 System=Global.System;
 Guid=System&&System.Guid;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpSet=Collections&&Collections.FSharpSet;
 Option=WebSharper&&WebSharper.Option;
 Date=Global.Date;
 console=Global.console;
 Map=Collections&&Collections.Map;
 FSharpMap=Collections&&Collections.FSharpMap;
 JSON=Global.JSON;
 TimeoutException=WebSharper&&WebSharper.TimeoutException;
 ClientSideJson=WebSharper&&WebSharper.ClientSideJson;
 Provider=ClientSideJson&&ClientSideJson.Provider;
 Owin=WebSharper&&WebSharper.Owin;
 WebSocket=Owin&&Owin.WebSocket;
 Client=WebSocket&&WebSocket.Client;
 WithEncoding=Client&&Client.WithEncoding;
 Endpoint=WebSocket&&WebSocket.Endpoint;
 location=Global.location;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 ResultMessage=Library.ResultMessage=Runtime.Class({
  toString:function()
  {
   return this.$==1?(function($1)
   {
    return function($2)
    {
     return $1("Error    : "+Utils.toSafe($2));
    };
   }(Global.id))(this.$0):this.$==2?(function($1)
   {
    return function($2)
    {
     return $1("Warning  : "+Utils.toSafe($2));
    };
   }(Global.id))(this.$0):this.$==3?this.$0:this.$==4?(function($1)
   {
    return function($2)
    {
     return $1(Global.String($2));
    };
   }(Global.id))(this.$0):this.$==5?(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Exception: "+Utils.toSafe($2)+", "+Utils.toSafe($3));
   }))(Global.id))(this.$0))(this.$1):this.$==6?Strings.concat("\n",Seq$1.map(Global.String,Seq$1.filter(function(a)
   {
    return a.$!=0;
   },this.$0))):"";
  }
 },null,ResultMessage);
 ResultMessage.NoMsg=new ResultMessage({
  $:0
 });
 ResultMessageHelpers.infof=function(fmt)
 {
  return fmt(function(a)
  {
   return new ResultMessage({
    $:3,
    $0:a
   });
  });
 };
 ResultMessageHelpers.warningf=function(fmt)
 {
  return fmt(function(a)
  {
   return new ResultMessage({
    $:2,
    $0:a
   });
  });
 };
 ResultMessageHelpers.errorMsgf=function(fmt)
 {
  return fmt(function(a)
  {
   return new ResultMessage({
    $:1,
    $0:a
   });
  });
 };
 ResultMessage.summarizedI=function(msg)
 {
  return ResultMessage.summarizedF(function()
  {
   return[0,0,1];
  },msg);
 };
 ResultMessage.summarizedW=function(msg)
 {
  return ResultMessage.summarizedF(function()
  {
   return[0,1,0];
  },msg);
 };
 ResultMessage.summarized=function(msg)
 {
  return ResultMessage.summarizedF(function()
  {
   return[1,0,0];
  },msg);
 };
 ResultMessage.summarizedF=function(f,msg)
 {
  var c;
  return Strings.concat("\n",Seq$1.filter(function(y)
  {
   return""!==y;
  },List.ofArray([(c=msg,Global.String(c)),ResultMessage.summaryF(f,msg)])));
 };
 ResultMessage.summaryF=function(f,msg)
 {
  var $1,m;
  m=ResultMessage.countF(f,msg);
  switch(m[0]===0?m[1]===0?0:m[1]===1?m[2]===0?0:($1=m[1],2):($1=m[1],2):m[0]===1?m[1]===0?m[2]===0?0:($1=m[0],1):($1=[m[0],m[1]],3):m[1]===0?($1=m[0],1):($1=[m[0],m[1]],3))
  {
   case 0:
    return"";
   case 1:
    return(function($2)
    {
     return function($3)
     {
      return $2("Errors   : "+Global.String($3)+"\n");
     };
    }(Global.id))($1);
   case 2:
    return(function($2)
    {
     return function($3)
     {
      return $2("Warnings : "+Global.String($3)+"\n");
     };
    }(Global.id))($1);
   case 3:
    return(((Runtime.Curried3(function($2,$3,$4)
    {
     return $2("Errors   : "+Global.String($3)+", Warnings: "+Global.String($4)+"\n");
    }))(Global.id))($1[0]))($1[1]);
  }
 };
 ResultMessage.reduceMsgs=function(ms)
 {
  return Seq$1.fold(ResultMessage.addMsg,ResultMessage.NoMsg,ms);
 };
 ResultMessage.addMsg=function(a,b)
 {
  return a.$==0?b:a.$==6?b.$==0?a:b.$==6?new ResultMessage({
   $:6,
   $0:a.$0.concat(b.$0)
  }):new ResultMessage({
   $:6,
   $0:a.$0.concat([b])
  }):b.$==0?a:b.$==6?new ResultMessage({
   $:6,
   $0:[a].concat(b.$0)
  }):new ResultMessage({
   $:6,
   $0:[a,b]
  });
 };
 ResultMessage.countI=function(msg)
 {
  return ResultMessage.countF(function()
  {
   return[0,0,1];
  },msg);
 };
 ResultMessage.countW=function(msg)
 {
  return ResultMessage.countF(function()
  {
   return[0,1,0];
  },msg);
 };
 ResultMessage.count=function(msg)
 {
  return ResultMessage.countF(function()
  {
   return[1,0,0];
  },msg);
 };
 ResultMessage.countF=function(f,msg)
 {
  function f$1(f$2,w,i)
  {
   return function(t)
   {
    return[f$2+t[0],w+t[1],i+t[2]];
   };
  }
  return msg.$==0?[0,0,0]:msg.$==3?[0,0,1]:msg.$==2?[0,1,0]:msg.$==4?f(msg.$0):msg.$==6?Seq$1.fold(function($1,$2)
  {
   return(function($3)
   {
    return f$1($3[0],$3[1],$3[2]);
   }($1))($2);
  },[0,0,0],Seq$1.map(function(m)
  {
   return ResultMessage.countF(f,m);
  },ResultMessage.exclnoMsg(msg.$0))):[1,0,0];
 };
 ResultMessage.isFatalW=function(msg)
 {
  return ResultMessage.isFatalF(function()
  {
   return false;
  },msg);
 };
 ResultMessage.isFatal=function(msg)
 {
  return ResultMessage.isFatalF(function()
  {
   return true;
  },msg);
 };
 ResultMessage.isFatalF=function(f,msg)
 {
  return msg.$==0?false:msg.$==3?false:msg.$==2?false:msg.$==4?f(msg.$0):msg.$==6?Seq$1.exists(function(m)
  {
   return ResultMessage.isFatalF(f,m);
  },msg.$0):true;
 };
 ResultMessage.isWarningOrInfoW=function(msg)
 {
  return ResultMessage.isWarningOrInfoF(function()
  {
   return true;
  },msg);
 };
 ResultMessage.isWarningOrInfo=function(msg)
 {
  return ResultMessage.isWarningOrInfoF(function()
  {
   return false;
  },msg);
 };
 ResultMessage.isWarningOrInfoF=function(f,msg)
 {
  return msg.$==2||(msg.$==4?f(msg.$0):msg.$==6&&Seq$1.forall(function(m)
  {
   return ResultMessage.isWarningOrInfoF(f,m)||ResultMessage.isInfoF(f,m);
  },ResultMessage.exclnoMsg(msg.$0)));
 };
 ResultMessage.isInfoI=function(msg)
 {
  return ResultMessage.isInfoF(function()
  {
   return true;
  },msg);
 };
 ResultMessage.isInfo=function(msg)
 {
  return ResultMessage.isInfoF(function()
  {
   return false;
  },msg);
 };
 ResultMessage.isInfoF=function(f,msg)
 {
  return msg.$==3||(msg.$==4?f(msg.$0):msg.$==6&&Seq$1.forall(function(m)
  {
   return ResultMessage.isInfoF(f,m);
  },ResultMessage.exclnoMsg(msg.$0)));
 };
 ResultMessage.freeMessageI=function(msg)
 {
  var f;
  function g(a)
  {
   return new ResultMessage({
    $:3,
    $0:a
   });
  }
  return ResultMessage.freeMessageF((f=function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),function(x)
  {
   return g(f(x));
  }),msg);
 };
 ResultMessage.freeMessageW=function(msg)
 {
  var f;
  function g(a)
  {
   return new ResultMessage({
    $:2,
    $0:a
   });
  }
  return ResultMessage.freeMessageF((f=function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),function(x)
  {
   return g(f(x));
  }),msg);
 };
 ResultMessage.freeMessage=function(msg)
 {
  var f;
  function g(a)
  {
   return new ResultMessage({
    $:1,
    $0:a
   });
  }
  return ResultMessage.freeMessageF((f=function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),function(x)
  {
   return g(f(x));
  }),msg);
 };
 ResultMessage.freeMessageF=function(f,msg)
 {
  return ResultMessage.bindMessage(f,msg);
 };
 ResultMessage.bindMessage=function(f,msg)
 {
  return msg.$==4?f(msg.$0):msg.$==1?new ResultMessage({
   $:1,
   $0:msg.$0
  }):msg.$==3?new ResultMessage({
   $:3,
   $0:msg.$0
  }):msg.$==2?new ResultMessage({
   $:2,
   $0:msg.$0
  }):msg.$==5?new ResultMessage({
   $:5,
   $0:msg.$0,
   $1:msg.$1
  }):msg.$==6?new ResultMessage({
   $:6,
   $0:Arrays.map(function(m)
   {
    return ResultMessage.bindMessage(f,m);
   },msg.$0)
  }):ResultMessage.NoMsg;
 };
 ResultMessage.exclnoMsg=function(ms)
 {
  function g(v)
  {
   return!v;
  }
  return Seq$1.filter(function(x)
  {
   return g(ResultMessage.noMsg(x));
  },ms);
 };
 ResultMessage.noMsg=function(msg)
 {
  return msg.$==0;
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
 Async.sequenceSeqS=function(sq)
 {
  throw"traverseSeqS cannot be used in JavaScript!";
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
 Builder=Result.Builder=Runtime.Class({
  For:function(sequence,body)
  {
   var $this;
   $this=this;
   return this.Using(Enumerator.Get(sequence),function(_enum)
   {
    return $this.While(function()
    {
     return _enum.MoveNext();
    },$this.Delay(function()
    {
     return body(_enum.Current());
    }));
   });
  },
  While:function(guard,body)
  {
   function whileLoop(guard$1)
   {
    return function(body$1)
    {
     return guard$1()?Result$1.Bind(function()
     {
      return(whileLoop(guard$1))(body$1);
     },body$1()):Result.rtn();
    };
   }
   return(whileLoop(guard))(body);
  },
  Using:function(disposable,body)
  {
   try
   {
    return body(disposable);
   }
   finally
   {
    disposable.Dispose();
   }
  },
  TryFinally:function(body,compensation)
  {
   try
   {
    return body();
   }
   finally
   {
    compensation();
   }
  },
  TryWith:function(body,handler)
  {
   try
   {
    return body();
   }
   catch(e)
   {
    return handler(e);
   }
  },
  Run:function(f)
  {
   return Result$1.Bind(f,{
    $:0,
    $0:null
   });
  },
  Combine:function(a,b)
  {
   return Result$1.Bind(b,a);
  },
  Delay:Global.id,
  Zero:function()
  {
   return Result.rtn();
  },
  Bind:function(w,r)
  {
   return Result$1.Bind(r,w);
  },
  ReturnFrom:Global.id,
  Return:function(x)
  {
   return Result.rtn(x);
  }
 },Obj,Builder);
 Builder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder);
 Operators.result=function()
 {
  SC$1.$cctor();
  return SC$1.result$1;
 };
 Operators.rtn=function(v)
 {
  return Result.rtn(v);
 };
 Operators.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators.op_GreaterGreaterEquals(f(v),g);
 };
 Operators.op_RightShift=function(f,g,v)
 {
  return Operators.op_BarGreaterGreater(f(v),g);
 };
 Operators.op_GreaterGreaterEquals=function(v,f)
 {
  return Result$1.Bind(f,v);
 };
 Operators.op_BarGreaterGreater=function(v,f)
 {
  return Result$1.Map(f,v);
 };
 BuilderP=Result.BuilderP=Runtime.Class({
  For:function(sequence,body)
  {
   var $this;
   $this=this;
   return this.Using(Enumerator.Get(sequence),function(_enum)
   {
    return $this.While(function()
    {
     return _enum.MoveNext();
    },$this.Delay(function()
    {
     return body(_enum.Current());
    }));
   });
  },
  While:function(guard,body)
  {
   function whileLoop(guard$1)
   {
    return function(body$1)
    {
     return guard$1()?Result$1.Bind(function()
     {
      return(whileLoop(guard$1))(body$1);
     },body$1()):Result.rtn();
    };
   }
   return(whileLoop(guard))(body);
  },
  Using:function(disposable,body)
  {
   try
   {
    return body(disposable);
   }
   finally
   {
    disposable.Dispose();
   }
  },
  TryFinally:function(body,compensation)
  {
   try
   {
    return body();
   }
   finally
   {
    compensation();
   }
  },
  TryWith:function(body,handler)
  {
   try
   {
    return body();
   }
   catch(e)
   {
    return handler(e);
   }
  },
  Run:function(f)
  {
   return Result.bindP(f,{
    $:0,
    $0:null
   });
  },
  Combine:function(a,b)
  {
   return Result$1.Bind(b,a);
  },
  Delay:Global.id,
  Zero:function()
  {
   return Result.rtn();
  },
  Bind:function(w,r)
  {
   return Result$1.Bind(r,w);
  },
  ReturnFrom:Global.id,
  Return:function(x)
  {
   return Result.rtn(x);
  }
 },Obj,BuilderP);
 BuilderP.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },BuilderP);
 Result.resultP=function()
 {
  SC$1.$cctor();
  return SC$1.resultP;
 };
 Result.iterP=function(fE,f,r)
 {
  Result.defaultWith(fE,Result.mapP(f,r));
 };
 Result.mapP=function(f,m)
 {
  return Result.bindP(function(x)
  {
   return Result.rtn(f(x));
  },m);
 };
 Result.bindP=function(f,r)
 {
  if(r.$==1)
   return Library.Error(r.$0);
  else
   try
   {
    return f(r.$0);
   }
   catch(e)
   {
    return Library.Error(new ResultMessage({
     $:5,
     $0:e.message,
     $1:e.stack
    }));
   }
 };
 Result.freeMessage=function(r)
 {
  return r.$==1?Library.Error(ResultMessage.freeMessage(r.$0)):{
   $:0,
   $0:r.$0
  };
 };
 Result.result=function()
 {
  SC$1.$cctor();
  return SC$1.result;
 };
 Result.sequenceSeq=function(sq)
 {
  return Result.traverseSeq(Global.id,sq);
 };
 Result.traverseSeq=function(f,sq)
 {
  return Result$1.Map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return Result.op_GreaterGreaterEquals(f(head),function(h)
   {
    return Result.op_GreaterGreaterEquals(tail,function(t)
    {
     return Result.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Result.rtn(List.T.Empty)));
 };
 Result.op_GreaterGreaterEquals=function(r,f)
 {
  return Result$1.Bind(f,r);
 };
 Result.absorbO=function(f,vOR)
 {
  return Result$1.Bind(function(v)
  {
   return Result.ofOption(f,v);
  },vOR);
 };
 Result.insertO=function(vRO)
 {
  var o;
  o=vRO==null?null:{
   $:1,
   $0:Result$1.Map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vRO.$0)
  };
  return o==null?{
   $:0,
   $0:null
  }:o.$0;
 };
 Result.ofOption=function(f,vO)
 {
  var o;
  o=vO==null?null:{
   $:1,
   $0:{
    $:0,
    $0:vO.$0
   }
  };
  return o==null?function(x)
  {
   return Library.Error(f(x));
  }():o.$0;
 };
 Result.get=function(r)
 {
  return Result.defaultWith(function(x)
  {
   return Operators$3.FailWith(Global.String(x));
  },r);
 };
 Result.iter=function(fE,f,r)
 {
  Result.defaultWith(fE,Result$1.Map(f,r));
 };
 Result.failIfFalse=function(m,v)
 {
  return!v?Library.Error(m):{
   $:0,
   $0:null
  };
 };
 Result.failIfTrue=function(m,v)
 {
  return v?Library.Error(m):{
   $:0,
   $0:null
  };
 };
 Result.defaultValue=function(d,r)
 {
  return r.$==1?d:r.$0;
 };
 Result.defaultWith=function(f,r)
 {
  return r.$==1?f(r.$0):r.$0;
 };
 Result.toOption=function(r)
 {
  return r.$==0?{
   $:1,
   $0:r.$0
  }:null;
 };
 Result.flatten=function(r)
 {
  return Result$1.Bind(Global.id,r);
 };
 Result.join=function(r)
 {
  return Result$1.Bind(Global.id,r);
 };
 Result.rtn=function(a)
 {
  return{
   $:0,
   $0:a
  };
 };
 Result.errorf=function(fmt)
 {
  return fmt(Library.Error);
 };
 Operators$1.rtn=function(v)
 {
  return FusionM.rtn(v);
 };
 Operators$1.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators$1.op_GreaterGreaterEquals(f(v),g);
 };
 Operators$1.op_RightShift=function(f,g,v)
 {
  return Operators$1.op_BarGreaterGreater(f(v),g);
 };
 Operators$1.op_GreaterGreaterEquals=function(v,f)
 {
  return FusionM.bind(f,v);
 };
 Operators$1.op_BarGreaterGreater=function(v,f)
 {
  return FusionM.map(f,v);
 };
 Operators$1.op_LessMultiplyGreater=function(f,v)
 {
  return FusionM.apply(f,v);
 };
 Builder$2=Builder$1.Builder=Runtime.Class({
  For:function(sequence,body)
  {
   var $this;
   $this=this;
   return this.Using(Enumerator.Get(sequence),function(_enum)
   {
    return $this.While(function()
    {
     return _enum.MoveNext();
    },$this.Delay(function()
    {
     return body(_enum.Current());
    }));
   });
  },
  Using:function(disposable,body)
  {
   return this.TryFinally(function()
   {
    return body(disposable);
   },function()
   {
    var c;
    if(!Unchecked.Equals(disposable,null))
     {
      c=disposable;
      c.Dispose();
     }
   });
  },
  TryFinally:function(body,compensation)
  {
   return FusionM.wrap(function(r)
   {
    try
    {
     return(FusionM.getFun(body()))(r);
    }
    finally
    {
     compensation();
    }
   });
  },
  TryWith:function(body,handler)
  {
   return FusionM.wrap(function(r)
   {
    try
    {
     return(FusionM.getFun(body()))(r);
    }
    catch(e)
    {
     return handler(e);
    }
   });
  },
  While:function(guard,body)
  {
   function whileLoop(guard$1)
   {
    return function(body$1)
    {
     return guard$1()?FusionM.bind(function()
     {
      return(whileLoop(guard$1))(body$1);
     },body$1()):FusionM.rtn();
    };
   }
   return(whileLoop(guard))(body);
  },
  Run:function(f)
  {
   return FusionM.wrap(function(m)
   {
    return(FusionM.getFun(f()))(m);
   });
  },
  Combine:function(a,b)
  {
   return FusionM.bind(b,a);
  },
  Delay:Global.id,
  Zero:function()
  {
   return FusionM.rtn();
  },
  Bind:function(w,r)
  {
   return FusionM.bind(r,w);
  },
  ReturnFrom:function(x)
  {
   return FusionM.from(x);
  },
  Return:function(x)
  {
   return FusionM.rtn(x);
  }
 },Obj,Builder$2);
 Builder$2.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder$2);
 FusionM.fusion=function()
 {
  SC$1.$cctor();
  return SC$1.fusion;
 };
 FusionM.absorbO=function(f,vORm)
 {
  return FusionM.absorbR(FusionM.map(function(v)
  {
   return Result.ofOption(f,v);
  },vORm));
 };
 FusionM.absorbR=function(vvRm)
 {
  return FusionM.bind(FusionM.ofResultRM,vvRm);
 };
 FusionM.insertSnd=function(vRm,snd)
 {
  return FusionM.map(function(v)
  {
   return[v,snd];
  },vRm);
 };
 FusionM.insertFst=function(fst,vRm)
 {
  return FusionM.map(function(v)
  {
   return[fst,v];
  },vRm);
 };
 FusionM.insertR=function(vvR)
 {
  return vvR.$==0?FusionM.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vvR.$0):FusionM.rtn(Library.Error(vvR.$0));
 };
 FusionM.insertO=function(vvO)
 {
  var o;
  o=vvO==null?null:{
   $:1,
   $0:FusionM.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vvO.$0)
  };
  return o==null?FusionM.rtn(null):o.$0;
 };
 FusionM.iterResultPrint=function(m)
 {
  function g(v)
  {
   Library.print(v);
  }
  FusionM.iterReader(function(x)
  {
   return g(ResultMessage.summarized(x));
  },function(v)
  {
   Library.print(v);
  },null,m);
 };
 FusionM.iterResult=function(fM,f,m)
 {
  FusionM.iterReader(fM,f,null,m);
 };
 FusionM.runResult=function(m)
 {
  return FusionM.runReader(null,m);
 };
 FusionM.runReader=function(v,m)
 {
  var t,m$1,o;
  t=FusionM.run(v,m);
  m$1=t[2];
  return Result.ofOption(function()
  {
   return m$1;
  },(o=t[0],o==null?null:{
   $:1,
   $0:[o.$0,m$1]
  }));
 };
 FusionM.mapReader=function(v,m)
 {
  return FusionM.mapState(function()
  {
   return v;
  },Global.id,m);
 };
 FusionM.readerFun=function(f)
 {
  return FusionM.map(f,FusionM.getS());
 };
 FusionM.sequenceSeq=function(sq)
 {
  return FusionM.traverseSeq(Global.id,sq);
 };
 FusionM.traverseSeq=function(f,sq)
 {
  return FusionM.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return FusionM.op_GreaterGreaterEquals(f(head),function(h)
   {
    return FusionM.op_GreaterGreaterEquals(tail,function(t)
    {
     return FusionM.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),FusionM.rtn(List.T.Empty)));
 };
 FusionM.op_GreaterGreaterEquals=function(v,f)
 {
  return FusionM.bind(f,v);
 };
 FusionM.apply=function(fR,vR)
 {
  return FusionM.bind(function(b)
  {
   return FusionM.map(b,vR);
  },fR);
 };
 FusionM.memoizeRm=function(getStore,fRm,p)
 {
  return{
   $:0,
   $0:function(t)
   {
    var r,p$1,getOrAdd,o,o$1;
    function store(p$2,v)
    {
     return(getOrAdd(p$2))(function()
     {
      return v;
     });
    }
    r=t[0];
    p$1=getStore(r);
    getOrAdd=p$1[1];
    return FusionM.run(r,(o=(o$1=p$1[0](p),o$1==null?null:{
     $:1,
     $0:FusionM.rtn(o$1.$0)
    }),o==null?FusionM.map(function($1)
    {
     return store(p,$1);
    },fRm(p)):o.$0));
   }
  };
 };
 FusionM.iterReader=function(fM,f,v,m)
 {
  var t,m$1;
  t=FusionM.run(v,FusionM.map(f,m));
  m$1=t[2];
  t[0]==null?void 0:void 0;
  m$1.$!==0?fM(m$1):void 0;
 };
 FusionM.mapState=function(get,set,m)
 {
  return{
   $:0,
   $0:function(t)
   {
    var s1,p;
    s1=t[0];
    p=(FusionM.getFun(m))([get(s1),t[1]]);
    return[p[0],set(s1,p[1]),p[2]];
   }
  };
 };
 FusionM.freeMessageW=function(m)
 {
  var f;
  function g(a)
  {
   return new ResultMessage({
    $:2,
    $0:a
   });
  }
  return FusionM.freeMessageF((f=function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),function(x)
  {
   return g(f(x));
  }),m);
 };
 FusionM.freeMessage=function(m)
 {
  var f;
  function g(a)
  {
   return new ResultMessage({
    $:1,
    $0:a
   });
  }
  return FusionM.freeMessageF((f=function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),function(x)
  {
   return g(f(x));
  }),m);
 };
 FusionM.freeMessageF=function(f,m)
 {
  return{
   $:0,
   $0:function(t)
   {
    var s1,m1,p;
    s1=t[0];
    m1=t[1];
    try
    {
     p=m.$0([s1,ResultMessage.freeMessage(m1)]);
     return[p[0],p[1],ResultMessage.freeMessageF(f,p[2])];
    }
    catch(e)
    {
     return[null,s1,ResultMessage.freeMessage(ResultMessage.addMsg(m1,new ResultMessage({
      $:5,
      $0:e.message,
      $1:e.stack
     })))];
    }
   }
  };
 };
 FusionM.ofFusionM=function(m)
 {
  return FusionM.from(m);
 };
 FusionM.ofResultMessage=function(m)
 {
  return FusionM.OkFMsg(null,m);
 };
 FusionM.ofMessage=function(m)
 {
  return FusionM.OkFMsg(null,new ResultMessage({
   $:4,
   $0:m
  }));
 };
 FusionM.ofOption=function(f,o)
 {
  return o==null?FusionM.ErrorF(f()):FusionM.OkF(o.$0);
 };
 FusionM.ofResult=function(r)
 {
  return r.$==1?FusionM.ErrorF(new ResultMessage({
   $:1,
   $0:(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(r.$0)
  })):FusionM.OkF(r.$0);
 };
 FusionM.ofResultS=function(r)
 {
  return r.$==1?FusionM.ErrorF(new ResultMessage({
   $:1,
   $0:r.$0
  })):FusionM.OkF(r.$0);
 };
 FusionM.ofResultM=function(r)
 {
  return r.$==1?FusionM.ErrorF(new ResultMessage({
   $:4,
   $0:r.$0
  })):FusionM.OkF(r.$0);
 };
 FusionM.ofResultRM=function(r)
 {
  return r.$==1?FusionM.ErrorF(r.$0):FusionM.OkF(r.$0);
 };
 FusionM.inling=function(getOption,m)
 {
  return{
   $:0,
   $0:function(t)
   {
    var s1,m1,p;
    s1=t[0];
    m1=t[1];
    try
    {
     p=m.$0([s1,m1]);
     return[{
      $:1,
      $0:p[0]
     },p[1],p[2]];
    }
    catch(e)
    {
     return[null,s1,ResultMessage.addMsg(m1,new ResultMessage({
      $:5,
      $0:e.message,
      $1:e.stack
     }))];
    }
   }
  };
 };
 FusionM.check=function()
 {
  return{
   $:0,
   $0:function(t)
   {
    return[ResultMessage.isFatal(t[1])?null:{
     $:1,
     $0:null
    },t[0],ResultMessage.NoMsg];
   }
  };
 };
 FusionM.putS=function(s1)
 {
  return{
   $:0,
   $0:function()
   {
    return[{
     $:1,
     $0:null
    },s1,ResultMessage.NoMsg];
   }
  };
 };
 FusionM.getR=function()
 {
  return{
   $:0,
   $0:function(t)
   {
    return[{
     $:1,
     $0:t[1]
    },t[0],ResultMessage.NoMsg];
   }
  };
 };
 FusionM.getS=function()
 {
  return{
   $:0,
   $0:function(t)
   {
    var s;
    s=t[0];
    return[{
     $:1,
     $0:s
    },s,ResultMessage.NoMsg];
   }
  };
 };
 FusionM.ErrorF=function(m)
 {
  return{
   $:0,
   $0:function(t)
   {
    return[null,t[0],m];
   }
  };
 };
 FusionM.OkFMsg=function(v,m)
 {
  return{
   $:0,
   $0:function(t)
   {
    return[{
     $:1,
     $0:v
    },t[0],m];
   }
  };
 };
 FusionM.OkF=function(v)
 {
  return{
   $:0,
   $0:function(t)
   {
    return[{
     $:1,
     $0:v
    },t[0],ResultMessage.NoMsg];
   }
  };
 };
 FusionM.run=function(s,m)
 {
  return(FusionM.getFun(m))([s,ResultMessage.NoMsg]);
 };
 FusionM.from=Global.id;
 FusionM.getFun=function(a)
 {
  return a.$0;
 };
 FusionM.wrap=function(f)
 {
  return{
   $:0,
   $0:f
  };
 };
 FusionM.map=function(f,m)
 {
  return FusionM.bind(function(x)
  {
   return FusionM.rtn(f(x));
  },m);
 };
 FusionM.bind=function(f,m)
 {
  return{
   $:0,
   $0:function(t)
   {
    var s1,m1,p,v2O,s2,m2,p$1;
    s1=t[0];
    m1=t[1];
    try
    {
     p=m.$0([s1,m1]);
     v2O=p[0];
     s2=p[1];
     m2=p[2];
     return v2O!=null&&v2O.$==1?(p$1=f(v2O.$0).$0([s2,ResultMessage.addMsg(m1,m2)]),[p$1[0],p$1[1],ResultMessage.addMsg(m2,p$1[2])]):[null,s2,m2];
    }
    catch(e)
    {
     return[null,s1,ResultMessage.addMsg(m1,new ResultMessage({
      $:5,
      $0:e.message,
      $1:e.stack
     }))];
    }
   }
  };
 };
 FusionM.rtn=function(v)
 {
  return{
   $:0,
   $0:function(t)
   {
    return[{
     $:1,
     $0:v
    },t[0],ResultMessage.NoMsg];
   }
  };
 };
 Operators$2.rtn=function(v)
 {
  return FusionAsyncM.rtn(v);
 };
 Operators$2.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators$2.op_GreaterGreaterEquals(f(v),g);
 };
 Operators$2.op_RightShift=function(f,g,v)
 {
  return Operators$2.op_BarGreaterGreater(f(v),g);
 };
 Operators$2.op_GreaterGreaterEquals=function(v,f)
 {
  return FusionAsyncM.bind(f,v);
 };
 Operators$2.op_BarGreaterGreater=function(v,f)
 {
  return FusionAsyncM.map(f,v);
 };
 Operators$2.op_LessMultiplyGreater=function(f,v)
 {
  return FusionAsyncM.apply(f,v);
 };
 Builder$4=Builder$3.Builder=Runtime.Class({
  For:function(sequence,body)
  {
   var $this;
   $this=this;
   return this.Using(Enumerator.Get(sequence),function(_enum)
   {
    return $this.While(function()
    {
     return _enum.MoveNext();
    },$this.Delay(function()
    {
     return body(_enum.Current());
    }));
   });
  },
  Using:function(disposable,body)
  {
   function x(s,m)
   {
    return Concurrency.Using(disposable,function(u)
    {
     return(FusionAsyncM.getFun(body(u)))([s,m]);
    });
   }
   return FusionAsyncM.wrap(function($1)
   {
    return x($1[0],$1[1]);
   });
  },
  TryFinally:function(body,compensation)
  {
   function x(s,m)
   {
    return Concurrency.TryFinally((FusionAsyncM.getFun(body()))([s,m]),compensation);
   }
   return FusionAsyncM.wrap(function($1)
   {
    return x($1[0],$1[1]);
   });
  },
  TryWith:function(body,handler)
  {
   function x(s,m)
   {
    return Concurrency.TryWith((FusionAsyncM.getFun(body()))([s,m]),handler);
   }
   return FusionAsyncM.wrap(function($1)
   {
    return x($1[0],$1[1]);
   });
  },
  While:function(guard,body)
  {
   function whileLoop(guard$1)
   {
    return function(body$1)
    {
     return guard$1()?FusionAsyncM.bind(function()
     {
      return(whileLoop(guard$1))(body$1);
     },body$1()):FusionAsyncM.rtn();
    };
   }
   return(whileLoop(guard))(body);
  },
  Run:function(f)
  {
   return FusionAsyncM.wrap(function(m)
   {
    return(FusionAsyncM.getFun(f()))(m);
   });
  },
  Combine:function(a,b)
  {
   return FusionAsyncM.bind(b,a);
  },
  Delay:Global.id,
  Zero:function()
  {
   return FusionAsyncM.rtn();
  },
  Bind:function(w,r)
  {
   return FusionAsyncM.bind(r,w);
  },
  ReturnFrom:function(x)
  {
   return FusionAsyncM.from(x);
  },
  Return:function(x)
  {
   return FusionAsyncM.rtn(x);
  }
 },Obj,Builder$4);
 Builder$4.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder$4);
 FusionAsyncM.fusion=function()
 {
  SC$1.$cctor();
  return SC$1.fusion$1;
 };
 FusionAsyncM.iterResultPrintA=function(m)
 {
  function g(v)
  {
   Library.print(v);
  }
  FusionAsyncM.iterReaderA(function(x)
  {
   return g(ResultMessage.summarized(x));
  },function(v)
  {
   Library.print(v);
  },null,m);
 };
 FusionAsyncM.iterResultPrint=function(m)
 {
  function g(v)
  {
   Library.print(v);
  }
  FusionAsyncM.iterReader(function(x)
  {
   return g(ResultMessage.summarized(x));
  },function(v)
  {
   Library.print(v);
  },null,m);
 };
 FusionAsyncM.iterResultA=function(fM,f,m)
 {
  FusionAsyncM.iterReaderA(fM,f,null,m);
 };
 FusionAsyncM.iterResult=function(fM,f,m)
 {
  FusionAsyncM.iterReader(fM,f,null,m);
 };
 FusionAsyncM.runResult=function(m)
 {
  return FusionAsyncM.runReader(null,m);
 };
 FusionAsyncM.runReader=function(v,m)
 {
  function f(vO,a,m$1)
  {
   return Result.ofOption(function()
   {
    return m$1;
   },vO==null?null:{
    $:1,
    $0:[vO.$0,m$1]
   });
  }
  function g(v$1)
  {
   return Concurrency.Return(v$1);
  }
  return Concurrency.Bind(FusionAsyncM.run(v,m),function(x)
  {
   return g(f.apply(null,x));
  });
 };
 FusionAsyncM.mapReader=function(v,m)
 {
  return FusionAsyncM.mapState(function()
  {
   return v;
  },Global.id,m);
 };
 FusionAsyncM.absorbO=function(f,vORm)
 {
  return FusionAsyncM.absorbR(FusionAsyncM.map(function(v)
  {
   return Result.ofOption(f,v);
  },vORm));
 };
 FusionAsyncM.absorbR=function(vvRm)
 {
  return FusionAsyncM.bind(FusionAsyncM.ofResultRM,vvRm);
 };
 FusionAsyncM.insertSnd=function(vRm,snd)
 {
  return FusionAsyncM.map(function(v)
  {
   return[v,snd];
  },vRm);
 };
 FusionAsyncM.insertFst=function(fst,vRm)
 {
  return FusionAsyncM.map(function(v)
  {
   return[fst,v];
  },vRm);
 };
 FusionAsyncM.insertR=function(vvR)
 {
  return vvR.$==0?FusionAsyncM.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vvR.$0):FusionAsyncM.rtn(Library.Error(vvR.$0));
 };
 FusionAsyncM.insertO=function(vvO)
 {
  var o;
  o=vvO==null?null:{
   $:1,
   $0:FusionAsyncM.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vvO.$0)
  };
  return o==null?FusionAsyncM.rtn(null):o.$0;
 };
 FusionAsyncM.readerFun=function(f)
 {
  return FusionAsyncM.map(f,FusionAsyncM.getS());
 };
 FusionAsyncM.freeMessageW=function(m)
 {
  var f;
  function g(a)
  {
   return new ResultMessage({
    $:2,
    $0:a
   });
  }
  return FusionAsyncM.freeMessageF((f=function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),function(x)
  {
   return g(f(x));
  }),m);
 };
 FusionAsyncM.freeMessage=function(m)
 {
  var f;
  function g(a)
  {
   return new ResultMessage({
    $:1,
    $0:a
   });
  }
  return FusionAsyncM.freeMessageF((f=function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),function(x)
  {
   return g(f(x));
  }),m);
 };
 FusionAsyncM.sequenceSeq=function(sq)
 {
  return FusionAsyncM.traverseSeq(Global.id,sq);
 };
 FusionAsyncM.traverseSeq=function(f,sq)
 {
  return FusionAsyncM.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return FusionAsyncM.op_GreaterGreaterEquals(f(head),function(h)
   {
    return FusionAsyncM.op_GreaterGreaterEquals(tail,function(t)
    {
     return FusionAsyncM.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),FusionAsyncM.rtn(List.T.Empty)));
 };
 FusionAsyncM.op_GreaterGreaterEquals=function(v,f)
 {
  return FusionAsyncM.bind(f,v);
 };
 FusionAsyncM.apply=function(fR,vR)
 {
  return FusionAsyncM.bind(function(b)
  {
   return FusionAsyncM.map(b,vR);
  },fR);
 };
 FusionAsyncM.memoizeRm=function(getStore,fRm,p)
 {
  return{
   $:0,
   $0:function(t)
   {
    var r,b;
    r=t[0];
    b=null;
    return Concurrency.Delay(function()
    {
     var p$1,getOrAdd,o,o$1;
     function store(p$2,v)
     {
      return(getOrAdd(p$2))(function()
      {
       return v;
      });
     }
     p$1=getStore(r);
     getOrAdd=p$1[1];
     return FusionAsyncM.run(r,(o=(o$1=p$1[0](p),o$1==null?null:{
      $:1,
      $0:FusionAsyncM.rtn(o$1.$0)
     }),o==null?FusionAsyncM.map(function($1)
     {
      return store(p,$1);
     },fRm(p)):o.$0));
    });
   }
  };
 };
 FusionAsyncM.iterReaderA=function(fM,f,v,m)
 {
  function f$1(vO,a,m$1)
  {
   vO==null?void 0:void 0;
   m$1.$!==0?fM(m$1):void 0;
  }
  function g(v$1)
  {
   return Concurrency.Return(v$1);
  }
  Concurrency.Start(Concurrency.Bind(FusionAsyncM.run(v,FusionAsyncM.map(f,m)),function(x)
  {
   return g(f$1.apply(null,x));
  }),null);
 };
 FusionAsyncM.iterReader=function(fM,f,v,m)
 {
  var x;
  x=FusionAsyncM.run(v,FusionAsyncM.map(f,m));
  throw"iterS cannot be used in JavaScript!";
 };
 FusionAsyncM.mapState=function(get,set,m)
 {
  return{
   $:0,
   $0:function(t)
   {
    var s1,r,b;
    s1=t[0];
    r=t[1];
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Bind((FusionAsyncM.getFun(m))([get(s1),r]),function(a)
     {
      return Concurrency.Return([a[0],set(s1,a[1]),a[2]]);
     });
    });
   }
  };
 };
 FusionAsyncM.freeMessageF=function(f,m)
 {
  return{
   $:0,
   $0:function(t)
   {
    var s1,m1,b;
    s1=t[0];
    m1=t[1];
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.TryWith(Concurrency.Delay(function()
     {
      return Concurrency.Bind(m.$0([s1,ResultMessage.freeMessage(m1)]),function(a)
      {
       return Concurrency.Return([a[0],a[1],ResultMessage.freeMessageF(f,a[2])]);
      });
     }),function(a)
     {
      return Concurrency.Return([null,s1,ResultMessage.freeMessage(ResultMessage.addMsg(m1,new ResultMessage({
       $:5,
       $0:a.message,
       $1:a.stack
      })))]);
     });
    });
   }
  };
 };
 FusionAsyncM.ofFusionM=function(a)
 {
  var fm;
  fm=a.$0;
  return{
   $:0,
   $0:function(t)
   {
    return Concurrency.Return(fm([t[0],t[1]]));
   }
  };
 };
 FusionAsyncM.ofAsyncResultRM=function(a)
 {
  return FusionAsyncM.bind(FusionAsyncM.ofResultRM,FusionAsyncM.ofAsync(a));
 };
 FusionAsyncM.ofAsync=function(a)
 {
  return{
   $:0,
   $0:function(t)
   {
    var s;
    function f(v)
    {
     return[{
      $:1,
      $0:v
     },s,ResultMessage.NoMsg];
    }
    function g(v)
    {
     return Concurrency.Return(v);
    }
    s=t[0];
    return Concurrency.Bind(a,function(x)
    {
     return g(f(x));
    });
   }
  };
 };
 FusionAsyncM.ofResultMessage=function(m)
 {
  return FusionAsyncM.OkFMsg(null,m);
 };
 FusionAsyncM.ofMessage=function(m)
 {
  return FusionAsyncM.OkFMsg(null,new ResultMessage({
   $:4,
   $0:m
  }));
 };
 FusionAsyncM.ofOption=function(f,o)
 {
  var o$1;
  o$1=o==null?null:{
   $:1,
   $0:FusionAsyncM.OkF(o.$0)
  };
  return o$1==null?function(x)
  {
   return FusionAsyncM.ErrorF(f(x));
  }():o$1.$0;
 };
 FusionAsyncM.ofResult=function(r)
 {
  return r.$==1?FusionAsyncM.ErrorF(new ResultMessage({
   $:1,
   $0:(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(r.$0)
  })):FusionAsyncM.OkF(r.$0);
 };
 FusionAsyncM.ofResultS=function(r)
 {
  return r.$==1?FusionAsyncM.ErrorF(new ResultMessage({
   $:1,
   $0:r.$0
  })):FusionAsyncM.OkF(r.$0);
 };
 FusionAsyncM.ofResultM=function(r)
 {
  return r.$==1?FusionAsyncM.ErrorF(new ResultMessage({
   $:4,
   $0:r.$0
  })):FusionAsyncM.OkF(r.$0);
 };
 FusionAsyncM.ofResultRM=function(r)
 {
  return r.$==1?FusionAsyncM.ErrorF(r.$0):FusionAsyncM.OkF(r.$0);
 };
 FusionAsyncM.getOption=function(m)
 {
  return{
   $:0,
   $0:function(t)
   {
    var s1,m1,b;
    s1=t[0];
    m1=t[1];
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.TryWith(Concurrency.Delay(function()
     {
      return Concurrency.Bind(m.$0([s1,m1]),function(a)
      {
       return Concurrency.Return([{
        $:1,
        $0:a[0]
       },a[1],a[2]]);
      });
     }),function(a)
     {
      return Concurrency.Return([null,s1,ResultMessage.addMsg(m1,new ResultMessage({
       $:5,
       $0:a.message,
       $1:a.stack
      }))]);
     });
    });
   }
  };
 };
 FusionAsyncM.check=function()
 {
  return{
   $:0,
   $0:function(t)
   {
    return Concurrency.Return([ResultMessage.isFatal(t[1])?null:{
     $:1,
     $0:null
    },t[0],ResultMessage.NoMsg]);
   }
  };
 };
 FusionAsyncM.putS=function(s1)
 {
  return{
   $:0,
   $0:function()
   {
    return Concurrency.Return([{
     $:1,
     $0:null
    },s1,ResultMessage.NoMsg]);
   }
  };
 };
 FusionAsyncM.getR=function()
 {
  return{
   $:0,
   $0:function(t)
   {
    return Concurrency.Return([{
     $:1,
     $0:t[1]
    },t[0],ResultMessage.NoMsg]);
   }
  };
 };
 FusionAsyncM.getS=function()
 {
  return{
   $:0,
   $0:function(t)
   {
    var s;
    s=t[0];
    return Concurrency.Return([{
     $:1,
     $0:s
    },s,ResultMessage.NoMsg]);
   }
  };
 };
 FusionAsyncM.ErrorF=function(m)
 {
  return{
   $:0,
   $0:function(t)
   {
    return Concurrency.Return([null,t[0],m]);
   }
  };
 };
 FusionAsyncM.OkFMsg=function(v,m)
 {
  return{
   $:0,
   $0:function(t)
   {
    return Concurrency.Return([{
     $:1,
     $0:v
    },t[0],m]);
   }
  };
 };
 FusionAsyncM.OkF=function(v)
 {
  return{
   $:0,
   $0:function(t)
   {
    return Concurrency.Return([{
     $:1,
     $0:v
    },t[0],ResultMessage.NoMsg]);
   }
  };
 };
 FusionAsyncM.run=function(s,m)
 {
  return(FusionAsyncM.getFun(m))([s,ResultMessage.NoMsg]);
 };
 FusionAsyncM.from=Global.id;
 FusionAsyncM.getFun=function(a)
 {
  return a.$0;
 };
 FusionAsyncM.wrap=function(f)
 {
  return{
   $:0,
   $0:f
  };
 };
 FusionAsyncM.map=function(f,m)
 {
  return FusionAsyncM.bind(function(x)
  {
   return FusionAsyncM.rtn(f(x));
  },m);
 };
 FusionAsyncM.bind=function(f,m)
 {
  return{
   $:0,
   $0:function(t)
   {
    var s1,m1,b;
    s1=t[0];
    m1=t[1];
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.TryWith(Concurrency.Delay(function()
     {
      return Concurrency.Bind(m.$0([s1,m1]),function(a)
      {
       var v2O,s2,m2;
       v2O=a[0];
       s2=a[1];
       m2=a[2];
       return v2O!=null&&v2O.$==1?Concurrency.Bind(f(v2O.$0).$0([s2,ResultMessage.addMsg(m1,m2)]),function(a$1)
       {
        return Concurrency.Return([a$1[0],a$1[1],ResultMessage.addMsg(m2,a$1[2])]);
       }):Concurrency.Return([null,s2,m2]);
      });
     }),function(a)
     {
      return Concurrency.Return([null,s1,ResultMessage.addMsg(m1,new ResultMessage({
       $:5,
       $0:a.message,
       $1:a.stack
      }))]);
     });
    });
   }
  };
 };
 FusionAsyncM.rtn=function(v)
 {
  return{
   $:0,
   $0:function(t)
   {
    return Concurrency.Return([{
     $:1,
     $0:v
    },t[0],ResultMessage.NoMsg]);
   }
  };
 };
 AsyncResult.tryFinally=function(fn,fRA)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.TryFinally(Concurrency.Delay(function()
   {
    return fRA();
   }),function()
   {
    fn();
   });
  });
 };
 AsyncResult.tryWith=function(hnd,fRA)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.TryWith(Concurrency.Delay(function()
   {
    return fRA();
   }),function(a)
   {
    return hnd(a);
   });
  });
 };
 AsyncResult.absorbO=function(f,vORA)
 {
  function f$1(v)
  {
   return Result.absorbO(f,v);
  }
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(vORA,function(x)
  {
   return g(f$1(x));
  });
 };
 AsyncResult.absorbR=function(vRRA)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(vRRA,function(x)
  {
   return g(Result.join(x));
  });
 };
 AsyncResult.insertR=function(vRAR)
 {
  return vRAR.$==0?AsyncResult.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vRAR.$0):AsyncResult.rtn(Library.Error(vRAR.$0));
 };
 AsyncResult.insertO=function(vRAO)
 {
  var o;
  o=vRAO==null?null:{
   $:1,
   $0:AsyncResult.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vRAO.$0)
  };
  return o==null?AsyncResult.rtn(null):o.$0;
 };
 AsyncResult.sequenceSeqS=function(sq)
 {
  return function()
  {
   throw"traverseSeqS cannot be used in JavaScript!";
  };
 };
 AsyncResult.sequenceSeq=function(sq)
 {
  return AsyncResult.traverseSeq(Global.id,sq);
 };
 AsyncResult.traverseSeq=function(f,sq)
 {
  return Seq$1.fold(function(tail,head)
  {
   return AsyncResult.op_GreaterGreaterEquals(f(head),function(h)
   {
    return AsyncResult.op_GreaterGreaterEquals(tail,function(t)
    {
     return AsyncResult.rtn(Seq$1.append(t,[h]));
    });
   });
  },AsyncResult.rtn([]),sq);
 };
 AsyncResult.op_GreaterGreaterEquals=function(v,f)
 {
  return AsyncResult.bind(f,v);
 };
 AsyncResult.whileLoop=function(cond,fRA)
 {
  return cond()?AsyncResult.bind(function()
  {
   return AsyncResult.whileLoop(cond,fRA);
  },fRA()):AsyncResult.rtn();
 };
 AsyncResult.getResult=function(v)
 {
  function f(a)
  {
   return{
    $:0,
    $0:a
   };
  }
  function g(v$1)
  {
   return Concurrency.Return(v$1);
  }
  return Concurrency.Bind(v,function(x)
  {
   return g(f(x));
  });
 };
 AsyncResult.mapP=function(f,m)
 {
  return AsyncResult.bindP(function(x)
  {
   return AsyncResult.rtn(f(x));
  },m);
 };
 AsyncResult.map=function(f,m)
 {
  return AsyncResult.bind(function(x)
  {
   return AsyncResult.rtn(f(x));
  },m);
 };
 AsyncResult.bindP=function(fRA,vRA)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.TryWith(Concurrency.Delay(function()
   {
    return Concurrency.Bind(vRA,function(a)
    {
     return a.$==1?Concurrency.Return(Library.Error(a.$0)):fRA(a.$0);
    });
   }),function(a)
   {
    return Concurrency.Return(Library.Error(new ResultMessage({
     $:5,
     $0:a.message,
     $1:a.stack
    })));
   });
  });
 };
 AsyncResult.bind=function(fRA,vRA)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(vRA,function(a)
   {
    return a.$==1?Concurrency.Return(Library.Error(a.$0)):fRA(a.$0);
   });
  });
 };
 AsyncResult.iterA=function(fE,f,vRA)
 {
  function f$1(r)
  {
   Result.iter(fE,f,r);
  }
  function g(v)
  {
   return Concurrency.Return(v);
  }
  Concurrency.Start(Concurrency.Bind(vRA,function(x)
  {
   return g(f$1(x));
  }),null);
 };
 AsyncResult.iterS=function(fE,f,vRA)
 {
  throw"iterS cannot be used in JavaScript!";
 };
 AsyncResult.rtnR=function(vR)
 {
  return Concurrency.Return(vR);
 };
 AsyncResult.rtn=function(v)
 {
  return Concurrency.Return({
   $:0,
   $0:v
  });
 };
 AsyncResult.freeMessage=function(v)
 {
  function g(v$1)
  {
   return Concurrency.Return(v$1);
  }
  return Concurrency.Bind(v,function(x)
  {
   return g(Result.freeMessage(x));
  });
 };
 AsyncResult.mapError=function(fE,v)
 {
  function f(r)
  {
   return Result$1.MapError(fE,r);
  }
  function g(v$1)
  {
   return Concurrency.Return(v$1);
  }
  return Concurrency.Bind(v,function(x)
  {
   return g(f(x));
  });
 };
 AsyncResultBuilder=Monads.AsyncResultBuilder=Runtime.Class({
  For:function(s,fRA)
  {
   var $this;
   $this=this;
   return this.Using(Enumerator.Get(s),function(_enum)
   {
    return $this.While(function()
    {
     return _enum.MoveNext();
    },$this.Delay(function()
    {
     return fRA(_enum.Current());
    }));
   });
  },
  While:function(guard,fRA)
  {
   return AsyncResult.whileLoop(guard,fRA);
  },
  Using:function(resource,fRA)
  {
   return Concurrency.Using(resource,fRA);
  },
  TryFinally:function(fRA,fn)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.TryFinally(Concurrency.Delay(function()
    {
     return fRA();
    }),function()
    {
     fn();
    });
   });
  },
  TryWith:function(fRA,hnd)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.TryWith(Concurrency.Delay(function()
    {
     return fRA();
    }),function(a)
    {
     return hnd(a);
    });
   });
  },
  Run:function(fRA)
  {
   return AsyncResult.bind(fRA,AsyncResult.rtn());
  },
  Delay:Global.id,
  Combine:function(vR,fRA)
  {
   return AsyncResult.bind(fRA,AsyncResult.rtnR(vR));
  },
  Combine$1:function(vRA,fRA)
  {
   return AsyncResult.bind(fRA,vRA);
  },
  Bind:function(vR,fRA)
  {
   return AsyncResult.bind(fRA,AsyncResult.rtnR(vR));
  },
  Bind$1:function(vRA,fRA)
  {
   return AsyncResult.bind(fRA,vRA);
  },
  Zero:function()
  {
   return AsyncResult.rtn();
  },
  Return:function(v)
  {
   return AsyncResult.rtn(v);
  },
  ReturnFrom:function(vR)
  {
   return AsyncResult.rtnR(vR);
  },
  ReturnFrom$1:Global.id
 },Obj,AsyncResultBuilder);
 AsyncResultBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },AsyncResultBuilder);
 AsyncResultBuilderP=Monads.AsyncResultBuilderP=Runtime.Class({
  For:function(s,fRA)
  {
   var $this;
   $this=this;
   return this.Using(Enumerator.Get(s),function(_enum)
   {
    return $this.While(function()
    {
     return _enum.MoveNext();
    },$this.Delay(function()
    {
     return fRA(_enum.Current());
    }));
   });
  },
  While:function(guard,fRA)
  {
   return AsyncResult.whileLoop(guard,fRA);
  },
  Using:function(resource,fRA)
  {
   return Concurrency.Using(resource,fRA);
  },
  TryFinally:function(fRA,fn)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    try
    {
     return fRA();
    }
    finally
    {
     fn();
    }
   });
  },
  TryWith:function(fRA,hnd)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    try
    {
     return fRA();
    }
    catch(e)
    {
     return hnd(e);
    }
   });
  },
  Run:function(fRA)
  {
   return AsyncResult.bindP(fRA,AsyncResult.rtn());
  },
  Delay:Global.id,
  Combine:function(vR,fRA)
  {
   return AsyncResult.bindP(fRA,AsyncResult.rtnR(vR));
  },
  Combine$1:function(vRA,fRA)
  {
   return AsyncResult.bindP(fRA,vRA);
  },
  Bind:function(vR,fRA)
  {
   return AsyncResult.bindP(fRA,AsyncResult.rtnR(vR));
  },
  Bind$1:function(vRA,fRA)
  {
   return AsyncResult.bindP(fRA,vRA);
  },
  Zero:function()
  {
   return AsyncResult.rtn();
  },
  Return:function(v)
  {
   return AsyncResult.rtn(v);
  },
  ReturnFrom:function(vR)
  {
   return AsyncResult.rtnR(vR);
  },
  ReturnFrom$1:Global.id
 },Obj,AsyncResultBuilderP);
 AsyncResultBuilderP.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },AsyncResultBuilderP);
 Extensions["AsyncResultBuilderP.Combine"]=function(__,vA,fRA)
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
  return AsyncResult.bindP(fRA,Concurrency.Bind(vA,function(x)
  {
   return g(f(x));
  }));
 };
 Extensions["AsyncResultBuilderP.Bind"]=function(__,vA,fRA)
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
  return AsyncResult.bindP(fRA,Concurrency.Bind(vA,function(x)
  {
   return g(f(x));
  }));
 };
 Extensions["AsyncResultBuilderP.ReturnFrom"]=function(__,vA)
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
  return Concurrency.Bind(vA,function(x)
  {
   return g(f(x));
  });
 };
 Extensions["AsyncResultBuilder.Combine"]=function(__,vA,fRA)
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
  return AsyncResult.bind(fRA,Concurrency.Bind(vA,function(x)
  {
   return g(f(x));
  }));
 };
 Extensions["AsyncResultBuilder.Bind"]=function(__,vA,fRA)
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
  return AsyncResult.bind(fRA,Concurrency.Bind(vA,function(x)
  {
   return g(f(x));
  }));
 };
 Extensions["AsyncResultBuilder.ReturnFrom"]=function(__,vA)
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
  return Concurrency.Bind(vA,function(x)
  {
   return g(f(x));
  });
 };
 Monads.asyncResultP=function()
 {
  SC$1.$cctor();
  return SC$1.asyncResultP;
 };
 Monads.asyncResult=function()
 {
  SC$1.$cctor();
  return SC$1.asyncResult;
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
    },Operators$3.range(0,((v.length-s)/3>>0)-1));
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
    },Operators$3.range(0,((v.length-s)/3>>0)-1));
   }));
  })));
 };
 String.WhiteSpace=function(s)
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
 MailboxProcessorExt.PostAndAsyncReply=function(agent,msg,timeout)
 {
  return agent.PostAndAsyncReply(function(reply)
  {
   return[reply,msg];
  },timeout);
 };
 StateFull.applyReply=function(f,agent)
 {
  return StateFull.applyReplyA(function(v)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Return(f(v));
   });
  },agent);
 };
 StateFull.applyReplyA=function(f,agent)
 {
  return agent.PostAndAsyncReply(function(reply)
  {
   return function(v)
   {
    var b;
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Bind(f(v),function(a)
     {
      reply(a[1]);
      return Concurrency.Return(a[0]);
     });
    });
   };
  },null);
 };
 StateFull.apply=function(f,agent)
 {
  StateFull.applyA(function(v)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Return(f(v));
   });
  },agent);
 };
 StateFull.applyA=function(f,agent)
 {
  agent.mailbox.AddLast(function(v)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return f(v);
   });
  });
  agent.resume();
 };
 StateFull.setState=function(v,agent)
 {
  agent.mailbox.AddLast(function()
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Return(v);
   });
  });
  agent.resume();
 };
 StateFull.getStateA=function(agent)
 {
  return agent.PostAndAsyncReply(function(reply)
  {
   return function(v)
   {
    var b;
    b=null;
    return Concurrency.Delay(function()
    {
     reply(v);
     return Concurrency.Return(v);
    });
   };
  },null);
 };
 Mailbox.defHandler=function(ex,st)
 {
  Library.print(ex);
  return st;
 };
 Mailbox.stateFull=function(hndl,initState)
 {
  return MailboxProcessor.Start(function(inbox)
  {
   function loop(state)
   {
    var b;
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.TryWith(Concurrency.Delay(function()
     {
      return Concurrency.Bind(inbox.Receive(null),function(a)
      {
       return Concurrency.Bind(a(state),function(a$1)
       {
        return loop(a$1);
       });
      });
     }),function(a)
     {
      return loop(hndl(a,state));
     });
    });
   }
   return loop(initState);
  },null);
 };
 Mailbox.fold=function(hndl,f,initState)
 {
  return Mailbox.foldA(hndl,function($1,$2)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Return(f($1,$2));
   });
  },initState);
 };
 Mailbox.foldA=function(hndl,f,initState)
 {
  return MailboxProcessor.Start(function(inbox)
  {
   function loop(state)
   {
    var b;
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.TryWith(Concurrency.Delay(function()
     {
      return Concurrency.Bind(inbox.Receive(null),function(a)
      {
       return Concurrency.Bind(f(state,a),function(a$1)
       {
        return loop(a$1);
       });
      });
     }),function(a)
     {
      return loop(hndl(a,state));
     });
    });
   }
   return loop(initState);
  },null);
 };
 Mailbox.call=function(hndl,f)
 {
  return Mailbox.callA(hndl,function(msg)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Return(f(msg));
   });
  });
 };
 Mailbox.callA=function(hndl,f)
 {
  return Mailbox.iterA(hndl,function(t)
  {
   var replyChannel,msg,b;
   replyChannel=t[0];
   msg=t[1];
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(f(msg),function(a)
    {
     replyChannel(a);
     return Concurrency.Zero();
    });
   });
  });
 };
 Mailbox.iter=function(hndl,f)
 {
  return Mailbox.iterA(hndl,function(msg)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    f(msg);
    return Concurrency.Zero();
   });
  });
 };
 Mailbox.iterA=function(hndl,f)
 {
  return MailboxProcessor.Start(function(inbox)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.While(function()
    {
     return true;
    },Concurrency.Delay(function()
    {
     return Concurrency.TryWith(Concurrency.Delay(function()
     {
      return Concurrency.Bind(inbox.Receive(null),function(a)
      {
       return Concurrency.Bind(f(a),function()
       {
        return Concurrency.Return(null);
       });
      });
     }),function(a)
     {
      hndl(a);
      return Concurrency.Zero();
     });
    }));
   });
  },null);
 };
 CommArg.New=function(cargId,name,unique,build)
 {
  return{
   cargId:cargId,
   name:name,
   unique:unique,
   build:build
  };
 };
 CommArgCollection=CommArgRoot.CommArgCollection=Runtime.Class({
  get_CommArgs:function()
  {
   return this.$0;
  }
 },null,CommArgCollection);
 CommArgCollection.op_Addition=function(args,a)
 {
  return CommArgCollection.addPairs(a.$0,args);
 };
 CommArgCollection.op_Addition$1=function(args,arg)
 {
  return CommArgCollection.addPair(arg[0],arg[1],args);
 };
 CommArgCollection.op_Addition$2=function(args,args2)
 {
  return CommArgCollection.addPairs(args2,args);
 };
 TypedCommArg=CommArgRoot.TypedCommArg=Runtime.Class({
  get_CommArg:function()
  {
   return this.$0;
  }
 },null,TypedCommArg);
 TypedCommArg.op_DivisionAssignment=function(arg,f)
 {
  return[arg.$0,Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(FusionM.getS(),f),Global.id)];
 };
 TypedCommArg.op_DivisionAssignment$1=function(arg,v)
 {
  return[arg.$0,Operators$1.op_BarGreaterGreater(v,Global.id)];
 };
 TypedCommArg.op_DivisionAssignment$2=function(arg,v)
 {
  return[arg.$0,Operators$1.op_BarGreaterGreater(Operators$1.rtn(v),Global.id)];
 };
 CommArgModule.getFloatR=function(a,o)
 {
  return CommArgModule.getValueR(a,o);
 };
 CommArgModule.getBoolR=function(a,o)
 {
  return CommArgModule.getValueR(a,o);
 };
 CommArgModule.getStringR=function(a,o)
 {
  return CommArgModule.getValueR(a,o);
 };
 CommArgModule.getIntR=function(a,o)
 {
  return CommArgModule.getValueR(a,o);
 };
 CommArgModule.getValueR=function(a,o)
 {
  return{
   $:0,
   $0:o
  };
 };
 CommArgModule.getVRm=function(a,vRm)
 {
  return Operators$1.op_BarGreaterGreater(vRm,Global.id);
 };
 CommArgModule.argumentTRm=function(a,v)
 {
  return CommArgModule.argumentRm(a,v);
 };
 CommArgModule.argumentRm=function(a,vRm)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   return b.Bind(vRm,function(a$1)
   {
    return b.Return(a.build(a$1));
   });
  }));
 };
 CommArgModule.NewFloat=function(name,unique,build)
 {
  return CommArgModule.New(name,unique,build);
 };
 CommArgModule.NewBool=function(name,unique,build)
 {
  return CommArgModule.New(name,unique,build);
 };
 CommArgModule.NewString=function(name,unique,build)
 {
  return CommArgModule.New(name,unique,build);
 };
 CommArgModule.NewInt=function(name,unique,build)
 {
  return CommArgModule.New(name,unique,build);
 };
 CommArgModule.New=function(name,unique,build)
 {
  return new TypedCommArg({
   $:0,
   $0:CommArg.New({
    $:0,
    $0:Guid.NewGuid()
   },name,unique,function(x)
   {
    return build(Global.id(x));
   })
  });
 };
 CommArgCollection.addPairsRm=function(pairs)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   return b.Bind(FusionM.getS(),function(a)
   {
    return b.Bind(FusionM.putS(CommArgCollection.addPairs(pairs,a)),function()
    {
     return b.Return();
    });
   });
  }));
 };
 CommArgCollection.appendRm=function(args2)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   return b.Bind(FusionM.getS(),function(a)
   {
    return b.Bind(FusionM.putS(CommArgCollection.append(a,args2)),function()
    {
     return b.Return();
    });
   });
  }));
 };
 CommArgCollection.addPairs=function(pairs,collection)
 {
  return CommArgCollection.append(collection,CommArgRoot.CommArgCollection$1(pairs));
 };
 CommArgCollection.append=function(args1,args2)
 {
  var f,f$1;
  function g(c,v)
  {
   return function(a)
   {
    return CommArgCollection.addPair(c,v,a);
   };
  }
  f=(f$1=function(x)
  {
   return g.apply(null,Global.id(x));
  },function(a)
  {
   return function(b)
   {
    return(f$1(b))(a);
   };
  });
  return Seq$1.fold(function($1,$2)
  {
   return(f($1))($2);
  },args1,args2.get_CommArgs());
 };
 CommArgCollection.addPair=function(commArg,vRm,a)
 {
  function p(a$1,a$2)
  {
   return!Unchecked.Equals(a$1.cargId,commArg.cargId);
  }
  return CommArgRoot.CommArgCollection$1(Arrays.ofSeq(Seq$1.append((commArg.unique?function(s)
  {
   return Seq$1.filter(function($1)
   {
    return p($1[0],$1[1]);
   },s);
  }:Global.id)(a.$0),List.ofArray([[commArg,vRm]]))));
 };
 CommArgCollection.getBoolR=function(def,targ,args)
 {
  var t,m;
  t=FusionM.run(args,CommArgCollection.getBoolRm(def,targ));
  m=t[2];
  return Result.ofOption(function()
  {
   return m;
  },t[0]);
 };
 CommArgCollection.buildArgRm=function(targ)
 {
  function f()
  {
   return CommArgCollection.argumentNotFound(targ,void 0);
  }
  return Operators$1.op_GreaterGreaterEquals(CommArgCollection.tryBuildArgORm(targ),function(o)
  {
   return FusionM.ofOption(f,o);
  });
 };
 CommArgCollection.getBoolRm=function(def,targ)
 {
  return Operators$1.op_BarGreaterGreater(CommArgCollection.tryGetBoolORm(targ),function(o)
  {
   return o==null?def:o.$0;
  });
 };
 CommArgCollection.getFloatRm=function(targ)
 {
  function f()
  {
   return CommArgCollection.argumentNotFound(targ,void 0);
  }
  return Operators$1.op_GreaterGreaterEquals(CommArgCollection.tryGetFloatORm(targ),function(o)
  {
   return FusionM.ofOption(f,o);
  });
 };
 CommArgCollection.getStringRm=function(targ)
 {
  function f()
  {
   return CommArgCollection.argumentNotFound(targ,void 0);
  }
  return Operators$1.op_GreaterGreaterEquals(CommArgCollection.tryGetStringORm(targ),function(o)
  {
   return FusionM.ofOption(f,o);
  });
 };
 CommArgCollection.getIntRm=function(targ)
 {
  function f()
  {
   return CommArgCollection.argumentNotFound(targ,void 0);
  }
  return Operators$1.op_GreaterGreaterEquals(CommArgCollection.tryGetIntORm(targ),function(o)
  {
   return FusionM.ofOption(f,o);
  });
 };
 CommArgCollection.getValueRm=function(targ)
 {
  function f()
  {
   return CommArgCollection.argumentNotFound(targ,void 0);
  }
  return Operators$1.op_GreaterGreaterEquals(CommArgCollection.tryGetValueORm(targ),function(o)
  {
   return FusionM.ofOption(f,o);
  });
 };
 CommArgCollection.getValuesRm=function(targ)
 {
  var f;
  function f$1(t)
  {
   return t[1];
  }
  function g(v)
  {
   return CommArgModule.getVRm(targ,v);
  }
  return Operators$1.op_GreaterGreaterEquals(CommArgCollection.filterRm(function(t)
  {
   return Unchecked.Equals(t[0].cargId,targ.get_CommArg().cargId);
  }),(f=function(x)
  {
   return g(f$1(x));
  },function(s)
  {
   return FusionM.traverseSeq(f,s);
  }));
 };
 CommArgCollection.findArgRm=function(targ)
 {
  function f()
  {
   return CommArgCollection.argumentNotFound(targ,void 0);
  }
  return Operators$1.op_GreaterGreaterEquals(CommArgCollection.tryFindArgORm(targ),function(o)
  {
   return FusionM.ofOption(f,o);
  });
 };
 CommArgCollection.tryBuildArgORm=function(targ)
 {
  function m(c,o)
  {
   return c.build(o);
  }
  return Operators$1.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
  {
   var $1;
   return o==null?null:{
    $:1,
    $0:($1=o.$0,m($1[0],$1[1]))
   };
  });
 };
 CommArgCollection.tryGetFloatORm=function(targ)
 {
  function m(a,o)
  {
   return CommArgModule.getFloatR(targ,o);
  }
  return Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
  {
   var $1;
   return o==null?null:{
    $:1,
    $0:($1=o.$0,m($1[0],$1[1]))
   };
  }),Result.insertO),FusionM.ofResultRM);
 };
 CommArgCollection.tryGetBoolORm=function(targ)
 {
  function m(a,o)
  {
   return CommArgModule.getBoolR(targ,o);
  }
  return Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
  {
   var $1;
   return o==null?null:{
    $:1,
    $0:($1=o.$0,m($1[0],$1[1]))
   };
  }),Result.insertO),FusionM.ofResultRM);
 };
 CommArgCollection.tryGetStringORm=function(targ)
 {
  function m(a,o)
  {
   return CommArgModule.getStringR(targ,o);
  }
  return Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
  {
   var $1;
   return o==null?null:{
    $:1,
    $0:($1=o.$0,m($1[0],$1[1]))
   };
  }),Result.insertO),FusionM.ofResultRM);
 };
 CommArgCollection.tryGetIntORm=function(targ)
 {
  function m(a,o)
  {
   return CommArgModule.getIntR(targ,o);
  }
  return Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
  {
   var $1;
   return o==null?null:{
    $:1,
    $0:($1=o.$0,m($1[0],$1[1]))
   };
  }),Result.insertO),FusionM.ofResultRM);
 };
 CommArgCollection.tryGetValueORm=function(targ)
 {
  function m(a,o)
  {
   return CommArgModule.getValueR(targ,o);
  }
  return Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
  {
   var $1;
   return o==null?null:{
    $:1,
    $0:($1=o.$0,m($1[0],$1[1]))
   };
  }),Result.insertO),FusionM.ofResultRM);
 };
 CommArgCollection.tryFindArgORm=function(targ)
 {
  return Operators$1.op_GreaterGreaterEquals(FusionM.readerFun(function(coll)
  {
   var o,$1;
   return FusionM.insertO((o=CommArgCollection.tryFindArgO(targ,coll),o==null?null:{
    $:1,
    $0:($1=o.$0,FusionM.insertFst($1[0],$1[1]))
   }));
  }),Global.id);
 };
 CommArgCollection.tryFindArgO=function(a,a$1)
 {
  var arg;
  arg=a.$0;
  return Seq$1.tryFind(function(t)
  {
   return Unchecked.Equals(t[0].cargId,arg.cargId);
  },a$1.$0);
 };
 CommArgCollection.argumentNotFound=function(targ,u)
 {
  return new ResultMessage({
   $:1,
   $0:(function($1)
   {
    return function($2)
    {
     return $1("argument not found: "+Utils.toSafe($2));
    };
   }(Global.id))(targ.$0.name)
  });
 };
 CommArgCollection.containsAnyOfRm=function(ids)
 {
  return FusionM.readerFun(function(a)
  {
   function p(a$1,a$2)
   {
    return ids.Contains(a$1.cargId);
   }
   return Seq$1.exists(function($1)
   {
    return p($1[0],$1[1]);
   },a.$0);
  });
 };
 CommArgCollection.argumentsRm=function(filter)
 {
  function p(y)
  {
   return""!==y;
  }
  return Operators$1.op_BarGreaterGreater(Operators$1.op_GreaterGreaterEquals(CommArgCollection.filterRm(filter),function(s)
  {
   return FusionM.traverseSeq(function($1)
   {
    return CommArgModule.argumentTRm($1[0],$1[1]);
   },s);
  }),function(s)
  {
   return Seq$1.filter(p,s);
  });
 };
 CommArgCollection.filterRm=function(p)
 {
  return FusionM.readerFun(function(a)
  {
   return Seq$1.filter(p,a.$0);
  });
 };
 CommArgCollection.existsRm=function(f)
 {
  return FusionM.readerFun(function(a)
  {
   return Seq$1.exists(f,a.$0);
  });
 };
 CommArgCollection.argsRm=function()
 {
  return FusionM.readerFun(function(a)
  {
   return a.$0;
  });
 };
 CommArgCollection.contains=function(a,a$1)
 {
  function m(a$2,a$3)
  {
   return a$2.cargId;
  }
  return Seq$1.contains(a.$0.cargId,Seq$1.map(function($1)
  {
   return m($1[0],$1[1]);
  },a$1.$0));
 };
 CommArgCollection.trueForAll=function(a)
 {
  return true;
 };
 CommArgRoot.CommArgCollection$1=function(agvts)
 {
  return new CommArgCollection({
   $:0,
   $0:Seq$1.cache(agvts)
  });
 };
 PreproDirective.NoPrepo={
  $:13
 };
 PreproDirective.PrepoEndIf={
  $:10
 };
 PreproDirective.PrepoElse={
  $:9
 };
 PrepState.LevelZero={
  $:0
 };
 FsCodeModule.getSourceDir=function(srcDir,lines)
 {
  var $1,$2,$3,a,a$1,a$2,$4,a$3,$5,$6;
  $1=Arrays.get(lines,0);
  $2=Arrays.tryItem(1,lines);
  return(a=String.StartsWith("////#cd @\"",$1),a!=null&&a.$==1?($3=a.$0,true):$2!=null&&$2.$==1&&(a$1=String.StartsWith("////#cd @\"",$2.$0),a$1!=null&&a$1.$==1&&($3=a$1.$0,true)))?(a$2=Strings.Trim($3),(a$3=String.EndsWith("\"",a$2),a$3!=null&&a$3.$==1?$4=a$3.$0:$4=a$2,($5=String.StartsWith("\\",$4),$5!=null&&$5.$==1)?$4:($6=String.StartsWith("/",$4),$6!=null&&$6.$==1)?$4:Unchecked.Equals(Seq$1.tryItem(1,$4),{
   $:1,
   $0:":"
  })?$4:srcDir+"/"+$4)):srcDir;
 };
 FsCodeModule.separateDirectives=function(fsNass)
 {
  var defines,preps;
  defines=Arrays.ofSeq(Seq$1.distinct(Seq$1.choose(function(a)
  {
   return a.$==2?{
    $:1,
    $0:a.$0
   }:null;
  },fsNass)));
  preps=FsCodeModule.filterPreps(fsNass);
  return[Arrays.ofSeq(Seq$1.distinct(Seq$1.choose(function(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0
   }:null;
  },preps))),defines,Arrays.ofSeq(Seq$1.distinct(Seq$1.choose(function(a)
  {
   return a.$==6?{
    $:1,
    $0:a.$0
   }:null;
  },preps))),Arrays.ofSeq(Seq$1.distinct(Seq$1.choose(function(a)
  {
   return a.$==5?{
    $:1,
    $0:a.$0
   }:null;
  },preps))),Seq$1.tryHead(Seq$1.choose(function(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  },preps))];
 };
 FsCodeModule.getTopDirectives=function(fsNass)
 {
  var directs,o,o$1;
  directs=Arrays.ofSeq(Seq$1.append(Seq$1.map(function(a)
  {
   return{
    $:2,
    $0:a
   };
  },(o=(o$1=Seq$1.tryHead(fsNass),o$1==null?null:{
   $:1,
   $0:Strings.SplitStrings(FsCodeModule.extractDefines({
    $:0,
    $0:o$1.$0[0]
   }),[" ","-d:"],1)
  }),o==null?[]:o.$0)),Seq$1.filter(function(a)
  {
   return a.$==2||(a.$==1||(a.$==6||(a.$==5||(a.$==0||(a.$==7||(a.$==10||(a.$==8||a.$==9)))))));
  },Seq$1.map(function(t)
  {
   return t[1];
  },fsNass))));
  return[Arrays.ofSeq(Seq$1.map(function(t)
  {
   return t[0];
  },fsNass)),directs];
 };
 FsCodeModule.filterPreps=function(preps)
 {
  var defines;
  function isDefined(def)
  {
   var x;
   x=Seq$1.contains(Strings.Trim(Strings.Replace(def,"!","")),defines);
   return(Strings.StartsWith(Strings.Trim(def),"!")?function(v)
   {
    return!v;
   }:Global.id)(x);
  }
  function m(st,prep)
  {
   var $1;
   switch(st.$==0?prep.$==7?($1=prep.$0,0):prep.$==10?2:7:st.$==2?prep.$==7?1:prep.$==10?2:prep.$==8?($1=[prep.$0,st.$0],4):prep.$==9?($1=st.$0,5):8:st.$==3?prep.$==7?1:prep.$==10?2:prep.$==8?($1=st.$0,6):prep.$==9?($1=st.$0,6):8:prep.$==7?($1=prep.$0,0):prep.$==10?2:prep.$==8?($1=st.$0,3):prep.$==9?($1=st.$0,3):7)
   {
    case 0:
     return[null,isDefined($1)?{
      $:1,
      $0:st
     }:{
      $:2,
      $0:st
     }];
    case 1:
     return[null,{
      $:3,
      $0:st
     }];
    case 2:
     return[null,FsCodeModule.prev(st)];
    case 3:
     return[null,{
      $:3,
      $0:$1
     }];
    case 4:
     return[null,isDefined($1[0])?{
      $:1,
      $0:st
     }:{
      $:2,
      $0:$1[1]
     }];
    case 5:
     return[null,{
      $:1,
      $0:$1
     }];
    case 6:
     return[null,{
      $:3,
      $0:$1
     }];
    case 7:
     return[{
      $:1,
      $0:prep
     },st];
    case 8:
     return[null,st];
   }
  }
  defines=Arrays.ofSeq(Seq$1.distinct(Seq$1.choose(function(a)
  {
   return a.$==2?{
    $:1,
    $0:a.$0
   }:null;
  },preps)));
  return Arrays.ofSeq(Seq$1.choose(Global.id,((((Runtime.Curried3(Seq$1.mapFold))(m))(PrepState.LevelZero))(preps))[0]));
 };
 FsCodeModule.prev=function(a)
 {
  return a.$==1?a.$0:a.$==2?a.$0:a.$==3?a.$0:PrepState.LevelZero;
 };
 FsCodeModule.isActive=function(a)
 {
  return a.$==1||(a.$==2?false:a.$!=3);
 };
 FsCodeModule.separatePrepros=function(code)
 {
  function quoted(line)
  {
   var o;
   o=Seq$1.tryLast(Strings.SplitStrings(Strings.Trim(line),["\""],1));
   return o==null?line:o.$0;
  }
  function rest(line)
  {
   var o,o$1;
   return Strings.Trim((o=(o$1=String.splitInTwoO(" ",Strings.Trim(line)),o$1==null?null:{
    $:1,
    $0:o$1.$0[1]
   }),o==null?"":o.$0));
  }
  function comment(y)
  {
   return"//"+y;
  }
  return Arrays.map(function(line)
  {
   var m,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14;
   m=true;
   return m&&Strings.StartsWith(line,"#define")?[comment(line),{
    $:2,
    $0:rest(line)
   }]:m&&Strings.StartsWith(line,"#cd")?[comment(line),{
    $:0,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"#r")?[comment(line),{
    $:1,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"#load")?[comment(line),{
    $:3,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"#nowarn")?[comment(line),{
    $:5,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(Strings.Trim(line),"# ")?[comment(line),{
    $:4,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(Strings.Trim(line),"#line")?[comment(line),{
    $:4,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"#I")?[comment(line),{
    $:6,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"#if")?[line,{
    $:7,
    $0:rest(line)
   }]:m&&Strings.StartsWith(line,"#elif")?[line,{
    $:8,
    $0:rest(line)
   }]:m&&Strings.StartsWith(line,"#else")?[line,PreproDirective.PrepoElse]:m&&Strings.StartsWith(line,"#endif")?[line,PreproDirective.PrepoEndIf]:m&&Strings.StartsWith(line,"#light")?[line,{
    $:11,
    $0:false
   }]:m&&Strings.StartsWith(line,"#")?[comment(line),{
    $:12,
    $0:line
   }]:[line,PreproDirective.NoPrepo];
  },code);
 };
 FsCodeModule.extractDefines=function(a)
 {
  var code,m;
  code=a.$0;
  return Strings.StartsWith(code,"////-d:")?Slice.string(code,{
   $:1,
   $0:4
  },{
   $:1,
   $0:(m=code.indexOf("\n"),m===-1?code.length:m)-1
  }):"";
 };
 SnippetId=Library.SnippetId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,SnippetId);
 SnippetId.get_Empty=function()
 {
  return new SnippetId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  });
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
 SnippetCollection.New=function(generation,ordered,fetcher,predecesorsCache,reducedCache,prepCode)
 {
  return{
   generation:generation,
   ordered:ordered,
   fetcher:fetcher,
   predecesorsCache:predecesorsCache,
   reducedCache:reducedCache,
   prepCode:prepCode
  };
 };
 SnippetModule.codeFsxRm=function(curId)
 {
  return Operators$1.op_BarGreaterGreater(SnippetModule.fastCodeRm({
   $:1,
   $0:curId
  },{
   $:1,
   $0:curId
  }),function(t)
  {
   return t[0];
  });
 };
 SnippetModule.fastCodeRm=function(curIdO,lastIdO)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   return b.Bind(SnippetModule.fastReducedRm(curIdO,lastIdO),function(a)
   {
    return b.Return(SnippetModule.finishCode(a[0],a[1],a[2]));
   });
  }));
 };
 SnippetModule.fastReducedRm=function(curIdO,lastIdO)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   return b.Bind(FusionM.insertO(curIdO==null?null:{
    $:1,
    $0:SnippetModule.snippetORm(curIdO.$0)
   }),function(a)
   {
    return b.Bind(FusionM.insertO(lastIdO==null?null:{
     $:1,
     $0:SnippetModule.snippetORm(lastIdO.$0)
    }),function(a$1)
    {
     var $1,$2,$3,curSnippet;
     $1=a==null?null:a.$0;
     $2=a$1==null?null:a$1.$0;
     return($2!=null&&$2.$==1?$1!=null&&$1.$==1?($3=[$1.$0,$2.$0],false):true:true)?b.ReturnFrom(SnippetModule.reducedCodeRm([])):(curSnippet=$3[0],b.Bind(SnippetModule.uniquePredsRm($3[1]),function(a$2)
     {
      var preds;
      preds=new FSharpSet.New(a$2);
      return b.Bind((SnippetModule.reducedOthersORmMemo())([true,curSnippet.snpId,preds]),function(a$3)
      {
       return b.Bind((SnippetModule.reducedOthersORmMemo())([false,curSnippet.snpId,preds]),function(a$4)
       {
        return b.Bind(SnippetModule.separateCodeRm(curSnippet),function(a$5)
        {
         var part1,o,o$1,t;
         part1=(o=a$3==null?null:{
          $:1,
          $0:(function(t$1)
          {
           var l,c,d;
           l=t$1[0];
           c=t$1[1];
           d=t$1[2];
           return function(t$2)
           {
            return SnippetModule.addSeps(l,c,d,t$2[0],t$2[1],t$2[2]);
           };
          }(a$3.$0))(a$5)
         },o==null?a$5:o.$0);
         return b.Return((o$1=a$4==null?null:{
          $:1,
          $0:(t=a$4.$0,SnippetModule.addSeps(part1[0],part1[1],part1[2],t[0],t[1],t[2]))
         },o$1==null?part1:o$1.$0));
        });
       });
      });
     }));
    });
   });
  }));
 };
 SnippetModule.reducedOthersORmMemo=function()
 {
  function g(c)
  {
   return c.reducedCache();
  }
  return function(p)
  {
   return FusionM.memoizeRm(g,function($1)
   {
    return SnippetModule.reducedOthersORm($1[0],$1[1],$1[2]);
   },p);
  };
 };
 SnippetModule.reducedOthersORm=function(before,snpId,snpIds)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   function p(snp)
   {
    return!Unchecked.Equals(snp.snpId,snpId)&&snpIds.Contains(snp.snpId);
   }
   return b.Bind(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(SnippetModule.orderedRm(),(before?function(p$1)
   {
    return function(s)
    {
     return Seq$1.takeWhile(p$1,s);
    };
   }:function(p$1)
   {
    return function(s)
    {
     return Seq$1.skipWhile(p$1,s);
    };
   })(function(snp)
   {
    return!Unchecked.Equals(snp.snpId,snpId);
   })),function(s)
   {
    return Seq$1.filter(p,s);
   }),function(a)
   {
    return Seq$1.isEmpty(a)?b.Return(null):b.Bind(SnippetModule.reducedCodeRm(a),function(a$1)
    {
     return b.Return({
      $:1,
      $0:a$1
     });
    });
   });
  }));
 };
 SnippetModule.finishCode=function(lines,code,directs)
 {
  var p,prepIs,nowarns,cdO,assembs,config,part1;
  p=FsCodeModule.separateDirectives(directs);
  prepIs=p[2];
  nowarns=p[3];
  cdO=p[4];
  assembs=p[0];
  config=Strings.concat(" ",Seq$1.map(function(y)
  {
   return"-d:"+y;
  },Seq$1.sort(p[1])));
  part1=List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(config!==""?["////"+config]:[],Seq$1.delay(function()
   {
    return Seq$1.append(cdO!=null?[(function($1)
    {
     return function($2)
     {
      return $1("////#cd @\""+Utils.toSafe($2)+"\"");
     };
    }(Global.id))(cdO.$0)]:[],Seq$1.delay(function()
    {
     return Seq$1.append(Seq$1.map(function($1)
     {
      return function($2)
      {
       return $1("#I @\""+Utils.toSafe($2)+"\"");
      };
     }(Global.id),prepIs),Seq$1.delay(function()
     {
      return Seq$1.append(Seq$1.map(function($1)
      {
       return function($2)
       {
        return $1("#r @\""+Utils.toSafe($2)+"\"");
       };
      }(Global.id),assembs),Seq$1.delay(function()
      {
       return Seq$1.map(function($1)
       {
        return function($2)
        {
         return $1("#nowarn \""+Utils.toSafe($2)+"\"");
        };
       }(Global.id),nowarns);
      }));
     }));
    }));
   }));
  }));
  return[Strings.concat("\n",Seq$1.append(part1,code)),Arrays.ofSeq((Seq$1.mapFold(function(firstLine,t)
  {
   var len;
   len=t[2];
   return[[[t[0],t[1]],[t[3],firstLine,firstLine+len]],firstLine+len];
  },part1.get_Length(),lines))[0])];
 };
 SnippetModule.reducedCodeRm=function(snippets)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   return b.Bind(FusionM.traverseSeq(SnippetModule.separateCodeRm,snippets),function(a)
   {
    var t;
    return b.Return((t=Seq$1.reduce(function($1,$2)
    {
     return(function(t$1)
     {
      var l,c,d;
      l=t$1[0];
      c=t$1[1];
      d=t$1[2];
      return function(t$2)
      {
       return SnippetModule.addSeps(l,c,d,t$2[0],t$2[1],t$2[2]);
      };
     }($1))($2);
    },Seq$1.isEmpty(a)?[[[],[],[]]]:a),[t[0],[Strings.concat("\n",t[1])],t[2]]));
   });
  }));
 };
 SnippetModule.addSeps=function(lines1,code1,directs1,lines2,code2,directs2)
 {
  return[lines1.concat(lines2),code1.concat(code2),directs1.concat(directs2)];
 };
 SnippetModule.separateCodeRm=function(snp)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   return b.Bind(SnippetModule.indentRm(snp),function(a)
   {
    var indentF;
    function m(l,pr)
    {
     return[Strings.replicate(a," ")+l,pr];
    }
    indentF=(a===0?[Global.id,""]:[function(a$1)
    {
     return Arrays.map(function($1)
     {
      return m($1[0],$1[1]);
     },a$1);
    },(function($1)
    {
     return function($2)
     {
      return $1("("+Global.String($2)+")");
     };
    }(Global.id))(a)])[0];
    return b.Bind(SnippetModule.prepareCodeRm(snp),function(a$1)
    {
     var p,code;
     p=FsCodeModule.getTopDirectives(indentF(FsCodeModule.separatePrepros(Strings.SplitChars(a$1,["\n"],0))));
     code=p[0];
     return b.Return([[[snp.snpId,SnippetModule.snippetName(snp.snpName,snp.snpContent),Arrays.length(code),a]],code,p[1]]);
    });
   });
  }));
 };
 SnippetModule.ancestorsRm=function(snp)
 {
  function ancestorsRm2(snp$1)
  {
   return function(lst)
   {
    var b;
    b=FusionM.fusion();
    return b.Run(b.Delay(function()
    {
     return b.Bind(SnippetModule.parentORm(snp$1),function(a)
     {
      var p;
      return a==null?b.Return(lst):(p=a.$0,b.ReturnFrom((ancestorsRm2(p))(new List.T({
       $:1,
       $0:p,
       $1:lst
      }))));
     });
    }));
   };
  }
  return(ancestorsRm2(snp))(List.T.Empty);
 };
 SnippetModule.levelRm=function(snp)
 {
  function levelRm2(snp$1)
  {
   return function(lv)
   {
    var b;
    b=FusionM.fusion();
    return b.Run(b.Delay(function()
    {
     return b.Bind(SnippetModule.parentORm(snp$1),function(a)
     {
      return a!=null&&a.$==1?b.ReturnFrom((levelRm2(a.$0))(lv+1)):b.Return(lv);
     });
    }));
   };
  }
  return(levelRm2(snp))(0);
 };
 SnippetModule.indentRm=function(snp)
 {
  function indentMeChildNextRm(snp$1)
  {
   var b;
   b=FusionM.fusion();
   return b.Run(b.Delay(function()
   {
    var p,a,nextO,currO;
    p=(a=SnippetModule.propertyPairO("IndentChildren",snp$1),a!=null&&a.$==1?[(ParseO.parseIntO())(a.$0[0]),(ParseO.parseIntO())(a.$0[1])]:[null,null]);
    nextO=p[1];
    currO=p[0];
    return b.Bind(SnippetModule.parentORm(snp$1),function(a$1)
    {
     return a$1==null?b.Return([0,[currO==null?4:currO.$0,nextO==null?4:nextO.$0]]):b.Bind(indentMeChildNextRm(a$1.$0),function(a$2)
     {
      var next,me;
      next=a$2[1][1];
      me=a$2[1][0];
      return b.Return([me,[me+(currO==null?next:currO.$0),nextO==null?next:nextO.$0]]);
     });
    });
   }));
  }
  return Operators$1.op_BarGreaterGreater(indentMeChildNextRm(snp),function(t)
  {
   return t[0];
  });
 };
 SnippetModule.propertyHierORm=function(n,snp)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   var m;
   m=SnippetModule.propertyO(n,snp);
   return m==null?b.Bind(SnippetModule.parentORm(snp),function(a)
   {
    return a==null?b.Return(null):b.Bind(SnippetModule.propertyHierORm(n,a.$0),function(a$1)
    {
     var $1,sn,next;
     return b.Return(a$1==null?null:{
      $:1,
      $0:($1=a$1.$0,(sn=$1[0],(next=$1[1][1],[sn,[next,next]])))
     });
    });
   }):b.Return({
    $:1,
    $0:[snp,SnippetModule.propertyPair(m.$0)]
   });
  }));
 };
 SnippetModule.modifiedRecRm=function(snp)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   return b.Bind(SnippetModule.modifiedRm(snp),function(a)
   {
    return a?b.Return(true):b.Bind(SnippetModule.uniquePredsRm(snp),function(a$1)
    {
     return b.Bind(FusionM.sequenceSeq(Seq$1.map(SnippetModule.snippetORm,a$1)),function(a$2)
     {
      return b.Bind(FusionM.sequenceSeq(Seq$1.map(SnippetModule.modifiedRm,Seq$1.choose(Global.id,a$2))),function(a$3)
      {
       return b.Return(Seq$1.contains(true,a$3));
      });
     });
    });
   });
  }));
 };
 SnippetModule.predsGenerationRm=function(snp)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   return b.Bind(Operators$1.op_GreaterGreaterEquals(SnippetModule.uniquePredsRm(snp),function(s)
   {
    return FusionM.traverseSeq(SnippetModule.snippetRm,s);
   }),function(a)
   {
    return b.Return(Seq$1.max(Seq$1.map(function(snp$1)
    {
     return snp$1.snpModified;
    },a)));
   });
  }));
 };
 SnippetModule.uniquePredsRm=function(snp)
 {
  return(SnippetModule.predsLRmMemo())(snp.snpId);
 };
 SnippetModule.predsLRmMemo=function()
 {
  function g(c)
  {
   return c.predecesorsCache();
  }
  return function(p)
  {
   return FusionM.memoizeRm(g,SnippetModule.predsLRm,p);
  };
 };
 SnippetModule.predsLRm=function(sid)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   var ins,outs;
   ins=List.ofArray([sid]);
   outs=List.T.Empty;
   return b.Combine(b.While(function()
   {
    return!(ins.$==0);
   },b.Delay(function()
   {
    var rest,hd;
    return ins.$==1?(rest=ins.$1,(hd=ins.$0,List.contains(hd,outs)?(ins=rest,b.Zero()):b.Bind(SnippetModule.snippetORm(hd),function(a)
    {
     var o,snp;
     ins=List.append(rest,(o=a==null?null:{
      $:1,
      $0:(snp=a.$0,List.append(List.ofSeq(snp.snpPredIds),Option.toList(snp.snpParentIdO)))
     },o==null?List.T.Empty:o.$0));
     outs=new List.T({
      $:1,
      $0:hd,
      $1:outs
     });
     return b.Zero();
    }))):b.Zero();
   })),b.Delay(function()
   {
    return b.Return(outs);
   }));
  }));
 };
 SnippetModule.snippetFromRefORm=function(a)
 {
  return a.$==1?SnippetModule.snippetFromPathORm(a.$0):SnippetModule.snippetORm(a.$0);
 };
 SnippetModule.snippetFromPathORm=function(pth)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   return b.Bind(SnippetModule.orderedRm(),function(a)
   {
    function m(path,prntO)
    {
     return function(snp)
     {
      return path.length===0?[null,[[],prntO]]:SnippetModule.snippetName(snp.snpName,snp.snpContent)!==Arrays.get(path,0)||!Unchecked.Equals(snp.snpParentIdO,prntO)?[null,[path,prntO]]:path.length>1?[null,[Slice.array(path,{
       $:1,
       $0:1
      },null),{
       $:1,
       $0:snp.snpId
      }]]:[{
       $:1,
       $0:snp
      },[[],prntO]];
     };
    }
    return b.Return(Seq$1.tryHead(Seq$1.choose(Global.id,(Seq$1.mapFold(function($1,$2)
    {
     return(function($3)
     {
      return m($3[0],$3[1]);
     }($1))($2);
    },[pth,null],a))[0])));
   });
  }));
 };
 SnippetModule.pathRm=function(sid)
 {
  var v;
  function m(prn)
  {
   return Operators$1.op_BarGreaterGreater(SnippetModule.pathRm(prn.snpId),function(rest)
   {
    return new List.T({
     $:1,
     $0:prn.snpId,
     $1:rest
    });
   });
  }
  return Operators$1.op_BarGreaterGreater(Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(SnippetModule.snippetORm(sid),function(o)
  {
   return o==null?null:{
    $:1,
    $0:SnippetModule.parentORm(o.$0)
   };
  }),FusionM.insertO),function(o)
  {
   return o==null?null:Global.id(o.$0);
  }),function(o)
  {
   return o==null?null:{
    $:1,
    $0:m(o.$0)
   };
  }),FusionM.insertO),(v=List.T.Empty,function(o)
  {
   return o==null?v:o.$0;
  }));
 };
 SnippetModule.snippetNameRm=function(sid)
 {
  return Operators$1.op_BarGreaterGreater(SnippetModule.snippetRm(sid),function(snp)
  {
   return SnippetModule.snippetName(snp.snpName,snp.snpContent);
  });
 };
 SnippetModule.snippetRm=function(sid)
 {
  return FusionM.absorbO(function()
  {
   return new ResultMessage({
    $:1,
    $0:(function($1)
    {
     return function($2)
     {
      return $1("Snippet not found "+WasmPackager_GeneratedPrintf.p($2));
     };
    }(Global.id))(sid)
   });
  },SnippetModule.snippetORm(sid));
 };
 SnippetModule.prepareCodeRm=function(snp)
 {
  return FusionM.readerFun(function(a)
  {
   return a.prepCode(snp);
  });
 };
 SnippetModule.orderedRm=function()
 {
  return FusionM.readerFun(function(a)
  {
   return a.ordered;
  });
 };
 SnippetModule.childrenRm=function(sid)
 {
  return FusionM.readerFun(function(a)
  {
   return Seq$1.filter(function(s)
   {
    return Unchecked.Equals(s.snpParentIdO,{
     $:1,
     $0:sid
    });
   },a.ordered);
  });
 };
 SnippetModule.modifiedRm=function(snp)
 {
  return FusionM.readerFun(function(a)
  {
   return snp.snpModified>a.generation;
  });
 };
 SnippetModule.maxGenerationRm=function()
 {
  return FusionM.readerFun(function(a)
  {
   return Seq$1.max(Seq$1.map(function(s)
   {
    return s.snpModified;
   },a.ordered));
  });
 };
 SnippetModule.predecessorsRm=function(snp)
 {
  return FusionM.readerFun(function(a)
  {
   return Seq$1.choose(a.fetcher,snp.snpPredIds);
  });
 };
 SnippetModule.parentORm=function(snp)
 {
  return FusionM.readerFun(function(a)
  {
   var o;
   o=snp.snpParentIdO;
   return o==null?null:a.fetcher(o.$0);
  });
 };
 SnippetModule.snippetORm=function(sid)
 {
  return FusionM.readerFun(function(a)
  {
   return a.fetcher(sid);
  });
 };
 SnippetModule.propertyPairO=function(n,snp)
 {
  var o;
  o=SnippetModule.propertyO(n,snp);
  return o==null?null:{
   $:1,
   $0:SnippetModule.propertyPair(o.$0)
  };
 };
 SnippetModule.propertyPair=function(prv)
 {
  var vs,x,v;
  vs=Strings.SplitStrings(prv,[SnippetModule.tieFighter()],0);
  return[Arrays.get(vs,0),(x=Arrays.tryItem(1,vs),(v=Arrays.get(vs,0),x==null?v:x.$0))];
 };
 SnippetModule.tieFighter=function()
 {
  SC$1.$cctor();
  return SC$1.tieFighter;
 };
 SnippetModule.propertyO=function(n,snp)
 {
  function c(name,value)
  {
   return name===n?{
    $:1,
    $0:value
   }:null;
  }
  return Arrays.tryPick(function($1)
  {
   return c($1[0],$1[1]);
  },snp.snpProperties);
 };
 SnippetModule.nameSanitized=function(snp)
 {
  var illegal,c;
  illegal=["\"","<",">","|","\u0000","\u0001","\u0002","\u0003","\u0004","\u0005","\u0006","\u0007","\u0008","\u0009","\n","\u000b","\u000c","\r","\u000e","\u000f","\u0010","\u0011","\u0012","\u0013","\u0014","\u0015","\u0016","\u0017","\u0018","\u0019","\u001a","\u001b","\u001c","\u001d","\u001e","\u001f",":","*","?","\\","/"];
  return Strings.Filter(function(c$1)
  {
   return!Arrays.contains(c$1,illegal);
  },snp.snpName)+" "+(c=snp.snpId.get_Id(),Global.String(c));
 };
 SnippetModule.snippetName=function(name,content)
 {
  var o;
  return name!==""?name:(o=Seq$1.tryHead(Seq$1.filter(function(l)
  {
   return!(Strings.StartsWith(l,"#")||Strings.StartsWith(l,"[<")||Strings.StartsWith(l,"//"));
  },Seq$1.map(Strings.Trim,Strings.SplitChars(content,["\n"],1)))),o==null?"<empty>":o.$0);
 };
 SnippetModule.defaultSnippet=function()
 {
  SC$1.$cctor();
  return SC$1.defaultSnippet;
 };
 SnippetModule.New=function(name,content,parentO)
 {
  return Snippet.New(new SnippetId({
   $:0,
   $0:Guid.NewGuid()
  }),name,content,parentO,new FSharpSet.New$1(null),[],SnippetModule.getNextModified());
 };
 SnippetModule.getNextModified=function()
 {
  return Date.now();
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
 ModuleName=FShUI_AssemblyData.ModuleName=Runtime.Class({
  get_Id2:function()
  {
   return Strings.Replace(this.get_Id(),"+",".");
  },
  get_Id:function()
  {
   return this.$0;
  }
 },null,ModuleName);
 TypeName=FShUI_AssemblyData.TypeName=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,TypeName);
 MethodName=FShUI_AssemblyData.MethodName=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,MethodName);
 AssemblyName=FShUI_AssemblyData.AssemblyName=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,AssemblyName);
 AssemblyRef=FShUI_AssemblyData.AssemblyRef=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,AssemblyRef);
 JSCode=FShUI_AssemblyData.JSCode=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,JSCode);
 Resource=FShUI_AssemblyData.Resource=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,Resource);
 ModuleRef.New=function(name,asmName)
 {
  return{
   name:name,
   asmName:asmName
  };
 };
 MethodRef.New=function(name,modRef)
 {
  return{
   name:name,
   modRef:modRef
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
 AssemblyDef.New=function(name,self$1,modules,dependencies,resources,javaScripts)
 {
  return{
   name:name,
   self:self$1,
   modules:modules,
   dependencies:dependencies,
   resources:resources,
   javaScripts:javaScripts
  };
 };
 Address=WebSockets.Address=Runtime.Class({
  get_txt:function()
  {
   return this.$0;
  }
 },null,Address);
 BrokerRequest.BRGetProcessId={
  $:1
 };
 BrokerRequest.BRGetConnections={
  $:0
 };
 MessageType.MsgRequestForEcho={
  $:5
 };
 MessageType.MsgRequestForId={
  $:4
 };
 MessageType.MsgFromBroker={
  $:3
 };
 MessageType.MsgReply={
  $:2
 };
 MessageType.MsgRequest={
  $:1
 };
 MessageType.MsgInformation={
  $:0
 };
 BrokerMessage.BMReceiverCantReply={
  $:4
 };
 BrokerMessage.BMOnlyBrokerShouldUse={
  $:1
 };
 BrokerMessage.BMOk={
  $:0
 };
 Replier.Receiver={
  $:2
 };
 Replier.Broker={
  $:1
 };
 Replier.NoReply={
  $:0
 };
 MessageGeneric.New=function(from,destination,msgType,subtype,id,payload,replier)
 {
  return{
   from:from,
   destination:destination,
   msgType:msgType,
   subtype:subtype,
   id:id,
   payload:payload,
   replier:replier
  };
 };
 ClientTypeFSharp.FSharp={
  $:0
 };
 ClientTypeFSStation.FSStation={
  $:0
 };
 ClientTypeJScript.JScript={
  $:0
 };
 Handler=ReplyHandler.Handler=Runtime.Class({
  Cancel:function(key,cnl)
  {
   var o;
   o=this.waitingAgent;
   o.mailbox.AddLast({
    $:3,
    $0:key,
    $1:cnl
   });
   o.resume();
  },
  Raise:function(key,exn)
  {
   var o;
   o=this.waitingAgent;
   o.mailbox.AddLast({
    $:2,
    $0:key,
    $1:exn
   });
   o.resume();
  },
  Reply:function(key,msg)
  {
   var o;
   o=this.waitingAgent;
   o.mailbox.AddLast({
    $:1,
    $0:key,
    $1:msg
   });
   o.resume();
  },
  Add:function(key,fns)
  {
   var o;
   o=this.waitingAgent;
   o.mailbox.AddLast({
    $:0,
    $0:key,
    $1:fns
   });
   o.resume();
  }
 },Obj,Handler);
 Handler.New=Runtime.Ctor(function(defProc)
 {
  Obj.New.call(this);
  this.waitingAgent=Mailbox.fold(Mailbox.defHandler,function($1,$2)
  {
   var msg,exn,cnl;
   function exec(key,f,def)
   {
    var o,o$1;
    o=(o$1=Map.TryFind(key,$1),o$1==null?null:{
     $:1,
     $0:f(o$1.$0)
    });
    o==null?def():void 0;
    return $1.Remove(key);
   }
   return $2.$==1?(msg=$2.$1,exec($2.$0,function(t)
   {
    t[0](msg);
   },function()
   {
    defProc(msg);
   })):$2.$==2?(exn=$2.$1,exec($2.$0,function(t)
   {
    t[1](exn);
   },Global.ignore)):$2.$==3?(cnl=$2.$1,exec($2.$0,function(t)
   {
    t[2](cnl);
   },Global.ignore)):$1.Add($2.$0,$2.$1);
  },new FSharpMap.New([]));
 },Handler);
 WSMessagingClient=WebSockets.WSMessagingClient=Runtime.Class({
  sendMsg:function(msg)
  {
   var $this,b;
   $this=this;
   b=Monads.asyncResult();
   return b.Run(b.Delay(function()
   {
    return msg.replier.$===0?b.Bind$1($this.sendAndForget(msg),function()
    {
     return b.Return("");
    }):b.ReturnFrom$1($this.sendGetReply(msg));
   }));
  },
  getProcessId:function()
  {
   var $this,b;
   $this=this;
   b=Monads.asyncResult();
   return b.Run(b.Delay(function()
   {
    var dst,p;
    return b.Bind$1($this.sendGetReply((dst=WebSockets.MessageBrokerAddress(),(p=JSON.stringify((WasmPackager_JsonEncoder.j$4())(BrokerRequest.BRGetProcessId)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),dst,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     var m;
     m=(WasmPackager_JsonDecoder.j$4())(JSON.parse(a));
     return m.$==1?b.Return(m.$0):b.ReturnFrom({
      $:1,
      $0:new ResultMessage({
       $:4,
       $0:{
        $:6,
        $0:(function($1)
        {
         return function($2)
         {
          return $1(WasmPackager_GeneratedPrintf.p$1($2));
         };
        }(Global.id))(m)
       }
      })
     });
    });
   }));
  },
  getListeners:function()
  {
   var $this,b;
   $this=this;
   b=Monads.asyncResult();
   return b.Run(b.Delay(function()
   {
    var dst,p;
    return b.Bind$1($this.sendGetReply((dst=WebSockets.MessageBrokerAddress(),(p=JSON.stringify((WasmPackager_JsonEncoder.j$4())(BrokerRequest.BRGetConnections)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),dst,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     var m;
     m=(WasmPackager_JsonDecoder.j$4())(JSON.parse(a));
     return m.$==0?b.Return(m.$0):b.ReturnFrom({
      $:1,
      $0:new ResultMessage({
       $:4,
       $0:{
        $:6,
        $0:(function($1)
        {
         return function($2)
         {
          return $1(WasmPackager_GeneratedPrintf.p$1($2));
         };
        }(Global.id))(m)
       }
      })
     });
    });
   }));
  },
  sendGetReply:function(msg)
  {
   var $this,b;
   $this=this;
   b=Monads.asyncResult();
   return b.Run(b.Delay(function()
   {
    return b.Bind$1($this.sendAndReply(Replier.Receiver,msg),function(a)
    {
     var m;
     return b.Bind((m=a.msgType,m.$==2?{
      $:0,
      $0:a.payload
     }:m.$==3?{
      $:1,
      $0:new ResultMessage({
       $:4,
       $0:(WasmPackager_JsonDecoder.j$5())(JSON.parse(a.payload))
      })
     }:{
      $:1,
      $0:new ResultMessage({
       $:4,
       $0:{
        $:5,
        $0:a.msgType
       }
      })
     }),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   }));
  },
  sendAndVerify:function(msg)
  {
   var $this,b;
   $this=this;
   b=Monads.asyncResult();
   return b.Run(b.Delay(function()
   {
    return b.Bind$1($this.sendAndReply(Replier.Broker,msg),function(a)
    {
     var bm;
     return b.Bind(a.msgType.$==3?(bm=(WasmPackager_JsonDecoder.j$5())(JSON.parse(a.payload)),bm.$===0?{
      $:0,
      $0:null
     }:{
      $:1,
      $0:new ResultMessage({
       $:4,
       $0:bm
      })
     }):{
      $:1,
      $0:new ResultMessage({
       $:4,
       $0:{
        $:5,
        $0:a.msgType
       }
      })
     },function()
     {
      return b.Return();
     });
    });
   }));
  },
  sendAndReply:function(rpl,msg)
  {
   var $this,b;
   $this=this;
   b=Monads.asyncResult();
   return b.Run(b.Delay(function()
   {
    return b.Bind$1($this.getServer(),function(a)
    {
     return Extensions["AsyncResultBuilder.ReturnFrom"](b,Concurrency.FromContinuations(function($1,$2,$3)
     {
      var b$1;
      $this.waiting.Add(msg.id,[$1,$2,$3]);
      $this.postR(a,rpl,msg);
      return $this.wsTimeout>0?Concurrency.Start((b$1=null,Concurrency.Delay(function()
      {
       return Concurrency.Bind(Concurrency.Sleep($this.wsTimeout),function()
       {
        $this.waiting.Raise(msg.id,new TimeoutException.New$1((((Runtime.Curried3(function($4,$5,$6)
        {
         return $4("Did not receive reply in "+Global.String($5)+" seconds for Message: "+GeneratedPrintf.p($6));
        }))(Global.id))($this.wsTimeout/1000>>0))(msg)));
        return Concurrency.Zero();
       });
      })),null):null;
     }));
    });
   }));
  },
  sendAndForget:function(msg)
  {
   var $this,b;
   $this=this;
   b=Monads.asyncResult();
   return b.Run(b.Delay(function()
   {
    return b.Bind$1($this.getServer(),function(a)
    {
     $this.postR(a,Replier.NoReply,msg);
     return b.Zero();
    });
   }));
  },
  postR:function(server,rpl,msg)
  {
   try
   {
    server.FsRoot_Library2_WebSockets_IServer$Post(WebSockets.replier(rpl,WebSockets.from(this.clientAddress,msg)));
   }
   catch(e)
   {
    this.serverO=null;
    throw e;
   }
  },
  getServer:function()
  {
   return this.checkServer.PostAndAsyncReply(function(reply)
   {
    return[reply,null];
   },null);
  },
  connectToWebSocketServer:function()
  {
   var $this,b;
   $this=this;
   (function($1)
   {
    return $1("in connectToWebSocketServer");
   }(function(s)
   {
    console.log(s);
   }));
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind((($this.connectStateful($this.wsEndPoint))($this.clientId))(function(server)
    {
     var b$1;
     b$1=null;
     return Concurrency.Delay(function()
     {
      return Concurrency.Return([0,function(state)
      {
       return function(wsmsg)
       {
        var b$2;
        b$2=null;
        return Concurrency.Delay(function()
        {
         return Concurrency.Combine(Concurrency.TryWith(Concurrency.Delay(function()
         {
          return wsmsg.$==2?((function($1)
          {
           return function($2)
           {
            return $1("WebSocket "+Utils.toSafe($2)+" connection open.");
           };
          }(function(s)
          {
           console.log(s);
          }))($this.clientId),$this.serverO={
           $:1,
           $0:server
          },Concurrency.Zero()):wsmsg.$==3?((function($1)
          {
           return function($2)
           {
            return $1("WebSocket "+Utils.toSafe($2)+" connection closed.");
           };
          }(function(s)
          {
           console.log(s);
          }))($this.clientId),$this.close(),Concurrency.Zero()):wsmsg.$==1?((function($1)
          {
           return function($2)
           {
            return $1("WebSocket "+Utils.toSafe($2)+" connection error!");
           };
          }(function(s)
          {
           console.log(s);
          }))($this.clientId),Concurrency.Zero()):($this.processMessage(wsmsg.$0),Concurrency.Zero());
         }),function(a)
         {
          (((Runtime.Curried3(function($1,$2,$3)
          {
           return $1("msg: "+WasmPackager_GeneratedPrintf.p$5($2)+" \nexn:"+Utils.prettyPrint($3));
          }))(function(s)
          {
           console.log(s);
          }))(wsmsg))(a);
          return Concurrency.Zero();
         }),Concurrency.Delay(function()
         {
          return Concurrency.Return(state);
         }));
        });
       };
      }]);
     });
    }),function()
    {
     (function($1)
     {
      return $1("connectToWebSocketServer with server");
     }(function(s)
     {
      console.log(s);
     }));
     return Concurrency.Zero();
    });
   });
  },
  processMessage:function(msg)
  {
   var $1,$this,m,m$1,f,x;
   $this=this;
   m=msg.msgType;
   function g(m$2)
   {
    $this.reply(m$2);
   }
   function g$1(v)
   {
    return Concurrency.Return(v);
   }
   switch(m.$==2?0:m.$==0?1:m.$==1?2:m.$==5?3:m.$==4?4:0)
   {
    case 0:
     this.processReply(msg);
     break;
    case 1:
     (((Runtime.Curried3(function($2,$3,$4)
     {
      return $2("Information from '"+Utils.toSafe($3)+"': "+Utils.toSafe($4));
     }))(function(s)
     {
      console.log(s);
     }))(msg.from.get_txt()))(((Provider.Id())())(JSON.parse(msg.payload)));
     break;
    case 2:
     m$1=this.payloadProcessorO;
     m$1!=null&&m$1.$==1?Concurrency.Start(Concurrency.Bind($this.mapPayloadWrap(m$1.$0,msg),(f=function(x$1)
     {
      return g(WebSockets.makeReply(x$1));
     },function(x$1)
     {
      return g$1(f(x$1));
     })),null):msg.replier.$===2?null:null;
     break;
    case 3:
     $this.reply(WebSockets.msgType(MessageType.MsgInformation,WebSockets.mapPayload(Global.id,msg)));
     break;
    case 4:
     $this.reply(WebSockets.msgType(MessageType.MsgInformation,(x=WebSockets.makeReply(msg),MessageGeneric.New(x.from,x.destination,x.msgType,x.subtype,x.id,JSON.stringify(((Provider.Id())())(this.clientId)),x.replier))));
     break;
   }
  },
  mapPayloadWrap:function(fW,msg)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(fW(msg.payload),function(a)
    {
     return Concurrency.Return(WebSockets.mapPayload(function()
     {
      return a;
     },msg));
    });
   });
  },
  processReply:function(msg)
  {
   this.waiting.Reply(msg.id,msg);
  },
  close:function()
  {
   var o;
   o=this.serverO;
   o==null?void 0:(o.$0.FsRoot_Library2_WebSockets_IServer$Close(),this.serverO=null);
  },
  reply:function(msg)
  {
   var o;
   o=this.serverO;
   o==null?void 0:o.$0.FsRoot_Library2_WebSockets_IServer$Post(WebSockets.destination(msg.from,WebSockets.from(this.clientAddress,msg)));
  },
  set_Out:function(fout)
  {
   this.out=fout;
  },
  SendMsg:function(msg)
  {
   return this.sendMsg(msg);
  },
  get_ClientId:function()
  {
   return this.clientId;
  },
  get_EndPoint:function()
  {
   return this.wsEndPoint;
  },
  get_MBProcessId:function()
  {
   return this.getProcessId();
  },
  get_MBListeners:function()
  {
   return this.getListeners();
  },
  Dispose:function()
  {
   this.close();
  }
 },Obj,WSMessagingClient);
 WSMessagingClient.New=Runtime.Ctor(function(clientId,timeout,endPoint)
 {
  WSMessagingClient.New$1.call(this,Runtime.Curried3(function(u,c,f)
  {
   function f$1(v)
   {
   }
   function g(v)
   {
    return Concurrency.Return(v);
   }
   return Concurrency.Bind(WithEncoding.ConnectStateful(function(a)
   {
    return JSON.stringify((WasmPackager_JsonEncoder.j())(a));
   },function(a)
   {
    return(WasmPackager_JsonDecoder.j())(JSON.parse(a));
   },Endpoint.CreateRemote((((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("ws://"+Utils.toSafe($2)+"?ClientId="+Utils.toSafe($3));
   }))(Global.id))(u))(c),{
    $:1,
    $0:WebSocket.JsonEncoding.Readable
   }),function(serverP)
   {
    var $1;
    return f(($1={
     FsRoot_Library2_WebSockets_IServer$Post:function(v)
     {
      return serverP.Post(v);
     },
     FsRoot_Library2_WebSockets_IServer$Close:function()
     {
      return serverP.get_Connection().close(1000);
     }
    },(Obj.New.call($1),$1)));
   }),function(x)
   {
    return g(f$1(x));
   });
  }),clientId,timeout,endPoint);
 },WSMessagingClient);
 WSMessagingClient.New$1=Runtime.Ctor(function(connectStateful,clientId,timeout,endPoint)
 {
  var $this,d;
  $this=this;
  Obj.New.call(this);
  this.connectStateful=connectStateful;
  this.clientId=clientId;
  this.wsEndPoint=(d=WebSockets.extractEndPoint()+"/ws",endPoint==null?d:endPoint.$0);
  this.clientAddress=new Address({
   $:0,
   $0:this.clientId
  });
  this.wsTimeout=timeout==null?60000:timeout.$0;
  this.out=function($1)
  {
   return function($2)
   {
    return $1(Utils.toSafe($2));
   };
  }(function(s)
  {
   console.log(s);
  });
  this.serverO=null;
  this.payloadProcessorO=null;
  this.waiting=new Handler.New(function(msg)
  {
   (((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Reply from '"+Utils.toSafe($2)+"': "+Utils.toSafe($3));
   }))(function(s)
   {
    console.log(s);
   }))(msg.from.get_txt()))(msg.payload);
  });
  this.checkServer=Mailbox.callA(function(v)
  {
   Library.print(v);
  },function()
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Combine($this.serverO==null?(function($1)
    {
     return $1("getServer Connecting");
    }(function(s)
    {
     console.log(s);
    }),Concurrency.Bind($this.connectToWebSocketServer(),function()
    {
     return Concurrency.Bind(Concurrency.Sleep(200),function()
     {
      return Concurrency.Return(null);
     });
    })):Concurrency.Zero(),Concurrency.Delay(function()
    {
     return Concurrency.Return(Result.ofOption(function()
     {
      return new ResultMessage({
       $:1,
       $0:"could not connect to Server"
      });
     },$this.serverO));
    }));
   });
  });
 },WSMessagingClient);
 WebSockets.extractEndPoint=function()
 {
  return Arrays.get(Strings.SplitChars(location.href.substring(location.href.indexOf("//")+2),["/"],0),0);
 };
 WebSockets.makeReply=function(msg)
 {
  return WebSockets.replier(Replier.NoReply,WebSockets.msgType(MessageType.MsgReply,msg));
 };
 WebSockets.mapPayload=function(f,msg)
 {
  return MessageGeneric.New(msg.from,msg.destination,msg.msgType,msg.subtype,msg.id,f(msg.payload),msg.replier);
 };
 WebSockets.msgId=function(id,msg)
 {
  return MessageGeneric.New(msg.from,msg.destination,msg.msgType,msg.subtype,id,msg.payload,msg.replier);
 };
 WebSockets.replier=function(rpl,msg)
 {
  return MessageGeneric.New(msg.from,msg.destination,msg.msgType,msg.subtype,msg.id,msg.payload,rpl);
 };
 WebSockets.subtype=function(sub,msg)
 {
  return MessageGeneric.New(msg.from,msg.destination,msg.msgType,sub,msg.id,msg.payload,msg.replier);
 };
 WebSockets.msgType=function(typ,msg)
 {
  return MessageGeneric.New(msg.from,msg.destination,typ,msg.subtype,msg.id,msg.payload,msg.replier);
 };
 WebSockets.destination=function(dst,msg)
 {
  return MessageGeneric.New(msg.from,dst,msg.msgType,msg.subtype,msg.id,msg.payload,msg.replier);
 };
 WebSockets.from=function(frm,msg)
 {
  return MessageGeneric.New(frm,msg.destination,msg.msgType,msg.subtype,msg.id,msg.payload,msg.replier);
 };
 WebSockets.MessageBrokerAddress=function()
 {
  SC$1.$cctor();
  return SC$1.MessageBrokerAddress;
 };
 WebSockets.MessageBrokerId=function()
 {
  SC$1.$cctor();
  return SC$1.MessageBrokerId;
 };
 FSMessage.MsgGetUrl={
  $:5
 };
 FSMessage.MsgGetId={
  $:0
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
  SC$1.rtn=function(v)
  {
   return[v];
  };
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.resultP=new BuilderP.New();
  SC$1.fusion=new Builder$2.New();
  SC$1.fusion$1=new Builder$4.New();
  SC$1.asyncResult=new AsyncResultBuilder.New();
  SC$1.asyncResultP=new AsyncResultBuilderP.New();
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
  SC$1.defaultSnippet=Snippet.New(new SnippetId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  }),"","",null,new FSharpSet.New$1(null),[],(new Date(0)).getTime());
  SC$1.tieFighter="|"+"-"+"|";
  SC$1.MessageBrokerId="<MessageBroker>";
  SC$1.MessageBrokerAddress=new Address({
   $:0,
   $0:WebSockets.MessageBrokerId()
  });
 };
 WasmPackager_GeneratedPrintf.p=function($1)
 {
  return"SnippetId "+Utils.prettyPrint($1.$0);
 };
 WasmPackager_JsonEncoder.j$4=function()
 {
  return WasmPackager_JsonEncoder._v$4?WasmPackager_JsonEncoder._v$4:WasmPackager_JsonEncoder._v$4=(Provider.EncodeUnion(void 0,"type",[["BRGetConnections",[]],["BRGetProcessId",[]]]))();
 };
 WasmPackager_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==2?"BRString "+Utils.prettyPrint($1.$0):$1.$==1?"BRPid "+Utils.prettyPrint($1.$0):"BRConnections "+Utils.printArray(Utils.prettyPrint,$1.$0);
 };
 WasmPackager_JsonDecoder.j$4=function()
 {
  return WasmPackager_JsonDecoder._v$4?WasmPackager_JsonDecoder._v$4:WasmPackager_JsonDecoder._v$4=(Provider.DecodeUnion(void 0,"type",[["BRConnections",[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]],["BRPid",[["$0","Item",Provider.Id(),0]]],["BRString",[["$0","Item",Provider.Id(),0]]]]))();
 };
 WasmPackager_JsonDecoder.j$5=function()
 {
  return WasmPackager_JsonDecoder._v$5?WasmPackager_JsonDecoder._v$5:WasmPackager_JsonDecoder._v$5=(Provider.DecodeUnion(void 0,"type",[["BMOk",[]],["BMOnlyBrokerShouldUse",[]],["BMDestinationNotFound",[["$0","Item",WasmPackager_JsonDecoder.j$1,0]]],["BMWebSocketError",[["$0","Item",Provider.Id(),0]]],["BMReceiverCantReply",[]],["BMUnexpectedMsgType",[["$0","Item",WasmPackager_JsonDecoder.j$2,0]]],["BMUnexpectedResponse",[["$0","Item",Provider.Id(),0]]]]))();
 };
 WasmPackager_GeneratedPrintf.p$4=function($1)
 {
  return $1.$==2?"Receiver":$1.$==1?"Broker":"NoReply";
 };
 WasmPackager_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==5?"MsgRequestForEcho":$1.$==4?"MsgRequestForId":$1.$==3?"MsgFromBroker":$1.$==2?"MsgReply":$1.$==1?"MsgRequest":"MsgInformation";
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("from = "+WasmPackager_GeneratedPrintf.p$2($1.from))+"; "+("destination = "+WasmPackager_GeneratedPrintf.p$2($1.destination))+"; "+("msgType = "+WasmPackager_GeneratedPrintf.p$3($1.msgType))+"; "+("subtype = "+Utils.prettyPrint($1.subtype))+"; "+("id = "+Utils.prettyPrint($1.id))+"; "+("payload = "+Utils.prettyPrint($1.payload))+"; "+("replier = "+WasmPackager_GeneratedPrintf.p$4($1.replier))+"}";
 };
 WasmPackager_GeneratedPrintf.p$2=function($1)
 {
  return"Address "+Utils.prettyPrint($1.$0);
 };
 WasmPackager_GeneratedPrintf.p$5=function($1)
 {
  return $1.$==3?"Close":$1.$==2?"Open":$1.$==1?"Error":"Message "+GeneratedPrintf.p($1.$0);
 };
 WasmPackager_JsonEncoder.j$1=function()
 {
  return WasmPackager_JsonEncoder._v$1?WasmPackager_JsonEncoder._v$1:WasmPackager_JsonEncoder._v$1=(Provider.EncodeUnion(Address,"$",[[0,[["$0","address",Provider.Id(),0]]]]))();
 };
 WasmPackager_JsonEncoder.j$2=function()
 {
  return WasmPackager_JsonEncoder._v$2?WasmPackager_JsonEncoder._v$2:WasmPackager_JsonEncoder._v$2=(Provider.EncodeUnion(void 0,"type",[["MsgInformation",[]],["MsgRequest",[]],["MsgReply",[]],["MsgFromBroker",[]],["MsgRequestForId",[]],["MsgRequestForEcho",[]]]))();
 };
 WasmPackager_JsonEncoder.j$3=function()
 {
  return WasmPackager_JsonEncoder._v$3?WasmPackager_JsonEncoder._v$3:WasmPackager_JsonEncoder._v$3=(Provider.EncodeUnion(void 0,"type",[["NoReply",[]],["Broker",[]],["Receiver",[]]]))();
 };
 WasmPackager_JsonEncoder.j=function()
 {
  return WasmPackager_JsonEncoder._v?WasmPackager_JsonEncoder._v:WasmPackager_JsonEncoder._v=(Provider.EncodeRecord(void 0,[["from",WasmPackager_JsonEncoder.j$1,0],["destination",WasmPackager_JsonEncoder.j$1,0],["msgType",WasmPackager_JsonEncoder.j$2,0],["subtype",Provider.Id(),0],["id",Provider.Id(),0],["payload",Provider.Id(),0],["replier",WasmPackager_JsonEncoder.j$3,0]]))();
 };
 WasmPackager_JsonDecoder.j$1=function()
 {
  return WasmPackager_JsonDecoder._v$1?WasmPackager_JsonDecoder._v$1:WasmPackager_JsonDecoder._v$1=(Provider.DecodeUnion(Address,"$",[[0,[["$0","address",Provider.Id(),0]]]]))();
 };
 WasmPackager_JsonDecoder.j$2=function()
 {
  return WasmPackager_JsonDecoder._v$2?WasmPackager_JsonDecoder._v$2:WasmPackager_JsonDecoder._v$2=(Provider.DecodeUnion(void 0,"type",[["MsgInformation",[]],["MsgRequest",[]],["MsgReply",[]],["MsgFromBroker",[]],["MsgRequestForId",[]],["MsgRequestForEcho",[]]]))();
 };
 WasmPackager_JsonDecoder.j$3=function()
 {
  return WasmPackager_JsonDecoder._v$3?WasmPackager_JsonDecoder._v$3:WasmPackager_JsonDecoder._v$3=(Provider.DecodeUnion(void 0,"type",[["NoReply",[]],["Broker",[]],["Receiver",[]]]))();
 };
 WasmPackager_JsonDecoder.j=function()
 {
  return WasmPackager_JsonDecoder._v?WasmPackager_JsonDecoder._v:WasmPackager_JsonDecoder._v=(Provider.DecodeRecord(void 0,[["from",WasmPackager_JsonDecoder.j$1,0],["destination",WasmPackager_JsonDecoder.j$1,0],["msgType",WasmPackager_JsonDecoder.j$2,0],["subtype",Provider.Id(),0],["id",Provider.Id(),0],["payload",Provider.Id(),0],["replier",WasmPackager_JsonDecoder.j$3,0]]))();
 };
}(self));

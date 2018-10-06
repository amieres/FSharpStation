(function()
{
 "use strict";
 var Global,FsRoot,Library,ResultMessage,Monads,Seq,Async,WebSharper,Obj,Result,Builder,Operators,AsyncResult,AsyncResultBuilder,AsyncResultBuilderP,Extensions,ReaderMonads,ReaderMBasic,Builder$1,Operators$1,ReaderMResult,Builder$2,Operators$2,ReaderMAsyncResult,Builder$3,Operators$3,String,ParseO,MailboxProcessorExt,Mailbox,StateFull,ResourceAgentState,ResourceAgent,AgentReaderM,CommArgRoot,CommArg,CommArgCollection,TypedCommArg,CommArgModule,FsCodeModule,PreproDirective,SnippetId,Snippet,SnippetCollection,SnippetModule,Hole,TreeReader,Node,LibraryJS,Promise,View,Serializer,LoadFiles,REGEX,Hoverable,Hoverable$1,ResizeObserver,WebComponent,WcTabStrip,WcTabStripT,WcSplitter,WcSplitterT,Monaco,Position,Range,Uri,Location,FindMatch,WordAtPosition,Model,MarkDownString,MarkerData,CompletionItem,Hover,Editor,MonacoConfig,AppFramework,PlugInVar,PlugInView,PlugInDoc,PlugInAction,PlugInQuery,PlugIn,LayoutEngine,LayoutEngineModule,Library2,FsiAgent,WebSockets,Address,BrokerRequest,MessageType,BrokerMessage,Replier,MessageGeneric,ClientTypeFSharp,ClientTypeFSStation,ClientTypeJScript,ReplyHandler,Handler,WSMessagingClient,FsAutoComplete,CommTypes,ResponseError,Location$1,CompletionResponse,OverloadDescription,OverloadParameter,Overload,Parameter,SignatureData,MethodResponse,SymbolUseRange,SymbolUseResponse,HelpTextResponse,CompilerLocationResponse,FSharpErrorInfo,ErrorResponse,Colorization,Declaration,DeclarationResponse,OpenNamespace,QualifySymbol,ResolveNamespaceResponse,UnionCaseResponse,Calls,FSharpStation,FStation,Snippets,DragDrop,DragInfo,Templating,RenderSnippets,RenderProperties,Monaco$1,HoverProvider,CompletionItemProvider,DefinitionProvider,MonacoOptions,ITextModelService,JumpTo,Serializer$1,Model$1,LoadSave,Importer,MainProgram,Messaging,SC$1,FSharpStation_JsonEncoder,FSharpStation_JsonDecoder,FSharpStation_Templates,FSharpStation_GeneratedPrintf,GeneratedPrintf,IntelliFactory,Runtime,Utils,Seq$1,Concurrency,Arrays,List,Enumerator,Result$1,Operators$4,Strings,Slice,Control,MailboxProcessor,Unchecked,System,Guid,Collections,FSharpSet,Option,CancellationTokenSource,console,UI,View$1,Var$1,FSharpMap,BalancedTree,DomUtility,Doc,AttrModule,AttrProxy,Node$1,Client,Templates,Reflect,Object,FromView,Templating$1,Runtime$1,Server,ProviderBuilder,Handler$1,TemplateInstance,Lazy,Map,JSON,TimeoutException,ClientSideJson,Provider,Owin,WebSocket,Client$1,WithEncoding,Endpoint,location,Remoting,AjaxRemotingProvider,JavaScript,Promise$1,DateUtil,Numeric,ListModel,Dictionary,Date,$;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 ResultMessage=Library.ResultMessage=Library.ResultMessage||{};
 Monads=Library.Monads=Library.Monads||{};
 Seq=Monads.Seq=Monads.Seq||{};
 Async=Monads.Async=Monads.Async||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 Operators=Result.Operators=Result.Operators||{};
 AsyncResult=Monads.AsyncResult=Monads.AsyncResult||{};
 AsyncResultBuilder=Monads.AsyncResultBuilder=Monads.AsyncResultBuilder||{};
 AsyncResultBuilderP=Monads.AsyncResultBuilderP=Monads.AsyncResultBuilderP||{};
 Extensions=Monads.Extensions=Monads.Extensions||{};
 ReaderMonads=Monads.ReaderMonads=Monads.ReaderMonads||{};
 ReaderMBasic=ReaderMonads.ReaderMBasic=ReaderMonads.ReaderMBasic||{};
 Builder$1=ReaderMBasic.Builder=ReaderMBasic.Builder||{};
 Operators$1=ReaderMBasic.Operators=ReaderMBasic.Operators||{};
 ReaderMResult=ReaderMonads.ReaderMResult=ReaderMonads.ReaderMResult||{};
 Builder$2=ReaderMResult.Builder=ReaderMResult.Builder||{};
 Operators$2=ReaderMResult.Operators=ReaderMResult.Operators||{};
 ReaderMAsyncResult=ReaderMonads.ReaderMAsyncResult=ReaderMonads.ReaderMAsyncResult||{};
 Builder$3=ReaderMAsyncResult.Builder=ReaderMAsyncResult.Builder||{};
 Operators$3=ReaderMAsyncResult.Operators=ReaderMAsyncResult.Operators||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 MailboxProcessorExt=Library.MailboxProcessorExt=Library.MailboxProcessorExt||{};
 Mailbox=Library.Mailbox=Library.Mailbox||{};
 StateFull=Mailbox.StateFull=Mailbox.StateFull||{};
 ResourceAgentState=Library.ResourceAgentState=Library.ResourceAgentState||{};
 ResourceAgent=Library.ResourceAgent=Library.ResourceAgent||{};
 AgentReaderM=Library.AgentReaderM=Library.AgentReaderM||{};
 CommArgRoot=Library.CommArgRoot=Library.CommArgRoot||{};
 CommArg=CommArgRoot.CommArg=CommArgRoot.CommArg||{};
 CommArgCollection=CommArgRoot.CommArgCollection=CommArgRoot.CommArgCollection||{};
 TypedCommArg=CommArgRoot.TypedCommArg=CommArgRoot.TypedCommArg||{};
 CommArgModule=CommArgRoot.CommArgModule=CommArgRoot.CommArgModule||{};
 FsCodeModule=Library.FsCodeModule=Library.FsCodeModule||{};
 PreproDirective=FsCodeModule.PreproDirective=FsCodeModule.PreproDirective||{};
 SnippetId=Library.SnippetId=Library.SnippetId||{};
 Snippet=Library.Snippet=Library.Snippet||{};
 SnippetCollection=Library.SnippetCollection=Library.SnippetCollection||{};
 SnippetModule=Library.SnippetModule=Library.SnippetModule||{};
 Hole=Library.Hole=Library.Hole||{};
 TreeReader=Library.TreeReader=Library.TreeReader||{};
 Node=TreeReader.Node=TreeReader.Node||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Promise=LibraryJS.Promise=LibraryJS.Promise||{};
 View=LibraryJS.View=LibraryJS.View||{};
 Serializer=LibraryJS.Serializer=LibraryJS.Serializer||{};
 LoadFiles=LibraryJS.LoadFiles=LibraryJS.LoadFiles||{};
 REGEX=LibraryJS.REGEX=LibraryJS.REGEX||{};
 Hoverable=LibraryJS.Hoverable=LibraryJS.Hoverable||{};
 Hoverable$1=Hoverable.Hoverable=Hoverable.Hoverable||{};
 ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};
 WebComponent=LibraryJS.WebComponent=LibraryJS.WebComponent||{};
 WcTabStrip=WebComponent.WcTabStrip=WebComponent.WcTabStrip||{};
 WcTabStripT=WcTabStrip.WcTabStripT=WcTabStrip.WcTabStripT||{};
 WcSplitter=WebComponent.WcSplitter=WebComponent.WcSplitter||{};
 WcSplitterT=WcSplitter.WcSplitterT=WcSplitter.WcSplitterT||{};
 Monaco=LibraryJS.Monaco=LibraryJS.Monaco||{};
 Position=Monaco.Position=Monaco.Position||{};
 Range=Monaco.Range=Monaco.Range||{};
 Uri=Monaco.Uri=Monaco.Uri||{};
 Location=Monaco.Location=Monaco.Location||{};
 FindMatch=Monaco.FindMatch=Monaco.FindMatch||{};
 WordAtPosition=Monaco.WordAtPosition=Monaco.WordAtPosition||{};
 Model=Monaco.Model=Monaco.Model||{};
 MarkDownString=Monaco.MarkDownString=Monaco.MarkDownString||{};
 MarkerData=Monaco.MarkerData=Monaco.MarkerData||{};
 CompletionItem=Monaco.CompletionItem=Monaco.CompletionItem||{};
 Hover=Monaco.Hover=Monaco.Hover||{};
 Editor=Monaco.Editor=Monaco.Editor||{};
 MonacoConfig=Monaco.MonacoConfig=Monaco.MonacoConfig||{};
 AppFramework=LibraryJS.AppFramework=LibraryJS.AppFramework||{};
 PlugInVar=AppFramework.PlugInVar=AppFramework.PlugInVar||{};
 PlugInView=AppFramework.PlugInView=AppFramework.PlugInView||{};
 PlugInDoc=AppFramework.PlugInDoc=AppFramework.PlugInDoc||{};
 PlugInAction=AppFramework.PlugInAction=AppFramework.PlugInAction||{};
 PlugInQuery=AppFramework.PlugInQuery=AppFramework.PlugInQuery||{};
 PlugIn=AppFramework.PlugIn=AppFramework.PlugIn||{};
 LayoutEngine=LibraryJS.LayoutEngine=LibraryJS.LayoutEngine||{};
 LayoutEngineModule=LibraryJS.LayoutEngineModule=LibraryJS.LayoutEngineModule||{};
 Library2=FsRoot.Library2=FsRoot.Library2||{};
 FsiAgent=Library2.FsiAgent=Library2.FsiAgent||{};
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
 FsAutoComplete=Library2.FsAutoComplete=Library2.FsAutoComplete||{};
 CommTypes=FsAutoComplete.CommTypes=FsAutoComplete.CommTypes||{};
 ResponseError=CommTypes.ResponseError=CommTypes.ResponseError||{};
 Location$1=CommTypes.Location=CommTypes.Location||{};
 CompletionResponse=CommTypes.CompletionResponse=CommTypes.CompletionResponse||{};
 OverloadDescription=CommTypes.OverloadDescription=CommTypes.OverloadDescription||{};
 OverloadParameter=CommTypes.OverloadParameter=CommTypes.OverloadParameter||{};
 Overload=CommTypes.Overload=CommTypes.Overload||{};
 Parameter=CommTypes.Parameter=CommTypes.Parameter||{};
 SignatureData=CommTypes.SignatureData=CommTypes.SignatureData||{};
 MethodResponse=CommTypes.MethodResponse=CommTypes.MethodResponse||{};
 SymbolUseRange=CommTypes.SymbolUseRange=CommTypes.SymbolUseRange||{};
 SymbolUseResponse=CommTypes.SymbolUseResponse=CommTypes.SymbolUseResponse||{};
 HelpTextResponse=CommTypes.HelpTextResponse=CommTypes.HelpTextResponse||{};
 CompilerLocationResponse=CommTypes.CompilerLocationResponse=CommTypes.CompilerLocationResponse||{};
 FSharpErrorInfo=CommTypes.FSharpErrorInfo=CommTypes.FSharpErrorInfo||{};
 ErrorResponse=CommTypes.ErrorResponse=CommTypes.ErrorResponse||{};
 Colorization=CommTypes.Colorization=CommTypes.Colorization||{};
 Declaration=CommTypes.Declaration=CommTypes.Declaration||{};
 DeclarationResponse=CommTypes.DeclarationResponse=CommTypes.DeclarationResponse||{};
 OpenNamespace=CommTypes.OpenNamespace=CommTypes.OpenNamespace||{};
 QualifySymbol=CommTypes.QualifySymbol=CommTypes.QualifySymbol||{};
 ResolveNamespaceResponse=CommTypes.ResolveNamespaceResponse=CommTypes.ResolveNamespaceResponse||{};
 UnionCaseResponse=CommTypes.UnionCaseResponse=CommTypes.UnionCaseResponse||{};
 Calls=FsAutoComplete.Calls=FsAutoComplete.Calls||{};
 FSharpStation=FsRoot.FSharpStation=FsRoot.FSharpStation||{};
 FStation=FSharpStation.FStation=FSharpStation.FStation||{};
 Snippets=FSharpStation.Snippets=FSharpStation.Snippets||{};
 DragDrop=FSharpStation.DragDrop=FSharpStation.DragDrop||{};
 DragInfo=DragDrop.DragInfo=DragDrop.DragInfo||{};
 Templating=FSharpStation.Templating=FSharpStation.Templating||{};
 RenderSnippets=FSharpStation.RenderSnippets=FSharpStation.RenderSnippets||{};
 RenderProperties=FSharpStation.RenderProperties=FSharpStation.RenderProperties||{};
 Monaco$1=FSharpStation.Monaco=FSharpStation.Monaco||{};
 HoverProvider=Monaco$1.HoverProvider=Monaco$1.HoverProvider||{};
 CompletionItemProvider=Monaco$1.CompletionItemProvider=Monaco$1.CompletionItemProvider||{};
 DefinitionProvider=Monaco$1.DefinitionProvider=Monaco$1.DefinitionProvider||{};
 MonacoOptions=Monaco$1.MonacoOptions=Monaco$1.MonacoOptions||{};
 ITextModelService=Monaco$1.ITextModelService=Monaco$1.ITextModelService||{};
 JumpTo=FSharpStation.JumpTo=FSharpStation.JumpTo||{};
 Serializer$1=FSharpStation.Serializer=FSharpStation.Serializer||{};
 Model$1=Serializer$1.Model=Serializer$1.Model||{};
 LoadSave=FSharpStation.LoadSave=FSharpStation.LoadSave||{};
 Importer=FSharpStation.Importer=FSharpStation.Importer||{};
 MainProgram=FSharpStation.MainProgram=FSharpStation.MainProgram||{};
 Messaging=FSharpStation.Messaging=FSharpStation.Messaging||{};
 SC$1=Global.StartupCode$FSharpStation$FSharpStation=Global.StartupCode$FSharpStation$FSharpStation||{};
 FSharpStation_JsonEncoder=Global.FSharpStation_JsonEncoder=Global.FSharpStation_JsonEncoder||{};
 FSharpStation_JsonDecoder=Global.FSharpStation_JsonDecoder=Global.FSharpStation_JsonDecoder||{};
 FSharpStation_Templates=Global.FSharpStation_Templates=Global.FSharpStation_Templates||{};
 FSharpStation_GeneratedPrintf=Global.FSharpStation_GeneratedPrintf=Global.FSharpStation_GeneratedPrintf||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Utils=WebSharper&&WebSharper.Utils;
 Seq$1=WebSharper&&WebSharper.Seq;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Arrays=WebSharper&&WebSharper.Arrays;
 List=WebSharper&&WebSharper.List;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 Result$1=WebSharper&&WebSharper.Result;
 Operators$4=WebSharper&&WebSharper.Operators;
 Strings=WebSharper&&WebSharper.Strings;
 Slice=WebSharper&&WebSharper.Slice;
 Control=WebSharper&&WebSharper.Control;
 MailboxProcessor=Control&&Control.MailboxProcessor;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 System=Global.System;
 Guid=System&&System.Guid;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpSet=Collections&&Collections.FSharpSet;
 Option=WebSharper&&WebSharper.Option;
 CancellationTokenSource=WebSharper&&WebSharper.CancellationTokenSource;
 console=Global.console;
 UI=WebSharper&&WebSharper.UI;
 View$1=UI&&UI.View;
 Var$1=UI&&UI.Var$1;
 FSharpMap=Collections&&Collections.FSharpMap;
 BalancedTree=Collections&&Collections.BalancedTree;
 DomUtility=UI&&UI.DomUtility;
 Doc=UI&&UI.Doc;
 AttrModule=UI&&UI.AttrModule;
 AttrProxy=UI&&UI.AttrProxy;
 Node$1=Global.Node;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Reflect=Global.Reflect;
 Object=Global.Object;
 FromView=UI&&UI.FromView;
 Templating$1=UI&&UI.Templating;
 Runtime$1=Templating$1&&Templating$1.Runtime;
 Server=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler$1=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 Lazy=WebSharper&&WebSharper.Lazy;
 Map=Collections&&Collections.Map;
 JSON=Global.JSON;
 TimeoutException=WebSharper&&WebSharper.TimeoutException;
 ClientSideJson=WebSharper&&WebSharper.ClientSideJson;
 Provider=ClientSideJson&&ClientSideJson.Provider;
 Owin=WebSharper&&WebSharper.Owin;
 WebSocket=Owin&&Owin.WebSocket;
 Client$1=WebSocket&&WebSocket.Client;
 WithEncoding=Client$1&&Client$1.WithEncoding;
 Endpoint=WebSocket&&WebSocket.Endpoint;
 location=Global.location;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 JavaScript=WebSharper&&WebSharper.JavaScript;
 Promise$1=JavaScript&&JavaScript.Promise;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 ListModel=UI&&UI.ListModel;
 Dictionary=Collections&&Collections.Dictionary;
 Date=Global.Date;
 $=Global.jQuery;
 ResultMessage=Library.ResultMessage=Runtime.Class({
  toString:function()
  {
   return this.$==1?(function($1)
   {
    return function($2)
    {
     return $1("Warning  : "+Utils.toSafe($2));
    };
   }(Global.id))(this.$0):this.$==2?(function($1)
   {
    return function($2)
    {
     return $1(Global.String($2));
    };
   }(Global.id))(this.$0):this.$==3?(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Exception: "+Utils.toSafe($2)+", "+Utils.toSafe($3));
   }))(Global.id))(this.$0))(this.$1):(function($1)
   {
    return function($2)
    {
     return $1("Error    : "+Utils.toSafe($2));
    };
   }(Global.id))(this.$0);
  }
 },null,ResultMessage);
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
   function whileLoop(guard$1,body$1)
   {
    return guard$1()?Result$1.Bind(function()
    {
     return whileLoop(guard$1,body$1);
    },body$1()):Result.rtn();
   }
   return whileLoop(guard,body);
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
   return Result.bindP(r,w);
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
  return Result.bindP(f,v);
 };
 Operators.op_BarGreaterGreater=function(v,f)
 {
  return Result.mapP(f,v);
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
  return Result.bindP(function(v)
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
   return Operators$4.FailWith(Global.String(x));
  },r);
 };
 Result.iter=function(fE,f,r)
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
     $:3,
     $0:e.message,
     $1:e.stack
    }));
   }
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
 Result.rtn=function(a)
 {
  return{
   $:0,
   $0:a
  };
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
  var f;
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(vRRA,(f=function(r)
  {
   return Result.bindP(Global.id,r);
  },function(x)
  {
   return g(f(x));
  }));
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
 AsyncResult.sequenceSeq=function(sq)
 {
  return AsyncResult.traverseSeq(Global.id,sq);
 };
 AsyncResult.traverseSeq=function(f,sq)
 {
  return AsyncResult.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return AsyncResult.op_GreaterGreaterEquals(f(head),function(h)
   {
    return AsyncResult.op_GreaterGreaterEquals(tail,function(t)
    {
     return AsyncResult.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),AsyncResult.rtn(List.T.Empty)));
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
     $:3,
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
    var m,b$1;
    return a.$==1?(m=a.$0,(b$1=null,Concurrency.Delay(function()
    {
     return Concurrency.Return(Library.Error(m));
    }))):fRA(a.$0);
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
   return fRA();
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
 Builder$1=ReaderMBasic.Builder=Runtime.Class({
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
   return ReaderMBasic.wrap(function(r)
   {
    try
    {
     return ReaderMBasic.run(r,body(disposable));
    }
    finally
    {
     disposable.Dispose();
    }
   });
  },
  TryFinally:function(body,compensation)
  {
   return ReaderMBasic.wrap(function(r)
   {
    try
    {
     return ReaderMBasic.run(r,body());
    }
    finally
    {
     compensation();
    }
   });
  },
  TryWith:function(body,handler)
  {
   return ReaderMBasic.wrap(function(r)
   {
    try
    {
     return ReaderMBasic.run(r,body());
    }
    catch(e)
    {
     return handler(e);
    }
   });
  },
  While:function(guard,body)
  {
   function whileLoop(guard$1,body$1)
   {
    return guard$1()?ReaderMBasic.bind(function()
    {
     return whileLoop(guard$1,body$1);
    },body$1()):ReaderMBasic.rtn();
   }
   return whileLoop(guard,body);
  },
  Run:function(f)
  {
   return ReaderMBasic.delayRun(f);
  },
  Combine:function(a,b)
  {
   return ReaderMBasic.bind(b,a);
  },
  Delay:Global.id,
  Zero:function()
  {
   return ReaderMBasic.rtn();
  },
  Bind:function(w,r)
  {
   return ReaderMBasic.bind(r,w);
  },
  ReturnFrom:Global.id,
  Return:function(x)
  {
   return ReaderMBasic.rtn(x);
  }
 },Obj,Builder$1);
 Builder$1.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder$1);
 Operators$1.reader=function()
 {
  SC$1.$cctor();
  return SC$1.reader$1;
 };
 Operators$1.rtn=function(v)
 {
  return ReaderMBasic.rtn(v);
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
  return ReaderMBasic.bind(f,v);
 };
 Operators$1.op_BarGreaterGreater=function(v,f)
 {
  return ReaderMBasic.map(f,v);
 };
 Operators$1.op_LessMultiplyGreater=function(f,v)
 {
  return ReaderMBasic.apply(f,v);
 };
 ReaderMBasic.reader=function()
 {
  SC$1.$cctor();
  return SC$1.reader;
 };
 ReaderMBasic.memoizeRm=function(getCache,fRm,p)
 {
  return ReaderMBasic.wrap(function(r)
  {
   var p$1,o,x;
   p$1=getCache(r);
   o=p$1[0](p);
   return o==null?(x=(ReaderMBasic.getFun(fRm(p)))(r),(p$1[1](p))(x)):o.$0;
  });
 };
 ReaderMBasic.iter=function(f,t)
 {
  function f$1(a)
  {
   return ReaderMBasic.run(t,a);
  }
  return function(x)
  {
   return f(f$1(x));
  };
 };
 ReaderMBasic.absorbO=function(f,vORm)
 {
  return ReaderMBasic.absorbR(ReaderMBasic.map(function(v)
  {
   return Result.ofOption(f,v);
  },vORm));
 };
 ReaderMBasic.absorbR=function(vvRm)
 {
  return ReaderMBasic.map(Result.get,vvRm);
 };
 ReaderMBasic.insertSnd=function(vRm,snd)
 {
  return ReaderMBasic.map(function(v)
  {
   return[v,snd];
  },vRm);
 };
 ReaderMBasic.insertFst=function(fst,vRm)
 {
  return ReaderMBasic.map(function(v)
  {
   return[fst,v];
  },vRm);
 };
 ReaderMBasic.insertR=function(vvR)
 {
  return vvR.$==0?ReaderMBasic.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vvR.$0):ReaderMBasic.rtn(Library.Error(vvR.$0));
 };
 ReaderMBasic.insertO=function(vvO)
 {
  var o;
  o=vvO==null?null:{
   $:1,
   $0:ReaderMBasic.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vvO.$0)
  };
  return o==null?ReaderMBasic.rtn(null):o.$0;
 };
 ReaderMBasic.sequenceSeq=function(sq)
 {
  return ReaderMBasic.traverseSeq(Global.id,sq);
 };
 ReaderMBasic.traverseSeq=function(f,sq)
 {
  return ReaderMBasic.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return ReaderMBasic.op_GreaterGreaterEquals(f(head),function(h)
   {
    return ReaderMBasic.op_GreaterGreaterEquals(tail,function(t)
    {
     return ReaderMBasic.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),ReaderMBasic.rtn(List.T.Empty)));
 };
 ReaderMBasic.op_GreaterGreaterEquals=function(v,f)
 {
  return ReaderMBasic.bind(f,v);
 };
 ReaderMBasic.run=function(rsrc,a)
 {
  return(ReaderMBasic.getFun(a))(rsrc);
 };
 ReaderMBasic.apply=function(fR,vR)
 {
  return ReaderMBasic.bind(function(b)
  {
   return ReaderMBasic.map(b,vR);
  },fR);
 };
 ReaderMBasic.map=function(f,m)
 {
  return ReaderMBasic.bind(function(x)
  {
   return ReaderMBasic.rtn(f(x));
  },m);
 };
 ReaderMBasic.delayRun=function(f)
 {
  return ReaderMBasic.wrap(function(m)
  {
   return(ReaderMBasic.getFun(f()))(m);
  });
 };
 ReaderMBasic.bind=function(f,a)
 {
  return ReaderMBasic.wrap(function(m)
  {
   return(ReaderMBasic.getFun(f((ReaderMBasic.getFun(a))(m))))(m);
  });
 };
 ReaderMBasic.rtn=function(a)
 {
  return ReaderMBasic.wrap(function()
  {
   return a;
  });
 };
 ReaderMBasic.ofFun=function(f)
 {
  return ReaderMBasic.wrap(f);
 };
 ReaderMBasic.getFun=function(f)
 {
  return f.$0;
 };
 ReaderMBasic.wrap=function(f)
 {
  return{
   $:0,
   $0:f
  };
 };
 Builder$2=ReaderMResult.Builder=Runtime.Class({
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
   return ReaderMResult.wrap(function(r)
   {
    try
    {
     return ReaderMResult.run(r,body(disposable));
    }
    finally
    {
     disposable.Dispose();
    }
   });
  },
  TryFinally:function(body,compensation)
  {
   return ReaderMResult.wrap(function(r)
   {
    try
    {
     return ReaderMResult.run(r,body());
    }
    finally
    {
     compensation();
    }
   });
  },
  TryWith:function(body,handler)
  {
   return ReaderMResult.wrap(function(r)
   {
    try
    {
     return ReaderMResult.run(r,body());
    }
    catch(e)
    {
     return handler(e);
    }
   });
  },
  While:function(guard,body)
  {
   function whileLoop(guard$1,body$1)
   {
    return guard$1()?ReaderMResult.bind(function()
    {
     return whileLoop(guard$1,body$1);
    },body$1()):ReaderMResult.rtn();
   }
   return whileLoop(guard,body);
  },
  Run:function(f)
  {
   return ReaderMResult.delayRun(f);
  },
  Combine:function(a,b)
  {
   return ReaderMResult.bind(b,a);
  },
  Delay:Global.id,
  Zero:function()
  {
   return ReaderMResult.rtn();
  },
  Bind:function(w,r)
  {
   return ReaderMResult.bind(r,w);
  },
  ReturnFrom:function(x)
  {
   return ReaderMResult.rtnR(x);
  },
  ReturnFrom$1:Global.id,
  Return:function(x)
  {
   return ReaderMResult.rtn(x);
  }
 },Obj,Builder$2);
 Builder$2.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder$2);
 Operators$2.reader=function()
 {
  SC$1.$cctor();
  return SC$1.reader$3;
 };
 Operators$2.rtn=function(v)
 {
  return ReaderMResult.rtn(v);
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
  return ReaderMResult.bind(f,v);
 };
 Operators$2.op_BarGreaterGreater=function(v,f)
 {
  return ReaderMResult.map(f,v);
 };
 Operators$2.op_LessMultiplyGreater=function(f,v)
 {
  return ReaderMResult.apply(f,v);
 };
 ReaderMResult.reader=function()
 {
  SC$1.$cctor();
  return SC$1.reader$2;
 };
 ReaderMResult.memoizeRm=function(getStore,fRm,p)
 {
  return ReaderMResult.wrap(function(r)
  {
   var p$1,o,o$1,x;
   p$1=getStore(r);
   return ReaderMResult.run(r,(o=(o$1=p$1[0](p),o$1==null?null:{
    $:1,
    $0:ReaderMResult.rtn(o$1.$0)
   }),o==null?(x=fRm(p),ReaderMResult.map(p$1[1](p),x)):o.$0));
  });
 };
 ReaderMResult.iter=function(fE,f,t,a)
 {
  Result.iter(fE,f,ReaderMResult.run(t,a));
 };
 ReaderMResult.absorbO=function(f,vORm)
 {
  return ReaderMResult.absorbR(ReaderMResult.map(function(v)
  {
   return Result.ofOption(f,v);
  },vORm));
 };
 ReaderMResult.absorbR=function(vvRm)
 {
  return ReaderMResult.bind(ReaderMResult.rtnR,vvRm);
 };
 ReaderMResult.insertSnd=function(vRm,snd)
 {
  return ReaderMResult.map(function(v)
  {
   return[v,snd];
  },vRm);
 };
 ReaderMResult.insertFst=function(fst,vRm)
 {
  return ReaderMResult.map(function(v)
  {
   return[fst,v];
  },vRm);
 };
 ReaderMResult.insertR=function(vvR)
 {
  return vvR.$==0?ReaderMResult.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vvR.$0):ReaderMResult.rtn(Library.Error(vvR.$0));
 };
 ReaderMResult.insertO=function(vvO)
 {
  var o;
  o=vvO==null?null:{
   $:1,
   $0:ReaderMResult.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vvO.$0)
  };
  return o==null?ReaderMResult.rtn(null):o.$0;
 };
 ReaderMResult.sequenceSeq=function(sq)
 {
  return ReaderMResult.traverseSeq(Global.id,sq);
 };
 ReaderMResult.traverseSeq=function(f,sq)
 {
  return ReaderMResult.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return ReaderMResult.op_GreaterGreaterEquals(f(head),function(h)
   {
    return ReaderMResult.op_GreaterGreaterEquals(tail,function(t)
    {
     return ReaderMResult.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),ReaderMResult.rtn(List.T.Empty)));
 };
 ReaderMResult.op_GreaterGreaterEquals=function(v,f)
 {
  return ReaderMResult.bind(f,v);
 };
 ReaderMResult.run=function(rsrc,a)
 {
  return(ReaderMResult.getFun(a))(rsrc);
 };
 ReaderMResult.getResult2=function(a)
 {
  return ReaderMResult.map(function(a$1)
  {
   return{
    $:0,
    $0:a$1
   };
  },a);
 };
 ReaderMResult.getResult=function(a)
 {
  return{
   $:0,
   $0:function(m)
   {
    return{
     $:0,
     $0:(ReaderMResult.getFun(a))(m)
    };
   }
  };
 };
 ReaderMResult.apply=function(fR,vR)
 {
  return ReaderMResult.bind(function(b)
  {
   return ReaderMResult.map(b,vR);
  },fR);
 };
 ReaderMResult.map=function(f,m)
 {
  return ReaderMResult.bind(function(x)
  {
   return ReaderMResult.rtn(f(x));
  },m);
 };
 ReaderMResult.delayRun=function(f)
 {
  return ReaderMResult.wrap(function(m)
  {
   return(ReaderMResult.getFun(f()))(m);
  });
 };
 ReaderMResult.bindR=function(f,a)
 {
  return ReaderMResult.bind(f,ReaderMResult.rtnR(a));
 };
 ReaderMResult.bind=function(f,a)
 {
  return ReaderMResult.wrap(function(m)
  {
   return Result$1.Bind(function(v)
   {
    return(ReaderMResult.getFun(f(v)))(m);
   },(ReaderMResult.getFun(a))(m));
  });
 };
 ReaderMResult.rtnR=function(r)
 {
  return ReaderMResult.wrap(function()
  {
   return r;
  });
 };
 ReaderMResult.rtn=function(a)
 {
  return ReaderMResult.wrap(function()
  {
   return Result.rtn(a);
  });
 };
 ReaderMResult.ofFun=function(f)
 {
  return ReaderMResult.wrap(function(x)
  {
   return Result.rtn(f(x));
  });
 };
 ReaderMResult.getFun=function(f)
 {
  return f.$0;
 };
 ReaderMResult.wrap=function(f)
 {
  return{
   $:0,
   $0:f
  };
 };
 Builder$3=ReaderMAsyncResult.Builder=Runtime.Class({
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
   return ReaderMAsyncResult.wrap(function(r)
   {
    function g(a)
    {
     return ReaderMAsyncResult.run(r,a);
    }
    return Concurrency.Using(disposable,function(x)
    {
     return g(body(x));
    });
   });
  },
  TryFinally:function(body,compensation)
  {
   return ReaderMAsyncResult.wrap(function(r)
   {
    return Concurrency.TryFinally(ReaderMAsyncResult.run(r,body()),compensation);
   });
  },
  TryWith:function(body,handler)
  {
   return ReaderMAsyncResult.wrap(function(r)
   {
    return Concurrency.TryWith(ReaderMAsyncResult.run(r,body()),handler);
   });
  },
  While:function(guard,body)
  {
   function whileLoop(guard$1,body$1)
   {
    return guard$1()?ReaderMAsyncResult.bind(function()
    {
     return whileLoop(guard$1,body$1);
    },body$1()):ReaderMAsyncResult.rtn();
   }
   return whileLoop(guard,body);
  },
  Run:function(f)
  {
   return ReaderMAsyncResult.delayRun(f);
  },
  Combine:function(a,b)
  {
   return ReaderMAsyncResult.bind(b,a);
  },
  Delay:Global.id,
  Zero:function()
  {
   return ReaderMAsyncResult.rtn();
  },
  Bind:function(w,r)
  {
   return ReaderMAsyncResult.bindRmr(r,w);
  },
  Bind$1:function(w,r)
  {
   return ReaderMAsyncResult.bindRA(r,w);
  },
  Bind$2:function(w,r)
  {
   return ReaderMAsyncResult.bindA(r,w);
  },
  Bind$3:function(w,r)
  {
   return ReaderMAsyncResult.bindR(r,w);
  },
  Bind$4:function(w,r)
  {
   return ReaderMAsyncResult.bind(r,w);
  },
  ReturnFrom:function(x)
  {
   return ReaderMAsyncResult.rtnRmr(x);
  },
  ReturnFrom$1:function(x)
  {
   return ReaderMAsyncResult.rtnRA(x);
  },
  ReturnFrom$2:function(x)
  {
   return ReaderMAsyncResult.rtnA(x);
  },
  ReturnFrom$3:function(x)
  {
   return ReaderMAsyncResult.rtnR(x);
  },
  ReturnFrom$4:Global.id,
  Return:function(x)
  {
   return ReaderMAsyncResult.rtn(x);
  }
 },Obj,Builder$3);
 Builder$3.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder$3);
 Operators$3.reader=function()
 {
  SC$1.$cctor();
  return SC$1.reader$5;
 };
 Operators$3.rtn=function(v)
 {
  return ReaderMAsyncResult.rtn(v);
 };
 Operators$3.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators$3.op_GreaterGreaterEquals(f(v),g);
 };
 Operators$3.op_RightShift=function(f,g,v)
 {
  return Operators$3.op_BarGreaterGreater(f(v),g);
 };
 Operators$3.op_GreaterGreaterEquals=function(v,f)
 {
  return ReaderMAsyncResult.bind(f,v);
 };
 Operators$3.op_BarGreaterGreater=function(v,f)
 {
  return ReaderMAsyncResult.map(f,v);
 };
 Operators$3.op_LessMultiplyGreater=function(f,v)
 {
  return ReaderMAsyncResult.apply(f,v);
 };
 ReaderMAsyncResult.reader=function()
 {
  SC$1.$cctor();
  return SC$1.reader$4;
 };
 ReaderMAsyncResult.memoizeRm=function(getCache,fRm,p)
 {
  return ReaderMAsyncResult.wrap(function(r)
  {
   var p$1,o,x;
   p$1=getCache(r);
   o=p$1[0](p);
   return o==null?(x=(ReaderMAsyncResult.getFun(fRm(p)))(r),(p$1[1](p))(x)):o.$0;
  });
 };
 ReaderMAsyncResult.iterS=function(fE,f,t)
 {
  function f$1(a)
  {
   return ReaderMAsyncResult.run(t,a);
  }
  function g(v)
  {
   AsyncResult.iterS(fE,f,v);
  }
  return function(x)
  {
   return g(f$1(x));
  };
 };
 ReaderMAsyncResult.iterA=function(fE,f,t)
 {
  function f$1(a)
  {
   return ReaderMAsyncResult.run(t,a);
  }
  function g(v)
  {
   AsyncResult.iterA(fE,f,v);
  }
  return function(x)
  {
   return g(f$1(x));
  };
 };
 ReaderMAsyncResult.absorbO=function(f,vORm)
 {
  return ReaderMAsyncResult.absorbR(ReaderMAsyncResult.map(function(v)
  {
   return Result.ofOption(f,v);
  },vORm));
 };
 ReaderMAsyncResult.absorbR=function(vvRm)
 {
  return ReaderMAsyncResult.bind(ReaderMAsyncResult.rtnR,vvRm);
 };
 ReaderMAsyncResult.insertSnd=function(vRm,snd)
 {
  return ReaderMAsyncResult.map(function(v)
  {
   return[v,snd];
  },vRm);
 };
 ReaderMAsyncResult.insertFst=function(fst,vRm)
 {
  return ReaderMAsyncResult.map(function(v)
  {
   return[fst,v];
  },vRm);
 };
 ReaderMAsyncResult.insertR=function(vvR)
 {
  return vvR.$==0?ReaderMAsyncResult.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vvR.$0):ReaderMAsyncResult.rtn(Library.Error(vvR.$0));
 };
 ReaderMAsyncResult.insertO=function(vvO)
 {
  var o;
  o=vvO==null?null:{
   $:1,
   $0:ReaderMAsyncResult.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vvO.$0)
  };
  return o==null?ReaderMAsyncResult.rtn(null):o.$0;
 };
 ReaderMAsyncResult.sequenceSeq=function(sq)
 {
  return ReaderMAsyncResult.traverseSeq(Global.id,sq);
 };
 ReaderMAsyncResult.traverseSeq=function(f,sq)
 {
  return ReaderMAsyncResult.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return ReaderMAsyncResult.op_GreaterGreaterEquals(f(head),function(h)
   {
    return ReaderMAsyncResult.op_GreaterGreaterEquals(tail,function(t)
    {
     return ReaderMAsyncResult.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),ReaderMAsyncResult.rtn(List.T.Empty)));
 };
 ReaderMAsyncResult.op_GreaterGreaterEquals=function(v,f)
 {
  return ReaderMAsyncResult.bind(f,v);
 };
 ReaderMAsyncResult.run=function(rsrc,a)
 {
  return(ReaderMAsyncResult.getFun(a))(rsrc);
 };
 ReaderMAsyncResult.getAsyncResult=function(a)
 {
  return{
   $:0,
   $0:function(m)
   {
    return AsyncResult.mapP(AsyncResult.rtn,(ReaderMAsyncResult.getFun(a))(m));
   }
  };
 };
 ReaderMAsyncResult.getAsync=function(a)
 {
  return{
   $:0,
   $0:function(m)
   {
    return AsyncResult.mapP(function(v)
    {
     return Concurrency.Return(v);
    },(ReaderMAsyncResult.getFun(a))(m));
   }
  };
 };
 ReaderMAsyncResult.getResult=function(a)
 {
  return{
   $:0,
   $0:function(m)
   {
    function f(a$1)
    {
     return{
      $:0,
      $0:a$1
     };
    }
    function g(v)
    {
     return Concurrency.Return(v);
    }
    return Concurrency.Bind((ReaderMAsyncResult.getFun(a))(m),function(x)
    {
     return g(f(x));
    });
   }
  };
 };
 ReaderMAsyncResult.apply=function(fR,vR)
 {
  return ReaderMAsyncResult.bind(function(b)
  {
   return ReaderMAsyncResult.map(b,vR);
  },fR);
 };
 ReaderMAsyncResult.map=function(f,m)
 {
  return ReaderMAsyncResult.bind(function(x)
  {
   return ReaderMAsyncResult.rtn(f(x));
  },m);
 };
 ReaderMAsyncResult.delayRun=function(f)
 {
  return ReaderMAsyncResult.wrap(function(m)
  {
   return(ReaderMAsyncResult.getFun(f()))(m);
  });
 };
 ReaderMAsyncResult.bindRmr=function(f,a)
 {
  return ReaderMAsyncResult.bind(f,ReaderMAsyncResult.rtnRmr(a));
 };
 ReaderMAsyncResult.bindRA=function(f,a)
 {
  return ReaderMAsyncResult.bind(f,ReaderMAsyncResult.rtnRA(a));
 };
 ReaderMAsyncResult.bindA=function(f,a)
 {
  return ReaderMAsyncResult.bind(f,ReaderMAsyncResult.rtnA(a));
 };
 ReaderMAsyncResult.bindR=function(f,a)
 {
  return ReaderMAsyncResult.bind(f,ReaderMAsyncResult.rtnR(a));
 };
 ReaderMAsyncResult.bind=function(f,a)
 {
  return ReaderMAsyncResult.wrap(function(m)
  {
   return AsyncResult.bindP(function(v)
   {
    return(ReaderMAsyncResult.getFun(f(v)))(m);
   },(ReaderMAsyncResult.getFun(a))(m));
  });
 };
 ReaderMAsyncResult.rtnRmr=function(r)
 {
  return ReaderMAsyncResult.wrap(function(m)
  {
   return Concurrency.Return((ReaderMResult.getFun(r))(m));
  });
 };
 ReaderMAsyncResult.rtnRA=function(r)
 {
  return ReaderMAsyncResult.wrap(function()
  {
   return r;
  });
 };
 ReaderMAsyncResult.rtnA=function(r)
 {
  return ReaderMAsyncResult.wrap(function()
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
   return Concurrency.Bind(r,function(x)
   {
    return g(f(x));
   });
  });
 };
 ReaderMAsyncResult.rtnR=function(r)
 {
  return ReaderMAsyncResult.wrap(function()
  {
   return Concurrency.Return(r);
  });
 };
 ReaderMAsyncResult.rtn=function(a)
 {
  return ReaderMAsyncResult.wrap(function()
  {
   return AsyncResult.rtn(a);
  });
 };
 ReaderMAsyncResult.ofFun=function(f)
 {
  return ReaderMAsyncResult.wrap(function(x)
  {
   return AsyncResult.rtn(f(x));
  });
 };
 ReaderMAsyncResult.getFun=function(f)
 {
  return f.$0;
 };
 ReaderMAsyncResult.wrap=function(f)
 {
  return{
   $:0,
   $0:f
  };
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
 ResourceAgentState.New=function(useCount,limitCount,resource,configuration)
 {
  return{
   useCount:useCount,
   limitCount:limitCount,
   resource:resource,
   configuration:configuration
  };
 };
 ResourceAgent=Library.ResourceAgent=Runtime.Class({
  increment:function(state)
  {
   var $this,c;
   $this=this;
   return(this.respawnRightAfter?(c=state.configuration,function(s)
   {
    return $this.check(c,s);
   }):Global.id)(ResourceAgentState.New(state.useCount+1,state.limitCount,state.resource,state.configuration));
  },
  check:function(cfg,state)
  {
   return state.useCount<state.limitCount&&this.alive(state.resource)&&Unchecked.Equals(cfg,state.configuration)?state:this.respawn(ResourceAgentState.New(state.useCount,state.limitCount,state.resource,cfg));
  },
  respawn:function(state)
  {
   this.clean(state.resource);
   return ResourceAgentState.New(0,state.limitCount,this.ctor(state.configuration),state.configuration);
  },
  Respawn:function()
  {
   var $this;
   $this=this;
   StateFull.apply(function(s)
   {
    return $this.respawn(s);
   },this.agent);
  },
  set_Configuration:function(c)
  {
   var $this;
   $this=this;
   !Unchecked.Equals(c,this.get_Configuration())?StateFull.apply(function(s)
   {
    return $this.respawn(ResourceAgentState.New(s.useCount,s.limitCount,s.resource,c));
   },this.agent):void 0;
  },
  set_LimitCount:function(n)
  {
   StateFull.apply(function(s)
   {
    return ResourceAgentState.New(s.useCount,n,s.resource,s.configuration);
   },this.agent);
  },
  get_Configuration:function()
  {
   return this.get_State().configuration;
  },
  get_LimitCount:function()
  {
   return this.get_State().limitCount;
  },
  get_State:function()
  {
   throw"getState not available in JavaScript";
  },
  AsyncProcessA:function(work,cfg)
  {
   var $this;
   $this=this;
   return StateFull.applyReplyA(function(st)
   {
    var b;
    b=null;
    return Concurrency.Delay(function()
    {
     var st2;
     st2=$this.check(cfg==null?st.configuration:cfg.$0,st);
     return Concurrency.Bind(work(st2.resource),function(a)
     {
      return Concurrency.Return([$this.increment(st2),a]);
     });
    });
   },this.agent);
  },
  ProcessA:function(work,cfg)
  {
   return this.AsyncProcessA(function(v)
   {
    var b;
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Return(work(v));
    });
   },cfg);
  },
  Dispose:function()
  {
   try
   {
    this.clean(this.get_State().resource);
   }
   catch(m)
   {
    null;
   }
  }
 },Obj,ResourceAgent);
 ResourceAgent.New=Runtime.Ctor(function(maxUseCount,ctor,configuration,cleanup,isAlive,respawnAfter)
 {
  var $this;
  $this=this;
  Obj.New.call(this);
  this.ctor=ctor;
  this.clean=cleanup==null?Global.ignore:cleanup.$0;
  this.alive=isAlive==null?function()
  {
   return true;
  }:isAlive.$0;
  this.respawnRightAfter=respawnAfter==null||respawnAfter.$0;
  this.agent=Mailbox.stateFull(function($1,$2)
  {
   Library.print($1);
   return $this.respawn($2);
  },ResourceAgentState.New(0,maxUseCount,this.ctor(configuration),configuration));
 },ResourceAgent);
 AgentReaderM.runSameConfig=function(agent,m)
 {
  return ReaderMAsyncResult.run([agent,agent.get_Configuration()],m);
 };
 AgentReaderM.run=function(agent,cfg,m)
 {
  return ReaderMAsyncResult.run([agent,cfg],m);
 };
 AgentReaderM.fromResourceRm=function(f)
 {
  return ReaderMAsyncResult.wrap(function(t)
  {
   return t[0].AsyncProcessA(ReaderMAsyncResult.getFun(f),{
    $:1,
    $0:t[1]
   });
  });
 };
 AgentReaderM.createAgentRm=function(f,v)
 {
  return ReaderMAsyncResult.ofFun(function(t)
  {
   return t[0].AsyncProcessA(function(resource)
   {
    return f(resource,v);
   },{
    $:1,
    $0:t[1]
   });
  });
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
  return[arg.$0,ReaderMResult.map(Global.id,ReaderMResult.ofFun(f))];
 };
 TypedCommArg.op_DivisionAssignment$1=function(arg,v)
 {
  return[arg.$0,ReaderMResult.map(Global.id,v)];
 };
 TypedCommArg.op_DivisionAssignment$2=function(arg,v)
 {
  return[arg.$0,ReaderMResult.map(Global.id,ReaderMResult.rtn(v))];
 };
 CommArgModule.getFloatR=function(a,o)
 {
  return a.$0.build.$==3?{
   $:0,
   $0:o
  }:Library.Error(new ResultMessage({
   $:0,
   $0:"expecting TFloat"
  }));
 };
 CommArgModule.getBoolR=function(a,o)
 {
  return a.$0.build.$==2?{
   $:0,
   $0:o
  }:Library.Error(new ResultMessage({
   $:0,
   $0:"expecting TBool"
  }));
 };
 CommArgModule.getStringR=function(a,o)
 {
  return a.$0.build.$==1?{
   $:0,
   $0:o
  }:Library.Error(new ResultMessage({
   $:0,
   $0:"expecting TString"
  }));
 };
 CommArgModule.getIntR=function(a,o)
 {
  return a.$0.build.$==0?{
   $:0,
   $0:o
  }:Library.Error(new ResultMessage({
   $:0,
   $0:"expecting TInt"
  }));
 };
 CommArgModule.argumentTRm=function(a,v)
 {
  return CommArgModule.argumentRm(a,v);
 };
 CommArgModule.argumentRm=function(a,vRm)
 {
  var b;
  b=Operators$2.reader();
  return b.Run(b.Delay(function()
  {
   return b.Bind(vRm,function(a$1)
   {
    var m;
    return b.Return((m=a.build,m.$==1?m.$0(a$1):m.$==2?m.$0(a$1):m.$==3?m.$0(a$1):m.$0(a$1)));
   });
  }));
 };
 CommArgModule.NewFloat=function(name,unique,build)
 {
  return new TypedCommArg({
   $:0,
   $0:CommArgModule.New0(name,unique,{
    $:3,
    $0:build
   })
  });
 };
 CommArgModule.NewBool=function(name,unique,build)
 {
  return new TypedCommArg({
   $:0,
   $0:CommArgModule.New0(name,unique,{
    $:2,
    $0:build
   })
  });
 };
 CommArgModule.NewString=function(name,unique,build)
 {
  return new TypedCommArg({
   $:0,
   $0:CommArgModule.New0(name,unique,{
    $:1,
    $0:build
   })
  });
 };
 CommArgModule.NewInt=function(name,unique,build)
 {
  return new TypedCommArg({
   $:0,
   $0:CommArgModule.New0(name,unique,{
    $:0,
    $0:build
   })
  });
 };
 CommArgModule.New0=function(name,unique,build)
 {
  return CommArg.New({
   $:0,
   $0:Guid.NewGuid()
  },name,unique,build);
 };
 CommArgCollection.addPairs=function(pairs,collection)
 {
  return CommArgCollection.append(collection,new CommArgCollection({
   $:0,
   $0:pairs
  }));
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
  return new CommArgCollection({
   $:0,
   $0:Arrays.ofSeq(Seq$1.append((commArg.unique?function(s)
   {
    return Seq$1.filter(function($1)
    {
     return p($1[0],$1[1]);
    },s);
   }:Global.id)(a.$0),List.ofArray([[commArg,vRm]])))
  });
 };
 CommArgCollection.getBoolRm=function(def,targ)
 {
  return Operators$2.op_BarGreaterGreater(CommArgCollection.tryGetBoolORm(targ),function(o)
  {
   return o==null?def:o.$0;
  });
 };
 CommArgCollection.getFloatRm=function(targ)
 {
  return ReaderMResult.absorbO(function()
  {
   return CommArgCollection.argumentNotFound(targ,void 0);
  },CommArgCollection.tryGetFloatORm(targ));
 };
 CommArgCollection.getStringRm=function(targ)
 {
  return ReaderMResult.absorbO(function()
  {
   return CommArgCollection.argumentNotFound(targ,void 0);
  },CommArgCollection.tryGetStringORm(targ));
 };
 CommArgCollection.getIntRm=function(targ)
 {
  return ReaderMResult.absorbO(function()
  {
   return CommArgCollection.argumentNotFound(targ,void 0);
  },CommArgCollection.tryGetIntORm(targ));
 };
 CommArgCollection.findArgRm=function(targ)
 {
  return ReaderMResult.absorbO(function()
  {
   return CommArgCollection.argumentNotFound(targ,void 0);
  },CommArgCollection.tryFindArgORm(targ));
 };
 CommArgCollection.tryGetFloatORm=function(targ)
 {
  function m(a,o)
  {
   return CommArgModule.getFloatR(targ,o);
  }
  return ReaderMResult.absorbR(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
  {
   var $1;
   return o==null?null:{
    $:1,
    $0:($1=o.$0,m($1[0],$1[1]))
   };
  }),Result.insertO));
 };
 CommArgCollection.tryGetBoolORm=function(targ)
 {
  function m(a,o)
  {
   return CommArgModule.getBoolR(targ,o);
  }
  return ReaderMResult.absorbR(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
  {
   var $1;
   return o==null?null:{
    $:1,
    $0:($1=o.$0,m($1[0],$1[1]))
   };
  }),Result.insertO));
 };
 CommArgCollection.tryGetStringORm=function(targ)
 {
  function m(a,o)
  {
   return CommArgModule.getStringR(targ,o);
  }
  return ReaderMResult.absorbR(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
  {
   var $1;
   return o==null?null:{
    $:1,
    $0:($1=o.$0,m($1[0],$1[1]))
   };
  }),Result.insertO));
 };
 CommArgCollection.tryGetIntORm=function(targ)
 {
  function m(a,o)
  {
   return CommArgModule.getIntR(targ,o);
  }
  return ReaderMResult.absorbR(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
  {
   var $1;
   return o==null?null:{
    $:1,
    $0:($1=o.$0,m($1[0],$1[1]))
   };
  }),Result.insertO));
 };
 CommArgCollection.tryFindArgORm=function(targ)
 {
  return ReaderMResult.bind(Global.id,ReaderMResult.ofFun(function(coll)
  {
   var o,$1;
   return ReaderMResult.insertO((o=CommArgCollection.tryFindArgO(targ,coll),o==null?null:{
    $:1,
    $0:($1=o.$0,ReaderMResult.insertFst($1[0],$1[1]))
   }));
  }));
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
   $:0,
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
  return ReaderMResult.ofFun(function(a)
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
  return Operators$2.op_GreaterGreaterEquals(CommArgCollection.filterRm(filter),function(s)
  {
   return ReaderMResult.traverseSeq(function($1)
   {
    return CommArgModule.argumentTRm($1[0],$1[1]);
   },s);
  });
 };
 CommArgCollection.filterRm=function(p)
 {
  return ReaderMResult.ofFun(function(a)
  {
   return Seq$1.filter(p,a.$0);
  });
 };
 CommArgCollection.existsRm=function(f)
 {
  return ReaderMResult.ofFun(function(a)
  {
   return Seq$1.exists(f,a.$0);
  });
 };
 CommArgCollection.argsRm=function()
 {
  return ReaderMResult.ofFun(function(a)
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
 PreproDirective.NoPrepo={
  $:12
 };
 PreproDirective.PrepoEndIf={
  $:9
 };
 PreproDirective.PrepoElse={
  $:8
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
  var assembs,defines,prepoIs,nowarns,cd;
  function f(t)
  {
   return t[1];
  }
  function g(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0
   }:null;
  }
  function f$1(t)
  {
   return t[1];
  }
  function g$1(a)
  {
   return a.$==2?{
    $:1,
    $0:a.$0
   }:null;
  }
  function f$2(t)
  {
   return t[1];
  }
  function g$2(a)
  {
   return a.$==6?{
    $:1,
    $0:a.$0
   }:null;
  }
  function f$3(t)
  {
   return t[1];
  }
  function g$3(a)
  {
   return a.$==5?{
    $:1,
    $0:a.$0
   }:null;
  }
  function f$4(t)
  {
   return t[1];
  }
  function g$4(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  }
  assembs=Arrays.ofSeq(Seq$1.distinct(Seq$1.choose(function(x)
  {
   return g(f(x));
  },fsNass)));
  defines=Arrays.ofSeq(Seq$1.distinct(Seq$1.choose(function(x)
  {
   return g$1(f$1(x));
  },fsNass)));
  prepoIs=Arrays.ofSeq(Seq$1.distinct(Seq$1.choose(function(x)
  {
   return g$2(f$2(x));
  },fsNass)));
  nowarns=Arrays.ofSeq(Seq$1.distinct(Seq$1.choose(function(x)
  {
   return g$3(f$3(x));
  },fsNass)));
  cd=Seq$1.tryHead(Seq$1.choose(function(x)
  {
   return g$4(f$4(x));
  },fsNass));
  return[Arrays.ofSeq(Seq$1.map(function(t)
  {
   return t[0];
  },fsNass)),assembs,defines,prepoIs,nowarns,cd];
 };
 FsCodeModule.separatePrepros=function(code)
 {
  function quoted(line)
  {
   var o;
   o=Seq$1.tryLast(Strings.SplitStrings(Strings.Trim(line),["\""],1));
   return o==null?line:o.$0;
  }
  function define(line)
  {
   var o;
   o=Seq$1.tryHead(Strings.SplitStrings(Strings.Trim(line),["#define "],1));
   return o==null?"":o.$0;
  }
  function comment(y)
  {
   return"//"+y;
  }
  return Arrays.map(function(line)
  {
   var m,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13;
   m=true;
   return m&&Strings.StartsWith(line,"#define")?[comment(line),{
    $:2,
    $0:define(line)
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
    $0:line
   }]:m&&Strings.StartsWith(line,"#else")?[line,PreproDirective.PrepoElse]:m&&Strings.StartsWith(line,"#endif")?[line,PreproDirective.PrepoEndIf]:m&&Strings.StartsWith(line,"#light")?[line,{
    $:10,
    $0:false
   }]:m&&Strings.StartsWith(line,"#")?[comment(line),{
    $:11,
    $0:line
   }]:[line,PreproDirective.NoPrepo];
  },code);
 };
 FsCodeModule.extractDefines=function(a)
 {
  var code;
  code=a.$0;
  return Strings.StartsWith(code,"////-d:")?Slice.string(code,{
   $:1,
   $0:4
  },{
   $:1,
   $0:code.indexOf("\n")-1
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
 Snippet.New=function(snpId,snpName,snpContent,snpParentIdO,snpPredIds,snpProperties,snpGeneration)
 {
  return{
   snpId:snpId,
   snpName:snpName,
   snpContent:snpContent,
   snpParentIdO:snpParentIdO,
   snpPredIds:snpPredIds,
   snpProperties:snpProperties,
   snpGeneration:snpGeneration
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
  return ReaderMResult.map(function(t)
  {
   return t[0];
  },SnippetModule.fastCodeRm({
   $:1,
   $0:curId
  },{
   $:1,
   $0:curId
  }));
 };
 SnippetModule.fastCodeRm=function(curIdO,lastIdO)
 {
  var b;
  b=Operators$2.reader();
  return b.Run(b.Delay(function()
  {
   return b.Bind(SnippetModule.fastReducedRm(curIdO,lastIdO),function(a)
   {
    return b.Return(SnippetModule.finishCode(a[0],a[1],a[2],a[3],a[4],a[5],a[6]));
   });
  }));
 };
 SnippetModule.fastReducedRm=function(curIdO,lastIdO)
 {
  var b;
  b=Operators$2.reader();
  return b.Run(b.Delay(function()
  {
   return b.Bind(ReaderMResult.insertO(curIdO==null?null:{
    $:1,
    $0:SnippetModule.snippetORm(curIdO.$0)
   }),function(a)
   {
    return b.Bind(ReaderMResult.insertO(lastIdO==null?null:{
     $:1,
     $0:SnippetModule.snippetORm(lastIdO.$0)
    }),function(a$1)
    {
     var $1,$2,$3,curSnippet;
     $1=a==null?null:a.$0;
     $2=a$1==null?null:a$1.$0;
     return($2!=null&&$2.$==1?$1!=null&&$1.$==1?($3=[$1.$0,$2.$0],false):true:true)?b.ReturnFrom$1(SnippetModule.reducedCodeRm([])):(curSnippet=$3[0],b.Bind(SnippetModule.uniquePredsRm($3[1]),function(a$2)
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
           var l,c,a$6,d,p,n,c$1;
           l=t$1[0];
           c=t$1[1];
           a$6=t$1[2];
           d=t$1[3];
           p=t$1[4];
           n=t$1[5];
           c$1=t$1[6];
           return function(t$2)
           {
            return SnippetModule.addSeps(l,c,a$6,d,p,n,c$1,t$2[0],t$2[1],t$2[2],t$2[3],t$2[4],t$2[5],t$2[6]);
           };
          }(a$3.$0))(a$5)
         },o==null?a$5:o.$0);
         return b.Return((o$1=a$4==null?null:{
          $:1,
          $0:(t=a$4.$0,SnippetModule.addSeps(part1[0],part1[1],part1[2],part1[3],part1[4],part1[5],part1[6],t[0],t[1],t[2],t[3],t[4],t[5],t[6]))
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
  SC$1.$cctor();
  return SC$1.reducedOthersORmMemo;
 };
 SnippetModule.reducedOthersORm=function(before,snpId,snpIds)
 {
  var b;
  b=Operators$2.reader();
  return b.Run(b.Delay(function()
  {
   function p(snp)
   {
    return!Unchecked.Equals(snp.snpId,snpId)&&snpIds.Contains(snp.snpId);
   }
   return b.Bind(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(SnippetModule.orderedRm(),(before?function(p$1)
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
 SnippetModule.finishCode=function(lines,code,assembs,defines,prepIs,nowarns,cdO)
 {
  var config,part1;
  config=Strings.concat(" ",Seq$1.map(function(y)
  {
   return"-d:"+y;
  },Seq$1.sort(defines)));
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
  b=Operators$2.reader();
  return b.Run(b.Delay(function()
  {
   return b.Bind(ReaderMResult.traverseSeq(SnippetModule.separateCodeRm,snippets),function(a)
   {
    var t;
    return b.Return((t=Seq$1.reduce(function($1,$2)
    {
     return(function(t$1)
     {
      var l,c,a$1,d,p,n,c$1;
      l=t$1[0];
      c=t$1[1];
      a$1=t$1[2];
      d=t$1[3];
      p=t$1[4];
      n=t$1[5];
      c$1=t$1[6];
      return function(t$2)
      {
       return SnippetModule.addSeps(l,c,a$1,d,p,n,c$1,t$2[0],t$2[1],t$2[2],t$2[3],t$2[4],t$2[5],t$2[6]);
      };
     }($1))($2);
    },Seq$1.isEmpty(a)?[[[],[],[],[],[],[],null]]:a),[t[0],[Strings.concat("\n",t[1])],t[2],t[3],t[4],t[5],t[6]]));
   });
  }));
 };
 SnippetModule.addSeps=function(lines1,code1,assembs1,defines1,prepIs1,nowarns1,cdO1,lines2,code2,assembs2,defines2,prepIs2,nowarns2,cdO2)
 {
  return[lines1.concat(lines2),code1.concat(code2),Arrays.ofSeq(Seq$1.distinct(Seq$1.append(assembs1,assembs2))),Arrays.ofSeq(Seq$1.distinct(Seq$1.append(defines1,defines2))),Arrays.ofSeq(Seq$1.distinct(Seq$1.append(prepIs1,prepIs2))),Arrays.ofSeq(Seq$1.distinct(Seq$1.append(nowarns1,nowarns2))),cdO1==null?cdO2:cdO1];
 };
 SnippetModule.separateCodeRm=function(snp)
 {
  var b;
  b=Operators$2.reader();
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
     p=FsCodeModule.separateDirectives(indentF(FsCodeModule.separatePrepros(Strings.SplitChars(a$1,["\n"],0))));
     code=p[0];
     return b.Return([[[snp.snpId,SnippetModule.snippetName(snp.snpName,snp.snpContent),Arrays.length(code),a]],code,p[1],p[2],p[3],p[4],p[5]]);
    });
   });
  }));
 };
 SnippetModule.ancestorsRm=function(snp)
 {
  function ancestorsRm2(snp$1,lst)
  {
   var b;
   b=Operators$2.reader();
   return b.Run(b.Delay(function()
   {
    return b.Bind(SnippetModule.parentORm(snp$1),function(a)
    {
     var p;
     return a==null?b.Return(lst):(p=a.$0,b.ReturnFrom$1(ancestorsRm2(p,new List.T({
      $:1,
      $0:p,
      $1:lst
     }))));
    });
   }));
  }
  return ancestorsRm2(snp,List.T.Empty);
 };
 SnippetModule.levelRm=function(snp)
 {
  function levelRm2(snp$1,lv)
  {
   var b;
   b=Operators$2.reader();
   return b.Run(b.Delay(function()
   {
    return b.Bind(SnippetModule.parentORm(snp$1),function(a)
    {
     return a!=null&&a.$==1?b.ReturnFrom$1(levelRm2(a.$0,lv+1)):b.Return(lv);
    });
   }));
  }
  return levelRm2(snp,0);
 };
 SnippetModule.indentRm=function(snp)
 {
  function indentMeChildNextRm(snp$1)
  {
   var b;
   b=Operators$2.reader();
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
  return ReaderMResult.map(function(t)
  {
   return t[0];
  },indentMeChildNextRm(snp));
 };
 SnippetModule.propertyHierORm=function(n,snp)
 {
  var b;
  b=Operators$2.reader();
  return b.Run(b.Delay(function()
  {
   var m,vs;
   m=SnippetModule.propertyO(n,snp);
   return m==null?b.Bind(SnippetModule.parentORm(snp),function(a)
   {
    return a==null?b.Return(null):b.Bind(SnippetModule.propertyHierORm(n,a.$0),function(a$1)
    {
     var $1,next;
     return b.Return(a$1==null?null:{
      $:1,
      $0:($1=a$1.$0,($1[0],next=$1[1],[next,next]))
     });
    });
   }):b.Return({
    $:1,
    $0:(vs=Strings.SplitStrings(m.$0,["|-|"],1),[Arrays.get(vs,0),Arrays.length(vs)>0?Arrays.get(vs,1):Arrays.get(vs,0)])
   });
  }));
 };
 SnippetModule.modifiedRecRm=function(snp)
 {
  var b;
  b=Operators$2.reader();
  return b.Run(b.Delay(function()
  {
   return b.Bind(SnippetModule.modifiedRm(snp),function(a)
   {
    return a?b.Return(true):b.Bind(SnippetModule.uniquePredsRm(snp),function(a$1)
    {
     return b.Bind(ReaderMResult.sequenceSeq(Seq$1.map(SnippetModule.snippetORm,a$1)),function(a$2)
     {
      return b.Bind(ReaderMResult.sequenceSeq(Seq$1.map(SnippetModule.modifiedRm,Seq$1.choose(Global.id,a$2))),function(a$3)
      {
       return b.Return(Seq$1.contains(true,a$3));
      });
     });
    });
   });
  }));
 };
 SnippetModule.uniquePredsRm=function(snp)
 {
  return(SnippetModule.predsLRmMemo())(snp.snpId);
 };
 SnippetModule.predsLRmMemo=function()
 {
  SC$1.$cctor();
  return SC$1.predsLRmMemo;
 };
 SnippetModule.predsLRm=function(sid)
 {
  var b;
  b=Operators$2.reader();
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
  b=Operators$2.reader();
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
   return Operators$2.op_BarGreaterGreater(SnippetModule.pathRm(prn.snpId),function(rest)
   {
    return new List.T({
     $:1,
     $0:prn.snpId,
     $1:rest
    });
   });
  }
  return Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(SnippetModule.snippetORm(sid),function(o)
  {
   return o==null?null:{
    $:1,
    $0:SnippetModule.parentORm(o.$0)
   };
  }),ReaderMResult.insertO),function(o)
  {
   return o==null?null:Global.id(o.$0);
  }),function(o)
  {
   return o==null?null:{
    $:1,
    $0:m(o.$0)
   };
  }),ReaderMResult.insertO),(v=List.T.Empty,function(o)
  {
   return o==null?v:o.$0;
  }));
 };
 SnippetModule.snippetRm=function(sid)
 {
  return ReaderMResult.absorbO(function()
  {
   return new ResultMessage({
    $:0,
    $0:(function($1)
    {
     return function($2)
     {
      return $1("Snippet not found "+FSharpStation_GeneratedPrintf.p($2));
     };
    }(Global.id))(sid)
   });
  },SnippetModule.snippetORm(sid));
 };
 SnippetModule.prepareCodeRm=function(snp)
 {
  return ReaderMResult.ofFun(function(a)
  {
   return a.prepCode(snp);
  });
 };
 SnippetModule.orderedRm=function()
 {
  return ReaderMResult.ofFun(function(a)
  {
   return a.ordered;
  });
 };
 SnippetModule.childrenRm=function(sid)
 {
  return ReaderMResult.ofFun(function(a)
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
  return ReaderMResult.ofFun(function(a)
  {
   return snp.snpGeneration>a.generation;
  });
 };
 SnippetModule.maxGenerationRm=function()
 {
  return ReaderMResult.ofFun(function(a)
  {
   return Seq$1.max(Seq$1.map(function(s)
   {
    return s.snpGeneration;
   },a.ordered));
  });
 };
 SnippetModule.predecessorsRm=function(snp)
 {
  return ReaderMResult.ofFun(function(a)
  {
   return Seq$1.choose(a.fetcher,snp.snpPredIds);
  });
 };
 SnippetModule.parentORm=function(snp)
 {
  return ReaderMResult.ofFun(function(a)
  {
   var o;
   o=snp.snpParentIdO;
   return o==null?null:a.fetcher(o.$0);
  });
 };
 SnippetModule.snippetORm=function(sid)
 {
  return ReaderMResult.ofFun(function(a)
  {
   return a.fetcher(sid);
  });
 };
 SnippetModule.propertyPairO=function(n,snp)
 {
  var o,vs,x,v;
  o=SnippetModule.propertyO(n,snp);
  return o==null?null:{
   $:1,
   $0:(vs=Strings.SplitStrings(o.$0,["|-|"],1),[Arrays.get(vs,0),(x=Arrays.tryItem(1,vs),(v=Arrays.get(vs,0),x==null?v:x.$0))])
  };
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
  }),name,content,parentO,new FSharpSet.New$1(null),[],(SnippetModule.getNextGeneration())());
 };
 SnippetModule.getNextGeneration=function()
 {
  SC$1.$cctor();
  return SC$1.getNextGeneration;
 };
 SnippetModule.setGeneration=function()
 {
  SC$1.$cctor();
  return SC$1.setGeneration;
 };
 Hole.Hole={
  $:0
 };
 Node.New=function(id,isExpandedRm,canHaveChildrenRm,childrenRm,pathRm,parentORm,newChildrenRm)
 {
  return{
   id:id,
   isExpandedRm:isExpandedRm,
   canHaveChildrenRm:canHaveChildrenRm,
   childrenRm:childrenRm,
   pathRm:pathRm,
   parentORm:parentORm,
   newChildrenRm:newChildrenRm
  };
 };
 TreeReader.removeNodeOutdentChildren=function(node,nodes)
 {
  var s;
  function f(nodes$1,node$1)
  {
   return Operators$2.op_GreaterGreaterEquals(nodes$1,function(n)
   {
    return TreeReader.outdentNode(node$1,n);
   });
  }
  return Operators$2.op_GreaterGreaterEquals(Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(node.childrenRm(),Arrays.ofSeq),(s=Operators$2.rtn(nodes),function(s$1)
  {
   return Seq$1.fold(f,s,s$1);
  })),function(n)
  {
   return TreeReader.removeNode(node,n);
  });
 };
 TreeReader.outdentNode=function(node,nodes)
 {
  var v;
  function m(parent)
  {
   return TreeReader.moveToSibling(true,node,parent,nodes);
  }
  return Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(node.parentORm(nodes),function(o)
  {
   return o==null?null:{
    $:1,
    $0:m(o.$0)
   };
  }),(v=Operators$2.rtn(nodes),function(o)
  {
   return o==null?v:o.$0;
  }));
 };
 TreeReader.indentNode=function(node,nodes)
 {
  var s;
  function p(n)
  {
   return!Unchecked.Equals(node.id(),n.id());
  }
  function f(newParentORm,n)
  {
   return Operators$2.op_GreaterGreaterEquals(n.canHaveChildrenRm(),function(can)
   {
    return can?Operators$2.rtn({
     $:1,
     $0:n
    }):newParentORm;
   });
  }
  return Operators$2.op_GreaterGreaterEquals(Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(node.parentORm(nodes),function(a)
  {
   return a!=null&&a.$==1?Operators$2.op_BarGreaterGreater(a.$0.childrenRm(),function(x)
   {
    var s$1;
    s$1=Arrays.ofSeq(x);
    return s$1;
   }):Operators$2.rtn(nodes);
  }),function(s$1)
  {
   return Seq$1.takeWhile(p,s$1);
  }),(s=Operators$2.rtn(null),function(s$1)
  {
   return Seq$1.fold(f,s,s$1);
  })),function(a)
  {
   var newParent;
   return a!=null&&a.$==1?(newParent=a.$0,Operators$2.op_GreaterGreaterEquals(TreeReader.removeNode(node,nodes),function(n)
   {
    return TreeReader.addChild(true,node,newParent,n);
   })):Operators$2.rtn(nodes);
  });
 };
 TreeReader.addChild=function(append,node,parentN,nodes)
 {
  var b;
  b=Operators$2.reader();
  return b.Run(b.Delay(function()
  {
   return b.Bind(parentN.pathRm(),function(a)
   {
    function mapAppend(n)
    {
     var a$1,s;
     return Unchecked.Equals(n.id(),parentN.id())?append?Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(n.childrenRm(),Arrays.ofSeq),(a$1=List.ofArray([node]),function(b$1)
     {
      return Seq$1.append(b$1,a$1);
     })),Arrays.ofSeq),n.newChildrenRm):Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(n.childrenRm(),Arrays.ofSeq),(s=List.ofArray([node]),function(s$1)
     {
      return Seq$1.append(s,s$1);
     })),Arrays.ofSeq),n.newChildrenRm):List.contains(n.id(),a)?Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(n.childrenRm(),Arrays.ofSeq),function(s$1)
     {
      return Seq$1.map(mapAppend,s$1);
     }),ReaderMResult.sequenceSeq),Arrays.ofSeq),n.newChildrenRm):Operators$2.rtn(n);
    }
    return b.ReturnFrom$1(ReaderMResult.sequenceSeq(Seq$1.map(mapAppend,nodes)));
   });
  }));
 };
 TreeReader.moveToSibling2=function(after,nodeId,siblingId,nodes)
 {
  var b;
  b=Operators$2.reader();
  return b.Run(b.Delay(function()
  {
   return b.Bind(TreeReader.tryFindId(nodeId,nodes),function(a)
   {
    var node;
    return a!=null&&a.$==1?(node=a.$0,b.Bind(TreeReader.tryFindId(siblingId,nodes),function(a$1)
    {
     return a$1!=null&&a$1.$==1?b.ReturnFrom$1(TreeReader.moveToSibling(after,node,a$1.$0,nodes)):b.Return(nodes);
    })):b.Return(nodes);
   });
  }));
 };
 TreeReader.moveToSibling=function(after,node,sibling,nodes)
 {
  return Operators$2.op_GreaterGreaterEquals(TreeReader.removeNode(node,nodes),function(n)
  {
   return TreeReader.addSibling(after,node,sibling,n);
  });
 };
 TreeReader.tryFindId=function(id,nodes)
 {
  return TreeReader.tryFind(function(n)
  {
   return Unchecked.Equals(n.id(),id);
  },nodes);
 };
 TreeReader.tryFind=function(p,nodes)
 {
  function folder(resRm,node)
  {
   return Operators$2.op_GreaterGreaterEquals(resRm,function(a)
   {
    var s;
    return a==null?p(node)?Operators$2.rtn({
     $:1,
     $0:node
    }):Operators$2.op_GreaterGreaterEquals(node.childrenRm(),(s=Operators$2.rtn(null),function(s$1)
    {
     return Seq$1.fold(folder,s,s$1);
    })):Operators$2.rtn({
     $:1,
     $0:a.$0
    });
   });
  }
  return Seq$1.fold(folder,Operators$2.rtn(null),nodes);
 };
 TreeReader.addSibling=function(after,node,sibling,nodes)
 {
  function theSibling(n)
  {
   return Unchecked.Equals(n.id(),sibling.id());
  }
  return Operators$2.op_GreaterGreaterEquals(sibling.pathRm(),function(a)
  {
   var path,parent;
   function mapAdd(n)
   {
    return Unchecked.Equals(n.id(),parent)?Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(n.childrenRm(),Arrays.ofSeq),function(n$1)
    {
     return TreeReader.addToParent(after,theSibling,node,n,n$1);
    }):List.contains(n.id(),path)?Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(n.childrenRm(),Arrays.ofSeq),function(s)
    {
     return Seq$1.map(mapAdd,s);
    }),ReaderMResult.sequenceSeq),Arrays.ofSeq),n.newChildrenRm):Operators$2.rtn(n);
   }
   return a.$==1?(path=a.$1,(parent=a.$0,ReaderMResult.sequenceSeq(Seq$1.map(mapAdd,nodes)))):Operators$2.rtn(TreeReader.addNodeToSeq(after,theSibling,node,nodes));
  });
 };
 TreeReader.addToParent=function(after,p,node,parent,nodes)
 {
  return parent.newChildrenRm(Arrays.ofSeq(TreeReader.addNodeToSeq(after,p,node,nodes)));
 };
 TreeReader.addNodeToSeq=function(after,p,node,nodes)
 {
  return List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.collect(function(n)
   {
    return p(n)?after?Seq$1.append([n],Seq$1.delay(function()
    {
     return[node];
    })):Seq$1.append([node],Seq$1.delay(function()
    {
     return[n];
    })):[n];
   },nodes);
  }));
 };
 TreeReader.removeNodes=function(p,nodes)
 {
  var b;
  b=Operators$2.reader();
  return b.Run(b.Delay(function()
  {
   function folder(pair,n)
   {
    var b$1;
    b$1=Operators$2.reader();
    return b$1.Run(b$1.Delay(function()
    {
     return b$1.Bind(pair,function(a)
     {
      var noparent,children;
      noparent=a[1];
      children=a[0];
      return b$1.Bind(Operators$2.op_BarGreaterGreater(n.childrenRm(),Arrays.ofSeq),function(a$1)
      {
       return b$1.Bind(Seq$1.fold(folder,Operators$2.rtn([List.T.Empty,noparent]),a$1),function(a$2)
       {
        var np,ch;
        np=a$2[1];
        ch=a$2[0];
        return p(n)?b$1.Return([children,List.append(ch,np)]):b$1.Bind(n.newChildrenRm(Arrays.ofSeq(Seq$1.rev(ch))),function(a$3)
        {
         return b$1.Return([new List.T({
          $:1,
          $0:a$3,
          $1:children
         }),np]);
        });
       });
      });
     });
    }));
   }
   return b.Bind(Seq$1.fold(folder,Operators$2.rtn([List.T.Empty,List.T.Empty]),nodes),function(a)
   {
    return b.Return(List.rev(List.append(a[1],a[0])));
   });
  }));
 };
 TreeReader.removeNode=function(node,nodes)
 {
  var b;
  b=Operators$2.reader();
  return b.Run(b.Delay(function()
  {
   return b.Bind(node.pathRm(),function(a)
   {
    function chRemove(n)
    {
     var b$1;
     b$1=Operators$2.reader();
     return b$1.Run(b$1.Delay(function()
     {
      return Unchecked.Equals(n.id(),node.id())?b$1.Return(null):List.contains(n.id(),a)?b$1.ReturnFrom$1(Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(n.childrenRm(),Arrays.ofSeq),function(s)
      {
       return Seq$1.map(chRemove,s);
      }),ReaderMResult.sequenceSeq),function(s)
      {
       return Seq$1.choose(Global.id,s);
      }),Arrays.ofSeq),n.newChildrenRm),function(a$1)
      {
       return{
        $:1,
        $0:a$1
       };
      })):b$1.Return({
       $:1,
       $0:n
      });
     }));
    }
    return b.ReturnFrom$1(Operators$2.op_BarGreaterGreater(ReaderMResult.sequenceSeq(Seq$1.map(chRemove,nodes)),function(s)
    {
     return Seq$1.choose(Global.id,s);
    }));
   });
  }));
 };
 TreeReader.listNodes=function(level,nodes)
 {
  return Operators$2.op_BarGreaterGreater(ReaderMResult.sequenceSeq(Seq$1.map(function(node)
  {
   return Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(node.isExpandedRm(),function(exp)
   {
    var l;
    return exp?Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(node.childrenRm(),Arrays.ofSeq),(l=level+1,function(n)
    {
     return TreeReader.listNodes(l,n);
    })):Operators$2.rtn([]);
   }),function(nodes$1)
   {
    return Seq$1.append([[node,level]],nodes$1);
   });
  },nodes)),function(s)
  {
   return Seq$1.collect(Global.id,s);
  });
 };
 Library["String.Right"]=function(_this,n)
 {
  var a,b;
  return Library["String.Substring2"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);
 };
 Library["String.Left"]=function(_this,n)
 {
  return Library["String.Substring2"](_this,0,n);
 };
 Library["String.Substring2"]=function(_this,from,n)
 {
  var from$1,b;
  while(true)
   {
    if(n<=0)
     return"";
    else
     if(from<0)
      {
       from$1=from;
       from=0;
       n=n+from$1;
      }
     else
      return from>=_this.length?"":Strings.Substring(_this,from,(b=_this.length-from,Unchecked.Compare(n,b)===-1?n:b));
   }
 };
 Library.delayed=function(delay,doF)
 {
  var cancellationTokenSourceO;
  cancellationTokenSourceO=[null];
  return function(parm)
  {
   var o,b;
   o=cancellationTokenSourceO[0];
   o==null?void 0:o.$0.Cancel$1();
   cancellationTokenSourceO[0]={
    $:1,
    $0:new CancellationTokenSource.New()
   };
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(delay),function()
    {
     doF(parm);
     return Concurrency.Zero();
    });
   })),{
    $:1,
    $0:cancellationTokenSourceO[0].$0
   });
  };
 };
 Library.print=function(v)
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
  }))(v));
 };
 Library.Error=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 Promise.ofAsyncResult=function(v)
 {
  return new Global.Promise(function(resolve,reject)
  {
   Concurrency.StartWithContinuations(v,function(a)
   {
    if(a.$==1)
     reject((function($1)
     {
      return function($2)
      {
       return $1(Utils.prettyPrint($2));
      };
     }(Global.id))(a.$0));
    else
     resolve(a.$0);
   },function(a)
   {
    reject(a);
   },function(a)
   {
    reject(a);
   },null);
  });
 };
 View.sequenceSeq=function(sq)
 {
  return View.traverseSeq(Global.id,sq);
 };
 View.traverseSeq=function(f,sq)
 {
  return View.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return View.op_GreaterGreaterEquals(f(head),function(h)
   {
    return View.op_GreaterGreaterEquals(tail,function(t)
    {
     return View.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),View.rtn(List.T.Empty)));
 };
 View.op_GreaterGreaterEquals=function(v,f)
 {
  return View.bind(f,v);
 };
 View.rtn=function(a)
 {
  return View$1.Const(a);
 };
 View.map=function(a,a$1)
 {
  return View$1.Map(a,a$1);
 };
 View.bind=function(a,a$1)
 {
  return View$1.Bind(a,a$1);
 };
 View.insertWO=function(a)
 {
  return a==null?View$1.Const(null):View$1.Map(function(a$1)
  {
   return{
    $:1,
    $0:a$1
   };
  },a.$0);
 };
 Serializer.serLMdField=function(name,lmd,s,s$1)
 {
  var serS;
  function deserializer(rc,b)
  {
   lmd(rc).Set(serS[1](b));
   return rc;
  }
  serS=Serializer.serSeq(s,s$1);
  return[name,function(rc)
  {
   var x;
   x=(lmd(rc))["var"].Get();
   return serS[0](x);
  },function($1)
  {
   return function($2)
   {
    return deserializer($1,$2);
   };
  }];
 };
 Serializer.serVarField=function(name,_var,s,s$1)
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
    Var$1.Set(_var(rc),s$1(o));
    return rc;
   };
  }];
 };
 Serializer.serMap=function(s,s$1,s$2,s$3)
 {
  var serKVPs,t,f,g,f$1;
  function m(kvp)
  {
   return[kvp.K,kvp.V];
  }
  function g$1(a)
  {
   return new FSharpMap.New(a);
  }
  serKVPs=(t=Serializer.serDup(s,s$1,s$2,s$3),Serializer.serSeq(t[0],t[1]));
  return[(f=function(s$4)
  {
   return Seq$1.map(m,s$4);
  },(g=serKVPs[0],function(x)
  {
   return g(f(x));
  })),(f$1=serKVPs[1],function(x)
  {
   return g$1(f$1(x));
  })];
 };
 Serializer.serDup=function(s,s$1,s$2,s$3)
 {
  var serFst,serSnd,g;
  function d(a)
  {
   return[serFst[1](null),serSnd[1](null)];
  }
  function f(os)
  {
   return[serFst[1](Arrays.get(os,0)),serSnd[1](Arrays.get(os,1))];
  }
  serFst=[s,s$1];
  serSnd=[s$2,s$3];
  return[function(t)
  {
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("["+Utils.toSafe($2)+", "+Utils.toSafe($3)+"]");
   }))(Global.id))(serFst[0](t[0])))(serSnd[0](t[1]));
  },(g=function(v)
  {
   return Serializer.ifUndefF(d,f,v);
  },function(x)
  {
   return g(Global.id(x));
  })];
 };
 Serializer.serOpt=function(s,s$1)
 {
  var ser,f,m,g,f$1,f$2;
  function g$1(o)
  {
   return o==null?"null":o.$0;
  }
  function d(a)
  {
   return null;
  }
  function g$2(a)
  {
   return{
    $:1,
    $0:a
   };
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
   return g$1(f(x));
  }),(g=(f$1=(f$2=ser[1],function(x)
  {
   return g$2(f$2(x));
  }),function(v)
  {
   return Serializer.ifUndefF(d,f$1,v);
  }),function(x)
  {
   return g(Global.id(x));
  })];
 };
 Serializer.serSet=function(s,s$1)
 {
  var ser,f,m,f$1,g,f$2,m$1;
  function d(a)
  {
   return[];
  }
  function g$1(a)
  {
   return new FSharpSet.New(a);
  }
  ser=[s,s$1];
  return[(f=(m=ser[0],function(s$2)
  {
   return new FSharpSet.New$1(BalancedTree.OfSeq(Seq$1.map(m,s$2)));
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),(f$1=(g=(f$2=(m$1=ser[1],function(s$2)
  {
   return Seq$1.map(m$1,s$2);
  }),function(v)
  {
   return Serializer.ifUndefF(d,f$2,v);
  }),function(x)
  {
   return g(Global.id(x));
  }),function(x)
  {
   return g$1(f$1(x));
  })];
 };
 Serializer.serLst=function(s,s$1)
 {
  var ser,f,m,f$1,g,f$2,m$1;
  function d(a)
  {
   return[];
  }
  ser=[s,s$1];
  return[(f=(m=ser[0],function(l)
  {
   return List.map(m,l);
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),(f$1=(g=(f$2=(m$1=ser[1],function(s$2)
  {
   return Seq$1.map(m$1,s$2);
  }),function(v)
  {
   return Serializer.ifUndefF(d,f$2,v);
  }),function(x)
  {
   return g(Global.id(x));
  }),function(x)
  {
   return List.ofSeq(f$1(x));
  })];
 };
 Serializer.serArr=function(s,s$1)
 {
  var ser,f,m,f$1,g,f$2,m$1;
  function d(a)
  {
   return[];
  }
  ser=[s,s$1];
  return[(f=(m=ser[0],function(a)
  {
   return Arrays.map(m,a);
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),(f$1=(g=(f$2=(m$1=ser[1],function(s$2)
  {
   return Seq$1.map(m$1,s$2);
  }),function(v)
  {
   return Serializer.ifUndefF(d,f$2,v);
  }),function(x)
  {
   return g(Global.id(x));
  }),function(x)
  {
   return Arrays.ofSeq(f$1(x));
  })];
 };
 Serializer.serSeq=function(s,s$1)
 {
  var ser,f,m,g,f$1,m$1;
  function d(a)
  {
   return[];
  }
  ser=[s,s$1];
  return[(f=(m=ser[0],function(s$2)
  {
   return Seq$1.map(m,s$2);
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),(g=(f$1=(m$1=ser[1],function(s$2)
  {
   return Seq$1.map(m$1,s$2);
  }),function(v)
  {
   return Serializer.ifUndefF(d,f$1,v);
  }),function(x)
  {
   return g(Global.id(x));
  })];
 };
 Serializer.serField=function(name,get,set,s,s$1)
 {
  return[name,function(x)
  {
   return s(get(x));
  },function(rc)
  {
   return function(o)
   {
    return set(s$1(o),rc);
   };
  }];
 };
 Serializer.serString=function()
 {
  SC$1.$cctor();
  return SC$1.serString;
 };
 Serializer.serBool=function()
 {
  SC$1.$cctor();
  return SC$1.serBool;
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
 Serializer.deserGuid=function()
 {
  SC$1.$cctor();
  return SC$1.deserGuid;
 };
 Serializer.Exists=function(field,o)
 {
  return!o[field]?null:{
   $:1,
   $0:o[field]
  };
 };
 Serializer.ifUndefF=function(def,f,v)
 {
  return!v?def(v):f(v);
 };
 Serializer.ifUndef=function(def,v)
 {
  return!v?def:v;
 };
 LoadFiles.LoadFilesAsync=function(files)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.For(files,function(a)
   {
    return Concurrency.Bind(LoadFiles.LoadFile(a),function()
    {
     return Concurrency.Return(null);
    });
   });
  });
 };
 LoadFiles.LoadFile=function(file)
 {
  var o,o$1,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,ref,b;
  function EndsWith(s,fn)
  {
   return Strings.EndsWith(fn,s)?{
    $:1,
    $0:null
   }:null;
  }
  function a($11,$12)
  {
   try
   {
    ref.onload=$11;
    self.document.head.appendChild(ref);
   }
   catch(e)
   {
    $12(e);
   }
  }
  o=(o$1=(($2=EndsWith(".js",file),$2!=null&&$2.$==1)?!self.document.querySelector("script[src='"+file+"']")||(($3=EndsWith(".fsx",file),$3!=null&&$3.$==1)?!self.document.querySelector("script[src='"+file+"']")||($4=EndsWith(".fs",file),$4!=null&&$4.$==1)&&!self.document.querySelector("script[src='"+file+"']"):($5=EndsWith(".fs",file),$5!=null&&$5.$==1)&&!self.document.querySelector("script[src='"+file+"']")):($6=EndsWith(".fsx",file),$6!=null&&$6.$==1)?!self.document.querySelector("script[src='"+file+"']")||($7=EndsWith(".fs",file),$7!=null&&$7.$==1)&&!self.document.querySelector("script[src='"+file+"']"):($8=EndsWith(".fs",file),$8!=null&&$8.$==1)&&!self.document.querySelector("script[src='"+file+"']"))?{
   $:1,
   $0:LoadFiles.createScript(file)
  }:($9=EndsWith(".css",file),$9!=null&&$9.$==1)?{
   $:1,
   $0:LoadFiles.createCss(file)
  }:($10=EndsWith(".html",file),$10!=null&&$10.$==1)?{
   $:1,
   $0:LoadFiles.createHtml(file)
  }:null,o$1==null?null:{
   $:1,
   $0:(ref=o$1.$0,Concurrency.FromContinuations(function($11,$12,$13)
   {
    return a.apply(null,[$11,$12,$13]);
   }))
  });
  return o==null?(b=null,Concurrency.Delay(function()
  {
   return Concurrency.Return(null);
  })):o.$0;
 };
 LoadFiles.createHtml=function(fn)
 {
  var fileRef;
  fileRef=self.document.createElement("link");
  fileRef.setAttribute("rel","import");
  fileRef.setAttribute("type","text/html");
  fileRef.setAttribute("href",fn);
  return fileRef;
 };
 LoadFiles.createCss=function(fn)
 {
  var fileRef;
  fileRef=self.document.createElement("link");
  fileRef.setAttribute("rel","stylesheet");
  fileRef.setAttribute("type","text/css");
  fileRef.setAttribute("href",fn);
  return fileRef;
 };
 LoadFiles.createScript=function(fn)
 {
  var fileRef;
  fileRef=self.document.createElement("script");
  fileRef.setAttribute("type","text/javascript");
  fileRef.setAttribute("src",fn);
  return fileRef;
 };
 REGEX.getEndWord=function(line,ch)
 {
  var a,t;
  a=LibraryJS.REGEX$1("^([a-zA-Z_]\\w*)","g",line.substring(ch));
  return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):"":"";
 };
 REGEX.getStartWord=function(line,ch)
 {
  var a,t;
  a=LibraryJS.REGEX$1("([a-zA-Z_]\\w*)$","g",Strings.Substring(line,0,ch));
  return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):"":"";
 };
 Hoverable$1=Hoverable.Hoverable=Runtime.Class({
  Content:function(e)
  {
   return e.on("mouseenter",function()
   {
    return DomUtility.AddClass(e.elt,"hovering");
   }).on("mouseleave",function()
   {
    return DomUtility.RemoveClass(e.elt,"hovering");
   });
  },
  Content$1:function(ds)
  {
   return Doc.Element("div",this.get_Attributes(),ds);
  },
  get_Attributes:function()
  {
   var $this,view;
   $this=this;
   return List.ofArray([(view=View$1.Const("hovering"),AttrModule.DynamicPred("class",this.hover.get_View(),view)),AttrProxy.HandlerImpl("mouseenter",function()
   {
    return function()
    {
     return $this.hover.Set(true);
    };
   }),AttrProxy.HandlerImpl("mouseleave",function()
   {
    return function()
    {
     return $this.hover.Set(false);
    };
   })]);
  }
 },null,Hoverable$1);
 Hoverable$1.get_Demo=function()
 {
  return Hoverable$1.New$1().Content(Doc.Element("div",[AttrProxy.Create("style","flex-flow: column;")],[Doc.TextNode("Hover over me!")]));
 };
 Hoverable$1.Content$2094$81=Runtime.Curried3(function(e,$1,$2)
 {
  return DomUtility.RemoveClass(e.elt,"hovering");
 });
 Hoverable$1.get_Attributes$2090$69=Runtime.Curried3(function(_this,$1,$2)
 {
  return _this.hover.Set(false);
 });
 Hoverable$1.get_Attributes$2089$69=Runtime.Curried3(function(_this,$1,$2)
 {
  return _this.hover.Set(true);
 });
 Hoverable$1.New$1=function()
 {
  return Hoverable$1.New(Var$1.Create$1(false));
 };
 Hoverable$1.New=function(hover)
 {
  return new Hoverable$1({
   hover:hover
  });
 };
 Hoverable.hoverable=function(e)
 {
  return Hoverable$1.New$1().Content(e);
 };
 ResizeObserver.addResizeObserver=function(f,el)
 {
  var r,ro,changed,b;
  try
  {
   r=!(!Global.ResizeObserver);
  }
  catch(e)
  {
   r=false;
  }
  if(r)
   {
    ro=new Global.ResizeObserver(f);
    ResizeObserver.set_observers(new List.T({
     $:1,
     $0:ro,
     $1:ResizeObserver.observers()
    }));
    ro.observe(el);
   }
  else
   {
    changed=ResizeObserver.dimsChanged(el);
    Concurrency.Start((b=null,Concurrency.Delay(function()
    {
     return Concurrency.While(function()
     {
      return el.isConnected;
     },Concurrency.Delay(function()
     {
      return Concurrency.Bind(Concurrency.Sleep(110),function()
      {
       return changed()?(f(),Concurrency.Zero()):Concurrency.Zero();
      });
     }));
    })),null);
   }
 };
 ResizeObserver.dimsChanged=function(el)
 {
  var dims;
  dims=[el.getBoundingClientRect()];
  return function()
  {
   var ndims;
   ndims=el.getBoundingClientRect();
   return Unchecked.Equals(ResizeObserver.domRect2Tuple(dims[0]),ResizeObserver.domRect2Tuple(ndims))?false:(dims[0]=ndims,true);
  };
 };
 ResizeObserver.domRect2Tuple=function(r)
 {
  return[r.top,r.left,r.width,r.height];
 };
 ResizeObserver.observers=function()
 {
  SC$1.$cctor();
  return SC$1.observers;
 };
 ResizeObserver.set_observers=function($1)
 {
  SC$1.$cctor();
  SC$1.observers=$1;
 };
 WcTabStripT=WcTabStrip.WcTabStripT=Runtime.Class({
  connectedCallback:function()
  {
   var $this,el,shadowRoot,elsh;
   function addTab()
   {
    var a,top,tabs;
    top=!el.hasAttribute("bottom");
    tabs=List.ofSeq(Seq$1.delay(function()
    {
     return Seq$1.collect(function(i)
     {
      var node;
      node=el.childNodes[i-1];
      return Unchecked.Equals(node.nodeType,Node$1.ELEMENT_NODE)?[[node.hasAttribute("tabname")?node.getAttribute("tabname"):(function($1)
      {
       return function($2)
       {
        return $1("Tab "+Global.String($2));
       };
      }(Global.id))(i),node]]:[];
     },Operators$4.range(1,el.childNodes.length));
    }));
    while(elsh.childNodes.length>0)
     elsh.removeChild(elsh.lastChild);
    a=WcTabStrip.tabStrip($this.selected,top,true,tabs,Doc.Element("slot",List.T.Empty,List.T.Empty));
    Templates.LoadLocalTemplates("");
    Doc.Run(elsh,a);
   }
   $this=this;
   !this.added?(el=this,shadowRoot=el.attachShadow({
    mode:"open"
   }),elsh=self.document.createElement("div"),shadowRoot.appendChild(elsh),addTab(),el.addEventListener("DOMSubtreeModified",Library.delayed(50,addTab)),this.added=true):void 0;
  }
 },Obj,WcTabStripT);
 WcTabStripT.Constructor=function()
 {
  var _this,r;
  _this=(r=Reflect.construct(self.HTMLElement,[],this.__proto__.constructor),r);
  self.FsRoot.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New.call(_this);
  return _this;
 };
 WcTabStripT.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.added=false;
  this.selected=Var$1.Create$1(1);
  (function($1)
  {
   return $1("WcTabStripT initializer");
  }(function(s)
  {
   console.log(s);
  }));
 },WcTabStripT);
 WcTabStrip.init=function()
 {
  SC$1.$cctor();
  return SC$1.init;
 };
 WcTabStrip.tabStrip$2233$64=function(i,selected)
 {
  return function()
  {
   return function()
   {
    return selected.Set(i+1);
   };
  };
 };
 WcTabStrip.tabStrip=function(selected,top,horizontal,tabs,content)
 {
  var strip;
  strip=Doc.Element("div",[AttrProxy.Create("class",(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("tab-strip "+Utils.toSafe($2)+" "+Utils.toSafe($3));
  }))(Global.id))(top?"top":"bottom"))(horizontal?"horizontal":"vertical"))],List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.collect(function(m)
   {
    var i;
    i=m[0];
    return[Hoverable$1.New$1().Content(Doc.Element("div",[AttrModule.Dynamic("class",View$1.Map(function(sel)
    {
     return"tab"+(sel===i+1?" selected":"");
    },selected.get_View())),AttrProxy.Create("draggable","true"),AttrProxy.HandlerImpl("click",function()
    {
     return function()
     {
      return selected.Set(i+1);
     };
    })],[Doc.TextNode(m[1][0])]))];
   },Seq$1.indexed(tabs));
  })));
  return Doc.Element("div",[AttrProxy.Create("class","tab-panel")],List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(top?[strip]:[],Seq$1.delay(function()
   {
    return Seq$1.append([Doc.Element("div",[AttrProxy.Create("class","tab-content")],[content])],Seq$1.delay(function()
    {
     return Seq$1.append(!top?[strip]:[],Seq$1.delay(function()
     {
      return Seq$1.append([Doc.Element("style",List.T.Empty,List.ofArray([Doc.TextNode(WcTabStrip.css())]))],Seq$1.delay(function()
      {
       return[Doc.Element("style",List.T.Empty,List.ofArray([Doc.TextView(View$1.Map(function($1)
       {
        return function($2)
        {
         return $1("\r\n                                              ::slotted(*              ) { display: none }\r\n                                              ::slotted(*:nth-child("+Global.String($2)+")) { display: grid }\r\n                                           ");
        };
       }(Global.id),selected.get_View()))]))];
      }));
     }));
    }));
   }));
  })));
 };
 WcTabStrip.css=function()
 {
  SC$1.$cctor();
  return SC$1.css;
 };
 WcSplitterT=WcSplitter.WcSplitterT=Runtime.Class({
  connectedCallback:function()
  {
   var el,shadowRoot,elsh,minV,maxV,value,first,vertical,size,padding,gap,dragging,startP,start,domElem,a;
   function sizeCalc(sh)
   {
    var p,pt,pb,r;
    p=vertical?["padding-left","padding-right","grid-column-gap"]:["padding-top","padding-bottom","grid-row-gap"];
    pt=Global.parseFloat("0"+Global.jQuery(sh.parentElement.parentElement).css(p[0]));
    pb=Global.parseFloat("0"+Global.jQuery(sh.parentElement.parentElement).css(p[1]));
    gap.Set(Global.parseFloat("0"+Global.jQuery(sh.parentElement.parentElement).css(p[2])));
    padding[0]=pt+pb;
    r=el.getBoundingClientRect();
    return vertical?first?[r.width,r.height]:[-r.width,r.height]:first?[r.height,r.width]:[-r.height,r.width];
   }
   function mouseCoord(ev)
   {
    return vertical?ev.clientX:ev.clientY;
   }
   function drag(ev)
   {
    var v,b;
    v=(mouseCoord(ev)-start[0])*100/size[0][0]+startP[0];
    value.Set((b=Unchecked.Compare(minV,v)===1?minV:v,Unchecked.Compare(maxV,b)===-1?maxV:b));
   }
   function finishDragging()
   {
    if(dragging[0])
     {
      dragging[0]=false;
      self.removeEventListener("mousemove",drag,false);
      self.removeEventListener("mouseup",finishDragging,false);
     }
   }
   function startDragging(ev)
   {
    var o,o$1;
    if(!dragging[0])
     {
      dragging[0]=true;
      startP[0]=value.Get();
      start[0]=mouseCoord(ev);
      size[0]=(o=(o$1=domElem[0],o$1==null?null:{
       $:1,
       $0:sizeCalc(o$1.$0)
      }),o==null?[100,500]:o.$0);
      self.addEventListener("mousemove",drag,false);
      self.addEventListener("mouseup",finishDragging,false);
      ev.preventDefault();
     }
   }
   function partSizes(sz,gap$1,pad,spl)
   {
    return[(sz-gap$1-pad)*spl/100,(sz-gap$1-pad)*(100-spl)/100];
   }
   function styleSections(p1,p2)
   {
    return(((((Runtime.Curried(function($1,$2,$3,$4,$5)
    {
     return $1(" "+$2.toFixed(2)+"px "+$3.toFixed(2)+"px ; "+Utils.toSafe($4)+" : "+$5.toFixed(2)+"px; ");
    },5))(Global.id))(p1))(p2))(vertical?"height":"width"))(size[0][1]);
   }
   function recalc()
   {
    var o;
    o=domElem[0];
    o==null?void 0:size[0]=sizeCalc(o.$0);
    value.Set(value.Get());
   }
   if(!this.added)
    {
     el=this;
     shadowRoot=el.attachShadow({
      mode:"open"
     });
     elsh=self.document.createElement("div");
     minV=el.hasAttribute("min")?Global.parseFloat(el.getAttribute("min")):4;
     maxV=el.hasAttribute("max")?Global.parseFloat(el.getAttribute("max")):96;
     value=Var$1.Create$1(el.hasAttribute("value")?Global.parseFloat(el.getAttribute("value")):50);
     first=!el.hasAttribute("second");
     vertical=el.hasAttribute("vertical");
     size=[[0,0]];
     padding=[0];
     gap=Var$1.Create$1(0);
     dragging=[false];
     startP=[0];
     start=[0];
     domElem=[null];
     a=(((((vertical?WcSplitter.layoutVertical():WcSplitter.layoutHorizontal())(View$1.Map(function(spl)
     {
      var x;
      x=partSizes(size[0][0],gap.Get(),padding[0],spl);
      return styleSections.apply(null,x);
     },value.get_View())))(function()
     {
      ResizeObserver.addResizeObserver(recalc,el);
      recalc();
     }))(function(sp)
     {
      domElem[0]={
       $:1,
       $0:sp
      };
      recalc();
     }))(function(me)
     {
      startDragging(me);
     }))(View$1.Map(function($1)
     {
      return function($2)
      {
       return $1(Utils.prettyPrint($2)+"px");
      };
     }(Global.id),gap.get_View()));
     Templates.LoadLocalTemplates("");
     Doc.Run(elsh,a);
     shadowRoot.appendChild(elsh.firstChild);
     this.added=true;
    }
  }
 },Obj,WcSplitterT);
 WcSplitterT.Constructor=function()
 {
  var _this,r;
  _this=(r=Reflect.construct(self.HTMLElement,[],this.__proto__.constructor),r);
  self.FsRoot.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New.call(_this);
  return _this;
 };
 WcSplitterT.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.added=false;
  (function($1)
  {
   return $1("WcSplitterT initializer");
  }(function(s)
  {
   console.log(s);
  }));
 },WcSplitterT);
 WcSplitter.init=function(layoutH,layoutV)
 {
  var _nm,_c;
  WcSplitter.set_layoutHorizontal(layoutH);
  WcSplitter.set_layoutVertical(layoutV);
  _nm="wcomp-splitter";
  _c=self.FsRoot.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New;
  console.log("defineWebComponent: "+_nm);
  Object.setPrototypeOf(_c.prototype,self.HTMLElement.prototype);
  Object.setPrototypeOf(_c,self.HTMLElement);
  Object.setPrototypeOf(WcSplitterT.Constructor.prototype,_c.prototype);
  self.customElements.define(_nm,WcSplitterT.Constructor);
 };
 WcSplitter.layoutVertical=function()
 {
  SC$1.$cctor();
  return SC$1.layoutVertical;
 };
 WcSplitter.set_layoutVertical=function($1)
 {
  SC$1.$cctor();
  SC$1.layoutVertical=$1;
 };
 WcSplitter.layoutHorizontal=function()
 {
  SC$1.$cctor();
  return SC$1.layoutHorizontal;
 };
 WcSplitter.set_layoutHorizontal=function($1)
 {
  SC$1.$cctor();
  SC$1.layoutHorizontal=$1;
 };
 Position.New=function(column,lineNumber)
 {
  return{
   column:column,
   lineNumber:lineNumber
  };
 };
 Range.New=function(startColumn,endColumn,startLineNumber,endLineNumber)
 {
  return{
   startColumn:startColumn,
   endColumn:endColumn,
   startLineNumber:startLineNumber,
   endLineNumber:endLineNumber
  };
 };
 Uri.New=function(authority,fragment,fsPath,path,query,scheme)
 {
  return{
   authority:authority,
   fragment:fragment,
   fsPath:fsPath,
   path:path,
   query:query,
   scheme:scheme
  };
 };
 Location.New=function(range,uri)
 {
  return{
   range:range,
   uri:uri
  };
 };
 FindMatch.New=function(matches,range)
 {
  return{
   matches:matches,
   range:range
  };
 };
 WordAtPosition.New=function(endColumn,startColumn,word)
 {
  return{
   endColumn:endColumn,
   startColumn:startColumn,
   word:word
  };
 };
 Model.New=function(uri)
 {
  return{
   uri:uri
  };
 };
 MarkDownString.New=function(value,isTrusted)
 {
  return{
   value:value,
   isTrusted:isTrusted
  };
 };
 MarkerData.New=function(startColumn,endColumn,startLineNumber,endLineNumber,severity,message)
 {
  return{
   startColumn:startColumn,
   endColumn:endColumn,
   startLineNumber:startLineNumber,
   endLineNumber:endLineNumber,
   severity:severity,
   message:message
  };
 };
 CompletionItem.New=function(kind,label,detail)
 {
  return{
   kind:kind,
   label:label,
   detail:detail
  };
 };
 Hover.New=function(contents,range)
 {
  return{
   contents:contents,
   range:range
  };
 };
 Editor=Monaco.Editor=Runtime.Class({},Obj,Editor);
 Editor.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Editor);
 MonacoConfig.New=function(_var,onChange,onRender,editorO,disabled,options,overrides)
 {
  return{
   "var":_var,
   onChange:onChange,
   onRender:onRender,
   editorO:editorO,
   disabled:disabled,
   options:options,
   overrides:overrides
  };
 };
 Monaco.newVarO=function(v)
 {
  var x;
  x=Monaco.newVar(Var$1.Lens(v,function(o)
  {
   return o==null?"":o.$0;
  },function(sO,s)
  {
   return sO==null?null:{
    $:1,
    $0:s
   };
  }));
  return Monaco.disabled(View$1.Map(function($1)
  {
   return $1==null;
  },v.get_View()),x);
 };
 Monaco.newText=function(v)
 {
  return Monaco.newVar(Var$1.Create$1(v));
 };
 Monaco["var"]=function(monc)
 {
  return monc["var"];
 };
 Monaco.disabled=function(dis,monc)
 {
  return MonacoConfig.New(monc["var"],monc.onChange,monc.onRender,monc.editorO,dis,monc.options,monc.overrides);
 };
 Monaco.onRender=function(f,monc)
 {
  return MonacoConfig.New(monc["var"],monc.onChange,{
   $:1,
   $0:f
  },monc.editorO,monc.disabled,monc.options,monc.overrides);
 };
 Monaco.onChange=function(f,monc)
 {
  return MonacoConfig.New(monc["var"],f,monc.onRender,monc.editorO,monc.disabled,monc.options,monc.overrides);
 };
 Monaco.setVar=function(v,monc)
 {
  return MonacoConfig.New(v,monc.onChange,monc.onRender,monc.editorO,monc.disabled,monc.options,monc.overrides);
 };
 Monaco.render$2576$42=function(monc)
 {
  return function(elchild)
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Monaco.loader(),function()
    {
     var editor,_elt,o;
     editor=(_elt=elchild.parentElement,self.monaco.editor.create(_elt,monc.options,monc.overrides));
     ResizeObserver.addResizeObserver(function()
     {
      editor.layout();
     },elchild.parentElement);
     elchild.parentNode.removeChild(elchild);
     monc.editorO={
      $:1,
      $0:editor
     };
     o=monc.onRender;
     o==null?void 0:o.$0(editor);
     LibraryJS.bindVarEditor(function(a)
     {
      editor.onDidChangeModelContent(a);
     },function()
     {
      return editor.getValue();
     },function(a)
     {
      editor.setValue(a);
     },monc.onChange,monc["var"]);
     return Concurrency.Zero();
    });
   })),null);
  };
 };
 Monaco.render=function(monc)
 {
  return Doc.Element("div",[AttrProxy.OnAfterRenderImpl(function(elchild)
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Monaco.loader(),function()
    {
     var editor,_elt,o;
     editor=(_elt=elchild.parentElement,self.monaco.editor.create(_elt,monc.options,monc.overrides));
     ResizeObserver.addResizeObserver(function()
     {
      editor.layout();
     },elchild.parentElement);
     elchild.parentNode.removeChild(elchild);
     monc.editorO={
      $:1,
      $0:editor
     };
     o=monc.onRender;
     o==null?void 0:o.$0(editor);
     LibraryJS.bindVarEditor(function(a)
     {
      editor.onDidChangeModelContent(a);
     },function()
     {
      return editor.getValue();
     },function(a)
     {
      editor.setValue(a);
     },monc.onChange,monc["var"]);
     return Concurrency.Zero();
    });
   })),null);
  })],[]);
 };
 Monaco.loader=function()
 {
  SC$1.$cctor();
  return SC$1.loader;
 };
 Monaco.includes=function()
 {
  SC$1.$cctor();
  return SC$1.includes;
 };
 Monaco.newVar=function(_var)
 {
  return MonacoConfig.New(_var,Global.ignore,null,null,View$1.Const(false),null,null);
 };
 PlugInVar.New=function(varName,varVar)
 {
  return{
   varName:varName,
   varVar:varVar
  };
 };
 PlugInView.New=function(viwName,viwView)
 {
  return{
   viwName:viwName,
   viwView:viwView
  };
 };
 PlugInDoc.New=function(docName,docDoc)
 {
  return{
   docName:docName,
   docDoc:docDoc
  };
 };
 PlugInAction.New=function(actName,actFunction,actEnabled)
 {
  return{
   actName:actName,
   actFunction:actFunction,
   actEnabled:actEnabled
  };
 };
 PlugInQuery.New=function(qryName,qryFunction)
 {
  return{
   qryName:qryName,
   qryFunction:qryFunction
  };
 };
 PlugIn.New=function(plgName,plgVars,plgViews,plgDocs,plgActions,plgQueries)
 {
  return{
   plgName:plgName,
   plgVars:plgVars,
   plgViews:plgViews,
   plgDocs:plgDocs,
   plgActions:plgActions,
   plgQueries:plgQueries
  };
 };
 AppFramework.getMainDoc=function()
 {
  SC$1.$cctor();
  return SC$1.getMainDoc;
 };
 AppFramework.qryDocs=function()
 {
  SC$1.$cctor();
  return SC$1.qryDocs;
 };
 AppFramework.actHello=function()
 {
  SC$1.$cctor();
  return SC$1.actHello;
 };
 AppFramework.tryGetWoW=function(plgName,viwName)
 {
  var o,o$1,o$2;
  o=(o$1=AppFramework.tryGetViw(plgName,viwName),o$1==null?null:{
   $:1,
   $0:{
    $:1,
    $0:o$1.$0.viwView
   }
  });
  return o==null?(o$2=AppFramework.tryGetVar(plgName,viwName),o$2==null?null:{
   $:1,
   $0:o$2.$0.varVar.get_View()
  }):o.$0;
 };
 AppFramework.tryGetVoV=function(plgName,varName)
 {
  var o,o$1,o$2;
  o=(o$1=AppFramework.tryGetVar(plgName,varName),o$1==null?null:{
   $:1,
   $0:{
    $:1,
    $0:o$1.$0.varVar
   }
  });
  return o==null?(o$2=AppFramework.tryGetViw(plgName,varName),o$2==null?null:{
   $:1,
   $0:new FromView.New(o$2.$0.viwView,Global.ignore)
  }):o.$0;
 };
 AppFramework.tryGetDoc=function(plgName,docName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:Arrays.tryFind(function(doc)
  {
   return doc.docName===docName;
  },o.$0.plgDocs);
 };
 AppFramework.tryGetAct=function(plgName,actName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:Arrays.tryFind(function(act)
  {
   return act.actName===actName;
  },o.$0.plgActions);
 };
 AppFramework.tryGetViw=function(plgName,viwName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:Arrays.tryFind(function(viw)
  {
   return viw.viwName===viwName;
  },o.$0.plgViews);
 };
 AppFramework.tryGetVar=function(plgName,varName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:Arrays.tryFind(function(_var)
  {
   return _var.varName===varName;
  },o.$0.plgVars);
 };
 AppFramework.tryGetPlugIn=function(plgName)
 {
  return AppFramework.plugIns().TryFindByKey(plgName);
 };
 AppFramework.newDocF=function(name,docF)
 {
  return PlugInDoc.New(name,docF);
 };
 AppFramework.newActF=function(name,fncF)
 {
  return PlugInAction.New(name,fncF,View$1.Const(true));
 };
 AppFramework.newAct=function(name,fnc)
 {
  return PlugInAction.New(name,{
   $:0,
   $0:fnc
  },View$1.Const(true));
 };
 AppFramework.newQry=function(name,qry)
 {
  return PlugInQuery.New(name,qry);
 };
 AppFramework.newDoc=function(name,doc)
 {
  return PlugInDoc.New(name,{
   $:0,
   $0:doc
  });
 };
 AppFramework.newViw=function(name,viw)
 {
  return PlugInView.New(name,viw);
 };
 AppFramework.newVar=function(name,_var)
 {
  return PlugInVar.New(name,_var);
 };
 AppFramework.vertical$2805$39=function(mouseDown)
 {
  return function(te)
  {
   mouseDown(te.Event);
  };
 };
 AppFramework.vertical$2804$39=Global.id;
 AppFramework.vertical$2803$39=Global.id;
 AppFramework.vertical=function(partSizes,afterRender,afterRenderSp,mouseDown,gap)
 {
  var b,t,p,i;
  return(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"partsizes",
   $1:partSizes
  }).WithHole({
   $:7,
   $0:"afterrender",
   $1:afterRender
  }).WithHole({
   $:7,
   $0:"afterrendersp",
   $1:afterRenderSp
  }),t.WithHole(Handler$1.EventQ2(t.k,"mousedown",function()
  {
   return t.i;
  },function(te)
  {
   mouseDown(te.Event);
  }))).WithHole({
   $:2,
   $0:"gap",
   $1:gap
  }),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.wcompsplitterver(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFramework.horizontal$2797$39=function(mouseDown)
 {
  return function(te)
  {
   mouseDown(te.Event);
  };
 };
 AppFramework.horizontal$2796$39=Global.id;
 AppFramework.horizontal$2795$39=Global.id;
 AppFramework.horizontal=function(partSizes,afterRender,afterRenderSp,mouseDown,gap)
 {
  var b,t,p,i;
  return(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"partsizes",
   $1:partSizes
  }).WithHole({
   $:7,
   $0:"afterrender",
   $1:afterRender
  }).WithHole({
   $:7,
   $0:"afterrendersp",
   $1:afterRenderSp
  }),t.WithHole(Handler$1.EventQ2(t.k,"mousedown",function()
  {
   return t.i;
  },function(te)
  {
   mouseDown(te.Event);
  }))).WithHole({
   $:2,
   $0:"gap",
   $1:gap
  }),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.wcompsplitterhor(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFramework.mainDoc$2786$42=function()
 {
  return function()
  {
   AppFramework.mainDocV().Set("AppFramework.AppFwkClient");
  };
 };
 AppFramework.mainDoc=function()
 {
  var b,M,t,M$1,p,i;
  return(b=(M=AppFramework.getMainClientDoc(),(t=(M$1=AppFramework.mainDocV().get_View(),ProviderBuilder.Make().WithHole({
   $:2,
   $0:"maindoc",
   $1:M$1
  })),t.WithHole(Handler$1.EventQ2(t.k,"goclient",function()
  {
   return t.i;
  },function()
  {
   AppFramework.mainDocV().Set("AppFramework.AppFwkClient");
  }))).WithHole({
   $:0,
   $0:"mainclient",
   $1:M
  })),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.appframework(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFramework.getMainClientDoc=function()
 {
  var x;
  return Doc.EmbedView((x=AppFramework.plugIns().v,View$1.Map2(function(mainDoc,plgs)
  {
   var x$1,v;
   x$1=Seq$1.tryPick(function(plg)
   {
    var o;
    o=Seq$1.tryFind(function(doc)
    {
     return plg.plgName+"."+doc.docName===mainDoc;
    },plg.plgDocs);
    return o==null?null:{
     $:1,
     $0:AppFramework.getLazyDoc(o.$0)
    };
   },plgs);
   v=AppFramework.AppFwkClient().f();
   return x$1==null?v:x$1.$0;
  },AppFramework.mainDocV().get_View(),x)));
 };
 AppFramework.getLazyDoc=function(doc)
 {
  var m;
  m=doc.docDoc;
  return m.$==0?m.$0.f():Doc.Element("div",[],[Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1("Doc with parameters not allowed here: "+GeneratedPrintf.p($2));
   };
  }(Global.id))(doc))]);
 };
 AppFramework.AppFwkClient=function()
 {
  SC$1.$cctor();
  return SC$1.AppFwkClient;
 };
 AppFramework.renderQueries$2752$39=function(qry)
 {
  return function()
  {
   Global.alert(qry.qryFunction(null));
  };
 };
 AppFramework.renderQueries=function()
 {
  function a(plg,qry)
  {
   return[plg.plgName,qry.qryName];
  }
  function a$1(plg,qry)
  {
   var b,t,p,i;
   return(b=(t=ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:qry.qryName
   }),t.WithHole(Handler$1.EventQ2(t.k,"select",function()
   {
    return t.i;
   },function()
   {
    Global.alert(qry.qryFunction(null));
   }))),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
  }
  return Doc.ConvertBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return a$1($1[0],$1[1]);
  },View$1.Map(function(plg)
  {
   return Seq$1.map(function(v)
   {
    return[plg,v];
   },plg.plgQueries);
  },AppFramework.currentPlugInW()));
 };
 AppFramework.renderActions$2741$51=function(act)
 {
  return function(ev)
  {
   AppFramework.callFunction(ev,null,act.actFunction);
  };
 };
 AppFramework.renderActions$2737$51=function(act)
 {
  return function(ev)
  {
   AppFramework.callFunction(ev,null,act.actFunction);
  };
 };
 AppFramework.renderActions=function()
 {
  function a(plg,act)
  {
   return[plg.plgName,act.actName];
  }
  function a$1(plg,act)
  {
   var parms,m,x,x$1;
   parms=(m=act.actFunction,m.$==1?(x=Strings.concat(", ",List.ofArray([m.$1])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x)):m.$==2?(x$1=Strings.concat(", ",List.ofArray([m.$1,m.$2])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x$1)):"");
   return Doc.EmbedView(View$1.Map(function(a$2)
   {
    var b,t,p,i,b$1,t$1,p$1,i$1;
    return a$2?(b=(t=ProviderBuilder.Make().WithHole({
     $:1,
     $0:"name",
     $1:act.actName+parms
    }),t.WithHole(Handler$1.EventQ2(t.k,"click",function()
    {
     return t.i;
    },function(ev)
    {
     AppFramework.callFunction(ev,null,act.actFunction);
    }))),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.action(p[0])),(b.i=i,i)))).get_Doc():(b$1=(t$1=ProviderBuilder.Make().WithHole({
     $:1,
     $0:"name",
     $1:act.actName
    }),t$1.WithHole(Handler$1.EventQ2(t$1.k,"click",function()
    {
     return t$1.i;
    },function(ev)
    {
     AppFramework.callFunction(ev,null,act.actFunction);
    }))),(p$1=Handler$1.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],FSharpStation_Templates.actiondisabled(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
   },act.actEnabled));
  }
  return Doc.ConvertBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return a$1($1[0],$1[1]);
  },View$1.Map(function(plg)
  {
   return Seq$1.map(function(v)
   {
    return[plg,v];
   },plg.plgActions);
  },AppFramework.currentPlugInW()));
 };
 AppFramework.callFunction=function(p1,p2,actF)
 {
  if(actF.$==1)
   actF.$0(p1);
  else
   if(actF.$==2)
    (actF.$0(p1))(p2);
   else
    actF.$0();
 };
 AppFramework.renderDocs$2715$39=function(doc)
 {
  return function()
  {
   View$1.Get(function(plg)
   {
    AppFramework.mainDocV().Set(plg.plgName+"."+doc.docName);
   },AppFramework.currentPlugInW());
  };
 };
 AppFramework.renderDocs=function()
 {
  function a(plg,doc)
  {
   return[plg.plgName,doc.docName];
  }
  function a$1(plg,doc)
  {
   var b,t,N,m,x,x$1,x$2,x$3,x$4,p,i;
   return(b=(t=(N=doc.docName+(m=doc.docDoc,m.$==1?(x=Strings.concat(", ",List.ofArray([m.$1])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x)):m.$==2?(x$1=Strings.concat(", ",List.ofArray([m.$1,m.$2])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x$1)):m.$==3?(x$2=Strings.concat(", ",List.ofArray([m.$1,m.$2,m.$3])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x$2)):m.$==4?(x$3=Strings.concat(", ",List.ofArray([m.$1,m.$2,m.$3,m.$4])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x$3)):m.$==5?(x$4=Strings.concat(", ",List.ofArray([m.$1,m.$2,m.$3,m.$4,m.$5])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x$4)):""),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })),t.WithHole(Handler$1.EventQ2(t.k,"select",function()
   {
    return t.i;
   },function()
   {
    View$1.Get(function(plg$1)
    {
     AppFramework.mainDocV().Set(plg$1.plgName+"."+doc.docName);
    },AppFramework.currentPlugInW());
   }))),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
  }
  return Doc.ConvertBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return a$1($1[0],$1[1]);
  },View$1.Map(function(plg)
  {
   return Seq$1.map(function(v)
   {
    return[plg,v];
   },plg.plgDocs);
  },AppFramework.currentPlugInW()));
 };
 AppFramework.renderViews=function()
 {
  function a(plg,viw)
  {
   return[plg.plgName,viw.viwName];
  }
  function a$1(plg,viw)
  {
   var b,p,i;
   return(b=ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:viw.viwName
   }).WithHole({
    $:2,
    $0:"value",
    $1:viw.viwView
   }),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.namevalue(p[0])),(b.i=i,i)))).get_Doc();
  }
  return Doc.ConvertBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return a$1($1[0],$1[1]);
  },View$1.Map(function(plg)
  {
   return Seq$1.map(function(v)
   {
    return[plg,v];
   },plg.plgViews);
  },AppFramework.currentPlugInW()));
 };
 AppFramework.renderVars=function()
 {
  function a(plg,_var)
  {
   return[plg.plgName,_var.varName];
  }
  function a$1(plg,_var)
  {
   var b,p,i;
   return(b=ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:_var.varName
   }).WithHole({
    $:8,
    $0:"value",
    $1:_var.varVar
   }),(p=Handler$1.CompleteHoles(b.k,b.h,[["value",0]]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.namevalueinput(p[0])),(b.i=i,i)))).get_Doc();
  }
  return Doc.ConvertBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return a$1($1[0],$1[1]);
  },View$1.Map(function(plg)
  {
   return Seq$1.map(function(v)
   {
    return[plg,v];
   },plg.plgVars);
  },AppFramework.currentPlugInW()));
 };
 AppFramework.renderPlugIns$2677$35=function(name)
 {
  return function()
  {
   AppFramework.selectionPlugInO().Set({
    $:1,
    $0:name
   });
  };
 };
 AppFramework.renderPlugIns=function()
 {
  return Doc.Flatten(AppFramework.plugIns().MapLens(function($1)
  {
   var b,t,p,i;
   return(b=(t=ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:$1
   }),t.WithHole(Handler$1.EventQ2(t.k,"select",function()
   {
    return t.i;
   },function()
   {
    AppFramework.selectionPlugInO().Set({
     $:1,
     $0:$1
    });
   }))).WithHole({
    $:2,
    $0:"selected",
    $1:View$1.Map(function($2)
    {
     return Unchecked.Equals($2,{
      $:1,
      $0:$1
     })?"selected":"";
    },AppFramework.selectionPlugInO().get_View())
   }),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
  }));
 };
 AppFramework.currentPlugInV=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInV;
 };
 AppFramework.currentPlugInW=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInW;
 };
 AppFramework.selectionPlugInO=function()
 {
  SC$1.$cctor();
  return SC$1.selectionPlugInO;
 };
 AppFramework.defaultPlugIn=function()
 {
  SC$1.$cctor();
  return SC$1.defaultPlugIn;
 };
 AppFramework.TemplateFileName=function()
 {
  SC$1.$cctor();
  return SC$1.TemplateFileName;
 };
 AppFramework.mainDocV=function()
 {
  SC$1.$cctor();
  return SC$1.mainDocV;
 };
 AppFramework.plugIns=function()
 {
  SC$1.$cctor();
  return SC$1.plugIns;
 };
 LayoutEngine.New=function(lytName,lytDefinition)
 {
  return{
   lytName:lytName,
   lytDefinition:lytDefinition
  };
 };
 LayoutEngineModule.addNewLayout=function(name,layout)
 {
  var x,x$1;
  LayoutEngineModule.addLayout((x=(x$1=!Unchecked.Equals(layout,null)?layout:"\r\n            split horizontal 0-50-100 AppFramework.AppFwkClient Hello\r\n            Hello h1 \"color:blue; class=btn-primary\" \"How are you today?\" Ask\r\n            Ask Doc InputLabel \"placeholder=Type you answer here...\" \"Answer:\" AppFramework.mainDocV  \r\n            ",(String.unindentStr())(x$1)),LayoutEngineModule.newLyt(!Unchecked.Equals(layout,null)?name:"Lyt_"+Strings.Replace(Global.String(Guid.NewGuid()),"-",""),x)));
 };
 LayoutEngineModule.newLyt=function(name,lyt)
 {
  return LayoutEngine.New(name,Var$1.Create$1(lyt));
 };
 LayoutEngineModule.addLayout=function(lyt)
 {
  View$1.Sink(function(txt)
  {
   AppFramework.plugIns().Append(PlugIn.New(lyt.lytName,[AppFramework.newVar("Layout",lyt.lytDefinition)],[],Arrays.ofSeq(Seq$1.delay(function()
   {
    return Seq$1.append(LayoutEngineModule.createDocs(lyt.lytName,txt),Seq$1.delay(function()
    {
     var l;
     return Seq$1.append([AppFramework.newDocF("InputFile",{
      $:4,
      $0:(l=lyt.lytName,Runtime.Curried(LayoutEngineModule.inputFile,4,[l])),
      $1:"attrs",
      $2:"Label",
      $3:"Action",
      $4:"[Doc]"
     })],Seq$1.delay(function()
     {
      var l$1;
      return Seq$1.append([AppFramework.newDocF("InputLabel",{
       $:3,
       $0:(l$1=lyt.lytName,Runtime.Curried(LayoutEngineModule.inputLabel,3,[l$1])),
       $1:"attrs",
       $2:"Label",
       $3:"Var"
      })],Seq$1.delay(function()
      {
       return[AppFramework.newDocF("none",{
        $:1,
        $0:LayoutEngineModule.none,
        $1:"x"
       })];
      }));
     }));
    }));
   })),[],[]));
   AppFramework.mainDocV().Set(AppFramework.mainDocV().Get());
  },lyt.lytDefinition.get_View());
 };
 LayoutEngineModule.none=function(x)
 {
  return Doc.Element("span",[],[]);
 };
 LayoutEngineModule.inputLabel=function(lytNm,attrs,labelName,varName)
 {
  var o,o$1,t;
  o=(o$1=(t=(LayoutEngineModule.splitName(lytNm))(varName),AppFramework.tryGetVar(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:Doc.Element("div",LayoutEngineModule.getAttrs(lytNm,attrs),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[LayoutEngineModule.getText(lytNm,labelName)]),Doc.Input([AttrProxy.Create("class","form-control")],o$1.$0.varVar)])])
  });
  return o==null?LayoutEngineModule.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Var not found "+Utils.toSafe($2));
   };
  }(Global.id))(varName)):o.$0;
 };
 LayoutEngineModule.inputFile$3169$69=Runtime.Curried3(function(act,el,$1)
 {
  return AppFramework.callFunction(el,null,act.actFunction);
 });
 LayoutEngineModule.inputFile$3168$69=Runtime.Curried3(function($1,el,$2)
 {
  el.value="";
 });
 LayoutEngineModule.inputFile=function(lytNm,attrs,labelName,actName,doc)
 {
  var o,o$1,t,act;
  o=(o$1=(t=(LayoutEngineModule.splitName(lytNm))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:(act=o$1.$0,Doc.Element("div",LayoutEngineModule.getAttrs(lytNm,attrs),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-btn")],[Doc.Element("label",[AttrProxy.Create("class","btn")],[LayoutEngineModule.getText(lytNm,labelName),Doc.Element("input",[AttrProxy.Create("class","form-control"),AttrProxy.Create("type","file"),AttrModule.Style("display","none"),AttrProxy.HandlerImpl("click",function(el)
   {
    return function()
    {
     el.value="";
    };
   }),AttrProxy.HandlerImpl("change",function(el)
   {
    return function()
    {
     return AppFramework.callFunction(el,null,act.actFunction);
    };
   })],[])])]),doc!==""?LayoutEngineModule.singleDoc(lytNm,List.ofArray([doc])):Doc.get_Empty()])]))
  });
  return o==null?LayoutEngineModule.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Action not found "+Utils.toSafe($2));
   };
  }(Global.id))(actName)):o.$0;
 };
 LayoutEngineModule.getText=function(lytNm,txtName)
 {
  var a,id,p,plg,nm,o,o$1,o$2,o$3;
  a=LayoutEngineModule.Identifier(txtName);
  return a!=null&&a.$==1?(id=a.$0,(p=(LayoutEngineModule.splitName(lytNm))(id),(plg=p[0],(nm=p[1],(o=(o$1=AppFramework.tryGetViw(plg,nm),o$1==null?null:{
   $:1,
   $0:Doc.TextView(o$1.$0.viwView)
  }),o==null?(o$2=(o$3=AppFramework.tryGetVar(plg,nm),o$3==null?null:{
   $:1,
   $0:Doc.TextView(o$3.$0.varVar.get_View())
  }),o$2==null?Doc.TextNode(id):o$2.$0):o.$0))))):Doc.TextNode(txtName);
 };
 LayoutEngineModule.createDocs=function(lytNm,txt)
 {
  function m(a,b)
  {
   return AppFramework.newDoc(a,Lazy.Create(function()
   {
    return b;
   }));
  }
  return Seq$1.map(function($1)
  {
   return m($1[0],$1[1]);
  },Seq$1.choose(function(l)
  {
   return LayoutEngineModule.createDocO(lytNm,l);
  },String.splitByChar("\n",txt)));
 };
 LayoutEngineModule.createDocO=function(lytNm,line)
 {
  var m,$1,a,a$1,$2,a$2,a$3,$3,a$4,a$5,$4,a$6,a$7,$5,a$8,a$9,$6,a$10,$7,a$11,$8,a$12,a$13;
  try
  {
   m=LayoutEngineModule.splitTokens(line);
   return m.$==1&&(a=LayoutEngineModule.Identifier(m.$0),a!=null&&a.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$1=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$1!=null&&a$1.$==1&&($1=[m.$1.$1.$1,a$1.$0,a.$0],true))))))?{
    $:1,
    $0:[$1[2],(LayoutEngineModule.createSplitterM())([lytNm,true,$1[1],$1[0]])]
   }:m.$==1&&(a$2=LayoutEngineModule.Identifier(m.$0),a$2!=null&&a$2.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$3=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$3!=null&&a$3.$==1&&($2=[m.$1.$1.$1,a$3.$0,a$2.$0],true))))))?{
    $:1,
    $0:[$2[2],(LayoutEngineModule.createSplitterM())([lytNm,false,$2[1],$2[0]])]
   }:m.$==1&&(a$4=LayoutEngineModule.Identifier(m.$0),a$4!=null&&a$4.$==1&&(m.$1.$==1&&(LayoutEngineModule.Doc(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$5=LayoutEngineModule.Identifier(m.$1.$1.$0),a$5!=null&&a$5.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($3=[a$5.$0,m.$1.$1.$1.$0,a$4.$0,m.$1.$1.$1.$1.$0],true)))))))))?{
    $:1,
    $0:[$3[2],(LayoutEngineModule.createButtonM())([lytNm,$3[0],$3[1],$3[3]])]
   }:m.$==1&&(a$6=LayoutEngineModule.Identifier(m.$0),a$6!=null&&a$6.$==1&&(m.$1.$==1&&(LayoutEngineModule.Doc(m.$1.$0).$==2&&(m.$1.$1.$==1&&(a$7=LayoutEngineModule.Identifier(m.$1.$1.$0),a$7!=null&&a$7.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==0&&($4=[m.$1.$1.$1.$0,a$6.$0,a$7.$0],true))))))))?{
    $:1,
    $0:[$4[1],(LayoutEngineModule.createInputM())([lytNm,$4[2],$4[0]])]
   }:m.$==1&&(a$8=LayoutEngineModule.Identifier(m.$0),a$8!=null&&a$8.$==1&&(m.$1.$==1&&(LayoutEngineModule.Doc(m.$1.$0).$==3&&(m.$1.$1.$==1&&(a$9=LayoutEngineModule.Identifier(m.$1.$1.$0),a$9!=null&&a$9.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==0&&($5=[m.$1.$1.$1.$0,a$8.$0,a$9.$0],true))))))))?{
    $:1,
    $0:[$5[1],(LayoutEngineModule.createTextAreaM())([lytNm,$5[2],$5[0]])]
   }:m.$==1&&(a$10=LayoutEngineModule.Identifier(m.$0),a$10!=null&&a$10.$==1&&(m.$1.$==1&&(LayoutEngineModule.Doc(m.$1.$0).$==0&&(m.$1.$1.$==1&&($6=[m.$1.$1.$0,a$10.$0,m.$1.$1.$1],true)))))?{
    $:1,
    $0:[$6[1],(LayoutEngineModule.createDocM())([lytNm,$6[0],$6[2]])]
   }:m.$==1&&(a$11=LayoutEngineModule.Identifier(m.$0),a$11!=null&&a$11.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==2&&(m.$1.$1.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==1&&($7=[m.$1.$1.$1.$1.$0,m.$1.$1.$0,m.$1.$1.$1.$1.$1,a$11.$0,m.$1.$1.$1.$0],true)))))))?null:m.$==1&&(a$12=LayoutEngineModule.Identifier(m.$0),a$12!=null&&a$12.$==1&&(m.$1.$==1&&(a$13=LayoutEngineModule.Vertical(m.$1.$0),a$13.$==3&&(m.$1.$1.$==1&&($8=[m.$1.$1.$0,m.$1.$1.$1,a$13.$0,a$12.$0],true)))))?{
    $:1,
    $0:[$8[3],(LayoutEngineModule.createElementM())([lytNm,$8[2],$8[0],$8[1]])]
   }:null;
  }
  catch(e)
  {
   ((function($9)
   {
    return function($10)
    {
     return $9(Utils.prettyPrint($10));
    };
   }(function(s)
   {
    console.log(s);
   }))(e));
   return null;
  }
 };
 LayoutEngineModule.createDocM=function()
 {
  SC$1.$cctor();
  return SC$1.createDocM;
 };
 LayoutEngineModule.createElementM=function()
 {
  SC$1.$cctor();
  return SC$1.createElementM;
 };
 LayoutEngineModule.createTextAreaM=function()
 {
  SC$1.$cctor();
  return SC$1.createTextAreaM;
 };
 LayoutEngineModule.createInputM=function()
 {
  SC$1.$cctor();
  return SC$1.createInputM;
 };
 LayoutEngineModule.createButtonM=function()
 {
  SC$1.$cctor();
  return SC$1.createButtonM;
 };
 LayoutEngineModule.createSplitterM=function()
 {
  SC$1.$cctor();
  return SC$1.createSplitterM;
 };
 LayoutEngineModule.createDoc=function(lytNm,docName,parms)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var p,o,o$1;
   p=(LayoutEngineModule.splitName(lytNm))(docName);
   o=(o$1=AppFramework.tryGetDoc(p[0],p[1]),o$1==null?null:{
    $:1,
    $0:LayoutEngineModule.getDocFinal(parms,o$1.$0)
   });
   return o==null?LayoutEngineModule.errDoc((function($1)
   {
    return function($2)
    {
     return $1("Missing doc: "+Utils.toSafe($2));
    };
   }(Global.id))(docName)):o.$0;
  });
 };
 LayoutEngineModule.createTextArea=function(lytNm,varName,attrs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var o,x,t,m,a;
   o=(x=(t=(LayoutEngineModule.splitName(lytNm))(varName),AppFramework.tryGetVoV(t[0],t[1])),(m=(a=LayoutEngineModule.getAttrs(lytNm,attrs),function(a$1)
   {
    return Doc.InputArea(a,a$1);
   }),x==null?null:{
    $:1,
    $0:m(x.$0)
   }));
   return o==null?LayoutEngineModule.errDoc((function($1)
   {
    return function($2)
    {
     return $1("Missing var: "+Utils.toSafe($2));
    };
   }(Global.id))(varName)):o.$0;
  });
 };
 LayoutEngineModule.createInput=function(lytNm,varName,attrs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var o,x,t,m,a;
   o=(x=(t=(LayoutEngineModule.splitName(lytNm))(varName),AppFramework.tryGetVoV(t[0],t[1])),(m=(a=LayoutEngineModule.getAttrs(lytNm,attrs),function(a$1)
   {
    return Doc.Input(a,a$1);
   }),x==null?null:{
    $:1,
    $0:m(x.$0)
   }));
   return o==null?LayoutEngineModule.errDoc((function($1)
   {
    return function($2)
    {
     return $1("Missing var: "+Utils.toSafe($2));
    };
   }(Global.id))(varName)):o.$0;
  });
 };
 LayoutEngineModule.createButton=function(lytNm,actName,attrs,text)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var x,o,o$1,t,$1;
   function m(act,u)
   {
    return AppFramework.callFunction(null,null,act.actFunction);
   }
   x=(o=(o$1=(t=(LayoutEngineModule.splitName(lytNm))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
    $:1,
    $0:($1=o$1.$0,function($2)
    {
     return m($1,$2);
    })
   }),o==null?Global.ignore:o.$0);
   return Doc.Button(text,LayoutEngineModule.getAttrs(lytNm,attrs),x);
  });
 };
 LayoutEngineModule.createElement=function(lytNm,element,attrs,docs)
 {
  var x;
  x=[LayoutEngineModule.turnToView(function()
  {
   return Doc.Concat(LayoutEngineModule.getDocs(lytNm,docs));
  })];
  return Doc.Element(element,LayoutEngineModule.getAttrs(lytNm,attrs),x);
 };
 LayoutEngineModule.createSplitter=function(lytNm,vertical,measures,docs)
 {
  var p;
  p=LayoutEngineModule.pairOfDocs(lytNm,docs);
  return measures.$==1?LayoutEngineModule.variableSplitter(vertical,measures.$0,measures.$1,measures.$2,p[0],p[1]):LayoutEngineModule.fixedSplitter(vertical,measures.$0,measures.$1,p[0],p[1]);
 };
 LayoutEngineModule.singleDoc=function(lytNm,docs)
 {
  return Doc.EmbedView(View$1.Map(function(a)
  {
   var $1;
   return a.$==1&&(a.$1.$==0&&($1=a.$0,true))?$1:LayoutEngineModule.errDoc((function($2)
   {
    return function($3)
    {
     return $2("expected exactly 1 element "+Utils.printList(Utils.prettyPrint,$3));
    };
   }(Global.id))(docs));
  },View$1.Map(function()
  {
   return LayoutEngineModule.getDocs(lytNm,docs);
  },AppFramework.mainDocV().get_View())));
 };
 LayoutEngineModule.pairOfDocs=function(lytNm,docs)
 {
  var dsW;
  dsW=View$1.Map(function(a)
  {
   var $1;
   return a.$==1&&(a.$1.$==1&&(a.$1.$1.$==0&&($1=[a.$0,a.$1.$0],true)))?[$1[0],$1[1]]:[LayoutEngineModule.errDoc((function($2)
   {
    return function($3)
    {
     return $2("splitter expects exactly 2 elements "+Utils.printList(Utils.prettyPrint,$3));
    };
   }(Global.id))(docs)),LayoutEngineModule.errDoc("part 2")];
  },View$1.Map(function()
  {
   return LayoutEngineModule.getDocs(lytNm,docs);
  },AppFramework.mainDocV().get_View()));
  return[Doc.EmbedView(View$1.Map(function(t)
  {
   return t[0];
  },dsW)),Doc.EmbedView(View$1.Map(function(t)
  {
   return t[1];
  },dsW))];
 };
 LayoutEngineModule.getDocs=function(lytNm,docs)
 {
  var m;
  return docs.$==0?List.T.Empty:(m=LayoutEngineModule.getOneDoc(lytNm,docs),new List.T({
   $:1,
   $0:m[0],
   $1:LayoutEngineModule.getDocs(lytNm,m[1])
  }));
 };
 LayoutEngineModule.getOneDoc=function(lytNm,docs)
 {
  var $1,a,id,parms,p,plg,nm,o,o$1,o$2,o$3,rest,m;
  return docs.$==1&&(a=LayoutEngineModule.Identifier(docs.$0),a!=null&&a.$==1&&($1=[a.$0,docs.$1],true))?(id=$1[0],(parms=$1[1],(p=(LayoutEngineModule.splitName(lytNm))(id),(plg=p[0],(nm=p[1],(o=(o$1=AppFramework.tryGetDoc(plg,nm),o$1==null?null:{
   $:1,
   $0:LayoutEngineModule.getDocF(parms,o$1.$0)
  }),o==null?(o$2=(o$3=AppFramework.tryGetWoW(plg,nm),o$3==null?null:{
   $:1,
   $0:[Doc.TextView(o$3.$0),parms]
  }),o$2==null?[LayoutEngineModule.errDoc((function($2)
  {
   return function($3)
   {
    return $2("Missing doc: "+Utils.toSafe($3));
   };
  }(Global.id))(id)),parms]:o$2.$0):o.$0)))))):docs.$==0?[Doc.get_Empty(),List.T.Empty]:(rest=docs.$1,(m=LayoutEngineModule.getTextData(lytNm,docs.$0),m.$==1?[Doc.TextView(m.$0),rest]:m.$==2?[LayoutEngineModule.errDoc((function($2)
  {
   return function($3)
   {
    return $2("Unexpected action: "+Utils.toSafe($3));
   };
  }(Global.id))(m.$0.actName)),rest]:[Doc.TextNode(m.$0),rest]));
 };
 LayoutEngineModule.turnToView=function(f)
 {
  return Doc.EmbedView(View$1.Map(f,AppFramework.mainDocV().get_View()));
 };
 LayoutEngineModule.getDocFinal=function(parms,doc)
 {
  var m;
  m=LayoutEngineModule.getDocF(parms,doc);
  return m[1].$==0?m[0]:LayoutEngineModule.errDoc((((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("Too many parameters "+GeneratedPrintf.p($2)+" "+Utils.printList(Utils.prettyPrint,$3));
  }))(Global.id))(doc))(parms));
 };
 LayoutEngineModule.getDocF=function(parms,doc)
 {
  var $1,$2;
  $2=doc.docDoc;
  switch($2.$==1?parms.$==1?($1=[$2.$0,parms.$0,parms.$1],1):6:$2.$==2?parms.$==1?parms.$1.$==1?($1=[$2.$0,parms.$0,parms.$1.$0,parms.$1.$1],2):6:6:$2.$==3?parms.$==1?parms.$1.$==1?parms.$1.$1.$==1?($1=[$2.$0,parms.$0,parms.$1.$0,parms.$1.$1.$0,parms.$1.$1.$1],3):6:6:6:$2.$==4?parms.$==1?parms.$1.$==1?parms.$1.$1.$==1?parms.$1.$1.$1.$==1?($1=[$2.$0,parms.$0,parms.$1.$0,parms.$1.$1.$0,parms.$1.$1.$1.$0,parms.$1.$1.$1.$1],4):6:6:6:6:$2.$==5?parms.$==1?parms.$1.$==1?parms.$1.$1.$==1?parms.$1.$1.$1.$==1?parms.$1.$1.$1.$1.$==1?($1=[$2.$0,parms.$0,parms.$1.$0,parms.$1.$1.$0,parms.$1.$1.$1.$0,parms.$1.$1.$1.$1.$0,parms.$1.$1.$1.$1.$1],5):6:6:6:6:6:($1=[$2.$0,parms],0))
  {
   case 0:
    return[$1[0].f(),$1[1]];
   case 1:
    return[$1[0]($1[1]),$1[2]];
   case 2:
    return[($1[0]($1[1]))($1[2]),$1[3]];
   case 3:
    return[(($1[0]($1[1]))($1[2]))($1[3]),$1[4]];
   case 4:
    return[((($1[0]($1[1]))($1[2]))($1[3]))($1[4]),$1[5]];
   case 5:
    return[(((($1[0]($1[1]))($1[2]))($1[3]))($1[4]))($1[5]),$1[6]];
   case 6:
    return[Doc.Element("div",[],[Doc.TextNode((((Runtime.Curried3(function($3,$4,$5)
    {
     return $3("Parameters do not coincide with definition "+GeneratedPrintf.p($4)+" - "+Utils.printList(Utils.prettyPrint,$5));
    }))(Global.id))(doc))(parms))]),List.T.Empty];
  }
 };
 LayoutEngineModule.getAttrs=function(lytNm,attrs)
 {
  return List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(Seq$1.choose(function(a)
   {
    var $1,value,value$1,name,m,act;
    return!Unchecked.Equals(a,null)&&a.length===2&&(value=Arrays.get(a,1),Strings.Trim(Arrays.get(a,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a,1),(name=Arrays.get(a,0),{
     $:1,
     $0:(m=LayoutEngineModule.getTextData(lytNm,Strings.Trim(value$1)),m.$==1?AttrModule.Dynamic(Strings.Trim(name),m.$0):m.$==2?(act=m.$0,AttrModule.Handler(Strings.Trim(name),function(el)
     {
      return function(ev)
      {
       return AppFramework.callFunction(el,ev,act.actFunction);
      };
     })):AttrProxy.Create(Strings.Trim(name),Strings.Trim(m.$0)))
    })):null;
   },Seq$1.map(function(s)
   {
    return String.splitByChar("=",s);
   },String.splitByChar(";",attrs))),Seq$1.delay(function()
   {
    return Seq$1.choose(function(a)
    {
     var $1,value,value$1,name,m;
     return!Unchecked.Equals(a,null)&&a.length===2&&(value=Arrays.get(a,1),Strings.Trim(Arrays.get(a,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a,1),(name=Arrays.get(a,0),{
      $:1,
      $0:(m=LayoutEngineModule.getTextData(lytNm,Strings.Trim(value$1)),m.$==1?AttrModule.DynamicStyle(Strings.Trim(name),m.$0):m.$==2?AttrModule.Style(Strings.Trim(name),(function($2)
      {
       return function($3)
       {
        return $2("${"+Utils.toSafe($3)+"}");
       };
      }(Global.id))(m.$0.actName)):AttrModule.Style(Strings.Trim(name),Strings.Trim(m.$0)))
     })):null;
    },Seq$1.map(function(s)
    {
     return String.splitByChar(":",s);
    },String.splitByChar(";",attrs)));
   }));
  }));
 };
 LayoutEngineModule.getTextData=function(lytNm,txt)
 {
  var o,o$1,$1,bef,name,aft,p,plg,n,o$2,o$3,o$4,o$5;
  o=(o$1=String.delimitedO("${","}",txt),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,(bef=$1[0],(name=$1[1],(aft=$1[2],(p=(LayoutEngineModule.splitName(lytNm))(name),(plg=p[0],(n=p[1],(o$2=(o$3=AppFramework.tryGetWoW(plg,n),o$3==null?null:{
    $:1,
    $0:function(txW)
    {
     var $2,$3;
     $3=LayoutEngineModule.getTextData(lytNm,aft);
     switch(bef===""?$3.$==1?($2=$3.$0,2):$3.$==2?($2=$3.$0,3):$3.$0===""?0:($2=$3.$0,1):$3.$==1?($2=$3.$0,2):$3.$==2?($2=$3.$0,3):($2=$3.$0,1))
     {
      case 0:
       return{
        $:1,
        $0:txW
       };
      case 1:
       return{
        $:1,
        $0:View$1.Map(function(a)
        {
         return bef+a+$2;
        },txW)
       };
      case 2:
       return{
        $:1,
        $0:View$1.Map2(function(a,b)
        {
         return bef+a+b;
        },txW,$2)
       };
      case 3:
       return{
        $:2,
        $0:$2
       };
     }
    }(o$3.$0)
   }),o$2==null?(o$4=(o$5=AppFramework.tryGetAct(plg,n),o$5==null?null:{
    $:1,
    $0:{
     $:2,
     $0:o$5.$0
    }
   }),o$4==null?{
    $:0,
    $0:((((Runtime.Curried(function($2,$3,$4,$5)
    {
     return $2(Utils.toSafe($3)+" ${Missing "+Utils.toSafe($4)+"}"+Utils.toSafe($5));
    },4))(Global.id))(bef))(name))(aft)
   }:o$4.$0):o$2.$0))))))))
  });
  return o==null?{
   $:0,
   $0:txt
  }:o.$0;
 };
 LayoutEngineModule.splitTokens=function(line)
 {
  return List.ofSeq(Seq$1.collect(Global.id,Seq$1.mapi(function(i,s)
  {
   var t;
   return i%2===1?[" "+s]:(t=Strings.Trim(s),t===""?[]:Strings.SplitChars(t,[" "],1));
  },String.splitByChar("\"",line))));
 };
 LayoutEngineModule.splitName=function(lytNm)
 {
  function f(s)
  {
   return String.splitByChar(".",s);
  }
  function g(a)
  {
   return Arrays.length(a)===1?[lytNm,Arrays.get(a,0)]:[Arrays.get(a,0),Arrays.get(a,1)];
  }
  return function(x)
  {
   return g(f(x));
  };
 };
 LayoutEngineModule.errDoc=function(txt)
 {
  return Doc.Element("div",[],[Doc.TextNode(txt)]);
 };
 LayoutEngineModule.variableSplitter=function(vertical,min,value,max,doc1,doc2)
 {
  return Doc.Element("wcomp-splitter",List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(vertical?[AttrProxy.Create("vertical","")]:[],Seq$1.delay(function()
   {
    return Seq$1.append([AttrProxy.Create("min",Global.String(min))],Seq$1.delay(function()
    {
     return Seq$1.append([AttrProxy.Create("value",Global.String(value))],Seq$1.delay(function()
     {
      return[AttrProxy.Create("max",Global.String(max))];
     }));
    }));
   }));
  })),List.ofArray([doc1,doc2]));
 };
 LayoutEngineModule.fixedSplitter=function(vertical,pixel,first,doc1,doc2)
 {
  var sizes,b,p,i,b$1,p$1,i$1;
  sizes=(((first?Runtime.Curried3(function($1,$2,$3)
  {
   return $1($2.toFixed(6)+"px calc(100% - "+$3.toFixed(6)+"px)");
  }):Runtime.Curried3(function($1,$2,$3)
  {
   return $1("calc(100% - "+$2.toFixed(6)+"px) "+$3.toFixed(6)+"px");
  }))(Global.id))(pixel))(pixel);
  return vertical?(b=ProviderBuilder.Make().WithHole({
   $:1,
   $0:"partsizes",
   $1:sizes
  }).WithHole({
   $:0,
   $0:"first",
   $1:doc1
  }).WithHole({
   $:0,
   $0:"second",
   $1:doc2
  }),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.fixedsplitterver(p[0])),(b.i=i,i)))).get_Doc():(b$1=ProviderBuilder.Make().WithHole({
   $:1,
   $0:"partsizes",
   $1:sizes
  }).WithHole({
   $:0,
   $0:"first",
   $1:doc1
  }).WithHole({
   $:0,
   $0:"second",
   $1:doc2
  }),(p$1=Handler$1.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],FSharpStation_Templates.fixedsplitterhor(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
 };
 LayoutEngineModule.Measures$1=function(txt)
 {
  var a,$1,a$1,$2,a$2,$3,a$3,a$4,a$5;
  a=String.splitByChar("-",txt);
  return!Unchecked.Equals(a,null)&&a.length===1&&(a$1=(ParseO.Double())(Arrays.get(a,0)),a$1!=null&&a$1.$==1&&($1=a$1.$0,true))?{
   $:1,
   $0:{
    $:0,
    $0:$1,
    $1:true
   }
  }:!Unchecked.Equals(a,null)&&a.length===2&&(Arrays.get(a,0)===""&&(a$2=(ParseO.Double())(Arrays.get(a,1)),a$2!=null&&a$2.$==1&&($2=a$2.$0,true)))?{
   $:1,
   $0:{
    $:0,
    $0:$2,
    $1:false
   }
  }:!Unchecked.Equals(a,null)&&a.length===3&&(a$3=(ParseO.Double())(Arrays.get(a,0)),a$3!=null&&a$3.$==1&&(a$4=(ParseO.Double())(Arrays.get(a,1)),a$4!=null&&a$4.$==1&&(a$5=(ParseO.Double())(Arrays.get(a,2)),a$5!=null&&a$5.$==1&&($3=[a$5.$0,a$3.$0,a$4.$0],true))))?{
   $:1,
   $0:{
    $:1,
    $0:$3[1],
    $1:$3[2],
    $2:$3[0]
   }
  }:null;
 };
 LayoutEngineModule.Doc=function(a)
 {
  return a==="Doc"?{
   $:0,
   $0:null
  }:a==="button"?{
   $:1,
   $0:null
  }:a==="input"?{
   $:2,
   $0:null
  }:a==="textarea"?{
   $:3,
   $0:null
  }:a==="select"?{
   $:4,
   $0:null
  }:{
   $:5,
   $0:null
  };
 };
 LayoutEngineModule.Vertical=function(a)
 {
  var a$1;
  return a==="vertical"?{
   $:0,
   $0:null
  }:a==="horizontal"?{
   $:1,
   $0:null
  }:a==="grid"?{
   $:2,
   $0:null
  }:(a$1=LayoutEngineModule.Identifier(a),a$1!=null&&a$1.$==1?{
   $:3,
   $0:a$1.$0
  }:{
   $:4,
   $0:null
  });
 };
 LayoutEngineModule.Identifier=function(a)
 {
  var $1,a$1,t;
  return(a$1=LibraryJS.REGEX$1("^[$a-zA-Z_][0-9a-zA-Z_\\.\\-$]*$","",a),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($1=Arrays.get(a$1.$0,0),true)))?{
   $:1,
   $0:$1
  }:null;
 };
 LibraryJS.rexGuid=function()
 {
  SC$1.$cctor();
  return SC$1.rexGuid;
 };
 LibraryJS.REGEX$1=function(expr,opt,value)
 {
  var m;
  if(value===null)
   return null;
  else
   try
   {
    m=(new Global.String(value)).match(new Global.RegExp(expr,opt));
    return Unchecked.Equals(m,null)?null:!Unchecked.Equals(m,null)&&m.length===0?null:{
     $:1,
     $0:m
    };
   }
   catch(e)
   {
    return null;
   }
 };
 LibraryJS.bindVarEditor=function(setEvent,getVal,setVal,onChange,_var)
 {
  var editorChanged,varChanged;
  editorChanged=[0];
  varChanged=[0];
  setEvent(function()
  {
   var v;
   v=getVal();
   _var.Get()!==v?(editorChanged[0]=editorChanged[0]+1,_var.Set(v),onChange()):void 0;
  });
  View$1.Sink(function()
  {
   if(editorChanged[0]>varChanged[0])
    varChanged[0]=editorChanged[0];
   else
    if(getVal()!==_var.Get())
     setVal(_var.Get());
  },_var.get_View());
 };
 FsiAgent.extractConfig=function(workDir,a)
 {
  var fsCode;
  fsCode=a.$0;
  return{
   $:0,
   $0:FsCodeModule.getSourceDir(workDir,String.splitByChar("\n",fsCode)),
   $1:" --nologo --quiet "+FsCodeModule.extractDefines({
    $:0,
    $0:fsCode
   })
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
    return b.Bind$1($this.sendGetReply((dst=WebSockets.MessageBrokerAddress(),(p=JSON.stringify((FSharpStation_JsonEncoder.j$9())(BrokerRequest.BRGetProcessId)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),dst,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     var m;
     m=(FSharpStation_JsonDecoder.j$7())(JSON.parse(a));
     return m.$==1?b.Return(m.$0):b.ReturnFrom({
      $:1,
      $0:new ResultMessage({
       $:2,
       $0:{
        $:6,
        $0:(function($1)
        {
         return function($2)
         {
          return $1(FSharpStation_GeneratedPrintf.p$6($2));
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
    return b.Bind$1($this.sendGetReply((dst=WebSockets.MessageBrokerAddress(),(p=JSON.stringify((FSharpStation_JsonEncoder.j$9())(BrokerRequest.BRGetConnections)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),dst,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     var m;
     m=(FSharpStation_JsonDecoder.j$7())(JSON.parse(a));
     return m.$==0?b.Return(m.$0):b.ReturnFrom({
      $:1,
      $0:new ResultMessage({
       $:2,
       $0:{
        $:6,
        $0:(function($1)
        {
         return function($2)
         {
          return $1(FSharpStation_GeneratedPrintf.p$6($2));
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
       $:2,
       $0:(FSharpStation_JsonDecoder.j$8())(JSON.parse(a.payload))
      })
     }:{
      $:1,
      $0:new ResultMessage({
       $:2,
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
     return b.Bind(a.msgType.$==3?(bm=(FSharpStation_JsonDecoder.j$8())(JSON.parse(a.payload)),bm.$===0?{
      $:0,
      $0:null
     }:{
      $:1,
      $0:new ResultMessage({
       $:2,
       $0:bm
      })
     }):{
      $:1,
      $0:new ResultMessage({
       $:2,
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
         return $4("Did not receive reply in "+Global.String($5)+" seconds for Message: "+GeneratedPrintf.p$1($6));
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
           return $1("msg: "+FSharpStation_GeneratedPrintf.p$10($2)+" \nexn:"+Utils.prettyPrint($3));
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
    return JSON.stringify((FSharpStation_JsonEncoder.j())(a));
   },function(a)
   {
    return(FSharpStation_JsonDecoder.j())(JSON.parse(a));
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
    (function($1)
    {
     return $1("getServer");
    }(function(s)
    {
     console.log(s);
    }));
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
       $:0,
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
 ResponseError.New=function(Code,Message)
 {
  return{
   Code:Code,
   Message:Message
  };
 };
 Location$1.New=function(File,Line,Column)
 {
  return{
   File:File,
   Line:Line,
   Column:Column
  };
 };
 CompletionResponse.New=function(Name,ReplacementText,Glyph,GlyphChar)
 {
  return{
   Name:Name,
   ReplacementText:ReplacementText,
   Glyph:Glyph,
   GlyphChar:GlyphChar
  };
 };
 OverloadDescription.New=function(Signature,Comment,Footer)
 {
  return{
   Signature:Signature,
   Comment:Comment,
   Footer:Footer
  };
 };
 OverloadParameter.New=function(Name,CanonicalTypeTextForSorting,Display,Description)
 {
  return{
   Name:Name,
   CanonicalTypeTextForSorting:CanonicalTypeTextForSorting,
   Display:Display,
   Description:Description
  };
 };
 Overload.New=function(Tip,TypeText,Parameters,IsStaticArguments)
 {
  return{
   Tip:Tip,
   TypeText:TypeText,
   Parameters:Parameters,
   IsStaticArguments:IsStaticArguments
  };
 };
 Parameter.New=function(Name,Type)
 {
  return{
   Name:Name,
   Type:Type
  };
 };
 SignatureData.New=function(OutputType,Parameters)
 {
  return{
   OutputType:OutputType,
   Parameters:Parameters
  };
 };
 MethodResponse.New=function(Name,CurrentParameter,Overloads)
 {
  return{
   Name:Name,
   CurrentParameter:CurrentParameter,
   Overloads:Overloads
  };
 };
 SymbolUseRange.New=function(FileName,StartLine,StartColumn,EndLine,EndColumn,IsFromDefinition,IsFromAttribute,IsFromComputationExpression,IsFromDispatchSlotImplementation,IsFromPattern,IsFromType)
 {
  return{
   FileName:FileName,
   StartLine:StartLine,
   StartColumn:StartColumn,
   EndLine:EndLine,
   EndColumn:EndColumn,
   IsFromDefinition:IsFromDefinition,
   IsFromAttribute:IsFromAttribute,
   IsFromComputationExpression:IsFromComputationExpression,
   IsFromDispatchSlotImplementation:IsFromDispatchSlotImplementation,
   IsFromPattern:IsFromPattern,
   IsFromType:IsFromType
  };
 };
 SymbolUseResponse.New=function(Name,Uses)
 {
  return{
   Name:Name,
   Uses:Uses
  };
 };
 HelpTextResponse.New=function(Name,Overloads)
 {
  return{
   Name:Name,
   Overloads:Overloads
  };
 };
 CompilerLocationResponse.New=function(Fsc,Fsi,MSBuild)
 {
  return{
   Fsc:Fsc,
   Fsi:Fsi,
   MSBuild:MSBuild
  };
 };
 FSharpErrorInfo.New=function(FileName,StartLine,EndLine,StartColumn,EndColumn,Severity,Message,Subcategory)
 {
  return{
   FileName:FileName,
   StartLine:StartLine,
   EndLine:EndLine,
   StartColumn:StartColumn,
   EndColumn:EndColumn,
   Severity:Severity,
   Message:Message,
   Subcategory:Subcategory
  };
 };
 ErrorResponse.New=function(File,Errors)
 {
  return{
   File:File,
   Errors:Errors
  };
 };
 Colorization.New=function(Kind)
 {
  return{
   Kind:Kind
  };
 };
 Declaration.New=function(UniqueName,Name,Glyph,GlyphChar,IsTopLevel,File,EnclosingEntity,IsAbstract)
 {
  return{
   UniqueName:UniqueName,
   Name:Name,
   Glyph:Glyph,
   GlyphChar:GlyphChar,
   IsTopLevel:IsTopLevel,
   File:File,
   EnclosingEntity:EnclosingEntity,
   IsAbstract:IsAbstract
  };
 };
 DeclarationResponse.New=function(Declaration$1,Nested)
 {
  return{
   Declaration:Declaration$1,
   Nested:Nested
  };
 };
 OpenNamespace.New=function(Namespace,Name,Type,Line,Column,MultipleNames)
 {
  return{
   Namespace:Namespace,
   Name:Name,
   Type:Type,
   Line:Line,
   Column:Column,
   MultipleNames:MultipleNames
  };
 };
 QualifySymbol.New=function(Name,Qualifier)
 {
  return{
   Name:Name,
   Qualifier:Qualifier
  };
 };
 ResolveNamespaceResponse.New=function(Opens,Qualifies,Word)
 {
  return{
   Opens:Opens,
   Qualifies:Qualifies,
   Word:Word
  };
 };
 UnionCaseResponse.New=function(Text)
 {
  return{
   Text:Text
  };
 };
 Calls.symbolUseProject=function(file,lin,col,filter)
 {
  return Calls.FSAutocompleteCall("symboluseproject",function(a)
  {
   return a.$==4?{
    $:1,
    $0:a.$0
   }:null;
  },{
   $:3,
   $0:{
    FileName:file,
    Line:lin,
    Column:col,
    Filter:filter
   }
  });
 };
 Calls.symbolUse=function(file,lin,col,filter)
 {
  return Calls.FSAutocompleteCall("symboluse",function(a)
  {
   return a.$==4?{
    $:1,
    $0:a.$0
   }:null;
  },{
   $:3,
   $0:{
    FileName:file,
    Line:lin,
    Column:col,
    Filter:filter
   }
  });
 };
 Calls.helpText=function(symbol)
 {
  return Calls.FSAutocompleteCall("helptext",function(a)
  {
   return a.$==2?{
    $:1,
    $0:a.$0
   }:null;
  },{
   $:6,
   $0:{
    Symbol:symbol
   }
  });
 };
 Calls.declarations=function(file,code,ver)
 {
  return Calls.FSAutocompleteCall("declarations",function(a)
  {
   return a.$==10?{
    $:1,
    $0:a.$0
   }:null;
  },{
   $:1,
   $0:{
    FileName:file,
    Lines:code,
    Version:ver
   }
  });
 };
 Calls.findDeclaration=function(file,lin,col,filter)
 {
  return Calls.FSAutocompleteCall("finddeclaration",function(a)
  {
   return a.$==9?{
    $:1,
    $0:a.$0
   }:null;
  },{
   $:3,
   $0:{
    FileName:file,
    Line:lin,
    Column:col,
    Filter:filter
   }
  });
 };
 Calls.findTypeDecl=function(file,lin,col,filter)
 {
  return Calls.FSAutocompleteCall("findtypedeclaration",function(a)
  {
   return a.$==9?{
    $:1,
    $0:a.$0
   }:null;
  },{
   $:3,
   $0:{
    FileName:file,
    Line:lin,
    Column:col,
    Filter:filter
   }
  });
 };
 Calls.completion=function(tx,kw,file,ln,col,filter)
 {
  return Calls.FSAutocompleteCall("completion",function(a)
  {
   return a.$==3?{
    $:1,
    $0:a.$0
   }:null;
  },{
   $:2,
   $0:{
    FileName:file,
    SourceLine:tx,
    Line:ln,
    Column:col,
    Filter:filter,
    IncludeKeywords:kw
   }
  });
 };
 Calls.signatureData=function(file,lin,col,filter)
 {
  return Calls.FSAutocompleteCall("signatureData",function(a)
  {
   return a.$==13?{
    $:1,
    $0:a.$0
   }:null;
  },{
   $:3,
   $0:{
    FileName:file,
    Line:lin,
    Column:col,
    Filter:filter
   }
  });
 };
 Calls.signature=function(file,lin,col,filter)
 {
  return Calls.FSAutocompleteCall("signature",function(a)
  {
   return a.$==12?{
    $:1,
    $0:a.$0
   }:null;
  },{
   $:3,
   $0:{
    FileName:file,
    Line:lin,
    Column:col,
    Filter:filter
   }
  });
 };
 Calls.toolTip=function(file,lin,col,filter)
 {
  return Calls.FSAutocompleteCall("tooltip",function(a)
  {
   return a.$==11?{
    $:1,
    $0:a.$0
   }:null;
  },{
   $:3,
   $0:{
    FileName:file,
    Line:lin,
    Column:col,
    Filter:filter
   }
  });
 };
 Calls.parseCode=function(file,code,asy,ver)
 {
  return Calls.FSAutocompleteCall("parse",function(a)
  {
   return a.$==7?{
    $:1,
    $0:a.$0
   }:null;
  },{
   $:0,
   $0:{
    FileName:file,
    IsAsync:asy,
    Lines:code,
    Version:ver
   }
  });
 };
 Calls.FSAutocompleteCall=function(cmd,f,req)
 {
  var b;
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.Bind$1((new AjaxRemotingProvider.New()).Async("FSharpStation:FsRoot.Library2+FsAutoComplete.FSAutocompleteCall0:10255296",[cmd,req]),function(a)
   {
    var p,others;
    function g(o)
    {
     return o!=null;
    }
    p=Arrays.partition(function(x)
    {
     return g(f(x));
    },a);
    others=p[1];
    return b.Bind(Result.ofOption(function()
    {
     return new ResultMessage({
      $:2,
      $0:others
     });
    },Seq$1.tryHead(Seq$1.choose(f,p[0]))),function(a$1)
    {
     return b.Return([a$1,others]);
    });
   });
  }));
 };
 FStation.annotationsV=function()
 {
  SC$1.$cctor();
  return SC$1.annotationsV;
 };
 FStation.srcDir=function()
 {
  SC$1.$cctor();
  return SC$1.srcDir;
 };
 FStation.set_srcDir=function($1)
 {
  SC$1.$cctor();
  SC$1.srcDir=$1;
 };
 FStation.rootDir=function()
 {
  SC$1.$cctor();
  return SC$1.rootDir;
 };
 FStation.set_rootDir=function($1)
 {
  SC$1.$cctor();
  SC$1.rootDir=$1;
 };
 FStation.id=function()
 {
  SC$1.$cctor();
  return SC$1.id;
 };
 Snippets.expandParents=function(snpId)
 {
  Snippets.iterReader(Operators$2.op_BarGreaterGreater(SnippetModule.pathRm(snpId),function(path)
  {
   var a;
   a=FSharpSet.op_Subtraction(Snippets.collapsedV().Get(),new FSharpSet.New(path));
   Snippets.collapsedV().Set(a);
  }));
 };
 Snippets.toggleCollapse=function(snpId)
 {
  var a;
  a=((Snippets.collapsedV().Get().Contains(snpId)?function(v)
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
  })(snpId))(Snippets.collapsedV().Get());
  Snippets.collapsedV().Set(a);
 };
 Snippets.newSnippet=function(a)
 {
  var snp;
  snp=SnippetModule.New("","",null);
  Snippets.iterReader(Operators$2.op_BarGreaterGreater(Snippets.addSnippetRm(snp),function()
  {
   Snippets.currentSnippetIdOV().Set({
    $:1,
    $0:snp.snpId
   });
  }));
 };
 Snippets.addSnippetRm=function(snp)
 {
  var hier,x,o;
  Snippets.snippets().Append(snp);
  hier=(x=Snippets.hierarchy().Get(),Seq$1.append([Snippets.treenode(snp.snpId)],x));
  return Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(ReaderMResult.insertO((o=Snippets.currentSnippetIdOV().Get(),o==null?null:{
   $:1,
   $0:SnippetModule.snippetORm(o.$0)
  })),function(o$1)
  {
   return o$1==null?null:Global.id(o$1.$0);
  }),function(a)
  {
   return a!=null&&a.$==1?TreeReader.moveToSibling2(true,snp.snpId,a.$0.snpId,hier):Operators$2.rtn(hier);
  }),Arrays.ofSeq),function(a)
  {
   Snippets.hierarchy().Set(a);
  });
 };
 Snippets.setSnippetsGen=function(snps,coll)
 {
  function m(snp)
  {
   return Snippets.treenode(snp.snpId);
  }
  Snippets.collapsedV().Set(coll);
  Snippets.snippets().Set(snps);
  Snippets.updateGeneration();
  Snippets.iterReader(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(ReaderMResult.sequenceSeq(Seq$1.map(function(snp)
  {
   return Operators$2.op_BarGreaterGreater(SnippetModule.parentORm(snp),function(a)
   {
    return a==null?{
     $:1,
     $0:snp
    }:null;
   });
  },snps)),function(s)
  {
   return Seq$1.choose(Global.id,s);
  }),function(s)
  {
   return Seq$1.map(m,s);
  }),Arrays.ofSeq),function(a)
  {
   Snippets.hierarchy().Set(a);
  }));
 };
 Snippets.updateGeneration=function()
 {
  var b;
  Snippets.iterReader((b=Operators$2.reader(),b.Run(b.Delay(function()
  {
   return b.Bind(SnippetModule.maxGenerationRm(),function(a)
   {
    Snippets.generation().Set(a);
    return b.Zero();
   });
  }))));
 };
 Snippets.moveNode=function(fnid,tnid)
 {
  Snippets.iterReader(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(TreeReader.moveToSibling2(false,fnid,tnid,Snippets.hierarchy().Get()),Arrays.ofSeq),function(a)
  {
   Snippets.hierarchy().Set(a);
  }));
 };
 Snippets.indentOut=function(a)
 {
  var o,x;
  o=Snippets.currentSnippetIdOV().Get();
  o==null?void 0:Snippets.iterReader(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater((x=Snippets.hierarchy().Get(),TreeReader.outdentNode(Snippets.treenode(o.$0),x)),Arrays.ofSeq),function(a$1)
  {
   Snippets.hierarchy().Set(a$1);
  }));
 };
 Snippets.indentIn=function(a)
 {
  var o,x;
  o=Snippets.currentSnippetIdOV().Get();
  o==null?void 0:Snippets.iterReader(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater((x=Snippets.hierarchy().Get(),TreeReader.indentNode(Snippets.treenode(o.$0),x)),Arrays.ofSeq),function(a$1)
  {
   Snippets.hierarchy().Set(a$1);
  }));
 };
 Snippets.deleteCurrentSnippet=function(a)
 {
  var o,snpId,x;
  o=Snippets.currentSnippetIdOV().Get();
  o==null?void 0:(snpId=o.$0,Snippets.iterReader(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater((x=Snippets.hierarchy().Get(),TreeReader.removeNodeOutdentChildren(Snippets.treenode(snpId),x)),Arrays.ofSeq),function(a$1)
  {
   Snippets.hierarchy().Set(a$1);
  }),function()
  {
   Snippets.snippets().RemoveByKey(snpId);
  })));
 };
 Snippets.expandClassW=function(snpId)
 {
  var x;
  x=Snippets.snippets().v;
  return View$1.Map2(function()
  {
   return Snippets.runReader(Snippets.handleError,Snippets.expandClassRm(snpId));
  },Snippets.collapsedV().get_View(),x);
 };
 Snippets.expandClassRm=function(snpId)
 {
  return Operators$2.op_GreaterGreaterEquals(SnippetModule.childrenRm(snpId),function(chs)
  {
   return Seq$1.isEmpty(chs)?Operators$2.rtn(""):Operators$2.op_BarGreaterGreater(Snippets.treenode(snpId).isExpandedRm(),function(exp)
   {
    return exp?"expanded":"collapsed";
   });
  });
 };
 Snippets.togglePredecessor=function(predId)
 {
  var preds,x;
  preds=Var$1.Lens(Snippets.currentSnippetV(),function($1)
  {
   return $1.snpPredIds;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$1.snpName,$1.snpContent,$1.snpParentIdO,$2,$1.snpProperties,$1.snpGeneration);
  });
  preds.Set((x=preds.Get(),((preds.Get().Contains(predId)?function(v)
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
  })(predId))(x)));
  Snippets.clearPredsCache();
 };
 Snippets.isIncludedPredecessorW=function(snpId)
 {
  return View$1.Map(function(snp)
  {
   return Snippets.runReader(function()
   {
    return false;
   },Operators$2.op_BarGreaterGreater(SnippetModule.uniquePredsRm(snp),function(s)
   {
    return Seq$1.contains(snpId,s);
   }));
  },Snippets.codeSnippetW());
 };
 Snippets.isIndirectPredecessorW=function(snpId)
 {
  return View$1.Map(function(snp)
  {
   return Snippets.runReader(function()
   {
    return false;
   },Operators$2.op_BarGreaterGreater(SnippetModule.uniquePredsRm(snp),function(s)
   {
    return Seq$1.contains(snpId,s);
   }));
  },Snippets.currentSnippetW());
 };
 Snippets.treenode=function(snpId)
 {
  return Node.New(function()
  {
   return snpId;
  },function()
  {
   return Operators$2.rtn(!Snippets.collapsedV().Get().Contains(snpId));
  },function()
  {
   return Operators$2.rtn(true);
  },function()
  {
   function m(snp)
   {
    return Snippets.treenode(snp.snpId);
   }
   return Operators$2.op_BarGreaterGreater(SnippetModule.childrenRm(snpId),function(s)
   {
    return Seq$1.map(m,s);
   });
  },function()
  {
   return SnippetModule.pathRm(snpId);
  },function()
  {
   function b(x)
   {
    return x.snpParentIdO;
   }
   return Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(SnippetModule.snippetORm(snpId),function(o)
   {
    return o==null?null:b(o.$0);
   }),function(o)
   {
    return o==null?null:{
     $:1,
     $0:Snippets.treenode(o.$0)
    };
   });
  },function(ch)
  {
   return Operators$2.op_BarGreaterGreater(Snippets.setChildrenRm(snpId,ch),function()
   {
    return Snippets.treenode(snpId);
   });
  });
 };
 Snippets.setChildrenRm=function(snpId,ch)
 {
  var b;
  b=Operators$2.reader();
  return b.Run(b.Delay(function()
  {
   var chIds,p,others,descendants,index,a;
   chIds=Arrays.map(function(s)
   {
    return s.id();
   },ch);
   Seq$1.iter(function(s)
   {
    Snippets.setSnippet(s);
   },Seq$1.map(function(s)
   {
    return Snippet.New(s.snpId,s.snpName,s.snpContent,{
     $:1,
     $0:snpId
    },s.snpPredIds,s.snpProperties,s.snpGeneration);
   },Seq$1.filter(function(s)
   {
    return!Unchecked.Equals(s.snpParentIdO,{
     $:1,
     $0:snpId
    })&&Arrays.contains(s.snpId,chIds);
   },Snippets.snippets())));
   Seq$1.iter(function(s)
   {
    Snippets.setSnippet(s);
   },Seq$1.map(function(s)
   {
    return Snippet.New(s.snpId,s.snpName,s.snpContent,null,s.snpPredIds,s.snpProperties,s.snpGeneration);
   },Seq$1.filter(function(s)
   {
    return Unchecked.Equals(s.snpParentIdO,{
     $:1,
     $0:snpId
    })&&!Arrays.contains(s.snpId,chIds);
   },Snippets.snippets())));
   Snippets.clearPredsCache();
   p=Arrays.partition(function(s)
   {
    return Snippets.isDescendantOf(snpId,s.snpId);
   },Arrays.ofSeq((Snippets.snippets())["var"].Get()));
   others=p[1];
   descendants=p[0];
   index=Arrays.findIndex(function(s)
   {
    return Unchecked.Equals(s.snpId,snpId);
   },others);
   a=Arrays.ofSeq(Seq$1.delay(function()
   {
    return Seq$1.append(Slice.array(others,{
     $:1,
     $0:0
    },{
     $:1,
     $0:index
    }),Seq$1.delay(function()
    {
     return Seq$1.append(Seq$1.collect(function(chid)
     {
      return Seq$1.append([Seq$1.find(function(s)
      {
       return Unchecked.Equals(s.snpId,chid);
      },descendants)],Seq$1.delay(function()
      {
       return Seq$1.filter(function(s)
       {
        return Snippets.isDescendantOf(chid,s.snpId);
       },descendants);
      }));
     },chIds),Seq$1.delay(function()
     {
      return Slice.array(others,{
       $:1,
       $0:index+1
      },null);
     }));
    }));
   }));
   Snippets.snippets().Set(a);
   return b.Zero();
  }));
 };
 Snippets.SaveAsClassW=function()
 {
  SC$1.$cctor();
  return SC$1.SaveAsClassW;
 };
 Snippets.hasChangedW=function(snp)
 {
  return View$1.Map(function($1)
  {
   return $1<snp.snpGeneration;
  },Snippets.generation().get_View());
 };
 Snippets.codeStartsW=function()
 {
  SC$1.$cctor();
  return SC$1.codeStartsW;
 };
 Snippets.FsCodeW=function()
 {
  SC$1.$cctor();
  return SC$1.FsCodeW;
 };
 Snippets.codeAndStartsW=function()
 {
  SC$1.$cctor();
  return SC$1.codeAndStartsW;
 };
 Snippets.getHierarchyW=function()
 {
  SC$1.$cctor();
  return SC$1.getHierarchyW;
 };
 Snippets.findSnippetV=function(snpId)
 {
  return new FromView.New(Snippets.findSnippetW(snpId),function(s)
  {
   Snippets.setSnippet(s);
  });
 };
 Snippets.findSnippetW=function(snpId)
 {
  return View$1.Map(function(o)
  {
   var v;
   v=SnippetModule.defaultSnippet();
   return o==null?v:o.$0;
  },Snippets.snippets().TryFindByKeyAsView(snpId));
 };
 Snippets.codeSnippetClassW=function(snpId)
 {
  return View$1.Map(function($1)
  {
   return Unchecked.Equals({
    $:1,
    $0:snpId
   },$1)?"codeSnippet":"";
  },Snippets.codeSnippetIdOV().get_View());
 };
 Snippets.selectedClassW=function(snpId)
 {
  return View$1.Map(function($1)
  {
   return Unchecked.Equals({
    $:1,
    $0:snpId
   },$1)?"selected":"";
  },Snippets.currentSnippetIdOV().get_View());
 };
 Snippets.currentSnippetV=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetV;
 };
 Snippets.codeSnippetW=function()
 {
  SC$1.$cctor();
  return SC$1.codeSnippetW;
 };
 Snippets.currentSnippetW=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetW;
 };
 Snippets.CurrentSnippetIdW=function()
 {
  SC$1.$cctor();
  return SC$1.CurrentSnippetIdW;
 };
 Snippets.isDescendantOf=function(ancId,snpId)
 {
  var o,o$1,prnId;
  return Unchecked.Equals(snpId,ancId)?false:(o=(o$1=(Snippets.getParentIdO())(snpId),o$1==null?null:{
   $:1,
   $0:(prnId=o$1.$0,Unchecked.Equals(prnId,ancId)||Snippets.isDescendantOf(ancId,prnId))
  }),o==null?false:o.$0);
 };
 Snippets.getParentIdO=function()
 {
  SC$1.$cctor();
  return SC$1.getParentIdO;
 };
 Snippets.getParentIdONotMemo=function(snpId)
 {
  var o;
  o=Snippets.snippets().TryFindByKey(snpId);
  return o==null?null:o.$0.snpParentIdO;
 };
 Snippets.getSnippetsGen=function()
 {
  return[(Snippets.snippets())["var"].Get(),Snippets.generation().Get(),Snippets.collapsedV().Get()];
 };
 Snippets.setSnippet=function(snp)
 {
  if(!Unchecked.Equals(snp.snpId.get_Id(),"00000000-0000-0000-0000-000000000000"))
   Snippets.snippets().Append(Snippet.New(snp.snpId,snp.snpName,snp.snpContent,snp.snpParentIdO,snp.snpPredIds,snp.snpProperties,Snippets.generation().Get()+1));
 };
 Snippets.setCurrentSnippetIdO=function(snpIdO)
 {
  Snippets.currentSnippetIdOV().Set(snpIdO);
 };
 Snippets.runReader=function(handle,rm)
 {
  return Result.defaultWith(handle,Snippets.runReaderResult(rm));
 };
 Snippets.runReaderResult=function(rm)
 {
  return ReaderMResult.run(Snippets.snippetsColl(),rm);
 };
 Snippets.iterReader=function(rm)
 {
  ReaderMResult.iter(function(e)
  {
   Snippets.handleError(e);
  },Global.ignore,Snippets.snippetsColl(),rm);
 };
 Snippets.handleError=function(er)
 {
  throw new Global.Error(Global.String(er));
 };
 Snippets.snippetsColl=function()
 {
  return SnippetCollection.New(Snippets.generation().Get(),(Snippets.snippets())["var"].Get(),function(a)
  {
   return Snippets.snippets().TryFindByKey(a);
  },Snippets.predsCache,Snippets.reducCache,Snippets.prepCode);
 };
 Snippets.prepCode=function(snp)
 {
  return Strings.Replace(Strings.Replace(snp.snpContent,"##"+"FSHARPSTATION_ID"+"##",FStation.id()),"##"+"FSHARPSTATION_ENDPOINT"+"##",self.location.href);
 };
 Snippets.clearPredsCache=function()
 {
  (Snippets.clearPreds())();
  (Snippets.clearReduc())();
  (Snippets.clearParent())();
 };
 Snippets.clearParent=function()
 {
  SC$1.$cctor();
  return SC$1.clearParent;
 };
 Snippets.parentCache=function()
 {
  SC$1.$cctor();
  return SC$1.parentCache;
 };
 Snippets.clearReduc=function()
 {
  SC$1.$cctor();
  return SC$1.clearReduc;
 };
 Snippets.reducCache=function()
 {
  SC$1.$cctor();
  return SC$1.reducCache;
 };
 Snippets.clearPreds=function()
 {
  SC$1.$cctor();
  return SC$1.clearPreds;
 };
 Snippets.predsCache=function()
 {
  SC$1.$cctor();
  return SC$1.predsCache;
 };
 Snippets.collapsedV=function()
 {
  SC$1.$cctor();
  return SC$1.collapsedV;
 };
 Snippets.codeSnippetIdOV=function()
 {
  SC$1.$cctor();
  return SC$1.codeSnippetIdOV;
 };
 Snippets.currentSnippetIdOV=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetIdOV;
 };
 Snippets.generation=function()
 {
  SC$1.$cctor();
  return SC$1.generation;
 };
 Snippets.hierarchy=function()
 {
  SC$1.$cctor();
  return SC$1.hierarchy;
 };
 Snippets.snippets=function()
 {
  SC$1.$cctor();
  return SC$1.snippets;
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
 Templating.TemplatesFileName=function()
 {
  SC$1.$cctor();
  return SC$1.TemplatesFileName;
 };
 Templating.rootdir=function()
 {
  SC$1.$cctor();
  return SC$1.rootdir;
 };
 RenderSnippets.render=function()
 {
  var b,S,p,i;
  return(b=(S=RenderSnippets.snippets(),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"snippets",
   $1:S
  })),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.snippetlist(p[0])),(b.i=i,i)))).get_Doc();
 };
 RenderSnippets.snippets$4651$40=function(snpId)
 {
  return function(ev)
  {
   var o;
   ev.Event.preventDefault();
   o=DragDrop.getDragNIdO(snpId);
   o==null?void 0:Snippets.moveNode(o.$0,snpId);
  };
 };
 RenderSnippets.snippets$4650$40=function(snpId)
 {
  return function(ev)
  {
   if(DragDrop.getDragNIdO(snpId)!=null)
    ev.Event.preventDefault();
  };
 };
 RenderSnippets.snippets$4649$40=function(snpId)
 {
  return function(ev)
  {
   DragDrop.setDragNode(snpId);
   ev.Event.stopPropagation();
  };
 };
 RenderSnippets.snippets$4648$40=function(snpId)
 {
  return function()
  {
   Snippets.toggleCollapse(snpId);
  };
 };
 RenderSnippets.snippets$4647$40=function(snpId)
 {
  return function()
  {
   Snippets.togglePredecessor(snpId);
  };
 };
 RenderSnippets.snippets$4646$40=function(snpId)
 {
  var s;
  s=View$1.Map(function(y)
  {
   return""!==y;
  },Snippets.selectedClassW(snpId));
  return function(e)
  {
   return RenderSnippets.scrollIntoView(s,e);
  };
 };
 RenderSnippets.snippets$4645$40=function(snpId)
 {
  return function()
  {
   Snippets.setCurrentSnippetIdO({
    $:1,
    $0:snpId
   });
  };
 };
 RenderSnippets.snippets=function()
 {
  function a(snpId,l)
  {
   var nameW,b,predW,errorW,x,f,s,c,b$1,t,t$1,t$2,t$3,t$4,A,s$1,t$5,P,p,i;
   function g(a$1)
   {
    return a$1?"ErrorMsg":"";
   }
   nameW=(b=View$1.get_Do(),View$1.Bind(function(a$1)
   {
    return View$1.Bind(function(a$2)
    {
     return View$1.Const((a$2?"*":"")+SnippetModule.snippetName(a$1.snpName,a$1.snpContent));
    },Snippets.hasChangedW(a$1));
   },Snippets.findSnippetW(snpId)));
   predW=View$1.Apply(View$1.Map2(function($1,$2)
   {
    return function($3)
    {
     return $1.snpPredIds.Contains(snpId)?"direct-predecessor":$2?"indirect-predecessor":$3?"included-predecessor":"";
    };
   },Snippets.currentSnippetV().get_View(),Snippets.isIndirectPredecessorW(snpId)),Snippets.isIncludedPredecessorW(snpId));
   errorW=(x=FStation.annotationsV().get_View(),View$1.Map((f=(s=(c=snpId.get_Id(),Global.String(c)),function(w)
   {
    return String.contains(s,w);
   }),function(x$1)
   {
    return g(f(x$1));
   }),x));
   return(b$1=(t=(t$1=(t$2=(t$3=(t$4=(A=(s$1=View$1.Map(function(y)
   {
    return""!==y;
   },Snippets.selectedClassW(snpId)),function(e)
   {
    return RenderSnippets.scrollIntoView(s$1,e);
   }),(t$5=(P=Snippets.expandClassW(snpId),ProviderBuilder.Make().WithHole({
    $:2,
    $0:"name",
    $1:nameW
   }).WithHole({
    $:1,
    $0:"indent",
    $1:Global.String(l)
   }).WithHole({
    $:2,
    $0:"parent",
    $1:P
   })).WithHole({
    $:2,
    $0:"predecessor",
    $1:predW
   }).WithHole({
    $:2,
    $0:"selected",
    $1:View$1.Map2(function($1,$2)
    {
     return Strings.concat(" ",List.ofArray([$1,$2]));
    },Snippets.selectedClassW(snpId),Snippets.codeSnippetClassW(snpId))
   }).WithHole({
    $:2,
    $0:"errormsg",
    $1:errorW
   }),t$5.WithHole(Handler$1.EventQ2(t$5.k,"select",function()
   {
    return t$5.i;
   },function()
   {
    Snippets.setCurrentSnippetIdO({
     $:1,
     $0:snpId
    });
   }))).WithHole({
    $:7,
    $0:"afterrender",
    $1:A
   })),t$4.WithHole(Handler$1.EventQ2(t$4.k,"togglepred",function()
   {
    return t$4.i;
   },function()
   {
    Snippets.togglePredecessor(snpId);
   }))),t$3.WithHole(Handler$1.EventQ2(t$3.k,"togglecollapse",function()
   {
    return t$3.i;
   },function()
   {
    Snippets.toggleCollapse(snpId);
   }))),t$2.WithHole(Handler$1.EventQ2(t$2.k,"drag",function()
   {
    return t$2.i;
   },function(ev)
   {
    DragDrop.setDragNode(snpId);
    ev.Event.stopPropagation();
   }))),t$1.WithHole(Handler$1.EventQ2(t$1.k,"dragover",function()
   {
    return t$1.i;
   },function(ev)
   {
    if(DragDrop.getDragNIdO(snpId)!=null)
     ev.Event.preventDefault();
   }))),t.WithHole(Handler$1.EventQ2(t.k,"drop",function()
   {
    return t.i;
   },function(ev)
   {
    var o;
    ev.Event.preventDefault();
    o=DragDrop.getDragNIdO(snpId);
    o==null?void 0:Snippets.moveNode(o.$0,snpId);
   }))),(p=Handler$1.CompleteHoles(b$1.k,b$1.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.snippet(p[0])),(b$1.i=i,i)))).get_Doc();
  }
  return Doc.Convert(function($1)
  {
   return a($1[0],$1[1]);
  },Snippets.getHierarchyW());
 };
 RenderSnippets.scrollIntoView=function(selW,e)
 {
  View$1.Sink(function(s)
  {
   if(s)
    e.scrollIntoViewIfNeeded();
  },selW);
 };
 RenderProperties.render$4688$34=function()
 {
  return function()
  {
   RenderProperties.addProperty();
  };
 };
 RenderProperties.render=function()
 {
  var b,t,P,p,i;
  return(b=(t=(P=RenderProperties.properties(),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"properties",
   $1:P
  })),t.WithHole(Handler$1.EventQ2(t.k,"addproperty",function()
  {
   return t.i;
  },function()
  {
   RenderProperties.addProperty();
  }))),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.propertytable(p[0])),(b.i=i,i)))).get_Doc();
 };
 RenderProperties.properties$4681$33=function(i)
 {
  return function()
  {
   RenderProperties.remProperty(i);
  };
 };
 RenderProperties.properties=function()
 {
  var propsV;
  function setName(i,newName)
  {
   Arrays.set(propsV.Get(),i,[newName,(Arrays.get(propsV.Get(),i))[1]]);
   return propsV.Set(propsV.Get());
  }
  function setValue(i,newVal)
  {
   Arrays.set(propsV.Get(),i,[(Arrays.get(propsV.Get(),i))[0],newVal]);
   return propsV.Set(propsV.Get());
  }
  propsV=Var$1.Lens(Snippets.currentSnippetV(),function($1)
  {
   return $1.snpProperties;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$1.snpName,$1.snpContent,$1.snpParentIdO,$1.snpPredIds,$2,$1.snpGeneration);
  });
  return Doc.Convert(function(i)
  {
   var nameV,valueV,b,t,p,i$1;
   nameV=new FromView.New(View$1.Map(function($1)
   {
    return(Arrays.get($1,i))[0];
   },propsV.get_View()),function($1)
   {
    return setName(i,$1);
   });
   valueV=new FromView.New(View$1.Map(function($1)
   {
    return(Arrays.get($1,i))[1];
   },propsV.get_View()),function($1)
   {
    return setValue(i,$1);
   });
   return(b=(t=ProviderBuilder.Make().WithHole({
    $:8,
    $0:"name",
    $1:nameV
   }).WithHole({
    $:8,
    $0:"value",
    $1:valueV
   }),t.WithHole(Handler$1.EventQ2(t.k,"remove",function()
   {
    return t.i;
   },function()
   {
    RenderProperties.remProperty(i);
   }))),(p=Handler$1.CompleteHoles(b.k,b.h,[["name",0],["value",0]]),(i$1=new TemplateInstance.New(p[1],FSharpStation_Templates.property(p[0])),(b.i=i$1,i$1)))).get_Doc();
  },View$1.Map(function($1)
  {
   return Arrays.ofSeq(Operators$4.range(0,Arrays.length($1)-1));
  },propsV.get_View()));
 };
 RenderProperties.remProperty=function(i)
 {
  var i$1;
  Snippets.currentSnippetV().Set((i$1=Snippets.currentSnippetV().Get(),Snippet.New(i$1.snpId,i$1.snpName,i$1.snpContent,i$1.snpParentIdO,i$1.snpPredIds,Slice.array(Snippets.currentSnippetV().Get().snpProperties,{
   $:1,
   $0:0
  },{
   $:1,
   $0:i-1
  }).concat(Slice.array(Snippets.currentSnippetV().Get().snpProperties,{
   $:1,
   $0:i+1
  },null)),i$1.snpGeneration)));
 };
 RenderProperties.addProperty=function()
 {
  var i;
  Snippets.currentSnippetV().Set((i=Snippets.currentSnippetV().Get(),Snippet.New(i.snpId,i.snpName,i.snpContent,i.snpParentIdO,i.snpPredIds,Snippets.currentSnippetV().Get().snpProperties.concat([["",""]]),i.snpGeneration)));
 };
 HoverProvider=Monaco$1.HoverProvider=Runtime.Class({
  provideHover:function(model,pos,token)
  {
   var b;
   return Promise.ofAsyncResult((b=Monads.asyncResult(),b.Run(b.Delay(function()
   {
    var p;
    p=Monaco$1.getIndentAndFirst();
    return b.Bind$1(Calls.toolTip(Monaco$1.fileName(),pos.lineNumber+p[1],pos.column+p[0],""),function(a)
    {
     return Extensions["AsyncResultBuilder.Bind"](b,Monaco$1.overDescriptions(a[0]),function(a$1)
     {
      return b.Return(Hover.New(Arrays.ofSeq(Seq$1.map(function(d)
      {
       return MarkDownString.New((Library.print(d),d),true);
      },a$1)),null));
     });
    });
   }))));
  }
 },Obj,HoverProvider);
 HoverProvider.New=Runtime.Ctor(function(ed)
 {
  Obj.New.call(this);
 },HoverProvider);
 CompletionItemProvider=Monaco$1.CompletionItemProvider=Runtime.Class({
  resolveCompletionItem:function(item,token)
  {
   var b;
   function f(a)
   {
    return a.$==1?Operators$4.FailWith((function($1)
    {
     return function($2)
     {
      return $1(FSharpStation_GeneratedPrintf.p$11($2));
     };
    }(Global.id))(a.$0)):a.$0;
   }
   function g(v)
   {
    return Concurrency.Return(v);
   }
   return Promise$1.OfAsync(Concurrency.Bind((b=Monads.asyncResult(),b.Run(b.Delay(function()
   {
    return b.Bind$1(Calls.helpText(item.label),function(a)
    {
     return b.Return(CompletionItem.New(item.kind,item.label,Strings.concat("\n",Seq$1.collect(function(d)
     {
      return List.ofSeq(Seq$1.delay(function()
      {
       return Seq$1.append(!(!d.Signature)?[d.Signature]:[],Seq$1.delay(function()
       {
        return Seq$1.append(!(!d.Comment)?[d.Comment]:[],Seq$1.delay(function()
        {
         return!(!d.Footer)?[d.Footer]:[];
        }));
       }));
      }));
     },Seq$1.collect(Global.id,a[0].Overloads)))));
    });
   }))),function(x)
   {
    return g(f(x));
   }));
  },
  provideCompletionItems:function(model,pos,token,context)
  {
   var b;
   function f(a)
   {
    return a.$==1?Operators$4.FailWith((function($1)
    {
     return function($2)
     {
      return $1(FSharpStation_GeneratedPrintf.p$11($2));
     };
    }(Global.id))(a.$0)):a.$0;
   }
   function g(v)
   {
    return Concurrency.Return(v);
   }
   return Promise$1.OfAsync(Concurrency.Bind((b=Monads.asyncResult(),b.Run(b.Delay(function()
   {
    var p,indent;
    p=Monaco$1.getIndentAndFirst();
    indent=p[0];
    return b.Bind$1(Calls.completion(Strings.replicate(indent," ")+model.getLineContent(pos.lineNumber),true,Monaco$1.fileName(),pos.lineNumber+p[1],pos.column+indent,"Contains"),function(a)
    {
     return b.Return(Arrays.map(function(comp)
     {
      return CompletionItem.New(Monaco$1.convertGlyphChar(comp.GlyphChar),comp.Name,"");
     },a[0]));
    });
   }))),function(x)
   {
    return g(f(x));
   }));
  }
 },Obj,CompletionItemProvider);
 CompletionItemProvider.New=Runtime.Ctor(function(ed)
 {
  Obj.New.call(this);
 },CompletionItemProvider);
 DefinitionProvider=Monaco$1.DefinitionProvider=Runtime.Class({
  provideDefinition:function(model,pos,token)
  {
   var b;
   function f(a)
   {
    return a.$==1?Operators$4.FailWith((function($1)
    {
     return function($2)
     {
      return $1(FSharpStation_GeneratedPrintf.p$11($2));
     };
    }(Global.id))(a.$0)):a.$0;
   }
   function g(v)
   {
    return Concurrency.Return(v);
   }
   return Promise$1.OfAsync(Concurrency.Bind((b=Monads.asyncResult(),b.Run(b.Delay(function()
   {
    var p;
    p=Monaco$1.getIndentAndFirst();
    return b.Bind$1(Calls.findDeclaration(Monaco$1.fileName(),pos.lineNumber+p[1],pos.column+p[0],""),function(a)
    {
     var decl,p$1,snpId,indent2,first2,uri,a$1,c;
     decl=a[0];
     p$1=Monaco$1.getSnipIdIndentAndFirst(decl.Line);
     snpId=p$1[0];
     indent2=p$1[1];
     first2=p$1[2];
     uri=(a$1="snpId:"+(c=snpId.get_Id(),Global.String(c)),self.monaco.Uri.parse(a$1));
     Monaco$1.getSnippetModel(snpId);
     return b.Return(Location.New(Range.New(decl.Column-indent2,decl.Column-indent2,decl.Line-first2,decl.Line-first2),uri));
    });
   }))),function(x)
   {
    return g(f(x));
   }));
  }
 },Obj,DefinitionProvider);
 DefinitionProvider.New=Runtime.Ctor(function(ed)
 {
  Obj.New.call(this);
 },DefinitionProvider);
 MonacoOptions.New=function(fontSize,lineHeight)
 {
  return{
   fontSize:fontSize,
   lineHeight:lineHeight
  };
 };
 ITextModelService.New=function(setEditor,createModelReference)
 {
  return{
   setEditor:setEditor,
   createModelReference:createModelReference
  };
 };
 Monaco$1["goto"]=function(codeId,line,col)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   var m,o;
   m=(o=Monaco$1.editorConfigO(),o==null?null:o.$0.editorO);
   return m!=null&&m.$==1?Concurrency.Bind(Monaco$1.gotoEditor(m.$0,codeId,line,col),function()
   {
    return Concurrency.Return(null);
   }):Concurrency.Zero();
  });
 };
 Monaco$1.getEditorConfigO=function()
 {
  var v;
  v={
   $:1,
   $0:Monaco$1.monacoNew(Var$1.Lens(Snippets.currentSnippetV(),function($1)
   {
    return $1.snpContent;
   },function($1,$2)
   {
    return Snippet.New($1.snpId,$1.snpName,$2,$1.snpParentIdO,$1.snpPredIds,$1.snpProperties,$1.snpGeneration);
   }),{
    $:1,
    $0:View$1.Map2(Monaco$1.transformAnnotations,Snippets.currentSnippetW(),FStation.annotationsV().get_View())
   },null,null)
  };
  Monaco$1.set_editorConfigO(v);
  return v;
 };
 Monaco$1.editorConfigO=function()
 {
  SC$1.$cctor();
  return SC$1.editorConfigO;
 };
 Monaco$1.set_editorConfigO=function($1)
 {
  SC$1.$cctor();
  SC$1.editorConfigO=$1;
 };
 Monaco$1.parse=function(code,starts)
 {
  var b;
  AsyncResult.iterA(function(v)
  {
   Library.print(v);
  },function()
  {
   Library.print();
  },(b=Monads.asyncResult(),b.Run(b.Delay(function()
  {
   var a,lines;
   a="Parsing...\n"+String.skipFirstLine(FStation.annotationsV().Get());
   FStation.annotationsV().Set(a);
   Monaco$1.startsV().Set(starts);
   lines=String.splitByChar("\n",code);
   Monaco$1.set_fileName(FsCodeModule.getSourceDir(FStation.srcDir(),lines)+"/"+FStation.id()+".fsx");
   return b.Bind$1(Calls.parseCode(Monaco$1.fileName(),lines,true,0),function(a$1)
   {
    var a$2;
    a$2=Strings.concat("\n",Seq$1.append(List.ofArray(["Parsed!"]),Seq$1.map(function(v)
    {
     var p,x,indent,first,c;
     function p$1(a$3,a$4)
     {
      return v.StartLine>a$4[1]&&v.StartLine<=a$4[2];
     }
     p=(x=Seq$1.tryFind(function($1)
     {
      return p$1($1[0],$1[1]);
     },starts),(Monaco$1.defaultStart())(x));
     indent=p[1][0];
     first=p[1][1];
     return((((((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
     {
      return $1(Utils.toSafe($2)+" ("+Global.String($3)+", "+Global.String($4)+") - ("+Global.String($5)+", "+Global.String($6)+") "+Utils.toSafe($7)+"("+Utils.toSafe($8)+") \""+Utils.toSafe($9)+": "+Utils.toSafe($10)+"\".");
     },10))(Global.id))(v.Severity==="Error"?"Err":"Warn"))(v.StartLine-first))(v.StartColumn-indent))(v.EndLine-first))(v.EndColumn-indent))(p[0][1]))((c=p[0][0].get_Id(),Global.String(c))))(v.Subcategory))(v.Message);
    },a$1[0].Errors)));
    FStation.annotationsV().Set(a$2);
    Seq$1.iter(function(v)
    {
     Library.print(v);
    },a$1[1]);
    return b.Zero();
   });
  }))));
 };
 Monaco$1.monacoNew=function(_var,annotationsWO,showToolTipO,getHintsO)
 {
  var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,r,config,m,n;
  config=Monaco.newVar(_var);
  $6=config.editorO;
  $7=Monaco$1.newPojo([["fontSize",12],["lineHeight",14]]);
  m=Global.require("vs/editor/standalone/browser/standaloneServices");
  n=new m.StaticServices.codeEditorService._factory();
  n.openCodeEditor=Monaco$1.openCodeEditor;
  r=n;
  $12=["codeEditorService",r];
  $10=[$12,["textModelResolverService",Monaco$1.textModelResolverService()]];
  $8=Monaco$1.newPojo($10);
  $2=MonacoConfig.New(config["var"],config.onChange,config.onRender,$6,config.disabled,$7,$8);
  return Monaco.onRender(function(ed)
  {
   var _m,hp,cp,dp;
   function x(a,a$1,a$2)
   {
    return hp.provideHover(a,a$1,a$2);
   }
   function x$1(a,a$1,a$2,a$3)
   {
    return cp.provideCompletionItems(a,a$1,a$2,a$3);
   }
   function x$2(a,a$1)
   {
    return cp.resolveCompletionItem(a,a$1);
   }
   function x$3(a,a$1,a$2)
   {
    return dp.provideDefinition(a,a$1,a$2);
   }
   _m=ed.getModel();
   self.monaco.editor.setModelLanguage(_m,"fsharp");
   self.monaco.editor.setTheme("vs");
   hp=new HoverProvider.New(ed);
   cp=new CompletionItemProvider.New(ed);
   dp=new DefinitionProvider.New(ed);
   Library.print(function($13)
   {
    return x($13[0],$13[1],$13[2]);
   });
   Library.print(function($13)
   {
    return x$1($13[0],$13[1],$13[2],$13[3]);
   });
   Library.print(function($13)
   {
    return x$2($13[0],$13[1]);
   });
   Library.print(function($13)
   {
    return x$3($13[0],$13[1],$13[2]);
   });
   self.monaco.languages.registerHoverProvider("fsharp",hp);
   self.monaco.languages.registerCompletionItemProvider("fsharp",cp);
   self.monaco.languages.registerDefinitionProvider("fsharp",dp);
   annotationsWO==null?void 0:View$1.Sink(function(ms)
   {
    var _m$1;
    _m$1=ed.getModel();
    self.monaco.editor.setModelMarkers(_m$1,"annotations",ms);
   },annotationsWO.$0);
  },$2);
 };
 Monaco$1.textModelResolverService=function()
 {
  var editorO;
  editorO=null;
  return ITextModelService.New(function(e)
  {
   editorO={
    $:1,
    $0:e
   };
  },function(uri)
  {
   var b;
   return Promise$1.OfAsync((b=null,Concurrency.Delay(function()
   {
    var $1,r,_v,m;
    _v=Monaco$1.getSnippetModel(uri);
    m=self.require("vs/base/common/lifecycle");
    r=new m.ImmortalReference(_v);
    return Concurrency.Return(r);
   })));
  });
 };
 Monaco$1.openCodeEditor=function(input,ed,sideBySide)
 {
  var b;
  return Promise$1.OfAsync((b=null,Concurrency.Delay(function()
  {
   var m,a;
   m=input.resource.path;
   a=(ParseO.Guid())(m);
   return a!=null&&a.$==1?Concurrency.Bind(Monaco$1.gotoEditor(ed,new SnippetId({
    $:0,
    $0:a.$0
   }),input.options.selection.startLineNumber,input.options.selection.startColumn),function()
   {
    return Concurrency.Return(ed);
   }):Concurrency.Return(null);
  })));
 };
 Monaco$1.gotoEditor=function(ed,codeId,line,col)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   Snippets.expandParents(codeId);
   Snippets.setCurrentSnippetIdO({
    $:1,
    $0:codeId
   });
   return Concurrency.Bind(Concurrency.Sleep(200),function()
   {
    ed.focus();
    ed.setPosition(Position.New(col,line));
    ed.revealPositionInCenter(Position.New(col,line));
    return Concurrency.Zero();
   });
  });
 };
 Monaco$1.newPojo=function(props)
 {
  var pojo,f;
  function f$1(a,a$1)
  {
   return function(p)
   {
    return Monaco$1.addProp(a,a$1,p);
   };
  }
  function g(v)
  {
  }
  pojo={};
  Seq$1.iter((f=function(b)
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
 Monaco$1.addProp=function(p,p$1,pojo)
 {
  pojo[p]=p$1;
  return pojo;
 };
 Monaco$1.transformAnnotations=function(snp,msgs)
 {
  var rex,a;
  function c(ty,fl,fc,tl,tc,guid,msg)
  {
   var o;
   return!Unchecked.Equals((o=(ParseO.parseGuidO())(guid),o==null?null:{
    $:1,
    $0:new SnippetId({
     $:0,
     $0:o.$0
    })
   }),{
    $:1,
    $0:snp.snpId
   })?null:{
    $:1,
    $0:MarkerData.New(fc,tc,fl,tl,ty==="Err"?8:ty==="Warn"?4:ty==="Hint"?1:2,msg)
   };
  }
  rex="(Err|Warn|Info|Hint) \\((\\d+)\\,\\s*(\\d+)\\) - \\((\\d+)\\,\\s*(\\d+)\\).*\\("+LibraryJS.rexGuid()+"\\) \"([^\"]+?)\"\\.";
  return Arrays.choose(function($1)
  {
   return c($1[0],$1[1],$1[2],$1[3],$1[4],$1[5],$1[6]);
  },Arrays.choose(function(v)
  {
   var $1,a$1,t;
   return(a$1=LibraryJS.REGEX$1(rex,"",v),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===8)&&($1=[Arrays.get(a$1.$0,3),Arrays.get(a$1.$0,2),Arrays.get(a$1.$0,6),Arrays.get(a$1.$0,7),Arrays.get(a$1.$0,5),Arrays.get(a$1.$0,4),Arrays.get(a$1.$0,1)],true)))?{
    $:1,
    $0:[$1[6],Operators$4.toInt(Global.Number($1[1])),Operators$4.toInt(Global.Number($1[0])),Operators$4.toInt(Global.Number($1[5])),Operators$4.toInt(Global.Number($1[4])),$1[2],$1[3]]
   }:null;
  },(a=LibraryJS.REGEX$1(rex,"g",msgs),a!=null&&a.$==1?a.$0:[])));
 };
 Monaco$1.convertGlyphChar=function(a)
 {
  return a==="C"?6:a==="E"?12:a==="S"?11:a==="I"?7:a==="N"?8:a==="M"?1:a==="P"?9:a==="F"?4:a==="T"?6:a==="K"?13:0;
 };
 Monaco$1.fileName=function()
 {
  SC$1.$cctor();
  return SC$1.fileName;
 };
 Monaco$1.set_fileName=function($1)
 {
  SC$1.$cctor();
  SC$1.fileName=$1;
 };
 Monaco$1.overDescriptions=function(descs)
 {
  return Async.sequenceSeq(Seq$1.collect(function(d)
  {
   return List.ofSeq(Seq$1.delay(function()
   {
    return Seq$1.append(!(!d.Signature)?[Concurrency.Return("```\n"+d.Signature+"\n```")]:[],Seq$1.delay(function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return Seq$1.append(!(!d.Comment)?[Concurrency.Bind((new AjaxRemotingProvider.New()).Async("FSharpStation:FsRoot.FSharpStation+Markdown.createCommentBlock:-1840423385",[d.Comment]),function(x)
     {
      return g(Monaco$1.fixMarkDown(x));
     })]:[],Seq$1.delay(function()
     {
      return!(!d.Footer)?[Concurrency.Return(Monaco$1.fixMarkDown(d.Footer))]:[];
     }));
    }));
   }));
  },Seq$1.collect(Global.id,descs)));
 };
 Monaco$1.fixMarkDown=function(v)
 {
  return Strings.concat("\n\n",Seq$1.map(function(l)
  {
   var i;
   i=Seq$1.length(Seq$1.takeWhile(function(y)
   {
    return" "===y;
   },l));
   return Strings.replicate(i,"&nbsp;")+Slice.string(l,{
    $:1,
    $0:i
   },null);
  },Seq$1.map(function(l)
  {
   return Strings.Replace(l,"\u0009","- ");
  },String.splitByChar("\n",v))));
 };
 Monaco$1.getSnippetModel=function(sid)
 {
  var x,_s,c;
  x=(_s="snpId:"+(c=sid.get_Id(),Global.String(c)),self.monaco.Uri.parse(_s));
  return Monaco$1.getModelUri(Snippets.runReader(function(x$1)
  {
   return Operators$4.FailWith(Global.String(x$1));
  },SnippetModule.snippetRm(sid)).snpContent,x);
 };
 Monaco$1.getModelUri=function(txt,uri)
 {
  var model,o,model$1;
  model=(o=(model$1=self.monaco.editor.getModel(uri),!model$1?null:{
   $:1,
   $0:model$1
  }),o==null?self.monaco.editor.createModel("","fsharp",uri):o.$0);
  model.getValue()!==txt?model.setValue(txt):void 0;
  return model;
 };
 Monaco$1.getSnipIdIndentAndFirst=function(line)
 {
  var p,x;
  function p$1(a,a$1)
  {
   return line>=a$1[1]&&line<=a$1[2];
  }
  p=(x=Seq$1.tryFind(function($1)
  {
   return p$1($1[0],$1[1]);
  },Monaco$1.startsV().Get()),(Monaco$1.defaultStart())(x));
  return[p[0][0],p[1][0],p[1][1]];
 };
 Monaco$1.getIndentAndFirst=function()
 {
  var currId,p,x,f;
  function f$1(t)
  {
   return t[0];
  }
  function g(t)
  {
   return t[0];
  }
  function g$1(y)
  {
   return Unchecked.Equals(currId,y);
  }
  currId=Snippets.currentSnippetV().Get().snpId;
  p=(x=Seq$1.tryFind((f=function(x$1)
  {
   return g(f$1(x$1));
  },function(x$1)
  {
   return g$1(f(x$1));
  }),Monaco$1.startsV().Get()),(Monaco$1.defaultStart())(x));
  return[p[1][0],p[1][1]];
 };
 Monaco$1.defaultStart=function()
 {
  SC$1.$cctor();
  return SC$1.defaultStart;
 };
 Monaco$1.startsV=function()
 {
  SC$1.$cctor();
  return SC$1.startsV;
 };
 JumpTo.jumpToRef=function(e)
 {
  var v,s;
  function c(line,from,to_)
  {
   return s>=from&&s<to_?{
    $:1,
    $0:line
   }:null;
  }
  v=e.value;
  s=e.selectionStart;
  JumpTo.jumpToLine(Seq$1.pick(function($1)
  {
   return c($1[0],$1[1],$1[2]);
  },(Seq$1.mapFold(function(total,line)
  {
   return[[line,total,total+line.length+1],total+line.length+1];
  },0,Strings.SplitChars(v,["\n"],0)))[0]));
 };
 JumpTo.jumpToLine=function(a)
 {
  var a$1,t,col,guid,line;
  a$1=LibraryJS.REGEX$1(JumpTo.rexGuid(),"",a);
  a$1!=null&&a$1.$==1?(t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===6)?(col=Arrays.get(a$1.$0,2),guid=Arrays.get(a$1.$0,5),line=Arrays.get(a$1.$0,1),Concurrency.Start(Monaco$1["goto"](new SnippetId({
   $:0,
   $0:guid
  }),Operators$4.toInt(Global.Number(line)),Operators$4.toInt(Global.Number(col))),null)):void 0:void 0;
 };
 JumpTo.rexGuid=function()
 {
  SC$1.$cctor();
  return SC$1.rexGuid$1;
 };
 Model$1.New=function(snippets,generation,collapsed)
 {
  return{
   snippets:snippets,
   generation:generation,
   collapsed:collapsed
  };
 };
 Serializer$1.serModel=function()
 {
  SC$1.$cctor();
  return SC$1.serModel;
 };
 Serializer$1.getModel=function(snippets,gen,coll)
 {
  return Model$1.New(Arrays.ofSeq(snippets),gen,coll);
 };
 Serializer$1.serSnippet=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippet;
 };
 Serializer$1.serSnippetId=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippetId;
 };
 LoadSave.saveAs=function()
 {
  var name,m,x,t;
  name=(m=Seq$1.last(Strings.SplitChars(LoadSave.fileName().Get(),["/","\\"],0)),m===""?"noname.snippets":m);
  Global.saveAs(new Global.Blob([(x=(t=Snippets.getSnippetsGen(),Serializer$1.getModel(t[0],t[1],t[2])),(Serializer$1.serModel())[0](x))],{
   type:"text/plain;charset=utf-8"
  }),name);
  Snippets.updateGeneration();
 };
 LoadSave.loadTextFile=function(element)
 {
  var files,reader;
  if(LoadSave.canLoad())
   {
    files=element.files;
    files.length>0?(reader=new Global.FileReader(),reader.onload=function(e)
    {
     return LoadSave.parseText(e.target.result);
    },LoadSave.fileName().Set(files.item(0).name),reader.readAsText(files.item(0))):void 0;
   }
 };
 LoadSave.parseText=function(txt)
 {
  var mdl,x;
  try
  {
   mdl=(x=JSON.parse(txt),(Serializer$1.serModel())[1](x));
   Snippets.setSnippetsGen(mdl.snippets,mdl.collapsed);
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
 LoadSave.canLoad=function()
 {
  return Unchecked.Equals(View$1.TryGet(Snippets.SaveAsClassW()),{
   $:1,
   $0:""
  })||Global.confirm("Changes have not been saved, do you really want to load?");
 };
 LoadSave.fileName=function()
 {
  SC$1.$cctor();
  return SC$1.fileName$1;
 };
 Importer.importFile=function(element)
 {
  var files,reader;
  if(LoadSave.canLoad())
   {
    files=element.files;
    files.length>0?(reader=new Global.FileReader(),reader.onload=function(e)
    {
     return Importer.parseText(e.target.result);
    },reader.readAsText(files.item(0))):void 0;
   }
 };
 Importer.parseText=function(txt)
 {
  var x;
  try
  {
   Snippets.setSnippetsGen((x=JSON.parse(txt),(Importer.serSnippets())[1](x)),new FSharpSet.New$1(null));
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
 Importer.serSnippets=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippets;
 };
 Importer.serSnippet2=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippet2;
 };
 Importer.serSnippetId2=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippetId2;
 };
 MainProgram.mainProgram=function()
 {
  var b;
  AppFramework.plugIns().Append(PlugIn.New("FSharpStation",[AppFramework.newVar("fileName",LoadSave.fileName()),AppFramework.newVar("SnippetName",Var$1.Lens(Snippets.currentSnippetV(),function($1)
  {
   return $1.snpName;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$2,$1.snpContent,$1.snpParentIdO,$1.snpPredIds,$1.snpProperties,$1.snpGeneration);
  })),AppFramework.newVar("Content",Var$1.Lens(Snippets.currentSnippetV(),function($1)
  {
   return $1.snpContent;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$1.snpName,$2,$1.snpParentIdO,$1.snpPredIds,$1.snpProperties,$1.snpGeneration);
  })),AppFramework.newVar("Output",MainProgram.outputMsgs()),AppFramework.newVar("Parser",FStation.annotationsV())],[AppFramework.newViw("FsCode",Snippets.FsCodeW()),AppFramework.newViw("SaveNeeded",Snippets.SaveAsClassW())],[AppFramework.newDoc("mainDoc",Lazy.Create(MainProgram.mainDoc)),AppFramework.newDoc("editor",Lazy.Create(function()
  {
   var x,o,v;
   return Doc.Element("div",[],[(x=(o=Monaco$1.getEditorConfigO(),o==null?null:{
    $:1,
    $0:Monaco.render(o.$0)
   }),(v=Doc.get_Empty(),x==null?v:x.$0))]);
  })),AppFramework.newDoc("Snippets",Lazy.Create(RenderSnippets.render)),AppFramework.newDoc("Properties",Lazy.Create(RenderProperties.render)),AppFramework.newDoc("ButtonsRight",Lazy.Create(MainProgram.buttonsRight))],[AppFramework.newAct("AddSnippet",function()
  {
   Snippets.newSnippet();
  }),AppFramework.newAct("RemoveSnippet",function()
  {
   MainProgram.deleteSnippet();
  }),AppFramework.newAct("IndentIn",function()
  {
   Snippets.indentIn();
  }),AppFramework.newAct("IndentOut",function()
  {
   Snippets.indentOut();
  }),AppFramework.newAct("AddProperty",function()
  {
   RenderProperties.addProperty();
  }),AppFramework.newAct("SaveAs",function()
  {
   LoadSave.saveAs();
  }),AppFramework.newAct("RunFS",function()
  {
   MainProgram.runFsCode();
  }),AppFramework.newActF("LoadFile",{
   $:1,
   $0:function(o)
   {
    LoadSave.loadTextFile(o);
   },
   $1:"FileElement"
  }),AppFramework.newActF("Import",{
   $:1,
   $0:function(o)
   {
    Importer.importFile(o);
   },
   $1:"FileElement"
  }),AppFramework.newActF("JumpTo",{
   $:1,
   $0:function(o)
   {
    JumpTo.jumpToRef(o);
   },
   $1:"textarea"
  })],[]));
  LayoutEngineModule.addLayout(LayoutEngineModule.newLyt("FStationLyt",(String.unindentStr())("\n                    double           horizontal  0-50-100 AppFramework.AppFwkClient menuEditor\n        \n                    menuEditor       horizontal  65       menuLogo                  editorMessages\n                    menuLogo         vertical    350      logo                      menu\n                    logo             span       \"margin:0; color:gray; font-size: 55px; font-weight:530\" \"F# Station\"\n                    editorMessages   horizontal 10-83-100 editorButtons             messages\n                    messages         vertical   0-50-100  messagesLeft              messagesRight\n                    editorButtons    vertical -200 snippetsSnippet buttons\n                    buttons div      \"overflow: hidden; display: grid; grid-template-columns: 100%; grid-template-rows: repeat(15, calc(100% / 15)); bxackground-color: #eee; box-sizing: border-box; padding : 5px; grid-gap: 5px; margin-right: 21px\" btnSaveAs none x btnAddSnippet btnDeleteSnippet btnIndentIn btnIndentOut none x btnRunFS\n                    snippetsSnippet  vertical   0-20-100  FSharpStation.Snippets    editorProperties\n                    editorProperties vertical   0-100-100 snippet                   properties\n                    properties       div        \"\"        FSharpStation.Properties\n                    snippet          horizontal 35        Name                      FSharpStation.editor\n                    menu             span  \"\" btnLoad btnImport\n                    \n                    btnSaveAs        button FSharpStation.SaveAs         \"class=btn ${FSharpStation.SaveNeeded}\" \"Save as...    \"\n                    btnAddSnippet    button FSharpStation.AddSnippet     \"\"                  \"Add Snippet   \"\n                    btnDeleteSnippet button FSharpStation.DeleteSnippet  \"\"                  \"Delete Snippet\"\n                    btnIndentIn      button FSharpStation.IndentIn       \"\"                  \"Indent In  >> \"\n                    btnIndentOut     button FSharpStation.IndentOut      \"\"                  \"Indent Out << \"\n                    btnRunFS         button FSharpStation.RunFS          \"\"                  \"Run F#        \"\n         \n                    messagesLeft     wcomp-tabstrip                      \"\"                  Output FsCode\n                    messagesRight    wcomp-tabstrip                      \"\"                  Parser\n         \n                    Output           textarea  FSharpStation.Output      \"tabname=Output ; placeholder=Output messages ; spellcheck=false\" \n                    FsCode           textarea  FSharpStation.FsCode      \"tabname=F# Code; placeholder=F# Code         ; spellcheck=false\" \n                    Parser           textarea  FSharpStation.Parser      \"tabname=Parser ; placeholder=Parser messages; dblclick=${FSharpStation.JumpTo} ; spellcheck=false\" \n                    Name             Doc       InputLabel                \"\"     \"Name:\"        FSharpStation.SnippetName\n                    btnLoad          Doc       InputFile                 \"\"     \"Load File...\" FSharpStation.LoadFile  FileName\n                    btnImport        Doc       InputFile                 \"\"     \"Import...\"    FSharpStation.Import    \"\"\n                    FileName         div                                 \"class=form-control\"  FSharpStation.fileName\n                ")));
  AppFramework.mainDocV().Set("FStationLyt.menuEditor");
  return Doc.Async((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Monaco.loader(),function()
   {
    var x,o,v;
    x=(o=Monaco$1.getEditorConfigO(),o==null?null:{
     $:1,
     $0:Monaco.render(o.$0)
    });
    v=Doc.get_Empty();
    x==null?void 0:void 0;
    return Concurrency.Return(AppFramework.getMainDoc().f());
   });
  })));
 };
 MainProgram.mainDoc$5284$78=Global.id;
 MainProgram.mainDoc$5276$39=function()
 {
  return function(ev)
  {
   JumpTo.jumpToRef(ev.Target);
  };
 };
 MainProgram.mainDoc$5275$39=function()
 {
  return function(ev)
  {
   ev.Target.value="";
  };
 };
 MainProgram.mainDoc$5274$39=function()
 {
  return function(ev)
  {
   Importer.importFile(ev.Target);
  };
 };
 MainProgram.mainDoc$5273$39=function()
 {
  return function(ev)
  {
   ev.Target.value="";
  };
 };
 MainProgram.mainDoc$5272$39=function()
 {
  return function(ev)
  {
   LoadSave.loadTextFile(ev.Target);
  };
 };
 MainProgram.mainDoc=function()
 {
  var tmp,t,t$1,t$2,t$3,t$4,p,i;
  tmp=MainProgram.hookDoc("FSharpStation","ButtonsRight",function(tmp$1,a)
  {
   return tmp$1.WithHole({
    $:0,
    $0:"buttonsright",
    $1:a
   });
  },MainProgram.hookDoc("FSharpStation","Properties",function(tmp$1,a)
  {
   return tmp$1.WithHole({
    $:0,
    $0:"properties",
    $1:a
   });
  },MainProgram.hookDoc("FSharpStation","Snippets",function(tmp$1,a)
  {
   return tmp$1.WithHole({
    $:0,
    $0:"snippets",
    $1:a
   });
  },MainProgram.hookDoc("FSharpStation","editor",function(tmp$1,a)
  {
   return tmp$1.WithHole({
    $:0,
    $0:"codeeditor",
    $1:a
   });
  },MainProgram.hookAct("FSharpStation","SaveAs",function(tmp$1,a)
  {
   return tmp$1.WithHole(Handler$1.EventQ2(tmp$1.k,"saveas",function()
   {
    return tmp$1.i;
   },a));
  },MainProgram.hookViw("FSharpStation","SaveNeeded",function(tmp$1,a)
  {
   return tmp$1.WithHole({
    $:2,
    $0:"saveasclass",
    $1:a
   });
  },MainProgram.hookViw("FSharpStation","FSCode",function(tmp$1,vw)
  {
   return tmp$1.WithHole({
    $:8,
    $0:"fscode",
    $1:new FromView.New(vw,Global.ignore)
   });
  },MainProgram.hookVar("FSharpStation","Parser",function(tmp$1,a)
  {
   return tmp$1.WithHole({
    $:8,
    $0:"parser",
    $1:a
   });
  },MainProgram.hookVar("FSharpStation","Output",function(tmp$1,a)
  {
   return tmp$1.WithHole({
    $:8,
    $0:"output",
    $1:a
   });
  },MainProgram.hookVar("FSharpStation","SnippetName",function(tmp$1,a)
  {
   return tmp$1.WithHole({
    $:8,
    $0:"name",
    $1:a
   });
  },MainProgram.hookVar("FSharpStation","fileName",function(tmp$1,a)
  {
   return tmp$1.WithHole({
    $:8,
    $0:"filename",
    $1:a
   });
  },(t=(t$1=(t$2=(t$3=(t$4=ProviderBuilder.Make(),t$4.WithHole(Handler$1.EventQ2(t$4.k,"loadfilechanged",function()
  {
   return t$4.i;
  },function(ev)
  {
   LoadSave.loadTextFile(ev.Target);
  }))),t$3.WithHole(Handler$1.EventQ2(t$3.k,"loadfileclear",function()
  {
   return t$3.i;
  },function(ev)
  {
   ev.Target.value="";
  }))),t$2.WithHole(Handler$1.EventQ2(t$2.k,"importfilechanged",function()
  {
   return t$2.i;
  },function(ev)
  {
   Importer.importFile(ev.Target);
  }))),t$1.WithHole(Handler$1.EventQ2(t$1.k,"importfileclear",function()
  {
   return t$1.i;
  },function(ev)
  {
   ev.Target.value="";
  }))),t.WithHole(Handler$1.EventQ2(t.k,"jumpref",function()
  {
   return t.i;
  },function(ev)
  {
   JumpTo.jumpToRef(ev.Target);
  }))))))))))))));
  return(p=Handler$1.CompleteHoles(tmp.k,tmp.h,[["filename",0],["name",0],["output",0],["fscode",0],["parser",0]]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.layout(p[0])),(tmp.i=i,i))).get_Doc();
 };
 MainProgram.buttonsRight$5258$74=Global.id;
 MainProgram.buttonsRight$5257$74=Global.id;
 MainProgram.buttonsRight$5256$74=Global.id;
 MainProgram.buttonsRight$5255$74=Global.id;
 MainProgram.buttonsRight$5254$74=Global.id;
 MainProgram.buttonsRight=function()
 {
  var tmp,p,i;
  tmp=MainProgram.hookAct("FSharpStation","RunFS",function(tmp$1,a)
  {
   return tmp$1.WithHole(Handler$1.EventQ2(tmp$1.k,"runfs",function()
   {
    return tmp$1.i;
   },a));
  },MainProgram.hookAct("FSharpStation","IndentOut",function(tmp$1,a)
  {
   return tmp$1.WithHole(Handler$1.EventQ2(tmp$1.k,"indentout",function()
   {
    return tmp$1.i;
   },a));
  },MainProgram.hookAct("FSharpStation","IndentIn",function(tmp$1,a)
  {
   return tmp$1.WithHole(Handler$1.EventQ2(tmp$1.k,"indentin",function()
   {
    return tmp$1.i;
   },a));
  },MainProgram.hookAct("FSharpStation","RemoveSnippet",function(tmp$1,a)
  {
   return tmp$1.WithHole(Handler$1.EventQ2(tmp$1.k,"removesnippet",function()
   {
    return tmp$1.i;
   },a));
  },MainProgram.hookAct("FSharpStation","AddSnippet",function(tmp$1,a)
  {
   return tmp$1.WithHole(Handler$1.EventQ2(tmp$1.k,"addsnippet",function()
   {
    return tmp$1.i;
   },a));
  },ProviderBuilder.Make())))));
  return(p=Handler$1.CompleteHoles(tmp.k,tmp.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.buttonsright(p[0])),(tmp.i=i,i))).get_Doc();
 };
 MainProgram.hookDoc=function(plug,name,func,obj)
 {
  var o,o$1,doc;
  o=(o$1=AppFramework.tryGetDoc(plug,name),o$1==null?null:{
   $:1,
   $0:(doc=o$1.$0,((((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Doc    "+Utils.toSafe($2)+"."+Utils.toSafe($3)+" hooked");
   }))(function(s)
   {
    console.log(s);
   }))(plug))(name),func(obj,Doc.EmbedView(View$1.Map(function()
   {
    return AppFramework.getLazyDoc(doc);
   },AppFramework.mainDocV().get_View())))))
  });
  return o==null?((((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("Doc    "+Utils.toSafe($2)+"."+Utils.toSafe($3)+" not found");
  }))(function(s)
  {
   console.log(s);
  }))(plug))(name),obj):o.$0;
 };
 MainProgram.hookAct=function(plug,name,func,obj)
 {
  var o,o$1,act;
  o=(o$1=AppFramework.tryGetAct(plug,name),o$1==null?null:{
   $:1,
   $0:(act=o$1.$0,((((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Action "+Utils.toSafe($2)+"."+Utils.toSafe($3)+" hooked");
   }))(function(s)
   {
    console.log(s);
   }))(plug))(name),func(obj,function()
   {
    AppFramework.callFunction(null,null,act.actFunction);
   })))
  });
  return o==null?((((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("Action "+Utils.toSafe($2)+"."+Utils.toSafe($3)+" not found");
  }))(function(s)
  {
   console.log(s);
  }))(plug))(name),obj):o.$0;
 };
 MainProgram.hookViw=function(plug,name,func,obj)
 {
  var o,o$1;
  o=(o$1=AppFramework.tryGetViw(plug,name),o$1==null?null:{
   $:1,
   $0:((((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("View   "+Utils.toSafe($2)+"."+Utils.toSafe($3)+" hooked");
   }))(function(s)
   {
    console.log(s);
   }))(plug))(name),func(obj,o$1.$0.viwView))
  });
  return o==null?((((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("View   "+Utils.toSafe($2)+"."+Utils.toSafe($3)+" not found");
  }))(function(s)
  {
   console.log(s);
  }))(plug))(name),obj):o.$0;
 };
 MainProgram.hookVar=function(plug,name,func,obj)
 {
  var o,o$1;
  o=(o$1=AppFramework.tryGetVar(plug,name),o$1==null?null:{
   $:1,
   $0:((((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Var    "+Utils.toSafe($2)+"."+Utils.toSafe($3)+" hooked");
   }))(function(s)
   {
    console.log(s);
   }))(plug))(name),func(obj,o$1.$0.varVar))
  });
  return o==null?((((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("Var    "+Utils.toSafe($2)+"."+Utils.toSafe($3)+" not found");
  }))(function(s)
  {
   console.log(s);
  }))(plug))(name),obj):o.$0;
 };
 MainProgram.deleteSnippet=function()
 {
  var snp;
  snp=Snippets.currentSnippetV().Get();
  !Unchecked.Equals(snp.snpId,SnippetId.get_Empty())&&Global.confirm((function($1)
  {
   return function($2)
   {
    return $1("Do you want to delete "+Utils.toSafe($2)+"?");
   };
  }(Global.id))(SnippetModule.snippetName(snp.snpName,snp.snpContent)))?Snippets.deleteCurrentSnippet():void 0;
 };
 MainProgram.runFsCode=function()
 {
  var o,code,x,b,f;
  function out(v)
  {
   MainProgram.appendMsgs(Strings.Replace(v,"xXxYyYyhH","Done!"));
  }
  o=View$1.TryGet(Snippets.FsCodeW());
  o==null?void 0:(code=o.$0,x=(b=Monads.asyncResultP(),b.Run(b.Delay(function()
  {
   var a;
   MainProgram.outputMsgs().Set("Running F#...");
   return Extensions["AsyncResultBuilderP.Bind"](b,(a=new Address({
    $:0,
    $0:FStation.id()
   }),(new AjaxRemotingProvider.New()).Async("FSharpStation:FsRoot.Library2+FSharpStationClient.setAddress:-574353144",[a])),function()
   {
    return b.ReturnFrom$1((new AjaxRemotingProvider.New()).Async("FSharpStation:FsRoot.Library2+FsiAgent.evalCode:-510387286",[FStation.srcDir(),{
     $:0,
     $0:code
    }]));
   });
  }))),AsyncResult.iterA((f=function($1)
  {
   return function($2)
   {
    return $1("Error:\n"+FSharpStation_GeneratedPrintf.p$2($2));
   };
  }(Global.id),function(x$1)
  {
   return out(f(x$1));
  }),Global.ignore,x));
 };
 MainProgram.appendMsgs=function(msg)
 {
  MainProgram.appendText(MainProgram.outputMsgs(),msg);
 };
 MainProgram.outputMsgs=function()
 {
  SC$1.$cctor();
  return SC$1.outputMsgs;
 };
 MainProgram.appendText=function(_var,msg)
 {
  var $1;
  _var.Set(($1=_var.Get(),$1===""?msg:msg===""?$1:$1+"\n"+msg));
 };
 Messaging.processMessage=function(msg)
 {
  var b;
  return Concurrency.Return(Snippets.runReaderResult((b=Operators$2.reader(),b.Run(b.Delay(function()
  {
   var $1,t;
   switch(msg.$==1?($1=msg.$0,1):msg.$==2?($1=msg.$0,2):msg.$==3?($1=msg.$0,3):msg.$==4?(t=msg.$0,!Unchecked.Equals(t,null)&&t.length===2?Arrays.get(msg.$0,0)==="AddOutput"?($1=Arrays.get(msg.$0,1),4):6:6):msg.$==5?5:0)
   {
    case 0:
     return b.Return({
      $:0,
      $0:FStation.id()
     });
    case 1:
     return b.Bind(ReaderMResult.traverseSeq(SnippetModule.snippetFromRefORm,$1),function(a)
     {
      return b.Return({
       $:1,
       $0:Arrays.ofSeq(Seq$1.choose(Global.id,a))
      });
     });
    case 2:
     Snippets.clearPredsCache();
     return b.Bind(ReaderMResult.absorbO(function()
     {
      return new ResultMessage({
       $:0,
       $0:(function($2)
       {
        return function($3)
        {
         return $2("Snippet not found "+FSharpStation_GeneratedPrintf.p$4($3));
        };
       }(Global.id))($1)
      });
     },SnippetModule.snippetFromRefORm($1)),function(a)
     {
      return b.ReturnFrom$1(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(SnippetModule.fastCodeRm({
       $:1,
       $0:a.snpId
      },{
       $:1,
       $0:a.snpId
      }),function(t$1)
      {
       return t$1[0];
      }),function(a$1)
      {
       return{
        $:0,
        $0:a$1
       };
      }));
     });
    case 3:
     Snippets.clearPredsCache();
     return b.Return(Hole.Hole.TODO_GetPredecessors);
    case 4:
     MainProgram.appendMsgs($1);
     return b.Return({
      $:0,
      $0:"Ok"
     });
    case 5:
     return b.Return({
      $:0,
      $0:self.document.baseURI
     });
    case 6:
     return b.Return(Hole.Hole[(function($2)
     {
      return function($3)
      {
       return $2("TODO message: "+FSharpStation_GeneratedPrintf.p$5($3));
      };
     }(Global.id))(msg)]);
   }
  })))));
 };
 Messaging.wsStationClient=function()
 {
  SC$1.$cctor();
  return SC$1.wsStationClient;
 };
 SC$1.$cctor=function()
 {
  var f,generation,$1,b,x,p,cache,store,store$1,checkO,p$1,cache$1,store$3,store$4,checkO$1,p$2,cache$2,store$6,store$7,checkO$2,p$3,cache$3,store$9,store$10,checkO$3,p$4,cache$4,store$12,store$13,checkO$4,p$5,cache$5,store$15,store$16,checkO$5,o,plg,a$1,b$1,cache$6,$2,cache$7,$3,cache$8,$4,p$6,store$21,checkO$6,v,prior,f$2,f$3,f$4,f$5,x$1,$5,$6,v$1,s,sQ,x$2,t,t$1,t$2,t$3,t$4,t$5,t$6,t$7,t$8,x$3,t$9,i,x$4,t$10,t$11,t$12,t$13,t$14,i$1,x$5,t$15,t$16,t$17,t$18,t$19,t$20,t$21,i$2,t$22,x$6,b$2;
  SC$1.$cctor=Global.ignore;
  SC$1.rtn=function(v$2)
  {
   return[v$2];
  };
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.asyncResult=new AsyncResultBuilder.New();
  SC$1.asyncResultP=new AsyncResultBuilderP.New();
  SC$1.reader=new Builder$1.New();
  SC$1.reader$1=ReaderMBasic.reader();
  SC$1.reader$2=new Builder$2.New();
  SC$1.reader$3=ReaderMResult.reader();
  SC$1.reader$4=new Builder$3.New();
  SC$1.reader$5=ReaderMAsyncResult.reader();
  function g(s$1)
  {
   return Strings.concat("\n",s$1);
  }
  SC$1.unindentStr=function(x$7)
  {
   return g(String.unindent(x$7));
  };
  function f$1(s$1)
  {
   return String.splitByChar("\n",s$1);
  }
  function g$1(s$1)
  {
   var a$4,b$3;
   return Slice.array(s$1,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$4=0,(b$3=Arrays.length(s$1)-2,Unchecked.Compare(a$4,b$3)===1?a$4:b$3))
   });
  }
  function g$2(s$1)
  {
   return Strings.concat("\n",s$1);
  }
  SC$1.skipLastLine=(f=function(x$7)
  {
   return g$1(f$1(x$7));
  },function(x$7)
  {
   return g$2(f(x$7));
  });
  SC$1.parseDateO=ParseO.tryParseWith(function(a$4)
  {
   var o$1,m$4;
   o$1=0;
   return[(m$4=DateUtil.TryParse(a$4),m$4!=null&&m$4.$==1&&(o$1=m$4.$0,true)),o$1];
  });
  SC$1.parseIntO=ParseO.tryParseWith(function(a$4)
  {
   var o$1;
   o$1=0;
   return[Numeric.TryParseInt32(a$4,{
    get:function()
    {
     return o$1;
    },
    set:function(v$2)
    {
     o$1=v$2;
    }
   }),o$1];
  });
  SC$1.parseSingleO=ParseO.tryParseWith(function(a$4)
  {
   var o$1,$7;
   o$1=0;
   return[($7=Global.Number(a$4),Global.isNaN($7)?false:(o$1=$7,true)),o$1];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith(function(a$4)
  {
   var o$1,$7;
   o$1=0;
   return[($7=Global.Number(a$4),Global.isNaN($7)?false:(o$1=$7,true)),o$1];
  });
  SC$1.parseGuidO=ParseO.tryParseWith(function(a$4)
  {
   var o$1;
   o$1=null;
   return[Guid.TryParse(a$4,{
    get:function()
    {
     return o$1;
    },
    set:function(v$2)
    {
     o$1=v$2;
    }
   }),o$1];
  });
  SC$1["|Date|_|"]=ParseO.parseDateO();
  SC$1["|Int|_|"]=ParseO.parseIntO();
  SC$1["|Single|_|"]=ParseO.parseSingleO();
  SC$1["|Double|_|"]=ParseO.parseDoubleO();
  SC$1["|Guid|_|"]=ParseO.parseGuidO();
  $1=(generation=1,[function()
  {
   generation=generation+1;
   return generation;
  },function(n)
  {
   generation=n;
  }]);
  SC$1.setGeneration=$1[1];
  SC$1.getNextGeneration=$1[0];
  SC$1.defaultSnippet=Snippet.New(new SnippetId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  }),"","",null,new FSharpSet.New$1(null),[],0);
  function g$3(c)
  {
   return c.predecesorsCache();
  }
  SC$1.predsLRmMemo=function(p$7)
  {
   return ReaderMResult.memoizeRm(g$3,SnippetModule.predsLRm,p$7);
  };
  function g$4(c)
  {
   return c.reducedCache();
  }
  SC$1.reducedOthersORmMemo=function(p$7)
  {
   return ReaderMResult.memoizeRm(g$4,function($7)
   {
    return SnippetModule.reducedOthersORm($7[0],$7[1],$7[2]);
   },p$7);
  };
  SC$1.deserGuid=function(v$2)
  {
   return Serializer.ifUndef("00000000-0000-0000-0000-000000000000",v$2);
  };
  function g$5(v$2)
  {
   return Serializer.ifUndef(0,v$2);
  }
  SC$1.serFloat=[function(v$2)
  {
   return(function($7)
   {
    return function($8)
    {
     return $7(Utils.prettyPrint($8));
    };
   }(Global.id))(v$2);
  },function(x$7)
  {
   return g$5(Global.id(x$7));
  }];
  function g$6(v$2)
  {
   return Serializer.ifUndef(0,v$2);
  }
  SC$1.serInt=[function(v$2)
  {
   return(function($7)
   {
    return function($8)
    {
     return $7(Utils.prettyPrint($8));
    };
   }(Global.id))(v$2);
  },function(x$7)
  {
   return g$6(Global.id(x$7));
  }];
  function g$7(v$2)
  {
   return Serializer.ifUndef(false,v$2);
  }
  SC$1.serBool=[function(v$2)
  {
   return(function($7)
   {
    return function($8)
    {
     return $7(Utils.prettyPrint($8));
    };
   }(Global.id))(v$2);
  },function(x$7)
  {
   return g$7(Global.id(x$7));
  }];
  function g$8(v$2)
  {
   return Serializer.ifUndef("",v$2);
  }
  SC$1.serString=[function(a$4)
  {
   return JSON.stringify(((Provider.Id())())(a$4));
  },function(x$7)
  {
   return g$8(Global.id(x$7));
  }];
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$1.observers=List.T.Empty;
  SC$1.css="\r\n                .tab-panel {\r\n                 overflow  : hidden   ;\r\n                 display   : flex     ;\r\n                 flex-flow : column   ;\r\n                 background: lightgray;\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                }\r\n                .tab-content {\r\n                 flex      : 1 1     ;\r\n                 overflow  : auto    ;\r\n                 position  : relative;\r\n                }\r\n                .tab-children {\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                 position  : absolute;\r\n                 display   : grid    ;\r\n                }\r\n                .tab-strip {\r\n                 padding   : 0pt     ;\r\n                 flex      : 0 0     ;\r\n                }\r\n                .tab {\r\n                 border     : 0.2pt solid transparent;\r\n                 padding    : 0pt 4pt;\r\n                 display    : inline-block;\r\n                 font-family: sans-serif;\r\n                 font-weight: 200;\r\n                 font-size  : small;\r\n                 color      : #666;\r\n                 cursor     : pointer;\r\n                }\r\n                .top>.tab {\r\n                 border-radius: 2pt 2pt 0pt 0pt;\r\n                 border-bottom-width: 0pt;\r\n                 vertical-align: bottom;\r\n                }\r\n                .bottom>.tab {\r\n                 border-top-width: 0pt;\r\n                 border-radius: 0pt 0pt 2pt 2pt;\r\n                 vertical-align: top;\r\n                }\r\n                .horizontal>.tab:not(:first-child) {\r\n                 border-left-width: 0pt;\r\n                }\r\n                .tab.hovering {\r\n                 background: red;\r\n                }\r\n                .tab.selected {\r\n                 background: white;\r\n                 border-left-width: 0.2pt;\r\n                 color: black;\r\n                 font-weight: 500;\r\n                 border-color: black;\r\n                }\r\n                .horizontal>.tab.selected {\r\n                 border-left-width: 0.2pt;\r\n                }\r\n                ::slotted(*              ) { \r\n                 width : 100%;\r\n                 height: 100%;\r\n                }\r\n                        ";
  SC$1.init=Lazy.Create(function()
  {
   var _nm,_c;
   _nm="wcomp-tabstrip";
   _c=self.FsRoot.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New;
   console.log("defineWebComponent: "+_nm);
   Object.setPrototypeOf(_c.prototype,self.HTMLElement.prototype);
   Object.setPrototypeOf(_c,self.HTMLElement);
   Object.setPrototypeOf(WcTabStripT.Constructor.prototype,_c.prototype);
   self.customElements.define(_nm,WcTabStripT.Constructor);
  });
  SC$1.layoutHorizontal=Runtime.Curried(function($7,$8,$9,$10,$11)
  {
   return Doc.get_Empty();
  },5);
  SC$1.layoutVertical=Runtime.Curried(function($7,$8,$9,$10,$11)
  {
   return Doc.get_Empty();
  },5);
  SC$1.includes=["/EPFileX/monaco/package/min/vs/loader.js"];
  SC$1.loader=(b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(LoadFiles.LoadFilesAsync(Monaco.includes()),function()
   {
    self.require.config({
     paths:{
      vs:"/EPFileX/monaco/package/min/vs"
     }
    });
    return Concurrency.Bind(Concurrency.FromContinuations(function(success,failed)
    {
     return self.require(["vs/editor/editor.main"],success,failed);
    }),function()
    {
     return Concurrency.Return(null);
    });
   });
  }));
  SC$1.plugIns=new ListModel.New$1(function(plg$1)
  {
   return plg$1.plgName;
  });
  SC$1.mainDocV=Var$1.Create$1("AppFramework.AppFwkClient");
  SC$1.TemplateFileName="..\\website\\AppFramework.html";
  SC$1.defaultPlugIn=PlugIn.New("",[],[],[],[],[]);
  SC$1.selectionPlugInO=Var$1.Create$1({
   $:1,
   $0:"AppFramework"
  });
  function a(a$4)
  {
   var f$6;
   function b$3(a$5)
   {
    return AppFramework.plugIns().TryFindByKey(a$5);
   }
   function g$11(o$1)
   {
    var v$2;
    v$2=AppFramework.defaultPlugIn();
    return o$1==null?v$2:o$1.$0;
   }
   f$6=function(o$1)
   {
    return o$1==null?null:b$3(o$1.$0);
   };
   return function(x$7)
   {
    return g$11(f$6(x$7));
   };
  }
  SC$1.currentPlugInW=(x=AppFramework.selectionPlugInO().get_View(),View$1.Map2(function($7,$8)
  {
   return(a($7))($8);
  },AppFramework.plugIns().v,x));
  SC$1.currentPlugInV=new FromView.New(AppFramework.currentPlugInW(),function(a$4)
  {
   AppFramework.plugIns().Append(a$4);
  });
  SC$1.AppFwkClient=Lazy.Create(function()
  {
   var b$3,Q,A,D,V,V$1,P,p$7,i$3;
   return(b$3=(Q=AppFramework.renderQueries(),(A=AppFramework.renderActions(),(D=AppFramework.renderDocs(),(V=AppFramework.renderViews(),(V$1=AppFramework.renderVars(),(P=AppFramework.renderPlugIns(),ProviderBuilder.Make().WithHole({
    $:0,
    $0:"plugins",
    $1:P
   })).WithHole({
    $:2,
    $0:"pluginname",
    $1:View$1.Map(function($7)
    {
     return $7.plgName;
    },AppFramework.currentPlugInW())
   }).WithHole({
    $:0,
    $0:"vars",
    $1:V$1
   })).WithHole({
    $:0,
    $0:"views",
    $1:V
   })).WithHole({
    $:0,
    $0:"docs",
    $1:D
   })).WithHole({
    $:0,
    $0:"actions",
    $1:A
   })).WithHole({
    $:0,
    $0:"queries",
    $1:Q
   })),(p$7=Handler$1.CompleteHoles(b$3.k,b$3.h,[]),(i$3=new TemplateInstance.New(p$7[1],FSharpStation_Templates.appfwkclient(p$7[0])),(b$3.i=i$3,i$3)))).get_Doc();
  });
  SC$1.actHello=AppFramework.newAct("Hello",function()
  {
   self.alert("Hello!");
  });
  SC$1.qryDocs=AppFramework.newQry("getDocNames",function()
  {
   return Arrays.ofSeq(Seq$1.collect(function(plg$1)
   {
    return Seq$1.map(function(doc)
    {
     return plg$1.plgName+"."+doc.docName;
    },plg$1.plgDocs);
   },(AppFramework.plugIns())["var"].Get()));
  });
  AppFramework.plugIns().Append(PlugIn.New("AppFramework",[AppFramework.newVar("mainDocV",AppFramework.mainDocV())],[],[AppFramework.newDoc("AppFwkClient",AppFramework.AppFwkClient())],[AppFramework.actHello()],[AppFramework.qryDocs()]));
  SC$1.getMainDoc=Lazy.Create(function()
  {
   WcSplitter.init(Runtime.Curried(AppFramework.horizontal,5),Runtime.Curried(AppFramework.vertical,5));
   WcTabStrip.init().f();
   return AppFramework.mainDoc();
  });
  function store$2(v$2,res)
  {
   cache.set_Item(v$2,res);
   return res;
  }
  SC$1.createSplitterM=(p=(cache=new Dictionary.New$5(),[[function(v$2)
  {
   var res;
   res=null;
   return cache.TryGetValue(v$2,{
    get:function()
    {
     return res;
    },
    set:function(v$3)
    {
     res=v$3;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($7)
  {
   return function($8)
   {
    return store$2($7,$8);
   };
  }],function()
  {
   cache.Clear();
  }]),(store=p[0],[(store$1=store[1],(checkO=store[0],function(p$7)
  {
   var o$1,x$7;
   o$1=checkO(p$7);
   return o$1==null?(x$7=LayoutEngineModule.createSplitter.apply(null,p$7),(store$1(p$7))(x$7)):o$1.$0;
  })),p[1]]))[0];
  function store$5(v$2,res)
  {
   cache$1.set_Item(v$2,res);
   return res;
  }
  SC$1.createButtonM=(p$1=(cache$1=new Dictionary.New$5(),[[function(v$2)
  {
   var res;
   res=null;
   return cache$1.TryGetValue(v$2,{
    get:function()
    {
     return res;
    },
    set:function(v$3)
    {
     res=v$3;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($7)
  {
   return function($8)
   {
    return store$5($7,$8);
   };
  }],function()
  {
   cache$1.Clear();
  }]),(store$3=p$1[0],[(store$4=store$3[1],(checkO$1=store$3[0],function(p$7)
  {
   var o$1,x$7;
   o$1=checkO$1(p$7);
   return o$1==null?(x$7=LayoutEngineModule.createButton.apply(null,p$7),(store$4(p$7))(x$7)):o$1.$0;
  })),p$1[1]]))[0];
  function store$8(v$2,res)
  {
   cache$2.set_Item(v$2,res);
   return res;
  }
  SC$1.createInputM=(p$2=(cache$2=new Dictionary.New$5(),[[function(v$2)
  {
   var res;
   res=null;
   return cache$2.TryGetValue(v$2,{
    get:function()
    {
     return res;
    },
    set:function(v$3)
    {
     res=v$3;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($7)
  {
   return function($8)
   {
    return store$8($7,$8);
   };
  }],function()
  {
   cache$2.Clear();
  }]),(store$6=p$2[0],[(store$7=store$6[1],(checkO$2=store$6[0],function(p$7)
  {
   var o$1,x$7;
   o$1=checkO$2(p$7);
   return o$1==null?(x$7=LayoutEngineModule.createInput.apply(null,p$7),(store$7(p$7))(x$7)):o$1.$0;
  })),p$2[1]]))[0];
  function store$11(v$2,res)
  {
   cache$3.set_Item(v$2,res);
   return res;
  }
  SC$1.createTextAreaM=(p$3=(cache$3=new Dictionary.New$5(),[[function(v$2)
  {
   var res;
   res=null;
   return cache$3.TryGetValue(v$2,{
    get:function()
    {
     return res;
    },
    set:function(v$3)
    {
     res=v$3;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($7)
  {
   return function($8)
   {
    return store$11($7,$8);
   };
  }],function()
  {
   cache$3.Clear();
  }]),(store$9=p$3[0],[(store$10=store$9[1],(checkO$3=store$9[0],function(p$7)
  {
   var o$1,x$7;
   o$1=checkO$3(p$7);
   return o$1==null?(x$7=LayoutEngineModule.createTextArea.apply(null,p$7),(store$10(p$7))(x$7)):o$1.$0;
  })),p$3[1]]))[0];
  function store$14(v$2,res)
  {
   cache$4.set_Item(v$2,res);
   return res;
  }
  SC$1.createElementM=(p$4=(cache$4=new Dictionary.New$5(),[[function(v$2)
  {
   var res;
   res=null;
   return cache$4.TryGetValue(v$2,{
    get:function()
    {
     return res;
    },
    set:function(v$3)
    {
     res=v$3;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($7)
  {
   return function($8)
   {
    return store$14($7,$8);
   };
  }],function()
  {
   cache$4.Clear();
  }]),(store$12=p$4[0],[(store$13=store$12[1],(checkO$4=store$12[0],function(p$7)
  {
   var o$1,x$7;
   o$1=checkO$4(p$7);
   return o$1==null?(x$7=LayoutEngineModule.createElement.apply(null,p$7),(store$13(p$7))(x$7)):o$1.$0;
  })),p$4[1]]))[0];
  function store$17(v$2,res)
  {
   cache$5.set_Item(v$2,res);
   return res;
  }
  SC$1.createDocM=(p$5=(cache$5=new Dictionary.New$5(),[[function(v$2)
  {
   var res;
   res=null;
   return cache$5.TryGetValue(v$2,{
    get:function()
    {
     return res;
    },
    set:function(v$3)
    {
     res=v$3;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($7)
  {
   return function($8)
   {
    return store$17($7,$8);
   };
  }],function()
  {
   cache$5.Clear();
  }]),(store$15=p$5[0],[(store$16=store$15[1],(checkO$5=store$15[0],function(p$7)
  {
   var o$1,x$7;
   o$1=checkO$5(p$7);
   return o$1==null?(x$7=LayoutEngineModule.createDoc.apply(null,p$7),(store$16(p$7))(x$7)):o$1.$0;
  })),p$5[1]]))[0];
  o=AppFramework.tryGetPlugIn("AppFramework");
  o==null?void 0:(plg=o.$0,a$1=PlugIn.New(plg.plgName,plg.plgVars,plg.plgViews,plg.plgDocs,plg.plgActions.concat([AppFramework.newActF("AddLayout",{
   $:2,
   $0:function(n)
   {
    return function(l)
    {
     return LayoutEngineModule.addNewLayout(n,l);
    };
   },
   $1:"[Name]",
   $2:"[Layout]"
  })]),plg.plgQueries),AppFramework.plugIns().Append(a$1));
  SC$1.MessageBrokerId="<MessageBroker>";
  SC$1.MessageBrokerAddress=new Address({
   $:0,
   $0:WebSockets.MessageBrokerId()
  });
  SC$1.id="FSharpStation"+Global.String(Date.now());
  SC$1.rootDir=".";
  SC$1.srcDir=".";
  Concurrency.Start((b$1=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("FSharpStation:FsRoot.FSharpStation+FStation.getRootDir:-447555547",[]),function(a$4)
   {
    FStation.set_rootDir(a$4+"/"+"..");
    FStation.set_srcDir(a$4+"/"+"..\\src");
    (((Runtime.Curried3(function($7,$8,$9)
    {
     return $7("fileName = "+Utils.toSafe($8)+"\\"+Utils.toSafe($9)+".fsx");
    }))(function(s$1)
    {
     console.log(s$1);
    }))(FStation.srcDir()))(FStation.id());
    return Concurrency.Zero();
   });
  })),null);
  SC$1.annotationsV=Var$1.Create$1("");
  SC$1.snippets=new ListModel.New$1(function(s$1)
  {
   return s$1.snpId;
  });
  SC$1.hierarchy=Var$1.Create$1([]);
  SC$1.generation=Var$1.Create$1(5);
  SC$1.currentSnippetIdOV=Var$1.Create$1(null);
  SC$1.codeSnippetIdOV=Var$1.Create$1(null);
  SC$1.collapsedV=Var$1.Create$1(new FSharpSet.New$1(null));
  function store$18(v$2,res)
  {
   cache$6.set_Item(v$2,res);
   return res;
  }
  $2=(cache$6=new Dictionary.New$5(),[[function(v$2)
  {
   var res;
   res=null;
   return cache$6.TryGetValue(v$2,{
    get:function()
    {
     return res;
    },
    set:function(v$3)
    {
     res=v$3;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($7)
  {
   return function($8)
   {
    return store$18($7,$8);
   };
  }],function()
  {
   cache$6.Clear();
  }]);
  SC$1.predsCache=$2[0];
  SC$1.clearPreds=$2[1];
  function store$19(v$2,res)
  {
   cache$7.set_Item(v$2,res);
   return res;
  }
  $3=(cache$7=new Dictionary.New$5(),[[function(v$2)
  {
   var res;
   res=null;
   return cache$7.TryGetValue(v$2,{
    get:function()
    {
     return res;
    },
    set:function(v$3)
    {
     res=v$3;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($7)
  {
   return function($8)
   {
    return store$19($7,$8);
   };
  }],function()
  {
   cache$7.Clear();
  }]);
  SC$1.reducCache=$3[0];
  SC$1.clearReduc=$3[1];
  function store$20(v$2,res)
  {
   cache$8.set_Item(v$2,res);
   return res;
  }
  $4=(cache$8=new Dictionary.New$5(),[[function(v$2)
  {
   var res;
   res=null;
   return cache$8.TryGetValue(v$2,{
    get:function()
    {
     return res;
    },
    set:function(v$3)
    {
     res=v$3;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($7)
  {
   return function($8)
   {
    return store$20($7,$8);
   };
  }],function()
  {
   cache$8.Clear();
  }]);
  SC$1.parentCache=$4[0];
  SC$1.clearParent=$4[1];
  SC$1.getParentIdO=(p$6=Snippets.parentCache(),(store$21=p$6[1],(checkO$6=p$6[0],function(p$7)
  {
   var o$1,x$7;
   o$1=checkO$6(p$7);
   return o$1==null?(x$7=Snippets.getParentIdONotMemo(p$7),(store$21(p$7))(x$7)):o$1.$0;
  })));
  View$1.Sink(function(a$4)
  {
   var curId,m$4;
   if(a$4!=null&&a$4.$==1)
    {
     curId=a$4.$0;
     m$4=Snippets.codeSnippetIdOV().Get();
     m$4!=null&&m$4.$==1?(Snippets.iterReader(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(SnippetModule.snippetORm(m$4.$0),function(o$1)
     {
      return o$1==null?null:{
       $:1,
       $0:SnippetModule.uniquePredsRm(o$1.$0)
      };
     }),ReaderMResult.insertO),Option.toList),function(l)
     {
      return List.collect(Global.id,l);
     }),function(s$1)
     {
      return List.contains(curId,s$1);
     }),function(a$5)
     {
      if(a$5)
       ;
      else
       Snippets.codeSnippetIdOV().Set({
        $:1,
        $0:curId
       });
     })),Snippets.clearPredsCache()):Snippets.codeSnippetIdOV().Set({
      $:1,
      $0:curId
     });
    }
  },Snippets.currentSnippetIdOV().get_View());
  function m(n)
  {
   return n.id();
  }
  View$1.Sink(function(ids)
  {
   var a$4;
   Snippets.clearPredsCache();
   a$4=Arrays.ofSeq(Seq$1.delay(function()
   {
    return Seq$1.collect(function(sid)
    {
     return Seq$1.append([Snippets.snippets().FindByKey(sid)],Seq$1.delay(function()
     {
      return Seq$1.filter(function(snp)
      {
       return Snippets.isDescendantOf(sid,snp.snpId);
      },(Snippets.snippets())["var"].Get());
     }));
    },ids);
   }));
   Snippets.snippets().Set(a$4);
  },(v=View$1.Map(function(a$4)
  {
   return Arrays.map(m,a$4);
  },Snippets.hierarchy().get_View()),(prior=[Var$1.Create$1(null)],(View$1.Sink(function(v$2)
  {
   if(!Unchecked.Equals(prior[0].Get(),v$2))
    prior[0].Set(v$2);
  },v),prior[0].get_View()))));
  SC$1.CurrentSnippetIdW=View$1.Map(function(sidO)
  {
   var v$2;
   v$2=SnippetModule.defaultSnippet().snpId;
   return sidO==null?v$2:sidO.$0;
  },Snippets.currentSnippetIdOV().get_View());
  function g$9(o$1)
  {
   var v$2;
   v$2=SnippetModule.defaultSnippet();
   return o$1==null?v$2:o$1.$0;
  }
  function m$1(a$4)
  {
   return Snippets.snippets().TryFindByKeyAsView(a$4);
  }
  SC$1.currentSnippetW=View$1.Map((f$2=function(o$1)
  {
   return o$1==null?null:Global.id(o$1.$0);
  },function(x$7)
  {
   return g$9(f$2(x$7));
  }),View$1.Bind((f$3=function(o$1)
  {
   return o$1==null?null:{
    $:1,
    $0:m$1(o$1.$0)
   };
  },function(x$7)
  {
   return View.insertWO(f$3(x$7));
  }),Snippets.currentSnippetIdOV().get_View()));
  function g$10(o$1)
  {
   var v$2;
   v$2=SnippetModule.defaultSnippet();
   return o$1==null?v$2:o$1.$0;
  }
  function m$2(a$4)
  {
   return Snippets.snippets().TryFindByKeyAsView(a$4);
  }
  SC$1.codeSnippetW=View$1.Map((f$4=function(o$1)
  {
   return o$1==null?null:Global.id(o$1.$0);
  },function(x$7)
  {
   return g$10(f$4(x$7));
  }),View$1.Bind((f$5=function(o$1)
  {
   return o$1==null?null:{
    $:1,
    $0:m$2(o$1.$0)
   };
  },function(x$7)
  {
   return View.insertWO(f$5(x$7));
  }),Snippets.codeSnippetIdOV().get_View()));
  SC$1.currentSnippetV=new FromView.New(Snippets.currentSnippetW(),function(s$1)
  {
   Snippets.setSnippet(s$1);
  });
  function m$3(tn,l)
  {
   return[tn.id(),l];
  }
  function a$2(a$4)
  {
   function f$6(n)
   {
    return TreeReader.listNodes(0,n);
   }
   function g$11(r)
   {
    return Snippets.runReader(Snippets.handleError,r);
   }
   return function(x$7)
   {
    return g$11(f$6(x$7));
   };
  }
  SC$1.getHierarchyW=View$1.Map(Arrays.ofSeq,View$1.Map(function(s$1)
  {
   return Seq$1.map(function($7)
   {
    return m$3($7[0],$7[1]);
   },s$1);
  },(x$1=Snippets.hierarchy().get_View(),View$1.Map2(function($7,$8)
  {
   return(a$2($7))($8);
  },Snippets.collapsedV().get_View(),x$1))));
  function a$3(a$4,a$5)
  {
   var b$3;
   b$3=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(350),function()
    {
     return Concurrency.Return(Snippets.runReader(Snippets.handleError,SnippetModule.fastCodeRm(Snippets.currentSnippetIdOV().Get(),Snippets.codeSnippetIdOV().Get())));
    });
   });
  }
  SC$1.codeAndStartsW=($5=Snippets.codeSnippetW(),($6=Snippets.snippets().v,(((Runtime.Curried3(View$1.MapAsync2))(a$3))($5))($6)));
  SC$1.FsCodeW=View$1.Map(function(t$23)
  {
   return t$23[0];
  },Snippets.codeAndStartsW());
  SC$1.codeStartsW=View$1.Map(function(t$23)
  {
   return t$23[1];
  },Snippets.codeAndStartsW());
  SC$1.SaveAsClassW=View$1.Map2(function(snps,gen)
  {
   return Seq$1.exists(function(snp)
   {
    return snp.snpGeneration>gen;
   },snps)?"btn-primary":"";
  },Snippets.snippets().v,Snippets.generation().get_View());
  SC$1.drag=DragInfo.DragNone;
  SC$1.rootdir="..\\website";
  SC$1.TemplatesFileName="..\\website"+"\\Templates.html";
  ((function($7)
  {
   return function($8)
   {
    return $7(Utils.toSafe($8));
   };
  }(function(s$1)
  {
   console.log(s$1);
  }))("..\\website\\Templates.html"));
  SC$1.startsV=Var$1.Create$1([]);
  SC$1.defaultStart=(v$1=[[SnippetId.get_Empty(),""],[0,1,0]],function(o$1)
  {
   return o$1==null?v$1:o$1.$0;
  });
  SC$1.fileName="none.fsx";
  SC$1.editorConfigO=null;
  View$1.Sink(function(sid)
  {
   var o$1,o$2;
   try
   {
    o$1=(o$2=Monaco$1.editorConfigO(),o$2==null?null:o$2.$0.editorO);
    o$1==null?null:(o$1.$0.setModel(Monaco$1.getSnippetModel(sid)),FStation.annotationsV().Set(FStation.annotationsV().Get()));
   }
   catch(m$4)
   {
    null;
   }
  },Snippets.CurrentSnippetIdW());
  SC$1.rexGuid$1="\\((\\d+)\\,\\s*(\\d+)\\) - \\((\\d+)\\,\\s*(\\d+)\\).*([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  function get(a$4)
  {
   return a$4.$0;
  }
  function set(a$4)
  {
   return new SnippetId({
    $:0,
    $0:a$4
   });
  }
  SC$1.serSnippetId=(s=Arrays.head(Strings.SplitChars((function($7)
  {
   return function($8)
   {
    return $7(FSharpStation_GeneratedPrintf.p($8));
   };
  }(Global.id))(set("00000000-0000-0000-0000-000000000000")),[" "],0)),(sQ=(function($7)
  {
   return function($8)
   {
    return $7(Utils.prettyPrint($8));
   };
  }(Global.id))(s),[function(id)
  {
   var x$7;
   x$7=get(id);
   return(((Runtime.Curried3(function($7,$8,$9)
   {
    return $7("{"+Strings.PadLeft(Utils.toSafe($8),10)+" :"+Utils.prettyPrint($9)+"}");
   }))(Global.id))(sQ))(x$7);
  },function(x$7)
  {
   var x$8;
   return set((x$8=x$7[s],(Serializer.deserGuid())(x$8)));
  }]));
  SC$1.serSnippet=(x$2=[(t=Serializer$1.serSnippetId(),Serializer.serField("snpId",function(s$1)
  {
   return s$1.snpId;
  },function(v$2,s$1)
  {
   return Snippet.New(v$2,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t[0],t[1])),(t$1=Serializer.serString(),Serializer.serField("snpName",function(s$1)
  {
   return s$1.snpName;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,v$2,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$1[0],t$1[1])),(t$2=Serializer.serString(),Serializer.serField("snpContent",function(s$1)
  {
   return s$1.snpContent;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,v$2,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$2[0],t$2[1])),(t$3=(t$4=Serializer$1.serSnippetId(),Serializer.serOpt(t$4[0],t$4[1])),Serializer.serField("snpParentIdO",function(s$1)
  {
   return s$1.snpParentIdO;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,v$2,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$3[0],t$3[1])),(t$5=(t$6=Serializer$1.serSnippetId(),Serializer.serSet(t$6[0],t$6[1])),Serializer.serField("snpPredIds",function(s$1)
  {
   return s$1.snpPredIds;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,v$2,s$1.snpProperties,s$1.snpGeneration);
  },t$5[0],t$5[1])),(t$7=(t$8=(x$3=Serializer.serString(),Serializer.serDup((Serializer.serString())[0],(Serializer.serString())[1],x$3[0],x$3[1])),Serializer.serArr(t$8[0],t$8[1])),Serializer.serField("snpProperties",function(s$1)
  {
   return s$1.snpProperties;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,v$2,s$1.snpGeneration);
  },t$7[0],t$7[1])),(t$9=Serializer.serInt(),Serializer.serField("snpGeneration",function(s$1)
  {
   return s$1.snpGeneration;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,v$2);
  },t$9[0],t$9[1]))],(i=SnippetModule.New("","",null),[function(dim)
  {
   var x$7;
   function m$4(n,ser,_deser)
   {
    return(((Runtime.Curried3(function($7,$8,$9)
    {
     return $7(Utils.prettyPrint($8)+": "+Utils.toSafe($9));
    }))(Global.id))(n))(ser(dim));
   }
   x$7=Strings.concat(", ",Seq$1.map(function($7)
   {
    return m$4($7[0],$7[1],$7[2]);
   },x$2));
   return(function($7)
   {
    return function($8)
    {
     return $7("{"+Utils.toSafe($8)+"}");
    };
   }(Global.id))(x$7);
  },function(o$1)
  {
   return!o$1?i:Seq$1.fold(function(dim,t$23)
   {
    return(t$23[2](dim))(o$1[t$23[0]]);
   },i,x$2);
  }]));
  SC$1.serModel=(x$4=[(t$10=(t$11=Serializer$1.serSnippet(),Serializer.serArr(t$11[0],t$11[1])),Serializer.serField("snippets",function(m$4)
  {
   return m$4.snippets;
  },function(v$2,m$4)
  {
   return Model$1.New(v$2,m$4.generation,m$4.collapsed);
  },t$10[0],t$10[1])),(t$12=Serializer.serInt(),Serializer.serField("generation",function(m$4)
  {
   return m$4.generation;
  },function(v$2,m$4)
  {
   return Model$1.New(m$4.snippets,v$2,m$4.collapsed);
  },t$12[0],t$12[1])),(t$13=(t$14=Serializer$1.serSnippetId(),Serializer.serSet(t$14[0],t$14[1])),Serializer.serField("collapsed",function(m$4)
  {
   return m$4.collapsed;
  },function(v$2,m$4)
  {
   return Model$1.New(m$4.snippets,m$4.generation,v$2);
  },t$13[0],t$13[1]))],(i$1=Model$1.New([],0,new FSharpSet.New$1(null)),[function(dim)
  {
   var x$7;
   function m$4(n,ser,_deser)
   {
    return(((Runtime.Curried3(function($7,$8,$9)
    {
     return $7(Utils.prettyPrint($8)+": "+Utils.toSafe($9));
    }))(Global.id))(n))(ser(dim));
   }
   x$7=Strings.concat(", ",Seq$1.map(function($7)
   {
    return m$4($7[0],$7[1],$7[2]);
   },x$4));
   return(function($7)
   {
    return function($8)
    {
     return $7("{"+Utils.toSafe($8)+"}");
    };
   }(Global.id))(x$7);
  },function(o$1)
  {
   return!o$1?i$1:Seq$1.fold(function(dim,t$23)
   {
    return(t$23[2](dim))(o$1[t$23[0]]);
   },i$1,x$4);
  }]));
  SC$1.fileName$1=Var$1.Create$1("");
  SC$1.serSnippetId2=[function(v$2)
  {
   return(function($7)
   {
    return function($8)
    {
     return $7(Utils.prettyPrint($8));
    };
   }(Global.id))(v$2);
  },function(x$7)
  {
   var x$8;
   return new SnippetId({
    $:0,
    $0:(x$8=x$7.Item,(Serializer.deserGuid())(x$8))
   });
  }];
  SC$1.serSnippet2=(x$5=[(t$15=Importer.serSnippetId2(),Serializer.serField("id",function(s$1)
  {
   return s$1.snpId;
  },function(v$2,s$1)
  {
   return Snippet.New(Unchecked.Equals(v$2,SnippetId.get_Empty())?new SnippetId({
    $:0,
    $0:Guid.NewGuid()
   }):v$2,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$15[0],t$15[1])),(t$16=Serializer.serString(),Serializer.serField("name",function(s$1)
  {
   return s$1.snpName;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,v$2,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$16[0],t$16[1])),(t$17=Serializer.serString(),Serializer.serField("content",function(s$1)
  {
   return s$1.snpContent;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,v$2,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$17[0],t$17[1])),(t$18=(t$19=Importer.serSnippetId2(),Serializer.serOpt(t$19[0],t$19[1])),Serializer.serField("parent",function(s$1)
  {
   return s$1.snpParentIdO;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,Unchecked.Equals(v$2,{
    $:1,
    $0:SnippetId.get_Empty()
   })?null:v$2,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$18[0],t$18[1])),(t$20=(t$21=Importer.serSnippetId2(),Serializer.serArr(t$21[0],t$21[1])),Serializer.serField("predecessors",function(s$1)
  {
   return Arrays.ofSeq(s$1.snpPredIds);
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,new FSharpSet.New(v$2),s$1.snpProperties,s$1.snpGeneration);
  },t$20[0],t$20[1]))],(i$2=SnippetModule.New("","",null),[function(dim)
  {
   var x$7;
   function m$4(n,ser,_deser)
   {
    return(((Runtime.Curried3(function($7,$8,$9)
    {
     return $7(Utils.prettyPrint($8)+": "+Utils.toSafe($9));
    }))(Global.id))(n))(ser(dim));
   }
   x$7=Strings.concat(", ",Seq$1.map(function($7)
   {
    return m$4($7[0],$7[1],$7[2]);
   },x$5));
   return(function($7)
   {
    return function($8)
    {
     return $7("{"+Utils.toSafe($8)+"}");
    };
   }(Global.id))(x$7);
  },function(o$1)
  {
   return!o$1?i$2:Seq$1.fold(function(dim,t$23)
   {
    return(t$23[2](dim))(o$1[t$23[0]]);
   },i$2,x$5);
  }]));
  SC$1.serSnippets=(t$22=Importer.serSnippet2(),Serializer.serArr(t$22[0],t$22[1]));
  SC$1.outputMsgs=Var$1.Create$1("");
  x$6=Snippets.codeAndStartsW();
  View$1.Sink(Library.delayed(300,function(t$23)
  {
   Monaco$1.parse(t$23[0],t$23[1]);
  }),x$6);
  View$1.Sink(function(m$4)
  {
   self.onbeforeunload=m$4!==""?function(e)
   {
    e.returnValue="Changes you made may not be saved.";
   }:null;
  },Snippets.SaveAsClassW());
  SC$1.wsStationClient=new WSMessagingClient.New(FStation.id(),null,null);
  Concurrency.Start((b$2=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(1000),function()
   {
    return Concurrency.While(function()
    {
     return true;
    },Concurrency.Delay(function()
    {
     return Concurrency.TryWith(Concurrency.Delay(function()
     {
      var _this,f$6,g$11,f$7,dst,p$7;
      function f$8(a$4)
      {
       return(FSharpStation_JsonDecoder.j$4())(JSON.parse(a$4));
      }
      function f$9(a$4)
      {
       return JSON.stringify((FSharpStation_JsonEncoder.j$4())(a$4));
      }
      function g$12(v$2)
      {
       return Concurrency.Return(v$2);
      }
      function g$13(m$4)
      {
       Operators$4.FailWith(m$4);
      }
      _this=Messaging.wsStationClient();
      _this.payloadProcessorO={
       $:1,
       $0:(f$6=function(x$7)
       {
        return Messaging.processMessage(f$8(x$7));
       },(g$11=(f$7=function(x$7)
       {
        return g$12(f$9(x$7));
       },function(v$2)
       {
        return Concurrency.Bind(v$2,f$7);
       }),function(x$7)
       {
        return g$11(f$6(x$7));
       }))
      };
      AsyncResult.iterA(function(x$7)
      {
       return g$13(Global.String(x$7));
      },Global.ignore,_this.sendAndForget(WebSockets.msgType(MessageType.MsgInformation,(dst=WebSockets.MessageBrokerAddress(),(p$7=JSON.stringify(((Provider.Id())())("Registering Processor")),MessageGeneric.New(new Address({
       $:0,
       $0:""
      }),dst,MessageType.MsgRequest,"",Guid.NewGuid(),p$7,Replier.NoReply))))));
      return Concurrency.Bind(Concurrency.Sleep(60000),function()
      {
       return Concurrency.Return(null);
      });
     }),function(a$4)
     {
      ((function($7)
      {
       return function($8)
       {
        return $7(Utils.toSafe($8));
       };
      }(function(s$1)
      {
       console.log(s$1);
      }))(a$4.message));
      return Concurrency.Bind(Concurrency.Sleep(1000),function()
      {
       return Concurrency.Return(null);
      });
     });
    }));
   });
  })),null);
 };
 FSharpStation_JsonEncoder.j$4=function()
 {
  return FSharpStation_JsonEncoder._v$4?FSharpStation_JsonEncoder._v$4:FSharpStation_JsonEncoder._v$4=(Provider.EncodeUnion(void 0,"$",[[0,[["$0","ResultValue",FSharpStation_JsonEncoder.j$6,0]]],[1,[["$0","ErrorValue",FSharpStation_JsonEncoder.j$5,0]]]]))();
 };
 FSharpStation_JsonEncoder.j$6=function()
 {
  return FSharpStation_JsonEncoder._v$6?FSharpStation_JsonEncoder._v$6:FSharpStation_JsonEncoder._v$6=(Provider.EncodeUnion(void 0,"$",[[0,[["$0","Item",Provider.Id(),0]]],[1,[["$0","Item",Provider.EncodeArray(FSharpStation_JsonEncoder.j$7),0]]]]))();
 };
 FSharpStation_JsonDecoder.j$6=function()
 {
  return FSharpStation_JsonDecoder._v$6?FSharpStation_JsonDecoder._v$6:FSharpStation_JsonDecoder._v$6=(Provider.DecodeUnion(SnippetId,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 FSharpStation_JsonDecoder.j$5=function()
 {
  return FSharpStation_JsonDecoder._v$5?FSharpStation_JsonDecoder._v$5:FSharpStation_JsonDecoder._v$5=(Provider.DecodeUnion(void 0,"$",[[0,[["$0","Item",FSharpStation_JsonDecoder.j$6,0]]],[1,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]]]))();
 };
 FSharpStation_Templates.fixedsplitterver=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"fixedsplitterver"
  },function()
  {
   return $.parseHTML("<div style=\"display: grid; \r\n               grid-gap: 0px; \r\n               box-sizing: border-box; \r\n               height: 100%;\r\n               width : 100%;\r\n               grid-template-areas: 'one two'; \r\n               grid-template-rows   :100%; \r\n               overflow: hidden; \r\n               grid-template-columns: ${PartSizes}\">\r\n       <div ws-hole=\"First\" style=\"grid-area: one; \" class=\"relative\"></div>\r\n       <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\"></div>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"fixedsplitterver"
  },function()
  {
   return $.parseHTML("<div style=\"display: grid; \r\n               grid-gap: 0px; \r\n               box-sizing: border-box; \r\n               height: 100%;\r\n               width : 100%;\r\n               grid-template-areas: 'one two'; \r\n               grid-template-rows   :100%; \r\n               overflow: hidden; \r\n               grid-template-columns: ${PartSizes}\">\r\n       <div ws-hole=\"First\" style=\"grid-area: one; \" class=\"relative\"></div>\r\n       <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\"></div>\r\n    </div>");
  });
 };
 FSharpStation_Templates.fixedsplitterhor=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"fixedsplitterhor"
  },function()
  {
   return $.parseHTML("<div style=\"display: grid; \r\n          grid-gap: 0px; \r\n          box-sizing: border-box; \r\n          height: 100%;\r\n          width : 100%;\r\n          grid-template-areas: 'one' 'two'; \r\n          grid-template-columns:100%; \r\n          overflow: hidden; \r\n          grid-template-rows   : ${PartSizes}\">\r\n  <div ws-hole=\"First\" style=\"grid-area: one; \" class=\"relative\"></div>\r\n  <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\"></div>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"fixedsplitterhor"
  },function()
  {
   return $.parseHTML("<div style=\"display: grid; \r\n          grid-gap: 0px; \r\n          box-sizing: border-box; \r\n          height: 100%;\r\n          width : 100%;\r\n          grid-template-areas: 'one' 'two'; \r\n          grid-template-columns:100%; \r\n          overflow: hidden; \r\n          grid-template-rows   : ${PartSizes}\">\r\n  <div ws-hole=\"First\" style=\"grid-area: one; \" class=\"relative\"></div>\r\n  <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\"></div>\r\n    </div>");
  });
 };
 FSharpStation_GeneratedPrintf.p=function($1)
 {
  return"SnippetId "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_JsonEncoder.j$5=function()
 {
  return FSharpStation_JsonEncoder._v$5?FSharpStation_JsonEncoder._v$5:FSharpStation_JsonEncoder._v$5=(Provider.EncodeUnion(ResultMessage,"$",[[0,[["$0","Item",Provider.Id(),0]]],[1,[["$0","Item",Provider.Id(),0]]],[2,[["$0","Item",Provider.Id(),0]]],[3,[["$0","Item1",Provider.Id(),0],["$1","Item2",Provider.Id(),0]]]]))();
 };
 FSharpStation_Templates.appfwkclient=function(h)
 {
  var n;
  n={
   $:1,
   $0:"appfwkclient"
  };
  FSharpStation_Templates.fixedsplitterhor();
  FSharpStation_Templates.fixedsplitterver();
  return h?Templates.GetOrLoadTemplate("appframework",n,function()
  {
   return $.parseHTML("<div>\r\n        <ws-fixedsplitterhor>\r\n            <partsizes>55px calc(100% - 55px)</partsizes>\r\n            <first>\r\n                <span style=\"display: grid;\r\n                      grid-template-columns: 30% 20% 20% 10%;\r\n                      grid-gap: 25px;\r\n                    \">\r\n                    <div class=\"mainTitle\">AppFramework</div>\r\n                </span>\r\n            </first>\r\n            <second>\r\n                    <ws-fixedsplitterver>\r\n                        <partsizes>calc(100% - 150px) 150px</partsizes>\r\n                        <first>\r\n                            <wcomp-splitter vertical=\"\" value=\"18\" max=\"100\">\r\n                                <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\">\r\n                                    \r\n                                </div></div>\r\n                                <wcomp-splitter vertical=\"\" value=\"100\" min=\"30\" max=\"100\">\r\n                                    <ws-fixedsplitterhor>\r\n                                        <partsizes>32px calc(100% - 32px)</partsizes>\r\n                                        <first>\r\n                                            <div>\r\n                                                <div class=\"input-group\">\r\n                                                    <span class=\"input-group-addon\">name:</span>\r\n                                                    <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </first>\r\n                                        <second>\r\n                                            <div style=\"overflow:auto\">\r\n                                                <div>\r\n                                                    <div>Docs:</div>\r\n                                                    <div ws-hole=\"Docs\" style=\"overflow:auto\"></div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Vars:</div>\r\n                                                    <div ws-hole=\"Vars\" style=\"overflow:auto\">\r\n                                                            \r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Views:</div>\r\n                                                    <div ws-hole=\"Views\" style=\"overflow:auto\">\r\n                                                        \r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Queries:</div>\r\n                                                    <div ws-hole=\"Queries\" style=\"overflow:auto\"></div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </second>\r\n                                    </ws-fixedsplitterhor>\r\n                                    <wcomp-tabstrip>\r\n                                        <div tabname=\"Properties\">\r\n                                            <div>\r\n                                                <table style=\"border-spacing:0px\">\r\n                                                    <thead>\r\n                                                        <th style=\"width: 30%  \">Name</th>\r\n                                                        <th style=\"width: 70% \">Value</th>\r\n                                                    </thead>\r\n                                                    <tbody ws-hole=\"Properties\"></tbody>\r\n                                                </table>\r\n                                                <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </wcomp-tabstrip>\r\n                                </wcomp-splitter>\r\n                            </wcomp-splitter>\r\n                        </first>\r\n                        <second>\r\n                            <div style=\"\r\n                                overflow: hidden;\r\n                                display: grid;\r\n                                grid-template-columns: 100%;\r\n                                grid-template-rows: repeat(15, calc(100% / 15));\r\n                                bxackground-color: #eee;\r\n                                box-sizing: border-box;\r\n                                padding : 5px;\r\n                                grid-gap: 5px;\r\n                                margin-right: 21px;\r\n                           \" class=\"absolute\" ws-hole=\"Actions\">\r\n                                \r\n                                \r\n                            </div>\r\n                        </second>\r\n                    </ws-fixedsplitterver>\r\n            </second>\r\n        </ws-fixedsplitterhor>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",n,function()
  {
   return $.parseHTML("<div>\r\n        <ws-fixedsplitterhor>\r\n            <partsizes>55px calc(100% - 55px)</partsizes>\r\n            <first>\r\n                <span style=\"display: grid;\r\n                      grid-template-columns: 30% 20% 20% 10%;\r\n                      grid-gap: 25px;\r\n                    \">\r\n                    <div class=\"mainTitle\">AppFramework</div>\r\n                </span>\r\n            </first>\r\n            <second>\r\n                    <ws-fixedsplitterver>\r\n                        <partsizes>calc(100% - 150px) 150px</partsizes>\r\n                        <first>\r\n                            <wcomp-splitter vertical=\"\" value=\"18\" max=\"100\">\r\n                                <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\">\r\n                                    \r\n                                </div></div>\r\n                                <wcomp-splitter vertical=\"\" value=\"100\" min=\"30\" max=\"100\">\r\n                                    <ws-fixedsplitterhor>\r\n                                        <partsizes>32px calc(100% - 32px)</partsizes>\r\n                                        <first>\r\n                                            <div>\r\n                                                <div class=\"input-group\">\r\n                                                    <span class=\"input-group-addon\">name:</span>\r\n                                                    <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </first>\r\n                                        <second>\r\n                                            <div style=\"overflow:auto\">\r\n                                                <div>\r\n                                                    <div>Docs:</div>\r\n                                                    <div ws-hole=\"Docs\" style=\"overflow:auto\"></div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Vars:</div>\r\n                                                    <div ws-hole=\"Vars\" style=\"overflow:auto\">\r\n                                                            \r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Views:</div>\r\n                                                    <div ws-hole=\"Views\" style=\"overflow:auto\">\r\n                                                        \r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Queries:</div>\r\n                                                    <div ws-hole=\"Queries\" style=\"overflow:auto\"></div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </second>\r\n                                    </ws-fixedsplitterhor>\r\n                                    <wcomp-tabstrip>\r\n                                        <div tabname=\"Properties\">\r\n                                            <div>\r\n                                                <table style=\"border-spacing:0px\">\r\n                                                    <thead>\r\n                                                        <th style=\"width: 30%  \">Name</th>\r\n                                                        <th style=\"width: 70% \">Value</th>\r\n                                                    </thead>\r\n                                                    <tbody ws-hole=\"Properties\"></tbody>\r\n                                                </table>\r\n                                                <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </wcomp-tabstrip>\r\n                                </wcomp-splitter>\r\n                            </wcomp-splitter>\r\n                        </first>\r\n                        <second>\r\n                            <div style=\"\r\n                                overflow: hidden;\r\n                                display: grid;\r\n                                grid-template-columns: 100%;\r\n                                grid-template-rows: repeat(15, calc(100% / 15));\r\n                                bxackground-color: #eee;\r\n                                box-sizing: border-box;\r\n                                padding : 5px;\r\n                                grid-gap: 5px;\r\n                                margin-right: 21px;\r\n                           \" class=\"absolute\" ws-hole=\"Actions\">\r\n                                \r\n                                \r\n                            </div>\r\n                        </second>\r\n                    </ws-fixedsplitterver>\r\n            </second>\r\n        </ws-fixedsplitterhor>\r\n    </div>");
  });
 };
 FSharpStation_JsonEncoder.j$7=function()
 {
  return FSharpStation_JsonEncoder._v$7?FSharpStation_JsonEncoder._v$7:FSharpStation_JsonEncoder._v$7=(Provider.EncodeRecord(void 0,[["snpId",FSharpStation_JsonEncoder.j$8,0],["snpName",Provider.Id(),0],["snpContent",Provider.Id(),0],["snpParentIdO",FSharpStation_JsonEncoder.j$8,1],["snpPredIds",Provider.EncodeSet(FSharpStation_JsonEncoder.j$8),0],["snpProperties",Provider.EncodeArray(Provider.EncodeTuple([Provider.Id(),Provider.Id()])),0],["snpGeneration",Provider.Id(),0]]))();
 };
 FSharpStation_JsonEncoder.j$8=function()
 {
  return FSharpStation_JsonEncoder._v$8?FSharpStation_JsonEncoder._v$8:FSharpStation_JsonEncoder._v$8=(Provider.EncodeUnion(SnippetId,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 FSharpStation_Templates.wcompsplitterver=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"wcompsplitterver"
  },function()
  {
   return $.parseHTML("<div ws-onafterrender=\"AfterRender\" style=\"display: grid; \r\n                grid-gap: 5px; \r\n                box-sizing: border-box; \r\n                grid-template-areas: 'one two'; \r\n                grid-template-rows   :100%; \r\n                overflow: hidden; \r\n                grid-template-columns: ${PartSizes}\">\r\n        <slot></slot>\r\n        <slot name=\"splitter\"> <div style=\"grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\"></div> </slot>\r\n        <style>\r\n            ::slotted(*) {\r\n                display: grid;\r\n                height : 100%;\r\n                width  : 100%;\r\n                overflow: hidden;\r\n            }\r\n            ::slotted(*:nth-child(2)) {\r\n                grid-area: two;\r\n            }\r\n            ::slotted(*[slot=\"splitter\"]) {\r\n                grid-column:2; grid-row:1 / 1\r\n                cursor: column-resize; \r\n                z-index: 3; \r\n                background-color: #eef ; \r\n                width: ${Gap}; \r\n                margin-left:-${Gap}\r\n            }\r\n        </style>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"wcompsplitterver"
  },function()
  {
   return $.parseHTML("<div ws-onafterrender=\"AfterRender\" style=\"display: grid; \r\n                grid-gap: 5px; \r\n                box-sizing: border-box; \r\n                grid-template-areas: 'one two'; \r\n                grid-template-rows   :100%; \r\n                overflow: hidden; \r\n                grid-template-columns: ${PartSizes}\">\r\n        <slot></slot>\r\n        <slot name=\"splitter\"> <div style=\"grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\"></div> </slot>\r\n        <style>\r\n            ::slotted(*) {\r\n                display: grid;\r\n                height : 100%;\r\n                width  : 100%;\r\n                overflow: hidden;\r\n            }\r\n            ::slotted(*:nth-child(2)) {\r\n                grid-area: two;\r\n            }\r\n            ::slotted(*[slot=\"splitter\"]) {\r\n                grid-column:2; grid-row:1 / 1\r\n                cursor: column-resize; \r\n                z-index: 3; \r\n                background-color: #eef ; \r\n                width: ${Gap}; \r\n                margin-left:-${Gap}\r\n            }\r\n        </style>\r\n    </div>");
  });
 };
 FSharpStation_Templates.wcompsplitterhor=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"wcompsplitterhor"
  },function()
  {
   return $.parseHTML("<div ws-onafterrender=\"AfterRender\" style=\"display: grid;\r\n                grid-gap: 5px; \r\n                box-sizing: border-box; \r\n                grid-template-areas: 'one' 'two'; \r\n                grid-template-columns:100%; \r\n                overflow: hidden; \r\n                grid-template-rows   : ${PartSizes}\">\r\n         <slot></slot>\r\n        <slot name=\"splitter\">  <div style=\"grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\"></div> </slot>\r\n        <style>\r\n            ::slotted(*) {\r\n                display: grid;\r\n                height : 100%;\r\n                width  : 100%;\r\n                overflow: hidden;\r\n            }\r\n            ::slotted(*:nth-child(2)) {\r\n                grid-area: two;\r\n            }\r\n            ::slotted(*[slot=\"splitter\"]) {\r\n                grid-row:2; grid-column:1 / 1 ; \r\n                cursor: row-resize; \r\n                z-index: 3; \r\n                background-color: #eef ; \r\n                height: ${Gap}; \r\n                margin-top :-${Gap}\r\n            }\r\n        </style>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"wcompsplitterhor"
  },function()
  {
   return $.parseHTML("<div ws-onafterrender=\"AfterRender\" style=\"display: grid;\r\n                grid-gap: 5px; \r\n                box-sizing: border-box; \r\n                grid-template-areas: 'one' 'two'; \r\n                grid-template-columns:100%; \r\n                overflow: hidden; \r\n                grid-template-rows   : ${PartSizes}\">\r\n         <slot></slot>\r\n        <slot name=\"splitter\">  <div style=\"grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\"></div> </slot>\r\n        <style>\r\n            ::slotted(*) {\r\n                display: grid;\r\n                height : 100%;\r\n                width  : 100%;\r\n                overflow: hidden;\r\n            }\r\n            ::slotted(*:nth-child(2)) {\r\n                grid-area: two;\r\n            }\r\n            ::slotted(*[slot=\"splitter\"]) {\r\n                grid-row:2; grid-column:1 / 1 ; \r\n                cursor: row-resize; \r\n                z-index: 3; \r\n                background-color: #eef ; \r\n                height: ${Gap}; \r\n                margin-top :-${Gap}\r\n            }\r\n        </style>\r\n    </div>");
  });
 };
 FSharpStation_Templates.appframework=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"appframework"
  },function()
  {
   return $.parseHTML("<div style=\"height: calc(100vh - 4px); width: calc(100vw - 4px) \" class=\"relative\">\r\n        <wcomp-splitter value=\"0\" min=\"0\" max=\"100\">\r\n            <div><button ws-onclick=\"GoClient\">${MainDoc}</button></div>\r\n            <div ws-hole=\"MainClient\"></div>\r\n        </wcomp-splitter>\r\n        <style style=\"display: none\">\r\n            .Hidden     { display   : none         }\r\n            table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n            td input.form-control { \r\n                padding    : 0px; \r\n                font-family: monospace;\r\n                font-size  :   small;\r\n                margin-top :   0px;\r\n                margin-left: -2px;\r\n                width      : 100%\r\n            }\r\n            td select {\r\n                font-size : smaller;\r\n                max-width : 8ch;\r\n            }\r\n            xtextarea {\r\n               resize : none;\r\n            }\r\n            .tab-content {\r\n                overflow: hidden\r\n            }\r\n            .tab-children {\r\n                position:relative;\r\n            }\r\n            .tab-children>div>* {\r\n                position:absolute;\r\n                height: 100%;\r\n                width:  100%;\r\n                display: grid;\r\n            }\r\n            .relative {\r\n                position:relative;\r\n            }\r\n            .relative>* {\r\n                position:absolute;\r\n                height: 100%;\r\n                width:  100%;\r\n                display: grid;\r\n            }\r\n            table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n            table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n            table.table-striped    tbody input              { background: transparent; border: none}\r\n            table.table-striped    tbody select             { background: transparent; border: none}\r\n            table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n            table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n            table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n            table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n            table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n            table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                       border-bottom: solid thin blue     ; } \r\n            table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n            table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n            thead { color: gray }\r\n            h3 { \r\n                color: gray;\r\n                line-height: 1em;\r\n            }\r\n            button       { border: solid thin transparent ; border-radius: 3px; }\r\n            button:hover { border: solid thin blue }\r\n            .indenter { position  : absolute; \r\n                        top:0px; bottom:0px; left:0px; \r\n                        background: white; color:white;\r\n                        border-right: gray thin dotted;\r\n                        }\r\n            body {\r\n                color      : #333;\r\n                font-size  : small;\r\n                font-family: monospace;\r\n                line-height: 1.2;\r\n            }\r\n            .mainTitle {  \r\n                font-size: 48px;\r\n                font-weight: 500;\r\n                color: gray;\r\n                margin-top: -12px;\r\n            }\r\n            .CodeMirror {\r\n                height: 100%;\r\n            }\r\n            \r\n          \r\n            body { margin: 0px }     \r\n                 \r\n            div textarea {\r\n                font-family     : monospace;\r\n            }\r\n            .code-editor-list-tile {\r\n                white-space     : nowrap; \r\n                border-style    : solid none none;\r\n                border-color    : white;\r\n                border-width    : 1px;\r\n                background-color: #D8D8D8;\r\n                display         : flex;\r\n            }\r\n            .code-editor-list-text{\r\n                padding         : 1px 10px 1px 5px;\r\n                overflow        : hidden;\r\n                text-overflow   : ellipsis;\r\n                white-space     : nowrap;\r\n                flex            : 1;\r\n            }\r\n            \r\n            .code-editor-list-tile span.node.ErrorMsg {\r\n                background-color: red\r\n            }\r\n            .code-editor-list-tile span.node.expanded::before {\r\n                content: \"-\"\r\n            }\r\n            .code-editor-list-tile span.node.collapsed::before {\r\n                content: \"+\"\r\n            }\r\n            .code-editor-list-tile.direct-predecessor {\r\n                font-weight     : bold;\r\n                color           : blue;\r\n            }\r\n            .code-editor-list-tile.indirect-predecessor {\r\n                color           : blue;\r\n            }\r\n            .code-editor-list-tile.included-predecessor {\r\n                color           : chocolate;\r\n            }\r\n            .code-editor-list-tile.selected {\r\n                background-color: #77F;\r\n                color           : white;\r\n            }\r\n            .code-editor-list-tile.codeSnippet {\r\n                text-decoration: underline\r\n            }\r\n            .code-editor-list-tile:hover {\r\n                background      : lightgray;\r\n            }\r\n            .code-editor-list-tile.selected:hover {\r\n                background      : blue;\r\n            }\r\n            .code-editor-list-tile>.predecessor {\r\n                font-weight     : bold;\r\n                border-style    : inset;\r\n                border-width    : 1px;\r\n                text-align      : center;\r\n                color           : transparent;\r\n            }\r\n            .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                color           : blue;\r\n            }\r\n            \r\n            .CodeMirror { height: 100%; }\r\n            \r\n            .node {\r\n                background-color: white; \r\n                width           : 2ch; \r\n                color           : #A03; \r\n                font-weight     : bold; \r\n                text-align      : center;\r\n                font-family     : arial;\r\n            }\r\n            .Warning { text-decoration: underline lightblue } \r\n            .Error   { text-decoration: underline red       } \r\n            \r\n        </style>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"appframework"
  },function()
  {
   return $.parseHTML("<div style=\"height: calc(100vh - 4px); width: calc(100vw - 4px) \" class=\"relative\">\r\n        <wcomp-splitter value=\"0\" min=\"0\" max=\"100\">\r\n            <div><button ws-onclick=\"GoClient\">${MainDoc}</button></div>\r\n            <div ws-hole=\"MainClient\"></div>\r\n        </wcomp-splitter>\r\n        <style style=\"display: none\">\r\n            .Hidden     { display   : none         }\r\n            table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n            td input.form-control { \r\n                padding    : 0px; \r\n                font-family: monospace;\r\n                font-size  :   small;\r\n                margin-top :   0px;\r\n                margin-left: -2px;\r\n                width      : 100%\r\n            }\r\n            td select {\r\n                font-size : smaller;\r\n                max-width : 8ch;\r\n            }\r\n            xtextarea {\r\n               resize : none;\r\n            }\r\n            .tab-content {\r\n                overflow: hidden\r\n            }\r\n            .tab-children {\r\n                position:relative;\r\n            }\r\n            .tab-children>div>* {\r\n                position:absolute;\r\n                height: 100%;\r\n                width:  100%;\r\n                display: grid;\r\n            }\r\n            .relative {\r\n                position:relative;\r\n            }\r\n            .relative>* {\r\n                position:absolute;\r\n                height: 100%;\r\n                width:  100%;\r\n                display: grid;\r\n            }\r\n            table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n            table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n            table.table-striped    tbody input              { background: transparent; border: none}\r\n            table.table-striped    tbody select             { background: transparent; border: none}\r\n            table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n            table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n            table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n            table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n            table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n            table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                       border-bottom: solid thin blue     ; } \r\n            table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n            table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n            thead { color: gray }\r\n            h3 { \r\n                color: gray;\r\n                line-height: 1em;\r\n            }\r\n            button       { border: solid thin transparent ; border-radius: 3px; }\r\n            button:hover { border: solid thin blue }\r\n            .indenter { position  : absolute; \r\n                        top:0px; bottom:0px; left:0px; \r\n                        background: white; color:white;\r\n                        border-right: gray thin dotted;\r\n                        }\r\n            body {\r\n                color      : #333;\r\n                font-size  : small;\r\n                font-family: monospace;\r\n                line-height: 1.2;\r\n            }\r\n            .mainTitle {  \r\n                font-size: 48px;\r\n                font-weight: 500;\r\n                color: gray;\r\n                margin-top: -12px;\r\n            }\r\n            .CodeMirror {\r\n                height: 100%;\r\n            }\r\n            \r\n          \r\n            body { margin: 0px }     \r\n                 \r\n            div textarea {\r\n                font-family     : monospace;\r\n            }\r\n            .code-editor-list-tile {\r\n                white-space     : nowrap; \r\n                border-style    : solid none none;\r\n                border-color    : white;\r\n                border-width    : 1px;\r\n                background-color: #D8D8D8;\r\n                display         : flex;\r\n            }\r\n            .code-editor-list-text{\r\n                padding         : 1px 10px 1px 5px;\r\n                overflow        : hidden;\r\n                text-overflow   : ellipsis;\r\n                white-space     : nowrap;\r\n                flex            : 1;\r\n            }\r\n            \r\n            .code-editor-list-tile span.node.ErrorMsg {\r\n                background-color: red\r\n            }\r\n            .code-editor-list-tile span.node.expanded::before {\r\n                content: \"-\"\r\n            }\r\n            .code-editor-list-tile span.node.collapsed::before {\r\n                content: \"+\"\r\n            }\r\n            .code-editor-list-tile.direct-predecessor {\r\n                font-weight     : bold;\r\n                color           : blue;\r\n            }\r\n            .code-editor-list-tile.indirect-predecessor {\r\n                color           : blue;\r\n            }\r\n            .code-editor-list-tile.included-predecessor {\r\n                color           : chocolate;\r\n            }\r\n            .code-editor-list-tile.selected {\r\n                background-color: #77F;\r\n                color           : white;\r\n            }\r\n            .code-editor-list-tile.codeSnippet {\r\n                text-decoration: underline\r\n            }\r\n            .code-editor-list-tile:hover {\r\n                background      : lightgray;\r\n            }\r\n            .code-editor-list-tile.selected:hover {\r\n                background      : blue;\r\n            }\r\n            .code-editor-list-tile>.predecessor {\r\n                font-weight     : bold;\r\n                border-style    : inset;\r\n                border-width    : 1px;\r\n                text-align      : center;\r\n                color           : transparent;\r\n            }\r\n            .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                color           : blue;\r\n            }\r\n            \r\n            .CodeMirror { height: 100%; }\r\n            \r\n            .node {\r\n                background-color: white; \r\n                width           : 2ch; \r\n                color           : #A03; \r\n                font-weight     : bold; \r\n                text-align      : center;\r\n                font-family     : arial;\r\n            }\r\n            .Warning { text-decoration: underline lightblue } \r\n            .Error   { text-decoration: underline red       } \r\n            \r\n        </style>\r\n    </div>");
  });
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("docName = "+Utils.prettyPrint($1.docName))+"; "+("docDoc = "+FSharpStation_GeneratedPrintf.p$1($1.docDoc))+"}";
 };
 FSharpStation_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==5?"FunDoc5 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+", "+Utils.prettyPrint($1.$4)+", "+Utils.prettyPrint($1.$5)+")":$1.$==4?"FunDoc4 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+", "+Utils.prettyPrint($1.$4)+")":$1.$==3?"FunDoc3 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+")":$1.$==2?"FunDoc2 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":$1.$==1?"FunDoc1 (<fun>, "+Utils.prettyPrint($1.$1)+")":"LazyDoc "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_Templates.tile=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"tile"
  },function()
  {
   return $.parseHTML("<div>\r\n                                        <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" ws-ondrag=\"Drag\" ws-ondragover=\"DragOver\" ws-ondrop=\"Drop\">\r\n                                       <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                                       <div class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\">${Name}</div>\r\n                                       <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                                   </div>\r\n                           \r\n                                    </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"tile"
  },function()
  {
   return $.parseHTML("<div>\r\n                                        <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" ws-ondrag=\"Drag\" ws-ondragover=\"DragOver\" ws-ondrop=\"Drop\">\r\n                                       <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                                       <div class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\">${Name}</div>\r\n                                       <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                                   </div>\r\n                           \r\n                                    </div>");
  });
 };
 FSharpStation_Templates.actiondisabled=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"actiondisabled"
  },function()
  {
   return $.parseHTML("<button ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\" disabled=\"\">${Name}</button>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"actiondisabled"
  },function()
  {
   return $.parseHTML("<button ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\" disabled=\"\">${Name}</button>");
  });
 };
 FSharpStation_Templates.action=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"action"
  },function()
  {
   return $.parseHTML("<button ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\">${Name}</button>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"action"
  },function()
  {
   return $.parseHTML("<button ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\">${Name}</button>");
  });
 };
 FSharpStation_Templates.namevalue=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"namevalue"
  },function()
  {
   return $.parseHTML("<div class=\"input-group\">\r\n                                                            <span class=\"input-group-addon\">${Name}:</span>\r\n                                                            <span class=\"input-group-addon\">${Value}</span>\r\n                                                        </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"namevalue"
  },function()
  {
   return $.parseHTML("<div class=\"input-group\">\r\n                                                            <span class=\"input-group-addon\">${Name}:</span>\r\n                                                            <span class=\"input-group-addon\">${Value}</span>\r\n                                                        </div>");
  });
 };
 FSharpStation_Templates.namevalueinput=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"namevalueinput"
  },function()
  {
   return $.parseHTML("<div class=\"input-group\">\r\n                                                            <span class=\"input-group-addon\">${Name}:</span>\r\n                                                            <textarea class=\"form-control\" id=\"\" placeholder=\"Value...\" ws-var=\"Value\" spellcheck=\"false\">\r\n                                                        </textarea></div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"namevalueinput"
  },function()
  {
   return $.parseHTML("<div class=\"input-group\">\r\n                                                            <span class=\"input-group-addon\">${Name}:</span>\r\n                                                            <textarea class=\"form-control\" id=\"\" placeholder=\"Value...\" ws-var=\"Value\" spellcheck=\"false\">\r\n                                                        </textarea></div>");
  });
 };
 FSharpStation_Templates.snippetlist=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"snippetlist"
  },h):void 0;
 };
 FSharpStation_Templates.snippet=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"snippet"
  },h):void 0;
 };
 FSharpStation_Templates.propertytable=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"propertytable"
  },h):void 0;
 };
 FSharpStation_Templates.property=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"property"
  },h):void 0;
 };
 FSharpStation_Templates.layout=function(h)
 {
  FSharpStation_Templates.fixedsplitterhor();
  FSharpStation_Templates.fixedsplitterver();
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"layout"
  },h):void 0;
 };
 FSharpStation_Templates.buttonsright=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"buttonsright"
  },h):void 0;
 };
 FSharpStation_GeneratedPrintf.p$2=function($1)
 {
  return $1.$==3?"ExceptMsg ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":$1.$==2?"Message "+FSharpStation_GeneratedPrintf.p$3($1.$0):$1.$==1?"Warning "+Utils.prettyPrint($1.$0):"ErrorMsg "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==3?"ShellCrashed ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":$1.$==2?"ShellNoExit ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":$1.$==1?"ShellExit ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":"ShellDidNotStart";
 };
 FSharpStation_GeneratedPrintf.p$5=function($1)
 {
  return $1.$==5?"MsgGetUrl":$1.$==4?"MsgAction "+Utils.printArray(Utils.prettyPrint,$1.$0):$1.$==3?"MsgGetPredecessors "+FSharpStation_GeneratedPrintf.p$4($1.$0):$1.$==2?"MsgGetCode "+FSharpStation_GeneratedPrintf.p$4($1.$0):$1.$==1?"MsgGetSnippets "+Utils.printArray(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$4($2);
  },$1.$0):"MsgGetId";
 };
 FSharpStation_GeneratedPrintf.p$4=function($1)
 {
  return $1.$==1?"RefSnippetPath "+Utils.printArray(Utils.prettyPrint,$1.$0):"RefSnippetId "+FSharpStation_GeneratedPrintf.p($1.$0);
 };
 FSharpStation_JsonEncoder.j$9=function()
 {
  return FSharpStation_JsonEncoder._v$9?FSharpStation_JsonEncoder._v$9:FSharpStation_JsonEncoder._v$9=(Provider.EncodeUnion(void 0,"type",[["BRGetConnections",[]],["BRGetProcessId",[]]]))();
 };
 FSharpStation_GeneratedPrintf.p$6=function($1)
 {
  return $1.$==2?"BRString "+Utils.prettyPrint($1.$0):$1.$==1?"BRPid "+Utils.prettyPrint($1.$0):"BRConnections "+Utils.printArray(Utils.prettyPrint,$1.$0);
 };
 FSharpStation_JsonDecoder.j$7=function()
 {
  return FSharpStation_JsonDecoder._v$7?FSharpStation_JsonDecoder._v$7:FSharpStation_JsonDecoder._v$7=(Provider.DecodeUnion(void 0,"type",[["BRConnections",[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]],["BRPid",[["$0","Item",Provider.Id(),0]]],["BRString",[["$0","Item",Provider.Id(),0]]]]))();
 };
 FSharpStation_JsonDecoder.j$8=function()
 {
  return FSharpStation_JsonDecoder._v$8?FSharpStation_JsonDecoder._v$8:FSharpStation_JsonDecoder._v$8=(Provider.DecodeUnion(void 0,"type",[["BMOk",[]],["BMOnlyBrokerShouldUse",[]],["BMDestinationNotFound",[["$0","Item",FSharpStation_JsonDecoder.j$1,0]]],["BMWebSocketError",[["$0","Item",Provider.Id(),0]]],["BMReceiverCantReply",[]],["BMUnexpectedMsgType",[["$0","Item",FSharpStation_JsonDecoder.j$2,0]]],["BMUnexpectedResponse",[["$0","Item",Provider.Id(),0]]]]))();
 };
 FSharpStation_GeneratedPrintf.p$9=function($1)
 {
  return $1.$==2?"Receiver":$1.$==1?"Broker":"NoReply";
 };
 FSharpStation_GeneratedPrintf.p$8=function($1)
 {
  return $1.$==5?"MsgRequestForEcho":$1.$==4?"MsgRequestForId":$1.$==3?"MsgFromBroker":$1.$==2?"MsgReply":$1.$==1?"MsgRequest":"MsgInformation";
 };
 GeneratedPrintf.p$1=function($1)
 {
  return"{"+("from = "+FSharpStation_GeneratedPrintf.p$7($1.from))+"; "+("destination = "+FSharpStation_GeneratedPrintf.p$7($1.destination))+"; "+("msgType = "+FSharpStation_GeneratedPrintf.p$8($1.msgType))+"; "+("subtype = "+Utils.prettyPrint($1.subtype))+"; "+("id = "+Utils.prettyPrint($1.id))+"; "+("payload = "+Utils.prettyPrint($1.payload))+"; "+("replier = "+FSharpStation_GeneratedPrintf.p$9($1.replier))+"}";
 };
 FSharpStation_GeneratedPrintf.p$7=function($1)
 {
  return"Address "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$10=function($1)
 {
  return $1.$==3?"Close":$1.$==2?"Open":$1.$==1?"Error":"Message "+GeneratedPrintf.p$1($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$11=function($1)
 {
  return $1.$==3?"ExceptMsg ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":$1.$==2?"Message "+Utils.printArray(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$12($2);
  },$1.$0):$1.$==1?"Warning "+Utils.prettyPrint($1.$0):"ErrorMsg "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$12=function($1)
 {
  return $1.$==17?"KMultiple "+Utils.printArray(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$12($2);
  },$1.$0):$1.$==16?"KUnionCase "+GeneratedPrintf.p$23($1.$0):$1.$==15?"KNamespaces "+GeneratedPrintf.p$20($1.$0):$1.$==14?"KCompilerLocation "+GeneratedPrintf.p$19($1.$0):$1.$==13?"KSignatureData "+GeneratedPrintf.p$17($1.$0):$1.$==12?"KTypeSig "+Utils.prettyPrint($1.$0):$1.$==11?"KToolTip "+Utils.printArray(function($2)
  {
   return Utils.printArray(function($3)
   {
    return GeneratedPrintf.p$4($3);
   },$2);
  },$1.$0):$1.$==10?"KDeclarations "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$15($2);
  },$1.$0):$1.$==9?"KFindDecl "+GeneratedPrintf.p$14($1.$0):$1.$==8?"KColorizations "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$13($2);
  },$1.$0):$1.$==7?"KErrors "+GeneratedPrintf.p$11($1.$0):$1.$==6?"KMethod "+GeneratedPrintf.p$8($1.$0):$1.$==5?"KHelp "+Utils.prettyPrint($1.$0):$1.$==4?"KSymbolUse "+GeneratedPrintf.p$6($1.$0):$1.$==3?"KCompletion "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$5($2);
  },$1.$0):$1.$==2?"KHelpText "+GeneratedPrintf.p$3($1.$0):$1.$==1?"KError "+GeneratedPrintf.p$2($1.$0):"KInfo "+Utils.prettyPrint($1.$0);
 };
 GeneratedPrintf.p$23=function($1)
 {
  return"{"+("Text = "+Utils.prettyPrint($1.Text))+"}";
 };
 GeneratedPrintf.p$22=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Qualifier = "+Utils.prettyPrint($1.Qualifier))+"}";
 };
 GeneratedPrintf.p$21=function($1)
 {
  return"{"+("Namespace = "+Utils.prettyPrint($1.Namespace))+"; "+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Type = "+Utils.prettyPrint($1.Type))+"; "+("Line = "+Utils.prettyPrint($1.Line))+"; "+("Column = "+Utils.prettyPrint($1.Column))+"; "+("MultipleNames = "+Utils.prettyPrint($1.MultipleNames))+"}";
 };
 GeneratedPrintf.p$19=function($1)
 {
  return"{"+("Fsc = "+Utils.prettyPrint($1.Fsc))+"; "+("Fsi = "+Utils.prettyPrint($1.Fsi))+"; "+("MSBuild = "+Utils.prettyPrint($1.MSBuild))+"}";
 };
 GeneratedPrintf.p$17=function($1)
 {
  return"{"+("OutputType = "+Utils.prettyPrint($1.OutputType))+"; "+("Parameters = "+Utils.printList(function($2)
  {
   return Utils.printList(function($3)
   {
    return GeneratedPrintf.p$18($3);
   },$2);
  },$1.Parameters))+"}";
 };
 GeneratedPrintf.p$20=function($1)
 {
  return"{"+("Opens = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$21($2);
  },$1.Opens))+"; "+("Qualifies = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$22($2);
  },$1.Qualifies))+"; "+("Word = "+Utils.prettyPrint($1.Word))+"}";
 };
 GeneratedPrintf.p$18=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Type = "+Utils.prettyPrint($1.Type))+"}";
 };
 GeneratedPrintf.p$15=function($1)
 {
  return"{"+("Declaration = "+GeneratedPrintf.p$16($1.Declaration))+"; "+("Nested = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$16($2);
  },$1.Nested))+"}";
 };
 GeneratedPrintf.p$14=function($1)
 {
  return"{"+("File = "+Utils.prettyPrint($1.File))+"; "+("Line = "+Utils.prettyPrint($1.Line))+"; "+("Column = "+Utils.prettyPrint($1.Column))+"}";
 };
 GeneratedPrintf.p$16=function($1)
 {
  return"{"+("UniqueName = "+Utils.prettyPrint($1.UniqueName))+"; "+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Glyph = "+Utils.prettyPrint($1.Glyph))+"; "+("GlyphChar = "+Utils.prettyPrint($1.GlyphChar))+"; "+("IsTopLevel = "+Utils.prettyPrint($1.IsTopLevel))+"; "+("File = "+Utils.prettyPrint($1.File))+"; "+("EnclosingEntity = "+Utils.prettyPrint($1.EnclosingEntity))+"; "+("IsAbstract = "+Utils.prettyPrint($1.IsAbstract))+"}";
 };
 GeneratedPrintf.p$13=function($1)
 {
  return"{"+("Kind = "+Utils.prettyPrint($1.Kind))+"}";
 };
 GeneratedPrintf.p$11=function($1)
 {
  return"{"+("File = "+Utils.prettyPrint($1.File))+"; "+("Errors = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$12($2);
  },$1.Errors))+"}";
 };
 GeneratedPrintf.p$12=function($1)
 {
  return"{"+("FileName = "+Utils.prettyPrint($1.FileName))+"; "+("StartLine = "+Utils.prettyPrint($1.StartLine))+"; "+("EndLine = "+Utils.prettyPrint($1.EndLine))+"; "+("StartColumn = "+Utils.prettyPrint($1.StartColumn))+"; "+("EndColumn = "+Utils.prettyPrint($1.EndColumn))+"; "+("Severity = "+Utils.prettyPrint($1.Severity))+"; "+("Message = "+Utils.prettyPrint($1.Message))+"; "+("Subcategory = "+Utils.prettyPrint($1.Subcategory))+"}";
 };
 GeneratedPrintf.p$8=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("CurrentParameter = "+Utils.prettyPrint($1.CurrentParameter))+"; "+("Overloads = "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$9($2);
  },$1.Overloads))+"}";
 };
 GeneratedPrintf.p$9=function($1)
 {
  return"{"+("Tip = "+Utils.printList(function($2)
  {
   return Utils.printList(function($3)
   {
    return GeneratedPrintf.p$4($3);
   },$2);
  },$1.Tip))+"; "+("TypeText = "+Utils.prettyPrint($1.TypeText))+"; "+("Parameters = "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$10($2);
  },$1.Parameters))+"; "+("IsStaticArguments = "+Utils.prettyPrint($1.IsStaticArguments))+"}";
 };
 GeneratedPrintf.p$10=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("CanonicalTypeTextForSorting = "+Utils.prettyPrint($1.CanonicalTypeTextForSorting))+"; "+("Display = "+Utils.prettyPrint($1.Display))+"; "+("Description = "+Utils.prettyPrint($1.Description))+"}";
 };
 GeneratedPrintf.p$6=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Uses = "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$7($2);
  },$1.Uses))+"}";
 };
 GeneratedPrintf.p$7=function($1)
 {
  return"{"+("FileName = "+Utils.prettyPrint($1.FileName))+"; "+("StartLine = "+Utils.prettyPrint($1.StartLine))+"; "+("StartColumn = "+Utils.prettyPrint($1.StartColumn))+"; "+("EndLine = "+Utils.prettyPrint($1.EndLine))+"; "+("EndColumn = "+Utils.prettyPrint($1.EndColumn))+"; "+("IsFromDefinition = "+Utils.prettyPrint($1.IsFromDefinition))+"; "+("IsFromAttribute = "+Utils.prettyPrint($1.IsFromAttribute))+"; "+("IsFromComputationExpression = "+Utils.prettyPrint($1.IsFromComputationExpression))+"; "+("IsFromDispatchSlotImplementation = "+Utils.prettyPrint($1.IsFromDispatchSlotImplementation))+"; "+("IsFromPattern = "+Utils.prettyPrint($1.IsFromPattern))+"; "+("IsFromType = "+Utils.prettyPrint($1.IsFromType))+"}";
 };
 GeneratedPrintf.p$5=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("ReplacementText = "+Utils.prettyPrint($1.ReplacementText))+"; "+("Glyph = "+Utils.prettyPrint($1.Glyph))+"; "+("GlyphChar = "+Utils.prettyPrint($1.GlyphChar))+"}";
 };
 GeneratedPrintf.p$3=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Overloads = "+Utils.printList(function($2)
  {
   return Utils.printList(function($3)
   {
    return GeneratedPrintf.p$4($3);
   },$2);
  },$1.Overloads))+"}";
 };
 GeneratedPrintf.p$4=function($1)
 {
  return"{"+("Signature = "+Utils.prettyPrint($1.Signature))+"; "+("Comment = "+Utils.prettyPrint($1.Comment))+"; "+("Footer = "+Utils.prettyPrint($1.Footer))+"}";
 };
 GeneratedPrintf.p$2=function($1)
 {
  return"{"+("Code = "+Utils.prettyPrint($1.Code))+"; "+("Message = "+Utils.prettyPrint($1.Message))+"}";
 };
 FSharpStation_JsonEncoder.j$1=function()
 {
  return FSharpStation_JsonEncoder._v$1?FSharpStation_JsonEncoder._v$1:FSharpStation_JsonEncoder._v$1=(Provider.EncodeUnion(Address,"$",[[0,[["$0","address",Provider.Id(),0]]]]))();
 };
 FSharpStation_JsonEncoder.j$2=function()
 {
  return FSharpStation_JsonEncoder._v$2?FSharpStation_JsonEncoder._v$2:FSharpStation_JsonEncoder._v$2=(Provider.EncodeUnion(void 0,"type",[["MsgInformation",[]],["MsgRequest",[]],["MsgReply",[]],["MsgFromBroker",[]],["MsgRequestForId",[]],["MsgRequestForEcho",[]]]))();
 };
 FSharpStation_JsonEncoder.j$3=function()
 {
  return FSharpStation_JsonEncoder._v$3?FSharpStation_JsonEncoder._v$3:FSharpStation_JsonEncoder._v$3=(Provider.EncodeUnion(void 0,"type",[["NoReply",[]],["Broker",[]],["Receiver",[]]]))();
 };
 FSharpStation_JsonEncoder.j=function()
 {
  return FSharpStation_JsonEncoder._v?FSharpStation_JsonEncoder._v:FSharpStation_JsonEncoder._v=(Provider.EncodeRecord(void 0,[["from",FSharpStation_JsonEncoder.j$1,0],["destination",FSharpStation_JsonEncoder.j$1,0],["msgType",FSharpStation_JsonEncoder.j$2,0],["subtype",Provider.Id(),0],["id",Provider.Id(),0],["payload",Provider.Id(),0],["replier",FSharpStation_JsonEncoder.j$3,0]]))();
 };
 FSharpStation_JsonDecoder.j$1=function()
 {
  return FSharpStation_JsonDecoder._v$1?FSharpStation_JsonDecoder._v$1:FSharpStation_JsonDecoder._v$1=(Provider.DecodeUnion(Address,"$",[[0,[["$0","address",Provider.Id(),0]]]]))();
 };
 FSharpStation_JsonDecoder.j$2=function()
 {
  return FSharpStation_JsonDecoder._v$2?FSharpStation_JsonDecoder._v$2:FSharpStation_JsonDecoder._v$2=(Provider.DecodeUnion(void 0,"type",[["MsgInformation",[]],["MsgRequest",[]],["MsgReply",[]],["MsgFromBroker",[]],["MsgRequestForId",[]],["MsgRequestForEcho",[]]]))();
 };
 FSharpStation_JsonDecoder.j$3=function()
 {
  return FSharpStation_JsonDecoder._v$3?FSharpStation_JsonDecoder._v$3:FSharpStation_JsonDecoder._v$3=(Provider.DecodeUnion(void 0,"type",[["NoReply",[]],["Broker",[]],["Receiver",[]]]))();
 };
 FSharpStation_JsonDecoder.j=function()
 {
  return FSharpStation_JsonDecoder._v?FSharpStation_JsonDecoder._v:FSharpStation_JsonDecoder._v=(Provider.DecodeRecord(void 0,[["from",FSharpStation_JsonDecoder.j$1,0],["destination",FSharpStation_JsonDecoder.j$1,0],["msgType",FSharpStation_JsonDecoder.j$2,0],["subtype",Provider.Id(),0],["id",Provider.Id(),0],["payload",Provider.Id(),0],["replier",FSharpStation_JsonDecoder.j$3,0]]))();
 };
 FSharpStation_JsonDecoder.j$4=function()
 {
  return FSharpStation_JsonDecoder._v$4?FSharpStation_JsonDecoder._v$4:FSharpStation_JsonDecoder._v$4=(Provider.DecodeUnion(void 0,"$",[[0,[]],[1,[["$0","Item",Provider.DecodeArray(FSharpStation_JsonDecoder.j$5),0]]],[2,[["$0","Item",FSharpStation_JsonDecoder.j$5,0]]],[3,[["$0","Item",FSharpStation_JsonDecoder.j$5,0]]],[4,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]],[5,[]]]))();
 };
}());

//# sourceMappingURL=FSharpStation.map
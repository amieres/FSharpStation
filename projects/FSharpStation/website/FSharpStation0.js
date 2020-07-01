(function()
{
 "use strict";
 var Global,FsRoot,Library,StringId,GuidId,Dict,ResultMessage,ResultMessageHelpers,Monads,Seq,Option,Async,WebSharper,Obj,State,CEBuilder,Operators,Result,Builder,Operators$1,BuilderP,Depend,DependBuilder,Operators$2,FusionM,Operators$3,Builder$1,Builder$2,FusionAsyncM,Operators$4,Builder$3,Builder$4,ResultM,Builder$5,Operators$5,ResultMAutoOpen,AsyncResult,AsyncResultBuilder,AsyncResultBuilderP,Extensions,AsyncResultM,AsyncResultMBuilder,Operators$6,AsyncResultMAutoOpen,String,ParseO,MailboxProcessorExt,Mailbox,StateFull,ResourceAgentState,ResourceAgent,AgentReaderM,CommArgRoot,CommArg,CommArgCollection,TypedCommArg,CommArgModule,FsCodeModule,PreproDirective,PrepState,SnippetId,Snippet,SnippetCollection,SnippetModule,Hole,TreeReader,Node,LibraryJS,Promise,PromiseM,View,Var,ListModel,Pojo,GenEditor,Position,AnnotationType,Annotation,Completion,GenEditorHook,GenEditor$1,Serializer,REGEX,Hoverable,Hoverable$1,ResizeObserver,WebComponent,WcTabStrip,WcTabStripT,WcSplitter,WcSplitterT,Monaco,Position$1,Range,Uri,Location,FindMatch,WordAtPosition,Model,MarkDownString,MarkerData,CompletionItem,Hover,Editor,MonacoConfig,MonacoGenAdapter,MonacoRT,CompletionItemProvider,HoverProvider,DefinitionProvider,AppFrameworkTemplate,AppFramework,PlgElemName,PlugInName,PlugInVar,PlugInView,PlugInDoc,PlugInAction,PlugInQuery,PlugIn,PlugInBuilder,Fun,P,Val,AAttr,Extract0,ListModelData,LM,StartAppFramework,AppFrameworkUI,LayoutEngine,LayoutEngineModule,Measures,Syntax,RefType,TemplateDef,Layout,NewLY,P$1,Library2,FsiAgent,WebSockets,Address,BrokerRequest,MessageType,BrokerMessage,Replier,MessageGeneric,ClientTypeFSharp,ClientTypeFSStation,ClientTypeJScript,ReplyHandler,Handler,WSMessagingClient,FSMessage,FsAutoComplete,CommTypes,ResponseError,Location$1,CompletionResponse,OverloadDescription,OverloadParameter,Overload,Parameter,SignatureData,MethodResponse,SymbolUseRange,SymbolUseResponse,HelpTextResponse,CompilerLocationResponse,FSharpErrorInfo,ErrorResponse,Colorization,Declaration,DeclarationResponse,OpenNamespace,QualifySymbol,ResolveNamespaceResponse,UnionCaseResponse,MsgTypes,ParseRequest,DeclarationsRequest,CompletionRequest,PositionRequest,ProjectRequest,LintRequest,HelptextRequest,WorkspacePeekRequest,Calls,FSharpStation,FStation,Snippets,DragDrop,DragInfo,Templating,RenderSnippets,RenderProperties,Monaco$1,HoverProvider$1,CompletionItemProvider$1,DefinitionProvider$1,MonacoOptions,ITextModelService,JumpTo,CustomAction,Serializer$1,Model$1,LoadSave,Importer,MainProgram,EndPoint,Messaging,Server,SC$1,FSharpStation_JsonEncoder,FSharpStation_Templates,FSharpStation_GeneratedPrintf,FSharpStation_Router,GeneratedPrintf,FSharpStation_JsonDecoder,IntelliFactory,Runtime,Utils,Strings,Seq$1,List,Arrays,Concurrency,Enumerator,Result$1,Operators$7,Unchecked,Slice,Char,Control,MailboxProcessor,System,Guid,Collections,FSharpSet,Option$1,Date,UI,Var$1,View$1,CancellationTokenSource,console,Var$2,FromView,Doc,FSharpMap,BalancedTree,DomUtility,AttrModule,AttrProxy,Node$1,Client,Templates,Reflect,Object,Lazy,Templating$1,Runtime$1,Server$1,ProviderBuilder,Handler$1,TemplateInstance,ListModel$1,Math,Dictionary,MatchFailureException,Map,JSON,TimeoutException,ClientSideJson,Provider,Owin,WebSocket,Client$1,WithEncoding,Endpoint,location,Remoting,AjaxRemotingProvider,JavaScript,Promise$1,DateUtil,Numeric,Attrs,Input,Mouse,Keyboard,Router,Sitelets,RouterOperators;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 StringId=Library.StringId=Library.StringId||{};
 GuidId=Library.GuidId=Library.GuidId||{};
 Dict=Library.Dict=Library.Dict||{};
 ResultMessage=Library.ResultMessage=Library.ResultMessage||{};
 ResultMessageHelpers=Library.ResultMessageHelpers=Library.ResultMessageHelpers||{};
 Monads=Library.Monads=Library.Monads||{};
 Seq=Monads.Seq=Monads.Seq||{};
 Option=Monads.Option=Monads.Option||{};
 Async=Monads.Async=Monads.Async||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 State=Monads.State=Monads.State||{};
 CEBuilder=State.CEBuilder=State.CEBuilder||{};
 Operators=State.Operators=State.Operators||{};
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 Operators$1=Result.Operators=Result.Operators||{};
 BuilderP=Result.BuilderP=Result.BuilderP||{};
 Depend=Monads.Depend=Monads.Depend||{};
 DependBuilder=Depend.DependBuilder=Depend.DependBuilder||{};
 Operators$2=Depend.Operators=Depend.Operators||{};
 FusionM=Monads.FusionM=Monads.FusionM||{};
 Operators$3=FusionM.Operators=FusionM.Operators||{};
 Builder$1=FusionM.Builder=FusionM.Builder||{};
 Builder$2=Builder$1.Builder=Builder$1.Builder||{};
 FusionAsyncM=Monads.FusionAsyncM=Monads.FusionAsyncM||{};
 Operators$4=FusionAsyncM.Operators=FusionAsyncM.Operators||{};
 Builder$3=FusionAsyncM.Builder=FusionAsyncM.Builder||{};
 Builder$4=Builder$3.Builder=Builder$3.Builder||{};
 ResultM=Monads.ResultM=Monads.ResultM||{};
 Builder$5=ResultM.Builder=ResultM.Builder||{};
 Operators$5=ResultM.Operators=ResultM.Operators||{};
 ResultMAutoOpen=Monads.ResultMAutoOpen=Monads.ResultMAutoOpen||{};
 AsyncResult=Monads.AsyncResult=Monads.AsyncResult||{};
 AsyncResultBuilder=Monads.AsyncResultBuilder=Monads.AsyncResultBuilder||{};
 AsyncResultBuilderP=Monads.AsyncResultBuilderP=Monads.AsyncResultBuilderP||{};
 Extensions=Monads.Extensions=Monads.Extensions||{};
 AsyncResultM=Monads.AsyncResultM=Monads.AsyncResultM||{};
 AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder||{};
 Operators$6=AsyncResultM.Operators=AsyncResultM.Operators||{};
 AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen||{};
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
 PrepState=FsCodeModule.PrepState=FsCodeModule.PrepState||{};
 SnippetId=Library.SnippetId=Library.SnippetId||{};
 Snippet=Library.Snippet=Library.Snippet||{};
 SnippetCollection=Library.SnippetCollection=Library.SnippetCollection||{};
 SnippetModule=Library.SnippetModule=Library.SnippetModule||{};
 Hole=Library.Hole=Library.Hole||{};
 TreeReader=Library.TreeReader=Library.TreeReader||{};
 Node=TreeReader.Node=TreeReader.Node||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Promise=LibraryJS.Promise=LibraryJS.Promise||{};
 PromiseM=LibraryJS.PromiseM=LibraryJS.PromiseM||{};
 View=LibraryJS.View=LibraryJS.View||{};
 Var=LibraryJS.Var=LibraryJS.Var||{};
 ListModel=LibraryJS.ListModel=LibraryJS.ListModel||{};
 Pojo=LibraryJS.Pojo=LibraryJS.Pojo||{};
 GenEditor=LibraryJS.GenEditor=LibraryJS.GenEditor||{};
 Position=GenEditor.Position=GenEditor.Position||{};
 AnnotationType=GenEditor.AnnotationType=GenEditor.AnnotationType||{};
 Annotation=GenEditor.Annotation=GenEditor.Annotation||{};
 Completion=GenEditor.Completion=GenEditor.Completion||{};
 GenEditorHook=GenEditor.GenEditorHook=GenEditor.GenEditorHook||{};
 GenEditor$1=GenEditor.GenEditor=GenEditor.GenEditor||{};
 Serializer=LibraryJS.Serializer=LibraryJS.Serializer||{};
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
 Position$1=Monaco.Position=Monaco.Position||{};
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
 MonacoGenAdapter=LibraryJS.MonacoGenAdapter=LibraryJS.MonacoGenAdapter||{};
 MonacoRT=MonacoGenAdapter.MonacoRT=MonacoGenAdapter.MonacoRT||{};
 CompletionItemProvider=MonacoGenAdapter.CompletionItemProvider=MonacoGenAdapter.CompletionItemProvider||{};
 HoverProvider=MonacoGenAdapter.HoverProvider=MonacoGenAdapter.HoverProvider||{};
 DefinitionProvider=MonacoGenAdapter.DefinitionProvider=MonacoGenAdapter.DefinitionProvider||{};
 AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate||{};
 AppFramework=LibraryJS.AppFramework=LibraryJS.AppFramework||{};
 PlgElemName=AppFramework.PlgElemName=AppFramework.PlgElemName||{};
 PlugInName=AppFramework.PlugInName=AppFramework.PlugInName||{};
 PlugInVar=AppFramework.PlugInVar=AppFramework.PlugInVar||{};
 PlugInView=AppFramework.PlugInView=AppFramework.PlugInView||{};
 PlugInDoc=AppFramework.PlugInDoc=AppFramework.PlugInDoc||{};
 PlugInAction=AppFramework.PlugInAction=AppFramework.PlugInAction||{};
 PlugInQuery=AppFramework.PlugInQuery=AppFramework.PlugInQuery||{};
 PlugIn=AppFramework.PlugIn=AppFramework.PlugIn||{};
 PlugInBuilder=AppFramework.PlugInBuilder=AppFramework.PlugInBuilder||{};
 Fun=AppFramework.Fun=AppFramework.Fun||{};
 P=AppFramework.P=AppFramework.P||{};
 Val=AppFramework.Val=AppFramework.Val||{};
 AAttr=AppFramework.AAttr=AppFramework.AAttr||{};
 Extract0=AppFramework.Extract0=AppFramework.Extract0||{};
 ListModelData=AppFramework.ListModelData=AppFramework.ListModelData||{};
 LM=LibraryJS.LM=LibraryJS.LM||{};
 StartAppFramework=LibraryJS.StartAppFramework=LibraryJS.StartAppFramework||{};
 AppFrameworkUI=LibraryJS.AppFrameworkUI=LibraryJS.AppFrameworkUI||{};
 LayoutEngine=LibraryJS.LayoutEngine=LibraryJS.LayoutEngine||{};
 LayoutEngineModule=LibraryJS.LayoutEngineModule=LibraryJS.LayoutEngineModule||{};
 Measures=LayoutEngineModule.Measures=LayoutEngineModule.Measures||{};
 Syntax=LayoutEngineModule.Syntax=LayoutEngineModule.Syntax||{};
 RefType=Syntax.RefType=Syntax.RefType||{};
 TemplateDef=Syntax.TemplateDef=Syntax.TemplateDef||{};
 Layout=LayoutEngineModule.Layout=LayoutEngineModule.Layout||{};
 NewLY=LibraryJS.NewLY=LibraryJS.NewLY||{};
 P$1=NewLY.P=NewLY.P||{};
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
 FSMessage=Library2.FSMessage=Library2.FSMessage||{};
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
 MsgTypes=FsAutoComplete.MsgTypes=FsAutoComplete.MsgTypes||{};
 ParseRequest=MsgTypes.ParseRequest=MsgTypes.ParseRequest||{};
 DeclarationsRequest=MsgTypes.DeclarationsRequest=MsgTypes.DeclarationsRequest||{};
 CompletionRequest=MsgTypes.CompletionRequest=MsgTypes.CompletionRequest||{};
 PositionRequest=MsgTypes.PositionRequest=MsgTypes.PositionRequest||{};
 ProjectRequest=MsgTypes.ProjectRequest=MsgTypes.ProjectRequest||{};
 LintRequest=MsgTypes.LintRequest=MsgTypes.LintRequest||{};
 HelptextRequest=MsgTypes.HelptextRequest=MsgTypes.HelptextRequest||{};
 WorkspacePeekRequest=MsgTypes.WorkspacePeekRequest=MsgTypes.WorkspacePeekRequest||{};
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
 HoverProvider$1=Monaco$1.HoverProvider=Monaco$1.HoverProvider||{};
 CompletionItemProvider$1=Monaco$1.CompletionItemProvider=Monaco$1.CompletionItemProvider||{};
 DefinitionProvider$1=Monaco$1.DefinitionProvider=Monaco$1.DefinitionProvider||{};
 MonacoOptions=Monaco$1.MonacoOptions=Monaco$1.MonacoOptions||{};
 ITextModelService=Monaco$1.ITextModelService=Monaco$1.ITextModelService||{};
 JumpTo=FSharpStation.JumpTo=FSharpStation.JumpTo||{};
 CustomAction=FSharpStation.CustomAction=FSharpStation.CustomAction||{};
 Serializer$1=FSharpStation.Serializer=FSharpStation.Serializer||{};
 Model$1=Serializer$1.Model=Serializer$1.Model||{};
 LoadSave=FSharpStation.LoadSave=FSharpStation.LoadSave||{};
 Importer=FSharpStation.Importer=FSharpStation.Importer||{};
 MainProgram=FSharpStation.MainProgram=FSharpStation.MainProgram||{};
 EndPoint=MainProgram.EndPoint=MainProgram.EndPoint||{};
 Messaging=FSharpStation.Messaging=FSharpStation.Messaging||{};
 Server=FSharpStation.Server=FSharpStation.Server||{};
 SC$1=Global.StartupCode$FSharpStation$FSharpStation=Global.StartupCode$FSharpStation$FSharpStation||{};
 FSharpStation_JsonEncoder=Global.FSharpStation_JsonEncoder=Global.FSharpStation_JsonEncoder||{};
 FSharpStation_Templates=Global.FSharpStation_Templates=Global.FSharpStation_Templates||{};
 FSharpStation_GeneratedPrintf=Global.FSharpStation_GeneratedPrintf=Global.FSharpStation_GeneratedPrintf||{};
 FSharpStation_Router=Global.FSharpStation_Router=Global.FSharpStation_Router||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 FSharpStation_JsonDecoder=Global.FSharpStation_JsonDecoder=Global.FSharpStation_JsonDecoder||{};
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
 Operators$7=WebSharper&&WebSharper.Operators;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Slice=WebSharper&&WebSharper.Slice;
 Char=WebSharper&&WebSharper.Char;
 Control=WebSharper&&WebSharper.Control;
 MailboxProcessor=Control&&Control.MailboxProcessor;
 System=Global.System;
 Guid=System&&System.Guid;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpSet=Collections&&Collections.FSharpSet;
 Option$1=WebSharper&&WebSharper.Option;
 Date=Global.Date;
 UI=WebSharper&&WebSharper.UI;
 Var$1=UI&&UI.Var$1;
 View$1=UI&&UI.View;
 CancellationTokenSource=WebSharper&&WebSharper.CancellationTokenSource;
 console=Global.console;
 Var$2=UI&&UI.Var;
 FromView=UI&&UI.FromView;
 Doc=UI&&UI.Doc;
 FSharpMap=Collections&&Collections.FSharpMap;
 BalancedTree=Collections&&Collections.BalancedTree;
 DomUtility=UI&&UI.DomUtility;
 AttrModule=UI&&UI.AttrModule;
 AttrProxy=UI&&UI.AttrProxy;
 Node$1=Global.Node;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Reflect=Global.Reflect;
 Object=Global.Object;
 Lazy=WebSharper&&WebSharper.Lazy;
 Templating$1=UI&&UI.Templating;
 Runtime$1=Templating$1&&Templating$1.Runtime;
 Server$1=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server$1&&Server$1.ProviderBuilder;
 Handler$1=Server$1&&Server$1.Handler;
 TemplateInstance=Server$1&&Server$1.TemplateInstance;
 ListModel$1=UI&&UI.ListModel;
 Math=Global.Math;
 Dictionary=Collections&&Collections.Dictionary;
 MatchFailureException=WebSharper&&WebSharper.MatchFailureException;
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
 Attrs=UI&&UI.Attrs;
 Input=UI&&UI.Input;
 Mouse=Input&&Input.Mouse;
 Keyboard=Input&&Input.Keyboard;
 Router=UI&&UI.Router;
 Sitelets=WebSharper&&WebSharper.Sitelets;
 RouterOperators=Sitelets&&Sitelets.RouterOperators;
 StringId=Library.StringId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,StringId);
 GuidId=Library.GuidId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,GuidId);
 Dict.add=function(key,v,dict)
 {
  if(dict.ContainsKey(key))
   dict.set_Item(key,v);
  else
   dict.Add(key,v);
 };
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
  return Strings.concat("\n",Seq$1.filter(function(y)
  {
   return""!==y;
  },List.ofArray([Global.String(msg),ResultMessage.summaryF(f,msg)])));
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
  }):Option.rtn(Library.Error(vOR.$0));
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
 CEBuilder=State.CEBuilder=Runtime.Class({
  Delay:function(f)
  {
   return f();
  },
  Return:function(v)
  {
   return function(s)
   {
    return State.rtn(v,s);
   };
  },
  Bind:function(m,f)
  {
   return function(s)
   {
    return State.bind(f,m,s);
   };
  }
 },Obj,CEBuilder);
 CEBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },CEBuilder);
 Operators.op_BarGreaterGreater=function(ma,f)
 {
  return(State.map(f))(ma);
 };
 Operators.op_GreaterGreaterEquals=function(ma,f)
 {
  return function(s)
  {
   return State.bind(f,ma,s);
  };
 };
 State.state=function()
 {
  SC$1.$cctor();
  return SC$1.state;
 };
 State.map=function(f)
 {
  var f$1;
  f$1=function(x)
  {
   var $1;
   $1=f(x);
   return function($2)
   {
    return State.rtn($1,$2);
   };
  };
  return(Runtime.Curried3(State.bind))(f$1);
 };
 State.bind=function(f,ma,s1)
 {
  var p;
  p=ma(s1);
  return(f(p[1]))(p[0]);
 };
 State.rtn=function(v,s)
 {
  return[s,v];
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
 Operators$1.result=function()
 {
  SC$1.$cctor();
  return SC$1.result$1;
 };
 Operators$1.rtn=function(v)
 {
  return Result.rtn(v);
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
  return Result$1.Bind(f,v);
 };
 Operators$1.op_BarGreaterGreater=function(v,f)
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
   return Operators$7.FailWith(Global.String(x));
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
 DependBuilder=Depend.DependBuilder=Runtime.Class({
  Delay:function(f)
  {
   return f();
  },
  Return:function(v)
  {
   return Depend.rtn(v);
  },
  Bind:function(m,f)
  {
   return Depend.bind(f,m);
  }
 },Obj,DependBuilder);
 DependBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },DependBuilder);
 Operators$2.op_GreaterMultiplyGreater=function(g,mf)
 {
  var b;
  b=Operators$2.depend();
  return b.Delay(function()
  {
   return b.Bind(mf,function(a)
   {
    return b.Return(function(x)
    {
     return a(g(x));
    });
   });
  });
 };
 Operators$2.op_LessMultiplyGreater=function(mf,mp)
 {
  return Depend.apply(mf,mp);
 };
 Operators$2.op_GreaterEqualsMultiply=function(mp,mf)
 {
  return Depend.apply(mf,mp);
 };
 Operators$2.op_BarMultiplyGreater=function(p,mf)
 {
  return Depend.apply(mf,(Operators$2.rtn())(p));
 };
 Operators$2.op_BarGreaterGreater=function(ma,f)
 {
  return(Depend.map(f))(ma);
 };
 Operators$2.op_GreaterGreaterEquals=function(ma,f)
 {
  return Depend.bind(f,ma);
 };
 Operators$2.depend=function()
 {
  SC$1.$cctor();
  return SC$1.depend$1;
 };
 Operators$2.rtn=function()
 {
  SC$1.$cctor();
  return SC$1.rtn$1;
 };
 Depend.toString=function(dep)
 {
  return Strings.concat("\n",Seq$1.sort(Seq$1.distinct(Seq$1.map(function(a)
  {
   var $1,$2;
   return(a.$==0?($2=a.$0,$2!=null&&$2.$==1)?($1=[a.$1,a.$0.$0[0],a.$0.$0[1]],true):($1=a,false):($1=a,false))?(((Runtime.Curried3(function($3,$4,$5)
   {
    return $3(Strings.PadRight(Utils.toSafe($4),50)+" "+Utils.prettyPrint($5));
   }))(Global.id))($1[1]))($1[2]):Global.String($1);
  },Depend.getDependencies(dep)))));
 };
 Depend.getDependencies=function(dep)
 {
  return List.rev(List.filter(function(a)
  {
   return a.$==0?a.$0!=null:true;
  },function(lst,dep$1)
  {
   var $1,lst2,k,v,k$1;
   while(true)
    {
     lst2=new List.T({
      $:1,
      $0:dep$1,
      $1:lst
     });
     if(dep$1.$==1)
      return lst2;
     else
      if($1=dep$1.$0,$1!=null&&$1.$==1)
       {
        k=dep$1.$1;
        v=dep$1.$0.$0[1];
        lst=lst2;
        dep$1=k(v);
       }
      else
       {
        k$1=dep$1.$1;
        lst=lst2;
        dep$1=k$1(void 0);
       }
    }
  }(List.T.Empty,dep)));
 };
 Depend.depend=function()
 {
  SC$1.$cctor();
  return SC$1.depend;
 };
 Depend.resolver=function(lst,depend)
 {
  function resolve(a)
  {
   var $1,k,nm,o,o$1;
   function f(t)
   {
    return t[0];
   }
   function g(y)
   {
    return nm===y;
   }
   return a.$==1?a.$0:($1=a.$0,$1!=null&&$1.$==1)?(k=a.$1,(nm=a.$0.$0[0],resolve((o=(o$1=Seq$1.tryFind(function(x)
   {
    return g(f(x));
   },lst),o$1==null?null:{
    $:1,
    $0:k(o$1.$0[1])
   }),o==null?k(a.$0.$0[1]):o.$0)))):resolve(a.$1(void 0));
  }
  return resolve(depend);
 };
 Depend.replacerDef=function(lst,depend)
 {
  function replace(a)
  {
   var $1,k,nm,o,o$1,$2,f;
   function p(a$1,a$2)
   {
    return a$2[0]===nm;
   }
   return a.$==1?{
    $:1,
    $0:a.$0
   }:($1=a.$0,$1!=null&&$1.$==1)?(k=a.$1,(nm=a.$0.$0[0],(o=(o$1=Seq$1.tryFind(function($3)
   {
    return p($3[0],$3[1]);
   },lst),o$1==null?null:{
    $:1,
    $0:($2=o$1.$0,{
     $:0,
     $0:{
      $:1,
      $0:[$2[0],$2[1][1]]
     },
     $1:function(x)
     {
      return replace(k(x));
     }
    })
   }),o==null?{
    $:0,
    $0:{
     $:1,
     $0:[nm,a.$0.$0[1]]
    },
    $1:function(x)
    {
     return replace(k(x));
    }
   }:o.$0))):{
    $:0,
    $0:null,
    $1:(f=a.$1,function(x)
    {
     return replace(f(x));
    })
   };
  }
  return replace(depend);
 };
 Depend.replacer=function(lst,depend)
 {
  function replace(a)
  {
   var $1,k,nm,o,o$1,f;
   function f$1(t)
   {
    return t[0];
   }
   function g(y)
   {
    return nm===y;
   }
   return a.$==1?{
    $:1,
    $0:a.$0
   }:($1=a.$0,$1!=null&&$1.$==1)?(k=a.$1,(nm=a.$0.$0[0],(o=(o$1=Seq$1.tryFind(function(x)
   {
    return g(f$1(x));
   },lst),o$1==null?null:{
    $:1,
    $0:{
     $:0,
     $0:{
      $:1,
      $0:[nm,o$1.$0[1]]
     },
     $1:function(x)
     {
      return replace(k(x));
     }
    }
   }),o==null?{
    $:0,
    $0:{
     $:1,
     $0:[nm,a.$0.$0[1]]
    },
    $1:function(x)
    {
     return replace(k(x));
    }
   }:o.$0))):{
    $:0,
    $0:null,
    $1:(f=a.$1,function(x)
    {
     return replace(f(x));
    })
   };
  }
  return replace(depend);
 };
 Depend.apply=function(fR,vR)
 {
  return Depend.bind(function(b)
  {
   return(Depend.map(b))(vR);
  },fR);
 };
 Depend.map=function(f)
 {
  var f$1;
  f$1=function(x)
  {
   return Depend.rtn(f(x));
  };
  return function(p)
  {
   return Depend.bind(f$1,p);
  };
 };
 Depend.rtn=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 Depend.bind=function(f,pa)
 {
  function bindR(a)
  {
   var v,k;
   return a.$==1?(v=a.$0,{
    $:0,
    $0:null,
    $1:function()
    {
     return f(v);
    }
   }):(k=a.$1,{
    $:0,
    $0:a.$0,
    $1:function(p)
    {
     return bindR(k(p));
    }
   });
  }
  return bindR(pa);
 };
 Depend.dependByName=function(nm,defF,kf)
 {
  return{
   $:0,
   $0:{
    $:1,
    $0:[nm,defF]
   },
   $1:function(f)
   {
    return{
     $:1,
     $0:kf(f)
    };
   }
  };
 };
 Operators$3.rtn=function(v)
 {
  return FusionM.rtn(v);
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
  return FusionM.bind(f,v);
 };
 Operators$3.op_BarGreaterGreater=function(v,f)
 {
  return FusionM.map(f,v);
 };
 Operators$3.op_LessMultiplyGreater=function(f,v)
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
    if(!Unchecked.Equals(disposable,null))
     disposable.Dispose();
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
   function whileLoop(guard$1,body$1)
   {
    return guard$1()?FusionM.bind(function()
    {
     return whileLoop(guard$1,body$1);
    },body$1()):FusionM.rtn();
   }
   return whileLoop(guard,body);
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
  (Option.iter(Global.ignore))(t[0]);
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
 Operators$4.rtn=function(v)
 {
  return FusionAsyncM.rtn(v);
 };
 Operators$4.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators$4.op_GreaterGreaterEquals(f(v),g);
 };
 Operators$4.op_RightShift=function(f,g,v)
 {
  return Operators$4.op_BarGreaterGreater(f(v),g);
 };
 Operators$4.op_GreaterGreaterEquals=function(v,f)
 {
  return FusionAsyncM.bind(f,v);
 };
 Operators$4.op_BarGreaterGreater=function(v,f)
 {
  return FusionAsyncM.map(f,v);
 };
 Operators$4.op_LessMultiplyGreater=function(f,v)
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
   function whileLoop(guard$1,body$1)
   {
    return guard$1()?FusionAsyncM.bind(function()
    {
     return whileLoop(guard$1,body$1);
    },body$1()):FusionAsyncM.rtn();
   }
   return whileLoop(guard,body);
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
   (Option.iter(Global.ignore))(vO);
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
 Builder$5=ResultM.Builder=Runtime.Class({
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
    return guard$1()?ResultM.bind(function()
    {
     return whileLoop(guard$1,body$1);
    },body$1()):ResultM.rtn();
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
   return ResultM.bindP(f,Monads.OkM$1());
  },
  Combine:function(a,b)
  {
   return ResultM.bind(b,a);
  },
  Delay:Global.id,
  Zero:function()
  {
   return ResultM.rtn();
  },
  Bind:function(w,r)
  {
   return ResultM.bindM(r,w);
  },
  Bind$1:function(w,r)
  {
   return ResultM.bindP(r,w);
  },
  ReturnFrom:function(x)
  {
   return ResultM.rtnM(x);
  },
  ReturnFrom$1:Global.id,
  ReturnFrom$2:Global.id,
  Return:function(x)
  {
   return ResultM.rtn(x);
  }
 },Obj,Builder$5);
 Builder$5.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder$5);
 Operators$5.rtn=function(v)
 {
  return ResultM.rtn(v);
 };
 Operators$5.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators$5.op_GreaterGreaterEquals(f(v),g);
 };
 Operators$5.op_RightShift=function(f,g,v)
 {
  return Operators$5.op_BarGreaterGreater(f(v),g);
 };
 Operators$5.op_GreaterGreaterEquals=function(v,f)
 {
  return ResultM.bindP(f,v);
 };
 Operators$5.op_BarGreaterGreater=function(v,f)
 {
  return ResultM.mapP(f,v);
 };
 ResultM.sequenceSeq=function(sq)
 {
  return ResultM.traverseSeq(Global.id,sq);
 };
 ResultM.traverseSeq=function(f,sq)
 {
  return ResultM.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return ResultM.op_GreaterGreaterEquals(f(head),function(h)
   {
    return ResultM.op_GreaterGreaterEquals(tail,function(t)
    {
     return ResultM.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),ResultM.rtn(List.T.Empty)));
 };
 ResultM.op_GreaterGreaterEquals=function(r,f)
 {
  return ResultM.bind(f,r);
 };
 ResultM.failIfFatalMsgW=function(r)
 {
  var a;
  a=Monads.OkM(r);
  return a.$==0?ResultMessage.isFatalW(a.$0[1])?Monads.ErrorM(a.$0[1]):r:r;
 };
 ResultM.failIfFatalMsg=function(r)
 {
  var a;
  a=Monads.OkM(r);
  return a.$==0?ResultMessage.isFatal(a.$0[1])?Monads.ErrorM(a.$0[1]):r:r;
 };
 ResultM.failIfFatalMsgF=function(f,r)
 {
  var a;
  a=Monads.OkM(r);
  return a.$==0?ResultMessage.isFatalF(f,a.$0[1])?Monads.ErrorM(a.$0[1]):r:r;
 };
 ResultM.addMsg=function(m,r)
 {
  return ResultM.mapMessage(function(b)
  {
   return ResultMessage.addMsg(m,b);
  },r);
 };
 ResultM.absorbO=function(f,vOR)
 {
  return ResultM.bindP(function(v)
  {
   return ResultM.ofOption(f,v);
  },vOR);
 };
 ResultM.insertO=function(vRO)
 {
  var o;
  o=vRO==null?null:{
   $:1,
   $0:ResultM.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vRO.$0)
  };
  return o==null?Monads.OkM$1(null):o.$0;
 };
 ResultM.ofResult=function(vR)
 {
  return ResultM.rtnr(vR);
 };
 ResultM.ofOption=function(f,vO)
 {
  var o;
  o=vO==null?null:{
   $:1,
   $0:Monads.OkM$1(vO.$0)
  };
  return o==null?function(x)
  {
   return Monads.ErrorM(f(x));
  }():o.$0;
 };
 ResultM.get=function(r)
 {
  return ResultM.defaultWith(function(x)
  {
   return Operators$7.FailWith(Global.String(x));
  },r);
 };
 ResultM.iter=function(fM,f,r)
 {
  var a;
  a=ResultM.mapP(f,r);
  a.$0==null?fM(a.$1):void 0;
 };
 ResultM.mapP=function(f,m)
 {
  return ResultM.bindP(function(x)
  {
   return ResultM.rtn(f(x));
  },m);
 };
 ResultM.check=function(a,vR)
 {
  var $1;
  return($1=vR.$0,$1!=null&&$1.$==1)?ResultMessage.isFatalF(a.$0,vR.$1)?Monads.ErrorM(vR.$1):vR:vR;
 };
 ResultM.bindM=function(f,m)
 {
  return ResultM.bindP(f,ResultM.rtnM(m));
 };
 ResultM.bindP=function(f,r)
 {
  var m;
  if(r.$0==null)
   return{
    $:0,
    $0:null,
    $1:r.$1
   };
  else
   {
    m=r.$1;
    try
    {
     return ResultM.mapMessage(function(b)
     {
      return ResultMessage.addMsg(m,b);
     },f(r.$0.$0));
    }
    catch(e)
    {
     return Monads.ErrorM(new ResultMessage({
      $:5,
      $0:e.message,
      $1:e.stack
     }));
    }
   }
 };
 ResultM.bind=function(f,r)
 {
  var m;
  return r.$0==null?{
   $:0,
   $0:null,
   $1:r.$1
  }:(m=r.$1,ResultM.mapMessage(function(b)
  {
   return ResultMessage.addMsg(m,b);
  },f(r.$0.$0)));
 };
 ResultM.mapMessage=function(fM,a)
 {
  return{
   $:0,
   $0:a.$0,
   $1:fM(a.$1)
  };
 };
 ResultM.map=function(f,a)
 {
  var o;
  return{
   $:0,
   $0:(o=a.$0,o==null?null:{
    $:1,
    $0:f(o.$0)
   }),
   $1:a.$1
  };
 };
 ResultM.defaultValue=function(d,r)
 {
  return Result.defaultValue(d,ResultM.toResult(r));
 };
 ResultM.defaultWith=function(f,r)
 {
  return Result.defaultWith(f,ResultM.toResult(r));
 };
 ResultM.toOption=function(r)
 {
  return r.$0;
 };
 ResultM.toResultD=function(r)
 {
  return r.$0==null?Library.Error(r.$1):{
   $:0,
   $0:[r.$0.$0,r.$1]
  };
 };
 ResultM.toResult=function(r)
 {
  return r.$0==null?Library.Error(r.$1):{
   $:0,
   $0:r.$0.$0
  };
 };
 ResultM.freeMessage=function(r)
 {
  return r.$==1?Library.Error(ResultMessage.freeMessage(r.$0)):{
   $:0,
   $0:r.$0
  };
 };
 ResultM.rtnr=function(vR)
 {
  return Result.defaultWith(Monads.ErrorM,Result$1.Map(Monads.OkM$1,vR));
 };
 ResultM.rtnM=function(m)
 {
  return Monads.OkMWithMsg(null,m);
 };
 ResultM.rtn=function(v)
 {
  return Monads.OkM$1(v);
 };
 ResultM.checkErrorW=function()
 {
  return{
   $:0,
   $0:function()
   {
    return false;
   }
  };
 };
 ResultM.checkError=function()
 {
  return{
   $:0,
   $0:function()
   {
    return true;
   }
  };
 };
 ResultMAutoOpen.resultM=function()
 {
  SC$1.$cctor();
  return SC$1.resultM;
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
 AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder=Runtime.Class({
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
   return AsyncResultM.whileLoop(guard,fRA);
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
   return AsyncResultM.bind(fRA,AsyncResultM.rtn());
  },
  Delay:Global.id,
  Combine:function(vR,fRA)
  {
   return AsyncResultM.bind(fRA,AsyncResultM.rtnR(vR));
  },
  Combine$1:function(vRA,fRA)
  {
   return AsyncResultM.bind(fRA,vRA);
  },
  Bind:function(w,r)
  {
   return AsyncResultM.bindrA(r,w);
  },
  Bind$1:function(w,r)
  {
   return AsyncResultM.bindR(r,w);
  },
  Bind$2:function(w,r)
  {
   return AsyncResultM.bindM(r,w);
  },
  Bind$3:function(w,r)
  {
   return AsyncResultM.bindr(r,w);
  },
  Bind$4:function(vRA,fRA)
  {
   return AsyncResultM.bind(fRA,vRA);
  },
  Zero:function()
  {
   return AsyncResultM.rtn();
  },
  Return:function(v)
  {
   return AsyncResultM.rtn(v);
  },
  ReturnFrom:function(vR)
  {
   return AsyncResultM.rtnrA(vR);
  },
  ReturnFrom$1:function(vR)
  {
   return AsyncResultM.rtnR(vR);
  },
  ReturnFrom$2:function(vR)
  {
   return AsyncResultM.rtnM(vR);
  },
  ReturnFrom$3:function(vR)
  {
   return AsyncResultM.rtnr(vR);
  },
  ReturnFrom$4:Global.id
 },Obj,AsyncResultMBuilder);
 AsyncResultMBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },AsyncResultMBuilder);
 Operators$6.rtn=function(v)
 {
  return AsyncResultM.rtn(v);
 };
 Operators$6.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators$6.op_GreaterGreaterEquals(f(v),g);
 };
 Operators$6.op_GreaterMinusGreater=function(f,g,v)
 {
  return Operators$6.op_BarGreaterGreater(f(v),g);
 };
 Operators$6.op_GreaterGreaterEquals=function(v,f)
 {
  return AsyncResultM.bind(f,v);
 };
 Operators$6.op_BarGreaterGreater=function(v,f)
 {
  return AsyncResultM.map(f,v);
 };
 AsyncResultM.getResultM=function(a)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(a,function(x)
  {
   return g(Monads.OkM$1(x));
  });
 };
 AsyncResultM.absorbO=function(f,vORA)
 {
  function f$1(v)
  {
   return ResultM.absorbO(f,v);
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
 AsyncResultM.absorbR=function(vRRA)
 {
  var f;
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(vRRA,(f=function(r)
  {
   return ResultM.bindP(Global.id,r);
  },function(x)
  {
   return g(f(x));
  }));
 };
 AsyncResultM.insertR=function(vRAR)
 {
  return vRAR.$==0?AsyncResultM.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vRAR.$0):AsyncResultM.rtn(Library.Error(vRAR.$0));
 };
 AsyncResultM.insertO=function(vRAO)
 {
  var o;
  o=vRAO==null?null:{
   $:1,
   $0:AsyncResultM.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vRAO.$0)
  };
  return o==null?AsyncResultM.rtn(null):o.$0;
 };
 AsyncResultM.sequenceSeq=function(sq)
 {
  return AsyncResultM.traverseSeq(Global.id,sq);
 };
 AsyncResultM.traverseSeq=function(f,sq)
 {
  return AsyncResultM.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return AsyncResultM.op_GreaterGreaterEquals(f(head),function(h)
   {
    return AsyncResultM.op_GreaterGreaterEquals(tail,function(t)
    {
     return AsyncResultM.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),AsyncResultM.rtn(List.T.Empty)));
 };
 AsyncResultM.op_GreaterGreaterEquals=function(v,f)
 {
  return AsyncResultM.bind(f,v);
 };
 AsyncResultM.whileLoop=function(cond,fRA)
 {
  return cond()?AsyncResultM.bind(function()
  {
   return AsyncResultM.whileLoop(cond,fRA);
  },fRA()):AsyncResultM.rtn();
 };
 AsyncResultM.map=function(f,m)
 {
  return AsyncResultM.bind(function(x)
  {
   return AsyncResultM.rtn(f(x));
  },m);
 };
 AsyncResultM.bindR=function(f,a)
 {
  return AsyncResultM.bind(f,AsyncResultM.rtnR(a));
 };
 AsyncResultM.bindrA=function(f,a)
 {
  return AsyncResultM.bind(f,AsyncResultM.rtnrA(a));
 };
 AsyncResultM.bindM=function(f,a)
 {
  return AsyncResultM.bind(f,AsyncResultM.rtnM(a));
 };
 AsyncResultM.bindr=function(f,a)
 {
  return AsyncResultM.bind(f,AsyncResultM.rtnr(a));
 };
 AsyncResultM.bind=function(fRA,vRA)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.TryWith(Concurrency.Delay(function()
   {
    return Concurrency.Bind(vRA,function(a)
    {
     var a$1,m;
     function f(r)
     {
      return ResultM.addMsg(m,r);
     }
     function g(v)
     {
      return Concurrency.Return(v);
     }
     a$1=Monads.OkM(a);
     return a$1.$==1?Concurrency.Return(Monads.ErrorM(a$1.$0)):(m=a$1.$0[1],Concurrency.Bind(fRA(a$1.$0[0]),function(x)
     {
      return g(f(x));
     }));
    });
   }),function(a)
   {
    return Concurrency.Return(Monads.ErrorM(new ResultMessage({
     $:5,
     $0:a.message,
     $1:a.stack
    })));
   });
  });
 };
 AsyncResultM.iterpA=function(f,vRA)
 {
  function g(v)
  {
   Library.print(v);
  }
  AsyncResultM.iterA(function(x)
  {
   return g(ResultMessage.summarized(x));
  },f,vRA);
 };
 AsyncResultM.iterpS=function(f,vRA)
 {
  function g(v)
  {
   Library.print(v);
  }
  AsyncResultM.iterS(function(x)
  {
   return g(ResultMessage.summarized(x));
  },f,vRA);
 };
 AsyncResultM.iterA=function(fE,f,vRA)
 {
  function f$1(r)
  {
   ResultM.iter(fE,f,r);
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
 AsyncResultM.iterS=function(fE,f,vRA)
 {
  throw"iterS cannot be used in JavaScript!";
 };
 AsyncResultM.errorMsgf=function(fmt)
 {
  var f;
  function f$1(a)
  {
   return new ResultMessage({
    $:1,
    $0:a
   });
  }
  function g(a)
  {
   return Concurrency.Return(a);
  }
  return fmt((f=function(x)
  {
   return Monads.ErrorM(f$1(x));
  },function(x)
  {
   return g(f(x));
  }));
 };
 AsyncResultM.rtnrA=function(vrA)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(vrA,function(x)
  {
   return g(ResultM.ofResult(x));
  });
 };
 AsyncResultM.rtnM=function(vM)
 {
  return Concurrency.Return(ResultM.rtnM(vM));
 };
 AsyncResultM.rtnR=function(vR)
 {
  return Concurrency.Return(vR);
 };
 AsyncResultM.rtnr=function(vR)
 {
  return Concurrency.Return(ResultM.rtnr(vR));
 };
 AsyncResultM.rtn=function(v)
 {
  return Concurrency.Return(Monads.OkM$1(v));
 };
 AsyncResultM.freeMessage=function(v)
 {
  function g(v$1)
  {
   return Concurrency.Return(v$1);
  }
  return Concurrency.Bind(v,function(x)
  {
   return g(ResultM.freeMessage(x));
  });
 };
 AsyncResultM.mapError=function(fE,v)
 {
  function f(a)
  {
   return ResultM.mapMessage(fE,a);
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
 AsyncResultMAutoOpen["AsyncResultMBuilder.Combine"]=function(__,vA,fRA)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return AsyncResultM.bind(fRA,Concurrency.Bind(vA,function(x)
  {
   return g(Monads.OkM$1(x));
  }));
 };
 AsyncResultMAutoOpen["AsyncResultMBuilder.Bind"]=function(__,vA,fRA)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return AsyncResultM.bind(fRA,Concurrency.Bind(vA,function(x)
  {
   return g(Monads.OkM$1(x));
  }));
 };
 AsyncResultMAutoOpen["AsyncResultMBuilder.ReturnFrom"]=function(__,vA)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(vA,function(x)
  {
   return g(Monads.OkM$1(x));
  });
 };
 AsyncResultMAutoOpen.asyncResultM=function()
 {
  SC$1.$cctor();
  return SC$1.asyncResultM;
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
 Monads.OkM=function(r)
 {
  return r.$0==null?{
   $:1,
   $0:r.$1
  }:{
   $:0,
   $0:[r.$0.$0,r.$1]
  };
 };
 Monads.ErrorM=function(m)
 {
  return{
   $:0,
   $0:null,
   $1:m
  };
 };
 Monads.OkMWithMsg=function(v,m)
 {
  return{
   $:0,
   $0:{
    $:1,
    $0:v
   },
   $1:m
  };
 };
 Monads.OkM$1=function(v)
 {
  return{
   $:0,
   $0:{
    $:1,
    $0:v
   },
   $1:ResultMessage.NoMsg
  };
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
    },Operators$7.range(0,((v.length-s)/3>>0)-1));
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
    },Operators$7.range(0,((v.length-s)/3>>0)-1));
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
  return FusionAsyncM.runReader([agent,agent.get_Configuration()],m);
 };
 AgentReaderM.run=function(agent,cfg,m)
 {
  return FusionAsyncM.runReader([agent,cfg],m);
 };
 AgentReaderM.ofResourceRm=function(a)
 {
  var f;
  f=a.$0;
  return{
   $:0,
   $0:function(t)
   {
    var a$1,m,cfg,agent;
    a$1=t[0];
    m=t[1];
    cfg=a$1[1];
    agent=a$1[0];
    return agent.AsyncProcessA(function(resource)
    {
     var b;
     b=null;
     return Concurrency.Delay(function()
     {
      return Concurrency.Bind(f([resource,m]),function(a$2)
      {
       return Concurrency.Return([a$2[0],[agent,cfg],a$2[2]]);
      });
     });
    },{
     $:1,
     $0:cfg
    });
   }
  };
 };
 AgentReaderM.createAgentRm=function(f,v)
 {
  return Operators$4.op_GreaterGreaterEquals(FusionAsyncM.readerFun(function(t)
  {
   return t[0].AsyncProcessA(function(resource)
   {
    return f(resource,v);
   },{
    $:1,
    $0:t[1]
   });
  }),FusionAsyncM.ofAsync);
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
  return[arg.$0,Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(FusionM.getS(),f),Global.id)];
 };
 TypedCommArg.op_DivisionAssignment$1=function(arg,v)
 {
  return[arg.$0,Operators$3.op_BarGreaterGreater(v,Global.id)];
 };
 TypedCommArg.op_DivisionAssignment$2=function(arg,v)
 {
  return[arg.$0,Operators$3.op_BarGreaterGreater(Operators$3.rtn(v),Global.id)];
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
  return Operators$3.op_BarGreaterGreater(vRm,Global.id);
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
  return Operators$3.op_GreaterGreaterEquals(CommArgCollection.tryBuildArgORm(targ),function(o)
  {
   return FusionM.ofOption(f,o);
  });
 };
 CommArgCollection.getBoolRm=function(def,targ)
 {
  return Operators$3.op_BarGreaterGreater(CommArgCollection.tryGetBoolORm(targ),function(o)
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
  return Operators$3.op_GreaterGreaterEquals(CommArgCollection.tryGetFloatORm(targ),function(o)
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
  return Operators$3.op_GreaterGreaterEquals(CommArgCollection.tryGetStringORm(targ),function(o)
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
  return Operators$3.op_GreaterGreaterEquals(CommArgCollection.tryGetIntORm(targ),function(o)
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
  return Operators$3.op_GreaterGreaterEquals(CommArgCollection.tryGetValueORm(targ),function(o)
  {
   return FusionM.ofOption(f,o);
  });
 };
 CommArgCollection.findArgRm=function(targ)
 {
  function f()
  {
   return CommArgCollection.argumentNotFound(targ,void 0);
  }
  return Operators$3.op_GreaterGreaterEquals(CommArgCollection.tryFindArgORm(targ),function(o)
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
  return Operators$3.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
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
  return Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
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
  return Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
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
  return Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
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
  return Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
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
  return Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(CommArgCollection.tryFindArgORm(targ),function(o)
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
  return Operators$3.op_GreaterGreaterEquals(FusionM.readerFun(function(coll)
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
  return Operators$3.op_BarGreaterGreater(Operators$3.op_GreaterGreaterEquals(CommArgCollection.filterRm(filter),function(s)
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
  return Operators$3.op_BarGreaterGreater(SnippetModule.fastCodeRm({
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
   return b.Bind(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(SnippetModule.orderedRm(),(before?function(p$1)
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
  function ancestorsRm2(snp$1,lst)
  {
   var b;
   b=FusionM.fusion();
   return b.Run(b.Delay(function()
   {
    return b.Bind(SnippetModule.parentORm(snp$1),function(a)
    {
     var p;
     return a==null?b.Return(lst):(p=a.$0,b.ReturnFrom(ancestorsRm2(p,new List.T({
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
   b=FusionM.fusion();
   return b.Run(b.Delay(function()
   {
    return b.Bind(SnippetModule.parentORm(snp$1),function(a)
    {
     return a!=null&&a.$==1?b.ReturnFrom(levelRm2(a.$0,lv+1)):b.Return(lv);
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
  return Operators$3.op_BarGreaterGreater(indentMeChildNextRm(snp),function(t)
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
   return b.Bind(Operators$3.op_GreaterGreaterEquals(SnippetModule.uniquePredsRm(snp),function(s)
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
      $0:(snp=a.$0,List.append(List.ofSeq(snp.snpPredIds),Option$1.toList(snp.snpParentIdO)))
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
   return Operators$3.op_BarGreaterGreater(SnippetModule.pathRm(prn.snpId),function(rest)
   {
    return new List.T({
     $:1,
     $0:prn.snpId,
     $1:rest
    });
   });
  }
  return Operators$3.op_BarGreaterGreater(Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(SnippetModule.snippetORm(sid),function(o)
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
  return Operators$3.op_BarGreaterGreater(SnippetModule.snippetRm(sid),function(snp)
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
      return $1("Snippet not found "+FSharpStation_GeneratedPrintf.p$2($2));
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
   return Operators$3.op_GreaterGreaterEquals(nodes$1,function(n)
   {
    return TreeReader.outdentNode(node$1,n);
   });
  }
  return Operators$3.op_GreaterGreaterEquals(Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(node.childrenRm(),Arrays.ofSeq),(s=Operators$3.rtn(nodes),function(s$1)
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
  return Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(node.parentORm(nodes),function(o)
  {
   return o==null?null:{
    $:1,
    $0:m(o.$0)
   };
  }),(v=Operators$3.rtn(nodes),function(o)
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
   return Operators$3.op_GreaterGreaterEquals(n.canHaveChildrenRm(),function(can)
   {
    return can?Operators$3.rtn({
     $:1,
     $0:n
    }):newParentORm;
   });
  }
  return Operators$3.op_GreaterGreaterEquals(Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(Operators$3.op_GreaterGreaterEquals(node.parentORm(nodes),function(a)
  {
   return a!=null&&a.$==1?Operators$3.op_BarGreaterGreater(a.$0.childrenRm(),function(x)
   {
    var s$1;
    s$1=Arrays.ofSeq(x);
    return s$1;
   }):Operators$3.rtn(nodes);
  }),function(s$1)
  {
   return Seq$1.takeWhile(p,s$1);
  }),(s=Operators$3.rtn(null),function(s$1)
  {
   return Seq$1.fold(f,s,s$1);
  })),function(a)
  {
   var newParent;
   return a!=null&&a.$==1?(newParent=a.$0,Operators$3.op_GreaterGreaterEquals(TreeReader.removeNode(node,nodes),function(n)
   {
    return TreeReader.addChild(true,node,newParent,n);
   })):Operators$3.rtn(nodes);
  });
 };
 TreeReader.addChild=function(append,node,parentN,nodes)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   return b.Bind(parentN.pathRm(),function(a)
   {
    function mapAppend(n)
    {
     var a$1,s;
     return Unchecked.Equals(n.id(),parentN.id())?append?Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(n.childrenRm(),Arrays.ofSeq),(a$1=List.ofArray([node]),function(b$1)
     {
      return Seq$1.append(b$1,a$1);
     })),Arrays.ofSeq),n.newChildrenRm):Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(n.childrenRm(),Arrays.ofSeq),(s=List.ofArray([node]),function(s$1)
     {
      return Seq$1.append(s,s$1);
     })),Arrays.ofSeq),n.newChildrenRm):List.contains(n.id(),a)?Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(n.childrenRm(),Arrays.ofSeq),function(s$1)
     {
      return Seq$1.map(mapAppend,s$1);
     }),FusionM.sequenceSeq),Arrays.ofSeq),n.newChildrenRm):Operators$3.rtn(n);
    }
    return b.ReturnFrom(FusionM.sequenceSeq(Seq$1.map(mapAppend,nodes)));
   });
  }));
 };
 TreeReader.moveToSibling2=function(after,nodeId,siblingId,nodes)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   return b.Bind(TreeReader.tryFindId(nodeId,nodes),function(a)
   {
    var node;
    return a!=null&&a.$==1?(node=a.$0,b.Bind(TreeReader.tryFindId(siblingId,nodes),function(a$1)
    {
     return a$1!=null&&a$1.$==1?b.ReturnFrom(TreeReader.moveToSibling(after,node,a$1.$0,nodes)):b.Return(nodes);
    })):b.Return(nodes);
   });
  }));
 };
 TreeReader.moveToSibling=function(after,node,sibling,nodes)
 {
  return Operators$3.op_GreaterGreaterEquals(TreeReader.removeNode(node,nodes),function(n)
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
   return Operators$3.op_GreaterGreaterEquals(resRm,function(a)
   {
    var s;
    return a==null?p(node)?Operators$3.rtn({
     $:1,
     $0:node
    }):Operators$3.op_GreaterGreaterEquals(node.childrenRm(),(s=Operators$3.rtn(null),function(s$1)
    {
     return Seq$1.fold(folder,s,s$1);
    })):Operators$3.rtn({
     $:1,
     $0:a.$0
    });
   });
  }
  return Seq$1.fold(folder,Operators$3.rtn(null),nodes);
 };
 TreeReader.addSibling=function(after,node,sibling,nodes)
 {
  function theSibling(n)
  {
   return Unchecked.Equals(n.id(),sibling.id());
  }
  return Operators$3.op_GreaterGreaterEquals(sibling.pathRm(),function(a)
  {
   var path,parent;
   function mapAdd(n)
   {
    return Unchecked.Equals(n.id(),parent)?Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(n.childrenRm(),Arrays.ofSeq),function(n$1)
    {
     return TreeReader.addToParent(after,theSibling,node,n,n$1);
    }):List.contains(n.id(),path)?Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(n.childrenRm(),Arrays.ofSeq),function(s)
    {
     return Seq$1.map(mapAdd,s);
    }),FusionM.sequenceSeq),Arrays.ofSeq),n.newChildrenRm):Operators$3.rtn(n);
   }
   return a.$==1?(path=a.$1,(parent=a.$0,FusionM.sequenceSeq(Seq$1.map(mapAdd,nodes)))):Operators$3.rtn(TreeReader.addNodeToSeq(after,theSibling,node,nodes));
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
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   function folder(pair,n)
   {
    var b$1;
    b$1=FusionM.fusion();
    return b$1.Run(b$1.Delay(function()
    {
     return b$1.Bind(pair,function(a)
     {
      var noparent,children;
      noparent=a[1];
      children=a[0];
      return b$1.Bind(Operators$3.op_BarGreaterGreater(n.childrenRm(),Arrays.ofSeq),function(a$1)
      {
       return b$1.Bind(Seq$1.fold(folder,Operators$3.rtn([List.T.Empty,noparent]),a$1),function(a$2)
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
   return b.Bind(Seq$1.fold(folder,Operators$3.rtn([List.T.Empty,List.T.Empty]),nodes),function(a)
   {
    return b.Return(List.rev(List.append(a[1],a[0])));
   });
  }));
 };
 TreeReader.removeNode=function(node,nodes)
 {
  var b;
  b=FusionM.fusion();
  return b.Run(b.Delay(function()
  {
   return b.Bind(node.pathRm(),function(a)
   {
    function chRemove(n)
    {
     var b$1;
     b$1=FusionM.fusion();
     return b$1.Run(b$1.Delay(function()
     {
      return Unchecked.Equals(n.id(),node.id())?b$1.Return(null):List.contains(n.id(),a)?b$1.ReturnFrom(Operators$3.op_BarGreaterGreater(Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(n.childrenRm(),Arrays.ofSeq),function(s)
      {
       return Seq$1.map(chRemove,s);
      }),FusionM.sequenceSeq),function(s)
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
    return b.ReturnFrom(Operators$3.op_BarGreaterGreater(FusionM.sequenceSeq(Seq$1.map(chRemove,nodes)),function(s)
    {
     return Seq$1.choose(Global.id,s);
    }));
   });
  }));
 };
 TreeReader.listNodes=function(level,nodes)
 {
  return Operators$3.op_BarGreaterGreater(FusionM.sequenceSeq(Seq$1.map(function(node)
  {
   return Operators$3.op_BarGreaterGreater(Operators$3.op_GreaterGreaterEquals(node.isExpandedRm(),function(exp)
   {
    var l;
    return exp?Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(node.childrenRm(),Arrays.ofSeq),(l=level+1,function(n)
    {
     return TreeReader.listNodes(l,n);
    })):Operators$3.rtn([]);
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
  View$1.Sink(Library.delayed(delay,function(a)
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
 PromiseM.ofAsyncResultM=function(v)
 {
  return new Global.Promise(function(resolve,reject)
  {
   Concurrency.StartWithContinuations(v,function(a)
   {
    var a$1;
    a$1=Monads.OkM(a);
    a$1.$==1?reject(ResultMessage.summarized(a$1.$0)):resolve(a$1.$0[0]);
   },function(a)
   {
    reject(a);
   },function(a)
   {
    reject(a);
   },null);
  });
 };
 View.sequenceListApp=function(list)
 {
  return View.traverseListApp(Global.id,list);
 };
 View.traverseListApp=function(f,list)
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
   return View.op_LessMultiplyGreater(View.op_LessMultiplyGreater(View.rtn(function($1)
   {
    return function($2)
    {
     return cons($1,$2);
    };
   }),f(head)),tail);
  },list,View.rtn(List.T.Empty));
 };
 View.op_LessMultiplyGreater=function(a,a$1)
 {
  return View$1.Apply(a,a$1);
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
 Var.lensView=function(get,update,view0,_var)
 {
  var id,view,$1;
  id=Var.freshId();
  view=View$1.Map2(function(v)
  {
   return get(v);
  },_var.get_View(),view0);
  $1=new UI.Var({
   Get:function()
   {
    return get(_var.Get());
   },
   Set:function(v)
   {
    return _var.Update(function(t)
    {
     return update(t,v);
    });
   },
   SetFinal:function(v)
   {
    return this.Set(v);
   },
   Update:function(f)
   {
    return _var.Update(function(t)
    {
     return update(t,f(get(t)));
    });
   },
   UpdateMaybe:function(f)
   {
    return _var.UpdateMaybe(function(t)
    {
     var x;
     x=f(get(t));
     return x==null?null:{
      $:1,
      $0:update(t,x.$0)
     };
    });
   },
   get_View:function()
   {
    return view;
   },
   get_Id:function()
   {
    return id;
   }
  });
  Var$2.New.call($1);
  return $1;
 };
 Var.freshId=function()
 {
  Var.set_counter(Var.counter()+1);
  return"varuid"+Global.String(Var.counter());
 };
 Var.counter=function()
 {
  SC$1.$cctor();
  return SC$1.counter;
 };
 Var.set_counter=function($1)
 {
  SC$1.$cctor();
  SC$1.counter=$1;
 };
 ListModel.MapLens=function(predO,f,m)
 {
  function get(k,v)
  {
   return f(k,m.Lens(k));
  }
  function a(vms,pred)
  {
   return Arrays.filter(pred,vms);
  }
  return predO!=null&&predO.$==1?View$1.MapSeqCachedViewBy(m.key,get,(((Runtime.Curried3(View$1.Map2))(a))(m["var"].get_View()))(predO.$0)):View$1.MapSeqCachedViewBy(m.key,get,m["var"].get_View());
 };
 ListModel.refreshLM=function(lm,elems)
 {
  var keys;
  lm.AppendMany(elems);
  keys=new FSharpSet.New(Seq$1.map(lm.key,elems));
  Seq$1.iter(function(e)
  {
   if(!keys.Contains(lm.key(e)))
    lm.RemoveByKey(lm.key(e));
  },Seq$1.cache(lm));
 };
 ListModel.currentLens=function(def,curr,model)
 {
  return ListModel["currentLensUpd'"](def,curr,function(v)
  {
   model.UpdateBy(function()
   {
    return model.TryFindByKey(model.key(v))==null?null:{
     $:1,
     $0:v
    };
   },model.key(v));
  },model);
 };
 ListModel["currentLensUpd'"]=function(def,curr,upd,model)
 {
  return new FromView.New(View$1.Map2(function(_mdl,kO)
  {
   var o;
   o=kO==null?null:model.TryFindByKey(kO.$0);
   return o==null?def:o.$0;
  },model.v,curr),upd);
 };
 ListModel.currentLensUpd=function(def,curr,upd,model)
 {
  var f;
  function b(a)
  {
   return model.TryFindByKey(a);
  }
  function g(o)
  {
   return o==null?def:o.$0;
  }
  return Var.lensView((f=function(o)
  {
   return o==null?null:b(o.$0);
  },function(x)
  {
   return g(f(x));
  }),function(kO,v)
  {
   (Option.iter(upd(v)))(kO);
   return kO;
  },model.v,curr);
 };
 ListModel.lensDef=function(def,k,m)
 {
  function get(o)
  {
   return o==null?def:o.$0;
  }
  return ListModel["lensIntoO'"](m,get,function()
  {
   return Global.id;
  },k,View$1.Map(get,m.TryFindByKeyAsView(k)));
 };
 ListModel.docLensMapViewO=function(def,mapView,f,m)
 {
  function get(k,v)
  {
   return f(k,ListModel["lensIntoO'"](m,function(o)
   {
    return o==null?def:o.$0;
   },function()
   {
    return Global.id;
   },k,v));
  }
  return Doc.ConvertSeqBy(m.key,function($1)
  {
   return function($2)
   {
    return get($1,$2);
   };
  },View$1.Map(mapView,m.v));
 };
 ListModel.docLensMapView=function(mapView,f,m)
 {
  function get(k,v)
  {
   return f(k,ListModel["lensInto'"](m,Global.id,function()
   {
    return Global.id;
   },k,v));
  }
  return Doc.ConvertSeqBy(m.key,function($1)
  {
   return function($2)
   {
    return get($1,$2);
   };
  },View$1.Map(mapView,m.v));
 };
 ListModel["lensIntoO'"]=function(m,get,update,key,view)
 {
  var id,$1;
  id=Var.freshId();
  $1=new Var$2({
   Get:function()
   {
    return get(m.TryFindByKey(key));
   },
   Set:function(v)
   {
    return m.UpdateBy(function(i)
    {
     return{
      $:1,
      $0:(update(i))(v)
     };
    },key);
   },
   Update:function(f)
   {
    return m.UpdateBy(function(i)
    {
     var x;
     return{
      $:1,
      $0:(x=f(get({
       $:1,
       $0:i
      })),(update(i))(x))
     };
    },key);
   },
   UpdateMaybe:function(f)
   {
    return m.UpdateBy(function(i)
    {
     var x,m$1;
     x=f(get({
      $:1,
      $0:i
     }));
     m$1=update(i);
     return x==null?null:{
      $:1,
      $0:m$1(x.$0)
     };
    },key);
   },
   SetFinal:function(v)
   {
    return this.Set(v);
   },
   get_View:function()
   {
    return view;
   },
   get_Id:function()
   {
    return id;
   }
  });
  Var$2.New.call($1);
  return $1;
 };
 ListModel["lensInto'"]=function(m,get,update,key,view)
 {
  var id,$1;
  id=Var.freshId();
  $1=new Var$2({
   Get:function()
   {
    return get(m.FindByKey(key));
   },
   Set:function(v)
   {
    return m.UpdateBy(function(i)
    {
     return{
      $:1,
      $0:(update(i))(v)
     };
    },key);
   },
   Update:function(f)
   {
    return m.UpdateBy(function(i)
    {
     var x;
     return{
      $:1,
      $0:(x=f(get(i)),(update(i))(x))
     };
    },key);
   },
   UpdateMaybe:function(f)
   {
    return m.UpdateBy(function(i)
    {
     var x,m$1;
     x=f(get(i));
     m$1=update(i);
     return x==null?null:{
      $:1,
      $0:m$1(x.$0)
     };
    },key);
   },
   SetFinal:function(v)
   {
    return this.Set(v);
   },
   get_View:function()
   {
    return view;
   },
   get_Id:function()
   {
    return id;
   }
  });
  Var$2.New.call($1);
  return $1;
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
  return Pojo.newPojo(Seq$1.choose(function($1)
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
 Pojo.addProp=function(p,p$1,pojo)
 {
  pojo[p]=p$1;
  return pojo;
 };
 Position.New=function(line,col)
 {
  return{
   line:line,
   col:col
  };
 };
 AnnotationType.Hint={
  $:3
 };
 AnnotationType.Info={
  $:2
 };
 AnnotationType.Warning={
  $:1
 };
 AnnotationType.Error={
  $:0
 };
 Annotation.New=function(startP,endP,severity,message)
 {
  return{
   startP:startP,
   endP:endP,
   severity:severity,
   message:message
  };
 };
 Completion.New=function(kind,label,detail,replace)
 {
  return{
   kind:kind,
   label:label,
   detail:detail,
   replace:replace
  };
 };
 GenEditorHook.New=function(generateDoc,getValue,setValue,setDisabled,showAnnotations,posFromIndex,indexFromPos,getWordAt,getSelectionText,getUri,setUri,hookOnChange)
 {
  return{
   generateDoc:generateDoc,
   getValue:getValue,
   setValue:setValue,
   setDisabled:setDisabled,
   showAnnotations:showAnnotations,
   posFromIndex:posFromIndex,
   indexFromPos:indexFromPos,
   getWordAt:getWordAt,
   getSelectionText:getSelectionText,
   getUri:getUri,
   setUri:setUri,
   hookOnChange:hookOnChange
  };
 };
 GenEditor$1.New=function(_var,disabled,annotations,onChange,onRender,autoCompletion,toolTip,declaration,editorO,editorHook)
 {
  return{
   "var":_var,
   disabled:disabled,
   annotations:annotations,
   onChange:onChange,
   onRender:onRender,
   autoCompletion:autoCompletion,
   toolTip:toolTip,
   declaration:declaration,
   editorO:editorO,
   editorHook:editorHook
  };
 };
 GenEditor.generateDoc=function(genE)
 {
  var onChange,o,o$1;
  onChange=(o=(o$1=genE.onChange,o$1==null?null:{
   $:1,
   $0:o$1.$0(genE)
  }),o==null?Global.ignore:o.$0);
  return(genE.editorHook.generateDoc(genE))(function(ed)
  {
   genE.editorO={
    $:1,
    $0:ed
   };
   GenEditor.bindVarEditor(genE.editorHook.hookOnChange,genE.editorHook.getValue,genE.editorHook.setValue,onChange,genE["var"]);
   View$1.Sink(genE.editorHook.showAnnotations,genE.annotations);
   View$1.Sink(genE.editorHook.setDisabled,genE.disabled);
   genE.onRender(genE);
  });
 };
 GenEditor.bindVarEditor=function(setEvent,getVal,setVal,onChange,_var)
 {
  var editorChanged,varChanged;
  editorChanged=[0];
  varChanged=[0];
  setEvent(function()
  {
   var v;
   v=getVal();
   !Unchecked.Equals(_var.Get(),v)?(editorChanged[0]=editorChanged[0]+1,_var.Set(v),onChange(v)):void 0;
  });
  View$1.Sink(function()
  {
   if(editorChanged[0]>varChanged[0])
    varChanged[0]=editorChanged[0];
   else
    if(!Unchecked.Equals(getVal(),_var.Get()))
     setVal(_var.Get());
  },_var.get_View());
 };
 GenEditor.newVarO=function(edh,v)
 {
  var x;
  x=GenEditor.newVar(edh,Var$1.Lens(v,function(o)
  {
   return o==null?"":o.$0;
  },function(sO,s)
  {
   return sO==null?null:{
    $:1,
    $0:s
   };
  }));
  return GenEditor.disabled(View$1.Map(function($1)
  {
   return $1==null;
  },v.get_View()),x);
 };
 GenEditor.newText=function(edh,v)
 {
  return GenEditor.newVar(edh,Var$1.Create$1(v));
 };
 GenEditor.newVar=function(edh,_var)
 {
  return GenEditor$1.New(_var,View$1.Const(false),View$1.Const([]),null,Global.ignore,null,null,null,null,edh);
 };
 GenEditor["var"]=function(genE)
 {
  return genE["var"];
 };
 GenEditor.disabled=function(dis,genE)
 {
  return GenEditor$1.New(genE["var"],dis,genE.annotations,genE.onChange,genE.onRender,genE.autoCompletion,genE.toolTip,genE.declaration,genE.editorO,genE.editorHook);
 };
 GenEditor.onRender=function(f,genE)
 {
  return GenEditor$1.New(genE["var"],genE.disabled,genE.annotations,genE.onChange,f,genE.autoCompletion,genE.toolTip,genE.declaration,genE.editorO,genE.editorHook);
 };
 GenEditor.onChange=function(f,genE)
 {
  return GenEditor$1.New(genE["var"],genE.disabled,genE.annotations,f,genE.onRender,genE.autoCompletion,genE.toolTip,genE.declaration,genE.editorO,genE.editorHook);
 };
 GenEditor.setVar=function(v,genE)
 {
  return GenEditor$1.New(v,genE.disabled,genE.annotations,genE.onChange,genE.onRender,genE.autoCompletion,genE.toolTip,genE.declaration,genE.editorO,genE.editorHook);
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
 Serializer.serFieldO=function(name,get,set,s,s$1)
 {
  function g(o)
  {
   return o==null?null:{
    $:1,
    $0:s(o.$0)
   };
  }
  return[name,function(x)
  {
   return g(get(x));
  },function(rc)
  {
   return function(o)
   {
    return set(!o?null:{
     $:1,
     $0:s$1(o)
    },rc);
   };
  }];
 };
 Serializer.serField=function(name,get,set,s,s$1)
 {
  var f;
  function g(a)
  {
   return{
    $:1,
    $0:a
   };
  }
  return[name,(f=function(x)
  {
   return s(get(x));
  },function(x)
  {
   return g(f(x));
  }),function(rc)
  {
   return function(o)
   {
    return set(s$1(o),rc);
   };
  }];
 };
 Serializer.serDate=function()
 {
  SC$1.$cctor();
  return SC$1.serDate;
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
 REGEX.Identifier=function(a)
 {
  var $1,a$1,t;
  return(a$1=LibraryJS.REGEX$1("^[$a-zA-Z_][0-9a-zA-Z_\\.\\-$]*$","",a),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($1=Arrays.get(a$1.$0,0),true)))?{
   $:1,
   $0:$1
  }:null;
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
 Hoverable$1.Content$3203$81=Runtime.Curried3(function(e,$1,$2)
 {
  return DomUtility.RemoveClass(e.elt,"hovering");
 });
 Hoverable$1.get_Attributes$3199$69=Runtime.Curried3(function(_this,$1,$2)
 {
  return _this.hover.Set(false);
 });
 Hoverable$1.get_Attributes$3198$69=Runtime.Curried3(function(_this,$1,$2)
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
     },Operators$7.range(1,el.childNodes.length));
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
 WcTabStrip.tabStrip$3347$64=function(i,selected)
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
    var x;
    x=domElem[0];
    (Option.iter(function(sh)
    {
     size[0]=sizeCalc(sh);
    }))(x);
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
  var o;
  o=new WcSplitterT.New();
  WcSplitter.set_layoutHorizontal(layoutH);
  WcSplitter.set_layoutVertical(layoutV);
  WebComponent.defineWebComponent("wcomp-splitter",WcSplitterT.Constructor,self.FsRoot.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New);
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
 WebComponent.defineWebComponent=function(_nm,_o,_c)
 {
  try
  {
   console.log("defineWebComponent: "+_nm);
   Object.setPrototypeOf(_c.prototype,self.HTMLElement.prototype);
   Object.setPrototypeOf(_c,self.HTMLElement);
   Object.setPrototypeOf(_o.prototype,_c.prototype);
   self.customElements.define(_nm,_o);
  }
  catch(m)
  {
   (function($1)
   {
    return $1("Failed to define WebComponent. Not supported.");
   }(function(s)
   {
    console.log(s);
   }));
  }
 };
 Position$1.New=function(column,lineNumber)
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
 Monaco.render$3716$48=function(monc)
 {
  return function(elchild)
  {
   var editor,_elt;
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
   (Option.iter(function(onrender)
   {
    onrender(editor);
   }))(monc.onRender);
   GenEditor.bindVarEditor(function(a)
   {
    editor.onDidChangeModelContent(a);
   },function()
   {
    return editor.getValue();
   },function(a)
   {
    editor.setValue(a);
   },monc.onChange,monc["var"]);
  };
 };
 Monaco.render=function(monc)
 {
  var b;
  return Doc.Async((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Monaco.loader(),function()
   {
    return Concurrency.Return(Doc.Element("div",[AttrProxy.OnAfterRenderImpl(function(elchild)
    {
     var editor,_elt;
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
     (Option.iter(function(onrender)
     {
      onrender(editor);
     }))(monc.onRender);
     GenEditor.bindVarEditor(function(a)
     {
      editor.onDidChangeModelContent(a);
     },function()
     {
      return editor.getValue();
     },function(a)
     {
      editor.setValue(a);
     },monc.onChange,monc["var"]);
    })],[]));
   });
  })));
 };
 Monaco.loader=function()
 {
  SC$1.$cctor();
  return SC$1.loader;
 };
 Monaco.newVar=function(_var)
 {
  return MonacoConfig.New(_var,Global.ignore,null,null,View$1.Const(false),null,null);
 };
 MonacoRT.New=function(editorO,onChange,options,overrides)
 {
  return{
   editorO:editorO,
   onChange:onChange,
   options:options,
   overrides:overrides
  };
 };
 CompletionItemProvider=MonacoGenAdapter.CompletionItemProvider=Runtime.Class({
  resolveCompletionItem:function(item,token)
  {
   return CompletionItem.New(item.kind,item.label,"more details");
  },
  provideCompletionItems:function(model,pos,token,context)
  {
   var $this,b;
   $this=this;
   return PromiseM.ofAsyncResultM((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
   {
    return AsyncResultMAutoOpen["AsyncResultMBuilder.Bind"](b,$this.autoComplete(Position.New(pos.lineNumber,pos.column)),function(a)
    {
     return b.Return(Arrays.map(function(comp)
     {
      return CompletionItem.New(MonacoGenAdapter.convertGlyphChar(comp.kind),comp.label,comp.detail);
     },a));
    });
   }))));
  }
 },Obj,CompletionItemProvider);
 CompletionItemProvider.New=Runtime.Ctor(function(autoComplete)
 {
  Obj.New.call(this);
  this.autoComplete=autoComplete;
 },CompletionItemProvider);
 HoverProvider=MonacoGenAdapter.HoverProvider=Runtime.Class({
  provideHover:function(model,pos,token)
  {
   var $this,b;
   $this=this;
   return PromiseM.ofAsyncResultM((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
   {
    return AsyncResultMAutoOpen["AsyncResultMBuilder.Bind"](b,$this.toolTip(Position.New(pos.lineNumber,pos.column)),function(a)
    {
     return a!=null&&a.$==1?b.Return(Hover.New([MarkDownString.New(a.$0,true)],null)):b.Return(null);
    });
   }))));
  }
 },Obj,HoverProvider);
 HoverProvider.New=Runtime.Ctor(function(toolTip)
 {
  Obj.New.call(this);
  this.toolTip=toolTip;
 },HoverProvider);
 DefinitionProvider=MonacoGenAdapter.DefinitionProvider=Runtime.Class({
  provideDefinition:function(model,pos,token)
  {
   var $this,b;
   $this=this;
   return PromiseM.ofAsyncResultM((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
   {
    return AsyncResultMAutoOpen["AsyncResultMBuilder.Bind"](b,$this.declaration(Position.New(pos.lineNumber,pos.column)),function(a)
    {
     var pos$1;
     return a!=null&&a.$==1?(pos$1=a.$0[0],b.Return(Location.New(Range.New(pos$1.col,pos$1.col,pos$1.line,pos$1.line),self.monaco.Uri.parse(a.$0[1])))):b.Return(null);
    });
   }))));
  }
 },Obj,DefinitionProvider);
 DefinitionProvider.New=Runtime.Ctor(function(declaration)
 {
  Obj.New.call(this);
  this.declaration=declaration;
 },DefinitionProvider);
 MonacoGenAdapter.newVar=function(options,overrides,v)
 {
  return GenEditor.newVar(MonacoGenAdapter.newHook(MonacoGenAdapter.newRT(options,overrides)),v);
 };
 MonacoGenAdapter.newRT=function(options,overrides)
 {
  return MonacoRT.New(null,Global.ignore,options,overrides);
 };
 MonacoGenAdapter.newHook=function(monRT)
 {
  function g(g$1,o)
  {
   return MonacoGenAdapter.generateDoc(monRT,g$1,o);
  }
  return GenEditorHook.New(function($1)
  {
   return function($2)
   {
    return g($1,$2);
   };
  },function()
  {
   return MonacoGenAdapter.getValue(monRT);
  },function(t)
  {
   MonacoGenAdapter.setValue(monRT,t);
  },Global.ignore,function(a)
  {
   MonacoGenAdapter.showAnnotations(monRT,a);
  },function(i)
  {
   return MonacoGenAdapter.posFromIndex(monRT,i);
  },function(p)
  {
   return MonacoGenAdapter.indexFromPos(monRT,p);
  },function(p)
  {
   return MonacoGenAdapter.getWordAt(monRT,p);
  },function()
  {
   return MonacoGenAdapter.getSelect(monRT);
  },function()
  {
   return MonacoGenAdapter.getUri(monRT);
  },function(u)
  {
   MonacoGenAdapter.setUri(monRT,u);
  },function(f)
  {
   monRT.onChange=f;
  });
 };
 MonacoGenAdapter.showAnnotations=function(monRT,ans)
 {
  MonacoGenAdapter.iterEditor(monRT,function(ed)
  {
   var ms,_m;
   ms=Arrays.ofSeq(Seq$1.map(function(an)
   {
    var m;
    return MarkerData.New(an.startP.col,an.endP.col,an.startP.line,an.endP.line,(m=an.severity,m.$==0?8:m.$==1?4:m.$==3?1:2),an.message);
   },ans));
   _m=ed.getModel();
   self.monaco.editor.setModelMarkers(_m,"annotations",ms);
  });
 };
 MonacoGenAdapter.getSelect=function(monRT)
 {
  var o;
  o=MonacoGenAdapter.mapEditor(monRT,function(ed)
  {
   var x;
   x=ed.getSelection();
   return ed.getModel().getValueInRange(x);
  });
  return o==null?"":o.$0;
 };
 MonacoGenAdapter.getWordAt=function(monRT,pos)
 {
  return MonacoGenAdapter.bindEditor(monRT,function(ed)
  {
   var word;
   word=ed.getModel().getWordAtPosition(Position$1.New(pos.col,pos.line));
   return!word?null:{
    $:1,
    $0:[word.word,Position.New(pos.line,word.startColumn)]
   };
  });
 };
 MonacoGenAdapter.setValue=function(monRT,txt)
 {
  MonacoGenAdapter.iterEditor(monRT,function(ed)
  {
   ed.setValue(txt);
  });
 };
 MonacoGenAdapter.getValue=function(monRT)
 {
  var o;
  o=MonacoGenAdapter.mapEditor(monRT,function(ed)
  {
   return ed.getValue();
  });
  return o==null?"":o.$0;
 };
 MonacoGenAdapter.setUri=function(monRT,uri)
 {
  MonacoGenAdapter.iterEditor(monRT,function(ed)
  {
   ed.getModel().uri=self.monaco.Uri.parse(uri);
  });
 };
 MonacoGenAdapter.getUri=function(monRT)
 {
  var o;
  o=MonacoGenAdapter.mapEditor(monRT,function(ed)
  {
   return Global.String(ed.getModel().uri);
  });
  return o==null?"":o.$0;
 };
 MonacoGenAdapter.generateDoc$3858$48=function(monRT,onRender,genE)
 {
  return function(elchild)
  {
   var editor,_elt;
   editor=(_elt=elchild.parentElement,self.monaco.editor.create(_elt,monRT.options,monRT.overrides));
   ResizeObserver.addResizeObserver(function()
   {
    editor.layout();
   },elchild.parentElement);
   elchild.parentNode.removeChild(elchild);
   monRT.editorO={
    $:1,
    $0:editor
   };
   onRender(editor);
   editor.onDidChangeModelContent(monRT.onChange);
   (Option.iter(function(f)
   {
    var _p;
    _p=new HoverProvider.New(f(genE));
    self.monaco.languages.registerHoverProvider("fsharp",_p);
   }))(genE.toolTip);
   (Option.iter(function(f)
   {
    var _p;
    _p=new DefinitionProvider.New(f(genE));
    self.monaco.languages.registerDefinitionProvider("fsharp",_p);
   }))(genE.declaration);
   (Option.iter(function(f)
   {
    var _p;
    _p=new CompletionItemProvider.New(f(genE));
    self.monaco.languages.registerCompletionItemProvider("fsharp",_p);
   }))(genE.autoCompletion);
  };
 };
 MonacoGenAdapter.generateDoc=function(monRT,genE,onRender)
 {
  var b;
  return Doc.Async((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Monaco.loader(),function()
   {
    return Concurrency.Return(Doc.Element("div",[AttrProxy.OnAfterRenderImpl(function(elchild)
    {
     var editor,_elt;
     editor=(_elt=elchild.parentElement,self.monaco.editor.create(_elt,monRT.options,monRT.overrides));
     ResizeObserver.addResizeObserver(function()
     {
      editor.layout();
     },elchild.parentElement);
     elchild.parentNode.removeChild(elchild);
     monRT.editorO={
      $:1,
      $0:editor
     };
     onRender(editor);
     editor.onDidChangeModelContent(monRT.onChange);
     (Option.iter(function(f)
     {
      var _p;
      _p=new HoverProvider.New(f(genE));
      self.monaco.languages.registerHoverProvider("fsharp",_p);
     }))(genE.toolTip);
     (Option.iter(function(f)
     {
      var _p;
      _p=new DefinitionProvider.New(f(genE));
      self.monaco.languages.registerDefinitionProvider("fsharp",_p);
     }))(genE.declaration);
     (Option.iter(function(f)
     {
      var _p;
      _p=new CompletionItemProvider.New(f(genE));
      self.monaco.languages.registerCompletionItemProvider("fsharp",_p);
     }))(genE.autoCompletion);
    })],[]));
   });
  })));
 };
 MonacoGenAdapter.convertGlyphChar=function(a)
 {
  return a==="C"?6:a==="E"?12:a==="S"?11:a==="I"?7:a==="N"?8:a==="M"?1:a==="P"?9:a==="F"?4:a==="T"?6:a==="K"?13:0;
 };
 MonacoGenAdapter.posFromIndex=function(monRT,i)
 {
  var o;
  o=MonacoGenAdapter.mapEditor(monRT,function(ed)
  {
   return MonacoGenAdapter.posEd2Gen(ed.getModel().getPositionAt(i));
  });
  return o==null?Position.New(1,1):o.$0;
 };
 MonacoGenAdapter.indexFromPos=function(monRT,p)
 {
  var o;
  o=MonacoGenAdapter.mapEditor(monRT,function(ed)
  {
   return ed.getModel().getOffsetAt(MonacoGenAdapter.posGen2Ed(p));
  });
  return o==null?-1:o.$0;
 };
 MonacoGenAdapter.posEd2Gen=function(p)
 {
  return Position.New(p.lineNumber,p.column);
 };
 MonacoGenAdapter.posGen2Ed=function(p)
 {
  return Position$1.New(p.col,p.line);
 };
 MonacoGenAdapter.bindEditor=function(monRT,f)
 {
  var m;
  m=monRT.editorO;
  return m!=null&&m.$==1?f(m.$0):null;
 };
 MonacoGenAdapter.mapEditor=function(monRT,f)
 {
  var m;
  m=monRT.editorO;
  return m!=null&&m.$==1?{
   $:1,
   $0:f(m.$0)
  }:null;
 };
 MonacoGenAdapter.iterEditor=function(monRT,f)
 {
  var m;
  m=monRT.editorO;
  m!=null&&m.$==1?f(m.$0):void 0;
 };
 AppFrameworkTemplate.html=function()
 {
  SC$1.$cctor();
  return SC$1.html;
 };
 PlgElemName=AppFramework.PlgElemName=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,PlgElemName);
 PlugInName=AppFramework.PlugInName=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,PlugInName);
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
 PlugInBuilder=AppFramework.PlugInBuilder=Runtime.Class({
  Merge:function(plg,prefix,p2)
  {
   plg.plgVars.AppendMany(Seq$1.map(function(v)
   {
    return PlugInVar.New(new PlgElemName({
     $:0,
     $0:prefix+v.varName.get_Id()
    }),v.varVar);
   },p2.plgVars));
   plg.plgViews.AppendMany(Seq$1.map(function(w)
   {
    return PlugInView.New(new PlgElemName({
     $:0,
     $0:prefix+w.viwName.get_Id()
    }),w.viwView);
   },p2.plgViews));
   plg.plgDocs.AppendMany(Seq$1.map(function(d)
   {
    return PlugInDoc.New(new PlgElemName({
     $:0,
     $0:prefix+d.docName.get_Id()
    }),d.docDoc);
   },p2.plgDocs));
   plg.plgActions.AppendMany(Seq$1.map(function(a)
   {
    return PlugInAction.New(new PlgElemName({
     $:0,
     $0:prefix+a.actName.get_Id()
    }),a.actFunction,a.actEnabled);
   },p2.plgActions));
   plg.plgQueries.AppendMany(Seq$1.map(function(q)
   {
    return PlugInQuery.New(new PlgElemName({
     $:0,
     $0:prefix+q.qryName.get_Id()
    }),q.qryFunction);
   },p2.plgQueries));
   return plg;
  },
  AddViw:function(plg,name,viw)
  {
   plg.plgViews.Append(AppFramework.newViw(new PlgElemName({
    $:0,
    $0:name
   }),viw));
   return plg;
  },
  AddActO:function(plg,name,actO)
  {
   actO==null?void 0:plg.plgActions.Append(AppFramework.newAct(new PlgElemName({
    $:0,
    $0:name
   }),actO.$0));
   return plg;
  },
  AddAct2:function(plg,name,act,p1,p2)
  {
   plg.plgActions.Append(AppFramework.newActF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:2,
    $0:act,
    $1:p1,
    $2:p2
   }));
   return plg;
  },
  AddAct1:function(plg,name,act,p1)
  {
   plg.plgActions.Append(AppFramework.newActF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:1,
    $0:act,
    $1:p1
   }));
   return plg;
  },
  AddAct:function(plg,name,act)
  {
   plg.plgActions.Append(AppFramework.newAct(new PlgElemName({
    $:0,
    $0:name
   }),act));
   return plg;
  },
  AddQry:function(plg,name,qry)
  {
   plg.plgQueries.Append(AppFramework.newQry(new PlgElemName({
    $:0,
    $0:name
   }),qry));
   return plg;
  },
  AddDoc5:function(plg,name,doc,a,b,c,d,e)
  {
   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:6,
    $0:doc,
    $1:a,
    $2:b,
    $3:c,
    $4:d,
    $5:e
   }));
   return plg;
  },
  AddDoc4:function(plg,name,doc,a,b,c,d)
  {
   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:5,
    $0:doc,
    $1:a,
    $2:b,
    $3:c,
    $4:d
   }));
   return plg;
  },
  AddDoc3:function(plg,name,doc,a,b,c)
  {
   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:4,
    $0:doc,
    $1:a,
    $2:b,
    $3:c
   }));
   return plg;
  },
  AddDoc2:function(plg,name,doc,p1,p2)
  {
   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:3,
    $0:doc,
    $1:p1,
    $2:p2
   }));
   return plg;
  },
  AddDoc1:function(plg,name,doc,p1)
  {
   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:2,
    $0:doc,
    $1:p1
   }));
   return plg;
  },
  AddDoc0:function(plg,name,doc)
  {
   plg.plgDocs.Append(AppFramework.newDoc0(new PlgElemName({
    $:0,
    $0:name
   }),doc));
   return plg;
  },
  AddDoc:function(plg,name,doc)
  {
   plg.plgDocs.Append(AppFramework.newDoc(new PlgElemName({
    $:0,
    $0:name
   }),doc));
   return plg;
  },
  AddVar:function(plg,name,_var)
  {
   plg.plgVars.Append(AppFramework.newVar(new PlgElemName({
    $:0,
    $0:name
   }),_var));
   return plg;
  },
  Name:function(plg,name)
  {
   return PlugIn.New(new PlugInName({
    $:0,
    $0:name
   }),plg.plgVars,plg.plgViews,plg.plgDocs,plg.plgActions,plg.plgQueries);
  },
  For:function(coll,func)
  {
   var ie;
   ie=Enumerator.Get(coll);
   while(ie.MoveNext())
    func(ie.Current());
  },
  Yield:function()
  {
   return this.Zero();
  },
  Zero:function()
  {
   var i;
   i=AppFramework.defaultPlugIn();
   return PlugIn.New(new PlugInName({
    $:0,
    $0:"Main"
   }),i.plgVars,i.plgViews,i.plgDocs,i.plgActions,i.plgQueries);
  }
 },Obj,PlugInBuilder);
 PlugInBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },PlugInBuilder);
 Fun.New=function(f,p)
 {
  return{
   f:f,
   p:p
  };
 };
 P.New=function(r)
 {
  return{
   r:r
  };
 };
 Val.textAtt=function(a)
 {
  var $1;
  $1=Operators$7.FailWith;
  return $1("textAtt not implemented");
 };
 Val.textDoc=function(a)
 {
  return a.$==0?Doc.TextView(a.$0):Doc.TextNode(a.$0);
 };
 Val.addAtt=function(a,atts)
 {
  return atts.$==0?function($1)
  {
   return $1("addAtt for VView not implemented");
  }(Operators$7.FailWith):{
   $:1,
   $0:Seq$1.append(atts.$0,[a])
  };
 };
 Val.addDoc=function(d,docs)
 {
  return docs.$==0?{
   $:1,
   $0:[Doc.BindView(Doc.Concat,docs.$0),d]
  }:{
   $:1,
   $0:Seq$1.append(docs.$0,[d])
  };
 };
 Val.toView=function(a)
 {
  return a.$==0?a.$0:View$1.Const(a.$0);
 };
 Val.sequenceListApp=function(list)
 {
  return Val.traverseListApp(Global.id,list);
 };
 Val.traverseListApp=function(f,list)
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
   return((Val.op_LessMultiplyGreater())(((Val.op_LessMultiplyGreater())(Val.rtn(function($1)
   {
    return function($2)
    {
     return cons($1,$2);
    };
   })))(f(head))))(tail);
  },list,Val.rtn(List.T.Empty));
 };
 Val.op_LessMultiplyGreater=function()
 {
  SC$1.$cctor();
  return SC$1.op_LessMultiplyGreater;
 };
 Val.apply=function(fv,vv)
 {
  return fv.$==0?vv.$==1?{
   $:0,
   $0:View$1.Apply(fv.$0,View$1.Const(vv.$0))
  }:{
   $:0,
   $0:View$1.Apply(fv.$0,vv.$0)
  }:vv.$==0?{
   $:0,
   $0:View$1.Apply(View$1.Const(fv.$0),vv.$0)
  }:{
   $:1,
   $0:fv.$0(vv.$0)
  };
 };
 Val.rtn=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 Val.map=function(f,a)
 {
  return a.$==0?{
   $:0,
   $0:View$1.Map(f,a.$0)
  }:{
   $:1,
   $0:f(a.$0)
  };
 };
 AAttr.AEmpty={
  $:3
 };
 Extract0.extractTextD=function()
 {
  SC$1.$cctor();
  return SC$1.extractTextD;
 };
 Extract0.extractAtsD=function()
 {
  SC$1.$cctor();
  return SC$1.extractAtsD;
 };
 Extract0.getTextValD=function()
 {
  SC$1.$cctor();
  return SC$1.getTextValD;
 };
 Extract0.getTextValFromSeqD=function()
 {
  SC$1.$cctor();
  return SC$1.getTextValFromSeqD;
 };
 Extract0.extractDocD=function()
 {
  SC$1.$cctor();
  return SC$1.extractDocD;
 };
 Extract0.getDocFromTextTypesD=function()
 {
  SC$1.$cctor();
  return SC$1.getDocFromTextTypesD;
 };
 Extract0.getTextActViewFromReferenceD=function()
 {
  SC$1.$cctor();
  return SC$1.getTextActViewFromReferenceD;
 };
 Extract0.getDocFromReferenceD=function()
 {
  SC$1.$cctor();
  return SC$1.getDocFromReferenceD;
 };
 Extract0.getTextData=function(txt)
 {
  var o,o$1,$1;
  o=(o$1=String.delimitedO("@{","}",txt),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,Extract0.getOneTextData($1[0],$1[1],$1[2]))
  });
  return o==null?List.ofArray([{
   $:0,
   $0:txt
  }]):o.$0;
 };
 Extract0.getOneTextData=function(bef,name,aft)
 {
  return(bef===""?Global.id:function(ls)
  {
   return new List.T({
    $:1,
    $0:{
     $:0,
     $0:bef
    },
    $1:ls
   });
  })(new List.T({
   $:1,
   $0:{
    $:1,
    $0:name
   },
   $1:aft===""?List.T.Empty:Extract0.getTextData(aft)
  }));
 };
 Extract0.getTextActViewFromReference=function(ref)
 {
  return View$1.Const({
   $:0,
   $0:(function($1)
   {
    return function($2)
    {
     return $1("getTextActViewFromReference not implemented: @{"+Utils.toSafe($2)+"}");
    };
   }(Global.id))(ref)
  });
 };
 Extract0.getDocFromReference=function(ref)
 {
  return Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1("getDocFromReference not implemented: @{"+Utils.toSafe($2)+"}");
   };
  }(Global.id))(ref));
 };
 ListModelData=AppFramework.ListModelData=Runtime.Class({
  get_CurrentV:function()
  {
   var $this;
   $this=this;
   return new FromView.New(this.get_CurrentW(),function(v)
   {
    var m,k;
    m=$this.selV.Get();
    m==null?void 0:(k=m.$0,View$1.Get(function(elems)
    {
     if(elems.ContainsKey(k))
      elems.Append(v);
    },$this.elemsW));
   });
  },
  get_CurrentW:function()
  {
   var $this,b;
   $this=this;
   b=View$1.get_Do();
   return View$1.Bind(function(a)
   {
    return View$1.Bind(function(a$1)
    {
     return a$1==null?View$1.Const($this.def):View$1.Bind(function(a$2)
     {
      return a$2==null?View$1.Const($this.def):View$1.Const(a$2.$0);
     },a.TryFindByKeyAsView(a$1.$0));
    },$this.selV.get_View());
   },this.elemsW);
  },
  PlugIn:function(ofStrO,toStr)
  {
   var b,f;
   function g(v)
   {
   }
   b=AppFramework.plugin();
   return b.AddAct(b.AddAct(b.AddVar(b.AddDoc0(b.Yield(),"list",this.doc),"sel",AppFramework.lensStrO(AppFramework.mapVarO(ofStrO,toStr,this.selV))),"add",(f=this.add,function(x)
   {
    return g(f(x));
   })),"del",this.delCur);
  }
 },null,ListModelData);
 ListModelData.New=function(elemsW,doc,selV,add,delCur,def)
 {
  return new ListModelData({
   elemsW:elemsW,
   doc:doc,
   selV:selV,
   add:add,
   delCur:delCur,
   def:def
  });
 };
 AppFramework.mapVarO=function(ofBO,toB,sel)
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
 AppFramework.lensStrO=function(sel)
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
 AppFramework.concatMainDocs=function(plugins)
 {
  return Doc.Concat(Seq$1.choose(function(a)
  {
   var a$1;
   a$1=AppFramework.Lazy(a.docDoc);
   return a$1.$==0?{
    $:1,
    $0:a$1.$0
   }:a$1.$==1?{
    $:1,
    $0:a$1.$0()
   }:null;
  },Seq$1.choose(function(plg)
  {
   return Seq$1.tryHead(plg.plgDocs);
  },plugins)));
 };
 AppFramework.op_Dereference=function(v)
 {
  return P.New((Operators$2.rtn())({
   $:1,
   $0:v
  }));
 };
 AppFramework.getMainDoc=function()
 {
  SC$1.$cctor();
  return SC$1.getMainDoc;
 };
 AppFramework.splitterPerc=function()
 {
  SC$1.$cctor();
  return SC$1.splitterPerc;
 };
 AppFramework.addPlugIn=function(p)
 {
  p.plgViews.Append(AppFramework.newViw(new PlgElemName({
   $:0,
   $0:"PlugInName"
  }),View$1.Const(p.plgName.get_Id())));
  AppFramework.plugIns().Append(p);
 };
 AppFramework.select=function()
 {
  SC$1.$cctor();
  return SC$1.select;
 };
 AppFramework.delayAction=function()
 {
  SC$1.$cctor();
  return SC$1.delayAction;
 };
 AppFramework.callAction=function(actN,p1,p2)
 {
  (((function(a)
  {
   return(AppFramework.callAction0())(a);
  }(actN))(p1))(p2));
 };
 AppFramework.callAction0=function()
 {
  SC$1.$cctor();
  return SC$1.callAction0;
 };
 AppFramework.trigActChange=function()
 {
  SC$1.$cctor();
  return SC$1.trigActChange;
 };
 AppFramework.trigAct=function()
 {
  SC$1.$cctor();
  return SC$1.trigAct;
 };
 AppFramework.dragSplitter=function(varN,eventD)
 {
  (AppFramework.dragSplitter0())([varN,eventD]);
 };
 AppFramework.dragSplitter0=function()
 {
  SC$1.$cctor();
  return SC$1.dragSplitter0;
 };
 AppFramework.draggingEvent=function(first,value,ev)
 {
  var el,vertical,startP,o,x,start,gap,size;
  function getSize(el$1)
  {
   return vertical?first?el$1.getBoundingClientRect().width:-el$1.getBoundingClientRect().width:first?el$1.getBoundingClientRect().height:-el$1.getBoundingClientRect().height;
  }
  function mouseCoord(ev$1)
  {
   return vertical?ev$1.clientX:ev$1.clientY;
  }
  function drag(ev$1)
  {
   var v,e,e$1,a,a$1;
   v=String.left(5,Global.String((e=(e$1=(mouseCoord(ev$1)-start)*100/(size-gap)+startP,(a=0,Unchecked.Compare(a,e$1)===1?a:e$1)),(a$1=100,Unchecked.Compare(a$1,e)===-1?a$1:e))));
   value.Get()!==v?value.Set(v):void 0;
  }
  function finishDragging()
  {
   self.removeEventListener("mousemove",drag,false);
   self.removeEventListener("mouseup",finishDragging,false);
  }
  el=ev.toElement;
  vertical=el.parentElement.hasAttribute("vertical");
  startP=(o=(x=value.Get(),(ParseO.parseDoubleO())(x)),o==null?0:o.$0);
  start=mouseCoord(ev);
  gap=getSize(el);
  size=getSize(el.parentElement);
  self.addEventListener("mousemove",drag,false);
  self.addEventListener("mouseup",finishDragging,false);
  ev.preventDefault();
 };
 AppFramework.getValDirect=function()
 {
  SC$1.$cctor();
  return SC$1.getValDirect;
 };
 AppFramework.setVarDirectD=function(varN,value)
 {
  (Library.delayed(100,function(v)
  {
   AppFramework.setVarDirect(varN,v);
  }))(value);
 };
 AppFramework.setVarDirect=function(varN,value)
 {
  (AppFramework.setVarDirect0())([varN,value]);
 };
 AppFramework.setVarDirect0=function()
 {
  SC$1.$cctor();
  return SC$1.setVarDirect0;
 };
 AppFramework.setVar=function(varN,value)
 {
  (AppFramework.setVar0())([varN,value]);
 };
 AppFramework.setVar0=function()
 {
  SC$1.$cctor();
  return SC$1.setVar0;
 };
 AppFramework.docReference=function()
 {
  SC$1.$cctor();
  return SC$1.docReference;
 };
 AppFramework.Lazy=function(l)
 {
  return l.f();
 };
 AppFramework.htmlDoc=function()
 {
  SC$1.$cctor();
  return SC$1.htmlDoc;
 };
 AppFramework.textArea=function()
 {
  SC$1.$cctor();
  return SC$1.textArea;
 };
 AppFramework.input=function()
 {
  SC$1.$cctor();
  return SC$1.input;
 };
 AppFramework.inputLabel=function()
 {
  SC$1.$cctor();
  return SC$1.inputLabel;
 };
 AppFramework.inputFile$5090$67=Runtime.Curried3(function(act,el,ev)
 {
  return AppFramework.callFunction(el,ev,act.actFunction);
 });
 AppFramework.inputFile$5089$67=Runtime.Curried3(function($1,el,$2)
 {
  el.value="";
 });
 AppFramework.inputFile=function(attrs,labelName,actName)
 {
  var o,o$1,t,act;
  o=(o$1=(t=(AppFramework.splitName(AppFramework.defPlugInName()))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:(act=o$1.$0,Doc.Element("div",AppFramework.getAttrs(AppFramework.defPlugInName(),attrs),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-btn")],[Doc.Element("label",[AttrProxy.Create("class","btn")],[Doc.TextNode(labelName),Doc.Element("input",[AttrProxy.Create("class","form-control"),AttrProxy.Create("type","file"),AttrModule.Style("display","none"),AttrProxy.HandlerImpl("click",function(el)
   {
    return function()
    {
     el.value="";
    };
   }),AttrProxy.HandlerImpl("change",function(el)
   {
    return function(ev)
    {
     return AppFramework.callFunction(el,ev,act.actFunction);
    };
   })],[])])])])]))
  });
  return o==null?AppFramework.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Action not found "+Utils.toSafe($2));
   };
  }(Global.id))(actName)):o.$0;
 };
 AppFramework.docWithVar=function(f,_var)
 {
  var g,t;
  function f$1(o)
  {
   return o==null?null:{
    $:1,
    $0:f(o.$0)
   };
  }
  function d()
  {
   return AppFramework.errDoc((function($1)
   {
    return function($2)
    {
     return $1("Var not found "+Utils.toSafe($2));
    };
   }(Global.id))(_var));
  }
  return Doc.BindView((g=function(o)
  {
   return o==null?d():o.$0;
  },function(x)
  {
   return g(f$1(x));
  }),(t=AppFramework.getParmRef(_var),AppFramework.tryGetVoVW(t[0],t[1])));
 };
 AppFramework.depWithExtracts=function(f)
 {
  var b;
  return AppFramework.runDef((b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(AppFramework.extractAtsD(),function(a)
   {
    return b.Bind(AppFramework.extractDocD(),function(a$1)
    {
     return b.Bind(AppFramework.extractTextD(),function(a$2)
     {
      return b.Return(f(a,a$1,a$2));
     });
    });
   });
  })));
 };
 AppFramework.getParmRef=function(_var)
 {
  var x,o,o$1,$1,b;
  x=(o=(o$1=String.delimitedO("@{","}",_var),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,($1[0],b=$1[1],$1[2],b))
  }),o==null?_var:o.$0);
  return(AppFramework.splitName(AppFramework.defPlugInName()))(x);
 };
 AppFramework.runDef=function(d)
 {
  return AppFramework.run(AppFramework.defPlugInName(),d);
 };
 AppFramework.defPlugInName=function()
 {
  SC$1.$cctor();
  return SC$1.defPlugInName;
 };
 AppFramework.extractAttD=function()
 {
  SC$1.$cctor();
  return SC$1.extractAttD;
 };
 AppFramework.extractAtsD=function()
 {
  SC$1.$cctor();
  return SC$1.extractAtsD$1;
 };
 AppFramework.extractDocD=function()
 {
  SC$1.$cctor();
  return SC$1.extractDocD$1;
 };
 AppFramework.extractTextD=function()
 {
  SC$1.$cctor();
  return SC$1.extractTextD$1;
 };
 AppFramework.run=function(pin,d)
 {
  var x,b;
  x=(b=Operators$2.depend(),b.Delay(function()
  {
   return b.Bind(AppFramework.getDocwD(),function(a)
   {
    return b.Bind(AppFramework.getTextActViewD(),function(a$1)
    {
     return b.Bind(AppFramework.currentPlugInNameD(),function(a$2)
     {
      return b.Return(Depend.resolver(List.ofArray([["getDocFromReference",a],["getTextActViewFromReference",a$1],["currentPlugInName",a$2]]),d));
     });
    });
   });
  }));
  return Depend.resolver(List.ofArray([["currentPlugInName",pin]]),x);
 };
 AppFramework.errDocf=function(fmt)
 {
  return fmt(AppFramework.errDoc);
 };
 AppFramework.errDoc=function(txt)
 {
  return Doc.Element("div",[],[Doc.TextNode(txt)]);
 };
 AppFramework.getTextActViewD=function()
 {
  SC$1.$cctor();
  return SC$1.getTextActViewD;
 };
 AppFramework.getDocD=function()
 {
  SC$1.$cctor();
  return SC$1.getDocD;
 };
 AppFramework.getDocwD=function()
 {
  SC$1.$cctor();
  return SC$1.getDocwD;
 };
 AppFramework.currentPlugInNameD=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInNameD;
 };
 AppFramework.currentPlugInNameDef=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInNameDef;
 };
 AppFramework.valToAttr=function(atn,a)
 {
  return a.$==0?AttrModule.Dynamic(atn,a.$0):AttrProxy.Create(atn,a.$0);
 };
 AppFramework.valToStyle=function(atn,a)
 {
  return a.$==0?AttrModule.DynamicStyle(atn,a.$0):AttrModule.Style(atn,a.$0);
 };
 AppFramework.choiceToString=function(a)
 {
  return a.$==1?(function($1)
  {
   return function($2)
   {
    return $1("@{"+Utils.prettyPrint($2)+"}");
   };
  }(Global.id))(a.$0):a.$0;
 };
 AppFramework.makeAViewDoc0=Global.id;
 AppFramework.makeAViewDocL=function(f)
 {
  return Lazy.Create(function()
  {
   return AppFramework.makeAViewDoc(f);
  });
 };
 AppFramework.makeAViewDoc=function(f)
 {
  return Doc.BindView(function()
  {
   return f();
  },AppFramework.baseView());
 };
 AppFramework.baseView=function()
 {
  SC$1.$cctor();
  return SC$1.baseView;
 };
 AppFramework.mainX=function()
 {
  SC$1.$cctor();
  return SC$1.mainX;
 };
 AppFramework.a11V=function()
 {
  SC$1.$cctor();
  return SC$1.a11V;
 };
 AppFramework.add1=function(a)
 {
  return a+1;
 };
 AppFramework.unwrapBindWrap=function(f,pv)
 {
  return P.New(Operators$2.op_BarGreaterGreater(pv.r,f));
 };
 AppFramework.bindWrap=function(f,pv)
 {
  return P.New(Operators$2.op_GreaterGreaterEquals(pv,function(v)
  {
   return f(v).r;
  }));
 };
 AppFramework.getAttrs=function(lytNm,attrs)
 {
  return List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(Seq$1.choose(function(a)
   {
    var $1,value,value$1,name;
    function s(el,a$1)
    {
     var act;
     if(a$1.$==1)
      {
       act=a$1.$0;
       try
       {
        return el.addEventListener(Strings.Trim(name),function(ev)
        {
         return AppFramework.callFunction(el,ev,act.actFunction);
        },false);
       }
       catch(e)
       {
        return(function($2)
        {
         return function($3)
         {
          return $2(Utils.prettyPrint($3));
         };
        }(function(s$1)
        {
         console.log(s$1);
        }))(e);
       }
      }
     else
      try
      {
       return el.setAttribute(Strings.Trim(name),Strings.Trim(a$1.$0));
      }
      catch(e$1)
      {
       return(function($2)
       {
        return function($3)
        {
         return $2(Utils.prettyPrint($3));
        };
       }(function(s$1)
       {
        console.log(s$1);
       }))(e$1);
      }
    }
    return!Unchecked.Equals(a,null)&&a.length===2&&(value=Arrays.get(a,1),Strings.Trim(Arrays.get(a,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a,1),(name=Arrays.get(a,0),{
     $:1,
     $0:AttrModule.DynamicCustom(function($2)
     {
      return function($3)
      {
       return s($2,$3);
      };
     },AppFramework.getTextData(lytNm,Strings.Trim(value$1)))
    })):null;
   },Seq$1.map(function(s)
   {
    return String.splitByChar("=",s);
   },String.splitByChar(";",attrs))),Seq$1.delay(function()
   {
    return Seq$1.choose(function(a)
    {
     var $1,value,value$1,name,x;
     return!Unchecked.Equals(a,null)&&a.length===2&&(value=Arrays.get(a,1),Strings.Trim(Arrays.get(a,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a,1),(name=Arrays.get(a,0),{
      $:1,
      $0:(x=View$1.Map(function(a$1)
      {
       return a$1.$==1?(function($2)
       {
        return function($3)
        {
         return $2("@{"+Utils.toSafe($3)+"}");
        };
       }(Global.id))(a$1.$0.actName.get_Id()):Strings.Trim(a$1.$0);
      },AppFramework.getTextData(lytNm,Strings.Trim(value$1))),AttrModule.DynamicStyle(Strings.Trim(name),x))
     })):null;
    },Seq$1.map(function(s)
    {
     return String.splitByChar(":",s);
    },String.splitByChar(";",attrs)));
   }));
  }));
 };
 AppFramework.getTextData=function(lytNm,txt)
 {
  var o,o$1,$1,bef;
  o=(o$1=String.delimitedO("@{","}",txt),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,(bef=$1[0],AppFramework.getOneTextData(lytNm,$1[1],bef,$1[2])))
  });
  return o==null?View$1.Const({
   $:0,
   $0:txt
  }):o.$0;
 };
 AppFramework.getOneTextData=function(lytNm,name,bef,aft)
 {
  var p,plg,n;
  p=(AppFramework.splitName(lytNm))(name);
  plg=p[0];
  n=p[1];
  return View$1.Bind(function(a)
  {
   return a==null?View$1.Bind(function(a$1)
   {
    var txt;
    return a$1==null?View$1.Const({
     $:0,
     $0:((((Runtime.Curried(function($1,$2,$3,$4)
     {
      return $1(Utils.toSafe($2)+" @{Missing "+Utils.toSafe($3)+"}"+Utils.toSafe($4));
     },4))(Global.id))(bef))(name))(aft)
    }):(txt=a$1.$0,View$1.Bind(function(a$2)
    {
     return a$2.$==1?View$1.Const({
      $:0,
      $0:(function($1)
      {
       return function($2)
       {
        return $1("Unexpected Action @{"+Utils.toSafe($2)+"}");
       };
      }(Global.id))(a$2.$0.actName.get_Id())
     }):View$1.Const({
      $:0,
      $0:bef+txt+a$2.$0
     });
    },AppFramework.getTextData(lytNm,aft)));
   },AppFramework.tryGetWoWW(plg,n)):View$1.Const({
    $:1,
    $0:a.$0
   });
  },AppFramework.tryGetActW(plg,n));
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
  return o==null?null:o.$0.plgDocs.TryFindByKey(docName);
 };
 AppFramework.tryGetQry=function(plgName,qryName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgQueries.TryFindByKey(qryName);
 };
 AppFramework.tryGetAct=function(plgName,actName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgActions.TryFindByKey(actName);
 };
 AppFramework.tryGetViw=function(plgName,viwName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgViews.TryFindByKey(viwName);
 };
 AppFramework.tryGetVar=function(plgName,varName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgVars.TryFindByKey(varName);
 };
 AppFramework.tryGetPlugIn=function(plgName)
 {
  return AppFramework.plugIns().TryFindByKey(plgName);
 };
 AppFramework.tryGetWoWW=function(plgName,viwName)
 {
  return View$1.Bind(function(a)
  {
   return a==null?View$1.Bind(function(a$1)
   {
    return a$1==null?View$1.Const(null):View$1.Map(function(a$2)
    {
     return{
      $:1,
      $0:a$2
     };
    },a$1.$0.varVar.get_View());
   },AppFramework.tryGetVarW(plgName,viwName)):View$1.Map(function(a$1)
   {
    return{
     $:1,
     $0:a$1
    };
   },a.$0.viwView);
  },AppFramework.tryGetViwW(plgName,viwName));
 };
 AppFramework.tryGetVoVW=function(plgName,varName)
 {
  return View$1.Bind(function(a)
  {
   return a==null?View$1.Map(function(a$1)
   {
    return a$1==null?null:{
     $:1,
     $0:new FromView.New(a$1.$0.viwView,Global.ignore)
    };
   },AppFramework.tryGetViwW(plgName,varName)):View$1.Const({
    $:1,
    $0:a.$0.varVar
   });
  },AppFramework.tryGetVarW(plgName,varName));
 };
 AppFramework.tryGetDocW=function(plgName,docName)
 {
  return View$1.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgDocs.TryFindByKeyAsView(docName):View$1.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.tryGetQryW=function(plgName,qryName)
 {
  return View$1.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgQueries.TryFindByKeyAsView(qryName):View$1.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.tryGetActW=function(plgName,actName)
 {
  return View$1.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgActions.TryFindByKeyAsView(actName):View$1.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.tryGetViwW=function(plgName,viwName)
 {
  return View$1.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgViews.TryFindByKeyAsView(viwName):View$1.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.tryGetVarW=function(plgName,varName)
 {
  return View$1.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgVars.TryFindByKeyAsView(varName):View$1.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.tryGetPlugInW=function(plgName)
 {
  return AppFramework.plugIns().TryFindByKeyAsView(plgName);
 };
 AppFramework.plugin=function()
 {
  SC$1.$cctor();
  return SC$1.plugin;
 };
 AppFramework.newDocF=function(name,docF)
 {
  return PlugInDoc.New(name,Lazy.Create(function()
  {
   return docF;
  }));
 };
 AppFramework.newDocL=function(name,docL)
 {
  return PlugInDoc.New(name,docL);
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
 AppFramework.newDoc0=function(name,f)
 {
  return PlugInDoc.New(name,Lazy.Create(function()
  {
   return{
    $:1,
    $0:f
   };
  }));
 };
 AppFramework.newDoc=function(name,doc)
 {
  return PlugInDoc.New(name,Lazy.Create(function()
  {
   return{
    $:0,
    $0:doc.f()
   };
  }));
 };
 AppFramework.newViw=function(name,viw)
 {
  return PlugInView.New(name,viw);
 };
 AppFramework.newVar=function(name,_var)
 {
  return PlugInVar.New(name,_var);
 };
 AppFramework.vertical$4568$39=function(mouseDown)
 {
  return function(te)
  {
   mouseDown(te.Event);
  };
 };
 AppFramework.vertical$4567$39=Global.id;
 AppFramework.vertical$4566$39=Global.id;
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
 AppFramework.horizontal$4560$39=function(mouseDown)
 {
  return function(te)
  {
   mouseDown(te.Event);
  };
 };
 AppFramework.horizontal$4559$39=Global.id;
 AppFramework.horizontal$4558$39=Global.id;
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
 AppFramework.mainDoc$4549$42=function()
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
     return plg.plgName.get_Id()===mainDoc||plg.plgName.get_Id()+"."+doc.docName.get_Id()===mainDoc;
    },plg.plgDocs);
    return o==null?null:{
     $:1,
     $0:AppFramework.getActualDoc(o.$0)
    };
   },plgs);
   v=AppFramework.AppFwkClient().f();
   return x$1==null?v:x$1.$0;
  },AppFramework.mainDocV().get_View(),x)));
 };
 AppFramework.getActualDoc=function(doc)
 {
  var m;
  m=doc.docDoc.f();
  return m.$==0?m.$0:m.$==1?m.$0():Doc.Element("div",[],[Doc.TextNode((function($1)
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
 AppFramework.renderQueries$4512$39=function(qry)
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
   var b,t,N,p,i;
   return(b=(t=(N=qry.qryName.get_Id(),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })),t.WithHole(Handler$1.EventQ2(t.k,"select",function()
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
 AppFramework.renderActions$4501$39=function(act)
 {
  return function(ev)
  {
   AppFramework.callFunction(null,ev,act.actFunction);
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
   var parms,m,x,x$1,b,A,t,N,p,i;
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
   return(b=(A=AttrModule.DynamicPred("disabled",View$1.Map(function($1)
   {
    return!$1;
   },act.actEnabled),View$1.Const("")),(t=(N=act.actName.get_Id()+parms,ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })),t.WithHole(Handler$1.EventQ2(t.k,"click",function()
   {
    return t.i;
   },function(ev)
   {
    AppFramework.callFunction(null,ev,act.actFunction);
   }))).WithHole({
    $:3,
    $0:"attrs",
    $1:A
   })),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.action(p[0])),(b.i=i,i)))).get_Doc();
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
   actF.$0(p2);
  else
   if(actF.$==2)
    (actF.$0(p1))(p2);
   else
    actF.$0();
 };
 AppFramework.renderDocs$4481$39=function(doc)
 {
  return function()
  {
   View$1.Get(function(plg)
   {
    var a;
    a=plg.plgName.get_Id()+"."+doc.docName.get_Id();
    AppFramework.mainDocV().Set(a);
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
   var b,t,N,p,i;
   return(b=(t=(N=doc.docName.get_Id()+AppFramework.docParms(doc),ProviderBuilder.Make().WithHole({
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
     var a$2;
     a$2=plg$1.plgName.get_Id()+"."+doc.docName.get_Id();
     AppFramework.mainDocV().Set(a$2);
    },AppFramework.currentPlugInW());
   }))),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
  }
  return Doc.ConvertBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return a$1($1[0],$1[1]);
  },View$1.Bind(function(plg)
  {
   function m(v)
   {
    return[plg,v];
   }
   return View$1.Map(function(s)
   {
    return Seq$1.map(m,s);
   },plg.plgDocs.v);
  },AppFramework.currentPlugInW()));
 };
 AppFramework.docParms=function(doc)
 {
  var m,x,x$1,x$2,x$3,x$4;
  m=doc.docDoc.f();
  return m.$==1?"()":m.$==2?(x=Strings.concat(", ",List.ofArray([m.$1])),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x)):m.$==3?(x$1=Strings.concat(", ",List.ofArray([m.$1,m.$2])),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$1)):m.$==4?(x$2=Strings.concat(", ",List.ofArray([m.$1,m.$2,m.$3])),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$2)):m.$==5?(x$3=Strings.concat(", ",List.ofArray([m.$1,m.$2,m.$3,m.$4])),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$3)):m.$==6?(x$4=Strings.concat(", ",List.ofArray([m.$1,m.$2,m.$3,m.$4,m.$5])),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$4)):"";
 };
 AppFramework.renderViews=function()
 {
  function a(plg,viw)
  {
   return[plg.plgName,viw.viwName];
  }
  function a$1(plg,viw)
  {
   var b,N,p,i;
   return(b=(N=viw.viwName.get_Id(),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })).WithHole({
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
   var b,N,p,i;
   return(b=(N=_var.varName.get_Id(),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })).WithHole({
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
 AppFramework.renderPlugIns$4440$35=function(name)
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
   var b,t,N,p,i;
   return(b=(t=(N=$1.get_Id(),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })),t.WithHole(Handler$1.EventQ2(t.k,"select",function()
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
 AppFramework.splitName=function(lytNm)
 {
  function f(s)
  {
   return String.splitByChar(".",s);
  }
  function g(a)
  {
   return Arrays.length(a)===1?[lytNm,new PlgElemName({
    $:0,
    $0:Strings.Trim(Arrays.get(a,0))
   })]:[new PlugInName({
    $:0,
    $0:Strings.Trim(Arrays.get(a,0))
   }),new PlgElemName({
    $:0,
    $0:Strings.Trim(Arrays.get(a,1))
   })];
  }
  return function(x)
  {
   return g(f(x));
  };
 };
 AppFramework.defaultPlugIn=function()
 {
  return PlugIn.New(new PlugInName({
   $:0,
   $0:""
  }),new ListModel$1.New$1(function(_var)
  {
   return _var.varName;
  }),new ListModel$1.New$1(function(viw)
  {
   return viw.viwName;
  }),new ListModel$1.New$1(function(doc)
  {
   return doc.docName;
  }),new ListModel$1.New$1(function(act)
  {
   return act.actName;
  }),new ListModel$1.New$1(function(qry)
  {
   return qry.qryName;
  }));
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
 LM.addElements=function(li,elems)
 {
  View$1.Get(function(elements)
  {
   elements.AppendMany(elems);
  },li.elemsW);
 };
 LM.getDoc=function(keyF,def,newF,predWO,elUI)
 {
  return LM.getDocFor(ListModel$1.Create(keyF,List.T.Empty),def,newF,predWO,elUI);
 };
 LM.getDocFor=function(elements,def,newF,predWO,elUI)
 {
  return LM.getDocForW(View$1.Const(elements),elements.key,def,newF,predWO,elUI);
 };
 LM.getDocForW=function(elementsW,keyF,def,newF,predWO,elUI)
 {
  var selected0,selectedV,b,result,elUIF,listW;
  function _delete(k,u)
  {
   selectedV.Set(null);
   return View$1.Get(function(elements)
   {
    elements.RemoveByKey(k);
   },elementsW);
  }
  selected0=Var$1.Create$1(null);
  selectedV=new FromView.New((b=View$1.get_Do(),View$1.Bind(function(a)
  {
   return View$1.Bind(function(a$1)
   {
    var sel;
    return a$1!=null&&a$1.$==1?(sel=a$1.$0,View$1.Bind(function(a$2)
    {
     return!a$2?View$1.Const(null):View$1.Const({
      $:1,
      $0:sel
     });
    },a.ContainsKeyAsView(sel))):View$1.Const(null);
   },selected0.get_View());
  },elementsW)),function(v)
  {
   View$1.Get(function(elements)
   {
    var v$1,$1;
    v$1=v!=null&&v.$==1&&(elements.ContainsKey(v.$0)&&($1=v.$0,true))?{
     $:1,
     $0:$1
    }:null;
    !Unchecked.Equals(selected0.Get(),v$1)?selected0.Set(v$1):void 0;
   },elementsW);
  });
  result=ListModelData.New(elementsW,Doc.get_Empty,selectedV,function()
  {
   var n;
   n=newF();
   View$1.Get(function(elements)
   {
    elements.Append(n);
    selectedV.Set({
     $:1,
     $0:keyF(n)
    });
   },elementsW);
   return n;
  },function()
  {
   var x;
   x=selectedV.Get();
   (Option.iter(function(k)
   {
    _delete(k,null);
   }))(x);
  },def);
  elUIF=elUI(result);
  listW=View$1.Bind(function(elems)
  {
   return ListModel.MapLens(predWO,function(k,v)
   {
    return(elUIF(View$1.Const({
     $:1,
     $0:k
    })))(v);
   },elems);
  },elementsW);
  return ListModelData.New(result.elemsW,function()
  {
   return Doc.Convert(Global.id,listW);
  },result.selV,result.add,result.delCur,result.def);
 };
 StartAppFramework.startWith=function(html)
 {
  var x;
  x=StartAppFramework.startWithHtmlD();
  (Depend.resolver(List.ofArray([["AppFrameworkTemplate.html",AppFrameworkTemplate.html()+html]]),x))();
 };
 StartAppFramework.startWithHtmlD=function()
 {
  SC$1.$cctor();
  return SC$1.startWithHtmlD;
 };
 StartAppFramework.htmlD=function()
 {
  SC$1.$cctor();
  return SC$1.htmlD;
 };
 AppFrameworkUI.failCreate=function(s,u)
 {
  return(function($1)
  {
   return function($2)
   {
    return $1("Create "+Utils.toSafe($2)+" not implemented");
   };
  }(Operators$7.FailWith))(s);
 };
 AppFrameworkUI.defAct=function()
 {
  SC$1.$cctor();
  return SC$1.defAct;
 };
 AppFrameworkUI.defViw=function()
 {
  SC$1.$cctor();
  return SC$1.defViw;
 };
 AppFrameworkUI.defVar=function()
 {
  SC$1.$cctor();
  return SC$1.defVar;
 };
 AppFrameworkUI.defDoc=function()
 {
  SC$1.$cctor();
  return SC$1.defDoc;
 };
 AppFrameworkUI.defPlg=function()
 {
  SC$1.$cctor();
  return SC$1.defPlg;
 };
 AppFrameworkUI.showDoc$5637$35=function(k,lmd)
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
 AppFrameworkUI.showDoc=function(lmd,k,docV)
 {
  var b,t,p,i;
  return(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"name",
   $1:View$1.Map2(function($1,$2)
   {
    return $1.docName.get_Id()+AppFramework.docParms($2);
   },docV.get_View(),docV.get_View())
  }),t.WithHole(Handler$1.EventQ2(t.k,"select",function()
  {
   return t.i;
  },function()
  {
   var o;
   View$1.Get((o=lmd.selV,function(a)
   {
    o.Set(a);
   }),k);
  }))).WithHole({
   $:2,
   $0:"selected",
   $1:View$1.Map2(function($1,$2)
   {
    return Unchecked.Equals($1,$2)?"selected":"";
   },lmd.selV.get_View(),k)
  }),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFrameworkUI.showAct$5630$35=function(k,lmd)
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
 AppFrameworkUI.showAct=function(lmd,k,actV)
 {
  var b,t,p,i;
  function parms(act)
  {
   var m,x,x$1;
   m=act.actFunction;
   return m.$==1?(x=Strings.concat(", ",List.ofArray([m.$1])),(function($1)
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
   }(Global.id))(x$1)):"";
  }
  return(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"name",
   $1:View$1.Map2(function($1,$2)
   {
    return $1.actName.get_Id()+parms($2);
   },actV.get_View(),actV.get_View())
  }),t.WithHole(Handler$1.EventQ2(t.k,"select",function()
  {
   return t.i;
  },function()
  {
   var o;
   View$1.Get((o=lmd.selV,function(a)
   {
    o.Set(a);
   }),k);
  }))).WithHole({
   $:2,
   $0:"selected",
   $1:View$1.Map2(function($1,$2)
   {
    return Unchecked.Equals($1,$2)?"selected":"";
   },lmd.selV.get_View(),k)
  }),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFrameworkUI.showView$5618$35=function(k,lmd)
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
 AppFrameworkUI.showView=function(lmd,k,viwV)
 {
  var nameW,b,b$1,t,p,i;
  nameW=(b=View$1.get_Do(),View$1.Bind(function(a)
  {
   return View$1.Bind(function(a$1)
   {
    return View$1.Const(a.viwName.get_Id()+" = "+a$1);
   },a.viwView);
  },viwV.get_View()));
  return(b$1=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"name",
   $1:nameW
  }),t.WithHole(Handler$1.EventQ2(t.k,"select",function()
  {
   return t.i;
  },function()
  {
   var o;
   View$1.Get((o=lmd.selV,function(a)
   {
    o.Set(a);
   }),k);
  }))).WithHole({
   $:2,
   $0:"selected",
   $1:View$1.Map2(function($1,$2)
   {
    return Unchecked.Equals($1,$2)?"selected":"";
   },lmd.selV.get_View(),k)
  }),(p=Handler$1.CompleteHoles(b$1.k,b$1.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.tile(p[0])),(b$1.i=i,i)))).get_Doc();
 };
 AppFrameworkUI.showVar$5606$35=function(k,lmd)
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
 AppFrameworkUI.showVar=function(lmd,k,varV)
 {
  var nameW,b,b$1,t,p,i;
  nameW=(b=View$1.get_Do(),View$1.Bind(function(a)
  {
   return View$1.Bind(function(a$1)
   {
    return View$1.Const(a.varName.get_Id()+" = "+a$1);
   },a.varVar.get_View());
  },varV.get_View()));
  return(b$1=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"name",
   $1:nameW
  }),t.WithHole(Handler$1.EventQ2(t.k,"select",function()
  {
   return t.i;
  },function()
  {
   var o;
   View$1.Get((o=lmd.selV,function(a)
   {
    o.Set(a);
   }),k);
  }))).WithHole({
   $:2,
   $0:"selected",
   $1:View$1.Map2(function($1,$2)
   {
    return Unchecked.Equals($1,$2)?"selected":"";
   },lmd.selV.get_View(),k)
  }),(p=Handler$1.CompleteHoles(b$1.k,b$1.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.tile(p[0])),(b$1.i=i,i)))).get_Doc();
 };
 AppFrameworkUI.showPlugIn$5594$35=function(k,lmd)
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
 AppFrameworkUI.showPlugIn=function(lmd,k,plgV)
 {
  var b,t,p,i;
  return(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"name",
   $1:View$1.Map(function($1)
   {
    return $1.plgName.get_Id();
   },plgV.get_View())
  }),t.WithHole(Handler$1.EventQ2(t.k,"select",function()
  {
   return t.i;
  },function()
  {
   var o;
   View$1.Get((o=lmd.selV,function(a)
   {
    o.Set(a);
   }),k);
  }))).WithHole({
   $:2,
   $0:"selected",
   $1:View$1.Map2(function($1,$2)
   {
    return Unchecked.Equals($1,$2)?"selected":"";
   },lmd.selV.get_View(),k)
  }),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
 };
 LayoutEngine.New=function(lytName,lytDefinition)
 {
  return{
   lytName:lytName,
   lytDefinition:lytDefinition
  };
 };
 Measures=LayoutEngineModule.Measures=Runtime.Class({
  toString:function()
  {
   return this.$==1?((((Runtime.Curried(function($1,$2,$3,$4)
   {
    return $1(Global.String($2)+"-"+Global.String($3)+"-"+Global.String($4));
   },4))(Global.id))(Operators$7.toInt(this.$0)))(Operators$7.toInt(this.$1)))(Operators$7.toInt(this.$2)):Global.String(Operators$7.toInt(this.$1?this.$0:-this.$0));
  }
 },null,Measures);
 RefType.RPlg={
  $:4
 };
 RefType.RAct={
  $:3
 };
 RefType.RViw={
  $:2
 };
 RefType.RVar={
  $:1
 };
 RefType.RDoc={
  $:0
 };
 TemplateDef.New=function(tmpName,vars,views,docs,actions,attrs)
 {
  return{
   tmpName:tmpName,
   vars:vars,
   views:views,
   docs:docs,
   actions:actions,
   attrs:attrs
  };
 };
 Syntax.createEntryO2=function(lytNm,refs)
 {
  function addR(nm,en)
  {
   return refs.ContainsKey(nm)?((Result.errorf(Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Already exists "+Utils.toSafe($2)+" : "+FSharpStation_GeneratedPrintf.p$3($3)+" ");
   })))(nm))(en):(refs.Add(nm,en),{
    $:0,
    $0:null
   });
  }
  function ok(nm,en)
  {
   return Result$1.Map(function()
   {
    return[nm,en];
   },addR(nm,en));
  }
  function ko(msg,line)
  {
   return Result$1.Bind(function()
   {
    return{
     $:1,
     $0:msg
    };
   },addR(Seq$1.head(Strings.SplitChars(line,[" ","\u0009"],1)),{
    $:0,
    $0:{
     $:6,
     $0:{
      $:0,
      $0:"div",
      $1:{
       $:0,
       $0:List.T.Empty
      },
      $2:List.ofArray([{
       $:0,
       $0:List.ofArray([{
        $:0,
        $0:msg
       }])
      }])
     }
    }
   }));
  }
  function getRef(nm)
  {
   try
   {
    return refs.get_Item(nm);
   }
   catch(e)
   {
    return(function($1)
    {
     return function($2)
     {
      return $1("Could not find reference to "+Utils.toSafe($2));
     };
    }(Operators$7.FailWith))(nm);
   }
  }
  function getType(rf)
  {
   var entry,nm,ly,$1,a,m,pg,nmm;
   if(rf.$==1)
    {
     nm=rf.$1;
     ly=rf.$0;
     try
     {
      a=getRef(ly);
      if(a.$==6)
       try
       {
        $1=a.$0.$0.get_Item(nm);
       }
       catch(e)
       {
        $1=(((Runtime.Curried3(function($2,$3,$4)
        {
         return $2("Could not find reference to "+Utils.toSafe($3)+"."+Utils.toSafe($4));
        }))(Operators$7.FailWith))(ly))(nm);
       }
      else
       $1=(function($2)
       {
        return function($3)
        {
         return $2("PlugIn not registered: "+FSharpStation_GeneratedPrintf.p$1($3));
        };
       }(Operators$7.FailWith))(rf);
      return[$1,null];
     }
     catch(e$1)
     {
      m=AppFramework.tryGetPlugIn(new PlugInName({
       $:0,
       $0:ly
      }));
      return m!=null&&m.$==1?(pg=m.$0,nmm=new PlgElemName({
       $:0,
       $0:nm
      }),[pg.plgDocs.ContainsKey(nmm)?RefType.RDoc:pg.plgActions.ContainsKey(nmm)?RefType.RAct:pg.plgVars.ContainsKey(nmm)?RefType.RVar:pg.plgViews.ContainsKey(nmm)?RefType.RViw:(((Runtime.Curried3(function($2,$3,$4)
      {
       return $2("Could not find reference to "+Utils.toSafe($3)+"."+Utils.toSafe($4));
      }))(Operators$7.FailWith))(ly))(nm),null]):Operators$7.FailWith(e$1.message);
     }
    }
   else
    {
     entry=getRef(rf.$0);
     return[entry.$==1?RefType.RAct:entry.$==2?RefType.RAct:entry.$==3?RefType.RVar:entry.$==4?RefType.RViw:entry.$==5?RefType.RViw:entry.$==7?RefType.RPlg:entry.$==6?(function($2)
     {
      return function($3)
      {
       return $2("PlugIn should not be referenced by itself: "+FSharpStation_GeneratedPrintf.p$1($3));
      };
     }(Operators$7.FailWith))(rf):RefType.RDoc,{
      $:1,
      $0:entry
     }];
    }
  }
  return function(line)
  {
   var $1,a;
   try
   {
    $1=(a=Syntax.createEntryO(getType,lytNm,line),a==null?ko((function($2)
    {
     return function($3)
     {
      return $2("Line not matched!: "+Utils.toSafe($3));
     };
    }(Global.id))(line),line):ok(a.$0.$0,a.$0.$1));
   }
   catch(e)
   {
    $1=ko(e.message,line);
   }
   return{
    $:1,
    $0:$1
   };
  };
 };
 Syntax.createEntryO=function(getType,lytNm,line)
 {
  var m,$1,a,a$1,$2,a$2,a$3,$3,a$4,a$5,$4,a$6,a$7,$5,a$8,a$9,$6,a$10,a$11,a$12,a$13,$7,a$14,a$15,a$16,a$17,$8,a$18,a$19,a$20,a$21,$9,a$22,a$23,a$24,$10,a$25,a$26,a$27,$11,a$28,a$29,$12,a$30,$13,a$31,a$32,a$33,$14,a$34,a$35,$15,a$36,a$37,$16,a$38,a$39,$17,a$40,a$41,$18,a$42,a$43,a$44,$19,a$45,a$46,a$47,a$48,a$49,a$50,a$51,a$52,a$53,a$54,a$55,$20,a$56,a$57,a$58,a$59;
  function Rt(a$60)
  {
   var a$61,itr;
   a$61=Syntax.R(a$60);
   return a$61!=null&&a$61.$==1?(itr=a$61.$0,{
    $:1,
    $0:[getType(itr),itr]
   }):null;
  }
  function DocRf(a$60)
  {
   var $21,a$61;
   return(a$61=Rt(a$60),a$61!=null&&a$61.$==1&&(a$61.$0[0][0].$==0&&($21=a$61.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$21
    }
   }:null;
  }
  function VarRf(a$60)
  {
   var $21,a$61;
   return(a$61=Rt(a$60),a$61!=null&&a$61.$==1&&(a$61.$0[0][0].$==1&&($21=a$61.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$21
    }
   }:null;
  }
  function ViwRf(a$60)
  {
   var $21,a$61;
   return(a$61=Rt(a$60),a$61!=null&&a$61.$==1&&(a$61.$0[0][0].$==2&&($21=a$61.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$21
    }
   }:null;
  }
  function ActRf(a$60)
  {
   var $21,a$61;
   return(a$61=Rt(a$60),a$61!=null&&a$61.$==1&&(a$61.$0[0][0].$==3&&($21=a$61.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$21
    }
   }:null;
  }
  function PlgRf(a$60)
  {
   var $21,a$61,$22;
   return(a$61=Rt(a$60),a$61!=null&&a$61.$==1&&(a$61.$0[0][0].$==4&&(($22=a$61.$0[0][1],$22!=null&&$22.$==1)&&(a$61.$0[0][1].$0.$==7&&($21=[a$61.$0[0][1].$0.$0,a$61.$0[1]],true)))))?{
    $:1,
    $0:$21[0]
   }:null;
  }
  function Name(a$60)
  {
   var $21,a$61;
   return(a$61=Syntax.R(a$60),a$61!=null&&a$61.$==1&&(a$61.$0.$==0&&($21=a$61.$0.$0,true)))?{
    $:1,
    $0:$21
   }:null;
  }
  function NamU(a$60)
  {
   var $21,a$61;
   return(a$61=Name(a$60),a$61!=null&&a$61.$==1&&(Strings.StartsWith(a$61.$0,"_")&&($21=a$61.$0,true)))?{
    $:1,
    $0:$21
   }:null;
  }
  function Tr(a$60)
  {
   var a$61,a$62,a$63;
   a$61=VarRf(a$60);
   return a$61!=null&&a$61.$==1?{
    $:1,
    $0:{
     $:1,
     $0:a$61.$0
    }
   }:(a$62=ViwRf(a$60),a$62!=null&&a$62.$==1?{
    $:1,
    $0:{
     $:2,
     $0:a$62.$0
    }
   }:(a$63=ActRf(a$60),a$63!=null&&a$63.$==1?{
    $:1,
    $0:{
     $:3,
     $0:a$63.$0
    }
   }:null));
  }
  function Indi(txt)
  {
   var m$1;
   m$1=String.delimitedO("@{","}",txt);
   return m$1!=null&&m$1.$==1?{
    $:1,
    $0:[m$1.$0[0],{
     $:1,
     $0:m$1.$0[1]
    },m$1.$0[2]]
   }:null;
  }
  function Tx(txt)
  {
   var $21,a$60,a$61,aft,bef,tl,a$62,$22;
   return(a$60=Indi(txt),a$60!=null&&a$60.$==1&&(a$61=Tr(a$60.$0[1]),a$61!=null&&a$61.$==1&&($21=[a$60.$0[2],a$60.$0[0],a$61.$0],true)))?(aft=$21[0],(bef=$21[1],(tl=bef===""?List.ofArray([$21[2]]):List.ofArray([{
    $:0,
    $0:bef
   },$21[2]]),aft===""?{
    $:1,
    $0:tl
   }:(a$62=Tx(aft),a$62!=null&&a$62.$==1?{
    $:1,
    $0:List.append(tl,a$62.$0)
   }:null)))):($22=Indi(txt),$22!=null&&$22.$==1)?null:{
    $:1,
    $0:List.ofArray([{
     $:0,
     $0:txt
    }])
   };
  }
  function ActI(txt)
  {
   var $21,a$60,a$61;
   return(a$60=Indi(txt),a$60!=null&&a$60.$==1&&(a$61=ActRf(a$60.$0[1]),a$61!=null&&a$61.$==1&&(Strings.Trim(a$60.$0[0])===""&&Strings.Trim(a$60.$0[2])===""&&($21=[a$60.$0[2],a$61.$0,a$60.$0[0]],true))))?{
    $:1,
    $0:$21[1]
   }:null;
  }
  function QTx(a$60)
  {
   var $21,a$61;
   return a$60.$==0&&(a$61=Tx(a$60.$0),a$61!=null&&a$61.$==1&&($21=a$61.$0,true))?{
    $:1,
    $0:$21
   }:null;
  }
  function At(a$60)
  {
   return a$60.$==0?{
    $:1,
    $0:Arrays.ofSeq(Seq$1.choose(function(a$61)
    {
     var m$1,$21,a$62,$22,a$63,m$2,$23,a$64;
     m$1=(LayoutEngineModule.splitInTwo("="))(a$61);
     return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$62=ActI(Arrays.get(m$1,1)),a$62!=null&&a$62.$==1&&($21=[a$62.$0,Arrays.get(m$1,0)],true))?{
      $:1,
      $0:{
       $:2,
       $0:Strings.Trim($21[1]),
       $1:$21[0]
      }
     }:!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$63=Tx(Arrays.get(m$1,1)),a$63!=null&&a$63.$==1&&($22=[Arrays.get(m$1,0),a$63.$0],true))?{
      $:1,
      $0:{
       $:1,
       $0:Strings.Trim($22[0]),
       $1:$22[1]
      }
     }:(m$2=(LayoutEngineModule.splitInTwo(":"))(a$61),!Unchecked.Equals(m$2,null)&&m$2.length===2&&(a$64=Tx(Arrays.get(m$2,1)),a$64!=null&&a$64.$==1&&($23=[Arrays.get(m$2,0),a$64.$0],true))?{
      $:1,
      $0:{
       $:0,
       $0:Strings.Trim($23[0]),
       $1:$23[1]
      }
     }:(function($24)
     {
      return function($25)
      {
       return $24("Attributes should be like: \"name=val\" or \"name:val\" and separated by ';' : "+Utils.toSafe($25));
      };
     }(Operators$7.FailWith))(a$61));
    },(LayoutEngineModule.splitSemiColon())(a$60.$0)))
   }:null;
  }
  function Pr(a$60)
  {
   var a$61,a$62,a$63,a$64,a$65;
   a$61=QTx(a$60);
   return a$61!=null&&a$61.$==1?{
    $:1,
    $0:{
     $:0,
     $0:a$61.$0
    }
   }:(a$62=DocRf(a$60),a$62!=null&&a$62.$==1?{
    $:1,
    $0:{
     $:1,
     $0:a$62.$0
    }
   }:(a$63=VarRf(a$60),a$63!=null&&a$63.$==1?{
    $:1,
    $0:{
     $:2,
     $0:a$63.$0
    }
   }:(a$64=ViwRf(a$60),a$64!=null&&a$64.$==1?{
    $:1,
    $0:{
     $:3,
     $0:a$64.$0
    }
   }:(a$65=ActRf(a$60),a$65!=null&&a$65.$==1?{
    $:1,
    $0:{
     $:4,
     $0:a$65.$0
    }
   }:null))));
  }
  function Prs(a$60)
  {
   var $21,a$61,a$62;
   switch(a$60.$==1?(a$61=Pr(a$60.$0),a$61!=null&&a$61.$==1?(a$62=Prs(a$60.$1),a$62!=null&&a$62.$==1?($21=[a$61.$0,a$62.$0],1):2):2):0)
   {
    case 0:
     return{
      $:1,
      $0:List.T.Empty
     };
    case 1:
     return{
      $:1,
      $0:new List.T({
       $:1,
       $0:$21[0],
       $1:$21[1]
      })
     };
    case 2:
     return null;
   }
  }
  function ActRfs(a$60)
  {
   var $21,a$61,a$62;
   switch(a$60.$==1?(a$61=ActRf(a$60.$0),a$61!=null&&a$61.$==1?(a$62=ActRfs(a$60.$1),a$62!=null&&a$62.$==1?($21=[a$61.$0,a$62.$0],1):2):2):0)
   {
    case 0:
     return{
      $:1,
      $0:List.T.Empty
     };
    case 1:
     return{
      $:1,
      $0:new List.T({
       $:1,
       $0:$21[0],
       $1:$21[1]
      })
     };
    case 2:
     return null;
   }
  }
  function Nd(a$60)
  {
   var a$61,a$62,a$63,a$64;
   a$61=QTx(a$60);
   return a$61!=null&&a$61.$==1?{
    $:1,
    $0:{
     $:0,
     $0:a$61.$0
    }
   }:(a$62=DocRf(a$60),a$62!=null&&a$62.$==1?{
    $:1,
    $0:{
     $:1,
     $0:a$62.$0
    }
   }:(a$63=VarRf(a$60),a$63!=null&&a$63.$==1?{
    $:1,
    $0:{
     $:2,
     $0:a$63.$0
    }
   }:(a$64=ViwRf(a$60),a$64!=null&&a$64.$==1?{
    $:1,
    $0:{
     $:3,
     $0:a$64.$0
    }
   }:null)));
  }
  function Nds(a$60)
  {
   var $21,a$61,a$62;
   switch(a$60.$==1?(a$61=Nd(a$60.$0),a$61!=null&&a$61.$==1?(a$62=Nds(a$60.$1),a$62!=null&&a$62.$==1?($21=[a$61.$0,a$62.$0],1):2):2):0)
   {
    case 0:
     return{
      $:1,
      $0:List.T.Empty
     };
    case 1:
     return{
      $:1,
      $0:new List.T({
       $:1,
       $0:$21[0],
       $1:$21[1]
      })
     };
    case 2:
     return null;
   }
  }
  function Pgs(a$60)
  {
   var $21,a$61,a$62;
   switch(a$60.$==1?(a$61=PlgRf(a$60.$0),a$61!=null&&a$61.$==1?(a$62=Pgs(a$60.$1),a$62!=null&&a$62.$==1?($21=[a$61.$0,a$62.$0],1):2):2):0)
   {
    case 0:
     return{
      $:1,
      $0:List.T.Empty
     };
    case 1:
     return{
      $:1,
      $0:new List.T({
       $:1,
       $0:$21[0],
       $1:$21[1]
      })
     };
    case 2:
     return null;
   }
  }
  m=LayoutEngineModule.splitTokens(line);
  return m.$==1&&(a=Name(m.$0),a!=null&&a.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==0&&(a$1=Pgs(m.$1.$1),a$1!=null&&a$1.$==1&&($1=[a$1.$0,a.$0],true)))))?Syntax.entryPlg($1[1],{
   $:0,
   $0:new FSharpMap.New($1[0])
  }):m.$==1&&(a$2=NamU(m.$0),a$2!=null&&a$2.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$3=Name(m.$1.$1.$0),a$3!=null&&a$3.$==1&&(m.$1.$1.$1.$==0&&($2=[a$2.$0,a$3.$0],true)))))))?Syntax.entryRef($2[0],$2[1],RefType.RDoc):m.$==1&&(a$4=NamU(m.$0),a$4!=null&&a$4.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$5=Name(m.$1.$1.$0),a$5!=null&&a$5.$==1&&(m.$1.$1.$1.$==0&&($3=[a$4.$0,a$5.$0],true)))))))?Syntax.entryRef($3[0],$3[1],RefType.RVar):m.$==1&&(a$6=NamU(m.$0),a$6!=null&&a$6.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==2&&(m.$1.$1.$==1&&(a$7=Name(m.$1.$1.$0),a$7!=null&&a$7.$==1&&(m.$1.$1.$1.$==0&&($4=[a$6.$0,a$7.$0],true)))))))?Syntax.entryRef($4[0],$4[1],RefType.RViw):m.$==1&&(a$8=NamU(m.$0),a$8!=null&&a$8.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==5&&(m.$1.$1.$==1&&(a$9=Name(m.$1.$1.$0),a$9!=null&&a$9.$==1&&(m.$1.$1.$1.$==0&&($5=[a$8.$0,a$9.$0],true)))))))?Syntax.entryRef($5[0],$5[1],RefType.RAct):m.$==1&&(a$10=Name(m.$0),a$10!=null&&a$10.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$11=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$11!=null&&a$11.$==1&&(m.$1.$1.$1.$==1&&(a$12=DocRf(m.$1.$1.$1.$0),a$12!=null&&a$12.$==1&&(m.$1.$1.$1.$1.$==1&&(a$13=DocRf(m.$1.$1.$1.$1.$0),a$13!=null&&a$13.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($6=[a$12.$0,a$11.$0,a$10.$0,a$13.$0],true)))))))))))?Syntax.entryDoc($6[2],{
   $:0,
   $0:{
    $:0,
    $0:true,
    $1:$6[1],
    $2:$6[0],
    $3:$6[3]
   }
  }):m.$==1&&(a$14=Name(m.$0),a$14!=null&&a$14.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$15=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$15!=null&&a$15.$==1&&(m.$1.$1.$1.$==1&&(a$16=DocRf(m.$1.$1.$1.$0),a$16!=null&&a$16.$==1&&(m.$1.$1.$1.$1.$==1&&(a$17=DocRf(m.$1.$1.$1.$1.$0),a$17!=null&&a$17.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($7=[a$16.$0,a$15.$0,a$14.$0,a$17.$0],true)))))))))))?Syntax.entryDoc($7[2],{
   $:0,
   $0:{
    $:0,
    $0:false,
    $1:$7[1],
    $2:$7[0],
    $3:$7[3]
   }
  }):m.$==1&&(a$18=Name(m.$0),a$18!=null&&a$18.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$19=ActRf(m.$1.$1.$0),a$19!=null&&a$19.$==1&&(m.$1.$1.$1.$==1&&(a$20=At(m.$1.$1.$1.$0),a$20!=null&&a$20.$==1&&(m.$1.$1.$1.$1.$==1&&(a$21=QTx(m.$1.$1.$1.$1.$0),a$21!=null&&a$21.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($8=[a$19.$0,a$20.$0,a$18.$0,a$21.$0],true)))))))))))?Syntax.entryDoc($8[2],{
   $:1,
   $0:{
    $:0,
    $0:$8[0],
    $1:$8[1],
    $2:$8[3]
   }
  }):m.$==1&&(a$22=Name(m.$0),a$22!=null&&a$22.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==2&&(m.$1.$1.$==1&&(a$23=VarRf(m.$1.$1.$0),a$23!=null&&a$23.$==1&&(m.$1.$1.$1.$==1&&(a$24=At(m.$1.$1.$1.$0),a$24!=null&&a$24.$==1&&(m.$1.$1.$1.$1.$==0&&($9=[a$24.$0,a$22.$0,a$23.$0],true)))))))))?Syntax.entryDoc($9[1],{
   $:2,
   $0:{
    $:0,
    $0:$9[2],
    $1:$9[0]
   }
  }):m.$==1&&(a$25=Name(m.$0),a$25!=null&&a$25.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==3&&(m.$1.$1.$==1&&(a$26=VarRf(m.$1.$1.$0),a$26!=null&&a$26.$==1&&(m.$1.$1.$1.$==1&&(a$27=At(m.$1.$1.$1.$0),a$27!=null&&a$27.$==1&&(m.$1.$1.$1.$1.$==0&&($10=[a$27.$0,a$25.$0,a$26.$0],true)))))))))?Syntax.entryDoc($10[1],{
   $:3,
   $0:{
    $:0,
    $0:$10[2],
    $1:$10[0]
   }
  }):m.$==1&&(a$28=Name(m.$0),a$28!=null&&a$28.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$29=(a$30=QTx(m.$1.$1.$0),a$30!=null&&a$30.$==1&&(a$30.$0.$==1&&(a$30.$0.$0.$==0&&(a$30.$0.$1.$==0&&($12=a$30.$0.$0.$0,true)))))?{
   $:1,
   $0:$12
  }:null,a$29!=null&&a$29.$==1&&(m.$1.$1.$1.$==0&&($11=[a$28.$0,a$29.$0],true)))))))?Syntax.entryVar($11[0],{
   $:0,
   $0:Strings.Trim($11[1])
  }):m.$==1&&(a$31=Name(m.$0),a$31!=null&&a$31.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$32=DocRf(m.$1.$1.$0),a$32!=null&&a$32.$==1&&(a$33=Prs(m.$1.$1.$1),a$33!=null&&a$33.$==1&&($13=[a$32.$0,a$31.$0,a$33.$0],true)))))))?Syntax.entryDoc($13[1],{
   $:4,
   $0:{
    $:0,
    $0:$13[0],
    $1:$13[2]
   }
  }):m.$==1&&(a$34=Name(m.$0),a$34!=null&&a$34.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==2&&(a$35=Prs(m.$1.$1),a$35!=null&&a$35.$==1&&($14=[a$34.$0,a$35.$0],true)))))?Syntax.entryView($14[0],{
   $:0,
   $0:$14[1]
  }):m.$==1&&(a$36=Name(m.$0),a$36!=null&&a$36.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==3&&(a$37=Prs(m.$1.$1),a$37!=null&&a$37.$==1&&($15=[a$36.$0,a$37.$0],true)))))?Syntax.entryVJS($15[0],{
   $:0,
   $0:$15[1]
  }):m.$==1&&(a$38=Name(m.$0),a$38!=null&&a$38.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==4&&(a$39=Nds(m.$1.$1),a$39!=null&&a$39.$==1&&($16=[a$38.$0,a$39.$0],true)))))?Syntax.entryDoc($16[0],{
   $:5,
   $0:{
    $:0,
    $0:$16[1]
   }
  }):m.$==1&&(a$40=Name(m.$0),a$40!=null&&a$40.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==5&&(a$41=ActRfs(m.$1.$1),a$41!=null&&a$41.$==1&&($17=[a$41.$0,a$40.$0],true)))))?Syntax.entryActs($17[1],{
   $:0,
   $0:$17[0]
  }):m.$==1&&(a$42=Name(m.$0),a$42!=null&&a$42.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==5&&(m.$1.$1.$==1&&(a$43=ActRf(m.$1.$1.$0),a$43!=null&&a$43.$==1&&(a$44=Prs(m.$1.$1.$1),a$44!=null&&a$44.$==1&&($18=[a$43.$0,a$42.$0,a$44.$0],true)))))))?Syntax.entryAct($18[1],{
   $:0,
   $0:$18[0],
   $1:$18[2]
  }):m.$==1&&(a$45=Name(m.$0),a$45!=null&&a$45.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==4&&(m.$1.$1.$==1&&(a$46=Name(m.$1.$1.$0),a$46!=null&&a$46.$==1&&(m.$1.$1.$1.$==1&&(a$47=Pr(m.$1.$1.$1.$0),a$47!=null&&a$47.$==1&&(m.$1.$1.$1.$1.$==1&&(a$48=(a$49=m.$1.$1.$1.$1.$0,a$49.$==0?{
   $:1,
   $0:Arrays.ofSeq(Seq$1.choose(function(a$60)
   {
    var m$1,$21,a$61,a$62;
    m$1=Arrays.map(LayoutEngineModule.splitTokens,(LayoutEngineModule.splitInTwo(":"))(a$60));
    return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(Arrays.get(m$1,0).$==1&&(a$61=Name(Arrays.get(m$1,0).$0),a$61!=null&&a$61.$==1&&(Arrays.get(m$1,0).$1.$==0&&(Arrays.get(m$1,1).$==1&&(a$62=Pr(Arrays.get(m$1,1).$0),a$62!=null&&a$62.$==1&&(Arrays.get(m$1,1).$1.$==0&&($21=[a$61.$0,a$62.$0],true)))))))?{
     $:1,
     $0:[$21[0],$21[1]]
    }:(function($22)
    {
     return function($23)
     {
      return $22("Expecting Views \"name:view\" separated by ';' : "+Utils.toSafe($23));
     };
    }(Operators$7.FailWith))(a$60);
   },(LayoutEngineModule.splitSemiColon())(a$49.$0)))
  }:null),a$48!=null&&a$48.$==1&&(m.$1.$1.$1.$1.$1.$==1&&(a$50=(a$51=m.$1.$1.$1.$1.$1.$0,a$51.$==0?{
   $:1,
   $0:Arrays.ofSeq(Seq$1.choose(function(a$60)
   {
    var m$1,$21,a$61,a$62;
    m$1=Arrays.map(function(a$63)
    {
     return{
      $:1,
      $0:a$63
     };
    },(LayoutEngineModule.splitInTwo(":"))(a$60));
    return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$61=Name(Arrays.get(m$1,0)),a$61!=null&&a$61.$==1&&(a$62=DocRf(Arrays.get(m$1,1)),a$62!=null&&a$62.$==1&&($21=[a$61.$0,a$62.$0],true)))?{
     $:1,
     $0:[$21[0],$21[1]]
    }:(function($22)
    {
     return function($23)
     {
      return $22("Expecting Docs \"name:doc\" separated by ';' : "+Utils.toSafe($23));
     };
    }(Operators$7.FailWith))(a$60);
   },(LayoutEngineModule.splitSemiColon())(a$51.$0)))
  }:null),a$50!=null&&a$50.$==1&&(m.$1.$1.$1.$1.$1.$1.$==1&&(a$52=(a$53=m.$1.$1.$1.$1.$1.$1.$0,a$53.$==0?{
   $:1,
   $0:Arrays.ofSeq(Seq$1.choose(function(a$60)
   {
    var m$1,$21,a$61,a$62;
    m$1=Arrays.map(function(a$63)
    {
     return{
      $:1,
      $0:a$63
     };
    },(LayoutEngineModule.splitInTwo(":"))(a$60));
    return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$61=Name(Arrays.get(m$1,0)),a$61!=null&&a$61.$==1&&(a$62=VarRf(Arrays.get(m$1,1)),a$62!=null&&a$62.$==1&&($21=[a$61.$0,a$62.$0],true)))?{
     $:1,
     $0:[$21[0],$21[1]]
    }:(function($22)
    {
     return function($23)
     {
      return $22("Expecting Vars \"name:var\" separated by ';' : "+Utils.toSafe($23));
     };
    }(Operators$7.FailWith))(a$60);
   },(LayoutEngineModule.splitSemiColon())(a$53.$0)))
  }:null),a$52!=null&&a$52.$==1&&(m.$1.$1.$1.$1.$1.$1.$1.$==1&&(a$54=(a$55=m.$1.$1.$1.$1.$1.$1.$1.$0,a$55.$==0?{
   $:1,
   $0:Arrays.ofSeq(Seq$1.choose(function(a$60)
   {
    var m$1,$21,a$61,a$62;
    m$1=Arrays.map(LayoutEngineModule.splitTokens,(LayoutEngineModule.splitInTwo(":"))(a$60));
    return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(Arrays.get(m$1,0).$==1&&(a$61=Name(Arrays.get(m$1,0).$0),a$61!=null&&a$61.$==1&&(Arrays.get(m$1,0).$1.$==0&&(Arrays.get(m$1,1).$==1&&(a$62=ActRf(Arrays.get(m$1,1).$0),a$62!=null&&a$62.$==1&&(Arrays.get(m$1,1).$1.$==0&&($21=[a$61.$0,a$62.$0],true)))))))?{
     $:1,
     $0:[$21[0],$21[1]]
    }:(function($22)
    {
     return function($23)
     {
      return $22("Expecting Actions \"name:action\" separated by ';' : "+Utils.toSafe($23));
     };
    }(Operators$7.FailWith))(a$60);
   },(LayoutEngineModule.splitSemiColon())(a$55.$0)))
  }:null),a$54!=null&&a$54.$==1&&(m.$1.$1.$1.$1.$1.$1.$1.$1.$==0&&($19=[a$54.$0,a$47.$0,a$50.$0,a$45.$0,a$46.$0,a$52.$0,a$48.$0],true)))))))))))))))))?Syntax.entryDoc($19[3],{
   $:7,
   $0:Syntax.templateDef($19[4],$19[1],$19[5],$19[6],$19[2],$19[0])
  }):m.$==1&&(a$56=Name(m.$0),a$56!=null&&a$56.$==1&&(m.$1.$==1&&(a$57=LayoutEngineModule.Vertical(m.$1.$0),a$57.$==5&&(m.$1.$1.$==1&&(a$58=Pr(m.$1.$1.$0),a$58!=null&&a$58.$==1&&(a$59=Nds(m.$1.$1.$1),a$59!=null&&a$59.$==1&&($20=[a$58.$0,a$57.$0,a$56.$0,a$59.$0],true)))))))?Syntax.entryDoc($20[2],{
   $:6,
   $0:{
    $:0,
    $0:$20[1],
    $1:$20[0],
    $2:$20[3]
   }
  }):null;
 };
 Syntax.R=function(a)
 {
  var a$1,m,n;
  a$1=LayoutEngineModule.Identifier(a);
  return a$1!=null&&a$1.$==1?(m=Strings.SplitChars(a$1.$0,["."],0),!Unchecked.Equals(m,null)&&m.length===1?{
   $:1,
   $0:{
    $:0,
    $0:Arrays.get(m,0)
   }
  }:!Unchecked.Equals(m,null)&&m.length===2?(n=Arrays.get(m,1),{
   $:1,
   $0:{
    $:1,
    $0:Arrays.get(m,0),
    $1:n
   }
  }):null):null;
 };
 Syntax.entryRef=function(n,e,e$1)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:7,
    $0:[e,e$1]
   })
  };
 };
 Syntax.entryPlg=function(n,p)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:6,
    $0:p
   })
  };
 };
 Syntax.entryVar=function(n,v)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:3,
    $0:v
   })
  };
 };
 Syntax.entryVJS=function(n,w)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:5,
    $0:w
   })
  };
 };
 Syntax.entryView=function(n,w)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:4,
    $0:w
   })
  };
 };
 Syntax.entryActs=function(n,a)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:2,
    $0:a
   })
  };
 };
 Syntax.entryAct=function(n,a)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:1,
    $0:a
   })
  };
 };
 Syntax.entryDoc=function(n,d)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:0,
    $0:d
   })
  };
 };
 Syntax.entryDef=function(n,e)
 {
  return{
   $:0,
   $0:n,
   $1:e
  };
 };
 Syntax.templateDef=function(nm,ats,vs,ws,ds,acs)
 {
  return TemplateDef.New(nm,vs,ws,ds,acs,ats);
 };
 Layout.createLayoutDefinitions=function(nameBase,node)
 {
  var dir,meas,p,name1,def1,p$1,name2,def2,t,t$1;
  return node.$==1?(dir=node.$0.$0,(meas=node.$0.$1,(p=Layout.createLayoutDefinitions(nameBase+"_1",node.$0.$2),(name1=p[0],(def1=p[1],(p$1=Layout.createLayoutDefinitions(nameBase+"_2",node.$0.$3),(name2=p$1[0],(def2=p$1[1],[nameBase,Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append([Strings.concat(" ",List.ofArray([nameBase,dir?"vertical":"horizontal",Global.String(meas),name1,name2]))],Seq$1.delay(function()
   {
    return Seq$1.append(def1,Seq$1.delay(function()
    {
     return def2;
    }));
   }));
  }))])))))))):(t=node.$0,!Unchecked.Equals(t,null)&&t.length===0)?["___",[]]:(t$1=node.$0,!Unchecked.Equals(t$1,null)&&t$1.length===1)?[Arrays.get(node.$0,0),[]]:[nameBase,[nameBase+" div \"\" "+Strings.concat(" ",node.$0)]];
 };
 Layout.extractNodes=function(lyt)
 {
  var m,m$1;
  function checkSplitter(dir,m$2,one,two)
  {
   var $1,$2,$3,t,t$1,t$2;
   $1=Layout.extractNodes(one);
   $2=Layout.extractNodes(two);
   return($1.$==0?(t=$1.$0,!Unchecked.Equals(t,null)&&t.length===0)?($3=$2,true):$2.$==0?(t$1=$2.$0,!Unchecked.Equals(t$1,null)&&t$1.length===0)?($3=$1,true):($3=[$1,$2],false):($3=[$1,$2],false):$2.$==0?(t$2=$2.$0,!Unchecked.Equals(t$2,null)&&t$2.length===0)?($3=$1,true):($3=[$1,$2],false):($3=[$1,$2],false))?$3:{
    $:1,
    $0:{
     $:0,
     $0:dir,
     $1:m$2,
     $2:$3[0],
     $3:$3[1]
    }
   };
  }
  m=Layout.horizontalSplit(lyt);
  return m!=null&&m.$==1?checkSplitter(false,m.$0[2],m.$0[0],m.$0[1]):(m$1=Layout.verticalSplit(lyt),m$1!=null&&m$1.$==1?checkSplitter(true,m$1.$0[2],m$1.$0[0],m$1.$0[1]):{
   $:0,
   $0:Layout.cleanSpaces(lyt)
  });
 };
 Layout.cleanSpaces=function(lyt)
 {
  return Arrays.filter(function(a)
  {
   var $1;
   return!($1=(ParseO.Int())(a),$1!=null&&$1.$==1);
  },Strings.SplitStrings(Strings.concat(" ",lyt),[" "],1));
 };
 Layout.verticalSplit=function(lyt)
 {
  var lines,o,o$1,o$2,i,$1,l,r,x,v;
  function c(i$1,l$1)
  {
   var $2,a,t;
   return(a=LibraryJS.REGEX$1("^ *\\|+ *$","",l$1),a!=null&&a.$==1&&(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1))?{
    $:1,
    $0:[i$1,l$1.indexOf("|")]
   }:null;
  }
  function g(y)
  {
   return Unchecked.Equals(null,y);
  }
  function g$1(y)
  {
   return Unchecked.Equals(null,y);
  }
  lines=Layout.transpose(lyt);
  o=(o$1=(o$2=Seq$1.tryHead(Seq$1.sortBy(function(t)
  {
   return t[1];
  },Seq$1.choose(function($2)
  {
   return c($2[0],$2[1]);
  },Seq$1.indexed(lines)))),o$2==null?null:{
   $:1,
   $0:o$2.$0[0]
  }),o$1==null?null:{
   $:1,
   $0:(i=o$1.$0,[Layout.transpose(Slice.array(lines,null,{
    $:1,
    $0:i-1
   })),Layout.transpose(Slice.array(lines,{
    $:1,
    $0:i+1
   },null))])
  });
  return o==null?null:{
   $:1,
   $0:($1=o.$0,(l=$1[0],(r=$1[1],[Arrays.filter(function(x$1)
   {
    return g(Layout.extractMeasuresO(x$1));
   },l),Arrays.filter(function(x$1)
   {
    return g$1(Layout.extractMeasuresO(x$1));
   },r),(x=Seq$1.tryHead(Seq$1.delay(function()
   {
    return Seq$1.append(Seq$1.choose(Layout.extractMeasuresO,l),Seq$1.delay(function()
    {
     return Seq$1.map(function(a)
     {
      return a.$==0?a.$1?new Measures({
       $:0,
       $0:a.$0,
       $1:false
      }):a:a;
     },Seq$1.choose(Layout.extractMeasuresO,r));
    }));
   })),(v=new Measures({
    $:1,
    $0:5,
    $1:50,
    $2:95
   }),x==null?v:x.$0))])))
  };
 };
 Layout.transpose=function(lines)
 {
  var max;
  max=Seq$1.max(Seq$1.map(function(l)
  {
   return l.length;
  },lines));
  return Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.map(function(i)
   {
    return Arrays.ofSeq(Seq$1.delay(function()
    {
     return Seq$1.map(function(l)
     {
      return l.length>i?l[i]:" ";
     },lines);
    })).join("");
   },Operators$7.range(0,max-1));
  }));
 };
 Layout.horizontalSplit=function(lines)
 {
  var o,o$1,$1,i,ms;
  function c(i$1,l)
  {
   var a,x,o$2,v;
   a=LibraryJS.REGEX$1("^ *--+([ ^v0-9]*)-* *$","",l);
   return a!=null&&a.$==1?{
    $:1,
    $0:[[i$1,(x=(o$2=Seq$1.tryItem(1,a.$0),o$2==null?null:Layout.extractMeasuresO(Strings.Replace(Strings.Replace(o$2.$0,"^",""),"v","-"))),(v=new Measures({
     $:1,
     $0:5,
     $1:50,
     $2:95
    }),x==null?v:x.$0))],l.indexOf("-")]
   }:null;
  }
  o=(o$1=Seq$1.tryHead(Seq$1.sortBy(function(t)
  {
   return t[1];
  },Seq$1.choose(function($2)
  {
   return c($2[0],$2[1]);
  },Seq$1.indexed(lines)))),o$1==null?null:{
   $:1,
   $0:o$1.$0[0]
  });
  return o==null?null:{
   $:1,
   $0:($1=o.$0,(i=$1[0],(ms=$1[1],[Slice.array(lines,null,{
    $:1,
    $0:i-1
   }),Slice.array(lines,{
    $:1,
    $0:i+1
   },null),ms])))
  };
 };
 Layout.extractMeasuresO=function(m)
 {
  var m$1,$1,a,$2,a$1,a$2,a$3;
  m$1=Strings.SplitChars(m,[" "],1);
  return!Unchecked.Equals(m$1,null)&&m$1.length===1&&(a=(ParseO.Int())(Arrays.get(m$1,0)),a!=null&&a.$==1&&($1=a.$0,true))?{
   $:1,
   $0:new Measures({
    $:0,
    $0:Math.abs($1),
    $1:$1>=0
   })
  }:!Unchecked.Equals(m$1,null)&&m$1.length===3&&(a$1=(ParseO.Int())(Arrays.get(m$1,0)),a$1!=null&&a$1.$==1&&(a$2=(ParseO.Int())(Arrays.get(m$1,1)),a$2!=null&&a$2.$==1&&(a$3=(ParseO.Int())(Arrays.get(m$1,2)),a$3!=null&&a$3.$==1&&($2=[a$3.$0,a$1.$0,a$2.$0],true))))?{
   $:1,
   $0:new Measures({
    $:1,
    $0:$2[1],
    $1:$2[2],
    $2:$2[0]
   })
  }:null;
 };
 LayoutEngineModule.newLyt=function(name,lyt)
 {
  return LayoutEngine.New(name,Var$1.Create$1(lyt));
 };
 LayoutEngineModule.refreshEntries=function(lytN,entries)
 {
  var plg,m,plg$1,i;
  plg=(m=AppFramework.tryGetPlugIn(lytN),m==null?(plg$1=(i=AppFramework.defaultPlugIn(),PlugIn.New(lytN,i.plgVars,i.plgViews,i.plgDocs,i.plgActions,i.plgQueries)),(AppFramework.addPlugIn(plg$1),plg$1)):m.$0);
  ListModel.refreshLM(plg.plgVars,Arrays.ofSeq(Seq$1.delay(function()
  {
   return LayoutEngineModule.getVarEntries(entries);
  })));
  ListModel.refreshLM(plg.plgViews,Arrays.ofSeq(Seq$1.delay(function()
  {
   return LayoutEngineModule.getViewEntries(entries);
  })));
  ListModel.refreshLM(plg.plgActions,Arrays.ofSeq(Seq$1.delay(function()
  {
   return LayoutEngineModule.getActionEntries(entries);
  })));
  ListModel.refreshLM(plg.plgQueries,Arrays.ofSeq(Seq$1.delay(function()
  {
   return LayoutEngineModule.getQueryEntries(entries);
  })));
  ListModel.refreshLM(plg.plgDocs,Arrays.ofSeq(Seq$1.delay(function()
  {
   return LayoutEngineModule.getDocEntries(entries);
  })));
 };
 LayoutEngineModule.none=function(x)
 {
  return Doc.Element("span",[],[]);
 };
 LayoutEngineModule.getQueryEntries=function(entries)
 {
  function f(t)
  {
   return t[1];
  }
  return Seq$1.map(function(x)
  {
   return Seq$1.last(f(x));
  },Seq$1.groupBy(function(v)
  {
   return v.qryName;
  },Seq$1.choose(function(a)
  {
   return a.$==4?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.getActionEntries=function(entries)
 {
  function f(t)
  {
   return t[1];
  }
  return Seq$1.map(function(x)
  {
   return Seq$1.last(f(x));
  },Seq$1.groupBy(function(v)
  {
   return v.actName;
  },Seq$1.choose(function(a)
  {
   return a.$==3?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.getViewEntries=function(entries)
 {
  function f(t)
  {
   return t[1];
  }
  return Seq$1.map(function(x)
  {
   return Seq$1.last(f(x));
  },Seq$1.groupBy(function(v)
  {
   return v.viwName;
  },Seq$1.choose(function(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.getVarEntries=function(entries)
 {
  function f(t)
  {
   return t[1];
  }
  return Seq$1.map(function(x)
  {
   return Seq$1.last(f(x));
  },Seq$1.groupBy(function(v)
  {
   return v.varName;
  },Seq$1.choose(function(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.getDocEntries=function(entries)
 {
  function f(t)
  {
   return t[1];
  }
  return Seq$1.map(function(x)
  {
   return Seq$1.last(f(x));
  },Seq$1.groupBy(function(d)
  {
   return d.docName;
  },Seq$1.choose(function(a)
  {
   return a.$==2?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.getText=function(lytNm,txtName)
 {
  var a,id,p,plg,nm,o,o$1,o$2,o$3;
  a=LayoutEngineModule.Identifier(txtName);
  return a!=null&&a.$==1?(id=a.$0,(p=(AppFramework.splitName(lytNm))(id),(plg=p[0],(nm=p[1],(o=(o$1=AppFramework.tryGetViw(plg,nm),o$1==null?null:{
   $:1,
   $0:Doc.TextView(o$1.$0.viwView)
  }),o==null?(o$2=(o$3=AppFramework.tryGetVar(plg,nm),o$3==null?null:{
   $:1,
   $0:Doc.TextView(o$3.$0.varVar.get_View())
  }),o$2==null?Doc.TextNode(id):o$2.$0):o.$0))))):Doc.TextNode(LayoutEngineModule.S(txtName));
 };
 LayoutEngineModule.parseEntries=function(lytNm,txt)
 {
  var localRefs,x;
  localRefs=new Dictionary.New$5();
  x=(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("PlugInName View \""+Utils.toSafe($2)+"\"\n"+Utils.toSafe($3));
  }))(Global.id))(lytNm.get_Id()))(txt);
  return LayoutEngineModule.processText(Syntax.createEntryO2(lytNm,localRefs),x);
 };
 LayoutEngineModule.processText=function(f,txt)
 {
  return LayoutEngineModule.processLines(f,Strings.SplitChars(txt,["\n","\r"],1));
 };
 LayoutEngineModule.processLines=function(f,ls)
 {
  function processLinesR(ls$1)
  {
   var m,l,m$1,$1,a,p,p$1,rest,docs,p$2,names,ls$2;
   m=Seq$1.tryHead(ls$1);
   return m!=null&&m.$==1?(l=m.$0,(m$1=LayoutEngineModule.splitTokens(l),m$1.$==1&&(a=LayoutEngineModule.Identifier(m$1.$0),a!=null&&a.$==1&&(m$1.$1.$==1&&(LayoutEngineModule.Vertical(m$1.$1.$0).$==2&&(m$1.$1.$1.$==0&&($1=a.$0,true)))))?(p=LayoutEngineModule.getExtraLines(function(l$1)
   {
    return Strings.StartsWith(Strings.Trim(l$1),"|");
   },ls$1),processLinesR((Layout.createLayoutDefinitions($1,Layout.extractNodes(p[0])))[1].concat(p[1]))):m$1.$==0?processLinesR(Slice.array(ls$1,{
    $:1,
    $0:1
   },null)):(p$1=LayoutEngineModule.getExtraLines(function(l$1)
   {
    return Strings.StartsWith(Strings.Trim(l$1),":");
   },ls$1),(rest=p$1[1],(docs=p$1[0],Arrays.length(docs)>0?(p$2=LayoutEngineModule.createLines(Seq$1.nth(0,Strings.SplitChars(l,[" "],1)),1,[],[],1,docs),(names=p$2[0],(ls$2=p$2[1],processLinesR(Arrays.ofSeq(Seq$1.delay(function()
   {
    return Seq$1.append(ls$2,Seq$1.delay(function()
    {
     return Seq$1.append([l+" "+Strings.concat(" ",names)],Seq$1.delay(function()
     {
      return rest;
     }));
    }));
   })))))):Arrays.ofSeq(Seq$1.delay(function()
   {
    var m$2;
    return Seq$1.append((m$2=f(l),m$2!=null&&m$2.$==1?[m$2.$0]:[]),Seq$1.delay(function()
    {
     return processLinesR(rest);
    }));
   }))))))):[];
  }
  return processLinesR(ls);
 };
 LayoutEngineModule.createLines=function(baseName,n,names,lines,i,ls)
 {
  var prefix,prefix2,m,a,l,p,name,p$1,childrenLines,childNames;
  prefix=Strings.replicate(n,":");
  prefix2=":"+prefix;
  m=Seq$1.tryHead(ls);
  return m!=null&&m.$==1?(a=String.StartsWith(prefix,Strings.Trim(m.$0)),a!=null&&a.$==1?(l=a.$0,(p=LayoutEngineModule.getExtraLines(function(l$1)
  {
   return Strings.StartsWith(Strings.Trim(l$1),prefix2);
  },ls),(name=(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("_"+Utils.toSafe($2)+"_"+Global.String($3));
  }))(Global.id))(baseName))(i),(p$1=LayoutEngineModule.createLines(name,n+1,[],[],1,p[0]),(childrenLines=p$1[1],(childNames=p$1[0],LayoutEngineModule.createLines(baseName,n,Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(names,Seq$1.delay(function()
   {
    return[name];
   }));
  })),Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(lines,Seq$1.delay(function()
   {
    return Seq$1.append(childrenLines,Seq$1.delay(function()
    {
     return[name+" "+l+" "+Strings.concat(" ",childNames)];
    }));
   }));
  })),i+1,p[1]))))))):[names,lines]):[names,lines];
 };
 LayoutEngineModule.getExtraLines=function(pred,ls)
 {
  var i,x,o,v,a;
  i=(x=(o=Seq$1.tryFindIndex(function(l)
  {
   return(LayoutEngineModule.notEmpty())(l)&&!pred(l);
  },Seq$1.skip(1,ls)),o==null?null:{
   $:1,
   $0:1+o.$0
  }),(v=Arrays.length(ls),x==null?v:x.$0));
  return[(a=Slice.array(ls,{
   $:1,
   $0:1
  },{
   $:1,
   $0:i-1
  }),Arrays.filter(LayoutEngineModule.notEmpty(),a)),Slice.array(ls,{
   $:1,
   $0:i
  },null)];
 };
 LayoutEngineModule.notEmpty=function()
 {
  SC$1.$cctor();
  return SC$1.notEmpty;
 };
 LayoutEngineModule.emptyLine=function(l)
 {
  var lt;
  lt=Strings.Trim(l);
  return lt===""||Strings.StartsWith(lt,"//");
 };
 LayoutEngineModule.splitTokens=function(line)
 {
  return LayoutEngineModule.doubleQuote(List.ofSeq(Seq$1.collect(Global.id,Seq$1.mapi(function(i,s)
  {
   var t;
   return i%2===1?[{
    $:0,
    $0:s
   }]:s===""?[{
    $:0,
    $0:"\""
   }]:(t=Strings.Trim(s),t===""?[]:Arrays.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },Strings.SplitChars(t,[" "],1)));
  },String.splitByChar("\"",Unchecked.Equals(Seq$1.tryHead(line),{
   $:1,
   $0:"\""
  })?" "+line:line)))));
 };
 LayoutEngineModule.doubleQuote=function(a)
 {
  var $1,$2,$3;
  switch(a.$==1?a.$0.$==1?Strings.StartsWith(a.$0.$0,"//")?($1=a.$0.$0,1):2:2:0)
  {
   case 0:
    return List.T.Empty;
   case 1:
    return List.T.Empty;
   case 2:
    switch(a.$==1?a.$0.$==0?a.$1.$==1?a.$1.$0.$==0?a.$1.$0.$0==="\""?a.$1.$1.$==0?($3=a.$0.$0,1):a.$1.$1.$0.$==0?($3=[a.$1.$1.$1,a.$0.$0,a.$1.$1.$0.$0],0):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):3)
    {
     case 0:
      $2=LayoutEngineModule.doubleQuote(new List.T({
       $:1,
       $0:{
        $:0,
        $0:$3[1]+"\""+$3[2]
       },
       $1:$3[0]
      }));
      break;
     case 1:
      $2=List.ofArray([{
       $:0,
       $0:$3
      }]);
      break;
     case 2:
      $2=new List.T({
       $:1,
       $0:$3[0],
       $1:LayoutEngineModule.doubleQuote($3[1])
      });
      break;
     case 3:
      throw new MatchFailureException.New("D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\FSharpStation\\src\\FSharpStation.fs",5792,38);
    }
    return $2;
  }
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
 LayoutEngineModule.Measures$1=function(a)
 {
  var a$1,$1,a$2,$2,a$3,$3,a$4,a$5,a$6;
  return a.$==1?(a$1=String.splitByChar("-",a.$0),!Unchecked.Equals(a$1,null)&&a$1.length===1&&(a$2=(ParseO.Double())(Arrays.get(a$1,0)),a$2!=null&&a$2.$==1&&($1=a$2.$0,true))?{
   $:1,
   $0:new Measures({
    $:0,
    $0:$1,
    $1:true
   })
  }:!Unchecked.Equals(a$1,null)&&a$1.length===2&&(Arrays.get(a$1,0)===""&&(a$3=(ParseO.Double())(Arrays.get(a$1,1)),a$3!=null&&a$3.$==1&&($2=a$3.$0,true)))?{
   $:1,
   $0:new Measures({
    $:0,
    $0:$2,
    $1:false
   })
  }:!Unchecked.Equals(a$1,null)&&a$1.length===3&&(a$4=(ParseO.Double())(Arrays.get(a$1,0)),a$4!=null&&a$4.$==1&&(a$5=(ParseO.Double())(Arrays.get(a$1,1)),a$5!=null&&a$5.$==1&&(a$6=(ParseO.Double())(Arrays.get(a$1,2)),a$6!=null&&a$6.$==1&&($3=[a$6.$0,a$4.$0,a$5.$0],true))))?{
   $:1,
   $0:new Measures({
    $:1,
    $0:$3[1],
    $1:$3[2],
    $2:$3[0]
   })
  }:null):null;
 };
 LayoutEngineModule.splitInTwo=function(ch)
 {
  var f;
  f=LayoutEngineModule.splitChar(ch);
  return function(x)
  {
   return Arrays.ofSeq(f(x));
  };
 };
 LayoutEngineModule.splitSemiColon=function()
 {
  SC$1.$cctor();
  return SC$1.splitSemiColon;
 };
 LayoutEngineModule.splitChar=function(ch)
 {
  function f(s)
  {
   return String.splitByChar(ch,s);
  }
  function g(s)
  {
   return Seq$1.map(String.trim,s);
  }
  return function(x)
  {
   return g(f(x));
  };
 };
 LayoutEngineModule.Var=function(a)
 {
  var $1,$2,$3,$4,$5,$6;
  return a.$==1&&(a.$0==="Var"&&($1=a.$0,true))?{
   $:0,
   $0:null
  }:a.$==1&&(a.$0==="Doc"&&($2=a.$0,true))?{
   $:1,
   $0:null
  }:a.$==1&&(a.$0==="View"&&($3=a.$0,true))?{
   $:2,
   $0:null
  }:a.$==1&&(a.$0==="ViewJS"&&($4=a.$0,true))?{
   $:3,
   $0:null
  }:a.$==1&&(a.$0==="Docs"&&($5=a.$0,true))?{
   $:4,
   $0:null
  }:a.$==1&&(a.$0==="Action"&&($6=a.$0,true))?{
   $:5,
   $0:null
  }:{
   $:6,
   $0:null
  };
 };
 LayoutEngineModule.PlugIn=function(a)
 {
  var $1,$2,$3,$4,$5,$6;
  return a.$==1&&(a.$0==="PlugIn"&&($1=a.$0,true))?{
   $:0,
   $0:null
  }:a.$==1&&(a.$0==="Button"&&($2=a.$0,true))?{
   $:1,
   $0:null
  }:a.$==1&&(a.$0==="input"&&($3=a.$0,true))?{
   $:2,
   $0:null
  }:a.$==1&&(a.$0==="textarea"&&($4=a.$0,true))?{
   $:3,
   $0:null
  }:a.$==1&&(a.$0==="select"&&($5=a.$0,true))?{
   $:4,
   $0:null
  }:a.$==1&&(a.$0==="Actions"&&($6=a.$0,true))?{
   $:5,
   $0:null
  }:{
   $:6,
   $0:null
  };
 };
 LayoutEngineModule.Vertical=function(a)
 {
  var $1,$2,$3,$4,$5,a$1;
  return a.$==1&&(a.$0==="vertical"&&($1=a.$0,true))?{
   $:0,
   $0:null
  }:a.$==1&&(a.$0==="horizontal"&&($2=a.$0,true))?{
   $:1,
   $0:null
  }:a.$==1&&(a.$0==="layout"&&($3=a.$0,true))?{
   $:2,
   $0:null
  }:a.$==1&&(a.$0==="grid"&&($4=a.$0,true))?{
   $:3,
   $0:null
  }:a.$==1&&(a.$0==="template"&&($5=a.$0,true))?{
   $:4,
   $0:null
  }:(a$1=LayoutEngineModule.Identifier(a),a$1!=null&&a$1.$==1?{
   $:5,
   $0:a$1.$0
  }:{
   $:6,
   $0:null
  });
 };
 LayoutEngineModule.I=function(a)
 {
  var a$1;
  a$1=LayoutEngineModule.Identifier(a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:a$1.$0
  }:null;
 };
 LayoutEngineModule.Identifier=function(a)
 {
  var $1,a$1,t;
  return a.$==1&&(a$1=LibraryJS.REGEX$1("^[$a-zA-Z_][0-9a-zA-Z_\\.\\-$]*$","",a.$0),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($1=Arrays.get(a$1.$0,0),true)))?{
   $:1,
   $0:$1
  }:null;
 };
 LayoutEngineModule.S=function(a)
 {
  return a.$==1?a.$0:a.$0;
 };
 P$1.run=function(pin,p)
 {
  return AppFramework.run(pin,p.r);
 };
 NewLY.addNewLayoutAct=function(name,layout)
 {
  var x;
  NewLY.addLayout(!Unchecked.Equals(name,null)?name:"Lyt_"+Strings.Replace(Global.String(Guid.NewGuid()),"-",""),(x=!Unchecked.Equals(layout,null)&&!Unchecked.Equals(name,null)?layout:"\r\n                                        perc  Var \"50\"\r\n                                        perc2 Var \"50\"\r\n                                        gap  Var \"5px\"\r\n            \r\n                                        Ask1 div \"background:lightblue; height:100%\"\r\n                                        : Doc AF.InputLabel \"placeholder=Type percentage here...\" \"Percentage (%):\" perc\r\n            \r\n                                        Ask2a div \"background:pink; height:100%\"\r\n                                        : Doc AF.InputLabel \"placeholder=Type percentage here...\" \"Percentage (%):\" perc2\r\n            \r\n                                        Ask2b div \"background:lightgreen; height:100%\"\r\n                                        : Doc AF.InputLabel \"placeholder=Type gap here...\" \"Gap:\" gap\r\n            \r\n                                        dragSplitter  Action AF.DragSplitter \"@{PlugInName}.perc\"\r\n                                        dragSplitter2 Action AF.DragSplitter \"@{PlugInName}.perc2\"\r\n            \r\n                                        Ask2 template HSplitter1 \"height:100%\" \"gap:gap\" \"doc1: Ask2a; doc2:Ask2b\" \"perc:perc2\" \"MouseDown:dragSplitter2\"\r\n            \r\n                                        main div \"\"\r\n                                        :    template VSplitter1  \"height:100%\" \"gap:gap\" \"doc1: Ask1 ; doc2:Ask2 \" \"perc:perc \" \"MouseDown:dragSplitter \"\r\n            \r\n                                        split horizontal 0-50-100 AppFramework.AppFwkClient main\r\n                                    ",(String.unindentStr())(x)));
 };
 NewLY.addLayout=function(name,content)
 {
  NewLY.addNewLayout(LayoutEngineModule.newLyt(new PlugInName({
   $:0,
   $0:name
  }),content));
 };
 NewLY.addNewLayout=function(lyt)
 {
  var parseW,l,errorsW,f,defsW,f$1,g,entries,g$1,l$1;
  function c(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0
   }:null;
  }
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
  function c$1(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  }
  function f$2(s)
  {
   return Seq$1.append(entries,s);
  }
  parseW=View$1.Map((l=lyt.lytName,function(t)
  {
   return LayoutEngineModule.parseEntries(l,t);
  }),lyt.lytDefinition.get_View());
  errorsW=View$1.Map((f=function(s)
  {
   return Seq$1.choose(c,s);
  },function(x)
  {
   return g$2(f(x));
  }),parseW);
  defsW=View$1.Map((f$1=function(s)
  {
   return Seq$1.choose(c$1,s);
  },(g=NewLY.generateEntries(lyt.lytName),function(x)
  {
   return g(f$1(x));
  })),parseW);
  entries=List.ofArray([{
   $:0,
   $0:AppFramework.newVar(new PlgElemName({
    $:0,
    $0:"Layout"
   }),lyt.lytDefinition)
  },{
   $:1,
   $0:AppFramework.newViw(new PlgElemName({
    $:0,
    $0:"ParseMsgs"
   }),errorsW)
  }]);
  View$1.Sink((g$1=(l$1=lyt.lytName,function(e)
  {
   LayoutEngineModule.refreshEntries(l$1,e);
  }),function(x)
  {
   return g$1(f$2(x));
  }),defsW);
 };
 NewLY.generateEntries=function(lytN)
 {
  function c($1,$2)
  {
   var x,x$1,x$2,x$3,x$4,x$5,x$6,x$7,x$8,x$9,x$10,x$11,x$12;
   return $2.$==0?$2.$0.$==1?{
    $:1,
    $0:{
     $:2,
     $0:(x=(NewLY.defButtonM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2]),AppFramework.newDoc0(new PlgElemName({
      $:0,
      $0:$1
     }),x))
    }
   }:$2.$0.$==2?{
    $:1,
    $0:{
     $:2,
     $0:(x$1=(NewLY.defInputM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]),AppFramework.newDoc0(new PlgElemName({
      $:0,
      $0:$1
     }),x$1))
    }
   }:$2.$0.$==3?{
    $:1,
    $0:{
     $:2,
     $0:(x$2=(NewLY.defTextAreaM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]),AppFramework.newDoc0(new PlgElemName({
      $:0,
      $0:$1
     }),x$2))
    }
   }:$2.$0.$==5?{
    $:1,
    $0:{
     $:2,
     $0:(x$3=(NewLY.defConcatM())([lytN,$1,$2.$0.$0.$0]),AppFramework.newDoc0(new PlgElemName({
      $:0,
      $0:$1
     }),x$3))
    }
   }:$2.$0.$==6?{
    $:1,
    $0:{
     $:2,
     $0:(x$4=(NewLY.defElementM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2]),AppFramework.newDoc0(new PlgElemName({
      $:0,
      $0:$1
     }),x$4))
    }
   }:$2.$0.$==4?{
    $:1,
    $0:{
     $:2,
     $0:(x$5=(NewLY.defDocFM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]),AppFramework.newDocL(new PlgElemName({
      $:0,
      $0:$1
     }),x$5))
    }
   }:$2.$0.$==7?{
    $:1,
    $0:{
     $:2,
     $0:(x$6=(NewLY.defTemplateM())([lytN,$1,$2.$0.$0]),AppFramework.newDoc0(new PlgElemName({
      $:0,
      $0:$1
     }),x$6))
    }
   }:{
    $:1,
    $0:{
     $:2,
     $0:(x$7=(NewLY.defSplitterM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2,$2.$0.$0.$3]),AppFramework.newDoc0(new PlgElemName({
      $:0,
      $0:$1
     }),x$7))
    }
   }:$2.$==1?{
    $:1,
    $0:{
     $:3,
     $0:(x$8=(NewLY.defActionM())([lytN,$1,$2.$0.$0,$2.$0.$1]),AppFramework.newActF(new PlgElemName({
      $:0,
      $0:$1
     }),x$8))
    }
   }:$2.$==2?{
    $:1,
    $0:{
     $:3,
     $0:(x$9=(NewLY.defActionsM())([lytN,$1,$2.$0.$0]),AppFramework.newActF(new PlgElemName({
      $:0,
      $0:$1
     }),x$9))
    }
   }:$2.$==4?{
    $:1,
    $0:{
     $:1,
     $0:(x$10=(NewLY.defViewM())([lytN,$1,$2.$0.$0]),AppFramework.newViw(new PlgElemName({
      $:0,
      $0:$1
     }),x$10))
    }
   }:$2.$==5?{
    $:1,
    $0:{
     $:1,
     $0:(x$11=(NewLY.defViewJSM())([lytN,$1,$2.$0.$0]),AppFramework.newViw(new PlgElemName({
      $:0,
      $0:$1
     }),x$11))
    }
   }:$2.$==7?null:$2.$==6?null:{
    $:1,
    $0:{
     $:0,
     $0:(x$12=NewLY.defVarM(lytN,$1,$2.$0.$0),AppFramework.newVar(new PlgElemName({
      $:0,
      $0:$1
     }),x$12))
    }
   };
  }
  return function(s)
  {
   return Seq$1.choose(function($1)
   {
    return c($1[0],$1[1]);
   },s);
  };
 };
 NewLY.defTemplateM=function()
 {
  SC$1.$cctor();
  return SC$1.defTemplateM;
 };
 NewLY.defSplitterM=function()
 {
  SC$1.$cctor();
  return SC$1.defSplitterM;
 };
 NewLY.defViewJSM=function()
 {
  SC$1.$cctor();
  return SC$1.defViewJSM;
 };
 NewLY.defViewM=function()
 {
  SC$1.$cctor();
  return SC$1.defViewM;
 };
 NewLY.defConcatM=function()
 {
  SC$1.$cctor();
  return SC$1.defConcatM;
 };
 NewLY.defElementM=function()
 {
  SC$1.$cctor();
  return SC$1.defElementM;
 };
 NewLY.defTextAreaM=function()
 {
  SC$1.$cctor();
  return SC$1.defTextAreaM;
 };
 NewLY.defInputM=function()
 {
  SC$1.$cctor();
  return SC$1.defInputM;
 };
 NewLY.defButtonM=function()
 {
  SC$1.$cctor();
  return SC$1.defButtonM;
 };
 NewLY.defActionsM=function()
 {
  SC$1.$cctor();
  return SC$1.defActionsM;
 };
 NewLY.defActionM=function()
 {
  SC$1.$cctor();
  return SC$1.defActionM;
 };
 NewLY.defDocFM=function()
 {
  SC$1.$cctor();
  return SC$1.defDocFM;
 };
 NewLY.defVarM=function(l,n,i)
 {
  var v;
  v=(NewLY.defVarM0())([l,n,NewLY.initVal()]);
  v.Get()===NewLY.initVal()?v.Set(i):void 0;
  return v;
 };
 NewLY.defVarM0=function()
 {
  SC$1.$cctor();
  return SC$1.defVarM0;
 };
 NewLY.initVal=function()
 {
  SC$1.$cctor();
  return SC$1.initVal;
 };
 NewLY.defTemplate=function(lytN,n,tmpDef)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.nodeRefToDocD(),function(a)
   {
    return b.Bind(NewLY.varRefToVarD(),function(a$1)
    {
     return b.Bind(AppFramework.extractTextD(),function(a$2)
     {
      return b.Bind(AppFramework.extractAtsD(),function(a$3)
      {
       return b.Bind(NewLY.actRefToActD(),function(a$4)
       {
        return b.Bind(NewLY.getParam2D(),function(a$5)
        {
         return b.Return(AppFramework.makeAViewDoc0(function()
         {
          var attrs,x,s;
          function eventAct(act,el,ev)
          {
           return AppFramework.callFunction(el,ev,act.actFunction);
          }
          try
          {
           attrs=a$3(a$5(tmpDef.attrs));
           Templates.LoadLocalTemplates("local");
           x=(Seq$1.isEmpty(attrs)?Global.id:(s=[{
            $:3,
            $0:"attrs",
            $1:AttrProxy.Concat(attrs)
           }],function(s$1)
           {
            return Seq$1.append(s,s$1);
           }))(Seq$1.delay(function()
           {
            function m(nm,vr)
            {
             return{
              $:8,
              $0:nm.toLowerCase(),
              $1:a$1(vr)
             };
            }
            return Seq$1.append(Seq$1.map(function($1)
            {
             return m($1[0],$1[1]);
            },tmpDef.vars),Seq$1.delay(function()
            {
             function m$1(nm,wr)
             {
              return{
               $:2,
               $0:nm.toLowerCase(),
               $1:a$2(a$5(wr))
              };
             }
             return Seq$1.append(Seq$1.map(function($1)
             {
              return m$1($1[0],$1[1]);
             },tmpDef.views),Seq$1.delay(function()
             {
              function m$2(nm,nr)
              {
               return{
                $:0,
                $0:nm.toLowerCase(),
                $1:a({
                 $:1,
                 $0:nr
                })
               };
              }
              return Seq$1.append(Seq$1.map(function($1)
              {
               return m$2($1[0],$1[1]);
              },tmpDef.docs),Seq$1.delay(function()
              {
               function m$3(nm,ar)
               {
                var $1;
                return{
                 $:4,
                 $0:nm.toLowerCase(),
                 $1:($1=a$4(ar),(Runtime.Curried3(eventAct))($1))
                };
               }
               return Seq$1.map(function($1)
               {
                return m$3($1[0],$1[1]);
               },tmpDef.actions);
              }));
             }));
            }));
           }));
           return Templates.NamedTemplate("local",{
            $:1,
            $0:tmpDef.tmpName.toLowerCase()
           },x);
          }
          catch(e)
          {
           return Doc.TextNode(e.message);
          }
         }));
        });
       });
      });
     });
    });
   });
  })));
 };
 NewLY.defSplitter=function(lytN,n,v,m,a,a$1)
 {
  var l,r,b;
  l=a.$0;
  r=a$1.$0;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(Extract0.getDocFromTextTypesD(),function(a$2)
   {
    return b.Return(function()
    {
     function getDoc(d)
     {
      return AppFramework.makeAViewDoc(function()
      {
       return a$2(List.ofArray([NewLY.itemRefToTextType(d)]));
      });
     }
     return m.$==1?LayoutEngineModule.variableSplitter(v,m.$0,m.$1,m.$2,getDoc(l),getDoc(r)):LayoutEngineModule.fixedSplitter(v,m.$0,m.$1,getDoc(l),getDoc(r));
    });
   });
  })));
 };
 NewLY.defButton=function(lytN,n,ac,attrs,tx)
 {
  return AppFramework.makeAViewDoc0(function()
  {
   return AppFramework.errDocf(function($1)
   {
    return $1("Button deprecated use button \"click=@{Action}\"");
   });
  });
 };
 NewLY.defDocF=function(lytN,n,a,ds)
 {
  var dc,b;
  dc=a.$0;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.currentPlugInNameD(),function(a$1)
   {
    return b.Bind(NewLY.getParam2D(),function(a$2)
    {
     var p,x,lyt,elem;
     function passParm($1,$2)
     {
      var a$3,f1;
      return $1.$==0?$2.$==0?$1:{
       $:0,
       $0:$1.$0
      }:$1.$==2?$2.$==1?(a$3=$2.$0,(f1=$1.$0,{
       $:1,
       $0:function()
       {
        return f1(a$2(a$3));
       }
      })):$1:$1.$==3?$2.$==1?passParm({
       $:2,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2
      },$2.$1):$1:$1.$==4?$2.$==1?passParm({
       $:3,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2,
       $2:$1.$3
      },$2.$1):$1:$1.$==5?$2.$==1?passParm({
       $:4,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2,
       $2:$1.$3,
       $3:$1.$4
      },$2.$1):$1:$1.$==6?$2.$==1?passParm({
       $:5,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2,
       $2:$1.$3,
       $3:$1.$4,
       $4:$1.$5
      },$2.$1):$1:{
       $:0,
       $0:$1.$0()
      };
     }
     p=(x=NewLY.itemRefToString(dc),(AppFramework.splitName(a$1))(x));
     lyt=p[0];
     elem=p[1];
     return b.Return(Lazy.Create(function()
     {
      var o,o$1;
      o=(o$1=AppFramework.tryGetDoc(lyt,elem),o$1==null?null:{
       $:1,
       $0:passParm(o$1.$0.docDoc.f(),ds)
      });
      return o==null?{
       $:0,
       $0:AppFramework.errDoc((function($1)
       {
        return function($2)
        {
         return $1("Missing doc: "+FSharpStation_GeneratedPrintf.p$1($2));
        };
       }(Global.id))(dc))
      }:o.$0;
     }));
    });
   });
  })));
 };
 NewLY.defConcat=function(lytN,n,docs)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.nodeRefToDocD(),function(a)
   {
    return b.Return(AppFramework.makeAViewDoc0(function()
    {
     return Doc.Concat(Seq$1.map(a,docs));
    }));
   });
  })));
 };
 NewLY.defElement=function(lytN,n,elem,attrs,docs)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.nodeRefToDocD(),function(a)
   {
    return b.Bind(AppFramework.extractAtsD(),function(a$1)
    {
     return b.Bind(NewLY.getParam2D(),function(a$2)
     {
      return b.Return(AppFramework.makeAViewDoc0(function()
      {
       try
       {
        return Doc.Element(elem,a$1(a$2(attrs)),Seq$1.map(a,docs));
       }
       catch(e)
       {
        return Doc.TextNode(e.message);
       }
      }));
     });
    });
   });
  })));
 };
 NewLY.defTextArea=function(lytN,n,v,attrs)
 {
  return AppFramework.makeAViewDoc0(function()
  {
   return AppFramework.errDocf(function($1)
   {
    return $1("TextArea deprecated use AF.TextArea");
   });
  });
 };
 NewLY.defInput=function(lytN,n,v,attrs)
 {
  return AppFramework.makeAViewDoc0(function()
  {
   return AppFramework.errDocf(function($1)
   {
    return $1("input deprecated use AF.Input");
   });
  });
 };
 NewLY.defViewJS=function(lytN,n,ps)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.currentPlugInNameD(),function()
   {
    return b.Bind(NewLY.getParamD(),function(a)
    {
     return b.Return(View$1.Bind(function()
     {
      try
      {
       return View$1.Map(function(ar)
       {
        try
        {
         return!Unchecked.Equals(ar,null)&&ar.length===0?"No JS function specified":!Unchecked.Equals(ar,null)&&ar.length===1?Global.String(Global["eval"](Arrays.get(ar,0))):Global.String(Global["eval"](Arrays.get(ar,0)).apply(null,Slice.array(ar,{
          $:1,
          $0:1
         },null)));
        }
        catch(e)
        {
         return e.message;
        }
       },View$1.Map(Arrays.ofSeq,View.traverseSeq(a,ps)));
      }
      catch(e)
      {
       return View$1.Const(e.message);
      }
     },AppFramework.baseView()));
    });
   });
  })));
 };
 NewLY.defView=function(lytN,n,ps)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.currentPlugInNameD(),function()
   {
    return b.Bind(NewLY.getParam2D(),function(a)
    {
     return b.Bind(AppFramework.extractTextD(),function(a$1)
     {
      return b.Return(View$1.Bind(function()
      {
       function g(s)
       {
        return Strings.concat("",s);
       }
       return View$1.Map(function(x)
       {
        return g(Arrays.ofSeq(x));
       },View.traverseSeq(function(x)
       {
        return a$1(a(x));
       },ps));
      },AppFramework.baseView()));
     });
    });
   });
  })));
 };
 NewLY.defActions=function(lytN,n,acs)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.currentPlugInNameD(),function(a)
   {
    return b.Bind(NewLY.getParamTextD(),function()
    {
     return b.Return({
      $:0,
      $0:function()
      {
       Seq$1.iter(function(a$1)
       {
        var r,o,o$1,t;
        r=NewLY.itemRefToString(a$1.$0);
        AppFramework.callFunction(null,null,(o=(o$1=(t=(AppFramework.splitName(a))(r),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
         $:1,
         $0:o$1.$0.actFunction
        }),o==null?{
         $:0,
         $0:function()
         {
          ((function($1)
          {
           return function($2)
           {
            return $1("Action Not Found "+Utils.toSafe($2));
           };
          }(function(s)
          {
           console.log(s);
          }))(r));
         }
        }:o.$0));
       },acs);
      }
     });
    });
   });
  })));
 };
 NewLY.defAction=function(lytN,n,a,ps)
 {
  var ac,b;
  ac=a.$0;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.currentPlugInNameD(),function(a$1)
   {
    return b.Bind(NewLY.getParamTextD(),function(a$2)
    {
     var o,t,$1,$2,r,o$1,act,$3,f,t1,f$1,t1$1,t2,f$2,t1$2;
     r=NewLY.itemRefToString(ac);
     o$1=(t=(AppFramework.splitName(a$1))(r),AppFramework.tryGetAct(t[0],t[1]));
     if(o$1==null)
      o=null;
     else
      {
       act=o$1.$0;
       if(ps.$===0)
        $1=act.actFunction;
       else
        {
         $3=act.actFunction;
         switch($3.$==1?ps.$==1?ps.$1.$==0?($2=[$3.$0,ps.$0],0):3:3:$3.$==2?ps.$==1?ps.$1.$==0?($2=[$3.$0,$3.$2,ps.$0],2):ps.$1.$1.$==0?($2=[$3.$0,ps.$0,ps.$1.$0],1):3:3:3)
         {
          case 0:
           $1=(f=$2[0],(t1=$2[1],{
            $:0,
            $0:function()
            {
             (a$2(t1))(f);
            }
           }));
           break;
          case 1:
           $1=(f$1=$2[0],(t1$1=$2[1],(t2=$2[2],{
            $:0,
            $0:function()
            {
             (a$2(t1$1))(function(p1)
             {
              (a$2(t2))(f$1(p1));
             });
            }
           })));
           break;
          case 2:
           $1=(f$2=$2[0],(t1$2=$2[2],{
            $:1,
            $0:function(p2)
            {
             (a$2(t1$2))(function(p1)
             {
              (f$2(p1))(p2);
             });
            },
            $1:$2[1]
           }));
           break;
          case 3:
           $1={
            $:0,
            $0:function()
            {
             ((((Runtime.Curried(function($4,$5,$6,$7)
             {
              return $4("Parameters do not coincide for Action "+Utils.toSafe($5)+" "+Utils.printList(function($8)
              {
               return FSharpStation_GeneratedPrintf.p$17($8);
              },$6)+" "+GeneratedPrintf.p$2($7));
             },4))(function(s)
             {
              console.log(s);
             }))(r))(ps))(act);
            }
           };
           break;
         }
        }
       o={
        $:1,
        $0:$1
       };
      }
     return b.Return(o==null?{
      $:0,
      $0:function()
      {
       ((function($4)
       {
        return function($5)
        {
         return $4("Action Not Found "+Utils.toSafe($5));
        };
       }(function(s)
       {
        console.log(s);
       }))(r));
      }
     }:o.$0);
    });
   });
  })));
 };
 NewLY.defVar=function(lytN,n,v)
 {
  return Var$1.Create$1(v);
 };
 NewLY.getParamTextD=function()
 {
  SC$1.$cctor();
  return SC$1.getParamTextD;
 };
 NewLY.getParam2D=function()
 {
  SC$1.$cctor();
  return SC$1.getParam2D;
 };
 NewLY.itemRefToAbsolute=function(lyt)
 {
  function f(a)
  {
   return a.$==1?[a.$0,a.$1]:[lyt,a.$0];
  }
  function g(a,b)
  {
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Utils.toSafe($2)+"."+Utils.toSafe($3));
   }))(Global.id))(a))(b);
  }
  return function(x)
  {
   return g.apply(null,f(x));
  };
 };
 NewLY.getParamD=function()
 {
  SC$1.$cctor();
  return SC$1.getParamD;
 };
 NewLY.actRefToActD=function()
 {
  SC$1.$cctor();
  return SC$1.actRefToActD;
 };
 NewLY.varRefToVarD=function()
 {
  SC$1.$cctor();
  return SC$1.varRefToVarD;
 };
 NewLY.nodeRefToDocD=function()
 {
  SC$1.$cctor();
  return SC$1.nodeRefToDocD;
 };
 NewLY.ActRVs=function(a)
 {
  return List.ofArray([{
   $:1,
   $0:{
    $:0,
    $0:a.$0
   }
  }]);
 };
 NewLY.textValToTextType=function(a)
 {
  var $1;
  return(a.$==3?($1=a.$0.$0,false):a.$==4?($1=a.$0.$0,false):a.$==1?($1=a.$0.$0,false):a.$==2?($1=a.$0.$0,false):true)?{
   $:0,
   $0:a.$0
  }:NewLY.itemRefToTextType($1);
 };
 NewLY.itemRefToString=function(a)
 {
  return a.$==1?(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1(Utils.toSafe($2)+"."+Utils.toSafe($3));
  }))(Global.id))(a.$0))(a.$1):a.$0;
 };
 NewLY.itemRefToTextType=function(a)
 {
  return a.$==1?{
   $:1,
   $0:(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Utils.toSafe($2)+"."+Utils.toSafe($3));
   }))(Global.id))(a.$0))(a.$1)
  }:{
   $:1,
   $0:a.$0
  };
 };
 NewLY.currentPlugInNameD=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInNameD$1;
 };
 NewLY.currentPlugInNameDef=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInNameDef$1;
 };
 NewLY.pb=function()
 {
  SC$1.$cctor();
  return SC$1.pb;
 };
 NewLY.pa=function()
 {
  SC$1.$cctor();
  return SC$1.pa;
 };
 NewLY.aV=function()
 {
  SC$1.$cctor();
  return SC$1.aV;
 };
 NewLY.concat=function(a,b)
 {
  return(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("Concat("+Global.String($2)+", "+$3.toFixed(6)+")");
  }))(Global.id))(a))(b);
 };
 LibraryJS.rexEmail=function()
 {
  SC$1.$cctor();
  return SC$1.rexEmail;
 };
 LibraryJS.rexGuid=function()
 {
  SC$1.$cctor();
  return SC$1.rexGuid;
 };
 LibraryJS.REGEX$1=function(expr,opt,value)
 {
  var m;
  return value===null?null:(m=(new Global.String(value)).match(new Global.RegExp(expr,opt)),Unchecked.Equals(m,null)?null:!Unchecked.Equals(m,null)&&m.length===0?null:{
   $:1,
   $0:m
  });
 };
 FsiAgent.extractConfig=function(workDir,a)
 {
  var fsCode,x;
  fsCode=a.$0;
  return{
   $:0,
   $0:FsCodeModule.getSourceDir(workDir,String.splitByChar("\n",fsCode)),
   $1:(x=new FSharpSet.New(String.splitByChar(" ",FsCodeModule.extractDefines({
    $:0,
    $0:fsCode
   }))),new FSharpSet.New$1(BalancedTree.OfSeq(Seq$1.append(new FSharpSet.New(List.ofArray([" --nologo","--quiet "])),x))))
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
       $:4,
       $0:{
        $:6,
        $0:(function($1)
        {
         return function($2)
         {
          return $1(FSharpStation_GeneratedPrintf.p$33($2));
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
       $:4,
       $0:{
        $:6,
        $0:(function($1)
        {
         return function($2)
         {
          return $1(FSharpStation_GeneratedPrintf.p$33($2));
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
       $0:(FSharpStation_JsonDecoder.j$8())(JSON.parse(a.payload))
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
     return b.Bind(a.msgType.$==3?(bm=(FSharpStation_JsonDecoder.j$8())(JSON.parse(a.payload)),bm.$===0?{
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
         return $4("Did not receive reply in "+Global.String($5)+" seconds for Message: "+GeneratedPrintf.p$3($6));
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
           return $1("msg: "+FSharpStation_GeneratedPrintf.p$37($2)+" \nexn:"+Utils.prettyPrint($3));
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
   var $this,x;
   $this=this;
   x=this.serverO;
   (Option.iter(function(server)
   {
    server.FsRoot_Library2_WebSockets_IServer$Close();
    $this.serverO=null;
   }))(x);
  },
  reply:function(msg)
  {
   var $this,x;
   $this=this;
   x=this.serverO;
   (Option.iter(function(server)
   {
    server.FsRoot_Library2_WebSockets_IServer$Post(WebSockets.destination(msg.from,WebSockets.from($this.clientAddress,msg)));
   }))(x);
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
 ParseRequest.New=function(FileName,IsAsync,Lines,Version)
 {
  return{
   FileName:FileName,
   IsAsync:IsAsync,
   Lines:Lines,
   Version:Version
  };
 };
 DeclarationsRequest.New=function(FileName,Lines,Version)
 {
  return{
   FileName:FileName,
   Lines:Lines,
   Version:Version
  };
 };
 CompletionRequest.New=function(FileName,SourceLine,Line,Column,Filter,IncludeKeywords)
 {
  return{
   FileName:FileName,
   SourceLine:SourceLine,
   Line:Line,
   Column:Column,
   Filter:Filter,
   IncludeKeywords:IncludeKeywords
  };
 };
 PositionRequest.New=function(FileName,Line,Column,Filter)
 {
  return{
   FileName:FileName,
   Line:Line,
   Column:Column,
   Filter:Filter
  };
 };
 ProjectRequest.New=function(FileName)
 {
  return{
   FileName:FileName
  };
 };
 LintRequest.New=function(FileName)
 {
  return{
   FileName:FileName
  };
 };
 HelptextRequest.New=function(Symbol)
 {
  return{
   Symbol:Symbol
  };
 };
 WorkspacePeekRequest.New=function(Directory,Deep,ExcludedDirs)
 {
  return{
   Directory:Directory,
   Deep:Deep,
   ExcludedDirs:ExcludedDirs
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
   $0:PositionRequest.New(file,lin,col,filter)
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
   $0:PositionRequest.New(file,lin,col,filter)
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
   $0:HelptextRequest.New(symbol)
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
   $0:DeclarationsRequest.New(file,code,ver)
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
   $0:PositionRequest.New(file,lin,col,filter)
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
   $0:PositionRequest.New(file,lin,col,filter)
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
   $0:CompletionRequest.New(file,tx,ln,col,filter,kw)
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
   $0:PositionRequest.New(file,lin,col,filter)
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
   $0:PositionRequest.New(file,lin,col,filter)
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
   $0:PositionRequest.New(file,lin,col,filter)
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
   $0:ParseRequest.New(file,asy,code,ver)
  });
 };
 Calls.FSAutocompleteCall=function(cmd,f,req)
 {
  var b;
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.Bind$1((new AjaxRemotingProvider.New()).Async("FSharpStation:FsRoot.Library2+FsAutoComplete.FSAutocompleteCall0:-1842881046",[cmd,req]),function(a)
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
      $:4,
      $0:others
     });
    },Seq$1.tryHead(Seq$1.choose(f,p[0]))),function(a$1)
    {
     return b.Return([a$1,others]);
    });
   });
  }));
 };
 FStation.appendMsgs=function(msg)
 {
  FStation.appendText(FStation.outputMsgs(),msg);
 };
 FStation.appendText=function(_var,msg)
 {
  var $1;
  _var.Set(($1=_var.Get(),$1===""?msg:msg===""?$1:$1+"\n"+msg));
 };
 FStation.outputMsgs=function()
 {
  SC$1.$cctor();
  return SC$1.outputMsgs;
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
 Snippets.setProperty=function(snp,prop,v)
 {
  function f(t)
  {
   return t[0];
  }
  function g(y)
  {
   return prop!==y;
  }
  if(Seq$1.contains([prop,v],snp.snpProperties))
   ;
  else
   {
    Snippets.setSnippet(Snippet.New(snp.snpId,snp.snpName,snp.snpContent,snp.snpParentIdO,snp.snpPredIds,Arrays.ofSeq(Seq$1.append(Seq$1.filter(function(x)
    {
     return g(f(x));
    },snp.snpProperties),List.ofArray([[prop,v]]))),snp.snpModified));
   }
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
 Snippets.newSnippet=function()
 {
  var snp;
  snp=SnippetModule.New("","",null);
  Snippets.iterReader(Operators$3.op_BarGreaterGreater(Snippets.addSnippetRm(snp),function()
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
  return Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(FusionM.insertO((o=Snippets.currentSnippetIdOV().Get(),o==null?null:{
   $:1,
   $0:SnippetModule.snippetORm(o.$0)
  })),function(o$1)
  {
   return o$1==null?null:Global.id(o$1.$0);
  }),function(a)
  {
   return a!=null&&a.$==1?TreeReader.moveToSibling2(true,snp.snpId,a.$0.snpId,hier):Operators$3.rtn(hier);
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
  Snippets.iterReader(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(FusionM.sequenceSeq(Seq$1.map(function(snp)
  {
   return Operators$3.op_BarGreaterGreater(SnippetModule.parentORm(snp),function(a)
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
  Snippets.iterReader((b=FusionM.fusion(),b.Run(b.Delay(function()
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
  Snippets.iterReader(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(TreeReader.moveToSibling2(false,fnid,tnid,Snippets.hierarchy().Get()),Arrays.ofSeq),function(a)
  {
   Snippets.hierarchy().Set(a);
  }));
 };
 Snippets.indentOut=function()
 {
  var x;
  x=Snippets.currentSnippetIdOV().Get();
  (Option.iter(function(snpId)
  {
   var x$1;
   Snippets.iterReader(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater((x$1=Snippets.hierarchy().Get(),TreeReader.outdentNode(Snippets.treenode(snpId),x$1)),Arrays.ofSeq),function(a)
   {
    Snippets.hierarchy().Set(a);
   }));
  }))(x);
 };
 Snippets.indentIn=function()
 {
  var x;
  x=Snippets.currentSnippetIdOV().Get();
  (Option.iter(function(snpId)
  {
   var x$1;
   Snippets.iterReader(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater((x$1=Snippets.hierarchy().Get(),TreeReader.indentNode(Snippets.treenode(snpId),x$1)),Arrays.ofSeq),function(a)
   {
    Snippets.hierarchy().Set(a);
   }));
  }))(x);
 };
 Snippets.deleteCurrentSnippet=function()
 {
  var x;
  x=Snippets.currentSnippetIdOV().Get();
  (Option.iter(function(snpId)
  {
   var x$1;
   Snippets.iterReader(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater((x$1=Snippets.hierarchy().Get(),TreeReader.removeNodeOutdentChildren(Snippets.treenode(snpId),x$1)),Arrays.ofSeq),function(a)
   {
    Snippets.hierarchy().Set(a);
   }),function()
   {
    Snippets.snippets().RemoveByKey(snpId);
   }));
  }))(x);
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
  return Operators$3.op_GreaterGreaterEquals(SnippetModule.childrenRm(snpId),function(chs)
  {
   return Seq$1.isEmpty(chs)?Operators$3.rtn(""):Operators$3.op_BarGreaterGreater(Snippets.treenode(snpId).isExpandedRm(),function(exp)
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
   return Snippet.New($1.snpId,$1.snpName,$1.snpContent,$1.snpParentIdO,$2,$1.snpProperties,$1.snpModified);
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
   },Operators$3.op_BarGreaterGreater(SnippetModule.uniquePredsRm(snp),function(s)
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
   },Operators$3.op_BarGreaterGreater(SnippetModule.uniquePredsRm(snp),function(s)
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
   return Operators$3.rtn(!Snippets.collapsedV().Get().Contains(snpId));
  },function()
  {
   return Operators$3.rtn(true);
  },function()
  {
   function m(snp)
   {
    return Snippets.treenode(snp.snpId);
   }
   return Operators$3.op_BarGreaterGreater(SnippetModule.childrenRm(snpId),function(s)
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
   return Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(SnippetModule.snippetORm(snpId),function(o)
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
   return Operators$3.op_BarGreaterGreater(Snippets.setChildrenRm(snpId,ch),function()
   {
    return Snippets.treenode(snpId);
   });
  });
 };
 Snippets.setChildrenRm=function(snpId,ch)
 {
  var b;
  b=FusionM.fusion();
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
    },s.snpPredIds,s.snpProperties,s.snpModified);
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
    return Snippet.New(s.snpId,s.snpName,s.snpContent,null,s.snpPredIds,s.snpProperties,s.snpModified);
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
 Snippets.currentLayoutJSDW=function()
 {
  SC$1.$cctor();
  return SC$1.currentLayoutJSDW;
 };
 Snippets.currentLayoutDW=function()
 {
  SC$1.$cctor();
  return SC$1.currentLayoutDW;
 };
 Snippets.currentPathW=function()
 {
  SC$1.$cctor();
  return SC$1.currentPathW;
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
   return $1<snp.snpModified;
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
   Snippets.snippets().Append(Snippet.New(snp.snpId,snp.snpName,snp.snpContent,snp.snpParentIdO,snp.snpPredIds,snp.snpProperties,Date.now()));
 };
 Snippets.setCurrentSnippetIdO=function(snpIdO)
 {
  (Option.iter(function(s)
  {
   Snippets.expandParents(s);
  }))(snpIdO);
  Snippets.currentSnippetIdOV().Set(snpIdO);
 };
 Snippets.expandParents=function(snpId)
 {
  Snippets.iterReader(Operators$3.op_BarGreaterGreater(SnippetModule.pathRm(snpId),function(path)
  {
   var a;
   a=FSharpSet.op_Subtraction(Snippets.collapsedV().Get(),new FSharpSet.New(path));
   Snippets.collapsedV().Set(a);
  }));
 };
 Snippets.runReader=function(handle,rm)
 {
  return Result.defaultWith(handle,Snippets.runReaderResult(rm));
 };
 Snippets.runReaderResult=function(rm)
 {
  return Result$1.Map(function(t)
  {
   return t[0];
  },FusionM.runReader(Snippets.snippetsColl(),rm));
 };
 Snippets.iterReader=function(rm)
 {
  FusionM.iterReader(function(e)
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
  return SnippetCollection.New(Snippets.generation().Get(),Seq$1.delay(function()
  {
   return(Snippets.snippets())["var"].Get();
  }),function(a)
  {
   return Snippets.snippets().TryFindByKey(a);
  },Snippets.predsCache,Snippets.reducCache,Snippets.prepCode);
 };
 Snippets.prepCode=function(snp)
 {
  return Snippets.prepAnyCode(snp.snpContent);
 };
 Snippets.prepAnyCode=function(cod)
 {
  return Strings.Replace(Strings.Replace(Strings.Replace(cod,"##"+"FSHARPSTATION_ID"+"##",FStation.id()),"##"+"FSHARPSTATION_ENDPOINT"+"##",self.location.href),"##"+"FSHOME"+"##",FStation.rootDir());
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
 RenderSnippets.snippets$8781$40=function(snpId)
 {
  return function(ev)
  {
   var x;
   ev.Event.preventDefault();
   x=DragDrop.getDragNIdO(snpId);
   (Option.iter(function(fr)
   {
    Snippets.moveNode(fr,snpId);
   }))(x);
  };
 };
 RenderSnippets.snippets$8780$40=function(snpId)
 {
  return function(ev)
  {
   if(DragDrop.getDragNIdO(snpId)!=null)
    ev.Event.preventDefault();
  };
 };
 RenderSnippets.snippets$8779$40=function(snpId)
 {
  return function(ev)
  {
   DragDrop.setDragNode(snpId);
   ev.Event.stopPropagation();
  };
 };
 RenderSnippets.snippets$8778$40=function(snpId)
 {
  return function()
  {
   Snippets.toggleCollapse(snpId);
  };
 };
 RenderSnippets.snippets$8777$40=function(snpId)
 {
  return function()
  {
   Snippets.togglePredecessor(snpId);
  };
 };
 RenderSnippets.snippets$8776$40=function(snpId)
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
 RenderSnippets.snippets$8775$40=function(snpId)
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
   var nameW,b,predW,errorW,x,f,s,c,b$1,t,t$1,t$2,t$3,t$4,A,s$1,t$5,P$2,p,i;
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
   }),(t$5=(P$2=Snippets.expandClassW(snpId),ProviderBuilder.Make().WithHole({
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
    $1:P$2
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
    var x$1;
    ev.Event.preventDefault();
    x$1=DragDrop.getDragNIdO(snpId);
    (Option.iter(function(fr)
    {
     Snippets.moveNode(fr,snpId);
    }))(x$1);
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
    try
    {
     e.scrollIntoViewIfNeeded();
    }
    catch(e$1)
    {
     ((function($1)
     {
      return function($2)
      {
       return $1(Utils.prettyPrint($2));
      };
     }(function(s$1)
     {
      console.log(s$1);
     }))(e$1));
    }
  },selW);
 };
 RenderProperties.render$8820$34=function()
 {
  return function()
  {
   RenderProperties.addProperty();
  };
 };
 RenderProperties.render=function()
 {
  var b,t,P$2,p,i;
  return(b=(t=(P$2=RenderProperties.properties(),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"properties",
   $1:P$2
  })),t.WithHole(Handler$1.EventQ2(t.k,"addproperty",function()
  {
   return t.i;
  },function()
  {
   RenderProperties.addProperty();
  }))),(p=Handler$1.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],FSharpStation_Templates.propertytable(p[0])),(b.i=i,i)))).get_Doc();
 };
 RenderProperties.properties$8813$33=function(i)
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
   return(Arrays.get(propsV.Get(),i))[1].length>1000?null:(Arrays.set(propsV.Get(),i,[(Arrays.get(propsV.Get(),i))[0],newVal]),propsV.Set(propsV.Get()));
  }
  propsV=Var$1.Lens(Snippets.currentSnippetV(),function($1)
  {
   return $1.snpProperties;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$1.snpName,$1.snpContent,$1.snpParentIdO,$1.snpPredIds,$2,$1.snpModified);
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
    var v;
    v=(Arrays.get($1,i))[1];
    return v.length>1000?(((Runtime.Curried3(function($2,$3,$4)
    {
     return $2(Utils.toSafe($3)+"...<"+Global.String($4)+" chars>");
    }))(Global.id))(Slice.string(v,{
     $:1,
     $0:0
    },{
     $:1,
     $0:100
    })))(v.length):v;
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
   return Arrays.ofSeq(Operators$7.range(0,Arrays.length($1)-1));
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
  },null)),i$1.snpModified)));
 };
 RenderProperties.addProperty=function()
 {
  var i;
  Snippets.currentSnippetV().Set((i=Snippets.currentSnippetV().Get(),Snippet.New(i.snpId,i.snpName,i.snpContent,i.snpParentIdO,i.snpPredIds,Snippets.currentSnippetV().Get().snpProperties.concat([["",""]]),i.snpModified)));
 };
 HoverProvider$1=Monaco$1.HoverProvider=Runtime.Class({
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
 },Obj,HoverProvider$1);
 HoverProvider$1.New=Runtime.Ctor(function(ed)
 {
  Obj.New.call(this);
 },HoverProvider$1);
 CompletionItemProvider$1=Monaco$1.CompletionItemProvider=Runtime.Class({
  resolveCompletionItem:function(item,token)
  {
   var b;
   function f(a)
   {
    return a.$==1?Operators$7.FailWith((function($1)
    {
     return function($2)
     {
      return $1(FSharpStation_GeneratedPrintf.p$38($2));
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
    return a.$==1?Operators$7.FailWith((function($1)
    {
     return function($2)
     {
      return $1(FSharpStation_GeneratedPrintf.p$38($2));
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
 },Obj,CompletionItemProvider$1);
 CompletionItemProvider$1.New=Runtime.Ctor(function(ed)
 {
  Obj.New.call(this);
 },CompletionItemProvider$1);
 DefinitionProvider$1=Monaco$1.DefinitionProvider=Runtime.Class({
  provideDefinition:function(model,pos,token)
  {
   var b;
   function f(a)
   {
    return a.$==1?Operators$7.FailWith((function($1)
    {
     return function($2)
     {
      return $1(FSharpStation_GeneratedPrintf.p$38($2));
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
 },Obj,DefinitionProvider$1);
 DefinitionProvider$1.New=Runtime.Ctor(function(ed)
 {
  Obj.New.call(this);
 },DefinitionProvider$1);
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
 Monaco$1.getSelection=function()
 {
  var m,o,ed,x;
  m=(o=Monaco$1.editorConfigO(),o==null?null:o.$0.editorO);
  return m!=null&&m.$==1?(ed=m.$0,(x=ed.getSelection(),ed.getModel().getValueInRange(x))):"";
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
 Monaco$1.editorDoc=function()
 {
  var b;
  return Doc.Async((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Monaco.loader(),function()
   {
    return Concurrency.Bind(Monaco$1.monacoNew(Var$1.Lens(Snippets.currentSnippetV(),function($1)
    {
     return $1.snpContent;
    },function($1,$2)
    {
     return Snippet.New($1.snpId,$1.snpName,$2,$1.snpParentIdO,$1.snpPredIds,$1.snpProperties,$1.snpModified);
    }),{
     $:1,
     $0:View$1.Map2(Monaco$1.transformAnnotations,Snippets.currentSnippetW(),FStation.annotationsV().get_View())
    },null,null),function(a)
    {
     Monaco$1.set_editorConfigO({
      $:1,
      $0:a
     });
     return Concurrency.Return(Monaco.render(a));
    });
   });
  })));
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
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,r,config,m,n;
   config=Monaco.newVar(_var);
   $9=config.editorO;
   $10=Pojo.newPojo([["fontSize",12],["lineHeight",14]]);
   m=Global.require("vs/editor/standalone/browser/standaloneServices");
   n=new m.StaticServices.codeEditorService._factory();
   n.openCodeEditor=Monaco$1.openCodeEditor;
   r=n;
   $15=["codeEditorService",r];
   $13=[$15,["textModelResolverService",Monaco$1.textModelResolverService()]];
   $11=Pojo.newPojo($13);
   $5=MonacoConfig.New(config["var"],config.onChange,config.onRender,$9,config.disabled,$10,$11);
   $3=Monaco.onRender(function(ed)
   {
    var _m,hp,cp,dp;
    function x(a$1,a$2,a$3)
    {
     return hp.provideHover(a$1,a$2,a$3);
    }
    function x$1(a$1,a$2,a$3,a$4)
    {
     return cp.provideCompletionItems(a$1,a$2,a$3,a$4);
    }
    function x$2(a$1,a$2)
    {
     return cp.resolveCompletionItem(a$1,a$2);
    }
    function x$3(a$1,a$2,a$3)
    {
     return dp.provideDefinition(a$1,a$2,a$3);
    }
    function a(ms)
    {
     var _m$1;
     _m$1=ed.getModel();
     self.monaco.editor.setModelMarkers(_m$1,"annotations",ms);
    }
    _m=ed.getModel();
    self.monaco.editor.setModelLanguage(_m,"fsharp");
    self.monaco.editor.setTheme("vs");
    hp=new HoverProvider$1.New(ed);
    cp=new CompletionItemProvider$1.New(ed);
    dp=new DefinitionProvider$1.New(ed);
    Library.print(function($16)
    {
     return x($16[0],$16[1],$16[2]);
    });
    Library.print(function($16)
    {
     return x$1($16[0],$16[1],$16[2],$16[3]);
    });
    Library.print(function($16)
    {
     return x$2($16[0],$16[1]);
    });
    Library.print(function($16)
    {
     return x$3($16[0],$16[1],$16[2]);
    });
    self.monaco.languages.registerHoverProvider("fsharp",hp);
    self.monaco.languages.registerCompletionItemProvider("fsharp",cp);
    self.monaco.languages.registerDefinitionProvider("fsharp",dp);
    (Option.iter(function(a$1)
    {
     View$1.Sink(a,a$1);
    }))(annotationsWO);
   },$5);
   return Concurrency.Return($3);
  });
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
   Snippets.setCurrentSnippetIdO({
    $:1,
    $0:codeId
   });
   return Concurrency.Bind(Concurrency.Sleep(200),function()
   {
    ed.focus();
    ed.setPosition(Position$1.New(col,line));
    ed.revealPositionInCenter(Position$1.New(col,line));
    return Concurrency.Zero();
   });
  });
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
    $0:[$1[6],Operators$7.toInt(Global.Number($1[1])),Operators$7.toInt(Global.Number($1[0])),Operators$7.toInt(Global.Number($1[5])),Operators$7.toInt(Global.Number($1[4])),$1[2],$1[3]]
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
   return Operators$7.FailWith(Global.String(x$1));
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
  }),Operators$7.toInt(Global.Number(line)),Operators$7.toInt(Global.Number(col))),null)):void 0:void 0;
 };
 JumpTo.rexGuid=function()
 {
  SC$1.$cctor();
  return SC$1.rexGuid$1;
 };
 CustomAction.setScrollToBottom=function()
 {
  SC$1.$cctor();
  return SC$1.setScrollToBottom;
 };
 CustomAction.scrollToBottom=function(el)
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(100),function()
   {
    el.scrollTop=el.scrollHeight;
    return Concurrency.Zero();
   });
  })),null);
 };
 CustomAction.setCurrentProperty=function(p,v)
 {
  Snippets.setProperty(Snippets.currentSnippetV().Get(),p,v);
 };
 CustomAction.getCurrentProperty=function(p)
 {
  var x;
  return AsyncResult.absorbO(function()
  {
   return(ResultMessageHelpers.errorMsgf(function($1)
   {
    return function($2)
    {
     return $1("Property "+Utils.toSafe($2)+" not found");
    };
   }))(p);
  },AsyncResult.map(function(t)
  {
   return t[0];
  },(x=CustomAction.propO(Snippets.currentSnippetV().Get(),p),FusionAsyncM.runReader(Snippets.snippetsColl(),x))));
 };
 CustomAction.buttonClick=function(e)
 {
  CustomAction.actionClick(Strings.Trim(e.textContent));
 };
 CustomAction.actionClick=function(name)
 {
  var x;
  x=CustomAction.actionClickRm(name);
  FusionAsyncM.iterReaderA(function(v)
  {
   Library.print(v);
  },function(v)
  {
   Library.print(v);
  },Snippets.snippetsColl(),x);
 };
 CustomAction.actionSnp=function(path,name)
 {
  var x;
  x=CustomAction.actionSnpRm(path,name);
  FusionAsyncM.iterReaderA(function(v)
  {
   Library.print(v);
  },function(v)
  {
   Library.print(v);
  },Snippets.snippetsColl(),x);
 };
 CustomAction.actionSnpRm=function(snpPath,name)
 {
  var b;
  b=FusionAsyncM.fusion();
  return b.Run(b.Delay(function()
  {
   return b.Bind(FusionAsyncM.ofFusionM(SnippetModule.snippetFromRefORm({
    $:1,
    $0:Strings.SplitChars(snpPath,["/"],0)
   })),function(a)
   {
    var snp;
    function f(v)
    {
     return CustomAction.fetchValue(name,v);
    }
    return a!=null&&a.$==1?(snp=a.$0,b.Bind(Operators$4.op_BarGreaterGreater(CustomAction.getCode(snp,name),function(c)
    {
     return CustomAction.translateString(f,c);
    }),function(a$1)
    {
     return b.Bind(FusionAsyncM.ofAsync((new AjaxRemotingProvider.New()).Async("FSharpStation:FsRoot.Library2+FSharpStationClient.setAddress:-574353144",[new Address({
      $:0,
      $0:FStation.id()
     })])),function()
     {
      return b.Bind(Operators$4.op_BarGreaterGreater(FusionAsyncM.ofFusionM(SnippetModule.fastCodeRm({
       $:1,
       $0:snp.snpId
      },{
       $:1,
       $0:snp.snpId
      })),function(t)
      {
       return t[0];
      }),function(a$2)
      {
       return b.Bind(FusionAsyncM.ofFusionM(SnippetModule.predsGenerationRm(snp)),function(a$3)
       {
        return b.ReturnFrom(FusionAsyncM.ofAsync((new AjaxRemotingProvider.New()).Async("FSharpStation:FsRoot.Library2+FsiAgent.evalCodeWithPresence:854633647",[FStation.srcDir(),(function($1)
        {
         return function($2)
         {
          return $1(FSharpStation_GeneratedPrintf.p$2($2));
         };
        }(Global.id))(snp.snpId),(new Date(a$3)).toLocaleString(),{
         $:0,
         $0:a$2
        },{
         $:0,
         $0:a$1
        }])));
       });
      });
     });
    })):b.ReturnFrom(FusionAsyncM.ofResultRM({
     $:1,
     $0:new ResultMessage({
      $:1,
      $0:(function($1)
      {
       return function($2)
       {
        return $1("Snippet "+Utils.toSafe($2)+" not found");
       };
      }(Global.id))(snpPath)
     })
    }));
   });
  }));
 };
 CustomAction.setSnippetContent=function(snpPath,content)
 {
  var x,b;
  x=(b=FusionAsyncM.fusion(),b.Run(b.Delay(function()
  {
   return b.Bind(FusionAsyncM.ofFusionM(SnippetModule.snippetFromRefORm({
    $:1,
    $0:Strings.SplitChars(snpPath,["/"],0)
   })),function(a)
   {
    var snp;
    return a!=null&&a.$==1?(snp=a.$0,(Snippets.setSnippet(Snippet.New(snp.snpId,snp.snpName,content,snp.snpParentIdO,snp.snpPredIds,snp.snpProperties,snp.snpModified)),b.Zero())):b.ReturnFrom(FusionAsyncM.ofResultRM({
     $:1,
     $0:new ResultMessage({
      $:1,
      $0:(function($1)
      {
       return function($2)
       {
        return $1("Snippet "+Utils.toSafe($2)+" not found");
       };
      }(Global.id))(snpPath)
     })
    }));
   });
  })));
  FusionAsyncM.iterReaderA(function(v)
  {
   Library.print(v);
  },function()
  {
   Library.print();
  },Snippets.snippetsColl(),x);
 };
 CustomAction.actionClickRm=function(name)
 {
  var b;
  b=FusionAsyncM.fusion();
  return b.Run(b.Delay(function()
  {
   var a;
   a=(function($1)
   {
    return function($2)
    {
     return $1("Action "+Utils.toSafe($2)+" ...");
    };
   }(Global.id))(name);
   FStation.outputMsgs().Set(a);
   return b.Bind(CustomAction.getBaseSnippet(),function(a$1)
   {
    function f(v)
    {
     return CustomAction.fetchValue(name,v);
    }
    return b.Bind(Operators$4.op_BarGreaterGreater(CustomAction.getCode(a$1,name),function(c)
    {
     return CustomAction.translateString(f,c);
    }),function(a$2)
    {
     return b.Bind(FusionAsyncM.ofAsync((new AjaxRemotingProvider.New()).Async("FSharpStation:FsRoot.Library2+FSharpStationClient.setAddress:-574353144",[new Address({
      $:0,
      $0:FStation.id()
     })])),function()
     {
      return b.Bind(Operators$4.op_BarGreaterGreater(FusionAsyncM.ofFusionM(SnippetModule.fastCodeRm({
       $:1,
       $0:a$1.snpId
      },{
       $:1,
       $0:a$1.snpId
      })),function(t)
      {
       return t[0];
      }),function(a$3)
      {
       return b.Bind(FusionAsyncM.ofFusionM(SnippetModule.predsGenerationRm(a$1)),function(a$4)
       {
        return b.ReturnFrom(FusionAsyncM.ofAsync((new AjaxRemotingProvider.New()).Async("FSharpStation:FsRoot.Library2+FsiAgent.evalCodeWithPresence:854633647",[FStation.srcDir(),(function($1)
        {
         return function($2)
         {
          return $1(FSharpStation_GeneratedPrintf.p$2($2));
         };
        }(Global.id))(a$1.snpId),(new Date(a$4)).toLocaleString(),{
         $:0,
         $0:a$3
        },{
         $:0,
         $0:a$2
        }])));
       });
      });
     });
    });
   });
  }));
 };
 CustomAction.fetchValue=function(button,v)
 {
  var o,o$1,t;
  return v==="button"?button:(o=(o$1=(t=(AppFramework.splitName(new PlugInName({
   $:0,
   $0:"Snp_"+Strings.Replace(Global.String(Snippets.currentSnippetV().Get().snpId.get_Id()),"-","")
  })))(v),AppFramework.tryGetWoW(t[0],t[1])),o$1==null?null:View$1.TryGet(o$1.$0)),o==null?(function($1)
  {
   return function($2)
   {
    return $1("$[not found:"+Utils.toSafe($2)+"]");
   };
  }(Global.id))(v):o.$0);
 };
 CustomAction.getCode=function(snp,name)
 {
  var b;
  b=FusionAsyncM.fusion();
  return b.Run(b.Delay(function()
  {
   var b$1;
   return b.Bind((b$1=FusionAsyncM.fusion(),b$1.Run(b$1.Delay(function()
   {
    return b$1.Bind(CustomAction.propO(snp,name),function(a)
    {
     return a==null?Strings.StartsWith(name,":")?b$1.Return(Slice.string(name,{
      $:1,
      $0:1
     },null)):b$1.Bind(CustomAction.propO(snp,"action-template"),function(a$1)
     {
      return b$1.Return(a$1==null?"${button}() |> printfn \"%A\"":a$1.$0);
     }):b$1.Return(a.$0);
    });
   }))),function(a)
   {
    return b.Bind(CustomAction.codeModule(snp,a),function(a$1)
    {
     return b.Return(Snippets.prepAnyCode(a$1));
    });
   });
  }));
 };
 CustomAction.codeModule=function(snp,code)
 {
  var b;
  b=FusionAsyncM.fusion();
  return b.Run(b.Delay(function()
  {
   return b.Bind(CustomAction.propO(snp,"Open"),function(a)
   {
    var x;
    return a!=null&&a.$==1?b.Return((x=(String.indentStr(4))(a.$0+"\n"+code),(((Runtime.Curried3(function($1,$2,$3)
    {
     return $1("module Call"+Utils.toSafe($2)+" =\n"+Utils.toSafe($3));
    }))(Global.id))(Global.String(Date.now())))(x))):b.Return(code);
   });
  }));
 };
 CustomAction.getBaseSnippet=function()
 {
  var b;
  b=FusionAsyncM.fusion();
  return b.Run(b.Delay(function()
  {
   var snp;
   snp=Snippets.currentSnippetV().Get();
   return b.Bind(CustomAction.propO(snp,"BaseSnippet"),function(a)
   {
    return b.ReturnFrom(Operators$4.op_BarGreaterGreater(Operators$4.op_BarGreaterGreater(FusionAsyncM.insertO(a==null?null:{
     $:1,
     $0:FusionAsyncM.ofFusionM(SnippetModule.snippetFromRefORm({
      $:1,
      $0:Strings.SplitChars(a.$0,["/"],0)
     }))
    }),function(o)
    {
     return o==null?null:o.$0;
    }),function(o)
    {
     return o==null?snp:o.$0;
    }));
   });
  }));
 };
 CustomAction.translateString=function(f,code)
 {
  function translate(acc,s)
  {
   var a;
   a=String.delimitedO("${","}",s);
   return a!=null&&a.$==1?translate(acc+a.$0[0],f(a.$0[1])+a.$0[2]):acc+s;
  }
  return translate("",code);
 };
 CustomAction.propO=function(snp,p)
 {
  function m($1,$2)
  {
   return $2[0];
  }
  return Operators$4.op_BarGreaterGreater(FusionAsyncM.ofFusionM(SnippetModule.propertyHierORm(p,snp)),function(o)
  {
   var $1;
   return o==null?null:{
    $:1,
    $0:($1=o.$0,m($1[0],$1[1]))
   };
  });
 };
 Model$1.New=function(snippets,modified,collapsed)
 {
  return{
   snippets:snippets,
   modified:modified,
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
 EndPoint.NoSnippet={
  $:2
 };
 MainProgram.mainProgram=function()
 {
  var l,m,v,prior,v$1,prior$1,b,M,p;
  AppFramework.addPlugIn(PlugIn.New(new PlugInName({
   $:0,
   $0:"FSharpStation"
  }),ListModel$1.Create(function(v$2)
  {
   return v$2.varName;
  },[AppFramework.newVar(new PlgElemName({
   $:0,
   $0:"fileName"
  }),LoadSave.fileName()),AppFramework.newVar(new PlgElemName({
   $:0,
   $0:"SnippetName"
  }),MainProgram.snippetNameV()),AppFramework.newVar(new PlgElemName({
   $:0,
   $0:"Content"
  }),MainProgram.contentV()),AppFramework.newVar(new PlgElemName({
   $:0,
   $0:"Output"
  }),FStation.outputMsgs()),AppFramework.newVar(new PlgElemName({
   $:0,
   $0:"Parser"
  }),FStation.annotationsV())]),ListModel$1.Create(function(w)
  {
   return w.viwName;
  },[AppFramework.newViw(new PlgElemName({
   $:0,
   $0:"FsCode"
  }),Snippets.FsCodeW()),AppFramework.newViw(new PlgElemName({
   $:0,
   $0:"SaveNeeded"
  }),Snippets.SaveAsClassW()),AppFramework.newViw(new PlgElemName({
   $:0,
   $0:"CurrentPath"
  }),Snippets.currentPathW()),AppFramework.newViw(new PlgElemName({
   $:0,
   $0:"FStationId"
  }),View$1.Const(FStation.id())),AppFramework.newViw(new PlgElemName({
   $:0,
   $0:"CurrentSid"
  }),View$1.Map(function(sid)
  {
   return Global.String(sid.get_Id());
  },Snippets.CurrentSnippetIdW()))]),ListModel$1.Create(function(w)
  {
   return w.docName;
  },[AppFramework.newDoc(new PlgElemName({
   $:0,
   $0:"mainDoc"
  }),Lazy.Create(MainProgram.mainDoc)),AppFramework.newDoc(new PlgElemName({
   $:0,
   $0:"editor"
  }),Lazy.Create(function()
  {
   return Doc.Element("div",[],[Monaco$1.editorDoc()]);
  })),AppFramework.newDoc(new PlgElemName({
   $:0,
   $0:"Snippets"
  }),Lazy.Create(RenderSnippets.render)),AppFramework.newDoc(new PlgElemName({
   $:0,
   $0:"Properties"
  }),Lazy.Create(RenderProperties.render)),AppFramework.newDoc(new PlgElemName({
   $:0,
   $0:"ButtonsRight"
  }),Lazy.Create(MainProgram.buttonsRight))]),ListModel$1.Create(function(w)
  {
   return w.actName;
  },[AppFramework.newAct(new PlgElemName({
   $:0,
   $0:"AddSnippet"
  }),function()
  {
   Snippets.newSnippet();
  }),AppFramework.newAct(new PlgElemName({
   $:0,
   $0:"RemoveSnippet"
  }),function()
  {
   MainProgram.deleteSnippet();
  }),AppFramework.newAct(new PlgElemName({
   $:0,
   $0:"IndentIn"
  }),function()
  {
   Snippets.indentIn();
  }),AppFramework.newAct(new PlgElemName({
   $:0,
   $0:"IndentOut"
  }),function()
  {
   Snippets.indentOut();
  }),AppFramework.newAct(new PlgElemName({
   $:0,
   $0:"AddProperty"
  }),function()
  {
   RenderProperties.addProperty();
  }),AppFramework.newAct(new PlgElemName({
   $:0,
   $0:"SaveAs"
  }),function()
  {
   LoadSave.saveAs();
  }),AppFramework.newAct(new PlgElemName({
   $:0,
   $0:"RunFS"
  }),function()
  {
   MainProgram.runFsCode();
  }),AppFramework.newAct(new PlgElemName({
   $:0,
   $0:"SelectionToFsi"
  }),function()
  {
   MainProgram.selectionToFsi();
  }),AppFramework.newAct(new PlgElemName({
   $:0,
   $0:"AbortFsi"
  }),function()
  {
   (new AjaxRemotingProvider.New()).Send("FSharpStation:FsRoot.Library2+FsiAgent.abortFsiExe:6",[]);
  }),AppFramework.newAct(new PlgElemName({
   $:0,
   $0:"DisposeFsi"
  }),function()
  {
   (new AjaxRemotingProvider.New()).Send("FSharpStation:FsRoot.Library2+FsiAgent.disposeFsiExe:6",[]);
  }),AppFramework.newActF(new PlgElemName({
   $:0,
   $0:"LoadFile"
  }),{
   $:1,
   $0:function(o)
   {
    LoadSave.loadTextFile(o);
   },
   $1:"FileElement"
  }),AppFramework.newActF(new PlgElemName({
   $:0,
   $0:"Import"
  }),{
   $:1,
   $0:function(o)
   {
    Importer.importFile(o);
   },
   $1:"FileElement"
  }),AppFramework.newActF(new PlgElemName({
   $:0,
   $0:"JumpTo"
  }),{
   $:1,
   $0:function(o)
   {
    JumpTo.jumpToRef(o);
   },
   $1:"textarea"
  }),AppFramework.newActF(new PlgElemName({
   $:0,
   $0:"ButtonClick"
  }),{
   $:1,
   $0:function(o)
   {
    CustomAction.buttonClick(o);
   },
   $1:"button"
  }),AppFramework.newActF(new PlgElemName({
   $:0,
   $0:"ActionClick"
  }),{
   $:1,
   $0:function(o)
   {
    CustomAction.actionClick(o);
   },
   $1:"name"
  }),AppFramework.newActF(new PlgElemName({
   $:0,
   $0:"SetScrollToBottom"
  }),{
   $:1,
   $0:function(o)
   {
    (CustomAction.setScrollToBottom())(o);
   },
   $1:"textarea"
  }),AppFramework.newActF(new PlgElemName({
   $:0,
   $0:"ActionSnp"
  }),{
   $:2,
   $0:function(o1)
   {
    return function(o2)
    {
     return CustomAction.actionSnp(o1,o2);
    };
   },
   $1:"snpPath",
   $2:"name"
  }),AppFramework.newActF(new PlgElemName({
   $:0,
   $0:"setCurrentProperty"
  }),{
   $:2,
   $0:function(o1)
   {
    return function(o2)
    {
     return CustomAction.setCurrentProperty(o1,o2);
    };
   },
   $1:"name",
   $2:"value"
  }),AppFramework.newActF(new PlgElemName({
   $:0,
   $0:"setSnippetContent"
  }),{
   $:2,
   $0:function(o1)
   {
    return function(o2)
    {
     return CustomAction.setSnippetContent(o1,o2);
    };
   },
   $1:"path",
   $2:"value"
  })]),ListModel$1.Create(function(w)
  {
   return w.qryName;
  },[AppFramework.newQry(new PlgElemName({
   $:0,
   $0:"PropertyRA"
  }),CustomAction.getCurrentProperty)])));
  NewLY.addNewLayout((l=(m=self.document.getElementById("GlobalLayout"),Unchecked.Equals(m,null)?"\n                    menuEditor       horizontal  65       menuLogo                  editorMessages\n                    double           horizontal  0-50-100 AppFramework.AppFwkClient menuEditor\n                    menuLogo         vertical    350      logo                      menu\n                    logo             span       \"margin:0; color:gray; font-size: 55px; font-weight:530\" \"F# Station\"\n                    editorMessages   horizontal 10-83-100 editorButtons             messages\n                    messages         vertical   0-50-100  messagesLeft              messagesRight\n                    editorButtons    vertical -120 snippetsSnippet buttons\n                    buttons div      \"overflow: hidden; display: grid; grid-template-columns: 100%; grid-template-rows: repeat(15, calc(100% / 15)); bxackground-color: #eee; box-sizing: border-box; padding : 5px; grid-gap: 5px; margin-right: 21px\" btnSaveAs none x btnAddSnippet btnDeleteSnippet btnIndentIn btnIndentOut none x btnRunFS btnInputFsi btnAbortFsi\n                    snippetsSnippet  vertical   0-20-100  snippets                  editorProperties\n                    snippets         horizontal 20        \"${FSharpStation.CurrentPath}\" FSharpStation.Snippets\n                    editorProperties vertical   0-100-100 snippet                   properties\n                    properties       div        \"\"        FSharpStation.Properties\n                    snippet          horizontal 35        Name                      FSharpStation.editor\n                    menu             span  \"\" btnLoad btnImport\n        \n                    btnSaveAs        button FSharpStation.SaveAs         \"class=btn ${FSharpStation.SaveNeeded}\" \"Save as...    \"\n                    btnAddSnippet    button FSharpStation.AddSnippet     \"\"                  \"Add Snippet   \"\n                    btnDeleteSnippet button FSharpStation.RemoveSnippet  \"\"                  \"Delete Snippet\"\n                    btnIndentIn      button FSharpStation.IndentIn       \"\"                  \"Indent In  >> \"\n                    btnIndentOut     button FSharpStation.IndentOut      \"\"                  \"Indent Out << \"\n                    btnRunFS         button FSharpStation.RunFS          \"\"                  \"Run F#        \"\n                    btnInputFsi      button FSharpStation.selectionToFsi   \"\"                  \"selection |> Fsi\"\n                    btnAbortFsi      button FSharpStation.AbortFsi       \"\"                  \"Abort Fsi     \"\n        \n                    messagesLeft     wcomp-tabstrip                      \"\"                  Output FsCode\n                    messagesRight    wcomp-tabstrip                      \"\"                  Parser\n        \n                    Output           textarea  FSharpStation.Output      \"tabname=Output ; placeholder=Output messages ; spellcheck=false\" \n                    FsCode           textarea  FSharpStation.FsCode      \"tabname=F# Code; placeholder=F# Code         ; spellcheck=false\" \n                    Parser           textarea  FSharpStation.Parser      \"tabname=Parser ; placeholder=Parser messages; dblclick=${FSharpStation.JumpTo} ; spellcheck=false\" \n                    Name             Doc       InputLabel                \"\"     \"Name:\"        FSharpStation.SnippetName\n                    btnLoad          Doc       InputFile                 \"\"     \"Load File...\" FSharpStation.LoadFile  FileName\n                    btnImport        Doc       InputFile                 \"\"     \"Import...\"    FSharpStation.Import    \"\"\n                    FileName         div                                 \"class=form-control\"  FSharpStation.fileName\n                  ":m.textContent),LayoutEngineModule.newLyt(MainProgram.FStationLyt(),l)));
  View$1.Sink(function(lytO)
  {
   (Option.iter(function(t)
   {
    try
    {
     self["eval"].apply(self,["CIPHERSpaceLoadFilesDoAfter(function(){IntelliFactory.Runtime.Start()})"]);
     self["eval"].apply(self,[t[1]]);
    }
    catch(e)
    {
     Library.print(e);
    }
   }))(lytO);
  },(v=Snippets.currentLayoutJSDW(),(prior=[Var$1.Create$1(null)],(View$1.Sink(function(v$2)
  {
   if(!Unchecked.Equals(prior[0].Get(),v$2))
    prior[0].Set(v$2);
  },v),prior[0].get_View()))));
  View$1.Sink(function(lytO)
  {
   var a,x,$1,name,txt,v$2;
   a=(x=lytO==null?null:($1=lytO.$0,(name=$1[0],(txt=$1[1],(NewLY.addNewLayout(LayoutEngineModule.newLyt(new PlugInName({
    $:0,
    $0:name
   }),txt)),txt===""?null:{
    $:1,
    $0:name
   })))),(v$2=MainProgram.FStationLyt().get_Id(),x==null?v$2:x.$0));
   AppFramework.mainDocV().Set(a);
  },(v$1=Snippets.currentLayoutDW(),(prior$1=[Var$1.Create$1(null)],(View$1.Sink(function(v$2)
  {
   if(!Unchecked.Equals(prior$1[0].Get(),v$2))
    prior$1[0].Set(v$2);
  },v$1),prior$1[0].get_View()))));
  View$1.Sink(function(v$2)
  {
   var b$1;
   Concurrency.Start((b$1=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(500),function()
    {
     self.document.title=v$2;
     return Concurrency.Zero();
    });
   })),null);
  },Snippets.currentPathW());
  b=(M=AppFramework.getMainDoc().f(),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"maincontent",
   $1:M
  }));
  p=Handler$1.CompleteHoles(b.k,b.h,[]);
  b.i=new TemplateInstance.New(p[1],Templates.RunFullDocTemplate(p[0]));
 };
 MainProgram.contentV=function()
 {
  SC$1.$cctor();
  return SC$1.contentV;
 };
 MainProgram.snippetNameV=function()
 {
  SC$1.$cctor();
  return SC$1.snippetNameV;
 };
 MainProgram.mainDoc$9584$78=Global.id;
 MainProgram.mainDoc$9575$39=function()
 {
  return function(ev)
  {
   JumpTo.jumpToRef(ev.Target);
  };
 };
 MainProgram.mainDoc$9574$39=function()
 {
  return function(ev)
  {
   ev.Target.value="";
  };
 };
 MainProgram.mainDoc$9573$39=function()
 {
  return function(ev)
  {
   Importer.importFile(ev.Target);
  };
 };
 MainProgram.mainDoc$9572$39=function()
 {
  return function(ev)
  {
   ev.Target.value="";
  };
 };
 MainProgram.mainDoc$9571$39=function()
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
 MainProgram.buttonsRight$9557$74=Global.id;
 MainProgram.buttonsRight$9556$74=Global.id;
 MainProgram.buttonsRight$9555$74=Global.id;
 MainProgram.buttonsRight$9554$74=Global.id;
 MainProgram.buttonsRight$9553$74=Global.id;
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
  o=(o$1=AppFramework.tryGetDoc(new PlugInName({
   $:0,
   $0:plug
  }),new PlgElemName({
   $:0,
   $0:name
  })),o$1==null?null:{
   $:1,
   $0:(doc=o$1.$0,((((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Doc    "+Utils.toSafe($2)+"."+Utils.toSafe($3)+" hooked");
   }))(function(s)
   {
    console.log(s);
   }))(plug))(name),func(obj,Doc.EmbedView(View$1.Map(function()
   {
    return AppFramework.getActualDoc(doc);
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
  o=(o$1=AppFramework.tryGetAct(new PlugInName({
   $:0,
   $0:plug
  }),new PlgElemName({
   $:0,
   $0:name
  })),o$1==null?null:{
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
  o=(o$1=AppFramework.tryGetViw(new PlugInName({
   $:0,
   $0:plug
  }),new PlgElemName({
   $:0,
   $0:name
  })),o$1==null?null:{
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
  o=(o$1=AppFramework.tryGetVar(new PlugInName({
   $:0,
   $0:plug
  }),new PlgElemName({
   $:0,
   $0:name
  })),o$1==null?null:{
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
 MainProgram.FStationLyt=function()
 {
  SC$1.$cctor();
  return SC$1.FStationLyt;
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
 MainProgram.selectionToFsi=function()
 {
  var x,b,f;
  function g(v)
  {
   FStation.appendMsgs(Strings.Replace(v,"xXxYyYyhH","Done!"));
  }
  x=(b=FusionAsyncM.fusion(),b.Run(b.Delay(function()
  {
   return b.Bind(FusionAsyncM.ofAsync((new AjaxRemotingProvider.New()).Async("FSharpStation:FsRoot.Library2+FSharpStationClient.setAddress:-574353144",[new Address({
    $:0,
    $0:FStation.id()
   })])),function()
   {
    var s;
    return b.Bind((s=Monaco$1.getSelection(),FusionAsyncM.ofAsync((new AjaxRemotingProvider.New()).Async("FSharpStation:FsRoot.Library2+FsiAgent.sendFsiInput:-1181784350",[s+";;"]))),function()
    {
     return b.Return();
    });
   });
  })));
  FusionAsyncM.iterResultA((f=function($1)
  {
   return function($2)
   {
    return $1("Error:\n"+FSharpStation_GeneratedPrintf.p$30($2));
   };
  }(Global.id),function(x$1)
  {
   return g(f(x$1));
  }),Global.ignore,x);
 };
 MainProgram.runFsCode=function()
 {
  var x;
  function out(v)
  {
   FStation.appendMsgs(Strings.Replace(v,"xXxYyYyhH","Done!"));
  }
  x=View$1.TryGet(Snippets.FsCodeW());
  (Option.iter(function(code)
  {
   var x$1,b,f;
   x$1=(b=FusionAsyncM.fusion(),b.Run(b.Delay(function()
   {
    FStation.outputMsgs().Set("Running F#...");
    return b.Bind(FusionAsyncM.ofAsync((new AjaxRemotingProvider.New()).Async("FSharpStation:FsRoot.Library2+FSharpStationClient.setAddress:-574353144",[new Address({
     $:0,
     $0:FStation.id()
    })])),function()
    {
     return b.ReturnFrom(FusionAsyncM.ofAsync((new AjaxRemotingProvider.New()).Async("FSharpStation:FsRoot.Library2+FsiAgent.evalCode:-623788033",[FStation.srcDir(),{
      $:0,
      $0:code
     }])));
    });
   })));
   FusionAsyncM.iterResultA((f=function($1)
   {
    return function($2)
    {
     return $1("Error:\n"+FSharpStation_GeneratedPrintf.p$30($2));
    };
   }(Global.id),function(x$2)
   {
    return out(f(x$2));
   }),Global.ignore,x$1);
  }))(x);
 };
 MainProgram.endPointV=function()
 {
  SC$1.$cctor();
  return SC$1.endPointV;
 };
 Messaging.processMessage=function(msg)
 {
  var x,b;
  return AsyncResult.map(function(t)
  {
   return t[0];
  },(x=(b=FusionAsyncM.fusion(),b.Run(b.Delay(function()
  {
   var $1,t,t$1,t$2,t$3,$2,$3,$4,a,path,prop,v;
   function m(snp)
   {
    Snippets.setProperty(snp,prop,v);
    return"Ok";
   }
   switch(msg.$==1?($1=msg.$0,1):msg.$==2?($1=msg.$0,2):msg.$==8?($1=msg.$0,3):msg.$==3?($1=msg.$0,4):msg.$==4?(t=msg.$0,!Unchecked.Equals(t,null)&&t.length===2?Arrays.get(msg.$0,0)==="AddOutput"?($1=Arrays.get(msg.$0,1),5):Arrays.get(msg.$0,0)==="ExecJS"?($1=Arrays.get(msg.$0,1),6):($1=[Arrays.get(msg.$0,0),Arrays.get(msg.$0,1)],9):(t$1=msg.$0,!Unchecked.Equals(t$1,null)&&t$1.length===4?Arrays.get(msg.$0,0)==="SetProperty"?($1=[Arrays.get(msg.$0,1),Arrays.get(msg.$0,2),Arrays.get(msg.$0,3)],7):14:(t$2=msg.$0,!Unchecked.Equals(t$2,null)&&t$2.length===1?($1=Arrays.get(msg.$0,0),8):(t$3=msg.$0,!Unchecked.Equals(t$3,null)&&t$3.length===3?($1=[Arrays.get(msg.$0,0),Arrays.get(msg.$0,1),Arrays.get(msg.$0,2)],10):14)))):msg.$==6?($1=msg.$0,11):msg.$==7?($1=[msg.$1,msg.$0],12):msg.$==5?13:0)
   {
    case 0:
     return b.Return({
      $:0,
      $0:FStation.id()
     });
    case 1:
     return b.Bind(FusionAsyncM.traverseSeq(function(x$1)
     {
      return FusionAsyncM.ofFusionM(SnippetModule.snippetFromRefORm(x$1));
     },$1),function(a$1)
     {
      return b.Return({
       $:1,
       $0:Arrays.ofSeq(Seq$1.choose(Global.id,a$1))
      });
     });
    case 2:
     Snippets.clearPredsCache();
     return b.Bind(FusionAsyncM.absorbO(function()
     {
      return new ResultMessage({
       $:1,
       $0:(function($5)
       {
        return function($6)
        {
         return $5("Snippet not found "+FSharpStation_GeneratedPrintf.p$31($6));
        };
       }(Global.id))($1)
      });
     },FusionAsyncM.ofFusionM(SnippetModule.snippetFromRefORm($1))),function(a$1)
     {
      return b.ReturnFrom(Operators$4.op_BarGreaterGreater(Operators$4.op_BarGreaterGreater(FusionAsyncM.ofFusionM(SnippetModule.fastCodeRm({
       $:1,
       $0:a$1.snpId
      },{
       $:1,
       $0:a$1.snpId
      })),function(t$4)
      {
       return t$4[0];
      }),function(a$2)
      {
       return{
        $:0,
        $0:a$2
       };
      }));
     });
    case 3:
     return b.Bind(FusionAsyncM.absorbO(function()
     {
      return new ResultMessage({
       $:1,
       $0:(function($5)
       {
        return function($6)
        {
         return $5("Snippet not found "+FSharpStation_GeneratedPrintf.p$31($6));
        };
       }(Global.id))($1)
      });
     },FusionAsyncM.ofFusionM(SnippetModule.snippetFromRefORm($1))),function(a$1)
     {
      return b.Bind(FusionAsyncM.ofFusionM(SnippetModule.predsLRm(a$1.snpId)),function(a$2)
      {
       return b.Bind(FusionAsyncM.traverseSeq(function(x$1)
       {
        return FusionAsyncM.ofFusionM(SnippetModule.snippetORm(x$1));
       },a$2),function(a$3)
       {
        function m$1(s)
        {
         return s.snpModified;
        }
        return b.Return({
         $:2,
         $0:Seq$1.max(Seq$1.choose(function(o)
         {
          return o==null?null:{
           $:1,
           $0:m$1(o.$0)
          };
         },a$3))
        });
       });
      });
     });
    case 4:
     return b.Bind(FusionAsyncM.absorbO(function()
     {
      return new ResultMessage({
       $:1,
       $0:(function($5)
       {
        return function($6)
        {
         return $5("Snippet not found "+FSharpStation_GeneratedPrintf.p$31($6));
        };
       }(Global.id))($1)
      });
     },FusionAsyncM.ofFusionM(SnippetModule.snippetFromRefORm($1))),function(a$1)
     {
      return b.Bind(FusionAsyncM.ofFusionM(SnippetModule.predsLRm(a$1.snpId)),function(a$2)
      {
       return b.Bind(FusionAsyncM.traverseSeq(function(x$1)
       {
        return FusionAsyncM.ofFusionM(SnippetModule.snippetORm(x$1));
       },a$2),function(a$3)
       {
        return b.Return({
         $:1,
         $0:Arrays.ofSeq(Seq$1.choose(Global.id,a$3))
        });
       });
      });
     });
    case 5:
     FStation.appendMsgs($1);
     return b.Return({
      $:0,
      $0:"Ok"
     });
    case 6:
     try
     {
      $4={
       $:0,
       $0:(a=self["eval"].apply(self,[$1]),Unchecked.Equals(a,null)?"":(function($5)
       {
        return function($6)
        {
         return $5(Utils.prettyPrint($6));
        };
       }(Global.id))(a))
      };
     }
     catch(e)
     {
      $4={
       $:1,
       $0:new ResultMessage({
        $:5,
        $0:e.message,
        $1:e.stack
       })
      };
     }
     $3=FusionAsyncM.ofResultRM($4);
     return b.Bind($3,function(a$1)
     {
      return b.Return({
       $:0,
       $0:a$1
      });
     });
    case 7:
     path=$1[0];
     prop=$1[1];
     v=$1[2];
     return b.Bind(FusionAsyncM.absorbO(function()
     {
      return new ResultMessage({
       $:1,
       $0:(function($5)
       {
        return function($6)
        {
         return $5("Snippet not found: "+Utils.toSafe($6));
        };
       }(Global.id))(path)
      });
     },Operators$4.op_BarGreaterGreater(FusionAsyncM.ofFusionM(SnippetModule.snippetFromRefORm({
      $:1,
      $0:Strings.SplitChars(path,["/"],0)
     })),function(o)
     {
      return o==null?null:{
       $:1,
       $0:m(o.$0)
      };
     })),function(a$1)
     {
      return b.Return({
       $:0,
       $0:a$1
      });
     });
    case 8:
     return b.ReturnFrom(Messaging.actionCall($1,null,null));
    case 9:
     return b.ReturnFrom(Messaging.actionCall($1[0],$1[1],null));
    case 10:
     return b.ReturnFrom(Messaging.actionCall($1[0],$1[1],$1[2]));
    case 11:
     return b.ReturnFrom(Messaging.getValue($1));
    case 12:
     return b.ReturnFrom(Messaging.setValue($1[1],$1[0]));
    case 13:
     return b.Return({
      $:0,
      $0:self.document.baseURI
     });
    case 14:
     return b.Return(Hole.Hole[(function($5)
     {
      return function($6)
      {
       return $5("TODO message: "+FSharpStation_GeneratedPrintf.p$32($6));
      };
     }(Global.id))(msg)]);
   }
  }))),FusionAsyncM.runReader(Snippets.snippetsColl(),x)));
 };
 Messaging.setValue=function(vname,v)
 {
  var b;
  b=FusionAsyncM.fusion();
  return b.Run(b.Delay(function()
  {
   var m,t;
   m=(t=(AppFramework.splitName(MainProgram.FStationLyt()))(vname),AppFramework.tryGetVar(t[0],t[1]));
   return m!=null&&m.$==1?(m.$0.varVar.Set(v),b.Return({
    $:0,
    $0:"Ok"
   })):b.ReturnFrom(FusionAsyncM.ofResultRM({
    $:1,
    $0:new ResultMessage({
     $:1,
     $0:(function($1)
     {
      return function($2)
      {
       return $1("Var "+Utils.toSafe($2)+" not found");
      };
     }(Global.id))(vname)
    })
   }));
  }));
 };
 Messaging.getValue=function(vname)
 {
  var b;
  b=FusionAsyncM.fusion();
  return b.Run(b.Delay(function()
  {
   var m,t;
   m=(t=(AppFramework.splitName(MainProgram.FStationLyt()))(vname),AppFramework.tryGetWoW(t[0],t[1]));
   return m!=null&&m.$==1?b.Bind(FusionAsyncM.ofAsync(View$1.GetAsync(m.$0)),function(a)
   {
    return b.Return({
     $:0,
     $0:a
    });
   }):b.ReturnFrom(FusionAsyncM.ofResultRM({
    $:1,
    $0:new ResultMessage({
     $:1,
     $0:(function($1)
     {
      return function($2)
      {
       return $1("Var or View "+Utils.toSafe($2)+" not found");
      };
     }(Global.id))(vname)
    })
   }));
  }));
 };
 Messaging.actionCall=function(actN,p1,p2)
 {
  var b;
  b=FusionAsyncM.fusion();
  return b.Run(b.Delay(function()
  {
   var m,t;
   m=(t=(AppFramework.splitName(MainProgram.FStationLyt()))(actN),AppFramework.tryGetAct(t[0],t[1]));
   return m!=null&&m.$==1?(AppFramework.callFunction(p1,p2,m.$0.actFunction),b.Return({
    $:0,
    $0:"Ok"
   })):b.ReturnFrom(FusionAsyncM.ofResultRM({
    $:1,
    $0:new ResultMessage({
     $:1,
     $0:(function($1)
     {
      return function($2)
      {
       return $1("Action "+Utils.toSafe($2)+" not found");
      };
     }(Global.id))(actN)
    })
   }));
  }));
 };
 Messaging.wsStationClient=function()
 {
  SC$1.$cctor();
  return SC$1.wsStationClient;
 };
 Server.content$9852$54=function()
 {
  MainProgram.mainProgram();
  return Doc.TextNode("Initialized");
 };
 SC$1.$cctor=function()
 {
  var f,g$3,f$3,b,b$1,b$2,b$3,b$4,b$5,b$6,b$7,b$8,b$9,b$10,b$11,b$12,pluginsList,plgVarsList,plgViewsList,plgActsList,plgDocsList,b$13,f$19,g$15,name,enterName,pf,p$1,pf$1,p$2,sayHello,sayHello_0,c,vf,a,vf$1,c$1,vf$2,main0,pc,pf$2,p$3,p$4,main1,pc$1,vf$3,p$5,main,c$2,c$3,c$4,c$5,c$6,c$7,c$8,c$9,c$10,vf$4,main2,appFwk,c$11,vf$5,c$12,vf$6,pc$2,vf$7,p$6,b$14,b$15,b$16,b$17,b$18,b$19,p$7,cache,getOrAdd,p$8,cache$1,getOrAdd$2,p$9,cache$2,getOrAdd$4,p$10,cache$3,getOrAdd$6,p$11,cache$4,getOrAdd$8,p$12,cache$5,getOrAdd$10,p$13,cache$6,getOrAdd$12,p$14,cache$7,getOrAdd$14,p$15,cache$8,getOrAdd$16,p$16,cache$9,getOrAdd$18,p$17,cache$10,getOrAdd$20,p$18,cache$11,getOrAdd$22,p$19,cache$12,getOrAdd$24,x,b$20,cache$13,$1,cache$14,$2,cache$15,$3,g$17,v,prior,f$20,f$21,f$22,f$23,x$1,$4,$5,v$1,elO,s,sQ,x$2,t,t$1,t$2,t$3,t$4,t$5,t$6,t$7,t$8,x$3,t$9,t$10,i,x$4,t$11,t$12,t$13,t$14,t$15,t$16,i$1,x$5,t$17,t$18,t$19,t$20,t$21,t$22,t$23,i$2,t$24,g$20,g$21,x$6,b$21;
  SC$1.$cctor=Global.ignore;
  SC$1.rtn=function(v$2)
  {
   return[v$2];
  };
  SC$1.state=new CEBuilder.New();
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.resultP=new BuilderP.New();
  SC$1.depend=new DependBuilder.New();
  SC$1.rtn$1=Depend.rtn;
  SC$1.depend$1=Depend.depend();
  SC$1.fusion=new Builder$2.New();
  SC$1.fusion$1=new Builder$4.New();
  SC$1.resultM=new Builder$5.New();
  SC$1.asyncResult=new AsyncResultBuilder.New();
  SC$1.asyncResultP=new AsyncResultBuilderP.New();
  SC$1.asyncResultM=new AsyncResultMBuilder.New();
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
   var a$5,b$22;
   return Slice.array(s$1,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$5=0,(b$22=Arrays.length(s$1)-2,Unchecked.Compare(a$5,b$22)===1?a$5:b$22))
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
  function f$2(s$1)
  {
   return s$1+"T00:00:00";
  }
  SC$1.parseDateO2=(g$3=ParseO.tryParseWith(function(a$5)
  {
   var o,m$4;
   o=0;
   return[(m$4=DateUtil.TryParse(a$5),m$4!=null&&m$4.$==1&&(o=m$4.$0,true)),o];
  }),function(x$7)
  {
   return g$3(f$2(x$7));
  });
  SC$1.parseDateO=ParseO.tryParseWith(function(a$5)
  {
   var o,m$4;
   o=0;
   return[(m$4=DateUtil.TryParse(a$5),m$4!=null&&m$4.$==1&&(o=m$4.$0,true)),o];
  });
  SC$1.parseIntO=ParseO.tryParseWith(function(a$5)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt32(a$5,{
    get:function()
    {
     return o;
    },
    set:function(v$2)
    {
     o=v$2;
    }
   }),o];
  });
  SC$1.parseInt64O=ParseO.tryParseWith(function(a$5)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt64(a$5,{
    get:function()
    {
     return o;
    },
    set:function(v$2)
    {
     o=v$2;
    }
   }),o];
  });
  SC$1.parseSingleO=ParseO.tryParseWith(function(a$5)
  {
   var o,$6;
   o=0;
   return[($6=Global.Number(a$5),Global.isNaN($6)?false:(o=$6,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith(function(a$5)
  {
   var o,$6;
   o=0;
   return[($6=Global.Number(a$5),Global.isNaN($6)?false:(o=$6,true)),o];
  });
  SC$1.parseGuidO=ParseO.tryParseWith(function(a$5)
  {
   var o;
   o=null;
   return[Guid.TryParse(a$5,{
    get:function()
    {
     return o;
    },
    set:function(v$2)
    {
     o=v$2;
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
  SC$1.counter=1;
  SC$1.deserGuid=function(v$2)
  {
   return Serializer.ifUndef("00000000-0000-0000-0000-000000000000",v$2);
  };
  function g$4(v$2)
  {
   return Serializer.ifUndef(0,v$2);
  }
  SC$1.serFloat=[function(v$2)
  {
   return(function($6)
   {
    return function($7)
    {
     return $6(Utils.prettyPrint($7));
    };
   }(Global.id))(v$2);
  },function(x$7)
  {
   return g$4(Global.id(x$7));
  }];
  function g$5(v$2)
  {
   return Serializer.ifUndef(0,v$2);
  }
  SC$1.serInt=[function(v$2)
  {
   return(function($6)
   {
    return function($7)
    {
     return $6(Utils.prettyPrint($7));
    };
   }(Global.id))(v$2);
  },function(x$7)
  {
   return g$5(Global.id(x$7));
  }];
  function g$6(v$2)
  {
   return Serializer.ifUndef(false,v$2);
  }
  SC$1.serBool=[function(v$2)
  {
   return(function($6)
   {
    return function($7)
    {
     return $6(Utils.prettyPrint($7));
    };
   }(Global.id))(v$2);
  },function(x$7)
  {
   return g$6(Global.id(x$7));
  }];
  function g$7(v$2)
  {
   return Serializer.ifUndef("",v$2);
  }
  SC$1.serString=[function(a$5)
  {
   return JSON.stringify(((Provider.Id())())(a$5));
  },function(x$7)
  {
   return g$7(Global.id(x$7));
  }];
  function g$8(v$2)
  {
   return(function($6)
   {
    return function($7)
    {
     return $6(Utils.prettyPrint($7));
    };
   }(Global.id))(v$2);
  }
  function g$9(v$2)
  {
   return Serializer.ifUndef(0,v$2);
  }
  SC$1.serDate=[function(x$7)
  {
   return g$8(Global.id(x$7));
  },(f$3=function(x$7)
  {
   return g$9(Global.id(x$7));
  },function(x$7)
  {
   var l;
   l=f$3(x$7);
   return l;
  })];
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$1.rexEmail="(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*";
  SC$1.observers=List.T.Empty;
  SC$1.css="\r\n                .tab-panel {\r\n                 overflow  : hidden   ;\r\n                 display   : flex     ;\r\n                 flex-flow : column   ;\r\n                 background: lightgray;\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                }\r\n                .tab-content {\r\n                 flex      : 1 1     ;\r\n                 overflow  : auto    ;\r\n                 position  : relative;\r\n                }\r\n                .tab-children {\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                 position  : absolute;\r\n                 display   : grid    ;\r\n                }\r\n                .tab-strip {\r\n                 padding   : 0pt     ;\r\n                 flex      : 0 0     ;\r\n                }\r\n                .tab {\r\n                 border     : 0.2pt solid transparent;\r\n                 padding    : 0pt 4pt;\r\n                 display    : inline-block;\r\n                 font-family: sans-serif;\r\n                 font-weight: 200;\r\n                 font-size  : small;\r\n                 color      : #666;\r\n                 cursor     : pointer;\r\n                }\r\n                .top>.tab {\r\n                 border-radius: 2pt 2pt 0pt 0pt;\r\n                 border-bottom-width: 0pt;\r\n                 vertical-align: bottom;\r\n                }\r\n                .bottom>.tab {\r\n                 border-top-width: 0pt;\r\n                 border-radius: 0pt 0pt 2pt 2pt;\r\n                 vertical-align: top;\r\n                }\r\n                .horizontal>.tab:not(:first-child) {\r\n                 border-left-width: 0pt;\r\n                }\r\n                .tab.hovering {\r\n                 background: red;\r\n                }\r\n                .tab.selected {\r\n                 background: white;\r\n                 border-left-width: 0.2pt;\r\n                 color: black;\r\n                 font-weight: 500;\r\n                 border-color: black;\r\n                }\r\n                .horizontal>.tab.selected {\r\n                 border-left-width: 0.2pt;\r\n                }\r\n                ::slotted(*              ) { \r\n                 width : 100%;\r\n                 height: 100%;\r\n                }\r\n                        ";
  SC$1.init=Lazy.Create(function()
  {
   var o;
   o=new WcTabStripT.New();
   WebComponent.defineWebComponent("wcomp-tabstrip",WcTabStripT.Constructor,self.FsRoot.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New);
  });
  SC$1.layoutHorizontal=Runtime.Curried(function($6,$7,$8,$9,$10)
  {
   return Doc.get_Empty();
  },5);
  SC$1.layoutVertical=Runtime.Curried(function($6,$7,$8,$9,$10)
  {
   return Doc.get_Empty();
  },5);
  SC$1.loader=(b=null,Concurrency.Delay(function()
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
  }));
  SC$1.html="\r\n            <div style=\"display:none\" >\r\n                <div links>\r\n                    <link  href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" type=\"text/css\" rel=\"stylesheet\">\r\n                    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"   type=\"text/javascript\"></script>\r\n                </div>\r\n                <div ws-template=\"AppFramework\" style=\"height: calc(100vh - 4px); width: calc(100vw - 4px) \" class=\"relative\" >\r\n                    <div ws-hole=\"MainClient\"></div>\r\n                    <div class=\"AppFrameworkGo\"><button ws-onclick=\"GoClient\">${MainDoc}</button></div>\r\n                </div>\r\n                <div ws-template=\"VSplitter1\" class=\"versplitter\" ws-attr=\"Attrs\" vertical>\r\n                    <div style=\"min-width :Calc((100% - ${gap}) *        ${perc}  / 100);max-width :Calc((100% - ${gap}) *        ${perc}  / 100)\">${doc1}</div>\r\n                    <div style=\"min-width :             ${gap}\" ws-onmousedown=\"MouseDown\" ></div>\r\n                    <div style=\"min-width :Calc((100% - ${gap}) * (100 - ${perc}) / 100);max-width :Calc((100% - ${gap}) * (100 - ${perc}) / 100)\">${doc2}</div>\r\n                </div>\r\n                <div ws-template=\"HSplitter1\" class=\"horsplitter\" ws-attr=\"Attrs\">\r\n                    <div style=\"min-height:Calc((100% - ${gap}) *        ${perc}  / 100);max-height:Calc((100% - ${gap}) *        ${perc}  / 100)\">${doc1}</div>\r\n                    <div style=\"min-height:             ${gap}\" ws-onmousedown=\"MouseDown\" ></div>\r\n                    <div style=\"min-height:Calc((100% - ${gap}) * (100 - ${perc}) / 100);max-height:Calc((100% - ${gap}) * (100 - ${perc}) / 100)\">${doc2}</div>\r\n                </div>\r\n                <style>\r\n                    .horsplitter                    { display: flex; flex-direction:column              } \r\n                    .horsplitter > div:nth-child(2) { background: #eef; cursor: row-resize; z-index:400 }\r\n                    .horsplitter > div              { overflow: hidden                                  }\r\n                    .versplitter                    { display: flex; flex-direction:row                 } \r\n                    .versplitter > div:nth-child(2) { background: #eef; cursor: col-resize; z-index:400 }\r\n                    .versplitter > div              { overflow: hidden                                  }\r\n                </style>\r\n                <style>\r\n                    .AppFrameworkGo {\r\n                        max-width: 2px;\r\n                        max-height: 2px;\r\n                        z-index: 4000;\r\n                        overflow: hidden;\r\n                        position: fixed;\r\n                        top: 0px;\r\n                        left: 0px;\r\n                    }\r\n                </style>\r\n                <div ws-template=\"FixedSplitterVer\" \r\n                    style=\"display: grid; \r\n                           grid-gap: 0px; \r\n                           box-sizing: border-box; \r\n                           height: 100%;\r\n                           width : 100%;\r\n                           grid-template-areas: 'one two'; \r\n                           grid-template-rows   :100%; \r\n                           overflow: hidden; \r\n                           grid-template-columns: ${PartSizes}\"  >\r\n                   <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n                   <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"FixedSplitterHor\" \r\n               style=\"display: grid; \r\n                      grid-gap: 0px; \r\n                      box-sizing: border-box; \r\n                      height: 100%;\r\n                      width : 100%;\r\n                      grid-template-areas: 'one' 'two'; \r\n                      grid-template-columns:100%; \r\n                      overflow: hidden; \r\n                      grid-template-rows   : ${PartSizes}\"  >\r\n              <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n              <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"WCompSplitterHor\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid;\r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one' 'two'; \r\n                            grid-template-columns:100%; \r\n                            overflow: hidden; \r\n                            grid-template-rows   : ${PartSizes}\" \r\n                     >\r\n                     <slot></slot>\r\n                    <slot name=\"splitter\">  <div style=\"grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-row:2; grid-column:1 / 1 ; \r\n                            cursor: row-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            height: ${Gap}; \r\n                            margin-top :-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>        \r\n                <div ws-template=\"WCompSplitterVer\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid; \r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one two'; \r\n                            grid-template-rows   :100%; \r\n                            overflow: hidden; \r\n                            grid-template-columns: ${PartSizes}\"  >\r\n                    <slot></slot>\r\n                    <slot name=\"splitter\"> <div style=\"grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-column:2; grid-row:1 / 1\r\n                            cursor: column-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            width: ${Gap}; \r\n                            margin-left:-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>\r\n                <div ws-template=\"AppFwkClient\" >\r\n                    <ws-FixedSplitterHor>\r\n                        <PartSizes>55px calc(100% - 55px)</PartSizes>\r\n                        <First>\r\n                            <span style=\"display: grid;\r\n                                  grid-template-columns: 30% 20% 20% 10%;\r\n                                  grid-gap: 25px;\r\n                                \">\r\n                                <div class=\"mainTitle\">AppFramework</div>\r\n                            </span>\r\n                        </First>\r\n                        <Second>\r\n                                <ws-FixedSplitterVer>\r\n                                    <PartSizes>calc(100% - 2px) 2px</PartSizes>\r\n                                    <First>\r\n                                        <wcomp-splitter vertical value=\"18\" max=\"100\">\r\n                                            <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\" >\r\n                                                <div ws-template=\"Tile\">\r\n                                                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                                                    ws-ondrag=\"Drag\"\r\n                                                    ws-ondragover=\"DragOver\"\r\n                                                    ws-ondrop=\"Drop\"\r\n                                                   >\r\n                                                   <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                                                   <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                                                   <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                                               </div>\r\n                                       \r\n                                                </div>\r\n                                            </div></div>\r\n                                            <wcomp-splitter vertical value=\"80\" min=\"30\" max=\"100\">\r\n                                                <ws-FixedSplitterHor>\r\n                                                    <PartSizes>32px calc(100% - 32px)</PartSizes>\r\n                                                    <First>\r\n                                                        <div>\r\n                                                            <div class=\"input-group\">\r\n                                                                <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </First>\r\n                                                    <Second>\r\n                                                        <div style=\"overflow:auto; display:flex; flex-direction:column\">\r\n                                                            <div>\r\n                                                                <h3>Vars:</h3>\r\n                                                                <table style=\"overflow:auto;width:100%\" class=\"table table-condensed table-striped\">\r\n                                                                    <thead>\r\n                                                                        <th style=\"width: 10%  \">Name</th>\r\n                                                                        <th style=\"width: 90% \">Value</th>\r\n                                                                    </thead>\r\n                                                                    <tbody ws-hole=\"Vars\">\r\n                                                                    <tr ws-template=\"NameValueInput\" >\r\n                                                                        <td >${Name}:</td>\r\n                                                                        <td>\r\n                                                                        <textarea placeholder=\"Value...\" ws-var=\"Value\" style=\"resize:vertical; width:100%\" spellcheck=\"false\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <h3>Views:</h3>\r\n                                                                <table style=\"overflow:auto\" class=\"table table-condensed table-striped\" >\r\n                                                                    <thead>\r\n                                                                        <th style=\"width: 10%  \">Name</th>\r\n                                                                        <th style=\"width: 90% \">Value</th>\r\n                                                                    </thead>\r\n                                                                    <tbody ws-hole=\"Views\" >\r\n                                                                    <tr ws-template=\"NameValue\" class=\"\">\r\n                                                                        <td>${Name}:</td>\r\n                                                                        <td>${Value}</td>\r\n                                                                    </tr>\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <h3>Docs:</h3>\r\n                                                                <div ws-hole=\"Docs\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <h3>Queries:</h3>\r\n                                                                <table style=\"overflow:auto\" >\r\n                                                                    <tbody ws-hole=\"Queries\" >\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </Second>\r\n                                                </ws-FixedSplitterHor>\r\n                                        <div style=\"font-size:small; overflow: hidden; display: flex; flex-direction: column;\"  class=\"absolute\" ws-hole=\"Actions\" >\r\n                                            <button ws-template=\"Action\" style=\"font-size:small\" ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\" ws-attr=\"Attrs\" >${Name}</button>\r\n                                        </div>\r\n                                            </wcomp-splitter>\r\n                                        </wcomp-splitter>\r\n                                    </First>\r\n                                    <Second>\r\n                                                <wcomp-tabstrip >\r\n                                                    <div tabname=\"Properties\">\r\n                                                        <div>\r\n                                                            <table style=\"border-spacing:0px\">\r\n                                                                <thead>\r\n                                                                    <th style=\"width: 30%  \">Name</th>\r\n                                                                    <th style=\"width: 70% \">Value</th>\r\n                                                                </thead>\r\n                                                                <tbody ws-hole=\"Properties\" ws-children-template=\"Property\">\r\n                                                                    <tr ws-onclick=\"Select\" style=\"margin-bottom: 2px\" class=\"level  \">\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <input ws-var=\"Name\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Property...\">\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <textarea ws-var=\"Value\" class=\"form-control\" id=\"\" placeholder=\"Value...\"></textarea>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div style=\" cursor: pointer \" title=\"remove\">\r\n                                                                                <button ws-onclick=\"Remove\" class=\"delete is-small\">x</button>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </wcomp-tabstrip>\r\n                                    </Second>\r\n                                </ws-FixedSplitterVer>\r\n                        </Second>\r\n                    </ws-FixedSplitterHor>\r\n                </div>\r\n                <style style=\"display: none\">\r\n                        .Hidden     { display   : none         }\r\n                        table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                        td input.form-control { \r\n                            padding    : 0px; \r\n                            font-family: monospace;\r\n                            font-size  :   small;\r\n                            margin-top :   0px;\r\n                            margin-left: -2px;\r\n                            width      : 100%\r\n                        }\r\n                        td select {\r\n                            font-size : smaller;\r\n                            max-width : 8ch;\r\n                        }\r\n                        textarea {\r\n                           resize : vertical;\r\n                        }\r\n                        .tab-content {\r\n                            overflow: hidden\r\n                        }\r\n                        .tab-children {\r\n                            position:relative;\r\n                        }\r\n                        .tab-children>div>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        .relative {\r\n                            position:relative;\r\n                        }\r\n                        .relative>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                        table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                        table.table-striped    tbody input              { background: transparent; border: none}\r\n                        table.table-striped    tbody select             { background: transparent; border: none}\r\n                        table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                        table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                        table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                        table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                        table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                        table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                                   border-bottom: solid thin blue     ; } \r\n                        table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                        table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                        thead { color: gray }\r\n                        h3 { \r\n                            color: gray;\r\n                            line-height: 1em;\r\n                        }\r\n                        button       { border: solid thin transparent ; border-radius: 3px; }\r\n                        button:hover { border: solid thin blue }\r\n                        .indenter { position  : absolute; \r\n                                    top:0px; bottom:0px; left:0px; \r\n                                    background: white; color:white;\r\n                                    border-right: gray thin dotted;\r\n                                    }\r\n                        body {\r\n                            color      : #333;\r\n                            font-size  : small;\r\n                            font-family: monospace;\r\n                            line-height: 1.2;\r\n                        }\r\n                        .mainTitle {  \r\n                            font-size: 48px;\r\n                            font-weight: 500;\r\n                            color: gray;\r\n                            margin-top: -12px;\r\n                        }\r\n                        .CodeMirror {\r\n                            height: 100%;\r\n                        }\r\n                        \r\n                      \r\n                        body { margin: 0px }     \r\n                             \r\n                        div textarea {\r\n                            font-family     : monospace;\r\n                        }\r\n                        .code-editor-list-tile {\r\n                            white-space     : nowrap; \r\n                            border-style    : solid none none;\r\n                            border-color    : white;\r\n                            border-width    : 1px;\r\n                            background-color: #D8D8D8;\r\n                            display         : flex;\r\n                        }\r\n                        .code-editor-list-text{\r\n                            padding         : 1px 10px 1px 5px;\r\n                            overflow        : hidden;\r\n                            text-overflow   : ellipsis;\r\n                            white-space     : nowrap;\r\n                            flex            : 1;\r\n                        }\r\n                        \r\n                        .code-editor-list-tile span.node.ErrorMsg {\r\n                            background-color: red\r\n                        }\r\n                        .code-editor-list-tile span.node.expanded::before {\r\n                            content: \"-\"\r\n                        }\r\n                        .code-editor-list-tile span.node.collapsed::before {\r\n                            content: \"+\"\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor {\r\n                            font-weight     : bold;\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.indirect-predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.included-predecessor {\r\n                            color           : chocolate;\r\n                        }\r\n                        .code-editor-list-tile.selected {\r\n                            background-color: #77F;\r\n                            color           : white;\r\n                        }\r\n                        .code-editor-list-tile.codeSnippet {\r\n                            text-decoration: underline\r\n                        }\r\n                        .code-editor-list-tile:hover {\r\n                            background      : lightgray;\r\n                        }\r\n                        .code-editor-list-tile.selected:hover {\r\n                            background      : blue;\r\n                        }\r\n                        .code-editor-list-tile>.predecessor {\r\n                            font-weight     : bold;\r\n                            border-style    : inset;\r\n                            border-width    : 1px;\r\n                            text-align      : center;\r\n                            color           : transparent;\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        \r\n                        .CodeMirror { height: 100%; }\r\n                        \r\n                        .node {\r\n                            background-color: white; \r\n                            width           : 2ch; \r\n                            color           : #A03; \r\n                            font-weight     : bold; \r\n                            text-align      : center;\r\n                            font-family     : arial;\r\n                        }\r\n                        .Warning { text-decoration: underline lightblue } \r\n                        .Error   { text-decoration: underline red       } \r\n                        \r\n                    </style>\r\n            </div>\r\n            ";
  SC$1.plugIns=new ListModel$1.New$1(function(plg)
  {
   return plg.plgName;
  });
  SC$1.mainDocV=Var$1.Create$1("AppFramework.AppFwkClient");
  SC$1.TemplateFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\LayoutEngine\\website\\AppFramework.html";
  SC$1.selectionPlugInO=Var$1.Create$1({
   $:1,
   $0:new PlugInName({
    $:0,
    $0:"AppFramework"
   })
  });
  SC$1.currentPlugInW=View$1.Map(function(o)
  {
   return o==null?AppFramework.defaultPlugIn():o.$0;
  },View$1.Bind(function(a$5)
  {
   return a$5==null?View$1.Const({
    $:1,
    $0:AppFramework.defaultPlugIn()
   }):AppFramework.plugIns().TryFindByKeyAsView(a$5.$0);
  },AppFramework.selectionPlugInO().get_View()));
  SC$1.currentPlugInV=new FromView.New(AppFramework.currentPlugInW(),function(a$5)
  {
   AppFramework.plugIns().Append(a$5);
  });
  SC$1.AppFwkClient=Lazy.Create(function()
  {
   var b$22,Q,A,D,V,V$1,P$2,p$20,i$3;
   return(b$22=(Q=AppFramework.renderQueries(),(A=AppFramework.renderActions(),(D=AppFramework.renderDocs(),(V=AppFramework.renderViews(),(V$1=AppFramework.renderVars(),(P$2=AppFramework.renderPlugIns(),ProviderBuilder.Make().WithHole({
    $:0,
    $0:"plugins",
    $1:P$2
   })).WithHole({
    $:2,
    $0:"pluginname",
    $1:View$1.Map(function($6)
    {
     return $6.plgName.get_Id();
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
   })),(p$20=Handler$1.CompleteHoles(b$22.k,b$22.h,[]),(i$3=new TemplateInstance.New(p$20[1],FSharpStation_Templates.appfwkclient(p$20[0])),(b$22.i=i$3,i$3)))).get_Doc();
  });
  SC$1.plugin=new PlugInBuilder.New();
  SC$1.a11V=Var$1.Create$1(11);
  SC$1.mainX={
   $:0,
   $0:AppFramework.a11V().get_View()
  };
  SC$1.baseView=AppFramework.mainDocV().get_View();
  SC$1.op_LessMultiplyGreater=function(f$26)
  {
   return function(v$2)
   {
    return Val.apply(f$26,v$2);
   };
  };
  SC$1.getDocFromReferenceD=Depend.dependByName("getDocFromReference",Extract0.getDocFromReference,Global.id);
  SC$1.getTextActViewFromReferenceD=Depend.dependByName("getTextActViewFromReference",Extract0.getTextActViewFromReference,Global.id);
  SC$1.getDocFromTextTypesD=(b$1=Depend.depend(),b$1.Delay(function()
  {
   return b$1.Bind(Extract0.getDocFromReferenceD(),function(a$5)
   {
    var f$26;
    function m$4(a$6)
    {
     return a$6.$==1?a$5(a$6.$0):Doc.TextNode(a$6.$0);
    }
    return b$1.Return((f$26=function(l)
    {
     return List.map(m$4,l);
    },function(x$7)
    {
     return Doc.Concat(f$26(x$7));
    }));
   });
  }));
  SC$1.extractDocD=(b$2=Depend.depend(),b$2.Delay(function()
  {
   return b$2.Bind(Extract0.getDocFromTextTypesD(),function(a$5)
   {
    return b$2.Return(function(x$7)
    {
     return a$5(Extract0.getTextData(x$7));
    });
   });
  }));
  SC$1.getTextValFromSeqD=(b$3=Depend.depend(),b$3.Delay(function()
  {
   return b$3.Bind(Extract0.getTextActViewFromReferenceD(),function(a$5)
   {
    var f$26,g$22,f$27;
    function f$28(a$6)
    {
     var r;
     return a$6.$==1?(r=a$6.$0,{
      $:0,
      $0:View$1.Map(function(a$7)
      {
       return a$7.$==1?(function($6)
       {
        return function($7)
        {
         return $6("@{"+Utils.toSafe($7)+"}");
        };
       }(Global.id))(r):a$7.$0;
      },a$5(r))
     }):{
      $:1,
      $0:a$6.$0
     };
    }
    return b$3.Return((f$26=function(l)
    {
     return Val.traverseListApp(f$28,l);
    },(g$22=(f$27={
     $:1,
     $0:function(s$1)
     {
      return Strings.concat("",s$1);
     }
    },function(v$2)
    {
     return Val.apply(f$27,v$2);
    }),function(x$7)
    {
     return g$22(f$26(x$7));
    })));
   });
  }));
  SC$1.getTextValD=Operators$2.op_GreaterMultiplyGreater(Extract0.getTextData,Extract0.getTextValFromSeqD());
  SC$1.extractAtsD=(b$4=Depend.depend(),b$4.Delay(function()
  {
   return b$4.Bind(Extract0.getTextValD(),function(a$5)
   {
    return b$4.Bind(Extract0.getTextActViewFromReferenceD(),function(a$6)
    {
     return b$4.Return(function(txt)
     {
      var a$7,m$4;
      function parseAttr(t$25)
      {
       var m$5,sty,m$6,atv,atn,m$7,$6;
       m$5=Strings.SplitChars(t$25,[":"],0);
       return!Unchecked.Equals(m$5,null)&&m$5.length===2?(sty=Arrays.get(m$5,1),{
        $:0,
        $0:Arrays.get(m$5,0),
        $1:sty
       }):(m$6=Arrays.map(Strings.Trim,Strings.SplitChars(t$25,["="],0)),!Unchecked.Equals(m$6,null)&&m$6.length===2?(atv=Arrays.get(m$6,1),(atn=Arrays.get(m$6,0),(m$7=Extract0.getTextData(atv),m$7.$==1&&(m$7.$0.$==1&&(m$7.$1.$==0&&($6=m$7.$0.$0,true)))?{
        $:2,
        $0:atn,
        $1:$6
       }:{
        $:1,
        $0:atn,
        $1:atv
       }))):!Unchecked.Equals(m$6,null)&&m$6.length===1?{
        $:1,
        $0:Arrays.get(m$6,0),
        $1:""
       }:AAttr.AEmpty);
      }
      function splitAttrs(txt$1)
      {
       return Seq$1.filter(function(y)
       {
        return""!==y;
       },Seq$1.map(Strings.Trim,Strings.SplitChars(txt$1,[";"],0)));
      }
      function addedListeners(el)
      {
       var v$2;
       v$2=el.addedListeners;
       return!v$2?[]:v$2;
      }
      function setCustomAttr(atn,el,a$8)
      {
       var act,p$20,same,i$3,$6;
       function listener(ev)
       {
        AppFramework.callFunction(el,ev,act.actFunction);
       }
       function f$26(t$25)
       {
        return t$25[0];
       }
       function g$23(y)
       {
        return atn===y;
       }
       if(a$8.$==1)
        {
         act=a$8.$0;
         p$20=Arrays.partition(function(x$7)
         {
          return g$23(f$26(x$7));
         },addedListeners(el));
         same=p$20[0];
         for(i$3=0,$6=same.length-1;i$3<=$6;i$3++)(function()
         {
          return el.removeEventListener(atn,(Arrays.get(same,i$3))[1]);
         }());
         el.addEventListener(atn,listener,false);
         el.addedListeners=p$20[1].concat([[atn,listener]]);
         return;
        }
       else
        try
        {
         return el.setAttribute(atn,Strings.Trim(a$8.$0));
        }
        catch(e)
        {
         return(function($7)
         {
          return function($8)
          {
           return $7(Utils.prettyPrint($8));
          };
         }(function(s$2)
         {
          console.log(s$2);
         }))(e);
        }
      }
      function viewAttr(atn)
      {
       function s$2($6,$7)
       {
        return setCustomAttr(atn,$6,$7);
       }
       return function(v$2)
       {
        return AttrModule.DynamicCustom(function($6)
        {
         return function($7)
         {
          return s$2($6,$7);
         };
        },v$2);
       };
      }
      function constAttr(a$8)
      {
       var x$7;
       return a$8.$==1?AppFramework.valToAttr(a$8.$0,a$5(a$8.$1)):a$8.$==2?(x$7=a$6(a$8.$1),(viewAttr(a$8.$0))(x$7)):a$8.$==3?Attrs.EmptyAttr():AppFramework.valToStyle(a$8.$0,a$5(a$8.$1));
      }
      function s$1(el,sq)
      {
       var f$26,styles,atts,attsNow,names,i$3,e,nm,i$4,e$1,f$27,a$8,i$5,$6,f$28,i$6,e$2;
       function m$5(t$25)
       {
        return t$25[0];
       }
       function g$23(a$9)
       {
        return new FSharpSet.New(a$9);
       }
       styles=Seq$1.choose(function(a$9)
       {
        return a$9.$==0?{
         $:1,
         $0:a$9.$0+":"+a$9.$1
        }:null;
       },sq);
       atts=Arrays.ofSeq(Seq$1.delay(function()
       {
        return Seq$1.append(!Seq$1.isEmpty(styles)?[["style",Strings.concat(";",styles)]]:[],Seq$1.delay(function()
        {
         return Seq$1.choose(function(a$9)
         {
          return a$9.$==1?{
           $:1,
           $0:[a$9.$0,a$9.$1]
          }:a$9.$==2?{
           $:1,
           $0:[a$9.$0,a$9.$1]
          }:a$9.$==3?null:null;
         },sq);
        }));
       }));
       attsNow=List.ofSeq(Seq$1.delay(function()
       {
        return Seq$1.map(function(i$7)
        {
         return[el.attributes.item(i$7).name,el.attributes.item(i$7).value];
        },List.ofSeq(Operators$7.range(0,el.attributes.length-1)));
       }));
       names=(f$26=function(s$2)
       {
        return Seq$1.map(m$5,s$2);
       },function(x$7)
       {
        return g$23(f$26(x$7));
       });
       i$3=FSharpSet.op_Subtraction(names(attsNow),names(atts));
       e=Enumerator.Get(i$3);
       try
       {
        while(e.MoveNext())
         {
          nm=e.Current();
          try
          {
           el.attributes.removeNamedItem(nm);
          }
          catch(e$3)
          {
           ((function($7)
           {
            return function($8)
            {
             return $7(Utils.prettyPrint($8));
            };
           }(function(s$2)
           {
            console.log(s$2);
           }))(e$3));
          }
         }
       }
       finally
       {
        if(typeof e=="object"&&"Dispose"in e)
         e.Dispose();
       }
       i$4=FSharpSet.op_Subtraction(new FSharpSet.New(atts),new FSharpSet.New(attsNow));
       e$1=Enumerator.Get(i$4);
       try
       {
        while(e$1.MoveNext())
         {
          f$27=e$1.Current();
          try
          {
           el.setAttribute(f$27[0],f$27[1]);
          }
          catch(e$4)
          {
           ((function($7)
           {
            return function($8)
            {
             return $7(Utils.prettyPrint($8));
            };
           }(function(s$2)
           {
            console.log(s$2);
           }))(e$4));
          }
         }
       }
       finally
       {
        if(typeof e$1=="object"&&"Dispose"in e$1)
         e$1.Dispose();
       }
       a$8=addedListeners(el);
       for(i$5=0,$6=a$8.length-1;i$5<=$6;i$5++){
        f$28=Arrays.get(a$8,i$5);
        try
        {
         el.removeEventListener(f$28[0],f$28[1]);
        }
        catch(e$5)
        {
         ((function($7)
         {
          return function($8)
          {
           return $7(Utils.prettyPrint($8));
          };
         }(function(s$2)
         {
          console.log(s$2);
         }))(e$5));
        }
       }
       i$6=Seq$1.choose(function(a$9)
       {
        return a$9.$==2?{
         $:1,
         $0:[a$9.$0,a$9.$1]
        }:null;
       },sq);
       e$2=Enumerator.Get(i$6);
       try
       {
        while(e$2.MoveNext())
         (function()
         {
          var f$29,$7;
          f$29=e$2.Current();
          return View$1.Get(($7=f$29[0],function($8)
          {
           return setCustomAttr($7,el,$8);
          }),a$6(f$29[1]));
         }());
        return;
       }
       finally
       {
        if(typeof e$2=="object"&&"Dispose"in e$2)
         e$2.Dispose();
       }
      }
      function g$22(s$2)
      {
       return Seq$1.map(parseAttr,s$2);
      }
      a$7=Arrays.ofSeq(splitAttrs(txt));
      return!Unchecked.Equals(a$7,null)&&a$7.length===1?[(m$4=a$5(Arrays.get(a$7,0)),m$4.$==0?AttrModule.DynamicCustom(function($6)
      {
       return function($7)
       {
        return s$1($6,$7);
       };
      },View$1.Map(function(x$7)
      {
       return g$22(splitAttrs(x$7));
      },m$4.$0)):constAttr(parseAttr(m$4.$0)))]:Seq$1.map(function(x$7)
      {
       return constAttr(parseAttr(x$7));
      },a$7);
     });
    });
   });
  }));
  SC$1.extractTextD=(b$5=Depend.depend(),b$5.Delay(function()
  {
   return b$5.Bind(Extract0.getTextValD(),function(a$5)
   {
    return b$5.Return(function(x$7)
    {
     return Val.toView(a$5(x$7));
    });
   });
  }));
  SC$1.currentPlugInNameDef=new PlugInName({
   $:0,
   $0:"NewLYx"
  });
  SC$1.currentPlugInNameD=Depend.dependByName("currentPlugInName",AppFramework.currentPlugInNameDef(),Global.id);
  SC$1.getDocwD=(b$6=Depend.depend(),b$6.Delay(function()
  {
   return b$6.Bind(AppFramework.currentPlugInNameD(),function(a$5)
   {
    return b$6.Return(function(r)
    {
     var p$20,pName,oName;
     p$20=(AppFramework.splitName(a$5))(r);
     pName=p$20[0];
     oName=p$20[1];
     return Doc.BindView(function(docO)
     {
      var o;
      function d()
      {
       return(function($6)
       {
        return function($7)
        {
         return $6("Reference not found @{"+Utils.toSafe($7)+"}");
        };
       }(Global.id))(r);
      }
      o=docO==null?null:{
       $:1,
       $0:AppFramework.getActualDoc(docO.$0)
      };
      return o==null?Doc.TextView(View$1.Map(function(o$1)
      {
       return o$1==null?d():o$1.$0;
      },AppFramework.tryGetWoWW(pName,oName))):o.$0;
     },AppFramework.tryGetDocW(pName,oName));
    });
   });
  }));
  SC$1.getDocD=(b$7=Depend.depend(),b$7.Delay(function()
  {
   return b$7.Bind(AppFramework.currentPlugInNameD(),function(a$5)
   {
    return b$7.Return(function(r)
    {
     var p$20,pName,oName,o,o$1,o$2;
     p$20=(AppFramework.splitName(a$5))(r);
     pName=p$20[0];
     oName=p$20[1];
     o=(o$1=AppFramework.tryGetDoc(pName,oName),o$1==null?null:{
      $:1,
      $0:AppFramework.getActualDoc(o$1.$0)
     });
     return o==null?Doc.TextView((o$2=AppFramework.tryGetWoW(pName,oName),o$2==null?View$1.Const((function($6)
     {
      return function($7)
      {
       return $6("Reference not found @{"+Utils.toSafe($7)+"}");
      };
     }(Global.id))(r)):o$2.$0)):o.$0;
    });
   });
  }));
  SC$1.getTextActViewD=(b$8=Depend.depend(),b$8.Delay(function()
  {
   return b$8.Bind(AppFramework.currentPlugInNameD(),function(a$5)
   {
    return b$8.Return(function(r)
    {
     var p$20,pName,oName;
     p$20=(AppFramework.splitName(a$5))(r);
     pName=p$20[0];
     oName=p$20[1];
     return View$1.Bind(function(a$6)
     {
      function d()
      {
       return(function($6)
       {
        return function($7)
        {
         return $6("Text Reference not found @{"+Utils.toSafe($7)+"}");
        };
       }(Global.id))(r);
      }
      return a$6==null?View$1.Map(function(a$7)
      {
       return{
        $:0,
        $0:a$7
       };
      },View$1.Map(function(o)
      {
       return o==null?d():o.$0;
      },AppFramework.tryGetWoWW(pName,oName))):View$1.Const({
       $:1,
       $0:a$6.$0
      });
     },AppFramework.tryGetActW(pName,oName));
    });
   });
  }));
  SC$1.extractTextD$1=Extract0.extractTextD();
  SC$1.extractDocD$1=Extract0.extractDocD();
  SC$1.extractAtsD$1=Extract0.extractAtsD();
  SC$1.extractAttD=(b$9=Operators$2.depend(),b$9.Delay(function()
  {
   return b$9.Bind(AppFramework.extractAtsD(),function(a$5)
   {
    return b$9.Return(function(p$20)
    {
     return AttrProxy.Concat(a$5(p$20));
    });
   });
  }));
  SC$1.defPlugInName=new PlugInName({
   $:0,
   $0:"AppFramework"
  });
  function f$4(extractAts,extractDoc)
  {
   return function(attrs)
   {
    return function(labelName)
    {
     function f$26(_var)
     {
      return Doc.Element("div",extractAts(attrs),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[extractDoc(labelName)]),Doc.Input([AttrProxy.Create("class","form-control")],_var)])]);
     }
     return function(v$2)
     {
      return AppFramework.docWithVar(f$26,v$2);
     };
    };
   };
  }
  SC$1.inputLabel=AppFramework.depWithExtracts(function($6,$7,$8)
  {
   return f$4.apply(null,[$6,$7,$8]);
  });
  function f$5(extractAts,attrs)
  {
   var f$26,a$5;
   f$26=(a$5=extractAts(attrs),function(a$6)
   {
    return Doc.Input(a$5,a$6);
   });
   return function(v$2)
   {
    return AppFramework.docWithVar(f$26,v$2);
   };
  }
  SC$1.input=AppFramework.depWithExtracts(function($6)
  {
   return function($7)
   {
    return f$5($6,$7);
   };
  });
  function f$6(extractAts,attrs)
  {
   var f$26,a$5;
   f$26=(a$5=extractAts(attrs),function(a$6)
   {
    return Doc.InputArea(a$5,a$6);
   });
   return function(v$2)
   {
    return AppFramework.docWithVar(f$26,v$2);
   };
  }
  SC$1.textArea=AppFramework.depWithExtracts(function($6)
  {
   return function($7)
   {
    return f$6($6,$7);
   };
  });
  SC$1.htmlDoc=AppFramework.depWithExtracts(function($6,$7,extractText)
  {
   return function(html)
   {
    return Doc.BindView(Doc.Verbatim,extractText(html));
   };
  });
  SC$1.docReference=AppFramework.depWithExtracts(function($6,$7,extractText)
  {
   return function(docName)
   {
    var x$7;
    function f$26(a$5,a$6)
    {
     return function(f$27)
     {
      return(f$27(a$5))(a$6);
     };
    }
    return Doc.BindView(function(a$5)
    {
     var a$6;
     return a$5==null?(AppFramework.errDocf(function($8)
     {
      return function($9)
      {
       return $8("Doc not found: "+Utils.toSafe($9));
      };
     }))(docName):(a$6=AppFramework.Lazy(a$5.$0.docDoc),a$6.$==0?a$6.$0:a$6.$==1?a$6.$0():(AppFramework.errDocf(function($8)
     {
      return function($9)
      {
       return $8("Doc parameters not resolved: "+GeneratedPrintf.p($9));
      };
     }))(a$5.$0));
    },View$1.Bind(function(b$22)
    {
     return(function($8)
     {
      return f$26($8[0],$8[1]);
     }(b$22))(function($8)
     {
      return function($9)
      {
       return AppFramework.tryGetDocW($8,$9);
      };
     });
    },(x$7=extractText(docName),View$1.Map(AppFramework.splitName(AppFramework.defPlugInName()),x$7))));
   };
  });
  SC$1.setVar0=AppFramework.depWithExtracts(function($6,$7,extractText)
  {
   return function(t$25)
   {
    var value,x$7,t$26;
    value=t$25[1];
    x$7=(t$26=AppFramework.getParmRef(t$25[0]),AppFramework.tryGetVoV(t$26[0],t$26[1]));
    (Option.iter(function(_var)
    {
     View$1.Get(function(a$5)
     {
      _var.Set(a$5);
     },extractText(value));
    }))(x$7);
   };
  });
  function f$7(t$25,t$26)
  {
   var text,x$7,t$27;
   text=t$26[1];
   x$7=(t$27=AppFramework.getParmRef(t$26[0]),AppFramework.tryGetVoV(t$27[0],t$27[1]));
   (Option.iter(function(_var)
   {
    _var.Set(text);
   }))(x$7);
  }
  SC$1.setVarDirect0=AppFramework.depWithExtracts(function($6,$7,$8)
  {
   var $9;
   $9=[$6,$7,$8];
   return function($10)
   {
    return f$7($9,$10);
   };
  });
  function f$8(t$25,varN)
  {
   var o,o$1,t$26;
   o=(o$1=(t$26=AppFramework.getParmRef(varN),AppFramework.tryGetWoW(t$26[0],t$26[1])),o$1==null?null:View$1.TryGet(o$1.$0));
   return o==null?null:o.$0;
  }
  SC$1.getValDirect=AppFramework.depWithExtracts(function($6,$7,$8)
  {
   var $9;
   $9=[$6,$7,$8];
   return function($10)
   {
    return f$8($9,$10);
   };
  });
  function f$9(t$25,t$26)
  {
   var eventD,x$7,t$27;
   eventD=t$26[1];
   x$7=(t$27=AppFramework.getParmRef(t$26[0]),AppFramework.tryGetVoV(t$27[0],t$27[1]));
   (Option.iter(function(_var)
   {
    AppFramework.draggingEvent(true,_var,eventD);
   }))(x$7);
  }
  SC$1.dragSplitter0=AppFramework.depWithExtracts(function($6,$7,$8)
  {
   var $9;
   $9=[$6,$7,$8];
   return function($10)
   {
    return f$9($9,$10);
   };
  });
  SC$1.trigAct=AppFramework.depWithExtracts(function($6,$7,extractText)
  {
   return function(trigger)
   {
    return function(actN)
    {
     function f$26(a$5)
     {
      var x$7,t$25;
      if(a$5===null)
       ;
      else
       {
        x$7=(t$25=AppFramework.getParmRef(actN),AppFramework.tryGetAct(t$25[0],t$25[1]));
        (Option.iter(function(a$6)
        {
         AppFramework.callFunction(null,null,a$6.actFunction);
        }))(x$7);
       }
     }
     function g$22()
     {
      return Doc.Element("div",[],[]);
     }
     return Doc.BindView(function(x$7)
     {
      return g$22(f$26(x$7));
     },extractText(trigger));
    };
   };
  });
  SC$1.trigActChange=AppFramework.depWithExtracts(function($6,$7,extractText)
  {
   return function(trigger)
   {
    return function(actN)
    {
     var v$2,prior$1;
     function f$26(a$5)
     {
      var x$7,t$25;
      if(a$5===null)
       ;
      else
       {
        x$7=(t$25=AppFramework.getParmRef(actN),AppFramework.tryGetAct(t$25[0],t$25[1]));
        (Option.iter(function(a$6)
        {
         AppFramework.callFunction(null,null,a$6.actFunction);
        }))(x$7);
       }
     }
     function g$22()
     {
      return"";
     }
     return Doc.TextView(View$1.Map(function(x$7)
     {
      return g$22(f$26(x$7));
     },(v$2=extractText(trigger),(prior$1=[Var$1.Create$1(null)],(View$1.Sink(function(v$3)
     {
      if(!Unchecked.Equals(prior$1[0].Get(),v$3))
       prior$1[0].Set(v$3);
     },v$2),prior$1[0].get_View())))));
    };
   };
  });
  function f$10(t$25,actN,p1,p2)
  {
   var x$7,t$26;
   x$7=(t$26=AppFramework.getParmRef(actN),AppFramework.tryGetAct(t$26[0],t$26[1]));
   return(Option.iter(function(a$5)
   {
    AppFramework.callFunction(p1,p2,a$5.actFunction);
   }))(x$7);
  }
  SC$1.callAction0=AppFramework.depWithExtracts(function($6,$7,$8)
  {
   var $9;
   $9=[$6,$7,$8];
   return Runtime.Curried(f$10,3,[$9]);
  });
  SC$1.delayAction=AppFramework.depWithExtracts(function($6,$7,extractText)
  {
   return function(delay)
   {
    return function(actN)
    {
     var x$7,t$25;
     x$7=(t$25=AppFramework.getParmRef(actN),AppFramework.tryGetAct(t$25[0],t$25[1]));
     return(Option.iter(function(a$5)
     {
      var b$22;
      Concurrency.Start((b$22=null,Concurrency.Delay(function()
      {
       return Concurrency.Bind(View$1.GetAsync(extractText(delay)),function(a$6)
       {
        var o;
        return Concurrency.Bind(Concurrency.Sleep((o=(ParseO.parseIntO())(a$6),o==null?100:o.$0)),function()
        {
         AppFramework.callFunction(null,null,a$5.actFunction);
         return Concurrency.Zero();
        });
       });
      })),null);
     }))(x$7);
    };
   };
  });
  SC$1.select=AppFramework.depWithExtracts(function(extractAts,$6,extractText)
  {
   return Runtime.Curried3(function(attrs,none,vals)
   {
    function f$26(_var)
    {
     var valsW,varO;
     valsW=View$1.Map(function($7)
     {
      return List.ofSeq(Strings.SplitChars($7,[";"],0));
     },extractText(vals));
     varO=new FromView.New(View$1.Map2(function($7,$8)
     {
      return Seq$1.contains(Strings.Trim($7),$8)?{
       $:1,
       $0:Strings.Trim($7)
      }:null;
     },_var.get_View(),valsW),function(a$5)
     {
      var s$1;
      if(a$5!=null&&a$5.$==1)
       {
        s$1=a$5.$0;
        View$1.Get(function(vs)
        {
         if(Seq$1.contains(s$1,vs))
          _var.Set(s$1);
        },valsW);
       }
      else
       _var.Set("");
     });
     return Doc.SelectDynOptional(extractAts(attrs),none,Global.id,valsW,varO);
    }
    return function(v$2)
    {
     return AppFramework.docWithVar(f$26,v$2);
    };
   });
  });
  function f$11(extractAts,template,attrs,doc1,doc2)
  {
   function f$26(_var)
   {
    return Doc.Element("div",extractAts(attrs),[(AppFramework.docReference())(doc1),(AppFramework.docReference())(doc2)]);
   }
   return function(v$2)
   {
    return AppFramework.docWithVar(f$26,v$2);
   };
  }
  SC$1.splitterPerc=AppFramework.depWithExtracts(Runtime.Curried(f$11,5));
  function f$12(t$25)
  {
   return t$25[0];
  }
  function f$13(t$25)
  {
   return t$25[1];
  }
  AppFramework.addPlugIn((b$10=AppFramework.plugin(),b$10.AddAct(b$10.AddDoc(b$10.AddVar(b$10.Name(b$10.Yield(),"AppFramework"),"mainDocV",AppFramework.mainDocV()),"AppFwkClient",AppFramework.AppFwkClient()),"Hello",function()
  {
   self.alert("Hello!");
  })));
  AppFramework.addPlugIn((b$11=AppFramework.plugin(),b$11.AddViw(b$11.AddViw(b$11.AddViw(b$11.AddViw(b$11.AddViw(b$11.AddViw(b$11.AddQry(b$11.AddAct2(b$11.AddAct(b$11.AddAct2(b$11.AddAct2(b$11.AddAct2(b$11.AddAct2(b$11.AddDoc5(b$11.AddDoc3(b$11.AddDoc3(b$11.AddDoc4(b$11.AddDoc2(b$11.AddDoc2(b$11.AddDoc2(b$11.AddDoc2(b$11.AddDoc1(b$11.AddDoc1(b$11.Name(b$11.Yield(),"AF"),"DocReference",AppFramework.docReference(),"DocName"),"HtmlDoc",AppFramework.htmlDoc(),"Html"),"TrigAction",AppFramework.trigAct(),"Trigger","Action"),"TrigChange",AppFramework.trigActChange(),"Trigger","Action"),"Input",AppFramework.input(),"Attrs","Var"),"TextArea",AppFramework.textArea(),"Attrs","Var"),"Select",AppFramework.select(),"Attrs","None","Vals","Var"),"InputFile",Runtime.Curried3(AppFramework.inputFile),"Attrs","Label","Action"),"InputLabel",AppFramework.inputLabel(),"Attrs","Label","Var"),"SplitterPerc",AppFramework.splitterPerc(),"Template","Attrs","doc1","doc2","Var"),"SetVar",function(v$2)
  {
   return function(v$3)
   {
    return AppFramework.setVar(v$2,v$3);
   };
  },"Var","Value"),"SetVarDirect",function(v$2)
  {
   return function(v$3)
   {
    return AppFramework.setVarDirect(v$2,v$3);
   };
  },"Var","from"),"SetVarDirectD",function(v$2)
  {
   return function(v$3)
   {
    return AppFramework.setVarDirectD(v$2,v$3);
   };
  },"Var","from"),"DelayAction",AppFramework.delayAction(),"delay","Äction"),"Hello",function()
  {
   self.alert("Hello!");
  }),"DragSplitter",function(v$2)
  {
   return function(e)
   {
    return AppFramework.dragSplitter(v$2,e);
   };
  },"Var","dragEvent"),"getDocNames",function()
  {
   return Arrays.ofSeq(Seq$1.collect(function(plg)
   {
    return Seq$1.map(function(doc)
    {
     return plg.plgName.get_Id()+"."+doc.docName.get_Id();
    },plg.plgDocs);
   },(AppFramework.plugIns())["var"].Get()));
  }),"MouseX",View$1.Map(function(x$7)
  {
   return Global.String(f$12(x$7));
  },Mouse.get_Position())),"MouseY",View$1.Map(function(x$7)
  {
   return Global.String(f$13(x$7));
  },Mouse.get_Position())),"MouseLeft",View$1.Map(function(a$5)
  {
   return a$5?"1":"0";
  },Mouse.get_LeftPressed())),"MouseRight",View$1.Map(function(a$5)
  {
   return a$5?"1":"0";
  },Mouse.get_RightPressed())),"MouseMiddle",View$1.Map(function(a$5)
  {
   return a$5?"1":"0";
  },Mouse.get_MiddlePressed())),"Keyboard",View$1.Map(function($6)
  {
   return function($7)
   {
    return $6(Utils.printList(Utils.prettyPrint,$7));
   };
  }(Global.id),Keyboard.get_KeysPressed()))));
  SC$1.getMainDoc=Lazy.Create(function()
  {
   WcSplitter.init(Runtime.Curried(AppFramework.horizontal,5),Runtime.Curried(AppFramework.vertical,5));
   WcTabStrip.init().f();
   return AppFramework.mainDoc();
  });
  SC$1.htmlD=Depend.dependByName("AppFrameworkTemplate.html",AppFrameworkTemplate.html(),Global.id);
  SC$1.startWithHtmlD=(b$12=Depend.depend(),b$12.Delay(function()
  {
   return b$12.Bind(StartAppFramework.htmlD(),function(a$5)
   {
    return b$12.Return(function()
    {
     var d,x$7,a$6;
     d=self.document.createElement("div");
     self.document.body.appendChild(d);
     d.outerHTML=a$5;
     x$7=AppFramework.getMainDoc().f();
     a$6=self.document.body;
     Templates.LoadLocalTemplates("");
     Doc.RunAppend(a$6,x$7);
    });
   });
  }));
  SC$1.defPlg=AppFramework.defaultPlugIn();
  SC$1.defDoc=AppFramework.newDoc(new PlgElemName({
   $:0,
   $0:"_"
  }),Lazy.Create(Doc.get_Empty));
  SC$1.defVar=AppFramework.newVar(new PlgElemName({
   $:0,
   $0:"_"
  }),Var$1.Create$1(""));
  SC$1.defViw=AppFramework.newViw(new PlgElemName({
   $:0,
   $0:"_"
  }),View$1.Const(""));
  SC$1.defAct=AppFramework.newAct(new PlgElemName({
   $:0,
   $0:"_"
  }),Global.ignore);
  function f$14(a$5)
  {
   return new PlugInName({
    $:0,
    $0:a$5
   });
  }
  function g$10(a$5)
  {
   return{
    $:1,
    $0:a$5
   };
  }
  function f$15(a$5)
  {
   return new PlgElemName({
    $:0,
    $0:a$5
   });
  }
  function g$11(a$5)
  {
   return{
    $:1,
    $0:a$5
   };
  }
  function f$16(a$5)
  {
   return new PlgElemName({
    $:0,
    $0:a$5
   });
  }
  function g$12(a$5)
  {
   return{
    $:1,
    $0:a$5
   };
  }
  function f$17(a$5)
  {
   return new PlgElemName({
    $:0,
    $0:a$5
   });
  }
  function g$13(a$5)
  {
   return{
    $:1,
    $0:a$5
   };
  }
  function f$18(a$5)
  {
   return new PlgElemName({
    $:0,
    $0:a$5
   });
  }
  function g$14(a$5)
  {
   return{
    $:1,
    $0:a$5
   };
  }
  pluginsList=LM.getDocFor(AppFramework.plugIns(),AppFrameworkUI.defPlg(),function()
  {
   return AppFrameworkUI.failCreate("plugin",void 0);
  },null,Runtime.Curried3(AppFrameworkUI.showPlugIn));
  plgVarsList=LM.getDocForW(View$1.Map(function($6)
  {
   return $6.plgVars;
  },pluginsList.get_CurrentW()),function(plgVar)
  {
   return plgVar.varName;
  },AppFrameworkUI.defVar(),function()
  {
   return AppFrameworkUI.failCreate("Var",void 0);
  },null,Runtime.Curried3(AppFrameworkUI.showVar));
  plgViewsList=LM.getDocForW(View$1.Map(function($6)
  {
   return $6.plgViews;
  },pluginsList.get_CurrentW()),function(plgViw)
  {
   return plgViw.viwName;
  },AppFrameworkUI.defViw(),function()
  {
   return AppFrameworkUI.failCreate("View",void 0);
  },null,Runtime.Curried3(AppFrameworkUI.showView));
  plgActsList=LM.getDocForW(View$1.Map(function($6)
  {
   return $6.plgActions;
  },pluginsList.get_CurrentW()),function(plgAct)
  {
   return plgAct.actName;
  },AppFrameworkUI.defAct(),function()
  {
   return AppFrameworkUI.failCreate("Action",void 0);
  },null,Runtime.Curried3(AppFrameworkUI.showAct));
  plgDocsList=LM.getDocForW(View$1.Map(function($6)
  {
   return $6.plgDocs;
  },pluginsList.get_CurrentW()),function(plgDoc)
  {
   return plgDoc.docName;
  },AppFrameworkUI.defDoc(),function()
  {
   return AppFrameworkUI.failCreate("Doc",void 0);
  },null,Runtime.Curried3(AppFrameworkUI.showDoc));
  AppFramework.addPlugIn((b$13=AppFramework.plugin(),b$13.Merge(b$13.Merge(b$13.Merge(b$13.Merge(b$13.Merge(b$13.Name(b$13.Yield(),"AppFrmkUI"),"plugIns_",pluginsList.PlugIn(function(x$7)
  {
   return g$10(f$14(x$7));
  },function(n)
  {
   return n.get_Id();
  })),"plgVars_",plgVarsList.PlugIn(function(x$7)
  {
   return g$11(f$15(x$7));
  },function(n)
  {
   return n.get_Id();
  })),"plgViews_",plgViewsList.PlugIn(function(x$7)
  {
   return g$12(f$16(x$7));
  },function(n)
  {
   return n.get_Id();
  })),"plgActs_",plgActsList.PlugIn(function(x$7)
  {
   return g$13(f$17(x$7));
  },function(n)
  {
   return n.get_Id();
  })),"plgDocs_",plgDocsList.PlugIn(function(x$7)
  {
   return g$14(f$18(x$7));
  },function(n)
  {
   return n.get_Id();
  }))));
  function p(y)
  {
   return""!==y;
  }
  SC$1.splitSemiColon=(f$19=LayoutEngineModule.splitChar(";"),(g$15=function(s$1)
  {
   return Seq$1.filter(p,s$1);
  },function(x$7)
  {
   return g$15(f$19(x$7));
  }));
  function g$16(v$2)
  {
   return!v$2;
  }
  SC$1.notEmpty=function(x$7)
  {
   return g$16(LayoutEngineModule.emptyLine(x$7));
  };
  SC$1.aV=Var$1.Create$1(4);
  SC$1.pa=NewLY.aV().get_View();
  SC$1.pb=6.2;
  SC$1.currentPlugInNameDef$1=new PlugInName({
   $:0,
   $0:"NewLYx"
  });
  SC$1.currentPlugInNameD$1=Depend.dependByName("currentPlugInName",NewLY.currentPlugInNameDef(),Global.id);
  name=Var$1.Create$1("World");
  enterName=(pf=AppFramework.op_Dereference(function(n)
  {
   return n===Slice.string("World",{
    $:1,
    $0:0
   },{
    $:1,
    $0:n.length-1
   })||n.length<=1?"<---- Please enter your name":"";
  }),(p$1={
   $:0,
   $0:name.get_View()
  },P.New(Operators$2.op_BarGreaterGreater(pf.r,function(f$26)
  {
   return Fun.New(f$26,p$1);
  }))));
  pf$1=AppFramework.op_Dereference(function()
  {
   var n;
   n=new Date(Date.now());
   return n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)+" "+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+":"+("00"+n.getMilliseconds()).slice(-3);
  });
  p$2={
   $:0,
   $0:name.get_View()
  };
  Operators$2.op_BarGreaterGreater(pf$1.r,function(f$26)
  {
   return Fun.New(f$26,p$2);
  });
  sayHello=(sayHello_0=(c=(vf=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(extractDoc)
  {
   var p$20;
   p$20={
    $:1,
    $0:[extractDoc("Hello @{name}!")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf.r,function(f$26)
   {
    return Fun.New(f$26,p$20);
   }));
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{
     $:0,
     $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(aF.f.$0,aF.p.$0)
    }:aF.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
    }:{
     $:1,
     $0:aF.f.$0(aF.p.$0)
    }),c$13.p));
   },c);
  },enterName.r)),(a=(vf$1=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(extractDoc)
  {
   var p$20;
   p$20={
    $:1,
    $0:[extractDoc("How are you?")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$1.r,function(f$26)
   {
    return Fun.New(f$26,p$20);
   }));
  },AppFramework.extractDocD())),(c$1=(vf$2=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(aF)
  {
   var p$20;
   p$20={
    $:1,
    $0:[AppFramework.makeAViewDoc(function()
    {
     var m$4;
     m$4=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
     }:{
      $:0,
      $0:View$1.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m$4.$==0?Doc.BindView(Global.id,m$4.$0):m$4.$0;
    })]
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$2.r,function(f$26)
   {
    return Fun.New(f$26,p$20);
   }));
  },sayHello_0.r)),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(AppFramework.makeAViewDoc(function()
    {
     var m$4;
     m$4=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
     }:{
      $:0,
      $0:View$1.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m$4.$==0?Doc.BindView(Global.id,m$4.$0):m$4.$0;
    }),c$13.p));
   },c$1);
  },a.r))));
  Var$1.Lens(NewLY.aV(),Global.String,function(a$5,v$2)
  {
   return Operators$7.toInt(Global.Number(v$2));
  });
  main0=(pc=(pf$2=AppFramework.op_Dereference(function(a$5)
  {
   return function(b$22)
   {
    return NewLY.concat(a$5,b$22);
   };
  }),(p$3={
   $:0,
   $0:NewLY.aV().get_View()
  },P.New(Operators$2.op_BarGreaterGreater(pf$2.r,function(f$26)
  {
   return Fun.New(f$26,p$3);
  })))),(p$4={
   $:1,
   $0:3.2
  },P.New(Operators$2.op_BarGreaterGreater(pc.r,function(c$13)
  {
   return Fun.New(c$13.f.$==0?c$13.p.$==1?{
    $:0,
    $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(c$13.f.$0,c$13.p.$0)
   }:c$13.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)
   }:{
    $:1,
    $0:c$13.f.$0(c$13.p.$0)
   },p$4);
  }))));
  main1=(pc$1=(vf$3=AppFramework.op_Dereference((Runtime.Curried3(function($6,$7,$8)
  {
   return $6("result = "+Utils.toSafe($7)+" "+Utils.toSafe($8));
  }))(Global.id)),AppFramework.bindWrap(function(aF)
  {
   var p$20;
   p$20=aF.f.$==0?aF.p.$==1?{
    $:0,
    $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(aF.f.$0,aF.p.$0)
   }:aF.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
   }:{
    $:1,
    $0:aF.f.$0(aF.p.$0)
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$3.r,function(f$26)
   {
    return Fun.New(f$26,p$20);
   }));
  },main0.r)),(p$5={
   $:1,
   $0:"main0"
  },P.New(Operators$2.op_BarGreaterGreater(pc$1.r,function(c$13)
  {
   return Fun.New(c$13.f.$==0?c$13.p.$==1?{
    $:0,
    $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(c$13.f.$0,c$13.p.$0)
   }:c$13.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)
   }:{
    $:1,
    $0:c$13.f.$0(c$13.p.$0)
   },p$5);
  }))));
  main=(c$2=(c$3=(c$4=(c$5=(c$6=(c$7=(c$8=(c$9=(c$10=(vf$4=AppFramework.op_Dereference((Runtime.Curried3(Doc.Element))("h3")),AppFramework.bindWrap(function(extractAts)
  {
   var p$20;
   p$20={
    $:1,
    $0:extractAts("color:@{name}; background:red; click=@{AppFramework.Hello}")
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$4.r,function(f$26)
   {
    return Fun.New(f$26,p$20);
   }));
  },AppFramework.extractAtsD())),AppFramework.bindWrap(function(extractDoc)
  {
   var p$20;
   p$20={
    $:1,
    $0:[extractDoc("MAIN:")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(c$10.r,function(c$13)
   {
    return Fun.New(c$13.f.$==0?c$13.p.$==1?{
     $:0,
     $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(c$13.f.$0,c$13.p.$0)
    }:c$13.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)
    }:{
     $:1,
     $0:c$13.f.$0(c$13.p.$0)
    },p$20);
   }));
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{
     $:0,
     $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(aF.f.$0,aF.p.$0)
    }:aF.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
    }:{
     $:1,
     $0:aF.f.$0(aF.p.$0)
    }),c$13.p));
   },c$9);
  },main1.r)),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{
     $:0,
     $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(aF.f.$0,aF.p.$0)
    }:aF.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
    }:{
     $:1,
     $0:aF.f.$0(aF.p.$0)
    }),c$13.p));
   },c$8);
  },main1.r)),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(extractDoc(":"),c$13.p));
   },c$7);
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(AppFramework.makeAViewDoc(function()
    {
     var m$4;
     m$4=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
     }:{
      $:0,
      $0:View$1.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m$4.$==0?Doc.BindView(Global.id,m$4.$0):m$4.$0;
    }),c$13.p));
   },c$6);
  },sayHello.r)),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(extractDoc(":"),c$13.p));
   },c$5);
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(extractDoc(" Más >> "),c$13.p));
   },c$4);
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(AppFramework.makeAViewDoc(function()
    {
     var m$4;
     m$4=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
     }:{
      $:0,
      $0:View$1.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m$4.$==0?Doc.BindView(Global.id,m$4.$0):m$4.$0;
    }),c$13.p));
   },c$3);
  },sayHello.r)),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(extractDoc(" <<"),c$13.p));
   },c$2);
  },AppFramework.extractDocD()));
  main2=AppFramework.makeAViewDoc(function()
  {
   return Doc.Element("h4",[AttrModule.Dynamic("style",View$1.Map(function($6)
   {
    return"color:"+$6;
   },name.get_View()))],[Doc.TextNode("MAIN2:"),Doc.TextView(name.get_View())]);
  });
  appFwk=(c$11=(vf$5=AppFramework.op_Dereference((Runtime.Curried3(Doc.Element))("div")),AppFramework.bindWrap(function(extractAts)
  {
   var p$20;
   p$20={
    $:1,
    $0:extractAts("color:@{name}")
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$5.r,function(f$26)
   {
    return Fun.New(f$26,p$20);
   }));
  },AppFramework.extractAtsD())),AppFramework.bindWrap(function(extractDoc)
  {
   var p$20;
   p$20={
    $:1,
    $0:[extractDoc("@{AppFramework.AppFwkClient}")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(c$11.r,function(c$13)
   {
    return Fun.New(c$13.f.$==0?c$13.p.$==1?{
     $:0,
     $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(c$13.f.$0,c$13.p.$0)
    }:c$13.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)
    }:{
     $:1,
     $0:c$13.f.$0(c$13.p.$0)
    },p$20);
   }));
  },AppFramework.extractDocD()));
  c$12=(vf$6=AppFramework.op_Dereference(Runtime.Curried(LayoutEngineModule.variableSplitter,2,[false,0,50,100])),AppFramework.bindWrap(function(aF)
  {
   var p$20;
   p$20={
    $:1,
    $0:AppFramework.makeAViewDoc(function()
    {
     var m$4;
     m$4=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
     }:{
      $:0,
      $0:View$1.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m$4.$==0?Doc.BindView(Global.id,m$4.$0):m$4.$0;
    })
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$6.r,function(f$26)
   {
    return Fun.New(f$26,p$20);
   }));
  },appFwk.r));
  AppFramework.bindWrap(function(aF)
  {
   var p$20;
   p$20={
    $:1,
    $0:AppFramework.makeAViewDoc(function()
    {
     var m$4;
     m$4=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
     }:{
      $:0,
      $0:View$1.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m$4.$==0?Doc.BindView(Global.id,m$4.$0):m$4.$0;
    })
   };
   return P.New(Operators$2.op_BarGreaterGreater(c$12.r,function(c$13)
   {
    return Fun.New(c$13.f.$==0?c$13.p.$==1?{
     $:0,
     $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(c$13.f.$0,c$13.p.$0)
    }:c$13.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)
    }:{
     $:1,
     $0:c$13.f.$0(c$13.p.$0)
    },p$20);
   }));
  },main.r);
  pc$2=(vf$7=AppFramework.op_Dereference(Runtime.Curried(LayoutEngineModule.variableSplitter,2,[false,0,50,100])),AppFramework.bindWrap(function(aF)
  {
   var p$20;
   p$20={
    $:1,
    $0:AppFramework.makeAViewDoc(function()
    {
     var m$4;
     m$4=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
     }:{
      $:0,
      $0:View$1.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m$4.$==0?Doc.BindView(Global.id,m$4.$0):m$4.$0;
    })
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$7.r,function(f$26)
   {
    return Fun.New(f$26,p$20);
   }));
  },appFwk.r));
  p$6={
   $:1,
   $0:main2
  };
  Operators$2.op_BarGreaterGreater(pc$2.r,function(c$13)
  {
   return Fun.New(c$13.f.$==0?c$13.p.$==1?{
    $:0,
    $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(c$13.f.$0,c$13.p.$0)
   }:c$13.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)
   }:{
    $:1,
    $0:c$13.f.$0(c$13.p.$0)
   },p$6);
  });
  SC$1.nodeRefToDocD=(b$14=Depend.depend(),b$14.Delay(function()
  {
   return b$14.Bind(Extract0.getDocFromTextTypesD(),function(a$5)
   {
    function f$26(a$6)
    {
     var $6;
     return(a$6.$==1?($6=a$6.$0.$0,false):a$6.$==2?($6=a$6.$0.$0,false):a$6.$==3?($6=a$6.$0.$0,false):true)?List.map(NewLY.textValToTextType,a$6.$0):List.ofArray([NewLY.itemRefToTextType($6)]);
    }
    return b$14.Return(function(x$7)
    {
     return a$5(f$26(x$7));
    });
   });
  }));
  SC$1.varRefToVarD=(b$15=Depend.depend(),b$15.Delay(function()
  {
   return b$15.Bind(NewLY.currentPlugInNameD(),function(a$5)
   {
    return b$15.Return(function(a$6)
    {
     var r,o,o$1,t$25;
     r=NewLY.itemRefToString(a$6.$0);
     o=(o$1=(t$25=(AppFramework.splitName(a$5))(r),AppFramework.tryGetVar(t$25[0],t$25[1])),o$1==null?null:{
      $:1,
      $0:o$1.$0.varVar
     });
     return o==null?new FromView.New(View$1.Const((function($6)
     {
      return function($7)
      {
       return $6("Could not find var "+Utils.toSafe($7));
      };
     }(Global.id))(r)),Global.ignore):o.$0;
    });
   });
  }));
  SC$1.actRefToActD=(b$16=Depend.depend(),b$16.Delay(function()
  {
   return b$16.Bind(NewLY.currentPlugInNameD(),function(a$5)
   {
    return b$16.Return(function(a$6)
    {
     var r,o,t$25;
     r=NewLY.itemRefToString(a$6.$0);
     o=(t$25=(AppFramework.splitName(a$5))(r),AppFramework.tryGetAct(t$25[0],t$25[1]));
     return o==null?AppFramework.newAct(new PlgElemName({
      $:0,
      $0:r
     }),function()
     {
      ((function($6)
      {
       return function($7)
       {
        return $6("Could not find action "+Utils.toSafe($7));
       };
      }(function(s$1)
      {
       console.log(s$1);
      }))(r));
     }):o.$0;
    });
   });
  }));
  SC$1.getParamD=(b$17=Depend.depend(),b$17.Delay(function()
  {
   return b$17.Bind(NewLY.currentPlugInNameD(),function(a$5)
   {
    return b$17.Bind(Extract0.getTextValFromSeqD(),function(a$6)
    {
     return b$17.Return(function(p$20)
     {
      var refToSplit,g$22,r,f$26,m$4,g$23,t$25,r$1,f$27,m$5,g$24,g$25,t$26,r$2,f$28,m$6,g$26,g$27,t$27,r$3,f$29,m$7,g$28,t$28;
      function f$30(d$4)
      {
       return d$4.docDoc;
      }
      function d()
      {
       return(function($6)
       {
        return function($7)
        {
         return $6("missing ref Doc "+FSharpStation_GeneratedPrintf.p$1($7));
        };
       }(Global.id))(r);
      }
      function f$31(v$2)
      {
       return v$2.varVar.get_View();
      }
      function d$1()
      {
       return View$1.Const((function($6)
       {
        return function($7)
        {
         return $6("missing ref Var "+FSharpStation_GeneratedPrintf.p$1($7));
        };
       }(Global.id))(r$1));
      }
      function f$32(v$2)
      {
       return v$2.viwView;
      }
      function d$2()
      {
       return View$1.Const((function($6)
       {
        return function($7)
        {
         return $6("missing ref View "+FSharpStation_GeneratedPrintf.p$1($7));
        };
       }(Global.id))(r$2));
      }
      function f$33(v$2)
      {
       return v$2.actFunction;
      }
      function d$3()
      {
       return(function($6)
       {
        return function($7)
        {
         return $6("missing ref Action "+FSharpStation_GeneratedPrintf.p$1($7));
        };
       }(Global.id))(r$3);
      }
      refToSplit=(g$22=AppFramework.splitName(a$5),function(x$7)
      {
       return g$22(NewLY.itemRefToString(x$7));
      });
      return p$20.$==1?(r=p$20.$0.$0,View$1.Map((f$26=(m$4=function(x$7)
      {
       var v$2;
       v$2=f$30(x$7);
       return v$2;
      },function(o)
      {
       return o==null?null:{
        $:1,
        $0:m$4(o.$0)
       };
      }),(g$23=function(o)
      {
       return o==null?d():o.$0;
      },function(x$7)
      {
       return g$23(f$26(x$7));
      })),(t$25=refToSplit(r),AppFramework.tryGetDocW(t$25[0],t$25[1])))):p$20.$==2?(r$1=p$20.$0.$0,View$1.Bind((f$27=(m$5=(g$24=function(a$7)
      {
       return View$1.Map(Global.id,a$7);
      },function(x$7)
      {
       return g$24(f$31(x$7));
      }),function(o)
      {
       return o==null?null:{
        $:1,
        $0:m$5(o.$0)
       };
      }),(g$25=function(o)
      {
       return o==null?d$1():o.$0;
      },function(x$7)
      {
       return g$25(f$27(x$7));
      })),(t$26=refToSplit(r$1),AppFramework.tryGetVarW(t$26[0],t$26[1])))):p$20.$==3?(r$2=p$20.$0.$0,View$1.Bind((f$28=(m$6=(g$26=function(a$7)
      {
       return View$1.Map(Global.id,a$7);
      },function(x$7)
      {
       return g$26(f$32(x$7));
      }),function(o)
      {
       return o==null?null:{
        $:1,
        $0:m$6(o.$0)
       };
      }),(g$27=function(o)
      {
       return o==null?d$2():o.$0;
      },function(x$7)
      {
       return g$27(f$28(x$7));
      })),(t$27=refToSplit(r$2),AppFramework.tryGetViwW(t$27[0],t$27[1])))):p$20.$==4?(r$3=p$20.$0.$0,View$1.Map((f$29=(m$7=function(x$7)
      {
       var v$2;
       v$2=f$33(x$7);
       return v$2;
      },function(o)
      {
       return o==null?null:{
        $:1,
        $0:m$7(o.$0)
       };
      }),(g$28=function(o)
      {
       return o==null?d$3():o.$0;
      },function(x$7)
      {
       return g$28(f$29(x$7));
      })),(t$28=refToSplit(r$3),AppFramework.tryGetActW(t$28[0],t$28[1])))):View$1.Map(Global.id,Val.toView(a$6(List.map(NewLY.textValToTextType,p$20.$0))));
     });
    });
   });
  }));
  SC$1.getParam2D=(b$18=Depend.depend(),b$18.Delay(function()
  {
   return b$18.Bind(NewLY.currentPlugInNameD(),function(a$5)
   {
    return b$18.Bind(Extract0.getTextValFromSeqD(),function()
    {
     return b$18.Return(function(p$20)
     {
      var toAbs,f$26,g$22,$6;
      toAbs=(f$26=NewLY.itemRefToAbsolute(a$5.get_Id()),(g$22=function($7)
      {
       return function($8)
       {
        return $7("@{"+Utils.toSafe($8)+"}");
       };
      }(Global.id),function(x$7)
      {
       return g$22(f$26(x$7));
      }));
      return(p$20.$==3?($6=p$20.$0.$0,false):p$20.$==1?($6=p$20.$0.$0,false):p$20.$==2?($6=p$20.$0.$0,false):p$20.$==4?($6=p$20.$0.$0,false):true)?Strings.concat("",Seq$1.map(function(a$6)
      {
       var $7;
       return(a$6.$==1?($7=a$6.$0.$0,false):a$6.$==3?($7=a$6.$0.$0,false):a$6.$==4?($7=a$6.$0.$0,false):a$6.$==2?($7=a$6.$0.$0,false):true)?a$6.$0:toAbs($7);
      },p$20.$0)):toAbs($6);
     });
    });
   });
  }));
  SC$1.getParamTextD=(b$19=Depend.depend(),b$19.Delay(function()
  {
   return b$19.Bind(NewLY.currentPlugInNameD(),function(a$5)
   {
    return b$19.Bind(Extract0.getTextValFromSeqD(),function(a$6)
    {
     return b$19.Return(function(p$20)
     {
      return function(f$26)
      {
       var refToSplit,g$22,x$7,t$25,f$27,x$8,t$26,g$23,a$7,x$9,t$27,g$24,a$8,x$10,t$28,f$28;
       function f$29(d)
       {
        return d.docDoc;
       }
       function f$30(v$2)
       {
        return v$2.varVar.get_View();
       }
       function f$31(v$2)
       {
        return v$2.viwView;
       }
       function f$32(v$2)
       {
        return v$2.actFunction;
       }
       refToSplit=(g$22=AppFramework.splitName(a$5),function(x$11)
       {
        return g$22(NewLY.itemRefToString(x$11));
       });
       return p$20.$==1?(x$7=(t$25=refToSplit(p$20.$0.$0),AppFramework.tryGetDoc(t$25[0],t$25[1])),(Option.iter((f$27=function(x$11)
       {
        var v$2;
        v$2=f$29(x$11);
        return v$2;
       },function(x$11)
       {
        return f$26(f$27(x$11));
       })))(x$7)):p$20.$==2?(x$8=(t$26=refToSplit(p$20.$0.$0),AppFramework.tryGetVar(t$26[0],t$26[1])),(Option.iter((g$23=(a$7=function(x$11)
       {
        return f$26(Global.id(x$11));
       },function(a$9)
       {
        View$1.Get(a$7,a$9);
       }),function(x$11)
       {
        return g$23(f$30(x$11));
       })))(x$8)):p$20.$==3?(x$9=(t$27=refToSplit(p$20.$0.$0),AppFramework.tryGetViw(t$27[0],t$27[1])),(Option.iter((g$24=(a$8=function(x$11)
       {
        return f$26(Global.id(x$11));
       },function(a$9)
       {
        View$1.Get(a$8,a$9);
       }),function(x$11)
       {
        return g$24(f$31(x$11));
       })))(x$9)):p$20.$==4?(x$10=(t$28=refToSplit(p$20.$0.$0),AppFramework.tryGetAct(t$28[0],t$28[1])),(Option.iter((f$28=function(x$11)
       {
        var v$2;
        v$2=f$32(x$11);
        return v$2;
       },function(x$11)
       {
        return f$26(f$28(x$11));
       })))(x$10)):View$1.Get(function(x$11)
       {
        return f$26(Global.id(x$11));
       },Val.toView(a$6(List.map(NewLY.textValToTextType,p$20.$0))));
      };
     });
    });
   });
  }));
  SC$1.initVal="-<InitValue>-";
  function checkO(v$2)
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
  }
  function store(v$2,res)
  {
   cache.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$1(p$20,f$26)
  {
   var o;
   o=checkO(p$20);
   return o==null?store(p$20,f$26(p$20)):o.$0;
  }
  SC$1.defVarM0=(p$7=(cache=new Dictionary.New$5(),[[checkO,function($6)
  {
   return function($7)
   {
    return getOrAdd$1($6,$7);
   };
  }],function()
  {
   cache.Clear();
  }]),(getOrAdd=p$7[0][1],[function(p$20)
  {
   return(getOrAdd(p$20))(function($6)
   {
    return NewLY.defVar($6[0],$6[1],$6[2]);
   });
  },p$7[1]]))[0];
  function checkO$1(v$2)
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
  }
  function store$1(v$2,res)
  {
   cache$1.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$3(p$20,f$26)
  {
   var o;
   o=checkO$1(p$20);
   return o==null?store$1(p$20,f$26(p$20)):o.$0;
  }
  SC$1.defDocFM=(p$8=(cache$1=new Dictionary.New$5(),[[checkO$1,function($6)
  {
   return function($7)
   {
    return getOrAdd$3($6,$7);
   };
  }],function()
  {
   cache$1.Clear();
  }]),(getOrAdd$2=p$8[0][1],[function(p$20)
  {
   return(getOrAdd$2(p$20))(function($6)
   {
    return NewLY.defDocF($6[0],$6[1],$6[2],$6[3]);
   });
  },p$8[1]]))[0];
  function checkO$2(v$2)
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
  }
  function store$2(v$2,res)
  {
   cache$2.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$5(p$20,f$26)
  {
   var o;
   o=checkO$2(p$20);
   return o==null?store$2(p$20,f$26(p$20)):o.$0;
  }
  SC$1.defActionM=(p$9=(cache$2=new Dictionary.New$5(),[[checkO$2,function($6)
  {
   return function($7)
   {
    return getOrAdd$5($6,$7);
   };
  }],function()
  {
   cache$2.Clear();
  }]),(getOrAdd$4=p$9[0][1],[function(p$20)
  {
   return(getOrAdd$4(p$20))(function($6)
   {
    return NewLY.defAction($6[0],$6[1],$6[2],$6[3]);
   });
  },p$9[1]]))[0];
  function checkO$3(v$2)
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
  }
  function store$3(v$2,res)
  {
   cache$3.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$7(p$20,f$26)
  {
   var o;
   o=checkO$3(p$20);
   return o==null?store$3(p$20,f$26(p$20)):o.$0;
  }
  SC$1.defActionsM=(p$10=(cache$3=new Dictionary.New$5(),[[checkO$3,function($6)
  {
   return function($7)
   {
    return getOrAdd$7($6,$7);
   };
  }],function()
  {
   cache$3.Clear();
  }]),(getOrAdd$6=p$10[0][1],[function(p$20)
  {
   return(getOrAdd$6(p$20))(function($6)
   {
    return NewLY.defActions($6[0],$6[1],$6[2]);
   });
  },p$10[1]]))[0];
  function checkO$4(v$2)
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
  }
  function store$4(v$2,res)
  {
   cache$4.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$9(p$20,f$26)
  {
   var o;
   o=checkO$4(p$20);
   return o==null?store$4(p$20,f$26(p$20)):o.$0;
  }
  SC$1.defButtonM=(p$11=(cache$4=new Dictionary.New$5(),[[checkO$4,function($6)
  {
   return function($7)
   {
    return getOrAdd$9($6,$7);
   };
  }],function()
  {
   cache$4.Clear();
  }]),(getOrAdd$8=p$11[0][1],[function(p$20)
  {
   return(getOrAdd$8(p$20))(function($6)
   {
    return NewLY.defButton($6[0],$6[1],$6[2],$6[3],$6[4]);
   });
  },p$11[1]]))[0];
  function checkO$5(v$2)
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
  }
  function store$5(v$2,res)
  {
   cache$5.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$11(p$20,f$26)
  {
   var o;
   o=checkO$5(p$20);
   return o==null?store$5(p$20,f$26(p$20)):o.$0;
  }
  SC$1.defInputM=(p$12=(cache$5=new Dictionary.New$5(),[[checkO$5,function($6)
  {
   return function($7)
   {
    return getOrAdd$11($6,$7);
   };
  }],function()
  {
   cache$5.Clear();
  }]),(getOrAdd$10=p$12[0][1],[function(p$20)
  {
   return(getOrAdd$10(p$20))(function($6)
   {
    return NewLY.defInput($6[0],$6[1],$6[2],$6[3]);
   });
  },p$12[1]]))[0];
  function checkO$6(v$2)
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
  }
  function store$6(v$2,res)
  {
   cache$6.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$13(p$20,f$26)
  {
   var o;
   o=checkO$6(p$20);
   return o==null?store$6(p$20,f$26(p$20)):o.$0;
  }
  SC$1.defTextAreaM=(p$13=(cache$6=new Dictionary.New$5(),[[checkO$6,function($6)
  {
   return function($7)
   {
    return getOrAdd$13($6,$7);
   };
  }],function()
  {
   cache$6.Clear();
  }]),(getOrAdd$12=p$13[0][1],[function(p$20)
  {
   return(getOrAdd$12(p$20))(function($6)
   {
    return NewLY.defTextArea($6[0],$6[1],$6[2],$6[3]);
   });
  },p$13[1]]))[0];
  function checkO$7(v$2)
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
  }
  function store$7(v$2,res)
  {
   cache$7.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$15(p$20,f$26)
  {
   var o;
   o=checkO$7(p$20);
   return o==null?store$7(p$20,f$26(p$20)):o.$0;
  }
  SC$1.defElementM=(p$14=(cache$7=new Dictionary.New$5(),[[checkO$7,function($6)
  {
   return function($7)
   {
    return getOrAdd$15($6,$7);
   };
  }],function()
  {
   cache$7.Clear();
  }]),(getOrAdd$14=p$14[0][1],[function(p$20)
  {
   return(getOrAdd$14(p$20))(function($6)
   {
    return NewLY.defElement($6[0],$6[1],$6[2],$6[3],$6[4]);
   });
  },p$14[1]]))[0];
  function checkO$8(v$2)
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
  }
  function store$8(v$2,res)
  {
   cache$8.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$17(p$20,f$26)
  {
   var o;
   o=checkO$8(p$20);
   return o==null?store$8(p$20,f$26(p$20)):o.$0;
  }
  SC$1.defConcatM=(p$15=(cache$8=new Dictionary.New$5(),[[checkO$8,function($6)
  {
   return function($7)
   {
    return getOrAdd$17($6,$7);
   };
  }],function()
  {
   cache$8.Clear();
  }]),(getOrAdd$16=p$15[0][1],[function(p$20)
  {
   return(getOrAdd$16(p$20))(function($6)
   {
    return NewLY.defConcat($6[0],$6[1],$6[2]);
   });
  },p$15[1]]))[0];
  function checkO$9(v$2)
  {
   var res;
   res=null;
   return cache$9.TryGetValue(v$2,{
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
  }
  function store$9(v$2,res)
  {
   cache$9.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$19(p$20,f$26)
  {
   var o;
   o=checkO$9(p$20);
   return o==null?store$9(p$20,f$26(p$20)):o.$0;
  }
  SC$1.defViewM=(p$16=(cache$9=new Dictionary.New$5(),[[checkO$9,function($6)
  {
   return function($7)
   {
    return getOrAdd$19($6,$7);
   };
  }],function()
  {
   cache$9.Clear();
  }]),(getOrAdd$18=p$16[0][1],[function(p$20)
  {
   return(getOrAdd$18(p$20))(function($6)
   {
    return NewLY.defView($6[0],$6[1],$6[2]);
   });
  },p$16[1]]))[0];
  function checkO$10(v$2)
  {
   var res;
   res=null;
   return cache$10.TryGetValue(v$2,{
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
  }
  function store$10(v$2,res)
  {
   cache$10.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$21(p$20,f$26)
  {
   var o;
   o=checkO$10(p$20);
   return o==null?store$10(p$20,f$26(p$20)):o.$0;
  }
  SC$1.defViewJSM=(p$17=(cache$10=new Dictionary.New$5(),[[checkO$10,function($6)
  {
   return function($7)
   {
    return getOrAdd$21($6,$7);
   };
  }],function()
  {
   cache$10.Clear();
  }]),(getOrAdd$20=p$17[0][1],[function(p$20)
  {
   return(getOrAdd$20(p$20))(function($6)
   {
    return NewLY.defViewJS($6[0],$6[1],$6[2]);
   });
  },p$17[1]]))[0];
  function checkO$11(v$2)
  {
   var res;
   res=null;
   return cache$11.TryGetValue(v$2,{
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
  }
  function store$11(v$2,res)
  {
   cache$11.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$23(p$20,f$26)
  {
   var o;
   o=checkO$11(p$20);
   return o==null?store$11(p$20,f$26(p$20)):o.$0;
  }
  SC$1.defSplitterM=(p$18=(cache$11=new Dictionary.New$5(),[[checkO$11,function($6)
  {
   return function($7)
   {
    return getOrAdd$23($6,$7);
   };
  }],function()
  {
   cache$11.Clear();
  }]),(getOrAdd$22=p$18[0][1],[function(p$20)
  {
   return(getOrAdd$22(p$20))(function($6)
   {
    return NewLY.defSplitter($6[0],$6[1],$6[2],$6[3],$6[4],$6[5]);
   });
  },p$18[1]]))[0];
  function checkO$12(v$2)
  {
   var res;
   res=null;
   return cache$12.TryGetValue(v$2,{
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
  }
  function store$12(v$2,res)
  {
   cache$12.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$25(p$20,f$26)
  {
   var o;
   o=checkO$12(p$20);
   return o==null?store$12(p$20,f$26(p$20)):o.$0;
  }
  SC$1.defTemplateM=(p$19=(cache$12=new Dictionary.New$5(),[[checkO$12,function($6)
  {
   return function($7)
   {
    return getOrAdd$25($6,$7);
   };
  }],function()
  {
   cache$12.Clear();
  }]),(getOrAdd$24=p$19[0][1],[function(p$20)
  {
   return(getOrAdd$24(p$20))(function($6)
   {
    return NewLY.defTemplate($6[0],$6[1],$6[2]);
   });
  },p$19[1]]))[0];
  x=AppFramework.tryGetPlugIn(AppFramework.defPlugInName());
  (Option.iter(function(plg)
  {
   plg.plgActions.Append(AppFramework.newActF(new PlgElemName({
    $:0,
    $0:"AddLayout"
   }),{
    $:2,
    $0:function(n)
    {
     return function(l)
     {
      return NewLY.addNewLayoutAct(n,l);
     };
    },
    $1:"[Name]",
    $2:"[Layout]"
   }));
  }))(x);
  SC$1.MessageBrokerId="<MessageBroker>";
  SC$1.MessageBrokerAddress=new Address({
   $:0,
   $0:WebSockets.MessageBrokerId()
  });
  SC$1.id="FSharpStation"+Global.String(Date.now());
  SC$1.rootDir=".";
  SC$1.srcDir=".";
  Concurrency.Start((b$20=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("FSharpStation:FsRoot.FSharpStation+FStation.getRootDirs:-589054433",[]),function(a$5)
   {
    FStation.set_rootDir(a$5[1]);
    FStation.set_srcDir(a$5[2]);
    (((Runtime.Curried3(function($6,$7,$8)
    {
     return $6("fileName = "+Utils.toSafe($7)+"\\"+Utils.toSafe($8)+".fsx");
    }))(function(s$1)
    {
     console.log(s$1);
    }))(FStation.srcDir()))(FStation.id());
    return Concurrency.Zero();
   });
  })),null);
  SC$1.annotationsV=Var$1.Create$1("");
  SC$1.outputMsgs=Var$1.Create$1("");
  SC$1.snippets=new ListModel$1.New$1(function(s$1)
  {
   return s$1.snpId;
  });
  SC$1.hierarchy=Var$1.Create$1([]);
  SC$1.generation=Var$1.Create$1(-8640000000000000);
  SC$1.currentSnippetIdOV=Var$1.Create$1(null);
  SC$1.codeSnippetIdOV=Var$1.Create$1(null);
  SC$1.collapsedV=Var$1.Create$1(new FSharpSet.New$1(null));
  function checkO$13(v$2)
  {
   var res;
   res=null;
   return cache$13.TryGetValue(v$2,{
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
  }
  function store$13(v$2,res)
  {
   cache$13.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$26(p$20,f$26)
  {
   var o;
   o=checkO$13(p$20);
   return o==null?store$13(p$20,f$26(p$20)):o.$0;
  }
  $1=(cache$13=new Dictionary.New$5(),[[checkO$13,function($6)
  {
   return function($7)
   {
    return getOrAdd$26($6,$7);
   };
  }],function()
  {
   cache$13.Clear();
  }]);
  SC$1.predsCache=$1[0];
  SC$1.clearPreds=$1[1];
  function checkO$14(v$2)
  {
   var res;
   res=null;
   return cache$14.TryGetValue(v$2,{
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
  }
  function store$14(v$2,res)
  {
   cache$14.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$27(p$20,f$26)
  {
   var o;
   o=checkO$14(p$20);
   return o==null?store$14(p$20,f$26(p$20)):o.$0;
  }
  $2=(cache$14=new Dictionary.New$5(),[[checkO$14,function($6)
  {
   return function($7)
   {
    return getOrAdd$27($6,$7);
   };
  }],function()
  {
   cache$14.Clear();
  }]);
  SC$1.reducCache=$2[0];
  SC$1.clearReduc=$2[1];
  function checkO$15(v$2)
  {
   var res;
   res=null;
   return cache$15.TryGetValue(v$2,{
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
  }
  function store$15(v$2,res)
  {
   cache$15.set_Item(v$2,res);
   return res;
  }
  function getOrAdd$28(p$20,f$26)
  {
   var o;
   o=checkO$15(p$20);
   return o==null?store$15(p$20,f$26(p$20)):o.$0;
  }
  $3=(cache$15=new Dictionary.New$5(),[[checkO$15,function($6)
  {
   return function($7)
   {
    return getOrAdd$28($6,$7);
   };
  }],function()
  {
   cache$15.Clear();
  }]);
  SC$1.parentCache=$3[0];
  SC$1.clearParent=$3[1];
  SC$1.getParentIdO=(g$17=(Snippets.parentCache())[1],function(p$20)
  {
   return(g$17(p$20))(Snippets.getParentIdONotMemo);
  });
  View$1.Sink(function(a$5)
  {
   var curId,m$4;
   if(a$5!=null&&a$5.$==1)
    {
     curId=a$5.$0;
     m$4=Snippets.codeSnippetIdOV().Get();
     m$4!=null&&m$4.$==1?(Snippets.iterReader(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(Operators$3.op_GreaterGreaterEquals(Operators$3.op_BarGreaterGreater(SnippetModule.snippetORm(m$4.$0),function(o)
     {
      return o==null?null:{
       $:1,
       $0:SnippetModule.uniquePredsRm(o.$0)
      };
     }),FusionM.insertO),Option$1.toList),function(l)
     {
      return List.collect(Global.id,l);
     }),function(s$1)
     {
      return List.contains(curId,s$1);
     }),function(a$6)
     {
      if(a$6)
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
   var a$5;
   Snippets.clearPredsCache();
   a$5=Arrays.ofSeq(Seq$1.delay(function()
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
   Snippets.snippets().Set(a$5);
  },(v=View$1.Map(function(a$5)
  {
   return Arrays.map(m,a$5);
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
  function g$18(o)
  {
   var v$2;
   v$2=SnippetModule.defaultSnippet();
   return o==null?v$2:o.$0;
  }
  function m$1(a$5)
  {
   return Snippets.snippets().TryFindByKeyAsView(a$5);
  }
  SC$1.currentSnippetW=View$1.Map((f$20=function(o)
  {
   return o==null?null:Global.id(o.$0);
  },function(x$7)
  {
   return g$18(f$20(x$7));
  }),View$1.Bind((f$21=function(o)
  {
   return o==null?null:{
    $:1,
    $0:m$1(o.$0)
   };
  },function(x$7)
  {
   return View.insertWO(f$21(x$7));
  }),Snippets.currentSnippetIdOV().get_View()));
  function g$19(o)
  {
   var v$2;
   v$2=SnippetModule.defaultSnippet();
   return o==null?v$2:o.$0;
  }
  function m$2(a$5)
  {
   return Snippets.snippets().TryFindByKeyAsView(a$5);
  }
  SC$1.codeSnippetW=View$1.Map((f$22=function(o)
  {
   return o==null?null:Global.id(o.$0);
  },function(x$7)
  {
   return g$19(f$22(x$7));
  }),View$1.Bind((f$23=function(o)
  {
   return o==null?null:{
    $:1,
    $0:m$2(o.$0)
   };
  },function(x$7)
  {
   return View.insertWO(f$23(x$7));
  }),Snippets.codeSnippetIdOV().get_View()));
  SC$1.currentSnippetV=new FromView.New(Snippets.currentSnippetW(),function(s$1)
  {
   Snippets.setSnippet(s$1);
  });
  function m$3(tn,l)
  {
   return[tn.id(),l];
  }
  function a$1(a$5)
  {
   function f$26(n)
   {
    return TreeReader.listNodes(0,n);
   }
   function g$22(r)
   {
    return Snippets.runReader(Snippets.handleError,r);
   }
   return function(x$7)
   {
    return g$22(f$26(x$7));
   };
  }
  SC$1.getHierarchyW=View$1.Map(Arrays.ofSeq,View$1.Map(function(s$1)
  {
   return Seq$1.map(function($6)
   {
    return m$3($6[0],$6[1]);
   },s$1);
  },(x$1=Snippets.hierarchy().get_View(),View$1.Map2(function($6,$7)
  {
   return(a$1($6))($7);
  },Snippets.collapsedV().get_View(),x$1))));
  function a$2(a$5,a$6)
  {
   var b$22;
   b$22=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(350),function()
    {
     return Concurrency.Return(Snippets.runReader(Snippets.handleError,SnippetModule.fastCodeRm(Snippets.currentSnippetIdOV().Get(),Snippets.codeSnippetIdOV().Get())));
    });
   });
  }
  SC$1.codeAndStartsW=($4=Snippets.codeSnippetW(),($5=Snippets.snippets().v,(((Runtime.Curried3(View$1.MapAsync2))(a$2))($4))($5)));
  SC$1.FsCodeW=View$1.Map(function(t$25)
  {
   return t$25[0];
  },Snippets.codeAndStartsW());
  SC$1.codeStartsW=View$1.Map(function(t$25)
  {
   return t$25[1];
  },Snippets.codeAndStartsW());
  SC$1.SaveAsClassW=View$1.Map2(function(snps,gen)
  {
   return Seq$1.exists(function(snp)
   {
    return snp.snpModified>gen;
   },snps)?"btn-primary":"";
  },Snippets.snippets().v,Snippets.generation().get_View());
  SC$1.currentPathW=View$1.Map(function(snp)
  {
   var b$22;
   return Snippets.runReader(function()
   {
    return"";
   },(b$22=FusionM.fusion(),b$22.Run(b$22.Delay(function()
   {
    return b$22.Bind(SnippetModule.pathRm(snp.snpId),function(a$5)
    {
     return b$22.Bind(FusionM.traverseSeq(SnippetModule.snippetNameRm,new List.T({
      $:1,
      $0:snp.snpId,
      $1:a$5
     })),function(a$6)
     {
      return b$22.Return(Strings.concat("/",Seq$1.rev(a$6)));
     });
    });
   }))));
  },Snippets.currentSnippetW());
  SC$1.currentLayoutDW=View$1.Map(function(snp)
  {
   var b$22;
   return Snippets.runReader(function()
   {
    return null;
   },(b$22=FusionM.fusion(),b$22.Run(b$22.Delay(function()
   {
    function m$4(snB,a$5)
    {
     var p$20,ls,ats,ss;
     p$20=(ls=Strings.SplitChars(Strings.Trim(a$5[0]),["\n"],0),Strings.StartsWith(Arrays.get(ls,0),"\"")?[Slice.array(ls,{
      $:1,
      $0:1
     },null),Arrays.get(ls,0)]:[ls,"\"\""]);
     ats=p$20[1];
     ss=Seq$1.mapi(function(i$3,btn)
     {
      var x$7;
      x$7=Strings.StartsWith(btn,":")?Slice.string(btn,{
       $:1,
       $0:1
      },null):(function($6)
      {
       return function($7)
       {
        return $6("button \"click=@{FSharpStation.ButtonClick}\" "+Utils.prettyPrint($7));
       };
      }(Global.id))(btn);
      return(((Runtime.Curried3(function($6,$7,$8)
      {
       return $6("btn"+Global.String($7)+" "+Utils.toSafe($8));
      }))(Global.id))(i$3))(x$7);
     },Seq$1.filter(function(s$1)
     {
      return Strings.Trim(s$1)!=="";
     },p$20[0]));
     return["Snp_"+Strings.Replace(Global.String(snB.snpId.get_Id()),"-",""),Strings.concat("\n",List.ofSeq(Seq$1.delay(function()
     {
      return Seq$1.append(ss,Seq$1.delay(function()
      {
       var x$7,x$8;
       return Seq$1.append([(x$7=Strings.concat(" ",(x$8=List.ofSeq(Operators$7.range(0,Seq$1.length(ss)-1)),Seq$1.map(function($6)
       {
        return function($7)
        {
         return $6("btn"+Global.String($7));
        };
       }(Global.id),x$8))),(((Runtime.Curried3(function($6,$7,$8)
       {
        return $6("buttons div "+Utils.toSafe($7)+" "+Utils.toSafe($8)+" ");
       }))(Global.id))(ats))(x$7))],Seq$1.delay(function()
       {
        return["editorButtons vertical 0-85-100 FStationLyt.menuEditor buttons"];
       }));
      }));
     })))];
    }
    return b$22.Bind(Operators$3.op_BarGreaterGreater(SnippetModule.propertyHierORm("Buttons",snp),function(o)
    {
     var $6;
     return o==null?null:{
      $:1,
      $0:($6=o.$0,m$4($6[0],$6[1]))
     };
    }),function(a$5)
    {
     function m$5(snL,a$6)
     {
      var txL,o,$6;
      txL=a$6[0];
      return["Snp_"+Strings.Replace(Global.String(snL.snpId.get_Id()),"-",""),(o=a$5==null?null:{
       $:1,
       $0:($6=a$5.$0,($6[0],Strings.concat("\n",List.ofArray([txL,$6[1]]))))
      },o==null?txL:o.$0)];
     }
     function f$26()
     {
      return a$5;
     }
     return b$22.ReturnFrom(Operators$3.op_BarGreaterGreater(Operators$3.op_BarGreaterGreater(SnippetModule.propertyHierORm("Layout",snp),function(o)
     {
      var $6;
      return o==null?null:{
       $:1,
       $0:($6=o.$0,m$5($6[0],$6[1]))
      };
     }),function(o)
     {
      return Option.bindNone(f$26,o);
     }));
    });
   }))));
  },Snippets.currentSnippetW());
  SC$1.currentLayoutJSDW=View$1.Map(function(snp)
  {
   function m$4(snL,a$5)
   {
    return[snL.snpId,a$5[0]];
   }
   return Snippets.runReader(function()
   {
    return null;
   },Operators$3.op_BarGreaterGreater(SnippetModule.propertyHierORm("LayoutJS",snp),function(o)
   {
    var $6;
    return o==null?null:{
     $:1,
     $0:($6=o.$0,m$4($6[0],$6[1]))
    };
   }));
  },Snippets.currentSnippetW());
  SC$1.drag=DragInfo.DragNone;
  SC$1.rootdir="..\\website";
  SC$1.TemplatesFileName="..\\website"+"\\Templates.html";
  ((function($6)
  {
   return function($7)
   {
    return $6(Utils.toSafe($7));
   };
  }(function(s$1)
  {
   console.log(s$1);
  }))("..\\website\\Templates.html"));
  SC$1.startsV=Var$1.Create$1([]);
  SC$1.defaultStart=(v$1=[[SnippetId.get_Empty(),""],[0,1,0]],function(o)
  {
   return o==null?v$1:o.$0;
  });
  SC$1.fileName="none.fsx";
  SC$1.editorConfigO=null;
  View$1.Sink(function(sid)
  {
   var x$7,o;
   try
   {
    x$7=(o=Monaco$1.editorConfigO(),o==null?null:o.$0.editorO);
    (Option.iter(function(editor)
    {
     editor.setModel(Monaco$1.getSnippetModel(sid));
     FStation.annotationsV().Set(FStation.annotationsV().Get());
    }))(x$7);
   }
   catch(m$4)
   {
    null;
   }
  },Snippets.CurrentSnippetIdW());
  SC$1.rexGuid$1="\\((\\d+)\\,\\s*(\\d+)\\) - \\((\\d+)\\,\\s*(\\d+)\\).*([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$1.setScrollToBottom=(elO=null,View$1.Sink(function()
  {
   (Option.iter(function(e)
   {
    CustomAction.scrollToBottom(e);
   }))(elO);
  },FStation.outputMsgs().get_View()),function(el)
  {
   elO={
    $:1,
    $0:el
   };
   (function($6)
   {
    return $6("setScrollToBottom");
   }(function(s$1)
   {
    console.log(s$1);
   }));
  });
  function get(a$5)
  {
   return a$5.$0;
  }
  function set(a$5)
  {
   return new SnippetId({
    $:0,
    $0:a$5
   });
  }
  SC$1.serSnippetId=(s=Arrays.head(Strings.SplitChars((function($6)
  {
   return function($7)
   {
    return $6(FSharpStation_GeneratedPrintf.p$2($7));
   };
  }(Global.id))(set("00000000-0000-0000-0000-000000000000")),[" "],0)),(sQ=(function($6)
  {
   return function($7)
   {
    return $6(Utils.prettyPrint($7));
   };
  }(Global.id))(s),[function(id)
  {
   var x$7;
   x$7=get(id);
   return(((Runtime.Curried3(function($6,$7,$8)
   {
    return $6("{"+Strings.PadLeft(Utils.toSafe($7),10)+" :"+Utils.prettyPrint($8)+"}");
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
   return Snippet.New(v$2,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t[0],t[1])),(t$1=Serializer.serString(),Serializer.serField("snpName",function(s$1)
  {
   return s$1.snpName;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,v$2,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$1[0],t$1[1])),(t$2=Serializer.serString(),Serializer.serField("snpContent",function(s$1)
  {
   return s$1.snpContent;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,v$2,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$2[0],t$2[1])),(t$3=(t$4=Serializer$1.serSnippetId(),Serializer.serOpt(t$4[0],t$4[1])),Serializer.serField("snpParentIdO",function(s$1)
  {
   return s$1.snpParentIdO;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,v$2,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$3[0],t$3[1])),(t$5=(t$6=Serializer$1.serSnippetId(),Serializer.serSet(t$6[0],t$6[1])),Serializer.serField("snpPredIds",function(s$1)
  {
   return s$1.snpPredIds;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,v$2,s$1.snpProperties,s$1.snpModified);
  },t$5[0],t$5[1])),(t$7=(t$8=(x$3=Serializer.serString(),Serializer.serDup((Serializer.serString())[0],(Serializer.serString())[1],x$3[0],x$3[1])),Serializer.serArr(t$8[0],t$8[1])),Serializer.serField("snpProperties",function(s$1)
  {
   return s$1.snpProperties;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,v$2,s$1.snpModified);
  },t$7[0],t$7[1])),(t$9=Serializer.serInt(),Serializer.serFieldO("snpGeneration",function()
  {
   return null;
  },function(vO,s$1)
  {
   return vO!=null&&vO.$==1?Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,(new Date(0)).getTime()+vO.$0*3600000):s$1;
  },t$9[0],t$9[1])),(t$10=Serializer.serDate(),Serializer.serField("snpModified",function(s$1)
  {
   return s$1.snpModified;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,v$2);
  },t$10[0],t$10[1]))],(i=SnippetModule.New("","",null),[function(dim)
  {
   var x$7;
   function c$13(n,ser,_deser)
   {
    var x$8,m$4;
    x$8=ser(dim);
    m$4=((Runtime.Curried3(function($6,$7,$8)
    {
     return $6(Utils.prettyPrint($7)+": "+Utils.toSafe($8));
    }))(Global.id))(n);
    return x$8==null?null:{
     $:1,
     $0:m$4(x$8.$0)
    };
   }
   x$7=Strings.concat(", ",Seq$1.choose(function($6)
   {
    return c$13($6[0],$6[1],$6[2]);
   },x$2));
   return(function($6)
   {
    return function($7)
    {
     return $6("{"+Utils.toSafe($7)+"}");
    };
   }(Global.id))(x$7);
  },function(o)
  {
   return!o?i:Seq$1.fold(function(dim,t$25)
   {
    return(t$25[2](dim))(o[t$25[0]]);
   },i,x$2);
  }]));
  SC$1.serModel=(x$4=[(t$11=(t$12=Serializer$1.serSnippet(),Serializer.serArr(t$12[0],t$12[1])),Serializer.serField("snippets",function(m$4)
  {
   return m$4.snippets;
  },function(v$2,m$4)
  {
   return Model$1.New(v$2,m$4.modified,m$4.collapsed);
  },t$11[0],t$11[1])),(t$13=Serializer.serInt(),Serializer.serFieldO("generation",function()
  {
   return null;
  },function(vO,m$4)
  {
   return vO!=null&&vO.$==1?Model$1.New(m$4.snippets,(new Date(0)).getTime()+vO.$0*3600000,m$4.collapsed):m$4;
  },t$13[0],t$13[1])),(t$14=Serializer.serDate(),Serializer.serField("modified",function(m$4)
  {
   return m$4.modified;
  },function(v$2,m$4)
  {
   return Model$1.New(m$4.snippets,v$2,m$4.collapsed);
  },t$14[0],t$14[1])),(t$15=(t$16=Serializer$1.serSnippetId(),Serializer.serSet(t$16[0],t$16[1])),Serializer.serField("collapsed",function(m$4)
  {
   return m$4.collapsed;
  },function(v$2,m$4)
  {
   return Model$1.New(m$4.snippets,m$4.modified,v$2);
  },t$15[0],t$15[1]))],(i$1=Model$1.New([],(new Date(0)).getTime(),new FSharpSet.New$1(null)),[function(dim)
  {
   var x$7;
   function c$13(n,ser,_deser)
   {
    var x$8,m$4;
    x$8=ser(dim);
    m$4=((Runtime.Curried3(function($6,$7,$8)
    {
     return $6(Utils.prettyPrint($7)+": "+Utils.toSafe($8));
    }))(Global.id))(n);
    return x$8==null?null:{
     $:1,
     $0:m$4(x$8.$0)
    };
   }
   x$7=Strings.concat(", ",Seq$1.choose(function($6)
   {
    return c$13($6[0],$6[1],$6[2]);
   },x$4));
   return(function($6)
   {
    return function($7)
    {
     return $6("{"+Utils.toSafe($7)+"}");
    };
   }(Global.id))(x$7);
  },function(o)
  {
   return!o?i$1:Seq$1.fold(function(dim,t$25)
   {
    return(t$25[2](dim))(o[t$25[0]]);
   },i$1,x$4);
  }]));
  SC$1.fileName$1=Var$1.Create$1("");
  SC$1.serSnippetId2=[function(v$2)
  {
   return(function($6)
   {
    return function($7)
    {
     return $6(Utils.prettyPrint($7));
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
  SC$1.serSnippet2=(x$5=[(t$17=Importer.serSnippetId2(),Serializer.serField("id",function(s$1)
  {
   return s$1.snpId;
  },function(v$2,s$1)
  {
   return Snippet.New(Unchecked.Equals(v$2,SnippetId.get_Empty())?new SnippetId({
    $:0,
    $0:Guid.NewGuid()
   }):v$2,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$17[0],t$17[1])),(t$18=Serializer.serString(),Serializer.serField("name",function(s$1)
  {
   return s$1.snpName;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,v$2,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$18[0],t$18[1])),(t$19=Serializer.serString(),Serializer.serField("content",function(s$1)
  {
   return s$1.snpContent;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,v$2,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$19[0],t$19[1])),(t$20=(t$21=Importer.serSnippetId2(),Serializer.serOpt(t$21[0],t$21[1])),Serializer.serField("parent",function(s$1)
  {
   return s$1.snpParentIdO;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,Unchecked.Equals(v$2,{
    $:1,
    $0:SnippetId.get_Empty()
   })?null:v$2,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$20[0],t$20[1])),(t$22=(t$23=Importer.serSnippetId2(),Serializer.serArr(t$23[0],t$23[1])),Serializer.serField("predecessors",function(s$1)
  {
   return Arrays.ofSeq(s$1.snpPredIds);
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,new FSharpSet.New(v$2),s$1.snpProperties,s$1.snpModified);
  },t$22[0],t$22[1]))],(i$2=SnippetModule.New("","",null),[function(dim)
  {
   var x$7;
   function c$13(n,ser,_deser)
   {
    var x$8,m$4;
    x$8=ser(dim);
    m$4=((Runtime.Curried3(function($6,$7,$8)
    {
     return $6(Utils.prettyPrint($7)+": "+Utils.toSafe($8));
    }))(Global.id))(n);
    return x$8==null?null:{
     $:1,
     $0:m$4(x$8.$0)
    };
   }
   x$7=Strings.concat(", ",Seq$1.choose(function($6)
   {
    return c$13($6[0],$6[1],$6[2]);
   },x$5));
   return(function($6)
   {
    return function($7)
    {
     return $6("{"+Utils.toSafe($7)+"}");
    };
   }(Global.id))(x$7);
  },function(o)
  {
   return!o?i$2:Seq$1.fold(function(dim,t$25)
   {
    return(t$25[2](dim))(o[t$25[0]]);
   },i$2,x$5);
  }]));
  SC$1.serSnippets=(t$24=Importer.serSnippet2(),Serializer.serArr(t$24[0],t$24[1]));
  SC$1.endPointV=Router.InstallHash(EndPoint.NoSnippet,FSharpStation_Router.r());
  function f$24(a$5)
  {
   var pth;
   return a$5.$==0?View.rtn({
    $:1,
    $0:new SnippetId({
     $:0,
     $0:a$5.$0
    })
   }):a$5.$==1?(pth=a$5.$0,View$1.Map(function(p$20)
   {
    function m$4(s$1)
    {
     return s$1.snpId;
    }
    return p$20===Strings.concat("/",pth)?Snippets.currentSnippetIdOV().Get():Snippets.runReader(Snippets.handleError,FusionM.map(function(o)
    {
     return o==null?null:{
      $:1,
      $0:m$4(o.$0)
     };
    },SnippetModule.snippetFromPathORm(pth)));
   },Snippets.currentPathW())):View.rtn(null);
  }
  function a$3(sidO)
  {
   if(!Unchecked.Equals(Snippets.currentSnippetIdOV().Get(),sidO))
    Snippets.setCurrentSnippetIdO(sidO);
  }
  function f$25(a$5)
  {
   var guid;
   return a$5!=null&&a$5.$==1?(guid=a$5.$0.$0,View$1.Map(function(p$20)
   {
    return Unchecked.Equals({
     $:1,
     $0:Strings.SplitChars(p$20,["/"],0)
    },MainProgram.endPointV().Get())?MainProgram.endPointV().Get():{
     $:0,
     $0:guid
    };
   },Snippets.currentPathW())):View.rtn(EndPoint.NoSnippet);
  }
  function a$4(ep)
  {
   if(!Unchecked.Equals(MainProgram.endPointV().Get(),ep))
    MainProgram.endPointV().Set(ep);
  }
  View$1.Sink((g$20=function(a$5)
  {
   View$1.Get(a$3,a$5);
  },function(x$7)
  {
   return g$20(f$24(x$7));
  }),MainProgram.endPointV().get_View());
  View$1.Sink((g$21=function(a$5)
  {
   View$1.Get(a$4,a$5);
  },function(x$7)
  {
   return g$21(f$25(x$7));
  }),Snippets.currentSnippetIdOV().get_View());
  SC$1.FStationLyt=new PlugInName({
   $:0,
   $0:"FStationLyt"
  });
  x$6=Snippets.codeAndStartsW();
  View$1.Sink(Library.delayed(300,function(t$25)
  {
   Monaco$1.parse(t$25[0],t$25[1]);
  }),x$6);
  View$1.Sink(function(m$4)
  {
   self.onbeforeunload=m$4!==""?function(e)
   {
    e.returnValue="Changes you made may not be saved.";
   }:null;
  },Snippets.SaveAsClassW());
  SC$1.snippetNameV=Var$1.Lens(Snippets.currentSnippetV(),function($6)
  {
   return $6.snpName;
  },function($6,$7)
  {
   return Snippet.New($6.snpId,$7,$6.snpContent,$6.snpParentIdO,$6.snpPredIds,$6.snpProperties,$6.snpModified);
  });
  SC$1.contentV=Var$1.Lens(Snippets.currentSnippetV(),function($6)
  {
   return $6.snpContent;
  },function($6,$7)
  {
   return Snippet.New($6.snpId,$6.snpName,$7,$6.snpParentIdO,$6.snpPredIds,$6.snpProperties,$6.snpModified);
  });
  SC$1.wsStationClient=new WSMessagingClient.New(FStation.id(),null,null);
  Concurrency.Start((b$21=null,Concurrency.Delay(function()
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
      var _this,f$26,g$22,f$27,dst,p$20;
      function f$28(a$5)
      {
       return(FSharpStation_JsonDecoder.j$4())(JSON.parse(a$5));
      }
      function f$29(a$5)
      {
       return JSON.stringify((FSharpStation_JsonEncoder.j$4())(a$5));
      }
      function g$23(v$2)
      {
       return Concurrency.Return(v$2);
      }
      function g$24(m$4)
      {
       Operators$7.FailWith(m$4);
      }
      _this=Messaging.wsStationClient();
      _this.payloadProcessorO={
       $:1,
       $0:(f$26=function(x$7)
       {
        return Messaging.processMessage(f$28(x$7));
       },(g$22=(f$27=function(x$7)
       {
        return g$23(f$29(x$7));
       },function(v$2)
       {
        return Concurrency.Bind(v$2,f$27);
       }),function(x$7)
       {
        return g$22(f$26(x$7));
       }))
      };
      AsyncResult.iterA(function(x$7)
      {
       return g$24(Global.String(x$7));
      },Global.ignore,_this.sendAndForget(WebSockets.msgType(MessageType.MsgInformation,(dst=WebSockets.MessageBrokerAddress(),(p$20=JSON.stringify(((Provider.Id())())("Registering Processor")),MessageGeneric.New(new Address({
       $:0,
       $0:""
      }),dst,MessageType.MsgRequest,"",Guid.NewGuid(),p$20,Replier.NoReply))))));
      return Concurrency.Bind(Concurrency.Sleep(60000),function()
      {
       return Concurrency.Return(null);
      });
     }),function(a$5)
     {
      ((function($6)
      {
       return function($7)
       {
        return $6(Utils.toSafe($7));
       };
      }(function(s$1)
      {
       console.log(s$1);
      }))(a$5.message));
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
  return FSharpStation_JsonEncoder._v$6?FSharpStation_JsonEncoder._v$6:FSharpStation_JsonEncoder._v$6=(Provider.EncodeUnion(void 0,"$",[[0,[["$0","Item",Provider.Id(),0]]],[1,[["$0","Item",Provider.EncodeArray(FSharpStation_JsonEncoder.j$7),0]]],[2,[["$0","Item",Provider.EncodeDateTime(),0]]]]))();
 };
 FSharpStation_JsonEncoder.j$7=function()
 {
  return FSharpStation_JsonEncoder._v$7?FSharpStation_JsonEncoder._v$7:FSharpStation_JsonEncoder._v$7=(Provider.EncodeRecord(void 0,[["snpId",FSharpStation_JsonEncoder.j$8,0],["snpName",Provider.Id(),0],["snpContent",Provider.Id(),0],["snpParentIdO",FSharpStation_JsonEncoder.j$8,1],["snpPredIds",Provider.EncodeSet(FSharpStation_JsonEncoder.j$8),0],["snpProperties",Provider.EncodeArray(Provider.EncodeTuple([Provider.Id(),Provider.Id()])),0],["snpModified",Provider.EncodeDateTime(),0]]))();
 };
 FSharpStation_JsonEncoder.j$8=function()
 {
  return FSharpStation_JsonEncoder._v$8?FSharpStation_JsonEncoder._v$8:FSharpStation_JsonEncoder._v$8=(Provider.EncodeUnion(SnippetId,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 FSharpStation_Templates.appfwkclient=function(h)
 {
  FSharpStation_Templates.fixedsplitterhor();
  FSharpStation_Templates.fixedsplitterver();
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"appfwkclient"
  },h):void 0;
 };
 FSharpStation_GeneratedPrintf.p=function($1)
 {
  return"PlgElemName "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_Templates.fixedsplitterhor=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"fixedsplitterhor"
  },h):void 0;
 };
 FSharpStation_GeneratedPrintf.p$2=function($1)
 {
  return"SnippetId "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_Router.r=function()
 {
  return RouterOperators.JSUnion(void 0,[[null,[[null,["Snippet"]]],[RouterOperators.rGuid()]],[null,[[null,["Path"]]],[RouterOperators.rWildcardArray(RouterOperators.rString())]],[null,[[null,[]]],[]]]);
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("docName = "+FSharpStation_GeneratedPrintf.p($1.docName))+"; "+("docDoc = "+Utils.prettyPrint($1.docDoc))+"}";
 };
 FSharpStation_JsonDecoder.j$5=function()
 {
  return FSharpStation_JsonDecoder._v$5?FSharpStation_JsonDecoder._v$5:FSharpStation_JsonDecoder._v$5=(Provider.DecodeUnion(void 0,"$",[[0,[["$0","Item",FSharpStation_JsonDecoder.j$6,0]]],[1,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]]]))();
 };
 FSharpStation_JsonDecoder.j$6=function()
 {
  return FSharpStation_JsonDecoder._v$6?FSharpStation_JsonDecoder._v$6:FSharpStation_JsonDecoder._v$6=(Provider.DecodeUnion(SnippetId,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 FSharpStation_JsonDecoder.j$4=function()
 {
  return FSharpStation_JsonDecoder._v$4?FSharpStation_JsonDecoder._v$4:FSharpStation_JsonDecoder._v$4=(Provider.DecodeUnion(void 0,"$",[[0,[]],[1,[["$0","Item",Provider.DecodeArray(FSharpStation_JsonDecoder.j$5),0]]],[2,[["$0","Item",FSharpStation_JsonDecoder.j$5,0]]],[3,[["$0","Item",FSharpStation_JsonDecoder.j$5,0]]],[4,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]],[5,[]],[6,[["$0","Item",Provider.Id(),0]]],[7,[["$0","Item1",Provider.Id(),0],["$1","Item2",Provider.Id(),0]]],[8,[["$0","Item",FSharpStation_JsonDecoder.j$5,0]]]]))();
 };
 FSharpStation_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==1?"FullRef ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":"LocalRef "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_JsonEncoder.j$5=function()
 {
  return FSharpStation_JsonEncoder._v$5?FSharpStation_JsonEncoder._v$5:FSharpStation_JsonEncoder._v$5=(Provider.EncodeUnion(ResultMessage,"$",[[0,[]],[1,[["$0","Item",Provider.Id(),0]]],[2,[["$0","Item",Provider.Id(),0]]],[3,[["$0","Item",Provider.Id(),0]]],[4,[["$0","Item",Provider.Id(),0]]],[5,[["$0","Item1",Provider.Id(),0],["$1","Item2",Provider.Id(),0]]],[6,[["$0","Item",Provider.EncodeArray(FSharpStation_JsonEncoder.j$5),0]]]]))();
 };
 FSharpStation_Templates.fixedsplitterver=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"fixedsplitterver"
  },h):void 0;
 };
 FSharpStation_Templates.wcompsplitterver=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"wcompsplitterver"
  },h):void 0;
 };
 FSharpStation_Templates.wcompsplitterhor=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"wcompsplitterhor"
  },h):void 0;
 };
 FSharpStation_Templates.appframework=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"appframework"
  },h):void 0;
 };
 FSharpStation_Templates.tile=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"tile"
  },h):void 0;
 };
 FSharpStation_Templates.action=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"action"
  },h):void 0;
 };
 FSharpStation_Templates.namevalue=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"namevalue"
  },h):void 0;
 };
 FSharpStation_Templates.namevalueinput=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"namevalueinput"
  },h):void 0;
 };
 FSharpStation_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==7?"EnPlgRef "+("("+Utils.prettyPrint($1.$0[0])+", "+FSharpStation_GeneratedPrintf.p$27($1.$0[1])+")"):$1.$==6?"EnPlgDef "+FSharpStation_GeneratedPrintf.p$26($1.$0):$1.$==5?"EnVJSDef "+FSharpStation_GeneratedPrintf.p$25($1.$0):$1.$==4?"EnViwDef "+FSharpStation_GeneratedPrintf.p$24($1.$0):$1.$==3?"EnVarDef "+FSharpStation_GeneratedPrintf.p$23($1.$0):$1.$==2?"EnActDefs "+FSharpStation_GeneratedPrintf.p$22($1.$0):$1.$==1?"EnActDef "+FSharpStation_GeneratedPrintf.p$21($1.$0):"EnDocDef "+FSharpStation_GeneratedPrintf.p$4($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$27=function($1)
 {
  return $1.$==4?"RPlg":$1.$==3?"RAct":$1.$==2?"RViw":$1.$==1?"RVar":"RDoc";
 };
 FSharpStation_GeneratedPrintf.p$26=function($1)
 {
  return"PlgDef "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$25=function($1)
 {
  return"VJSDef "+Utils.printList(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$17($2);
  },$1.$0);
 };
 FSharpStation_GeneratedPrintf.p$24=function($1)
 {
  return"ViwDef "+Utils.printList(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$17($2);
  },$1.$0);
 };
 FSharpStation_GeneratedPrintf.p$23=function($1)
 {
  return"VarDef "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$22=function($1)
 {
  return"ActDefs "+Utils.printList(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$9($2);
  },$1.$0);
 };
 FSharpStation_GeneratedPrintf.p$21=function($1)
 {
  return"ActDef ("+FSharpStation_GeneratedPrintf.p$9($1.$0)+", "+Utils.printList(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$17($2);
  },$1.$1)+")";
 };
 FSharpStation_GeneratedPrintf.p$4=function($1)
 {
  return $1.$==7?"DcTemplate "+GeneratedPrintf.p$1($1.$0):$1.$==6?"DcElement "+FSharpStation_GeneratedPrintf.p$20($1.$0):$1.$==5?"DcConcat "+FSharpStation_GeneratedPrintf.p$18($1.$0):$1.$==4?"DcDocF "+FSharpStation_GeneratedPrintf.p$16($1.$0):$1.$==3?"DcTextArea "+FSharpStation_GeneratedPrintf.p$15($1.$0):$1.$==2?"DcInput "+FSharpStation_GeneratedPrintf.p$14($1.$0):$1.$==1?"DcButton "+FSharpStation_GeneratedPrintf.p$8($1.$0):"DcSplitter "+FSharpStation_GeneratedPrintf.p$5($1.$0);
 };
 GeneratedPrintf.p$1=function($1)
 {
  return"{"+("tmpName = "+Utils.prettyPrint($1.tmpName))+"; "+("vars = "+Utils.printArray(function($2)
  {
   return"("+Utils.prettyPrint($2[0])+", "+FSharpStation_GeneratedPrintf.p$12($2[1])+")";
  },$1.vars))+"; "+("views = "+Utils.printArray(function($2)
  {
   return"("+Utils.prettyPrint($2[0])+", "+FSharpStation_GeneratedPrintf.p$17($2[1])+")";
  },$1.views))+"; "+("docs = "+Utils.printArray(function($2)
  {
   return"("+Utils.prettyPrint($2[0])+", "+FSharpStation_GeneratedPrintf.p$7($2[1])+")";
  },$1.docs))+"; "+("actions = "+Utils.printArray(function($2)
  {
   return"("+Utils.prettyPrint($2[0])+", "+FSharpStation_GeneratedPrintf.p$9($2[1])+")";
  },$1.actions))+"; "+("attrs = "+FSharpStation_GeneratedPrintf.p$17($1.attrs))+"}";
 };
 FSharpStation_GeneratedPrintf.p$20=function($1)
 {
  return"ElementDef ("+Utils.prettyPrint($1.$0)+", "+FSharpStation_GeneratedPrintf.p$17($1.$1)+", "+Utils.printList(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$19($2);
  },$1.$2)+")";
 };
 FSharpStation_GeneratedPrintf.p$18=function($1)
 {
  return"ConcatDef "+Utils.printList(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$19($2);
  },$1.$0);
 };
 FSharpStation_GeneratedPrintf.p$19=function($1)
 {
  return $1.$==3?"NdViwRef "+FSharpStation_GeneratedPrintf.p$13($1.$0):$1.$==2?"NdVarRef "+FSharpStation_GeneratedPrintf.p$12($1.$0):$1.$==1?"NdDocRef "+FSharpStation_GeneratedPrintf.p$7($1.$0):"NdTextValL "+Utils.printList(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$11($2);
  },$1.$0);
 };
 FSharpStation_GeneratedPrintf.p$16=function($1)
 {
  return"DocFDef ("+FSharpStation_GeneratedPrintf.p$7($1.$0)+", "+Utils.printList(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$17($2);
  },$1.$1)+")";
 };
 FSharpStation_GeneratedPrintf.p$17=function($1)
 {
  return $1.$==4?"PrActRef "+FSharpStation_GeneratedPrintf.p$9($1.$0):$1.$==3?"PrViwRef "+FSharpStation_GeneratedPrintf.p$13($1.$0):$1.$==2?"PrVarRef "+FSharpStation_GeneratedPrintf.p$12($1.$0):$1.$==1?"PrDocRef "+FSharpStation_GeneratedPrintf.p$7($1.$0):"PrTextValL "+Utils.printList(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$11($2);
  },$1.$0);
 };
 FSharpStation_GeneratedPrintf.p$15=function($1)
 {
  return"TextAreaDef ("+FSharpStation_GeneratedPrintf.p$12($1.$0)+", "+Utils.printArray(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$10($2);
  },$1.$1)+")";
 };
 FSharpStation_GeneratedPrintf.p$14=function($1)
 {
  return"InputDef ("+FSharpStation_GeneratedPrintf.p$12($1.$0)+", "+Utils.printArray(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$10($2);
  },$1.$1)+")";
 };
 FSharpStation_GeneratedPrintf.p$8=function($1)
 {
  return"ButtonDef ("+FSharpStation_GeneratedPrintf.p$9($1.$0)+", "+Utils.printArray(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$10($2);
  },$1.$1)+", "+Utils.printList(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$11($2);
  },$1.$2)+")";
 };
 FSharpStation_GeneratedPrintf.p$10=function($1)
 {
  return $1.$==2?"AtAct ("+Utils.prettyPrint($1.$0)+", "+FSharpStation_GeneratedPrintf.p$9($1.$1)+")":$1.$==1?"AtAttr ("+Utils.prettyPrint($1.$0)+", "+Utils.printList(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$11($2);
  },$1.$1)+")":"AtStyle ("+Utils.prettyPrint($1.$0)+", "+Utils.printList(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$11($2);
  },$1.$1)+")";
 };
 FSharpStation_GeneratedPrintf.p$11=function($1)
 {
  return $1.$==4?"TvDocRef "+FSharpStation_GeneratedPrintf.p$7($1.$0):$1.$==3?"TvActRef "+FSharpStation_GeneratedPrintf.p$9($1.$0):$1.$==2?"TvViwRef "+FSharpStation_GeneratedPrintf.p$13($1.$0):$1.$==1?"TvVarRef "+FSharpStation_GeneratedPrintf.p$12($1.$0):"TvConst "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$13=function($1)
 {
  return"ViwRef "+FSharpStation_GeneratedPrintf.p$1($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$12=function($1)
 {
  return"VarRef "+FSharpStation_GeneratedPrintf.p$1($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$9=function($1)
 {
  return"ActRef "+FSharpStation_GeneratedPrintf.p$1($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$5=function($1)
 {
  return"SplitterDef ("+Utils.prettyPrint($1.$0)+", "+FSharpStation_GeneratedPrintf.p$6($1.$1)+", "+FSharpStation_GeneratedPrintf.p$7($1.$2)+", "+FSharpStation_GeneratedPrintf.p$7($1.$3)+")";
 };
 FSharpStation_GeneratedPrintf.p$7=function($1)
 {
  return"DocRef "+FSharpStation_GeneratedPrintf.p$1($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$6=function($1)
 {
  return $1.$==1?"Variable ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":"Fixed ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")";
 };
 GeneratedPrintf.p$2=function($1)
 {
  return"{"+("actName = "+FSharpStation_GeneratedPrintf.p($1.actName))+"; "+("actFunction = "+FSharpStation_GeneratedPrintf.p$28($1.actFunction))+"; "+("actEnabled = "+FSharpStation_GeneratedPrintf.p$29($1.actEnabled))+"}";
 };
 FSharpStation_GeneratedPrintf.p$29=function($1)
 {
  return"View <fun>";
 };
 FSharpStation_GeneratedPrintf.p$28=function($1)
 {
  return $1.$==2?"FunAct2 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":$1.$==1?"FunAct1 (<fun>, "+Utils.prettyPrint($1.$1)+")":"FunAct0 <fun>";
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
  FSharpStation_Templates.fixedsplitterhor$1();
  FSharpStation_Templates.fixedsplitterver$1();
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"layout"
  },h):void 0;
 };
 FSharpStation_Templates.fixedsplitterver$1=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"fixedsplitterver"
  },h):void 0;
 };
 FSharpStation_Templates.fixedsplitterhor$1=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"fixedsplitterhor"
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
 FSharpStation_GeneratedPrintf.p$30=function($1)
 {
  return $1.$==6?"RMessages "+Utils.printArray(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$30($2);
  },$1.$0):$1.$==5?"ExceptMsg ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":$1.$==4?"Message "+Utils.prettyPrint($1.$0):$1.$==3?"Info "+Utils.prettyPrint($1.$0):$1.$==2?"Warning "+Utils.prettyPrint($1.$0):$1.$==1?"ErrorMsg "+Utils.prettyPrint($1.$0):"NoMsg";
 };
 FSharpStation_GeneratedPrintf.p$32=function($1)
 {
  return $1.$==8?"MsgGetModified "+FSharpStation_GeneratedPrintf.p$31($1.$0):$1.$==7?"MsgSetValue ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":$1.$==6?"MsgGetValue "+Utils.prettyPrint($1.$0):$1.$==5?"MsgGetUrl":$1.$==4?"MsgAction "+Utils.printArray(Utils.prettyPrint,$1.$0):$1.$==3?"MsgGetPredecessors "+FSharpStation_GeneratedPrintf.p$31($1.$0):$1.$==2?"MsgGetCode "+FSharpStation_GeneratedPrintf.p$31($1.$0):$1.$==1?"MsgGetSnippets "+Utils.printArray(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$31($2);
  },$1.$0):"MsgGetId";
 };
 FSharpStation_GeneratedPrintf.p$31=function($1)
 {
  return $1.$==1?"RefSnippetPath "+Utils.printArray(Utils.prettyPrint,$1.$0):"RefSnippetId "+FSharpStation_GeneratedPrintf.p$2($1.$0);
 };
 FSharpStation_JsonEncoder.j$9=function()
 {
  return FSharpStation_JsonEncoder._v$9?FSharpStation_JsonEncoder._v$9:FSharpStation_JsonEncoder._v$9=(Provider.EncodeUnion(void 0,"type",[["BRGetConnections",[]],["BRGetProcessId",[]]]))();
 };
 FSharpStation_GeneratedPrintf.p$33=function($1)
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
 FSharpStation_GeneratedPrintf.p$36=function($1)
 {
  return $1.$==2?"Receiver":$1.$==1?"Broker":"NoReply";
 };
 FSharpStation_GeneratedPrintf.p$35=function($1)
 {
  return $1.$==5?"MsgRequestForEcho":$1.$==4?"MsgRequestForId":$1.$==3?"MsgFromBroker":$1.$==2?"MsgReply":$1.$==1?"MsgRequest":"MsgInformation";
 };
 GeneratedPrintf.p$3=function($1)
 {
  return"{"+("from = "+FSharpStation_GeneratedPrintf.p$34($1.from))+"; "+("destination = "+FSharpStation_GeneratedPrintf.p$34($1.destination))+"; "+("msgType = "+FSharpStation_GeneratedPrintf.p$35($1.msgType))+"; "+("subtype = "+Utils.prettyPrint($1.subtype))+"; "+("id = "+Utils.prettyPrint($1.id))+"; "+("payload = "+Utils.prettyPrint($1.payload))+"; "+("replier = "+FSharpStation_GeneratedPrintf.p$36($1.replier))+"}";
 };
 FSharpStation_GeneratedPrintf.p$34=function($1)
 {
  return"Address "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$37=function($1)
 {
  return $1.$==3?"Close":$1.$==2?"Open":$1.$==1?"Error":"Message "+GeneratedPrintf.p$3($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$38=function($1)
 {
  return $1.$==6?"RMessages "+Utils.printArray(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$38($2);
  },$1.$0):$1.$==5?"ExceptMsg ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":$1.$==4?"Message "+Utils.printArray(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$39($2);
  },$1.$0):$1.$==3?"Info "+Utils.prettyPrint($1.$0):$1.$==2?"Warning "+Utils.prettyPrint($1.$0):$1.$==1?"ErrorMsg "+Utils.prettyPrint($1.$0):"NoMsg";
 };
 FSharpStation_GeneratedPrintf.p$39=function($1)
 {
  return $1.$==17?"KMultiple "+Utils.printArray(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$39($2);
  },$1.$0):$1.$==16?"KUnionCase "+GeneratedPrintf.p$25($1.$0):$1.$==15?"KNamespaces "+GeneratedPrintf.p$22($1.$0):$1.$==14?"KCompilerLocation "+GeneratedPrintf.p$21($1.$0):$1.$==13?"KSignatureData "+GeneratedPrintf.p$19($1.$0):$1.$==12?"KTypeSig "+Utils.prettyPrint($1.$0):$1.$==11?"KToolTip "+Utils.printArray(function($2)
  {
   return Utils.printArray(function($3)
   {
    return GeneratedPrintf.p$6($3);
   },$2);
  },$1.$0):$1.$==10?"KDeclarations "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$17($2);
  },$1.$0):$1.$==9?"KFindDecl "+GeneratedPrintf.p$16($1.$0):$1.$==8?"KColorizations "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$15($2);
  },$1.$0):$1.$==7?"KErrors "+GeneratedPrintf.p$13($1.$0):$1.$==6?"KMethod "+GeneratedPrintf.p$10($1.$0):$1.$==5?"KHelp "+Utils.prettyPrint($1.$0):$1.$==4?"KSymbolUse "+GeneratedPrintf.p$8($1.$0):$1.$==3?"KCompletion "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$7($2);
  },$1.$0):$1.$==2?"KHelpText "+GeneratedPrintf.p$5($1.$0):$1.$==1?"KError "+GeneratedPrintf.p$4($1.$0):"KInfo "+Utils.prettyPrint($1.$0);
 };
 GeneratedPrintf.p$25=function($1)
 {
  return"{"+("Text = "+Utils.prettyPrint($1.Text))+"}";
 };
 GeneratedPrintf.p$24=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Qualifier = "+Utils.prettyPrint($1.Qualifier))+"}";
 };
 GeneratedPrintf.p$23=function($1)
 {
  return"{"+("Namespace = "+Utils.prettyPrint($1.Namespace))+"; "+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Type = "+Utils.prettyPrint($1.Type))+"; "+("Line = "+Utils.prettyPrint($1.Line))+"; "+("Column = "+Utils.prettyPrint($1.Column))+"; "+("MultipleNames = "+Utils.prettyPrint($1.MultipleNames))+"}";
 };
 GeneratedPrintf.p$21=function($1)
 {
  return"{"+("Fsc = "+Utils.prettyPrint($1.Fsc))+"; "+("Fsi = "+Utils.prettyPrint($1.Fsi))+"; "+("MSBuild = "+Utils.prettyPrint($1.MSBuild))+"}";
 };
 GeneratedPrintf.p$19=function($1)
 {
  return"{"+("OutputType = "+Utils.prettyPrint($1.OutputType))+"; "+("Parameters = "+Utils.printList(function($2)
  {
   return Utils.printList(function($3)
   {
    return GeneratedPrintf.p$20($3);
   },$2);
  },$1.Parameters))+"}";
 };
 GeneratedPrintf.p$22=function($1)
 {
  return"{"+("Opens = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$23($2);
  },$1.Opens))+"; "+("Qualifies = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$24($2);
  },$1.Qualifies))+"; "+("Word = "+Utils.prettyPrint($1.Word))+"}";
 };
 GeneratedPrintf.p$20=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Type = "+Utils.prettyPrint($1.Type))+"}";
 };
 GeneratedPrintf.p$17=function($1)
 {
  return"{"+("Declaration = "+GeneratedPrintf.p$18($1.Declaration))+"; "+("Nested = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$18($2);
  },$1.Nested))+"}";
 };
 GeneratedPrintf.p$16=function($1)
 {
  return"{"+("File = "+Utils.prettyPrint($1.File))+"; "+("Line = "+Utils.prettyPrint($1.Line))+"; "+("Column = "+Utils.prettyPrint($1.Column))+"}";
 };
 GeneratedPrintf.p$18=function($1)
 {
  return"{"+("UniqueName = "+Utils.prettyPrint($1.UniqueName))+"; "+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Glyph = "+Utils.prettyPrint($1.Glyph))+"; "+("GlyphChar = "+Utils.prettyPrint($1.GlyphChar))+"; "+("IsTopLevel = "+Utils.prettyPrint($1.IsTopLevel))+"; "+("File = "+Utils.prettyPrint($1.File))+"; "+("EnclosingEntity = "+Utils.prettyPrint($1.EnclosingEntity))+"; "+("IsAbstract = "+Utils.prettyPrint($1.IsAbstract))+"}";
 };
 GeneratedPrintf.p$15=function($1)
 {
  return"{"+("Kind = "+Utils.prettyPrint($1.Kind))+"}";
 };
 GeneratedPrintf.p$13=function($1)
 {
  return"{"+("File = "+Utils.prettyPrint($1.File))+"; "+("Errors = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$14($2);
  },$1.Errors))+"}";
 };
 GeneratedPrintf.p$14=function($1)
 {
  return"{"+("FileName = "+Utils.prettyPrint($1.FileName))+"; "+("StartLine = "+Utils.prettyPrint($1.StartLine))+"; "+("EndLine = "+Utils.prettyPrint($1.EndLine))+"; "+("StartColumn = "+Utils.prettyPrint($1.StartColumn))+"; "+("EndColumn = "+Utils.prettyPrint($1.EndColumn))+"; "+("Severity = "+Utils.prettyPrint($1.Severity))+"; "+("Message = "+Utils.prettyPrint($1.Message))+"; "+("Subcategory = "+Utils.prettyPrint($1.Subcategory))+"}";
 };
 GeneratedPrintf.p$10=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("CurrentParameter = "+Utils.prettyPrint($1.CurrentParameter))+"; "+("Overloads = "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$11($2);
  },$1.Overloads))+"}";
 };
 GeneratedPrintf.p$11=function($1)
 {
  return"{"+("Tip = "+Utils.printList(function($2)
  {
   return Utils.printList(function($3)
   {
    return GeneratedPrintf.p$6($3);
   },$2);
  },$1.Tip))+"; "+("TypeText = "+Utils.prettyPrint($1.TypeText))+"; "+("Parameters = "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$12($2);
  },$1.Parameters))+"; "+("IsStaticArguments = "+Utils.prettyPrint($1.IsStaticArguments))+"}";
 };
 GeneratedPrintf.p$12=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("CanonicalTypeTextForSorting = "+Utils.prettyPrint($1.CanonicalTypeTextForSorting))+"; "+("Display = "+Utils.prettyPrint($1.Display))+"; "+("Description = "+Utils.prettyPrint($1.Description))+"}";
 };
 GeneratedPrintf.p$8=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Uses = "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$9($2);
  },$1.Uses))+"}";
 };
 GeneratedPrintf.p$9=function($1)
 {
  return"{"+("FileName = "+Utils.prettyPrint($1.FileName))+"; "+("StartLine = "+Utils.prettyPrint($1.StartLine))+"; "+("StartColumn = "+Utils.prettyPrint($1.StartColumn))+"; "+("EndLine = "+Utils.prettyPrint($1.EndLine))+"; "+("EndColumn = "+Utils.prettyPrint($1.EndColumn))+"; "+("IsFromDefinition = "+Utils.prettyPrint($1.IsFromDefinition))+"; "+("IsFromAttribute = "+Utils.prettyPrint($1.IsFromAttribute))+"; "+("IsFromComputationExpression = "+Utils.prettyPrint($1.IsFromComputationExpression))+"; "+("IsFromDispatchSlotImplementation = "+Utils.prettyPrint($1.IsFromDispatchSlotImplementation))+"; "+("IsFromPattern = "+Utils.prettyPrint($1.IsFromPattern))+"; "+("IsFromType = "+Utils.prettyPrint($1.IsFromType))+"}";
 };
 GeneratedPrintf.p$7=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("ReplacementText = "+Utils.prettyPrint($1.ReplacementText))+"; "+("Glyph = "+Utils.prettyPrint($1.Glyph))+"; "+("GlyphChar = "+Utils.prettyPrint($1.GlyphChar))+"}";
 };
 GeneratedPrintf.p$5=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Overloads = "+Utils.printList(function($2)
  {
   return Utils.printList(function($3)
   {
    return GeneratedPrintf.p$6($3);
   },$2);
  },$1.Overloads))+"}";
 };
 GeneratedPrintf.p$6=function($1)
 {
  return"{"+("Signature = "+Utils.prettyPrint($1.Signature))+"; "+("Comment = "+Utils.prettyPrint($1.Comment))+"; "+("Footer = "+Utils.prettyPrint($1.Footer))+"}";
 };
 GeneratedPrintf.p$4=function($1)
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
}());

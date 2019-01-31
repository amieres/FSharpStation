(function()
{
 "use strict";
 var Global,FsRoot,Library,Dict,ResultMessage,ResultMessageHelpers,Monads,Seq,Option,Async,WebSharper,Obj,Result,Builder,Operators,FusionM,Operators$1,Builder$1,Builder$2,Eff,Eff$1,Done,LambdaT,Operators$2,EffBuilder,Reader,Ask,Rsl,Fail,FusionAsyncM,Operators$3,Builder$3,Builder$4,ResultM,Builder$5,Operators$4,ResultMAutoOpen,AsyncResult,AsyncResultBuilder,AsyncResultBuilderP,Extensions,AsyncResultM,AsyncResultMBuilder,AsyncResultMAutoOpen,String,Array,ParseO,MailboxProcessorExt,Mailbox,StateFull,Hole,TreeEff,Node,LibraryJS,View,Var,ListModel,LoadFiles,REGEX,ResizeObserver,Monaco,Position,Range,Uri,Location,FindMatch,WordAtPosition,Model,MarkDownString,MarkerData,CompletionItem,Hover,Editor,MonacoConfig,Library2,WebSockets,Address,BrokerRequest,MessageType,BrokerMessage,Replier,MessageGeneric,FsAutoComplete,CommTypes,ResponseError,Location$1,CompletionResponse,OverloadDescription,OverloadParameter,Overload,Parameter,SignatureData,MethodResponse,SymbolUseRange,SymbolUseResponse,HelpTextResponse,CompilerLocationResponse,FSharpErrorInfo,ErrorResponse,Colorization,Declaration,DeclarationResponse,OpenNamespace,QualifySymbol,ResolveNamespaceResponse,UnionCaseResponse,MsgTypes,ParseRequest,DeclarationsRequest,CompletionRequest,PositionRequest,ProjectRequest,LintRequest,HelptextRequest,WorkspacePeekRequest,Calls,RuleEditor,Templating,CalculationModel,DimType,CubeType,AttType,ElmType,ModId,AttId,ElmId,CubId,DimId,CalId,TotId,ForId,RulId,Attribute,Element,Dimension,UnaryOp,Operator,ExpressionText,ExpressionNumber,ExpressionAny,Slice,ForType,Formula,Calculation,Total,RuleKey,Cube,Rule,RuleMsg,Model$1,HelperTypeN,HelperTypeT,HelperTypeA,Model0,ElementModule,ElmReferenceModule,SliceModule,DimensionModule,CubeModule,CalculationModule,TotalModule,ModelModule,FormulaModule,RuleModule,AttributeModule,Tree,Weight,TreeNode,TreeCollection,TreeNode$1,Monaco$1,HoverProvider,CompletionItemProvider,DefinitionProvider,Version,VersionModule,ModelUI,MsgModel,ModelUIModule,Global$1,FSCode,LocationDet,MsgLocation,ParseFS,Render,DragDrop,DragInfo,TableDimensions,TableCalculations,MainProgram,UpdateModelUI,SC$1,RuleEditor_GeneratedPrintf,RuleEditor_Templates,IntelliFactory,Runtime,Utils,Strings,Seq$1,List,Arrays,Concurrency,Enumerator,Result$1,Operators$5,Unchecked,Slice$1,Control,MailboxProcessor,console,CancellationTokenSource,UI,View$1,Var$1,FromView,Doc,Var$2,AttrProxy,Remoting,AjaxRemotingProvider,System,Guid,Collections,FSharpMap,FSharpSet,Set,Map,Date,Templating$1,Runtime$1,Server,ProviderBuilder,Handler,TemplateInstance,AppFramework,PlugIn,Lazy,LayoutEngineModule,AttrModule,DateUtil,Numeric,ListModel$1,Dictionary,Client,Templates;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 Dict=Library.Dict=Library.Dict||{};
 ResultMessage=Library.ResultMessage=Library.ResultMessage||{};
 ResultMessageHelpers=Library.ResultMessageHelpers=Library.ResultMessageHelpers||{};
 Monads=Library.Monads=Library.Monads||{};
 Seq=Monads.Seq=Monads.Seq||{};
 Option=Monads.Option=Monads.Option||{};
 Async=Monads.Async=Monads.Async||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 Operators=Result.Operators=Result.Operators||{};
 FusionM=Monads.FusionM=Monads.FusionM||{};
 Operators$1=FusionM.Operators=FusionM.Operators||{};
 Builder$1=FusionM.Builder=FusionM.Builder||{};
 Builder$2=Builder$1.Builder=Builder$1.Builder||{};
 Eff=Monads.Eff=Monads.Eff||{};
 Eff$1=Eff.Eff=Eff.Eff||{};
 Done=Eff.Done=Eff.Done||{};
 LambdaT=Eff$1.LambdaT=Eff$1.LambdaT||{};
 Operators$2=Eff.Operators=Eff.Operators||{};
 EffBuilder=Eff.EffBuilder=Eff.EffBuilder||{};
 Reader=Eff.Reader=Eff.Reader||{};
 Ask=Reader.Ask=Reader.Ask||{};
 Rsl=Eff.Rsl=Eff.Rsl||{};
 Fail=Rsl.Fail=Rsl.Fail||{};
 FusionAsyncM=Monads.FusionAsyncM=Monads.FusionAsyncM||{};
 Operators$3=FusionAsyncM.Operators=FusionAsyncM.Operators||{};
 Builder$3=FusionAsyncM.Builder=FusionAsyncM.Builder||{};
 Builder$4=Builder$3.Builder=Builder$3.Builder||{};
 ResultM=Monads.ResultM=Monads.ResultM||{};
 Builder$5=ResultM.Builder=ResultM.Builder||{};
 Operators$4=ResultM.Operators=ResultM.Operators||{};
 ResultMAutoOpen=Monads.ResultMAutoOpen=Monads.ResultMAutoOpen||{};
 AsyncResult=Monads.AsyncResult=Monads.AsyncResult||{};
 AsyncResultBuilder=Monads.AsyncResultBuilder=Monads.AsyncResultBuilder||{};
 AsyncResultBuilderP=Monads.AsyncResultBuilderP=Monads.AsyncResultBuilderP||{};
 Extensions=Monads.Extensions=Monads.Extensions||{};
 AsyncResultM=Monads.AsyncResultM=Monads.AsyncResultM||{};
 AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder||{};
 AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen||{};
 String=Library.String=Library.String||{};
 Array=Library.Array=Library.Array||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 MailboxProcessorExt=Library.MailboxProcessorExt=Library.MailboxProcessorExt||{};
 Mailbox=Library.Mailbox=Library.Mailbox||{};
 StateFull=Mailbox.StateFull=Mailbox.StateFull||{};
 Hole=Library.Hole=Library.Hole||{};
 TreeEff=Library.TreeEff=Library.TreeEff||{};
 Node=TreeEff.Node=TreeEff.Node||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 View=LibraryJS.View=LibraryJS.View||{};
 Var=LibraryJS.Var=LibraryJS.Var||{};
 ListModel=LibraryJS.ListModel=LibraryJS.ListModel||{};
 LoadFiles=LibraryJS.LoadFiles=LibraryJS.LoadFiles||{};
 REGEX=LibraryJS.REGEX=LibraryJS.REGEX||{};
 ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};
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
 Library2=FsRoot.Library2=FsRoot.Library2||{};
 WebSockets=Library2.WebSockets=Library2.WebSockets||{};
 Address=WebSockets.Address=WebSockets.Address||{};
 BrokerRequest=WebSockets.BrokerRequest=WebSockets.BrokerRequest||{};
 MessageType=WebSockets.MessageType=WebSockets.MessageType||{};
 BrokerMessage=WebSockets.BrokerMessage=WebSockets.BrokerMessage||{};
 Replier=WebSockets.Replier=WebSockets.Replier||{};
 MessageGeneric=WebSockets.MessageGeneric=WebSockets.MessageGeneric||{};
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
 RuleEditor=FsRoot.RuleEditor=FsRoot.RuleEditor||{};
 Templating=RuleEditor.Templating=RuleEditor.Templating||{};
 CalculationModel=RuleEditor.CalculationModel=RuleEditor.CalculationModel||{};
 DimType=CalculationModel.DimType=CalculationModel.DimType||{};
 CubeType=CalculationModel.CubeType=CalculationModel.CubeType||{};
 AttType=CalculationModel.AttType=CalculationModel.AttType||{};
 ElmType=CalculationModel.ElmType=CalculationModel.ElmType||{};
 ModId=CalculationModel.ModId=CalculationModel.ModId||{};
 AttId=CalculationModel.AttId=CalculationModel.AttId||{};
 ElmId=CalculationModel.ElmId=CalculationModel.ElmId||{};
 CubId=CalculationModel.CubId=CalculationModel.CubId||{};
 DimId=CalculationModel.DimId=CalculationModel.DimId||{};
 CalId=CalculationModel.CalId=CalculationModel.CalId||{};
 TotId=CalculationModel.TotId=CalculationModel.TotId||{};
 ForId=CalculationModel.ForId=CalculationModel.ForId||{};
 RulId=CalculationModel.RulId=CalculationModel.RulId||{};
 Attribute=CalculationModel.Attribute=CalculationModel.Attribute||{};
 Element=CalculationModel.Element=CalculationModel.Element||{};
 Dimension=CalculationModel.Dimension=CalculationModel.Dimension||{};
 UnaryOp=CalculationModel.UnaryOp=CalculationModel.UnaryOp||{};
 Operator=CalculationModel.Operator=CalculationModel.Operator||{};
 ExpressionText=CalculationModel.ExpressionText=CalculationModel.ExpressionText||{};
 ExpressionNumber=CalculationModel.ExpressionNumber=CalculationModel.ExpressionNumber||{};
 ExpressionAny=CalculationModel.ExpressionAny=CalculationModel.ExpressionAny||{};
 Slice=CalculationModel.Slice=CalculationModel.Slice||{};
 ForType=CalculationModel.ForType=CalculationModel.ForType||{};
 Formula=CalculationModel.Formula=CalculationModel.Formula||{};
 Calculation=CalculationModel.Calculation=CalculationModel.Calculation||{};
 Total=CalculationModel.Total=CalculationModel.Total||{};
 RuleKey=CalculationModel.RuleKey=CalculationModel.RuleKey||{};
 Cube=CalculationModel.Cube=CalculationModel.Cube||{};
 Rule=CalculationModel.Rule=CalculationModel.Rule||{};
 RuleMsg=CalculationModel.RuleMsg=CalculationModel.RuleMsg||{};
 Model$1=CalculationModel.Model=CalculationModel.Model||{};
 HelperTypeN=CalculationModel.HelperTypeN=CalculationModel.HelperTypeN||{};
 HelperTypeT=CalculationModel.HelperTypeT=CalculationModel.HelperTypeT||{};
 HelperTypeA=CalculationModel.HelperTypeA=CalculationModel.HelperTypeA||{};
 Model0=CalculationModel.Model0=CalculationModel.Model0||{};
 ElementModule=CalculationModel.ElementModule=CalculationModel.ElementModule||{};
 ElmReferenceModule=CalculationModel.ElmReferenceModule=CalculationModel.ElmReferenceModule||{};
 SliceModule=CalculationModel.SliceModule=CalculationModel.SliceModule||{};
 DimensionModule=CalculationModel.DimensionModule=CalculationModel.DimensionModule||{};
 CubeModule=CalculationModel.CubeModule=CalculationModel.CubeModule||{};
 CalculationModule=CalculationModel.CalculationModule=CalculationModel.CalculationModule||{};
 TotalModule=CalculationModel.TotalModule=CalculationModel.TotalModule||{};
 ModelModule=CalculationModel.ModelModule=CalculationModel.ModelModule||{};
 FormulaModule=CalculationModel.FormulaModule=CalculationModel.FormulaModule||{};
 RuleModule=CalculationModel.RuleModule=CalculationModel.RuleModule||{};
 AttributeModule=CalculationModel.AttributeModule=CalculationModel.AttributeModule||{};
 Tree=RuleEditor.Tree=RuleEditor.Tree||{};
 Weight=Tree.Weight=Tree.Weight||{};
 TreeNode=Tree.TreeNode=Tree.TreeNode||{};
 TreeCollection=Tree.TreeCollection=Tree.TreeCollection||{};
 TreeNode$1=RuleEditor.TreeNode=RuleEditor.TreeNode||{};
 Monaco$1=RuleEditor.Monaco=RuleEditor.Monaco||{};
 HoverProvider=Monaco$1.HoverProvider=Monaco$1.HoverProvider||{};
 CompletionItemProvider=Monaco$1.CompletionItemProvider=Monaco$1.CompletionItemProvider||{};
 DefinitionProvider=Monaco$1.DefinitionProvider=Monaco$1.DefinitionProvider||{};
 Version=RuleEditor.Version=RuleEditor.Version||{};
 VersionModule=RuleEditor.VersionModule=RuleEditor.VersionModule||{};
 ModelUI=RuleEditor.ModelUI=RuleEditor.ModelUI||{};
 MsgModel=RuleEditor.MsgModel=RuleEditor.MsgModel||{};
 ModelUIModule=RuleEditor.ModelUIModule=RuleEditor.ModelUIModule||{};
 Global$1=RuleEditor.Global=RuleEditor.Global||{};
 FSCode=RuleEditor.FSCode=RuleEditor.FSCode||{};
 LocationDet=FSCode.LocationDet=FSCode.LocationDet||{};
 MsgLocation=FSCode.MsgLocation=FSCode.MsgLocation||{};
 ParseFS=RuleEditor.ParseFS=RuleEditor.ParseFS||{};
 Render=RuleEditor.Render=RuleEditor.Render||{};
 DragDrop=RuleEditor.DragDrop=RuleEditor.DragDrop||{};
 DragInfo=DragDrop.DragInfo=DragDrop.DragInfo||{};
 TableDimensions=RuleEditor.TableDimensions=RuleEditor.TableDimensions||{};
 TableCalculations=RuleEditor.TableCalculations=RuleEditor.TableCalculations||{};
 MainProgram=RuleEditor.MainProgram=RuleEditor.MainProgram||{};
 UpdateModelUI=RuleEditor.UpdateModelUI=RuleEditor.UpdateModelUI||{};
 SC$1=Global.StartupCode$RuleEditor$RuleEditor=Global.StartupCode$RuleEditor$RuleEditor||{};
 RuleEditor_GeneratedPrintf=Global.RuleEditor_GeneratedPrintf=Global.RuleEditor_GeneratedPrintf||{};
 RuleEditor_Templates=Global.RuleEditor_Templates=Global.RuleEditor_Templates||{};
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
 Operators$5=WebSharper&&WebSharper.Operators;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Slice$1=WebSharper&&WebSharper.Slice;
 Control=WebSharper&&WebSharper.Control;
 MailboxProcessor=Control&&Control.MailboxProcessor;
 console=Global.console;
 CancellationTokenSource=WebSharper&&WebSharper.CancellationTokenSource;
 UI=WebSharper&&WebSharper.UI;
 View$1=UI&&UI.View;
 Var$1=UI&&UI.Var;
 FromView=UI&&UI.FromView;
 Doc=UI&&UI.Doc;
 Var$2=UI&&UI.Var$1;
 AttrProxy=UI&&UI.AttrProxy;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 System=Global.System;
 Guid=System&&System.Guid;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpMap=Collections&&Collections.FSharpMap;
 FSharpSet=Collections&&Collections.FSharpSet;
 Set=Collections&&Collections.Set;
 Map=Collections&&Collections.Map;
 Date=Global.Date;
 Templating$1=UI&&UI.Templating;
 Runtime$1=Templating$1&&Templating$1.Runtime;
 Server=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 AppFramework=LibraryJS&&LibraryJS.AppFramework;
 PlugIn=AppFramework&&AppFramework.PlugIn;
 Lazy=WebSharper&&WebSharper.Lazy;
 LayoutEngineModule=LibraryJS&&LibraryJS.LayoutEngineModule;
 AttrModule=UI&&UI.AttrModule;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 ListModel$1=UI&&UI.ListModel;
 Dictionary=Collections&&Collections.Dictionary;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
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
  }):Concurrency.Return(Library.Error$1(vAR.$0));
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
   return Library.Error$1(f(x));
  }():o.$0;
 };
 Result.get=function(r)
 {
  return Result.defaultWith(function(x)
  {
   return Operators$5.FailWith(Global.String(x));
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
   return Library.Error$1(r.$0);
  else
   try
   {
    return f(r.$0);
   }
   catch(e)
   {
    return Library.Error$1(new ResultMessage({
     $:5,
     $0:e.message,
     $1:e.stack
    }));
   }
 };
 Result.failIfFalse=function(m,v)
 {
  return!v?Library.Error$1(m):{
   $:0,
   $0:null
  };
 };
 Result.failIfTrue=function(m,v)
 {
  return v?Library.Error$1(m):{
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
 Result.rtn=function(a)
 {
  return{
   $:0,
   $0:a
  };
 };
 Result.freeMessage=function(r)
 {
  return r.$==1?Library.Error$1(ResultMessage.freeMessage(r.$0)):{
   $:0,
   $0:r.$0
  };
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
  },vvR.$0):FusionM.rtn(Library.Error$1(vvR.$0));
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
   Library.print$1(v);
  }
  FusionM.iterReader(function(x)
  {
   return g(ResultMessage.summarized(x));
  },function(v)
  {
   Library.print$1(v);
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
 Eff$1=Eff.Eff=Runtime.Class({
  get_Cont:function()
  {
   return this.$0;
  }
 },null,Eff$1);
 Done=Eff.Done=Runtime.Class({
  get_Value:function()
  {
   return this.v;
  },
  FsRoot_Library_Monads_Eff_Effect$UnPack:function(a)
  {
   return this;
  }
 },Obj,Done);
 Done.New=Runtime.Ctor(function(v)
 {
  Obj.New.call(this);
  this.v=v;
 },Done);
 LambdaT=Eff$1.LambdaT=Runtime.Class({
  FsRoot_Library_Monads_Eff_Lambda$Invoke:function(k)
  {
   var g;
   g=this.loop;
   return function(x)
   {
    return g(k(x));
   };
  }
 },Obj,LambdaT);
 LambdaT.New=Runtime.Ctor(function(loop)
 {
  Obj.New.call(this);
  this.loop=loop;
 },LambdaT);
 Eff$1.runResult=function(eff)
 {
  var m;
  try
  {
   m=(eff.get_Cont())(Eff$1["done'"]);
   return m instanceof Done?{
    $:0,
    $0:m.get_Value()
   }:Library.Error$1((ResultMessageHelpers.errorMsgf(function($1)
   {
    return function($2)
    {
     return $1("Unhandled effect "+Utils.prettyPrint($2)+" expecting");
    };
   }))(m));
  }
  catch(e)
  {
   return Library.Error$1(new ResultMessage({
    $:5,
    $0:e.message,
    $1:e.stack
   }));
  }
 };
 Eff$1.run=function(eff)
 {
  var m;
  m=(eff.get_Cont())(Eff$1["done'"]);
  return m instanceof Done?m.get_Value():(function($1)
  {
   return function($2)
   {
    return $1("Unhandled effect "+Utils.prettyPrint($2));
   };
  }(Operators$5.FailWith))(m);
 };
 Eff$1["return'"]=function(v)
 {
  return new Eff$1({
   $:0,
   $0:function()
   {
    return Eff$1["done'"](v);
   }
  });
 };
 Eff$1["done'"]=function(v)
 {
  return new Done.New(v);
 };
 Eff$1.unpack=function(loop,effect)
 {
  return effect.FsRoot_Library_Monads_Eff_Effect$UnPack(new LambdaT.New(loop));
 };
 Operators$2.rtn=function(v)
 {
  return Eff.rtn(v);
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
  return Eff.bind(f,v);
 };
 Operators$2.op_BarGreaterGreater=function(v,f)
 {
  return Eff.map(f,v);
 };
 Operators$2.op_LessMultiplyGreater=function(f,v)
 {
  return Eff.apply(f,v);
 };
 EffBuilder=Eff.EffBuilder=Runtime.Class({
  For:function(sequence,body)
  {
   var $this;
   $this=this;
   return this.Using(Enumerator.Get(sequence),function(_enum)
   {
    return $this.While(function()
    {
     return _enum.MoveNext();
    },function()
    {
     return $this.Delay(function()
     {
      return body(_enum.Current());
     });
    });
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
   return new Eff$1({
    $:0,
    $0:function(k)
    {
     try
     {
      return body().$0(k);
     }
     finally
     {
      compensation();
     }
    }
   });
  },
  TryWith:function(body,handler)
  {
   return new Eff$1({
    $:0,
    $0:function(k)
    {
     try
     {
      return body().$0(k);
     }
     catch(e)
     {
      return handler(e).$0(k);
     }
    }
   });
  },
  While:function(guard,body)
  {
   function whileLoop(guard$1,body$1)
   {
    return guard$1()?Eff.bind(function()
    {
     return whileLoop(guard$1,body$1);
    },body$1()):Operators$2.rtn();
   }
   return whileLoop(guard,body);
  },
  Delay:function(f)
  {
   return new Eff$1({
    $:0,
    $0:function(k)
    {
     return f().$0(k);
    }
   });
  },
  Combine:function(first,second)
  {
   return this.Bind(first,function()
   {
    return second;
   });
  },
  Bind:function(eff,f)
  {
   return Eff.bind(f,eff);
  },
  ReturnFrom:Global.id,
  Return:function(v)
  {
   return Operators$2.rtn(v);
  },
  Zero:function()
  {
   return Operators$2.rtn();
  }
 },Obj,EffBuilder);
 EffBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },EffBuilder);
 Ask=Reader.Ask=Runtime.Class({
  get_K:function()
  {
   return this.k;
  },
  FsRoot_Library_Monads_Eff_Effect$UnPack:function(lambda)
  {
   return new Ask.New(lambda.FsRoot_Library_Monads_Eff_Lambda$Invoke(this.k));
  }
 },Obj,Ask);
 Ask.New=Runtime.Ctor(function(k)
 {
  Obj.New.call(this);
  this.k=k;
 },Ask);
 Reader.readerFun=function(f)
 {
  return Eff.map(f,Reader.ask());
 };
 Reader.readerHandler=function(env,eff)
 {
  function loop(a)
  {
   return a instanceof Ask?loop((a.get_K())(env)):Eff$1.unpack(loop,a);
  }
  return new Eff$1({
   $:0,
   $0:function()
   {
    return loop((eff.get_Cont())(Eff$1["done'"]));
   }
  });
 };
 Reader.ask=function()
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new Ask.New(k);
   }
  });
 };
 Fail=Rsl.Fail=Runtime.Class({
  get_K:function()
  {
   return this.k;
  },
  get_Value:function()
  {
   return this.v;
  },
  FsRoot_Library_Monads_Eff_Effect$UnPack:function(lambda)
  {
   return new Fail.New(this.v,lambda.FsRoot_Library_Monads_Eff_Lambda$Invoke(this.k));
  }
 },Obj,Fail);
 Fail.New=Runtime.Ctor(function(v,k)
 {
  Obj.New.call(this);
  this.v=v;
  this.k=k;
 },Fail);
 Rsl.absorbO=function(f,vOEf)
 {
  return Rsl.absorbR(Eff.map(function(v)
  {
   return Result.ofOption(f,v);
  },vOEf));
 };
 Rsl.absorbR=function(vvEf)
 {
  return Eff.bind(Rsl.ofResult,vvEf);
 };
 Rsl.RslHandler=function(eff)
 {
  function loop(doneK,a)
  {
   return a instanceof Done?doneK({
    $:0,
    $0:a.get_Value()
   }):a instanceof Fail?doneK(Library.Error$1(a.get_Value())):Eff$1.unpack(function($1)
   {
    return loop(doneK,$1);
   },a);
  }
  return new Eff$1({
   $:0,
   $0:function(doneK)
   {
    return loop(doneK,(eff.get_Cont())(Eff$1["done'"]));
   }
  });
 };
 Rsl.ofResult=function(res)
 {
  var b;
  b=Eff.eff();
  return b.Delay(function()
  {
   return res.$==1?b.Bind(Rsl.fail(res.$0),function()
   {
    return b.Return(null);
   }):b.Return(res.$0);
  });
 };
 Rsl.fail=function(s)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new Fail.New(s,k);
   }
  });
 };
 Eff.eff=function()
 {
  SC$1.$cctor();
  return SC$1.eff;
 };
 Eff.insertSnd=function(vEf,snd)
 {
  return Eff.map(function(v)
  {
   return[v,snd];
  },vEf);
 };
 Eff.insertFst=function(fst,vEf)
 {
  return Eff.map(function(v)
  {
   return[fst,v];
  },vEf);
 };
 Eff.insertR=function(vvR)
 {
  return vvR.$==0?Eff.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vvR.$0):Operators$2.rtn(Library.Error$1(vvR.$0));
 };
 Eff.insertO=function(vvO)
 {
  var o;
  o=vvO==null?null:{
   $:1,
   $0:Eff.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vvO.$0)
  };
  return o==null?Operators$2.rtn(null):o.$0;
 };
 Eff.sequenceSeq=function(sq)
 {
  return Eff.traverseSeq(Global.id,sq);
 };
 Eff.traverseSeq=function(f,sq)
 {
  return Eff.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return Operators$2.op_GreaterGreaterEquals(f(head),function(h)
   {
    return Operators$2.op_GreaterGreaterEquals(tail,function(t)
    {
     return Operators$2.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Operators$2.rtn(List.T.Empty)));
 };
 Eff.apply=function(fR,vR)
 {
  return Eff.bind(function(f)
  {
   return Eff.map(f,vR);
  },fR);
 };
 Eff.map=function(f,m)
 {
  return Eff.bind(function(x)
  {
   return Eff.rtn(f(x));
  },m);
 };
 Eff.bind=function(f,effA)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return effA.$0(function(v)
    {
     return f(v).$0(k);
    });
   }
  });
 };
 Eff.rtn=function(v)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return k(v);
   }
  });
 };
 Operators$3.rtn=function(v)
 {
  return FusionAsyncM.rtn(v);
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
  return FusionAsyncM.bind(f,v);
 };
 Operators$3.op_BarGreaterGreater=function(v,f)
 {
  return FusionAsyncM.map(f,v);
 };
 Operators$3.op_LessMultiplyGreater=function(f,v)
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
   Library.print$1(v);
  }
  FusionAsyncM.iterReaderA(function(x)
  {
   return g(ResultMessage.summarized(x));
  },function(v)
  {
   Library.print$1(v);
  },null,m);
 };
 FusionAsyncM.iterResultPrint=function(m)
 {
  function g(v)
  {
   Library.print$1(v);
  }
  FusionAsyncM.iterReader(function(x)
  {
   return g(ResultMessage.summarized(x));
  },function(v)
  {
   Library.print$1(v);
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
  },vvR.$0):FusionAsyncM.rtn(Library.Error$1(vvR.$0));
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
  Return:function(x)
  {
   return ResultM.rtn(x);
  }
 },Obj,Builder$5);
 Builder$5.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder$5);
 Operators$4.rtn=function(v)
 {
  return ResultM.rtn(v);
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
  return ResultM.bindP(f,v);
 };
 Operators$4.op_BarGreaterGreater=function(v,f)
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
   return Operators$5.FailWith(Global.String(x));
  },r);
 };
 ResultM.iter=function(fM,f,r)
 {
  var a,$1;
  a=ResultM.mapP(f,r);
  a.$0==null?$1=a.$1:$1=a.$1;
  fM($1);
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
  return r.$0==null?Library.Error$1(r.$1):{
   $:0,
   $0:[r.$0.$0,r.$1]
  };
 };
 ResultM.toResult=function(r)
 {
  return r.$0==null?Library.Error$1(r.$1):{
   $:0,
   $0:r.$0.$0
  };
 };
 ResultM.freeMessage=function(r)
 {
  return r.$==1?Library.Error$1(ResultMessage.freeMessage(r.$0)):{
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
  },vRAR.$0):AsyncResult.rtn(Library.Error$1(vRAR.$0));
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
     return a.$==1?Concurrency.Return(Library.Error$1(a.$0)):fRA(a.$0);
    });
   }),function(a)
   {
    return Concurrency.Return(Library.Error$1(new ResultMessage({
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
    var m,b$1;
    return a.$==1?(m=a.$0,(b$1=null,Concurrency.Delay(function()
    {
     return Concurrency.Return(Library.Error$1(m));
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
   return fRA();
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
 AsyncResultM.absorbO=function(f,vORA)
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
 AsyncResultM.absorbR=function(vRRA)
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
 AsyncResultM.insertR=function(vRAR)
 {
  return vRAR.$==0?AsyncResultM.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vRAR.$0):AsyncResultM.rtn(Library.Error$1(vRAR.$0));
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
   Library.print$1(v);
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
   Library.print$1(v);
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
 String.EndsWith$1=function(ends,s)
 {
  return Strings.EndsWith(s,ends)?{
   $:1,
   $0:Slice$1.string(s,{
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
   $0:Slice$1.string(s,{
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
  return i<0?"":Slice$1.string(txt,{
   $:1,
   $0:i+1
  },null);
 };
 String.append$1=function(a,b)
 {
  return a+b;
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
 Array.replace=function(i,item,array)
 {
  return Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(i>0?Slice$1.array(array,null,{
    $:1,
    $0:i-1
   }):[],Seq$1.delay(function()
   {
    return Seq$1.append([item],Seq$1.delay(function()
    {
     return i<Arrays.length(array)?Slice$1.array(array,{
      $:1,
      $0:i+1
     },null):[];
    }));
   }));
  }));
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
  Library.print$1(ex);
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
 Hole.Hole={
  $:0
 };
 Node.New=function(id,getData,isExpandedEf,canHaveChildrenEf,childrenEf,pathEf,parentOEf,newChildrenEf)
 {
  return{
   id:id,
   getData:getData,
   isExpandedEf:isExpandedEf,
   canHaveChildrenEf:canHaveChildrenEf,
   childrenEf:childrenEf,
   pathEf:pathEf,
   parentOEf:parentOEf,
   newChildrenEf:newChildrenEf
  };
 };
 TreeEff.removeNodeOutdentChildren=function(node,nodes)
 {
  var s;
  function f(nodes$1,node$1)
  {
   return Operators$2.op_GreaterGreaterEquals(nodes$1,function(n)
   {
    return TreeEff.outdentNode(node$1,n);
   });
  }
  return Operators$2.op_GreaterGreaterEquals(Operators$2.op_GreaterGreaterEquals(node.childrenEf(),(s=Operators$2.rtn(nodes),function(s$1)
  {
   return Seq$1.fold(f,s,s$1);
  })),function(n)
  {
   return TreeEff.removeNode(node,n);
  });
 };
 TreeEff.outdentNode=function(node,nodes)
 {
  var v;
  function m(parent)
  {
   return TreeEff.moveToSibling(true,node,parent,nodes);
  }
  return Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(node.parentOEf(nodes),function(o)
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
 TreeEff.indentNode=function(node,nodes)
 {
  var s;
  function p(n)
  {
   return!Unchecked.Equals(node.id(),n.id());
  }
  function f(newParentOEf,n)
  {
   return Operators$2.op_GreaterGreaterEquals(n.canHaveChildrenEf(),function(can)
   {
    return can?Operators$2.rtn({
     $:1,
     $0:n
    }):newParentOEf;
   });
  }
  return Operators$2.op_GreaterGreaterEquals(Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(node.parentOEf(nodes),function(a)
  {
   return a!=null&&a.$==1?Operators$2.op_BarGreaterGreater(a.$0.childrenEf(),function(x)
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
   return a!=null&&a.$==1?(newParent=a.$0,Operators$2.op_GreaterGreaterEquals(TreeEff.removeNode(node,nodes),function(n)
   {
    return TreeEff.addChild(true,node,newParent,n);
   })):Operators$2.rtn(nodes);
  });
 };
 TreeEff.addChild=function(append,node,parentN,nodes)
 {
  var b;
  b=Eff.eff();
  return b.Delay(function()
  {
   return b.Bind(parentN.pathEf(),function(a)
   {
    function mapAppend(n)
    {
     var a$1,s;
     return Unchecked.Equals(n.id(),parentN.id())?append?Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(n.childrenEf(),Arrays.ofSeq),(a$1=List.ofArray([node]),function(b$1)
     {
      return Seq$1.append(b$1,a$1);
     })),Arrays.ofSeq),n.newChildrenEf):Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(n.childrenEf(),Arrays.ofSeq),(s=List.ofArray([node]),function(s$1)
     {
      return Seq$1.append(s,s$1);
     })),Arrays.ofSeq),n.newChildrenEf):List.contains(n.id(),a)?Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(n.childrenEf(),Arrays.ofSeq),function(s$1)
     {
      return Seq$1.map(mapAppend,s$1);
     }),Eff.sequenceSeq),Arrays.ofSeq),n.newChildrenEf):Operators$2.rtn(n);
    }
    return b.ReturnFrom(Eff.sequenceSeq(Seq$1.map(mapAppend,nodes)));
   });
  });
 };
 TreeEff.moveToSibling2=function(after,nodeId,siblingId,nodes)
 {
  var b;
  b=Eff.eff();
  return b.Delay(function()
  {
   return b.Bind(TreeEff.tryFindId(nodeId,nodes),function(a)
   {
    var node;
    return a!=null&&a.$==1?(node=a.$0,b.Bind(TreeEff.tryFindId(siblingId,nodes),function(a$1)
    {
     return a$1!=null&&a$1.$==1?b.ReturnFrom(TreeEff.moveToSibling(after,node,a$1.$0,nodes)):b.Return(nodes);
    })):b.Return(nodes);
   });
  });
 };
 TreeEff.moveToSibling=function(after,node,sibling,nodes)
 {
  return Operators$2.op_GreaterGreaterEquals(TreeEff.removeNode(node,nodes),function(n)
  {
   return TreeEff.addSibling(after,node,sibling,n);
  });
 };
 TreeEff.tryFindId=function(id,nodes)
 {
  return TreeEff.tryFind(function(n)
  {
   return Unchecked.Equals(n.id(),id);
  },nodes);
 };
 TreeEff.tryFind=function(p,nodes)
 {
  function folder(resEf,node)
  {
   return Operators$2.op_GreaterGreaterEquals(resEf,function(a)
   {
    var s;
    return a==null?p(node)?Operators$2.rtn({
     $:1,
     $0:node
    }):Operators$2.op_GreaterGreaterEquals(node.childrenEf(),(s=Operators$2.rtn(null),function(s$1)
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
 TreeEff.addSibling=function(after,node,sibling,nodes)
 {
  function theSibling(n)
  {
   return Unchecked.Equals(n.id(),sibling.id());
  }
  return Operators$2.op_GreaterGreaterEquals(sibling.pathEf(),function(a)
  {
   var path,parent;
   function mapAdd(n)
   {
    return Unchecked.Equals(n.id(),parent)?Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(n.childrenEf(),Arrays.ofSeq),function(n$1)
    {
     return TreeEff.addToParent(after,theSibling,node,n,n$1);
    }):List.contains(n.id(),path)?Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(n.childrenEf(),Arrays.ofSeq),function(s)
    {
     return Seq$1.map(mapAdd,s);
    }),Eff.sequenceSeq),Arrays.ofSeq),n.newChildrenEf):Operators$2.rtn(n);
   }
   return a.$==1?(path=a.$1,(parent=a.$0,Eff.sequenceSeq(Seq$1.map(mapAdd,nodes)))):Operators$2.rtn(TreeEff.addNodeToSeq(after,theSibling,node,nodes));
  });
 };
 TreeEff.addToParent=function(after,p,node,parent,nodes)
 {
  return parent.newChildrenEf(Arrays.ofSeq(TreeEff.addNodeToSeq(after,p,node,nodes)));
 };
 TreeEff.addNodeToSeq=function(after,p,node,nodes)
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
 TreeEff.removeNodes=function(p,nodes)
 {
  var b;
  b=Eff.eff();
  return b.Delay(function()
  {
   function folder(pair,n)
   {
    var b$1;
    b$1=Eff.eff();
    return b$1.Delay(function()
    {
     return b$1.Bind(pair,function(a)
     {
      var noparent,children;
      noparent=a[1];
      children=a[0];
      return b$1.Bind(Operators$2.op_BarGreaterGreater(n.childrenEf(),Arrays.ofSeq),function(a$1)
      {
       return b$1.Bind(Seq$1.fold(folder,Operators$2.rtn([List.T.Empty,noparent]),a$1),function(a$2)
       {
        var np,ch;
        np=a$2[1];
        ch=a$2[0];
        return p(n)?b$1.Return([children,List.append(ch,np)]):b$1.Bind(n.newChildrenEf(Arrays.ofSeq(Seq$1.rev(ch))),function(a$3)
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
    });
   }
   return b.Bind(Seq$1.fold(folder,Operators$2.rtn([List.T.Empty,List.T.Empty]),nodes),function(a)
   {
    return b.Return(List.rev(List.append(a[1],a[0])));
   });
  });
 };
 TreeEff.removeNode=function(node,nodes)
 {
  var b;
  b=Eff.eff();
  return b.Delay(function()
  {
   return b.Bind(node.pathEf(),function(a)
   {
    function chRemove(n)
    {
     var b$1;
     b$1=Eff.eff();
     return b$1.Delay(function()
     {
      return Unchecked.Equals(n.id(),node.id())?(function($1)
      {
       return $1("found it");
      }(function(s)
      {
       console.log(s);
      }),b$1.Return(null)):List.contains(n.id(),a)?(function($1)
      {
       return $1("deeper");
      }(function(s)
      {
       console.log(s);
      }),b$1.ReturnFrom(Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(n.childrenEf(),Arrays.ofSeq),function(s)
      {
       return Seq$1.map(chRemove,s);
      }),Eff.sequenceSeq),function(s)
      {
       return Seq$1.choose(Global.id,s);
      }),Arrays.ofSeq),n.newChildrenEf),function(a$1)
      {
       return{
        $:1,
        $0:a$1
       };
      }))):(function($1)
      {
       return $1("not");
      }(function(s)
      {
       console.log(s);
      }),b$1.Return({
       $:1,
       $0:n
      }));
     });
    }
    ((function($1)
    {
     return function($2)
     {
      return $1("path = "+Utils.printList(Utils.prettyPrint,$2));
     };
    }(function(s)
    {
     console.log(s);
    }))(a));
    return b.ReturnFrom(Operators$2.op_BarGreaterGreater(Eff.sequenceSeq(Seq$1.map(chRemove,nodes)),function(s)
    {
     return Seq$1.choose(Global.id,s);
    }));
   });
  });
 };
 TreeEff.listNodes=function(level,nodes)
 {
  return Operators$2.op_BarGreaterGreater(Eff.sequenceSeq(Seq$1.map(function(node)
  {
   return Operators$2.op_BarGreaterGreater(Operators$2.op_GreaterGreaterEquals(node.isExpandedEf(),function(exp)
   {
    var l;
    return exp?Operators$2.op_GreaterGreaterEquals(Operators$2.op_BarGreaterGreater(node.childrenEf(),Arrays.ofSeq),(l=level+1,function(n)
    {
     return TreeEff.listNodes(l,n);
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
 Library["String.Right$1"]=function(_this,n)
 {
  var a,b;
  return Library["String.Substring2$1"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);
 };
 Library["String.Left$1"]=function(_this,n)
 {
  return Library["String.Substring2$1"](_this,0,n);
 };
 Library["String.Substring2$1"]=function(_this,from,n)
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
 Library.delayed$1=function(delay,doF)
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
  Var$1.New.call($1);
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
  $1=new Var$1({
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
  Var$1.New.call($1);
  return $1;
 };
 ListModel["lensInto'"]=function(m,get,update,key,view)
 {
  var id,$1;
  id=Var.freshId();
  $1=new Var$1({
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
  Var$1.New.call($1);
  return $1;
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
 REGEX.Identifier$1=function(a)
 {
  var $1,a$1,t;
  return(a$1=LibraryJS.REGEX$2("^[$a-zA-Z_][0-9a-zA-Z_\\.\\-$]*$","",a),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($1=Arrays.get(a$1.$0,0),true)))?{
   $:1,
   $0:$1
  }:null;
 };
 REGEX.getEndWord$1=function(line,ch)
 {
  var a,t;
  a=LibraryJS.REGEX$2("^([a-zA-Z_]\\w*)","g",line.substring(ch));
  return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):"":"";
 };
 REGEX.getStartWord$1=function(line,ch)
 {
  var a,t;
  a=LibraryJS.REGEX$2("([a-zA-Z_]\\w*)$","g",Strings.Substring(line,0,ch));
  return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):"":"";
 };
 ResizeObserver.addResizeObserver$1=function(f,el)
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
    ResizeObserver.set_observers$1(new List.T({
     $:1,
     $0:ro,
     $1:ResizeObserver.observers$1()
    }));
    ro.observe(el);
   }
  else
   {
    changed=ResizeObserver.dimsChanged$1(el);
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
 ResizeObserver.dimsChanged$1=function(el)
 {
  var dims;
  dims=[el.getBoundingClientRect()];
  return function()
  {
   var ndims;
   ndims=el.getBoundingClientRect();
   return Unchecked.Equals(ResizeObserver.domRect2Tuple$1(dims[0]),ResizeObserver.domRect2Tuple$1(ndims))?false:(dims[0]=ndims,true);
  };
 };
 ResizeObserver.domRect2Tuple$1=function(r)
 {
  return[r.top,r.left,r.width,r.height];
 };
 ResizeObserver.observers$1=function()
 {
  SC$1.$cctor();
  return SC$1.observers;
 };
 ResizeObserver.set_observers$1=function($1)
 {
  SC$1.$cctor();
  SC$1.observers=$1;
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
  x=Monaco.newVar(Var$2.Lens(v,function(o)
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
  return Monaco.newVar(Var$2.Create$1(v));
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
 Monaco.render$1924$48=function(monc)
 {
  return function(elchild)
  {
   var editor,_elt;
   editor=(_elt=elchild.parentElement,self.monaco.editor.create(_elt,monc.options,monc.overrides));
   ResizeObserver.addResizeObserver$1(function()
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
     ResizeObserver.addResizeObserver$1(function()
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
 LibraryJS.rexGuid$1=function()
 {
  SC$1.$cctor();
  return SC$1.rexGuid;
 };
 LibraryJS.REGEX$2=function(expr,opt,value)
 {
  var m;
  return value===null?null:(m=(new Global.String(value)).match(new Global.RegExp(expr,opt)),Unchecked.Equals(m,null)?null:!Unchecked.Equals(m,null)&&m.length===0?null:{
   $:1,
   $0:m
  });
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
 ParseRequest.New=function(FileName,IsAsync,Lines,Version$1)
 {
  return{
   FileName:FileName,
   IsAsync:IsAsync,
   Lines:Lines,
   Version:Version$1
  };
 };
 DeclarationsRequest.New=function(FileName,Lines,Version$1)
 {
  return{
   FileName:FileName,
   Lines:Lines,
   Version:Version$1
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
   return b.Bind$1((new AjaxRemotingProvider.New()).Async("RuleEditor:FsRoot.Library2+FsAutoComplete.FSAutocompleteCall0:-662505047",[cmd,req]),function(a)
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
 DimType.DtOther={
  $:6
 };
 DimType.DtMeasure={
  $:5
 };
 DimType.DtCalc={
  $:4
 };
 DimType.DtTCalc={
  $:3
 };
 DimType.DtVersion={
  $:2
 };
 DimType.DtTime={
  $:1
 };
 DimType.DtDataType={
  $:0
 };
 CubeType.CtFreeze={
  $:2
 };
 CubeType.CtCalc={
  $:1
 };
 CubeType.CtOther={
  $:0
 };
 AttType.AtNumber={
  $:1
 };
 AttType.AtString={
  $:0
 };
 ElmType.EtNumber={
  $:1
 };
 ElmType.EtString={
  $:0
 };
 ModId=CalculationModel.ModId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,ModId);
 AttId=CalculationModel.AttId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,AttId);
 ElmId=CalculationModel.ElmId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,ElmId);
 CubId=CalculationModel.CubId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,CubId);
 DimId=CalculationModel.DimId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,DimId);
 CalId=CalculationModel.CalId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,CalId);
 TotId=CalculationModel.TotId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,TotId);
 ForId=CalculationModel.ForId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,ForId);
 RulId=CalculationModel.RulId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,RulId);
 Attribute.New=function(attId,attName,attType,attTableNum)
 {
  return{
   attId:attId,
   attName:attName,
   attType:attType,
   attTableNum:attTableNum
  };
 };
 Element.New=function(elmId,elmDim,elmType,elmName,elmDescription,elmAttributes,elmParents)
 {
  return{
   elmId:elmId,
   elmDim:elmDim,
   elmType:elmType,
   elmName:elmName,
   elmDescription:elmDescription,
   elmAttributes:elmAttributes,
   elmParents:elmParents
  };
 };
 Dimension.New=function(dimId,dimName,dimPrefix,dimOrder,dimExclude,dimFreeze,dimType,defaultElm,dimElements,dimAttributes,isCalcDim)
 {
  return{
   dimId:dimId,
   dimName:dimName,
   dimPrefix:dimPrefix,
   dimOrder:dimOrder,
   dimExclude:dimExclude,
   dimFreeze:dimFreeze,
   dimType:dimType,
   defaultElm:defaultElm,
   dimElements:dimElements,
   dimAttributes:dimAttributes,
   isCalcDim:isCalcDim
  };
 };
 UnaryOp.UoPlus={
  $:1
 };
 UnaryOp.UoMinus={
  $:0
 };
 Operator.OpOr={
  $:11
 };
 Operator.OpAnd={
  $:10
 };
 Operator.OpLE={
  $:9
 };
 Operator.OpLT={
  $:8
 };
 Operator.OpGE={
  $:7
 };
 Operator.OpGT={
  $:6
 };
 Operator.OpNE={
  $:5
 };
 Operator.OpEQ={
  $:4
 };
 Operator.OpDivide={
  $:3
 };
 Operator.OpMultiply={
  $:2
 };
 Operator.OpSubtract={
  $:1
 };
 Operator.OpAdd={
  $:0
 };
 ExpressionText.ExtStet={
  $:1
 };
 ExpressionText.ExtNA={
  $:0
 };
 ExpressionNumber.ExnStet={
  $:1
 };
 ExpressionNumber.ExnNA={
  $:0
 };
 ExpressionAny.ExiStet={
  $:1
 };
 ExpressionAny.ExiNA={
  $:0
 };
 Slice.New=function(sliDims,calculation,cube)
 {
  return{
   sliDims:sliDims,
   calculation:calculation,
   cube:cube
  };
 };
 ForType.ForAll={
  $:2
 };
 ForType.ForConsolidated={
  $:1
 };
 ForType.ForBase={
  $:0
 };
 Formula.New=function(forId,forDestDecl,forDestination,forDescription,forText,forExpression,forType,forOrder)
 {
  return{
   forId:forId,
   forDestDecl:forDestDecl,
   forDestination:forDestination,
   forDescription:forDescription,
   forText:forText,
   forExpression:forExpression,
   forType:forType,
   forOrder:forOrder
  };
 };
 Calculation.New=function(calId,calName,calDescription,calOrder,format,isText,isInput,isBalance,calDims,calFormulas,cubIdO,properties)
 {
  return{
   calId:calId,
   calName:calName,
   calDescription:calDescription,
   calOrder:calOrder,
   format:format,
   isText:isText,
   isInput:isInput,
   isBalance:isBalance,
   calDims:calDims,
   calFormulas:calFormulas,
   cubIdO:cubIdO,
   properties:properties
  };
 };
 Total.New=function(totId,totName,totOrder,totFormat,children)
 {
  return{
   totId:totId,
   totName:totName,
   totOrder:totOrder,
   totFormat:totFormat,
   children:children
  };
 };
 RuleKey.ConsolidatedRuleKey={
  $:6
 };
 RuleKey.InputRuleKey={
  $:5
 };
 RuleKey.ActualRuleKey={
  $:4
 };
 Cube.New=function(cubId,cubName,cubRules,cubRuleXmls,cubDims,measureDim,cubType)
 {
  return{
   cubId:cubId,
   cubName:cubName,
   cubRules:cubRules,
   cubRuleXmls:cubRuleXmls,
   cubDims:cubDims,
   measureDim:measureDim,
   cubType:cubType
  };
 };
 Rule.New=function(rulId,rulSourceId,rulDescription,rulDestination,rulExpression,rulType,rulOrder,rulXml)
 {
  return{
   rulId:rulId,
   rulSourceId:rulSourceId,
   rulDescription:rulDescription,
   rulDestination:rulDestination,
   rulExpression:rulExpression,
   rulType:rulType,
   rulOrder:rulOrder,
   rulXml:rulXml
  };
 };
 RuleMsg.GetInitModelStats={
  $:0
 };
 Model$1.New=function(modId,server,actualElem,modDims,modCubes,modCalculations)
 {
  return{
   modId:modId,
   server:server,
   actualElem:actualElem,
   modDims:modDims,
   modCubes:modCubes,
   modCalculations:modCalculations
  };
 };
 HelperTypeN.HelperTypeN={
  $:0
 };
 HelperTypeN.op_AmpPercentGreater=function(_arg6,a)
 {
  return a;
 };
 HelperTypeN.op_AmpPercentGreater$1=function(_arg5,a)
 {
  return{
   $:2,
   $0:CalculationModel.calcSlice(a)
  };
 };
 HelperTypeN.op_AmpPercentGreater$2=function(_arg4,a)
 {
  return{
   $:2,
   $0:a
  };
 };
 HelperTypeN.op_AmpPercentGreater$3=function(_arg3,a)
 {
  return{
   $:3,
   $0:a
  };
 };
 HelperTypeN.op_AmpPercentGreater$4=function(_arg2,a)
 {
  return{
   $:3,
   $0:a
  };
 };
 HelperTypeN.op_AmpPercentGreater$5=function(_arg1,a)
 {
  return{
   $:3,
   $0:a?1:0
  };
 };
 HelperTypeT.HelperTypeT={
  $:0
 };
 HelperTypeT.op_AmpAmpGreater=function(_arg5,a)
 {
  return a;
 };
 HelperTypeT.op_AmpAmpGreater$1=function(_arg4,a)
 {
  return{
   $:2,
   $0:CalculationModel.calcSlice(a)
  };
 };
 HelperTypeT.op_AmpAmpGreater$2=function(_arg3,a)
 {
  return{
   $:2,
   $0:a
  };
 };
 HelperTypeT.op_AmpAmpGreater$3=function(_arg2,a)
 {
  return{
   $:5,
   $0:a.dimId
  };
 };
 HelperTypeT.op_AmpAmpGreater$4=function(_arg1,a)
 {
  return{
   $:3,
   $0:a
  };
 };
 HelperTypeA.HelperTypeA={
  $:0
 };
 Model0.getDimR=function(dId,mdl)
 {
  return Result.ofOption(function()
  {
   return{
    $:0,
    $0:dId
   };
  },Model0.getDimO(dId,mdl));
 };
 Model0.getDimO=function(dId,mdl)
 {
  return Seq$1.tryFind(function(d)
  {
   return Unchecked.Equals(d.dimId,dId);
  },mdl.modDims);
 };
 Model0.getCubeO=function(cubId,mdl)
 {
  return Seq$1.tryFind(function(cub)
  {
   return Unchecked.Equals(cub.cubId,cubId);
  },mdl.modCubes);
 };
 ElementModule.newElement=function(name)
 {
  return Element.New(new ElmId({
   $:0,
   $0:Guid.NewGuid()
  }),new DimId({
   $:0,
   $0:Guid.NewGuid()
  }),ElmType.EtString,name,name,new FSharpMap.New([]),[]);
 };
 ElmReferenceModule.dimId=function(elr)
 {
  return elr.$==1?elr.$0:elr.$0;
 };
 SliceModule.containsDim=function(did,slc)
 {
  return slc.sliDims.ContainsKey(did);
 };
 SliceModule.addRef=function(elr,slc)
 {
  return Slice.New(slc.sliDims.Add(ElmReferenceModule.dimId(elr),elr),slc.calculation,slc.cube);
 };
 SliceModule.forAll=function()
 {
  SC$1.$cctor();
  return SC$1.forAll;
 };
 SliceModule.newSlice=function(ds)
 {
  return Slice.New(new FSharpMap.New(Seq$1.map(function(dr)
  {
   return[ElmReferenceModule.dimId(dr),dr];
  },ds)),null,null);
 };
 DimensionModule.filterSort=function(dtypes)
 {
  var f;
  f=DimensionModule.filter(dtypes);
  return function(x)
  {
   return DimensionModule.sort(f(x));
  };
 };
 DimensionModule.sort=function(ds)
 {
  return Seq$1.sortBy(function(d)
  {
   return d.dimOrder;
  },ds);
 };
 DimensionModule.filter=function(dtypes)
 {
  function p(d)
  {
   return Seq$1.contains(d.dimType,dtypes);
  }
  return function(s)
  {
   return Seq$1.filter(p,s);
  };
 };
 DimensionModule.setName=function(name,dim)
 {
  return Dimension.New(dim.dimId,name,dim.dimPrefix,dim.dimOrder,dim.dimExclude,dim.dimFreeze,dim.dimType,dim.defaultElm,dim.dimElements,dim.dimAttributes,dim.isCalcDim);
 };
 DimensionModule.dType=function(dt,dim)
 {
  return Dimension.New(dim.dimId,dim.dimName,dim.dimPrefix,dim.dimOrder,dim.dimExclude,dim.dimFreeze,dt,dim.defaultElm,dim.dimElements,dim.dimAttributes,dim.isCalcDim);
 };
 DimensionModule.prefix=function(pr,dim)
 {
  return Dimension.New(dim.dimId,dim.dimName,pr,dim.dimOrder,dim.dimExclude,dim.dimFreeze,dim.dimType,dim.defaultElm,dim.dimElements,dim.dimAttributes,dim.isCalcDim);
 };
 DimensionModule.New=function(name)
 {
  return DimensionModule.newDimension(new DimId({
   $:0,
   $0:Guid.NewGuid()
  }),name,false);
 };
 DimensionModule.newDimensionCalc=function(id,name)
 {
  return DimensionModule.newDimension(id,name,true);
 };
 DimensionModule.newDimensionNonCalc=function(id,name)
 {
  return DimensionModule.newDimension(id,name,false);
 };
 DimensionModule.newDimension=function(id,name,isCalcDim)
 {
  return Dimension.New(id,name,"","",false,false,DimType.DtOther,null,[],[],isCalcDim);
 };
 DimensionModule.getElementR=function(eId,dim)
 {
  return Result.ofOption(function()
  {
   return{
    $:2,
    $0:dim.dimName,
    $1:eId
   };
  },DimensionModule.getElementO(eId,dim));
 };
 DimensionModule.getElementO=function(eId,dim)
 {
  return Seq$1.tryFind(function(e)
  {
   return Unchecked.Equals(e.elmId,eId);
  },dim.dimElements);
 };
 CubeModule.measureDimNameR=function(model,cub)
 {
  return Result$1.Map(function(dim)
  {
   return dim.dimName;
  },CubeModule.measureDimR(model,cub));
 };
 CubeModule.measureDimR=function(model,cub)
 {
  return Result$1.Bind(function(b)
  {
   return Model0.getDimR(b,model);
  },Result.ofOption(function()
  {
   return{
    $:4,
    $0:cub.cubName
   };
  },cub.measureDim));
 };
 CubeModule.measureDimO=function(model,cub)
 {
  var o;
  o=cub.measureDim;
  return o==null?null:Model0.getDimO(o.$0,model);
 };
 CubeModule.dims=function(model,cub)
 {
  return Arrays.filter(function(d)
  {
   var x;
   return Arrays.exists((x=d.dimId,function(y)
   {
    return Unchecked.Equals(x,y);
   }),cub.cubDims);
  },model.modDims);
 };
 CubeModule.forElr=function(es,cub)
 {
  var i;
  i=CubeModule.slice(cub);
  return Slice.New(CalculationModel.Map_adds(List.map(function(e)
  {
   return[ElmReferenceModule.dimId(e),e];
  },es),CubeModule.slice(cub).sliDims),i.calculation,i.cube);
 };
 CubeModule.addRules=function(rules,cub)
 {
  return Cube.New(cub.cubId,cub.cubName,Seq$1.fold(function(rulesN,t)
  {
   return rulesN.Add(t[0],t[1]);
  },cub.cubRules,rules),cub.cubRuleXmls,cub.cubDims,cub.measureDim,cub.cubType);
 };
 CubeModule.addRule=function(key,rule,cub)
 {
  return Cube.New(cub.cubId,cub.cubName,cub.cubRules.Add(key,rule),cub.cubRuleXmls,cub.cubDims,cub.measureDim,cub.cubType);
 };
 CubeModule.New=function()
 {
  return(((CubeModule.newCube(""))([]))(null))(CubeType.CtOther);
 };
 CubeModule.newCubeDims=function(name,dims,mDimO)
 {
  return(((CubeModule.newCube(name))(Arrays.ofSeq(Seq$1.map(function(d)
  {
   return d.dimId;
  },dims))))(mDimO))(CubeType.CtOther);
 };
 CubeModule.newCubeCalc=function(name,dims,mDimO)
 {
  return(((CubeModule.newCube(name))(dims))(mDimO))(CubeType.CtCalc);
 };
 CubeModule.newCube=function(name)
 {
  var i;
  i=new CubId({
   $:0,
   $0:Guid.NewGuid()
  });
  return Runtime.Curried(CubeModule.newCubeId,3,[i,name]);
 };
 CubeModule.newCubeId=function(id,name,dims,mDimO,cType)
 {
  return Cube.New(id,name,new FSharpMap.New([]),new FSharpMap.New([]),dims,mDimO,cType);
 };
 CubeModule.isCalcCube=function(cub)
 {
  return cub.cubType.$===1;
 };
 CubeModule.containsDim=function(dimId,cub)
 {
  return Seq$1.contains(dimId,cub.cubDims);
 };
 CubeModule.slice=function(cub)
 {
  return Slice.New(new FSharpMap.New([]),null,{
   $:1,
   $0:cub.cubId
  });
 };
 CalculationModule.sort=function(cs)
 {
  return Seq$1.sortBy(function(c)
  {
   return c.calOrder;
  },cs);
 };
 CalculationModule.cubeR=function(c)
 {
  return(CalculationModel.ofOptF(function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1("Calculation '"+Utils.toSafe($2)+"' has no cube");
    };
   }(Global.id))(c.calName);
  }))(c.cubIdO);
 };
 CalculationModule.withCube=function(model,calc,f)
 {
  var o,o$1;
  o=(o$1=calc.cube,o$1==null?null:Model0.getCubeO(o$1.$0,model));
  return o==null?null:f(o.$0);
 };
 CalculationModule.addFormulas=function(fs,calc)
 {
  return Seq$1.isEmpty(fs)?calc:Calculation.New(calc.calId,calc.calName,calc.calDescription,calc.calOrder,calc.format,calc.isText,calc.isInput,calc.isBalance,calc.calDims,calc.calFormulas.concat(Arrays.ofSeq(fs)),calc.cubIdO,calc.properties);
 };
 CalculationModule.forSlice=function(es,calc)
 {
  var i;
  i=CalculationModule.slice(calc);
  return Slice.New(CalculationModel.Map_adds(List.map(function(e)
  {
   return[ElmReferenceModule.dimId(e),e];
  },es),CalculationModule.slice(calc).sliDims),i.calculation,i.cube);
 };
 CalculationModule.addFormula=function(frml,calc)
 {
  return Calculation.New(calc.calId,calc.calName,calc.calDescription,calc.calOrder,calc.format,calc.isText,calc.isInput,calc.isBalance,calc.calDims,calc.calFormulas.concat([frml]),calc.cubIdO,calc.properties);
 };
 CalculationModule.setOrder=function(order,calc)
 {
  return Calculation.New(calc.calId,calc.calName,calc.calDescription,order,calc.format,calc.isText,calc.isInput,calc.isBalance,calc.calDims,calc.calFormulas,calc.cubIdO,calc.properties);
 };
 CalculationModule.setIsText=function(istext,calc)
 {
  return Calculation.New(calc.calId,calc.calName,calc.calDescription,calc.calOrder,calc.format,istext,calc.isInput,calc.isBalance,calc.calDims,calc.calFormulas,calc.cubIdO,calc.properties);
 };
 CalculationModule.setName=function(name,calc)
 {
  return Calculation.New(calc.calId,name,calc.calDescription,calc.calOrder,calc.format,calc.isText,calc.isInput,calc.isBalance,calc.calDims,calc.calFormulas,calc.cubIdO,calc.properties);
 };
 CalculationModule.New=function()
 {
  return CalculationModule.newInput(new CalId({
   $:0,
   $0:Guid.NewGuid()
  }),"",[]);
 };
 CalculationModule.newCalc=function(id,name,dims)
 {
  var i;
  i=CalculationModule.newInput(id,name,dims);
  return Calculation.New(i.calId,i.calName,i.calDescription,i.calOrder,i.format,i.isText,false,i.isBalance,i.calDims,i.calFormulas,i.cubIdO,i.properties);
 };
 CalculationModule.newInput=function(id,name,dims)
 {
  return Calculation.New(id,Strings.Trim(Strings.Replace(name,"_"," ")),"","","#,##0.00",false,true,false,new FSharpSet.New(dims),[],null,new FSharpMap.New([]));
 };
 CalculationModule.calcType=function(calc)
 {
  return calc.isInput?"INPUT":"CALC";
 };
 CalculationModule.slice=function(calc)
 {
  return CalculationModel.calcSlice(calc);
 };
 TotalModule.New=function()
 {
  return TotalModule.newTotal("");
 };
 TotalModule.newTotal=function(name)
 {
  return Total.New(new TotId({
   $:0,
   $0:Guid.NewGuid()
  }),name,"","",[]);
 };
 ModelModule.addRules=function(rules,model)
 {
  return Seq$1.fold(function(mdl,t)
  {
   var o,o$1;
   function m(a,key,rule)
   {
    return[key,rule];
   }
   o=(o$1=((ModelModule.getCubeO())(t[0]))(mdl),o$1==null?null:{
    $:1,
    $0:ModelModule.setCube(CubeModule.addRules(Seq$1.map(function($1)
    {
     return m($1[0],$1[1],$1[2]);
    },t[1]),o$1.$0),mdl)
   });
   return o==null?mdl:o.$0;
  },model,Seq$1.groupBy(function($1)
  {
   return Global.id($1[0],$1[1],$1[2]);
  },rules));
 };
 ModelModule.prepareModel=function(model)
 {
  return ModelModule.fixCalcsAndCubes(ModelModule.fixForDimensions(model));
 };
 ModelModule.fixCalcsAndCubes=function(model)
 {
  var calNoCube,modelN;
  function f(b)
  {
   return ModelModule.getCalcCube(b,model);
  }
  function g(o)
  {
   return o==null;
  }
  calNoCube=Arrays.filter(function(c)
  {
   var o;
   return(o=c.cubIdO,o==null?null:((ModelModule.getCubeO())(o.$0))(model))==null;
  },model.modCalculations);
  return Seq$1.isEmpty(calNoCube)?model:(modelN=Seq$1.fold(function(a,b)
  {
   return ModelModule.newCalcCube(b,a);
  },model,Seq$1.filter(function(x)
  {
   return g(f(x));
  },Seq$1.distinct(Seq$1.map(function(c)
  {
   return c.calDims;
  },calNoCube)))),Model$1.New(modelN.modId,modelN.server,modelN.actualElem,modelN.modDims,modelN.modCubes,Arrays.map(function(oldC)
  {
   var o,o$1,newC,o$2;
   o=(o$1=Seq$1.tryFind(function(newC$1)
   {
    return Unchecked.Equals(newC$1.calId,oldC.calId);
   },calNoCube),o$1==null?null:{
    $:1,
    $0:(newC=o$1.$0,Calculation.New(newC.calId,newC.calName,newC.calDescription,newC.calOrder,newC.format,newC.isText,newC.isInput,newC.isBalance,newC.calDims,newC.calFormulas,(o$2=ModelModule.getCalcCube(newC.calDims,modelN),o$2==null?null:{
     $:1,
     $0:o$2.$0.cubId
    }),newC.properties))
   });
   return o==null?oldC:o.$0;
  },modelN.modCalculations)));
 };
 ModelModule.newCalcCube=function(dimIds,model)
 {
  var name,mDim,orderedDimIds;
  name=ModelModule.autoName(dimIds,model);
  mDim=DimensionModule.newDimensionCalc(new DimId({
   $:0,
   $0:Guid.NewGuid()
  }),ModelModule.measurePrefix()+name);
  orderedDimIds=Arrays.ofSeq(Seq$1.map(function(d)
  {
   return d.dimId;
  },Seq$1.append(ModelModule.orderedDims(dimIds,model),List.ofArray([mDim]))));
  return Model$1.New(model.modId,model.server,model.actualElem,model.modDims.concat([mDim]),model.modCubes.concat([CubeModule.newCubeCalc(ModelModule.cubePrefix()+name,orderedDimIds,{
   $:1,
   $0:mDim.dimId
  })]),model.modCalculations);
 };
 ModelModule.fixForDimensions=function(model)
 {
  return Model$1.New(model.modId,model.server,model.actualElem,model.modDims,model.modCubes,Arrays.map(function(cal)
  {
   return Calculation.New(cal.calId,cal.calName,cal.calDescription,cal.calOrder,cal.format,cal.isText,cal.isInput,cal.isBalance,Set.Filter(function(d)
   {
    return Seq$1.exists(function(y)
    {
     return Unchecked.Equals(d,y);
    },ModelModule.dimIds(model));
   },cal.calDims),cal.calFormulas,cal.cubIdO,cal.properties);
  },model.modCalculations));
 };
 ModelModule.dimIds=function(model)
 {
  return Arrays.map(function(d)
  {
   return d.dimId;
  },model.modDims);
 };
 ModelModule.autoName=function(dimIds,model)
 {
  var nameBase,similar,x;
  nameBase=Strings.concat("",Seq$1.map(function(d)
  {
   return d.dimPrefix;
  },ModelModule.orderedDims(dimIds,model)));
  similar=Seq$1.choose(function(c)
  {
   var m,x$1;
   m=ModelModule.cubePrefix()+nameBase;
   return c.cubName===m?{
    $:1,
    $0:-1
   }:Strings.StartsWith(c.cubName,m)?(x$1=Slice$1.string(c.cubName,{
    $:1,
    $0:nameBase.length+1
   },null),(ParseO.parseIntO$1())(x$1)):null;
  },model.modCubes);
  return nameBase+(Seq$1.isEmpty(similar)?"":(x=1+Seq$1.max(similar),(function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id))(x)));
 };
 ModelModule.orderedDims=function(dimIds,model)
 {
  return Seq$1.filter(function(d)
  {
   var x;
   return Seq$1.exists((x=d.dimId,function(y)
   {
    return Unchecked.Equals(x,y);
   }),dimIds);
  },model.modDims);
 };
 ModelModule.measurePrefix=function()
 {
  SC$1.$cctor();
  return SC$1.measurePrefix;
 };
 ModelModule.cubePrefix=function()
 {
  SC$1.$cctor();
  return SC$1.cubePrefix;
 };
 ModelModule.dimCombinations=function(model)
 {
  return Seq$1.distinct(Seq$1.map(function(c)
  {
   return c.calDims;
  },model.modCalculations));
 };
 ModelModule.withDims=function(mdl,cube,f)
 {
  return ModelModule.withDimsO(mdl,cube,Runtime.Curried(function(a,b,c,d)
  {
   return{
    $:1,
    $0:f(a,b,c,d)
   };
  },4));
 };
 ModelModule.withDimsO=function(mdl,cube,f)
 {
  var o;
  return Option.join(Option.apply(Option.apply(Option.apply(Option.apply({
   $:1,
   $0:f
  },(o=cube.measureDim,o==null?null:((ModelModule.getDimO())(o.$0))(mdl))),ModelModule.dataTypeDimO(mdl)),ModelModule.versionDimO(mdl)),ModelModule.timeDimO(mdl)));
 };
 ModelModule.setCube=function(cubeN,model)
 {
  return Model$1.New(model.modId,model.server,model.actualElem,model.modDims,Arrays.map(function(cub)
  {
   return Unchecked.Equals(cub.cubId,cubeN.cubId)?cubeN:cub;
  },model.modCubes),model.modCalculations);
 };
 ModelModule.getCalcCube=function(dims,mdl)
 {
  return Seq$1.tryFind(function(cub)
  {
   return Unchecked.Equals(new FSharpSet.New(Seq$1.filter(function(d)
   {
    return!Unchecked.Equals({
     $:1,
     $0:d
    },cub.measureDim);
   },cub.cubDims)),dims);
  },Seq$1.filter(CubeModule.isCalcCube,mdl.modCubes));
 };
 ModelModule.isActualCalcO=function(mdl)
 {
  return ModelModule.pickCalcO("IsActual",mdl);
 };
 ModelModule.versionDimO=function(mdl)
 {
  return ModelModule.pickDimO(DimType.DtVersion,mdl);
 };
 ModelModule.timeDimO=function(mdl)
 {
  return ModelModule.pickDimO(DimType.DtTime,mdl);
 };
 ModelModule.dataTypeDimO=function(mdl)
 {
  return ModelModule.pickDimO(DimType.DtDataType,mdl);
 };
 ModelModule.tCalcDimO=function(mdl)
 {
  return ModelModule.pickDimO(DimType.DtTCalc,mdl);
 };
 ModelModule.freezeCubeO=function(mdl)
 {
  return ModelModule.pickCubeO(CubeType.CtFreeze,mdl);
 };
 ModelModule.pickCalcO=function(cn,mdl)
 {
  return Seq$1.tryPick(function(c)
  {
   return c.calName===cn?{
    $:1,
    $0:c
   }:null;
  },mdl.modCalculations);
 };
 ModelModule.pickDimO=function(dt,mdl)
 {
  return Seq$1.tryPick(function(d)
  {
   return Unchecked.Equals(d.dimType,dt)?{
    $:1,
    $0:d
   }:null;
  },mdl.modDims);
 };
 ModelModule.pickCubeO=function(ct,mdl)
 {
  return Seq$1.tryPick(function(c)
  {
   return Unchecked.Equals(c.cubType,ct)?{
    $:1,
    $0:c
   }:null;
  },mdl.modCubes);
 };
 ModelModule.getCubeR=function(cId,mdl)
 {
  return Result.ofOption(function()
  {
   return{
    $:3,
    $0:cId
   };
  },((ModelModule.getCubeO())(cId))(mdl));
 };
 ModelModule.getCalcR=function(cId,mdl)
 {
  return Result.ofOption(function()
  {
   return{
    $:5,
    $0:cId
   };
  },ModelModule.getCalcO(cId,mdl));
 };
 ModelModule.getCubeO=function()
 {
  SC$1.$cctor();
  return SC$1.getCubeO;
 };
 ModelModule.getCalcO=function(cId,mdl)
 {
  return Seq$1.tryFind(function(c)
  {
   return Unchecked.Equals(c.calId,cId);
  },mdl.modCalculations);
 };
 ModelModule.getDimR=function()
 {
  SC$1.$cctor();
  return SC$1.getDimR;
 };
 ModelModule.getDimO=function()
 {
  SC$1.$cctor();
  return SC$1.getDimO;
 };
 ModelModule.addForm=function(cid,frm,mdl)
 {
  return Model$1.New(mdl.modId,mdl.server,mdl.actualElem,mdl.modDims,mdl.modCubes,Arrays.map(function(cal)
  {
   return Unchecked.Equals(cal.calId,cid)?CalculationModule.addFormula(frm,cal):cal;
  },mdl.modCalculations));
 };
 ModelModule.addCube=function(cube,mdl)
 {
  return Model$1.New(mdl.modId,mdl.server,mdl.actualElem,mdl.modDims,mdl.modCubes.concat([cube]),mdl.modCalculations);
 };
 ModelModule.addDim=function(dim,mdl)
 {
  return Model$1.New(mdl.modId,mdl.server,mdl.actualElem,mdl.modDims.concat([dim]),mdl.modCubes,mdl.modCalculations);
 };
 ModelModule.addCalc=function(calc,mdl)
 {
  return Model$1.New(mdl.modId,mdl.server,mdl.actualElem,mdl.modDims,mdl.modCubes,mdl.modCalculations.concat([calc]));
 };
 ModelModule.addForms=function(fs,mdl)
 {
  return Model$1.New(mdl.modId,mdl.server,mdl.actualElem,mdl.modDims,mdl.modCubes,Arrays.map(function(cal)
  {
   var g,x;
   function f(t)
   {
    return t[0];
   }
   return CalculationModule.addFormulas(Seq$1.map(function(t)
   {
    return t[1];
   },Seq$1.filter((g=(x=cal.calId,function(y)
   {
    return Unchecked.Equals(x,y);
   }),function(x$1)
   {
    return g(f(x$1));
   }),fs)),cal);
  },mdl.modCalculations));
 };
 ModelModule.addCubes=function(cs,mdl)
 {
  return Model$1.New(mdl.modId,mdl.server,mdl.actualElem,mdl.modDims,ModelModule.mergeBy(function(c)
  {
   return c.cubId;
  },cs,mdl.modCubes),mdl.modCalculations);
 };
 ModelModule.addDims=function(ds,mdl)
 {
  return Model$1.New(mdl.modId,mdl.server,mdl.actualElem,ModelModule.mergeBy(function(c)
  {
   return c.dimId;
  },ds,mdl.modDims),mdl.modCubes,mdl.modCalculations);
 };
 ModelModule.addCalcs=function(cs,mdl)
 {
  return Model$1.New(mdl.modId,mdl.server,mdl.actualElem,mdl.modDims,mdl.modCubes,ModelModule.mergeBy(function(c)
  {
   return c.calId;
  },cs,mdl.modCalculations));
 };
 ModelModule.mergeBy=function(f,a,b)
 {
  return Arrays.ofSeq(a).concat(Arrays.filter(function(e)
  {
   return!Seq$1.contains(f(e),Seq$1.map(f,a));
  },b));
 };
 FormulaModule.getDimDest=function(dim,frm)
 {
  return Seq$1.tryPick(function(er)
  {
   return Unchecked.Equals(ElmReferenceModule.dimId(er),dim.dimId)?{
    $:1,
    $0:er
   }:null;
  },frm.forDestination);
 };
 FormulaModule.setOrder=function(ord,frm)
 {
  return Formula.New(frm.forId,frm.forDestDecl,frm.forDestination,frm.forDescription,frm.forText,frm.forExpression,frm.forType,ord);
 };
 FormulaModule.setText=function(txt,frm)
 {
  return Formula.New(frm.forId,frm.forDestDecl,frm.forDestination,frm.forDescription,txt,frm.forExpression,frm.forType,frm.forOrder);
 };
 FormulaModule.conso=function(frm)
 {
  return Formula.New(frm.forId,frm.forDestDecl,frm.forDestination,frm.forDescription,frm.forText,frm.forExpression,ForType.ForConsolidated,frm.forOrder);
 };
 RuleModule.conso=function(rul)
 {
  return Rule.New(rul.rulId,rul.rulSourceId,rul.rulDescription,rul.rulDestination,rul.rulExpression,ForType.ForConsolidated,rul.rulOrder,rul.rulXml);
 };
 RuleModule.New=function()
 {
  return Rule.New(new RulId({
   $:0,
   $0:Guid.NewGuid()
  }),null,"",List.T.Empty,ExpressionAny.ExiStet,ForType.ForBase,"","");
 };
 AttributeModule.New=function()
 {
  return Attribute.New(new AttId({
   $:0,
   $0:Guid.NewGuid()
  }),"",AttType.AtString,1);
 };
 CalculationModel.ofOptS=function(s)
 {
  function f()
  {
   return new ResultMessage({
    $:4,
    $0:s
   });
  }
  return function(v)
  {
   return Result.ofOption(f,v);
  };
 };
 CalculationModel.ofOptF=function(f)
 {
  function f$1()
  {
   return new ResultMessage({
    $:4,
    $0:f()
   });
  }
  return function(v)
  {
   return Result.ofOption(f$1,v);
  };
 };
 CalculationModel.calcSlice=function(calc)
 {
  return Slice.New(new FSharpMap.New([]),{
   $:1,
   $0:calc.calId
  },null);
 };
 CalculationModel.Map_adds=function(kvs,map)
 {
  return new FSharpMap.New(Seq$1.append(Map.ToSeq(map),kvs));
 };
 CalculationModel.Xmodel=function()
 {
  SC$1.$cctor();
  return SC$1.Xmodel;
 };
 Weight.Subtract={
  $:2
 };
 Weight.Add={
  $:1
 };
 Weight.Zero={
  $:0
 };
 TreeNode.New=function(nid,expanded,element,children,weight)
 {
  return{
   nid:nid,
   expanded:expanded,
   element:element,
   children:children,
   weight:weight
  };
 };
 TreeCollection.New=function(getParentO,getPath,setChildren)
 {
  return{
   getParentO:getParentO,
   getPath:getPath,
   setChildren:setChildren
  };
 };
 Tree.setChildrenEf=function(node,ch)
 {
  return Operators$2.op_BarGreaterGreater(Reader.ask(),function(treeC)
  {
   return(treeC.setChildren(node))(ch);
  });
 };
 Tree.getPathEf=function(nid)
 {
  return Operators$2.op_BarGreaterGreater(Reader.ask(),function(treeC)
  {
   return treeC.getPath(nid);
  });
 };
 Tree.getParentOEf=function(nid)
 {
  return Operators$2.op_BarGreaterGreater(Reader.ask(),function(treeC)
  {
   return treeC.getParentO(nid);
  });
 };
 TreeNode$1.tryFindNodeCIdEf=function(cid,nodes)
 {
  return TreeNode$1.tryFindTreeNodeEf(TreeNode$1.forCId(function(y)
  {
   return Unchecked.Equals(cid,y);
  }),nodes);
 };
 TreeNode$1.tryFindNodeTIdEf=function(tid,nodes)
 {
  return TreeNode$1.tryFindTreeNodeEf(TreeNode$1.forTId(function(y)
  {
   return Unchecked.Equals(tid,y);
  }),nodes);
 };
 TreeNode$1.tryFindSelChildEf=function(sel,nodes)
 {
  return Operators$2.op_BarGreaterGreater(TreeNode$1.tryFindSelNodeEf(sel,nodes),function(o)
  {
   return o==null?null:{
    $:1,
    $0:TreeNode$1.getElement(o.$0)
   };
  });
 };
 TreeNode$1.tryFindSelNodeEf=function(sel,nodes)
 {
  var o;
  return Operators$2.op_BarGreaterGreater(Eff.insertO((o=sel==null?null:{
   $:1,
   $0:sel.$0[0]
  },o==null?null:{
   $:1,
   $0:TreeNode$1.tryFindNodeEf(o.$0,nodes)
  })),function(o$1)
  {
   return o$1==null?null:Global.id(o$1.$0);
  });
 };
 TreeNode$1.tryFindNodeEf=function(nid,nodes)
 {
  return TreeNode$1.tryFindTreeNodeEf(function(n)
  {
   return Unchecked.Equals(n.nid,nid);
  },nodes);
 };
 TreeNode$1.tryFindTreeNodeEf=function(p,nodes)
 {
  return Operators$2.op_BarGreaterGreater(TreeEff.tryFind(function(x)
  {
   return p(TreeNode$1.ofNode(x));
  },Seq$1.map(TreeNode$1.treenode,nodes)),function(o)
  {
   return o==null?null:{
    $:1,
    $0:TreeNode$1.ofNode(o.$0)
   };
  });
 };
 TreeNode$1.forCId=function(p)
 {
  var f,f$1;
  function g(o)
  {
   return o==null?null:{
    $:1,
    $0:p(o.$0)
   };
  }
  function g$1(o)
  {
   return o==null?false:o.$0;
  }
  f=(f$1=function(x)
  {
   return TreeNode$1.getCId(TreeNode$1.getElement(x));
  },function(x)
  {
   return g(f$1(x));
  });
  return function(x)
  {
   return g$1(f(x));
  };
 };
 TreeNode$1.forTId=function(p)
 {
  var f,f$1;
  function g(o)
  {
   return o==null?null:{
    $:1,
    $0:p(o.$0)
   };
  }
  function g$1(o)
  {
   return o==null?false:o.$0;
  }
  f=(f$1=function(x)
  {
   return TreeNode$1.getTId(TreeNode$1.getElement(x));
  },function(x)
  {
   return g(f$1(x));
  });
  return function(x)
  {
   return g$1(f(x));
  };
 };
 TreeNode$1.getCId=function(a)
 {
  return a.$==0?{
   $:1,
   $0:a.$0
  }:null;
 };
 TreeNode$1.getTId=function(a)
 {
  return a.$==1?{
   $:1,
   $0:a.$0
  }:null;
 };
 TreeNode$1.getElement=function(n)
 {
  return n.element;
 };
 TreeNode$1.removeNodesEf=function(p,nodes)
 {
  return Operators$2.op_BarGreaterGreater(TreeEff.removeNodes(function(x)
  {
   return p(TreeNode$1.ofNode(x));
  },Seq$1.map(TreeNode$1.treenode,nodes)),function(s)
  {
   return Seq$1.map(TreeNode$1.ofNode,s);
  });
 };
 TreeNode$1.newNodeTot=function(tid)
 {
  return TreeNode$1.newTreeNode({
   $:1,
   $0:tid
  });
 };
 TreeNode$1.newNodeCalc=function(cid)
 {
  return TreeNode$1.newTreeNode({
   $:0,
   $0:cid
  });
 };
 TreeNode$1.newTreeNode=function(ch)
 {
  return TreeNode.New({
   $:0,
   $0:Guid.NewGuid()
  },true,ch,[],Weight.Add);
 };
 TreeNode$1.treenode=function(node)
 {
  return Node.New(function()
  {
   return node.nid;
  },function()
  {
   return node;
  },function()
  {
   return Operators$2.rtn(node.expanded);
  },function()
  {
   return Operators$2.rtn(node.element.$!=0);
  },function()
  {
   return Operators$2.rtn(Seq$1.map(TreeNode$1.treenode,node.children));
  },function()
  {
   return Tree.getPathEf(node.nid);
  },function()
  {
   return Operators$2.op_BarGreaterGreater(Tree.getParentOEf(node.nid),function(o)
   {
    return o==null?null:{
     $:1,
     $0:TreeNode$1.treenode(o.$0)
    };
   });
  },function(ch)
  {
   return Operators$2.op_BarGreaterGreater(Tree.setChildrenEf(node,Seq$1.map(TreeNode$1.ofNode,ch)),TreeNode$1.treenode);
  });
 };
 TreeNode$1.ofNode=function(n)
 {
  return n.getData();
 };
 HoverProvider=Monaco$1.HoverProvider=Runtime.Class({
  provideHover:function(model,pos,token)
  {
   var word,x;
   word=model.getWordAtPosition(pos);
   return!word?null:Hover.New([MarkDownString.New((x=word.word,(function($1)
   {
    return function($2)
    {
     return $1("The word is: "+Utils.toSafe($2));
    };
   }(Global.id))(x)),true)],Range.New(word.startColumn,word.endColumn,pos.lineNumber,pos.lineNumber));
  }
 },Obj,HoverProvider);
 HoverProvider.New=Runtime.Ctor(function(ed)
 {
  Obj.New.call(this);
 },HoverProvider);
 CompletionItemProvider=Monaco$1.CompletionItemProvider=Runtime.Class({
  resolveCompletionItem:function(item,token)
  {
   return CompletionItem.New(item.kind,item.label,"more details");
  },
  provideCompletionItems:function(model,pos,token,context)
  {
   var word;
   word=model.getWordAtPosition(pos);
   return!word?null:[CompletionItem.New(2,"Hello",""),CompletionItem.New(2,"How",""),CompletionItem.New(2,"Are",""),CompletionItem.New(2,"You",""),CompletionItem.New(2,word.word,"")];
  }
 },Obj,CompletionItemProvider);
 CompletionItemProvider.New=Runtime.Ctor(function(ed)
 {
  Obj.New.call(this);
 },CompletionItemProvider);
 DefinitionProvider=Monaco$1.DefinitionProvider=Runtime.Class({
  provideDefinition:function(model,pos,token)
  {
   var word,ms;
   word=model.getWordAtPosition(pos);
   return!word?null:(ms=model.findMatches(word.word,false,false,true," <>()+-=.,/#@$%^&*\"",false,1),Arrays.length(ms)===0?null:Location.New(Arrays.get(ms,0).range,model.uri));
  }
 },Obj,DefinitionProvider);
 DefinitionProvider.New=Runtime.Ctor(function(ed)
 {
  Obj.New.call(this);
 },DefinitionProvider);
 Monaco$1.monacoNew=function(_var,annotationsWO,showToolTipO,getHintsO)
 {
  return Monaco.onRender(function(ed)
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
   self.monaco.editor.setTheme("vs-dark");
   hp=new HoverProvider.New(ed);
   cp=new CompletionItemProvider.New(ed);
   dp=new DefinitionProvider.New(ed);
   Library.print$1(function($1)
   {
    return x($1[0],$1[1],$1[2]);
   });
   Library.print$1(function($1)
   {
    return x$1($1[0],$1[1],$1[2],$1[3]);
   });
   Library.print$1(function($1)
   {
    return x$2($1[0],$1[1]);
   });
   Library.print$1(function($1)
   {
    return x$3($1[0],$1[1],$1[2]);
   });
   self.monaco.languages.registerHoverProvider("fsharp",hp);
   self.monaco.languages.registerCompletionItemProvider("fsharp",cp);
   self.monaco.languages.registerDefinitionProvider("fsharp",dp);
   (Option.iter(function(a$1)
   {
    View$1.Sink(a,a$1);
   }))(annotationsWO);
  },Monaco.newVar(_var));
 };
 Monaco$1.transformAnnotations=function(msgs)
 {
  var rex,a;
  function m(ty,fl,fc,tl,tc,msg)
  {
   return MarkerData.New(fc,tc,fl,tl,ty==="Err"?8:ty==="Warn"?4:ty==="Hint"?1:2,msg);
  }
  rex="(Err|Warn|Info|Hint) \\((\\d+)\\,\\s*(\\d+)\\) - \\((\\d+)\\,\\s*(\\d+)\\)\\: \"([^\"]+?)\"\\.";
  return Arrays.map(function($1)
  {
   return m($1[0],$1[1],$1[2],$1[3],$1[4],$1[5]);
  },Arrays.choose(function(v)
  {
   var $1,a$1,t;
   return(a$1=LibraryJS.REGEX$2(rex,"",v),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===7)&&($1=[Arrays.get(a$1.$0,3),Arrays.get(a$1.$0,2),Arrays.get(a$1.$0,6),Arrays.get(a$1.$0,5),Arrays.get(a$1.$0,4),Arrays.get(a$1.$0,1)],true)))?{
    $:1,
    $0:[$1[5],Operators$5.toInt(Global.Number($1[1])),Operators$5.toInt(Global.Number($1[0])),Operators$5.toInt(Global.Number($1[4])),Operators$5.toInt(Global.Number($1[3])),$1[2]]
   }:null;
  },(a=LibraryJS.REGEX$2(rex,"g",msgs),a!=null&&a.$==1?a.$0:[])));
 };
 Monaco$1.annotationsV=function()
 {
  SC$1.$cctor();
  return SC$1.annotationsV;
 };
 Version.New=function(major,minor,majorDate,minorDate)
 {
  return{
   major:major,
   minor:minor,
   majorDate:majorDate,
   minorDate:minorDate
  };
 };
 VersionModule.incrementMajor=function(v)
 {
  return Version.New(v.major+1,0,function(n)
  {
   return n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDay()).slice(-2)+" "+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+":"+("00"+n.getMilliseconds()).slice(-3);
  }(new Global.Date(Date.now())),function(n)
  {
   return n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDay()).slice(-2)+" "+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+":"+("00"+n.getMilliseconds()).slice(-3);
  }(new Date(Date.now())));
 };
 VersionModule.incrementMinor=function(v)
 {
  return Version.New(v.major,v.minor+1,v.majorDate,function(n)
  {
   return n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDay()).slice(-2)+" "+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+":"+("00"+n.getMilliseconds()).slice(-3);
  }(new Date(Date.now())));
 };
 VersionModule.New=function()
 {
  return Version.New(0,0,"","");
 };
 ModelUI.New=function(treeHierarchy,calculations,totals,dimensions,cubes,globalDefs,server,selection,selectedDim,selectedCube,collapsed,cubePrefix,measurePrefix,outputMsgs,codeFS,parserMsgs,fileName,version)
 {
  return{
   treeHierarchy:treeHierarchy,
   calculations:calculations,
   totals:totals,
   dimensions:dimensions,
   cubes:cubes,
   globalDefs:globalDefs,
   server:server,
   selection:selection,
   selectedDim:selectedDim,
   selectedCube:selectedCube,
   collapsed:collapsed,
   cubePrefix:cubePrefix,
   measurePrefix:measurePrefix,
   outputMsgs:outputMsgs,
   codeFS:codeFS,
   parserMsgs:parserMsgs,
   fileName:fileName,
   version:version
  };
 };
 MsgModel.NoOp={
  $:28
 };
 MsgModel.AddDimension={
  $:17
 };
 MsgModel.AddCalculation={
  $:3
 };
 MsgModel.AddTotal={
  $:0
 };
 ModelUIModule.getDimsCubeO=Global.id;
 ModelUIModule.setHierarchy=function(model,nodes)
 {
  model.treeHierarchy.Set(Arrays.ofSeq(nodes));
 };
 ModelUIModule.refreshNow=function()
 {
  SC$1.$cctor();
  return SC$1.refreshNow;
 };
 ModelUIModule.refreshView=function()
 {
  SC$1.$cctor();
  return SC$1.refreshView;
 };
 ModelUIModule.isNodeFormSelected=function(fid,nid,sel)
 {
  return Unchecked.Equals(sel,{
   $:1,
   $0:[nid,{
    $:1,
    $0:fid
   }]
  });
 };
 ModelUIModule.nonFormulaV=function()
 {
  SC$1.$cctor();
  return SC$1.nonFormulaV;
 };
 ModelUIModule.nonCalculationV=function()
 {
  SC$1.$cctor();
  return SC$1.nonCalculationV;
 };
 ModelUIModule.nonTotalV=function()
 {
  SC$1.$cctor();
  return SC$1.nonTotalV;
 };
 ModelUIModule.nonFormula=function()
 {
  SC$1.$cctor();
  return SC$1.nonFormula;
 };
 ModelUIModule.nonCalculation=function()
 {
  SC$1.$cctor();
  return SC$1.nonCalculation;
 };
 ModelUIModule.nonTotal=function()
 {
  SC$1.$cctor();
  return SC$1.nonTotal;
 };
 ModelUIModule.selectedString=function(txt,selectedV)
 {
  return View$1.Map(function($1)
  {
   return $1?txt:"";
  },selectedV);
 };
 ModelUIModule.isNodeSelected=function(nid,sel)
 {
  var o;
  o=sel==null?null:{
   $:1,
   $0:Unchecked.Equals(nid,sel.$0[0])
  };
  return o==null?false:o.$0;
 };
 Global$1.appendParser=function(msg)
 {
  Global$1.appendText(Global$1.model().parserMsgs,msg);
 };
 Global$1.appendMsgs=function(msg)
 {
  Global$1.appendText(Global$1.model().outputMsgs,msg);
 };
 Global$1.appendText=function(_var,msg)
 {
  var $1;
  _var.Set(($1=_var.Get(),$1===""?msg:msg===""?$1:$1+"\n"+msg));
 };
 Global$1.processor=function()
 {
  SC$1.$cctor();
  return SC$1.processor;
 };
 Global$1.set_processor=function($1)
 {
  SC$1.$cctor();
  SC$1.processor=$1;
 };
 Global$1.model=function()
 {
  SC$1.$cctor();
  return SC$1.model;
 };
 LocationDet.InFsCode={
  $:5
 };
 LocationDet.InGlobalDefs={
  $:2
 };
 MsgLocation.New=function(lines,indent,location)
 {
  return{
   lines:lines,
   indent:indent,
   location:location
  };
 };
 FSCode.fsCodeVO=function()
 {
  SC$1.$cctor();
  return SC$1.fsCodeVO;
 };
 FSCode.fsCode=function()
 {
  var prefaceV,b,newDimsV,newMDimsV,newCubesV,newCalcsV,newFormsV,globalDefV,newMDimsSV,newCubesSV,newFormsSV,newDimsSV,newCalcsSV;
  prefaceV=(b=View$1.get_Do(),View$1.Bind(function(a)
  {
   return View$1.Bind(function(a$1)
   {
    return View$1.Const(FSCode.txtLocn(LocationDet.InFsCode,FSCode.preface(a.major,a$1)));
   },Global$1.model().server.get_View());
  },Global$1.model().version.get_View()));
  newDimsV=FSCode.mapSeqCached(DimensionModule.sort,FSCode.newDimS,Global$1.model().dimensions);
  newMDimsV=FSCode.mapSeqCached(Global.id,FSCode.newMeasureDimS,Global$1.model().cubes);
  newCubesV=FSCode.mapSeqCached(Global.id,FSCode.newCubeS,Global$1.model().cubes);
  newCalcsV=FSCode.mapSeqCachedW(Global.id,FSCode.newCalcSW,Global$1.model().calculations);
  newFormsV=FSCode.mapSeqCached(Global.id,FSCode.getForms,Global$1.model().calculations);
  globalDefV=View$1.Map(function($1)
  {
   return FSCode.txtLocn(LocationDet.InGlobalDefs,String.indent$1(4,$1));
  },Global$1.model().globalDefs.get_View());
  newMDimsSV=View$1.Map(function($1)
  {
   return FSCode.txtLocn(LocationDet.InFsCode,$1);
  },newMDimsV);
  newCubesSV=View$1.Map(function($1)
  {
   return FSCode.txtLocn(LocationDet.InFsCode,$1);
  },newCubesV);
  newFormsSV=View$1.Map(function($1)
  {
   return FSCode.groupLocns(Seq$1.collect(Global.id,$1));
  },newFormsV);
  newDimsSV=View$1.Map(FSCode.groupLoc1s,newDimsV);
  newCalcsSV=View$1.Map(FSCode.groupLoc1s,newCalcsV);
  return View$1.Map(FSCode.collectCode,View$1.Sequence(List.ofArray([prefaceV,newDimsSV,newMDimsSV,View$1.Const(FSCode.txtLoc1(LocationDet.InFsCode,"    addDims()")),newCubesSV,View$1.Const(FSCode.txtLoc1(LocationDet.InFsCode,"    addCubes()")),newCalcsSV,View$1.Const(FSCode.txtLoc1(LocationDet.InFsCode,"    addCalcs()")),globalDefV,newFormsSV,View$1.Const(FSCode.txtLoc1(LocationDet.InFsCode,"    addFrms()"))])));
 };
 FSCode.collectCode=function(v)
 {
  var t;
  function f(t$1)
  {
   return t$1[0];
  }
  function g(y)
  {
   return""!==y;
  }
  t=Arrays.unzip(Arrays.ofSeq(Seq$1.filter(function(x)
  {
   return g(f(x));
  },v)));
  return[Strings.concat("\n",t[0]),Arrays.collect(Global.id,t[1])];
 };
 FSCode.groupLocns=function(fs)
 {
  function m(t,lc)
  {
   return FSCode.loc(lc,Seq$1.length(Strings.SplitChars(t,["\n"],0)));
  }
  return[Strings.concat("\n",Seq$1.map(function(t)
  {
   return t[0];
  },fs)),Arrays.ofSeq(Seq$1.map(function($1)
  {
   return m($1[0],$1[1]);
  },fs))];
 };
 FSCode.groupLoc1s=function(cs)
 {
  function m(a,lc)
  {
   return FSCode.loc(lc,1);
  }
  return[Strings.concat("\n",Seq$1.map(function(t)
  {
   return t[0];
  },cs)),Arrays.ofSeq(Seq$1.map(function($1)
  {
   return m($1[0],$1[1]);
  },cs))];
 };
 FSCode.txtLoc1=function(lc,txt)
 {
  return FSCode.txtLocn(lc,List.ofArray([txt]));
 };
 FSCode.txtLocn=function(lc,txts)
 {
  return[Strings.concat("\n",txts),[FSCode.loc(lc,Seq$1.length(txts))]];
 };
 FSCode.loc=function(lc,nl)
 {
  return MsgLocation.New(nl,4,lc);
 };
 FSCode.bindSeqCached=function(map,f,model)
 {
  function a(o)
  {
   return o==null?null:f(o.$0);
  }
  return FSCode.viewSeqChoose(FSCode.mapSeqCached0(map,function(a$1)
  {
   return View$1.Map(a,a$1);
  },model));
 };
 FSCode.mapSeqCachedW=function(map,f,model)
 {
  function a(a$1)
  {
   return FSCode.optviewMerge(f,a$1);
  }
  return FSCode.viewSeqChoose(FSCode.mapSeqCached0(map,function(a$1)
  {
   return View$1.Bind(a,a$1);
  },model));
 };
 FSCode.mapSeqCached=function(map,f,model)
 {
  function a(o)
  {
   return o==null?null:{
    $:1,
    $0:f(o.$0)
   };
  }
  return FSCode.viewSeqChoose(FSCode.mapSeqCached0(map,function(a$1)
  {
   return View$1.Map(a,a$1);
  },model));
 };
 FSCode.viewSeqChoose=function(v)
 {
  return View$1.Map(function(s)
  {
   return Seq$1.choose(Global.id,s);
  },View$1.Join(View$1.Map(View$1.Sequence,v)));
 };
 FSCode.optviewMerge=function(f,a)
 {
  return a!=null&&a.$==1?View$1.Map(function(a$1)
  {
   return{
    $:1,
    $0:a$1
   };
  },f(a.$0)):View$1.Const(null);
 };
 FSCode.mapSeqCached0=function(map,f,lmodel)
 {
  var f$1,f$2;
  function g(a)
  {
   return lmodel.TryFindByKeyAsView(a);
  }
  return View$1.MapSeqCachedBy(lmodel.key,(f$1=(f$2=lmodel.key,function(x)
  {
   return g(f$2(x));
  }),function(x)
  {
   return f(f$1(x));
  }),View$1.Map(map,lmodel.v));
 };
 FSCode.fsCodeForCalc=function(c)
 {
  var fsForms,fsCalc,o,o$1,x;
  fsForms=Strings.concat("\n",Seq$1.map(function(t)
  {
   return t[0];
  },FSCode.getForms(c)));
  fsCalc=(o=(o$1=View$1.TryGet(FSCode.newCalcSW(c)),o$1==null?null:{
   $:1,
   $0:o$1.$0[0]
  }),o==null?"View.TryGet failed for some reason":o.$0);
  return(x=(function($1)
  {
   return function($2)
   {
    return $1("\r\n                        module Formula =\r\n                            open FSSGlobal.CalculationModel\r\n                            open CalculationModel\r\n                            open CalculationSyntax\r\n                            open InitModel\r\n                            open System \r\n                            open Definition"+Global.String($2)+"\n");
   };
  }(Global.id))(Global$1.model().version.Get().major),(String.unindentStr$1())(x))+fsCalc+"\n    addCalcs()\n"+fsForms+"\n    addFrms() "+"\n    ";
 };
 FSCode.preface=function(majorVersion,server)
 {
  var x;
  return String.unindent$1((x=(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("\r\n                #nowarn \"86\"\r\n                #r @\"..\\CalculationModelDll\\CalculationModelDll.dll\"\r\n                module Definition"+Global.String($2)+" =\r\n                    open FSSGlobal.CalculationModel\r\n                    open CalculationModel\r\n                    open CalculationSyntax\r\n                    open InitModel\r\n                    open System\r\n                    \r\n                    let NoCubeYet = newCube (CubId <| Guid.NewGuid()) \"NOCUBEYET\" CtCalc [] None\r\n                    \r\n                    {\r\n                        modId           = ModId <| System.Guid.NewGuid()\r\n                        server          = @"+Utils.prettyPrint($3)+"\r\n                        actualElem      = \"Actual\"\r\n                        modCubes        = [| |]\r\n                        modDims         = [| |]\r\n                        modCalculations = [| |]\r\n                    } |> setInitModel\r\n                        ");
  }))(Global.id))(majorVersion))(server),(FSCode.trace())(x)));
 };
 FSCode.getForms=function(c)
 {
  return Arrays.ofSeq(Seq$1.map(function(t)
  {
   return FSCode.newFormS(t[0],t[1]);
  },Seq$1.map(function(f)
  {
   return[c,f];
  },Seq$1.sortBy(function(f)
  {
   return f.forOrder;
  },c.calFormulas))));
 };
 FSCode.newFormS=function(c,f)
 {
  var txt,x;
  txt=FSCode.prepareFormula(f.forText);
  return[(x=Strings.concat("\n",List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(txt,Seq$1.delay(function()
   {
    return[(((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6,$7)
    {
     return $1("    |> newForm (ForId (Guid.Parse "+Utils.prettyPrint($2)+")) "+Utils.toSafe($3)+" "+Utils.toSafe($4)+" "+Utils.toSafe($5)+" "+Utils.prettyPrint($6)+" "+Utils.prettyPrint($7)+" ");
    },7))(Global.id))(f.forId.get_Id()))(FSCode.fixName(c.calName)))((function($1)
    {
     return function($2)
     {
      return $1(RuleEditor_GeneratedPrintf.p$4($2));
     };
    }(Global.id))(f.forType)))(FSCode.getDest(f)))(f.forOrder))(Library["String.Left$1"](FSCode.fixText(txt),495))];
   }));
  }))),(FSCode.trace())(x)),{
   $:3,
   $0:f.forId
  }];
 };
 FSCode.fixText=function(txt)
 {
  return Strings.concat(" ",Seq$1.map(function(s)
  {
   return Strings.Replace(Strings.Replace(s,"\\","\\\\"),"\"","\\\"");
  },Seq$1.map(String.trim$1,txt)));
 };
 FSCode.prepareFormula=function(f)
 {
  return Seq$1.map(function(y)
  {
   return"    "+y;
  },String.unindent$1(Strings.Replace(Strings.Replace(Strings.Replace(f,"@=","&="),"@<","&<"),"@>","&>")));
 };
 FSCode.getDest=function(f)
 {
  var x;
  x=Strings.concat(" ; ",Seq$1.choose(function(d)
  {
   var o;
   o=FSCode.getDimO(d.K);
   return o==null?null:{
    $:1,
    $0:(((Runtime.Curried3(function($1,$2,$3)
    {
     return $1(Utils.toSafe($2)+".["+Utils.prettyPrint($3)+"]");
    }))(Global.id))(o.$0.dimName))(d.V)
   };
  },f.forDestDecl));
  return(function($1)
  {
   return function($2)
   {
    return $1("[ "+Utils.toSafe($2)+" ]");
   };
  }(Global.id))(x);
 };
 FSCode.newCalcSW=function(c)
 {
  return View$1.Map(function($1)
  {
   var x;
   return[(x=((((((((Runtime.Curried(function($2,$3,$4,$5,$6,$7,$8,$9)
   {
    return $2("    let "+Utils.toSafe($3)+" = newCalc (CalId (Guid.Parse "+Utils.prettyPrint($4)+")) "+Utils.toSafe($5)+" "+Utils.prettyPrint($6)+" "+Utils.prettyPrint($7)+" "+Utils.prettyPrint($8)+" "+Utils.toSafe($9));
   },8))(Global.id))(FSCode.fixName(c.calName)))(c.calId.get_Id()))(c.isInput?"Input":"Calc"))(c.calName))(c.calOrder))(c.isText))($1),(FSCode.trace())(x)),{
    $:1,
    $0:c.calId
   }];
  },FSCode.getCalcCubeNameW(c.calDims));
 };
 FSCode.getCalcCubeNameW=function(cdims)
 {
  var v,x,f,f$1,g,prior;
  function m(c)
  {
   return FSCode.fixName(c.cubName);
  }
  function g$1(o)
  {
   return o==null?"NoCubeYet":o.$0;
  }
  v=(x=Global$1.model().cubes.TryFindAsView(function(cub)
  {
   return Unchecked.Equals(new FSharpSet.New(cub.cubDims),cdims);
  }),View$1.Map((f=(f$1=function(o)
  {
   return o==null?null:{
    $:1,
    $0:m(o.$0)
   };
  },function(x$1)
  {
   return g$1(f$1(x$1));
  }),(g=FSCode.trace(),function(x$1)
  {
   return g(f(x$1));
  })),x));
  prior=[Var$2.Create$1(null)];
  View$1.Sink(function(v$1)
  {
   if(!Unchecked.Equals(prior[0].Get(),v$1))
    prior[0].Set(v$1);
  },v);
  return prior[0].get_View();
 };
 FSCode.newCubeS=function(c)
 {
  var x;
  x=((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6)
  {
   return $1("    let "+Utils.toSafe($2)+" = newCube (CubId (Guid.Parse "+Utils.prettyPrint($3)+")) "+Utils.prettyPrint($4)+" CtCalc [ "+Utils.toSafe($5)+" ] (Some "+Utils.toSafe($6)+")");
  },6))(Global.id))(FSCode.fixName(c.cubName)))(c.cubId.get_Id()))(c.cubName))(FSCode.getCubeDims(c)))(FSCode.fixName(FSCode.cubeMeasureName(c)));
  return(FSCode.trace())(x);
 };
 FSCode.getCubeDims=function(c)
 {
  var o;
  return Strings.concat(" ; ",Seq$1.append(Seq$1.map(function(d)
  {
   return d.dimName;
  },Seq$1.choose((o=Global$1.model().dimensions,function(a)
  {
   return o.TryFindByKey(a);
  }),c.cubDims)),List.ofArray([FSCode.dimMeasureName(c.cubName)])));
 };
 FSCode.getMeasureDims=function()
 {
  return Seq$1.map(FSCode.newMeasureDimS,Global$1.model().cubes["var"].Get());
 };
 FSCode.newMeasureDimS=function(cube)
 {
  var x,c;
  x=(c=FSCode.cubeMeasureName(cube),((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6)
  {
   return $1("    let "+Utils.toSafe($2)+" = newDim (DimId (Guid.Parse "+Utils.prettyPrint($3)+")) "+Utils.prettyPrint($4)+" "+RuleEditor_GeneratedPrintf.p$5($5)+" "+Utils.prettyPrint($6));
  },6))(Global.id))(FSCode.fixName(c)))(cube.cubId.get_Id()))(c))(DimType.DtCalc))(""));
  return(FSCode.trace())(x);
 };
 FSCode.cubeMeasureName=function(cube)
 {
  return FSCode.dimMeasureName(cube.cubName);
 };
 FSCode.dimMeasureName=function(cubeName)
 {
  return Global$1.model().measurePrefix.Get()+cubeName.substring(1);
 };
 FSCode.newDimS=function(d)
 {
  var x;
  return[(x=((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6)
  {
   return $1("    let "+Utils.toSafe($2)+" = newDim (DimId (Guid.Parse "+Utils.prettyPrint($3)+")) "+Utils.prettyPrint($4)+" "+RuleEditor_GeneratedPrintf.p$5($5)+" "+Utils.prettyPrint($6));
  },6))(Global.id))(FSCode.fixName(d.dimName)))(d.dimId.get_Id()))(d.dimName))(d.dimType))(d.dimExclude?"":d.dimPrefix),(FSCode.trace())(x)),{
   $:0,
   $0:d.dimId
  }];
 };
 FSCode.fixName=function(c)
 {
  return Strings.Replace(Strings.Replace(Strings.Trim(c)," ","_"),"-","_");
 };
 FSCode.getFormO=function(fid)
 {
  return Seq$1.tryPick(function(c)
  {
   return Seq$1.tryPick(function(f)
   {
    return Unchecked.Equals(f.forId,fid)?{
     $:1,
     $0:[c,f]
    }:null;
   },c.calFormulas);
  },Global$1.model().calculations["var"].Get());
 };
 FSCode.getCalcO=function(cid)
 {
  return Global$1.model().calculations.TryFindByKey(cid);
 };
 FSCode.getDimO=function(did)
 {
  return Global$1.model().dimensions.TryFindByKey(did);
 };
 FSCode.trace=function()
 {
  SC$1.$cctor();
  return SC$1.trace;
 };
 ParseFS.filterFormula=function(msgs,fidO)
 {
  var a;
  function m(fl,fc,tl,tc,msg)
  {
   return MarkerData.New(fc-1,tc-1,fl-1,tl-1,8,msg);
  }
  return Arrays.map(function($1)
  {
   return m($1[0],$1[1],$1[2],$1[3],$1[4]);
  },Arrays.choose(function(v)
  {
   var $1,a$1,t,guid;
   return(a$1=LibraryJS.REGEX$2(ParseFS.rexFormula(),"",v),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===7)&&(Arrays.get(a$1.$0,3),Arrays.get(a$1.$0,4),Arrays.get(a$1.$0,5),(guid=Arrays.get(a$1.$0,6),(Arrays.get(a$1.$0,1),Arrays.get(a$1.$0,2),Unchecked.Equals(fidO,{
    $:1,
    $0:new ForId({
     $:0,
     $0:guid
    })
   })))&&($1=[Arrays.get(a$1.$0,2),Arrays.get(a$1.$0,1),Arrays.get(a$1.$0,6),Arrays.get(a$1.$0,5),Arrays.get(a$1.$0,4),Arrays.get(a$1.$0,3)],true))))?{
    $:1,
    $0:[Operators$5.toInt(Global.Number($1[1])),Operators$5.toInt(Global.Number($1[0])),Operators$5.toInt(Global.Number($1[5])),Operators$5.toInt(Global.Number($1[4])),$1[3]]
   }:null;
  },(a=LibraryJS.REGEX$2(ParseFS.rexFormula(),"g",msgs),a!=null&&a.$==1?a.$0:[])));
 };
 ParseFS.rexFormula=function()
 {
  SC$1.$cctor();
  return SC$1.rexFormula;
 };
 ParseFS.getHints=function(lc,showHints,txt,line,col)
 {
  var b;
  function g(v)
  {
   Library.print$1(v);
  }
  AsyncResult.iterA(function(x)
  {
   return g(ResultMessage.summarized(x));
  },Global.ignore,(b=Monads.asyncResult(),b.Run(b.Delay(function()
  {
   var $1;
   return($1=FSCode.fsCodeVO(),$1!=null&&$1.$==1)?Extensions["AsyncResultBuilder.Bind"](b,View$1.GetAsync(FSCode.fsCodeVO().$0),function(a)
   {
    var m,loc,word;
    function p(a$1,l)
    {
     return Unchecked.Equals(l.location,lc);
    }
    m=Seq$1.tryFind(function($2)
    {
     return p($2[0],$2[1]);
    },(Seq$1.mapFold(function(from,l)
    {
     return[[from,l],from+l.lines];
    },0,a[1]))[0]);
    return m!=null&&m.$==1?(loc=m.$0[1],(word=REGEX.getStartWord$1(txt,col),(((((Runtime.Curried(function($2,$3,$4,$5)
    {
     return $2("getHints '"+Utils.toSafe($3)+"' <= "+Global.String($4)+" :"+Utils.toSafe($5)+" => ");
    },4))(function(s)
    {
     console.log(s);
    }))(word))(col))(txt),b.Bind$1(Calls.completion(Strings.replicate(loc.indent," ")+txt,true,ParseFS.parseFile(),line+1+m.$0[0],col+1+loc.indent,""),function(a$1)
    {
     showHints(Arrays.map(function(cr)
     {
      return[cr.ReplacementText,(((Runtime.Curried3(function($2,$3,$4)
      {
       return $2(Strings.PadRight(Utils.toSafe($3),40)+" "+Strings.PadLeft(Utils.toSafe($4),20));
      }))(Global.id))(cr.Name))(ParseFS.getSymbolType(cr.GlyphChar)),cr.Glyph];
     },a$1[0]),[line,col-word.length],[line,col]);
     return b.Zero();
    })))):b.Zero();
   }):b.Zero();
  }))));
 };
 ParseFS.getSymbolType=function(chr)
 {
  return chr==="C"?"class":chr==="Cn"?"Constant":chr==="D"?"delegate":chr==="E"?"enum":chr==="P"?"property":chr==="e"?"event":chr==="X"?"exception":chr==="F"?"field":chr==="I"?"interface":chr==="M"?"function":chr==="N"?"module":chr==="S"?"struct":chr==="T"?"type":chr==="V"?"Variable":chr;
 };
 ParseFS.showToolTips=function(lc,txt,line,col)
 {
  var b;
  function g(v)
  {
   Library.print$1(v);
  }
  AsyncResult.iterA(function(x)
  {
   return g(ResultMessage.summarized(x));
  },Global.ignore,(b=Monads.asyncResult(),b.Run(b.Delay(function()
  {
   var $1;
   return($1=FSCode.fsCodeVO(),$1!=null&&$1.$==1)?Extensions["AsyncResultBuilder.Bind"](b,View$1.GetAsync(FSCode.fsCodeVO().$0),function(a)
   {
    var locs,m,loc,from,sub,add0,lf,lt,cf,ct;
    function p(a$1,l)
    {
     return Unchecked.Equals(l.location,lc);
    }
    locs=a[1];
    m=Seq$1.tryFind(function($2)
    {
     return p($2[0],$2[1]);
    },(Seq$1.mapFold(function(from$1,l)
    {
     return[[from$1,l],from$1+l.lines];
    },0,locs))[0]);
    return m!=null&&m.$==1?(loc=m.$0[1],(from=m.$0[0],(sub=Strings.length(REGEX.getStartWord$1(txt,col)),(add0=Strings.length(REGEX.getEndWord$1(txt,col)),(lf=line+1+from,(lt=line+1+from,(cf=col-sub+1+loc.indent,(ct=col+(sub===0&&add0===0?2:add0)+1+loc.indent,b.Bind$1(Calls.toolTip(ParseFS.parseFile(),lf,cf,""),function(a$1)
    {
     var msg;
     msg=ParseFS.adaptMessage(locs,lf,cf,lt,ct,Strings.concat("\n",Seq$1.collect(function(t)
     {
      return List.ofArray([t.Signature,t.Comment]);
     },Seq$1.collect(Global.id,a$1[0]))));
     return!(Global$1.model().parserMsgs.Get().indexOf(msg)!=-1)?(Global$1.appendParser(msg),b.Zero()):b.Zero();
    }))))))))):b.Zero();
   }):b.Zero();
  }))));
 };
 ParseFS.jumpToRef=function(e)
 {
  var v;
  v=e.Target.value;
  ParseFS.jumpToLine(Slice$1.string(v,{
   $:1,
   $0:Slice$1.string(v,{
    $:1,
    $0:0
   },{
    $:1,
    $0:e.Target.selectionStart
   }).lastIndexOf("\n")+1
  },null));
 };
 ParseFS.jumpToLine=function(line)
 {
  var a,x,a$1,$1,v,x$1,$2,v$1,x$2,$3,v$2,x$3,v$3,x$4;
  function f(v$4)
  {
   return!v$4;
  }
  function g(v$4)
  {
   return!v$4;
  }
  a=LibraryJS.REGEX$2((x=Strings.concat("|",List.ofArray([ParseFS.rexGlobal(),ParseFS.rexTotId(),ParseFS.rexCalcId(),ParseFS.rexFormId(),ParseFS.rexDimId()])),(function($4)
  {
   return function($5)
   {
    return $4("(?:"+Utils.toSafe($5)+")");
   };
  }(Global.id))(x)),"",line);
  a!=null&&a.$==1?(a$1=Arrays.filter(function(x$5)
  {
   return g(f(x$5));
  },Arrays.skip(1,a.$0)),!Unchecked.Equals(a$1,null)&&a$1.length===2&&(v=Arrays.get(a$1,0),(Arrays.get(a$1,1),v===ParseFS.sForId()))?(Arrays.get(a$1,0),x$1={
   $:11,
   $0:new ForId({
    $:0,
    $0:Arrays.get(a$1,1)
   })
  },(Global$1.processor())(x$1)):!Unchecked.Equals(a$1,null)&&a$1.length===2&&(v$1=Arrays.get(a$1,0),(Arrays.get(a$1,1),v$1===ParseFS.sCalId()))?(Arrays.get(a$1,0),x$2={
   $:8,
   $0:new CalId({
    $:0,
    $0:Arrays.get(a$1,1)
   })
  },(Global$1.processor())(x$2)):!Unchecked.Equals(a$1,null)&&a$1.length===2&&(v$2=Arrays.get(a$1,0),(Arrays.get(a$1,1),v$2===ParseFS.sTotId()))?(Arrays.get(a$1,0),x$3={
   $:1,
   $0:new TotId({
    $:0,
    $0:Arrays.get(a$1,1)
   })
  },(Global$1.processor())(x$3)):!Unchecked.Equals(a$1,null)&&a$1.length===2?(v$3=Arrays.get(a$1,0),(Arrays.get(a$1,1),v$3===ParseFS.sDimId()))?(Arrays.get(a$1,0),x$4={
   $:19,
   $0:new DimId({
    $:0,
    $0:Arrays.get(a$1,1)
   })
  },(Global$1.processor())(x$4)):void 0:void 0):void 0;
 };
 ParseFS.rexDimId=function()
 {
  SC$1.$cctor();
  return SC$1.rexDimId;
 };
 ParseFS.rexFormId=function()
 {
  SC$1.$cctor();
  return SC$1.rexFormId;
 };
 ParseFS.rexCalcId=function()
 {
  SC$1.$cctor();
  return SC$1.rexCalcId;
 };
 ParseFS.rexTotId=function()
 {
  SC$1.$cctor();
  return SC$1.rexTotId;
 };
 ParseFS.rexGlobal=function()
 {
  SC$1.$cctor();
  return SC$1.rexGlobal;
 };
 ParseFS.sDimId=function()
 {
  SC$1.$cctor();
  return SC$1.sDimId;
 };
 ParseFS.sTotId=function()
 {
  SC$1.$cctor();
  return SC$1.sTotId;
 };
 ParseFS.sCalId=function()
 {
  SC$1.$cctor();
  return SC$1.sCalId;
 };
 ParseFS.sForId=function()
 {
  SC$1.$cctor();
  return SC$1.sForId;
 };
 ParseFS.adaptErrors=function(locs,errs)
 {
  return Seq$1.map(function(err)
  {
   return ParseFS.adaptMessage(locs,err.StartLine,err.StartColumn,err.EndLine,err.EndColumn,err.Message);
  },errs.Errors);
 };
 ParseFS.parseFile=function()
 {
  SC$1.$cctor();
  return SC$1.parseFile;
 };
 ParseFS.adaptMessages=function(locs,ms)
 {
  var rex,a;
  rex=".*\\((\\d+),(\\d+)\\) - \\((\\d+),(\\d+)\\) ([^\"]*?)\"(?:\\n|$)";
  return Arrays.map(function(a$1)
  {
   var $1,a$2,t;
   return(a$2=LibraryJS.REGEX$2(rex,"",a$1),a$2!=null&&a$2.$==1&&((t=a$2.$0,!Unchecked.Equals(t,null)&&t.length===6)&&($1=[Arrays.get(a$2.$0,2),Arrays.get(a$2.$0,4),Arrays.get(a$2.$0,1),Arrays.get(a$2.$0,3),Arrays.get(a$2.$0,5)],true)))?ParseFS.adaptMessage(locs,Operators$5.toInt(Global.Number($1[2])),Operators$5.toInt(Global.Number($1[0])),Operators$5.toInt(Global.Number($1[3])),Operators$5.toInt(Global.Number($1[1])),$1[4]):a$1;
  },(a=LibraryJS.REGEX$2(rex,"g",ms),a!=null&&a.$==1?a.$0:[ms]));
 };
 ParseFS.adaptMessage=function(locs,lf,cf,lt,ct,msg)
 {
  var o,o$1,$1,from,l,m,cid,o$2,fid,o$3,$2,c,fid$1,o$4,$3,c$1,did,o$5;
  function p(from$1,l$1)
  {
   return lf-1>=from$1&&lf-1<from$1+l$1.lines;
  }
  o=(o$1=Seq$1.tryFind(function($4)
  {
   return p($4[0],$4[1]);
  },(Seq$1.mapFold(function(from$1,l$1)
  {
   return[[from$1,l$1],from$1+l$1.lines];
  },0,locs))[0]),o$1==null?null:($1=o$1.$0,(from=$1[0],(l=$1[1],(m=l.location,m.$==1?(cid=m.$0,(o$2=FSCode.getCalcO(cid),o$2==null?null:{
   $:1,
   $0:((((Runtime.Curried(function($4,$5,$6,$7)
   {
    return $4(Utils.toSafe($5)+": "+Utils.prettyPrint($6)+". "+RuleEditor_GeneratedPrintf.p$1($7));
   },4))(Global.id))(o$2.$0.calName))(msg))(cid)
  })):m.$==4?(fid=m.$0,(o$3=FSCode.getFormO(fid),o$3==null?null:{
   $:1,
   $0:($2=o$3.$0,(c=$2[0],($2[1],((((Runtime.Curried(function($4,$5,$6,$7)
   {
    return $4(Utils.toSafe($5)+": "+Utils.prettyPrint($6)+". "+RuleEditor_GeneratedPrintf.p($7));
   },4))(Global.id))(c.calName))(msg))(fid))))
  })):m.$==3?(fid$1=m.$0,(o$4=FSCode.getFormO(fid$1),o$4==null?null:{
   $:1,
   $0:($3=o$4.$0,(c$1=$3[0],($3[1],((((((((Runtime.Curried(function($4,$5,$6,$7,$8,$9,$10,$11)
   {
    return $4(Utils.toSafe($5)+": ("+Global.String($6)+","+Global.String($7)+") - ("+Global.String($8)+","+Global.String($9)+"): "+Utils.prettyPrint($10)+". "+RuleEditor_GeneratedPrintf.p($11));
   },8))(Global.id))(c$1.calName))(lf-from))(cf-l.indent))(lt-from))(ct-l.indent))(msg))(fid$1))))
  })):m.$==5?{
   $:1,
   $0:((((((Runtime.Curried(function($4,$5,$6,$7,$8,$9)
   {
    return $4("F# Code ("+Global.String($5)+","+Global.String($6)+") - ("+Global.String($7)+","+Global.String($8)+"): "+Utils.prettyPrint($9)+".");
   },6))(Global.id))(lf))(cf))(lt))(ct))(msg)
  }:m.$==2?{
   $:1,
   $0:((((((Runtime.Curried(function($4,$5,$6,$7,$8,$9)
   {
    return $4("Global  ("+Global.String($5)+","+Global.String($6)+") - ("+Global.String($7)+","+Global.String($8)+"): "+Utils.prettyPrint($9)+".");
   },6))(Global.id))(lf-from))(cf-l.indent))(lt-from))(ct-l.indent))(msg)
  }:(did=m.$0,(o$5=FSCode.getDimO(did),o$5==null?null:{
   $:1,
   $0:((((Runtime.Curried(function($4,$5,$6,$7)
   {
    return $4(Utils.toSafe($5)+": "+Utils.prettyPrint($6)+". "+RuleEditor_GeneratedPrintf.p$3($7));
   },4))(Global.id))(o$5.$0.dimName))(msg))(did)
  })))))));
  return o==null?((((((Runtime.Curried(function($4,$5,$6,$7,$8,$9)
  {
   return $4(Global.String($5)+" "+Global.String($6)+" - "+Global.String($7)+" "+Global.String($8)+" "+Utils.toSafe($9));
  },6))(Global.id))(lf))(cf))(lt))(ct))(msg):o.$0;
 };
 Render.dtypes=function()
 {
  SC$1.$cctor();
  return SC$1.dtypes;
 };
 Render.formTypeV=function(formV)
 {
  return Var$2.Lens(Var$2.Lens(formV,function($1)
  {
   return $1.forType;
  },function($1,$2)
  {
   return Formula.New($1.forId,$1.forDestDecl,$1.forDestination,$1.forDescription,$1.forText,$1.forExpression,$2,$1.forOrder);
  }),function(t)
  {
   return Slice$1.string((function($1)
   {
    return function($2)
    {
     return $1(RuleEditor_GeneratedPrintf.p$4($2));
    };
   }(Global.id))(t),{
    $:1,
    $0:3
   },null);
  },function(a,s)
  {
   return s==="Base"?ForType.ForBase:s==="Consolidated"?ForType.ForConsolidated:ForType.ForAll;
  });
 };
 Render.calcTypeV=function(calcV)
 {
  return Var$2.Lens(Var$2.Lens(calcV,function($1)
  {
   return $1.isInput;
  },function($1,$2)
  {
   return Calculation.New($1.calId,$1.calName,$1.calDescription,$1.calOrder,$1.format,$1.isText,$2,$1.isBalance,$1.calDims,$1.calFormulas,$1.cubIdO,$1.properties);
  }),function(a)
  {
   return a?"Input":"Calc";
  },function(a,s)
  {
   return s!=="Calc";
  });
 };
 Render.currentFormV=function()
 {
  SC$1.$cctor();
  return SC$1.currentFormV;
 };
 Render.lensForm=function(calcV,getFidO)
 {
  var calcFormsV,formOW,b;
  calcFormsV=Var$2.Lens(calcV,function($1)
  {
   return $1.calFormulas;
  },function($1,$2)
  {
   return Calculation.New($1.calId,$1.calName,$1.calDescription,$1.calOrder,$1.format,$1.isText,$1.isInput,$1.isBalance,$1.calDims,$2,$1.cubIdO,$1.properties);
  });
  formOW=(b=View$1.get_Do(),View$1.Bind(function(a)
  {
   var o,fid;
   return View$1.Const((o=getFidO(),o==null?null:(fid=o.$0,Unchecked.Equals(a.calId,ModelUIModule.nonCalculation().calId)?null:Seq$1.tryFind(function(f)
   {
    return Unchecked.Equals(f.forId,fid);
   },a.calFormulas))));
  },calcV.get_View()));
  return new FromView.New((Render.mapDefW(ModelUIModule.nonFormula()))(formOW),function(v)
  {
   var b$1;
   Concurrency.Start((b$1=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(View$1.GetAsync(formOW),function(a)
    {
     var x;
     return a==null?Concurrency.Zero():(x=Seq$1.tryFindIndex(function(f)
     {
      return Unchecked.Equals(f.forId,v.forId);
     },calcFormsV.Get()),(Option.iter(function(i)
     {
      calcFormsV.Set(Array.replace(i,v,calcFormsV.Get()));
     }))(x),Concurrency.Zero());
    });
   })),null);
  });
 };
 Render.currentCalcV=function()
 {
  SC$1.$cctor();
  return SC$1.currentCalcV;
 };
 Render.setCurrentCalc=function(v)
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(View$1.GetAsync(Render.currentCalcOW()),function(a)
   {
    return a==null?Concurrency.Zero():(Global$1.model().calculations.Append(v),Concurrency.Zero());
   });
  })),null);
 };
 Render.currentCalcOW=function()
 {
  SC$1.$cctor();
  return SC$1.currentCalcOW;
 };
 Render.tryFindNode=function(nid)
 {
  return function(n)
  {
   return TreeNode$1.tryFindNodeEf(nid,n);
  };
 };
 Render.iterEff=function(f,m)
 {
  Render.runEff(Eff.map(f,m));
 };
 Render.runEff=function(Ef)
 {
  return Eff$1.run(Reader.readerHandler(Render.getTreeEffReaderResource(),Ef));
 };
 Render.getTreeEffReaderResource=function()
 {
  return TreeCollection.New(Render.getParentO,Render.getPath,function(n)
  {
   return function(c)
   {
    return Render.setChildren(n,c);
   };
  });
 };
 Render.getPath=function(nid)
 {
  var m,node;
  m=Render.getParentO(nid);
  return m==null?List.T.Empty:(node=m.$0,new List.T({
   $:1,
   $0:node.nid,
   $1:Render.getPath(node.nid)
  }));
 };
 Render.getParentO=function(nid)
 {
  var res;
  res=null;
  return Render.parents().TryGetValue(nid,{
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
 };
 Render.setChildren=function(node,ch)
 {
  function toIdSet(ns)
  {
   return new FSharpSet.New(Seq$1.map(function(n)
   {
    return n.nid;
   },ns));
  }
  function f(a)
  {
   return Render.parents().Remove(a);
  }
  function g(v)
  {
  }
  Seq$1.iter(function(x)
  {
   return g(f(x));
  },FSharpSet.op_Subtraction(toIdSet(node.children),toIdSet(ch)));
  Seq$1.iter(function(chn)
  {
   Dict.add(chn.nid,node,Render.parents());
  },ch);
  return TreeNode.New(node.nid,node.expanded,node.element,Arrays.ofSeq(ch),node.weight);
 };
 Render.parents=function()
 {
  SC$1.$cctor();
  return SC$1.parents;
 };
 Render.zx=function()
 {
  SC$1.$cctor();
  return SC$1.zx;
 };
 Render.mapDefW=function(def)
 {
  function a(o)
  {
   return o==null?def:o.$0;
  }
  return function(a$1)
  {
   return View$1.Map(a,a$1);
  };
 };
 Render.scrollIntoView=function(selW,e)
 {
  View$1.Sink(function(s)
  {
   if(s)
    e.scrollIntoViewIfNeeded();
  },selW);
 };
 DragInfo.DragNone={
  $:0
 };
 DragDrop.isDragForm=function(cid,fid)
 {
  return DragDrop.getDragFormO(cid,fid)!=null;
 };
 DragDrop.getDragNIdO=function(tnId)
 {
  var $1;
  return DragDrop.drag().$==1&&(!Unchecked.Equals(DragDrop.drag().$0,tnId)&&($1=DragDrop.drag().$0,true))?{
   $:1,
   $0:$1
  }:null;
 };
 DragDrop.getDragFormO=function(cid,fid)
 {
  var $1,dfor,dcid;
  return DragDrop.drag().$==2&&((dfor=DragDrop.drag().$1,(dcid=DragDrop.drag().$0,!Unchecked.Equals(fid,dfor.forId)&&Unchecked.Equals(dcid,cid)))&&($1=[DragDrop.drag().$0,DragDrop.drag().$1],true))?{
   $:1,
   $0:$1[1]
  }:null;
 };
 DragDrop.setDragForm=function(cid,frm)
 {
  DragDrop.set_drag({
   $:2,
   $0:cid,
   $1:frm
  });
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
 TableDimensions.tableDimensions$4118$48=function(did)
 {
  return function()
  {
   (Global$1.processor())({
    $:19,
    $0:did
   });
  };
 };
 TableDimensions.tableDimensions$4117$48=function(did)
 {
  return function()
  {
   (Global$1.processor())({
    $:18,
    $0:did
   });
  };
 };
 TableDimensions.tableDimensions=function()
 {
  var b,T,x,p,i;
  return(b=(T=(x=Global$1.model().dimensions,ListModel.docLensMapView(DimensionModule.filterSort(TableDimensions.dtypes()),function(did,dimV)
  {
   var b$1,t,t$1,I,E,T$1,f,O,A,N,p$1,i$1;
   function g(s)
   {
    return Slice$1.string(s,{
     $:1,
     $0:2
    },null);
   }
   return(b$1=(t=(t$1=(I=Var$2.Lens(dimV,function($1)
   {
    return $1.dimFreeze;
   },function($1,$2)
   {
    return Dimension.New($1.dimId,$1.dimName,$1.dimPrefix,$1.dimOrder,$1.dimExclude,$2,$1.dimType,$1.defaultElm,$1.dimElements,$1.dimAttributes,$1.isCalcDim);
   }),(E=Var$2.Lens(dimV,function($1)
   {
    return $1.dimExclude;
   },function($1,$2)
   {
    return Dimension.New($1.dimId,$1.dimName,$1.dimPrefix,$1.dimOrder,$2,$1.dimFreeze,$1.dimType,$1.defaultElm,$1.dimElements,$1.dimAttributes,$1.isCalcDim);
   }),(T$1=Var$2.Lens(Var$2.Lens(dimV,function($1)
   {
    return $1.dimType;
   },function($1,$2)
   {
    return Dimension.New($1.dimId,$1.dimName,$1.dimPrefix,$1.dimOrder,$1.dimExclude,$1.dimFreeze,$2,$1.defaultElm,$1.dimElements,$1.dimAttributes,$1.isCalcDim);
   }),(f=function($1)
   {
    return function($2)
    {
     return $1(RuleEditor_GeneratedPrintf.p$5($2));
    };
   }(Global.id),function(x$1)
   {
    return g(f(x$1));
   }),function(a,s)
   {
    return s==="DataType"?DimType.DtDataType:s==="Time"?DimType.DtTime:s==="Version"?DimType.DtVersion:DimType.DtOther;
   }),(O=Var$2.Lens(dimV,function($1)
   {
    return $1.dimOrder;
   },function($1,$2)
   {
    return Dimension.New($1.dimId,$1.dimName,$1.dimPrefix,$2,$1.dimExclude,$1.dimFreeze,$1.dimType,$1.defaultElm,$1.dimElements,$1.dimAttributes,$1.isCalcDim);
   }),(A=Var$2.Lens(dimV,function($1)
   {
    return $1.dimPrefix;
   },function($1,$2)
   {
    return Dimension.New($1.dimId,$1.dimName,$2,$1.dimOrder,$1.dimExclude,$1.dimFreeze,$1.dimType,$1.defaultElm,$1.dimElements,$1.dimAttributes,$1.isCalcDim);
   }),(N=Var$2.Lens(dimV,function($1)
   {
    return $1.dimName;
   },function($1,$2)
   {
    return Dimension.New($1.dimId,$2,$1.dimPrefix,$1.dimOrder,$1.dimExclude,$1.dimFreeze,$1.dimType,$1.defaultElm,$1.dimElements,$1.dimAttributes,$1.isCalcDim);
   }),ProviderBuilder.Make().WithHole({
    $:8,
    $0:"name",
    $1:N
   })).WithHole({
    $:8,
    $0:"abbreviation",
    $1:A
   })).WithHole({
    $:8,
    $0:"order",
    $1:O
   })).WithHole({
    $:8,
    $0:"type",
    $1:T$1
   })).WithHole({
    $:9,
    $0:"excludename",
    $1:E
   })).WithHole({
    $:9,
    $0:"includefreeze",
    $1:I
   })),t$1.WithHole(Handler.EventQ2(t$1.k,"remove",function()
   {
    return t$1.i;
   },function()
   {
    (Global$1.processor())({
     $:18,
     $0:did
    });
   }))),t.WithHole(Handler.EventQ2(t.k,"select",function()
   {
    return t.i;
   },function()
   {
    (Global$1.processor())({
     $:19,
     $0:did
    });
   }))),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[["name",0],["abbreviation",0],["order",0],["type",0],["excludename",2],["includefreeze",2]]),(i$1=new TemplateInstance.New(p$1[1],RuleEditor_Templates.dimensionrow(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
  },x)),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tbody",
   $1:T
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],RuleEditor_Templates.dimensiontable(p[0])),(b.i=i,i)))).get_Doc();
 };
 TableDimensions.dtypes=function()
 {
  SC$1.$cctor();
  return SC$1.dtypes$1;
 };
 TableCalculations.tableCalculations=function()
 {
  var b,T,p,i;
  return(b=(T=Doc.Convert(function($1)
  {
   return TableCalculations.rowTreeNode($1[0],$1[1],$1[2]);
  },View$1.Map(function($1)
  {
   function m(tn,l)
   {
    return[tn.id(),TreeNode$1.ofNode(tn).element,l];
   }
   return Seq$1.map(function($2)
   {
    return m($2[0],$2[1]);
   },Render.runEff(TreeEff.listNodes(0,Seq$1.map(TreeNode$1.treenode,$1))));
  },Global$1.model().treeHierarchy.get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tbody",
   $1:T
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],RuleEditor_Templates.calculationtable(p[0])),(b.i=i,i)))).get_Doc();
 };
 TableCalculations.rowTreeNode$4195$39=function(isSelW)
 {
  return function(e)
  {
   Render.scrollIntoView(isSelW,e);
  };
 };
 TableCalculations.rowTreeNode$4193$39=function(tnId)
 {
  return function(ev)
  {
   var x;
   ev.Event.preventDefault();
   x=DragDrop.getDragNIdO(tnId);
   (Option.iter(function(fr)
   {
    (Global$1.processor())({
     $:16,
     $0:true,
     $1:fr,
     $2:tnId
    });
   }))(x);
  };
 };
 TableCalculations.rowTreeNode$4192$39=function(tnId)
 {
  return function(ev)
  {
   if(DragDrop.getDragNIdO(tnId)!=null)
    ev.Event.preventDefault();
  };
 };
 TableCalculations.rowTreeNode$4191$39=function(tnId)
 {
  return function(ev)
  {
   DragDrop.setDragNode(tnId);
   ev.Event.stopPropagation();
  };
 };
 TableCalculations.rowTreeNode$4190$39=function(nodeW)
 {
  return function()
  {
   View$1.Get(Option.iter(function(node)
   {
    (Global$1.processor())({
     $:14,
     $0:!node.expanded,
     $1:node.nid
    });
   }),nodeW);
  };
 };
 TableCalculations.rowTreeNode$4189$39=function(tnId)
 {
  return function()
  {
   (Global$1.processor())({
    $:13,
    $0:tnId
   });
  };
 };
 TableCalculations.rowTreeNode$4188$39=function(tid)
 {
  return function()
  {
   (Global$1.processor())({
    $:2,
    $0:tid
   });
  };
 };
 TableCalculations.rowTreeNode$4174$39=function(isSelW)
 {
  return function(e)
  {
   Render.scrollIntoView(isSelW,e);
  };
 };
 TableCalculations.rowTreeNode$4172$39=function(tnId)
 {
  return function(ev)
  {
   var x;
   ev.Event.preventDefault();
   x=DragDrop.getDragNIdO(tnId);
   (Option.iter(function(fr)
   {
    (Global$1.processor())({
     $:16,
     $0:true,
     $1:fr,
     $2:tnId
    });
   }))(x);
  };
 };
 TableCalculations.rowTreeNode$4171$39=function(tnId)
 {
  return function(ev)
  {
   if(DragDrop.getDragNIdO(tnId)!=null)
    ev.Event.preventDefault();
  };
 };
 TableCalculations.rowTreeNode$4170$39=function(tnId)
 {
  return function(ev)
  {
   DragDrop.setDragNode(tnId);
   ev.Event.stopPropagation();
  };
 };
 TableCalculations.rowTreeNode$4168$39=function(isSelW,tnId)
 {
  return function()
  {
   View$1.Get(function(s)
   {
    if(!s)
     (Global$1.processor())({
      $:13,
      $0:tnId
     });
   },isSelW);
  };
 };
 TableCalculations.rowTreeNode$4167$39=function(cid)
 {
  return function()
  {
   (Global$1.processor())({
    $:7,
    $0:cid
   });
  };
 };
 TableCalculations.rowTreeNode=function(tnId,nid,level)
 {
  var depth,isSelW,tid,m,totV,m$1,nodeW,markW,b,t,t$1,t$2,t$3,t$4,t$5,O,F,T,S,p,i,cid,calcV,m$2,formsDoc,b$1,t$6,t$7,t$8,t$9,t$10,C,O$1,I,I$1,F$1,C$1,S$1,p$1,i$1;
  depth=(function($1)
  {
   return function($2)
   {
    return $1(Global.String($2)+"em");
   };
  }(Global.id))(level);
  isSelW=View$1.Map(function($1)
  {
   return ModelUIModule.isNodeSelected(tnId,$1);
  },Global$1.model().selection.get_View());
  return nid.$==1?(tid=nid.$0,(m=Global$1.model().totals,ListModel.lensDef(ModelUIModule.nonTotal(),tid,m),totV=(m$1=Global$1.model().totals,ListModel.lensDef(ModelUIModule.nonTotal(),tid,m$1)),nodeW=View$1.Map(function($1)
  {
   return Render.runEff(TreeNode$1.tryFindNodeEf(tnId,$1));
  },Global$1.model().treeHierarchy.get_View()),markW=View$1.Map(function($1)
  {
   var o;
   o=$1==null?null:{
    $:1,
    $0:$1.$0.expanded?"-":"+"
   };
   return o==null?"*":o.$0;
  },nodeW),(b=(t=(t$1=(t$2=(t$3=(t$4=(t$5=(O=Var$2.Lens(totV,function($1)
  {
   return $1.totOrder;
  },function($1,$2)
  {
   return Total.New($1.totId,$1.totName,$2,$1.totFormat,$1.children);
  }),(F=Var$2.Lens(totV,function($1)
  {
   return $1.totFormat;
  },function($1,$2)
  {
   return Total.New($1.totId,$1.totName,$1.totOrder,$2,$1.children);
  }),(T=Var$2.Lens(totV,function($1)
  {
   return $1.totName;
  },function($1,$2)
  {
   return Total.New($1.totId,$2,$1.totOrder,$1.totFormat,$1.children);
  }),(S=ModelUIModule.selectedString("selected",isSelW),ProviderBuilder.Make().WithHole({
   $:2,
   $0:"selectedmark",
   $1:markW
  }).WithHole({
   $:2,
   $0:"selected",
   $1:S
  })).WithHole({
   $:1,
   $0:"indent",
   $1:depth
  }).WithHole({
   $:8,
   $0:"totname",
   $1:T
  })).WithHole({
   $:8,
   $0:"format",
   $1:F
  })).WithHole({
   $:8,
   $0:"ordertot",
   $1:O
  })),t$5.WithHole(Handler.EventQ2(t$5.k,"remove",function()
  {
   return t$5.i;
  },function()
  {
   (Global$1.processor())({
    $:2,
    $0:tid
   });
  }))),t$4.WithHole(Handler.EventQ2(t$4.k,"select",function()
  {
   return t$4.i;
  },function()
  {
   (Global$1.processor())({
    $:13,
    $0:tnId
   });
  }))),t$3.WithHole(Handler.EventQ2(t$3.k,"collapse",function()
  {
   return t$3.i;
  },function()
  {
   View$1.Get(Option.iter(function(node)
   {
    (Global$1.processor())({
     $:14,
     $0:!node.expanded,
     $1:node.nid
    });
   }),nodeW);
  }))),t$2.WithHole(Handler.EventQ2(t$2.k,"drag",function()
  {
   return t$2.i;
  },function(ev)
  {
   DragDrop.setDragNode(tnId);
   ev.Event.stopPropagation();
  }))),t$1.WithHole(Handler.EventQ2(t$1.k,"dragover",function()
  {
   return t$1.i;
  },function(ev)
  {
   if(DragDrop.getDragNIdO(tnId)!=null)
    ev.Event.preventDefault();
  }))),t.WithHole(Handler.EventQ2(t.k,"drop",function()
  {
   return t.i;
  },function(ev)
  {
   var x;
   ev.Event.preventDefault();
   x=DragDrop.getDragNIdO(tnId);
   (Option.iter(function(fr)
   {
    (Global$1.processor())({
     $:16,
     $0:true,
     $1:fr,
     $2:tnId
    });
   }))(x);
  }))).WithHole({
   $:7,
   $0:"afterrender",
   $1:function(e)
   {
    Render.scrollIntoView(isSelW,e);
   }
  }),(p=Handler.CompleteHoles(b.k,b.h,[["totname",0],["ordertot",0],["format",0]]),(i=new TemplateInstance.New(p[1],RuleEditor_Templates.totalrow(p[0])),(b.i=i,i)))).get_Doc())):(cid=nid.$0,(calcV=(m$2=Global$1.model().calculations,ListModel.lensDef(ModelUIModule.nonCalculation(),cid,m$2)),(formsDoc=Doc.Convert(function(f)
  {
   return TableCalculations.rowFormula(tnId,calcV,f);
  },View$1.Map(function($1)
  {
   return Seq$1.map(function(f)
   {
    return f.forId;
   },$1.calFormulas);
  },calcV.get_View())),(b$1=(t$6=(t$7=(t$8=(t$9=(t$10=(C=Render.calcTypeV(calcV),(O$1=Var$2.Lens(calcV,function($1)
  {
   return $1.calOrder;
  },function($1,$2)
  {
   return Calculation.New($1.calId,$1.calName,$1.calDescription,$2,$1.format,$1.isText,$1.isInput,$1.isBalance,$1.calDims,$1.calFormulas,$1.cubIdO,$1.properties);
  }),(I=Var$2.Lens(calcV,function($1)
  {
   return $1.isBalance;
  },function($1,$2)
  {
   return Calculation.New($1.calId,$1.calName,$1.calDescription,$1.calOrder,$1.format,$1.isText,$1.isInput,$2,$1.calDims,$1.calFormulas,$1.cubIdO,$1.properties);
  }),(I$1=Var$2.Lens(calcV,function($1)
  {
   return $1.isText;
  },function($1,$2)
  {
   return Calculation.New($1.calId,$1.calName,$1.calDescription,$1.calOrder,$1.format,$2,$1.isInput,$1.isBalance,$1.calDims,$1.calFormulas,$1.cubIdO,$1.properties);
  }),(F$1=Var$2.Lens(calcV,function($1)
  {
   return $1.format;
  },function($1,$2)
  {
   return Calculation.New($1.calId,$1.calName,$1.calDescription,$1.calOrder,$2,$1.isText,$1.isInput,$1.isBalance,$1.calDims,$1.calFormulas,$1.cubIdO,$1.properties);
  }),(C$1=Var$2.Lens(calcV,function($1)
  {
   return $1.calName;
  },function($1,$2)
  {
   return Calculation.New($1.calId,$2,$1.calDescription,$1.calOrder,$1.format,$1.isText,$1.isInput,$1.isBalance,$1.calDims,$1.calFormulas,$1.cubIdO,$1.properties);
  }),(S$1=ModelUIModule.selectedString("selected",isSelW),ProviderBuilder.Make().WithHole({
   $:1,
   $0:"selectedmark",
   $1:""
  }).WithHole({
   $:2,
   $0:"selected",
   $1:S$1
  })).WithHole({
   $:1,
   $0:"indent",
   $1:depth
  }).WithHole({
   $:8,
   $0:"calcname",
   $1:C$1
  })).WithHole({
   $:8,
   $0:"format",
   $1:F$1
  })).WithHole({
   $:9,
   $0:"istext",
   $1:I$1
  })).WithHole({
   $:9,
   $0:"isbalance",
   $1:I
  })).WithHole({
   $:8,
   $0:"ordercalc",
   $1:O$1
  })).WithHole({
   $:8,
   $0:"calctype",
   $1:C
  })),t$10.WithHole(Handler.EventQ2(t$10.k,"remove",function()
  {
   return t$10.i;
  },function()
  {
   (Global$1.processor())({
    $:7,
    $0:cid
   });
  }))),t$9.WithHole(Handler.EventQ2(t$9.k,"select",function()
  {
   return t$9.i;
  },function()
  {
   View$1.Get(function(s)
   {
    if(!s)
     (Global$1.processor())({
      $:13,
      $0:tnId
     });
   },isSelW);
  }))).WithHole({
   $:0,
   $0:"formulas",
   $1:formsDoc
  }),t$8.WithHole(Handler.EventQ2(t$8.k,"drag",function()
  {
   return t$8.i;
  },function(ev)
  {
   DragDrop.setDragNode(tnId);
   ev.Event.stopPropagation();
  }))),t$7.WithHole(Handler.EventQ2(t$7.k,"dragover",function()
  {
   return t$7.i;
  },function(ev)
  {
   if(DragDrop.getDragNIdO(tnId)!=null)
    ev.Event.preventDefault();
  }))),t$6.WithHole(Handler.EventQ2(t$6.k,"drop",function()
  {
   return t$6.i;
  },function(ev)
  {
   var x;
   ev.Event.preventDefault();
   x=DragDrop.getDragNIdO(tnId);
   (Option.iter(function(fr)
   {
    (Global$1.processor())({
     $:16,
     $0:true,
     $1:fr,
     $2:tnId
    });
   }))(x);
  }))).WithHole({
   $:7,
   $0:"afterrender",
   $1:function(e)
   {
    Render.scrollIntoView(isSelW,e);
   }
  }),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[["calcname",0],["calctype",0],["ordercalc",0],["format",0],["istext",2],["isbalance",2]]),(i$1=new TemplateInstance.New(p$1[1],RuleEditor_Templates.calculationrow(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc())));
 };
 TableCalculations.rowFormula$4149$35=function(selFormW)
 {
  return function(e)
  {
   Render.scrollIntoView(selFormW,e);
  };
 };
 TableCalculations.rowFormula$4147$35=function(cid,fid,formsV)
 {
  return function(ev)
  {
   var i,f,e;
   function getId(f$1)
   {
    return f$1.forId;
   }
   function g(v)
   {
    formsV.Set(v);
   }
   ev.Event.preventDefault();
   i=DragDrop.getDragFormO(cid,fid);
   (Option.iter((f=(e=formsV.Get(),function(i$1)
   {
    var s,g$1,x,p;
    function g$2(y)
    {
     return Unchecked.Equals(fid,y);
    }
    return Arrays.ofSeq(Seq$1.collect(Global.id,(s=Arrays.ofSeq(Seq$1.filter((g$1=(x=getId(i$1),function(y)
    {
     return!Unchecked.Equals(x,y);
    }),function(x$1)
    {
     return g$1(getId(x$1));
    }),e)),(p=Arrays.splitAt(Arrays.findIndex(function(x$1)
    {
     return g$2(getId(x$1));
    },s),s),List.ofArray([p[0],[i$1],p[1]])))));
   }),function(x)
   {
    return g(f(x));
   })))(i);
  };
 };
 TableCalculations.rowFormula$4146$35=function(cid,fid)
 {
  return function(ev)
  {
   if(DragDrop.isDragForm(cid,fid))
    ev.Event.preventDefault();
  };
 };
 TableCalculations.rowFormula$4145$35=function(cid,formV)
 {
  return function(ev)
  {
   DragDrop.setDragForm(cid,formV.Get());
   ev.Event.stopPropagation();
  };
 };
 TableCalculations.rowFormula$4144$35=function(fid,tnId)
 {
  return function()
  {
   (Global$1.processor())({
    $:12,
    $0:fid,
    $1:tnId
   });
  };
 };
 TableCalculations.rowFormula$4143$35=function(fid)
 {
  return function()
  {
   (Global$1.processor())({
    $:10,
    $0:fid
   });
  };
 };
 TableCalculations.rowFormula=function(tnId,calcV,fid)
 {
  var cid,formsV,formV,selFormW,formForW,b,t,t$1,t$2,t$3,t$4,F,F$1,S,S$1,p,i;
  cid=calcV.Get().calId;
  formsV=Var$2.Lens(calcV,function($1)
  {
   return $1.calFormulas;
  },function($1,$2)
  {
   return Calculation.New($1.calId,$1.calName,$1.calDescription,$1.calOrder,$1.format,$1.isText,$1.isInput,$1.isBalance,$1.calDims,$2,$1.cubIdO,$1.properties);
  });
  formV=Render.lensForm(calcV,function()
  {
   return{
    $:1,
    $0:fid
   };
  });
  selFormW=View$1.Map(function($1)
  {
   return ModelUIModule.isNodeFormSelected(fid,tnId,$1);
  },Global$1.model().selection.get_View());
  formForW=View$1.Map2(function($1,$2)
  {
   return Strings.concat(", ",Seq$1.map(function(f)
   {
    var a;
    return(((Runtime.Curried3(function($3,$4,$5)
    {
     return $3(Utils.toSafe($4)+":"+Utils.toSafe($5));
    }))(Global.id))((a=Seq$1.tryFind(function(d)
    {
     return Unchecked.Equals(d.dimId,f.K);
    },$2),a!=null&&a.$==1?a.$0.dimName:"")))(f.V);
   },$1.forDestDecl));
  },formV.get_View(),Global$1.model().dimensions.v);
  return(b=(t=(t$1=(t$2=(t$3=(t$4=(F=Render.formTypeV(formV),(F$1=Var$2.Lens(formV,function($1)
  {
   return $1.forText;
  },function($1,$2)
  {
   return Formula.New($1.forId,$1.forDestDecl,$1.forDestination,$1.forDescription,$2,$1.forExpression,$1.forType,$1.forOrder);
  }),(S=ModelUIModule.selectedString("selected",selFormW),(S$1=ModelUIModule.selectedString(">",selFormW),ProviderBuilder.Make().WithHole({
   $:2,
   $0:"selectedmark",
   $1:S$1
  })).WithHole({
   $:2,
   $0:"selected",
   $1:S
  })).WithHole({
   $:2,
   $0:"formulafor",
   $1:formForW
  }).WithHole({
   $:8,
   $0:"formula",
   $1:F$1
  })).WithHole({
   $:8,
   $0:"formtype",
   $1:F
  })),t$4.WithHole(Handler.EventQ2(t$4.k,"remove",function()
  {
   return t$4.i;
  },function()
  {
   (Global$1.processor())({
    $:10,
    $0:fid
   });
  }))),t$3.WithHole(Handler.EventQ2(t$3.k,"select",function()
  {
   return t$3.i;
  },function()
  {
   (Global$1.processor())({
    $:12,
    $0:fid,
    $1:tnId
   });
  }))),t$2.WithHole(Handler.EventQ2(t$2.k,"drag",function()
  {
   return t$2.i;
  },function(ev)
  {
   DragDrop.setDragForm(cid,formV.Get());
   ev.Event.stopPropagation();
  }))),t$1.WithHole(Handler.EventQ2(t$1.k,"dragover",function()
  {
   return t$1.i;
  },function(ev)
  {
   if(DragDrop.isDragForm(cid,fid))
    ev.Event.preventDefault();
  }))),t.WithHole(Handler.EventQ2(t.k,"drop",function()
  {
   return t.i;
  },function(ev)
  {
   var i$1,f,e;
   function getId(f$1)
   {
    return f$1.forId;
   }
   function g(v)
   {
    formsV.Set(v);
   }
   ev.Event.preventDefault();
   i$1=DragDrop.getDragFormO(cid,fid);
   (Option.iter((f=(e=formsV.Get(),function(i$2)
   {
    var s,g$1,x,p$1;
    function g$2(y)
    {
     return Unchecked.Equals(fid,y);
    }
    return Arrays.ofSeq(Seq$1.collect(Global.id,(s=Arrays.ofSeq(Seq$1.filter((g$1=(x=getId(i$2),function(y)
    {
     return!Unchecked.Equals(x,y);
    }),function(x$1)
    {
     return g$1(getId(x$1));
    }),e)),(p$1=Arrays.splitAt(Arrays.findIndex(function(x$1)
    {
     return g$2(getId(x$1));
    },s),s),List.ofArray([p$1[0],[i$2],p$1[1]])))));
   }),function(x)
   {
    return g(f(x));
   })))(i$1);
  }))).WithHole({
   $:7,
   $0:"afterrender",
   $1:function(e)
   {
    Render.scrollIntoView(selFormW,e);
   }
  }),(p=Handler.CompleteHoles(b.k,b.h,[["formtype",0],["formula",0]]),(i=new TemplateInstance.New(p[1],RuleEditor_Templates.formularow(p[0])),(b.i=i,i)))).get_Doc();
 };
 MainProgram.mainProgram=function()
 {
  var l,m,a,o,v,b;
  AppFramework.addPlugIn(PlugIn.New("RuleEditor",[AppFramework.newVar("fileName",Global$1.model().fileName),AppFramework.newVar("CodeFS",Global$1.model().codeFS),AppFramework.newVar("Output",Global$1.model().outputMsgs),AppFramework.newVar("Parser",Global$1.model().parserMsgs),AppFramework.newVar("Server",Global$1.model().server),AppFramework.newVar("GlobalDefs",Global$1.model().globalDefs)],[],[AppFramework.newDoc("globalDefs",Lazy.Create(RuleEditor.globalDefs)),AppFramework.newDoc("Dimensions",Lazy.Create(TableDimensions.tableDimensions)),AppFramework.newDoc("Calculations",Lazy.Create(TableCalculations.tableCalculations)),AppFramework.newDoc("details",Lazy.Create(RuleEditor.details)),AppFramework.newDoc("dimsSelected",Lazy.Create(RuleEditor.dimsSelected))],[AppFramework.newAct("IndentIn",function()
  {
   var x,o$1;
   x=(o$1=Global$1.model().selection.Get(),o$1==null?null:{
    $:1,
    $0:o$1.$0[0]
   });
   (Option.iter(function(nid)
   {
    (Global$1.processor())({
     $:15,
     $0:true,
     $1:nid
    });
   }))(x);
  }),AppFramework.newAct("IndentOut",function()
  {
   var x,o$1;
   x=(o$1=Global$1.model().selection.Get(),o$1==null?null:{
    $:1,
    $0:o$1.$0[0]
   });
   (Option.iter(function(nid)
   {
    (Global$1.processor())({
     $:15,
     $0:false,
     $1:nid
    });
   }))(x);
  }),AppFramework.newActF("LoadFile",{
   $:1,
   $0:function(o$1)
   {
    (Global$1.processor())({
     $:27,
     $0:o$1
    });
   },
   $1:"FileElement"
  }),AppFramework.newActF("SaveAs",{
   $:1,
   $0:function(o$1)
   {
    (Global$1.processor())({
     $:26,
     $0:o$1
    });
   },
   $1:"FileElement"
  }),AppFramework.newAct("AddCalculation",function()
  {
   (Global$1.processor())(MsgModel.AddCalculation);
  }),AppFramework.newAct("AddTotal",function()
  {
   (Global$1.processor())(MsgModel.AddTotal);
  }),AppFramework.newAct("AddDimension",function()
  {
   (Global$1.processor())(MsgModel.AddDimension);
  })],[]));
  LayoutEngineModule.addLayout((l=(m=self.document.getElementById("GlobalLayout"),Unchecked.Equals(m,null)?"\r\n                    menuEditor       horizontal  65       menuLogo                  editorMessages\r\n                    double           horizontal  0-50-100 AppFramework.AppFwkClient menuEditor\r\n                    menuLogo         vertical    350      logo                      menu\r\n                    logo             span       \"margin:0; color:gray; font-size: 55px; font-weight:530\" \"F# Station\"\r\n                    editorMessages   horizontal 10-83-100 editorButtons             messages\r\n                    messages         vertical   0-50-100  messagesLeft              messagesRight\r\n                    editorButtons    vertical -200 snippetsSnippet buttons\r\n                    buttons div      \"overflow: hidden; display: grid; grid-template-columns: 100%; grid-template-rows: repeat(15, calc(100% / 15)); bxackground-color: #eee; box-sizing: border-box; padding : 5px; grid-gap: 5px; margin-right: 21px\" btnSaveAs none x btnAddSnippet btnDeleteSnippet btnIndentIn btnIndentOut none x btnRunFS none x btnAbortFsi\r\n                    snippetsSnippet  vertical   0-20-100  snippets                  editorProperties\r\n                    snippets         horizontal 20        \"${FSharpStation.CurrentPath}\" FSharpStation.Snippets\r\n                    editorProperties vertical   0-100-100 snippet                   properties\r\n                    properties       div        \"\"        FSharpStation.Properties\r\n                    snippet          horizontal 35        Name                      FSharpStation.editor\r\n                    menu             span  \"\" btnLoad btnImport\r\n        \r\n                    btnSaveAs        button FSharpStation.SaveAs         \"class=btn ${FSharpStation.SaveNeeded}\" \"Save as...    \"\r\n                    btnAddDimension  button RuleEditor.AddDimension      \"\"                  \"Add Dimension \"\r\n                    btnDeleteSnippet button FSharpStation.RemoveSnippet  \"\"                  \"Delete Snippet\"\r\n                    btnIndentIn      button FSharpStation.IndentIn       \"\"                  \"Indent In  >> \"\r\n                    btnIndentOut     button FSharpStation.IndentOut      \"\"                  \"Indent Out << \"\r\n                    btnRunFS         button FSharpStation.RunFS          \"\"                  \"Run F#        \"\r\n                    btnAbortFsi      button FSharpStation.AbortFsi       \"\"                  \"Abort Fsi     \"\r\n        \r\n                    messagesLeft     wcomp-tabstrip                      \"\"                  Output FsCode\r\n                    messagesRight    wcomp-tabstrip                      \"\"                  Parser\r\n        \r\n                    Output           textarea  FSharpStation.Output      \"tabname=Output ; placeholder=Output messages ; spellcheck=false\" \r\n                    FsCode           textarea  FSharpStation.FsCode      \"tabname=F# Code; placeholder=F# Code         ; spellcheck=false\" \r\n                    Parser           textarea  FSharpStation.Parser      \"tabname=Parser ; placeholder=Parser messages; dblclick=${FSharpStation.JumpTo} ; spellcheck=false\" \r\n                    Name             Doc       InputLabel                \"\"     \"Name:\"        FSharpStation.SnippetName\r\n                    btnLoad          Doc       InputFile                 \"\"     \"Load File...\" FSharpStation.LoadFile  FileName\r\n                    btnImport        Doc       InputFile                 \"\"     \"Import...\"    FSharpStation.Import    \"\"\r\n                    FileName         div                                 \"class=form-control\"  FSharpStation.fileName\r\n                   ":m.textContent),LayoutEngineModule.newLyt(MainProgram.RuleEditorLyt(),l)));
  a=(o=null,(v=MainProgram.RuleEditorLyt(),o==null?v:o.$0));
  AppFramework.mainDocV().Set(a);
  return Doc.Async((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Return(AppFramework.getMainDoc().f());
  })));
 };
 MainProgram.scrollToBottom=function(e,a)
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(100),function()
   {
    e.scrollTop=e.scrollHeight;
    return Concurrency.Zero();
   });
  })),null);
 };
 MainProgram.RuleEditorLyt=function()
 {
  SC$1.$cctor();
  return SC$1.RuleEditorLyt;
 };
 UpdateModelUI.updateModel=function(model,msg)
 {
  if(UpdateModelUI.updateModelR(model,msg))
   (ModelUIModule.refreshNow())();
 };
 UpdateModelUI.updateModelR=function(model,msg)
 {
  var n,nn,n$1,nn$1,cid,n$2,x,o,o$1,x$1,n$3,tid,x$2,cid$1,o$2,x$3,fid,x$4,nid,ex,nid$1,indent,b,fid$1,o$3,o$4,did,s,did$1,did$2,n$4,x$5;
  function doForCalc(cid$2,f)
  {
   var x$6;
   x$6=model.calculations.TryFindByKey(cid$2);
   return(Option.iter(f))(x$6);
  }
  function setSelection(sel)
  {
   return Unchecked.Equals(model.selection.Get(),sel)?false:(model.selection.Set(sel),true);
  }
  function tryFindCalcForm(fid$2)
  {
   return Seq$1.tryFind(function(calc)
   {
    return Seq$1.exists(function(f)
    {
     return Unchecked.Equals(f.forId,fid$2);
    },calc.calFormulas);
   },model.calculations["var"].Get());
  }
  function mapper(finished,node)
  {
   var p;
   return finished?[node,true]:Unchecked.Equals(node.nid,nid)?[TreeNode.New(node.nid,ex,node.element,node.children,node.weight),true]:(p=Seq$1.mapFold(mapper,false,node.children),[TreeNode.New(node.nid,node.expanded,node.element,Arrays.ofSeq(p[0]),node.weight),p[1]]);
  }
  function m(n$5)
  {
   return[n$5.nid,null];
  }
  function m$1(n$5)
  {
   return[n$5.nid,null];
  }
  function m$2(n$5)
  {
   return[n$5.nid,{
    $:1,
    $0:fid$1
   }];
  }
  return msg.$==3?(n=CalculationModule.New(),(model.calculations.Append(n),nn=TreeNode$1.newNodeCalc(n.calId),model.treeHierarchy.Set([nn].concat(model.treeHierarchy.Get())),UpdateModelUI.updateModelR(model,{
   $:13,
   $0:nn.nid
  }))):msg.$==0?(n$1=TotalModule.New(),(model.totals.Append(n$1),nn$1=TreeNode$1.newNodeTot(n$1.totId),model.treeHierarchy.Set([nn$1].concat(model.treeHierarchy.Get())),UpdateModelUI.updateModelR(model,{
   $:13,
   $0:nn$1.nid
  }))):msg.$==9?(cid=msg.$0,Unchecked.Equals(cid,ModelUIModule.nonCalculation().calId)?false:(n$2=Formula.New(new ForId({
   $:0,
   $0:Guid.NewGuid()
  }),new FSharpMap.New([]),List.T.Empty,"","",ExpressionAny.ExiStet,ForType.ForBase,""),(x=model.calculations.TryFindByKey(cid),(Option.iter(function(calc)
  {
   model.calculations.Append(Calculation.New(calc.calId,calc.calName,calc.calDescription,calc.calOrder,calc.format,calc.isText,calc.isInput,calc.isBalance,calc.calDims,calc.calFormulas.concat([n$2]),calc.cubIdO,calc.properties));
  }))(x),o=(o$1=Render.runEff((x$1=model.treeHierarchy.Get(),TreeNode$1.tryFindSelNodeEf(model.selection.Get(),x$1))),o$1==null?null:{
   $:1,
   $0:UpdateModelUI.updateModelR(model,{
    $:12,
    $0:n$2.forId,
    $1:o$1.$0.nid
   })
  }),o==null||o.$0))):msg.$==17?(n$3=DimensionModule.New(""),(model.dimensions.Append(n$3),UpdateModelUI.updateModelR(model,{
   $:19,
   $0:n$3.dimId
  }))):msg.$==2?(tid=msg.$0,(model.totals.RemoveByKey(tid),setSelection(null),ModelUIModule.setHierarchy(model,Render.runEff((x$2=model.treeHierarchy.Get(),TreeNode$1.removeNodesEf(TreeNode$1.forTId(function(y)
  {
   return Unchecked.Equals(tid,y);
  }),x$2)))),true)):msg.$==7?(cid$1=msg.$0,(setSelection(null),model.calculations.RemoveByKey(cid$1),Seq$1.iter((o$2=model.totals,function(a)
  {
   o$2.Append(a);
  }),Seq$1.choose(function(t)
  {
   var p;
   function p$1(a,nid$2)
   {
    return Unchecked.Equals(nid$2,{
     $:0,
     $0:cid$1
    });
   }
   p=Arrays.partition(function($1)
   {
    return p$1($1[0],$1[1]);
   },t.children);
   return Arrays.length(p[0])===0?null:{
    $:1,
    $0:Total.New(t.totId,t.totName,t.totOrder,t.totFormat,p[1])
   };
  },model.totals["var"].Get())),ModelUIModule.setHierarchy(model,Render.runEff((x$3=model.treeHierarchy.Get(),TreeNode$1.removeNodesEf(TreeNode$1.forCId(function(y)
  {
   return Unchecked.Equals(cid$1,y);
  }),x$3)))),true)):msg.$==10?(fid=msg.$0,(x$4=tryFindCalcForm(fid),(Option.iter(function(calc)
  {
   model.calculations.Append(Calculation.New(calc.calId,calc.calName,calc.calDescription,calc.calOrder,calc.format,calc.isText,calc.isInput,calc.isBalance,calc.calDims,Arrays.filter(function(f)
   {
    return!Unchecked.Equals(f.forId,fid);
   },calc.calFormulas),calc.cubIdO,calc.properties));
  }))(x$4),true)):msg.$==18?(model.dimensions.RemoveByKey(msg.$0),true):msg.$==13?setSelection({
   $:1,
   $0:[msg.$0,null]
  }):msg.$==14?(nid=msg.$1,(ex=msg.$0,(model.treeHierarchy.Set(Arrays.ofSeq((Seq$1.mapFold(mapper,false,model.treeHierarchy.Get()))[0])),true))):msg.$==15?(nid$1=msg.$1,(indent=msg.$0?function(n$5)
  {
   return function(n$6)
   {
    return TreeEff.indentNode(n$5,n$6);
   };
  }:function(n$5)
  {
   return function(n$6)
   {
    return TreeEff.outdentNode(n$5,n$6);
   };
  },(Render.iterEff(Global.ignore,(b=Eff.eff(),b.Delay(function()
  {
   return b.Bind(TreeNode$1.tryFindNodeEf(nid$1,model.treeHierarchy.Get()),function(a)
   {
    var a$1;
    return a!=null&&a.$==1?b.Bind((a$1=Seq$1.map(TreeNode$1.treenode,model.treeHierarchy.Get()),(indent(TreeNode$1.treenode(a.$0)))(a$1)),function(a$2)
    {
     ModelUIModule.setHierarchy(model,Seq$1.map(TreeNode$1.ofNode,a$2));
     return b.Zero();
    }):b.Zero();
   });
  }))),true))):msg.$==16?(Render.iterEff(Global.ignore,Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(TreeEff.moveToSibling2(msg.$0,msg.$1,msg.$2,Seq$1.map(TreeNode$1.treenode,model.treeHierarchy.Get())),function(s$1)
  {
   return Seq$1.map(TreeNode$1.ofNode,s$1);
  }),function(n$5)
  {
   ModelUIModule.setHierarchy(model,n$5);
  })),true):msg.$==12?setSelection({
   $:1,
   $0:[msg.$1,{
    $:1,
    $0:msg.$0
   }]
  }):msg.$==1?Render.runEff(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(TreeNode$1.tryFindNodeTIdEf(msg.$0,model.treeHierarchy.Get()),function(o$5)
  {
   return o$5==null?null:{
    $:1,
    $0:m(o$5.$0)
   };
  }),setSelection)):msg.$==8?Render.runEff(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(TreeNode$1.tryFindNodeCIdEf(msg.$0,model.treeHierarchy.Get()),function(o$5)
  {
   return o$5==null?null:{
    $:1,
    $0:m$1(o$5.$0)
   };
  }),setSelection)):msg.$==11?(fid$1=msg.$0,Render.runEff(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Operators$2.op_BarGreaterGreater(Eff.insertO((o$3=(o$4=tryFindCalcForm(fid$1),o$4==null?null:{
   $:1,
   $0:o$4.$0.calId
  }),o$3==null?null:{
   $:1,
   $0:TreeNode$1.tryFindNodeCIdEf(o$3.$0,model.treeHierarchy.Get())
  })),function(o$5)
  {
   return o$5==null?null:Global.id(o$5.$0);
  }),function(o$5)
  {
   return o$5==null?null:{
    $:1,
    $0:m$2(o$5.$0)
   };
  }),setSelection))):msg.$==19?(did=msg.$0,(s=Unchecked.Equals(did,new DimId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  }))?null:{
   $:1,
   $0:did
  },Unchecked.Equals(s,model.selectedDim.Get())?false:(model.selectedDim.Set(s),true))):msg.$==23?(did$1=msg.$1,(doForCalc(msg.$0,function(c)
  {
   model.calculations.Append(Calculation.New(c.calId,c.calName,c.calDescription,c.calOrder,c.format,c.isText,c.isInput,c.isBalance,c.calDims.Add(did$1),c.calFormulas,c.cubIdO,c.properties));
  }),false)):msg.$==22?(did$2=msg.$1,(doForCalc(msg.$0,function(c)
  {
   model.calculations.Append(Calculation.New(c.calId,c.calName,c.calDescription,c.calOrder,c.format,c.isText,c.isInput,c.isBalance,c.calDims.Remove(did$2),c.calFormulas,c.cubIdO,c.properties));
  }),false)):msg.$==6?(model.cubes.Append(CubeModule.newCubeCalc(msg.$0,Arrays.ofSeq(msg.$1),null)),false):msg.$==4?(model.cubes.RemoveByKey(msg.$0),false):msg.$==5?(n$4=msg.$1,(x$5=model.cubes.TryFindByKey(msg.$0),(Option.iter(function(c)
  {
   model.cubes.Append(Cube.New(c.cubId,n$4,c.cubRules,c.cubRuleXmls,c.cubDims,c.measureDim,c.cubType));
  }))(x$5),false)):((function($1)
  {
   return function($2)
   {
    return $1("Msg not implemented: "+RuleEditor_GeneratedPrintf.p$6($2));
   };
  }(function(s$1)
  {
   console.log(s$1);
  }))(msg),false);
 };
 RuleEditor.globalDefs=function()
 {
  return Monaco.render(Monaco$1.monacoNew(Global$1.model().globalDefs,null,null,null));
 };
 RuleEditor.dimsSelected=function()
 {
  var destV,cubeBaseNameW,b,currCubeOW,cubePlaceholderW,cubeNameW,b$1,T,x,C,p,i;
  destV=Var$2.Lens(Render.currentFormV(),function($1)
  {
   return $1.forDestDecl;
  },function($1,$2)
  {
   return Formula.New($1.forId,$2,$1.forDestination,$1.forDescription,$1.forText,$1.forExpression,$1.forType,$1.forOrder);
  });
  cubeBaseNameW=(b=View$1.get_Do(),View$1.Bind(function(a)
  {
   return View$1.Bind(function(a$1)
   {
    var dimPrxs,dimIds;
    dimPrxs=Arrays.ofSeq(Seq$1.map(function(d)
    {
     return[d.dimId,d.dimExclude?"":d.dimPrefix];
    },(DimensionModule.filterSort(Render.dtypes()))(a$1)));
    dimIds=Arrays.map(function(t)
    {
     return t[0];
    },dimPrxs);
    return View$1.Bind(function(a$2)
    {
     var cubeDims;
     cubeDims=Arrays.ofSeq(Seq$1.map(function(c)
     {
      return[new FSharpSet.New(Arrays.filter(function(b$2)
      {
       return Arrays.contains(b$2,dimIds);
      },c.cubDims)),c];
     },Seq$1.filter(function(c)
     {
      return c.cubType.$===1;
     },a$2)));
     return View$1.Bind(function(a$3)
     {
      var currDims,currCubeO,o;
      function f(t)
      {
       return t[0];
      }
      function g(y)
      {
       return Unchecked.Equals(currDims,y);
      }
      function c(did,pr)
      {
       return currDims.Contains(did)?{
        $:1,
        $0:pr
       }:null;
      }
      currDims=a$3.calDims;
      currCubeO=(o=Seq$1.tryFind(function(x$1)
      {
       return g(f(x$1));
      },cubeDims),o==null?null:{
       $:1,
       $0:o.$0[1]
      });
      return View$1.Const([currCubeO,currCubeO!=null?"":a+Strings.concat("",Seq$1.choose(function($1)
      {
       return c($1[0],$1[1]);
      },dimPrxs))]);
     },Render.currentCalcV().get_View());
    },Global$1.model().cubes.v);
   },Global$1.model().dimensions.v);
  },Global$1.model().cubePrefix.get_View()));
  currCubeOW=View$1.Map(function(t)
  {
   return t[0];
  },cubeBaseNameW);
  cubePlaceholderW=View$1.Map(function(t)
  {
   return t[1];
  },cubeBaseNameW);
  cubeNameW=View$1.Map(function(a)
  {
   return a!=null&&a.$==1?a.$0.cubName:"";
  },currCubeOW);
  return(b$1=(T=(x=Global$1.model().dimensions,ListModel.docLensMapView(DimensionModule.filterSort(Render.dtypes()),function(did,dimV)
  {
   var destW,b$2,dimCheckW,visibFor,b$3,D,D$1,D$2,p$1,i$1;
   destW=(b$2=View$1.get_Do(),View$1.Bind(function(a)
   {
    var m;
    m=a.forDestDecl.TryFind(did);
    return m==null?View$1.Const(""):View$1.Const(m.$0);
   },Render.currentFormV().get_View()));
   dimCheckW=View$1.Map(function($1)
   {
    return Seq$1.contains(did,$1.calDims);
   },Render.currentCalcV().get_View());
   visibFor=View$1.Map2(function($1,$2)
   {
    return!Unchecked.Equals($1.forId,ModelUIModule.nonFormula().forId)&&$2?"":"Hidden";
   },Render.currentFormV().get_View(),dimCheckW);
   return(b$3=(D=new FromView.New(destW,function(v)
   {
    var t;
    t=Strings.Trim(v);
    Unchecked.Equals(Render.currentFormV().Get().forId,ModelUIModule.nonFormula().forId)?void 0:destV.Set(t===""?destV.Get().Remove(did):destV.Get().Add(did,t));
   }),(D$1=new FromView.New(dimCheckW,function(v)
   {
    var x$1;
    x$1=v?{
     $:23,
     $0:Render.currentCalcV().Get().calId,
     $1:did
    }:{
     $:22,
     $0:Render.currentCalcV().Get().calId,
     $1:did
    };
    (Global$1.processor())(x$1);
   }),(D$2=View$1.Map(function($1)
   {
    return $1.dimName;
   },dimV.get_View()),ProviderBuilder.Make().WithHole({
    $:2,
    $0:"dimension",
    $1:D$2
   })).WithHole({
    $:9,
    $0:"dimensioncheck",
    $1:D$1
   })).WithHole({
    $:8,
    $0:"destination",
    $1:D
   })).WithHole({
    $:2,
    $0:"hidden",
    $1:visibFor
   }),(p$1=Handler.CompleteHoles(b$3.k,b$3.h,[["dimensioncheck",2],["destination",0]]),(i$1=new TemplateInstance.New(p$1[1],RuleEditor_Templates.dimselectedrow(p$1[0])),(b$3.i=i$1,i$1)))).get_Doc();
  },x)),(C=new FromView.New(cubeNameW,function(n)
  {
   var b$2;
   Concurrency.Start((b$2=null,Concurrency.Delay(function()
   {
    var nm;
    nm=Strings.Trim(n);
    return Concurrency.Bind(View$1.GetAsync(currCubeOW),function(a)
    {
     var x$1;
     x$1=a==null?nm===""?MsgModel.NoOp:{
      $:6,
      $0:nm,
      $1:Render.currentCalcV().Get().calDims
     }:nm===""?{
      $:4,
      $0:a.$0.cubId
     }:{
      $:5,
      $0:a.$0.cubId,
      $1:nm
     };
     (Global$1.processor())(x$1);
     return Concurrency.Zero();
    });
   })),null);
  }),ProviderBuilder.Make().WithHole({
   $:8,
   $0:"cubename",
   $1:C
  })).WithHole({
   $:2,
   $0:"possiblecubename",
   $1:cubePlaceholderW
  }).WithHole({
   $:0,
   $0:"tbody",
   $1:T
  })),(p=Handler.CompleteHoles(b$1.k,b$1.h,[["cubename",0]]),(i=new TemplateInstance.New(p[1],RuleEditor_Templates.dimsselected(p[0])),(b$1.i=i,i)))).get_Doc();
 };
 RuleEditor.details$4247$30=function()
 {
  return function()
  {
   var x,g;
   function f(a)
   {
    return{
     $:9,
     $0:a
    };
   }
   x=View$1.Map(function($1)
   {
    return $1.calId;
   },Render.currentCalcV().get_View());
   View$1.Get((g=Global$1.processor(),function(x$1)
   {
    return g(f(x$1));
   }),x);
  };
 };
 RuleEditor.details=function()
 {
  var getAnnot,v,prior,editor,b,t,D,D$1,D$2,D$3,D$4,D$5,D$6,D$7,D$8,F,C,I,I$1,F$1,C$1,p,i;
  function noCalcAttr()
  {
   var view;
   view=View$1.Const("");
   return AttrModule.DynamicPred("disabled",View$1.Map(function($1)
   {
    return Unchecked.Equals($1.calId,ModelUIModule.nonCalculation().calId);
   },Render.currentCalcV().get_View()),view);
  }
  function noFormAttr()
  {
   var view;
   view=View$1.Const("");
   return AttrModule.DynamicPred("disabled",View$1.Map(function($1)
   {
    return Unchecked.Equals($1.forId,ModelUIModule.nonFormula().forId);
   },Render.currentFormV().get_View()),view);
  }
  function showToolTips(txt,line,col)
  {
   return View$1.Get(function(frm)
   {
    ParseFS.showToolTips({
     $:3,
     $0:frm.forId
    },txt,line,col);
   },Render.currentFormV().get_View());
  }
  function getHints(f,txt,line,col)
  {
   return View$1.Get(function(frm)
   {
    ParseFS.getHints({
     $:3,
     $0:frm.forId
    },function($1,$2,$3)
    {
     return((f($1))($2))($3);
    },txt,line,col);
   },Render.currentFormV().get_View());
  }
  getAnnot=(v=View$1.Map2(function($1,$2)
  {
   return ParseFS.filterFormula($2,$1==null?null:$1.$0[1]);
  },Global$1.model().selection.get_View(),Global$1.model().parserMsgs.get_View()),(prior=[Var$2.Create$1(null)],(View$1.Sink(function(v$1)
  {
   if(!Unchecked.Equals(prior[0].Get(),v$1))
    prior[0].Set(v$1);
  },v),prior[0].get_View())));
  editor=Monaco.render(Monaco$1.monacoNew(Var$2.Lens(Render.currentFormV(),function($1)
  {
   return $1.forText;
  },function($1,$2)
  {
   return Formula.New($1.forId,$1.forDestDecl,$1.forDestination,$1.forDescription,$2,$1.forExpression,$1.forType,$1.forOrder);
  }),{
   $:1,
   $0:getAnnot
  },{
   $:1,
   $0:Runtime.Curried3(showToolTips)
  },{
   $:1,
   $0:Runtime.Curried(getHints,4)
  }));
  return(b=(t=(D=noFormAttr(),(D$1=noFormAttr(),(D$2=noCalcAttr(),(D$3=noCalcAttr(),(D$4=noCalcAttr(),(D$5=noCalcAttr(),(D$6=noCalcAttr(),(D$7=noCalcAttr(),(D$8=noCalcAttr(),(F=Render.formTypeV(Render.currentFormV()),(C=Render.calcTypeV(Render.currentCalcV()),(I=Var$2.Lens(Render.currentCalcV(),function($1)
  {
   return $1.isBalance;
  },function($1,$2)
  {
   return Calculation.New($1.calId,$1.calName,$1.calDescription,$1.calOrder,$1.format,$1.isText,$1.isInput,$2,$1.calDims,$1.calFormulas,$1.cubIdO,$1.properties);
  }),(I$1=Var$2.Lens(Render.currentCalcV(),function($1)
  {
   return $1.isText;
  },function($1,$2)
  {
   return Calculation.New($1.calId,$1.calName,$1.calDescription,$1.calOrder,$1.format,$2,$1.isInput,$1.isBalance,$1.calDims,$1.calFormulas,$1.cubIdO,$1.properties);
  }),(F$1=Var$2.Lens(Render.currentCalcV(),function($1)
  {
   return $1.format;
  },function($1,$2)
  {
   return Calculation.New($1.calId,$1.calName,$1.calDescription,$1.calOrder,$2,$1.isText,$1.isInput,$1.isBalance,$1.calDims,$1.calFormulas,$1.cubIdO,$1.properties);
  }),(C$1=Var$2.Lens(Render.currentCalcV(),function($1)
  {
   return $1.calName;
  },function($1,$2)
  {
   return Calculation.New($1.calId,$2,$1.calDescription,$1.calOrder,$1.format,$1.isText,$1.isInput,$1.isBalance,$1.calDims,$1.calFormulas,$1.cubIdO,$1.properties);
  }),ProviderBuilder.Make().WithHole({
   $:8,
   $0:"calcname",
   $1:C$1
  })).WithHole({
   $:8,
   $0:"format",
   $1:F$1
  })).WithHole({
   $:9,
   $0:"istext",
   $1:I$1
  })).WithHole({
   $:9,
   $0:"isbalance",
   $1:I
  })).WithHole({
   $:8,
   $0:"calctype",
   $1:C
  })).WithHole({
   $:8,
   $0:"formtype",
   $1:F
  })).WithHole({
   $:0,
   $0:"formula",
   $1:editor
  }).WithHole({
   $:3,
   $0:"disablecalc1",
   $1:D$8
  })).WithHole({
   $:3,
   $0:"disablecalc2",
   $1:D$7
  })).WithHole({
   $:3,
   $0:"disablecalc3",
   $1:D$6
  })).WithHole({
   $:3,
   $0:"disablecalc4",
   $1:D$5
  })).WithHole({
   $:3,
   $0:"disablecalc5",
   $1:D$4
  })).WithHole({
   $:3,
   $0:"disablecalc6",
   $1:D$3
  })).WithHole({
   $:3,
   $0:"disablecalc7",
   $1:D$2
  })).WithHole({
   $:3,
   $0:"disableform1",
   $1:D$1
  })).WithHole({
   $:3,
   $0:"disableform2",
   $1:D
  })),t.WithHole(Handler.EventQ2(t.k,"addformula",function()
  {
   return t.i;
  },function()
  {
   var x,g;
   function f(a)
   {
    return{
     $:9,
     $0:a
    };
   }
   x=View$1.Map(function($1)
   {
    return $1.calId;
   },Render.currentCalcV().get_View());
   View$1.Get((g=Global$1.processor(),function(x$1)
   {
    return g(f(x$1));
   }),x);
  }))),(p=Handler.CompleteHoles(b.k,b.h,[["calcname",0],["format",0],["calctype",0],["formtype",0],["istext",2],["isbalance",2],["alsoactual",2]]),(i=new TemplateInstance.New(p[1],RuleEditor_Templates.formuladetail(p[0])),(b.i=i,i)))).get_Doc();
 };
 SC$1.$cctor=function()
 {
  var f,b,i,i$1,i$2,refresh,$1,parseFsCodeD,x,x$1,x$2,x$3,x$4,b$1;
  SC$1.$cctor=Global.ignore;
  SC$1.rtn=function(v)
  {
   return[v];
  };
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.fusion=new Builder$2.New();
  SC$1.eff=new EffBuilder.New();
  SC$1.fusion$1=new Builder$4.New();
  SC$1.resultM=new Builder$5.New();
  SC$1.asyncResult=new AsyncResultBuilder.New();
  SC$1.asyncResultP=new AsyncResultBuilderP.New();
  SC$1.asyncResultM=new AsyncResultMBuilder.New();
  function g(s)
  {
   return Strings.concat("\n",s);
  }
  SC$1.unindentStr=function(x$5)
  {
   return g(String.unindent$1(x$5));
  };
  function f$1(s)
  {
   return String.splitByChar$1("\n",s);
  }
  function g$1(s)
  {
   var a,b$2;
   return Slice$1.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a=0,(b$2=Arrays.length(s)-2,Unchecked.Compare(a,b$2)===1?a:b$2))
   });
  }
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
  SC$1.skipLastLine=(f=function(x$5)
  {
   return g$1(f$1(x$5));
  },function(x$5)
  {
   return g$2(f(x$5));
  });
  SC$1.parseDateO=ParseO.tryParseWith$1(function(a)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];
  });
  SC$1.parseIntO=ParseO.tryParseWith$1(function(a)
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
  SC$1.parseSingleO=ParseO.tryParseWith$1(function(a)
  {
   var o,$2;
   o=0;
   return[($2=Global.Number(a),Global.isNaN($2)?false:(o=$2,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith$1(function(a)
  {
   var o,$2;
   o=0;
   return[($2=Global.Number(a),Global.isNaN($2)?false:(o=$2,true)),o];
  });
  SC$1.parseGuidO=ParseO.tryParseWith$1(function(a)
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
  SC$1["|Date|_|"]=ParseO.parseDateO$1();
  SC$1["|Int|_|"]=ParseO.parseIntO$1();
  SC$1["|Single|_|"]=ParseO.parseSingleO$1();
  SC$1["|Double|_|"]=ParseO.parseDoubleO$1();
  SC$1["|Guid|_|"]=ParseO.parseGuidO$1();
  SC$1.counter=1;
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$1.observers=List.T.Empty;
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
  SC$1.MessageBrokerId="<MessageBroker>";
  SC$1.MessageBrokerAddress=new Address({
   $:0,
   $0:WebSockets.MessageBrokerId()
  });
  SC$1.rootdir="..\\website";
  SC$1.TemplatesFileName="..\\website"+"\\Templates.html";
  ((function($2)
  {
   return function($3)
   {
    return $2(Utils.toSafe($3));
   };
  }(function(s)
  {
   console.log(s);
  }))("..\\website\\Templates.html"));
  SC$1.Xmodel=Model$1.New(new ModId({
   $:0,
   $0:Guid.NewGuid()
  }),"local\\Budget","Actual",[],[],[]);
  SC$1.forAll=Slice.New(new FSharpMap.New([]),null,null);
  SC$1.getDimO=function(d)
  {
   return function(m)
   {
    return Model0.getDimO(d,m);
   };
  };
  SC$1.getDimR=function(d)
  {
   return function(m)
   {
    return Model0.getDimR(d,m);
   };
  };
  SC$1.getCubeO=function(c)
  {
   return function(m)
   {
    return Model0.getCubeO(c,m);
   };
  };
  SC$1.cubePrefix="Z";
  SC$1.measurePrefix="M";
  SC$1.annotationsV=Var$2.Create$1("Err (1, 7) - (1, 12): \"This shows over there as an error\".\nWarn (2, 7) - (2, 12): \"This shows over there as a warning\".\nInfo (3, 7) - (3, 12): \"This shows over there as information\".\nHint (4, 7) - (4, 12): \"This shows over there as a hint\".");
  SC$1.nonTotal=(i=TotalModule.New(),Total.New(new TotId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  }),i.totName,i.totOrder,i.totFormat,i.children));
  SC$1.nonCalculation=(i$1=CalculationModule.New(),Calculation.New(new CalId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  }),i$1.calName,i$1.calDescription,i$1.calOrder,i$1.format,i$1.isText,i$1.isInput,i$1.isBalance,i$1.calDims,i$1.calFormulas,i$1.cubIdO,i$1.properties));
  SC$1.nonFormula=(i$2=Formula.New(new ForId({
   $:0,
   $0:Guid.NewGuid()
  }),new FSharpMap.New([]),List.T.Empty,"","",ExpressionAny.ExiStet,ForType.ForBase,""),Formula.New(new ForId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  }),i$2.forDestDecl,i$2.forDestination,i$2.forDescription,i$2.forText,i$2.forExpression,i$2.forType,i$2.forOrder));
  SC$1.nonTotalV=Var$2.Lens(Var$2.Create$1(ModelUIModule.nonFormula()),Global.id,Global.id);
  SC$1.nonCalculationV=Var$2.Lens(Var$2.Create$1(ModelUIModule.nonCalculation()),Global.id,Global.id);
  SC$1.nonFormulaV=Var$2.Lens(Var$2.Create$1(ModelUIModule.nonFormula()),Global.id,Global.id);
  $1=(refresh=Var$2.Create$1(),[refresh.get_View(),function()
  {
   refresh.Set(null);
  }]);
  SC$1.refreshView=$1[0];
  SC$1.refreshNow=$1[1];
  SC$1.model=ModelUI.New(Var$2.Create$1([]),ListModel$1.Create(function(v)
  {
   return v.calId;
  },[]),ListModel$1.Create(function(v)
  {
   return v.totId;
  },[]),ListModel$1.Create(function(v)
  {
   return v.dimId;
  },[]),ListModel$1.Create(function(v)
  {
   return v.cubId;
  },[]),Var$2.Create$1(""),Var$2.Create$1(""),Var$2.Create$1(null),Var$2.Create$1(null),Var$2.Create$1(null),ListModel$1.Create(Global.id,[]),Var$2.Create$1("Z"),Var$2.Create$1("M"),Var$2.Create$1(""),Var$2.Create$1(""),Var$2.Create$1(""),Var$2.Create$1("NewFile.json"),Var$2.Create$1(VersionModule.New()));
  SC$1.processor=Global.ignore;
  SC$1.trace=Global.id;
  SC$1.fsCodeVO={
   $:1,
   $0:FSCode.fsCode()
  };
  SC$1.parseFile="RuleEditor.fsx";
  parseFsCodeD=Library.delayed$1(1000,function()
  {
   var b$2;
   function g$3(v)
   {
    Library.print$1(v);
   }
   AsyncResult.iterA(function(x$5)
   {
    return g$3(ResultMessage.summarized(x$5));
   },Global.ignore,(b$2=Monads.asyncResult(),b$2.Run(b$2.Delay(function()
   {
    var $2;
    Global$1.model().parserMsgs.Set("Parsing...\n"+String.skipFirstLine$1(Global$1.model().parserMsgs.Get()));
    return($2=FSCode.fsCodeVO(),$2!=null&&$2.$==1)?Extensions["AsyncResultBuilder.Bind"](b$2,View$1.GetAsync(FSCode.fsCodeVO().$0),function(a)
    {
     var locs,fs;
     locs=a[1];
     fs=a[0];
     return b$2.Bind$1(Calls.parseCode(ParseFS.parseFile(),Strings.SplitChars(fs,["\n"],0),true,0),function(a$1)
     {
      var res;
      res=Strings.concat("\n",ParseFS.adaptErrors(locs,a$1[0]));
      Global$1.model().codeFS.Set(fs);
      Global$1.model().parserMsgs.Set("Parsed!\n"+res);
      return b$2.Zero();
     });
    }):b$2.Zero();
   }))));
  });
  x=FSCode.fsCodeVO();
  (Option.iter(function(a)
  {
   View$1.Sink(parseFsCodeD,a);
  }))(x);
  SC$1.sForId=Seq$1.head(String.splitByChar$1(" ",(x$1=new ForId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  }),(function($2)
  {
   return function($3)
   {
    return $2(RuleEditor_GeneratedPrintf.p($3));
   };
  }(Global.id))(x$1))));
  SC$1.sCalId=Seq$1.head(String.splitByChar$1(" ",(x$2=new CalId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  }),(function($2)
  {
   return function($3)
   {
    return $2(RuleEditor_GeneratedPrintf.p$1($3));
   };
  }(Global.id))(x$2))));
  SC$1.sTotId=Seq$1.head(String.splitByChar$1(" ",(x$3=new TotId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  }),(function($2)
  {
   return function($3)
   {
    return $2(RuleEditor_GeneratedPrintf.p$2($3));
   };
  }(Global.id))(x$3))));
  SC$1.sDimId=Seq$1.head(String.splitByChar$1(" ",(x$4=new DimId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  }),(function($2)
  {
   return function($3)
   {
    return $2(RuleEditor_GeneratedPrintf.p$3($3));
   };
  }(Global.id))(x$4))));
  SC$1.rexGlobal="(Global)  \\(";
  SC$1.rexTotId="\\\"\\. ("+ParseFS.sTotId()+") "+"\""+LibraryJS.rexGuid$1();
  SC$1.rexCalcId="\\\"\\. ("+ParseFS.sCalId()+") "+"\""+LibraryJS.rexGuid$1();
  SC$1.rexFormId="\\\"\\. ("+ParseFS.sForId()+") "+"\""+LibraryJS.rexGuid$1();
  SC$1.rexDimId="\\\"\\. ("+ParseFS.sDimId()+") "+"\""+LibraryJS.rexGuid$1();
  SC$1.rexFormula="\\((\\d+)\\,\\s*(\\d+)\\) - \\((\\d+)\\,\\s*(\\d+)\\)\\: \"([^\"]+?)\"\\. ForId "+"\""+LibraryJS.rexGuid$1();
  SC$1.zx=TreeNode.New({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  },false,{
   $:0,
   $0:new CalId({
    $:0,
    $0:"00000000-0000-0000-0000-000000000000"
   })
  },[],Weight.Add);
  SC$1.parents=new Dictionary.New$5();
  SC$1.currentCalcOW=(b$1=View$1.get_Do(),View$1.Bind(function(a)
  {
   return View$1.Bind(function(a$1)
   {
    return View$1.Bind(function(a$2)
    {
     var o,o$1,m,cid;
     return View$1.Const((o=(o$1=Render.runEff(TreeNode$1.tryFindSelNodeEf(a$1,a)),o$1==null?null:(m=o$1.$0.element,m.$==0?{
      $:1,
      $0:m.$0
     }:null)),o==null?null:(cid=o.$0,Seq$1.tryFind(function(c)
     {
      return Unchecked.Equals(c.calId,cid);
     },a$2))));
    },Global$1.model().calculations.v);
   },Global$1.model().selection.get_View());
  },Global$1.model().treeHierarchy.get_View()));
  SC$1.currentCalcV=new FromView.New((Render.mapDefW(ModelUIModule.nonCalculation()))(Render.currentCalcOW()),function(v)
  {
   Render.setCurrentCalc(v);
  });
  SC$1.currentFormV=Render.lensForm(Render.currentCalcV(),function()
  {
   var o;
   o=Global$1.model().selection.Get();
   return o==null?null:o.$0[1];
  });
  SC$1.dtypes=List.ofArray([DimType.DtDataType,DimType.DtTime,DimType.DtVersion,DimType.DtOther]);
  SC$1.drag=DragInfo.DragNone;
  SC$1.dtypes$1=List.ofArray([DimType.DtDataType,DimType.DtTime,DimType.DtVersion,DimType.DtOther]);
  SC$1.RuleEditorLyt="RuleEditorLyt";
  Global$1.set_processor(function(m)
  {
   UpdateModelUI.updateModel(Global$1.model(),m);
  });
 };
 RuleEditor_GeneratedPrintf.p$1=function($1)
 {
  return"CalId "+Utils.prettyPrint($1.$0);
 };
 RuleEditor_GeneratedPrintf.p=function($1)
 {
  return"ForId "+Utils.prettyPrint($1.$0);
 };
 RuleEditor_GeneratedPrintf.p$4=function($1)
 {
  return $1.$==2?"ForAll":$1.$==1?"ForConsolidated":"ForBase";
 };
 RuleEditor_GeneratedPrintf.p$5=function($1)
 {
  return $1.$==6?"DtOther":$1.$==5?"DtMeasure":$1.$==4?"DtCalc":$1.$==3?"DtTCalc":$1.$==2?"DtVersion":$1.$==1?"DtTime":"DtDataType";
 };
 RuleEditor_Templates.dimensiontable=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"dimensiontable"
  },h):void 0;
 };
 RuleEditor_Templates.dimensionrow=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"dimensionrow"
  },h):void 0;
 };
 RuleEditor_Templates.calculationtable=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"calculationtable"
  },h):void 0;
 };
 RuleEditor_Templates.calculationrow=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"calculationrow"
  },h):void 0;
 };
 RuleEditor_Templates.totalrow=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"totalrow"
  },h):void 0;
 };
 RuleEditor_Templates.formularow=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"formularow"
  },h):void 0;
 };
 RuleEditor_GeneratedPrintf.p$6=function($1)
 {
  return $1.$==28?"NoOp":$1.$==27?"LoadTextFile "+Utils.prettyPrint($1.$0):$1.$==26?"SaveTextFile "+Utils.prettyPrint($1.$0):$1.$==25?"SetForDest ("+RuleEditor_GeneratedPrintf.p$1($1.$0)+", "+RuleEditor_GeneratedPrintf.p($1.$1)+", "+RuleEditor_GeneratedPrintf.p$3($1.$2)+", "+Utils.prettyPrint($1.$3)+")":$1.$==24?"RemoveForDest ("+RuleEditor_GeneratedPrintf.p$1($1.$0)+", "+RuleEditor_GeneratedPrintf.p($1.$1)+", "+RuleEditor_GeneratedPrintf.p$3($1.$2)+")":$1.$==23?"AddCalcDim ("+RuleEditor_GeneratedPrintf.p$1($1.$0)+", "+RuleEditor_GeneratedPrintf.p$3($1.$1)+")":$1.$==22?"RemoveCalcDim ("+RuleEditor_GeneratedPrintf.p$1($1.$0)+", "+RuleEditor_GeneratedPrintf.p$3($1.$1)+")":$1.$==21?"RemoveFormDim ("+RuleEditor_GeneratedPrintf.p($1.$0)+", "+RuleEditor_GeneratedPrintf.p$3($1.$1)+")":$1.$==20?"AddFormDim ("+RuleEditor_GeneratedPrintf.p($1.$0)+", "+RuleEditor_GeneratedPrintf.p$3($1.$1)+", "+Utils.prettyPrint($1.$2)+")":$1.$==19?"SelectDimension "+RuleEditor_GeneratedPrintf.p$3($1.$0):$1.$==18?"RemoveDimension "+RuleEditor_GeneratedPrintf.p$3($1.$0):$1.$==17?"AddDimension":$1.$==16?"MoveNode ("+Utils.prettyPrint($1.$0)+", "+RuleEditor_GeneratedPrintf.p$8($1.$1)+", "+RuleEditor_GeneratedPrintf.p$8($1.$2)+")":$1.$==15?"IndentNode ("+Utils.prettyPrint($1.$0)+", "+RuleEditor_GeneratedPrintf.p$8($1.$1)+")":$1.$==14?"ExpandNode ("+Utils.prettyPrint($1.$0)+", "+RuleEditor_GeneratedPrintf.p$8($1.$1)+")":$1.$==13?"SelectNode "+RuleEditor_GeneratedPrintf.p$8($1.$0):$1.$==12?"SelectFormNode ("+RuleEditor_GeneratedPrintf.p($1.$0)+", "+RuleEditor_GeneratedPrintf.p$8($1.$1)+")":$1.$==11?"SelectFormula "+RuleEditor_GeneratedPrintf.p($1.$0):$1.$==10?"RemoveFormula "+RuleEditor_GeneratedPrintf.p($1.$0):$1.$==9?"AddFormula "+RuleEditor_GeneratedPrintf.p$1($1.$0):$1.$==8?"SelectCalculation "+RuleEditor_GeneratedPrintf.p$1($1.$0):$1.$==7?"RemoveCalculation "+RuleEditor_GeneratedPrintf.p$1($1.$0):$1.$==6?"AddCube ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":$1.$==5?"RenameCube ("+RuleEditor_GeneratedPrintf.p$7($1.$0)+", "+Utils.prettyPrint($1.$1)+")":$1.$==4?"RemoveCube "+RuleEditor_GeneratedPrintf.p$7($1.$0):$1.$==3?"AddCalculation":$1.$==2?"RemoveTotal "+RuleEditor_GeneratedPrintf.p$2($1.$0):$1.$==1?"SelectTotal "+RuleEditor_GeneratedPrintf.p$2($1.$0):"AddTotal";
 };
 RuleEditor_GeneratedPrintf.p$8=function($1)
 {
  return"TreeNodeId "+Utils.prettyPrint($1.$0);
 };
 RuleEditor_GeneratedPrintf.p$7=function($1)
 {
  return"CubId "+Utils.prettyPrint($1.$0);
 };
 RuleEditor_Templates.dimsselected=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"dimsselected"
  },h):void 0;
 };
 RuleEditor_Templates.dimselectedrow=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"dimselectedrow"
  },h):void 0;
 };
 RuleEditor_Templates.formuladetail=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"formuladetail"
  },h):void 0;
 };
 RuleEditor_GeneratedPrintf.p$2=function($1)
 {
  return"TotId "+Utils.prettyPrint($1.$0);
 };
 RuleEditor_GeneratedPrintf.p$3=function($1)
 {
  return"DimId "+Utils.prettyPrint($1.$0);
 };
}());

//# sourceMappingURL=RuleEditor.map
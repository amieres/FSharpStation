(function()
{
 "use strict";
 var Global,FsRoot,Library,ResultMessage,ResultMessageHelpers,Monads,Seq,Option,Async,WebSharper,Obj,Result,Builder,Operators,FusionM,Operators$1,Builder$1,Builder$2,FusionAsyncM,Operators$2,Builder$3,Builder$4,ParseO,MailboxProcessorExt,Mailbox,StateFull,LibraryJS,View,Var,ListModel,Library2,WebSockets,Address,BrokerRequest,MessageType,BrokerMessage,Replier,MessageGeneric,CalculationModel,CalculationModel$1,DimType,CubeType,AttType,ElmType,ModId,AttId,ElmId,CubId,DimId,CalId,TotId,ForId,RulId,Attribute,Element,Dimension,UnaryOp,Operator,ExpressionText,ExpressionNumber,ExpressionAny,Slice,ForType,Formula,Calculation,Total,RuleKey,Cube,Rule,RuleMsg,Model,HelperTypeN,HelperTypeT,HelperTypeA,Model0,ElementModule,ElmReferenceModule,SliceModule,DimensionModule,CubeModule,CalculationModule,TotalModule,ModelModule,FormulaModule,RuleModule,AttributeModule,RuleEditor,Templating,TreeNodeId,Version,VersionModule,ModelUI,MsgModel,ModelUIModule,Global$1,TableDimensions,MainProgram,UpdateModelUI,SC$1,RuleEditor_Templates,RuleEditor_GeneratedPrintf,IntelliFactory,Runtime,Utils,Strings,Seq$1,List,Arrays,Concurrency,Enumerator,Result$1,Operators$3,Unchecked,Control,MailboxProcessor,console,UI,View$1,Var$1,FromView,Doc,System,Guid,Collections,FSharpMap,FSharpSet,Set,Slice$1,Map,Date,Var$2,Templating$1,Runtime$1,Server,ProviderBuilder,Handler,TemplateInstance,AppFramework,PlugIn,Lazy,LayoutEngineModule,MatchFailureException,DateUtil,Numeric,ListModel$1,Client,Templates;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
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
 FusionAsyncM=Monads.FusionAsyncM=Monads.FusionAsyncM||{};
 Operators$2=FusionAsyncM.Operators=FusionAsyncM.Operators||{};
 Builder$3=FusionAsyncM.Builder=FusionAsyncM.Builder||{};
 Builder$4=Builder$3.Builder=Builder$3.Builder||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 MailboxProcessorExt=Library.MailboxProcessorExt=Library.MailboxProcessorExt||{};
 Mailbox=Library.Mailbox=Library.Mailbox||{};
 StateFull=Mailbox.StateFull=Mailbox.StateFull||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 View=LibraryJS.View=LibraryJS.View||{};
 Var=LibraryJS.Var=LibraryJS.Var||{};
 ListModel=LibraryJS.ListModel=LibraryJS.ListModel||{};
 Library2=FsRoot.Library2=FsRoot.Library2||{};
 WebSockets=Library2.WebSockets=Library2.WebSockets||{};
 Address=WebSockets.Address=WebSockets.Address||{};
 BrokerRequest=WebSockets.BrokerRequest=WebSockets.BrokerRequest||{};
 MessageType=WebSockets.MessageType=WebSockets.MessageType||{};
 BrokerMessage=WebSockets.BrokerMessage=WebSockets.BrokerMessage||{};
 Replier=WebSockets.Replier=WebSockets.Replier||{};
 MessageGeneric=WebSockets.MessageGeneric=WebSockets.MessageGeneric||{};
 CalculationModel=FsRoot.CalculationModel=FsRoot.CalculationModel||{};
 CalculationModel$1=CalculationModel.CalculationModel=CalculationModel.CalculationModel||{};
 DimType=CalculationModel$1.DimType=CalculationModel$1.DimType||{};
 CubeType=CalculationModel$1.CubeType=CalculationModel$1.CubeType||{};
 AttType=CalculationModel$1.AttType=CalculationModel$1.AttType||{};
 ElmType=CalculationModel$1.ElmType=CalculationModel$1.ElmType||{};
 ModId=CalculationModel$1.ModId=CalculationModel$1.ModId||{};
 AttId=CalculationModel$1.AttId=CalculationModel$1.AttId||{};
 ElmId=CalculationModel$1.ElmId=CalculationModel$1.ElmId||{};
 CubId=CalculationModel$1.CubId=CalculationModel$1.CubId||{};
 DimId=CalculationModel$1.DimId=CalculationModel$1.DimId||{};
 CalId=CalculationModel$1.CalId=CalculationModel$1.CalId||{};
 TotId=CalculationModel$1.TotId=CalculationModel$1.TotId||{};
 ForId=CalculationModel$1.ForId=CalculationModel$1.ForId||{};
 RulId=CalculationModel$1.RulId=CalculationModel$1.RulId||{};
 Attribute=CalculationModel$1.Attribute=CalculationModel$1.Attribute||{};
 Element=CalculationModel$1.Element=CalculationModel$1.Element||{};
 Dimension=CalculationModel$1.Dimension=CalculationModel$1.Dimension||{};
 UnaryOp=CalculationModel$1.UnaryOp=CalculationModel$1.UnaryOp||{};
 Operator=CalculationModel$1.Operator=CalculationModel$1.Operator||{};
 ExpressionText=CalculationModel$1.ExpressionText=CalculationModel$1.ExpressionText||{};
 ExpressionNumber=CalculationModel$1.ExpressionNumber=CalculationModel$1.ExpressionNumber||{};
 ExpressionAny=CalculationModel$1.ExpressionAny=CalculationModel$1.ExpressionAny||{};
 Slice=CalculationModel$1.Slice=CalculationModel$1.Slice||{};
 ForType=CalculationModel$1.ForType=CalculationModel$1.ForType||{};
 Formula=CalculationModel$1.Formula=CalculationModel$1.Formula||{};
 Calculation=CalculationModel$1.Calculation=CalculationModel$1.Calculation||{};
 Total=CalculationModel$1.Total=CalculationModel$1.Total||{};
 RuleKey=CalculationModel$1.RuleKey=CalculationModel$1.RuleKey||{};
 Cube=CalculationModel$1.Cube=CalculationModel$1.Cube||{};
 Rule=CalculationModel$1.Rule=CalculationModel$1.Rule||{};
 RuleMsg=CalculationModel$1.RuleMsg=CalculationModel$1.RuleMsg||{};
 Model=CalculationModel$1.Model=CalculationModel$1.Model||{};
 HelperTypeN=CalculationModel$1.HelperTypeN=CalculationModel$1.HelperTypeN||{};
 HelperTypeT=CalculationModel$1.HelperTypeT=CalculationModel$1.HelperTypeT||{};
 HelperTypeA=CalculationModel$1.HelperTypeA=CalculationModel$1.HelperTypeA||{};
 Model0=CalculationModel$1.Model0=CalculationModel$1.Model0||{};
 ElementModule=CalculationModel$1.ElementModule=CalculationModel$1.ElementModule||{};
 ElmReferenceModule=CalculationModel$1.ElmReferenceModule=CalculationModel$1.ElmReferenceModule||{};
 SliceModule=CalculationModel$1.SliceModule=CalculationModel$1.SliceModule||{};
 DimensionModule=CalculationModel$1.DimensionModule=CalculationModel$1.DimensionModule||{};
 CubeModule=CalculationModel$1.CubeModule=CalculationModel$1.CubeModule||{};
 CalculationModule=CalculationModel$1.CalculationModule=CalculationModel$1.CalculationModule||{};
 TotalModule=CalculationModel$1.TotalModule=CalculationModel$1.TotalModule||{};
 ModelModule=CalculationModel$1.ModelModule=CalculationModel$1.ModelModule||{};
 FormulaModule=CalculationModel$1.FormulaModule=CalculationModel$1.FormulaModule||{};
 RuleModule=CalculationModel$1.RuleModule=CalculationModel$1.RuleModule||{};
 AttributeModule=CalculationModel$1.AttributeModule=CalculationModel$1.AttributeModule||{};
 RuleEditor=FsRoot.RuleEditor=FsRoot.RuleEditor||{};
 Templating=RuleEditor.Templating=RuleEditor.Templating||{};
 TreeNodeId=RuleEditor.TreeNodeId=RuleEditor.TreeNodeId||{};
 Version=RuleEditor.Version=RuleEditor.Version||{};
 VersionModule=RuleEditor.VersionModule=RuleEditor.VersionModule||{};
 ModelUI=RuleEditor.ModelUI=RuleEditor.ModelUI||{};
 MsgModel=RuleEditor.MsgModel=RuleEditor.MsgModel||{};
 ModelUIModule=RuleEditor.ModelUIModule=RuleEditor.ModelUIModule||{};
 Global$1=RuleEditor.Global=RuleEditor.Global||{};
 TableDimensions=RuleEditor.TableDimensions=RuleEditor.TableDimensions||{};
 MainProgram=RuleEditor.MainProgram=RuleEditor.MainProgram||{};
 UpdateModelUI=RuleEditor.UpdateModelUI=RuleEditor.UpdateModelUI||{};
 SC$1=Global.StartupCode$RuleEditor$RuleEditor=Global.StartupCode$RuleEditor$RuleEditor||{};
 RuleEditor_Templates=Global.RuleEditor_Templates=Global.RuleEditor_Templates||{};
 RuleEditor_GeneratedPrintf=Global.RuleEditor_GeneratedPrintf=Global.RuleEditor_GeneratedPrintf||{};
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
 Control=WebSharper&&WebSharper.Control;
 MailboxProcessor=Control&&Control.MailboxProcessor;
 console=Global.console;
 UI=WebSharper&&WebSharper.UI;
 View$1=UI&&UI.View;
 Var$1=UI&&UI.Var;
 FromView=UI&&UI.FromView;
 Doc=UI&&UI.Doc;
 System=Global.System;
 Guid=System&&System.Guid;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpMap=Collections&&Collections.FSharpMap;
 FSharpSet=Collections&&Collections.FSharpSet;
 Set=Collections&&Collections.Set;
 Slice$1=WebSharper&&WebSharper.Slice;
 Map=Collections&&Collections.Map;
 Date=Global.Date;
 Var$2=UI&&UI.Var$1;
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
 MatchFailureException=WebSharper&&WebSharper.MatchFailureException;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 ListModel$1=UI&&UI.ListModel;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
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
   return Operators$3.FailWith(Global.String(x));
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
 ModId=CalculationModel$1.ModId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,ModId);
 AttId=CalculationModel$1.AttId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,AttId);
 ElmId=CalculationModel$1.ElmId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,ElmId);
 CubId=CalculationModel$1.CubId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,CubId);
 DimId=CalculationModel$1.DimId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,DimId);
 CalId=CalculationModel$1.CalId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,CalId);
 TotId=CalculationModel$1.TotId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,TotId);
 ForId=CalculationModel$1.ForId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,ForId);
 RulId=CalculationModel$1.RulId=Runtime.Class({
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
 Model.New=function(modId,server,actualElem,modDims,modCubes,modCalculations)
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
   $0:CalculationModel$1.calcSlice(a)
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
   $0:CalculationModel$1.calcSlice(a)
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
  return Slice.New(CalculationModel$1.Map_adds(List.map(function(e)
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
  return(CalculationModel$1.ofOptF(function()
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
  return Slice.New(CalculationModel$1.Map_adds(List.map(function(e)
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
  return CalculationModel$1.calcSlice(calc);
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
  },calNoCube)))),Model.New(modelN.modId,modelN.server,modelN.actualElem,modelN.modDims,modelN.modCubes,Arrays.map(function(oldC)
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
  return Model.New(model.modId,model.server,model.actualElem,model.modDims.concat([mDim]),model.modCubes.concat([CubeModule.newCubeCalc(ModelModule.cubePrefix()+name,orderedDimIds,{
   $:1,
   $0:mDim.dimId
  })]),model.modCalculations);
 };
 ModelModule.fixForDimensions=function(model)
 {
  return Model.New(model.modId,model.server,model.actualElem,model.modDims,model.modCubes,Arrays.map(function(cal)
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
  return Model.New(model.modId,model.server,model.actualElem,model.modDims,Arrays.map(function(cub)
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
  return Model.New(mdl.modId,mdl.server,mdl.actualElem,mdl.modDims,mdl.modCubes,Arrays.map(function(cal)
  {
   return Unchecked.Equals(cal.calId,cid)?CalculationModule.addFormula(frm,cal):cal;
  },mdl.modCalculations));
 };
 ModelModule.addCube=function(cube,mdl)
 {
  return Model.New(mdl.modId,mdl.server,mdl.actualElem,mdl.modDims,mdl.modCubes.concat([cube]),mdl.modCalculations);
 };
 ModelModule.addDim=function(dim,mdl)
 {
  return Model.New(mdl.modId,mdl.server,mdl.actualElem,mdl.modDims.concat([dim]),mdl.modCubes,mdl.modCalculations);
 };
 ModelModule.addCalc=function(calc,mdl)
 {
  return Model.New(mdl.modId,mdl.server,mdl.actualElem,mdl.modDims,mdl.modCubes,mdl.modCalculations.concat([calc]));
 };
 ModelModule.addForms=function(fs,mdl)
 {
  return Model.New(mdl.modId,mdl.server,mdl.actualElem,mdl.modDims,mdl.modCubes,Arrays.map(function(cal)
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
  return Model.New(mdl.modId,mdl.server,mdl.actualElem,mdl.modDims,ModelModule.mergeBy(function(c)
  {
   return c.cubId;
  },cs,mdl.modCubes),mdl.modCalculations);
 };
 ModelModule.addDims=function(ds,mdl)
 {
  return Model.New(mdl.modId,mdl.server,mdl.actualElem,ModelModule.mergeBy(function(c)
  {
   return c.dimId;
  },ds,mdl.modDims),mdl.modCubes,mdl.modCalculations);
 };
 ModelModule.addCalcs=function(cs,mdl)
 {
  return Model.New(mdl.modId,mdl.server,mdl.actualElem,mdl.modDims,mdl.modCubes,ModelModule.mergeBy(function(c)
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
 CalculationModel$1.ofOptS=function(s)
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
 CalculationModel$1.ofOptF=function(f)
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
 CalculationModel$1.calcSlice=function(calc)
 {
  return Slice.New(new FSharpMap.New([]),{
   $:1,
   $0:calc.calId
  },null);
 };
 CalculationModel$1.Map_adds=function(kvs,map)
 {
  return new FSharpMap.New(Seq$1.append(Map.ToSeq(map),kvs));
 };
 CalculationModel$1.Xmodel=function()
 {
  SC$1.$cctor();
  return SC$1.Xmodel;
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
 TreeNodeId.TreeNodeId={
  $:0
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
 ModelUI.New=function(calculations,totals,dimensions,cubes,globalDefs,server,selection,selectedDim,selectedCube,collapsed,cubePrefix,measurePrefix,outputMsgs,codeFS,parserMsgs,fileName,version)
 {
  return{
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
  $:24
 };
 MsgModel.AddDimension={
  $:13
 };
 MsgModel.AddCalculation={
  $:3
 };
 MsgModel.AddTotal={
  $:0
 };
 ModelUIModule.getDimsCubeO=Global.id;
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
 TableDimensions.tableDimensions$2008$48=function(did)
 {
  return function()
  {
   (Global$1.processor())({
    $:15,
    $0:did
   });
  };
 };
 TableDimensions.tableDimensions$2007$48=function(did)
 {
  return function()
  {
   (Global$1.processor())({
    $:14,
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
     return $1(RuleEditor_GeneratedPrintf.p($2));
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
     $:14,
     $0:did
    });
   }))),t.WithHole(Handler.EventQ2(t.k,"select",function()
   {
    return t.i;
   },function()
   {
    (Global$1.processor())({
     $:15,
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
  return SC$1.dtypes;
 };
 MainProgram.mainProgram=function()
 {
  var l,m,a,o,v,b;
  AppFramework.addPlugIn(PlugIn.New("RuleEditor",[AppFramework.newVar("fileName",Global$1.model().fileName),AppFramework.newVar("Server",Global$1.model().server)],[],[AppFramework.newDoc("Dimensions",Lazy.Create(TableDimensions.tableDimensions))],[AppFramework.newActF("LoadFile",{
   $:1,
   $0:function(o$1)
   {
    (Global$1.processor())({
     $:23,
     $0:o$1
    });
   },
   $1:"FileElement"
  }),AppFramework.newActF("SaveAs",{
   $:1,
   $0:function(o$1)
   {
    (Global$1.processor())({
     $:22,
     $0:o$1
    });
   },
   $1:"FileElement"
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
  var n;
  if(msg.$==13)
   {
    n=DimensionModule.New("");
    model.dimensions.Append(n);
    return UpdateModelUI.updateModelR(model,{
     $:15,
     $0:n.dimId
    });
   }
  else
   throw new MatchFailureException.New("D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\RuleEditor\\src\\RuleEditor.fs",2158,22);
 };
 SC$1.$cctor=function()
 {
  var i,i$1,i$2,refresh,$1;
  SC$1.$cctor=Global.ignore;
  SC$1.rtn=function(v)
  {
   return[v];
  };
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.fusion=new Builder$2.New();
  SC$1.fusion$1=new Builder$4.New();
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
  SC$1.MessageBrokerId="<MessageBroker>";
  SC$1.MessageBrokerAddress=new Address({
   $:0,
   $0:WebSockets.MessageBrokerId()
  });
  SC$1.Xmodel=Model.New(new ModId({
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
  SC$1.model=ModelUI.New(ListModel$1.Create(function(v)
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
  SC$1.dtypes=List.ofArray([DimType.DtDataType,DimType.DtTime,DimType.DtVersion,DimType.DtOther]);
  SC$1.RuleEditorLyt="RuleEditorLyt";
  Global$1.set_processor(function(m)
  {
   UpdateModelUI.updateModel(Global$1.model(),m);
  });
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
 RuleEditor_GeneratedPrintf.p=function($1)
 {
  return $1.$==6?"DtOther":$1.$==5?"DtMeasure":$1.$==4?"DtCalc":$1.$==3?"DtTCalc":$1.$==2?"DtVersion":$1.$==1?"DtTime":"DtDataType";
 };
}());

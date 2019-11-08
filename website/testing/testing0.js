(function()
{
 "use strict";
 var Global,FsRoot,Library,UoM,Unsafe,UoM$1,StringId,GuidId,Dict,ResultMessage,ResultMessageHelpers,Monads,Seq,Option,Async,WebSharper,Obj,State,CEBuilder,Operators,Result,Builder,Operators$1,BuilderP,Depend,DependBuilder,Operators$2,ResultM,Builder$1,Operators$3,ResultMAutoOpen,AsyncResultM,AsyncResultMBuilder,Operators$4,AsyncResultMAutoOpen,String,ParseO,Serializer,JsonIntermediate,Snippet,SnippetModule,SnippetSerialize,Model,LibraryJS,Promise,PromiseM,View,Var,ListModel,GenEditor,Position,AnnotationType,Annotation,Completion,GenEditorHook,GenEditor$1,Serializer$1,REGEX,Hoverable,Hoverable$1,ResizeObserver,WebComponent,WcTabStrip,WcTabStripT,WcSplitter,WcSplitterT,Monaco,Position$1,Range,Uri,Location,FindMatch,WordAtPosition,Model$1,MarkDownString,MarkerData,CompletionItem,Hover,Editor,MonacoConfig,MonacoGenAdapter,MonacoRT,CompletionItemProvider,HoverProvider,DefinitionProvider,AppFrameworkTemplate,AppFramework,PlugInVar,PlugInView,PlugInDoc,PlugInAction,PlugInQuery,PlugIn,PlugInBuilder,Fun,P,Val,Extract0,LayoutEngine,LayoutEngineModule,Measures,Syntax,RefType,Layout,TestingJS,StartAppFramework,Util,AF,ListModelData,LayoutEngine$1,ListModel$1,LM,LMX,SnippetTemplates,NewLY,P$1,DragDrop,DragInfo,SnippetsUI,SnippetHierData,SaveLoad,SC$1,testing_Templates,testing_GeneratedPrintf,GeneratedPrintf,IntelliFactory,Runtime,Utils,Strings,Seq$1,List,Arrays,Concurrency,Enumerator,Result$1,Operators$5,Slice,Unchecked,Collections,FSharpMap,FSharpSet,BalancedTree,Option$1,System,Guid,Date,Char,CancellationTokenSource,console,UI,View$1,Var$1,FromView,Doc,Var$2,JSON,DomUtility,AttrModule,AttrProxy,Node,Client,Templates,Reflect,Object,Lazy,Templating,Runtime$1,Server,ProviderBuilder,Handler,TemplateInstance,ListModel$2,Math,Dictionary,MatchFailureException,DateUtil,Numeric;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 UoM=Library.UoM=Library.UoM||{};
 Unsafe=UoM.Unsafe=UoM.Unsafe||{};
 UoM$1=UoM.UoM=UoM.UoM||{};
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
 ResultM=Monads.ResultM=Monads.ResultM||{};
 Builder$1=ResultM.Builder=ResultM.Builder||{};
 Operators$3=ResultM.Operators=ResultM.Operators||{};
 ResultMAutoOpen=Monads.ResultMAutoOpen=Monads.ResultMAutoOpen||{};
 AsyncResultM=Monads.AsyncResultM=Monads.AsyncResultM||{};
 AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder||{};
 Operators$4=AsyncResultM.Operators=AsyncResultM.Operators||{};
 AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 Serializer=Library.Serializer=Library.Serializer||{};
 JsonIntermediate=Serializer.JsonIntermediate=Serializer.JsonIntermediate||{};
 Snippet=Library.Snippet=Library.Snippet||{};
 SnippetModule=Library.SnippetModule=Library.SnippetModule||{};
 SnippetSerialize=Library.SnippetSerialize=Library.SnippetSerialize||{};
 Model=SnippetSerialize.Model=SnippetSerialize.Model||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Promise=LibraryJS.Promise=LibraryJS.Promise||{};
 PromiseM=LibraryJS.PromiseM=LibraryJS.PromiseM||{};
 View=LibraryJS.View=LibraryJS.View||{};
 Var=LibraryJS.Var=LibraryJS.Var||{};
 ListModel=LibraryJS.ListModel=LibraryJS.ListModel||{};
 GenEditor=LibraryJS.GenEditor=LibraryJS.GenEditor||{};
 Position=GenEditor.Position=GenEditor.Position||{};
 AnnotationType=GenEditor.AnnotationType=GenEditor.AnnotationType||{};
 Annotation=GenEditor.Annotation=GenEditor.Annotation||{};
 Completion=GenEditor.Completion=GenEditor.Completion||{};
 GenEditorHook=GenEditor.GenEditorHook=GenEditor.GenEditorHook||{};
 GenEditor$1=GenEditor.GenEditor=GenEditor.GenEditor||{};
 Serializer$1=LibraryJS.Serializer=LibraryJS.Serializer||{};
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
 Model$1=Monaco.Model=Monaco.Model||{};
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
 Extract0=AppFramework.Extract0=AppFramework.Extract0||{};
 LayoutEngine=LibraryJS.LayoutEngine=LibraryJS.LayoutEngine||{};
 LayoutEngineModule=LibraryJS.LayoutEngineModule=LibraryJS.LayoutEngineModule||{};
 Measures=LayoutEngineModule.Measures=LayoutEngineModule.Measures||{};
 Syntax=LayoutEngineModule.Syntax=LayoutEngineModule.Syntax||{};
 RefType=Syntax.RefType=Syntax.RefType||{};
 Layout=LayoutEngineModule.Layout=LayoutEngineModule.Layout||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 StartAppFramework=TestingJS.StartAppFramework=TestingJS.StartAppFramework||{};
 Util=TestingJS.Util=TestingJS.Util||{};
 AF=TestingJS.AF=TestingJS.AF||{};
 ListModelData=AF.ListModelData=AF.ListModelData||{};
 LayoutEngine$1=TestingJS.LayoutEngine=TestingJS.LayoutEngine||{};
 ListModel$1=TestingJS.ListModel=TestingJS.ListModel||{};
 LM=TestingJS.LM=TestingJS.LM||{};
 LMX=TestingJS.LMX=TestingJS.LMX||{};
 SnippetTemplates=TestingJS.SnippetTemplates=TestingJS.SnippetTemplates||{};
 NewLY=TestingJS.NewLY=TestingJS.NewLY||{};
 P$1=NewLY.P=NewLY.P||{};
 DragDrop=TestingJS.DragDrop=TestingJS.DragDrop||{};
 DragInfo=DragDrop.DragInfo=DragDrop.DragInfo||{};
 SnippetsUI=TestingJS.SnippetsUI=TestingJS.SnippetsUI||{};
 SnippetHierData=SnippetsUI.SnippetHierData=SnippetsUI.SnippetHierData||{};
 SaveLoad=SnippetsUI.SaveLoad=SnippetsUI.SaveLoad||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 testing_Templates=Global.testing_Templates=Global.testing_Templates||{};
 testing_GeneratedPrintf=Global.testing_GeneratedPrintf=Global.testing_GeneratedPrintf||{};
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
 Operators$5=WebSharper&&WebSharper.Operators;
 Slice=WebSharper&&WebSharper.Slice;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpMap=Collections&&Collections.FSharpMap;
 FSharpSet=Collections&&Collections.FSharpSet;
 BalancedTree=Collections&&Collections.BalancedTree;
 Option$1=WebSharper&&WebSharper.Option;
 System=Global.System;
 Guid=System&&System.Guid;
 Date=Global.Date;
 Char=WebSharper&&WebSharper.Char;
 CancellationTokenSource=WebSharper&&WebSharper.CancellationTokenSource;
 console=Global.console;
 UI=WebSharper&&WebSharper.UI;
 View$1=UI&&UI.View;
 Var$1=UI&&UI.Var;
 FromView=UI&&UI.FromView;
 Doc=UI&&UI.Doc;
 Var$2=UI&&UI.Var$1;
 JSON=Global.JSON;
 DomUtility=UI&&UI.DomUtility;
 AttrModule=UI&&UI.AttrModule;
 AttrProxy=UI&&UI.AttrProxy;
 Node=Global.Node;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Reflect=Global.Reflect;
 Object=Global.Object;
 Lazy=WebSharper&&WebSharper.Lazy;
 Templating=UI&&UI.Templating;
 Runtime$1=Templating&&Templating.Runtime;
 Server=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 ListModel$2=UI&&UI.ListModel;
 Math=Global.Math;
 Dictionary=Collections&&Collections.Dictionary;
 MatchFailureException=WebSharper&&WebSharper.MatchFailureException;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 Unsafe.cast=Global.id;
 UoM$1.Cast=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$1=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$2=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$3=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$4=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$5=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$6=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$7=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$8=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$9=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$10=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$1=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$2=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$3=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$4=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$5=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$6=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$7=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$8=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$9=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$10=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$1=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$2=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$3=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$4=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$5=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$6=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$7=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$8=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$9=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$10=function(x)
 {
  return Unsafe.cast(x);
 };
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
   return Operators$5.FailWith(Global.String(x));
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
 Builder$1=ResultM.Builder=Runtime.Class({
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
 },Obj,Builder$1);
 Builder$1.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder$1);
 Operators$3.rtn=function(v)
 {
  return ResultM.rtn(v);
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
  return ResultM.bindP(f,v);
 };
 Operators$3.op_BarGreaterGreater=function(v,f)
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
 Operators$4.rtn=function(v)
 {
  return AsyncResultM.rtn(v);
 };
 Operators$4.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators$4.op_GreaterGreaterEquals(f(v),g);
 };
 Operators$4.op_GreaterMinusGreater=function(f,g,v)
 {
  return Operators$4.op_BarGreaterGreater(f(v),g);
 };
 Operators$4.op_GreaterGreaterEquals=function(v,f)
 {
  return AsyncResultM.bind(f,v);
 };
 Operators$4.op_BarGreaterGreater=function(v,f)
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
  var v,r,s;
  v=Global.String(n);
  r=v.length%3;
  s=r===0?3:r;
  return Strings.concat(",",List.ofSeq(Seq$1.delay(function()
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
    },Operators$5.range(0,((v.length-s)/3>>0)-1));
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
 JsonIntermediate.New=function(tryFloat,tryInt,tryString,tryBool,tryArray,tryField,isObject,isNull,toString)
 {
  return{
   tryFloat:tryFloat,
   tryInt:tryInt,
   tryString:tryString,
   tryBool:tryBool,
   tryArray:tryArray,
   tryField:tryField,
   isObject:isObject,
   isNull:isNull,
   toString:toString
  };
 };
 Serializer.serGuid=function()
 {
  SC$1.$cctor();
  return SC$1.serGuid;
 };
 Serializer.serCn=function(s,s$1,c)
 {
  return Serializer.map(Global.ignore,Global.ignore,s,s$1);
 };
 Serializer.serC=function(s,s$1,c)
 {
  return Serializer.mapO(function()
  {
   return c;
  },function(v)
  {
   return Unchecked.Equals(v,c)?{
    $:1,
    $0:null
   }:null;
  },s,s$1);
 };
 Serializer.mapO=function(g,f,a,a$1)
 {
  function g$1(o)
  {
   return o==null?null:f(o.$0);
  }
  return[function(x)
  {
   return a(g(x));
  },function(x)
  {
   return g$1(a$1(x));
  }];
 };
 Serializer.map=function(g,f,a,a$1)
 {
  function g$1(o)
  {
   return o==null?null:{
    $:1,
    $0:f(o.$0)
   };
  }
  return[function(x)
  {
   return a(g(x));
  },function(x)
  {
   return g$1(a$1(x));
  }];
 };
 Serializer.serTypedRegisters=function()
 {
  SC$1.$cctor();
  return SC$1.serTypedRegisters;
 };
 Serializer.serMap=function(s,s$1,s$2,s$3)
 {
  var serKVPs,t,f,g,f$1,g$1;
  function m(kvp)
  {
   return[kvp.K,kvp.V];
  }
  function m$1(a)
  {
   return new FSharpMap.New(a);
  }
  serKVPs=(t=Serializer.serDup([s,s$1],[s$2,s$3]),Serializer.serSeq(t[0],t[1]));
  return[(f=function(s$4)
  {
   return Seq$1.map(m,s$4);
  },(g=serKVPs[0],function(x)
  {
   return g(f(x));
  })),(f$1=serKVPs[1],(g$1=function(o)
  {
   return o==null?null:{
    $:1,
    $0:m$1(o.$0)
   };
  },function(x)
  {
   return g$1(f$1(x));
  }))];
 };
 Serializer.serPair=function(s,s$1,s$2,s$3)
 {
  return Serializer.serDup([s,s$1],[s$2,s$3]);
 };
 Serializer.serTrp=function(sF,sS,sT)
 {
  return[function(t)
  {
   return((((Runtime.Curried(function($1,$2,$3,$4)
   {
    return $1("["+Utils.toSafe($2)+", "+Utils.toSafe($3)+", "+Utils.toSafe($4)+"]");
   },4))(Global.id))(sF[0](t[0])))(sS[0](t[1])))(sT[0](t[2]));
  },function(j)
  {
   var a,$1,t,$2,$3,$4,$5;
   a=j.tryArray();
   return a!=null&&a.$==1&&((t=a.$0,!Unchecked.Equals(t,null)&&t.length===3)&&($1=[Arrays.get(a.$0,0),Arrays.get(a.$0,1),Arrays.get(a.$0,2)],true))?($2=sF[1]($1[0]),($3=sS[1]($1[1]),($4=sT[1]($1[2]),$2!=null&&$2.$==1&&($3!=null&&$3.$==1&&($4!=null&&$4.$==1&&($5=[$2.$0,$3.$0,$4.$0],true)))?{
    $:1,
    $0:[$5[0],$5[1],$5[2]]
   }:null))):null;
  }];
 };
 Serializer.serDup=function(serFst,serSnd)
 {
  return[function(t)
  {
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("["+Utils.toSafe($2)+", "+Utils.toSafe($3)+"]");
   }))(Global.id))(serFst[0](t[0])))(serSnd[0](t[1]));
  },function(j)
  {
   var a,$1,t,$2,$3,$4;
   a=j.tryArray();
   return a!=null&&a.$==1&&((t=a.$0,!Unchecked.Equals(t,null)&&t.length===2)&&($1=[Arrays.get(a.$0,0),Arrays.get(a.$0,1)],true))?($2=serFst[1]($1[0]),($3=serSnd[1]($1[1]),$2!=null&&$2.$==1&&($3!=null&&$3.$==1&&($4=[$2.$0,$3.$0],true))?{
    $:1,
    $0:[$4[0],$4[1]]
   }:null)):null;
  }];
 };
 Serializer.serOpt=function(s,s$1)
 {
  var ser,f,m;
  function g(o)
  {
   return o==null?"null":o.$0;
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
   return g(f(x));
  }),function(j)
  {
   return{
    $:1,
    $0:j.isNull()?null:ser[1](j)
   };
  }];
 };
 Serializer.serSet=function(s,s$1)
 {
  var ser,f,m;
  ser=[s,s$1];
  return[(f=(m=ser[0],function(s$2)
  {
   return new FSharpSet.New$1(BalancedTree.OfSeq(Seq$1.map(m,s$2)));
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),function(j)
  {
   var o,x,m$1,c;
   o=(x=j.tryArray(),(m$1=(c=ser[1],function(a)
   {
    return Arrays.choose(c,a);
   }),x==null?null:{
    $:1,
    $0:m$1(x.$0)
   }));
   return o==null?null:{
    $:1,
    $0:new FSharpSet.New(o.$0)
   };
  }];
 };
 Serializer.serLst=function(s,s$1)
 {
  var ser,f,m;
  ser=[s,s$1];
  return[(f=(m=ser[0],function(l)
  {
   return List.map(m,l);
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),function(j)
  {
   var o,x,m$1,c;
   o=(x=j.tryArray(),(m$1=(c=ser[1],function(a)
   {
    return Arrays.choose(c,a);
   }),x==null?null:{
    $:1,
    $0:m$1(x.$0)
   }));
   return o==null?null:{
    $:1,
    $0:List.ofSeq(o.$0)
   };
  }];
 };
 Serializer.serArr=function(s,s$1)
 {
  var ser,f,m;
  ser=[s,s$1];
  return[(f=(m=ser[0],function(a)
  {
   return Arrays.map(m,a);
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),function(j)
  {
   var x,m$1,c;
   x=j.tryArray();
   m$1=(c=ser[1],function(a)
   {
    return Arrays.choose(c,a);
   });
   return x==null?null:{
    $:1,
    $0:m$1(x.$0)
   };
  }];
 };
 Serializer.serSeq=function(s,s$1)
 {
  var ser,f,m;
  ser=[s,s$1];
  return[(f=(m=ser[0],function(s$2)
  {
   return Seq$1.map(m,s$2);
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),function(j)
  {
   var o,x,m$1,c;
   o=(x=j.tryArray(),(m$1=(c=ser[1],function(a)
   {
    return Arrays.choose(c,a);
   }),x==null?null:{
    $:1,
    $0:m$1(x.$0)
   }));
   return o==null?null:{
    $:1,
    $0:o.$0
   };
  }];
 };
 Serializer.serFieldO=function(name,get,set,a,a$1)
 {
  function g(o)
  {
   return o==null?null:{
    $:1,
    $0:a(o.$0)
   };
  }
  return[name,function(x)
  {
   return g(get(x));
  },function(rc)
  {
   var f,m;
   function g$1(b)
   {
    return set(b,rc);
   }
   function g$2(o)
   {
    return o==null?rc:o.$0;
   }
   f=(m=function(x)
   {
    return g$1(a$1(x));
   },function(o)
   {
    return o==null?null:{
     $:1,
     $0:m(o.$0)
    };
   });
   return function(x)
   {
    return g$2(f(x));
   };
  }];
 };
 Serializer.serField=function(name,get,set,a,a$1)
 {
  var f;
  function g(a$2)
  {
   return{
    $:1,
    $0:a$2
   };
  }
  return[name,(f=function(x)
  {
   return a(get(x));
  },function(x)
  {
   return g(f(x));
  }),function(rc)
  {
   var f$1,b,g$1;
   function m(b$1)
   {
    return set(b$1,rc);
   }
   function g$2(o)
   {
    return o==null?rc:o.$0;
   }
   f$1=(b=(g$1=function(o)
   {
    return o==null?null:{
     $:1,
     $0:m(o.$0)
    };
   },function(x)
   {
    return g$1(a$1(x));
   }),function(o)
   {
    return o==null?null:b(o.$0);
   });
   return function(x)
   {
    return g$2(f$1(x));
   };
  }];
 };
 Serializer.serDate=function()
 {
  SC$1.$cctor();
  return SC$1.serDate;
 };
 Serializer.serBool=function()
 {
  SC$1.$cctor();
  return SC$1.serBool;
 };
 Serializer.serInt64=function()
 {
  SC$1.$cctor();
  return SC$1.serInt64;
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
 Serializer.serString=function()
 {
  SC$1.$cctor();
  return SC$1.serString;
 };
 Serializer.toJsonString=function(v)
 {
  return Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(["\""],Seq$1.delay(function()
   {
    return Seq$1.append(!Strings.IsNullOrEmpty(v)?Seq$1.collect(function(i)
    {
     var c,ci;
     c=v[i];
     ci=c.charCodeAt();
     return ci>=0&&ci<=7||ci===11||ci>=14&&ci<=31?(function($1)
     {
      return function($2)
      {
       return $1("\\u"+Utils.padNumLeft($2.toString(16),4));
      };
     }(Global.id))(ci):c==="\u0008"?"\\b":c==="\u0009"?"\\t":c==="\n"?"\\n":c==="\u000c"?"\\f":c==="\r"?"\\r":c==="\""?"\\\"":c==="\\"?"\\\\":[c];
    },Operators$5.range(0,v.length-1)):[],Seq$1.delay(function()
    {
     return["\""];
    }));
   }));
  })).join("");
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
 Serializer.Field=function(field,j)
 {
  return j.tryField(field);
 };
 Serializer.serialize=function(s,s$1,v)
 {
  return[s,s$1][0](v);
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
 SnippetModule.hasChildren=function(getSnippets,snp)
 {
  var snps,m,o,o$1;
  snps=getSnippets();
  m=Seq$1.tryFindIndex(function(s)
  {
   return Unchecked.Equals(s.snpId,snp.snpId);
  },snps);
  return m!=null&&m.$==1&&(o=(o$1=Seq$1.tryItem(m.$0+1,snps),o$1==null?null:{
   $:1,
   $0:Unchecked.Equals(o$1.$0.snpParentIdO,{
    $:1,
    $0:snp.snpId
   })
  }),o==null?false:o.$0);
 };
 SnippetModule.getLevel=function(tryFindSnippet,snp)
 {
  var lvl,snp1,o,m;
  lvl=0;
  snp1=snp;
  while(true)
   {
    m=(o=snp1.snpParentIdO,o==null?null:tryFindSnippet(o.$0));
    if(m!=null&&m.$==1)
     {
      lvl=lvl+1;
      snp1=m.$0;
     }
    else
     return lvl;
   }
 };
 SnippetModule.allPredecessors=function(tryFindSnippet,snp)
 {
  var parentS;
  parentS=new FSharpSet.New(Option$1.toArray(snp.snpParentIdO));
  return function(out,searched,toSearch)
  {
   var sid,toSearch1,searched1,m,snp1,news,out1,toSearch2;
   while(true)
    if(toSearch.get_IsEmpty())
     return out;
    else
     {
      sid=Seq$1.head(toSearch);
      toSearch1=toSearch.Remove(sid);
      searched1=searched.Add(sid);
      m=tryFindSnippet(sid);
      if(m!=null&&m.$==1)
       {
        snp1=m.$0;
        news=FSharpSet.op_Addition(new FSharpSet.New(Option$1.toArray(snp1.snpParentIdO)),new FSharpSet.New(snp1.snpPredIds));
        out1=out.Add(snp1);
        toSearch2=FSharpSet.op_Addition(toSearch1,FSharpSet.op_Subtraction(news,searched1));
        out=out1;
        searched=searched1;
        toSearch=toSearch2;
       }
      else
       {
        searched=searched1;
        toSearch=toSearch1;
       }
     }
  }(new FSharpSet.New$1(null),(new FSharpSet.New$1(null)).Add(snp.snpId),FSharpSet.op_Addition(parentS,new FSharpSet.New(snp.snpPredIds)));
 };
 SnippetModule.indirectPredecessorIds=function(tryFindSnippet,snpId,snpParentIdO,snpPredIds)
 {
  var parentS;
  parentS=new FSharpSet.New(Option$1.toArray(snpParentIdO));
  return function(out,searched,toSearch)
  {
   var sid,toSearch1,searched1,m,snp1,news,out1,toSearch2;
   while(true)
    if(toSearch.get_IsEmpty())
     return out;
    else
     {
      sid=Seq$1.head(toSearch);
      toSearch1=toSearch.Remove(sid);
      searched1=searched.Add(sid);
      m=tryFindSnippet(sid);
      if(m!=null&&m.$==1)
       {
        snp1=m.$0;
        news=FSharpSet.op_Addition(new FSharpSet.New(Option$1.toArray(snp1.snpParentIdO)),new FSharpSet.New(snp1.snpPredIds));
        out1=FSharpSet.op_Addition(out,news);
        toSearch2=FSharpSet.op_Addition(toSearch1,FSharpSet.op_Subtraction(news,searched1));
        out=out1;
        searched=searched1;
        toSearch=toSearch2;
       }
      else
       {
        searched=searched1;
        toSearch=toSearch1;
       }
     }
  }(parentS,(new FSharpSet.New$1(null)).Add(snpId),FSharpSet.op_Addition(parentS,snpPredIds));
 };
 SnippetModule.defaultSnippet=function()
 {
  SC$1.$cctor();
  return SC$1.defaultSnippet;
 };
 SnippetModule.New=function(name,content,parentO)
 {
  return Snippet.New(UoM$1.Tag$4(Guid.NewGuid()),name,content,parentO,new FSharpSet.New$1(null),[],SnippetModule.getNextModified());
 };
 SnippetModule.getNextModified=function()
 {
  return Date.now();
 };
 Model.New=function(snippets,modified,collapsed)
 {
  return{
   snippets:snippets,
   modified:modified,
   collapsed:collapsed
  };
 };
 SnippetSerialize.serModel=function()
 {
  SC$1.$cctor();
  return SC$1.serModel;
 };
 SnippetSerialize.getModel=function(snippets,gen,coll)
 {
  return Model.New(Arrays.ofSeq(snippets),gen,coll);
 };
 SnippetSerialize.serSnippet=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippet;
 };
 SnippetSerialize.serSnippetId=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippetId;
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
  x=GenEditor.newVar(edh,Var$2.Lens(v,function(o)
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
  return GenEditor.newVar(edh,Var$2.Create$1(v));
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
 Serializer$1.deserializeWithFail=function(s,s$1)
 {
  return Serializer$1.deserialize(function()
  {
   return Operators$5.FailWith("Error expecting float");
  },function()
  {
   return Operators$5.FailWith("Error expecting int");
  },function()
  {
   return Operators$5.FailWith("Error expecting string");
  },function()
  {
   return Operators$5.FailWith("Error expecting bool");
  },function()
  {
   return Operators$5.FailWith("Error expecting array");
  },s,s$1);
 };
 Serializer$1.deserializeWithDefs=function(s,s$1)
 {
  return Serializer$1.deserialize(function()
  {
   return{
    $:1,
    $0:0
   };
  },function()
  {
   return{
    $:1,
    $0:0
   };
  },function()
  {
   return{
    $:1,
    $0:""
   };
  },function()
  {
   return{
    $:1,
    $0:false
   };
  },function()
  {
   return{
    $:1,
    $0:[]
   };
  },s,s$1);
 };
 Serializer$1.tryDeserialize=function(s,s$1)
 {
  return Serializer$1.deserialize(function()
  {
   return null;
  },function()
  {
   return null;
  },function()
  {
   return null;
  },function()
  {
   return null;
  },function()
  {
   return null;
  },s,s$1);
 };
 Serializer$1.deserialize=function(df,di,ds,db,da,s,s$1)
 {
  var f,g;
  function f$1(a)
  {
   return JSON.parse(a);
  }
  function g$1(o)
  {
   return Serializer$1.getJsonIntermediate(df,di,ds,db,da,o);
  }
  f=function(x)
  {
   return g$1(f$1(x));
  };
  g=[s,s$1][1];
  return function(x)
  {
   return g(f(x));
  };
 };
 Serializer$1.getJsonIntermediate=function(df,di,ds,db,da,o)
 {
  function jsonInt(o$1)
  {
   return Serializer$1.getJsonIntermediate(df,di,ds,db,da,o$1);
  }
  return JsonIntermediate.New(function()
  {
   var o$1;
   o$1=!o?null:typeof o=="number"?{
    $:1,
    $0:o
   }:null;
   return o$1==null?df():o$1;
  },function()
  {
   var o$1;
   o$1=!o?null:typeof o=="number"?{
    $:1,
    $0:o
   }:null;
   return o$1==null?di():o$1;
  },function()
  {
   var o$1;
   o$1=!o?null:typeof o=="string"?{
    $:1,
    $0:o
   }:null;
   return o$1==null?ds():o$1;
  },function()
  {
   var o$1;
   o$1=!o?null:typeof o=="boolean"?{
    $:1,
    $0:o
   }:null;
   return o$1==null?db():o$1;
  },function()
  {
   var o$1;
   o$1=!o?null:o instanceof Global.Array?{
    $:1,
    $0:Arrays.map(jsonInt,o)
   }:null;
   return o$1==null?da(jsonInt):o$1;
  },function(fl)
  {
   var m;
   return!o?null:(m=o[fl],Unchecked.Equals(m,null)?{
    $:1,
    $0:jsonInt(null)
   }:!m?null:{
    $:1,
    $0:jsonInt(m)
   });
  },function()
  {
   return Unchecked.Equals(typeof o,"object")&&!Unchecked.Equals(o,null);
  },function()
  {
   return Unchecked.Equals(o,null);
  },function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(o);
  });
 };
 Serializer$1.serLMdField=function(name,lmd,s,s$1)
 {
  var serS,f,g;
  function g$1(lm)
  {
   return lm["var"].Get();
  }
  serS=Serializer.serSeq(s,s$1);
  return[name,(f=function(x)
  {
   return g$1(lmd(x));
  },(g=serS[0],function(x)
  {
   return g(f(x));
  })),function(rc)
  {
   return function(b)
   {
    var v,o;
    return(v=serS[1](b),((Option.iter((o=lmd(rc),function(a)
    {
     o.Set(a);
    })))(v),v))==null?null:{
     $:1,
     $0:rc
    };
   };
  }];
 };
 Serializer$1.serVarField=function(name,_var,s,s$1)
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
    var v,a;
    return(v=s$1(o),((Option.iter((a=_var(rc),function(a$1)
    {
     return Var$2.Set(a,a$1);
    })))(v),v))==null?null:{
     $:1,
     $0:rc
    };
   };
  }];
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
 Hoverable$1.Content$1714$81=Runtime.Curried3(function(e,$1,$2)
 {
  return DomUtility.RemoveClass(e.elt,"hovering");
 });
 Hoverable$1.get_Attributes$1710$69=Runtime.Curried3(function(_this,$1,$2)
 {
  return _this.hover.Set(false);
 });
 Hoverable$1.get_Attributes$1709$69=Runtime.Curried3(function(_this,$1,$2)
 {
  return _this.hover.Set(true);
 });
 Hoverable$1.New$1=function()
 {
  return Hoverable$1.New(Var$2.Create$1(false));
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
      return Unchecked.Equals(node.nodeType,Node.ELEMENT_NODE)?[[node.hasAttribute("tabname")?node.getAttribute("tabname"):(function($1)
      {
       return function($2)
       {
        return $1("Tab "+Global.String($2));
       };
      }(Global.id))(i),node]]:[];
     },Operators$5.range(1,el.childNodes.length));
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
  this.selected=Var$2.Create$1(1);
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
 WcTabStrip.tabStrip$1858$64=function(i,selected)
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
     value=Var$2.Create$1(el.hasAttribute("value")?Global.parseFloat(el.getAttribute("value")):50);
     first=!el.hasAttribute("second");
     vertical=el.hasAttribute("vertical");
     size=[[0,0]];
     padding=[0];
     gap=Var$2.Create$1(0);
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
 Model$1.New=function(uri)
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
 Monaco.render$2219$48=function(monc)
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
 MonacoGenAdapter.generateDoc$2361$48=function(monRT,onRender,genE)
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
    return PlugInVar.New(UoM$1.Tag$3(prefix+UoM$1.Untag$3(v.varName)),v.varVar);
   },p2.plgVars));
   plg.plgViews.AppendMany(Seq$1.map(function(w)
   {
    return PlugInView.New(UoM$1.Tag$3(prefix+UoM$1.Untag$3(w.viwName)),w.viwView);
   },p2.plgViews));
   plg.plgDocs.AppendMany(Seq$1.map(function(d)
   {
    return PlugInDoc.New(UoM$1.Tag$3(prefix+UoM$1.Untag$3(d.docName)),d.docDoc);
   },p2.plgDocs));
   plg.plgActions.AppendMany(Seq$1.map(function(a)
   {
    return PlugInAction.New(UoM$1.Tag$3(prefix+UoM$1.Untag$3(a.actName)),a.actFunction,a.actEnabled);
   },p2.plgActions));
   plg.plgQueries.AppendMany(Seq$1.map(function(q)
   {
    return PlugInQuery.New(UoM$1.Tag$3(prefix+UoM$1.Untag$3(q.qryName)),q.qryFunction);
   },p2.plgQueries));
   return plg;
  },
  AddViw:function(plg,name,viw)
  {
   plg.plgViews.Append(AppFramework.newViw(UoM$1.Tag$3(name),viw));
   return plg;
  },
  AddActO:function(plg,name,actO)
  {
   actO==null?void 0:plg.plgActions.Append(AppFramework.newAct(UoM$1.Tag$3(name),actO.$0));
   return plg;
  },
  AddAct2:function(plg,name,act,p1,p2)
  {
   plg.plgActions.Append(AppFramework.newActF(UoM$1.Tag$3(name),{
    $:2,
    $0:act,
    $1:p1,
    $2:p2
   }));
   return plg;
  },
  AddAct1:function(plg,name,act,p1)
  {
   plg.plgActions.Append(AppFramework.newActF(UoM$1.Tag$3(name),{
    $:1,
    $0:act,
    $1:p1
   }));
   return plg;
  },
  AddAct:function(plg,name,act)
  {
   plg.plgActions.Append(AppFramework.newAct(UoM$1.Tag$3(name),act));
   return plg;
  },
  AddQry:function(plg,name,qry)
  {
   plg.plgQueries.Append(AppFramework.newQry(UoM$1.Tag$3(name),qry));
   return plg;
  },
  AddDoc5:function(plg,name,doc,a,b,c,d,e)
  {
   plg.plgDocs.Append(AppFramework.newDocF(UoM$1.Tag$3(name),{
    $:5,
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
   plg.plgDocs.Append(AppFramework.newDocF(UoM$1.Tag$3(name),{
    $:4,
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
   plg.plgDocs.Append(AppFramework.newDocF(UoM$1.Tag$3(name),{
    $:3,
    $0:doc,
    $1:a,
    $2:b,
    $3:c
   }));
   return plg;
  },
  AddDoc2:function(plg,name,doc,p1,p2)
  {
   plg.plgDocs.Append(AppFramework.newDocF(UoM$1.Tag$3(name),{
    $:2,
    $0:doc,
    $1:p1,
    $2:p2
   }));
   return plg;
  },
  AddDoc:function(plg,name,doc)
  {
   plg.plgDocs.Append(AppFramework.newDoc(UoM$1.Tag$3(name),doc));
   return plg;
  },
  AddVar:function(plg,name,_var)
  {
   plg.plgVars.Append(AppFramework.newVar(UoM$1.Tag$3(name),_var));
   return plg;
  },
  Name:function(plg,name)
  {
   return PlugIn.New(UoM$1.Tag$3(name),plg.plgVars,plg.plgViews,plg.plgDocs,plg.plgActions,plg.plgQueries);
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
   return PlugIn.New(UoM$1.Tag$3("Main"),i.plgVars,i.plgViews,i.plgDocs,i.plgActions,i.plgQueries);
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
 Val.textAtt=function()
 {
  SC$1.$cctor();
  return SC$1.textAtt;
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
  }(Operators$5.FailWith):{
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
 Extract0.getTextValFromTextTypesD=function()
 {
  SC$1.$cctor();
  return SC$1.getTextValFromTextTypesD;
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
 AppFramework.op_Dereference=function(v)
 {
  return P.New((Operators$2.rtn())({
   $:1,
   $0:v
  }));
 };
 AppFramework.addPlugIn=function(p)
 {
  AppFramework.plugIns().Append(p);
 };
 AppFramework.getMainDoc=function()
 {
  SC$1.$cctor();
  return SC$1.getMainDoc;
 };
 AppFramework.select=function()
 {
  SC$1.$cctor();
  return SC$1.select;
 };
 AppFramework.trigAct=function()
 {
  SC$1.$cctor();
  return SC$1.trigAct;
 };
 AppFramework.setVar=function(varN,value)
 {
  var x,t;
  x=(t=(AppFramework.splitName(AppFramework.defPlugInName()))(varN),AppFramework.tryGetVar(t[0],t[1]));
  (Option.iter(function(v)
  {
   v.varVar.Set(value);
  }))(x);
 };
 AppFramework.htmlDoc=function(lytNm,html)
 {
  return Doc.BindView(function(a)
  {
   return a.$==1?AppFramework.errDoc((function($1)
   {
    return function($2)
    {
     return $1("HtmlDoc: unexpected action "+GeneratedPrintf.p($2));
    };
   }(Global.id))(a.$0)):Doc.Verbatim(a.$0);
  },AppFramework.getTextData(lytNm,html));
 };
 AppFramework.none=function(x)
 {
  return Doc.Element("span",[],[]);
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
 AppFramework.inputFile$3499$67=Runtime.Curried3(function(act,el,$1)
 {
  return AppFramework.callFunction(el,null,act.actFunction);
 });
 AppFramework.inputFile$3498$67=Runtime.Curried3(function($1,el,$2)
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
    return function()
    {
     return AppFramework.callFunction(el,null,act.actFunction);
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
   return b.Bind(AppFramework.getDocD(),function(a)
   {
    return b.Bind(AppFramework.getTextActViewD(),function(a$1)
    {
     return b.Return(Depend.resolver(List.ofArray([["getDocFromReference",a],["getTextActViewFromReference",a$1],["currentPlugInName",pin]]),d));
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
  function s(el,a$1)
  {
   var act;
   return a$1.$==1?(act=a$1.$0,el.addEventListener(atn,function(ev)
   {
    return AppFramework.callFunction(el,ev,act.actFunction);
   },false)):el.setAttribute(atn,Strings.Trim(a$1.$0));
  }
  return a.$==0?AttrModule.DynamicCustom(function($1)
  {
   return function($2)
   {
    return s($1,$2);
   };
  },a.$0):a.$0.$==0?AttrProxy.Create(atn,a.$0.$0):(function($1)
  {
   return function($2)
   {
    return $1("Illegal value "+testing_GeneratedPrintf.p$3($2));
   };
  }(Operators$5.FailWith))(a);
 };
 AppFramework.valToStyle=function(atn,a)
 {
  return a.$==0?AttrModule.DynamicStyle(atn,View$1.Map(AppFramework.choiceToString,a.$0)):a.$0.$==0?AttrModule.Style(atn,a.$0.$0):(function($1)
  {
   return function($2)
   {
    return $1("Illegal reference "+testing_GeneratedPrintf.p$6($2));
   };
  }(Operators$5.FailWith))(a);
 };
 AppFramework.choiceToString=function(a)
 {
  return a.$==1?(function($1)
  {
   return function($2)
   {
    return $1("@{expecting string, got Action: "+Utils.prettyPrint($2)+"}");
   };
  }(Global.id))(a.$0):a.$0;
 };
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
     return a$1.$==1?(act=a$1.$0,el.addEventListener(Strings.Trim(name),function(ev)
     {
      return AppFramework.callFunction(el,ev,act.actFunction);
     },false)):el.setAttribute(Strings.Trim(name),Strings.Trim(a$1.$0));
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
       }(Global.id))(UoM$1.Untag$3(a$1.$0.actName)):Strings.Trim(a$1.$0);
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
      }(Global.id))(UoM$1.Untag$3(a$2.$0.actName))
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
 AppFramework.vertical$3051$39=function(mouseDown)
 {
  return function(te)
  {
   mouseDown(te.Event);
  };
 };
 AppFramework.vertical$3050$39=Global.id;
 AppFramework.vertical$3049$39=Global.id;
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
  }),t.WithHole(Handler.EventQ2(t.k,"mousedown",function()
  {
   return t.i;
  },function(te)
  {
   mouseDown(te.Event);
  }))).WithHole({
   $:2,
   $0:"gap",
   $1:gap
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.wcompsplitterver(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFramework.horizontal$3043$39=function(mouseDown)
 {
  return function(te)
  {
   mouseDown(te.Event);
  };
 };
 AppFramework.horizontal$3042$39=Global.id;
 AppFramework.horizontal$3041$39=Global.id;
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
  }),t.WithHole(Handler.EventQ2(t.k,"mousedown",function()
  {
   return t.i;
  },function(te)
  {
   mouseDown(te.Event);
  }))).WithHole({
   $:2,
   $0:"gap",
   $1:gap
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.wcompsplitterhor(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFramework.mainDoc$3032$42=function()
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
  })),t.WithHole(Handler.EventQ2(t.k,"goclient",function()
  {
   return t.i;
  },function()
  {
   AppFramework.mainDocV().Set("AppFramework.AppFwkClient");
  }))).WithHole({
   $:0,
   $0:"mainclient",
   $1:M
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.appframework(p[0])),(b.i=i,i)))).get_Doc();
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
     return UoM$1.Untag$3(plg.plgName)===mainDoc||UoM$1.Untag$3(plg.plgName)+"."+UoM$1.Untag$3(doc.docName)===mainDoc;
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
    return $1("Doc with parameters not allowed here: "+GeneratedPrintf.p$1($2));
   };
  }(Global.id))(doc))]);
 };
 AppFramework.AppFwkClient=function()
 {
  SC$1.$cctor();
  return SC$1.AppFwkClient;
 };
 AppFramework.renderQueries$2996$39=function(qry)
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
   return(b=(t=(N=UoM$1.Untag$3(qry.qryName),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })),t.WithHole(Handler.EventQ2(t.k,"select",function()
   {
    return t.i;
   },function()
   {
    Global.alert(qry.qryFunction(null));
   }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
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
 AppFramework.renderActions$2985$51=function(act)
 {
  return function(ev)
  {
   AppFramework.callFunction(ev,null,act.actFunction);
  };
 };
 AppFramework.renderActions$2981$51=function(act)
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
    var b,t,N,p,i,b$1,t$1,N$1,p$1,i$1;
    return a$2?(b=(t=(N=UoM$1.Untag$3(act.actName)+parms,ProviderBuilder.Make().WithHole({
     $:1,
     $0:"name",
     $1:N
    })),t.WithHole(Handler.EventQ2(t.k,"click",function()
    {
     return t.i;
    },function(ev)
    {
     AppFramework.callFunction(ev,null,act.actFunction);
    }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.action(p[0])),(b.i=i,i)))).get_Doc():(b$1=(t$1=(N$1=UoM$1.Untag$3(act.actName),ProviderBuilder.Make().WithHole({
     $:1,
     $0:"name",
     $1:N$1
    })),t$1.WithHole(Handler.EventQ2(t$1.k,"click",function()
    {
     return t$1.i;
    },function(ev)
    {
     AppFramework.callFunction(ev,null,act.actFunction);
    }))),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],testing_Templates.actiondisabled(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
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
 AppFramework.renderDocs$2959$39=function(doc)
 {
  return function()
  {
   View$1.Get(function(plg)
   {
    var a;
    a=UoM$1.Untag$3(plg.plgName)+"."+UoM$1.Untag$3(doc.docName);
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
   var parms,m,x,x$1,x$2,x$3,x$4,b,t,N,p,i;
   parms=(m=doc.docDoc,m.$==1?(x=Strings.concat(", ",List.ofArray([m.$1])),(function($1)
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
   }(Global.id))(x$4)):"");
   return(b=(t=(N=UoM$1.Untag$3(doc.docName)+parms,ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })),t.WithHole(Handler.EventQ2(t.k,"select",function()
   {
    return t.i;
   },function()
   {
    View$1.Get(function(plg$1)
    {
     var a$2;
     a$2=UoM$1.Untag$3(plg$1.plgName)+"."+UoM$1.Untag$3(doc.docName);
     AppFramework.mainDocV().Set(a$2);
    },AppFramework.currentPlugInW());
   }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
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
   var b,N,p,i;
   return(b=(N=UoM$1.Untag$3(viw.viwName),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })).WithHole({
    $:2,
    $0:"value",
    $1:viw.viwView
   }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.namevalue(p[0])),(b.i=i,i)))).get_Doc();
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
   return(b=(N=UoM$1.Untag$3(_var.varName),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })).WithHole({
    $:8,
    $0:"value",
    $1:_var.varVar
   }),(p=Handler.CompleteHoles(b.k,b.h,[["value",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.namevalueinput(p[0])),(b.i=i,i)))).get_Doc();
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
 AppFramework.renderPlugIns$2921$35=function(name)
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
   return(b=(t=(N=UoM$1.Untag$3($1),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })),t.WithHole(Handler.EventQ2(t.k,"select",function()
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
   }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
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
   return Arrays.length(a)===1?[lytNm,UoM$1.Tag$3(Strings.Trim(Arrays.get(a,0)))]:[UoM$1.Tag$3(Strings.Trim(Arrays.get(a,0))),UoM$1.Tag$3(Strings.Trim(Arrays.get(a,1)))];
  }
  return function(x)
  {
   return g(f(x));
  };
 };
 AppFramework.defaultPlugIn=function()
 {
  return PlugIn.New(UoM$1.Tag$3(""),new ListModel$2.New$1(function(_var)
  {
   return _var.varName;
  }),new ListModel$2.New$1(function(viw)
  {
   return viw.viwName;
  }),new ListModel$2.New$1(function(doc)
  {
   return doc.docName;
  }),new ListModel$2.New$1(function(act)
  {
   return act.actName;
  }),new ListModel$2.New$1(function(qry)
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
   },4))(Global.id))(Operators$5.toInt(this.$0)))(Operators$5.toInt(this.$1)))(Operators$5.toInt(this.$2)):Global.String(Operators$5.toInt(this.$1?this.$0:-this.$0));
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
 Syntax.createEntryO2=function(lytNm,refs)
 {
  function ok(nm,en)
  {
   refs.Add(nm,en);
   return{
    $:1,
    $0:{
     $:0,
     $0:[nm,en]
    }
   };
  }
  function ko(msg,line)
  {
   refs.Add(Seq$1.head(Strings.SplitChars(line,[" ","\u0009"],1)),{
    $:0,
    $0:{
     $:6,
     $0:{
      $:0,
      $0:"div",
      $1:[],
      $2:List.ofArray([{
       $:0,
       $0:List.ofArray([{
        $:0,
        $0:msg
       }])
      }])
     }
    }
   });
   return{
    $:1,
    $0:{
     $:1,
     $0:msg
    }
   };
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
    }(Operators$5.FailWith))(nm);
   }
  }
  function getType(rf)
  {
   var $1,entry,nm,ly,a;
   if(rf.$==1)
    {
     nm=rf.$1;
     ly=rf.$0;
     a=getRef(ly);
     if(a.$==4)
      try
      {
       $1=a.$0.$0.get_Item(nm);
      }
      catch(e)
      {
       $1=(((Runtime.Curried3(function($2,$3,$4)
       {
        return $2("Could not find reference to "+Utils.toSafe($3)+"."+Utils.toSafe($4));
       }))(Operators$5.FailWith))(ly))(nm);
      }
     else
      $1=(function($2)
      {
       return function($3)
       {
        return $2("PlugIn not registered: "+testing_GeneratedPrintf.p($3));
       };
      }(Operators$5.FailWith))(rf);
     return[$1,null];
    }
   else
    {
     entry=getRef(rf.$0);
     return[entry.$==1?RefType.RAct:entry.$==2?RefType.RVar:entry.$==3?RefType.RViw:entry.$==5?RefType.RPlg:entry.$==4?(function($2)
     {
      return function($3)
      {
       return $2("PlugIn should not be referenced by itself: "+testing_GeneratedPrintf.p($3));
      };
     }(Operators$5.FailWith))(rf):RefType.RDoc,{
      $:1,
      $0:entry
     }];
    }
  }
  return function(line)
  {
   var a;
   try
   {
    a=Syntax.createEntryO(getType,lytNm,line);
    return a==null?ko((function($1)
    {
     return function($2)
     {
      return $1("Line not matched!: "+Utils.toSafe($2));
     };
    }(Global.id))(line),line):ok(a.$0.$0,a.$0.$1);
   }
   catch(e)
   {
    return ko(e.message,line);
   }
  };
 };
 Syntax.createEntryO=function(getType,lytNm,line)
 {
  var m,$1,a,a$1,$2,a$2,a$3,$3,a$4,a$5,$4,a$6,a$7,$5,a$8,a$9,$6,a$10,a$11,a$12,a$13,$7,a$14,a$15,a$16,a$17,$8,a$18,a$19,a$20,a$21,$9,a$22,a$23,a$24,$10,a$25,a$26,a$27,$11,a$28,a$29,$12,a$30,$13,a$31,a$32,a$33,$14,a$34,a$35,$15,a$36,a$37,$16,a$38,a$39,a$40,$17,a$41,a$42,a$43,a$44;
  function Rt(a$45)
  {
   var a$46,itr;
   a$46=Syntax.R(a$45);
   return a$46!=null&&a$46.$==1?(itr=a$46.$0,{
    $:1,
    $0:[getType(itr),itr]
   }):null;
  }
  function DocRf(a$45)
  {
   var $18,a$46;
   return(a$46=Rt(a$45),a$46!=null&&a$46.$==1&&(a$46.$0[0][0].$==0&&($18=a$46.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$18
    }
   }:null;
  }
  function VarRf(a$45)
  {
   var $18,a$46;
   return(a$46=Rt(a$45),a$46!=null&&a$46.$==1&&(a$46.$0[0][0].$==1&&($18=a$46.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$18
    }
   }:null;
  }
  function ViwRf(a$45)
  {
   var $18,a$46;
   return(a$46=Rt(a$45),a$46!=null&&a$46.$==1&&(a$46.$0[0][0].$==2&&($18=a$46.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$18
    }
   }:null;
  }
  function ActRf(a$45)
  {
   var $18,a$46;
   return(a$46=Rt(a$45),a$46!=null&&a$46.$==1&&(a$46.$0[0][0].$==3&&($18=a$46.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$18
    }
   }:null;
  }
  function PlgRf(a$45)
  {
   var $18,a$46,$19;
   return(a$46=Rt(a$45),a$46!=null&&a$46.$==1&&(a$46.$0[0][0].$==4&&(($19=a$46.$0[0][1],$19!=null&&$19.$==1)&&(a$46.$0[0][1].$0.$==5&&($18=[a$46.$0[0][1].$0.$0,a$46.$0[1]],true)))))?{
    $:1,
    $0:$18[0]
   }:null;
  }
  function Name(a$45)
  {
   var $18,a$46;
   return(a$46=Syntax.R(a$45),a$46!=null&&a$46.$==1&&(a$46.$0.$==0&&($18=a$46.$0.$0,true)))?{
    $:1,
    $0:$18
   }:null;
  }
  function NamU(a$45)
  {
   var $18,a$46;
   return(a$46=Name(a$45),a$46!=null&&a$46.$==1&&(Strings.StartsWith(a$46.$0,"_")&&($18=a$46.$0,true)))?{
    $:1,
    $0:$18
   }:null;
  }
  function Tr(a$45)
  {
   var a$46,a$47;
   a$46=VarRf(a$45);
   return a$46!=null&&a$46.$==1?{
    $:1,
    $0:{
     $:1,
     $0:a$46.$0
    }
   }:(a$47=ViwRf(a$45),a$47!=null&&a$47.$==1?{
    $:1,
    $0:{
     $:2,
     $0:a$47.$0
    }
   }:null);
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
   var $18,a$45,a$46,aft,bef,tl,a$47,$19;
   return(a$45=Indi(txt),a$45!=null&&a$45.$==1&&(a$46=Tr(a$45.$0[1]),a$46!=null&&a$46.$==1&&($18=[a$45.$0[2],a$45.$0[0],a$46.$0],true)))?(aft=$18[0],(bef=$18[1],(tl=bef===""?List.ofArray([$18[2]]):List.ofArray([{
    $:0,
    $0:bef
   },$18[2]]),aft===""?{
    $:1,
    $0:tl
   }:(a$47=Tx(aft),a$47!=null&&a$47.$==1?{
    $:1,
    $0:List.append(tl,a$47.$0)
   }:null)))):($19=Indi(txt),$19!=null&&$19.$==1)?null:{
    $:1,
    $0:List.ofArray([{
     $:0,
     $0:txt
    }])
   };
  }
  function ActI(txt)
  {
   var $18,a$45,a$46;
   return(a$45=Indi(txt),a$45!=null&&a$45.$==1&&(a$46=ActRf(a$45.$0[1]),a$46!=null&&a$46.$==1&&(Strings.Trim(a$45.$0[0])===""&&Strings.Trim(a$45.$0[2])===""&&($18=[a$45.$0[2],a$46.$0,a$45.$0[0]],true))))?{
    $:1,
    $0:$18[1]
   }:null;
  }
  function QTx(a$45)
  {
   var $18,a$46;
   return a$45.$==0&&(a$46=Tx(a$45.$0),a$46!=null&&a$46.$==1&&($18=a$46.$0,true))?{
    $:1,
    $0:$18
   }:null;
  }
  function At(a$45)
  {
   return a$45.$==0?{
    $:1,
    $0:Arrays.ofSeq(Seq$1.choose(function(a$46)
    {
     var m$1,$18,a$47,$19,a$48,m$2,$20,a$49;
     m$1=Strings.SplitChars(Strings.Trim(a$46),["="],0);
     return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$47=ActI(Arrays.get(m$1,1)),a$47!=null&&a$47.$==1&&($18=[a$47.$0,Arrays.get(m$1,0)],true))?{
      $:1,
      $0:{
       $:2,
       $0:Strings.Trim($18[1]),
       $1:$18[0]
      }
     }:!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$48=Tx(Arrays.get(m$1,1)),a$48!=null&&a$48.$==1&&($19=[Arrays.get(m$1,0),a$48.$0],true))?{
      $:1,
      $0:{
       $:1,
       $0:Strings.Trim($19[0]),
       $1:$19[1]
      }
     }:(m$2=Strings.SplitChars(Strings.Trim(a$46),[":"],0),!Unchecked.Equals(m$2,null)&&m$2.length===2&&(a$49=Tx(Arrays.get(m$2,1)),a$49!=null&&a$49.$==1&&($20=[Arrays.get(m$2,0),a$49.$0],true))?{
      $:1,
      $0:{
       $:0,
       $0:Strings.Trim($20[0]),
       $1:$20[1]
      }
     }:(function($21)
     {
      return function($22)
      {
       return $21("Attributes should be like: \"name=val\" or \"name:val\" and separated by ';' : "+Utils.toSafe($22));
      };
     }(Operators$5.FailWith))(a$46));
    },Seq$1.filter(function(v)
    {
     return Strings.Trim(v)!=="";
    },Strings.SplitChars(Strings.Trim(a$45.$0),[";"],0))))
   }:null;
  }
  function Pr(a$45)
  {
   var a$46,a$47,a$48,a$49,a$50;
   a$46=QTx(a$45);
   return a$46!=null&&a$46.$==1?{
    $:1,
    $0:{
     $:0,
     $0:a$46.$0
    }
   }:(a$47=DocRf(a$45),a$47!=null&&a$47.$==1?{
    $:1,
    $0:{
     $:1,
     $0:a$47.$0
    }
   }:(a$48=VarRf(a$45),a$48!=null&&a$48.$==1?{
    $:1,
    $0:{
     $:2,
     $0:a$48.$0
    }
   }:(a$49=ViwRf(a$45),a$49!=null&&a$49.$==1?{
    $:1,
    $0:{
     $:3,
     $0:a$49.$0
    }
   }:(a$50=ActRf(a$45),a$50!=null&&a$50.$==1?{
    $:1,
    $0:{
     $:4,
     $0:a$50.$0
    }
   }:null))));
  }
  function Prs(a$45)
  {
   var $18,a$46,a$47;
   switch(a$45.$==1?(a$46=Pr(a$45.$0),a$46!=null&&a$46.$==1?(a$47=Prs(a$45.$1),a$47!=null&&a$47.$==1?($18=[a$46.$0,a$47.$0],1):2):2):0)
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
       $0:$18[0],
       $1:$18[1]
      })
     };
    case 2:
     return null;
   }
  }
  function Nd(a$45)
  {
   var a$46,a$47,a$48,a$49;
   a$46=QTx(a$45);
   return a$46!=null&&a$46.$==1?{
    $:1,
    $0:{
     $:0,
     $0:a$46.$0
    }
   }:(a$47=DocRf(a$45),a$47!=null&&a$47.$==1?{
    $:1,
    $0:{
     $:1,
     $0:a$47.$0
    }
   }:(a$48=VarRf(a$45),a$48!=null&&a$48.$==1?{
    $:1,
    $0:{
     $:2,
     $0:a$48.$0
    }
   }:(a$49=ViwRf(a$45),a$49!=null&&a$49.$==1?{
    $:1,
    $0:{
     $:3,
     $0:a$49.$0
    }
   }:null)));
  }
  function Nds(a$45)
  {
   var $18,a$46,a$47;
   switch(a$45.$==1?(a$46=Nd(a$45.$0),a$46!=null&&a$46.$==1?(a$47=Nds(a$45.$1),a$47!=null&&a$47.$==1?($18=[a$46.$0,a$47.$0],1):2):2):0)
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
       $0:$18[0],
       $1:$18[1]
      })
     };
    case 2:
     return null;
   }
  }
  function Pgs(a$45)
  {
   var $18,a$46,a$47;
   switch(a$45.$==1?(a$46=PlgRf(a$45.$0),a$46!=null&&a$46.$==1?(a$47=Pgs(a$45.$1),a$47!=null&&a$47.$==1?($18=[a$46.$0,a$47.$0],1):2):2):0)
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
       $0:$18[0],
       $1:$18[1]
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
  }):m.$==1&&(a$2=NamU(m.$0),a$2!=null&&a$2.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$3=Name(m.$1.$1.$0),a$3!=null&&a$3.$==1&&(m.$1.$1.$1.$==0&&($2=[a$2.$0,a$3.$0],true)))))))?Syntax.entryRef($2[0],$2[1],RefType.RDoc):m.$==1&&(a$4=NamU(m.$0),a$4!=null&&a$4.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$5=Name(m.$1.$1.$0),a$5!=null&&a$5.$==1&&(m.$1.$1.$1.$==0&&($3=[a$4.$0,a$5.$0],true)))))))?Syntax.entryRef($3[0],$3[1],RefType.RVar):m.$==1&&(a$6=NamU(m.$0),a$6!=null&&a$6.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==2&&(m.$1.$1.$==1&&(a$7=Name(m.$1.$1.$0),a$7!=null&&a$7.$==1&&(m.$1.$1.$1.$==0&&($4=[a$6.$0,a$7.$0],true)))))))?Syntax.entryRef($4[0],$4[1],RefType.RViw):m.$==1&&(a$8=NamU(m.$0),a$8!=null&&a$8.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==4&&(m.$1.$1.$==1&&(a$9=Name(m.$1.$1.$0),a$9!=null&&a$9.$==1&&(m.$1.$1.$1.$==0&&($5=[a$8.$0,a$9.$0],true)))))))?Syntax.entryRef($5[0],$5[1],RefType.RAct):m.$==1&&(a$10=Name(m.$0),a$10!=null&&a$10.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$11=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$11!=null&&a$11.$==1&&(m.$1.$1.$1.$==1&&(a$12=DocRf(m.$1.$1.$1.$0),a$12!=null&&a$12.$==1&&(m.$1.$1.$1.$1.$==1&&(a$13=DocRf(m.$1.$1.$1.$1.$0),a$13!=null&&a$13.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($6=[a$12.$0,a$11.$0,a$10.$0,a$13.$0],true)))))))))))?Syntax.entryDoc($6[2],{
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
  }):m.$==1&&(a$36=Name(m.$0),a$36!=null&&a$36.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==3&&(a$37=Nds(m.$1.$1),a$37!=null&&a$37.$==1&&($15=[a$36.$0,a$37.$0],true)))))?Syntax.entryDoc($15[0],{
   $:5,
   $0:{
    $:0,
    $0:$15[1]
   }
  }):m.$==1&&(a$38=Name(m.$0),a$38!=null&&a$38.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==4&&(m.$1.$1.$==1&&(a$39=ActRf(m.$1.$1.$0),a$39!=null&&a$39.$==1&&(a$40=Prs(m.$1.$1.$1),a$40!=null&&a$40.$==1&&($16=[a$39.$0,a$38.$0,a$40.$0],true)))))))?Syntax.entryAct($16[1],{
   $:0,
   $0:$16[0],
   $1:$16[2]
  }):m.$==1&&(a$41=Name(m.$0),a$41!=null&&a$41.$==1&&(m.$1.$==1&&(a$42=LayoutEngineModule.Vertical(m.$1.$0),a$42.$==5&&(m.$1.$1.$==1&&(a$43=At(m.$1.$1.$0),a$43!=null&&a$43.$==1&&(a$44=Nds(m.$1.$1.$1),a$44!=null&&a$44.$==1&&($17=[a$43.$0,a$42.$0,a$41.$0,a$44.$0],true)))))))?Syntax.entryDoc($17[2],{
   $:6,
   $0:{
    $:0,
    $0:$17[1],
    $1:$17[0],
    $2:$17[3]
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
    $:5,
    $0:[e,e$1]
   })
  };
 };
 Syntax.entryPlg=function(n,p)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:4,
    $0:p
   })
  };
 };
 Syntax.entryVar=function(n,v)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:2,
    $0:v
   })
  };
 };
 Syntax.entryView=function(n,w)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:3,
    $0:w
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
 Syntax.pairOfDocs=function(lytNm,docs)
 {
  var dsW;
  dsW=View$1.Map(function(a)
  {
   var $1;
   return a.$==1&&(a.$1.$==1&&(a.$1.$1.$==0&&($1=[a.$0,a.$1.$0],true)))?[$1[0],$1[1]]:[AppFramework.errDoc((function($2)
   {
    return function($3)
    {
     return $2("splitter expects exactly 2 elements "+Utils.printList(function($4)
     {
      return testing_GeneratedPrintf.p$10($4);
     },$3));
    };
   }(Global.id))(docs)),AppFramework.errDoc("part 2")];
  },View$1.Map(function()
  {
   return LayoutEngineModule.getAllDocs(lytNm,docs);
  },LayoutEngineModule.currentViewTriggger()));
  return[Doc.EmbedView(View$1.Map(function(t)
  {
   return t[0];
  },dsW)),Doc.EmbedView(View$1.Map(function(t)
  {
   return t[1];
  },dsW))];
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
   },Operators$5.range(0,max-1));
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
 LayoutEngineModule.addNewLayout=function(name,layout)
 {
  var x,x$1;
  LayoutEngineModule.addLayout((x=(x$1=!Unchecked.Equals(layout,null)?layout:"\r\n            split horizontal 0-50-100 AppFramework.AppFwkClient Hello\r\n            Hello h1 \"color:blue; class=btn-primary\" \"How are you today?\" Ask\r\n            Ask Doc InputLabel \"placeholder=Type you answer here...\" \"Answer:\" AppFramework.mainDocV  \r\n            ",(String.unindentStr())(x$1)),LayoutEngineModule.newLyt(!Unchecked.Equals(layout,null)?name:UoM$1.Tag$3("Lyt_"+Strings.Replace(Global.String(Guid.NewGuid()),"-","")),x)));
 };
 LayoutEngineModule.newLyt=function(name,lyt)
 {
  return LayoutEngine.New(name,Var$2.Create$1(lyt));
 };
 LayoutEngineModule.addLayout=function(lyt)
 {
  View$1.Sink(function(txt)
  {
   var x;
   LayoutEngineModule.set_currentViewTriggger(View$1.Map2(function($1,$2)
   {
    return $1+$2;
   },lyt.lytDefinition.get_View(),AppFramework.mainDocV().get_View()));
   LayoutEngineModule.refreshEntries(lyt.lytName,(x=(LayoutEngineModule.createEntries(lyt.lytName))(txt),Seq$1.append(List.ofArray([{
    $:0,
    $0:AppFramework.newVar(UoM$1.Tag$3("Layout"),lyt.lytDefinition)
   }]),x)));
  },lyt.lytDefinition.get_View());
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
   return Seq$1.append(LayoutEngineModule.getDocEntries(entries),Seq$1.delay(function()
   {
    return Seq$1.append([AppFramework.newDocF(UoM$1.Tag$3("InputFile"),{
     $:4,
     $0:Runtime.Curried(LayoutEngineModule.inputFile,4,[lytN]),
     $1:"attrs",
     $2:"Label",
     $3:"Action",
     $4:"[Doc]"
    })],Seq$1.delay(function()
    {
     return Seq$1.append([AppFramework.newDocF(UoM$1.Tag$3("InputLabel"),{
      $:3,
      $0:Runtime.Curried(LayoutEngineModule.inputLabel,3,[lytN]),
      $1:"attrs",
      $2:"Label",
      $3:"Var"
     })],Seq$1.delay(function()
     {
      return Seq$1.append([AppFramework.newDocF(UoM$1.Tag$3("HtmlDoc"),{
       $:1,
       $0:function(h)
       {
        return LayoutEngineModule.htmlDoc(lytN,h);
       },
       $1:"html"
      })],Seq$1.delay(function()
      {
       return[AppFramework.newDocF(UoM$1.Tag$3("none"),{
        $:1,
        $0:LayoutEngineModule.none,
        $1:"x"
       })];
      }));
     }));
    }));
   }));
  })));
 };
 LayoutEngineModule.htmlDoc=function(lytNm,html)
 {
  return Doc.BindView(function(a)
  {
   return a.$==1?AppFramework.errDoc((function($1)
   {
    return function($2)
    {
     return $1("HtmlDoc: unexpected action "+GeneratedPrintf.p($2));
    };
   }(Global.id))(a.$0)):Doc.Verbatim(a.$0);
  },LayoutEngineModule.getTextData(lytNm,html));
 };
 LayoutEngineModule.none=function(x)
 {
  return Doc.Element("span",[],[]);
 };
 LayoutEngineModule.inputLabel=function(lytNm,attrs,labelName,varName)
 {
  var o,o$1,t;
  o=(o$1=(t=((LayoutEngineModule.splitName())(lytNm))(varName),AppFramework.tryGetVar(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:Doc.Element("div",LayoutEngineModule.getAttrs(lytNm,{
    $:0,
    $0:attrs
   }),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[LayoutEngineModule.getText(lytNm,{
    $:0,
    $0:labelName
   })]),Doc.Input([AttrProxy.Create("class","form-control")],o$1.$0.varVar)])])
  });
  return o==null?AppFramework.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Var not found "+Utils.toSafe($2));
   };
  }(Global.id))(varName)):o.$0;
 };
 LayoutEngineModule.inputFile$4613$67=Runtime.Curried3(function(act,el,$1)
 {
  return AppFramework.callFunction(el,null,act.actFunction);
 });
 LayoutEngineModule.inputFile$4612$67=Runtime.Curried3(function($1,el,$2)
 {
  el.value="";
 });
 LayoutEngineModule.inputFile=function(lytNm,attrs,labelName,actName,doc)
 {
  var o,o$1,t,act;
  o=(o$1=(t=((LayoutEngineModule.splitName())(lytNm))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:(act=o$1.$0,Doc.Element("div",LayoutEngineModule.getAttrs(lytNm,{
    $:0,
    $0:attrs
   }),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-btn")],[Doc.Element("label",[AttrProxy.Create("class","btn")],[LayoutEngineModule.getText(lytNm,{
    $:0,
    $0:labelName
   }),Doc.Element("input",[AttrProxy.Create("class","form-control"),AttrProxy.Create("type","file"),AttrModule.Style("display","none"),AttrProxy.HandlerImpl("click",function(el)
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
   })],[])])]),doc!==""?LayoutEngineModule.singleDoc(lytNm,List.ofArray([{
    $:1,
    $0:doc
   }])):Doc.get_Empty()])]))
  });
  return o==null?AppFramework.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Action not found "+Utils.toSafe($2));
   };
  }(Global.id))(actName)):o.$0;
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
  return a!=null&&a.$==1?(id=a.$0,(p=((LayoutEngineModule.splitName())(lytNm))(id),(plg=p[0],(nm=p[1],(o=(o$1=AppFramework.tryGetViw(plg,nm),o$1==null?null:{
   $:1,
   $0:Doc.TextView(o$1.$0.viwView)
  }),o==null?(o$2=(o$3=AppFramework.tryGetVar(plg,nm),o$3==null?null:{
   $:1,
   $0:Doc.TextView(o$3.$0.varVar.get_View())
  }),o$2==null?Doc.TextNode(id):o$2.$0):o.$0))))):Doc.TextNode(LayoutEngineModule.S(txtName));
 };
 LayoutEngineModule.createEntries=function(lytNm)
 {
  function f(l)
  {
   return LayoutEngineModule.createEntryO(lytNm,l);
  }
  return function(t)
  {
   return LayoutEngineModule.processText(f,t);
  };
 };
 LayoutEngineModule.parseEntries=function(lytNm,txt)
 {
  return LayoutEngineModule.processText(Syntax.createEntryO2(lytNm,new Dictionary.New$5()),txt);
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
  var i,x,o,v;
  i=(x=(o=Seq$1.tryFindIndex(function(l)
  {
   return Strings.Trim(l)!==""&&!pred(l);
  },Seq$1.skip(1,ls)),o==null?null:{
   $:1,
   $0:1+o.$0
  }),(v=Arrays.length(ls),x==null?v:x.$0));
  return[Slice.array(ls,{
   $:1,
   $0:1
  },{
   $:1,
   $0:i-1
  }),Slice.array(ls,{
   $:1,
   $0:i
  },null)];
 };
 LayoutEngineModule.createEntryO=function(lytNm,line)
 {
  var m,$1,a,a$1,name,$2,a$2,a$3,name$1,$3,a$4,a$5,name$2,$4,a$6,a$7,name$3,$5,a$8,a$9,name$4,$6,a$10,name$5,$7,a$11,name$6,$8,a$12,name$7,$9,a$13,name$8,$10,a$14,name$9,$11,a$15,a$16,name$10,$12,a$17,a$18,name$11;
  try
  {
   m=LayoutEngineModule.splitTokens(line);
   return m.$==1&&(a=LayoutEngineModule.Identifier(m.$0),a!=null&&a.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$1=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$1!=null&&a$1.$==1&&($1=[m.$1.$1.$1,a$1.$0,a.$0],true))))))?(name=$1[2],LayoutEngineModule.entryDoc(UoM$1.Tag$3(name),(LayoutEngineModule.createSplitterM())([lytNm,name,true,$1[1],$1[0]]))):m.$==1&&(a$2=LayoutEngineModule.Identifier(m.$0),a$2!=null&&a$2.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$3=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$3!=null&&a$3.$==1&&($2=[m.$1.$1.$1,a$3.$0,a$2.$0],true))))))?(name$1=$2[2],LayoutEngineModule.entryDoc(UoM$1.Tag$3(name$1),(LayoutEngineModule.createSplitterM())([lytNm,name$1,false,$2[1],$2[0]]))):m.$==1&&(a$4=LayoutEngineModule.Identifier(m.$0),a$4!=null&&a$4.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$5=LayoutEngineModule.Identifier(m.$1.$1.$0),a$5!=null&&a$5.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($3=[a$5.$0,m.$1.$1.$1.$0,a$4.$0,m.$1.$1.$1.$1.$0],true)))))))))?(name$2=$3[2],LayoutEngineModule.entryDoc(UoM$1.Tag$3(name$2),(LayoutEngineModule.createButtonM())([lytNm,name$2,$3[0],$3[1],$3[3]]))):m.$==1&&(a$6=LayoutEngineModule.Identifier(m.$0),a$6!=null&&a$6.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==2&&(m.$1.$1.$==1&&(a$7=LayoutEngineModule.Identifier(m.$1.$1.$0),a$7!=null&&a$7.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==0&&($4=[m.$1.$1.$1.$0,a$6.$0,a$7.$0],true))))))))?(name$3=$4[1],LayoutEngineModule.entryDoc(UoM$1.Tag$3(name$3),(LayoutEngineModule.createInputM())([lytNm,name$3,$4[2],$4[0]]))):m.$==1&&(a$8=LayoutEngineModule.Identifier(m.$0),a$8!=null&&a$8.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==3&&(m.$1.$1.$==1&&(a$9=LayoutEngineModule.Identifier(m.$1.$1.$0),a$9!=null&&a$9.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==0&&($5=[m.$1.$1.$1.$0,a$8.$0,a$9.$0],true))))))))?(name$4=$5[1],LayoutEngineModule.entryDoc(UoM$1.Tag$3(name$4),(LayoutEngineModule.createTextAreaM())([lytNm,name$4,$5[2],$5[0]]))):m.$==1&&(a$10=LayoutEngineModule.Identifier(m.$0),a$10!=null&&a$10.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==0&&(m.$1.$1.$==1&&(m.$1.$1.$1.$==0&&($6=[a$10.$0,LayoutEngineModule.S(m.$1.$1.$0)],true))))))?(name$5=$6[0],LayoutEngineModule.entryVar(UoM$1.Tag$3(name$5),(LayoutEngineModule.createVarM())([lytNm,name$5,$6[1]]))):m.$==1&&(a$11=LayoutEngineModule.Identifier(m.$0),a$11!=null&&a$11.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==1&&(m.$1.$1.$==1&&($7=[LayoutEngineModule.S(m.$1.$1.$0),a$11.$0,m.$1.$1.$1],true)))))?(name$6=$7[1],LayoutEngineModule.entryDoc(UoM$1.Tag$3(name$6),(LayoutEngineModule.createDocM())([lytNm,name$6,$7[0],$7[2]]))):m.$==1&&(a$12=LayoutEngineModule.Identifier(m.$0),a$12!=null&&a$12.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==2&&($8=[a$12.$0,m.$1.$1],true))))?(name$7=$8[0],LayoutEngineModule.entryView(UoM$1.Tag$3(name$7),(LayoutEngineModule.createViewM())([lytNm,name$7,$8[1]]))):m.$==1&&(a$13=LayoutEngineModule.Identifier(m.$0),a$13!=null&&a$13.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==4&&(m.$1.$1.$==1&&(m.$1.$1.$1.$==1&&($9=[m.$1.$1.$1.$0,m.$1.$1.$1.$1,a$13.$0,LayoutEngineModule.S(m.$1.$1.$0)],true))))))?(name$8=$9[2],LayoutEngineModule.entryDoc(UoM$1.Tag$3(name$8),(LayoutEngineModule.createTemplateM())([lytNm,name$8,$9[3],$9[0],$9[1]]))):m.$==1&&(a$14=LayoutEngineModule.Identifier(m.$0),a$14!=null&&a$14.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==3&&($10=[m.$1.$1,a$14.$0],true))))?(name$9=$10[1],LayoutEngineModule.entryDoc(UoM$1.Tag$3(name$9),(LayoutEngineModule.createConcatM())([lytNm,name$9,$10[0]]))):m.$==1&&(a$15=LayoutEngineModule.Identifier(m.$0),a$15!=null&&a$15.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==4&&(m.$1.$1.$==1&&(a$16=LayoutEngineModule.Identifier(m.$1.$1.$0),a$16!=null&&a$16.$==1&&($11=[a$16.$0,a$15.$0,m.$1.$1.$1],true))))))?(name$10=$11[1],LayoutEngineModule.entryAct(UoM$1.Tag$3(name$10),(LayoutEngineModule.createActionM())([lytNm,name$10,$11[0],$11[2]]))):m.$==1&&(a$17=LayoutEngineModule.Identifier(m.$0),a$17!=null&&a$17.$==1&&(m.$1.$==1&&(a$18=LayoutEngineModule.Vertical(m.$1.$0),a$18.$==5&&(m.$1.$1.$==1&&($12=[m.$1.$1.$0,m.$1.$1.$1,a$18.$0,a$17.$0],true)))))?(name$11=$12[3],LayoutEngineModule.entryDoc(UoM$1.Tag$3(name$11),(LayoutEngineModule.createElementM())([lytNm,name$11,$12[2],$12[0],$12[1]]))):null;
  }
  catch(e)
  {
   return null;
  }
 };
 LayoutEngineModule.entryAct=function(n,a)
 {
  return{
   $:1,
   $0:{
    $:3,
    $0:AppFramework.newActF(n,a)
   }
  };
 };
 LayoutEngineModule.entryView=function(n,w)
 {
  return{
   $:1,
   $0:{
    $:1,
    $0:AppFramework.newViw(n,w)
   }
  };
 };
 LayoutEngineModule.entryVar=function(n,v)
 {
  return{
   $:1,
   $0:{
    $:0,
    $0:AppFramework.newVar(n,v)
   }
  };
 };
 LayoutEngineModule.entryDoc=function(n,doc)
 {
  return{
   $:1,
   $0:{
    $:2,
    $0:AppFramework.newDoc(n,Lazy.Create(function()
    {
     return doc;
    }))
   }
  };
 };
 LayoutEngineModule.createActionM=function()
 {
  SC$1.$cctor();
  return SC$1.createActionM;
 };
 LayoutEngineModule.createViewM=function()
 {
  SC$1.$cctor();
  return SC$1.createViewM;
 };
 LayoutEngineModule.createVarM=function()
 {
  SC$1.$cctor();
  return SC$1.createVarM;
 };
 LayoutEngineModule.createConcatM=function()
 {
  SC$1.$cctor();
  return SC$1.createConcatM;
 };
 LayoutEngineModule.createTemplateM=function()
 {
  SC$1.$cctor();
  return SC$1.createTemplateM;
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
 LayoutEngineModule.createView=function(lytNm,viwName,parms)
 {
  return View$1.Bind(function()
  {
   var f;
   function m(a)
   {
    return a.$==1?(function($1)
    {
     return function($2)
     {
      return $1(GeneratedPrintf.p($2));
     };
    }(Global.id))(a.$0):a.$0;
   }
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
    },View$1.Map((f=function(s)
    {
     return Seq$1.map(m,s);
    },function(x)
    {
     return Arrays.ofSeq(f(x));
    }),View.traverseSeq(function(t)
    {
     return LayoutEngineModule.getTextToken(lytNm,t);
    },parms)));
   }
   catch(e)
   {
    return View$1.Const(e.message);
   }
  },LayoutEngineModule.currentViewTriggger());
 };
 LayoutEngineModule.findJSEntry=function(fname)
 {
  return Seq$1.fold(function(oO,nm)
  {
   var o;
   return oO==null?null:(o=oO.$0,!o[nm]?null:{
    $:1,
    $0:o[nm]
   });
  },{
   $:1,
   $0:Global
  },String.splitByChar(".",fname));
 };
 LayoutEngineModule.createVar=function(lytNm,varName,v)
 {
  return Var$2.Create$1(v);
 };
 LayoutEngineModule.createConcat=function(lytNm,name,docs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   return Doc.Concat(LayoutEngineModule.getAllDocs(lytNm,docs));
  });
 };
 LayoutEngineModule.createAction=function(lytNm,name,actName,parms)
 {
  var o,t,$1,$2,o$1,act,$3,f,t1,f$1,t1$1,t2,f$2,t1$2;
  o$1=(t=((LayoutEngineModule.splitName())(lytNm))(actName),AppFramework.tryGetAct(t[0],t[1]));
  if(o$1==null)
   o=null;
  else
   {
    act=o$1.$0;
    if(parms.$===0)
     $1=act.actFunction;
    else
     {
      $3=act.actFunction;
      switch($3.$==1?parms.$==1?parms.$1.$==0?($2=[$3.$0,parms.$0],0):3:3:$3.$==2?parms.$==1?parms.$1.$==0?($2=[$3.$0,$3.$2,parms.$0],2):parms.$1.$1.$==0?($2=[$3.$0,parms.$0,parms.$1.$0],1):3:3:3)
      {
       case 0:
        $1=(f=$2[0],(t1=$2[1],{
         $:0,
         $0:function()
         {
          LayoutEngineModule.getParamText(lytNm,t1,f);
         }
        }));
        break;
       case 1:
        $1=(f$1=$2[0],(t1$1=$2[1],(t2=$2[2],{
         $:0,
         $0:function()
         {
          LayoutEngineModule.getParamText(lytNm,t1$1,function(p1)
          {
           LayoutEngineModule.getParamText(lytNm,t2,f$1(p1));
          });
         }
        })));
        break;
       case 2:
        $1=(f$2=$2[0],(t1$2=$2[2],{
         $:1,
         $0:function(p2)
         {
          LayoutEngineModule.getParamText(lytNm,t1$2,function(p1)
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
            return testing_GeneratedPrintf.p$10($8);
           },$6)+" "+GeneratedPrintf.p($7));
          },4))(function(s)
          {
           console.log(s);
          }))(actName))(parms))(act);
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
  return o==null?{
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
    }))(actName));
   }
  }:o.$0;
 };
 LayoutEngineModule.getParamText=function(lytNm,token,f)
 {
  View$1.Get(function(a)
  {
   if(a.$==1)
    f(a.$0);
   else
    f(a.$0);
  },LayoutEngineModule.getTextToken(lytNm,token));
 };
 LayoutEngineModule.createTemplate=function(lytNm,name,tempName,attrs,holes)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var $1,o,attrs$1,x,x$1,s;
   attrs$1=LayoutEngineModule.getAttrs(lytNm,attrs);
   Templates.LoadLocalTemplates("local");
   function m($2,$3)
   {
    var a,a$1,id,o$1,o$2,o$3,t,o$4,t$1,a$2,txt;
    a=LayoutEngineModule.S($2);
    a$1=LayoutEngineModule.Identifier($3);
    return a$1!=null&&a$1.$==1?(id=a$1.$0,o$1=(o$2=(o$3=(t=((LayoutEngineModule.splitName())(lytNm))(id),AppFramework.tryGetDoc(t[0],t[1])),o$3==null?null:{
     $:1,
     $0:{
      $:0,
      $0:a.toLowerCase(),
      $1:(LayoutEngineModule.getDocF(List.T.Empty,o$3.$0))[0]
     }
    }),o$2==null?(o$4=(t$1=((LayoutEngineModule.splitName())(lytNm))(id),AppFramework.tryGetVar(t$1[0],t$1[1])),o$4==null?null:{
     $:1,
     $0:{
      $:8,
      $0:a.toLowerCase(),
      $1:o$4.$0.varVar
     }
    }):o$2),o$1==null?{
     $:0,
     $0:a.toLowerCase(),
     $1:AppFramework.errDoc((function($4)
     {
      return function($5)
      {
       return $4("Missing element: "+Utils.toSafe($5));
      };
     }(Global.id))(id))
    }:o$1.$0):(a$2=LayoutEngineModule.S($2),txt=LayoutEngineModule.S($3),{
     $:0,
     $0:a$2.toLowerCase(),
     $1:AppFramework.errDoc((function($4)
     {
      return function($5)
      {
       return $4("Not implemented: "+Utils.toSafe($5));
      };
     }(Global.id))(txt))
    });
   }
   function p(i,a)
   {
    return i%2===0;
   }
   try
   {
    o={
     $:1,
     $0:(x=(x$1=Seq$1.map(function($2)
     {
      return m($2[0],$2[1]);
     },Seq$1.map(function(t)
     {
      return t[1];
     },Seq$1.filter(function($2)
     {
      return p($2[0],$2[1]);
     },Seq$1.indexed(Seq$1.pairwise(holes))))),(Seq$1.isEmpty(attrs$1)?Global.id:(s=[{
      $:3,
      $0:"attrs",
      $1:AttrProxy.Concat(attrs$1)
     }],function(s$1)
     {
      return Seq$1.append(s,s$1);
     }))(x$1)),Templates.NamedTemplate("local",{
      $:1,
      $0:tempName.toLowerCase()
     },x))
    };
   }
   catch(m$1)
   {
    o=null;
   }
   return o==null?AppFramework.errDoc((function($2)
   {
    return function($3)
    {
     return $2("Missing template: "+Utils.toSafe($3));
    };
   }(Global.id))(tempName)):o.$0;
  });
 };
 LayoutEngineModule.createDoc=function(lytNm,name,docName,parms)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var o,o$1,t;
   o=(o$1=(t=((LayoutEngineModule.splitName())(lytNm))(docName),AppFramework.tryGetDoc(t[0],t[1])),o$1==null?null:{
    $:1,
    $0:LayoutEngineModule.getDocFinal(parms,o$1.$0)
   });
   return o==null?AppFramework.errDoc((function($1)
   {
    return function($2)
    {
     return $1("Missing doc: "+Utils.toSafe($2));
    };
   }(Global.id))(docName)):o.$0;
  });
 };
 LayoutEngineModule.createTextArea=function(lytNm,name,varName,attrs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var t;
   return Doc.BindView(function(a)
   {
    return a==null?AppFramework.errDoc((function($1)
    {
     return function($2)
     {
      return $1("Missing var: "+Utils.toSafe($2));
     };
    }(Global.id))(varName)):Doc.InputArea(LayoutEngineModule.getAttrs(lytNm,attrs),a.$0);
   },(t=((LayoutEngineModule.splitName())(lytNm))(varName),AppFramework.tryGetVoVW(t[0],t[1])));
  });
 };
 LayoutEngineModule.createInput=function(lytNm,name,varName,attrs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var t;
   return Doc.BindView(function(a)
   {
    return a==null?AppFramework.errDoc((function($1)
    {
     return function($2)
     {
      return $1("Missing var: "+Utils.toSafe($2));
     };
    }(Global.id))(varName)):Doc.Input(LayoutEngineModule.getAttrs(lytNm,attrs),a.$0);
   },(t=((LayoutEngineModule.splitName())(lytNm))(varName),AppFramework.tryGetVoVW(t[0],t[1])));
  });
 };
 LayoutEngineModule.createButton=function(lytNm,name,actName,attrs,a)
 {
  var text;
  text=LayoutEngineModule.S(a);
  return LayoutEngineModule.turnToView(function()
  {
   var x,o,o$1,t,$1;
   function m(act,u)
   {
    return AppFramework.callFunction(null,null,act.actFunction);
   }
   x=(o=(o$1=(t=((LayoutEngineModule.splitName())(lytNm))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
    $:1,
    $0:($1=o$1.$0,function($2)
    {
     return m($1,$2);
    })
   }),o==null?Global.ignore:o.$0);
   return Doc.Button(text,LayoutEngineModule.getAttrs(lytNm,attrs),x);
  });
 };
 LayoutEngineModule.createElement=function(lytNm,name,element,attrs,docs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var x;
   x=[Doc.Concat(LayoutEngineModule.getAllDocs(lytNm,docs))];
   return Doc.Element(element,LayoutEngineModule.getAttrs(lytNm,attrs),x);
  });
 };
 LayoutEngineModule.createSplitter=function(lytNm,name,vertical,measures,docs)
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
   return a.$==1&&(a.$1.$==0&&($1=a.$0,true))?$1:AppFramework.errDoc((function($2)
   {
    return function($3)
    {
     return $2("expected exactly 1 element "+Utils.printList(function($4)
     {
      return testing_GeneratedPrintf.p$10($4);
     },$3));
    };
   }(Global.id))(docs));
  },View$1.Map(function()
  {
   return LayoutEngineModule.getAllDocs(lytNm,docs);
  },LayoutEngineModule.currentViewTriggger())));
 };
 LayoutEngineModule.pairOfDocs=function(lytNm,docs)
 {
  var dsW;
  dsW=View$1.Map(function(a)
  {
   var $1;
   return a.$==1&&(a.$1.$==1&&(a.$1.$1.$==0&&($1=[a.$0,a.$1.$0],true)))?[$1[0],$1[1]]:[AppFramework.errDoc((function($2)
   {
    return function($3)
    {
     return $2("splitter expects exactly 2 elements "+Utils.printList(function($4)
     {
      return testing_GeneratedPrintf.p$10($4);
     },$3));
    };
   }(Global.id))(docs)),AppFramework.errDoc("part 2")];
  },View$1.Map(function()
  {
   return LayoutEngineModule.getAllDocs(lytNm,docs);
  },LayoutEngineModule.currentViewTriggger()));
  return[Doc.EmbedView(View$1.Map(function(t)
  {
   return t[0];
  },dsW)),Doc.EmbedView(View$1.Map(function(t)
  {
   return t[1];
  },dsW))];
 };
 LayoutEngineModule.getDocs_=function(lytNm,docs)
 {
  var m;
  return docs.$==0?List.T.Empty:(m=LayoutEngineModule.getOneDoc(lytNm,docs),new List.T({
   $:1,
   $0:m[0],
   $1:LayoutEngineModule.getDocs_(lytNm,m[1])
  }));
 };
 LayoutEngineModule.getOneDoc=function(lytNm,docs)
 {
  var $1,a,id,parms,p,plg,nm,o,o$1,o$2,o$3,v;
  return docs.$==1&&(a=LayoutEngineModule.Identifier(docs.$0),a!=null&&a.$==1&&($1=[a.$0,docs.$1],true))?(id=$1[0],(parms=$1[1],(p=((LayoutEngineModule.splitName())(lytNm))(id),(plg=p[0],(nm=p[1],(o=(o$1=AppFramework.tryGetDoc(plg,nm),o$1==null?null:{
   $:1,
   $0:LayoutEngineModule.getDocF(parms,o$1.$0)
  }),o==null?(o$2=(o$3=AppFramework.tryGetWoW(plg,nm),o$3==null?null:{
   $:1,
   $0:[Doc.TextView(o$3.$0),parms]
  }),o$2==null?[AppFramework.errDoc((v=(function($2)
  {
   return function($3)
   {
    return $2("Missing doc: "+Utils.toSafe($3));
   };
  }(Global.id))(id),(Library.print(v),v))),parms]:o$2.$0):o.$0)))))):docs.$==0?[Doc.get_Empty(),List.T.Empty]:[Doc.TextView(View$1.Map(function(a$1)
  {
   return a$1.$==1?(function($2)
   {
    return function($3)
    {
     return $2("Unexpected action: "+Utils.toSafe($3));
    };
   }(Global.id))(UoM$1.Untag$3(a$1.$0.actName)):a$1.$0;
  },LayoutEngineModule.getTextData(lytNm,LayoutEngineModule.S(docs.$0)))),docs.$1];
 };
 LayoutEngineModule.getAllDocs=function(lytNm,tokens)
 {
  return tokens.$==1?new List.T({
   $:1,
   $0:LayoutEngineModule.getADoc(lytNm,tokens.$0),
   $1:LayoutEngineModule.getAllDocs(lytNm,tokens.$1)
  }):List.T.Empty;
 };
 LayoutEngineModule.getADoc=function(lytNm,token)
 {
  var a,di,p,plg,nm;
  a=LayoutEngineModule.Identifier(token);
  return a!=null&&a.$==1?(di=a.$0,(p=((LayoutEngineModule.splitName())(lytNm))(di),(plg=p[0],(nm=p[1],Doc.BindView(function(a$1)
  {
   return a$1==null?Doc.BindView(function(a$2)
   {
    var v;
    return a$2==null?AppFramework.errDoc((v=(function($1)
    {
     return function($2)
     {
      return $1("Missing doc: "+Utils.toSafe($2));
     };
    }(Global.id))(di),(Library.print(v),v))):Doc.TextNode(a$2.$0);
   },AppFramework.tryGetWoWW(plg,nm)):(LayoutEngineModule.getDocF(List.T.Empty,a$1.$0))[0];
  },AppFramework.tryGetDocW(plg,nm)))))):Doc.TextView(View$1.Map(function(a$1)
  {
   return a$1.$==1?(function($1)
   {
    return function($2)
    {
     return $1("Unexpected action: "+Utils.toSafe($2));
    };
   }(Global.id))(UoM$1.Untag$3(a$1.$0.actName)):a$1.$0;
  },LayoutEngineModule.getTextData(lytNm,LayoutEngineModule.S(token))));
 };
 LayoutEngineModule.turnToView=function(f)
 {
  return Doc.EmbedView(View$1.Map(f,LayoutEngineModule.currentViewTriggger()));
 };
 LayoutEngineModule.currentViewTriggger=function()
 {
  SC$1.$cctor();
  return SC$1.currentViewTriggger;
 };
 LayoutEngineModule.set_currentViewTriggger=function($1)
 {
  SC$1.$cctor();
  SC$1.currentViewTriggger=$1;
 };
 LayoutEngineModule.getDocFinal=function(parms,doc)
 {
  var m;
  m=LayoutEngineModule.getDocF(parms,doc);
  return m[1].$==0?m[0]:AppFramework.errDoc((((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("Too many parameters "+GeneratedPrintf.p$1($2)+" "+Utils.printList(function($4)
   {
    return testing_GeneratedPrintf.p$10($4);
   },$3));
  }))(Global.id))(doc))(parms));
 };
 LayoutEngineModule.getDocF=function(parms,doc)
 {
  var $1,$2,a,a$1,a$2,a$3,a$4,a$5,a$6,a$7,a$8,a$9;
  $2=doc.docDoc;
  switch($2.$==1?parms.$==1?($1=[$2.$0,LayoutEngineModule.S(parms.$0),parms.$1],1):6:$2.$==2?parms.$==1?(a=LayoutEngineModule.S(parms.$0),parms.$1.$==1?($1=[$2.$0,a,LayoutEngineModule.S(parms.$1.$0),parms.$1.$1],2):6):6:$2.$==3?parms.$==1?(a$1=LayoutEngineModule.S(parms.$0),parms.$1.$==1?(a$2=LayoutEngineModule.S(parms.$1.$0),parms.$1.$1.$==1?($1=[$2.$0,a$1,a$2,LayoutEngineModule.S(parms.$1.$1.$0),parms.$1.$1.$1],3):6):6):6:$2.$==4?parms.$==1?(a$3=LayoutEngineModule.S(parms.$0),parms.$1.$==1?(a$4=LayoutEngineModule.S(parms.$1.$0),parms.$1.$1.$==1?(a$5=LayoutEngineModule.S(parms.$1.$1.$0),parms.$1.$1.$1.$==1?($1=[$2.$0,a$3,a$4,a$5,LayoutEngineModule.S(parms.$1.$1.$1.$0),parms.$1.$1.$1.$1],4):6):6):6):6:$2.$==5?parms.$==1?(a$6=LayoutEngineModule.S(parms.$0),parms.$1.$==1?(a$7=LayoutEngineModule.S(parms.$1.$0),parms.$1.$1.$==1?(a$8=LayoutEngineModule.S(parms.$1.$1.$0),parms.$1.$1.$1.$==1?(a$9=LayoutEngineModule.S(parms.$1.$1.$1.$0),parms.$1.$1.$1.$1.$==1?($1=[$2.$0,a$6,a$7,a$8,a$9,LayoutEngineModule.S(parms.$1.$1.$1.$1.$0),parms.$1.$1.$1.$1.$1],5):6):6):6):6):6:($1=[$2.$0,parms],0))
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
     return $3("Parameters do not coincide with definition "+GeneratedPrintf.p$1($4)+" - "+Utils.printList(function($6)
     {
      return testing_GeneratedPrintf.p$10($6);
     },$5));
    }))(Global.id))(doc))(parms))]),List.T.Empty];
  }
 };
 LayoutEngineModule.getAttrs=function(lytNm,a)
 {
  var attrs;
  attrs=LayoutEngineModule.S(a);
  return List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(Seq$1.choose(function(a$1)
   {
    var $1,value,value$1,name;
    function s(el,a$2)
    {
     var act;
     return a$2.$==1?(act=a$2.$0,el.addEventListener(Strings.Trim(name),function(ev)
     {
      return AppFramework.callFunction(el,ev,act.actFunction);
     },false)):el.setAttribute(Strings.Trim(name),Strings.Trim(a$2.$0));
    }
    return!Unchecked.Equals(a$1,null)&&a$1.length===2&&(value=Arrays.get(a$1,1),Strings.Trim(Arrays.get(a$1,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a$1,1),(name=Arrays.get(a$1,0),{
     $:1,
     $0:AttrModule.DynamicCustom(function($2)
     {
      return function($3)
      {
       return s($2,$3);
      };
     },LayoutEngineModule.getTextData(lytNm,Strings.Trim(value$1)))
    })):null;
   },Seq$1.map(function(s)
   {
    return String.splitByChar("=",s);
   },String.splitByChar(";",attrs))),Seq$1.delay(function()
   {
    return Seq$1.choose(function(a$1)
    {
     var $1,value,value$1,name,x;
     return!Unchecked.Equals(a$1,null)&&a$1.length===2&&(value=Arrays.get(a$1,1),Strings.Trim(Arrays.get(a$1,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a$1,1),(name=Arrays.get(a$1,0),{
      $:1,
      $0:(x=View$1.Map(function(a$2)
      {
       return a$2.$==1?(function($2)
       {
        return function($3)
        {
         return $2("@{"+Utils.toSafe($3)+"}");
        };
       }(Global.id))(UoM$1.Untag$3(a$2.$0.actName)):Strings.Trim(a$2.$0);
      },LayoutEngineModule.getTextData(lytNm,Strings.Trim(value$1))),AttrModule.DynamicStyle(Strings.Trim(name),x))
     })):null;
    },Seq$1.map(function(s)
    {
     return String.splitByChar(":",s);
    },String.splitByChar(";",attrs)));
   }));
  }));
 };
 LayoutEngineModule.getTextToken=function(lytNm,token)
 {
  return token.$==0?LayoutEngineModule.getTextData(lytNm,token.$0):LayoutEngineModule.getOneTextData(lytNm,token.$0,"","");
 };
 LayoutEngineModule.getTextData=function(lytNm,txt)
 {
  var o,o$1,$1,bef;
  o=(o$1=String.delimitedO("@{","}",txt),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,(bef=$1[0],LayoutEngineModule.getOneTextData(lytNm,$1[1],bef,$1[2])))
  });
  return o==null?View$1.Const({
   $:0,
   $0:txt
  }):o.$0;
 };
 LayoutEngineModule.getOneTextData=function(lytNm,name,bef,aft)
 {
  var p,plg,n;
  p=((LayoutEngineModule.splitName())(lytNm))(name);
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
      }(Global.id))(UoM$1.Untag$3(a$2.$0.actName))
     }):View$1.Const({
      $:0,
      $0:bef+txt+a$2.$0
     });
    },LayoutEngineModule.getTextData(lytNm,aft)));
   },AppFramework.tryGetWoWW(plg,n)):View$1.Const({
    $:1,
    $0:a.$0
   });
  },AppFramework.tryGetActW(plg,n));
 };
 LayoutEngineModule.splitName=function()
 {
  SC$1.$cctor();
  return SC$1.splitName;
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
  },String.splitByChar("\"",line)))));
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
      throw new MatchFailureException.New("D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src\\testing.fs",3781,38);
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
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.fixedsplitterver(p[0])),(b.i=i,i)))).get_Doc():(b$1=ProviderBuilder.Make().WithHole({
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
  }),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],testing_Templates.fixedsplitterhor(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
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
 LayoutEngineModule.Var=function(a)
 {
  var $1,$2,$3,$4,$5;
  return a.$==1&&(a.$0==="Var"&&($1=a.$0,true))?{
   $:0,
   $0:null
  }:a.$==1&&(a.$0==="Doc"&&($2=a.$0,true))?{
   $:1,
   $0:null
  }:a.$==1&&(a.$0==="View"&&($3=a.$0,true))?{
   $:2,
   $0:null
  }:a.$==1&&(a.$0==="Concat"&&($4=a.$0,true))?{
   $:3,
   $0:null
  }:a.$==1&&(a.$0==="Action"&&($5=a.$0,true))?{
   $:4,
   $0:null
  }:{
   $:5,
   $0:null
  };
 };
 LayoutEngineModule.PlugIn=function(a)
 {
  var $1,$2,$3,$4,$5;
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
  }:{
   $:5,
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
 Util.orderedList=function(l)
 {
  return Doc.Element("ol",[],[l]);
 };
 Util.newButton=function(f)
 {
  return Util.simpleButton("New",f);
 };
 Util.simpleButton=function(txt,f)
 {
  function g(v)
  {
  }
  return Doc.Button(txt,[],function(x)
  {
   return g(f(x));
  });
 };
 Util.unselectorV=function()
 {
  SC$1.$cctor();
  return SC$1.unselectorV;
 };
 Util.selectorLensGuidId=function(sel)
 {
  var f,g;
  function m(a)
  {
   return new GuidId({
    $:0,
    $0:a
   });
  }
  return(Util.selectorLens(function(v)
  {
   var c;
   c=v.get_Id();
   return Global.String(c);
  },(f=ParseO.parseGuidO(),(g=function(o)
  {
   return o==null?null:{
    $:1,
    $0:m(o.$0)
   };
  },function(x)
  {
   return g(f(x));
  }))))(sel);
 };
 Util.selectorLensGuid=function(sel)
 {
  return(Util.selectorLens(Global.String,ParseO.parseGuidO()))(sel);
 };
 Util.selectorLensInt=function(sel)
 {
  return(Util.selectorLens(Global.String,ParseO.parseIntO()))(sel);
 };
 Util.selectorLens=function(toStr,ofStrO)
 {
  function f(s)
  {
   return Util.mapVarO(toStr,ofStrO,s);
  }
  return function(x)
  {
   return Util.lensStrO(f(x));
  };
 };
 Util.mapVarO=function(toB,ofBO,sel)
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
 Util.lensStrO=function(sel)
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
 Util.textLine=function(txtW)
 {
  return Doc.Element("div",[],[Doc.TextView(txtW)]);
 };
 Util.lensFloat2Str=function(v)
 {
  var f;
  function g(a)
  {
   if(a!=null&&a.$==1)
    if(a.$0!==v.Get())
     v.Set(a.$0);
  }
  return new FromView.New(View$1.Map(function($1)
  {
   return(function($2)
   {
    return function($3)
    {
     return $2(Utils.prettyPrint($3));
    };
   }(Global.id))($1);
  },v.get_View()),(f=ParseO.parseDoubleO(),function(x)
  {
   return g(f(x));
  }));
 };
 Util.elemsUI=function(doc,addNew)
 {
  return Doc.Element("div",[],[doc,Doc.Button("New",[],addNew)]);
 };
 Util.areaLabel=function(attrs,disW,txt,_var)
 {
  return Doc.Element("div",attrs,[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[Doc.TextNode(txt)]),Doc.InputArea([AttrProxy.Create("class","form-control"),Util.disabled(disW)],Var$2.Lens(_var,Global.id,function($1,$2)
  {
   return $2;
  }))])]);
 };
 Util.inputLabel=function(attrs,disW,txt,_var)
 {
  return Doc.Element("div",attrs,[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[Doc.TextNode(txt)]),Doc.Input([AttrProxy.Create("class","form-control"),Util.disabled(disW)],_var)])]);
 };
 Util.disabled=function(disW)
 {
  return AttrModule.DynamicPred("disabled",disW,View$1.Const(""));
 };
 ListModelData=AF.ListModelData=Runtime.Class({
  get_CurrentV:function()
  {
   var $this;
   $this=this;
   return new FromView.New(this.get_CurrentW(),function(v)
   {
    var m;
    m=$this.selV.Get();
    m!=null&&m.$==1?$this.elems.ContainsKey(m.$0)?$this.elems.Append(v):void 0:void 0;
   });
  },
  get_CurrentW:function()
  {
   var f,g,v,f$1,m,o;
   return View$1.Map((f=function(o$1)
   {
    return o$1==null?null:Global.id(o$1.$0);
   },(g=(v=this.def,function(o$1)
   {
    return o$1==null?v:o$1.$0;
   }),function(x)
   {
    return g(f(x));
   })),View$1.Bind((f$1=(m=(o=this.elems,function(a)
   {
    return o.TryFindByKeyAsView(a);
   }),function(o$1)
   {
    return o$1==null?null:{
     $:1,
     $0:m(o$1.$0)
    };
   }),function(x)
   {
    return View.insertWO(f$1(x));
   }),this.selV.get_View()));
  },
  PlugIn:function(selectorLens)
  {
   var $this,b,f;
   function g(v)
   {
   }
   $this=this;
   b=AppFramework.plugin();
   return b.AddAct(b.AddAct(b.AddVar(b.AddDoc(b.Yield(),"list",Lazy.Create(function()
   {
    return $this.doc;
   })),"sel",selectorLens(this.selV)),"add",(f=this.add,function(x)
   {
    return g(f(x));
   })),"del",this.delCur);
  }
 },null,ListModelData);
 ListModelData.New=function(elems,doc,selV,add,delCur,def)
 {
  return new ListModelData({
   elems:elems,
   doc:doc,
   selV:selV,
   add:add,
   delCur:delCur,
   def:def
  });
 };
 AF.concatMainDocs=function(plugins)
 {
  return Doc.Concat(Seq$1.choose(function(a)
  {
   return a.docDoc.$==0?{
    $:1,
    $0:a.docDoc.$0.f()
   }:null;
  },Seq$1.choose(function(plg)
  {
   return Seq$1.tryHead(plg.plgDocs);
  },plugins)));
 };
 LayoutEngine$1.addLayout0=function(lyt)
 {
  var a;
  LayoutEngineModule.addLayout(lyt);
  a=UoM$1.Untag$3(lyt.lytName);
  AppFramework.mainDocV().Set(a);
 };
 ListModel$1.MapLens=function(predO,f,m)
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
 LM.addElements=function(li,elems)
 {
  li.elems.AppendMany(elems);
 };
 LM.getDoc=function(keyF,def,newF,predWO,elUI)
 {
  return LM.getDocFor(ListModel$2.Create(keyF,List.T.Empty),def,newF,predWO,elUI);
 };
 LM.getDocFor=function(elements,def,newF,predWO,elUI)
 {
  var keyF,selected0,selectedV,b,result,elUIF;
  function f(a)
  {
   var $1;
   return a!=null&&a.$==1&&(elements.ContainsKey(a.$0)&&($1=a.$0,true))?{
    $:1,
    $0:$1
   }:null;
  }
  function g(v)
  {
   if(!Unchecked.Equals(selected0.Get(),v))
    selected0.Set(v);
  }
  function _delete(k,u)
  {
   selectedV.Set(null);
   return elements.RemoveByKey(k);
  }
  keyF=elements.key;
  selected0=Var$2.Create$1(null);
  selectedV=new FromView.New((b=View$1.get_Do(),View$1.Bind(function(a)
  {
   var sel;
   return a!=null&&a.$==1?(sel=a.$0,View$1.Bind(function(a$1)
   {
    return!a$1?View$1.Const(null):View$1.Const({
     $:1,
     $0:sel
    });
   },elements.ContainsKeyAsView(sel))):View$1.Const(null);
  },selected0.get_View())),function(x)
  {
   return g(f(x));
  });
  result=ListModelData.New(elements,Doc.get_Empty(),selectedV,function()
  {
   var n;
   n=newF();
   elements.Append(n);
   selectedV.Set({
    $:1,
    $0:keyF(n)
   });
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
  return ListModelData.New(result.elems,Doc.Convert(Global.id,ListModel$1.MapLens(predWO,function(k,v)
  {
   return(elUIF(View$1.Const({
    $:1,
    $0:k
   })))(v);
  },elements)),result.selV,result.add,result.delCur,result.def);
 };
 LMX.addElements=function(li,elems)
 {
  Seq$1.iter(function(v)
  {
   li.elems.Append([(li.add())[0],v]);
  },elems);
 };
 LMX.getDocGuidId=function(def,newElem,elemUI)
 {
  var x;
  function e(a,b,v)
  {
   return LMX.elemUI2(elemUI,a,b,v);
  }
  x=LMX.addNewO(newElem,new GuidId({
   $:0,
   $0:Guid.NewGuid()
  }),function()
  {
   return new GuidId({
    $:0,
    $0:Guid.NewGuid()
   });
  });
  return LM.getDoc(function(t)
  {
   return t[0];
  },[new GuidId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  }),def],x,null,Runtime.Curried3(e));
 };
 LMX.getDocGuid=function(def,newElem,elemUI)
 {
  function e(a,b,v)
  {
   return LMX.elemUI2(elemUI,a,b,v);
  }
  return LM.getDoc(function(t)
  {
   return t[0];
  },["00000000-0000-0000-0000-000000000000",def],LMX.addNewO(newElem,Guid.NewGuid(),function()
  {
   return Guid.NewGuid();
  }),null,Runtime.Curried3(e));
 };
 LMX.getDocInt=function(def,newElem,elemUI)
 {
  function e(a,b,v)
  {
   return LMX.elemUI2(elemUI,a,b,v);
  }
  return LM.getDoc(function(t)
  {
   return t[0];
  },[-1,def],LMX.addNewO(newElem,0,function(y)
  {
   return 1+y;
  }),null,Runtime.Curried3(e));
 };
 LMX.elemUI2=function(elemUI,a,b,v)
 {
  function a$1(i,nv)
  {
   return[i,nv];
  }
  return elemUI(a,b,Var$2.Lens(v,function(t)
  {
   return t[1];
  },function($1,$2)
  {
   return(function($3)
   {
    var $4;
    $4=$3[0];
    return function($5)
    {
     return a$1($4,$5);
    };
   }($1))($2);
  }));
 };
 LMX.addNewO=function(newF,firstKey,nextKey)
 {
  var k;
  k=firstKey;
  return function()
  {
   var e;
   e=[k,newF()];
   k=nextKey(k);
   return e;
  };
 };
 SnippetTemplates.html=function()
 {
  SC$1.$cctor();
  return SC$1.html$1;
 };
 P$1.run=function(pin,p)
 {
  return AppFramework.run(pin,p.r);
 };
 NewLY.addLayout=function(lyt)
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
   $0:AppFramework.newVar(UoM$1.Tag$3("Layout"),lyt.lytDefinition)
  },{
   $:1,
   $0:AppFramework.newViw(UoM$1.Tag$3("ParseMsgs"),errorsW)
  }]);
  View$1.Sink((g$1=(l$1=lyt.lytName,function(e)
  {
   LayoutEngineModule.refreshEntries(l$1,e);
  }),function(x)
  {
   return g$1(f$2(x));
  }),defsW);
 };
 NewLY.parseNewLayout=function(lytN)
 {
  var f,g,g$1;
  function f$1(t)
  {
   return LayoutEngineModule.parseEntries(lytN,t);
  }
  function c(a)
  {
   return a.$==1?(Library.print(a.$0),null):{
    $:1,
    $0:a.$0
   };
  }
  f=(g=function(s)
  {
   return Seq$1.choose(c,s);
  },function(x)
  {
   return g(f$1(x));
  });
  g$1=NewLY.generateEntries(lytN);
  return function(x)
  {
   return g$1(f(x));
  };
 };
 NewLY.generateEntries=function(lytN)
 {
  function c($1,$2)
  {
   var x,x$1,x$2,x$3,x$4,x$5,x$6,x$7,x$8,x$9;
   return $2.$==2?{
    $:1,
    $0:{
     $:0,
     $0:(x=NewLY.defVarM(lytN,$1,$2.$0.$0),AppFramework.newVar(UoM$1.Tag$3($1),x))
    }
   }:$2.$==0?$2.$0.$==1?{
    $:1,
    $0:{
     $:2,
     $0:(x$1=(NewLY.defButtonM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2]),AppFramework.newDoc(UoM$1.Tag$3($1),x$1))
    }
   }:$2.$0.$==2?{
    $:1,
    $0:{
     $:2,
     $0:(x$2=(NewLY.defInputM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]),AppFramework.newDoc(UoM$1.Tag$3($1),x$2))
    }
   }:$2.$0.$==3?{
    $:1,
    $0:{
     $:2,
     $0:(x$3=(NewLY.defTextAreaM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]),AppFramework.newDoc(UoM$1.Tag$3($1),x$3))
    }
   }:$2.$0.$==5?{
    $:1,
    $0:{
     $:2,
     $0:(x$4=(NewLY.defConcatM())([lytN,$1,$2.$0.$0.$0]),AppFramework.newDoc(UoM$1.Tag$3($1),x$4))
    }
   }:$2.$0.$==6?{
    $:1,
    $0:{
     $:2,
     $0:(x$5=(NewLY.defElementM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2]),AppFramework.newDoc(UoM$1.Tag$3($1),x$5))
    }
   }:$2.$0.$==4?{
    $:1,
    $0:{
     $:2,
     $0:(x$6=(NewLY.defDocFM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]),AppFramework.newDocF(UoM$1.Tag$3($1),x$6))
    }
   }:{
    $:1,
    $0:{
     $:2,
     $0:(x$7=(NewLY.defSplitterM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2,$2.$0.$0.$3]),AppFramework.newDoc(UoM$1.Tag$3($1),x$7))
    }
   }:$2.$==1?{
    $:1,
    $0:{
     $:3,
     $0:(x$8=(NewLY.defActionM())([lytN,$1,$2.$0.$0,$2.$0.$1]),AppFramework.newActF(UoM$1.Tag$3($1),x$8))
    }
   }:$2.$==3?{
    $:1,
    $0:{
     $:1,
     $0:(x$9=(NewLY.defViewJSM())([lytN,$1,$2.$0.$0]),AppFramework.newViw(UoM$1.Tag$3($1),x$9))
    }
   }:null;
  }
  return function(s)
  {
   return Seq$1.choose(function($1)
   {
    return c($1[0],$1[1]);
   },s);
  };
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
 NewLY.defSplitter=function(lytN,n,v,m,a,a$1)
 {
  var l,r,b;
  l=a.$0;
  r=a$1.$0;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(Extract0.getDocFromTextTypesD(),function(a$2)
   {
    return b.Return(Lazy.Create(function()
    {
     function getDoc(d)
     {
      return AppFramework.makeAViewDoc(function()
      {
       return a$2(List.ofArray([NewLY.itemRefToTextType(d)]));
      });
     }
     return m.$==1?LayoutEngineModule.variableSplitter(v,m.$0,m.$1,m.$2,getDoc(l),getDoc(r)):LayoutEngineModule.fixedSplitter(v,m.$0,m.$1,getDoc(l),getDoc(r));
    }));
   });
  })));
 };
 NewLY.defButton=function(lytN,n,ac,attrs,tx)
 {
  return Lazy.Create(function()
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
     var o,o$1,t,x;
     function passParm($1,$2)
     {
      var a$3,f1;
      return $2.$==1?$1.$==1?(a$3=$2.$0,(f1=$1.$0,{
       $:0,
       $0:Lazy.Create(function()
       {
        return f1(a$2(a$3));
       })
      })):$1.$==2?passParm({
       $:1,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2
      },$2.$1):$1.$==3?passParm({
       $:2,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2,
       $2:$1.$3
      },$2.$1):$1.$==4?passParm({
       $:3,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2,
       $2:$1.$3,
       $3:$1.$4
      },$2.$1):$1.$==5?passParm({
       $:4,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2,
       $2:$1.$3,
       $3:$1.$4,
       $4:$1.$5
      },$2.$1):{
       $:0,
       $0:$1.$0
      }:$1;
     }
     return b.Return((o=(o$1=(t=(x=NewLY.itemRefToString(dc),((LayoutEngineModule.splitName())(a$1))(x)),AppFramework.tryGetDoc(t[0],t[1])),o$1==null?null:{
      $:1,
      $0:passParm(o$1.$0.docDoc,ds)
     }),o==null?{
      $:0,
      $0:Lazy.Create(function()
      {
       return AppFramework.errDoc((function($1)
       {
        return function($2)
        {
         return $1("Missing doc: "+testing_GeneratedPrintf.p($2));
        };
       }(Global.id))(dc));
      })
     }:o.$0));
    });
   });
  })));
 };
 NewLY.defConcat=function(lytN,n,docs)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.attrValToAttrD(),function()
   {
    return b.Bind(NewLY.nodeRefToDocD(),function(a)
    {
     return b.Return(AppFramework.makeAViewDocL(function()
     {
      return Doc.Concat(Seq$1.map(a,docs));
     }));
    });
   });
  })));
 };
 NewLY.defElement=function(lytN,n,elem,attrs,docs)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.attrValToAttrD(),function(a)
   {
    return b.Bind(NewLY.nodeRefToDocD(),function(a$1)
    {
     return b.Return(AppFramework.makeAViewDocL(function()
     {
      return Doc.Element(elem,Seq$1.map(a,attrs),Seq$1.map(a$1,docs));
     }));
    });
   });
  })));
 };
 NewLY.defTextArea=function(lytN,n,v,attrs)
 {
  return Lazy.Create(function()
  {
   return AppFramework.errDocf(function($1)
   {
    return $1("TextArea deprecated use AF.TextArea");
   });
  });
 };
 NewLY.defInput=function(lytN,n,v,attrs)
 {
  return Lazy.Create(function()
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
               return testing_GeneratedPrintf.p$11($8);
              },$6)+" "+GeneratedPrintf.p($7));
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
  return Var$2.Create$1(v);
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
 NewLY.attrValToAttrD=function()
 {
  SC$1.$cctor();
  return SC$1.attrValToAttrD;
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
  return(a.$==1?($1=a.$0.$0,false):a.$==2?($1=a.$0.$0,false):true)?{
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
 NewLY.pName=function()
 {
  SC$1.$cctor();
  return SC$1.pName;
 };
 NewLY.callDocPFn=function(pin,pf)
 {
  var f;
  f=P$1.run(pin,pf);
  return AppFramework.makeAViewDoc(function()
  {
   var m;
   m=f.f.$==0?f.p.$==1?{
    $:0,
    $0:View$1.Apply(f.f.$0,View$1.Const(f.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(f.f.$0,f.p.$0)
   }:f.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(f.f.$0),f.p.$0)
   }:{
    $:1,
    $0:f.f.$0(f.p.$0)
   };
   return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
  });
 };
 NewLY.split2=function()
 {
  SC$1.$cctor();
  return SC$1.split2;
 };
 NewLY.split=function()
 {
  SC$1.$cctor();
  return SC$1.split;
 };
 NewLY.appFwk=function()
 {
  SC$1.$cctor();
  return SC$1.appFwk;
 };
 NewLY.main2=function()
 {
  SC$1.$cctor();
  return SC$1.main2;
 };
 NewLY.main=function()
 {
  SC$1.$cctor();
  return SC$1.main;
 };
 NewLY.main1=function()
 {
  SC$1.$cctor();
  return SC$1.main1;
 };
 NewLY.main0=function()
 {
  SC$1.$cctor();
  return SC$1.main0;
 };
 NewLY.aString=function()
 {
  SC$1.$cctor();
  return SC$1.aString;
 };
 NewLY.sayHello=function()
 {
  SC$1.$cctor();
  return SC$1.sayHello;
 };
 NewLY.now=function()
 {
  SC$1.$cctor();
  return SC$1.now;
 };
 NewLY.enterName=function()
 {
  SC$1.$cctor();
  return SC$1.enterName;
 };
 NewLY.checkName=function(n)
 {
  return n===Slice.string("World",{
   $:1,
   $0:0
  },{
   $:1,
   $0:n.length-1
  })||n.length<=1?"<---- Please enter your name":"";
 };
 NewLY.name=function()
 {
  SC$1.$cctor();
  return SC$1.name;
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
 SnippetHierData.New=function(level,pos,hasChildren,visible,path,errorO)
 {
  return{
   level:level,
   pos:pos,
   hasChildren:hasChildren,
   visible:visible,
   path:path,
   errorO:errorO
  };
 };
 SaveLoad.saveAs=function()
 {
  var x;
  Global.saveAs(new Global.Blob([(x=SnippetSerialize.getModel((SnippetsUI.snippetsLM())["var"].Get(),Date.now(),SnippetsUI.collapsedV().Get()),(SnippetSerialize.serModel())[0](x))],{
   type:"text/plain;charset=utf-8"
  }),"noname.snippets");
 };
 SaveLoad.loadTextFile=function(element)
 {
  var files,reader;
  files=element.files;
  files.length>0?(reader=new Global.FileReader(),reader.onload=function(e)
  {
   var x,x$1;
   try
   {
    x=(x$1=e.target.result,(Serializer$1.deserializeWithDefs((SnippetSerialize.serModel())[0],(SnippetSerialize.serModel())[1]))(x$1));
    return(Option.iter(function(m)
    {
     SnippetsUI.snippetsLM().Set(m.snippets);
     SnippetsUI.collapsedV().Set(m.collapsed);
    }))(x);
   }
   catch(e$1)
   {
    Global.alert(Global.String(e$1));
    return(function($1)
    {
     return function($2)
     {
      return $1(Utils.prettyPrint($2));
     };
    }(function(s)
    {
     console.log(s);
    }))(e$1);
   }
  },reader.readAsText(files.item(0))):void 0;
 };
 SnippetsUI.main=function()
 {
  var x;
  x=StartAppFramework.startWithHtmlD();
  (Depend.resolver(List.ofArray([["AppFrameworkTemplate.html",AppFrameworkTemplate.html()+SnippetTemplates.html()]]),x))();
 };
 SnippetsUI.parseNewLY=function()
 {
  var x,o;
  x=SnippetsUI.currentSnippetContentV().get_View();
  View$1.Get((o=SnippetsUI.target2().lytDefinition,function(a)
  {
   o.Set(a);
  }),x);
 };
 SnippetsUI.target2=function()
 {
  SC$1.$cctor();
  return SC$1.target2;
 };
 SnippetsUI.parseW=function()
 {
  SC$1.$cctor();
  return SC$1.parseW;
 };
 SnippetsUI.indentOut=function()
 {
  View$1.Get(function(hier)
  {
   var sid,$1,res,$2,hdt,pid,newPidO,elems,m,b,a,a$1;
   sid=SnippetsUI.currentSnippetV().Get().snpId;
   $1=(res=null,hier.TryGetValue(sid,{
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
   }:null);
   $2=SnippetsUI.currentSnippetV().Get().snpParentIdO;
   $1!=null&&$1.$==1?$2!=null&&$2.$==1?(hdt=$1.$0,pid=$2.$0,newPidO=Seq$1.tryItem(Arrays.length(hdt.path)-2,hdt.path),!Unchecked.Equals({
    $:1,
    $0:pid
   },newPidO)?(Var$2.Lens(SnippetsUI.currentSnippetV(),function($3)
   {
    return $3.snpParentIdO;
   },function($3,$4)
   {
    return Snippet.New($3.snpId,$3.snpName,$3.snpContent,$4,$3.snpPredIds,$3.snpProperties,$3.snpModified);
   }).Set(newPidO),elems=Arrays.ofSeq((SnippetsUI.snippetsLM())["var"].Get()),m=function(k,i)
   {
    var res$1,m$1,m$2,shd;
    while(true)
     {
      m$1=Arrays.tryItem(i+1,elems);
      if(m$1!=null&&m$1.$==1)
       {
        m$2=(res$1=null,hier.TryGetValue(m$1.$0.snpId,{
         get:function()
         {
          return res$1;
         },
         set:function(v)
         {
          res$1=v;
         }
        })?{
         $:1,
         $0:res$1
        }:null);
        if(m$2!=null&&m$2.$==1)
         {
          shd=m$2.$0;
          if(Seq$1.contains(sid,shd.path))
           {
            k=i+1;
            i=i+1;
           }
          else
           if(Seq$1.contains(pid,shd.path))
            i=i+1;
           else
            return{
             $:1,
             $0:[k,i]
            };
         }
        else
         return null;
       }
      else
       return null;
     }
   }(hdt.pos,hdt.pos),m!=null&&m.$==1?(b=m.$0[1],a=m.$0[0],a$1=Arrays.concat([Slice.array(elems,{
    $:1,
    $0:0
   },{
    $:1,
    $0:hdt.pos-1
   }),Slice.array(elems,{
    $:1,
    $0:a+1
   },{
    $:1,
    $0:b
   }),Slice.array(elems,{
    $:1,
    $0:hdt.pos
   },{
    $:1,
    $0:a
   }),Slice.array(elems,{
    $:1,
    $0:b+1
   },null)]),SnippetsUI.snippetsLM().Set(a$1)):void 0):void 0):void 0:void 0;
  },SnippetsUI.processHierW());
 };
 SnippetsUI.indentIn=function()
 {
  View$1.Get(function(hier)
  {
   var x,k;
   x=(k=SnippetsUI.currentSnippetV().Get().snpId,function(d)
   {
    var res;
    res=null;
    return d.TryGetValue(k,{
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
   }(hier));
   (Option.iter(function(hdt)
   {
    var pidO,x$1;
    pidO=SnippetsUI.currentSnippetV().Get().snpParentIdO;
    x$1=function(i)
    {
     var snp;
     while(true)
      if(i===0)
       return null;
      else
       {
        snp=Seq$1.nth(i-1,(SnippetsUI.snippetsLM())["var"].Get());
        if(Unchecked.Equals({
         $:1,
         $0:snp.snpId
        },pidO))
         return null;
        else
         if(Unchecked.Equals(snp.snpParentIdO,pidO))
          return{
           $:1,
           $0:snp.snpId
          };
         else
          i=i-1;
       }
    }(hdt.pos);
    (Option.iter(function(pid)
    {
     Var$2.Lens(SnippetsUI.currentSnippetV(),function($1)
     {
      return $1.snpParentIdO;
     },function($1,$2)
     {
      return Snippet.New($1.snpId,$1.snpName,$1.snpContent,$2,$1.snpPredIds,$1.snpProperties,$1.snpModified);
     }).Set({
      $:1,
      $0:pid
     });
    }))(x$1);
   }))(x);
  },SnippetsUI.processHierW());
 };
 SnippetsUI.deleteSnippet=function()
 {
  View$1.Get(function(hier)
  {
   var sid,pidO,m,res,hdt,elems,a;
   sid=SnippetsUI.currentSnippetV().Get().snpId;
   pidO=SnippetsUI.currentSnippetV().Get().snpParentIdO;
   m=(res=null,hier.TryGetValue(sid,{
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
   }:null);
   m!=null&&m.$==1?(hdt=m.$0,elems=Arrays.ofSeq((SnippetsUI.snippetsLM())["var"].Get()),function(i)
   {
    var res$1,m$1,snp,m$2;
    while(true)
     {
      m$1=Arrays.tryItem(i,elems);
      if(m$1!=null&&m$1.$==1)
       {
        snp=m$1.$0;
        if(Unchecked.Equals(snp.snpParentIdO,{
         $:1,
         $0:sid
        }))
         {
          Arrays.set(elems,i,Snippet.New(snp.snpId,snp.snpName,snp.snpContent,pidO,snp.snpPredIds,snp.snpProperties,snp.snpModified));
          i=i+1;
         }
        else
         {
          m$2=(res$1=null,hier.TryGetValue(snp.snpId,{
           get:function()
           {
            return res$1;
           },
           set:function(v)
           {
            res$1=v;
           }
          })?{
           $:1,
           $0:res$1
          }:null);
          if(m$2!=null&&m$2.$==1)
          {
           if(Seq$1.contains(sid,m$2.$0.path))
            i=i+1;
           else
            return null;
          }
          else
           return null;
         }
       }
      else
       return null;
     }
   }(hdt.pos+1),a=Arrays.concat([Slice.array(elems,{
    $:1,
    $0:0
   },{
    $:1,
    $0:hdt.pos-1
   }),Slice.array(elems,{
    $:1,
    $0:hdt.pos+1
   },null)]),SnippetsUI.snippetsLM().Set(a)):void 0;
  },SnippetsUI.processHierW());
 };
 SnippetsUI.addSnippet=function()
 {
  View$1.Get(function(hier)
  {
   var elems,newS,sid,m,res,n,a;
   elems=Arrays.ofSeq((SnippetsUI.snippetsLM())["var"].Get());
   newS=SnippetsUI.snippetList().add();
   sid=SnippetsUI.currentSnippetV().Get().snpId;
   m=(res=null,hier.TryGetValue(sid,{
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
   }:null);
   m!=null&&m.$==1?(n=function(i)
   {
    var res$1,m$1,m$2;
    while(true)
     {
      m$1=Arrays.tryItem(i+1,elems);
      if(m$1!=null&&m$1.$==1)
       {
        m$2=(res$1=null,hier.TryGetValue(m$1.$0.snpId,{
         get:function()
         {
          return res$1;
         },
         set:function(v)
         {
          res$1=v;
         }
        })?{
         $:1,
         $0:res$1
        }:null);
        if(m$2!=null&&m$2.$==1)
        {
         if(Seq$1.contains(sid,m$2.$0.path))
          i=i+1;
         else
          return i;
        }
        else
         return i;
       }
      else
       return i;
     }
   }(m.$0.pos),a=Arrays.concat([Slice.array(elems,{
    $:1,
    $0:0
   },{
    $:1,
    $0:n
   }),[Snippet.New(newS.snpId,newS.snpName,newS.snpContent,SnippetsUI.currentSnippetV().Get().snpParentIdO,newS.snpPredIds,newS.snpProperties,newS.snpModified)],Slice.array(elems,{
    $:1,
    $0:n+1
   },null)]),SnippetsUI.snippetsLM().Set(a)):void 0;
  },SnippetsUI.processHierW());
 };
 SnippetsUI.monaco=function()
 {
  SC$1.$cctor();
  return SC$1.monaco;
 };
 SnippetsUI.monacoNew=function(_var)
 {
  return GenEditor.onRender(function(ged)
  {
   var x;
   x=ged.editorO;
   (Option.iter(function(ed)
   {
    var _m;
    _m=ed.getModel();
    self.monaco.editor.setModelLanguage(_m,"fsharp");
   }))(x);
   self.monaco.editor.setTheme("vs-dark");
  },MonacoGenAdapter.newVar(function()
  {
   return{};
  },function()
  {
   return{};
  },_var));
 };
 SnippetsUI.selectorLensGuidId=function(sel)
 {
  var f;
  function g(o)
  {
   return o==null?null:{
    $:1,
    $0:UoM$1.Tag$4(o.$0)
   };
  }
  return(Util.selectorLens(Global.String,(f=ParseO.parseGuidO(),function(x)
  {
   return g(f(x));
  })))(sel);
 };
 SnippetsUI.curSnp=function()
 {
  SC$1.$cctor();
  return SC$1.curSnp;
 };
 SnippetsUI.currentSnippetContentV=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetContentV;
 };
 SnippetsUI.currentSnippetNameV=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetNameV;
 };
 SnippetsUI.currentSnippetV=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetV;
 };
 SnippetsUI.snippetList=function()
 {
  SC$1.$cctor();
  return SC$1.snippetList;
 };
 SnippetsUI.wrapNothing=function(a)
 {
  return Doc.Concat;
 };
 SnippetsUI.search=function()
 {
  SC$1.$cctor();
  return SC$1.search;
 };
 SnippetsUI.calcUI$5601$44=function(k)
 {
  return function(ev)
  {
   ev.Event.preventDefault();
   View$1.Get(function(a)
   {
    var sid,x;
    if(a!=null&&a.$==1)
     {
      sid=a.$0;
      x=DragDrop.getDragNIdO(sid);
      (Option.iter(function(fr)
      {
       SnippetsUI.moveNode(fr,sid);
      }))(x);
     }
   },k);
  };
 };
 SnippetsUI.calcUI$5600$44=function(k)
 {
  return function(ev)
  {
   View$1.Get(function(a)
   {
    if(a!=null&&a.$==1)
     if(DragDrop.getDragNIdO(a.$0)!=null)
      ev.Event.preventDefault();
   },k);
  };
 };
 SnippetsUI.calcUI$5599$44=function(k)
 {
  return function(ev)
  {
   View$1.Get(function(a)
   {
    if(a!=null&&a.$==1)
     {
      DragDrop.setDragNode(a.$0);
      ev.Event.stopPropagation();
     }
   },k);
  };
 };
 SnippetsUI.calcUI$5590$44=function(snpdW,snp)
 {
  return function()
  {
   View$1.Get(function(snpd)
   {
    var a;
    if(snpd.hasChildren)
     {
      a=((SnippetsUI.collapsedV().Get().Contains(snp.Get().snpId)?function(v)
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
      })(snp.Get().snpId))(SnippetsUI.collapsedV().Get());
      SnippetsUI.collapsedV().Set(a);
     }
   },snpdW);
  };
 };
 SnippetsUI.calcUI$5584$44=function(k,lmd)
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
 SnippetsUI.calcUI=function(wrapper,allowDelete,lmd)
 {
  var indSelPredIdsW,v,prior;
  indSelPredIdsW=View$1.Map(function($1)
  {
   return(SnippetsUI.indPredIds())($1);
  },(v=View$1.Apply(View$1.Map2(function($1,$2)
  {
   return function($3)
   {
    return[$1.snpId,$2.snpParentIdO,$3.snpPredIds];
   };
  },lmd.get_CurrentV().get_View(),lmd.get_CurrentV().get_View()),lmd.get_CurrentV().get_View()),(prior=[Var$2.Create$1(null)],(View$1.Sink(function(v$1)
  {
   if(!Unchecked.Equals(prior[0].Get(),v$1))
    prior[0].Set(v$1);
  },v),prior[0].get_View()))));
  return function(k)
  {
   return function(snp)
   {
    var snpdW,b,t,t$1,t$2,t$3,t$4,p,i;
    View$1.Map(function($1)
    {
     return $1==null;
    },k);
    snpdW=View$1.Map2(function($1,$2)
    {
     var o,k$1,v$1;
     o=(k$1=$2.snpId,function(d)
     {
      var res;
      res=null;
      return d.TryGetValue(k$1,{
       get:function()
       {
        return res;
       },
       set:function(v$2)
       {
        res=v$2;
       }
      })?{
       $:1,
       $0:res
      }:null;
     }($1));
     v$1=SnippetsUI.shdDef();
     return o==null?v$1:o.$0;
    },SnippetsUI.processHierW(),snp.get_View());
    return SnippetsUI.docWrap(wrapper,(b=(t=(t$1=(t$2=(t$3=(t$4=ProviderBuilder.Make().WithHole({
     $:2,
     $0:"name",
     $1:View$1.Map2(function($1,$2)
     {
      return($1.errorO==null?Global.id:function($3)
      {
       return function($4)
       {
        return $3("!"+Utils.toSafe($4));
       };
      }(Global.id))($2.snpName);
     },snpdW,snp.get_View())
    }).WithHole({
     $:2,
     $0:"selected",
     $1:View$1.Map2(function($1,$2)
     {
      return Unchecked.Equals($1,$2)?"selected":"";
     },lmd.selV.get_View(),k)
    }).WithHole({
     $:2,
     $0:"predecessor",
     $1:View$1.Apply(View$1.Apply(View$1.Apply(View$1.Map2(function($1,$2)
     {
      return Runtime.Curried3(function($3,$4,$5)
      {
       var key;
       return $1!=null&&$1.$==1?(key=$1.$0,(Seq$1.contains(key,$2.snpPredIds)?"direct-predecessor":Seq$1.contains(key,$3)?"indirect-predecessor":Seq$1.contains(key,$4)?"included-predecessor":"")+(Unchecked.Equals($5,$1)?" codeSnippet":"")):"";
      });
     },k,lmd.get_CurrentV().get_View()),indSelPredIdsW),SnippetsUI.allCodePredIdsW()),SnippetsUI.codeSnippetIdV().get_View())
    }),t$4.WithHole(Handler.EventQ2(t$4.k,"select",function()
    {
     return t$4.i;
    },function()
    {
     var o;
     View$1.Get((o=lmd.selV,function(a)
     {
      o.Set(a);
     }),k);
    }))).WithHole({
     $:2,
     $0:"indent",
     $1:View$1.Map(function($1)
     {
      return Global.String(1.5*$1.level);
     },snpdW)
    }).WithHole({
     $:2,
     $0:"parent",
     $1:View$1.Apply(View$1.Map2(function($1,$2)
     {
      return function($3)
      {
       return $1.hasChildren?$2.Contains($3.snpId)?"collapsed":"expanded":"";
      };
     },snpdW,SnippetsUI.collapsedV().get_View()),snp.get_View())
    }),t$3.WithHole(Handler.EventQ2(t$3.k,"togglecollapse",function()
    {
     return t$3.i;
    },function()
    {
     View$1.Get(function(snpd)
     {
      var a;
      if(snpd.hasChildren)
       {
        a=((SnippetsUI.collapsedV().Get().Contains(snp.Get().snpId)?function(v$1)
        {
         return function(s)
         {
          return s.Remove(v$1);
         };
        }:function(v$1)
        {
         return function(s)
         {
          return s.Add(v$1);
         };
        })(snp.Get().snpId))(SnippetsUI.collapsedV().Get());
        SnippetsUI.collapsedV().Set(a);
       }
     },snpdW);
    }))),t$2.WithHole(Handler.EventQ2(t$2.k,"drag",function()
    {
     return t$2.i;
    },function(ev)
    {
     View$1.Get(function(a)
     {
      if(a!=null&&a.$==1)
       {
        DragDrop.setDragNode(a.$0);
        ev.Event.stopPropagation();
       }
     },k);
    }))),t$1.WithHole(Handler.EventQ2(t$1.k,"dragover",function()
    {
     return t$1.i;
    },function(ev)
    {
     View$1.Get(function(a)
     {
      if(a!=null&&a.$==1)
       if(DragDrop.getDragNIdO(a.$0)!=null)
        ev.Event.preventDefault();
     },k);
    }))),t.WithHole(Handler.EventQ2(t.k,"drop",function()
    {
     return t.i;
    },function(ev)
    {
     ev.Event.preventDefault();
     View$1.Get(function(a)
     {
      var sid,x;
      if(a!=null&&a.$==1)
       {
        sid=a.$0;
        x=DragDrop.getDragNIdO(sid);
        (Option.iter(function(fr)
        {
         SnippetsUI.moveNode(fr,sid);
        }))(x);
       }
     },k);
    }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.snippet(p[0])),(b.i=i,i)))).get_Doc());
   };
  };
 };
 SnippetsUI.moveNode=function(frid,toid)
 {
  View$1.Get(function(hier)
  {
   var $1,res,$2,res$1,$3,$4,frdt,frsn,todt,elems,n,newSn,a;
   $1=(res=null,hier.TryGetValue(frid,{
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
   }:null);
   $2=(res$1=null,hier.TryGetValue(toid,{
    get:function()
    {
     return res$1;
    },
    set:function(v)
    {
     res$1=v;
    }
   })?{
    $:1,
    $0:res$1
   }:null);
   $3=SnippetsUI.snippetsLM().TryFindByKey(frid);
   $4=SnippetsUI.snippetsLM().TryFindByKey(toid);
   $1!=null&&$1.$==1?$2!=null&&$2.$==1?$3!=null&&$3.$==1?$4!=null&&$4.$==1?(frdt=$1.$0,frsn=$3.$0,todt=$2.$0,Seq$1.contains(frid,todt.path)?void 0:(elems=Arrays.ofSeq((SnippetsUI.snippetsLM())["var"].Get()),n=function(i)
   {
    var res$2,m,m$1;
    while(true)
     {
      m=Arrays.tryItem(i+1,elems);
      if(m!=null&&m.$==1)
       {
        m$1=(res$2=null,hier.TryGetValue(m.$0.snpId,{
         get:function()
         {
          return res$2;
         },
         set:function(v)
         {
          res$2=v;
         }
        })?{
         $:1,
         $0:res$2
        }:null);
        if(m$1!=null&&m$1.$==1)
        {
         if(Seq$1.contains(frid,m$1.$0.path))
          i=i+1;
         else
          return i;
        }
        else
         return i;
       }
      else
       return i;
     }
   }(frdt.pos),newSn=Snippet.New(frsn.snpId,frsn.snpName,frsn.snpContent,$4.$0.snpParentIdO,frsn.snpPredIds,frsn.snpProperties,frsn.snpModified),a=Arrays.concat(frdt.pos<todt.pos?[Slice.array(elems,{
    $:1,
    $0:0
   },{
    $:1,
    $0:frdt.pos-1
   }),Slice.array(elems,{
    $:1,
    $0:n+1
   },{
    $:1,
    $0:todt.pos-1
   }),[newSn],Slice.array(elems,{
    $:1,
    $0:frdt.pos+1
   },{
    $:1,
    $0:n
   }),Slice.array(elems,{
    $:1,
    $0:todt.pos
   },null)]:[Slice.array(elems,{
    $:1,
    $0:0
   },{
    $:1,
    $0:todt.pos-1
   }),[newSn],Slice.array(elems,{
    $:1,
    $0:frdt.pos+1
   },{
    $:1,
    $0:n
   }),Slice.array(elems,{
    $:1,
    $0:todt.pos
   },{
    $:1,
    $0:frdt.pos-1
   }),Slice.array(elems,{
    $:1,
    $0:n+1
   },null)]),SnippetsUI.snippetsLM().Set(a))):void 0:void 0:void 0:void 0;
  },SnippetsUI.processHierW());
 };
 SnippetsUI.docWrap=function(wrapper,doc)
 {
  return(wrapper([]))([doc]);
 };
 SnippetsUI.processHierW=function()
 {
  SC$1.$cctor();
  return SC$1.processHierW;
 };
 SnippetsUI.snpIdParentsW=function()
 {
  SC$1.$cctor();
  return SC$1.snpIdParentsW;
 };
 SnippetsUI.processHier=function(snps,collapsed)
 {
  var path,collapse,dSnps,i,e;
  dSnps=new Dictionary.New$5();
  path=[];
  collapse=0;
  i=Seq$1.indexed(snps);
  e=Enumerator.Get(i);
  try
  {
   while(e.MoveNext())
    (function()
    {
     var f,sid,pidO,k,p,pid,m,j,pth,lvl,o,o$1;
     function p$1(a,spid)
     {
      return Unchecked.Equals(spid,pid);
     }
     f=e.Current();
     sid=f[1][0];
     pidO=f[1][1];
     k=f[0];
     p=pidO!=null&&pidO.$==1?(pid=pidO.$0,(m=Seq$1.tryFind(function($1)
     {
      return p$1($1[0],$1[1]);
     },Seq$1.indexed(path)),m!=null&&m.$==1?(j=m.$0[0],[j+1,Slice.array(path,{
      $:1,
      $0:0
     },{
      $:1,
      $0:j
     }),null]):[0,[],{
      $:1,
      $0:(function($1)
      {
       return function($2)
       {
        return $1("Parent not found in path "+Utils.prettyPrint($2));
       };
      }(Global.id))(pid)
     }])):[0,[],null];
     pth=p[1];
     lvl=p[0];
     dSnps.Add(sid,SnippetHierData.New(lvl,k,(o=(o$1=Seq$1.tryItem(k+1,snps),o$1==null?null:{
      $:1,
      $0:Unchecked.Equals({
       $:1,
       $0:sid
      },o$1.$0[1])
     }),o==null?false:o.$0),collapse>=lvl,pth,p[2]));
     path=pth.concat([sid]);
     return collapse>=lvl?void(collapse=collapsed.Contains(sid)?lvl:lvl+1):null;
    }());
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
  return dSnps;
 };
 SnippetsUI.shdDef=function()
 {
  SC$1.$cctor();
  return SC$1.shdDef;
 };
 SnippetsUI.allCodePredIdsW=function()
 {
  SC$1.$cctor();
  return SC$1.allCodePredIdsW;
 };
 SnippetsUI.allCodePredsW=function()
 {
  SC$1.$cctor();
  return SC$1.allCodePredsW;
 };
 SnippetsUI.indPredIds=function()
 {
  SC$1.$cctor();
  return SC$1.indPredIds;
 };
 SnippetsUI.allPredecessors=function()
 {
  SC$1.$cctor();
  return SC$1.allPredecessors;
 };
 SnippetsUI.searchFor=function()
 {
  SC$1.$cctor();
  return SC$1.searchFor;
 };
 SnippetsUI.codeSnippetIdV=function()
 {
  SC$1.$cctor();
  return SC$1.codeSnippetIdV;
 };
 SnippetsUI.collapsedV=function()
 {
  SC$1.$cctor();
  return SC$1.collapsedV;
 };
 SnippetsUI.snippetsLM=function()
 {
  SC$1.$cctor();
  return SC$1.snippetsLM;
 };
 SnippetsUI.TemplateFileName=function()
 {
  SC$1.$cctor();
  return SC$1.TemplateFileName$1;
 };
 SC$1.$cctor=function()
 {
  var f,g,t,s,x,t$1,t$2,t$3,t$4,t$5,t$6,t$7,t$8,t$9,t$10,t$11,i,x$1,t$12,t$13,t$14,t$15,t$16,t$17,i$1,b,x$2,b$1,b$2,b$3,b$4,b$5,b$6,b$7,b$8,b$9,a,b$10,a$1,b$11,p,cache,getOrAdd,p$1,cache$1,getOrAdd$1,p$2,cache$2,getOrAdd$2,p$3,cache$3,getOrAdd$3,p$4,cache$4,getOrAdd$4,p$5,cache$5,getOrAdd$5,p$6,cache$6,getOrAdd$6,p$7,cache$7,getOrAdd$7,p$8,cache$8,getOrAdd$8,p$9,cache$9,getOrAdd$9,p$10,cache$10,getOrAdd$10,x$3,b$12,pf,p$11,pf$1,p$12,sayHello_0,c,vf,a$2,vf$1,c$1,vf$2,pc,pf$2,p$13,p$14,pc$1,vf$3,p$15,c$2,c$3,c$4,c$5,c$6,c$7,c$8,c$9,c$10,vf$4,c$11,vf$5,c$12,vf$6,pc$2,vf$7,p$16,b$13,b$14,b$15,b$16,b$17,b$18,b$19,p$17,cache$11,getOrAdd$11,p$18,cache$12,getOrAdd$12,p$19,cache$13,getOrAdd$13,p$20,cache$14,getOrAdd$14,p$21,cache$15,getOrAdd$15,p$22,cache$16,getOrAdd$16,p$23,cache$17,getOrAdd$17,p$24,cache$18,getOrAdd$18,p$25,cache$19,getOrAdd$19,p$26,cache$20,getOrAdd$20,v,prior,b$20,b$21,b$22,i$2,f$1,g$1,b$23;
  SC$1.$cctor=Global.ignore;
  function g$2(s$1)
  {
   return Strings.concat("\n",s$1);
  }
  function f$2(s$1)
  {
   return String.splitByChar("\n",s$1);
  }
  function g$3(s$1)
  {
   var a$4,b$24;
   return Slice.array(s$1,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$4=0,(b$24=Arrays.length(s$1)-2,Unchecked.Compare(a$4,b$24)===1?a$4:b$24))
   });
  }
  function g$4(s$1)
  {
   return Strings.concat("\n",s$1);
  }
  function f$3(s$1)
  {
   return s$1+"T00:00:00";
  }
  function a$3(a$4)
  {
   var f$8;
   function b$24(a$5)
   {
    return AppFramework.plugIns().TryFindByKey(a$5);
   }
   function g$6(o)
   {
    return o==null?AppFramework.defaultPlugIn():o.$0;
   }
   f$8=function(o)
   {
    return o==null?null:b$24(o.$0);
   };
   return function(x$4)
   {
    return g$6(f$8(x$4));
   };
  }
  function f$4(extractAts,extractDoc)
  {
   return function(attrs)
   {
    return function(labelName)
    {
     function f$8(_var)
     {
      return Doc.Element("div",extractAts(attrs),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[extractDoc(labelName)]),Doc.Input([AttrProxy.Create("class","form-control")],_var)])]);
     }
     return function(v$1)
     {
      return AppFramework.docWithVar(f$8,v$1);
     };
    };
   };
  }
  function f$5(extractAts,attrs)
  {
   var f$8,a$4;
   f$8=(a$4=extractAts(attrs),function(a$5)
   {
    return Doc.Input(a$4,a$5);
   });
   return function(v$1)
   {
    return AppFramework.docWithVar(f$8,v$1);
   };
  }
  function f$6(extractAts,attrs)
  {
   var f$8,a$4;
   f$8=(a$4=extractAts(attrs),function(a$5)
   {
    return Doc.InputArea(a$4,a$5);
   });
   return function(v$1)
   {
    return AppFramework.docWithVar(f$8,v$1);
   };
  }
  function checkO(v$1)
  {
   var res;
   res=null;
   return cache.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store(v$1,res)
  {
   cache.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$21(p$27,f$8)
  {
   var o;
   o=checkO(p$27);
   return o==null?store(p$27,f$8(p$27)):o.$0;
  }
  function checkO$1(v$1)
  {
   var res;
   res=null;
   return cache$1.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$1(v$1,res)
  {
   cache$1.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$22(p$27,f$8)
  {
   var o;
   o=checkO$1(p$27);
   return o==null?store$1(p$27,f$8(p$27)):o.$0;
  }
  function checkO$2(v$1)
  {
   var res;
   res=null;
   return cache$2.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$2(v$1,res)
  {
   cache$2.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$23(p$27,f$8)
  {
   var o;
   o=checkO$2(p$27);
   return o==null?store$2(p$27,f$8(p$27)):o.$0;
  }
  function checkO$3(v$1)
  {
   var res;
   res=null;
   return cache$3.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$3(v$1,res)
  {
   cache$3.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$24(p$27,f$8)
  {
   var o;
   o=checkO$3(p$27);
   return o==null?store$3(p$27,f$8(p$27)):o.$0;
  }
  function checkO$4(v$1)
  {
   var res;
   res=null;
   return cache$4.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$4(v$1,res)
  {
   cache$4.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$25(p$27,f$8)
  {
   var o;
   o=checkO$4(p$27);
   return o==null?store$4(p$27,f$8(p$27)):o.$0;
  }
  function checkO$5(v$1)
  {
   var res;
   res=null;
   return cache$5.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$5(v$1,res)
  {
   cache$5.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$26(p$27,f$8)
  {
   var o;
   o=checkO$5(p$27);
   return o==null?store$5(p$27,f$8(p$27)):o.$0;
  }
  function checkO$6(v$1)
  {
   var res;
   res=null;
   return cache$6.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$6(v$1,res)
  {
   cache$6.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$27(p$27,f$8)
  {
   var o;
   o=checkO$6(p$27);
   return o==null?store$6(p$27,f$8(p$27)):o.$0;
  }
  function checkO$7(v$1)
  {
   var res;
   res=null;
   return cache$7.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$7(v$1,res)
  {
   cache$7.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$28(p$27,f$8)
  {
   var o;
   o=checkO$7(p$27);
   return o==null?store$7(p$27,f$8(p$27)):o.$0;
  }
  function checkO$8(v$1)
  {
   var res;
   res=null;
   return cache$8.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$8(v$1,res)
  {
   cache$8.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$29(p$27,f$8)
  {
   var o;
   o=checkO$8(p$27);
   return o==null?store$8(p$27,f$8(p$27)):o.$0;
  }
  function checkO$9(v$1)
  {
   var res;
   res=null;
   return cache$9.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$9(v$1,res)
  {
   cache$9.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$30(p$27,f$8)
  {
   var o;
   o=checkO$9(p$27);
   return o==null?store$9(p$27,f$8(p$27)):o.$0;
  }
  function checkO$10(v$1)
  {
   var res;
   res=null;
   return cache$10.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$10(v$1,res)
  {
   cache$10.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$31(p$27,f$8)
  {
   var o;
   o=checkO$10(p$27);
   return o==null?store$10(p$27,f$8(p$27)):o.$0;
  }
  function checkO$11(v$1)
  {
   var res;
   res=null;
   return cache$11.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$11(v$1,res)
  {
   cache$11.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$32(p$27,f$8)
  {
   var o;
   o=checkO$11(p$27);
   return o==null?store$11(p$27,f$8(p$27)):o.$0;
  }
  function checkO$12(v$1)
  {
   var res;
   res=null;
   return cache$12.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$12(v$1,res)
  {
   cache$12.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$33(p$27,f$8)
  {
   var o;
   o=checkO$12(p$27);
   return o==null?store$12(p$27,f$8(p$27)):o.$0;
  }
  function checkO$13(v$1)
  {
   var res;
   res=null;
   return cache$13.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$13(v$1,res)
  {
   cache$13.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$34(p$27,f$8)
  {
   var o;
   o=checkO$13(p$27);
   return o==null?store$13(p$27,f$8(p$27)):o.$0;
  }
  function checkO$14(v$1)
  {
   var res;
   res=null;
   return cache$14.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$14(v$1,res)
  {
   cache$14.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$35(p$27,f$8)
  {
   var o;
   o=checkO$14(p$27);
   return o==null?store$14(p$27,f$8(p$27)):o.$0;
  }
  function checkO$15(v$1)
  {
   var res;
   res=null;
   return cache$15.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$15(v$1,res)
  {
   cache$15.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$36(p$27,f$8)
  {
   var o;
   o=checkO$15(p$27);
   return o==null?store$15(p$27,f$8(p$27)):o.$0;
  }
  function checkO$16(v$1)
  {
   var res;
   res=null;
   return cache$16.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$16(v$1,res)
  {
   cache$16.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$37(p$27,f$8)
  {
   var o;
   o=checkO$16(p$27);
   return o==null?store$16(p$27,f$8(p$27)):o.$0;
  }
  function checkO$17(v$1)
  {
   var res;
   res=null;
   return cache$17.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$17(v$1,res)
  {
   cache$17.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$38(p$27,f$8)
  {
   var o;
   o=checkO$17(p$27);
   return o==null?store$17(p$27,f$8(p$27)):o.$0;
  }
  function checkO$18(v$1)
  {
   var res;
   res=null;
   return cache$18.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$18(v$1,res)
  {
   cache$18.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$39(p$27,f$8)
  {
   var o;
   o=checkO$18(p$27);
   return o==null?store$18(p$27,f$8(p$27)):o.$0;
  }
  function checkO$19(v$1)
  {
   var res;
   res=null;
   return cache$19.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$19(v$1,res)
  {
   cache$19.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$40(p$27,f$8)
  {
   var o;
   o=checkO$19(p$27);
   return o==null?store$19(p$27,f$8(p$27)):o.$0;
  }
  function checkO$20(v$1)
  {
   var res;
   res=null;
   return cache$20.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$20(v$1,res)
  {
   cache$20.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$41(p$27,f$8)
  {
   var o;
   o=checkO$20(p$27);
   return o==null?store$20(p$27,f$8(p$27)):o.$0;
  }
  function t$18(a$4)
  {
   return SnippetsUI.snippetsLM().TryFindByKey(a$4);
  }
  function t$19(a$4)
  {
   return SnippetsUI.snippetsLM().TryFindByKey(a$4);
  }
  function f$7(t$20)
  {
   return LayoutEngineModule.parseEntries("lytTarget",t$20);
  }
  function c$13(a$4)
  {
   return a$4.$==1?{
    $:1,
    $0:a$4.$0
   }:null;
  }
  function g$5(s$1)
  {
   return Strings.concat("\n",s$1);
  }
  SC$1.rtn=function(v$1)
  {
   return[v$1];
  };
  SC$1.state=new CEBuilder.New();
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.resultP=new BuilderP.New();
  SC$1.depend=new DependBuilder.New();
  SC$1.rtn$1=Depend.rtn;
  SC$1.depend$1=Depend.depend();
  SC$1.resultM=new Builder$1.New();
  SC$1.asyncResultM=new AsyncResultMBuilder.New();
  SC$1.unindentStr=function(x$4)
  {
   return g$2(String.unindent(x$4));
  };
  SC$1.skipLastLine=(f=function(x$4)
  {
   return g$3(f$2(x$4));
  },function(x$4)
  {
   return g$4(f(x$4));
  });
  SC$1.parseDateO2=(g=ParseO.tryParseWith(function(a$4)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a$4),m!=null&&m.$==1&&(o=m.$0,true)),o];
  }),function(x$4)
  {
   return g(f$3(x$4));
  });
  SC$1.parseDateO=ParseO.tryParseWith(function(a$4)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a$4),m!=null&&m.$==1&&(o=m.$0,true)),o];
  });
  SC$1.parseIntO=ParseO.tryParseWith(function(a$4)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt32(a$4,{
    get:function()
    {
     return o;
    },
    set:function(v$1)
    {
     o=v$1;
    }
   }),o];
  });
  SC$1.parseInt64O=ParseO.tryParseWith(function(a$4)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt64(a$4,{
    get:function()
    {
     return o;
    },
    set:function(v$1)
    {
     o=v$1;
    }
   }),o];
  });
  SC$1.parseSingleO=ParseO.tryParseWith(function(a$4)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a$4),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith(function(a$4)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a$4),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseGuidO=ParseO.tryParseWith(function(a$4)
  {
   var o;
   o=null;
   return[Guid.TryParse(a$4,{
    get:function()
    {
     return o;
    },
    set:function(v$1)
    {
     o=v$1;
    }
   }),o];
  });
  SC$1["|Date|_|"]=ParseO.parseDateO();
  SC$1["|Int|_|"]=ParseO.parseIntO();
  SC$1["|Int64|_|"]=ParseO.parseInt64O();
  SC$1["|Single|_|"]=ParseO.parseSingleO();
  SC$1["|Double|_|"]=ParseO.parseDoubleO();
  SC$1["|Guid|_|"]=ParseO.parseGuidO();
  SC$1.serString=[Serializer.toJsonString,function(j)
  {
   return j.tryString();
  }];
  SC$1.serFloat=[function(v$1)
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(v$1);
  },function(j)
  {
   return j.tryFloat();
  }];
  SC$1.serInt=[function(v$1)
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(v$1);
  },function(j)
  {
   var o;
   o=j.tryInt();
   return o==null?null:{
    $:1,
    $0:Operators$5.toInt(o.$0)
   };
  }];
  SC$1.serInt64=[Global.String,function(j)
  {
   return j.tryInt();
  }];
  SC$1.serBool=[function(v$1)
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(v$1);
  },function(j)
  {
   return j.tryBool();
  }];
  SC$1.serDate=[function(x$4)
  {
   return Global.String(Global.id(x$4));
  },function(j)
  {
   var o;
   o=j.tryInt();
   return o==null?null:{
    $:1,
    $0:o.$0
   };
  }];
  SC$1.serTypedRegisters=new Dictionary.New$5();
  SC$1.serGuid=(t=Serializer.serString(),Serializer.mapO(Global.String,ParseO.parseGuidO(),t[0],t[1]));
  SC$1.defaultSnippet=Snippet.New(UoM$1.Tag$4("00000000-0000-0000-0000-000000000000"),"","",null,new FSharpSet.New$1(null),[],(new Date(0)).getTime());
  SC$1.serSnippetId=(s="SnippetId",[function(gid)
  {
   var x$4;
   x$4=Global.String(UoM$1.Untag$4(gid));
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("{"+Utils.prettyPrint($2)+" :"+Utils.prettyPrint($3)+"}");
   }))(Global.id))(s))(x$4);
  },function(j)
  {
   var o,o$1,o$2,f$8;
   o=(o$1=(o$2=j.tryField(s),o$2==null?null:o$2.$0.tryString()),(f$8=ParseO.parseGuidO(),o$1==null?null:f$8(o$1.$0)));
   return o==null?null:{
    $:1,
    $0:UoM$1.Tag$4(o.$0)
   };
  }]);
  SC$1.serSnippet=(x=[(t$1=SnippetSerialize.serSnippetId(),Serializer.serField("snpId",function(s$1)
  {
   return s$1.snpId;
  },function(v$1,s$1)
  {
   return Snippet.New(v$1,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$1[0],t$1[1])),(t$2=Serializer.serString(),Serializer.serField("snpName",function(s$1)
  {
   return s$1.snpName;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,v$1,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$2[0],t$2[1])),(t$3=Serializer.serString(),Serializer.serField("snpContent",function(s$1)
  {
   return s$1.snpContent;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,v$1,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$3[0],t$3[1])),(t$4=(t$5=SnippetSerialize.serSnippetId(),Serializer.serOpt(t$5[0],t$5[1])),Serializer.serField("snpParentIdO",function(s$1)
  {
   return s$1.snpParentIdO;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,v$1,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$4[0],t$4[1])),(t$6=(t$7=SnippetSerialize.serSnippetId(),Serializer.serSet(t$7[0],t$7[1])),Serializer.serField("snpPredIds",function(s$1)
  {
   return s$1.snpPredIds;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,v$1,s$1.snpProperties,s$1.snpModified);
  },t$6[0],t$6[1])),(t$8=(t$9=Serializer.serDup(Serializer.serString(),Serializer.serString()),Serializer.serArr(t$9[0],t$9[1])),Serializer.serField("snpProperties",function(s$1)
  {
   return s$1.snpProperties;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,v$1,s$1.snpModified);
  },t$8[0],t$8[1])),(t$10=Serializer.serInt(),Serializer.serFieldO("snpGeneration",function()
  {
   return null;
  },function(vO,s$1)
  {
   return vO!=null&&vO.$==1?Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,(new Date(0)).getTime()+vO.$0*3600000):s$1;
  },t$10[0],t$10[1])),(t$11=Serializer.serDate(),Serializer.serField("snpModified",function(s$1)
  {
   return s$1.snpModified;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,v$1);
  },t$11[0],t$11[1]))],(i=SnippetModule.New("","",null),[function(rc)
  {
   var x$4;
   function c$14(n,ser,_deser)
   {
    var x$5,m;
    x$5=ser(rc);
    m=((Runtime.Curried3(function($1,$2,$3)
    {
     return $1(Utils.prettyPrint($2)+": "+Utils.toSafe($3));
    }))(Global.id))(n);
    return x$5==null?null:{
     $:1,
     $0:m(x$5.$0)
    };
   }
   x$4=Strings.concat(", ",Seq$1.choose(function($1)
   {
    return c$14($1[0],$1[1],$1[2]);
   },x));
   return(function($1)
   {
    return function($2)
    {
     return $1("{"+Utils.toSafe($2)+"}");
    };
   }(Global.id))(x$4);
  },function(j)
  {
   return{
    $:1,
    $0:Seq$1.fold(function(rc,t$20)
    {
     var x$4;
     x$4=j.tryField(t$20[0]);
     return(t$20[2](rc))(x$4);
    },i,x)
   };
  }]));
  SC$1.serModel=(x$1=[(t$12=(t$13=SnippetSerialize.serSnippet(),Serializer.serArr(t$13[0],t$13[1])),Serializer.serField("snippets",function(m)
  {
   return m.snippets;
  },function(v$1,m)
  {
   return Model.New(v$1,m.modified,m.collapsed);
  },t$12[0],t$12[1])),(t$14=Serializer.serInt(),Serializer.serFieldO("generation",function()
  {
   return null;
  },function(vO,m)
  {
   return vO!=null&&vO.$==1?Model.New(m.snippets,(new Date(0)).getTime()+vO.$0*3600000,m.collapsed):m;
  },t$14[0],t$14[1])),(t$15=Serializer.serDate(),Serializer.serField("modified",function(m)
  {
   return m.modified;
  },function(v$1,m)
  {
   return Model.New(m.snippets,v$1,m.collapsed);
  },t$15[0],t$15[1])),(t$16=(t$17=SnippetSerialize.serSnippetId(),Serializer.serSet(t$17[0],t$17[1])),Serializer.serField("collapsed",function(m)
  {
   return m.collapsed;
  },function(v$1,m)
  {
   return Model.New(m.snippets,m.modified,v$1);
  },t$16[0],t$16[1]))],(i$1=Model.New([],(new Date(0)).getTime(),new FSharpSet.New$1(null)),[function(rc)
  {
   var x$4;
   function c$14(n,ser,_deser)
   {
    var x$5,m;
    x$5=ser(rc);
    m=((Runtime.Curried3(function($1,$2,$3)
    {
     return $1(Utils.prettyPrint($2)+": "+Utils.toSafe($3));
    }))(Global.id))(n);
    return x$5==null?null:{
     $:1,
     $0:m(x$5.$0)
    };
   }
   x$4=Strings.concat(", ",Seq$1.choose(function($1)
   {
    return c$14($1[0],$1[1],$1[2]);
   },x$1));
   return(function($1)
   {
    return function($2)
    {
     return $1("{"+Utils.toSafe($2)+"}");
    };
   }(Global.id))(x$4);
  },function(j)
  {
   return{
    $:1,
    $0:Seq$1.fold(function(rc,t$20)
    {
     var x$4;
     x$4=j.tryField(t$20[0]);
     return(t$20[2](rc))(x$4);
    },i$1,x$1)
   };
  }]));
  SC$1.counter=1;
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
  SC$1.layoutHorizontal=Runtime.Curried(function($1,$2,$3,$4,$5)
  {
   return Doc.get_Empty();
  },5);
  SC$1.layoutVertical=Runtime.Curried(function($1,$2,$3,$4,$5)
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
  SC$1.html="\r\n            <div style=\"display:none\" >\r\n                <div links>\r\n                    <link href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" type=\"text/css\" rel=\"stylesheet\">\r\n                    <script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"  type=\"text/javascript\"></script>\r\n                </div>\r\n                <div ws-template=\"AppFramework\" style=\"height: calc(100vh - 4px); width: calc(100vw - 4px) \" class=\"relative\" >\r\n                    <div ws-hole=\"MainClient\"></div>\r\n                    <div class=\"AppFrameworkGo\"><button ws-onclick=\"GoClient\">${MainDoc}</button></div>\r\n                </div>\r\n                <style>\r\n                    .AppFrameworkGo {\r\n                        max-width: 2px;\r\n                        max-height: 2px;\r\n                        z-index: 4000;\r\n                        overflow: hidden;\r\n                        position: fixed;\r\n                        top: 0px;\r\n                        left: 0px;\r\n                    }\r\n                </style>\r\n                <div ws-template=\"FixedSplitterVer\" \r\n                    style=\"display: grid; \r\n                           grid-gap: 0px; \r\n                           box-sizing: border-box; \r\n                           height: 100%;\r\n                           width : 100%;\r\n                           grid-template-areas: 'one two'; \r\n                           grid-template-rows   :100%; \r\n                           overflow: hidden; \r\n                           grid-template-columns: ${PartSizes}\"  >\r\n                   <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n                   <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"FixedSplitterHor\" \r\n               style=\"display: grid; \r\n                      grid-gap: 0px; \r\n                      box-sizing: border-box; \r\n                      height: 100%;\r\n                      width : 100%;\r\n                      grid-template-areas: 'one' 'two'; \r\n                      grid-template-columns:100%; \r\n                      overflow: hidden; \r\n                      grid-template-rows   : ${PartSizes}\"  >\r\n              <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n              <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"WCompSplitterHor\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid;\r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one' 'two'; \r\n                            grid-template-columns:100%; \r\n                            overflow: hidden; \r\n                            grid-template-rows   : ${PartSizes}\" \r\n                     >\r\n                     <slot></slot>\r\n                    <slot name=\"splitter\">  <div style=\"grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-row:2; grid-column:1 / 1 ; \r\n                            cursor: row-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            height: ${Gap}; \r\n                            margin-top :-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>        \r\n                <div ws-template=\"WCompSplitterVer\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid; \r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one two'; \r\n                            grid-template-rows   :100%; \r\n                            overflow: hidden; \r\n                            grid-template-columns: ${PartSizes}\"  >\r\n                    <slot></slot>\r\n                    <slot name=\"splitter\"> <div style=\"grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-column:2; grid-row:1 / 1\r\n                            cursor: column-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            width: ${Gap}; \r\n                            margin-left:-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>\r\n                <div ws-template=\"AppFwkClient\" >\r\n                    <ws-FixedSplitterHor>\r\n                        <PartSizes>55px calc(100% - 55px)</PartSizes>\r\n                        <First>\r\n                            <span style=\"display: grid;\r\n                                  grid-template-columns: 30% 20% 20% 10%;\r\n                                  grid-gap: 25px;\r\n                                \">\r\n                                <div class=\"mainTitle\">AppFramework</div>\r\n                            </span>\r\n                        </First>\r\n                        <Second>\r\n                                <ws-FixedSplitterVer>\r\n                                    <PartSizes>calc(100% - 150px) 150px</PartSizes>\r\n                                    <First>\r\n                                        <wcomp-splitter vertical value=\"18\" max=\"100\">\r\n                                            <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\" >\r\n                                                <div ws-template=\"Tile\">\r\n                                                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                                                    ws-ondrag=\"Drag\"\r\n                                                    ws-ondragover=\"DragOver\"\r\n                                                    ws-ondrop=\"Drop\"\r\n                                                   >\r\n                                                   <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                                                   <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                                                   <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                                               </div>\r\n                                       \r\n                                                </div>\r\n                                            </div></div>\r\n                                            <wcomp-splitter vertical value=\"100\" min=\"30\" max=\"100\">\r\n                                                <ws-FixedSplitterHor>\r\n                                                    <PartSizes>32px calc(100% - 32px)</PartSizes>\r\n                                                    <First>\r\n                                                        <div>\r\n                                                            <div class=\"input-group\">\r\n                                                                <span class=\"input-group-addon\">name:</span>\r\n                                                                <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </First>\r\n                                                    <Second>\r\n                                                        <div style=\"overflow:auto\">\r\n                                                            <div>\r\n                                                                <div>Docs:</div>\r\n                                                                <div ws-hole=\"Docs\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Views:</div>\r\n                                                                <div ws-hole=\"Views\" style=\"overflow:auto\" >\r\n                                                                    <div ws-template=\"NameValue\" class=\"input-group\">\r\n                                                                        <span class=\"input-group-addon\">${Name}:</span>\r\n                                                                        <span class=\"input-group-addon\">${Value}</span>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Queries:</div>\r\n                                                                <div ws-hole=\"Queries\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Vars:</div>\r\n                                                                <div ws-hole=\"Vars\" style=\"overflow:auto\" >\r\n                                                                    <div ws-template=\"NameValueInput\" class=\"input-group\">\r\n                                                                        <span class=\"input-group-addon\">${Name}:</span>\r\n                                                                        <textarea class=\"form-control\" id=\"\" placeholder=\"Value...\" ws-var=\"Value\" spellcheck=\"false\">\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </Second>\r\n                                                </ws-FixedSplitterHor>\r\n                                                <wcomp-tabstrip >\r\n                                                    <div tabname=\"Properties\">\r\n                                                        <div>\r\n                                                            <table style=\"border-spacing:0px\">\r\n                                                                <thead>\r\n                                                                    <th style=\"width: 30%  \">Name</th>\r\n                                                                    <th style=\"width: 70% \">Value</th>\r\n                                                                </thead>\r\n                                                                <tbody ws-hole=\"Properties\" ws-children-template=\"Property\">\r\n                                                                    <tr ws-onclick=\"Select\" style=\"margin-bottom: 2px\" class=\"level  \">\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <input ws-var=\"Name\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Property...\">\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <textarea ws-var=\"Value\" class=\"form-control\" id=\"\" placeholder=\"Value...\"></textarea>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div style=\" cursor: pointer \" title=\"remove\">\r\n                                                                                <button ws-onclick=\"Remove\" class=\"delete is-small\">x</button>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </wcomp-tabstrip>\r\n                                            </wcomp-splitter>\r\n                                        </wcomp-splitter>\r\n                                    </First>\r\n                                    <Second>\r\n                                        <div style=\"\r\n                                            overflow: hidden;\r\n                                            display: grid;\r\n                                            grid-template-columns: 100%;\r\n                                            grid-template-rows: repeat(15, calc(100% / 15));\r\n                                            bxackground-color: #eee;\r\n                                            box-sizing: border-box;\r\n                                            padding : 5px;\r\n                                            grid-gap: 5px;\r\n                                            margin-right: 21px;\r\n                                       \"  class=\"absolute\" ws-hole=\"Actions\" >\r\n                                            <button ws-template=\"Action\"         ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\"          >${Name}</button>\r\n                                            <button ws-template=\"ActionDisabled\" ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\" disabled >${Name}</button>\r\n                                        </div>\r\n                                    </Second>\r\n                                </ws-FixedSplitterVer>\r\n                        </Second>\r\n                    </ws-FixedSplitterHor>\r\n                </div>\r\n                <style style=\"display: none\">\r\n                        .Hidden     { display   : none         }\r\n                        table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                        td input.form-control { \r\n                            padding    : 0px; \r\n                            font-family: monospace;\r\n                            font-size  :   small;\r\n                            margin-top :   0px;\r\n                            margin-left: -2px;\r\n                            width      : 100%\r\n                        }\r\n                        td select {\r\n                            font-size : smaller;\r\n                            max-width : 8ch;\r\n                        }\r\n                        xtextarea {\r\n                           resize : none;\r\n                        }\r\n                        .tab-content {\r\n                            overflow: hidden\r\n                        }\r\n                        .tab-children {\r\n                            position:relative;\r\n                        }\r\n                        .tab-children>div>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        .relative {\r\n                            position:relative;\r\n                        }\r\n                        .relative>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                        table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                        table.table-striped    tbody input              { background: transparent; border: none}\r\n                        table.table-striped    tbody select             { background: transparent; border: none}\r\n                        table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                        table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                        table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                        table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                        table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                        table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                                   border-bottom: solid thin blue     ; } \r\n                        table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                        table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                        thead { color: gray }\r\n                        h3 { \r\n                            color: gray;\r\n                            line-height: 1em;\r\n                        }\r\n                        button       { border: solid thin transparent ; border-radius: 3px; }\r\n                        button:hover { border: solid thin blue }\r\n                        .indenter { position  : absolute; \r\n                                    top:0px; bottom:0px; left:0px; \r\n                                    background: white; color:white;\r\n                                    border-right: gray thin dotted;\r\n                                    }\r\n                        body {\r\n                            color      : #333;\r\n                            font-size  : small;\r\n                            font-family: monospace;\r\n                            line-height: 1.2;\r\n                        }\r\n                        .mainTitle {  \r\n                            font-size: 48px;\r\n                            font-weight: 500;\r\n                            color: gray;\r\n                            margin-top: -12px;\r\n                        }\r\n                        .CodeMirror {\r\n                            height: 100%;\r\n                        }\r\n                        \r\n                      \r\n                        body { margin: 0px }     \r\n                             \r\n                        div textarea {\r\n                            font-family     : monospace;\r\n                        }\r\n                        .code-editor-list-tile {\r\n                            white-space     : nowrap; \r\n                            border-style    : solid none none;\r\n                            border-color    : white;\r\n                            border-width    : 1px;\r\n                            background-color: #D8D8D8;\r\n                            display         : flex;\r\n                        }\r\n                        .code-editor-list-text{\r\n                            padding         : 1px 10px 1px 5px;\r\n                            overflow        : hidden;\r\n                            text-overflow   : ellipsis;\r\n                            white-space     : nowrap;\r\n                            flex            : 1;\r\n                        }\r\n                        \r\n                        .code-editor-list-tile span.node.ErrorMsg {\r\n                            background-color: red\r\n                        }\r\n                        .code-editor-list-tile span.node.expanded::before {\r\n                            content: \"-\"\r\n                        }\r\n                        .code-editor-list-tile span.node.collapsed::before {\r\n                            content: \"+\"\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor {\r\n                            font-weight     : bold;\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.indirect-predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.included-predecessor {\r\n                            color           : chocolate;\r\n                        }\r\n                        .code-editor-list-tile.selected {\r\n                            background-color: #77F;\r\n                            color           : white;\r\n                        }\r\n                        .code-editor-list-tile.codeSnippet {\r\n                            text-decoration: underline\r\n                        }\r\n                        .code-editor-list-tile:hover {\r\n                            background      : lightgray;\r\n                        }\r\n                        .code-editor-list-tile.selected:hover {\r\n                            background      : blue;\r\n                        }\r\n                        .code-editor-list-tile>.predecessor {\r\n                            font-weight     : bold;\r\n                            border-style    : inset;\r\n                            border-width    : 1px;\r\n                            text-align      : center;\r\n                            color           : transparent;\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        \r\n                        .CodeMirror { height: 100%; }\r\n                        \r\n                        .node {\r\n                            background-color: white; \r\n                            width           : 2ch; \r\n                            color           : #A03; \r\n                            font-weight     : bold; \r\n                            text-align      : center;\r\n                            font-family     : arial;\r\n                        }\r\n                        .Warning { text-decoration: underline lightblue } \r\n                        .Error   { text-decoration: underline red       } \r\n                        \r\n                    </style>\r\n            </div>\r\n            ";
  SC$1.plugIns=new ListModel$2.New$1(function(plg)
  {
   return plg.plgName;
  });
  SC$1.mainDocV=Var$2.Create$1("AppFramework.AppFwkClient");
  SC$1.TemplateFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\LayoutEngine\\website\\AppFramework.html";
  SC$1.selectionPlugInO=Var$2.Create$1({
   $:1,
   $0:UoM$1.Tag$3("AppFramework")
  });
  SC$1.currentPlugInW=(x$2=AppFramework.selectionPlugInO().get_View(),View$1.Map2(function($1,$2)
  {
   return(a$3($1))($2);
  },AppFramework.plugIns().v,x$2));
  SC$1.currentPlugInV=new FromView.New(AppFramework.currentPlugInW(),function(a$4)
  {
   AppFramework.plugIns().Append(a$4);
  });
  SC$1.AppFwkClient=Lazy.Create(function()
  {
   var b$24,Q,A,D,V,V$1,P$2,p$27,i$3;
   return(b$24=(Q=AppFramework.renderQueries(),(A=AppFramework.renderActions(),(D=AppFramework.renderDocs(),(V=AppFramework.renderViews(),(V$1=AppFramework.renderVars(),(P$2=AppFramework.renderPlugIns(),ProviderBuilder.Make().WithHole({
    $:0,
    $0:"plugins",
    $1:P$2
   })).WithHole({
    $:2,
    $0:"pluginname",
    $1:View$1.Map(function($1)
    {
     return UoM$1.Untag$3($1.plgName);
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
   })),(p$27=Handler.CompleteHoles(b$24.k,b$24.h,[]),(i$3=new TemplateInstance.New(p$27[1],testing_Templates.appfwkclient(p$27[0])),(b$24.i=i$3,i$3)))).get_Doc();
  });
  SC$1.plugin=new PlugInBuilder.New();
  SC$1.a11V=Var$2.Create$1(11);
  SC$1.mainX={
   $:0,
   $0:AppFramework.a11V().get_View()
  };
  SC$1.baseView=AppFramework.mainDocV().get_View();
  SC$1.textAtt=function($1)
  {
   return function()
   {
    return $1("textAtt not implemented");
   };
  }(Operators$5.FailWith);
  SC$1.getDocFromReferenceD=Depend.dependByName("getDocFromReference",Extract0.getDocFromReference,Global.id);
  SC$1.getTextActViewFromReferenceD=Depend.dependByName("getTextActViewFromReference",Extract0.getTextActViewFromReference,Global.id);
  SC$1.getDocFromTextTypesD=(b$1=Depend.depend(),b$1.Delay(function()
  {
   return b$1.Bind(Extract0.getDocFromReferenceD(),function(a$4)
   {
    var f$8;
    function m(a$5)
    {
     return a$5.$==1?a$4(a$5.$0):Doc.TextNode(a$5.$0);
    }
    function g$6(a$5)
    {
     var $1;
     return(a$5.$==1?a$5.$1.$==0?($1=a$5.$0,true):($1=a$5,false):($1=a$5,false))?$1:Doc.Concat($1);
    }
    return b$1.Return((f$8=function(l)
    {
     return List.map(m,l);
    },function(x$4)
    {
     return g$6(f$8(x$4));
    }));
   });
  }));
  SC$1.extractDocD=(b$2=Depend.depend(),b$2.Delay(function()
  {
   return b$2.Bind(Extract0.getDocFromTextTypesD(),function(a$4)
   {
    return b$2.Return(function(x$4)
    {
     return a$4(Extract0.getTextData(x$4));
    });
   });
  }));
  SC$1.getTextValFromSeqD=(b$3=Depend.depend(),b$3.Delay(function()
  {
   return b$3.Bind(Extract0.getTextActViewFromReferenceD(),function(a$4)
   {
    var f$8,f$9,g$6,a$5;
    function f$10(a$6)
    {
     return a$6.$==1?View$1.Map(AppFramework.choiceToString,a$4(a$6.$0)):View$1.Const(a$6.$0);
    }
    function f$11(s$1)
    {
     return Strings.concat("",s$1);
    }
    function g$7(a$6)
    {
     return{
      $:0,
      $0:a$6
     };
    }
    function g$8(a$6)
    {
     return{
      $:0,
      $0:a$6
     };
    }
    return b$3.Return((f$8=(f$9=function(l)
    {
     return View.traverseListApp(f$10,l);
    },(g$6=(a$5=View$1.Const(function(x$4)
    {
     return g$7(f$11(x$4));
    }),function(a$6)
    {
     return View$1.Apply(a$5,a$6);
    }),function(x$4)
    {
     return g$6(f$9(x$4));
    })),function(x$4)
    {
     return g$8(f$8(x$4));
    }));
   });
  }));
  SC$1.getTextValFromTextTypesD=(b$4=Depend.depend(),b$4.Delay(function()
  {
   return b$4.Bind(Extract0.getTextActViewFromReferenceD(),function(a$4)
   {
    return b$4.Bind(Extract0.getTextValFromSeqD(),function(a$5)
    {
     return b$4.Return(function(a$6)
     {
      var $1;
      switch(a$6.$==1?a$6.$0.$==1?a$6.$1.$==0?($1=a$6.$0.$0,1):($1=a$6,2):a$6.$1.$==0?($1=a$6.$0.$0,0):($1=a$6,2):($1=a$6,2))
      {
       case 0:
        return{
         $:1,
         $0:{
          $:0,
          $0:$1
         }
        };
       case 1:
        return{
         $:0,
         $0:a$4($1)
        };
       case 2:
        return a$5($1);
      }
     });
    });
   });
  }));
  SC$1.getTextValD=Operators$2.op_GreaterMultiplyGreater(Extract0.getTextData,Extract0.getTextValFromTextTypesD());
  SC$1.extractAtsD=(b$5=Depend.depend(),b$5.Delay(function()
  {
   return b$5.Bind(Extract0.getTextValD(),function(a$4)
   {
    return b$5.Return(function(txt)
    {
     return Seq$1.map(function(t$20)
     {
      var m,sty,m$1,atv;
      m=Strings.SplitChars(t$20,[":"],0);
      return!Unchecked.Equals(m,null)&&m.length===2?(sty=Arrays.get(m,1),AppFramework.valToStyle(Arrays.get(m,0),a$4(sty))):(m$1=Arrays.map(Strings.Trim,Strings.SplitChars(t$20,["="],0)),!Unchecked.Equals(m$1,null)&&m$1.length===2?(atv=Arrays.get(m$1,1),AppFramework.valToAttr(Arrays.get(m$1,0),a$4(atv))):(function($1)
      {
       return function($2)
       {
        return $1("single reference attribute not implemented "+Utils.toSafe($2));
       };
      }(Operators$5.FailWith))(t$20));
     },Seq$1.filter(function(y)
     {
      return""!==y;
     },Seq$1.map(Strings.Trim,Strings.SplitChars(txt,[";"],0))));
    });
   });
  }));
  SC$1.extractTextD=(b$6=Depend.depend(),b$6.Delay(function()
  {
   return b$6.Bind(Extract0.getTextValD(),function(a$4)
   {
    return b$6.Return(function(txt)
    {
     return Val.toView(Val.map(AppFramework.choiceToString,a$4(txt)));
    });
   });
  }));
  SC$1.currentPlugInNameDef=UoM$1.Tag$3("NewLYx");
  SC$1.currentPlugInNameD=Depend.dependByName("currentPlugInName",AppFramework.currentPlugInNameDef(),Global.id);
  SC$1.getDocD=(b$7=Depend.depend(),b$7.Delay(function()
  {
   return b$7.Bind(AppFramework.currentPlugInNameD(),function(a$4)
   {
    return b$7.Return(function(r)
    {
     var p$27,pName,oName;
     p$27=(AppFramework.splitName(a$4))(r);
     pName=p$27[0];
     oName=p$27[1];
     return Doc.BindView(function(docO)
     {
      var o;
      function d()
      {
       return(function($1)
       {
        return function($2)
        {
         return $1("Reference not found @{"+Utils.toSafe($2)+"}");
        };
       }(Global.id))(r);
      }
      o=docO==null?null:{
       $:1,
       $0:AppFramework.getLazyDoc(docO.$0)
      };
      return o==null?Doc.TextView(View$1.Map(function(o$1)
      {
       return o$1==null?d():o$1.$0;
      },AppFramework.tryGetWoWW(pName,oName))):o.$0;
     },AppFramework.tryGetDocW(pName,oName));
    });
   });
  }));
  SC$1.getTextActViewD=(b$8=Depend.depend(),b$8.Delay(function()
  {
   return b$8.Bind(AppFramework.currentPlugInNameD(),function(a$4)
   {
    return b$8.Return(function(r)
    {
     var p$27,pName,oName;
     p$27=(AppFramework.splitName(a$4))(r);
     pName=p$27[0];
     oName=p$27[1];
     return View$1.Bind(function(a$5)
     {
      function d()
      {
       return(function($1)
       {
        return function($2)
        {
         return $1("Text Reference not found @{"+Utils.toSafe($2)+"}");
        };
       }(Global.id))(r);
      }
      return a$5==null?View$1.Map(function(a$6)
      {
       return{
        $:0,
        $0:a$6
       };
      },View$1.Map(function(o)
      {
       return o==null?d():o.$0;
      },AppFramework.tryGetWoWW(pName,oName))):View$1.Const({
       $:1,
       $0:a$5.$0
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
   return b$9.Bind(AppFramework.extractAtsD(),function(a$4)
   {
    return b$9.Return(function(p$27)
    {
     return AttrProxy.Concat(a$4(p$27));
    });
   });
  }));
  SC$1.defPlugInName=UoM$1.Tag$3("AppFramework");
  SC$1.inputLabel=AppFramework.depWithExtracts(function($1,$2,$3)
  {
   return f$4.apply(null,[$1,$2,$3]);
  });
  SC$1.input=AppFramework.depWithExtracts(function($1)
  {
   return function($2)
   {
    return f$5($1,$2);
   };
  });
  SC$1.textArea=AppFramework.depWithExtracts(function($1)
  {
   return function($2)
   {
    return f$6($1,$2);
   };
  });
  SC$1.trigAct=AppFramework.depWithExtracts(function($1,$2,extractText)
  {
   return function(trigger)
   {
    return function(actN)
    {
     var v$1,prior$1;
     return Doc.TextView(View$1.Map(function()
     {
      var x$4,t$20;
      x$4=(t$20=AppFramework.getParmRef(actN),AppFramework.tryGetAct(t$20[0],t$20[1]));
      (Option.iter(function(a$4)
      {
       AppFramework.callFunction(null,null,a$4.actFunction);
      }))(x$4);
      return"";
     },(v$1=extractText(trigger),(prior$1=[Var$2.Create$1(null)],(View$1.Sink(function(v$2)
     {
      if(!Unchecked.Equals(prior$1[0].Get(),v$2))
       prior$1[0].Set(v$2);
     },v$1),prior$1[0].get_View())))));
    };
   };
  });
  SC$1.select=AppFramework.depWithExtracts(function(extractAts,$1,extractText)
  {
   return Runtime.Curried3(function(attrs,none,vals)
   {
    function f$8(_var)
    {
     var valsW,varO;
     valsW=View$1.Map(function($2)
     {
      return List.ofSeq(Strings.SplitChars($2,[";"],0));
     },extractText(vals));
     varO=new FromView.New(View$1.Map2(function($2,$3)
     {
      return Seq$1.contains(Strings.Trim($2),$3)?{
       $:1,
       $0:Strings.Trim($2)
      }:null;
     },_var.get_View(),valsW),function(a$4)
     {
      var s$1;
      if(a$4!=null&&a$4.$==1)
       {
        s$1=a$4.$0;
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
    return function(v$1)
    {
     return AppFramework.docWithVar(f$8,v$1);
    };
   });
  });
  a=(b$10=AppFramework.plugin(),b$10.AddAct(b$10.AddDoc(b$10.AddVar(b$10.Name(b$10.Yield(),"AppFramework"),"mainDocV",AppFramework.mainDocV()),"AppFwkClient",AppFramework.AppFwkClient()),"Hello",function()
  {
   self.alert("Hello!");
  }));
  AppFramework.plugIns().Append(a);
  a$1=(b$11=AppFramework.plugin(),b$11.AddQry(b$11.AddAct(b$11.AddAct2(b$11.AddDoc3(b$11.AddDoc3(b$11.AddDoc4(b$11.AddDoc2(b$11.AddDoc2(b$11.AddDoc2(b$11.Name(b$11.Yield(),"AF"),"TrigAction",AppFramework.trigAct(),"Trigger","Action"),"Input",AppFramework.input(),"Attrs","Var"),"TextArea",AppFramework.textArea(),"Attrs","Var"),"Select",AppFramework.select(),"Attrs","None","Vals","Var"),"InputFile",Runtime.Curried3(AppFramework.inputFile),"Attrs","Label","Action"),"InputLabel",AppFramework.inputLabel(),"Attrs","Label","Var"),"SetVar",function(v$1)
  {
   return function(v$2)
   {
    return AppFramework.setVar(v$1,v$2);
   };
  },"Var","Value"),"Hello",function()
  {
   self.alert("Hello!");
  }),"getDocNames",function()
  {
   return Arrays.ofSeq(Seq$1.collect(function(plg)
   {
    return Seq$1.map(function(doc)
    {
     return UoM$1.Untag$3(plg.plgName)+"."+UoM$1.Untag$3(doc.docName);
    },plg.plgDocs);
   },(AppFramework.plugIns())["var"].Get()));
  }));
  AppFramework.plugIns().Append(a$1);
  SC$1.getMainDoc=Lazy.Create(function()
  {
   WcSplitter.init(Runtime.Curried(AppFramework.horizontal,5),Runtime.Curried(AppFramework.vertical,5));
   WcTabStrip.init().f();
   return AppFramework.mainDoc();
  });
  SC$1.splitName=AppFramework.splitName;
  SC$1.currentViewTriggger=AppFramework.mainDocV().get_View();
  SC$1.createSplitterM=(p=(cache=new Dictionary.New$5(),[[checkO,function($1)
  {
   return function($2)
   {
    return getOrAdd$21($1,$2);
   };
  }],function()
  {
   cache.Clear();
  }]),(getOrAdd=p[0][1],[function(p$27)
  {
   return(getOrAdd(p$27))(function($1)
   {
    return LayoutEngineModule.createSplitter($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p[1]]))[0];
  SC$1.createButtonM=(p$1=(cache$1=new Dictionary.New$5(),[[checkO$1,function($1)
  {
   return function($2)
   {
    return getOrAdd$22($1,$2);
   };
  }],function()
  {
   cache$1.Clear();
  }]),(getOrAdd$1=p$1[0][1],[function(p$27)
  {
   return(getOrAdd$1(p$27))(function($1)
   {
    return LayoutEngineModule.createButton($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$1[1]]))[0];
  SC$1.createInputM=(p$2=(cache$2=new Dictionary.New$5(),[[checkO$2,function($1)
  {
   return function($2)
   {
    return getOrAdd$23($1,$2);
   };
  }],function()
  {
   cache$2.Clear();
  }]),(getOrAdd$2=p$2[0][1],[function(p$27)
  {
   return(getOrAdd$2(p$27))(function($1)
   {
    return LayoutEngineModule.createInput($1[0],$1[1],$1[2],$1[3]);
   });
  },p$2[1]]))[0];
  SC$1.createTextAreaM=(p$3=(cache$3=new Dictionary.New$5(),[[checkO$3,function($1)
  {
   return function($2)
   {
    return getOrAdd$24($1,$2);
   };
  }],function()
  {
   cache$3.Clear();
  }]),(getOrAdd$3=p$3[0][1],[function(p$27)
  {
   return(getOrAdd$3(p$27))(function($1)
   {
    return LayoutEngineModule.createTextArea($1[0],$1[1],$1[2],$1[3]);
   });
  },p$3[1]]))[0];
  SC$1.createElementM=(p$4=(cache$4=new Dictionary.New$5(),[[checkO$4,function($1)
  {
   return function($2)
   {
    return getOrAdd$25($1,$2);
   };
  }],function()
  {
   cache$4.Clear();
  }]),(getOrAdd$4=p$4[0][1],[function(p$27)
  {
   return(getOrAdd$4(p$27))(function($1)
   {
    return LayoutEngineModule.createElement($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$4[1]]))[0];
  SC$1.createDocM=(p$5=(cache$5=new Dictionary.New$5(),[[checkO$5,function($1)
  {
   return function($2)
   {
    return getOrAdd$26($1,$2);
   };
  }],function()
  {
   cache$5.Clear();
  }]),(getOrAdd$5=p$5[0][1],[function(p$27)
  {
   return(getOrAdd$5(p$27))(function($1)
   {
    return LayoutEngineModule.createDoc($1[0],$1[1],$1[2],$1[3]);
   });
  },p$5[1]]))[0];
  SC$1.createTemplateM=(p$6=(cache$6=new Dictionary.New$5(),[[checkO$6,function($1)
  {
   return function($2)
   {
    return getOrAdd$27($1,$2);
   };
  }],function()
  {
   cache$6.Clear();
  }]),(getOrAdd$6=p$6[0][1],[function(p$27)
  {
   return(getOrAdd$6(p$27))(function($1)
   {
    return LayoutEngineModule.createTemplate($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$6[1]]))[0];
  SC$1.createConcatM=(p$7=(cache$7=new Dictionary.New$5(),[[checkO$7,function($1)
  {
   return function($2)
   {
    return getOrAdd$28($1,$2);
   };
  }],function()
  {
   cache$7.Clear();
  }]),(getOrAdd$7=p$7[0][1],[function(p$27)
  {
   return(getOrAdd$7(p$27))(function($1)
   {
    return LayoutEngineModule.createConcat($1[0],$1[1],$1[2]);
   });
  },p$7[1]]))[0];
  SC$1.createVarM=(p$8=(cache$8=new Dictionary.New$5(),[[checkO$8,function($1)
  {
   return function($2)
   {
    return getOrAdd$29($1,$2);
   };
  }],function()
  {
   cache$8.Clear();
  }]),(getOrAdd$8=p$8[0][1],[function(p$27)
  {
   return(getOrAdd$8(p$27))(function($1)
   {
    return LayoutEngineModule.createVar($1[0],$1[1],$1[2]);
   });
  },p$8[1]]))[0];
  SC$1.createViewM=(p$9=(cache$9=new Dictionary.New$5(),[[checkO$9,function($1)
  {
   return function($2)
   {
    return getOrAdd$30($1,$2);
   };
  }],function()
  {
   cache$9.Clear();
  }]),(getOrAdd$9=p$9[0][1],[function(p$27)
  {
   return(getOrAdd$9(p$27))(function($1)
   {
    return LayoutEngineModule.createView($1[0],$1[1],$1[2]);
   });
  },p$9[1]]))[0];
  SC$1.createActionM=(p$10=(cache$10=new Dictionary.New$5(),[[checkO$10,function($1)
  {
   return function($2)
   {
    return getOrAdd$31($1,$2);
   };
  }],function()
  {
   cache$10.Clear();
  }]),(getOrAdd$10=p$10[0][1],[function(p$27)
  {
   return(getOrAdd$10(p$27))(function($1)
   {
    return LayoutEngineModule.createAction($1[0],$1[1],$1[2],$1[3]);
   });
  },p$10[1]]))[0];
  x$3=AppFramework.tryGetPlugIn(AppFramework.defPlugInName());
  (Option.iter(function(plg)
  {
   plg.plgActions.Append(AppFramework.newActF(UoM$1.Tag$3("AddLayout"),{
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
   }));
  }))(x$3);
  SC$1.htmlD=Depend.dependByName("AppFrameworkTemplate.html",AppFrameworkTemplate.html(),Global.id);
  SC$1.startWithHtmlD=(b$12=Depend.depend(),b$12.Delay(function()
  {
   return b$12.Bind(StartAppFramework.htmlD(),function(a$4)
   {
    return b$12.Return(function()
    {
     var d,x$4,a$5;
     d=self.document.createElement("div");
     self.document.body.appendChild(d);
     d.outerHTML=a$4;
     x$4=AppFramework.getMainDoc().f();
     a$5=self.document.body;
     Templates.LoadLocalTemplates("");
     Doc.RunAppend(a$5,x$4);
    });
   });
  }));
  SC$1.unselectorV=new FromView.New(View$1.Const(null),Global.ignore);
  SC$1.html$1="\r\n                <div ws-template=\"Snippet\" >\r\n                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                         ws-ondrag=\"Drag\"\r\n                         ws-ondragover=\"DragOver\"\r\n                         ws-ondrop=\"Drop\"\r\n                        >\r\n                        <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                        <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                        <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                    </div>\r\n                </div>\r\n                <style>\r\n                    .Hidden     { display   : none         }\r\n                    table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                    td input.form-control { \r\n                        padding    : 0px; \r\n                        font-family: monospace;\r\n                        font-size  :   small;\r\n                        margin-top :   0px;\r\n                        margin-left: -2px;\r\n                        width      : 100%\r\n                    }\r\n                    td select {\r\n                        font-size : smaller;\r\n                        max-width : 8ch;\r\n                    }\r\n                    textarea {\r\n                       resize : none;\r\n                    }\r\n                    .tab-content {\r\n                        overflow: hidden\r\n                    }\r\n                    .tab-children {\r\n                        position:relative;\r\n                    }\r\n                    .tab-children>div>* {\r\n                        position:absolute;\r\n                        height: 100%;\r\n                        width:  100%;\r\n                        display: grid;\r\n                    }\r\n                    .relative {\r\n                        position:relative;\r\n                    }\r\n                    .relative>* {\r\n                        position:absolute;\r\n                        height: 100%;\r\n                        width:  100%;\r\n                        display: grid;\r\n                    }\r\n                    table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                    table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                    table.table-striped    tbody input              { background: transparent; border: none}\r\n                    table.table-striped    tbody select             { background: transparent; border: none}\r\n                    table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                    table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                    table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                    table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                    table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                    table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                               border-bottom: solid thin blue     ; } \r\n                    table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                    table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                    thead { color: gray }\r\n                    h3 { \r\n                        color: gray;\r\n                        line-height: 1em;\r\n                    }\r\n                    button       { border: solid thin transparent ; border-radius: 3px; }\r\n                    button:hover { border: solid thin blue }\r\n                    .indenter { position  : absolute; \r\n                                top:0px; bottom:0px; left:0px; \r\n                                background: white; color:white;\r\n                                border-right: gray thin dotted;\r\n                                }\r\n                    body {\r\n                        color      : #333;\r\n                        font-size  : small;\r\n                        font-family: monospace;\r\n                        line-height: 1.2;\r\n                    }\r\n                    .mainTitle {  \r\n                        font-size: 48px;\r\n                        font-weight: 500;\r\n                        color: gray;\r\n                        margin-top: -12px;\r\n                    }\r\n                    .CodeMirror {\r\n                        height: 100%;\r\n                    }\r\n                    \r\n                  \r\n                    body { margin: 0px }     \r\n                         \r\n                    div textarea {\r\n                        font-family     : monospace;\r\n                    }\r\n                    .code-editor-list-tile {\r\n                        white-space     : nowrap; \r\n                        border-style    : solid none none;\r\n                        border-color    : white;\r\n                        border-width    : 1px;\r\n                        background-color: #D8D8D8;\r\n                        display         : flex;\r\n                    }\r\n                    .code-editor-list-text{\r\n                        padding         : 1px 10px 1px 5px;\r\n                        overflow        : hidden;\r\n                        text-overflow   : ellipsis;\r\n                        white-space     : nowrap;\r\n                        flex            : 1;\r\n                    }\r\n                    \r\n                    .code-editor-list-tile span.node.ErrorMsg {\r\n                        background-color: red\r\n                    }\r\n                    .code-editor-list-tile span.node.expanded::before {\r\n                        content: \"-\"\r\n                    }\r\n                    .code-editor-list-tile span.node.collapsed::before {\r\n                        content: \"+\"\r\n                    }\r\n                    .code-editor-list-tile.direct-predecessor {\r\n                        font-weight     : bold;\r\n                        color           : blue;\r\n                    }\r\n                    .code-editor-list-tile.indirect-predecessor {\r\n                        color           : blue;\r\n                    }\r\n                    .code-editor-list-tile.included-predecessor {\r\n                        color           : chocolate;\r\n                    }\r\n                    .code-editor-list-tile.selected {\r\n                        background-color: #77F;\r\n                        color           : white;\r\n                    }\r\n                    .code-editor-list-tile.codeSnippet {\r\n                        text-decoration : underline;\r\n                        font-weight     : bold;\r\n                    }\r\n                    .code-editor-list-tile:hover {\r\n                        background      : lightgray;\r\n                    }\r\n                    .code-editor-list-tile.selected:hover {\r\n                        background      : blue;\r\n                    }\r\n                    .code-editor-list-tile>.predecessor {\r\n                        font-weight     : bold;\r\n                        border-style    : inset;\r\n                        border-width    : 1px;\r\n                        text-align      : center;\r\n                        color           : transparent;\r\n                    }\r\n                    .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                        color           : blue;\r\n                    }\r\n                    \r\n                    .CodeMirror { height: 100%; }\r\n                    \r\n                    .node {\r\n                        background-color: white; \r\n                        width           : 2ch; \r\n                        color           : #A03; \r\n                        font-weight     : bold; \r\n                        text-align      : center;\r\n                        font-family     : arial;\r\n                    }\r\n                    .Warning { text-decoration: underline lightblue } \r\n                    .Error   { text-decoration: underline red       } \r\n                    \r\n                </style>\r\n            ";
  SC$1.aV=Var$2.Create$1(4);
  SC$1.pa=NewLY.aV().get_View();
  SC$1.pb=6.2;
  SC$1.currentPlugInNameDef$1=UoM$1.Tag$3("NewLYx");
  SC$1.currentPlugInNameD$1=Depend.dependByName("currentPlugInName",NewLY.currentPlugInNameDef(),Global.id);
  SC$1.name=Var$2.Create$1("World");
  SC$1.enterName=(pf=AppFramework.op_Dereference(NewLY.checkName),(p$11={
   $:0,
   $0:NewLY.name().get_View()
  },P.New(Operators$2.op_BarGreaterGreater(pf.r,function(f$8)
  {
   return Fun.New(f$8,p$11);
  }))));
  SC$1.now=(pf$1=AppFramework.op_Dereference(function()
  {
   var n;
   n=new Date(Date.now());
   return n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)+" "+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+":"+("00"+n.getMilliseconds()).slice(-3);
  }),(p$12={
   $:0,
   $0:NewLY.name().get_View()
  },P.New(Operators$2.op_BarGreaterGreater(pf$1.r,function(f$8)
  {
   return Fun.New(f$8,p$12);
  }))));
  SC$1.sayHello=(sayHello_0=(c=(vf=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(extractDoc)
  {
   var p$27;
   p$27={
    $:1,
    $0:[extractDoc("Hello @{name}!")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf.r,function(f$8)
   {
    return Fun.New(f$8,p$27);
   }));
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{
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
    }),c$14.p));
   },c);
  },NewLY.enterName().r)),(a$2=(vf$1=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(extractDoc)
  {
   var p$27;
   p$27={
    $:1,
    $0:[extractDoc("How are you?")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$1.r,function(f$8)
   {
    return Fun.New(f$8,p$27);
   }));
  },AppFramework.extractDocD())),(c$1=(vf$2=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(aF)
  {
   var p$27;
   p$27={
    $:1,
    $0:[AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
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
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    })]
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$2.r,function(f$8)
   {
    return Fun.New(f$8,p$27);
   }));
  },sayHello_0.r)),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
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
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    }),c$14.p));
   },c$1);
  },a$2.r))));
  SC$1.aString=Var$2.Lens(NewLY.aV(),Global.String,function(a$4,v$1)
  {
   return Operators$5.toInt(Global.Number(v$1));
  });
  SC$1.main0=(pc=(pf$2=AppFramework.op_Dereference(function(a$4)
  {
   return function(b$24)
   {
    return NewLY.concat(a$4,b$24);
   };
  }),(p$13={
   $:0,
   $0:NewLY.aV().get_View()
  },P.New(Operators$2.op_BarGreaterGreater(pf$2.r,function(f$8)
  {
   return Fun.New(f$8,p$13);
  })))),(p$14={
   $:1,
   $0:3.2
  },P.New(Operators$2.op_BarGreaterGreater(pc.r,function(c$14)
  {
   return Fun.New(c$14.f.$==0?c$14.p.$==1?{
    $:0,
    $0:View$1.Apply(c$14.f.$0,View$1.Const(c$14.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(c$14.f.$0,c$14.p.$0)
   }:c$14.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(c$14.f.$0),c$14.p.$0)
   }:{
    $:1,
    $0:c$14.f.$0(c$14.p.$0)
   },p$14);
  }))));
  SC$1.main1=(pc$1=(vf$3=AppFramework.op_Dereference((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("result = "+Utils.toSafe($2)+" "+Utils.toSafe($3));
  }))(Global.id)),AppFramework.bindWrap(function(aF)
  {
   var p$27;
   p$27=aF.f.$==0?aF.p.$==1?{
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
   return P.New(Operators$2.op_BarGreaterGreater(vf$3.r,function(f$8)
   {
    return Fun.New(f$8,p$27);
   }));
  },NewLY.main0().r)),(p$15={
   $:1,
   $0:"main0"
  },P.New(Operators$2.op_BarGreaterGreater(pc$1.r,function(c$14)
  {
   return Fun.New(c$14.f.$==0?c$14.p.$==1?{
    $:0,
    $0:View$1.Apply(c$14.f.$0,View$1.Const(c$14.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(c$14.f.$0,c$14.p.$0)
   }:c$14.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(c$14.f.$0),c$14.p.$0)
   }:{
    $:1,
    $0:c$14.f.$0(c$14.p.$0)
   },p$15);
  }))));
  SC$1.main=(c$2=(c$3=(c$4=(c$5=(c$6=(c$7=(c$8=(c$9=(c$10=(vf$4=AppFramework.op_Dereference((Runtime.Curried3(Doc.Element))("h3")),AppFramework.bindWrap(function(extractAts)
  {
   var p$27;
   p$27={
    $:1,
    $0:extractAts("color:@{name}; background:red; click=@{AppFramework.Hello}")
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$4.r,function(f$8)
   {
    return Fun.New(f$8,p$27);
   }));
  },AppFramework.extractAtsD())),AppFramework.bindWrap(function(extractDoc)
  {
   var p$27;
   p$27={
    $:1,
    $0:[extractDoc("MAIN:")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(c$10.r,function(c$14)
   {
    return Fun.New(c$14.f.$==0?c$14.p.$==1?{
     $:0,
     $0:View$1.Apply(c$14.f.$0,View$1.Const(c$14.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(c$14.f.$0,c$14.p.$0)
    }:c$14.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(c$14.f.$0),c$14.p.$0)
    }:{
     $:1,
     $0:c$14.f.$0(c$14.p.$0)
    },p$27);
   }));
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{
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
    }),c$14.p));
   },c$9);
  },NewLY.main1().r)),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{
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
    }),c$14.p));
   },c$8);
  },NewLY.main1().r)),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(extractDoc(":"),c$14.p));
   },c$7);
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
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
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    }),c$14.p));
   },c$6);
  },NewLY.sayHello().r)),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(extractDoc(":"),c$14.p));
   },c$5);
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(extractDoc(" Más >> "),c$14.p));
   },c$4);
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
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
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    }),c$14.p));
   },c$3);
  },NewLY.sayHello().r)),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(extractDoc(" <<"),c$14.p));
   },c$2);
  },AppFramework.extractDocD()));
  SC$1.main2=AppFramework.makeAViewDoc(function()
  {
   return Doc.Element("h4",[AttrModule.Dynamic("style",View$1.Map(function($1)
   {
    return"color:"+$1;
   },NewLY.name().get_View()))],[Doc.TextNode("MAIN2:"),Doc.TextView(NewLY.name().get_View())]);
  });
  SC$1.appFwk=(c$11=(vf$5=AppFramework.op_Dereference((Runtime.Curried3(Doc.Element))("div")),AppFramework.bindWrap(function(extractAts)
  {
   var p$27;
   p$27={
    $:1,
    $0:extractAts("color:@{name}")
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$5.r,function(f$8)
   {
    return Fun.New(f$8,p$27);
   }));
  },AppFramework.extractAtsD())),AppFramework.bindWrap(function(extractDoc)
  {
   var p$27;
   p$27={
    $:1,
    $0:[extractDoc("@{AppFramework.AppFwkClient}")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(c$11.r,function(c$14)
   {
    return Fun.New(c$14.f.$==0?c$14.p.$==1?{
     $:0,
     $0:View$1.Apply(c$14.f.$0,View$1.Const(c$14.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(c$14.f.$0,c$14.p.$0)
    }:c$14.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(c$14.f.$0),c$14.p.$0)
    }:{
     $:1,
     $0:c$14.f.$0(c$14.p.$0)
    },p$27);
   }));
  },AppFramework.extractDocD()));
  SC$1.split=(c$12=(vf$6=AppFramework.op_Dereference(Runtime.Curried(LayoutEngineModule.variableSplitter,2,[false,0,50,100])),AppFramework.bindWrap(function(aF)
  {
   var p$27;
   p$27={
    $:1,
    $0:AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
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
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    })
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$6.r,function(f$8)
   {
    return Fun.New(f$8,p$27);
   }));
  },NewLY.appFwk().r)),AppFramework.bindWrap(function(aF)
  {
   var p$27;
   p$27={
    $:1,
    $0:AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
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
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    })
   };
   return P.New(Operators$2.op_BarGreaterGreater(c$12.r,function(c$14)
   {
    return Fun.New(c$14.f.$==0?c$14.p.$==1?{
     $:0,
     $0:View$1.Apply(c$14.f.$0,View$1.Const(c$14.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(c$14.f.$0,c$14.p.$0)
    }:c$14.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(c$14.f.$0),c$14.p.$0)
    }:{
     $:1,
     $0:c$14.f.$0(c$14.p.$0)
    },p$27);
   }));
  },NewLY.main().r));
  SC$1.split2=(pc$2=(vf$7=AppFramework.op_Dereference(Runtime.Curried(LayoutEngineModule.variableSplitter,2,[false,0,50,100])),AppFramework.bindWrap(function(aF)
  {
   var p$27;
   p$27={
    $:1,
    $0:AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
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
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    })
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$7.r,function(f$8)
   {
    return Fun.New(f$8,p$27);
   }));
  },NewLY.appFwk().r)),(p$16={
   $:1,
   $0:NewLY.main2()
  },P.New(Operators$2.op_BarGreaterGreater(pc$2.r,function(c$14)
  {
   return Fun.New(c$14.f.$==0?c$14.p.$==1?{
    $:0,
    $0:View$1.Apply(c$14.f.$0,View$1.Const(c$14.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(c$14.f.$0,c$14.p.$0)
   }:c$14.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(c$14.f.$0),c$14.p.$0)
   }:{
    $:1,
    $0:c$14.f.$0(c$14.p.$0)
   },p$16);
  }))));
  SC$1.pName=UoM$1.Tag$3("NewLY");
  AppFramework.addPlugIn((b$13=AppFramework.plugin(),b$13.AddDoc(b$13.AddDoc(b$13.AddDoc(b$13.AddDoc(b$13.AddDoc(b$13.AddDoc(b$13.AddVar(b$13.AddVar(b$13.Name(b$13.Yield(),UoM$1.Untag$3(NewLY.pName())),"name",NewLY.name()),"a",NewLY.aString()),"split",Lazy.Create(function()
  {
   var p$27;
   p$27=NewLY.split();
   return NewLY.callDocPFn(NewLY.pName(),p$27);
  })),"split2",Lazy.Create(function()
  {
   var p$27;
   p$27=NewLY.split2();
   return NewLY.callDocPFn(NewLY.pName(),p$27);
  })),"main",Lazy.Create(function()
  {
   var p$27;
   p$27=NewLY.main();
   return NewLY.callDocPFn(NewLY.pName(),p$27);
  })),"main2",Lazy.Create(NewLY.main2)),"sayHello",Lazy.Create(function()
  {
   var p$27;
   p$27=NewLY.sayHello();
   return NewLY.callDocPFn(NewLY.pName(),p$27);
  })),"sayHello2",Lazy.Create(function()
  {
   var p$27;
   p$27=NewLY.sayHello();
   return NewLY.callDocPFn(NewLY.pName(),p$27);
  }))));
  SC$1.attrValToAttrD=(b$14=Depend.depend(),b$14.Delay(function()
  {
   return b$14.Bind(Extract0.getTextValFromTextTypesD(),function(a$4)
   {
    return b$14.Bind(Extract0.getTextValD(),function()
    {
     function f$8(a$5)
     {
      var $1,an,an$1;
      return(a$5.$==2?($1=[a$5.$0,NewLY.ActRVs(a$5.$1)],false):a$5.$==1?($1=[a$5.$0,a$5.$1],false):true)?(an=a$5.$0,[a$5.$1,function(a$6)
      {
       return AppFramework.valToStyle(an,a$6);
      }]):(an$1=$1[0],[$1[1],function(a$6)
      {
       return AppFramework.valToAttr(an$1,a$6);
      }]);
     }
     function g$6(vs,f$9)
     {
      return f$9(a$4(List.map(NewLY.textValToTextType,vs)));
     }
     return b$14.Return(function(x$4)
     {
      return g$6.apply(null,f$8(x$4));
     });
    });
   });
  }));
  SC$1.nodeRefToDocD=(b$15=Depend.depend(),b$15.Delay(function()
  {
   return b$15.Bind(Extract0.getDocFromTextTypesD(),function(a$4)
   {
    return b$15.Return(function(a$5)
    {
     var $1;
     return(a$5.$==1?($1=a$5.$0.$0,false):a$5.$==2?($1=a$5.$0.$0,false):a$5.$==3?($1=a$5.$0.$0,false):true)?a$4(List.map(NewLY.textValToTextType,a$5.$0)):a$4(List.ofArray([NewLY.itemRefToTextType($1)]));
    });
   });
  }));
  SC$1.varRefToVarD=(b$16=Depend.depend(),b$16.Delay(function()
  {
   return b$16.Bind(NewLY.currentPlugInNameD(),function(a$4)
   {
    return b$16.Return(function(a$5)
    {
     var r,o,o$1,t$20;
     r=NewLY.itemRefToString(a$5.$0);
     o=(o$1=(t$20=(AppFramework.splitName(a$4))(r),AppFramework.tryGetVar(t$20[0],t$20[1])),o$1==null?null:{
      $:1,
      $0:o$1.$0.varVar
     });
     return o==null?new FromView.New(View$1.Const((function($1)
     {
      return function($2)
      {
       return $1("Could not find var "+Utils.toSafe($2));
      };
     }(Global.id))(r)),Global.ignore):o.$0;
    });
   });
  }));
  SC$1.getParamD=(b$17=Depend.depend(),b$17.Delay(function()
  {
   return b$17.Bind(NewLY.currentPlugInNameD(),function(a$4)
   {
    return b$17.Bind(Extract0.getTextValFromSeqD(),function(a$5)
    {
     return b$17.Return(function(p$27)
     {
      var refToSplit,g$6,r,f$8,m,g$7,t$20,r$1,f$9,m$1,g$8,g$9,t$21,r$2,f$10,m$2,g$10,g$11,t$22,r$3,f$11,m$3,g$12,t$23;
      function f$12(d$4)
      {
       return d$4.docDoc;
      }
      function d()
      {
       return(function($1)
       {
        return function($2)
        {
         return $1("missing ref Doc "+testing_GeneratedPrintf.p($2));
        };
       }(Global.id))(r);
      }
      function f$13(v$1)
      {
       return v$1.varVar.get_View();
      }
      function d$1()
      {
       return View$1.Const((function($1)
       {
        return function($2)
        {
         return $1("missing ref Var "+testing_GeneratedPrintf.p($2));
        };
       }(Global.id))(r$1));
      }
      function f$14(v$1)
      {
       return v$1.viwView;
      }
      function d$2()
      {
       return View$1.Const((function($1)
       {
        return function($2)
        {
         return $1("missing ref View "+testing_GeneratedPrintf.p($2));
        };
       }(Global.id))(r$2));
      }
      function f$15(v$1)
      {
       return v$1.actFunction;
      }
      function d$3()
      {
       return(function($1)
       {
        return function($2)
        {
         return $1("missing ref Action "+testing_GeneratedPrintf.p($2));
        };
       }(Global.id))(r$3);
      }
      refToSplit=(g$6=AppFramework.splitName(a$4),function(x$4)
      {
       return g$6(NewLY.itemRefToString(x$4));
      });
      return p$27.$==1?(r=p$27.$0.$0,View$1.Map((f$8=(m=function(x$4)
      {
       var v$1;
       v$1=f$12(x$4);
       return v$1;
      },function(o)
      {
       return o==null?null:{
        $:1,
        $0:m(o.$0)
       };
      }),(g$7=function(o)
      {
       return o==null?d():o.$0;
      },function(x$4)
      {
       return g$7(f$8(x$4));
      })),(t$20=refToSplit(r),AppFramework.tryGetDocW(t$20[0],t$20[1])))):p$27.$==2?(r$1=p$27.$0.$0,View$1.Bind((f$9=(m$1=(g$8=function(a$6)
      {
       return View$1.Map(Global.id,a$6);
      },function(x$4)
      {
       return g$8(f$13(x$4));
      }),function(o)
      {
       return o==null?null:{
        $:1,
        $0:m$1(o.$0)
       };
      }),(g$9=function(o)
      {
       return o==null?d$1():o.$0;
      },function(x$4)
      {
       return g$9(f$9(x$4));
      })),(t$21=refToSplit(r$1),AppFramework.tryGetVarW(t$21[0],t$21[1])))):p$27.$==3?(r$2=p$27.$0.$0,View$1.Bind((f$10=(m$2=(g$10=function(a$6)
      {
       return View$1.Map(Global.id,a$6);
      },function(x$4)
      {
       return g$10(f$14(x$4));
      }),function(o)
      {
       return o==null?null:{
        $:1,
        $0:m$2(o.$0)
       };
      }),(g$11=function(o)
      {
       return o==null?d$2():o.$0;
      },function(x$4)
      {
       return g$11(f$10(x$4));
      })),(t$22=refToSplit(r$2),AppFramework.tryGetViwW(t$22[0],t$22[1])))):p$27.$==4?(r$3=p$27.$0.$0,View$1.Map((f$11=(m$3=function(x$4)
      {
       var v$1;
       v$1=f$15(x$4);
       return v$1;
      },function(o)
      {
       return o==null?null:{
        $:1,
        $0:m$3(o.$0)
       };
      }),(g$12=function(o)
      {
       return o==null?d$3():o.$0;
      },function(x$4)
      {
       return g$12(f$11(x$4));
      })),(t$23=refToSplit(r$3),AppFramework.tryGetActW(t$23[0],t$23[1])))):View$1.Map(Global.id,Val.toView(Val.map(AppFramework.choiceToString,a$5(List.map(NewLY.textValToTextType,p$27.$0)))));
     });
    });
   });
  }));
  SC$1.getParam2D=(b$18=Depend.depend(),b$18.Delay(function()
  {
   return b$18.Bind(NewLY.currentPlugInNameD(),function(a$4)
   {
    return b$18.Bind(Extract0.getTextValFromSeqD(),function()
    {
     return b$18.Return(function(p$27)
     {
      var toAbs,f$8,g$6,$1;
      toAbs=(f$8=NewLY.itemRefToAbsolute(UoM$1.Untag$3(a$4)),(g$6=function($2)
      {
       return function($3)
       {
        return $2("@{"+Utils.toSafe($3)+"}");
       };
      }(Global.id),function(x$4)
      {
       return g$6(f$8(x$4));
      }));
      return(p$27.$==3?($1=p$27.$0.$0,false):p$27.$==1?($1=p$27.$0.$0,false):p$27.$==2?($1=p$27.$0.$0,false):p$27.$==4?($1=p$27.$0.$0,false):true)?Strings.concat("",Seq$1.map(function(a$5)
      {
       var $2;
       return(a$5.$==1?($2=a$5.$0.$0,false):a$5.$==2?($2=a$5.$0.$0,false):true)?a$5.$0:toAbs($2);
      },p$27.$0)):toAbs($1);
     });
    });
   });
  }));
  SC$1.getParamTextD=(b$19=Depend.depend(),b$19.Delay(function()
  {
   return b$19.Bind(NewLY.currentPlugInNameD(),function(a$4)
   {
    return b$19.Bind(Extract0.getTextValFromSeqD(),function(a$5)
    {
     return b$19.Return(function(p$27)
     {
      return function(f$8)
      {
       var refToSplit,g$6,x$4,t$20,f$9,x$5,t$21,g$7,a$6,x$6,t$22,g$8,a$7,x$7,t$23,f$10;
       function f$11(d)
       {
        return d.docDoc;
       }
       function f$12(v$1)
       {
        return v$1.varVar.get_View();
       }
       function f$13(v$1)
       {
        return v$1.viwView;
       }
       function f$14(v$1)
       {
        return v$1.actFunction;
       }
       refToSplit=(g$6=AppFramework.splitName(a$4),function(x$8)
       {
        return g$6(NewLY.itemRefToString(x$8));
       });
       return p$27.$==1?(x$4=(t$20=refToSplit(p$27.$0.$0),AppFramework.tryGetDoc(t$20[0],t$20[1])),(Option.iter((f$9=function(x$8)
       {
        var v$1;
        v$1=f$11(x$8);
        return v$1;
       },function(x$8)
       {
        return f$8(f$9(x$8));
       })))(x$4)):p$27.$==2?(x$5=(t$21=refToSplit(p$27.$0.$0),AppFramework.tryGetVar(t$21[0],t$21[1])),(Option.iter((g$7=(a$6=function(x$8)
       {
        return f$8(Global.id(x$8));
       },function(a$8)
       {
        View$1.Get(a$6,a$8);
       }),function(x$8)
       {
        return g$7(f$12(x$8));
       })))(x$5)):p$27.$==3?(x$6=(t$22=refToSplit(p$27.$0.$0),AppFramework.tryGetViw(t$22[0],t$22[1])),(Option.iter((g$8=(a$7=function(x$8)
       {
        return f$8(Global.id(x$8));
       },function(a$8)
       {
        View$1.Get(a$7,a$8);
       }),function(x$8)
       {
        return g$8(f$13(x$8));
       })))(x$6)):p$27.$==4?(x$7=(t$23=refToSplit(p$27.$0.$0),AppFramework.tryGetAct(t$23[0],t$23[1])),(Option.iter((f$10=function(x$8)
       {
        var v$1;
        v$1=f$14(x$8);
        return v$1;
       },function(x$8)
       {
        return f$8(f$10(x$8));
       })))(x$7)):View$1.Get(function(x$8)
       {
        return f$8(Global.id(x$8));
       },Val.toView(Val.map(AppFramework.choiceToString,a$5(List.map(NewLY.textValToTextType,p$27.$0)))));
      };
     });
    });
   });
  }));
  SC$1.initVal="-<InitValue>-";
  SC$1.defVarM0=(p$17=(cache$11=new Dictionary.New$5(),[[checkO$11,function($1)
  {
   return function($2)
   {
    return getOrAdd$32($1,$2);
   };
  }],function()
  {
   cache$11.Clear();
  }]),(getOrAdd$11=p$17[0][1],[function(p$27)
  {
   return(getOrAdd$11(p$27))(function($1)
   {
    return NewLY.defVar($1[0],$1[1],$1[2]);
   });
  },p$17[1]]))[0];
  SC$1.defDocFM=(p$18=(cache$12=new Dictionary.New$5(),[[checkO$12,function($1)
  {
   return function($2)
   {
    return getOrAdd$33($1,$2);
   };
  }],function()
  {
   cache$12.Clear();
  }]),(getOrAdd$12=p$18[0][1],[function(p$27)
  {
   return(getOrAdd$12(p$27))(function($1)
   {
    return NewLY.defDocF($1[0],$1[1],$1[2],$1[3]);
   });
  },p$18[1]]))[0];
  SC$1.defActionM=(p$19=(cache$13=new Dictionary.New$5(),[[checkO$13,function($1)
  {
   return function($2)
   {
    return getOrAdd$34($1,$2);
   };
  }],function()
  {
   cache$13.Clear();
  }]),(getOrAdd$13=p$19[0][1],[function(p$27)
  {
   return(getOrAdd$13(p$27))(function($1)
   {
    return NewLY.defAction($1[0],$1[1],$1[2],$1[3]);
   });
  },p$19[1]]))[0];
  SC$1.defButtonM=(p$20=(cache$14=new Dictionary.New$5(),[[checkO$14,function($1)
  {
   return function($2)
   {
    return getOrAdd$35($1,$2);
   };
  }],function()
  {
   cache$14.Clear();
  }]),(getOrAdd$14=p$20[0][1],[function(p$27)
  {
   return(getOrAdd$14(p$27))(function($1)
   {
    return NewLY.defButton($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$20[1]]))[0];
  SC$1.defInputM=(p$21=(cache$15=new Dictionary.New$5(),[[checkO$15,function($1)
  {
   return function($2)
   {
    return getOrAdd$36($1,$2);
   };
  }],function()
  {
   cache$15.Clear();
  }]),(getOrAdd$15=p$21[0][1],[function(p$27)
  {
   return(getOrAdd$15(p$27))(function($1)
   {
    return NewLY.defInput($1[0],$1[1],$1[2],$1[3]);
   });
  },p$21[1]]))[0];
  SC$1.defTextAreaM=(p$22=(cache$16=new Dictionary.New$5(),[[checkO$16,function($1)
  {
   return function($2)
   {
    return getOrAdd$37($1,$2);
   };
  }],function()
  {
   cache$16.Clear();
  }]),(getOrAdd$16=p$22[0][1],[function(p$27)
  {
   return(getOrAdd$16(p$27))(function($1)
   {
    return NewLY.defTextArea($1[0],$1[1],$1[2],$1[3]);
   });
  },p$22[1]]))[0];
  SC$1.defElementM=(p$23=(cache$17=new Dictionary.New$5(),[[checkO$17,function($1)
  {
   return function($2)
   {
    return getOrAdd$38($1,$2);
   };
  }],function()
  {
   cache$17.Clear();
  }]),(getOrAdd$17=p$23[0][1],[function(p$27)
  {
   return(getOrAdd$17(p$27))(function($1)
   {
    return NewLY.defElement($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$23[1]]))[0];
  SC$1.defConcatM=(p$24=(cache$18=new Dictionary.New$5(),[[checkO$18,function($1)
  {
   return function($2)
   {
    return getOrAdd$39($1,$2);
   };
  }],function()
  {
   cache$18.Clear();
  }]),(getOrAdd$18=p$24[0][1],[function(p$27)
  {
   return(getOrAdd$18(p$27))(function($1)
   {
    return NewLY.defConcat($1[0],$1[1],$1[2]);
   });
  },p$24[1]]))[0];
  SC$1.defViewJSM=(p$25=(cache$19=new Dictionary.New$5(),[[checkO$19,function($1)
  {
   return function($2)
   {
    return getOrAdd$40($1,$2);
   };
  }],function()
  {
   cache$19.Clear();
  }]),(getOrAdd$19=p$25[0][1],[function(p$27)
  {
   return(getOrAdd$19(p$27))(function($1)
   {
    return NewLY.defViewJS($1[0],$1[1],$1[2]);
   });
  },p$25[1]]))[0];
  SC$1.defSplitterM=(p$26=(cache$20=new Dictionary.New$5(),[[checkO$20,function($1)
  {
   return function($2)
   {
    return getOrAdd$41($1,$2);
   };
  }],function()
  {
   cache$20.Clear();
  }]),(getOrAdd$20=p$26[0][1],[function(p$27)
  {
   return(getOrAdd$20(p$27))(function($1)
   {
    return NewLY.defSplitter($1[0],$1[1],$1[2],$1[3],$1[4],$1[5]);
   });
  },p$26[1]]))[0];
  SC$1.drag=DragInfo.DragNone;
  SC$1.TemplateFileName$1="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\website\\Templates.html";
  SC$1.snippetsLM=ListModel$2.Create(function(e)
  {
   return e.snpId;
  },List.T.Empty);
  SC$1.collapsedV=Var$2.Create$1(new FSharpSet.New$1(null));
  SC$1.codeSnippetIdV=Var$2.Create$1(null);
  SC$1.searchFor=Var$2.Create$1("");
  SC$1.allPredecessors=function(s$1)
  {
   return SnippetModule.allPredecessors(t$18,s$1);
  };
  SC$1.indPredIds=function(t$20)
  {
   return SnippetModule.indirectPredecessorIds(t$19,t$20[0],t$20[1],t$20[2]);
  };
  SC$1.allCodePredsW=View$1.Map(function($1)
  {
   var sid,m;
   return $1!=null&&$1.$==1?(sid=$1.$0,(m=SnippetsUI.snippetsLM().TryFindByKey(sid),m!=null&&m.$==1?(SnippetsUI.allPredecessors())(m.$0):new FSharpSet.New$1(null))):new FSharpSet.New$1(null);
  },SnippetsUI.codeSnippetIdV().get_View());
  SC$1.allCodePredIdsW=View$1.Map(function($1)
  {
   return Seq$1.map(function(snp)
   {
    return snp.snpId;
   },$1);
  },SnippetsUI.allCodePredsW());
  SC$1.shdDef=SnippetHierData.New(0,0,false,true,[],null);
  SC$1.snpIdParentsW=(v=View$1.Map(function($1)
  {
   return Arrays.ofSeq(Seq$1.map(function(snp)
   {
    return[snp.snpId,snp.snpParentIdO];
   },$1));
  },SnippetsUI.snippetsLM().v),(prior=[Var$2.Create$1(null)],(View$1.Sink(function(v$1)
  {
   if(!Unchecked.Equals(prior[0].Get(),v$1))
    prior[0].Set(v$1);
  },v),prior[0].get_View())));
  SC$1.processHierW=(b$20=View$1.get_Do(),View$1.Bind(function(a$4)
  {
   return View$1.Bind(function(a$5)
   {
    return View$1.Const(SnippetsUI.processHier(a$4,a$5));
   },SnippetsUI.collapsedV().get_View());
  },SnippetsUI.snpIdParentsW()));
  SC$1.search=(b$21=View$1.get_Do(),View$1.Bind(function(a$4)
  {
   function visibleF(snp)
   {
    var o,o$1,k;
    o=(o$1=(k=snp.snpId,function(d)
    {
     var res;
     res=null;
     return d.TryGetValue(k,{
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
    }(a$4)),o$1==null?null:{
     $:1,
     $0:o$1.$0.visible
    });
    return o==null||o.$0;
   }
   return View$1.Bind(function(a$5)
   {
    return a$5===""?View$1.Const(visibleF):View$1.Bind(function(a$6)
    {
     return View$1.Bind(function(a$7)
     {
      return a$5==="."?View$1.Const(function(snp)
      {
       return(Unchecked.Equals(a$7,{
        $:1,
        $0:snp.snpId
       })||Seq$1.contains(snp.snpId,a$6))&&visibleF(snp);
      }):View$1.Const(function(snp)
      {
       return snp.snpName.indexOf(a$5)!=-1||snp.snpContent.indexOf(a$5)!=-1;
      });
     },SnippetsUI.codeSnippetIdV().get_View());
    },SnippetsUI.allCodePredIdsW());
   },SnippetsUI.searchFor().get_View());
  },SnippetsUI.processHierW()));
  SC$1.snippetList=LM.getDocFor(SnippetsUI.snippetsLM(),SnippetModule.defaultSnippet(),function()
  {
   return SnippetModule.New("","",null);
  },{
   $:1,
   $0:SnippetsUI.search()
  },function(l)
  {
   return SnippetsUI.calcUI(SnippetsUI.wrapNothing,true,l);
  });
  View$1.Sink(function(a$4)
  {
   var sid;
   if(a$4!=null&&a$4.$==1)
    {
     sid=a$4.$0;
     View$1.Get(function(allCodePredIds)
     {
      if(!Unchecked.Equals(SnippetsUI.codeSnippetIdV().Get(),{
       $:1,
       $0:sid
      }))
       if(!Seq$1.contains(sid,allCodePredIds))
        SnippetsUI.codeSnippetIdV().Set({
         $:1,
         $0:sid
        });
     },SnippetsUI.allCodePredIdsW());
    }
  },SnippetsUI.snippetList().selV.get_View());
  SC$1.currentSnippetV=Var$2.Lens(SnippetsUI.snippetList().get_CurrentV(),Global.id,function(a$4,x$4)
  {
   return x$4;
  });
  SC$1.currentSnippetNameV=Var$2.Lens(SnippetsUI.currentSnippetV(),function($1)
  {
   return $1.snpName;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$2,$1.snpContent,$1.snpParentIdO,$1.snpPredIds,$1.snpProperties,$1.snpModified);
  });
  SC$1.currentSnippetContentV=Var$2.Lens(SnippetsUI.currentSnippetV(),function($1)
  {
   return $1.snpContent;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$1.snpName,$2,$1.snpParentIdO,$1.snpPredIds,$1.snpProperties,$1.snpModified);
  });
  SC$1.curSnp=(b$22=AppFramework.plugin(),b$22.AddVar(b$22.AddVar(b$22.Yield(),"name",SnippetsUI.currentSnippetNameV()),"content",SnippetsUI.currentSnippetContentV()));
  SC$1.monaco=(i$2=SnippetsUI.monacoNew(Var$2.Lens(SnippetsUI.currentSnippetV(),function($1)
  {
   return $1.snpContent;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$1.snpName,$2,$1.snpParentIdO,$1.snpPredIds,$1.snpProperties,$1.snpModified);
  })),GenEditor$1.New(i$2["var"],i$2.disabled,View$1.Const([]),i$2.onChange,i$2.onRender,null,null,null,i$2.editorO,i$2.editorHook));
  SC$1.parseW=View$1.Map((f$1=(g$1=function(s$1)
  {
   return Seq$1.choose(c$13,s$1);
  },function(x$4)
  {
   return g$1(f$7(x$4));
  }),function(x$4)
  {
   return g$5(f$1(x$4));
  }),SnippetsUI.currentSnippetContentV().get_View());
  SC$1.target2=LayoutEngineModule.newLyt(UoM$1.Tag$3("lytTarget2"),"");
  NewLY.addLayout(SnippetsUI.target2());
  AppFramework.addPlugIn((b$23=AppFramework.plugin(),b$23.AddAct(b$23.AddAct(b$23.AddAct(b$23.AddAct(b$23.AddAct(b$23.AddAct(b$23.AddAct(b$23.Merge(b$23.Merge(b$23.AddDoc(b$23.AddViw(b$23.AddVar(b$23.Name(b$23.Yield(),"Snippets"),"searchFor",SnippetsUI.searchFor()),"parseOut",SnippetsUI.parseW()),"editor",Lazy.Create(function()
  {
   return Doc.Element("div",[],[GenEditor.generateDoc(SnippetsUI.monaco())]);
  })),"snippets_",SnippetsUI.snippetList().PlugIn(SnippetsUI.selectorLensGuidId)),"curSnp_",SnippetsUI.curSnp()),"LoadSnippets",function()
  {
   SaveLoad.loadTextFile(self.document.getElementById("LoadSnippets").firstElementChild.firstElementChild.firstElementChild.firstElementChild);
  }),"SaveSnippets",function()
  {
   SaveLoad.saveAs();
  }),"IndentIn",function()
  {
   SnippetsUI.indentIn();
  }),"IndentOut",function()
  {
   SnippetsUI.indentOut();
  }),"AddSnippet",function()
  {
   SnippetsUI.addSnippet();
  }),"DeleteSnippet",function()
  {
   SnippetsUI.deleteSnippet();
  }),"ParseNewLY",function()
  {
   SnippetsUI.parseNewLY();
  })));
  LayoutEngine$1.addLayout0(LayoutEngineModule.newLyt(UoM$1.Tag$3("lytTarget"),"\r\n            main horizontal 10-50-70 part1 part2\r\n            \r\n            part1 div \"\" \r\n            : h1 \"\" \"Demo123 \" message\r\n            :: div \"\" \"Message:\"\r\n            :: textarea message \"height:200px;width:500px\"\r\n            \r\n            part2 div \"\" lytTarget.Layout\r\n            \r\n            message Var \"Hello\"     \r\n                "));
  LayoutEngine$1.addLayout0(LayoutEngineModule.newLyt(UoM$1.Tag$3("SnippetsLyt"),"\r\n                    split horizontal 0-50-100 AppFramework.AppFwkClient main\r\n                    main vertical 0-25-100 list snippet\r\n                    SearchFor   Doc InputLabel \"\" \"Search\" Snippets.searchFor\r\n                    File        Doc InputFile  \"id=LoadSnippets\" \"Open File\" Snippets.LoadSnippets \"\"\r\n                    list div \"display: flex;flex-direction: column\" File\r\n                    : button \"click=@{Snippets.AddSnippet}\"    \"Add New Snippet\"\r\n                    : button \"click=@{Snippets.DeleteSnippet}\" \"Delete Snippet\"\r\n                    : button \"click=@{Snippets.IndentIn}\"      \"Indent in\"\r\n                    : button \"click=@{Snippets.IndentOut}\"     \"Indent out\"\r\n                    : div    \"\" SearchFor \r\n                    : div \"overflow:auto;width:100%;max-width:100%\" Snippets.snippets_list\r\n                    snippet div \"display: flex;flex-direction: column\"\r\n                    : div    \"\" Snippets.snippets_sel\r\n                    : Doc    InputLabel \"\" \"Name:\" Snippets.curSnp_name\r\n                    : div \"height:100%;class=relative\" Snippets.editor                \r\n                "));
  NewLY.addLayout(LayoutEngineModule.newLyt(UoM$1.Tag$3("lytDemo"),"\r\n            AF PlugIn\r\n            : Doc InputLabel\r\n            : Doc Select\r\n            : Doc Input\r\n            : Doc TextArea\r\n            : Doc TrigAction\r\n            : Action SetVar\r\n            \r\n            Snippets PlugIn\r\n            : Var snippets_sel\r\n            : Var curSnp_content\r\n            : Var curSnp_name\r\n            : Var searchFor\r\n            : Action IndentOut\r\n            : Action IndentIn\r\n            : Doc snippets_list\r\n            : Action AddSnippet\r\n            : Action DeleteSnippet\r\n            : Action ParseNewLY\r\n            : Action LoadSnippets\r\n            : Action SaveSnippets\r\n            : Doc editor\r\n            \r\n            lytTarget2 PlugIn\r\n            : Var ParseMsgs\r\n            : Doc main \r\n            \r\n            editorDataSel Var \"\"\r\n            \r\n            target    View \"n => n.includes('main ')?n:'main Concat \"\" \"\"'\" Snippets.curSnp_content\r\n            \r\n            SetTarget Action AF.SetVar     \"lytTarget2.Layout\"        target\r\n            SetMain2  Action AF.SetVar     \"AppFramework.mainDocV\"    \"lytDemo.main2\"\r\n            SetMain   Action AF.SetVar     \"AppFramework.mainDocV\"    \"lytDemo.main\"\r\n            \r\n            Trigger   Doc    AF.TrigAction Snippets.snippets_sel \"lytDemo.SetTarget\"\r\n            \r\n            gotoMain  button \"click=@{SetMain};width:16px\" \"<<\"\r\n            gotoMain2 button \"click=@{SetMain2};width:16px\" \">>\"\r\n            \r\n            SearchFor   Doc AF.InputLabel \"\" \"Search\" Snippets.searchFor\r\n            \r\n            buttons ul \"\"\r\n            : div \"margin:3px\"\r\n            :: button \"click=@{Snippets.IndentOut};title=indent out\"     \"<--\"\r\n            :: button \"click=@{Snippets.IndentIn};title=indent in\"       \"--> \"\r\n            \r\n            File span \"class=input-group;margin:5px;id=LoadSnippets\"\r\n            : div \"class=input-group-btn\"\r\n            :: label \"class=btn btn-info\" \"Load File\"\r\n            ::: div \"\"\r\n            :::: input \"class=form-control;type=file;display: none;change=@{Snippets.LoadSnippets}\" \r\n            :: label \"class=btn btn-primary;click=@{Snippets.SaveSnippets}\" \"Save File\"\r\n            \r\n            list div \"display: flex;flex-direction: column\" gotoMain File\r\n            : div    \"margin:5px\" SearchFor \r\n            : Concat buttons\r\n            : div \"overflow:auto;width:100%;max-width:calc(100% - 10px)\" Snippets.snippets_list\r\n            : ul \"margin:3px\"\r\n            :: button \"click=@{Snippets.AddSnippet}   ;title=Add New Snippet\" \"+\"\r\n            :: button \"margin-left:20px;click=@{Snippets.DeleteSnippet};title=Delete  Snippet\" \"x\"\r\n            \r\n            snippet div \"display: flex;flex-direction: column;flex:1\" Trigger\r\n            : button \"click=@{SetTarget}\"  \"Apply\"\r\n            : button \"click=@{Snippets.ParseNewLY}\" \"Apply NewLY\"\r\n            : div    \"click=@{SetTarget}\" Snippets.snippets_sel\r\n            : Doc    AF.InputLabel \"\" \"Name:\" Snippets.curSnp_name\r\n            : Doc    AF.Select \"\" \"<Content>\" \"Values\" editorDataSel\r\n            : div \"height:100%;class=relative;flex:1\" Snippets.editor\r\n            : Doc    AF.TextArea \"height:7em\"   lytTarget2.ParseMsgs\r\n            \r\n            Left2 vertical 0-25-100 list snippet\r\n            main2 vertical 0-50-100 Left2 lytTarget2.main            \r\n                \r\n            Left div \"display:flex;flex-direction:column\" gotoMain2 snippet\r\n            main vertical 0-50-100 Left lytTarget2.main\r\n                "));
  AppFramework.mainDocV().Set("lytDemo.main2");
 };
 testing_Templates.appfwkclient=function(h)
 {
  testing_Templates.fixedsplitterhor();
  testing_Templates.fixedsplitterver();
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"appfwkclient"
  },h):void 0;
 };
 testing_Templates.fixedsplitterver=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"fixedsplitterver"
  },h):void 0;
 };
 testing_Templates.fixedsplitterhor=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"fixedsplitterhor"
  },h):void 0;
 };
 testing_GeneratedPrintf.p=function($1)
 {
  return $1.$==1?"FullRef ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":"LocalRef "+Utils.prettyPrint($1.$0);
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("actName = "+Utils.prettyPrint($1.actName))+"; "+("actFunction = "+testing_GeneratedPrintf.p$1($1.actFunction))+"; "+("actEnabled = "+testing_GeneratedPrintf.p$2($1.actEnabled))+"}";
 };
 testing_GeneratedPrintf.p$2=function($1)
 {
  return"View <fun>";
 };
 testing_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==2?"FunAct2 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":$1.$==1?"FunAct1 (<fun>, "+Utils.prettyPrint($1.$1)+")":"FunAct0 <fun>";
 };
 testing_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==1?"VConst "+testing_GeneratedPrintf.p$5($1.$0):"VView "+testing_GeneratedPrintf.p$4($1.$0);
 };
 testing_GeneratedPrintf.p$5=function($1)
 {
  return $1.$==1?"Choice2Of2 "+GeneratedPrintf.p($1.$0):"Choice1Of2 "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$4=function($1)
 {
  return"View <fun>";
 };
 testing_GeneratedPrintf.p$6=function($1)
 {
  return $1.$==1?"VConst "+testing_GeneratedPrintf.p$8($1.$0):"VView "+testing_GeneratedPrintf.p$7($1.$0);
 };
 testing_GeneratedPrintf.p$8=function($1)
 {
  return $1.$==1?"Choice2Of2 "+Utils.prettyPrint($1.$0):"Choice1Of2 "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$7=function($1)
 {
  return"View <fun>";
 };
 testing_Templates.wcompsplitterver=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"wcompsplitterver"
  },h):void 0;
 };
 testing_Templates.wcompsplitterhor=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"wcompsplitterhor"
  },h):void 0;
 };
 testing_Templates.appframework=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"appframework"
  },h):void 0;
 };
 GeneratedPrintf.p$1=function($1)
 {
  return"{"+("docName = "+Utils.prettyPrint($1.docName))+"; "+("docDoc = "+testing_GeneratedPrintf.p$9($1.docDoc))+"}";
 };
 testing_GeneratedPrintf.p$9=function($1)
 {
  return $1.$==5?"FunDoc5 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+", "+Utils.prettyPrint($1.$4)+", "+Utils.prettyPrint($1.$5)+")":$1.$==4?"FunDoc4 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+", "+Utils.prettyPrint($1.$4)+")":$1.$==3?"FunDoc3 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+")":$1.$==2?"FunDoc2 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":$1.$==1?"FunDoc1 (<fun>, "+Utils.prettyPrint($1.$1)+")":"LazyDoc "+Utils.prettyPrint($1.$0);
 };
 testing_Templates.tile=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"tile"
  },h):void 0;
 };
 testing_Templates.actiondisabled=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"actiondisabled"
  },h):void 0;
 };
 testing_Templates.action=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"action"
  },h):void 0;
 };
 testing_Templates.namevalue=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"namevalue"
  },h):void 0;
 };
 testing_Templates.namevalueinput=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"namevalueinput"
  },h):void 0;
 };
 testing_GeneratedPrintf.p$10=function($1)
 {
  return $1.$==1?"UnQuoted "+Utils.prettyPrint($1.$0):"Quoted "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$11=function($1)
 {
  return $1.$==4?"PrActRef "+testing_GeneratedPrintf.p$16($1.$0):$1.$==3?"PrViwRef "+testing_GeneratedPrintf.p$14($1.$0):$1.$==2?"PrVarRef "+testing_GeneratedPrintf.p$13($1.$0):$1.$==1?"PrDocRef "+testing_GeneratedPrintf.p$15($1.$0):"PrTextValL "+Utils.printList(function($2)
  {
   return testing_GeneratedPrintf.p$12($2);
  },$1.$0);
 };
 testing_GeneratedPrintf.p$16=function($1)
 {
  return"ActRef "+testing_GeneratedPrintf.p($1.$0);
 };
 testing_GeneratedPrintf.p$15=function($1)
 {
  return"DocRef "+testing_GeneratedPrintf.p($1.$0);
 };
 testing_GeneratedPrintf.p$12=function($1)
 {
  return $1.$==2?"TvViwRef "+testing_GeneratedPrintf.p$14($1.$0):$1.$==1?"TvVarRef "+testing_GeneratedPrintf.p$13($1.$0):"TvConst "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$14=function($1)
 {
  return"ViwRef "+testing_GeneratedPrintf.p($1.$0);
 };
 testing_GeneratedPrintf.p$13=function($1)
 {
  return"VarRef "+testing_GeneratedPrintf.p($1.$0);
 };
 testing_Templates.snippet=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"snippet"
  },h):void 0;
 };
 Runtime.OnLoad(function()
 {
  SnippetsUI.main();
 });
}());

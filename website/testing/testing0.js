(function()
{
 "use strict";
 var Global,FsRoot,Library,UoM,Unsafe,UoM$1,StringId,GuidId,Dict,ResultMessage,ResultMessageHelpers,Monads,Seq,Option,Async,WebSharper,Obj,Result,Builder,Operators,BuilderP,Depend,DependBuilder,Operators$1,ResultM,Builder$1,Operators$2,ResultMAutoOpen,AsyncResultM,AsyncResultMBuilder,Operators$3,AsyncResultMAutoOpen,ParseO,Serializer,JsonIntermediate,Snippet,SnippetModule,SnippetSerialize,Model,LibraryJS,Promise,PromiseM,View,GenEditor,Position,AnnotationType,Annotation,Completion,GenEditorHook,GenEditor$1,Serializer$1,ResizeObserver,Monaco,Position$1,Range,Uri,Location,FindMatch,WordAtPosition,Model$1,MarkDownString,MarkerData,CompletionItem,Hover,Editor,MonacoConfig,MonacoGenAdapter,MonacoRT,CompletionItemProvider,HoverProvider,DefinitionProvider,AppFrameworkTemplate,TestingJS,StartAppFramework,Util,AF,PlugInBuilder,ListModelData,LayoutEngine,ListModel,LM,LMX,SnippetTemplates,DragDrop,DragInfo,SnippetsUI,SnippetHierData,SaveLoad,SC$1,testing_Templates,IntelliFactory,Runtime,Utils,Strings,Seq$1,List,Arrays,Concurrency,Enumerator,Result$1,Operators$4,Unchecked,Collections,FSharpMap,FSharpSet,BalancedTree,Option$1,System,Guid,Date,console,UI,View$1,Var$1,JSON,Doc,AttrProxy,FromView,AttrModule,AppFramework,PlugInVar,PlugInView,PlugInDoc,PlugInAction,PlugInQuery,Lazy,LayoutEngineModule,PlugIn,ListModel$1,Slice,Templating,Runtime$1,Server,ProviderBuilder,Handler,TemplateInstance,Dictionary,DateUtil,Numeric,Client,Templates;
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
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 Operators=Result.Operators=Result.Operators||{};
 BuilderP=Result.BuilderP=Result.BuilderP||{};
 Depend=Monads.Depend=Monads.Depend||{};
 DependBuilder=Depend.DependBuilder=Depend.DependBuilder||{};
 Operators$1=Depend.Operators=Depend.Operators||{};
 ResultM=Monads.ResultM=Monads.ResultM||{};
 Builder$1=ResultM.Builder=ResultM.Builder||{};
 Operators$2=ResultM.Operators=ResultM.Operators||{};
 ResultMAutoOpen=Monads.ResultMAutoOpen=Monads.ResultMAutoOpen||{};
 AsyncResultM=Monads.AsyncResultM=Monads.AsyncResultM||{};
 AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder||{};
 Operators$3=AsyncResultM.Operators=AsyncResultM.Operators||{};
 AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen||{};
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
 GenEditor=LibraryJS.GenEditor=LibraryJS.GenEditor||{};
 Position=GenEditor.Position=GenEditor.Position||{};
 AnnotationType=GenEditor.AnnotationType=GenEditor.AnnotationType||{};
 Annotation=GenEditor.Annotation=GenEditor.Annotation||{};
 Completion=GenEditor.Completion=GenEditor.Completion||{};
 GenEditorHook=GenEditor.GenEditorHook=GenEditor.GenEditorHook||{};
 GenEditor$1=GenEditor.GenEditor=GenEditor.GenEditor||{};
 Serializer$1=LibraryJS.Serializer=LibraryJS.Serializer||{};
 ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};
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
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 StartAppFramework=TestingJS.StartAppFramework=TestingJS.StartAppFramework||{};
 Util=TestingJS.Util=TestingJS.Util||{};
 AF=TestingJS.AF=TestingJS.AF||{};
 PlugInBuilder=AF.PlugInBuilder=AF.PlugInBuilder||{};
 ListModelData=AF.ListModelData=AF.ListModelData||{};
 LayoutEngine=TestingJS.LayoutEngine=TestingJS.LayoutEngine||{};
 ListModel=TestingJS.ListModel=TestingJS.ListModel||{};
 LM=TestingJS.LM=TestingJS.LM||{};
 LMX=TestingJS.LMX=TestingJS.LMX||{};
 SnippetTemplates=TestingJS.SnippetTemplates=TestingJS.SnippetTemplates||{};
 DragDrop=TestingJS.DragDrop=TestingJS.DragDrop||{};
 DragInfo=DragDrop.DragInfo=DragDrop.DragInfo||{};
 SnippetsUI=TestingJS.SnippetsUI=TestingJS.SnippetsUI||{};
 SnippetHierData=SnippetsUI.SnippetHierData=SnippetsUI.SnippetHierData||{};
 SaveLoad=SnippetsUI.SaveLoad=SnippetsUI.SaveLoad||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 testing_Templates=Global.testing_Templates=Global.testing_Templates||{};
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
 Operators$4=WebSharper&&WebSharper.Operators;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpMap=Collections&&Collections.FSharpMap;
 FSharpSet=Collections&&Collections.FSharpSet;
 BalancedTree=Collections&&Collections.BalancedTree;
 Option$1=WebSharper&&WebSharper.Option;
 System=Global.System;
 Guid=System&&System.Guid;
 Date=Global.Date;
 console=Global.console;
 UI=WebSharper&&WebSharper.UI;
 View$1=UI&&UI.View;
 Var$1=UI&&UI.Var$1;
 JSON=Global.JSON;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 FromView=UI&&UI.FromView;
 AttrModule=UI&&UI.AttrModule;
 AppFramework=LibraryJS&&LibraryJS.AppFramework;
 PlugInVar=AppFramework&&AppFramework.PlugInVar;
 PlugInView=AppFramework&&AppFramework.PlugInView;
 PlugInDoc=AppFramework&&AppFramework.PlugInDoc;
 PlugInAction=AppFramework&&AppFramework.PlugInAction;
 PlugInQuery=AppFramework&&AppFramework.PlugInQuery;
 Lazy=WebSharper&&WebSharper.Lazy;
 LayoutEngineModule=LibraryJS&&LibraryJS.LayoutEngineModule;
 PlugIn=AppFramework&&AppFramework.PlugIn;
 ListModel$1=UI&&UI.ListModel;
 Slice=WebSharper&&WebSharper.Slice;
 Templating=UI&&UI.Templating;
 Runtime$1=Templating&&Templating.Runtime;
 Server=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 Dictionary=Collections&&Collections.Dictionary;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
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
 Result.freeMessage=function(r)
 {
  return r.$==1?Library.Error$1(ResultMessage.freeMessage(r.$0)):{
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
   return Library.Error$1(f(x));
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
  Result.defaultWith(fE,Result$1.Map(f,r));
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
  return fmt(Library.Error$1);
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
 Operators$1.op_BarGreaterGreater=function(ma,f)
 {
  return(Depend.map(f))(ma);
 };
 Operators$1.op_GreaterGreaterEquals=function(ma,f)
 {
  return Depend.bind(f,ma);
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
 Operators$2.rtn=function(v)
 {
  return ResultM.rtn(v);
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
  return ResultM.bindP(f,v);
 };
 Operators$2.op_BarGreaterGreater=function(v,f)
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
   return Operators$4.FailWith(Global.String(x));
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
 Operators$3.rtn=function(v)
 {
  return AsyncResultM.rtn(v);
 };
 Operators$3.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators$3.op_GreaterGreaterEquals(f(v),g);
 };
 Operators$3.op_GreaterMinusGreater=function(f,g,v)
 {
  return Operators$3.op_BarGreaterGreater(f(v),g);
 };
 Operators$3.op_GreaterGreaterEquals=function(v,f)
 {
  return AsyncResultM.bind(f,v);
 };
 Operators$3.op_BarGreaterGreater=function(v,f)
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
 ParseO.Int64$1=function()
 {
  SC$1.$cctor();
  return SC$1["|Int64|_|"];
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
 ParseO.parseInt64O$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseInt64O;
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
 ParseO.parseDateO2$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO2;
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
    },Operators$4.range(0,v.length-1)):[],Seq$1.delay(function()
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
 View.sequenceSeq$1=function(sq)
 {
  return View.traverseSeq$1(Global.id,sq);
 };
 View.traverseSeq$1=function(f,sq)
 {
  return View.map$1(Global.id,Arrays.foldBack(function(head,tail)
  {
   return View.op_GreaterGreaterEquals$1(f(head),function(h)
   {
    return View.op_GreaterGreaterEquals$1(tail,function(t)
    {
     return View.rtn$1(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),View.rtn$1(List.T.Empty)));
 };
 View.op_GreaterGreaterEquals$1=function(v,f)
 {
  return View.bind$1(f,v);
 };
 View.rtn$1=function(a)
 {
  return View$1.Const(a);
 };
 View.map$1=function(a,a$1)
 {
  return View$1.Map(a,a$1);
 };
 View.bind$1=function(a,a$1)
 {
  return View$1.Bind(a,a$1);
 };
 View.insertWO$1=function(a)
 {
  return a==null?View$1.Const(null):View$1.Map(function(a$1)
  {
   return{
    $:1,
    $0:a$1
   };
  },a.$0);
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
 Serializer$1.deserializeWithFail=function(s,s$1)
 {
  return Serializer$1.deserialize(function()
  {
   return Operators$4.FailWith("Error expecting float");
  },function()
  {
   return Operators$4.FailWith("Error expecting int");
  },function()
  {
   return Operators$4.FailWith("Error expecting string");
  },function()
  {
   return Operators$4.FailWith("Error expecting bool");
  },function()
  {
   return Operators$4.FailWith("Error expecting array");
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
     return Var$1.Set(a,a$1);
    })))(v),v))==null?null:{
     $:1,
     $0:rc
    };
   };
  }];
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
 Monaco.render$1627$48=function(monc)
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
 MonacoGenAdapter.generateDoc$1769$48=function(monRT,onRender,genE)
 {
  return function(elchild)
  {
   var editor,_elt;
   editor=(_elt=elchild.parentElement,self.monaco.editor.create(_elt,monRT.options,monRT.overrides));
   ResizeObserver.addResizeObserver$1(function()
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
     ResizeObserver.addResizeObserver$1(function()
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
  return Doc.Element("div",attrs,[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[Doc.TextNode(txt)]),Doc.InputArea([AttrProxy.Create("class","form-control"),Util.disabled(disW)],Var$1.Lens(_var,Global.id,function($1,$2)
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
 PlugInBuilder=AF.PlugInBuilder=Runtime.Class({
  Merge:function(plg,prefix,p2)
  {
   plg.plgVars.AppendMany(Seq$1.map(function(v)
   {
    return PlugInVar.New(prefix+v.varName,v.varVar);
   },p2.plgVars));
   plg.plgViews.AppendMany(Seq$1.map(function(w)
   {
    return PlugInView.New(prefix+w.viwName,w.viwView);
   },p2.plgViews));
   plg.plgDocs.AppendMany(Seq$1.map(function(d)
   {
    return PlugInDoc.New(prefix+d.docName,d.docDoc);
   },p2.plgDocs));
   plg.plgActions.AppendMany(Seq$1.map(function(a)
   {
    return PlugInAction.New(prefix+a.actName,a.actFunction,a.actEnabled);
   },p2.plgActions));
   plg.plgQueries.AppendMany(Seq$1.map(function(q)
   {
    return PlugInQuery.New(prefix+q.qryName,q.qryFunction);
   },p2.plgQueries));
   return plg;
  },
  AddViw:function(plg,name,viw)
  {
   plg.plgViews.Append(AppFramework.newViw(name,viw));
  },
  AddActO:function(plg,name,actO)
  {
   actO==null?void 0:plg.plgActions.Append(AppFramework.newAct(name,actO.$0));
   return plg;
  },
  AddAct:function(plg,name,act)
  {
   plg.plgActions.Append(AppFramework.newAct(name,act));
   return plg;
  },
  AddDocF:function(plg,name,docF)
  {
   plg.plgDocs.Append(AppFramework.newDoc(name,Lazy.Create(function()
   {
    return LayoutEngineModule.turnToView(docF);
   })));
   return plg;
  },
  AddDoc:function(plg,name,doc)
  {
   plg.plgDocs.Append(AppFramework.newDoc(name,doc));
   return plg;
  },
  AddVar:function(plg,name,_var)
  {
   plg.plgVars.Append(AppFramework.newVar(name,_var));
   return plg;
  },
  Name:function(plg,name)
  {
   return PlugIn.New(name,plg.plgVars,plg.plgViews,plg.plgDocs,plg.plgActions,plg.plgQueries);
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
   return PlugIn.New("Main",i.plgVars,i.plgViews,i.plgDocs,i.plgActions,i.plgQueries);
  }
 },Obj,PlugInBuilder);
 PlugInBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },PlugInBuilder);
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
   b=AF.plugin();
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
 AF.addPlugIn2=function(plg)
 {
  var m;
  AppFramework.addPlugIn(plg);
  m=Seq$1.tryHead(plg.plgDocs);
  m!=null&&m.$==1?AppFramework.mainDocV().Set(plg.plgName+"."+m.$0.docName):void 0;
 };
 AF.plugin=function()
 {
  SC$1.$cctor();
  return SC$1.plugin;
 };
 LayoutEngine.addLayout0=function(lyt)
 {
  LayoutEngineModule.addLayout(lyt);
  AppFramework.mainDocV().Set(lyt.lytName);
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
 LM.addElements=function(li,elems)
 {
  li.elems.AppendMany(elems);
 };
 LM.getDoc=function(keyF,def,newF,predWO,elUI)
 {
  return LM.getDocFor(ListModel$1.Create(keyF,List.T.Empty),def,newF,predWO,elUI);
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
  selected0=Var$1.Create$1(null);
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
  return ListModelData.New(result.elems,Doc.Convert(Global.id,ListModel.MapLens(predWO,function(k,v)
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
  return elemUI(a,b,Var$1.Lens(v,function(t)
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
   },newPidO)?(Var$1.Lens(SnippetsUI.currentSnippetV(),function($3)
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
     Var$1.Lens(SnippetsUI.currentSnippetV(),function($1)
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
 SnippetsUI.calcUI$2845$44=function(k)
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
 SnippetsUI.calcUI$2844$44=function(k)
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
 SnippetsUI.calcUI$2843$44=function(k)
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
 SnippetsUI.calcUI$2834$44=function(snpdW,snp)
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
 SnippetsUI.calcUI$2828$44=function(k,lmd)
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
  },lmd.get_CurrentV().get_View(),lmd.get_CurrentV().get_View()),lmd.get_CurrentV().get_View()),(prior=[Var$1.Create$1(null)],(View$1.Sink(function(v$1)
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
  return SC$1.TemplateFileName;
 };
 SC$1.$cctor=function()
 {
  var g,t,s,x,t$1,t$2,t$3,t$4,t$5,t$6,t$7,t$8,t$9,t$10,t$11,i,x$1,t$12,t$13,t$14,t$15,t$16,t$17,i$1,b,b$1,v,prior,b$2,b$3,b$4,i$2,b$5;
  SC$1.$cctor=Global.ignore;
  function f(s$1)
  {
   return s$1+"T00:00:00";
  }
  function t$18(a)
  {
   return SnippetsUI.snippetsLM().TryFindByKey(a);
  }
  function t$19(a)
  {
   return SnippetsUI.snippetsLM().TryFindByKey(a);
  }
  SC$1.rtn=function(v$1)
  {
   return[v$1];
  };
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.resultP=new BuilderP.New();
  SC$1.depend=new DependBuilder.New();
  SC$1.resultM=new Builder$1.New();
  SC$1.asyncResultM=new AsyncResultMBuilder.New();
  SC$1.parseDateO2=(g=ParseO.tryParseWith$1(function(a)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];
  }),function(x$2)
  {
   return g(f(x$2));
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
    set:function(v$1)
    {
     o=v$1;
    }
   }),o];
  });
  SC$1.parseInt64O=ParseO.tryParseWith$1(function(a)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt64(a,{
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
  SC$1.parseSingleO=ParseO.tryParseWith$1(function(a)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith$1(function(a)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];
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
    set:function(v$1)
    {
     o=v$1;
    }
   }),o];
  });
  SC$1["|Date|_|"]=ParseO.parseDateO$1();
  SC$1["|Int|_|"]=ParseO.parseIntO$1();
  SC$1["|Int64|_|"]=ParseO.parseInt64O$1();
  SC$1["|Single|_|"]=ParseO.parseSingleO$1();
  SC$1["|Double|_|"]=ParseO.parseDoubleO$1();
  SC$1["|Guid|_|"]=ParseO.parseGuidO$1();
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
    $0:Operators$4.toInt(o.$0)
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
  SC$1.serDate=[function(x$2)
  {
   return Global.String(Global.id(x$2));
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
  SC$1.serGuid=(t=Serializer.serString(),Serializer.mapO(Global.String,ParseO.parseGuidO$1(),t[0],t[1]));
  SC$1.defaultSnippet=Snippet.New(UoM$1.Tag$4("00000000-0000-0000-0000-000000000000"),"","",null,new FSharpSet.New$1(null),[],(new Date(0)).getTime());
  SC$1.serSnippetId=(s="SnippetId",[function(gid)
  {
   var x$2;
   x$2=Global.String(UoM$1.Untag$4(gid));
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("{"+Utils.prettyPrint($2)+" :"+Utils.prettyPrint($3)+"}");
   }))(Global.id))(s))(x$2);
  },function(j)
  {
   var o,o$1,o$2,f$1;
   o=(o$1=(o$2=j.tryField(s),o$2==null?null:o$2.$0.tryString()),(f$1=ParseO.parseGuidO$1(),o$1==null?null:f$1(o$1.$0)));
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
   var x$2;
   function c(n,ser,_deser)
   {
    var x$3,m;
    x$3=ser(rc);
    m=((Runtime.Curried3(function($1,$2,$3)
    {
     return $1(Utils.prettyPrint($2)+": "+Utils.toSafe($3));
    }))(Global.id))(n);
    return x$3==null?null:{
     $:1,
     $0:m(x$3.$0)
    };
   }
   x$2=Strings.concat(", ",Seq$1.choose(function($1)
   {
    return c($1[0],$1[1],$1[2]);
   },x));
   return(function($1)
   {
    return function($2)
    {
     return $1("{"+Utils.toSafe($2)+"}");
    };
   }(Global.id))(x$2);
  },function(j)
  {
   return{
    $:1,
    $0:Seq$1.fold(function(rc,t$20)
    {
     var x$2;
     x$2=j.tryField(t$20[0]);
     return(t$20[2](rc))(x$2);
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
   var x$2;
   function c(n,ser,_deser)
   {
    var x$3,m;
    x$3=ser(rc);
    m=((Runtime.Curried3(function($1,$2,$3)
    {
     return $1(Utils.prettyPrint($2)+": "+Utils.toSafe($3));
    }))(Global.id))(n);
    return x$3==null?null:{
     $:1,
     $0:m(x$3.$0)
    };
   }
   x$2=Strings.concat(", ",Seq$1.choose(function($1)
   {
    return c($1[0],$1[1],$1[2]);
   },x$1));
   return(function($1)
   {
    return function($2)
    {
     return $1("{"+Utils.toSafe($2)+"}");
    };
   }(Global.id))(x$2);
  },function(j)
  {
   return{
    $:1,
    $0:Seq$1.fold(function(rc,t$20)
    {
     var x$2;
     x$2=j.tryField(t$20[0]);
     return(t$20[2](rc))(x$2);
    },i$1,x$1)
   };
  }]));
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
  SC$1.html="\r\n            <div style=\"display:none\" >\r\n                <div links>\r\n                    <link href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" type=\"text/css\" rel=\"stylesheet\">\r\n                    <script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"  type=\"text/javascript\"></script>\r\n                </div>\r\n                <div ws-template=\"AppFramework\" style=\"height: calc(100vh - 4px); width: calc(100vw - 4px) \" class=\"relative\" >\r\n                    <div ws-hole=\"MainClient\"></div>\r\n                    <div class=\"AppFrameworkGo\"><button ws-onclick=\"GoClient\">${MainDoc}</button></div>\r\n                </div>\r\n                <style>\r\n                    .AppFrameworkGo {\r\n                        max-width: 2px;\r\n                        max-height: 2px;\r\n                        z-index: 4000;\r\n                        overflow: hidden;\r\n                        position: fixed;\r\n                        top: 0px;\r\n                        left: 0px;\r\n                    }\r\n                </style>\r\n                <div ws-template=\"FixedSplitterVer\" \r\n                    style=\"display: grid; \r\n                           grid-gap: 0px; \r\n                           box-sizing: border-box; \r\n                           height: 100%;\r\n                           width : 100%;\r\n                           grid-template-areas: 'one two'; \r\n                           grid-template-rows   :100%; \r\n                           overflow: hidden; \r\n                           grid-template-columns: ${PartSizes}\"  >\r\n                   <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n                   <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"FixedSplitterHor\" \r\n               style=\"display: grid; \r\n                      grid-gap: 0px; \r\n                      box-sizing: border-box; \r\n                      height: 100%;\r\n                      width : 100%;\r\n                      grid-template-areas: 'one' 'two'; \r\n                      grid-template-columns:100%; \r\n                      overflow: hidden; \r\n                      grid-template-rows   : ${PartSizes}\"  >\r\n              <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n              <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"WCompSplitterHor\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid;\r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one' 'two'; \r\n                            grid-template-columns:100%; \r\n                            overflow: hidden; \r\n                            grid-template-rows   : ${PartSizes}\" \r\n                     >\r\n                     <slot></slot>\r\n                    <slot name=\"splitter\">  <div style=\"grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-row:2; grid-column:1 / 1 ; \r\n                            cursor: row-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            height: ${Gap}; \r\n                            margin-top :-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>        \r\n                <div ws-template=\"WCompSplitterVer\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid; \r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one two'; \r\n                            grid-template-rows   :100%; \r\n                            overflow: hidden; \r\n                            grid-template-columns: ${PartSizes}\"  >\r\n                    <slot></slot>\r\n                    <slot name=\"splitter\"> <div style=\"grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-column:2; grid-row:1 / 1\r\n                            cursor: column-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            width: ${Gap}; \r\n                            margin-left:-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>\r\n                <div ws-template=\"AppFwkClient\" >\r\n                    <ws-FixedSplitterHor>\r\n                        <PartSizes>55px calc(100% - 55px)</PartSizes>\r\n                        <First>\r\n                            <span style=\"display: grid;\r\n                                  grid-template-columns: 30% 20% 20% 10%;\r\n                                  grid-gap: 25px;\r\n                                \">\r\n                                <div class=\"mainTitle\">AppFramework</div>\r\n                            </span>\r\n                        </First>\r\n                        <Second>\r\n                                <ws-FixedSplitterVer>\r\n                                    <PartSizes>calc(100% - 150px) 150px</PartSizes>\r\n                                    <First>\r\n                                        <wcomp-splitter vertical value=\"18\" max=\"100\">\r\n                                            <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\" >\r\n                                                <div ws-template=\"Tile\">\r\n                                                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                                                    ws-ondrag=\"Drag\"\r\n                                                    ws-ondragover=\"DragOver\"\r\n                                                    ws-ondrop=\"Drop\"\r\n                                                   >\r\n                                                   <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                                                   <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                                                   <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                                               </div>\r\n                                       \r\n                                                </div>\r\n                                            </div></div>\r\n                                            <wcomp-splitter vertical value=\"100\" min=\"30\" max=\"100\">\r\n                                                <ws-FixedSplitterHor>\r\n                                                    <PartSizes>32px calc(100% - 32px)</PartSizes>\r\n                                                    <First>\r\n                                                        <div>\r\n                                                            <div class=\"input-group\">\r\n                                                                <span class=\"input-group-addon\">name:</span>\r\n                                                                <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </First>\r\n                                                    <Second>\r\n                                                        <div style=\"overflow:auto\">\r\n                                                            <div>\r\n                                                                <div>Docs:</div>\r\n                                                                <div ws-hole=\"Docs\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Vars:</div>\r\n                                                                <div ws-hole=\"Vars\" style=\"overflow:auto\" >\r\n                                                                        <div ws-template=\"NameValueInput\" class=\"input-group\">\r\n                                                                        <span class=\"input-group-addon\">${Name}:</span>\r\n                                                                        <textarea class=\"form-control\" id=\"\" placeholder=\"Value...\" ws-var=\"Value\" spellcheck=\"false\">\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Views:</div>\r\n                                                                <div ws-hole=\"Views\" style=\"overflow:auto\" >\r\n                                                                    <div ws-template=\"NameValue\" class=\"input-group\">\r\n                                                                        <span class=\"input-group-addon\">${Name}:</span>\r\n                                                                        <span class=\"input-group-addon\">${Value}</span>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Queries:</div>\r\n                                                                <div ws-hole=\"Queries\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </Second>\r\n                                                </ws-FixedSplitterHor>\r\n                                                <wcomp-tabstrip >\r\n                                                    <div tabname=\"Properties\">\r\n                                                        <div>\r\n                                                            <table style=\"border-spacing:0px\">\r\n                                                                <thead>\r\n                                                                    <th style=\"width: 30%  \">Name</th>\r\n                                                                    <th style=\"width: 70% \">Value</th>\r\n                                                                </thead>\r\n                                                                <tbody ws-hole=\"Properties\" ws-children-template=\"Property\">\r\n                                                                    <tr ws-onclick=\"Select\" style=\"margin-bottom: 2px\" class=\"level  \">\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <input ws-var=\"Name\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Property...\">\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <textarea ws-var=\"Value\" class=\"form-control\" id=\"\" placeholder=\"Value...\"></textarea>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div style=\" cursor: pointer \" title=\"remove\">\r\n                                                                                <button ws-onclick=\"Remove\" class=\"delete is-small\">x</button>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </wcomp-tabstrip>\r\n                                            </wcomp-splitter>\r\n                                        </wcomp-splitter>\r\n                                    </First>\r\n                                    <Second>\r\n                                        <div style=\"\r\n                                            overflow: hidden;\r\n                                            display: grid;\r\n                                            grid-template-columns: 100%;\r\n                                            grid-template-rows: repeat(15, calc(100% / 15));\r\n                                            bxackground-color: #eee;\r\n                                            box-sizing: border-box;\r\n                                            padding : 5px;\r\n                                            grid-gap: 5px;\r\n                                            margin-right: 21px;\r\n                                       \"  class=\"absolute\" ws-hole=\"Actions\" >\r\n                                            <button ws-template=\"Action\"         ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\"          >${Name}</button>\r\n                                            <button ws-template=\"ActionDisabled\" ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\" disabled >${Name}</button>\r\n                                        </div>\r\n                                    </Second>\r\n                                </ws-FixedSplitterVer>\r\n                        </Second>\r\n                    </ws-FixedSplitterHor>\r\n                </div>\r\n                <style style=\"display: none\">\r\n                        .Hidden     { display   : none         }\r\n                        table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                        td input.form-control { \r\n                            padding    : 0px; \r\n                            font-family: monospace;\r\n                            font-size  :   small;\r\n                            margin-top :   0px;\r\n                            margin-left: -2px;\r\n                            width      : 100%\r\n                        }\r\n                        td select {\r\n                            font-size : smaller;\r\n                            max-width : 8ch;\r\n                        }\r\n                        xtextarea {\r\n                           resize : none;\r\n                        }\r\n                        .tab-content {\r\n                            overflow: hidden\r\n                        }\r\n                        .tab-children {\r\n                            position:relative;\r\n                        }\r\n                        .tab-children>div>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        .relative {\r\n                            position:relative;\r\n                        }\r\n                        .relative>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                        table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                        table.table-striped    tbody input              { background: transparent; border: none}\r\n                        table.table-striped    tbody select             { background: transparent; border: none}\r\n                        table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                        table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                        table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                        table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                        table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                        table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                                   border-bottom: solid thin blue     ; } \r\n                        table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                        table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                        thead { color: gray }\r\n                        h3 { \r\n                            color: gray;\r\n                            line-height: 1em;\r\n                        }\r\n                        button       { border: solid thin transparent ; border-radius: 3px; }\r\n                        button:hover { border: solid thin blue }\r\n                        .indenter { position  : absolute; \r\n                                    top:0px; bottom:0px; left:0px; \r\n                                    background: white; color:white;\r\n                                    border-right: gray thin dotted;\r\n                                    }\r\n                        body {\r\n                            color      : #333;\r\n                            font-size  : small;\r\n                            font-family: monospace;\r\n                            line-height: 1.2;\r\n                        }\r\n                        .mainTitle {  \r\n                            font-size: 48px;\r\n                            font-weight: 500;\r\n                            color: gray;\r\n                            margin-top: -12px;\r\n                        }\r\n                        .CodeMirror {\r\n                            height: 100%;\r\n                        }\r\n                        \r\n                      \r\n                        body { margin: 0px }     \r\n                             \r\n                        div textarea {\r\n                            font-family     : monospace;\r\n                        }\r\n                        .code-editor-list-tile {\r\n                            white-space     : nowrap; \r\n                            border-style    : solid none none;\r\n                            border-color    : white;\r\n                            border-width    : 1px;\r\n                            background-color: #D8D8D8;\r\n                            display         : flex;\r\n                        }\r\n                        .code-editor-list-text{\r\n                            padding         : 1px 10px 1px 5px;\r\n                            overflow        : hidden;\r\n                            text-overflow   : ellipsis;\r\n                            white-space     : nowrap;\r\n                            flex            : 1;\r\n                        }\r\n                        \r\n                        .code-editor-list-tile span.node.ErrorMsg {\r\n                            background-color: red\r\n                        }\r\n                        .code-editor-list-tile span.node.expanded::before {\r\n                            content: \"-\"\r\n                        }\r\n                        .code-editor-list-tile span.node.collapsed::before {\r\n                            content: \"+\"\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor {\r\n                            font-weight     : bold;\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.indirect-predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.included-predecessor {\r\n                            color           : chocolate;\r\n                        }\r\n                        .code-editor-list-tile.selected {\r\n                            background-color: #77F;\r\n                            color           : white;\r\n                        }\r\n                        .code-editor-list-tile.codeSnippet {\r\n                            text-decoration: underline\r\n                        }\r\n                        .code-editor-list-tile:hover {\r\n                            background      : lightgray;\r\n                        }\r\n                        .code-editor-list-tile.selected:hover {\r\n                            background      : blue;\r\n                        }\r\n                        .code-editor-list-tile>.predecessor {\r\n                            font-weight     : bold;\r\n                            border-style    : inset;\r\n                            border-width    : 1px;\r\n                            text-align      : center;\r\n                            color           : transparent;\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        \r\n                        .CodeMirror { height: 100%; }\r\n                        \r\n                        .node {\r\n                            background-color: white; \r\n                            width           : 2ch; \r\n                            color           : #A03; \r\n                            font-weight     : bold; \r\n                            text-align      : center;\r\n                            font-family     : arial;\r\n                        }\r\n                        .Warning { text-decoration: underline lightblue } \r\n                        .Error   { text-decoration: underline red       } \r\n                        \r\n                    </style>\r\n            </div>\r\n            ";
  SC$1.htmlD=Depend.dependByName("AppFrameworkTemplate.html",AppFrameworkTemplate.html(),Global.id);
  SC$1.startWithHtmlD=(b$1=Depend.depend(),b$1.Delay(function()
  {
   return b$1.Bind(StartAppFramework.htmlD(),function(a)
   {
    return b$1.Return(function()
    {
     var d,x$2,a$1;
     d=self.document.createElement("div");
     self.document.body.appendChild(d);
     d.outerHTML=a;
     x$2=AppFramework.getMainDoc().f();
     a$1=self.document.body;
     Templates.LoadLocalTemplates("");
     Doc.RunAppend(a$1,x$2);
    });
   });
  }));
  SC$1.unselectorV=new FromView.New(View$1.Const(null),Global.ignore);
  SC$1.plugin=new PlugInBuilder.New();
  SC$1.html$1="\r\n                <div ws-template=\"Snippet\" >\r\n                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                         ws-ondrag=\"Drag\"\r\n                         ws-ondragover=\"DragOver\"\r\n                         ws-ondrop=\"Drop\"\r\n                        >\r\n                        <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                        <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                        <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                    </div>\r\n                </div>\r\n                <style>\r\n                    .Hidden     { display   : none         }\r\n                    table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                    td input.form-control { \r\n                        padding    : 0px; \r\n                        font-family: monospace;\r\n                        font-size  :   small;\r\n                        margin-top :   0px;\r\n                        margin-left: -2px;\r\n                        width      : 100%\r\n                    }\r\n                    td select {\r\n                        font-size : smaller;\r\n                        max-width : 8ch;\r\n                    }\r\n                    textarea {\r\n                       resize : none;\r\n                    }\r\n                    .tab-content {\r\n                        overflow: hidden\r\n                    }\r\n                    .tab-children {\r\n                        position:relative;\r\n                    }\r\n                    .tab-children>div>* {\r\n                        position:absolute;\r\n                        height: 100%;\r\n                        width:  100%;\r\n                        display: grid;\r\n                    }\r\n                    .relative {\r\n                        position:relative;\r\n                    }\r\n                    .relative>* {\r\n                        position:absolute;\r\n                        height: 100%;\r\n                        width:  100%;\r\n                        display: grid;\r\n                    }\r\n                    table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                    table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                    table.table-striped    tbody input              { background: transparent; border: none}\r\n                    table.table-striped    tbody select             { background: transparent; border: none}\r\n                    table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                    table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                    table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                    table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                    table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                    table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                               border-bottom: solid thin blue     ; } \r\n                    table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                    table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                    thead { color: gray }\r\n                    h3 { \r\n                        color: gray;\r\n                        line-height: 1em;\r\n                    }\r\n                    button       { border: solid thin transparent ; border-radius: 3px; }\r\n                    button:hover { border: solid thin blue }\r\n                    .indenter { position  : absolute; \r\n                                top:0px; bottom:0px; left:0px; \r\n                                background: white; color:white;\r\n                                border-right: gray thin dotted;\r\n                                }\r\n                    body {\r\n                        color      : #333;\r\n                        font-size  : small;\r\n                        font-family: monospace;\r\n                        line-height: 1.2;\r\n                    }\r\n                    .mainTitle {  \r\n                        font-size: 48px;\r\n                        font-weight: 500;\r\n                        color: gray;\r\n                        margin-top: -12px;\r\n                    }\r\n                    .CodeMirror {\r\n                        height: 100%;\r\n                    }\r\n                    \r\n                  \r\n                    body { margin: 0px }     \r\n                         \r\n                    div textarea {\r\n                        font-family     : monospace;\r\n                    }\r\n                    .code-editor-list-tile {\r\n                        white-space     : nowrap; \r\n                        border-style    : solid none none;\r\n                        border-color    : white;\r\n                        border-width    : 1px;\r\n                        background-color: #D8D8D8;\r\n                        display         : flex;\r\n                    }\r\n                    .code-editor-list-text{\r\n                        padding         : 1px 10px 1px 5px;\r\n                        overflow        : hidden;\r\n                        text-overflow   : ellipsis;\r\n                        white-space     : nowrap;\r\n                        flex            : 1;\r\n                    }\r\n                    \r\n                    .code-editor-list-tile span.node.ErrorMsg {\r\n                        background-color: red\r\n                    }\r\n                    .code-editor-list-tile span.node.expanded::before {\r\n                        content: \"-\"\r\n                    }\r\n                    .code-editor-list-tile span.node.collapsed::before {\r\n                        content: \"+\"\r\n                    }\r\n                    .code-editor-list-tile.direct-predecessor {\r\n                        font-weight     : bold;\r\n                        color           : blue;\r\n                    }\r\n                    .code-editor-list-tile.indirect-predecessor {\r\n                        color           : blue;\r\n                    }\r\n                    .code-editor-list-tile.included-predecessor {\r\n                        color           : chocolate;\r\n                    }\r\n                    .code-editor-list-tile.selected {\r\n                        background-color: #77F;\r\n                        color           : white;\r\n                    }\r\n                    .code-editor-list-tile.codeSnippet {\r\n                        text-decoration : underline;\r\n                        font-weight     : bold;\r\n                    }\r\n                    .code-editor-list-tile:hover {\r\n                        background      : lightgray;\r\n                    }\r\n                    .code-editor-list-tile.selected:hover {\r\n                        background      : blue;\r\n                    }\r\n                    .code-editor-list-tile>.predecessor {\r\n                        font-weight     : bold;\r\n                        border-style    : inset;\r\n                        border-width    : 1px;\r\n                        text-align      : center;\r\n                        color           : transparent;\r\n                    }\r\n                    .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                        color           : blue;\r\n                    }\r\n                    \r\n                    .CodeMirror { height: 100%; }\r\n                    \r\n                    .node {\r\n                        background-color: white; \r\n                        width           : 2ch; \r\n                        color           : #A03; \r\n                        font-weight     : bold; \r\n                        text-align      : center;\r\n                        font-family     : arial;\r\n                    }\r\n                    .Warning { text-decoration: underline lightblue } \r\n                    .Error   { text-decoration: underline red       } \r\n                    \r\n                </style>\r\n            ";
  SC$1.drag=DragInfo.DragNone;
  SC$1.TemplateFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\website\\Templates.html";
  SC$1.snippetsLM=ListModel$1.Create(function(e)
  {
   return e.snpId;
  },List.T.Empty);
  SC$1.collapsedV=Var$1.Create$1(new FSharpSet.New$1(null));
  SC$1.codeSnippetIdV=Var$1.Create$1(null);
  SC$1.searchFor=Var$1.Create$1("");
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
  },SnippetsUI.snippetsLM().v),(prior=[Var$1.Create$1(null)],(View$1.Sink(function(v$1)
  {
   if(!Unchecked.Equals(prior[0].Get(),v$1))
    prior[0].Set(v$1);
  },v),prior[0].get_View())));
  SC$1.processHierW=(b$2=View$1.get_Do(),View$1.Bind(function(a)
  {
   return View$1.Bind(function(a$1)
   {
    return View$1.Const(SnippetsUI.processHier(a,a$1));
   },SnippetsUI.collapsedV().get_View());
  },SnippetsUI.snpIdParentsW()));
  SC$1.search=(b$3=View$1.get_Do(),View$1.Bind(function(a)
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
    }(a)),o$1==null?null:{
     $:1,
     $0:o$1.$0.visible
    });
    return o==null||o.$0;
   }
   return View$1.Bind(function(a$1)
   {
    return a$1===""?View$1.Const(visibleF):View$1.Bind(function(a$2)
    {
     return View$1.Bind(function(a$3)
     {
      return a$1==="."?View$1.Const(function(snp)
      {
       return(Unchecked.Equals(a$3,{
        $:1,
        $0:snp.snpId
       })||Seq$1.contains(snp.snpId,a$2))&&visibleF(snp);
      }):View$1.Const(function(snp)
      {
       return snp.snpName.indexOf(a$1)!=-1||snp.snpContent.indexOf(a$1)!=-1;
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
  View$1.Sink(function(a)
  {
   var sid;
   if(a!=null&&a.$==1)
    {
     sid=a.$0;
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
  SC$1.currentSnippetV=Var$1.Lens(SnippetsUI.snippetList().get_CurrentV(),Global.id,function(a,x$2)
  {
   return x$2;
  });
  SC$1.currentSnippetNameV=Var$1.Lens(SnippetsUI.currentSnippetV(),function($1)
  {
   return $1.snpName;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$2,$1.snpContent,$1.snpParentIdO,$1.snpPredIds,$1.snpProperties,$1.snpModified);
  });
  SC$1.currentSnippetContentV=Var$1.Lens(SnippetsUI.currentSnippetV(),function($1)
  {
   return $1.snpContent;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$1.snpName,$2,$1.snpParentIdO,$1.snpPredIds,$1.snpProperties,$1.snpModified);
  });
  SC$1.curSnp=(b$4=AF.plugin(),b$4.AddVar(b$4.AddVar(b$4.Yield(),"name",SnippetsUI.currentSnippetNameV()),"content",SnippetsUI.currentSnippetContentV()));
  SC$1.monaco=(i$2=SnippetsUI.monacoNew(Var$1.Lens(SnippetsUI.currentSnippetV(),function($1)
  {
   return $1.snpContent;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$1.snpName,$2,$1.snpParentIdO,$1.snpPredIds,$1.snpProperties,$1.snpModified);
  })),GenEditor$1.New(i$2["var"],i$2.disabled,View$1.Const([]),i$2.onChange,i$2.onRender,null,null,null,i$2.editorO,i$2.editorHook));
  AF.addPlugIn2((b$5=AF.plugin(),b$5.AddAct(b$5.AddAct(b$5.AddAct(b$5.AddAct(b$5.AddAct(b$5.AddAct(b$5.Merge(b$5.Merge(b$5.AddDoc(b$5.AddVar(b$5.Name(b$5.Yield(),"Snippets"),"searchFor",SnippetsUI.searchFor()),"editor",Lazy.Create(function()
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
  })));
  LayoutEngine.addLayout0(LayoutEngineModule.newLyt("lytTarget","\r\n            main horizontal 10-50-70 part1 part2\r\n            \r\n            part1 div \"\" \r\n            : h1 \"\" \"Demo123 \" message\r\n            :: div \"\" \"Message:\"\r\n            :: textarea message \"height:200px;width:500px\"\r\n            \r\n            part2 div \"\" lytTarget.Layout\r\n            \r\n            message Var \"Hello\"     \r\n                "));
  LayoutEngine.addLayout0(LayoutEngineModule.newLyt("SnippetsLyt","\r\n                    split horizontal 0-50-100 AppFramework.AppFwkClient main\r\n                    main vertical 0-25-100 list snippet\r\n                    SearchFor   Doc InputLabel \"\" \"Search\" Snippets.searchFor\r\n                    File        Doc InputFile  \"id=LoadSnippets\" \"Open File\" Snippets.LoadSnippets \"\"\r\n                    list div \"display: flex;flex-direction: column\" File\r\n                    : button \"click=@{Snippets.AddSnippet}\"    \"Add New Snippet\"\r\n                    : button \"click=@{Snippets.DeleteSnippet}\" \"Delete Snippet\"\r\n                    : button \"click=@{Snippets.IndentIn}\"      \"Indent in\"\r\n                    : button \"click=@{Snippets.IndentOut}\"     \"Indent out\"\r\n                    : div    \"\" SearchFor \r\n                    : div \"overflow:auto;width:100%;max-width:100%\" Snippets.snippets_list\r\n                    snippet div \"display: flex;flex-direction: column\"\r\n                    : div    \"\" Snippets.snippets_sel\r\n                    : Doc    InputLabel \"\" \"Name:\" Snippets.curSnp_name\r\n                    : div \"height:100%;class=relative\" Snippets.editor                \r\n                "));
  LayoutEngine.addLayout0(LayoutEngineModule.newLyt("lytDemo","\r\n            SetTarget Action AppFramework.SetVar     \"lytTarget.Layout\"         \"@{target}\" \r\n            SetMain2  Action AppFramework.SetVar     \"AppFramework.mainDocV\"    \"lytDemo.main2\"\r\n            SetMain   Action AppFramework.SetVar     \"AppFramework.mainDocV\"    \"lytDemo.main\"\r\n            \r\n            main2 vertical 0-50-100 Left2 lytTarget.main            \r\n            Left2 vertical 0-25-100 list snippet\r\n            gotoMain  button \"click=@{SetMain};width:16px\" \"<<\"\r\n            \r\n            main vertical 0-50-100 Left lytTarget.main\r\n            Left div \"display:flex;flex-direction:column\" gotoMain2 snippet\r\n            gotoMain2 button \"click=@{SetMain2};width:16px\" \">>\"\r\n            \r\n            list div \"display: flex;flex-direction: column\" gotoMain File\r\n            : div    \"margin:5px\" SearchFor \r\n            : Concat buttons\r\n            : div \"overflow:auto;width:100%;max-width:calc(100% - 10px)\" Snippets.snippets_list\r\n            : ul \"margin:3px\"\r\n            :: button \"click=@{Snippets.AddSnippet}   ;title=Add New Snippet\" \"+\"\r\n            :: button \"margin-left:20px;click=@{Snippets.DeleteSnippet};title=Delete  Snippet\" \"x\"\r\n            \r\n            snippet div \"display: flex;flex-direction: column;flex:1\" Trigger\r\n            : button \"click=@{SetTarget}\" \"Apply\"\r\n            : div    \"click=@{SetTarget}\" Snippets.snippets_sel\r\n            : Doc    InputLabel \"\" \"Name:\" Snippets.curSnp_name\r\n            : div \"height:100%;class=relative;flex:1\" Snippets.editor            \r\n            \r\n            buttons ul \"\"\r\n            : div \"margin:3px\"\r\n            :: button \"click=@{Snippets.IndentOut};title=indent out\"     \"<--\"\r\n            :: button \"click=@{Snippets.IndentIn};title=indent in\"       \"--> \"\r\n            \r\n            SearchFor   Doc InputLabel \"\" \"Search\" Snippets.searchFor\r\n            \r\n            File span \"class=input-group;margin:5px;id=LoadSnippets\"\r\n            : div \"class=input-group-btn\"\r\n            :: label \"class=btn btn-info\" \"Load File\"\r\n            ::: div \"\"\r\n            :::: input \"class=form-control;type=file;display: none;change=@{Snippets.LoadSnippets}\" \r\n            :: label \"class=btn btn-primary;click=@{Snippets.SaveSnippets}\" \"Save File\"\r\n            \r\n            Trigger   Doc    AppFramework.TrigAction Snippets.snippets_sel lytDemo.SetTarget\r\n            target    View \"n => n.includes('main ')?n:'main Contact \"\" \"\"'\" Snippets.curSnp_content\r\n                "));
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

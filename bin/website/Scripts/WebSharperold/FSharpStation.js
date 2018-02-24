(function()
{
 "use strict";
 var Global,FSSGlobal,Useful,Option,ExceptionThrown,ErrOptionIsNone,ErrSimple,Result,ropBuilder,Wrap,Builder,Async,Dict,String,ResetableMemoize,PreproDirective,FsStationShared,MessagingClient,GenSeverity,CodeSnippetId,CodeSnippet,FSMessage,FSSeverity,FsStationClientErr,FsStationClient,FsEvaluator,Evaluator,FsTranslator,FSAutoCompleteIntermediary,CommTypes,ResponseError,Location,CompletionResponse,OverloadDescription,OverloadParameter,Overload,Parameter,SignatureData,MethodResponse,SymbolUseRange,SymbolUseResponse,HelpTextResponse,CompilerLocationResponse,FSharpErrorInfo,ErrorResponse,Colorization,Declaration,DeclarationResponse,OpenNamespace,QualifySymbol,ResolveNamespaceResponse,UnionCaseResponse,ACMessage,FSAutoCompleteIntermediaryClient,HtmlNode,Val,HelperType,valBuilder,HtmlNode$1,Template,Button,Input,Hoverable,TextArea,CodeMirrorPos,CodeMirrorEditor,CodeMirror,Hint,HintResponse,HintOptions,LintResponse,SplitterBar,SectionType,Grid,TabStrip,MenuEntry,MenuNode,Menu,Action,GuiPart,HtmlNodeFable,LayoutDescriptionFable,GuiPartSourceId,Layout,RunCode,RunNode,FSharpStation,FsGlobal,Position,ErrCompiler,KeyMapAutoComplete,Property,PropValue,CodeSnippet$1,FableModule,Babel,Fable,SC$1,FSharpStation_JsonDecoder,FSharpStation_JsonEncoder,GeneratedPrintf,FSharpStation_GeneratedPrintf,IntelliFactory,Runtime,WebSharper,Utils,Strings,List,Seq,Concurrency,console,Collections,Dictionary,CancellationTokenSource,Arrays,Unchecked,JSON,Date,UsefulDotNet,Messaging,Remoting,Guid,Option$1,Slice,AjaxRemotingProvider,UI,Next,View,Doc,Operators,AttrModule,AttrProxy,Var,Input$1,Mouse,FSharpSet,BalancedTree,Map,MatchFailureException,Json,Provider,Object,Fable$1,Babel$1,HashSet,JavaScript,JSModule,Lazy,$,FSharpMap,ListModel;
 Global=window;
 FSSGlobal=Global.FSSGlobal=Global.FSSGlobal||{};
 Useful=FSSGlobal.Useful=FSSGlobal.Useful||{};
 Option=Useful.Option=Useful.Option||{};
 ExceptionThrown=Useful.ExceptionThrown=Useful.ExceptionThrown||{};
 ErrOptionIsNone=Useful.ErrOptionIsNone=Useful.ErrOptionIsNone||{};
 ErrSimple=Useful.ErrSimple=Useful.ErrSimple||{};
 Result=Useful.Result=Useful.Result||{};
 ropBuilder=Result.ropBuilder=Result.ropBuilder||{};
 Wrap=Useful.Wrap=Useful.Wrap||{};
 Builder=Wrap.Builder=Wrap.Builder||{};
 Async=Useful.Async=Useful.Async||{};
 Dict=Useful.Dict=Useful.Dict||{};
 String=Useful.String=Useful.String||{};
 ResetableMemoize=Useful.ResetableMemoize=Useful.ResetableMemoize||{};
 PreproDirective=Useful.PreproDirective=Useful.PreproDirective||{};
 FsStationShared=FSSGlobal.FsStationShared=FSSGlobal.FsStationShared||{};
 MessagingClient=FsStationShared.MessagingClient=FsStationShared.MessagingClient||{};
 GenSeverity=FsStationShared.GenSeverity=FsStationShared.GenSeverity||{};
 CodeSnippetId=FsStationShared.CodeSnippetId=FsStationShared.CodeSnippetId||{};
 CodeSnippet=FsStationShared.CodeSnippet=FsStationShared.CodeSnippet||{};
 FSMessage=FsStationShared.FSMessage=FsStationShared.FSMessage||{};
 FSSeverity=FsStationShared.FSSeverity=FsStationShared.FSSeverity||{};
 FsStationClientErr=FsStationShared.FsStationClientErr=FsStationShared.FsStationClientErr||{};
 FsStationClient=FsStationShared.FsStationClient=FsStationShared.FsStationClient||{};
 FsEvaluator=FSSGlobal.FsEvaluator=FSSGlobal.FsEvaluator||{};
 Evaluator=FsEvaluator.Evaluator=FsEvaluator.Evaluator||{};
 FsTranslator=FSSGlobal.FsTranslator=FSSGlobal.FsTranslator||{};
 FSAutoCompleteIntermediary=FSSGlobal.FSAutoCompleteIntermediary=FSSGlobal.FSAutoCompleteIntermediary||{};
 CommTypes=FSAutoCompleteIntermediary.CommTypes=FSAutoCompleteIntermediary.CommTypes||{};
 ResponseError=CommTypes.ResponseError=CommTypes.ResponseError||{};
 Location=CommTypes.Location=CommTypes.Location||{};
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
 ACMessage=CommTypes.ACMessage=CommTypes.ACMessage||{};
 FSAutoCompleteIntermediaryClient=FSAutoCompleteIntermediary.FSAutoCompleteIntermediaryClient=FSAutoCompleteIntermediary.FSAutoCompleteIntermediaryClient||{};
 HtmlNode=FSSGlobal.HtmlNode=FSSGlobal.HtmlNode||{};
 Val=HtmlNode.Val=HtmlNode.Val||{};
 HelperType=Val.HelperType=Val.HelperType||{};
 valBuilder=Val.valBuilder=Val.valBuilder||{};
 HtmlNode$1=HtmlNode.HtmlNode=HtmlNode.HtmlNode||{};
 Template=FSSGlobal.Template=FSSGlobal.Template||{};
 Button=Template.Button=Template.Button||{};
 Input=Template.Input=Template.Input||{};
 Hoverable=Template.Hoverable=Template.Hoverable||{};
 TextArea=Template.TextArea=Template.TextArea||{};
 CodeMirrorPos=Template.CodeMirrorPos=Template.CodeMirrorPos||{};
 CodeMirrorEditor=Template.CodeMirrorEditor=Template.CodeMirrorEditor||{};
 CodeMirror=Template.CodeMirror=Template.CodeMirror||{};
 Hint=Template.Hint=Template.Hint||{};
 HintResponse=Template.HintResponse=Template.HintResponse||{};
 HintOptions=Template.HintOptions=Template.HintOptions||{};
 LintResponse=Template.LintResponse=Template.LintResponse||{};
 SplitterBar=Template.SplitterBar=Template.SplitterBar||{};
 SectionType=Template.SectionType=Template.SectionType||{};
 Grid=Template.Grid=Template.Grid||{};
 TabStrip=Template.TabStrip=Template.TabStrip||{};
 MenuEntry=Template.MenuEntry=Template.MenuEntry||{};
 MenuNode=Template.MenuNode=Template.MenuNode||{};
 Menu=Template.Menu=Template.Menu||{};
 Action=Template.Action=Template.Action||{};
 GuiPart=Template.GuiPart=Template.GuiPart||{};
 HtmlNodeFable=Template.HtmlNodeFable=Template.HtmlNodeFable||{};
 LayoutDescriptionFable=Template.LayoutDescriptionFable=Template.LayoutDescriptionFable||{};
 GuiPartSourceId=Template.GuiPartSourceId=Template.GuiPartSourceId||{};
 Layout=Template.Layout=Template.Layout||{};
 RunCode=FSSGlobal.RunCode=FSSGlobal.RunCode||{};
 RunNode=RunCode.RunNode=RunCode.RunNode||{};
 FSharpStation=FSSGlobal.FSharpStation=FSSGlobal.FSharpStation||{};
 FsGlobal=FSharpStation.FsGlobal=FSharpStation.FsGlobal||{};
 Position=FsGlobal.Position=FsGlobal.Position||{};
 ErrCompiler=FsGlobal.ErrCompiler=FsGlobal.ErrCompiler||{};
 KeyMapAutoComplete=FsGlobal.KeyMapAutoComplete=FsGlobal.KeyMapAutoComplete||{};
 Property=FsGlobal.Property=FsGlobal.Property||{};
 PropValue=FsGlobal.PropValue=FsGlobal.PropValue||{};
 CodeSnippet$1=FsGlobal.CodeSnippet=FsGlobal.CodeSnippet||{};
 FableModule=FSharpStation.FableModule=FSharpStation.FableModule||{};
 Babel=FableModule.Babel=FableModule.Babel||{};
 Fable=FableModule.Fable=FableModule.Fable||{};
 SC$1=Global.StartupCode$FSharpStation$FSharpStation=Global.StartupCode$FSharpStation$FSharpStation||{};
 FSharpStation_JsonDecoder=Global.FSharpStation_JsonDecoder=Global.FSharpStation_JsonDecoder||{};
 FSharpStation_JsonEncoder=Global.FSharpStation_JsonEncoder=Global.FSharpStation_JsonEncoder||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 FSharpStation_GeneratedPrintf=Global.FSharpStation_GeneratedPrintf=Global.FSharpStation_GeneratedPrintf||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 WebSharper=Global.WebSharper;
 Utils=WebSharper&&WebSharper.Utils;
 Strings=WebSharper&&WebSharper.Strings;
 List=WebSharper&&WebSharper.List;
 Seq=WebSharper&&WebSharper.Seq;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 console=Global.console;
 Collections=WebSharper&&WebSharper.Collections;
 Dictionary=Collections&&Collections.Dictionary;
 CancellationTokenSource=WebSharper&&WebSharper.CancellationTokenSource;
 Arrays=WebSharper&&WebSharper.Arrays;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 JSON=Global.JSON;
 Date=Global.Date;
 UsefulDotNet=FSSGlobal&&FSSGlobal.UsefulDotNet;
 Messaging=UsefulDotNet&&UsefulDotNet.Messaging;
 Remoting=WebSharper&&WebSharper.Remoting;
 Guid=WebSharper&&WebSharper.Guid;
 Option$1=WebSharper&&WebSharper.Option;
 Slice=WebSharper&&WebSharper.Slice;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 UI=WebSharper&&WebSharper.UI;
 Next=UI&&UI.Next;
 View=Next&&Next.View;
 Doc=Next&&Next.Doc;
 Operators=WebSharper&&WebSharper.Operators;
 AttrModule=Next&&Next.AttrModule;
 AttrProxy=Next&&Next.AttrProxy;
 Var=Next&&Next.Var;
 Input$1=Next&&Next.Input;
 Mouse=Input$1&&Input$1.Mouse;
 FSharpSet=Collections&&Collections.FSharpSet;
 BalancedTree=Collections&&Collections.BalancedTree;
 Map=Collections&&Collections.Map;
 MatchFailureException=WebSharper&&WebSharper.MatchFailureException;
 Json=WebSharper&&WebSharper.Json;
 Provider=Json&&Json.Provider;
 Object=Global.Object;
 Fable$1=Global.Fable;
 Babel$1=Global.Babel;
 HashSet=Collections&&Collections.HashSet;
 JavaScript=WebSharper&&WebSharper.JavaScript;
 JSModule=JavaScript&&JavaScript.JSModule;
 Lazy=WebSharper&&WebSharper.Lazy;
 $=Global.jQuery;
 FSharpMap=Collections&&Collections.FSharpMap;
 ListModel=Next&&Next.ListModel;
 Option.modify=function(modifier)
 {
  var g;
  function f(o)
  {
   return o==null?null:{
    $:1,
    $0:modifier(o.$0)
   };
  }
  g=function(a)
  {
   return Option.defaultValue(Global.id,a);
  };
  return function(x)
  {
   return g(f(x));
  };
 };
 Option.apply=function(vO,fO)
 {
  var $1;
  return vO!=null&&vO.$==1&&(fO!=null&&fO.$==1&&($1=[fO.$0,vO.$0],true))?{
   $:1,
   $0:$1[0]($1[1])
  }:null;
 };
 Option.iterFO=function(vO,fO)
 {
  if(vO!=null&&vO.$==1)
   if(fO!=null&&fO.$==1)
    fO.$0(vO.$0);
 };
 Option.iterF=function(v,a)
 {
  if(a!=null&&a.$==1)
   a.$0(v);
 };
 Option.call=function(v,a)
 {
  return a!=null&&a.$==1?{
   $:1,
   $0:a.$0(v)
  }:null;
 };
 Option.defaultWith=function(f,a)
 {
  return a==null?f():a.$0;
 };
 Option.defaultValue=function(v,a)
 {
  return a==null?v:a.$0;
 };
 ExceptionThrown=Useful.ExceptionThrown=Runtime.Class({
  toString:function()
  {
   return this.FSSGlobal_Useful_ErrMsg$get_ErrMsg();
  },
  FSSGlobal_Useful_ErrMsg$get_IsWarning:function()
  {
   return false;
  },
  FSSGlobal_Useful_ErrMsg$get_ErrMsg:function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(this.exn);
  }
 },WebSharper.Obj,ExceptionThrown);
 ExceptionThrown.New=Runtime.Ctor(function(exn)
 {
  this.exn=exn;
 },ExceptionThrown);
 ErrOptionIsNone=Useful.ErrOptionIsNone=Runtime.Class({
  FSSGlobal_Useful_ErrMsg$get_IsWarning:function()
  {
   return false;
  },
  FSSGlobal_Useful_ErrMsg$get_ErrMsg:function()
  {
   return"Option is None";
  }
 },WebSharper.Obj,ErrOptionIsNone);
 ErrOptionIsNone.New=Runtime.Ctor(function()
 {
 },ErrOptionIsNone);
 ErrSimple=Useful.ErrSimple=Runtime.Class({
  toString:function()
  {
   return this.FSSGlobal_Useful_ErrMsg$get_ErrMsg();
  },
  FSSGlobal_Useful_ErrMsg$get_IsWarning:function()
  {
   return this.warning;
  },
  FSSGlobal_Useful_ErrMsg$get_ErrMsg:function()
  {
   return this.msg;
  }
 },WebSharper.Obj,ErrSimple);
 ErrSimple.New=Runtime.Ctor(function(msg,warning)
 {
  this.msg=msg;
  this.warning=warning;
 },ErrSimple);
 ropBuilder=Result.ropBuilder=Runtime.Class({
  Combine:function(a,b)
  {
   return(Result.combine(a))(b);
  },
  Delay:function(f)
  {
   return f();
  },
  Zero:function()
  {
   return Result.succeed();
  },
  Using:function(disposable,restOfCExpr)
  {
   try
   {
    return restOfCExpr(disposable);
   }
   finally
   {
    disposable.Dispose();
   }
  },
  Bind:function(w,r)
  {
   return Result.bind(function(v)
   {
    return Result.tryCall(r,v);
   },w);
  },
  ReturnFrom:Global.id,
  Return:function(x)
  {
   return Result.succeed(x);
  }
 },WebSharper.Obj,ropBuilder);
 ropBuilder.New=Runtime.Ctor(function()
 {
 },ropBuilder);
 Result.result2String=function(res)
 {
  return Strings.concat("\n",List.append(List.ofArray([Option.defaultValue("Failed: ",res.$0)]),Result.msgs2String(res.$1)));
 };
 Result.countMessages=function(ms)
 {
  var $1,$2,$3,errors,warnings,$4,$5;
  if(ms.$===0)
   return"";
  else
   {
    errors=List.filter(function(m)
    {
     return!m.FSSGlobal_Useful_ErrMsg$get_IsWarning();
    },ms);
    warnings=List.filter(function(m)
    {
     return m.FSSGlobal_Useful_ErrMsg$get_IsWarning();
    },ms);
    $4=errors.get_Length();
    $5=warnings.get_Length();
    switch($4===0?$5===0?0:$5===1?2:5:$4===1?$5===0?1:$5===1?3:($1=[$4,$5],6):$5===0?4:($1=[$4,$5],6))
    {
     case 0:
      $3=function($6)
      {
       return function($7)
       {
        return $6(Utils.toSafe($7));
       };
      }(Global.id);
      break;
     case 1:
      $3=function($6)
      {
       return function($7)
       {
        return $6(Utils.toSafe($7));
       };
      }(Global.id);
      break;
     case 2:
      $3=function($6)
      {
       return function($7)
       {
        return $6(Utils.toSafe($7));
       };
      }(Global.id);
      break;
     case 3:
      $3=function($6)
      {
       return function($7)
       {
        return $6("1 error, 1 warning\n"+Utils.toSafe($7));
       };
      }(Global.id);
      break;
     case 4:
      $3=((Runtime.Curried3(function($6,$7,$8)
      {
       return $6(Global.String($7)+" errors\n"+Utils.toSafe($8));
      }))(Global.id))($4);
      break;
     case 5:
      $3=((Runtime.Curried3(function($6,$7,$8)
      {
       return $6(Global.String($7)+" warnings\n"+Utils.toSafe($8));
      }))(Global.id))($5);
      break;
     case 6:
      $3=(((Runtime.Curried(function($6,$7,$8,$9)
      {
       return $6(Global.String($7)+" errors, "+Global.String($8)+" warnings\n"+Utils.toSafe($9));
      },4))(Global.id))($1[0]))($1[1]);
      break;
    }
    return $3(Result.getMessages(ms));
   }
 };
 Result.getMessages=function(ms)
 {
  return Strings.concat("\n",Result.msgs2String(ms));
 };
 Result.msgs2String=function(ms)
 {
  return List.map(function(m)
  {
   return m.FSSGlobal_Useful_ErrMsg$get_ErrMsg();
  },ms);
 };
 Result.seqCheck=function(s)
 {
  return Seq.exists(function(a)
  {
   return Result.Success(a).$==1&&true;
  },s)?Result.failWithMsgs(Seq.pick(function(a)
  {
   var a$1;
   a$1=Result.Success(a);
   return a$1.$==1?{
    $:1,
    $0:a$1.$0
   }:null;
  },s)):Result.succeed(Seq.map(function(a)
  {
   return a.$0.$0;
  },s));
 };
 Result.withError=function(f,a)
 {
  var ms;
  ms=a.$1;
  return Option.defaultWith(function()
  {
   return f(ms);
  },a.$0);
 };
 Result.ifError=function(def,a)
 {
  return Option.defaultValue(def,a.$0);
 };
 Result.failIfTrue=function(m,v)
 {
  return v?Result.fail(m):Result.succeed();
 };
 Result.failIfFalse=function(m,v)
 {
  return v?Result.succeed():Result.fail(m);
 };
 Result.tryProtection=function()
 {
  return Result.succeed();
 };
 Result.toOption=function(a)
 {
  return a.$0;
 };
 Result.fromOption=function(m,a)
 {
  return a!=null&&a.$==1?Result.succeed(a.$0):Result.fail(m);
 };
 Result.fromChoice=function(context,c)
 {
  return c.$==1?Result.fail(c.$0):Result.succeed(c.$0);
 };
 Result.result=function()
 {
  SC$1.$cctor();
  return SC$1.result;
 };
 Result.tryCall=function(f,v)
 {
  try
  {
   return f(v);
  }
  catch(e)
  {
   return Result.fail(Result.failException(e));
  }
 };
 Result.failException=function(e)
 {
  return new ExceptionThrown.New(e);
 };
 Result.x=function(a)
 {
  return Result.Success(a).$==1?"No":"yes";
 };
 Result.Success=function(a)
 {
  return a.$0==null?{
   $:1,
   $0:a.$1
  }:{
   $:0,
   $0:[a.$0.$0,a.$1]
  };
 };
 Result.failSimpleWarning=function(m)
 {
  return Result.fail(new ErrSimple.New(m,true));
 };
 Result.failSimpleError=function(m)
 {
  return Result.fail(new ErrSimple.New(m,false));
 };
 Result.apply=function(a,a$1)
 {
  var fMs,ms,$1,$2,$3;
  fMs=a.$1;
  ms=a$1.$1;
  $1=a.$0;
  $2=a$1.$0;
  return $1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3=[$1.$0,$2.$0],true))?{
   $:0,
   $0:{
    $:1,
    $0:$3[0]($3[1])
   },
   $1:List.append(fMs,ms)
  }:{
   $:0,
   $0:null,
   $1:List.append(fMs,ms)
  };
 };
 Result.bind=function(f,a)
 {
  var o,ms,m;
  o=a.$0;
  ms=a.$1;
  return o==null?{
   $:0,
   $0:null,
   $1:ms
  }:(m=f(o.$0),{
   $:0,
   $0:m.$0,
   $1:List.append(ms,m.$1)
  });
 };
 Result.combine=function(a)
 {
  var ms;
  ms=a.$1;
  return function(r)
  {
   return Result.mergeMsgs(ms,r);
  };
 };
 Result.mergeMsgs=function(ms,r)
 {
  var t;
  t=Result.mapMsgs(function(l)
  {
   return List.append(ms,l);
  },r);
  return{
   $:0,
   $0:t[0],
   $1:t[1]
  };
 };
 Result.getMsgs=function(a)
 {
  return a.$1;
 };
 Result.getOption=function(a)
 {
  return a.$0;
 };
 Result.mapMsgs=function(f,a)
 {
  return[a.$0,f(a.$1)];
 };
 Result.mapMsg=function(f,a)
 {
  return[a.$0,List.map(f,a.$1)];
 };
 Result.map=function(f,a)
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
 Result.failWithMsgs=function(ms)
 {
  return{
   $:0,
   $0:null,
   $1:ms
  };
 };
 Result.fail=function(m)
 {
  return{
   $:0,
   $0:null,
   $1:List.ofArray([m])
  };
 };
 Result.succeedWithMsgs=function(x,ms)
 {
  return{
   $:0,
   $0:{
    $:1,
    $0:x
   },
   $1:ms
  };
 };
 Result.succeedWithMsg=function(x,m)
 {
  return{
   $:0,
   $0:{
    $:1,
    $0:x
   },
   $1:List.ofArray([m])
  };
 };
 Result.succeed=function(x)
 {
  return{
   $:0,
   $0:{
    $:1,
    $0:x
   },
   $1:List.T.Empty
  };
 };
 Wrap.StartAsTask=function(w,options,cancToken)
 {
  return Concurrency.StartAsTask(Wrap.getAsyncR(w),cancToken);
 };
 Wrap.Start=function(w,cancToken)
 {
  Concurrency.Start(Wrap.getAsync(w),cancToken);
 };
 Builder=Wrap.Builder=Runtime.Class({
  Using:function(resource,body)
  {
   return{
    $:2,
    $0:Concurrency.Using(resource,function(a)
    {
     return Wrap.wrapper2Async(body,a);
    })
   };
  },
  Combine:function(a,b)
  {
   return Wrap.combine(Wrap.errOptionIsNone(),a,b);
  },
  Delay:function(f)
  {
   return f();
  },
  ReturnFrom:Global.id,
  Return:function(x)
  {
   return{
    $:3,
    $0:x
   };
  },
  Zero:function()
  {
   return{
    $:3,
    $0:null
   };
  },
  Bind:function(wrapped,restOfCExpr)
  {
   return Wrap.bind(restOfCExpr,{
    $:4,
    $0:wrapped
   });
  },
  Bind$1:function(wrapped,restOfCExpr)
  {
   return Wrap.bind(restOfCExpr,{
    $:0,
    $0:wrapped
   });
  },
  Bind$2:function(wrapped,restOfCExpr)
  {
   return Wrap.bind(restOfCExpr,{
    $:1,
    $0:wrapped
   });
  },
  Bind$3:function(wrapped,restOfCExpr)
  {
   return Wrap.bind(restOfCExpr,wrapped);
  }
 },WebSharper.Obj,Builder);
 Builder.New=Runtime.Ctor(function()
 {
 },Builder);
 Wrap.runSynchronouslyS=function(count,w)
 {
  var a;
  a=Wrap.runSynchronouslyO(count,w);
  return a[0]==null?(function($1)
  {
   return function($2)
   {
    return $1("Failed!\n"+Utils.toSafe($2));
   };
  }(Global.id))(a[1]):(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1(Global.String($2)+"\n"+Utils.toSafe($3));
  }))(Global.id))(a[0].$0))(a[1]);
 };
 Wrap.runSynchronouslyO=function(count,w)
 {
  return Result.mapMsgs(count?Result.countMessages:Result.getMessages,console.log("runSynchronously should not be used in Javascript"));
 };
 Wrap.start=function(printMsg,w)
 {
  Wrap.startV(function(a)
  {
   if(a[0]==null)
    printMsg("Failed!\n"+a[1]);
   else
    printMsg(a[1]);
  },w);
 };
 Wrap.startV=function(processVal,w)
 {
  var f,f$1,f$2,f$3;
  function f$4(a)
  {
   return Result.mapMsgs(Result.getMessages,a);
  }
  function g(m)
  {
   return[null,m];
  }
  function g$1(m)
  {
   return[null,m];
  }
  Concurrency.StartWithContinuations(Wrap.getAsyncR(w),function(x)
  {
   return processVal(f$4(x));
  },(f=(f$1=function($1)
  {
   return function($2)
   {
    return $1(Utils.prettyPrint($2));
   };
  }(Global.id),function(x)
  {
   return g(f$1(x));
  }),function(x)
  {
   return processVal(f(x));
  }),(f$2=(f$3=function($1)
  {
   return function($2)
   {
    return $1(Utils.prettyPrint($2));
   };
  }(Global.id),function(x)
  {
   return g$1(f$3(x));
  }),function(x)
  {
   return processVal(f$2(x));
  }),null);
 };
 Wrap.getAsync=function(w)
 {
  var vo,b,vr,b$1,vra,b$2;
  return w.$==3?Concurrency.Return(w.$0):w.$==4?(vo=w.$0,(b=null,Concurrency.Delay(function()
  {
   var $1,$2;
   if(vo==null)
    throw Global.Error(Result.getMessages(List.ofArray([Wrap.errOptionIsNone()])));
   else
    $2=vo.$0;
   return Concurrency.Return($2);
  }))):w.$==0?(vr=w.$0,(b$1=null,Concurrency.Delay(function()
  {
   var $1,$2,a;
   a=Result.Success(vr);
   if(a.$==1)
    throw Global.Error(Result.getMessages(a.$0));
   else
    $2=a.$0[0];
   return Concurrency.Return($2);
  }))):w.$==2?(vra=w.$0,(b$2=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(vra,function(a)
   {
    var $1,$2,a$1;
    a$1=Result.Success(a);
    if(a$1.$==1)
     throw Global.Error(Result.getMessages(a$1.$0));
    else
     $2=a$1.$0[0];
    return Concurrency.Return($2);
   });
  }))):w.$0;
 };
 Wrap.getAsyncWithDefault=function(f,wb)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(Wrap.getAsyncR(wb),function(a)
   {
    return Concurrency.Return(Result.withError(f,a));
   });
  });
 };
 Wrap.getAsyncR=function(wb)
 {
  var va,b;
  return wb.$==3?Concurrency.Return(Result.succeed(wb.$0)):wb.$==4?Concurrency.Return(Result.fromOption(Wrap.errOptionIsNone(),wb.$0)):wb.$==0?Concurrency.Return(wb.$0):wb.$==2?wb.$0:(va=wb.$0,(b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(va,function(a)
   {
    return Concurrency.Return(Result.succeed(a));
   });
  })));
 };
 Wrap.getResult=function(callback,wb)
 {
  if(wb.$==4)
  {
   if(wb.$0==null)
    callback(Result.fail(Wrap.errOptionIsNone()));
   else
    callback(Result.succeed(wb.$0.$0));
  }
  else
   if(wb.$==0)
    callback(wb.$0);
   else
    if(wb.$==1)
     Concurrency.StartWithContinuations(wb.$0,function(v)
     {
      callback(Result.succeed(v));
     },function(exc)
     {
      callback(Result.fail(Result.failException(exc)));
     },function(can)
     {
      callback(Result.fail(Result.failException(can)));
     },null);
    else
     if(wb.$==2)
      Concurrency.StartWithContinuations(wb.$0,callback,function(exc)
      {
       callback(Result.fail(Result.failException(exc)));
      },function(can)
      {
       callback(Result.fail(Result.failException(can)));
      },null);
     else
      callback(Result.succeed(wb.$0));
 };
 Wrap.wrapper=function()
 {
  SC$1.$cctor();
  return SC$1.wrapper;
 };
 Wrap.combine=function(errOptionIsNone,wa,wb)
 {
  return wa.$==4?wa.$0==null?Wrap.addMsgs(errOptionIsNone,List.ofArray([errOptionIsNone]),wb):wb:wa.$==0?wa.$0.$1.$==0?wb:Wrap.addMsgs(errOptionIsNone,wa.$0.$1,wb):wa.$==1?wb:wa.$==2?wb:wb;
 };
 Wrap.addMsgs=function(errOptionIsNone,ms,wb)
 {
  var $1,b,b$1;
  if(ms.$===0)
   return wb;
  else
   switch(wb.$==4?wb.$0==null?1:($1=wb.$0.$0,0):wb.$==0?($1=wb.$0,2):wb.$==1?($1=wb.$0,3):wb.$==2?($1=wb.$0,4):($1=wb.$0,0))
   {
    case 0:
     return{
      $:0,
      $0:Result.succeedWithMsgs($1,ms)
     };
     break;
    case 1:
     return{
      $:0,
      $0:Result.mergeMsgs(ms,Result.fail(errOptionIsNone))
     };
     break;
    case 2:
     return{
      $:0,
      $0:Result.mergeMsgs(ms,$1)
     };
     break;
    case 3:
     return{
      $:2,
      $0:(b=null,Concurrency.Delay(function()
      {
       return Concurrency.Bind($1,function(a)
       {
        return Concurrency.Return(Result.succeedWithMsgs(a,ms));
       });
      }))
     };
     break;
    case 4:
     return{
      $:2,
      $0:(b$1=null,Concurrency.Delay(function()
      {
       return Concurrency.Bind($1,function(a)
       {
        return Concurrency.Return(Result.mergeMsgs(ms,a));
       });
      }))
     };
     break;
   }
 };
 Wrap.wrapper2Async=function(f,a)
 {
  var $1,wb,ab,b;
  wb=Wrap.tryCall(f,a);
  switch(wb.$==4?0:wb.$==0?1:wb.$==1?2:wb.$==2?3:0)
  {
   case 0:
    return Wrap.wb2arb(List.T.Empty,wb);
    break;
   case 1:
    return Wrap.wb2arb(wb.$0.$1,wb);
    break;
   case 2:
    ab=wb.$0;
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Bind(ab,function(a$1)
     {
      return Concurrency.Return(Result.succeed(a$1));
     });
    });
    break;
   case 3:
    return wb.$0;
    break;
  }
 };
 Wrap.map=function(f)
 {
  var f$1;
  f$1=function(x)
  {
   return Wrap.Return(f(x));
  };
  return function(w)
  {
   return Wrap.bind(f$1,w);
  };
 };
 Wrap.Return=function(a)
 {
  return{
   $:3,
   $0:a
  };
 };
 Wrap.bind=function(f,wa)
 {
  var $1,a,ms,b,b$1;
  switch(wa.$==4?wa.$0==null?1:($1=wa.$0.$0,0):wa.$==0?(a=Result.Success(wa.$0),a.$==1?($1=a.$0,2):a.$0[1].$==0?($1=a.$0[0],0):($1=[a.$0[0],a.$0[1]],3)):wa.$==1?($1=wa.$0,4):wa.$==2?($1=wa.$0,5):($1=wa.$0,0))
  {
   case 0:
    return Wrap.tryCall(f,$1);
    break;
   case 1:
    return{
     $:4,
     $0:null
    };
    break;
   case 2:
    return{
     $:0,
     $0:Result.failWithMsgs($1)
    };
    break;
   case 3:
    ms=$1[1];
    return function(a$1)
    {
     var $2,a$2,b$2,b$3;
     switch(a$1.$==4?a$1.$0==null?1:($2=a$1.$0.$0,0):a$1.$==0?(a$2=Result.Success(a$1.$0),a$2.$==1?($2=a$2.$0,4):a$2.$0[1].$==0?($2=a$2.$0[0],2):($2=[a$2.$0[0],a$2.$0[1]],3)):a$1.$==1?($2=a$1.$0,5):a$1.$==2?($2=a$1.$0,6):($2=a$1.$0,0))
     {
      case 0:
       return{
        $:0,
        $0:Result.succeedWithMsgs($2,ms)
       };
       break;
      case 1:
       return{
        $:0,
        $0:Result.failWithMsgs(new List.T({
         $:1,
         $0:Wrap.errOptionIsNone(),
         $1:ms
        }))
       };
       break;
      case 2:
       return{
        $:0,
        $0:Result.succeedWithMsgs($2,ms)
       };
       break;
      case 3:
       return{
        $:0,
        $0:Result.succeedWithMsgs($2[0],List.append(ms,$2[1]))
       };
       break;
      case 4:
       return{
        $:0,
        $0:Result.failWithMsgs(List.append(ms,$2))
       };
       break;
      case 5:
       return{
        $:2,
        $0:(b$2=null,Concurrency.Delay(function()
        {
         return Concurrency.Bind($2,function(a$3)
         {
          return Concurrency.Return(Result.succeedWithMsgs(a$3,ms));
         });
        }))
       };
       break;
      case 6:
       return{
        $:2,
        $0:(b$3=null,Concurrency.Delay(function()
        {
         return Concurrency.Bind($2,function(a$3)
         {
          return Concurrency.Return(Result.mergeMsgs(ms,a$3));
         });
        }))
       };
       break;
     }
    }(Wrap.tryCall(f,$1[0]));
    break;
   case 4:
    return{
     $:2,
     $0:(b=null,Concurrency.Delay(function()
     {
      return Concurrency.Bind($1,function(a$1)
      {
       return Wrap.wb2arb(List.T.Empty,Wrap.tryCall(f,a$1));
      });
     }))
    };
    break;
   case 5:
    return{
     $:2,
     $0:(b$1=null,Concurrency.Delay(function()
     {
      return Concurrency.Bind($1,function(a$1)
      {
       var a$2,ms$1,b$2;
       a$2=Result.Success(a$1);
       return a$2.$==1?(ms$1=a$2.$0,b$2=null,Concurrency.Delay(function()
       {
        return Concurrency.Return(Result.failWithMsgs(ms$1));
       })):Wrap.wb2arb(a$2.$0[1],Wrap.tryCall(f,a$2.$0[0]));
      });
     }))
    };
    break;
  }
 };
 Wrap.tryCall=function(f,a)
 {
  try
  {
   return f(a);
  }
  catch(e)
  {
   return{
    $:0,
    $0:Result.fail(Result.failException(e))
   };
  }
 };
 Wrap.wb2arb=function(ms,a)
 {
  var $1,b,b$1,b$2,b$3,b$4;
  switch(a.$==2?($1=a.$0,1):a.$==0?($1=a.$0,2):a.$==3?($1=a.$0,3):a.$==4?a.$0==null?4:($1=a.$0.$0,3):($1=a.$0,0))
  {
   case 0:
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Bind($1,function(a$1)
     {
      return Concurrency.Return(Result.succeedWithMsgs(a$1,ms));
     });
    });
    break;
   case 1:
    b$1=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Bind($1,function(a$1)
     {
      return Concurrency.Return(Result.mergeMsgs(ms,a$1));
     });
    });
    break;
   case 2:
    b$2=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Return(Result.mergeMsgs(ms,$1));
    });
    break;
   case 3:
    b$3=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Return(Result.succeedWithMsgs($1,ms));
    });
    break;
   case 4:
    b$4=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Return(Result.failWithMsgs(new List.T({
      $:1,
      $0:Wrap.errOptionIsNone(),
      $1:ms
     })));
    });
    break;
  }
 };
 Wrap.errOptionIsNone=function()
 {
  SC$1.$cctor();
  return SC$1.errOptionIsNone;
 };
 Async.bind=function(f,va)
 {
  return Concurrency.Bind(va,f);
 };
 Async.apply=function(fAsync,xAsync)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.StartChild(fAsync,null),function(a)
   {
    return Concurrency.Bind(Concurrency.StartChild(xAsync,null),function(a$1)
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
 Async.retn=function(x)
 {
  return Concurrency.Return(x);
 };
 Async.map=function(f,va)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(va,function(a)
   {
    return Concurrency.Return(f(a));
   });
  });
 };
 Dict.add=function(key,v,dict)
 {
  if(dict.ContainsKey(key))
   dict.set_Item(key,v);
  else
   dict.Add(key,v);
 };
 Dict.tryGetValue=function(key,dict)
 {
  return dict.ContainsKey(key)?{
   $:1,
   $0:dict.get_Item(key)
  }:null;
 };
 String.append=function(a,b)
 {
  return a+b;
 };
 String.trim=function(s)
 {
  return Strings.Trim(s);
 };
 String.splitByChar=function(c,s)
 {
  return Strings.SplitChars(s,[c],0);
 };
 ResetableMemoize=Useful.ResetableMemoize=Runtime.Class({
  ClearCache:function()
  {
   this.cache.Clear();
  }
 },WebSharper.Obj,ResetableMemoize);
 ResetableMemoize.New=Runtime.Ctor(function(f)
 {
  this.f=f;
  this.cache=new Dictionary.New$5();
 },ResetableMemoize);
 PreproDirective.NoPrepo={
  $:11
 };
 PreproDirective.PrepoEndIf={
  $:8
 };
 PreproDirective.PrepoElse={
  $:7
 };
 Useful.asyncStartCancelling=function()
 {
  var tokenSource;
  tokenSource=null;
  return function(a)
  {
   var newTokenSource;
   tokenSource==null?void 0:tokenSource.$0.Cancel$1();
   newTokenSource=new CancellationTokenSource.New();
   Concurrency.Start(a,{
    $:1,
    $0:newTokenSource
   });
   tokenSource={
    $:1,
    $0:newTokenSource
   };
  };
 };
 Useful.separateDirectives=function(fsNass)
 {
  var assembs,defines,prepoIs,nowarns;
  function f(t)
  {
   return t[1];
  }
  function g(a)
  {
   return a.$==0?{
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
   return a.$==1?{
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
   return a.$==5?{
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
   return a.$==4?{
    $:1,
    $0:a.$0
   }:null;
  }
  assembs=Arrays.ofSeq(Seq.distinct(Seq.choose(function(x)
  {
   return g(f(x));
  },fsNass)));
  defines=Arrays.ofSeq(Seq.distinct(Seq.choose(function(x)
  {
   return g$1(f$1(x));
  },fsNass)));
  prepoIs=Arrays.ofSeq(Seq.distinct(Seq.choose(function(x)
  {
   return g$2(f$2(x));
  },fsNass)));
  nowarns=Arrays.ofSeq(Seq.distinct(Seq.choose(function(x)
  {
   return g$3(f$3(x));
  },fsNass)));
  return[Arrays.ofSeq(Seq.map(function(t)
  {
   return t[0];
  },fsNass)),assembs,defines,prepoIs,nowarns];
 };
 Useful.separatePrepros=function(removePrepoLine,code)
 {
  var preL;
  function quoted(line)
  {
   return Option.defaultValue(line,Seq.tryLast(Strings.SplitStrings(Strings.Trim(line),["\""],1)));
  }
  function define(line)
  {
   return Option.defaultValue("",Seq.tryHead(Strings.SplitStrings(Strings.Trim(line),["#define "],1)));
  }
  function comment(y)
  {
   return"//"+y;
  }
  preL=removePrepoLine?comment:Global.id;
  return Arrays.map(function(line)
  {
   var m,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12;
   m=true;
   return m&&(Strings.StartsWith(line,"#define")&&true)?[comment(line),{
    $:1,
    $0:define(line)
   }]:m&&(Strings.StartsWith(line,"#r")&&true)?[comment(line),{
    $:0,
    $0:quoted(line)
   }]:m&&(Strings.StartsWith(line,"#load")&&true)?[comment(line),{
    $:2,
    $0:quoted(line)
   }]:m&&(Strings.StartsWith(line,"#nowarn")&&true)?[comment(line),{
    $:4,
    $0:quoted(line)
   }]:m&&(Strings.StartsWith(line,"# ")&&true)?[preL(line),{
    $:3,
    $0:quoted(line)
   }]:m&&(Strings.StartsWith(line,"#line")&&true)?[preL(line),{
    $:3,
    $0:quoted(line)
   }]:m&&(Strings.StartsWith(line,"#I")&&true)?[comment(line),{
    $:5,
    $0:quoted(line)
   }]:m&&(Strings.StartsWith(line,"#if")&&true)?[line,{
    $:6,
    $0:line
   }]:m&&(Strings.StartsWith(line,"#else")&&true)?[line,PreproDirective.PrepoElse]:m&&(Strings.StartsWith(line,"#endif")&&true)?[line,PreproDirective.PrepoEndIf]:m&&(Strings.StartsWith(line,"#light")&&true)?[line,{
    $:9,
    $0:false
   }]:m&&(Strings.StartsWith(line,"#")&&true)?[comment(line),{
    $:10,
    $0:line
   }]:[line,PreproDirective.NoPrepo];
  },code);
 };
 Useful.__=function(f,a,b)
 {
  return f(b,a);
 };
 Useful.swap=function(f,a,b)
 {
  return f(b,a);
 };
 Useful.REGEX=function(expr,opt,value)
 {
  var m;
  if(value===null)
   return null;
  else
   try
   {
    m=(new Global.String(value)).match(new Global.RegExp(expr,opt));
    return Unchecked.Equals(m,null)?null:m&&Arrays.length(m)===0?null:{
     $:1,
     $0:m
    };
   }
   catch(e)
   {
    return null;
   }
 };
 Useful.extract=function(n,s)
 {
  var b;
  return Strings.Substring(s,0,(b=s.length,Unchecked.Compare(n,b)===-1?n:b));
 };
 MessagingClient=FsStationShared.MessagingClient=Runtime.Class({
  poStrings:function(resp)
  {
   return resp.$==1?resp.$0:[(function($1)
   {
    return function($2)
    {
     return $1("unexpected response: "+Utils.toSafe($2));
    };
   }(Global.id))(resp.$0)];
  },
  poString:function(resp)
  {
   return resp.$==1?(function($1)
   {
    return function($2)
    {
     return $1(Utils.printArray(Utils.prettyPrint,$2));
    };
   }(Global.id))(resp.$0):resp.$0;
  },
  poMsg:function(checkResponse,msg)
  {
   var $this,b;
   $this=this;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind($this.sendMessage(FsStationShared.AddressId("WebServer:PostOffice"),JSON.stringify((FSharpStation_JsonEncoder.j$6())(msg))),function(a)
    {
     return Concurrency.Return(checkResponse((FSharpStation_JsonDecoder.j$6())(JSON.parse(a))));
    });
   });
  },
  sendMessage:function(toId,msg)
  {
   return(((FsStationShared.sendRequestF())(toId))(this.fromId))(msg);
  },
  awaitMessage:function(respond)
  {
   var $this,b;
   $this=this;
   (FsStationShared.AsyncStartF())((b=null,Concurrency.Delay(function()
   {
    return Concurrency.While(function()
    {
     return $this.active;
    },Concurrency.Delay(function()
    {
     ((((Runtime.Curried(function($1,$2,$3,$4)
     {
      return $1(Utils.toSafe($2)+" awaitRequest "+Utils.toSafe($3)+" "+Utils.toSafe($4));
     },4))(function(s)
     {
      console.log(s);
     }))(function(n)
     {
      return n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()+" "+n.getHours()+":"+n.getMinutes()+":"+n.getSeconds()+":"+n.getMilliseconds();
     }(new Global.Date(Date.now()))))($this.clientId))($this.wsEndPoint);
     return Concurrency.Bind(Concurrency.StartChild((FsStationShared.awaitRequestForF())($this.fromId),{
      $:1,
      $0:$this.tout
     }),function(a)
     {
      return Concurrency.TryWith(Concurrency.Delay(function()
      {
       return Concurrency.Bind(a,function(a$1)
       {
        return Concurrency.Bind(respond(FsStationShared.addressIdTxt(a$1.fromId),a$1.content),function(a$2)
        {
         return Concurrency.Bind(((FsStationShared.replyToF())(a$1.messageId.$0))(a$2),function()
         {
          return Concurrency.Return(null);
         });
        });
       });
      }),function(a$1)
      {
       return a$1 instanceof WebSharper.TimeoutException?Concurrency.Zero():((function($1)
       {
        return function($2)
        {
         return $1(Utils.prettyPrint($2));
        };
       }(function(s)
       {
        console.log(s);
       }))(a$1),Concurrency.Zero());
      });
     });
    }));
   })));
  },
  Deactivate:function()
  {
   this.active=false;
  },
  get_ClientId:function()
  {
   return this.clientId;
  },
  get_EndPoint:function()
  {
   return this.wsEndPoint;
  },
  POListeners:function()
  {
   var $this;
   $this=this;
   return this.poMsg(function(r)
   {
    return $this.poStrings(r);
   },Messaging.POMessage.POListeners);
  },
  POMessage:function(msg)
  {
   return this.poMsg(Global.id,msg);
  },
  SendMessage:function(toId,msg)
  {
   return this.sendMessage(toId,msg);
  },
  AwaitMessage:function(respondA)
  {
   this.awaitMessage(respondA);
  },
  AwaitMessage$1:function(respond)
  {
   this.awaitMessage(function(senderId,request)
   {
    var b;
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Return(respond(senderId,request));
    });
   });
  },
  Dispose:function()
  {
   this.active=false;
  }
 },WebSharper.Obj,MessagingClient);
 MessagingClient.get_EndPoint_=function()
 {
  return Remoting.EndPoint();
 };
 MessagingClient.New=Runtime.Ctor(function(clientId,timeout,endPoint)
 {
  this.clientId=clientId;
  this.active=true;
  this.wsEndPoint=Option.defaultValue(Remoting.EndPoint(),endPoint);
  this.tout=Option.defaultValue(100000,timeout);
  this.fromId=FsStationShared.AddressId(this.clientId);
  Remoting.set_EndPoint(this.wsEndPoint);
 },MessagingClient);
 GenSeverity.GenInfor={
  $:2
 };
 GenSeverity.GenWarning={
  $:1
 };
 GenSeverity.GenError={
  $:0
 };
 CodeSnippetId=FsStationShared.CodeSnippetId=Runtime.Class({
  get_Text:function()
  {
   return Global.String(this.$0);
  }
 },null,CodeSnippetId);
 CodeSnippetId.get_New=function()
 {
  return new CodeSnippetId({
   $:0,
   $0:Guid.NewGuid()
  });
 };
 CodeSnippet=FsStationShared.CodeSnippet=Runtime.Class({
  SeparateCode:function(addLinePrepos)
  {
   var noLinePre,indent,p,p$1,a,code;
   function m(l,pr)
   {
    return[Strings.replicate(indent," ")+l,pr];
   }
   noLinePre=!addLinePrepos||this.properties.ContainsKey("NoLinePre");
   indent=this.levelCode*2;
   p=indent===0?[Global.id,""]:[function(a$1)
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
   }(Global.id))(indent)];
   p$1=Useful.separateDirectives(p[0](Useful.separatePrepros(!addLinePrepos,(noLinePre?Global.id:(a=[(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("# 1 @\""+Utils.toSafe($2)+Utils.toSafe($3)+"\"");
   }))(Global.id))(p[1]))(this.get_NameSanitized())],function(a$1)
   {
    return a.concat(a$1);
   }))(Strings.SplitChars(this.content,["\n"],0)))));
   code=p$1[0];
   return[[[this.get_NameSanitized(),Arrays.length(code),indent]],code,p$1[1],p$1[2],p$1[3],p$1[4]];
  },
  UniquePredecessors:function(fetcher)
  {
   return FsStationShared.predsL(fetcher,List.ofArray([this.id]));
  },
  get_NameSanitized:function()
  {
   return this.id.get_Text()+" "+FsStationShared.sanitize(this.get_Name())+".fsx";
  },
  get_Name:function()
  {
   return FsStationShared.snippetName(this.name,this.content);
  }
 },null,CodeSnippet);
 CodeSnippet.CodeFsx=function(addLinePrepos,snps)
 {
  return(CodeSnippet.CodeAndStarts(addLinePrepos,snps))[0];
 };
 CodeSnippet.CodeAndStarts=function(addLinePrepos,snippets)
 {
  var t;
  t=CodeSnippet.ReducedCode(addLinePrepos,snippets);
  return CodeSnippet.FinishCode(addLinePrepos,t[0],t[1],t[2],t[3],t[4],t[5]);
 };
 CodeSnippet.FinishCode=function(addLinePrepos,lines,code,assembs,defines,prepIs,nowarns)
 {
  var config,part1;
  config=Strings.concat(" ",Seq.map(function(y)
  {
   return"-d:"+y;
  },Seq.sort(defines)));
  part1=List.ofSeq(Seq.delay(function()
  {
   return Seq.append(config!==""?["////"+config]:[],Seq.delay(function()
   {
    return Seq.append(Seq.map(function($1)
    {
     return function($2)
     {
      return $1("#I @\""+Utils.toSafe($2)+"\"");
     };
    }(Global.id),prepIs),Seq.delay(function()
    {
     return Seq.append(Seq.map(function($1)
     {
      return function($2)
      {
       return $1("#r @\""+Utils.toSafe($2)+"\"");
      };
     }(Global.id),assembs),Seq.delay(function()
     {
      return Seq.append(addLinePrepos&&!Seq.isEmpty(nowarns)?["# 1 \"required for nowarns to work\""]:[],Seq.delay(function()
      {
       return Seq.map(function($1)
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
  return[Strings.concat("\n",Seq.append(part1,code)),Arrays.ofSeq((Seq.mapFold(function(firstLine,t)
  {
   var len;
   len=t[1];
   return[[t[0],[t[2],firstLine,firstLine+len]],firstLine+len];
  },part1.get_Length(),lines))[0])];
 };
 CodeSnippet.ReducedCode=function(addLinePrepos,snippets)
 {
  var t,snps;
  function r(a,a$1,a$2,a$3,a$4,a$5)
  {
   return function(t$1)
   {
    return CodeSnippet.AddSeps(a,a$1,a$2,a$3,a$4,a$5,t$1[0],t$1[1],t$1[2],t$1[3],t$1[4],t$1[5]);
   };
  }
  t=Seq.reduce(function($1,$2)
  {
   return(function($3)
   {
    return r($3[0],$3[1],$3[2],$3[3],$3[4],$3[5]);
   }($1))($2);
  },(snps=Seq.map(function(snp)
  {
   return snp.SeparateCode(addLinePrepos);
  },snippets),Seq.isEmpty(snps)?[[[],[],[],[],[],[]]]:snps));
  return[t[0],[Strings.concat("\n",t[1])],t[2],t[3],t[4],t[5]];
 };
 CodeSnippet.AddSeps=function(lines1,code1,assembs1,defines1,prepIs1,nowarns1,lines2,code2,assembs2,defines2,prepIs2,nowarns2)
 {
  return[lines1.concat(lines2),code1.concat(code2),Arrays.ofSeq(Seq.distinct(Seq.append(assembs1,assembs2))),Arrays.ofSeq(Seq.distinct(Seq.append(defines1,defines2))),Arrays.ofSeq(Seq.distinct(Seq.append(prepIs1,prepIs2))),Arrays.ofSeq(Seq.distinct(Seq.append(nowarns1,nowarns2)))];
 };
 CodeSnippet.TryFindByKey=function(snps,key)
 {
  return Seq.tryFind(function(snp)
  {
   return Unchecked.Equals(snp.id,key);
  },snps);
 };
 CodeSnippet.New=function(name,content,parent,predecessors,id,expanded,level,levelCode,properties)
 {
  return new CodeSnippet({
   name:name,
   content:content,
   parent:parent,
   predecessors:predecessors,
   id:id,
   expanded:expanded,
   level:level,
   levelCode:levelCode,
   properties:properties
  });
 };
 FSMessage.GetWholeFile={
  $:11
 };
 FSMessage.GetIdentification={
  $:0
 };
 FSSeverity.FSInfor={
  $:2
 };
 FSSeverity.FSWarning={
  $:1
 };
 FSSeverity.FSError={
  $:0
 };
 FsStationClientErr=FsStationShared.FsStationClientErr=Runtime.Class({
  FSSGlobal_Useful_ErrMsg$get_IsWarning:function()
  {
   return this.$==0&&(this.$1.$==0&&true);
  },
  FSSGlobal_Useful_ErrMsg$get_ErrMsg:function()
  {
   return this.$==0?(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(FSharpStation_GeneratedPrintf.p($2)+" "+Utils.toSafe($3));
   }))(Global.id))(this.$1))(this.$0):(function($1)
   {
    return function($2)
    {
     return $1(FSharpStation_GeneratedPrintf.p$1($2));
    };
   }(Global.id))(this);
  }
 },null,FsStationClientErr);
 FsStationClient=FsStationShared.FsStationClient=Runtime.Class({
  snippetResponse:function(response)
  {
   return response.$==2?Result.succeed(response.$0):Result.fail(new FsStationClientErr({
    $:1,
    $0:Global.String(response)
   }));
  },
  snippetsResponse:function(response)
  {
   return response.$==3?Result.succeed(response.$0):Result.fail(new FsStationClientErr({
    $:1,
    $0:Global.String(response)
   }));
  },
  stringResponse:function(response)
  {
   var $1,$2;
   return response.$==1&&(($2=response.$0,$2!=null&&$2.$==1)&&($1=response.$0.$0,true))?Result.succeed($1):Result.fail(new FsStationClientErr({
    $:1,
    $0:Global.String(response)
   }));
  },
  stringResponseR:function(response)
  {
   var $1,$2;
   function m(a,a$1)
   {
    return new FsStationClientErr({
     $:0,
     $0:a,
     $1:a$1
    });
   }
   return response.$==4&&(($2=response.$0,$2!=null&&$2.$==1)&&($1=[response.$0.$0,response.$1],true))?Result.succeedWithMsgs($1[0],List.ofSeq(Seq.map(function($3)
   {
    return m($3[0],$3[1]);
   },$1[1]))):Result.fail(new FsStationClientErr({
    $:1,
    $0:Global.String(response)
   }));
  },
  get_MessagingClient:function()
  {
   return this.msgClient;
  },
  get_FSStationId:function()
  {
   return this.fsIds;
  },
  RunActionCall:function(name,act,parms)
  {
   var $this,respA,b;
   function checkResponse(r)
   {
    return $this.stringResponseR(r);
   }
   $this=this;
   respA=this.msgClient.SendMessage(this.toId,JSON.stringify((FSharpStation_JsonEncoder.j())({
    $:14,
    $0:name,
    $1:act,
    $2:parms
   })));
   b=Wrap.wrapper();
   return b.Delay(function()
   {
    return b.Bind$2(respA,function(a)
    {
     return b.Bind$1(checkResponse((FSharpStation_JsonDecoder.j())(JSON.parse(a))),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   });
  },
  RunSnippet:function(url,snpPath)
  {
   var $this,respA,b;
   function checkResponse(r)
   {
    return $this.stringResponseR(r);
   }
   $this=this;
   respA=this.msgClient.SendMessage(this.toId,JSON.stringify((FSharpStation_JsonEncoder.j())({
    $:13,
    $0:Strings.SplitChars(snpPath,["/"],0),
    $1:url
   })));
   b=Wrap.wrapper();
   return b.Delay(function()
   {
    return b.Bind$2(respA,function(a)
    {
     return b.Bind$1(checkResponse((FSharpStation_JsonDecoder.j())(JSON.parse(a))),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   });
  },
  GenericMessage:function(txt)
  {
   var $this,respA,b;
   function checkResponse(r)
   {
    return $this.stringResponse(r);
   }
   $this=this;
   respA=this.msgClient.SendMessage(this.toId,JSON.stringify((FSharpStation_JsonEncoder.j())({
    $:1,
    $0:txt
   })));
   b=Wrap.wrapper();
   return b.Delay(function()
   {
    return b.Bind$2(respA,function(a)
    {
     return b.Bind$1(checkResponse((FSharpStation_JsonDecoder.j())(JSON.parse(a))),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   });
  },
  RequestWholeFile:function()
  {
   var $this,respA,b;
   function checkResponse(r)
   {
    return $this.stringResponse(r);
   }
   $this=this;
   respA=this.msgClient.SendMessage(this.toId,JSON.stringify((FSharpStation_JsonEncoder.j())(FSMessage.GetWholeFile)));
   b=Wrap.wrapper();
   return b.Delay(function()
   {
    return b.Bind$2(respA,function(a)
    {
     return b.Bind$1(checkResponse((FSharpStation_JsonDecoder.j())(JSON.parse(a))),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   });
  },
  RequestPredsById:function(snpId)
  {
   var $this,respA,b;
   function checkResponse(r)
   {
    return $this.snippetsResponse(r);
   }
   $this=this;
   respA=this.msgClient.SendMessage(this.toId,JSON.stringify((FSharpStation_JsonEncoder.j())({
    $:4,
    $0:snpId
   })));
   b=Wrap.wrapper();
   return b.Delay(function()
   {
    return b.Bind$2(respA,function(a)
    {
     return b.Bind$1(checkResponse((FSharpStation_JsonDecoder.j())(JSON.parse(a))),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   });
  },
  RequestPreds:function(snpPath)
  {
   var $this,respA,b;
   function checkResponse(r)
   {
    return $this.snippetsResponse(r);
   }
   $this=this;
   respA=this.msgClient.SendMessage(this.toId,JSON.stringify((FSharpStation_JsonEncoder.j())({
    $:8,
    $0:Strings.SplitChars(snpPath,["/"],0)
   })));
   b=Wrap.wrapper();
   return b.Delay(function()
   {
    return b.Bind$2(respA,function(a)
    {
     return b.Bind$1(checkResponse((FSharpStation_JsonDecoder.j())(JSON.parse(a))),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   });
  },
  RequestJSCode:function(snpPath)
  {
   var $this,respA,b;
   function checkResponse(r)
   {
    return $this.stringResponseR(r);
   }
   $this=this;
   respA=this.msgClient.SendMessage(this.toId,JSON.stringify((FSharpStation_JsonEncoder.j())({
    $:10,
    $0:Strings.SplitChars(snpPath,["/"],0)
   })));
   b=Wrap.wrapper();
   return b.Delay(function()
   {
    return b.Bind$2(respA,function(a)
    {
     return b.Bind$1(checkResponse((FSharpStation_JsonDecoder.j())(JSON.parse(a))),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   });
  },
  RequestCode:function(snpPath)
  {
   var $this,respA,b;
   function checkResponse(r)
   {
    return $this.stringResponse(r);
   }
   $this=this;
   respA=this.msgClient.SendMessage(this.toId,JSON.stringify((FSharpStation_JsonEncoder.j())({
    $:7,
    $0:Strings.SplitChars(snpPath,["/"],0)
   })));
   b=Wrap.wrapper();
   return b.Delay(function()
   {
    return b.Bind$2(respA,function(a)
    {
     return b.Bind$1(checkResponse((FSharpStation_JsonDecoder.j())(JSON.parse(a))),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   });
  },
  RequestSnippet:function(snpPath)
  {
   var $this,respA,b;
   function checkResponse(r)
   {
    return $this.snippetResponse(r);
   }
   $this=this;
   respA=this.msgClient.SendMessage(this.toId,JSON.stringify((FSharpStation_JsonEncoder.j())({
    $:9,
    $0:Strings.SplitChars(snpPath,["/"],0)
   })));
   b=Wrap.wrapper();
   return b.Delay(function()
   {
    return b.Bind$2(respA,function(a)
    {
     return b.Bind$1(checkResponse((FSharpStation_JsonDecoder.j())(JSON.parse(a))),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   });
  },
  SendMessage:function(msg)
  {
   var respA,b;
   respA=this.msgClient.SendMessage(this.toId,JSON.stringify((FSharpStation_JsonEncoder.j())(msg)));
   b=Wrap.wrapper();
   return b.Delay(function()
   {
    return b.Bind$2(respA,function(a)
    {
     return b.Bind$1(Result.succeed((FSharpStation_JsonDecoder.j())(JSON.parse(a))),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   });
  },
  SendMessage$1:function(toId2,msg)
  {
   var respA,b;
   respA=this.msgClient.SendMessage(toId2,JSON.stringify((FSharpStation_JsonEncoder.j())(msg)));
   b=Wrap.wrapper();
   return b.Delay(function()
   {
    return b.Bind$2(respA,function(a)
    {
     return b.Bind$1(Result.succeed((FSharpStation_JsonDecoder.j())(JSON.parse(a))),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   });
  }
 },WebSharper.Obj,FsStationClient);
 FsStationClient.get_FSStationId_=function()
 {
  return"FSharpStation1517916030213";
 };
 FsStationClient.New=Runtime.Ctor(function(clientId,fsStationId,timeout,endPoint)
 {
  this.fsIds=Option.defaultValue("FSharpStation1517916030213",fsStationId);
  this.msgClient=new MessagingClient.New(clientId,timeout,endPoint);
  this.toId=FsStationShared.AddressId(this.fsIds);
 },FsStationClient);
 FsStationShared.predsL=function(fetcher,ins)
 {
  var ins$1,outs;
  ins$1=ins;
  outs=List.T.Empty;
  while(!(ins$1.$==0))
   (function()
   {
    var rest,hd;
    return ins$1.$==1?(rest=ins$1.$1,(hd=ins$1.$0,Seq.contains(hd,outs)?void(ins$1=rest):(ins$1=List.collect(Global.id,List.ofArray([rest,List.collect(function(s)
    {
     return List.append(Option$1.toList(s.parent),s.predecessors);
    },Option$1.toList(fetcher(hd)))])),void(outs=new List.T({
     $:1,
     $0:hd,
     $1:outs
    }))))):null;
   }());
  return outs;
 };
 FsStationShared.preds=function(fetcher,outs,ins)
 {
  var hd,x;
  return ins.$==1?(hd=ins.$0,(x=List.collect(Global.id,List.ofArray([ins.$1,List.collect(function(s)
  {
   return List.append(Option$1.toList(s.parent),s.predecessors);
  },Option$1.toList(fetcher(hd)))])),FsStationShared.preds(fetcher,Seq.contains(hd,outs)?outs:new List.T({
   $:1,
   $0:hd,
   $1:outs
  }),x))):outs;
 };
 FsStationShared.sanitize=function(n)
 {
  var illegal;
  illegal=["\"","<",">","|","\u0000","\u0001","\u0002","\u0003","\u0004","\u0005","\u0006","\u0007","\u0008","\u0009","\n","\u000b","\u000c","\r","\u000e","\u000f","\u0010","\u0011","\u0012","\u0013","\u0014","\u0015","\u0016","\u0017","\u0018","\u0019","\u001a","\u001b","\u001c","\u001d","\u001e","\u001f",":","*","?","\\","/"];
  return Strings.Filter(function(c)
  {
   return!Arrays.contains(c,illegal);
  },n);
 };
 FsStationShared.snippetName=function(name,content)
 {
  return name!==""?name:Option.defaultValue("<empty>",Seq.tryHead(Seq.filter(function(l)
  {
   return!(Strings.StartsWith(l,"#")||Strings.StartsWith(l,"[<")||Strings.StartsWith(l,"//"));
  },Seq.map(Strings.Trim,Strings.SplitChars(content,["\n"],1)))));
 };
 FsStationShared.AsyncStartF=function()
 {
  SC$1.$cctor();
  return SC$1.AsyncStartF;
 };
 FsStationShared.replyToF=function()
 {
  SC$1.$cctor();
  return SC$1.replyToF;
 };
 FsStationShared.sendRequestF=function()
 {
  SC$1.$cctor();
  return SC$1.sendRequestF;
 };
 FsStationShared.awaitRequestForF=function()
 {
  SC$1.$cctor();
  return SC$1.awaitRequestForF;
 };
 FsStationShared.addressIdTxt=function(a)
 {
  return a.$0;
 };
 FsStationShared.AddressId=function(a)
 {
  return{
   $:0,
   $0:a
  };
 };
 FsStationShared.AsyncStart=function(asy)
 {
  Concurrency.StartWithContinuations(asy,Global.ignore,function(e)
  {
   Global.alert(Global.String(e));
  },function(c)
  {
   Global.alert(Global.String(c));
  },null);
 };
 FsStationShared.selectF=Global.id;
 Evaluator.extractConfig=function(code)
 {
  return Strings.StartsWith(code,"////-d:")?Slice.string(code,{
   $:1,
   $0:4
  },{
   $:1,
   $0:code.indexOf("\n")-1
  }):"";
 };
 FsEvaluator.evaluateAR=function(fsid,ep,incrUseCount,source)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("FSharpStation:FSSGlobal.FsEvaluator.evaluateAS:-156288114",[fsid,ep,incrUseCount,source]),function(a)
   {
    function m(msg,wrn)
    {
     return new ErrSimple.New(msg,wrn);
    }
    return Concurrency.Return({
     $:0,
     $0:a[0],
     $1:List.ofSeq(Seq.map(function($1)
     {
      return m($1[0],$1[1]);
     },a[1]))
    });
   });
  });
 };
 FsTranslator.translateAR=function(source,minified)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("FSharpStation:FSSGlobal.FsTranslator.translateAS:608897894",[source,minified]),function(a)
   {
    function m(msg,wrn)
    {
     return new ErrSimple.New(msg,wrn);
    }
    return Concurrency.Return({
     $:0,
     $0:a[0],
     $1:List.ofSeq(Seq.map(function($1)
     {
      return m($1[0],$1[1]);
     },a[1]))
    });
   });
  });
 };
 ResponseError.New=function(Code,Message)
 {
  return{
   Code:Code,
   Message:Message
  };
 };
 Location.New=function(File,Line,Column)
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
 OverloadDescription.New=function(Signature,Comment)
 {
  return{
   Signature:Signature,
   Comment:Comment
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
 FSharpErrorInfo.New=function(FileName,StartLine,EndLine,StartColumn,EndColumn,Message,Subcategory)
 {
  return{
   FileName:FileName,
   StartLine:StartLine,
   EndLine:EndLine,
   StartColumn:StartColumn,
   EndColumn:EndColumn,
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
 ACMessage.ACMIdentification={
  $:0
 };
 FSAutoCompleteIntermediaryClient=FSAutoCompleteIntermediary.FSAutoCompleteIntermediaryClient=Runtime.Class({
  info2Bool:function(inf)
  {
   return inf.$==0&&(inf.$0==="true"&&true);
  },
  errors2String:function(errs)
  {
   return errs.$==7?Strings.concat("\n",Seq.map(function(er)
   {
    return((((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6,$7,$8)
    {
     return $1("ErrFSharp \"F# "+Utils.toSafe($2)+".fsx ("+Global.String($3)+","+Global.String($4)+") - ("+Global.String($5)+","+Global.String($6)+") "+Utils.toSafe($7)+":"+Utils.toSafe($8)+"\"");
    },8))(Global.id))(er.FileName))(er.StartLine))(er.StartColumn))(er.EndLine))(er.EndColumn))(er.Subcategory))(er.Message);
   },errs.$0.Errors)):(function($1)
   {
    return function($2)
    {
     return $1(FSharpStation_GeneratedPrintf.p$4($2));
    };
   }(Global.id))(errs);
  },
  tip2String:function(tip)
  {
   return tip.$==11?Strings.concat("\n",Seq.collect(function(t)
   {
    return List.ofArray([t.Signature,t.Comment]);
   },Seq.collect(Global.id,tip.$0))):(function($1)
   {
    return function($2)
    {
     return $1(FSharpStation_GeneratedPrintf.p$4($2));
    };
   }(Global.id))(tip);
  },
  comp2Strings:function(comp)
  {
   var $this;
   $this=this;
   return comp.$==3?Arrays.map(function(cs)
   {
    return[cs.Name,cs.ReplacementText,cs.Glyph,cs.GlyphChar];
   },comp.$0):comp.$==2?[]:comp.$==17?Arrays.collect(function(c)
   {
    return $this.comp2Strings(c);
   },comp.$0):[[(function($1)
   {
    return function($2)
    {
     return $1(FSharpStation_GeneratedPrintf.p$4($2));
    };
   }(Global.id))(comp),"","ErrorMsg","E"]];
  },
  Async_map:function(f,aa)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(aa,function(a)
    {
     return Concurrency.Return(f(a));
    });
   });
  },
  FindDecl:function(fname,line,col,sId)
  {
   return this.Async_map(Global.id,FSAutoCompleteIntermediary.sendMessage({
    $:7,
    $0:fname,
    $1:line,
    $2:col,
    $3:sId
   }));
  },
  FindDecl$1:function(fname,line,col)
  {
   return this.Async_map(Global.id,FSAutoCompleteIntermediary.sendMessage({
    $:6,
    $0:fname,
    $1:line,
    $2:col
   }));
  },
  Complete:function(fname,txt,line,col,sId)
  {
   var $this;
   $this=this;
   return $this.Async_map(function(c)
   {
    return $this.comp2Strings(c);
   },FSAutoCompleteIntermediary.sendMessage({
    $:9,
    $0:fname,
    $1:line,
    $2:col,
    $3:txt,
    $4:sId
   }));
  },
  Complete$1:function(fname,txt,line,col)
  {
   var $this;
   $this=this;
   return $this.Async_map(function(c)
   {
    return $this.comp2Strings(c);
   },FSAutoCompleteIntermediary.sendMessage({
    $:8,
    $0:fname,
    $1:line,
    $2:col,
    $3:txt
   }));
  },
  ToolTip:function(fname,line,col,sId)
  {
   var $this;
   $this=this;
   return $this.Async_map(function(t)
   {
    return $this.tip2String(t);
   },FSAutoCompleteIntermediary.sendMessage({
    $:3,
    $0:fname,
    $1:line,
    $2:col,
    $3:sId
   }));
  },
  ToolTip$1:function(fname,line,col)
  {
   var $this;
   $this=this;
   return $this.Async_map(function(t)
   {
    return $this.tip2String(t);
   },FSAutoCompleteIntermediary.sendMessage({
    $:2,
    $0:fname,
    $1:line,
    $2:col
   }));
  },
  Parse:function(fname,txt)
  {
   var $this;
   $this=this;
   return $this.Async_map(function(e)
   {
    return $this.errors2String(e);
   },FSAutoCompleteIntermediary.sendMessage({
    $:10,
    $0:fname,
    $1:txt,
    $2:[]
   }));
  },
  Parse$1:function(fname,txt,sts)
  {
   var $this;
   $this=this;
   return $this.Async_map(function(e)
   {
    return $this.errors2String(e);
   },FSAutoCompleteIntermediary.sendMessage({
    $:10,
    $0:fname,
    $1:txt,
    $2:sts
   }));
  },
  MustParse:function(fname,sId)
  {
   var $this;
   $this=this;
   return $this.Async_map(function(i)
   {
    return $this.info2Bool(i);
   },FSAutoCompleteIntermediary.sendMessage({
    $:11,
    $0:fname,
    $1:sId
   }));
  }
 },WebSharper.Obj,FSAutoCompleteIntermediaryClient);
 FSAutoCompleteIntermediaryClient.New=Runtime.Ctor(function(clientId,endPoint)
 {
 },FSAutoCompleteIntermediaryClient);
 FSAutoCompleteIntermediary.sendMessage=function(msg)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("FSharpStation:FSSGlobal.FSAutoCompleteIntermediary.sendMessageRpc:1124743568",[msg]),function(a)
   {
    return Concurrency.Return(a);
   });
  });
 };
 Val=HtmlNode.Val=Runtime.Class({
  get_ValTypeMember:function()
  {
   return 0;
  }
 },null,Val);
 HelperType.HelperType={
  $:0
 };
 HelperType.op_AmpGreater=function(_arg15,vw)
 {
  return new Val({
   $:2,
   $0:vw
  });
 };
 HelperType.op_AmpGreater$1=function(_arg14,vr)
 {
  return new Val({
   $:1,
   $0:vr
  });
 };
 HelperType.op_AmpGreater$2=function(_arg13,va)
 {
  return va;
 };
 HelperType.op_AmpGreater$3=function(_arg12,va)
 {
  return va;
 };
 HelperType.op_AmpGreater$4=function(_arg11,va)
 {
  return va;
 };
 HelperType.op_AmpGreater$5=function(_arg10,va)
 {
  return va;
 };
 HelperType.op_AmpGreater$6=function(_arg9,va)
 {
  return va;
 };
 HelperType.op_AmpGreater$7=function(_arg8,va)
 {
  return va;
 };
 HelperType.op_AmpGreater$8=function(_arg7,va)
 {
  return va;
 };
 HelperType.op_AmpGreater$9=function(_arg6,a)
 {
  return new Val({
   $:0,
   $0:a
  });
 };
 HelperType.op_AmpGreater$10=function(_arg5,a)
 {
  return new Val({
   $:0,
   $0:a
  });
 };
 HelperType.op_AmpGreater$11=function(_arg4,a)
 {
  return new Val({
   $:0,
   $0:a
  });
 };
 HelperType.op_AmpGreater$12=function(_arg3,a)
 {
  return new Val({
   $:0,
   $0:a
  });
 };
 HelperType.op_AmpGreater$13=function(_arg2,a)
 {
  return new Val({
   $:0,
   $0:a
  });
 };
 HelperType.op_AmpGreater$14=function(_arg1,a)
 {
  return new Val({
   $:0,
   $0:a
  });
 };
 valBuilder=Val.valBuilder=Runtime.Class({
  Delay:function(f)
  {
   return f();
  },
  Zero:function()
  {
   return new Val({
    $:0,
    $0:null
   });
  },
  Bind:function(w,r)
  {
   return Val.bind(r,w);
  },
  Bind$1:function(w,r)
  {
   return Val.bind(r,w);
  },
  Bind$2:function(w,r)
  {
   return Val.bind(r,w);
  },
  ReturnFrom:Global.id,
  Return:function(x)
  {
   return new Val({
    $:0,
    $0:x
   });
  }
 },WebSharper.Obj,valBuilder);
 valBuilder.New=Runtime.Ctor(function()
 {
 },valBuilder);
 Val.fixitF=function(f,v)
 {
  return f(v);
 };
 Val.valFlow=function()
 {
  SC$1.$cctor();
  return SC$1.valFlow;
 };
 Val.mapCached=function(f,v)
 {
  return new Val({
   $:2,
   $0:View.MapCached(f,Val.toView(v))
  });
 };
 Val.sink=function(f,v)
 {
  View.Sink(f,Val.toView(Val.fixit(v)));
 };
 Val.mapAsync=function(f,v)
 {
  return new Val({
   $:2,
   $0:View.MapAsync(f,Val.toView(Val.fixit(v)))
  });
 };
 Val.iter4=function(f,v1,v2,v3,v4)
 {
  Val.iterV(Global.ignore,Val.map4(f,v1,v2,v3,v4));
 };
 Val.iter3=function(f,v1,v2,v3)
 {
  Val.iterV(Global.ignore,Val.map3(f,v1,v2,v3));
 };
 Val.iter2=function(f,v1,v2)
 {
  Val.iterV(Global.ignore,Val.map2(f,v1,v2));
 };
 Val.apply=function(va,vf)
 {
  return Val.bindV(function(f)
  {
   return Val.mapV(f,va);
  },vf);
 };
 Val.map4=function(f,v1,v2,v3,v4)
 {
  return Val.map4V(f,Val.fixit(v1),Val.fixit(v2),Val.fixit(v3),Val.fixit(v4));
 };
 Val.map3=function(f,v1,v2,v3)
 {
  return Val.map3V(f,Val.fixit(v1),Val.fixit(v2),Val.fixit(v3));
 };
 Val.map2=function(f,v1,v2)
 {
  return((Val.map2V(f))(Val.fixit(v1)))(Val.fixit(v2));
 };
 Val.map=function(f,v)
 {
  return Val.mapV(f,Val.fixit(v));
 };
 Val.bind=function(f,v)
 {
  return Val.bindV(f,Val.fixit(v));
 };
 Val.iter=function(f,v)
 {
  Val.iterV(f,Val.fixit(v));
 };
 Val.toDoc=function(v)
 {
  return Doc.EmbedView(Val.toView(Val.fixit(v)));
 };
 Val.fixit=function(v)
 {
  return Val.fixitF(Val.toVal,v);
 };
 Val.toVal=function(o)
 {
  return typeof o=="string"?new Val({
   $:0,
   $0:o
  }):typeof o=="number"?new Val({
   $:0,
   $0:o
  }):typeof o=="boolean"?new Val({
   $:0,
   $0:o
  }):o instanceof Doc?new Val({
   $:0,
   $0:o
  }):o instanceof Val?o:o instanceof Next.Var?new Val({
   $:1,
   $0:o
  }):"RSet"in o?new Val({
   $:1,
   $0:o
  }):typeof o=="function"?new Val({
   $:2,
   $0:o
  }):o.get_ValTypeMember()===0?o:Operators.FailWith((function($1)
  {
   return function($2)
   {
    return $1("Could not convert "+Utils.prettyPrint($2));
   };
  }(Global.id))(o));
 };
 Val.attrV=function(att,va)
 {
  return va.$==2?AttrModule.Dynamic(att,va.$0):va.$==1?AttrModule.Dynamic(att,va.$0.RView()):AttrProxy.Create(att,va.$0);
 };
 Val.attrVO=function(att,vao)
 {
  var wa,va;
  return vao.$==2?(wa=vao.$0,AttrModule.DynamicPred(att,View.Map(function(o)
  {
   return o!=null;
  },wa),View.Map(function(o)
  {
   return o==null?"":o.$0;
  },wa))):vao.$==1?(va=vao.$0,AttrModule.DynamicPred(att,View.Map(function(o)
  {
   return o!=null;
  },va.RView()),View.Map(function(o)
  {
   return o==null?"":o.$0;
  },va.RView()))):vao.$0==null?AttrModule.DynamicPred(att,View.Const(false),View.Const("")):AttrProxy.Create(att,vao.$0.$0);
 };
 Val.tagElt=function(tag,va)
 {
  return va.$==2?Doc.EmbedView(View.Map(tag,va.$0)):va.$==1?Doc.EmbedView(View.Map(tag,va.$0.RView())):tag(va.$0);
 };
 Val.tagDoc=function(tag,va)
 {
  return va.$==2?Doc.EmbedView(View.Map(tag,va.$0)):va.$==1?Doc.EmbedView(View.Map(tag,va.$0.RView())):tag(va.$0);
 };
 Val.map4V=function(f3,v1,v2,v3,v4)
 {
  var x;
  x=Val.map3V(f3,v1,v2,v3);
  return((Val.map2V(function(a)
  {
   return function(f)
   {
    return f(a);
   };
  }))(v4))(x);
 };
 Val.map3V=function(f3,v1,v2,v3)
 {
  var x;
  x=((Val.map2V(f3))(v1))(v2);
  return((Val.map2V(function(a)
  {
   return function(f)
   {
    return f(a);
   };
  }))(v3))(x);
 };
 Val.map2V=function(f)
 {
  function swap(f$1,a,b)
  {
   return(f$1(b))(a);
  }
  function $1(vb)
  {
   var f$1,$2;
   f$1=($2=function(x)
   {
    var $3;
    $3=f(x);
    return function($4)
    {
     return Val.mapV($3,$4);
    };
   },function($3)
   {
    return swap($2,vb,$3);
   });
   return function(v)
   {
    return Val.bindV(f$1,v);
   };
  }
  return(Runtime.Curried3(swap))($1);
 };
 Val.bindV=function(f,v)
 {
  return v.$==2?new Val({
   $:2,
   $0:View.Bind(function(x)
   {
    return Val.toView(f(x));
   },v.$0)
  }):v.$==1?new Val({
   $:2,
   $0:View.Bind(function(x)
   {
    return Val.toView(f(x));
   },v.$0.RView())
  }):f(v.$0);
 };
 Val.getAsync=function(v)
 {
  return v.$==2?View.GetAsync(v.$0):v.$==1?Concurrency.Return(v.$0.RVal()):Concurrency.Return(v.$0);
 };
 Val.toView=function(v)
 {
  return v.$==2?v.$0:v.$==1?v.$0.RView():View.Const(v.$0);
 };
 Val.iterV=function(f,va)
 {
  if(va.$==2)
   View.Get(f,va.$0);
  else
   if(va.$==1)
    f(va.$0.RVal());
   else
    f(va.$0);
 };
 Val.mapV=function(f,va)
 {
  return va.$==2?new Val({
   $:2,
   $0:View.Map(f,va.$0)
  }):va.$==1?new Val({
   $:2,
   $0:View.Map(f,va.$0.RView())
  }):new Val({
   $:0,
   $0:f(va.$0)
  });
 };
 HtmlNode$1=HtmlNode.HtmlNode=Runtime.Class({
  Style:function(sty)
  {
   return this.AddChildren([HtmlNode.style(sty)]);
  },
  AddClass:function(c)
  {
   return HtmlNode.addClass(c,this);
  },
  InsertChildren:function(add)
  {
   return HtmlNode.insertChildren(add,this);
  },
  AddChildren:function(add)
  {
   return HtmlNode.addChildren(add,this);
  },
  get_toDoc:function()
  {
   var $1,x,v;
   return this.$==1||this.$==4&&true?Doc.Empty():(x=HtmlNode.chooseNode(this),(v=Doc.Empty(),x==null?v:x.$0));
  }
 },null,HtmlNode$1);
 HtmlNode$1.HtmlEmpty=new HtmlNode$1({
  $:4
 });
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(11,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(10,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(9,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(8,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(7,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(6,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(5,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(4,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(3,chn,ps);
 };
 HtmlNode$1.op_MinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(2,chn,ps);
 };
 HtmlNode$1.op_Addition=function(ps,r)
 {
  return new List.T({
   $:1,
   $0:r,
   $1:ps
  });
 };
 HtmlNode$1.op_MinusMinusMinus=function(ps,chn)
 {
  return ps.$==1?ps.$1.$==1?new List.T({
   $:1,
   $0:ps.$1.$0.AddChildren([ps.$0.AddChildren([chn])]),
   $1:ps.$1.$1
  }):List.ofArray([ps.$0.AddChildren([chn])]):List.T.Empty;
 };
 HtmlNode$1.op_Subtraction=function(ps,chn)
 {
  return ps.$==0?List.T.Empty:new List.T({
   $:1,
   $0:ps.$0.AddChildren([chn]),
   $1:ps.$1
  });
 };
 HtmlNode.LoadFilesAsync=function(files)
 {
  function a($1,$2)
  {
   try
   {
    Global.CIPHERSpaceLoadFiles(files,$1);
   }
   catch(e)
   {
    $2(e);
   }
  }
  return Concurrency.FromContinuations(function($1,$2,$3)
  {
   return a.apply(null,[$1,$2,$3]);
  });
 };
 HtmlNode.findRootElement=function(e)
 {
  var root;
  return!function(a)
  {
   return e.getRootNode(a);
  }?Global.document.body:(root=e.getRootNode(),!root.body?root.firstChild:root.body);
 };
 HtmlNode.createIFrame=function(f)
 {
  var cover;
  cover=Var.Create$1(true);
  return HtmlNode.div([HtmlNode.style("position: relative; overflow: hidden; height: 100%; width: 100%;"),HtmlNode.iframe([HtmlNode.style("position: absolute; width:100%; height:100%;"),HtmlNode.frameborder("0"),new HtmlNode$1({
   $:7,
   $0:AttrModule.OnAfterRender(f)
  }),new HtmlNode$1({
   $:7,
   $0:AttrModule.Handler("mouseleave",function()
   {
    return function()
    {
     return Var.Set(cover,true);
    };
   })
  })]),HtmlNode.div([HtmlNode.style("position: absolute;"),HtmlNode.classIf("iframe-cover",Val.map(Global.id,cover)),new HtmlNode$1({
   $:7,
   $0:AttrModule.Handler("mouseenter",function()
   {
    return function()
    {
     return View.Get(function(pressed)
     {
      if(!pressed)
       Var.Set(cover,false);
     },Mouse.get_MousePressed());
    };
   })
  })]),HtmlNode.styleH([HtmlNode.htmlText(".iframe-cover { top:0; left:0; right:0; bottom:0; background: blue; opacity: 0.04; z-index: 2; }")])]);
 };
 HtmlNode.bindHElem=function(hElemF,v)
 {
  return new HtmlNode$1({
   $:5,
   $0:Val.map(hElemF,Val.fixit(v))
  });
 };
 HtmlNode.string2Styles=function()
 {
  SC$1.$cctor();
  return SC$1.string2Styles;
 };
 HtmlNode.style2pairs=function(ss)
 {
  return Arrays.map(function(d)
  {
   return[Strings.Trim(Arrays.get(d,0)),Strings.Trim(Arrays.get(d,1))];
  },Arrays.filter(function(d)
  {
   return Arrays.length(d)===2;
  },Arrays.map(function(s)
  {
   return Strings.SplitChars(s,[":"],0);
  },Strings.SplitChars(ss,[";"],0))));
 };
 HtmlNode.xclass=function(v)
 {
  var m,cv;
  return new HtmlNode$1({
   $:7,
   $0:(m=Val.fixit(v),m.$==2?AttrModule.DynamicClass("class_for_view_not_implemented",m.$0,function(y)
   {
    return""!==y;
   }):m.$==1?(cv=m.$0,AttrModule.DynamicClass(cv.RVal(),cv.RView(),function(y)
   {
    return""!==y;
   })):AttrModule.Class(m.$0))
  });
 };
 HtmlNode.classIf=function(cls,v)
 {
  return HtmlNode["class"](Val.map(function(b)
  {
   return b?cls:"";
  },Val.fixit(v)));
 };
 HtmlNode.css=function(v)
 {
  return HtmlNode.styleH([HtmlNode.htmlText(v)]);
 };
 HtmlNode.style1=function(n,v)
 {
  var x;
  return HtmlNode.style(Val.map((x=n+":",function(y)
  {
   return x+y;
  }),v));
 };
 HtmlNode.style=function(v)
 {
  return HtmlNode.htmlAttribute("style",v);
 };
 HtmlNode.draggable=function(v)
 {
  return HtmlNode.htmlAttribute("draggable",v);
 };
 HtmlNode.spellcheck=function(v)
 {
  return HtmlNode.htmlAttribute("spellcheck",v);
 };
 HtmlNode.frameborder=function(v)
 {
  return HtmlNode.htmlAttribute("frameborder",v);
 };
 HtmlNode.Id=function(v)
 {
  return HtmlNode.htmlAttribute("id",v);
 };
 HtmlNode.title=function(v)
 {
  return HtmlNode.htmlAttribute("title",v);
 };
 HtmlNode.width=function(v)
 {
  return HtmlNode.htmlAttribute("width",v);
 };
 HtmlNode.type=function(v)
 {
  return HtmlNode.htmlAttribute("type",v);
 };
 HtmlNode["class"]=function(v)
 {
  return HtmlNode.htmlAttribute("class",v);
 };
 HtmlNode.src=function(v)
 {
  return HtmlNode.htmlAttribute("src",v);
 };
 HtmlNode.charset=function(v)
 {
  return HtmlNode.htmlAttribute("charset",v);
 };
 HtmlNode.rel=function(v)
 {
  return HtmlNode.htmlAttribute("rel",v);
 };
 HtmlNode.hrefO=function(vO)
 {
  return HtmlNode.htmlAttributeO("href",vO);
 };
 HtmlNode.href=function(v)
 {
  return HtmlNode.htmlAttribute("href",v);
 };
 HtmlNode.target=function(v)
 {
  return HtmlNode.htmlAttribute("target",v);
 };
 HtmlNode.strong=function(at)
 {
  return HtmlNode.htmlElement("strong",at);
 };
 HtmlNode.section=function(ch)
 {
  return HtmlNode.htmlElement("section",ch);
 };
 HtmlNode.body=function(ch)
 {
  return HtmlNode.htmlElement("body",ch);
 };
 HtmlNode.iframe=function(at)
 {
  return HtmlNode.htmlElement("iframe",at);
 };
 HtmlNode.link=function(sc)
 {
  return HtmlNode.htmlElement("link",sc);
 };
 HtmlNode.fieldset=function(ch)
 {
  return HtmlNode.htmlElement("fieldset",ch);
 };
 HtmlNode.styleH=function(st)
 {
  return HtmlNode.htmlElement("style",st);
 };
 HtmlNode.script=function(sc)
 {
  return HtmlNode.htmlElement("script",sc);
 };
 HtmlNode.button=function(ch)
 {
  return HtmlNode.htmlElement("button",ch);
 };
 HtmlNode.label=function(ch)
 {
  return HtmlNode.htmlElement("label",ch);
 };
 HtmlNode.tbody=function(ch)
 {
  return HtmlNode.htmlElement("tbody",ch);
 };
 HtmlNode.td=function(ch)
 {
  return HtmlNode.htmlElement("td",ch);
 };
 HtmlNode.tr=function(ch)
 {
  return HtmlNode.htmlElement("tr",ch);
 };
 HtmlNode.th=function(ch)
 {
  return HtmlNode.htmlElement("th",ch);
 };
 HtmlNode.thead=function(ch)
 {
  return HtmlNode.htmlElement("thead",ch);
 };
 HtmlNode.table=function(ch)
 {
  return HtmlNode.htmlElement("table",ch);
 };
 HtmlNode.form=function(ch)
 {
  return HtmlNode.htmlElement("form",ch);
 };
 HtmlNode.span=function(ch)
 {
  return HtmlNode.htmlElement("span",ch);
 };
 HtmlNode.img=function(ch)
 {
  return HtmlNode.htmlElement("img",ch);
 };
 HtmlNode.div=function(ch)
 {
  return HtmlNode.htmlElement("div",ch);
 };
 HtmlNode.h6=function(ch)
 {
  return HtmlNode.htmlElement("h6",ch);
 };
 HtmlNode.h5=function(ch)
 {
  return HtmlNode.htmlElement("h5",ch);
 };
 HtmlNode.h4=function(ch)
 {
  return HtmlNode.htmlElement("h4",ch);
 };
 HtmlNode.h3=function(ch)
 {
  return HtmlNode.htmlElement("h3",ch);
 };
 HtmlNode.h2=function(ch)
 {
  return HtmlNode.htmlElement("h2",ch);
 };
 HtmlNode.h1=function(ch)
 {
  return HtmlNode.htmlElement("h1",ch);
 };
 HtmlNode.hr=function(ch)
 {
  return HtmlNode.htmlElement("hr",ch);
 };
 HtmlNode.br=function(ch)
 {
  return HtmlNode.htmlElement("br",ch);
 };
 HtmlNode.li=function(ch)
 {
  return HtmlNode.htmlElement("li",ch);
 };
 HtmlNode.ul=function(ch)
 {
  return HtmlNode.htmlElement("ul",ch);
 };
 HtmlNode.p=function(ch)
 {
  return HtmlNode.htmlElement("p",ch);
 };
 HtmlNode.a=function(ch)
 {
  return HtmlNode.htmlElement("a",ch);
 };
 HtmlNode.textV=function(v)
 {
  return HtmlNode.tag(Doc.TextNode,v);
 };
 HtmlNode._placeholder=function(v)
 {
  return HtmlNode.atr("placeholder",v);
 };
 HtmlNode._style=function(v)
 {
  return HtmlNode.atr("style",v);
 };
 HtmlNode._type=function(v)
 {
  return HtmlNode.atr("type",v);
 };
 HtmlNode._class=function(v)
 {
  return HtmlNode.atr("class",v);
 };
 HtmlNode.tag=function(tag,v)
 {
  return Val.tagDoc(tag,Val.fixit(v));
 };
 HtmlNode.atr=function(att,v)
 {
  return Val.attrV(att,Val.fixit(v));
 };
 HtmlNode.renderDoc=function()
 {
  SC$1.$cctor();
  return SC$1.renderDoc;
 };
 HtmlNode.op_BangBang=function(p,l)
 {
  return List.ofArray([p(l)]);
 };
 HtmlNode.endHtmlIndent=function(ps)
 {
  var o;
  o=HtmlNode.finishO(ps);
  return o==null?HtmlNode.htmlText("Malformed HTMLNode"):o.$0;
 };
 HtmlNode.finishO=function(ps)
 {
  return ps.$==1?ps.$1.$==1?HtmlNode.finishO(HtmlNode.out(ps)):{
   $:1,
   $0:ps.$0
  }:null;
 };
 HtmlNode.indent2Level=function(lvl,chn,ps)
 {
  return ps.get_Length()<lvl?new List.T({
   $:1,
   $0:chn,
   $1:ps
  }):HtmlNode.indent2Level(lvl,chn,HtmlNode.out(ps));
 };
 HtmlNode.out=function(ps)
 {
  return ps.$==1?ps.$1.$==1?new List.T({
   $:1,
   $0:HtmlNode.addChildren([ps.$0],ps.$1.$0),
   $1:ps.$1.$1
  }):List.ofArray([ps.$0]):List.T.Empty;
 };
 HtmlNode.addClassIf=function(c,v)
 {
  var c$1;
  c$1=Val.map(function(b)
  {
   return b?c:"";
  },Val.fixit(v));
  return function(h)
  {
   return HtmlNode.addClass(c$1,h);
  };
 };
 HtmlNode.addClass=function(c,h)
 {
  return HtmlNode.addChildren(List.ofArray([HtmlNode.htmlAttribute("class",c)]),h);
 };
 HtmlNode.insertChildren=function(add,h)
 {
  function f(n,ch)
  {
   return[n,Seq.append(add,ch)];
  }
  return HtmlNode.mapHtmlElement(function($1)
  {
   return function($2)
   {
    return f($1,$2);
   };
  },h);
 };
 HtmlNode.addChildren=function(add,h)
 {
  function f(n,ch)
  {
   return[n,Seq.append(ch,add)];
  }
  return HtmlNode.mapHtmlElement(function($1)
  {
   return function($2)
   {
    return f($1,$2);
   };
  },h);
 };
 HtmlNode.someElt=function(elt)
 {
  return new HtmlNode$1({
   $:6,
   $0:elt
  });
 };
 HtmlNode.str=function(txt)
 {
  return new HtmlNode$1({
   $:3,
   $0:Val.fixit(txt)
  });
 };
 HtmlNode.htmlText=function(txt)
 {
  return new HtmlNode$1({
   $:3,
   $0:Val.fixit(txt)
  });
 };
 HtmlNode.htmlAttributeO=function(name,v)
 {
  return new HtmlNode$1({
   $:2,
   $0:name,
   $1:Val.fixit(v)
  });
 };
 HtmlNode.htmlAttribute=function(name,v)
 {
  return new HtmlNode$1({
   $:1,
   $0:name,
   $1:Val.fixit(v)
  });
 };
 HtmlNode.htmlElement=function(name,ch)
 {
  return new HtmlNode$1({
   $:0,
   $0:name,
   $1:ch
  });
 };
 HtmlNode.mapHtmlElement=function(f,element)
 {
  var t;
  return element.$==0?(t=(f(element.$0))(element.$1),new HtmlNode$1({
   $:0,
   $0:t[0],
   $1:t[1]
  })):element.$==5?new HtmlNode$1({
   $:5,
   $0:Val.map(function(e)
   {
    return HtmlNode.mapHtmlElement(f,e);
   },element.$0)
  }):element;
 };
 HtmlNode.getAttrChildren=function(attr)
 {
  var f,g,v;
  function c(a)
  {
   var $1;
   return a.$==1&&(a.$0===attr&&($1=[a.$0,a.$1],true))?{
    $:1,
    $0:$1[1]
   }:null;
  }
  f=function(s)
  {
   return Seq.tryPick(c,s);
  };
  g=(v=new Val({
   $:0,
   $0:""
  }),function(o)
  {
   return o==null?v:o.$0;
  });
  return function(x)
  {
   return g(f(x));
  };
 };
 HtmlNode.chooseNode=function(node)
 {
  var children,x,g,v;
  return node.$==0?(children=node.$1,{
   $:1,
   $0:Doc.Element(node.$0,HtmlNode.getAttrsFromSeq(children),Seq.choose(HtmlNode.chooseNode,children))
  }):node.$==3?{
   $:1,
   $0:Val.tagDoc(Doc.TextNode,node.$0)
  }:node.$==6?{
   $:1,
   $0:node.$0
  }:node.$==5?{
   $:1,
   $0:(x=Val.toView(node.$0),Doc.BindView((g=(v=Doc.Empty(),function(o)
   {
    return o==null?v:o.$0;
   }),function(x$1)
   {
    return g(HtmlNode.chooseNode(x$1));
   }),x))
  }:null;
 };
 HtmlNode.getAttrsFromSeq=function(children)
 {
  var x;
  x=Seq.choose(HtmlNode.chooseAttr,children);
  return Seq.append(List.choose(Global.id,List.ofArray([HtmlNode.groupAttr("class"," ",children),HtmlNode.groupAttr("style","; ",children)])),x);
 };
 HtmlNode.groupAttr=function(name,sep,children)
 {
  var ss,r;
  function f(a,b)
  {
   return HtmlNode.concat(sep,a,b);
  }
  ss=Seq.choose(function(n)
  {
   return HtmlNode.chooseThisAttr(name,n);
  },children);
  return Seq.isEmpty(ss)?null:{
   $:1,
   $0:Val.attrV(name,(r=(Runtime.Curried3(Val.map2))(function($1)
   {
    return function($2)
    {
     return f($1,$2);
    };
   }),Seq.reduce(function($1,$2)
   {
    return(r($1))($2);
   },ss)))
  };
 };
 HtmlNode.concat=function(s,a,b)
 {
  return a+s+b;
 };
 HtmlNode.chooseThisAttr=function(_this,node)
 {
  var $1;
  return node.$==1&&(node.$0===_this&&($1=[node.$0,node.$1],true))?{
   $:1,
   $0:$1[1]
  }:null;
 };
 HtmlNode.chooseAttr=function(node)
 {
  var $1,name,$2,name$1;
  return node.$==1&&((name=node.$0,name!=="class"&&name!=="style")&&($1=[node.$0,node.$1],true))?{
   $:1,
   $0:Val.attrV($1[0],$1[1])
  }:node.$==2&&((name$1=node.$0,name$1!=="class"&&name$1!=="style")&&($2=[node.$0,node.$1],true))?{
   $:1,
   $0:Val.attrVO($2[0],$2[1])
  }:node.$==7?{
   $:1,
   $0:node.$0
  }:null;
 };
 HtmlNode.addClassX=function(classes,add)
 {
  var x;
  return Strings.concat(" ",(x=new FSharpSet.New$1(BalancedTree.OfSeq(Strings.SplitChars(classes,[" "],0))),new FSharpSet.New$1(BalancedTree.OfSeq(Seq.append(new FSharpSet.New$1(BalancedTree.OfSeq(Strings.SplitChars(add,[" "],0))),x)))));
 };
 Button=Template.Button=Runtime.Class({
  OnClick:function(f)
  {
   return Button.New(this._class,this._type,this.style,this.text,f,this.disabled,this.id);
  },
  Disabled:function(dis)
  {
   return Button.New(this._class,this._type,this.style,this.text,this.onClick,Val.fixit(dis),this.id);
  },
  Text:function(txt)
  {
   return Button.New(this._class,this._type,this.style,Val.fixit(txt),this.onClick,this.disabled,this.id);
  },
  Style:function(sty)
  {
   return Button.New(this._class,this._type,Val.fixit(sty),this.text,this.onClick,this.disabled,this.id);
  },
  Type:function(typ)
  {
   return Button.New(this._class,Val.fixit(typ),this.style,this.text,this.onClick,this.disabled,this.id);
  },
  Class:function(clas)
  {
   return Button.New(Val.fixit(clas),this._type,this.style,this.text,this.onClick,this.disabled,this.id);
  },
  Id:function(id)
  {
   return Button.New(this._class,this._type,this.style,this.text,this.onClick,this.disabled,id);
  },
  get_Render:function()
  {
   var x,view;
   return new HtmlNode$1({
    $:6,
    $0:(x=HtmlNode.button([HtmlNode.type(this._type),HtmlNode["class"](this._class),HtmlNode.Id(this.id),HtmlNode.style(this.style),new HtmlNode$1({
     $:7,
     $0:(view=View.Const(""),AttrModule.DynamicPred("disabled",Val.toView(this.disabled),view))
    }),new HtmlNode$1({
     $:7,
     $0:AttrProxy.Handler("click",this.onClick)
    }),new HtmlNode$1({
     $:3,
     $0:this.text
    })]),(HtmlNode.renderDoc())(x))
   });
  }
 },null,Button);
 Button.New$1=function(txt)
 {
  return Button.New(Val.fixit("btn"),Val.fixit("button"),Val.fixit(""),Val.fixit(txt),function()
  {
   return function()
   {
    return null;
   };
  },Val.fixit(false),"");
 };
 Button.New=function(_class,_type,style,text,onClick,disabled,id)
 {
  return new Button({
   _class:_class,
   _type:_type,
   style:style,
   text:text,
   onClick:onClick,
   disabled:disabled,
   id:id
  });
 };
 Input=Template.Input=Runtime.Class({
  get_Var:function()
  {
   return this["var"];
  },
  SetVar:function(v)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,this.id,v,this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded);
  },
  Suffix:function(s)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,this.id,this["var"],this.prefix,s,this.content,this.prefixAdded,true);
  },
  Prefix:function(p)
  {
   return this.Prefix$1(HtmlNode.htmlText(p));
  },
  Prefix$1:function(p)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,this.id,this["var"],p,this.suffix,this.content,true,this.suffixAdded);
  },
  Content:function(c)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,this.id,this["var"],this.prefix,this.suffix,c,this.prefixAdded,this.suffixAdded);
  },
  Id:function(id)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded);
  },
  Placeholder:function(plc)
  {
   return Input.New(this._type,this._class,this.style,Val.fixit(plc),this.id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded);
  },
  Style:function(sty)
  {
   return Input.New(this._type,this._class,Val.fixit(sty),this.placeholder,this.id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded);
  },
  Type:function(typ)
  {
   return Input.New(Val.fixit(typ),this._class,this.style,this.placeholder,this.id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded);
  },
  Class:function(clas)
  {
   return Input.New(this._type,Val.fixit(clas),this.style,this.placeholder,this.id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded);
  },
  get_Render:function()
  {
   var $this;
   function groupClass(det)
   {
    return det.$==3?"input-group-addon":"input-group-btn";
   }
   $this=this;
   return HtmlNode.div(List.ofSeq(Seq.delay(function()
   {
    return Seq.append($this.prefixAdded||$this.suffixAdded?[HtmlNode["class"]("input-group")]:[],Seq.delay(function()
    {
     return Seq.append($this.prefixAdded?[HtmlNode.span([HtmlNode["class"](groupClass($this.prefix)),$this.prefix])]:[],Seq.delay(function()
     {
      return Seq.append([new HtmlNode$1({
       $:6,
       $0:Doc.Input(Seq.append($this.content,List.ofArray([HtmlNode._type($this._type),HtmlNode._class($this._class),HtmlNode._style($this.style),AttrProxy.Create("id",$this.id),HtmlNode._placeholder($this.placeholder)])),$this["var"])
      })],Seq.delay(function()
      {
       return $this.suffixAdded?[HtmlNode.span([HtmlNode["class"](groupClass($this.suffix)),$this.suffix])]:[];
      }));
     }));
    }));
   })));
  }
 },null,Input);
 Input.New$1=function(v)
 {
  return Input.New$2(Var.Create$1(v));
 };
 Input.New$2=function(_var)
 {
  var c;
  c=Val.fixit("form-control");
  return Input.New(Val.fixit("text"),c,Val.fixit(""),Val.fixit("Enter text:"),"",_var,HtmlNode$1.HtmlEmpty,HtmlNode$1.HtmlEmpty,List.T.Empty,false,false);
 };
 Input.New=function(_type,_class,style,placeholder,id,_var,prefix,suffix,content,prefixAdded,suffixAdded)
 {
  return new Input({
   _type:_type,
   _class:_class,
   style:style,
   placeholder:placeholder,
   id:id,
   "var":_var,
   prefix:prefix,
   suffix:suffix,
   content:content,
   prefixAdded:prefixAdded,
   suffixAdded:suffixAdded
  });
 };
 Hoverable=Template.Hoverable=Runtime.Class({
  Content:function(c)
  {
   var $this;
   $this=this;
   return c.AddChildren([HtmlNode.classIf("hovering",this.hover),new HtmlNode$1({
    $:7,
    $0:AttrModule.Handler("mouseenter",function()
    {
     return function()
     {
      return $this.hover.set_RVal(true);
     };
    })
   }),new HtmlNode$1({
    $:7,
    $0:AttrModule.Handler("mouseleave",function()
    {
     return function()
     {
      return $this.hover.set_RVal(false);
     };
    })
   })]);
  },
  Content$1:function(c)
  {
   var $this;
   $this=this;
   return HtmlNode.div(Seq.append(c,List.ofArray([HtmlNode.classIf("hovering",this.hover),new HtmlNode$1({
    $:7,
    $0:AttrModule.Handler("mouseenter",function()
    {
     return function()
     {
      return $this.hover.set_RVal(true);
     };
    })
   }),new HtmlNode$1({
    $:7,
    $0:AttrModule.Handler("mouseleave",function()
    {
     return function()
     {
      return $this.hover.set_RVal(false);
     };
    })
   })])));
  }
 },null,Hoverable);
 Hoverable.get_Demo=function()
 {
  return Hoverable.get_New().Content(HtmlNode.div([HtmlNode.style("flex-flow: column;")]));
 };
 Hoverable.get_New=function()
 {
  return Hoverable.New(Var.Create$1(false));
 };
 Hoverable.New=function(hover)
 {
  return new Hoverable({
   hover:hover
  });
 };
 TextArea=Template.TextArea=Runtime.Class({
  get_Var:function()
  {
   return this["var"];
  },
  SetVar:function(v)
  {
   return TextArea.New(this._class,this.placeholder,this.title,this.spellcheck,this.id,v);
  },
  Id:function(id)
  {
   return TextArea.New(this._class,this.placeholder,this.title,this.spellcheck,id,this["var"]);
  },
  Spellcheck:function(spl)
  {
   return TextArea.New(this._class,this.placeholder,this.title,spl,this.id,this["var"]);
  },
  Title:function(ttl)
  {
   return TextArea.New(this._class,this.placeholder,Val.fixit(ttl),this.spellcheck,this.id,this["var"]);
  },
  Placeholder:function(plc)
  {
   return TextArea.New(this._class,Val.fixit(plc),this.title,this.spellcheck,this.id,this["var"]);
  },
  Class:function(clas)
  {
   return TextArea.New(Val.fixit(clas),this.placeholder,this.title,this.spellcheck,this.id,this["var"]);
  },
  get_Render:function()
  {
   return this.RenderWith(List.T.Empty);
  },
  RenderWith:function(more)
  {
   return HtmlNode.div([HtmlNode.someElt(Doc.InputArea(List.append(List.ofArray([HtmlNode._class(this._class),AttrProxy.Create("id",this.id),HtmlNode.atr("spellcheck",Val.map(function(spl)
   {
    return spl?"true":"false";
   },this.spellcheck)),HtmlNode.atr("title",this.title),HtmlNode.atr("style","height: 100%;  width: 100%; box-sizing: border-box; "),HtmlNode._placeholder(this.placeholder)]),more),this["var"]))]);
  }
 },null,TextArea);
 TextArea.New$1=function(v)
 {
  return TextArea.New$2(Var.Create$1(v));
 };
 TextArea.New$2=function(_var)
 {
  return TextArea.New(Val.fixit("form-control"),Val.fixit("Enter text:"),Val.fixit(""),Val.fixit(false),"",_var);
 };
 TextArea.New=function(_class,placeholder,title,spellcheck,id,_var)
 {
  return new TextArea({
   _class:_class,
   placeholder:placeholder,
   title:title,
   spellcheck:spellcheck,
   id:id,
   "var":_var
  });
 };
 CodeMirrorPos.New=function(line,ch)
 {
  return{
   line:line,
   ch:ch
  };
 };
 CodeMirrorEditor=Template.CodeMirrorEditor=Runtime.Class({},WebSharper.Obj,CodeMirrorEditor);
 CodeMirrorEditor.New=Runtime.Ctor(function()
 {
 },CodeMirrorEditor);
 CodeMirror=Template.CodeMirror=Runtime.Class({
  get_Var:function()
  {
   return this["var"];
  },
  OnRender:function(f)
  {
   return CodeMirror.New(this._class,this.style,this.id,this["var"],this.onChange,{
    $:1,
    $0:f
   },this.editorO);
  },
  OnChange:function(f)
  {
   return CodeMirror.New(this._class,this.style,this.id,this["var"],f,this.onRender,this.editorO);
  },
  Style:function(sty)
  {
   return CodeMirror.New(this._class,Val.fixit(sty),this.id,this["var"],this.onChange,this.onRender,this.editorO);
  },
  SetVar:function(v)
  {
   return CodeMirror.New(this._class,this.style,this.id,v,this.onChange,this.onRender,this.editorO);
  },
  Id:function(id)
  {
   return CodeMirror.New(this._class,this.style,id,this["var"],this.onChange,this.onRender,this.editorO);
  },
  Class:function(clas)
  {
   return CodeMirror.New(Val.fixit(clas),this.style,this.id,this["var"],this.onChange,this.onRender,this.editorO);
  },
  get_Render:function()
  {
   var $this;
   $this=this;
   return HtmlNode.div([HtmlNode["class"](this._class),new HtmlNode$1({
    $:7,
    $0:AttrProxy.Create("id",this.id)
   }),HtmlNode.style("position: relative; height: 300px"),HtmlNode.style(this.style),HtmlNode.div([HtmlNode.style("height: 100%; width: 100%; position: absolute;"),new HtmlNode$1({
    $:7,
    $0:AttrModule.OnAfterRender(function(el)
    {
     Global.CIPHERSpaceLoadFiles(Template.codeMirrorIncludes(),function()
     {
      var editor,o,editorChanged,varChanged;
      editor=Global.CodeMirror(el,{
       theme:"rubyblue",
       lineNumbers:true,
       matchBrackets:true,
       gutters:["CodeMirror-lint-markers"],
       extraKeys:{
        Tab:function(cm)
        {
         cm.replaceSelection("    ","end");
        },
        F11:function(cm)
        {
         cm.setOption("fullScreen",!cm.getOption("fullScreen"));
        }
       }
      });
      $this.editorO={
       $:1,
       $0:editor
      };
      o=$this.onRender;
      o==null?void 0:o.$0(editor);
      editorChanged=[0];
      varChanged=[0];
      editor.on("changes",function()
      {
       var v;
       v=editor.getValue();
       $this["var"].RVal()!==v?(editorChanged[0]=editorChanged[0]+1,$this["var"].set_RVal(v),$this.onChange()):void 0;
      });
      View.Sink(function()
      {
       if(editorChanged[0]>varChanged[0])
        varChanged[0]=editorChanged[0];
       else
        if(editor.getValue()!==$this["var"].RVal())
         {
          editor.setValue($this["var"].RVal());
          editor.getDoc().clearHistory();
         }
      },$this["var"].RView());
     });
    })
   })]),HtmlNode.link([HtmlNode.href("/EPFileX/codemirror/content/editor.css"),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]),HtmlNode.link([HtmlNode.href("/EPFileX/codemirror/content/codemirror.css"),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]),HtmlNode.link([HtmlNode.href("/EPFileX/codemirror/scripts/addon/display/fullscreen.css"),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]),HtmlNode.link([HtmlNode.href("/EPFileX/codemirror/scripts/addon/dialog/dialog.css"),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]),HtmlNode.link([HtmlNode.href("/EPFileX/codemirror/scripts/addon/hint/show-hint.css"),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]),HtmlNode.link([HtmlNode.href("/EPFileX/codemirror/scripts/addon/lint/lint.css"),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]),HtmlNode.css(".CodeMirror { height: 100% }")]);
  }
 },null,CodeMirror);
 CodeMirror.New$1=function(v)
 {
  return CodeMirror.New$2(Var.Create$1(v));
 };
 CodeMirror.New$2=function(_var)
 {
  return CodeMirror.New(Val.fixit(""),Val.fixit(""),"",_var,Global.ignore,null,null);
 };
 CodeMirror.New=function(_class,style,id,_var,onChange,onRender,editorO)
 {
  return new CodeMirror({
   _class:_class,
   style:style,
   id:id,
   "var":_var,
   onChange:onChange,
   onRender:onRender,
   editorO:editorO
  });
 };
 Hint.New=function(text,displayText,className)
 {
  return{
   text:text,
   displayText:displayText,
   className:className
  };
 };
 HintResponse.New=function(list,from,to)
 {
  return{
   list:list,
   from:from,
   to:to
  };
 };
 HintOptions.New=function(hint,completeSingle,container)
 {
  return{
   hint:hint,
   completeSingle:completeSingle,
   container:container
  };
 };
 LintResponse.New=function(message,severity,from,to)
 {
  return{
   message:message,
   severity:severity,
   from:from,
   to:to
  };
 };
 SplitterBar=Template.SplitterBar=Runtime.Class({
  Children:function(ch)
  {
   return SplitterBar.New(this.value,this.min,this.max,this.vertical,this.node,ch,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  get_After:function()
  {
   return SplitterBar.New(this.value,this.min,this.max,this.vertical,this.node,this.children,true,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  get_Before:function()
  {
   return SplitterBar.New(this.value,this.min,this.max,this.vertical,this.node,this.children,false,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Horizontal:function()
  {
   return SplitterBar.New(this.value,this.min,this.max,Val.fixit(false),this.node,this.children,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Vertical:function()
  {
   return SplitterBar.New(this.value,this.min,this.max,Val.fixit(true),this.node,this.children,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Horizontal$1:function(v)
  {
   return SplitterBar.New(this.value,this.min,this.max,Val.map(function(v$1)
   {
    return!v$1;
   },Val.fixit(v)),this.node,this.children,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Vertical$1:function(v)
  {
   return SplitterBar.New(this.value,this.min,this.max,Val.fixit(v),this.node,this.children,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Max:function(v)
  {
   return SplitterBar.New(this.value,this.min,Val.fixit(v),this.vertical,this.node,this.children,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Min:function(v)
  {
   return SplitterBar.New(this.value,Val.fixit(v),this.max,this.vertical,this.node,this.children,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Node:function(node)
  {
   return SplitterBar.New(this.value,this.min,this.max,this.vertical,node,this.children,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Value:function(v)
  {
   this.value.set_RVal(v);
   return this;
  },
  get_Render:function()
  {
   var $this;
   function mouseCoord(ev)
   {
    return $this.startVer?ev.clientX:ev.clientY;
   }
   function size()
   {
    var m;
    m=$this.domElem;
    return m!=null&&m.$==1?$this.startVer?$this.after?m.$0.parentElement.getBoundingClientRect().width:-m.$0.parentElement.getBoundingClientRect().width:$this.after?m.$0.parentElement.getBoundingClientRect().height:-m.$0.parentElement.getBoundingClientRect().height:100;
   }
   function drag(ev)
   {
    $this.value.set_RVal((mouseCoord(ev)-$this.start)*100/$this.size+$this.startP);
   }
   function finishDragging()
   {
    if($this.dragging)
     {
      $this.dragging=false;
      Global.removeEventListener("mousemove",drag,false);
      Global.removeEventListener("mouseup",finishDragging,false);
     }
   }
   function startDragging(a,ev)
   {
    return!$this.dragging?Val.iter(Global.ignore,Val.map2(function(startP)
    {
     return function(dirV)
     {
      $this.dragging=true;
      $this.startVer=dirV;
      $this.startP=startP;
      $this.start=mouseCoord(ev);
      $this.size=size();
      Global.addEventListener("mousemove",drag,false);
      Global.addEventListener("mouseup",finishDragging,false);
      return ev.preventDefault();
     };
    },$this.get_GetValue(),$this.vertical)):null;
   }
   $this=this;
   return this.node.AddChildren([HtmlNode["class"](Val.map(function(ver)
   {
    return ver?"Vertical":"Horizontal";
   },this.vertical)),new HtmlNode$1({
    $:7,
    $0:AttrModule.Handler("mousedown",function($1)
    {
     return function($2)
     {
      return startDragging($1,$2);
     };
    })
   }),new HtmlNode$1({
    $:7,
    $0:AttrModule.OnAfterRender(function(el)
    {
     $this.domElem={
      $:1,
      $0:el
     };
    })
   }),HtmlNode.css("\n                    .Splitter.Vertical   { cursor: col-resize; background-color: #eef ; width : 5px ; margin-left:-7px; }\n                    .Splitter.Horizontal { cursor: row-resize; background-color: #eef ; height: 5px ; margin-top :-7px; }\n                ")]).AddChildren(this.children);
  },
  get_GetValue:function()
  {
   function f(e,e$1)
   {
    return Unchecked.Compare(e,e$1)===-1?e:e$1;
   }
   function f$1(e,e$1)
   {
    return Unchecked.Compare(e,e$1)===1?e:e$1;
   }
   return Val.map2(function($1)
   {
    return function($2)
    {
     return f($1,$2);
    };
   },this.max,Val.map2(function($1)
   {
    return function($2)
    {
     return f$1($1,$2);
    };
   },this.min,this.value));
  },
  get_Var:function()
  {
   return this.value;
  }
 },null,SplitterBar);
 SplitterBar.New$1=function(value)
 {
  return SplitterBar.New$2(Var.Create$1(value));
 };
 SplitterBar.New$2=function(_var)
 {
  return SplitterBar.New(_var,Val.fixit(5),Val.fixit(95),Val.fixit(true),HtmlNode.div([HtmlNode["class"]("Splitter")]),List.T.Empty,true,false,true,0,0,0,null);
 };
 SplitterBar.New=function(value,min,max,vertical,node,children,after,dragging,startVer,startP,start,size,domElem)
 {
  return new SplitterBar({
   value:value,
   min:min,
   max:max,
   vertical:vertical,
   node:node,
   children:children,
   after:after,
   dragging:dragging,
   startVer:startVer,
   startP:startP,
   start:start,
   size:size,
   domElem:domElem
  });
 };
 SectionType.StFixedPerc={
  $:2
 };
 SectionType.StFixedPx={
  $:1
 };
 SectionType.StVariable={
  $:0
 };
 Grid=Template.Grid=Runtime.Class({
  get_Render:function()
  {
   return HtmlNode.div(this.GridTemplate());
  },
  GridTemplate:function()
  {
   var $this;
   $this=this;
   return List.ofSeq(Seq.delay(function()
   {
    function m(area,html)
    {
     return area!=null&&area.$==1?html.AddChildren([HtmlNode.style((function($1)
     {
      return function($2)
      {
       return $1("grid-area: "+Utils.toSafe($2)+"; dispxlay: grid");
      };
     }(Global.id))(area.$0))]):html;
    }
    return Seq.append(Seq.map(function($1)
    {
     return m($1[0],$1[1]);
    },$this.content),Seq.delay(function()
    {
     function c($1,$2)
     {
      var spl;
      return $2.$==2?(spl=$2.$0,{
       $:1,
       $0:spl.get_Render().InsertChildren([HtmlNode.style1("grid-column",Global.String($1+(spl.after?2:1))),HtmlNode.style1("grid-row",(function($3)
       {
        return function($4)
        {
         return $3("1 / "+Global.String($4));
        };
       }(Global.id))(Arrays.length($this.rows)+1))])
      }):$2.$==1?null:null;
     }
     return Seq.append(Seq.choose(function($1)
     {
      return c($1[0],$1[1]);
     },Seq.indexed($this.cols)),Seq.delay(function()
     {
      function c$1($1,$2)
      {
       var spl;
       return $2.$==2?(spl=$2.$0,{
        $:1,
        $0:spl.get_Render().InsertChildren([HtmlNode.style1("grid-row",Global.String($1+(spl.after?2:1))),HtmlNode.style1("grid-column",(function($3)
        {
         return function($4)
         {
          return $3("1 / "+Global.String($4));
         };
        }(Global.id))(Arrays.length($this.cols)+1))])
       }):$2.$==1?null:null;
      }
      return Seq.append(Seq.choose(function($1)
      {
       return c$1($1[0],$1[1]);
      },Seq.indexed($this.rows)),Seq.delay(function()
      {
       return Seq.append($this.styles(),Seq.delay(function()
       {
        return Seq.append([HtmlNode.style((((Runtime.Curried3(function($1,$2,$3)
        {
         return $1("display: grid; grid-gap: "+$2.toFixed(6)+"px; padding: "+$3.toFixed(6)+"px; box-sizing: border-box");
        }))(Global.id))($this.gap))($this.padding))],Seq.delay(function()
        {
         return[new HtmlNode$1({
          $:7,
          $0:AttrModule.OnAfterRender(function(el)
          {
           function setVar(vr,vl)
           {
            return!Unchecked.Equals(vr.RVal(),vl)?vr.set_RVal(vl):null;
           }
           function setDimensions()
           {
            var r;
            r=el.getBoundingClientRect();
            setVar($this.widthHeight,[r.width,r.height]);
           }
           setDimensions();
           Template.addResizeObserver(setDimensions,el);
          })
         })];
        }));
       }));
      }));
     }));
    }));
   }));
  },
  styles:function()
  {
   return List.ofArray([HtmlNode.style1("grid-template-columns",this.style(this.cols,Val.map(function(t)
   {
    return t[0];
   },this.widthHeight))),HtmlNode.style1("grid-template-rows",this.style(this.rows,Val.map(function(t)
   {
    return t[1];
   },this.widthHeight)))]);
  },
  style:function(areas,size)
  {
   var $this,p,finalPerc,autoPct;
   function f(pcs,pxs)
   {
    return function(a)
    {
     return a.$==2?[Val.map2(function(x)
     {
      return function(y)
      {
       return x+y;
      };
     },a.$0.get_GetValue(),pcs),pxs]:a.$==1?a.$0.$==1?[pcs,Val.map2(function(x)
     {
      return function(y)
      {
       return x+y;
      };
     },a.$0.$0,pxs)]:[Val.map2(function(x)
     {
      return function(y)
      {
       return x+y;
      };
     },a.$0.$0,pcs),pxs]:[pcs,pxs];
    };
   }
   function perc(pc)
   {
    return Val.map2(function(finalPerc$1)
    {
     return function(pc$1)
     {
      var x,e,a;
      x=(e=finalPerc$1*pc$1,(a=0,Unchecked.Compare(a,e)===1?a:e));
      return(function($1)
      {
       return function($2)
       {
        return $1($2.toFixed(6)+"%");
       };
      }(Global.id))(x);
     };
    },finalPerc,pc);
   }
   function pixel(px)
   {
    return Val.map(function(px$1)
    {
     var x,a;
     x=(a=0,Unchecked.Compare(a,px$1)===1?a:px$1);
     return(function($1)
     {
      return function($2)
      {
       return $1($2.toFixed(6)+"px");
      };
     }(Global.id))(x);
    },px);
   }
   $this=this;
   return Arrays.length(areas)===0?new Val({
    $:0,
    $0:"100%"
   }):(p=Seq.fold(function($1,$2)
   {
    return(function($3)
    {
     return f($3[0],$3[1]);
    }($1))($2);
   },[new Val({
    $:0,
    $0:0
   }),new Val({
    $:0,
    $0:0
   })],areas),(finalPerc=Val.map2(function(v)
   {
    return function(size$1)
    {
     return(size$1-$this.padding*2-$this.gap*(Arrays.length(areas)-1)-v)/(size$1-$this.padding*2);
    };
   },p[1],size),(autoPct=Val.map(function(y)
   {
    return 100-y;
   },p[0]),Val.map(function(s)
   {
    return Strings.concat(" ",s);
   },Seq.foldBack(function(a,state)
   {
    function f$1(state$1,v)
    {
     return new List.T({
      $:1,
      $0:v,
      $1:state$1
     });
    }
    return Val.map2(function($1)
    {
     return function($2)
     {
      return f$1($1,$2);
     };
    },state,a.$==2?perc(a.$0.get_GetValue()):a.$==1?a.$0.$==1?pixel(a.$0.$0):perc(a.$0.$0):perc(autoPct));
   },areas,new Val({
    $:0,
    $0:List.T.Empty
   }))))));
  },
  Children:function(ch)
  {
   return this.changeSplitter(function(spl)
   {
    return spl.Children(ch);
   });
  },
  Min:function(v)
  {
   return this.changeSplitter(function(spl)
   {
    return spl.Min(v);
   });
  },
  Max:function(v)
  {
   return this.changeSplitter(function(spl)
   {
    return spl.Max(v);
   });
  },
  get_Before:function()
  {
   return this.changeSplitter(function(spl)
   {
    return spl.get_Before();
   });
  },
  changeSplitter:function(f)
  {
   var $this,o;
   $this=this;
   o=this.lastSplitter;
   o==null?void 0:(function(pos,col)
   {
    var m,m$1;
    if(col)
     {
      m=Arrays.get($this.cols,pos);
      m.$==2?Arrays.set($this.cols,pos,{
       $:2,
       $0:f(m.$0)
      }):void 0;
     }
    else
     {
      m$1=Arrays.get($this.rows,pos);
      m$1.$==2?Arrays.set($this.rows,pos,{
       $:2,
       $0:f(m$1.$0)
      }):void 0;
     }
   }).apply(null,o.$0);
   return this;
  },
  Gap:function(f)
  {
   return Grid.New(this.padding,f,this.content,this.cols,this.rows,this.widthHeight,this.lastSplitter);
  },
  Padding:function(f)
  {
   return Grid.New(f,this.gap,this.content,this.cols,this.rows,this.widthHeight,this.lastSplitter);
  },
  Content:function(html)
  {
   return Grid.New(this.padding,this.gap,this.content.concat([[null,html]]),this.cols,this.rows,this.widthHeight,this.lastSplitter);
  },
  Content$1:function(area,html)
  {
   return Grid.New(this.padding,this.gap,this.content.concat([[{
    $:1,
    $0:area
   },html]]),this.cols,this.rows,this.widthHeight,this.lastSplitter);
  },
  RowAuto:function(f)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols,this.rows.concat([{
    $:0,
    $0:SplitterBar.New$1(f).Horizontal()
   }]),this.widthHeight,this.lastSplitter);
  },
  RowVariable:function(f)
  {
   return this.NewSplitter$1(f,false);
  },
  RowVariable$1:function(f)
  {
   return this.NewSplitter(f,false);
  },
  RowVariable$2:function(s)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols,this.rows.concat([{
    $:2,
    $0:s
   }]),this.widthHeight,this.lastSplitter);
  },
  RowFixed:function(f)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols,this.rows.concat([{
    $:1,
    $0:{
     $:0,
     $0:Val.fixit(f)
    }
   }]),this.widthHeight,this.lastSplitter);
  },
  RowFixedPx:function(f)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols,this.rows.concat([{
    $:1,
    $0:{
     $:1,
     $0:Val.fixit(f)
    }
   }]),this.widthHeight,this.lastSplitter);
  },
  ColAuto:function(f)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols.concat([{
    $:0,
    $0:SplitterBar.New$1(f)
   }]),this.rows,this.widthHeight,this.lastSplitter);
  },
  ColVariable:function(f)
  {
   return this.NewSplitter$1(f,true);
  },
  ColVariable$1:function(f)
  {
   return this.NewSplitter(f,true);
  },
  ColVariable$2:function(s)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols.concat([{
    $:2,
    $0:s
   }]),this.rows,this.widthHeight,this.lastSplitter);
  },
  ColFixed:function(f)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols.concat([{
    $:1,
    $0:{
     $:0,
     $0:Val.fixit(f)
    }
   }]),this.rows,this.widthHeight,this.lastSplitter);
  },
  ColFixedPx:function(f)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols.concat([{
    $:1,
    $0:{
     $:1,
     $0:Val.fixit(f)
    }
   }]),this.rows,this.widthHeight,this.lastSplitter);
  },
  NewSplitter:function(f,col)
  {
   return this.NewSplitter$1(Var.Create$1(f),col);
  },
  NewSplitter$1:function(f,col)
  {
   var spl,l,l$1;
   spl=SplitterBar.New$2(f);
   return col?(l={
    $:1,
    $0:[Arrays.length(this.cols),col]
   },Grid.New(this.padding,this.gap,this.content,this.cols.concat([{
    $:2,
    $0:spl
   }]),this.rows,this.widthHeight,l)):(l$1={
    $:1,
    $0:[Arrays.length(this.rows),col]
   },Grid.New(this.padding,this.gap,this.content,this.cols,this.rows.concat([{
    $:2,
    $0:spl.Horizontal()
   }]),this.widthHeight,l$1));
  }
 },null,Grid);
 Grid.NewBisect=function(first,secT,ver,per,ch1,ch2)
 {
  var p,sect,auto;
  p=ver?[secT.$==1?function(g)
  {
   return g.ColFixedPx(per);
  }:secT.$==2?function(g)
  {
   return g.ColFixed(per);
  }:function(g)
  {
   return g.ColVariable(per);
  },function(g)
  {
   return g.ColAuto(50);
  },function(g)
  {
   return g.Content(HtmlNode.style("grid-template-areas: 'one   two' "));
  }]:[secT.$==1?function(g)
  {
   return g.RowFixedPx(per);
  }:secT.$==2?function(g)
  {
   return g.RowFixed(per);
  }:function(g)
  {
   return g.RowVariable(per);
  },function(g)
  {
   return g.RowAuto(50);
  },function(g)
  {
   return g.Content(HtmlNode.style("grid-template-areas: 'one' 'two' "));
  }];
  sect=p[0];
  auto=p[1];
  return(first?function(x)
  {
   return auto(sect(x));
  }:function(x)
  {
   return sect(auto(x));
  })(p[2](Grid.get_New().Content$1("one",ch1).Content$1("two",ch2).Padding(0)));
 };
 Grid.get_New=function()
 {
  return Grid.New(9,9,[],[],[],Var.Create$1([1000,100]),null);
 };
 Grid.New=function(padding,gap,content,cols,rows,widthHeight,lastSplitter)
 {
  return new Grid({
   padding:padding,
   gap:gap,
   content:content,
   cols:cols,
   rows:rows,
   widthHeight:widthHeight,
   lastSplitter:lastSplitter
  });
 };
 TabStrip=Template.TabStrip=Runtime.Class({
  get_Render:function()
  {
   var $this,strip,g,content;
   $this=this;
   strip=HtmlNode.bindHElem(function(tabs)
   {
    return HtmlNode.div(List.ofSeq(Seq.delay(function()
    {
     return Seq.append([HtmlNode["class"]((((Runtime.Curried3(function($1,$2,$3)
     {
      return $1("tab-strip "+Utils.toSafe($2)+" "+Utils.toSafe($3));
     }))(Global.id))($this.top?"top":"bottom"))($this.horizontal?"horizontal":"vertical"))],Seq.delay(function()
     {
      return Seq.collect(function(m)
      {
       var i;
       i=m[0];
       return[Hoverable.get_New().Content(HtmlNode.div([HtmlNode.htmlText(m[1][1][0]),HtmlNode["class"](Val.map(function(sel)
       {
        return"tab"+(sel===i?" selected":"");
       },$this.selected)),HtmlNode.draggable("true"),new HtmlNode$1({
        $:7,
        $0:AttrModule.Handler("dragover",function()
        {
         return function(ev)
         {
          return ev.preventDefault();
         };
        })
       }),new HtmlNode$1({
        $:7,
        $0:AttrModule.Handler("drag",function()
        {
         return function()
         {
          (Template.draggedTab())[0]={
           $:1,
           $0:[$this,i]
          };
         };
        })
       }),new HtmlNode$1({
        $:7,
        $0:AttrModule.Handler("drop",function()
        {
         return function(ev)
         {
          ev.preventDefault();
          ev.stopPropagation();
          return $this.reorder(i);
         };
        })
       }),new HtmlNode$1({
        $:7,
        $0:AttrModule.Handler("click",function()
        {
         return function()
         {
          return $this.selected.set_RVal(i);
         };
        })
       })]))];
      },Seq.indexed(tabs));
     }));
    })));
   },this.tabs);
   Val.sink((g=this.id,function(p)
   {
    Template.setSelectedPanel(g,p);
   }),this.get_Selected());
   content=HtmlNode.bindHElem(function(tabs)
   {
    return HtmlNode.div(List.ofSeq(Seq.delay(function()
    {
     return Seq.append([HtmlNode["class"]("tab-children")],Seq.delay(function()
     {
      return Seq.append([HtmlNode.Id(Template.uid2s($this.id))],Seq.delay(function()
      {
       function m(uid,a)
       {
        return a[1].AddChildren([HtmlNode.style(Val.map(function(sels)
        {
         return Seq.contains(uid,Seq.map(function(t)
         {
          return t[1];
         },Map.ToSeq(sels)))?"":"display : none";
        },Template.selectedPanels())),HtmlNode.Id(Template.uid2s(uid))]);
       }
       return Seq.map(function($1)
       {
        return m($1[0],$1[1]);
       },tabs);
      }));
     }));
    })));
   },this.tabs);
   return HtmlNode.div([HtmlNode["class"]("tab-panel"),this.top?strip:HtmlNode$1.HtmlEmpty,HtmlNode.div([content,HtmlNode["class"]("tab-content")]),!this.top?strip:HtmlNode$1.HtmlEmpty,new HtmlNode$1({
    $:7,
    $0:AttrModule.Handler("dragover",function()
    {
     return function(ev)
     {
      return ev.preventDefault();
     };
    })
   }),new HtmlNode$1({
    $:7,
    $0:AttrModule.Handler("drop",function()
    {
     return function(ev)
     {
      ev.preventDefault();
      return $this.reorder(Arrays.length($this.tabs.RVal()));
     };
    })
   }),HtmlNode.css("\n    \n    .tab-panel {\n     overflow  : hidden   ;\n     display   : flex     ;\n     flex-flow : column   ;\n     background: lightgray;\n    }\n    .tab-content {\n     flex      : 1 1     ;\n     overflow  : auto    ;\n     position  : relative;\n    }\n    .tab-children {\n     height    : 100%    ;\n     width     : 100%    ;\n     position  : absolute;\n     display   : grid    ;\n    }\n    .tab-strip {\n     padding   : 0pt     ;\n     flex      : 0 0     ;\n    }\n    .tab {\n     border     : 0.2pt solid transparent;\n     padding    : 0pt 4pt;\n     display    : inline-block;\n     font-family: sans-serif;\n     font-weight: 200;\n     font-size  : small;\n     color      : #666;\n     cursor     : pointer;\n    }\n    .top>.tab {\n     border-radius: 2pt 2pt 0pt 0pt;\n     border-bottom-width: 0pt;\n     vertical-align: bottom;\n    }\n    .bottom>.tab {\n     border-top-width: 0pt;\n     border-radius: 0pt 0pt 2pt 2pt;\n     vertical-align: top;\n    }\n    .horizontal>.tab:not(:first-child) {\n     border-left-width: 0pt;\n    }\n    .tab.hovering {\n     background: red;\n    }\n    .tab.selected {\n     background: white;\n     border-left-width: 0.2pt;\n     color: black;\n     font-weight: 500;\n     border-color: black;\n    }\n    .horizontal>.tab.selected {\n     border-left-width: 0.2pt;\n    }\n    ")]);
  },
  Select:function(gi)
  {
   var $this,o;
   function c(i,a)
   {
    return Unchecked.Equals(a[0],gi)?($this.selected.set_RVal(i),{
     $:1,
     $0:true
    }):null;
   }
   $this=this;
   o=Seq.tryPick(function($1)
   {
    return c($1[0],$1[1]);
   },Seq.indexed(this.tabs.RVal()));
   return o==null?false:o.$0;
  },
  Select$1:function(nm)
  {
   var $this,o;
   function c(i,a)
   {
    return a[1][0]===nm?($this.selected.set_RVal(i),{
     $:1,
     $0:true
    }):null;
   }
   $this=this;
   o=Seq.tryPick(function($1)
   {
    return c($1[0],$1[1]);
   },Seq.indexed(this.tabs.RVal()));
   return o==null?false:o.$0;
  },
  Select$2:function(n)
  {
   this.selected.set_RVal(n);
  },
  get_Selected:function()
  {
   return Val.map2(function(tabs)
   {
    return function(sel)
    {
     var o;
     o=Seq.tryItem(sel,tabs);
     return o==null?null:{
      $:1,
      $0:o.$0[0]
     };
    };
   },this.tabs,this.selected);
  },
  get_Vertical:function()
  {
   return TabStrip.New(this.selected,this.tabs,this.top,false,this.id);
  },
  get_Horizontal:function()
  {
   return TabStrip.New(this.selected,this.tabs,this.top,true,this.id);
  },
  SetTop:function(t)
  {
   return TabStrip.New(this.selected,this.tabs,t,this.horizontal,this.id);
  },
  get_Bottom:function()
  {
   return TabStrip.New(this.selected,this.tabs,false,this.horizontal,this.id);
  },
  get_Top:function()
  {
   return TabStrip.New(this.selected,this.tabs,true,this.horizontal,this.id);
  },
  reorder:function(drop)
  {
   var drag,sel,m;
   m=(Template.draggedTab())[0];
   if(m!=null&&m.$==1)
   {
    if(!Unchecked.Equals(m.$0[0].id,this.id))
     this.moveTab(m.$0[0],m.$0[1],drop);
    else
     if(m!=null&&m.$==1)
      {
       drag=m.$0[1];
       {
        this.tabs.set_RVal(Template.reorderArray(this.tabs.RVal(),drag,drop));
        sel=this.selected.RVal();
        this.selected.set_RVal(sel===drag?drop:sel<drag&&sel<drop||sel>drag&&sel>drop?sel:sel<drag?sel+1:sel-1);
       }
      }
     else
      throw new MatchFailureException.New("Compiled\\FSharpStation2\\FSharpStation.fs",3369,18);
   }
   else
    void 0;
  },
  moveTab:function(from,drag,drop)
  {
   var ts,ft,newTabsT,newTabsF;
   ts=this.tabs.RVal();
   ft=from.tabs.RVal();
   newTabsT=Arrays.collect(Global.id,[Slice.array(ts,{
    $:1,
    $0:0
   },{
    $:1,
    $0:drop-1
   }),[Arrays.get(ft,drag)],Slice.array(ts,{
    $:1,
    $0:drop
   },{
    $:1,
    $0:Arrays.length(ts)-1
   })]);
   newTabsF=Arrays.collect(Global.id,[Slice.array(ft,{
    $:1,
    $0:0
   },{
    $:1,
    $0:drag-1
   }),Slice.array(ft,{
    $:1,
    $0:drag+1
   },{
    $:1,
    $0:Arrays.length(ft)-1
   })]);
   from.tabs.set_RVal(newTabsF);
   this.tabs.set_RVal(newTabsT);
   this.selected.set_RVal(drop);
   from.selected.RVal()>=Arrays.length(newTabsF)?from.selected.set_RVal(0):void 0;
   Template.RaiseTabMoved(from,this);
  }
 },null,TabStrip);
 TabStrip.New$1=function(tabs)
 {
  return TabStrip.New$2(Var.Create$1(Arrays.ofSeq(Seq.map(function(def)
  {
   return[Guid.NewGuid(),def];
  },tabs))));
 };
 TabStrip.New$2=function(tabs)
 {
  return TabStrip.New(Var.Create$1(0),tabs,false,true,Guid.NewGuid());
 };
 TabStrip.New=function(selected,tabs,top,horizontal,id)
 {
  return new TabStrip({
   selected:selected,
   tabs:tabs,
   top:top,
   horizontal:horizontal,
   id:id
  });
 };
 MenuEntry=Template.MenuEntry=Runtime.Class({
  get_MenuNode:function()
  {
   return new MenuNode({
    $:1,
    $0:this
   });
  },
  SubMenu:function(es)
  {
   return MenuEntry.New(this.text,this.ref,this.active,this.disabled,{
    $:1,
    $0:Menu.New2(es).get_DropDown()
   },this.toolTip,this.target,this.divider,this.onClick);
  },
  SubMenu$1:function(es)
  {
   return MenuEntry.New(this.text,this.ref,this.active,this.disabled,{
    $:1,
    $0:Menu.New$1(es).get_DropDown()
   },this.toolTip,this.target,this.divider,this.onClick);
  },
  Disabled:function(dis)
  {
   return MenuEntry.New(this.text,this.ref,this.active,Val.fixit(dis),this.subMenu,this.toolTip,this.target,this.divider,this.onClick);
  },
  OnClick:function(f)
  {
   return MenuEntry.New(this.text,this.ref,this.active,this.disabled,this.subMenu,this.toolTip,this.target,this.divider,{
    $:1,
    $0:f
   });
  },
  get_Divider:function()
  {
   return MenuEntry.New(this.text,this.ref,this.active,this.disabled,this.subMenu,this.toolTip,this.target,true,this.onClick);
  },
  Target:function(t)
  {
   return MenuEntry.New(this.text,this.ref,this.active,this.disabled,this.subMenu,this.toolTip,{
    $:1,
    $0:t
   },this.divider,this.onClick);
  },
  get_Render:function()
  {
   var x,x$1,x$2,x$3,o,m,a,m$1,a$1;
   return(this.divider?function(h)
   {
    return HtmlNode.addClass("divider",h);
   }:Global.id)((x=(x$1=(x$2=(x$3=Template.entryTxt(this.text,(o=this.target,o==null?"":o.$0),this.ref),(HtmlNode.addClassIf("active",this.active))(x$3)),(HtmlNode.addClassIf("disabled",this.disabled))(x$2)),(m=this.subMenu,(m!=null&&m.$==1?(a=List.ofArray([HtmlNode["class"]("dropdown"),m.$0.get_Render()]),function(h)
   {
    return HtmlNode.addChildren(a,h);
   }):Global.id)(x$1))),(m$1=this.onClick,(m$1!=null&&m$1.$==1?(a$1=List.ofArray([new HtmlNode$1({
    $:7,
    $0:AttrProxy.Handler("click",m$1.$0)
   }),HtmlNode.style("cursor : pointer")]),function(h)
   {
    return HtmlNode.addChildren(a$1,h);
   }):Global.id)(x))));
  }
 },null,MenuEntry);
 MenuEntry.New$1=function(txt,ref)
 {
  var i;
  i=MenuEntry.New$2(txt);
  return MenuEntry.New(i.text,Val.map(function(a)
  {
   return{
    $:1,
    $0:a
   };
  },ref),i.active,i.disabled,i.subMenu,i.toolTip,i.target,i.divider,i.onClick);
 };
 MenuEntry.New$2=function(txt)
 {
  return MenuEntry.New(Val.fixit(txt),new Val({
   $:0,
   $0:null
  }),Val.fixit(false),Val.fixit(false),null,null,null,false,null);
 };
 MenuEntry.New=function(text,ref,active,disabled,subMenu,toolTip,target,divider,onClick)
 {
  return new MenuEntry({
   text:text,
   ref:ref,
   active:active,
   disabled:disabled,
   subMenu:subMenu,
   toolTip:toolTip,
   target:target,
   divider:divider,
   onClick:onClick
  });
 };
 MenuNode=Template.MenuNode=Runtime.Class({
  get_Render:function()
  {
   return this.$==1?this.$0.get_Render():this.$0;
  }
 },null,MenuNode);
 Menu=Template.Menu=Runtime.Class({
  get_Render:function()
  {
   var $this;
   $this=this;
   return(this.dropdown?Template.dropdown:Template.nav)(List.ofSeq(Seq.delay(function()
   {
    return Seq.map(function(entry)
    {
     return entry.get_Render();
    },$this.entries);
   })));
  },
  get_DropDown:function()
  {
   return Menu.New(this.entries,true);
  }
 },null,Menu);
 Menu.New2=function(es)
 {
  return Menu.New$1(Seq.map(function(a)
  {
   return new MenuNode({
    $:1,
    $0:a
   });
  },es));
 };
 Menu.New$1=function(es)
 {
  return Menu.New(es,false);
 };
 Menu.New=function(entries,dropdown)
 {
  return new Menu({
   entries:entries,
   dropdown:dropdown
  });
 };
 Action=Template.Action=Runtime.Class({
  get_Button:function()
  {
   var o,o$1,o$2;
   function v(a,a$1)
   {
    return null;
   }
   o=(o$1=(o$2=this.onClick,o$2==null?null:{
    $:1,
    $0:o$2.$0(this)
   }),o$1==null?function($1)
   {
    return function($2)
    {
     return v($1,$2);
    };
   }:o$1.$0);
   return Button.New(Val.map(function(h)
   {
    return h?"btn btn-primary":"btn";
   },this.highlight),Val.fixit("button"),Val.fixit(""),this.text,o,this.disabled,"");
  },
  get_MenuEntry:function()
  {
   var o;
   return MenuEntry.New(this.text,new Val({
    $:0,
    $0:null
   }),this.highlight,this.disabled,null,this.toolTip,null,false,(o=this.onClick,o==null?null:{
    $:1,
    $0:o.$0(this)
   }));
  },
  Highlight:function(h)
  {
   return Action.New(this.text,Val.fixit(h),this.disabled,this.toolTip,this.onClick,this.parms);
  },
  Disabled:function(dis)
  {
   return Action.New(this.text,this.highlight,Val.fixit(dis),this.toolTip,this.onClick,this.parms);
  },
  OnClick2:function(f)
  {
   return Action.New(this.text,this.highlight,this.disabled,this.toolTip,{
    $:1,
    $0:f
   },this.parms);
  },
  OnClick:function(f)
  {
   return Action.New(this.text,this.highlight,this.disabled,this.toolTip,{
    $:1,
    $0:function()
    {
     return f;
    }
   },this.parms);
  },
  Parms:function(ps)
  {
   return Action.New(this.text,this.highlight,this.disabled,this.toolTip,this.onClick,{
    $:1,
    $0:ps
   });
  },
  Text:function(txt)
  {
   return Action.New(Val.fixit(txt),this.highlight,Val.fixit(false),this.toolTip,this.onClick,this.parms);
  }
 },null,Action);
 Action.New$1=function(txt)
 {
  return Action.New(Val.fixit(txt),Val.fixit(false),Val.fixit(false),null,null,null);
 };
 Action.New=function(text,highlight,disabled,toolTip,onClick,parms)
 {
  return new Action({
   text:text,
   highlight:highlight,
   disabled:disabled,
   toolTip:toolTip,
   onClick:onClick,
   parms:parms
  });
 };
 GuiPart=Template.GuiPart=Runtime.Class({
  GetHtmlNode:function(lyt,name)
  {
   var ts,per,minV,maxV,perV,curper;
   return this.$==1?[this.$0,Global.ignore]:this.$==2?[this.$0.get_Button().get_Render(),Global.ignore]:this.$==5?[lyt.GetCallButton(this.$0,this.$1,this.$2),Global.ignore]:this.$==4?(ts=TabStrip.New$1(Seq.map(function(node)
   {
    return[node,lyt.GetNode(node)];
   },this.$1)).SetTop(this.$0),(Template.addValue(name,ts,lyt.tabStrips),[ts.get_Render(),Global.ignore])):this.$==3?(per=this.$3,(minV=Var.Create$1(this.$6),(maxV=Var.Create$1(this.$7),(perV=Var.Create$1(per),(curper=per,[Grid.NewBisect(this.$0,this.$1,this.$2,perV,lyt.GetNode(this.$4),lyt.GetNode(this.$5)).Min(minV).Max(maxV).get_Render(),function(a)
   {
    var per$1;
    if(a.$==3)
     {
      per$1=a.$3;
      curper!==per$1?(curper=per$1,Var.Set(perV,per$1)):void 0;
      Var.Set(minV,a.$6);
      Var.Set(maxV,a.$7);
     }
   }]))))):[HtmlNode$1.HtmlEmpty,Global.ignore];
  }
 },null,GuiPart);
 HtmlNodeFable.New=function(HtmlElementF,HtmlAttributeF,HtmlAttributeOF,HtmlTextF,HtmlEmptyF,HtmlGuiPart,HtmlGuiCall)
 {
  return{
   HtmlElementF:HtmlElementF,
   HtmlAttributeF:HtmlAttributeF,
   HtmlAttributeOF:HtmlAttributeOF,
   HtmlTextF:HtmlTextF,
   HtmlEmptyF:HtmlEmptyF,
   HtmlGuiPart:HtmlGuiPart,
   HtmlGuiCall:HtmlGuiCall
  };
 };
 LayoutDescriptionFable.New=function(GuiRoot,GuiTabStrip,GuiSplit,GuiNode,GuiCall)
 {
  return{
   GuiRoot:GuiRoot,
   GuiTabStrip:GuiTabStrip,
   GuiSplit:GuiSplit,
   GuiNode:GuiNode,
   GuiCall:GuiCall
  };
 };
 GuiPartSourceId.get_New=function()
 {
  return{
   $:0,
   $0:Guid.NewGuid()
  };
 };
 Layout=Template.Layout=Runtime.Class({
  SelectTab:function(tName)
  {
   Seq.iter(function(ts)
   {
    ts.Select$1(tName);
   },this.tabStrips.get_Values());
  },
  SetLayoutJson:function(steps,json)
  {
   var $1,$this;
   function jsonF2HtmlNode(a)
   {
    var a$1,a$2,a$3,a$4,$2,a$5,a$6;
    a$1=Template.PHtmlElementF(a);
    return a$1!=null&&a$1.$==1?{
     $:1,
     $0:new HtmlNode$1({
      $:0,
      $0:a$1.$0[0],
      $1:Seq.choose(jsonF2HtmlNode,a$1.$0[1])
     })
    }:(a$2=Template.PHtmlAttributeF(a),a$2!=null&&a$2.$==1?{
     $:1,
     $0:new HtmlNode$1({
      $:1,
      $0:a$2.$0[0],
      $1:new Val({
       $:0,
       $0:a$2.$0[1]
      })
     })
    }:(a$3=Template.PHtmlAttributeOF(a),a$3!=null&&a$3.$==1?{
     $:1,
     $0:new HtmlNode$1({
      $:2,
      $0:a$3.$0[0],
      $1:new Val({
       $:0,
       $0:a$3.$0[1]
      })
     })
    }:(a$4=Template.PHtmlTextF(a),a$4!=null&&a$4.$==1?{
     $:1,
     $0:new HtmlNode$1({
      $:3,
      $0:new Val({
       $:0,
       $0:a$4.$0
      })
     })
    }:($2=Template.PHtmlEmptyF(a),$2!=null&&$2.$==1)?{
     $:1,
     $0:HtmlNode$1.HtmlEmpty
    }:(a$5=Template.PHtmlGuiPart(a),a$5!=null&&a$5.$==1?{
     $:1,
     $0:$this.GetNode(a$5.$0)
    }:(a$6=Template.PHtmlGuiCall(a),a$6!=null&&a$6.$==1?{
     $:1,
     $0:$this.GetCallButton(a$6.$0[0],a$6.$0[1],a$6.$0[2])
    }:null)))));
   }
   function jsonF2GuiRoot(a)
   {
    var a$1,a$2,a$3,t,a$4,a$5;
    a$1=Template.PGuiNode(a);
    return a$1!=null&&a$1.$==1?{
     $:1,
     $0:new GuiPart({
      $:1,
      $0:Option.defaultValue(HtmlNode$1.HtmlEmpty,jsonF2HtmlNode(a$1.$0))
     })
    }:(a$2=Template.PGuiRoot(a),a$2!=null&&a$2.$==1?{
     $:1,
     $0:new GuiPart({
      $:0,
      $0:a$2.$0
     })
    }:(a$3=Template.PGuiTabStrip(a),a$3!=null&&a$3.$==1?{
     $:1,
     $0:(t=a$3.$0,new GuiPart({
      $:4,
      $0:t[0],
      $1:t[1]
     }))
    }:(a$4=Template.PGuiSplit(a),a$4!=null&&a$4.$==1?{
     $:1,
     $0:new GuiPart({
      $:3,
      $0:a$4.$0[0],
      $1:Template.toSect(a$4.$0[1]),
      $2:a$4.$0[2],
      $3:a$4.$0[3],
      $4:a$4.$0[4],
      $5:a$4.$0[5],
      $6:a$4.$0[6],
      $7:a$4.$0[7]
     })
    }:(a$5=Template.PGuiCall(a),a$5!=null&&a$5.$==1?{
     $:1,
     $0:new GuiPart({
      $:5,
      $0:a$5.$0[0],
      $1:a$5.$0[1],
      $2:a$5.$0[2]
     })
    }:null))));
   }
   $this=this;
   try
   {
    function c(name,ldf)
    {
     var o;
     o=jsonF2GuiRoot(ldf);
     return o==null?null:{
      $:1,
      $0:[name,{
       $:1,
       $0:ldf
      },o.$0]
     };
    }
    $1=this.AddNewSteps(steps,json===""?[]:Arrays.choose(function($2)
    {
     return c($2[0],$2[1]);
    },((Provider.DecodeArray(Provider.DecodeTuple([Provider.Id(),FSharpStation_JsonDecoder.j$7])))())(JSON.parse(json))));
   }
   catch(e)
   {
    $1=(function($2)
    {
     return function($3)
     {
      return $2("Error: "+Utils.prettyPrint($3));
     };
    }(function(s)
    {
     console.log(s);
    }))(e);
   }
  },
  AddNewSteps:function(steps,steps2)
  {
   var $this;
   function a(name,si,part)
   {
    var p,partv;
    if($this.parts.ContainsKey(name))
     {
      p=$this.parts.get_Item(name);
      partv=p[0];
      Unchecked.Equals((partv.RVal())[0],si)?Val.iter(Global.ignore,Val.apply(new Val({
       $:0,
       $0:part
      }),p[2])):partv.set_RVal([si,part]);
     }
    else
     $this.AddNode(name,si,part);
   }
   function m(name,det)
   {
    return Seq.last(det);
   }
   $this=this;
   Arrays.iter(function($1)
   {
    return a($1[0],$1[1],$1[2]);
   },Arrays.map(function($1)
   {
    return m($1[0],$1[1]);
   },Arrays.groupBy(function($1)
   {
    return Global.id($1[0],$1[1],$1[2]);
   },steps.concat(steps2))));
  },
  get_Render:function()
  {
   function g(v)
   {
    var m;
    m=v.RVal();
    return m[1].$==0?{
     $:1,
     $0:m[1].$0
    }:null;
   }
   return this.GetNode(Option.defaultValue("main",Seq.tryPick(function(x)
   {
    return g(Template.t1of3.apply(null,x));
   },this.parts.get_Values())));
  },
  GetNode:function(name)
  {
   var res;
   res=null;
   return this.parts.TryGetValue(name,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?Template.t2of3(res[0],res[1],res[2]):this.AddNode(name,GuiPartSourceId.get_New(),new GuiPart({
    $:1,
    $0:HtmlNode.div([HtmlNode.htmlText((function($1)
    {
     return function($2)
     {
      return $1("GuiPart "+Utils.toSafe($2)+" not found");
     };
    }(Global.id))(name))])
   }));
  },
  AddNode:function(name,sid,part)
  {
   var $this,partV,nodeFv,node;
   function f(si,p)
   {
    return p.GetHtmlNode($this,name);
   }
   $this=this;
   partV=Var.Create$1([sid,part]);
   nodeFv=Val.map(function($1)
   {
    return f($1[0],$1[1]);
   },partV);
   node=new HtmlNode$1({
    $:5,
    $0:Val.map(function(t)
    {
     return t[0];
    },nodeFv)
   });
   this.parts.Add(name,[partV,node,Val.map(function(t)
   {
    return t[1];
   },nodeFv)]);
   return node;
  },
  GetCallButton:function(name,action,parms)
  {
   var a;
   a=Result.Success(this.GetGuiCallAction(name,action,parms));
   return a.$==1?HtmlNode.div([HtmlNode.htmlText(Strings.concat(". ",Result.msgs2String(a.$0)))]):a.$0[0].get_Button().get_Render();
  },
  GetGuiCallAction:function(name,action,parms)
  {
   var m;
   return this.parts.ContainsKey(action)?(m=(this.parts.get_Item(action))[0].RVal(),m[1].$==2?Result.succeed(m[1].$0.Text(name).Parms(Arrays.map(Global.id,parms))):Result.failSimpleError((function($1)
   {
    return function($2)
    {
     return $1("GuiPart "+Utils.toSafe($2)+" is not a GuiAction");
    };
   }(Global.id))(action))):Result.failSimpleError((function($1)
   {
    return function($2)
    {
     return $1("GuiAction "+Utils.toSafe($2)+" not found");
    };
   }(Global.id))(action));
  }
 },null,Layout);
 Layout.New$1=function(steps)
 {
  var lyt;
  function a(name,part,id)
  {
   lyt.AddNode(name,part,id);
  }
  lyt=Layout.New(new Dictionary.New$5(),new Dictionary.New$5());
  Seq.iter(function($1)
  {
   return a($1[0],$1[1],$1[2]);
  },steps);
  return lyt;
 };
 Layout.AddGuids=function(steps)
 {
  function m(name,part)
  {
   return[name,part.$==2?GuiPartSourceId.get_New():part.$==0?{
    $:2,
    $0:part.$0
   }:part.$==3?{
    $:4,
    $0:part.$0,
    $1:part.$1,
    $2:part.$2,
    $3:part.$4,
    $4:part.$5
   }:part.$==4?{
    $:3,
    $0:part.$0,
    $1:part.$1
   }:part.$==5?{
    $:5,
    $0:part.$0,
    $1:part.$1,
    $2:part.$2
   }:GuiPartSourceId.get_New(),part];
  }
  return Arrays.ofSeq(Seq.map(function($1)
  {
   return m($1[0],$1[1]);
  },steps));
 };
 Layout.New=function(parts,tabStrips)
 {
  return new Layout({
   parts:parts,
   tabStrips:tabStrips
  });
 };
 Template.varVerSplitter=function(pc,ch1,ch2,min,max)
 {
  return new GuiPart({
   $:3,
   $0:true,
   $1:SectionType.StVariable,
   $2:true,
   $3:pc,
   $4:ch1,
   $5:ch2,
   $6:min,
   $7:max
  });
 };
 Template.varHorSplitter=function(pc,ch1,ch2,min,max)
 {
  return new GuiPart({
   $:3,
   $0:true,
   $1:SectionType.StVariable,
   $2:false,
   $3:pc,
   $4:ch1,
   $5:ch2,
   $6:min,
   $7:max
  });
 };
 Template.fixedVerSplitter=function(first,px,ch1,ch2)
 {
  return new GuiPart({
   $:3,
   $0:first,
   $1:SectionType.StFixedPx,
   $2:true,
   $3:px,
   $4:ch1,
   $5:ch2,
   $6:5,
   $7:95
  });
 };
 Template.fixedHorSplitter=function(first,px,ch1,ch2)
 {
  return new GuiPart({
   $:3,
   $0:first,
   $1:SectionType.StFixedPx,
   $2:false,
   $3:px,
   $4:ch1,
   $5:ch2,
   $6:5,
   $7:95
  });
 };
 Template.t3of3=function(a,a$1,a$2)
 {
  return a$2;
 };
 Template.t2of3=function(a,a$1,a$2)
 {
  return a$1;
 };
 Template.t1of3=Global.id;
 Template.toSect=function(s)
 {
  return s==="StVariable"?SectionType.StVariable:s==="StFixedPx"?SectionType.StFixedPx:SectionType.StFixedPerc;
 };
 Template.PGuiCall=function(ldf)
 {
  return ldf.GuiCall;
 };
 Template.PGuiNode=function(ldf)
 {
  return ldf.GuiNode;
 };
 Template.PGuiRoot=function(ldf)
 {
  return ldf.GuiRoot;
 };
 Template.PGuiSplit=function(ldf)
 {
  return ldf.GuiSplit;
 };
 Template.PGuiTabStrip=function(ldf)
 {
  return ldf.GuiTabStrip;
 };
 Template.PHtmlGuiCall=function(hnf)
 {
  return hnf.HtmlGuiCall;
 };
 Template.PHtmlGuiPart=function(hnf)
 {
  return hnf.HtmlGuiPart;
 };
 Template.PHtmlEmptyF=function(hnf)
 {
  return hnf.HtmlEmptyF;
 };
 Template.PHtmlTextF=function(hnf)
 {
  return hnf.HtmlTextF;
 };
 Template.PHtmlAttributeOF=function(hnf)
 {
  return hnf.HtmlAttributeOF;
 };
 Template.PHtmlAttributeF=function(hnf)
 {
  return hnf.HtmlAttributeF;
 };
 Template.PHtmlElementF=function(hnf)
 {
  return hnf.HtmlElementF;
 };
 Template.addValue=function(k,v,dict)
 {
  dict.Remove(k);
  dict.Add(k,v);
 };
 Template.processLayoutSteps=function(steps,parts)
 {
  var o;
  return Option.defaultValue(parts,(o=Seq.tryHead(steps),o==null?null:{
   $:1,
   $0:Template.processLayoutSteps(Seq.skip(1,steps),parts.Add(o.$0[0],o.$0[1]))
  }));
 };
 Template.HtmlGuiCall=function(p,p$1,p$2)
 {
  return new GuiPart({
   $:5,
   $0:p,
   $1:p$1,
   $2:p$2
  });
 };
 Template.Do2=function(f,p,act,a,a$1)
 {
  return f(act,p);
 };
 Template.Do=function(f,p,a,a$1)
 {
  return f(p);
 };
 Template.navbar=function(brand,center,right)
 {
  return HtmlNode.div([HtmlNode["class"]("navbar navbar-default"),HtmlNode.div([HtmlNode["class"]("container-fluid"),HtmlNode.div([HtmlNode["class"]("navbar-header"),HtmlNode.div([HtmlNode["class"]("navbar-brand"),brand])]),HtmlNode.div([HtmlNode["class"]("navbar-collapse collapse"),center,HtmlNode.addClass("navbar-right",right)])])]);
 };
 Template.dropdown=function(ch)
 {
  return Template.entries(ch,"dropdown-menu");
 };
 Template.nav=function(ch)
 {
  return Template.entries(ch,"nav navbar-nav");
 };
 Template.entries=function(ch,cl)
 {
  return HtmlNode.addClass(cl,HtmlNode.ul(ch));
 };
 Template.entryTxt=function(txt,t,r)
 {
  return Template.menuEntry(Template.refText(txt,t,r));
 };
 Template.refText=function(txt,t,r)
 {
  return HtmlNode.bindHElem(function(t$1)
  {
   return t$1===""?HtmlNode$1.HtmlEmpty:Template.refA(HtmlNode.htmlText(t$1),t$1,r);
  },txt);
 };
 Template.refA=function(cont,t,r)
 {
  return HtmlNode.a([cont,HtmlNode.hrefO(r),HtmlNode.target(t)]);
 };
 Template.menuEntry=function(content)
 {
  return HtmlNode.li([content]);
 };
 Template.RaiseTabMoved=function(fromS,toS)
 {
  var o;
  o=Template.TabMoved();
  o==null?void 0:o.$0([fromS,toS]);
 };
 Template.TabMoved=function()
 {
  SC$1.$cctor();
  return SC$1.TabMoved;
 };
 Template.set_TabMoved=function($1)
 {
  SC$1.$cctor();
  SC$1.TabMoved=$1;
 };
 Template.setSelectedPanel=function(group,panelO)
 {
  Var.Set(Template.selectedPanels(),panelO==null?Template.selectedPanels().c.Remove(group):Template.selectedPanels().c.Add(group,panelO.$0));
 };
 Template.selectedPanels=function()
 {
  SC$1.$cctor();
  return SC$1.selectedPanels;
 };
 Template.uid2s=function(uid)
 {
  return"X"+Strings.Replace(Global.String(uid),"-","");
 };
 Template.draggedTab=function()
 {
  SC$1.$cctor();
  return SC$1.draggedTab;
 };
 Template.reorderArray=function(ts,drag,drop)
 {
  return Arrays.collect(Global.id,drop<drag?[Slice.array(ts,{
   $:1,
   $0:0
  },{
   $:1,
   $0:drop-1
  }),[Arrays.get(ts,drag)],Slice.array(ts,{
   $:1,
   $0:drop
  },{
   $:1,
   $0:drag-1
  }),Slice.array(ts,{
   $:1,
   $0:drag+1
  },{
   $:1,
   $0:Arrays.length(ts)-1
  })]:[Slice.array(ts,{
   $:1,
   $0:0
  },{
   $:1,
   $0:drag-1
  }),Slice.array(ts,{
   $:1,
   $0:drag+1
  },{
   $:1,
   $0:drop
  }),[Arrays.get(ts,drag)],Slice.array(ts,{
   $:1,
   $0:drop+1
  },{
   $:1,
   $0:Arrays.length(ts)-1
  })]);
 };
 Template.reorderList=function(ts,drag,drop)
 {
  return drop<drag?List.append(ts.GetSlice({
   $:1,
   $0:0
  },{
   $:1,
   $0:drop-1
  }),List.append(List.ofArray([ts.get_Item(drag)]),List.append(ts.GetSlice({
   $:1,
   $0:drop
  },{
   $:1,
   $0:drag-1
  }),ts.GetSlice({
   $:1,
   $0:drag+1
  },{
   $:1,
   $0:ts.get_Length()-1
  })))):List.append(ts.GetSlice({
   $:1,
   $0:0
  },{
   $:1,
   $0:drag-1
  }),List.append(ts.GetSlice({
   $:1,
   $0:drag+1
  },{
   $:1,
   $0:drop
  }),List.append(List.ofArray([ts.get_Item(drag)]),ts.GetSlice({
   $:1,
   $0:drop+1
  },{
   $:1,
   $0:ts.get_Length()-1
  }))));
 };
 Template.addResizeObserver=function(f,el)
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
    Template.set_observers(new List.T({
     $:1,
     $0:ro,
     $1:Template.observers()
    }));
    ro.observe(el);
   }
  else
   {
    changed=Template.dimsChanged(el);
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
 Template.dimsChanged=function(el)
 {
  var dims;
  dims=el.getBoundingClientRect();
  return function()
  {
   var ndims;
   ndims=el.getBoundingClientRect();
   return Unchecked.Equals(Template.domRect2Tuple(dims),Template.domRect2Tuple(ndims))?false:(dims=ndims,true);
  };
 };
 Template.domRect2Tuple=function(r)
 {
  return[r.top,r.left,r.width,r.height];
 };
 Template.observers=function()
 {
  SC$1.$cctor();
  return SC$1.observers;
 };
 Template.set_observers=function($1)
 {
  SC$1.$cctor();
  SC$1.observers=$1;
 };
 Template.setLint=function(ed,getAnnotations)
 {
  ed.setOption("lint",{
   async:1,
   getAnnotations:Runtime.CreateFuncWithArgs(getAnnotations),
   container:HtmlNode.findRootElement(ed.getWrapperElement())
  });
 };
 Template.showHints=function(ed,getHints,completeSingle,a)
 {
  var v;
  v=HintOptions.New(Runtime.CreateFuncWithArgs(getHints),completeSingle,HtmlNode.findRootElement(ed.getWrapperElement()));
  v.hint.async=1;
  ed.showHint(v);
 };
 Template.cmPos=function(l,c)
 {
  return CodeMirrorPos.New(l,c);
 };
 Template.codeMirrorIncludes=function()
 {
  SC$1.$cctor();
  return SC$1.codeMirrorIncludes;
 };
 Template.hoverable=function(c)
 {
  return Hoverable.get_New().Content(c);
 };
 RunNode=RunCode.RunNode=Runtime.Class({
  createBaseNode:function()
  {
   var el;
   el=Global.document.createElement("div");
   el.setAttribute("id",this.nodeName);
   Global.document.body.appendChild(el);
   return el;
  },
  createNode:function()
  {
   var e;
   e=Global.document.createElement("div");
   e.style="height: 100%; width: 100%;";
   return e;
  },
  RunHtml:function(node)
  {
   this.RunDoc((HtmlNode.renderDoc())(node));
  },
  RunDoc:function(doc)
  {
   Doc.Run(this.get_RunNode(),doc);
  },
  get_AddBootstrap:function()
  {
   var el;
   el=Global.document.createElement("div");
   el.innerHTML="<script src='http://code.jquery.com/jquery-3.1.1.min.js' type='text/javascript' charset='UTF-8'></script>\n                <script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' type='text/javascript' charset='UTF-8'></script>\n                <link type='text/css' rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>\n                <link type='text/css' rel='stylesheet' href='/EPFileX/css/main.css'>\n               ";
   this.runNode.parentElement.appendChild(el);
   return this;
  },
  get_RunNode:function()
  {
   return this.runNode;
  }
 },WebSharper.Obj,RunNode);
 RunNode.New=Runtime.Ctor(function(clearNode)
 {
  RunNode.New$1.call(this,"TestNode",clearNode);
 },RunNode);
 RunNode.New$1=Runtime.Ctor(function(nodeName,clearNode)
 {
  var baseNode,m,m$1,p,e;
  this.nodeName=nodeName;
  baseNode=(m=Global.document.getElementById(this.nodeName),Unchecked.Equals(m,null)?this.createBaseNode():m);
  this.runNode=(m$1=baseNode.shadowRoot,Unchecked.Equals(m$1,null)?(p=this.createNode(),(baseNode.attachShadow({
   mode:"open"
  }).appendChild(p),e=this.createNode(),p.appendChild(e),e)):m$1.firstChild);
  clearNode==null||clearNode.$0?this.runNode.innerHTML="":void 0;
 },RunNode);
 RunCode.completeJS=function(js)
 {
  return"\n          CIPHERSpaceLoadFileGlobalFileRef = null;\n          CIPHERSpaceLoadFile = function (filename, callback) {\n              if (filename.slice(-3) == \".js\" || filename.slice(-4) == \".fsx\" || filename.slice(-3) == \".fs\") { //if filename is a external JavaScript file\n                  var fileRef = null;\n                  var pre = document.querySelector('script[src=\"' + filename + '\"]')\n                  if (!pre) {\n                      fileRef = document.createElement('script')\n                      fileRef.setAttribute(\"type\", \"text/javascript\")\n                      fileRef.setAttribute(\"src\", filename)\n                  }\n                  else callback();\n              }\n              else if (filename.slice(-4) == \".css\") { //if filename is an external CSS file\n                  var pre = document.querySelector('script[src=\"' + filename + '\"]')\n                  if (!pre) {\n                      fileRef = document.createElement(\"link\")\n                      fileRef.setAttribute(\"rel\", \"stylesheet\")\n                      fileRef.setAttribute(\"type\", \"text/css\")\n                      fileRef.setAttribute(\"href\", filename)\n                  }\n                  else callback();\n              }\n              else if (filename.slice(-5) == \".html\") { //if filename is an external HTML file\n                  var pre = document.querySelector('script[src=\"' + filename + '\"]')\n                  if (!pre) {\n                      fileRef = document.createElement(\"link\")\n                      fileRef.setAttribute(\"rel\", \"import\")\n                      fileRef.setAttribute(\"type\", \"text/html\")\n                      fileRef.setAttribute(\"href\", filename)\n                  }\n                  else callback();\n              }\n              if (!!fileRef) {\n                  CIPHERSpaceLoadFileGlobalFileRef = fileRef;\n      \u0009\u0009\u0009fileRef.onload = function () { fileRef.onload = null;  callback(); }\n                  document.getElementsByTagName(\"head\")[0].appendChild(fileRef);\n              }\n          }\n          CIPHERSpaceLoadFiles = function (files, callback) {\n              var newCallback = callback\n              if (!!CIPHERSpaceLoadFileGlobalFileRef && !!(CIPHERSpaceLoadFileGlobalFileRef.onload)) {\n                  var oldCallback = CIPHERSpaceLoadFileGlobalFileRef.onload;\n                  CIPHERSpaceLoadFileGlobalFileRef.onload = null;\n                  newCallback = function () {\n                      callback();\n                      oldCallback();\n                  }\n              }\n              var i = 0;\n              loadNext = function () {\n                  if (i < files.length) {\n                      var file = files[i];\n                      i++;\n                      CIPHERSpaceLoadFile(file, loadNext);\n                  }\n                  else newCallback();\n              };\n              loadNext();\n      \u0009}\n          CIPHERSpaceLoadFiles(['https://code.jquery.com/jquery-3.1.1.min.js'], function() {}); \n      \u0009CIPHERSpaceLoadFilesDoAfter = function (callback) {\n      \u0009\u0009var newCallback = callback\n      \u0009\u0009if (!!CIPHERSpaceLoadFileGlobalFileRef) {\n      \u0009\u0009\u0009if (!!(CIPHERSpaceLoadFileGlobalFileRef.onload)) {\n      \u0009\u0009\u0009\u0009var oldCallback = CIPHERSpaceLoadFileGlobalFileRef.onload;\n      \u0009\u0009\u0009\u0009CIPHERSpaceLoadFileGlobalFileRef.onload = null;\n      \u0009\u0009\u0009\u0009newCallback = function () {\n      \u0009\u0009\u0009\u0009\u0009oldCallback();\n      \u0009\u0009\u0009\u0009\u0009callback();\n      \u0009\u0009\u0009\u0009}\n      \u0009\u0009\u0009}\n      \u0009\u0009}\n      \u0009\u0009else CIPHERSpaceLoadFileGlobalFileRef = {};\n      \u0009\u0009CIPHERSpaceLoadFileGlobalFileRef.onload = newCallback;\n      \u0009}\n      \n      CIPHERSpaceLoadFilesDoAfter(function() { \n        if (typeof IntelliFactory !=='undefined')\n          IntelliFactory.Runtime.Start();\n        for (key in window) { \n          if (key.startsWith(\"StartupCode$\")) \n            try { window[key].$cctor(); } catch (e) {} \n        } \n      })\n      \n                       "+js;
 };
 Position.NewBrowser={
  $:3
 };
 Position.Tab={
  $:2
 };
 Position.Right={
  $:1
 };
 Position.Below={
  $:0
 };
 ErrCompiler=FsGlobal.ErrCompiler=Runtime.Class({
  FSSGlobal_Useful_ErrMsg$get_IsWarning:function()
  {
   return this.$==0&&!this.$1;
  },
  FSSGlobal_Useful_ErrMsg$get_ErrMsg:function()
  {
   return this.$==0?(function($1)
   {
    return function($2)
    {
     return $1(Utils.toSafe($2));
    };
   }(Global.id))(this.$0):(function($1)
   {
    return function($2)
    {
     return $1(FSharpStation_GeneratedPrintf.p$2($2));
    };
   }(Global.id))(this);
  }
 },null,ErrCompiler);
 ErrCompiler["Could not open new browser, Popup blocker may be active"]=new ErrCompiler({
  $:2
 });
 ErrCompiler["Snippet Missing"]=new ErrCompiler({
  $:1
 });
 KeyMapAutoComplete.New=function(F2,LeftDoubleClick,_CtrlSpace,_)
 {
  return{
   F2:F2,
   LeftDoubleClick:LeftDoubleClick,
   "Ctrl-Space":_CtrlSpace,
   ".":_
  };
 };
 Property=FsGlobal.Property=Runtime.Class({
  setV:function(v)
  {
   this.props.set_Item(this.key,v);
   this.setDirty();
  },
  getV:function()
  {
   return this.props.get_Item(this.key);
  },
  setK:function(k)
  {
   this.props.Add(k,this.props.get_Item(this.key));
   this.props.Remove(this.key);
   this.key=k;
   this.setDirty();
  },
  getK:function()
  {
   return this.key;
  },
  Remove:function()
  {
   this.props.Remove(this.key);
   this.setDirty();
  },
  get_SetV:function()
  {
   var $this;
   $this=this;
   return function(v)
   {
    $this.setV(v);
   };
  },
  get_GetV:function()
  {
   var $this;
   $this=this;
   return function()
   {
    return $this.getV();
   };
  },
  get_SetK:function()
  {
   var $this;
   $this=this;
   return function(k)
   {
    $this.setK(k);
   };
  },
  get_GetK:function()
  {
   var $this;
   $this=this;
   return function()
   {
    return $this.getK();
   };
  },
  get_ValueVar:function()
  {
   return new PropValue.New(this);
  },
  get_KeyVar:function()
  {
   return this;
  },
  RView:function()
  {
   return View.Const(this.getK());
  },
  RUpdM:function(f)
  {
   var o;
   o=f(this.getK());
   o==null?void 0:this.setK(o.$0);
  },
  RUpd:function(f)
  {
   this.setK(f(this.getK()));
  },
  RVal:function()
  {
   return this.getK();
  },
  RGet:function()
  {
   return this.getK();
  },
  set_RVal:function(v)
  {
   this.setK(v);
  },
  RSet:function(v)
  {
   this.setK(v);
  },
  RId:function()
  {
   return"?";
  }
 },WebSharper.Obj,Property);
 Property.New=Runtime.Ctor(function(setDirty,props,keyP)
 {
  this.setDirty=setDirty;
  this.props=props;
  this.key=keyP;
 },Property);
 PropValue=FsGlobal.PropValue=Runtime.Class({
  RView:function()
  {
   return View.Const(this.get());
  },
  RUpdM:function(f)
  {
   var o;
   o=f(this.get());
   o==null?void 0:this.set(o.$0);
  },
  RUpd:function(f)
  {
   this.set(f(this.get()));
  },
  RVal:function()
  {
   return this.get();
  },
  RGet:function()
  {
   return this.get();
  },
  set_RVal:function(v)
  {
   this.set(v);
  },
  RSet:function(v)
  {
   this.set(v);
  },
  RId:function()
  {
   return"?";
  }
 },WebSharper.Obj,PropValue);
 PropValue.New=Runtime.Ctor(function(prop)
 {
  this.get=prop.get_GetV();
  this.set=prop.get_SetV();
 },PropValue);
 FsGlobal["CodeSnippet.propValue"]=function(_this,p)
 {
  var o,o$1;
  return _this.properties.ContainsKey(p)?{
   $:1,
   $0:_this.properties.get_Item(p)
  }:(o=(o$1=_this.parent,o$1==null?null:CodeSnippet$1.FetchO(o$1.$0)),o==null?null:FsGlobal["CodeSnippet.propValue"](o.$0,p));
 };
 CodeSnippet$1.FetchByPathO=function(names)
 {
  function tryFindByName(snps,name)
  {
   return Seq.tryHead(Seq.filter(function(snp)
   {
    return snp.get_Name()===name;
   },snps));
  }
  function tryFindByPath(snps,names$1)
  {
   var first,x,f,x$1;
   first=(x=Seq.tryHead(names$1),x==null?null:tryFindByName(snps,x.$0));
   return Seq.length(names$1)<=1?first:first==null?null:(f=first.$0,(x$1=Seq.tail(names$1),tryFindByPath(Seq.filter(function(snp)
   {
    return Unchecked.Equals(snp.parent,{
     $:1,
     $0:f.id
    });
   },(FsGlobal.codeSnippets())["var"].RVal()),x$1)));
  }
  return tryFindByPath(Seq.filter(function(snp)
  {
   return snp.parent==null;
  },(FsGlobal.codeSnippets())["var"].RVal()),names);
 };
 FsGlobal["CodeSnippet.IsDescendantOf"]=function(_this,antId)
 {
  function isDescendantOf(snp)
  {
   var m,parId,o;
   m=snp.parent;
   return m!=null&&m.$==1&&(parId=m.$0,Unchecked.Equals(parId,antId)||Option.defaultValue(false,(o=CodeSnippet$1.FetchO(parId),o==null?null:{
    $:1,
    $0:isDescendantOf(o.$0)
   })));
  }
  return isDescendantOf(_this);
 };
 FsGlobal["CodeSnippet.GetCodeFsx"]=function(_this,addLinePrepos)
 {
  return(FsGlobal["CodeSnippet.GetCodeAndStarts"](_this,addLinePrepos))[0];
 };
 FsGlobal["CodeSnippet.GetCodeAndStarts"]=function(_this,addLinePrepos)
 {
  return CodeSnippet.CodeAndStarts(addLinePrepos,FsGlobal["CodeSnippet.Predecessors"](_this));
 };
 FsGlobal["CodeSnippet.Predecessors"]=function(_this,u)
 {
  var preds;
  preds=Arrays.ofSeq(_this.UniquePredecessors(CodeSnippet$1.FetchO));
  return Arrays.ofSeq(Seq.map(FsGlobal["CodeSnippet.get_PrepareSnippet"],Seq.filter(function(snp)
  {
   return Arrays.contains(snp.id,preds);
  },(FsGlobal.codeSnippets())["var"].RVal())));
 };
 FsGlobal["CodeSnippet.get_PrepareSnippet"]=function(_this,u)
 {
  var p;
  p=FsGlobal["CodeSnippet.get_Levels"](_this);
  return CodeSnippet.New(_this.name,Strings.Replace(Strings.Replace(_this.content,"##"+"FSHARPSTATION_ID"+"##",FsGlobal.fsIds()),"##"+"FSHARPSTATION_ENDPOINT"+"##",Global.location.href),_this.parent,_this.predecessors,_this.id,_this.expanded,p[0],p[1],_this.properties);
 };
 FsGlobal["CodeSnippet.get_Levels"]=function(_this,u)
 {
  function levels(out,out2)
  {
   return function(snp)
   {
    var x,o,m;
    return Option.defaultValue([out,out2],(x=(o=snp.parent,o==null?null:CodeSnippet$1.FetchO(o.$0)),(m=levels(out+1,out2+(snp.properties.ContainsKey("NoIndent")?0:1)),x==null?null:{
     $:1,
     $0:m(x.$0)
    })));
   };
  }
  return(function($1)
  {
   return levels($1[0],$1[1]);
  }([0,0]))(_this);
 };
 CodeSnippet$1.New=function(od,nm,pa,pred,co,cnt)
 {
  var newS,$1,a,a$1,t;
  newS=CodeSnippet.New(nm,cnt,pa,pred,CodeSnippetId.get_New(),true,0,0,new Dictionary.New$5());
  $1=FsGlobal.codeSnippets().get_Length();
  $1===0?FsGlobal.codeSnippets().Append(newS):od===0?(a=Seq.append([newS],(FsGlobal.codeSnippets())["var"].RVal()),FsGlobal.codeSnippets().Set(a)):od<$1?(a$1=(t=Arrays.splitAt(od,Arrays.ofSeq((FsGlobal.codeSnippets())["var"].RVal())),t[0].concat([newS].concat(t[1]))),FsGlobal.codeSnippets().Set(a$1)):FsGlobal.codeSnippets().Append(newS);
  return newS;
 };
 CodeSnippet$1.New$1=function(nm,pa,pred,co,cnt)
 {
  return CodeSnippet$1.New(FsGlobal.codeSnippets().get_Length(),nm,pa,pred,co,cnt);
 };
 CodeSnippet$1.New$2=function(cnt)
 {
  return CodeSnippet$1.New$1("",null,List.T.Empty,List.T.Empty,cnt);
 };
 CodeSnippet$1.New$3=function(pa,cnt)
 {
  return CodeSnippet$1.New$1("",{
   $:1,
   $0:pa
  },List.T.Empty,List.T.Empty,cnt);
 };
 CodeSnippet$1.New$4=function(pa,pred,cnt)
 {
  return CodeSnippet$1.New$1("",{
   $:1,
   $0:pa
  },pred,List.T.Empty,cnt);
 };
 CodeSnippet$1.New$5=function(pred,cnt)
 {
  return CodeSnippet$1.New$1("",null,pred,List.T.Empty,cnt);
 };
 CodeSnippet$1.FetchL=function(id)
 {
  return Option$1.toList(CodeSnippet$1.FetchO(id));
 };
 CodeSnippet$1.FetchO=function(id)
 {
  return FsGlobal.codeSnippets().TryFindByKey(id);
 };
 CodeSnippet$1.PickIO=function(id)
 {
  function f(a,snp)
  {
   return Unchecked.Equals(snp.id,id);
  }
  return FsGlobal.tryPickI(function($1)
  {
   return f($1[0],$1[1]);
  },(FsGlobal.codeSnippets())["var"].RVal());
 };
 FsGlobal.tryPickI=function(f,s)
 {
  return Seq.tryHead(Seq.filter(f,Seq.indexed(s)));
 };
 FsGlobal.fsIds=function()
 {
  SC$1.$cctor();
  return SC$1.fsIds;
 };
 FsGlobal.codeSnippets=function()
 {
  SC$1.$cctor();
  return SC$1.codeSnippets;
 };
 Babel=FableModule.Babel=Runtime.Class({},WebSharper.Obj,Babel);
 Babel.New=Runtime.Ctor(function()
 {
 },Babel);
 Fable=FableModule.Fable=Runtime.Class({},WebSharper.Obj,Fable);
 Fable.New=Runtime.Ctor(function()
 {
 },Fable);
 FableModule.fableTranslate=function(source)
 {
  var b;
  b=Wrap.wrapper();
  return b.Delay(function()
  {
   var b$1;
   FableModule.loadReferences().f();
   return b.Bind$2((b$1=null,Concurrency.Delay(function()
   {
    return Concurrency.While(function()
    {
     return Object.getOwnPropertyNames(Global.metadata).length<Arrays.length(FableModule.references());
    },Concurrency.Delay(function()
    {
     return Concurrency.Bind(Concurrency.Sleep(200),function()
     {
      return Concurrency.Return(null);
     });
    }));
   })),function()
   {
    var checker,com,fileName,ast,options;
    checker=FableModule.getChecker().f();
    com=Fable$1.makeCompiler([["Microsoft.FSharp.Core.ExtraTopLevelOperators.PrintFormatLine","FSSGlobal.FSharpStation.FableModule.ToConsole($0)"]]);
    fileName="stdin.fsx";
    ast=JSON.parse(Fable$1.convertToJson(Fable$1.compileAst(com,Fable$1.parseFSharpProject(checker,com,fileName,source),fileName)));
    options=Object.create(null);
    options.plugins=[Global.babelPlugins.transformMacroExpressions,Global.babelPlugins.removeUnneededNulls,"transform-es2015-modules-amd"];
    options.presets=[];
    options.filename=fileName;
    options.babelrc=false;
    return b.Return(Strings.Replace(Strings.Replace(Babel$1.transformFromAst(ast,null,options).code,"define([","require(["),"\"use strict\";","\"use strict\"; try { exports = exports || {}; } catch (err) {}"));
   });
  });
 };
 FableModule.ToConsole=function(arg)
 {
  console.log(arg);
  return arg.cont(FableModule.addOutMsg());
 };
 FableModule.addOutMsg=function()
 {
  SC$1.$cctor();
  return SC$1.addOutMsg;
 };
 FableModule.set_addOutMsg=function($1)
 {
  SC$1.$cctor();
  SC$1.addOutMsg=$1;
 };
 FableModule.getChecker=function()
 {
  SC$1.$cctor();
  return SC$1.getChecker;
 };
 FableModule.loadReferences=function()
 {
  SC$1.$cctor();
  return SC$1.loadReferences;
 };
 FableModule.references=function()
 {
  SC$1.$cctor();
  return SC$1.references;
 };
 FSharpStation.FSharpStationClient=function(loadFromUri)
 {
  var missingVar,currentCodeSnippetId,s,v,refresh,currentCodeSnippetO,position,s$1,v$1,noSelectionVal,propertyCssVal,v$2,f,g,prior,propertyCssLinkVal,v$3,f$1,g$1,prior$1,propertyModeVal,v$4,f$2,g$2,prior$2,propertyThemeVal,v$5,f$3,g$3,prior$3,propertyLayoutVal,v$6,f$4,g$4,prior$4,propertyLayoutJSVal,v$7,f$5,g$5,prior$5,disableParseVal,disableFSIVal,disableFableVal,disableWebSharperVal,lastCodeAndStarts,getPredecessorsM,codeFS,codeJS,parserMsgs,outputMsgs,parsed,dirty,draggedId,compileRunW,$1,curPredecessors,topScrollList,fileName,fileInputElementId,loadFileElement,b,autoCompleteClient,parseFile,isParseDisabled,parseRun,parsing,rex1,rex2,rex,asyncStartDelayed,codeMirror,view,contentVar,changingIRefO,contentVarChanged,refVarChanged,codeMirrorRender,redraw,properties,triggerWSResult,actLoadFile,actSaveFile,actAddSnippet,actDeleteSnippet,actIndentSnippet,actOutdentSnippet,actGetFsCode,actSetSnippetProp,actEvalFsCode,actEvalCode,actFableFsCode,actFableCode,actRunWSNewTab,$2,actRunWSHere,$3,actRunWSIn,actParseCode,actCompileWS,$4,actFindDefinition,actRefreshEditor,actOutText,buttonsH,menuLeft,menuRight,menuBar,s$2,v$8,v$9,snippetList,x,steps,view$1,contentVar$1,changingIRefO$1,contentVarChanged$1,refVarChanged$1,layout,fsStationClient,b$1,cssLinks,x$1;
  function missing(def,find,lens,k)
  {
   return find(k)==null?Var.Lens(missingVar,function()
   {
    return def;
   },function()
   {
    return"";
   }):lens(k);
  }
  function refreshView()
  {
   Var.Set(refresh,null);
  }
  function curSnippetNameOf(k)
  {
   function a(s$3)
   {
    return s$3.get_Name();
   }
   function a$1(s$3,n)
   {
    return CodeSnippet.New(n,s$3.content,s$3.parent,s$3.predecessors,s$3.id,s$3.expanded,s$3.level,s$3.levelCode,s$3.properties);
   }
   return missing("",function(a$2)
   {
    return FsGlobal.codeSnippets().TryFindByKey(a$2);
   },function(a$2)
   {
    return FsGlobal.codeSnippets().LensInto(a,a$1,a$2);
   },k);
  }
  function curSnippetCodeOf(k)
  {
   function a(s$3)
   {
    return s$3.content;
   }
   function a$1(s$3,n)
   {
    return CodeSnippet.New(s$3.name,n,s$3.parent,s$3.predecessors,s$3.id,s$3.expanded,s$3.level,s$3.levelCode,s$3.properties);
   }
   return missing("",function(a$2)
   {
    return FsGlobal.codeSnippets().TryFindByKey(a$2);
   },function(a$2)
   {
    return FsGlobal.codeSnippets().LensInto(a,a$1,a$2);
   },k);
  }
  function b$2(snp)
  {
   var o;
   o=FsGlobal["CodeSnippet.propValue"](snp,"CSS");
   return o==null?null:{
    $:1,
    $0:Global.id(o.$0)
   };
  }
  function g$6(a)
  {
   return Option.defaultValue("",a);
  }
  function b$3(snp)
  {
   var o;
   o=FsGlobal["CodeSnippet.propValue"](snp,"CSSLink");
   return o==null?null:{
    $:1,
    $0:Global.id(o.$0)
   };
  }
  function g$7(a)
  {
   return Option.defaultValue("",a);
  }
  function b$4(snp)
  {
   var o;
   o=FsGlobal["CodeSnippet.propValue"](snp,"Mode");
   return o==null?null:{
    $:1,
    $0:Global.id(o.$0)
   };
  }
  function g$8(a)
  {
   return Option.defaultValue("fsharp",a);
  }
  function b$5(snp)
  {
   var o;
   o=FsGlobal["CodeSnippet.propValue"](snp,"Theme");
   return o==null?null:{
    $:1,
    $0:Global.id(o.$0)
   };
  }
  function g$9(a)
  {
   return Option.defaultValue("",a);
  }
  function b$6(snp)
  {
   var o;
   o=FsGlobal["CodeSnippet.propValue"](snp,"Layout");
   return o==null?null:{
    $:1,
    $0:Global.id(o.$0)
   };
  }
  function g$10(a)
  {
   return Option.defaultValue("",a);
  }
  function b$7(snp)
  {
   var o;
   o=FsGlobal["CodeSnippet.propValue"](snp,"LayoutJS");
   return o==null?null:{
    $:1,
    $0:Global.id(o.$0)
   };
  }
  function g$11(a)
  {
   return Option.defaultValue("",a);
  }
  function disablePropertyVal(p)
  {
   var v$10,f$8,g$13,prior$6;
   function b$8(snp)
   {
    var o;
    o=FsGlobal["CodeSnippet.propValue"](snp,p);
    return o==null?null:{
     $:1,
     $0:Global.id(o.$0)
    };
   }
   function g$14(a)
   {
    return Option.defaultValue("",a);
   }
   v$10=Val.map((f$8=(g$13=function(o)
   {
    return o==null?null:b$8(o.$0);
   },function(x$2)
   {
    return g$13(CodeSnippet$1.FetchO(x$2));
   }),function(x$2)
   {
    return g$14(f$8(x$2));
   }),currentCodeSnippetId);
   prior$6=[Var.Create$1(null)];
   View.Sink(function(v$11)
   {
    if(!Unchecked.Equals(prior$6[0].c,v$11))
     Var.Set(prior$6[0],v$11);
   },Val.toView(v$10));
   return new Val({
    $:1,
    $0:prior$6[0]
   });
  }
  function disableEval(parse,ev)
  {
   return ev===""?parse:ev!=="0";
  }
  function setDirtyPart()
  {
   parsed=false;
   Var.Set(dirty,true);
  }
  function setDirty()
  {
   lastCodeAndStarts=null;
   setDirtyPart();
  }
  function setDirtyPred()
  {
   setDirty();
   getPredecessorsM.ClearCache();
   refreshView();
  }
  function setClean()
  {
   getPredecessorsM.ClearCache();
   Var.Set(dirty,false);
   lastCodeAndStarts=null;
  }
  function appendMsg(_var,msg)
  {
   var newM,$7,$8;
   return!msg?null:(newM=($7=_var.RVal(),($8=Global.String(msg),$7===null?$8:$7===""?$8:$8===null?$7:$8===""?$7:$7+"\n"+$8)),newM!==_var.RVal()?_var.set_RVal(newM):null);
  }
  function setOutMsg(msg)
  {
   Var.Set(outputMsgs,msg);
  }
  function addOutMsg(msg)
  {
   appendMsg(outputMsgs,msg);
  }
  function addPrsMsg(msg)
  {
   appendMsg(parserMsgs,msg);
  }
  function getFSCode()
  {
   var o;
   o=CodeSnippet$1.FetchO(currentCodeSnippetId.c);
   o==null?void 0:Var.Set(codeFS,FsGlobal["CodeSnippet.GetCodeFsx"](o.$0,true));
  }
  function reorderSnippet(toId,fromId)
  {
   var p,others,moving,$7,$8,ti,tsn,a;
   function trySnippet(id)
   {
    function f$8(a$1,snp)
    {
     return Unchecked.Equals(snp.id,id);
    }
    return function(s$3)
    {
     return FsGlobal.tryPickI(function($9)
     {
      return f$8($9[0],$9[1]);
     },s$3);
    };
   }
   p=Arrays.partition(function(snp)
   {
    return Unchecked.Equals(snp.id,fromId)||FsGlobal["CodeSnippet.IsDescendantOf"](snp,fromId);
   },Arrays.ofSeq((FsGlobal.codeSnippets())["var"].RVal()));
   others=p[1];
   moving=p[0];
   $7=(trySnippet(fromId))(moving);
   $8=(trySnippet(toId))(others);
   $7!=null&&$7.$==1?$8!=null&&$8.$==1?(ti=$8.$0[0],tsn=$8.$0[1],a=Arrays.collect(Global.id,[Slice.array(others,{
    $:1,
    $0:0
   },{
    $:1,
    $0:ti-1
   }),moving,Slice.array(others,{
    $:1,
    $0:ti
   },null)]),FsGlobal.codeSnippets().Set(a),FsGlobal.codeSnippets().UpdateBy(function(c)
   {
    return{
     $:1,
     $0:CodeSnippet.New(c.name,c.content,tsn.parent,c.predecessors,c.id,c.expanded,c.level,c.levelCode,c.properties)
    };
   },$7.$0[1].id)):void 0:void 0;
   return setDirtyPred();
  }
  function indentCodeIn()
  {
   var o;
   o=CodeSnippet$1.PickIO(currentCodeSnippetId.c);
   o==null?void 0:(function(j,snp)
   {
    (function(f$8,i)
    {
     var x$2;
     while(true)
      {
       if(i<0)
        return null;
       else
        if(f$8((x$2=(FsGlobal.codeSnippets())["var"].RVal(),(function(i$1)
        {
         return function(s$3)
         {
          return Seq.nth(i$1,s$3);
         };
        }(i))(x$2))))
         return null;
        else
         i=i-1;
      }
    }(function(pri)
    {
     return Unchecked.Equals(pri.parent,snp.parent)&&(FsGlobal.codeSnippets().UpdateBy(function(c)
     {
      return{
       $:1,
       $0:CodeSnippet.New(c.name,c.content,{
        $:1,
        $0:pri.id
       },c.predecessors,c.id,c.expanded,c.level,c.levelCode,c.properties)
      };
     },snp.id),true);
    },j-1));
    setDirtyPred();
   }).apply(null,o.$0);
  }
  function indentCodeOut()
  {
   var o,snp,newP,o$1,o$2;
   o=CodeSnippet$1.FetchO(currentCodeSnippetId.c);
   o==null?void 0:(snp=o.$0,newP=(o$1=(o$2=snp.parent,o$2==null?null:CodeSnippet$1.FetchO(o$2.$0)),o$1==null?null:o$1.$0.parent),FsGlobal.codeSnippets().UpdateBy(function(c)
   {
    return{
     $:1,
     $0:CodeSnippet.New(c.name,c.content,newP,c.predecessors,c.id,c.expanded,c.level,c.levelCode,c.properties)
    };
   },snp.id),setDirtyPred());
  }
  function compileSnippetW(snpO)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Delay(function()
   {
    return b$8.Bind$1(Result.fromOption(ErrCompiler["Snippet Missing"],snpO),function(a)
    {
     var code;
     Var.Set(outputMsgs,"Compiling to JavaScript...");
     Var.Set(codeJS,"");
     code=FsGlobal["CodeSnippet.GetCodeFsx"](a,true);
     Var.Set(codeFS,code);
     return b$8.Bind$2(FsTranslator.translateAR(code,false),function(a$1)
     {
      return b$8.Bind$1(a$1,function(a$2)
      {
       var jsc;
       jsc=RunCode.completeJS(a$2);
       Var.Set(codeJS,jsc);
       addOutMsg("Compiled!");
       return b$8.Return(jsc);
      });
     });
    });
   });
  }
  function newWindow(url)
  {
   var a;
   a=Global.open.apply(Global,[url]);
   return Unchecked.Equals(a,null)?Result.fail(ErrCompiler["Could not open new browser, Popup blocker may be active"]):Result.succeed(a);
  }
  function _eval(window$1,js)
  {
   try
   {
    return window$1["eval"].apply(window$1,[js]);
   }
   catch(e)
   {
    ((function($7)
    {
     return function($8)
     {
      return $7(Utils.prettyPrint($8));
     };
    }(function(s$3)
    {
     console.log(s$3);
    }))(e));
    return(function($7)
    {
     return function($8)
     {
      return $7(Utils.prettyPrint($8));
     };
    }(Global.id))(e);
   }
  }
  function focus(window$1)
  {
   try
   {
    window$1.focus.apply(window$1,[]);
   }
   catch(e)
   {
    ((function($7)
    {
     return function($8)
     {
      return $7(Utils.prettyPrint($8));
     };
    }(function(s$3)
    {
     console.log(s$3);
    }))(e));
   }
  }
  function evalWindowUrlJSW(url,js)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Delay(function()
   {
    return b$8.Bind$1(Result.tryProtection(),function()
    {
     return b$8.Bind$1(newWindow(url),function(a)
     {
      focus(a);
      return b$8.Bind$2(Concurrency.Sleep(800),function()
      {
       return b$8.Return(_eval(a,js));
      });
     });
    });
   });
  }
  function createIFrameA()
  {
   return Concurrency.FromContinuations(function(cb,errF)
   {
    try
    {
     return(new RunNode.New(null)).RunHtml(HtmlNode.createIFrame(cb));
    }
    catch(e)
    {
     return errF(e);
    }
   });
  }
  function evalIFrameJSW(js)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Delay(function()
   {
    return b$8.Bind$1(Result.tryProtection(),function()
    {
     return b$8.Bind$2(createIFrameA(),function(a)
     {
      var window$1;
      window$1=a.contentWindow;
      window$1.document.body.style.margin="0px";
      return b$8.Return(_eval(window$1,js));
     });
    });
   });
  }
  function compileRunUrlW(url,pos,snpO)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Delay(function()
   {
    return b$8.Bind$3(compileSnippetW(snpO),function(a)
    {
     Var.Set(outputMsgs,"Running JavaScript...");
     return b$8.Bind$3(pos.$==3?evalWindowUrlJSW(url,a):evalIFrameJSW(a),function(a$1)
     {
      addOutMsg(a$1);
      addOutMsg("Done!");
      return b$8.Return([pos,a$1]);
     });
    });
   });
  }
  function getSnpO()
  {
   return CodeSnippet$1.FetchO(currentCodeSnippetId.c);
  }
  function evalCodeW(code)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Delay(function()
   {
    Var.Set(codeFS,code);
    return b$8.Bind$2(FsEvaluator.evaluateAR(FsGlobal.fsIds(),Global.location.href,true,code),function(a)
    {
     return b$8.Bind$1(a,function()
     {
      return b$8.Return("");
     });
    });
   });
  }
  function evalSnippetW(snpO)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Delay(function()
   {
    return b$8.Bind$1(Result.fromOption(ErrCompiler["Snippet Missing"],snpO),function(a)
    {
     return b$8.Bind$3(evalCodeW(FsGlobal["CodeSnippet.GetCodeFsx"](a,true)),function(a$1)
     {
      return b$8.Bind$2((new AjaxRemotingProvider.New()).Async("FSharpStation:FSSGlobal.FsEvaluator+Evaluator.addPresence:-1250306105",[(function($7)
      {
       return function($8)
       {
        return $7(FSharpStation_GeneratedPrintf.p$3($8));
       };
      }(Global.id))(a.id),"ok"]),function()
      {
       return b$8.Return(a$1);
      });
     });
    });
   });
  }
  function doSomething(msgStart,msgFinish,doIt)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Delay(function()
   {
    Var.Set(outputMsgs,msgStart);
    return b$8.Bind$3(doIt(),function(a)
    {
     addOutMsg(a);
     addOutMsg(msgFinish);
     return b$8.Return(a);
    });
   });
  }
  function evaluateSnippetW(snpO)
  {
   return doSomething("Evaluating F# code...","",function()
   {
    return evalSnippetW(snpO);
   });
  }
  function evaluateCodeW(code)
  {
   return doSomething("Evaluating F# code...","",function()
   {
    return evalCodeW(code);
   });
  }
  function evalFableCodeW(code)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Delay(function()
   {
    Var.Set(codeFS,code);
    return b$8.Bind$3(FableModule.fableTranslate(code),function(a)
    {
     Var.Set(codeJS,a);
     Global["eval"](a);
     return b$8.Return("");
    });
   });
  }
  function evalFableSnippetW(snpO)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Delay(function()
   {
    return b$8.Bind$1(Result.fromOption(ErrCompiler["Snippet Missing"],snpO),function(a)
    {
     return b$8.ReturnFrom(evalFableCodeW(FsGlobal["CodeSnippet.GetCodeFsx"](a,false)));
    });
   });
  }
  function fableSnippetW(snpO)
  {
   return doSomething("Running Fable...","Done!",function()
   {
    return evalFableSnippetW(snpO);
   });
  }
  function fableCodeW(code)
  {
   return doSomething("Running Fable...","Done!",function()
   {
    return evalFableCodeW(code);
   });
  }
  function compileRunP(pos)
  {
   var x$2;
   x$2=getSnpO();
   return(compileRunW(pos))(x$2);
  }
  function isDirectPredecessor(pre,curO)
  {
   return Option.defaultValue(false,curO==null?null:{
    $:1,
    $0:List.contains(pre,curO.$0.predecessors)
   });
  }
  function isIndirectPredecessor(pre,predecessors)
  {
   return predecessors.Contains(pre);
  }
  function togglePredecessorForCur(pre,curO)
  {
   var cur,preds,p,x$2;
   return curO==null?null:(cur=curO.$0,Unchecked.Equals(cur,pre)||isIndirectPredecessor(cur.id,new HashSet.New$2(pre.UniquePredecessors(CodeSnippet$1.FetchO)))?null:(preds=(List.contains(pre.id,cur.predecessors)?(p=(x$2=pre.id,function(y)
   {
    return!Unchecked.Equals(x$2,y);
   }),function(l)
   {
    return List.filter(p,l);
   }):function(l)
   {
    return new List.T({
     $:1,
     $0:pre.id,
     $1:l
    });
   })(cur.predecessors),(FsGlobal.codeSnippets().UpdateBy(function(c)
   {
    return{
     $:1,
     $0:CodeSnippet.New(c.name,c.content,c.parent,preds,c.id,c.expanded,c.level,c.levelCode,c.properties)
    };
   },cur.id),setDirtyPred())));
  }
  function toggleExpanded(snp)
  {
   FsGlobal.codeSnippets().UpdateBy(function(c)
   {
    return{
     $:1,
     $0:CodeSnippet.New(c.name,c.content,c.parent,c.predecessors,c.id,!c.expanded,c.level,c.levelCode,c.properties)
    };
   },snp.id);
   refreshView();
  }
  function listEntry(isParent,isExpanded,code)
  {
   var x$2,$7,$8,x$3;
   return Hoverable.get_New().Content$1([HtmlNode["class"]("code-editor-list-tile"),HtmlNode.classIf("selected",Val.map((x$2=code.id,function(y)
   {
    return Unchecked.Equals(x$2,y);
   }),currentCodeSnippetId)),HtmlNode.classIf("direct-predecessor",Val.map(($7=code.id,function($9)
   {
    return isDirectPredecessor($7,$9);
   }),currentCodeSnippetO)),HtmlNode.classIf("indirect-predecessor",Val.map(($8=code.id,function($9)
   {
    return isIndirectPredecessor($8,$9);
   }),curPredecessors)),HtmlNode.draggable("true"),new HtmlNode$1({
    $:7,
    $0:AttrModule.Handler("dragover",function()
    {
     return function(ev)
     {
      return ev.preventDefault();
     };
    })
   }),new HtmlNode$1({
    $:7,
    $0:AttrModule.Handler("drag",function()
    {
     return function()
     {
      draggedId=code.id;
     };
    })
   }),new HtmlNode$1({
    $:7,
    $0:AttrModule.Handler("drop",function()
    {
     return function(ev)
     {
      ev.preventDefault();
      return reorderSnippet(code.id,draggedId);
     };
    })
   }),HtmlNode.span([HtmlNode["class"]("node"),HtmlNode.classIf("parent",isParent),HtmlNode.classIf("expanded",isExpanded),new HtmlNode$1({
    $:7,
    $0:AttrModule.Handler("click",function()
    {
     return function()
     {
      return isParent?toggleExpanded(code):null;
     };
    })
   }),HtmlNode.title(isParent?isExpanded?"collapse":"expand":""),HtmlNode.htmlText(isParent?isExpanded?"-":"+":"")]),HtmlNode.div([HtmlNode["class"]("code-editor-list-text"),HtmlNode.style1("text-indent",(x$3=(FsGlobal["CodeSnippet.get_Levels"](code))[0],(function($9)
   {
    return function($10)
    {
     return $9(Global.String($10)+"em");
    };
   }(Global.id))(x$3))),HtmlNode.style("white-space: pre"),HtmlNode.htmlText(Val.map2(function(n)
   {
    return function(c)
    {
     return FsStationShared.snippetName(n,c);
    };
   },curSnippetNameOf(code.id),curSnippetCodeOf(code.id))),new HtmlNode$1({
    $:7,
    $0:AttrModule.Handler("click",function()
    {
     return function()
     {
      return Var.Set(currentCodeSnippetId,code.id);
     };
    })
   })]),HtmlNode.span([HtmlNode["class"]("predecessor"),HtmlNode.title("toggle predecessor"),new HtmlNode$1({
    $:7,
    $0:AttrModule.Handler("click",function()
    {
     return function()
     {
      return Val.iter(function($9)
      {
       return togglePredecessorForCur(code,$9);
      },currentCodeSnippetO);
     };
    })
   }),HtmlNode.htmlText("X")])]);
  }
  function ifUndef(def,v$10)
  {
   return!v$10?def:v$10;
  }
  function obj2CodeSnippetId(o)
  {
   return new CodeSnippetId({
    $:0,
    $0:!o?"00000000-0000-0000-0000-000000000000":o.Item
   });
  }
  function obj2CodeSnippetIdO(o)
  {
   return!o?null:{
    $:1,
    $0:obj2CodeSnippetId(o)
   };
  }
  function obj2Map(o)
  {
   var dict;
   function a(a$1,a$2)
   {
    dict.Add(a$1,a$2);
   }
   function m(f$8,v$10)
   {
    return[f$8,v$10];
   }
   dict=new Dictionary.New$5();
   return!o?dict:(Seq.iter(function($7)
   {
    return a($7[0],$7[1]);
   },Arrays.map(function($7)
   {
    return m($7[0],$7[1]);
   },JSModule.GetFields(o))),dict);
  }
  function deserializeCodeSnipets(v$10)
  {
   var objs;
   try
   {
    objs=JSON.parse(v$10);
    ((function($7)
    {
     return function($8)
     {
      return $7(Utils.prettyPrint($8));
     };
    }(function(s$3)
    {
     console.log(s$3);
    }))(objs.length));
    return Arrays.choose(function(o)
    {
     return!o?null:{
      $:1,
      $0:CodeSnippet.New(ifUndef("",o.name),ifUndef("",o.content),obj2CodeSnippetIdO(o.parent),List.ofSeq(Arrays.map(obj2CodeSnippetId,ifUndef([],o.predecessors))),obj2CodeSnippetId(o.id),ifUndef(false,o.expanded),ifUndef(0,o.level),ifUndef(0,o.levelCode),obj2Map(o.properties))
     };
    },objs);
   }
   catch(m)
   {
    return[];
   }
  }
  function addCode()
  {
   var o,i,snp;
   function nextI(lvl,k)
   {
    var o$1;
    return Option.defaultValue(k,(o$1=Seq.tryItem(k,(FsGlobal.codeSnippets())["var"].RVal()),o$1==null?null:{
     $:1,
     $0:(FsGlobal["CodeSnippet.get_Levels"](o$1.$0))[0]<=lvl?k:nextI(lvl,k+1)
    }));
   }
   Var.Set(currentCodeSnippetId,Option.defaultWith(function()
   {
    return CodeSnippet$1.New$2("");
   },(o=CodeSnippet$1.PickIO(currentCodeSnippetId.c),o==null?null:{
    $:1,
    $0:(i=o.$0[0],(snp=o.$0[1],CodeSnippet$1.New(nextI((FsGlobal["CodeSnippet.get_Levels"](snp))[0],i+1),"",snp.parent,List.T.Empty,List.T.Empty,"")))
   })).id);
   setDirty();
   refreshView();
  }
  function deleteCode()
  {
   var o,snp;
   o=CodeSnippet$1.FetchO(currentCodeSnippetId.c);
   o==null?void 0:(snp=o.$0,Global.confirm((function($7)
   {
    return function($8)
    {
     return $7("Do you want to delete "+Utils.toSafe($8)+"?");
    };
   }(Global.id))(snp.get_Name()))?(Var.Set(currentCodeSnippetId,CodeSnippetId.get_New()),FsGlobal.codeSnippets().Remove(snp),setDirty(),refreshView()):void 0);
  }
  function justFileName(f$8)
  {
   return Seq.last(Strings.SplitChars(f$8,["/","\\"],0));
  }
  function loadTextFile(element,f$8)
  {
   var files,reader;
   files=element.files;
   return files.length>0?(reader=new Global.FileReader(),(reader.onload=function(e)
   {
    return f$8(e.target.result);
   },reader.readAsText(files.item(0)))):null;
  }
  function parseText(txt)
  {
   var a;
   try
   {
    a=deserializeCodeSnipets(txt);
    FsGlobal.codeSnippets().Set(a);
    setClean();
    refreshView();
   }
   catch(e)
   {
    Global.alert(Global.String(e));
   }
  }
  function loadFile(e)
  {
   if(!dirty.c||Global.confirm("Changes have not been saved, do you really want to load?"))
    loadTextFile(HtmlNode.findRootElement(e).querySelector("#"+fileInputElementId),parseText);
  }
  function downloadFile()
  {
   var x$2,m;
   Global.saveAs(new Global.Blob([(x$2=Arrays.ofSeq((FsGlobal.codeSnippets())["var"].RVal()),JSON.stringify(((Provider.EncodeArray(FSharpStation_JsonEncoder.j$3))())(x$2)))],{
    type:"text/plain;charset=utf-8"
   }),(m=justFileName(fileName.c),m===""?"snippets.fsjson":m));
   setClean();
  }
  function do_LoadFile(e,a)
  {
   return HtmlNode.findRootElement(e).querySelector("#"+fileInputElementId).click();
  }
  function getCodeAndStartsFast(msgF,snp,addLinePrepos)
  {
   var p,$7,alp,preds,red,cur,red1,t;
   p=lastCodeAndStarts!=null&&lastCodeAndStarts.$==1&&((alp=lastCodeAndStarts.$0[1],Unchecked.Equals(lastCodeAndStarts.$0[0],snp.id)&&Unchecked.Equals(alp,addLinePrepos))&&($7=[lastCodeAndStarts.$0[1],lastCodeAndStarts.$0[0],lastCodeAndStarts.$0[2]],true))?(msgF("Reparsing..."),[$7[2],FsGlobal["CodeSnippet.get_PrepareSnippet"](snp)]):(msgF("Parsing..."),preds=FsGlobal["CodeSnippet.Predecessors"](snp),red=CodeSnippet.ReducedCode(addLinePrepos,Slice.array(preds,{
    $:1,
    $0:0
   },{
    $:1,
    $0:Arrays.length(preds)-2
   })),cur=Arrays.get(preds,Arrays.length(preds)-1),lastCodeAndStarts={
    $:1,
    $0:[cur.id,addLinePrepos,red]
   },[red,cur]);
   red1=CodeSnippet.ReducedCode(addLinePrepos,[p[1]]);
   t=(function(t$1)
   {
    var a,a$1,a$2,a$3,a$4,a$5;
    a=t$1[0];
    a$1=t$1[1];
    a$2=t$1[2];
    a$3=t$1[3];
    a$4=t$1[4];
    a$5=t$1[5];
    return function(t$2)
    {
     return CodeSnippet.AddSeps(a,a$1,a$2,a$3,a$4,a$5,t$2[0],t$2[1],t$2[2],t$2[3],t$2[4],t$2[5]);
    };
   }(p[0]))(red1);
   return CodeSnippet.FinishCode(addLinePrepos,t[0],t[1],t[2],t[3],t[4],t[5]);
  }
  function parseFSA(silent)
  {
   var b$8;
   function msgF(txt)
   {
    if(!silent)
     Var.Set(parserMsgs,txt);
   }
   b$8=null;
   return Concurrency.Delay(function()
   {
    var m,cur,runN;
    m=CodeSnippet$1.FetchO(currentCodeSnippetId.c);
    return m!=null&&m.$==1?(cur=m.$0,(runN=parseRun+1,(parseRun=runN,Concurrency.Combine(Concurrency.While(function()
    {
     return parsing;
    },Concurrency.Delay(function()
    {
     return Concurrency.Bind(Concurrency.Sleep(1000),function()
     {
      return Concurrency.Return(null);
     });
    })),Concurrency.Delay(function()
    {
     return parseRun!==runN?Concurrency.Zero():Concurrency.TryFinally(Concurrency.Delay(function()
     {
      var p;
      parsing=true;
      parsed=true;
      p=getCodeAndStartsFast(msgF,cur,false);
      return Concurrency.Bind(autoCompleteClient.Parse$1(parseFile,p[0],p[1]),function(a)
      {
       return!silent&&runN===parseRun&&parsed?(addPrsMsg(a),addPrsMsg("Parsed!"),Concurrency.Zero()):Concurrency.Zero();
      });
     }),function()
     {
      parsing=false;
     });
    }))))):Concurrency.Zero();
   });
  }
  function mustParse(cur)
  {
   var b$8;
   b$8=null;
   return Concurrency.Delay(function()
   {
    return!parsed?Concurrency.Return(true):Concurrency.Bind(autoCompleteClient.MustParse(parseFile,cur.get_NameSanitized()),function(a)
    {
     return Concurrency.Return(a);
    });
   });
  }
  function parseIfMustThen(silent)
  {
   var b$8;
   b$8=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(isParseDisabled,function(a)
    {
     var m;
     return a?Concurrency.Zero():(m=CodeSnippet$1.FetchO(currentCodeSnippetId.c),m!=null&&m.$==1?Concurrency.Bind(mustParse(m.$0),function(a$1)
     {
      return a$1?Concurrency.Bind(parseFSA(silent),function()
      {
       return Concurrency.Return(null);
      }):Concurrency.Zero();
     }):Concurrency.Zero());
    });
   });
  }
  function getStartWord(line,ch)
  {
   var a,t;
   a=Useful.REGEX("([a-zA-Z_]\\w*)$","g",Strings.Substring(line,0,ch));
   return a!=null&&a.$==1?(t=a.$0,t&&Arrays.length(t)===1)?Arrays.get(a.$0,0):"":"";
  }
  function getEndWord(line,ch)
  {
   var a,t;
   a=Useful.REGEX("^([a-zA-Z_]\\w*)","g",line.substring(ch));
   return a!=null&&a.$==1?(t=a.$0,t&&Arrays.length(t)===1)?Arrays.get(a.$0,0):"":"";
  }
  function showToolTip(ed)
  {
   var b$8;
   Concurrency.Start((b$8=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(isParseDisabled,function(a)
    {
     var m,cur;
     return a?Concurrency.Zero():(m=CodeSnippet$1.FetchO(currentCodeSnippetId.c),m!=null&&m.$==1?(cur=m.$0,Concurrency.Bind(parseIfMustThen(false),function()
     {
      var pos,l,sub,add0,add;
      pos=ed.getCursor();
      l=ed.getLine(pos.line);
      sub=Strings.length(getStartWord(l,pos.ch));
      add0=Strings.length(getEndWord(l,pos.ch));
      add=sub===0&&add0===0?2:add0;
      return Concurrency.Bind(autoCompleteClient.ToolTip(parseFile,pos.line+1,pos.ch+1,cur.get_NameSanitized()),function(a$1)
      {
       var c;
       addPrsMsg(((((c=(Runtime.Curried(function($7,$8,$9,$10,$11)
       {
        return $7("InfoFSharp \""+Utils.toSafe($8)+" "+("("+Utils.prettyPrint($9[0])+", "+Utils.prettyPrint($9[1])+")")+" - "+("("+Utils.prettyPrint($10[0])+", "+Utils.prettyPrint($10[1])+")")+" "+Utils.toSafe($11)+" \"");
       },5))(Global.id),function(a$2)
       {
        var c$1;
        c$1=c(a$2);
        return function(t)
        {
         var c$2;
         c$2=c$1([t[0],t[1]]);
         return function(t$1)
         {
          return c$2([t$1[0],t$1[1]]);
         };
        };
       })(cur.get_NameSanitized()))([pos.line+1,pos.ch-sub+1]))([pos.line+1,pos.ch+add+1]))(Strings.Replace(a$1,"\"","''")));
       return Concurrency.Zero();
      });
     })):Concurrency.Zero());
    });
   })),null);
  }
  function getAnnotations(txt,cb,a,ed)
  {
   var b$8;
   Concurrency.Start((b$8=null,Concurrency.Delay(function()
   {
    var m,cur;
    m=CodeSnippet$1.FetchO(currentCodeSnippetId.c);
    return m!=null&&m.$==1?(cur=m.$0,(function($7)
    {
     return $7("calling parseIfMustThen");
    }(function(s$3)
    {
     console.log(s$3);
    }),Concurrency.Bind(parseIfMustThen(false),function()
    {
     var a$1;
     function c(file,indent,fl,fc,tl,tc,sev,from,msg)
     {
      var ind;
      return Strings.StartsWith(file,cur.id.get_Text())||file===FsStationShared.sanitize(cur.name)?(ind=Global.Number(indent)>0?Global.Number(indent):0,{
       $:1,
       $0:LintResponse.New(msg,Strings.StartsWith(sev.toUpperCase(),"ERR")?"error":Strings.StartsWith(sev.toUpperCase(),"INFO")?"info":"warning",Template.cmPos(fl-1,fc-1-ind),Template.cmPos(tl-1,tc-1-ind))
      }):null;
     }
     cb(Arrays.choose(function($7)
     {
      return c($7[0],$7[1],$7[2],$7[3],$7[4],$7[5],$7[6],$7[7],$7[8]);
     },Arrays.choose(function(v$10)
     {
      var $7,a$2,t,$8,a$3,t$1,fc,fl;
      return(a$2=Useful.REGEX(rex2,"",v$10),a$2!=null&&a$2.$==1&&((t=a$2.$0,t&&Arrays.length(t)===13)&&($7=[Arrays.get(a$2.$0,8),Arrays.get(a$2.$0,5),Arrays.get(a$2.$0,7),Arrays.get(a$2.$0,2),Arrays.get(a$2.$0,4),Arrays.get(a$2.$0,11),Arrays.get(a$2.$0,1),Arrays.get(a$2.$0,10),Arrays.get(a$2.$0,9)],true)))?{
       $:1,
       $0:[$7[1],$7[4],Global.Number($7[2]),Global.Number($7[0]),Global.Number($7[8]),Global.Number($7[7]),$7[6],$7[3],$7[5]]
      }:(a$3=Useful.REGEX(rex1,"",v$10),a$3!=null&&a$3.$==1&&((t$1=a$3.$0,t$1&&Arrays.length(t$1)===8)&&($8=[Arrays.get(a$3.$0,4),Arrays.get(a$3.$0,2),Arrays.get(a$3.$0,3),Arrays.get(a$3.$0,1),Arrays.get(a$3.$0,6),Arrays.get(a$3.$0,5)],true)))?(fc=$8[0],(fl=$8[2],{
       $:1,
       $0:[$8[1],$8[3],Global.Number(fl),Global.Number(fc)-1,Global.Number(fl),Global.Number(fc),$8[5],"fsi",$8[4]]
      })):null;
     },(a$1=Useful.REGEX(rex,"g",parserMsgs.c),a$1!=null&&a$1.$==1?a$1.$0:[]))));
     return Concurrency.Zero();
    }))):Concurrency.Zero();
   })),null);
  }
  function getAnnotationsDelayed(parms)
  {
   var b$8;
   asyncStartDelayed((b$8=null,Concurrency.Delay(function()
   {
    (function($7)
    {
     return $7("before delaying");
    }(function(s$3)
    {
     console.log(s$3);
    }));
    return Concurrency.Bind(Concurrency.Sleep(400),function()
    {
     (function($7)
     {
      return $7("calling getAnnotations");
     }(function(s$3)
     {
      console.log(s$3);
     }));
     getAnnotations.apply(null,parms);
     return Concurrency.Zero();
    });
   })));
  }
  function getHints(ed,cb,a)
  {
   var b$8;
   asyncStartDelayed((b$8=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(isParseDisabled,function(a$1)
    {
     var m,cur;
     return a$1?Concurrency.Zero():(m=CodeSnippet$1.FetchO(currentCodeSnippetId.c),m!=null&&m.$==1?(cur=m.$0,Concurrency.Bind(parseIfMustThen(true),function()
     {
      var pos,l,word;
      pos=ed.getCursor();
      l=ed.getLine(pos.line);
      word=getStartWord(l,pos.ch);
      return Concurrency.Bind(autoCompleteClient.Complete(parseFile,l+"a",pos.line+1,pos.ch+1,cur.get_NameSanitized()),function(a$2)
      {
       function m$1(dis,rep,cls,chr)
       {
        return Hint.New(rep,chr+"| "+dis,cls);
       }
       cb(HintResponse.New(Arrays.map(function($7)
       {
        return m$1($7[0],$7[1],$7[2],$7[3]);
       },a$2),CodeMirrorPos.New(pos.line,pos.ch-word.length),pos));
       return Concurrency.Zero();
      });
     })):Concurrency.Zero());
    });
   })));
  }
  function expandParents(snp)
  {
   var o,o$1,me;
   o=(o$1=snp.parent,o$1==null?null:CodeSnippet$1.FetchO(o$1.$0));
   o==null?void 0:(me=o.$0,expandParents(me),!me.expanded?toggleExpanded(me):void 0);
  }
  function _goto(codeId,line,col)
  {
   var b$8;
   return Concurrency.Start((b$8=null,Concurrency.Delay(function()
   {
    var o;
    Var.Set(currentCodeSnippetId,codeId);
    o=CodeSnippet$1.FetchO(codeId);
    o==null?void 0:expandParents(o.$0);
    return Concurrency.Bind(Concurrency.Sleep(200),function()
    {
     var o$1,ed;
     o$1=codeMirror.editorO;
     o$1==null?void 0:(ed=o$1.$0,ed.setCursor(line-1,col-1),ed.focus());
     return Concurrency.Zero();
    });
   })),null);
  }
  function jumpToLine(line)
  {
   var a,t,col;
   a=Useful.REGEX("([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}).+?\\((\\d+)\\,\\s*(\\d+)\\)","",line);
   a!=null&&a.$==1?(t=a.$0,t&&Arrays.length(t)===4)?(col=Arrays.get(a.$0,3),_goto(new CodeSnippetId({
    $:0,
    $0:Arrays.get(a.$0,1)
   }),Global.Number(Arrays.get(a.$0,2)),Global.Number(col))):void 0:void 0;
  }
  function gotoDefinition()
  {
   var b$8;
   Concurrency.Start((b$8=null,Concurrency.Delay(function()
   {
    var m,m$1,ed,pos;
    m=CodeSnippet$1.FetchO(currentCodeSnippetId.c);
    return m!=null&&m.$==1?(m$1=codeMirror.editorO,m$1!=null&&m$1.$==1?(ed=m$1.$0,(pos=ed.getCursor(),(ed.getLine(pos.line),Concurrency.Bind(autoCompleteClient.FindDecl(parseFile,pos.line+1,pos.ch+1,m.$0.get_NameSanitized()),function(a)
    {
     var decl;
     return a.$==9?(decl=a.$0,(jumpToLine(((((((Runtime.Curried(function($7,$8,$9,$10,$11,$12)
     {
      return $7(Utils.toSafe($8)+" ("+Global.String($9)+", "+Global.String($10)+") - ("+Global.String($11)+", "+Global.String($12)+")");
     },6))(Global.id))(decl.File))(decl.Line))(decl.Column))(decl.Line))(decl.Column)),Concurrency.Zero())):a.$==1?(Global.alert((function($7)
     {
      return function($8)
      {
       return $7(GeneratedPrintf.p($8));
      };
     }(Global.id))(a.$0)),Concurrency.Zero()):(Global.alert((function($7)
     {
      return function($8)
      {
       return $7(FSharpStation_GeneratedPrintf.p$4($8));
      };
     }(Global.id))(a)),Concurrency.Zero());
    })))):Concurrency.Zero()):Concurrency.Zero();
   })),null);
  }
  function refreshCodeMirror()
  {
   var o;
   o=codeMirror.editorO;
   o==null?void 0:o.$0.refresh();
  }
  function delayedRefreshCM(delay)
  {
   var b$8;
   Concurrency.Start((b$8=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(delay),function()
    {
     refreshCodeMirror();
     return Concurrency.Zero();
    });
   })),null);
  }
  function setDirtyP()
  {
   Var.Set(dirty,true);
  }
  function getProperty(props,key)
  {
   return new Property.New(setDirtyP,props,key);
  }
  function setProperty(props,key,v$10)
  {
   return getProperty(props,key).get_ValueVar().RSet(v$10);
  }
  function f$6(u,props)
  {
   return HtmlNode.table(List.ofSeq(Seq.delay(function()
   {
    return Seq.append([HtmlNode.thead([HtmlNode.th([HtmlNode.htmlText("Property"),HtmlNode.style("padding-right:10px")]),HtmlNode.th([HtmlNode.htmlText("Value")])])],Seq.delay(function()
    {
     return Seq.append(Seq.map(function(kvp)
     {
      var prop;
      prop=getProperty(props,kvp);
      return HtmlNode.tr([HtmlNode.td([HtmlNode.someElt(Doc.Input([],prop.get_KeyVar()))]),HtmlNode.td([HtmlNode.someElt(Doc.InputArea([HtmlNode.atr("style","height: 1.5em")],prop.get_ValueVar()))]),Template.hoverable(HtmlNode.td([HtmlNode.title("remove"),HtmlNode.style(" cursor: pointer "),HtmlNode.htmlText("x"),new HtmlNode$1({
       $:7,
       $0:AttrModule.Handler("click",function()
       {
        return function()
        {
         prop.Remove();
         return Var.Set(redraw,null);
        };
       })
      })]))]);
     },props.get_Keys()),Seq.delay(function()
     {
      return[HtmlNode.tr([Template.hoverable(HtmlNode.td([HtmlNode.htmlText("Add..."),new HtmlNode$1({
       $:7,
       $0:AttrModule.Handler("click",function()
       {
        return function()
        {
         props.Add("","1");
         setDirtyP();
         return Var.Set(redraw,null);
        };
       })
      })])),HtmlNode.td([HtmlNode.htmlText("")])])];
     }));
    }));
   })));
  }
  function f$7(k)
  {
   function a(s$3)
   {
    return s$3.properties;
   }
   function a$1(s$3,p)
   {
    return CodeSnippet.New(s$3.name,s$3.content,s$3.parent,s$3.predecessors,s$3.id,s$3.expanded,s$3.level,s$3.levelCode,p);
   }
   return missing(new Dictionary.New$5(),function(a$2)
   {
    return FsGlobal.codeSnippets().TryFindByKey(a$2);
   },function(a$2)
   {
    return FsGlobal.codeSnippets().LensInto(a,a$1,a$2);
   },k);
  }
  function g$12(a)
  {
   return new Val({
    $:1,
    $0:a
   });
  }
  function DoW(f$8,p,a,a$1)
  {
   var x$2;
   return Wrap.start(addOutMsg,(x$2=f$8(p),(Wrap.map(Global.ignore))(x$2)));
  }
  function DoP(f$8,p,a,a$1)
  {
   function p$1($7,$8)
   {
    if($7==null)
     addOutMsg("Failed!\n"+$8);
    else
     if($7.$0[0].$==0)
      {
       addOutMsg($8);
       Var.Set(triggerWSResult,null);
      }
     else
      addOutMsg($8);
   }
   return Wrap.startV(function($7)
   {
    return p$1($7[0],$7[1]);
   },f$8(p));
  }
  function DoW2(f$8,p,t)
  {
   function $7(_p)
   {
    return(f$8(t))(_p);
   }
   return Runtime.Curried(DoW,2,[$7,p]);
  }
  function DoP2(f$8,p,t)
  {
   function $7(_p)
   {
    return(f$8(t))(_p);
   }
   return Runtime.Curried(DoP,2,[$7,p]);
  }
  function getSnippet(act)
  {
   var m,$7,t;
   m=act.parms;
   return m!=null&&m.$==1&&((t=m.$0,t&&Arrays.length(t)===1)&&($7=Arrays.get(m.$0,0),true))?CodeSnippet$1.FetchByPathO(Strings.SplitChars($7,["/"],0)):getSnpO();
  }
  function getCodeFromAct(act,addOpen)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Delay(function()
   {
    return b$8.Bind$2(Val.getAsync(act.text),function(a)
    {
     var $7,o,code,code$1,$8,$9,o$1,o$2,$10,snpO,openPre,actionTempl,a$1,t;
     function propValue(p)
     {
      return snpO==null?null:FsGlobal["CodeSnippet.propValue"](snpO.$0,p);
     }
     setOutMsg(a+"...");
     snpO=getSnpO();
     openPre=addOpen?Option.defaultValue("",(o=propValue("open"),o==null?null:{
      $:1,
      $0:Useful.__(function(x$2,y)
      {
       return x$2+y;
      },"\n",o.$0)
     })):"";
     actionTempl=Lazy.Create(function()
     {
      return Option.defaultValue("${parm}() |> printfn \"%A\"",propValue("action-template"));
     });
     a$1=(o$2=act.parms,o$2==null?null:{
      $:1,
      $0:Arrays.map(Global.id,o$2.$0)
     });
     switch(a$1!=null&&a$1.$==1?(t=a$1.$0,t&&Arrays.length(t)===2?Arrays.get(a$1.$0,0)==="Code"?($10=Arrays.get(a$1.$0,1),0):Arrays.get(a$1.$0,0)==="Property"?($10=Arrays.get(a$1.$0,1),1):2:2):2)
     {
      case 0:
       o$1={
        $:1,
        $0:$10
       };
       break;
      case 1:
       o$1=propValue($10);
       break;
      case 2:
       o$1=null;
       break;
     }
     $9=o$1==null?propValue(a):o$1;
     code=(code$1=Option.defaultWith(function()
     {
      return((Object.constructor("return function(parm) { return `"+actionTempl.f()+"`}"))())(a);
     },$9),Strings.StartsWith(code$1,"////")?code$1:openPre+code$1);
     return snpO!=null&&snpO.$==1?b$8.Bind$2((new AjaxRemotingProvider.New()).Async("FSharpStation:FSSGlobal.FsEvaluator+Evaluator.getPresence:-1568677081",[Evaluator.extractConfig(code),(function($11)
     {
      return function($12)
      {
       return $11(FSharpStation_GeneratedPrintf.p$3($12));
      };
     }(Global.id))(snpO.$0.id)]),function(a$2)
     {
      return Unchecked.Equals(a$2,{
       $:1,
       $0:"ok"
      })?b$8.Return(code):b$8.Bind$3(evalSnippetW(snpO),function()
      {
       return b$8.Return(code);
      });
     }):b$8.Return(code);
    });
   });
  }
  function evalFsCode(act,u)
  {
   return Wrap.bind(evaluateCodeW,getCodeFromAct(act,true));
  }
  function evalFableCode(act,u)
  {
   return Wrap.bind(fableCodeW,getCodeFromAct(act,false));
  }
  function evaluateFS2(act,u)
  {
   return evaluateSnippetW(getSnippet(act));
  }
  function fableFS2(act,u)
  {
   return fableSnippetW(getSnippet(act));
  }
  function compileRunP2(act,p)
  {
   var x$2;
   x$2=getSnippet(act);
   return(compileRunW(p))(x$2);
  }
  function setSnippetProp(act,u)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Delay(function()
   {
    return b$8.Bind$1(Result.tryProtection(),function()
    {
     var m,$7,t,opth,o;
     return b$8.Bind$1((m=act.parms,m!=null&&m.$==1&&((t=m.$0,t&&Arrays.length(t)===3)&&($7=[Arrays.get(m.$0,1),Arrays.get(m.$0,0),Arrays.get(m.$0,2)],true))?(opth=$7[1],(Option.defaultWith(function()
     {
      ((function($8)
      {
       return function($9)
       {
        return $8("setSnippetProp snippet not found: "+Utils.toSafe($9));
       };
      }(function(s$3)
      {
       console.log(s$3);
      }))(opth));
     },(o=CodeSnippet$1.FetchByPathO(Strings.SplitChars(opth,["/"],0)),o==null?null:{
      $:1,
      $0:setProperty(o.$0.properties,$7[0],$7[2])
     })),Result.succeed())):Result.failSimpleError((function($8)
     {
      return function($9)
      {
       return $8("setSnippetProp wrong parms: "+FSharpStation_GeneratedPrintf.p$5($9));
      };
     }(Global.id))(act.parms))),function()
     {
      return b$8.Return();
     });
    });
   });
  }
  function showOutText(act,u)
  {
   var $7,m,t,t$1,$8,t$2;
   ((function($9)
   {
    return function($10)
    {
     return $9("showOutText: "+GeneratedPrintf.p$22($10));
    };
   }(function(s$3)
   {
    console.log(s$3);
   }))(act));
   m=act.parms;
   switch(m!=null&&m.$==1?(t=m.$0,t&&Arrays.length(t)===1?($7=Arrays.get(m.$0,0),0):(t$1=m.$0,t$1&&Arrays.length(t$1)===2?(Arrays.get(m.$0,1),Arrays.get(m.$0,0)===""?($7=[Arrays.get(m.$0,0),Arrays.get(m.$0,1)],1):2):2)):2)
   {
    case 0:
     return setOutMsg($7);
     break;
    case 1:
     return setOutMsg($7[1]);
     break;
    case 2:
     return m!=null&&m.$==1&&((t$2=m.$0,t$2&&Arrays.length(t$2)===2)&&(Arrays.get(m.$0,1),Arrays.get(m.$0,0)==="+"&&($8=[Arrays.get(m.$0,0),Arrays.get(m.$0,1)],true)))?addOutMsg($8[1]):(function($9)
     {
      return function($10)
      {
       return $9("error: showOutText "+GeneratedPrintf.p$22($10));
      };
     }(function(s$3)
     {
      console.log(s$3);
     }))(act);
     break;
   }
  }
  function $5()
  {
   return compileRunP(position.c);
  }
  function $6()
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Delay(function()
   {
    lastCodeAndStarts=null;
    return b$8.Bind$2(parseFSA(false),function()
    {
     return b$8.Return();
    });
   });
  }
  function jumpToRef(e,a)
  {
   var v$10,s$3;
   function c(line,from,to_)
   {
    return s$3>=from&&s$3<to_?{
     $:1,
     $0:line
    }:null;
   }
   v$10=e.value;
   s$3=e.selectionStart;
   return jumpToLine(Seq.pick(function($7)
   {
    return c($7[0],$7[1],$7[2]);
   },(Seq.mapFold(function(total,line)
   {
    return[[line,total,total+line.length+1],total+line.length+1];
   },0,Strings.SplitChars(v$10,["\n"],0)))[0]));
  }
  function doGuiCallR(name,action,parms)
  {
   var b$8;
   b$8=Result.result();
   return b$8.Delay(function()
   {
    return b$8.Bind(Result.tryProtection(),function()
    {
     return b$8.Bind(layout.GetGuiCallAction(name,action,parms),function(a)
     {
      var o;
      o=a.onClick;
      o==null?void 0:((o.$0(a))(null))(null);
      return b$8.Zero();
     });
    });
   });
  }
  function addLayoutJson(json)
  {
   delayedRefreshCM(1000);
   delayedRefreshCM(2000);
   delayedRefreshCM(3000);
   layout.SetLayoutJson(steps,json);
  }
  function addLayoutSteps(steps2)
  {
   delayedRefreshCM(1000);
   delayedRefreshCM(2000);
   delayedRefreshCM(3000);
   layout.AddNewSteps(steps,steps2);
  }
  function transMsgs(msgs)
  {
   return Arrays.ofSeq(Seq.map(function(e)
   {
    return[e.FSSGlobal_Useful_ErrMsg$get_ErrMsg(),e.FSSGlobal_Useful_ErrMsg$get_IsWarning()?FSSeverity.FSWarning:FSSeverity.FSError];
   },msgs));
  }
  function result2response(res)
  {
   var o;
   return{
    $:4,
    $0:(o=res.$0,o==null?null:{
     $:1,
     $0:o.$0[1]
    }),
    $1:Arrays.ofSeq(Seq.map(function(err)
    {
     return[err.FSSGlobal_Useful_ErrMsg$get_ErrMsg(),err.FSSGlobal_Useful_ErrMsg$get_IsWarning()?FSSeverity.FSWarning:FSSeverity.FSError];
    },res.$1))
   };
  }
  function result2StringResponse(res)
  {
   var m,o;
   return{
    $:4,
    $0:(m=function($7)
    {
     return function($8)
     {
      return $7(Utils.prettyPrint($8));
     };
    }(Global.id),(o=res.$0,o==null?null:{
     $:1,
     $0:m(o.$0)
    })),
    $1:Arrays.ofSeq(Seq.map(function(err)
    {
     return[err.FSSGlobal_Useful_ErrMsg$get_ErrMsg(),err.FSSGlobal_Useful_ErrMsg$get_IsWarning()?FSSeverity.FSWarning:FSSeverity.FSError];
    },res.$1))
   };
  }
  function respond(fromId,msg)
  {
   var b$8;
   b$8=null;
   return Concurrency.Delay(function()
   {
    var o,o$1,o$2,o$3,o$4,m,o$5,nm,x$2;
    return msg.$==2?Concurrency.Return({
     $:1,
     $0:(o=CodeSnippet$1.FetchO(msg.$0),o==null?null:{
      $:1,
      $0:o.$0.content
     })
    }):msg.$==3?Concurrency.Return({
     $:1,
     $0:(o$1=CodeSnippet$1.FetchO(msg.$0),o$1==null?null:{
      $:1,
      $0:FsGlobal["CodeSnippet.GetCodeFsx"](o$1.$0,true)
     })
    }):msg.$==4?Concurrency.Return({
     $:3,
     $0:Option.defaultValue([],(o$2=CodeSnippet$1.FetchO(msg.$0),o$2==null?null:{
      $:1,
      $0:FsGlobal["CodeSnippet.Predecessors"](o$2.$0)
     }))
    }):msg.$==5?Concurrency.Return({
     $:2,
     $0:CodeSnippet$1.FetchO(msg.$0)
    }):msg.$==6?Concurrency.Return({
     $:1,
     $0:(o$3=CodeSnippet$1.FetchByPathO(msg.$0),o$3==null?null:{
      $:1,
      $0:o$3.$0.content
     })
    }):msg.$==7?Concurrency.Return({
     $:1,
     $0:(o$4=CodeSnippet$1.FetchByPathO(msg.$0),o$4==null?null:{
      $:1,
      $0:FsGlobal["CodeSnippet.GetCodeFsx"](o$4.$0,true)
     })
    }):msg.$==10?(m=CodeSnippet$1.FetchByPathO(msg.$0),m==null?Concurrency.Return({
     $:4,
     $0:null,
     $1:[["Snippet not found",FSSeverity.FSError]]
    }):Concurrency.Bind(FsTranslator.translateAR(FsGlobal["CodeSnippet.GetCodeFsx"](m.$0,true),false),function(a)
    {
     return Concurrency.Return({
      $:4,
      $0:Result.getOption(Result.map(RunCode.completeJS,a)),
      $1:transMsgs(Result.getMsgs(a))
     });
    })):msg.$==8?Concurrency.Return({
     $:3,
     $0:Option.defaultValue([],(o$5=CodeSnippet$1.FetchByPathO(msg.$0),o$5==null?null:{
      $:1,
      $0:FsGlobal["CodeSnippet.Predecessors"](o$5.$0)
     }))
    }):msg.$==9?Concurrency.Return({
     $:2,
     $0:CodeSnippet$1.FetchByPathO(msg.$0)
    }):msg.$==1?Concurrency.Return({
     $:1,
     $0:{
      $:1,
      $0:"Message received: "+msg.$0
     }
    }):msg.$==0?Concurrency.Return({
     $:0,
     $0:FsGlobal.fsIds()
    }):msg.$==12?Async.map(result2response,Wrap.getAsyncR(compileRunUrlW(msg.$1,Position.NewBrowser,CodeSnippet$1.FetchO(msg.$0)))):msg.$==13?Async.map(result2response,Wrap.getAsyncR(compileRunUrlW(msg.$1,Position.NewBrowser,CodeSnippet$1.FetchByPathO(msg.$0)))):msg.$==14?(nm=msg.$0,Concurrency.Return(result2StringResponse(Result.map(function()
    {
     return(function($7)
     {
      return function($8)
      {
       return $7("success: "+Utils.toSafe($8));
      };
     }(Global.id))(nm);
    },doGuiCallR(nm,msg.$1,msg.$2))))):Concurrency.Return({
     $:1,
     $0:{
      $:1,
      $0:(x$2=Arrays.ofSeq((FsGlobal.codeSnippets())["var"].RVal()),JSON.stringify(((Provider.EncodeArray(FSharpStation_JsonEncoder.j$3))())(x$2)))
     }
    });
   });
  }
  function addCssLink(lnk)
  {
   !List.contains(lnk,cssLinks.c)?Var.Set(cssLinks,new List.T({
    $:1,
    $0:lnk,
    $1:cssLinks.c
   })):void 0;
   delayedRefreshCM(300);
  }
  missingVar=Var.Create$1("");
  currentCodeSnippetId=Var.Create$1(CodeSnippetId.get_New());
  s="CodeEditor."+"currentCodeSnippetId";
  v=Global.localStorage.getItem(s);
  v!==null?currentCodeSnippetId.set_RVal((FSharpStation_JsonDecoder.j$3())(JSON.parse(v))):void 0;
  Val.sink(function(v$10)
  {
   Global.localStorage.setItem(s,JSON.stringify((FSharpStation_JsonEncoder.j$1())(v$10)));
  },currentCodeSnippetId);
  refresh=Var.Create$1();
  currentCodeSnippetO=Val.map2(function(k)
  {
   return function()
   {
    return FsGlobal.codeSnippets().TryFindByKey(k);
   };
  },currentCodeSnippetId,refresh);
  position=Var.Create$1(Position.Below);
  s$1="CodeEditor."+"position";
  v$1=Global.localStorage.getItem(s$1);
  v$1!==null?position.set_RVal((FSharpStation_JsonDecoder.j$4())(JSON.parse(v$1))):void 0;
  Val.sink(function(v$10)
  {
   Global.localStorage.setItem(s$1,JSON.stringify((FSharpStation_JsonEncoder.j$2())(v$10)));
  },position);
  Val.map(function(pos)
  {
   return pos.$==1&&true;
  },position);
  noSelectionVal=Val.map(function(cur)
  {
   return Unchecked.Equals(CodeSnippet$1.FetchO(cur),null);
  },currentCodeSnippetId);
  propertyCssVal=(v$2=Val.map((f=(g=function(o)
  {
   return o==null?null:b$2(o.$0);
  },function(x$2)
  {
   return g(CodeSnippet$1.FetchO(x$2));
  }),function(x$2)
  {
   return g$6(f(x$2));
  }),currentCodeSnippetId),(prior=[Var.Create$1(null)],(View.Sink(function(v$10)
  {
   if(!Unchecked.Equals(prior[0].c,v$10))
    Var.Set(prior[0],v$10);
  },Val.toView(v$2)),new Val({
   $:1,
   $0:prior[0]
  }))));
  propertyCssLinkVal=(v$3=Val.map((f$1=(g$1=function(o)
  {
   return o==null?null:b$3(o.$0);
  },function(x$2)
  {
   return g$1(CodeSnippet$1.FetchO(x$2));
  }),function(x$2)
  {
   return g$7(f$1(x$2));
  }),currentCodeSnippetId),(prior$1=[Var.Create$1(null)],(View.Sink(function(v$10)
  {
   if(!Unchecked.Equals(prior$1[0].c,v$10))
    Var.Set(prior$1[0],v$10);
  },Val.toView(v$3)),new Val({
   $:1,
   $0:prior$1[0]
  }))));
  propertyModeVal=(v$4=Val.map((f$2=(g$2=function(o)
  {
   return o==null?null:b$4(o.$0);
  },function(x$2)
  {
   return g$2(CodeSnippet$1.FetchO(x$2));
  }),function(x$2)
  {
   return g$8(f$2(x$2));
  }),currentCodeSnippetId),(prior$2=[Var.Create$1(null)],(View.Sink(function(v$10)
  {
   if(!Unchecked.Equals(prior$2[0].c,v$10))
    Var.Set(prior$2[0],v$10);
  },Val.toView(v$4)),new Val({
   $:1,
   $0:prior$2[0]
  }))));
  propertyThemeVal=(v$5=Val.map((f$3=(g$3=function(o)
  {
   return o==null?null:b$5(o.$0);
  },function(x$2)
  {
   return g$3(CodeSnippet$1.FetchO(x$2));
  }),function(x$2)
  {
   return g$9(f$3(x$2));
  }),currentCodeSnippetId),(prior$3=[Var.Create$1(null)],(View.Sink(function(v$10)
  {
   if(!Unchecked.Equals(prior$3[0].c,v$10))
    Var.Set(prior$3[0],v$10);
  },Val.toView(v$5)),new Val({
   $:1,
   $0:prior$3[0]
  }))));
  propertyLayoutVal=(v$6=Val.map((f$4=(g$4=function(o)
  {
   return o==null?null:b$6(o.$0);
  },function(x$2)
  {
   return g$4(CodeSnippet$1.FetchO(x$2));
  }),function(x$2)
  {
   return g$10(f$4(x$2));
  }),currentCodeSnippetId),(prior$4=[Var.Create$1(null)],(View.Sink(function(v$10)
  {
   if(!Unchecked.Equals(prior$4[0].c,v$10))
    Var.Set(prior$4[0],v$10);
  },Val.toView(v$6)),new Val({
   $:1,
   $0:prior$4[0]
  }))));
  propertyLayoutJSVal=(v$7=Val.map((f$5=(g$5=function(o)
  {
   return o==null?null:b$7(o.$0);
  },function(x$2)
  {
   return g$5(CodeSnippet$1.FetchO(x$2));
  }),function(x$2)
  {
   return g$11(f$5(x$2));
  }),currentCodeSnippetId),(prior$5=[Var.Create$1(null)],(View.Sink(function(v$10)
  {
   if(!Unchecked.Equals(prior$5[0].c,v$10))
    Var.Set(prior$5[0],v$10);
  },Val.toView(v$7)),new Val({
   $:1,
   $0:prior$5[0]
  }))));
  disableParseVal=Val.map(function(p)
  {
   return p!=="0"&&p!=="";
  },disablePropertyVal("DisableParse"));
  disableFSIVal=Val.map2(function($7)
  {
   return function($8)
   {
    return disableEval($7,$8);
   };
  },disableParseVal,disablePropertyVal("DisableFSI"));
  disableFableVal=Val.map2(function($7)
  {
   return function($8)
   {
    return disableEval($7,$8);
   };
  },disableParseVal,disablePropertyVal("DisableFable"));
  disableWebSharperVal=Val.map2(function($7)
  {
   return function($8)
   {
    return disableEval($7,$8);
   };
  },disableParseVal,disablePropertyVal("DisableWebSharper"));
  lastCodeAndStarts=null;
  getPredecessorsM=new ResetableMemoize.New(function(curO)
  {
   return Option.defaultValue(new HashSet.New$3(),curO==null?null:{
    $:1,
    $0:new HashSet.New$2(curO.$0.UniquePredecessors(CodeSnippet$1.FetchO))
   });
  });
  codeFS=Var.Create$1("");
  codeJS=Var.Create$1("");
  parserMsgs=Var.Create$1("");
  outputMsgs=Var.Create$1("");
  parsed=false;
  dirty=Var.Create$1(false);
  Val.sink(function(m)
  {
   Global.onbeforeunload=m?function(e)
   {
    e.returnValue="Changes you made may not be saved.";
   }:null;
  },dirty);
  draggedId=CodeSnippetId.get_New();
  FableModule.set_addOutMsg(addOutMsg);
  compileRunW=($1=Global.location.origin+"/Main.html",(Runtime.Curried3(compileRunUrlW))($1));
  curPredecessors=Val.map(function(a)
  {
   var res,res$1;
   res=null;
   return getPredecessorsM.cache.TryGetValue(a,{
    get:function()
    {
     return res;
    },
    set:function(v$10)
    {
     res=v$10;
    }
   })?res:(res$1=getPredecessorsM.f(a),(getPredecessorsM.cache.set_Item(a,res$1),res$1));
  },currentCodeSnippetO);
  topScrollList=0;
  fileName=Var.Create$1("");
  Val.map(function(v$10)
  {
   return v$10==="";
  },fileName);
  fileInputElementId="CodeEditorFileSel";
  loadFileElement=Input.New$2(Var.Lens(fileName,justFileName,Global.id)).Prefix$1(HtmlNode.label([HtmlNode["class"]("btn btn-primary"),HtmlNode.htmlText("Load File..."),Input.New$2(fileName).Type("file").Style("display: none").Content([AttrModule.Handler("change",function(el)
  {
   return function()
   {
    return loadFile(el);
   };
  }),AttrModule.Handler("click",function(el)
  {
   return function()
   {
    el.value="";
   };
  })]).Id(fileInputElementId).get_Render()]));
  loadFromUri!==""?Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(3000),function()
   {
    var r;
    ((function($7)
    {
     return function($8)
     {
      return $7("loading "+Utils.toSafe($8)+"...");
     };
    }(function(s$3)
    {
     console.log(s$3);
    }))(loadFromUri));
    r=$.getJSON(loadFromUri+"?t="+Global.String(Date.now()));
    r.done(function()
    {
     return parseText(r.responseText);
    });
    return Concurrency.Zero();
   });
  })),null):void 0;
  autoCompleteClient=new FSAutoCompleteIntermediaryClient.New("FSharpStation",{
   $:1,
   $0:Global.location.href
  });
  parseFile=FsGlobal.fsIds()+".fsx";
  isParseDisabled=View.GetAsync(Val.toView(disableParseVal));
  parseRun=1;
  parsing=false;
  rex1="\\((\\d+)\\) F# (.+).fsx\\((\\d+)\\,(\\d+)\\): (error|warning) ((.|\\b)+)";
  rex2="(Err|Warning|Info)(FSharp|WebSharper)\\s+\"(\\((\\d+)\\) ?)?F?#? ?(.+?)(.fsx)? \\((\\d+)\\,\\s*(\\d+)\\) - \\((\\d+)\\,\\s*(\\d+)\\) ((.|\\s)+?)"+"\"";
  rex=rex1+"|"+rex2;
  asyncStartDelayed=Useful.asyncStartCancelling();
  codeMirror=CodeMirror.New$2((view=Val.toView(Val.fixit(currentCodeSnippetId)),(contentVar=Var.Create$1(null),(changingIRefO=[null],(contentVarChanged=[0],(refVarChanged=[0],(View.Sink(function()
  {
   var o,r;
   o=changingIRefO[0];
   o==null?void 0:(r=o.$0,contentVarChanged[0]>refVarChanged[0]?refVarChanged[0]=contentVarChanged[0]:!Unchecked.Equals(r.RVal(),contentVar.c)?(refVarChanged[0]=refVarChanged[0]+1,r.set_RVal(contentVar.c)):void 0);
  },contentVar.v),View.Sink(function()
  {
   var o,r;
   o=changingIRefO[0];
   o==null?void 0:(r=o.$0,refVarChanged[0]>contentVarChanged[0]?contentVarChanged[0]=refVarChanged[0]:!Unchecked.Equals(r.RVal(),contentVar.c)?(contentVarChanged[0]=contentVarChanged[0]+10,Var.Set(contentVar,r.RVal())):void 0);
  },View.Bind(function(cur)
  {
   var r;
   r=curSnippetCodeOf(cur);
   changingIRefO[0]={
    $:1,
    $0:r
   };
   refVarChanged[0]=contentVarChanged[0]+100;
   Var.Set(contentVar,r.RVal());
   return r.RView();
  },view)),contentVar))))))).OnChange(function()
  {
   var $7;
   lastCodeAndStarts!=null&&lastCodeAndStarts.$==1&&(Unchecked.Equals(lastCodeAndStarts.$0[0],currentCodeSnippetId.c)&&($7=[lastCodeAndStarts.$0[0],lastCodeAndStarts.$0[2]],true))?setDirtyPart():setDirty();
  }).OnRender(function(ed)
  {
   function f$8(a)
   {
    ed.replaceSelection(".","end");
   }
   function g$13()
   {
    Template.showHints(ed,function($7)
    {
     return getHints($7[0],$7[1],$7[2]);
    },false,void 0);
   }
   ed.addKeyMap(KeyMapAutoComplete.New(showToolTip,showToolTip,function(a)
   {
    Template.showHints(ed,function($7)
    {
     return getHints($7[0],$7[1],$7[2]);
    },false,a);
   },function(x$2)
   {
    return g$13(f$8(x$2));
   }));
   Template.setLint(ed,getAnnotationsDelayed);
   Val.sink(function(v$10)
   {
    var b$8;
    Concurrency.Start((b$8=null,Concurrency.Delay(function()
    {
     ed.setOption("theme",v$10);
     return Concurrency.Bind(Concurrency.Sleep(50),function()
     {
      ed.refresh();
      return Concurrency.Zero();
     });
    })),null);
   },propertyThemeVal);
   Val.sink(function(v$10)
   {
    ed.setOption("mode",v$10);
   },propertyModeVal);
  }).Style("height: 100%");
  codeMirrorRender=codeMirror.get_Render().AddChildren([new HtmlNode$1({
   $:7,
   $0:AttrModule.Handler("dblclick",function()
   {
    return function()
    {
     return showToolTip(codeMirror.editorO.$0);
    };
   })
  }),HtmlNode.htmlElement("menu",[HtmlNode.type("context"),HtmlNode.Id("right-menu"),HtmlNode.htmlElement("menuitem",[HtmlNode.htmlAttribute("label","Goto Definition"),new HtmlNode$1({
   $:7,
   $0:AttrModule.Handler("click",function()
   {
    return function()
    {
     return gotoDefinition();
    };
   })
  })])]),HtmlNode.htmlAttribute("contextmenu","right-menu")]);
  Val.sink(function()
  {
   var b$8;
   Concurrency.Start((b$8=null,Concurrency.Delay(function()
   {
    var m,ed,m$1;
    return!parsed?Concurrency.Zero():(m=codeMirror.editorO,m!=null&&m.$==1?(ed=m.$0,(m$1=CodeSnippet$1.FetchO(currentCodeSnippetId.c),m$1!=null&&m$1.$==1?Concurrency.Bind(autoCompleteClient.MustParse(parseFile,m$1.$0.get_NameSanitized()),function(a)
    {
     return a?Concurrency.Zero():(ed.performLint(),Concurrency.Zero());
    }):Concurrency.Zero())):Concurrency.Zero());
   })),null);
  },parserMsgs);
  redraw=Var.Create$1();
  properties=HtmlNode.div([new HtmlNode$1({
   $:5,
   $0:Val.map2(function($7)
   {
    return function($8)
    {
     return f$6($7,$8);
    };
   },redraw,Val.bind(function(x$2)
   {
    return g$12(f$7(x$2));
   },currentCodeSnippetId))
  }),HtmlNode.css(" td.hovering { background: gray; } ")]);
  triggerWSResult=Var.Create$1();
  actLoadFile=Action.New$1("Load...").OnClick(function($7)
  {
   return function($8)
   {
    return do_LoadFile($7,$8);
   };
  });
  actSaveFile=Action.New$1("Save as...").OnClick(Runtime.Curried(Template.Do,2,[downloadFile,null])).Highlight(dirty);
  actAddSnippet=Action.New$1("Add Snippet").OnClick(Runtime.Curried(Template.Do,2,[addCode,null]));
  actDeleteSnippet=Action.New$1("Delete Snippet").OnClick(Runtime.Curried(Template.Do,2,[deleteCode,null])).Disabled(noSelectionVal);
  actIndentSnippet=Action.New$1("Indent In  >>").OnClick(Runtime.Curried(Template.Do,2,[indentCodeIn,null])).Disabled(noSelectionVal);
  actOutdentSnippet=Action.New$1("Indent Out <<").OnClick(Runtime.Curried(Template.Do,2,[indentCodeOut,null])).Disabled(noSelectionVal);
  actGetFsCode=Action.New$1("Get F# Code").OnClick(Runtime.Curried(Template.Do,2,[getFSCode,null])).Disabled(disableParseVal);
  actSetSnippetProp=Action.New$1("actSetSnippetProp").OnClick2(function($7)
  {
   return DoW2(function($8)
   {
    return function($9)
    {
     return setSnippetProp($8,$9);
    };
   },null,$7);
  }).Disabled(disableFSIVal);
  actEvalFsCode=Action.New$1("Run FSI on Code").OnClick2(function($7)
  {
   return DoW2(function($8)
   {
    return function($9)
    {
     return evalFsCode($8,$9);
    };
   },null,$7);
  }).Disabled(disableFSIVal);
  actEvalCode=Action.New$1("Run FSI").OnClick2(function($7)
  {
   return DoW2(function($8)
   {
    return function($9)
    {
     return evaluateFS2($8,$9);
    };
   },null,$7);
  }).Disabled(disableFSIVal);
  actFableFsCode=Action.New$1("Run Fable on Code").OnClick2(function($7)
  {
   return DoW2(function($8)
   {
    return function($9)
    {
     return evalFableCode($8,$9);
    };
   },null,$7);
  }).Disabled(disableFableVal);
  actFableCode=Action.New$1("Run Fable").OnClick2(function($7)
  {
   return DoW2(function($8)
   {
    return function($9)
    {
     return fableFS2($8,$9);
    };
   },null,$7);
  }).Disabled(disableFableVal);
  actRunWSNewTab=Action.New$1("Run WebSharper in new tab").OnClick2(($2=Position.NewBrowser,function($7)
  {
   return DoW2(function($8)
   {
    return function($9)
    {
     return compileRunP2($8,$9);
    };
   },$2,$7);
  })).Disabled(disableWebSharperVal);
  actRunWSHere=Action.New$1("Run WebSharper in WS Result").OnClick2(($3=Position.Below,function($7)
  {
   return DoP2(function($8)
   {
    return function($9)
    {
     return compileRunP2($8,$9);
    };
   },$3,$7);
  })).Disabled(disableWebSharperVal);
  actRunWSIn=Action.New$1("Run WebSharper in ...").OnClick(Runtime.Curried(DoP,2,[$5,null])).Disabled(disableWebSharperVal);
  actParseCode=Action.New$1("Parse F#").OnClick(Runtime.Curried(DoW,2,[$6,null])).Disabled(disableParseVal);
  actCompileWS=Action.New$1("Compile WebSharper").OnClick(($4=function(x$2)
  {
   return compileSnippetW(getSnpO(x$2));
  },Runtime.Curried(DoW,2,[$4,null]))).Disabled(disableWebSharperVal);
  actFindDefinition=Action.New$1("Find Definition").OnClick(Runtime.Curried(Template.Do,2,[gotoDefinition,null])).Disabled(disableParseVal);
  actRefreshEditor=Action.New$1("Refresh CodeMirror").OnClick(Runtime.Curried(Template.Do,2,[refreshCodeMirror,null]));
  actOutText=Action.New$1("Show Output text").OnClick2(Runtime.Curried(Template.Do2,3,[showOutText,null]));
  buttonsH=HtmlNode.div([actAddSnippet.get_Button().get_Render(),actOutdentSnippet.get_Button().get_Render(),actIndentSnippet.get_Button().get_Render(),loadFileElement.get_Render().AddChildren([HtmlNode.style("grid-column: 4/6")]),actEvalCode.get_Button().get_Render(),actFableCode.get_Button().get_Render(),actRunWSIn.get_Button().get_Render(),actDeleteSnippet.get_Button().get_Render(),actFindDefinition.get_Button().get_Render(),HtmlNode.span([]),actSaveFile.get_Button().get_Render(),HtmlNode.span([]),actGetFsCode.get_Button().get_Render(),actParseCode.get_Button().get_Render(),HtmlNode.someElt(Doc.Select([AttrProxy.Create("id","Position")],function(v$10)
  {
   return v$10.$==1?"Right":v$10.$==2?"In Tab":v$10.$==3?"New Browser":"Below";
  },List.ofArray([Position.NewBrowser,Position.Below]),position)),HtmlNode.style("\n                    overflow: hidden;\n                    display: grid;\n                    grid-template-columns: repeat(8, 12.1%);\n                    bxackground-color: #eee;\n                    padding : 5px;\n                    grid-gap: 5px;\n                ")]);
  menuLeft=Menu.New2([MenuEntry.New$2("File").SubMenu([actLoadFile.get_MenuEntry(),actSaveFile.get_MenuEntry()]),MenuEntry.New$2("Code").SubMenu([actAddSnippet.get_MenuEntry(),actDeleteSnippet.get_MenuEntry(),MenuEntry.New$2("").get_Divider(),actIndentSnippet.get_MenuEntry(),actOutdentSnippet.get_MenuEntry(),MenuEntry.New$2("").get_Divider(),actFindDefinition.get_MenuEntry(),MenuEntry.New$2("").get_Divider(),actGetFsCode.get_MenuEntry(),MenuEntry.New$2("").get_Divider(),actRefreshEditor.get_MenuEntry()]),MenuEntry.New$2("Run").SubMenu([actEvalCode.get_MenuEntry(),actFableCode.get_MenuEntry(),MenuEntry.New$2("").get_Divider(),actRunWSNewTab.get_MenuEntry(),actRunWSHere.get_MenuEntry(),MenuEntry.New$2("").get_Divider(),actParseCode.get_MenuEntry(),actCompileWS.get_MenuEntry()])]);
  menuRight=Menu.New2([MenuEntry.New$2("About").SubMenu([MenuEntry.New$1("Source @ GitHub","https://github.com/amieres/FSharpStation").Target("_blank")])]);
  menuBar=Template.navbar(HtmlNode.h1([HtmlNode.htmlText("F# Station"),HtmlNode.style("font-size: 48px; margin-top: -17px")]),menuLeft.get_Render(),menuRight.get_Render());
  s$2="CodeEditor."+"splitterV1";
  v$8=SplitterBar.New$1(20).Children([HtmlNode.style("grid-row: 2 / 4")]).get_Var();
  v$9=Global.localStorage.getItem(s$2);
  v$9!==null?v$8.set_RVal(((Provider.Id())())(JSON.parse(v$9))):void 0;
  Val.sink(function(v$10)
  {
   Global.localStorage.setItem(s$2,JSON.stringify(((Provider.Id())())(v$10)));
  },v$8);
  snippetList=HtmlNode.bindHElem(function(snps)
  {
   return HtmlNode.div(List.ofSeq(Seq.delay(function()
   {
    return Seq.append([HtmlNode.style("overflow: auto")],Seq.delay(function()
    {
     return Seq.append(Seq.choose(Global.id,(Seq.mapFold(function(expanded,t)
     {
      var snp,o,isParent,o$1,isExpanded;
      snp=t[1];
      return Option.defaultValue(true,(o=snp.parent,o==null?null:{
       $:1,
       $0:expanded.Contains(o.$0)
      }))?(isParent=Option.defaultValue(false,(o$1=Seq.tryItem(t[0]+1,FsGlobal.codeSnippets()),o$1==null?null:{
       $:1,
       $0:Unchecked.Equals(o$1.$0.parent,{
        $:1,
        $0:snp.id
       })
      })),(isExpanded=isParent&&snp.expanded,[{
       $:1,
       $0:listEntry(isParent,isExpanded,snp)
      },isExpanded?expanded.Add(snp.id):expanded])):[null,expanded];
     },new FSharpSet.New(List.T.Empty),Seq.indexed(snps)))[0]),Seq.delay(function()
     {
      return Seq.append([new HtmlNode$1({
       $:7,
       $0:AttrModule.Handler("scroll",function(e)
       {
        return function()
        {
         topScrollList=e.scrollTop;
        };
       })
      })],Seq.delay(function()
      {
       return[new HtmlNode$1({
        $:7,
        $0:AttrModule.OnAfterRender(function(e)
        {
         e.scrollTop=topScrollList;
        })
       })];
      }));
     }));
    }));
   })));
  },(x=FsGlobal.codeSnippets().v,View.SnapshotOn((FsGlobal.codeSnippets())["var"].RVal(),refresh.v,x)));
  steps=Layout.AddGuids([["actLoadFile",new GuiPart({
   $:2,
   $0:actLoadFile
  })],["actSaveFile",new GuiPart({
   $:2,
   $0:actSaveFile
  })],["actAddSnippet",new GuiPart({
   $:2,
   $0:actAddSnippet
  })],["actDeleteSnippet",new GuiPart({
   $:2,
   $0:actDeleteSnippet
  })],["actIndentSnippet",new GuiPart({
   $:2,
   $0:actIndentSnippet
  })],["actOutdentSnippet",new GuiPart({
   $:2,
   $0:actOutdentSnippet
  })],["actGetFsCode",new GuiPart({
   $:2,
   $0:actGetFsCode
  })],["actSetSnippetProp",new GuiPart({
   $:2,
   $0:actSetSnippetProp
  })],["actEvalFsCode",new GuiPart({
   $:2,
   $0:actEvalFsCode
  })],["actEvalCode",new GuiPart({
   $:2,
   $0:actEvalCode
  })],["actRunFableFs",new GuiPart({
   $:2,
   $0:actFableFsCode
  })],["actRunFable",new GuiPart({
   $:2,
   $0:actFableCode
  })],["actRunWSNewTab",new GuiPart({
   $:2,
   $0:actRunWSNewTab
  })],["actRunWSHere",new GuiPart({
   $:2,
   $0:actRunWSHere
  })],["actRunWSIn",new GuiPart({
   $:2,
   $0:actRunWSIn
  })],["actParseCode",new GuiPart({
   $:2,
   $0:actParseCode
  })],["actCompileWS",new GuiPart({
   $:2,
   $0:actCompileWS
  })],["actFindDefinition",new GuiPart({
   $:2,
   $0:actFindDefinition
  })],["actOutText",new GuiPart({
   $:2,
   $0:actOutText
  })],["Output",new GuiPart({
   $:1,
   $0:TextArea.New$2(outputMsgs).Placeholder("Output:").Title("Output").RenderWith(List.ofArray([AttrModule.Handler("dblclick",function(a)
   {
    return function($7)
    {
     return jumpToRef(a,$7);
    };
   })]))
  })],["Parser",new GuiPart({
   $:1,
   $0:TextArea.New$2(parserMsgs).Placeholder("Parser messages:").Title("Parser").RenderWith(List.ofArray([AttrModule.Handler("dblclick",function(a)
   {
    return function($7)
    {
     return jumpToRef(a,$7);
    };
   })]))
  })],["JavaScript",new GuiPart({
   $:1,
   $0:TextArea.New$2(codeJS).Placeholder("Javascript:").Title("JavaScript code generated").get_Render()
  })],["F# code",new GuiPart({
   $:1,
   $0:TextArea.New$2(codeFS).Placeholder("F# code:").Title("F# code assembled").get_Render()
  })],["Properties",new GuiPart({
   $:1,
   $0:properties
  })],["WS Result",new GuiPart({
   $:1,
   $0:HtmlNode.div([HtmlNode.div([HtmlNode.Id("TestNode"),HtmlNode.style("background: white; height: 100%; width: 100%; ")])])
  })],["title",new GuiPart({
   $:1,
   $0:Input.New$2((view$1=Val.toView(Val.fixit(currentCodeSnippetId)),(contentVar$1=Var.Create$1(null),(changingIRefO$1=[null],(contentVarChanged$1=[0],(refVarChanged$1=[0],(View.Sink(function()
   {
    var o,r;
    o=changingIRefO$1[0];
    o==null?void 0:(r=o.$0,contentVarChanged$1[0]>refVarChanged$1[0]?refVarChanged$1[0]=contentVarChanged$1[0]:!Unchecked.Equals(r.RVal(),contentVar$1.c)?(refVarChanged$1[0]=refVarChanged$1[0]+1,r.set_RVal(contentVar$1.c)):void 0);
   },contentVar$1.v),View.Sink(function()
   {
    var o,r;
    o=changingIRefO$1[0];
    o==null?void 0:(r=o.$0,refVarChanged$1[0]>contentVarChanged$1[0]?contentVarChanged$1[0]=refVarChanged$1[0]:!Unchecked.Equals(r.RVal(),contentVar$1.c)?(contentVarChanged$1[0]=contentVarChanged$1[0]+10,Var.Set(contentVar$1,r.RVal())):void 0);
   },View.Bind(function(cur)
   {
    var r;
    r=curSnippetNameOf(cur);
    changingIRefO$1[0]={
     $:1,
     $0:r
    };
    refVarChanged$1[0]=contentVarChanged$1[0]+100;
    Var.Set(contentVar$1,r.RVal());
    return r.RView();
   },view$1)),contentVar$1))))))).Prefix$1(HtmlNode.htmlText("name:")).get_Render()
  })],["code",new GuiPart({
   $:1,
   $0:codeMirrorRender
  })],["snippets",new GuiPart({
   $:1,
   $0:snippetList
  })],["buttons",new GuiPart({
   $:1,
   $0:buttonsH
  })],["menu",new GuiPart({
   $:1,
   $0:menuBar
  })],["messagesR",new GuiPart({
   $:4,
   $0:true,
   $1:["Properties"]
  })],["messagesB1",new GuiPart({
   $:4,
   $0:true,
   $1:["Output","JavaScript","F# code"]
  })],["messagesB2",new GuiPart({
   $:4,
   $0:true,
   $1:["Parser","WS Result"]
  })],["messagesB",Template.varVerSplitter(55,"messagesB1","messagesB2",0,100)],["title_code",Template.fixedHorSplitter(true,34,"title","code")],["code_props",Template.varVerSplitter(85,"title_code","messagesR",25,100)],["code_buttons",Template.fixedHorSplitter(false,80,"code_props","buttons")],["snippets_code",Template.varVerSplitter(15,"snippets","code_buttons",5,95)],["main_messages",Template.varHorSplitter(82,"snippets_code","messagesB",35,100)],["extrabuttons",new GuiPart({
   $:1,
   $0:HtmlNode.div([])
  })],["main_extra",Template.varVerSplitter(100,"main_messages","extrabuttons",20,100)],["main",Template.fixedHorSplitter(true,50,"menu","main_extra")]]);
  layout=Layout.New$1(steps);
  Global.addLayoutJson=addLayoutJson;
  Val.sink(addLayoutJson,propertyLayoutVal);
  Val.sink(function(js)
  {
   if(js==="")
    addLayoutSteps([]);
   else
    _eval(Global,js);
  },propertyLayoutJSVal);
  Global.doFSharpStationGuiCall=function(v$10)
  {
   var a,c;
   a=Result.Success(doGuiCallR.apply(null,v$10));
   a.$==1?((c=(Runtime.Curried3(function($7,$8,$9)
   {
    return $7("Error doGuiCall "+Utils.printList(Utils.prettyPrint,$8)+": "+("("+Utils.prettyPrint($9[0])+", "+Utils.prettyPrint($9[1])+", "+Utils.printArray(Utils.prettyPrint,$9[2])+")"));
   }))(function(s$3)
   {
    console.log(s$3);
   }),function(a$1)
   {
    var c$1;
    c$1=c(a$1);
    return function(t)
    {
     c$1([t[0],t[1],t[2]]);
    };
   })(a.$0))(v$10):void 0;
  };
  Global.setFSharpStationLayout=function(f$8)
  {
   var o;
   o=CodeSnippet$1.FetchO(currentCodeSnippetId.c);
   o==null?void 0:addLayoutSteps(f$8.apply(null,[layout,o.$0]));
  };
  fsStationClient=new FsStationClient.New(FsGlobal.fsIds(),{
   $:1,
   $0:FsGlobal.fsIds()
  },null,{
   $:1,
   $0:Global.location.href
  });
  Concurrency.Start((b$1=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(1000),function()
   {
    fsStationClient.get_MessagingClient().awaitMessage(function(f$8,t)
    {
     var b$8;
     b$8=null;
     return Concurrency.Delay(function()
     {
      var msg;
      ((function($7)
      {
       return function($8)
       {
        return $7("respondMessageG txt: "+Utils.toSafe($8));
       };
      }(function(s$3)
      {
       console.log(s$3);
      }))(t));
      msg=(FSharpStation_JsonDecoder.j$5())(JSON.parse(t));
      ((function($7)
      {
       return function($8)
       {
        return $7("respondMessageG msg: "+Utils.prettyPrint($8));
       };
      }(function(s$3)
      {
       console.log(s$3);
      }))(msg));
      return Concurrency.Bind(respond(f$8,msg),function(a)
      {
       return Concurrency.Return(JSON.stringify((FSharpStation_JsonEncoder.j$4())(a)));
      });
     });
    });
    return Concurrency.Zero();
   });
  })),null);
  Val.sink(function()
  {
   layout.SelectTab("Output");
  },outputMsgs);
  Val.sink(function()
  {
   layout.SelectTab("WS Result");
  },triggerWSResult);
  cssLinks=Var.Create$1(List.ofArray(["/EPFileX/css/main.css"]));
  Val.sink(addCssLink,propertyCssLinkVal);
  Val.sink(function(theme)
  {
   if(theme!=="")
    addCssLink((function($7)
    {
     return function($8)
     {
      return $7("/EPFileX/codemirror/content/theme/"+Utils.toSafe($8)+".css");
     };
    }(Global.id))(theme));
  },propertyThemeVal);
  x$1=HtmlNode.div([HtmlNode.style("height: 100vh; width: 100% "),layout.get_Render().Style("height: 100%; width: 100% "),HtmlNode.script([HtmlNode.src("/EPFileX/FileSaver/FileSaver.js"),HtmlNode.type("text/javascript")]),HtmlNode.script([HtmlNode.src("http://code.jquery.com/jquery-3.1.1.min.js"),HtmlNode.type("text/javascript")]),HtmlNode.script([HtmlNode.src("http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"),HtmlNode.type("text/javascript")]),HtmlNode.link([HtmlNode.href("http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]),HtmlNode.css("\n      \n        body { margin: 0px }     \n             \n        div textarea {\n            font-family     : monospace;\n        }\n        .code-editor-list-tile {\n            white-space     : nowrap; \n            border-style    : solid none none;\n            border-color    : white;\n            border-width    : 1px;\n            background-color: #D8D8D8;\n            display         : flex;\n        }\n        .code-editor-list-text{\n            padding         : 1px 10px 1px 5px;\n            overflow        : hidden;\n            text-overflow   : ellipsis;\n            white-space     : nowrap;\n            flex            : 1;\n        }\n        \n        .code-editor-list-tile.direct-predecessor {\n            font-weight     : bold;\n        }\n        .code-editor-list-tile.indirect-predecessor {\n            color           : blue;\n        }\n        .code-editor-list-tile.selected {\n            background-color: #77F;\n            color           : white;\n        }\n        .code-editor-list-tile.hovering {\n            background      : lightgray;\n        }\n        .code-editor-list-tile.hovering.selected {\n            background      : blue;\n        }\n        .code-editor-list-tile>.predecessor {\n            font-weight     : bold;\n            border-style    : inset;\n            border-width    : 1px;\n            text-align      : center;\n            color           : transparent;\n        }\n        .code-editor-list-tile.direct-predecessor>.predecessor {\n            color           : blue;\n        }\n        \n        .CodeMirror { height: 100%; }\n        \n        .node {\n            background-color: white; \n            width           : 2ch; \n            color           : #A03; \n            font-weight     : bold; \n            text-align      : center;\n            font-family     : arial;\n        }\n        .Warning { text-decoration: underline lightblue } \n        .Error   { text-decoration: underline red       } \n        .body    { margin         : 0px                 }\n        "),HtmlNode.style(" \n                color      : #333;\n                font-size  : small;\n                font-family: monospace;\n                line-height: 1.2;\n                    "),new HtmlNode$1({
   $:5,
   $0:Val.map(function(csslnks)
   {
    return HtmlNode.div(List.ofSeq(Seq.delay(function()
    {
     return Seq.map(function(csslnk)
     {
      return HtmlNode.link([HtmlNode.href(csslnk),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]);
     },csslnks);
    })));
   },cssLinks)
  }),HtmlNode.css(propertyCssVal)]);
  return(HtmlNode.renderDoc())(x$1);
 };
 SC$1.$cctor=function()
 {
  var g,v,g$1;
  SC$1.$cctor=Global.ignore;
  function m(n,v$1)
  {
   return new HtmlNode$1({
    $:7,
    $0:AttrModule.Style(n,v$1)
   });
  }
  SC$1.result=new ropBuilder.New();
  SC$1.errOptionIsNone=new ErrOptionIsNone.New();
  SC$1.wrapper=new Builder.New();
  SC$1.awaitRequestForF=FsStationShared.selectF(function(l)
  {
   return(new AjaxRemotingProvider.New()).Async("RemotingDll:FSSGlobal.UsefulDotNet.awaitRequestFor:-439983525",[l]);
  },function(l)
  {
   return(new AjaxRemotingProvider.New()).Async("RemotingDll:FSSGlobal.UsefulDotNet.awaitRequestFor:-439983525",[l]);
  });
  SC$1.sendRequestF=FsStationShared.selectF(Runtime.Curried3(function(t,f,c)
  {
   return(new AjaxRemotingProvider.New()).Async("RemotingDll:FSSGlobal.UsefulDotNet.sendRequest:-426626804",[t,f,c]);
  }),Runtime.Curried3(function(t,f,c)
  {
   return(new AjaxRemotingProvider.New()).Async("RemotingDll:FSSGlobal.UsefulDotNet.sendRequest:-426626804",[t,f,c]);
  }));
  SC$1.replyToF=FsStationShared.selectF(function(r)
  {
   return function(r$1)
   {
    return(new AjaxRemotingProvider.New()).Async("RemotingDll:FSSGlobal.UsefulDotNet.replyTo:-1092841374",[r,r$1]);
   };
  },function(r)
  {
   return function(r$1)
   {
    return(new AjaxRemotingProvider.New()).Async("RemotingDll:FSSGlobal.UsefulDotNet.replyTo:-1092841374",[r,r$1]);
   };
  });
  SC$1.AsyncStartF=FsStationShared.selectF(function(a)
  {
   FsStationShared.AsyncStart(a);
  },function(a)
  {
   Concurrency.Start(a,null);
  });
  SC$1.valFlow=new valBuilder.New();
  SC$1.renderDoc=(g=(v=Doc.Empty(),function(o)
  {
   return o==null?v:o.$0;
  }),function(x)
  {
   return g(HtmlNode.chooseNode(x));
  });
  SC$1.string2Styles=(g$1=function(a)
  {
   return Arrays.map(function($1)
   {
    return m($1[0],$1[1]);
   },a);
  },function(x)
  {
   return g$1(HtmlNode.style2pairs(x));
  });
  SC$1.codeMirrorIncludes=["/EPFileX/codemirror/scripts/codemirror/codemirror.js","/EPFileX/codemirror/scripts/intellisense.js","/EPFileX/codemirror/scripts/codemirror/codemirror-intellisense.js","/EPFileX/codemirror/scripts/codemirror/codemirror-compiler.js","/EPFileX/codemirror/scripts/codemirror/mode/none.js","/EPFileX/codemirror/scripts/codemirror/mode/fsharp.js","/EPFileX/codemirror/scripts/codemirror/mode/css.js","/EPFileX/codemirror/scripts/codemirror/mode/javascript.js","/EPFileX/codemirror/scripts/codemirror/mode/markdown.js","/EPFileX/codemirror/scripts/addon/search/searchcursor.js","/EPFileX/codemirror/scripts/addon/search/search.js","/EPFileX/codemirror/scripts/addon/search/jump-to-line.js","/EPFileX/codemirror/scripts/addon/dialog/dialog.js","/EPFileX/codemirror/scripts/addon/edit/matchbrackets.js","/EPFileX/codemirror/scripts/addon/selection/active-line.js","/EPFileX/codemirror/scripts/addon/display/fullscreen.js","/EPFileX/codemirror/scripts/addon/hint/show-hint.js","/EPFileX/codemirror/scripts/addon/lint/lint.js"];
  SC$1.observers=List.T.Empty;
  SC$1.draggedTab=[null];
  SC$1.selectedPanels=Var.Create$1(new FSharpMap.New([]));
  SC$1.TabMoved=null;
  SC$1.codeSnippets=ListModel.Create(function(s)
  {
   return s.id;
  },List.T.Empty);
  SC$1.fsIds="FSharpStation"+Global.String(Date.now());
  SC$1.references=["mscorlib.dll","System.dll","System.Core.dll","System.Data.dll","System.IO.dll","System.Xml.dll","System.Numerics.dll","FSharp.Core.sigdata","FSharp.Core.dll","Fable.Core.dll","Fable.Import.Browser.dll"];
  SC$1.loadReferences=Lazy.Create(function()
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(HtmlNode.LoadFilesAsync(["https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.2/require.min.js"]),function()
    {
     var options;
     options=Object.create(null);
     options.skipDataMain=1;
     options.isBrowser=1;
     Global.require.config(options);
     Seq.iter(function(fn)
     {
      Global.getFileBlob(fn,"metadata/"+fn);
     },FableModule.references());
     return Concurrency.Zero();
    });
   })),null);
  });
  SC$1.getChecker=Lazy.Create(function()
  {
   return Fable$1.createChecker(function(f)
   {
    return Global.metadata[f];
   },Arrays.choose(function(fn)
   {
    return fn.indexOf("sigdata")!=-1?null:{
     $:1,
     $0:Strings.Replace(fn,".dll","")
    };
   },FableModule.references()));
  });
  SC$1.addOutMsg=function(a)
  {
   console.log(a);
  };
 };
 FSharpStation_JsonDecoder.j=function()
 {
  return FSharpStation_JsonDecoder._v?FSharpStation_JsonDecoder._v:FSharpStation_JsonDecoder._v=(Provider.DecodeUnion(void 0,"$",[[0,[["$0","Item",Provider.Id(),0]]],[1,[["$0","Item",Provider.Id(),1]]],[2,[["$0","Item",FSharpStation_JsonDecoder.j$2,1]]],[3,[["$0","Item",Provider.DecodeArray(FSharpStation_JsonDecoder.j$2),0]]],[4,[["$0","Item1",Provider.Id(),1],["$1","Item2",Provider.DecodeArray(Provider.DecodeTuple([Provider.Id(),FSharpStation_JsonDecoder.j$1])),0]]]]))();
 };
 FSharpStation_JsonDecoder.j$3=function()
 {
  return FSharpStation_JsonDecoder._v$3?FSharpStation_JsonDecoder._v$3:FSharpStation_JsonDecoder._v$3=(Provider.DecodeUnion(CodeSnippetId,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 FSharpStation_JsonDecoder.j$2=function()
 {
  return FSharpStation_JsonDecoder._v$2?FSharpStation_JsonDecoder._v$2:FSharpStation_JsonDecoder._v$2=(Provider.DecodeRecord(CodeSnippet,[["name",Provider.Id(),0],["content",Provider.Id(),0],["parent",FSharpStation_JsonDecoder.j$3,1],["predecessors",Provider.DecodeList(FSharpStation_JsonDecoder.j$3),0],["id",FSharpStation_JsonDecoder.j$3,0],["expanded",Provider.Id(),0],["level",Provider.Id(),0],["levelCode",Provider.Id(),0],["properties",Provider.DecodeStringDictionary(Provider.Id()),0]]))();
 };
 FSharpStation_JsonDecoder.j$1=function()
 {
  return FSharpStation_JsonDecoder._v$1?FSharpStation_JsonDecoder._v$1:FSharpStation_JsonDecoder._v$1=(Provider.DecodeUnion(void 0,"$",[[0,[]],[1,[]],[2,[]]]))();
 };
 FSharpStation_JsonEncoder.j=function()
 {
  return FSharpStation_JsonEncoder._v?FSharpStation_JsonEncoder._v:FSharpStation_JsonEncoder._v=(Provider.EncodeUnion(void 0,"$",[[0,[]],[1,[["$0","Item",Provider.Id(),0]]],[2,[["$0","Item",FSharpStation_JsonEncoder.j$1,0]]],[3,[["$0","Item",FSharpStation_JsonEncoder.j$1,0]]],[4,[["$0","Item",FSharpStation_JsonEncoder.j$1,0]]],[5,[["$0","Item",FSharpStation_JsonEncoder.j$1,0]]],[6,[["$0","Item",Provider.EncodeArray(Provider.Id()),0]]],[7,[["$0","Item",Provider.EncodeArray(Provider.Id()),0]]],[8,[["$0","Item",Provider.EncodeArray(Provider.Id()),0]]],[9,[["$0","Item",Provider.EncodeArray(Provider.Id()),0]]],[10,[["$0","Item",Provider.EncodeArray(Provider.Id()),0]]],[11,[]],[12,[["$0","Item1",FSharpStation_JsonEncoder.j$1,0],["$1","Item2",Provider.Id(),0]]],[13,[["$0","Item1",Provider.EncodeArray(Provider.Id()),0],["$1","Item2",Provider.Id(),0]]],[14,[["$0","name",Provider.Id(),0],["$1","action",Provider.Id(),0],["$2","parms",Provider.EncodeArray(Provider.Id()),0]]]]))();
 };
 FSharpStation_JsonEncoder.j$1=function()
 {
  return FSharpStation_JsonEncoder._v$1?FSharpStation_JsonEncoder._v$1:FSharpStation_JsonEncoder._v$1=(Provider.EncodeUnion(CodeSnippetId,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 FSharpStation_JsonEncoder.j$4=function()
 {
  return FSharpStation_JsonEncoder._v$4?FSharpStation_JsonEncoder._v$4:FSharpStation_JsonEncoder._v$4=(Provider.EncodeUnion(void 0,"$",[[0,[["$0","Item",Provider.Id(),0]]],[1,[["$0","Item",Provider.Id(),1]]],[2,[["$0","Item",FSharpStation_JsonEncoder.j$3,1]]],[3,[["$0","Item",Provider.EncodeArray(FSharpStation_JsonEncoder.j$3),0]]],[4,[["$0","Item1",Provider.Id(),1],["$1","Item2",Provider.EncodeArray(Provider.EncodeTuple([Provider.Id(),FSharpStation_JsonEncoder.j$5])),0]]]]))();
 };
 FSharpStation_JsonEncoder.j$5=function()
 {
  return FSharpStation_JsonEncoder._v$5?FSharpStation_JsonEncoder._v$5:FSharpStation_JsonEncoder._v$5=(Provider.EncodeUnion(void 0,"$",[[0,[]],[1,[]],[2,[]]]))();
 };
 FSharpStation_JsonDecoder.j$5=function()
 {
  return FSharpStation_JsonDecoder._v$5?FSharpStation_JsonDecoder._v$5:FSharpStation_JsonDecoder._v$5=(Provider.DecodeUnion(void 0,"$",[[0,[]],[1,[["$0","Item",Provider.Id(),0]]],[2,[["$0","Item",FSharpStation_JsonDecoder.j$3,0]]],[3,[["$0","Item",FSharpStation_JsonDecoder.j$3,0]]],[4,[["$0","Item",FSharpStation_JsonDecoder.j$3,0]]],[5,[["$0","Item",FSharpStation_JsonDecoder.j$3,0]]],[6,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]],[7,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]],[8,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]],[9,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]],[10,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]],[11,[]],[12,[["$0","Item1",FSharpStation_JsonDecoder.j$3,0],["$1","Item2",Provider.Id(),0]]],[13,[["$0","Item1",Provider.DecodeArray(Provider.Id()),0],["$1","Item2",Provider.Id(),0]]],[14,[["$0","name",Provider.Id(),0],["$1","action",Provider.Id(),0],["$2","parms",Provider.DecodeArray(Provider.Id()),0]]]]))();
 };
 GeneratedPrintf.p$22=function($1)
 {
  return"{"+("text = "+FSharpStation_GeneratedPrintf.p$6($1.text))+"; "+("highlight = "+FSharpStation_GeneratedPrintf.p$8($1.highlight))+"; "+("disabled = "+FSharpStation_GeneratedPrintf.p$8($1.disabled))+"; "+("toolTip = "+FSharpStation_GeneratedPrintf.p$10($1.toolTip))+"; "+("onClick = "+FSharpStation_GeneratedPrintf.p$11($1.onClick))+"; "+("parms = "+FSharpStation_GeneratedPrintf.p$5($1.parms))+"}";
 };
 FSharpStation_GeneratedPrintf.p$11=function($1)
 {
  return $1==null?"null":"Some <fun>";
 };
 FSharpStation_GeneratedPrintf.p$10=function($1)
 {
  return $1==null?"null":"Some "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$8=function($1)
 {
  return $1.$==2?"Dynamic "+FSharpStation_GeneratedPrintf.p$9($1.$0):$1.$==1?"DynamicV "+Utils.prettyPrint($1.$0):"Constant "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$9=function($1)
 {
  return"V <fun>";
 };
 FSharpStation_GeneratedPrintf.p$6=function($1)
 {
  return $1.$==2?"Dynamic "+FSharpStation_GeneratedPrintf.p$7($1.$0):$1.$==1?"DynamicV "+Utils.prettyPrint($1.$0):"Constant "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$7=function($1)
 {
  return"V <fun>";
 };
 FSharpStation_GeneratedPrintf.p$5=function($1)
 {
  return $1==null?"null":"Some "+Utils.printArray(Utils.prettyPrint,$1.$0);
 };
 FSharpStation_GeneratedPrintf.p$4=function($1)
 {
  return $1.$==17?"KMultiple "+Utils.printArray(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$4($2);
  },$1.$0):$1.$==16?"KUnionCase "+GeneratedPrintf.p$21($1.$0):$1.$==15?"KNamespaces "+GeneratedPrintf.p$18($1.$0):$1.$==14?"KCompilerLocation "+GeneratedPrintf.p$17($1.$0):$1.$==13?"KSignatureData "+GeneratedPrintf.p$15($1.$0):$1.$==12?"KTypeSig "+Utils.prettyPrint($1.$0):$1.$==11?"KToolTip "+Utils.printArray(function($2)
  {
   return Utils.printArray(function($3)
   {
    return GeneratedPrintf.p$2($3);
   },$2);
  },$1.$0):$1.$==10?"KDeclarations "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$13($2);
  },$1.$0):$1.$==9?"KFindDecl "+GeneratedPrintf.p$12($1.$0):$1.$==8?"KColorizations "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$11($2);
  },$1.$0):$1.$==7?"KErrors "+GeneratedPrintf.p$9($1.$0):$1.$==6?"KMethod "+GeneratedPrintf.p$6($1.$0):$1.$==5?"KHelp "+Utils.prettyPrint($1.$0):$1.$==4?"KSymbolUse "+GeneratedPrintf.p$4($1.$0):$1.$==3?"KCompletion "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$3($2);
  },$1.$0):$1.$==2?"KHelpText "+GeneratedPrintf.p$1($1.$0):$1.$==1?"KError "+GeneratedPrintf.p($1.$0):"KInfo "+Utils.prettyPrint($1.$0);
 };
 GeneratedPrintf.p$21=function($1)
 {
  return"{"+("Text = "+Utils.prettyPrint($1.Text))+"}";
 };
 GeneratedPrintf.p$18=function($1)
 {
  return"{"+("Opens = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$19($2);
  },$1.Opens))+"; "+("Qualifies = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$20($2);
  },$1.Qualifies))+"; "+("Word = "+Utils.prettyPrint($1.Word))+"}";
 };
 GeneratedPrintf.p$20=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Qualifier = "+Utils.prettyPrint($1.Qualifier))+"}";
 };
 GeneratedPrintf.p$19=function($1)
 {
  return"{"+("Namespace = "+Utils.prettyPrint($1.Namespace))+"; "+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Type = "+Utils.prettyPrint($1.Type))+"; "+("Line = "+Utils.prettyPrint($1.Line))+"; "+("Column = "+Utils.prettyPrint($1.Column))+"; "+("MultipleNames = "+Utils.prettyPrint($1.MultipleNames))+"}";
 };
 GeneratedPrintf.p$17=function($1)
 {
  return"{"+("Fsc = "+Utils.prettyPrint($1.Fsc))+"; "+("Fsi = "+Utils.prettyPrint($1.Fsi))+"; "+("MSBuild = "+Utils.prettyPrint($1.MSBuild))+"}";
 };
 GeneratedPrintf.p$15=function($1)
 {
  return"{"+("OutputType = "+Utils.prettyPrint($1.OutputType))+"; "+("Parameters = "+Utils.printList(function($2)
  {
   return Utils.printList(function($3)
   {
    return GeneratedPrintf.p$16($3);
   },$2);
  },$1.Parameters))+"}";
 };
 GeneratedPrintf.p$16=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Type = "+Utils.prettyPrint($1.Type))+"}";
 };
 GeneratedPrintf.p$13=function($1)
 {
  return"{"+("Declaration = "+GeneratedPrintf.p$14($1.Declaration))+"; "+("Nested = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$14($2);
  },$1.Nested))+"}";
 };
 GeneratedPrintf.p$14=function($1)
 {
  return"{"+("UniqueName = "+Utils.prettyPrint($1.UniqueName))+"; "+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Glyph = "+Utils.prettyPrint($1.Glyph))+"; "+("GlyphChar = "+Utils.prettyPrint($1.GlyphChar))+"; "+("IsTopLevel = "+Utils.prettyPrint($1.IsTopLevel))+"; "+("File = "+Utils.prettyPrint($1.File))+"; "+("EnclosingEntity = "+Utils.prettyPrint($1.EnclosingEntity))+"; "+("IsAbstract = "+Utils.prettyPrint($1.IsAbstract))+"}";
 };
 GeneratedPrintf.p$12=function($1)
 {
  return"{"+("File = "+Utils.prettyPrint($1.File))+"; "+("Line = "+Utils.prettyPrint($1.Line))+"; "+("Column = "+Utils.prettyPrint($1.Column))+"}";
 };
 GeneratedPrintf.p$11=function($1)
 {
  return"{"+("Kind = "+Utils.prettyPrint($1.Kind))+"}";
 };
 GeneratedPrintf.p$9=function($1)
 {
  return"{"+("File = "+Utils.prettyPrint($1.File))+"; "+("Errors = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$10($2);
  },$1.Errors))+"}";
 };
 GeneratedPrintf.p$10=function($1)
 {
  return"{"+("FileName = "+Utils.prettyPrint($1.FileName))+"; "+("StartLine = "+Utils.prettyPrint($1.StartLine))+"; "+("EndLine = "+Utils.prettyPrint($1.EndLine))+"; "+("StartColumn = "+Utils.prettyPrint($1.StartColumn))+"; "+("EndColumn = "+Utils.prettyPrint($1.EndColumn))+"; "+("Message = "+Utils.prettyPrint($1.Message))+"; "+("Subcategory = "+Utils.prettyPrint($1.Subcategory))+"}";
 };
 GeneratedPrintf.p$6=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("CurrentParameter = "+Utils.prettyPrint($1.CurrentParameter))+"; "+("Overloads = "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$7($2);
  },$1.Overloads))+"}";
 };
 GeneratedPrintf.p$7=function($1)
 {
  return"{"+("Tip = "+Utils.printList(function($2)
  {
   return Utils.printList(function($3)
   {
    return GeneratedPrintf.p$2($3);
   },$2);
  },$1.Tip))+"; "+("TypeText = "+Utils.prettyPrint($1.TypeText))+"; "+("Parameters = "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$8($2);
  },$1.Parameters))+"; "+("IsStaticArguments = "+Utils.prettyPrint($1.IsStaticArguments))+"}";
 };
 GeneratedPrintf.p$8=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("CanonicalTypeTextForSorting = "+Utils.prettyPrint($1.CanonicalTypeTextForSorting))+"; "+("Display = "+Utils.prettyPrint($1.Display))+"; "+("Description = "+Utils.prettyPrint($1.Description))+"}";
 };
 GeneratedPrintf.p$4=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Uses = "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$5($2);
  },$1.Uses))+"}";
 };
 GeneratedPrintf.p$5=function($1)
 {
  return"{"+("FileName = "+Utils.prettyPrint($1.FileName))+"; "+("StartLine = "+Utils.prettyPrint($1.StartLine))+"; "+("StartColumn = "+Utils.prettyPrint($1.StartColumn))+"; "+("EndLine = "+Utils.prettyPrint($1.EndLine))+"; "+("EndColumn = "+Utils.prettyPrint($1.EndColumn))+"; "+("IsFromDefinition = "+Utils.prettyPrint($1.IsFromDefinition))+"; "+("IsFromAttribute = "+Utils.prettyPrint($1.IsFromAttribute))+"; "+("IsFromComputationExpression = "+Utils.prettyPrint($1.IsFromComputationExpression))+"; "+("IsFromDispatchSlotImplementation = "+Utils.prettyPrint($1.IsFromDispatchSlotImplementation))+"; "+("IsFromPattern = "+Utils.prettyPrint($1.IsFromPattern))+"; "+("IsFromType = "+Utils.prettyPrint($1.IsFromType))+"}";
 };
 GeneratedPrintf.p$3=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("ReplacementText = "+Utils.prettyPrint($1.ReplacementText))+"; "+("Glyph = "+Utils.prettyPrint($1.Glyph))+"; "+("GlyphChar = "+Utils.prettyPrint($1.GlyphChar))+"}";
 };
 GeneratedPrintf.p$1=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Overloads = "+Utils.printList(function($2)
  {
   return Utils.printList(function($3)
   {
    return GeneratedPrintf.p$2($3);
   },$2);
  },$1.Overloads))+"}";
 };
 GeneratedPrintf.p$2=function($1)
 {
  return"{"+("Signature = "+Utils.prettyPrint($1.Signature))+"; "+("Comment = "+Utils.prettyPrint($1.Comment))+"}";
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("Code = "+Utils.prettyPrint($1.Code))+"; "+("Message = "+Utils.prettyPrint($1.Message))+"}";
 };
 FSharpStation_JsonEncoder.j$3=function()
 {
  return FSharpStation_JsonEncoder._v$3?FSharpStation_JsonEncoder._v$3:FSharpStation_JsonEncoder._v$3=(Provider.EncodeRecord(CodeSnippet,[["name",Provider.Id(),0],["content",Provider.Id(),0],["parent",FSharpStation_JsonEncoder.j$1,1],["predecessors",Provider.EncodeList(FSharpStation_JsonEncoder.j$1),0],["id",FSharpStation_JsonEncoder.j$1,0],["expanded",Provider.Id(),0],["level",Provider.Id(),0],["levelCode",Provider.Id(),0],["properties",Provider.EncodeStringDictionary(Provider.Id()),0]]))();
 };
 FSharpStation_GeneratedPrintf.p$3=function($1)
 {
  return"CodeSnippetId "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_JsonEncoder.j$2=function()
 {
  return FSharpStation_JsonEncoder._v$2?FSharpStation_JsonEncoder._v$2:FSharpStation_JsonEncoder._v$2=(Provider.EncodeUnion(void 0,"$",[[0,[]],[1,[]],[2,[]],[3,[]]]))();
 };
 FSharpStation_JsonDecoder.j$4=function()
 {
  return FSharpStation_JsonDecoder._v$4?FSharpStation_JsonDecoder._v$4:FSharpStation_JsonDecoder._v$4=(Provider.DecodeUnion(void 0,"$",[[0,[]],[1,[]],[2,[]],[3,[]]]))();
 };
 FSharpStation_JsonDecoder.j$6=function()
 {
  return FSharpStation_JsonDecoder._v$6?FSharpStation_JsonDecoder._v$6:FSharpStation_JsonDecoder._v$6=(Provider.DecodeUnion(void 0,"$",[[0,[["$0","Item",Provider.Id(),0]]],[1,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]]]))();
 };
 FSharpStation_JsonEncoder.j$6=function()
 {
  return FSharpStation_JsonEncoder._v$6?FSharpStation_JsonEncoder._v$6:FSharpStation_JsonEncoder._v$6=(Provider.EncodeUnion(void 0,"$",[[0,[]],[1,[["$0","Item",Provider.Id(),0]]],[2,[]],[3,[]],[4,[]]]))();
 };
 FSharpStation_JsonDecoder.j$7=function()
 {
  return FSharpStation_JsonDecoder._v$7?FSharpStation_JsonDecoder._v$7:FSharpStation_JsonDecoder._v$7=(Provider.DecodeRecord(void 0,[["GuiRoot",Provider.Id(),1],["GuiTabStrip",Provider.DecodeTuple([Provider.Id(),Provider.DecodeArray(Provider.Id())]),1],["GuiSplit",Provider.DecodeTuple([Provider.Id(),Provider.Id(),Provider.Id(),Provider.Id(),Provider.Id(),Provider.Id(),Provider.Id(),Provider.Id()]),1],["GuiNode",FSharpStation_JsonDecoder.j$8,1],["GuiCall",Provider.DecodeTuple([Provider.Id(),Provider.Id(),Provider.DecodeArray(Provider.Id())]),1]]))();
 };
 FSharpStation_JsonDecoder.j$8=function()
 {
  return FSharpStation_JsonDecoder._v$8?FSharpStation_JsonDecoder._v$8:FSharpStation_JsonDecoder._v$8=(Provider.DecodeRecord(void 0,[["HtmlElementF",Provider.DecodeTuple([Provider.Id(),Provider.DecodeArray(FSharpStation_JsonDecoder.j$8)]),1],["HtmlAttributeF",Provider.DecodeTuple([Provider.Id(),Provider.Id()]),1],["HtmlAttributeOF",Provider.DecodeTuple([Provider.Id(),FSharpStation_JsonDecoder.j$9]),1],["HtmlTextF",Provider.Id(),1],["HtmlEmptyF",Provider.Id(),1],["HtmlGuiPart",Provider.Id(),1],["HtmlGuiCall",Provider.DecodeTuple([Provider.Id(),Provider.Id(),Provider.DecodeArray(Provider.Id())]),1]]))();
 };
 FSharpStation_JsonDecoder.j$9=function()
 {
  return FSharpStation_JsonDecoder._v$9?FSharpStation_JsonDecoder._v$9:FSharpStation_JsonDecoder._v$9=(Provider.DecodeUnion(void 0,"$",[null,[1,[["$0","Value",Provider.Id(),0]]]]))();
 };
 FSharpStation_GeneratedPrintf.p=function($1)
 {
  return $1.$==2?"FSInfor":$1.$==1?"FSWarning":"FSError";
 };
 FSharpStation_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==1?"Snippet Not Found "+Utils.prettyPrint($1.$0):"FSMessage ("+Utils.prettyPrint($1.$0)+", "+FSharpStation_GeneratedPrintf.p($1.$1)+")";
 };
 FSharpStation_GeneratedPrintf.p$2=function($1)
 {
  return $1.$==2?"Could not open new browser, Popup blocker may be active":$1.$==1?"Snippet Missing":"JsCompilerMsg ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")";
 };
}());
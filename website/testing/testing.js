CIPHERSpaceLoadFilesDoAfter(function() { IntelliFactory.Runtime.Start() });
CIPHERSpaceLoadFiles(["/Scripts/WebSharper/WebSharper.Core.JavaScript/Runtime.js", "/Scripts/WebSharper/WebSharper.Main.js", "/Scripts/WebSharper/WebSharper.Collections.js", "/Scripts/WebSharper/WebSharper.Web.js", "/Scripts/WebSharper/WebSharper.Sitelets.js", "/Scripts/WebSharper/WebSharper.Control.js", "/Scripts/WebSharper/WebSharper.UI.js", "/Scripts/WebSharper/WebSharper.UI.Templating.Runtime.js"], function()
{
 "use strict";
 var Global,FsRoot,Library,ResultMessage,ResultMessageHelpers,Monads,Seq,WebSharper,Obj,Result,Builder,Operators,Eff,Eff$1,Done,LambdaT,Operators$1,EffBuilder,Reader,Ask,Rsl,Fail,EffReaderRsl,TreeEff,Node,LibraryJS,View,REGEX,TestingJS,TreeEff$1,SnippetId,Snippet,SnippetCollection,SnippetModule,Window,SC$1,_DAbeCIPHERWorkspaceFSharpStationsrcwsconfig$json_GeneratedPrintf,IntelliFactory,Runtime,Utils,Strings,Seq$1,Arrays,Enumerator,Result$1,List,Operators$2,Unchecked,UI,View$1,Slice,System,Guid,Collections,FSharpSet,FromView,Var$1,Doc,AttrProxy,Client,Templates,ListModel,Dictionary;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 ResultMessage=Library.ResultMessage=Library.ResultMessage||{};
 ResultMessageHelpers=Library.ResultMessageHelpers=Library.ResultMessageHelpers||{};
 Monads=Library.Monads=Library.Monads||{};
 Seq=Monads.Seq=Monads.Seq||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 Operators=Result.Operators=Result.Operators||{};
 Eff=Monads.Eff=Monads.Eff||{};
 Eff$1=Eff.Eff=Eff.Eff||{};
 Done=Eff.Done=Eff.Done||{};
 LambdaT=Eff$1.LambdaT=Eff$1.LambdaT||{};
 Operators$1=Eff.Operators=Eff.Operators||{};
 EffBuilder=Eff.EffBuilder=Eff.EffBuilder||{};
 Reader=Eff.Reader=Eff.Reader||{};
 Ask=Reader.Ask=Reader.Ask||{};
 Rsl=Eff.Rsl=Eff.Rsl||{};
 Fail=Rsl.Fail=Rsl.Fail||{};
 EffReaderRsl=Monads.EffReaderRsl=Monads.EffReaderRsl||{};
 TreeEff=Library.TreeEff=Library.TreeEff||{};
 Node=TreeEff.Node=TreeEff.Node||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 View=LibraryJS.View=LibraryJS.View||{};
 REGEX=LibraryJS.REGEX=LibraryJS.REGEX||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 TreeEff$1=TestingJS.TreeEff=TestingJS.TreeEff||{};
 SnippetId=TreeEff$1.SnippetId=TreeEff$1.SnippetId||{};
 Snippet=TreeEff$1.Snippet=TreeEff$1.Snippet||{};
 SnippetCollection=TreeEff$1.SnippetCollection=TreeEff$1.SnippetCollection||{};
 SnippetModule=TreeEff$1.SnippetModule=TreeEff$1.SnippetModule||{};
 Window=TestingJS.Window=TestingJS.Window||{};
 SC$1=Global["StartupCode$D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src\\wsconfig_json$testing"]=Global["StartupCode$D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src\\wsconfig_json$testing"]||{};
 _DAbeCIPHERWorkspaceFSharpStationsrcwsconfig$json_GeneratedPrintf=Global["D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src\\wsconfig$json_GeneratedPrintf"]=Global["D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src\\wsconfig$json_GeneratedPrintf"]||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Utils=WebSharper&&WebSharper.Utils;
 Strings=WebSharper&&WebSharper.Strings;
 Seq$1=WebSharper&&WebSharper.Seq;
 Arrays=WebSharper&&WebSharper.Arrays;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 Result$1=WebSharper&&WebSharper.Result;
 List=WebSharper&&WebSharper.List;
 Operators$2=WebSharper&&WebSharper.Operators;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 UI=WebSharper&&WebSharper.UI;
 View$1=UI&&UI.View;
 Slice=WebSharper&&WebSharper.Slice;
 System=Global.System;
 Guid=System&&System.Guid;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpSet=Collections&&Collections.FSharpSet;
 FromView=UI&&UI.FromView;
 Var$1=UI&&UI.Var$1;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 ListModel=UI&&UI.ListModel;
 Dictionary=Collections&&Collections.Dictionary;
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
  return ResultMessage.summaryF(f,msg)+Global.String(msg);
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
   return Library.Error(f(x));
  }():o.$0;
 };
 Result.get=function(r)
 {
  return Result.defaultWith(function(x)
  {
   return Operators$2.FailWith(Global.String(x));
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
     $:5,
     $0:e.message,
     $1:e.stack
    }));
   }
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
 Result.rtn=function(a)
 {
  return{
   $:0,
   $0:a
  };
 };
 Result.freeMessage=function(r)
 {
  return r.$==1?Library.Error(ResultMessage.freeMessage(r.$0)):{
   $:0,
   $0:r.$0
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
   }:Library.Error((ResultMessageHelpers.errorMsgf(function($1)
   {
    return function($2)
    {
     return $1("Unhandled effect "+Utils.prettyPrint($2)+" expecting");
    };
   }))(m));
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
  }(Operators$2.FailWith))(m);
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
 Operators$1.rtn=function(v)
 {
  return Eff.rtn(v);
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
  return Eff.bind(f,v);
 };
 Operators$1.op_BarGreaterGreater=function(v,f)
 {
  return Eff.map(f,v);
 };
 Operators$1.op_LessMultiplyGreater=function(f,v)
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
    },body$1()):Operators$1.rtn();
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
   return Operators$1.rtn(v);
  },
  Zero:function()
  {
   return Operators$1.rtn();
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
   }):a instanceof Fail?doneK(Library.Error(a.get_Value())):Eff$1.unpack(function($1)
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
  },vvR.$0):Operators$1.rtn(Library.Error(vvR.$0));
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
  return o==null?Operators$1.rtn(null):o.$0;
 };
 Eff.sequenceSeq=function(sq)
 {
  return Eff.traverseSeq(Global.id,sq);
 };
 Eff.traverseSeq=function(f,sq)
 {
  return Eff.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return Operators$1.op_GreaterGreaterEquals(f(head),function(h)
   {
    return Operators$1.op_GreaterGreaterEquals(tail,function(t)
    {
     return Operators$1.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Operators$1.rtn(List.T.Empty)));
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
 EffReaderRsl.iter=function(fM,f,v,m)
 {
  Result.iter(fM,Global.ignore,EffReaderRsl.run(v,Eff.map(f,m)));
 };
 EffReaderRsl.run=function(rsc,Ef)
 {
  return Eff$1.run(Rsl.RslHandler(Reader.readerHandler(rsc,Ef)));
 };
 Node.New=function(id,isExpandedEf,canHaveChildrenEf,childrenEf,pathEf,parentOEf,newChildrenEf)
 {
  return{
   id:id,
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
   return Operators$1.op_GreaterGreaterEquals(nodes$1,function(n)
   {
    return TreeEff.outdentNode(node$1,n);
   });
  }
  return Operators$1.op_GreaterGreaterEquals(Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(node.childrenEf(),Arrays.ofSeq),(s=Operators$1.rtn(nodes),function(s$1)
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
  return Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(node.parentOEf(nodes),function(o)
  {
   return o==null?null:{
    $:1,
    $0:m(o.$0)
   };
  }),(v=Operators$1.rtn(nodes),function(o)
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
   return Operators$1.op_GreaterGreaterEquals(n.canHaveChildrenEf(),function(can)
   {
    return can?Operators$1.rtn({
     $:1,
     $0:n
    }):newParentOEf;
   });
  }
  return Operators$1.op_GreaterGreaterEquals(Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_GreaterGreaterEquals(node.parentOEf(nodes),function(a)
  {
   return a!=null&&a.$==1?Operators$1.op_BarGreaterGreater(a.$0.childrenEf(),function(x)
   {
    var s$1;
    s$1=Arrays.ofSeq(x);
    return s$1;
   }):Operators$1.rtn(nodes);
  }),function(s$1)
  {
   return Seq$1.takeWhile(p,s$1);
  }),(s=Operators$1.rtn(null),function(s$1)
  {
   return Seq$1.fold(f,s,s$1);
  })),function(a)
  {
   var newParent;
   return a!=null&&a.$==1?(newParent=a.$0,Operators$1.op_GreaterGreaterEquals(TreeEff.removeNode(node,nodes),function(n)
   {
    return TreeEff.addChild(true,node,newParent,n);
   })):Operators$1.rtn(nodes);
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
     return Unchecked.Equals(n.id(),parentN.id())?append?Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(n.childrenEf(),Arrays.ofSeq),(a$1=List.ofArray([node]),function(b$1)
     {
      return Seq$1.append(b$1,a$1);
     })),Arrays.ofSeq),n.newChildrenEf):Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(n.childrenEf(),Arrays.ofSeq),(s=List.ofArray([node]),function(s$1)
     {
      return Seq$1.append(s,s$1);
     })),Arrays.ofSeq),n.newChildrenEf):List.contains(n.id(),a)?Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(n.childrenEf(),Arrays.ofSeq),function(s$1)
     {
      return Seq$1.map(mapAppend,s$1);
     }),Eff.sequenceSeq),Arrays.ofSeq),n.newChildrenEf):Operators$1.rtn(n);
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
  return Operators$1.op_GreaterGreaterEquals(TreeEff.removeNode(node,nodes),function(n)
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
   return Operators$1.op_GreaterGreaterEquals(resEf,function(a)
   {
    var s;
    return a==null?p(node)?Operators$1.rtn({
     $:1,
     $0:node
    }):Operators$1.op_GreaterGreaterEquals(node.childrenEf(),(s=Operators$1.rtn(null),function(s$1)
    {
     return Seq$1.fold(folder,s,s$1);
    })):Operators$1.rtn({
     $:1,
     $0:a.$0
    });
   });
  }
  return Seq$1.fold(folder,Operators$1.rtn(null),nodes);
 };
 TreeEff.addSibling=function(after,node,sibling,nodes)
 {
  function theSibling(n)
  {
   return Unchecked.Equals(n.id(),sibling.id());
  }
  return Operators$1.op_GreaterGreaterEquals(sibling.pathEf(),function(a)
  {
   var path,parent;
   function mapAdd(n)
   {
    return Unchecked.Equals(n.id(),parent)?Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(n.childrenEf(),Arrays.ofSeq),function(n$1)
    {
     return TreeEff.addToParent(after,theSibling,node,n,n$1);
    }):List.contains(n.id(),path)?Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(n.childrenEf(),Arrays.ofSeq),function(s)
    {
     return Seq$1.map(mapAdd,s);
    }),Eff.sequenceSeq),Arrays.ofSeq),n.newChildrenEf):Operators$1.rtn(n);
   }
   return a.$==1?(path=a.$1,(parent=a.$0,Eff.sequenceSeq(Seq$1.map(mapAdd,nodes)))):Operators$1.rtn(TreeEff.addNodeToSeq(after,theSibling,node,nodes));
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
      return b$1.Bind(Operators$1.op_BarGreaterGreater(n.childrenEf(),Arrays.ofSeq),function(a$1)
      {
       return b$1.Bind(Seq$1.fold(folder,Operators$1.rtn([List.T.Empty,noparent]),a$1),function(a$2)
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
   return b.Bind(Seq$1.fold(folder,Operators$1.rtn([List.T.Empty,List.T.Empty]),nodes),function(a)
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
      return Unchecked.Equals(n.id(),node.id())?b$1.Return(null):List.contains(n.id(),a)?b$1.ReturnFrom(Operators$1.op_BarGreaterGreater(Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(n.childrenEf(),Arrays.ofSeq),function(s)
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
      })):b$1.Return({
       $:1,
       $0:n
      });
     });
    }
    return b.ReturnFrom(Operators$1.op_BarGreaterGreater(Eff.sequenceSeq(Seq$1.map(chRemove,nodes)),function(s)
    {
     return Seq$1.choose(Global.id,s);
    }));
   });
  });
 };
 TreeEff.listNodes=function(level,nodes)
 {
  return Operators$1.op_BarGreaterGreater(Eff.sequenceSeq(Seq$1.map(function(node)
  {
   return Operators$1.op_BarGreaterGreater(Operators$1.op_GreaterGreaterEquals(node.isExpandedEf(),function(exp)
   {
    var l;
    return exp?Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(node.childrenEf(),Arrays.ofSeq),(l=level+1,function(n)
    {
     return TreeEff.listNodes(l,n);
    })):Operators$1.rtn([]);
   }),function(nodes$1)
   {
    return Seq$1.append([[node,level]],nodes$1);
   });
  },nodes)),function(s)
  {
   return Seq$1.collect(Global.id,s);
  });
 };
 Library.Error=function(a)
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
 SnippetId=TreeEff$1.SnippetId=Runtime.Class({
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
 Snippet.New=function(snpId,snpName,snpContent,snpParentIdO)
 {
  return{
   snpId:snpId,
   snpName:snpName,
   snpContent:snpContent,
   snpParentIdO:snpParentIdO
  };
 };
 SnippetCollection.New=function(ordered,fetcher)
 {
  return{
   ordered:ordered,
   fetcher:fetcher
  };
 };
 SnippetModule.ancestorsEf=function(snp)
 {
  function ancestorsEf2(snp$1,lst)
  {
   var b;
   b=Eff.eff();
   return b.Delay(function()
   {
    return b.Bind(SnippetModule.parentOEf(snp$1),function(a)
    {
     var p;
     return a==null?b.Return(lst):(p=a.$0,b.ReturnFrom(ancestorsEf2(p,new List.T({
      $:1,
      $0:p,
      $1:lst
     }))));
    });
   });
  }
  return ancestorsEf2(snp,List.T.Empty);
 };
 SnippetModule.levelEf=function(snp)
 {
  function levelEf2(snp$1,lv)
  {
   var b;
   b=Eff.eff();
   return b.Delay(function()
   {
    return b.Bind(SnippetModule.parentOEf(snp$1),function(a)
    {
     return a!=null&&a.$==1?b.ReturnFrom(levelEf2(a.$0,lv+1)):b.Return(lv);
    });
   });
  }
  return levelEf2(snp,0);
 };
 SnippetModule.snippetFromPathOEf=function(pth)
 {
  var b;
  b=Eff.eff();
  return b.Delay(function()
  {
   return b.Bind(SnippetModule.orderedEf(),function(a)
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
  });
 };
 SnippetModule.pathEf=function(sid)
 {
  var v;
  function m(prn)
  {
   return Operators$1.op_BarGreaterGreater(SnippetModule.pathEf(prn.snpId),function(rest)
   {
    return new List.T({
     $:1,
     $0:prn.snpId,
     $1:rest
    });
   });
  }
  return Operators$1.op_BarGreaterGreater(Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(SnippetModule.snippetOEf(sid),function(o)
  {
   return o==null?null:{
    $:1,
    $0:SnippetModule.parentOEf(o.$0)
   };
  }),Eff.insertO),function(o)
  {
   return o==null?null:Global.id(o.$0);
  }),function(o)
  {
   return o==null?null:{
    $:1,
    $0:m(o.$0)
   };
  }),Eff.insertO),(v=List.T.Empty,function(o)
  {
   return o==null?v:o.$0;
  }));
 };
 SnippetModule.snippetNameEf=function(sid)
 {
  return Operators$1.op_BarGreaterGreater(SnippetModule.snippetEf(sid),function(snp)
  {
   return SnippetModule.snippetName(snp.snpName,snp.snpContent);
  });
 };
 SnippetModule.snippetEf=function(sid)
 {
  return Rsl.absorbO(function()
  {
   return new ResultMessage({
    $:1,
    $0:(function($1)
    {
     return function($2)
     {
      return $1("Snippet not found "+_DAbeCIPHERWorkspaceFSharpStationsrcwsconfig$json_GeneratedPrintf.p($2));
     };
    }(Global.id))(sid)
   });
  },SnippetModule.snippetOEf(sid));
 };
 SnippetModule.orderedEf=function()
 {
  return TreeEff$1.readerFun(function(a)
  {
   return a.ordered;
  });
 };
 SnippetModule.childrenEf=function(sid)
 {
  return TreeEff$1.readerFun(function(a)
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
 SnippetModule.parentOEf=function(snp)
 {
  return TreeEff$1.readerFun(function(a)
  {
   var o;
   o=snp.snpParentIdO;
   return o==null?null:a.fetcher(o.$0);
  });
 };
 SnippetModule.snippetOEf=function(sid)
 {
  return TreeEff$1.readerFun(function(a)
  {
   return a.fetcher(sid);
  });
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
  }),name,content,parentO);
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
 TreeEff$1.expandParents=function(snpId)
 {
  TreeEff$1.iterReader(Operators$1.op_BarGreaterGreater(SnippetModule.pathEf(snpId),function(path)
  {
   var a;
   a=FSharpSet.op_Subtraction(TreeEff$1.collapsedV().Get(),new FSharpSet.New(path));
   TreeEff$1.collapsedV().Set(a);
  }));
 };
 TreeEff$1.toggleCollapse=function(snpId)
 {
  var a;
  a=((TreeEff$1.collapsedV().Get().Contains(snpId)?function(v)
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
  })(snpId))(TreeEff$1.collapsedV().Get());
  TreeEff$1.collapsedV().Set(a);
 };
 TreeEff$1.newSnippet=function(a)
 {
  var snp;
  snp=SnippetModule.New("","",null);
  TreeEff$1.iterReader(Operators$1.op_BarGreaterGreater(TreeEff$1.addSnippetEf(snp),function()
  {
   TreeEff$1.currentSnippetIdOV().Set({
    $:1,
    $0:snp.snpId
   });
  }));
 };
 TreeEff$1.addSnippetEf=function(snp)
 {
  var hier,x,o;
  TreeEff$1.snippets().Append(snp);
  hier=(x=TreeEff$1.hierarchy().Get(),Seq$1.append([TreeEff$1.treenode(snp.snpId)],x));
  return Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(Eff.insertO((o=TreeEff$1.currentSnippetIdOV().Get(),o==null?null:{
   $:1,
   $0:SnippetModule.snippetOEf(o.$0)
  })),function(o$1)
  {
   return o$1==null?null:Global.id(o$1.$0);
  }),function(a)
  {
   return a!=null&&a.$==1?TreeEff.moveToSibling2(true,snp.snpId,a.$0.snpId,hier):Operators$1.rtn(hier);
  }),Arrays.ofSeq),function(a)
  {
   TreeEff$1.hierarchy().Set(a);
  });
 };
 TreeEff$1.setSnippetsGen=function(snps,coll)
 {
  function m(snp)
  {
   return TreeEff$1.treenode(snp.snpId);
  }
  TreeEff$1.collapsedV().Set(coll);
  TreeEff$1.snippets().Set(snps);
  TreeEff$1.iterReader(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(Eff.sequenceSeq(Seq$1.map(function(snp)
  {
   return Operators$1.op_BarGreaterGreater(SnippetModule.parentOEf(snp),function(a)
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
   TreeEff$1.hierarchy().Set(a);
  }));
 };
 TreeEff$1.moveNode=function(fnid,tnid)
 {
  TreeEff$1.iterReader(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(TreeEff.moveToSibling2(false,fnid,tnid,TreeEff$1.hierarchy().Get()),Arrays.ofSeq),function(a)
  {
   TreeEff$1.hierarchy().Set(a);
  }));
 };
 TreeEff$1.indentOut=function(a)
 {
  var o,x;
  o=TreeEff$1.currentSnippetIdOV().Get();
  o==null?void 0:TreeEff$1.iterReader(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater((x=TreeEff$1.hierarchy().Get(),TreeEff.outdentNode(TreeEff$1.treenode(o.$0),x)),Arrays.ofSeq),function(a$1)
  {
   TreeEff$1.hierarchy().Set(a$1);
  }));
 };
 TreeEff$1.indentIn=function(a)
 {
  var o,x;
  o=TreeEff$1.currentSnippetIdOV().Get();
  o==null?void 0:TreeEff$1.iterReader(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater((x=TreeEff$1.hierarchy().Get(),TreeEff.indentNode(TreeEff$1.treenode(o.$0),x)),Arrays.ofSeq),function(a$1)
  {
   TreeEff$1.hierarchy().Set(a$1);
  }));
 };
 TreeEff$1.deleteCurrentSnippet=function(a)
 {
  var o,snpId,x;
  o=TreeEff$1.currentSnippetIdOV().Get();
  o==null?void 0:(snpId=o.$0,TreeEff$1.iterReader(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater((x=TreeEff$1.hierarchy().Get(),TreeEff.removeNodeOutdentChildren(TreeEff$1.treenode(snpId),x)),Arrays.ofSeq),function(a$1)
  {
   TreeEff$1.hierarchy().Set(a$1);
  }),function()
  {
   TreeEff$1.snippets().RemoveByKey(snpId);
  })));
 };
 TreeEff$1.expandClassW=function(snpId)
 {
  var x;
  x=TreeEff$1.snippets().v;
  return View$1.Map2(function()
  {
   return TreeEff$1.runReader(TreeEff$1.handleError,TreeEff$1.expandClassEf(snpId));
  },TreeEff$1.collapsedV().get_View(),x);
 };
 TreeEff$1.expandClassEf=function(snpId)
 {
  return Operators$1.op_GreaterGreaterEquals(SnippetModule.childrenEf(snpId),function(chs)
  {
   return Seq$1.isEmpty(chs)?Operators$1.rtn(""):Operators$1.op_BarGreaterGreater(TreeEff$1.treenode(snpId).isExpandedEf(),function(exp)
   {
    return exp?"expanded":"collapsed";
   });
  });
 };
 TreeEff$1.treenode=function(snpId)
 {
  return Node.New(function()
  {
   return snpId;
  },function()
  {
   return Operators$1.rtn(!TreeEff$1.collapsedV().Get().Contains(snpId));
  },function()
  {
   return Operators$1.rtn(true);
  },function()
  {
   function m(snp)
   {
    return TreeEff$1.treenode(snp.snpId);
   }
   return Operators$1.op_BarGreaterGreater(SnippetModule.childrenEf(snpId),function(s)
   {
    return Seq$1.map(m,s);
   });
  },function()
  {
   return SnippetModule.pathEf(snpId);
  },function()
  {
   function b(x)
   {
    return x.snpParentIdO;
   }
   return Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(SnippetModule.snippetOEf(snpId),function(o)
   {
    return o==null?null:b(o.$0);
   }),function(o)
   {
    return o==null?null:{
     $:1,
     $0:TreeEff$1.treenode(o.$0)
    };
   });
  },function(ch)
  {
   return Operators$1.op_BarGreaterGreater(TreeEff$1.setChildrenEf(snpId,ch),function()
   {
    return TreeEff$1.treenode(snpId);
   });
  });
 };
 TreeEff$1.setChildrenEf=function(snpId,ch)
 {
  var b;
  b=Eff.eff();
  return b.Delay(function()
  {
   var chIds,p,others,descendants,index,a;
   chIds=Arrays.map(function(s)
   {
    return s.id();
   },ch);
   Seq$1.iter(function(s)
   {
    TreeEff$1.setSnippet(s);
   },Seq$1.map(function(s)
   {
    return Snippet.New(s.snpId,s.snpName,s.snpContent,{
     $:1,
     $0:snpId
    });
   },Seq$1.filter(function(s)
   {
    return!Unchecked.Equals(s.snpParentIdO,{
     $:1,
     $0:snpId
    })&&Arrays.contains(s.snpId,chIds);
   },TreeEff$1.snippets())));
   Seq$1.iter(function(s)
   {
    TreeEff$1.setSnippet(s);
   },Seq$1.map(function(s)
   {
    return Snippet.New(s.snpId,s.snpName,s.snpContent,null);
   },Seq$1.filter(function(s)
   {
    return Unchecked.Equals(s.snpParentIdO,{
     $:1,
     $0:snpId
    })&&!Arrays.contains(s.snpId,chIds);
   },TreeEff$1.snippets())));
   TreeEff$1.clearCaches();
   p=Arrays.partition(function(s)
   {
    return TreeEff$1.isDescendantOf(snpId,s.snpId);
   },Arrays.ofSeq((TreeEff$1.snippets())["var"].Get()));
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
        return TreeEff$1.isDescendantOf(chid,s.snpId);
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
   TreeEff$1.snippets().Set(a);
   return b.Zero();
  });
 };
 TreeEff$1.currentPathW=function()
 {
  SC$1.$cctor();
  return SC$1.currentPathW;
 };
 TreeEff$1.getHierarchyW=function()
 {
  SC$1.$cctor();
  return SC$1.getHierarchyW;
 };
 TreeEff$1.findSnippetV=function(snpId)
 {
  return new FromView.New(TreeEff$1.findSnippetW(snpId),function(s)
  {
   TreeEff$1.setSnippet(s);
  });
 };
 TreeEff$1.findSnippetW=function(snpId)
 {
  return View$1.Map(function(o)
  {
   var v;
   v=SnippetModule.defaultSnippet();
   return o==null?v:o.$0;
  },TreeEff$1.snippets().TryFindByKeyAsView(snpId));
 };
 TreeEff$1.codeSnippetClassW=function(snpId)
 {
  return View$1.Map(function($1)
  {
   return Unchecked.Equals({
    $:1,
    $0:snpId
   },$1)?"codeSnippet":"";
  },TreeEff$1.codeSnippetIdOV().get_View());
 };
 TreeEff$1.selectedClassW=function(snpId)
 {
  return View$1.Map(function($1)
  {
   return Unchecked.Equals({
    $:1,
    $0:snpId
   },$1)?"selected":"";
  },TreeEff$1.currentSnippetIdOV().get_View());
 };
 TreeEff$1.currentSnippetV=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetV;
 };
 TreeEff$1.codeSnippetW=function()
 {
  SC$1.$cctor();
  return SC$1.codeSnippetW;
 };
 TreeEff$1.currentSnippetW=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetW;
 };
 TreeEff$1.CurrentSnippetIdW=function()
 {
  SC$1.$cctor();
  return SC$1.CurrentSnippetIdW;
 };
 TreeEff$1.isDescendantOf=function(ancId,snpId)
 {
  var o,o$1,prnId;
  return Unchecked.Equals(snpId,ancId)?false:(o=(o$1=(TreeEff$1.getParentIdO())(snpId),o$1==null?null:{
   $:1,
   $0:(prnId=o$1.$0,Unchecked.Equals(prnId,ancId)||TreeEff$1.isDescendantOf(ancId,prnId))
  }),o==null?false:o.$0);
 };
 TreeEff$1.getParentIdO=function()
 {
  SC$1.$cctor();
  return SC$1.getParentIdO;
 };
 TreeEff$1.getParentIdONotMemo=function(snpId)
 {
  var o;
  o=TreeEff$1.snippets().TryFindByKey(snpId);
  return o==null?null:o.$0.snpParentIdO;
 };
 TreeEff$1.getSnippetsGen=function()
 {
  return[(TreeEff$1.snippets())["var"].Get(),TreeEff$1.generation().Get(),TreeEff$1.collapsedV().Get()];
 };
 TreeEff$1.setSnippet=function(snp)
 {
  if(!Unchecked.Equals(snp.snpId.get_Id(),"00000000-0000-0000-0000-000000000000"))
   TreeEff$1.snippets().Append(snp);
 };
 TreeEff$1.setCurrentSnippetIdO=function(snpIdO)
 {
  TreeEff$1.currentSnippetIdOV().Set(snpIdO);
 };
 TreeEff$1.runReader=function(handle,Ef)
 {
  return Result.defaultWith(handle,TreeEff$1.runReaderResult(Ef));
 };
 TreeEff$1.runReaderResult=function(Ef)
 {
  return EffReaderRsl.run(TreeEff$1.snippetsColl(),Ef);
 };
 TreeEff$1.iterReader=function(Ef)
 {
  EffReaderRsl.iter(function(e)
  {
   TreeEff$1.handleError(e);
  },Global.ignore,TreeEff$1.snippetsColl(),Ef);
 };
 TreeEff$1.handleError=function(er)
 {
  throw new Global.Error(Global.String(er));
 };
 TreeEff$1.snippetsColl=function()
 {
  return SnippetCollection.New((TreeEff$1.snippets())["var"].Get(),function(a)
  {
   return TreeEff$1.snippets().TryFindByKey(a);
  });
 };
 TreeEff$1.clearCaches=function()
 {
  (TreeEff$1.clearParent())();
 };
 TreeEff$1.clearParent=function()
 {
  SC$1.$cctor();
  return SC$1.clearParent;
 };
 TreeEff$1.parentCache=function()
 {
  SC$1.$cctor();
  return SC$1.parentCache;
 };
 TreeEff$1.collapsedV=function()
 {
  SC$1.$cctor();
  return SC$1.collapsedV;
 };
 TreeEff$1.codeSnippetIdOV=function()
 {
  SC$1.$cctor();
  return SC$1.codeSnippetIdOV;
 };
 TreeEff$1.currentSnippetIdOV=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetIdOV;
 };
 TreeEff$1.generation=function()
 {
  SC$1.$cctor();
  return SC$1.generation;
 };
 TreeEff$1.hierarchy=function()
 {
  SC$1.$cctor();
  return SC$1.hierarchy;
 };
 TreeEff$1.snippets=function()
 {
  SC$1.$cctor();
  return SC$1.snippets;
 };
 TreeEff$1.readerFun=function(f)
 {
  return Eff.map(f,Reader.ask());
 };
 Window.main=function()
 {
  var rexV,parmsV,inputV,x,a;
  rexV=Var$1.Create$1("(Err|Warn|Info) \\((\\d+)\\,\\s*(\\d+)\\) - \\((\\d+)\\,\\s*(\\d+)\\)\\: \"([^\"]+?)\"\\.");
  parmsV=Var$1.Create$1("g");
  inputV=Var$1.Create$1("Err (1, 7) - (1, 12): \"This shows over there as an error\".\nWarn (2, 7) - (2, 12): \"This shows over there as a warning\".\nInfo (3, 7) - (3, 12): \"This shows over there as information\".");
  x=Doc.Element("div",[],[Doc.Element("div",[],[Doc.Element("div",[],[Doc.TextNode("RegEx:")]),Doc.InputArea([AttrProxy.Create("style","width: 1000px; height:80px ")],Var$1.Lens(rexV,Global.id,function($1,$2)
  {
   return $2;
  }))]),Doc.Element("div",[],[Doc.TextNode("Options: "),Doc.Input([AttrProxy.Create("style","width: 700px")],Var$1.Lens(parmsV,Global.id,function($1,$2)
  {
   return $2;
  }))]),Doc.Element("div",[],[Doc.Element("div",[],[Doc.TextNode("Input:")]),Doc.InputArea([AttrProxy.Create("style","width: 1000px; height:80px ")],Var$1.Lens(inputV,Global.id,function($1,$2)
  {
   return $2;
  }))]),Doc.Element("div",[],[Doc.BindView(Global.id,View$1.Map3(function(inp,rx,opt)
  {
   return Doc.Element("ul",[],List.ofSeq(Seq$1.delay(function()
   {
    var a$1,f,g,a$2;
    function g$1(v)
    {
     return List.ofArray([v]);
    }
    a$1=LibraryJS.REGEX$1(rx,opt,inp);
    return a$1!=null&&a$1.$==1?Arrays.map((f=function(x$1)
    {
     return g$1(Doc.TextNode(x$1));
    },(g=(a$2=List.T.Empty,function(c)
    {
     return Doc.Element("li",a$2,c);
    }),function(x$1)
    {
     return g(f(x$1));
    })),a$1.$0):[Doc.TextNode("<no match>")];
   })));
  },inputV.get_View(),rexV.get_View(),parmsV.get_View()))])]);
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 SC$1.$cctor=function()
 {
  var generation,$1,cache,$2,getOrAdd$1,v,prior,f,f$1,f$2,f$3,x;
  SC$1.$cctor=Global.ignore;
  SC$1.rtn=function(v$1)
  {
   return[v$1];
  };
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.eff=new EffBuilder.New();
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
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
  }),"","",null);
  SC$1.snippets=new ListModel.New$1(function(s)
  {
   return s.snpId;
  });
  SC$1.hierarchy=Var$1.Create$1([]);
  SC$1.generation=Var$1.Create$1(5);
  SC$1.currentSnippetIdOV=Var$1.Create$1(null);
  SC$1.codeSnippetIdOV=Var$1.Create$1(null);
  SC$1.collapsedV=Var$1.Create$1(new FSharpSet.New$1(null));
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
  function getOrAdd(p,f$4)
  {
   var o;
   o=checkO(p);
   return o==null?store(p,f$4(p)):o.$0;
  }
  $2=(cache=new Dictionary.New$5(),[[checkO,function($3)
  {
   return function($4)
   {
    return getOrAdd($3,$4);
   };
  }],function()
  {
   cache.Clear();
  }]);
  SC$1.parentCache=$2[0];
  SC$1.clearParent=$2[1];
  SC$1.getParentIdO=(getOrAdd$1=(TreeEff$1.parentCache())[1],function(p)
  {
   return(getOrAdd$1(p))(TreeEff$1.getParentIdONotMemo);
  });
  function m(n)
  {
   return n.id();
  }
  View$1.Sink(function(ids)
  {
   var a$1;
   TreeEff$1.clearCaches();
   a$1=Arrays.ofSeq(Seq$1.delay(function()
   {
    return Seq$1.collect(function(sid)
    {
     return Seq$1.append([TreeEff$1.snippets().FindByKey(sid)],Seq$1.delay(function()
     {
      return Seq$1.filter(function(snp)
      {
       return TreeEff$1.isDescendantOf(sid,snp.snpId);
      },(TreeEff$1.snippets())["var"].Get());
     }));
    },ids);
   }));
   TreeEff$1.snippets().Set(a$1);
  },(v=View$1.Map(function(a$1)
  {
   return Arrays.map(m,a$1);
  },TreeEff$1.hierarchy().get_View()),(prior=[Var$1.Create$1(null)],(View$1.Sink(function(v$1)
  {
   if(!Unchecked.Equals(prior[0].Get(),v$1))
    prior[0].Set(v$1);
  },v),prior[0].get_View()))));
  SC$1.CurrentSnippetIdW=View$1.Map(function(sidO)
  {
   var v$1;
   v$1=SnippetModule.defaultSnippet().snpId;
   return sidO==null?v$1:sidO.$0;
  },TreeEff$1.currentSnippetIdOV().get_View());
  function g(o)
  {
   var v$1;
   v$1=SnippetModule.defaultSnippet();
   return o==null?v$1:o.$0;
  }
  function m$1(a$1)
  {
   return TreeEff$1.snippets().TryFindByKeyAsView(a$1);
  }
  SC$1.currentSnippetW=View$1.Map((f=function(o)
  {
   return o==null?null:Global.id(o.$0);
  },function(x$1)
  {
   return g(f(x$1));
  }),View$1.Bind((f$1=function(o)
  {
   return o==null?null:{
    $:1,
    $0:m$1(o.$0)
   };
  },function(x$1)
  {
   return View.insertWO(f$1(x$1));
  }),TreeEff$1.currentSnippetIdOV().get_View()));
  function g$1(o)
  {
   var v$1;
   v$1=SnippetModule.defaultSnippet();
   return o==null?v$1:o.$0;
  }
  function m$2(a$1)
  {
   return TreeEff$1.snippets().TryFindByKeyAsView(a$1);
  }
  SC$1.codeSnippetW=View$1.Map((f$2=function(o)
  {
   return o==null?null:Global.id(o.$0);
  },function(x$1)
  {
   return g$1(f$2(x$1));
  }),View$1.Bind((f$3=function(o)
  {
   return o==null?null:{
    $:1,
    $0:m$2(o.$0)
   };
  },function(x$1)
  {
   return View.insertWO(f$3(x$1));
  }),TreeEff$1.codeSnippetIdOV().get_View()));
  SC$1.currentSnippetV=new FromView.New(TreeEff$1.currentSnippetW(),function(s)
  {
   TreeEff$1.setSnippet(s);
  });
  function m$3(tn,l)
  {
   return[tn.id(),l];
  }
  function a(a$1)
  {
   function f$4(n)
   {
    return TreeEff.listNodes(0,n);
   }
   function g$2(E)
   {
    return TreeEff$1.runReader(TreeEff$1.handleError,E);
   }
   return function(x$1)
   {
    return g$2(f$4(x$1));
   };
  }
  SC$1.getHierarchyW=View$1.Map(Arrays.ofSeq,View$1.Map(function(s)
  {
   return Seq$1.map(function($3)
   {
    return m$3($3[0],$3[1]);
   },s);
  },(x=TreeEff$1.hierarchy().get_View(),View$1.Map2(function($3,$4)
  {
   return(a($3))($4);
  },TreeEff$1.collapsedV().get_View(),x))));
  SC$1.currentPathW=View$1.Map(function(snp)
  {
   var b;
   return TreeEff$1.runReader(TreeEff$1.handleError,(b=Eff.eff(),b.Delay(function()
   {
    return b.Bind(SnippetModule.pathEf(snp.snpId),function(a$1)
    {
     return b.Bind(Eff.traverseSeq(SnippetModule.snippetNameEf,new List.T({
      $:1,
      $0:snp.snpId,
      $1:a$1
     })),function(a$2)
     {
      return b.Return(Strings.concat("/",Seq$1.rev(a$2)));
     });
    });
   })));
  },TreeEff$1.currentSnippetW());
 };
 _DAbeCIPHERWorkspaceFSharpStationsrcwsconfig$json_GeneratedPrintf.p=function($1)
 {
  return"SnippetId "+Utils.prettyPrint($1.$0);
 };
 Runtime.OnLoad(function()
 {
  Window.main();
 });
});
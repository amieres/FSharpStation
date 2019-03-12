(function()
{
 "use strict";
 var Global,FsRoot,Library,ResultMessage,ResultMessageHelpers,Monads,Seq,Async,WebSharper,Obj,Result,Builder,Operators,ResultM,Builder$1,Operators$1,ResultMAutoOpen,AsyncResultM,AsyncResultMBuilder,AsyncResultMAutoOpen,String,LibraryJS,Promise,GenEditor,Position,AnnotationType,Annotation,Completion,GenEditorHook,GenEditor$1,LoadFiles,REGEX,ResizeObserver,Monaco,Position$1,Range,Uri,Location,FindMatch,WordAtPosition,Model,MarkDownString,MarkerData,CompletionItem,Hover,Editor,MonacoConfig,MonacoGenAdapter,MonacoRT,CompletionItemProvider,HoverProvider,DefinitionProvider,TestingJS,Monaco$1,SC$1,IntelliFactory,Runtime,Utils,Strings,Seq$1,List,Arrays,Concurrency,Enumerator,Result$1,Operators$2,Slice,Unchecked,console,UI,View,Var$1,Doc,AttrProxy,Client,Templates;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 ResultMessage=Library.ResultMessage=Library.ResultMessage||{};
 ResultMessageHelpers=Library.ResultMessageHelpers=Library.ResultMessageHelpers||{};
 Monads=Library.Monads=Library.Monads||{};
 Seq=Monads.Seq=Monads.Seq||{};
 Async=Monads.Async=Monads.Async||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 Operators=Result.Operators=Result.Operators||{};
 ResultM=Monads.ResultM=Monads.ResultM||{};
 Builder$1=ResultM.Builder=ResultM.Builder||{};
 Operators$1=ResultM.Operators=ResultM.Operators||{};
 ResultMAutoOpen=Monads.ResultMAutoOpen=Monads.ResultMAutoOpen||{};
 AsyncResultM=Monads.AsyncResultM=Monads.AsyncResultM||{};
 AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder||{};
 AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen||{};
 String=Library.String=Library.String||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Promise=LibraryJS.Promise=LibraryJS.Promise||{};
 GenEditor=LibraryJS.GenEditor=LibraryJS.GenEditor||{};
 Position=GenEditor.Position=GenEditor.Position||{};
 AnnotationType=GenEditor.AnnotationType=GenEditor.AnnotationType||{};
 Annotation=GenEditor.Annotation=GenEditor.Annotation||{};
 Completion=GenEditor.Completion=GenEditor.Completion||{};
 GenEditorHook=GenEditor.GenEditorHook=GenEditor.GenEditorHook||{};
 GenEditor$1=GenEditor.GenEditor=GenEditor.GenEditor||{};
 LoadFiles=LibraryJS.LoadFiles=LibraryJS.LoadFiles||{};
 REGEX=LibraryJS.REGEX=LibraryJS.REGEX||{};
 ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};
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
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 Monaco$1=TestingJS.Monaco=TestingJS.Monaco||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
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
 Operators$2=WebSharper&&WebSharper.Operators;
 Slice=WebSharper&&WebSharper.Slice;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 console=Global.console;
 UI=WebSharper&&WebSharper.UI;
 View=UI&&UI.View;
 Var$1=UI&&UI.Var$1;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
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
 Result.freeMessage=function(r)
 {
  return r.$==1?Library.Error(ResultMessage.freeMessage(r.$0)):{
   $:0,
   $0:r.$0
  };
 };
 Result.errorf=function(fmt)
 {
  return fmt(Library.Error);
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
 Operators$1.rtn=function(v)
 {
  return ResultM.rtn(v);
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
  return ResultM.bindP(f,v);
 };
 Operators$1.op_BarGreaterGreater=function(v,f)
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
   return Operators$2.FailWith(Global.String(x));
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
 Promise.ofAsyncResultM=function(v)
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
 GenEditorHook.New=function(generateDoc,getValue,setValue,setDisabled,showAnnotations,posFromIndex,indexFromPos,getWordAt,getUri,setUri,hookOnChange)
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
   View.Sink(genE.editorHook.showAnnotations,genE.annotations);
   View.Sink(genE.editorHook.setDisabled,genE.disabled);
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
  View.Sink(function()
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
  return GenEditor.disabled(View.Map(function($1)
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
  return GenEditor$1.New(_var,View.Const(false),View.Const([]),null,Global.ignore,null,null,null,null,edh);
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
  return Monaco.disabled(View.Map(function($1)
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
 Monaco.render$1006$48=function(monc)
 {
  return function(elchild)
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
  return MonacoConfig.New(_var,Global.ignore,null,null,View.Const(false),null,null);
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
   return Promise.ofAsyncResultM((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
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
   return Promise.ofAsyncResultM((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
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
   return Promise.ofAsyncResultM((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
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
 MonacoGenAdapter.generateDoc$1148$48=function(monRT,onRender,genE)
 {
  return function(elchild)
  {
   var editor,_elt,o,_p,o$1,_p$1,o$2,_p$2;
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
   o=genE.toolTip;
   o==null?void 0:(_p=new HoverProvider.New(o.$0(genE)),self.monaco.languages.registerHoverProvider("fsharp",_p));
   o$1=genE.declaration;
   o$1==null?void 0:(_p$1=new DefinitionProvider.New(o$1.$0(genE)),self.monaco.languages.registerDefinitionProvider("fsharp",_p$1));
   o$2=genE.autoCompletion;
   o$2==null?void 0:(_p$2=new CompletionItemProvider.New(o$2.$0(genE)),self.monaco.languages.registerCompletionItemProvider("fsharp",_p$2));
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
     var editor,_elt,o,_p,o$1,_p$1,o$2,_p$2;
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
     o=genE.toolTip;
     o==null?void 0:(_p=new HoverProvider.New(o.$0(genE)),self.monaco.languages.registerHoverProvider("fsharp",_p));
     o$1=genE.declaration;
     o$1==null?void 0:(_p$1=new DefinitionProvider.New(o$1.$0(genE)),self.monaco.languages.registerDefinitionProvider("fsharp",_p$1));
     o$2=genE.autoCompletion;
     o$2==null?void 0:(_p$2=new CompletionItemProvider.New(o$2.$0(genE)),self.monaco.languages.registerCompletionItemProvider("fsharp",_p$2));
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
 Monaco$1.main=function()
 {
  var _var,monaco,i,x,a;
  _var=Var$1.Create$1("Hello there.\nHello there.\nHello there.\nHello there.\n");
  monaco=(i=Monaco$1.monacoNew(_var),GenEditor$1.New(i["var"],i.disabled,View.Map(Monaco$1.transformAnnotations,Monaco$1.annotationsV().get_View()),i.onChange,i.onRender,{
   $:1,
   $0:function(g)
   {
    return function(p)
    {
     return Monaco$1.autoCompletion(g,p);
    };
   }
  },{
   $:1,
   $0:function(g)
   {
    return function(p)
    {
     return Monaco$1.toolTip(g,p);
    };
   }
  },{
   $:1,
   $0:function(g)
   {
    return function(p)
    {
     return Monaco$1.declaration(g,p);
    };
   }
  },i.editorO,i.editorHook));
  x=Doc.Element("div",[],[Doc.Element("div",[AttrProxy.Create("style","height: 400px; width: 800px")],[GenEditor.generateDoc(monaco)]),Doc.Element("div",[],[Doc.TextNode("These are the annotations that create tooltips, warnings and errors:")]),Doc.InputArea([AttrProxy.Create("style","height: 100px; width: 600px")],Var$1.Lens(Monaco$1.annotationsV(),Global.id,function($1,$2)
  {
   return $2;
  })),Doc.Element("div",[],[Doc.TextView(_var.get_View())])]);
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 Monaco$1.autoCompletion=function(ged,pos)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Return([Completion.New("F","Hello","",[pos,pos]),Completion.New("F","How","",[pos,pos]),Completion.New("F","Are","",[pos,pos]),Completion.New("F","You","",[pos,pos])]);
  });
 };
 Monaco$1.declaration=function(ged,pos)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   var m,model,ms,c;
   m=ged.editorHook.getWordAt(pos);
   return m!=null&&m.$==1?(model=ged.editorO.$0.getModel(),(ms=model.findMatches(m.$0[0],false,false,true," <>()+-=.,/#@$%^&*\"",false,1),Arrays.length(ms)===0?Concurrency.Return(null):Concurrency.Return({
    $:1,
    $0:[(c=Arrays.get(ms,0).range.startColumn,Position.New(Arrays.get(ms,0).range.startLineNumber,c)),Global.String(model.uri)]
   }))):Concurrency.Return(null);
  });
 };
 Monaco$1.toolTip=function(ged,pos)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   var m;
   m=ged.editorHook.getWordAt(pos);
   return m!=null&&m.$==1?Concurrency.Return({
    $:1,
    $0:(function($1)
    {
     return function($2)
     {
      return $1("The word is: "+Utils.toSafe($2));
     };
    }(Global.id))(m.$0[0])
   }):Concurrency.Return(null);
  });
 };
 Monaco$1.monacoNew=function(_var)
 {
  return GenEditor.onRender(function(ged)
  {
   var o,_m;
   o=ged.editorO;
   o==null?void 0:(_m=o.$0.getModel(),self.monaco.editor.setModelLanguage(_m,"fsharp"));
   self.monaco.editor.setTheme("vs-dark");
  },MonacoGenAdapter.newVar(function()
  {
   return{};
  },function()
  {
   return{};
  },_var));
 };
 Monaco$1.transformAnnotations=function(msgs)
 {
  var rex,a;
  function m(ty,fl,fc,tl,tc,msg)
  {
   return Annotation.New(Position.New(fl,fc),Position.New(tl,tc),ty==="Err"?AnnotationType.Error:ty==="Warn"?AnnotationType.Warning:ty==="Hint"?AnnotationType.Hint:{
    $:4,
    $0:ty
   },msg);
  }
  rex="(Err|Warn|Info|Hint) \\((\\d+)\\,\\s*(\\d+)\\) - \\((\\d+)\\,\\s*(\\d+)\\)\\: \"([^\"]+?)\"\\.";
  return Seq$1.map(function($1)
  {
   return m($1[0],$1[1],$1[2],$1[3],$1[4],$1[5]);
  },Seq$1.choose(function(v)
  {
   var $1,a$1,t;
   return(a$1=LibraryJS.REGEX$1(rex,"",v),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===7)&&($1=[Arrays.get(a$1.$0,3),Arrays.get(a$1.$0,2),Arrays.get(a$1.$0,6),Arrays.get(a$1.$0,5),Arrays.get(a$1.$0,4),Arrays.get(a$1.$0,1)],true)))?{
    $:1,
    $0:[$1[5],Operators$2.toInt(Global.Number($1[1])),Operators$2.toInt(Global.Number($1[0])),Operators$2.toInt(Global.Number($1[4])),Operators$2.toInt(Global.Number($1[3])),$1[2]]
   }:null;
  },(a=LibraryJS.REGEX$1(rex,"g",msgs),a!=null&&a.$==1?a.$0:[])));
 };
 Monaco$1.annotationsV=function()
 {
  SC$1.$cctor();
  return SC$1.annotationsV;
 };
 SC$1.$cctor=function()
 {
  var f,b;
  SC$1.$cctor=Global.ignore;
  function g(s)
  {
   return Strings.concat("\n",s);
  }
  function f$1(s)
  {
   return String.splitByChar("\n",s);
  }
  function g$1(s)
  {
   var a,b$1;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a=0,(b$1=Arrays.length(s)-2,Unchecked.Compare(a,b$1)===1?a:b$1))
   });
  }
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
  SC$1.rtn=function(v)
  {
   return[v];
  };
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.resultM=new Builder$1.New();
  SC$1.asyncResultM=new AsyncResultMBuilder.New();
  SC$1.unindentStr=function(x)
  {
   return g(String.unindent(x));
  };
  SC$1.skipLastLine=(f=function(x)
  {
   return g$1(f$1(x));
  },function(x)
  {
   return g$2(f(x));
  });
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
  SC$1.annotationsV=Var$1.Create$1("Err (1, 7) - (1, 12): \"This shows over there as an error\".\nWarn (2, 7) - (2, 12): \"This shows over there as a warning\".\nInfo (3, 7) - (3, 12): \"This shows over there as information\".\nHint (4, 7) - (4, 12): \"This shows over there as a hint\".");
 };
 Runtime.OnLoad(function()
 {
  Monaco$1.main();
 });
}());

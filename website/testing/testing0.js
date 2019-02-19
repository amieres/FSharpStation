(function()
{
 "use strict";
 var Global,FsRoot,Library,ResultMessage,ResultMessageHelpers,Monads,Seq,Option,WebSharper,Obj,Result,Builder,Operators,FusionM,Operators$1,Builder$1,Builder$2,String,ParseO,Serializer,JsonIntermediate,FsCodeModule,PreproDirective,SnippetId,Snippet,SnippetCollection,SnippetModule,LibraryJS,Serializer$1,TestingJS,Serializer$2,Model,SC$1,testing_GeneratedPrintf,IntelliFactory,Runtime,Utils,Strings,Seq$1,List,Arrays,Enumerator,Result$1,Operators$2,Unchecked,Slice,Collections,FSharpMap,FSharpSet,BalancedTree,Option$1,System,Guid,console,JSON,UI,Var$1,Doc,Client,Templates,DateUtil,Numeric,ClientSideJson,Provider;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 ResultMessage=Library.ResultMessage=Library.ResultMessage||{};
 ResultMessageHelpers=Library.ResultMessageHelpers=Library.ResultMessageHelpers||{};
 Monads=Library.Monads=Library.Monads||{};
 Seq=Monads.Seq=Monads.Seq||{};
 Option=Monads.Option=Monads.Option||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 Operators=Result.Operators=Result.Operators||{};
 FusionM=Monads.FusionM=Monads.FusionM||{};
 Operators$1=FusionM.Operators=FusionM.Operators||{};
 Builder$1=FusionM.Builder=FusionM.Builder||{};
 Builder$2=Builder$1.Builder=Builder$1.Builder||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 Serializer=Library.Serializer=Library.Serializer||{};
 JsonIntermediate=Serializer.JsonIntermediate=Serializer.JsonIntermediate||{};
 FsCodeModule=Library.FsCodeModule=Library.FsCodeModule||{};
 PreproDirective=FsCodeModule.PreproDirective=FsCodeModule.PreproDirective||{};
 SnippetId=Library.SnippetId=Library.SnippetId||{};
 Snippet=Library.Snippet=Library.Snippet||{};
 SnippetCollection=Library.SnippetCollection=Library.SnippetCollection||{};
 SnippetModule=Library.SnippetModule=Library.SnippetModule||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Serializer$1=LibraryJS.Serializer=LibraryJS.Serializer||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 Serializer$2=TestingJS.Serializer=TestingJS.Serializer||{};
 Model=Serializer$2.Model=Serializer$2.Model||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 testing_GeneratedPrintf=Global.testing_GeneratedPrintf=Global.testing_GeneratedPrintf||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Utils=WebSharper&&WebSharper.Utils;
 Strings=WebSharper&&WebSharper.Strings;
 Seq$1=WebSharper&&WebSharper.Seq;
 List=WebSharper&&WebSharper.List;
 Arrays=WebSharper&&WebSharper.Arrays;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 Result$1=WebSharper&&WebSharper.Result;
 Operators$2=WebSharper&&WebSharper.Operators;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Slice=WebSharper&&WebSharper.Slice;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpMap=Collections&&Collections.FSharpMap;
 FSharpSet=Collections&&Collections.FSharpSet;
 BalancedTree=Collections&&Collections.BalancedTree;
 Option$1=WebSharper&&WebSharper.Option;
 System=Global.System;
 Guid=System&&System.Guid;
 console=Global.console;
 JSON=Global.JSON;
 UI=WebSharper&&WebSharper.UI;
 Var$1=UI&&UI.Var$1;
 Doc=UI&&UI.Doc;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 ClientSideJson=WebSharper&&WebSharper.ClientSideJson;
 Provider=ClientSideJson&&ClientSideJson.Provider;
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
 JsonIntermediate.New=function(tryFloat,tryInt,tryString,tryBool,tryArray,tryField,isObject,isNull)
 {
  return{
   tryFloat:tryFloat,
   tryInt:tryInt,
   tryString:tryString,
   tryBool:tryBool,
   tryArray:tryArray,
   tryField:tryField,
   isObject:isObject,
   isNull:isNull
  };
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
 Serializer.serField=function(name,get,set,s,s$1)
 {
  return[name,function(x)
  {
   return s(get(x));
  },function(rc)
  {
   return function(j)
   {
    var o;
    o=s$1(j);
    return o==null?null:{
     $:1,
     $0:set(o.$0,rc)
    };
   };
  }];
 };
 Serializer.serBool=function()
 {
  SC$1.$cctor();
  return SC$1.serBool;
 };
 Serializer.serString=function()
 {
  SC$1.$cctor();
  return SC$1.serString;
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
 Serializer.serialize=function(s,s$1,v)
 {
  return[s,s$1][0](v);
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
    return b.Return(SnippetModule.finishCode(a[0],a[1],a[2],a[3],a[4],a[5],a[6]));
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
   var m,vs;
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
    $0:[snp,(vs=Strings.SplitStrings(m.$0,["|-|"],1),[Arrays.get(vs,0),Arrays.length(vs)>1?Arrays.get(vs,1):Arrays.get(vs,0)])]
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
     return snp$1.snpGeneration;
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
      return $1("Snippet not found "+testing_GeneratedPrintf.p($2));
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
   return snp.snpGeneration>a.generation;
  });
 };
 SnippetModule.maxGenerationRm=function()
 {
  return FusionM.readerFun(function(a)
  {
   return Seq$1.max(Seq$1.map(function(s)
   {
    return s.snpGeneration;
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
  var o,vs,x,v;
  o=SnippetModule.propertyO(n,snp);
  return o==null?null:{
   $:1,
   $0:(vs=Strings.SplitStrings(o.$0,[SnippetModule.tieFighter()],1),[Arrays.get(vs,0),(x=Arrays.tryItem(1,vs),(v=Arrays.get(vs,0),x==null?v:x.$0))])
  };
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
 Serializer$1.deserializeWithFail=function(s,s$1)
 {
  function d(j,f)
  {
   return(function($1)
   {
    return function($2)
    {
     return $1("field not found: "+Utils.toSafe($2));
    };
   }(Operators$2.FailWith))(f);
  }
  return Serializer$1.deserialize(function()
  {
   return Operators$2.FailWith("Error expecting float");
  },function()
  {
   return Operators$2.FailWith("Error expecting int");
  },function()
  {
   return Operators$2.FailWith("Error expecting string");
  },function()
  {
   return Operators$2.FailWith("Error expecting bool");
  },function()
  {
   return Operators$2.FailWith("Error expecting array");
  },function($1)
  {
   return function($2)
   {
    return d($1,$2);
   };
  },s,s$1);
 };
 Serializer$1.deserializeWithDefs=function(s,s$1)
 {
  function d(j,a)
  {
   return null;
  }
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
  },function($1)
  {
   return function($2)
   {
    return d($1,$2);
   };
  },s,s$1);
 };
 Serializer$1.tryDeserialize=function(s,s$1)
 {
  function d(a,a$1)
  {
   return null;
  }
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
  },function($1)
  {
   return function($2)
   {
    return d($1,$2);
   };
  },s,s$1);
 };
 Serializer$1.deserialize=function(df,di,ds,db,da,dFl,s,s$1)
 {
  var f,g;
  function f$1(a)
  {
   return JSON.parse(a);
  }
  function g$1(o)
  {
   return Serializer$1.getJsonIntermediate(df,di,ds,db,da,dFl,o);
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
 Serializer$1.getJsonIntermediate=function(df,di,ds,db,da,dFl,o)
 {
  function jsonInt(o$1)
  {
   return Serializer$1.getJsonIntermediate(df,di,ds,db,da,dFl,o$1);
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
   var o$1,m;
   o$1=!o?null:(m=o[fl],Unchecked.Equals(m,null)?{
    $:1,
    $0:jsonInt(null)
   }:!m?null:{
    $:1,
    $0:jsonInt(m)
   });
   return o$1==null?(dFl(jsonInt))(fl):o$1;
  },function()
  {
   return Unchecked.Equals(typeof o,"object")&&!Unchecked.Equals(o,null);
  },function()
  {
   return Unchecked.Equals(o,null);
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
 Model.New=function(snippets,generation,collapsed)
 {
  return{
   snippets:snippets,
   generation:generation,
   collapsed:collapsed
  };
 };
 Serializer$2.main=function()
 {
  var results,x,a;
  function m(name,f)
  {
   var $1;
   try
   {
    $1={
     $:0,
     $0:f()
    };
   }
   catch(e)
   {
    $1=((function($2)
    {
     return function($3)
     {
      return $2(Utils.prettyPrint($3));
     };
    }(function(s)
    {
     console.log(s);
    }))(e),Library.Error(e));
   }
   return[name,$1];
  }
  results=Seq$1.map(function($1)
  {
   return m($1[0],$1[1]);
  },Serializer$2.testCases());
  x=Doc.Element("div",[],[Doc.Element("h3",[],[Doc.TextNode("Test Cases")]),Doc.Element("h4",[],[Doc.TextNode((((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("Passed: "+Global.String($2)+"/"+Global.String($3));
  }))(Global.id))(Seq$1.sumBy(function(a$1)
  {
   var c;
   c=a$1[1];
   return c.$==0?c.$0?1:0:0;
  },results)))(Seq$1.length(results)))]),Doc.Element("ol",[],List.ofSeq(Seq$1.delay(function()
  {
   function m$1(name,r)
   {
    return Doc.Element("li",[],[Doc.Element("span",[],[Doc.TextNode(name),Doc.TextNode(": "),Doc.TextNode(r.$==1?r.$0.message:Global.String(r.$0))])]);
   }
   return Seq$1.map(function($1)
   {
    return m$1($1[0],$1[1]);
   },results);
  })))]);
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 Serializer$2.testCases=function()
 {
  SC$1.$cctor();
  return SC$1.testCases;
 };
 Serializer$2.dupFloatOptString2=function()
 {
  SC$1.$cctor();
  return SC$1.dupFloatOptString2;
 };
 Serializer$2.dupOptFloatOptString1=function()
 {
  SC$1.$cctor();
  return SC$1.dupOptFloatOptString1;
 };
 Serializer$2.ofJsonFail=function()
 {
  var x;
  x=Serializer$2.jsonBad();
  return(Serializer$1.deserializeWithFail((Serializer$2.serModel())[0],(Serializer$2.serModel())[1]))(x);
 };
 Serializer$2.ofJsonDefs=function()
 {
  var x;
  x=Serializer$2.jsonBad();
  return(Serializer$1.deserializeWithDefs((Serializer$2.serModel())[0],(Serializer$2.serModel())[1]))(x);
 };
 Serializer$2.jsonBad=function()
 {
  return Strings.Replace(Serializer$2.json(),"snpGeneration","snpGenerationX");
 };
 Serializer$2.json=function()
 {
  var x;
  x=Serializer$2.model();
  return Serializer.serialize((Serializer$2.serModel())[0],(Serializer$2.serModel())[1],x);
 };
 Serializer$2.roundTrip=function(des,s,s$1,v)
 {
  var ser,x;
  ser=[s,s$1];
  x=Serializer.serialize(ser[0],ser[1],v);
  return(des(ser))(x);
 };
 Serializer$2.model=function()
 {
  SC$1.$cctor();
  return SC$1.model;
 };
 Serializer$2.serModel=function()
 {
  SC$1.$cctor();
  return SC$1.serModel;
 };
 Serializer$2.getModel=function(snippets,gen,coll)
 {
  return Model.New(Arrays.ofSeq(snippets),gen,coll);
 };
 Serializer$2.serSnippet=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippet;
 };
 Serializer$2.serSnippetId=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippetId;
 };
 Serializer$2.snps=function()
 {
  SC$1.$cctor();
  return SC$1.snps;
 };
 Serializer$2.snippet2=function()
 {
  SC$1.$cctor();
  return SC$1.snippet2;
 };
 Serializer$2.snippet1=function()
 {
  SC$1.$cctor();
  return SC$1.snippet1;
 };
 Serializer$2.snippet0=function()
 {
  SC$1.$cctor();
  return SC$1.snippet0;
 };
 SC$1.$cctor=function()
 {
  var f,generation,$1,i,i$1,i$2,s,sQ,x,t,t$1,t$2,t$3,t$4,t$5,t$6,t$7,t$8,t$9,i$3,i$4,x$1,t$10,t$11,t$12,t$13,t$14,i$5,t$15,a,a$1,t$16,a$2,a$3;
  SC$1.$cctor=Global.ignore;
  SC$1.rtn=function(v)
  {
   return[v];
  };
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.fusion=new Builder$2.New();
  function g(s$1)
  {
   return Strings.concat("\n",s$1);
  }
  SC$1.unindentStr=function(x$2)
  {
   return g(String.unindent(x$2));
  };
  function f$1(s$1)
  {
   return String.splitByChar("\n",s$1);
  }
  function g$1(s$1)
  {
   var a$4,b;
   return Slice.array(s$1,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$4=0,(b=Arrays.length(s$1)-2,Unchecked.Compare(a$4,b)===1?a$4:b))
   });
  }
  function g$2(s$1)
  {
   return Strings.concat("\n",s$1);
  }
  SC$1.skipLastLine=(f=function(x$2)
  {
   return g$1(f$1(x$2));
  },function(x$2)
  {
   return g$2(f(x$2));
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
    set:function(v)
    {
     o=v;
    }
   }),o];
  });
  SC$1.parseSingleO=ParseO.tryParseWith(function(a$4)
  {
   var o,$2;
   o=0;
   return[($2=Global.Number(a$4),Global.isNaN($2)?false:(o=$2,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith(function(a$4)
  {
   var o,$2;
   o=0;
   return[($2=Global.Number(a$4),Global.isNaN($2)?false:(o=$2,true)),o];
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
    set:function(v)
    {
     o=v;
    }
   }),o];
  });
  SC$1["|Date|_|"]=ParseO.parseDateO();
  SC$1["|Int|_|"]=ParseO.parseIntO();
  SC$1["|Single|_|"]=ParseO.parseSingleO();
  SC$1["|Double|_|"]=ParseO.parseDoubleO();
  SC$1["|Guid|_|"]=ParseO.parseGuidO();
  SC$1.serFloat=[function(v)
  {
   return(function($2)
   {
    return function($3)
    {
     return $2(Utils.prettyPrint($3));
    };
   }(Global.id))(v);
  },function(j)
  {
   return j.tryFloat();
  }];
  SC$1.serInt=[function(v)
  {
   return(function($2)
   {
    return function($3)
    {
     return $2(Utils.prettyPrint($3));
    };
   }(Global.id))(v);
  },function(j)
  {
   return j.tryInt();
  }];
  SC$1.serString=[function(a$4)
  {
   return JSON.stringify(((Provider.Id())())(a$4));
  },function(j)
  {
   return j.tryString();
  }];
  SC$1.serBool=[function(v)
  {
   return(function($2)
   {
    return function($3)
    {
     return $2(Utils.prettyPrint($3));
    };
   }(Global.id))(v);
  },function(j)
  {
   return j.tryBool();
  }];
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
  SC$1.tieFighter="|"+"-"+"|";
  SC$1.snippet0=(i=SnippetModule.New("test0","module Hello =",null),Snippet.New(new SnippetId({
   $:0,
   $0:Guid.Parse("10000000-0000-0000-0000-000000000001")
  }),i.snpName,i.snpContent,i.snpParentIdO,i.snpPredIds,i.snpProperties,i.snpGeneration));
  SC$1.snippet1=(i$1=SnippetModule.New("test1","let hello world = sprintf \"Hello, %s!\" ",{
   $:1,
   $0:Serializer$2.snippet0().snpId
  }),Snippet.New(new SnippetId({
   $:0,
   $0:Guid.Parse("20000000-0000-0000-0000-000000000002")
  }),i$1.snpName,i$1.snpContent,i$1.snpParentIdO,i$1.snpPredIds,i$1.snpProperties,i$1.snpGeneration));
  SC$1.snippet2=(i$2=SnippetModule.New("test2","Hello.hello \"World\" ",null),Snippet.New(new SnippetId({
   $:0,
   $0:Guid.Parse("30000000-0000-0000-0000-000000000003")
  }),i$2.snpName,i$2.snpContent,i$2.snpParentIdO,new FSharpSet.New(List.ofArray([Serializer$2.snippet1().snpId])),i$2.snpProperties,i$2.snpGeneration));
  SC$1.snps=List.ofArray([Serializer$2.snippet0(),Serializer$2.snippet1(),Serializer$2.snippet2()]);
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
  SC$1.serSnippetId=(s=Arrays.head(Strings.SplitChars((function($2)
  {
   return function($3)
   {
    return $2(testing_GeneratedPrintf.p($3));
   };
  }(Global.id))(set("00000000-0000-0000-0000-000000000000")),[" "],0)),(sQ=(function($2)
  {
   return function($3)
   {
    return $2(Utils.prettyPrint($3));
   };
  }(Global.id))(s),[function(gid)
  {
   var x$2;
   x$2=Global.String(get(gid));
   return(((Runtime.Curried3(function($2,$3,$4)
   {
    return $2("{"+Strings.PadLeft(Utils.toSafe($3),10)+" :"+Utils.prettyPrint($4)+"}");
   }))(Global.id))(sQ))(x$2);
  },function(j)
  {
   var o,o$1,o$2,f$2;
   o=(o$1=(o$2=j.tryField(s),o$2==null?null:o$2.$0.tryString()),(f$2=ParseO.parseGuidO(),o$1==null?null:f$2(o$1.$0)));
   return o==null?null:{
    $:1,
    $0:set(o.$0)
   };
  }]));
  SC$1.serSnippet=(x=[(t=Serializer$2.serSnippetId(),Serializer.serField("snpId",function(s$1)
  {
   return s$1.snpId;
  },function(v,s$1)
  {
   return Snippet.New(v,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t[0],t[1])),(t$1=Serializer.serString(),Serializer.serField("snpName",function(s$1)
  {
   return s$1.snpName;
  },function(v,s$1)
  {
   return Snippet.New(s$1.snpId,v,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$1[0],t$1[1])),(t$2=Serializer.serString(),Serializer.serField("snpContent",function(s$1)
  {
   return s$1.snpContent;
  },function(v,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,v,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$2[0],t$2[1])),(t$3=(t$4=Serializer$2.serSnippetId(),Serializer.serOpt(t$4[0],t$4[1])),Serializer.serField("snpParentIdO",function(s$1)
  {
   return s$1.snpParentIdO;
  },function(v,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,v,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$3[0],t$3[1])),(t$5=(t$6=Serializer$2.serSnippetId(),Serializer.serSet(t$6[0],t$6[1])),Serializer.serField("snpPredIds",function(s$1)
  {
   return s$1.snpPredIds;
  },function(v,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,v,s$1.snpProperties,s$1.snpGeneration);
  },t$5[0],t$5[1])),(t$7=(t$8=Serializer.serDup(Serializer.serString(),Serializer.serString()),Serializer.serArr(t$8[0],t$8[1])),Serializer.serField("snpProperties",function(s$1)
  {
   return s$1.snpProperties;
  },function(v,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,v,s$1.snpGeneration);
  },t$7[0],t$7[1])),(t$9=Serializer.serInt(),Serializer.serField("snpGeneration",function(s$1)
  {
   return s$1.snpGeneration;
  },function(v,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,v);
  },t$9[0],t$9[1]))],(i$3=(i$4=SnippetModule.New("","",null),Snippet.New(i$4.snpId,i$4.snpName,i$4.snpContent,i$4.snpParentIdO,i$4.snpPredIds,i$4.snpProperties,-1)),[function(dim)
  {
   var x$2;
   function m(n,ser,_deser)
   {
    return(((Runtime.Curried3(function($2,$3,$4)
    {
     return $2(Utils.prettyPrint($3)+": "+Utils.toSafe($4));
    }))(Global.id))(n))(ser(dim));
   }
   x$2=Strings.concat(", ",Seq$1.map(function($2)
   {
    return m($2[0],$2[1],$2[2]);
   },x));
   return(function($2)
   {
    return function($3)
    {
     return $2("{"+Utils.toSafe($3)+"}");
    };
   }(Global.id))(x$2);
  },function(j)
  {
   return{
    $:1,
    $0:Seq$1.fold(function(dim,t$17)
    {
     var x$2,x$3,b;
     x$2=(x$3=j.tryField(t$17[0]),(b=t$17[2](dim),x$3==null?null:b(x$3.$0)));
     return x$2==null?dim:x$2.$0;
    },i$3,x)
   };
  }]));
  SC$1.serModel=(x$1=[(t$10=(t$11=Serializer$2.serSnippet(),Serializer.serArr(t$11[0],t$11[1])),Serializer.serField("snippets",function(m)
  {
   return m.snippets;
  },function(v,m)
  {
   return Model.New(v,m.generation,m.collapsed);
  },t$10[0],t$10[1])),(t$12=Serializer.serInt(),Serializer.serField("generation",function(m)
  {
   return m.generation;
  },function(v,m)
  {
   return Model.New(m.snippets,v,m.collapsed);
  },t$12[0],t$12[1])),(t$13=(t$14=Serializer$2.serSnippetId(),Serializer.serSet(t$14[0],t$14[1])),Serializer.serField("collapsed",function(m)
  {
   return m.collapsed;
  },function(v,m)
  {
   return Model.New(m.snippets,m.generation,v);
  },t$13[0],t$13[1]))],(i$5=Model.New([],0,new FSharpSet.New$1(null)),[function(dim)
  {
   var x$2;
   function m(n,ser,_deser)
   {
    return(((Runtime.Curried3(function($2,$3,$4)
    {
     return $2(Utils.prettyPrint($3)+": "+Utils.toSafe($4));
    }))(Global.id))(n))(ser(dim));
   }
   x$2=Strings.concat(", ",Seq$1.map(function($2)
   {
    return m($2[0],$2[1],$2[2]);
   },x$1));
   return(function($2)
   {
    return function($3)
    {
     return $2("{"+Utils.toSafe($3)+"}");
    };
   }(Global.id))(x$2);
  },function(j)
  {
   return{
    $:1,
    $0:Seq$1.fold(function(dim,t$17)
    {
     var x$2,x$3,b;
     x$2=(x$3=j.tryField(t$17[0]),(b=t$17[2](dim),x$3==null?null:b(x$3.$0)));
     return x$2==null?dim:x$2.$0;
    },i$5,x$1)
   };
  }]));
  SC$1.model=Serializer$2.getModel(Serializer$2.snps(),33,new FSharpSet.New(List.ofArray([Serializer$2.snippet1().snpId,Serializer$2.snippet2().snpId])));
  SC$1.dupOptFloatOptString1=(t$15=Serializer.serDup(Serializer.serOpt((Serializer.serFloat())[0],(Serializer.serFloat())[1]),Serializer.serOpt((Serializer.serString())[0],(Serializer.serString())[1])),(a=t$15[0],(a$1=t$15[1],function(v)
  {
   return Serializer$2.roundTrip(function($2)
   {
    return Serializer$1.tryDeserialize($2[0],$2[1]);
   },a,a$1,v);
  })));
  SC$1.dupFloatOptString2=(t$16=Serializer.serDup(Serializer.serInt(),Serializer.serOpt((Serializer.serString())[0],(Serializer.serString())[1])),(a$2=t$16[0],(a$3=t$16[1],function(v)
  {
   return Serializer$2.roundTrip(function($2)
   {
    return Serializer$1.deserializeWithDefs($2[0],$2[1]);
   },a$2,a$3,v);
  })));
  SC$1.testCases=List.ofArray([["roundTripTry",function()
  {
   return Unchecked.Equals(Serializer$2.roundTrip(function($2)
   {
    return Serializer$1.tryDeserialize($2[0],$2[1]);
   },(Serializer$2.serModel())[0],(Serializer$2.serModel())[1],Serializer$2.model()),{
    $:1,
    $0:Serializer$2.model()
   });
  }],["roundTripDefs",function()
  {
   return Unchecked.Equals(Serializer$2.roundTrip(function($2)
   {
    return Serializer$1.deserializeWithDefs($2[0],$2[1]);
   },(Serializer$2.serModel())[0],(Serializer$2.serModel())[1],Serializer$2.model()),{
    $:1,
    $0:Serializer$2.model()
   });
  }],["roundTripFail",function()
  {
   return Unchecked.Equals(Serializer$2.roundTrip(function($2)
   {
    return Serializer$1.deserializeWithFail($2[0],$2[1]);
   },(Serializer$2.serModel())[0],(Serializer$2.serModel())[1],Serializer$2.model()),{
    $:1,
    $0:Serializer$2.model()
   });
  }],["(float opt, str opt)1",function()
  {
   return Unchecked.Equals((Serializer$2.dupOptFloatOptString1())([{
    $:1,
    $0:67.4
   },null]),{
    $:1,
    $0:[{
     $:1,
     $0:67.4
    },null]
   });
  }],["(int      , str opt)2",function()
  {
   return Unchecked.Equals((Serializer$2.dupFloatOptString2())([67,{
    $:1,
    $0:"67"
   }]),{
    $:1,
    $0:[67,{
     $:1,
     $0:"67"
    }]
   });
  }],["jsonAndBackDefs",function()
  {
   return Unchecked.Equals(Serializer$2.ofJsonDefs(),{
    $:1,
    $0:Model.New(Arrays.map(function(s$1)
    {
     return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,-1);
    },Serializer$2.model().snippets),Serializer$2.model().generation,Serializer$2.model().collapsed)
   });
  }],["jsonAndBackFail",function()
  {
   function g$3(v)
   {
   }
   try
   {
    (function(x$2)
    {
     return g$3(Serializer$2.ofJsonFail(x$2));
    }());
    return false;
   }
   catch(e)
   {
    return true;
   }
  }]]);
 };
 testing_GeneratedPrintf.p=function($1)
 {
  return"SnippetId "+Utils.prettyPrint($1.$0);
 };
 Runtime.OnLoad(function()
 {
  Serializer$2.main();
 });
}());

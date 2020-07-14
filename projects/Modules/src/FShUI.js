(function()
{
 "use strict";
 var Global,FsRoot,Library,LibraryJS,Composition,MethodDef2,SimpleComposition,SimpleEntry,WsComposition,Reference,HtmlElemTag,LocalId,DocComposition,FShUI,LoadAsm,AssemblyUI,SC$1,WebSharper,UI,Var$1,View,Concurrency,CancellationTokenSource,IntelliFactory,Runtime,Doc,Operators,System,Guid,FShUI_AssemblyData,List,AttrProxy,Utils,Strings,Seq,FromView,Unchecked,Arrays,AssemblyDef,ModuleDef,MethodDef,TypeRef,Slice,Data,TxtRuntime,FSharp,Data$1,Runtime$1,IO,JSON,console,AttrModule,ListModel;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Composition=LibraryJS.Composition=LibraryJS.Composition||{};
 MethodDef2=Composition.MethodDef2=Composition.MethodDef2||{};
 SimpleComposition=Composition.SimpleComposition=Composition.SimpleComposition||{};
 SimpleEntry=Composition.SimpleEntry=Composition.SimpleEntry||{};
 WsComposition=LibraryJS.WsComposition=LibraryJS.WsComposition||{};
 Reference=WsComposition.Reference=WsComposition.Reference||{};
 HtmlElemTag=WsComposition.HtmlElemTag=WsComposition.HtmlElemTag||{};
 LocalId=WsComposition.LocalId=WsComposition.LocalId||{};
 DocComposition=WsComposition.DocComposition=WsComposition.DocComposition||{};
 FShUI=LibraryJS.FShUI=LibraryJS.FShUI||{};
 LoadAsm=FShUI.LoadAsm=FShUI.LoadAsm||{};
 AssemblyUI=LibraryJS.AssemblyUI=LibraryJS.AssemblyUI||{};
 SC$1=Global.StartupCode$FShUI$FShUI=Global.StartupCode$FShUI$FShUI||{};
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 Var$1=UI&&UI.Var$1;
 View=UI&&UI.View;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 CancellationTokenSource=WebSharper&&WebSharper.CancellationTokenSource;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Doc=UI&&UI.Doc;
 Operators=WebSharper&&WebSharper.Operators;
 System=Global.System;
 Guid=System&&System.Guid;
 FShUI_AssemblyData=LibraryJS&&LibraryJS.FShUI_AssemblyData;
 List=WebSharper&&WebSharper.List;
 AttrProxy=UI&&UI.AttrProxy;
 Utils=WebSharper&&WebSharper.Utils;
 Strings=WebSharper&&WebSharper.Strings;
 Seq=WebSharper&&WebSharper.Seq;
 FromView=UI&&UI.FromView;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Arrays=WebSharper&&WebSharper.Arrays;
 AssemblyDef=FShUI_AssemblyData&&FShUI_AssemblyData.AssemblyDef;
 ModuleDef=FShUI_AssemblyData&&FShUI_AssemblyData.ModuleDef;
 MethodDef=FShUI_AssemblyData&&FShUI_AssemblyData.MethodDef;
 TypeRef=FShUI_AssemblyData&&FShUI_AssemblyData.TypeRef;
 Slice=WebSharper&&WebSharper.Slice;
 Data=WebSharper&&WebSharper.Data;
 TxtRuntime=Data&&Data.TxtRuntime;
 FSharp=Global.FSharp;
 Data$1=FSharp&&FSharp.Data;
 Runtime$1=Data$1&&Data$1.Runtime;
 IO=Runtime$1&&Runtime$1.IO;
 JSON=Global.JSON;
 console=Global.console;
 AttrModule=UI&&UI.AttrModule;
 ListModel=UI&&UI.ListModel;
 Library.delayedVar=function(delay,_var)
 {
  var delayedV,x;
  delayedV=Var$1.Create$1(_var.Get());
  x=_var.get_View();
  View.Sink(Library.delayed(delay,function(a)
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
 Library.Error=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 MethodDef2.New=function(def,modName)
 {
  return{
   def:def,
   modName:modName
  };
 };
 SimpleComposition=Composition.SimpleComposition=Runtime.Class({
  GetMethodDefsJS:function()
  {
   return Composition.composeMethod(this.name,this.pre,this.pos,this.rparms);
  }
 },null,SimpleComposition);
 SimpleComposition.New=function(name,pre,pos,rparms)
 {
  return new SimpleComposition({
   name:name,
   pre:pre,
   pos:pos,
   rparms:rparms
  });
 };
 SimpleEntry=Composition.SimpleEntry=Runtime.Class({
  GetMethodDefsJS:function()
  {
   return this.$==1?Composition.composeString(this.$0,this.$1):this.$==2?Composition.composeVarStr(this.$0,this.$1):this.$0.GetMethodDefsJS();
  }
 },null,SimpleEntry);
 Composition.showCompositions=function()
 {
  return Doc.Element("div",[],[Doc.Flatten(Composition.compositionsL().MapLens(function($1,$2)
  {
   var m;
   function a(id,se)
   {
    return se.$==1?[id,[se.$0,se.$1]]:Operators.FailWith("Should not happen");
   }
   function a$1(id,se)
   {
    return se.$==2?[id,[se.$0,se.$1]]:Operators.FailWith("Should not happen");
   }
   function a$2(id,se)
   {
    return se.$==0?[id,se.$0]:Operators.FailWith("Should not happen");
   }
   m=$2.Get();
   return m[1].$==1?Composition.showSimpleString(m[0],Var$1.Lens($2,function($3)
   {
    return a($3[0],$3[1]);
   },function(a$3,t)
   {
    var t$1;
    return[t[0],(t$1=t[1],new SimpleEntry({
     $:1,
     $0:t$1[0],
     $1:t$1[1]
    }))];
   })):m[1].$==2?Composition.showSimpleString(m[0],Var$1.Lens($2,function($3)
   {
    return a$1($3[0],$3[1]);
   },function(a$3,t)
   {
    var t$1;
    return[t[0],(t$1=t[1],new SimpleEntry({
     $:2,
     $0:t$1[0],
     $1:t$1[1]
    }))];
   })):Composition.showSimpleComposition(m[0],Var$1.Lens($2,function($3)
   {
    return a$2($3[0],$3[1]);
   },function(a$3,t)
   {
    return[t[0],new SimpleEntry({
     $:0,
     $0:t[1]
    })];
   }));
  })),Composition.createComposedFunction()]);
 };
 Composition.createComposedFunction$448$43=Runtime.Curried3(function(clickVarStr,$1,$2)
 {
  return clickVarStr();
 });
 Composition.createComposedFunction$447$43=Runtime.Curried3(function(clickString,$1,$2)
 {
  return clickString();
 });
 Composition.createComposedFunction$440$43=Runtime.Curried3(function(clickFunc,$1,$2)
 {
  return clickFunc();
 });
 Composition.createComposedFunction=function()
 {
  function clickFunc()
  {
   var m,md;
   m=Composition.selectedMethod().Get();
   m!=null&&m.$==1?(md=m.$0[1],Composition.compositionsL().Append([Guid.NewGuid(),new SimpleEntry({
    $:0,
    $0:SimpleComposition.New(new FShUI_AssemblyData.MethodName({
     $:0,
     $0:"newMethod"
    }),md,md,[0])
   })])):void 0;
  }
  function clickString()
  {
   Composition.compositionsL().Append([Guid.NewGuid(),new SimpleEntry({
    $:1,
    $0:"newString",
    $1:"value"
   })]);
  }
  function clickVarStr()
  {
   Composition.compositionsL().Append([Guid.NewGuid(),new SimpleEntry({
    $:2,
    $0:"newString",
    $1:"value"
   })]);
  }
  return Doc.Concat(List.ofArray([Doc.Element("button",[AttrProxy.HandlerImpl("click",function()
  {
   return function()
   {
    return clickFunc();
   };
  })],[Doc.TextView(View.Map(function(a)
  {
   return a!=null&&a.$==1?(function($1)
   {
    return function($2)
    {
     return $1("Compose "+Utils.toSafe($2));
    };
   }(Global.id))(a.$0[1].def.name.get_Id()):"Select a function to compose";
  },Composition.selectedMethod().get_View()))]),Doc.Element("button",[AttrProxy.HandlerImpl("click",function()
  {
   return function()
   {
    return clickString();
   };
  })],[Doc.TextNode("Add string")]),Doc.Element("button",[AttrProxy.HandlerImpl("click",function()
  {
   return function()
   {
    return clickVarStr();
   };
  })],[Doc.TextNode("Add Var<string>")])]));
 };
 Composition.showSimpleEntry=function(id,idcompV)
 {
  function a(f,v)
  {
   return[f,v];
  }
  Var$1.Lens(idcompV,function(t)
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
     return a($4,$5);
    };
   }($1))($2);
  });
 };
 Composition.showSimpleComposition$399$54=Runtime.Curried3(function(clickPos,$1,$2)
 {
  return clickPos();
 });
 Composition.showSimpleComposition$388$54=Runtime.Curried3(function(clickPre,$1,$2)
 {
  return clickPre();
 });
 Composition.showSimpleComposition=function(id,idcompV)
 {
  var compV;
  function a(f,v)
  {
   return[f,v];
  }
  function clickPre()
  {
   var m,i;
   m=Composition.selectedMethod().Get();
   m!=null&&m.$==1?compV.Set((i=compV.Get(),SimpleComposition.New(i.name,m.$0[1],i.pos,i.rparms))):void 0;
  }
  function clickPos()
  {
   var m,i;
   m=Composition.selectedMethod().Get();
   m!=null&&m.$==1?compV.Set((i=compV.Get(),SimpleComposition.New(i.name,i.pre,m.$0[1],i.rparms))):void 0;
  }
  compV=Var$1.Lens(idcompV,function(t)
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
     return a($4,$5);
    };
   }($1))($2);
  });
  return Doc.Concat([Doc.Element("tr",[],[Doc.Input(List.T.Empty,Var$1.Lens(compV,function(c)
  {
   return c.name.get_Id();
  },function(c,v)
  {
   return SimpleComposition.New(new FShUI_AssemblyData.MethodName({
    $:0,
    $0:v
   }),c.pre,c.pos,c.rparms);
  })),Doc.TextNode(" = "),Doc.Element("button",[AttrProxy.HandlerImpl("dblclick",function()
  {
   return function()
   {
    return clickPre();
   };
  })],[Doc.TextView(View.Map(function(c)
  {
   return c.pre.def.name.get_Id();
  },compV.get_View()))]),Doc.TextNode(" : ("),Doc.BindView(function(comp)
  {
   return Doc.TextNode(Strings.concat(" -> ",Seq.map(function(t)
   {
    return t.name.get_Id();
   },comp.pre.def.parms)));
  },compV.get_View()),Doc.TextNode(" -> "),Doc.TextView(View.Map(function(c)
  {
   return c.pre.def.retType.name.get_Id();
  },compV.get_View())),Doc.TextNode(") >> "),Doc.Element("button",[AttrProxy.HandlerImpl("dblclick",function()
  {
   return function()
   {
    return clickPos();
   };
  })],[Doc.TextView(View.Map(function(c)
  {
   return c.pos.def.name.get_Id();
  },compV.get_View()))]),Doc.TextNode(" : ("),Doc.BindView(function(comp)
  {
   return Doc.Concat(List.ofSeq(Seq.delay(function()
   {
    return Seq.collect(function(i)
    {
     var checkV,attrOK;
     checkV=new FromView.New(View.Const(Seq.contains(i,comp.rparms)),function(v)
     {
      var i$1,s;
      function p(y)
      {
       return i!==y;
      }
      compV.Set((i$1=compV.Get(),SimpleComposition.New(i$1.name,i$1.pre,i$1.pos,Seq.cache((v?(s=[i],function(s$1)
      {
       return Seq.append(s,s$1);
      }):function(s$1)
      {
       return Seq.filter(p,s$1);
      })(compV.Get().rparms)))));
     });
     attrOK=AttrProxy.Create("style",Seq.contains(i,comp.rparms)&&!Unchecked.Equals(comp.pre.def.retType,Arrays.get(comp.pos.def.parms,i))?"text-decoration: line-through":"");
     return[Doc.Element("span",[],[Doc.CheckBox([],checkV),Doc.Element("span",[attrOK],[Doc.TextNode(Arrays.get(comp.pos.def.parms,i).name.get_Id())]),Doc.TextNode(" -> ")])];
    },Operators.range(0,Arrays.length(comp.pos.def.parms)-1));
   })));
  },compV.get_View()),Doc.TextView(View.Map(function(c)
  {
   return c.pos.def.retType.name.get_Id();
  },compV.get_View())),Doc.TextNode(" ) "),Doc.Button("x",[],function()
  {
   Composition.compositionsL().RemoveByKey(id);
  })])]);
 };
 Composition.showSimpleString=function(id,idcompV)
 {
  var nameV,valV;
  function a(f$2,a$2)
  {
   return function(nm)
   {
    return[f$2,[nm,a$2[1]]];
   };
  }
  function f(t)
  {
   return t[1];
  }
  function g(t)
  {
   return t[0];
  }
  function a$1(f$2,a$2)
  {
   return function(v)
   {
    return[f$2,[a$2[0],v]];
   };
  }
  function f$1(t)
  {
   return t[1];
  }
  function g$1(t)
  {
   return t[1];
  }
  nameV=Var$1.Lens(idcompV,function(x)
  {
   return g(f(x));
  },function($1,$2)
  {
   return(function($3)
   {
    return a($3[0],$3[1]);
   }($1))($2);
  });
  valV=Var$1.Lens(idcompV,function(x)
  {
   return g$1(f$1(x));
  },function($1,$2)
  {
   return(function($3)
   {
    return a$1($3[0],$3[1]);
   }($1))($2);
  });
  return Doc.Concat([Doc.Element("tr",[],[Doc.Input([],nameV),Doc.TextNode(" = "),Doc.Input([],valV),Doc.Button("x",[],function()
  {
   Composition.compositionsL().RemoveByKey(id);
  })])]);
 };
 Composition.compositionsL=function()
 {
  SC$1.$cctor();
  return SC$1.compositionsL;
 };
 Composition.selectedMethod=function()
 {
  SC$1.$cctor();
  return SC$1.selectedMethod;
 };
 Composition.createComposedAssembly=function(name,comps)
 {
  var p;
  p=Composition.createComposedModule(new FShUI_AssemblyData.ModuleName({
   $:0,
   $0:name.get_Id()
  }),comps);
  return AssemblyDef.New(name,new FShUI_AssemblyData.AssemblyRef({
   $:0,
   $0:name.get_Id()
  }),[p[0]],[],[],[[name.get_Id(),p[1]]]);
 };
 Composition.createComposedModule=function(name,comps)
 {
  var p,x;
  p=Arrays.unzip(Arrays.map(function(x$1)
  {
   return x$1.GetMethodDefsJS();
  },comps));
  return[ModuleDef.New(name,p[0]),new FShUI_AssemblyData.JSCode({
   $:0,
   $0:(x=Strings.concat(",\n    ",p[1]),(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Utils.toSafe($2)+" = {\n    "+Utils.toSafe($3)+"\n}");
   }))(Global.id))(name.get_Id2()))(x))
  })];
 };
 Composition.composeVarStr=function(name,ss)
 {
  return[MethodDef.New(new FShUI_AssemblyData.MethodName({
   $:0,
   $0:name
  }),TypeRef.New(new FShUI_AssemblyData.TypeName({
   $:0,
   $0:"Var<string>"
  }),new FShUI_AssemblyData.AssemblyName({
   $:0,
   $0:"WebSharper.UI"
  })),[],true),(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1(Utils.toSafe($2)+" : (function(v) { return function() { return v} })(WebSharper.UI.Var$1.Create$1('"+Utils.toSafe($3)+"'))");
  }))(Global.id))(name))(Strings.Replace(ss,"'","''"))];
 };
 Composition.composeString=function(name,ss)
 {
  return[MethodDef.New(new FShUI_AssemblyData.MethodName({
   $:0,
   $0:name
  }),TypeRef.New(new FShUI_AssemblyData.TypeName({
   $:0,
   $0:"string"
  }),new FShUI_AssemblyData.AssemblyName({
   $:0,
   $0:"netstandard"
  })),[],true),(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1(Utils.toSafe($2)+" : function() { return '"+Utils.toSafe($3)+"' }");
  }))(Global.id))(name))(Strings.Replace(ss,"'","''"))];
 };
 Composition.composeMethod=function(name,pre,pos,rparms)
 {
  var nparms,nparmsDecl,x,preParms,x$1,posParms,x$2,preCall,posCall;
  nparms=Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.append(pre.def.parms,Seq.delay(function()
   {
    return Seq.collect(function(i)
    {
     return!Seq.contains(i,rparms)?[Arrays.get(pos.def.parms,i)]:[];
    },Operators.range(0,Arrays.length(pos.def.parms)-1));
   }));
  }));
  nparmsDecl=Strings.concat(", ",(x=List.ofSeq(Operators.range(0,Arrays.length(nparms)-1)),Seq.map(function($1)
  {
   return function($2)
   {
    return $1("p"+Global.String($2));
   };
  }(Global.id),x)));
  preParms=Strings.concat(", ",(x$1=List.ofSeq(Operators.range(0,Arrays.length(pre.def.parms)-1)),Seq.map(function($1)
  {
   return function($2)
   {
    return $1("p"+Global.String($2));
   };
  }(Global.id),x$1)));
  posParms=Strings.concat(", ",(x$2=List.ofSeq(Operators.range(0,Arrays.length(pos.def.parms)-1)),Seq.mapFold(function(j,i)
  {
   return Seq.contains(i,rparms)?["v",j]:[(function($1)
   {
    return function($2)
    {
     return $1("p"+Global.String($2));
    };
   }(Global.id))(j),j+1];
  },Arrays.length(pre.def.parms),x$2))[0]);
  preCall=Composition.invokeMethodJS(pre,preParms);
  posCall=Composition.invokeMethodJS(pos,posParms);
  return[MethodDef.New(name,pos.def.retType,nparms,false),(((((Runtime.Curried(function($1,$2,$3,$4,$5)
  {
   return $1(Utils.toSafe($2)+" : function("+Utils.toSafe($3)+") { var v = "+Utils.toSafe($4)+"; return "+Utils.toSafe($5)+"; }");
  },5))(Global.id))(name.get_Id()))(nparmsDecl))(preCall))(posCall)];
 };
 Composition.invokeMethodJS=function(md,parms)
 {
  return((((Runtime.Curried(function($1,$2,$3,$4)
  {
   return $1(Utils.toSafe($2)+"."+Utils.toSafe($3)+"("+Utils.toSafe($4)+")");
  },4))(Global.id))(md.modName.get_Id2()))(md.def.name.get_Id()))(parms);
 };
 Reference=WsComposition.Reference=Runtime.Class({
  toString:function()
  {
   return this.$==0?this.$0:this.$==1?(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Utils.toSafe($2)+"."+Utils.toSafe($3));
   }))(Global.id))(this.$0.get_Id2()))(this.$1.name.get_Id()):this.$1;
  },
  GetFunc:function()
  {
   var $1,$2;
   function getFunc(js,p)
   {
    try
    {
     return(Global["eval"](js))(p);
    }
    catch(e)
    {
     return(((Runtime.Curried3(function($3,$4,$5)
     {
      return $3("Error "+Utils.toSafe($4)+" \n Evaluating JS: "+Utils.toSafe($5));
     }))(Operators.FailWith))(e.message))(js);
    }
   }
   return this.$==0?($1=this.$0,function($3)
   {
    return getFunc($1,$3);
   }):this.$==1?($2=(((Runtime.Curried3(function($3,$4,$5)
   {
    return $3(Utils.toSafe($4)+"."+Utils.toSafe($5));
   }))(Global.id))(this.$0.get_Id2()))(this.$1.name.get_Id()),function($3)
   {
    return getFunc($2,$3);
   }):this.$0;
  }
 },null,Reference);
 HtmlElemTag=WsComposition.HtmlElemTag=Runtime.Class({
  toString:function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1("<"+Utils.toSafe($2)+">");
    };
   }(Global.id))(this.get_Id());
  },
  get_Id:function()
  {
   return this.$0;
  }
 },null,HtmlElemTag);
 LocalId=WsComposition.LocalId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,LocalId);
 DocComposition=WsComposition.DocComposition=Runtime.Class({
  GetDoc:function()
  {
   var x,x$1,x$2,x$3,x$4,x$5,o,o$1,$1;
   function m(tag,ds)
   {
    return Doc.Element(tag.get_Id(),List.T.Empty,ds);
   }
   return this.$==1?Doc.TextView(this.$1.get_View()):this.$==2?Doc.Button(this.$1,[],this.$0.GetFunc()):this.$==3?Doc.TextNode((x=(this.$0.GetFunc())(),(function($2)
   {
    return function($3)
    {
     return $2(Global.String($3));
    };
   }(Global.id))(x))):this.$==4?Doc.TextView((x$1=(this.$0.GetFunc())(),View.Map(function($2)
   {
    return function($3)
    {
     return $2(Global.String($3));
    };
   }(Global.id),x$1))):this.$==5?Doc.TextView((x$2=(this.$0.GetFunc())().get_View(),View.Map(function($2)
   {
    return function($3)
    {
     return $2(Global.String($3));
    };
   }(Global.id),x$2))):this.$==6?Doc.TextNode((x$3=(this.$0.GetFunc())(),(function($2)
   {
    return function($3)
    {
     return $2(Utils.prettyPrint($3));
    };
   }(Global.id))(x$3))):this.$==7?Doc.TextView((x$4=(this.$0.GetFunc())(),View.Map(function($2)
   {
    return function($3)
    {
     return $2(Utils.prettyPrint($3));
    };
   }(Global.id),x$4))):this.$==8?Doc.TextView((x$5=(this.$0.GetFunc())().get_View(),View.Map(function($2)
   {
    return function($3)
    {
     return $2(Utils.prettyPrint($3));
    };
   }(Global.id),x$5))):this.$==9?Doc.TextNode((this.$0.GetFunc())()):this.$==10?Doc.TextView((this.$0.GetFunc())()):this.$==11?Doc.TextView((this.$0.GetFunc())().get_View()):this.$==12?Doc.Input(List.T.Empty,(this.$0.GetFunc())()):this.$==13?Doc.InputArea(List.T.Empty,(this.$0.GetFunc())()):this.$==14?(this.$0.GetFunc())():this.$==15?Doc.EmbedView((this.$0.GetFunc())()):this.$==16?this.$1():this.$==17?Doc.get_Empty():this.$==18?(o=(o$1=this.$0,o$1==null?null:{
    $:1,
    $0:($1=o$1.$0,function($2)
    {
     return m($1,$2);
    })
   }),(o==null?Doc.Concat:o.$0)(Arrays.map(function(dc)
   {
    return dc.GetDoc();
   },this.$1))):Doc.TextNode(this.$1);
  }
 },null,DocComposition);
 DocComposition.DOCEmpty=new DocComposition({
  $:17
 });
 WsComposition.getUIDoc=function(setDOC,a)
 {
  var ref,tO,dcs,tagV,o,nm;
  function setDOCH(tO$1,dcs$1)
  {
   setDOC(new DocComposition({
    $:18,
    $0:tO$1,
    $1:dcs$1
   }));
  }
  return a.$==1?Doc.TextNode(a.$0.get_Id()):a.$==2?(ref=a.$0,Doc.Input(List.T.Empty,new FromView.New(View.Const(a.$1),Library.delayed(1000,function(v)
  {
   setDOC(new DocComposition({
    $:2,
    $0:ref,
    $1:v
   }));
  })))):a.$==3?Doc.TextNode(Global.String(a.$0)):a.$==4?Doc.TextNode(Global.String(a.$0)):a.$==5?Doc.TextNode(Global.String(a.$0)):a.$==6?Doc.TextNode(Global.String(a.$0)):a.$==7?Doc.TextNode(Global.String(a.$0)):a.$==8?Doc.TextNode(Global.String(a.$0)):a.$==9?Doc.TextNode(Global.String(a.$0)):a.$==10?Doc.TextNode(Global.String(a.$0)):a.$==11?Doc.TextNode(Global.String(a.$0)):a.$==12?Doc.TextNode(Global.String(a.$0)):a.$==13?Doc.TextNode(Global.String(a.$0)):a.$==14?Doc.TextNode(Global.String(a.$0)):a.$==15?Doc.TextNode(Global.String(a.$0)):a.$==16?Doc.TextNode(a.$0.get_Id()):a.$==17?Doc.TextNode("Empty"):a.$==18?(tO=a.$0,(dcs=a.$1,(tagV=new FromView.New(View.Const((o=tO==null?null:{
   $:1,
   $0:tO.$0.get_Id()
  },o==null?"":o.$0)),Library.delayed(1000,function(v)
  {
   var m;
   setDOC(new DocComposition({
    $:18,
    $0:(m=Strings.Trim(v),m===""?null:{
     $:1,
     $0:new HtmlElemTag({
      $:0,
      $0:m
     })
    }),
    $1:dcs
   }));
  })),Doc.Element("tr",[],[Doc.TextNode("Html "),Doc.Input([],tagV),Doc.Element("table",List.T.Empty,Arrays.mapi(function(i,dc)
  {
   return Doc.Element("tr",[],[Doc.Element("td",[],List.ofSeq(Seq.delay(function()
   {
    return i>0?[Doc.Button("^",[],function()
    {
     setDOCH(tO,Arrays.collect(Global.id,[Slice.array(dcs,null,{
      $:1,
      $0:i-2
     }),[dc,Arrays.get(dcs,i-1)],Slice.array(dcs,{
      $:1,
      $0:i+1
     },null)]));
    })]:[];
   }))),Doc.Element("td",[],List.ofSeq(Seq.delay(function()
   {
    return i<Arrays.length(dcs)-1?[Doc.Button("v",[],function()
    {
     setDOCH(tO,Arrays.collect(Global.id,[Slice.array(dcs,null,{
      $:1,
      $0:i-1
     }),[Arrays.get(dcs,i+1),dc],Slice.array(dcs,{
      $:1,
      $0:i+2
     },null)]));
    })]:[];
   }))),Doc.Element("td",[],[WsComposition.getUIDoc(function(ndc)
   {
    setDOCH(tO,Arrays.collect(Global.id,[Slice.array(dcs,null,{
     $:1,
     $0:i-1
    }),[ndc],Slice.array(dcs,{
     $:1,
     $0:i+1
    },null)]));
   },dc)]),Doc.Element("td",[],List.ofSeq(Seq.delay(function()
   {
    return[Doc.Button("x",[],function()
    {
     setDOCH(tO,Arrays.collect(Global.id,[Slice.array(dcs,null,{
      $:1,
      $0:i-1
     }),Slice.array(dcs,{
      $:1,
      $0:i+1
     },null)]));
    })];
   })))]);
  },dcs))])))):(nm=a.$0,Doc.Input(List.T.Empty,new FromView.New(View.Const(a.$1),Library.delayed(1000,function(v)
  {
   var m;
   m=Strings.Trim(v);
   m===""?void 0:new HtmlElemTag({
    $:0,
    $0:m
   });
   setDOC(new DocComposition({
    $:0,
    $0:nm,
    $1:v
   }));
  }))));
 };
 WsComposition.currentNodeO=function()
 {
  SC$1.$cctor();
  return SC$1.currentNodeO;
 };
 LoadAsm.fetchAsmData=function(folder,a)
 {
  var url,b;
  url=a.$0;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(TxtRuntime.AsyncMap(IO.asyncReadTextAtRuntime(false,"D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\Modules\\src","","JSON","",url.indexOf("/")!=-1?url:folder+url),function(t)
   {
    return Unchecked.Equals(typeof t,"string")?JSON.parse(t):t;
   }),function(a$1)
   {
    var n,prop,opt,s,j,d,r;
    return Concurrency.Return((n=new FShUI_AssemblyData.AssemblyName({
     $:0,
     $0:(opt=(prop="asName",prop in a$1?{
      $:1,
      $0:a$1[prop]
     }:null),opt==null?null:opt.$0)
    }),(s=new FShUI_AssemblyData.AssemblyRef({
     $:0,
     $0:url
    }),(j=Arrays.map(function(j$1)
    {
     var prop$1,opt$1,prop$2,opt$2;
     return[(opt$1=(prop$1="jsName",prop$1 in j$1?{
      $:1,
      $0:j$1[prop$1]
     }:null),opt$1==null?null:opt$1.$0),new FShUI_AssemblyData.JSCode({
      $:0,
      $0:(opt$2=(prop$2="code",prop$2 in j$1?{
       $:1,
       $0:j$1[prop$2]
      }:null),opt$2==null?null:opt$2.$0)
     })];
    },a$1.jsModules),(d=Arrays.map(function(a$2)
    {
     return new FShUI_AssemblyData.AssemblyRef({
      $:0,
      $0:a$2
     });
    },a$1.dependencies),(r=Arrays.map(function(a$2)
    {
     return new FShUI_AssemblyData.Resource({
      $:0,
      $0:a$2
     });
    },a$1.resources),AssemblyDef.New(n,s,Arrays.map(function(mo)
    {
     var prop$1,opt$1;
     return ModuleDef.New(new FShUI_AssemblyData.ModuleName({
      $:0,
      $0:(opt$1=(prop$1="moName",prop$1 in mo?{
       $:1,
       $0:mo[prop$1]
      }:null),opt$1==null?null:opt$1.$0)
     }),Arrays.map(function(me)
     {
      var n$1,prop$2,opt$2,i,v,prop$3,opt$3,x,prop$4,opt$4,x$1,prop$5,opt$5;
      n$1=new FShUI_AssemblyData.MethodName({
       $:0,
       $0:(opt$2=(prop$2="meName",prop$2 in me?{
        $:1,
        $0:me[prop$2]
       }:null),opt$2==null?null:opt$2.$0)
      });
      i=(v=(prop$3="isField",prop$3 in me?{
       $:1,
       $0:me[prop$3]
      }:null),(opt$3=v==null?null:{
       $:1,
       $0:1*v.$0
      },opt$3==null?null:opt$3.$0))===1;
      return MethodDef.New(n$1,TypeRef.New(new FShUI_AssemblyData.TypeName({
       $:0,
       $0:(opt$4=(x=me.type,(prop$4="tName",prop$4 in x?{
        $:1,
        $0:x[prop$4]
       }:null)),opt$4==null?null:opt$4.$0)
      }),new FShUI_AssemblyData.AssemblyName({
       $:0,
       $0:(opt$5=(x$1=me.type,(prop$5="asm",prop$5 in x$1?{
        $:1,
        $0:x$1[prop$5]
       }:null)),opt$5==null?null:opt$5.$0)
      })),Arrays.map(function(p)
      {
       var prop$6,opt$6,prop$7,opt$7;
       return TypeRef.New(new FShUI_AssemblyData.TypeName({
        $:0,
        $0:(opt$6=(prop$6="tName",prop$6 in p?{
         $:1,
         $0:p[prop$6]
        }:null),opt$6==null?null:opt$6.$0)
       }),new FShUI_AssemblyData.AssemblyName({
        $:0,
        $0:(opt$7=(prop$7="asm",prop$7 in p?{
         $:1,
         $0:p[prop$7]
        }:null),opt$7==null?null:opt$7.$0)
       }));
      },me.parms),i);
     },mo.methods));
    },a$1.modules),d,r,j)))))));
   });
  });
 };
 FShUI.alreadyLoaded=function()
 {
  return Seq.length((FShUI.assemblies())["var"].Get())>0;
 };
 FShUI.processAssembly=function(def)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(FShUI["processAssembly'"](FShUI.isLoaded,function(d)
   {
    FShUI.loadDef(d);
   },function(a)
   {
    return LoadAsm.fetchAsmData(FShUI.Folder(),a);
   },def),function()
   {
    FShUI.restartAssemblies();
    return Concurrency.Zero();
   });
  });
 };
 FShUI.loadAssembly=function(asm)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(FShUI["loadAssembly'"](FShUI.isLoaded,function(d)
   {
    FShUI.loadDef(d);
   },function(a)
   {
    return LoadAsm.fetchAsmData(FShUI.Folder(),a);
   },asm),function()
   {
    FShUI.restartAssemblies();
    return Concurrency.Zero();
   });
  });
 };
 FShUI.restartAssemblies=function()
 {
  var asms;
  asms=Arrays.ofSeq((FShUI.assemblies())["var"].Get());
  FShUI.assemblies().Set(asms);
 };
 FShUI.Folder=function()
 {
  SC$1.$cctor();
  return SC$1.Folder;
 };
 FShUI.loadDef=function(def)
 {
  var a,i,$1,f;
  try
  {
   a=def.javaScripts;
   for(i=0,$1=a.length-1;i<=$1;i++){
    f=Arrays.get(a,i);
    Global["eval"](((((Runtime.Curried(function($2,$3,$4,$5)
    {
     return $2("console.log('loading "+Utils.toSafe($3)+" "+Utils.toSafe($4)+" ...');"+Utils.toSafe($5));
    },4))(Global.id))(def.name.get_Id()))(f[0]))(f[1].get_Id()));
   }
   FShUI.assemblies().Append(def);
  }
  catch(e)
  {
   ((function($2)
   {
    return function($3)
    {
     return $2(Utils.prettyPrint($3));
    };
   }(function(s)
   {
    console.log(s);
   }))(e));
  }
 };
 FShUI.isLoaded=function(asmRef)
 {
  return FShUI.assemblies().TryFind(function(ad)
  {
   return Unchecked.Equals(ad.self,asmRef);
  })!=null;
 };
 FShUI.assemblies=function()
 {
  SC$1.$cctor();
  return SC$1.assemblies;
 };
 FShUI["loadAssembly'"]=function(isLoaded,loadDef,fetchAsmData,asm)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return isLoaded(asm)?Concurrency.Zero():Concurrency.Bind(fetchAsmData(asm),function(a)
   {
    return Concurrency.Bind(FShUI["processAssembly'"](isLoaded,loadDef,fetchAsmData,a),function()
    {
     return Concurrency.Return(null);
    });
   });
  });
 };
 FShUI["processAssembly'"]=function(isLoaded,loadDef,fetchAsmData,def)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Combine(Concurrency.For(def.resources,function(a)
   {
    var pelem,elem,nelem;
    pelem=self.document.createElement("div");
    pelem.innerHTML=a.get_Id();
    elem=pelem.firstChild;
    nelem=self.document.createElement(elem.localName);
    return Concurrency.Combine(Concurrency.For(Operators.range(0,elem.attributes.length-1),function(a$1)
    {
     nelem.setAttribute(elem.attributes.item(a$1).nodeName,elem.attributes.item(a$1).nodeValue);
     return Concurrency.Zero();
    }),Concurrency.Delay(function()
    {
     self.document.head.appendChild(nelem);
     return Concurrency.Zero();
    }));
   }),Concurrency.Delay(function()
   {
    return Concurrency.Combine(Concurrency.For(def.dependencies,function(a)
    {
     return Concurrency.Bind(FShUI["loadAssembly'"](isLoaded,loadDef,fetchAsmData,a),function()
     {
      return Concurrency.Return(null);
     });
    }),Concurrency.Delay(function()
    {
     loadDef(def);
     return Concurrency.Zero();
    }));
   }));
  });
 };
 AssemblyUI.mainSubDoc=function()
 {
  SC$1.$cctor();
  return SC$1.mainSubDoc;
 };
 AssemblyUI.mainDocInput=function()
 {
  function s(a)
  {
   AssemblyUI.mainDocNameVar().Set(a);
  }
  return Doc.Element("div",[],[Doc.TextNode("mainDocNameVar:"),Doc.Button("Clear",[],function()
  {
   AssemblyUI.mainDocNameVar().Set(DocComposition.DOCEmpty);
  }),Doc.BindView(function(a)
  {
   return WsComposition.getUIDoc(s,a);
  },AssemblyUI.mainDocNameVar().get_View()),Doc.Button("Add text",[],function()
  {
   AssemblyUI.addDOC(new DocComposition({
    $:0,
    $0:new LocalId({
     $:0,
     $0:"t1"
    }),
    $1:"Text"
   }));
  }),Doc.Button("Add html",[],function()
  {
   AssemblyUI.addDOC(new DocComposition({
    $:18,
    $0:{
     $:1,
     $0:new HtmlElemTag({
      $:0,
      $0:"br"
     })
    },
    $1:[]
   }));
  })]);
 };
 AssemblyUI.mainDocVar=function()
 {
  SC$1.$cctor();
  return SC$1.mainDocVar;
 };
 AssemblyUI.assembliesDoc=function()
 {
  return Doc.Concat([Doc.Element("div",[],[Doc.Button("Load module:",[],function()
  {
   AssemblyUI.loadThisModule();
  }),Doc.Input([],AssemblyUI.thisModuleV())]),Doc.Button("Load F# Translator",[],function()
  {
   AssemblyUI.loadFsTranslator();
  }),Composition.showCompositions(),Doc.Button("Load Compossed Assemby",[],function()
  {
   AssemblyUI.loadCompossedAssembly();
  }),AssemblyUI.listAssembliesDoc(),AssemblyUI.currentAssembly(),AssemblyUI.styleDoc()]);
 };
 AssemblyUI.currentAssembly=function()
 {
  var b;
  return Doc.BindView(Global.id,(b=View.get_Do(),View.Bind(function(a)
  {
   return a!=null&&a.$==1?View.Bind(function(a$1)
   {
    return a$1!=null&&a$1.$==1?View.Const(AssemblyUI.assemblyDoc(a$1.$0)):View.Const(Doc.get_Empty());
   },FShUI.assemblies().TryFindByKeyAsView(a.$0)):View.Const(Doc.get_Empty());
  },AssemblyUI.selectedAssembly().get_View())));
 };
 AssemblyUI.assemblyDoc=function(asm)
 {
  var groups,y;
  function emptyDoc(mo,me)
  {
   return Doc.get_Empty();
  }
  function showView(mo,me)
  {
   var docc;
   return me.retType.name.get_Id()==="View<string>"?(docc=new DocComposition({
    $:10,
    $0:new Reference({
     $:1,
     $0:mo.name,
     $1:me
    })
   }),Doc.Concat([AssemblyUI.showAdd("Add",docc),docc.GetDoc()])):AssemblyUI.showAdd("Add",new DocComposition({
    $:7,
    $0:new Reference({
     $:1,
     $0:mo.name,
     $1:me
    })
   }));
  }
  function inputVar(mo,me)
  {
   var ref,doci,doca;
   return me.retType.name.get_Id()==="Var<string>"?(ref=new Reference({
    $:1,
    $0:mo.name,
    $1:me
   }),(doci=new DocComposition({
    $:12,
    $0:ref
   }),(doca=new DocComposition({
    $:13,
    $0:ref
   }),Doc.Concat([AssemblyUI.showAdd("Text",new DocComposition({
    $:11,
    $0:ref
   })),AssemblyUI.showAdd("Input",doci),AssemblyUI.showAdd("Area",doca),doci.GetDoc()])))):AssemblyUI.showAdd("Add",new DocComposition({
    $:8,
    $0:new Reference({
     $:1,
     $0:mo.name,
     $1:me
    })
   }));
  }
  function printText(mo,me)
  {
   var docc;
   return me.retType.name.get_Id()==="string"?(docc=new DocComposition({
    $:9,
    $0:new Reference({
     $:1,
     $0:mo.name,
     $1:me
    })
   }),Doc.Concat([AssemblyUI.showAdd("Add",docc),docc.GetDoc()])):AssemblyUI.showAdd("Add",new DocComposition({
    $:6,
    $0:new Reference({
     $:1,
     $0:mo.name,
     $1:me
    })
   }));
  }
  function showDoc(mo,me)
  {
   return AssemblyUI.showAdd("Add",new DocComposition({
    $:14,
    $0:new Reference({
     $:1,
     $0:mo.name,
     $1:me
    })
   }));
  }
  function showAct(mo,me)
  {
   return AssemblyUI.showAdd("Add",new DocComposition({
    $:2,
    $0:new Reference({
     $:1,
     $0:mo.name,
     $1:me
    }),
    $1:me.name.get_Id()
   }));
  }
  function m(oldp,t)
  {
   var p;
   p=t[2];
   return[[t[0],[t[1],function(me)
   {
    return p(me)&&!oldp(me);
   }]],function(me)
   {
    return p(me)||oldp(me);
   }];
  }
  groups=Arrays.ofSeq(Seq.map(function(t)
  {
   return t[1];
  },Seq.sortBy(function(t)
  {
   return t[0];
  },(y=List.ofArray([[1,function($1)
  {
   return function($2)
   {
    return inputVar($1,$2);
   };
  },function(me)
  {
   return Strings.StartsWith(me.retType.name.get_Id(),"Var<")&&me.isField;
  }],[2,function($1)
  {
   return function($2)
   {
    return showView($1,$2);
   };
  },function(me)
  {
   return Strings.StartsWith(me.retType.name.get_Id(),"View<")&&me.isField;
  }],[3,function($1)
  {
   return function($2)
   {
    return printText($1,$2);
   };
  },function(me)
  {
   return me.retType.name.get_Id()!=="Doc"&&me.isField&&!(me.retType.name.get_Id().indexOf("->")!=-1);
  }],[0,function($1)
  {
   return function($2)
   {
    return showDoc($1,$2);
   };
  },function(me)
  {
   return me.retType.name.get_Id()==="Doc"&&(me.isField||Seq.isEmpty(me.parms));
  }],[1,function($1)
  {
   return function($2)
   {
    return showAct($1,$2);
   };
  },function(me)
  {
   return me.retType.name.get_Id()==="unit"&&!me.isField&&Seq.isEmpty(me.parms);
  }],[4,function($1)
  {
   return function($2)
   {
    return emptyDoc($1,$2);
   };
  },function()
  {
   return true;
  }]]),(((Runtime.Curried3(Seq.mapFold))(m))(function()
  {
   return false;
  }))(y))[0])));
  return Doc.Concat([Doc.Element("h3",[],[Doc.TextNode(asm.name.get_Id())]),Doc.Element("div",[AttrModule.Class("wsfmwk-alternate")],List.ofSeq(Seq.delay(function()
  {
   return Seq.collect(function(m$1)
   {
    var f;
    f=m$1[0];
    return[AssemblyUI.methodRows(m$1[1],asm,function($1,$2)
    {
     return(f($1))($2);
    })];
   },groups);
  })))]);
 };
 AssemblyUI.showAdd=function(txt,docc)
 {
  return Doc.Button(txt,[],function()
  {
   AssemblyUI.addDOC(docc);
  });
 };
 AssemblyUI.addDOC=function(docc)
 {
  var a,m;
  a=(m=AssemblyUI.mainDocNameVar().Get(),m.$==17?docc:m.$==18?new DocComposition({
   $:18,
   $0:m.$0,
   $1:m.$1.concat([docc])
  }):new DocComposition({
   $:18,
   $0:null,
   $1:[m,docc]
  }));
  AssemblyUI.mainDocNameVar().Set(a);
 };
 AssemblyUI.styleDoc=function()
 {
  return Doc.Element("style",List.T.Empty,List.ofArray([Doc.TextNode("\r\n                            .wsfmwk-alternate > * :nth-child(even) {background: #CCF}\r\n                            .wsfmwk-alternate > * :nth-child(odd ) {background: #CFC}\r\n                            .wsfmwk-alternate td { border: white ; border-style: solid ; border-width: thin}\r\n                            .wsfmwk-alternate tr { border: white ; border-style: solid ; border-width: thin}\r\n                        ")]));
 };
 AssemblyUI.methodRows=function(p,asm,f)
 {
  return Doc.Element("table",[AttrProxy.Create("style","font-family: monospace")],List.ofSeq(Seq.delay(function()
  {
   return Seq.collect(function(mo)
   {
    var methods;
    methods=Seq.filter(p,mo.methods);
    return Seq.length(methods)>0?[Doc.Element("tr",[],List.ofSeq(Seq.delay(function()
    {
     return[Doc.Element("td",[],List.ofSeq(Seq.delay(function()
     {
      return Seq.append([Doc.Element("b",[],[Doc.TextNode(mo.name.get_Id2())])],Seq.delay(function()
      {
       return Seq.collect(function(me)
       {
        var s;
        return[Doc.Element("tr",[AssemblyUI.click(function()
        {
         Composition.selectedMethod().Set({
          $:1,
          $0:[asm.name,MethodDef2.New(me,mo.name)]
         });
        })],[Doc.Element("td",[],[Doc.TextNode(me.name.get_Id())]),Doc.Element("td",[],[Doc.TextNode(me.isField?"":(s=Strings.concat(" -> ",Seq.map(function(t)
        {
         return t.name.get_Id();
        },me.parms)),s===""?"unit":s))]),Doc.Element("td",[AssemblyUI.nobr()],[Doc.TextNode(me.isField?":":" -> ")]),Doc.Element("td",[],[Doc.TextNode(me.retType.name.get_Id())]),Doc.Element("td",[],[f(mo,me)])])];
       },methods);
      }));
     })))];
    })))]:[];
   },asm.modules);
  })));
 };
 AssemblyUI.listAssembliesDoc=function()
 {
  var m;
  function f(r,asmW)
  {
   return Doc.Element("tr",[],[Doc.Element("td",[AssemblyUI.click(function()
   {
    AssemblyUI.selectedAssembly().Set({
     $:1,
     $0:r
    });
   })],[Doc.TextView(View.Map(function($1)
   {
    return $1.name.get_Id();
   },asmW))])]);
  }
  return Doc.Element("table",[],[(m=FShUI.assemblies(),Doc.ConvertSeqBy(m.key,function($1)
  {
   return function($2)
   {
    return f($1,$2);
   };
  },m["var"].get_View()))]);
 };
 AssemblyUI.mainDocNameVar=function()
 {
  SC$1.$cctor();
  return SC$1.mainDocNameVar;
 };
 AssemblyUI.selectedAssembly=function()
 {
  SC$1.$cctor();
  return SC$1.selectedAssembly;
 };
 AssemblyUI.click$721$45=Runtime.Curried3(function(f,$1,$2)
 {
  return f();
 });
 AssemblyUI.click=function(f)
 {
  return AttrProxy.HandlerImpl("click",function()
  {
   return function()
   {
    return f();
   };
  });
 };
 AssemblyUI.nobr=function()
 {
  return AttrProxy.Create("style","white-space: nowrap");
 };
 AssemblyUI.loadCompossedAssembly=function()
 {
  Concurrency.Start(FShUI.processAssembly(Composition.createComposedAssembly(new FShUI_AssemblyData.AssemblyName({
   $:0,
   $0:"ComposedAssembly"
  }),Arrays.ofSeq(Seq.map(function(t)
  {
   return t[1];
  },(Composition.compositionsL())["var"].Get())))),null);
 };
 AssemblyUI.loadFsTranslator=function()
 {
  Concurrency.Start(FShUI.loadAssembly(new FShUI_AssemblyData.AssemblyRef({
   $:0,
   $0:"WsTranslatorLoader.asm"
  })),null);
 };
 AssemblyUI.loadThisModule=function()
 {
  Concurrency.Start(FShUI.loadAssembly(new FShUI_AssemblyData.AssemblyRef({
   $:0,
   $0:AssemblyUI.thisModuleV().Get()
  })),null);
 };
 AssemblyUI.thisModuleV=function()
 {
  SC$1.$cctor();
  return SC$1.thisModuleV;
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.selectedMethod=Var$1.Create$1(null);
  SC$1.compositionsL=ListModel.Create(function(t)
  {
   return t[0];
  },[]);
  SC$1.currentNodeO=null;
  SC$1.assemblies=ListModel.Create(function(ad)
  {
   return ad.name;
  },List.T.Empty);
  SC$1.Folder="/EPFileX/Assemblies/";
  SC$1.thisModuleV=Var$1.Create$1("Covid.asm");
  SC$1.selectedAssembly=Var$1.Create$1(null);
  SC$1.mainDocNameVar=Var$1.Create$1(new DocComposition({
   $:0,
   $0:new LocalId({
    $:0,
    $0:"NotInitialized"
   }),
   $1:"mainDocNameVar Not initialized yet"
  }));
  SC$1.mainDocVar=Var$1.Create$1(Doc.Element("h1",[],[Doc.TextNode("mainDocVar not initialized")]));
  View.Sink(function(docc)
  {
   var a;
   a=docc.GetDoc();
   AssemblyUI.mainDocVar().Set(a);
  },AssemblyUI.mainDocNameVar().get_View());
  SC$1.mainSubDoc=Doc.BindView(Global.id,AssemblyUI.mainDocVar().get_View());
 };
}());

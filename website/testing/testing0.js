(function()
{
 "use strict";
 var Global,FsRoot,TestingJS,SuperDoc,SuperDocCtor,SuperDoc$1,SuperAttr,SuperText,Test,SC$1,IntelliFactory,Runtime,WebSharper,Seq,Arrays,UI,View,FromView,Doc,Obj,Client,Templates,Utils,Var$1,AttrProxy,AttrModule;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 SuperDoc=TestingJS.SuperDoc=TestingJS.SuperDoc||{};
 SuperDocCtor=SuperDoc.SuperDocCtor=SuperDoc.SuperDocCtor||{};
 SuperDoc$1=SuperDoc.SuperDoc=SuperDoc.SuperDoc||{};
 SuperAttr=SuperDoc.SuperAttr=SuperDoc.SuperAttr||{};
 SuperText=SuperDoc.SuperText=SuperDoc.SuperText||{};
 Test=TestingJS.Test=TestingJS.Test||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 WebSharper=Global.WebSharper;
 Seq=WebSharper&&WebSharper.Seq;
 Arrays=WebSharper&&WebSharper.Arrays;
 UI=WebSharper&&WebSharper.UI;
 View=UI&&UI.View;
 FromView=UI&&UI.FromView;
 Doc=UI&&UI.Doc;
 Obj=WebSharper&&WebSharper.Obj;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Utils=WebSharper&&WebSharper.Utils;
 Var$1=UI&&UI.Var$1;
 AttrProxy=UI&&UI.AttrProxy;
 AttrModule=UI&&UI.AttrModule;
 SuperDocCtor=SuperDoc.SuperDocCtor=Runtime.Class({
  getSuperDoc:function(children)
  {
   return this.applyChildren(children).getSuperDoc$1();
  },
  applyChildren:function(children)
  {
   return Seq.fold(function(state,t)
   {
    return t.FsRoot_TestingJS_SuperDoc_ITransform$Transform(state);
   },this,children);
  },
  getSuperDoc$1:function()
  {
   var a,f,docs,atts;
   a=this;
   f=a.$0;
   docs=a.$2;
   atts=a.$1;
   return new SuperDoc$1({
    $:0,
    $0:function()
    {
     return(f(Arrays.map(function(a$1)
     {
      return a$1.$0();
     },atts)))(Arrays.map(function(a$1)
     {
      return a$1.$0();
     },docs));
    }
   });
  }
 },null,SuperDocCtor);
 SuperDocCtor.New=function(f)
 {
  return new SuperDocCtor({
   $:0,
   $0:f,
   $1:[],
   $2:[]
  });
 };
 SuperDoc$1=SuperDoc.SuperDoc=Runtime.Class({
  Doc:function()
  {
   return this.$0();
  },
  get_T:function()
  {
   return this;
  },
  Transform:function(a)
  {
   return new SuperDocCtor({
    $:0,
    $0:a.$0,
    $1:a.$1,
    $2:a.$2.concat([this])
   });
  },
  FsRoot_TestingJS_SuperDoc_ITransform$Transform:function(c)
  {
   return this.Transform(c);
  }
 },null,SuperDoc$1);
 SuperAttr=SuperDoc.SuperAttr=Runtime.Class({
  get_T:function()
  {
   return this;
  },
  Transform:function(a)
  {
   return new SuperDocCtor({
    $:0,
    $0:a.$0,
    $1:a.$1.concat([this]),
    $2:a.$2
   });
  },
  FsRoot_TestingJS_SuperDoc_ITransform$Transform:function(c)
  {
   return this.Transform(c);
  }
 },null,SuperAttr);
 SuperText=SuperDoc.SuperText=Runtime.Class({
  Txt:function()
  {
   return this.$==2?this.$0.get_View():this.$==0?View.Const(this.$0):this.$0;
  },
  get_V:function()
  {
   return this.$==2?this.$0:this.$==0?new FromView.New(View.Const(this.$0),Global.ignore):new FromView.New(this.$0,Global.ignore);
  },
  get_T:function()
  {
   return this;
  },
  Transform:function(a)
  {
   var w,v,t;
   return new SuperDocCtor({
    $:0,
    $0:a.$0,
    $1:a.$1,
    $2:a.$2.concat([new SuperDoc$1({
     $:0,
     $0:this.$==1?(w=this.$0,function()
     {
      return Doc.TextView(w);
     }):this.$==2?(v=this.$0,function()
     {
      return Doc.TextView(v.get_View());
     }):(t=this.$0,function()
     {
      return Doc.TextNode(t);
     })
    })])
   });
  },
  FsRoot_TestingJS_SuperDoc_ITransform$Transform:function(c)
  {
   return this.Transform(c);
  },
  FsRoot_TestingJS_SuperDoc_IView$GetView:function()
  {
   return this.Txt();
  }
 },null,SuperText);
 SuperDoc.input=function(v,children)
 {
  return(new SuperDocCtor({
   $:0,
   $0:function(attrs)
   {
    return function()
    {
     return Doc.Input(attrs,v);
    };
   },
   $1:[],
   $2:[]
  })).getSuperDoc(children);
 };
 SuperDoc.button=function(ch)
 {
  return SuperDoc.htmlF((Runtime.Curried3(Doc.Element))("button"),ch);
 };
 SuperDoc.div=function(ch)
 {
  return SuperDoc.htmlF((Runtime.Curried3(Doc.Element))("div"),ch);
 };
 SuperDoc.htmlTag=function(tag,children)
 {
  return SuperDocCtor.New((Runtime.Curried3(Doc.Element))(tag)).getSuperDoc(children);
 };
 SuperDoc.htmlF=function(f,children)
 {
  return SuperDocCtor.New(f).getSuperDoc(children);
 };
 SuperDoc.getSuperDoc=function(s)
 {
  return s.getSuperDoc$1();
 };
 SuperDoc.op_Multiply=function(f,a)
 {
  return View.Apply(f,a);
 };
 SuperDoc.op_Dereference=function(a)
 {
  return View.Const(a);
 };
 SuperDoc.TV=function(a)
 {
  return new SuperText({
   $:2,
   $0:a
  });
 };
 SuperDoc.TW=function(a)
 {
  return new SuperText({
   $:1,
   $0:a
  });
 };
 SuperDoc.TT=function(a)
 {
  return new SuperText({
   $:0,
   $0:a
  });
 };
 SuperDoc.TA=function(f,a)
 {
  return new SuperAttr({
   $:0,
   $0:function()
   {
    return f(a);
   }
  });
 };
 SuperDoc.TD=function(f,a)
 {
  return new SuperDoc$1({
   $:0,
   $0:function()
   {
    return f(a);
   }
  });
 };
 SuperDoc.T=Global.id;
 SuperDoc.mapW=function(f,x)
 {
  return new SuperText({
   $:1,
   $0:View.Map(f,x.FsRoot_TestingJS_SuperDoc_IView$GetView())
  });
 };
 SuperDoc.W=function(x)
 {
  var $1;
  $1={
   FsRoot_TestingJS_SuperDoc_IView$GetView:function()
   {
    return x.get_View();
   }
  };
  Obj.New.call($1);
  return $1;
 };
 Test.main=function()
 {
  var x,a;
  x=Test.mainDoc().Doc();
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 Test.mainDoc=function()
 {
  SC$1.$cctor();
  return SC$1.mainDoc;
 };
 Test.HelloWorld4=function()
 {
  SC$1.$cctor();
  return SC$1.HelloWorld4;
 };
 Test.HelloWorld3=function()
 {
  SC$1.$cctor();
  return SC$1.HelloWorld3;
 };
 Test.inpName=function()
 {
  SC$1.$cctor();
  return SC$1.inpName;
 };
 Test.buttonMore$290$97=Global.id;
 Test.buttonMore=function()
 {
  SC$1.$cctor();
  return SC$1.buttonMore;
 };
 Test.buttonHi$289$97=Global.id;
 Test.buttonHi=function()
 {
  SC$1.$cctor();
  return SC$1.buttonHi;
 };
 Test.buttonHello$288$97=Global.id;
 Test.buttonHello=function()
 {
  SC$1.$cctor();
  return SC$1.buttonHello;
 };
 Test.hiAct=function(a,a$1)
 {
  Global.alert((function($1)
  {
   return function($2)
   {
    return $1("Hi "+Utils.toSafe($2)+", How are you?");
   };
  }(Global.id))(Test.nameV().Get()));
 };
 Test.helloAct=function(a,a$1)
 {
  Global.alert((function($1)
  {
   return function($2)
   {
    return $1("Hello "+Utils.toSafe($2)+"!");
   };
  }(Global.id))(Test.nameV().Get()));
 };
 Test.HelloWorld2=function()
 {
  SC$1.$cctor();
  return SC$1.HelloWorld2;
 };
 Test.HelloWorld=function()
 {
  SC$1.$cctor();
  return SC$1.HelloWorld;
 };
 Test.colorW=function()
 {
  SC$1.$cctor();
  return SC$1.colorW;
 };
 Test.helloIamW=function()
 {
  SC$1.$cctor();
  return SC$1.helloIamW;
 };
 Test.iAmW=function()
 {
  SC$1.$cctor();
  return SC$1.iAmW;
 };
 Test.helloW=function()
 {
  SC$1.$cctor();
  return SC$1.helloW;
 };
 Test.nameV=function()
 {
  SC$1.$cctor();
  return SC$1.nameV;
 };
 Test.worldW=function()
 {
  SC$1.$cctor();
  return SC$1.worldW;
 };
 SC$1.$cctor=function()
 {
  var x,x$1,a,a$1,b,$1,$2,a$2,b$1,a$3,b$2,$3,$4,a$4,b$3,a$5,b$4,a$6,b$5,a$7,b$6,b$7,a$8,b$8;
  SC$1.$cctor=Global.ignore;
  function a$9(a$10,b$9)
  {
   return a$10+b$9;
  }
  SC$1.worldW=SuperDoc.TT("World");
  SC$1.nameV=Var$1.Create$1("Abe");
  SC$1.helloW=(x=Test.worldW(),SuperDoc.mapW(function($5)
  {
   return function($6)
   {
    return $5("Hello "+Utils.toSafe($6)+"!");
   };
  }(Global.id),x));
  SC$1.iAmW=(x$1=SuperDoc.W(Test.nameV()),SuperDoc.mapW(function($5)
  {
   return function($6)
   {
    return $5("My name is "+Utils.toSafe($6)+".");
   };
  }(Global.id),x$1));
  SC$1.helloIamW=SuperDoc.op_Multiply(SuperDoc.op_Multiply(SuperDoc.op_Dereference((Runtime.Curried3(function($5,$6,$7)
  {
   return $5("Hello "+Utils.toSafe($6)+"!, my name is "+Utils.toSafe($7)+".");
  }))(Global.id)),Test.worldW().Txt()),Test.nameV().get_View());
  SC$1.colorW=SuperDoc.op_Multiply(SuperDoc.op_Dereference(function($5)
  {
   return function($6)
   {
    return $5("color:"+Utils.toSafe($6));
   };
  }(Global.id)),Test.nameV().get_View());
  SC$1.HelloWorld=SuperDoc.div((a=(a$1=Test.helloW(),(b=Test.iAmW(),new SuperText({
   $:1,
   $0:($1=a$1.Txt(),($2=b.Txt(),((a$2=(Runtime.Curried3(function($5,$6,$7)
   {
    return $5(Utils.toSafe($6)+" "+Utils.toSafe($7));
   }))(Global.id),(Runtime.Curried3(View.Map2))(function($5,$6)
   {
    return(a$2($5))($6);
   }))($1))($2)))
  }))),(b$1=SuperDoc.TA(function(a$10)
  {
   return AttrProxy.Create("style",a$10);
  },"background-color:coral"),[a.get_T(),b$1.get_T()])));
  SC$1.HelloWorld2=SuperDoc.div([SuperDoc.T(Test.HelloWorld()),SuperDoc.T(Test.helloW()),SuperDoc.T(Test.iAmW()),SuperDoc.T(SuperDoc.div([new SuperText({
   $:1,
   $0:View.Map(function(a$10)
   {
    return a$10+".";
   },(a$3=new SuperText({
    $:1,
    $0:View.Map(function(a$10)
    {
     return a$10+"!, my name is";
    },(new SuperText({
     $:1,
     $0:View.Map(function(b$9)
     {
      return"Hello"+b$9;
     },Test.worldW().Txt())
    })).Txt())
   }),(b$2=Test.nameV(),new SuperText({
    $:1,
    $0:($3=a$3.Txt(),($4=b$2.get_View(),(((Runtime.Curried3(View.Map2))(a$9))($3))($4)))
   }))).Txt())
  })]))]);
  SC$1.buttonHello=SuperDoc.htmlTag("button",(a$4=new SuperText({
   $:1,
   $0:View.Map(function(b$9)
   {
    return(((Runtime.Curried3(function($5,$6,$7)
    {
     return $5(Utils.toSafe($6)+" "+Utils.toSafe($7));
    }))(Global.id))("Say Hello to my little"))(b$9);
   },SuperDoc.TV(Test.nameV()).Txt())
  }),(b$3=SuperDoc.TA(function(a$10)
  {
   return AttrProxy.HandlerImpl("click",a$10);
  },function(a$10)
  {
   return function(a$11)
   {
    return Test.helloAct(a$10,a$11);
   };
  }),[a$4.get_T(),b$3.get_T()])).concat([SuperDoc.TA(function(a$10)
  {
   return AttrProxy.Create("style",a$10);
  },"font-weight:800").get_T()]).concat([SuperDoc.TA(function(a$10)
  {
   return AttrModule.Dynamic("style",a$10);
  },Test.colorW()).get_T()]));
  SC$1.buttonHi=SuperDoc.button((a$5=new SuperText({
   $:1,
   $0:View.Map(function(a$10)
   {
    return(((Runtime.Curried3(function($5,$6,$7)
    {
     return $5(Utils.toSafe($6)+" "+Utils.toSafe($7));
    }))(Global.id))(a$10))("How are you?");
   },(new SuperText({
    $:1,
    $0:View.Map(function(b$9)
    {
     return(((Runtime.Curried3(function($5,$6,$7)
     {
      return $5(Utils.toSafe($6)+" "+Utils.toSafe($7));
     }))(Global.id))("Hi"))(b$9);
    },SuperDoc.TV(Test.nameV()).Txt())
   })).Txt())
  }),(b$4=SuperDoc.TA(function(a$10)
  {
   return AttrProxy.HandlerImpl("click",a$10);
  },function(a$10)
  {
   return function(a$11)
   {
    return Test.hiAct(a$10,a$11);
   };
  }),[a$5.get_T(),b$4.get_T()])));
  SC$1.buttonMore=SuperDoc.htmlF((Runtime.Curried3(Doc.Element))("button"),(a$6=new SuperText({
   $:1,
   $0:View.Map(function(a$10)
   {
    return(((Runtime.Curried3(function($5,$6,$7)
    {
     return $5(Utils.toSafe($6)+" "+Utils.toSafe($7));
    }))(Global.id))(a$10))("How are you?");
   },(new SuperText({
    $:1,
    $0:View.Map(function(b$9)
    {
     return(((Runtime.Curried3(function($5,$6,$7)
     {
      return $5(Utils.toSafe($6)+" "+Utils.toSafe($7));
     }))(Global.id))("Hi"))(b$9);
    },SuperDoc.TV(Test.nameV()).Txt())
   })).Txt())
  }),(b$5=SuperDoc.TA(function(a$10)
  {
   return AttrProxy.HandlerImpl("click",a$10);
  },function(a$10)
  {
   return function(a$11)
   {
    return Test.hiAct(a$10,a$11);
   };
  }),[a$6.get_T(),b$5.get_T()])));
  SC$1.inpName=SuperDoc.input(Test.nameV(),[]);
  SC$1.HelloWorld3=SuperDoc.div([new SuperText({
   $:1,
   $0:Test.helloIamW()
  })]);
  SC$1.HelloWorld4=SuperDoc.div((a$7=Test.HelloWorld(),(b$6=Test.helloW(),(b$7=new SuperText({
   $:0,
   $0:" "
  }),[a$7.get_T(),b$7.get_T()]).concat([b$6.get_T()]))).concat([Test.iAmW().get_T()]).concat([Test.HelloWorld().get_T()]));
  SC$1.mainDoc=SuperDoc.div((a$8=Test.HelloWorld(),(b$8=Test.HelloWorld2(),[a$8.get_T(),b$8.get_T()])).concat([Test.HelloWorld3().get_T()]).concat([Test.HelloWorld4().get_T()]).concat([Test.inpName().get_T()]).concat([Test.buttonHello().get_T()]).concat([Test.buttonHi().get_T()]));
 };
 Runtime.OnLoad(function()
 {
  Test.main();
 });
}());

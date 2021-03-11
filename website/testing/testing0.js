(function()
{
 "use strict";
 var Global,FsRoot,TestingJS,SuperDoc,SuperDocCtor,SuperDoc$1,SuperAttr,SuperText,SC$1,IntelliFactory,Runtime,WebSharper,Seq,Arrays,UI,View,FromView,Doc,Client,Templates,Utils,AttrProxy,Obj,Var$1,AttrModule;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 SuperDoc=TestingJS.SuperDoc=TestingJS.SuperDoc||{};
 SuperDocCtor=SuperDoc.SuperDocCtor=SuperDoc.SuperDocCtor||{};
 SuperDoc$1=SuperDoc.SuperDoc=SuperDoc.SuperDoc||{};
 SuperAttr=SuperDoc.SuperAttr=SuperDoc.SuperAttr||{};
 SuperText=SuperDoc.SuperText=SuperDoc.SuperText||{};
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
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Utils=WebSharper&&WebSharper.Utils;
 AttrProxy=UI&&UI.AttrProxy;
 Obj=WebSharper&&WebSharper.Obj;
 Var$1=UI&&UI.Var$1;
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
    return t.FsRoot_TestingJS_SuperDoc_ITransformSuperDocCtor$Transform(state);
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
  FsRoot_TestingJS_SuperDoc_ITransformSuperDocCtor$Transform:function(c)
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
  FsRoot_TestingJS_SuperDoc_ITransformSuperDocCtor$Transform:function(c)
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
  FsRoot_TestingJS_SuperDoc_ITransformSuperDocCtor$Transform:function(c)
  {
   return this.Transform(c);
  },
  FsRoot_TestingJS_SuperDoc_IView$GetView:function()
  {
   return this.Txt();
  }
 },null,SuperText);
 SuperDoc.main=function()
 {
  var x,a;
  x=SuperDoc.mainDoc().Doc();
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 SuperDoc.mainDoc=function()
 {
  SC$1.$cctor();
  return SC$1.mainDoc;
 };
 SuperDoc.HelloWorld4=function()
 {
  SC$1.$cctor();
  return SC$1.HelloWorld4;
 };
 SuperDoc.HelloWorld3=function()
 {
  SC$1.$cctor();
  return SC$1.HelloWorld3;
 };
 SuperDoc.inpName=function()
 {
  SC$1.$cctor();
  return SC$1.inpName;
 };
 SuperDoc.buttonMore=function()
 {
  SC$1.$cctor();
  return SC$1.buttonMore;
 };
 SuperDoc.buttonHi=function()
 {
  SC$1.$cctor();
  return SC$1.buttonHi;
 };
 SuperDoc.buttonHello=function()
 {
  SC$1.$cctor();
  return SC$1.buttonHello;
 };
 SuperDoc.hiAct=function(a,a$1)
 {
  Global.alert((function($1)
  {
   return function($2)
   {
    return $1("Hi "+Utils.toSafe($2)+", How are you?");
   };
  }(Global.id))(SuperDoc.nameV().Get()));
 };
 SuperDoc.helloAct=function(a,a$1)
 {
  Global.alert((function($1)
  {
   return function($2)
   {
    return $1("Hello "+Utils.toSafe($2)+"!");
   };
  }(Global.id))(SuperDoc.nameV().Get()));
 };
 SuperDoc.button=function(ch)
 {
  return SuperDoc.htmlF((Runtime.Curried3(Doc.Element))("button"),ch);
 };
 SuperDoc.button0=function(act,children)
 {
  return SuperDocCtor.New((Runtime.Curried3(Doc.Element))("button")).getSuperDoc(Seq.append([SuperDoc.eventClick(act)],children));
 };
 SuperDoc.htmlTag=function(tag,children)
 {
  return SuperDocCtor.New((Runtime.Curried3(Doc.Element))(tag)).getSuperDoc(children);
 };
 SuperDoc.htmlF=function(f,children)
 {
  return SuperDocCtor.New(f).getSuperDoc(children);
 };
 SuperDoc.eventClick$283$71=Global.id;
 SuperDoc.eventClick=function(act)
 {
  return new SuperAttr({
   $:0,
   $0:function()
   {
    return AttrProxy.HandlerImpl("click",act);
   }
  });
 };
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
 SuperDoc.HelloWorld2=function()
 {
  SC$1.$cctor();
  return SC$1.HelloWorld2;
 };
 SuperDoc.HelloWorld=function()
 {
  SC$1.$cctor();
  return SC$1.HelloWorld;
 };
 SuperDoc.div=function(p)
 {
  return SuperDoc.superElt((Runtime.Curried3(Doc.Element))("div"),p);
 };
 SuperDoc.T=Global.id;
 SuperDoc.superElt=function(f,children)
 {
  return(new SuperDocCtor({
   $:0,
   $0:f,
   $1:[],
   $2:[]
  })).getSuperDoc(children);
 };
 SuperDoc.colorW=function()
 {
  SC$1.$cctor();
  return SC$1.colorW;
 };
 SuperDoc.helloIamW=function()
 {
  SC$1.$cctor();
  return SC$1.helloIamW;
 };
 SuperDoc.iAmW=function()
 {
  SC$1.$cctor();
  return SC$1.iAmW;
 };
 SuperDoc.helloW=function()
 {
  SC$1.$cctor();
  return SC$1.helloW;
 };
 SuperDoc.nameV=function()
 {
  SC$1.$cctor();
  return SC$1.nameV;
 };
 SuperDoc.worldW=function()
 {
  SC$1.$cctor();
  return SC$1.worldW;
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
 SC$1.$cctor=function()
 {
  var x,x$1,a,b,$1,$2,a$1,a$2,b$1,$3,$4,a$3,b$2,a$4,b$3,a$5,b$4,a$6,b$5,b$6,a$7,b$7;
  SC$1.$cctor=Global.ignore;
  function a$8(a$9,b$8)
  {
   return a$9+b$8;
  }
  SC$1.worldW=SuperDoc.TT("World");
  SC$1.nameV=Var$1.Create$1("Abe");
  SC$1.helloW=(x=SuperDoc.worldW(),SuperDoc.mapW(function($5)
  {
   return function($6)
   {
    return $5("Hello "+Utils.toSafe($6)+"!");
   };
  }(Global.id),x));
  SC$1.iAmW=(x$1=SuperDoc.W(SuperDoc.nameV()),SuperDoc.mapW(function($5)
  {
   return function($6)
   {
    return $5("My name is "+Utils.toSafe($6)+".");
   };
  }(Global.id),x$1));
  SC$1.helloIamW=SuperDoc.op_Multiply(SuperDoc.op_Multiply(SuperDoc.op_Dereference((Runtime.Curried3(function($5,$6,$7)
  {
   return $5("Hello "+Utils.toSafe($6)+"!, my name is "+Utils.toSafe($7)+".");
  }))(Global.id)),SuperDoc.worldW().Txt()),SuperDoc.nameV().get_View());
  SC$1.colorW=SuperDoc.op_Multiply(SuperDoc.op_Dereference(function($5)
  {
   return function($6)
   {
    return $5("color:"+Utils.toSafe($6));
   };
  }(Global.id)),SuperDoc.nameV().get_View());
  SC$1.HelloWorld=SuperDoc.div([(a=SuperDoc.helloW(),(b=SuperDoc.iAmW(),new SuperText({
   $:1,
   $0:($1=a.Txt(),($2=b.Txt(),((a$1=(Runtime.Curried3(function($5,$6,$7)
   {
    return $5(Utils.toSafe($6)+" "+Utils.toSafe($7));
   }))(Global.id),(Runtime.Curried3(View.Map2))(function($5,$6)
   {
    return(a$1($5))($6);
   }))($1))($2)))
  })))]);
  SC$1.HelloWorld2=SuperDoc.div([SuperDoc.T(SuperDoc.HelloWorld()),SuperDoc.T(SuperDoc.helloW()),SuperDoc.T(SuperDoc.iAmW()),SuperDoc.T(SuperDoc.div([new SuperText({
   $:1,
   $0:View.Map(function(a$9)
   {
    return a$9+".";
   },(a$2=new SuperText({
    $:1,
    $0:View.Map(function(a$9)
    {
     return a$9+"!, my name is";
    },(new SuperText({
     $:1,
     $0:View.Map(function(b$8)
     {
      return"Hello"+b$8;
     },SuperDoc.worldW().Txt())
    })).Txt())
   }),(b$1=SuperDoc.nameV(),new SuperText({
    $:1,
    $0:($3=a$2.Txt(),($4=b$1.get_View(),(((Runtime.Curried3(View.Map2))(a$8))($3))($4)))
   }))).Txt())
  })]))]);
  SC$1.buttonHello=SuperDoc.htmlTag("button",(a$3=new SuperText({
   $:1,
   $0:View.Map(function(b$8)
   {
    return(((Runtime.Curried3(function($5,$6,$7)
    {
     return $5(Utils.toSafe($6)+" "+Utils.toSafe($7));
    }))(Global.id))("Say Hello to my little"))(b$8);
   },SuperDoc.TV(SuperDoc.nameV()).Txt())
  }),(b$2=SuperDoc.eventClick(function(a$9)
  {
   return function(a$10)
   {
    return SuperDoc.helloAct(a$9,a$10);
   };
  }),[a$3.get_T(),b$2.get_T()])).concat([SuperDoc.TA(function(a$9)
  {
   return AttrProxy.Create("style",a$9);
  },"font-weight:800").get_T()]).concat([SuperDoc.TA(function(a$9)
  {
   return AttrModule.Dynamic("style",a$9);
  },SuperDoc.colorW()).get_T()]));
  SC$1.buttonHi=SuperDoc.button((a$4=new SuperText({
   $:1,
   $0:View.Map(function(a$9)
   {
    return(((Runtime.Curried3(function($5,$6,$7)
    {
     return $5(Utils.toSafe($6)+" "+Utils.toSafe($7));
    }))(Global.id))(a$9))("How are you?");
   },(new SuperText({
    $:1,
    $0:View.Map(function(b$8)
    {
     return(((Runtime.Curried3(function($5,$6,$7)
     {
      return $5(Utils.toSafe($6)+" "+Utils.toSafe($7));
     }))(Global.id))("Hi"))(b$8);
    },SuperDoc.TV(SuperDoc.nameV()).Txt())
   })).Txt())
  }),(b$3=SuperDoc.eventClick(function(a$9)
  {
   return function(a$10)
   {
    return SuperDoc.hiAct(a$9,a$10);
   };
  }),[a$4.get_T(),b$3.get_T()])));
  SC$1.buttonMore=SuperDoc.htmlF((Runtime.Curried3(Doc.Element))("button"),(a$5=new SuperText({
   $:1,
   $0:View.Map(function(a$9)
   {
    return(((Runtime.Curried3(function($5,$6,$7)
    {
     return $5(Utils.toSafe($6)+" "+Utils.toSafe($7));
    }))(Global.id))(a$9))("How are you?");
   },(new SuperText({
    $:1,
    $0:View.Map(function(b$8)
    {
     return(((Runtime.Curried3(function($5,$6,$7)
     {
      return $5(Utils.toSafe($6)+" "+Utils.toSafe($7));
     }))(Global.id))("Hi"))(b$8);
    },SuperDoc.TV(SuperDoc.nameV()).Txt())
   })).Txt())
  }),(b$4=SuperDoc.eventClick(function(a$9)
  {
   return function(a$10)
   {
    return SuperDoc.hiAct(a$9,a$10);
   };
  }),[a$5.get_T(),b$4.get_T()])));
  SC$1.inpName=SuperDoc.input(SuperDoc.nameV(),[]);
  SC$1.HelloWorld3=SuperDoc.div([new SuperText({
   $:1,
   $0:SuperDoc.helloIamW()
  })]);
  SC$1.HelloWorld4=SuperDoc.div((a$6=SuperDoc.HelloWorld(),(b$5=SuperDoc.helloW(),(b$6=new SuperText({
   $:0,
   $0:" "
  }),[a$6.get_T(),b$6.get_T()]).concat([b$5.get_T()]))).concat([SuperDoc.iAmW().get_T()]).concat([SuperDoc.HelloWorld().get_T()]));
  SC$1.mainDoc=SuperDoc.div((a$7=SuperDoc.HelloWorld(),(b$7=SuperDoc.HelloWorld2(),[a$7.get_T(),b$7.get_T()])).concat([SuperDoc.HelloWorld3().get_T()]).concat([SuperDoc.HelloWorld4().get_T()]).concat([SuperDoc.inpName().get_T()]).concat([SuperDoc.buttonHello().get_T()]).concat([SuperDoc.buttonHi().get_T()]));
 };
 Runtime.OnLoad(function()
 {
  SuperDoc.main();
 });
}());

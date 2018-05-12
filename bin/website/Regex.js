
          CIPHERSpaceLoadFileGlobalFileRef = null;
          CIPHERSpaceLoadFile = function (filename, callback) {
              if (filename.slice(-3) == ".js" || filename.slice(-4) == ".fsx" || filename.slice(-3) == ".fs") { //if filename is a external JavaScript file
                  var fileRef = null;
                  var pre = document.querySelector('script[src="' + filename + '"]')
                  if (!pre) {
                      fileRef = document.createElement('script')
                      fileRef.setAttribute("type", "text/javascript")
                      fileRef.setAttribute("src", filename)
                  }
                  else callback();
              }
              else if (filename.slice(-4) == ".css") { //if filename is an external CSS file
                  var pre = document.querySelector('script[src="' + filename + '"]')
                  if (!pre) {
                      fileRef = document.createElement("link")
                      fileRef.setAttribute("rel", "stylesheet")
                      fileRef.setAttribute("type", "text/css")
                      fileRef.setAttribute("href", filename)
                  }
                  else callback();
              }
              else if (filename.slice(-5) == ".html") { //if filename is an external HTML file
                  var pre = document.querySelector('script[src="' + filename + '"]')
                  if (!pre) {
                      fileRef = document.createElement("link")
                      fileRef.setAttribute("rel", "import")
                      fileRef.setAttribute("type", "text/html")
                      fileRef.setAttribute("href", filename)
                  }
                  else callback();
              }
              if (!!fileRef) {
                  CIPHERSpaceLoadFileGlobalFileRef = fileRef;
      			fileRef.onload = function () { fileRef.onload = null;  callback(); }
                  document.getElementsByTagName("head")[0].appendChild(fileRef);
              }
          }
          CIPHERSpaceLoadFiles = function (files, callback) {
              var newCallback = callback
              if (!!CIPHERSpaceLoadFileGlobalFileRef && !!(CIPHERSpaceLoadFileGlobalFileRef.onload)) {
                  var oldCallback = CIPHERSpaceLoadFileGlobalFileRef.onload;
                  CIPHERSpaceLoadFileGlobalFileRef.onload = null;
                  newCallback = function () {
                      callback();
                      oldCallback();
                  }
              }
              var i = 0;
              loadNext = function () {
                  if (i < files.length) {
                      var file = files[i];
                      i++;
                      CIPHERSpaceLoadFile(file, loadNext);
                  }
                  else newCallback();
              };
              loadNext();
      	}
          CIPHERSpaceLoadFiles(['https://code.jquery.com/jquery-3.1.1.min.js'], function() {}); 
      	CIPHERSpaceLoadFilesDoAfter = function (callback) {
      		var newCallback = callback
      		if (!!CIPHERSpaceLoadFileGlobalFileRef) {
      			if (!!(CIPHERSpaceLoadFileGlobalFileRef.onload)) {
      				var oldCallback = CIPHERSpaceLoadFileGlobalFileRef.onload;
      				CIPHERSpaceLoadFileGlobalFileRef.onload = null;
      				newCallback = function () {
      					oldCallback();
      					callback();
      				}
      			}
      		}
      		else CIPHERSpaceLoadFileGlobalFileRef = {};
      		CIPHERSpaceLoadFileGlobalFileRef.onload = newCallback;
      	}
      
      CIPHERSpaceLoadFilesDoAfter(function() { 
        if (typeof IntelliFactory !=='undefined')
          IntelliFactory.Runtime.Start();
        for (key in window) { 
          if (key.startsWith("StartupCode$")) 
            try { window[key].$cctor(); } catch (e) {} 
        } 
      })
      
                       CIPHERSpaceLoadFiles(["/Scripts/WebSharper/WebSharper.Core.JavaScript/Runtime.js", "/Scripts/WebSharper/WebSharper.Main.js", "/Scripts/WebSharper/WebSharper.Collections.js", "/Scripts/WebSharper/WebSharper.Web.js", "/Scripts/WebSharper/WebSharper.Sitelets.js", "/Scripts/WebSharper/WebSharper.Control.js", "/Scripts/WebSharper/WebSharper.UI.js", "/Scripts/WebSharper/WebSharper.UI.Templating.Runtime.js"], function()
{
 "use strict";
 var Global,FSSGlobal,HtmlNode,Val,Var,ListModel,HelperType,WebSharper,Obj,valBuilder,HtmlNode$1,Template,Input,Panel,TextArea,RunCode,RunNode,Snippets,regex1,SC$1,IntelliFactory,Runtime,UI,View,Var$1,FromView,Doc,Operators,Utils,AttrModule,AttrProxy,Concurrency,List,Input$1,Mouse,Arrays,Strings,Seq,Collections,FSharpSet,BalancedTree,Unchecked;
 Global=window;
 FSSGlobal=Global.FSSGlobal=Global.FSSGlobal||{};
 HtmlNode=FSSGlobal.HtmlNode=FSSGlobal.HtmlNode||{};
 Val=HtmlNode.Val=HtmlNode.Val||{};
 Var=HtmlNode.Var=HtmlNode.Var||{};
 ListModel=HtmlNode.ListModel=HtmlNode.ListModel||{};
 HelperType=Val.HelperType=Val.HelperType||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 valBuilder=Val.valBuilder=Val.valBuilder||{};
 HtmlNode$1=HtmlNode.HtmlNode=HtmlNode.HtmlNode||{};
 Template=FSSGlobal.Template=FSSGlobal.Template||{};
 Input=Template.Input=Template.Input||{};
 Panel=Template.Panel=Template.Panel||{};
 TextArea=Template.TextArea=Template.TextArea||{};
 RunCode=FSSGlobal.RunCode=FSSGlobal.RunCode||{};
 RunNode=RunCode.RunNode=RunCode.RunNode||{};
 Snippets=FSSGlobal.Snippets=FSSGlobal.Snippets||{};
 regex1=Snippets.regex1=Snippets.regex1||{};
 SC$1=Global["StartupCode$Temp_v1qcc2bp$bf864f3c-1370-42f2-ac8a-565a604892e8 FSSGlobal"]=Global["StartupCode$Temp_v1qcc2bp$bf864f3c-1370-42f2-ac8a-565a604892e8 FSSGlobal"]||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 UI=WebSharper&&WebSharper.UI;
 View=UI&&UI.View;
 Var$1=UI&&UI.Var;
 FromView=UI&&UI.FromView;
 Doc=UI&&UI.Doc;
 Operators=WebSharper&&WebSharper.Operators;
 Utils=WebSharper&&WebSharper.Utils;
 AttrModule=UI&&UI.AttrModule;
 AttrProxy=UI&&UI.AttrProxy;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 List=WebSharper&&WebSharper.List;
 Input$1=UI&&UI.Input;
 Mouse=Input$1&&Input$1.Mouse;
 Arrays=WebSharper&&WebSharper.Arrays;
 Strings=WebSharper&&WebSharper.Strings;
 Seq=WebSharper&&WebSharper.Seq;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpSet=Collections&&Collections.FSharpSet;
 BalancedTree=Collections&&Collections.BalancedTree;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Val=HtmlNode.Val=Runtime.Class({
  get_ValTypeMember:function()
  {
   return 0;
  }
 },null,Val);
 Var.lensView=function(get,update,view0,_var)
 {
  var id,view,$1;
  id=Var.freshId();
  view=View.Map2(function(v)
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
  return new FromView.New(View.Map2(function(_mdl,kO)
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
   var a;
   a=upd(v);
   kO==null?void 0:a(kO.$0);
   return kO;
  },model.v,curr);
 };
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
 },Obj,valBuilder);
 valBuilder.New=Runtime.Ctor(function()
 {
 },valBuilder);
 Val.fixitF=function(_f,v)
 {
  return _f(v);
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
  }):o instanceof Val?o:o instanceof Var$1?new Val({
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
  return va.$==2?AttrModule.Dynamic(att,va.$0):va.$==1?AttrModule.Dynamic(att,va.$0.get_View()):AttrProxy.Create(att,va.$0);
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
  },va.get_View()),View.Map(function(o)
  {
   return o==null?"":o.$0;
  },va.get_View()))):vao.$0==null?AttrModule.DynamicPred(att,View.Const(false),View.Const("")):AttrProxy.Create(att,vao.$0.$0);
 };
 Val.tagElt=function(tag,va)
 {
  return va.$==2?Doc.EmbedView(View.Map(tag,va.$0)):va.$==1?Doc.EmbedView(View.Map(tag,va.$0.get_View())):tag(va.$0);
 };
 Val.tagDoc=function(tag,va)
 {
  return va.$==2?Doc.EmbedView(View.Map(tag,va.$0)):va.$==1?Doc.EmbedView(View.Map(tag,va.$0.get_View())):tag(va.$0);
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
 Val.map2V=function(f_a_b_c)
 {
  function f_aVbVc(a)
  {
   var f;
   f=f_a_b_c(a);
   return function(v)
   {
    return Val.mapV(f,v);
   };
  }
  function fVb_aVc(vb)
  {
   return((Val.swap())(f_aVbVc))(vb);
  }
  function fVbVaVc(vb)
  {
   var f;
   f=fVb_aVc(vb);
   return function(v)
   {
    return Val.bindV(f,v);
   };
  }
  return function(va)
  {
   return((Val.swap())(fVbVaVc))(va);
  };
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
   },v.$0.get_View())
  }):f(v.$0);
 };
 Val.getAsync=function(v)
 {
  return v.$==2?View.GetAsync(v.$0):v.$==1?Concurrency.Return(v.$0.Get()):Concurrency.Return(v.$0);
 };
 Val.toView=function(v)
 {
  return v.$==2?v.$0:v.$==1?v.$0.get_View():View.Const(v.$0);
 };
 Val.iterV=function(f,va)
 {
  if(va.$==2)
   View.Get(f,va.$0);
  else
   if(va.$==1)
    f(va.$0.Get());
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
   $0:View.Map(f,va.$0.get_View())
  }):new Val({
   $:0,
   $0:f(va.$0)
  });
 };
 Val.swap=function()
 {
  SC$1.$cctor();
  return SC$1.swap;
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
   return this.$==3||this.$==6?Doc.Empty():(x=HtmlNode.chooseNode(this),(v=Doc.Empty(),x==null?v:x.$0));
  }
 },null,HtmlNode$1);
 HtmlNode$1.HtmlEmpty=new HtmlNode$1({
  $:6
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
 HtmlNode.findRootElement=function(e)
 {
  var root;
  return!function(a)
  {
   return e.getRootNode(a);
  }?Global.document.body:(root=e.getRootNode(),!root.body?root.firstChild:root.body);
 };
 HtmlNode.createIFrame$101$45=Runtime.Curried3(function(cover,$1,$2)
 {
  return View.Get(function(pressed)
  {
   if(!pressed)
    cover.Set(false);
  },Mouse.get_MousePressed());
 });
 HtmlNode.createIFrame$96$45=Runtime.Curried3(function(cover,$1,$2)
 {
  return cover.Set(true);
 });
 HtmlNode.createIFrame$95$45=Global.id;
 HtmlNode.createIFrame=function(f)
 {
  var cover;
  cover=Var$1.Create$1(true);
  return HtmlNode.div([HtmlNode.style("position: relative; overflow: hidden; height: 100%; width: 100%;"),HtmlNode.iframe([HtmlNode.style("position: absolute; width:100%; height:100%;"),HtmlNode.frameborder("0"),new HtmlNode$1({
   $:8,
   $0:AttrProxy.OnAfterRenderImpl(f)
  }),new HtmlNode$1({
   $:8,
   $0:AttrProxy.HandlerImpl("mouseleave",function()
   {
    return function()
    {
     return cover.Set(true);
    };
   })
  })]),HtmlNode.div([HtmlNode.style("position: absolute;"),HtmlNode.classIf("iframe-cover",Val.map(Global.id,cover)),new HtmlNode$1({
   $:8,
   $0:AttrProxy.HandlerImpl("mouseenter",function()
   {
    return function()
    {
     return View.Get(function(pressed)
     {
      if(!pressed)
       cover.Set(false);
     },Mouse.get_MousePressed());
    };
   })
  })]),HtmlNode.styleH([HtmlNode.htmlText(".iframe-cover { top:0; left:0; right:0; bottom:0; background: blue; opacity: 0.04; z-index: 2; }")])]);
 };
 HtmlNode.bindHElem=function(hElemF,v)
 {
  return new HtmlNode$1({
   $:2,
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
 HtmlNode.placeholder=function(v)
 {
  return HtmlNode.htmlAttribute("placeholder",v);
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
   $:7,
   $0:elt
  });
 };
 HtmlNode.str=function(txt)
 {
  return new HtmlNode$1({
   $:5,
   $0:Val.fixit(txt)
  });
 };
 HtmlNode.htmlText=function(txt)
 {
  return new HtmlNode$1({
   $:5,
   $0:Val.fixit(txt)
  });
 };
 HtmlNode.htmlAttributeO=function(name,v)
 {
  return new HtmlNode$1({
   $:4,
   $0:name,
   $1:Val.fixit(v)
  });
 };
 HtmlNode.htmlAttribute=function(name,v)
 {
  return new HtmlNode$1({
   $:3,
   $0:name,
   $1:Val.fixit(v)
  });
 };
 HtmlNode.htmlElementF=function(func,ch)
 {
  return new HtmlNode$1({
   $:1,
   $0:func,
   $1:ch
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
  })):element.$==2?new HtmlNode$1({
   $:2,
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
   return a.$==3&&(a.$0===attr&&($1=[a.$0,a.$1],true))?{
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
  var children,children$1,x,g,v;
  return node.$==0?(children=node.$1,{
   $:1,
   $0:Doc.Element(node.$0,HtmlNode.getAttrsFromSeq(children),Seq.choose(HtmlNode.chooseNode,children))
  }):node.$==1?(children$1=node.$1,{
   $:1,
   $0:(node.$0(HtmlNode.getAttrsFromSeq(children$1)))(Seq.choose(HtmlNode.chooseNode,children$1))
  }):node.$==2?{
   $:1,
   $0:(x=Val.toView(node.$0),Doc.BindView((g=(v=Doc.Empty(),function(o)
   {
    return o==null?v:o.$0;
   }),function(x$1)
   {
    return g(HtmlNode.chooseNode(x$1));
   }),x))
  }:node.$==5?{
   $:1,
   $0:Val.tagDoc(Doc.TextNode,node.$0)
  }:node.$==7?{
   $:1,
   $0:node.$0
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
  return node.$==3&&(node.$0===_this&&($1=[node.$0,node.$1],true))?{
   $:1,
   $0:$1[1]
  }:null;
 };
 HtmlNode.chooseAttr=function(node)
 {
  var $1,name,$2,name$1;
  return node.$==3&&((name=node.$0,name!=="class"&&name!=="style")&&($1=[node.$0,node.$1],true))?{
   $:1,
   $0:Val.attrV($1[0],$1[1])
  }:node.$==4&&((name$1=node.$0,name$1!=="class"&&name$1!=="style")&&($2=[node.$0,node.$1],true))?{
   $:1,
   $0:Val.attrVO($2[0],$2[1])
  }:node.$==8?{
   $:1,
   $0:node.$0
  }:null;
 };
 HtmlNode.addClassX=function(classes,add)
 {
  var x;
  return Strings.concat(" ",(x=new FSharpSet.New$1(BalancedTree.OfSeq(Strings.SplitChars(classes,[" "],0))),new FSharpSet.New$1(BalancedTree.OfSeq(Seq.append(new FSharpSet.New$1(BalancedTree.OfSeq(Strings.SplitChars(add,[" "],0))),x)))));
 };
 Input=Template.Input=Runtime.Class({
  get_Var:function()
  {
   return this["var"];
  },
  Disabled:function(dis)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,this.id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded,Val.fixit(dis));
  },
  SetVar:function(v)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,this.id,v,this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded,this.disabled);
  },
  Suffix:function(s)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,this.id,this["var"],this.prefix,s,this.content,this.prefixAdded,true,this.disabled);
  },
  Prefix:function(p)
  {
   return this.Prefix$1(HtmlNode.htmlText(p));
  },
  Prefix$1:function(p)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,this.id,this["var"],p,this.suffix,this.content,true,this.suffixAdded,this.disabled);
  },
  Content:function(c)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,this.id,this["var"],this.prefix,this.suffix,c,this.prefixAdded,this.suffixAdded,this.disabled);
  },
  Id:function(id)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded,this.disabled);
  },
  Placeholder:function(plc)
  {
   return Input.New(this._type,this._class,this.style,Val.fixit(plc),this.id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded,this.disabled);
  },
  Style:function(sty)
  {
   return Input.New(this._type,this._class,Val.fixit(sty),this.placeholder,this.id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded,this.disabled);
  },
  Type:function(typ)
  {
   return Input.New(Val.fixit(typ),this._class,this.style,this.placeholder,this.id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded,this.disabled);
  },
  Class:function(clas)
  {
   return Input.New(this._type,Val.fixit(clas),this.style,this.placeholder,this.id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded,this.disabled);
  },
  get_Render:function()
  {
   var $this;
   function groupClass(det)
   {
    return det.$==5?"input-group-addon":"input-group-btn";
   }
   $this=this;
   return HtmlNode.div(List.ofSeq(Seq.delay(function()
   {
    return Seq.append($this.prefixAdded||$this.suffixAdded?[HtmlNode["class"]("input-group")]:[],Seq.delay(function()
    {
     return Seq.append($this.prefixAdded?[HtmlNode.span([HtmlNode["class"](groupClass($this.prefix)),$this.prefix])]:[],Seq.delay(function()
     {
      var view;
      return Seq.append([new HtmlNode$1({
       $:7,
       $0:Doc.Input(Seq.append($this.content,List.ofArray([HtmlNode._type($this._type),HtmlNode._class($this._class),HtmlNode._style($this.style),AttrProxy.Create("id",$this.id),(view=View.Const(""),AttrModule.DynamicPred("disabled",Val.toView($this.disabled),view)),HtmlNode._placeholder($this.placeholder)])),$this["var"])
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
  return Input.New$3(Var$1.Lens(v,function(o)
  {
   return o==null?"":o.$0;
  },function(sO,s)
  {
   return sO==null?null:{
    $:1,
    $0:s
   };
  })).Disabled(Val.map(function(o)
  {
   return o==null;
  },v));
 };
 Input.New$2=function(v)
 {
  return Input.New$3(Var$1.Create$1(v));
 };
 Input.New$3=function(_var)
 {
  var c;
  c=Val.fixit("form-control");
  return Input.New(Val.fixit("text"),c,Val.fixit(""),Val.fixit("Enter text:"),"",_var,HtmlNode$1.HtmlEmpty,HtmlNode$1.HtmlEmpty,List.T.Empty,false,false,Val.fixit(false));
 };
 Input.New=function(_type,_class,style,placeholder,id,_var,prefix,suffix,content,prefixAdded,suffixAdded,disabled)
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
   suffixAdded:suffixAdded,
   disabled:disabled
  });
 };
 Panel=Template.Panel=Runtime.Class({
  Disabled:function(dis)
  {
   return Panel.New(this._class,this._style,this.title,this.header,this.content,dis);
  },
  Content:function(c)
  {
   return Panel.New(this._class,this._style,this.title,this.header,c,this.disabled);
  },
  Header:function(h)
  {
   return Panel.New(this._class,this._style,this.title,h,this.content,this.disabled);
  },
  Title:function(txt)
  {
   return Panel.New(this._class,this._style,Val.fixit(txt),this.header,this.content,this.disabled);
  },
  Style:function(sty)
  {
   return Panel.New(this._class,Val.fixit(sty),this.title,this.header,this.content,this.disabled);
  },
  Class:function(clas)
  {
   return Panel.New(Val.fixit(clas),this._style,this.title,this.header,this.content,this.disabled);
  },
  get_Render:function()
  {
   var view;
   return HtmlNode.fieldset([new HtmlNode$1({
    $:8,
    $0:(view=View.Const(""),AttrModule.DynamicPred("disabled",Val.toView(this.disabled),view))
   }),HtmlNode.div([HtmlNode["class"](this._class),HtmlNode.div(Seq.append([HtmlNode["class"]("panel-heading"),HtmlNode.label([HtmlNode["class"]("panel-title text-center"),HtmlNode.htmlText(this.title)])],this.header)),HtmlNode.div(Seq.append([HtmlNode["class"]("panel-body"),HtmlNode.style(this._style)],this.content))])]);
  }
 },null,Panel);
 Panel.get_New=function()
 {
  return Panel.New(Val.fixit("panel panel-default shadow"),Val.fixit("text-align:center"),Val.fixit("Panel"),List.ofArray([HtmlNode.htmlText("Some text")]),List.ofArray([HtmlNode.htmlText("Some Content")]),Val.fixit(Var$1.Create$1(false)));
 };
 Panel.New=function(_class,_style,title,header,content,disabled)
 {
  return new Panel({
   _class:_class,
   _style:_style,
   title:title,
   header:header,
   content:content,
   disabled:disabled
  });
 };
 TextArea=Template.TextArea=Runtime.Class({
  get_Var:function()
  {
   return this["var"];
  },
  Disabled:function(dis)
  {
   return TextArea.New(this._class,this.placeholder,this.title,this.spellcheck,this.id,this["var"],Val.fixit(dis));
  },
  SetVar:function(v)
  {
   return TextArea.New(this._class,this.placeholder,this.title,this.spellcheck,this.id,v,this.disabled);
  },
  Id:function(id)
  {
   return TextArea.New(this._class,this.placeholder,this.title,this.spellcheck,id,this["var"],this.disabled);
  },
  Spellcheck:function(spl)
  {
   return TextArea.New(this._class,this.placeholder,this.title,spl,this.id,this["var"],this.disabled);
  },
  Title:function(ttl)
  {
   return TextArea.New(this._class,this.placeholder,Val.fixit(ttl),this.spellcheck,this.id,this["var"],this.disabled);
  },
  Placeholder:function(plc)
  {
   return TextArea.New(this._class,Val.fixit(plc),this.title,this.spellcheck,this.id,this["var"],this.disabled);
  },
  Class:function(clas)
  {
   return TextArea.New(Val.fixit(clas),this.placeholder,this.title,this.spellcheck,this.id,this["var"],this.disabled);
  },
  get_Render:function()
  {
   return this.RenderWith(List.T.Empty);
  },
  RenderWith:function(more)
  {
   var $this,view;
   $this=this;
   return HtmlNode.div([HtmlNode.htmlElementF(function(att)
   {
    return function()
    {
     return Doc.InputArea(att,$this["var"]);
    };
   },List.append(List.ofArray([HtmlNode["class"](this._class),HtmlNode.Id(this.id),HtmlNode.spellcheck(Val.map(function(spl)
   {
    return spl?"true":"false";
   },this.spellcheck)),HtmlNode.title(this.title),HtmlNode.style("height: 100%;  width: 100%; box-sizing: border-box; "),HtmlNode.placeholder(this.placeholder),new HtmlNode$1({
    $:8,
    $0:(view=View.Const(""),AttrModule.DynamicPred("disabled",Val.toView(this.disabled),view))
   })]),more))]);
  }
 },null,TextArea);
 TextArea.New$1=function(v)
 {
  return TextArea.New$3(Var$1.Lens(v,function(o)
  {
   return o==null?"":o.$0;
  },function(sO,s)
  {
   return sO==null?null:{
    $:1,
    $0:s
   };
  })).Disabled(Val.map(function(o)
  {
   return o==null;
  },v));
 };
 TextArea.New$2=function(v)
 {
  return TextArea.New$3(Var$1.Create$1(v));
 };
 TextArea.New$3=function(_var)
 {
  return TextArea.New(Val.fixit("form-control"),Val.fixit("Enter text:"),Val.fixit(""),Val.fixit(false),"",_var,Val.fixit(false));
 };
 TextArea.New=function(_class,placeholder,title,spellcheck,id,_var,disabled)
 {
  return new TextArea({
   _class:_class,
   placeholder:placeholder,
   title:title,
   spellcheck:spellcheck,
   id:id,
   "var":_var,
   disabled:disabled
  });
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
  ShowResult:function(res)
  {
   this.ShowHtmlResult(HtmlNode.htmlText((function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(res)));
  },
  ShowHtmlResult:function(res)
  {
   this.ShowHtmlResult$1([res]);
  },
  ShowHtmlResult$1:function(res)
  {
   this.get_AddBootstrap();
   this.RunHtml(HtmlNode.div([HtmlNode["class"]("container"),Panel.get_New().Title("Result:").Header([]).Content([HtmlNode.h3(res),HtmlNode.style("font-family:monospace;")]).get_Render()]));
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
 },Obj,RunNode);
 RunNode.New=Runtime.Ctor(function(clearNode,useShadowRoot)
 {
  RunNode.New$1.call(this,"TestNode",clearNode,useShadowRoot);
 },RunNode);
 RunNode.New$1=Runtime.Ctor(function(nodeName,clearNode,useShadowRoot)
 {
  var baseNode,m,m$1,p,e;
  this.nodeName=nodeName;
  baseNode=(m=Global.document.getElementById(this.nodeName),Unchecked.Equals(m,null)?this.createBaseNode():m);
  this.runNode=!(useShadowRoot==null||useShadowRoot.$0)?baseNode:(m$1=baseNode.shadowRoot,Unchecked.Equals(m$1,null)?(p=this.createNode(),(baseNode.attachShadow({
   mode:"open"
  }).appendChild(p),e=this.createNode(),p.appendChild(e),e)):m$1.firstChild);
  clearNode==null||clearNode.$0?this.runNode.innerHTML="":void 0;
 },RunNode);
 regex1.opt=function()
 {
  SC$1.$cctor();
  return SC$1.opt;
 };
 regex1.rx=function()
 {
  SC$1.$cctor();
  return SC$1.rx;
 };
 regex1.inp=function()
 {
  SC$1.$cctor();
  return SC$1.inp;
 };
 regex1.optVar=function()
 {
  SC$1.$cctor();
  return SC$1.optVar;
 };
 regex1.rexVar=function()
 {
  SC$1.$cctor();
  return SC$1.rexVar;
 };
 regex1.inpVar=function()
 {
  SC$1.$cctor();
  return SC$1.inpVar;
 };
 regex1.rex=function()
 {
  SC$1.$cctor();
  return SC$1.rex;
 };
 regex1.rex2=function()
 {
  SC$1.$cctor();
  return SC$1.rex2;
 };
 regex1.rex1=function()
 {
  SC$1.$cctor();
  return SC$1.rex1;
 };
 regex1.txt=function()
 {
  SC$1.$cctor();
  return SC$1.txt;
 };
 regex1.duple=function(a,b)
 {
  return[a,b];
 };
 regex1.REGEX=function(expr,opt,value)
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
 regex1.newstr=function()
 {
  SC$1.$cctor();
  return SC$1.newstr;
 };
 regex1.regex=function()
 {
  SC$1.$cctor();
  return SC$1.regex;
 };
 regex1.str=function()
 {
  SC$1.$cctor();
  return SC$1.str;
 };
 SC$1.$cctor=function()
 {
  var g,v,g$1,x;
  SC$1.$cctor=Global.ignore;
  function m(n,v$1)
  {
   return new HtmlNode$1({
    $:8,
    $0:AttrModule.Style(n,v$1)
   });
  }
  SC$1.counter=1;
  SC$1.swap=Runtime.Curried3(function(f,a,b)
  {
   return(f(b))(a);
  });
  SC$1.valFlow=new valBuilder.New();
  SC$1.renderDoc=(g=(v=Doc.Empty(),function(o)
  {
   return o==null?v:o.$0;
  }),function(x$1)
  {
   return g(HtmlNode.chooseNode(x$1));
  });
  SC$1.string2Styles=(g$1=function(a)
  {
   return Arrays.map(function($1)
   {
    return m($1[0],$1[1]);
   },a);
  },function(x$1)
  {
   return g$1(HtmlNode.style2pairs(x$1));
  });
  SC$1.str=new Global.String("Bob likes pineapples.");
  SC$1.regex=new Global.RegExp("^\\w+");
  SC$1.newstr=regex1.str().replace(regex1.regex(),"Alice");
  SC$1.txt="Compiling to JavaScript...\n        2 errors, 0 warnings\n        ErrFSharp\n          \"F# Regex Pattern matching (47,39) - (47,40) parse 10: Unexpected symbol '<' in expression\"\n        ErrFSharp\n          \"F# Regex Pattern matching (47,49) - (47,50) parse 514: End of file in string begun at or before here\" \n        WarningFSharp\n          \"F# Regex Pattern matching (16,0) - (16,1) typecheck 20: The result of this expression is implicitly ignored. Consider using 'ignore' to discard this value explicitly, e.g. 'expr |> ignore', or 'let' to bind the result to a name, e.g. 'let result = expr'.\"  \n        Evaluating F# code...\n        (6) F# 7k.fsx(1,7): error FS1156: This is not a valid numeric literal. Valid numeric literals include 1, 0x1, 0b0001 (int), 1u (uint32), 1L (int64), 1UL (uint64), 1s (int16), 1y (sbyte), 1uy (byte), 1.0 (float), 1.0f (float32), 1.0m (decimal), 1I (BigInteger).  \n        Compiling to JavaScript...\n        6 errors, 1 warnings\n        WarningFSharp\n          \"F# Regex Pattern matching (16,0) - (16,1) typecheck 20: The result of this expression is implicitly ignored. Consider using 'ignore' to discard this value explicitly, e.g. 'expr |> ignore', or 'let' to bind the result to a name, e.g. 'let result = expr'.\"\n        ErrWebSharper\n          \"(6) F# Regex Pattern matching.fsx (120, 19) - (120, 46) Type not found in JavaScript compilation: System.Text.RegularExpressions.Regex\"\n        ErrWebSharper\n          \"(6) F# Regex Pattern matching.fsx (121, 14) - (121, 23) Type not found in JavaScript compilation: System.Text.RegularExpressions.Group\"\n        ErrWebSharper\n          \"(6) F# Regex Pattern matching.fsx (121, 67) - (121, 74) Type not found in JavaScript compilation: System.Text.RegularExpressions.Capture\"\n        ErrWebSharper\n          \"(6) F# Regex Pattern matching.fsx (121, 55) - (121, 63) Type not found in JavaScript compilation: System.Text.RegularExpressions.Match\"\n        ErrWebSharper\n          \"(6) F# Regex Pattern matching.fsx (121, 55) - (121, 63) Method name not found in JavaScript compilation: (EnumerateFromFunctions<_,_> : (unit -> 'T0) * ('T0 -> System.Boolean) * ('T0 -> 'T1) -> System.Collections.Generic.IEnumerable`1<'T1>), Members: safeDispose, EnumerateThenFinally, EnumerateUsing, EnumerateWhile, CreateEvent\"\n        ErrWebSharper\n          \"(6) F# Regex Pattern matching.fsx (121, 55) - (121, 63) Type not found in JavaScript compilation: System.Text.RegularExpressions.GroupCollection\"\n        ";
  SC$1.rex1="\\((\\d+)\\) F# (.+).fsx\\((\\d+)\\,(\\d+)\\): (error|warning) ((.|\\b)+)\\.";
  SC$1.rex2="(Err|Warning|Info)(FSharp|WebSharper)\\s+\"(\\((\\d+)\\) ?)?F?#? ?(.+?)(.fsx)? \\((\\d+)\\,\\s*(\\d+)\\) - \\((\\d+)\\,\\s*(\\d+)\\) ((.|\\s)+?)"+"\"";
  SC$1.rex=regex1.rex1()+"|"+regex1.rex2();
  SC$1.inpVar=Var$1.Create$1(regex1.txt());
  SC$1.rexVar=Var$1.Create$1(regex1.rex());
  SC$1.optVar=Var$1.Create$1("g");
  SC$1.inp=Doc.InputArea([AttrProxy.Create("spellcheck","false"),AttrProxy.Create("style","height: 100%;  width: 100%; box-sizing: border-box; "),AttrProxy.Create("placeholder","Text")],regex1.inpVar());
  SC$1.rx=Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[Doc.TextNode("RegEx  :")]),Doc.Input([AttrProxy.Create("type","text"),AttrProxy.Create("class","form-control"),AttrProxy.Create("placeholder","Regex: . \\d \\w \\s \n \r \u0009 \u000c (|)[a-z]+*?{3,5}")],regex1.rexVar())]);
  SC$1.opt=Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[Doc.TextNode("Options:")]),Doc.Input([AttrProxy.Create("type","text"),AttrProxy.Create("class","form-control"),AttrProxy.Create("placeholder","Options: g i m u y")],regex1.optVar())]);
  x=Doc.Element("h5",[],[Doc.TextNode(" WARNING! THIS CAN GET FSHARPSTATION IN AN INFINITE LOOP. RUN IT FROM A SEPARATE INSTANCE"),regex1.inp(),regex1.rx(),regex1.opt(),Doc.BindView(Global.id,View.Map3(function(inp,rx,opt)
  {
   return Doc.Element("ul",[],List.ofSeq(Seq.delay(function()
   {
    var a,f,g$2,a$1;
    function g$3(v$1)
    {
     return List.ofArray([v$1]);
    }
    a=regex1.REGEX(rx,opt,inp);
    return a!=null&&a.$==1?Seq.map(Global.id,Arrays.map((f=function(x$1)
    {
     return g$3(Doc.TextNode(x$1));
    },(g$2=(a$1=List.T.Empty,function(c)
    {
     return Doc.Element("li",a$1,c);
    }),function(x$1)
    {
     return g$2(f(x$1));
    })),a.$0)):[Doc.TextNode("<no match>")];
   })));
  },regex1.inpVar().get_View(),regex1.rexVar().get_View(),regex1.optVar().get_View()))]);
  (new RunNode.New(null,null)).get_AddBootstrap().RunDoc(x);
 };
});
//success
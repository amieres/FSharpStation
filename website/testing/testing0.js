(function()
{
 "use strict";
 var Global,FsRoot,Library,StringId,GuidId,LibraryJS,View,AppFrameworkTemplate,TestingJS,Test,Util,WebSharper,Obj,AF,PlugInBuilder,ListModelData,LayoutEngine,LM,LMX,Calculado,Calculado$1,SC$1,IntelliFactory,Runtime,Arrays,List,UI,View$1,AppFramework,Client,Templates,Doc,console,ParseO,FromView,Utils,AttrProxy,AttrModule,PlugIn,PlugInVar,PlugInView,PlugInDoc,PlugInAction,PlugInQuery,Lazy,LayoutEngineModule,Enumerator,Seq,Unchecked,ListModel,Var$1,System,Guid;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 StringId=Library.StringId=Library.StringId||{};
 GuidId=Library.GuidId=Library.GuidId||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 View=LibraryJS.View=LibraryJS.View||{};
 AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 Test=TestingJS.Test=TestingJS.Test||{};
 Util=TestingJS.Util=TestingJS.Util||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 AF=TestingJS.AF=TestingJS.AF||{};
 PlugInBuilder=AF.PlugInBuilder=AF.PlugInBuilder||{};
 ListModelData=AF.ListModelData=AF.ListModelData||{};
 LayoutEngine=TestingJS.LayoutEngine=TestingJS.LayoutEngine||{};
 LM=TestingJS.LM=TestingJS.LM||{};
 LMX=TestingJS.LMX=TestingJS.LMX||{};
 Calculado=TestingJS.Calculado=TestingJS.Calculado||{};
 Calculado$1=Calculado.Calculado=Calculado.Calculado||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Arrays=WebSharper&&WebSharper.Arrays;
 List=WebSharper&&WebSharper.List;
 UI=WebSharper&&WebSharper.UI;
 View$1=UI&&UI.View;
 AppFramework=LibraryJS&&LibraryJS.AppFramework;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Doc=UI&&UI.Doc;
 console=Global.console;
 ParseO=Library&&Library.ParseO;
 FromView=UI&&UI.FromView;
 Utils=WebSharper&&WebSharper.Utils;
 AttrProxy=UI&&UI.AttrProxy;
 AttrModule=UI&&UI.AttrModule;
 PlugIn=AppFramework&&AppFramework.PlugIn;
 PlugInVar=AppFramework&&AppFramework.PlugInVar;
 PlugInView=AppFramework&&AppFramework.PlugInView;
 PlugInDoc=AppFramework&&AppFramework.PlugInDoc;
 PlugInAction=AppFramework&&AppFramework.PlugInAction;
 PlugInQuery=AppFramework&&AppFramework.PlugInQuery;
 Lazy=WebSharper&&WebSharper.Lazy;
 LayoutEngineModule=LibraryJS&&LibraryJS.LayoutEngineModule;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 Seq=WebSharper&&WebSharper.Seq;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 ListModel=UI&&UI.ListModel;
 Var$1=UI&&UI.Var$1;
 System=Global.System;
 Guid=System&&System.Guid;
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
 Library.Error$1=function(a)
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
 AppFrameworkTemplate.html=function()
 {
  SC$1.$cctor();
  return SC$1.html;
 };
 Test.main=function()
 {
  var d,x,a;
  d=self.document.createElement("div");
  self.document.body.appendChild(d);
  d.outerHTML=AppFrameworkTemplate.html();
  x=AppFramework.getMainDoc().f();
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.RunAppend(a,x);
 };
 Test.something=function()
 {
  (function($1)
  {
   return $1("do something");
  }(function(s)
  {
   console.log(s);
  }));
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
 Util.wrapUI=function(elem,f,a,b,c)
 {
  var f$1,f$2,g;
  function g$1(v)
  {
   return[v];
  }
  f$1=(f$2=f(a,b,c),function(x)
  {
   return g$1(f$2(x));
  });
  g=elem(List.T.Empty);
  return function(x)
  {
   return g(f$1(x));
  };
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
   var o;
   if(a!=null&&a.$==1)
    {
     o=ofBO(a.$0);
     o==null?void 0:sel.Set({
      $:1,
      $0:o.$0
     });
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
   return PlugIn.New(plg.plgName,plg.plgVars.concat(Arrays.map(function(v)
   {
    return PlugInVar.New(prefix+v.varName,v.varVar);
   },p2.plgVars)),plg.plgViews.concat(Arrays.map(function(w)
   {
    return PlugInView.New(prefix+w.viwName,w.viwView);
   },p2.plgViews)),plg.plgDocs.concat(Arrays.map(function(d)
   {
    return PlugInDoc.New(prefix+d.docName,d.docDoc);
   },p2.plgDocs)),plg.plgActions.concat(Arrays.map(function(a)
   {
    return PlugInAction.New(prefix+a.actName,a.actFunction,a.actEnabled);
   },p2.plgActions)),plg.plgQueries.concat(Arrays.map(function(q)
   {
    return PlugInQuery.New(prefix+q.qryName,q.qryFunction);
   },p2.plgQueries)));
  },
  AddViw:function(plg,name,viw)
  {
   return PlugIn.New(plg.plgName,plg.plgVars,plg.plgViews.concat([AppFramework.newViw(name,viw)]),plg.plgDocs,plg.plgActions,plg.plgQueries);
  },
  InsDoc:function(plg,name,doc)
  {
   return PlugIn.New(plg.plgName,plg.plgVars,plg.plgViews,[AppFramework.newDoc(name,doc)].concat(plg.plgDocs),plg.plgActions,plg.plgQueries);
  },
  AddActO:function(plg,name,actO)
  {
   return actO==null?plg:PlugIn.New(plg.plgName,plg.plgVars,plg.plgViews,plg.plgDocs,plg.plgActions.concat([AppFramework.newAct(name,actO.$0)]),plg.plgQueries);
  },
  AddAct:function(plg,name,act)
  {
   return PlugIn.New(plg.plgName,plg.plgVars,plg.plgViews,plg.plgDocs,plg.plgActions.concat([AppFramework.newAct(name,act)]),plg.plgQueries);
  },
  AddDocF:function(plg,name,docF)
  {
   return PlugIn.New(plg.plgName,plg.plgVars,plg.plgViews,plg.plgDocs.concat([AppFramework.newDoc(name,Lazy.Create(function()
   {
    return LayoutEngineModule.turnToView(docF);
   }))]),plg.plgActions,plg.plgQueries);
  },
  AddDoc:function(plg,name,doc)
  {
   return PlugIn.New(plg.plgName,plg.plgVars,plg.plgViews,plg.plgDocs.concat([AppFramework.newDoc(name,doc)]),plg.plgActions,plg.plgQueries);
  },
  AddVar:function(plg,name,_var)
  {
   return PlugIn.New(plg.plgName,plg.plgVars.concat([AppFramework.newVar(name,_var)]),plg.plgViews,plg.plgDocs,plg.plgActions,plg.plgQueries);
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
   return PlugIn.New("Main",[],[],[],[],[]);
  }
 },Obj,PlugInBuilder);
 PlugInBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },PlugInBuilder);
 ListModelData=AF.ListModelData=Runtime.Class({
  get_CurrentDoc:function()
  {
   return(this.getDoc(this.selV.get_View()))(this.get_CurrentV());
  },
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
   return b.AddAct(b.AddAct(b.AddVar(b.AddDoc(b.AddDoc(b.Yield(),"list",Lazy.Create(function()
   {
    return $this.doc;
   })),"cur",Lazy.Create(function()
   {
    return $this.get_CurrentDoc();
   })),"sel",selectorLens(this.selV)),"add",(f=this.add,function(x)
   {
    return g(f(x));
   })),"del",this.delCur);
  }
 },null,ListModelData);
 ListModelData.New=function(elems,doc,selV,add,delCur,getDoc,def)
 {
  return new ListModelData({
   elems:elems,
   doc:doc,
   selV:selV,
   add:add,
   delCur:delCur,
   getDoc:getDoc,
   def:def
  });
 };
 AF.concatMainDocs=function(plugins)
 {
  return Doc.Concat(Seq.choose(function(a)
  {
   return a.docDoc.$==0?{
    $:1,
    $0:a.docDoc.$0.f()
   }:null;
  },Seq.choose(function(plg)
  {
   return Seq.tryHead(plg.plgDocs);
  },plugins)));
 };
 AF.addPlugIn2=function(plg)
 {
  var m;
  AppFramework.addPlugIn(plg);
  m=Seq.tryHead(plg.plgDocs);
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
 LM.addElements=function(li,elems)
 {
  li.elems.AppendMany(elems);
 };
 LM.setCurrentDoc=function(docF,li)
 {
  return ListModelData.New(li.elems,li.doc,li.selV,li.add,li.delCur,docF(Util.unselectorV(),Global.ignore),li.def);
 };
 LM.getDoc=function(keyF,def,newF,elUI)
 {
  var elements,selected0,selectedV;
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
  elements=ListModel.Create(keyF,List.T.Empty);
  selected0=Var$1.Create$1(null);
  selectedV=new FromView.New(selected0.get_View(),function(x)
  {
   return g(f(x));
  });
  return ListModelData.New(elements,Doc.Flatten(elements.MapLens(function($1,$2)
  {
   return((elUI(selectedV,function($3)
   {
    return _delete($1,$3);
   }))(View$1.Const({
    $:1,
    $0:$1
   })))($2);
  })),selectedV,function()
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
   var o;
   o=selectedV.Get();
   o==null?void 0:_delete(o.$0,null);
  },elUI(selectedV,Global.ignore),def);
 };
 LMX.addElements=function(li,elems)
 {
  Seq.iter(function(v)
  {
   li.elems.Append([(li.add())[0],v]);
  },elems);
 };
 LMX.setCurrentDoc=function(docF)
 {
  function x(a,b,c,v)
  {
   return LMX.elemUI2(docF,a,b,c,v);
  }
  return function(l)
  {
   return LM.setCurrentDoc(function($1,$2)
   {
    return Runtime.Curried(x,2,[$1,$2]);
   },l);
  };
 };
 LMX.getDocGuidId=function(def,newElem,elemUI)
 {
  var x;
  function e(a,b,c,v)
  {
   return LMX.elemUI2(elemUI,a,b,c,v);
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
  }),def],x,function($1,$2)
  {
   return Runtime.Curried(e,2,[$1,$2]);
  });
 };
 LMX.getDocGuid=function(def,newElem,elemUI)
 {
  function e(a,b,c,v)
  {
   return LMX.elemUI2(elemUI,a,b,c,v);
  }
  return LM.getDoc(function(t)
  {
   return t[0];
  },["00000000-0000-0000-0000-000000000000",def],LMX.addNewO(newElem,Guid.NewGuid(),function()
  {
   return Guid.NewGuid();
  }),function($1,$2)
  {
   return Runtime.Curried(e,2,[$1,$2]);
  });
 };
 LMX.getDocInt=function(def,newElem,elemUI)
 {
  function e(a,b,c,v)
  {
   return LMX.elemUI2(elemUI,a,b,c,v);
  }
  return LM.getDoc(function(t)
  {
   return t[0];
  },[-1,def],LMX.addNewO(newElem,0,function(y)
  {
   return 1+y;
  }),function($1,$2)
  {
   return Runtime.Curried(e,2,[$1,$2]);
  });
 };
 LMX.elemUI2=function(elemUI,a,b,c,v)
 {
  function a$1(i,nv)
  {
   return[i,nv];
  }
  return elemUI(a,b,c,Var$1.Lens(v,function(t)
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
 Calculado$1.New=function(id,valorA,valorB,valorC)
 {
  return{
   id:id,
   valorA:valorA,
   valorB:valorB,
   valorC:valorC
  };
 };
 Calculado.list1=function()
 {
  SC$1.$cctor();
  return SC$1.list1;
 };
 Calculado.list3=function()
 {
  SC$1.$cctor();
  return SC$1.list3;
 };
 Calculado.list2=function()
 {
  SC$1.$cctor();
  return SC$1.list2;
 };
 Calculado.list0=function()
 {
  SC$1.$cctor();
  return SC$1.list0;
 };
 Calculado.calcUIEdit=function(selectedV,_delete,k,calc)
 {
  return Doc.BindView(Global.id,View$1.Map(function($1)
  {
   return $1?Calculado.calcUIDet(true,selectedV,_delete,k,calc):Calculado.calcUI(false,selectedV,_delete,k,calc);
  },View$1.Map2(Unchecked.Equals,selectedV.get_View(),k)));
 };
 Calculado.calcUIDet$796$62=function(k,selectedV)
 {
  return function()
  {
   return function()
   {
    return View$1.Get(function(a)
    {
     selectedV.Set(a);
    },k);
   };
  };
 };
 Calculado.calcUIDet=function(allowDelete,selectedV,_delete,k,calc)
 {
  var valorA,valorB,valorC,dup,mult,multAdd,selectedW,disabledW;
  valorA=Util.lensFloat2Str(Var$1.Lens(calc,function($1)
  {
   return $1.valorA;
  },function($1,$2)
  {
   return Calculado$1.New($1.id,$2,$1.valorB,$1.valorC);
  }));
  valorB=Util.lensFloat2Str(Var$1.Lens(calc,function($1)
  {
   return $1.valorB;
  },function($1,$2)
  {
   return Calculado$1.New($1.id,$1.valorA,$2,$1.valorC);
  }));
  valorC=Util.lensFloat2Str(Var$1.Lens(calc,function($1)
  {
   return $1.valorC;
  },function($1,$2)
  {
   return Calculado$1.New($1.id,$1.valorA,$1.valorB,$2);
  }));
  dup=View$1.Map(function($1)
  {
   return $1.valorA*2;
  },calc.get_View());
  mult=View$1.Map2(function($1,$2)
  {
   return $1.valorA*$2.valorB;
  },calc.get_View(),calc.get_View());
  multAdd=View$1.Map2(function($1,$2)
  {
   return $1+$2.valorC;
  },mult,calc.get_View());
  selectedW=View$1.Map2(Unchecked.Equals,selectedV.get_View(),k);
  disabledW=View$1.Map(function($1)
  {
   return $1==null;
  },k);
  return Doc.Element("div",[AttrModule.Dynamic("style",View$1.Map2(function($1,$2)
  {
   return $1?"display:none; background-color:lightgray; color:gray":$2?"background-color:lightblue":"";
  },disabledW,selectedW)),AttrProxy.HandlerImpl("click",function()
  {
   return function()
   {
    return View$1.Get(function(a)
    {
     selectedV.Set(a);
    },k);
   };
  })],[Doc.Button("x",[AttrModule.Dynamic("style",View$1.Map(function($1)
  {
   return!allowDelete||$1?"display:none":"";
  },disabledW))],_delete),Util.inputLabel([],disabledW,"valor A: ",valorA),Util.inputLabel([],disabledW,"valor B: ",valorB),Util.inputLabel([],disabledW,"valor C: ",valorC),Util.textLine(View$1.Map2(function($1,$2)
  {
   return(((Runtime.Curried3(function($3,$4,$5)
   {
    return $3(Utils.prettyPrint($4)+" = "+Utils.toSafe($5)+" * 2");
   }))(Global.id))($1))($2);
  },dup,valorA.get_View())),Util.textLine(View$1.Apply(View$1.Map2(function($1,$2)
  {
   return function($3)
   {
    return((((Runtime.Curried(function($4,$5,$6,$7)
    {
     return $4(Utils.prettyPrint($5)+" = "+Utils.toSafe($6)+" * "+Utils.toSafe($7));
    },4))(Global.id))($1))($2))($3);
   };
  },mult,valorA.get_View()),valorB.get_View())),Util.textLine(View$1.Apply(View$1.Apply(View$1.Map2(function($1,$2)
  {
   return function($3)
   {
    return function($4)
    {
     return(((((Runtime.Curried(function($5,$6,$7,$8,$9)
     {
      return $5(Utils.prettyPrint($6)+" = "+Utils.toSafe($7)+" * "+Utils.toSafe($8)+" + "+Utils.toSafe($9));
     },5))(Global.id))($1))($2))($3))($4);
    };
   };
  },multAdd,valorA.get_View()),valorB.get_View()),valorC.get_View()))]);
 };
 Calculado.calcUI$781$62=function(k,selectedV)
 {
  return function()
  {
   return function()
   {
    return View$1.Get(function(a)
    {
     selectedV.Set(a);
    },k);
   };
  };
 };
 Calculado.calcUI=function(allowDelete,selectedV,_delete,k,calc)
 {
  var disabledW;
  disabledW=View$1.Map(function($1)
  {
   return $1==null;
  },k);
  return Doc.Element("div",[AttrModule.Dynamic("style",View$1.Map(function($1)
  {
   return $1?"background-color:lightblue":"";
  },View$1.Map2(Unchecked.Equals,selectedV.get_View(),k))),AttrProxy.HandlerImpl("click",function()
  {
   return function()
   {
    return View$1.Get(function(a)
    {
     selectedV.Set(a);
    },k);
   };
  })],[Doc.Button("x",[AttrModule.Dynamic("style",View$1.Map(function($1)
  {
   return!allowDelete||$1?"display:None":"";
  },disabledW))],_delete),Util.textLine(View$1.Apply(View$1.Map2(function($1,$2)
  {
   return function($3)
   {
    return((((Runtime.Curried(function($4,$5,$6,$7)
    {
     return $4("("+Utils.prettyPrint($5)+", "+Utils.prettyPrint($6)+", "+Utils.prettyPrint($7)+")");
    },4))(Global.id))($1.valorA))($2.valorB))($3.valorC);
   };
  },calc.get_View(),calc.get_View()),calc.get_View()))]);
 };
 Calculado.def=function()
 {
  SC$1.$cctor();
  return SC$1.def;
 };
 Calculado.newCalc=function()
 {
  return Calculado$1.New(new GuidId({
   $:0,
   $0:Guid.NewGuid()
  }),0,0,0);
 };
 SC$1.$cctor=function()
 {
  var i,x,e,e$1,b;
  SC$1.$cctor=Global.ignore;
  SC$1.html="\r\n            <div style=\"display:none\" >\r\n                <div links>\r\n                    <link href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" type=\"text/css\" rel=\"stylesheet\">\r\n                    <script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"  type=\"text/javascript\"></script>\r\n                </div>\r\n                <div ws-template=\"AppFramework\" style=\"height: calc(100vh - 4px); width: calc(100vw - 4px) \" class=\"relative\" >\r\n                    <div ws-hole=\"MainClient\"></div>\r\n                    <div class=\"AppFrameworkGo\"><button ws-onclick=\"GoClient\">${MainDoc}</button></div>\r\n                </div>\r\n                <style>\r\n                    .AppFrameworkGo {\r\n                        max-width: 2px;\r\n                        max-height: 2px;\r\n                        z-index: 4000;\r\n                        overflow: hidden;\r\n                        position: fixed;\r\n                        top: 0px;\r\n                        left: 0px;\r\n                    }\r\n                </style>\r\n                <div ws-template=\"FixedSplitterVer\" \r\n                    style=\"display: grid; \r\n                           grid-gap: 0px; \r\n                           box-sizing: border-box; \r\n                           height: 100%;\r\n                           width : 100%;\r\n                           grid-template-areas: 'one two'; \r\n                           grid-template-rows   :100%; \r\n                           overflow: hidden; \r\n                           grid-template-columns: ${PartSizes}\"  >\r\n                   <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n                   <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"FixedSplitterHor\" \r\n               style=\"display: grid; \r\n                      grid-gap: 0px; \r\n                      box-sizing: border-box; \r\n                      height: 100%;\r\n                      width : 100%;\r\n                      grid-template-areas: 'one' 'two'; \r\n                      grid-template-columns:100%; \r\n                      overflow: hidden; \r\n                      grid-template-rows   : ${PartSizes}\"  >\r\n              <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n              <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"WCompSplitterHor\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid;\r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one' 'two'; \r\n                            grid-template-columns:100%; \r\n                            overflow: hidden; \r\n                            grid-template-rows   : ${PartSizes}\" \r\n                     >\r\n                     <slot></slot>\r\n                    <slot name=\"splitter\">  <div style=\"grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-row:2; grid-column:1 / 1 ; \r\n                            cursor: row-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            height: ${Gap}; \r\n                            margin-top :-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>        \r\n                <div ws-template=\"WCompSplitterVer\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid; \r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one two'; \r\n                            grid-template-rows   :100%; \r\n                            overflow: hidden; \r\n                            grid-template-columns: ${PartSizes}\"  >\r\n                    <slot></slot>\r\n                    <slot name=\"splitter\"> <div style=\"grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-column:2; grid-row:1 / 1\r\n                            cursor: column-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            width: ${Gap}; \r\n                            margin-left:-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>\r\n                <div ws-template=\"AppFwkClient\" >\r\n                    <ws-FixedSplitterHor>\r\n                        <PartSizes>55px calc(100% - 55px)</PartSizes>\r\n                        <First>\r\n                            <span style=\"display: grid;\r\n                                  grid-template-columns: 30% 20% 20% 10%;\r\n                                  grid-gap: 25px;\r\n                                \">\r\n                                <div class=\"mainTitle\">AppFramework</div>\r\n                            </span>\r\n                        </First>\r\n                        <Second>\r\n                                <ws-FixedSplitterVer>\r\n                                    <PartSizes>calc(100% - 150px) 150px</PartSizes>\r\n                                    <First>\r\n                                        <wcomp-splitter vertical value=\"18\" max=\"100\">\r\n                                            <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\" >\r\n                                                <div ws-template=\"Tile\">\r\n                                                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                                                    ws-ondrag=\"Drag\"\r\n                                                    ws-ondragover=\"DragOver\"\r\n                                                    ws-ondrop=\"Drop\"\r\n                                                   >\r\n                                                   <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                                                   <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                                                   <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                                               </div>\r\n                                       \r\n                                                </div>\r\n                                            </div></div>\r\n                                            <wcomp-splitter vertical value=\"100\" min=\"30\" max=\"100\">\r\n                                                <ws-FixedSplitterHor>\r\n                                                    <PartSizes>32px calc(100% - 32px)</PartSizes>\r\n                                                    <First>\r\n                                                        <div>\r\n                                                            <div class=\"input-group\">\r\n                                                                <span class=\"input-group-addon\">name:</span>\r\n                                                                <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </First>\r\n                                                    <Second>\r\n                                                        <div style=\"overflow:auto\">\r\n                                                            <div>\r\n                                                                <div>Docs:</div>\r\n                                                                <div ws-hole=\"Docs\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Vars:</div>\r\n                                                                <div ws-hole=\"Vars\" style=\"overflow:auto\" >\r\n                                                                        <div ws-template=\"NameValueInput\" class=\"input-group\">\r\n                                                                        <span class=\"input-group-addon\">${Name}:</span>\r\n                                                                        <textarea class=\"form-control\" id=\"\" placeholder=\"Value...\" ws-var=\"Value\" spellcheck=\"false\">\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Views:</div>\r\n                                                                <div ws-hole=\"Views\" style=\"overflow:auto\" >\r\n                                                                    <div ws-template=\"NameValue\" class=\"input-group\">\r\n                                                                        <span class=\"input-group-addon\">${Name}:</span>\r\n                                                                        <span class=\"input-group-addon\">${Value}</span>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Queries:</div>\r\n                                                                <div ws-hole=\"Queries\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </Second>\r\n                                                </ws-FixedSplitterHor>\r\n                                                <wcomp-tabstrip >\r\n                                                    <div tabname=\"Properties\">\r\n                                                        <div>\r\n                                                            <table style=\"border-spacing:0px\">\r\n                                                                <thead>\r\n                                                                    <th style=\"width: 30%  \">Name</th>\r\n                                                                    <th style=\"width: 70% \">Value</th>\r\n                                                                </thead>\r\n                                                                <tbody ws-hole=\"Properties\" ws-children-template=\"Property\">\r\n                                                                    <tr ws-onclick=\"Select\" style=\"margin-bottom: 2px\" class=\"level  \">\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <input ws-var=\"Name\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Property...\">\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <textarea ws-var=\"Value\" class=\"form-control\" id=\"\" placeholder=\"Value...\"></textarea>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div style=\" cursor: pointer \" title=\"remove\">\r\n                                                                                <button ws-onclick=\"Remove\" class=\"delete is-small\">x</button>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </wcomp-tabstrip>\r\n                                            </wcomp-splitter>\r\n                                        </wcomp-splitter>\r\n                                    </First>\r\n                                    <Second>\r\n                                        <div style=\"\r\n                                            overflow: hidden;\r\n                                            display: grid;\r\n                                            grid-template-columns: 100%;\r\n                                            grid-template-rows: repeat(15, calc(100% / 15));\r\n                                            bxackground-color: #eee;\r\n                                            box-sizing: border-box;\r\n                                            padding : 5px;\r\n                                            grid-gap: 5px;\r\n                                            margin-right: 21px;\r\n                                       \"  class=\"absolute\" ws-hole=\"Actions\" >\r\n                                            <button ws-template=\"Action\"         ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\"          >${Name}</button>\r\n                                            <button ws-template=\"ActionDisabled\" ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\" disabled >${Name}</button>\r\n                                        </div>\r\n                                    </Second>\r\n                                </ws-FixedSplitterVer>\r\n                        </Second>\r\n                    </ws-FixedSplitterHor>\r\n                </div>\r\n                <style style=\"display: none\">\r\n                        .Hidden     { display   : none         }\r\n                        table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                        td input.form-control { \r\n                            padding    : 0px; \r\n                            font-family: monospace;\r\n                            font-size  :   small;\r\n                            margin-top :   0px;\r\n                            margin-left: -2px;\r\n                            width      : 100%\r\n                        }\r\n                        td select {\r\n                            font-size : smaller;\r\n                            max-width : 8ch;\r\n                        }\r\n                        xtextarea {\r\n                           resize : none;\r\n                        }\r\n                        .tab-content {\r\n                            overflow: hidden\r\n                        }\r\n                        .tab-children {\r\n                            position:relative;\r\n                        }\r\n                        .tab-children>div>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        .relative {\r\n                            position:relative;\r\n                        }\r\n                        .relative>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                        table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                        table.table-striped    tbody input              { background: transparent; border: none}\r\n                        table.table-striped    tbody select             { background: transparent; border: none}\r\n                        table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                        table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                        table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                        table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                        table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                        table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                                   border-bottom: solid thin blue     ; } \r\n                        table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                        table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                        thead { color: gray }\r\n                        h3 { \r\n                            color: gray;\r\n                            line-height: 1em;\r\n                        }\r\n                        button       { border: solid thin transparent ; border-radius: 3px; }\r\n                        button:hover { border: solid thin blue }\r\n                        .indenter { position  : absolute; \r\n                                    top:0px; bottom:0px; left:0px; \r\n                                    background: white; color:white;\r\n                                    border-right: gray thin dotted;\r\n                                    }\r\n                        body {\r\n                            color      : #333;\r\n                            font-size  : small;\r\n                            font-family: monospace;\r\n                            line-height: 1.2;\r\n                        }\r\n                        .mainTitle {  \r\n                            font-size: 48px;\r\n                            font-weight: 500;\r\n                            color: gray;\r\n                            margin-top: -12px;\r\n                        }\r\n                        .CodeMirror {\r\n                            height: 100%;\r\n                        }\r\n                        \r\n                      \r\n                        body { margin: 0px }     \r\n                             \r\n                        div textarea {\r\n                            font-family     : monospace;\r\n                        }\r\n                        .code-editor-list-tile {\r\n                            white-space     : nowrap; \r\n                            border-style    : solid none none;\r\n                            border-color    : white;\r\n                            border-width    : 1px;\r\n                            background-color: #D8D8D8;\r\n                            display         : flex;\r\n                        }\r\n                        .code-editor-list-text{\r\n                            padding         : 1px 10px 1px 5px;\r\n                            overflow        : hidden;\r\n                            text-overflow   : ellipsis;\r\n                            white-space     : nowrap;\r\n                            flex            : 1;\r\n                        }\r\n                        \r\n                        .code-editor-list-tile span.node.ErrorMsg {\r\n                            background-color: red\r\n                        }\r\n                        .code-editor-list-tile span.node.expanded::before {\r\n                            content: \"-\"\r\n                        }\r\n                        .code-editor-list-tile span.node.collapsed::before {\r\n                            content: \"+\"\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor {\r\n                            font-weight     : bold;\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.indirect-predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.included-predecessor {\r\n                            color           : chocolate;\r\n                        }\r\n                        .code-editor-list-tile.selected {\r\n                            background-color: #77F;\r\n                            color           : white;\r\n                        }\r\n                        .code-editor-list-tile.codeSnippet {\r\n                            text-decoration: underline\r\n                        }\r\n                        .code-editor-list-tile:hover {\r\n                            background      : lightgray;\r\n                        }\r\n                        .code-editor-list-tile.selected:hover {\r\n                            background      : blue;\r\n                        }\r\n                        .code-editor-list-tile>.predecessor {\r\n                            font-weight     : bold;\r\n                            border-style    : inset;\r\n                            border-width    : 1px;\r\n                            text-align      : center;\r\n                            color           : transparent;\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        \r\n                        .CodeMirror { height: 100%; }\r\n                        \r\n                        .node {\r\n                            background-color: white; \r\n                            width           : 2ch; \r\n                            color           : #A03; \r\n                            font-weight     : bold; \r\n                            text-align      : center;\r\n                            font-family     : arial;\r\n                        }\r\n                        .Warning { text-decoration: underline lightblue } \r\n                        .Error   { text-decoration: underline red       } \r\n                        \r\n                    </style>\r\n            </div>\r\n            ";
  SC$1.unselectorV=new FromView.New(View$1.Const(null),Global.ignore);
  SC$1.plugin=new PlugInBuilder.New();
  SC$1.def=(i=Calculado.newCalc(),Calculado$1.New(new GuidId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  }),i.valorA,i.valorB,i.valorC));
  SC$1.list0=LMX.getDocInt(Calculado.def(),Calculado.newCalc,function($1,$2,$3,$4)
  {
   function e$2(a,c)
   {
    return Doc.Element("li",a,c);
   }
   function f(s,d,k,c)
   {
    return Calculado.calcUI(false,s,d,k,c);
   }
   return((((Runtime.Curried(Util.wrapUI,3,[function($5)
   {
    return function($6)
    {
     return e$2($5,$6);
    };
   },function($5,$6,$7)
   {
    return function($8)
    {
     return f($5,$6,$7,$8);
    };
   }]))($1))($2))($3))($4);
  });
  SC$1.list2=LMX.getDocGuidId(Calculado.def(),Calculado.newCalc,function($1,$2,$3,$4)
  {
   function e$2(a,c)
   {
    return Doc.Element("li",a,c);
   }
   function f(s,d,k,c)
   {
    return Calculado.calcUIDet(true,s,d,k,c);
   }
   return((((Runtime.Curried(Util.wrapUI,3,[function($5)
   {
    return function($6)
    {
     return e$2($5,$6);
    };
   },function($5,$6,$7)
   {
    return function($8)
    {
     return f($5,$6,$7,$8);
    };
   }]))($1))($2))($3))($4);
  });
  SC$1.list3=LM.getDoc(function(e$2)
  {
   return e$2.id;
  },Calculado.def(),Calculado.newCalc,function($1,$2)
  {
   function e$2(a,c)
   {
    return Doc.Element("li",a,c);
   }
   return((Runtime.Curried(Util.wrapUI,3,[function($3)
   {
    return function($4)
    {
     return e$2($3,$4);
    };
   },function($3,$4,$5)
   {
    return function($6)
    {
     return Calculado.calcUIEdit($3,$4,$5,$6);
    };
   }]))($1))($2);
  });
  SC$1.list1=(x=Calculado.list0(),(LMX.setCurrentDoc(function($1,$2,$3,$4)
  {
   return Calculado.calcUIDet(false,$1,$2,$3,$4);
  }))(x));
  e=List.ofArray([Calculado.newCalc(),Calculado.newCalc()]);
  LMX.addElements(Calculado.list1(),e);
  e$1=List.ofArray([Calculado.newCalc(),Calculado.newCalc()]);
  LM.addElements(Calculado.list3(),e$1);
  AF.addPlugIn2((b=AF.plugin(),b.Merge(b.Merge(b.Merge(b.AddDocF(b.Name(b.Yield(),"Calc"),"main",function()
  {
   return Doc.Concat([Util.orderedList(Calculado.list1().doc),Calculado.list1().get_CurrentDoc(),Util.orderedList(Calculado.list2().doc),Util.newButton(Calculado.list2().add),Util.orderedList(Calculado.list3().doc),Util.newButton(Calculado.list3().add)]);
  }),"calc1_",Calculado.list1().PlugIn(Util.selectorLensInt)),"calc2_",Calculado.list2().PlugIn(Util.selectorLensGuidId)),"calc3_",Calculado.list3().PlugIn(Util.selectorLensGuidId))));
  LayoutEngine.addLayout0(LayoutEngineModule.newLyt("CalcLyt","\r\n                    split horizontal 0-50-100 AppFramework.AppFwkClient main\r\n                    main div \"overflow:auto\" Calc.main \r\n                "));
 };
 Runtime.OnLoad(function()
 {
  Test.main();
 });
}());

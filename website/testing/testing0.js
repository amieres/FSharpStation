(function()
{
 "use strict";
 var Global,FsRoot,Library,StringId,GuidId,WebSharper,Obj,Monads,Depend,DependBuilder,Operators,String,LibraryJS,View,AppFrameworkTemplate,TestingJS,StartAppFramework,Util,AF,PlugInBuilder,ListModelData,LayoutEngine,ListModel,LM,LMX,SnippetTemplates,NewLY,Fun,Val,Extract0,SC$1,IntelliFactory,Runtime,Strings,Seq,Utils,List,Slice,Operators$1,Arrays,Char,Unchecked,console,UI,View$1,Doc,ParseO,FromView,AttrProxy,Var$1,AttrModule,AppFramework,PlugInVar,PlugInView,PlugInDoc,PlugInAction,PlugInQuery,Lazy,LayoutEngineModule,PlugIn,Enumerator,ListModel$1,System,Guid,Client,Templates,Date;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 StringId=Library.StringId=Library.StringId||{};
 GuidId=Library.GuidId=Library.GuidId||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Monads=Library.Monads=Library.Monads||{};
 Depend=Monads.Depend=Monads.Depend||{};
 DependBuilder=Depend.DependBuilder=Depend.DependBuilder||{};
 Operators=Depend.Operators=Depend.Operators||{};
 String=Library.String=Library.String||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 View=LibraryJS.View=LibraryJS.View||{};
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
 NewLY=TestingJS.NewLY=TestingJS.NewLY||{};
 Fun=NewLY.Fun=NewLY.Fun||{};
 Val=NewLY.Val=NewLY.Val||{};
 Extract0=NewLY.Extract0=NewLY.Extract0||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Strings=WebSharper&&WebSharper.Strings;
 Seq=WebSharper&&WebSharper.Seq;
 Utils=WebSharper&&WebSharper.Utils;
 List=WebSharper&&WebSharper.List;
 Slice=WebSharper&&WebSharper.Slice;
 Operators$1=WebSharper&&WebSharper.Operators;
 Arrays=WebSharper&&WebSharper.Arrays;
 Char=WebSharper&&WebSharper.Char;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 console=Global.console;
 UI=WebSharper&&WebSharper.UI;
 View$1=UI&&UI.View;
 Doc=UI&&UI.Doc;
 ParseO=Library&&Library.ParseO;
 FromView=UI&&UI.FromView;
 AttrProxy=UI&&UI.AttrProxy;
 Var$1=UI&&UI.Var$1;
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
 Enumerator=WebSharper&&WebSharper.Enumerator;
 ListModel$1=UI&&UI.ListModel;
 System=Global.System;
 Guid=System&&System.Guid;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Date=Global.Date;
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
 Operators.op_BarGreaterGreater=function(ma,f)
 {
  return(Depend.map(f))(ma);
 };
 Operators.op_GreaterGreaterEquals=function(ma,f)
 {
  return Depend.bind(f,ma);
 };
 Depend.toString=function(dep)
 {
  return Strings.concat("\n",Seq.sort(Seq.distinct(Seq.map(function(a)
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
   return a.$==1?a.$0:($1=a.$0,$1!=null&&$1.$==1)?(k=a.$1,(nm=a.$0.$0[0],resolve((o=(o$1=Seq.tryFind(function(x)
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
   }:($1=a.$0,$1!=null&&$1.$==1)?(k=a.$1,(nm=a.$0.$0[0],(o=(o$1=Seq.tryFind(function($3)
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
   }:($1=a.$0,$1!=null&&$1.$==1)?(k=a.$1,(nm=a.$0.$0[0],(o=(o$1=Seq.tryFind(function(x)
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
 String.thousands$1=function(n)
 {
  var v,r,s;
  v=Global.String(n);
  r=v.length%3;
  s=r===0?3:r;
  return Strings.concat(",",List.ofSeq(Seq.delay(function()
  {
   return Seq.append([Slice.string(v,{
    $:1,
    $0:0
   },{
    $:1,
    $0:s-1
   })],Seq.delay(function()
   {
    return Seq.map(function(i)
    {
     return Slice.string(v,{
      $:1,
      $0:i*3+s
     },{
      $:1,
      $0:i*3+s+2
     });
    },Operators$1.range(0,((v.length-s)/3>>0)-1));
   }));
  })));
 };
 String.EndsWith$1=function(ends,s)
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
 String.StartsWith$1=function(start,s)
 {
  return Strings.StartsWith(s,start)?{
   $:1,
   $0:Slice.string(s,{
    $:1,
    $0:start.length
   },null)
  }:null;
 };
 String.skipLastLine$1=function()
 {
  SC$1.$cctor();
  return SC$1.skipLastLine;
 };
 String.indentStr$1=function(i)
 {
  function f(s)
  {
   return String.indent$1(i,s);
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
 String.unindentStr$1=function()
 {
  SC$1.$cctor();
  return SC$1.unindentStr;
 };
 String.indent$1=function(n,s)
 {
  var x,x$1;
  x=Strings.SplitChars(s,["\n"],0);
  return Seq.map((x$1=Strings.replicate(n," "),function(y)
  {
   return x$1+y;
  }),x);
 };
 String.unindent$1=function(s)
 {
  var lines,n,o,o$1;
  lines=Strings.SplitChars(s,["\n"],0);
  n=(o=Seq.tryFindIndex(function(y)
  {
   return" "!==y;
  },(o$1=Seq.tryFind(function(l)
  {
   return Strings.Trim(l)!=="";
  },lines),o$1==null?"":o$1.$0)),o==null?0:o.$0);
  return Seq.filter(function(s$1)
  {
   return!Strings.StartsWith(s$1,"# 1 ");
  },Seq.map(function(l)
  {
   return l.length<=n?"":l.substring(n);
  },lines));
 };
 String.skipFirstLine$1=function(txt)
 {
  var i;
  i=txt.indexOf("\n");
  return i<0?"":Slice.string(txt,{
   $:1,
   $0:i+1
  },null);
 };
 String.append$1=function(a,b)
 {
  return a+b;
 };
 String.trim$1=function(s)
 {
  return Strings.Trim(s);
 };
 String.contains$1=function(sub,whole)
 {
  return whole.indexOf(sub)!=-1;
 };
 String.delimitedO$1=function(op,cl,txt)
 {
  var o,$1,bef,o$1,$2;
  o=String.splitInTwoO$1(op,txt);
  return o==null?null:($1=o.$0,(bef=$1[0],(o$1=String.splitInTwoO$1(cl,$1[1]),o$1==null?null:{
   $:1,
   $0:($2=o$1.$0,[bef,$2[0],$2[1]])
  })));
 };
 String.splitInTwoO$1=function(spl,txt)
 {
  var i;
  i=txt.indexOf(spl);
  return i===-1?null:{
   $:1,
   $0:[Library["String.Left$1"](txt,i),txt.substring(i+spl.length)]
  };
 };
 String.splitByChar$1=function(c,s)
 {
  return Strings.SplitChars(s,[c],0);
 };
 Library["String.get_toUnderscore$1"]=function(_this,u)
 {
  return Arrays.ofSeq(Seq.collect(Global.id,Seq.mapi(function(i,c)
  {
   return i>0&&Char.IsUpper(c)?List.ofArray(["_",c]):List.ofArray([c]);
  },_this))).join("");
 };
 Library["String.Right$1"]=function(_this,n)
 {
  var a,b;
  return Library["String.Substring2$1"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);
 };
 Library["String.Left$1"]=function(_this,n)
 {
  return n<0?Library["String.Substring2$1"](_this,0,_this.length+n):Library["String.Substring2$1"](_this,0,n);
 };
 Library["String.Substring2$1"]=function(_this,from,n)
 {
  var from$1,b;
  while(true)
   {
    if(n<=0)
     return"";
    else
     if(from>=_this.length)
      return"";
     else
      if(from<0)
       {
        from$1=from;
        from=0;
        n=n+from$1;
       }
      else
       return Strings.Substring(_this,from,(b=_this.length-from,Unchecked.Compare(n,b)===-1?n:b));
   }
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
   plg.plgVars.AppendMany(Seq.map(function(v)
   {
    return PlugInVar.New(prefix+v.varName,v.varVar);
   },p2.plgVars));
   plg.plgViews.AppendMany(Seq.map(function(w)
   {
    return PlugInView.New(prefix+w.viwName,w.viwView);
   },p2.plgViews));
   plg.plgDocs.AppendMany(Seq.map(function(d)
   {
    return PlugInDoc.New(prefix+d.docName,d.docDoc);
   },p2.plgDocs));
   plg.plgActions.AppendMany(Seq.map(function(a)
   {
    return PlugInAction.New(prefix+a.actName,a.actFunction,a.actEnabled);
   },p2.plgActions));
   plg.plgQueries.AppendMany(Seq.map(function(q)
   {
    return PlugInQuery.New(prefix+q.qryName,q.qryFunction);
   },p2.plgQueries));
   return plg;
  },
  AddViw:function(plg,name,viw)
  {
   plg.plgViews.Append(AppFramework.newViw(name,viw));
   return plg;
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
   var o;
   o=selectedV.Get();
   o==null?void 0:_delete(o.$0,null);
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
  Seq.iter(function(v)
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
 Fun.New=function(f,p)
 {
  return{
   f:f,
   p:p
  };
 };
 Val.textDoc=function(a)
 {
  return a.$==0?Doc.TextView(a.$0):Doc.TextNode(a.$0);
 };
 Val.addDoc=function(d,docs)
 {
  return docs.$==0?{
   $:1,
   $0:[Doc.BindView(Doc.Concat,docs.$0),d]
  }:{
   $:1,
   $0:Seq.append(docs.$0,[d])
  };
 };
 Extract0.extractDoc=function()
 {
  SC$1.$cctor();
  return SC$1.extractDoc;
 };
 Extract0.extractDocD=function()
 {
  SC$1.$cctor();
  return SC$1.extractDocD;
 };
 Extract0.getDocFromReferenceD=function()
 {
  SC$1.$cctor();
  return SC$1.getDocFromReferenceD;
 };
 Extract0.getTextData=function(txt)
 {
  var o,o$1,$1;
  o=(o$1=String.delimitedO("@{","}",txt),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,Extract0.getOneTextData($1[0],$1[1],$1[2]))
  });
  return o==null?List.ofArray([{
   $:0,
   $0:txt
  }]):o.$0;
 };
 Extract0.getOneTextData=function(bef,name,aft)
 {
  return(bef===""?Global.id:function(ls)
  {
   return new List.T({
    $:1,
    $0:{
     $:0,
     $0:bef
    },
    $1:ls
   });
  })(new List.T({
   $:1,
   $0:{
    $:1,
    $0:name
   },
   $1:aft===""?List.T.Empty:Extract0.getTextData(aft)
  }));
 };
 Extract0.getDocFromReference=function(ref)
 {
  return Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1("tryGetTextFromReference not implemented: @{"+Utils.toSafe($2)+"}");
   };
  }(Global.id))(ref));
 };
 NewLY.mainProgram=function()
 {
  var x;
  x=StartAppFramework.startWithHtmlD();
  (Depend.resolver(List.ofArray([["AppFrameworkTemplate.html",AppFrameworkTemplate.html()+SnippetTemplates.html()]]),x))();
 };
 NewLY.split2=function()
 {
  SC$1.$cctor();
  return SC$1.split2;
 };
 NewLY.split=function()
 {
  SC$1.$cctor();
  return SC$1.split;
 };
 NewLY.appFwk=function()
 {
  SC$1.$cctor();
  return SC$1.appFwk;
 };
 NewLY.main2=function()
 {
  SC$1.$cctor();
  return SC$1.main2;
 };
 NewLY.makeAViewDocL=function(f)
 {
  return Lazy.Create(function()
  {
   return NewLY.makeAViewDoc(f);
  });
 };
 NewLY.makeAViewDoc=function(f)
 {
  return Doc.BindView(function()
  {
   return f();
  },AppFramework.mainDocV().get_View());
 };
 NewLY.main=function()
 {
  SC$1.$cctor();
  return SC$1.main;
 };
 NewLY.main1=function()
 {
  SC$1.$cctor();
  return SC$1.main1;
 };
 NewLY.main0=function()
 {
  SC$1.$cctor();
  return SC$1.main0;
 };
 NewLY.aString=function()
 {
  SC$1.$cctor();
  return SC$1.aString;
 };
 NewLY.sayHello=function()
 {
  SC$1.$cctor();
  return SC$1.sayHello;
 };
 NewLY.now=function()
 {
  SC$1.$cctor();
  return SC$1.now;
 };
 NewLY.enterName=function()
 {
  SC$1.$cctor();
  return SC$1.enterName;
 };
 NewLY.checkName=function(n)
 {
  return n===Slice.string("World",{
   $:1,
   $0:0
  },{
   $:1,
   $0:n.length-1
  })||n.length<=1?"<---- Please enter your name":"";
 };
 NewLY.name=function()
 {
  SC$1.$cctor();
  return SC$1.name;
 };
 NewLY.op_Dereference=function(v)
 {
  return{
   $:1,
   $0:v
  };
 };
 NewLY.vvv=function()
 {
  SC$1.$cctor();
  return SC$1.vvv;
 };
 NewLY.extractDoc=function()
 {
  SC$1.$cctor();
  return SC$1.extractDoc$1;
 };
 NewLY.getDoc=function(r)
 {
  var p,pName,oName;
  p=(AppFramework.splitName("NewLY"))(r);
  pName=p[0];
  oName=p[1];
  return Doc.BindView(function(docO)
  {
   var o;
   function d()
   {
    return(function($1)
    {
     return function($2)
     {
      return $1("Reference not found @{"+Utils.toSafe($2)+"}");
     };
    }(Global.id))(r);
   }
   o=docO==null?null:{
    $:1,
    $0:AppFramework.getLazyDoc(docO.$0)
   };
   return o==null?Doc.TextView(View$1.Map(function(o$1)
   {
    return o$1==null?d():o$1.$0;
   },AppFramework.tryGetWoWW(pName,oName))):o.$0;
  },AppFramework.tryGetDocW(pName,oName));
 };
 NewLY.pb=function()
 {
  SC$1.$cctor();
  return SC$1.pb;
 };
 NewLY.pa=function()
 {
  SC$1.$cctor();
  return SC$1.pa;
 };
 NewLY.aV=function()
 {
  SC$1.$cctor();
  return SC$1.aV;
 };
 NewLY.concat=function(a,b)
 {
  return(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("Concat("+Global.String($2)+", "+$3.toFixed(6)+")");
  }))(Global.id))(a))(b);
 };
 NewLY.mainX=function()
 {
  SC$1.$cctor();
  return SC$1.mainX;
 };
 NewLY.a11V=function()
 {
  SC$1.$cctor();
  return SC$1.a11V;
 };
 NewLY.add1=function(a)
 {
  return a+1;
 };
 SC$1.$cctor=function()
 {
  var f,b,b$1,f$1,f$2,sayHello_0,c,f$3,a,c$1,c$2,c$3,f$4,c$4,c$5,c$6,c$7,c$8,c$9,c$10,c$11,c$12,p,f$5,f$6,f$7,f$8,c$13,p$1,c$14,f$9,p$2,f$10,c$15,f$11,p$3,b$2;
  SC$1.$cctor=Global.ignore;
  function g(s)
  {
   return Strings.concat("\n",s);
  }
  function f$12(s)
  {
   return String.splitByChar$1("\n",s);
  }
  function g$1(s)
  {
   var a$1,b$3;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$1=0,(b$3=Arrays.length(s)-2,Unchecked.Compare(a$1,b$3)===1?a$1:b$3))
   });
  }
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
  SC$1.depend=new DependBuilder.New();
  SC$1.unindentStr=function(x)
  {
   return g(String.unindent$1(x));
  };
  SC$1.skipLastLine=(f=function(x)
  {
   return g$1(f$12(x));
  },function(x)
  {
   return g$2(f(x));
  });
  SC$1.html="\r\n            <div style=\"display:none\" >\r\n                <div links>\r\n                    <link href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" type=\"text/css\" rel=\"stylesheet\">\r\n                    <script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"  type=\"text/javascript\"></script>\r\n                </div>\r\n                <div ws-template=\"AppFramework\" style=\"height: calc(100vh - 4px); width: calc(100vw - 4px) \" class=\"relative\" >\r\n                    <div ws-hole=\"MainClient\"></div>\r\n                    <div class=\"AppFrameworkGo\"><button ws-onclick=\"GoClient\">${MainDoc}</button></div>\r\n                </div>\r\n                <style>\r\n                    .AppFrameworkGo {\r\n                        max-width: 2px;\r\n                        max-height: 2px;\r\n                        z-index: 4000;\r\n                        overflow: hidden;\r\n                        position: fixed;\r\n                        top: 0px;\r\n                        left: 0px;\r\n                    }\r\n                </style>\r\n                <div ws-template=\"FixedSplitterVer\" \r\n                    style=\"display: grid; \r\n                           grid-gap: 0px; \r\n                           box-sizing: border-box; \r\n                           height: 100%;\r\n                           width : 100%;\r\n                           grid-template-areas: 'one two'; \r\n                           grid-template-rows   :100%; \r\n                           overflow: hidden; \r\n                           grid-template-columns: ${PartSizes}\"  >\r\n                   <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n                   <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"FixedSplitterHor\" \r\n               style=\"display: grid; \r\n                      grid-gap: 0px; \r\n                      box-sizing: border-box; \r\n                      height: 100%;\r\n                      width : 100%;\r\n                      grid-template-areas: 'one' 'two'; \r\n                      grid-template-columns:100%; \r\n                      overflow: hidden; \r\n                      grid-template-rows   : ${PartSizes}\"  >\r\n              <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n              <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"WCompSplitterHor\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid;\r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one' 'two'; \r\n                            grid-template-columns:100%; \r\n                            overflow: hidden; \r\n                            grid-template-rows   : ${PartSizes}\" \r\n                     >\r\n                     <slot></slot>\r\n                    <slot name=\"splitter\">  <div style=\"grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-row:2; grid-column:1 / 1 ; \r\n                            cursor: row-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            height: ${Gap}; \r\n                            margin-top :-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>        \r\n                <div ws-template=\"WCompSplitterVer\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid; \r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one two'; \r\n                            grid-template-rows   :100%; \r\n                            overflow: hidden; \r\n                            grid-template-columns: ${PartSizes}\"  >\r\n                    <slot></slot>\r\n                    <slot name=\"splitter\"> <div style=\"grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-column:2; grid-row:1 / 1\r\n                            cursor: column-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            width: ${Gap}; \r\n                            margin-left:-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>\r\n                <div ws-template=\"AppFwkClient\" >\r\n                    <ws-FixedSplitterHor>\r\n                        <PartSizes>55px calc(100% - 55px)</PartSizes>\r\n                        <First>\r\n                            <span style=\"display: grid;\r\n                                  grid-template-columns: 30% 20% 20% 10%;\r\n                                  grid-gap: 25px;\r\n                                \">\r\n                                <div class=\"mainTitle\">AppFramework</div>\r\n                            </span>\r\n                        </First>\r\n                        <Second>\r\n                                <ws-FixedSplitterVer>\r\n                                    <PartSizes>calc(100% - 150px) 150px</PartSizes>\r\n                                    <First>\r\n                                        <wcomp-splitter vertical value=\"18\" max=\"100\">\r\n                                            <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\" >\r\n                                                <div ws-template=\"Tile\">\r\n                                                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                                                    ws-ondrag=\"Drag\"\r\n                                                    ws-ondragover=\"DragOver\"\r\n                                                    ws-ondrop=\"Drop\"\r\n                                                   >\r\n                                                   <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                                                   <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                                                   <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                                               </div>\r\n                                       \r\n                                                </div>\r\n                                            </div></div>\r\n                                            <wcomp-splitter vertical value=\"100\" min=\"30\" max=\"100\">\r\n                                                <ws-FixedSplitterHor>\r\n                                                    <PartSizes>32px calc(100% - 32px)</PartSizes>\r\n                                                    <First>\r\n                                                        <div>\r\n                                                            <div class=\"input-group\">\r\n                                                                <span class=\"input-group-addon\">name:</span>\r\n                                                                <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </First>\r\n                                                    <Second>\r\n                                                        <div style=\"overflow:auto\">\r\n                                                            <div>\r\n                                                                <div>Docs:</div>\r\n                                                                <div ws-hole=\"Docs\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Views:</div>\r\n                                                                <div ws-hole=\"Views\" style=\"overflow:auto\" >\r\n                                                                    <div ws-template=\"NameValue\" class=\"input-group\">\r\n                                                                        <span class=\"input-group-addon\">${Name}:</span>\r\n                                                                        <span class=\"input-group-addon\">${Value}</span>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Queries:</div>\r\n                                                                <div ws-hole=\"Queries\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Vars:</div>\r\n                                                                <div ws-hole=\"Vars\" style=\"overflow:auto\" >\r\n                                                                    <div ws-template=\"NameValueInput\" class=\"input-group\">\r\n                                                                        <span class=\"input-group-addon\">${Name}:</span>\r\n                                                                        <textarea class=\"form-control\" id=\"\" placeholder=\"Value...\" ws-var=\"Value\" spellcheck=\"false\">\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </Second>\r\n                                                </ws-FixedSplitterHor>\r\n                                                <wcomp-tabstrip >\r\n                                                    <div tabname=\"Properties\">\r\n                                                        <div>\r\n                                                            <table style=\"border-spacing:0px\">\r\n                                                                <thead>\r\n                                                                    <th style=\"width: 30%  \">Name</th>\r\n                                                                    <th style=\"width: 70% \">Value</th>\r\n                                                                </thead>\r\n                                                                <tbody ws-hole=\"Properties\" ws-children-template=\"Property\">\r\n                                                                    <tr ws-onclick=\"Select\" style=\"margin-bottom: 2px\" class=\"level  \">\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <input ws-var=\"Name\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Property...\">\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <textarea ws-var=\"Value\" class=\"form-control\" id=\"\" placeholder=\"Value...\"></textarea>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div style=\" cursor: pointer \" title=\"remove\">\r\n                                                                                <button ws-onclick=\"Remove\" class=\"delete is-small\">x</button>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </wcomp-tabstrip>\r\n                                            </wcomp-splitter>\r\n                                        </wcomp-splitter>\r\n                                    </First>\r\n                                    <Second>\r\n                                        <div style=\"\r\n                                            overflow: hidden;\r\n                                            display: grid;\r\n                                            grid-template-columns: 100%;\r\n                                            grid-template-rows: repeat(15, calc(100% / 15));\r\n                                            bxackground-color: #eee;\r\n                                            box-sizing: border-box;\r\n                                            padding : 5px;\r\n                                            grid-gap: 5px;\r\n                                            margin-right: 21px;\r\n                                       \"  class=\"absolute\" ws-hole=\"Actions\" >\r\n                                            <button ws-template=\"Action\"         ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\"          >${Name}</button>\r\n                                            <button ws-template=\"ActionDisabled\" ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\" disabled >${Name}</button>\r\n                                        </div>\r\n                                    </Second>\r\n                                </ws-FixedSplitterVer>\r\n                        </Second>\r\n                    </ws-FixedSplitterHor>\r\n                </div>\r\n                <style style=\"display: none\">\r\n                        .Hidden     { display   : none         }\r\n                        table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                        td input.form-control { \r\n                            padding    : 0px; \r\n                            font-family: monospace;\r\n                            font-size  :   small;\r\n                            margin-top :   0px;\r\n                            margin-left: -2px;\r\n                            width      : 100%\r\n                        }\r\n                        td select {\r\n                            font-size : smaller;\r\n                            max-width : 8ch;\r\n                        }\r\n                        xtextarea {\r\n                           resize : none;\r\n                        }\r\n                        .tab-content {\r\n                            overflow: hidden\r\n                        }\r\n                        .tab-children {\r\n                            position:relative;\r\n                        }\r\n                        .tab-children>div>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        .relative {\r\n                            position:relative;\r\n                        }\r\n                        .relative>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                        table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                        table.table-striped    tbody input              { background: transparent; border: none}\r\n                        table.table-striped    tbody select             { background: transparent; border: none}\r\n                        table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                        table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                        table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                        table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                        table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                        table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                                   border-bottom: solid thin blue     ; } \r\n                        table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                        table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                        thead { color: gray }\r\n                        h3 { \r\n                            color: gray;\r\n                            line-height: 1em;\r\n                        }\r\n                        button       { border: solid thin transparent ; border-radius: 3px; }\r\n                        button:hover { border: solid thin blue }\r\n                        .indenter { position  : absolute; \r\n                                    top:0px; bottom:0px; left:0px; \r\n                                    background: white; color:white;\r\n                                    border-right: gray thin dotted;\r\n                                    }\r\n                        body {\r\n                            color      : #333;\r\n                            font-size  : small;\r\n                            font-family: monospace;\r\n                            line-height: 1.2;\r\n                        }\r\n                        .mainTitle {  \r\n                            font-size: 48px;\r\n                            font-weight: 500;\r\n                            color: gray;\r\n                            margin-top: -12px;\r\n                        }\r\n                        .CodeMirror {\r\n                            height: 100%;\r\n                        }\r\n                        \r\n                      \r\n                        body { margin: 0px }     \r\n                             \r\n                        div textarea {\r\n                            font-family     : monospace;\r\n                        }\r\n                        .code-editor-list-tile {\r\n                            white-space     : nowrap; \r\n                            border-style    : solid none none;\r\n                            border-color    : white;\r\n                            border-width    : 1px;\r\n                            background-color: #D8D8D8;\r\n                            display         : flex;\r\n                        }\r\n                        .code-editor-list-text{\r\n                            padding         : 1px 10px 1px 5px;\r\n                            overflow        : hidden;\r\n                            text-overflow   : ellipsis;\r\n                            white-space     : nowrap;\r\n                            flex            : 1;\r\n                        }\r\n                        \r\n                        .code-editor-list-tile span.node.ErrorMsg {\r\n                            background-color: red\r\n                        }\r\n                        .code-editor-list-tile span.node.expanded::before {\r\n                            content: \"-\"\r\n                        }\r\n                        .code-editor-list-tile span.node.collapsed::before {\r\n                            content: \"+\"\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor {\r\n                            font-weight     : bold;\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.indirect-predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.included-predecessor {\r\n                            color           : chocolate;\r\n                        }\r\n                        .code-editor-list-tile.selected {\r\n                            background-color: #77F;\r\n                            color           : white;\r\n                        }\r\n                        .code-editor-list-tile.codeSnippet {\r\n                            text-decoration: underline\r\n                        }\r\n                        .code-editor-list-tile:hover {\r\n                            background      : lightgray;\r\n                        }\r\n                        .code-editor-list-tile.selected:hover {\r\n                            background      : blue;\r\n                        }\r\n                        .code-editor-list-tile>.predecessor {\r\n                            font-weight     : bold;\r\n                            border-style    : inset;\r\n                            border-width    : 1px;\r\n                            text-align      : center;\r\n                            color           : transparent;\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        \r\n                        .CodeMirror { height: 100%; }\r\n                        \r\n                        .node {\r\n                            background-color: white; \r\n                            width           : 2ch; \r\n                            color           : #A03; \r\n                            font-weight     : bold; \r\n                            text-align      : center;\r\n                            font-family     : arial;\r\n                        }\r\n                        .Warning { text-decoration: underline lightblue } \r\n                        .Error   { text-decoration: underline red       } \r\n                        \r\n                    </style>\r\n            </div>\r\n            ";
  SC$1.htmlD=Depend.dependByName("AppFrameworkTemplate.html",AppFrameworkTemplate.html(),Global.id);
  SC$1.startWithHtmlD=(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(StartAppFramework.htmlD(),function(a$1)
   {
    return b.Return(function()
    {
     var d,x,a$2;
     d=self.document.createElement("div");
     self.document.body.appendChild(d);
     d.outerHTML=a$1;
     x=AppFramework.getMainDoc().f();
     a$2=self.document.body;
     Templates.LoadLocalTemplates("");
     Doc.RunAppend(a$2,x);
    });
   });
  }));
  SC$1.unselectorV=new FromView.New(View$1.Const(null),Global.ignore);
  SC$1.plugin=new PlugInBuilder.New();
  SC$1.html$1="\r\n                <div ws-template=\"Snippet\" >\r\n                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                         ws-ondrag=\"Drag\"\r\n                         ws-ondragover=\"DragOver\"\r\n                         ws-ondrop=\"Drop\"\r\n                        >\r\n                        <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                        <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                        <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                    </div>\r\n                </div>\r\n                <style>\r\n                    .Hidden     { display   : none         }\r\n                    table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                    td input.form-control { \r\n                        padding    : 0px; \r\n                        font-family: monospace;\r\n                        font-size  :   small;\r\n                        margin-top :   0px;\r\n                        margin-left: -2px;\r\n                        width      : 100%\r\n                    }\r\n                    td select {\r\n                        font-size : smaller;\r\n                        max-width : 8ch;\r\n                    }\r\n                    textarea {\r\n                       resize : none;\r\n                    }\r\n                    .tab-content {\r\n                        overflow: hidden\r\n                    }\r\n                    .tab-children {\r\n                        position:relative;\r\n                    }\r\n                    .tab-children>div>* {\r\n                        position:absolute;\r\n                        height: 100%;\r\n                        width:  100%;\r\n                        display: grid;\r\n                    }\r\n                    .relative {\r\n                        position:relative;\r\n                    }\r\n                    .relative>* {\r\n                        position:absolute;\r\n                        height: 100%;\r\n                        width:  100%;\r\n                        display: grid;\r\n                    }\r\n                    table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                    table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                    table.table-striped    tbody input              { background: transparent; border: none}\r\n                    table.table-striped    tbody select             { background: transparent; border: none}\r\n                    table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                    table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                    table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                    table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                    table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                    table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                               border-bottom: solid thin blue     ; } \r\n                    table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                    table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                    thead { color: gray }\r\n                    h3 { \r\n                        color: gray;\r\n                        line-height: 1em;\r\n                    }\r\n                    button       { border: solid thin transparent ; border-radius: 3px; }\r\n                    button:hover { border: solid thin blue }\r\n                    .indenter { position  : absolute; \r\n                                top:0px; bottom:0px; left:0px; \r\n                                background: white; color:white;\r\n                                border-right: gray thin dotted;\r\n                                }\r\n                    body {\r\n                        color      : #333;\r\n                        font-size  : small;\r\n                        font-family: monospace;\r\n                        line-height: 1.2;\r\n                    }\r\n                    .mainTitle {  \r\n                        font-size: 48px;\r\n                        font-weight: 500;\r\n                        color: gray;\r\n                        margin-top: -12px;\r\n                    }\r\n                    .CodeMirror {\r\n                        height: 100%;\r\n                    }\r\n                    \r\n                  \r\n                    body { margin: 0px }     \r\n                         \r\n                    div textarea {\r\n                        font-family     : monospace;\r\n                    }\r\n                    .code-editor-list-tile {\r\n                        white-space     : nowrap; \r\n                        border-style    : solid none none;\r\n                        border-color    : white;\r\n                        border-width    : 1px;\r\n                        background-color: #D8D8D8;\r\n                        display         : flex;\r\n                    }\r\n                    .code-editor-list-text{\r\n                        padding         : 1px 10px 1px 5px;\r\n                        overflow        : hidden;\r\n                        text-overflow   : ellipsis;\r\n                        white-space     : nowrap;\r\n                        flex            : 1;\r\n                    }\r\n                    \r\n                    .code-editor-list-tile span.node.ErrorMsg {\r\n                        background-color: red\r\n                    }\r\n                    .code-editor-list-tile span.node.expanded::before {\r\n                        content: \"-\"\r\n                    }\r\n                    .code-editor-list-tile span.node.collapsed::before {\r\n                        content: \"+\"\r\n                    }\r\n                    .code-editor-list-tile.direct-predecessor {\r\n                        font-weight     : bold;\r\n                        color           : blue;\r\n                    }\r\n                    .code-editor-list-tile.indirect-predecessor {\r\n                        color           : blue;\r\n                    }\r\n                    .code-editor-list-tile.included-predecessor {\r\n                        color           : chocolate;\r\n                    }\r\n                    .code-editor-list-tile.selected {\r\n                        background-color: #77F;\r\n                        color           : white;\r\n                    }\r\n                    .code-editor-list-tile.codeSnippet {\r\n                        text-decoration : underline;\r\n                        font-weight     : bold;\r\n                    }\r\n                    .code-editor-list-tile:hover {\r\n                        background      : lightgray;\r\n                    }\r\n                    .code-editor-list-tile.selected:hover {\r\n                        background      : blue;\r\n                    }\r\n                    .code-editor-list-tile>.predecessor {\r\n                        font-weight     : bold;\r\n                        border-style    : inset;\r\n                        border-width    : 1px;\r\n                        text-align      : center;\r\n                        color           : transparent;\r\n                    }\r\n                    .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                        color           : blue;\r\n                    }\r\n                    \r\n                    .CodeMirror { height: 100%; }\r\n                    \r\n                    .node {\r\n                        background-color: white; \r\n                        width           : 2ch; \r\n                        color           : #A03; \r\n                        font-weight     : bold; \r\n                        text-align      : center;\r\n                        font-family     : arial;\r\n                    }\r\n                    .Warning { text-decoration: underline lightblue } \r\n                    .Error   { text-decoration: underline red       } \r\n                    \r\n                </style>\r\n            ";
  SC$1.a11V=Var$1.Create$1(11);
  SC$1.mainX={
   $:0,
   $0:NewLY.a11V().get_View()
  };
  SC$1.getDocFromReferenceD=Depend.dependByName("getDocFromReference",Extract0.getDocFromReference,Global.id);
  SC$1.extractDocD=(b$1=Depend.depend(),b$1.Delay(function()
  {
   return b$1.Bind(Extract0.getDocFromReferenceD(),function(a$1)
   {
    return b$1.Return(function(txt)
    {
     var a$2,$1;
     a$2=List.map(function(a$3)
     {
      return a$3.$==1?a$1(a$3.$0):Doc.TextNode(a$3.$0);
     },Extract0.getTextData(txt));
     return(a$2.$==1?a$2.$1.$==0?($1=a$2.$0,true):($1=a$2,false):($1=a$2,false))?$1:Doc.Concat($1);
    });
   });
  }));
  SC$1.extractDoc=Depend.resolver([],Extract0.extractDocD());
  SC$1.aV=Var$1.Create$1(4);
  SC$1.pa=NewLY.aV().get_View();
  SC$1.pb=6.2;
  SC$1.extractDoc$1=Depend.resolver([["getDocFromReference",NewLY.getDoc]],Extract0.extractDocD());
  SC$1.vvv=(f$1=Fun.New((f$2=Fun.New({
   $:1,
   $0:function(a$1)
   {
    return function(b$3)
    {
     return NewLY.concat(a$1,b$3);
    };
   }
  },{
   $:0,
   $0:NewLY.pa()
  }),f$2.f.$==0?f$2.p.$==1?{
   $:0,
   $0:View$1.Apply(f$2.f.$0,View$1.Const(f$2.p.$0))
  }:{
   $:0,
   $0:View$1.Apply(f$2.f.$0,f$2.p.$0)
  }:f$2.p.$==0?{
   $:0,
   $0:View$1.Apply(View$1.Const(f$2.f.$0),f$2.p.$0)
  }:{
   $:1,
   $0:f$2.f.$0(f$2.p.$0)
  }),{
   $:1,
   $0:NewLY.pb()
  }),f$1.f.$==0?f$1.p.$==1?{
   $:0,
   $0:View$1.Apply(f$1.f.$0,View$1.Const(f$1.p.$0))
  }:{
   $:0,
   $0:View$1.Apply(f$1.f.$0,f$1.p.$0)
  }:f$1.p.$==0?{
   $:0,
   $0:View$1.Apply(View$1.Const(f$1.f.$0),f$1.p.$0)
  }:{
   $:1,
   $0:f$1.f.$0(f$1.p.$0)
  });
  SC$1.name=Var$1.Create$1("World");
  SC$1.enterName=Fun.New(NewLY.op_Dereference(NewLY.checkName),{
   $:0,
   $0:NewLY.name().get_View()
  });
  SC$1.now=Fun.New(NewLY.op_Dereference(function()
  {
   var n;
   n=new Global.Date(Date.now());
   return n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)+" "+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+":"+("00"+n.getMilliseconds()).slice(-3);
  }),{
   $:0,
   $0:NewLY.name().get_View()
  });
  SC$1.sayHello=(sayHello_0=(c=Fun.New(NewLY.op_Dereference(Doc.Concat),{
   $:1,
   $0:[(NewLY.extractDoc())("Hello @{name}!")]
  }),Fun.New(c.f,Val.addDoc(Val.textDoc((f$3=NewLY.enterName(),f$3.f.$==0?f$3.p.$==1?{
   $:0,
   $0:View$1.Apply(f$3.f.$0,View$1.Const(f$3.p.$0))
  }:{
   $:0,
   $0:View$1.Apply(f$3.f.$0,f$3.p.$0)
  }:f$3.p.$==0?{
   $:0,
   $0:View$1.Apply(View$1.Const(f$3.f.$0),f$3.p.$0)
  }:{
   $:1,
   $0:f$3.f.$0(f$3.p.$0)
  })),c.p))),(a=Fun.New(NewLY.op_Dereference(Doc.Concat),{
   $:1,
   $0:[(NewLY.extractDoc())("How are you?")]
  }),(c$1=Fun.New(NewLY.op_Dereference(Doc.Concat),{
   $:1,
   $0:[Doc.BindView(function()
   {
    var m;
    m=sayHello_0.f.$==0?sayHello_0.p.$==1?{
     $:0,
     $0:View$1.Apply(sayHello_0.f.$0,View$1.Const(sayHello_0.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(sayHello_0.f.$0,sayHello_0.p.$0)
    }:sayHello_0.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(sayHello_0.f.$0),sayHello_0.p.$0)
    }:{
     $:1,
     $0:sayHello_0.f.$0(sayHello_0.p.$0)
    };
    return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
   },AppFramework.mainDocV().get_View())]
  }),Fun.New(c$1.f,Val.addDoc(Doc.BindView(function()
  {
   var m;
   m=a.f.$==0?a.p.$==1?{
    $:0,
    $0:View$1.Apply(a.f.$0,View$1.Const(a.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(a.f.$0,a.p.$0)
   }:a.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(a.f.$0),a.p.$0)
   }:{
    $:1,
    $0:a.f.$0(a.p.$0)
   };
   return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
  },AppFramework.mainDocV().get_View()),c$1.p)))));
  SC$1.aString=Var$1.Lens(NewLY.aV(),Global.String,function(a$1,v)
  {
   return Operators$1.toInt(Global.Number(v));
  });
  SC$1.main0=(c$2=Fun.New(NewLY.op_Dereference(function(a$1)
  {
   return function(b$3)
   {
    return NewLY.concat(a$1,b$3);
   };
  }),{
   $:0,
   $0:NewLY.aV().get_View()
  }),Fun.New(c$2.f.$==0?c$2.p.$==1?{
   $:0,
   $0:View$1.Apply(c$2.f.$0,View$1.Const(c$2.p.$0))
  }:{
   $:0,
   $0:View$1.Apply(c$2.f.$0,c$2.p.$0)
  }:c$2.p.$==0?{
   $:0,
   $0:View$1.Apply(View$1.Const(c$2.f.$0),c$2.p.$0)
  }:{
   $:1,
   $0:c$2.f.$0(c$2.p.$0)
  },{
   $:1,
   $0:3.2
  }));
  SC$1.main1=(c$3=Fun.New(NewLY.op_Dereference((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("result = "+Utils.toSafe($2)+" "+Utils.toSafe($3));
  }))(Global.id)),(f$4=NewLY.main0(),f$4.f.$==0?f$4.p.$==1?{
   $:0,
   $0:View$1.Apply(f$4.f.$0,View$1.Const(f$4.p.$0))
  }:{
   $:0,
   $0:View$1.Apply(f$4.f.$0,f$4.p.$0)
  }:f$4.p.$==0?{
   $:0,
   $0:View$1.Apply(View$1.Const(f$4.f.$0),f$4.p.$0)
  }:{
   $:1,
   $0:f$4.f.$0(f$4.p.$0)
  })),Fun.New(c$3.f.$==0?c$3.p.$==1?{
   $:0,
   $0:View$1.Apply(c$3.f.$0,View$1.Const(c$3.p.$0))
  }:{
   $:0,
   $0:View$1.Apply(c$3.f.$0,c$3.p.$0)
  }:c$3.p.$==0?{
   $:0,
   $0:View$1.Apply(View$1.Const(c$3.f.$0),c$3.p.$0)
  }:{
   $:1,
   $0:c$3.f.$0(c$3.p.$0)
  },{
   $:1,
   $0:"main0"
  }));
  SC$1.main=(c$4=(c$5=(c$6=(c$7=(c$8=(c$9=(c$10=(c$11=(c$12=Fun.New(NewLY.op_Dereference((Runtime.Curried3(Doc.Element))("h3")),{
   $:1,
   $0:List.ofArray([AttrModule.DynamicStyle("color",NewLY.name().get_View())])
  }),(p={
   $:1,
   $0:[(NewLY.extractDoc())("MAIN:")]
  },Fun.New(c$12.f.$==0?c$12.p.$==1?{
   $:0,
   $0:View$1.Apply(c$12.f.$0,View$1.Const(c$12.p.$0))
  }:{
   $:0,
   $0:View$1.Apply(c$12.f.$0,c$12.p.$0)
  }:c$12.p.$==0?{
   $:0,
   $0:View$1.Apply(View$1.Const(c$12.f.$0),c$12.p.$0)
  }:{
   $:1,
   $0:c$12.f.$0(c$12.p.$0)
  },p))),Fun.New(c$11.f,Val.addDoc(Val.textDoc((f$5=NewLY.main1(),f$5.f.$==0?f$5.p.$==1?{
   $:0,
   $0:View$1.Apply(f$5.f.$0,View$1.Const(f$5.p.$0))
  }:{
   $:0,
   $0:View$1.Apply(f$5.f.$0,f$5.p.$0)
  }:f$5.p.$==0?{
   $:0,
   $0:View$1.Apply(View$1.Const(f$5.f.$0),f$5.p.$0)
  }:{
   $:1,
   $0:f$5.f.$0(f$5.p.$0)
  })),c$11.p))),Fun.New(c$10.f,Val.addDoc(Val.textDoc((f$6=NewLY.main1(),f$6.f.$==0?f$6.p.$==1?{
   $:0,
   $0:View$1.Apply(f$6.f.$0,View$1.Const(f$6.p.$0))
  }:{
   $:0,
   $0:View$1.Apply(f$6.f.$0,f$6.p.$0)
  }:f$6.p.$==0?{
   $:0,
   $0:View$1.Apply(View$1.Const(f$6.f.$0),f$6.p.$0)
  }:{
   $:1,
   $0:f$6.f.$0(f$6.p.$0)
  })),c$10.p))),Fun.New(c$9.f,Val.addDoc((NewLY.extractDoc())(":"),c$9.p))),Fun.New(c$8.f,Val.addDoc((f$7=NewLY.sayHello(),Doc.BindView(function()
  {
   var m;
   m=f$7.f.$==0?f$7.p.$==1?{
    $:0,
    $0:View$1.Apply(f$7.f.$0,View$1.Const(f$7.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(f$7.f.$0,f$7.p.$0)
   }:f$7.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(f$7.f.$0),f$7.p.$0)
   }:{
    $:1,
    $0:f$7.f.$0(f$7.p.$0)
   };
   return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
  },AppFramework.mainDocV().get_View())),c$8.p))),Fun.New(c$7.f,Val.addDoc((NewLY.extractDoc())(":"),c$7.p))),Fun.New(c$6.f,Val.addDoc((NewLY.extractDoc())(" Más >> "),c$6.p))),Fun.New(c$5.f,Val.addDoc((f$8=NewLY.sayHello(),Doc.BindView(function()
  {
   var m;
   m=f$8.f.$==0?f$8.p.$==1?{
    $:0,
    $0:View$1.Apply(f$8.f.$0,View$1.Const(f$8.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(f$8.f.$0,f$8.p.$0)
   }:f$8.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(f$8.f.$0),f$8.p.$0)
   }:{
    $:1,
    $0:f$8.f.$0(f$8.p.$0)
   };
   return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
  },AppFramework.mainDocV().get_View())),c$5.p))),Fun.New(c$4.f,Val.addDoc((NewLY.extractDoc())(" <<"),c$4.p)));
  SC$1.main2=NewLY.makeAViewDoc(function()
  {
   return Doc.Element("h4",[AttrModule.Dynamic("style",NewLY.name().get_View())],[Doc.TextNode("MAIN2:"),Doc.TextView(NewLY.name().get_View())]);
  });
  SC$1.appFwk=(c$13=Fun.New(NewLY.op_Dereference((Runtime.Curried3(Doc.Element))("div")),{
   $:1,
   $0:List.T.Empty
  }),(p$1={
   $:1,
   $0:[(NewLY.extractDoc())("@{AppFramework.AppFwkClient}")]
  },Fun.New(c$13.f.$==0?c$13.p.$==1?{
   $:0,
   $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))
  }:{
   $:0,
   $0:View$1.Apply(c$13.f.$0,c$13.p.$0)
  }:c$13.p.$==0?{
   $:0,
   $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)
  }:{
   $:1,
   $0:c$13.f.$0(c$13.p.$0)
  },p$1)));
  SC$1.split=(c$14=Fun.New(NewLY.op_Dereference(Runtime.Curried(LayoutEngineModule.variableSplitter,2,[false,0,50,100])),{
   $:1,
   $0:(f$9=NewLY.appFwk(),Doc.BindView(function()
   {
    var m;
    m=f$9.f.$==0?f$9.p.$==1?{
     $:0,
     $0:View$1.Apply(f$9.f.$0,View$1.Const(f$9.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(f$9.f.$0,f$9.p.$0)
    }:f$9.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(f$9.f.$0),f$9.p.$0)
    }:{
     $:1,
     $0:f$9.f.$0(f$9.p.$0)
    };
    return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
   },AppFramework.mainDocV().get_View()))
  }),(p$2={
   $:1,
   $0:(f$10=NewLY.main(),Doc.BindView(function()
   {
    var m;
    m=f$10.f.$==0?f$10.p.$==1?{
     $:0,
     $0:View$1.Apply(f$10.f.$0,View$1.Const(f$10.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(f$10.f.$0,f$10.p.$0)
    }:f$10.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(f$10.f.$0),f$10.p.$0)
    }:{
     $:1,
     $0:f$10.f.$0(f$10.p.$0)
    };
    return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
   },AppFramework.mainDocV().get_View()))
  },Fun.New(c$14.f.$==0?c$14.p.$==1?{
   $:0,
   $0:View$1.Apply(c$14.f.$0,View$1.Const(c$14.p.$0))
  }:{
   $:0,
   $0:View$1.Apply(c$14.f.$0,c$14.p.$0)
  }:c$14.p.$==0?{
   $:0,
   $0:View$1.Apply(View$1.Const(c$14.f.$0),c$14.p.$0)
  }:{
   $:1,
   $0:c$14.f.$0(c$14.p.$0)
  },p$2)));
  SC$1.split2=(c$15=Fun.New(NewLY.op_Dereference(Runtime.Curried(LayoutEngineModule.variableSplitter,2,[false,0,50,100])),{
   $:1,
   $0:(f$11=NewLY.appFwk(),Doc.BindView(function()
   {
    var m;
    m=f$11.f.$==0?f$11.p.$==1?{
     $:0,
     $0:View$1.Apply(f$11.f.$0,View$1.Const(f$11.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(f$11.f.$0,f$11.p.$0)
    }:f$11.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(f$11.f.$0),f$11.p.$0)
    }:{
     $:1,
     $0:f$11.f.$0(f$11.p.$0)
    };
    return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
   },AppFramework.mainDocV().get_View()))
  }),(p$3={
   $:1,
   $0:NewLY.main2()
  },Fun.New(c$15.f.$==0?c$15.p.$==1?{
   $:0,
   $0:View$1.Apply(c$15.f.$0,View$1.Const(c$15.p.$0))
  }:{
   $:0,
   $0:View$1.Apply(c$15.f.$0,c$15.p.$0)
  }:c$15.p.$==0?{
   $:0,
   $0:View$1.Apply(View$1.Const(c$15.f.$0),c$15.p.$0)
  }:{
   $:1,
   $0:c$15.f.$0(c$15.p.$0)
  },p$3)));
  AppFramework.addPlugIn((b$2=AppFramework.plugin(),b$2.AddDoc(b$2.AddDoc(b$2.AddDoc(b$2.AddDoc(b$2.AddDoc(b$2.AddDoc(b$2.AddVar(b$2.AddVar(b$2.Name(b$2.Yield(),"NewLY"),"name",NewLY.name()),"a",NewLY.aString()),"split",Lazy.Create(function()
  {
   var f$13;
   f$13=NewLY.split();
   return Doc.BindView(function()
   {
    var m;
    m=f$13.f.$==0?f$13.p.$==1?{
     $:0,
     $0:View$1.Apply(f$13.f.$0,View$1.Const(f$13.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(f$13.f.$0,f$13.p.$0)
    }:f$13.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(f$13.f.$0),f$13.p.$0)
    }:{
     $:1,
     $0:f$13.f.$0(f$13.p.$0)
    };
    return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
   },AppFramework.mainDocV().get_View());
  })),"split2",Lazy.Create(function()
  {
   var f$13;
   f$13=NewLY.split2();
   return Doc.BindView(function()
   {
    var m;
    m=f$13.f.$==0?f$13.p.$==1?{
     $:0,
     $0:View$1.Apply(f$13.f.$0,View$1.Const(f$13.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(f$13.f.$0,f$13.p.$0)
    }:f$13.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(f$13.f.$0),f$13.p.$0)
    }:{
     $:1,
     $0:f$13.f.$0(f$13.p.$0)
    };
    return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
   },AppFramework.mainDocV().get_View());
  })),"main",Lazy.Create(function()
  {
   var f$13;
   f$13=NewLY.main();
   return Doc.BindView(function()
   {
    var m;
    m=f$13.f.$==0?f$13.p.$==1?{
     $:0,
     $0:View$1.Apply(f$13.f.$0,View$1.Const(f$13.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(f$13.f.$0,f$13.p.$0)
    }:f$13.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(f$13.f.$0),f$13.p.$0)
    }:{
     $:1,
     $0:f$13.f.$0(f$13.p.$0)
    };
    return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
   },AppFramework.mainDocV().get_View());
  })),"main2",Lazy.Create(NewLY.main2)),"sayHello",Lazy.Create(function()
  {
   var f$13;
   f$13=NewLY.sayHello();
   return Doc.BindView(function()
   {
    var m;
    m=f$13.f.$==0?f$13.p.$==1?{
     $:0,
     $0:View$1.Apply(f$13.f.$0,View$1.Const(f$13.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(f$13.f.$0,f$13.p.$0)
    }:f$13.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(f$13.f.$0),f$13.p.$0)
    }:{
     $:1,
     $0:f$13.f.$0(f$13.p.$0)
    };
    return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
   },AppFramework.mainDocV().get_View());
  })),"sayHello2",Lazy.Create(function()
  {
   var f$13;
   f$13=NewLY.sayHello();
   return Doc.BindView(function()
   {
    var m;
    m=f$13.f.$==0?f$13.p.$==1?{
     $:0,
     $0:View$1.Apply(f$13.f.$0,View$1.Const(f$13.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(f$13.f.$0,f$13.p.$0)
    }:f$13.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(f$13.f.$0),f$13.p.$0)
    }:{
     $:1,
     $0:f$13.f.$0(f$13.p.$0)
    };
    return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
   },AppFramework.mainDocV().get_View());
  }))));
 };
 Runtime.OnLoad(function()
 {
  NewLY.mainProgram();
 });
}());

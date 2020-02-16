(function()
{
 "use strict";
 var Global,WebSharper,Obj,FsRoot,Library,Monads,Result,Builder,Operators,String,ParseO,LibraryJS,ResizeObserver,WebComponent,WcSplitter,WcSplitterT,AppFrameworkTemplate,AppFramework2,PlgInName,PlgVarName,PlgDocName,PlgViwName,PlgActName,PlugInVar,PlugInView,PlugInDoc,PlugInAction,PlugIn,IdentType,ParmTypeBasic,ParmType,ParmDef,ParmVl,PlugInBuilder,AF,Client,TestingJS,SnippetTemplates,AppFramework2UI,PlugInFuncs,Direct,SC$1,testing_GeneratedPrintf,GeneratedPrintf,IntelliFactory,Runtime,Enumerator,Result$1,Arrays,List,Operators$1,Strings,Seq,Slice,Char,Unchecked,Utils,console,Concurrency,UI,Var$1,View,Client$1,Templates,Doc,Reflect,Object,AttrModule,AttrProxy,Lazy,FromView,ListModel,DateUtil,Numeric,System,Guid;
 Global=self;
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 Monads=Library.Monads=Library.Monads||{};
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 Operators=Result.Operators=Result.Operators||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};
 WebComponent=LibraryJS.WebComponent=LibraryJS.WebComponent||{};
 WcSplitter=WebComponent.WcSplitter=WebComponent.WcSplitter||{};
 WcSplitterT=WcSplitter.WcSplitterT=WcSplitter.WcSplitterT||{};
 AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate||{};
 AppFramework2=LibraryJS.AppFramework2=LibraryJS.AppFramework2||{};
 PlgInName=AppFramework2.PlgInName=AppFramework2.PlgInName||{};
 PlgVarName=AppFramework2.PlgVarName=AppFramework2.PlgVarName||{};
 PlgDocName=AppFramework2.PlgDocName=AppFramework2.PlgDocName||{};
 PlgViwName=AppFramework2.PlgViwName=AppFramework2.PlgViwName||{};
 PlgActName=AppFramework2.PlgActName=AppFramework2.PlgActName||{};
 PlugInVar=AppFramework2.PlugInVar=AppFramework2.PlugInVar||{};
 PlugInView=AppFramework2.PlugInView=AppFramework2.PlugInView||{};
 PlugInDoc=AppFramework2.PlugInDoc=AppFramework2.PlugInDoc||{};
 PlugInAction=AppFramework2.PlugInAction=AppFramework2.PlugInAction||{};
 PlugIn=AppFramework2.PlugIn=AppFramework2.PlugIn||{};
 IdentType=AppFramework2.IdentType=AppFramework2.IdentType||{};
 ParmTypeBasic=AppFramework2.ParmTypeBasic=AppFramework2.ParmTypeBasic||{};
 ParmType=AppFramework2.ParmType=AppFramework2.ParmType||{};
 ParmDef=AppFramework2.ParmDef=AppFramework2.ParmDef||{};
 ParmVl=AppFramework2.ParmVl=AppFramework2.ParmVl||{};
 PlugInBuilder=AppFramework2.PlugInBuilder=AppFramework2.PlugInBuilder||{};
 AF=AppFramework2.AF=AppFramework2.AF||{};
 Client=AF.Client=AF.Client||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 SnippetTemplates=TestingJS.SnippetTemplates=TestingJS.SnippetTemplates||{};
 AppFramework2UI=TestingJS.AppFramework2UI=TestingJS.AppFramework2UI||{};
 PlugInFuncs=AppFramework2UI.PlugInFuncs=AppFramework2UI.PlugInFuncs||{};
 Direct=AppFramework2UI.Direct=AppFramework2UI.Direct||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 testing_GeneratedPrintf=Global.testing_GeneratedPrintf=Global.testing_GeneratedPrintf||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 Result$1=WebSharper&&WebSharper.Result;
 Arrays=WebSharper&&WebSharper.Arrays;
 List=WebSharper&&WebSharper.List;
 Operators$1=WebSharper&&WebSharper.Operators;
 Strings=WebSharper&&WebSharper.Strings;
 Seq=WebSharper&&WebSharper.Seq;
 Slice=WebSharper&&WebSharper.Slice;
 Char=WebSharper&&WebSharper.Char;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Utils=WebSharper&&WebSharper.Utils;
 console=Global.console;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 UI=WebSharper&&WebSharper.UI;
 Var$1=UI&&UI.Var$1;
 View=UI&&UI.View;
 Client$1=UI&&UI.Client;
 Templates=Client$1&&Client$1.Templates;
 Doc=UI&&UI.Doc;
 Reflect=Global.Reflect;
 Object=Global.Object;
 AttrModule=UI&&UI.AttrModule;
 AttrProxy=UI&&UI.AttrProxy;
 Lazy=WebSharper&&WebSharper.Lazy;
 FromView=UI&&UI.FromView;
 ListModel=UI&&UI.ListModel;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 System=Global.System;
 Guid=System&&System.Guid;
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
   return Result$1.Bind(f,{
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
  return Result$1.Bind(f,v);
 };
 Operators.op_BarGreaterGreater=function(v,f)
 {
  return Result$1.Map(f,v);
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
  return Result$1.Bind(function(v)
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
   return Operators$1.FailWith(Global.String(x));
  },r);
 };
 Result.iter=function(fE,f,r)
 {
  Result.defaultWith(fE,Result$1.Map(f,r));
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
 Result.errorf=function(fmt)
 {
  return fmt(Library.Error);
 };
 String.thousands=function(n)
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
  return Seq.map((x$1=Strings.replicate(n," "),function(y)
  {
   return x$1+y;
  }),x);
 };
 String.unindent=function(s)
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
 String.right=function(n,s)
 {
  return Library["String.Right"](s,n);
 };
 String.left=function(n,s)
 {
  return Library["String.Left"](s,n);
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
 ParseO.Int64=function()
 {
  SC$1.$cctor();
  return SC$1["|Int64|_|"];
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
 ParseO.parseInt64O=function()
 {
  SC$1.$cctor();
  return SC$1.parseInt64O;
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
 ParseO.parseDateO2=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO2;
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
 Library["String.get_toUnderscore"]=function(_this,u)
 {
  return Arrays.ofSeq(Seq.collect(Global.id,Seq.mapi(function(i,c)
  {
   return i>0&&Char.IsUpper(c)?List.ofArray(["_",c]):List.ofArray([c]);
  },_this))).join("");
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
 WcSplitterT=WcSplitter.WcSplitterT=Runtime.Class({
  connectedCallback:function()
  {
   var el,shadowRoot,elsh,minV,maxV,value,first,vertical,size,padding,gap,dragging,startP,start,domElem,a;
   function sizeCalc(sh)
   {
    var p,pt,pb,r;
    p=vertical?["padding-left","padding-right","grid-column-gap"]:["padding-top","padding-bottom","grid-row-gap"];
    pt=Global.parseFloat("0"+Global.jQuery(sh.parentElement.parentElement).css(p[0]));
    pb=Global.parseFloat("0"+Global.jQuery(sh.parentElement.parentElement).css(p[1]));
    gap.Set(Global.parseFloat("0"+Global.jQuery(sh.parentElement.parentElement).css(p[2])));
    padding[0]=pt+pb;
    r=el.getBoundingClientRect();
    return vertical?first?[r.width,r.height]:[-r.width,r.height]:first?[r.height,r.width]:[-r.height,r.width];
   }
   function mouseCoord(ev)
   {
    return vertical?ev.clientX:ev.clientY;
   }
   function drag(ev)
   {
    var v,b;
    v=(mouseCoord(ev)-start[0])*100/size[0][0]+startP[0];
    value.Set((b=Unchecked.Compare(minV,v)===1?minV:v,Unchecked.Compare(maxV,b)===-1?maxV:b));
   }
   function finishDragging()
   {
    if(dragging[0])
     {
      dragging[0]=false;
      self.removeEventListener("mousemove",drag,false);
      self.removeEventListener("mouseup",finishDragging,false);
     }
   }
   function startDragging(ev)
   {
    var o,o$1;
    if(!dragging[0])
     {
      dragging[0]=true;
      startP[0]=value.Get();
      start[0]=mouseCoord(ev);
      size[0]=(o=(o$1=domElem[0],o$1==null?null:{
       $:1,
       $0:sizeCalc(o$1.$0)
      }),o==null?[100,500]:o.$0);
      self.addEventListener("mousemove",drag,false);
      self.addEventListener("mouseup",finishDragging,false);
      ev.preventDefault();
     }
   }
   function partSizes(sz,gap$1,pad,spl)
   {
    return[(sz-gap$1-pad)*spl/100,(sz-gap$1-pad)*(100-spl)/100];
   }
   function styleSections(p1,p2)
   {
    return(((((Runtime.Curried(function($1,$2,$3,$4,$5)
    {
     return $1(" "+$2.toFixed(2)+"px "+$3.toFixed(2)+"px ; "+Utils.toSafe($4)+" : "+$5.toFixed(2)+"px; ");
    },5))(Global.id))(p1))(p2))(vertical?"height":"width"))(size[0][1]);
   }
   function recalc()
   {
    var o;
    o=domElem[0];
    o==null?void 0:size[0]=sizeCalc(o.$0);
    value.Set(value.Get());
   }
   if(!this.added)
    {
     el=this;
     shadowRoot=el.attachShadow({
      mode:"open"
     });
     elsh=self.document.createElement("div");
     minV=el.hasAttribute("min")?Global.parseFloat(el.getAttribute("min")):4;
     maxV=el.hasAttribute("max")?Global.parseFloat(el.getAttribute("max")):96;
     value=Var$1.Create$1(el.hasAttribute("value")?Global.parseFloat(el.getAttribute("value")):50);
     first=!el.hasAttribute("second");
     vertical=el.hasAttribute("vertical");
     size=[[0,0]];
     padding=[0];
     gap=Var$1.Create$1(0);
     dragging=[false];
     startP=[0];
     start=[0];
     domElem=[null];
     a=(((((vertical?WcSplitter.layoutVertical():WcSplitter.layoutHorizontal())(View.Map(function(spl)
     {
      var x;
      x=partSizes(size[0][0],gap.Get(),padding[0],spl);
      return styleSections.apply(null,x);
     },value.get_View())))(function()
     {
      ResizeObserver.addResizeObserver(recalc,el);
      recalc();
     }))(function(sp)
     {
      domElem[0]={
       $:1,
       $0:sp
      };
      recalc();
     }))(function(me)
     {
      startDragging(me);
     }))(View.Map(function($1)
     {
      return function($2)
      {
       return $1(Utils.prettyPrint($2)+"px");
      };
     }(Global.id),gap.get_View()));
     Templates.LoadLocalTemplates("");
     Doc.Run(elsh,a);
     shadowRoot.appendChild(elsh.firstChild);
     this.added=true;
    }
  }
 },Obj,WcSplitterT);
 WcSplitterT.Constructor=function()
 {
  var _this,r;
  _this=(r=Reflect.construct(self.HTMLElement,[],this.__proto__.constructor),r);
  self.FsRoot.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New.call(_this);
  return _this;
 };
 WcSplitterT.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.added=false;
  (function($1)
  {
   return $1("WcSplitterT initializer");
  }(function(s)
  {
   console.log(s);
  }));
 },WcSplitterT);
 WcSplitter.init=function(layoutH,layoutV)
 {
  var o;
  o=new WcSplitterT.New();
  WcSplitter.set_layoutHorizontal(layoutH);
  WcSplitter.set_layoutVertical(layoutV);
  WebComponent.defineWebComponent("wcomp-splitter",WcSplitterT.Constructor,self.FsRoot.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New);
 };
 WcSplitter.layoutVertical=function()
 {
  SC$1.$cctor();
  return SC$1.layoutVertical;
 };
 WcSplitter.set_layoutVertical=function($1)
 {
  SC$1.$cctor();
  SC$1.layoutVertical=$1;
 };
 WcSplitter.layoutHorizontal=function()
 {
  SC$1.$cctor();
  return SC$1.layoutHorizontal;
 };
 WcSplitter.set_layoutHorizontal=function($1)
 {
  SC$1.$cctor();
  SC$1.layoutHorizontal=$1;
 };
 WebComponent.defineWebComponent=function(_nm,_o,_c)
 {
  try
  {
   console.log("defineWebComponent: "+_nm);
   Object.setPrototypeOf(_c.prototype,self.HTMLElement.prototype);
   Object.setPrototypeOf(_c,self.HTMLElement);
   Object.setPrototypeOf(_o.prototype,_c.prototype);
   self.customElements.define(_nm,_o);
  }
  catch(m)
  {
   (function($1)
   {
    return $1("Failed to define WebComponent. Not supported.");
   }(function(s)
   {
    console.log(s);
   }));
  }
 };
 AppFrameworkTemplate.html=function()
 {
  SC$1.$cctor();
  return SC$1.html;
 };
 PlgInName=AppFramework2.PlgInName=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,PlgInName);
 PlgVarName=AppFramework2.PlgVarName=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,PlgVarName);
 PlgDocName=AppFramework2.PlgDocName=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,PlgDocName);
 PlgViwName=AppFramework2.PlgViwName=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,PlgViwName);
 PlgActName=AppFramework2.PlgActName=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,PlgActName);
 PlugInVar.New=function(varName,varVar)
 {
  return{
   varName:varName,
   varVar:varVar
  };
 };
 PlugInView.New=function(viwName,viwView)
 {
  return{
   viwName:viwName,
   viwView:viwView
  };
 };
 PlugInDoc.New=function(docName,docDoc)
 {
  return{
   docName:docName,
   docDoc:docDoc
  };
 };
 PlugInAction.New=function(actName,actFunction,actEnabled)
 {
  return{
   actName:actName,
   actFunction:actFunction,
   actEnabled:actEnabled
  };
 };
 PlugIn.New=function(plgName,plgVars,plgViews,plgDocs,plgActions)
 {
  return{
   plgName:plgName,
   plgVars:plgVars,
   plgViews:plgViews,
   plgDocs:plgDocs,
   plgActions:plgActions
  };
 };
 IdentType=AppFramework2.IdentType=Runtime.Class({
  toString:function()
  {
   var x;
   x=Library["String.Substring2"]((function($1)
   {
    return function($2)
    {
     return $1(testing_GeneratedPrintf.p($2));
    };
   }(Global.id))(this),5,100);
   return(function($1)
   {
    return function($2)
    {
     return $1("id"+Utils.toSafe($2));
    };
   }(Global.id))(x);
  }
 },null,IdentType);
 IdentType.IdentGeneric=new IdentType({
  $:5
 });
 IdentType.IdentPlugIn=new IdentType({
  $:4
 });
 IdentType.IdentAction=new IdentType({
  $:3
 });
 IdentType.IdentDoc=new IdentType({
  $:2
 });
 IdentType.IdentView=new IdentType({
  $:1
 });
 IdentType.IdentVar=new IdentType({
  $:0
 });
 ParmTypeBasic=AppFramework2.ParmTypeBasic=Runtime.Class({
  toString:function()
  {
   return this.$==1?"Var":this.$==2?"Doc":this.$==3?"Action":this.$==4?(function($1)
   {
    return function($2)
    {
     return $1(Global.String($2));
    };
   }(Global.id))(this.$0):this.$==5?"obj":"Text";
  }
 },null,ParmTypeBasic);
 ParmTypeBasic.ParmObject=new ParmTypeBasic({
  $:5
 });
 ParmTypeBasic.ParmAction=new ParmTypeBasic({
  $:3
 });
 ParmTypeBasic.ParmDoc=new ParmTypeBasic({
  $:2
 });
 ParmTypeBasic.ParmVar=new ParmTypeBasic({
  $:1
 });
 ParmTypeBasic.ParmText=new ParmTypeBasic({
  $:0
 });
 ParmType=AppFramework2.ParmType=Runtime.Class({
  toString:function()
  {
   var $1,x,x$1;
   switch(this.$==0?($1=this.$0,1):this.$==1?($1=this.$0,2):this.$==3?($1=this.$0,4):this.$==4?($1=this.$0,5):this.$0.$==1?this.$0.$0.$==0?this.$0.$1.$==1?this.$0.$1.$0.$==3?this.$0.$1.$1.$==0?0:($1=this.$0,3):($1=this.$0,3):($1=this.$0,3):($1=this.$0,3):($1=this.$0,3))
   {
    case 0:
     return"<Attrs>";
    case 1:
     return(function($2)
     {
      return function($3)
      {
       return $2(Global.String($3));
      };
     }(Global.id))($1);
    case 2:
     return ParmType.ListToString($1);
    case 3:
     x=ParmType.ListToString($1);
     return(function($2)
     {
      return function($3)
      {
       return $2("\"<nm1>="+Utils.toSafe($3)+";...\"");
      };
     }(Global.id))(x);
    case 4:
     x$1=ParmType.ListToString($1);
     return(function($2)
     {
      return function($3)
      {
       return $2(Utils.toSafe($3)+" ...");
      };
     }(Global.id))(x$1);
    case 5:
     return(function($2)
     {
      return function($3)
      {
       return $2("["+Global.String($3)+"]");
      };
     }(Global.id))($1);
   }
  }
 },null,ParmType);
 ParmType.ListToString=function(b)
 {
  return Strings.concat("|",Seq.map(function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),b));
 };
 ParmDef=AppFramework2.ParmDef=Runtime.Class({
  toString:function()
  {
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Utils.toSafe($2)+":"+Global.String($3));
   }))(Global.id))(this.$0))(this.$1);
  }
 },null,ParmDef);
 ParmVl.PvNone={
  $:14
 };
 PlugInBuilder=AppFramework2.PlugInBuilder=Runtime.Class({
  Merge:function(plg,prefix,p2)
  {
   plg.plgVars.AppendMany(Seq.map(function(v)
   {
    return PlugInVar.New(new PlgVarName({
     $:0,
     $0:prefix+v.varName.get_Id()
    }),v.varVar);
   },p2.plgVars));
   plg.plgViews.AppendMany(Seq.map(function(w)
   {
    return PlugInView.New(new PlgViwName({
     $:0,
     $0:prefix+w.viwName.get_Id()
    }),w.viwView);
   },p2.plgViews));
   plg.plgDocs.AppendMany(Seq.map(function(d)
   {
    return PlugInDoc.New(new PlgDocName({
     $:0,
     $0:prefix+d.docName.get_Id()
    }),d.docDoc);
   },p2.plgDocs));
   plg.plgActions.AppendMany(Seq.map(function(a)
   {
    return PlugInAction.New(new PlgActName({
     $:0,
     $0:prefix+a.actName.get_Id()
    }),a.actFunction,a.actEnabled);
   },p2.plgActions));
   return plg;
  },
  AddActO:function(plg,name,actO)
  {
   actO==null?void 0:plg.plgActions.Append(AppFramework2.newAct(new PlgActName({
    $:0,
    $0:name
   }),actO.$0));
   return plg;
  },
  AddAct6:function(plg,name,act,a,b,c,d,e,f)
  {
   plg.plgActions.Append(AppFramework2.newActF(new PlgActName({
    $:0,
    $0:name
   }),AppFramework2.funAct6(act,a[0],a[1],b[0],b[1],c[0],c[1],d[0],d[1],e[0],e[1],f[0],f[1])));
   return plg;
  },
  AddAct5:function(plg,name,act,a,b,c,d,e)
  {
   plg.plgActions.Append(AppFramework2.newActF(new PlgActName({
    $:0,
    $0:name
   }),AppFramework2.funAct5(act,a[0],a[1],b[0],b[1],c[0],c[1],d[0],d[1],e[0],e[1])));
   return plg;
  },
  AddAct4:function(plg,name,act,a,b,c,d)
  {
   plg.plgActions.Append(AppFramework2.newActF(new PlgActName({
    $:0,
    $0:name
   }),AppFramework2.funAct4(act,a[0],a[1],b[0],b[1],c[0],c[1],d[0],d[1])));
   return plg;
  },
  AddAct3:function(plg,name,act,a,b,c)
  {
   plg.plgActions.Append(AppFramework2.newActF(new PlgActName({
    $:0,
    $0:name
   }),AppFramework2.funAct3(act,a[0],a[1],b[0],b[1],c[0],c[1])));
   return plg;
  },
  AddAct2:function(plg,name,act,a,b)
  {
   plg.plgActions.Append(AppFramework2.newActF(new PlgActName({
    $:0,
    $0:name
   }),AppFramework2.funAct2(act,a[0],a[1],b[0],b[1])));
   return plg;
  },
  AddAct1:function(plg,name,act,a,b)
  {
   plg.plgActions.Append(AppFramework2.newActF(new PlgActName({
    $:0,
    $0:name
   }),AppFramework2.funAct1(act,a[0],a[1])));
   return plg;
  },
  AddAct:function(plg,name,act)
  {
   plg.plgActions.Append(AppFramework2.newAct(new PlgActName({
    $:0,
    $0:name
   }),act));
   return plg;
  },
  AddDoc6:function(plg,name,doc,a,b,c,d,e,f)
  {
   plg.plgDocs.Append(AppFramework2.newDocF(new PlgDocName({
    $:0,
    $0:name
   }),AppFramework2.funDoc6(doc,a[0],a[1],b[0],b[1],c[0],c[1],d[0],d[1],e[0],e[1],f[0],f[1])));
   return plg;
  },
  AddDoc5:function(plg,name,doc,a,b,c,d,e)
  {
   plg.plgDocs.Append(AppFramework2.newDocF(new PlgDocName({
    $:0,
    $0:name
   }),AppFramework2.funDoc5(doc,a[0],a[1],b[0],b[1],c[0],c[1],d[0],d[1],e[0],e[1])));
   return plg;
  },
  AddDoc4:function(plg,name,doc,a,b,c,d)
  {
   plg.plgDocs.Append(AppFramework2.newDocF(new PlgDocName({
    $:0,
    $0:name
   }),AppFramework2.funDoc4(doc,a[0],a[1],b[0],b[1],c[0],c[1],d[0],d[1])));
   return plg;
  },
  AddDoc3:function(plg,name,doc,a,b,c)
  {
   plg.plgDocs.Append(AppFramework2.newDocF(new PlgDocName({
    $:0,
    $0:name
   }),AppFramework2.funDoc3(doc,a[0],a[1],b[0],b[1],c[0],c[1])));
   return plg;
  },
  AddDoc2:function(plg,name,doc,a,b)
  {
   plg.plgDocs.Append(AppFramework2.newDocF(new PlgDocName({
    $:0,
    $0:name
   }),AppFramework2.funDoc2(doc,a[0],a[1],b[0],b[1])));
   return plg;
  },
  AddDoc1:function(plg,name,doc,a,b)
  {
   plg.plgDocs.Append(AppFramework2.newDocF(new PlgDocName({
    $:0,
    $0:name
   }),AppFramework2.funDoc1(doc,a[0],a[1])));
   return plg;
  },
  AddDoc0:function(plg,name,doc)
  {
   plg.plgDocs.Append(AppFramework2.newDoc0(new PlgDocName({
    $:0,
    $0:name
   }),doc));
   return plg;
  },
  AddDoc:function(plg,name,doc)
  {
   plg.plgDocs.Append(AppFramework2.newDoc(new PlgDocName({
    $:0,
    $0:name
   }),doc));
   return plg;
  },
  AddVar:function(plg,name,_var)
  {
   plg.plgVars.Append(AppFramework2.newVar(new PlgVarName({
    $:0,
    $0:name
   }),_var));
   return plg;
  },
  AddViw:function(plg,name,viw)
  {
   plg.plgViews.Append(AppFramework2.newViw(new PlgViwName({
    $:0,
    $0:name
   }),viw));
   return plg;
  },
  Name:function(plg,name)
  {
   return PlugIn.New(new PlgInName({
    $:0,
    $0:name
   }),plg.plgVars,plg.plgViews,plg.plgDocs,plg.plgActions);
  },
  For:function(coll,func)
  {
   var t;
   t=Enumerator.Get(coll);
   try
   {
    while(t.MoveNext())
     func(t.Current());
   }
   finally
   {
    t.Dispose();
   }
  },
  Yield:function()
  {
   return this.Zero();
  },
  Zero:function()
  {
   var i;
   i=AppFramework2.defaultPlugIn();
   return PlugIn.New(new PlgInName({
    $:0,
    $0:"Main"
   }),i.plgVars,i.plgViews,i.plgDocs,i.plgActions);
  }
 },Obj,PlugInBuilder);
 PlugInBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },PlugInBuilder);
 Client.AppFwkClient=function()
 {
  return AF.templateCreate("AppFwkClient",[],[["PlugInName",View.Map(function($1)
  {
   return $1.plgName.get_Id();
  },Client.currentPlugInW())]],[["PlugIns",Client.renderPlugIns()],["Vars",Client.renderVars()],["Views",Client.renderViews()],["Docs",Client.renderDocs()],["Actions",Client.renderActions()]],[],[]);
 };
 Client.renderActions=function()
 {
  function a(plg,act)
  {
   return[plg.plgName,act.actName];
  }
  function a$1(plg,act)
  {
   var parms;
   parms=Client.actParms(act);
   return AF.templateCreate("Action",[AttrModule.DynamicPred("disabled",View.Map(function($1)
   {
    return!$1;
   },act.actEnabled),View.Const(""))],[["Name",View.Const(act.actName.get_Id()+parms)]],[],[],[["Click",function()
   {
    return function(ev)
    {
     return Client.callFunction({
      $:13,
      $0:null
     },{
      $:13,
      $0:ev
     },act.actFunction);
    };
   }]]);
  }
  return Doc.ConvertBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return a$1($1[0],$1[1]);
  },View.Map(function(plg)
  {
   return Seq.map(function(v)
   {
    return[plg,v];
   },plg.plgActions);
  },Client.currentPlugInW()));
 };
 Client.callFunction=function(p1,p2,actF)
 {
  if(actF.$==0)
   actF.$0();
  else
   if(actF.$==1)
    actF.$0(p2);
   else
    if(actF.$==2)
     (actF.$0(p1))(p2);
    else
     ((function($1)
     {
      return function($2)
      {
       return $1("Cannot call too many parameters "+testing_GeneratedPrintf.p$1($2));
      };
     }(Operators$1.FailWith))(actF));
 };
 Client.actParms=function(act)
 {
  var m,x,x$1,x$2,x$3,x$4,x$5,x$6,x$7,x$8,x$9,x$10,x$11;
  m=act.actFunction;
  return m.$==1?(x=Strings.concat(", ",(x$1=List.ofArray([m.$1]),Seq.map(function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),x$1))),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x)):m.$==2?(x$2=Strings.concat(", ",(x$3=List.ofArray([m.$1,m.$2]),Seq.map(function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),x$3))),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$2)):m.$==3?(x$4=Strings.concat(", ",(x$5=List.ofArray([m.$1,m.$2,m.$3]),Seq.map(function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),x$5))),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$4)):m.$==4?(x$6=Strings.concat(", ",(x$7=List.ofArray([m.$1,m.$2,m.$3,m.$4]),Seq.map(function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),x$7))),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$6)):m.$==5?(x$8=Strings.concat(", ",(x$9=List.ofArray([m.$1,m.$2,m.$3,m.$4,m.$5]),Seq.map(function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),x$9))),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$8)):m.$==6?(x$10=Strings.concat(", ",(x$11=List.ofArray([m.$1,m.$2,m.$3,m.$4,m.$5,m.$6]),Seq.map(function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),x$11))),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$10)):"()";
 };
 Client.renderDocs=function()
 {
  function a(plg,doc)
  {
   return[plg.plgName,doc.docName];
  }
  function a$1(plg,doc)
  {
   return AF.templateCreate("Tile",[],[["Name",View.Const(doc.docName.get_Id()+Client.docParms(doc))]],[],[],[["Select",function()
   {
    return function()
    {
     return View.Get(function(plg$1)
     {
      var a$2;
      a$2=plg$1.plgName.get_Id()+"."+doc.docName.get_Id();
      AppFramework2.mainDocV().Set(a$2);
     },Client.currentPlugInW());
    };
   }]]);
  }
  return Doc.ConvertBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return a$1($1[0],$1[1]);
  },View.Bind(function(plg)
  {
   function m(v)
   {
    return[plg,v];
   }
   return View.Map(function(s)
   {
    return Seq.map(m,s);
   },plg.plgDocs.v);
  },Client.currentPlugInW()));
 };
 Client.docParms=function(doc)
 {
  var m,x,x$1,x$2,x$3,x$4,x$5,x$6,x$7,x$8,x$9,x$10,x$11;
  m=doc.docDoc.f();
  return m.$==1?"()":m.$==2?(x=Strings.concat(", ",(x$1=List.ofArray([m.$1]),Seq.map(function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),x$1))),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x)):m.$==3?(x$2=Strings.concat(", ",(x$3=List.ofArray([m.$1,m.$2]),Seq.map(function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),x$3))),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$2)):m.$==4?(x$4=Strings.concat(", ",(x$5=List.ofArray([m.$1,m.$2,m.$3]),Seq.map(function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),x$5))),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$4)):m.$==5?(x$6=Strings.concat(", ",(x$7=List.ofArray([m.$1,m.$2,m.$3,m.$4]),Seq.map(function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),x$7))),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$6)):m.$==6?(x$8=Strings.concat(", ",(x$9=List.ofArray([m.$1,m.$2,m.$3,m.$4,m.$5]),Seq.map(function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),x$9))),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$8)):m.$==7?(x$10=Strings.concat(", ",(x$11=List.ofArray([m.$1,m.$2,m.$3,m.$4,m.$5,m.$6]),Seq.map(function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),x$11))),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$10)):"";
 };
 Client.renderViews=function()
 {
  function a(plg,viw)
  {
   return[plg.plgName,viw.viwName];
  }
  function a$1(plg,viw)
  {
   return AF.templateCreate("NameValue",[],[["Name",View.Const(viw.viwName.get_Id())],["Value",viw.viwView]],[],[],[]);
  }
  return Doc.ConvertBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return a$1($1[0],$1[1]);
  },View.Map(function(plg)
  {
   return Seq.map(function(v)
   {
    return[plg,v];
   },plg.plgViews);
  },Client.currentPlugInW()));
 };
 Client.renderVars=function()
 {
  function a(plg,_var)
  {
   return[plg.plgName,_var.varName];
  }
  function a$1(plg,_var)
  {
   return AF.templateCreate("NameValueInput",[],[["Name",View.Const(_var.varName.get_Id())]],[],[["Value",_var.varVar]],[]);
  }
  return Doc.ConvertBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return a$1($1[0],$1[1]);
  },View.Map(function(plg)
  {
   return Seq.map(function(v)
   {
    return[plg,v];
   },plg.plgVars);
  },Client.currentPlugInW()));
 };
 Client.renderPlugIns=function()
 {
  return Doc.Flatten(AppFramework2.plugIns().MapLens(function($1)
  {
   return AF.templateCreate("Tile",[],[["Name",View.Const($1.get_Id())],["Selected",View.Map(function($2)
   {
    return Unchecked.Equals($2,{
     $:1,
     $0:$1
    })?"selected":"";
   },Client.selectionPlugInO().get_View())]],[],[],[["Select",function()
   {
    return function()
    {
     return Client.selectionPlugInO().Set({
      $:1,
      $0:$1
     });
    };
   }]]);
  }));
 };
 Client.currentPlugInV=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInV;
 };
 Client.currentPlugInW=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInW;
 };
 Client.selectionPlugInO=function()
 {
  SC$1.$cctor();
  return SC$1.selectionPlugInO;
 };
 AF.startWithHtml=function(html)
 {
  var d,x,a;
  WcSplitter.init(Runtime.Curried(AF.splitterTemplate,5,["WCompSplitterHor"]),Runtime.Curried(AF.splitterTemplate,5,["WCompSplitterVer"]));
  d=self.document.createElement("div");
  self.document.body.appendChild(d);
  d.outerHTML=html;
  x=AF.mainDoc();
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.RunAppend(a,x);
 };
 AF.splitterTemplate=function(tmpl,partSizes,afterRender,afterRenderSp,mouseDown,gap)
 {
  return AF.templateCreate0(tmpl,[],[["PartSizes",partSizes],["Gap",gap]],[],[],[["MouseDown",function()
  {
   return mouseDown;
  }]],[["AfterRender",afterRender],["AfterRenderSp",afterRenderSp]]);
 };
 AF.plug=function()
 {
  SC$1.$cctor();
  return SC$1.plug;
 };
 AF.mainDoc=function()
 {
  return AF.templateCreate("AppFramework",[],[["MainDoc",AppFramework2.mainDocV().get_View()]],[["MainClient",AppFramework2.getMainClientDoc()]],[],[["GoClient",function()
  {
   return function()
   {
    return AppFramework2.mainDocV().Set("AF.Client");
   };
  }]]);
 };
 AF.splitter=function(template,attrs,doc1,doc2,gapWO,percentageVO)
 {
  var gapW,perc;
  gapW=AppFramework2.pvView(gapWO==null?{
   $:6,
   $0:"5px"
  }:{
   $:5,
   $0:gapWO.$0
  });
  perc=percentageVO==null?Var$1.Create$1("50"):percentageVO.$0;
  return AF.templateCreate(template,attrs,[["gap",gapW]],[["doc1",doc1],["doc2",doc2]],[["perc",perc]],[["MouseDown",function()
  {
   return function(ev)
   {
    return AF.splitterMouseDown(true,perc,ev);
   };
  }]]);
 };
 AF.splitterMouseDown=function(first,value,ev)
 {
  var el,vertical,startP,o,x,start,gap,size;
  function getSize(el$1)
  {
   return vertical?first?el$1.getBoundingClientRect().width:-el$1.getBoundingClientRect().width:first?el$1.getBoundingClientRect().height:-el$1.getBoundingClientRect().height;
  }
  function mouseCoord(ev$1)
  {
   return vertical?ev$1.clientX:ev$1.clientY;
  }
  function drag(ev$1)
  {
   var v,e,e$1,a,a$1;
   v=String.left(5,Global.String((e=(e$1=(mouseCoord(ev$1)-start)*100/(size-gap)+startP,(a=0,Unchecked.Compare(a,e$1)===1?a:e$1)),(a$1=100,Unchecked.Compare(a$1,e)===-1?a$1:e))));
   value.Get()!==v?value.Set(v):void 0;
  }
  function finishDragging()
  {
   self.removeEventListener("mousemove",drag,false);
   self.removeEventListener("mouseup",finishDragging,false);
  }
  el=ev.toElement;
  vertical=el.parentElement.hasAttribute("vertical");
  startP=(o=(x=value.Get(),(ParseO.parseDoubleO())(x)),o==null?0:o.$0);
  start=mouseCoord(ev);
  gap=getSize(el);
  size=getSize(el.parentElement);
  self.addEventListener("mousemove",drag,false);
  self.addEventListener("mouseup",finishDragging,false);
  ev.preventDefault();
 };
 AF.templateCreate=function(tmpName,attrs,views,docs,vars,actions)
 {
  return AF.templateCreate0(tmpName,attrs,views,docs,vars,actions,[]);
 };
 AF.templateCreate0=function(tmpName,attrs,views,docs,vars,actions,afters)
 {
  var x,s;
  try
  {
   Templates.LoadLocalTemplates("local");
   x=(Seq.isEmpty(attrs)?Global.id:(s=[{
    $:3,
    $0:"attrs",
    $1:AttrProxy.Concat(attrs)
   }],function(s$1)
   {
    return Seq.append(s,s$1);
   }))(Seq.delay(function()
   {
    function m(nm,vr)
    {
     return{
      $:8,
      $0:nm.toLowerCase(),
      $1:vr
     };
    }
    return Seq.append(Seq.map(function($1)
    {
     return m($1[0],$1[1]);
    },vars),Seq.delay(function()
    {
     function m$1(nm,wr)
     {
      return{
       $:2,
       $0:nm.toLowerCase(),
       $1:wr
      };
     }
     return Seq.append(Seq.map(function($1)
     {
      return m$1($1[0],$1[1]);
     },views),Seq.delay(function()
     {
      function m$2(nm,nr)
      {
       return{
        $:0,
        $0:nm.toLowerCase(),
        $1:nr
       };
      }
      return Seq.append(Seq.map(function($1)
      {
       return m$2($1[0],$1[1]);
      },docs),Seq.delay(function()
      {
       function m$3(nm,ar)
       {
        return{
         $:4,
         $0:nm.toLowerCase(),
         $1:ar
        };
       }
       return Seq.append(Seq.map(function($1)
       {
        return m$3($1[0],$1[1]);
       },actions),Seq.delay(function()
       {
        function m$4(nm,ar)
        {
         return{
          $:6,
          $0:nm.toLowerCase(),
          $1:ar
         };
        }
        return Seq.map(function($1)
        {
         return m$4($1[0],$1[1]);
        },afters);
       }));
      }));
     }));
    }));
   }));
   return Templates.NamedTemplate("local",{
    $:1,
    $0:tmpName.toLowerCase()
   },x);
  }
  catch(e)
  {
   return Doc.TextNode(e.message);
  }
 };
 AppFramework2.plugin=function()
 {
  SC$1.$cctor();
  return SC$1.plugin;
 };
 AppFramework2.newDocF=function(name,docF)
 {
  return PlugInDoc.New(name,Lazy.Create(function()
  {
   return docF;
  }));
 };
 AppFramework2.newDocL=function(name,docL)
 {
  return PlugInDoc.New(name,docL);
 };
 AppFramework2.newActF=function(name,fncF)
 {
  return PlugInAction.New(name,fncF,View.Const(true));
 };
 AppFramework2.newAct=function(name,fnc)
 {
  return PlugInAction.New(name,{
   $:0,
   $0:fnc
  },View.Const(true));
 };
 AppFramework2.newDoc0=function(name,f)
 {
  return PlugInDoc.New(name,Lazy.Create(function()
  {
   return{
    $:1,
    $0:f
   };
  }));
 };
 AppFramework2.newDoc=function(name,doc)
 {
  return PlugInDoc.New(name,Lazy.Create(function()
  {
   return{
    $:0,
    $0:doc.f()
   };
  }));
 };
 AppFramework2.newViw=function(name,viw)
 {
  return PlugInView.New(name,viw);
 };
 AppFramework2.newVar=function(name,_var)
 {
  return PlugInVar.New(name,_var);
 };
 AppFramework2.getMainClientDoc=function()
 {
  var x;
  return Doc.EmbedView((x=AppFramework2.plugIns().v,View.Map2(function(mainDoc)
  {
   var r;
   try
   {
    r=Strings.SplitChars(mainDoc,["."],0);
    return AppFramework2.pvDoc({
     $:2,
     $0:[new PlgInName({
      $:0,
      $0:Seq.head(r)
     }),new PlgDocName({
      $:0,
      $0:Seq.last(r)
     })]
    });
   }
   catch(e)
   {
    return Doc.TextView(AppFramework2.mainDocV().get_View());
   }
  },AppFramework2.mainDocV().get_View(),x)));
 };
 AppFramework2.getDocF6=function(dn,plug)
 {
  return AppFramework2.docFuncToF6(AppFramework2.getDocFunc(dn,plug));
 };
 AppFramework2.getDocF5=function(dn,plug)
 {
  return AppFramework2.docFuncToF5(AppFramework2.getDocFunc(dn,plug));
 };
 AppFramework2.getDocF4=function(dn,plug)
 {
  return AppFramework2.docFuncToF4(AppFramework2.getDocFunc(dn,plug));
 };
 AppFramework2.getDocF3=function(dn,plug)
 {
  return AppFramework2.docFuncToF3(AppFramework2.getDocFunc(dn,plug));
 };
 AppFramework2.getDocF2=function(dn,plug)
 {
  return AppFramework2.docFuncToF2(AppFramework2.getDocFunc(dn,plug));
 };
 AppFramework2.getDocF1=function(dn,plug)
 {
  return AppFramework2.docFuncToF1(AppFramework2.getDocFunc(dn,plug));
 };
 AppFramework2.getDocF0=function(dn,plug)
 {
  return AppFramework2.docFuncToF0(AppFramework2.getDocFunc(dn,plug));
 };
 AppFramework2.docFuncToF6=function(a)
 {
  return a.$==7?a.$0:((Runtime.Curried(function($1,$2,$3,$4,$5,$6,$7,$8)
  {
   return $1("expected docFunction with 6 parameters "+testing_GeneratedPrintf.p$5($2));
  },8))(Operators$1.FailWith))(a);
 };
 AppFramework2.docFuncToF5=function(a)
 {
  return a.$==6?a.$0:((Runtime.Curried(function($1,$2,$3,$4,$5,$6,$7)
  {
   return $1("expected docFunction with 5 parameters "+testing_GeneratedPrintf.p$5($2));
  },7))(Operators$1.FailWith))(a);
 };
 AppFramework2.docFuncToF4=function(a)
 {
  return a.$==5?a.$0:((Runtime.Curried(function($1,$2,$3,$4,$5,$6)
  {
   return $1("expected docFunction with 4 parameters "+testing_GeneratedPrintf.p$5($2));
  },6))(Operators$1.FailWith))(a);
 };
 AppFramework2.docFuncToF3=function(a)
 {
  return a.$==4?a.$0:((Runtime.Curried(function($1,$2,$3,$4,$5)
  {
   return $1("expected docFunction with 3 parameters "+testing_GeneratedPrintf.p$5($2));
  },5))(Operators$1.FailWith))(a);
 };
 AppFramework2.docFuncToF2=function(a)
 {
  return a.$==3?a.$0:((Runtime.Curried(function($1,$2,$3,$4)
  {
   return $1("expected docFunction with 2 parameters "+testing_GeneratedPrintf.p$5($2));
  },4))(Operators$1.FailWith))(a);
 };
 AppFramework2.docFuncToF1=function(a)
 {
  return a.$==2?a.$0:((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("expected docFunction with 1 parameters "+testing_GeneratedPrintf.p$5($2));
  }))(Operators$1.FailWith))(a);
 };
 AppFramework2.docFuncToF0=function(a)
 {
  var d;
  return a.$==0?(d=a.$0,function()
  {
   return d;
  }):a.$==1?a.$0:((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("expected docFunction with 0 parameters "+testing_GeneratedPrintf.p$5($2));
  }))(Operators$1.FailWith))(a);
 };
 AppFramework2.getDocFunc=function(dn,plug)
 {
  var m;
  m=plug.plgDocs.TryFindByKey(new PlgDocName({
   $:0,
   $0:dn
  }));
  return m!=null&&m.$==1?m.$0.docDoc.f():(function($1)
  {
   return function($2)
   {
    return $1("docFunction not found "+Utils.toSafe($2));
   };
  }(Operators$1.FailWith))(dn);
 };
 AppFramework2.ptOpt=function(pt,nm)
 {
  var m,$1;
  function pvF(pv,a)
  {
   return a.$==14?null:{
    $:1,
    $0:pv(a)
   };
  }
  m=pt(nm);
  return m[0].$1.$==0?[new ParmDef({
   $:0,
   $0:m[0].$0,
   $1:new ParmType({
    $:4,
    $0:m[0].$1.$0
   })
  }),($1=m[1],function($2)
  {
   return pvF($1,$2);
  })]:(function($2)
  {
   return function($3)
   {
    return $2("Not implemented or Wrong parameter: "+Utils.prettyPrint($3));
   };
  }(Operators$1.FailWith))(nm);
 };
 AppFramework2.ptObject=function(nm)
 {
  return[new ParmDef({
   $:0,
   $0:nm,
   $1:new ParmType({
    $:0,
    $0:ParmTypeBasic.ParmObject
   })
  }),AppFramework2.pvObject];
 };
 AppFramework2.ptMapActions=function(nm)
 {
  return[new ParmDef({
   $:0,
   $0:nm,
   $1:new ParmType({
    $:2,
    $0:List.ofArray([ParmTypeBasic.ParmAction])
   })
  }),AppFramework2.pvMapActions];
 };
 AppFramework2.ptMapVars=function(nm)
 {
  return[new ParmDef({
   $:0,
   $0:nm,
   $1:new ParmType({
    $:2,
    $0:List.ofArray([ParmTypeBasic.ParmVar])
   })
  }),AppFramework2.pvMapVars];
 };
 AppFramework2.ptMapDocs=function(nm)
 {
  return[new ParmDef({
   $:0,
   $0:nm,
   $1:new ParmType({
    $:2,
    $0:List.ofArray([ParmTypeBasic.ParmDoc])
   })
  }),AppFramework2.pvMapDocs];
 };
 AppFramework2.ptMapViews=function(nm)
 {
  return[new ParmDef({
   $:0,
   $0:nm,
   $1:new ParmType({
    $:2,
    $0:List.ofArray([ParmTypeBasic.ParmText])
   })
  }),AppFramework2.pvMapViews];
 };
 AppFramework2.ptVar=function(nm)
 {
  return[new ParmDef({
   $:0,
   $0:nm,
   $1:new ParmType({
    $:0,
    $0:ParmTypeBasic.ParmVar
   })
  }),AppFramework2.pvVar];
 };
 AppFramework2.ptText=function(nm)
 {
  return[new ParmDef({
   $:0,
   $0:nm,
   $1:new ParmType({
    $:0,
    $0:ParmTypeBasic.ParmText
   })
  }),AppFramework2.pvView];
 };
 AppFramework2.ptDoc=function(nm)
 {
  return[new ParmDef({
   $:0,
   $0:nm,
   $1:new ParmType({
    $:0,
    $0:ParmTypeBasic.ParmDoc
   })
  }),AppFramework2.pvDoc];
 };
 AppFramework2.ptDocs=function(nm)
 {
  return[new ParmDef({
   $:0,
   $0:nm,
   $1:new ParmType({
    $:3,
    $0:List.ofArray([ParmTypeBasic.ParmDoc])
   })
  }),AppFramework2.pvDocs];
 };
 AppFramework2.ptAttribs=function(nm)
 {
  return[new ParmDef({
   $:0,
   $0:nm,
   $1:new ParmType({
    $:2,
    $0:List.ofArray([ParmTypeBasic.ParmText,ParmTypeBasic.ParmAction])
   })
  }),AppFramework2.pvAttrs];
 };
 AppFramework2.ptIdent=function(idT,nm)
 {
  return[new ParmDef({
   $:0,
   $0:nm,
   $1:new ParmType({
    $:0,
    $0:new ParmTypeBasic({
     $:4,
     $0:idT
    })
   })
  }),AppFramework2.pvIdent];
 };
 AppFramework2.funAct6=function(f,d1,t1,d2,t2,d3,t3,d4,t4,d5,t5,d6,t6)
 {
  return{
   $:6,
   $0:Runtime.Curried(function(p1,p2,p3,p4,p5,p6)
   {
    return f(t1(p1),t2(p2),t3(p3),t4(p4),t5(p5),t6(p6));
   },6),
   $1:d1,
   $2:d2,
   $3:d3,
   $4:d4,
   $5:d5,
   $6:d6
  };
 };
 AppFramework2.funAct5=function(f,d1,t1,d2,t2,d3,t3,d4,t4,d5,t5)
 {
  return{
   $:5,
   $0:Runtime.Curried(function(p1,p2,p3,p4,p5)
   {
    return f(t1(p1),t2(p2),t3(p3),t4(p4),t5(p5));
   },5),
   $1:d1,
   $2:d2,
   $3:d3,
   $4:d4,
   $5:d5
  };
 };
 AppFramework2.funAct4=function(f,d1,t1,d2,t2,d3,t3,d4,t4)
 {
  return{
   $:4,
   $0:Runtime.Curried(function(p1,p2,p3,p4)
   {
    return f(t1(p1),t2(p2),t3(p3),t3(p4));
   },4),
   $1:d1,
   $2:d2,
   $3:d3,
   $4:d4
  };
 };
 AppFramework2.funAct3=function(f,d1,t1,d2,t2,d3,t3)
 {
  return{
   $:3,
   $0:Runtime.Curried3(function(p1,p2,p3)
   {
    return f(t1(p1),t2(p2),t3(p3));
   }),
   $1:d1,
   $2:d2,
   $3:d3
  };
 };
 AppFramework2.funAct2=function(f,d1,t1,d2,t2)
 {
  return{
   $:2,
   $0:function(p1)
   {
    return function(p2)
    {
     return f(t1(p1),t2(p2));
    };
   },
   $1:d1,
   $2:d2
  };
 };
 AppFramework2.funAct1=function(f,d1,t1)
 {
  return{
   $:1,
   $0:function(p1)
   {
    f(t1(p1));
   },
   $1:d1
  };
 };
 AppFramework2.funDoc6=function(f,d1,t1,d2,t2,d3,t3,d4,t4,d5,t5,d6,t6)
 {
  return{
   $:7,
   $0:Runtime.Curried(function(p1,p2,p3,p4,p5,p6)
   {
    return f(t1(p1),t2(p2),t3(p3),t4(p4),t5(p5),t6(p6));
   },6),
   $1:d1,
   $2:d2,
   $3:d3,
   $4:d4,
   $5:d5,
   $6:d6
  };
 };
 AppFramework2.funDoc5=function(f,d1,t1,d2,t2,d3,t3,d4,t4,d5,t5)
 {
  return{
   $:6,
   $0:Runtime.Curried(function(p1,p2,p3,p4,p5)
   {
    return f(t1(p1),t2(p2),t3(p3),t4(p4),t5(p5));
   },5),
   $1:d1,
   $2:d2,
   $3:d3,
   $4:d4,
   $5:d5
  };
 };
 AppFramework2.funDoc4=function(f,d1,t1,d2,t2,d3,t3,d4,t4)
 {
  return{
   $:5,
   $0:Runtime.Curried(function(p1,p2,p3,p4)
   {
    return f(t1(p1),t2(p2),t3(p3),t3(p4));
   },4),
   $1:d1,
   $2:d2,
   $3:d3,
   $4:d4
  };
 };
 AppFramework2.funDoc3=function(f,d1,t1,d2,t2,d3,t3)
 {
  return{
   $:4,
   $0:Runtime.Curried3(function(p1,p2,p3)
   {
    return f(t1(p1),t2(p2),t3(p3));
   }),
   $1:d1,
   $2:d2,
   $3:d3
  };
 };
 AppFramework2.funDoc2=function(f,d1,t1,d2,t2)
 {
  return{
   $:3,
   $0:function(p1)
   {
    return function(p2)
    {
     return f(t1(p1),t2(p2));
    };
   },
   $1:d1,
   $2:d2
  };
 };
 AppFramework2.funDoc1=function(f,d1,t1)
 {
  return{
   $:2,
   $0:function(p1)
   {
    return f(t1(p1));
   },
   $1:d1
  };
 };
 AppFramework2.pvDocs=function(a)
 {
  return a.$==15?Seq.map(AppFramework2.pvDoc,a.$0):[AppFramework2.pvDoc(a)];
 };
 AppFramework2.pvAttrs=function(a)
 {
  return a.$==6?AppFramework2.getAttrs(a.$0):a.$==14?List.T.Empty:(function($1)
  {
   return function($2)
   {
    return $1("Wrong parameter expecting Ident: "+testing_GeneratedPrintf.p$6($2));
   };
  }(Operators$1.FailWith))(a);
 };
 AppFramework2.getAttrs=function(attrs)
 {
  return List.ofSeq(Seq.delay(function()
  {
   return Seq.append(Seq.choose(function(a)
   {
    var $1,value,value$1,name;
    function s(el,v)
    {
     try
     {
      return el.setAttribute(Strings.Trim(name),Strings.Trim(v));
     }
     catch(e)
     {
      return(function($2)
      {
       return function($3)
       {
        return $2(Utils.prettyPrint($3));
       };
      }(function(s$1)
      {
       console.log(s$1);
      }))(e);
     }
    }
    return!Unchecked.Equals(a,null)&&a.length===2&&(value=Arrays.get(a,1),Strings.Trim(Arrays.get(a,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a,1),(name=Arrays.get(a,0),{
     $:1,
     $0:AttrModule.DynamicCustom(function($2)
     {
      return function($3)
      {
       return s($2,$3);
      };
     },View.Const(Strings.Trim(value$1)))
    })):null;
   },Seq.map(function(s)
   {
    return String.splitByChar("=",s);
   },String.splitByChar(";",attrs))),Seq.delay(function()
   {
    return Seq.choose(function(a)
    {
     var $1,value,value$1,name,x;
     return!Unchecked.Equals(a,null)&&a.length===2&&(value=Arrays.get(a,1),Strings.Trim(Arrays.get(a,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a,1),(name=Arrays.get(a,0),{
      $:1,
      $0:(x=View.Const(Strings.Trim(value$1)),AttrModule.DynamicStyle(Strings.Trim(name),x))
     })):null;
    },Seq.map(function(s)
    {
     return String.splitByChar(":",s);
    },String.splitByChar(";",attrs)));
   }));
  }));
 };
 AppFramework2.pvMapActions=function(a)
 {
  return a.$==16?Seq.map(function(kvp)
  {
   return[kvp.K,AppFramework2.pvAct(kvp.V)];
  },a.$0):(function($1)
  {
   return function($2)
   {
    return $1("Wrong parameter expecting Map: "+testing_GeneratedPrintf.p$6($2));
   };
  }(Operators$1.FailWith))(a);
 };
 AppFramework2.pvMapVars=function(a)
 {
  return a.$==16?Seq.map(function(kvp)
  {
   return[kvp.K,AppFramework2.pvVar(kvp.V)];
  },a.$0):(function($1)
  {
   return function($2)
   {
    return $1("Wrong parameter expecting Map: "+testing_GeneratedPrintf.p$6($2));
   };
  }(Operators$1.FailWith))(a);
 };
 AppFramework2.pvMapDocs=function(a)
 {
  return a.$==16?Seq.map(function(kvp)
  {
   return[kvp.K,AppFramework2.pvDoc(kvp.V)];
  },a.$0):(function($1)
  {
   return function($2)
   {
    return $1("Wrong parameter expecting Map: "+testing_GeneratedPrintf.p$6($2));
   };
  }(Operators$1.FailWith))(a);
 };
 AppFramework2.pvMapViews=function(a)
 {
  return a.$==16?Seq.map(function(kvp)
  {
   return[kvp.K,AppFramework2.pvView(kvp.V)];
  },a.$0):(function($1)
  {
   return function($2)
   {
    return $1("Wrong parameter expecting Map: "+testing_GeneratedPrintf.p$6($2));
   };
  }(Operators$1.FailWith))(a);
 };
 AppFramework2.pvObject=function(a)
 {
  return a.$==13?a.$0:(function($1)
  {
   return function($2)
   {
    return $1("Wrong parameter expecting Object: "+testing_GeneratedPrintf.p$6($2));
   };
  }(Operators$1.FailWith))(a);
 };
 AppFramework2.pvAct=function(a)
 {
  var f0,f1,f2;
  return a.$==8?(f0=a.$0,function()
  {
   return function()
   {
    return f0();
   };
  }):a.$==9?(f1=a.$0,function()
  {
   return f1;
  }):a.$==10?(f2=a.$0,function(el)
  {
   return function(ev)
   {
    return(f2(el))(ev);
   };
  }):((Runtime.Curried(function($1,$2,$3,$4)
  {
   return $1("Wrong parameter expecting Action: "+testing_GeneratedPrintf.p$6($2));
  },4))(Operators$1.FailWith))(a);
 };
 AppFramework2.pvVar=function(a)
 {
  var $1,t,t$1;
  switch(a.$==6?0:a.$==0?($1=(t=a.$0,AppFramework2.RefVar(t[0],t[1])),1):a.$==4?($1=a.$0,1):a.$==1?($1=(t$1=a.$0,AppFramework2.RefViw(t$1[0],t$1[1])),2):a.$==5?($1=a.$0,2):3)
  {
   case 0:
    return new FromView.New(View.Const(a.$0),Global.ignore);
   case 1:
    return $1;
   case 2:
    return new FromView.New($1,Global.ignore);
   case 3:
    return(function($2)
    {
     return function($3)
     {
      return $2("Wrong parameter expecting Var: "+testing_GeneratedPrintf.p$6($3));
     };
    }(Operators$1.FailWith))(a);
  }
 };
 AppFramework2.pvView=function(a)
 {
  var $1,t,t$1;
  switch(a.$==6?0:a.$==0?($1=(t=a.$0,AppFramework2.RefVar(t[0],t[1])),1):a.$==4?($1=a.$0,1):a.$==1?($1=(t$1=a.$0,AppFramework2.RefViw(t$1[0],t$1[1])),2):a.$==5?($1=a.$0,2):3)
  {
   case 0:
    return View.Const(a.$0);
   case 1:
    return $1.get_View();
   case 2:
    return $1;
   case 3:
    return(function($2)
    {
     return function($3)
     {
      return $2("Wrong parameter expecting View: "+testing_GeneratedPrintf.p$6($3));
     };
    }(Operators$1.FailWith))(a);
  }
 };
 AppFramework2.pvDoc=function(a)
 {
  var $1,t,t$1,t$2;
  switch(a.$==6?0:a.$==0?($1=(t=a.$0,AppFramework2.RefVar(t[0],t[1])),1):a.$==4?($1=a.$0,1):a.$==1?($1=(t$1=a.$0,AppFramework2.RefViw(t$1[0],t$1[1])),2):a.$==5?($1=a.$0,2):a.$==2?($1=(t$2=a.$0,AppFramework2.RefDoc(t$2[0],t$2[1])),3):a.$==7?($1=a.$0,3):a.$==15?4:5)
  {
   case 0:
    return Doc.TextNode(a.$0);
   case 1:
    return Doc.TextView($1.get_View());
   case 2:
    return Doc.TextView($1);
   case 3:
    return $1;
   case 4:
    return Doc.Concat(Seq.map(AppFramework2.pvDoc,a.$0));
   case 5:
    return(function($2)
    {
     return function($3)
     {
      return $2("Wrong parameter expecting Doc: "+testing_GeneratedPrintf.p$6($3));
     };
    }(Operators$1.FailWith))(a);
  }
 };
 AppFramework2.pvIdent=function(a)
 {
  return a.$==6?a.$0:(function($1)
  {
   return function($2)
   {
    return $1("Wrong parameter expecting Ident: "+testing_GeneratedPrintf.p$6($2));
   };
  }(Operators$1.FailWith))(a);
 };
 AppFramework2.mainDocV=function()
 {
  SC$1.$cctor();
  return SC$1.mainDocV;
 };
 AppFramework2.RefDoc=function(r,r$1)
 {
  var b;
  return Doc.EmbedView((b=View.get_Do(),View.Bind(function(a)
  {
   return a!=null&&a.$==1?View.Bind(function(a$1)
   {
    return a$1!=null&&a$1.$==1?View.Const(AppFramework2.invokeFunDoc(a$1.$0)):View.Const((AppFramework2.errorDocf(function($1)
    {
     return function($2)
     {
      return $1("<Doc not found : "+("("+testing_GeneratedPrintf.p$7($2[0])+", "+testing_GeneratedPrintf.p$10($2[1])+")")+">");
     };
    }))([r,r$1]));
   },a.$0.plgDocs.TryFindByKeyAsView(r$1)):View.Const((AppFramework2.errorDocf(function($1)
   {
    return function($2)
    {
     return $1("<PlugIn not found : "+("("+testing_GeneratedPrintf.p$7($2[0])+", "+testing_GeneratedPrintf.p$10($2[1])+")")+">");
    };
   }))([r,r$1]));
  },AppFramework2.plugIns().TryFindByKeyAsView(r))));
 };
 AppFramework2.invokeFunDoc=function(plgD)
 {
  var m;
  try
  {
   m=plgD.docDoc.f();
   return m.$==1?m.$0():m.$==2?m.$0(ParmVl.PvNone):m.$==3?(m.$0(ParmVl.PvNone))(ParmVl.PvNone):m.$==4?((m.$0(ParmVl.PvNone))(ParmVl.PvNone))(ParmVl.PvNone):m.$==5?(((m.$0(ParmVl.PvNone))(ParmVl.PvNone))(ParmVl.PvNone))(ParmVl.PvNone):m.$==6?((((m.$0(ParmVl.PvNone))(ParmVl.PvNone))(ParmVl.PvNone))(ParmVl.PvNone))(ParmVl.PvNone):m.$==7?(((((m.$0(ParmVl.PvNone))(ParmVl.PvNone))(ParmVl.PvNone))(ParmVl.PvNone))(ParmVl.PvNone))(ParmVl.PvNone):m.$0;
  }
  catch(e)
  {
   return((AppFramework2.errorDocf(Runtime.Curried3(function($1,$2,$3)
   {
    return $1("<Error creating Doc "+Utils.toSafe($2)+": "+Utils.toSafe($3)+">");
   })))(plgD.docName.get_Id()))(e.message);
  }
 };
 AppFramework2.errorDocf=function(fmt)
 {
  return fmt(AppFramework2.errorDoc);
 };
 AppFramework2.errorDoc=function(msg)
 {
  return Doc.Element("div",[AttrProxy.Create("color","red")],[Doc.TextNode(msg)]);
 };
 AppFramework2.RefViw=function(r,r$1)
 {
  var b;
  b=View.get_Do();
  return View.Bind(function(a)
  {
   return a!=null&&a.$==1?View.Bind(function(a$1)
   {
    return a$1!=null&&a$1.$==1?View.Bind(function(a$2)
    {
     return View.Const(a$2);
    },a$1.$0.viwView):View.Const((function($1)
    {
     return function($2)
     {
      return $1("<View not found : "+("("+testing_GeneratedPrintf.p$7($2[0])+", "+testing_GeneratedPrintf.p$9($2[1])+")")+">");
     };
    }(Global.id))([r,r$1]));
   },a.$0.plgViews.TryFindByKeyAsView(r$1)):View.Const((function($1)
   {
    return function($2)
    {
     return $1("<PlugIn not found : "+("("+testing_GeneratedPrintf.p$7($2[0])+", "+testing_GeneratedPrintf.p$9($2[1])+")")+">");
    };
   }(Global.id))([r,r$1]));
  },AppFramework2.plugIns().TryFindByKeyAsView(r));
 };
 AppFramework2.RefVar=function(r,r$1)
 {
  var varRW,b;
  varRW=(b=View.get_Do(),View.Bind(function(a)
  {
   return a!=null&&a.$==1?View.Bind(function(a$1)
   {
    return a$1!=null&&a$1.$==1?View.Const({
     $:0,
     $0:a$1.$0.varVar
    }):View.Const((Result.errorf(function($1)
    {
     return function($2)
     {
      return $1("<Var not found : "+("("+testing_GeneratedPrintf.p$7($2[0])+", "+testing_GeneratedPrintf.p$8($2[1])+")")+">");
     };
    }))([r,r$1]));
   },a.$0.plgVars.TryFindByKeyAsView(r$1)):View.Const((Result.errorf(function($1)
   {
    return function($2)
    {
     return $1("<PlugIn not found : "+("("+testing_GeneratedPrintf.p$7($2[0])+", "+testing_GeneratedPrintf.p$8($2[1])+")")+">");
    };
   }))([r,r$1]));
  },AppFramework2.plugIns().TryFindByKeyAsView(r)));
  return new FromView.New(View.Bind(function(a)
  {
   return a.$==0?a.$0.get_View():View.Const(a.$0);
  },varRW),function(nv)
  {
   function f(v)
   {
   }
   function f$1(x)
   {
    x.Set(nv);
   }
   View.Get(function(r$2)
   {
    Result.iter(f,f$1,r$2);
   },varRW);
  });
 };
 AppFramework2.plugIns=function()
 {
  SC$1.$cctor();
  return SC$1.plugIns;
 };
 AppFramework2.defaultPlugIn=function()
 {
  return PlugIn.New(new PlgInName({
   $:0,
   $0:""
  }),new ListModel.New$1(function(_var)
  {
   return _var.varName;
  }),new ListModel.New$1(function(viw)
  {
   return viw.viwName;
  }),new ListModel.New$1(function(doc)
  {
   return doc.docName;
  }),new ListModel.New$1(function(act)
  {
   return act.actName;
  }));
 };
 SnippetTemplates.html=function()
 {
  SC$1.$cctor();
  return SC$1.html$1;
 };
 PlugInFuncs.splitV=function()
 {
  return((((((PlugInFuncs.splitterDF())({
   $:6,
   $0:"VSplitter1"
  }))({
   $:6,
   $0:"height:100%"
  }))({
   $:6,
   $0:"Hello"
  }))({
   $:7,
   $0:PlugInFuncs.splitH()
  }))({
   $:4,
   $0:AppFramework2UI.gapV()
  }))({
   $:4,
   $0:AppFramework2UI.percV()
  });
 };
 PlugInFuncs.splitH=function()
 {
  return((((((PlugInFuncs.splitterDF())({
   $:6,
   $0:"HSplitter1"
  }))({
   $:6,
   $0:"height:100%"
  }))({
   $:7,
   $0:PlugInFuncs.doc1()
  }))({
   $:7,
   $0:PlugInFuncs.doc2()
  }))({
   $:4,
   $0:AppFramework2UI.gapV()
  }))({
   $:4,
   $0:AppFramework2UI.percV()
  });
 };
 PlugInFuncs.doc2=function()
 {
  return(((PlugInFuncs.elementDF())({
   $:6,
   $0:"div"
  }))({
   $:6,
   $0:"height:100%; color:blue; background: pink"
  }))({
   $:15,
   $0:List.ofArray([{
    $:6,
    $0:"Gap: "
   },{
    $:7,
    $0:PlugInFuncs.inpGap()
   }])
  });
 };
 PlugInFuncs.doc1=function()
 {
  return(((PlugInFuncs.elementDF())({
   $:6,
   $0:"div"
  }))({
   $:6,
   $0:"height:100%; color:red ; background: lightblue"
  }))({
   $:15,
   $0:List.ofArray([{
    $:6,
    $0:"Perc: %"
   },{
    $:7,
    $0:PlugInFuncs.inpPer()
   }])
  });
 };
 PlugInFuncs.inpGap=function()
 {
  return((PlugInFuncs.inputDF())(ParmVl.PvNone))({
   $:4,
   $0:AppFramework2UI.gapV()
  });
 };
 PlugInFuncs.inpPer=function()
 {
  return((PlugInFuncs.inputDF())(ParmVl.PvNone))({
   $:4,
   $0:AppFramework2UI.percV()
  });
 };
 PlugInFuncs.splitterDF=function()
 {
  SC$1.$cctor();
  return SC$1.splitterDF;
 };
 PlugInFuncs.elementDF=function()
 {
  SC$1.$cctor();
  return SC$1.elementDF;
 };
 PlugInFuncs.inputDF=function()
 {
  SC$1.$cctor();
  return SC$1.inputDF;
 };
 Direct.splitV=function()
 {
  return AF.splitter("VSplitter1",(AppFramework2UI.txtToAttrs())("height:100%"),Doc.TextNode("Hello"),Direct.splitH(),{
   $:1,
   $0:AppFramework2UI.gapV().get_View()
  },{
   $:1,
   $0:AppFramework2UI.percV()
  });
 };
 Direct.splitH=function()
 {
  return AF.splitter("HSplitter1",(AppFramework2UI.txtToAttrs())("height:100%"),Direct.doc1(),Direct.doc2(),{
   $:1,
   $0:AppFramework2UI.gapV().get_View()
  },{
   $:1,
   $0:AppFramework2UI.percV()
  });
 };
 Direct.doc2=function()
 {
  return Doc.Element("div",(AppFramework2UI.txtToAttrs())("height:100%; color:blue; background: pink"),[Doc.TextNode("Gap: "),Direct.inpGap()]);
 };
 Direct.doc1=function()
 {
  return Doc.Element("div",(AppFramework2UI.txtToAttrs())("height:100%; color:red ; background: lightblue"),[Doc.TextNode("Perc: %"),Direct.inpPer()]);
 };
 Direct.inpGap=function()
 {
  return Doc.Input([],AppFramework2UI.gapV());
 };
 Direct.inpPer=function()
 {
  return Doc.Input([],AppFramework2UI.percV());
 };
 AppFramework2UI.main=function()
 {
  var a,b,a$1,b$1;
  a=(b=AppFramework2.plugin(),b.AddDoc0(b.AddDoc0(b.AddDoc0(b.AddDoc0(b.AddDoc0(b.AddDoc0(b.AddVar(b.AddVar(b.Name(b.Yield(),"PlugInFuncs"),"perc",AppFramework2UI.percV()),"gap",AppFramework2UI.gapV()),"inpPer",PlugInFuncs.inpPer),"inpGap",PlugInFuncs.inpGap),"doc1",PlugInFuncs.doc1),"doc2",PlugInFuncs.doc2),"splitH",PlugInFuncs.splitH),"splitV",PlugInFuncs.splitV));
  AppFramework2.plugIns().Append(a);
  a$1=(b$1=AppFramework2.plugin(),b$1.AddDoc0(b$1.AddDoc0(b$1.AddDoc0(b$1.AddDoc0(b$1.AddDoc0(b$1.AddDoc0(b$1.AddVar(b$1.AddVar(b$1.Name(b$1.Yield(),"Direct"),"perc",AppFramework2UI.percV()),"gap",AppFramework2UI.gapV()),"inpPer",Direct.inpPer),"inpGap",Direct.inpGap),"doc1",Direct.doc1),"doc2",Direct.doc2),"splitH",Direct.splitH),"splitV",Direct.splitV));
  AppFramework2.plugIns().Append(a$1);
  AppFramework2.mainDocV().Set("Direct.splitV");
  AF.startWithHtml(AppFrameworkTemplate.html()+SnippetTemplates.html());
 };
 AppFramework2UI.gapV=function()
 {
  SC$1.$cctor();
  return SC$1.gapV;
 };
 AppFramework2UI.percV=function()
 {
  SC$1.$cctor();
  return SC$1.percV;
 };
 AppFramework2UI.txtToAttrs=function()
 {
  SC$1.$cctor();
  return SC$1.txtToAttrs;
 };
 SC$1.$cctor=function()
 {
  var f,g,b,a;
  SC$1.$cctor=Global.ignore;
  function g$1(s)
  {
   return Strings.concat("\n",s);
  }
  function f$1(s)
  {
   return String.splitByChar("\n",s);
  }
  function g$2(s)
  {
   var a$1,b$1;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$1=0,(b$1=Arrays.length(s)-2,Unchecked.Compare(a$1,b$1)===1?a$1:b$1))
   });
  }
  function g$3(s)
  {
   return Strings.concat("\n",s);
  }
  function f$2(s)
  {
   return s+"T00:00:00";
  }
  function f$3(a$1)
  {
   return{
    $:6,
    $0:a$1
   };
  }
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.unindentStr=function(x)
  {
   return g$1(String.unindent(x));
  };
  SC$1.skipLastLine=(f=function(x)
  {
   return g$2(f$1(x));
  },function(x)
  {
   return g$3(f(x));
  });
  SC$1.parseDateO2=(g=ParseO.tryParseWith(function(a$1)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a$1),m!=null&&m.$==1&&(o=m.$0,true)),o];
  }),function(x)
  {
   return g(f$2(x));
  });
  SC$1.parseDateO=ParseO.tryParseWith(function(a$1)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a$1),m!=null&&m.$==1&&(o=m.$0,true)),o];
  });
  SC$1.parseIntO=ParseO.tryParseWith(function(a$1)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt32(a$1,{
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
  SC$1.parseInt64O=ParseO.tryParseWith(function(a$1)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt64(a$1,{
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
  SC$1.parseSingleO=ParseO.tryParseWith(function(a$1)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a$1),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith(function(a$1)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a$1),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseGuidO=ParseO.tryParseWith(function(a$1)
  {
   var o;
   o=null;
   return[Guid.TryParse(a$1,{
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
  SC$1["|Int64|_|"]=ParseO.parseInt64O();
  SC$1["|Single|_|"]=ParseO.parseSingleO();
  SC$1["|Double|_|"]=ParseO.parseDoubleO();
  SC$1["|Guid|_|"]=ParseO.parseGuidO();
  SC$1.observers=List.T.Empty;
  SC$1.layoutHorizontal=Runtime.Curried(function($1,$2,$3,$4,$5)
  {
   return Doc.get_Empty();
  },5);
  SC$1.layoutVertical=Runtime.Curried(function($1,$2,$3,$4,$5)
  {
   return Doc.get_Empty();
  },5);
  SC$1.html="\r\n            <div style=\"display:none\" >\r\n                <div links>\r\n                    <link  href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" type=\"text/css\" rel=\"stylesheet\">\r\n                    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"   type=\"text/javascript\"></script>\r\n                </div>\r\n                <div ws-template=\"AppFramework\" style=\"height: calc(100vh - 4px); width: calc(100vw - 4px) \" class=\"relative\" >\r\n                    <div ws-hole=\"MainClient\"></div>\r\n                    <div class=\"AppFrameworkGo\"><button ws-onclick=\"GoClient\">${MainDoc}</button></div>\r\n                </div>\r\n                <div ws-template=\"VSplitter1\" class=\"versplitter\" ws-attr=\"Attrs\" vertical>\r\n                    <div style=\"min-width :Calc((100% - ${gap}) *        ${perc}  / 100);max-width :Calc((100% - ${gap}) *        ${perc}  / 100)\">${doc1}</div>\r\n                    <div style=\"min-width :             ${gap}\" ws-onmousedown=\"MouseDown\" ></div>\r\n                    <div style=\"min-width :Calc((100% - ${gap}) * (100 - ${perc}) / 100);max-width :Calc((100% - ${gap}) * (100 - ${perc}) / 100)\">${doc2}</div>\r\n                </div>\r\n                <div ws-template=\"HSplitter1\" class=\"horsplitter\" ws-attr=\"Attrs\">\r\n                    <div style=\"min-height:Calc((100% - ${gap}) *        ${perc}  / 100);max-height:Calc((100% - ${gap}) *        ${perc}  / 100)\">${doc1}</div>\r\n                    <div style=\"min-height:             ${gap}\" ws-onmousedown=\"MouseDown\" ></div>\r\n                    <div style=\"min-height:Calc((100% - ${gap}) * (100 - ${perc}) / 100);max-height:Calc((100% - ${gap}) * (100 - ${perc}) / 100)\">${doc2}</div>\r\n                </div>\r\n                <style>\r\n                    .horsplitter                    { display: flex; flex-direction:column              } \r\n                    .horsplitter > div:nth-child(2) { background: #eef; cursor: row-resize; z-index:400 }\r\n                    .horsplitter > div              { overflow: hidden                                  }\r\n                    .versplitter                    { display: flex; flex-direction:row                 } \r\n                    .versplitter > div:nth-child(2) { background: #eef; cursor: col-resize; z-index:400 }\r\n                    .versplitter > div              { overflow: hidden                                  }\r\n                </style>\r\n                <style>\r\n                    .AppFrameworkGo {\r\n                        max-width: 2px;\r\n                        max-height: 2px;\r\n                        z-index: 4000;\r\n                        overflow: hidden;\r\n                        position: fixed;\r\n                        top: 0px;\r\n                        left: 0px;\r\n                    }\r\n                </style>\r\n                <div ws-template=\"FixedSplitterVer\" \r\n                    style=\"display: grid; \r\n                           grid-gap: 0px; \r\n                           box-sizing: border-box; \r\n                           height: 100%;\r\n                           width : 100%;\r\n                           grid-template-areas: 'one two'; \r\n                           grid-template-rows   :100%; \r\n                           overflow: hidden; \r\n                           grid-template-columns: ${PartSizes}\"  >\r\n                   <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n                   <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"FixedSplitterHor\" \r\n               style=\"display: grid; \r\n                      grid-gap: 0px; \r\n                      box-sizing: border-box; \r\n                      height: 100%;\r\n                      width : 100%;\r\n                      grid-template-areas: 'one' 'two'; \r\n                      grid-template-columns:100%; \r\n                      overflow: hidden; \r\n                      grid-template-rows   : ${PartSizes}\"  >\r\n              <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n              <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"WCompSplitterHor\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid;\r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one' 'two'; \r\n                            grid-template-columns:100%; \r\n                            overflow: hidden; \r\n                            grid-template-rows   : ${PartSizes}\" \r\n                     >\r\n                     <slot></slot>\r\n                    <slot name=\"splitter\">  <div style=\"grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-row:2; grid-column:1 / 1 ; \r\n                            cursor: row-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            height: ${Gap}; \r\n                            margin-top :-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>        \r\n                <div ws-template=\"WCompSplitterVer\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid; \r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one two'; \r\n                            grid-template-rows   :100%; \r\n                            overflow: hidden; \r\n                            grid-template-columns: ${PartSizes}\"  >\r\n                    <slot></slot>\r\n                    <slot name=\"splitter\"> <div style=\"grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-column:2; grid-row:1 / 1\r\n                            cursor: column-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            width: ${Gap}; \r\n                            margin-left:-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>\r\n                <div ws-template=\"AppFwkClient\" >\r\n                    <ws-FixedSplitterHor>\r\n                        <PartSizes>55px calc(100% - 55px)</PartSizes>\r\n                        <First>\r\n                            <span style=\"display: grid;\r\n                                  grid-template-columns: 30% 20% 20% 10%;\r\n                                  grid-gap: 25px;\r\n                                \">\r\n                                <div class=\"mainTitle\">AppFramework</div>\r\n                            </span>\r\n                        </First>\r\n                        <Second>\r\n                                <ws-FixedSplitterVer>\r\n                                    <PartSizes>calc(100% - 2px) 2px</PartSizes>\r\n                                    <First>\r\n                                        <wcomp-splitter vertical value=\"18\" max=\"100\">\r\n                                            <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\" >\r\n                                                <div ws-template=\"Tile\">\r\n                                                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                                                    ws-ondrag=\"Drag\"\r\n                                                    ws-ondragover=\"DragOver\"\r\n                                                    ws-ondrop=\"Drop\"\r\n                                                   >\r\n                                                   <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                                                   <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                                                   <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                                               </div>\r\n                                       \r\n                                                </div>\r\n                                            </div></div>\r\n                                            <wcomp-splitter vertical value=\"80\" min=\"30\" max=\"100\">\r\n                                                <ws-FixedSplitterHor>\r\n                                                    <PartSizes>32px calc(100% - 32px)</PartSizes>\r\n                                                    <First>\r\n                                                        <div>\r\n                                                            <div class=\"input-group\">\r\n                                                                <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </First>\r\n                                                    <Second>\r\n                                                        <div style=\"overflow:auto; display:flex; flex-direction:column\">\r\n                                                            <div>\r\n                                                                <h3>Vars:</h3>\r\n                                                                <table style=\"overflow:auto;width:100%\" class=\"table table-condensed table-striped\">\r\n                                                                    <thead>\r\n                                                                        <th style=\"width: 10%  \">Name</th>\r\n                                                                        <th style=\"width: 90% \">Value</th>\r\n                                                                    </thead>\r\n                                                                    <tbody ws-hole=\"Vars\">\r\n                                                                    <tr ws-template=\"NameValueInput\" >\r\n                                                                        <td >${Name}:</td>\r\n                                                                        <td>\r\n                                                                        <textarea placeholder=\"Value...\" ws-var=\"Value\" style=\"resize:vertical; width:100%\" spellcheck=\"false\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <h3>Views:</h3>\r\n                                                                <table style=\"overflow:auto\" class=\"table table-condensed table-striped\" >\r\n                                                                    <thead>\r\n                                                                        <th style=\"width: 10%  \">Name</th>\r\n                                                                        <th style=\"width: 90% \">Value</th>\r\n                                                                    </thead>\r\n                                                                    <tbody ws-hole=\"Views\" >\r\n                                                                    <tr ws-template=\"NameValue\" class=\"\">\r\n                                                                        <td>${Name}:</td>\r\n                                                                        <td>${Value}</td>\r\n                                                                    </tr>\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <h3>Docs:</h3>\r\n                                                                <div ws-hole=\"Docs\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <h3>Queries:</h3>\r\n                                                                <table style=\"overflow:auto\" >\r\n                                                                    <tbody ws-hole=\"Queries\" >\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </Second>\r\n                                                </ws-FixedSplitterHor>\r\n                                        <div style=\"font-size:small; overflow: hidden; display: flex; flex-direction: column;\"  class=\"absolute\" ws-hole=\"Actions\" >\r\n                                            <button ws-template=\"Action\" style=\"font-size:small\" ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\" ws-attr=\"Attrs\" >${Name}</button>\r\n                                        </div>\r\n                                            </wcomp-splitter>\r\n                                        </wcomp-splitter>\r\n                                    </First>\r\n                                    <Second>\r\n                                                <wcomp-tabstrip >\r\n                                                    <div tabname=\"Properties\">\r\n                                                        <div>\r\n                                                            <table style=\"border-spacing:0px\">\r\n                                                                <thead>\r\n                                                                    <th style=\"width: 30%  \">Name</th>\r\n                                                                    <th style=\"width: 70% \">Value</th>\r\n                                                                </thead>\r\n                                                                <tbody ws-hole=\"Properties\" ws-children-template=\"Property\">\r\n                                                                    <tr ws-onclick=\"Select\" style=\"margin-bottom: 2px\" class=\"level  \">\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <input ws-var=\"Name\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Property...\">\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <textarea ws-var=\"Value\" class=\"form-control\" id=\"\" placeholder=\"Value...\"></textarea>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div style=\" cursor: pointer \" title=\"remove\">\r\n                                                                                <button ws-onclick=\"Remove\" class=\"delete is-small\">x</button>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </wcomp-tabstrip>\r\n                                    </Second>\r\n                                </ws-FixedSplitterVer>\r\n                        </Second>\r\n                    </ws-FixedSplitterHor>\r\n                </div>\r\n                <style style=\"display: none\">\r\n                        .Hidden     { display   : none         }\r\n                        table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                        td input.form-control { \r\n                            padding    : 0px; \r\n                            font-family: monospace;\r\n                            font-size  :   small;\r\n                            margin-top :   0px;\r\n                            margin-left: -2px;\r\n                            width      : 100%\r\n                        }\r\n                        td select {\r\n                            font-size : smaller;\r\n                            max-width : 8ch;\r\n                        }\r\n                        textarea {\r\n                           resize : vertical;\r\n                        }\r\n                        .tab-content {\r\n                            overflow: hidden\r\n                        }\r\n                        .tab-children {\r\n                            position:relative;\r\n                        }\r\n                        .tab-children>div>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        .relative {\r\n                            position:relative;\r\n                        }\r\n                        .relative>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                        table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                        table.table-striped    tbody input              { background: transparent; border: none}\r\n                        table.table-striped    tbody select             { background: transparent; border: none}\r\n                        table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                        table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                        table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                        table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                        table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                        table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                                   border-bottom: solid thin blue     ; } \r\n                        table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                        table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                        thead { color: gray }\r\n                        h3 { \r\n                            color: gray;\r\n                            line-height: 1em;\r\n                        }\r\n                        button       { border: solid thin transparent ; border-radius: 3px; }\r\n                        button:hover { border: solid thin blue }\r\n                        .indenter { position  : absolute; \r\n                                    top:0px; bottom:0px; left:0px; \r\n                                    background: white; color:white;\r\n                                    border-right: gray thin dotted;\r\n                                    }\r\n                        body {\r\n                            color      : #333;\r\n                            font-size  : small;\r\n                            font-family: monospace;\r\n                            line-height: 1.2;\r\n                        }\r\n                        .mainTitle {  \r\n                            font-size: 48px;\r\n                            font-weight: 500;\r\n                            color: gray;\r\n                            margin-top: -12px;\r\n                        }\r\n                        .CodeMirror {\r\n                            height: 100%;\r\n                        }\r\n                        \r\n                      \r\n                        body { margin: 0px }     \r\n                             \r\n                        div textarea {\r\n                            font-family     : monospace;\r\n                        }\r\n                        .code-editor-list-tile {\r\n                            white-space     : nowrap; \r\n                            border-style    : solid none none;\r\n                            border-color    : white;\r\n                            border-width    : 1px;\r\n                            background-color: #D8D8D8;\r\n                            display         : flex;\r\n                        }\r\n                        .code-editor-list-text{\r\n                            padding         : 1px 10px 1px 5px;\r\n                            overflow        : hidden;\r\n                            text-overflow   : ellipsis;\r\n                            white-space     : nowrap;\r\n                            flex            : 1;\r\n                        }\r\n                        \r\n                        .code-editor-list-tile span.node.ErrorMsg {\r\n                            background-color: red\r\n                        }\r\n                        .code-editor-list-tile span.node.expanded::before {\r\n                            content: \"-\"\r\n                        }\r\n                        .code-editor-list-tile span.node.collapsed::before {\r\n                            content: \"+\"\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor {\r\n                            font-weight     : bold;\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.indirect-predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.included-predecessor {\r\n                            color           : chocolate;\r\n                        }\r\n                        .code-editor-list-tile.selected {\r\n                            background-color: #77F;\r\n                            color           : white;\r\n                        }\r\n                        .code-editor-list-tile.codeSnippet {\r\n                            text-decoration: underline\r\n                        }\r\n                        .code-editor-list-tile:hover {\r\n                            background      : lightgray;\r\n                        }\r\n                        .code-editor-list-tile.selected:hover {\r\n                            background      : blue;\r\n                        }\r\n                        .code-editor-list-tile>.predecessor {\r\n                            font-weight     : bold;\r\n                            border-style    : inset;\r\n                            border-width    : 1px;\r\n                            text-align      : center;\r\n                            color           : transparent;\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        \r\n                        .CodeMirror { height: 100%; }\r\n                        \r\n                        .node {\r\n                            background-color: white; \r\n                            width           : 2ch; \r\n                            color           : #A03; \r\n                            font-weight     : bold; \r\n                            text-align      : center;\r\n                            font-family     : arial;\r\n                        }\r\n                        .Warning { text-decoration: underline lightblue } \r\n                        .Error   { text-decoration: underline red       } \r\n                        \r\n                    </style>\r\n            </div>\r\n            ";
  SC$1.plugIns=new ListModel.New$1(function(plg)
  {
   return plg.plgName;
  });
  SC$1.mainDocV=Var$1.Create$1("AppFramework.AppFwkClient");
  SC$1.plugin=new PlugInBuilder.New();
  SC$1.selectionPlugInO=Var$1.Create$1({
   $:1,
   $0:new PlgInName({
    $:0,
    $0:"AppFramework"
   })
  });
  SC$1.currentPlugInW=View.Map(function(o)
  {
   return o==null?AppFramework2.defaultPlugIn():o.$0;
  },View.Bind(function(a$1)
  {
   return a$1==null?View.Const({
    $:1,
    $0:AppFramework2.defaultPlugIn()
   }):AppFramework2.plugIns().TryFindByKeyAsView(a$1.$0);
  },Client.selectionPlugInO().get_View()));
  SC$1.currentPlugInV=new FromView.New(Client.currentPlugInW(),function(a$1)
  {
   AppFramework2.plugIns().Append(a$1);
  });
  SC$1.plug=(b=AppFramework2.plugin(),b.AddAct2(b.AddDoc6(b.AddDoc6(b.AddDoc2(b.AddDoc3(b.AddDoc0(b.AddVar(b.Name(b.Yield(),"AF"),"MainDoc",AppFramework2.mainDocV()),"Client",Client.AppFwkClient),"element",Doc.Element,AppFramework2.ptIdent(IdentType.IdentGeneric,"element"),AppFramework2.ptAttribs("attrs"),AppFramework2.ptDocs("docs")),"input",Doc.Input,AppFramework2.ptAttribs("attrs"),AppFramework2.ptVar("var")),"splitter",AF.splitter,AppFramework2.ptIdent(IdentType.IdentGeneric,"template"),AppFramework2.ptAttribs("attrs"),AppFramework2.ptDoc("doc1"),AppFramework2.ptDoc("doc2"),AppFramework2.ptOpt(AppFramework2.ptText,"gap"),AppFramework2.ptOpt(AppFramework2.ptVar,"percentage")),"template",AF.templateCreate,AppFramework2.ptIdent(IdentType.IdentGeneric,"template"),AppFramework2.ptAttribs("attrs"),AppFramework2.ptMapViews("texts"),AppFramework2.ptMapDocs("docs"),AppFramework2.ptMapVars("vars"),AppFramework2.ptMapActions("actions")),"splitterMouseDown",function($1,$2)
  {
   return AF.splitterMouseDown(true,$1,$2);
  },AppFramework2.ptVar("perc"),AppFramework2.ptObject("event")));
  a=AF.plug();
  AppFramework2.plugIns().Append(a);
  SC$1.html$1="\r\n                <div ws-template=\"Snippet\" >\r\n                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                         ws-ondrag=\"Drag\"\r\n                         ws-ondragover=\"DragOver\"\r\n                         ws-ondrop=\"Drop\"\r\n                        >\r\n                        <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                        <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                        <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                    </div>\r\n                </div>\r\n                <style>\r\n                    .Hidden     { display   : none         }\r\n                    table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                    td input.form-control { \r\n                        padding    : 0px; \r\n                        font-family: monospace;\r\n                        font-size  :   small;\r\n                        margin-top :   0px;\r\n                        margin-left: -2px;\r\n                        width      : 100%\r\n                    }\r\n                    td select {\r\n                        font-size : smaller;\r\n                        max-width : 8ch;\r\n                    }\r\n                    textarea {\r\n                       resize : none;\r\n                    }\r\n                    .tab-content {\r\n                        overflow: hidden\r\n                    }\r\n                    .tab-children {\r\n                        position:relative;\r\n                    }\r\n                    .tab-children>div>* {\r\n                        position:absolute;\r\n                        height: 100%;\r\n                        width:  100%;\r\n                        display: grid;\r\n                    }\r\n                    .relative {\r\n                        position:relative;\r\n                    }\r\n                    .relative>* {\r\n                        position:absolute;\r\n                        height: 100%;\r\n                        width:  100%;\r\n                        display: grid;\r\n                    }\r\n                    table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                    table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                    table.table-striped    tbody input              { background: transparent; border: none}\r\n                    table.table-striped    tbody select             { background: transparent; border: none}\r\n                    table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                    table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                    table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                    table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                    table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                    table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                               border-bottom: solid thin blue     ; } \r\n                    table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                    table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                    thead { color: gray }\r\n                    h3 { \r\n                        color: gray;\r\n                        line-height: 1em;\r\n                    }\r\n                    button       { border: solid thin transparent ; border-radius: 3px; }\r\n                    button:hover { border: solid thin blue }\r\n                    .indenter { position  : absolute; \r\n                                top:0px; bottom:0px; left:0px; \r\n                                background: white; color:white;\r\n                                border-right: gray thin dotted;\r\n                                }\r\n                    body {\r\n                        color      : #333;\r\n                        font-size  : small;\r\n                        font-family: monospace;\r\n                        line-height: 1.2;\r\n                    }\r\n                    .mainTitle {  \r\n                        font-size: 48px;\r\n                        font-weight: 500;\r\n                        color: gray;\r\n                        margin-top: -12px;\r\n                    }\r\n                    .CodeMirror {\r\n                        height: 100%;\r\n                    }\r\n                    \r\n                  \r\n                    body { margin: 0px }     \r\n                         \r\n                    div textarea {\r\n                        font-family     : monospace;\r\n                    }\r\n                    .code-editor-list-tile {\r\n                        white-space     : nowrap; \r\n                        border-style    : solid none none;\r\n                        border-color    : white;\r\n                        border-width    : 1px;\r\n                        background-color: #D8D8D8;\r\n                        display         : flex;\r\n                    }\r\n                    .code-editor-list-text{\r\n                        padding         : 1px 10px 1px 5px;\r\n                        overflow        : hidden;\r\n                        text-overflow   : ellipsis;\r\n                        white-space     : nowrap;\r\n                        flex            : 1;\r\n                    }\r\n                    \r\n                    .code-editor-list-tile span.node.ErrorMsg {\r\n                        background-color: red\r\n                    }\r\n                    .code-editor-list-tile span.node.expanded::before {\r\n                        content: \"-\"\r\n                    }\r\n                    .code-editor-list-tile span.node.collapsed::before {\r\n                        content: \"+\"\r\n                    }\r\n                    .code-editor-list-tile.direct-predecessor {\r\n                        font-weight     : bold;\r\n                        color           : blue;\r\n                    }\r\n                    .code-editor-list-tile.indirect-predecessor {\r\n                        color           : blue;\r\n                    }\r\n                    .code-editor-list-tile.included-predecessor {\r\n                        color           : chocolate;\r\n                    }\r\n                    .code-editor-list-tile.selected {\r\n                        background-color: #77F;\r\n                        color           : white;\r\n                    }\r\n                    .code-editor-list-tile.codeSnippet {\r\n                        text-decoration : underline;\r\n                        font-weight     : bold;\r\n                    }\r\n                    .code-editor-list-tile:hover {\r\n                        background      : lightgray;\r\n                    }\r\n                    .code-editor-list-tile.selected:hover {\r\n                        background      : blue;\r\n                    }\r\n                    .code-editor-list-tile>.predecessor {\r\n                        font-weight     : bold;\r\n                        border-style    : inset;\r\n                        border-width    : 1px;\r\n                        text-align      : center;\r\n                        color           : transparent;\r\n                    }\r\n                    .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                        color           : blue;\r\n                    }\r\n                    \r\n                    .CodeMirror { height: 100%; }\r\n                    \r\n                    .node {\r\n                        background-color: white; \r\n                        width           : 2ch; \r\n                        color           : #A03; \r\n                        font-weight     : bold; \r\n                        text-align      : center;\r\n                        font-family     : arial;\r\n                    }\r\n                    .Warning { text-decoration: underline lightblue } \r\n                    .Error   { text-decoration: underline red       } \r\n                    \r\n                </style>\r\n            ";
  SC$1.txtToAttrs=function(x)
  {
   return AppFramework2.pvAttrs(f$3(x));
  };
  SC$1.percV=Var$1.Create$1("50");
  SC$1.gapV=Var$1.Create$1("5px");
  SC$1.inputDF=AppFramework2.getDocF2("input",AF.plug());
  SC$1.elementDF=AppFramework2.getDocF3("element",AF.plug());
  SC$1.splitterDF=AppFramework2.getDocF6("splitter",AF.plug());
 };
 testing_GeneratedPrintf.p=function($1)
 {
  return $1.$==5?"IdentGeneric":$1.$==4?"IdentPlugIn":$1.$==3?"IdentAction":$1.$==2?"IdentDoc":$1.$==1?"IdentView":"IdentVar";
 };
 testing_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==6?"FunAct6 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+", "+testing_GeneratedPrintf.p$2($1.$4)+", "+testing_GeneratedPrintf.p$2($1.$5)+", "+testing_GeneratedPrintf.p$2($1.$6)+")":$1.$==5?"FunAct5 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+", "+testing_GeneratedPrintf.p$2($1.$4)+", "+testing_GeneratedPrintf.p$2($1.$5)+")":$1.$==4?"FunAct4 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+", "+testing_GeneratedPrintf.p$2($1.$4)+")":$1.$==3?"FunAct3 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+")":$1.$==2?"FunAct2 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+")":$1.$==1?"FunAct1 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+")":"FunAct0 <fun>";
 };
 testing_GeneratedPrintf.p$2=function($1)
 {
  return"ParmDef ("+Utils.prettyPrint($1.$0)+", "+testing_GeneratedPrintf.p$3($1.$1)+")";
 };
 testing_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==4?"ParmOptional "+testing_GeneratedPrintf.p$4($1.$0):$1.$==3?"ParmList "+Utils.printList(function($2)
  {
   return testing_GeneratedPrintf.p$4($2);
  },$1.$0):$1.$==2?"ParmMap "+Utils.printList(function($2)
  {
   return testing_GeneratedPrintf.p$4($2);
  },$1.$0):$1.$==1?"ParmOneOf "+Utils.printList(function($2)
  {
   return testing_GeneratedPrintf.p$4($2);
  },$1.$0):"ParmBasic "+testing_GeneratedPrintf.p$4($1.$0);
 };
 testing_GeneratedPrintf.p$4=function($1)
 {
  return $1.$==5?"ParmObject":$1.$==4?"ParmIdent "+testing_GeneratedPrintf.p($1.$0):$1.$==3?"ParmAction":$1.$==2?"ParmDoc":$1.$==1?"ParmVar":"ParmText";
 };
 testing_GeneratedPrintf.p$5=function($1)
 {
  return $1.$==7?"FunDoc6 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+", "+testing_GeneratedPrintf.p$2($1.$4)+", "+testing_GeneratedPrintf.p$2($1.$5)+", "+testing_GeneratedPrintf.p$2($1.$6)+")":$1.$==6?"FunDoc5 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+", "+testing_GeneratedPrintf.p$2($1.$4)+", "+testing_GeneratedPrintf.p$2($1.$5)+")":$1.$==5?"FunDoc4 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+", "+testing_GeneratedPrintf.p$2($1.$4)+")":$1.$==4?"FunDoc3 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+")":$1.$==3?"FunDoc2 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+")":$1.$==2?"FunDoc1 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+")":$1.$==1?"FunDoc0 <fun>":"JustDoc "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$6=function($1)
 {
  return $1.$==16?"PvMap "+Utils.prettyPrint($1.$0):$1.$==15?"PvList "+Utils.printList(function($2)
  {
   return testing_GeneratedPrintf.p$6($2);
  },$1.$0):$1.$==14?"PvNone":$1.$==13?"PvObject "+Utils.prettyPrint($1.$0):$1.$==12?"PvPlugIn "+GeneratedPrintf.p$1($1.$0):$1.$==11?"PvPlgAct "+GeneratedPrintf.p($1.$0):$1.$==10?"PvAction2 <fun>":$1.$==9?"PvAction1 <fun>":$1.$==8?"PvAction0 <fun>":$1.$==7?"PvDoc "+Utils.prettyPrint($1.$0):$1.$==6?"PvText "+Utils.prettyPrint($1.$0):$1.$==5?"PvView "+testing_GeneratedPrintf.p$12($1.$0):$1.$==4?"PvVar "+Utils.prettyPrint($1.$0):$1.$==3?"PvActRef "+("("+testing_GeneratedPrintf.p$7($1.$0[0])+", "+testing_GeneratedPrintf.p$11($1.$0[1])+")"):$1.$==2?"PvDocRef "+("("+testing_GeneratedPrintf.p$7($1.$0[0])+", "+testing_GeneratedPrintf.p$10($1.$0[1])+")"):$1.$==1?"PvViwRef "+("("+testing_GeneratedPrintf.p$7($1.$0[0])+", "+testing_GeneratedPrintf.p$9($1.$0[1])+")"):"PvVarRef "+("("+testing_GeneratedPrintf.p$7($1.$0[0])+", "+testing_GeneratedPrintf.p$8($1.$0[1])+")");
 };
 GeneratedPrintf.p$1=function($1)
 {
  return"{"+("plgName = "+testing_GeneratedPrintf.p$7($1.plgName))+"; "+("plgVars = "+Utils.prettyPrint($1.plgVars))+"; "+("plgViews = "+Utils.prettyPrint($1.plgViews))+"; "+("plgDocs = "+Utils.prettyPrint($1.plgDocs))+"; "+("plgActions = "+Utils.prettyPrint($1.plgActions))+"}";
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("actName = "+testing_GeneratedPrintf.p$11($1.actName))+"; "+("actFunction = "+testing_GeneratedPrintf.p$1($1.actFunction))+"; "+("actEnabled = "+testing_GeneratedPrintf.p$13($1.actEnabled))+"}";
 };
 testing_GeneratedPrintf.p$13=function($1)
 {
  return"View <fun>";
 };
 testing_GeneratedPrintf.p$12=function($1)
 {
  return"View <fun>";
 };
 testing_GeneratedPrintf.p$11=function($1)
 {
  return"PlgActName "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$10=function($1)
 {
  return"PlgDocName "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$9=function($1)
 {
  return"PlgViwName "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$8=function($1)
 {
  return"PlgVarName "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$7=function($1)
 {
  return"PlgInName "+Utils.prettyPrint($1.$0);
 };
 Runtime.OnLoad(function()
 {
  AppFramework2UI.main();
 });
}());

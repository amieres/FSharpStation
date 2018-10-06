(function()
{
 "use strict";
 var Global,FsRoot,Library,String,ParseO,LibraryJS,REGEX,Hoverable,Hoverable$1,ResizeObserver,WebSharper,Obj,WebComponent,WcTabStrip,WcTabStripT,WcSplitter,WcSplitterT,AppFramework,PlugInVar,PlugInView,PlugInDoc,PlugInAction,PlugInQuery,PlugIn,LayoutEngine,LayoutEngineModule,SC$1,LayoutEngine_Templates,GeneratedPrintf,LayoutEngine_GeneratedPrintf,Strings,Slice,Seq,Unchecked,CancellationTokenSource,Concurrency,Arrays,IntelliFactory,Runtime,UI,DomUtility,Doc,List,View,AttrModule,AttrProxy,Var$1,Node,Operators,Client,Templates,Reflect,console,Utils,Object,FromView,Templating,Runtime$1,Server,ProviderBuilder,Handler,TemplateInstance,System,Guid,Lazy,DateUtil,Numeric,ListModel,Collections,Dictionary,$;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 REGEX=LibraryJS.REGEX=LibraryJS.REGEX||{};
 Hoverable=LibraryJS.Hoverable=LibraryJS.Hoverable||{};
 Hoverable$1=Hoverable.Hoverable=Hoverable.Hoverable||{};
 ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 WebComponent=LibraryJS.WebComponent=LibraryJS.WebComponent||{};
 WcTabStrip=WebComponent.WcTabStrip=WebComponent.WcTabStrip||{};
 WcTabStripT=WcTabStrip.WcTabStripT=WcTabStrip.WcTabStripT||{};
 WcSplitter=WebComponent.WcSplitter=WebComponent.WcSplitter||{};
 WcSplitterT=WcSplitter.WcSplitterT=WcSplitter.WcSplitterT||{};
 AppFramework=LibraryJS.AppFramework=LibraryJS.AppFramework||{};
 PlugInVar=AppFramework.PlugInVar=AppFramework.PlugInVar||{};
 PlugInView=AppFramework.PlugInView=AppFramework.PlugInView||{};
 PlugInDoc=AppFramework.PlugInDoc=AppFramework.PlugInDoc||{};
 PlugInAction=AppFramework.PlugInAction=AppFramework.PlugInAction||{};
 PlugInQuery=AppFramework.PlugInQuery=AppFramework.PlugInQuery||{};
 PlugIn=AppFramework.PlugIn=AppFramework.PlugIn||{};
 LayoutEngine=LibraryJS.LayoutEngine=LibraryJS.LayoutEngine||{};
 LayoutEngineModule=LibraryJS.LayoutEngineModule=LibraryJS.LayoutEngineModule||{};
 SC$1=Global.StartupCode$LayoutEngine$LayoutEngine=Global.StartupCode$LayoutEngine$LayoutEngine||{};
 LayoutEngine_Templates=Global.LayoutEngine_Templates=Global.LayoutEngine_Templates||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 LayoutEngine_GeneratedPrintf=Global.LayoutEngine_GeneratedPrintf=Global.LayoutEngine_GeneratedPrintf||{};
 Strings=WebSharper&&WebSharper.Strings;
 Slice=WebSharper&&WebSharper.Slice;
 Seq=WebSharper&&WebSharper.Seq;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 CancellationTokenSource=WebSharper&&WebSharper.CancellationTokenSource;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Arrays=WebSharper&&WebSharper.Arrays;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 UI=WebSharper&&WebSharper.UI;
 DomUtility=UI&&UI.DomUtility;
 Doc=UI&&UI.Doc;
 List=WebSharper&&WebSharper.List;
 View=UI&&UI.View;
 AttrModule=UI&&UI.AttrModule;
 AttrProxy=UI&&UI.AttrProxy;
 Var$1=UI&&UI.Var$1;
 Node=Global.Node;
 Operators=WebSharper&&WebSharper.Operators;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Reflect=Global.Reflect;
 console=Global.console;
 Utils=WebSharper&&WebSharper.Utils;
 Object=Global.Object;
 FromView=UI&&UI.FromView;
 Templating=UI&&UI.Templating;
 Runtime$1=Templating&&Templating.Runtime;
 Server=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 System=Global.System;
 Guid=System&&System.Guid;
 Lazy=WebSharper&&WebSharper.Lazy;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 ListModel=UI&&UI.ListModel;
 Collections=WebSharper&&WebSharper.Collections;
 Dictionary=Collections&&Collections.Dictionary;
 $=Global.jQuery;
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
 Library["String.Right"]=function(_this,n)
 {
  var a,b;
  return Library["String.Substring2"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);
 };
 Library["String.Left"]=function(_this,n)
 {
  return Library["String.Substring2"](_this,0,n);
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
 Library.delayed=function(delay,doF)
 {
  var cancellationTokenSourceO;
  cancellationTokenSourceO=[null];
  return function(parm)
  {
   var o,b;
   o=cancellationTokenSourceO[0];
   o==null?void 0:o.$0.Cancel$1();
   cancellationTokenSourceO[0]={
    $:1,
    $0:new CancellationTokenSource.New()
   };
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(delay),function()
    {
     doF(parm);
     return Concurrency.Zero();
    });
   })),{
    $:1,
    $0:cancellationTokenSourceO[0].$0
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
 Hoverable$1=Hoverable.Hoverable=Runtime.Class({
  Content:function(e)
  {
   return e.on("mouseenter",function()
   {
    return DomUtility.AddClass(e.elt,"hovering");
   }).on("mouseleave",function()
   {
    return DomUtility.RemoveClass(e.elt,"hovering");
   });
  },
  Content$1:function(ds)
  {
   return Doc.Element("div",this.get_Attributes(),ds);
  },
  get_Attributes:function()
  {
   var $this,view;
   $this=this;
   return List.ofArray([(view=View.Const("hovering"),AttrModule.DynamicPred("class",this.hover.get_View(),view)),AttrProxy.HandlerImpl("mouseenter",function()
   {
    return function()
    {
     return $this.hover.Set(true);
    };
   }),AttrProxy.HandlerImpl("mouseleave",function()
   {
    return function()
    {
     return $this.hover.Set(false);
    };
   })]);
  }
 },null,Hoverable$1);
 Hoverable$1.get_Demo=function()
 {
  return Hoverable$1.New$1().Content(Doc.Element("div",[AttrProxy.Create("style","flex-flow: column;")],[Doc.TextNode("Hover over me!")]));
 };
 Hoverable$1.Content$239$81=Runtime.Curried3(function(e,$1,$2)
 {
  return DomUtility.RemoveClass(e.elt,"hovering");
 });
 Hoverable$1.get_Attributes$235$69=Runtime.Curried3(function(_this,$1,$2)
 {
  return _this.hover.Set(false);
 });
 Hoverable$1.get_Attributes$234$69=Runtime.Curried3(function(_this,$1,$2)
 {
  return _this.hover.Set(true);
 });
 Hoverable$1.New$1=function()
 {
  return Hoverable$1.New(Var$1.Create$1(false));
 };
 Hoverable$1.New=function(hover)
 {
  return new Hoverable$1({
   hover:hover
  });
 };
 Hoverable.hoverable=function(e)
 {
  return Hoverable$1.New$1().Content(e);
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
 WcTabStripT=WcTabStrip.WcTabStripT=Runtime.Class({
  connectedCallback:function()
  {
   var $this,el,shadowRoot,elsh;
   function addTab()
   {
    var a,top,tabs;
    top=!el.hasAttribute("bottom");
    tabs=List.ofSeq(Seq.delay(function()
    {
     return Seq.collect(function(i)
     {
      var node;
      node=el.childNodes[i-1];
      return Unchecked.Equals(node.nodeType,Node.ELEMENT_NODE)?[[node.hasAttribute("tabname")?node.getAttribute("tabname"):(function($1)
      {
       return function($2)
       {
        return $1("Tab "+Global.String($2));
       };
      }(Global.id))(i),node]]:[];
     },Operators.range(1,el.childNodes.length));
    }));
    while(elsh.childNodes.length>0)
     elsh.removeChild(elsh.lastChild);
    a=WcTabStrip.tabStrip($this.selected,top,true,tabs,Doc.Element("slot",List.T.Empty,List.T.Empty));
    Templates.LoadLocalTemplates("");
    Doc.Run(elsh,a);
   }
   $this=this;
   !this.added?(el=this,shadowRoot=el.attachShadow({
    mode:"open"
   }),elsh=self.document.createElement("div"),shadowRoot.appendChild(elsh),addTab(),el.addEventListener("DOMSubtreeModified",Library.delayed(50,addTab)),this.added=true):void 0;
  }
 },Obj,WcTabStripT);
 WcTabStripT.Constructor=function()
 {
  var _this,r;
  _this=(r=Reflect.construct(self.HTMLElement,[],this.__proto__.constructor),r);
  self.FsRoot.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New.call(_this);
  return _this;
 };
 WcTabStripT.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.added=false;
  this.selected=Var$1.Create$1(1);
  (function($1)
  {
   return $1("WcTabStripT initializer");
  }(function(s)
  {
   console.log(s);
  }));
 },WcTabStripT);
 WcTabStrip.init=function()
 {
  SC$1.$cctor();
  return SC$1.init;
 };
 WcTabStrip.tabStrip$377$64=function(i,selected)
 {
  return function()
  {
   return function()
   {
    return selected.Set(i+1);
   };
  };
 };
 WcTabStrip.tabStrip=function(selected,top,horizontal,tabs,content)
 {
  var strip;
  strip=Doc.Element("div",[AttrProxy.Create("class",(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("tab-strip "+Utils.toSafe($2)+" "+Utils.toSafe($3));
  }))(Global.id))(top?"top":"bottom"))(horizontal?"horizontal":"vertical"))],List.ofSeq(Seq.delay(function()
  {
   return Seq.collect(function(m)
   {
    var i;
    i=m[0];
    return[Hoverable$1.New$1().Content(Doc.Element("div",[AttrModule.Dynamic("class",View.Map(function(sel)
    {
     return"tab"+(sel===i+1?" selected":"");
    },selected.get_View())),AttrProxy.Create("draggable","true"),AttrProxy.HandlerImpl("click",function()
    {
     return function()
     {
      return selected.Set(i+1);
     };
    })],[Doc.TextNode(m[1][0])]))];
   },Seq.indexed(tabs));
  })));
  return Doc.Element("div",[AttrProxy.Create("class","tab-panel")],List.ofSeq(Seq.delay(function()
  {
   return Seq.append(top?[strip]:[],Seq.delay(function()
   {
    return Seq.append([Doc.Element("div",[AttrProxy.Create("class","tab-content")],[content])],Seq.delay(function()
    {
     return Seq.append(!top?[strip]:[],Seq.delay(function()
     {
      return Seq.append([Doc.Element("style",List.T.Empty,List.ofArray([Doc.TextNode(WcTabStrip.css())]))],Seq.delay(function()
      {
       return[Doc.Element("style",List.T.Empty,List.ofArray([Doc.TextView(View.Map(function($1)
       {
        return function($2)
        {
         return $1("\r\n                                              ::slotted(*              ) { display: none }\r\n                                              ::slotted(*:nth-child("+Global.String($2)+")) { display: grid }\r\n                                           ");
        };
       }(Global.id),selected.get_View()))]))];
      }));
     }));
    }));
   }));
  })));
 };
 WcTabStrip.css=function()
 {
  SC$1.$cctor();
  return SC$1.css;
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
  var o,_nm,_c;
  o=new WcSplitterT.New();
  WcSplitter.set_layoutHorizontal(layoutH);
  WcSplitter.set_layoutVertical(layoutV);
  _nm="wcomp-splitter";
  _c=self.FsRoot.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New;
  console.log("defineWebComponent: "+_nm);
  Object.setPrototypeOf(_c.prototype,self.HTMLElement.prototype);
  Object.setPrototypeOf(_c,self.HTMLElement);
  Object.setPrototypeOf(WcSplitterT.Constructor.prototype,_c.prototype);
  self.customElements.define(_nm,WcSplitterT.Constructor);
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
 PlugInQuery.New=function(qryName,qryFunction)
 {
  return{
   qryName:qryName,
   qryFunction:qryFunction
  };
 };
 PlugIn.New=function(plgName,plgVars,plgViews,plgDocs,plgActions,plgQueries)
 {
  return{
   plgName:plgName,
   plgVars:plgVars,
   plgViews:plgViews,
   plgDocs:plgDocs,
   plgActions:plgActions,
   plgQueries:plgQueries
  };
 };
 AppFramework.getMainDoc=function()
 {
  SC$1.$cctor();
  return SC$1.getMainDoc;
 };
 AppFramework.qryDocs=function()
 {
  SC$1.$cctor();
  return SC$1.qryDocs;
 };
 AppFramework.actHello=function()
 {
  SC$1.$cctor();
  return SC$1.actHello;
 };
 AppFramework.tryGetWoW=function(plgName,viwName)
 {
  var o,o$1,o$2;
  o=(o$1=AppFramework.tryGetViw(plgName,viwName),o$1==null?null:{
   $:1,
   $0:{
    $:1,
    $0:o$1.$0.viwView
   }
  });
  return o==null?(o$2=AppFramework.tryGetVar(plgName,viwName),o$2==null?null:{
   $:1,
   $0:o$2.$0.varVar.get_View()
  }):o.$0;
 };
 AppFramework.tryGetVoV=function(plgName,varName)
 {
  var o,o$1,o$2;
  o=(o$1=AppFramework.tryGetVar(plgName,varName),o$1==null?null:{
   $:1,
   $0:{
    $:1,
    $0:o$1.$0.varVar
   }
  });
  return o==null?(o$2=AppFramework.tryGetViw(plgName,varName),o$2==null?null:{
   $:1,
   $0:new FromView.New(o$2.$0.viwView,Global.ignore)
  }):o.$0;
 };
 AppFramework.tryGetDoc=function(plgName,docName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:Arrays.tryFind(function(doc)
  {
   return doc.docName===docName;
  },o.$0.plgDocs);
 };
 AppFramework.tryGetAct=function(plgName,actName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:Arrays.tryFind(function(act)
  {
   return act.actName===actName;
  },o.$0.plgActions);
 };
 AppFramework.tryGetViw=function(plgName,viwName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:Arrays.tryFind(function(viw)
  {
   return viw.viwName===viwName;
  },o.$0.plgViews);
 };
 AppFramework.tryGetVar=function(plgName,varName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:Arrays.tryFind(function(_var)
  {
   return _var.varName===varName;
  },o.$0.plgVars);
 };
 AppFramework.tryGetPlugIn=function(plgName)
 {
  return AppFramework.plugIns().TryFindByKey(plgName);
 };
 AppFramework.newDocF=function(name,docF)
 {
  return PlugInDoc.New(name,docF);
 };
 AppFramework.newActF=function(name,fncF)
 {
  return PlugInAction.New(name,fncF,View.Const(true));
 };
 AppFramework.newAct=function(name,fnc)
 {
  return PlugInAction.New(name,{
   $:0,
   $0:fnc
  },View.Const(true));
 };
 AppFramework.newQry=function(name,qry)
 {
  return PlugInQuery.New(name,qry);
 };
 AppFramework.newDoc=function(name,doc)
 {
  return PlugInDoc.New(name,{
   $:0,
   $0:doc
  });
 };
 AppFramework.newViw=function(name,viw)
 {
  return PlugInView.New(name,viw);
 };
 AppFramework.newVar=function(name,_var)
 {
  return PlugInVar.New(name,_var);
 };
 AppFramework.vertical$746$39=function(mouseDown)
 {
  return function(te)
  {
   mouseDown(te.Event);
  };
 };
 AppFramework.vertical$745$39=Global.id;
 AppFramework.vertical$744$39=Global.id;
 AppFramework.vertical=function(partSizes,afterRender,afterRenderSp,mouseDown,gap)
 {
  var b,t,p,i;
  return(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"partsizes",
   $1:partSizes
  }).WithHole({
   $:7,
   $0:"afterrender",
   $1:afterRender
  }).WithHole({
   $:7,
   $0:"afterrendersp",
   $1:afterRenderSp
  }),t.WithHole(Handler.EventQ2(t.k,"mousedown",function()
  {
   return t.i;
  },function(te)
  {
   mouseDown(te.Event);
  }))).WithHole({
   $:2,
   $0:"gap",
   $1:gap
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.wcompsplitterver(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFramework.horizontal$738$39=function(mouseDown)
 {
  return function(te)
  {
   mouseDown(te.Event);
  };
 };
 AppFramework.horizontal$737$39=Global.id;
 AppFramework.horizontal$736$39=Global.id;
 AppFramework.horizontal=function(partSizes,afterRender,afterRenderSp,mouseDown,gap)
 {
  var b,t,p,i;
  return(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"partsizes",
   $1:partSizes
  }).WithHole({
   $:7,
   $0:"afterrender",
   $1:afterRender
  }).WithHole({
   $:7,
   $0:"afterrendersp",
   $1:afterRenderSp
  }),t.WithHole(Handler.EventQ2(t.k,"mousedown",function()
  {
   return t.i;
  },function(te)
  {
   mouseDown(te.Event);
  }))).WithHole({
   $:2,
   $0:"gap",
   $1:gap
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.wcompsplitterhor(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFramework.mainDoc$727$42=function()
 {
  return function()
  {
   AppFramework.mainDocV().Set("AppFramework.AppFwkClient");
  };
 };
 AppFramework.mainDoc=function()
 {
  var b,M,t,M$1,p,i;
  return(b=(M=AppFramework.getMainClientDoc(),(t=(M$1=AppFramework.mainDocV().get_View(),ProviderBuilder.Make().WithHole({
   $:2,
   $0:"maindoc",
   $1:M$1
  })),t.WithHole(Handler.EventQ2(t.k,"goclient",function()
  {
   return t.i;
  },function()
  {
   AppFramework.mainDocV().Set("AppFramework.AppFwkClient");
  }))).WithHole({
   $:0,
   $0:"mainclient",
   $1:M
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.appframework(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFramework.getMainClientDoc=function()
 {
  var x;
  return Doc.EmbedView((x=AppFramework.plugIns().v,View.Map2(function(mainDoc,plgs)
  {
   var x$1,v;
   x$1=Seq.tryPick(function(plg)
   {
    var o;
    o=Seq.tryFind(function(doc)
    {
     return plg.plgName+"."+doc.docName===mainDoc;
    },plg.plgDocs);
    return o==null?null:{
     $:1,
     $0:AppFramework.getLazyDoc(o.$0)
    };
   },plgs);
   v=AppFramework.AppFwkClient().f();
   return x$1==null?v:x$1.$0;
  },AppFramework.mainDocV().get_View(),x)));
 };
 AppFramework.getLazyDoc=function(doc)
 {
  var m;
  m=doc.docDoc;
  return m.$==0?m.$0.f():Doc.Element("div",[],[Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1("Doc with parameters not allowed here: "+GeneratedPrintf.p($2));
   };
  }(Global.id))(doc))]);
 };
 AppFramework.AppFwkClient=function()
 {
  SC$1.$cctor();
  return SC$1.AppFwkClient;
 };
 AppFramework.renderQueries$693$39=function(qry)
 {
  return function()
  {
   Global.alert(qry.qryFunction(null));
  };
 };
 AppFramework.renderQueries=function()
 {
  function a(plg,qry)
  {
   return[plg.plgName,qry.qryName];
  }
  function a$1(plg,qry)
  {
   var b,t,p,i;
   return(b=(t=ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:qry.qryName
   }),t.WithHole(Handler.EventQ2(t.k,"select",function()
   {
    return t.i;
   },function()
   {
    Global.alert(qry.qryFunction(null));
   }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
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
   },plg.plgQueries);
  },AppFramework.currentPlugInW()));
 };
 AppFramework.renderActions$682$51=function(act)
 {
  return function(ev)
  {
   AppFramework.callFunction(ev,null,act.actFunction);
  };
 };
 AppFramework.renderActions$678$51=function(act)
 {
  return function(ev)
  {
   AppFramework.callFunction(ev,null,act.actFunction);
  };
 };
 AppFramework.renderActions=function()
 {
  function a(plg,act)
  {
   return[plg.plgName,act.actName];
  }
  function a$1(plg,act)
  {
   var parms,m,x,x$1;
   parms=(m=act.actFunction,m.$==1?(x=Strings.concat(", ",List.ofArray([m.$1])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x)):m.$==2?(x$1=Strings.concat(", ",List.ofArray([m.$1,m.$2])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x$1)):"");
   return Doc.EmbedView(View.Map(function(a$2)
   {
    var b,t,p,i,b$1,t$1,p$1,i$1;
    return a$2?(b=(t=ProviderBuilder.Make().WithHole({
     $:1,
     $0:"name",
     $1:act.actName+parms
    }),t.WithHole(Handler.EventQ2(t.k,"click",function()
    {
     return t.i;
    },function(ev)
    {
     AppFramework.callFunction(ev,null,act.actFunction);
    }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.action(p[0])),(b.i=i,i)))).get_Doc():(b$1=(t$1=ProviderBuilder.Make().WithHole({
     $:1,
     $0:"name",
     $1:act.actName
    }),t$1.WithHole(Handler.EventQ2(t$1.k,"click",function()
    {
     return t$1.i;
    },function(ev)
    {
     AppFramework.callFunction(ev,null,act.actFunction);
    }))),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],LayoutEngine_Templates.actiondisabled(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
   },act.actEnabled));
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
  },AppFramework.currentPlugInW()));
 };
 AppFramework.callFunction=function(p1,p2,actF)
 {
  if(actF.$==1)
   actF.$0(p1);
  else
   if(actF.$==2)
    (actF.$0(p1))(p2);
   else
    actF.$0();
 };
 AppFramework.renderDocs$656$39=function(doc)
 {
  return function()
  {
   View.Get(function(plg)
   {
    AppFramework.mainDocV().Set(plg.plgName+"."+doc.docName);
   },AppFramework.currentPlugInW());
  };
 };
 AppFramework.renderDocs=function()
 {
  function a(plg,doc)
  {
   return[plg.plgName,doc.docName];
  }
  function a$1(plg,doc)
  {
   var b,t,N,m,x,x$1,x$2,x$3,x$4,p,i;
   return(b=(t=(N=doc.docName+(m=doc.docDoc,m.$==1?(x=Strings.concat(", ",List.ofArray([m.$1])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x)):m.$==2?(x$1=Strings.concat(", ",List.ofArray([m.$1,m.$2])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x$1)):m.$==3?(x$2=Strings.concat(", ",List.ofArray([m.$1,m.$2,m.$3])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x$2)):m.$==4?(x$3=Strings.concat(", ",List.ofArray([m.$1,m.$2,m.$3,m.$4])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x$3)):m.$==5?(x$4=Strings.concat(", ",List.ofArray([m.$1,m.$2,m.$3,m.$4,m.$5])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x$4)):""),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })),t.WithHole(Handler.EventQ2(t.k,"select",function()
   {
    return t.i;
   },function()
   {
    View.Get(function(plg$1)
    {
     AppFramework.mainDocV().Set(plg$1.plgName+"."+doc.docName);
    },AppFramework.currentPlugInW());
   }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
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
   },plg.plgDocs);
  },AppFramework.currentPlugInW()));
 };
 AppFramework.renderViews=function()
 {
  function a(plg,viw)
  {
   return[plg.plgName,viw.viwName];
  }
  function a$1(plg,viw)
  {
   var b,p,i;
   return(b=ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:viw.viwName
   }).WithHole({
    $:2,
    $0:"value",
    $1:viw.viwView
   }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.namevalue(p[0])),(b.i=i,i)))).get_Doc();
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
  },AppFramework.currentPlugInW()));
 };
 AppFramework.renderVars=function()
 {
  function a(plg,_var)
  {
   return[plg.plgName,_var.varName];
  }
  function a$1(plg,_var)
  {
   var b,p,i;
   return(b=ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:_var.varName
   }).WithHole({
    $:8,
    $0:"value",
    $1:_var.varVar
   }),(p=Handler.CompleteHoles(b.k,b.h,[["value",0]]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.namevalueinput(p[0])),(b.i=i,i)))).get_Doc();
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
  },AppFramework.currentPlugInW()));
 };
 AppFramework.renderPlugIns$618$35=function(name)
 {
  return function()
  {
   AppFramework.selectionPlugInO().Set({
    $:1,
    $0:name
   });
  };
 };
 AppFramework.renderPlugIns=function()
 {
  return Doc.Flatten(AppFramework.plugIns().MapLens(function($1)
  {
   var b,t,p,i;
   return(b=(t=ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:$1
   }),t.WithHole(Handler.EventQ2(t.k,"select",function()
   {
    return t.i;
   },function()
   {
    AppFramework.selectionPlugInO().Set({
     $:1,
     $0:$1
    });
   }))).WithHole({
    $:2,
    $0:"selected",
    $1:View.Map(function($2)
    {
     return Unchecked.Equals($2,{
      $:1,
      $0:$1
     })?"selected":"";
    },AppFramework.selectionPlugInO().get_View())
   }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
  }));
 };
 AppFramework.currentPlugInV=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInV;
 };
 AppFramework.currentPlugInW=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInW;
 };
 AppFramework.selectionPlugInO=function()
 {
  SC$1.$cctor();
  return SC$1.selectionPlugInO;
 };
 AppFramework.defaultPlugIn=function()
 {
  SC$1.$cctor();
  return SC$1.defaultPlugIn;
 };
 AppFramework.TemplateFileName=function()
 {
  SC$1.$cctor();
  return SC$1.TemplateFileName;
 };
 AppFramework.mainDocV=function()
 {
  SC$1.$cctor();
  return SC$1.mainDocV;
 };
 AppFramework.plugIns=function()
 {
  SC$1.$cctor();
  return SC$1.plugIns;
 };
 LayoutEngine.New=function(lytName,lytDefinition)
 {
  return{
   lytName:lytName,
   lytDefinition:lytDefinition
  };
 };
 LayoutEngineModule.addNewLayout=function(name,layout)
 {
  var x,x$1;
  LayoutEngineModule.addLayout((x=(x$1=!Unchecked.Equals(layout,null)?layout:"\r\n            split horizontal 0-50-100 AppFramework.AppFwkClient Hello\r\n            Hello h1 \"color:blue; class=btn-primary\" \"How are you today?\" Ask\r\n            Ask Doc InputLabel \"placeholder=Type you answer here...\" \"Answer:\" AppFramework.mainDocV  \r\n            ",(String.unindentStr())(x$1)),LayoutEngineModule.newLyt(!Unchecked.Equals(layout,null)?name:"Lyt_"+Strings.Replace(Global.String(Guid.NewGuid()),"-",""),x)));
 };
 LayoutEngineModule.newLyt=function(name,lyt)
 {
  return LayoutEngine.New(name,Var$1.Create$1(lyt));
 };
 LayoutEngineModule.addLayout=function(lyt)
 {
  View.Sink(function(txt)
  {
   AppFramework.plugIns().Append(PlugIn.New(lyt.lytName,[AppFramework.newVar("Layout",lyt.lytDefinition)],[],Arrays.ofSeq(Seq.delay(function()
   {
    return Seq.append(LayoutEngineModule.createDocs(lyt.lytName,txt),Seq.delay(function()
    {
     var l;
     return Seq.append([AppFramework.newDocF("InputFile",{
      $:4,
      $0:(l=lyt.lytName,Runtime.Curried(LayoutEngineModule.inputFile,4,[l])),
      $1:"attrs",
      $2:"Label",
      $3:"Action",
      $4:"[Doc]"
     })],Seq.delay(function()
     {
      var l$1;
      return Seq.append([AppFramework.newDocF("InputLabel",{
       $:3,
       $0:(l$1=lyt.lytName,Runtime.Curried(LayoutEngineModule.inputLabel,3,[l$1])),
       $1:"attrs",
       $2:"Label",
       $3:"Var"
      })],Seq.delay(function()
      {
       return[AppFramework.newDocF("none",{
        $:1,
        $0:LayoutEngineModule.none,
        $1:"x"
       })];
      }));
     }));
    }));
   })),[],[]));
   AppFramework.mainDocV().Set(AppFramework.mainDocV().Get());
  },lyt.lytDefinition.get_View());
 };
 LayoutEngineModule.none=function(x)
 {
  return Doc.Element("span",[],[]);
 };
 LayoutEngineModule.inputLabel=function(lytNm,attrs,labelName,varName)
 {
  var o,o$1,t;
  o=(o$1=(t=(LayoutEngineModule.splitName(lytNm))(varName),AppFramework.tryGetVar(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:Doc.Element("div",LayoutEngineModule.getAttrs(lytNm,attrs),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[LayoutEngineModule.getText(lytNm,labelName)]),Doc.Input([AttrProxy.Create("class","form-control")],o$1.$0.varVar)])])
  });
  return o==null?LayoutEngineModule.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Var not found "+Utils.toSafe($2));
   };
  }(Global.id))(varName)):o.$0;
 };
 LayoutEngineModule.inputFile$1110$69=Runtime.Curried3(function(act,el,$1)
 {
  return AppFramework.callFunction(el,null,act.actFunction);
 });
 LayoutEngineModule.inputFile$1109$69=Runtime.Curried3(function($1,el,$2)
 {
  el.value="";
 });
 LayoutEngineModule.inputFile=function(lytNm,attrs,labelName,actName,doc)
 {
  var o,o$1,t,act;
  o=(o$1=(t=(LayoutEngineModule.splitName(lytNm))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:(act=o$1.$0,Doc.Element("div",LayoutEngineModule.getAttrs(lytNm,attrs),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-btn")],[Doc.Element("label",[AttrProxy.Create("class","btn")],[LayoutEngineModule.getText(lytNm,labelName),Doc.Element("input",[AttrProxy.Create("class","form-control"),AttrProxy.Create("type","file"),AttrModule.Style("display","none"),AttrProxy.HandlerImpl("click",function(el)
   {
    return function()
    {
     el.value="";
    };
   }),AttrProxy.HandlerImpl("change",function(el)
   {
    return function()
    {
     return AppFramework.callFunction(el,null,act.actFunction);
    };
   })],[])])]),doc!==""?LayoutEngineModule.singleDoc(lytNm,List.ofArray([doc])):Doc.get_Empty()])]))
  });
  return o==null?LayoutEngineModule.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Action not found "+Utils.toSafe($2));
   };
  }(Global.id))(actName)):o.$0;
 };
 LayoutEngineModule.getText=function(lytNm,txtName)
 {
  var a,id,p,plg,nm,o,o$1,o$2,o$3;
  a=LayoutEngineModule.Identifier(txtName);
  return a!=null&&a.$==1?(id=a.$0,(p=(LayoutEngineModule.splitName(lytNm))(id),(plg=p[0],(nm=p[1],(o=(o$1=AppFramework.tryGetViw(plg,nm),o$1==null?null:{
   $:1,
   $0:Doc.TextView(o$1.$0.viwView)
  }),o==null?(o$2=(o$3=AppFramework.tryGetVar(plg,nm),o$3==null?null:{
   $:1,
   $0:Doc.TextView(o$3.$0.varVar.get_View())
  }),o$2==null?Doc.TextNode(id):o$2.$0):o.$0))))):Doc.TextNode(txtName);
 };
 LayoutEngineModule.createDocs=function(lytNm,txt)
 {
  function m(a,b)
  {
   return AppFramework.newDoc(a,Lazy.Create(function()
   {
    return b;
   }));
  }
  return Seq.map(function($1)
  {
   return m($1[0],$1[1]);
  },Seq.choose(function(l)
  {
   return LayoutEngineModule.createDocO(lytNm,l);
  },String.splitByChar("\n",txt)));
 };
 LayoutEngineModule.createDocO=function(lytNm,line)
 {
  var m,$1,a,a$1,$2,a$2,a$3,$3,a$4,a$5,$4,a$6,a$7,$5,a$8,a$9,$6,a$10,$7,a$11,$8,a$12,a$13;
  try
  {
   m=LayoutEngineModule.splitTokens(line);
   return m.$==1&&(a=LayoutEngineModule.Identifier(m.$0),a!=null&&a.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$1=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$1!=null&&a$1.$==1&&($1=[m.$1.$1.$1,a$1.$0,a.$0],true))))))?{
    $:1,
    $0:[$1[2],(LayoutEngineModule.createSplitterM())([lytNm,true,$1[1],$1[0]])]
   }:m.$==1&&(a$2=LayoutEngineModule.Identifier(m.$0),a$2!=null&&a$2.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$3=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$3!=null&&a$3.$==1&&($2=[m.$1.$1.$1,a$3.$0,a$2.$0],true))))))?{
    $:1,
    $0:[$2[2],(LayoutEngineModule.createSplitterM())([lytNm,false,$2[1],$2[0]])]
   }:m.$==1&&(a$4=LayoutEngineModule.Identifier(m.$0),a$4!=null&&a$4.$==1&&(m.$1.$==1&&(LayoutEngineModule.Doc(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$5=LayoutEngineModule.Identifier(m.$1.$1.$0),a$5!=null&&a$5.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($3=[a$5.$0,m.$1.$1.$1.$0,a$4.$0,m.$1.$1.$1.$1.$0],true)))))))))?{
    $:1,
    $0:[$3[2],(LayoutEngineModule.createButtonM())([lytNm,$3[0],$3[1],$3[3]])]
   }:m.$==1&&(a$6=LayoutEngineModule.Identifier(m.$0),a$6!=null&&a$6.$==1&&(m.$1.$==1&&(LayoutEngineModule.Doc(m.$1.$0).$==2&&(m.$1.$1.$==1&&(a$7=LayoutEngineModule.Identifier(m.$1.$1.$0),a$7!=null&&a$7.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==0&&($4=[m.$1.$1.$1.$0,a$6.$0,a$7.$0],true))))))))?{
    $:1,
    $0:[$4[1],(LayoutEngineModule.createInputM())([lytNm,$4[2],$4[0]])]
   }:m.$==1&&(a$8=LayoutEngineModule.Identifier(m.$0),a$8!=null&&a$8.$==1&&(m.$1.$==1&&(LayoutEngineModule.Doc(m.$1.$0).$==3&&(m.$1.$1.$==1&&(a$9=LayoutEngineModule.Identifier(m.$1.$1.$0),a$9!=null&&a$9.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==0&&($5=[m.$1.$1.$1.$0,a$8.$0,a$9.$0],true))))))))?{
    $:1,
    $0:[$5[1],(LayoutEngineModule.createTextAreaM())([lytNm,$5[2],$5[0]])]
   }:m.$==1&&(a$10=LayoutEngineModule.Identifier(m.$0),a$10!=null&&a$10.$==1&&(m.$1.$==1&&(LayoutEngineModule.Doc(m.$1.$0).$==0&&(m.$1.$1.$==1&&($6=[m.$1.$1.$0,a$10.$0,m.$1.$1.$1],true)))))?{
    $:1,
    $0:[$6[1],(LayoutEngineModule.createDocM())([lytNm,$6[0],$6[2]])]
   }:m.$==1&&(a$11=LayoutEngineModule.Identifier(m.$0),a$11!=null&&a$11.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==2&&(m.$1.$1.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==1&&($7=[m.$1.$1.$1.$1.$0,m.$1.$1.$0,m.$1.$1.$1.$1.$1,a$11.$0,m.$1.$1.$1.$0],true)))))))?null:m.$==1&&(a$12=LayoutEngineModule.Identifier(m.$0),a$12!=null&&a$12.$==1&&(m.$1.$==1&&(a$13=LayoutEngineModule.Vertical(m.$1.$0),a$13.$==3&&(m.$1.$1.$==1&&($8=[m.$1.$1.$0,m.$1.$1.$1,a$13.$0,a$12.$0],true)))))?{
    $:1,
    $0:[$8[3],(LayoutEngineModule.createElementM())([lytNm,$8[2],$8[0],$8[1]])]
   }:null;
  }
  catch(e)
  {
   ((function($9)
   {
    return function($10)
    {
     return $9(Utils.prettyPrint($10));
    };
   }(function(s)
   {
    console.log(s);
   }))(e));
   return null;
  }
 };
 LayoutEngineModule.createDocM=function()
 {
  SC$1.$cctor();
  return SC$1.createDocM;
 };
 LayoutEngineModule.createElementM=function()
 {
  SC$1.$cctor();
  return SC$1.createElementM;
 };
 LayoutEngineModule.createTextAreaM=function()
 {
  SC$1.$cctor();
  return SC$1.createTextAreaM;
 };
 LayoutEngineModule.createInputM=function()
 {
  SC$1.$cctor();
  return SC$1.createInputM;
 };
 LayoutEngineModule.createButtonM=function()
 {
  SC$1.$cctor();
  return SC$1.createButtonM;
 };
 LayoutEngineModule.createSplitterM=function()
 {
  SC$1.$cctor();
  return SC$1.createSplitterM;
 };
 LayoutEngineModule.createDoc=function(lytNm,docName,parms)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var p,o,o$1;
   p=(LayoutEngineModule.splitName(lytNm))(docName);
   o=(o$1=AppFramework.tryGetDoc(p[0],p[1]),o$1==null?null:{
    $:1,
    $0:LayoutEngineModule.getDocFinal(parms,o$1.$0)
   });
   return o==null?LayoutEngineModule.errDoc((function($1)
   {
    return function($2)
    {
     return $1("Missing doc: "+Utils.toSafe($2));
    };
   }(Global.id))(docName)):o.$0;
  });
 };
 LayoutEngineModule.createTextArea=function(lytNm,varName,attrs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var o,x,t,m,a;
   o=(x=(t=(LayoutEngineModule.splitName(lytNm))(varName),AppFramework.tryGetVoV(t[0],t[1])),(m=(a=LayoutEngineModule.getAttrs(lytNm,attrs),function(a$1)
   {
    return Doc.InputArea(a,a$1);
   }),x==null?null:{
    $:1,
    $0:m(x.$0)
   }));
   return o==null?LayoutEngineModule.errDoc((function($1)
   {
    return function($2)
    {
     return $1("Missing var: "+Utils.toSafe($2));
    };
   }(Global.id))(varName)):o.$0;
  });
 };
 LayoutEngineModule.createInput=function(lytNm,varName,attrs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var o,x,t,m,a;
   o=(x=(t=(LayoutEngineModule.splitName(lytNm))(varName),AppFramework.tryGetVoV(t[0],t[1])),(m=(a=LayoutEngineModule.getAttrs(lytNm,attrs),function(a$1)
   {
    return Doc.Input(a,a$1);
   }),x==null?null:{
    $:1,
    $0:m(x.$0)
   }));
   return o==null?LayoutEngineModule.errDoc((function($1)
   {
    return function($2)
    {
     return $1("Missing var: "+Utils.toSafe($2));
    };
   }(Global.id))(varName)):o.$0;
  });
 };
 LayoutEngineModule.createButton=function(lytNm,actName,attrs,text)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var x,o,o$1,t,$1;
   function m(act,u)
   {
    return AppFramework.callFunction(null,null,act.actFunction);
   }
   x=(o=(o$1=(t=(LayoutEngineModule.splitName(lytNm))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
    $:1,
    $0:($1=o$1.$0,function($2)
    {
     return m($1,$2);
    })
   }),o==null?Global.ignore:o.$0);
   return Doc.Button(text,LayoutEngineModule.getAttrs(lytNm,attrs),x);
  });
 };
 LayoutEngineModule.createElement=function(lytNm,element,attrs,docs)
 {
  var x;
  x=[LayoutEngineModule.turnToView(function()
  {
   return Doc.Concat(LayoutEngineModule.getDocs(lytNm,docs));
  })];
  return Doc.Element(element,LayoutEngineModule.getAttrs(lytNm,attrs),x);
 };
 LayoutEngineModule.createSplitter=function(lytNm,vertical,measures,docs)
 {
  var p;
  p=LayoutEngineModule.pairOfDocs(lytNm,docs);
  return measures.$==1?LayoutEngineModule.variableSplitter(vertical,measures.$0,measures.$1,measures.$2,p[0],p[1]):LayoutEngineModule.fixedSplitter(vertical,measures.$0,measures.$1,p[0],p[1]);
 };
 LayoutEngineModule.singleDoc=function(lytNm,docs)
 {
  return Doc.EmbedView(View.Map(function(a)
  {
   var $1;
   return a.$==1&&(a.$1.$==0&&($1=a.$0,true))?$1:LayoutEngineModule.errDoc((function($2)
   {
    return function($3)
    {
     return $2("expected exactly 1 element "+Utils.printList(Utils.prettyPrint,$3));
    };
   }(Global.id))(docs));
  },View.Map(function()
  {
   return LayoutEngineModule.getDocs(lytNm,docs);
  },AppFramework.mainDocV().get_View())));
 };
 LayoutEngineModule.pairOfDocs=function(lytNm,docs)
 {
  var dsW;
  dsW=View.Map(function(a)
  {
   var $1;
   return a.$==1&&(a.$1.$==1&&(a.$1.$1.$==0&&($1=[a.$0,a.$1.$0],true)))?[$1[0],$1[1]]:[LayoutEngineModule.errDoc((function($2)
   {
    return function($3)
    {
     return $2("splitter expects exactly 2 elements "+Utils.printList(Utils.prettyPrint,$3));
    };
   }(Global.id))(docs)),LayoutEngineModule.errDoc("part 2")];
  },View.Map(function()
  {
   return LayoutEngineModule.getDocs(lytNm,docs);
  },AppFramework.mainDocV().get_View()));
  return[Doc.EmbedView(View.Map(function(t)
  {
   return t[0];
  },dsW)),Doc.EmbedView(View.Map(function(t)
  {
   return t[1];
  },dsW))];
 };
 LayoutEngineModule.getDocs=function(lytNm,docs)
 {
  var m;
  return docs.$==0?List.T.Empty:(m=LayoutEngineModule.getOneDoc(lytNm,docs),new List.T({
   $:1,
   $0:m[0],
   $1:LayoutEngineModule.getDocs(lytNm,m[1])
  }));
 };
 LayoutEngineModule.getOneDoc=function(lytNm,docs)
 {
  var $1,a,id,parms,p,plg,nm,o,o$1,o$2,o$3,rest,m;
  return docs.$==1&&(a=LayoutEngineModule.Identifier(docs.$0),a!=null&&a.$==1&&($1=[a.$0,docs.$1],true))?(id=$1[0],(parms=$1[1],(p=(LayoutEngineModule.splitName(lytNm))(id),(plg=p[0],(nm=p[1],(o=(o$1=AppFramework.tryGetDoc(plg,nm),o$1==null?null:{
   $:1,
   $0:LayoutEngineModule.getDocF(parms,o$1.$0)
  }),o==null?(o$2=(o$3=AppFramework.tryGetWoW(plg,nm),o$3==null?null:{
   $:1,
   $0:[Doc.TextView(o$3.$0),parms]
  }),o$2==null?[LayoutEngineModule.errDoc((function($2)
  {
   return function($3)
   {
    return $2("Missing doc: "+Utils.toSafe($3));
   };
  }(Global.id))(id)),parms]:o$2.$0):o.$0)))))):docs.$==0?[Doc.get_Empty(),List.T.Empty]:(rest=docs.$1,(m=LayoutEngineModule.getTextData(lytNm,docs.$0),m.$==1?[Doc.TextView(m.$0),rest]:m.$==2?[LayoutEngineModule.errDoc((function($2)
  {
   return function($3)
   {
    return $2("Unexpected action: "+Utils.toSafe($3));
   };
  }(Global.id))(m.$0.actName)),rest]:[Doc.TextNode(m.$0),rest]));
 };
 LayoutEngineModule.turnToView=function(f)
 {
  return Doc.EmbedView(View.Map(f,AppFramework.mainDocV().get_View()));
 };
 LayoutEngineModule.getDocFinal=function(parms,doc)
 {
  var m;
  m=LayoutEngineModule.getDocF(parms,doc);
  return m[1].$==0?m[0]:LayoutEngineModule.errDoc((((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("Too many parameters "+GeneratedPrintf.p($2)+" "+Utils.printList(Utils.prettyPrint,$3));
  }))(Global.id))(doc))(parms));
 };
 LayoutEngineModule.getDocF=function(parms,doc)
 {
  var $1,$2;
  $2=doc.docDoc;
  switch($2.$==1?parms.$==1?($1=[$2.$0,parms.$0,parms.$1],1):6:$2.$==2?parms.$==1?parms.$1.$==1?($1=[$2.$0,parms.$0,parms.$1.$0,parms.$1.$1],2):6:6:$2.$==3?parms.$==1?parms.$1.$==1?parms.$1.$1.$==1?($1=[$2.$0,parms.$0,parms.$1.$0,parms.$1.$1.$0,parms.$1.$1.$1],3):6:6:6:$2.$==4?parms.$==1?parms.$1.$==1?parms.$1.$1.$==1?parms.$1.$1.$1.$==1?($1=[$2.$0,parms.$0,parms.$1.$0,parms.$1.$1.$0,parms.$1.$1.$1.$0,parms.$1.$1.$1.$1],4):6:6:6:6:$2.$==5?parms.$==1?parms.$1.$==1?parms.$1.$1.$==1?parms.$1.$1.$1.$==1?parms.$1.$1.$1.$1.$==1?($1=[$2.$0,parms.$0,parms.$1.$0,parms.$1.$1.$0,parms.$1.$1.$1.$0,parms.$1.$1.$1.$1.$0,parms.$1.$1.$1.$1.$1],5):6:6:6:6:6:($1=[$2.$0,parms],0))
  {
   case 0:
    return[$1[0].f(),$1[1]];
   case 1:
    return[$1[0]($1[1]),$1[2]];
   case 2:
    return[($1[0]($1[1]))($1[2]),$1[3]];
   case 3:
    return[(($1[0]($1[1]))($1[2]))($1[3]),$1[4]];
   case 4:
    return[((($1[0]($1[1]))($1[2]))($1[3]))($1[4]),$1[5]];
   case 5:
    return[(((($1[0]($1[1]))($1[2]))($1[3]))($1[4]))($1[5]),$1[6]];
   case 6:
    return[Doc.Element("div",[],[Doc.TextNode((((Runtime.Curried3(function($3,$4,$5)
    {
     return $3("Parameters do not coincide with definition "+GeneratedPrintf.p($4)+" - "+Utils.printList(Utils.prettyPrint,$5));
    }))(Global.id))(doc))(parms))]),List.T.Empty];
  }
 };
 LayoutEngineModule.getAttrs=function(lytNm,attrs)
 {
  return List.ofSeq(Seq.delay(function()
  {
   return Seq.append(Seq.choose(function(a)
   {
    var $1,value,value$1,name,m,act;
    return!Unchecked.Equals(a,null)&&a.length===2&&(value=Arrays.get(a,1),Strings.Trim(Arrays.get(a,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a,1),(name=Arrays.get(a,0),{
     $:1,
     $0:(m=LayoutEngineModule.getTextData(lytNm,Strings.Trim(value$1)),m.$==1?AttrModule.Dynamic(Strings.Trim(name),m.$0):m.$==2?(act=m.$0,AttrModule.Handler(Strings.Trim(name),function(el)
     {
      return function(ev)
      {
       return AppFramework.callFunction(el,ev,act.actFunction);
      };
     })):AttrProxy.Create(Strings.Trim(name),Strings.Trim(m.$0)))
    })):null;
   },Seq.map(function(s)
   {
    return String.splitByChar("=",s);
   },String.splitByChar(";",attrs))),Seq.delay(function()
   {
    return Seq.choose(function(a)
    {
     var $1,value,value$1,name,m;
     return!Unchecked.Equals(a,null)&&a.length===2&&(value=Arrays.get(a,1),Strings.Trim(Arrays.get(a,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a,1),(name=Arrays.get(a,0),{
      $:1,
      $0:(m=LayoutEngineModule.getTextData(lytNm,Strings.Trim(value$1)),m.$==1?AttrModule.DynamicStyle(Strings.Trim(name),m.$0):m.$==2?AttrModule.Style(Strings.Trim(name),(function($2)
      {
       return function($3)
       {
        return $2("${"+Utils.toSafe($3)+"}");
       };
      }(Global.id))(m.$0.actName)):AttrModule.Style(Strings.Trim(name),Strings.Trim(m.$0)))
     })):null;
    },Seq.map(function(s)
    {
     return String.splitByChar(":",s);
    },String.splitByChar(";",attrs)));
   }));
  }));
 };
 LayoutEngineModule.getTextData=function(lytNm,txt)
 {
  var o,o$1,$1,bef,name,aft,p,plg,n,o$2,o$3,o$4,o$5;
  o=(o$1=String.delimitedO("${","}",txt),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,(bef=$1[0],(name=$1[1],(aft=$1[2],(p=(LayoutEngineModule.splitName(lytNm))(name),(plg=p[0],(n=p[1],(o$2=(o$3=AppFramework.tryGetWoW(plg,n),o$3==null?null:{
    $:1,
    $0:function(txW)
    {
     var $2,$3;
     $3=LayoutEngineModule.getTextData(lytNm,aft);
     switch(bef===""?$3.$==1?($2=$3.$0,2):$3.$==2?($2=$3.$0,3):$3.$0===""?0:($2=$3.$0,1):$3.$==1?($2=$3.$0,2):$3.$==2?($2=$3.$0,3):($2=$3.$0,1))
     {
      case 0:
       return{
        $:1,
        $0:txW
       };
      case 1:
       return{
        $:1,
        $0:View.Map(function(a)
        {
         return bef+a+$2;
        },txW)
       };
      case 2:
       return{
        $:1,
        $0:View.Map2(function(a,b)
        {
         return bef+a+b;
        },txW,$2)
       };
      case 3:
       return{
        $:2,
        $0:$2
       };
     }
    }(o$3.$0)
   }),o$2==null?(o$4=(o$5=AppFramework.tryGetAct(plg,n),o$5==null?null:{
    $:1,
    $0:{
     $:2,
     $0:o$5.$0
    }
   }),o$4==null?{
    $:0,
    $0:((((Runtime.Curried(function($2,$3,$4,$5)
    {
     return $2(Utils.toSafe($3)+" ${Missing "+Utils.toSafe($4)+"}"+Utils.toSafe($5));
    },4))(Global.id))(bef))(name))(aft)
   }:o$4.$0):o$2.$0))))))))
  });
  return o==null?{
   $:0,
   $0:txt
  }:o.$0;
 };
 LayoutEngineModule.splitTokens=function(line)
 {
  return List.ofSeq(Seq.collect(Global.id,Seq.mapi(function(i,s)
  {
   var t;
   return i%2===1?[" "+s]:(t=Strings.Trim(s),t===""?[]:Strings.SplitChars(t,[" "],1));
  },String.splitByChar("\"",line))));
 };
 LayoutEngineModule.splitName=function(lytNm)
 {
  function f(s)
  {
   return String.splitByChar(".",s);
  }
  function g(a)
  {
   return Arrays.length(a)===1?[lytNm,Arrays.get(a,0)]:[Arrays.get(a,0),Arrays.get(a,1)];
  }
  return function(x)
  {
   return g(f(x));
  };
 };
 LayoutEngineModule.errDoc=function(txt)
 {
  return Doc.Element("div",[],[Doc.TextNode(txt)]);
 };
 LayoutEngineModule.variableSplitter=function(vertical,min,value,max,doc1,doc2)
 {
  return Doc.Element("wcomp-splitter",List.ofSeq(Seq.delay(function()
  {
   return Seq.append(vertical?[AttrProxy.Create("vertical","")]:[],Seq.delay(function()
   {
    return Seq.append([AttrProxy.Create("min",Global.String(min))],Seq.delay(function()
    {
     return Seq.append([AttrProxy.Create("value",Global.String(value))],Seq.delay(function()
     {
      return[AttrProxy.Create("max",Global.String(max))];
     }));
    }));
   }));
  })),List.ofArray([doc1,doc2]));
 };
 LayoutEngineModule.fixedSplitter=function(vertical,pixel,first,doc1,doc2)
 {
  var sizes,b,p,i,b$1,p$1,i$1;
  sizes=(((first?Runtime.Curried3(function($1,$2,$3)
  {
   return $1($2.toFixed(6)+"px calc(100% - "+$3.toFixed(6)+"px)");
  }):Runtime.Curried3(function($1,$2,$3)
  {
   return $1("calc(100% - "+$2.toFixed(6)+"px) "+$3.toFixed(6)+"px");
  }))(Global.id))(pixel))(pixel);
  return vertical?(b=ProviderBuilder.Make().WithHole({
   $:1,
   $0:"partsizes",
   $1:sizes
  }).WithHole({
   $:0,
   $0:"first",
   $1:doc1
  }).WithHole({
   $:0,
   $0:"second",
   $1:doc2
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.fixedsplitterver(p[0])),(b.i=i,i)))).get_Doc():(b$1=ProviderBuilder.Make().WithHole({
   $:1,
   $0:"partsizes",
   $1:sizes
  }).WithHole({
   $:0,
   $0:"first",
   $1:doc1
  }).WithHole({
   $:0,
   $0:"second",
   $1:doc2
  }),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],LayoutEngine_Templates.fixedsplitterhor(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
 };
 LayoutEngineModule.Measures$1=function(txt)
 {
  var a,$1,a$1,$2,a$2,$3,a$3,a$4,a$5;
  a=String.splitByChar("-",txt);
  return!Unchecked.Equals(a,null)&&a.length===1&&(a$1=(ParseO.Double())(Arrays.get(a,0)),a$1!=null&&a$1.$==1&&($1=a$1.$0,true))?{
   $:1,
   $0:{
    $:0,
    $0:$1,
    $1:true
   }
  }:!Unchecked.Equals(a,null)&&a.length===2&&(Arrays.get(a,0)===""&&(a$2=(ParseO.Double())(Arrays.get(a,1)),a$2!=null&&a$2.$==1&&($2=a$2.$0,true)))?{
   $:1,
   $0:{
    $:0,
    $0:$2,
    $1:false
   }
  }:!Unchecked.Equals(a,null)&&a.length===3&&(a$3=(ParseO.Double())(Arrays.get(a,0)),a$3!=null&&a$3.$==1&&(a$4=(ParseO.Double())(Arrays.get(a,1)),a$4!=null&&a$4.$==1&&(a$5=(ParseO.Double())(Arrays.get(a,2)),a$5!=null&&a$5.$==1&&($3=[a$5.$0,a$3.$0,a$4.$0],true))))?{
   $:1,
   $0:{
    $:1,
    $0:$3[1],
    $1:$3[2],
    $2:$3[0]
   }
  }:null;
 };
 LayoutEngineModule.Doc=function(a)
 {
  return a==="Doc"?{
   $:0,
   $0:null
  }:a==="button"?{
   $:1,
   $0:null
  }:a==="input"?{
   $:2,
   $0:null
  }:a==="textarea"?{
   $:3,
   $0:null
  }:a==="select"?{
   $:4,
   $0:null
  }:{
   $:5,
   $0:null
  };
 };
 LayoutEngineModule.Vertical=function(a)
 {
  var a$1;
  return a==="vertical"?{
   $:0,
   $0:null
  }:a==="horizontal"?{
   $:1,
   $0:null
  }:a==="grid"?{
   $:2,
   $0:null
  }:(a$1=LayoutEngineModule.Identifier(a),a$1!=null&&a$1.$==1?{
   $:3,
   $0:a$1.$0
  }:{
   $:4,
   $0:null
  });
 };
 LayoutEngineModule.Identifier=function(a)
 {
  var $1,a$1,t;
  return(a$1=LibraryJS.REGEX$1("^[$a-zA-Z_][0-9a-zA-Z_\\.\\-$]*$","",a),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($1=Arrays.get(a$1.$0,0),true)))?{
   $:1,
   $0:$1
  }:null;
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
 SC$1.$cctor=function()
 {
  var f,x,p,cache,store,store$1,checkO,p$1,cache$1,store$2,store$3,checkO$1,p$2,cache$2,store$4,store$5,checkO$2,p$3,cache$3,store$6,store$7,checkO$3,p$4,cache$4,store$8,store$9,checkO$4,p$5,cache$5,store$10,store$11,checkO$5,o,plg,a;
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
   var a$2,b;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$2=0,(b=Arrays.length(s)-2,Unchecked.Compare(a$2,b)===1?a$2:b))
   });
  }
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
  function a$1(a$2)
  {
   var f$2;
   function b(a$3)
   {
    return AppFramework.plugIns().TryFindByKey(a$3);
   }
   function g$3(o$1)
   {
    var v;
    v=AppFramework.defaultPlugIn();
    return o$1==null?v:o$1.$0;
   }
   f$2=function(o$1)
   {
    return o$1==null?null:b(o$1.$0);
   };
   return function(x$1)
   {
    return g$3(f$2(x$1));
   };
  }
  function store$12(v,res)
  {
   cache.set_Item(v,res);
   return res;
  }
  function store$13(v,res)
  {
   cache$1.set_Item(v,res);
   return res;
  }
  function store$14(v,res)
  {
   cache$2.set_Item(v,res);
   return res;
  }
  function store$15(v,res)
  {
   cache$3.set_Item(v,res);
   return res;
  }
  function store$16(v,res)
  {
   cache$4.set_Item(v,res);
   return res;
  }
  function store$17(v,res)
  {
   cache$5.set_Item(v,res);
   return res;
  }
  SC$1.unindentStr=function(x$1)
  {
   return g(String.unindent(x$1));
  };
  SC$1.skipLastLine=(f=function(x$1)
  {
   return g$1(f$1(x$1));
  },function(x$1)
  {
   return g$2(f(x$1));
  });
  SC$1.parseDateO=ParseO.tryParseWith(function(a$2)
  {
   var o$1,m;
   o$1=0;
   return[(m=DateUtil.TryParse(a$2),m!=null&&m.$==1&&(o$1=m.$0,true)),o$1];
  });
  SC$1.parseIntO=ParseO.tryParseWith(function(a$2)
  {
   var o$1;
   o$1=0;
   return[Numeric.TryParseInt32(a$2,{
    get:function()
    {
     return o$1;
    },
    set:function(v)
    {
     o$1=v;
    }
   }),o$1];
  });
  SC$1.parseSingleO=ParseO.tryParseWith(function(a$2)
  {
   var o$1,$1;
   o$1=0;
   return[($1=Global.Number(a$2),Global.isNaN($1)?false:(o$1=$1,true)),o$1];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith(function(a$2)
  {
   var o$1,$1;
   o$1=0;
   return[($1=Global.Number(a$2),Global.isNaN($1)?false:(o$1=$1,true)),o$1];
  });
  SC$1.parseGuidO=ParseO.tryParseWith(function(a$2)
  {
   var o$1;
   o$1=null;
   return[Guid.TryParse(a$2,{
    get:function()
    {
     return o$1;
    },
    set:function(v)
    {
     o$1=v;
    }
   }),o$1];
  });
  SC$1["|Date|_|"]=ParseO.parseDateO();
  SC$1["|Int|_|"]=ParseO.parseIntO();
  SC$1["|Single|_|"]=ParseO.parseSingleO();
  SC$1["|Double|_|"]=ParseO.parseDoubleO();
  SC$1["|Guid|_|"]=ParseO.parseGuidO();
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$1.observers=List.T.Empty;
  SC$1.css="\r\n                .tab-panel {\r\n                 overflow  : hidden   ;\r\n                 display   : flex     ;\r\n                 flex-flow : column   ;\r\n                 background: lightgray;\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                }\r\n                .tab-content {\r\n                 flex      : 1 1     ;\r\n                 overflow  : auto    ;\r\n                 position  : relative;\r\n                }\r\n                .tab-children {\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                 position  : absolute;\r\n                 display   : grid    ;\r\n                }\r\n                .tab-strip {\r\n                 padding   : 0pt     ;\r\n                 flex      : 0 0     ;\r\n                }\r\n                .tab {\r\n                 border     : 0.2pt solid transparent;\r\n                 padding    : 0pt 4pt;\r\n                 display    : inline-block;\r\n                 font-family: sans-serif;\r\n                 font-weight: 200;\r\n                 font-size  : small;\r\n                 color      : #666;\r\n                 cursor     : pointer;\r\n                }\r\n                .top>.tab {\r\n                 border-radius: 2pt 2pt 0pt 0pt;\r\n                 border-bottom-width: 0pt;\r\n                 vertical-align: bottom;\r\n                }\r\n                .bottom>.tab {\r\n                 border-top-width: 0pt;\r\n                 border-radius: 0pt 0pt 2pt 2pt;\r\n                 vertical-align: top;\r\n                }\r\n                .horizontal>.tab:not(:first-child) {\r\n                 border-left-width: 0pt;\r\n                }\r\n                .tab.hovering {\r\n                 background: red;\r\n                }\r\n                .tab.selected {\r\n                 background: white;\r\n                 border-left-width: 0.2pt;\r\n                 color: black;\r\n                 font-weight: 500;\r\n                 border-color: black;\r\n                }\r\n                .horizontal>.tab.selected {\r\n                 border-left-width: 0.2pt;\r\n                }\r\n                ::slotted(*              ) { \r\n                 width : 100%;\r\n                 height: 100%;\r\n                }\r\n                        ";
  SC$1.init=Lazy.Create(function()
  {
   var o$1,_nm,_c;
   o$1=new WcTabStripT.New();
   _nm="wcomp-tabstrip";
   _c=self.FsRoot.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New;
   console.log("defineWebComponent: "+_nm);
   Object.setPrototypeOf(_c.prototype,self.HTMLElement.prototype);
   Object.setPrototypeOf(_c,self.HTMLElement);
   Object.setPrototypeOf(WcTabStripT.Constructor.prototype,_c.prototype);
   self.customElements.define(_nm,WcTabStripT.Constructor);
  });
  SC$1.layoutHorizontal=Runtime.Curried(function($1,$2,$3,$4,$5)
  {
   return Doc.get_Empty();
  },5);
  SC$1.layoutVertical=Runtime.Curried(function($1,$2,$3,$4,$5)
  {
   return Doc.get_Empty();
  },5);
  SC$1.plugIns=new ListModel.New$1(function(plg$1)
  {
   return plg$1.plgName;
  });
  SC$1.mainDocV=Var$1.Create$1("AppFramework.AppFwkClient");
  SC$1.TemplateFileName="..\\website\\AppFramework.html";
  SC$1.defaultPlugIn=PlugIn.New("",[],[],[],[],[]);
  SC$1.selectionPlugInO=Var$1.Create$1({
   $:1,
   $0:"AppFramework"
  });
  SC$1.currentPlugInW=(x=AppFramework.selectionPlugInO().get_View(),View.Map2(function($1,$2)
  {
   return(a$1($1))($2);
  },AppFramework.plugIns().v,x));
  SC$1.currentPlugInV=new FromView.New(AppFramework.currentPlugInW(),function(a$2)
  {
   AppFramework.plugIns().Append(a$2);
  });
  SC$1.AppFwkClient=Lazy.Create(function()
  {
   var b,Q,A,D,V,V$1,P,p$6,i;
   return(b=(Q=AppFramework.renderQueries(),(A=AppFramework.renderActions(),(D=AppFramework.renderDocs(),(V=AppFramework.renderViews(),(V$1=AppFramework.renderVars(),(P=AppFramework.renderPlugIns(),ProviderBuilder.Make().WithHole({
    $:0,
    $0:"plugins",
    $1:P
   })).WithHole({
    $:2,
    $0:"pluginname",
    $1:View.Map(function($1)
    {
     return $1.plgName;
    },AppFramework.currentPlugInW())
   }).WithHole({
    $:0,
    $0:"vars",
    $1:V$1
   })).WithHole({
    $:0,
    $0:"views",
    $1:V
   })).WithHole({
    $:0,
    $0:"docs",
    $1:D
   })).WithHole({
    $:0,
    $0:"actions",
    $1:A
   })).WithHole({
    $:0,
    $0:"queries",
    $1:Q
   })),(p$6=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p$6[1],LayoutEngine_Templates.appfwkclient(p$6[0])),(b.i=i,i)))).get_Doc();
  });
  SC$1.actHello=AppFramework.newAct("Hello",function()
  {
   self.alert("Hello!");
  });
  SC$1.qryDocs=AppFramework.newQry("getDocNames",function()
  {
   return Arrays.ofSeq(Seq.collect(function(plg$1)
   {
    return Seq.map(function(doc)
    {
     return plg$1.plgName+"."+doc.docName;
    },plg$1.plgDocs);
   },(AppFramework.plugIns())["var"].Get()));
  });
  AppFramework.plugIns().Append(PlugIn.New("AppFramework",[AppFramework.newVar("mainDocV",AppFramework.mainDocV())],[],[AppFramework.newDoc("AppFwkClient",AppFramework.AppFwkClient())],[AppFramework.actHello()],[AppFramework.qryDocs()]));
  SC$1.getMainDoc=Lazy.Create(function()
  {
   WcSplitter.init(Runtime.Curried(AppFramework.horizontal,5),Runtime.Curried(AppFramework.vertical,5));
   WcTabStrip.init().f();
   return AppFramework.mainDoc();
  });
  SC$1.createSplitterM=(p=(cache=new Dictionary.New$5(),[[function(v)
  {
   var res;
   res=null;
   return cache.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($1)
  {
   return function($2)
   {
    return store$12($1,$2);
   };
  }],function()
  {
   cache.Clear();
  }]),(store=p[0],[(store$1=store[1],(checkO=store[0],function(p$6)
  {
   var o$1,x$1;
   o$1=checkO(p$6);
   return o$1==null?(x$1=LayoutEngineModule.createSplitter.apply(null,p$6),(store$1(p$6))(x$1)):o$1.$0;
  })),p[1]]))[0];
  SC$1.createButtonM=(p$1=(cache$1=new Dictionary.New$5(),[[function(v)
  {
   var res;
   res=null;
   return cache$1.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($1)
  {
   return function($2)
   {
    return store$13($1,$2);
   };
  }],function()
  {
   cache$1.Clear();
  }]),(store$2=p$1[0],[(store$3=store$2[1],(checkO$1=store$2[0],function(p$6)
  {
   var o$1,x$1;
   o$1=checkO$1(p$6);
   return o$1==null?(x$1=LayoutEngineModule.createButton.apply(null,p$6),(store$3(p$6))(x$1)):o$1.$0;
  })),p$1[1]]))[0];
  SC$1.createInputM=(p$2=(cache$2=new Dictionary.New$5(),[[function(v)
  {
   var res;
   res=null;
   return cache$2.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($1)
  {
   return function($2)
   {
    return store$14($1,$2);
   };
  }],function()
  {
   cache$2.Clear();
  }]),(store$4=p$2[0],[(store$5=store$4[1],(checkO$2=store$4[0],function(p$6)
  {
   var o$1,x$1;
   o$1=checkO$2(p$6);
   return o$1==null?(x$1=LayoutEngineModule.createInput.apply(null,p$6),(store$5(p$6))(x$1)):o$1.$0;
  })),p$2[1]]))[0];
  SC$1.createTextAreaM=(p$3=(cache$3=new Dictionary.New$5(),[[function(v)
  {
   var res;
   res=null;
   return cache$3.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($1)
  {
   return function($2)
   {
    return store$15($1,$2);
   };
  }],function()
  {
   cache$3.Clear();
  }]),(store$6=p$3[0],[(store$7=store$6[1],(checkO$3=store$6[0],function(p$6)
  {
   var o$1,x$1;
   o$1=checkO$3(p$6);
   return o$1==null?(x$1=LayoutEngineModule.createTextArea.apply(null,p$6),(store$7(p$6))(x$1)):o$1.$0;
  })),p$3[1]]))[0];
  SC$1.createElementM=(p$4=(cache$4=new Dictionary.New$5(),[[function(v)
  {
   var res;
   res=null;
   return cache$4.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($1)
  {
   return function($2)
   {
    return store$16($1,$2);
   };
  }],function()
  {
   cache$4.Clear();
  }]),(store$8=p$4[0],[(store$9=store$8[1],(checkO$4=store$8[0],function(p$6)
  {
   var o$1,x$1;
   o$1=checkO$4(p$6);
   return o$1==null?(x$1=LayoutEngineModule.createElement.apply(null,p$6),(store$9(p$6))(x$1)):o$1.$0;
  })),p$4[1]]))[0];
  SC$1.createDocM=(p$5=(cache$5=new Dictionary.New$5(),[[function(v)
  {
   var res;
   res=null;
   return cache$5.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($1)
  {
   return function($2)
   {
    return store$17($1,$2);
   };
  }],function()
  {
   cache$5.Clear();
  }]),(store$10=p$5[0],[(store$11=store$10[1],(checkO$5=store$10[0],function(p$6)
  {
   var o$1,x$1;
   o$1=checkO$5(p$6);
   return o$1==null?(x$1=LayoutEngineModule.createDoc.apply(null,p$6),(store$11(p$6))(x$1)):o$1.$0;
  })),p$5[1]]))[0];
  o=AppFramework.tryGetPlugIn("AppFramework");
  o==null?void 0:(plg=o.$0,a=PlugIn.New(plg.plgName,plg.plgVars,plg.plgViews,plg.plgDocs,plg.plgActions.concat([AppFramework.newActF("AddLayout",{
   $:2,
   $0:function(n)
   {
    return function(l)
    {
     return LayoutEngineModule.addNewLayout(n,l);
    };
   },
   $1:"[Name]",
   $2:"[Layout]"
  })]),plg.plgQueries),AppFramework.plugIns().Append(a));
 };
 LayoutEngine_Templates.wcompsplitterver=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"wcompsplitterver"
  },function()
  {
   return $.parseHTML("<div ws-onafterrender=\"AfterRender\" style=\"display: grid; \r\n                grid-gap: 5px; \r\n                box-sizing: border-box; \r\n                grid-template-areas: 'one two'; \r\n                grid-template-rows   :100%; \r\n                overflow: hidden; \r\n                grid-template-columns: ${PartSizes}\">\r\n        <slot></slot>\r\n        <slot name=\"splitter\"> <div style=\"grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\"></div> </slot>\r\n        <style>\r\n            ::slotted(*) {\r\n                display: grid;\r\n                height : 100%;\r\n                width  : 100%;\r\n                overflow: hidden;\r\n            }\r\n            ::slotted(*:nth-child(2)) {\r\n                grid-area: two;\r\n            }\r\n            ::slotted(*[slot=\"splitter\"]) {\r\n                grid-column:2; grid-row:1 / 1\r\n                cursor: column-resize; \r\n                z-index: 3; \r\n                background-color: #eef ; \r\n                width: ${Gap}; \r\n                margin-left:-${Gap}\r\n            }\r\n        </style>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"wcompsplitterver"
  },function()
  {
   return $.parseHTML("<div ws-onafterrender=\"AfterRender\" style=\"display: grid; \r\n                grid-gap: 5px; \r\n                box-sizing: border-box; \r\n                grid-template-areas: 'one two'; \r\n                grid-template-rows   :100%; \r\n                overflow: hidden; \r\n                grid-template-columns: ${PartSizes}\">\r\n        <slot></slot>\r\n        <slot name=\"splitter\"> <div style=\"grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\"></div> </slot>\r\n        <style>\r\n            ::slotted(*) {\r\n                display: grid;\r\n                height : 100%;\r\n                width  : 100%;\r\n                overflow: hidden;\r\n            }\r\n            ::slotted(*:nth-child(2)) {\r\n                grid-area: two;\r\n            }\r\n            ::slotted(*[slot=\"splitter\"]) {\r\n                grid-column:2; grid-row:1 / 1\r\n                cursor: column-resize; \r\n                z-index: 3; \r\n                background-color: #eef ; \r\n                width: ${Gap}; \r\n                margin-left:-${Gap}\r\n            }\r\n        </style>\r\n    </div>");
  });
 };
 LayoutEngine_Templates.wcompsplitterhor=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"wcompsplitterhor"
  },function()
  {
   return $.parseHTML("<div ws-onafterrender=\"AfterRender\" style=\"display: grid;\r\n                grid-gap: 5px; \r\n                box-sizing: border-box; \r\n                grid-template-areas: 'one' 'two'; \r\n                grid-template-columns:100%; \r\n                overflow: hidden; \r\n                grid-template-rows   : ${PartSizes}\">\r\n         <slot></slot>\r\n        <slot name=\"splitter\">  <div style=\"grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\"></div> </slot>\r\n        <style>\r\n            ::slotted(*) {\r\n                display: grid;\r\n                height : 100%;\r\n                width  : 100%;\r\n                overflow: hidden;\r\n            }\r\n            ::slotted(*:nth-child(2)) {\r\n                grid-area: two;\r\n            }\r\n            ::slotted(*[slot=\"splitter\"]) {\r\n                grid-row:2; grid-column:1 / 1 ; \r\n                cursor: row-resize; \r\n                z-index: 3; \r\n                background-color: #eef ; \r\n                height: ${Gap}; \r\n                margin-top :-${Gap}\r\n            }\r\n        </style>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"wcompsplitterhor"
  },function()
  {
   return $.parseHTML("<div ws-onafterrender=\"AfterRender\" style=\"display: grid;\r\n                grid-gap: 5px; \r\n                box-sizing: border-box; \r\n                grid-template-areas: 'one' 'two'; \r\n                grid-template-columns:100%; \r\n                overflow: hidden; \r\n                grid-template-rows   : ${PartSizes}\">\r\n         <slot></slot>\r\n        <slot name=\"splitter\">  <div style=\"grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\"></div> </slot>\r\n        <style>\r\n            ::slotted(*) {\r\n                display: grid;\r\n                height : 100%;\r\n                width  : 100%;\r\n                overflow: hidden;\r\n            }\r\n            ::slotted(*:nth-child(2)) {\r\n                grid-area: two;\r\n            }\r\n            ::slotted(*[slot=\"splitter\"]) {\r\n                grid-row:2; grid-column:1 / 1 ; \r\n                cursor: row-resize; \r\n                z-index: 3; \r\n                background-color: #eef ; \r\n                height: ${Gap}; \r\n                margin-top :-${Gap}\r\n            }\r\n        </style>\r\n    </div>");
  });
 };
 LayoutEngine_Templates.appframework=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"appframework"
  },function()
  {
   return $.parseHTML("<div style=\"height: calc(100vh - 4px); width: calc(100vw - 4px) \" class=\"relative\">\r\n        <wcomp-splitter value=\"0\" min=\"0\" max=\"100\">\r\n            <div><button ws-onclick=\"GoClient\">${MainDoc}</button></div>\r\n            <div ws-hole=\"MainClient\"></div>\r\n        </wcomp-splitter>\r\n        <style style=\"display: none\">\r\n            .Hidden     { display   : none         }\r\n            table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n            td input.form-control { \r\n                padding    : 0px; \r\n                font-family: monospace;\r\n                font-size  :   small;\r\n                margin-top :   0px;\r\n                margin-left: -2px;\r\n                width      : 100%\r\n            }\r\n            td select {\r\n                font-size : smaller;\r\n                max-width : 8ch;\r\n            }\r\n            xtextarea {\r\n               resize : none;\r\n            }\r\n            .tab-content {\r\n                overflow: hidden\r\n            }\r\n            .tab-children {\r\n                position:relative;\r\n            }\r\n            .tab-children>div>* {\r\n                position:absolute;\r\n                height: 100%;\r\n                width:  100%;\r\n                display: grid;\r\n            }\r\n            .relative {\r\n                position:relative;\r\n            }\r\n            .relative>* {\r\n                position:absolute;\r\n                height: 100%;\r\n                width:  100%;\r\n                display: grid;\r\n            }\r\n            table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n            table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n            table.table-striped    tbody input              { background: transparent; border: none}\r\n            table.table-striped    tbody select             { background: transparent; border: none}\r\n            table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n            table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n            table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n            table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n            table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n            table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                       border-bottom: solid thin blue     ; } \r\n            table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n            table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n            thead { color: gray }\r\n            h3 { \r\n                color: gray;\r\n                line-height: 1em;\r\n            }\r\n            button       { border: solid thin transparent ; border-radius: 3px; }\r\n            button:hover { border: solid thin blue }\r\n            .indenter { position  : absolute; \r\n                        top:0px; bottom:0px; left:0px; \r\n                        background: white; color:white;\r\n                        border-right: gray thin dotted;\r\n                        }\r\n            body {\r\n                color      : #333;\r\n                font-size  : small;\r\n                font-family: monospace;\r\n                line-height: 1.2;\r\n            }\r\n            .mainTitle {  \r\n                font-size: 48px;\r\n                font-weight: 500;\r\n                color: gray;\r\n                margin-top: -12px;\r\n            }\r\n            .CodeMirror {\r\n                height: 100%;\r\n            }\r\n            \r\n          \r\n            body { margin: 0px }     \r\n                 \r\n            div textarea {\r\n                font-family     : monospace;\r\n            }\r\n            .code-editor-list-tile {\r\n                white-space     : nowrap; \r\n                border-style    : solid none none;\r\n                border-color    : white;\r\n                border-width    : 1px;\r\n                background-color: #D8D8D8;\r\n                display         : flex;\r\n            }\r\n            .code-editor-list-text{\r\n                padding         : 1px 10px 1px 5px;\r\n                overflow        : hidden;\r\n                text-overflow   : ellipsis;\r\n                white-space     : nowrap;\r\n                flex            : 1;\r\n            }\r\n            \r\n            .code-editor-list-tile span.node.ErrorMsg {\r\n                background-color: red\r\n            }\r\n            .code-editor-list-tile span.node.expanded::before {\r\n                content: \"-\"\r\n            }\r\n            .code-editor-list-tile span.node.collapsed::before {\r\n                content: \"+\"\r\n            }\r\n            .code-editor-list-tile.direct-predecessor {\r\n                font-weight     : bold;\r\n                color           : blue;\r\n            }\r\n            .code-editor-list-tile.indirect-predecessor {\r\n                color           : blue;\r\n            }\r\n            .code-editor-list-tile.included-predecessor {\r\n                color           : chocolate;\r\n            }\r\n            .code-editor-list-tile.selected {\r\n                background-color: #77F;\r\n                color           : white;\r\n            }\r\n            .code-editor-list-tile.codeSnippet {\r\n                text-decoration: underline\r\n            }\r\n            .code-editor-list-tile:hover {\r\n                background      : lightgray;\r\n            }\r\n            .code-editor-list-tile.selected:hover {\r\n                background      : blue;\r\n            }\r\n            .code-editor-list-tile>.predecessor {\r\n                font-weight     : bold;\r\n                border-style    : inset;\r\n                border-width    : 1px;\r\n                text-align      : center;\r\n                color           : transparent;\r\n            }\r\n            .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                color           : blue;\r\n            }\r\n            \r\n            .CodeMirror { height: 100%; }\r\n            \r\n            .node {\r\n                background-color: white; \r\n                width           : 2ch; \r\n                color           : #A03; \r\n                font-weight     : bold; \r\n                text-align      : center;\r\n                font-family     : arial;\r\n            }\r\n            .Warning { text-decoration: underline lightblue } \r\n            .Error   { text-decoration: underline red       } \r\n            \r\n        </style>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"appframework"
  },function()
  {
   return $.parseHTML("<div style=\"height: calc(100vh - 4px); width: calc(100vw - 4px) \" class=\"relative\">\r\n        <wcomp-splitter value=\"0\" min=\"0\" max=\"100\">\r\n            <div><button ws-onclick=\"GoClient\">${MainDoc}</button></div>\r\n            <div ws-hole=\"MainClient\"></div>\r\n        </wcomp-splitter>\r\n        <style style=\"display: none\">\r\n            .Hidden     { display   : none         }\r\n            table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n            td input.form-control { \r\n                padding    : 0px; \r\n                font-family: monospace;\r\n                font-size  :   small;\r\n                margin-top :   0px;\r\n                margin-left: -2px;\r\n                width      : 100%\r\n            }\r\n            td select {\r\n                font-size : smaller;\r\n                max-width : 8ch;\r\n            }\r\n            xtextarea {\r\n               resize : none;\r\n            }\r\n            .tab-content {\r\n                overflow: hidden\r\n            }\r\n            .tab-children {\r\n                position:relative;\r\n            }\r\n            .tab-children>div>* {\r\n                position:absolute;\r\n                height: 100%;\r\n                width:  100%;\r\n                display: grid;\r\n            }\r\n            .relative {\r\n                position:relative;\r\n            }\r\n            .relative>* {\r\n                position:absolute;\r\n                height: 100%;\r\n                width:  100%;\r\n                display: grid;\r\n            }\r\n            table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n            table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n            table.table-striped    tbody input              { background: transparent; border: none}\r\n            table.table-striped    tbody select             { background: transparent; border: none}\r\n            table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n            table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n            table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n            table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n            table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n            table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                       border-bottom: solid thin blue     ; } \r\n            table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n            table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n            thead { color: gray }\r\n            h3 { \r\n                color: gray;\r\n                line-height: 1em;\r\n            }\r\n            button       { border: solid thin transparent ; border-radius: 3px; }\r\n            button:hover { border: solid thin blue }\r\n            .indenter { position  : absolute; \r\n                        top:0px; bottom:0px; left:0px; \r\n                        background: white; color:white;\r\n                        border-right: gray thin dotted;\r\n                        }\r\n            body {\r\n                color      : #333;\r\n                font-size  : small;\r\n                font-family: monospace;\r\n                line-height: 1.2;\r\n            }\r\n            .mainTitle {  \r\n                font-size: 48px;\r\n                font-weight: 500;\r\n                color: gray;\r\n                margin-top: -12px;\r\n            }\r\n            .CodeMirror {\r\n                height: 100%;\r\n            }\r\n            \r\n          \r\n            body { margin: 0px }     \r\n                 \r\n            div textarea {\r\n                font-family     : monospace;\r\n            }\r\n            .code-editor-list-tile {\r\n                white-space     : nowrap; \r\n                border-style    : solid none none;\r\n                border-color    : white;\r\n                border-width    : 1px;\r\n                background-color: #D8D8D8;\r\n                display         : flex;\r\n            }\r\n            .code-editor-list-text{\r\n                padding         : 1px 10px 1px 5px;\r\n                overflow        : hidden;\r\n                text-overflow   : ellipsis;\r\n                white-space     : nowrap;\r\n                flex            : 1;\r\n            }\r\n            \r\n            .code-editor-list-tile span.node.ErrorMsg {\r\n                background-color: red\r\n            }\r\n            .code-editor-list-tile span.node.expanded::before {\r\n                content: \"-\"\r\n            }\r\n            .code-editor-list-tile span.node.collapsed::before {\r\n                content: \"+\"\r\n            }\r\n            .code-editor-list-tile.direct-predecessor {\r\n                font-weight     : bold;\r\n                color           : blue;\r\n            }\r\n            .code-editor-list-tile.indirect-predecessor {\r\n                color           : blue;\r\n            }\r\n            .code-editor-list-tile.included-predecessor {\r\n                color           : chocolate;\r\n            }\r\n            .code-editor-list-tile.selected {\r\n                background-color: #77F;\r\n                color           : white;\r\n            }\r\n            .code-editor-list-tile.codeSnippet {\r\n                text-decoration: underline\r\n            }\r\n            .code-editor-list-tile:hover {\r\n                background      : lightgray;\r\n            }\r\n            .code-editor-list-tile.selected:hover {\r\n                background      : blue;\r\n            }\r\n            .code-editor-list-tile>.predecessor {\r\n                font-weight     : bold;\r\n                border-style    : inset;\r\n                border-width    : 1px;\r\n                text-align      : center;\r\n                color           : transparent;\r\n            }\r\n            .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                color           : blue;\r\n            }\r\n            \r\n            .CodeMirror { height: 100%; }\r\n            \r\n            .node {\r\n                background-color: white; \r\n                width           : 2ch; \r\n                color           : #A03; \r\n                font-weight     : bold; \r\n                text-align      : center;\r\n                font-family     : arial;\r\n            }\r\n            .Warning { text-decoration: underline lightblue } \r\n            .Error   { text-decoration: underline red       } \r\n            \r\n        </style>\r\n    </div>");
  });
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("docName = "+Utils.prettyPrint($1.docName))+"; "+("docDoc = "+LayoutEngine_GeneratedPrintf.p($1.docDoc))+"}";
 };
 LayoutEngine_GeneratedPrintf.p=function($1)
 {
  return $1.$==5?"FunDoc5 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+", "+Utils.prettyPrint($1.$4)+", "+Utils.prettyPrint($1.$5)+")":$1.$==4?"FunDoc4 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+", "+Utils.prettyPrint($1.$4)+")":$1.$==3?"FunDoc3 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+")":$1.$==2?"FunDoc2 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":$1.$==1?"FunDoc1 (<fun>, "+Utils.prettyPrint($1.$1)+")":"LazyDoc "+Utils.prettyPrint($1.$0);
 };
 LayoutEngine_Templates.tile=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"tile"
  },function()
  {
   return $.parseHTML("<div>\r\n                                        <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" ws-ondrag=\"Drag\" ws-ondragover=\"DragOver\" ws-ondrop=\"Drop\">\r\n                                       <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                                       <div class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\">${Name}</div>\r\n                                       <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                                   </div>\r\n                           \r\n                                    </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"tile"
  },function()
  {
   return $.parseHTML("<div>\r\n                                        <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" ws-ondrag=\"Drag\" ws-ondragover=\"DragOver\" ws-ondrop=\"Drop\">\r\n                                       <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                                       <div class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\">${Name}</div>\r\n                                       <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                                   </div>\r\n                           \r\n                                    </div>");
  });
 };
 LayoutEngine_Templates.actiondisabled=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"actiondisabled"
  },function()
  {
   return $.parseHTML("<button ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\" disabled=\"\">${Name}</button>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"actiondisabled"
  },function()
  {
   return $.parseHTML("<button ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\" disabled=\"\">${Name}</button>");
  });
 };
 LayoutEngine_Templates.action=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"action"
  },function()
  {
   return $.parseHTML("<button ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\">${Name}</button>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"action"
  },function()
  {
   return $.parseHTML("<button ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\">${Name}</button>");
  });
 };
 LayoutEngine_Templates.namevalue=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"namevalue"
  },function()
  {
   return $.parseHTML("<div class=\"input-group\">\r\n                                                            <span class=\"input-group-addon\">${Name}:</span>\r\n                                                            <span class=\"input-group-addon\">${Value}</span>\r\n                                                        </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"namevalue"
  },function()
  {
   return $.parseHTML("<div class=\"input-group\">\r\n                                                            <span class=\"input-group-addon\">${Name}:</span>\r\n                                                            <span class=\"input-group-addon\">${Value}</span>\r\n                                                        </div>");
  });
 };
 LayoutEngine_Templates.namevalueinput=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"namevalueinput"
  },function()
  {
   return $.parseHTML("<div class=\"input-group\">\r\n                                                            <span class=\"input-group-addon\">${Name}:</span>\r\n                                                            <textarea class=\"form-control\" id=\"\" placeholder=\"Value...\" ws-var=\"Value\" spellcheck=\"false\">\r\n                                                        </textarea></div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"namevalueinput"
  },function()
  {
   return $.parseHTML("<div class=\"input-group\">\r\n                                                            <span class=\"input-group-addon\">${Name}:</span>\r\n                                                            <textarea class=\"form-control\" id=\"\" placeholder=\"Value...\" ws-var=\"Value\" spellcheck=\"false\">\r\n                                                        </textarea></div>");
  });
 };
 LayoutEngine_Templates.fixedsplitterhor=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"fixedsplitterhor"
  },function()
  {
   return $.parseHTML("<div style=\"display: grid; \r\n          grid-gap: 0px; \r\n          box-sizing: border-box; \r\n          height: 100%;\r\n          width : 100%;\r\n          grid-template-areas: 'one' 'two'; \r\n          grid-template-columns:100%; \r\n          overflow: hidden; \r\n          grid-template-rows   : ${PartSizes}\">\r\n  <div ws-hole=\"First\" style=\"grid-area: one; \" class=\"relative\"></div>\r\n  <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\"></div>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"fixedsplitterhor"
  },function()
  {
   return $.parseHTML("<div style=\"display: grid; \r\n          grid-gap: 0px; \r\n          box-sizing: border-box; \r\n          height: 100%;\r\n          width : 100%;\r\n          grid-template-areas: 'one' 'two'; \r\n          grid-template-columns:100%; \r\n          overflow: hidden; \r\n          grid-template-rows   : ${PartSizes}\">\r\n  <div ws-hole=\"First\" style=\"grid-area: one; \" class=\"relative\"></div>\r\n  <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\"></div>\r\n    </div>");
  });
 };
 LayoutEngine_Templates.fixedsplitterver=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"fixedsplitterver"
  },function()
  {
   return $.parseHTML("<div style=\"display: grid; \r\n               grid-gap: 0px; \r\n               box-sizing: border-box; \r\n               height: 100%;\r\n               width : 100%;\r\n               grid-template-areas: 'one two'; \r\n               grid-template-rows   :100%; \r\n               overflow: hidden; \r\n               grid-template-columns: ${PartSizes}\">\r\n       <div ws-hole=\"First\" style=\"grid-area: one; \" class=\"relative\"></div>\r\n       <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\"></div>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"fixedsplitterver"
  },function()
  {
   return $.parseHTML("<div style=\"display: grid; \r\n               grid-gap: 0px; \r\n               box-sizing: border-box; \r\n               height: 100%;\r\n               width : 100%;\r\n               grid-template-areas: 'one two'; \r\n               grid-template-rows   :100%; \r\n               overflow: hidden; \r\n               grid-template-columns: ${PartSizes}\">\r\n       <div ws-hole=\"First\" style=\"grid-area: one; \" class=\"relative\"></div>\r\n       <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\"></div>\r\n    </div>");
  });
 };
 LayoutEngine_Templates.appfwkclient=function(h)
 {
  var n;
  n={
   $:1,
   $0:"appfwkclient"
  };
  LayoutEngine_Templates.fixedsplitterhor();
  LayoutEngine_Templates.fixedsplitterver();
  return h?Templates.GetOrLoadTemplate("appframework",n,function()
  {
   return $.parseHTML("<div>\r\n        <ws-fixedsplitterhor>\r\n            <partsizes>55px calc(100% - 55px)</partsizes>\r\n            <first>\r\n                <span style=\"display: grid;\r\n                      grid-template-columns: 30% 20% 20% 10%;\r\n                      grid-gap: 25px;\r\n                    \">\r\n                    <div class=\"mainTitle\">AppFramework</div>\r\n                </span>\r\n            </first>\r\n            <second>\r\n                    <ws-fixedsplitterver>\r\n                        <partsizes>calc(100% - 150px) 150px</partsizes>\r\n                        <first>\r\n                            <wcomp-splitter vertical=\"\" value=\"18\" max=\"100\">\r\n                                <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\">\r\n                                    \r\n                                </div></div>\r\n                                <wcomp-splitter vertical=\"\" value=\"100\" min=\"30\" max=\"100\">\r\n                                    <ws-fixedsplitterhor>\r\n                                        <partsizes>32px calc(100% - 32px)</partsizes>\r\n                                        <first>\r\n                                            <div>\r\n                                                <div class=\"input-group\">\r\n                                                    <span class=\"input-group-addon\">name:</span>\r\n                                                    <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </first>\r\n                                        <second>\r\n                                            <div style=\"overflow:auto\">\r\n                                                <div>\r\n                                                    <div>Docs:</div>\r\n                                                    <div ws-hole=\"Docs\" style=\"overflow:auto\"></div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Vars:</div>\r\n                                                    <div ws-hole=\"Vars\" style=\"overflow:auto\">\r\n                                                            \r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Views:</div>\r\n                                                    <div ws-hole=\"Views\" style=\"overflow:auto\">\r\n                                                        \r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Queries:</div>\r\n                                                    <div ws-hole=\"Queries\" style=\"overflow:auto\"></div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </second>\r\n                                    </ws-fixedsplitterhor>\r\n                                    <wcomp-tabstrip>\r\n                                        <div tabname=\"Properties\">\r\n                                            <div>\r\n                                                <table style=\"border-spacing:0px\">\r\n                                                    <thead>\r\n                                                        <th style=\"width: 30%  \">Name</th>\r\n                                                        <th style=\"width: 70% \">Value</th>\r\n                                                    </thead>\r\n                                                    <tbody ws-hole=\"Properties\"></tbody>\r\n                                                </table>\r\n                                                <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </wcomp-tabstrip>\r\n                                </wcomp-splitter>\r\n                            </wcomp-splitter>\r\n                        </first>\r\n                        <second>\r\n                            <div style=\"\r\n                                overflow: hidden;\r\n                                display: grid;\r\n                                grid-template-columns: 100%;\r\n                                grid-template-rows: repeat(15, calc(100% / 15));\r\n                                bxackground-color: #eee;\r\n                                box-sizing: border-box;\r\n                                padding : 5px;\r\n                                grid-gap: 5px;\r\n                                margin-right: 21px;\r\n                           \" class=\"absolute\" ws-hole=\"Actions\">\r\n                                \r\n                                \r\n                            </div>\r\n                        </second>\r\n                    </ws-fixedsplitterver>\r\n            </second>\r\n        </ws-fixedsplitterhor>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",n,function()
  {
   return $.parseHTML("<div>\r\n        <ws-fixedsplitterhor>\r\n            <partsizes>55px calc(100% - 55px)</partsizes>\r\n            <first>\r\n                <span style=\"display: grid;\r\n                      grid-template-columns: 30% 20% 20% 10%;\r\n                      grid-gap: 25px;\r\n                    \">\r\n                    <div class=\"mainTitle\">AppFramework</div>\r\n                </span>\r\n            </first>\r\n            <second>\r\n                    <ws-fixedsplitterver>\r\n                        <partsizes>calc(100% - 150px) 150px</partsizes>\r\n                        <first>\r\n                            <wcomp-splitter vertical=\"\" value=\"18\" max=\"100\">\r\n                                <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\">\r\n                                    \r\n                                </div></div>\r\n                                <wcomp-splitter vertical=\"\" value=\"100\" min=\"30\" max=\"100\">\r\n                                    <ws-fixedsplitterhor>\r\n                                        <partsizes>32px calc(100% - 32px)</partsizes>\r\n                                        <first>\r\n                                            <div>\r\n                                                <div class=\"input-group\">\r\n                                                    <span class=\"input-group-addon\">name:</span>\r\n                                                    <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </first>\r\n                                        <second>\r\n                                            <div style=\"overflow:auto\">\r\n                                                <div>\r\n                                                    <div>Docs:</div>\r\n                                                    <div ws-hole=\"Docs\" style=\"overflow:auto\"></div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Vars:</div>\r\n                                                    <div ws-hole=\"Vars\" style=\"overflow:auto\">\r\n                                                            \r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Views:</div>\r\n                                                    <div ws-hole=\"Views\" style=\"overflow:auto\">\r\n                                                        \r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Queries:</div>\r\n                                                    <div ws-hole=\"Queries\" style=\"overflow:auto\"></div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </second>\r\n                                    </ws-fixedsplitterhor>\r\n                                    <wcomp-tabstrip>\r\n                                        <div tabname=\"Properties\">\r\n                                            <div>\r\n                                                <table style=\"border-spacing:0px\">\r\n                                                    <thead>\r\n                                                        <th style=\"width: 30%  \">Name</th>\r\n                                                        <th style=\"width: 70% \">Value</th>\r\n                                                    </thead>\r\n                                                    <tbody ws-hole=\"Properties\"></tbody>\r\n                                                </table>\r\n                                                <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </wcomp-tabstrip>\r\n                                </wcomp-splitter>\r\n                            </wcomp-splitter>\r\n                        </first>\r\n                        <second>\r\n                            <div style=\"\r\n                                overflow: hidden;\r\n                                display: grid;\r\n                                grid-template-columns: 100%;\r\n                                grid-template-rows: repeat(15, calc(100% / 15));\r\n                                bxackground-color: #eee;\r\n                                box-sizing: border-box;\r\n                                padding : 5px;\r\n                                grid-gap: 5px;\r\n                                margin-right: 21px;\r\n                           \" class=\"absolute\" ws-hole=\"Actions\">\r\n                                \r\n                                \r\n                            </div>\r\n                        </second>\r\n                    </ws-fixedsplitterver>\r\n            </second>\r\n        </ws-fixedsplitterhor>\r\n    </div>");
  });
 };
}());

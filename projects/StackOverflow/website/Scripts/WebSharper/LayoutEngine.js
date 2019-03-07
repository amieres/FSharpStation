(function()
{
 "use strict";
 var Global,FsRoot,Library,String,ParseO,LibraryJS,REGEX,Hoverable,Hoverable$1,ResizeObserver,WebSharper,Obj,WebComponent,WcTabStrip,WcTabStripT,WcSplitter,WcSplitterT,AppFramework,PlugInVar,PlugInView,PlugInDoc,PlugInAction,PlugInQuery,PlugIn,LayoutEngine,LayoutEngineModule,Measures,Layout,SC$1,LayoutEngine_Templates,GeneratedPrintf,LayoutEngine_GeneratedPrintf,Strings,Slice,Seq,Unchecked,CancellationTokenSource,Concurrency,Utils,console,Arrays,IntelliFactory,Runtime,UI,DomUtility,Doc,List,View,AttrModule,AttrProxy,Var$1,Node,Operators,Client,Templates,Reflect,Object,FromView,Templating,Runtime$1,Server,ProviderBuilder,Handler,TemplateInstance,Math,System,Guid,Lazy,DateUtil,Numeric,ListModel,Collections,Dictionary;
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
 Measures=LayoutEngineModule.Measures=LayoutEngineModule.Measures||{};
 Layout=LayoutEngineModule.Layout=LayoutEngineModule.Layout||{};
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
 Utils=WebSharper&&WebSharper.Utils;
 console=Global.console;
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
 Object=Global.Object;
 FromView=UI&&UI.FromView;
 Templating=UI&&UI.Templating;
 Runtime$1=Templating&&Templating.Runtime;
 Server=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 Math=Global.Math;
 System=Global.System;
 Guid=System&&System.Guid;
 Lazy=WebSharper&&WebSharper.Lazy;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 ListModel=UI&&UI.ListModel;
 Collections=WebSharper&&WebSharper.Collections;
 Dictionary=Collections&&Collections.Dictionary;
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
 Hoverable$1.Content$284$81=Runtime.Curried3(function(e,$1,$2)
 {
  return DomUtility.RemoveClass(e.elt,"hovering");
 });
 Hoverable$1.get_Attributes$280$69=Runtime.Curried3(function(_this,$1,$2)
 {
  return _this.hover.Set(false);
 });
 Hoverable$1.get_Attributes$279$69=Runtime.Curried3(function(_this,$1,$2)
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
 WcTabStrip.tabStrip$426$64=function(i,selected)
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
 AppFramework.addPlugIn=function(p)
 {
  AppFramework.plugIns().Append(p);
  AppFramework.mainDocV().Set(AppFramework.mainDocV().Get());
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
 AppFramework.tryGetQry=function(plgName,qryName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:Arrays.tryFind(function(qry)
  {
   return qry.qryName===qryName;
  },o.$0.plgQueries);
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
 AppFramework.vertical$798$39=function(mouseDown)
 {
  return function(te)
  {
   mouseDown(te.Event);
  };
 };
 AppFramework.vertical$797$39=Global.id;
 AppFramework.vertical$796$39=Global.id;
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
 AppFramework.horizontal$790$39=function(mouseDown)
 {
  return function(te)
  {
   mouseDown(te.Event);
  };
 };
 AppFramework.horizontal$789$39=Global.id;
 AppFramework.horizontal$788$39=Global.id;
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
 AppFramework.mainDoc$779$42=function()
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
     return plg.plgName===mainDoc||plg.plgName+"."+doc.docName===mainDoc;
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
 AppFramework.renderQueries$745$39=function(qry)
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
 AppFramework.renderActions$734$51=function(act)
 {
  return function(ev)
  {
   AppFramework.callFunction(ev,null,act.actFunction);
  };
 };
 AppFramework.renderActions$730$51=function(act)
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
 AppFramework.renderDocs$708$39=function(doc)
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
 AppFramework.renderPlugIns$670$35=function(name)
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
 AppFramework.splitName=function(lytNm)
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
 Measures=LayoutEngineModule.Measures=Runtime.Class({
  toString:function()
  {
   return this.$==1?((((Runtime.Curried(function($1,$2,$3,$4)
   {
    return $1(Global.String($2)+"-"+Global.String($3)+"-"+Global.String($4));
   },4))(Global.id))(Operators.toInt(this.$0)))(Operators.toInt(this.$1)))(Operators.toInt(this.$2)):Global.String(Operators.toInt(this.$1?this.$0:-this.$0));
  }
 },null,Measures);
 Layout.createLayoutDefinitions=function(nameBase,node)
 {
  var dir,meas,p,name1,def1,p$1,name2,def2,t,t$1;
  return node.$==1?(dir=node.$0.$0,(meas=node.$0.$1,(p=Layout.createLayoutDefinitions(nameBase+"_1",node.$0.$2),(name1=p[0],(def1=p[1],(p$1=Layout.createLayoutDefinitions(nameBase+"_2",node.$0.$3),(name2=p$1[0],(def2=p$1[1],[nameBase,Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.append([Strings.concat(" ",List.ofArray([nameBase,dir?"vertical":"horizontal",Global.String(meas),name1,name2]))],Seq.delay(function()
   {
    return Seq.append(def1,Seq.delay(function()
    {
     return def2;
    }));
   }));
  }))])))))))):(t=node.$0,!Unchecked.Equals(t,null)&&t.length===0)?["___",[]]:(t$1=node.$0,!Unchecked.Equals(t$1,null)&&t$1.length===1)?[Arrays.get(node.$0,0),[]]:[nameBase,[nameBase+" div \"\" "+Strings.concat(" ",node.$0)]];
 };
 Layout.extractNodes=function(lyt)
 {
  var m,m$1;
  function checkSplitter(dir,m$2,one,two)
  {
   var $1,$2,$3,t,t$1,t$2;
   $1=Layout.extractNodes(one);
   $2=Layout.extractNodes(two);
   return($1.$==0?(t=$1.$0,!Unchecked.Equals(t,null)&&t.length===0)?($3=$2,true):$2.$==0?(t$1=$2.$0,!Unchecked.Equals(t$1,null)&&t$1.length===0)?($3=$1,true):($3=[$1,$2],false):($3=[$1,$2],false):$2.$==0?(t$2=$2.$0,!Unchecked.Equals(t$2,null)&&t$2.length===0)?($3=$1,true):($3=[$1,$2],false):($3=[$1,$2],false))?$3:{
    $:1,
    $0:{
     $:0,
     $0:dir,
     $1:m$2,
     $2:$3[0],
     $3:$3[1]
    }
   };
  }
  m=Layout.horizontalSplit(lyt);
  return m!=null&&m.$==1?checkSplitter(false,m.$0[2],m.$0[0],m.$0[1]):(m$1=Layout.verticalSplit(lyt),m$1!=null&&m$1.$==1?checkSplitter(true,m$1.$0[2],m$1.$0[0],m$1.$0[1]):{
   $:0,
   $0:Layout.cleanSpaces(lyt)
  });
 };
 Layout.cleanSpaces=function(lyt)
 {
  return Arrays.filter(function(a)
  {
   var $1;
   return!($1=(ParseO.Int())(a),$1!=null&&$1.$==1);
  },Strings.SplitStrings(Strings.concat(" ",lyt),[" "],1));
 };
 Layout.verticalSplit=function(lyt)
 {
  var lines,o,o$1,o$2,i,$1,l,r,x,v;
  function c(i$1,l$1)
  {
   var $2,a,t;
   return(a=LibraryJS.REGEX$1("^ *\\|+ *$","",l$1),a!=null&&a.$==1&&(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1))?{
    $:1,
    $0:[i$1,l$1.indexOf("|")]
   }:null;
  }
  function g(y)
  {
   return Unchecked.Equals(null,y);
  }
  function g$1(y)
  {
   return Unchecked.Equals(null,y);
  }
  lines=Layout.transpose(lyt);
  o=(o$1=(o$2=Seq.tryHead(Seq.sortBy(function(t)
  {
   return t[1];
  },Seq.choose(function($2)
  {
   return c($2[0],$2[1]);
  },Seq.indexed(lines)))),o$2==null?null:{
   $:1,
   $0:o$2.$0[0]
  }),o$1==null?null:{
   $:1,
   $0:(i=o$1.$0,[Layout.transpose(Slice.array(lines,null,{
    $:1,
    $0:i-1
   })),Layout.transpose(Slice.array(lines,{
    $:1,
    $0:i+1
   },null))])
  });
  return o==null?null:{
   $:1,
   $0:($1=o.$0,(l=$1[0],(r=$1[1],[Arrays.filter(function(x$1)
   {
    return g(Layout.extractMeasuresO(x$1));
   },l),Arrays.filter(function(x$1)
   {
    return g$1(Layout.extractMeasuresO(x$1));
   },r),(x=Seq.tryHead(Seq.delay(function()
   {
    return Seq.append(Seq.choose(Layout.extractMeasuresO,l),Seq.delay(function()
    {
     return Seq.map(function(a)
     {
      return a.$==0?a.$1?new Measures({
       $:0,
       $0:a.$0,
       $1:false
      }):a:a;
     },Seq.choose(Layout.extractMeasuresO,r));
    }));
   })),(v=new Measures({
    $:1,
    $0:5,
    $1:50,
    $2:95
   }),x==null?v:x.$0))])))
  };
 };
 Layout.transpose=function(lines)
 {
  var max;
  max=Seq.max(Seq.map(function(l)
  {
   return l.length;
  },lines));
  return Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.map(function(i)
   {
    return Arrays.ofSeq(Seq.delay(function()
    {
     return Seq.map(function(l)
     {
      return l.length>i?l[i]:" ";
     },lines);
    })).join("");
   },Operators.range(0,max-1));
  }));
 };
 Layout.horizontalSplit=function(lines)
 {
  var o,o$1,$1,i,ms;
  function c(i$1,l)
  {
   var a,x,o$2,v;
   a=LibraryJS.REGEX$1("^ *--+([ ^v0-9]*)-* *$","",l);
   return a!=null&&a.$==1?{
    $:1,
    $0:[[i$1,(x=(o$2=Seq.tryItem(1,a.$0),o$2==null?null:Layout.extractMeasuresO(Strings.Replace(Strings.Replace(o$2.$0,"^",""),"v","-"))),(v=new Measures({
     $:1,
     $0:5,
     $1:50,
     $2:95
    }),x==null?v:x.$0))],l.indexOf("-")]
   }:null;
  }
  o=(o$1=Seq.tryHead(Seq.sortBy(function(t)
  {
   return t[1];
  },Seq.choose(function($2)
  {
   return c($2[0],$2[1]);
  },Seq.indexed(lines)))),o$1==null?null:{
   $:1,
   $0:o$1.$0[0]
  });
  return o==null?null:{
   $:1,
   $0:($1=o.$0,(i=$1[0],(ms=$1[1],[Slice.array(lines,null,{
    $:1,
    $0:i-1
   }),Slice.array(lines,{
    $:1,
    $0:i+1
   },null),ms])))
  };
 };
 Layout.extractMeasuresO=function(m)
 {
  var m$1,$1,a,$2,a$1,a$2,a$3;
  m$1=Strings.SplitChars(m,[" "],1);
  return!Unchecked.Equals(m$1,null)&&m$1.length===1&&(a=(ParseO.Int())(Arrays.get(m$1,0)),a!=null&&a.$==1&&($1=a.$0,true))?{
   $:1,
   $0:new Measures({
    $:0,
    $0:Math.abs($1),
    $1:$1>=0
   })
  }:!Unchecked.Equals(m$1,null)&&m$1.length===3&&(a$1=(ParseO.Int())(Arrays.get(m$1,0)),a$1!=null&&a$1.$==1&&(a$2=(ParseO.Int())(Arrays.get(m$1,1)),a$2!=null&&a$2.$==1&&(a$3=(ParseO.Int())(Arrays.get(m$1,2)),a$3!=null&&a$3.$==1&&($2=[a$3.$0,a$1.$0,a$2.$0],true))))?{
   $:1,
   $0:new Measures({
    $:1,
    $0:$2[1],
    $1:$2[2],
    $2:$2[0]
   })
  }:null;
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
   var entries;
   entries=LayoutEngineModule.createEntries(lyt.lytName,txt);
   AppFramework.addPlugIn(PlugIn.New(lyt.lytName,Arrays.ofSeq(Seq.delay(function()
   {
    return Seq.append([AppFramework.newVar("Layout",lyt.lytDefinition)],Seq.delay(function()
    {
     return LayoutEngineModule.getVarEntries(entries);
    }));
   })),[],Arrays.ofSeq(Seq.delay(function()
   {
    return Seq.append(LayoutEngineModule.getDocEntries(entries),Seq.delay(function()
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
  o=(o$1=(t=((LayoutEngineModule.splitName())(lytNm))(varName),AppFramework.tryGetVar(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:Doc.Element("div",LayoutEngineModule.getAttrs(lytNm,attrs,true),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[LayoutEngineModule.getText(lytNm,labelName,true)]),Doc.Input([AttrProxy.Create("class","form-control")],o$1.$0.varVar)])])
  });
  return o==null?LayoutEngineModule.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Var not found "+Utils.toSafe($2));
   };
  }(Global.id))(varName)):o.$0;
 };
 LayoutEngineModule.inputFile$1421$69=Runtime.Curried3(function(act,el,$1)
 {
  return AppFramework.callFunction(el,null,act.actFunction);
 });
 LayoutEngineModule.inputFile$1420$69=Runtime.Curried3(function($1,el,$2)
 {
  el.value="";
 });
 LayoutEngineModule.inputFile=function(lytNm,attrs,labelName,actName,doc)
 {
  var o,o$1,t,act;
  o=(o$1=(t=((LayoutEngineModule.splitName())(lytNm))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:(act=o$1.$0,Doc.Element("div",LayoutEngineModule.getAttrs(lytNm,attrs,true),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-btn")],[Doc.Element("label",[AttrProxy.Create("class","btn")],[LayoutEngineModule.getText(lytNm,labelName,true),Doc.Element("input",[AttrProxy.Create("class","form-control"),AttrProxy.Create("type","file"),AttrModule.Style("display","none"),AttrProxy.HandlerImpl("click",function(el)
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
   })],[])])]),doc!==""?LayoutEngineModule.singleDoc(lytNm,List.ofArray([[doc,false]])):Doc.get_Empty()])]))
  });
  return o==null?LayoutEngineModule.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Action not found "+Utils.toSafe($2));
   };
  }(Global.id))(actName)):o.$0;
 };
 LayoutEngineModule.getVarEntries=function(entries)
 {
  function f(t)
  {
   return t[1];
  }
  return Seq.map(function(x)
  {
   return Seq.last(f(x));
  },Seq.groupBy(function(v)
  {
   return v.varName;
  },Seq.choose(function(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.getDocEntries=function(entries)
 {
  function f(t)
  {
   return t[1];
  }
  return Seq.map(function(x)
  {
   return Seq.last(f(x));
  },Seq.groupBy(function(d)
  {
   return d.docName;
  },Seq.choose(function(a)
  {
   return a.$==2?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.getText=function(lytNm,t,t$1)
 {
  var a,id,p,plg,nm,o,o$1,o$2,o$3;
  a=LayoutEngineModule.Identifier(t,t$1);
  return a!=null&&a.$==1?(id=a.$0,(p=((LayoutEngineModule.splitName())(lytNm))(id),(plg=p[0],(nm=p[1],(o=(o$1=AppFramework.tryGetViw(plg,nm),o$1==null?null:{
   $:1,
   $0:Doc.TextView(o$1.$0.viwView)
  }),o==null?(o$2=(o$3=AppFramework.tryGetVar(plg,nm),o$3==null?null:{
   $:1,
   $0:Doc.TextView(o$3.$0.varVar.get_View())
  }),o$2==null?Doc.TextNode(id):o$2.$0):o.$0))))):Doc.TextNode(t);
 };
 LayoutEngineModule.createEntries=function(lytNm,txt)
 {
  return LayoutEngineModule.processLines(function(l)
  {
   return LayoutEngineModule.createEntryO(lytNm,l);
  },String.splitByChar("\n",txt));
 };
 LayoutEngineModule.processLines=function(f,ls)
 {
  function processLinesR(ls$1)
  {
   var m,l,m$1,$1,a,t,t$1,p,p$1,rest,docs,p$2,names,ls$2;
   m=Seq.tryHead(ls$1);
   return m!=null&&m.$==1?(l=m.$0,(m$1=LayoutEngineModule.splitTokens(l),m$1.$==1&&(a=(t=m$1.$0,LayoutEngineModule.Identifier(t[0],t[1])),a!=null&&a.$==1&&(m$1.$1.$==1&&((t$1=m$1.$1.$0,LayoutEngineModule.Vertical(t$1[0],t$1[1])).$==2&&(m$1.$1.$1.$==0&&($1=a.$0,true)))))?(p=LayoutEngineModule.getExtraLines(function(l$1)
   {
    return Strings.StartsWith(Strings.Trim(l$1),"|");
   },ls$1),processLinesR((Layout.createLayoutDefinitions($1,Layout.extractNodes(p[0])))[1].concat(p[1]))):m$1.$==0?processLinesR(Slice.array(ls$1,{
    $:1,
    $0:1
   },null)):(p$1=LayoutEngineModule.getExtraLines(function(l$1)
   {
    return Strings.StartsWith(Strings.Trim(l$1),":");
   },ls$1),(rest=p$1[1],(docs=p$1[0],Arrays.length(docs)>0?((function($2)
   {
    return function($3)
    {
     return $2("l = ;"+Utils.toSafe($3)+";");
    };
   }(function(s)
   {
    console.log(s);
   }))(l),p$2=LayoutEngineModule.createLines(Seq.nth(0,Strings.SplitChars(l,[" "],1)),1,[],[],1,docs),names=p$2[0],ls$2=p$2[1],processLinesR(Arrays.ofSeq(Seq.delay(function()
   {
    return Seq.append([l+" "+Strings.concat(" ",names)],Seq.delay(function()
    {
     return Seq.append(ls$2,Seq.delay(function()
     {
      return rest;
     }));
    }));
   })))):Arrays.ofSeq(Seq.delay(function()
   {
    var m$2;
    return Seq.append((m$2=f(l),m$2!=null&&m$2.$==1?[m$2.$0]:[]),Seq.delay(function()
    {
     return processLinesR(rest);
    }));
   }))))))):[];
  }
  return processLinesR(ls);
 };
 LayoutEngineModule.createLines=function(baseName,n,names,lines,i,ls)
 {
  var prefix,prefix2,m,a,l,p,name,p$1,childrenLines,childNames;
  prefix=Strings.replicate(n,":");
  prefix2=":"+prefix;
  m=Seq.tryHead(ls);
  return m!=null&&m.$==1?(a=String.StartsWith(prefix,Strings.Trim(m.$0)),a!=null&&a.$==1?(l=a.$0,(p=LayoutEngineModule.getExtraLines(function(l$1)
  {
   return Strings.StartsWith(Strings.Trim(l$1),prefix2);
  },ls),(name=(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1(Utils.toSafe($2)+"_"+Global.String($3));
  }))(Global.id))(baseName))(i),(p$1=LayoutEngineModule.createLines(name,n+1,[],[],1,p[0]),(childrenLines=p$1[1],(childNames=p$1[0],LayoutEngineModule.createLines(baseName,n,Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.append(names,Seq.delay(function()
   {
    return[name];
   }));
  })),Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.append(lines,Seq.delay(function()
   {
    return Seq.append([name+" "+l+" "+Strings.concat(" ",childNames)],Seq.delay(function()
    {
     return childrenLines;
    }));
   }));
  })),i+1,p[1]))))))):[names,lines]):[names,lines];
 };
 LayoutEngineModule.getExtraLines=function(pred,ls)
 {
  var i,x,o,v;
  i=(x=(o=Seq.tryFindIndex(function(l)
  {
   return Strings.Trim(l)!==""&&!pred(l);
  },Seq.skip(1,ls)),o==null?null:{
   $:1,
   $0:1+o.$0
  }),(v=Arrays.length(ls),x==null?v:x.$0));
  return[Slice.array(ls,{
   $:1,
   $0:1
  },{
   $:1,
   $0:i-1
  }),Slice.array(ls,{
   $:1,
   $0:i
  },null)];
 };
 LayoutEngineModule.createEntryO=function(lytNm,line)
 {
  var m,$1,a,t,t$1,a$1,t$2,name,$2,a$2,t$3,t$4,a$3,t$5,name$1,$3,a$4,t$6,t$7,a$5,t$8,name$2,$4,a$6,t$9,t$10,a$7,t$11,name$3,$5,a$8,t$12,t$13,a$9,t$14,name$4,$6,a$10,t$15,t$16,name$5,$7,a$11,t$17,t$18,name$6,$8,a$12,t$19,t$20,name$7,$9,a$13,t$21,t$22,name$8,$10,a$14,t$23,t$24,$11,a$15,t$25,a$16,t$26,name$9;
  try
  {
   m=LayoutEngineModule.splitTokens(line);
   return m.$==1&&(a=(t=m.$0,LayoutEngineModule.Identifier(t[0],t[1])),a!=null&&a.$==1&&(m.$1.$==1&&((t$1=m.$1.$0,LayoutEngineModule.Vertical(t$1[0],t$1[1])).$==0&&(m.$1.$1.$==1&&(a$1=(t$2=m.$1.$1.$0,LayoutEngineModule.Measures$1(t$2[0],t$2[1])),a$1!=null&&a$1.$==1&&($1=[m.$1.$1.$1,a$1.$0,a.$0],true))))))?(name=$1[2],LayoutEngineModule.entryDoc(name,(LayoutEngineModule.createSplitterM())([lytNm,name,true,$1[1],$1[0]]))):m.$==1&&(a$2=(t$3=m.$0,LayoutEngineModule.Identifier(t$3[0],t$3[1])),a$2!=null&&a$2.$==1&&(m.$1.$==1&&((t$4=m.$1.$0,LayoutEngineModule.Vertical(t$4[0],t$4[1])).$==1&&(m.$1.$1.$==1&&(a$3=(t$5=m.$1.$1.$0,LayoutEngineModule.Measures$1(t$5[0],t$5[1])),a$3!=null&&a$3.$==1&&($2=[m.$1.$1.$1,a$3.$0,a$2.$0],true))))))?(name$1=$2[2],LayoutEngineModule.entryDoc(name$1,(LayoutEngineModule.createSplitterM())([lytNm,name$1,false,$2[1],$2[0]]))):m.$==1&&(a$4=(t$6=m.$0,LayoutEngineModule.Identifier(t$6[0],t$6[1])),a$4!=null&&a$4.$==1&&(m.$1.$==1&&((t$7=m.$1.$0,LayoutEngineModule.Var(t$7[0],t$7[1])).$==2&&(m.$1.$1.$==1&&(a$5=(t$8=m.$1.$1.$0,LayoutEngineModule.Identifier(t$8[0],t$8[1])),a$5!=null&&a$5.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($3=[a$5.$0,m.$1.$1.$1.$0,a$4.$0,m.$1.$1.$1.$1.$0],true)))))))))?(name$2=$3[2],LayoutEngineModule.entryDoc(name$2,(LayoutEngineModule.createButtonM())([lytNm,name$2,$3[0],$3[1],$3[3]]))):m.$==1&&(a$6=(t$9=m.$0,LayoutEngineModule.Identifier(t$9[0],t$9[1])),a$6!=null&&a$6.$==1&&(m.$1.$==1&&((t$10=m.$1.$0,LayoutEngineModule.Var(t$10[0],t$10[1])).$==3&&(m.$1.$1.$==1&&(a$7=(t$11=m.$1.$1.$0,LayoutEngineModule.Identifier(t$11[0],t$11[1])),a$7!=null&&a$7.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==0&&($4=[m.$1.$1.$1.$0,a$6.$0,a$7.$0],true))))))))?(name$3=$4[1],LayoutEngineModule.entryDoc(name$3,(LayoutEngineModule.createInputM())([lytNm,name$3,$4[2],$4[0]]))):m.$==1&&(a$8=(t$12=m.$0,LayoutEngineModule.Identifier(t$12[0],t$12[1])),a$8!=null&&a$8.$==1&&(m.$1.$==1&&((t$13=m.$1.$0,LayoutEngineModule.Var(t$13[0],t$13[1])).$==4&&(m.$1.$1.$==1&&(a$9=(t$14=m.$1.$1.$0,LayoutEngineModule.Identifier(t$14[0],t$14[1])),a$9!=null&&a$9.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==0&&($5=[m.$1.$1.$1.$0,a$8.$0,a$9.$0],true))))))))?(name$4=$5[1],LayoutEngineModule.entryDoc(name$4,(LayoutEngineModule.createTextAreaM())([lytNm,name$4,$5[2],$5[0]]))):m.$==1&&(a$10=(t$15=m.$0,LayoutEngineModule.Identifier(t$15[0],t$15[1])),a$10!=null&&a$10.$==1&&(m.$1.$==1&&((t$16=m.$1.$0,LayoutEngineModule.Var(t$16[0],t$16[1])).$==0&&(m.$1.$1.$==1&&(m.$1.$1.$1.$==0&&($6=[a$10.$0,m.$1.$1.$0],true))))))?(name$5=$6[0],LayoutEngineModule.entryVar(name$5,(LayoutEngineModule.createVarM())([lytNm,name$5,$6[1][0]]))):m.$==1&&(a$11=(t$17=m.$0,LayoutEngineModule.Identifier(t$17[0],t$17[1])),a$11!=null&&a$11.$==1&&(m.$1.$==1&&((t$18=m.$1.$0,LayoutEngineModule.Var(t$18[0],t$18[1])).$==1&&(m.$1.$1.$==1&&($7=[m.$1.$1.$0,a$11.$0,m.$1.$1.$1],true)))))?(name$6=$7[1],LayoutEngineModule.entryDoc(name$6,(LayoutEngineModule.createDocM())([lytNm,name$6,$7[0][0],$7[2]]))):m.$==1&&(a$12=(t$19=m.$0,LayoutEngineModule.Identifier(t$19[0],t$19[1])),a$12!=null&&a$12.$==1&&(m.$1.$==1&&((t$20=m.$1.$0,LayoutEngineModule.Vertical(t$20[0],t$20[1])).$==4&&(m.$1.$1.$==1&&(m.$1.$1.$1.$==1&&($8=[m.$1.$1.$1.$0,m.$1.$1.$1.$1,a$12.$0,m.$1.$1.$0],true))))))?(name$7=$8[2],LayoutEngineModule.entryDoc(name$7,(LayoutEngineModule.createTemplateM())([lytNm,name$7,$8[3],$8[0],$8[1]]))):m.$==1&&(a$13=(t$21=m.$0,LayoutEngineModule.Identifier(t$21[0],t$21[1])),a$13!=null&&a$13.$==1&&(m.$1.$==1&&((t$22=m.$1.$0,LayoutEngineModule.Concat(t$22[0],t$22[1])).$==0&&($9=[m.$1.$1,a$13.$0],true))))?(name$8=$9[1],LayoutEngineModule.entryDoc(name$8,(LayoutEngineModule.createConcatM())([lytNm,name$8,$9[0]]))):m.$==1&&(a$14=(t$23=m.$0,LayoutEngineModule.Identifier(t$23[0],t$23[1])),a$14!=null&&a$14.$==1&&(m.$1.$==1&&((t$24=m.$1.$0,LayoutEngineModule.Vertical(t$24[0],t$24[1])).$==3&&(m.$1.$1.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==1&&($10=[m.$1.$1.$1.$1.$0,m.$1.$1.$0,m.$1.$1.$1.$1.$1,a$14.$0,m.$1.$1.$1.$0],true)))))))?null:m.$==1&&(a$15=(t$25=m.$0,LayoutEngineModule.Identifier(t$25[0],t$25[1])),a$15!=null&&a$15.$==1&&(m.$1.$==1&&(a$16=(t$26=m.$1.$0,LayoutEngineModule.Vertical(t$26[0],t$26[1])),a$16.$==5&&(m.$1.$1.$==1&&($11=[m.$1.$1.$0,m.$1.$1.$1,a$16.$0,a$15.$0],true)))))?(name$9=$11[3],LayoutEngineModule.entryDoc(name$9,(LayoutEngineModule.createElementM())([lytNm,name$9,$11[2],$11[0],$11[1]]))):null;
  }
  catch(e)
  {
   ((function($12)
   {
    return function($13)
    {
     return $12(Utils.prettyPrint($13));
    };
   }(function(s)
   {
    console.log(s);
   }))(e));
   return null;
  }
 };
 LayoutEngineModule.entryVar=function(n,v)
 {
  return{
   $:1,
   $0:{
    $:0,
    $0:AppFramework.newVar(n,v)
   }
  };
 };
 LayoutEngineModule.entryDoc=function(n,doc)
 {
  return{
   $:1,
   $0:{
    $:2,
    $0:AppFramework.newDoc(n,Lazy.Create(function()
    {
     return doc;
    }))
   }
  };
 };
 LayoutEngineModule.createVarM=function()
 {
  SC$1.$cctor();
  return SC$1.createVarM;
 };
 LayoutEngineModule.createConcatM=function()
 {
  SC$1.$cctor();
  return SC$1.createConcatM;
 };
 LayoutEngineModule.createTemplateM=function()
 {
  SC$1.$cctor();
  return SC$1.createTemplateM;
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
 LayoutEngineModule.createVar=function(lytNm,varName,v)
 {
  return Var$1.Create$1(v);
 };
 LayoutEngineModule.createConcat=function(lytNm,name,docs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   return Doc.Concat(LayoutEngineModule.getDocs(lytNm,docs));
  });
 };
 LayoutEngineModule.createTemplate=function(lytNm,name,tempName,attrs,holes)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var $1,o,attrs$1,x,x$1,s;
   attrs$1=LayoutEngineModule.getAttrs(lytNm,attrs[0],attrs[1]);
   Templates.LoadLocalTemplates("local");
   function m($2,$3)
   {
    var a,id,nm,o$1,o$2,o$3,t,o$4,t$1,nm$1,m$1,act;
    a=LayoutEngineModule.Identifier($3[0],$3[1]);
    return a!=null&&a.$==1?(id=a.$0,nm=$2[0],o$1=(o$2=(o$3=(t=((LayoutEngineModule.splitName())(lytNm))(id),AppFramework.tryGetDoc(t[0],t[1])),o$3==null?null:{
     $:1,
     $0:{
      $:0,
      $0:nm,
      $1:(LayoutEngineModule.getDocF(List.T.Empty,o$3.$0))[0]
     }
    }),o$2==null?(o$4=(t$1=((LayoutEngineModule.splitName())(lytNm))(id),AppFramework.tryGetVar(t$1[0],t$1[1])),o$4==null?null:{
     $:1,
     $0:{
      $:8,
      $0:nm,
      $1:o$4.$0.varVar
     }
    }):o$2),o$1==null?{
     $:0,
     $0:nm,
     $1:LayoutEngineModule.errDoc((function($4)
     {
      return function($5)
      {
       return $4("Missing element: "+Utils.toSafe($5));
      };
     }(Global.id))(id))
    }:o$1.$0):(nm$1=$2[0],m$1=LayoutEngineModule.getTextData(lytNm,$3[0]),m$1.$==1?{
     $:2,
     $0:nm$1,
     $1:m$1.$0
    }:m$1.$==2?(act=m$1.$0,{
     $:4,
     $0:nm$1,
     $1:function(el)
     {
      return function(ev)
      {
       return AppFramework.callFunction(el,ev,act.actFunction);
      };
     }
    }):{
     $:1,
     $0:nm$1,
     $1:m$1.$0
    });
   }
   function p(i,a)
   {
    return i%2===0;
   }
   try
   {
    o={
     $:1,
     $0:(x=(x$1=Seq.map(function($2)
     {
      return m($2[0],$2[1]);
     },Seq.map(function(t)
     {
      return t[1];
     },Seq.filter(function($2)
     {
      return p($2[0],$2[1]);
     },Seq.indexed(Seq.pairwise(holes))))),(Seq.isEmpty(attrs$1)?Global.id:(s=[{
      $:3,
      $0:"attrs",
      $1:AttrProxy.Concat(attrs$1)
     }],function(s$1)
     {
      return Seq.append(s,s$1);
     }))(x$1)),Templates.NamedTemplate("local",{
      $:1,
      $0:tempName[0]
     },x))
    };
   }
   catch(m$1)
   {
    o=null;
   }
   return o==null?LayoutEngineModule.errDoc((function($2)
   {
    return function($3)
    {
     return $2("Missing template: "+Utils.toSafe($3));
    };
   }(Global.id))(tempName[0])):o.$0;
  });
 };
 LayoutEngineModule.createDoc=function(lytNm,name,docName,parms)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var p,o,o$1;
   p=((LayoutEngineModule.splitName())(lytNm))(docName);
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
 LayoutEngineModule.createTextArea=function(lytNm,name,varName,attrs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var o,x,t,m,a;
   o=(x=(t=((LayoutEngineModule.splitName())(lytNm))(varName),AppFramework.tryGetVoV(t[0],t[1])),(m=(a=LayoutEngineModule.getAttrs(lytNm,attrs[0],attrs[1]),function(a$1)
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
 LayoutEngineModule.createInput=function(lytNm,name,varName,attrs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var o,x,t,m,a;
   o=(x=(t=((LayoutEngineModule.splitName())(lytNm))(varName),AppFramework.tryGetVoV(t[0],t[1])),(m=(a=LayoutEngineModule.getAttrs(lytNm,attrs[0],attrs[1]),function(a$1)
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
 LayoutEngineModule.createButton=function(lytNm,name,actName,attrs,text)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var x,o,o$1,t,$1;
   function m(act,u)
   {
    return AppFramework.callFunction(null,null,act.actFunction);
   }
   x=(o=(o$1=(t=((LayoutEngineModule.splitName())(lytNm))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
    $:1,
    $0:($1=o$1.$0,function($2)
    {
     return m($1,$2);
    })
   }),o==null?Global.ignore:o.$0);
   return Doc.Button(text[0],LayoutEngineModule.getAttrs(lytNm,attrs[0],attrs[1]),x);
  });
 };
 LayoutEngineModule.createElement=function(lytNm,name,element,attrs,docs)
 {
  var x;
  x=[LayoutEngineModule.turnToView(function()
  {
   return Doc.Concat(LayoutEngineModule.getDocs(lytNm,docs));
  })];
  return Doc.Element(element,LayoutEngineModule.getAttrs(lytNm,attrs[0],attrs[1]),x);
 };
 LayoutEngineModule.createSplitter=function(lytNm,name,vertical,measures,docs)
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
     return $2("expected exactly 1 element "+Utils.printList(function($4)
     {
      return"("+Utils.prettyPrint($4[0])+", "+Utils.prettyPrint($4[1])+")";
     },$3));
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
     return $2("splitter expects exactly 2 elements "+Utils.printList(function($4)
     {
      return"("+Utils.prettyPrint($4[0])+", "+Utils.prettyPrint($4[1])+")";
     },$3));
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
  var $1,a,t,id,parms,p,plg,nm,o,o$1,o$2,o$3,v,rest,a$1;
  return docs.$==1&&(a=(t=docs.$0,LayoutEngineModule.Identifier(t[0],t[1])),a!=null&&a.$==1&&($1=[a.$0,docs.$1],true))?(id=$1[0],(parms=$1[1],(p=((LayoutEngineModule.splitName())(lytNm))(id),(plg=p[0],(nm=p[1],(o=(o$1=AppFramework.tryGetDoc(plg,nm),o$1==null?null:{
   $:1,
   $0:LayoutEngineModule.getDocF(parms,o$1.$0)
  }),o==null?(o$2=(o$3=AppFramework.tryGetWoW(plg,nm),o$3==null?null:{
   $:1,
   $0:[Doc.TextView(o$3.$0),parms]
  }),o$2==null?[LayoutEngineModule.errDoc((v=(function($2)
  {
   return function($3)
   {
    return $2("Missing doc: "+Utils.toSafe($3));
   };
  }(Global.id))(id),(Library.print(v),v))),parms]:o$2.$0):o.$0)))))):docs.$==0?[Doc.get_Empty(),List.T.Empty]:(rest=docs.$1,(a$1=LayoutEngineModule.getTextData(lytNm,docs.$0[0]),a$1.$==1?[Doc.TextView(a$1.$0),rest]:a$1.$==2?[LayoutEngineModule.errDoc((function($2)
  {
   return function($3)
   {
    return $2("Unexpected action: "+Utils.toSafe($3));
   };
  }(Global.id))(a$1.$0.actName)),rest]:[Doc.TextNode(a$1.$0),rest]));
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
   return $1("Too many parameters "+GeneratedPrintf.p($2)+" "+Utils.printList(function($4)
   {
    return"("+Utils.prettyPrint($4[0])+", "+Utils.prettyPrint($4[1])+")";
   },$3));
  }))(Global.id))(doc))(parms));
 };
 LayoutEngineModule.getDocF=function(parms,doc)
 {
  var $1,$2;
  $2=doc.docDoc;
  switch($2.$==1?parms.$==1?($1=[$2.$0,parms.$0[0],parms.$1],1):6:$2.$==2?parms.$==1?parms.$1.$==1?($1=[$2.$0,parms.$0[0],parms.$1.$0[0],parms.$1.$1],2):6:6:$2.$==3?parms.$==1?parms.$1.$==1?parms.$1.$1.$==1?($1=[$2.$0,parms.$0[0],parms.$1.$0[0],parms.$1.$1.$0[0],parms.$1.$1.$1],3):6:6:6:$2.$==4?parms.$==1?parms.$1.$==1?parms.$1.$1.$==1?parms.$1.$1.$1.$==1?($1=[$2.$0,parms.$0[0],parms.$1.$0[0],parms.$1.$1.$0[0],parms.$1.$1.$1.$0[0],parms.$1.$1.$1.$1],4):6:6:6:6:$2.$==5?parms.$==1?parms.$1.$==1?parms.$1.$1.$==1?parms.$1.$1.$1.$==1?parms.$1.$1.$1.$1.$==1?($1=[$2.$0,parms.$0[0],parms.$1.$0[0],parms.$1.$1.$0[0],parms.$1.$1.$1.$0[0],parms.$1.$1.$1.$1.$0[0],parms.$1.$1.$1.$1.$1],5):6:6:6:6:6:($1=[$2.$0,parms],0))
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
     return $3("Parameters do not coincide with definition "+GeneratedPrintf.p($4)+" - "+Utils.printList(function($6)
     {
      return"("+Utils.prettyPrint($6[0])+", "+Utils.prettyPrint($6[1])+")";
     },$5));
    }))(Global.id))(doc))(parms))]),List.T.Empty];
  }
 };
 LayoutEngineModule.getAttrs=function(lytNm,a,a$1)
 {
  var attrs;
  attrs=[a,a$1];
  return List.ofSeq(Seq.delay(function()
  {
   return Seq.append(Seq.choose(function(a$2)
   {
    var $1,value,value$1,name,m,act;
    return!Unchecked.Equals(a$2,null)&&a$2.length===2&&(value=Arrays.get(a$2,1),Strings.Trim(Arrays.get(a$2,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a$2,1),(name=Arrays.get(a$2,0),{
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
   },String.splitByChar(";",attrs[0]))),Seq.delay(function()
   {
    return Seq.choose(function(a$2)
    {
     var $1,value,value$1,name,m;
     return!Unchecked.Equals(a$2,null)&&a$2.length===2&&(value=Arrays.get(a$2,1),Strings.Trim(Arrays.get(a$2,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a$2,1),(name=Arrays.get(a$2,0),{
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
    },String.splitByChar(";",attrs[0])));
   }));
  }));
 };
 LayoutEngineModule.getTextData=function(lytNm,txt)
 {
  var o,o$1,$1,bef,name,aft,p,plg,n,o$2,o$3,o$4,o$5;
  o=(o$1=String.delimitedO("@{","}",txt),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,(bef=$1[0],(name=$1[1],(aft=$1[2],(p=((LayoutEngineModule.splitName())(lytNm))(name),(plg=p[0],(n=p[1],(o$2=(o$3=AppFramework.tryGetWoW(plg,n),o$3==null?null:{
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
 LayoutEngineModule.splitName=function()
 {
  SC$1.$cctor();
  return SC$1.splitName;
 };
 LayoutEngineModule.splitTokens=function(line)
 {
  return List.ofSeq(Seq.collect(Global.id,Seq.mapi(function(i,s)
  {
   var t;
   return i%2===1?[[s,true]]:(t=Strings.Trim(s),t===""?[]:Arrays.map(function(s$1)
   {
    return[s$1,false];
   },Strings.SplitChars(t,[" "],1)));
  },String.splitByChar("\"",line))));
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
 LayoutEngineModule.Measures$1=function(t,t$1)
 {
  var txt,a,$1,a$1,$2,a$2,$3,a$3,a$4,a$5;
  txt=[t,t$1];
  return txt[1]?null:(a=String.splitByChar("-",txt[0]),!Unchecked.Equals(a,null)&&a.length===1&&(a$1=(ParseO.Double())(Arrays.get(a,0)),a$1!=null&&a$1.$==1&&($1=a$1.$0,true))?{
   $:1,
   $0:new Measures({
    $:0,
    $0:$1,
    $1:true
   })
  }:!Unchecked.Equals(a,null)&&a.length===2&&(Arrays.get(a,0)===""&&(a$2=(ParseO.Double())(Arrays.get(a,1)),a$2!=null&&a$2.$==1&&($2=a$2.$0,true)))?{
   $:1,
   $0:new Measures({
    $:0,
    $0:$2,
    $1:false
   })
  }:!Unchecked.Equals(a,null)&&a.length===3&&(a$3=(ParseO.Double())(Arrays.get(a,0)),a$3!=null&&a$3.$==1&&(a$4=(ParseO.Double())(Arrays.get(a,1)),a$4!=null&&a$4.$==1&&(a$5=(ParseO.Double())(Arrays.get(a,2)),a$5!=null&&a$5.$==1&&($3=[a$5.$0,a$3.$0,a$4.$0],true))))?{
   $:1,
   $0:new Measures({
    $:1,
    $0:$3[1],
    $1:$3[2],
    $2:$3[0]
   })
  }:null);
 };
 LayoutEngineModule.Concat=function(a,a$1)
 {
  var $1;
  return(a$1?false:a==="concat")?{
   $:0,
   $0:null
  }:{
   $:1,
   $0:null
  };
 };
 LayoutEngineModule.Var=function(a,a$1)
 {
  var $1,$2,$3,$4,$5,$6;
  return(a$1?false:a==="Var")?{
   $:0,
   $0:null
  }:(a$1?false:a==="Doc")?{
   $:1,
   $0:null
  }:(a$1?false:a==="button")?{
   $:2,
   $0:null
  }:(a$1?false:a==="input")?{
   $:3,
   $0:null
  }:(a$1?false:a==="textarea")?{
   $:4,
   $0:null
  }:(a$1?false:a==="select")?{
   $:5,
   $0:null
  }:{
   $:6,
   $0:null
  };
 };
 LayoutEngineModule.Vertical=function(a,a$1)
 {
  var $1,$2,$3,$4,$5,a$2;
  return(a$1?false:a==="vertical")?{
   $:0,
   $0:null
  }:(a$1?false:a==="horizontal")?{
   $:1,
   $0:null
  }:(a$1?false:a==="layout")?{
   $:2,
   $0:null
  }:(a$1?false:a==="grid")?{
   $:3,
   $0:null
  }:(a$1?false:a==="template")?{
   $:4,
   $0:null
  }:(a$2=LayoutEngineModule.Identifier(a,a$1),a$2!=null&&a$2.$==1?{
   $:5,
   $0:a$2.$0
  }:{
   $:6,
   $0:null
  });
 };
 LayoutEngineModule.Identifier=function(a,a$1)
 {
  var $1,a$2,t;
  return(a$2=LibraryJS.REGEX$1("^[$a-zA-Z_][0-9a-zA-Z_\\.\\-$]*$","",a),a$2!=null&&a$2.$==1&&((t=a$2.$0,!Unchecked.Equals(t,null)&&t.length===1)&&(a$1?false:($1=Arrays.get(a$2.$0,0),true))))?{
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
  return value===null?null:(m=(new Global.String(value)).match(new Global.RegExp(expr,opt)),Unchecked.Equals(m,null)?null:!Unchecked.Equals(m,null)&&m.length===0?null:{
   $:1,
   $0:m
  });
 };
 SC$1.$cctor=function()
 {
  var f,x,p,cache,getOrAdd,p$1,cache$1,getOrAdd$1,p$2,cache$2,getOrAdd$2,p$3,cache$3,getOrAdd$3,p$4,cache$4,getOrAdd$4,p$5,cache$5,getOrAdd$5,p$6,cache$6,getOrAdd$6,p$7,cache$7,getOrAdd$7,p$8,cache$8,getOrAdd$8,o,plg;
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
   var a$1,b;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$1=0,(b=Arrays.length(s)-2,Unchecked.Compare(a$1,b)===1?a$1:b))
   });
  }
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
  function a(a$1)
  {
   var f$2;
   function b(a$2)
   {
    return AppFramework.plugIns().TryFindByKey(a$2);
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
  function checkO(v)
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
  }
  function store(v,res)
  {
   cache.set_Item(v,res);
   return res;
  }
  function getOrAdd$9(p$9,f$2)
  {
   var o$1;
   o$1=checkO(p$9);
   return o$1==null?store(p$9,f$2(p$9)):o$1.$0;
  }
  function checkO$1(v)
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
  }
  function store$1(v,res)
  {
   cache$1.set_Item(v,res);
   return res;
  }
  function getOrAdd$10(p$9,f$2)
  {
   var o$1;
   o$1=checkO$1(p$9);
   return o$1==null?store$1(p$9,f$2(p$9)):o$1.$0;
  }
  function checkO$2(v)
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
  }
  function store$2(v,res)
  {
   cache$2.set_Item(v,res);
   return res;
  }
  function getOrAdd$11(p$9,f$2)
  {
   var o$1;
   o$1=checkO$2(p$9);
   return o$1==null?store$2(p$9,f$2(p$9)):o$1.$0;
  }
  function checkO$3(v)
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
  }
  function store$3(v,res)
  {
   cache$3.set_Item(v,res);
   return res;
  }
  function getOrAdd$12(p$9,f$2)
  {
   var o$1;
   o$1=checkO$3(p$9);
   return o$1==null?store$3(p$9,f$2(p$9)):o$1.$0;
  }
  function checkO$4(v)
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
  }
  function store$4(v,res)
  {
   cache$4.set_Item(v,res);
   return res;
  }
  function getOrAdd$13(p$9,f$2)
  {
   var o$1;
   o$1=checkO$4(p$9);
   return o$1==null?store$4(p$9,f$2(p$9)):o$1.$0;
  }
  function checkO$5(v)
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
  }
  function store$5(v,res)
  {
   cache$5.set_Item(v,res);
   return res;
  }
  function getOrAdd$14(p$9,f$2)
  {
   var o$1;
   o$1=checkO$5(p$9);
   return o$1==null?store$5(p$9,f$2(p$9)):o$1.$0;
  }
  function checkO$6(v)
  {
   var res;
   res=null;
   return cache$6.TryGetValue(v,{
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
  }
  function store$6(v,res)
  {
   cache$6.set_Item(v,res);
   return res;
  }
  function getOrAdd$15(p$9,f$2)
  {
   var o$1;
   o$1=checkO$6(p$9);
   return o$1==null?store$6(p$9,f$2(p$9)):o$1.$0;
  }
  function checkO$7(v)
  {
   var res;
   res=null;
   return cache$7.TryGetValue(v,{
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
  }
  function store$7(v,res)
  {
   cache$7.set_Item(v,res);
   return res;
  }
  function getOrAdd$16(p$9,f$2)
  {
   var o$1;
   o$1=checkO$7(p$9);
   return o$1==null?store$7(p$9,f$2(p$9)):o$1.$0;
  }
  function checkO$8(v)
  {
   var res;
   res=null;
   return cache$8.TryGetValue(v,{
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
  }
  function store$8(v,res)
  {
   cache$8.set_Item(v,res);
   return res;
  }
  function getOrAdd$17(p$9,f$2)
  {
   var o$1;
   o$1=checkO$8(p$9);
   return o$1==null?store$8(p$9,f$2(p$9)):o$1.$0;
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
  SC$1.parseDateO=ParseO.tryParseWith(function(a$1)
  {
   var o$1,m;
   o$1=0;
   return[(m=DateUtil.TryParse(a$1),m!=null&&m.$==1&&(o$1=m.$0,true)),o$1];
  });
  SC$1.parseIntO=ParseO.tryParseWith(function(a$1)
  {
   var o$1;
   o$1=0;
   return[Numeric.TryParseInt32(a$1,{
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
  SC$1.parseSingleO=ParseO.tryParseWith(function(a$1)
  {
   var o$1,$1;
   o$1=0;
   return[($1=Global.Number(a$1),Global.isNaN($1)?false:(o$1=$1,true)),o$1];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith(function(a$1)
  {
   var o$1,$1;
   o$1=0;
   return[($1=Global.Number(a$1),Global.isNaN($1)?false:(o$1=$1,true)),o$1];
  });
  SC$1.parseGuidO=ParseO.tryParseWith(function(a$1)
  {
   var o$1;
   o$1=null;
   return[Guid.TryParse(a$1,{
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
   var o$1;
   o$1=new WcTabStripT.New();
   WebComponent.defineWebComponent("wcomp-tabstrip",WcTabStripT.Constructor,self.FsRoot.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New);
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
   return(a($1))($2);
  },AppFramework.plugIns().v,x));
  SC$1.currentPlugInV=new FromView.New(AppFramework.currentPlugInW(),function(a$1)
  {
   AppFramework.plugIns().Append(a$1);
  });
  SC$1.AppFwkClient=Lazy.Create(function()
  {
   var b,Q,A,D,V,V$1,P,p$9,i;
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
   })),(p$9=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p$9[1],LayoutEngine_Templates.appfwkclient(p$9[0])),(b.i=i,i)))).get_Doc();
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
  SC$1.splitName=AppFramework.splitName;
  SC$1.createSplitterM=(p=(cache=new Dictionary.New$5(),[[checkO,function($1)
  {
   return function($2)
   {
    return getOrAdd$9($1,$2);
   };
  }],function()
  {
   cache.Clear();
  }]),(getOrAdd=p[0][1],[function(p$9)
  {
   return(getOrAdd(p$9))(function($1)
   {
    return LayoutEngineModule.createSplitter($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p[1]]))[0];
  SC$1.createButtonM=(p$1=(cache$1=new Dictionary.New$5(),[[checkO$1,function($1)
  {
   return function($2)
   {
    return getOrAdd$10($1,$2);
   };
  }],function()
  {
   cache$1.Clear();
  }]),(getOrAdd$1=p$1[0][1],[function(p$9)
  {
   return(getOrAdd$1(p$9))(function($1)
   {
    return LayoutEngineModule.createButton($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$1[1]]))[0];
  SC$1.createInputM=(p$2=(cache$2=new Dictionary.New$5(),[[checkO$2,function($1)
  {
   return function($2)
   {
    return getOrAdd$11($1,$2);
   };
  }],function()
  {
   cache$2.Clear();
  }]),(getOrAdd$2=p$2[0][1],[function(p$9)
  {
   return(getOrAdd$2(p$9))(function($1)
   {
    return LayoutEngineModule.createInput($1[0],$1[1],$1[2],$1[3]);
   });
  },p$2[1]]))[0];
  SC$1.createTextAreaM=(p$3=(cache$3=new Dictionary.New$5(),[[checkO$3,function($1)
  {
   return function($2)
   {
    return getOrAdd$12($1,$2);
   };
  }],function()
  {
   cache$3.Clear();
  }]),(getOrAdd$3=p$3[0][1],[function(p$9)
  {
   return(getOrAdd$3(p$9))(function($1)
   {
    return LayoutEngineModule.createTextArea($1[0],$1[1],$1[2],$1[3]);
   });
  },p$3[1]]))[0];
  SC$1.createElementM=(p$4=(cache$4=new Dictionary.New$5(),[[checkO$4,function($1)
  {
   return function($2)
   {
    return getOrAdd$13($1,$2);
   };
  }],function()
  {
   cache$4.Clear();
  }]),(getOrAdd$4=p$4[0][1],[function(p$9)
  {
   return(getOrAdd$4(p$9))(function($1)
   {
    return LayoutEngineModule.createElement($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$4[1]]))[0];
  SC$1.createDocM=(p$5=(cache$5=new Dictionary.New$5(),[[checkO$5,function($1)
  {
   return function($2)
   {
    return getOrAdd$14($1,$2);
   };
  }],function()
  {
   cache$5.Clear();
  }]),(getOrAdd$5=p$5[0][1],[function(p$9)
  {
   return(getOrAdd$5(p$9))(function($1)
   {
    return LayoutEngineModule.createDoc($1[0],$1[1],$1[2],$1[3]);
   });
  },p$5[1]]))[0];
  SC$1.createTemplateM=(p$6=(cache$6=new Dictionary.New$5(),[[checkO$6,function($1)
  {
   return function($2)
   {
    return getOrAdd$15($1,$2);
   };
  }],function()
  {
   cache$6.Clear();
  }]),(getOrAdd$6=p$6[0][1],[function(p$9)
  {
   return(getOrAdd$6(p$9))(function($1)
   {
    return LayoutEngineModule.createTemplate($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$6[1]]))[0];
  SC$1.createConcatM=(p$7=(cache$7=new Dictionary.New$5(),[[checkO$7,function($1)
  {
   return function($2)
   {
    return getOrAdd$16($1,$2);
   };
  }],function()
  {
   cache$7.Clear();
  }]),(getOrAdd$7=p$7[0][1],[function(p$9)
  {
   return(getOrAdd$7(p$9))(function($1)
   {
    return LayoutEngineModule.createConcat($1[0],$1[1],$1[2]);
   });
  },p$7[1]]))[0];
  SC$1.createVarM=(p$8=(cache$8=new Dictionary.New$5(),[[checkO$8,function($1)
  {
   return function($2)
   {
    return getOrAdd$17($1,$2);
   };
  }],function()
  {
   cache$8.Clear();
  }]),(getOrAdd$8=p$8[0][1],[function(p$9)
  {
   return(getOrAdd$8(p$9))(function($1)
   {
    return LayoutEngineModule.createVar($1[0],$1[1],$1[2]);
   });
  },p$8[1]]))[0];
  o=AppFramework.tryGetPlugIn("AppFramework");
  o==null?void 0:(plg=o.$0,AppFramework.addPlugIn(PlugIn.New(plg.plgName,plg.plgVars,plg.plgViews,plg.plgDocs,plg.plgActions.concat([AppFramework.newActF("AddLayout",{
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
  })]),plg.plgQueries)));
 };
 LayoutEngine_Templates.wcompsplitterver=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"wcompsplitterver"
  },h):void 0;
 };
 LayoutEngine_Templates.wcompsplitterhor=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"wcompsplitterhor"
  },h):void 0;
 };
 LayoutEngine_Templates.appframework=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"appframework"
  },h):void 0;
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
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"tile"
  },h):void 0;
 };
 LayoutEngine_Templates.actiondisabled=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"actiondisabled"
  },h):void 0;
 };
 LayoutEngine_Templates.action=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"action"
  },h):void 0;
 };
 LayoutEngine_Templates.namevalue=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"namevalue"
  },h):void 0;
 };
 LayoutEngine_Templates.namevalueinput=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"namevalueinput"
  },h):void 0;
 };
 LayoutEngine_Templates.fixedsplitterhor=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"fixedsplitterhor"
  },h):void 0;
 };
 LayoutEngine_Templates.fixedsplitterver=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"fixedsplitterver"
  },h):void 0;
 };
 LayoutEngine_Templates.appfwkclient=function(h)
 {
  LayoutEngine_Templates.fixedsplitterhor();
  LayoutEngine_Templates.fixedsplitterver();
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"appfwkclient"
  },h):void 0;
 };
}());

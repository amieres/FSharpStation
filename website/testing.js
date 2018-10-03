// $begin{copyright}
//
// This file is part of WebSharper
//
// Copyright (c) 2008-2016 IntelliFactory
//
// Licensed under the Apache License, Version 2.0 (the "License"); you
// may not use this file except in compliance with the License.  You may
// obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
// implied.  See the License for the specific language governing
// permissions and limitations under the License.
//
// $end{copyright}

IntelliFactory = {
    Runtime: {
        Ctor: function (ctor, typeFunction) {
            ctor.prototype = typeFunction.prototype;
            return ctor;
        },

        Class: function (members, base, statics) {
            var proto = members;
            if (base) {
                proto = new base();
                for (var m in members) { proto[m] = members[m] }
            }
            var typeFunction = function (copyFrom) {
                if (copyFrom) {
                    for (var f in copyFrom) { this[f] = copyFrom[f] }
                }
            }
            typeFunction.prototype = proto;
            if (statics) {
                for (var f in statics) { typeFunction[f] = statics[f] }
            }
            return typeFunction;
        },

        Clone: function (obj) {
            var res = {};
            for (var p in obj) { res[p] = obj[p] }
            return res;
        },

        NewObject:
            function (kv) {
                var o = {};
                for (var i = 0; i < kv.length; i++) {
                    o[kv[i][0]] = kv[i][1];
                }
                return o;
            },

        DeleteEmptyFields:
            function (obj, fields) {
                for (var i = 0; i < fields.length; i++) {
                    var f = fields[i];
                    if (obj[f] === void (0)) { delete obj[f]; }
                }
                return obj;
            },

        GetOptional:
            function (value) {
                return (value === void (0)) ? null : { $: 1, $0: value };
            },

        SetOptional:
            function (obj, field, value) {
                if (value) {
                    obj[field] = value.$0;
                } else {
                    delete obj[field];
                }
            },

        SetOrDelete:
            function (obj, field, value) {
                if (value === void (0)) {
                    delete obj[field];
                } else {
                    obj[field] = value;
                }
            },

        Apply: function (f, obj, args) {
            return f.apply(obj, args);
        },

        Bind: function (f, obj) {
            return function () { return f.apply(this, arguments) };
        },

        CreateFuncWithArgs: function (f) {
            return function () { return f(Array.prototype.slice.call(arguments)) };
        },

        CreateFuncWithOnlyThis: function (f) {
            return function () { return f(this) };
        },

        CreateFuncWithThis: function (f) {
            return function () { return f(this).apply(null, arguments) };
        },

        CreateFuncWithThisArgs: function (f) {
            return function () { return f(this)(Array.prototype.slice.call(arguments)) };
        },

        CreateFuncWithRest: function (length, f) {
            return function () { return f(Array.prototype.slice.call(arguments, 0, length).concat([Array.prototype.slice.call(arguments, length)])) };
        },

        CreateFuncWithArgsRest: function (length, f) {
            return function () { return f([Array.prototype.slice.call(arguments, 0, length), Array.prototype.slice.call(arguments, length)]) };
        },

        BindDelegate: function (func, obj) {
            var res = func.bind(obj);
            res.$Func = func;
            res.$Target = obj;
            return res;
        },

        CreateDelegate: function (invokes) {
            if (invokes.length == 0) return null;
            if (invokes.length == 1) return invokes[0];
            var del = function () {
                var res;
                for (var i = 0; i < invokes.length; i++) {
                    res = invokes[i].apply(null, arguments);
                }
                return res;
            };
            del.$Invokes = invokes;
            return del;
        },

        CombineDelegates: function (dels) {
            var invokes = [];
            for (var i = 0; i < dels.length; i++) {
                var del = dels[i];
                if (del) {
                    if ("$Invokes" in del)
                        invokes = invokes.concat(del.$Invokes);
                    else
                        invokes.push(del);
                }
            }
            return IntelliFactory.Runtime.CreateDelegate(invokes);
        },

        DelegateEqual: function (d1, d2) {
            if (d1 === d2) return true;
            if (d1 == null || d2 == null) return false;
            var i1 = d1.$Invokes || [d1];
            var i2 = d2.$Invokes || [d2];
            if (i1.length != i2.length) return false;
            for (var i = 0; i < i1.length; i++) {
                var e1 = i1[i];
                var e2 = i2[i];
                if (!(e1 === e2 || ("$Func" in e1 && "$Func" in e2 && e1.$Func === e2.$Func && e1.$Target == e2.$Target)))
                    return false;
            }
            return true;
        },

        ThisFunc: function (d) {
            return function () {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(this);
                return d.apply(null, args);
            };
        },

        ThisFuncOut: function (f) {
            return function () {
                var args = Array.prototype.slice.call(arguments);
                return f.apply(args.shift(), args);
            };
        },

        ParamsFunc: function (length, d) {
            return function () {
                var args = Array.prototype.slice.call(arguments);
                return d.apply(null, args.slice(0, length).concat([args.slice(length)]));
            };
        },

        ParamsFuncOut: function (length, f) {
            return function () {
                var args = Array.prototype.slice.call(arguments);
                return f.apply(null, args.slice(0, length).concat(args[length]));
            };
        },

        ThisParamsFunc: function (length, d) {
            return function () {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(this);
                return d.apply(null, args.slice(0, length + 1).concat([args.slice(length + 1)]));
            };
        },

        ThisParamsFuncOut: function (length, f) {
            return function () {
                var args = Array.prototype.slice.call(arguments);
                return f.apply(args.shift(), args.slice(0, length).concat(args[length]));
            };
        },

        Curried: function (f, n, args) {
            args = args || [];
            return function (a) {
                var allArgs = args.concat([a === void (0) ? null : a]);
                if (n == 1)
                    return f.apply(null, allArgs);
                if (n == 2)
                    return function (a) { return f.apply(null, allArgs.concat([a === void (0) ? null : a])); }
                return IntelliFactory.Runtime.Curried(f, n - 1, allArgs);
            }
        },

        Curried2: function (f) {
            return function (a) { return function (b) { return f(a, b); } }
        },

        Curried3: function (f) {
            return function (a) { return function (b) { return function (c) { return f(a, b, c); } } }
        },

        UnionByType: function (types, value, optional) {
            var vt = typeof value;
            for (var i = 0; i < types.length; i++) {
                var t = types[i];
                if (typeof t == "number") {
                    if (Array.isArray(value) && (t == 0 || value.length == t)) {
                        return { $: i, $0: value };
                    }
                } else {
                    if (t == vt) {
                        return { $: i, $0: value };
                    }
                }
            }
            if (!optional) {
                throw new Error("Type not expected for creating Choice value.");
            }
        },

        ScriptBasePath: "./",

        ScriptPath: function (a, f) {
            return this.ScriptBasePath + (this.ScriptSkipAssemblyDir ? "" : a + "/") + f;
        },

        OnLoad:
            function (f) {
                if (!("load" in this)) {
                    this.load = [];
                }
                this.load.push(f);
            },

        Start:
            function () {
                function run(c) {
                    for (var i = 0; i < c.length; i++) {
                        c[i]();
                    }
                }
                if ("load" in this) {
                    run(this.load);
                    this.load = [];
                }
            },
    }
}

IntelliFactory.Runtime.OnLoad(function () {
    if (self.WebSharper && WebSharper.Activator && WebSharper.Activator.Activate)
        WebSharper.Activator.Activate()
});

// Polyfill

if (!Date.now) {
    Date.now = function () {
        return new Date().getTime();
    };
}

if (!Math.trunc) {
    Math.trunc = function (x) {
        return x < 0 ? Math.ceil(x) : Math.floor(x);
    }
}

if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
  }
}

function ignore() { };
function id(x) { return x };
function fst(x) { return x[0] };
function snd(x) { return x[1] };
function trd(x) { return x[2] };

if (!console) {
    console = {
        count: ignore,
        dir: ignore,
        error: ignore,
        group: ignore,
        groupEnd: ignore,
        info: ignore,
        log: ignore,
        profile: ignore,
        profileEnd: ignore,
        time: ignore,
        timeEnd: ignore,
        trace: ignore,
        warn: ignore
    }
};
(function () {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());
;
(function()
{
 "use strict";
 var Global,FsRoot,LibraryJS,WebComponent,WcTabStrip,WebSharper,Obj,WcTabStripT,WcSplitter,WcSplitterT,AppFramework,PlugInVar,PlugInView,PlugInDoc,PlugInAction,PlugInQuery,PlugIn,LayoutEngineModule,TestingJS,Test,SC$1,Operators,UI,HtmlModule,attr,Utils,Seq,Hoverable,Hoverable$1,View,Var,Doc,List,T,Numeric,Var$1,JavaScript,Pervasives,EventTarget,Node,JS,Unchecked,Arrays,Library,Event,UIEvent,ResizeObserver,Templating,Runtime,Server,TemplateInstance,ProviderBuilder,Handler,testing_Templates,GeneratedPrintf,testing_GeneratedPrintf,Strings,ListModel,Client,String,ParseO,AttrProxy,AttrModule,Lazy,LayoutEngine,System,Guid,WindowOrWorkerGlobalScope,Slice,Enumerator,Elt,Snap,T$1,DomUtility,ConcreteVar,Client$1,Templates,CancellationTokenSource,Collections,List$1,Dictionary,HashSet,Object,FromView,Attrs,Array,LazyExtensionsProxy,LazyRecord,DateUtil,Docs,Abbrev,Fresh,Error,AggregateException,Concurrency,DocElemNode,CharacterData,CheckedInput,DictionaryUtil,DynamicAttrNode,Storage,Updates,SC$2,SC$3,An,Settings,Mailbox,CT,AsyncBody,SC$4,Attrs$1,Dyn,ArrayStorage,SC$5,SC$6,Prepare,KeyCollection,Docs$1,RunState,NodeSet,Anims,SC$7,Scheduler,OperationCanceledException,HashSetUtil,FormatException,Queue,SC$8,AppendList,Easing,HashSet$1,DomNodes,String$1,SC$9,Char,IntelliFactory,Runtime$1,Reflect,console,$,Math,Date;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 WebComponent=LibraryJS.WebComponent=LibraryJS.WebComponent||{};
 WcTabStrip=WebComponent.WcTabStrip=WebComponent.WcTabStrip||{};
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 Obj=WebSharper.Obj=WebSharper.Obj||{};
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
 LayoutEngineModule=LibraryJS.LayoutEngineModule=LibraryJS.LayoutEngineModule||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 Test=TestingJS.Test=TestingJS.Test||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 Operators=WebSharper.Operators=WebSharper.Operators||{};
 UI=WebSharper.UI=WebSharper.UI||{};
 HtmlModule=UI.HtmlModule=UI.HtmlModule||{};
 attr=HtmlModule.attr=HtmlModule.attr||{};
 Utils=WebSharper.Utils=WebSharper.Utils||{};
 Seq=WebSharper.Seq=WebSharper.Seq||{};
 Hoverable=LibraryJS.Hoverable=LibraryJS.Hoverable||{};
 Hoverable$1=Hoverable.Hoverable=Hoverable.Hoverable||{};
 View=UI.View=UI.View||{};
 Var=UI.Var=UI.Var||{};
 Doc=UI.Doc=UI.Doc||{};
 List=WebSharper.List=WebSharper.List||{};
 T=List.T=List.T||{};
 Numeric=WebSharper.Numeric=WebSharper.Numeric||{};
 Var$1=UI.Var$1=UI.Var$1||{};
 JavaScript=WebSharper.JavaScript=WebSharper.JavaScript||{};
 Pervasives=JavaScript.Pervasives=JavaScript.Pervasives||{};
 EventTarget=Global.EventTarget;
 Node=Global.Node;
 JS=JavaScript.JS=JavaScript.JS||{};
 Unchecked=WebSharper.Unchecked=WebSharper.Unchecked||{};
 Arrays=WebSharper.Arrays=WebSharper.Arrays||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 Event=Global.Event;
 UIEvent=Global.UIEvent;
 ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};
 Templating=UI.Templating=UI.Templating||{};
 Runtime=Templating.Runtime=Templating.Runtime||{};
 Server=Runtime.Server=Runtime.Server||{};
 TemplateInstance=Server.TemplateInstance=Server.TemplateInstance||{};
 ProviderBuilder=Server.ProviderBuilder=Server.ProviderBuilder||{};
 Handler=Server.Handler=Server.Handler||{};
 testing_Templates=Global.testing_Templates=Global.testing_Templates||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 testing_GeneratedPrintf=Global.testing_GeneratedPrintf=Global.testing_GeneratedPrintf||{};
 Strings=WebSharper.Strings=WebSharper.Strings||{};
 ListModel=UI.ListModel=UI.ListModel||{};
 Client=Runtime.Client=Runtime.Client||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 AttrProxy=UI.AttrProxy=UI.AttrProxy||{};
 AttrModule=UI.AttrModule=UI.AttrModule||{};
 Lazy=WebSharper.Lazy=WebSharper.Lazy||{};
 LayoutEngine=LibraryJS.LayoutEngine=LibraryJS.LayoutEngine||{};
 System=Global.System=Global.System||{};
 Guid=System.Guid=System.Guid||{};
 WindowOrWorkerGlobalScope=Global.WindowOrWorkerGlobalScope;
 Slice=WebSharper.Slice=WebSharper.Slice||{};
 Enumerator=WebSharper.Enumerator=WebSharper.Enumerator||{};
 Elt=UI.Elt=UI.Elt||{};
 Snap=UI.Snap=UI.Snap||{};
 T$1=Enumerator.T=Enumerator.T||{};
 DomUtility=UI.DomUtility=UI.DomUtility||{};
 ConcreteVar=UI.ConcreteVar=UI.ConcreteVar||{};
 Client$1=UI.Client=UI.Client||{};
 Templates=Client$1.Templates=Client$1.Templates||{};
 CancellationTokenSource=WebSharper.CancellationTokenSource=WebSharper.CancellationTokenSource||{};
 Collections=WebSharper.Collections=WebSharper.Collections||{};
 List$1=Collections.List=Collections.List||{};
 Dictionary=Collections.Dictionary=Collections.Dictionary||{};
 HashSet=Collections.HashSet=Collections.HashSet||{};
 Object=Global.Object;
 FromView=UI.FromView=UI.FromView||{};
 Attrs=UI.Attrs=UI.Attrs||{};
 Array=UI.Array=UI.Array||{};
 LazyExtensionsProxy=WebSharper.LazyExtensionsProxy=WebSharper.LazyExtensionsProxy||{};
 LazyRecord=LazyExtensionsProxy.LazyRecord=LazyExtensionsProxy.LazyRecord||{};
 DateUtil=WebSharper.DateUtil=WebSharper.DateUtil||{};
 Docs=UI.Docs=UI.Docs||{};
 Abbrev=UI.Abbrev=UI.Abbrev||{};
 Fresh=Abbrev.Fresh=Abbrev.Fresh||{};
 Error=Global.Error;
 AggregateException=WebSharper.AggregateException=WebSharper.AggregateException||{};
 Concurrency=WebSharper.Concurrency=WebSharper.Concurrency||{};
 DocElemNode=UI.DocElemNode=UI.DocElemNode||{};
 CharacterData=Global.CharacterData;
 CheckedInput=UI.CheckedInput=UI.CheckedInput||{};
 DictionaryUtil=Collections.DictionaryUtil=Collections.DictionaryUtil||{};
 DynamicAttrNode=UI.DynamicAttrNode=UI.DynamicAttrNode||{};
 Storage=UI.Storage=UI.Storage||{};
 Updates=UI.Updates=UI.Updates||{};
 SC$2=Global.StartupCode$WebSharper_UI$DomUtility=Global.StartupCode$WebSharper_UI$DomUtility||{};
 SC$3=Global.StartupCode$WebSharper_UI$Templates=Global.StartupCode$WebSharper_UI$Templates||{};
 An=UI.An=UI.An||{};
 Settings=Client$1.Settings=Client$1.Settings||{};
 Mailbox=Abbrev.Mailbox=Abbrev.Mailbox||{};
 CT=Concurrency.CT=Concurrency.CT||{};
 AsyncBody=Concurrency.AsyncBody=Concurrency.AsyncBody||{};
 SC$4=Global.StartupCode$WebSharper_Main$Concurrency=Global.StartupCode$WebSharper_Main$Concurrency||{};
 Attrs$1=Client$1.Attrs=Client$1.Attrs||{};
 Dyn=Attrs$1.Dyn=Attrs$1.Dyn||{};
 ArrayStorage=Storage.ArrayStorage=Storage.ArrayStorage||{};
 SC$5=Global.StartupCode$WebSharper_UI$Attr_Client=Global.StartupCode$WebSharper_UI$Attr_Client||{};
 SC$6=Global.StartupCode$WebSharper_UI$Abbrev=Global.StartupCode$WebSharper_UI$Abbrev||{};
 Prepare=Templates.Prepare=Templates.Prepare||{};
 KeyCollection=Collections.KeyCollection=Collections.KeyCollection||{};
 Docs$1=Client$1.Docs=Client$1.Docs||{};
 RunState=Docs$1.RunState=Docs$1.RunState||{};
 NodeSet=Docs$1.NodeSet=Docs$1.NodeSet||{};
 Anims=UI.Anims=UI.Anims||{};
 SC$7=Global.StartupCode$WebSharper_UI$Doc_Proxy=Global.StartupCode$WebSharper_UI$Doc_Proxy||{};
 Scheduler=Concurrency.Scheduler=Concurrency.Scheduler||{};
 OperationCanceledException=WebSharper.OperationCanceledException=WebSharper.OperationCanceledException||{};
 HashSetUtil=Collections.HashSetUtil=Collections.HashSetUtil||{};
 FormatException=WebSharper.FormatException=WebSharper.FormatException||{};
 Queue=WebSharper.Queue=WebSharper.Queue||{};
 SC$8=Global.StartupCode$WebSharper_UI$Animation=Global.StartupCode$WebSharper_UI$Animation||{};
 AppendList=UI.AppendList=UI.AppendList||{};
 Easing=UI.Easing=UI.Easing||{};
 HashSet$1=Abbrev.HashSet=Abbrev.HashSet||{};
 DomNodes=Docs$1.DomNodes=Docs$1.DomNodes||{};
 String$1=UI.String=UI.String||{};
 SC$9=Global.StartupCode$WebSharper_UI$AppendList=Global.StartupCode$WebSharper_UI$AppendList||{};
 Char=WebSharper.Char=WebSharper.Char||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime$1=IntelliFactory&&IntelliFactory.Runtime;
 Reflect=Global.Reflect;
 console=Global.console;
 $=Global.jQuery;
 Math=Global.Math;
 Date=Global.Date;
 WcTabStrip.css=function()
 {
  SC$1.$cctor();
  return SC$1.css;
 };
 WcTabStrip.tabStrip=function(selected,top,horizontal,tabs,content)
 {
  var strip;
  strip=Doc.Element("div",[AttrProxy.Create("class",(((Runtime$1.Curried3(function($1,$2,$3)
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
      return Seq.append([Doc.Element("style",T.Empty,List.ofArray([Doc.TextNode(WcTabStrip.css())]))],Seq.delay(function()
      {
       return[Doc.Element("style",T.Empty,List.ofArray([Doc.TextView(View.Map(function($1)
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
 WcTabStrip.init=function()
 {
  SC$1.$cctor();
  return SC$1.init;
 };
 Obj=WebSharper.Obj=Runtime$1.Class({
  Equals:function(obj)
  {
   return this===obj;
  },
  GetHashCode:function()
  {
   return -1;
  }
 },null,Obj);
 Obj.New=Runtime$1.Ctor(function()
 {
 },Obj);
 WcTabStripT=WcTabStrip.WcTabStripT=Runtime$1.Class({
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
    a=WcTabStrip.tabStrip($this.selected,top,true,tabs,Doc.Element("slot",T.Empty,T.Empty));
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
 WcTabStripT.New=Runtime$1.Ctor(function()
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
 WcSplitter.set_layoutHorizontal=function($1)
 {
  SC$1.$cctor();
  SC$1.layoutHorizontal=$1;
 };
 WcSplitter.layoutHorizontal=function()
 {
  SC$1.$cctor();
  return SC$1.layoutHorizontal;
 };
 WcSplitter.set_layoutVertical=function($1)
 {
  SC$1.$cctor();
  SC$1.layoutVertical=$1;
 };
 WcSplitter.layoutVertical=function()
 {
  SC$1.$cctor();
  return SC$1.layoutVertical;
 };
 WcSplitter.init=function(layoutH,layoutV)
 {
  var _nm,_c;
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
 WcSplitterT=WcSplitter.WcSplitterT=Runtime$1.Class({
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
    return(((((Runtime$1.Curried(function($1,$2,$3,$4,$5)
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
 WcSplitterT.New=Runtime$1.Ctor(function()
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
 AppFramework.plugIns=function()
 {
  SC$1.$cctor();
  return SC$1.plugIns;
 };
 AppFramework.mainDocV=function()
 {
  SC$1.$cctor();
  return SC$1.mainDocV;
 };
 AppFramework.TemplateFileName=function()
 {
  SC$1.$cctor();
  return SC$1.TemplateFileName;
 };
 AppFramework.defaultPlugIn=function()
 {
  SC$1.$cctor();
  return SC$1.defaultPlugIn;
 };
 AppFramework.selectionPlugInO=function()
 {
  SC$1.$cctor();
  return SC$1.selectionPlugInO;
 };
 AppFramework.currentPlugInW=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInW;
 };
 AppFramework.currentPlugInV=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInV;
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
   }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
  }));
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
   }),(p=Handler.CompleteHoles(b.k,b.h,[["value",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.namevalueinput(p[0])),(b.i=i,i)))).get_Doc();
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
   }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.namevalue(p[0])),(b.i=i,i)))).get_Doc();
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
   }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
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
    }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.action(p[0])),(b.i=i,i)))).get_Doc():(b$1=(t$1=ProviderBuilder.Make().WithHole({
     $:1,
     $0:"name",
     $1:act.actName
    }),t$1.WithHole(Handler.EventQ2(t$1.k,"click",function()
    {
     return t$1.i;
    },function(ev)
    {
     AppFramework.callFunction(ev,null,act.actFunction);
    }))),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],testing_Templates.actiondisabled(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
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
   }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
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
 AppFramework.AppFwkClient=function()
 {
  SC$1.$cctor();
  return SC$1.AppFwkClient;
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
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.appframework(p[0])),(b.i=i,i)))).get_Doc();
 };
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
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.wcompsplitterhor(p[0])),(b.i=i,i)))).get_Doc();
 };
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
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.wcompsplitterver(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFramework.newVar=function(name,_var)
 {
  return PlugInVar.New(name,_var);
 };
 AppFramework.newViw=function(name,viw)
 {
  return PlugInView.New(name,viw);
 };
 AppFramework.newDoc=function(name,doc)
 {
  return PlugInDoc.New(name,{
   $:0,
   $0:doc
  });
 };
 AppFramework.newQry=function(name,qry)
 {
  return PlugInQuery.New(name,qry);
 };
 AppFramework.newAct=function(name,fnc)
 {
  return PlugInAction.New(name,{
   $:0,
   $0:fnc
  },View.Const(true));
 };
 AppFramework.newActF=function(name,fncF)
 {
  return PlugInAction.New(name,fncF,View.Const(true));
 };
 AppFramework.newDocF=function(name,docF)
 {
  return PlugInDoc.New(name,docF);
 };
 AppFramework.tryGetPlugIn=function(plgName)
 {
  return AppFramework.plugIns().TryFindByKey(plgName);
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
 AppFramework.tryGetViw=function(plgName,viwName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:Arrays.tryFind(function(viw)
  {
   return viw.viwName===viwName;
  },o.$0.plgViews);
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
 AppFramework.tryGetDoc=function(plgName,docName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:Arrays.tryFind(function(doc)
  {
   return doc.docName===docName;
  },o.$0.plgDocs);
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
 AppFramework.actHello=function()
 {
  SC$1.$cctor();
  return SC$1.actHello;
 };
 AppFramework.qryDocs=function()
 {
  SC$1.$cctor();
  return SC$1.qryDocs;
 };
 AppFramework.getMainDoc=function()
 {
  SC$1.$cctor();
  return SC$1.getMainDoc;
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
 LayoutEngineModule.Identifier=function(a)
 {
  var $1,a$1,t;
  return(a$1=LibraryJS.REGEX$1("^[$a-zA-Z_][0-9a-zA-Z_\\.\\-$]*$","",a),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($1=Arrays.get(a$1.$0,0),true)))?{
   $:1,
   $0:$1
  }:null;
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
 LayoutEngineModule.fixedSplitter=function(vertical,pixel,first,doc1,doc2)
 {
  var sizes,b,p,i,b$1,p$1,i$1;
  sizes=(((first?Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1($2.toFixed(6)+"px calc(100% - "+$3.toFixed(6)+"px)");
  }):Runtime$1.Curried3(function($1,$2,$3)
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
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.fixedsplitterver(p[0])),(b.i=i,i)))).get_Doc():(b$1=ProviderBuilder.Make().WithHole({
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
  }),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],testing_Templates.fixedsplitterhor(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
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
 LayoutEngineModule.errDoc=function(txt)
 {
  return Doc.Element("div",[],[Doc.TextNode(txt)]);
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
 LayoutEngineModule.splitTokens=function(line)
 {
  return List.ofSeq(Seq.collect(Global.id,Seq.mapi(function(i,s)
  {
   var t;
   return i%2===1?[" "+s]:(t=Strings.Trim(s),t===""?[]:Strings.SplitChars(t,[" "],1));
  },String.splitByChar("\"",line))));
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
    $0:((((Runtime$1.Curried(function($2,$3,$4,$5)
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
    return[Doc.Element("div",[],[Doc.TextNode((((Runtime$1.Curried3(function($3,$4,$5)
    {
     return $3("Parameters do not coincide with definition "+GeneratedPrintf.p($4)+" - "+Utils.printList(Utils.prettyPrint,$5));
    }))(Global.id))(doc))(parms))]),T.Empty];
  }
 };
 LayoutEngineModule.getDocFinal=function(parms,doc)
 {
  var m;
  m=LayoutEngineModule.getDocF(parms,doc);
  return m[1].$==0?m[0]:LayoutEngineModule.errDoc((((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1("Too many parameters "+GeneratedPrintf.p($2)+" "+Utils.printList(Utils.prettyPrint,$3));
  }))(Global.id))(doc))(parms));
 };
 LayoutEngineModule.turnToView=function(f)
 {
  return Doc.EmbedView(View.Map(f,AppFramework.mainDocV().get_View()));
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
  }(Global.id))(id)),parms]:o$2.$0):o.$0)))))):docs.$==0?[Doc.get_Empty(),T.Empty]:(rest=docs.$1,(m=LayoutEngineModule.getTextData(lytNm,docs.$0),m.$==1?[Doc.TextView(m.$0),rest]:m.$==2?[LayoutEngineModule.errDoc((function($2)
  {
   return function($3)
   {
    return $2("Unexpected action: "+Utils.toSafe($3));
   };
  }(Global.id))(m.$0.actName)),rest]:[Doc.TextNode(m.$0),rest]));
 };
 LayoutEngineModule.getDocs=function(lytNm,docs)
 {
  var m;
  return docs.$==0?T.Empty:(m=LayoutEngineModule.getOneDoc(lytNm,docs),new T({
   $:1,
   $0:m[0],
   $1:LayoutEngineModule.getDocs(lytNm,m[1])
  }));
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
 LayoutEngineModule.createSplitter=function(lytNm,vertical,measures,docs)
 {
  var p;
  p=LayoutEngineModule.pairOfDocs(lytNm,docs);
  return measures.$==1?LayoutEngineModule.variableSplitter(vertical,measures.$0,measures.$1,measures.$2,p[0],p[1]):LayoutEngineModule.fixedSplitter(vertical,measures.$0,measures.$1,p[0],p[1]);
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
 LayoutEngineModule.createSplitterM=function()
 {
  SC$1.$cctor();
  return SC$1.createSplitterM;
 };
 LayoutEngineModule.createButtonM=function()
 {
  SC$1.$cctor();
  return SC$1.createButtonM;
 };
 LayoutEngineModule.createInputM=function()
 {
  SC$1.$cctor();
  return SC$1.createInputM;
 };
 LayoutEngineModule.createTextAreaM=function()
 {
  SC$1.$cctor();
  return SC$1.createTextAreaM;
 };
 LayoutEngineModule.createElementM=function()
 {
  SC$1.$cctor();
  return SC$1.createElementM;
 };
 LayoutEngineModule.createDocM=function()
 {
  SC$1.$cctor();
  return SC$1.createDocM;
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
 LayoutEngineModule.none=function(x)
 {
  return Doc.Element("span",[],[]);
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
      $0:(l=lyt.lytName,Runtime$1.Curried(LayoutEngineModule.inputFile,4,[l])),
      $1:"attrs",
      $2:"Label",
      $3:"Action",
      $4:"[Doc]"
     })],Seq.delay(function()
     {
      var l$1;
      return Seq.append([AppFramework.newDocF("InputLabel",{
       $:3,
       $0:(l$1=lyt.lytName,Runtime$1.Curried(LayoutEngineModule.inputLabel,3,[l$1])),
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
 LayoutEngineModule.newLyt=function(name,lyt)
 {
  return LayoutEngine.New(name,Var$1.Create$1(lyt));
 };
 LayoutEngineModule.addNewLayout=function(name,layout)
 {
  var x,x$1;
  LayoutEngineModule.addLayout((x=(x$1=!Unchecked.Equals(layout,null)?layout:"\r\n            split horizontal 0-50-100 AppFramework.AppFwkClient Hello\r\n            Hello h1 \"color:blue; class=btn-primary\" \"How are you today?\" Ask\r\n            Ask Doc InputLabel \"placeholder=Type you answer here...\" \"Answer:\" AppFramework.mainDocV  \r\n            ",(String.unindentStr())(x$1)),LayoutEngineModule.newLyt(!Unchecked.Equals(layout,null)?name:"Lyt_"+Strings.Replace(Global.String(Guid.NewGuid()),"-",""),x)));
 };
 Test.main=function()
 {
  var x,a;
  x=AppFramework.getMainDoc().f();
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
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
  SC$1.observers=T.Empty;
  SC$1.css="\r\n                .tab-panel {\r\n                 overflow  : hidden   ;\r\n                 display   : flex     ;\r\n                 flex-flow : column   ;\r\n                 background: lightgray;\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                }\r\n                .tab-content {\r\n                 flex      : 1 1     ;\r\n                 overflow  : auto    ;\r\n                 position  : relative;\r\n                }\r\n                .tab-children {\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                 position  : absolute;\r\n                 display   : grid    ;\r\n                }\r\n                .tab-strip {\r\n                 padding   : 0pt     ;\r\n                 flex      : 0 0     ;\r\n                }\r\n                .tab {\r\n                 border     : 0.2pt solid transparent;\r\n                 padding    : 0pt 4pt;\r\n                 display    : inline-block;\r\n                 font-family: sans-serif;\r\n                 font-weight: 200;\r\n                 font-size  : small;\r\n                 color      : #666;\r\n                 cursor     : pointer;\r\n                }\r\n                .top>.tab {\r\n                 border-radius: 2pt 2pt 0pt 0pt;\r\n                 border-bottom-width: 0pt;\r\n                 vertical-align: bottom;\r\n                }\r\n                .bottom>.tab {\r\n                 border-top-width: 0pt;\r\n                 border-radius: 0pt 0pt 2pt 2pt;\r\n                 vertical-align: top;\r\n                }\r\n                .horizontal>.tab:not(:first-child) {\r\n                 border-left-width: 0pt;\r\n                }\r\n                .tab.hovering {\r\n                 background: red;\r\n                }\r\n                .tab.selected {\r\n                 background: white;\r\n                 border-left-width: 0.2pt;\r\n                 color: black;\r\n                 font-weight: 500;\r\n                 border-color: black;\r\n                }\r\n                .horizontal>.tab.selected {\r\n                 border-left-width: 0.2pt;\r\n                }\r\n                ::slotted(*              ) { \r\n                 width : 100%;\r\n                 height: 100%;\r\n                }\r\n                        ";
  SC$1.init=Lazy.Create(function()
  {
   var _nm,_c;
   _nm="wcomp-tabstrip";
   _c=self.FsRoot.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New;
   console.log("defineWebComponent: "+_nm);
   Object.setPrototypeOf(_c.prototype,self.HTMLElement.prototype);
   Object.setPrototypeOf(_c,self.HTMLElement);
   Object.setPrototypeOf(WcTabStripT.Constructor.prototype,_c.prototype);
   self.customElements.define(_nm,WcTabStripT.Constructor);
  });
  SC$1.layoutHorizontal=Runtime$1.Curried(function($1,$2,$3,$4,$5)
  {
   return Doc.get_Empty();
  },5);
  SC$1.layoutVertical=Runtime$1.Curried(function($1,$2,$3,$4,$5)
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
   })),(p$6=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p$6[1],testing_Templates.appfwkclient(p$6[0])),(b.i=i,i)))).get_Doc();
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
   WcSplitter.init(Runtime$1.Curried(AppFramework.horizontal,5),Runtime$1.Curried(AppFramework.vertical,5));
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
 Operators.range=function(min,max)
 {
  var count;
  count=1+max-min;
  return count<=0?[]:Seq.init(count,function(x)
  {
   return x+min;
  });
 };
 Operators.FailWith=function(msg)
 {
  throw new Error(msg);
 };
 Operators.KeyValue=function(kvp)
 {
  return[kvp.K,kvp.V];
 };
 attr=HtmlModule.attr=Runtime$1.Class({},Obj,attr);
 Utils.toSafe=function(s)
 {
  return s==null?"":s;
 };
 Utils.prettyPrint=function(o)
 {
  var t,s;
  function m(k,v)
  {
   return k+" = "+Utils.prettyPrint(v);
  }
  return o===null?"null":(t=typeof o,t=="string"?"\""+o+"\"":t=="object"?o instanceof Global.Array?"[|"+Strings.concat("; ",Arrays.map(Utils.prettyPrint,o))+"|]":(s=Global.String(o),s==="[object Object]"?"{"+Strings.concat("; ",Arrays.map(function($1)
  {
   return m($1[0],$1[1]);
  },JS.GetFields(o)))+"}":s):Global.String(o));
 };
 Utils.printList=function(p,o)
 {
  return"["+Strings.concat("; ",Seq.map(p,o))+"]";
 };
 Seq.delay=function(f)
 {
  return{
   GetEnumerator:function()
   {
    return Enumerator.Get(f());
   }
  };
 };
 Seq.collect=function(f,s)
 {
  return Seq.concat(Seq.map(f,s));
 };
 Seq.indexed=function(s)
 {
  return Seq.mapi(function($1,$2)
  {
   return[$1,$2];
  },s);
 };
 Seq.append=function(s1,s2)
 {
  return{
   GetEnumerator:function()
   {
    var e1,first;
    e1=Enumerator.Get(s1);
    first=[true];
    return new T$1.New(e1,null,function(x)
    {
     var x$1;
     return x.s.MoveNext()?(x.c=x.s.Current(),true):(x$1=x.s,!Unchecked.Equals(x$1,null)?x$1.Dispose():void 0,x.s=null,first[0]&&(first[0]=false,x.s=Enumerator.Get(s2),x.s.MoveNext()?(x.c=x.s.Current(),true):(x.s.Dispose(),x.s=null,false)));
    },function(x)
    {
     var x$1;
     x$1=x.s;
     !Unchecked.Equals(x$1,null)?x$1.Dispose():void 0;
    });
   }
  };
 };
 Seq.map=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var en;
    en=Enumerator.Get(s);
    return new T$1.New(null,null,function(e)
    {
     return en.MoveNext()&&(e.c=f(en.Current()),true);
    },function()
    {
     en.Dispose();
    });
   }
  };
 };
 Seq.tryPick=function(f,s)
 {
  var e,r;
  e=Enumerator.Get(s);
  try
  {
   r=null;
   while(Unchecked.Equals(r,null)&&e.MoveNext())
    r=f(e.Current());
   return r;
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Seq.tryFind=function(ok,s)
 {
  var e,r,x;
  e=Enumerator.Get(s);
  try
  {
   r=null;
   while(r==null&&e.MoveNext())
    {
     x=e.Current();
     ok(x)?r={
      $:1,
      $0:x
     }:void 0;
    }
   return r;
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Seq.mapi=function(f,s)
 {
  return Seq.map2(f,Seq.initInfinite(Global.id),s);
 };
 Seq.choose=function(f,s)
 {
  return Seq.collect(function(x)
  {
   var m;
   m=f(x);
   return m==null?T.Empty:List.ofArray([m.$0]);
  },s);
 };
 Seq.concat=function(ss)
 {
  return{
   GetEnumerator:function()
   {
    var outerE;
    outerE=Enumerator.Get(ss);
    return new T$1.New(null,null,function(st)
    {
     var m;
     while(true)
      {
       m=st.s;
       if(Unchecked.Equals(m,null))
       {
        if(outerE.MoveNext())
         {
          st.s=Enumerator.Get(outerE.Current());
          st=st;
         }
        else
         {
          outerE.Dispose();
          return false;
         }
       }
       else
        if(m.MoveNext())
         {
          st.c=m.Current();
          return true;
         }
        else
         {
          st.Dispose();
          st.s=null;
          st=st;
         }
      }
    },function(st)
    {
     var x;
     x=st.s;
     !Unchecked.Equals(x,null)?x.Dispose():void 0;
     !Unchecked.Equals(outerE,null)?outerE.Dispose():void 0;
    });
   }
  };
 };
 Seq.init=function(n,f)
 {
  return Seq.take(n,Seq.initInfinite(f));
 };
 Seq.map2=function(f,s1,s2)
 {
  return{
   GetEnumerator:function()
   {
    var e1,e2;
    e1=Enumerator.Get(s1);
    e2=Enumerator.Get(s2);
    return new T$1.New(null,null,function(e)
    {
     return e1.MoveNext()&&e2.MoveNext()&&(e.c=f(e1.Current(),e2.Current()),true);
    },function()
    {
     e1.Dispose();
     e2.Dispose();
    });
   }
  };
 };
 Seq.initInfinite=function(f)
 {
  return{
   GetEnumerator:function()
   {
    return new T$1.New(0,null,function(e)
    {
     e.c=f(e.s);
     e.s=e.s+1;
     return true;
    },void 0);
   }
  };
 };
 Seq.tryFindIndex=function(ok,s)
 {
  var e,loop,i;
  e=Enumerator.Get(s);
  try
  {
   loop=true;
   i=0;
   while(loop&&e.MoveNext())
    if(ok(e.Current()))
     loop=false;
    else
     i=i+1;
   return loop?null:{
    $:1,
    $0:i
   };
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Seq.filter=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var o;
    o=Enumerator.Get(s);
    return new T$1.New(null,null,function(e)
    {
     var loop,c,res;
     loop=o.MoveNext();
     c=o.Current();
     res=false;
     while(loop)
      if(f(c))
       {
        e.c=c;
        res=true;
        loop=false;
       }
      else
       if(o.MoveNext())
        c=o.Current();
       else
        loop=false;
     return res;
    },function()
    {
     o.Dispose();
    });
   }
  };
 };
 Seq.take=function(n,s)
 {
  n<0?Seq.nonNegative():void 0;
  return{
   GetEnumerator:function()
   {
    var e;
    e=[Enumerator.Get(s)];
    return new T$1.New(0,null,function(o)
    {
     var en;
     o.s=o.s+1;
     return o.s>n?false:(en=e[0],Unchecked.Equals(en,null)?Seq.insufficient():en.MoveNext()?(o.c=en.Current(),o.s===n?(en.Dispose(),e[0]=null):void 0,true):(en.Dispose(),e[0]=null,Seq.insufficient()));
    },function()
    {
     var x;
     x=e[0];
     !Unchecked.Equals(x,null)?x.Dispose():void 0;
    });
   }
  };
 };
 Seq.head=function(s)
 {
  var e;
  e=Enumerator.Get(s);
  try
  {
   return e.MoveNext()?e.Current():Seq.insufficient();
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Seq.iter=function(p,s)
 {
  var e;
  e=Enumerator.Get(s);
  try
  {
   while(e.MoveNext())
    p(e.Current());
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Seq.fold=function(f,x,s)
 {
  var r,e;
  r=x;
  e=Enumerator.Get(s);
  try
  {
   while(e.MoveNext())
    r=f(r,e.Current());
   return r;
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Seq.max=function(s)
 {
  var e,m,x;
  e=Enumerator.Get(s);
  try
  {
   if(!e.MoveNext())
    Seq.seqEmpty();
   m=e.Current();
   while(e.MoveNext())
    {
     x=e.Current();
     Unchecked.Compare(x,m)===1?m=x:void 0;
    }
   return m;
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Seq.seqEmpty=function()
 {
  return Operators.FailWith("The input sequence was empty.");
 };
 Seq.forall=function(p,s)
 {
  return!Seq.exists(function(x)
  {
   return!p(x);
  },s);
 };
 Seq.exists=function(p,s)
 {
  var e,r;
  e=Enumerator.Get(s);
  try
  {
   r=false;
   while(!r&&e.MoveNext())
    r=p(e.Current());
   return r;
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Hoverable$1=Hoverable.Hoverable=Runtime$1.Class({
  Content:function(e)
  {
   return e.on("mouseenter",function()
   {
    return DomUtility.AddClass(e.elt,"hovering");
   }).on("mouseleave",function()
   {
    return DomUtility.RemoveClass(e.elt,"hovering");
   });
  }
 },null,Hoverable$1);
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
 View.Map=function(fn,a)
 {
  return View.CreateLazy(function()
  {
   return Snap.Map(fn,a());
  });
 };
 View.Get=function(f,a)
 {
  var ok;
  function obs()
  {
   Snap.WhenRun(a(),function(v)
   {
    if(!ok[0])
     {
      ok[0]=true;
      f(v);
     }
   },function()
   {
    if(!ok[0])
     obs();
   });
  }
  ok=[false];
  obs();
 };
 View.Map2=function(fn,a,a$1)
 {
  return View.CreateLazy(function()
  {
   return Snap.Map2(fn,a(),a$1());
  });
 };
 View.Const=function(x)
 {
  var o;
  o=Snap.New({
   $:0,
   $0:x
  });
  return function()
  {
   return o;
  };
 };
 View.Sink=function(act,a)
 {
  function loop()
  {
   Snap.WhenRun(a(),act,function()
   {
    Concurrency.scheduler().Fork(loop);
   });
  }
  Concurrency.scheduler().Fork(loop);
 };
 View.CreateLazy=function(observe)
 {
  var lv;
  lv={
   c:null,
   o:observe
  };
  return function()
  {
   var c,$1;
   c=lv.c;
   return c===null?(c=lv.o(),lv.c=c,($1=c.s,$1!=null&&$1.$==0)?lv.o=null:Snap.WhenObsoleteRun(c,function()
   {
    lv.c=null;
   }),c):c;
  };
 };
 View.MapSeqCachedBy=function(key,conv,view)
 {
  var state;
  state=[new Dictionary.New$5()];
  return View.Map(function(xs)
  {
   var prevState,newState,result;
   prevState=state[0];
   newState=new Dictionary.New$5();
   result=Array.mapInPlace(function(x)
   {
    var k,res;
    k=key(x);
    res=prevState.ContainsKey(k)?prevState.get_Item(k):conv(x);
    newState.set_Item(k,res);
    return res;
   },Arrays.ofSeq(xs));
   state[0]=newState;
   return result;
  },view);
 };
 View.Bind=function(fn,view)
 {
  return View.Join(View.Map(fn,view));
 };
 View.TryGet=function(a)
 {
  return Snap.TryGet(a());
 };
 View.Map2Unit=function(a,a$1)
 {
  return View.CreateLazy(function()
  {
   return Snap.Map2Unit(a(),a$1());
  });
 };
 View.Join=function(a)
 {
  return View.CreateLazy(function()
  {
   return Snap.Join(a());
  });
 };
 View.MapSeqCachedViewBy=function(key,conv,view)
 {
  var state;
  state=[new Dictionary.New$5()];
  return View.Map(function(xs)
  {
   var prevState,newState,result;
   prevState=state[0];
   newState=new Dictionary.New$5();
   result=Array.mapInPlace(function(x)
   {
    var k,node,n;
    k=key(x);
    node=prevState.ContainsKey(k)?(n=prevState.get_Item(k),(Var$1.Set(n.r,x),n)):View.ConvertSeqNode(function(v)
    {
     return conv(k,v);
    },x);
    newState.set_Item(k,node);
    return node.e;
   },Arrays.ofSeq(xs));
   state[0]=newState;
   return result;
  },view);
 };
 View.ConvertSeqNode=function(conv,value)
 {
  var _var,view;
  _var=Var$1.Create$1(value);
  view=_var.get_View();
  return{
   e:conv(view),
   r:_var,
   w:view
  };
 };
 View.Map3=function(fn,a,a$1,a$2)
 {
  return View.CreateLazy(function()
  {
   return Snap.Map3(fn,a(),a$1(),a$2());
  });
 };
 View.Sequence=function(views)
 {
  return View.CreateLazy(function()
  {
   return Snap.Sequence(Seq.map(function(a)
   {
    return a();
   },views));
  });
 };
 Var=UI.Var=Runtime$1.Class({},Obj,Var);
 Var.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },Var);
 Doc=UI.Doc=Runtime$1.Class({},Obj,Doc);
 Doc.Element=function(name,attr$1,children)
 {
  var a,a$1;
  a=AttrProxy.Concat(attr$1);
  a$1=Doc.Concat(children);
  return Elt.New(DomUtility.CreateElement(name),a,a$1);
 };
 Doc.get_Empty=function()
 {
  return Doc.Mk(null,View.Const());
 };
 Doc.TextNode=function(v)
 {
  return Doc.Mk({
   $:5,
   $0:DomUtility.CreateText(v)
  },View.Const());
 };
 Doc.Concat=function(xs)
 {
  var x;
  x=Array.ofSeqNonCopying(xs);
  return Array.TreeReduce(Doc.get_Empty(),Doc.Append,x);
 };
 Doc.TextView=function(txt)
 {
  var node;
  node=Docs.CreateTextNode();
  return Doc.Mk({
   $:4,
   $0:node
  },View.Map(function(t)
  {
   Docs.UpdateTextNode(node,t);
  },txt));
 };
 Doc.Run=function(parent,doc)
 {
  Docs.LinkElement(parent,doc.docNode);
  Doc.RunInPlace(false,parent,doc);
 };
 Doc.ConvertBy=function(key,render,view)
 {
  return Doc.Flatten(View.MapSeqCachedBy(key,render,view));
 };
 Doc.EmbedView=function(view)
 {
  var node;
  node=Docs.CreateEmbedNode();
  return Doc.Mk({
   $:2,
   $0:node
  },View.Map(Global.ignore,View.Bind(function(doc)
  {
   Docs.UpdateEmbedNode(node,doc.docNode);
   return doc.updates;
  },view)));
 };
 Doc.Mk=function(node,updates)
 {
  return new Doc.New(node,updates);
 };
 Doc.Append=function(a,b)
 {
  return Doc.Mk({
   $:0,
   $0:a.docNode,
   $1:b.docNode
  },View.Map2Unit(a.updates,b.updates));
 };
 Doc.Button=function(caption,attrs,action)
 {
  var attrs$1;
  attrs$1=AttrProxy.Concat(attrs);
  return Elt.New(Doc.Clickable("button",action),attrs$1,Doc.TextNode(caption));
 };
 Doc.Input=function(attr$1,_var)
 {
  return Doc.InputInternal("input",function()
  {
   return Seq.append(attr$1,[AttrModule.Value(_var)]);
  });
 };
 Doc.InputArea=function(attr$1,_var)
 {
  return Doc.InputInternal("textarea",function()
  {
   return Seq.append(attr$1,[AttrModule.Value(_var)]);
  });
 };
 Doc.RunInPlace=function(childrenOnly,parent,doc)
 {
  var st;
  st=Docs.CreateRunState(parent,doc.docNode);
  View.Sink(An.get_UseAnimations()||Settings.BatchUpdatesEnabled()?Mailbox.StartProcessor(Docs.PerformAnimatedUpdate(childrenOnly,st,doc.docNode)):function()
  {
   Docs.PerformSyncUpdate(childrenOnly,st,doc.docNode);
  },doc.updates);
 };
 Doc.Flatten=function(view)
 {
  return Doc.EmbedView(View.Map(Doc.Concat,view));
 };
 Doc.Clickable=function(elem,action)
 {
  var el;
  el=DomUtility.CreateElement(elem);
  el.addEventListener("click",function(ev)
  {
   ev.preventDefault();
   return action();
  },false);
  return el;
 };
 Doc.InputInternal=function(elemTy,attr$1)
 {
  var el;
  el=DomUtility.CreateElement(elemTy);
  return Elt.New(el,AttrProxy.Concat(attr$1(el)),Doc.get_Empty());
 };
 Doc.New=Runtime$1.Ctor(function(docNode,updates)
 {
  Obj.New.call(this);
  this.docNode=docNode;
  this.updates=updates;
 },Doc);
 List.ofArray=function(arr)
 {
  var r,i,$1;
  r=T.Empty;
  for(i=Arrays.length(arr)-1,$1=0;i>=$1;i--)r=new T({
   $:1,
   $0:Arrays.get(arr,i),
   $1:r
  });
  return r;
 };
 List.ofSeq=function(s)
 {
  var e,$1,go,r,res,t;
  if(s instanceof T)
   return s;
  else
   if(s instanceof Global.Array)
    return List.ofArray(s);
   else
    {
     e=Enumerator.Get(s);
     try
     {
      go=e.MoveNext();
      if(!go)
       $1=T.Empty;
      else
       {
        res=new T({
         $:1
        });
        r=res;
        while(go)
         {
          r.$0=e.Current();
          e.MoveNext()?r=(t=new T({
           $:1
          }),r.$1=t,t):go=false;
         }
        r.$1=T.Empty;
        $1=res;
       }
      return $1;
     }
     finally
     {
      if(typeof e=="object"&&"Dispose"in e)
       e.Dispose();
     }
    }
 };
 List.head=function(l)
 {
  return l.$==1?l.$0:List.listEmpty();
 };
 List.tail=function(l)
 {
  return l.$==1?l.$1:List.listEmpty();
 };
 List.listEmpty=function()
 {
  return Operators.FailWith("The input list was empty.");
 };
 T=List.T=Runtime$1.Class({
  GetEnumerator:function()
  {
   return new T$1.New(this,null,function(e)
   {
    var m;
    m=e.s;
    return m.$==0?false:(e.c=m.$0,e.s=m.$1,true);
   },void 0);
  },
  GetEnumerator0:function()
  {
   return Enumerator.Get(this);
  }
 },null,T);
 T.Empty=new T({
  $:0
 });
 Numeric.TryParseInt32=function(s,r)
 {
  return Numeric.TryParse(s,-2147483648,2147483647,r);
 };
 Var$1=UI.Var$1=Runtime$1.Class({},Obj,Var$1);
 Var$1.Create$1=function(v)
 {
  return new ConcreteVar.New(false,Snap.New({
   $:2,
   $0:v,
   $1:[]
  }),v);
 };
 Var$1.Set=function(_var,value)
 {
  _var.Set(value);
 };
 Pervasives.NewFromSeq=function(fields)
 {
  var r,e,f;
  r={};
  e=Enumerator.Get(fields);
  try
  {
   while(e.MoveNext())
    {
     f=e.Current();
     r[f[0]]=f[1];
    }
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
  return r;
 };
 JS.GetFields=function(o)
 {
  var r,k;
  r=[];
  for(var k$1 in o)r.push([k$1,o[k$1]]);
  return r;
 };
 JS.GetFieldValues=function(o)
 {
  var r,k;
  r=[];
  for(var k$1 in o)r.push(o[k$1]);
  return r;
 };
 Unchecked.Equals=function(a,b)
 {
  var m,eqR,k,k$1;
  if(a===b)
   return true;
  else
   {
    m=typeof a;
    if(m=="object")
    {
     if(a===null||a===void 0||b===null||b===void 0)
      return false;
     else
      if("Equals"in a)
       return a.Equals(b);
      else
       if(a instanceof Global.Array&&b instanceof Global.Array)
        return Unchecked.arrayEquals(a,b);
       else
        if(a instanceof Global.Date&&b instanceof Global.Date)
         return Unchecked.dateEquals(a,b);
        else
         {
          eqR=[true];
          for(var k$2 in a)if(function(k$3)
          {
           eqR[0]=!a.hasOwnProperty(k$3)||b.hasOwnProperty(k$3)&&Unchecked.Equals(a[k$3],b[k$3]);
           return!eqR[0];
          }(k$2))
           break;
          if(eqR[0])
           {
            for(var k$3 in b)if(function(k$4)
            {
             eqR[0]=!b.hasOwnProperty(k$4)||a.hasOwnProperty(k$4);
             return!eqR[0];
            }(k$3))
             break;
           }
          return eqR[0];
         }
    }
    else
     return m=="function"&&("$Func"in a?a.$Func===b.$Func&&a.$Target===b.$Target:"$Invokes"in a&&"$Invokes"in b&&Unchecked.arrayEquals(a.$Invokes,b.$Invokes));
   }
 };
 Unchecked.arrayEquals=function(a,b)
 {
  var eq,i;
  if(Arrays.length(a)===Arrays.length(b))
   {
    eq=true;
    i=0;
    while(eq&&i<Arrays.length(a))
     {
      !Unchecked.Equals(Arrays.get(a,i),Arrays.get(b,i))?eq=false:void 0;
      i=i+1;
     }
    return eq;
   }
  else
   return false;
 };
 Unchecked.dateEquals=function(a,b)
 {
  return a.getTime()===b.getTime();
 };
 Unchecked.Compare=function(a,b)
 {
  var $1,m,$2,cmp,k,k$1;
  if(a===b)
   return 0;
  else
   {
    m=typeof a;
    switch(m=="function"?1:m=="boolean"?2:m=="number"?2:m=="string"?2:m=="object"?3:0)
    {
     case 0:
      return typeof b=="undefined"?0:-1;
     case 1:
      return Operators.FailWith("Cannot compare function values.");
     case 2:
      return a<b?-1:1;
     case 3:
      if(a===null)
       $2=-1;
      else
       if(b===null)
        $2=1;
       else
        if("CompareTo"in a)
         $2=a.CompareTo(b);
        else
         if("CompareTo0"in a)
          $2=a.CompareTo0(b);
         else
          if(a instanceof Global.Array&&b instanceof Global.Array)
           $2=Unchecked.compareArrays(a,b);
          else
           if(a instanceof Global.Date&&b instanceof Global.Date)
            $2=Unchecked.compareDates(a,b);
           else
            {
             cmp=[0];
             for(var k$2 in a)if(function(k$3)
             {
              return!a.hasOwnProperty(k$3)?false:!b.hasOwnProperty(k$3)?(cmp[0]=1,true):(cmp[0]=Unchecked.Compare(a[k$3],b[k$3]),cmp[0]!==0);
             }(k$2))
              break;
             if(cmp[0]===0)
              {
               for(var k$3 in b)if(function(k$4)
               {
                return!b.hasOwnProperty(k$4)?false:!a.hasOwnProperty(k$4)&&(cmp[0]=-1,true);
               }(k$3))
                break;
              }
             $2=cmp[0];
            }
      return $2;
    }
   }
 };
 Unchecked.compareArrays=function(a,b)
 {
  var cmp,i;
  if(Arrays.length(a)<Arrays.length(b))
   return -1;
  else
   if(Arrays.length(a)>Arrays.length(b))
    return 1;
   else
    {
     cmp=0;
     i=0;
     while(cmp===0&&i<Arrays.length(a))
      {
       cmp=Unchecked.Compare(Arrays.get(a,i),Arrays.get(b,i));
       i=i+1;
      }
     return cmp;
    }
 };
 Unchecked.compareDates=function(a,b)
 {
  return Unchecked.Compare(a.getTime(),b.getTime());
 };
 Unchecked.Hash=function(o)
 {
  var m;
  m=typeof o;
  return m=="function"?0:m=="boolean"?o?1:0:m=="number"?o:m=="string"?Unchecked.hashString(o):m=="object"?o==null?0:o instanceof Global.Array?Unchecked.hashArray(o):Unchecked.hashObject(o):0;
 };
 Unchecked.hashString=function(s)
 {
  var hash,i,$1;
  if(s===null)
   return 0;
  else
   {
    hash=5381;
    for(i=0,$1=s.length-1;i<=$1;i++)hash=Unchecked.hashMix(hash,s[i].charCodeAt());
    return hash;
   }
 };
 Unchecked.hashArray=function(o)
 {
  var h,i,$1;
  h=-34948909;
  for(i=0,$1=Arrays.length(o)-1;i<=$1;i++)h=Unchecked.hashMix(h,Unchecked.Hash(Arrays.get(o,i)));
  return h;
 };
 Unchecked.hashObject=function(o)
 {
  var h,k;
  if("GetHashCode"in o)
   return o.GetHashCode();
  else
   {
    h=[0];
    for(var k$1 in o)if(function(key)
    {
     h[0]=Unchecked.hashMix(Unchecked.hashMix(h[0],Unchecked.hashString(key)),Unchecked.Hash(o[key]));
     return false;
    }(k$1))
     break;
    return h[0];
   }
 };
 Unchecked.hashMix=function(x,y)
 {
  return(x<<5)+x+y;
 };
 Arrays.get=function(arr,n)
 {
  Arrays.checkBounds(arr,n);
  return arr[n];
 };
 Arrays.checkBounds=function(arr,n)
 {
  if(n<0||n>=arr.length)
   Operators.FailWith("Index was outside the bounds of the array.");
 };
 Arrays.length=function(arr)
 {
  return arr.dims===2?arr.length*arr.length:arr.length;
 };
 Arrays.set=function(arr,n,x)
 {
  Arrays.checkBounds(arr,n);
  arr[n]=x;
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
    ResizeObserver.set_observers(new T({
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
 ResizeObserver.set_observers=function($1)
 {
  SC$1.$cctor();
  SC$1.observers=$1;
 };
 ResizeObserver.observers=function()
 {
  SC$1.$cctor();
  return SC$1.observers;
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
 View=UI.View=Runtime$1.Class({},null,View);
 TemplateInstance=Server.TemplateInstance=Runtime$1.Class({
  get_Doc:function()
  {
   return this.doc;
  }
 },Obj,TemplateInstance);
 TemplateInstance.New=Runtime$1.Ctor(function(c,doc)
 {
  Obj.New.call(this);
  this.doc=doc;
  this.allVars=c.$==0?c.$0:Operators.FailWith("Should not happen");
 },TemplateInstance);
 ProviderBuilder=Server.ProviderBuilder=Runtime$1.Class({
  WithHole:function(h)
  {
   this.h.push(h);
   return this;
  }
 },null,ProviderBuilder);
 ProviderBuilder.Make=function()
 {
  var c;
  return ProviderBuilder.New(null,(c=Guid.NewGuid(),Global.String(c)),[]);
 };
 ProviderBuilder.New=function(Instance,Key,Holes)
 {
  return new ProviderBuilder({
   i:Instance,
   k:Key,
   h:Holes
  });
 };
 Handler.EventQ2=function(key,holeName,ti,f)
 {
  return{
   $:5,
   $0:holeName,
   $1:true,
   $2:function(el)
   {
    return function(ev)
    {
     return f({
      Vars:ti(),
      Target:el,
      Event:ev
     });
    };
   }
  };
 };
 Handler.CompleteHoles=function(a,filledHoles,vars)
 {
  var allVars,filledVars,e,h,$1,n;
  function c(name,ty)
  {
   var p,r,r$1,r$2;
   return filledVars.Contains(name)?null:(p=ty===0?(r=Var$1.Create$1(""),[{
    $:8,
    $0:name,
    $1:r
   },r]):ty===1?(r$1=Var$1.Create$1(0),[{
    $:13,
    $0:name,
    $1:r$1
   },r$1]):ty===2?(r$2=Var$1.Create$1(false),[{
    $:9,
    $0:name,
    $1:r$2
   },r$2]):Operators.FailWith("Invalid value type"),(allVars.set_Item(name,p[1]),{
    $:1,
    $0:p[0]
   }));
  }
  allVars=new Dictionary.New$5();
  filledVars=new HashSet.New$3();
  e=Enumerator.Get(filledHoles);
  try
  {
   while(e.MoveNext())
    {
     h=e.Current();
     (h.$==8?($1=[h.$0,Client.Box(h.$1)],true):h.$==11?($1=[h.$0,Client.Box(h.$1)],true):h.$==10?($1=[h.$0,Client.Box(h.$1)],true):h.$==13?($1=[h.$0,Client.Box(h.$1)],true):h.$==12?($1=[h.$0,Client.Box(h.$1)],true):h.$==9&&($1=[h.$0,Client.Box(h.$1)],true))?(n=$1[0],filledVars.Add(n),allVars.set_Item(n,$1[1])):void 0;
    }
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
  return[Seq.append(filledHoles,Arrays.choose(function($2)
  {
   return c($2[0],$2[1]);
  },vars)),{
   $:0,
   $0:allVars
  }];
 };
 testing_Templates.tile=function(h)
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
 testing_Templates.namevalueinput=function(h)
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
 testing_Templates.namevalue=function(h)
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
 testing_Templates.action=function(h)
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
 testing_Templates.actiondisabled=function(h)
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
 GeneratedPrintf.p=function($1)
 {
  return"{"+("docName = "+Utils.prettyPrint($1.docName))+"; "+("docDoc = "+testing_GeneratedPrintf.p($1.docDoc))+"}";
 };
 testing_Templates.appframework=function(h)
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
 testing_Templates.wcompsplitterhor=function(h)
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
 testing_Templates.wcompsplitterver=function(h)
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
 testing_Templates.fixedsplitterver=function(h)
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
 testing_Templates.fixedsplitterhor=function(h)
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
 testing_Templates.appfwkclient=function(h)
 {
  var n;
  n={
   $:1,
   $0:"appfwkclient"
  };
  testing_Templates.fixedsplitterhor();
  testing_Templates.fixedsplitterver();
  return h?Templates.GetOrLoadTemplate("appframework",n,function()
  {
   return $.parseHTML("<div>\r\n        <ws-fixedsplitterhor>\r\n            <partsizes>55px calc(100% - 55px)</partsizes>\r\n            <first>\r\n                <span style=\"display: grid;\r\n                      grid-template-columns: 30% 20% 20% 10%;\r\n                      grid-gap: 25px;\r\n                    \">\r\n                    <div class=\"mainTitle\">AppFramework</div>\r\n                </span>\r\n            </first>\r\n            <second>\r\n                    <ws-fixedsplitterver>\r\n                        <partsizes>calc(100% - 150px) 150px</partsizes>\r\n                        <first>\r\n                            <wcomp-splitter vertical=\"\" value=\"18\" max=\"100\">\r\n                                <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\">\r\n                                    \r\n                                </div></div>\r\n                                <wcomp-splitter vertical=\"\" value=\"100\" min=\"30\" max=\"100\">\r\n                                    <ws-fixedsplitterhor>\r\n                                        <partsizes>32px calc(100% - 32px)</partsizes>\r\n                                        <first>\r\n                                            <div>\r\n                                                <div class=\"input-group\">\r\n                                                    <span class=\"input-group-addon\">name:</span>\r\n                                                    <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </first>\r\n                                        <second>\r\n                                            <div style=\"overflow:auto\">\r\n                                                <div>\r\n                                                    <div>Docs:</div>\r\n                                                    <div ws-hole=\"Docs\" style=\"overflow:auto\"></div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Vars:</div>\r\n                                                    <div ws-hole=\"Vars\" style=\"overflow:auto\">\r\n                                                            \r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Views:</div>\r\n                                                    <div ws-hole=\"Views\" style=\"overflow:auto\">\r\n                                                        \r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Queries:</div>\r\n                                                    <div ws-hole=\"Queries\" style=\"overflow:auto\"></div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </second>\r\n                                    </ws-fixedsplitterhor>\r\n                                    <wcomp-tabstrip>\r\n                                        <div tabname=\"Properties\">\r\n                                            <div>\r\n                                                <table style=\"border-spacing:0px\">\r\n                                                    <thead>\r\n                                                        <th style=\"width: 30%  \">Name</th>\r\n                                                        <th style=\"width: 70% \">Value</th>\r\n                                                    </thead>\r\n                                                    <tbody ws-hole=\"Properties\"></tbody>\r\n                                                </table>\r\n                                                <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </wcomp-tabstrip>\r\n                                </wcomp-splitter>\r\n                            </wcomp-splitter>\r\n                        </first>\r\n                        <second>\r\n                            <div style=\"\r\n                                overflow: hidden;\r\n                                display: grid;\r\n                                grid-template-columns: 100%;\r\n                                grid-template-rows: repeat(15, calc(100% / 15));\r\n                                bxackground-color: #eee;\r\n                                box-sizing: border-box;\r\n                                padding : 5px;\r\n                                grid-gap: 5px;\r\n                                margin-right: 21px;\r\n                           \" class=\"absolute\" ws-hole=\"Actions\">\r\n                                \r\n                                \r\n                            </div>\r\n                        </second>\r\n                    </ws-fixedsplitterver>\r\n            </second>\r\n        </ws-fixedsplitterhor>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",n,function()
  {
   return $.parseHTML("<div>\r\n        <ws-fixedsplitterhor>\r\n            <partsizes>55px calc(100% - 55px)</partsizes>\r\n            <first>\r\n                <span style=\"display: grid;\r\n                      grid-template-columns: 30% 20% 20% 10%;\r\n                      grid-gap: 25px;\r\n                    \">\r\n                    <div class=\"mainTitle\">AppFramework</div>\r\n                </span>\r\n            </first>\r\n            <second>\r\n                    <ws-fixedsplitterver>\r\n                        <partsizes>calc(100% - 150px) 150px</partsizes>\r\n                        <first>\r\n                            <wcomp-splitter vertical=\"\" value=\"18\" max=\"100\">\r\n                                <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\">\r\n                                    \r\n                                </div></div>\r\n                                <wcomp-splitter vertical=\"\" value=\"100\" min=\"30\" max=\"100\">\r\n                                    <ws-fixedsplitterhor>\r\n                                        <partsizes>32px calc(100% - 32px)</partsizes>\r\n                                        <first>\r\n                                            <div>\r\n                                                <div class=\"input-group\">\r\n                                                    <span class=\"input-group-addon\">name:</span>\r\n                                                    <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </first>\r\n                                        <second>\r\n                                            <div style=\"overflow:auto\">\r\n                                                <div>\r\n                                                    <div>Docs:</div>\r\n                                                    <div ws-hole=\"Docs\" style=\"overflow:auto\"></div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Vars:</div>\r\n                                                    <div ws-hole=\"Vars\" style=\"overflow:auto\">\r\n                                                            \r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Views:</div>\r\n                                                    <div ws-hole=\"Views\" style=\"overflow:auto\">\r\n                                                        \r\n                                                    </div>\r\n                                                </div>\r\n                                                <div>\r\n                                                    <div>Queries:</div>\r\n                                                    <div ws-hole=\"Queries\" style=\"overflow:auto\"></div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </second>\r\n                                    </ws-fixedsplitterhor>\r\n                                    <wcomp-tabstrip>\r\n                                        <div tabname=\"Properties\">\r\n                                            <div>\r\n                                                <table style=\"border-spacing:0px\">\r\n                                                    <thead>\r\n                                                        <th style=\"width: 30%  \">Name</th>\r\n                                                        <th style=\"width: 70% \">Value</th>\r\n                                                    </thead>\r\n                                                    <tbody ws-hole=\"Properties\"></tbody>\r\n                                                </table>\r\n                                                <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </wcomp-tabstrip>\r\n                                </wcomp-splitter>\r\n                            </wcomp-splitter>\r\n                        </first>\r\n                        <second>\r\n                            <div style=\"\r\n                                overflow: hidden;\r\n                                display: grid;\r\n                                grid-template-columns: 100%;\r\n                                grid-template-rows: repeat(15, calc(100% / 15));\r\n                                bxackground-color: #eee;\r\n                                box-sizing: border-box;\r\n                                padding : 5px;\r\n                                grid-gap: 5px;\r\n                                margin-right: 21px;\r\n                           \" class=\"absolute\" ws-hole=\"Actions\">\r\n                                \r\n                                \r\n                            </div>\r\n                        </second>\r\n                    </ws-fixedsplitterver>\r\n            </second>\r\n        </ws-fixedsplitterhor>\r\n    </div>");
  });
 };
 testing_GeneratedPrintf.p=function($1)
 {
  return $1.$==5?"FunDoc5 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+", "+Utils.prettyPrint($1.$4)+", "+Utils.prettyPrint($1.$5)+")":$1.$==4?"FunDoc4 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+", "+Utils.prettyPrint($1.$4)+")":$1.$==3?"FunDoc3 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+")":$1.$==2?"FunDoc2 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":$1.$==1?"FunDoc1 (<fun>, "+Utils.prettyPrint($1.$1)+")":"LazyDoc "+Utils.prettyPrint($1.$0);
 };
 Strings.concat=function(separator,strings)
 {
  return Arrays.ofSeq(strings).join(separator);
 };
 Strings.Trim=function(s)
 {
  return s.replace(new Global.RegExp("^\\s+"),"").replace(new Global.RegExp("\\s+$"),"");
 };
 Strings.SplitChars=function(s,sep,opts)
 {
  return Strings.Split(s,new Global.RegExp("["+Strings.RegexEscape(sep.join(""))+"]"),opts);
 };
 Strings.Replace=function(subject,search,replace)
 {
  function replaceLoop(subj)
  {
   var index,replaced,nextStartIndex;
   index=subj.indexOf(search);
   return index!==-1?(replaced=Strings.ReplaceOnce(subj,search,replace),(nextStartIndex=index+replace.length,Strings.Substring(replaced,0,index+replace.length)+replaceLoop(replaced.substring(nextStartIndex)))):subj;
  }
  return replaceLoop(subject);
 };
 Strings.Split=function(s,pat,opts)
 {
  return opts===1?Arrays.filter(function(x)
  {
   return x!=="";
  },Strings.SplitWith(s,pat)):Strings.SplitWith(s,pat);
 };
 Strings.RegexEscape=function(s)
 {
  return s.replace(new Global.RegExp("[-\\/\\\\^$*+?.()|[\\]{}]","g"),"\\$&");
 };
 Strings.ReplaceOnce=function(string,search,replace)
 {
  return string.replace(search,replace);
 };
 Strings.StartsWith=function(t,s)
 {
  return t.substring(0,s.length)==s;
 };
 Strings.SplitWith=function(str,pat)
 {
  return str.split(pat);
 };
 Strings.Substring=function(s,ix,ct)
 {
  return s.substr(ix,ct);
 };
 Strings.forall=function(f,s)
 {
  return Seq.forall(f,Strings.protect(s));
 };
 Strings.protect=function(s)
 {
  return s===null?"":s;
 };
 ListModel=UI.ListModel=Runtime$1.Class({
  TryFindByKey:function(key)
  {
   var $this;
   $this=this;
   return Arrays.tryFind(function(it)
   {
    return Unchecked.Equals($this.key(it),key);
   },this["var"].Get());
  },
  Append:function(item)
  {
   var $this,v,t,m;
   $this=this;
   v=this["var"].Get();
   t=this.key(item);
   m=Arrays.tryFindIndex(function(it)
   {
    return Unchecked.Equals($this.key(it),t);
   },v);
   m!=null&&m.$==1?this["var"].Set(this.storage.SSetAt(m.$0,item,v)):this["var"].Set(this.storage.SAppend(item,v));
   this.ObsoleteKey(t);
  },
  ObsoleteKey:function(key)
  {
   var m,o;
   m=(o=null,[this.it.TryGetValue(key,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o]);
   m[0]?(Snap.Obsolete(m[1]),this.it.Remove(key)):void 0;
  },
  MapLens:function(f)
  {
   var $this;
   $this=this;
   return View.MapSeqCachedViewBy($this.key,function(k,v)
   {
    return f(k,$this["LensInto'"](Global.id,function($1,$2)
    {
     return $2;
    },k,v));
   },this["var"].get_View());
  },
  "LensInto'":function(get,update,key,view)
  {
   var $this,id,$1;
   $this=this;
   id=Fresh.Id();
   $1=new Var({
    Get:function()
    {
     return get($this.FindByKey(key));
    },
    Set:function(v)
    {
     return $this.UpdateBy(function(i)
     {
      return{
       $:1,
       $0:update(i,v)
      };
     },key);
    },
    SetFinal:function(v)
    {
     return this.Set(v);
    },
    Update:function(f)
    {
     return $this.UpdateBy(function(i)
     {
      return{
       $:1,
       $0:update(i,f(get(i)))
      };
     },key);
    },
    UpdateMaybe:function(f)
    {
     return $this.UpdateBy(function(i)
     {
      var x;
      x=f(get(i));
      return x==null?null:{
       $:1,
       $0:update(i,x.$0)
      };
     },key);
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
   Var.New.call($1);
   return $1;
  },
  FindByKey:function(key)
  {
   var $this;
   $this=this;
   return Arrays.find(function(it)
   {
    return Unchecked.Equals($this.key(it),key);
   },this["var"].Get());
  },
  UpdateBy:function(fn,key)
  {
   var $this,v,m,index,m$1;
   $this=this;
   v=this["var"].Get();
   m=Arrays.tryFindIndex(function(it)
   {
    return Unchecked.Equals($this.key(it),key);
   },v);
   m!=null&&m.$==1?(index=m.$0,m$1=fn(Arrays.get(v,index)),m$1!=null&&m$1.$==1?(this["var"].Set(this.storage.SSetAt(index,m$1.$0,v)),this.ObsoleteKey(key)):void 0):void 0;
  },
  GetEnumerator:function()
  {
   return Enumerator.Get(this["var"].Get());
  },
  GetEnumerator0:function()
  {
   return Enumerator.Get0(this["var"].Get());
  }
 },Obj,ListModel);
 ListModel.New$1=Runtime$1.Ctor(function(key)
 {
  ListModel.New$2.call(this,key,[]);
 },ListModel);
 ListModel.New$2=Runtime$1.Ctor(function(key,init)
 {
  var init$1;
  init$1=Arrays.ofSeq(init);
  ListModel.New$3.call(this,key,Var$1.Create$1(init$1),Storage.InMemory(init$1));
 },ListModel);
 ListModel.New$3=Runtime$1.Ctor(function(key,_var,storage)
 {
  Obj.New.call(this);
  this.key=key;
  this["var"]=_var;
  this.storage=storage;
  this.v=View.Map(function(x)
  {
   return x.slice();
  },this["var"].get_View());
  this.it=new Dictionary.New$5();
 },ListModel);
 Client.Box=Global.id;
 Arrays.tryFind=function(f,arr)
 {
  var res,i;
  res=null;
  i=0;
  while(i<arr.length&&res==null)
   {
    f(arr[i])?res={
     $:1,
     $0:arr[i]
    }:void 0;
    i=i+1;
   }
  return res;
 };
 Arrays.map=function(f,arr)
 {
  var r,i,$1;
  r=new Global.Array(arr.length);
  for(i=0,$1=arr.length-1;i<=$1;i++)r[i]=f(arr[i]);
  return r;
 };
 Arrays.choose=function(f,arr)
 {
  var q,i,$1,m;
  q=[];
  for(i=0,$1=arr.length-1;i<=$1;i++){
   m=f(arr[i]);
   m==null?void 0:q.push(m.$0);
  }
  return q;
 };
 Arrays.ofSeq=function(xs)
 {
  var q,o;
  if(xs instanceof Global.Array)
   return xs.slice();
  else
   if(xs instanceof T)
    return Arrays.ofList(xs);
   else
    {
     q=[];
     o=Enumerator.Get(xs);
     try
     {
      while(o.MoveNext())
       q.push(o.Current());
      return q;
     }
     finally
     {
      if(typeof o=="object"&&"Dispose"in o)
       o.Dispose();
     }
    }
 };
 Arrays.ofList=function(xs)
 {
  var l,q;
  q=[];
  l=xs;
  while(!(l.$==0))
   {
    q.push(List.head(l));
    l=List.tail(l);
   }
  return q;
 };
 Arrays.tryFindIndex=function(f,arr)
 {
  var res,i;
  res=null;
  i=0;
  while(i<arr.length&&res==null)
   {
    f(arr[i])?res={
     $:1,
     $0:i
    }:void 0;
    i=i+1;
   }
  return res;
 };
 Arrays.filter=function(f,arr)
 {
  var r,i,$1;
  r=[];
  for(i=0,$1=arr.length-1;i<=$1;i++)if(f(arr[i]))
   r.push(arr[i]);
  return r;
 };
 Arrays.exists=function(f,x)
 {
  var e,i,$1,l;
  e=false;
  i=0;
  l=Arrays.length(x);
  while(!e&&i<l)
   if(f(x[i]))
    e=true;
   else
    i=i+1;
  return e;
 };
 Arrays.tryPick=function(f,arr)
 {
  var res,i,m;
  res=null;
  i=0;
  while(i<arr.length&&res==null)
   {
    m=f(arr[i]);
    m!=null&&m.$==1?res=m:void 0;
    i=i+1;
   }
  return res;
 };
 Arrays.foldBack=function(f,arr,zero)
 {
  var acc,$1,len,i,$2;
  acc=zero;
  len=arr.length;
  for(i=1,$2=len;i<=$2;i++)acc=f(arr[len-i],acc);
  return acc;
 };
 Arrays.concat=function(xs)
 {
  return Global.Array.prototype.concat.apply([],Arrays.ofSeq(xs));
 };
 Arrays.iter=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)f(arr[i]);
 };
 Arrays.pick=function(f,arr)
 {
  var m;
  m=Arrays.tryPick(f,arr);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 Arrays.find=function(f,arr)
 {
  var m;
  m=Arrays.tryFind(f,arr);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 Arrays.create=function(size,value)
 {
  var r,i,$1;
  r=new Global.Array(size);
  for(i=0,$1=size-1;i<=$1;i++)r[i]=value;
  return r;
 };
 Arrays.init=function(size,f)
 {
  var r,i,$1;
  size<0?Operators.FailWith("Negative size given."):null;
  r=new Global.Array(size);
  for(i=0,$1=size-1;i<=$1;i++)r[i]=f(i);
  return r;
 };
 Arrays.forall=function(f,x)
 {
  var a,i,$1,l;
  a=true;
  i=0;
  l=Arrays.length(x);
  while(a&&i<l)
   if(f(x[i]))
    i=i+1;
   else
    a=false;
  return a;
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
 String.splitByChar=function(c,s)
 {
  return Strings.SplitChars(s,[c],0);
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
 String.unindentStr=function()
 {
  SC$1.$cctor();
  return SC$1.unindentStr;
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
 String.splitInTwoO=function(spl,txt)
 {
  var i;
  i=txt.indexOf(spl);
  return i===-1?null:{
   $:1,
   $0:[Library["String.Left"](txt,i),txt.substring(i+spl.length)]
  };
 };
 ParseO.Double=function()
 {
  SC$1.$cctor();
  return SC$1["|Double|_|"];
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
 ParseO.parseDateO=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO;
 };
 ParseO.parseIntO=function()
 {
  SC$1.$cctor();
  return SC$1.parseIntO;
 };
 ParseO.parseSingleO=function()
 {
  SC$1.$cctor();
  return SC$1.parseSingleO;
 };
 ParseO.parseDoubleO=function()
 {
  SC$1.$cctor();
  return SC$1.parseDoubleO;
 };
 ParseO.parseGuidO=function()
 {
  SC$1.$cctor();
  return SC$1.parseGuidO;
 };
 AttrProxy=UI.AttrProxy=Runtime$1.Class({},null,AttrProxy);
 AttrProxy.Create=function(name,value)
 {
  return Attrs.Static(function(el)
  {
   DomUtility.SetAttr(el,name,value);
  });
 };
 AttrProxy.HandlerImpl=function(event,q)
 {
  return Attrs.Static(function(el)
  {
   el.addEventListener(event,function(d)
   {
    return(q(el))(d);
   },false);
  });
 };
 AttrProxy.Concat=function(xs)
 {
  var x;
  x=Array.ofSeqNonCopying(xs);
  return Array.TreeReduce(Attrs.EmptyAttr(),AttrProxy.Append,x);
 };
 AttrProxy.Append=function(a,b)
 {
  return Attrs.AppendTree(a,b);
 };
 AttrProxy.Handler=function(event,q)
 {
  return AttrProxy.HandlerImpl(event,q);
 };
 AttrModule.Dynamic=function(name,view)
 {
  return Attrs.Dynamic(view,function(el)
  {
   return function(v)
   {
    return DomUtility.SetAttr(el,name,v);
   };
  });
 };
 AttrModule.Handler=function(name,callback)
 {
  return Attrs.Static(function(el)
  {
   el.addEventListener(name,function(d)
   {
    return(callback(el))(d);
   },false);
  });
 };
 AttrModule.DynamicStyle=function(name,view)
 {
  return Attrs.Dynamic(view,function(el)
  {
   return function(v)
   {
    return DomUtility.SetStyle(el,name,v);
   };
  });
 };
 AttrModule.Style=function(name,value)
 {
  return Attrs.Static(function(el)
  {
   DomUtility.SetStyle(el,name,value);
  });
 };
 AttrModule.Value=function(_var)
 {
  function g(a)
  {
   return{
    $:1,
    $0:a
   };
  }
  return AttrModule.CustomValue(_var,Global.id,function(x)
  {
   return g(Global.id(x));
  });
 };
 AttrModule.CustomValue=function(_var,toString,fromString)
 {
  return AttrModule.CustomVar(_var,function($1,$2)
  {
   $1.value=toString($2);
  },function(e)
  {
   return fromString(e.value);
  });
 };
 AttrModule.CustomVar=function(_var,set,get)
 {
  function onChange(el,e)
  {
   return _var.UpdateMaybe(function(v)
   {
    var m,$1;
    m=get(el);
    return m!=null&&m.$==1&&(!Unchecked.Equals(m.$0,v)&&($1=[m,m.$0],true))?$1[0]:null;
   });
  }
  function set$1(e,v)
  {
   var m,$1;
   m=get(e);
   return m!=null&&m.$==1&&(Unchecked.Equals(m.$0,v)&&($1=m.$0,true))?null:set(e,v);
  }
  return AttrProxy.Concat([AttrModule.Handler("change",function($1)
  {
   return function($2)
   {
    return onChange($1,$2);
   };
  }),AttrModule.Handler("input",function($1)
  {
   return function($2)
   {
    return onChange($1,$2);
   };
  }),AttrModule.Handler("keypress",function($1)
  {
   return function($2)
   {
    return onChange($1,$2);
   };
  }),AttrModule.DynamicCustom(function($1)
  {
   return function($2)
   {
    return set$1($1,$2);
   };
  },_var.get_View())]);
 };
 AttrModule.DynamicCustom=function(set,view)
 {
  return Attrs.Dynamic(view,set);
 };
 AttrModule.OnAfterRender=function(callback)
 {
  return new AttrProxy({
   $:4,
   $0:callback
  });
 };
 AttrModule.Checked=function(_var)
 {
  function onSet(el,ev)
  {
   return!Unchecked.Equals(_var.Get(),el.checked)?_var.Set(el.checked):null;
  }
  return AttrProxy.Concat([AttrModule.DynamicProp("checked",_var.get_View()),AttrModule.Handler("change",function($1)
  {
   return function($2)
   {
    return onSet($1,$2);
   };
  })]);
 };
 AttrModule.IntValue=function(_var)
 {
  return AttrModule.CustomVar(_var,function($1,$2)
  {
   var i;
   i=$2.get_Input();
   return $1.value!==i?void($1.value=i):null;
  },function(el)
  {
   var s,m,o;
   s=el.value;
   return{
    $:1,
    $0:String$1.isBlank(s)?(el.checkValidity?el.checkValidity():true)?new CheckedInput({
     $:2,
     $0:s
    }):new CheckedInput({
     $:1,
     $0:s
    }):(m=(o=0,[Numeric.TryParseInt32(s,{
     get:function()
     {
      return o;
     },
     set:function(v)
     {
      o=v;
     }
    }),o]),m[0]?new CheckedInput({
     $:0,
     $0:m[1],
     $1:s
    }):new CheckedInput({
     $:1,
     $0:s
    }))
   };
  });
 };
 AttrModule.IntValueUnchecked=function(_var)
 {
  return AttrModule.CustomValue(_var,Global.String,function(s)
  {
   var pd;
   return String$1.isBlank(s)?{
    $:1,
    $0:0
   }:(pd=+s,pd!==pd>>0?null:{
    $:1,
    $0:pd
   });
  });
 };
 AttrModule.FloatValue=function(_var)
 {
  return AttrModule.CustomVar(_var,function($1,$2)
  {
   var i;
   i=$2.get_Input();
   return $1.value!==i?void($1.value=i):null;
  },function(el)
  {
   var s,i;
   s=el.value;
   return{
    $:1,
    $0:String$1.isBlank(s)?(el.checkValidity?el.checkValidity():true)?new CheckedInput({
     $:2,
     $0:s
    }):new CheckedInput({
     $:1,
     $0:s
    }):(i=+s,Global.isNaN(i)?new CheckedInput({
     $:1,
     $0:s
    }):new CheckedInput({
     $:0,
     $0:i,
     $1:s
    }))
   };
  });
 };
 AttrModule.FloatValueUnchecked=function(_var)
 {
  return AttrModule.CustomValue(_var,Global.String,function(s)
  {
   var pd;
   return String$1.isBlank(s)?{
    $:1,
    $0:0
   }:(pd=+s,Global.isNaN(pd)?null:{
    $:1,
    $0:pd
   });
  });
 };
 AttrModule.DynamicProp=function(name,view)
 {
  return Attrs.Dynamic(view,function(el)
  {
   return function(v)
   {
    el[name]=v;
   };
  });
 };
 Lazy.Create=function(f)
 {
  return LazyRecord.New(false,f,Lazy.forceLazy);
 };
 Lazy.forceLazy=function()
 {
  var v;
  v=this.v();
  this.c=true;
  this.v=v;
  this.f=Lazy.cachedLazy;
  return v;
 };
 Lazy.cachedLazy=function()
 {
  return this.v;
 };
 LayoutEngine.New=function(lytName,lytDefinition)
 {
  return{
   lytName:lytName,
   lytDefinition:lytDefinition
  };
 };
 Guid.NewGuid=function()
 {
  return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new Global.RegExp("[xy]","g"),function(c)
  {
   var r,v;
   r=Math.random()*16|0;
   v=c=="x"?r:r&3|8;
   return v.toString(16);
  });
 };
 Guid.TryParse=function(input,output)
 {
  try
  {
   output.set(Guid.Parse(input));
   return true;
  }
  catch(m)
  {
   return false;
  }
 };
 Guid.Parse=function(input)
 {
  var $1,$2,$3;
  try
  {
   return Guid.ParseExact(input,"D");
  }
  catch(m)
  {
   try
   {
    $1=Guid.ParseExact(input,"B");
   }
   catch(m$1)
   {
    try
    {
     $2=Guid.ParseExact(input,"P");
    }
    catch(m$2)
    {
     try
     {
      $3=Guid.ParseExact(input,"N");
     }
     catch(m$3)
     {
      $3=Guid.ParseExact(input,"X");
     }
     $2=$3;
    }
    $1=$2;
   }
   return $1;
  }
 };
 Guid.ParseExact=function(input,format)
 {
  var s,s$1,s$2,m,s$3,i,$1,c,s$4,i$1,$2,$3,c$1;
  function parseD(s$5)
  {
   var i$2,$4,$5,c$2;
   for(i$2=0,$4=35;i$2<=$4;i$2++){
    i$2===8||(i$2===13||(i$2===18||i$2===23))?s$5[i$2]!=="-"?Guid.ShapeError():void 0:(c$2=s$5[i$2],!("0"<=c$2&&c$2<="9"||"a"<=c$2&&c$2<="f")?Guid.ShapeError():void 0);
   }
   return s$5;
  }
  m=format.toUpperCase();
  if(m==="N")
   {
    s$3=Strings.Trim(input).toLowerCase();
    if(s$3.length!==32)
     Guid.ShapeError();
    for(i=0,$1=31;i<=$1;i++){
     c=s$3[i];
     !("0"<=c&&c<="9"||"a"<=c&&c<="f")?Guid.ShapeError():void 0;
    }
    return Strings.Substring(s$3,0,8)+"-"+Strings.Substring(s$3,8,4)+"-"+Strings.Substring(s$3,12,4)+"-"+Strings.Substring(s$3,16,4)+"-"+s$3.substring(20);
   }
  else
   if(m==="D")
    {
     s=Strings.Trim(input).toLowerCase();
     s.length!==36?Guid.ShapeError():void 0;
     return parseD(s);
    }
   else
    if(m==="B")
     {
      s$1=Strings.Trim(input).toLowerCase();
      s$1.length!==38||s$1[0]!=="{"||s$1[17]!=="}"?Guid.ShapeError():void 0;
      return parseD(Strings.Substring(s$1,1,36));
     }
    else
     if(m==="P")
      {
       s$2=Strings.Trim(input).toLowerCase();
       s$2.length!==38||s$2[0]!=="("||s$2[17]!==")"?Guid.ShapeError():void 0;
       return parseD(Strings.Substring(s$2,1,36));
      }
     else
      if(m==="X")
       {
        s$4=Strings.Trim(input).toLowerCase();
        if(s$4.length!==68)
         Guid.ShapeError();
        for(i$1=0,$2=67;i$1<=$2;i$1++){
         switch(i$1)
         {
          case 26:
          case 0:
           if(s$4[i$1]!=="{")
            Guid.ShapeError();
           break;
          case 62:
          case 57:
          case 52:
          case 47:
          case 42:
          case 37:
          case 32:
          case 27:
          case 19:
          case 12:
          case 1:
           if(s$4[i$1]!=="0")
            Guid.ShapeError();
           break;
          case 63:
          case 58:
          case 53:
          case 48:
          case 43:
          case 38:
          case 33:
          case 28:
          case 20:
          case 13:
          case 2:
           if(s$4[i$1]!=="x")
            Guid.ShapeError();
           break;
          case 61:
          case 56:
          case 51:
          case 46:
          case 41:
          case 36:
          case 31:
          case 25:
          case 18:
          case 11:
           if(s$4[i$1]!==",")
            Guid.ShapeError();
           break;
          case 67:
          case 66:
           if(s$4[i$1]!=="{")
            Guid.ShapeError();
           break;
          default:
           c$1=s$4[i$1];
           !("0"<=c$1&&c$1<="9"||"a"<=c$1&&c$1<="f")?Guid.ShapeError():void 0;
           break;
         }
        }
        return Strings.Substring(s$4,3,8)+"-"+Strings.Substring(s$4,14,4)+"-"+Strings.Substring(s$4,21,4)+"-"+Strings.Substring(s$4,29,2)+Strings.Substring(s$4,34,2)+"-"+Strings.Substring(s$4,39,2)+Strings.Substring(s$4,44,2)+Strings.Substring(s$4,49,2)+Strings.Substring(s$4,54,2)+Strings.Substring(s$4,59,2)+Strings.Substring(s$4,64,2);
       }
      else
       return Guid.FormatError();
 };
 Guid.ShapeError=function()
 {
  throw new FormatException.New$1("Guid should contain 32 digits with 4 dashes (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");
 };
 Guid.FormatError=function()
 {
  throw new FormatException.New$1("Format String can be only \"D\", \"d\", \"N\", \"n\", \"P\", \"p\", \"B\", \"b\", \"X\" or \"x\".");
 };
 Slice.array=function(source,start,finish)
 {
  return start==null?finish!=null&&finish.$==1?source.slice(0,finish.$0+1):[]:finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);
 };
 Slice.string=function(source,start,finish)
 {
  return start==null?finish!=null&&finish.$==1?source.slice(0,finish.$0+1):"":finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);
 };
 Enumerator.Get=function(x)
 {
  return x instanceof Global.Array?Enumerator.ArrayEnumerator(x):Unchecked.Equals(typeof x,"string")?Enumerator.StringEnumerator(x):x.GetEnumerator();
 };
 Enumerator.ArrayEnumerator=function(s)
 {
  return new T$1.New(0,null,function(e)
  {
   var i;
   i=e.s;
   return i<Arrays.length(s)&&(e.c=Arrays.get(s,i),e.s=i+1,true);
  },void 0);
 };
 Enumerator.StringEnumerator=function(s)
 {
  return new T$1.New(0,null,function(e)
  {
   var i;
   i=e.s;
   return i<s.length&&(e.c=s[i],e.s=i+1,true);
  },void 0);
 };
 Enumerator.Get0=function(x)
 {
  return x instanceof Global.Array?Enumerator.ArrayEnumerator(x):Unchecked.Equals(typeof x,"string")?Enumerator.StringEnumerator(x):"GetEnumerator0"in x?x.GetEnumerator0():x.GetEnumerator();
 };
 Elt=UI.Elt=Runtime$1.Class({
  on:function(ev,cb)
  {
   var $this;
   $this=this;
   this.elt.addEventListener(ev,function(ev$1)
   {
    return cb($this.elt,ev$1);
   },false);
   return this;
  }
 },Doc,Elt);
 Elt.New=function(el,attr$1,children)
 {
  var node,rvUpdates;
  node=Docs.CreateElemNode(el,attr$1,children.docNode);
  rvUpdates=Updates.Create(children.updates);
  return new Elt.New$1({
   $:1,
   $0:node
  },View.Map2Unit(Attrs.Updates(node.Attr),rvUpdates.v),el,rvUpdates);
 };
 Elt.TreeNode=function(tree,updates)
 {
  var rvUpdates,x;
  function f(t)
  {
   return t[1];
  }
  rvUpdates=Updates.Create(updates);
  return new Elt.New$1({
   $:6,
   $0:tree
  },View.Map2Unit((x=Arrays.map(function(x$1)
  {
   return Attrs.Updates(f(x$1));
  },tree.Attrs),Array.TreeReduce(View.Const(),View.Map2Unit,x)),rvUpdates.v),Arrays.get(tree.Els,0),rvUpdates);
 };
 Elt.New$1=Runtime$1.Ctor(function(docNode,updates,elt,rvUpdates)
 {
  Doc.New.call(this,docNode,updates);
  this.docNode$1=docNode;
  this.updates$1=updates;
  this.elt=elt;
  this.rvUpdates=rvUpdates;
 },Elt);
 Snap.Map=function(fn,sn)
 {
  var m,res;
  m=sn.s;
  return m!=null&&m.$==0?Snap.New({
   $:0,
   $0:fn(m.$0)
  }):(res=Snap.New({
   $:3,
   $0:[],
   $1:[]
  }),(Snap.When(sn,function(a)
  {
   Snap.MarkDone(res,sn,fn(a));
  },res),res));
 };
 Snap.WhenRun=function(snap,avail,obs)
 {
  var m;
  m=snap.s;
  m==null?obs():m!=null&&m.$==2?(m.$1.push(obs),avail(m.$0)):m!=null&&m.$==3?(m.$0.push(avail),m.$1.push(obs)):avail(m.$0);
 };
 Snap.Map2=function(fn,sn1,sn2)
 {
  var $1,$2,res;
  function cont(a)
  {
   var m,$3,$4;
   if(!(m=res.s,m!=null&&m.$==0||m!=null&&m.$==2))
    {
     $3=Snap.ValueAndForever(sn1);
     $4=Snap.ValueAndForever(sn2);
     $3!=null&&$3.$==1?$4!=null&&$4.$==1?$3.$0[1]&&$4.$0[1]?Snap.MarkForever(res,fn($3.$0[0],$4.$0[0])):Snap.MarkReady(res,fn($3.$0[0],$4.$0[0])):void 0:void 0;
    }
  }
  $1=sn1.s;
  $2=sn2.s;
  return $1!=null&&$1.$==0?$2!=null&&$2.$==0?Snap.New({
   $:0,
   $0:fn($1.$0,$2.$0)
  }):Snap.Map2Opt1(fn,$1.$0,sn2):$2!=null&&$2.$==0?Snap.Map2Opt2(fn,$2.$0,sn1):(res=Snap.New({
   $:3,
   $0:[],
   $1:[]
  }),(Snap.When(sn1,cont,res),Snap.When(sn2,cont,res),res));
 };
 Snap.WhenObsoleteRun=function(snap,obs)
 {
  var m;
  m=snap.s;
  m==null?obs():m!=null&&m.$==2?m.$1.push(obs):m!=null&&m.$==3?m.$1.push(obs):void 0;
 };
 Snap.When=function(snap,avail,obs)
 {
  var m;
  m=snap.s;
  m==null?Snap.Obsolete(obs):m!=null&&m.$==2?(Snap.EnqueueSafe(m.$1,obs),avail(m.$0)):m!=null&&m.$==3?(m.$0.push(avail),Snap.EnqueueSafe(m.$1,obs)):avail(m.$0);
 };
 Snap.MarkDone=function(res,sn,v)
 {
  var $1;
  if($1=sn.s,$1!=null&&$1.$==0)
   Snap.MarkForever(res,v);
  else
   Snap.MarkReady(res,v);
 };
 Snap.Map2Opt1=function(fn,x,sn2)
 {
  return Snap.Map(function(y)
  {
   return fn(x,y);
  },sn2);
 };
 Snap.Map2Opt2=function(fn,y,sn1)
 {
  return Snap.Map(function(x)
  {
   return fn(x,y);
  },sn1);
 };
 Snap.ValueAndForever=function(snap)
 {
  var m;
  m=snap.s;
  return m!=null&&m.$==0?{
   $:1,
   $0:[m.$0,true]
  }:m!=null&&m.$==2?{
   $:1,
   $0:[m.$0,false]
  }:null;
 };
 Snap.MarkForever=function(sn,v)
 {
  var m,qa,i,$1;
  m=sn.s;
  if(m!=null&&m.$==3)
   {
    sn.s={
     $:0,
     $0:v
    };
    qa=m.$0;
    for(i=0,$1=Arrays.length(qa)-1;i<=$1;i++)(Arrays.get(qa,i))(v);
   }
  else
   void 0;
 };
 Snap.MarkReady=function(sn,v)
 {
  var m,qa,i,$1;
  m=sn.s;
  if(m!=null&&m.$==3)
   {
    sn.s={
     $:2,
     $0:v,
     $1:m.$1
    };
    qa=m.$0;
    for(i=0,$1=Arrays.length(qa)-1;i<=$1;i++)(Arrays.get(qa,i))(v);
   }
  else
   void 0;
 };
 Snap.EnqueueSafe=function(q,x)
 {
  var qcopy,i,$1,o;
  q.push(x);
  if(q.length%20===0)
   {
    qcopy=q.slice(0);
    Queue.Clear(q);
    for(i=0,$1=Arrays.length(qcopy)-1;i<=$1;i++){
     o=Arrays.get(qcopy,i);
     typeof o=="object"?function(sn)
     {
      if(sn.s)
       q.push(sn);
     }(o):function(f)
     {
      q.push(f);
     }(o);
    }
   }
  else
   void 0;
 };
 Snap.TryGet=function(snap)
 {
  var m,$1;
  m=snap.s;
  return(m!=null&&m.$==0?($1=m.$0,true):m!=null&&m.$==2&&($1=m.$0,true))?{
   $:1,
   $0:$1
  }:null;
 };
 Snap.Map2Unit=function(sn1,sn2)
 {
  var $1,$2,res;
  function cont()
  {
   var m,$3,$4;
   if(!(m=res.s,m!=null&&m.$==0||m!=null&&m.$==2))
    {
     $3=Snap.ValueAndForever(sn1);
     $4=Snap.ValueAndForever(sn2);
     $3!=null&&$3.$==1?$4!=null&&$4.$==1?$3.$0[1]&&$4.$0[1]?Snap.MarkForever(res,null):Snap.MarkReady(res,null):void 0:void 0;
    }
  }
  $1=sn1.s;
  $2=sn2.s;
  return $1!=null&&$1.$==0?$2!=null&&$2.$==0?Snap.New({
   $:0,
   $0:null
  }):sn2:$2!=null&&$2.$==0?sn1:(res=Snap.New({
   $:3,
   $0:[],
   $1:[]
  }),(Snap.When(sn1,cont,res),Snap.When(sn2,cont,res),res));
 };
 Snap.Copy=function(sn)
 {
  var m,res,res$1;
  m=sn.s;
  return m==null?sn:m!=null&&m.$==2?(res=Snap.New({
   $:2,
   $0:m.$0,
   $1:[]
  }),(Snap.WhenObsolete(sn,res),res)):m!=null&&m.$==3?(res$1=Snap.New({
   $:3,
   $0:[],
   $1:[]
  }),(Snap.When(sn,function(v)
  {
   Snap.MarkDone(res$1,sn,v);
  },res$1),res$1)):sn;
 };
 Snap.Join=function(snap)
 {
  var res;
  res=Snap.New({
   $:3,
   $0:[],
   $1:[]
  });
  Snap.When(snap,function(x)
  {
   var y;
   y=x();
   Snap.When(y,function(v)
   {
    var $1,$2;
    if(($1=y.s,$1!=null&&$1.$==0)&&($2=snap.s,$2!=null&&$2.$==0))
     Snap.MarkForever(res,v);
    else
     Snap.MarkReady(res,v);
   },res);
  },res);
  return res;
 };
 Snap.WhenObsolete=function(snap,obs)
 {
  var m;
  m=snap.s;
  m==null?Snap.Obsolete(obs):m!=null&&m.$==2?Snap.EnqueueSafe(m.$1,obs):m!=null&&m.$==3?Snap.EnqueueSafe(m.$1,obs):void 0;
 };
 Snap.Map3=function(fn,sn1,sn2,sn3)
 {
  var $1,$2,$3,res;
  function cont(a)
  {
   var m,$4,$5,$6;
   if(!(m=res.s,m!=null&&m.$==0||m!=null&&m.$==2))
    {
     $4=Snap.ValueAndForever(sn1);
     $5=Snap.ValueAndForever(sn2);
     $6=Snap.ValueAndForever(sn3);
     $4!=null&&$4.$==1?$5!=null&&$5.$==1?$6!=null&&$6.$==1?$4.$0[1]&&$5.$0[1]&&$6.$0[1]?Snap.MarkForever(res,fn($4.$0[0],$5.$0[0],$6.$0[0])):Snap.MarkReady(res,fn($4.$0[0],$5.$0[0],$6.$0[0])):void 0:void 0:void 0;
    }
  }
  $1=sn1.s;
  $2=sn2.s;
  $3=sn3.s;
  return $1!=null&&$1.$==0?$2!=null&&$2.$==0?$3!=null&&$3.$==0?Snap.New({
   $:0,
   $0:fn($1.$0,$2.$0,$3.$0)
  }):Snap.Map3Opt1(fn,$1.$0,$2.$0,sn3):$3!=null&&$3.$==0?Snap.Map3Opt2(fn,$1.$0,$3.$0,sn2):Snap.Map3Opt3(fn,$1.$0,sn2,sn3):$2!=null&&$2.$==0?$3!=null&&$3.$==0?Snap.Map3Opt4(fn,$2.$0,$3.$0,sn1):Snap.Map3Opt5(fn,$2.$0,sn1,sn3):$3!=null&&$3.$==0?Snap.Map3Opt6(fn,$3.$0,sn1,sn2):(res=Snap.New({
   $:3,
   $0:[],
   $1:[]
  }),(Snap.When(sn1,cont,res),Snap.When(sn2,cont,res),Snap.When(sn3,cont,res),res));
 };
 Snap.Sequence=function(snaps)
 {
  var snaps$1,res,w;
  function cont(a)
  {
   var vs;
   if(w[0]===0)
    {
     vs=Arrays.map(function(s)
     {
      var m;
      m=s.s;
      return m!=null&&m.$==0?m.$0:m!=null&&m.$==2?m.$0:Operators.FailWith("value not found by View.Sequence");
     },snaps$1);
     Arrays.forall(function(a$1)
     {
      var $1;
      $1=a$1.s;
      return $1!=null&&$1.$==0;
     },snaps$1)?Snap.MarkForever(res,vs):Snap.MarkReady(res,vs);
    }
   else
    w[0]--;
  }
  snaps$1=Arrays.ofSeq(snaps);
  return snaps$1.length==0?Snap.New({
   $:0,
   $0:[]
  }):(res=Snap.New({
   $:3,
   $0:[],
   $1:[]
  }),(w=[Arrays.length(snaps$1)-1],(Arrays.iter(function(s)
  {
   Snap.When(s,cont,res);
  },snaps$1),res)));
 };
 Snap.Map3Opt1=function(fn,x,y,sn3)
 {
  return Snap.Map(function(z)
  {
   return fn(x,y,z);
  },sn3);
 };
 Snap.Map3Opt2=function(fn,x,z,sn2)
 {
  return Snap.Map(function(y)
  {
   return fn(x,y,z);
  },sn2);
 };
 Snap.Map3Opt3=function(fn,x,sn2,sn3)
 {
  return Snap.Map2(function($1,$2)
  {
   return fn(x,$1,$2);
  },sn2,sn3);
 };
 Snap.Map3Opt4=function(fn,y,z,sn1)
 {
  return Snap.Map(function(x)
  {
   return fn(x,y,z);
  },sn1);
 };
 Snap.Map3Opt5=function(fn,y,sn1,sn3)
 {
  return Snap.Map2(function($1,$2)
  {
   return fn($1,y,$2);
  },sn1,sn3);
 };
 Snap.Map3Opt6=function(fn,z,sn1,sn2)
 {
  return Snap.Map2(function($1,$2)
  {
   return fn($1,$2,z);
  },sn1,sn2);
 };
 T$1=Enumerator.T=Runtime$1.Class({
  MoveNext:function()
  {
   return this.n(this);
  },
  Current:function()
  {
   return this.c;
  },
  Dispose:function()
  {
   if(this.d)
    this.d(this);
  }
 },Obj,T$1);
 T$1.New=Runtime$1.Ctor(function(s,c,n,d)
 {
  Obj.New.call(this);
  this.s=s;
  this.c=c;
  this.n=n;
  this.d=d;
 },T$1);
 DomUtility.CreateElement=function(name)
 {
  return DomUtility.Doc().createElement(name);
 };
 DomUtility.SetAttr=function(el,name,value)
 {
  el.setAttribute(name,value);
 };
 DomUtility.SetStyle=function(el,name,value)
 {
  DomUtility.SetProperty(el.style,name,value);
 };
 DomUtility.CreateText=function(s)
 {
  return DomUtility.Doc().createTextNode(s);
 };
 DomUtility.Doc=function()
 {
  SC$2.$cctor();
  return SC$2.Doc;
 };
 DomUtility.SetProperty=function(target,name,value)
 {
  return target.setProperty(name,value);
 };
 DomUtility.RemoveClass=function(element,cl)
 {
  var _this;
  DomUtility.setClass(element,(_this=DomUtility.clsRE(cl),DomUtility.getClass(element).replace(_this,function($1,$2,$3)
  {
   return $2===""||$3===""?"":" ";
  })));
 };
 DomUtility.AddClass=function(element,cl)
 {
  var c;
  c=DomUtility.getClass(element);
  c===""?DomUtility.setClass(element,cl):!DomUtility.clsRE(cl).test(c)?DomUtility.setClass(element,c+" "+cl):void 0;
 };
 DomUtility.ChildrenArray=function(element)
 {
  var a,i,$1;
  a=[];
  for(i=0,$1=element.childNodes.length-1;i<=$1;i++)a.push(element.childNodes[i]);
  return a;
 };
 DomUtility.setClass=function(element,value)
 {
  if(element instanceof Global.SVGElement)
   element.setAttribute("class",value);
  else
   element.className=value;
 };
 DomUtility.getClass=function(element)
 {
  return element instanceof Global.SVGElement?element.getAttribute("class"):element.className;
 };
 DomUtility.clsRE=function(cls)
 {
  return new Global.RegExp("(\\s+|^)"+cls+"(?:\\s+"+cls+")*(\\s+|$)","g");
 };
 DomUtility.IterSelector=function(el,selector,f)
 {
  var l,i,$1;
  l=el.querySelectorAll(selector);
  for(i=0,$1=l.length-1;i<=$1;i++)f(l[i]);
 };
 DomUtility.InsertAt=function(parent,pos,node)
 {
  var m;
  if(!(node.parentNode===parent&&pos===(m=node.nextSibling,Unchecked.Equals(m,null)?null:m)))
   parent.insertBefore(node,pos);
 };
 DomUtility.RemoveNode=function(parent,el)
 {
  if(el.parentNode===parent)
   parent.removeChild(el);
 };
 ConcreteVar=UI.ConcreteVar=Runtime$1.Class({
  get_View:function()
  {
   return this.view;
  },
  Set:function(v)
  {
   if(this.isConst)
    (function($1)
    {
     return $1("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal");
    }(function(s)
    {
     console.log(s);
    }));
   else
    {
     Snap.Obsolete(this.snap);
     this.current=v;
     this.snap=Snap.New({
      $:2,
      $0:v,
      $1:[]
     });
    }
  },
  Get:function()
  {
   return this.current;
  },
  UpdateMaybe:function(f)
  {
   var m;
   m=f(this.Get());
   m!=null&&m.$==1?this.Set(m.$0):void 0;
  }
 },Var,ConcreteVar);
 ConcreteVar.New=Runtime$1.Ctor(function(isConst,initSnap,initValue)
 {
  var $this;
  $this=this;
  Var.New.call(this);
  this.isConst=isConst;
  this.current=initValue;
  this.snap=initSnap;
  this.view=function()
  {
   return $this.snap;
  };
  this.id=Fresh.Int();
 },ConcreteVar);
 Templates.LoadLocalTemplates=function(baseName)
 {
  !Templates.LocalTemplatesLoaded()?(Templates.set_LocalTemplatesLoaded(true),Templates.LoadNestedTemplates(self.document.body,"")):void 0;
  Templates.LoadedTemplates().set_Item(baseName,Templates.LoadedTemplateFile(""));
 };
 Templates.LocalTemplatesLoaded=function()
 {
  SC$3.$cctor();
  return SC$3.LocalTemplatesLoaded;
 };
 Templates.set_LocalTemplatesLoaded=function($1)
 {
  SC$3.$cctor();
  SC$3.LocalTemplatesLoaded=$1;
 };
 Templates.LoadNestedTemplates=function(root,baseName)
 {
  var loadedTpls,rawTpls,wsTemplates,i,$1,node,name,wsChildrenTemplates,i$1,$2,node$1,name$1,els,instantiated;
  function prepareTemplate(name$2)
  {
   var m,o;
   if(!loadedTpls.ContainsKey(name$2))
    {
     m=(o=null,[rawTpls.TryGetValue(name$2,{
      get:function()
      {
       return o;
      },
      set:function(v)
      {
       o=v;
      }
     }),o]);
     m[0]?(instantiated.Add(name$2),rawTpls.Remove(name$2),Templates.PrepareTemplateStrict(baseName,{
      $:1,
      $0:name$2
     },m[1][0],{
      $:1,
      $0:m[1][1]
     },{
      $:1,
      $0:prepareTemplate
     })):console.warn(instantiated.Contains(name$2)?"Encountered loop when instantiating "+name$2:"Local template does not exist: "+name$2);
    }
  }
  loadedTpls=Templates.LoadedTemplateFile(baseName);
  rawTpls=new Dictionary.New$5();
  wsTemplates=root.querySelectorAll("[ws-template]");
  for(i=0,$1=wsTemplates.length-1;i<=$1;i++){
   node=wsTemplates[i];
   name=node.getAttribute("ws-template").toLowerCase();
   node.removeAttribute("ws-template");
   rawTpls.set_Item(name,[[node],Templates.FakeRootSingle(node)]);
  }
  wsChildrenTemplates=root.querySelectorAll("[ws-children-template]");
  for(i$1=0,$2=wsChildrenTemplates.length-1;i$1<=$2;i$1++){
   node$1=wsChildrenTemplates[i$1];
   name$1=node$1.getAttribute("ws-children-template").toLowerCase();
   node$1.removeAttribute("ws-children-template");
   rawTpls.set_Item(name$1,(els=DomUtility.ChildrenArray(node$1),[els,Templates.FakeRoot(els)]));
  }
  instantiated=new HashSet.New$3();
  while(rawTpls.count>0)
   prepareTemplate(Seq.head(rawTpls.get_Keys()));
 };
 Templates.LoadedTemplates=function()
 {
  SC$3.$cctor();
  return SC$3.LoadedTemplates;
 };
 Templates.LoadedTemplateFile=function(name)
 {
  var m,o,d;
  m=(o=null,[Templates.LoadedTemplates().TryGetValue(name,{
   get:function()
   {
    return o;
   },
   set:function(v)
   {
    o=v;
   }
  }),o]);
  return m[0]?m[1]:(d=new Dictionary.New$5(),(Templates.LoadedTemplates().set_Item(name,d),d));
 };
 Templates.GetOrLoadTemplate=function(baseName,name,els,fillWith)
 {
  Templates.LoadLocalTemplates("");
  Templates.PrepareTemplate(baseName,name,els);
  return Templates.NamedTemplate(baseName,name,fillWith);
 };
 Templates.PrepareTemplate=function(baseName,name,els)
 {
  var els$1,i,$1,el,m;
  if(!Templates.LoadedTemplateFile(baseName).ContainsKey(name==null?"":name.$0))
   {
    els$1=els();
    for(i=0,$1=els$1.length-1;i<=$1;i++){
     el=Arrays.get(els$1,i);
     m=el.parentNode;
     Unchecked.Equals(m,null)?void 0:m.removeChild(el);
    }
    Templates.PrepareTemplateStrict(baseName,name,els$1,null,null);
   }
 };
 Templates.FakeRootSingle=function(el)
 {
  var m,m$1,n;
  el.removeAttribute("ws-template");
  m=el.getAttribute("ws-replace");
  m===null?void 0:(el.removeAttribute("ws-replace"),m$1=el.parentNode,Unchecked.Equals(m$1,null)?void 0:(n=self.document.createElement(el.tagName),n.setAttribute("ws-replace",m),m$1.replaceChild(n,el)));
  return Templates.FakeRoot([el]);
 };
 Templates.FakeRoot=function(els)
 {
  var fakeroot,i,$1;
  fakeroot=self.document.createElement("div");
  for(i=0,$1=els.length-1;i<=$1;i++)fakeroot.appendChild(Arrays.get(els,i));
  return fakeroot;
 };
 Templates.PrepareTemplateStrict=function(baseName,name,els,root,prepareLocalTemplate)
 {
  var fakeroot,name$1;
  function recF(recI,$1)
  {
   var next,m,$2,x,f,name$2,p,instName,instBaseName,d,t,instance,usedHoles,mappings,attrs,i,$3,name$3,m$1,i$1,$4,n,singleTextFill,i$2,$5,n$1;
   function g(v)
   {
   }
   while(true)
    switch(recI)
    {
     case 0:
      if($1!==null)
       {
        next=$1.nextSibling;
        if(Unchecked.Equals($1.nodeType,Node.TEXT_NODE))
         Prepare.convertTextNode($1);
        else
         if(Unchecked.Equals($1.nodeType,Node.ELEMENT_NODE))
          convertElement($1);
        $1=next;
       }
      else
       return null;
      break;
     case 1:
      name$2=Slice.string($1.nodeName,{
       $:1,
       $0:3
      },null).toLowerCase();
      p=(m=name$2.indexOf("."),m===-1?[baseName,name$2]:[Slice.string(name$2,null,{
       $:1,
       $0:m-1
      }),Slice.string(name$2,{
       $:1,
       $0:m+1
      },null)]);
      instName=p[1];
      instBaseName=p[0];
      if(instBaseName!==""&&!Templates.LoadedTemplates().ContainsKey(instBaseName))
       return Prepare.failNotLoaded(instName);
      else
       {
        if(instBaseName===""&&prepareLocalTemplate!=null)
         prepareLocalTemplate.$0(instName);
        d=Templates.LoadedTemplates().get_Item(instBaseName);
        if(!d.ContainsKey(instName))
         return Prepare.failNotLoaded(instName);
        else
         {
          t=d.get_Item(instName);
          instance=t.cloneNode(true);
          usedHoles=new HashSet.New$3();
          mappings=new Dictionary.New$5();
          attrs=$1.attributes;
          for(i=0,$3=attrs.length-1;i<=$3;i++){
           name$3=attrs.item(i).name.toLowerCase();
           mappings.set_Item(name$3,(m$1=attrs.item(i).nodeValue,m$1===""?name$3:m$1.toLowerCase()));
           !usedHoles.Add(name$3)?console.warn("Hole mapped twice",name$3):void 0;
          }
          for(i$1=0,$4=$1.childNodes.length-1;i$1<=$4;i$1++){
           n=$1.childNodes[i$1];
           Unchecked.Equals(n.nodeType,Node.ELEMENT_NODE)?!usedHoles.Add(n.nodeName.toLowerCase())?console.warn("Hole filled twice",instName):void 0:void 0;
          }
          singleTextFill=$1.childNodes.length===1&&Unchecked.Equals($1.firstChild.nodeType,Node.TEXT_NODE);
          if(singleTextFill)
           {
            x=Prepare.fillTextHole(instance,$1.firstChild.textContent,instName);
            ((function(a)
            {
             return function(o)
             {
              if(o!=null)
               a(o.$0);
             };
            }((f=function(usedHoles$1)
            {
             return function(a)
             {
              return usedHoles$1.Add(a);
             };
            }(usedHoles),function(x$1)
            {
             return g(f(x$1));
            })))(x));
           }
          Prepare.removeHolesExcept(instance,usedHoles);
          if(!singleTextFill)
           {
            for(i$2=0,$5=$1.childNodes.length-1;i$2<=$5;i$2++){
             n$1=$1.childNodes[i$2];
             Unchecked.Equals(n$1.nodeType,Node.ELEMENT_NODE)?n$1.hasAttributes()?Prepare.fillInstanceAttrs(instance,n$1):fillDocHole(instance,n$1):void 0;
            }
           }
          Prepare.mapHoles(instance,mappings);
          Prepare.fill(instance,$1.parentNode,$1);
          $1.parentNode.removeChild($1);
          return;
         }
       }
      break;
    }
  }
  function fillDocHole(instance,fillWith)
  {
   var m,name$2,m$1;
   function fillHole(p,n)
   {
    var parsed,i,$1;
    if(name$2==="title"&&fillWith.hasChildNodes())
     {
      parsed=$.parseHTML(fillWith.textContent);
      fillWith.removeChild(fillWith.firstChild);
      for(i=0,$1=parsed.length-1;i<=$1;i++)fillWith.appendChild(Arrays.get(parsed,i));
     }
    else
     null;
    convertElement(fillWith);
    return Prepare.fill(fillWith,p,n);
   }
   name$2=fillWith.nodeName.toLowerCase();
   DomUtility.IterSelector(instance,"[ws-attr-holes]",function(e)
   {
    var holeAttrs,i,$1,attrName,_this;
    holeAttrs=Strings.SplitChars(e.getAttribute("ws-attr-holes"),[" "],1);
    for(i=0,$1=holeAttrs.length-1;i<=$1;i++){
     attrName=Arrays.get(holeAttrs,i);
     e.setAttribute(attrName,(_this=new Global.RegExp("\\${"+name$2+"}","ig"),e.getAttribute(attrName).replace(_this,fillWith.textContent)));
    }
   });
   m$1=instance.querySelector("[ws-hole="+name$2+"]");
   if(Unchecked.Equals(m$1,null))
    {
     m=instance.querySelector("[ws-replace="+name$2+"]");
     return Unchecked.Equals(m,null)?null:(fillHole(m.parentNode,m),void m.parentNode.removeChild(m));
    }
   else
    {
     while(m$1.hasChildNodes())
      m$1.removeChild(m$1.lastChild);
     m$1.removeAttribute("ws-hole");
     return fillHole(m$1,null);
    }
  }
  function convertElement(el)
  {
   if(Strings.StartsWith(el.nodeName.toLowerCase(),"ws-"))
    convertInstantiation(el);
   else
    {
     Prepare.convertAttrs(el);
     convertNodeAndSiblings(el.firstChild);
    }
  }
  function convertNodeAndSiblings(n)
  {
   return recF(0,n);
  }
  function convertInstantiation(el)
  {
   return recF(1,el);
  }
  fakeroot=root==null?Templates.FakeRoot(els):root.$0;
  name$1=(name==null?"":name.$0).toLowerCase();
  Templates.LoadedTemplateFile(baseName).set_Item(name$1,fakeroot);
  Arrays.length(els)>0?(function(el)
  {
   var m,m$1,name$2,name$3;
   while(true)
    {
     m=el.querySelector("[ws-template]");
     if(Unchecked.Equals(m,null))
      {
       m$1=el.querySelector("[ws-children-template]");
       if(Unchecked.Equals(m$1,null))
        return null;
       else
        {
         name$2=m$1.getAttribute("ws-children-template");
         m$1.removeAttribute("ws-children-template");
         Templates.PrepareTemplateStrict(baseName,{
          $:1,
          $0:name$2
         },DomUtility.ChildrenArray(m$1),null,null);
         el=el;
        }
      }
     else
      {
       name$3=m.getAttribute("ws-template");
       (Templates.PrepareSingleTemplate(baseName,{
        $:1,
        $0:name$3
       },m))(null);
       el=el;
      }
    }
  }(fakeroot),convertNodeAndSiblings(Arrays.get(els,0))):void 0;
 };
 Templates.NamedTemplate=function(baseName,name,fillWith)
 {
  var m,o;
  m=(o=null,[Templates.LoadedTemplateFile(baseName).TryGetValue(name==null?"":name.$0,{
   get:function()
   {
    return o;
   },
   set:function(v)
   {
    o=v;
   }
  }),o]);
  return m[0]?Templates.ChildrenTemplate(m[1].cloneNode(true),fillWith):(console.warn("Local template doesn't exist",name),Doc.get_Empty());
 };
 Templates.PrepareSingleTemplate=function(baseName,name,el)
 {
  var root,e,r;
  root=Templates.FakeRootSingle(el);
  e=[el];
  r={
   $:1,
   $0:root
  };
  return function(p)
  {
   Templates.PrepareTemplateStrict(baseName,name,e,r,p);
  };
 };
 Templates.ChildrenTemplate=function(el,fillWith)
 {
  var p,updates,docTreeNode,m,$1;
  p=Templates.InlineTemplate(el,fillWith);
  updates=p[1];
  docTreeNode=p[0];
  m=docTreeNode.Els;
  return!Unchecked.Equals(m,null)&&m.length===1&&(Arrays.get(m,0)instanceof Node&&(Unchecked.Equals(Arrays.get(m,0).nodeType,Node.ELEMENT_NODE)&&($1=Arrays.get(m,0),true)))?Elt.TreeNode(docTreeNode,updates):Doc.Mk({
   $:6,
   $0:docTreeNode
  },updates);
 };
 Templates.TextHoleRE=function()
 {
  SC$3.$cctor();
  return SC$3.TextHoleRE;
 };
 Templates.InlineTemplate=function(el,fillWith)
 {
  var els,$1,$2,$3,holes,updates,attrs,afterRender,fw,e,x;
  function addAttr(el$1,attr$1)
  {
   var attr$2,m,f;
   attr$2=Attrs.Insert(el$1,attr$1);
   updates.push(Attrs.Updates(attr$2));
   attrs.push([el$1,attr$2]);
   m=Runtime$1.GetOptional(attr$2.OnAfterRender);
   return m==null?null:(f=m.$0,void afterRender.push(function()
   {
    f(el$1);
   }));
  }
  function tryGetAsDoc(name)
  {
   var m,o;
   m=(o=null,[fw.TryGetValue(name,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o]);
   return m[0]?m[1].$==0?{
    $:1,
    $0:m[1].$1
   }:m[1].$==1?{
    $:1,
    $0:Doc.TextNode(m[1].$1)
   }:m[1].$==2?{
    $:1,
    $0:Doc.TextView(m[1].$1)
   }:m[1].$==8?{
    $:1,
    $0:Doc.TextView(m[1].$1.get_View())
   }:m[1].$==9?{
    $:1,
    $0:Doc.TextView(View.Map(Global.String,m[1].$1.get_View()))
   }:m[1].$==10?{
    $:1,
    $0:Doc.TextView(View.Map(function(i)
    {
     return i.get_Input();
    },m[1].$1.get_View()))
   }:m[1].$==11?{
    $:1,
    $0:Doc.TextView(View.Map(Global.String,m[1].$1.get_View()))
   }:m[1].$==12?{
    $:1,
    $0:Doc.TextView(View.Map(function(i)
    {
     return i.get_Input();
    },m[1].$1.get_View()))
   }:m[1].$==13?{
    $:1,
    $0:Doc.TextView(View.Map(Global.String,m[1].$1.get_View()))
   }:(console.warn("Content hole filled with attribute data",name),null):null;
  }
  holes=[];
  updates=[];
  attrs=[];
  afterRender=[];
  fw=new Dictionary.New$5();
  e=Enumerator.Get(fillWith);
  try
  {
   while(e.MoveNext())
    {
     x=e.Current();
     fw.set_Item(x.$0,x);
    }
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
  els=DomUtility.ChildrenArray(el);
  DomUtility.IterSelector(el,"[ws-hole]",function(p)
  {
   var m,doc,name;
   name=p.getAttribute("ws-hole");
   p.removeAttribute("ws-hole");
   while(p.hasChildNodes())
    p.removeChild(p.lastChild);
   m=tryGetAsDoc(name);
   m!=null&&m.$==1?(doc=m.$0,Docs.LinkElement(p,doc.docNode),holes.push(DocElemNode.New(Attrs.Empty(p),doc.docNode,null,p,Fresh.Int(),null)),updates.push(doc.updates)):void 0;
  });
  DomUtility.IterSelector(el,"[ws-replace]",function(e$1)
  {
   var m,doc,p,after,before,o;
   m=tryGetAsDoc(e$1.getAttribute("ws-replace"));
   m!=null&&m.$==1?(doc=m.$0,p=e$1.parentNode,after=self.document.createTextNode(""),p.replaceChild(after,e$1),before=Docs.InsertBeforeDelim(after,doc.docNode),o=Arrays.tryFindIndex(function(y)
   {
    return e$1===y;
   },els),o==null?void 0:Arrays.set(els,o.$0,doc.docNode),holes.push(DocElemNode.New(Attrs.Empty(p),doc.docNode,{
    $:1,
    $0:[before,after]
   },p,Fresh.Int(),null)),updates.push(doc.updates)):void 0;
  });
  DomUtility.IterSelector(el,"[ws-attr]",function(e$1)
  {
   var name,m,o;
   name=e$1.getAttribute("ws-attr");
   e$1.removeAttribute("ws-attr");
   m=(o=null,[fw.TryGetValue(name,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o]);
   m[0]?m[1].$==3?addAttr(e$1,m[1].$1):console.warn("Attribute hole filled with non-attribute data",name):void 0;
  });
  DomUtility.IterSelector(el,"[ws-on]",function(e$1)
  {
   addAttr(e$1,AttrProxy.Concat(Arrays.choose(function(x$1)
   {
    var a,m,o;
    a=Strings.SplitChars(x$1,[":"],1);
    m=(o=null,[fw.TryGetValue(Arrays.get(a,1),{
     get:function()
     {
      return o;
     },
     set:function(v)
     {
      o=v;
     }
    }),o]);
    return m[0]?m[1].$==4?{
     $:1,
     $0:AttrModule.Handler(Arrays.get(a,0),m[1].$1)
    }:m[1].$==5?{
     $:1,
     $0:AttrProxy.Handler(Arrays.get(a,0),m[1].$2)
    }:(console.warn("Event hole on"+Arrays.get(a,0)+" filled with non-event data",Arrays.get(a,1)),null):null;
   },Strings.SplitChars(e$1.getAttribute("ws-on"),[" "],1))));
   e$1.removeAttribute("ws-on");
  });
  DomUtility.IterSelector(el,"[ws-onafterrender]",function(e$1)
  {
   var name,m,o;
   name=e$1.getAttribute("ws-onafterrender");
   m=(o=null,[fw.TryGetValue(name,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o]);
   m[0]?m[1].$==6?(e$1.removeAttribute("ws-onafterrender"),addAttr(e$1,AttrModule.OnAfterRender(m[1].$1))):m[1].$==7?(e$1.removeAttribute("ws-onafterrender"),addAttr(e$1,AttrModule.OnAfterRender(m[1].$1))):console.warn("onafterrender hole filled with non-onafterrender data",name):void 0;
  });
  DomUtility.IterSelector(el,"[ws-var]",function(e$1)
  {
   var name,m,o;
   name=e$1.getAttribute("ws-var");
   e$1.removeAttribute("ws-var");
   m=(o=null,[fw.TryGetValue(name,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o]);
   m[0]?m[1].$==8?addAttr(e$1,AttrModule.Value(m[1].$1)):m[1].$==9?addAttr(e$1,AttrModule.Checked(m[1].$1)):m[1].$==10?addAttr(e$1,AttrModule.IntValue(m[1].$1)):m[1].$==11?addAttr(e$1,AttrModule.IntValueUnchecked(m[1].$1)):m[1].$==12?addAttr(e$1,AttrModule.FloatValue(m[1].$1)):m[1].$==13?addAttr(e$1,AttrModule.FloatValueUnchecked(m[1].$1)):console.warn("Var hole filled with non-Var data",name):void 0;
  });
  DomUtility.IterSelector(el,"[ws-attr-holes]",function(e$1)
  {
   var re,holeAttrs,i,$4;
   re=new Global.RegExp(Templates.TextHoleRE(),"g");
   holeAttrs=Strings.SplitChars(e$1.getAttribute("ws-attr-holes"),[" "],1);
   e$1.removeAttribute("ws-attr-holes");
   for(i=0,$4=holeAttrs.length-1;i<=$4;i++)(function()
   {
    var m,lastIndex,$5,finalText,value,s,s$1,s$2,s$3,attrName,s$4,res,textBefore;
    attrName=Arrays.get(holeAttrs,i);
    s$4=e$1.getAttribute(attrName);
    m=null;
    lastIndex=0;
    res=[];
    while(m=re.exec(s$4),m!==null)
     {
      textBefore=Slice.string(s$4,{
       $:1,
       $0:lastIndex
      },{
       $:1,
       $0:re.lastIndex-Arrays.get(m,0).length-1
      });
      lastIndex=re.lastIndex;
      res.push([textBefore,Arrays.get(m,1)]);
     }
    finalText=Slice.string(s$4,{
     $:1,
     $0:lastIndex
    },null);
    re.lastIndex=0;
    value=Arrays.foldBack(function($6,$7)
    {
     return(function(t)
     {
      var textBefore$1,holeName;
      textBefore$1=t[0];
      holeName=t[1];
      return function(t$1)
      {
       var textAfter,views,holeContent,m$1,o;
       textAfter=t$1[0];
       views=t$1[1];
       holeContent=(m$1=(o=null,[fw.TryGetValue(holeName,{
        get:function()
        {
         return o;
        },
        set:function(v)
        {
         o=v;
        }
       }),o]),m$1[0]?m$1[1].$==1?{
        $:0,
        $0:m$1[1].$1
       }:m$1[1].$==2?{
        $:1,
        $0:m$1[1].$1
       }:m$1[1].$==8?{
        $:1,
        $0:m$1[1].$1.get_View()
       }:m$1[1].$==9?{
        $:1,
        $0:View.Map(Global.String,m$1[1].$1.get_View())
       }:m$1[1].$==10?{
        $:1,
        $0:View.Map(function(i$1)
        {
         return i$1.get_Input();
        },m$1[1].$1.get_View())
       }:m$1[1].$==11?{
        $:1,
        $0:View.Map(Global.String,m$1[1].$1.get_View())
       }:m$1[1].$==12?{
        $:1,
        $0:View.Map(function(i$1)
        {
         return i$1.get_Input();
        },m$1[1].$1.get_View())
       }:m$1[1].$==13?{
        $:1,
        $0:View.Map(Global.String,m$1[1].$1.get_View())
       }:(console.warn("Attribute value hole filled with non-text data",holeName),{
        $:0,
        $0:""
       }):{
        $:0,
        $0:""
       });
       return holeContent.$==1?[textBefore$1,new T({
        $:1,
        $0:textAfter===""?holeContent.$0:View.Map(function(s$5)
        {
         return s$5+textAfter;
        },holeContent.$0),
        $1:views
       })]:[textBefore$1+holeContent.$0+textAfter,views];
      };
     }($6))($7);
    },res,[finalText,T.Empty]);
    return addAttr(e$1,value[1].$==1?value[1].$1.$==1?value[1].$1.$1.$==1?value[1].$1.$1.$1.$==0?(s=value[0],AttrModule.Dynamic(attrName,View.Map3(function(v1,v2,v3)
    {
     return s+v1+v2+v3;
    },value[1].$0,value[1].$1.$0,value[1].$1.$1.$0))):(s$1=value[0],AttrModule.Dynamic(attrName,View.Map(function(vs)
    {
     return s$1+Strings.concat("",vs);
    },View.Sequence(value[1])))):(s$2=value[0],AttrModule.Dynamic(attrName,View.Map2(function(v1,v2)
    {
     return s$2+v1+v2;
    },value[1].$0,value[1].$1.$0))):value[0]===""?AttrModule.Dynamic(attrName,value[1].$0):(s$3=value[0],AttrModule.Dynamic(attrName,View.Map(function(v)
    {
     return s$3+v;
    },value[1].$0))):AttrProxy.Create(attrName,value[0]));
   }());
  });
  return[Runtime$1.DeleteEmptyFields({
   Els:els,
   Dirty:true,
   Holes:holes,
   Attrs:attrs,
   Render:($1=afterRender.length==0?null:{
    $:1,
    $0:function(el$1)
    {
     Arrays.iter(function(f)
     {
      f(el$1);
     },afterRender);
    }
   },$1?$1.$0:void 0),
   El:($2=!Unchecked.Equals(els,null)&&els.length===1&&(Arrays.get(els,0)instanceof Node&&(Arrays.get(els,0)instanceof Global.Element&&($3=Arrays.get(els,0),true)))?{
    $:1,
    $0:$3
   }:null,$2?$2.$0:void 0)
  },["Render","El"]),Array.TreeReduce(View.Const(),View.Map2Unit,updates)];
 };
 CancellationTokenSource=WebSharper.CancellationTokenSource=Runtime$1.Class({
  Cancel$1:function()
  {
   var errors;
   if(!this.c)
    {
     this.c=true;
     errors=Arrays.choose(function(a)
     {
      try
      {
       a();
       return null;
      }
      catch(e)
      {
       return{
        $:1,
        $0:e
       };
      }
     },this.r);
     if(Arrays.length(errors)>0)
      throw new AggregateException.New$3(errors);
     else
      void 0;
    }
  }
 },Obj,CancellationTokenSource);
 CancellationTokenSource.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
  this.c=false;
  this.pending=null;
  this.r=[];
  this.init=1;
 },CancellationTokenSource);
 List$1=Collections.List=Runtime$1.Class({
  GetEnumerator:function()
  {
   return Enumerator.Get(this);
  },
  GetEnumerator0:function()
  {
   return Enumerator.Get0(this);
  }
 },null,List$1);
 Dictionary=Collections.Dictionary=Runtime$1.Class({
  set_Item:function(k,v)
  {
   this.set(k,v);
  },
  set:function(k,v)
  {
   var $this,h,d,m;
   $this=this;
   h=this.hash(k);
   d=this.data[h];
   d==null?(this.count=this.count+1,this.data[h]=new Global.Array({
    K:k,
    V:v
   })):(m=Arrays.tryFindIndex(function(a)
   {
    return $this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);
   },d),m==null?(this.count=this.count+1,d.push({
    K:k,
    V:v
   })):d[m.$0]={
    K:k,
    V:v
   });
  },
  ContainsKey:function(k)
  {
   var $this,d;
   $this=this;
   d=this.data[this.hash(k)];
   return d==null?false:Arrays.exists(function(a)
   {
    return $this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);
   },d);
  },
  TryGetValue:function(k,res)
  {
   var $this,d,v;
   $this=this;
   d=this.data[this.hash(k)];
   return d==null?false:(v=Arrays.tryPick(function(a)
   {
    var a$1;
    a$1=Operators.KeyValue(a);
    return $this.equals.apply(null,[a$1[0],k])?{
     $:1,
     $0:a$1[1]
    }:null;
   },d),v!=null&&v.$==1&&(res.set(v.$0),true));
  },
  Remove:function(k)
  {
   return this.remove(k);
  },
  get_Keys:function()
  {
   return new KeyCollection.New(this);
  },
  get_Item:function(k)
  {
   return this.get(k);
  },
  Clear:function()
  {
   this.data=[];
   this.count=0;
  },
  remove:function(k)
  {
   var $this,h,d,r;
   $this=this;
   h=this.hash(k);
   d=this.data[h];
   return d==null?false:(r=Arrays.filter(function(a)
   {
    return!$this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);
   },d),Arrays.length(r)<d.length&&(this.count=this.count-1,this.data[h]=r,true));
  },
  get:function(k)
  {
   var $this,d;
   $this=this;
   d=this.data[this.hash(k)];
   return d==null?DictionaryUtil.notPresent():Arrays.pick(function(a)
   {
    var a$1;
    a$1=Operators.KeyValue(a);
    return $this.equals.apply(null,[a$1[0],k])?{
     $:1,
     $0:a$1[1]
    }:null;
   },d);
  },
  GetEnumerator:function()
  {
   return Enumerator.Get0(this);
  },
  GetEnumerator0:function()
  {
   return Enumerator.Get0(Arrays.concat(JS.GetFieldValues(this.data)));
  }
 },Obj,Dictionary);
 Dictionary.New$5=Runtime$1.Ctor(function()
 {
  Dictionary.New$6.call(this,[],Unchecked.Equals,Unchecked.Hash);
 },Dictionary);
 Dictionary.New$6=Runtime$1.Ctor(function(init,equals,hash)
 {
  var e,x;
  Obj.New.call(this);
  this.equals=equals;
  this.hash=hash;
  this.count=0;
  this.data=[];
  e=Enumerator.Get(init);
  try
  {
   while(e.MoveNext())
    {
     x=e.Current();
     this.set(x.K,x.V);
    }
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 },Dictionary);
 HashSet=Collections.HashSet=Runtime$1.Class({
  Add:function(item)
  {
   return this.add(item);
  },
  Contains:function(item)
  {
   var arr;
   arr=this.data[this.hash(item)];
   return arr==null?false:this.arrContains(item,arr);
  },
  add:function(item)
  {
   var h,arr;
   h=this.hash(item);
   arr=this.data[h];
   return arr==null?(this.data[h]=[item],this.count=this.count+1,true):this.arrContains(item,arr)?false:(arr.push(item),this.count=this.count+1,true);
  },
  arrContains:function(item,arr)
  {
   var c,i,$1,l;
   c=true;
   i=0;
   l=arr.length;
   while(c&&i<l)
    if(this.equals.apply(null,[arr[i],item]))
     c=false;
    else
     i=i+1;
   return!c;
  },
  ExceptWith:function(xs)
  {
   var e;
   e=Enumerator.Get(xs);
   try
   {
    while(e.MoveNext())
     this.Remove(e.Current());
   }
   finally
   {
    if(typeof e=="object"&&"Dispose"in e)
     e.Dispose();
   }
  },
  get_Count:function()
  {
   return this.count;
  },
  CopyTo:function(arr)
  {
   var i,all,i$1,$1;
   i=0;
   all=HashSetUtil.concat(this.data);
   for(i$1=0,$1=all.length-1;i$1<=$1;i$1++)Arrays.set(arr,i$1,all[i$1]);
  },
  IntersectWith:function(xs)
  {
   var other,all,i,$1,item;
   other=new HashSet.New$4(xs,this.equals,this.hash);
   all=HashSetUtil.concat(this.data);
   for(i=0,$1=all.length-1;i<=$1;i++){
    item=all[i];
    !other.Contains(item)?this.Remove(item):void 0;
   }
  },
  Remove:function(item)
  {
   var arr;
   arr=this.data[this.hash(item)];
   return arr==null?false:this.arrRemove(item,arr)&&(this.count=this.count-1,true);
  },
  arrRemove:function(item,arr)
  {
   var c,i,$1,l;
   c=true;
   i=0;
   l=arr.length;
   while(c&&i<l)
    if(this.equals.apply(null,[arr[i],item]))
     {
      arr.splice.apply(arr,[i,1]);
      c=false;
     }
    else
     i=i+1;
   return!c;
  },
  GetEnumerator:function()
  {
   return Enumerator.Get(HashSetUtil.concat(this.data));
  },
  GetEnumerator0:function()
  {
   return Enumerator.Get(HashSetUtil.concat(this.data));
  }
 },Obj,HashSet);
 HashSet.New$3=Runtime$1.Ctor(function()
 {
  HashSet.New$4.call(this,[],Unchecked.Equals,Unchecked.Hash);
 },HashSet);
 HashSet.New$4=Runtime$1.Ctor(function(init,equals,hash)
 {
  var e;
  Obj.New.call(this);
  this.equals=equals;
  this.hash=hash;
  this.data=[];
  this.count=0;
  e=Enumerator.Get(init);
  try
  {
   while(e.MoveNext())
    this.add(e.Current());
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 },HashSet);
 HashSet.New$2=Runtime$1.Ctor(function(init)
 {
  HashSet.New$4.call(this,init,Unchecked.Equals,Unchecked.Hash);
 },HashSet);
 FromView=UI.FromView=Runtime$1.Class({
  get_View:function()
  {
   return this.view;
  },
  Set:function(x)
  {
   this.set(x);
  },
  Get:function()
  {
   return this.current;
  },
  UpdateMaybe:function(f)
  {
   var $this;
   $this=this;
   View.Get(function(x)
   {
    var m;
    m=f(x);
    m!=null&&m.$==1?$this.set(m.$0):void 0;
   },this.view);
  }
 },Var,FromView);
 FromView.New=Runtime$1.Ctor(function(view,set)
 {
  var $this,m;
  $this=this;
  Var.New.call(this);
  this.set=set;
  this.id=Fresh.Int();
  this.current=(m=View.TryGet(view),m==null?null:m.$0);
  this.view=View.Map(function(x)
  {
   $this.current=x;
   return x;
  },view);
 },FromView);
 Attrs.Static=function(attr$1)
 {
  return new AttrProxy({
   $:3,
   $0:attr$1
  });
 };
 Attrs.Dynamic=function(view,set)
 {
  return new AttrProxy({
   $:1,
   $0:new DynamicAttrNode.New(view,set)
  });
 };
 Attrs.Updates=function(dyn)
 {
  return Array.MapTreeReduce(function(x)
  {
   return x.NChanged();
  },View.Const(),View.Map2Unit,dyn.DynNodes);
 };
 Attrs.AppendTree=function(a,b)
 {
  var x;
  return a===null?b:b===null?a:(x=new AttrProxy({
   $:2,
   $0:a,
   $1:b
  }),(Attrs.SetFlags(x,Attrs.Flags(a)|Attrs.Flags(b)),x));
 };
 Attrs.EmptyAttr=function()
 {
  SC$5.$cctor();
  return SC$5.EmptyAttr;
 };
 Attrs.Insert=function(elem,tree)
 {
  var nodes,oar,arr;
  function loop(node)
  {
   if(!(node===null))
    if(node!=null&&node.$==1)
     nodes.push(node.$0);
    else
     if(node!=null&&node.$==2)
      {
       loop(node.$0);
       loop(node.$1);
      }
     else
      if(node!=null&&node.$==3)
       node.$0(elem);
      else
       if(node!=null&&node.$==4)
        oar.push(node.$0);
  }
  nodes=[];
  oar=[];
  loop(tree);
  arr=nodes.slice(0);
  return Dyn.New(elem,Attrs.Flags(tree),arr,oar.length===0?null:{
   $:1,
   $0:function(el)
   {
    Seq.iter(function(f)
    {
     f(el);
    },oar);
   }
  });
 };
 Attrs.SetFlags=function(a,f)
 {
  a.flags=f;
 };
 Attrs.Flags=function(a)
 {
  return a!==null&&a.hasOwnProperty("flags")?a.flags:0;
 };
 Attrs.HasExitAnim=function(attr$1)
 {
  var flag;
  flag=2;
  return(attr$1.DynFlags&flag)===flag;
 };
 Attrs.GetExitAnim=function(dyn)
 {
  return Attrs.GetAnim(dyn,function($1,$2)
  {
   return $1.NGetExitAnim($2);
  });
 };
 Attrs.HasEnterAnim=function(attr$1)
 {
  var flag;
  flag=1;
  return(attr$1.DynFlags&flag)===flag;
 };
 Attrs.GetEnterAnim=function(dyn)
 {
  return Attrs.GetAnim(dyn,function($1,$2)
  {
   return $1.NGetEnterAnim($2);
  });
 };
 Attrs.HasChangeAnim=function(attr$1)
 {
  var flag;
  flag=4;
  return(attr$1.DynFlags&flag)===flag;
 };
 Attrs.GetChangeAnim=function(dyn)
 {
  return Attrs.GetAnim(dyn,function($1,$2)
  {
   return $1.NGetChangeAnim($2);
  });
 };
 Attrs.GetAnim=function(dyn,f)
 {
  return An.Concat(Arrays.map(function(n)
  {
   return f(n,dyn.DynElem);
  },dyn.DynNodes));
 };
 Attrs.Sync=function(elem,dyn)
 {
  Arrays.iter(function(d)
  {
   d.NSync(elem);
  },dyn.DynNodes);
 };
 Attrs.Empty=function(e)
 {
  return Dyn.New(e,0,[],null);
 };
 Array.ofSeqNonCopying=function(xs)
 {
  var q,o;
  if(xs instanceof Global.Array)
   return xs;
  else
   if(xs instanceof T)
    return Arrays.ofList(xs);
   else
    if(xs===null)
     return[];
    else
     {
      q=[];
      o=Enumerator.Get(xs);
      try
      {
       while(o.MoveNext())
        q.push(o.Current());
       return q;
      }
      finally
      {
       if(typeof o=="object"&&"Dispose"in o)
        o.Dispose();
      }
     }
 };
 Array.TreeReduce=function(defaultValue,reduction,array)
 {
  var l;
  function loop(off,len)
  {
   var $1,l2;
   return len<=0?defaultValue:len===1&&(off>=0&&off<l)?Arrays.get(array,off):(l2=len/2>>0,reduction(loop(off,l2),loop(off+l2,len-l2)));
  }
  l=Arrays.length(array);
  return loop(0,l);
 };
 Array.mapInPlace=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=f(arr[i]);
  return arr;
 };
 Array.MapTreeReduce=function(mapping,defaultValue,reduction,array)
 {
  var l;
  function loop(off,len)
  {
   var $1,l2;
   return len<=0?defaultValue:len===1&&(off>=0&&off<l)?mapping(Arrays.get(array,off)):(l2=len/2>>0,reduction(loop(off,l2),loop(off+l2,len-l2)));
  }
  l=Arrays.length(array);
  return loop(0,l);
 };
 LazyRecord.New=function(created,evalOrVal,force)
 {
  return{
   c:created,
   v:evalOrVal,
   f:force
  };
 };
 DateUtil.TryParse=function(s)
 {
  var d;
  d=Date.parse(s);
  return Global.isNaN(d)?null:{
   $:1,
   $0:d
  };
 };
 Numeric.TryParse=function(s,min,max,r)
 {
  var x,ok;
  x=+s;
  ok=x===x-x%1&&x>=min&&x<=max;
  ok?r.set(x):void 0;
  return ok;
 };
 Snap.Obsolete=function(sn)
 {
  var $1,m,i,$2,o;
  m=sn.s;
  if(m==null||(m!=null&&m.$==2?($1=m.$1,false):m!=null&&m.$==3?($1=m.$1,false):true))
   void 0;
  else
   {
    sn.s=null;
    for(i=0,$2=Arrays.length($1)-1;i<=$2;i++){
     o=Arrays.get($1,i);
     typeof o=="object"?function(sn$1)
     {
      Snap.Obsolete(sn$1);
     }(o):o();
    }
   }
 };
 Snap.New=function(State)
 {
  return{
   s:State
  };
 };
 Docs.CreateTextNode=function()
 {
  return{
   Text:DomUtility.CreateText(""),
   Dirty:false,
   Value:""
  };
 };
 Docs.UpdateTextNode=function(n,t)
 {
  n.Value=t;
  n.Dirty=true;
 };
 Docs.LinkElement=function(el,children)
 {
  Docs.InsertDoc(el,children,null);
 };
 Docs.CreateEmbedNode=function()
 {
  return{
   Current:null,
   Dirty:false
  };
 };
 Docs.UpdateEmbedNode=function(node,upd)
 {
  node.Current=upd;
  node.Dirty=true;
 };
 Docs.CreateElemNode=function(el,attr$1,children)
 {
  var attr$2;
  Docs.LinkElement(el,children);
  attr$2=Attrs.Insert(el,attr$1);
  return DocElemNode.New(attr$2,children,null,el,Fresh.Int(),Runtime$1.GetOptional(attr$2.OnAfterRender));
 };
 Docs.InsertDoc=function(parent,doc,pos)
 {
  var d;
  return doc!=null&&doc.$==1?Docs.InsertNode(parent,doc.$0.El,pos):doc!=null&&doc.$==2?(d=doc.$0,(d.Dirty=false,Docs.InsertDoc(parent,d.Current,pos))):doc==null?pos:doc!=null&&doc.$==4?Docs.InsertNode(parent,doc.$0.Text,pos):doc!=null&&doc.$==5?Docs.InsertNode(parent,doc.$0,pos):doc!=null&&doc.$==6?Arrays.foldBack(function($1,$2)
  {
   return $1==null||$1.constructor===Object?Docs.InsertDoc(parent,$1,$2):Docs.InsertNode(parent,$1,$2);
  },doc.$0.Els,pos):Docs.InsertDoc(parent,doc.$0,Docs.InsertDoc(parent,doc.$1,pos));
 };
 Docs.CreateRunState=function(parent,doc)
 {
  return RunState.New(NodeSet.get_Empty(),Docs.CreateElemNode(parent,Attrs.EmptyAttr(),doc));
 };
 Docs.PerformAnimatedUpdate=function(childrenOnly,st,doc)
 {
  var b;
  return An.get_UseAnimations()?(b=null,Concurrency.Delay(function()
  {
   var cur,change,enter;
   cur=NodeSet.FindAll(doc);
   change=Docs.ComputeChangeAnim(st,cur);
   enter=Docs.ComputeEnterAnim(st,cur);
   return Concurrency.Bind(An.Play(An.Append(change,Docs.ComputeExitAnim(st,cur))),function()
   {
    return Concurrency.Bind(Docs.SyncElemNodesNextFrame(childrenOnly,st),function()
    {
     return Concurrency.Bind(An.Play(enter),function()
     {
      st.PreviousNodes=cur;
      return Concurrency.Return(null);
     });
    });
   });
  })):Docs.SyncElemNodesNextFrame(childrenOnly,st);
 };
 Docs.PerformSyncUpdate=function(childrenOnly,st,doc)
 {
  var cur;
  cur=NodeSet.FindAll(doc);
  Docs.SyncElemNode(childrenOnly,st.Top);
  st.PreviousNodes=cur;
 };
 Docs.InsertNode=function(parent,node,pos)
 {
  DomUtility.InsertAt(parent,pos,node);
  return node;
 };
 Docs.SyncElemNodesNextFrame=function(childrenOnly,st)
 {
  function a(ok)
  {
   Global.requestAnimationFrame(function()
   {
    Docs.SyncElemNode(childrenOnly,st.Top);
    ok();
   });
  }
  return Settings.BatchUpdatesEnabled()?Concurrency.FromContinuations(function($1,$2,$3)
  {
   return a.apply(null,[$1,$2,$3]);
  }):(Docs.SyncElemNode(childrenOnly,st.Top),Concurrency.Return(null));
 };
 Docs.ComputeExitAnim=function(st,cur)
 {
  return An.Concat(Arrays.map(function(n)
  {
   return Attrs.GetExitAnim(n.Attr);
  },NodeSet.ToArray(NodeSet.Except(cur,NodeSet.Filter(function(n)
  {
   return Attrs.HasExitAnim(n.Attr);
  },st.PreviousNodes)))));
 };
 Docs.ComputeEnterAnim=function(st,cur)
 {
  return An.Concat(Arrays.map(function(n)
  {
   return Attrs.GetEnterAnim(n.Attr);
  },NodeSet.ToArray(NodeSet.Except(st.PreviousNodes,NodeSet.Filter(function(n)
  {
   return Attrs.HasEnterAnim(n.Attr);
  },cur)))));
 };
 Docs.ComputeChangeAnim=function(st,cur)
 {
  var relevant;
  function a(n)
  {
   return Attrs.HasChangeAnim(n.Attr);
  }
  relevant=function(a$1)
  {
   return NodeSet.Filter(a,a$1);
  };
  return An.Concat(Arrays.map(function(n)
  {
   return Attrs.GetChangeAnim(n.Attr);
  },NodeSet.ToArray(NodeSet.Intersect(relevant(st.PreviousNodes),relevant(cur)))));
 };
 Docs.SyncElemNode=function(childrenOnly,el)
 {
  !childrenOnly?Docs.SyncElement(el):void 0;
  Docs.Sync(el.Children);
  Docs.AfterRender(el);
 };
 Docs.SyncElement=function(el)
 {
  function hasDirtyChildren(el$1)
  {
   function dirty(doc)
   {
    var d,t;
    return doc!=null&&doc.$==0?dirty(doc.$0)||dirty(doc.$1):doc!=null&&doc.$==2?(d=doc.$0,d.Dirty||dirty(d.Current)):doc!=null&&doc.$==6&&(t=doc.$0,t.Dirty||Arrays.exists(hasDirtyChildren,t.Holes));
   }
   return dirty(el$1.Children);
  }
  Attrs.Sync(el.El,el.Attr);
  hasDirtyChildren(el)?Docs.DoSyncElement(el):void 0;
 };
 Docs.Sync=function(doc)
 {
  var d,t;
  if(doc!=null&&doc.$==1)
   Docs.SyncElemNode(false,doc.$0);
  else
   if(doc!=null&&doc.$==2)
    Docs.Sync(doc.$0.Current);
   else
    if(doc==null)
     ;
    else
     if(doc!=null&&doc.$==5)
      ;
     else
      if(doc!=null&&doc.$==4)
       {
        d=doc.$0;
        d.Dirty?(d.Text.nodeValue=d.Value,d.Dirty=false):void 0;
       }
      else
       if(doc!=null&&doc.$==6)
        {
         t=doc.$0;
         Arrays.iter(function(e)
         {
          Docs.SyncElemNode(false,e);
         },t.Holes);
         Arrays.iter(function(t$1)
         {
          Attrs.Sync(t$1[0],t$1[1]);
         },t.Attrs);
         Docs.AfterRender(t);
        }
       else
        {
         Docs.Sync(doc.$0);
         Docs.Sync(doc.$1);
        }
 };
 Docs.AfterRender=function(el)
 {
  var m;
  m=Runtime$1.GetOptional(el.Render);
  m!=null&&m.$==1?(m.$0(el.El),Runtime$1.SetOptional(el,"Render",null)):void 0;
 };
 Docs.DoSyncElement=function(el)
 {
  var parent,p,m;
  function ins(doc,pos)
  {
   var d,t;
   return doc!=null&&doc.$==1?doc.$0.El:doc!=null&&doc.$==2?(d=doc.$0,d.Dirty?(d.Dirty=false,Docs.InsertDoc(parent,d.Current,pos)):ins(d.Current,pos)):doc==null?pos:doc!=null&&doc.$==4?doc.$0.Text:doc!=null&&doc.$==5?doc.$0:doc!=null&&doc.$==6?(t=doc.$0,(t.Dirty?t.Dirty=false:void 0,Arrays.foldBack(function($1,$2)
   {
    return $1==null||$1.constructor===Object?ins($1,$2):$1;
   },t.Els,pos))):ins(doc.$0,ins(doc.$1,pos));
  }
  parent=el.El;
  DomNodes.Iter((p=el.El,function(e)
  {
   DomUtility.RemoveNode(p,e);
  }),DomNodes.Except(DomNodes.DocChildren(el),DomNodes.Children(el.El,Runtime$1.GetOptional(el.Delimiters))));
  ins(el.Children,(m=Runtime$1.GetOptional(el.Delimiters),m!=null&&m.$==1?m.$0[1]:null));
 };
 Docs.InsertBeforeDelim=function(afterDelim,doc)
 {
  var p,before;
  p=afterDelim.parentNode;
  before=self.document.createTextNode("");
  p.insertBefore(before,afterDelim);
  Docs.LinkPrevElement(afterDelim,doc);
  return before;
 };
 Docs.LinkPrevElement=function(el,children)
 {
  Docs.InsertDoc(el.parentNode,children,el);
 };
 Fresh.Int=function()
 {
  Fresh.set_counter(Fresh.counter()+1);
  return Fresh.counter();
 };
 Fresh.set_counter=function($1)
 {
  SC$6.$cctor();
  SC$6.counter=$1;
 };
 Fresh.counter=function()
 {
  SC$6.$cctor();
  return SC$6.counter;
 };
 Fresh.Id=function()
 {
  Fresh.set_counter(Fresh.counter()+1);
  return"uid"+Global.String(Fresh.counter());
 };
 AggregateException=WebSharper.AggregateException=Runtime$1.Class({},Error,AggregateException);
 AggregateException.New$3=Runtime$1.Ctor(function(innerExceptions)
 {
  AggregateException.New$4.call(this,"One or more errors occurred.",innerExceptions);
 },AggregateException);
 AggregateException.New$4=Runtime$1.Ctor(function(message,innerExceptions)
 {
  this.message=message;
  Object.setPrototypeOf(this,AggregateException.prototype);
  this.innerExceptions=innerExceptions;
 },AggregateException);
 Concurrency.Start=function(c,ctOpt)
 {
  var ct,d;
  ct=(d=(Concurrency.defCTS())[0],ctOpt==null?d:ctOpt.$0);
  Concurrency.scheduler().Fork(function()
  {
   if(!ct.c)
    c(AsyncBody.New(function(a)
    {
     if(a.$==1)
      Concurrency.UncaughtAsyncError(a.$0);
    },ct));
  });
 };
 Concurrency.Delay=function(mk)
 {
  return function(c)
  {
   try
   {
    (mk(null))(c);
   }
   catch(e)
   {
    c.k({
     $:1,
     $0:e
    });
   }
  };
 };
 Concurrency.Bind=function(r,f)
 {
  return Concurrency.checkCancel(function(c)
  {
   r(AsyncBody.New(function(a)
   {
    var x;
    if(a.$==0)
     {
      x=a.$0;
      Concurrency.scheduler().Fork(function()
      {
       try
       {
        (f(x))(c);
       }
       catch(e)
       {
        c.k({
         $:1,
         $0:e
        });
       }
      });
     }
    else
     Concurrency.scheduler().Fork(function()
     {
      c.k(a);
     });
   },c.ct));
  });
 };
 Concurrency.Sleep=function(ms)
 {
  return function(c)
  {
   var pending,creg;
   pending=void 0;
   creg=void 0;
   pending=Global.setTimeout(function()
   {
    creg.Dispose();
    Concurrency.scheduler().Fork(function()
    {
     c.k({
      $:0,
      $0:null
     });
    });
   },ms);
   creg=Concurrency.Register(c.ct,function()
   {
    Global.clearTimeout(pending);
    Concurrency.scheduler().Fork(function()
    {
     Concurrency.cancel(c);
    });
   });
  };
 };
 Concurrency.Zero=function()
 {
  SC$4.$cctor();
  return SC$4.Zero;
 };
 Concurrency.While=function(g,c)
 {
  return g()?Concurrency.Bind(c,function()
  {
   return Concurrency.While(g,c);
  }):Concurrency.Return();
 };
 Concurrency.defCTS=function()
 {
  SC$4.$cctor();
  return SC$4.defCTS;
 };
 Concurrency.UncaughtAsyncError=function(e)
 {
  console.log("WebSharper: Uncaught asynchronous exception",e);
 };
 Concurrency.checkCancel=function(r)
 {
  return function(c)
  {
   if(c.ct.c)
    Concurrency.cancel(c);
   else
    r(c);
  };
 };
 Concurrency.Register=function(ct,callback)
 {
  var i;
  return ct===Concurrency.noneCT()?{
   Dispose:function()
   {
    return null;
   }
  }:(i=ct.r.push(callback)-1,{
   Dispose:function()
   {
    return Arrays.set(ct.r,i,Global.ignore);
   }
  });
 };
 Concurrency.cancel=function(c)
 {
  c.k({
   $:2,
   $0:new OperationCanceledException.New(c.ct)
  });
 };
 Concurrency.Return=function(x)
 {
  return function(c)
  {
   c.k({
    $:0,
    $0:x
   });
  };
 };
 Concurrency.scheduler=function()
 {
  SC$4.$cctor();
  return SC$4.scheduler;
 };
 Concurrency.noneCT=function()
 {
  SC$4.$cctor();
  return SC$4.noneCT;
 };
 Concurrency.FromContinuations=function(subscribe)
 {
  return function(c)
  {
   var continued;
   function once(cont)
   {
    if(continued[0])
     Operators.FailWith("A continuation provided by Async.FromContinuations was invoked multiple times");
    else
     {
      continued[0]=true;
      Concurrency.scheduler().Fork(cont);
     }
   }
   continued=[false];
   subscribe(function(a)
   {
    once(function()
    {
     c.k({
      $:0,
      $0:a
     });
    });
   },function(e)
   {
    once(function()
    {
     c.k({
      $:1,
      $0:e
     });
    });
   },function(e)
   {
    once(function()
    {
     c.k({
      $:2,
      $0:e
     });
    });
   });
  };
 };
 DocElemNode=UI.DocElemNode=Runtime$1.Class({
  Equals:function(o)
  {
   return this.ElKey===o.ElKey;
  },
  GetHashCode:function()
  {
   return this.ElKey;
  }
 },null,DocElemNode);
 DocElemNode.New=function(Attr,Children,Delimiters,El,ElKey,Render)
 {
  var $1;
  return new DocElemNode(($1={
   Attr:Attr,
   Children:Children,
   El:El,
   ElKey:ElKey
  },(Runtime$1.SetOptional($1,"Delimiters",Delimiters),Runtime$1.SetOptional($1,"Render",Render),$1)));
 };
 CheckedInput=UI.CheckedInput=Runtime$1.Class({
  get_Input:function()
  {
   return this.$==1?this.$0:this.$==2?this.$0:this.$1;
  }
 },null,CheckedInput);
 DictionaryUtil.notPresent=function()
 {
  return Operators.FailWith("The given key was not present in the dictionary.");
 };
 DynamicAttrNode=UI.DynamicAttrNode=Runtime$1.Class({
  NChanged:function()
  {
   return this.updates;
  },
  NGetExitAnim:function(parent)
  {
   return An.get_Empty();
  },
  NGetEnterAnim:function(parent)
  {
   return An.get_Empty();
  },
  NGetChangeAnim:function(parent)
  {
   return An.get_Empty();
  },
  NSync:function(parent)
  {
   if(this.dirty)
    {
     (this.push(parent))(this.value);
     this.dirty=false;
    }
  }
 },Obj,DynamicAttrNode);
 DynamicAttrNode.New=Runtime$1.Ctor(function(view,push)
 {
  var $this;
  $this=this;
  Obj.New.call(this);
  this.push=push;
  this.value=void 0;
  this.dirty=false;
  this.updates=View.Map(function(x)
  {
   $this.value=x;
   $this.dirty=true;
  },view);
 },DynamicAttrNode);
 Storage.InMemory=function(init)
 {
  return new ArrayStorage.New(init);
 };
 Updates=UI.Updates=Runtime$1.Class({},null,Updates);
 Updates.Create=function(v)
 {
  var _var;
  _var=null;
  _var=Updates.New(v,null,function()
  {
   var c;
   c=_var.s;
   return c===null?(c=Snap.Copy(_var.c()),_var.s=c,Snap.WhenObsoleteRun(c,function()
   {
    _var.s=null;
   }),c):c;
  });
  return _var;
 };
 Updates.New=function(Current,Snap$1,VarView)
 {
  return new Updates({
   c:Current,
   s:Snap$1,
   v:VarView
  });
 };
 SC$2.$cctor=function()
 {
  SC$2.$cctor=Global.ignore;
  SC$2.Doc=self.document;
 };
 SC$3.$cctor=function()
 {
  SC$3.$cctor=Global.ignore;
  SC$3.LoadedTemplates=new Dictionary.New$5();
  SC$3.LocalTemplatesLoaded=false;
  SC$3.TextHoleRE="\\${([^}]+)}";
 };
 An.get_UseAnimations=function()
 {
  return Anims.UseAnimations();
 };
 An.Play=function(anim)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(An.Run(Global.ignore,Anims.Actions(anim)),function()
   {
    Anims.Finalize(anim);
    return Concurrency.Return(null);
   });
  });
 };
 An.Append=function(a,a$1)
 {
  return{
   $:0,
   $0:AppendList.Append(a.$0,a$1.$0)
  };
 };
 An.Run=function(k,anim)
 {
  var dur;
  function a(ok)
  {
   function loop(start,now)
   {
    var t;
    t=now-start;
    anim.Compute(t);
    k();
    return t<=dur?void Global.requestAnimationFrame(function(t$1)
    {
     loop(start,t$1);
    }):ok();
   }
   Global.requestAnimationFrame(function(t)
   {
    loop(t,t);
   });
  }
  dur=anim.Duration;
  return dur===0?Concurrency.Zero():Concurrency.FromContinuations(function($1,$2,$3)
  {
   return a.apply(null,[$1,$2,$3]);
  });
 };
 An.Concat=function(xs)
 {
  return{
   $:0,
   $0:AppendList.Concat(Seq.map(Anims.List,xs))
  };
 };
 An.get_Empty=function()
 {
  return{
   $:0,
   $0:AppendList.Empty()
  };
 };
 Settings.BatchUpdatesEnabled=function()
 {
  SC$7.$cctor();
  return SC$7.BatchUpdatesEnabled;
 };
 Mailbox.StartProcessor=function(procAsync)
 {
  var st;
  function work()
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(procAsync,function()
    {
     var m;
     m=st[0];
     return m===1?(st[0]=0,Concurrency.Zero()):m===2?(st[0]=1,work()):Concurrency.Zero();
    });
   });
  }
  st=[0];
  return function()
  {
   var m;
   m=st[0];
   m===0?(st[0]=1,Concurrency.Start(work(),null)):m===1?st[0]=2:void 0;
  };
 };
 Seq.nonNegative=function()
 {
  return Operators.FailWith("The input must be non-negative.");
 };
 Seq.insufficient=function()
 {
  return Operators.FailWith("The input sequence has an insufficient number of elements.");
 };
 CT.New=function(IsCancellationRequested,Registrations)
 {
  return{
   c:IsCancellationRequested,
   r:Registrations
  };
 };
 AsyncBody.New=function(k,ct)
 {
  return{
   k:k,
   ct:ct
  };
 };
 SC$4.$cctor=function()
 {
  SC$4.$cctor=Global.ignore;
  SC$4.noneCT=CT.New(false,[]);
  SC$4.scheduler=new Scheduler.New();
  SC$4.defCTS=[new CancellationTokenSource.New()];
  SC$4.Zero=Concurrency.Return();
  SC$4.GetCT=function(c)
  {
   c.k({
    $:0,
    $0:c.ct
   });
  };
 };
 Dyn.New=function(DynElem,DynFlags,DynNodes,OnAfterRender)
 {
  var $1;
  $1={
   DynElem:DynElem,
   DynFlags:DynFlags,
   DynNodes:DynNodes
  };
  Runtime$1.SetOptional($1,"OnAfterRender",OnAfterRender);
  return $1;
 };
 ArrayStorage=Storage.ArrayStorage=Runtime$1.Class({
  SSetAt:function(idx,elem,arr)
  {
   Arrays.set(arr,idx,elem);
   return arr;
  },
  SAppend:function(i,arr)
  {
   arr.push(i);
   return arr;
  }
 },Obj,ArrayStorage);
 ArrayStorage.New=Runtime$1.Ctor(function(init)
 {
  Obj.New.call(this);
  this.init=init;
 },ArrayStorage);
 SC$5.$cctor=function()
 {
  SC$5.$cctor=Global.ignore;
  SC$5.EmptyAttr=null;
 };
 SC$6.$cctor=function()
 {
  SC$6.$cctor=Global.ignore;
  SC$6.counter=0;
 };
 Prepare.convertTextNode=function(n)
 {
  var m,li,$1,s,strRE,hole;
  m=null;
  li=0;
  s=n.textContent;
  strRE=new Global.RegExp(Templates.TextHoleRE(),"g");
  while(m=strRE.exec(s),m!==null)
   {
    n.parentNode.insertBefore(self.document.createTextNode(Slice.string(s,{
     $:1,
     $0:li
    },{
     $:1,
     $0:strRE.lastIndex-Arrays.get(m,0).length-1
    })),n);
    li=strRE.lastIndex;
    hole=self.document.createElement("span");
    hole.setAttribute("ws-replace",Arrays.get(m,1).toLowerCase());
    n.parentNode.insertBefore(hole,n);
   }
  strRE.lastIndex=0;
  n.textContent=Slice.string(s,{
   $:1,
   $0:li
  },null);
 };
 Prepare.failNotLoaded=function(name)
 {
  console.warn("Instantiating non-loaded template",name);
 };
 Prepare.fillTextHole=function(instance,fillWith,templateName)
 {
  var m;
  m=instance.querySelector("[ws-replace]");
  return Unchecked.Equals(m,null)?(console.warn("Filling non-existent text hole",templateName),null):(m.parentNode.replaceChild(new Global.Text(fillWith),m),{
   $:1,
   $0:m.getAttribute("ws-replace")
  });
 };
 Prepare.removeHolesExcept=function(instance,dontRemove)
 {
  function run(attrName)
  {
   DomUtility.IterSelector(instance,"["+attrName+"]",function(e)
   {
    if(!dontRemove.Contains(e.getAttribute(attrName)))
     e.removeAttribute(attrName);
   });
  }
  run("ws-attr");
  run("ws-onafterrender");
  run("ws-var");
  DomUtility.IterSelector(instance,"[ws-hole]",function(e)
  {
   if(!dontRemove.Contains(e.getAttribute("ws-hole")))
    {
     e.removeAttribute("ws-hole");
     while(e.hasChildNodes())
      e.removeChild(e.lastChild);
    }
  });
  DomUtility.IterSelector(instance,"[ws-replace]",function(e)
  {
   if(!dontRemove.Contains(e.getAttribute("ws-replace")))
    e.parentNode.removeChild(e);
  });
  DomUtility.IterSelector(instance,"[ws-on]",function(e)
  {
   e.setAttribute("ws-on",Strings.concat(" ",Arrays.filter(function(x)
   {
    return dontRemove.Contains(Arrays.get(Strings.SplitChars(x,[":"],1),1));
   },Strings.SplitChars(e.getAttribute("ws-on"),[" "],1))));
  });
  DomUtility.IterSelector(instance,"[ws-attr-holes]",function(e)
  {
   var holeAttrs,i,$1,attrName,_this;
   holeAttrs=Strings.SplitChars(e.getAttribute("ws-attr-holes"),[" "],1);
   for(i=0,$1=holeAttrs.length-1;i<=$1;i++){
    attrName=Arrays.get(holeAttrs,i);
    e.setAttribute(attrName,(_this=new Global.RegExp(Templates.TextHoleRE(),"g"),e.getAttribute(attrName).replace(_this,function($2,$3)
    {
     return dontRemove.Contains($3)?$2:"";
    })));
   }
  });
 };
 Prepare.fillInstanceAttrs=function(instance,fillWith)
 {
  var name,m,i,$1,a;
  Prepare.convertAttrs(fillWith);
  name=fillWith.nodeName.toLowerCase();
  m=instance.querySelector("[ws-attr="+name+"]");
  if(Unchecked.Equals(m,null))
   console.warn("Filling non-existent attr hole",name);
  else
   {
    m.removeAttribute("ws-attr");
    for(i=0,$1=fillWith.attributes.length-1;i<=$1;i++){
     a=fillWith.attributes.item(i);
     a.name==="class"&&m.hasAttribute("class")?m.setAttribute("class",m.getAttribute("class")+" "+a.nodeValue):m.setAttribute(a.name,a.nodeValue);
    }
   }
 };
 Prepare.mapHoles=function(t,mappings)
 {
  function run(attrName)
  {
   DomUtility.IterSelector(t,"["+attrName+"]",function(e)
   {
    var m,o;
    m=(o=null,[mappings.TryGetValue(e.getAttribute(attrName).toLowerCase(),{
     get:function()
     {
      return o;
     },
     set:function(v)
     {
      o=v;
     }
    }),o]);
    m[0]?e.setAttribute(attrName,m[1]):void 0;
   });
  }
  run("ws-hole");
  run("ws-replace");
  run("ws-attr");
  run("ws-onafterrender");
  run("ws-var");
  DomUtility.IterSelector(t,"[ws-on]",function(e)
  {
   e.setAttribute("ws-on",Strings.concat(" ",Arrays.map(function(x)
   {
    var a,m,o;
    a=Strings.SplitChars(x,[":"],1);
    m=(o=null,[mappings.TryGetValue(Arrays.get(a,1),{
     get:function()
     {
      return o;
     },
     set:function(v)
     {
      o=v;
     }
    }),o]);
    return m[0]?Arrays.get(a,0)+":"+m[1]:x;
   },Strings.SplitChars(e.getAttribute("ws-on"),[" "],1))));
  });
  DomUtility.IterSelector(t,"[ws-attr-holes]",function(e)
  {
   var holeAttrs,i,$1;
   holeAttrs=Strings.SplitChars(e.getAttribute("ws-attr-holes"),[" "],1);
   for(i=0,$1=holeAttrs.length-1;i<=$1;i++)(function()
   {
    var attrName;
    function f(s,a)
    {
     var a$1;
     a$1=Operators.KeyValue(a);
     return s.replace(new Global.RegExp("\\${"+a$1[0]+"}","ig"),"${"+a$1[1]+"}");
    }
    attrName=Arrays.get(holeAttrs,i);
    return e.setAttribute(attrName,(((Runtime$1.Curried3(Seq.fold))(f))(e.getAttribute(attrName)))(mappings));
   }());
  });
 };
 Prepare.fill=function(fillWith,p,n)
 {
  while(true)
   if(fillWith.hasChildNodes())
    n=p.insertBefore(fillWith.lastChild,n);
   else
    return null;
 };
 Prepare.convertAttrs=function(el)
 {
  var attrs,toRemove,events,holedAttrs,i,$1,a,_this;
  function lowercaseAttr(name)
  {
   var m;
   m=el.getAttribute(name);
   m===null?void 0:el.setAttribute(name,m.toLowerCase());
  }
  attrs=el.attributes;
  toRemove=[];
  events=[];
  holedAttrs=[];
  for(i=0,$1=attrs.length-1;i<=$1;i++){
   a=attrs.item(i);
   Strings.StartsWith(a.nodeName,"ws-on")&&a.nodeName!=="ws-onafterrender"&&a.nodeName!=="ws-on"?(toRemove.push(a.nodeName),events.push(Slice.string(a.nodeName,{
    $:1,
    $0:"ws-on".length
   },null)+":"+a.nodeValue.toLowerCase())):!Strings.StartsWith(a.nodeName,"ws-")&&(new Global.RegExp(Templates.TextHoleRE())).test(a.nodeValue)?(a.nodeValue=(_this=new Global.RegExp(Templates.TextHoleRE(),"g"),a.nodeValue.replace(_this,function($2,$3)
   {
    return"${"+$3.toLowerCase()+"}";
   })),holedAttrs.push(a.nodeName)):void 0;
  }
  !(events.length==0)?el.setAttribute("ws-on",Strings.concat(" ",events)):void 0;
  !(holedAttrs.length==0)?el.setAttribute("ws-attr-holes",Strings.concat(" ",holedAttrs)):void 0;
  lowercaseAttr("ws-hole");
  lowercaseAttr("ws-replace");
  lowercaseAttr("ws-attr");
  lowercaseAttr("ws-onafterrender");
  lowercaseAttr("ws-var");
  Arrays.iter(function(a$1)
  {
   el.removeAttribute(a$1);
  },toRemove);
 };
 KeyCollection=Collections.KeyCollection=Runtime$1.Class({
  GetEnumerator$1:function()
  {
   return Enumerator.Get(Seq.map(function(kvp)
   {
    return kvp.K;
   },this.d));
  },
  GetEnumerator:function()
  {
   return this.GetEnumerator$1();
  },
  GetEnumerator0:function()
  {
   return this.GetEnumerator$1();
  }
 },Obj,KeyCollection);
 KeyCollection.New=Runtime$1.Ctor(function(d)
 {
  Obj.New.call(this);
  this.d=d;
 },KeyCollection);
 RunState.New=function(PreviousNodes,Top)
 {
  return{
   PreviousNodes:PreviousNodes,
   Top:Top
  };
 };
 NodeSet.get_Empty=function()
 {
  return{
   $:0,
   $0:new HashSet.New$3()
  };
 };
 NodeSet.FindAll=function(doc)
 {
  var q;
  function loop(node)
  {
   if(node!=null&&node.$==0)
    {
     loop(node.$0);
     loop(node.$1);
    }
   else
    if(node!=null&&node.$==1)
     loopEN(node.$0);
    else
     if(node!=null&&node.$==2)
      loop(node.$0.Current);
     else
      if(node!=null&&node.$==6)
       Arrays.iter(loopEN,node.$0.Holes);
  }
  function loopEN(el)
  {
   q.push(el);
   loop(el.Children);
  }
  q=[];
  loop(doc);
  return{
   $:0,
   $0:new HashSet.New$2(q)
  };
 };
 NodeSet.Filter=function(f,a)
 {
  return{
   $:0,
   $0:HashSet$1.Filter(f,a.$0)
  };
 };
 NodeSet.Except=function(a,a$1)
 {
  return{
   $:0,
   $0:HashSet$1.Except(a.$0,a$1.$0)
  };
 };
 NodeSet.ToArray=function(a)
 {
  return HashSet$1.ToArray(a.$0);
 };
 NodeSet.Intersect=function(a,a$1)
 {
  return{
   $:0,
   $0:HashSet$1.Intersect(a.$0,a$1.$0)
  };
 };
 Anims.UseAnimations=function()
 {
  SC$8.$cctor();
  return SC$8.UseAnimations;
 };
 Anims.Actions=function(a)
 {
  return Anims.ConcatActions(Arrays.choose(function(a$1)
  {
   return a$1.$==1?{
    $:1,
    $0:a$1.$0
   }:null;
  },AppendList.ToArray(a.$0)));
 };
 Anims.Finalize=function(a)
 {
  Arrays.iter(function(a$1)
  {
   if(a$1.$==0)
    a$1.$0();
  },AppendList.ToArray(a.$0));
 };
 Anims.ConcatActions=function(xs)
 {
  var xs$1,m,dur,xs$2;
  xs$1=Array.ofSeqNonCopying(xs);
  m=Arrays.length(xs$1);
  return m===0?Anims.Const():m===1?Arrays.get(xs$1,0):(dur=Seq.max(Seq.map(function(anim)
  {
   return anim.Duration;
  },xs$1)),(xs$2=Arrays.map(function(a)
  {
   return Anims.Prolong(dur,a);
  },xs$1),Anims.Def(dur,function(t)
  {
   Arrays.iter(function(anim)
   {
    anim.Compute(t);
   },xs$2);
  })));
 };
 Anims.List=function(a)
 {
  return a.$0;
 };
 Anims.Const=function(v)
 {
  return Anims.Def(0,function()
  {
   return v;
  });
 };
 Anims.Def=function(d,f)
 {
  return{
   Compute:f,
   Duration:d
  };
 };
 Anims.Prolong=function(nextDuration,anim)
 {
  var comp,dur,last;
  comp=anim.Compute;
  dur=anim.Duration;
  last=Lazy.Create(function()
  {
   return anim.Compute(anim.Duration);
  });
  return{
   Compute:function(t)
   {
    return t>=dur?last.f():comp(t);
   },
   Duration:nextDuration
  };
 };
 SC$7.$cctor=function()
 {
  SC$7.$cctor=Global.ignore;
  SC$7.BatchUpdatesEnabled=true;
 };
 Scheduler=Concurrency.Scheduler=Runtime$1.Class({
  Fork:function(action)
  {
   var $this;
   $this=this;
   this.robin.push(action);
   this.idle?(this.idle=false,Global.setTimeout(function()
   {
    $this.tick();
   },0)):void 0;
  },
  tick:function()
  {
   var loop,$this,t;
   $this=this;
   t=Date.now();
   loop=true;
   while(loop)
    if(this.robin.length===0)
     {
      this.idle=true;
      loop=false;
     }
    else
     {
      (this.robin.shift())();
      Date.now()-t>40?(Global.setTimeout(function()
      {
       $this.tick();
      },0),loop=false):void 0;
     }
  }
 },Obj,Scheduler);
 Scheduler.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
  this.idle=true;
  this.robin=[];
 },Scheduler);
 OperationCanceledException=WebSharper.OperationCanceledException=Runtime$1.Class({},Error,OperationCanceledException);
 OperationCanceledException.New=Runtime$1.Ctor(function(ct)
 {
  OperationCanceledException.New$1.call(this,"The operation was canceled.",null,ct);
 },OperationCanceledException);
 OperationCanceledException.New$1=Runtime$1.Ctor(function(message,inner,ct)
 {
  this.message=message;
  this.inner=inner;
  Object.setPrototypeOf(this,OperationCanceledException.prototype);
  this.ct=ct;
 },OperationCanceledException);
 HashSetUtil.concat=function(o)
 {
  var r,k;
  r=[];
  for(var k$1 in o)r.push.apply(r,o[k$1]);
  return r;
 };
 FormatException=WebSharper.FormatException=Runtime$1.Class({},Error,FormatException);
 FormatException.New$1=Runtime$1.Ctor(function(message)
 {
  this.message=message;
  Object.setPrototypeOf(this,FormatException.prototype);
 },FormatException);
 Queue.Clear=function(a)
 {
  a.splice(0,Arrays.length(a));
 };
 SC$8.$cctor=function()
 {
  SC$8.$cctor=Global.ignore;
  SC$8.CubicInOut=Easing.Custom(function(t)
  {
   var t2;
   t2=t*t;
   return 3*t2-2*(t2*t);
  });
  SC$8.UseAnimations=true;
 };
 AppendList.Append=function(x,y)
 {
  return x.$==0?y:y.$==0?x:{
   $:2,
   $0:x,
   $1:y
  };
 };
 AppendList.ToArray=function(xs)
 {
  var out;
  function loop(xs$1)
  {
   if(xs$1.$==1)
    out.push(xs$1.$0);
   else
    if(xs$1.$==2)
     {
      loop(xs$1.$0);
      loop(xs$1.$1);
     }
    else
     if(xs$1.$==3)
      Arrays.iter(function(v)
      {
       out.push(v);
      },xs$1.$0);
  }
  out=[];
  loop(xs);
  return out.slice(0);
 };
 AppendList.Concat=function(xs)
 {
  var x;
  x=Array.ofSeqNonCopying(xs);
  return Array.TreeReduce(AppendList.Empty(),AppendList.Append,x);
 };
 AppendList.Empty=function()
 {
  SC$9.$cctor();
  return SC$9.Empty;
 };
 Easing=UI.Easing=Runtime$1.Class({},Obj,Easing);
 Easing.Custom=function(f)
 {
  return new Easing.New(f);
 };
 Easing.New=Runtime$1.Ctor(function(transformTime)
 {
  Obj.New.call(this);
  this.transformTime=transformTime;
 },Easing);
 HashSet$1.Filter=function(ok,set)
 {
  return new HashSet.New$2(Arrays.filter(ok,HashSet$1.ToArray(set)));
 };
 HashSet$1.Except=function(excluded,included)
 {
  var set;
  set=new HashSet.New$2(HashSet$1.ToArray(included));
  set.ExceptWith(HashSet$1.ToArray(excluded));
  return set;
 };
 HashSet$1.ToArray=function(set)
 {
  var arr;
  arr=Arrays.create(set.get_Count(),void 0);
  set.CopyTo(arr);
  return arr;
 };
 HashSet$1.Intersect=function(a,b)
 {
  var set;
  set=new HashSet.New$2(HashSet$1.ToArray(a));
  set.IntersectWith(HashSet$1.ToArray(b));
  return set;
 };
 DomNodes.Children=function(elem,delims)
 {
  var n,o,a;
  if(delims!=null&&delims.$==1)
   {
    a=[];
    n=delims.$0[0].nextSibling;
    while(n!==delims.$0[1])
     {
      a.push(n);
      n=n.nextSibling;
     }
    return{
     $:0,
     $0:a
    };
   }
  else
   return{
    $:0,
    $0:Arrays.init(elem.childNodes.length,(o=elem.childNodes,function(a$1)
    {
     return o[a$1];
    }))
   };
 };
 DomNodes.Except=function(a,a$1)
 {
  var excluded;
  excluded=a.$0;
  return{
   $:0,
   $0:Arrays.filter(function(n)
   {
    return Arrays.forall(function(k)
    {
     return!(n===k);
    },excluded);
   },a$1.$0)
  };
 };
 DomNodes.Iter=function(f,a)
 {
  Arrays.iter(f,a.$0);
 };
 DomNodes.DocChildren=function(node)
 {
  var q;
  function loop(doc)
  {
   if(doc!=null&&doc.$==2)
    loop(doc.$0.Current);
   else
    if(doc!=null&&doc.$==1)
     q.push(doc.$0.El);
    else
     if(doc==null)
      ;
     else
      if(doc!=null&&doc.$==5)
       q.push(doc.$0);
      else
       if(doc!=null&&doc.$==4)
        q.push(doc.$0.Text);
       else
        if(doc!=null&&doc.$==6)
         Arrays.iter(function(a)
         {
          if(a==null||a.constructor===Object)
           loop(a);
          else
           q.push(a);
         },doc.$0.Els);
        else
         {
          loop(doc.$0);
          loop(doc.$1);
         }
  }
  q=[];
  loop(node.Children);
  return{
   $:0,
   $0:Array.ofSeqNonCopying(q)
  };
 };
 String$1.isBlank=function(s)
 {
  return Strings.forall(Char.IsWhiteSpace,s);
 };
 SC$9.$cctor=function()
 {
  SC$9.$cctor=Global.ignore;
  SC$9.Empty={
   $:0
  };
 };
 Char.IsWhiteSpace=function(c)
 {
  return c.match(new Global.RegExp("\\s"))!==null;
 };
 Runtime$1.OnLoad(function()
 {
  Test.main();
 });
}());


if (typeof IntelliFactory !=='undefined') {
  IntelliFactory.Runtime.ScriptBasePath = '/Content/';
  IntelliFactory.Runtime.Start();
}

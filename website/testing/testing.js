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
 var Global,FsRootDll,TestingJS,SnippetTemplates,AppFrameworkUI,SC$1,WebSharper,Operators,LibraryJS,StartAppFramework,Library,Monads,Depend,List,AppFrameworkTemplate,SC$2,Seq,T,Arrays,Obj,State,CEBuilder,Result,Builder,DependBuilder,String,Strings,Slice,ParseO,Unchecked,Numeric,System,Guid,Lazy,WebComponent,WcTabStrip,WcTabStripT,UI,Doc,ListModel,AppFramework,PlugIn,Var$1,PlugInName,Var,View,Templating,Runtime,Server,TemplateInstance,ProviderBuilder,Handler,LayoutEngine_Templates,GeneratedPrintf,LayoutEngine_GeneratedPrintf,PlugInBuilder,Val,Extract0,Utils,Operators$1,AAttr,JavaScript,Pervasives,PlugInAction,EventTarget,Node,AttrProxy,AttrModule,Collections,FSharpSet,HtmlModule,attr,PlugInDoc,View$1,WindowOrWorkerGlobalScope,JS,PlgElemName,Input,Mouse,Keyboard,WcSplitter,LM,AppFrameworkUI$1,ListModelData,PlugInVar,PlugInView,LayoutEngineModule,NewLY,P,Enumerator,DateUtil,LazyExtensionsProxy,LazyRecord,PlugInQuery,ConcreteVar,Snap,Dictionary,FromView,List$1,HashSet,Client,Array,Object,T$1,Attrs,BalancedTree,Set,Docs,Event,UIEvent,MousePosSt,MouseBtnSt,KeyListenerSt,WcSplitterT,Client$1,Templates,ListModel$1,ViewBuilder,Fun,Abbrev,Fresh,Syntax,TemplateDef,DomUtility,Hoverable,Hoverable$1,CancellationTokenSource,Storage,CheckedInput,DictionaryUtil,SC$3,DynamicAttrNode,Tree,DocElemNode,SC$4,ResizeObserver,Elt,Error,AggregateException,Concurrency,CharacterData,ArrayStorage,Attrs$1,Dyn,SC$5,SC$6,LayoutEngine,FormatException,Updates,SC$7,An,Settings,Mailbox,CT,AsyncBody,SC$8,Prepare,KeyCollection,HashSetUtil,Docs$1,RunState,NodeSet,Anims,SC$9,Scheduler,OperationCanceledException,Queue,Result$1,FSharpMap,RefType,SC$10,AppendList,String$1,Layout,Easing,HashSet$1,Char,MapUtil,Measures,Pair,DomNodes,MatchFailureException,SC$11,Math,IntelliFactory,Runtime$1,console,Date,Reflect,$;
 Global=self;
 FsRootDll=Global.FsRootDll=Global.FsRootDll||{};
 TestingJS=FsRootDll.TestingJS=FsRootDll.TestingJS||{};
 SnippetTemplates=TestingJS.SnippetTemplates=TestingJS.SnippetTemplates||{};
 AppFrameworkUI=TestingJS.AppFrameworkUI=TestingJS.AppFrameworkUI||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 Operators=WebSharper.Operators=WebSharper.Operators||{};
 LibraryJS=FsRootDll.LibraryJS=FsRootDll.LibraryJS||{};
 StartAppFramework=LibraryJS.StartAppFramework=LibraryJS.StartAppFramework||{};
 Library=FsRootDll.Library=FsRootDll.Library||{};
 Monads=Library.Monads=Library.Monads||{};
 Depend=Monads.Depend=Monads.Depend||{};
 List=WebSharper.List=WebSharper.List||{};
 AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate||{};
 SC$2=Global.StartupCode$LayoutEngine$LayoutEngine=Global.StartupCode$LayoutEngine$LayoutEngine||{};
 Seq=WebSharper.Seq=WebSharper.Seq||{};
 T=List.T=List.T||{};
 Arrays=WebSharper.Arrays=WebSharper.Arrays||{};
 Obj=WebSharper.Obj=WebSharper.Obj||{};
 State=Monads.State=Monads.State||{};
 CEBuilder=State.CEBuilder=State.CEBuilder||{};
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 DependBuilder=Depend.DependBuilder=Depend.DependBuilder||{};
 String=Library.String=Library.String||{};
 Strings=WebSharper.Strings=WebSharper.Strings||{};
 Slice=WebSharper.Slice=WebSharper.Slice||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 Unchecked=WebSharper.Unchecked=WebSharper.Unchecked||{};
 Numeric=WebSharper.Numeric=WebSharper.Numeric||{};
 System=Global.System=Global.System||{};
 Guid=System.Guid=System.Guid||{};
 Lazy=WebSharper.Lazy=WebSharper.Lazy||{};
 WebComponent=LibraryJS.WebComponent=LibraryJS.WebComponent||{};
 WcTabStrip=WebComponent.WcTabStrip=WebComponent.WcTabStrip||{};
 WcTabStripT=WcTabStrip.WcTabStripT=WcTabStrip.WcTabStripT||{};
 UI=WebSharper.UI=WebSharper.UI||{};
 Doc=UI.Doc=UI.Doc||{};
 ListModel=UI.ListModel=UI.ListModel||{};
 AppFramework=LibraryJS.AppFramework=LibraryJS.AppFramework||{};
 PlugIn=AppFramework.PlugIn=AppFramework.PlugIn||{};
 Var$1=UI.Var$1=UI.Var$1||{};
 PlugInName=AppFramework.PlugInName=AppFramework.PlugInName||{};
 Var=UI.Var=UI.Var||{};
 View=UI.View=UI.View||{};
 Templating=UI.Templating=UI.Templating||{};
 Runtime=Templating.Runtime=Templating.Runtime||{};
 Server=Runtime.Server=Runtime.Server||{};
 TemplateInstance=Server.TemplateInstance=Server.TemplateInstance||{};
 ProviderBuilder=Server.ProviderBuilder=Server.ProviderBuilder||{};
 Handler=Server.Handler=Server.Handler||{};
 LayoutEngine_Templates=Global.LayoutEngine_Templates=Global.LayoutEngine_Templates||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 LayoutEngine_GeneratedPrintf=Global.LayoutEngine_GeneratedPrintf=Global.LayoutEngine_GeneratedPrintf||{};
 PlugInBuilder=AppFramework.PlugInBuilder=AppFramework.PlugInBuilder||{};
 Val=AppFramework.Val=AppFramework.Val||{};
 Extract0=AppFramework.Extract0=AppFramework.Extract0||{};
 Utils=WebSharper.Utils=WebSharper.Utils||{};
 Operators$1=Depend.Operators=Depend.Operators||{};
 AAttr=AppFramework.AAttr=AppFramework.AAttr||{};
 JavaScript=WebSharper.JavaScript=WebSharper.JavaScript||{};
 Pervasives=JavaScript.Pervasives=JavaScript.Pervasives||{};
 PlugInAction=AppFramework.PlugInAction=AppFramework.PlugInAction||{};
 EventTarget=Global.EventTarget;
 Node=Global.Node;
 AttrProxy=UI.AttrProxy=UI.AttrProxy||{};
 AttrModule=UI.AttrModule=UI.AttrModule||{};
 Collections=WebSharper.Collections=WebSharper.Collections||{};
 FSharpSet=Collections.FSharpSet=Collections.FSharpSet||{};
 HtmlModule=UI.HtmlModule=UI.HtmlModule||{};
 attr=HtmlModule.attr=HtmlModule.attr||{};
 PlugInDoc=AppFramework.PlugInDoc=AppFramework.PlugInDoc||{};
 View$1=LibraryJS.View=LibraryJS.View||{};
 WindowOrWorkerGlobalScope=Global.WindowOrWorkerGlobalScope;
 JS=JavaScript.JS=JavaScript.JS||{};
 PlgElemName=AppFramework.PlgElemName=AppFramework.PlgElemName||{};
 Input=UI.Input=UI.Input||{};
 Mouse=Input.Mouse=Input.Mouse||{};
 Keyboard=Input.Keyboard=Input.Keyboard||{};
 WcSplitter=WebComponent.WcSplitter=WebComponent.WcSplitter||{};
 LM=LibraryJS.LM=LibraryJS.LM||{};
 AppFrameworkUI$1=LibraryJS.AppFrameworkUI=LibraryJS.AppFrameworkUI||{};
 ListModelData=AppFramework.ListModelData=AppFramework.ListModelData||{};
 PlugInVar=AppFramework.PlugInVar=AppFramework.PlugInVar||{};
 PlugInView=AppFramework.PlugInView=AppFramework.PlugInView||{};
 LayoutEngineModule=LibraryJS.LayoutEngineModule=LibraryJS.LayoutEngineModule||{};
 NewLY=LibraryJS.NewLY=LibraryJS.NewLY||{};
 P=AppFramework.P=AppFramework.P||{};
 Enumerator=WebSharper.Enumerator=WebSharper.Enumerator||{};
 DateUtil=WebSharper.DateUtil=WebSharper.DateUtil||{};
 LazyExtensionsProxy=WebSharper.LazyExtensionsProxy=WebSharper.LazyExtensionsProxy||{};
 LazyRecord=LazyExtensionsProxy.LazyRecord=LazyExtensionsProxy.LazyRecord||{};
 PlugInQuery=AppFramework.PlugInQuery=AppFramework.PlugInQuery||{};
 ConcreteVar=UI.ConcreteVar=UI.ConcreteVar||{};
 Snap=UI.Snap=UI.Snap||{};
 Dictionary=Collections.Dictionary=Collections.Dictionary||{};
 FromView=UI.FromView=UI.FromView||{};
 List$1=Collections.List=Collections.List||{};
 HashSet=Collections.HashSet=Collections.HashSet||{};
 Client=Runtime.Client=Runtime.Client||{};
 Array=UI.Array=UI.Array||{};
 Object=Global.Object;
 T$1=Enumerator.T=Enumerator.T||{};
 Attrs=UI.Attrs=UI.Attrs||{};
 BalancedTree=Collections.BalancedTree=Collections.BalancedTree||{};
 Set=Collections.Set=Collections.Set||{};
 Docs=UI.Docs=UI.Docs||{};
 Event=Global.Event;
 UIEvent=Global.UIEvent;
 MousePosSt=Input.MousePosSt=Input.MousePosSt||{};
 MouseBtnSt=Input.MouseBtnSt=Input.MouseBtnSt||{};
 KeyListenerSt=Input.KeyListenerSt=Input.KeyListenerSt||{};
 WcSplitterT=WcSplitter.WcSplitterT=WcSplitter.WcSplitterT||{};
 Client$1=UI.Client=UI.Client||{};
 Templates=Client$1.Templates=Client$1.Templates||{};
 ListModel$1=LibraryJS.ListModel=LibraryJS.ListModel||{};
 ViewBuilder=UI.ViewBuilder=UI.ViewBuilder||{};
 Fun=AppFramework.Fun=AppFramework.Fun||{};
 Abbrev=UI.Abbrev=UI.Abbrev||{};
 Fresh=Abbrev.Fresh=Abbrev.Fresh||{};
 Syntax=LayoutEngineModule.Syntax=LayoutEngineModule.Syntax||{};
 TemplateDef=Syntax.TemplateDef=Syntax.TemplateDef||{};
 DomUtility=UI.DomUtility=UI.DomUtility||{};
 Hoverable=LibraryJS.Hoverable=LibraryJS.Hoverable||{};
 Hoverable$1=Hoverable.Hoverable=Hoverable.Hoverable||{};
 CancellationTokenSource=WebSharper.CancellationTokenSource=WebSharper.CancellationTokenSource||{};
 Storage=UI.Storage=UI.Storage||{};
 CheckedInput=UI.CheckedInput=UI.CheckedInput||{};
 DictionaryUtil=Collections.DictionaryUtil=Collections.DictionaryUtil||{};
 SC$3=Global.StartupCode$WebSharper_UI$Attr_Client=Global.StartupCode$WebSharper_UI$Attr_Client||{};
 DynamicAttrNode=UI.DynamicAttrNode=UI.DynamicAttrNode||{};
 Tree=BalancedTree.Tree=BalancedTree.Tree||{};
 DocElemNode=UI.DocElemNode=UI.DocElemNode||{};
 SC$4=Global.StartupCode$WebSharper_UI$Input=Global.StartupCode$WebSharper_UI$Input||{};
 ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};
 Elt=UI.Elt=UI.Elt||{};
 Error=Global.Error;
 AggregateException=WebSharper.AggregateException=WebSharper.AggregateException||{};
 Concurrency=WebSharper.Concurrency=WebSharper.Concurrency||{};
 CharacterData=Global.CharacterData;
 ArrayStorage=Storage.ArrayStorage=Storage.ArrayStorage||{};
 Attrs$1=Client$1.Attrs=Client$1.Attrs||{};
 Dyn=Attrs$1.Dyn=Attrs$1.Dyn||{};
 SC$5=Global.StartupCode$WebSharper_UI$Templates=Global.StartupCode$WebSharper_UI$Templates||{};
 SC$6=Global.StartupCode$WebSharper_UI$Abbrev=Global.StartupCode$WebSharper_UI$Abbrev||{};
 LayoutEngine=LibraryJS.LayoutEngine=LibraryJS.LayoutEngine||{};
 FormatException=WebSharper.FormatException=WebSharper.FormatException||{};
 Updates=UI.Updates=UI.Updates||{};
 SC$7=Global.StartupCode$WebSharper_UI$DomUtility=Global.StartupCode$WebSharper_UI$DomUtility||{};
 An=UI.An=UI.An||{};
 Settings=Client$1.Settings=Client$1.Settings||{};
 Mailbox=Abbrev.Mailbox=Abbrev.Mailbox||{};
 CT=Concurrency.CT=Concurrency.CT||{};
 AsyncBody=Concurrency.AsyncBody=Concurrency.AsyncBody||{};
 SC$8=Global.StartupCode$WebSharper_Main$Concurrency=Global.StartupCode$WebSharper_Main$Concurrency||{};
 Prepare=Templates.Prepare=Templates.Prepare||{};
 KeyCollection=Collections.KeyCollection=Collections.KeyCollection||{};
 HashSetUtil=Collections.HashSetUtil=Collections.HashSetUtil||{};
 Docs$1=Client$1.Docs=Client$1.Docs||{};
 RunState=Docs$1.RunState=Docs$1.RunState||{};
 NodeSet=Docs$1.NodeSet=Docs$1.NodeSet||{};
 Anims=UI.Anims=UI.Anims||{};
 SC$9=Global.StartupCode$WebSharper_UI$Doc_Proxy=Global.StartupCode$WebSharper_UI$Doc_Proxy||{};
 Scheduler=Concurrency.Scheduler=Concurrency.Scheduler||{};
 OperationCanceledException=WebSharper.OperationCanceledException=WebSharper.OperationCanceledException||{};
 Queue=WebSharper.Queue=WebSharper.Queue||{};
 Result$1=WebSharper.Result=WebSharper.Result||{};
 FSharpMap=Collections.FSharpMap=Collections.FSharpMap||{};
 RefType=Syntax.RefType=Syntax.RefType||{};
 SC$10=Global.StartupCode$WebSharper_UI$Animation=Global.StartupCode$WebSharper_UI$Animation||{};
 AppendList=UI.AppendList=UI.AppendList||{};
 String$1=UI.String=UI.String||{};
 Layout=LayoutEngineModule.Layout=LayoutEngineModule.Layout||{};
 Easing=UI.Easing=UI.Easing||{};
 HashSet$1=Abbrev.HashSet=Abbrev.HashSet||{};
 Char=WebSharper.Char=WebSharper.Char||{};
 MapUtil=Collections.MapUtil=Collections.MapUtil||{};
 Measures=LayoutEngineModule.Measures=LayoutEngineModule.Measures||{};
 Pair=Collections.Pair=Collections.Pair||{};
 DomNodes=Docs$1.DomNodes=Docs$1.DomNodes||{};
 MatchFailureException=WebSharper.MatchFailureException=WebSharper.MatchFailureException||{};
 SC$11=Global.StartupCode$WebSharper_UI$AppendList=Global.StartupCode$WebSharper_UI$AppendList||{};
 Math=Global.Math;
 IntelliFactory=Global.IntelliFactory;
 Runtime$1=IntelliFactory&&IntelliFactory.Runtime;
 console=Global.console;
 Date=Global.Date;
 Reflect=Global.Reflect;
 $=Global.jQuery;
 SnippetTemplates.html=function()
 {
  SC$1.$cctor();
  return SC$1.html$1;
 };
 AppFrameworkUI.main=function()
 {
  var x;
  x=StartAppFramework.startWithHtmlD();
  (Depend.resolver(List.ofArray([["AppFrameworkTemplate.html",AppFrameworkTemplate.html$1()+SnippetTemplates.html()]]),x))();
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.html="\r\n            <div style=\"display:none\" >\r\n                <div links>\r\n                    <link  href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" type=\"text/css\" rel=\"stylesheet\">\r\n                    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"   type=\"text/javascript\"></script>\r\n                </div>\r\n                <div ws-template=\"AppFramework\" style=\"height: calc(100vh - 4px); width: calc(100vw - 4px) \" class=\"relative\" >\r\n                    <div ws-hole=\"MainClient\"></div>\r\n                    <div class=\"AppFrameworkGo\"><button ws-onclick=\"GoClient\">${MainDoc}</button></div>\r\n                </div>\r\n                <div ws-template=\"VSplitter1\" class=\"versplitter\" ws-attr=\"Attrs\" vertical>\r\n                    <div style=\"min-width :Calc((100% - ${gap}) *        ${perc}  / 100);max-width :Calc((100% - ${gap}) *        ${perc}  / 100)\">${doc1}</div>\r\n                    <div style=\"min-width :             ${gap}\" ws-onmousedown=\"MouseDown\" ></div>\r\n                    <div style=\"min-width :Calc((100% - ${gap}) * (100 - ${perc}) / 100);max-width :Calc((100% - ${gap}) * (100 - ${perc}) / 100)\">${doc2}</div>\r\n                </div>\r\n                <div ws-template=\"HSplitter1\" class=\"horsplitter\" ws-attr=\"Attrs\">\r\n                    <div style=\"min-height:Calc((100% - ${gap}) *        ${perc}  / 100);max-height:Calc((100% - ${gap}) *        ${perc}  / 100)\">${doc1}</div>\r\n                    <div style=\"min-height:             ${gap}\" ws-onmousedown=\"MouseDown\" ></div>\r\n                    <div style=\"min-height:Calc((100% - ${gap}) * (100 - ${perc}) / 100);max-height:Calc((100% - ${gap}) * (100 - ${perc}) / 100)\">${doc2}</div>\r\n                </div>\r\n                <style>\r\n                    .horsplitter                    { display: flex; flex-direction:column              } \r\n                    .horsplitter > div:nth-child(2) { background: #eef; cursor: row-resize; z-index:400 }\r\n                    .horsplitter > div              { overflow: hidden                                  }\r\n                    .versplitter                    { display: flex; flex-direction:row                 } \r\n                    .versplitter > div:nth-child(2) { background: #eef; cursor: col-resize; z-index:400 }\r\n                    .versplitter > div              { overflow: hidden                                  }\r\n                </style>\r\n                <style>\r\n                    .AppFrameworkGo {\r\n                        max-width: 2px;\r\n                        max-height: 2px;\r\n                        z-index: 4000;\r\n                        overflow: hidden;\r\n                        position: fixed;\r\n                        top: 0px;\r\n                        left: 0px;\r\n                    }\r\n                </style>\r\n                <div ws-template=\"FixedSplitterVer\" \r\n                    style=\"display: grid; \r\n                           grid-gap: 0px; \r\n                           box-sizing: border-box; \r\n                           height: 100%;\r\n                           width : 100%;\r\n                           grid-template-areas: 'one two'; \r\n                           grid-template-rows   :100%; \r\n                           overflow: hidden; \r\n                           grid-template-columns: ${PartSizes}\"  >\r\n                   <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n                   <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"FixedSplitterHor\" \r\n               style=\"display: grid; \r\n                      grid-gap: 0px; \r\n                      box-sizing: border-box; \r\n                      height: 100%;\r\n                      width : 100%;\r\n                      grid-template-areas: 'one' 'two'; \r\n                      grid-template-columns:100%; \r\n                      overflow: hidden; \r\n                      grid-template-rows   : ${PartSizes}\"  >\r\n              <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n              <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"WCompSplitterHor\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid;\r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one' 'two'; \r\n                            grid-template-columns:100%; \r\n                            overflow: hidden; \r\n                            grid-template-rows   : ${PartSizes}\" \r\n                     >\r\n                     <slot></slot>\r\n                    <slot name=\"splitter\">  <div style=\"grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-row:2; grid-column:1 / 1 ; \r\n                            cursor: row-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            height: ${Gap}; \r\n                            margin-top :-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>        \r\n                <div ws-template=\"WCompSplitterVer\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid; \r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one two'; \r\n                            grid-template-rows   :100%; \r\n                            overflow: hidden; \r\n                            grid-template-columns: ${PartSizes}\"  >\r\n                    <slot></slot>\r\n                    <slot name=\"splitter\"> <div style=\"grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-column:2; grid-row:1 / 1\r\n                            cursor: column-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            width: ${Gap}; \r\n                            margin-left:-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>\r\n                <div ws-template=\"AppFwkClient\" >\r\n                    <ws-FixedSplitterHor>\r\n                        <PartSizes>55px calc(100% - 55px)</PartSizes>\r\n                        <First>\r\n                            <span style=\"display: grid;\r\n                                  grid-template-columns: 30% 20% 20% 10%;\r\n                                  grid-gap: 25px;\r\n                                \">\r\n                                <div class=\"mainTitle\">AppFramework</div>\r\n                            </span>\r\n                        </First>\r\n                        <Second>\r\n                                <ws-FixedSplitterVer>\r\n                                    <PartSizes>calc(100% - 2px) 2px</PartSizes>\r\n                                    <First>\r\n                                        <wcomp-splitter vertical value=\"18\" max=\"100\">\r\n                                            <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\" >\r\n                                                <div ws-template=\"Tile\">\r\n                                                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                                                    ws-ondrag=\"Drag\"\r\n                                                    ws-ondragover=\"DragOver\"\r\n                                                    ws-ondrop=\"Drop\"\r\n                                                   >\r\n                                                   <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                                                   <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                                                   <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                                               </div>\r\n                                       \r\n                                                </div>\r\n                                            </div></div>\r\n                                            <wcomp-splitter vertical value=\"80\" min=\"30\" max=\"100\">\r\n                                                <ws-FixedSplitterHor>\r\n                                                    <PartSizes>32px calc(100% - 32px)</PartSizes>\r\n                                                    <First>\r\n                                                        <div>\r\n                                                            <div class=\"input-group\">\r\n                                                                <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </First>\r\n                                                    <Second>\r\n                                                        <div style=\"overflow:auto; display:flex; flex-direction:column\">\r\n                                                            <div>\r\n                                                                <h3>Vars:</h3>\r\n                                                                <table style=\"overflow:auto;width:100%\" class=\"table table-condensed table-striped\">\r\n                                                                    <thead>\r\n                                                                        <th style=\"width: 10%  \">Name</th>\r\n                                                                        <th style=\"width: 90% \">Value</th>\r\n                                                                    </thead>\r\n                                                                    <tbody ws-hole=\"Vars\">\r\n                                                                    <tr ws-template=\"NameValueInput\" >\r\n                                                                        <td >${Name}:</td>\r\n                                                                        <td>\r\n                                                                        <textarea placeholder=\"Value...\" ws-var=\"Value\" style=\"resize:vertical; width:100%\" spellcheck=\"false\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <h3>Views:</h3>\r\n                                                                <table style=\"overflow:auto\" class=\"table table-condensed table-striped\" >\r\n                                                                    <thead>\r\n                                                                        <th style=\"width: 10%  \">Name</th>\r\n                                                                        <th style=\"width: 90% \">Value</th>\r\n                                                                    </thead>\r\n                                                                    <tbody ws-hole=\"Views\" >\r\n                                                                    <tr ws-template=\"NameValue\" class=\"\">\r\n                                                                        <td>${Name}:</td>\r\n                                                                        <td>${Value}</td>\r\n                                                                    </tr>\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <h3>Docs:</h3>\r\n                                                                <div ws-hole=\"Docs\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <h3>Queries:</h3>\r\n                                                                <table style=\"overflow:auto\" >\r\n                                                                    <tbody ws-hole=\"Queries\" >\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </Second>\r\n                                                </ws-FixedSplitterHor>\r\n                                        <div style=\"font-size:small; overflow: hidden; display: flex; flex-direction: column;\"  class=\"absolute\" ws-hole=\"Actions\" >\r\n                                            <button ws-template=\"Action\" style=\"font-size:small\" ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\" ws-attr=\"Attrs\" >${Name}</button>\r\n                                        </div>\r\n                                            </wcomp-splitter>\r\n                                        </wcomp-splitter>\r\n                                    </First>\r\n                                    <Second>\r\n                                                <wcomp-tabstrip >\r\n                                                    <div tabname=\"Properties\">\r\n                                                        <div>\r\n                                                            <table style=\"border-spacing:0px\">\r\n                                                                <thead>\r\n                                                                    <th style=\"width: 30%  \">Name</th>\r\n                                                                    <th style=\"width: 70% \">Value</th>\r\n                                                                </thead>\r\n                                                                <tbody ws-hole=\"Properties\" ws-children-template=\"Property\">\r\n                                                                    <tr ws-onclick=\"Select\" style=\"margin-bottom: 2px\" class=\"level  \">\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <input ws-var=\"Name\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Property...\">\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <textarea ws-var=\"Value\" class=\"form-control\" id=\"\" placeholder=\"Value...\"></textarea>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div style=\" cursor: pointer \" title=\"remove\">\r\n                                                                                <button ws-onclick=\"Remove\" class=\"delete is-small\">x</button>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </wcomp-tabstrip>\r\n                                    </Second>\r\n                                </ws-FixedSplitterVer>\r\n                        </Second>\r\n                    </ws-FixedSplitterHor>\r\n                </div>\r\n                <style style=\"display: none\">\r\n                        .Hidden     { display   : none         }\r\n                        table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                        td input.form-control { \r\n                            padding    : 0px; \r\n                            font-family: monospace;\r\n                            font-size  :   small;\r\n                            margin-top :   0px;\r\n                            margin-left: -2px;\r\n                            width      : 100%\r\n                        }\r\n                        td select {\r\n                            font-size : smaller;\r\n                            max-width : 8ch;\r\n                        }\r\n                        textarea {\r\n                           resize : vertical;\r\n                        }\r\n                        .tab-content {\r\n                            overflow: hidden\r\n                        }\r\n                        .tab-children {\r\n                            position:relative;\r\n                        }\r\n                        .tab-children>div>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        .relative {\r\n                            position:relative;\r\n                        }\r\n                        .relative>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                        table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                        table.table-striped    tbody input              { background: transparent; border: none}\r\n                        table.table-striped    tbody select             { background: transparent; border: none}\r\n                        table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                        table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                        table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                        table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                        table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                        table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                                   border-bottom: solid thin blue     ; } \r\n                        table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                        table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                        thead { color: gray }\r\n                        h3 { \r\n                            color: gray;\r\n                            line-height: 1em;\r\n                        }\r\n                        button       { border: solid thin transparent ; border-radius: 3px; }\r\n                        button:hover { border: solid thin blue }\r\n                        .indenter { position  : absolute; \r\n                                    top:0px; bottom:0px; left:0px; \r\n                                    background: white; color:white;\r\n                                    border-right: gray thin dotted;\r\n                                    }\r\n                        body {\r\n                            color      : #333;\r\n                            font-size  : small;\r\n                            font-family: monospace;\r\n                            line-height: 1.2;\r\n                        }\r\n                        .mainTitle {  \r\n                            font-size: 48px;\r\n                            font-weight: 500;\r\n                            color: gray;\r\n                            margin-top: -12px;\r\n                        }\r\n                        .CodeMirror {\r\n                            height: 100%;\r\n                        }\r\n                        \r\n                      \r\n                        body { margin: 0px }     \r\n                             \r\n                        div textarea {\r\n                            font-family     : monospace;\r\n                        }\r\n                        .code-editor-list-tile {\r\n                            white-space     : nowrap; \r\n                            border-style    : solid none none;\r\n                            border-color    : white;\r\n                            border-width    : 1px;\r\n                            background-color: #D8D8D8;\r\n                            display         : flex;\r\n                        }\r\n                        .code-editor-list-text{\r\n                            padding         : 1px 10px 1px 5px;\r\n                            overflow        : hidden;\r\n                            text-overflow   : ellipsis;\r\n                            white-space     : nowrap;\r\n                            flex            : 1;\r\n                        }\r\n                        \r\n                        .code-editor-list-tile span.node.ErrorMsg {\r\n                            background-color: red\r\n                        }\r\n                        .code-editor-list-tile span.node.expanded::before {\r\n                            content: \"-\"\r\n                        }\r\n                        .code-editor-list-tile span.node.collapsed::before {\r\n                            content: \"+\"\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor {\r\n                            font-weight     : bold;\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.indirect-predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.included-predecessor {\r\n                            color           : chocolate;\r\n                        }\r\n                        .code-editor-list-tile.selected {\r\n                            background-color: #77F;\r\n                            color           : white;\r\n                        }\r\n                        .code-editor-list-tile.codeSnippet {\r\n                            text-decoration: underline\r\n                        }\r\n                        .code-editor-list-tile:hover {\r\n                            background      : lightgray;\r\n                        }\r\n                        .code-editor-list-tile.selected:hover {\r\n                            background      : blue;\r\n                        }\r\n                        .code-editor-list-tile>.predecessor {\r\n                            font-weight     : bold;\r\n                            border-style    : inset;\r\n                            border-width    : 1px;\r\n                            text-align      : center;\r\n                            color           : transparent;\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        \r\n                        .CodeMirror { height: 100%; }\r\n                        \r\n                        .node {\r\n                            background-color: white; \r\n                            width           : 2ch; \r\n                            color           : #A03; \r\n                            font-weight     : bold; \r\n                            text-align      : center;\r\n                            font-family     : arial;\r\n                        }\r\n                        .Warning { text-decoration: underline lightblue } \r\n                        .Error   { text-decoration: underline red       } \r\n                        \r\n                    </style>\r\n            </div>\r\n            ";
  SC$1.html$1="\r\n                <div ws-template=\"Snippet\" >\r\n                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                         ws-ondrag=\"Drag\"\r\n                         ws-ondragover=\"DragOver\"\r\n                         ws-ondrop=\"Drop\"\r\n                        >\r\n                        <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                        <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                        <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                    </div>\r\n                </div>\r\n                <style>\r\n                    .Hidden     { display   : none         }\r\n                    table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                    td input.form-control { \r\n                        padding    : 0px; \r\n                        font-family: monospace;\r\n                        font-size  :   small;\r\n                        margin-top :   0px;\r\n                        margin-left: -2px;\r\n                        width      : 100%\r\n                    }\r\n                    td select {\r\n                        font-size : smaller;\r\n                        max-width : 8ch;\r\n                    }\r\n                    textarea {\r\n                       resize : none;\r\n                    }\r\n                    .tab-content {\r\n                        overflow: hidden\r\n                    }\r\n                    .tab-children {\r\n                        position:relative;\r\n                    }\r\n                    .tab-children>div>* {\r\n                        position:absolute;\r\n                        height: 100%;\r\n                        width:  100%;\r\n                        display: grid;\r\n                    }\r\n                    .relative {\r\n                        position:relative;\r\n                    }\r\n                    .relative>* {\r\n                        position:absolute;\r\n                        height: 100%;\r\n                        width:  100%;\r\n                        display: grid;\r\n                    }\r\n                    table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                    table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                    table.table-striped    tbody input              { background: transparent; border: none}\r\n                    table.table-striped    tbody select             { background: transparent; border: none}\r\n                    table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                    table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                    table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                    table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                    table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                    table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                               border-bottom: solid thin blue     ; } \r\n                    table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                    table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                    thead { color: gray }\r\n                    h3 { \r\n                        color: gray;\r\n                        line-height: 1em;\r\n                    }\r\n                    button       { border: solid thin transparent ; border-radius: 3px; }\r\n                    button:hover { border: solid thin blue }\r\n                    .indenter { position  : absolute; \r\n                                top:0px; bottom:0px; left:0px; \r\n                                background: white; color:white;\r\n                                border-right: gray thin dotted;\r\n                                }\r\n                    body {\r\n                        color      : #333;\r\n                        font-size  : small;\r\n                        font-family: monospace;\r\n                        line-height: 1.2;\r\n                    }\r\n                    .mainTitle {  \r\n                        font-size: 48px;\r\n                        font-weight: 500;\r\n                        color: gray;\r\n                        margin-top: -12px;\r\n                    }\r\n                    .CodeMirror {\r\n                        height: 100%;\r\n                    }\r\n                    \r\n                  \r\n                    body { margin: 0px }     \r\n                         \r\n                    div textarea {\r\n                        font-family     : monospace;\r\n                    }\r\n                    .code-editor-list-tile {\r\n                        white-space     : nowrap; \r\n                        border-style    : solid none none;\r\n                        border-color    : white;\r\n                        border-width    : 1px;\r\n                        background-color: #D8D8D8;\r\n                        display         : flex;\r\n                    }\r\n                    .code-editor-list-text{\r\n                        padding         : 1px 10px 1px 5px;\r\n                        overflow        : hidden;\r\n                        text-overflow   : ellipsis;\r\n                        white-space     : nowrap;\r\n                        flex            : 1;\r\n                    }\r\n                    \r\n                    .code-editor-list-tile span.node.ErrorMsg {\r\n                        background-color: red\r\n                    }\r\n                    .code-editor-list-tile span.node.expanded::before {\r\n                        content: \"-\"\r\n                    }\r\n                    .code-editor-list-tile span.node.collapsed::before {\r\n                        content: \"+\"\r\n                    }\r\n                    .code-editor-list-tile.direct-predecessor {\r\n                        font-weight     : bold;\r\n                        color           : blue;\r\n                    }\r\n                    .code-editor-list-tile.indirect-predecessor {\r\n                        color           : blue;\r\n                    }\r\n                    .code-editor-list-tile.included-predecessor {\r\n                        color           : chocolate;\r\n                    }\r\n                    .code-editor-list-tile.selected {\r\n                        background-color: #77F;\r\n                        color           : white;\r\n                    }\r\n                    .code-editor-list-tile.codeSnippet {\r\n                        text-decoration : underline;\r\n                        font-weight     : bold;\r\n                    }\r\n                    .code-editor-list-tile:hover {\r\n                        background      : lightgray;\r\n                    }\r\n                    .code-editor-list-tile.selected:hover {\r\n                        background      : blue;\r\n                    }\r\n                    .code-editor-list-tile>.predecessor {\r\n                        font-weight     : bold;\r\n                        border-style    : inset;\r\n                        border-width    : 1px;\r\n                        text-align      : center;\r\n                        color           : transparent;\r\n                    }\r\n                    .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                        color           : blue;\r\n                    }\r\n                    \r\n                    .CodeMirror { height: 100%; }\r\n                    \r\n                    .node {\r\n                        background-color: white; \r\n                        width           : 2ch; \r\n                        color           : #A03; \r\n                        font-weight     : bold; \r\n                        text-align      : center;\r\n                        font-family     : arial;\r\n                    }\r\n                    .Warning { text-decoration: underline lightblue } \r\n                    .Error   { text-decoration: underline red       } \r\n                    \r\n                </style>\r\n            ";
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
 Operators.toInt=function(x)
 {
  var u;
  u=Operators.toUInt(x);
  return u>=2147483648?u-4294967296:u;
 };
 Operators.FailWith=function(msg)
 {
  throw new Error(msg);
 };
 Operators.toUInt=function(x)
 {
  return(x<0?Math.ceil(x):Math.floor(x))>>>0;
 };
 Operators.KeyValue=function(kvp)
 {
  return[kvp.K,kvp.V];
 };
 StartAppFramework.startWithHtmlD=function()
 {
  SC$2.$cctor();
  return SC$2.startWithHtmlD;
 };
 StartAppFramework.htmlD=function()
 {
  SC$2.$cctor();
  return SC$2.htmlD;
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
 Depend.rtn=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 Depend.depend=function()
 {
  SC$2.$cctor();
  return SC$2.depend;
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
 List.map=function(f,x)
 {
  var r,l,go,res,t;
  if(x.$==0)
   return x;
  else
   {
    res=new T({
     $:1
    });
    r=res;
    l=x;
    go=true;
    while(go)
     {
      r.$0=f(l.$0);
      l=l.$1;
      l.$==0?go=false:r=(t=new T({
       $:1
      }),r.$1=t,t);
     }
    r.$1=T.Empty;
    return res;
   }
 };
 List.foldBack=function(f,l,s)
 {
  return Arrays.foldBack(f,Arrays.ofList(l),s);
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
 List.exists=function(p,x)
 {
  var e,l;
  e=false;
  l=x;
  while(!e&&l.$==1)
   {
    e=p(l.$0);
    l=l.$1;
   }
  return e;
 };
 List.filter=function(p,l)
 {
  return List.ofSeq(Seq.filter(p,l));
 };
 List.head=function(l)
 {
  return l.$==1?l.$0:List.listEmpty();
 };
 List.tail=function(l)
 {
  return l.$==1?l.$1:List.listEmpty();
 };
 List.append=function(x,y)
 {
  var r,l,go,res,t;
  if(x.$==0)
   return y;
  else
   if(y.$==0)
    return x;
   else
    {
     res=new T({
      $:1
     });
     r=res;
     l=x;
     go=true;
     while(go)
      {
       r.$0=l.$0;
       l=l.$1;
       l.$==0?go=false:r=(t=new T({
        $:1
       }),r.$1=t,t);
      }
     r.$1=y;
     return res;
    }
 };
 List.listEmpty=function()
 {
  return Operators.FailWith("The input list was empty.");
 };
 AppFrameworkTemplate.html$1=function()
 {
  SC$1.$cctor();
  return SC$1.html;
 };
 SC$2.$cctor=function()
 {
  var f,g,b,b$1,b$2,b$3,b$4,b$5,b$6,b$7,b$8,b$9,b$10,b$11,b$12,f$1,g$1,pf,p,pf$1,p$1,sayHello_0,c,vf,a,vf$1,c$1,vf$2,pc,pf$2,p$2,p$3,pc$1,vf$3,p$4,c$2,c$3,c$4,c$5,c$6,c$7,c$8,c$9,c$10,vf$4,c$11,vf$5,c$12,vf$6,pc$2,vf$7,p$5,b$13,b$14,b$15,b$16,b$17,b$18,p$6,cache,getOrAdd,p$7,cache$1,getOrAdd$1,p$8,cache$2,getOrAdd$2,p$9,cache$3,getOrAdd$3,p$10,cache$4,getOrAdd$4,p$11,cache$5,getOrAdd$5,p$12,cache$6,getOrAdd$6,p$13,cache$7,getOrAdd$7,p$14,cache$8,getOrAdd$8,p$15,cache$9,getOrAdd$9,p$16,cache$10,getOrAdd$10,p$17,cache$11,getOrAdd$11,p$18,cache$12,getOrAdd$12,o;
  SC$2.$cctor=Global.ignore;
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
  function f$2(s)
  {
   return String.splitByChar("\n",s);
  }
  function g$3(s)
  {
   var a$1,b$19;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$1=0,(b$19=Arrays.length(s)-2,Unchecked.Compare(a$1,b$19)===1?a$1:b$19))
   });
  }
  function g$4(s)
  {
   return Strings.concat("\n",s);
  }
  function f$3(s)
  {
   return s+"T00:00:00";
  }
  function f$4(extractAts,extractDoc)
  {
   return function(attrs)
   {
    return function(labelName)
    {
     function f$17(_var)
     {
      return Doc.Element("div",extractAts(attrs),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[extractDoc(labelName)]),Doc.Input([AttrProxy.Create("class","form-control")],_var)])]);
     }
     return function(v)
     {
      return AppFramework.docWithVar(f$17,v);
     };
    };
   };
  }
  function f$5(extractAts,attrs)
  {
   var f$17,a$1;
   f$17=(a$1=extractAts(attrs),function(a$2)
   {
    return Doc.Input(a$1,a$2);
   });
   return function(v)
   {
    return AppFramework.docWithVar(f$17,v);
   };
  }
  function f$6(extractAts,attrs)
  {
   var f$17,a$1;
   f$17=(a$1=extractAts(attrs),function(a$2)
   {
    return Doc.InputArea(a$1,a$2);
   });
   return function(v)
   {
    return AppFramework.docWithVar(f$17,v);
   };
  }
  function f$7(t,t$1)
  {
   var o$1,t$2;
   o$1=(t$2=AppFramework.getParmRef(t$1[0]),AppFramework.tryGetVoV(t$2[0],t$2[1]));
   o$1==null?void 0:o$1.$0.Set(t$1[1]);
  }
  function f$8(t,t$1)
  {
   var o$1,t$2;
   o$1=(t$2=AppFramework.getParmRef(t$1[0]),AppFramework.tryGetVoV(t$2[0],t$2[1]));
   o$1==null?void 0:AppFramework.draggingEvent(true,o$1.$0,t$1[1]);
  }
  function f$9(t,actN,p1,p2)
  {
   var o$1,t$1;
   o$1=(t$1=AppFramework.getParmRef(actN),AppFramework.tryGetAct(t$1[0],t$1[1]));
   return o$1==null?null:AppFramework.callFunction(p1,p2,o$1.$0.actFunction);
  }
  function f$10(t)
  {
   return t[0];
  }
  function f$11(t)
  {
   return t[1];
  }
  function f$12(a$1)
  {
   return new PlugInName({
    $:0,
    $0:a$1
   });
  }
  function g$5(a$1)
  {
   return{
    $:1,
    $0:a$1
   };
  }
  function f$13(a$1)
  {
   return new PlgElemName({
    $:0,
    $0:a$1
   });
  }
  function g$6(a$1)
  {
   return{
    $:1,
    $0:a$1
   };
  }
  function f$14(a$1)
  {
   return new PlgElemName({
    $:0,
    $0:a$1
   });
  }
  function g$7(a$1)
  {
   return{
    $:1,
    $0:a$1
   };
  }
  function f$15(a$1)
  {
   return new PlgElemName({
    $:0,
    $0:a$1
   });
  }
  function g$8(a$1)
  {
   return{
    $:1,
    $0:a$1
   };
  }
  function f$16(a$1)
  {
   return new PlgElemName({
    $:0,
    $0:a$1
   });
  }
  function g$9(a$1)
  {
   return{
    $:1,
    $0:a$1
   };
  }
  function p$19(y)
  {
   return""!==y;
  }
  function g$10(v)
  {
   return!v;
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
  function getOrAdd$13(p$20,f$17)
  {
   var o$1;
   o$1=checkO(p$20);
   return o$1==null?store(p$20,f$17(p$20)):o$1.$0;
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
  function getOrAdd$14(p$20,f$17)
  {
   var o$1;
   o$1=checkO$1(p$20);
   return o$1==null?store$1(p$20,f$17(p$20)):o$1.$0;
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
  function getOrAdd$15(p$20,f$17)
  {
   var o$1;
   o$1=checkO$2(p$20);
   return o$1==null?store$2(p$20,f$17(p$20)):o$1.$0;
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
  function getOrAdd$16(p$20,f$17)
  {
   var o$1;
   o$1=checkO$3(p$20);
   return o$1==null?store$3(p$20,f$17(p$20)):o$1.$0;
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
  function getOrAdd$17(p$20,f$17)
  {
   var o$1;
   o$1=checkO$4(p$20);
   return o$1==null?store$4(p$20,f$17(p$20)):o$1.$0;
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
  function getOrAdd$18(p$20,f$17)
  {
   var o$1;
   o$1=checkO$5(p$20);
   return o$1==null?store$5(p$20,f$17(p$20)):o$1.$0;
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
  function getOrAdd$19(p$20,f$17)
  {
   var o$1;
   o$1=checkO$6(p$20);
   return o$1==null?store$6(p$20,f$17(p$20)):o$1.$0;
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
  function getOrAdd$20(p$20,f$17)
  {
   var o$1;
   o$1=checkO$7(p$20);
   return o$1==null?store$7(p$20,f$17(p$20)):o$1.$0;
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
  function getOrAdd$21(p$20,f$17)
  {
   var o$1;
   o$1=checkO$8(p$20);
   return o$1==null?store$8(p$20,f$17(p$20)):o$1.$0;
  }
  function checkO$9(v)
  {
   var res;
   res=null;
   return cache$9.TryGetValue(v,{
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
  function store$9(v,res)
  {
   cache$9.set_Item(v,res);
   return res;
  }
  function getOrAdd$22(p$20,f$17)
  {
   var o$1;
   o$1=checkO$9(p$20);
   return o$1==null?store$9(p$20,f$17(p$20)):o$1.$0;
  }
  function checkO$10(v)
  {
   var res;
   res=null;
   return cache$10.TryGetValue(v,{
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
  function store$10(v,res)
  {
   cache$10.set_Item(v,res);
   return res;
  }
  function getOrAdd$23(p$20,f$17)
  {
   var o$1;
   o$1=checkO$10(p$20);
   return o$1==null?store$10(p$20,f$17(p$20)):o$1.$0;
  }
  function checkO$11(v)
  {
   var res;
   res=null;
   return cache$11.TryGetValue(v,{
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
  function store$11(v,res)
  {
   cache$11.set_Item(v,res);
   return res;
  }
  function getOrAdd$24(p$20,f$17)
  {
   var o$1;
   o$1=checkO$11(p$20);
   return o$1==null?store$11(p$20,f$17(p$20)):o$1.$0;
  }
  function checkO$12(v)
  {
   var res;
   res=null;
   return cache$12.TryGetValue(v,{
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
  function store$12(v,res)
  {
   cache$12.set_Item(v,res);
   return res;
  }
  function getOrAdd$25(p$20,f$17)
  {
   var o$1;
   o$1=checkO$12(p$20);
   return o$1==null?store$12(p$20,f$17(p$20)):o$1.$0;
  }
  SC$2.state=new CEBuilder.New();
  SC$2.result=new Builder.New();
  SC$2.result$1=Result.result();
  SC$2.depend=new DependBuilder.New();
  SC$2.rtn=Depend.rtn;
  SC$2.depend$1=Depend.depend();
  SC$2.unindentStr=function(x)
  {
   return g$2(String.unindent(x));
  };
  SC$2.skipLastLine=(f=function(x)
  {
   return g$3(f$2(x));
  },function(x)
  {
   return g$4(f(x));
  });
  SC$2.parseDateO2=(g=ParseO.tryParseWith(function(a$1)
  {
   var o$1,m;
   o$1=0;
   return[(m=DateUtil.TryParse(a$1),m!=null&&m.$==1&&(o$1=m.$0,true)),o$1];
  }),function(x)
  {
   return g(f$3(x));
  });
  SC$2.parseDateO=ParseO.tryParseWith(function(a$1)
  {
   var o$1,m;
   o$1=0;
   return[(m=DateUtil.TryParse(a$1),m!=null&&m.$==1&&(o$1=m.$0,true)),o$1];
  });
  SC$2.parseIntO=ParseO.tryParseWith(function(a$1)
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
  SC$2.parseInt64O=ParseO.tryParseWith(function(a$1)
  {
   var o$1;
   o$1=0;
   return[Numeric.TryParseInt64(a$1,{
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
  SC$2.parseSingleO=ParseO.tryParseWith(function(a$1)
  {
   var o$1,$1;
   o$1=0;
   return[($1=Global.Number(a$1),Global.isNaN($1)?false:(o$1=$1,true)),o$1];
  });
  SC$2.parseDoubleO=ParseO.tryParseWith(function(a$1)
  {
   var o$1,$1;
   o$1=0;
   return[($1=Global.Number(a$1),Global.isNaN($1)?false:(o$1=$1,true)),o$1];
  });
  SC$2.parseGuidO=ParseO.tryParseWith(function(a$1)
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
  SC$2["|Date|_|"]=ParseO.parseDateO();
  SC$2["|Int|_|"]=ParseO.parseIntO();
  SC$2["|Int64|_|"]=ParseO.parseInt64O();
  SC$2["|Single|_|"]=ParseO.parseSingleO();
  SC$2["|Double|_|"]=ParseO.parseDoubleO();
  SC$2["|Guid|_|"]=ParseO.parseGuidO();
  SC$2.counter=1;
  SC$2.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$2.rexEmail="(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*";
  SC$2.observers=T.Empty;
  SC$2.css="\r\n                .tab-panel {\r\n                 overflow  : hidden   ;\r\n                 display   : flex     ;\r\n                 flex-flow : column   ;\r\n                 background: lightgray;\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                }\r\n                .tab-content {\r\n                 flex      : 1 1     ;\r\n                 overflow  : auto    ;\r\n                 position  : relative;\r\n                }\r\n                .tab-children {\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                 position  : absolute;\r\n                 display   : grid    ;\r\n                }\r\n                .tab-strip {\r\n                 padding   : 0pt     ;\r\n                 flex      : 0 0     ;\r\n                }\r\n                .tab {\r\n                 border     : 0.2pt solid transparent;\r\n                 padding    : 0pt 4pt;\r\n                 display    : inline-block;\r\n                 font-family: sans-serif;\r\n                 font-weight: 200;\r\n                 font-size  : small;\r\n                 color      : #666;\r\n                 cursor     : pointer;\r\n                }\r\n                .top>.tab {\r\n                 border-radius: 2pt 2pt 0pt 0pt;\r\n                 border-bottom-width: 0pt;\r\n                 vertical-align: bottom;\r\n                }\r\n                .bottom>.tab {\r\n                 border-top-width: 0pt;\r\n                 border-radius: 0pt 0pt 2pt 2pt;\r\n                 vertical-align: top;\r\n                }\r\n                .horizontal>.tab:not(:first-child) {\r\n                 border-left-width: 0pt;\r\n                }\r\n                .tab.hovering {\r\n                 background: red;\r\n                }\r\n                .tab.selected {\r\n                 background: white;\r\n                 border-left-width: 0.2pt;\r\n                 color: black;\r\n                 font-weight: 500;\r\n                 border-color: black;\r\n                }\r\n                .horizontal>.tab.selected {\r\n                 border-left-width: 0.2pt;\r\n                }\r\n                ::slotted(*              ) { \r\n                 width : 100%;\r\n                 height: 100%;\r\n                }\r\n                        ";
  SC$2.init=Lazy.Create(function()
  {
   var o$1;
   o$1=new WcTabStripT.New();
   WebComponent.defineWebComponent("wcomp-tabstrip",WcTabStripT.Constructor,self.FsRootDll.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New);
  });
  SC$2.layoutHorizontal=Runtime$1.Curried(function($1,$2,$3,$4,$5)
  {
   return Doc.get_Empty();
  },5);
  SC$2.layoutVertical=Runtime$1.Curried(function($1,$2,$3,$4,$5)
  {
   return Doc.get_Empty();
  },5);
  SC$2.html="\r\n            <div style=\"display:none\" >\r\n                <div links>\r\n                    <link  href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" type=\"text/css\" rel=\"stylesheet\">\r\n                    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"   type=\"text/javascript\"></script>\r\n                </div>\r\n                <div ws-template=\"AppFramework\" style=\"height: calc(100vh - 4px); width: calc(100vw - 4px) \" class=\"relative\" >\r\n                    <div ws-hole=\"MainClient\"></div>\r\n                    <div class=\"AppFrameworkGo\"><button ws-onclick=\"GoClient\">${MainDoc}</button></div>\r\n                </div>\r\n                <div ws-template=\"VSplitter1\" class=\"versplitter\" ws-attr=\"Attrs\" vertical>\r\n                    <div style=\"min-width :Calc((100% - ${gap}) *        ${perc}  / 100);max-width :Calc((100% - ${gap}) *        ${perc}  / 100)\">${doc1}</div>\r\n                    <div style=\"min-width :             ${gap}\" ws-onmousedown=\"MouseDown\" ></div>\r\n                    <div style=\"min-width :Calc((100% - ${gap}) * (100 - ${perc}) / 100);max-width :Calc((100% - ${gap}) * (100 - ${perc}) / 100)\">${doc2}</div>\r\n                </div>\r\n                <div ws-template=\"HSplitter1\" class=\"horsplitter\" ws-attr=\"Attrs\">\r\n                    <div style=\"min-height:Calc((100% - ${gap}) *        ${perc}  / 100);max-height:Calc((100% - ${gap}) *        ${perc}  / 100)\">${doc1}</div>\r\n                    <div style=\"min-height:             ${gap}\" ws-onmousedown=\"MouseDown\" ></div>\r\n                    <div style=\"min-height:Calc((100% - ${gap}) * (100 - ${perc}) / 100);max-height:Calc((100% - ${gap}) * (100 - ${perc}) / 100)\">${doc2}</div>\r\n                </div>\r\n                <style>\r\n                    .horsplitter                    { display: flex; flex-direction:column              } \r\n                    .horsplitter > div:nth-child(2) { background: #eef; cursor: row-resize; z-index:400 }\r\n                    .horsplitter > div              { overflow: hidden                                  }\r\n                    .versplitter                    { display: flex; flex-direction:row                 } \r\n                    .versplitter > div:nth-child(2) { background: #eef; cursor: col-resize; z-index:400 }\r\n                    .versplitter > div              { overflow: hidden                                  }\r\n                </style>\r\n                <style>\r\n                    .AppFrameworkGo {\r\n                        max-width: 2px;\r\n                        max-height: 2px;\r\n                        z-index: 4000;\r\n                        overflow: hidden;\r\n                        position: fixed;\r\n                        top: 0px;\r\n                        left: 0px;\r\n                    }\r\n                </style>\r\n                <div ws-template=\"FixedSplitterVer\" \r\n                    style=\"display: grid; \r\n                           grid-gap: 0px; \r\n                           box-sizing: border-box; \r\n                           height: 100%;\r\n                           width : 100%;\r\n                           grid-template-areas: 'one two'; \r\n                           grid-template-rows   :100%; \r\n                           overflow: hidden; \r\n                           grid-template-columns: ${PartSizes}\"  >\r\n                   <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n                   <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"FixedSplitterHor\" \r\n               style=\"display: grid; \r\n                      grid-gap: 0px; \r\n                      box-sizing: border-box; \r\n                      height: 100%;\r\n                      width : 100%;\r\n                      grid-template-areas: 'one' 'two'; \r\n                      grid-template-columns:100%; \r\n                      overflow: hidden; \r\n                      grid-template-rows   : ${PartSizes}\"  >\r\n              <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n              <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"WCompSplitterHor\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid;\r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one' 'two'; \r\n                            grid-template-columns:100%; \r\n                            overflow: hidden; \r\n                            grid-template-rows   : ${PartSizes}\" \r\n                     >\r\n                     <slot></slot>\r\n                    <slot name=\"splitter\">  <div style=\"grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-row:2; grid-column:1 / 1 ; \r\n                            cursor: row-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            height: ${Gap}; \r\n                            margin-top :-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>        \r\n                <div ws-template=\"WCompSplitterVer\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid; \r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one two'; \r\n                            grid-template-rows   :100%; \r\n                            overflow: hidden; \r\n                            grid-template-columns: ${PartSizes}\"  >\r\n                    <slot></slot>\r\n                    <slot name=\"splitter\"> <div style=\"grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-column:2; grid-row:1 / 1\r\n                            cursor: column-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            width: ${Gap}; \r\n                            margin-left:-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>\r\n                <div ws-template=\"AppFwkClient\" >\r\n                    <ws-FixedSplitterHor>\r\n                        <PartSizes>55px calc(100% - 55px)</PartSizes>\r\n                        <First>\r\n                            <span style=\"display: grid;\r\n                                  grid-template-columns: 30% 20% 20% 10%;\r\n                                  grid-gap: 25px;\r\n                                \">\r\n                                <div class=\"mainTitle\">AppFramework</div>\r\n                            </span>\r\n                        </First>\r\n                        <Second>\r\n                                <ws-FixedSplitterVer>\r\n                                    <PartSizes>calc(100% - 2px) 2px</PartSizes>\r\n                                    <First>\r\n                                        <wcomp-splitter vertical value=\"18\" max=\"100\">\r\n                                            <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\" >\r\n                                                <div ws-template=\"Tile\">\r\n                                                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                                                    ws-ondrag=\"Drag\"\r\n                                                    ws-ondragover=\"DragOver\"\r\n                                                    ws-ondrop=\"Drop\"\r\n                                                   >\r\n                                                   <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                                                   <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                                                   <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                                               </div>\r\n                                       \r\n                                                </div>\r\n                                            </div></div>\r\n                                            <wcomp-splitter vertical value=\"80\" min=\"30\" max=\"100\">\r\n                                                <ws-FixedSplitterHor>\r\n                                                    <PartSizes>32px calc(100% - 32px)</PartSizes>\r\n                                                    <First>\r\n                                                        <div>\r\n                                                            <div class=\"input-group\">\r\n                                                                <span class=\"input-group-addon\">name:</span>\r\n                                                                <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </First>\r\n                                                    <Second>\r\n                                                        <div style=\"overflow:auto\">\r\n                                                            <div>\r\n                                                                <h3>Vars:</h3>\r\n                                                                <table style=\"overflow:auto;width:100%\" class=\"table table-condensed table-striped\">\r\n                                                                    <thead>\r\n                                                                        <th style=\"width: 10%  \">Name</th>\r\n                                                                        <th style=\"width: 90% \">Value</th>\r\n                                                                    </thead>\r\n                                                                    <tbody ws-hole=\"Vars\">\r\n                                                                    <tr ws-template=\"NameValueInput\" >\r\n                                                                        <td >${Name}:</td>\r\n                                                                        <td>\r\n                                                                        <textarea placeholder=\"Value...\" ws-var=\"Value\" style=\"resize:vertical; width:100%\" spellcheck=\"false\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <h3>Views:</h3>\r\n                                                                <table style=\"overflow:auto\" class=\"table table-condensed table-striped\" >\r\n                                                                    <thead>\r\n                                                                        <th style=\"width: 10%  \">Name</th>\r\n                                                                        <th style=\"width: 90% \">Value</th>\r\n                                                                    </thead>\r\n                                                                    <tbody ws-hole=\"Views\" >\r\n                                                                    <tr ws-template=\"NameValue\" class=\"\">\r\n                                                                        <td>${Name}:</td>\r\n                                                                        <td>${Value}</td>\r\n                                                                    </tr>\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <h3>Docs:</h3>\r\n                                                                <div ws-hole=\"Docs\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <h3>Queries:</h3>\r\n                                                                <table style=\"overflow:auto\" >\r\n                                                                    <tbody ws-hole=\"Queries\" >\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </Second>\r\n                                                </ws-FixedSplitterHor>\r\n                                        <div style=\"font-size:small; overflow: hidden; display: flex; flex-direction: column;\"  class=\"absolute\" ws-hole=\"Actions\" >\r\n                                            <button ws-template=\"Action\" style=\"font-size:small\" ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\" ws-attr=\"Attrs\" >${Name}</button>\r\n                                        </div>\r\n                                            </wcomp-splitter>\r\n                                        </wcomp-splitter>\r\n                                    </First>\r\n                                    <Second>\r\n                                                <wcomp-tabstrip >\r\n                                                    <div tabname=\"Properties\">\r\n                                                        <div>\r\n                                                            <table style=\"border-spacing:0px\">\r\n                                                                <thead>\r\n                                                                    <th style=\"width: 30%  \">Name</th>\r\n                                                                    <th style=\"width: 70% \">Value</th>\r\n                                                                </thead>\r\n                                                                <tbody ws-hole=\"Properties\" ws-children-template=\"Property\">\r\n                                                                    <tr ws-onclick=\"Select\" style=\"margin-bottom: 2px\" class=\"level  \">\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <input ws-var=\"Name\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Property...\">\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <textarea ws-var=\"Value\" class=\"form-control\" id=\"\" placeholder=\"Value...\"></textarea>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div style=\" cursor: pointer \" title=\"remove\">\r\n                                                                                <button ws-onclick=\"Remove\" class=\"delete is-small\">x</button>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </wcomp-tabstrip>\r\n                                    </Second>\r\n                                </ws-FixedSplitterVer>\r\n                        </Second>\r\n                    </ws-FixedSplitterHor>\r\n                </div>\r\n                <style style=\"display: none\">\r\n                        .Hidden     { display   : none         }\r\n                        table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                        td input.form-control { \r\n                            padding    : 0px; \r\n                            font-family: monospace;\r\n                            font-size  :   small;\r\n                            margin-top :   0px;\r\n                            margin-left: -2px;\r\n                            width      : 100%\r\n                        }\r\n                        td select {\r\n                            font-size : smaller;\r\n                            max-width : 8ch;\r\n                        }\r\n                        textarea {\r\n                           resize : vertical;\r\n                        }\r\n                        .tab-content {\r\n                            overflow: hidden\r\n                        }\r\n                        .tab-children {\r\n                            position:relative;\r\n                        }\r\n                        .tab-children>div>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        .relative {\r\n                            position:relative;\r\n                        }\r\n                        .relative>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                        table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                        table.table-striped    tbody input              { background: transparent; border: none}\r\n                        table.table-striped    tbody select             { background: transparent; border: none}\r\n                        table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                        table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                        table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                        table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                        table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                        table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                                   border-bottom: solid thin blue     ; } \r\n                        table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                        table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                        thead { color: gray }\r\n                        h3 { \r\n                            color: gray;\r\n                            line-height: 1em;\r\n                        }\r\n                        button       { border: solid thin transparent ; border-radius: 3px; }\r\n                        button:hover { border: solid thin blue }\r\n                        .indenter { position  : absolute; \r\n                                    top:0px; bottom:0px; left:0px; \r\n                                    background: white; color:white;\r\n                                    border-right: gray thin dotted;\r\n                                    }\r\n                        body {\r\n                            color      : #333;\r\n                            font-size  : small;\r\n                            font-family: monospace;\r\n                            line-height: 1.2;\r\n                        }\r\n                        .mainTitle {  \r\n                            font-size: 48px;\r\n                            font-weight: 500;\r\n                            color: gray;\r\n                            margin-top: -12px;\r\n                        }\r\n                        .CodeMirror {\r\n                            height: 100%;\r\n                        }\r\n                        \r\n                      \r\n                        body { margin: 0px }     \r\n                             \r\n                        div textarea {\r\n                            font-family     : monospace;\r\n                        }\r\n                        .code-editor-list-tile {\r\n                            white-space     : nowrap; \r\n                            border-style    : solid none none;\r\n                            border-color    : white;\r\n                            border-width    : 1px;\r\n                            background-color: #D8D8D8;\r\n                            display         : flex;\r\n                        }\r\n                        .code-editor-list-text{\r\n                            padding         : 1px 10px 1px 5px;\r\n                            overflow        : hidden;\r\n                            text-overflow   : ellipsis;\r\n                            white-space     : nowrap;\r\n                            flex            : 1;\r\n                        }\r\n                        \r\n                        .code-editor-list-tile span.node.ErrorMsg {\r\n                            background-color: red\r\n                        }\r\n                        .code-editor-list-tile span.node.expanded::before {\r\n                            content: \"-\"\r\n                        }\r\n                        .code-editor-list-tile span.node.collapsed::before {\r\n                            content: \"+\"\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor {\r\n                            font-weight     : bold;\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.indirect-predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.included-predecessor {\r\n                            color           : chocolate;\r\n                        }\r\n                        .code-editor-list-tile.selected {\r\n                            background-color: #77F;\r\n                            color           : white;\r\n                        }\r\n                        .code-editor-list-tile.codeSnippet {\r\n                            text-decoration: underline\r\n                        }\r\n                        .code-editor-list-tile:hover {\r\n                            background      : lightgray;\r\n                        }\r\n                        .code-editor-list-tile.selected:hover {\r\n                            background      : blue;\r\n                        }\r\n                        .code-editor-list-tile>.predecessor {\r\n                            font-weight     : bold;\r\n                            border-style    : inset;\r\n                            border-width    : 1px;\r\n                            text-align      : center;\r\n                            color           : transparent;\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        \r\n                        .CodeMirror { height: 100%; }\r\n                        \r\n                        .node {\r\n                            background-color: white; \r\n                            width           : 2ch; \r\n                            color           : #A03; \r\n                            font-weight     : bold; \r\n                            text-align      : center;\r\n                            font-family     : arial;\r\n                        }\r\n                        .Warning { text-decoration: underline lightblue } \r\n                        .Error   { text-decoration: underline red       } \r\n                        \r\n                    </style>\r\n            </div>\r\n            ";
  SC$2.plugIns=new ListModel.New$1(function(plg)
  {
   return plg.plgName;
  });
  SC$2.mainDocV=Var$1.Create$1("AppFramework.AppFwkClient");
  SC$2.TemplateFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\LayoutEngine\\website\\AppFramework.html";
  SC$2.selectionPlugInO=Var$1.Create$1({
   $:1,
   $0:new PlugInName({
    $:0,
    $0:"AppFramework"
   })
  });
  SC$2.currentPlugInW=View.Map(function(o$1)
  {
   return o$1==null?AppFramework.defaultPlugIn():o$1.$0;
  },View.Bind(function(a$1)
  {
   return a$1==null?View.Const({
    $:1,
    $0:AppFramework.defaultPlugIn()
   }):AppFramework.plugIns().TryFindByKeyAsView(a$1.$0);
  },AppFramework.selectionPlugInO().get_View()));
  SC$2.currentPlugInV=new FromView.New(AppFramework.currentPlugInW(),function(a$1)
  {
   AppFramework.plugIns().Append(a$1);
  });
  SC$2.AppFwkClient=Lazy.Create(function()
  {
   var b$19,Q,A,D,V,V$1,P$1,p$20,i;
   return(b$19=(Q=AppFramework.renderQueries(),(A=AppFramework.renderActions(),(D=AppFramework.renderDocs(),(V=AppFramework.renderViews(),(V$1=AppFramework.renderVars(),(P$1=AppFramework.renderPlugIns(),ProviderBuilder.Make().WithHole({
    $:0,
    $0:"plugins",
    $1:P$1
   })).WithHole({
    $:2,
    $0:"pluginname",
    $1:View.Map(function($1)
    {
     return $1.plgName.get_Id();
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
   })),(p$20=Handler.CompleteHoles(b$19.k,b$19.h,[]),(i=new TemplateInstance.New(p$20[1],LayoutEngine_Templates.appfwkclient(p$20[0])),(b$19.i=i,i)))).get_Doc();
  });
  SC$2.plugin=new PlugInBuilder.New();
  SC$2.a11V=Var$1.Create$1(11);
  SC$2.mainX={
   $:0,
   $0:AppFramework.a11V().get_View()
  };
  SC$2.baseView=AppFramework.mainDocV().get_View();
  SC$2.op_LessMultiplyGreater=function(f$17)
  {
   return function(v)
   {
    return Val.apply(f$17,v);
   };
  };
  SC$2.getDocFromReferenceD=Depend.dependByName("getDocFromReference",Extract0.getDocFromReference,Global.id);
  SC$2.getTextActViewFromReferenceD=Depend.dependByName("getTextActViewFromReference",Extract0.getTextActViewFromReference,Global.id);
  SC$2.getDocFromTextTypesD=(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(Extract0.getDocFromReferenceD(),function(a$1)
   {
    var f$17;
    function m(a$2)
    {
     return a$2.$==1?a$1(a$2.$0):Doc.TextNode(a$2.$0);
    }
    return b.Return((f$17=function(l)
    {
     return List.map(m,l);
    },function(x)
    {
     return Doc.Concat(f$17(x));
    }));
   });
  }));
  SC$2.extractDocD=(b$1=Depend.depend(),b$1.Delay(function()
  {
   return b$1.Bind(Extract0.getDocFromTextTypesD(),function(a$1)
   {
    return b$1.Return(function(x)
    {
     return a$1(Extract0.getTextData(x));
    });
   });
  }));
  SC$2.getTextValFromSeqD=(b$2=Depend.depend(),b$2.Delay(function()
  {
   return b$2.Bind(Extract0.getTextActViewFromReferenceD(),function(a$1)
   {
    var f$17,g$11,f$18;
    function f$19(a$2)
    {
     var r;
     return a$2.$==1?(r=a$2.$0,{
      $:0,
      $0:View.Map(function(a$3)
      {
       return a$3.$==1?(function($1)
       {
        return function($2)
        {
         return $1("@{"+Utils.toSafe($2)+"}");
        };
       }(Global.id))(r):a$3.$0;
      },a$1(r))
     }):{
      $:1,
      $0:a$2.$0
     };
    }
    return b$2.Return((f$17=function(l)
    {
     return Val.traverseListApp(f$19,l);
    },(g$11=(f$18={
     $:1,
     $0:function(s)
     {
      return Strings.concat("",s);
     }
    },function(v)
    {
     return Val.apply(f$18,v);
    }),function(x)
    {
     return g$11(f$17(x));
    })));
   });
  }));
  SC$2.getTextValD=Operators$1.op_GreaterMultiplyGreater(Extract0.getTextData,Extract0.getTextValFromSeqD());
  SC$2.extractAtsD=(b$3=Depend.depend(),b$3.Delay(function()
  {
   return b$3.Bind(Extract0.getTextValD(),function(a$1)
   {
    return b$3.Bind(Extract0.getTextActViewFromReferenceD(),function(a$2)
    {
     return b$3.Return(function(txt)
     {
      var a$3,m;
      function parseAttr(t)
      {
       var m$1,sty,m$2,atv,atn,m$3,$1;
       m$1=Strings.SplitChars(t,[":"],0);
       return!Unchecked.Equals(m$1,null)&&m$1.length===2?(sty=Arrays.get(m$1,1),{
        $:0,
        $0:Arrays.get(m$1,0),
        $1:sty
       }):(m$2=Arrays.map(Strings.Trim,Strings.SplitChars(t,["="],0)),!Unchecked.Equals(m$2,null)&&m$2.length===2?(atv=Arrays.get(m$2,1),(atn=Arrays.get(m$2,0),(m$3=Extract0.getTextData(atv),m$3.$==1&&(m$3.$0.$==1&&(m$3.$1.$==0&&($1=m$3.$0.$0,true)))?{
        $:2,
        $0:atn,
        $1:$1
       }:{
        $:1,
        $0:atn,
        $1:atv
       }))):!Unchecked.Equals(m$2,null)&&m$2.length===1?{
        $:1,
        $0:Arrays.get(m$2,0),
        $1:""
       }:AAttr.AEmpty);
      }
      function splitAttrs(txt$1)
      {
       return Seq.filter(function(y)
       {
        return""!==y;
       },Seq.map(Strings.Trim,Strings.SplitChars(txt$1,[";"],0)));
      }
      function addedListeners(el)
      {
       var v;
       v=el.addedListeners;
       return!v?[]:v;
      }
      function setCustomAttr(atn,el,a$4)
      {
       var act,p$20,same,i,$1;
       function listener(ev)
       {
        AppFramework.callFunction(el,ev,act.actFunction);
       }
       function f$17(t)
       {
        return t[0];
       }
       function g$12(y)
       {
        return atn===y;
       }
       if(a$4.$==1)
        {
         act=a$4.$0;
         p$20=Arrays.partition(function(x)
         {
          return g$12(f$17(x));
         },addedListeners(el));
         same=p$20[0];
         for(i=0,$1=same.length-1;i<=$1;i++)(function()
         {
          return el.removeEventListener(atn,(Arrays.get(same,i))[1]);
         }());
         el.addEventListener(atn,listener,false);
         el.addedListeners=p$20[1].concat([[atn,listener]]);
         return;
        }
       else
        try
        {
         return el.setAttribute(atn,Strings.Trim(a$4.$0));
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
      function viewAttr(atn)
      {
       function s$1($1,$2)
       {
        return setCustomAttr(atn,$1,$2);
       }
       return function(v)
       {
        return AttrModule.DynamicCustom(function($1)
        {
         return function($2)
         {
          return s$1($1,$2);
         };
        },v);
       };
      }
      function constAttr(a$4)
      {
       var x;
       return a$4.$==1?AppFramework.valToAttr(a$4.$0,a$1(a$4.$1)):a$4.$==2?(x=a$2(a$4.$1),(viewAttr(a$4.$0))(x)):a$4.$==3?Attrs.EmptyAttr():AppFramework.valToStyle(a$4.$0,a$1(a$4.$1));
      }
      function s(el,sq)
      {
       var f$17,styles,atts,attsNow,names,i,e,nm,i$1,e$1,f$18,a$4,i$2,$1,f$19,i$3,e$2;
       function m$1(t)
       {
        return t[0];
       }
       function g$12(a$5)
       {
        return new FSharpSet.New(a$5);
       }
       styles=Seq.choose(function(a$5)
       {
        return a$5.$==0?{
         $:1,
         $0:a$5.$0+":"+a$5.$1
        }:null;
       },sq);
       atts=Arrays.ofSeq(Seq.delay(function()
       {
        return Seq.append(!Seq.isEmpty(styles)?[["style",Strings.concat(";",styles)]]:[],Seq.delay(function()
        {
         return Seq.choose(function(a$5)
         {
          return a$5.$==1?{
           $:1,
           $0:[a$5.$0,a$5.$1]
          }:a$5.$==2?{
           $:1,
           $0:[a$5.$0,a$5.$1]
          }:a$5.$==3?null:null;
         },sq);
        }));
       }));
       attsNow=List.ofSeq(Seq.delay(function()
       {
        return Seq.map(function(i$4)
        {
         return[el.attributes.item(i$4).name,el.attributes.item(i$4).value];
        },List.ofSeq(Operators.range(0,el.attributes.length-1)));
       }));
       names=(f$17=function(s$1)
       {
        return Seq.map(m$1,s$1);
       },function(x)
       {
        return g$12(f$17(x));
       });
       i=FSharpSet.op_Subtraction(names(attsNow),names(atts));
       e=Enumerator.Get(i);
       try
       {
        while(e.MoveNext())
         {
          nm=e.Current();
          try
          {
           el.attributes.removeNamedItem(nm);
          }
          catch(e$3)
          {
           ((function($2)
           {
            return function($3)
            {
             return $2(Utils.prettyPrint($3));
            };
           }(function(s$1)
           {
            console.log(s$1);
           }))(e$3));
          }
         }
       }
       finally
       {
        if(typeof e=="object"&&"Dispose"in e)
         e.Dispose();
       }
       i$1=FSharpSet.op_Subtraction(new FSharpSet.New(atts),new FSharpSet.New(attsNow));
       e$1=Enumerator.Get(i$1);
       try
       {
        while(e$1.MoveNext())
         {
          f$18=e$1.Current();
          try
          {
           el.setAttribute(f$18[0],f$18[1]);
          }
          catch(e$4)
          {
           ((function($2)
           {
            return function($3)
            {
             return $2(Utils.prettyPrint($3));
            };
           }(function(s$1)
           {
            console.log(s$1);
           }))(e$4));
          }
         }
       }
       finally
       {
        if(typeof e$1=="object"&&"Dispose"in e$1)
         e$1.Dispose();
       }
       a$4=addedListeners(el);
       for(i$2=0,$1=a$4.length-1;i$2<=$1;i$2++){
        f$19=Arrays.get(a$4,i$2);
        try
        {
         el.removeEventListener(f$19[0],f$19[1]);
        }
        catch(e$5)
        {
         ((function($2)
         {
          return function($3)
          {
           return $2(Utils.prettyPrint($3));
          };
         }(function(s$1)
         {
          console.log(s$1);
         }))(e$5));
        }
       }
       i$3=Seq.choose(function(a$5)
       {
        return a$5.$==2?{
         $:1,
         $0:[a$5.$0,a$5.$1]
        }:null;
       },sq);
       e$2=Enumerator.Get(i$3);
       try
       {
        while(e$2.MoveNext())
         (function()
         {
          var f$20,$2;
          f$20=e$2.Current();
          return View.Get(($2=f$20[0],function($3)
          {
           return setCustomAttr($2,el,$3);
          }),a$2(f$20[1]));
         }());
        return;
       }
       finally
       {
        if(typeof e$2=="object"&&"Dispose"in e$2)
         e$2.Dispose();
       }
      }
      function g$11(s$1)
      {
       return Seq.map(parseAttr,s$1);
      }
      a$3=Arrays.ofSeq(splitAttrs(txt));
      return!Unchecked.Equals(a$3,null)&&a$3.length===1?[(m=a$1(Arrays.get(a$3,0)),m.$==0?AttrModule.DynamicCustom(function($1)
      {
       return function($2)
       {
        return s($1,$2);
       };
      },View.Map(function(x)
      {
       return g$11(splitAttrs(x));
      },m.$0)):constAttr(parseAttr(m.$0)))]:Seq.map(function(x)
      {
       return constAttr(parseAttr(x));
      },a$3);
     });
    });
   });
  }));
  SC$2.extractTextD=(b$4=Depend.depend(),b$4.Delay(function()
  {
   return b$4.Bind(Extract0.getTextValD(),function(a$1)
   {
    return b$4.Return(function(x)
    {
     return Val.toView(a$1(x));
    });
   });
  }));
  SC$2.currentPlugInNameDef=new PlugInName({
   $:0,
   $0:"NewLYx"
  });
  SC$2.currentPlugInNameD=Depend.dependByName("currentPlugInName",AppFramework.currentPlugInNameDef(),Global.id);
  SC$2.getDocwD=(b$5=Depend.depend(),b$5.Delay(function()
  {
   return b$5.Bind(AppFramework.currentPlugInNameD(),function(a$1)
   {
    return b$5.Return(function(r)
    {
     var p$20,pName,oName;
     p$20=(AppFramework.splitName(a$1))(r);
     pName=p$20[0];
     oName=p$20[1];
     return Doc.BindView(function(docO)
     {
      var o$1;
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
      o$1=docO==null?null:{
       $:1,
       $0:AppFramework.getActualDoc(docO.$0)
      };
      return o$1==null?Doc.TextView(View.Map(function(o$2)
      {
       return o$2==null?d():o$2.$0;
      },AppFramework.tryGetWoWW(pName,oName))):o$1.$0;
     },AppFramework.tryGetDocW(pName,oName));
    });
   });
  }));
  SC$2.getDocD=(b$6=Depend.depend(),b$6.Delay(function()
  {
   return b$6.Bind(AppFramework.currentPlugInNameD(),function(a$1)
   {
    return b$6.Return(function(r)
    {
     var p$20,pName,oName,o$1,o$2,o$3;
     p$20=(AppFramework.splitName(a$1))(r);
     pName=p$20[0];
     oName=p$20[1];
     o$1=(o$2=AppFramework.tryGetDoc(pName,oName),o$2==null?null:{
      $:1,
      $0:AppFramework.getActualDoc(o$2.$0)
     });
     return o$1==null?Doc.TextView((o$3=AppFramework.tryGetWoW(pName,oName),o$3==null?View.Const((function($1)
     {
      return function($2)
      {
       return $1("Reference not found @{"+Utils.toSafe($2)+"}");
      };
     }(Global.id))(r)):o$3.$0)):o$1.$0;
    });
   });
  }));
  SC$2.getTextActViewD=(b$7=Depend.depend(),b$7.Delay(function()
  {
   return b$7.Bind(AppFramework.currentPlugInNameD(),function(a$1)
   {
    return b$7.Return(function(r)
    {
     var p$20,pName,oName;
     p$20=(AppFramework.splitName(a$1))(r);
     pName=p$20[0];
     oName=p$20[1];
     return View.Bind(function(a$2)
     {
      function d()
      {
       return(function($1)
       {
        return function($2)
        {
         return $1("Text Reference not found @{"+Utils.toSafe($2)+"}");
        };
       }(Global.id))(r);
      }
      return a$2==null?View.Map(function(a$3)
      {
       return{
        $:0,
        $0:a$3
       };
      },View.Map(function(o$1)
      {
       return o$1==null?d():o$1.$0;
      },AppFramework.tryGetWoWW(pName,oName))):View.Const({
       $:1,
       $0:a$2.$0
      });
     },AppFramework.tryGetActW(pName,oName));
    });
   });
  }));
  SC$2.extractTextD$1=Extract0.extractTextD();
  SC$2.extractDocD$1=Extract0.extractDocD();
  SC$2.extractAtsD$1=Extract0.extractAtsD();
  SC$2.extractAttD=(b$8=Operators$1.depend(),b$8.Delay(function()
  {
   return b$8.Bind(AppFramework.extractAtsD(),function(a$1)
   {
    return b$8.Return(function(p$20)
    {
     return AttrProxy.Concat(a$1(p$20));
    });
   });
  }));
  SC$2.defPlugInName=new PlugInName({
   $:0,
   $0:"AppFramework"
  });
  SC$2.inputLabel=AppFramework.depWithExtracts(function($1,$2,$3)
  {
   return f$4.apply(null,[$1,$2,$3]);
  });
  SC$2.input=AppFramework.depWithExtracts(function($1)
  {
   return function($2)
   {
    return f$5($1,$2);
   };
  });
  SC$2.textArea=AppFramework.depWithExtracts(function($1)
  {
   return function($2)
   {
    return f$6($1,$2);
   };
  });
  SC$2.htmlDoc=AppFramework.depWithExtracts(function($1,$2,extractText)
  {
   return function(html)
   {
    return Doc.BindView(Doc.Verbatim,extractText(html));
   };
  });
  SC$2.docReference=AppFramework.depWithExtracts(function($1,$2,extractText)
  {
   return function(docName)
   {
    var x;
    function f$17(a$1,a$2)
    {
     return function(f$18)
     {
      return(f$18(a$1))(a$2);
     };
    }
    return Doc.BindView(function(a$1)
    {
     var a$2;
     return a$1==null?(AppFramework.errDocf(function($3)
     {
      return function($4)
      {
       return $3("Doc not found: "+Utils.toSafe($4));
      };
     }))(docName):(a$2=AppFramework.Lazy(a$1.$0.docDoc),a$2.$==0?a$2.$0:a$2.$==1?a$2.$0():(AppFramework.errDocf(function($3)
     {
      return function($4)
      {
       return $3("Doc parameters not resolved: "+GeneratedPrintf.p($4));
      };
     }))(a$1.$0));
    },View.Bind(function(b$19)
    {
     return(function($3)
     {
      return f$17($3[0],$3[1]);
     }(b$19))(function($3)
     {
      return function($4)
      {
       return AppFramework.tryGetDocW($3,$4);
      };
     });
    },(x=extractText(docName),View.Map(AppFramework.splitName(AppFramework.defPlugInName()),x))));
   };
  });
  SC$2.setVar0=AppFramework.depWithExtracts(function($1,$2,extractText)
  {
   return function(t)
   {
    var o$1,t$1,_var;
    o$1=(t$1=AppFramework.getParmRef(t[0]),AppFramework.tryGetVoV(t$1[0],t$1[1]));
    o$1==null?void 0:(_var=o$1.$0,View.Get(function(a$1)
    {
     _var.Set(a$1);
    },extractText(t[1])));
   };
  });
  SC$2.setVarDirect0=AppFramework.depWithExtracts(function($1,$2,$3)
  {
   var $4;
   $4=[$1,$2,$3];
   return function($5)
   {
    return f$7($4,$5);
   };
  });
  SC$2.dragSplitter0=AppFramework.depWithExtracts(function($1,$2,$3)
  {
   var $4;
   $4=[$1,$2,$3];
   return function($5)
   {
    return f$8($4,$5);
   };
  });
  SC$2.trigAct=AppFramework.depWithExtracts(function($1,$2,extractText)
  {
   return function(trigger)
   {
    return function(actN)
    {
     function f$17(a$1)
     {
      var o$1,t;
      if(a$1===null)
       ;
      else
       {
        o$1=(t=AppFramework.getParmRef(actN),AppFramework.tryGetAct(t[0],t[1]));
        o$1==null?void 0:AppFramework.callFunction(null,null,o$1.$0.actFunction);
       }
     }
     function g$11()
     {
      return Doc.Element("div",[],[]);
     }
     return Doc.BindView(function(x)
     {
      return g$11(f$17(x));
     },extractText(trigger));
    };
   };
  });
  SC$2.trigActChange=AppFramework.depWithExtracts(function($1,$2,extractText)
  {
   return function(trigger)
   {
    return function(actN)
    {
     var v,prior;
     function f$17(a$1)
     {
      var o$1,t;
      if(a$1===null)
       ;
      else
       {
        o$1=(t=AppFramework.getParmRef(actN),AppFramework.tryGetAct(t[0],t[1]));
        o$1==null?void 0:AppFramework.callFunction(null,null,o$1.$0.actFunction);
       }
     }
     function g$11()
     {
      return"";
     }
     return Doc.TextView(View.Map(function(x)
     {
      return g$11(f$17(x));
     },(v=extractText(trigger),(prior=[Var$1.Create$1(null)],(View.Sink(function(v$1)
     {
      if(!Unchecked.Equals(prior[0].Get(),v$1))
       prior[0].Set(v$1);
     },v),prior[0].get_View())))));
    };
   };
  });
  SC$2.callAction0=AppFramework.depWithExtracts(function($1,$2,$3)
  {
   var $4;
   $4=[$1,$2,$3];
   return Runtime$1.Curried(f$9,3,[$4]);
  });
  SC$2.select=AppFramework.depWithExtracts(function(extractAts,$1,extractText)
  {
   return Runtime$1.Curried3(function(attrs,none,vals)
   {
    function f$17(_var)
    {
     var valsW,varO;
     valsW=View.Map(function($2)
     {
      return List.ofSeq(Strings.SplitChars($2,[";"],0));
     },extractText(vals));
     varO=new FromView.New(View.Map2(function($2,$3)
     {
      return Seq.contains(Strings.Trim($2),$3)?{
       $:1,
       $0:Strings.Trim($2)
      }:null;
     },_var.get_View(),valsW),function(a$1)
     {
      var s;
      if(a$1!=null&&a$1.$==1)
       {
        s=a$1.$0;
        View.Get(function(vs)
        {
         if(Seq.contains(s,vs))
          _var.Set(s);
        },valsW);
       }
      else
       _var.Set("");
     });
     return Doc.SelectDynOptional(extractAts(attrs),none,Global.id,valsW,varO);
    }
    return function(v)
    {
     return AppFramework.docWithVar(f$17,v);
    };
   });
  });
  AppFramework.addPlugIn((b$9=AppFramework.plugin(),b$9.AddAct(b$9.AddDoc(b$9.AddVar(b$9.Name(b$9.Yield(),"AppFramework"),"mainDocV",AppFramework.mainDocV()),"AppFwkClient",AppFramework.AppFwkClient()),"Hello",function()
  {
   self.alert("Hello!");
  })));
  AppFramework.addPlugIn((b$10=AppFramework.plugin(),b$10.AddViw(b$10.AddViw(b$10.AddViw(b$10.AddViw(b$10.AddViw(b$10.AddViw(b$10.AddQry(b$10.AddAct2(b$10.AddAct(b$10.AddAct2(b$10.AddAct2(b$10.AddDoc3(b$10.AddDoc3(b$10.AddDoc4(b$10.AddDoc2(b$10.AddDoc2(b$10.AddDoc2(b$10.AddDoc2(b$10.AddDoc1(b$10.AddDoc1(b$10.Name(b$10.Yield(),"AF"),"DocReference",AppFramework.docReference(),"DocName"),"HtmlDoc",AppFramework.htmlDoc(),"Html"),"TrigAction",AppFramework.trigAct(),"Trigger","Action"),"TrigChange",AppFramework.trigActChange(),"Trigger","Action"),"Input",AppFramework.input(),"Attrs","Var"),"TextArea",AppFramework.textArea(),"Attrs","Var"),"Select",AppFramework.select(),"Attrs","None","Vals","Var"),"InputFile",Runtime$1.Curried3(AppFramework.inputFile),"Attrs","Label","Action"),"InputLabel",AppFramework.inputLabel(),"Attrs","Label","Var"),"SetVar",function(v)
  {
   return function(v$1)
   {
    return AppFramework.setVar(v,v$1);
   };
  },"Var","Value"),"SetVarDirect",function(v)
  {
   return function(v$1)
   {
    return AppFramework.setVarDirect(v,v$1);
   };
  },"Var","from"),"Hello",function()
  {
   self.alert("Hello!");
  }),"DragSplitter",function(v)
  {
   return function(e)
   {
    return AppFramework.dragSplitter(v,e);
   };
  },"Var","dragEvent"),"getDocNames",function()
  {
   return Arrays.ofSeq(Seq.collect(function(plg)
   {
    return Seq.map(function(doc)
    {
     return plg.plgName.get_Id()+"."+doc.docName.get_Id();
    },plg.plgDocs);
   },(AppFramework.plugIns())["var"].Get()));
  }),"MouseX",View.Map(function(x)
  {
   return Global.String(f$10(x));
  },Mouse.get_Position())),"MouseY",View.Map(function(x)
  {
   return Global.String(f$11(x));
  },Mouse.get_Position())),"MouseLeft",View.Map(function(a$1)
  {
   return a$1?"1":"0";
  },Mouse.get_LeftPressed())),"MouseRight",View.Map(function(a$1)
  {
   return a$1?"1":"0";
  },Mouse.get_RightPressed())),"MouseMiddle",View.Map(function(a$1)
  {
   return a$1?"1":"0";
  },Mouse.get_MiddlePressed())),"Keyboard",View.Map(function($1)
  {
   return function($2)
   {
    return $1(Utils.printList(Utils.prettyPrint,$2));
   };
  }(Global.id),Keyboard.get_KeysPressed()))));
  SC$2.getMainDoc=Lazy.Create(function()
  {
   WcSplitter.init(Runtime$1.Curried(AppFramework.horizontal,5),Runtime$1.Curried(AppFramework.vertical,5));
   WcTabStrip.init().f();
   return AppFramework.mainDoc();
  });
  SC$2.htmlD=Depend.dependByName("AppFrameworkTemplate.html",AppFrameworkTemplate.html(),Global.id);
  SC$2.startWithHtmlD=(b$11=Depend.depend(),b$11.Delay(function()
  {
   return b$11.Bind(StartAppFramework.htmlD(),function(a$1)
   {
    return b$11.Return(function()
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
  SC$2.defPlg=AppFramework.defaultPlugIn();
  SC$2.defDoc=AppFramework.newDoc(new PlgElemName({
   $:0,
   $0:"_"
  }),Lazy.Create(Doc.get_Empty));
  SC$2.defVar=AppFramework.newVar(new PlgElemName({
   $:0,
   $0:"_"
  }),Var$1.Create$1(""));
  SC$2.defViw=AppFramework.newViw(new PlgElemName({
   $:0,
   $0:"_"
  }),View.Const(""));
  SC$2.defAct=AppFramework.newAct(new PlgElemName({
   $:0,
   $0:"_"
  }),Global.ignore);
  SC$2.pluginsList=LM.getDocFor(AppFramework.plugIns(),AppFrameworkUI$1.defPlg(),function()
  {
   return AppFrameworkUI$1.failCreate("plugin",void 0);
  },null,Runtime$1.Curried3(AppFrameworkUI$1.showPlugIn));
  SC$2.plgVarsList=LM.getDocForW(View.Map(function($1)
  {
   return $1.plgVars;
  },AppFrameworkUI$1.pluginsList().get_CurrentW()),function(plgVar)
  {
   return plgVar.varName;
  },AppFrameworkUI$1.defVar(),function()
  {
   return AppFrameworkUI$1.failCreate("Var",void 0);
  },null,Runtime$1.Curried3(AppFrameworkUI$1.showVar));
  SC$2.plgViewsList=LM.getDocForW(View.Map(function($1)
  {
   return $1.plgViews;
  },AppFrameworkUI$1.pluginsList().get_CurrentW()),function(plgViw)
  {
   return plgViw.viwName;
  },AppFrameworkUI$1.defViw(),function()
  {
   return AppFrameworkUI$1.failCreate("View",void 0);
  },null,Runtime$1.Curried3(AppFrameworkUI$1.showView));
  SC$2.plgActsList=LM.getDocForW(View.Map(function($1)
  {
   return $1.plgActions;
  },AppFrameworkUI$1.pluginsList().get_CurrentW()),function(plgAct)
  {
   return plgAct.actName;
  },AppFrameworkUI$1.defAct(),function()
  {
   return AppFrameworkUI$1.failCreate("Action",void 0);
  },null,Runtime$1.Curried3(AppFrameworkUI$1.showAct));
  SC$2.plgDocsList=LM.getDocForW(View.Map(function($1)
  {
   return $1.plgDocs;
  },AppFrameworkUI$1.pluginsList().get_CurrentW()),function(plgDoc)
  {
   return plgDoc.docName;
  },AppFrameworkUI$1.defDoc(),function()
  {
   return AppFrameworkUI$1.failCreate("Doc",void 0);
  },null,Runtime$1.Curried3(AppFrameworkUI$1.showDoc));
  SC$2.plugInAdded=AppFramework.addPlugIn((b$12=AppFramework.plugin(),b$12.Merge(b$12.Merge(b$12.Merge(b$12.Merge(b$12.Merge(b$12.Name(b$12.Yield(),"AppFrmkUI"),"plugIns_",AppFrameworkUI$1.pluginsList().PlugIn(function(x)
  {
   return g$5(f$12(x));
  },function(n)
  {
   return n.get_Id();
  })),"plgVars_",AppFrameworkUI$1.plgVarsList().PlugIn(function(x)
  {
   return g$6(f$13(x));
  },function(n)
  {
   return n.get_Id();
  })),"plgViews_",AppFrameworkUI$1.plgViewsList().PlugIn(function(x)
  {
   return g$7(f$14(x));
  },function(n)
  {
   return n.get_Id();
  })),"plgActs_",AppFrameworkUI$1.plgActsList().PlugIn(function(x)
  {
   return g$8(f$15(x));
  },function(n)
  {
   return n.get_Id();
  })),"plgDocs_",AppFrameworkUI$1.plgDocsList().PlugIn(function(x)
  {
   return g$9(f$16(x));
  },function(n)
  {
   return n.get_Id();
  }))));
  SC$2.splitSemiColon=(f$1=LayoutEngineModule.splitChar(";"),(g$1=function(s)
  {
   return Seq.filter(p$19,s);
  },function(x)
  {
   return g$1(f$1(x));
  }));
  SC$2.notEmpty=function(x)
  {
   return g$10(LayoutEngineModule.emptyLine(x));
  };
  SC$2.aV=Var$1.Create$1(4);
  SC$2.pa=NewLY.aV().get_View();
  SC$2.pb=6.2;
  SC$2.currentPlugInNameDef$1=new PlugInName({
   $:0,
   $0:"NewLYx"
  });
  SC$2.currentPlugInNameD$1=Depend.dependByName("currentPlugInName",NewLY.currentPlugInNameDef(),Global.id);
  SC$2.name=Var$1.Create$1("World");
  SC$2.enterName=(pf=AppFramework.op_Dereference(NewLY.checkName),(p={
   $:0,
   $0:NewLY.name().get_View()
  },P.New(Operators$1.op_BarGreaterGreater(pf.r,function(f$17)
  {
   return Fun.New(f$17,p);
  }))));
  SC$2.now=(pf$1=AppFramework.op_Dereference(function()
  {
   var n;
   n=new Global.Date(Date.now());
   return n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)+" "+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+":"+("00"+n.getMilliseconds()).slice(-3);
  }),(p$1={
   $:0,
   $0:NewLY.name().get_View()
  },P.New(Operators$1.op_BarGreaterGreater(pf$1.r,function(f$17)
  {
   return Fun.New(f$17,p$1);
  }))));
  SC$2.sayHello=(sayHello_0=(c=(vf=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(extractDoc)
  {
   var p$20;
   p$20={
    $:1,
    $0:[extractDoc("Hello @{name}!")]
   };
   return P.New(Operators$1.op_BarGreaterGreater(vf.r,function(f$17)
   {
    return Fun.New(f$17,p$20);
   }));
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{
     $:0,
     $0:View.Apply(aF.f.$0,View.Const(aF.p.$0))
    }:{
     $:0,
     $0:View.Apply(aF.f.$0,aF.p.$0)
    }:aF.p.$==0?{
     $:0,
     $0:View.Apply(View.Const(aF.f.$0),aF.p.$0)
    }:{
     $:1,
     $0:aF.f.$0(aF.p.$0)
    }),c$13.p));
   },c);
  },NewLY.enterName().r)),(a=(vf$1=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(extractDoc)
  {
   var p$20;
   p$20={
    $:1,
    $0:[extractDoc("How are you?")]
   };
   return P.New(Operators$1.op_BarGreaterGreater(vf$1.r,function(f$17)
   {
    return Fun.New(f$17,p$20);
   }));
  },AppFramework.extractDocD())),(c$1=(vf$2=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(aF)
  {
   var p$20;
   p$20={
    $:1,
    $0:[AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View.Apply(aF.f.$0,View.Const(aF.p.$0))
     }:{
      $:0,
      $0:View.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View.Apply(View.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    })]
   };
   return P.New(Operators$1.op_BarGreaterGreater(vf$2.r,function(f$17)
   {
    return Fun.New(f$17,p$20);
   }));
  },sayHello_0.r)),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View.Apply(aF.f.$0,View.Const(aF.p.$0))
     }:{
      $:0,
      $0:View.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View.Apply(View.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    }),c$13.p));
   },c$1);
  },a.r))));
  SC$2.aString=Var$1.Lens(NewLY.aV(),Global.String,function(a$1,v)
  {
   return Operators.toInt(Global.Number(v));
  });
  SC$2.main0=(pc=(pf$2=AppFramework.op_Dereference(function(a$1)
  {
   return function(b$19)
   {
    return NewLY.concat(a$1,b$19);
   };
  }),(p$2={
   $:0,
   $0:NewLY.aV().get_View()
  },P.New(Operators$1.op_BarGreaterGreater(pf$2.r,function(f$17)
  {
   return Fun.New(f$17,p$2);
  })))),(p$3={
   $:1,
   $0:3.2
  },P.New(Operators$1.op_BarGreaterGreater(pc.r,function(c$13)
  {
   return Fun.New(c$13.f.$==0?c$13.p.$==1?{
    $:0,
    $0:View.Apply(c$13.f.$0,View.Const(c$13.p.$0))
   }:{
    $:0,
    $0:View.Apply(c$13.f.$0,c$13.p.$0)
   }:c$13.p.$==0?{
    $:0,
    $0:View.Apply(View.Const(c$13.f.$0),c$13.p.$0)
   }:{
    $:1,
    $0:c$13.f.$0(c$13.p.$0)
   },p$3);
  }))));
  SC$2.main1=(pc$1=(vf$3=AppFramework.op_Dereference((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1("result = "+Utils.toSafe($2)+" "+Utils.toSafe($3));
  }))(Global.id)),AppFramework.bindWrap(function(aF)
  {
   var p$20;
   p$20=aF.f.$==0?aF.p.$==1?{
    $:0,
    $0:View.Apply(aF.f.$0,View.Const(aF.p.$0))
   }:{
    $:0,
    $0:View.Apply(aF.f.$0,aF.p.$0)
   }:aF.p.$==0?{
    $:0,
    $0:View.Apply(View.Const(aF.f.$0),aF.p.$0)
   }:{
    $:1,
    $0:aF.f.$0(aF.p.$0)
   };
   return P.New(Operators$1.op_BarGreaterGreater(vf$3.r,function(f$17)
   {
    return Fun.New(f$17,p$20);
   }));
  },NewLY.main0().r)),(p$4={
   $:1,
   $0:"main0"
  },P.New(Operators$1.op_BarGreaterGreater(pc$1.r,function(c$13)
  {
   return Fun.New(c$13.f.$==0?c$13.p.$==1?{
    $:0,
    $0:View.Apply(c$13.f.$0,View.Const(c$13.p.$0))
   }:{
    $:0,
    $0:View.Apply(c$13.f.$0,c$13.p.$0)
   }:c$13.p.$==0?{
    $:0,
    $0:View.Apply(View.Const(c$13.f.$0),c$13.p.$0)
   }:{
    $:1,
    $0:c$13.f.$0(c$13.p.$0)
   },p$4);
  }))));
  SC$2.main=(c$2=(c$3=(c$4=(c$5=(c$6=(c$7=(c$8=(c$9=(c$10=(vf$4=AppFramework.op_Dereference((Runtime$1.Curried3(Doc.Element))("h3")),AppFramework.bindWrap(function(extractAts)
  {
   var p$20;
   p$20={
    $:1,
    $0:extractAts("color:@{name}; background:red; click=@{AppFramework.Hello}")
   };
   return P.New(Operators$1.op_BarGreaterGreater(vf$4.r,function(f$17)
   {
    return Fun.New(f$17,p$20);
   }));
  },AppFramework.extractAtsD())),AppFramework.bindWrap(function(extractDoc)
  {
   var p$20;
   p$20={
    $:1,
    $0:[extractDoc("MAIN:")]
   };
   return P.New(Operators$1.op_BarGreaterGreater(c$10.r,function(c$13)
   {
    return Fun.New(c$13.f.$==0?c$13.p.$==1?{
     $:0,
     $0:View.Apply(c$13.f.$0,View.Const(c$13.p.$0))
    }:{
     $:0,
     $0:View.Apply(c$13.f.$0,c$13.p.$0)
    }:c$13.p.$==0?{
     $:0,
     $0:View.Apply(View.Const(c$13.f.$0),c$13.p.$0)
    }:{
     $:1,
     $0:c$13.f.$0(c$13.p.$0)
    },p$20);
   }));
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{
     $:0,
     $0:View.Apply(aF.f.$0,View.Const(aF.p.$0))
    }:{
     $:0,
     $0:View.Apply(aF.f.$0,aF.p.$0)
    }:aF.p.$==0?{
     $:0,
     $0:View.Apply(View.Const(aF.f.$0),aF.p.$0)
    }:{
     $:1,
     $0:aF.f.$0(aF.p.$0)
    }),c$13.p));
   },c$9);
  },NewLY.main1().r)),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{
     $:0,
     $0:View.Apply(aF.f.$0,View.Const(aF.p.$0))
    }:{
     $:0,
     $0:View.Apply(aF.f.$0,aF.p.$0)
    }:aF.p.$==0?{
     $:0,
     $0:View.Apply(View.Const(aF.f.$0),aF.p.$0)
    }:{
     $:1,
     $0:aF.f.$0(aF.p.$0)
    }),c$13.p));
   },c$8);
  },NewLY.main1().r)),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(extractDoc(":"),c$13.p));
   },c$7);
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View.Apply(aF.f.$0,View.Const(aF.p.$0))
     }:{
      $:0,
      $0:View.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View.Apply(View.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    }),c$13.p));
   },c$6);
  },NewLY.sayHello().r)),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(extractDoc(":"),c$13.p));
   },c$5);
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(extractDoc(" Más >> "),c$13.p));
   },c$4);
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View.Apply(aF.f.$0,View.Const(aF.p.$0))
     }:{
      $:0,
      $0:View.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View.Apply(View.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    }),c$13.p));
   },c$3);
  },NewLY.sayHello().r)),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(extractDoc(" <<"),c$13.p));
   },c$2);
  },AppFramework.extractDocD()));
  SC$2.main2=AppFramework.makeAViewDoc(function()
  {
   return Doc.Element("h4",[AttrModule.Dynamic("style",View.Map(function($1)
   {
    return"color:"+$1;
   },NewLY.name().get_View()))],[Doc.TextNode("MAIN2:"),Doc.TextView(NewLY.name().get_View())]);
  });
  SC$2.appFwk=(c$11=(vf$5=AppFramework.op_Dereference((Runtime$1.Curried3(Doc.Element))("div")),AppFramework.bindWrap(function(extractAts)
  {
   var p$20;
   p$20={
    $:1,
    $0:extractAts("color:@{name}")
   };
   return P.New(Operators$1.op_BarGreaterGreater(vf$5.r,function(f$17)
   {
    return Fun.New(f$17,p$20);
   }));
  },AppFramework.extractAtsD())),AppFramework.bindWrap(function(extractDoc)
  {
   var p$20;
   p$20={
    $:1,
    $0:[extractDoc("@{AppFramework.AppFwkClient}")]
   };
   return P.New(Operators$1.op_BarGreaterGreater(c$11.r,function(c$13)
   {
    return Fun.New(c$13.f.$==0?c$13.p.$==1?{
     $:0,
     $0:View.Apply(c$13.f.$0,View.Const(c$13.p.$0))
    }:{
     $:0,
     $0:View.Apply(c$13.f.$0,c$13.p.$0)
    }:c$13.p.$==0?{
     $:0,
     $0:View.Apply(View.Const(c$13.f.$0),c$13.p.$0)
    }:{
     $:1,
     $0:c$13.f.$0(c$13.p.$0)
    },p$20);
   }));
  },AppFramework.extractDocD()));
  SC$2.split=(c$12=(vf$6=AppFramework.op_Dereference(Runtime$1.Curried(LayoutEngineModule.variableSplitter,2,[false,0,50,100])),AppFramework.bindWrap(function(aF)
  {
   var p$20;
   p$20={
    $:1,
    $0:AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View.Apply(aF.f.$0,View.Const(aF.p.$0))
     }:{
      $:0,
      $0:View.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View.Apply(View.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    })
   };
   return P.New(Operators$1.op_BarGreaterGreater(vf$6.r,function(f$17)
   {
    return Fun.New(f$17,p$20);
   }));
  },NewLY.appFwk().r)),AppFramework.bindWrap(function(aF)
  {
   var p$20;
   p$20={
    $:1,
    $0:AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View.Apply(aF.f.$0,View.Const(aF.p.$0))
     }:{
      $:0,
      $0:View.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View.Apply(View.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    })
   };
   return P.New(Operators$1.op_BarGreaterGreater(c$12.r,function(c$13)
   {
    return Fun.New(c$13.f.$==0?c$13.p.$==1?{
     $:0,
     $0:View.Apply(c$13.f.$0,View.Const(c$13.p.$0))
    }:{
     $:0,
     $0:View.Apply(c$13.f.$0,c$13.p.$0)
    }:c$13.p.$==0?{
     $:0,
     $0:View.Apply(View.Const(c$13.f.$0),c$13.p.$0)
    }:{
     $:1,
     $0:c$13.f.$0(c$13.p.$0)
    },p$20);
   }));
  },NewLY.main().r));
  SC$2.split2=(pc$2=(vf$7=AppFramework.op_Dereference(Runtime$1.Curried(LayoutEngineModule.variableSplitter,2,[false,0,50,100])),AppFramework.bindWrap(function(aF)
  {
   var p$20;
   p$20={
    $:1,
    $0:AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View.Apply(aF.f.$0,View.Const(aF.p.$0))
     }:{
      $:0,
      $0:View.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View.Apply(View.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    })
   };
   return P.New(Operators$1.op_BarGreaterGreater(vf$7.r,function(f$17)
   {
    return Fun.New(f$17,p$20);
   }));
  },NewLY.appFwk().r)),(p$5={
   $:1,
   $0:NewLY.main2()
  },P.New(Operators$1.op_BarGreaterGreater(pc$2.r,function(c$13)
  {
   return Fun.New(c$13.f.$==0?c$13.p.$==1?{
    $:0,
    $0:View.Apply(c$13.f.$0,View.Const(c$13.p.$0))
   }:{
    $:0,
    $0:View.Apply(c$13.f.$0,c$13.p.$0)
   }:c$13.p.$==0?{
    $:0,
    $0:View.Apply(View.Const(c$13.f.$0),c$13.p.$0)
   }:{
    $:1,
    $0:c$13.f.$0(c$13.p.$0)
   },p$5);
  }))));
  SC$2.nodeRefToDocD=(b$13=Depend.depend(),b$13.Delay(function()
  {
   return b$13.Bind(Extract0.getDocFromTextTypesD(),function(a$1)
   {
    function f$17(a$2)
    {
     var $1;
     return(a$2.$==1?($1=a$2.$0.$0,false):a$2.$==2?($1=a$2.$0.$0,false):a$2.$==3?($1=a$2.$0.$0,false):true)?List.map(NewLY.textValToTextType,a$2.$0):List.ofArray([NewLY.itemRefToTextType($1)]);
    }
    return b$13.Return(function(x)
    {
     return a$1(f$17(x));
    });
   });
  }));
  SC$2.varRefToVarD=(b$14=Depend.depend(),b$14.Delay(function()
  {
   return b$14.Bind(NewLY.currentPlugInNameD(),function(a$1)
   {
    return b$14.Return(function(a$2)
    {
     var r,o$1,o$2,t;
     r=NewLY.itemRefToString(a$2.$0);
     o$1=(o$2=(t=(AppFramework.splitName(a$1))(r),AppFramework.tryGetVar(t[0],t[1])),o$2==null?null:{
      $:1,
      $0:o$2.$0.varVar
     });
     return o$1==null?new FromView.New(View.Const((function($1)
     {
      return function($2)
      {
       return $1("Could not find var "+Utils.toSafe($2));
      };
     }(Global.id))(r)),Global.ignore):o$1.$0;
    });
   });
  }));
  SC$2.actRefToActD=(b$15=Depend.depend(),b$15.Delay(function()
  {
   return b$15.Bind(NewLY.currentPlugInNameD(),function(a$1)
   {
    return b$15.Return(function(a$2)
    {
     var r,o$1,t;
     r=NewLY.itemRefToString(a$2.$0);
     o$1=(t=(AppFramework.splitName(a$1))(r),AppFramework.tryGetAct(t[0],t[1]));
     return o$1==null?AppFramework.newAct(new PlgElemName({
      $:0,
      $0:r
     }),function()
     {
      ((function($1)
      {
       return function($2)
       {
        return $1("Could not find action "+Utils.toSafe($2));
       };
      }(function(s)
      {
       console.log(s);
      }))(r));
     }):o$1.$0;
    });
   });
  }));
  SC$2.getParamD=(b$16=Depend.depend(),b$16.Delay(function()
  {
   return b$16.Bind(NewLY.currentPlugInNameD(),function(a$1)
   {
    return b$16.Bind(Extract0.getTextValFromSeqD(),function(a$2)
    {
     return b$16.Return(function(p$20)
     {
      var refToSplit,g$11,r,f$17,m,g$12,t,r$1,f$18,m$1,g$13,g$14,t$1,r$2,f$19,m$2,g$15,g$16,t$2,r$3,f$20,m$3,g$17,t$3;
      function f$21(d$4)
      {
       return d$4.docDoc;
      }
      function d()
      {
       return(function($1)
       {
        return function($2)
        {
         return $1("missing ref Doc "+LayoutEngine_GeneratedPrintf.p$1($2));
        };
       }(Global.id))(r);
      }
      function f$22(v)
      {
       return v.varVar.get_View();
      }
      function d$1()
      {
       return View.Const((function($1)
       {
        return function($2)
        {
         return $1("missing ref Var "+LayoutEngine_GeneratedPrintf.p$1($2));
        };
       }(Global.id))(r$1));
      }
      function f$23(v)
      {
       return v.viwView;
      }
      function d$2()
      {
       return View.Const((function($1)
       {
        return function($2)
        {
         return $1("missing ref View "+LayoutEngine_GeneratedPrintf.p$1($2));
        };
       }(Global.id))(r$2));
      }
      function f$24(v)
      {
       return v.actFunction;
      }
      function d$3()
      {
       return(function($1)
       {
        return function($2)
        {
         return $1("missing ref Action "+LayoutEngine_GeneratedPrintf.p$1($2));
        };
       }(Global.id))(r$3);
      }
      refToSplit=(g$11=AppFramework.splitName(a$1),function(x)
      {
       return g$11(NewLY.itemRefToString(x));
      });
      return p$20.$==1?(r=p$20.$0.$0,View.Map((f$17=(m=function(x)
      {
       var v;
       v=f$21(x);
       return v;
      },function(o$1)
      {
       return o$1==null?null:{
        $:1,
        $0:m(o$1.$0)
       };
      }),(g$12=function(o$1)
      {
       return o$1==null?d():o$1.$0;
      },function(x)
      {
       return g$12(f$17(x));
      })),(t=refToSplit(r),AppFramework.tryGetDocW(t[0],t[1])))):p$20.$==2?(r$1=p$20.$0.$0,View.Bind((f$18=(m$1=(g$13=function(a$3)
      {
       return View.Map(Global.id,a$3);
      },function(x)
      {
       return g$13(f$22(x));
      }),function(o$1)
      {
       return o$1==null?null:{
        $:1,
        $0:m$1(o$1.$0)
       };
      }),(g$14=function(o$1)
      {
       return o$1==null?d$1():o$1.$0;
      },function(x)
      {
       return g$14(f$18(x));
      })),(t$1=refToSplit(r$1),AppFramework.tryGetVarW(t$1[0],t$1[1])))):p$20.$==3?(r$2=p$20.$0.$0,View.Bind((f$19=(m$2=(g$15=function(a$3)
      {
       return View.Map(Global.id,a$3);
      },function(x)
      {
       return g$15(f$23(x));
      }),function(o$1)
      {
       return o$1==null?null:{
        $:1,
        $0:m$2(o$1.$0)
       };
      }),(g$16=function(o$1)
      {
       return o$1==null?d$2():o$1.$0;
      },function(x)
      {
       return g$16(f$19(x));
      })),(t$2=refToSplit(r$2),AppFramework.tryGetViwW(t$2[0],t$2[1])))):p$20.$==4?(r$3=p$20.$0.$0,View.Map((f$20=(m$3=function(x)
      {
       var v;
       v=f$24(x);
       return v;
      },function(o$1)
      {
       return o$1==null?null:{
        $:1,
        $0:m$3(o$1.$0)
       };
      }),(g$17=function(o$1)
      {
       return o$1==null?d$3():o$1.$0;
      },function(x)
      {
       return g$17(f$20(x));
      })),(t$3=refToSplit(r$3),AppFramework.tryGetActW(t$3[0],t$3[1])))):View.Map(Global.id,Val.toView(a$2(List.map(NewLY.textValToTextType,p$20.$0))));
     });
    });
   });
  }));
  SC$2.getParam2D=(b$17=Depend.depend(),b$17.Delay(function()
  {
   return b$17.Bind(NewLY.currentPlugInNameD(),function(a$1)
   {
    return b$17.Bind(Extract0.getTextValFromSeqD(),function()
    {
     return b$17.Return(function(p$20)
     {
      var toAbs,f$17,g$11,$1;
      toAbs=(f$17=NewLY.itemRefToAbsolute(a$1.get_Id()),(g$11=function($2)
      {
       return function($3)
       {
        return $2("@{"+Utils.toSafe($3)+"}");
       };
      }(Global.id),function(x)
      {
       return g$11(f$17(x));
      }));
      return(p$20.$==3?($1=p$20.$0.$0,false):p$20.$==1?($1=p$20.$0.$0,false):p$20.$==2?($1=p$20.$0.$0,false):p$20.$==4?($1=p$20.$0.$0,false):true)?Strings.concat("",Seq.map(function(a$2)
      {
       var $2;
       return(a$2.$==1?($2=a$2.$0.$0,false):a$2.$==3?($2=a$2.$0.$0,false):a$2.$==4?($2=a$2.$0.$0,false):a$2.$==2?($2=a$2.$0.$0,false):true)?a$2.$0:toAbs($2);
      },p$20.$0)):toAbs($1);
     });
    });
   });
  }));
  SC$2.getParamTextD=(b$18=Depend.depend(),b$18.Delay(function()
  {
   return b$18.Bind(NewLY.currentPlugInNameD(),function(a$1)
   {
    return b$18.Bind(Extract0.getTextValFromSeqD(),function(a$2)
    {
     return b$18.Return(function(p$20)
     {
      return function(f$17)
      {
       var refToSplit,g$11,o$1,t,o$2,t$1,o$3,t$2,o$4,t$3;
       refToSplit=(g$11=AppFramework.splitName(a$1),function(x)
       {
        return g$11(NewLY.itemRefToString(x));
       });
       return p$20.$==1?(o$1=(t=refToSplit(p$20.$0.$0),AppFramework.tryGetDoc(t[0],t[1])),o$1==null?null:f$17(o$1.$0.docDoc)):p$20.$==2?(o$2=(t$1=refToSplit(p$20.$0.$0),AppFramework.tryGetVar(t$1[0],t$1[1])),o$2==null?null:View.Get(function(x)
       {
        return f$17(Global.id(x));
       },o$2.$0.varVar.get_View())):p$20.$==3?(o$3=(t$2=refToSplit(p$20.$0.$0),AppFramework.tryGetViw(t$2[0],t$2[1])),o$3==null?null:View.Get(function(x)
       {
        return f$17(Global.id(x));
       },o$3.$0.viwView)):p$20.$==4?(o$4=(t$3=refToSplit(p$20.$0.$0),AppFramework.tryGetAct(t$3[0],t$3[1])),o$4==null?null:f$17(o$4.$0.actFunction)):View.Get(function(x)
       {
        return f$17(Global.id(x));
       },Val.toView(a$2(List.map(NewLY.textValToTextType,p$20.$0))));
      };
     });
    });
   });
  }));
  SC$2.initVal="-<InitValue>-";
  SC$2.defVarM0=(p$6=(cache=new Dictionary.New$5(),[[checkO,function($1)
  {
   return function($2)
   {
    return getOrAdd$13($1,$2);
   };
  }],function()
  {
   cache.Clear();
  }]),(getOrAdd=p$6[0][1],[function(p$20)
  {
   return(getOrAdd(p$20))(function($1)
   {
    return NewLY.defVar($1[0],$1[1],$1[2]);
   });
  },p$6[1]]))[0];
  SC$2.defDocFM=(p$7=(cache$1=new Dictionary.New$5(),[[checkO$1,function($1)
  {
   return function($2)
   {
    return getOrAdd$14($1,$2);
   };
  }],function()
  {
   cache$1.Clear();
  }]),(getOrAdd$1=p$7[0][1],[function(p$20)
  {
   return(getOrAdd$1(p$20))(function($1)
   {
    return NewLY.defDocF($1[0],$1[1],$1[2],$1[3]);
   });
  },p$7[1]]))[0];
  SC$2.defActionM=(p$8=(cache$2=new Dictionary.New$5(),[[checkO$2,function($1)
  {
   return function($2)
   {
    return getOrAdd$15($1,$2);
   };
  }],function()
  {
   cache$2.Clear();
  }]),(getOrAdd$2=p$8[0][1],[function(p$20)
  {
   return(getOrAdd$2(p$20))(function($1)
   {
    return NewLY.defAction($1[0],$1[1],$1[2],$1[3]);
   });
  },p$8[1]]))[0];
  SC$2.defActionsM=(p$9=(cache$3=new Dictionary.New$5(),[[checkO$3,function($1)
  {
   return function($2)
   {
    return getOrAdd$16($1,$2);
   };
  }],function()
  {
   cache$3.Clear();
  }]),(getOrAdd$3=p$9[0][1],[function(p$20)
  {
   return(getOrAdd$3(p$20))(function($1)
   {
    return NewLY.defActions($1[0],$1[1],$1[2]);
   });
  },p$9[1]]))[0];
  SC$2.defButtonM=(p$10=(cache$4=new Dictionary.New$5(),[[checkO$4,function($1)
  {
   return function($2)
   {
    return getOrAdd$17($1,$2);
   };
  }],function()
  {
   cache$4.Clear();
  }]),(getOrAdd$4=p$10[0][1],[function(p$20)
  {
   return(getOrAdd$4(p$20))(function($1)
   {
    return NewLY.defButton($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$10[1]]))[0];
  SC$2.defInputM=(p$11=(cache$5=new Dictionary.New$5(),[[checkO$5,function($1)
  {
   return function($2)
   {
    return getOrAdd$18($1,$2);
   };
  }],function()
  {
   cache$5.Clear();
  }]),(getOrAdd$5=p$11[0][1],[function(p$20)
  {
   return(getOrAdd$5(p$20))(function($1)
   {
    return NewLY.defInput($1[0],$1[1],$1[2],$1[3]);
   });
  },p$11[1]]))[0];
  SC$2.defTextAreaM=(p$12=(cache$6=new Dictionary.New$5(),[[checkO$6,function($1)
  {
   return function($2)
   {
    return getOrAdd$19($1,$2);
   };
  }],function()
  {
   cache$6.Clear();
  }]),(getOrAdd$6=p$12[0][1],[function(p$20)
  {
   return(getOrAdd$6(p$20))(function($1)
   {
    return NewLY.defTextArea($1[0],$1[1],$1[2],$1[3]);
   });
  },p$12[1]]))[0];
  SC$2.defElementM=(p$13=(cache$7=new Dictionary.New$5(),[[checkO$7,function($1)
  {
   return function($2)
   {
    return getOrAdd$20($1,$2);
   };
  }],function()
  {
   cache$7.Clear();
  }]),(getOrAdd$7=p$13[0][1],[function(p$20)
  {
   return(getOrAdd$7(p$20))(function($1)
   {
    return NewLY.defElement($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$13[1]]))[0];
  SC$2.defConcatM=(p$14=(cache$8=new Dictionary.New$5(),[[checkO$8,function($1)
  {
   return function($2)
   {
    return getOrAdd$21($1,$2);
   };
  }],function()
  {
   cache$8.Clear();
  }]),(getOrAdd$8=p$14[0][1],[function(p$20)
  {
   return(getOrAdd$8(p$20))(function($1)
   {
    return NewLY.defConcat($1[0],$1[1],$1[2]);
   });
  },p$14[1]]))[0];
  SC$2.defViewM=(p$15=(cache$9=new Dictionary.New$5(),[[checkO$9,function($1)
  {
   return function($2)
   {
    return getOrAdd$22($1,$2);
   };
  }],function()
  {
   cache$9.Clear();
  }]),(getOrAdd$9=p$15[0][1],[function(p$20)
  {
   return(getOrAdd$9(p$20))(function($1)
   {
    return NewLY.defView($1[0],$1[1],$1[2]);
   });
  },p$15[1]]))[0];
  SC$2.defViewJSM=(p$16=(cache$10=new Dictionary.New$5(),[[checkO$10,function($1)
  {
   return function($2)
   {
    return getOrAdd$23($1,$2);
   };
  }],function()
  {
   cache$10.Clear();
  }]),(getOrAdd$10=p$16[0][1],[function(p$20)
  {
   return(getOrAdd$10(p$20))(function($1)
   {
    return NewLY.defViewJS($1[0],$1[1],$1[2]);
   });
  },p$16[1]]))[0];
  SC$2.defSplitterM=(p$17=(cache$11=new Dictionary.New$5(),[[checkO$11,function($1)
  {
   return function($2)
   {
    return getOrAdd$24($1,$2);
   };
  }],function()
  {
   cache$11.Clear();
  }]),(getOrAdd$11=p$17[0][1],[function(p$20)
  {
   return(getOrAdd$11(p$20))(function($1)
   {
    return NewLY.defSplitter($1[0],$1[1],$1[2],$1[3],$1[4],$1[5]);
   });
  },p$17[1]]))[0];
  SC$2.defTemplateM=(p$18=(cache$12=new Dictionary.New$5(),[[checkO$12,function($1)
  {
   return function($2)
   {
    return getOrAdd$25($1,$2);
   };
  }],function()
  {
   cache$12.Clear();
  }]),(getOrAdd$12=p$18[0][1],[function(p$20)
  {
   return(getOrAdd$12(p$20))(function($1)
   {
    return NewLY.defTemplate($1[0],$1[1],$1[2]);
   });
  },p$18[1]]))[0];
  o=AppFramework.tryGetPlugIn(AppFramework.defPlugInName());
  o==null?void 0:o.$0.plgActions.Append(AppFramework.newActF(new PlgElemName({
   $:0,
   $0:"AddLayout"
  }),{
   $:2,
   $0:function(n)
   {
    return function(l)
    {
     return NewLY.addNewLayoutAct(n,l);
    };
   },
   $1:"[Name]",
   $2:"[Layout]"
  }));
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
 Seq.choose=function(f,s)
 {
  return Seq.collect(function(x)
  {
   var m;
   m=f(x);
   return m==null?T.Empty:List.ofArray([m.$0]);
  },s);
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
 Seq.isEmpty=function(s)
 {
  var e;
  e=Enumerator.Get(s);
  try
  {
   return!e.MoveNext();
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Seq.collect=function(f,s)
 {
  return Seq.concat(Seq.map(f,s));
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
 Seq.init=function(n,f)
 {
  return Seq.take(n,Seq.initInfinite(f));
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
 Seq.indexed=function(s)
 {
  return Seq.mapi(function($1,$2)
  {
   return[$1,$2];
  },s);
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
 Seq.distinct=function(s)
 {
  return Seq.distinctBy(Global.id,s);
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
 Seq.mapi=function(f,s)
 {
  return Seq.map2(f,Seq.initInfinite(Global.id),s);
 };
 Seq.distinctBy=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var o,seen;
    o=Enumerator.Get(s);
    seen=new HashSet.New$3();
    return new T$1.New(null,null,function(e)
    {
     var cur,has;
     if(o.MoveNext())
      {
       cur=o.Current();
       has=seen.Add(f(cur));
       while(!has&&o.MoveNext())
        {
         cur=o.Current();
         has=seen.Add(f(cur));
        }
       return has&&(e.c=cur,true);
      }
     else
      return false;
    },function()
    {
     o.Dispose();
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
 Seq.compareWith=function(f,s1,s2)
 {
  var e1,$1,e2,r,loop;
  e1=Enumerator.Get(s1);
  try
  {
   e2=Enumerator.Get(s2);
   try
   {
    r=0;
    loop=true;
    while(loop&&r===0)
     if(e1.MoveNext())
      r=e2.MoveNext()?f(e1.Current(),e2.Current()):1;
     else
      if(e2.MoveNext())
       r=-1;
      else
       loop=false;
    $1=r;
   }
   finally
   {
    if(typeof e2=="object"&&"Dispose"in e2)
     e2.Dispose();
   }
   return $1;
  }
  finally
  {
   if(typeof e1=="object"&&"Dispose"in e1)
    e1.Dispose();
  }
 };
 Seq.forall2=function(p,s1,s2)
 {
  return!Seq.exists2(function($1,$2)
  {
   return!p($1,$2);
  },s1,s2);
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
 Seq.exists2=function(p,s1,s2)
 {
  var e1,$1,e2,r;
  e1=Enumerator.Get(s1);
  try
  {
   e2=Enumerator.Get(s2);
   try
   {
    r=false;
    while(!r&&e1.MoveNext()&&e2.MoveNext())
     r=p(e1.Current(),e2.Current());
    $1=r;
   }
   finally
   {
    if(typeof e2=="object"&&"Dispose"in e2)
     e2.Dispose();
   }
   return $1;
  }
  finally
  {
   if(typeof e1=="object"&&"Dispose"in e1)
    e1.Dispose();
  }
 };
 Seq.findIndex=function(p,s)
 {
  var m;
  m=Seq.tryFindIndex(p,s);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 Seq.cache=function(s)
 {
  var cache,o;
  cache=[];
  o=[Enumerator.Get(s)];
  return{
   GetEnumerator:function()
   {
    return new T$1.New(0,null,function(e)
    {
     var en;
     return e.s<cache.length?(e.c=cache[e.s],e.s=e.s+1,true):(en=o[0],Unchecked.Equals(en,null)?false:en.MoveNext()?(e.s=e.s+1,e.c=en.Current(),cache.push(e.c),true):(en.Dispose(),o[0]=null,false));
    },void 0);
   }
  };
 };
 Seq.groupBy=function(f,s)
 {
  return Seq.delay(function()
  {
   return Arrays.groupBy(f,Arrays.ofSeq(s));
  });
 };
 Seq.unfold=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    return new T$1.New(s,null,function(e)
    {
     var m;
     m=f(e.s);
     return m==null?false:(e.c=m.$0[0],e.s=m.$0[1],true);
    },void 0);
   }
  };
 };
 Seq.nth=function(index,s)
 {
  var pos,e;
  if(index<0)
   Operators.FailWith("negative index requested");
  pos=-1;
  e=Enumerator.Get(s);
  try
  {
   while(pos<index)
    {
     !e.MoveNext()?Seq.insufficient():void 0;
     pos=pos+1;
    }
   return e.Current();
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Seq.skip=function(n,s)
 {
  return{
   GetEnumerator:function()
   {
    var o;
    o=Enumerator.Get(s);
    return new T$1.New(true,null,function(e)
    {
     var i,$1;
     if(e.s)
      {
       for(i=1,$1=n;i<=$1;i++)if(!o.MoveNext())
        Seq.insufficient();
       e.s=false;
      }
     else
      null;
     return o.MoveNext()&&(e.c=o.Current(),true);
    },function()
    {
     o.Dispose();
    });
   }
  };
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
 Seq.forall=function(p,s)
 {
  return!Seq.exists(function(x)
  {
   return!p(x);
  },s);
 };
 Seq.sortBy=function(f,s)
 {
  return Seq.delay(function()
  {
   var array;
   array=Arrays.ofSeq(s);
   Arrays.sortInPlaceBy(f,array);
   return array;
  });
 };
 Seq.seqEmpty=function()
 {
  return Operators.FailWith("The input sequence was empty.");
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
 T=List.T=Runtime$1.Class({
  get_Item:function(x)
  {
   return Seq.nth(x,this);
  },
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
 Arrays.get=function(arr,n)
 {
  Arrays.checkBounds(arr,n);
  return arr[n];
 };
 Arrays.length=function(arr)
 {
  return arr.dims===2?arr.length*arr.length:arr.length;
 };
 Arrays.checkBounds=function(arr,n)
 {
  if(n<0||n>=arr.length)
   Operators.FailWith("Index was outside the bounds of the array.");
 };
 Arrays.set=function(arr,n,x)
 {
  Arrays.checkBounds(arr,n);
  arr[n]=x;
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
 CEBuilder=State.CEBuilder=Runtime$1.Class({},Obj,CEBuilder);
 CEBuilder.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },CEBuilder);
 Builder=Result.Builder=Runtime$1.Class({},Obj,Builder);
 Builder.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },Builder);
 Result.result=function()
 {
  SC$2.$cctor();
  return SC$2.result;
 };
 Result.errorf=function(fmt)
 {
  return fmt(Library.Error);
 };
 DependBuilder=Depend.DependBuilder=Runtime$1.Class({
  Delay:function(f)
  {
   return f();
  },
  Bind:function(m,f)
  {
   return Depend.bind(f,m);
  },
  Return:function(v)
  {
   return Depend.rtn(v);
  }
 },Obj,DependBuilder);
 DependBuilder.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },DependBuilder);
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
 String.left=function(n,s)
 {
  return Library["String.Left"](s,n);
 };
 String.trim=function(s)
 {
  return Strings.Trim(s);
 };
 String.unindentStr=function()
 {
  SC$2.$cctor();
  return SC$2.unindentStr;
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
 Strings.concat=function(separator,strings)
 {
  return Arrays.ofSeq(strings).join(separator);
 };
 Strings.SplitChars=function(s,sep,opts)
 {
  return Strings.Split(s,new Global.RegExp("["+Strings.RegexEscape(sep.join(""))+"]"),opts);
 };
 Strings.Trim=function(s)
 {
  return s.replace(new Global.RegExp("^\\s+"),"").replace(new Global.RegExp("\\s+$"),"");
 };
 Strings.StartsWith=function(t,s)
 {
  return t.substring(0,s.length)==s;
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
 Strings.SplitWith=function(str,pat)
 {
  return str.split(pat);
 };
 Strings.ReplaceOnce=function(string,search,replace)
 {
  return string.replace(search,replace);
 };
 Strings.Substring=function(s,ix,ct)
 {
  return s.substr(ix,ct);
 };
 Strings.forall=function(f,s)
 {
  return Seq.forall(f,Strings.protect(s));
 };
 Strings.replicate=function(count,s)
 {
  return Arrays.create(count,s).join("");
 };
 Strings.protect=function(s)
 {
  return s===null?"":s;
 };
 Strings.SplitStrings=function(s,sep,opts)
 {
  return Strings.Split(s,new Global.RegExp(Strings.concat("|",Arrays.map(Strings.RegexEscape,sep))),opts);
 };
 Slice.array=function(source,start,finish)
 {
  return start==null?finish!=null&&finish.$==1?source.slice(0,finish.$0+1):[]:finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);
 };
 Slice.string=function(source,start,finish)
 {
  return start==null?finish!=null&&finish.$==1?source.slice(0,finish.$0+1):"":finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);
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
  SC$2.$cctor();
  return SC$2.parseDateO;
 };
 ParseO.parseIntO=function()
 {
  SC$2.$cctor();
  return SC$2.parseIntO;
 };
 ParseO.parseInt64O=function()
 {
  SC$2.$cctor();
  return SC$2.parseInt64O;
 };
 ParseO.parseSingleO=function()
 {
  SC$2.$cctor();
  return SC$2.parseSingleO;
 };
 ParseO.parseDoubleO=function()
 {
  SC$2.$cctor();
  return SC$2.parseDoubleO;
 };
 ParseO.parseGuidO=function()
 {
  SC$2.$cctor();
  return SC$2.parseGuidO;
 };
 ParseO.Double=function()
 {
  SC$2.$cctor();
  return SC$2["|Double|_|"];
 };
 ParseO.Int=function()
 {
  SC$2.$cctor();
  return SC$2["|Int|_|"];
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
        if(a instanceof Date&&b instanceof Date)
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
           if(a instanceof Date&&b instanceof Date)
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
 Numeric.TryParseInt32=function(s,r)
 {
  return Numeric.TryParse(s,-2147483648,2147483647,r);
 };
 Numeric.TryParseInt64=function(s,r)
 {
  return Numeric.TryParse(s,-9223372036854775808,9223372036854775807,r);
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
  self.FsRootDll.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New.call(_this);
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
 Doc=UI.Doc=Runtime$1.Class({},Obj,Doc);
 Doc.get_Empty=function()
 {
  return Doc.Mk(null,View.Const());
 };
 Doc.Concat=function(xs)
 {
  var x;
  x=Array.ofSeqNonCopying(xs);
  return Array.TreeReduce(Doc.get_Empty(),Doc.Append,x);
 };
 Doc.Verbatim=function(html)
 {
  var m;
  return Doc.Mk(Array.MapTreeReduce(function(n)
  {
   return Unchecked.Equals(n.nodeType,Node.TEXT_NODE)?{
    $:5,
    $0:n
   }:{
    $:1,
    $0:Docs.CreateElemNode(n,Attrs.EmptyAttr(),null)
   };
  },null,function(x,y)
  {
   return{
    $:0,
    $0:x,
    $1:y
   };
  },(m=$.parseHTML(html),Unchecked.Equals(m,null)?[]:m)),View.Const());
 };
 Doc.Element=function(name,attr$1,children)
 {
  var a,a$1;
  a=AttrProxy.Concat(attr$1);
  a$1=Doc.Concat(children);
  return Elt.New(DomUtility.CreateElement(name),a,a$1);
 };
 Doc.Mk=function(node,updates)
 {
  return new Doc.New(node,updates);
 };
 Doc.TextNode=function(v)
 {
  return Doc.Mk({
   $:5,
   $0:DomUtility.CreateText(v)
  },View.Const());
 };
 Doc.Append=function(a,b)
 {
  return Doc.Mk({
   $:0,
   $0:a.docNode,
   $1:b.docNode
  },View.Map2Unit(a.updates,b.updates));
 };
 Doc.BindView=function(f,view)
 {
  return Doc.EmbedView(View.Map(f,view));
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
 Doc.SelectDynOptional=function(attrs,noneText,show,vOptions,current)
 {
  return Doc.SelectDyn(attrs,function(a)
  {
   return a!=null&&a.$==1?show(a.$0):noneText;
  },View.Map(function(options)
  {
   return new T({
    $:1,
    $0:null,
    $1:List.map(function(a)
    {
     return{
      $:1,
      $0:a
     };
    },options)
   });
  },vOptions),current);
 };
 Doc.RunAppend=function(parent,doc)
 {
  var rdelim;
  rdelim=self.document.createTextNode("");
  parent.appendChild(rdelim);
  Doc.RunBefore(rdelim,doc);
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
 Doc.InputInternal=function(elemTy,attr$1)
 {
  var el;
  el=DomUtility.CreateElement(elemTy);
  return Elt.New(el,AttrProxy.Concat(attr$1(el)),Doc.get_Empty());
 };
 Doc.SelectDyn=function(attrs,show,vOptions,current)
 {
  return Doc.SelectImpl(attrs,show,function(options)
  {
   function a(i,o)
   {
    return Doc.Element("option",List.ofArray([AttrProxy.Create("value",Global.String(i))]),List.ofArray([Doc.TextNode(show(o))]));
   }
   return Doc.Convert(function($1)
   {
    return a($1[0],$1[1]);
   },View.Map(function(l)
   {
    options[0]=l;
    return Seq.mapi(function(i,x)
    {
     return[i,x];
    },l);
   },vOptions));
  },current);
 };
 Doc.RunBefore=function(rdelim,doc)
 {
  var ldelim;
  ldelim=self.document.createTextNode("");
  rdelim.parentNode.insertBefore(ldelim,rdelim);
  Doc.RunBetween(ldelim,rdelim,doc);
 };
 Doc.Convert=function(render,view)
 {
  return Doc.Flatten(View.MapSeqCached(render,view));
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
 Doc.SelectImpl=function(attrs,show,optionElements,current)
 {
  var options,el,selectedItemAttr,x;
  function getIndex(el$1)
  {
   return el$1.selectedIndex;
  }
  function setIndex(el$1,i)
  {
   el$1.selectedIndex=i;
  }
  function getSelectedItem(el$1)
  {
   var i;
   i=getIndex(el$1);
   return options[0].get_Item(i);
  }
  function itemIndex(x$1)
  {
   return Seq.findIndex(function(y)
   {
    return Unchecked.Equals(x$1,y);
   },options[0]);
  }
  function setSelectedItem(el$1,item)
  {
   return setIndex(el$1,itemIndex(item));
  }
  options=[T.Empty];
  el=DomUtility.CreateElement("select");
  selectedItemAttr=AttrModule.DynamicCustom(function($1)
  {
   return function($2)
   {
    return setSelectedItem($1,$2);
   };
  },current.get_View());
  el.addEventListener("change",function()
  {
   current.UpdateMaybe(function(x$1)
   {
    var y;
    y=getSelectedItem(el);
    return Unchecked.Equals(x$1,y)?null:{
     $:1,
     $0:y
    };
   });
  },false);
  return Elt.New(el,(x=AttrProxy.Append(selectedItemAttr,AttrProxy.Concat(attrs)),AttrProxy.Append(AttrModule.OnAfterRender(function(el$1)
  {
   setSelectedItem(el$1,current.Get());
  }),x)),optionElements(options));
 };
 Doc.RunBetween=function(ldelim,rdelim,doc)
 {
  var st;
  Docs.LinkPrevElement(rdelim,doc.docNode);
  st=Docs.CreateDelimitedRunState(ldelim,rdelim,doc.docNode);
  View.Sink(An.get_UseAnimations()||Settings.BatchUpdatesEnabled()?Mailbox.StartProcessor(Docs.PerformAnimatedUpdate(false,st,doc.docNode)):function()
  {
   Docs.PerformSyncUpdate(false,st,doc.docNode);
  },doc.updates);
 };
 Doc.New=Runtime$1.Ctor(function(docNode,updates)
 {
  Obj.New.call(this);
  this.docNode=docNode;
  this.updates=updates;
 },Doc);
 ListModel=UI.ListModel=Runtime$1.Class({
  TryFindByKeyAsView:function(key)
  {
   var $this;
   $this=this;
   return function()
   {
    var m,o,sn;
    m=(o=null,[$this.it.TryGetValue(key,{
     get:function()
     {
      return o;
     },
     set:function(v)
     {
      o=v;
     }
    }),o]);
    return m[0]?m[1]:(sn=Snap.New({
     $:2,
     $0:$this.TryFindByKey(key),
     $1:[]
    }),($this.it.Add(key,sn),sn));
   };
  },
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
  ContainsKey:function(key)
  {
   var $this;
   $this=this;
   return Arrays.exists(function(it)
   {
    return Unchecked.Equals($this.key(it),key);
   },this["var"].Get());
  },
  RemoveByKey:function(key)
  {
   var $this;
   $this=this;
   this["var"].Set(this.storage.SRemoveIf(function(i)
   {
    return Unchecked.Equals($this.key(i),key);
   },this["var"].Get()));
   this.ObsoleteKey(key);
  },
  ContainsKeyAsView:function(key)
  {
   var $this;
   function p(it)
   {
    return Unchecked.Equals($this.key(it),key);
   }
   $this=this;
   return View.Map(function(a)
   {
    return Arrays.exists(p,a);
   },this["var"].get_View());
  },
  AppendMany:function(items)
  {
   var $this,toAppend;
   function f(v,item)
   {
    var t,m;
    t=$this.key(item);
    $this.ObsoleteKey(t);
    m=Arrays.tryFindIndex(function(it)
    {
     return Unchecked.Equals($this.key(it),t);
    },v);
    return m==null?(toAppend.push(item),v):$this.storage.SSetAt(m.$0,item,v);
   }
   $this=this;
   toAppend=[];
   this["var"].Set(this.storage.SAppendMany(toAppend,(((Runtime$1.Curried3(Seq.fold))(f))(this["var"].Get()))(items)));
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
  Lens:function(key)
  {
   return this.LensInto(Global.id,function(a,x)
   {
    return x;
   },key);
  },
  LensInto:function(get,update,key)
  {
   return this["LensInto'"](get,update,key,View.Map(get,this.FindByKeyAsView(key)));
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
  FindByKeyAsView:function(key)
  {
   return View.Map(function(o)
   {
    return o.$0;
   },this.TryFindByKeyAsView(key));
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
 Var$1=UI.Var$1=Runtime$1.Class({},Obj,Var$1);
 Var$1.Create$1=function(v)
 {
  return new ConcreteVar.New(false,Snap.New({
   $:2,
   $0:v,
   $1:[]
  }),v);
 };
 Var$1.Lens=function(_var,get,update)
 {
  var id,view,$1;
  id=Fresh.Id();
  view=View.Map(get,_var.get_View());
  $1=new Var({
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
  Var.New.call($1);
  return $1;
 };
 Var$1.Set=function(_var,value)
 {
  _var.Set(value);
 };
 Var$1.Update=function(_var,fn)
 {
  Var$1.Set(_var,fn(_var.Get()));
 };
 PlugInName=AppFramework.PlugInName=Runtime$1.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,PlugInName);
 Var=UI.Var=Runtime$1.Class({},Obj,Var);
 Var.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },Var);
 AppFramework.selectionPlugInO=function()
 {
  SC$2.$cctor();
  return SC$2.selectionPlugInO;
 };
 AppFramework.defaultPlugIn=function()
 {
  return PlugIn.New(new PlugInName({
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
  }),new ListModel.New$1(function(qry)
  {
   return qry.qryName;
  }));
 };
 AppFramework.plugIns=function()
 {
  SC$2.$cctor();
  return SC$2.plugIns;
 };
 AppFramework.currentPlugInW=function()
 {
  SC$2.$cctor();
  return SC$2.currentPlugInW;
 };
 AppFramework.renderPlugIns=function()
 {
  return Doc.Flatten(AppFramework.plugIns().MapLens(function($1)
  {
   var b,t,N,p,i;
   return(b=(t=(N=$1.get_Id(),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })),t.WithHole(Handler.EventQ2(t.k,"select",function()
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
 AppFramework.renderVars=function()
 {
  function a(plg,_var)
  {
   return[plg.plgName,_var.varName];
  }
  function a$1(plg,_var)
  {
   var b,N,p,i;
   return(b=(N=_var.varName.get_Id(),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })).WithHole({
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
 AppFramework.renderViews=function()
 {
  function a(plg,viw)
  {
   return[plg.plgName,viw.viwName];
  }
  function a$1(plg,viw)
  {
   var b,N,p,i;
   return(b=(N=viw.viwName.get_Id(),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })).WithHole({
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
 AppFramework.renderDocs=function()
 {
  function a(plg,doc)
  {
   return[plg.plgName,doc.docName];
  }
  function a$1(plg,doc)
  {
   var b,t,N,p,i;
   return(b=(t=(N=doc.docName.get_Id()+AppFramework.docParms(doc),ProviderBuilder.Make().WithHole({
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
     var a$2;
     a$2=plg$1.plgName.get_Id()+"."+doc.docName.get_Id();
     AppFramework.mainDocV().Set(a$2);
    },AppFramework.currentPlugInW());
   }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
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
  },AppFramework.currentPlugInW()));
 };
 AppFramework.renderActions=function()
 {
  function a(plg,act)
  {
   return[plg.plgName,act.actName];
  }
  function a$1(plg,act)
  {
   var parms,m,x,x$1,b,A,t,N,p,i;
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
   return(b=(A=AttrModule.DynamicPred("disabled",View.Map(function($1)
   {
    return!$1;
   },act.actEnabled),View.Const("")),(t=(N=act.actName.get_Id()+parms,ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })),t.WithHole(Handler.EventQ2(t.k,"click",function()
   {
    return t.i;
   },function(ev)
   {
    AppFramework.callFunction(null,ev,act.actFunction);
   }))).WithHole({
    $:3,
    $0:"attrs",
    $1:A
   })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.action(p[0])),(b.i=i,i)))).get_Doc();
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
   var b,t,N,p,i;
   return(b=(t=(N=qry.qryName.get_Id(),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })),t.WithHole(Handler.EventQ2(t.k,"select",function()
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
 AppFramework.a11V=function()
 {
  SC$2.$cctor();
  return SC$2.a11V;
 };
 AppFramework.add1=function(a)
 {
  return a+1;
 };
 AppFramework.mainDocV=function()
 {
  SC$2.$cctor();
  return SC$2.mainDocV;
 };
 AppFramework.callFunction=function(p1,p2,actF)
 {
  if(actF.$==1)
   actF.$0(p2);
  else
   if(actF.$==2)
    (actF.$0(p1))(p2);
   else
    actF.$0();
 };
 AppFramework.valToAttr=function(atn,a)
 {
  return a.$==0?AttrModule.Dynamic(atn,a.$0):AttrProxy.Create(atn,a.$0);
 };
 AppFramework.valToStyle=function(atn,a)
 {
  return a.$==0?AttrModule.DynamicStyle(atn,a.$0):AttrModule.Style(atn,a.$0);
 };
 AppFramework.currentPlugInNameDef=function()
 {
  SC$2.$cctor();
  return SC$2.currentPlugInNameDef;
 };
 AppFramework.currentPlugInNameD=function()
 {
  SC$2.$cctor();
  return SC$2.currentPlugInNameD;
 };
 AppFramework.splitName=function(lytNm)
 {
  function f(s)
  {
   return String.splitByChar(".",s);
  }
  function g(a)
  {
   return Arrays.length(a)===1?[lytNm,new PlgElemName({
    $:0,
    $0:Strings.Trim(Arrays.get(a,0))
   })]:[new PlugInName({
    $:0,
    $0:Strings.Trim(Arrays.get(a,0))
   }),new PlgElemName({
    $:0,
    $0:Strings.Trim(Arrays.get(a,1))
   })];
  }
  return function(x)
  {
   return g(f(x));
  };
 };
 AppFramework.tryGetDocW=function(plgName,docName)
 {
  return View.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgDocs.TryFindByKeyAsView(docName):View.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.getActualDoc=function(doc)
 {
  var m;
  m=doc.docDoc.f();
  return m.$==0?m.$0:m.$==1?m.$0():Doc.Element("div",[],[Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1("Doc with parameters not allowed here: "+GeneratedPrintf.p($2));
   };
  }(Global.id))(doc))]);
 };
 AppFramework.tryGetWoWW=function(plgName,viwName)
 {
  return View.Bind(function(a)
  {
   return a==null?View.Bind(function(a$1)
   {
    return a$1==null?View.Const(null):View.Map(function(a$2)
    {
     return{
      $:1,
      $0:a$2
     };
    },a$1.$0.varVar.get_View());
   },AppFramework.tryGetVarW(plgName,viwName)):View.Map(function(a$1)
   {
    return{
     $:1,
     $0:a$1
    };
   },a.$0.viwView);
  },AppFramework.tryGetViwW(plgName,viwName));
 };
 AppFramework.tryGetDoc=function(plgName,docName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgDocs.TryFindByKey(docName);
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
 AppFramework.tryGetActW=function(plgName,actName)
 {
  return View.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgActions.TryFindByKeyAsView(actName):View.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.extractAtsD=function()
 {
  SC$2.$cctor();
  return SC$2.extractAtsD$1;
 };
 AppFramework.depWithExtracts=function(f)
 {
  var b;
  return AppFramework.runDef((b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(AppFramework.extractAtsD(),function(a)
   {
    return b.Bind(AppFramework.extractDocD(),function(a$1)
    {
     return b.Bind(AppFramework.extractTextD(),function(a$2)
     {
      return b.Return(f(a,a$1,a$2));
     });
    });
   });
  })));
 };
 AppFramework.docWithVar=function(f,_var)
 {
  var g,t;
  function f$1(o)
  {
   return o==null?null:{
    $:1,
    $0:f(o.$0)
   };
  }
  function d()
  {
   return AppFramework.errDoc((function($1)
   {
    return function($2)
    {
     return $1("Var not found "+Utils.toSafe($2));
    };
   }(Global.id))(_var));
  }
  return Doc.BindView((g=function(o)
  {
   return o==null?d():o.$0;
  },function(x)
  {
   return g(f$1(x));
  }),(t=AppFramework.getParmRef(_var),AppFramework.tryGetVoVW(t[0],t[1])));
 };
 AppFramework.defPlugInName=function()
 {
  SC$2.$cctor();
  return SC$2.defPlugInName;
 };
 AppFramework.errDocf=function(fmt)
 {
  return fmt(AppFramework.errDoc);
 };
 AppFramework.Lazy=function(l)
 {
  return l.f();
 };
 AppFramework.getParmRef=function(_var)
 {
  var x,o,o$1,$1,b;
  x=(o=(o$1=String.delimitedO("@{","}",_var),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,($1[0],b=$1[1],$1[2],b))
  }),o==null?_var:o.$0);
  return(AppFramework.splitName(AppFramework.defPlugInName()))(x);
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
 AppFramework.draggingEvent=function(first,value,ev)
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
 AppFramework.tryGetAct=function(plgName,actName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgActions.TryFindByKey(actName);
 };
 AppFramework.plugin=function()
 {
  SC$2.$cctor();
  return SC$2.plugin;
 };
 AppFramework.AppFwkClient=function()
 {
  SC$2.$cctor();
  return SC$2.AppFwkClient;
 };
 AppFramework.addPlugIn=function(p)
 {
  p.plgViews.Append(AppFramework.newViw(new PlgElemName({
   $:0,
   $0:"PlugInName"
  }),View.Const(p.plgName.get_Id())));
  AppFramework.plugIns().Append(p);
 };
 AppFramework.docReference=function()
 {
  SC$2.$cctor();
  return SC$2.docReference;
 };
 AppFramework.htmlDoc=function()
 {
  SC$2.$cctor();
  return SC$2.htmlDoc;
 };
 AppFramework.trigAct=function()
 {
  SC$2.$cctor();
  return SC$2.trigAct;
 };
 AppFramework.trigActChange=function()
 {
  SC$2.$cctor();
  return SC$2.trigActChange;
 };
 AppFramework.input=function()
 {
  SC$2.$cctor();
  return SC$2.input;
 };
 AppFramework.textArea=function()
 {
  SC$2.$cctor();
  return SC$2.textArea;
 };
 AppFramework.select=function()
 {
  SC$2.$cctor();
  return SC$2.select;
 };
 AppFramework.inputFile=function(attrs,labelName,actName)
 {
  var o,o$1,t,act;
  o=(o$1=(t=(AppFramework.splitName(AppFramework.defPlugInName()))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:(act=o$1.$0,Doc.Element("div",AppFramework.getAttrs(AppFramework.defPlugInName(),attrs),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-btn")],[Doc.Element("label",[AttrProxy.Create("class","btn")],[Doc.TextNode(labelName),Doc.Element("input",[AttrProxy.Create("class","form-control"),AttrProxy.Create("type","file"),AttrModule.Style("display","none"),AttrProxy.HandlerImpl("click",function(el)
   {
    return function()
    {
     el.value="";
    };
   }),AttrProxy.HandlerImpl("change",function(el)
   {
    return function(ev)
    {
     return AppFramework.callFunction(el,ev,act.actFunction);
    };
   })],[])])])])]))
  });
  return o==null?AppFramework.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Action not found "+Utils.toSafe($2));
   };
  }(Global.id))(actName)):o.$0;
 };
 AppFramework.inputLabel=function()
 {
  SC$2.$cctor();
  return SC$2.inputLabel;
 };
 AppFramework.setVar=function(varN,value)
 {
  (AppFramework.setVar0())([varN,value]);
 };
 AppFramework.setVarDirect=function(varN,value)
 {
  (AppFramework.setVarDirect0())([varN,value]);
 };
 AppFramework.dragSplitter=function(varN,eventD)
 {
  (AppFramework.dragSplitter0())([varN,eventD]);
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
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.wcompsplitterhor(p[0])),(b.i=i,i)))).get_Doc();
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
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.wcompsplitterver(p[0])),(b.i=i,i)))).get_Doc();
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
 AppFramework.getMainDoc=function()
 {
  SC$2.$cctor();
  return SC$2.getMainDoc;
 };
 AppFramework.newDoc=function(name,doc)
 {
  return PlugInDoc.New(name,Lazy.Create(function()
  {
   return{
    $:0,
    $0:doc.f()
   };
  }));
 };
 AppFramework.newVar=function(name,_var)
 {
  return PlugInVar.New(name,_var);
 };
 AppFramework.newViw=function(name,viw)
 {
  return PlugInView.New(name,viw);
 };
 AppFramework.newAct=function(name,fnc)
 {
  return PlugInAction.New(name,{
   $:0,
   $0:fnc
  },View.Const(true));
 };
 AppFramework.op_Dereference=function(v)
 {
  return P.New((Operators$1.rtn())({
   $:1,
   $0:v
  }));
 };
 AppFramework.makeAViewDoc=function(f)
 {
  return Doc.BindView(function()
  {
   return f();
  },AppFramework.baseView());
 };
 AppFramework.tryGetVar=function(plgName,varName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgVars.TryFindByKey(varName);
 };
 AppFramework.tryGetVarW=function(plgName,varName)
 {
  return View.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgVars.TryFindByKeyAsView(varName):View.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.tryGetViwW=function(plgName,viwName)
 {
  return View.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgViews.TryFindByKeyAsView(viwName):View.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.tryGetViw=function(plgName,viwName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgViews.TryFindByKey(viwName);
 };
 AppFramework.tryGetPlugIn=function(plgName)
 {
  return AppFramework.plugIns().TryFindByKey(plgName);
 };
 AppFramework.newActF=function(name,fncF)
 {
  return PlugInAction.New(name,fncF,View.Const(true));
 };
 AppFramework.docParms=function(doc)
 {
  var m,x,x$1,x$2,x$3,x$4;
  m=doc.docDoc.f();
  return m.$==1?"()":m.$==2?(x=Strings.concat(", ",List.ofArray([m.$1])),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x)):m.$==3?(x$1=Strings.concat(", ",List.ofArray([m.$1,m.$2])),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$1)):m.$==4?(x$2=Strings.concat(", ",List.ofArray([m.$1,m.$2,m.$3])),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$2)):m.$==5?(x$3=Strings.concat(", ",List.ofArray([m.$1,m.$2,m.$3,m.$4])),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$3)):m.$==6?(x$4=Strings.concat(", ",List.ofArray([m.$1,m.$2,m.$3,m.$4,m.$5])),(function($1)
  {
   return function($2)
   {
    return $1("("+Utils.toSafe($2)+")");
   };
  }(Global.id))(x$4)):"";
 };
 AppFramework.tryGetPlugInW=function(plgName)
 {
  return AppFramework.plugIns().TryFindByKeyAsView(plgName);
 };
 AppFramework.extractDocD=function()
 {
  SC$2.$cctor();
  return SC$2.extractDocD$1;
 };
 AppFramework.extractTextD=function()
 {
  SC$2.$cctor();
  return SC$2.extractTextD$1;
 };
 AppFramework.runDef=function(d)
 {
  return AppFramework.run(AppFramework.defPlugInName(),d);
 };
 AppFramework.tryGetVoVW=function(plgName,varName)
 {
  return View.Bind(function(a)
  {
   return a==null?View.Map(function(a$1)
   {
    return a$1==null?null:{
     $:1,
     $0:new FromView.New(a$1.$0.viwView,Global.ignore)
    };
   },AppFramework.tryGetViwW(plgName,varName)):View.Const({
    $:1,
    $0:a.$0.varVar
   });
  },AppFramework.tryGetVarW(plgName,varName));
 };
 AppFramework.errDoc=function(txt)
 {
  return Doc.Element("div",[],[Doc.TextNode(txt)]);
 };
 AppFramework.newQry=function(name,qry)
 {
  return PlugInQuery.New(name,qry);
 };
 AppFramework.newDocF=function(name,docF)
 {
  return PlugInDoc.New(name,Lazy.Create(function()
  {
   return docF;
  }));
 };
 AppFramework.getAttrs=function(lytNm,attrs)
 {
  return List.ofSeq(Seq.delay(function()
  {
   return Seq.append(Seq.choose(function(a)
   {
    var $1,value,value$1,name;
    function s(el,a$1)
    {
     var act;
     if(a$1.$==1)
      {
       act=a$1.$0;
       try
       {
        return el.addEventListener(Strings.Trim(name),function(ev)
        {
         return AppFramework.callFunction(el,ev,act.actFunction);
        },false);
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
     else
      try
      {
       return el.setAttribute(Strings.Trim(name),Strings.Trim(a$1.$0));
      }
      catch(e$1)
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
       }))(e$1);
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
     },AppFramework.getTextData(lytNm,Strings.Trim(value$1)))
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
      $0:(x=View.Map(function(a$1)
      {
       return a$1.$==1?(function($2)
       {
        return function($3)
        {
         return $2("@{"+Utils.toSafe($3)+"}");
        };
       }(Global.id))(a$1.$0.actName.get_Id()):Strings.Trim(a$1.$0);
      },AppFramework.getTextData(lytNm,Strings.Trim(value$1))),AttrModule.DynamicStyle(Strings.Trim(name),x))
     })):null;
    },Seq.map(function(s)
    {
     return String.splitByChar(":",s);
    },String.splitByChar(";",attrs)));
   }));
  }));
 };
 AppFramework.setVar0=function()
 {
  SC$2.$cctor();
  return SC$2.setVar0;
 };
 AppFramework.setVarDirect0=function()
 {
  SC$2.$cctor();
  return SC$2.setVarDirect0;
 };
 AppFramework.dragSplitter0=function()
 {
  SC$2.$cctor();
  return SC$2.dragSplitter0;
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
     return plg.plgName.get_Id()===mainDoc||plg.plgName.get_Id()+"."+doc.docName.get_Id()===mainDoc;
    },plg.plgDocs);
    return o==null?null:{
     $:1,
     $0:AppFramework.getActualDoc(o.$0)
    };
   },plgs);
   v=AppFramework.AppFwkClient().f();
   return x$1==null?v:x$1.$0;
  },AppFramework.mainDocV().get_View(),x)));
 };
 AppFramework.mapVarO=function(ofBO,toB,sel)
 {
  return new FromView.New(View.Map(function($1)
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
 AppFramework.lensStrO=function(sel)
 {
  return new FromView.New(View.Map(function($1)
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
 AppFramework.bindWrap=function(f,pv)
 {
  return P.New(Operators$1.op_GreaterGreaterEquals(pv,function(v)
  {
   return f(v).r;
  }));
 };
 AppFramework.unwrapBindWrap=function(f,pv)
 {
  return P.New(Operators$1.op_BarGreaterGreater(pv.r,f));
 };
 AppFramework.baseView=function()
 {
  SC$2.$cctor();
  return SC$2.baseView;
 };
 AppFramework.run=function(pin,d)
 {
  var x,b;
  x=(b=Operators$1.depend(),b.Delay(function()
  {
   return b.Bind(AppFramework.getDocwD(),function(a)
   {
    return b.Bind(AppFramework.getTextActViewD(),function(a$1)
    {
     return b.Bind(AppFramework.currentPlugInNameD(),function(a$2)
     {
      return b.Return(Depend.resolver(List.ofArray([["getDocFromReference",a],["getTextActViewFromReference",a$1],["currentPlugInName",a$2]]),d));
     });
    });
   });
  }));
  return Depend.resolver(List.ofArray([["currentPlugInName",pin]]),x);
 };
 AppFramework.makeAViewDoc0=Global.id;
 AppFramework.getTextData=function(lytNm,txt)
 {
  var o,o$1,$1,bef;
  o=(o$1=String.delimitedO("@{","}",txt),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,(bef=$1[0],AppFramework.getOneTextData(lytNm,$1[1],bef,$1[2])))
  });
  return o==null?View.Const({
   $:0,
   $0:txt
  }):o.$0;
 };
 AppFramework.newDoc0=function(name,f)
 {
  return PlugInDoc.New(name,Lazy.Create(function()
  {
   return{
    $:1,
    $0:f
   };
  }));
 };
 AppFramework.getDocwD=function()
 {
  SC$2.$cctor();
  return SC$2.getDocwD;
 };
 AppFramework.getTextActViewD=function()
 {
  SC$2.$cctor();
  return SC$2.getTextActViewD;
 };
 AppFramework.getOneTextData=function(lytNm,name,bef,aft)
 {
  var p,plg,n;
  p=(AppFramework.splitName(lytNm))(name);
  plg=p[0];
  n=p[1];
  return View.Bind(function(a)
  {
   return a==null?View.Bind(function(a$1)
   {
    var txt;
    return a$1==null?View.Const({
     $:0,
     $0:((((Runtime$1.Curried(function($1,$2,$3,$4)
     {
      return $1(Utils.toSafe($2)+" @{Missing "+Utils.toSafe($3)+"}"+Utils.toSafe($4));
     },4))(Global.id))(bef))(name))(aft)
    }):(txt=a$1.$0,View.Bind(function(a$2)
    {
     return a$2.$==1?View.Const({
      $:0,
      $0:(function($1)
      {
       return function($2)
       {
        return $1("Unexpected Action @{"+Utils.toSafe($2)+"}");
       };
      }(Global.id))(a$2.$0.actName.get_Id())
     }):View.Const({
      $:0,
      $0:bef+txt+a$2.$0
     });
    },AppFramework.getTextData(lytNm,aft)));
   },AppFramework.tryGetWoWW(plg,n)):View.Const({
    $:1,
    $0:a.$0
   });
  },AppFramework.tryGetActW(plg,n));
 };
 AppFramework.newDocL=function(name,docL)
 {
  return PlugInDoc.New(name,docL);
 };
 View.Bind=function(fn,view)
 {
  return View.Join(View.Map(fn,view));
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
 View.Join=function(a)
 {
  return View.CreateLazy(function()
  {
   return Snap.Join(a());
  });
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
 View.Apply=function(fn,view)
 {
  return View.Map2(function(f,x)
  {
   return f(x);
  },fn,view);
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
 View.get_Do=function()
 {
  return ViewBuilder.B;
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
 View.MapSeqCached=function(conv,view)
 {
  return View.MapSeqCachedBy(Global.id,conv,view);
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
 GeneratedPrintf.p=function($1)
 {
  return"{"+("docName = "+LayoutEngine_GeneratedPrintf.p($1.docName))+"; "+("docDoc = "+Utils.prettyPrint($1.docDoc))+"}";
 };
 LayoutEngine_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==1?"FullRef ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":"LocalRef "+Utils.prettyPrint($1.$0);
 };
 LayoutEngine_Templates.tile=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"tile"
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
 LayoutEngine_Templates.namevalue=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"namevalue"
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
 LayoutEngine_GeneratedPrintf.p=function($1)
 {
  return"PlgElemName "+Utils.prettyPrint($1.$0);
 };
 LayoutEngine_Templates.wcompsplitterhor=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"wcompsplitterhor"
  },h):void 0;
 };
 LayoutEngine_Templates.wcompsplitterver=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"wcompsplitterver"
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
 LayoutEngine_GeneratedPrintf.p$16=function($1)
 {
  return $1.$==4?"PrActRef "+LayoutEngine_GeneratedPrintf.p$8($1.$0):$1.$==3?"PrViwRef "+LayoutEngine_GeneratedPrintf.p$12($1.$0):$1.$==2?"PrVarRef "+LayoutEngine_GeneratedPrintf.p$11($1.$0):$1.$==1?"PrDocRef "+LayoutEngine_GeneratedPrintf.p$6($1.$0):"PrTextValL "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$10($2);
  },$1.$0);
 };
 GeneratedPrintf.p$2=function($1)
 {
  return"{"+("actName = "+LayoutEngine_GeneratedPrintf.p($1.actName))+"; "+("actFunction = "+LayoutEngine_GeneratedPrintf.p$27($1.actFunction))+"; "+("actEnabled = "+LayoutEngine_GeneratedPrintf.p$28($1.actEnabled))+"}";
 };
 LayoutEngine_GeneratedPrintf.p$8=function($1)
 {
  return"ActRef "+LayoutEngine_GeneratedPrintf.p$1($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$12=function($1)
 {
  return"ViwRef "+LayoutEngine_GeneratedPrintf.p$1($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$11=function($1)
 {
  return"VarRef "+LayoutEngine_GeneratedPrintf.p$1($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$6=function($1)
 {
  return"DocRef "+LayoutEngine_GeneratedPrintf.p$1($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$10=function($1)
 {
  return $1.$==4?"TvDocRef "+LayoutEngine_GeneratedPrintf.p$6($1.$0):$1.$==3?"TvActRef "+LayoutEngine_GeneratedPrintf.p$8($1.$0):$1.$==2?"TvViwRef "+LayoutEngine_GeneratedPrintf.p$12($1.$0):$1.$==1?"TvVarRef "+LayoutEngine_GeneratedPrintf.p$11($1.$0):"TvConst "+Utils.prettyPrint($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$27=function($1)
 {
  return $1.$==2?"FunAct2 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":$1.$==1?"FunAct1 (<fun>, "+Utils.prettyPrint($1.$1)+")":"FunAct0 <fun>";
 };
 LayoutEngine_GeneratedPrintf.p$28=function($1)
 {
  return"View <fun>";
 };
 LayoutEngine_GeneratedPrintf.p$2=function($1)
 {
  return $1.$==7?"EnPlgRef "+("("+Utils.prettyPrint($1.$0[0])+", "+LayoutEngine_GeneratedPrintf.p$26($1.$0[1])+")"):$1.$==6?"EnPlgDef "+LayoutEngine_GeneratedPrintf.p$25($1.$0):$1.$==5?"EnVJSDef "+LayoutEngine_GeneratedPrintf.p$24($1.$0):$1.$==4?"EnViwDef "+LayoutEngine_GeneratedPrintf.p$23($1.$0):$1.$==3?"EnVarDef "+LayoutEngine_GeneratedPrintf.p$22($1.$0):$1.$==2?"EnActDefs "+LayoutEngine_GeneratedPrintf.p$21($1.$0):$1.$==1?"EnActDef "+LayoutEngine_GeneratedPrintf.p$20($1.$0):"EnDocDef "+LayoutEngine_GeneratedPrintf.p$3($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$26=function($1)
 {
  return $1.$==4?"RPlg":$1.$==3?"RAct":$1.$==2?"RViw":$1.$==1?"RVar":"RDoc";
 };
 LayoutEngine_GeneratedPrintf.p$25=function($1)
 {
  return"PlgDef "+Utils.prettyPrint($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$24=function($1)
 {
  return"VJSDef "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$16($2);
  },$1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$23=function($1)
 {
  return"ViwDef "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$16($2);
  },$1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$22=function($1)
 {
  return"VarDef "+Utils.prettyPrint($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$21=function($1)
 {
  return"ActDefs "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$8($2);
  },$1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$20=function($1)
 {
  return"ActDef ("+LayoutEngine_GeneratedPrintf.p$8($1.$0)+", "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$16($2);
  },$1.$1)+")";
 };
 LayoutEngine_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==7?"DcTemplate "+GeneratedPrintf.p$1($1.$0):$1.$==6?"DcElement "+LayoutEngine_GeneratedPrintf.p$19($1.$0):$1.$==5?"DcConcat "+LayoutEngine_GeneratedPrintf.p$17($1.$0):$1.$==4?"DcDocF "+LayoutEngine_GeneratedPrintf.p$15($1.$0):$1.$==3?"DcTextArea "+LayoutEngine_GeneratedPrintf.p$14($1.$0):$1.$==2?"DcInput "+LayoutEngine_GeneratedPrintf.p$13($1.$0):$1.$==1?"DcButton "+LayoutEngine_GeneratedPrintf.p$7($1.$0):"DcSplitter "+LayoutEngine_GeneratedPrintf.p$4($1.$0);
 };
 GeneratedPrintf.p$1=function($1)
 {
  return"{"+("tmpName = "+Utils.prettyPrint($1.tmpName))+"; "+("vars = "+Utils.printArray(function($2)
  {
   return"("+Utils.prettyPrint($2[0])+", "+LayoutEngine_GeneratedPrintf.p$11($2[1])+")";
  },$1.vars))+"; "+("views = "+Utils.printArray(function($2)
  {
   return"("+Utils.prettyPrint($2[0])+", "+LayoutEngine_GeneratedPrintf.p$16($2[1])+")";
  },$1.views))+"; "+("docs = "+Utils.printArray(function($2)
  {
   return"("+Utils.prettyPrint($2[0])+", "+LayoutEngine_GeneratedPrintf.p$6($2[1])+")";
  },$1.docs))+"; "+("actions = "+Utils.printArray(function($2)
  {
   return"("+Utils.prettyPrint($2[0])+", "+LayoutEngine_GeneratedPrintf.p$8($2[1])+")";
  },$1.actions))+"; "+("attrs = "+LayoutEngine_GeneratedPrintf.p$16($1.attrs))+"}";
 };
 LayoutEngine_GeneratedPrintf.p$19=function($1)
 {
  return"ElementDef ("+Utils.prettyPrint($1.$0)+", "+LayoutEngine_GeneratedPrintf.p$16($1.$1)+", "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$18($2);
  },$1.$2)+")";
 };
 LayoutEngine_GeneratedPrintf.p$17=function($1)
 {
  return"ConcatDef "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$18($2);
  },$1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$15=function($1)
 {
  return"DocFDef ("+LayoutEngine_GeneratedPrintf.p$6($1.$0)+", "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$16($2);
  },$1.$1)+")";
 };
 LayoutEngine_GeneratedPrintf.p$14=function($1)
 {
  return"TextAreaDef ("+LayoutEngine_GeneratedPrintf.p$11($1.$0)+", "+Utils.printArray(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$9($2);
  },$1.$1)+")";
 };
 LayoutEngine_GeneratedPrintf.p$13=function($1)
 {
  return"InputDef ("+LayoutEngine_GeneratedPrintf.p$11($1.$0)+", "+Utils.printArray(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$9($2);
  },$1.$1)+")";
 };
 LayoutEngine_GeneratedPrintf.p$7=function($1)
 {
  return"ButtonDef ("+LayoutEngine_GeneratedPrintf.p$8($1.$0)+", "+Utils.printArray(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$9($2);
  },$1.$1)+", "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$10($2);
  },$1.$2)+")";
 };
 LayoutEngine_GeneratedPrintf.p$4=function($1)
 {
  return"SplitterDef ("+Utils.prettyPrint($1.$0)+", "+LayoutEngine_GeneratedPrintf.p$5($1.$1)+", "+LayoutEngine_GeneratedPrintf.p$6($1.$2)+", "+LayoutEngine_GeneratedPrintf.p$6($1.$3)+")";
 };
 LayoutEngine_GeneratedPrintf.p$18=function($1)
 {
  return $1.$==3?"NdViwRef "+LayoutEngine_GeneratedPrintf.p$12($1.$0):$1.$==2?"NdVarRef "+LayoutEngine_GeneratedPrintf.p$11($1.$0):$1.$==1?"NdDocRef "+LayoutEngine_GeneratedPrintf.p$6($1.$0):"NdTextValL "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$10($2);
  },$1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$9=function($1)
 {
  return $1.$==2?"AtAct ("+Utils.prettyPrint($1.$0)+", "+LayoutEngine_GeneratedPrintf.p$8($1.$1)+")":$1.$==1?"AtAttr ("+Utils.prettyPrint($1.$0)+", "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$10($2);
  },$1.$1)+")":"AtStyle ("+Utils.prettyPrint($1.$0)+", "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$10($2);
  },$1.$1)+")";
 };
 LayoutEngine_GeneratedPrintf.p$5=function($1)
 {
  return $1.$==1?"Variable ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":"Fixed ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")";
 };
 PlugInBuilder=AppFramework.PlugInBuilder=Runtime$1.Class({
  AddAct:function(plg,name,act)
  {
   plg.plgActions.Append(AppFramework.newAct(new PlgElemName({
    $:0,
    $0:name
   }),act));
   return plg;
  },
  AddDoc:function(plg,name,doc)
  {
   plg.plgDocs.Append(AppFramework.newDoc(new PlgElemName({
    $:0,
    $0:name
   }),doc));
   return plg;
  },
  AddVar:function(plg,name,_var)
  {
   plg.plgVars.Append(AppFramework.newVar(new PlgElemName({
    $:0,
    $0:name
   }),_var));
   return plg;
  },
  Name:function(plg,name)
  {
   return PlugIn.New(new PlugInName({
    $:0,
    $0:name
   }),plg.plgVars,plg.plgViews,plg.plgDocs,plg.plgActions,plg.plgQueries);
  },
  Yield:function()
  {
   return this.Zero();
  },
  AddViw:function(plg,name,viw)
  {
   plg.plgViews.Append(AppFramework.newViw(new PlgElemName({
    $:0,
    $0:name
   }),viw));
   return plg;
  },
  AddQry:function(plg,name,qry)
  {
   plg.plgQueries.Append(AppFramework.newQry(new PlgElemName({
    $:0,
    $0:name
   }),qry));
   return plg;
  },
  AddAct2:function(plg,name,act,p1,p2)
  {
   plg.plgActions.Append(AppFramework.newActF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:2,
    $0:act,
    $1:p1,
    $2:p2
   }));
   return plg;
  },
  AddDoc3:function(plg,name,doc,a,b,c)
  {
   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:4,
    $0:doc,
    $1:a,
    $2:b,
    $3:c
   }));
   return plg;
  },
  AddDoc4:function(plg,name,doc,a,b,c,d)
  {
   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:5,
    $0:doc,
    $1:a,
    $2:b,
    $3:c,
    $4:d
   }));
   return plg;
  },
  AddDoc2:function(plg,name,doc,p1,p2)
  {
   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:3,
    $0:doc,
    $1:p1,
    $2:p2
   }));
   return plg;
  },
  AddDoc1:function(plg,name,doc,p1)
  {
   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:2,
    $0:doc,
    $1:p1
   }));
   return plg;
  },
  Merge:function(plg,prefix,p2)
  {
   plg.plgVars.AppendMany(Seq.map(function(v)
   {
    return PlugInVar.New(new PlgElemName({
     $:0,
     $0:prefix+v.varName.get_Id()
    }),v.varVar);
   },p2.plgVars));
   plg.plgViews.AppendMany(Seq.map(function(w)
   {
    return PlugInView.New(new PlgElemName({
     $:0,
     $0:prefix+w.viwName.get_Id()
    }),w.viwView);
   },p2.plgViews));
   plg.plgDocs.AppendMany(Seq.map(function(d)
   {
    return PlugInDoc.New(new PlgElemName({
     $:0,
     $0:prefix+d.docName.get_Id()
    }),d.docDoc);
   },p2.plgDocs));
   plg.plgActions.AppendMany(Seq.map(function(a)
   {
    return PlugInAction.New(new PlgElemName({
     $:0,
     $0:prefix+a.actName.get_Id()
    }),a.actFunction,a.actEnabled);
   },p2.plgActions));
   plg.plgQueries.AppendMany(Seq.map(function(q)
   {
    return PlugInQuery.New(new PlgElemName({
     $:0,
     $0:prefix+q.qryName.get_Id()
    }),q.qryFunction);
   },p2.plgQueries));
   return plg;
  },
  Zero:function()
  {
   var i;
   i=AppFramework.defaultPlugIn();
   return PlugIn.New(new PlugInName({
    $:0,
    $0:"Main"
   }),i.plgVars,i.plgViews,i.plgDocs,i.plgActions,i.plgQueries);
  },
  AddDoc0:function(plg,name,doc)
  {
   plg.plgDocs.Append(AppFramework.newDoc0(new PlgElemName({
    $:0,
    $0:name
   }),doc));
   return plg;
  }
 },Obj,PlugInBuilder);
 PlugInBuilder.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },PlugInBuilder);
 Val.apply=function(fv,vv)
 {
  return fv.$==0?vv.$==1?{
   $:0,
   $0:View.Apply(fv.$0,View.Const(vv.$0))
  }:{
   $:0,
   $0:View.Apply(fv.$0,vv.$0)
  }:vv.$==0?{
   $:0,
   $0:View.Apply(View.Const(fv.$0),vv.$0)
  }:{
   $:1,
   $0:fv.$0(vv.$0)
  };
 };
 Val.traverseListApp=function(f,list)
 {
  function cons(head,tail)
  {
   return new T({
    $:1,
    $0:head,
    $1:tail
   });
  }
  return List.foldBack(function(head,tail)
  {
   return((Val.op_LessMultiplyGreater())(((Val.op_LessMultiplyGreater())(Val.rtn(function($1)
   {
    return function($2)
    {
     return cons($1,$2);
    };
   })))(f(head))))(tail);
  },list,Val.rtn(T.Empty));
 };
 Val.toView=function(a)
 {
  return a.$==0?a.$0:View.Const(a.$0);
 };
 Val.rtn=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 Val.op_LessMultiplyGreater=function()
 {
  SC$2.$cctor();
  return SC$2.op_LessMultiplyGreater;
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
 Val.textDoc=function(a)
 {
  return a.$==0?Doc.TextView(a.$0):Doc.TextNode(a.$0);
 };
 Extract0.getDocFromReference=function(ref)
 {
  return Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1("getDocFromReference not implemented: @{"+Utils.toSafe($2)+"}");
   };
  }(Global.id))(ref));
 };
 Extract0.getTextActViewFromReference=function(ref)
 {
  return View.Const({
   $:0,
   $0:(function($1)
   {
    return function($2)
    {
     return $1("getTextActViewFromReference not implemented: @{"+Utils.toSafe($2)+"}");
    };
   }(Global.id))(ref)
  });
 };
 Extract0.getDocFromReferenceD=function()
 {
  SC$2.$cctor();
  return SC$2.getDocFromReferenceD;
 };
 Extract0.getDocFromTextTypesD=function()
 {
  SC$2.$cctor();
  return SC$2.getDocFromTextTypesD;
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
 Extract0.getTextActViewFromReferenceD=function()
 {
  SC$2.$cctor();
  return SC$2.getTextActViewFromReferenceD;
 };
 Extract0.getTextValFromSeqD=function()
 {
  SC$2.$cctor();
  return SC$2.getTextValFromSeqD;
 };
 Extract0.getTextValD=function()
 {
  SC$2.$cctor();
  return SC$2.getTextValD;
 };
 Extract0.extractTextD=function()
 {
  SC$2.$cctor();
  return SC$2.extractTextD;
 };
 Extract0.extractDocD=function()
 {
  SC$2.$cctor();
  return SC$2.extractDocD;
 };
 Extract0.extractAtsD=function()
 {
  SC$2.$cctor();
  return SC$2.extractAtsD;
 };
 Extract0.getOneTextData=function(bef,name,aft)
 {
  return(bef===""?Global.id:function(ls)
  {
   return new T({
    $:1,
    $0:{
     $:0,
     $0:bef
    },
    $1:ls
   });
  })(new T({
   $:1,
   $0:{
    $:1,
    $0:name
   },
   $1:aft===""?T.Empty:Extract0.getTextData(aft)
  }));
 };
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
 Utils.printArray=function(p,o)
 {
  return o===null?"null":"[|"+Strings.concat("; ",Arrays.map(p,o))+"|]";
 };
 Operators$1.op_GreaterMultiplyGreater=function(g,mf)
 {
  var b;
  b=Operators$1.depend();
  return b.Delay(function()
  {
   return b.Bind(mf,function(a)
   {
    return b.Return(function(x)
    {
     return a(g(x));
    });
   });
  });
 };
 Operators$1.depend=function()
 {
  SC$2.$cctor();
  return SC$2.depend$1;
 };
 Operators$1.rtn=function()
 {
  SC$2.$cctor();
  return SC$2.rtn;
 };
 Operators$1.op_BarGreaterGreater=function(ma,f)
 {
  return(Depend.map(f))(ma);
 };
 Operators$1.op_GreaterGreaterEquals=function(ma,f)
 {
  return Depend.bind(f,ma);
 };
 Arrays.map=function(f,arr)
 {
  var r,i,$1;
  r=new Global.Array(arr.length);
  for(i=0,$1=arr.length-1;i<=$1;i++)r[i]=f(arr[i]);
  return r;
 };
 Arrays.partition=function(f,arr)
 {
  var ret1,ret2,i,$1;
  ret1=[];
  ret2=[];
  for(i=0,$1=arr.length-1;i<=$1;i++)if(f(arr[i]))
   ret1.push(arr[i]);
  else
   ret2.push(arr[i]);
  return[ret1,ret2];
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
 Arrays.foldBack=function(f,arr,zero)
 {
  var acc,$1,len,i,$2;
  acc=zero;
  len=arr.length;
  for(i=1,$2=len;i<=$2;i++)acc=f(arr[len-i],acc);
  return acc;
 };
 Arrays.sortInPlace=function(arr)
 {
  Arrays.mapInPlace(function(t)
  {
   return t[0];
  },Arrays.mapiInPlace(function($1,$2)
  {
   return[$2,$1];
  },arr).sort(Unchecked.Compare));
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
 Arrays.filter=function(f,arr)
 {
  var r,i,$1;
  r=[];
  for(i=0,$1=arr.length-1;i<=$1;i++)if(f(arr[i]))
   r.push(arr[i]);
  return r;
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
 Arrays.sortInPlaceBy=function(f,arr)
 {
  Arrays.mapInPlace(function(t)
  {
   return t[0];
  },Arrays.mapiInPlace(function($1,$2)
  {
   return[$2,[f($2),$1]];
  },arr).sort(function($1,$2)
  {
   return Unchecked.Compare($1[1],$2[1]);
  }));
 };
 AAttr.AEmpty={
  $:3
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
 LibraryJS.REGEX$1=function(expr,opt,value)
 {
  var m;
  return value===null?null:(m=(new Global.String(value)).match(new Global.RegExp(expr,opt)),Unchecked.Equals(m,null)?null:!Unchecked.Equals(m,null)&&m.length===0?null:{
   $:1,
   $0:m
  });
 };
 PlugInAction.New=function(actName,actFunction,actEnabled)
 {
  return{
   actName:actName,
   actFunction:actFunction,
   actEnabled:actEnabled
  };
 };
 AttrProxy=UI.AttrProxy=Runtime$1.Class({},null,AttrProxy);
 AttrProxy.Concat=function(xs)
 {
  var x;
  x=Array.ofSeqNonCopying(xs);
  return Array.TreeReduce(Attrs.EmptyAttr(),AttrProxy.Append,x);
 };
 AttrProxy.Create=function(name,value)
 {
  return Attrs.Static(function(el)
  {
   DomUtility.SetAttr(el,name,value);
  });
 };
 AttrProxy.Append=function(a,b)
 {
  return Attrs.AppendTree(a,b);
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
 AttrProxy.Handler=function(event,q)
 {
  return AttrProxy.HandlerImpl(event,q);
 };
 AttrModule.DynamicCustom=function(set,view)
 {
  return Attrs.Dynamic(view,set);
 };
 AttrModule.DynamicPred=function(name,predView,valView)
 {
  function viewFn(el,t)
  {
   return t[0]?DomUtility.SetAttr(el,name,t[1]):DomUtility.RemoveAttr(el,name);
  }
  return Attrs.Dynamic(View.Map2(function(pred,value)
  {
   return[pred,value];
  },predView,valView),function($1)
  {
   return function($2)
   {
    return viewFn($1,$2);
   };
  });
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
 AttrModule.OnAfterRender=function(callback)
 {
  return new AttrProxy({
   $:4,
   $0:callback
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
 FSharpSet=Collections.FSharpSet=Runtime$1.Class({
  Contains:function(v)
  {
   return BalancedTree.Contains(v,this.tree);
  },
  GetEnumerator$1:function()
  {
   return Enumerator.Get(BalancedTree.Enumerate(false,this.tree));
  },
  Equals:function(other)
  {
   return this.get_Count()===other.get_Count()&&Seq.forall2(Unchecked.Equals,this,other);
  },
  get_Count:function()
  {
   var tree;
   tree=this.tree;
   return tree==null?0:tree.Count;
  },
  GetHashCode:function()
  {
   return -1741749453+Unchecked.Hash(Arrays.ofSeq(this));
  },
  GetEnumerator:function()
  {
   return this.GetEnumerator$1();
  },
  CompareTo0:function(other)
  {
   return Seq.compareWith(Unchecked.Compare,this,other);
  },
  GetEnumerator0:function()
  {
   return this.GetEnumerator$1();
  }
 },Obj,FSharpSet);
 FSharpSet.op_Subtraction=function(x,y)
 {
  return Set.Filter(function(x$1)
  {
   return!y.Contains(x$1);
  },x);
 };
 FSharpSet.New=Runtime$1.Ctor(function(s)
 {
  FSharpSet.New$1.call(this,BalancedTree.OfSeq(s));
 },FSharpSet);
 FSharpSet.New$1=Runtime$1.Ctor(function(tree)
 {
  Obj.New.call(this);
  this.tree=tree;
 },FSharpSet);
 attr=HtmlModule.attr=Runtime$1.Class({},Obj,attr);
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
 Library.Error=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 PlugInDoc.New=function(docName,docDoc)
 {
  return{
   docName:docName,
   docDoc:docDoc
  };
 };
 View$1.traverseSeq=function(f,sq)
 {
  return View$1.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return View$1.op_GreaterGreaterEquals(f(head),function(h)
   {
    return View$1.op_GreaterGreaterEquals(tail,function(t)
    {
     return View$1.rtn(new T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),View$1.rtn(T.Empty)));
 };
 View$1.rtn=function(a)
 {
  return View.Const(a);
 };
 View$1.map=function(a,a$1)
 {
  return View.Map(a,a$1);
 };
 View$1.op_GreaterGreaterEquals=function(v,f)
 {
  return View$1.bind(f,v);
 };
 View$1.bind=function(a,a$1)
 {
  return View.Bind(a,a$1);
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
 PlgElemName=AppFramework.PlgElemName=Runtime$1.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,PlgElemName);
 Mouse.get_Position=function()
 {
  !Input.MousePosSt$1().Active?(self.document.addEventListener("mousemove",function(evt)
  {
   Var$1.Set(Input.MousePosSt$1().PosV,[evt.clientX,evt.clientY]);
  },false),Input.MousePosSt$1().Active=true):void 0;
  return Input.MousePosSt$1().PosV.get_View();
 };
 Mouse.get_LeftPressed=function()
 {
  Input.ActivateButtonListener();
  return Input.MouseBtnSt$1().Left.get_View();
 };
 Mouse.get_RightPressed=function()
 {
  Input.ActivateButtonListener();
  return Input.MouseBtnSt$1().Right.get_View();
 };
 Mouse.get_MiddlePressed=function()
 {
  Input.ActivateButtonListener();
  return Input.MouseBtnSt$1().Middle.get_View();
 };
 Keyboard.get_KeysPressed=function()
 {
  Input.ActivateKeyListener();
  return Input.KeyListenerState().KeysPressed.get_View();
 };
 WcSplitter.init=function(layoutH,layoutV)
 {
  var o;
  o=new WcSplitterT.New();
  WcSplitter.set_layoutHorizontal(layoutH);
  WcSplitter.set_layoutVertical(layoutV);
  WebComponent.defineWebComponent("wcomp-splitter",WcSplitterT.Constructor,self.FsRootDll.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New);
 };
 WcSplitter.set_layoutHorizontal=function($1)
 {
  SC$2.$cctor();
  SC$2.layoutHorizontal=$1;
 };
 WcSplitter.set_layoutVertical=function($1)
 {
  SC$2.$cctor();
  SC$2.layoutVertical=$1;
 };
 WcSplitter.layoutVertical=function()
 {
  SC$2.$cctor();
  return SC$2.layoutVertical;
 };
 WcSplitter.layoutHorizontal=function()
 {
  SC$2.$cctor();
  return SC$2.layoutHorizontal;
 };
 WcTabStrip.init=function()
 {
  SC$2.$cctor();
  return SC$2.init;
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
 WcTabStrip.css=function()
 {
  SC$2.$cctor();
  return SC$2.css;
 };
 AppFrameworkTemplate.html=function()
 {
  SC$2.$cctor();
  return SC$2.html;
 };
 LM.getDocFor=function(elements,def,newF,predWO,elUI)
 {
  return LM.getDocForW(View.Const(elements),elements.key,def,newF,predWO,elUI);
 };
 LM.getDocForW=function(elementsW,keyF,def,newF,predWO,elUI)
 {
  var selected0,selectedV,b,result,elUIF,listW;
  function _delete(k,u)
  {
   selectedV.Set(null);
   return View.Get(function(elements)
   {
    elements.RemoveByKey(k);
   },elementsW);
  }
  selected0=Var$1.Create$1(null);
  selectedV=new FromView.New((b=View.get_Do(),View.Bind(function(a)
  {
   return View.Bind(function(a$1)
   {
    var sel;
    return a$1!=null&&a$1.$==1?(sel=a$1.$0,View.Bind(function(a$2)
    {
     return!a$2?View.Const(null):View.Const({
      $:1,
      $0:sel
     });
    },a.ContainsKeyAsView(sel))):View.Const(null);
   },selected0.get_View());
  },elementsW)),function(v)
  {
   View.Get(function(elements)
   {
    var v$1,$1;
    v$1=v!=null&&v.$==1&&(elements.ContainsKey(v.$0)&&($1=v.$0,true))?{
     $:1,
     $0:$1
    }:null;
    !Unchecked.Equals(selected0.Get(),v$1)?selected0.Set(v$1):void 0;
   },elementsW);
  });
  result=ListModelData.New(elementsW,Doc.get_Empty,selectedV,function()
  {
   var n;
   n=newF();
   View.Get(function(elements)
   {
    elements.Append(n);
    selectedV.Set({
     $:1,
     $0:keyF(n)
    });
   },elementsW);
   return n;
  },function()
  {
   var o;
   o=selectedV.Get();
   o==null?void 0:_delete(o.$0,null);
  },def);
  elUIF=elUI(result);
  listW=View.Bind(function(elems)
  {
   return ListModel$1.MapLens(predWO,function(k,v)
   {
    return(elUIF(View.Const({
     $:1,
     $0:k
    })))(v);
   },elems);
  },elementsW);
  return ListModelData.New(result.elemsW,function()
  {
   return Doc.Convert(Global.id,listW);
  },result.selV,result.add,result.delCur,result.def);
 };
 AppFrameworkUI$1.defPlg=function()
 {
  SC$2.$cctor();
  return SC$2.defPlg;
 };
 AppFrameworkUI$1.failCreate=function(s,u)
 {
  return(function($1)
  {
   return function($2)
   {
    return $1("Create "+Utils.toSafe($2)+" not implemented");
   };
  }(Operators.FailWith))(s);
 };
 AppFrameworkUI$1.showPlugIn=function(lmd,k,plgV)
 {
  var b,t,p,i;
  return(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"name",
   $1:View.Map(function($1)
   {
    return $1.plgName.get_Id();
   },plgV.get_View())
  }),t.WithHole(Handler.EventQ2(t.k,"select",function()
  {
   return t.i;
  },function()
  {
   var o;
   View.Get((o=lmd.selV,function(a)
   {
    o.Set(a);
   }),k);
  }))).WithHole({
   $:2,
   $0:"selected",
   $1:View.Map2(function($1,$2)
   {
    return Unchecked.Equals($1,$2)?"selected":"";
   },lmd.selV.get_View(),k)
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFrameworkUI$1.pluginsList=function()
 {
  SC$2.$cctor();
  return SC$2.pluginsList;
 };
 AppFrameworkUI$1.defVar=function()
 {
  SC$2.$cctor();
  return SC$2.defVar;
 };
 AppFrameworkUI$1.showVar=function(lmd,k,varV)
 {
  var nameW,b,b$1,t,p,i;
  nameW=(b=View.get_Do(),View.Bind(function(a)
  {
   return View.Bind(function(a$1)
   {
    return View.Const(a.varName.get_Id()+" = "+a$1);
   },a.varVar.get_View());
  },varV.get_View()));
  return(b$1=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"name",
   $1:nameW
  }),t.WithHole(Handler.EventQ2(t.k,"select",function()
  {
   return t.i;
  },function()
  {
   var o;
   View.Get((o=lmd.selV,function(a)
   {
    o.Set(a);
   }),k);
  }))).WithHole({
   $:2,
   $0:"selected",
   $1:View.Map2(function($1,$2)
   {
    return Unchecked.Equals($1,$2)?"selected":"";
   },lmd.selV.get_View(),k)
  }),(p=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b$1.i=i,i)))).get_Doc();
 };
 AppFrameworkUI$1.defViw=function()
 {
  SC$2.$cctor();
  return SC$2.defViw;
 };
 AppFrameworkUI$1.showView=function(lmd,k,viwV)
 {
  var nameW,b,b$1,t,p,i;
  nameW=(b=View.get_Do(),View.Bind(function(a)
  {
   return View.Bind(function(a$1)
   {
    return View.Const(a.viwName.get_Id()+" = "+a$1);
   },a.viwView);
  },viwV.get_View()));
  return(b$1=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"name",
   $1:nameW
  }),t.WithHole(Handler.EventQ2(t.k,"select",function()
  {
   return t.i;
  },function()
  {
   var o;
   View.Get((o=lmd.selV,function(a)
   {
    o.Set(a);
   }),k);
  }))).WithHole({
   $:2,
   $0:"selected",
   $1:View.Map2(function($1,$2)
   {
    return Unchecked.Equals($1,$2)?"selected":"";
   },lmd.selV.get_View(),k)
  }),(p=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b$1.i=i,i)))).get_Doc();
 };
 AppFrameworkUI$1.defAct=function()
 {
  SC$2.$cctor();
  return SC$2.defAct;
 };
 AppFrameworkUI$1.showAct=function(lmd,k,actV)
 {
  var b,t,p,i;
  function parms(act)
  {
   var m,x,x$1;
   m=act.actFunction;
   return m.$==1?(x=Strings.concat(", ",List.ofArray([m.$1])),(function($1)
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
   }(Global.id))(x$1)):"";
  }
  return(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"name",
   $1:View.Map2(function($1,$2)
   {
    return $1.actName.get_Id()+parms($2);
   },actV.get_View(),actV.get_View())
  }),t.WithHole(Handler.EventQ2(t.k,"select",function()
  {
   return t.i;
  },function()
  {
   var o;
   View.Get((o=lmd.selV,function(a)
   {
    o.Set(a);
   }),k);
  }))).WithHole({
   $:2,
   $0:"selected",
   $1:View.Map2(function($1,$2)
   {
    return Unchecked.Equals($1,$2)?"selected":"";
   },lmd.selV.get_View(),k)
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFrameworkUI$1.defDoc=function()
 {
  SC$2.$cctor();
  return SC$2.defDoc;
 };
 AppFrameworkUI$1.showDoc=function(lmd,k,docV)
 {
  var b,t,p,i;
  return(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"name",
   $1:View.Map2(function($1,$2)
   {
    return $1.docName.get_Id()+AppFramework.docParms($2);
   },docV.get_View(),docV.get_View())
  }),t.WithHole(Handler.EventQ2(t.k,"select",function()
  {
   return t.i;
  },function()
  {
   var o;
   View.Get((o=lmd.selV,function(a)
   {
    o.Set(a);
   }),k);
  }))).WithHole({
   $:2,
   $0:"selected",
   $1:View.Map2(function($1,$2)
   {
    return Unchecked.Equals($1,$2)?"selected":"";
   },lmd.selV.get_View(),k)
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFrameworkUI$1.plgVarsList=function()
 {
  SC$2.$cctor();
  return SC$2.plgVarsList;
 };
 AppFrameworkUI$1.plgViewsList=function()
 {
  SC$2.$cctor();
  return SC$2.plgViewsList;
 };
 AppFrameworkUI$1.plgActsList=function()
 {
  SC$2.$cctor();
  return SC$2.plgActsList;
 };
 AppFrameworkUI$1.plgDocsList=function()
 {
  SC$2.$cctor();
  return SC$2.plgDocsList;
 };
 ListModelData=AppFramework.ListModelData=Runtime$1.Class({
  get_CurrentW:function()
  {
   var $this,b;
   $this=this;
   b=View.get_Do();
   return View.Bind(function(a)
   {
    return View.Bind(function(a$1)
    {
     return a$1==null?View.Const($this.def):View.Bind(function(a$2)
     {
      return a$2==null?View.Const($this.def):View.Const(a$2.$0);
     },a.TryFindByKeyAsView(a$1.$0));
    },$this.selV.get_View());
   },this.elemsW);
  },
  PlugIn:function(ofStrO,toStr)
  {
   var b,f;
   function g(v)
   {
   }
   b=AppFramework.plugin();
   return b.AddAct(b.AddAct(b.AddVar(b.AddDoc0(b.Yield(),"list",this.doc),"sel",AppFramework.lensStrO(AppFramework.mapVarO(ofStrO,toStr,this.selV))),"add",(f=this.add,function(x)
   {
    return g(f(x));
   })),"del",this.delCur);
  }
 },null,ListModelData);
 ListModelData.New=function(elemsW,doc,selV,add,delCur,def)
 {
  return new ListModelData({
   elemsW:elemsW,
   doc:doc,
   selV:selV,
   add:add,
   delCur:delCur,
   def:def
  });
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
 LayoutEngineModule.splitChar=function(ch)
 {
  function f(s)
  {
   return String.splitByChar(ch,s);
  }
  function g(s)
  {
   return Seq.map(String.trim,s);
  }
  return function(x)
  {
   return g(f(x));
  };
 };
 LayoutEngineModule.emptyLine=function(l)
 {
  var lt;
  lt=Strings.Trim(l);
  return lt===""||Strings.StartsWith(lt,"//");
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
 LayoutEngineModule.newLyt=function(name,lyt)
 {
  return LayoutEngine.New(name,Var$1.Create$1(lyt));
 };
 LayoutEngineModule.parseEntries=function(lytNm,txt)
 {
  var localRefs,x;
  localRefs=new Dictionary.New$5();
  x=(((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1("PlugInName View \""+Utils.toSafe($2)+"\"\n"+Utils.toSafe($3));
  }))(Global.id))(lytNm.get_Id()))(txt);
  return LayoutEngineModule.processText(Syntax.createEntryO2(lytNm,localRefs),x);
 };
 LayoutEngineModule.refreshEntries=function(lytN,entries)
 {
  var plg,m,plg$1,i;
  plg=(m=AppFramework.tryGetPlugIn(lytN),m==null?(plg$1=(i=AppFramework.defaultPlugIn(),PlugIn.New(lytN,i.plgVars,i.plgViews,i.plgDocs,i.plgActions,i.plgQueries)),(AppFramework.addPlugIn(plg$1),plg$1)):m.$0);
  ListModel$1.refreshLM(plg.plgVars,Arrays.ofSeq(Seq.delay(function()
  {
   return LayoutEngineModule.getVarEntries(entries);
  })));
  ListModel$1.refreshLM(plg.plgViews,Arrays.ofSeq(Seq.delay(function()
  {
   return LayoutEngineModule.getViewEntries(entries);
  })));
  ListModel$1.refreshLM(plg.plgActions,Arrays.ofSeq(Seq.delay(function()
  {
   return LayoutEngineModule.getActionEntries(entries);
  })));
  ListModel$1.refreshLM(plg.plgQueries,Arrays.ofSeq(Seq.delay(function()
  {
   return LayoutEngineModule.getQueryEntries(entries);
  })));
  ListModel$1.refreshLM(plg.plgDocs,Arrays.ofSeq(Seq.delay(function()
  {
   return LayoutEngineModule.getDocEntries(entries);
  })));
 };
 LayoutEngineModule.processText=function(f,txt)
 {
  return LayoutEngineModule.processLines(f,Strings.SplitChars(txt,["\n","\r"],1));
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
 LayoutEngineModule.getViewEntries=function(entries)
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
   return v.viwName;
  },Seq.choose(function(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.getActionEntries=function(entries)
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
   return v.actName;
  },Seq.choose(function(a)
  {
   return a.$==3?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.getQueryEntries=function(entries)
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
   return v.qryName;
  },Seq.choose(function(a)
  {
   return a.$==4?{
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
 LayoutEngineModule.processLines=function(f,ls)
 {
  function processLinesR(ls$1)
  {
   var m,l,m$1,$1,a,p,p$1,rest,docs,p$2,names,ls$2;
   m=Seq.tryHead(ls$1);
   return m!=null&&m.$==1?(l=m.$0,(m$1=LayoutEngineModule.splitTokens(l),m$1.$==1&&(a=LayoutEngineModule.Identifier(m$1.$0),a!=null&&a.$==1&&(m$1.$1.$==1&&(LayoutEngineModule.Vertical(m$1.$1.$0).$==2&&(m$1.$1.$1.$==0&&($1=a.$0,true)))))?(p=LayoutEngineModule.getExtraLines(function(l$1)
   {
    return Strings.StartsWith(Strings.Trim(l$1),"|");
   },ls$1),processLinesR((Layout.createLayoutDefinitions($1,Layout.extractNodes(p[0])))[1].concat(p[1]))):m$1.$==0?processLinesR(Slice.array(ls$1,{
    $:1,
    $0:1
   },null)):(p$1=LayoutEngineModule.getExtraLines(function(l$1)
   {
    return Strings.StartsWith(Strings.Trim(l$1),":");
   },ls$1),(rest=p$1[1],(docs=p$1[0],Arrays.length(docs)>0?(p$2=LayoutEngineModule.createLines(Seq.nth(0,Strings.SplitChars(l,[" "],1)),1,[],[],1,docs),(names=p$2[0],(ls$2=p$2[1],processLinesR(Arrays.ofSeq(Seq.delay(function()
   {
    return Seq.append(ls$2,Seq.delay(function()
    {
     return Seq.append([l+" "+Strings.concat(" ",names)],Seq.delay(function()
     {
      return rest;
     }));
    }));
   })))))):Arrays.ofSeq(Seq.delay(function()
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
 LayoutEngineModule.splitTokens=function(line)
 {
  return LayoutEngineModule.doubleQuote(List.ofSeq(Seq.collect(Global.id,Seq.mapi(function(i,s)
  {
   var t;
   return i%2===1?[{
    $:0,
    $0:s
   }]:s===""?[{
    $:0,
    $0:"\""
   }]:(t=Strings.Trim(s),t===""?[]:Arrays.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },Strings.SplitChars(t,[" "],1)));
  },String.splitByChar("\"",Unchecked.Equals(Seq.tryHead(line),{
   $:1,
   $0:"\""
  })?" "+line:line)))));
 };
 LayoutEngineModule.Identifier=function(a)
 {
  var $1,a$1,t;
  return a.$==1&&(a$1=LibraryJS.REGEX$1("^[$a-zA-Z_][0-9a-zA-Z_\\.\\-$]*$","",a.$0),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($1=Arrays.get(a$1.$0,0),true)))?{
   $:1,
   $0:$1
  }:null;
 };
 LayoutEngineModule.Vertical=function(a)
 {
  var $1,$2,$3,$4,$5,a$1;
  return a.$==1&&(a.$0==="vertical"&&($1=a.$0,true))?{
   $:0,
   $0:null
  }:a.$==1&&(a.$0==="horizontal"&&($2=a.$0,true))?{
   $:1,
   $0:null
  }:a.$==1&&(a.$0==="layout"&&($3=a.$0,true))?{
   $:2,
   $0:null
  }:a.$==1&&(a.$0==="grid"&&($4=a.$0,true))?{
   $:3,
   $0:null
  }:a.$==1&&(a.$0==="template"&&($5=a.$0,true))?{
   $:4,
   $0:null
  }:(a$1=LayoutEngineModule.Identifier(a),a$1!=null&&a$1.$==1?{
   $:5,
   $0:a$1.$0
  }:{
   $:6,
   $0:null
  });
 };
 LayoutEngineModule.getExtraLines=function(pred,ls)
 {
  var i,x,o,v,a;
  i=(x=(o=Seq.tryFindIndex(function(l)
  {
   return(LayoutEngineModule.notEmpty())(l)&&!pred(l);
  },Seq.skip(1,ls)),o==null?null:{
   $:1,
   $0:1+o.$0
  }),(v=Arrays.length(ls),x==null?v:x.$0));
  return[(a=Slice.array(ls,{
   $:1,
   $0:1
  },{
   $:1,
   $0:i-1
  }),Arrays.filter(LayoutEngineModule.notEmpty(),a)),Slice.array(ls,{
   $:1,
   $0:i
  },null)];
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
  },ls),(name=(((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1("_"+Utils.toSafe($2)+"_"+Global.String($3));
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
    return Seq.append(childrenLines,Seq.delay(function()
    {
     return[name+" "+l+" "+Strings.concat(" ",childNames)];
    }));
   }));
  })),i+1,p[1]))))))):[names,lines]):[names,lines];
 };
 LayoutEngineModule.splitSemiColon=function()
 {
  SC$2.$cctor();
  return SC$2.splitSemiColon;
 };
 LayoutEngineModule.splitInTwo=function(ch)
 {
  var f;
  f=LayoutEngineModule.splitChar(ch);
  return function(x)
  {
   return Arrays.ofSeq(f(x));
  };
 };
 LayoutEngineModule.PlugIn=function(a)
 {
  var $1,$2,$3,$4,$5,$6;
  return a.$==1&&(a.$0==="PlugIn"&&($1=a.$0,true))?{
   $:0,
   $0:null
  }:a.$==1&&(a.$0==="Button"&&($2=a.$0,true))?{
   $:1,
   $0:null
  }:a.$==1&&(a.$0==="input"&&($3=a.$0,true))?{
   $:2,
   $0:null
  }:a.$==1&&(a.$0==="textarea"&&($4=a.$0,true))?{
   $:3,
   $0:null
  }:a.$==1&&(a.$0==="select"&&($5=a.$0,true))?{
   $:4,
   $0:null
  }:a.$==1&&(a.$0==="Actions"&&($6=a.$0,true))?{
   $:5,
   $0:null
  }:{
   $:6,
   $0:null
  };
 };
 LayoutEngineModule.Var=function(a)
 {
  var $1,$2,$3,$4,$5,$6;
  return a.$==1&&(a.$0==="Var"&&($1=a.$0,true))?{
   $:0,
   $0:null
  }:a.$==1&&(a.$0==="Doc"&&($2=a.$0,true))?{
   $:1,
   $0:null
  }:a.$==1&&(a.$0==="View"&&($3=a.$0,true))?{
   $:2,
   $0:null
  }:a.$==1&&(a.$0==="ViewJS"&&($4=a.$0,true))?{
   $:3,
   $0:null
  }:a.$==1&&(a.$0==="Docs"&&($5=a.$0,true))?{
   $:4,
   $0:null
  }:a.$==1&&(a.$0==="Action"&&($6=a.$0,true))?{
   $:5,
   $0:null
  }:{
   $:6,
   $0:null
  };
 };
 LayoutEngineModule.Measures$1=function(a)
 {
  var a$1,$1,a$2,$2,a$3,$3,a$4,a$5,a$6;
  return a.$==1?(a$1=String.splitByChar("-",a.$0),!Unchecked.Equals(a$1,null)&&a$1.length===1&&(a$2=(ParseO.Double())(Arrays.get(a$1,0)),a$2!=null&&a$2.$==1&&($1=a$2.$0,true))?{
   $:1,
   $0:new Measures({
    $:0,
    $0:$1,
    $1:true
   })
  }:!Unchecked.Equals(a$1,null)&&a$1.length===2&&(Arrays.get(a$1,0)===""&&(a$3=(ParseO.Double())(Arrays.get(a$1,1)),a$3!=null&&a$3.$==1&&($2=a$3.$0,true)))?{
   $:1,
   $0:new Measures({
    $:0,
    $0:$2,
    $1:false
   })
  }:!Unchecked.Equals(a$1,null)&&a$1.length===3&&(a$4=(ParseO.Double())(Arrays.get(a$1,0)),a$4!=null&&a$4.$==1&&(a$5=(ParseO.Double())(Arrays.get(a$1,1)),a$5!=null&&a$5.$==1&&(a$6=(ParseO.Double())(Arrays.get(a$1,2)),a$6!=null&&a$6.$==1&&($3=[a$6.$0,a$4.$0,a$5.$0],true))))?{
   $:1,
   $0:new Measures({
    $:1,
    $0:$3[1],
    $1:$3[2],
    $2:$3[0]
   })
  }:null):null;
 };
 LayoutEngineModule.doubleQuote=function(a)
 {
  var $1,$2,$3;
  switch(a.$==1?a.$0.$==1?Strings.StartsWith(a.$0.$0,"//")?($1=a.$0.$0,1):2:2:0)
  {
   case 0:
    return T.Empty;
   case 1:
    return T.Empty;
   case 2:
    switch(a.$==1?a.$0.$==0?a.$1.$==1?a.$1.$0.$==0?a.$1.$0.$0==="\""?a.$1.$1.$==0?($3=a.$0.$0,1):a.$1.$1.$0.$==0?($3=[a.$1.$1.$1,a.$0.$0,a.$1.$1.$0.$0],0):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):3)
    {
     case 0:
      $2=LayoutEngineModule.doubleQuote(new T({
       $:1,
       $0:{
        $:0,
        $0:$3[1]+"\""+$3[2]
       },
       $1:$3[0]
      }));
      break;
     case 1:
      $2=List.ofArray([{
       $:0,
       $0:$3
      }]);
      break;
     case 2:
      $2=new T({
       $:1,
       $0:$3[0],
       $1:LayoutEngineModule.doubleQuote($3[1])
      });
      break;
     case 3:
      throw new MatchFailureException.New("D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\LayoutEngine\\src\\LayoutEngine.fs",2899,38);
    }
    return $2;
  }
 };
 LayoutEngineModule.notEmpty=function()
 {
  SC$2.$cctor();
  return SC$2.notEmpty;
 };
 NewLY.aV=function()
 {
  SC$2.$cctor();
  return SC$2.aV;
 };
 NewLY.currentPlugInNameDef=function()
 {
  SC$2.$cctor();
  return SC$2.currentPlugInNameDef$1;
 };
 NewLY.name=function()
 {
  SC$2.$cctor();
  return SC$2.name;
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
 NewLY.enterName=function()
 {
  SC$2.$cctor();
  return SC$2.enterName;
 };
 NewLY.concat=function(a,b)
 {
  return(((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1("Concat("+Global.String($2)+", "+$3.toFixed(6)+")");
  }))(Global.id))(a))(b);
 };
 NewLY.main0=function()
 {
  SC$2.$cctor();
  return SC$2.main0;
 };
 NewLY.sayHello=function()
 {
  SC$2.$cctor();
  return SC$2.sayHello;
 };
 NewLY.main1=function()
 {
  SC$2.$cctor();
  return SC$2.main1;
 };
 NewLY.main=function()
 {
  SC$2.$cctor();
  return SC$2.main;
 };
 NewLY.appFwk=function()
 {
  SC$2.$cctor();
  return SC$2.appFwk;
 };
 NewLY.main2=function()
 {
  SC$2.$cctor();
  return SC$2.main2;
 };
 NewLY.textValToTextType=function(a)
 {
  var $1;
  return(a.$==3?($1=a.$0.$0,false):a.$==4?($1=a.$0.$0,false):a.$==1?($1=a.$0.$0,false):a.$==2?($1=a.$0.$0,false):true)?{
   $:0,
   $0:a.$0
  }:NewLY.itemRefToTextType($1);
 };
 NewLY.itemRefToTextType=function(a)
 {
  return a.$==1?{
   $:1,
   $0:(((Runtime$1.Curried3(function($1,$2,$3)
   {
    return $1(Utils.toSafe($2)+"."+Utils.toSafe($3));
   }))(Global.id))(a.$0))(a.$1)
  }:{
   $:1,
   $0:a.$0
  };
 };
 NewLY.currentPlugInNameD=function()
 {
  SC$2.$cctor();
  return SC$2.currentPlugInNameD$1;
 };
 NewLY.itemRefToString=function(a)
 {
  return a.$==1?(((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1(Utils.toSafe($2)+"."+Utils.toSafe($3));
  }))(Global.id))(a.$0))(a.$1):a.$0;
 };
 NewLY.itemRefToAbsolute=function(lyt)
 {
  function f(a)
  {
   return a.$==1?[a.$0,a.$1]:[lyt,a.$0];
  }
  function g(a,b)
  {
   return(((Runtime$1.Curried3(function($1,$2,$3)
   {
    return $1(Utils.toSafe($2)+"."+Utils.toSafe($3));
   }))(Global.id))(a))(b);
  }
  return function(x)
  {
   return g.apply(null,f(x));
  };
 };
 NewLY.defVar=function(lytN,n,v)
 {
  return Var$1.Create$1(v);
 };
 NewLY.defDocF=function(lytN,n,a,ds)
 {
  var dc,b;
  dc=a.$0;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.currentPlugInNameD(),function(a$1)
   {
    return b.Bind(NewLY.getParam2D(),function(a$2)
    {
     var p,x,lyt,elem;
     function passParm($1,$2)
     {
      var a$3,f1;
      return $1.$==0?$2.$==0?$1:{
       $:0,
       $0:$1.$0
      }:$1.$==2?$2.$==1?(a$3=$2.$0,(f1=$1.$0,{
       $:1,
       $0:function()
       {
        return f1(a$2(a$3));
       }
      })):$1:$1.$==3?$2.$==1?passParm({
       $:2,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2
      },$2.$1):$1:$1.$==4?$2.$==1?passParm({
       $:3,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2,
       $2:$1.$3
      },$2.$1):$1:$1.$==5?$2.$==1?passParm({
       $:4,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2,
       $2:$1.$3,
       $3:$1.$4
      },$2.$1):$1:$1.$==6?$2.$==1?passParm({
       $:5,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2,
       $2:$1.$3,
       $3:$1.$4,
       $4:$1.$5
      },$2.$1):$1:{
       $:0,
       $0:$1.$0()
      };
     }
     p=(x=NewLY.itemRefToString(dc),(AppFramework.splitName(a$1))(x));
     lyt=p[0];
     elem=p[1];
     return b.Return(Lazy.Create(function()
     {
      var o,o$1;
      o=(o$1=AppFramework.tryGetDoc(lyt,elem),o$1==null?null:{
       $:1,
       $0:passParm(o$1.$0.docDoc.f(),ds)
      });
      return o==null?{
       $:0,
       $0:AppFramework.errDoc((function($1)
       {
        return function($2)
        {
         return $1("Missing doc: "+LayoutEngine_GeneratedPrintf.p$1($2));
        };
       }(Global.id))(dc))
      }:o.$0;
     }));
    });
   });
  })));
 };
 NewLY.defAction=function(lytN,n,a,ps)
 {
  var ac,b;
  ac=a.$0;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.currentPlugInNameD(),function(a$1)
   {
    return b.Bind(NewLY.getParamTextD(),function(a$2)
    {
     var o,t,$1,$2,r,o$1,act,$3,f,t1,f$1,t1$1,t2,f$2,t1$2;
     r=NewLY.itemRefToString(ac);
     o$1=(t=(AppFramework.splitName(a$1))(r),AppFramework.tryGetAct(t[0],t[1]));
     if(o$1==null)
      o=null;
     else
      {
       act=o$1.$0;
       if(ps.$===0)
        $1=act.actFunction;
       else
        {
         $3=act.actFunction;
         switch($3.$==1?ps.$==1?ps.$1.$==0?($2=[$3.$0,ps.$0],0):3:3:$3.$==2?ps.$==1?ps.$1.$==0?($2=[$3.$0,$3.$2,ps.$0],2):ps.$1.$1.$==0?($2=[$3.$0,ps.$0,ps.$1.$0],1):3:3:3)
         {
          case 0:
           $1=(f=$2[0],(t1=$2[1],{
            $:0,
            $0:function()
            {
             (a$2(t1))(f);
            }
           }));
           break;
          case 1:
           $1=(f$1=$2[0],(t1$1=$2[1],(t2=$2[2],{
            $:0,
            $0:function()
            {
             (a$2(t1$1))(function(p1)
             {
              (a$2(t2))(f$1(p1));
             });
            }
           })));
           break;
          case 2:
           $1=(f$2=$2[0],(t1$2=$2[2],{
            $:1,
            $0:function(p2)
            {
             (a$2(t1$2))(function(p1)
             {
              (f$2(p1))(p2);
             });
            },
            $1:$2[1]
           }));
           break;
          case 3:
           $1={
            $:0,
            $0:function()
            {
             ((((Runtime$1.Curried(function($4,$5,$6,$7)
             {
              return $4("Parameters do not coincide for Action "+Utils.toSafe($5)+" "+Utils.printList(function($8)
              {
               return LayoutEngine_GeneratedPrintf.p$16($8);
              },$6)+" "+GeneratedPrintf.p$2($7));
             },4))(function(s)
             {
              console.log(s);
             }))(r))(ps))(act);
            }
           };
           break;
         }
        }
       o={
        $:1,
        $0:$1
       };
      }
     return b.Return(o==null?{
      $:0,
      $0:function()
      {
       ((function($4)
       {
        return function($5)
        {
         return $4("Action Not Found "+Utils.toSafe($5));
        };
       }(function(s)
       {
        console.log(s);
       }))(r));
      }
     }:o.$0);
    });
   });
  })));
 };
 NewLY.defActions=function(lytN,n,acs)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.currentPlugInNameD(),function(a)
   {
    return b.Bind(NewLY.getParamTextD(),function()
    {
     return b.Return({
      $:0,
      $0:function()
      {
       Seq.iter(function(a$1)
       {
        var r,o,o$1,t;
        r=NewLY.itemRefToString(a$1.$0);
        AppFramework.callFunction(null,null,(o=(o$1=(t=(AppFramework.splitName(a))(r),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
         $:1,
         $0:o$1.$0.actFunction
        }),o==null?{
         $:0,
         $0:function()
         {
          ((function($1)
          {
           return function($2)
           {
            return $1("Action Not Found "+Utils.toSafe($2));
           };
          }(function(s)
          {
           console.log(s);
          }))(r));
         }
        }:o.$0));
       },acs);
      }
     });
    });
   });
  })));
 };
 NewLY.defButton=function(lytN,n,ac,attrs,tx)
 {
  return AppFramework.makeAViewDoc0(function()
  {
   return AppFramework.errDocf(function($1)
   {
    return $1("Button deprecated use button \"click=@{Action}\"");
   });
  });
 };
 NewLY.defInput=function(lytN,n,v,attrs)
 {
  return AppFramework.makeAViewDoc0(function()
  {
   return AppFramework.errDocf(function($1)
   {
    return $1("input deprecated use AF.Input");
   });
  });
 };
 NewLY.defTextArea=function(lytN,n,v,attrs)
 {
  return AppFramework.makeAViewDoc0(function()
  {
   return AppFramework.errDocf(function($1)
   {
    return $1("TextArea deprecated use AF.TextArea");
   });
  });
 };
 NewLY.defElement=function(lytN,n,elem,attrs,docs)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.nodeRefToDocD(),function(a)
   {
    return b.Bind(AppFramework.extractAtsD(),function(a$1)
    {
     return b.Bind(NewLY.getParam2D(),function(a$2)
     {
      return b.Return(AppFramework.makeAViewDoc0(function()
      {
       try
       {
        return Doc.Element(elem,a$1(a$2(attrs)),Seq.map(a,docs));
       }
       catch(e)
       {
        return Doc.TextNode(e.message);
       }
      }));
     });
    });
   });
  })));
 };
 NewLY.defConcat=function(lytN,n,docs)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.nodeRefToDocD(),function(a)
   {
    return b.Return(AppFramework.makeAViewDoc0(function()
    {
     return Doc.Concat(Seq.map(a,docs));
    }));
   });
  })));
 };
 NewLY.defView=function(lytN,n,ps)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.currentPlugInNameD(),function()
   {
    return b.Bind(NewLY.getParam2D(),function(a)
    {
     return b.Bind(AppFramework.extractTextD(),function(a$1)
     {
      return b.Return(View.Bind(function()
      {
       function g(s)
       {
        return Strings.concat("",s);
       }
       return View.Map(function(x)
       {
        return g(Arrays.ofSeq(x));
       },View$1.traverseSeq(function(x)
       {
        return a$1(a(x));
       },ps));
      },AppFramework.baseView()));
     });
    });
   });
  })));
 };
 NewLY.defViewJS=function(lytN,n,ps)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.currentPlugInNameD(),function()
   {
    return b.Bind(NewLY.getParamD(),function(a)
    {
     return b.Return(View.Bind(function()
     {
      try
      {
       return View.Map(function(ar)
       {
        try
        {
         return!Unchecked.Equals(ar,null)&&ar.length===0?"No JS function specified":!Unchecked.Equals(ar,null)&&ar.length===1?Global.String(Global["eval"](Arrays.get(ar,0))):Global.String(Global["eval"](Arrays.get(ar,0)).apply(null,Slice.array(ar,{
          $:1,
          $0:1
         },null)));
        }
        catch(e)
        {
         return e.message;
        }
       },View.Map(Arrays.ofSeq,View$1.traverseSeq(a,ps)));
      }
      catch(e)
      {
       return View.Const(e.message);
      }
     },AppFramework.baseView()));
    });
   });
  })));
 };
 NewLY.defSplitter=function(lytN,n,v,m,a,a$1)
 {
  var l,r,b;
  l=a.$0;
  r=a$1.$0;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(Extract0.getDocFromTextTypesD(),function(a$2)
   {
    return b.Return(function()
    {
     function getDoc(d)
     {
      return AppFramework.makeAViewDoc(function()
      {
       return a$2(List.ofArray([NewLY.itemRefToTextType(d)]));
      });
     }
     return m.$==1?LayoutEngineModule.variableSplitter(v,m.$0,m.$1,m.$2,getDoc(l),getDoc(r)):LayoutEngineModule.fixedSplitter(v,m.$0,m.$1,getDoc(l),getDoc(r));
    });
   });
  })));
 };
 NewLY.defTemplate=function(lytN,n,tmpDef)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.nodeRefToDocD(),function(a)
   {
    return b.Bind(NewLY.varRefToVarD(),function(a$1)
    {
     return b.Bind(AppFramework.extractTextD(),function(a$2)
     {
      return b.Bind(AppFramework.extractAtsD(),function(a$3)
      {
       return b.Bind(NewLY.actRefToActD(),function(a$4)
       {
        return b.Bind(NewLY.getParam2D(),function(a$5)
        {
         return b.Return(AppFramework.makeAViewDoc0(function()
         {
          var attrs,x,s;
          function eventAct(act,el,ev)
          {
           return AppFramework.callFunction(el,ev,act.actFunction);
          }
          try
          {
           attrs=a$3(a$5(tmpDef.attrs));
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
              $1:a$1(vr)
             };
            }
            return Seq.append(Seq.map(function($1)
            {
             return m($1[0],$1[1]);
            },tmpDef.vars),Seq.delay(function()
            {
             function m$1(nm,wr)
             {
              return{
               $:2,
               $0:nm.toLowerCase(),
               $1:a$2(a$5(wr))
              };
             }
             return Seq.append(Seq.map(function($1)
             {
              return m$1($1[0],$1[1]);
             },tmpDef.views),Seq.delay(function()
             {
              function m$2(nm,nr)
              {
               return{
                $:0,
                $0:nm.toLowerCase(),
                $1:a({
                 $:1,
                 $0:nr
                })
               };
              }
              return Seq.append(Seq.map(function($1)
              {
               return m$2($1[0],$1[1]);
              },tmpDef.docs),Seq.delay(function()
              {
               function m$3(nm,ar)
               {
                var $1;
                return{
                 $:4,
                 $0:nm.toLowerCase(),
                 $1:($1=a$4(ar),(Runtime$1.Curried3(eventAct))($1))
                };
               }
               return Seq.map(function($1)
               {
                return m$3($1[0],$1[1]);
               },tmpDef.actions);
              }));
             }));
            }));
           }));
           return Templates.NamedTemplate("local",{
            $:1,
            $0:tmpDef.tmpName.toLowerCase()
           },x);
          }
          catch(e)
          {
           return Doc.TextNode(e.message);
          }
         }));
        });
       });
      });
     });
    });
   });
  })));
 };
 NewLY.addNewLayoutAct=function(name,layout)
 {
  var x;
  NewLY.addLayout(!Unchecked.Equals(name,null)?name:"Lyt_"+Strings.Replace(Global.String(Guid.NewGuid()),"-",""),(x=!Unchecked.Equals(layout,null)&&!Unchecked.Equals(name,null)?layout:"\r\n                                        perc  Var \"50\"\r\n                                        perc2 Var \"50\"\r\n                                        gap  Var \"5px\"\r\n            \r\n                                        Ask1 div \"background:lightblue; height:100%\"\r\n                                        : Doc AF.InputLabel \"placeholder=Type percentage here...\" \"Percentage (%):\" perc\r\n            \r\n                                        Ask2a div \"background:pink; height:100%\"\r\n                                        : Doc AF.InputLabel \"placeholder=Type percentage here...\" \"Percentage (%):\" perc2\r\n            \r\n                                        Ask2b div \"background:lightgreen; height:100%\"\r\n                                        : Doc AF.InputLabel \"placeholder=Type gap here...\" \"Gap:\" gap\r\n            \r\n                                        dragSplitter  Action AF.DragSplitter \"@{PlugInName}.perc\"\r\n                                        dragSplitter2 Action AF.DragSplitter \"@{PlugInName}.perc2\"\r\n            \r\n                                        Ask2 template HSplitter1 \"height:100%\" \"gap:gap\" \"doc1: Ask2a; doc2:Ask2b\" \"perc:perc2\" \"MouseDown:dragSplitter2\"\r\n            \r\n                                        main div \"\"\r\n                                        :    template VSplitter1  \"height:100%\" \"gap:gap\" \"doc1: Ask1 ; doc2:Ask2 \" \"perc:perc \" \"MouseDown:dragSplitter \"\r\n            \r\n                                        split horizontal 0-50-100 AppFramework.AppFwkClient main\r\n                                    ",(String.unindentStr())(x)));
 };
 NewLY.getParam2D=function()
 {
  SC$2.$cctor();
  return SC$2.getParam2D;
 };
 NewLY.getParamTextD=function()
 {
  SC$2.$cctor();
  return SC$2.getParamTextD;
 };
 NewLY.nodeRefToDocD=function()
 {
  SC$2.$cctor();
  return SC$2.nodeRefToDocD;
 };
 NewLY.getParamD=function()
 {
  SC$2.$cctor();
  return SC$2.getParamD;
 };
 NewLY.varRefToVarD=function()
 {
  SC$2.$cctor();
  return SC$2.varRefToVarD;
 };
 NewLY.actRefToActD=function()
 {
  SC$2.$cctor();
  return SC$2.actRefToActD;
 };
 NewLY.addLayout=function(name,content)
 {
  NewLY.addNewLayout(LayoutEngineModule.newLyt(new PlugInName({
   $:0,
   $0:name
  }),content));
 };
 NewLY.addNewLayout=function(lyt)
 {
  var parseW,l,errorsW,f,defsW,f$1,g,entries,g$1,l$1;
  function c(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0
   }:null;
  }
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
  function c$1(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  }
  function f$2(s)
  {
   return Seq.append(entries,s);
  }
  parseW=View.Map((l=lyt.lytName,function(t)
  {
   return LayoutEngineModule.parseEntries(l,t);
  }),lyt.lytDefinition.get_View());
  errorsW=View.Map((f=function(s)
  {
   return Seq.choose(c,s);
  },function(x)
  {
   return g$2(f(x));
  }),parseW);
  defsW=View.Map((f$1=function(s)
  {
   return Seq.choose(c$1,s);
  },(g=NewLY.generateEntries(lyt.lytName),function(x)
  {
   return g(f$1(x));
  })),parseW);
  entries=List.ofArray([{
   $:0,
   $0:AppFramework.newVar(new PlgElemName({
    $:0,
    $0:"Layout"
   }),lyt.lytDefinition)
  },{
   $:1,
   $0:AppFramework.newViw(new PlgElemName({
    $:0,
    $0:"ParseMsgs"
   }),errorsW)
  }]);
  View.Sink((g$1=(l$1=lyt.lytName,function(e)
  {
   LayoutEngineModule.refreshEntries(l$1,e);
  }),function(x)
  {
   return g$1(f$2(x));
  }),defsW);
 };
 NewLY.generateEntries=function(lytN)
 {
  function c($1,$2)
  {
   var x,x$1,x$2,x$3,x$4,x$5,x$6,x$7,x$8,x$9,x$10,x$11,x$12;
   return $2.$==0?$2.$0.$==1?{
    $:1,
    $0:{
     $:2,
     $0:(x=(NewLY.defButtonM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2]),AppFramework.newDoc0(new PlgElemName({
      $:0,
      $0:$1
     }),x))
    }
   }:$2.$0.$==2?{
    $:1,
    $0:{
     $:2,
     $0:(x$1=(NewLY.defInputM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]),AppFramework.newDoc0(new PlgElemName({
      $:0,
      $0:$1
     }),x$1))
    }
   }:$2.$0.$==3?{
    $:1,
    $0:{
     $:2,
     $0:(x$2=(NewLY.defTextAreaM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]),AppFramework.newDoc0(new PlgElemName({
      $:0,
      $0:$1
     }),x$2))
    }
   }:$2.$0.$==5?{
    $:1,
    $0:{
     $:2,
     $0:(x$3=(NewLY.defConcatM())([lytN,$1,$2.$0.$0.$0]),AppFramework.newDoc0(new PlgElemName({
      $:0,
      $0:$1
     }),x$3))
    }
   }:$2.$0.$==6?{
    $:1,
    $0:{
     $:2,
     $0:(x$4=(NewLY.defElementM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2]),AppFramework.newDoc0(new PlgElemName({
      $:0,
      $0:$1
     }),x$4))
    }
   }:$2.$0.$==4?{
    $:1,
    $0:{
     $:2,
     $0:(x$5=(NewLY.defDocFM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]),AppFramework.newDocL(new PlgElemName({
      $:0,
      $0:$1
     }),x$5))
    }
   }:$2.$0.$==7?{
    $:1,
    $0:{
     $:2,
     $0:(x$6=(NewLY.defTemplateM())([lytN,$1,$2.$0.$0]),AppFramework.newDoc0(new PlgElemName({
      $:0,
      $0:$1
     }),x$6))
    }
   }:{
    $:1,
    $0:{
     $:2,
     $0:(x$7=(NewLY.defSplitterM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2,$2.$0.$0.$3]),AppFramework.newDoc0(new PlgElemName({
      $:0,
      $0:$1
     }),x$7))
    }
   }:$2.$==1?{
    $:1,
    $0:{
     $:3,
     $0:(x$8=(NewLY.defActionM())([lytN,$1,$2.$0.$0,$2.$0.$1]),AppFramework.newActF(new PlgElemName({
      $:0,
      $0:$1
     }),x$8))
    }
   }:$2.$==2?{
    $:1,
    $0:{
     $:3,
     $0:(x$9=(NewLY.defActionsM())([lytN,$1,$2.$0.$0]),AppFramework.newActF(new PlgElemName({
      $:0,
      $0:$1
     }),x$9))
    }
   }:$2.$==4?{
    $:1,
    $0:{
     $:1,
     $0:(x$10=(NewLY.defViewM())([lytN,$1,$2.$0.$0]),AppFramework.newViw(new PlgElemName({
      $:0,
      $0:$1
     }),x$10))
    }
   }:$2.$==5?{
    $:1,
    $0:{
     $:1,
     $0:(x$11=(NewLY.defViewJSM())([lytN,$1,$2.$0.$0]),AppFramework.newViw(new PlgElemName({
      $:0,
      $0:$1
     }),x$11))
    }
   }:$2.$==7?null:$2.$==6?null:{
    $:1,
    $0:{
     $:0,
     $0:(x$12=NewLY.defVarM(lytN,$1,$2.$0.$0),AppFramework.newVar(new PlgElemName({
      $:0,
      $0:$1
     }),x$12))
    }
   };
  }
  return function(s)
  {
   return Seq.choose(function($1)
   {
    return c($1[0],$1[1]);
   },s);
  };
 };
 NewLY.defButtonM=function()
 {
  SC$2.$cctor();
  return SC$2.defButtonM;
 };
 NewLY.defInputM=function()
 {
  SC$2.$cctor();
  return SC$2.defInputM;
 };
 NewLY.defTextAreaM=function()
 {
  SC$2.$cctor();
  return SC$2.defTextAreaM;
 };
 NewLY.defConcatM=function()
 {
  SC$2.$cctor();
  return SC$2.defConcatM;
 };
 NewLY.defElementM=function()
 {
  SC$2.$cctor();
  return SC$2.defElementM;
 };
 NewLY.defDocFM=function()
 {
  SC$2.$cctor();
  return SC$2.defDocFM;
 };
 NewLY.defTemplateM=function()
 {
  SC$2.$cctor();
  return SC$2.defTemplateM;
 };
 NewLY.defSplitterM=function()
 {
  SC$2.$cctor();
  return SC$2.defSplitterM;
 };
 NewLY.defActionM=function()
 {
  SC$2.$cctor();
  return SC$2.defActionM;
 };
 NewLY.defActionsM=function()
 {
  SC$2.$cctor();
  return SC$2.defActionsM;
 };
 NewLY.defViewM=function()
 {
  SC$2.$cctor();
  return SC$2.defViewM;
 };
 NewLY.defViewJSM=function()
 {
  SC$2.$cctor();
  return SC$2.defViewJSM;
 };
 NewLY.defVarM=function(l,n,i)
 {
  var v;
  v=(NewLY.defVarM0())([l,n,NewLY.initVal()]);
  v.Get()===NewLY.initVal()?v.Set(i):void 0;
  return v;
 };
 NewLY.defVarM0=function()
 {
  SC$2.$cctor();
  return SC$2.defVarM0;
 };
 NewLY.initVal=function()
 {
  SC$2.$cctor();
  return SC$2.initVal;
 };
 P.New=function(r)
 {
  return{
   r:r
  };
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
 LazyRecord.New=function(created,evalOrVal,force)
 {
  return{
   c:created,
   v:evalOrVal,
   f:force
  };
 };
 PlugInQuery.New=function(qryName,qryFunction)
 {
  return{
   qryName:qryName,
   qryFunction:qryFunction
  };
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
  Update:function(f)
  {
   this.Set(f(this.Get()));
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
 Dictionary=Collections.Dictionary=Runtime$1.Class({
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
  Add:function(k,v)
  {
   this.add(k,v);
  },
  set_Item:function(k,v)
  {
   this.set(k,v);
  },
  add:function(k,v)
  {
   var $this,h,d;
   $this=this;
   h=this.hash(k);
   d=this.data[h];
   d==null?(this.count=this.count+1,this.data[h]=new Global.Array({
    K:k,
    V:v
   })):(Arrays.exists(function(a)
   {
    return $this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);
   },d)?DictionaryUtil.alreadyAdded():void 0,this.count=this.count+1,d.push({
    K:k,
    V:v
   }));
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
  Remove:function(k)
  {
   return this.remove(k);
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
  get_Keys:function()
  {
   return new KeyCollection.New(this);
  },
  get_Item:function(k)
  {
   return this.get(k);
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
  Clear:function()
  {
   this.data=[];
   this.count=0;
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
  Update:function(f)
  {
   var g;
   View.Get((g=this.set,function(x)
   {
    return g(f(x));
   }),this.view);
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
 Client.Box=Global.id;
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
 Array.mapInPlace=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=f(arr[i]);
  return arr;
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
 View=UI.View=Runtime$1.Class({},null,View);
 Attrs.EmptyAttr=function()
 {
  SC$3.$cctor();
  return SC$3.EmptyAttr;
 };
 Attrs.Dynamic=function(view,set)
 {
  return new AttrProxy({
   $:1,
   $0:new DynamicAttrNode.New(view,set)
  });
 };
 Attrs.Static=function(attr$1)
 {
  return new AttrProxy({
   $:3,
   $0:attr$1
  });
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
 Attrs.Updates=function(dyn)
 {
  return Array.MapTreeReduce(function(x)
  {
   return x.NChanged();
  },View.Const(),View.Map2Unit,dyn.DynNodes);
 };
 Attrs.Empty=function(e)
 {
  return Dyn.New(e,0,[],null);
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
 BalancedTree.OfSeq=function(data)
 {
  var a;
  a=Arrays.ofSeq(Seq.distinct(data));
  Arrays.sortInPlace(a);
  return BalancedTree.Build(a,0,a.length-1);
 };
 BalancedTree.Build=function(data,min,max)
 {
  var center,left,right;
  return max-min+1<=0?null:(center=(min+max)/2>>0,(left=BalancedTree.Build(data,min,center-1),(right=BalancedTree.Build(data,center+1,max),BalancedTree.Branch(Arrays.get(data,center),left,right))));
 };
 BalancedTree.Contains=function(v,t)
 {
  return!((BalancedTree.Lookup(v,t))[0]==null);
 };
 BalancedTree.Branch=function(node,left,right)
 {
  var a,b;
  return Tree.New(node,left,right,1+(a=left==null?0:left.Height,(b=right==null?0:right.Height,Unchecked.Compare(a,b)===1?a:b)),1+(left==null?0:left.Count)+(right==null?0:right.Count));
 };
 BalancedTree.Lookup=function(k,t)
 {
  var spine,t$1,loop,m;
  spine=[];
  t$1=t;
  loop=true;
  while(loop)
   if(t$1==null)
    loop=false;
   else
    {
     m=Unchecked.Compare(k,t$1.Node);
     m===0?loop=false:m===1?(spine.unshift([true,t$1.Node,t$1.Left]),t$1=t$1.Right):(spine.unshift([false,t$1.Node,t$1.Right]),t$1=t$1.Left);
    }
  return[t$1,spine];
 };
 BalancedTree.Enumerate=function(flip,t)
 {
  function gen(t$1,spine)
  {
   var t$2;
   while(true)
    if(t$1==null)
     return spine.$==1?{
      $:1,
      $0:[spine.$0[0],[spine.$0[1],spine.$1]]
     }:null;
    else
     if(flip)
      {
       t$2=t$1;
       t$1=t$2.Right;
       spine=new T({
        $:1,
        $0:[t$2.Node,t$2.Left],
        $1:spine
       });
      }
     else
      {
       t$2=t$1;
       t$1=t$2.Left;
       spine=new T({
        $:1,
        $0:[t$2.Node,t$2.Right],
        $1:spine
       });
      }
  }
  return Seq.unfold(function($1)
  {
   return gen($1[0],$1[1]);
  },[t,T.Empty]);
 };
 BalancedTree.TryFind=function(v,t)
 {
  var x;
  x=(BalancedTree.Lookup(v,t))[0];
  return x==null?null:{
   $:1,
   $0:x.Node
  };
 };
 Set.Filter=function(f,s)
 {
  var data;
  return new FSharpSet.New$1((data=Arrays.ofSeq(Seq.filter(f,s)),BalancedTree.Build(data,0,data.length-1)));
 };
 Docs.CreateElemNode=function(el,attr$1,children)
 {
  var attr$2;
  Docs.LinkElement(el,children);
  attr$2=Attrs.Insert(el,attr$1);
  return DocElemNode.New(attr$2,children,null,el,Fresh.Int(),Runtime$1.GetOptional(attr$2.OnAfterRender));
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
 Docs.LinkPrevElement=function(el,children)
 {
  Docs.InsertDoc(el.parentNode,children,el);
 };
 Docs.CreateDelimitedRunState=function(ldelim,rdelim,doc)
 {
  return RunState.New(NodeSet.get_Empty(),Docs.CreateDelimitedElemNode(ldelim,rdelim,Attrs.EmptyAttr(),doc));
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
 Docs.InsertBeforeDelim=function(afterDelim,doc)
 {
  var p,before;
  p=afterDelim.parentNode;
  before=self.document.createTextNode("");
  p.insertBefore(before,afterDelim);
  Docs.LinkPrevElement(afterDelim,doc);
  return before;
 };
 Docs.CreateDelimitedElemNode=function(ldelim,rdelim,attr$1,children)
 {
  var el,attr$2;
  el=ldelim.parentNode;
  Docs.LinkPrevElement(rdelim,children);
  attr$2=Attrs.Insert(el,attr$1);
  return DocElemNode.New(attr$2,children,{
   $:1,
   $0:[ldelim,rdelim]
  },el,Fresh.Int(),Runtime$1.GetOptional(attr$2.OnAfterRender));
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
 Seq.contains=function(el,s)
 {
  var e,r;
  e=Enumerator.Get(s);
  try
  {
   r=false;
   while(!r&&e.MoveNext())
    r=Unchecked.Equals(e.Current(),el);
   return r;
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Seq.nonNegative=function()
 {
  return Operators.FailWith("The input must be non-negative.");
 };
 Seq.insufficient=function()
 {
  return Operators.FailWith("The input sequence has an insufficient number of elements.");
 };
 Arrays.mapiInPlace=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=f(i,arr[i]);
  return arr;
 };
 Arrays.mapInPlace=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=f(arr[i]);
 };
 Arrays.groupBy=function(f,a)
 {
  var d,keys,i,$1,c,k;
  d=new Dictionary.New$5();
  keys=[];
  for(i=0,$1=Arrays.length(a)-1;i<=$1;i++){
   c=a[i];
   k=f(c);
   d.ContainsKey(k)?d.get_Item(k).push(c):(keys.push(k),d.Add(k,[c]));
  }
  Arrays.mapInPlace(function(k$1)
  {
   return[k$1,d.get_Item(k$1)];
  },keys);
  return keys;
 };
 Seq.last=function(s)
 {
  var e,$1;
  e=Enumerator.Get(s);
  try
  {
   if(!e.MoveNext())
    $1=Seq.insufficient();
   else
    {
     while(e.MoveNext())
      ;
     $1=e.Current();
    }
   return $1;
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Seq.tryHead=function(s)
 {
  var e;
  e=Enumerator.Get(s);
  try
  {
   return e.MoveNext()?{
    $:1,
    $0:e.Current()
   }:null;
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Seq.tryItem=function(i,s)
 {
  var j,e,go;
  if(i<0)
   return null;
  else
   {
    j=0;
    e=Enumerator.Get(s);
    try
    {
     go=true;
     while(go&&j<=i)
      if(e.MoveNext())
       j=j+1;
      else
       go=false;
     return go?{
      $:1,
      $0:e.Current()
     }:null;
    }
    finally
    {
     if(typeof e=="object"&&"Dispose"in e)
      e.Dispose();
    }
   }
 };
 MousePosSt.New=function(Active,PosV)
 {
  return{
   Active:Active,
   PosV:PosV
  };
 };
 Input.MousePosSt$1=function()
 {
  SC$4.$cctor();
  return SC$4.MousePosSt;
 };
 Input.ActivateButtonListener=function()
 {
  SC$4.$cctor();
  return SC$4.ActivateButtonListener;
 };
 Input.MouseBtnSt$1=function()
 {
  SC$4.$cctor();
  return SC$4.MouseBtnSt;
 };
 Input.ActivateKeyListener=function()
 {
  SC$4.$cctor();
  return SC$4.ActivateKeyListener;
 };
 Input.KeyListenerState=function()
 {
  SC$4.$cctor();
  return SC$4.KeyListenerState;
 };
 MouseBtnSt.New=function(Active,Left,Middle,Right)
 {
  return{
   Active:Active,
   Left:Left,
   Middle:Middle,
   Right:Right
  };
 };
 KeyListenerSt.New=function(KeysPressed,KeyListenerActive,LastPressed)
 {
  return{
   KeysPressed:KeysPressed,
   KeyListenerActive:KeyListenerActive,
   LastPressed:LastPressed
  };
 };
 WcSplitterT=WcSplitter.WcSplitterT=Runtime$1.Class({
  connectedCallback:function()
  {
   var el,shadowRoot,elsh,minV,maxV,value,first,vertical,size,padding,gap,dragging,startP,start,domElem,a;
   function sizeCalc(sh)
   {
    var p,pt,pb,r;
    p=vertical?["padding-left","padding-right","grid-column-gap"]:["padding-top","padding-bottom","grid-row-gap"];
    pt=Global.parseFloat("0"+$(sh.parentElement.parentElement).css(p[0]));
    pb=Global.parseFloat("0"+$(sh.parentElement.parentElement).css(p[1]));
    gap.Set(Global.parseFloat("0"+$(sh.parentElement.parentElement).css(p[2])));
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
  self.FsRootDll.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New.call(_this);
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
 Templates.LoadLocalTemplates=function(baseName)
 {
  !Templates.LocalTemplatesLoaded()?(Templates.set_LocalTemplatesLoaded(true),Templates.LoadNestedTemplates(self.document.body,"")):void 0;
  Templates.LoadedTemplates().set_Item(baseName,Templates.LoadedTemplateFile(""));
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
 Templates.LocalTemplatesLoaded=function()
 {
  SC$5.$cctor();
  return SC$5.LocalTemplatesLoaded;
 };
 Templates.set_LocalTemplatesLoaded=function($1)
 {
  SC$5.$cctor();
  SC$5.LocalTemplatesLoaded=$1;
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
  SC$5.$cctor();
  return SC$5.LoadedTemplates;
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
 Templates.TextHoleRE=function()
 {
  SC$5.$cctor();
  return SC$5.TextHoleRE;
 };
 ListModel$1.MapLens=function(predO,f,m)
 {
  function get(k,v)
  {
   return f(k,m.Lens(k));
  }
  function a(vms,pred)
  {
   return Arrays.filter(pred,vms);
  }
  return predO!=null&&predO.$==1?View.MapSeqCachedViewBy(m.key,get,(((Runtime$1.Curried3(View.Map2))(a))(m["var"].get_View()))(predO.$0)):View.MapSeqCachedViewBy(m.key,get,m["var"].get_View());
 };
 ListModel$1.refreshLM=function(lm,elems)
 {
  var keys;
  lm.AppendMany(elems);
  keys=new FSharpSet.New(Seq.map(lm.key,elems));
  Seq.iter(function(e)
  {
   if(!keys.Contains(lm.key(e)))
    lm.RemoveByKey(lm.key(e));
  },Seq.cache(lm));
 };
 ViewBuilder.B={
  $:0
 };
 Fun.New=function(f,p)
 {
  return{
   f:f,
   p:p
  };
 };
 Fresh.Id=function()
 {
  Fresh.set_counter(Fresh.counter()+1);
  return"uid"+Global.String(Fresh.counter());
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
 TemplateDef.New=function(tmpName,vars,views,docs,actions,attrs)
 {
  return{
   tmpName:tmpName,
   vars:vars,
   views:views,
   docs:docs,
   actions:actions,
   attrs:attrs
  };
 };
 DomUtility.CreateElement=function(name)
 {
  return DomUtility.Doc().createElement(name);
 };
 DomUtility.SetAttr=function(el,name,value)
 {
  el.setAttribute(name,value);
 };
 DomUtility.RemoveAttr=function(el,attrName)
 {
  el.removeAttribute(attrName);
 };
 DomUtility.CreateText=function(s)
 {
  return DomUtility.Doc().createTextNode(s);
 };
 DomUtility.SetStyle=function(el,name,value)
 {
  DomUtility.SetProperty(el.style,name,value);
 };
 DomUtility.Doc=function()
 {
  SC$7.$cctor();
  return SC$7.Doc;
 };
 DomUtility.SetProperty=function(target,name,value)
 {
  return target.setProperty(name,value);
 };
 DomUtility.ChildrenArray=function(element)
 {
  var a,i,$1;
  a=[];
  for(i=0,$1=element.childNodes.length-1;i<=$1;i++)a.push(element.childNodes[i]);
  return a;
 };
 DomUtility.IterSelector=function(el,selector,f)
 {
  var l,i,$1;
  l=el.querySelectorAll(selector);
  for(i=0,$1=l.length-1;i<=$1;i++)f(l[i]);
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
 DomUtility.InsertAt=function(parent,pos,node)
 {
  var m;
  if(!(node.parentNode===parent&&pos===(m=node.nextSibling,Unchecked.Equals(m,null)?null:m)))
   parent.insertBefore(node,pos);
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
 DomUtility.RemoveNode=function(parent,el)
 {
  if(el.parentNode===parent)
   parent.removeChild(el);
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
 Snap.New=function(State$1)
 {
  return{
   s:State$1
  };
 };
 Storage.InMemory=function(init)
 {
  return new ArrayStorage.New(init);
 };
 CheckedInput=UI.CheckedInput=Runtime$1.Class({
  get_Input:function()
  {
   return this.$==1?this.$0:this.$==2?this.$0:this.$1;
  }
 },null,CheckedInput);
 DictionaryUtil.alreadyAdded=function()
 {
  return Operators.FailWith("An item with the same key has already been added.");
 };
 DictionaryUtil.notPresent=function()
 {
  return Operators.FailWith("The given key was not present in the dictionary.");
 };
 SC$3.$cctor=function()
 {
  SC$3.$cctor=Global.ignore;
  SC$3.EmptyAttr=null;
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
 Tree.New=function(Node$1,Left,Right,Height,Count)
 {
  return{
   Node:Node$1,
   Left:Left,
   Right:Right,
   Height:Height,
   Count:Count
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
 SC$4.$cctor=function()
 {
  SC$4.$cctor=Global.ignore;
  function buttonListener(evt,down)
  {
   var m;
   m=evt.button;
   return m===0?Var$1.Set(Input.MouseBtnSt$1().Left,down):m===1?Var$1.Set(Input.MouseBtnSt$1().Middle,down):m===2?Var$1.Set(Input.MouseBtnSt$1().Right,down):null;
  }
  SC$4.MousePosSt=MousePosSt.New(false,Var$1.Create$1([0,0]));
  SC$4.MouseBtnSt=MouseBtnSt.New(false,Var$1.Create$1(false),Var$1.Create$1(false),Var$1.Create$1(false));
  SC$4.ActivateButtonListener=!Input.MouseBtnSt$1().Active?(Input.MouseBtnSt$1().Active=true,self.document.addEventListener("mousedown",function(evt)
  {
   return buttonListener(evt,true);
  },false),self.document.addEventListener("mouseup",function(evt)
  {
   return buttonListener(evt,false);
  },false)):null;
  SC$4.KeyListenerState=KeyListenerSt.New(Var$1.Create$1(T.Empty),false,Var$1.Create$1(-1));
  SC$4.ActivateKeyListener=!Input.KeyListenerState().KeyListenerActive?($(self.document).keydown(function(evt)
  {
   var keyCode,xs;
   keyCode=evt.which;
   Var$1.Set(Input.KeyListenerState().LastPressed,keyCode);
   xs=Input.KeyListenerState().KeysPressed.Get();
   return!List.exists(function(x)
   {
    return x===keyCode;
   },xs)?Input.KeyListenerState().KeysPressed.Set(List.append(xs,List.ofArray([keyCode]))):null;
  }),void $(self.document).keyup(function(evt)
  {
   var keyCode;
   function p(x)
   {
    return x!==keyCode;
   }
   keyCode=evt.which;
   return Var$1.Update(Input.KeyListenerState().KeysPressed,function(l)
   {
    return List.filter(p,l);
   });
  })):null;
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
  SC$2.$cctor();
  SC$2.observers=$1;
 };
 ResizeObserver.observers=function()
 {
  SC$2.$cctor();
  return SC$2.observers;
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
  SC$8.$cctor();
  return SC$8.Zero;
 };
 Concurrency.defCTS=function()
 {
  SC$8.$cctor();
  return SC$8.defCTS;
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
 Concurrency.While=function(g,c)
 {
  return g()?Concurrency.Bind(c,function()
  {
   return Concurrency.While(g,c);
  }):Concurrency.Return();
 };
 Concurrency.scheduler=function()
 {
  SC$8.$cctor();
  return SC$8.scheduler;
 };
 Concurrency.noneCT=function()
 {
  SC$8.$cctor();
  return SC$8.noneCT;
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
  },
  SRemoveIf:function(pred,arr)
  {
   return Arrays.filter(function(i)
   {
    return!pred(i);
   },arr);
  },
  SAppendMany:function(is,arr)
  {
   var ps;
   ps=Array.ofSeqNonCopying(is);
   arr.push.apply(arr,ps);
   return arr;
  }
 },Obj,ArrayStorage);
 ArrayStorage.New=Runtime$1.Ctor(function(init)
 {
  Obj.New.call(this);
  this.init=init;
 },ArrayStorage);
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
 SC$5.$cctor=function()
 {
  SC$5.$cctor=Global.ignore;
  SC$5.LoadedTemplates=new Dictionary.New$5();
  SC$5.LocalTemplatesLoaded=false;
  SC$5.TextHoleRE="\\${([^}]+)}";
 };
 SC$6.$cctor=function()
 {
  SC$6.$cctor=Global.ignore;
  SC$6.counter=0;
 };
 LayoutEngine.New=function(lytName,lytDefinition)
 {
  return{
   lytName:lytName,
   lytDefinition:lytDefinition
  };
 };
 FormatException=WebSharper.FormatException=Runtime$1.Class({},Error,FormatException);
 FormatException.New$1=Runtime$1.Ctor(function(message)
 {
  this.message=message;
  Object.setPrototypeOf(this,FormatException.prototype);
 },FormatException);
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
 SC$7.$cctor=function()
 {
  SC$7.$cctor=Global.ignore;
  SC$7.Doc=self.document;
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
  SC$9.$cctor();
  return SC$9.BatchUpdatesEnabled;
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
 SC$8.$cctor=function()
 {
  SC$8.$cctor=Global.ignore;
  SC$8.noneCT=CT.New(false,[]);
  SC$8.scheduler=new Scheduler.New();
  SC$8.defCTS=[new CancellationTokenSource.New()];
  SC$8.Zero=Concurrency.Return();
  SC$8.GetCT=function(c)
  {
   c.k({
    $:0,
    $0:c.ct
   });
  };
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
 Syntax.createEntryO2=function(lytNm,refs)
 {
  function addR(nm,en)
  {
   return refs.ContainsKey(nm)?((Result.errorf(Runtime$1.Curried3(function($1,$2,$3)
   {
    return $1("Already exists "+Utils.toSafe($2)+" : "+LayoutEngine_GeneratedPrintf.p$2($3)+" ");
   })))(nm))(en):(refs.Add(nm,en),{
    $:0,
    $0:null
   });
  }
  function ok(nm,en)
  {
   return Result$1.Map(function()
   {
    return[nm,en];
   },addR(nm,en));
  }
  function ko(msg,line)
  {
   return Result$1.Bind(function()
   {
    return{
     $:1,
     $0:msg
    };
   },addR(Seq.head(Strings.SplitChars(line,[" ","\u0009"],1)),{
    $:0,
    $0:{
     $:6,
     $0:{
      $:0,
      $0:"div",
      $1:{
       $:0,
       $0:T.Empty
      },
      $2:List.ofArray([{
       $:0,
       $0:List.ofArray([{
        $:0,
        $0:msg
       }])
      }])
     }
    }
   }));
  }
  function getRef(nm)
  {
   try
   {
    return refs.get_Item(nm);
   }
   catch(e)
   {
    return(function($1)
    {
     return function($2)
     {
      return $1("Could not find reference to "+Utils.toSafe($2));
     };
    }(Operators.FailWith))(nm);
   }
  }
  function getType(rf)
  {
   var entry,nm,ly,$1,a,m,pg,nmm;
   if(rf.$==1)
    {
     nm=rf.$1;
     ly=rf.$0;
     try
     {
      a=getRef(ly);
      if(a.$==6)
       try
       {
        $1=a.$0.$0.get_Item(nm);
       }
       catch(e)
       {
        $1=(((Runtime$1.Curried3(function($2,$3,$4)
        {
         return $2("Could not find reference to "+Utils.toSafe($3)+"."+Utils.toSafe($4));
        }))(Operators.FailWith))(ly))(nm);
       }
      else
       $1=(function($2)
       {
        return function($3)
        {
         return $2("PlugIn not registered: "+LayoutEngine_GeneratedPrintf.p$1($3));
        };
       }(Operators.FailWith))(rf);
      return[$1,null];
     }
     catch(e$1)
     {
      m=AppFramework.tryGetPlugIn(new PlugInName({
       $:0,
       $0:ly
      }));
      return m!=null&&m.$==1?(pg=m.$0,nmm=new PlgElemName({
       $:0,
       $0:nm
      }),[pg.plgDocs.ContainsKey(nmm)?RefType.RDoc:pg.plgActions.ContainsKey(nmm)?RefType.RAct:pg.plgVars.ContainsKey(nmm)?RefType.RVar:pg.plgViews.ContainsKey(nmm)?RefType.RViw:(((Runtime$1.Curried3(function($2,$3,$4)
      {
       return $2("Could not find reference to "+Utils.toSafe($3)+"."+Utils.toSafe($4));
      }))(Operators.FailWith))(ly))(nm),null]):Operators.FailWith(e$1.message);
     }
    }
   else
    {
     entry=getRef(rf.$0);
     return[entry.$==1?RefType.RAct:entry.$==2?RefType.RAct:entry.$==3?RefType.RVar:entry.$==4?RefType.RViw:entry.$==5?RefType.RViw:entry.$==7?RefType.RPlg:entry.$==6?(function($2)
     {
      return function($3)
      {
       return $2("PlugIn should not be referenced by itself: "+LayoutEngine_GeneratedPrintf.p$1($3));
      };
     }(Operators.FailWith))(rf):RefType.RDoc,{
      $:1,
      $0:entry
     }];
    }
  }
  return function(line)
  {
   var $1,a;
   try
   {
    $1=(a=Syntax.createEntryO(getType,lytNm,line),a==null?ko((function($2)
    {
     return function($3)
     {
      return $2("Line not matched!: "+Utils.toSafe($3));
     };
    }(Global.id))(line),line):ok(a.$0.$0,a.$0.$1));
   }
   catch(e)
   {
    $1=ko(e.message,line);
   }
   return{
    $:1,
    $0:$1
   };
  };
 };
 Syntax.createEntryO=function(getType,lytNm,line)
 {
  var m,$1,a,a$1,$2,a$2,a$3,$3,a$4,a$5,$4,a$6,a$7,$5,a$8,a$9,$6,a$10,a$11,a$12,a$13,$7,a$14,a$15,a$16,a$17,$8,a$18,a$19,a$20,a$21,$9,a$22,a$23,a$24,$10,a$25,a$26,a$27,$11,a$28,a$29,$12,a$30,$13,a$31,a$32,a$33,$14,a$34,a$35,$15,a$36,a$37,$16,a$38,a$39,$17,a$40,a$41,$18,a$42,a$43,a$44,$19,a$45,a$46,a$47,a$48,a$49,a$50,a$51,a$52,a$53,a$54,a$55,$20,a$56,a$57,a$58,a$59;
  function Rt(a$60)
  {
   var a$61,itr;
   a$61=Syntax.R(a$60);
   return a$61!=null&&a$61.$==1?(itr=a$61.$0,{
    $:1,
    $0:[getType(itr),itr]
   }):null;
  }
  function DocRf(a$60)
  {
   var $21,a$61;
   return(a$61=Rt(a$60),a$61!=null&&a$61.$==1&&(a$61.$0[0][0].$==0&&($21=a$61.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$21
    }
   }:null;
  }
  function VarRf(a$60)
  {
   var $21,a$61;
   return(a$61=Rt(a$60),a$61!=null&&a$61.$==1&&(a$61.$0[0][0].$==1&&($21=a$61.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$21
    }
   }:null;
  }
  function ViwRf(a$60)
  {
   var $21,a$61;
   return(a$61=Rt(a$60),a$61!=null&&a$61.$==1&&(a$61.$0[0][0].$==2&&($21=a$61.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$21
    }
   }:null;
  }
  function ActRf(a$60)
  {
   var $21,a$61;
   return(a$61=Rt(a$60),a$61!=null&&a$61.$==1&&(a$61.$0[0][0].$==3&&($21=a$61.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$21
    }
   }:null;
  }
  function PlgRf(a$60)
  {
   var $21,a$61,$22;
   return(a$61=Rt(a$60),a$61!=null&&a$61.$==1&&(a$61.$0[0][0].$==4&&(($22=a$61.$0[0][1],$22!=null&&$22.$==1)&&(a$61.$0[0][1].$0.$==7&&($21=[a$61.$0[0][1].$0.$0,a$61.$0[1]],true)))))?{
    $:1,
    $0:$21[0]
   }:null;
  }
  function Name(a$60)
  {
   var $21,a$61;
   return(a$61=Syntax.R(a$60),a$61!=null&&a$61.$==1&&(a$61.$0.$==0&&($21=a$61.$0.$0,true)))?{
    $:1,
    $0:$21
   }:null;
  }
  function NamU(a$60)
  {
   var $21,a$61;
   return(a$61=Name(a$60),a$61!=null&&a$61.$==1&&(Strings.StartsWith(a$61.$0,"_")&&($21=a$61.$0,true)))?{
    $:1,
    $0:$21
   }:null;
  }
  function Tr(a$60)
  {
   var a$61,a$62,a$63;
   a$61=VarRf(a$60);
   return a$61!=null&&a$61.$==1?{
    $:1,
    $0:{
     $:1,
     $0:a$61.$0
    }
   }:(a$62=ViwRf(a$60),a$62!=null&&a$62.$==1?{
    $:1,
    $0:{
     $:2,
     $0:a$62.$0
    }
   }:(a$63=ActRf(a$60),a$63!=null&&a$63.$==1?{
    $:1,
    $0:{
     $:3,
     $0:a$63.$0
    }
   }:null));
  }
  function Indi(txt)
  {
   var m$1;
   m$1=String.delimitedO("@{","}",txt);
   return m$1!=null&&m$1.$==1?{
    $:1,
    $0:[m$1.$0[0],{
     $:1,
     $0:m$1.$0[1]
    },m$1.$0[2]]
   }:null;
  }
  function Tx(txt)
  {
   var $21,a$60,a$61,aft,bef,tl,a$62,$22;
   return(a$60=Indi(txt),a$60!=null&&a$60.$==1&&(a$61=Tr(a$60.$0[1]),a$61!=null&&a$61.$==1&&($21=[a$60.$0[2],a$60.$0[0],a$61.$0],true)))?(aft=$21[0],(bef=$21[1],(tl=bef===""?List.ofArray([$21[2]]):List.ofArray([{
    $:0,
    $0:bef
   },$21[2]]),aft===""?{
    $:1,
    $0:tl
   }:(a$62=Tx(aft),a$62!=null&&a$62.$==1?{
    $:1,
    $0:List.append(tl,a$62.$0)
   }:null)))):($22=Indi(txt),$22!=null&&$22.$==1)?null:{
    $:1,
    $0:List.ofArray([{
     $:0,
     $0:txt
    }])
   };
  }
  function ActI(txt)
  {
   var $21,a$60,a$61;
   return(a$60=Indi(txt),a$60!=null&&a$60.$==1&&(a$61=ActRf(a$60.$0[1]),a$61!=null&&a$61.$==1&&(Strings.Trim(a$60.$0[0])===""&&Strings.Trim(a$60.$0[2])===""&&($21=[a$60.$0[2],a$61.$0,a$60.$0[0]],true))))?{
    $:1,
    $0:$21[1]
   }:null;
  }
  function QTx(a$60)
  {
   var $21,a$61;
   return a$60.$==0&&(a$61=Tx(a$60.$0),a$61!=null&&a$61.$==1&&($21=a$61.$0,true))?{
    $:1,
    $0:$21
   }:null;
  }
  function At(a$60)
  {
   return a$60.$==0?{
    $:1,
    $0:Arrays.ofSeq(Seq.choose(function(a$61)
    {
     var m$1,$21,a$62,$22,a$63,m$2,$23,a$64;
     m$1=(LayoutEngineModule.splitInTwo("="))(a$61);
     return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$62=ActI(Arrays.get(m$1,1)),a$62!=null&&a$62.$==1&&($21=[a$62.$0,Arrays.get(m$1,0)],true))?{
      $:1,
      $0:{
       $:2,
       $0:Strings.Trim($21[1]),
       $1:$21[0]
      }
     }:!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$63=Tx(Arrays.get(m$1,1)),a$63!=null&&a$63.$==1&&($22=[Arrays.get(m$1,0),a$63.$0],true))?{
      $:1,
      $0:{
       $:1,
       $0:Strings.Trim($22[0]),
       $1:$22[1]
      }
     }:(m$2=(LayoutEngineModule.splitInTwo(":"))(a$61),!Unchecked.Equals(m$2,null)&&m$2.length===2&&(a$64=Tx(Arrays.get(m$2,1)),a$64!=null&&a$64.$==1&&($23=[Arrays.get(m$2,0),a$64.$0],true))?{
      $:1,
      $0:{
       $:0,
       $0:Strings.Trim($23[0]),
       $1:$23[1]
      }
     }:(function($24)
     {
      return function($25)
      {
       return $24("Attributes should be like: \"name=val\" or \"name:val\" and separated by ';' : "+Utils.toSafe($25));
      };
     }(Operators.FailWith))(a$61));
    },(LayoutEngineModule.splitSemiColon())(a$60.$0)))
   }:null;
  }
  function Pr(a$60)
  {
   var a$61,a$62,a$63,a$64,a$65;
   a$61=QTx(a$60);
   return a$61!=null&&a$61.$==1?{
    $:1,
    $0:{
     $:0,
     $0:a$61.$0
    }
   }:(a$62=DocRf(a$60),a$62!=null&&a$62.$==1?{
    $:1,
    $0:{
     $:1,
     $0:a$62.$0
    }
   }:(a$63=VarRf(a$60),a$63!=null&&a$63.$==1?{
    $:1,
    $0:{
     $:2,
     $0:a$63.$0
    }
   }:(a$64=ViwRf(a$60),a$64!=null&&a$64.$==1?{
    $:1,
    $0:{
     $:3,
     $0:a$64.$0
    }
   }:(a$65=ActRf(a$60),a$65!=null&&a$65.$==1?{
    $:1,
    $0:{
     $:4,
     $0:a$65.$0
    }
   }:null))));
  }
  function Prs(a$60)
  {
   var $21,a$61,a$62;
   switch(a$60.$==1?(a$61=Pr(a$60.$0),a$61!=null&&a$61.$==1?(a$62=Prs(a$60.$1),a$62!=null&&a$62.$==1?($21=[a$61.$0,a$62.$0],1):2):2):0)
   {
    case 0:
     return{
      $:1,
      $0:T.Empty
     };
    case 1:
     return{
      $:1,
      $0:new T({
       $:1,
       $0:$21[0],
       $1:$21[1]
      })
     };
    case 2:
     return null;
   }
  }
  function ActRfs(a$60)
  {
   var $21,a$61,a$62;
   switch(a$60.$==1?(a$61=ActRf(a$60.$0),a$61!=null&&a$61.$==1?(a$62=ActRfs(a$60.$1),a$62!=null&&a$62.$==1?($21=[a$61.$0,a$62.$0],1):2):2):0)
   {
    case 0:
     return{
      $:1,
      $0:T.Empty
     };
    case 1:
     return{
      $:1,
      $0:new T({
       $:1,
       $0:$21[0],
       $1:$21[1]
      })
     };
    case 2:
     return null;
   }
  }
  function Nd(a$60)
  {
   var a$61,a$62,a$63,a$64;
   a$61=QTx(a$60);
   return a$61!=null&&a$61.$==1?{
    $:1,
    $0:{
     $:0,
     $0:a$61.$0
    }
   }:(a$62=DocRf(a$60),a$62!=null&&a$62.$==1?{
    $:1,
    $0:{
     $:1,
     $0:a$62.$0
    }
   }:(a$63=VarRf(a$60),a$63!=null&&a$63.$==1?{
    $:1,
    $0:{
     $:2,
     $0:a$63.$0
    }
   }:(a$64=ViwRf(a$60),a$64!=null&&a$64.$==1?{
    $:1,
    $0:{
     $:3,
     $0:a$64.$0
    }
   }:null)));
  }
  function Nds(a$60)
  {
   var $21,a$61,a$62;
   switch(a$60.$==1?(a$61=Nd(a$60.$0),a$61!=null&&a$61.$==1?(a$62=Nds(a$60.$1),a$62!=null&&a$62.$==1?($21=[a$61.$0,a$62.$0],1):2):2):0)
   {
    case 0:
     return{
      $:1,
      $0:T.Empty
     };
    case 1:
     return{
      $:1,
      $0:new T({
       $:1,
       $0:$21[0],
       $1:$21[1]
      })
     };
    case 2:
     return null;
   }
  }
  function Pgs(a$60)
  {
   var $21,a$61,a$62;
   switch(a$60.$==1?(a$61=PlgRf(a$60.$0),a$61!=null&&a$61.$==1?(a$62=Pgs(a$60.$1),a$62!=null&&a$62.$==1?($21=[a$61.$0,a$62.$0],1):2):2):0)
   {
    case 0:
     return{
      $:1,
      $0:T.Empty
     };
    case 1:
     return{
      $:1,
      $0:new T({
       $:1,
       $0:$21[0],
       $1:$21[1]
      })
     };
    case 2:
     return null;
   }
  }
  m=LayoutEngineModule.splitTokens(line);
  return m.$==1&&(a=Name(m.$0),a!=null&&a.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==0&&(a$1=Pgs(m.$1.$1),a$1!=null&&a$1.$==1&&($1=[a$1.$0,a.$0],true)))))?Syntax.entryPlg($1[1],{
   $:0,
   $0:new FSharpMap.New($1[0])
  }):m.$==1&&(a$2=NamU(m.$0),a$2!=null&&a$2.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$3=Name(m.$1.$1.$0),a$3!=null&&a$3.$==1&&(m.$1.$1.$1.$==0&&($2=[a$2.$0,a$3.$0],true)))))))?Syntax.entryRef($2[0],$2[1],RefType.RDoc):m.$==1&&(a$4=NamU(m.$0),a$4!=null&&a$4.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$5=Name(m.$1.$1.$0),a$5!=null&&a$5.$==1&&(m.$1.$1.$1.$==0&&($3=[a$4.$0,a$5.$0],true)))))))?Syntax.entryRef($3[0],$3[1],RefType.RVar):m.$==1&&(a$6=NamU(m.$0),a$6!=null&&a$6.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==2&&(m.$1.$1.$==1&&(a$7=Name(m.$1.$1.$0),a$7!=null&&a$7.$==1&&(m.$1.$1.$1.$==0&&($4=[a$6.$0,a$7.$0],true)))))))?Syntax.entryRef($4[0],$4[1],RefType.RViw):m.$==1&&(a$8=NamU(m.$0),a$8!=null&&a$8.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==5&&(m.$1.$1.$==1&&(a$9=Name(m.$1.$1.$0),a$9!=null&&a$9.$==1&&(m.$1.$1.$1.$==0&&($5=[a$8.$0,a$9.$0],true)))))))?Syntax.entryRef($5[0],$5[1],RefType.RAct):m.$==1&&(a$10=Name(m.$0),a$10!=null&&a$10.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$11=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$11!=null&&a$11.$==1&&(m.$1.$1.$1.$==1&&(a$12=DocRf(m.$1.$1.$1.$0),a$12!=null&&a$12.$==1&&(m.$1.$1.$1.$1.$==1&&(a$13=DocRf(m.$1.$1.$1.$1.$0),a$13!=null&&a$13.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($6=[a$12.$0,a$11.$0,a$10.$0,a$13.$0],true)))))))))))?Syntax.entryDoc($6[2],{
   $:0,
   $0:{
    $:0,
    $0:true,
    $1:$6[1],
    $2:$6[0],
    $3:$6[3]
   }
  }):m.$==1&&(a$14=Name(m.$0),a$14!=null&&a$14.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$15=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$15!=null&&a$15.$==1&&(m.$1.$1.$1.$==1&&(a$16=DocRf(m.$1.$1.$1.$0),a$16!=null&&a$16.$==1&&(m.$1.$1.$1.$1.$==1&&(a$17=DocRf(m.$1.$1.$1.$1.$0),a$17!=null&&a$17.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($7=[a$16.$0,a$15.$0,a$14.$0,a$17.$0],true)))))))))))?Syntax.entryDoc($7[2],{
   $:0,
   $0:{
    $:0,
    $0:false,
    $1:$7[1],
    $2:$7[0],
    $3:$7[3]
   }
  }):m.$==1&&(a$18=Name(m.$0),a$18!=null&&a$18.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$19=ActRf(m.$1.$1.$0),a$19!=null&&a$19.$==1&&(m.$1.$1.$1.$==1&&(a$20=At(m.$1.$1.$1.$0),a$20!=null&&a$20.$==1&&(m.$1.$1.$1.$1.$==1&&(a$21=QTx(m.$1.$1.$1.$1.$0),a$21!=null&&a$21.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($8=[a$19.$0,a$20.$0,a$18.$0,a$21.$0],true)))))))))))?Syntax.entryDoc($8[2],{
   $:1,
   $0:{
    $:0,
    $0:$8[0],
    $1:$8[1],
    $2:$8[3]
   }
  }):m.$==1&&(a$22=Name(m.$0),a$22!=null&&a$22.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==2&&(m.$1.$1.$==1&&(a$23=VarRf(m.$1.$1.$0),a$23!=null&&a$23.$==1&&(m.$1.$1.$1.$==1&&(a$24=At(m.$1.$1.$1.$0),a$24!=null&&a$24.$==1&&(m.$1.$1.$1.$1.$==0&&($9=[a$24.$0,a$22.$0,a$23.$0],true)))))))))?Syntax.entryDoc($9[1],{
   $:2,
   $0:{
    $:0,
    $0:$9[2],
    $1:$9[0]
   }
  }):m.$==1&&(a$25=Name(m.$0),a$25!=null&&a$25.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==3&&(m.$1.$1.$==1&&(a$26=VarRf(m.$1.$1.$0),a$26!=null&&a$26.$==1&&(m.$1.$1.$1.$==1&&(a$27=At(m.$1.$1.$1.$0),a$27!=null&&a$27.$==1&&(m.$1.$1.$1.$1.$==0&&($10=[a$27.$0,a$25.$0,a$26.$0],true)))))))))?Syntax.entryDoc($10[1],{
   $:3,
   $0:{
    $:0,
    $0:$10[2],
    $1:$10[0]
   }
  }):m.$==1&&(a$28=Name(m.$0),a$28!=null&&a$28.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$29=(a$30=QTx(m.$1.$1.$0),a$30!=null&&a$30.$==1&&(a$30.$0.$==1&&(a$30.$0.$0.$==0&&(a$30.$0.$1.$==0&&($12=a$30.$0.$0.$0,true)))))?{
   $:1,
   $0:$12
  }:null,a$29!=null&&a$29.$==1&&(m.$1.$1.$1.$==0&&($11=[a$28.$0,a$29.$0],true)))))))?Syntax.entryVar($11[0],{
   $:0,
   $0:Strings.Trim($11[1])
  }):m.$==1&&(a$31=Name(m.$0),a$31!=null&&a$31.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$32=DocRf(m.$1.$1.$0),a$32!=null&&a$32.$==1&&(a$33=Prs(m.$1.$1.$1),a$33!=null&&a$33.$==1&&($13=[a$32.$0,a$31.$0,a$33.$0],true)))))))?Syntax.entryDoc($13[1],{
   $:4,
   $0:{
    $:0,
    $0:$13[0],
    $1:$13[2]
   }
  }):m.$==1&&(a$34=Name(m.$0),a$34!=null&&a$34.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==2&&(a$35=Prs(m.$1.$1),a$35!=null&&a$35.$==1&&($14=[a$34.$0,a$35.$0],true)))))?Syntax.entryView($14[0],{
   $:0,
   $0:$14[1]
  }):m.$==1&&(a$36=Name(m.$0),a$36!=null&&a$36.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==3&&(a$37=Prs(m.$1.$1),a$37!=null&&a$37.$==1&&($15=[a$36.$0,a$37.$0],true)))))?Syntax.entryVJS($15[0],{
   $:0,
   $0:$15[1]
  }):m.$==1&&(a$38=Name(m.$0),a$38!=null&&a$38.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==4&&(a$39=Nds(m.$1.$1),a$39!=null&&a$39.$==1&&($16=[a$38.$0,a$39.$0],true)))))?Syntax.entryDoc($16[0],{
   $:5,
   $0:{
    $:0,
    $0:$16[1]
   }
  }):m.$==1&&(a$40=Name(m.$0),a$40!=null&&a$40.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==5&&(a$41=ActRfs(m.$1.$1),a$41!=null&&a$41.$==1&&($17=[a$41.$0,a$40.$0],true)))))?Syntax.entryActs($17[1],{
   $:0,
   $0:$17[0]
  }):m.$==1&&(a$42=Name(m.$0),a$42!=null&&a$42.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==5&&(m.$1.$1.$==1&&(a$43=ActRf(m.$1.$1.$0),a$43!=null&&a$43.$==1&&(a$44=Prs(m.$1.$1.$1),a$44!=null&&a$44.$==1&&($18=[a$43.$0,a$42.$0,a$44.$0],true)))))))?Syntax.entryAct($18[1],{
   $:0,
   $0:$18[0],
   $1:$18[2]
  }):m.$==1&&(a$45=Name(m.$0),a$45!=null&&a$45.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==4&&(m.$1.$1.$==1&&(a$46=Name(m.$1.$1.$0),a$46!=null&&a$46.$==1&&(m.$1.$1.$1.$==1&&(a$47=Pr(m.$1.$1.$1.$0),a$47!=null&&a$47.$==1&&(m.$1.$1.$1.$1.$==1&&(a$48=(a$49=m.$1.$1.$1.$1.$0,a$49.$==0?{
   $:1,
   $0:Arrays.ofSeq(Seq.choose(function(a$60)
   {
    var m$1,$21,a$61,a$62;
    m$1=Arrays.map(LayoutEngineModule.splitTokens,(LayoutEngineModule.splitInTwo(":"))(a$60));
    return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(Arrays.get(m$1,0).$==1&&(a$61=Name(Arrays.get(m$1,0).$0),a$61!=null&&a$61.$==1&&(Arrays.get(m$1,0).$1.$==0&&(Arrays.get(m$1,1).$==1&&(a$62=Pr(Arrays.get(m$1,1).$0),a$62!=null&&a$62.$==1&&(Arrays.get(m$1,1).$1.$==0&&($21=[a$61.$0,a$62.$0],true)))))))?{
     $:1,
     $0:[$21[0],$21[1]]
    }:(function($22)
    {
     return function($23)
     {
      return $22("Expecting Views \"name:view\" separated by ';' : "+Utils.toSafe($23));
     };
    }(Operators.FailWith))(a$60);
   },(LayoutEngineModule.splitSemiColon())(a$49.$0)))
  }:null),a$48!=null&&a$48.$==1&&(m.$1.$1.$1.$1.$1.$==1&&(a$50=(a$51=m.$1.$1.$1.$1.$1.$0,a$51.$==0?{
   $:1,
   $0:Arrays.ofSeq(Seq.choose(function(a$60)
   {
    var m$1,$21,a$61,a$62;
    m$1=Arrays.map(function(a$63)
    {
     return{
      $:1,
      $0:a$63
     };
    },(LayoutEngineModule.splitInTwo(":"))(a$60));
    return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$61=Name(Arrays.get(m$1,0)),a$61!=null&&a$61.$==1&&(a$62=DocRf(Arrays.get(m$1,1)),a$62!=null&&a$62.$==1&&($21=[a$61.$0,a$62.$0],true)))?{
     $:1,
     $0:[$21[0],$21[1]]
    }:(function($22)
    {
     return function($23)
     {
      return $22("Expecting Docs \"name:doc\" separated by ';' : "+Utils.toSafe($23));
     };
    }(Operators.FailWith))(a$60);
   },(LayoutEngineModule.splitSemiColon())(a$51.$0)))
  }:null),a$50!=null&&a$50.$==1&&(m.$1.$1.$1.$1.$1.$1.$==1&&(a$52=(a$53=m.$1.$1.$1.$1.$1.$1.$0,a$53.$==0?{
   $:1,
   $0:Arrays.ofSeq(Seq.choose(function(a$60)
   {
    var m$1,$21,a$61,a$62;
    m$1=Arrays.map(function(a$63)
    {
     return{
      $:1,
      $0:a$63
     };
    },(LayoutEngineModule.splitInTwo(":"))(a$60));
    return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$61=Name(Arrays.get(m$1,0)),a$61!=null&&a$61.$==1&&(a$62=VarRf(Arrays.get(m$1,1)),a$62!=null&&a$62.$==1&&($21=[a$61.$0,a$62.$0],true)))?{
     $:1,
     $0:[$21[0],$21[1]]
    }:(function($22)
    {
     return function($23)
     {
      return $22("Expecting Vars \"name:var\" separated by ';' : "+Utils.toSafe($23));
     };
    }(Operators.FailWith))(a$60);
   },(LayoutEngineModule.splitSemiColon())(a$53.$0)))
  }:null),a$52!=null&&a$52.$==1&&(m.$1.$1.$1.$1.$1.$1.$1.$==1&&(a$54=(a$55=m.$1.$1.$1.$1.$1.$1.$1.$0,a$55.$==0?{
   $:1,
   $0:Arrays.ofSeq(Seq.choose(function(a$60)
   {
    var m$1,$21,a$61,a$62;
    m$1=Arrays.map(LayoutEngineModule.splitTokens,(LayoutEngineModule.splitInTwo(":"))(a$60));
    return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(Arrays.get(m$1,0).$==1&&(a$61=Name(Arrays.get(m$1,0).$0),a$61!=null&&a$61.$==1&&(Arrays.get(m$1,0).$1.$==0&&(Arrays.get(m$1,1).$==1&&(a$62=ActRf(Arrays.get(m$1,1).$0),a$62!=null&&a$62.$==1&&(Arrays.get(m$1,1).$1.$==0&&($21=[a$61.$0,a$62.$0],true)))))))?{
     $:1,
     $0:[$21[0],$21[1]]
    }:(function($22)
    {
     return function($23)
     {
      return $22("Expecting Actions \"name:action\" separated by ';' : "+Utils.toSafe($23));
     };
    }(Operators.FailWith))(a$60);
   },(LayoutEngineModule.splitSemiColon())(a$55.$0)))
  }:null),a$54!=null&&a$54.$==1&&(m.$1.$1.$1.$1.$1.$1.$1.$1.$==0&&($19=[a$54.$0,a$47.$0,a$50.$0,a$45.$0,a$46.$0,a$52.$0,a$48.$0],true)))))))))))))))))?Syntax.entryDoc($19[3],{
   $:7,
   $0:Syntax.templateDef($19[4],$19[1],$19[5],$19[6],$19[2],$19[0])
  }):m.$==1&&(a$56=Name(m.$0),a$56!=null&&a$56.$==1&&(m.$1.$==1&&(a$57=LayoutEngineModule.Vertical(m.$1.$0),a$57.$==5&&(m.$1.$1.$==1&&(a$58=Pr(m.$1.$1.$0),a$58!=null&&a$58.$==1&&(a$59=Nds(m.$1.$1.$1),a$59!=null&&a$59.$==1&&($20=[a$58.$0,a$57.$0,a$56.$0,a$59.$0],true)))))))?Syntax.entryDoc($20[2],{
   $:6,
   $0:{
    $:0,
    $0:$20[1],
    $1:$20[0],
    $2:$20[3]
   }
  }):null;
 };
 Syntax.R=function(a)
 {
  var a$1,m,n;
  a$1=LayoutEngineModule.Identifier(a);
  return a$1!=null&&a$1.$==1?(m=Strings.SplitChars(a$1.$0,["."],0),!Unchecked.Equals(m,null)&&m.length===1?{
   $:1,
   $0:{
    $:0,
    $0:Arrays.get(m,0)
   }
  }:!Unchecked.Equals(m,null)&&m.length===2?(n=Arrays.get(m,1),{
   $:1,
   $0:{
    $:1,
    $0:Arrays.get(m,0),
    $1:n
   }
  }):null):null;
 };
 Syntax.entryPlg=function(n,p)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:6,
    $0:p
   })
  };
 };
 Syntax.entryRef=function(n,e,e$1)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:7,
    $0:[e,e$1]
   })
  };
 };
 Syntax.entryDoc=function(n,d)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:0,
    $0:d
   })
  };
 };
 Syntax.entryVar=function(n,v)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:3,
    $0:v
   })
  };
 };
 Syntax.entryView=function(n,w)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:4,
    $0:w
   })
  };
 };
 Syntax.entryVJS=function(n,w)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:5,
    $0:w
   })
  };
 };
 Syntax.entryActs=function(n,a)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:2,
    $0:a
   })
  };
 };
 Syntax.entryAct=function(n,a)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:1,
    $0:a
   })
  };
 };
 Syntax.templateDef=function(nm,ats,vs,ws,ds,acs)
 {
  return TemplateDef.New(nm,vs,ws,ds,acs,ats);
 };
 Syntax.entryDef=function(n,e)
 {
  return{
   $:0,
   $0:n,
   $1:e
  };
 };
 HashSetUtil.concat=function(o)
 {
  var r,k;
  r=[];
  for(var k$1 in o)r.push.apply(r,o[k$1]);
  return r;
 };
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
  SC$10.$cctor();
  return SC$10.UseAnimations;
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
 SC$9.$cctor=function()
 {
  SC$9.$cctor=Global.ignore;
  SC$9.BatchUpdatesEnabled=true;
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
 Queue.Clear=function(a)
 {
  a.splice(0,Arrays.length(a));
 };
 Result$1.Bind=function(f,r)
 {
  return r.$==1?{
   $:1,
   $0:r.$0
  }:f(r.$0);
 };
 Result$1.Map=function(f,r)
 {
  return r.$==1?{
   $:1,
   $0:r.$0
  }:{
   $:0,
   $0:f(r.$0)
  };
 };
 FSharpMap=Collections.FSharpMap=Runtime$1.Class({
  get_Item:function(k)
  {
   var m;
   m=this.TryFind(k);
   return m==null?Operators.FailWith("The given key was not present in the dictionary."):m.$0;
  },
  TryFind:function(k)
  {
   var o;
   o=BalancedTree.TryFind(Pair.New(k,void 0),this.tree);
   return o==null?null:{
    $:1,
    $0:o.$0.Value
   };
  },
  Equals:function(other)
  {
   return this.get_Count()===other.get_Count()&&Seq.forall2(Unchecked.Equals,this,other);
  },
  GetHashCode:function()
  {
   return Unchecked.Hash(Arrays.ofSeq(this));
  },
  GetEnumerator$1:function()
  {
   return Enumerator.Get(Seq.map(function(kv)
   {
    return{
     K:kv.Key,
     V:kv.Value
    };
   },BalancedTree.Enumerate(false,this.tree)));
  },
  get_Count:function()
  {
   var tree;
   tree=this.tree;
   return tree==null?0:tree.Count;
  },
  GetEnumerator:function()
  {
   return this.GetEnumerator$1();
  },
  CompareTo0:function(other)
  {
   return Seq.compareWith(Unchecked.Compare,this,other);
  },
  GetEnumerator0:function()
  {
   return this.GetEnumerator$1();
  }
 },Obj,FSharpMap);
 FSharpMap.New=Runtime$1.Ctor(function(s)
 {
  FSharpMap.New$1.call(this,MapUtil.fromSeq(s));
 },FSharpMap);
 FSharpMap.New$1=Runtime$1.Ctor(function(tree)
 {
  Obj.New.call(this);
  this.tree=tree;
 },FSharpMap);
 RefType.RDoc={
  $:0
 };
 RefType.RAct={
  $:3
 };
 RefType.RVar={
  $:1
 };
 RefType.RViw={
  $:2
 };
 RefType.RPlg={
  $:4
 };
 SC$10.$cctor=function()
 {
  SC$10.$cctor=Global.ignore;
  SC$10.CubicInOut=Easing.Custom(function(t)
  {
   var t2;
   t2=t*t;
   return 3*t2-2*(t2*t);
  });
  SC$10.UseAnimations=true;
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
  SC$11.$cctor();
  return SC$11.Empty;
 };
 String$1.isBlank=function(s)
 {
  return Strings.forall(Char.IsWhiteSpace,s);
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
 Layout.cleanSpaces=function(lyt)
 {
  return Arrays.filter(function(a)
  {
   var $1;
   return!($1=(ParseO.Int())(a),$1!=null&&$1.$==1);
  },Strings.SplitStrings(Strings.concat(" ",lyt),[" "],1));
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
 Char.IsWhiteSpace=function(c)
 {
  return c.match(new Global.RegExp("\\s"))!==null;
 };
 MapUtil.fromSeq=function(s)
 {
  var a;
  a=Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.collect(function(m)
   {
    return[Pair.New(m[0],m[1])];
   },Seq.distinctBy(function(t)
   {
    return t[0];
   },s));
  }));
  Arrays.sortInPlace(a);
  return BalancedTree.Build(a,0,a.length-1);
 };
 Measures=LayoutEngineModule.Measures=Runtime$1.Class({
  toString:function()
  {
   return this.$==1?((((Runtime$1.Curried(function($1,$2,$3,$4)
   {
    return $1(Global.String($2)+"-"+Global.String($3)+"-"+Global.String($4));
   },4))(Global.id))(Operators.toInt(this.$0)))(Operators.toInt(this.$1)))(Operators.toInt(this.$2)):Global.String(Operators.toInt(this.$1?this.$0:-this.$0));
  }
 },null,Measures);
 Pair=Collections.Pair=Runtime$1.Class({
  Equals:function(other)
  {
   return Unchecked.Equals(this.Key,other.Key);
  },
  GetHashCode:function()
  {
   return Unchecked.Hash(this.Key);
  },
  CompareTo0:function(other)
  {
   return Unchecked.Compare(this.Key,other.Key);
  }
 },null,Pair);
 Pair.New=function(Key,Value)
 {
  return new Pair({
   Key:Key,
   Value:Value
  });
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
 MatchFailureException=WebSharper.MatchFailureException=Runtime$1.Class({},Error,MatchFailureException);
 MatchFailureException.New=Runtime$1.Ctor(function(message,line,column)
 {
  this.message=message+" at "+Global.String(line)+":"+Global.String(column);
  Object.setPrototypeOf(this,MatchFailureException.prototype);
 },MatchFailureException);
 SC$11.$cctor=function()
 {
  SC$11.$cctor=Global.ignore;
  SC$11.Empty={
   $:0
  };
 };
 Runtime$1.OnLoad(function()
 {
  AppFrameworkUI.main();
 });
}());


if (typeof IntelliFactory !=='undefined') {
  IntelliFactory.Runtime.ScriptBasePath = '/Content/';
  IntelliFactory.Runtime.Start();
}
//# sourceMappingURL=testing.map

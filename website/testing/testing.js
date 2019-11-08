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
var JSON;JSON||(JSON={}),function(){"use strict";function i(n){return n<10?"0"+n:n}function f(n){return o.lastIndex=0,o.test(n)?'"'+n.replace(o,function(n){var t=s[n];return typeof t=="string"?t:"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+n+'"'}function r(i,e){var s,l,h,a,v=n,c,o=e[i];o&&typeof o=="object"&&typeof o.toJSON=="function"&&(o=o.toJSON(i)),typeof t=="function"&&(o=t.call(e,i,o));switch(typeof o){case"string":return f(o);case"number":return isFinite(o)?String(o):"null";case"boolean":case"null":return String(o);case"object":if(!o)return"null";if(n+=u,c=[],Object.prototype.toString.apply(o)==="[object Array]"){for(a=o.length,s=0;s<a;s+=1)c[s]=r(s,o)||"null";return h=c.length===0?"[]":n?"[\n"+n+c.join(",\n"+n)+"\n"+v+"]":"["+c.join(",")+"]",n=v,h}if(t&&typeof t=="object")for(a=t.length,s=0;s<a;s+=1)typeof t[s]=="string"&&(l=t[s],h=r(l,o),h&&c.push(f(l)+(n?": ":":")+h));else for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(h=r(l,o),h&&c.push(f(l)+(n?": ":":")+h));return h=c.length===0?"{}":n?"{\n"+n+c.join(",\n"+n)+"\n"+v+"}":"{"+c.join(",")+"}",n=v,h}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+i(this.getUTCMonth()+1)+"-"+i(this.getUTCDate())+"T"+i(this.getUTCHours())+":"+i(this.getUTCMinutes())+":"+i(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,o=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,n,u,s={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},t;typeof JSON.stringify!="function"&&(JSON.stringify=function(i,f,e){var o;if(n="",u="",typeof e=="number")for(o=0;o<e;o+=1)u+=" ";else typeof e=="string"&&(u=e);if(t=f,f&&typeof f!="function"&&(typeof f!="object"||typeof f.length!="number"))throw new Error("JSON.stringify");return r("",{"":i})}),typeof JSON.parse!="function"&&(JSON.parse=function(n,t){function r(n,i){var f,e,u=n[i];if(u&&typeof u=="object")for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&(e=r(u,f),e!==undefined?u[f]=e:delete u[f]);return t.call(n,i,u)}var i;if(n=String(n),e.lastIndex=0,e.test(n)&&(n=n.replace(e,function(n){return"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(n.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return i=eval("("+n+")"),typeof t=="function"?r({"":i},""):i;throw new SyntaxError("JSON.parse");})}();;
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
 var Global,FsRoot,Library,UoM,Unsafe,UoM$1,StringId,GuidId,Dict,ResultMessage,ResultMessageHelpers,Monads,Seq,Option,Async,State,WebSharper,Obj,CEBuilder,Operators,Result,Builder,Operators$1,BuilderP,Depend,DependBuilder,Operators$2,ResultM,Builder$1,Operators$3,ResultMAutoOpen,AsyncResultM,AsyncResultMBuilder,Operators$4,AsyncResultMAutoOpen,String,ParseO,Serializer,JsonIntermediate,Snippet,SnippetModule,SnippetSerialize,Model,LibraryJS,WebComponent,WcTabStrip,WcTabStripT,WcSplitter,WcSplitterT,Monaco,Position,Range,Location,MarkDownString,MarkerData,CompletionItem,Hover,Editor,MonacoConfig,MonacoGenAdapter,MonacoRT,CompletionItemProvider,HoverProvider,DefinitionProvider,AppFramework,PlugInVar,PlugInView,PlugInDoc,PlugInAction,PlugInQuery,PlugIn,PlugInBuilder,Fun,P,Val,Extract0,LayoutEngine,LayoutEngineModule,Measures,Syntax,RefType,Layout,TestingJS,StartAppFramework,Util,AF,PlugInBuilder$1,ListModelData,LayoutEngine$1,ListModel,LM,LMX,SnippetTemplates,NewLY,P$1,DragDrop,DragInfo,SnippetsUI,SnippetHierData,SaveLoad,System,Guid,Operators$5,Utils,Arrays,Slice,Unchecked,Collections,Dictionary,Seq$1,Strings,List,Option$1,CancellationTokenSource,SC$1,T,Result$1,Char,Set,FSharpSet,FSharpMap,UI,HtmlModule,attr,Hoverable,Hoverable$1,View,Var,Doc,Numeric,Var$1,JavaScript,Pervasives,EventTarget,Node,JS,Event,UIEvent,ResizeObserver,GenEditor,Position$1,PromiseM,GenEditor$1,GenEditorHook,ListModel$1,Templating,Runtime,Server,TemplateInstance,ProviderBuilder,Handler,testing_Templates,GeneratedPrintf,testing_GeneratedPrintf,Client,AttrModule,Lazy,AttrProxy,View$1,Error,MatchFailureException,ListModel$2,ViewBuilder,FileReader,Serializer$1,AppFrameworkTemplate,Concurrency,Object,Enumerator,T$1,DictionaryUtil,AggregateException,WindowOrWorkerGlobalScope,BalancedTree,MapUtil,Tree,Elt,Snap,DomUtility,ConcreteVar,Client$1,Templates,Abbrev,Fresh,List$1,HashSet,FromView,Attrs,LazyExtensionsProxy,LazyRecord,Array,Docs,Pair,Async$1,Storage,AsyncBody,CT,SC$2,DateUtil,TimeoutException,DocElemNode,CharacterData,CheckedInput,DynamicAttrNode,ArrayStorage,Scheduler,OperationCanceledException,Updates,SC$3,SC$4,An,Settings,Mailbox,SC$5,Attrs$1,Dyn,SC$6,Prepare,KeyCollection,Docs$1,RunState,NodeSet,Anims,SC$7,HashSetUtil,FormatException,Queue,SC$8,AppendList,String$1,Easing,HashSet$1,DomNodes,SC$9,console,IntelliFactory,Runtime$1,Date,Reflect,Math,$,JSON;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 UoM=Library.UoM=Library.UoM||{};
 Unsafe=UoM.Unsafe=UoM.Unsafe||{};
 UoM$1=UoM.UoM=UoM.UoM||{};
 StringId=Library.StringId=Library.StringId||{};
 GuidId=Library.GuidId=Library.GuidId||{};
 Dict=Library.Dict=Library.Dict||{};
 ResultMessage=Library.ResultMessage=Library.ResultMessage||{};
 ResultMessageHelpers=Library.ResultMessageHelpers=Library.ResultMessageHelpers||{};
 Monads=Library.Monads=Library.Monads||{};
 Seq=Monads.Seq=Monads.Seq||{};
 Option=Monads.Option=Monads.Option||{};
 Async=Monads.Async=Monads.Async||{};
 State=Monads.State=Monads.State||{};
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 Obj=WebSharper.Obj=WebSharper.Obj||{};
 CEBuilder=State.CEBuilder=State.CEBuilder||{};
 Operators=State.Operators=State.Operators||{};
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 Operators$1=Result.Operators=Result.Operators||{};
 BuilderP=Result.BuilderP=Result.BuilderP||{};
 Depend=Monads.Depend=Monads.Depend||{};
 DependBuilder=Depend.DependBuilder=Depend.DependBuilder||{};
 Operators$2=Depend.Operators=Depend.Operators||{};
 ResultM=Monads.ResultM=Monads.ResultM||{};
 Builder$1=ResultM.Builder=ResultM.Builder||{};
 Operators$3=ResultM.Operators=ResultM.Operators||{};
 ResultMAutoOpen=Monads.ResultMAutoOpen=Monads.ResultMAutoOpen||{};
 AsyncResultM=Monads.AsyncResultM=Monads.AsyncResultM||{};
 AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder||{};
 Operators$4=AsyncResultM.Operators=AsyncResultM.Operators||{};
 AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 Serializer=Library.Serializer=Library.Serializer||{};
 JsonIntermediate=Serializer.JsonIntermediate=Serializer.JsonIntermediate||{};
 Snippet=Library.Snippet=Library.Snippet||{};
 SnippetModule=Library.SnippetModule=Library.SnippetModule||{};
 SnippetSerialize=Library.SnippetSerialize=Library.SnippetSerialize||{};
 Model=SnippetSerialize.Model=SnippetSerialize.Model||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 WebComponent=LibraryJS.WebComponent=LibraryJS.WebComponent||{};
 WcTabStrip=WebComponent.WcTabStrip=WebComponent.WcTabStrip||{};
 WcTabStripT=WcTabStrip.WcTabStripT=WcTabStrip.WcTabStripT||{};
 WcSplitter=WebComponent.WcSplitter=WebComponent.WcSplitter||{};
 WcSplitterT=WcSplitter.WcSplitterT=WcSplitter.WcSplitterT||{};
 Monaco=LibraryJS.Monaco=LibraryJS.Monaco||{};
 Position=Monaco.Position=Monaco.Position||{};
 Range=Monaco.Range=Monaco.Range||{};
 Location=Monaco.Location=Monaco.Location||{};
 MarkDownString=Monaco.MarkDownString=Monaco.MarkDownString||{};
 MarkerData=Monaco.MarkerData=Monaco.MarkerData||{};
 CompletionItem=Monaco.CompletionItem=Monaco.CompletionItem||{};
 Hover=Monaco.Hover=Monaco.Hover||{};
 Editor=Monaco.Editor=Monaco.Editor||{};
 MonacoConfig=Monaco.MonacoConfig=Monaco.MonacoConfig||{};
 MonacoGenAdapter=LibraryJS.MonacoGenAdapter=LibraryJS.MonacoGenAdapter||{};
 MonacoRT=MonacoGenAdapter.MonacoRT=MonacoGenAdapter.MonacoRT||{};
 CompletionItemProvider=MonacoGenAdapter.CompletionItemProvider=MonacoGenAdapter.CompletionItemProvider||{};
 HoverProvider=MonacoGenAdapter.HoverProvider=MonacoGenAdapter.HoverProvider||{};
 DefinitionProvider=MonacoGenAdapter.DefinitionProvider=MonacoGenAdapter.DefinitionProvider||{};
 AppFramework=LibraryJS.AppFramework=LibraryJS.AppFramework||{};
 PlugInVar=AppFramework.PlugInVar=AppFramework.PlugInVar||{};
 PlugInView=AppFramework.PlugInView=AppFramework.PlugInView||{};
 PlugInDoc=AppFramework.PlugInDoc=AppFramework.PlugInDoc||{};
 PlugInAction=AppFramework.PlugInAction=AppFramework.PlugInAction||{};
 PlugInQuery=AppFramework.PlugInQuery=AppFramework.PlugInQuery||{};
 PlugIn=AppFramework.PlugIn=AppFramework.PlugIn||{};
 PlugInBuilder=AppFramework.PlugInBuilder=AppFramework.PlugInBuilder||{};
 Fun=AppFramework.Fun=AppFramework.Fun||{};
 P=AppFramework.P=AppFramework.P||{};
 Val=AppFramework.Val=AppFramework.Val||{};
 Extract0=AppFramework.Extract0=AppFramework.Extract0||{};
 LayoutEngine=LibraryJS.LayoutEngine=LibraryJS.LayoutEngine||{};
 LayoutEngineModule=LibraryJS.LayoutEngineModule=LibraryJS.LayoutEngineModule||{};
 Measures=LayoutEngineModule.Measures=LayoutEngineModule.Measures||{};
 Syntax=LayoutEngineModule.Syntax=LayoutEngineModule.Syntax||{};
 RefType=Syntax.RefType=Syntax.RefType||{};
 Layout=LayoutEngineModule.Layout=LayoutEngineModule.Layout||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 StartAppFramework=TestingJS.StartAppFramework=TestingJS.StartAppFramework||{};
 Util=TestingJS.Util=TestingJS.Util||{};
 AF=TestingJS.AF=TestingJS.AF||{};
 PlugInBuilder$1=AF.PlugInBuilder=AF.PlugInBuilder||{};
 ListModelData=AF.ListModelData=AF.ListModelData||{};
 LayoutEngine$1=TestingJS.LayoutEngine=TestingJS.LayoutEngine||{};
 ListModel=TestingJS.ListModel=TestingJS.ListModel||{};
 LM=TestingJS.LM=TestingJS.LM||{};
 LMX=TestingJS.LMX=TestingJS.LMX||{};
 SnippetTemplates=TestingJS.SnippetTemplates=TestingJS.SnippetTemplates||{};
 NewLY=TestingJS.NewLY=TestingJS.NewLY||{};
 P$1=NewLY.P=NewLY.P||{};
 DragDrop=TestingJS.DragDrop=TestingJS.DragDrop||{};
 DragInfo=DragDrop.DragInfo=DragDrop.DragInfo||{};
 SnippetsUI=TestingJS.SnippetsUI=TestingJS.SnippetsUI||{};
 SnippetHierData=SnippetsUI.SnippetHierData=SnippetsUI.SnippetHierData||{};
 SaveLoad=SnippetsUI.SaveLoad=SnippetsUI.SaveLoad||{};
 System=Global.System=Global.System||{};
 Guid=System.Guid=System.Guid||{};
 Operators$5=WebSharper.Operators=WebSharper.Operators||{};
 Utils=WebSharper.Utils=WebSharper.Utils||{};
 Arrays=WebSharper.Arrays=WebSharper.Arrays||{};
 Slice=WebSharper.Slice=WebSharper.Slice||{};
 Unchecked=WebSharper.Unchecked=WebSharper.Unchecked||{};
 Collections=WebSharper.Collections=WebSharper.Collections||{};
 Dictionary=Collections.Dictionary=Collections.Dictionary||{};
 Seq$1=WebSharper.Seq=WebSharper.Seq||{};
 Strings=WebSharper.Strings=WebSharper.Strings||{};
 List=WebSharper.List=WebSharper.List||{};
 Option$1=WebSharper.Option=WebSharper.Option||{};
 CancellationTokenSource=WebSharper.CancellationTokenSource=WebSharper.CancellationTokenSource||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 T=List.T=List.T||{};
 Result$1=WebSharper.Result=WebSharper.Result||{};
 Char=WebSharper.Char=WebSharper.Char||{};
 Set=Collections.Set=Collections.Set||{};
 FSharpSet=Collections.FSharpSet=Collections.FSharpSet||{};
 FSharpMap=Collections.FSharpMap=Collections.FSharpMap||{};
 UI=WebSharper.UI=WebSharper.UI||{};
 HtmlModule=UI.HtmlModule=UI.HtmlModule||{};
 attr=HtmlModule.attr=HtmlModule.attr||{};
 Hoverable=LibraryJS.Hoverable=LibraryJS.Hoverable||{};
 Hoverable$1=Hoverable.Hoverable=Hoverable.Hoverable||{};
 View=UI.View=UI.View||{};
 Var=UI.Var=UI.Var||{};
 Doc=UI.Doc=UI.Doc||{};
 Numeric=WebSharper.Numeric=WebSharper.Numeric||{};
 Var$1=UI.Var$1=UI.Var$1||{};
 JavaScript=WebSharper.JavaScript=WebSharper.JavaScript||{};
 Pervasives=JavaScript.Pervasives=JavaScript.Pervasives||{};
 EventTarget=Global.EventTarget;
 Node=Global.Node;
 JS=JavaScript.JS=JavaScript.JS||{};
 Event=Global.Event;
 UIEvent=Global.UIEvent;
 ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};
 GenEditor=LibraryJS.GenEditor=LibraryJS.GenEditor||{};
 Position$1=GenEditor.Position=GenEditor.Position||{};
 PromiseM=LibraryJS.PromiseM=LibraryJS.PromiseM||{};
 GenEditor$1=GenEditor.GenEditor=GenEditor.GenEditor||{};
 GenEditorHook=GenEditor.GenEditorHook=GenEditor.GenEditorHook||{};
 ListModel$1=UI.ListModel=UI.ListModel||{};
 Templating=UI.Templating=UI.Templating||{};
 Runtime=Templating.Runtime=Templating.Runtime||{};
 Server=Runtime.Server=Runtime.Server||{};
 TemplateInstance=Server.TemplateInstance=Server.TemplateInstance||{};
 ProviderBuilder=Server.ProviderBuilder=Server.ProviderBuilder||{};
 Handler=Server.Handler=Server.Handler||{};
 testing_Templates=Global.testing_Templates=Global.testing_Templates||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 testing_GeneratedPrintf=Global.testing_GeneratedPrintf=Global.testing_GeneratedPrintf||{};
 Client=Runtime.Client=Runtime.Client||{};
 AttrModule=UI.AttrModule=UI.AttrModule||{};
 Lazy=WebSharper.Lazy=WebSharper.Lazy||{};
 AttrProxy=UI.AttrProxy=UI.AttrProxy||{};
 View$1=LibraryJS.View=LibraryJS.View||{};
 Error=Global.Error;
 MatchFailureException=WebSharper.MatchFailureException=WebSharper.MatchFailureException||{};
 ListModel$2=LibraryJS.ListModel=LibraryJS.ListModel||{};
 ViewBuilder=UI.ViewBuilder=UI.ViewBuilder||{};
 FileReader=Global.FileReader;
 Serializer$1=LibraryJS.Serializer=LibraryJS.Serializer||{};
 AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate||{};
 Concurrency=WebSharper.Concurrency=WebSharper.Concurrency||{};
 Object=Global.Object;
 Enumerator=WebSharper.Enumerator=WebSharper.Enumerator||{};
 T$1=Enumerator.T=Enumerator.T||{};
 DictionaryUtil=Collections.DictionaryUtil=Collections.DictionaryUtil||{};
 AggregateException=WebSharper.AggregateException=WebSharper.AggregateException||{};
 WindowOrWorkerGlobalScope=Global.WindowOrWorkerGlobalScope;
 BalancedTree=Collections.BalancedTree=Collections.BalancedTree||{};
 MapUtil=Collections.MapUtil=Collections.MapUtil||{};
 Tree=BalancedTree.Tree=BalancedTree.Tree||{};
 Elt=UI.Elt=UI.Elt||{};
 Snap=UI.Snap=UI.Snap||{};
 DomUtility=UI.DomUtility=UI.DomUtility||{};
 ConcreteVar=UI.ConcreteVar=UI.ConcreteVar||{};
 Client$1=UI.Client=UI.Client||{};
 Templates=Client$1.Templates=Client$1.Templates||{};
 Abbrev=UI.Abbrev=UI.Abbrev||{};
 Fresh=Abbrev.Fresh=Abbrev.Fresh||{};
 List$1=Collections.List=Collections.List||{};
 HashSet=Collections.HashSet=Collections.HashSet||{};
 FromView=UI.FromView=UI.FromView||{};
 Attrs=UI.Attrs=UI.Attrs||{};
 LazyExtensionsProxy=WebSharper.LazyExtensionsProxy=WebSharper.LazyExtensionsProxy||{};
 LazyRecord=LazyExtensionsProxy.LazyRecord=LazyExtensionsProxy.LazyRecord||{};
 Array=UI.Array=UI.Array||{};
 Docs=UI.Docs=UI.Docs||{};
 Pair=Collections.Pair=Collections.Pair||{};
 Async$1=Abbrev.Async=Abbrev.Async||{};
 Storage=UI.Storage=UI.Storage||{};
 AsyncBody=Concurrency.AsyncBody=Concurrency.AsyncBody||{};
 CT=Concurrency.CT=Concurrency.CT||{};
 SC$2=Global.StartupCode$WebSharper_Main$Concurrency=Global.StartupCode$WebSharper_Main$Concurrency||{};
 DateUtil=WebSharper.DateUtil=WebSharper.DateUtil||{};
 TimeoutException=WebSharper.TimeoutException=WebSharper.TimeoutException||{};
 DocElemNode=UI.DocElemNode=UI.DocElemNode||{};
 CharacterData=Global.CharacterData;
 CheckedInput=UI.CheckedInput=UI.CheckedInput||{};
 DynamicAttrNode=UI.DynamicAttrNode=UI.DynamicAttrNode||{};
 ArrayStorage=Storage.ArrayStorage=Storage.ArrayStorage||{};
 Scheduler=Concurrency.Scheduler=Concurrency.Scheduler||{};
 OperationCanceledException=WebSharper.OperationCanceledException=WebSharper.OperationCanceledException||{};
 Updates=UI.Updates=UI.Updates||{};
 SC$3=Global.StartupCode$WebSharper_UI$DomUtility=Global.StartupCode$WebSharper_UI$DomUtility||{};
 SC$4=Global.StartupCode$WebSharper_UI$Templates=Global.StartupCode$WebSharper_UI$Templates||{};
 An=UI.An=UI.An||{};
 Settings=Client$1.Settings=Client$1.Settings||{};
 Mailbox=Abbrev.Mailbox=Abbrev.Mailbox||{};
 SC$5=Global.StartupCode$WebSharper_UI$Abbrev=Global.StartupCode$WebSharper_UI$Abbrev||{};
 Attrs$1=Client$1.Attrs=Client$1.Attrs||{};
 Dyn=Attrs$1.Dyn=Attrs$1.Dyn||{};
 SC$6=Global.StartupCode$WebSharper_UI$Attr_Client=Global.StartupCode$WebSharper_UI$Attr_Client||{};
 Prepare=Templates.Prepare=Templates.Prepare||{};
 KeyCollection=Collections.KeyCollection=Collections.KeyCollection||{};
 Docs$1=Client$1.Docs=Client$1.Docs||{};
 RunState=Docs$1.RunState=Docs$1.RunState||{};
 NodeSet=Docs$1.NodeSet=Docs$1.NodeSet||{};
 Anims=UI.Anims=UI.Anims||{};
 SC$7=Global.StartupCode$WebSharper_UI$Doc_Proxy=Global.StartupCode$WebSharper_UI$Doc_Proxy||{};
 HashSetUtil=Collections.HashSetUtil=Collections.HashSetUtil||{};
 FormatException=WebSharper.FormatException=WebSharper.FormatException||{};
 Queue=WebSharper.Queue=WebSharper.Queue||{};
 SC$8=Global.StartupCode$WebSharper_UI$Animation=Global.StartupCode$WebSharper_UI$Animation||{};
 AppendList=UI.AppendList=UI.AppendList||{};
 String$1=UI.String=UI.String||{};
 Easing=UI.Easing=UI.Easing||{};
 HashSet$1=Abbrev.HashSet=Abbrev.HashSet||{};
 DomNodes=Docs$1.DomNodes=Docs$1.DomNodes||{};
 SC$9=Global.StartupCode$WebSharper_UI$AppendList=Global.StartupCode$WebSharper_UI$AppendList||{};
 console=Global.console;
 IntelliFactory=Global.IntelliFactory;
 Runtime$1=IntelliFactory&&IntelliFactory.Runtime;
 Date=Global.Date;
 Reflect=Global.Reflect;
 Math=Global.Math;
 $=Global.jQuery;
 JSON=Global.JSON;
 Library.Error=function(a)
 {
  return{
   $:1,
   $0:a
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
 Library["String.Left"]=function(_this,n)
 {
  return n<0?Library["String.Substring2"](_this,0,_this.length+n):Library["String.Substring2"](_this,0,n);
 };
 Library["String.Right"]=function(_this,n)
 {
  var a,b;
  return Library["String.Substring2"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);
 };
 Library["String.get_toUnderscore"]=function(_this,u)
 {
  return Arrays.ofSeq(Seq$1.collect(Global.id,Seq$1.mapi(function(i,c)
  {
   return i>0&&Char.IsUpper(c)?List.ofArray(["_",c]):List.ofArray([c]);
  },_this))).join("");
 };
 Unsafe.cast=Global.id;
 UoM$1.Tag$10=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$9=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$8=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$7=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$6=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$5=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$4=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$3=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$2=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag$1=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Tag=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$10=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$9=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$8=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$7=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$6=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$5=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$4=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$3=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$2=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag$1=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Untag=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$10=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$9=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$8=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$7=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$6=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$5=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$4=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$3=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$2=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast$1=function(x)
 {
  return Unsafe.cast(x);
 };
 UoM$1.Cast=function(x)
 {
  return Unsafe.cast(x);
 };
 StringId=Library.StringId=Runtime$1.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,StringId);
 GuidId=Library.GuidId=Runtime$1.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,GuidId);
 Dict.add=function(key,v,dict)
 {
  if(dict.ContainsKey(key))
   dict.set_Item(key,v);
  else
   dict.Add(key,v);
 };
 ResultMessage=Library.ResultMessage=Runtime$1.Class({
  toString:function()
  {
   return this.$==1?(function($1)
   {
    return function($2)
    {
     return $1("Error    : "+Utils.toSafe($2));
    };
   }(Global.id))(this.$0):this.$==2?(function($1)
   {
    return function($2)
    {
     return $1("Warning  : "+Utils.toSafe($2));
    };
   }(Global.id))(this.$0):this.$==3?this.$0:this.$==4?(function($1)
   {
    return function($2)
    {
     return $1(Global.String($2));
    };
   }(Global.id))(this.$0):this.$==5?(((Runtime$1.Curried3(function($1,$2,$3)
   {
    return $1("Exception: "+Utils.toSafe($2)+", "+Utils.toSafe($3));
   }))(Global.id))(this.$0))(this.$1):this.$==6?Strings.concat("\n",Seq$1.map(Global.String,Seq$1.filter(function(a)
   {
    return a.$!=0;
   },this.$0))):"";
  }
 },null,ResultMessage);
 ResultMessage.NoMsg=new ResultMessage({
  $:0
 });
 ResultMessageHelpers.errorMsgf=function(fmt)
 {
  return fmt(function(a)
  {
   return new ResultMessage({
    $:1,
    $0:a
   });
  });
 };
 ResultMessageHelpers.warningf=function(fmt)
 {
  return fmt(function(a)
  {
   return new ResultMessage({
    $:2,
    $0:a
   });
  });
 };
 ResultMessageHelpers.infof=function(fmt)
 {
  return fmt(function(a)
  {
   return new ResultMessage({
    $:3,
    $0:a
   });
  });
 };
 ResultMessage.noMsg=function(msg)
 {
  return msg.$==0;
 };
 ResultMessage.exclnoMsg=function(ms)
 {
  function g(v)
  {
   return!v;
  }
  return Seq$1.filter(function(x)
  {
   return g(ResultMessage.noMsg(x));
  },ms);
 };
 ResultMessage.bindMessage=function(f,msg)
 {
  return msg.$==4?f(msg.$0):msg.$==1?new ResultMessage({
   $:1,
   $0:msg.$0
  }):msg.$==3?new ResultMessage({
   $:3,
   $0:msg.$0
  }):msg.$==2?new ResultMessage({
   $:2,
   $0:msg.$0
  }):msg.$==5?new ResultMessage({
   $:5,
   $0:msg.$0,
   $1:msg.$1
  }):msg.$==6?new ResultMessage({
   $:6,
   $0:Arrays.map(function(m)
   {
    return ResultMessage.bindMessage(f,m);
   },msg.$0)
  }):ResultMessage.NoMsg;
 };
 ResultMessage.freeMessageF=function(f,msg)
 {
  return ResultMessage.bindMessage(f,msg);
 };
 ResultMessage.freeMessage=function(msg)
 {
  var f;
  function g(a)
  {
   return new ResultMessage({
    $:1,
    $0:a
   });
  }
  return ResultMessage.freeMessageF((f=function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),function(x)
  {
   return g(f(x));
  }),msg);
 };
 ResultMessage.freeMessageW=function(msg)
 {
  var f;
  function g(a)
  {
   return new ResultMessage({
    $:2,
    $0:a
   });
  }
  return ResultMessage.freeMessageF((f=function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),function(x)
  {
   return g(f(x));
  }),msg);
 };
 ResultMessage.freeMessageI=function(msg)
 {
  var f;
  function g(a)
  {
   return new ResultMessage({
    $:3,
    $0:a
   });
  }
  return ResultMessage.freeMessageF((f=function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),function(x)
  {
   return g(f(x));
  }),msg);
 };
 ResultMessage.isInfoF=function(f,msg)
 {
  return msg.$==3||(msg.$==4?f(msg.$0):msg.$==6&&Seq$1.forall(function(m)
  {
   return ResultMessage.isInfoF(f,m);
  },ResultMessage.exclnoMsg(msg.$0)));
 };
 ResultMessage.isInfo=function(msg)
 {
  return ResultMessage.isInfoF(function()
  {
   return false;
  },msg);
 };
 ResultMessage.isInfoI=function(msg)
 {
  return ResultMessage.isInfoF(function()
  {
   return true;
  },msg);
 };
 ResultMessage.isWarningOrInfoF=function(f,msg)
 {
  return msg.$==2||(msg.$==4?f(msg.$0):msg.$==6&&Seq$1.forall(function(m)
  {
   return ResultMessage.isWarningOrInfoF(f,m)||ResultMessage.isInfoF(f,m);
  },ResultMessage.exclnoMsg(msg.$0)));
 };
 ResultMessage.isWarningOrInfo=function(msg)
 {
  return ResultMessage.isWarningOrInfoF(function()
  {
   return false;
  },msg);
 };
 ResultMessage.isWarningOrInfoW=function(msg)
 {
  return ResultMessage.isWarningOrInfoF(function()
  {
   return true;
  },msg);
 };
 ResultMessage.isFatalF=function(f,msg)
 {
  return msg.$==0?false:msg.$==3?false:msg.$==2?false:msg.$==4?f(msg.$0):msg.$==6?Seq$1.exists(function(m)
  {
   return ResultMessage.isFatalF(f,m);
  },msg.$0):true;
 };
 ResultMessage.isFatal=function(msg)
 {
  return ResultMessage.isFatalF(function()
  {
   return true;
  },msg);
 };
 ResultMessage.isFatalW=function(msg)
 {
  return ResultMessage.isFatalF(function()
  {
   return false;
  },msg);
 };
 ResultMessage.countF=function(f,msg)
 {
  function f$1(f$2,w,i)
  {
   return function(t)
   {
    return[f$2+t[0],w+t[1],i+t[2]];
   };
  }
  return msg.$==0?[0,0,0]:msg.$==3?[0,0,1]:msg.$==2?[0,1,0]:msg.$==4?f(msg.$0):msg.$==6?Seq$1.fold(function($1,$2)
  {
   return(function($3)
   {
    return f$1($3[0],$3[1],$3[2]);
   }($1))($2);
  },[0,0,0],Seq$1.map(function(m)
  {
   return ResultMessage.countF(f,m);
  },ResultMessage.exclnoMsg(msg.$0))):[1,0,0];
 };
 ResultMessage.count=function(msg)
 {
  return ResultMessage.countF(function()
  {
   return[1,0,0];
  },msg);
 };
 ResultMessage.countW=function(msg)
 {
  return ResultMessage.countF(function()
  {
   return[0,1,0];
  },msg);
 };
 ResultMessage.countI=function(msg)
 {
  return ResultMessage.countF(function()
  {
   return[0,0,1];
  },msg);
 };
 ResultMessage.addMsg=function(a,b)
 {
  return a.$==0?b:a.$==6?b.$==0?a:b.$==6?new ResultMessage({
   $:6,
   $0:a.$0.concat(b.$0)
  }):new ResultMessage({
   $:6,
   $0:a.$0.concat([b])
  }):b.$==0?a:b.$==6?new ResultMessage({
   $:6,
   $0:[a].concat(b.$0)
  }):new ResultMessage({
   $:6,
   $0:[a,b]
  });
 };
 ResultMessage.reduceMsgs=function(ms)
 {
  return Seq$1.fold(ResultMessage.addMsg,ResultMessage.NoMsg,ms);
 };
 ResultMessage.summaryF=function(f,msg)
 {
  var $1,m;
  m=ResultMessage.countF(f,msg);
  switch(m[0]===0?m[1]===0?0:m[1]===1?m[2]===0?0:($1=m[1],2):($1=m[1],2):m[0]===1?m[1]===0?m[2]===0?0:($1=m[0],1):($1=[m[0],m[1]],3):m[1]===0?($1=m[0],1):($1=[m[0],m[1]],3))
  {
   case 0:
    return"";
   case 1:
    return(function($2)
    {
     return function($3)
     {
      return $2("Errors   : "+Global.String($3)+"\n");
     };
    }(Global.id))($1);
   case 2:
    return(function($2)
    {
     return function($3)
     {
      return $2("Warnings : "+Global.String($3)+"\n");
     };
    }(Global.id))($1);
   case 3:
    return(((Runtime$1.Curried3(function($2,$3,$4)
    {
     return $2("Errors   : "+Global.String($3)+", Warnings: "+Global.String($4)+"\n");
    }))(Global.id))($1[0]))($1[1]);
  }
 };
 ResultMessage.summarizedF=function(f,msg)
 {
  return Strings.concat("\n",Seq$1.filter(function(y)
  {
   return""!==y;
  },List.ofArray([Global.String(msg),ResultMessage.summaryF(f,msg)])));
 };
 ResultMessage.summarized=function(msg)
 {
  return ResultMessage.summarizedF(function()
  {
   return[1,0,0];
  },msg);
 };
 ResultMessage.summarizedW=function(msg)
 {
  return ResultMessage.summarizedF(function()
  {
   return[0,1,0];
  },msg);
 };
 ResultMessage.summarizedI=function(msg)
 {
  return ResultMessage.summarizedF(function()
  {
   return[0,0,1];
  },msg);
 };
 Monads.OkM$1=function(v)
 {
  return{
   $:0,
   $0:{
    $:1,
    $0:v
   },
   $1:ResultMessage.NoMsg
  };
 };
 Monads.OkMWithMsg=function(v,m)
 {
  return{
   $:0,
   $0:{
    $:1,
    $0:v
   },
   $1:m
  };
 };
 Monads.ErrorM=function(m)
 {
  return{
   $:0,
   $0:null,
   $1:m
  };
 };
 Monads.OkM=function(r)
 {
  return r.$0==null?{
   $:1,
   $0:r.$1
  }:{
   $:0,
   $0:[r.$0.$0,r.$1]
  };
 };
 Seq.rtn=function()
 {
  SC$1.$cctor();
  return SC$1.rtn;
 };
 Seq.insertO=function(vSO)
 {
  var o;
  o=vSO==null?null:{
   $:1,
   $0:Seq$1.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vSO.$0)
  };
  return o==null?(Seq.rtn())(null):o.$0;
 };
 Seq.insertR=function(vSR)
 {
  return vSR.$==0?Seq$1.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vSR.$0):(Seq.rtn())(Library.Error(vSR.$0));
 };
 Seq.absorbO=function(vOS)
 {
  return Seq$1.choose(Global.id,vOS);
 };
 Seq.absorbR=function(vOS)
 {
  return Seq$1.choose(function(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  },vOS);
 };
 Seq.ofOption=function(vO)
 {
  return vO==null?[]:[vO.$0];
 };
 Option.rtn=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 Option.iter=function(f)
 {
  function f$1(o)
  {
   return o==null?null:{
    $:1,
    $0:f(o.$0)
   };
  }
  function g(o)
  {
   if(o==null)
    ;
  }
  return function(x)
  {
   return g(f$1(x));
  };
 };
 Option.join=function(o)
 {
  return o==null?null:o.$0;
 };
 Option.apply=function(fO,vO)
 {
  var $1;
  return fO!=null&&fO.$==1&&(vO!=null&&vO.$==1&&($1=[fO.$0,vO.$0],true))?{
   $:1,
   $0:$1[0]($1[1])
  }:null;
 };
 Option.mapNone=function(f,o)
 {
  return o==null?f():o.$0;
 };
 Option.bindNone=function(f,o)
 {
  return o!=null&&o.$==1?{
   $:1,
   $0:o.$0
  }:f();
 };
 Option.op_GreaterGreaterEquals=function(v,f)
 {
  return v==null?null:f(v.$0);
 };
 Option.traverseSeq=function(f,sq)
 {
  var o;
  o=Arrays.foldBack(function(head,tail)
  {
   return Option.op_GreaterGreaterEquals(f(head),function(h)
   {
    return Option.op_GreaterGreaterEquals(tail,function(t)
    {
     return Option.rtn(new T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Option.rtn(T.Empty));
  return o==null?null:{
   $:1,
   $0:o.$0
  };
 };
 Option.sequenceSeq=function(sq)
 {
  return Option.traverseSeq(Global.id,sq);
 };
 Option.insertR=function(vOR)
 {
  var x;
  return vOR.$==0?(x=vOR.$0,x==null?null:{
   $:1,
   $0:{
    $:0,
    $0:x.$0
   }
  }):Option.rtn(Library.Error(vOR.$0));
 };
 Option.absorbR=function(vRO)
 {
  var $1,c;
  return vRO!=null&&vRO.$==1&&(c=vRO.$0,c.$==0&&($1=c.$0,true))?{
   $:1,
   $0:$1
  }:null;
 };
 Async.apply=function(fA,vA)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.StartChild(fA,null),function(a)
   {
    return Concurrency.Bind(Concurrency.StartChild(vA,null),function(a$1)
    {
     return Concurrency.Bind(a,function(a$2)
     {
      return Concurrency.Bind(a$1,function(a$3)
      {
       return Concurrency.Return(a$2(a$3));
      });
     });
    });
   });
  });
 };
 Async.sleepThen=function(f,milliseconds)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(milliseconds),function()
   {
    return Concurrency.Return(f());
   });
  });
 };
 Async.op_GreaterGreaterEquals=function(v,f)
 {
  return Concurrency.Bind(v,f);
 };
 Async.traverseSeq=function(f,sq)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(Arrays.foldBack(function(head,tail)
  {
   return Async.op_GreaterGreaterEquals(f(head),function(h)
   {
    return Async.op_GreaterGreaterEquals(tail,function(t)
    {
     return Concurrency.Return(new T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Concurrency.Return(T.Empty)),function(x)
  {
   return g(Global.id(x));
  });
 };
 Async.sequenceSeq=function(sq)
 {
  return Async.traverseSeq(Global.id,sq);
 };
 Async.insertO=function(vAO)
 {
  var o;
  function f(a)
  {
   return{
    $:1,
    $0:a
   };
  }
  function g(v)
  {
   return Concurrency.Return(v);
  }
  o=vAO==null?null:{
   $:1,
   $0:Concurrency.Bind(vAO.$0,function(x)
   {
    return g(f(x));
   })
  };
  return o==null?Concurrency.Return(null):o.$0;
 };
 Async.insertR=function(vAR)
 {
  function f(a)
  {
   return{
    $:0,
    $0:a
   };
  }
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return vAR.$==0?Concurrency.Bind(vAR.$0,function(x)
  {
   return g(f(x));
  }):Concurrency.Return(Library.Error(vAR.$0));
 };
 State.rtn=function(v,s)
 {
  return[s,v];
 };
 State.bind=function(f,ma,s1)
 {
  var p;
  p=ma(s1);
  return(f(p[1]))(p[0]);
 };
 State.map=function(f)
 {
  var f$1;
  f$1=function(x)
  {
   var $1;
   $1=f(x);
   return function($2)
   {
    return State.rtn($1,$2);
   };
  };
  return(Runtime$1.Curried3(State.bind))(f$1);
 };
 State.state=function()
 {
  SC$1.$cctor();
  return SC$1.state;
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
 CEBuilder=State.CEBuilder=Runtime$1.Class({
  Bind:function(m,f)
  {
   return function(s)
   {
    return State.bind(f,m,s);
   };
  },
  Return:function(v)
  {
   return function(s)
   {
    return State.rtn(v,s);
   };
  },
  Delay:function(f)
  {
   return f();
  }
 },Obj,CEBuilder);
 CEBuilder.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },CEBuilder);
 Operators.op_GreaterGreaterEquals=function(ma,f)
 {
  return function(s)
  {
   return State.bind(f,ma,s);
  };
 };
 Operators.op_BarGreaterGreater=function(ma,f)
 {
  return(State.map(f))(ma);
 };
 Result.errorf=function(fmt)
 {
  return fmt(Library.Error);
 };
 Result.rtn=function(a)
 {
  return{
   $:0,
   $0:a
  };
 };
 Result.join=function(r)
 {
  return Result$1.Bind(Global.id,r);
 };
 Result.flatten=function(r)
 {
  return Result$1.Bind(Global.id,r);
 };
 Result.toOption=function(r)
 {
  return r.$==0?{
   $:1,
   $0:r.$0
  }:null;
 };
 Result.defaultWith=function(f,r)
 {
  return r.$==1?f(r.$0):r.$0;
 };
 Result.defaultValue=function(d,r)
 {
  return r.$==1?d:r.$0;
 };
 Result.failIfTrue=function(m,v)
 {
  return v?Library.Error(m):{
   $:0,
   $0:null
  };
 };
 Result.failIfFalse=function(m,v)
 {
  return!v?Library.Error(m):{
   $:0,
   $0:null
  };
 };
 Result.iter=function(fE,f,r)
 {
  Result.defaultWith(fE,Result$1.Map(f,r));
 };
 Result.get=function(r)
 {
  return Result.defaultWith(function(x)
  {
   return Operators$5.FailWith(Global.String(x));
  },r);
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
 Result.absorbO=function(f,vOR)
 {
  return Result$1.Bind(function(v)
  {
   return Result.ofOption(f,v);
  },vOR);
 };
 Result.op_GreaterGreaterEquals=function(r,f)
 {
  return Result$1.Bind(f,r);
 };
 Result.traverseSeq=function(f,sq)
 {
  return Result$1.Map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return Result.op_GreaterGreaterEquals(f(head),function(h)
   {
    return Result.op_GreaterGreaterEquals(tail,function(t)
    {
     return Result.rtn(new T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Result.rtn(T.Empty)));
 };
 Result.sequenceSeq=function(sq)
 {
  return Result.traverseSeq(Global.id,sq);
 };
 Result.result=function()
 {
  SC$1.$cctor();
  return SC$1.result;
 };
 Result.freeMessage=function(r)
 {
  return r.$==1?Library.Error(ResultMessage.freeMessage(r.$0)):{
   $:0,
   $0:r.$0
  };
 };
 Result.bindP=function(f,r)
 {
  if(r.$==1)
   return Library.Error(r.$0);
  else
   try
   {
    return f(r.$0);
   }
   catch(e)
   {
    return Library.Error(new ResultMessage({
     $:5,
     $0:e.message,
     $1:e.stack
    }));
   }
 };
 Result.mapP=function(f,m)
 {
  return Result.bindP(function(x)
  {
   return Result.rtn(f(x));
  },m);
 };
 Result.iterP=function(fE,f,r)
 {
  Result.defaultWith(fE,Result.mapP(f,r));
 };
 Result.resultP=function()
 {
  SC$1.$cctor();
  return SC$1.resultP;
 };
 Builder=Result.Builder=Runtime$1.Class({
  Return:function(x)
  {
   return Result.rtn(x);
  },
  ReturnFrom:Global.id,
  Bind:function(w,r)
  {
   return Result$1.Bind(r,w);
  },
  Zero:function()
  {
   return Result.rtn();
  },
  Delay:Global.id,
  Combine:function(a,b)
  {
   return Result$1.Bind(b,a);
  },
  Run:function(f)
  {
   return Result$1.Bind(f,{
    $:0,
    $0:null
   });
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
  }
 },Obj,Builder);
 Builder.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },Builder);
 Operators$1.op_BarGreaterGreater=function(v,f)
 {
  return Result$1.Map(f,v);
 };
 Operators$1.op_GreaterGreaterEquals=function(v,f)
 {
  return Result$1.Bind(f,v);
 };
 Operators$1.op_RightShift=function(f,g,v)
 {
  return Operators$1.op_BarGreaterGreater(f(v),g);
 };
 Operators$1.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators$1.op_GreaterGreaterEquals(f(v),g);
 };
 Operators$1.rtn=function(v)
 {
  return Result.rtn(v);
 };
 Operators$1.result=function()
 {
  SC$1.$cctor();
  return SC$1.result$1;
 };
 BuilderP=Result.BuilderP=Runtime$1.Class({
  Return:function(x)
  {
   return Result.rtn(x);
  },
  ReturnFrom:Global.id,
  Bind:function(w,r)
  {
   return Result$1.Bind(r,w);
  },
  Zero:function()
  {
   return Result.rtn();
  },
  Delay:Global.id,
  Combine:function(a,b)
  {
   return Result$1.Bind(b,a);
  },
  Run:function(f)
  {
   return Result.bindP(f,{
    $:0,
    $0:null
   });
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
  }
 },Obj,BuilderP);
 BuilderP.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },BuilderP);
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
 Depend.rtn=function(a)
 {
  return{
   $:1,
   $0:a
  };
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
 Depend.apply=function(fR,vR)
 {
  return Depend.bind(function(b)
  {
   return(Depend.map(b))(vR);
  },fR);
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
   }:($1=a.$0,$1!=null&&$1.$==1)?(k=a.$1,(nm=a.$0.$0[0],(o=(o$1=Seq$1.tryFind(function(x)
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
   }:($1=a.$0,$1!=null&&$1.$==1)?(k=a.$1,(nm=a.$0.$0[0],(o=(o$1=Seq$1.tryFind(function($3)
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
   return a.$==1?a.$0:($1=a.$0,$1!=null&&$1.$==1)?(k=a.$1,(nm=a.$0.$0[0],resolve((o=(o$1=Seq$1.tryFind(function(x)
   {
    return g(f(x));
   },lst),o$1==null?null:{
    $:1,
    $0:k(o$1.$0[1])
   }),o==null?k(a.$0.$0[1]):o.$0)))):resolve(a.$1(void 0));
  }
  return resolve(depend);
 };
 Depend.depend=function()
 {
  SC$1.$cctor();
  return SC$1.depend;
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
     lst2=new T({
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
  }(T.Empty,dep)));
 };
 Depend.toString=function(dep)
 {
  return Strings.concat("\n",Seq$1.sort(Seq$1.distinct(Seq$1.map(function(a)
  {
   var $1,$2;
   return(a.$==0?($2=a.$0,$2!=null&&$2.$==1)?($1=[a.$1,a.$0.$0[0],a.$0.$0[1]],true):($1=a,false):($1=a,false))?(((Runtime$1.Curried3(function($3,$4,$5)
   {
    return $3(Strings.PadRight(Utils.toSafe($4),50)+" "+Utils.prettyPrint($5));
   }))(Global.id))($1[1]))($1[2]):Global.String($1);
  },Depend.getDependencies(dep)))));
 };
 DependBuilder=Depend.DependBuilder=Runtime$1.Class({
  Bind:function(m,f)
  {
   return Depend.bind(f,m);
  },
  Return:function(v)
  {
   return Depend.rtn(v);
  },
  Delay:function(f)
  {
   return f();
  }
 },Obj,DependBuilder);
 DependBuilder.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },DependBuilder);
 Operators$2.rtn=function()
 {
  SC$1.$cctor();
  return SC$1.rtn$1;
 };
 Operators$2.depend=function()
 {
  SC$1.$cctor();
  return SC$1.depend$1;
 };
 Operators$2.op_GreaterGreaterEquals=function(ma,f)
 {
  return Depend.bind(f,ma);
 };
 Operators$2.op_BarGreaterGreater=function(ma,f)
 {
  return(Depend.map(f))(ma);
 };
 Operators$2.op_BarMultiplyGreater=function(p,mf)
 {
  return Depend.apply(mf,(Operators$2.rtn())(p));
 };
 Operators$2.op_GreaterEqualsMultiply=function(mp,mf)
 {
  return Depend.apply(mf,mp);
 };
 Operators$2.op_LessMultiplyGreater=function(mf,mp)
 {
  return Depend.apply(mf,mp);
 };
 Operators$2.op_GreaterMultiplyGreater=function(g,mf)
 {
  var b;
  b=Operators$2.depend();
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
 ResultM.checkError=function()
 {
  return{
   $:0,
   $0:function()
   {
    return true;
   }
  };
 };
 ResultM.checkErrorW=function()
 {
  return{
   $:0,
   $0:function()
   {
    return false;
   }
  };
 };
 ResultM.rtn=function(v)
 {
  return Monads.OkM$1(v);
 };
 ResultM.rtnM=function(m)
 {
  return Monads.OkMWithMsg(null,m);
 };
 ResultM.rtnr=function(vR)
 {
  return Result.defaultWith(Monads.ErrorM,Result$1.Map(Monads.OkM$1,vR));
 };
 ResultM.freeMessage=function(r)
 {
  return r.$==1?Library.Error(ResultMessage.freeMessage(r.$0)):{
   $:0,
   $0:r.$0
  };
 };
 ResultM.toResult=function(r)
 {
  return r.$0==null?Library.Error(r.$1):{
   $:0,
   $0:r.$0.$0
  };
 };
 ResultM.toResultD=function(r)
 {
  return r.$0==null?Library.Error(r.$1):{
   $:0,
   $0:[r.$0.$0,r.$1]
  };
 };
 ResultM.toOption=function(r)
 {
  return r.$0;
 };
 ResultM.defaultWith=function(f,r)
 {
  return Result.defaultWith(f,ResultM.toResult(r));
 };
 ResultM.defaultValue=function(d,r)
 {
  return Result.defaultValue(d,ResultM.toResult(r));
 };
 ResultM.map=function(f,a)
 {
  var o;
  return{
   $:0,
   $0:(o=a.$0,o==null?null:{
    $:1,
    $0:f(o.$0)
   }),
   $1:a.$1
  };
 };
 ResultM.mapMessage=function(fM,a)
 {
  return{
   $:0,
   $0:a.$0,
   $1:fM(a.$1)
  };
 };
 ResultM.bind=function(f,r)
 {
  var m;
  return r.$0==null?{
   $:0,
   $0:null,
   $1:r.$1
  }:(m=r.$1,ResultM.mapMessage(function(b)
  {
   return ResultMessage.addMsg(m,b);
  },f(r.$0.$0)));
 };
 ResultM.bindP=function(f,r)
 {
  var m;
  if(r.$0==null)
   return{
    $:0,
    $0:null,
    $1:r.$1
   };
  else
   {
    m=r.$1;
    try
    {
     return ResultM.mapMessage(function(b)
     {
      return ResultMessage.addMsg(m,b);
     },f(r.$0.$0));
    }
    catch(e)
    {
     return Monads.ErrorM(new ResultMessage({
      $:5,
      $0:e.message,
      $1:e.stack
     }));
    }
   }
 };
 ResultM.bindM=function(f,m)
 {
  return ResultM.bindP(f,ResultM.rtnM(m));
 };
 ResultM.check=function(a,vR)
 {
  var $1;
  return($1=vR.$0,$1!=null&&$1.$==1)?ResultMessage.isFatalF(a.$0,vR.$1)?Monads.ErrorM(vR.$1):vR:vR;
 };
 ResultM.mapP=function(f,m)
 {
  return ResultM.bindP(function(x)
  {
   return ResultM.rtn(f(x));
  },m);
 };
 ResultM.iter=function(fM,f,r)
 {
  var a;
  a=ResultM.mapP(f,r);
  a.$0==null?fM(a.$1):void 0;
 };
 ResultM.get=function(r)
 {
  return ResultM.defaultWith(function(x)
  {
   return Operators$5.FailWith(Global.String(x));
  },r);
 };
 ResultM.ofOption=function(f,vO)
 {
  var o;
  o=vO==null?null:{
   $:1,
   $0:Monads.OkM$1(vO.$0)
  };
  return o==null?function(x)
  {
   return Monads.ErrorM(f(x));
  }():o.$0;
 };
 ResultM.ofResult=function(vR)
 {
  return ResultM.rtnr(vR);
 };
 ResultM.insertO=function(vRO)
 {
  var o;
  o=vRO==null?null:{
   $:1,
   $0:ResultM.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vRO.$0)
  };
  return o==null?Monads.OkM$1(null):o.$0;
 };
 ResultM.absorbO=function(f,vOR)
 {
  return ResultM.bindP(function(v)
  {
   return ResultM.ofOption(f,v);
  },vOR);
 };
 ResultM.addMsg=function(m,r)
 {
  return ResultM.mapMessage(function(b)
  {
   return ResultMessage.addMsg(m,b);
  },r);
 };
 ResultM.failIfFatalMsgF=function(f,r)
 {
  var a;
  a=Monads.OkM(r);
  return a.$==0?ResultMessage.isFatalF(f,a.$0[1])?Monads.ErrorM(a.$0[1]):r:r;
 };
 ResultM.failIfFatalMsg=function(r)
 {
  var a;
  a=Monads.OkM(r);
  return a.$==0?ResultMessage.isFatal(a.$0[1])?Monads.ErrorM(a.$0[1]):r:r;
 };
 ResultM.failIfFatalMsgW=function(r)
 {
  var a;
  a=Monads.OkM(r);
  return a.$==0?ResultMessage.isFatalW(a.$0[1])?Monads.ErrorM(a.$0[1]):r:r;
 };
 ResultM.op_GreaterGreaterEquals=function(r,f)
 {
  return ResultM.bind(f,r);
 };
 ResultM.traverseSeq=function(f,sq)
 {
  return ResultM.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return ResultM.op_GreaterGreaterEquals(f(head),function(h)
   {
    return ResultM.op_GreaterGreaterEquals(tail,function(t)
    {
     return ResultM.rtn(new T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),ResultM.rtn(T.Empty)));
 };
 ResultM.sequenceSeq=function(sq)
 {
  return ResultM.traverseSeq(Global.id,sq);
 };
 Builder$1=ResultM.Builder=Runtime$1.Class({
  Return:function(x)
  {
   return ResultM.rtn(x);
  },
  ReturnFrom$2:Global.id,
  ReturnFrom$1:Global.id,
  ReturnFrom:function(x)
  {
   return ResultM.rtnM(x);
  },
  Bind$1:function(w,r)
  {
   return ResultM.bindP(r,w);
  },
  Bind:function(w,r)
  {
   return ResultM.bindM(r,w);
  },
  Zero:function()
  {
   return ResultM.rtn();
  },
  Delay:Global.id,
  Combine:function(a,b)
  {
   return ResultM.bind(b,a);
  },
  Run:function(f)
  {
   return ResultM.bindP(f,Monads.OkM$1());
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
  While:function(guard,body)
  {
   function whileLoop(guard$1,body$1)
   {
    return guard$1()?ResultM.bind(function()
    {
     return whileLoop(guard$1,body$1);
    },body$1()):ResultM.rtn();
   }
   return whileLoop(guard,body);
  },
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
  }
 },Obj,Builder$1);
 Builder$1.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },Builder$1);
 Operators$3.op_BarGreaterGreater=function(v,f)
 {
  return ResultM.mapP(f,v);
 };
 Operators$3.op_GreaterGreaterEquals=function(v,f)
 {
  return ResultM.bindP(f,v);
 };
 Operators$3.op_RightShift=function(f,g,v)
 {
  return Operators$3.op_BarGreaterGreater(f(v),g);
 };
 Operators$3.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators$3.op_GreaterGreaterEquals(f(v),g);
 };
 Operators$3.rtn=function(v)
 {
  return ResultM.rtn(v);
 };
 ResultMAutoOpen.resultM=function()
 {
  SC$1.$cctor();
  return SC$1.resultM;
 };
 AsyncResultM.mapError=function(fE,v)
 {
  function f(a)
  {
   return ResultM.mapMessage(fE,a);
  }
  function g(v$1)
  {
   return Concurrency.Return(v$1);
  }
  return Concurrency.Bind(v,function(x)
  {
   return g(f(x));
  });
 };
 AsyncResultM.freeMessage=function(v)
 {
  function g(v$1)
  {
   return Concurrency.Return(v$1);
  }
  return Concurrency.Bind(v,function(x)
  {
   return g(ResultM.freeMessage(x));
  });
 };
 AsyncResultM.rtn=function(v)
 {
  return Concurrency.Return(Monads.OkM$1(v));
 };
 AsyncResultM.rtnr=function(vR)
 {
  return Concurrency.Return(ResultM.rtnr(vR));
 };
 AsyncResultM.rtnR=function(vR)
 {
  return Concurrency.Return(vR);
 };
 AsyncResultM.rtnM=function(vM)
 {
  return Concurrency.Return(ResultM.rtnM(vM));
 };
 AsyncResultM.rtnrA=function(vrA)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(vrA,function(x)
  {
   return g(ResultM.ofResult(x));
  });
 };
 AsyncResultM.errorMsgf=function(fmt)
 {
  var f;
  function f$1(a)
  {
   return new ResultMessage({
    $:1,
    $0:a
   });
  }
  function g(a)
  {
   return Concurrency.Return(a);
  }
  return fmt((f=function(x)
  {
   return Monads.ErrorM(f$1(x));
  },function(x)
  {
   return g(f(x));
  }));
 };
 AsyncResultM.iterS=function(fE,f,vRA)
 {
  throw"iterS cannot be used in JavaScript!";
 };
 AsyncResultM.iterA=function(fE,f,vRA)
 {
  function f$1(r)
  {
   ResultM.iter(fE,f,r);
  }
  function g(v)
  {
   return Concurrency.Return(v);
  }
  Concurrency.Start(Concurrency.Bind(vRA,function(x)
  {
   return g(f$1(x));
  }),null);
 };
 AsyncResultM.iterpS=function(f,vRA)
 {
  function g(v)
  {
   Library.print(v);
  }
  AsyncResultM.iterS(function(x)
  {
   return g(ResultMessage.summarized(x));
  },f,vRA);
 };
 AsyncResultM.iterpA=function(f,vRA)
 {
  function g(v)
  {
   Library.print(v);
  }
  AsyncResultM.iterA(function(x)
  {
   return g(ResultMessage.summarized(x));
  },f,vRA);
 };
 AsyncResultM.bind=function(fRA,vRA)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.TryWith(Concurrency.Delay(function()
   {
    return Concurrency.Bind(vRA,function(a)
    {
     var a$1,m;
     function f(r)
     {
      return ResultM.addMsg(m,r);
     }
     function g(v)
     {
      return Concurrency.Return(v);
     }
     a$1=Monads.OkM(a);
     return a$1.$==1?Concurrency.Return(Monads.ErrorM(a$1.$0)):(m=a$1.$0[1],Concurrency.Bind(fRA(a$1.$0[0]),function(x)
     {
      return g(f(x));
     }));
    });
   }),function(a)
   {
    return Concurrency.Return(Monads.ErrorM(new ResultMessage({
     $:5,
     $0:a.message,
     $1:a.stack
    })));
   });
  });
 };
 AsyncResultM.bindr=function(f,a)
 {
  return AsyncResultM.bind(f,AsyncResultM.rtnr(a));
 };
 AsyncResultM.bindM=function(f,a)
 {
  return AsyncResultM.bind(f,AsyncResultM.rtnM(a));
 };
 AsyncResultM.bindrA=function(f,a)
 {
  return AsyncResultM.bind(f,AsyncResultM.rtnrA(a));
 };
 AsyncResultM.bindR=function(f,a)
 {
  return AsyncResultM.bind(f,AsyncResultM.rtnR(a));
 };
 AsyncResultM.map=function(f,m)
 {
  return AsyncResultM.bind(function(x)
  {
   return AsyncResultM.rtn(f(x));
  },m);
 };
 AsyncResultM.whileLoop=function(cond,fRA)
 {
  return cond()?AsyncResultM.bind(function()
  {
   return AsyncResultM.whileLoop(cond,fRA);
  },fRA()):AsyncResultM.rtn();
 };
 AsyncResultM.op_GreaterGreaterEquals=function(v,f)
 {
  return AsyncResultM.bind(f,v);
 };
 AsyncResultM.traverseSeq=function(f,sq)
 {
  return AsyncResultM.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return AsyncResultM.op_GreaterGreaterEquals(f(head),function(h)
   {
    return AsyncResultM.op_GreaterGreaterEquals(tail,function(t)
    {
     return AsyncResultM.rtn(new T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),AsyncResultM.rtn(T.Empty)));
 };
 AsyncResultM.sequenceSeq=function(sq)
 {
  return AsyncResultM.traverseSeq(Global.id,sq);
 };
 AsyncResultM.insertO=function(vRAO)
 {
  var o;
  o=vRAO==null?null:{
   $:1,
   $0:AsyncResultM.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vRAO.$0)
  };
  return o==null?AsyncResultM.rtn(null):o.$0;
 };
 AsyncResultM.insertR=function(vRAR)
 {
  return vRAR.$==0?AsyncResultM.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vRAR.$0):AsyncResultM.rtn(Library.Error(vRAR.$0));
 };
 AsyncResultM.absorbR=function(vRRA)
 {
  var f;
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(vRRA,(f=function(r)
  {
   return ResultM.bindP(Global.id,r);
  },function(x)
  {
   return g(f(x));
  }));
 };
 AsyncResultM.absorbO=function(f,vORA)
 {
  function f$1(v)
  {
   return ResultM.absorbO(f,v);
  }
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(vORA,function(x)
  {
   return g(f$1(x));
  });
 };
 AsyncResultM.getResultM=function(a)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(a,function(x)
  {
   return g(Monads.OkM$1(x));
  });
 };
 AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder=Runtime$1.Class({
  ReturnFrom$4:Global.id,
  ReturnFrom$3:function(vR)
  {
   return AsyncResultM.rtnr(vR);
  },
  ReturnFrom$2:function(vR)
  {
   return AsyncResultM.rtnM(vR);
  },
  ReturnFrom$1:function(vR)
  {
   return AsyncResultM.rtnR(vR);
  },
  ReturnFrom:function(vR)
  {
   return AsyncResultM.rtnrA(vR);
  },
  Return:function(v)
  {
   return AsyncResultM.rtn(v);
  },
  Zero:function()
  {
   return AsyncResultM.rtn();
  },
  Bind$4:function(vRA,fRA)
  {
   return AsyncResultM.bind(fRA,vRA);
  },
  Bind$3:function(w,r)
  {
   return AsyncResultM.bindr(r,w);
  },
  Bind$2:function(w,r)
  {
   return AsyncResultM.bindM(r,w);
  },
  Bind$1:function(w,r)
  {
   return AsyncResultM.bindR(r,w);
  },
  Bind:function(w,r)
  {
   return AsyncResultM.bindrA(r,w);
  },
  Combine$1:function(vRA,fRA)
  {
   return AsyncResultM.bind(fRA,vRA);
  },
  Combine:function(vR,fRA)
  {
   return AsyncResultM.bind(fRA,AsyncResultM.rtnR(vR));
  },
  Delay:Global.id,
  Run:function(fRA)
  {
   return AsyncResultM.bind(fRA,AsyncResultM.rtn());
  },
  TryWith:function(fRA,hnd)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.TryWith(Concurrency.Delay(function()
    {
     return fRA();
    }),function(a)
    {
     return hnd(a);
    });
   });
  },
  TryFinally:function(fRA,fn)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.TryFinally(Concurrency.Delay(function()
    {
     return fRA();
    }),function()
    {
     fn();
    });
   });
  },
  Using:function(resource,fRA)
  {
   return Concurrency.Using(resource,fRA);
  },
  While:function(guard,fRA)
  {
   return AsyncResultM.whileLoop(guard,fRA);
  },
  For:function(s,fRA)
  {
   var $this;
   $this=this;
   return this.Using(Enumerator.Get(s),function(_enum)
   {
    return $this.While(function()
    {
     return _enum.MoveNext();
    },$this.Delay(function()
    {
     return fRA(_enum.Current());
    }));
   });
  }
 },Obj,AsyncResultMBuilder);
 AsyncResultMBuilder.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },AsyncResultMBuilder);
 Operators$4.op_BarGreaterGreater=function(v,f)
 {
  return AsyncResultM.map(f,v);
 };
 Operators$4.op_GreaterGreaterEquals=function(v,f)
 {
  return AsyncResultM.bind(f,v);
 };
 Operators$4.op_GreaterMinusGreater=function(f,g,v)
 {
  return Operators$4.op_BarGreaterGreater(f(v),g);
 };
 Operators$4.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators$4.op_GreaterGreaterEquals(f(v),g);
 };
 Operators$4.rtn=function(v)
 {
  return AsyncResultM.rtn(v);
 };
 AsyncResultMAutoOpen.asyncResultM=function()
 {
  SC$1.$cctor();
  return SC$1.asyncResultM;
 };
 AsyncResultMAutoOpen["AsyncResultMBuilder.ReturnFrom"]=function(__,vA)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(vA,function(x)
  {
   return g(Monads.OkM$1(x));
  });
 };
 AsyncResultMAutoOpen["AsyncResultMBuilder.Bind"]=function(__,vA,fRA)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return AsyncResultM.bind(fRA,Concurrency.Bind(vA,function(x)
  {
   return g(Monads.OkM$1(x));
  }));
 };
 AsyncResultMAutoOpen["AsyncResultMBuilder.Combine"]=function(__,vA,fRA)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return AsyncResultM.bind(fRA,Concurrency.Bind(vA,function(x)
  {
   return g(Monads.OkM$1(x));
  }));
 };
 String.splitByChar=function(c,s)
 {
  return Strings.SplitChars(s,[c],0);
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
 String.delimitedO=function(op,cl,txt)
 {
  var o,$1,bef,o$1,$2;
  o=String.splitInTwoO(op,txt);
  return o==null?null:($1=o.$0,(bef=$1[0],(o$1=String.splitInTwoO(cl,$1[1]),o$1==null?null:{
   $:1,
   $0:($2=o$1.$0,[bef,$2[0],$2[1]])
  })));
 };
 String.contains=function(sub,whole)
 {
  return whole.indexOf(sub)!=-1;
 };
 String.trim=function(s)
 {
  return Strings.Trim(s);
 };
 String.append=function(a,b)
 {
  return a+b;
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
 String.unindent=function(s)
 {
  var lines,n,o,o$1;
  lines=Strings.SplitChars(s,["\n"],0);
  n=(o=Seq$1.tryFindIndex(function(y)
  {
   return" "!==y;
  },(o$1=Seq$1.tryFind(function(l)
  {
   return Strings.Trim(l)!=="";
  },lines),o$1==null?"":o$1.$0)),o==null?0:o.$0);
  return Seq$1.filter(function(s$1)
  {
   return!Strings.StartsWith(s$1,"# 1 ");
  },Seq$1.map(function(l)
  {
   return l.length<=n?"":l.substring(n);
  },lines));
 };
 String.indent=function(n,s)
 {
  var x,x$1;
  x=Strings.SplitChars(s,["\n"],0);
  return Seq$1.map((x$1=Strings.replicate(n," "),function(y)
  {
   return x$1+y;
  }),x);
 };
 String.unindentStr=function()
 {
  SC$1.$cctor();
  return SC$1.unindentStr;
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
 String.skipLastLine=function()
 {
  SC$1.$cctor();
  return SC$1.skipLastLine;
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
 String.thousands=function(n)
 {
  var v,r,s;
  v=Global.String(n);
  r=v.length%3;
  s=r===0?3:r;
  return Strings.concat(",",List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append([Slice.string(v,{
    $:1,
    $0:0
   },{
    $:1,
    $0:s-1
   })],Seq$1.delay(function()
   {
    return Seq$1.map(function(i)
    {
     return Slice.string(v,{
      $:1,
      $0:i*3+s
     },{
      $:1,
      $0:i*3+s+2
     });
    },Operators$5.range(0,((v.length-s)/3>>0)-1));
   }));
  })));
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
 ParseO.parseDateO2=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO2;
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
 ParseO.parseInt64O=function()
 {
  SC$1.$cctor();
  return SC$1.parseInt64O;
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
 ParseO.Date=function()
 {
  SC$1.$cctor();
  return SC$1["|Date|_|"];
 };
 ParseO.Int=function()
 {
  SC$1.$cctor();
  return SC$1["|Int|_|"];
 };
 ParseO.Int64=function()
 {
  SC$1.$cctor();
  return SC$1["|Int64|_|"];
 };
 ParseO.Single=function()
 {
  SC$1.$cctor();
  return SC$1["|Single|_|"];
 };
 ParseO.Double=function()
 {
  SC$1.$cctor();
  return SC$1["|Double|_|"];
 };
 ParseO.Guid=function()
 {
  SC$1.$cctor();
  return SC$1["|Guid|_|"];
 };
 Serializer.serialize=function(s,s$1,v)
 {
  return[s,s$1][0](v);
 };
 Serializer.Field=function(field,j)
 {
  return j.tryField(field);
 };
 Serializer.sprintA=function(v)
 {
  var x;
  x=Strings.concat(", ",v);
  return(function($1)
  {
   return function($2)
   {
    return $1("["+Utils.toSafe($2)+"]");
   };
  }(Global.id))(x);
 };
 Serializer.toJsonString=function(v)
 {
  return Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(["\""],Seq$1.delay(function()
   {
    return Seq$1.append(!Strings.IsNullOrEmpty(v)?Seq$1.collect(function(i)
    {
     var c,ci;
     c=v[i];
     ci=c.charCodeAt();
     return ci>=0&&ci<=7||ci===11||ci>=14&&ci<=31?(function($1)
     {
      return function($2)
      {
       return $1("\\u"+Utils.padNumLeft($2.toString(16),4));
      };
     }(Global.id))(ci):c==="\u0008"?"\\b":c==="\u0009"?"\\t":c==="\n"?"\\n":c==="\u000c"?"\\f":c==="\r"?"\\r":c==="\""?"\\\"":c==="\\"?"\\\\":[c];
    },Operators$5.range(0,v.length-1)):[],Seq$1.delay(function()
    {
     return["\""];
    }));
   }));
  })).join("");
 };
 Serializer.serString=function()
 {
  SC$1.$cctor();
  return SC$1.serString;
 };
 Serializer.serFloat=function()
 {
  SC$1.$cctor();
  return SC$1.serFloat;
 };
 Serializer.serInt=function()
 {
  SC$1.$cctor();
  return SC$1.serInt;
 };
 Serializer.serInt64=function()
 {
  SC$1.$cctor();
  return SC$1.serInt64;
 };
 Serializer.serBool=function()
 {
  SC$1.$cctor();
  return SC$1.serBool;
 };
 Serializer.serDate=function()
 {
  SC$1.$cctor();
  return SC$1.serDate;
 };
 Serializer.serField=function(name,get,set,a,a$1)
 {
  var f;
  function g(a$2)
  {
   return{
    $:1,
    $0:a$2
   };
  }
  return[name,(f=function(x)
  {
   return a(get(x));
  },function(x)
  {
   return g(f(x));
  }),function(rc)
  {
   var f$1,b,g$1;
   function m(b$1)
   {
    return set(b$1,rc);
   }
   function g$2(o)
   {
    return o==null?rc:o.$0;
   }
   f$1=(b=(g$1=function(o)
   {
    return o==null?null:{
     $:1,
     $0:m(o.$0)
    };
   },function(x)
   {
    return g$1(a$1(x));
   }),function(o)
   {
    return o==null?null:b(o.$0);
   });
   return function(x)
   {
    return g$2(f$1(x));
   };
  }];
 };
 Serializer.serFieldO=function(name,get,set,a,a$1)
 {
  function g(o)
  {
   return o==null?null:{
    $:1,
    $0:a(o.$0)
   };
  }
  return[name,function(x)
  {
   return g(get(x));
  },function(rc)
  {
   var f,m;
   function g$1(b)
   {
    return set(b,rc);
   }
   function g$2(o)
   {
    return o==null?rc:o.$0;
   }
   f=(m=function(x)
   {
    return g$1(a$1(x));
   },function(o)
   {
    return o==null?null:{
     $:1,
     $0:m(o.$0)
    };
   });
   return function(x)
   {
    return g$2(f(x));
   };
  }];
 };
 Serializer.serSeq=function(s,s$1)
 {
  var ser,f,m;
  ser=[s,s$1];
  return[(f=(m=ser[0],function(s$2)
  {
   return Seq$1.map(m,s$2);
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),function(j)
  {
   var o,x,m$1,c;
   o=(x=j.tryArray(),(m$1=(c=ser[1],function(a)
   {
    return Arrays.choose(c,a);
   }),x==null?null:{
    $:1,
    $0:m$1(x.$0)
   }));
   return o==null?null:{
    $:1,
    $0:o.$0
   };
  }];
 };
 Serializer.serArr=function(s,s$1)
 {
  var ser,f,m;
  ser=[s,s$1];
  return[(f=(m=ser[0],function(a)
  {
   return Arrays.map(m,a);
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),function(j)
  {
   var x,m$1,c;
   x=j.tryArray();
   m$1=(c=ser[1],function(a)
   {
    return Arrays.choose(c,a);
   });
   return x==null?null:{
    $:1,
    $0:m$1(x.$0)
   };
  }];
 };
 Serializer.serLst=function(s,s$1)
 {
  var ser,f,m;
  ser=[s,s$1];
  return[(f=(m=ser[0],function(l)
  {
   return List.map(m,l);
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),function(j)
  {
   var o,x,m$1,c;
   o=(x=j.tryArray(),(m$1=(c=ser[1],function(a)
   {
    return Arrays.choose(c,a);
   }),x==null?null:{
    $:1,
    $0:m$1(x.$0)
   }));
   return o==null?null:{
    $:1,
    $0:List.ofSeq(o.$0)
   };
  }];
 };
 Serializer.serSet=function(s,s$1)
 {
  var ser,f,m;
  ser=[s,s$1];
  return[(f=(m=ser[0],function(s$2)
  {
   return new FSharpSet.New$1(BalancedTree.OfSeq(Seq$1.map(m,s$2)));
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),function(j)
  {
   var o,x,m$1,c;
   o=(x=j.tryArray(),(m$1=(c=ser[1],function(a)
   {
    return Arrays.choose(c,a);
   }),x==null?null:{
    $:1,
    $0:m$1(x.$0)
   }));
   return o==null?null:{
    $:1,
    $0:new FSharpSet.New(o.$0)
   };
  }];
 };
 Serializer.serOpt=function(s,s$1)
 {
  var ser,f,m;
  function g(o)
  {
   return o==null?"null":o.$0;
  }
  ser=[s,s$1];
  return[(f=(m=ser[0],function(o)
  {
   return o==null?null:{
    $:1,
    $0:m(o.$0)
   };
  }),function(x)
  {
   return g(f(x));
  }),function(j)
  {
   return{
    $:1,
    $0:j.isNull()?null:ser[1](j)
   };
  }];
 };
 Serializer.serDup=function(serFst,serSnd)
 {
  return[function(t)
  {
   return(((Runtime$1.Curried3(function($1,$2,$3)
   {
    return $1("["+Utils.toSafe($2)+", "+Utils.toSafe($3)+"]");
   }))(Global.id))(serFst[0](t[0])))(serSnd[0](t[1]));
  },function(j)
  {
   var a,$1,t,$2,$3,$4;
   a=j.tryArray();
   return a!=null&&a.$==1&&((t=a.$0,!Unchecked.Equals(t,null)&&t.length===2)&&($1=[Arrays.get(a.$0,0),Arrays.get(a.$0,1)],true))?($2=serFst[1]($1[0]),($3=serSnd[1]($1[1]),$2!=null&&$2.$==1&&($3!=null&&$3.$==1&&($4=[$2.$0,$3.$0],true))?{
    $:1,
    $0:[$4[0],$4[1]]
   }:null)):null;
  }];
 };
 Serializer.serTrp=function(sF,sS,sT)
 {
  return[function(t)
  {
   return((((Runtime$1.Curried(function($1,$2,$3,$4)
   {
    return $1("["+Utils.toSafe($2)+", "+Utils.toSafe($3)+", "+Utils.toSafe($4)+"]");
   },4))(Global.id))(sF[0](t[0])))(sS[0](t[1])))(sT[0](t[2]));
  },function(j)
  {
   var a,$1,t,$2,$3,$4,$5;
   a=j.tryArray();
   return a!=null&&a.$==1&&((t=a.$0,!Unchecked.Equals(t,null)&&t.length===3)&&($1=[Arrays.get(a.$0,0),Arrays.get(a.$0,1),Arrays.get(a.$0,2)],true))?($2=sF[1]($1[0]),($3=sS[1]($1[1]),($4=sT[1]($1[2]),$2!=null&&$2.$==1&&($3!=null&&$3.$==1&&($4!=null&&$4.$==1&&($5=[$2.$0,$3.$0,$4.$0],true)))?{
    $:1,
    $0:[$5[0],$5[1],$5[2]]
   }:null))):null;
  }];
 };
 Serializer.serPair=function(s,s$1,s$2,s$3)
 {
  return Serializer.serDup([s,s$1],[s$2,s$3]);
 };
 Serializer.serMap=function(s,s$1,s$2,s$3)
 {
  var serKVPs,t,f,g,f$1,g$1;
  function m(kvp)
  {
   return[kvp.K,kvp.V];
  }
  function m$1(a)
  {
   return new FSharpMap.New(a);
  }
  serKVPs=(t=Serializer.serDup([s,s$1],[s$2,s$3]),Serializer.serSeq(t[0],t[1]));
  return[(f=function(s$4)
  {
   return Seq$1.map(m,s$4);
  },(g=serKVPs[0],function(x)
  {
   return g(f(x));
  })),(f$1=serKVPs[1],(g$1=function(o)
  {
   return o==null?null:{
    $:1,
    $0:m$1(o.$0)
   };
  },function(x)
  {
   return g$1(f$1(x));
  }))];
 };
 Serializer.serTypedRegisters=function()
 {
  SC$1.$cctor();
  return SC$1.serTypedRegisters;
 };
 Serializer.map=function(g,f,a,a$1)
 {
  function g$1(o)
  {
   return o==null?null:{
    $:1,
    $0:f(o.$0)
   };
  }
  return[function(x)
  {
   return a(g(x));
  },function(x)
  {
   return g$1(a$1(x));
  }];
 };
 Serializer.mapO=function(g,f,a,a$1)
 {
  function g$1(o)
  {
   return o==null?null:f(o.$0);
  }
  return[function(x)
  {
   return a(g(x));
  },function(x)
  {
   return g$1(a$1(x));
  }];
 };
 Serializer.serC=function(s,s$1,c)
 {
  return Serializer.mapO(function()
  {
   return c;
  },function(v)
  {
   return Unchecked.Equals(v,c)?{
    $:1,
    $0:null
   }:null;
  },s,s$1);
 };
 Serializer.serCn=function(s,s$1,c)
 {
  return Serializer.map(Global.ignore,Global.ignore,s,s$1);
 };
 Serializer.serGuid=function()
 {
  SC$1.$cctor();
  return SC$1.serGuid;
 };
 JsonIntermediate.New=function(tryFloat,tryInt,tryString,tryBool,tryArray,tryField,isObject,isNull,toString)
 {
  return{
   tryFloat:tryFloat,
   tryInt:tryInt,
   tryString:tryString,
   tryBool:tryBool,
   tryArray:tryArray,
   tryField:tryField,
   isObject:isObject,
   isNull:isNull,
   toString:toString
  };
 };
 Snippet.New=function(snpId,snpName,snpContent,snpParentIdO,snpPredIds,snpProperties,snpModified)
 {
  return{
   snpId:snpId,
   snpName:snpName,
   snpContent:snpContent,
   snpParentIdO:snpParentIdO,
   snpPredIds:snpPredIds,
   snpProperties:snpProperties,
   snpModified:snpModified
  };
 };
 SnippetModule.getNextModified=function()
 {
  return Date.now();
 };
 SnippetModule.New=function(name,content,parentO)
 {
  return Snippet.New(UoM$1.Tag$4(Guid.NewGuid()),name,content,parentO,new FSharpSet.New$1(null),[],SnippetModule.getNextModified());
 };
 SnippetModule.defaultSnippet=function()
 {
  SC$1.$cctor();
  return SC$1.defaultSnippet;
 };
 SnippetModule.indirectPredecessorIds=function(tryFindSnippet,snpId,snpParentIdO,snpPredIds)
 {
  var parentS;
  parentS=new FSharpSet.New(Option$1.toArray(snpParentIdO));
  return function(out,searched,toSearch)
  {
   var sid,toSearch1,searched1,m,snp1,news,out1,toSearch2;
   while(true)
    if(toSearch.get_IsEmpty())
     return out;
    else
     {
      sid=Seq$1.head(toSearch);
      toSearch1=toSearch.Remove(sid);
      searched1=searched.Add(sid);
      m=tryFindSnippet(sid);
      if(m!=null&&m.$==1)
       {
        snp1=m.$0;
        news=FSharpSet.op_Addition(new FSharpSet.New(Option$1.toArray(snp1.snpParentIdO)),new FSharpSet.New(snp1.snpPredIds));
        out1=FSharpSet.op_Addition(out,news);
        toSearch2=FSharpSet.op_Addition(toSearch1,FSharpSet.op_Subtraction(news,searched1));
        out=out1;
        searched=searched1;
        toSearch=toSearch2;
       }
      else
       {
        searched=searched1;
        toSearch=toSearch1;
       }
     }
  }(parentS,(new FSharpSet.New$1(null)).Add(snpId),FSharpSet.op_Addition(parentS,snpPredIds));
 };
 SnippetModule.allPredecessors=function(tryFindSnippet,snp)
 {
  var parentS;
  parentS=new FSharpSet.New(Option$1.toArray(snp.snpParentIdO));
  return function(out,searched,toSearch)
  {
   var sid,toSearch1,searched1,m,snp1,news,out1,toSearch2;
   while(true)
    if(toSearch.get_IsEmpty())
     return out;
    else
     {
      sid=Seq$1.head(toSearch);
      toSearch1=toSearch.Remove(sid);
      searched1=searched.Add(sid);
      m=tryFindSnippet(sid);
      if(m!=null&&m.$==1)
       {
        snp1=m.$0;
        news=FSharpSet.op_Addition(new FSharpSet.New(Option$1.toArray(snp1.snpParentIdO)),new FSharpSet.New(snp1.snpPredIds));
        out1=out.Add(snp1);
        toSearch2=FSharpSet.op_Addition(toSearch1,FSharpSet.op_Subtraction(news,searched1));
        out=out1;
        searched=searched1;
        toSearch=toSearch2;
       }
      else
       {
        searched=searched1;
        toSearch=toSearch1;
       }
     }
  }(new FSharpSet.New$1(null),(new FSharpSet.New$1(null)).Add(snp.snpId),FSharpSet.op_Addition(parentS,new FSharpSet.New(snp.snpPredIds)));
 };
 SnippetModule.getLevel=function(tryFindSnippet,snp)
 {
  var lvl,snp1,o,m;
  lvl=0;
  snp1=snp;
  while(true)
   {
    m=(o=snp1.snpParentIdO,o==null?null:tryFindSnippet(o.$0));
    if(m!=null&&m.$==1)
     {
      lvl=lvl+1;
      snp1=m.$0;
     }
    else
     return lvl;
   }
 };
 SnippetModule.hasChildren=function(getSnippets,snp)
 {
  var snps,m,o,o$1;
  snps=getSnippets();
  m=Seq$1.tryFindIndex(function(s)
  {
   return Unchecked.Equals(s.snpId,snp.snpId);
  },snps);
  return m!=null&&m.$==1&&(o=(o$1=Seq$1.tryItem(m.$0+1,snps),o$1==null?null:{
   $:1,
   $0:Unchecked.Equals(o$1.$0.snpParentIdO,{
    $:1,
    $0:snp.snpId
   })
  }),o==null?false:o.$0);
 };
 SnippetSerialize.serSnippetId=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippetId;
 };
 SnippetSerialize.serSnippet=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippet;
 };
 SnippetSerialize.getModel=function(snippets,gen,coll)
 {
  return Model.New(Arrays.ofSeq(snippets),gen,coll);
 };
 SnippetSerialize.serModel=function()
 {
  SC$1.$cctor();
  return SC$1.serModel;
 };
 Model.New=function(snippets,modified,collapsed)
 {
  return{
   snippets:snippets,
   modified:modified,
   collapsed:collapsed
  };
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
  }))(Global.id))(top?"top":"bottom"))(horizontal?"horizontal":"vertical"))],List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.collect(function(m)
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
   },Seq$1.indexed(tabs));
  })));
  return Doc.Element("div",[AttrProxy.Create("class","tab-panel")],List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(top?[strip]:[],Seq$1.delay(function()
   {
    return Seq$1.append([Doc.Element("div",[AttrProxy.Create("class","tab-content")],[content])],Seq$1.delay(function()
    {
     return Seq$1.append(!top?[strip]:[],Seq$1.delay(function()
     {
      return Seq$1.append([Doc.Element("style",T.Empty,List.ofArray([Doc.TextNode(WcTabStrip.css())]))],Seq$1.delay(function()
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
 WcTabStripT=WcTabStrip.WcTabStripT=Runtime$1.Class({
  connectedCallback:function()
  {
   var $this,el,shadowRoot,elsh;
   function addTab()
   {
    var a,top,tabs;
    top=!el.hasAttribute("bottom");
    tabs=List.ofSeq(Seq$1.delay(function()
    {
     return Seq$1.collect(function(i)
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
     },Operators$5.range(1,el.childNodes.length));
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
  var o;
  o=new WcSplitterT.New();
  WcSplitter.set_layoutHorizontal(layoutH);
  WcSplitter.set_layoutVertical(layoutV);
  WebComponent.defineWebComponent("wcomp-splitter",WcSplitterT.Constructor,self.FsRoot.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New);
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
    var x;
    x=domElem[0];
    (Option.iter(function(sh)
    {
     size[0]=sizeCalc(sh);
    }))(x);
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
 Monaco.newVar=function(_var)
 {
  return MonacoConfig.New(_var,Global.ignore,null,null,View.Const(false),null,null);
 };
 Monaco.loader=function()
 {
  SC$1.$cctor();
  return SC$1.loader;
 };
 Monaco.render=function(monc)
 {
  var b;
  return Doc.Async((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Monaco.loader(),function()
   {
    return Concurrency.Return(Doc.Element("div",[AttrProxy.OnAfterRenderImpl(function(elchild)
    {
     var editor,_elt;
     editor=(_elt=elchild.parentElement,self.monaco.editor.create(_elt,monc.options,monc.overrides));
     ResizeObserver.addResizeObserver(function()
     {
      editor.layout();
     },elchild.parentElement);
     elchild.parentNode.removeChild(elchild);
     monc.editorO={
      $:1,
      $0:editor
     };
     (Option.iter(function(onrender)
     {
      onrender(editor);
     }))(monc.onRender);
     GenEditor.bindVarEditor(function(a)
     {
      editor.onDidChangeModelContent(a);
     },function()
     {
      return editor.getValue();
     },function(a)
     {
      editor.setValue(a);
     },monc.onChange,monc["var"]);
    })],[]));
   });
  })));
 };
 Monaco.setVar=function(v,monc)
 {
  return MonacoConfig.New(v,monc.onChange,monc.onRender,monc.editorO,monc.disabled,monc.options,monc.overrides);
 };
 Monaco.onChange=function(f,monc)
 {
  return MonacoConfig.New(monc["var"],f,monc.onRender,monc.editorO,monc.disabled,monc.options,monc.overrides);
 };
 Monaco.onRender=function(f,monc)
 {
  return MonacoConfig.New(monc["var"],monc.onChange,{
   $:1,
   $0:f
  },monc.editorO,monc.disabled,monc.options,monc.overrides);
 };
 Monaco.disabled=function(dis,monc)
 {
  return MonacoConfig.New(monc["var"],monc.onChange,monc.onRender,monc.editorO,dis,monc.options,monc.overrides);
 };
 Monaco["var"]=function(monc)
 {
  return monc["var"];
 };
 Monaco.newText=function(v)
 {
  return Monaco.newVar(Var$1.Create$1(v));
 };
 Monaco.newVarO=function(v)
 {
  var x;
  x=Monaco.newVar(Var$1.Lens(v,function(o)
  {
   return o==null?"":o.$0;
  },function(sO,s)
  {
   return sO==null?null:{
    $:1,
    $0:s
   };
  }));
  return Monaco.disabled(View.Map(function($1)
  {
   return $1==null;
  },v.get_View()),x);
 };
 Position.New=function(column,lineNumber)
 {
  return{
   column:column,
   lineNumber:lineNumber
  };
 };
 Range.New=function(startColumn,endColumn,startLineNumber,endLineNumber)
 {
  return{
   startColumn:startColumn,
   endColumn:endColumn,
   startLineNumber:startLineNumber,
   endLineNumber:endLineNumber
  };
 };
 Location.New=function(range,uri)
 {
  return{
   range:range,
   uri:uri
  };
 };
 MarkDownString.New=function(value,isTrusted)
 {
  return{
   value:value,
   isTrusted:isTrusted
  };
 };
 MarkerData.New=function(startColumn,endColumn,startLineNumber,endLineNumber,severity,message)
 {
  return{
   startColumn:startColumn,
   endColumn:endColumn,
   startLineNumber:startLineNumber,
   endLineNumber:endLineNumber,
   severity:severity,
   message:message
  };
 };
 CompletionItem.New=function(kind,label,detail)
 {
  return{
   kind:kind,
   label:label,
   detail:detail
  };
 };
 Hover.New=function(contents,range)
 {
  return{
   contents:contents,
   range:range
  };
 };
 Editor=Monaco.Editor=Runtime$1.Class({},Obj,Editor);
 Editor.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },Editor);
 MonacoConfig.New=function(_var,onChange,onRender,editorO,disabled,options,overrides)
 {
  return{
   "var":_var,
   onChange:onChange,
   onRender:onRender,
   editorO:editorO,
   disabled:disabled,
   options:options,
   overrides:overrides
  };
 };
 MonacoGenAdapter.iterEditor=function(monRT,f)
 {
  var m;
  m=monRT.editorO;
  m!=null&&m.$==1?f(m.$0):void 0;
 };
 MonacoGenAdapter.mapEditor=function(monRT,f)
 {
  var m;
  m=monRT.editorO;
  return m!=null&&m.$==1?{
   $:1,
   $0:f(m.$0)
  }:null;
 };
 MonacoGenAdapter.bindEditor=function(monRT,f)
 {
  var m;
  m=monRT.editorO;
  return m!=null&&m.$==1?f(m.$0):null;
 };
 MonacoGenAdapter.posGen2Ed=function(p)
 {
  return Position.New(p.col,p.line);
 };
 MonacoGenAdapter.posEd2Gen=function(p)
 {
  return Position$1.New(p.lineNumber,p.column);
 };
 MonacoGenAdapter.indexFromPos=function(monRT,p)
 {
  var o;
  o=MonacoGenAdapter.mapEditor(monRT,function(ed)
  {
   return ed.getModel().getOffsetAt(MonacoGenAdapter.posGen2Ed(p));
  });
  return o==null?-1:o.$0;
 };
 MonacoGenAdapter.posFromIndex=function(monRT,i)
 {
  var o;
  o=MonacoGenAdapter.mapEditor(monRT,function(ed)
  {
   return MonacoGenAdapter.posEd2Gen(ed.getModel().getPositionAt(i));
  });
  return o==null?Position$1.New(1,1):o.$0;
 };
 MonacoGenAdapter.convertGlyphChar=function(a)
 {
  return a==="C"?6:a==="E"?12:a==="S"?11:a==="I"?7:a==="N"?8:a==="M"?1:a==="P"?9:a==="F"?4:a==="T"?6:a==="K"?13:0;
 };
 MonacoGenAdapter.generateDoc=function(monRT,genE,onRender)
 {
  var b;
  return Doc.Async((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Monaco.loader(),function()
   {
    return Concurrency.Return(Doc.Element("div",[AttrProxy.OnAfterRenderImpl(function(elchild)
    {
     var editor,_elt;
     editor=(_elt=elchild.parentElement,self.monaco.editor.create(_elt,monRT.options,monRT.overrides));
     ResizeObserver.addResizeObserver(function()
     {
      editor.layout();
     },elchild.parentElement);
     elchild.parentNode.removeChild(elchild);
     monRT.editorO={
      $:1,
      $0:editor
     };
     onRender(editor);
     editor.onDidChangeModelContent(monRT.onChange);
     (Option.iter(function(f)
     {
      var _p;
      _p=new HoverProvider.New(f(genE));
      self.monaco.languages.registerHoverProvider("fsharp",_p);
     }))(genE.toolTip);
     (Option.iter(function(f)
     {
      var _p;
      _p=new DefinitionProvider.New(f(genE));
      self.monaco.languages.registerDefinitionProvider("fsharp",_p);
     }))(genE.declaration);
     (Option.iter(function(f)
     {
      var _p;
      _p=new CompletionItemProvider.New(f(genE));
      self.monaco.languages.registerCompletionItemProvider("fsharp",_p);
     }))(genE.autoCompletion);
    })],[]));
   });
  })));
 };
 MonacoGenAdapter.getUri=function(monRT)
 {
  var o;
  o=MonacoGenAdapter.mapEditor(monRT,function(ed)
  {
   return Global.String(ed.getModel().uri);
  });
  return o==null?"":o.$0;
 };
 MonacoGenAdapter.setUri=function(monRT,uri)
 {
  MonacoGenAdapter.iterEditor(monRT,function(ed)
  {
   ed.getModel().uri=self.monaco.Uri.parse(uri);
  });
 };
 MonacoGenAdapter.getValue=function(monRT)
 {
  var o;
  o=MonacoGenAdapter.mapEditor(monRT,function(ed)
  {
   return ed.getValue();
  });
  return o==null?"":o.$0;
 };
 MonacoGenAdapter.setValue=function(monRT,txt)
 {
  MonacoGenAdapter.iterEditor(monRT,function(ed)
  {
   ed.setValue(txt);
  });
 };
 MonacoGenAdapter.getWordAt=function(monRT,pos)
 {
  return MonacoGenAdapter.bindEditor(monRT,function(ed)
  {
   var word;
   word=ed.getModel().getWordAtPosition(Position.New(pos.col,pos.line));
   return!word?null:{
    $:1,
    $0:[word.word,Position$1.New(pos.line,word.startColumn)]
   };
  });
 };
 MonacoGenAdapter.getSelect=function(monRT)
 {
  var o;
  o=MonacoGenAdapter.mapEditor(monRT,function(ed)
  {
   var x;
   x=ed.getSelection();
   return ed.getModel().getValueInRange(x);
  });
  return o==null?"":o.$0;
 };
 MonacoGenAdapter.showAnnotations=function(monRT,ans)
 {
  MonacoGenAdapter.iterEditor(monRT,function(ed)
  {
   var ms,_m;
   ms=Arrays.ofSeq(Seq$1.map(function(an)
   {
    var m;
    return MarkerData.New(an.startP.col,an.endP.col,an.startP.line,an.endP.line,(m=an.severity,m.$==0?8:m.$==1?4:m.$==3?1:2),an.message);
   },ans));
   _m=ed.getModel();
   self.monaco.editor.setModelMarkers(_m,"annotations",ms);
  });
 };
 MonacoGenAdapter.newHook=function(monRT)
 {
  function g(g$1,o)
  {
   return MonacoGenAdapter.generateDoc(monRT,g$1,o);
  }
  return GenEditorHook.New(function($1)
  {
   return function($2)
   {
    return g($1,$2);
   };
  },function()
  {
   return MonacoGenAdapter.getValue(monRT);
  },function(t)
  {
   MonacoGenAdapter.setValue(monRT,t);
  },Global.ignore,function(a)
  {
   MonacoGenAdapter.showAnnotations(monRT,a);
  },function(i)
  {
   return MonacoGenAdapter.posFromIndex(monRT,i);
  },function(p)
  {
   return MonacoGenAdapter.indexFromPos(monRT,p);
  },function(p)
  {
   return MonacoGenAdapter.getWordAt(monRT,p);
  },function()
  {
   return MonacoGenAdapter.getSelect(monRT);
  },function()
  {
   return MonacoGenAdapter.getUri(monRT);
  },function(u)
  {
   MonacoGenAdapter.setUri(monRT,u);
  },function(f)
  {
   monRT.onChange=f;
  });
 };
 MonacoGenAdapter.newRT=function(options,overrides)
 {
  return MonacoRT.New(null,Global.ignore,options,overrides);
 };
 MonacoGenAdapter.newVar=function(options,overrides,v)
 {
  return GenEditor.newVar(MonacoGenAdapter.newHook(MonacoGenAdapter.newRT(options,overrides)),v);
 };
 MonacoRT.New=function(editorO,onChange,options,overrides)
 {
  return{
   editorO:editorO,
   onChange:onChange,
   options:options,
   overrides:overrides
  };
 };
 CompletionItemProvider=MonacoGenAdapter.CompletionItemProvider=Runtime$1.Class({
  provideCompletionItems:function(model,pos,token,context)
  {
   var $this,b;
   $this=this;
   return PromiseM.ofAsyncResultM((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
   {
    return AsyncResultMAutoOpen["AsyncResultMBuilder.Bind"](b,$this.autoComplete(Position$1.New(pos.lineNumber,pos.column)),function(a)
    {
     return b.Return(Arrays.map(function(comp)
     {
      return CompletionItem.New(MonacoGenAdapter.convertGlyphChar(comp.kind),comp.label,comp.detail);
     },a));
    });
   }))));
  },
  resolveCompletionItem:function(item,token)
  {
   return CompletionItem.New(item.kind,item.label,"more details");
  }
 },Obj,CompletionItemProvider);
 CompletionItemProvider.New=Runtime$1.Ctor(function(autoComplete)
 {
  Obj.New.call(this);
  this.autoComplete=autoComplete;
 },CompletionItemProvider);
 HoverProvider=MonacoGenAdapter.HoverProvider=Runtime$1.Class({
  provideHover:function(model,pos,token)
  {
   var $this,b;
   $this=this;
   return PromiseM.ofAsyncResultM((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
   {
    return AsyncResultMAutoOpen["AsyncResultMBuilder.Bind"](b,$this.toolTip(Position$1.New(pos.lineNumber,pos.column)),function(a)
    {
     return a!=null&&a.$==1?b.Return(Hover.New([MarkDownString.New(a.$0,true)],null)):b.Return(null);
    });
   }))));
  }
 },Obj,HoverProvider);
 HoverProvider.New=Runtime$1.Ctor(function(toolTip)
 {
  Obj.New.call(this);
  this.toolTip=toolTip;
 },HoverProvider);
 DefinitionProvider=MonacoGenAdapter.DefinitionProvider=Runtime$1.Class({
  provideDefinition:function(model,pos,token)
  {
   var $this,b;
   $this=this;
   return PromiseM.ofAsyncResultM((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
   {
    return AsyncResultMAutoOpen["AsyncResultMBuilder.Bind"](b,$this.declaration(Position$1.New(pos.lineNumber,pos.column)),function(a)
    {
     var pos$1;
     return a!=null&&a.$==1?(pos$1=a.$0[0],b.Return(Location.New(Range.New(pos$1.col,pos$1.col,pos$1.line,pos$1.line),self.monaco.Uri.parse(a.$0[1])))):b.Return(null);
    });
   }))));
  }
 },Obj,DefinitionProvider);
 DefinitionProvider.New=Runtime$1.Ctor(function(declaration)
 {
  Obj.New.call(this);
  this.declaration=declaration;
 },DefinitionProvider);
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
  return PlugIn.New("",new ListModel$1.New$1(function(_var)
  {
   return _var.varName;
  }),new ListModel$1.New$1(function(viw)
  {
   return viw.viwName;
  }),new ListModel$1.New$1(function(doc)
  {
   return doc.docName;
  }),new ListModel$1.New$1(function(act)
  {
   return act.actName;
  }),new ListModel$1.New$1(function(qry)
  {
   return qry.qryName;
  }));
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
   return Seq$1.map(function(v)
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
   return Seq$1.map(function(v)
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
   return Seq$1.map(function(v)
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
   return Seq$1.map(function(v)
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
   return Seq$1.map(function(v)
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
    return $1("Doc with parameters not allowed here: "+GeneratedPrintf.p$1($2));
   };
  }(Global.id))(doc))]);
 };
 AppFramework.getMainClientDoc=function()
 {
  var x;
  return Doc.EmbedView((x=AppFramework.plugIns().v,View.Map2(function(mainDoc,plgs)
  {
   var x$1,v;
   x$1=Seq$1.tryPick(function(plg)
   {
    var o;
    o=Seq$1.tryFind(function(doc)
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
 AppFramework.plugin=function()
 {
  SC$1.$cctor();
  return SC$1.plugin;
 };
 AppFramework.tryGetPlugInW=function(plgName)
 {
  return AppFramework.plugIns().TryFindByKeyAsView(plgName);
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
 AppFramework.tryGetActW=function(plgName,actName)
 {
  return View.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgActions.TryFindByKeyAsView(actName):View.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.tryGetQryW=function(plgName,qryName)
 {
  return View.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgQueries.TryFindByKeyAsView(qryName):View.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.tryGetDocW=function(plgName,docName)
 {
  return View.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgDocs.TryFindByKeyAsView(docName):View.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
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
 AppFramework.tryGetPlugIn=function(plgName)
 {
  return AppFramework.plugIns().TryFindByKey(plgName);
 };
 AppFramework.tryGetVar=function(plgName,varName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgVars.TryFindByKey(varName);
 };
 AppFramework.tryGetViw=function(plgName,viwName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgViews.TryFindByKey(viwName);
 };
 AppFramework.tryGetAct=function(plgName,actName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgActions.TryFindByKey(actName);
 };
 AppFramework.tryGetQry=function(plgName,qryName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgQueries.TryFindByKey(qryName);
 };
 AppFramework.tryGetDoc=function(plgName,docName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgDocs.TryFindByKey(docName);
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
      }(Global.id))(a$2.$0.actName)
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
 AppFramework.getAttrs=function(lytNm,attrs)
 {
  return List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(Seq$1.choose(function(a)
   {
    var $1,value,value$1,name;
    function s(el,a$1)
    {
     var act;
     return a$1.$==1?(act=a$1.$0,el.addEventListener(Strings.Trim(name),function(ev)
     {
      return AppFramework.callFunction(el,ev,act.actFunction);
     },false)):el.setAttribute(Strings.Trim(name),Strings.Trim(a$1.$0));
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
   },Seq$1.map(function(s)
   {
    return String.splitByChar("=",s);
   },String.splitByChar(";",attrs))),Seq$1.delay(function()
   {
    return Seq$1.choose(function(a)
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
       }(Global.id))(a$1.$0.actName):Strings.Trim(a$1.$0);
      },AppFramework.getTextData(lytNm,Strings.Trim(value$1))),AttrModule.DynamicStyle(Strings.Trim(name),x))
     })):null;
    },Seq$1.map(function(s)
    {
     return String.splitByChar(":",s);
    },String.splitByChar(";",attrs)));
   }));
  }));
 };
 AppFramework.bindWrap=function(f,pv)
 {
  return P.New(Operators$2.op_GreaterGreaterEquals(pv,function(v)
  {
   return f(v).r;
  }));
 };
 AppFramework.unwrapBindWrap=function(f,pv)
 {
  return P.New(Operators$2.op_BarGreaterGreater(pv.r,f));
 };
 AppFramework.add1=function(a)
 {
  return a+1;
 };
 AppFramework.a11V=function()
 {
  SC$1.$cctor();
  return SC$1.a11V;
 };
 AppFramework.mainX=function()
 {
  SC$1.$cctor();
  return SC$1.mainX;
 };
 AppFramework.baseView=function()
 {
  SC$1.$cctor();
  return SC$1.baseView;
 };
 AppFramework.makeAViewDoc=function(f)
 {
  return Doc.BindView(function()
  {
   return f();
  },AppFramework.baseView());
 };
 AppFramework.makeAViewDocL=function(f)
 {
  return Lazy.Create(function()
  {
   return AppFramework.makeAViewDoc(f);
  });
 };
 AppFramework.choiceToString=function(a)
 {
  return a.$==1?(function($1)
  {
   return function($2)
   {
    return $1("@{expecting string, got Action: "+Utils.prettyPrint($2)+"}");
   };
  }(Global.id))(a.$0):a.$0;
 };
 AppFramework.valToStyle=function(atn,a)
 {
  return a.$==0?AttrModule.DynamicStyle(atn,View.Map(AppFramework.choiceToString,a.$0)):a.$0.$==0?AttrModule.Style(atn,a.$0.$0):(function($1)
  {
   return function($2)
   {
    return $1("Illegal reference "+testing_GeneratedPrintf.p$6($2));
   };
  }(Operators$5.FailWith))(a);
 };
 AppFramework.valToAttr=function(atn,a)
 {
  function s(el,a$1)
  {
   var act;
   return a$1.$==1?(act=a$1.$0,el.addEventListener(atn,function(ev)
   {
    return AppFramework.callFunction(el,ev,act.actFunction);
   },false)):el.setAttribute(atn,Strings.Trim(a$1.$0));
  }
  return a.$==0?AttrModule.DynamicCustom(function($1)
  {
   return function($2)
   {
    return s($1,$2);
   };
  },a.$0):a.$0.$==0?AttrProxy.Create(atn,a.$0.$0):(function($1)
  {
   return function($2)
   {
    return $1("Illegal value "+testing_GeneratedPrintf.p$3($2));
   };
  }(Operators$5.FailWith))(a);
 };
 AppFramework.currentPlugInNameDef=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInNameDef;
 };
 AppFramework.currentPlugInNameD=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInNameD;
 };
 AppFramework.getDocD=function()
 {
  SC$1.$cctor();
  return SC$1.getDocD;
 };
 AppFramework.getTextActViewD=function()
 {
  SC$1.$cctor();
  return SC$1.getTextActViewD;
 };
 AppFramework.errDoc=function(txt)
 {
  return Doc.Element("div",[],[Doc.TextNode(txt)]);
 };
 AppFramework.errDocf=function(fmt)
 {
  return fmt(AppFramework.errDoc);
 };
 AppFramework.run=function(pin,d)
 {
  var x,b;
  x=(b=Operators$2.depend(),b.Delay(function()
  {
   return b.Bind(AppFramework.getDocD(),function(a)
   {
    return b.Bind(AppFramework.getTextActViewD(),function(a$1)
    {
     return b.Return(Depend.resolver(List.ofArray([["getDocFromReference",a],["getTextActViewFromReference",a$1],["currentPlugInName",pin]]),d));
    });
   });
  }));
  return Depend.resolver(List.ofArray([["currentPlugInName",pin]]),x);
 };
 AppFramework.extractTextD=function()
 {
  SC$1.$cctor();
  return SC$1.extractTextD$1;
 };
 AppFramework.extractDocD=function()
 {
  SC$1.$cctor();
  return SC$1.extractDocD$1;
 };
 AppFramework.extractAtsD=function()
 {
  SC$1.$cctor();
  return SC$1.extractAtsD$1;
 };
 AppFramework.extractAttD=function()
 {
  SC$1.$cctor();
  return SC$1.extractAttD;
 };
 AppFramework.runDef=function()
 {
  SC$1.$cctor();
  return SC$1.runDef;
 };
 AppFramework.getParmRef=function(_var)
 {
  var x,o,o$1,$1,b;
  x=(o=(o$1=String.delimitedO("@{","}",_var),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,($1[0],b=$1[1],$1[2],b))
  }),o==null?_var:o.$0);
  return(AppFramework.splitName(""))(x);
 };
 AppFramework.inputFile=function(attrs,labelName,actName)
 {
  var o,o$1,t,act;
  o=(o$1=(t=(AppFramework.splitName("AppFramework"))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:(act=o$1.$0,Doc.Element("div",AppFramework.getAttrs("AppFramework",attrs),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-btn")],[Doc.Element("label",[AttrProxy.Create("class","btn")],[Doc.TextNode(labelName),Doc.Element("input",[AttrProxy.Create("class","form-control"),AttrProxy.Create("type","file"),AttrModule.Style("display","none"),AttrProxy.HandlerImpl("click",function(el)
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
 AppFramework.inputLabel=function(attrs,labelName,varName)
 {
  var x,b;
  x=(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(AppFramework.extractAtsD(),function(a)
   {
    return b.Bind(AppFramework.extractDocD(),function(a$1)
    {
     return b.Bind(AppFramework.currentPlugInNameD(),function()
     {
      var f,g,t;
      function m(_var)
      {
       return Doc.Element("div",a(attrs),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[a$1(labelName)]),Doc.Input([AttrProxy.Create("class","form-control")],_var.varVar)])]);
      }
      function d()
      {
       return AppFramework.errDoc((function($1)
       {
        return function($2)
        {
         return $1("Var not found "+Utils.toSafe($2));
        };
       }(Global.id))(varName));
      }
      return b.Return(Doc.BindView((f=function(o)
      {
       return o==null?null:{
        $:1,
        $0:m(o.$0)
       };
      },(g=function(o)
      {
       return o==null?d():o.$0;
      },function(x$1)
      {
       return g(f(x$1));
      })),(t=AppFramework.getParmRef(varName),AppFramework.tryGetVarW(t[0],t[1]))));
     });
    });
   });
  }));
  return(AppFramework.runDef())(x);
 };
 AppFramework.none=function(x)
 {
  return Doc.Element("span",[],[]);
 };
 AppFramework.htmlDoc=function(lytNm,html)
 {
  return Doc.BindView(function(a)
  {
   return a.$==1?AppFramework.errDoc((function($1)
   {
    return function($2)
    {
     return $1("HtmlDoc: unexpected action "+GeneratedPrintf.p($2));
    };
   }(Global.id))(a.$0)):Doc.Verbatim(a.$0);
  },AppFramework.getTextData(lytNm,html));
 };
 AppFramework.setVar=function(varN,value)
 {
  var x,t;
  x=(t=(AppFramework.splitName("AppFramework"))(varN),AppFramework.tryGetVar(t[0],t[1]));
  (Option.iter(function(v)
  {
   v.varVar.Set(value);
  }))(x);
 };
 AppFramework.trigAct=function(trigger,actN)
 {
  var v,t,prior;
  return Doc.TextView(View.Map(function(a)
  {
   var a$1,t$1;
   return a==null?"":(a$1=(t$1=AppFramework.getParmRef(actN),AppFramework.tryGetAct(t$1[0],t$1[1])),a$1==null?void 0:AppFramework.callFunction(null,null,a$1.$0.actFunction),"");
  },(v=(t=AppFramework.getParmRef(trigger),AppFramework.tryGetWoWW(t[0],t[1])),(prior=[Var$1.Create$1(null)],(View.Sink(function(v$1)
  {
   if(!Unchecked.Equals(prior[0].Get(),v$1))
    prior[0].Set(v$1);
  },v),prior[0].get_View())))));
 };
 AppFramework.select=function(attrs,none,vals,_var)
 {
  var x,b;
  x=(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(AppFramework.extractAtsD(),function(a)
   {
    return b.Bind(AppFramework.extractTextD(),function(a$1)
    {
     var f,g,t;
     function m(v)
     {
      var valsW,varO;
      valsW=View.Map(function($1)
      {
       return List.ofSeq(Strings.SplitChars($1,[";"],0));
      },a$1(vals));
      varO=new FromView.New(View.Map2(function($1,$2)
      {
       return Seq$1.contains(Strings.Trim($1),$2)?{
        $:1,
        $0:Strings.Trim($1)
       }:null;
      },v.varVar.get_View(),valsW),function(a$2)
      {
       var s;
       if(a$2!=null&&a$2.$==1)
        {
         s=a$2.$0;
         View.Get(function(vs)
         {
          if(Seq$1.contains(s,vs))
           v.varVar.Set(s);
         },valsW);
        }
       else
        v.varVar.Set("");
      });
      return Doc.SelectDynOptional(a(attrs),none,Global.id,valsW,varO);
     }
     function d()
     {
      return(AppFramework.errDocf(function($1)
      {
       return function($2)
       {
        return $1("Var not found "+Utils.toSafe($2));
       };
      }))(_var);
     }
     return b.Return(Doc.BindView((f=function(o)
     {
      return o==null?null:{
       $:1,
       $0:m(o.$0)
      };
     },(g=function(o)
     {
      return o==null?d():o.$0;
     },function(x$1)
     {
      return g(f(x$1));
     })),(t=AppFramework.getParmRef(_var),AppFramework.tryGetVarW(t[0],t[1]))));
    });
   });
  }));
  return(AppFramework.runDef())(x);
 };
 AppFramework.getMainDoc=function()
 {
  SC$1.$cctor();
  return SC$1.getMainDoc;
 };
 AppFramework.addPlugIn=function(p)
 {
  AppFramework.plugIns().Append(p);
 };
 AppFramework.op_Dereference=function(v)
 {
  return P.New((Operators$2.rtn())({
   $:1,
   $0:v
  }));
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
 PlugInBuilder=AppFramework.PlugInBuilder=Runtime$1.Class({
  Zero:function()
  {
   var i;
   i=AppFramework.defaultPlugIn();
   return PlugIn.New("Main",i.plgVars,i.plgViews,i.plgDocs,i.plgActions,i.plgQueries);
  },
  Yield:function()
  {
   return this.Zero();
  },
  For:function(coll,func)
  {
   var ie;
   ie=Enumerator.Get(coll);
   while(ie.MoveNext())
    func(ie.Current());
  },
  Name:function(plg,name)
  {
   return PlugIn.New(name,plg.plgVars,plg.plgViews,plg.plgDocs,plg.plgActions,plg.plgQueries);
  },
  AddVar:function(plg,name,_var)
  {
   plg.plgVars.Append(AppFramework.newVar(name,_var));
   return plg;
  },
  AddDoc:function(plg,name,doc)
  {
   plg.plgDocs.Append(AppFramework.newDoc(name,doc));
   return plg;
  },
  AddDoc2:function(plg,name,doc,p1,p2)
  {
   plg.plgDocs.Append(AppFramework.newDocF(name,{
    $:2,
    $0:doc,
    $1:p1,
    $2:p2
   }));
   return plg;
  },
  AddDoc3:function(plg,name,doc,a,b,c)
  {
   plg.plgDocs.Append(AppFramework.newDocF(name,{
    $:3,
    $0:doc,
    $1:a,
    $2:b,
    $3:c
   }));
   return plg;
  },
  AddDoc4:function(plg,name,doc,a,b,c,d)
  {
   plg.plgDocs.Append(AppFramework.newDocF(name,{
    $:4,
    $0:doc,
    $1:a,
    $2:b,
    $3:c,
    $4:d
   }));
   return plg;
  },
  AddDoc5:function(plg,name,doc,a,b,c,d,e)
  {
   plg.plgDocs.Append(AppFramework.newDocF(name,{
    $:5,
    $0:doc,
    $1:a,
    $2:b,
    $3:c,
    $4:d,
    $5:e
   }));
   return plg;
  },
  AddQry:function(plg,name,qry)
  {
   plg.plgQueries.Append(AppFramework.newQry(name,qry));
   return plg;
  },
  AddAct:function(plg,name,act)
  {
   plg.plgActions.Append(AppFramework.newAct(name,act));
   return plg;
  },
  AddAct1:function(plg,name,act,p1)
  {
   plg.plgActions.Append(AppFramework.newActF(name,{
    $:1,
    $0:act,
    $1:p1
   }));
   return plg;
  },
  AddAct2:function(plg,name,act,p1,p2)
  {
   plg.plgActions.Append(AppFramework.newActF(name,{
    $:2,
    $0:act,
    $1:p1,
    $2:p2
   }));
   return plg;
  },
  AddActO:function(plg,name,actO)
  {
   actO==null?void 0:plg.plgActions.Append(AppFramework.newAct(name,actO.$0));
   return plg;
  },
  AddViw:function(plg,name,viw)
  {
   plg.plgViews.Append(AppFramework.newViw(name,viw));
   return plg;
  },
  Merge:function(plg,prefix,p2)
  {
   plg.plgVars.AppendMany(Seq$1.map(function(v)
   {
    return PlugInVar.New(prefix+v.varName,v.varVar);
   },p2.plgVars));
   plg.plgViews.AppendMany(Seq$1.map(function(w)
   {
    return PlugInView.New(prefix+w.viwName,w.viwView);
   },p2.plgViews));
   plg.plgDocs.AppendMany(Seq$1.map(function(d)
   {
    return PlugInDoc.New(prefix+d.docName,d.docDoc);
   },p2.plgDocs));
   plg.plgActions.AppendMany(Seq$1.map(function(a)
   {
    return PlugInAction.New(prefix+a.actName,a.actFunction,a.actEnabled);
   },p2.plgActions));
   plg.plgQueries.AppendMany(Seq$1.map(function(q)
   {
    return PlugInQuery.New(prefix+q.qryName,q.qryFunction);
   },p2.plgQueries));
   return plg;
  }
 },Obj,PlugInBuilder);
 PlugInBuilder.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },PlugInBuilder);
 Fun.New=function(f,p)
 {
  return{
   f:f,
   p:p
  };
 };
 P.New=function(r)
 {
  return{
   r:r
  };
 };
 Val.map=function(f,a)
 {
  return a.$==0?{
   $:0,
   $0:View.Map(f,a.$0)
  }:{
   $:1,
   $0:f(a.$0)
  };
 };
 Val.toView=function(a)
 {
  return a.$==0?a.$0:View.Const(a.$0);
 };
 Val.addDoc=function(d,docs)
 {
  return docs.$==0?{
   $:1,
   $0:[Doc.BindView(Doc.Concat,docs.$0),d]
  }:{
   $:1,
   $0:Seq$1.append(docs.$0,[d])
  };
 };
 Val.addAtt=function(a,atts)
 {
  return atts.$==0?function($1)
  {
   return $1("addAtt for VView not implemented");
  }(Operators$5.FailWith):{
   $:1,
   $0:Seq$1.append(atts.$0,[a])
  };
 };
 Val.textDoc=function(a)
 {
  return a.$==0?Doc.TextView(a.$0):Doc.TextNode(a.$0);
 };
 Val.textAtt=function()
 {
  SC$1.$cctor();
  return SC$1.textAtt;
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
 Extract0.getDocFromReferenceD=function()
 {
  SC$1.$cctor();
  return SC$1.getDocFromReferenceD;
 };
 Extract0.getTextActViewFromReferenceD=function()
 {
  SC$1.$cctor();
  return SC$1.getTextActViewFromReferenceD;
 };
 Extract0.getDocFromTextTypesD=function()
 {
  SC$1.$cctor();
  return SC$1.getDocFromTextTypesD;
 };
 Extract0.extractDocD=function()
 {
  SC$1.$cctor();
  return SC$1.extractDocD;
 };
 Extract0.getTextValFromSeqD=function()
 {
  SC$1.$cctor();
  return SC$1.getTextValFromSeqD;
 };
 Extract0.getTextValFromTextTypesD=function()
 {
  SC$1.$cctor();
  return SC$1.getTextValFromTextTypesD;
 };
 Extract0.getTextValD=function()
 {
  SC$1.$cctor();
  return SC$1.getTextValD;
 };
 Extract0.extractAtsD=function()
 {
  SC$1.$cctor();
  return SC$1.extractAtsD;
 };
 Extract0.extractTextD=function()
 {
  SC$1.$cctor();
  return SC$1.extractTextD;
 };
 LayoutEngine.New=function(lytName,lytDefinition)
 {
  return{
   lytName:lytName,
   lytDefinition:lytDefinition
  };
 };
 LayoutEngineModule.S=function(a)
 {
  return a.$==1?a.$0:a.$0;
 };
 LayoutEngineModule.Identifier=function(a)
 {
  var $1,a$1,t;
  return a.$==1&&(a$1=LibraryJS.REGEX$1("^[$a-zA-Z_][0-9a-zA-Z_\\.\\-$]*$","",a.$0),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($1=Arrays.get(a$1.$0,0),true)))?{
   $:1,
   $0:$1
  }:null;
 };
 LayoutEngineModule.I=function(a)
 {
  var a$1;
  a$1=LayoutEngineModule.Identifier(a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:a$1.$0
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
 LayoutEngineModule.PlugIn=function(a)
 {
  var $1,$2,$3,$4,$5;
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
  }:{
   $:5,
   $0:null
  };
 };
 LayoutEngineModule.Var=function(a)
 {
  var $1,$2,$3,$4,$5;
  return a.$==1&&(a.$0==="Var"&&($1=a.$0,true))?{
   $:0,
   $0:null
  }:a.$==1&&(a.$0==="Doc"&&($2=a.$0,true))?{
   $:1,
   $0:null
  }:a.$==1&&(a.$0==="View"&&($3=a.$0,true))?{
   $:2,
   $0:null
  }:a.$==1&&(a.$0==="Concat"&&($4=a.$0,true))?{
   $:3,
   $0:null
  }:a.$==1&&(a.$0==="Action"&&($5=a.$0,true))?{
   $:4,
   $0:null
  }:{
   $:5,
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
  return Doc.Element("wcomp-splitter",List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(vertical?[AttrProxy.Create("vertical","")]:[],Seq$1.delay(function()
   {
    return Seq$1.append([AttrProxy.Create("min",Global.String(min))],Seq$1.delay(function()
    {
     return Seq$1.append([AttrProxy.Create("value",Global.String(value))],Seq$1.delay(function()
     {
      return[AttrProxy.Create("max",Global.String(max))];
     }));
    }));
   }));
  })),List.ofArray([doc1,doc2]));
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
      throw new MatchFailureException.New("D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src\\testing.fs",3773,38);
    }
    return $2;
  }
 };
 LayoutEngineModule.splitTokens=function(line)
 {
  return LayoutEngineModule.doubleQuote(List.ofSeq(Seq$1.collect(Global.id,Seq$1.mapi(function(i,s)
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
  },String.splitByChar("\"",line)))));
 };
 LayoutEngineModule.splitName=function()
 {
  SC$1.$cctor();
  return SC$1.splitName;
 };
 LayoutEngineModule.getOneTextData=function(lytNm,name,bef,aft)
 {
  var p,plg,n;
  p=((LayoutEngineModule.splitName())(lytNm))(name);
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
      }(Global.id))(a$2.$0.actName)
     }):View.Const({
      $:0,
      $0:bef+txt+a$2.$0
     });
    },LayoutEngineModule.getTextData(lytNm,aft)));
   },AppFramework.tryGetWoWW(plg,n)):View.Const({
    $:1,
    $0:a.$0
   });
  },AppFramework.tryGetActW(plg,n));
 };
 LayoutEngineModule.getTextData=function(lytNm,txt)
 {
  var o,o$1,$1,bef;
  o=(o$1=String.delimitedO("@{","}",txt),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,(bef=$1[0],LayoutEngineModule.getOneTextData(lytNm,$1[1],bef,$1[2])))
  });
  return o==null?View.Const({
   $:0,
   $0:txt
  }):o.$0;
 };
 LayoutEngineModule.getTextToken=function(lytNm,token)
 {
  return token.$==0?LayoutEngineModule.getTextData(lytNm,token.$0):LayoutEngineModule.getOneTextData(lytNm,token.$0,"","");
 };
 LayoutEngineModule.getAttrs=function(lytNm,a)
 {
  var attrs;
  attrs=LayoutEngineModule.S(a);
  return List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(Seq$1.choose(function(a$1)
   {
    var $1,value,value$1,name;
    function s(el,a$2)
    {
     var act;
     return a$2.$==1?(act=a$2.$0,el.addEventListener(Strings.Trim(name),function(ev)
     {
      return AppFramework.callFunction(el,ev,act.actFunction);
     },false)):el.setAttribute(Strings.Trim(name),Strings.Trim(a$2.$0));
    }
    return!Unchecked.Equals(a$1,null)&&a$1.length===2&&(value=Arrays.get(a$1,1),Strings.Trim(Arrays.get(a$1,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a$1,1),(name=Arrays.get(a$1,0),{
     $:1,
     $0:AttrModule.DynamicCustom(function($2)
     {
      return function($3)
      {
       return s($2,$3);
      };
     },LayoutEngineModule.getTextData(lytNm,Strings.Trim(value$1)))
    })):null;
   },Seq$1.map(function(s)
   {
    return String.splitByChar("=",s);
   },String.splitByChar(";",attrs))),Seq$1.delay(function()
   {
    return Seq$1.choose(function(a$1)
    {
     var $1,value,value$1,name,x;
     return!Unchecked.Equals(a$1,null)&&a$1.length===2&&(value=Arrays.get(a$1,1),Strings.Trim(Arrays.get(a$1,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a$1,1),(name=Arrays.get(a$1,0),{
      $:1,
      $0:(x=View.Map(function(a$2)
      {
       return a$2.$==1?(function($2)
       {
        return function($3)
        {
         return $2("@{"+Utils.toSafe($3)+"}");
        };
       }(Global.id))(a$2.$0.actName):Strings.Trim(a$2.$0);
      },LayoutEngineModule.getTextData(lytNm,Strings.Trim(value$1))),AttrModule.DynamicStyle(Strings.Trim(name),x))
     })):null;
    },Seq$1.map(function(s)
    {
     return String.splitByChar(":",s);
    },String.splitByChar(";",attrs)));
   }));
  }));
 };
 LayoutEngineModule.getDocF=function(parms,doc)
 {
  var $1,$2,a,a$1,a$2,a$3,a$4,a$5,a$6,a$7,a$8,a$9;
  $2=doc.docDoc;
  switch($2.$==1?parms.$==1?($1=[$2.$0,LayoutEngineModule.S(parms.$0),parms.$1],1):6:$2.$==2?parms.$==1?(a=LayoutEngineModule.S(parms.$0),parms.$1.$==1?($1=[$2.$0,a,LayoutEngineModule.S(parms.$1.$0),parms.$1.$1],2):6):6:$2.$==3?parms.$==1?(a$1=LayoutEngineModule.S(parms.$0),parms.$1.$==1?(a$2=LayoutEngineModule.S(parms.$1.$0),parms.$1.$1.$==1?($1=[$2.$0,a$1,a$2,LayoutEngineModule.S(parms.$1.$1.$0),parms.$1.$1.$1],3):6):6):6:$2.$==4?parms.$==1?(a$3=LayoutEngineModule.S(parms.$0),parms.$1.$==1?(a$4=LayoutEngineModule.S(parms.$1.$0),parms.$1.$1.$==1?(a$5=LayoutEngineModule.S(parms.$1.$1.$0),parms.$1.$1.$1.$==1?($1=[$2.$0,a$3,a$4,a$5,LayoutEngineModule.S(parms.$1.$1.$1.$0),parms.$1.$1.$1.$1],4):6):6):6):6:$2.$==5?parms.$==1?(a$6=LayoutEngineModule.S(parms.$0),parms.$1.$==1?(a$7=LayoutEngineModule.S(parms.$1.$0),parms.$1.$1.$==1?(a$8=LayoutEngineModule.S(parms.$1.$1.$0),parms.$1.$1.$1.$==1?(a$9=LayoutEngineModule.S(parms.$1.$1.$1.$0),parms.$1.$1.$1.$1.$==1?($1=[$2.$0,a$6,a$7,a$8,a$9,LayoutEngineModule.S(parms.$1.$1.$1.$1.$0),parms.$1.$1.$1.$1.$1],5):6):6):6):6):6:($1=[$2.$0,parms],0))
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
     return $3("Parameters do not coincide with definition "+GeneratedPrintf.p$1($4)+" - "+Utils.printList(function($6)
     {
      return testing_GeneratedPrintf.p$10($6);
     },$5));
    }))(Global.id))(doc))(parms))]),T.Empty];
  }
 };
 LayoutEngineModule.getDocFinal=function(parms,doc)
 {
  var m;
  m=LayoutEngineModule.getDocF(parms,doc);
  return m[1].$==0?m[0]:AppFramework.errDoc((((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1("Too many parameters "+GeneratedPrintf.p$1($2)+" "+Utils.printList(function($4)
   {
    return testing_GeneratedPrintf.p$10($4);
   },$3));
  }))(Global.id))(doc))(parms));
 };
 LayoutEngineModule.set_currentViewTriggger=function($1)
 {
  SC$1.$cctor();
  SC$1.currentViewTriggger=$1;
 };
 LayoutEngineModule.currentViewTriggger=function()
 {
  SC$1.$cctor();
  return SC$1.currentViewTriggger;
 };
 LayoutEngineModule.turnToView=function(f)
 {
  return Doc.EmbedView(View.Map(f,LayoutEngineModule.currentViewTriggger()));
 };
 LayoutEngineModule.getADoc=function(lytNm,token)
 {
  var a,di,p,plg,nm;
  a=LayoutEngineModule.Identifier(token);
  return a!=null&&a.$==1?(di=a.$0,(p=((LayoutEngineModule.splitName())(lytNm))(di),(plg=p[0],(nm=p[1],Doc.BindView(function(a$1)
  {
   return a$1==null?Doc.BindView(function(a$2)
   {
    var v;
    return a$2==null?AppFramework.errDoc((v=(function($1)
    {
     return function($2)
     {
      return $1("Missing doc: "+Utils.toSafe($2));
     };
    }(Global.id))(di),(Library.print(v),v))):Doc.TextNode(a$2.$0);
   },AppFramework.tryGetWoWW(plg,nm)):(LayoutEngineModule.getDocF(T.Empty,a$1.$0))[0];
  },AppFramework.tryGetDocW(plg,nm)))))):Doc.TextView(View.Map(function(a$1)
  {
   return a$1.$==1?(function($1)
   {
    return function($2)
    {
     return $1("Unexpected action: "+Utils.toSafe($2));
    };
   }(Global.id))(a$1.$0.actName):a$1.$0;
  },LayoutEngineModule.getTextData(lytNm,LayoutEngineModule.S(token))));
 };
 LayoutEngineModule.getAllDocs=function(lytNm,tokens)
 {
  return tokens.$==1?new T({
   $:1,
   $0:LayoutEngineModule.getADoc(lytNm,tokens.$0),
   $1:LayoutEngineModule.getAllDocs(lytNm,tokens.$1)
  }):T.Empty;
 };
 LayoutEngineModule.getOneDoc=function(lytNm,docs)
 {
  var $1,a,id,parms,p,plg,nm,o,o$1,o$2,o$3,v;
  return docs.$==1&&(a=LayoutEngineModule.Identifier(docs.$0),a!=null&&a.$==1&&($1=[a.$0,docs.$1],true))?(id=$1[0],(parms=$1[1],(p=((LayoutEngineModule.splitName())(lytNm))(id),(plg=p[0],(nm=p[1],(o=(o$1=AppFramework.tryGetDoc(plg,nm),o$1==null?null:{
   $:1,
   $0:LayoutEngineModule.getDocF(parms,o$1.$0)
  }),o==null?(o$2=(o$3=AppFramework.tryGetWoW(plg,nm),o$3==null?null:{
   $:1,
   $0:[Doc.TextView(o$3.$0),parms]
  }),o$2==null?[AppFramework.errDoc((v=(function($2)
  {
   return function($3)
   {
    return $2("Missing doc: "+Utils.toSafe($3));
   };
  }(Global.id))(id),(Library.print(v),v))),parms]:o$2.$0):o.$0)))))):docs.$==0?[Doc.get_Empty(),T.Empty]:[Doc.TextView(View.Map(function(a$1)
  {
   return a$1.$==1?(function($2)
   {
    return function($3)
    {
     return $2("Unexpected action: "+Utils.toSafe($3));
    };
   }(Global.id))(a$1.$0.actName):a$1.$0;
  },LayoutEngineModule.getTextData(lytNm,LayoutEngineModule.S(docs.$0)))),docs.$1];
 };
 LayoutEngineModule.getDocs_=function(lytNm,docs)
 {
  var m;
  return docs.$==0?T.Empty:(m=LayoutEngineModule.getOneDoc(lytNm,docs),new T({
   $:1,
   $0:m[0],
   $1:LayoutEngineModule.getDocs_(lytNm,m[1])
  }));
 };
 LayoutEngineModule.pairOfDocs=function(lytNm,docs)
 {
  var dsW;
  dsW=View.Map(function(a)
  {
   var $1;
   return a.$==1&&(a.$1.$==1&&(a.$1.$1.$==0&&($1=[a.$0,a.$1.$0],true)))?[$1[0],$1[1]]:[AppFramework.errDoc((function($2)
   {
    return function($3)
    {
     return $2("splitter expects exactly 2 elements "+Utils.printList(function($4)
     {
      return testing_GeneratedPrintf.p$10($4);
     },$3));
    };
   }(Global.id))(docs)),AppFramework.errDoc("part 2")];
  },View.Map(function()
  {
   return LayoutEngineModule.getAllDocs(lytNm,docs);
  },LayoutEngineModule.currentViewTriggger()));
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
   return a.$==1&&(a.$1.$==0&&($1=a.$0,true))?$1:AppFramework.errDoc((function($2)
   {
    return function($3)
    {
     return $2("expected exactly 1 element "+Utils.printList(function($4)
     {
      return testing_GeneratedPrintf.p$10($4);
     },$3));
    };
   }(Global.id))(docs));
  },View.Map(function()
  {
   return LayoutEngineModule.getAllDocs(lytNm,docs);
  },LayoutEngineModule.currentViewTriggger())));
 };
 LayoutEngineModule.createSplitter=function(lytNm,name,vertical,measures,docs)
 {
  var p;
  p=LayoutEngineModule.pairOfDocs(lytNm,docs);
  return measures.$==1?LayoutEngineModule.variableSplitter(vertical,measures.$0,measures.$1,measures.$2,p[0],p[1]):LayoutEngineModule.fixedSplitter(vertical,measures.$0,measures.$1,p[0],p[1]);
 };
 LayoutEngineModule.createElement=function(lytNm,name,element,attrs,docs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var x;
   x=[Doc.Concat(LayoutEngineModule.getAllDocs(lytNm,docs))];
   return Doc.Element(element,LayoutEngineModule.getAttrs(lytNm,attrs),x);
  });
 };
 LayoutEngineModule.createButton=function(lytNm,name,actName,attrs,a)
 {
  var text;
  text=LayoutEngineModule.S(a);
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
   return Doc.Button(text,LayoutEngineModule.getAttrs(lytNm,attrs),x);
  });
 };
 LayoutEngineModule.createInput=function(lytNm,name,varName,attrs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var t;
   return Doc.BindView(function(a)
   {
    return a==null?AppFramework.errDoc((function($1)
    {
     return function($2)
     {
      return $1("Missing var: "+Utils.toSafe($2));
     };
    }(Global.id))(varName)):Doc.Input(LayoutEngineModule.getAttrs(lytNm,attrs),a.$0);
   },(t=((LayoutEngineModule.splitName())(lytNm))(varName),AppFramework.tryGetVoVW(t[0],t[1])));
  });
 };
 LayoutEngineModule.createTextArea=function(lytNm,name,varName,attrs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var t;
   return Doc.BindView(function(a)
   {
    return a==null?AppFramework.errDoc((function($1)
    {
     return function($2)
     {
      return $1("Missing var: "+Utils.toSafe($2));
     };
    }(Global.id))(varName)):Doc.InputArea(LayoutEngineModule.getAttrs(lytNm,attrs),a.$0);
   },(t=((LayoutEngineModule.splitName())(lytNm))(varName),AppFramework.tryGetVoVW(t[0],t[1])));
  });
 };
 LayoutEngineModule.createDoc=function(lytNm,name,docName,parms)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var o,o$1,t;
   o=(o$1=(t=((LayoutEngineModule.splitName())(lytNm))(docName),AppFramework.tryGetDoc(t[0],t[1])),o$1==null?null:{
    $:1,
    $0:LayoutEngineModule.getDocFinal(parms,o$1.$0)
   });
   return o==null?AppFramework.errDoc((function($1)
   {
    return function($2)
    {
     return $1("Missing doc: "+Utils.toSafe($2));
    };
   }(Global.id))(docName)):o.$0;
  });
 };
 LayoutEngineModule.createTemplate=function(lytNm,name,tempName,attrs,holes)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var $1,o,attrs$1,x,x$1,s;
   attrs$1=LayoutEngineModule.getAttrs(lytNm,attrs);
   Templates.LoadLocalTemplates("local");
   function m($2,$3)
   {
    var a,a$1,id,o$1,o$2,o$3,t,o$4,t$1,a$2,txt;
    a=LayoutEngineModule.S($2);
    a$1=LayoutEngineModule.Identifier($3);
    return a$1!=null&&a$1.$==1?(id=a$1.$0,o$1=(o$2=(o$3=(t=((LayoutEngineModule.splitName())(lytNm))(id),AppFramework.tryGetDoc(t[0],t[1])),o$3==null?null:{
     $:1,
     $0:{
      $:0,
      $0:a.toLowerCase(),
      $1:(LayoutEngineModule.getDocF(T.Empty,o$3.$0))[0]
     }
    }),o$2==null?(o$4=(t$1=((LayoutEngineModule.splitName())(lytNm))(id),AppFramework.tryGetVar(t$1[0],t$1[1])),o$4==null?null:{
     $:1,
     $0:{
      $:8,
      $0:a.toLowerCase(),
      $1:o$4.$0.varVar
     }
    }):o$2),o$1==null?{
     $:0,
     $0:a.toLowerCase(),
     $1:AppFramework.errDoc((function($4)
     {
      return function($5)
      {
       return $4("Missing element: "+Utils.toSafe($5));
      };
     }(Global.id))(id))
    }:o$1.$0):(a$2=LayoutEngineModule.S($2),txt=LayoutEngineModule.S($3),{
     $:0,
     $0:a$2.toLowerCase(),
     $1:AppFramework.errDoc((function($4)
     {
      return function($5)
      {
       return $4("Not implemented: "+Utils.toSafe($5));
      };
     }(Global.id))(txt))
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
     $0:(x=(x$1=Seq$1.map(function($2)
     {
      return m($2[0],$2[1]);
     },Seq$1.map(function(t)
     {
      return t[1];
     },Seq$1.filter(function($2)
     {
      return p($2[0],$2[1]);
     },Seq$1.indexed(Seq$1.pairwise(holes))))),(Seq$1.isEmpty(attrs$1)?Global.id:(s=[{
      $:3,
      $0:"attrs",
      $1:AttrProxy.Concat(attrs$1)
     }],function(s$1)
     {
      return Seq$1.append(s,s$1);
     }))(x$1)),Templates.NamedTemplate("local",{
      $:1,
      $0:tempName.toLowerCase()
     },x))
    };
   }
   catch(m$1)
   {
    o=null;
   }
   return o==null?AppFramework.errDoc((function($2)
   {
    return function($3)
    {
     return $2("Missing template: "+Utils.toSafe($3));
    };
   }(Global.id))(tempName)):o.$0;
  });
 };
 LayoutEngineModule.getParamText=function(lytNm,token,f)
 {
  View.Get(function(a)
  {
   if(a.$==1)
    f(a.$0);
   else
    f(a.$0);
  },LayoutEngineModule.getTextToken(lytNm,token));
 };
 LayoutEngineModule.createAction=function(lytNm,name,actName,parms)
 {
  var o,t,$1,$2,o$1,act,$3,f,t1,f$1,t1$1,t2,f$2,t1$2;
  o$1=(t=((LayoutEngineModule.splitName())(lytNm))(actName),AppFramework.tryGetAct(t[0],t[1]));
  if(o$1==null)
   o=null;
  else
   {
    act=o$1.$0;
    if(parms.$===0)
     $1=act.actFunction;
    else
     {
      $3=act.actFunction;
      switch($3.$==1?parms.$==1?parms.$1.$==0?($2=[$3.$0,parms.$0],0):3:3:$3.$==2?parms.$==1?parms.$1.$==0?($2=[$3.$0,$3.$2,parms.$0],2):parms.$1.$1.$==0?($2=[$3.$0,parms.$0,parms.$1.$0],1):3:3:3)
      {
       case 0:
        $1=(f=$2[0],(t1=$2[1],{
         $:0,
         $0:function()
         {
          LayoutEngineModule.getParamText(lytNm,t1,f);
         }
        }));
        break;
       case 1:
        $1=(f$1=$2[0],(t1$1=$2[1],(t2=$2[2],{
         $:0,
         $0:function()
         {
          LayoutEngineModule.getParamText(lytNm,t1$1,function(p1)
          {
           LayoutEngineModule.getParamText(lytNm,t2,f$1(p1));
          });
         }
        })));
        break;
       case 2:
        $1=(f$2=$2[0],(t1$2=$2[2],{
         $:1,
         $0:function(p2)
         {
          LayoutEngineModule.getParamText(lytNm,t1$2,function(p1)
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
            return testing_GeneratedPrintf.p$10($8);
           },$6)+" "+GeneratedPrintf.p($7));
          },4))(function(s)
          {
           console.log(s);
          }))(actName))(parms))(act);
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
  return o==null?{
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
    }))(actName));
   }
  }:o.$0;
 };
 LayoutEngineModule.createConcat=function(lytNm,name,docs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   return Doc.Concat(LayoutEngineModule.getAllDocs(lytNm,docs));
  });
 };
 LayoutEngineModule.createVar=function(lytNm,varName,v)
 {
  return Var$1.Create$1(v);
 };
 LayoutEngineModule.findJSEntry=function(fname)
 {
  return Seq$1.fold(function(oO,nm)
  {
   var o;
   return oO==null?null:(o=oO.$0,!o[nm]?null:{
    $:1,
    $0:o[nm]
   });
  },{
   $:1,
   $0:Global
  },String.splitByChar(".",fname));
 };
 LayoutEngineModule.createView=function(lytNm,viwName,parms)
 {
  return View.Bind(function()
  {
   var f;
   function m(a)
   {
    return a.$==1?(function($1)
    {
     return function($2)
     {
      return $1(GeneratedPrintf.p($2));
     };
    }(Global.id))(a.$0):a.$0;
   }
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
    },View.Map((f=function(s)
    {
     return Seq$1.map(m,s);
    },function(x)
    {
     return Arrays.ofSeq(f(x));
    }),View$1.traverseSeq(function(t)
    {
     return LayoutEngineModule.getTextToken(lytNm,t);
    },parms)));
   }
   catch(e)
   {
    return View.Const(e.message);
   }
  },LayoutEngineModule.currentViewTriggger());
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
 LayoutEngineModule.createTemplateM=function()
 {
  SC$1.$cctor();
  return SC$1.createTemplateM;
 };
 LayoutEngineModule.createConcatM=function()
 {
  SC$1.$cctor();
  return SC$1.createConcatM;
 };
 LayoutEngineModule.createVarM=function()
 {
  SC$1.$cctor();
  return SC$1.createVarM;
 };
 LayoutEngineModule.createViewM=function()
 {
  SC$1.$cctor();
  return SC$1.createViewM;
 };
 LayoutEngineModule.createActionM=function()
 {
  SC$1.$cctor();
  return SC$1.createActionM;
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
 LayoutEngineModule.entryView=function(n,w)
 {
  return{
   $:1,
   $0:{
    $:1,
    $0:AppFramework.newViw(n,w)
   }
  };
 };
 LayoutEngineModule.entryAct=function(n,a)
 {
  return{
   $:1,
   $0:{
    $:3,
    $0:AppFramework.newActF(n,a)
   }
  };
 };
 LayoutEngineModule.createEntryO=function(lytNm,line)
 {
  var m,$1,a,a$1,name,$2,a$2,a$3,name$1,$3,a$4,a$5,name$2,$4,a$6,a$7,name$3,$5,a$8,a$9,name$4,$6,a$10,name$5,$7,a$11,name$6,$8,a$12,name$7,$9,a$13,name$8,$10,a$14,name$9,$11,a$15,a$16,name$10,$12,a$17,a$18,name$11;
  try
  {
   m=LayoutEngineModule.splitTokens(line);
   return m.$==1&&(a=LayoutEngineModule.Identifier(m.$0),a!=null&&a.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$1=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$1!=null&&a$1.$==1&&($1=[m.$1.$1.$1,a$1.$0,a.$0],true))))))?(name=$1[2],LayoutEngineModule.entryDoc(name,(LayoutEngineModule.createSplitterM())([lytNm,name,true,$1[1],$1[0]]))):m.$==1&&(a$2=LayoutEngineModule.Identifier(m.$0),a$2!=null&&a$2.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$3=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$3!=null&&a$3.$==1&&($2=[m.$1.$1.$1,a$3.$0,a$2.$0],true))))))?(name$1=$2[2],LayoutEngineModule.entryDoc(name$1,(LayoutEngineModule.createSplitterM())([lytNm,name$1,false,$2[1],$2[0]]))):m.$==1&&(a$4=LayoutEngineModule.Identifier(m.$0),a$4!=null&&a$4.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$5=LayoutEngineModule.Identifier(m.$1.$1.$0),a$5!=null&&a$5.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($3=[a$5.$0,m.$1.$1.$1.$0,a$4.$0,m.$1.$1.$1.$1.$0],true)))))))))?(name$2=$3[2],LayoutEngineModule.entryDoc(name$2,(LayoutEngineModule.createButtonM())([lytNm,name$2,$3[0],$3[1],$3[3]]))):m.$==1&&(a$6=LayoutEngineModule.Identifier(m.$0),a$6!=null&&a$6.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==2&&(m.$1.$1.$==1&&(a$7=LayoutEngineModule.Identifier(m.$1.$1.$0),a$7!=null&&a$7.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==0&&($4=[m.$1.$1.$1.$0,a$6.$0,a$7.$0],true))))))))?(name$3=$4[1],LayoutEngineModule.entryDoc(name$3,(LayoutEngineModule.createInputM())([lytNm,name$3,$4[2],$4[0]]))):m.$==1&&(a$8=LayoutEngineModule.Identifier(m.$0),a$8!=null&&a$8.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==3&&(m.$1.$1.$==1&&(a$9=LayoutEngineModule.Identifier(m.$1.$1.$0),a$9!=null&&a$9.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==0&&($5=[m.$1.$1.$1.$0,a$8.$0,a$9.$0],true))))))))?(name$4=$5[1],LayoutEngineModule.entryDoc(name$4,(LayoutEngineModule.createTextAreaM())([lytNm,name$4,$5[2],$5[0]]))):m.$==1&&(a$10=LayoutEngineModule.Identifier(m.$0),a$10!=null&&a$10.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==0&&(m.$1.$1.$==1&&(m.$1.$1.$1.$==0&&($6=[a$10.$0,LayoutEngineModule.S(m.$1.$1.$0)],true))))))?(name$5=$6[0],LayoutEngineModule.entryVar(name$5,(LayoutEngineModule.createVarM())([lytNm,name$5,$6[1]]))):m.$==1&&(a$11=LayoutEngineModule.Identifier(m.$0),a$11!=null&&a$11.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==1&&(m.$1.$1.$==1&&($7=[LayoutEngineModule.S(m.$1.$1.$0),a$11.$0,m.$1.$1.$1],true)))))?(name$6=$7[1],LayoutEngineModule.entryDoc(name$6,(LayoutEngineModule.createDocM())([lytNm,name$6,$7[0],$7[2]]))):m.$==1&&(a$12=LayoutEngineModule.Identifier(m.$0),a$12!=null&&a$12.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==2&&($8=[a$12.$0,m.$1.$1],true))))?(name$7=$8[0],LayoutEngineModule.entryView(name$7,(LayoutEngineModule.createViewM())([lytNm,name$7,$8[1]]))):m.$==1&&(a$13=LayoutEngineModule.Identifier(m.$0),a$13!=null&&a$13.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==4&&(m.$1.$1.$==1&&(m.$1.$1.$1.$==1&&($9=[m.$1.$1.$1.$0,m.$1.$1.$1.$1,a$13.$0,LayoutEngineModule.S(m.$1.$1.$0)],true))))))?(name$8=$9[2],LayoutEngineModule.entryDoc(name$8,(LayoutEngineModule.createTemplateM())([lytNm,name$8,$9[3],$9[0],$9[1]]))):m.$==1&&(a$14=LayoutEngineModule.Identifier(m.$0),a$14!=null&&a$14.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==3&&($10=[m.$1.$1,a$14.$0],true))))?(name$9=$10[1],LayoutEngineModule.entryDoc(name$9,(LayoutEngineModule.createConcatM())([lytNm,name$9,$10[0]]))):m.$==1&&(a$15=LayoutEngineModule.Identifier(m.$0),a$15!=null&&a$15.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==4&&(m.$1.$1.$==1&&(a$16=LayoutEngineModule.Identifier(m.$1.$1.$0),a$16!=null&&a$16.$==1&&($11=[a$16.$0,a$15.$0,m.$1.$1.$1],true))))))?(name$10=$11[1],LayoutEngineModule.entryAct(name$10,(LayoutEngineModule.createActionM())([lytNm,name$10,$11[0],$11[2]]))):m.$==1&&(a$17=LayoutEngineModule.Identifier(m.$0),a$17!=null&&a$17.$==1&&(m.$1.$==1&&(a$18=LayoutEngineModule.Vertical(m.$1.$0),a$18.$==5&&(m.$1.$1.$==1&&($12=[m.$1.$1.$0,m.$1.$1.$1,a$18.$0,a$17.$0],true)))))?(name$11=$12[3],LayoutEngineModule.entryDoc(name$11,(LayoutEngineModule.createElementM())([lytNm,name$11,$12[2],$12[0],$12[1]]))):null;
  }
  catch(e)
  {
   return null;
  }
 };
 LayoutEngineModule.getExtraLines=function(pred,ls)
 {
  var i,x,o,v;
  i=(x=(o=Seq$1.tryFindIndex(function(l)
  {
   return Strings.Trim(l)!==""&&!pred(l);
  },Seq$1.skip(1,ls)),o==null?null:{
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
 LayoutEngineModule.createLines=function(baseName,n,names,lines,i,ls)
 {
  var prefix,prefix2,m,a,l,p,name,p$1,childrenLines,childNames;
  prefix=Strings.replicate(n,":");
  prefix2=":"+prefix;
  m=Seq$1.tryHead(ls);
  return m!=null&&m.$==1?(a=String.StartsWith(prefix,Strings.Trim(m.$0)),a!=null&&a.$==1?(l=a.$0,(p=LayoutEngineModule.getExtraLines(function(l$1)
  {
   return Strings.StartsWith(Strings.Trim(l$1),prefix2);
  },ls),(name=(((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1("_"+Utils.toSafe($2)+"_"+Global.String($3));
  }))(Global.id))(baseName))(i),(p$1=LayoutEngineModule.createLines(name,n+1,[],[],1,p[0]),(childrenLines=p$1[1],(childNames=p$1[0],LayoutEngineModule.createLines(baseName,n,Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(names,Seq$1.delay(function()
   {
    return[name];
   }));
  })),Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(lines,Seq$1.delay(function()
   {
    return Seq$1.append(childrenLines,Seq$1.delay(function()
    {
     return[name+" "+l+" "+Strings.concat(" ",childNames)];
    }));
   }));
  })),i+1,p[1]))))))):[names,lines]):[names,lines];
 };
 LayoutEngineModule.processLines=function(f,ls)
 {
  function processLinesR(ls$1)
  {
   var m,l,m$1,$1,a,p,p$1,rest,docs,p$2,names,ls$2;
   m=Seq$1.tryHead(ls$1);
   return m!=null&&m.$==1?(l=m.$0,(m$1=LayoutEngineModule.splitTokens(l),m$1.$==1&&(a=LayoutEngineModule.Identifier(m$1.$0),a!=null&&a.$==1&&(m$1.$1.$==1&&(LayoutEngineModule.Vertical(m$1.$1.$0).$==2&&(m$1.$1.$1.$==0&&($1=a.$0,true)))))?(p=LayoutEngineModule.getExtraLines(function(l$1)
   {
    return Strings.StartsWith(Strings.Trim(l$1),"|");
   },ls$1),processLinesR((Layout.createLayoutDefinitions($1,Layout.extractNodes(p[0])))[1].concat(p[1]))):m$1.$==0?processLinesR(Slice.array(ls$1,{
    $:1,
    $0:1
   },null)):(p$1=LayoutEngineModule.getExtraLines(function(l$1)
   {
    return Strings.StartsWith(Strings.Trim(l$1),":");
   },ls$1),(rest=p$1[1],(docs=p$1[0],Arrays.length(docs)>0?(p$2=LayoutEngineModule.createLines(Seq$1.nth(0,Strings.SplitChars(l,[" "],1)),1,[],[],1,docs),(names=p$2[0],(ls$2=p$2[1],processLinesR(Arrays.ofSeq(Seq$1.delay(function()
   {
    return Seq$1.append(ls$2,Seq$1.delay(function()
    {
     return Seq$1.append([l+" "+Strings.concat(" ",names)],Seq$1.delay(function()
     {
      return rest;
     }));
    }));
   })))))):Arrays.ofSeq(Seq$1.delay(function()
   {
    var m$2;
    return Seq$1.append((m$2=f(l),m$2!=null&&m$2.$==1?[m$2.$0]:[]),Seq$1.delay(function()
    {
     return processLinesR(rest);
    }));
   }))))))):[];
  }
  return processLinesR(ls);
 };
 LayoutEngineModule.processText=function(f,txt)
 {
  return LayoutEngineModule.processLines(f,Strings.SplitChars(txt,["\n","\r"],1));
 };
 LayoutEngineModule.parseEntries=function(lytNm,txt)
 {
  return LayoutEngineModule.processText(Syntax.createEntryO2(lytNm,new Dictionary.New$5()),txt);
 };
 LayoutEngineModule.createEntries=function(lytNm)
 {
  function f(l)
  {
   return LayoutEngineModule.createEntryO(lytNm,l);
  }
  return function(t)
  {
   return LayoutEngineModule.processText(f,t);
  };
 };
 LayoutEngineModule.getText=function(lytNm,txtName)
 {
  var a,id,p,plg,nm,o,o$1,o$2,o$3;
  a=LayoutEngineModule.Identifier(txtName);
  return a!=null&&a.$==1?(id=a.$0,(p=((LayoutEngineModule.splitName())(lytNm))(id),(plg=p[0],(nm=p[1],(o=(o$1=AppFramework.tryGetViw(plg,nm),o$1==null?null:{
   $:1,
   $0:Doc.TextView(o$1.$0.viwView)
  }),o==null?(o$2=(o$3=AppFramework.tryGetVar(plg,nm),o$3==null?null:{
   $:1,
   $0:Doc.TextView(o$3.$0.varVar.get_View())
  }),o$2==null?Doc.TextNode(id):o$2.$0):o.$0))))):Doc.TextNode(LayoutEngineModule.S(txtName));
 };
 LayoutEngineModule.getDocEntries=function(entries)
 {
  function f(t)
  {
   return t[1];
  }
  return Seq$1.map(function(x)
  {
   return Seq$1.last(f(x));
  },Seq$1.groupBy(function(d)
  {
   return d.docName;
  },Seq$1.choose(function(a)
  {
   return a.$==2?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.getVarEntries=function(entries)
 {
  function f(t)
  {
   return t[1];
  }
  return Seq$1.map(function(x)
  {
   return Seq$1.last(f(x));
  },Seq$1.groupBy(function(v)
  {
   return v.varName;
  },Seq$1.choose(function(a)
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
  return Seq$1.map(function(x)
  {
   return Seq$1.last(f(x));
  },Seq$1.groupBy(function(v)
  {
   return v.viwName;
  },Seq$1.choose(function(a)
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
  return Seq$1.map(function(x)
  {
   return Seq$1.last(f(x));
  },Seq$1.groupBy(function(v)
  {
   return v.actName;
  },Seq$1.choose(function(a)
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
  return Seq$1.map(function(x)
  {
   return Seq$1.last(f(x));
  },Seq$1.groupBy(function(v)
  {
   return v.qryName;
  },Seq$1.choose(function(a)
  {
   return a.$==4?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.inputFile=function(lytNm,attrs,labelName,actName,doc)
 {
  var o,o$1,t,act;
  o=(o$1=(t=((LayoutEngineModule.splitName())(lytNm))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:(act=o$1.$0,Doc.Element("div",LayoutEngineModule.getAttrs(lytNm,{
    $:0,
    $0:attrs
   }),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-btn")],[Doc.Element("label",[AttrProxy.Create("class","btn")],[LayoutEngineModule.getText(lytNm,{
    $:0,
    $0:labelName
   }),Doc.Element("input",[AttrProxy.Create("class","form-control"),AttrProxy.Create("type","file"),AttrModule.Style("display","none"),AttrProxy.HandlerImpl("click",function(el)
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
   })],[])])]),doc!==""?LayoutEngineModule.singleDoc(lytNm,List.ofArray([{
    $:1,
    $0:doc
   }])):Doc.get_Empty()])]))
  });
  return o==null?AppFramework.errDoc((function($1)
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
  o=(o$1=(t=((LayoutEngineModule.splitName())(lytNm))(varName),AppFramework.tryGetVar(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:Doc.Element("div",LayoutEngineModule.getAttrs(lytNm,{
    $:0,
    $0:attrs
   }),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[LayoutEngineModule.getText(lytNm,{
    $:0,
    $0:labelName
   })]),Doc.Input([AttrProxy.Create("class","form-control")],o$1.$0.varVar)])])
  });
  return o==null?AppFramework.errDoc((function($1)
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
 LayoutEngineModule.htmlDoc=function(lytNm,html)
 {
  return Doc.BindView(function(a)
  {
   return a.$==1?AppFramework.errDoc((function($1)
   {
    return function($2)
    {
     return $1("HtmlDoc: unexpected action "+GeneratedPrintf.p($2));
    };
   }(Global.id))(a.$0)):Doc.Verbatim(a.$0);
  },LayoutEngineModule.getTextData(lytNm,html));
 };
 LayoutEngineModule.refreshEntries=function(lytN,entries)
 {
  var plg,m,plg$1,i;
  plg=(m=AppFramework.tryGetPlugIn(lytN),m==null?(plg$1=(i=AppFramework.defaultPlugIn(),PlugIn.New(lytN,i.plgVars,i.plgViews,i.plgDocs,i.plgActions,i.plgQueries)),(AppFramework.addPlugIn(plg$1),plg$1)):m.$0);
  ListModel$2.refreshLM(plg.plgVars,Arrays.ofSeq(Seq$1.delay(function()
  {
   return LayoutEngineModule.getVarEntries(entries);
  })));
  ListModel$2.refreshLM(plg.plgViews,Arrays.ofSeq(Seq$1.delay(function()
  {
   return LayoutEngineModule.getViewEntries(entries);
  })));
  ListModel$2.refreshLM(plg.plgActions,Arrays.ofSeq(Seq$1.delay(function()
  {
   return LayoutEngineModule.getActionEntries(entries);
  })));
  ListModel$2.refreshLM(plg.plgQueries,Arrays.ofSeq(Seq$1.delay(function()
  {
   return LayoutEngineModule.getQueryEntries(entries);
  })));
  ListModel$2.refreshLM(plg.plgDocs,Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(LayoutEngineModule.getDocEntries(entries),Seq$1.delay(function()
   {
    return Seq$1.append([AppFramework.newDocF("InputFile",{
     $:4,
     $0:Runtime$1.Curried(LayoutEngineModule.inputFile,4,[lytN]),
     $1:"attrs",
     $2:"Label",
     $3:"Action",
     $4:"[Doc]"
    })],Seq$1.delay(function()
    {
     return Seq$1.append([AppFramework.newDocF("InputLabel",{
      $:3,
      $0:Runtime$1.Curried(LayoutEngineModule.inputLabel,3,[lytN]),
      $1:"attrs",
      $2:"Label",
      $3:"Var"
     })],Seq$1.delay(function()
     {
      return Seq$1.append([AppFramework.newDocF("HtmlDoc",{
       $:1,
       $0:function(h)
       {
        return LayoutEngineModule.htmlDoc(lytN,h);
       },
       $1:"html"
      })],Seq$1.delay(function()
      {
       return[AppFramework.newDocF("none",{
        $:1,
        $0:LayoutEngineModule.none,
        $1:"x"
       })];
      }));
     }));
    }));
   }));
  })));
 };
 LayoutEngineModule.addLayout=function(lyt)
 {
  View.Sink(function(txt)
  {
   var x;
   LayoutEngineModule.set_currentViewTriggger(View.Map2(function($1,$2)
   {
    return $1+$2;
   },lyt.lytDefinition.get_View(),AppFramework.mainDocV().get_View()));
   LayoutEngineModule.refreshEntries(lyt.lytName,(x=(LayoutEngineModule.createEntries(lyt.lytName))(txt),Seq$1.append(List.ofArray([{
    $:0,
    $0:AppFramework.newVar("Layout",lyt.lytDefinition)
   }]),x)));
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
 Measures=LayoutEngineModule.Measures=Runtime$1.Class({
  toString:function()
  {
   return this.$==1?((((Runtime$1.Curried(function($1,$2,$3,$4)
   {
    return $1(Global.String($2)+"-"+Global.String($3)+"-"+Global.String($4));
   },4))(Global.id))(Operators$5.toInt(this.$0)))(Operators$5.toInt(this.$1)))(Operators$5.toInt(this.$2)):Global.String(Operators$5.toInt(this.$1?this.$0:-this.$0));
  }
 },null,Measures);
 Syntax.pairOfDocs=function(lytNm,docs)
 {
  var dsW;
  dsW=View.Map(function(a)
  {
   var $1;
   return a.$==1&&(a.$1.$==1&&(a.$1.$1.$==0&&($1=[a.$0,a.$1.$0],true)))?[$1[0],$1[1]]:[AppFramework.errDoc((function($2)
   {
    return function($3)
    {
     return $2("splitter expects exactly 2 elements "+Utils.printList(function($4)
     {
      return testing_GeneratedPrintf.p$10($4);
     },$3));
    };
   }(Global.id))(docs)),AppFramework.errDoc("part 2")];
  },View.Map(function()
  {
   return LayoutEngineModule.getAllDocs(lytNm,docs);
  },LayoutEngineModule.currentViewTriggger()));
  return[Doc.EmbedView(View.Map(function(t)
  {
   return t[0];
  },dsW)),Doc.EmbedView(View.Map(function(t)
  {
   return t[1];
  },dsW))];
 };
 Syntax.entryDef=function(n,e)
 {
  return{
   $:0,
   $0:n,
   $1:e
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
 Syntax.entryView=function(n,w)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:3,
    $0:w
   })
  };
 };
 Syntax.entryVar=function(n,v)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:2,
    $0:v
   })
  };
 };
 Syntax.entryPlg=function(n,p)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:4,
    $0:p
   })
  };
 };
 Syntax.entryRef=function(n,e,e$1)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:5,
    $0:[e,e$1]
   })
  };
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
 Syntax.createEntryO=function(getType,lytNm,line)
 {
  var m,$1,a,a$1,$2,a$2,a$3,$3,a$4,a$5,$4,a$6,a$7,$5,a$8,a$9,$6,a$10,a$11,a$12,a$13,$7,a$14,a$15,a$16,a$17,$8,a$18,a$19,a$20,a$21,$9,a$22,a$23,a$24,$10,a$25,a$26,a$27,$11,a$28,a$29,$12,a$30,$13,a$31,a$32,a$33,$14,a$34,a$35,$15,a$36,a$37,$16,a$38,a$39,a$40,$17,a$41,a$42,a$43,a$44;
  function Rt(a$45)
  {
   var a$46,itr;
   a$46=Syntax.R(a$45);
   return a$46!=null&&a$46.$==1?(itr=a$46.$0,{
    $:1,
    $0:[getType(itr),itr]
   }):null;
  }
  function DocRf(a$45)
  {
   var $18,a$46;
   return(a$46=Rt(a$45),a$46!=null&&a$46.$==1&&(a$46.$0[0][0].$==0&&($18=a$46.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$18
    }
   }:null;
  }
  function VarRf(a$45)
  {
   var $18,a$46;
   return(a$46=Rt(a$45),a$46!=null&&a$46.$==1&&(a$46.$0[0][0].$==1&&($18=a$46.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$18
    }
   }:null;
  }
  function ViwRf(a$45)
  {
   var $18,a$46;
   return(a$46=Rt(a$45),a$46!=null&&a$46.$==1&&(a$46.$0[0][0].$==2&&($18=a$46.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$18
    }
   }:null;
  }
  function ActRf(a$45)
  {
   var $18,a$46;
   return(a$46=Rt(a$45),a$46!=null&&a$46.$==1&&(a$46.$0[0][0].$==3&&($18=a$46.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$18
    }
   }:null;
  }
  function PlgRf(a$45)
  {
   var $18,a$46,$19;
   return(a$46=Rt(a$45),a$46!=null&&a$46.$==1&&(a$46.$0[0][0].$==4&&(($19=a$46.$0[0][1],$19!=null&&$19.$==1)&&(a$46.$0[0][1].$0.$==5&&($18=[a$46.$0[0][1].$0.$0,a$46.$0[1]],true)))))?{
    $:1,
    $0:$18[0]
   }:null;
  }
  function Name(a$45)
  {
   var $18,a$46;
   return(a$46=Syntax.R(a$45),a$46!=null&&a$46.$==1&&(a$46.$0.$==0&&($18=a$46.$0.$0,true)))?{
    $:1,
    $0:$18
   }:null;
  }
  function NamU(a$45)
  {
   var $18,a$46;
   return(a$46=Name(a$45),a$46!=null&&a$46.$==1&&(Strings.StartsWith(a$46.$0,"_")&&($18=a$46.$0,true)))?{
    $:1,
    $0:$18
   }:null;
  }
  function Tr(a$45)
  {
   var a$46,a$47;
   a$46=VarRf(a$45);
   return a$46!=null&&a$46.$==1?{
    $:1,
    $0:{
     $:1,
     $0:a$46.$0
    }
   }:(a$47=ViwRf(a$45),a$47!=null&&a$47.$==1?{
    $:1,
    $0:{
     $:2,
     $0:a$47.$0
    }
   }:null);
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
   var $18,a$45,a$46,aft,bef,tl,a$47,$19;
   return(a$45=Indi(txt),a$45!=null&&a$45.$==1&&(a$46=Tr(a$45.$0[1]),a$46!=null&&a$46.$==1&&($18=[a$45.$0[2],a$45.$0[0],a$46.$0],true)))?(aft=$18[0],(bef=$18[1],(tl=bef===""?List.ofArray([$18[2]]):List.ofArray([{
    $:0,
    $0:bef
   },$18[2]]),aft===""?{
    $:1,
    $0:tl
   }:(a$47=Tx(aft),a$47!=null&&a$47.$==1?{
    $:1,
    $0:List.append(tl,a$47.$0)
   }:null)))):($19=Indi(txt),$19!=null&&$19.$==1)?null:{
    $:1,
    $0:List.ofArray([{
     $:0,
     $0:txt
    }])
   };
  }
  function ActI(txt)
  {
   var $18,a$45,a$46;
   return(a$45=Indi(txt),a$45!=null&&a$45.$==1&&(a$46=ActRf(a$45.$0[1]),a$46!=null&&a$46.$==1&&(Strings.Trim(a$45.$0[0])===""&&Strings.Trim(a$45.$0[2])===""&&($18=[a$45.$0[2],a$46.$0,a$45.$0[0]],true))))?{
    $:1,
    $0:$18[1]
   }:null;
  }
  function QTx(a$45)
  {
   var $18,a$46;
   return a$45.$==0&&(a$46=Tx(a$45.$0),a$46!=null&&a$46.$==1&&($18=a$46.$0,true))?{
    $:1,
    $0:$18
   }:null;
  }
  function At(a$45)
  {
   return a$45.$==0?{
    $:1,
    $0:Arrays.ofSeq(Seq$1.choose(function(a$46)
    {
     var m$1,$18,a$47,$19,a$48,m$2,$20,a$49;
     m$1=Strings.SplitChars(Strings.Trim(a$46),["="],0);
     return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$47=ActI(Arrays.get(m$1,1)),a$47!=null&&a$47.$==1&&($18=[a$47.$0,Arrays.get(m$1,0)],true))?{
      $:1,
      $0:{
       $:2,
       $0:Strings.Trim($18[1]),
       $1:$18[0]
      }
     }:!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$48=Tx(Arrays.get(m$1,1)),a$48!=null&&a$48.$==1&&($19=[Arrays.get(m$1,0),a$48.$0],true))?{
      $:1,
      $0:{
       $:1,
       $0:Strings.Trim($19[0]),
       $1:$19[1]
      }
     }:(m$2=Strings.SplitChars(Strings.Trim(a$46),[":"],0),!Unchecked.Equals(m$2,null)&&m$2.length===2&&(a$49=Tx(Arrays.get(m$2,1)),a$49!=null&&a$49.$==1&&($20=[Arrays.get(m$2,0),a$49.$0],true))?{
      $:1,
      $0:{
       $:0,
       $0:Strings.Trim($20[0]),
       $1:$20[1]
      }
     }:(function($21)
     {
      return function($22)
      {
       return $21("Attributes should be like: \"name=val\" or \"name:val\" and separated by ';' : "+Utils.toSafe($22));
      };
     }(Operators$5.FailWith))(a$46));
    },Seq$1.filter(function(v)
    {
     return Strings.Trim(v)!=="";
    },Strings.SplitChars(Strings.Trim(a$45.$0),[";"],0))))
   }:null;
  }
  function Pr(a$45)
  {
   var a$46,a$47,a$48,a$49,a$50;
   a$46=QTx(a$45);
   return a$46!=null&&a$46.$==1?{
    $:1,
    $0:{
     $:0,
     $0:a$46.$0
    }
   }:(a$47=DocRf(a$45),a$47!=null&&a$47.$==1?{
    $:1,
    $0:{
     $:1,
     $0:a$47.$0
    }
   }:(a$48=VarRf(a$45),a$48!=null&&a$48.$==1?{
    $:1,
    $0:{
     $:2,
     $0:a$48.$0
    }
   }:(a$49=ViwRf(a$45),a$49!=null&&a$49.$==1?{
    $:1,
    $0:{
     $:3,
     $0:a$49.$0
    }
   }:(a$50=ActRf(a$45),a$50!=null&&a$50.$==1?{
    $:1,
    $0:{
     $:4,
     $0:a$50.$0
    }
   }:null))));
  }
  function Prs(a$45)
  {
   var $18,a$46,a$47;
   switch(a$45.$==1?(a$46=Pr(a$45.$0),a$46!=null&&a$46.$==1?(a$47=Prs(a$45.$1),a$47!=null&&a$47.$==1?($18=[a$46.$0,a$47.$0],1):2):2):0)
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
       $0:$18[0],
       $1:$18[1]
      })
     };
    case 2:
     return null;
   }
  }
  function Nd(a$45)
  {
   var a$46,a$47,a$48,a$49;
   a$46=QTx(a$45);
   return a$46!=null&&a$46.$==1?{
    $:1,
    $0:{
     $:0,
     $0:a$46.$0
    }
   }:(a$47=DocRf(a$45),a$47!=null&&a$47.$==1?{
    $:1,
    $0:{
     $:1,
     $0:a$47.$0
    }
   }:(a$48=VarRf(a$45),a$48!=null&&a$48.$==1?{
    $:1,
    $0:{
     $:2,
     $0:a$48.$0
    }
   }:(a$49=ViwRf(a$45),a$49!=null&&a$49.$==1?{
    $:1,
    $0:{
     $:3,
     $0:a$49.$0
    }
   }:null)));
  }
  function Nds(a$45)
  {
   var $18,a$46,a$47;
   switch(a$45.$==1?(a$46=Nd(a$45.$0),a$46!=null&&a$46.$==1?(a$47=Nds(a$45.$1),a$47!=null&&a$47.$==1?($18=[a$46.$0,a$47.$0],1):2):2):0)
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
       $0:$18[0],
       $1:$18[1]
      })
     };
    case 2:
     return null;
   }
  }
  function Pgs(a$45)
  {
   var $18,a$46,a$47;
   switch(a$45.$==1?(a$46=PlgRf(a$45.$0),a$46!=null&&a$46.$==1?(a$47=Pgs(a$45.$1),a$47!=null&&a$47.$==1?($18=[a$46.$0,a$47.$0],1):2):2):0)
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
       $0:$18[0],
       $1:$18[1]
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
  }):m.$==1&&(a$2=NamU(m.$0),a$2!=null&&a$2.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$3=Name(m.$1.$1.$0),a$3!=null&&a$3.$==1&&(m.$1.$1.$1.$==0&&($2=[a$2.$0,a$3.$0],true)))))))?Syntax.entryRef($2[0],$2[1],RefType.RDoc):m.$==1&&(a$4=NamU(m.$0),a$4!=null&&a$4.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$5=Name(m.$1.$1.$0),a$5!=null&&a$5.$==1&&(m.$1.$1.$1.$==0&&($3=[a$4.$0,a$5.$0],true)))))))?Syntax.entryRef($3[0],$3[1],RefType.RVar):m.$==1&&(a$6=NamU(m.$0),a$6!=null&&a$6.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==2&&(m.$1.$1.$==1&&(a$7=Name(m.$1.$1.$0),a$7!=null&&a$7.$==1&&(m.$1.$1.$1.$==0&&($4=[a$6.$0,a$7.$0],true)))))))?Syntax.entryRef($4[0],$4[1],RefType.RViw):m.$==1&&(a$8=NamU(m.$0),a$8!=null&&a$8.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==4&&(m.$1.$1.$==1&&(a$9=Name(m.$1.$1.$0),a$9!=null&&a$9.$==1&&(m.$1.$1.$1.$==0&&($5=[a$8.$0,a$9.$0],true)))))))?Syntax.entryRef($5[0],$5[1],RefType.RAct):m.$==1&&(a$10=Name(m.$0),a$10!=null&&a$10.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$11=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$11!=null&&a$11.$==1&&(m.$1.$1.$1.$==1&&(a$12=DocRf(m.$1.$1.$1.$0),a$12!=null&&a$12.$==1&&(m.$1.$1.$1.$1.$==1&&(a$13=DocRf(m.$1.$1.$1.$1.$0),a$13!=null&&a$13.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($6=[a$12.$0,a$11.$0,a$10.$0,a$13.$0],true)))))))))))?Syntax.entryDoc($6[2],{
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
  }):m.$==1&&(a$36=Name(m.$0),a$36!=null&&a$36.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==3&&(a$37=Nds(m.$1.$1),a$37!=null&&a$37.$==1&&($15=[a$36.$0,a$37.$0],true)))))?Syntax.entryDoc($15[0],{
   $:5,
   $0:{
    $:0,
    $0:$15[1]
   }
  }):m.$==1&&(a$38=Name(m.$0),a$38!=null&&a$38.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==4&&(m.$1.$1.$==1&&(a$39=ActRf(m.$1.$1.$0),a$39!=null&&a$39.$==1&&(a$40=Prs(m.$1.$1.$1),a$40!=null&&a$40.$==1&&($16=[a$39.$0,a$38.$0,a$40.$0],true)))))))?Syntax.entryAct($16[1],{
   $:0,
   $0:$16[0],
   $1:$16[2]
  }):m.$==1&&(a$41=Name(m.$0),a$41!=null&&a$41.$==1&&(m.$1.$==1&&(a$42=LayoutEngineModule.Vertical(m.$1.$0),a$42.$==5&&(m.$1.$1.$==1&&(a$43=At(m.$1.$1.$0),a$43!=null&&a$43.$==1&&(a$44=Nds(m.$1.$1.$1),a$44!=null&&a$44.$==1&&($17=[a$43.$0,a$42.$0,a$41.$0,a$44.$0],true)))))))?Syntax.entryDoc($17[2],{
   $:6,
   $0:{
    $:0,
    $0:$17[1],
    $1:$17[0],
    $2:$17[3]
   }
  }):null;
 };
 Syntax.createEntryO2=function(lytNm,refs)
 {
  function ok(nm,en)
  {
   refs.Add(nm,en);
   return{
    $:1,
    $0:{
     $:0,
     $0:[nm,en]
    }
   };
  }
  function ko(msg,line)
  {
   refs.Add(Seq$1.head(Strings.SplitChars(line,[" ","\u0009"],1)),{
    $:0,
    $0:{
     $:6,
     $0:{
      $:0,
      $0:"div",
      $1:[],
      $2:List.ofArray([{
       $:0,
       $0:List.ofArray([{
        $:0,
        $0:msg
       }])
      }])
     }
    }
   });
   return{
    $:1,
    $0:{
     $:1,
     $0:msg
    }
   };
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
    }(Operators$5.FailWith))(nm);
   }
  }
  function getType(rf)
  {
   var $1,entry,nm,ly,a;
   if(rf.$==1)
    {
     nm=rf.$1;
     ly=rf.$0;
     a=getRef(ly);
     if(a.$==4)
      try
      {
       $1=a.$0.$0.get_Item(nm);
      }
      catch(e)
      {
       $1=(((Runtime$1.Curried3(function($2,$3,$4)
       {
        return $2("Could not find reference to "+Utils.toSafe($3)+"."+Utils.toSafe($4));
       }))(Operators$5.FailWith))(ly))(nm);
      }
     else
      $1=(function($2)
      {
       return function($3)
       {
        return $2("PlugIn not registered: "+testing_GeneratedPrintf.p($3));
       };
      }(Operators$5.FailWith))(rf);
     return[$1,null];
    }
   else
    {
     entry=getRef(rf.$0);
     return[entry.$==1?RefType.RAct:entry.$==2?RefType.RVar:entry.$==3?RefType.RViw:entry.$==5?RefType.RPlg:entry.$==4?(function($2)
     {
      return function($3)
      {
       return $2("PlugIn should not be referenced by itself: "+testing_GeneratedPrintf.p($3));
      };
     }(Operators$5.FailWith))(rf):RefType.RDoc,{
      $:1,
      $0:entry
     }];
    }
  }
  return function(line)
  {
   var a;
   try
   {
    a=Syntax.createEntryO(getType,lytNm,line);
    return a==null?ko((function($1)
    {
     return function($2)
     {
      return $1("Line not matched!: "+Utils.toSafe($2));
     };
    }(Global.id))(line),line):ok(a.$0.$0,a.$0.$1);
   }
   catch(e)
   {
    return ko(e.message,line);
   }
  };
 };
 RefType.RDoc={
  $:0
 };
 RefType.RVar={
  $:1
 };
 RefType.RViw={
  $:2
 };
 RefType.RAct={
  $:3
 };
 RefType.RPlg={
  $:4
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
 Layout.horizontalSplit=function(lines)
 {
  var o,o$1,$1,i,ms;
  function c(i$1,l)
  {
   var a,x,o$2,v;
   a=LibraryJS.REGEX$1("^ *--+([ ^v0-9]*)-* *$","",l);
   return a!=null&&a.$==1?{
    $:1,
    $0:[[i$1,(x=(o$2=Seq$1.tryItem(1,a.$0),o$2==null?null:Layout.extractMeasuresO(Strings.Replace(Strings.Replace(o$2.$0,"^",""),"v","-"))),(v=new Measures({
     $:1,
     $0:5,
     $1:50,
     $2:95
    }),x==null?v:x.$0))],l.indexOf("-")]
   }:null;
  }
  o=(o$1=Seq$1.tryHead(Seq$1.sortBy(function(t)
  {
   return t[1];
  },Seq$1.choose(function($2)
  {
   return c($2[0],$2[1]);
  },Seq$1.indexed(lines)))),o$1==null?null:{
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
 Layout.transpose=function(lines)
 {
  var max;
  max=Seq$1.max(Seq$1.map(function(l)
  {
   return l.length;
  },lines));
  return Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.map(function(i)
   {
    return Arrays.ofSeq(Seq$1.delay(function()
    {
     return Seq$1.map(function(l)
     {
      return l.length>i?l[i]:" ";
     },lines);
    })).join("");
   },Operators$5.range(0,max-1));
  }));
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
  o=(o$1=(o$2=Seq$1.tryHead(Seq$1.sortBy(function(t)
  {
   return t[1];
  },Seq$1.choose(function($2)
  {
   return c($2[0],$2[1]);
  },Seq$1.indexed(lines)))),o$2==null?null:{
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
   },r),(x=Seq$1.tryHead(Seq$1.delay(function()
   {
    return Seq$1.append(Seq$1.choose(Layout.extractMeasuresO,l),Seq$1.delay(function()
    {
     return Seq$1.map(function(a)
     {
      return a.$==0?a.$1?new Measures({
       $:0,
       $0:a.$0,
       $1:false
      }):a:a;
     },Seq$1.choose(Layout.extractMeasuresO,r));
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
  return node.$==1?(dir=node.$0.$0,(meas=node.$0.$1,(p=Layout.createLayoutDefinitions(nameBase+"_1",node.$0.$2),(name1=p[0],(def1=p[1],(p$1=Layout.createLayoutDefinitions(nameBase+"_2",node.$0.$3),(name2=p$1[0],(def2=p$1[1],[nameBase,Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append([Strings.concat(" ",List.ofArray([nameBase,dir?"vertical":"horizontal",Global.String(meas),name1,name2]))],Seq$1.delay(function()
   {
    return Seq$1.append(def1,Seq$1.delay(function()
    {
     return def2;
    }));
   }));
  }))])))))))):(t=node.$0,!Unchecked.Equals(t,null)&&t.length===0)?["___",[]]:(t$1=node.$0,!Unchecked.Equals(t$1,null)&&t$1.length===1)?[Arrays.get(node.$0,0),[]]:[nameBase,[nameBase+" div \"\" "+Strings.concat(" ",node.$0)]];
 };
 StartAppFramework.htmlD=function()
 {
  SC$1.$cctor();
  return SC$1.htmlD;
 };
 StartAppFramework.startWithHtmlD=function()
 {
  SC$1.$cctor();
  return SC$1.startWithHtmlD;
 };
 Util.disabled=function(disW)
 {
  return AttrModule.DynamicPred("disabled",disW,View.Const(""));
 };
 Util.inputLabel=function(attrs,disW,txt,_var)
 {
  return Doc.Element("div",attrs,[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[Doc.TextNode(txt)]),Doc.Input([AttrProxy.Create("class","form-control"),Util.disabled(disW)],_var)])]);
 };
 Util.areaLabel=function(attrs,disW,txt,_var)
 {
  return Doc.Element("div",attrs,[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[Doc.TextNode(txt)]),Doc.InputArea([AttrProxy.Create("class","form-control"),Util.disabled(disW)],Var$1.Lens(_var,Global.id,function($1,$2)
  {
   return $2;
  }))])]);
 };
 Util.elemsUI=function(doc,addNew)
 {
  return Doc.Element("div",[],[doc,Doc.Button("New",[],addNew)]);
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
  return new FromView.New(View.Map(function($1)
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
 Util.textLine=function(txtW)
 {
  return Doc.Element("div",[],[Doc.TextView(txtW)]);
 };
 Util.lensStrO=function(sel)
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
 Util.mapVarO=function(toB,ofBO,sel)
 {
  return new FromView.New(View.Map(function($1)
  {
   return $1==null?null:{
    $:1,
    $0:toB($1.$0)
   };
  },sel.get_View()),function(a)
  {
   var x;
   function f(a$1)
   {
    return{
     $:1,
     $0:a$1
    };
   }
   function g(a$1)
   {
    sel.Set(a$1);
   }
   if(a!=null&&a.$==1)
    {
     x=ofBO(a.$0);
     (Option.iter(function(x$1)
     {
      return g(f(x$1));
     }))(x);
    }
   else
    sel.Set(null);
  });
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
 Util.selectorLensInt=function(sel)
 {
  return(Util.selectorLens(Global.String,ParseO.parseIntO()))(sel);
 };
 Util.selectorLensGuid=function(sel)
 {
  return(Util.selectorLens(Global.String,ParseO.parseGuidO()))(sel);
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
 Util.unselectorV=function()
 {
  SC$1.$cctor();
  return SC$1.unselectorV;
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
 Util.newButton=function(f)
 {
  return Util.simpleButton("New",f);
 };
 Util.orderedList=function(l)
 {
  return Doc.Element("ol",[],[l]);
 };
 AF.plugin=function()
 {
  SC$1.$cctor();
  return SC$1.plugin$1;
 };
 AF.addPlugIn2=function(plg)
 {
  var m;
  AppFramework.addPlugIn(plg);
  m=Seq$1.tryHead(plg.plgDocs);
  m!=null&&m.$==1?AppFramework.mainDocV().Set(plg.plgName+"."+m.$0.docName):void 0;
 };
 AF.concatMainDocs=function(plugins)
 {
  return Doc.Concat(Seq$1.choose(function(a)
  {
   return a.docDoc.$==0?{
    $:1,
    $0:a.docDoc.$0.f()
   }:null;
  },Seq$1.choose(function(plg)
  {
   return Seq$1.tryHead(plg.plgDocs);
  },plugins)));
 };
 PlugInBuilder$1=AF.PlugInBuilder=Runtime$1.Class({
  Zero:function()
  {
   var i;
   i=AppFramework.defaultPlugIn();
   return PlugIn.New("Main",i.plgVars,i.plgViews,i.plgDocs,i.plgActions,i.plgQueries);
  },
  Yield:function()
  {
   return this.Zero();
  },
  For:function(coll,func)
  {
   var ie;
   ie=Enumerator.Get(coll);
   while(ie.MoveNext())
    func(ie.Current());
  },
  Name:function(plg,name)
  {
   return PlugIn.New(name,plg.plgVars,plg.plgViews,plg.plgDocs,plg.plgActions,plg.plgQueries);
  },
  AddVar:function(plg,name,_var)
  {
   plg.plgVars.Append(AppFramework.newVar(name,_var));
   return plg;
  },
  AddDoc:function(plg,name,doc)
  {
   plg.plgDocs.Append(AppFramework.newDoc(name,doc));
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
  AddAct:function(plg,name,act)
  {
   plg.plgActions.Append(AppFramework.newAct(name,act));
   return plg;
  },
  AddActO:function(plg,name,actO)
  {
   actO==null?void 0:plg.plgActions.Append(AppFramework.newAct(name,actO.$0));
   return plg;
  },
  AddViw:function(plg,name,viw)
  {
   plg.plgViews.Append(AppFramework.newViw(name,viw));
   return plg;
  },
  Merge:function(plg,prefix,p2)
  {
   plg.plgVars.AppendMany(Seq$1.map(function(v)
   {
    return PlugInVar.New(prefix+v.varName,v.varVar);
   },p2.plgVars));
   plg.plgViews.AppendMany(Seq$1.map(function(w)
   {
    return PlugInView.New(prefix+w.viwName,w.viwView);
   },p2.plgViews));
   plg.plgDocs.AppendMany(Seq$1.map(function(d)
   {
    return PlugInDoc.New(prefix+d.docName,d.docDoc);
   },p2.plgDocs));
   plg.plgActions.AppendMany(Seq$1.map(function(a)
   {
    return PlugInAction.New(prefix+a.actName,a.actFunction,a.actEnabled);
   },p2.plgActions));
   plg.plgQueries.AppendMany(Seq$1.map(function(q)
   {
    return PlugInQuery.New(prefix+q.qryName,q.qryFunction);
   },p2.plgQueries));
   return plg;
  }
 },Obj,PlugInBuilder$1);
 PlugInBuilder$1.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },PlugInBuilder$1);
 ListModelData=AF.ListModelData=Runtime$1.Class({
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
  },
  get_CurrentW:function()
  {
   var f,g,v,f$1,m,o;
   return View.Map((f=function(o$1)
   {
    return o$1==null?null:Global.id(o$1.$0);
   },(g=(v=this.def,function(o$1)
   {
    return o$1==null?v:o$1.$0;
   }),function(x)
   {
    return g(f(x));
   })),View.Bind((f$1=(m=(o=this.elems,function(a)
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
    return View$1.insertWO(f$1(x));
   }),this.selV.get_View()));
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
 LayoutEngine$1.addLayout0=function(lyt)
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
  return predO!=null&&predO.$==1?View.MapSeqCachedViewBy(m.key,get,(((Runtime$1.Curried3(View.Map2))(a))(m["var"].get_View()))(predO.$0)):View.MapSeqCachedViewBy(m.key,get,m["var"].get_View());
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
  selectedV=new FromView.New((b=View.get_Do(),View.Bind(function(a)
  {
   var sel;
   return a!=null&&a.$==1?(sel=a.$0,View.Bind(function(a$1)
   {
    return!a$1?View.Const(null):View.Const({
     $:1,
     $0:sel
    });
   },elements.ContainsKeyAsView(sel))):View.Const(null);
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
   var x;
   x=selectedV.Get();
   (Option.iter(function(k)
   {
    _delete(k,null);
   }))(x);
  },def);
  elUIF=elUI(result);
  return ListModelData.New(result.elems,Doc.Convert(Global.id,ListModel.MapLens(predWO,function(k,v)
  {
   return(elUIF(View.Const({
    $:1,
    $0:k
   })))(v);
  },elements)),result.selV,result.add,result.delCur,result.def);
 };
 LM.getDoc=function(keyF,def,newF,predWO,elUI)
 {
  return LM.getDocFor(ListModel$1.Create(keyF,T.Empty),def,newF,predWO,elUI);
 };
 LM.addElements=function(li,elems)
 {
  li.elems.AppendMany(elems);
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
  }),null,Runtime$1.Curried3(e));
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
  }),null,Runtime$1.Curried3(e));
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
  }),def],x,null,Runtime$1.Curried3(e));
 };
 LMX.addElements=function(li,elems)
 {
  Seq$1.iter(function(v)
  {
   li.elems.Append([(li.add())[0],v]);
  },elems);
 };
 SnippetTemplates.html=function()
 {
  SC$1.$cctor();
  return SC$1.html$1;
 };
 NewLY.concat=function(a,b)
 {
  return(((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1("Concat("+Global.String($2)+", "+$3.toFixed(6)+")");
  }))(Global.id))(a))(b);
 };
 NewLY.aV=function()
 {
  SC$1.$cctor();
  return SC$1.aV;
 };
 NewLY.pa=function()
 {
  SC$1.$cctor();
  return SC$1.pa;
 };
 NewLY.pb=function()
 {
  SC$1.$cctor();
  return SC$1.pb;
 };
 NewLY.currentPlugInNameDef=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInNameDef$1;
 };
 NewLY.currentPlugInNameD=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInNameD$1;
 };
 NewLY.name=function()
 {
  SC$1.$cctor();
  return SC$1.name;
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
  SC$1.$cctor();
  return SC$1.enterName;
 };
 NewLY.now=function()
 {
  SC$1.$cctor();
  return SC$1.now;
 };
 NewLY.sayHello=function()
 {
  SC$1.$cctor();
  return SC$1.sayHello;
 };
 NewLY.aString=function()
 {
  SC$1.$cctor();
  return SC$1.aString;
 };
 NewLY.main0=function()
 {
  SC$1.$cctor();
  return SC$1.main0;
 };
 NewLY.main1=function()
 {
  SC$1.$cctor();
  return SC$1.main1;
 };
 NewLY.main=function()
 {
  SC$1.$cctor();
  return SC$1.main;
 };
 NewLY.main2=function()
 {
  SC$1.$cctor();
  return SC$1.main2;
 };
 NewLY.appFwk=function()
 {
  SC$1.$cctor();
  return SC$1.appFwk;
 };
 NewLY.split=function()
 {
  SC$1.$cctor();
  return SC$1.split;
 };
 NewLY.split2=function()
 {
  SC$1.$cctor();
  return SC$1.split2;
 };
 NewLY.callDocPFn=function(pin,pf)
 {
  var f;
  f=P$1.run(pin,pf);
  return AppFramework.makeAViewDoc(function()
  {
   var m;
   m=f.f.$==0?f.p.$==1?{
    $:0,
    $0:View.Apply(f.f.$0,View.Const(f.p.$0))
   }:{
    $:0,
    $0:View.Apply(f.f.$0,f.p.$0)
   }:f.p.$==0?{
    $:0,
    $0:View.Apply(View.Const(f.f.$0),f.p.$0)
   }:{
    $:1,
    $0:f.f.$0(f.p.$0)
   };
   return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
  });
 };
 NewLY.pName=function()
 {
  SC$1.$cctor();
  return SC$1.pName;
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
 NewLY.itemRefToString=function(a)
 {
  return a.$==1?(((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1(Utils.toSafe($2)+"."+Utils.toSafe($3));
  }))(Global.id))(a.$0))(a.$1):a.$0;
 };
 NewLY.textValToTextType=function(a)
 {
  var $1;
  return(a.$==1?($1=a.$0.$0,false):a.$==2?($1=a.$0.$0,false):true)?{
   $:0,
   $0:a.$0
  }:NewLY.itemRefToTextType($1);
 };
 NewLY.ActRVs=function(a)
 {
  return List.ofArray([{
   $:1,
   $0:{
    $:0,
    $0:a.$0
   }
  }]);
 };
 NewLY.attrValToAttrD=function()
 {
  SC$1.$cctor();
  return SC$1.attrValToAttrD;
 };
 NewLY.nodeRefToDocD=function()
 {
  SC$1.$cctor();
  return SC$1.nodeRefToDocD;
 };
 NewLY.varRefToVarD=function()
 {
  SC$1.$cctor();
  return SC$1.varRefToVarD;
 };
 NewLY.getParamD=function()
 {
  SC$1.$cctor();
  return SC$1.getParamD;
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
 NewLY.getParam2D=function()
 {
  SC$1.$cctor();
  return SC$1.getParam2D;
 };
 NewLY.getParamTextD=function()
 {
  SC$1.$cctor();
  return SC$1.getParamTextD;
 };
 NewLY.defVar=function(lytN,n,v)
 {
  return Var$1.Create$1(v);
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
     o$1=(t=(AppFramework.splitName(UoM$1.Untag$3(a$1)))(r),AppFramework.tryGetAct(t[0],t[1]));
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
               return testing_GeneratedPrintf.p$11($8);
              },$6)+" "+GeneratedPrintf.p($7));
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
 NewLY.defInput=function(lytN,n,v,attrs)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.attrValToAttrD(),function(a)
   {
    return b.Bind(NewLY.varRefToVarD(),function(a$1)
    {
     return b.Return(AppFramework.makeAViewDocL(function()
     {
      return Doc.Input(Seq$1.map(a,attrs),a$1(v));
     }));
    });
   });
  })));
 };
 NewLY.defTextArea=function(lytN,n,v,attrs)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.attrValToAttrD(),function(a)
   {
    return b.Bind(NewLY.varRefToVarD(),function(a$1)
    {
     return b.Return(AppFramework.makeAViewDocL(function()
     {
      return Doc.InputArea(Seq$1.map(a,attrs),a$1(v));
     }));
    });
   });
  })));
 };
 NewLY.defElement=function(lytN,n,elem,attrs,docs)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.attrValToAttrD(),function(a)
   {
    return b.Bind(NewLY.nodeRefToDocD(),function(a$1)
    {
     return b.Return(AppFramework.makeAViewDocL(function()
     {
      return Doc.Element(elem,Seq$1.map(a,attrs),Seq$1.map(a$1,docs));
     }));
    });
   });
  })));
 };
 NewLY.defConcat=function(lytN,n,docs)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.attrValToAttrD(),function()
   {
    return b.Bind(NewLY.nodeRefToDocD(),function(a)
    {
     return b.Return(AppFramework.makeAViewDocL(function()
     {
      return Doc.Concat(Seq$1.map(a,docs));
     }));
    });
   });
  })));
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
     var o,o$1,t,x;
     function passParm($1,$2)
     {
      var a$3,f1;
      return $2.$==1?$1.$==1?(a$3=$2.$0,(f1=$1.$0,{
       $:0,
       $0:Lazy.Create(function()
       {
        return f1(a$2(a$3));
       })
      })):$1.$==2?passParm({
       $:1,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2
      },$2.$1):$1.$==3?passParm({
       $:2,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2,
       $2:$1.$3
      },$2.$1):$1.$==4?passParm({
       $:3,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2,
       $2:$1.$3,
       $3:$1.$4
      },$2.$1):$1.$==5?passParm({
       $:4,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2,
       $2:$1.$3,
       $3:$1.$4,
       $4:$1.$5
      },$2.$1):{
       $:0,
       $0:$1.$0
      }:$1;
     }
     return b.Return((o=(o$1=(t=(x=NewLY.itemRefToString(dc),((LayoutEngineModule.splitName())(UoM$1.Untag$3(a$1)))(x)),AppFramework.tryGetDoc(t[0],t[1])),o$1==null?null:{
      $:1,
      $0:passParm(o$1.$0.docDoc,ds)
     }),o==null?{
      $:0,
      $0:Lazy.Create(function()
      {
       return AppFramework.errDoc((function($1)
       {
        return function($2)
        {
         return $1("Missing doc: "+testing_GeneratedPrintf.p($2));
        };
       }(Global.id))(dc));
      })
     }:o.$0));
    });
   });
  })));
 };
 NewLY.defButton=function(lytN,n,ac,attrs,tx)
 {
  return NewLY.defElement(lytN,n,"button",Seq$1.append([{
   $:2,
   $0:"click",
   $1:ac
  }],attrs),List.ofArray([{
   $:0,
   $0:tx
  }]));
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
    return b.Return(Lazy.Create(function()
    {
     function getDoc(d)
     {
      return AppFramework.makeAViewDoc(function()
      {
       return a$2(List.ofArray([NewLY.itemRefToTextType(d)]));
      });
     }
     return m.$==1?LayoutEngineModule.variableSplitter(v,m.$0,m.$1,m.$2,getDoc(l),getDoc(r)):LayoutEngineModule.fixedSplitter(v,m.$0,m.$1,getDoc(l),getDoc(r));
    }));
   });
  })));
 };
 NewLY.initVal=function()
 {
  SC$1.$cctor();
  return SC$1.initVal;
 };
 NewLY.defVarM0=function()
 {
  SC$1.$cctor();
  return SC$1.defVarM0;
 };
 NewLY.defVarM=function(l,n,i)
 {
  var v;
  v=(NewLY.defVarM0())([l,n,NewLY.initVal()]);
  v.Get()===NewLY.initVal()?v.Set(i):void 0;
  return v;
 };
 NewLY.defDocFM=function()
 {
  SC$1.$cctor();
  return SC$1.defDocFM;
 };
 NewLY.defActionM=function()
 {
  SC$1.$cctor();
  return SC$1.defActionM;
 };
 NewLY.defButtonM=function()
 {
  SC$1.$cctor();
  return SC$1.defButtonM;
 };
 NewLY.defInputM=function()
 {
  SC$1.$cctor();
  return SC$1.defInputM;
 };
 NewLY.defTextAreaM=function()
 {
  SC$1.$cctor();
  return SC$1.defTextAreaM;
 };
 NewLY.defElementM=function()
 {
  SC$1.$cctor();
  return SC$1.defElementM;
 };
 NewLY.defConcatM=function()
 {
  SC$1.$cctor();
  return SC$1.defConcatM;
 };
 NewLY.defViewJSM=function()
 {
  SC$1.$cctor();
  return SC$1.defViewJSM;
 };
 NewLY.defSplitterM=function()
 {
  SC$1.$cctor();
  return SC$1.defSplitterM;
 };
 NewLY.generateEntries=function(lytN)
 {
  function c($1,$2)
  {
   return $2.$==2?{
    $:1,
    $0:{
     $:0,
     $0:AppFramework.newVar($1,NewLY.defVarM(lytN,$1,$2.$0.$0))
    }
   }:$2.$==0?$2.$0.$==1?{
    $:1,
    $0:{
     $:2,
     $0:AppFramework.newDoc($1,(NewLY.defButtonM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2]))
    }
   }:$2.$0.$==2?{
    $:1,
    $0:{
     $:2,
     $0:AppFramework.newDoc($1,(NewLY.defInputM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]))
    }
   }:$2.$0.$==3?{
    $:1,
    $0:{
     $:2,
     $0:AppFramework.newDoc($1,(NewLY.defTextAreaM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]))
    }
   }:$2.$0.$==5?{
    $:1,
    $0:{
     $:2,
     $0:AppFramework.newDoc($1,(NewLY.defConcatM())([lytN,$1,$2.$0.$0.$0]))
    }
   }:$2.$0.$==6?{
    $:1,
    $0:{
     $:2,
     $0:AppFramework.newDoc($1,(NewLY.defElementM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2]))
    }
   }:$2.$0.$==4?{
    $:1,
    $0:{
     $:2,
     $0:AppFramework.newDocF($1,(NewLY.defDocFM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]))
    }
   }:{
    $:1,
    $0:{
     $:2,
     $0:AppFramework.newDoc($1,(NewLY.defSplitterM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2,$2.$0.$0.$3]))
    }
   }:$2.$==1?{
    $:1,
    $0:{
     $:3,
     $0:AppFramework.newActF($1,(NewLY.defActionM())([lytN,$1,$2.$0.$0,$2.$0.$1]))
    }
   }:$2.$==3?{
    $:1,
    $0:{
     $:1,
     $0:AppFramework.newViw($1,(NewLY.defViewJSM())([lytN,$1,$2.$0.$0]))
    }
   }:null;
  }
  return function(s)
  {
   return Seq$1.choose(function($1)
   {
    return c($1[0],$1[1]);
   },s);
  };
 };
 NewLY.parseNewLayout=function(lytN)
 {
  var f,g,g$1;
  function f$1(t)
  {
   return LayoutEngineModule.parseEntries(lytN,t);
  }
  function c(a)
  {
   return a.$==1?(Library.print(a.$0),null):{
    $:1,
    $0:a.$0
   };
  }
  f=(g=function(s)
  {
   return Seq$1.choose(c,s);
  },function(x)
  {
   return g(f$1(x));
  });
  g$1=NewLY.generateEntries(lytN);
  return function(x)
  {
   return g$1(f(x));
  };
 };
 NewLY.addLayout=function(lyt)
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
   return Seq$1.append(entries,s);
  }
  parseW=View.Map((l=lyt.lytName,function(t)
  {
   return LayoutEngineModule.parseEntries(l,t);
  }),lyt.lytDefinition.get_View());
  errorsW=View.Map((f=function(s)
  {
   return Seq$1.choose(c,s);
  },function(x)
  {
   return g$2(f(x));
  }),parseW);
  defsW=View.Map((f$1=function(s)
  {
   return Seq$1.choose(c$1,s);
  },(g=NewLY.generateEntries(UoM$1.Tag$3(lyt.lytName)),function(x)
  {
   return g(f$1(x));
  })),parseW);
  entries=List.ofArray([{
   $:0,
   $0:AppFramework.newVar("Layout",lyt.lytDefinition)
  },{
   $:1,
   $0:AppFramework.newViw("ParseMsgs",errorsW)
  }]);
  View.Sink((g$1=(l$1=UoM$1.Untag$3(lyt.lytName),function(e)
  {
   LayoutEngineModule.refreshEntries(l$1,e);
  }),function(x)
  {
   return g$1(f$2(x));
  }),defsW);
 };
 P$1.run=function(pin,p)
 {
  return AppFramework.run(pin,p.r);
 };
 DragDrop.set_drag=function($1)
 {
  SC$1.$cctor();
  SC$1.drag=$1;
 };
 DragDrop.drag=function()
 {
  SC$1.$cctor();
  return SC$1.drag;
 };
 DragDrop.setDragNone=function()
 {
  DragDrop.set_drag(DragInfo.DragNone);
 };
 DragDrop.setDragNode=function(tnid)
 {
  DragDrop.set_drag({
   $:1,
   $0:tnid
  });
 };
 DragDrop.getDragNIdO=function(tnId)
 {
  var $1;
  return DragDrop.drag().$==1&&(!Unchecked.Equals(DragDrop.drag().$0,tnId)&&($1=DragDrop.drag().$0,true))?{
   $:1,
   $0:$1
  }:null;
 };
 DragInfo.DragNone={
  $:0
 };
 SnippetsUI.TemplateFileName=function()
 {
  SC$1.$cctor();
  return SC$1.TemplateFileName$1;
 };
 SnippetsUI.snippetsLM=function()
 {
  SC$1.$cctor();
  return SC$1.snippetsLM;
 };
 SnippetsUI.collapsedV=function()
 {
  SC$1.$cctor();
  return SC$1.collapsedV;
 };
 SnippetsUI.codeSnippetIdV=function()
 {
  SC$1.$cctor();
  return SC$1.codeSnippetIdV;
 };
 SnippetsUI.searchFor=function()
 {
  SC$1.$cctor();
  return SC$1.searchFor;
 };
 SnippetsUI.allPredecessors=function()
 {
  SC$1.$cctor();
  return SC$1.allPredecessors;
 };
 SnippetsUI.indPredIds=function()
 {
  SC$1.$cctor();
  return SC$1.indPredIds;
 };
 SnippetsUI.allCodePredsW=function()
 {
  SC$1.$cctor();
  return SC$1.allCodePredsW;
 };
 SnippetsUI.allCodePredIdsW=function()
 {
  SC$1.$cctor();
  return SC$1.allCodePredIdsW;
 };
 SnippetsUI.shdDef=function()
 {
  SC$1.$cctor();
  return SC$1.shdDef;
 };
 SnippetsUI.processHier=function(snps,collapsed)
 {
  var path,collapse,dSnps,i,e;
  dSnps=new Dictionary.New$5();
  path=[];
  collapse=0;
  i=Seq$1.indexed(snps);
  e=Enumerator.Get(i);
  try
  {
   while(e.MoveNext())
    (function()
    {
     var f,sid,pidO,k,p,pid,m,j,pth,lvl,o,o$1;
     function p$1(a,spid)
     {
      return Unchecked.Equals(spid,pid);
     }
     f=e.Current();
     sid=f[1][0];
     pidO=f[1][1];
     k=f[0];
     p=pidO!=null&&pidO.$==1?(pid=pidO.$0,(m=Seq$1.tryFind(function($1)
     {
      return p$1($1[0],$1[1]);
     },Seq$1.indexed(path)),m!=null&&m.$==1?(j=m.$0[0],[j+1,Slice.array(path,{
      $:1,
      $0:0
     },{
      $:1,
      $0:j
     }),null]):[0,[],{
      $:1,
      $0:(function($1)
      {
       return function($2)
       {
        return $1("Parent not found in path "+Utils.prettyPrint($2));
       };
      }(Global.id))(pid)
     }])):[0,[],null];
     pth=p[1];
     lvl=p[0];
     dSnps.Add(sid,SnippetHierData.New(lvl,k,(o=(o$1=Seq$1.tryItem(k+1,snps),o$1==null?null:{
      $:1,
      $0:Unchecked.Equals({
       $:1,
       $0:sid
      },o$1.$0[1])
     }),o==null?false:o.$0),collapse>=lvl,pth,p[2]));
     path=pth.concat([sid]);
     return collapse>=lvl?void(collapse=collapsed.Contains(sid)?lvl:lvl+1):null;
    }());
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
  return dSnps;
 };
 SnippetsUI.snpIdParentsW=function()
 {
  SC$1.$cctor();
  return SC$1.snpIdParentsW;
 };
 SnippetsUI.processHierW=function()
 {
  SC$1.$cctor();
  return SC$1.processHierW;
 };
 SnippetsUI.docWrap=function(wrapper,doc)
 {
  return(wrapper([]))([doc]);
 };
 SnippetsUI.moveNode=function(frid,toid)
 {
  View.Get(function(hier)
  {
   var $1,res,$2,res$1,$3,$4,frdt,frsn,todt,elems,n,newSn,a;
   $1=(res=null,hier.TryGetValue(frid,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?{
    $:1,
    $0:res
   }:null);
   $2=(res$1=null,hier.TryGetValue(toid,{
    get:function()
    {
     return res$1;
    },
    set:function(v)
    {
     res$1=v;
    }
   })?{
    $:1,
    $0:res$1
   }:null);
   $3=SnippetsUI.snippetsLM().TryFindByKey(frid);
   $4=SnippetsUI.snippetsLM().TryFindByKey(toid);
   $1!=null&&$1.$==1?$2!=null&&$2.$==1?$3!=null&&$3.$==1?$4!=null&&$4.$==1?(frdt=$1.$0,frsn=$3.$0,todt=$2.$0,Seq$1.contains(frid,todt.path)?void 0:(elems=Arrays.ofSeq((SnippetsUI.snippetsLM())["var"].Get()),n=function(i)
   {
    var res$2,m,m$1;
    while(true)
     {
      m=Arrays.tryItem(i+1,elems);
      if(m!=null&&m.$==1)
       {
        m$1=(res$2=null,hier.TryGetValue(m.$0.snpId,{
         get:function()
         {
          return res$2;
         },
         set:function(v)
         {
          res$2=v;
         }
        })?{
         $:1,
         $0:res$2
        }:null);
        if(m$1!=null&&m$1.$==1)
        {
         if(Seq$1.contains(frid,m$1.$0.path))
          i=i+1;
         else
          return i;
        }
        else
         return i;
       }
      else
       return i;
     }
   }(frdt.pos),newSn=Snippet.New(frsn.snpId,frsn.snpName,frsn.snpContent,$4.$0.snpParentIdO,frsn.snpPredIds,frsn.snpProperties,frsn.snpModified),a=Arrays.concat(frdt.pos<todt.pos?[Slice.array(elems,{
    $:1,
    $0:0
   },{
    $:1,
    $0:frdt.pos-1
   }),Slice.array(elems,{
    $:1,
    $0:n+1
   },{
    $:1,
    $0:todt.pos-1
   }),[newSn],Slice.array(elems,{
    $:1,
    $0:frdt.pos+1
   },{
    $:1,
    $0:n
   }),Slice.array(elems,{
    $:1,
    $0:todt.pos
   },null)]:[Slice.array(elems,{
    $:1,
    $0:0
   },{
    $:1,
    $0:todt.pos-1
   }),[newSn],Slice.array(elems,{
    $:1,
    $0:frdt.pos+1
   },{
    $:1,
    $0:n
   }),Slice.array(elems,{
    $:1,
    $0:todt.pos
   },{
    $:1,
    $0:frdt.pos-1
   }),Slice.array(elems,{
    $:1,
    $0:n+1
   },null)]),SnippetsUI.snippetsLM().Set(a))):void 0:void 0:void 0:void 0;
  },SnippetsUI.processHierW());
 };
 SnippetsUI.calcUI=function(wrapper,allowDelete,lmd)
 {
  var indSelPredIdsW,v,prior;
  indSelPredIdsW=View.Map(function($1)
  {
   return(SnippetsUI.indPredIds())($1);
  },(v=View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    return[$1.snpId,$2.snpParentIdO,$3.snpPredIds];
   };
  },lmd.get_CurrentV().get_View(),lmd.get_CurrentV().get_View()),lmd.get_CurrentV().get_View()),(prior=[Var$1.Create$1(null)],(View.Sink(function(v$1)
  {
   if(!Unchecked.Equals(prior[0].Get(),v$1))
    prior[0].Set(v$1);
  },v),prior[0].get_View()))));
  return function(k)
  {
   return function(snp)
   {
    var snpdW,b,t,t$1,t$2,t$3,t$4,p,i;
    View.Map(function($1)
    {
     return $1==null;
    },k);
    snpdW=View.Map2(function($1,$2)
    {
     var o,k$1,v$1;
     o=(k$1=$2.snpId,function(d)
     {
      var res;
      res=null;
      return d.TryGetValue(k$1,{
       get:function()
       {
        return res;
       },
       set:function(v$2)
       {
        res=v$2;
       }
      })?{
       $:1,
       $0:res
      }:null;
     }($1));
     v$1=SnippetsUI.shdDef();
     return o==null?v$1:o.$0;
    },SnippetsUI.processHierW(),snp.get_View());
    return SnippetsUI.docWrap(wrapper,(b=(t=(t$1=(t$2=(t$3=(t$4=ProviderBuilder.Make().WithHole({
     $:2,
     $0:"name",
     $1:View.Map2(function($1,$2)
     {
      return($1.errorO==null?Global.id:function($3)
      {
       return function($4)
       {
        return $3("!"+Utils.toSafe($4));
       };
      }(Global.id))($2.snpName);
     },snpdW,snp.get_View())
    }).WithHole({
     $:2,
     $0:"selected",
     $1:View.Map2(function($1,$2)
     {
      return Unchecked.Equals($1,$2)?"selected":"";
     },lmd.selV.get_View(),k)
    }).WithHole({
     $:2,
     $0:"predecessor",
     $1:View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
     {
      return Runtime$1.Curried3(function($3,$4,$5)
      {
       var key;
       return $1!=null&&$1.$==1?(key=$1.$0,(Seq$1.contains(key,$2.snpPredIds)?"direct-predecessor":Seq$1.contains(key,$3)?"indirect-predecessor":Seq$1.contains(key,$4)?"included-predecessor":"")+(Unchecked.Equals($5,$1)?" codeSnippet":"")):"";
      });
     },k,lmd.get_CurrentV().get_View()),indSelPredIdsW),SnippetsUI.allCodePredIdsW()),SnippetsUI.codeSnippetIdV().get_View())
    }),t$4.WithHole(Handler.EventQ2(t$4.k,"select",function()
    {
     return t$4.i;
    },function()
    {
     var o;
     View.Get((o=lmd.selV,function(a)
     {
      o.Set(a);
     }),k);
    }))).WithHole({
     $:2,
     $0:"indent",
     $1:View.Map(function($1)
     {
      return Global.String(1.5*$1.level);
     },snpdW)
    }).WithHole({
     $:2,
     $0:"parent",
     $1:View.Apply(View.Map2(function($1,$2)
     {
      return function($3)
      {
       return $1.hasChildren?$2.Contains($3.snpId)?"collapsed":"expanded":"";
      };
     },snpdW,SnippetsUI.collapsedV().get_View()),snp.get_View())
    }),t$3.WithHole(Handler.EventQ2(t$3.k,"togglecollapse",function()
    {
     return t$3.i;
    },function()
    {
     View.Get(function(snpd)
     {
      var a;
      if(snpd.hasChildren)
       {
        a=((SnippetsUI.collapsedV().Get().Contains(snp.Get().snpId)?function(v$1)
        {
         return function(s)
         {
          return s.Remove(v$1);
         };
        }:function(v$1)
        {
         return function(s)
         {
          return s.Add(v$1);
         };
        })(snp.Get().snpId))(SnippetsUI.collapsedV().Get());
        SnippetsUI.collapsedV().Set(a);
       }
     },snpdW);
    }))),t$2.WithHole(Handler.EventQ2(t$2.k,"drag",function()
    {
     return t$2.i;
    },function(ev)
    {
     View.Get(function(a)
     {
      if(a!=null&&a.$==1)
       {
        DragDrop.setDragNode(a.$0);
        ev.Event.stopPropagation();
       }
     },k);
    }))),t$1.WithHole(Handler.EventQ2(t$1.k,"dragover",function()
    {
     return t$1.i;
    },function(ev)
    {
     View.Get(function(a)
     {
      if(a!=null&&a.$==1)
       if(DragDrop.getDragNIdO(a.$0)!=null)
        ev.Event.preventDefault();
     },k);
    }))),t.WithHole(Handler.EventQ2(t.k,"drop",function()
    {
     return t.i;
    },function(ev)
    {
     ev.Event.preventDefault();
     View.Get(function(a)
     {
      var sid,x;
      if(a!=null&&a.$==1)
       {
        sid=a.$0;
        x=DragDrop.getDragNIdO(sid);
        (Option.iter(function(fr)
        {
         SnippetsUI.moveNode(fr,sid);
        }))(x);
       }
     },k);
    }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.snippet(p[0])),(b.i=i,i)))).get_Doc());
   };
  };
 };
 SnippetsUI.search=function()
 {
  SC$1.$cctor();
  return SC$1.search;
 };
 SnippetsUI.wrapNothing=function(a)
 {
  return Doc.Concat;
 };
 SnippetsUI.snippetList=function()
 {
  SC$1.$cctor();
  return SC$1.snippetList;
 };
 SnippetsUI.currentSnippetV=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetV;
 };
 SnippetsUI.currentSnippetNameV=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetNameV;
 };
 SnippetsUI.currentSnippetContentV=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetContentV;
 };
 SnippetsUI.curSnp=function()
 {
  SC$1.$cctor();
  return SC$1.curSnp;
 };
 SnippetsUI.selectorLensGuidId=function(sel)
 {
  var f;
  function g(o)
  {
   return o==null?null:{
    $:1,
    $0:UoM$1.Tag$4(o.$0)
   };
  }
  return(Util.selectorLens(Global.String,(f=ParseO.parseGuidO(),function(x)
  {
   return g(f(x));
  })))(sel);
 };
 SnippetsUI.monacoNew=function(_var)
 {
  return GenEditor.onRender(function(ged)
  {
   var x;
   x=ged.editorO;
   (Option.iter(function(ed)
   {
    var _m;
    _m=ed.getModel();
    self.monaco.editor.setModelLanguage(_m,"fsharp");
   }))(x);
   self.monaco.editor.setTheme("vs-dark");
  },MonacoGenAdapter.newVar(function()
  {
   return{};
  },function()
  {
   return{};
  },_var));
 };
 SnippetsUI.monaco=function()
 {
  SC$1.$cctor();
  return SC$1.monaco;
 };
 SnippetsUI.addSnippet=function()
 {
  View.Get(function(hier)
  {
   var elems,newS,sid,m,res,n,a;
   elems=Arrays.ofSeq((SnippetsUI.snippetsLM())["var"].Get());
   newS=SnippetsUI.snippetList().add();
   sid=SnippetsUI.currentSnippetV().Get().snpId;
   m=(res=null,hier.TryGetValue(sid,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?{
    $:1,
    $0:res
   }:null);
   m!=null&&m.$==1?(n=function(i)
   {
    var res$1,m$1,m$2;
    while(true)
     {
      m$1=Arrays.tryItem(i+1,elems);
      if(m$1!=null&&m$1.$==1)
       {
        m$2=(res$1=null,hier.TryGetValue(m$1.$0.snpId,{
         get:function()
         {
          return res$1;
         },
         set:function(v)
         {
          res$1=v;
         }
        })?{
         $:1,
         $0:res$1
        }:null);
        if(m$2!=null&&m$2.$==1)
        {
         if(Seq$1.contains(sid,m$2.$0.path))
          i=i+1;
         else
          return i;
        }
        else
         return i;
       }
      else
       return i;
     }
   }(m.$0.pos),a=Arrays.concat([Slice.array(elems,{
    $:1,
    $0:0
   },{
    $:1,
    $0:n
   }),[Snippet.New(newS.snpId,newS.snpName,newS.snpContent,SnippetsUI.currentSnippetV().Get().snpParentIdO,newS.snpPredIds,newS.snpProperties,newS.snpModified)],Slice.array(elems,{
    $:1,
    $0:n+1
   },null)]),SnippetsUI.snippetsLM().Set(a)):void 0;
  },SnippetsUI.processHierW());
 };
 SnippetsUI.deleteSnippet=function()
 {
  View.Get(function(hier)
  {
   var sid,pidO,m,res,hdt,elems,a;
   sid=SnippetsUI.currentSnippetV().Get().snpId;
   pidO=SnippetsUI.currentSnippetV().Get().snpParentIdO;
   m=(res=null,hier.TryGetValue(sid,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?{
    $:1,
    $0:res
   }:null);
   m!=null&&m.$==1?(hdt=m.$0,elems=Arrays.ofSeq((SnippetsUI.snippetsLM())["var"].Get()),function(i)
   {
    var res$1,m$1,snp,m$2;
    while(true)
     {
      m$1=Arrays.tryItem(i,elems);
      if(m$1!=null&&m$1.$==1)
       {
        snp=m$1.$0;
        if(Unchecked.Equals(snp.snpParentIdO,{
         $:1,
         $0:sid
        }))
         {
          Arrays.set(elems,i,Snippet.New(snp.snpId,snp.snpName,snp.snpContent,pidO,snp.snpPredIds,snp.snpProperties,snp.snpModified));
          i=i+1;
         }
        else
         {
          m$2=(res$1=null,hier.TryGetValue(snp.snpId,{
           get:function()
           {
            return res$1;
           },
           set:function(v)
           {
            res$1=v;
           }
          })?{
           $:1,
           $0:res$1
          }:null);
          if(m$2!=null&&m$2.$==1)
          {
           if(Seq$1.contains(sid,m$2.$0.path))
            i=i+1;
           else
            return null;
          }
          else
           return null;
         }
       }
      else
       return null;
     }
   }(hdt.pos+1),a=Arrays.concat([Slice.array(elems,{
    $:1,
    $0:0
   },{
    $:1,
    $0:hdt.pos-1
   }),Slice.array(elems,{
    $:1,
    $0:hdt.pos+1
   },null)]),SnippetsUI.snippetsLM().Set(a)):void 0;
  },SnippetsUI.processHierW());
 };
 SnippetsUI.indentIn=function()
 {
  View.Get(function(hier)
  {
   var x,k;
   x=(k=SnippetsUI.currentSnippetV().Get().snpId,function(d)
   {
    var res;
    res=null;
    return d.TryGetValue(k,{
     get:function()
     {
      return res;
     },
     set:function(v)
     {
      res=v;
     }
    })?{
     $:1,
     $0:res
    }:null;
   }(hier));
   (Option.iter(function(hdt)
   {
    var pidO,x$1;
    pidO=SnippetsUI.currentSnippetV().Get().snpParentIdO;
    x$1=function(i)
    {
     var snp;
     while(true)
      if(i===0)
       return null;
      else
       {
        snp=Seq$1.nth(i-1,(SnippetsUI.snippetsLM())["var"].Get());
        if(Unchecked.Equals({
         $:1,
         $0:snp.snpId
        },pidO))
         return null;
        else
         if(Unchecked.Equals(snp.snpParentIdO,pidO))
          return{
           $:1,
           $0:snp.snpId
          };
         else
          i=i-1;
       }
    }(hdt.pos);
    (Option.iter(function(pid)
    {
     Var$1.Lens(SnippetsUI.currentSnippetV(),function($1)
     {
      return $1.snpParentIdO;
     },function($1,$2)
     {
      return Snippet.New($1.snpId,$1.snpName,$1.snpContent,$2,$1.snpPredIds,$1.snpProperties,$1.snpModified);
     }).Set({
      $:1,
      $0:pid
     });
    }))(x$1);
   }))(x);
  },SnippetsUI.processHierW());
 };
 SnippetsUI.indentOut=function()
 {
  View.Get(function(hier)
  {
   var sid,$1,res,$2,hdt,pid,newPidO,elems,m,b,a,a$1;
   sid=SnippetsUI.currentSnippetV().Get().snpId;
   $1=(res=null,hier.TryGetValue(sid,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?{
    $:1,
    $0:res
   }:null);
   $2=SnippetsUI.currentSnippetV().Get().snpParentIdO;
   $1!=null&&$1.$==1?$2!=null&&$2.$==1?(hdt=$1.$0,pid=$2.$0,newPidO=Seq$1.tryItem(Arrays.length(hdt.path)-2,hdt.path),!Unchecked.Equals({
    $:1,
    $0:pid
   },newPidO)?(Var$1.Lens(SnippetsUI.currentSnippetV(),function($3)
   {
    return $3.snpParentIdO;
   },function($3,$4)
   {
    return Snippet.New($3.snpId,$3.snpName,$3.snpContent,$4,$3.snpPredIds,$3.snpProperties,$3.snpModified);
   }).Set(newPidO),elems=Arrays.ofSeq((SnippetsUI.snippetsLM())["var"].Get()),m=function(k,i)
   {
    var res$1,m$1,m$2,shd;
    while(true)
     {
      m$1=Arrays.tryItem(i+1,elems);
      if(m$1!=null&&m$1.$==1)
       {
        m$2=(res$1=null,hier.TryGetValue(m$1.$0.snpId,{
         get:function()
         {
          return res$1;
         },
         set:function(v)
         {
          res$1=v;
         }
        })?{
         $:1,
         $0:res$1
        }:null);
        if(m$2!=null&&m$2.$==1)
         {
          shd=m$2.$0;
          if(Seq$1.contains(sid,shd.path))
           {
            k=i+1;
            i=i+1;
           }
          else
           if(Seq$1.contains(pid,shd.path))
            i=i+1;
           else
            return{
             $:1,
             $0:[k,i]
            };
         }
        else
         return null;
       }
      else
       return null;
     }
   }(hdt.pos,hdt.pos),m!=null&&m.$==1?(b=m.$0[1],a=m.$0[0],a$1=Arrays.concat([Slice.array(elems,{
    $:1,
    $0:0
   },{
    $:1,
    $0:hdt.pos-1
   }),Slice.array(elems,{
    $:1,
    $0:a+1
   },{
    $:1,
    $0:b
   }),Slice.array(elems,{
    $:1,
    $0:hdt.pos
   },{
    $:1,
    $0:a
   }),Slice.array(elems,{
    $:1,
    $0:b+1
   },null)]),SnippetsUI.snippetsLM().Set(a$1)):void 0):void 0):void 0:void 0;
  },SnippetsUI.processHierW());
 };
 SnippetsUI.parseW=function()
 {
  SC$1.$cctor();
  return SC$1.parseW;
 };
 SnippetsUI.target2=function()
 {
  SC$1.$cctor();
  return SC$1.target2;
 };
 SnippetsUI.parseNewLY=function()
 {
  var x,o;
  x=SnippetsUI.currentSnippetContentV().get_View();
  View.Get((o=SnippetsUI.target2().lytDefinition,function(a)
  {
   o.Set(a);
  }),x);
 };
 SnippetsUI.main=function()
 {
  var x;
  x=StartAppFramework.startWithHtmlD();
  (Depend.resolver(List.ofArray([["AppFrameworkTemplate.html",AppFrameworkTemplate.html()+SnippetTemplates.html()]]),x))();
 };
 SnippetHierData.New=function(level,pos,hasChildren,visible,path,errorO)
 {
  return{
   level:level,
   pos:pos,
   hasChildren:hasChildren,
   visible:visible,
   path:path,
   errorO:errorO
  };
 };
 SaveLoad.loadTextFile=function(element)
 {
  var files,reader;
  files=element.files;
  files.length>0?(reader=new FileReader(),reader.onload=function(e)
  {
   var x,x$1;
   try
   {
    x=(x$1=e.target.result,(Serializer$1.deserializeWithDefs((SnippetSerialize.serModel())[0],(SnippetSerialize.serModel())[1]))(x$1));
    return(Option.iter(function(m)
    {
     SnippetsUI.snippetsLM().Set(m.snippets);
     SnippetsUI.collapsedV().Set(m.collapsed);
    }))(x);
   }
   catch(e$1)
   {
    Global.alert(Global.String(e$1));
    return(function($1)
    {
     return function($2)
     {
      return $1(Utils.prettyPrint($2));
     };
    }(function(s)
    {
     console.log(s);
    }))(e$1);
   }
  },reader.readAsText(files.item(0))):void 0;
 };
 SaveLoad.saveAs=function()
 {
  var x;
  Global.saveAs(new Global.Blob([(x=SnippetSerialize.getModel((SnippetsUI.snippetsLM())["var"].Get(),Date.now(),SnippetsUI.collapsedV().Get()),(SnippetSerialize.serModel())[0](x))],{
   type:"text/plain;charset=utf-8"
  }),"noname.snippets");
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
 Operators$5.FailWith=function(msg)
 {
  throw new Error(msg);
 };
 Operators$5.range=function(min,max)
 {
  var count;
  count=1+max-min;
  return count<=0?[]:Seq$1.init(count,function(x)
  {
   return x+min;
  });
 };
 Operators$5.toInt=function(x)
 {
  var u;
  u=Operators$5.toUInt(x);
  return u>=2147483648?u-4294967296:u;
 };
 Operators$5.KeyValue=function(kvp)
 {
  return[kvp.K,kvp.V];
 };
 Operators$5.toUInt=function(x)
 {
  return(x<0?Math.ceil(x):Math.floor(x))>>>0;
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
 Utils.padNumLeft=function(s,l)
 {
  var f;
  f=Arrays.get(s,0);
  return f===" "||f==="+"||f==="-"?f+Strings.PadLeftWith(s.substr(1),l-1,"0"):Strings.PadLeftWith(s,l,"0");
 };
 Utils.printList=function(p,o)
 {
  return"["+Strings.concat("; ",Seq$1.map(p,o))+"]";
 };
 Arrays.get=function(arr,n)
 {
  Arrays.checkBounds(arr,n);
  return arr[n];
 };
 Arrays.set=function(arr,n,x)
 {
  Arrays.checkBounds(arr,n);
  arr[n]=x;
 };
 Arrays.checkBounds=function(arr,n)
 {
  if(n<0||n>=arr.length)
   Operators$5.FailWith("Index was outside the bounds of the array.");
 };
 Arrays.length=function(arr)
 {
  return arr.dims===2?arr.length*arr.length:arr.length;
 };
 Slice.string=function(source,start,finish)
 {
  return start==null?finish!=null&&finish.$==1?source.slice(0,finish.$0+1):"":finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);
 };
 Slice.array=function(source,start,finish)
 {
  return start==null?finish!=null&&finish.$==1?source.slice(0,finish.$0+1):[]:finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);
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
      return Operators$5.FailWith("Cannot compare function values.");
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
 Dictionary=Collections.Dictionary=Runtime$1.Class({
  TryGetValue:function(k,res)
  {
   var $this,d,v;
   $this=this;
   d=this.data[this.hash(k)];
   return d==null?false:(v=Arrays.tryPick(function(a)
   {
    var a$1;
    a$1=Operators$5.KeyValue(a);
    return $this.equals.apply(null,[a$1[0],k])?{
     $:1,
     $0:a$1[1]
    }:null;
   },d),v!=null&&v.$==1&&(res.set(v.$0),true));
  },
  ContainsKey:function(k)
  {
   var $this,d;
   $this=this;
   d=this.data[this.hash(k)];
   return d==null?false:Arrays.exists(function(a)
   {
    return $this.equals.apply(null,[(Operators$5.KeyValue(a))[0],k]);
   },d);
  },
  set_Item:function(k,v)
  {
   this.set(k,v);
  },
  Add:function(k,v)
  {
   this.add(k,v);
  },
  Clear:function()
  {
   this.data=[];
   this.count=0;
  },
  get_Item:function(k)
  {
   return this.get(k);
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
    return $this.equals.apply(null,[(Operators$5.KeyValue(a))[0],k]);
   },d),m==null?(this.count=this.count+1,d.push({
    K:k,
    V:v
   })):d[m.$0]={
    K:k,
    V:v
   });
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
    return $this.equals.apply(null,[(Operators$5.KeyValue(a))[0],k]);
   },d)?DictionaryUtil.alreadyAdded():void 0,this.count=this.count+1,d.push({
    K:k,
    V:v
   }));
  },
  get:function(k)
  {
   var $this,d;
   $this=this;
   d=this.data[this.hash(k)];
   return d==null?DictionaryUtil.notPresent():Arrays.pick(function(a)
   {
    var a$1;
    a$1=Operators$5.KeyValue(a);
    return $this.equals.apply(null,[a$1[0],k])?{
     $:1,
     $0:a$1[1]
    }:null;
   },d);
  },
  Remove:function(k)
  {
   return this.remove(k);
  },
  get_Keys:function()
  {
   return new KeyCollection.New(this);
  },
  remove:function(k)
  {
   var $this,h,d,r;
   $this=this;
   h=this.hash(k);
   d=this.data[h];
   return d==null?false:(r=Arrays.filter(function(a)
   {
    return!$this.equals.apply(null,[(Operators$5.KeyValue(a))[0],k]);
   },d),Arrays.length(r)<d.length&&(this.count=this.count-1,this.data[h]=r,true));
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
 Seq$1.filter=function(f,s)
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
 Seq$1.map=function(f,s)
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
 Seq$1.forall=function(p,s)
 {
  return!Seq$1.exists(function(x)
  {
   return!p(x);
  },s);
 };
 Seq$1.exists=function(p,s)
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
 Seq$1.fold=function(f,x,s)
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
 Seq$1.choose=function(f,s)
 {
  return Seq$1.collect(function(x)
  {
   var m;
   m=f(x);
   return m==null?T.Empty:List.ofArray([m.$0]);
  },s);
 };
 Seq$1.tryFind=function(ok,s)
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
 Seq$1.distinct=function(s)
 {
  return Seq$1.distinctBy(Global.id,s);
 };
 Seq$1.sort=function(s)
 {
  return Seq$1.sortBy(Global.id,s);
 };
 Seq$1.mapi=function(f,s)
 {
  return Seq$1.map2(f,Seq$1.initInfinite(Global.id),s);
 };
 Seq$1.collect=function(f,s)
 {
  return Seq$1.concat(Seq$1.map(f,s));
 };
 Seq$1.tryFindIndex=function(ok,s)
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
 Seq$1.delay=function(f)
 {
  return{
   GetEnumerator:function()
   {
    return Enumerator.Get(f());
   }
  };
 };
 Seq$1.append=function(s1,s2)
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
 Seq$1.head=function(s)
 {
  var e;
  e=Enumerator.Get(s);
  try
  {
   return e.MoveNext()?e.Current():Seq$1.insufficient();
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Seq$1.indexed=function(s)
 {
  return Seq$1.mapi(function($1,$2)
  {
   return[$1,$2];
  },s);
 };
 Seq$1.tryPick=function(f,s)
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
 Seq$1.pairwise=function(s)
 {
  return Seq$1.map(function(x)
  {
   return[Arrays.get(x,0),Arrays.get(x,1)];
  },Seq$1.windowed(2,s));
 };
 Seq$1.isEmpty=function(s)
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
 Seq$1.sortBy=function(f,s)
 {
  return Seq$1.delay(function()
  {
   var array;
   array=Arrays.ofSeq(s);
   Arrays.sortInPlaceBy(f,array);
   return array;
  });
 };
 Seq$1.max=function(s)
 {
  var e,m,x;
  e=Enumerator.Get(s);
  try
  {
   if(!e.MoveNext())
    Seq$1.seqEmpty();
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
 Seq$1.skip=function(n,s)
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
        Seq$1.insufficient();
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
 Seq$1.groupBy=function(f,s)
 {
  return Seq$1.delay(function()
  {
   return Arrays.groupBy(f,Arrays.ofSeq(s));
  });
 };
 Seq$1.iter=function(p,s)
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
 Seq$1.distinctBy=function(f,s)
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
 Seq$1.map2=function(f,s1,s2)
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
 Seq$1.initInfinite=function(f)
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
 Seq$1.concat=function(ss)
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
 Seq$1.init=function(n,f)
 {
  return Seq$1.take(n,Seq$1.initInfinite(f));
 };
 Seq$1.windowed=function(windowSize,s)
 {
  windowSize<=0?Operators$5.FailWith("The input must be positive."):void 0;
  return Seq$1.delay(function()
  {
   return Seq$1.enumUsing(Enumerator.Get(s),function(e)
   {
    var q;
    q=[];
    return Seq$1.append(Seq$1.enumWhile(function()
    {
     return q.length<windowSize&&e.MoveNext();
    },Seq$1.delay(function()
    {
     q.push(e.Current());
     return[];
    })),Seq$1.delay(function()
    {
     return q.length===windowSize?Seq$1.append([q.slice(0)],Seq$1.delay(function()
     {
      return Seq$1.enumWhile(function()
      {
       return e.MoveNext();
      },Seq$1.delay(function()
      {
       q.shift();
       q.push(e.Current());
       return[q.slice(0)];
      }));
     })):[];
    }));
   });
  });
 };
 Seq$1.seqEmpty=function()
 {
  return Operators$5.FailWith("The input sequence was empty.");
 };
 Seq$1.nth=function(index,s)
 {
  var pos,e;
  if(index<0)
   Operators$5.FailWith("negative index requested");
  pos=-1;
  e=Enumerator.Get(s);
  try
  {
   while(pos<index)
    {
     !e.MoveNext()?Seq$1.insufficient():void 0;
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
 Seq$1.cache=function(s)
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
 Seq$1.take=function(n,s)
 {
  n<0?Seq$1.nonNegative():void 0;
  return{
   GetEnumerator:function()
   {
    var e;
    e=[Enumerator.Get(s)];
    return new T$1.New(0,null,function(o)
    {
     var en;
     o.s=o.s+1;
     return o.s>n?false:(en=e[0],Unchecked.Equals(en,null)?Seq$1.insufficient():en.MoveNext()?(o.c=en.Current(),o.s===n?(en.Dispose(),e[0]=null):void 0,true):(en.Dispose(),e[0]=null,Seq$1.insufficient()));
    },function()
    {
     var x;
     x=e[0];
     !Unchecked.Equals(x,null)?x.Dispose():void 0;
    });
   }
  };
 };
 Seq$1.compareWith=function(f,s1,s2)
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
 Seq$1.forall2=function(p,s1,s2)
 {
  return!Seq$1.exists2(function($1,$2)
  {
   return!p($1,$2);
  },s1,s2);
 };
 Seq$1.unfold=function(f,s)
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
 Seq$1.exists2=function(p,s1,s2)
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
 Seq$1.findIndex=function(p,s)
 {
  var m;
  m=Seq$1.tryFindIndex(p,s);
  return m==null?Operators$5.FailWith("KeyNotFoundException"):m.$0;
 };
 Strings.concat=function(separator,strings)
 {
  return Arrays.ofSeq(strings).join(separator);
 };
 Strings.PadRight=function(s,n)
 {
  return Strings.PadRightWith(s,n," ");
 };
 Strings.replicate=function(count,s)
 {
  return Arrays.create(count,s).join("");
 };
 Strings.PadLeft=function(s,n)
 {
  return Strings.PadLeftWith(s,n," ");
 };
 Strings.PadRightWith=function(s,n,c)
 {
  return n>s.length?s+Global.Array(n-s.length+1).join(c):s;
 };
 Strings.Substring=function(s,ix,ct)
 {
  return s.substr(ix,ct);
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
 Strings.EndsWith=function(x,s)
 {
  return x.substring(x.length-s.length)==s;
 };
 Strings.IsNullOrEmpty=function(x)
 {
  return x==null||x=="";
 };
 Strings.PadLeftWith=function(s,n,c)
 {
  return n>s.length?Global.Array(n-s.length+1).join(c)+s:s;
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
 Strings.SplitStrings=function(s,sep,opts)
 {
  return Strings.Split(s,new Global.RegExp(Strings.concat("|",Arrays.map(Strings.RegexEscape,sep))),opts);
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
 Strings.SplitWith=function(str,pat)
 {
  return str.split(pat);
 };
 Strings.forall=function(f,s)
 {
  return Seq$1.forall(f,Strings.protect(s));
 };
 Strings.protect=function(s)
 {
  return s===null?"":s;
 };
 Arrays.map=function(f,arr)
 {
  var r,i,$1;
  r=new Global.Array(arr.length);
  for(i=0,$1=arr.length-1;i<=$1;i++)r[i]=f(arr[i]);
  return r;
 };
 Arrays.foldBack=function(f,arr,zero)
 {
  var acc,$1,len,i,$2;
  acc=zero;
  len=arr.length;
  for(i=1,$2=len;i<=$2;i++)acc=f(arr[len-i],acc);
  return acc;
 };
 Arrays.head=function(arr)
 {
  Arrays.nonEmpty(arr);
  return arr[0];
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
 Arrays.filter=function(f,arr)
 {
  var r,i,$1;
  r=[];
  for(i=0,$1=arr.length-1;i<=$1;i++)if(f(arr[i]))
   r.push(arr[i]);
  return r;
 };
 Arrays.splitAt=function(n,ar)
 {
  return[Arrays.take(n,ar),Arrays.skip(n,ar)];
 };
 Arrays.findIndex=function(f,arr)
 {
  var m;
  m=Arrays.tryFindIndex(f,arr);
  return m==null?Operators$5.FailWith("KeyNotFoundException"):m.$0;
 };
 Arrays.concat=function(xs)
 {
  return Global.Array.prototype.concat.apply([],Arrays.ofSeq(xs));
 };
 Arrays.tryItem=function(i,arr)
 {
  return arr.length<=i||i<0?null:{
   $:1,
   $0:arr[i]
  };
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
 Arrays.create=function(size,value)
 {
  var r,i,$1;
  r=new Global.Array(size);
  for(i=0,$1=size-1;i<=$1;i++)r[i]=value;
  return r;
 };
 Arrays.nonEmpty=function(arr)
 {
  if(arr.length===0)
   Operators$5.FailWith("The input array was empty.");
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
 Arrays.take=function(n,ar)
 {
  return n<0?Seq$1.nonNegative():n>ar.length?Seq$1.insufficient():ar.slice(0,n);
 };
 Arrays.skip=function(i,ar)
 {
  return i<0?Seq$1.nonNegative():i>ar.length?Seq$1.insufficient():ar.slice(i);
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
 Arrays.pick=function(f,arr)
 {
  var m;
  m=Arrays.tryPick(f,arr);
  return m==null?Operators$5.FailWith("KeyNotFoundException"):m.$0;
 };
 Arrays.iter=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)f(arr[i]);
 };
 Arrays.find=function(f,arr)
 {
  var m;
  m=Arrays.tryFind(f,arr);
  return m==null?Operators$5.FailWith("KeyNotFoundException"):m.$0;
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
 Arrays.init=function(size,f)
 {
  var r,i,$1;
  size<0?Operators$5.FailWith("Negative size given."):null;
  r=new Global.Array(size);
  for(i=0,$1=size-1;i<=$1;i++)r[i]=f(i);
  return r;
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
 List.filter=function(p,l)
 {
  return List.ofSeq(Seq$1.filter(p,l));
 };
 List.rev=function(l)
 {
  var res,r;
  res=T.Empty;
  r=l;
  while(r.$==1)
   {
    res=new T({
     $:1,
     $0:r.$0,
     $1:res
    });
    r=r.$1;
   }
  return res;
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
 List.foldBack=function(f,l,s)
 {
  return Arrays.foldBack(f,Arrays.ofList(l),s);
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
  return Operators$5.FailWith("The input list was empty.");
 };
 Option$1.toArray=function(x)
 {
  return x==null?[]:[x.$0];
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
 SC$1.$cctor=function()
 {
  var f,g,t,s,x,t$1,t$2,t$3,t$4,t$5,t$6,t$7,t$8,t$9,t$10,t$11,i,x$1,t$12,t$13,t$14,t$15,t$16,t$17,i$1,b,x$2,b$1,b$2,b$3,b$4,b$5,b$6,b$7,b$8,b$9,p,a,b$10,a$1,b$11,p$1,cache,getOrAdd,p$2,cache$1,getOrAdd$1,p$3,cache$2,getOrAdd$2,p$4,cache$3,getOrAdd$3,p$5,cache$4,getOrAdd$4,p$6,cache$5,getOrAdd$5,p$7,cache$6,getOrAdd$6,p$8,cache$7,getOrAdd$7,p$9,cache$8,getOrAdd$8,p$10,cache$9,getOrAdd$9,p$11,cache$10,getOrAdd$10,x$3,b$12,pf,p$12,pf$1,p$13,sayHello_0,c,vf,a$2,vf$1,c$1,vf$2,pc,pf$2,p$14,p$15,pc$1,vf$3,p$16,c$2,c$3,c$4,c$5,c$6,c$7,c$8,c$9,c$10,vf$4,c$11,vf$5,c$12,vf$6,pc$2,vf$7,p$17,b$13,b$14,b$15,b$16,b$17,b$18,b$19,p$18,cache$11,getOrAdd$11,p$19,cache$12,getOrAdd$12,p$20,cache$13,getOrAdd$13,p$21,cache$14,getOrAdd$14,p$22,cache$15,getOrAdd$15,p$23,cache$16,getOrAdd$16,p$24,cache$17,getOrAdd$17,p$25,cache$18,getOrAdd$18,p$26,cache$19,getOrAdd$19,p$27,cache$20,getOrAdd$20,v,prior,b$20,b$21,b$22,i$2,f$1,g$1,b$23;
  SC$1.$cctor=Global.ignore;
  function g$2(s$1)
  {
   return Strings.concat("\n",s$1);
  }
  function f$2(s$1)
  {
   return String.splitByChar("\n",s$1);
  }
  function g$3(s$1)
  {
   var a$4,b$24;
   return Slice.array(s$1,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$4=0,(b$24=Arrays.length(s$1)-2,Unchecked.Compare(a$4,b$24)===1?a$4:b$24))
   });
  }
  function g$4(s$1)
  {
   return Strings.concat("\n",s$1);
  }
  function f$3(s$1)
  {
   return s$1+"T00:00:00";
  }
  function a$3(a$4)
  {
   var f$5;
   function b$24(a$5)
   {
    return AppFramework.plugIns().TryFindByKey(a$5);
   }
   function g$6(o)
   {
    return o==null?AppFramework.defaultPlugIn():o.$0;
   }
   f$5=function(o)
   {
    return o==null?null:b$24(o.$0);
   };
   return function(x$4)
   {
    return g$6(f$5(x$4));
   };
  }
  function checkO(v$1)
  {
   var res;
   res=null;
   return cache.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store(v$1,res)
  {
   cache.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$21(p$28,f$5)
  {
   var o;
   o=checkO(p$28);
   return o==null?store(p$28,f$5(p$28)):o.$0;
  }
  function checkO$1(v$1)
  {
   var res;
   res=null;
   return cache$1.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$1(v$1,res)
  {
   cache$1.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$22(p$28,f$5)
  {
   var o;
   o=checkO$1(p$28);
   return o==null?store$1(p$28,f$5(p$28)):o.$0;
  }
  function checkO$2(v$1)
  {
   var res;
   res=null;
   return cache$2.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$2(v$1,res)
  {
   cache$2.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$23(p$28,f$5)
  {
   var o;
   o=checkO$2(p$28);
   return o==null?store$2(p$28,f$5(p$28)):o.$0;
  }
  function checkO$3(v$1)
  {
   var res;
   res=null;
   return cache$3.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$3(v$1,res)
  {
   cache$3.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$24(p$28,f$5)
  {
   var o;
   o=checkO$3(p$28);
   return o==null?store$3(p$28,f$5(p$28)):o.$0;
  }
  function checkO$4(v$1)
  {
   var res;
   res=null;
   return cache$4.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$4(v$1,res)
  {
   cache$4.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$25(p$28,f$5)
  {
   var o;
   o=checkO$4(p$28);
   return o==null?store$4(p$28,f$5(p$28)):o.$0;
  }
  function checkO$5(v$1)
  {
   var res;
   res=null;
   return cache$5.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$5(v$1,res)
  {
   cache$5.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$26(p$28,f$5)
  {
   var o;
   o=checkO$5(p$28);
   return o==null?store$5(p$28,f$5(p$28)):o.$0;
  }
  function checkO$6(v$1)
  {
   var res;
   res=null;
   return cache$6.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$6(v$1,res)
  {
   cache$6.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$27(p$28,f$5)
  {
   var o;
   o=checkO$6(p$28);
   return o==null?store$6(p$28,f$5(p$28)):o.$0;
  }
  function checkO$7(v$1)
  {
   var res;
   res=null;
   return cache$7.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$7(v$1,res)
  {
   cache$7.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$28(p$28,f$5)
  {
   var o;
   o=checkO$7(p$28);
   return o==null?store$7(p$28,f$5(p$28)):o.$0;
  }
  function checkO$8(v$1)
  {
   var res;
   res=null;
   return cache$8.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$8(v$1,res)
  {
   cache$8.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$29(p$28,f$5)
  {
   var o;
   o=checkO$8(p$28);
   return o==null?store$8(p$28,f$5(p$28)):o.$0;
  }
  function checkO$9(v$1)
  {
   var res;
   res=null;
   return cache$9.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$9(v$1,res)
  {
   cache$9.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$30(p$28,f$5)
  {
   var o;
   o=checkO$9(p$28);
   return o==null?store$9(p$28,f$5(p$28)):o.$0;
  }
  function checkO$10(v$1)
  {
   var res;
   res=null;
   return cache$10.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$10(v$1,res)
  {
   cache$10.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$31(p$28,f$5)
  {
   var o;
   o=checkO$10(p$28);
   return o==null?store$10(p$28,f$5(p$28)):o.$0;
  }
  function checkO$11(v$1)
  {
   var res;
   res=null;
   return cache$11.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$11(v$1,res)
  {
   cache$11.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$32(p$28,f$5)
  {
   var o;
   o=checkO$11(p$28);
   return o==null?store$11(p$28,f$5(p$28)):o.$0;
  }
  function checkO$12(v$1)
  {
   var res;
   res=null;
   return cache$12.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$12(v$1,res)
  {
   cache$12.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$33(p$28,f$5)
  {
   var o;
   o=checkO$12(p$28);
   return o==null?store$12(p$28,f$5(p$28)):o.$0;
  }
  function checkO$13(v$1)
  {
   var res;
   res=null;
   return cache$13.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$13(v$1,res)
  {
   cache$13.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$34(p$28,f$5)
  {
   var o;
   o=checkO$13(p$28);
   return o==null?store$13(p$28,f$5(p$28)):o.$0;
  }
  function checkO$14(v$1)
  {
   var res;
   res=null;
   return cache$14.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$14(v$1,res)
  {
   cache$14.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$35(p$28,f$5)
  {
   var o;
   o=checkO$14(p$28);
   return o==null?store$14(p$28,f$5(p$28)):o.$0;
  }
  function checkO$15(v$1)
  {
   var res;
   res=null;
   return cache$15.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$15(v$1,res)
  {
   cache$15.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$36(p$28,f$5)
  {
   var o;
   o=checkO$15(p$28);
   return o==null?store$15(p$28,f$5(p$28)):o.$0;
  }
  function checkO$16(v$1)
  {
   var res;
   res=null;
   return cache$16.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$16(v$1,res)
  {
   cache$16.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$37(p$28,f$5)
  {
   var o;
   o=checkO$16(p$28);
   return o==null?store$16(p$28,f$5(p$28)):o.$0;
  }
  function checkO$17(v$1)
  {
   var res;
   res=null;
   return cache$17.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$17(v$1,res)
  {
   cache$17.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$38(p$28,f$5)
  {
   var o;
   o=checkO$17(p$28);
   return o==null?store$17(p$28,f$5(p$28)):o.$0;
  }
  function checkO$18(v$1)
  {
   var res;
   res=null;
   return cache$18.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$18(v$1,res)
  {
   cache$18.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$39(p$28,f$5)
  {
   var o;
   o=checkO$18(p$28);
   return o==null?store$18(p$28,f$5(p$28)):o.$0;
  }
  function checkO$19(v$1)
  {
   var res;
   res=null;
   return cache$19.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$19(v$1,res)
  {
   cache$19.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$40(p$28,f$5)
  {
   var o;
   o=checkO$19(p$28);
   return o==null?store$19(p$28,f$5(p$28)):o.$0;
  }
  function checkO$20(v$1)
  {
   var res;
   res=null;
   return cache$20.TryGetValue(v$1,{
    get:function()
    {
     return res;
    },
    set:function(v$2)
    {
     res=v$2;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$20(v$1,res)
  {
   cache$20.set_Item(v$1,res);
   return res;
  }
  function getOrAdd$41(p$28,f$5)
  {
   var o;
   o=checkO$20(p$28);
   return o==null?store$20(p$28,f$5(p$28)):o.$0;
  }
  function t$18(a$4)
  {
   return SnippetsUI.snippetsLM().TryFindByKey(a$4);
  }
  function t$19(a$4)
  {
   return SnippetsUI.snippetsLM().TryFindByKey(a$4);
  }
  function f$4(t$20)
  {
   return LayoutEngineModule.parseEntries("lytTarget",t$20);
  }
  function c$13(a$4)
  {
   return a$4.$==1?{
    $:1,
    $0:a$4.$0
   }:null;
  }
  function g$5(s$1)
  {
   return Strings.concat("\n",s$1);
  }
  SC$1.rtn=function(v$1)
  {
   return[v$1];
  };
  SC$1.state=new CEBuilder.New();
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.resultP=new BuilderP.New();
  SC$1.depend=new DependBuilder.New();
  SC$1.rtn$1=Depend.rtn;
  SC$1.depend$1=Depend.depend();
  SC$1.resultM=new Builder$1.New();
  SC$1.asyncResultM=new AsyncResultMBuilder.New();
  SC$1.unindentStr=function(x$4)
  {
   return g$2(String.unindent(x$4));
  };
  SC$1.skipLastLine=(f=function(x$4)
  {
   return g$3(f$2(x$4));
  },function(x$4)
  {
   return g$4(f(x$4));
  });
  SC$1.parseDateO2=(g=ParseO.tryParseWith(function(a$4)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a$4),m!=null&&m.$==1&&(o=m.$0,true)),o];
  }),function(x$4)
  {
   return g(f$3(x$4));
  });
  SC$1.parseDateO=ParseO.tryParseWith(function(a$4)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a$4),m!=null&&m.$==1&&(o=m.$0,true)),o];
  });
  SC$1.parseIntO=ParseO.tryParseWith(function(a$4)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt32(a$4,{
    get:function()
    {
     return o;
    },
    set:function(v$1)
    {
     o=v$1;
    }
   }),o];
  });
  SC$1.parseInt64O=ParseO.tryParseWith(function(a$4)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt64(a$4,{
    get:function()
    {
     return o;
    },
    set:function(v$1)
    {
     o=v$1;
    }
   }),o];
  });
  SC$1.parseSingleO=ParseO.tryParseWith(function(a$4)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a$4),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith(function(a$4)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a$4),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseGuidO=ParseO.tryParseWith(function(a$4)
  {
   var o;
   o=null;
   return[Guid.TryParse(a$4,{
    get:function()
    {
     return o;
    },
    set:function(v$1)
    {
     o=v$1;
    }
   }),o];
  });
  SC$1["|Date|_|"]=ParseO.parseDateO();
  SC$1["|Int|_|"]=ParseO.parseIntO();
  SC$1["|Int64|_|"]=ParseO.parseInt64O();
  SC$1["|Single|_|"]=ParseO.parseSingleO();
  SC$1["|Double|_|"]=ParseO.parseDoubleO();
  SC$1["|Guid|_|"]=ParseO.parseGuidO();
  SC$1.serString=[Serializer.toJsonString,function(j)
  {
   return j.tryString();
  }];
  SC$1.serFloat=[function(v$1)
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(v$1);
  },function(j)
  {
   return j.tryFloat();
  }];
  SC$1.serInt=[function(v$1)
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(v$1);
  },function(j)
  {
   var o;
   o=j.tryInt();
   return o==null?null:{
    $:1,
    $0:Operators$5.toInt(o.$0)
   };
  }];
  SC$1.serInt64=[Global.String,function(j)
  {
   return j.tryInt();
  }];
  SC$1.serBool=[function(v$1)
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(v$1);
  },function(j)
  {
   return j.tryBool();
  }];
  SC$1.serDate=[function(x$4)
  {
   return Global.String(Global.id(x$4));
  },function(j)
  {
   var o;
   o=j.tryInt();
   return o==null?null:{
    $:1,
    $0:o.$0
   };
  }];
  SC$1.serTypedRegisters=new Dictionary.New$5();
  SC$1.serGuid=(t=Serializer.serString(),Serializer.mapO(Global.String,ParseO.parseGuidO(),t[0],t[1]));
  SC$1.defaultSnippet=Snippet.New(UoM$1.Tag$4("00000000-0000-0000-0000-000000000000"),"","",null,new FSharpSet.New$1(null),[],(new Date(0)).getTime());
  SC$1.serSnippetId=(s="SnippetId",[function(gid)
  {
   var x$4;
   x$4=Global.String(UoM$1.Untag$4(gid));
   return(((Runtime$1.Curried3(function($1,$2,$3)
   {
    return $1("{"+Utils.prettyPrint($2)+" :"+Utils.prettyPrint($3)+"}");
   }))(Global.id))(s))(x$4);
  },function(j)
  {
   var o,o$1,o$2,f$5;
   o=(o$1=(o$2=j.tryField(s),o$2==null?null:o$2.$0.tryString()),(f$5=ParseO.parseGuidO(),o$1==null?null:f$5(o$1.$0)));
   return o==null?null:{
    $:1,
    $0:UoM$1.Tag$4(o.$0)
   };
  }]);
  SC$1.serSnippet=(x=[(t$1=SnippetSerialize.serSnippetId(),Serializer.serField("snpId",function(s$1)
  {
   return s$1.snpId;
  },function(v$1,s$1)
  {
   return Snippet.New(v$1,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$1[0],t$1[1])),(t$2=Serializer.serString(),Serializer.serField("snpName",function(s$1)
  {
   return s$1.snpName;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,v$1,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$2[0],t$2[1])),(t$3=Serializer.serString(),Serializer.serField("snpContent",function(s$1)
  {
   return s$1.snpContent;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,v$1,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$3[0],t$3[1])),(t$4=(t$5=SnippetSerialize.serSnippetId(),Serializer.serOpt(t$5[0],t$5[1])),Serializer.serField("snpParentIdO",function(s$1)
  {
   return s$1.snpParentIdO;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,v$1,s$1.snpPredIds,s$1.snpProperties,s$1.snpModified);
  },t$4[0],t$4[1])),(t$6=(t$7=SnippetSerialize.serSnippetId(),Serializer.serSet(t$7[0],t$7[1])),Serializer.serField("snpPredIds",function(s$1)
  {
   return s$1.snpPredIds;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,v$1,s$1.snpProperties,s$1.snpModified);
  },t$6[0],t$6[1])),(t$8=(t$9=Serializer.serDup(Serializer.serString(),Serializer.serString()),Serializer.serArr(t$9[0],t$9[1])),Serializer.serField("snpProperties",function(s$1)
  {
   return s$1.snpProperties;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,v$1,s$1.snpModified);
  },t$8[0],t$8[1])),(t$10=Serializer.serInt(),Serializer.serFieldO("snpGeneration",function()
  {
   return null;
  },function(vO,s$1)
  {
   return vO!=null&&vO.$==1?Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,(new Date(0)).getTime()+vO.$0*3600000):s$1;
  },t$10[0],t$10[1])),(t$11=Serializer.serDate(),Serializer.serField("snpModified",function(s$1)
  {
   return s$1.snpModified;
  },function(v$1,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,v$1);
  },t$11[0],t$11[1]))],(i=SnippetModule.New("","",null),[function(rc)
  {
   var x$4;
   function c$14(n,ser,_deser)
   {
    var x$5,m;
    x$5=ser(rc);
    m=((Runtime$1.Curried3(function($1,$2,$3)
    {
     return $1(Utils.prettyPrint($2)+": "+Utils.toSafe($3));
    }))(Global.id))(n);
    return x$5==null?null:{
     $:1,
     $0:m(x$5.$0)
    };
   }
   x$4=Strings.concat(", ",Seq$1.choose(function($1)
   {
    return c$14($1[0],$1[1],$1[2]);
   },x));
   return(function($1)
   {
    return function($2)
    {
     return $1("{"+Utils.toSafe($2)+"}");
    };
   }(Global.id))(x$4);
  },function(j)
  {
   return{
    $:1,
    $0:Seq$1.fold(function(rc,t$20)
    {
     var x$4;
     x$4=j.tryField(t$20[0]);
     return(t$20[2](rc))(x$4);
    },i,x)
   };
  }]));
  SC$1.serModel=(x$1=[(t$12=(t$13=SnippetSerialize.serSnippet(),Serializer.serArr(t$13[0],t$13[1])),Serializer.serField("snippets",function(m)
  {
   return m.snippets;
  },function(v$1,m)
  {
   return Model.New(v$1,m.modified,m.collapsed);
  },t$12[0],t$12[1])),(t$14=Serializer.serInt(),Serializer.serFieldO("generation",function()
  {
   return null;
  },function(vO,m)
  {
   return vO!=null&&vO.$==1?Model.New(m.snippets,(new Date(0)).getTime()+vO.$0*3600000,m.collapsed):m;
  },t$14[0],t$14[1])),(t$15=Serializer.serDate(),Serializer.serField("modified",function(m)
  {
   return m.modified;
  },function(v$1,m)
  {
   return Model.New(m.snippets,v$1,m.collapsed);
  },t$15[0],t$15[1])),(t$16=(t$17=SnippetSerialize.serSnippetId(),Serializer.serSet(t$17[0],t$17[1])),Serializer.serField("collapsed",function(m)
  {
   return m.collapsed;
  },function(v$1,m)
  {
   return Model.New(m.snippets,m.modified,v$1);
  },t$16[0],t$16[1]))],(i$1=Model.New([],(new Date(0)).getTime(),new FSharpSet.New$1(null)),[function(rc)
  {
   var x$4;
   function c$14(n,ser,_deser)
   {
    var x$5,m;
    x$5=ser(rc);
    m=((Runtime$1.Curried3(function($1,$2,$3)
    {
     return $1(Utils.prettyPrint($2)+": "+Utils.toSafe($3));
    }))(Global.id))(n);
    return x$5==null?null:{
     $:1,
     $0:m(x$5.$0)
    };
   }
   x$4=Strings.concat(", ",Seq$1.choose(function($1)
   {
    return c$14($1[0],$1[1],$1[2]);
   },x$1));
   return(function($1)
   {
    return function($2)
    {
     return $1("{"+Utils.toSafe($2)+"}");
    };
   }(Global.id))(x$4);
  },function(j)
  {
   return{
    $:1,
    $0:Seq$1.fold(function(rc,t$20)
    {
     var x$4;
     x$4=j.tryField(t$20[0]);
     return(t$20[2](rc))(x$4);
    },i$1,x$1)
   };
  }]));
  SC$1.counter=1;
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$1.rexEmail="(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*";
  SC$1.observers=T.Empty;
  SC$1.css="\r\n                .tab-panel {\r\n                 overflow  : hidden   ;\r\n                 display   : flex     ;\r\n                 flex-flow : column   ;\r\n                 background: lightgray;\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                }\r\n                .tab-content {\r\n                 flex      : 1 1     ;\r\n                 overflow  : auto    ;\r\n                 position  : relative;\r\n                }\r\n                .tab-children {\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                 position  : absolute;\r\n                 display   : grid    ;\r\n                }\r\n                .tab-strip {\r\n                 padding   : 0pt     ;\r\n                 flex      : 0 0     ;\r\n                }\r\n                .tab {\r\n                 border     : 0.2pt solid transparent;\r\n                 padding    : 0pt 4pt;\r\n                 display    : inline-block;\r\n                 font-family: sans-serif;\r\n                 font-weight: 200;\r\n                 font-size  : small;\r\n                 color      : #666;\r\n                 cursor     : pointer;\r\n                }\r\n                .top>.tab {\r\n                 border-radius: 2pt 2pt 0pt 0pt;\r\n                 border-bottom-width: 0pt;\r\n                 vertical-align: bottom;\r\n                }\r\n                .bottom>.tab {\r\n                 border-top-width: 0pt;\r\n                 border-radius: 0pt 0pt 2pt 2pt;\r\n                 vertical-align: top;\r\n                }\r\n                .horizontal>.tab:not(:first-child) {\r\n                 border-left-width: 0pt;\r\n                }\r\n                .tab.hovering {\r\n                 background: red;\r\n                }\r\n                .tab.selected {\r\n                 background: white;\r\n                 border-left-width: 0.2pt;\r\n                 color: black;\r\n                 font-weight: 500;\r\n                 border-color: black;\r\n                }\r\n                .horizontal>.tab.selected {\r\n                 border-left-width: 0.2pt;\r\n                }\r\n                ::slotted(*              ) { \r\n                 width : 100%;\r\n                 height: 100%;\r\n                }\r\n                        ";
  SC$1.init=Lazy.Create(function()
  {
   var o;
   o=new WcTabStripT.New();
   WebComponent.defineWebComponent("wcomp-tabstrip",WcTabStripT.Constructor,self.FsRoot.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New);
  });
  SC$1.layoutHorizontal=Runtime$1.Curried(function($1,$2,$3,$4,$5)
  {
   return Doc.get_Empty();
  },5);
  SC$1.layoutVertical=Runtime$1.Curried(function($1,$2,$3,$4,$5)
  {
   return Doc.get_Empty();
  },5);
  SC$1.loader=(b=null,Concurrency.Delay(function()
  {
   self.require.config({
    paths:{
     vs:"/EPFileX/monaco/package/min/vs"
    }
   });
   return Concurrency.Bind(Concurrency.FromContinuations(function(success,failed)
   {
    return self.require(["vs/editor/editor.main"],success,failed);
   }),function()
   {
    return Concurrency.Return(null);
   });
  }));
  SC$1.html="\r\n            <div style=\"display:none\" >\r\n                <div links>\r\n                    <link href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" type=\"text/css\" rel=\"stylesheet\">\r\n                    <script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"  type=\"text/javascript\"></script>\r\n                </div>\r\n                <div ws-template=\"AppFramework\" style=\"height: calc(100vh - 4px); width: calc(100vw - 4px) \" class=\"relative\" >\r\n                    <div ws-hole=\"MainClient\"></div>\r\n                    <div class=\"AppFrameworkGo\"><button ws-onclick=\"GoClient\">${MainDoc}</button></div>\r\n                </div>\r\n                <style>\r\n                    .AppFrameworkGo {\r\n                        max-width: 2px;\r\n                        max-height: 2px;\r\n                        z-index: 4000;\r\n                        overflow: hidden;\r\n                        position: fixed;\r\n                        top: 0px;\r\n                        left: 0px;\r\n                    }\r\n                </style>\r\n                <div ws-template=\"FixedSplitterVer\" \r\n                    style=\"display: grid; \r\n                           grid-gap: 0px; \r\n                           box-sizing: border-box; \r\n                           height: 100%;\r\n                           width : 100%;\r\n                           grid-template-areas: 'one two'; \r\n                           grid-template-rows   :100%; \r\n                           overflow: hidden; \r\n                           grid-template-columns: ${PartSizes}\"  >\r\n                   <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n                   <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"FixedSplitterHor\" \r\n               style=\"display: grid; \r\n                      grid-gap: 0px; \r\n                      box-sizing: border-box; \r\n                      height: 100%;\r\n                      width : 100%;\r\n                      grid-template-areas: 'one' 'two'; \r\n                      grid-template-columns:100%; \r\n                      overflow: hidden; \r\n                      grid-template-rows   : ${PartSizes}\"  >\r\n              <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n              <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"WCompSplitterHor\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid;\r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one' 'two'; \r\n                            grid-template-columns:100%; \r\n                            overflow: hidden; \r\n                            grid-template-rows   : ${PartSizes}\" \r\n                     >\r\n                     <slot></slot>\r\n                    <slot name=\"splitter\">  <div style=\"grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-row:2; grid-column:1 / 1 ; \r\n                            cursor: row-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            height: ${Gap}; \r\n                            margin-top :-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>        \r\n                <div ws-template=\"WCompSplitterVer\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid; \r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one two'; \r\n                            grid-template-rows   :100%; \r\n                            overflow: hidden; \r\n                            grid-template-columns: ${PartSizes}\"  >\r\n                    <slot></slot>\r\n                    <slot name=\"splitter\"> <div style=\"grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-column:2; grid-row:1 / 1\r\n                            cursor: column-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            width: ${Gap}; \r\n                            margin-left:-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>\r\n                <div ws-template=\"AppFwkClient\" >\r\n                    <ws-FixedSplitterHor>\r\n                        <PartSizes>55px calc(100% - 55px)</PartSizes>\r\n                        <First>\r\n                            <span style=\"display: grid;\r\n                                  grid-template-columns: 30% 20% 20% 10%;\r\n                                  grid-gap: 25px;\r\n                                \">\r\n                                <div class=\"mainTitle\">AppFramework</div>\r\n                            </span>\r\n                        </First>\r\n                        <Second>\r\n                                <ws-FixedSplitterVer>\r\n                                    <PartSizes>calc(100% - 150px) 150px</PartSizes>\r\n                                    <First>\r\n                                        <wcomp-splitter vertical value=\"18\" max=\"100\">\r\n                                            <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\" >\r\n                                                <div ws-template=\"Tile\">\r\n                                                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                                                    ws-ondrag=\"Drag\"\r\n                                                    ws-ondragover=\"DragOver\"\r\n                                                    ws-ondrop=\"Drop\"\r\n                                                   >\r\n                                                   <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                                                   <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                                                   <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                                               </div>\r\n                                       \r\n                                                </div>\r\n                                            </div></div>\r\n                                            <wcomp-splitter vertical value=\"100\" min=\"30\" max=\"100\">\r\n                                                <ws-FixedSplitterHor>\r\n                                                    <PartSizes>32px calc(100% - 32px)</PartSizes>\r\n                                                    <First>\r\n                                                        <div>\r\n                                                            <div class=\"input-group\">\r\n                                                                <span class=\"input-group-addon\">name:</span>\r\n                                                                <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </First>\r\n                                                    <Second>\r\n                                                        <div style=\"overflow:auto\">\r\n                                                            <div>\r\n                                                                <div>Docs:</div>\r\n                                                                <div ws-hole=\"Docs\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Views:</div>\r\n                                                                <div ws-hole=\"Views\" style=\"overflow:auto\" >\r\n                                                                    <div ws-template=\"NameValue\" class=\"input-group\">\r\n                                                                        <span class=\"input-group-addon\">${Name}:</span>\r\n                                                                        <span class=\"input-group-addon\">${Value}</span>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Queries:</div>\r\n                                                                <div ws-hole=\"Queries\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Vars:</div>\r\n                                                                <div ws-hole=\"Vars\" style=\"overflow:auto\" >\r\n                                                                    <div ws-template=\"NameValueInput\" class=\"input-group\">\r\n                                                                        <span class=\"input-group-addon\">${Name}:</span>\r\n                                                                        <textarea class=\"form-control\" id=\"\" placeholder=\"Value...\" ws-var=\"Value\" spellcheck=\"false\">\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </Second>\r\n                                                </ws-FixedSplitterHor>\r\n                                                <wcomp-tabstrip >\r\n                                                    <div tabname=\"Properties\">\r\n                                                        <div>\r\n                                                            <table style=\"border-spacing:0px\">\r\n                                                                <thead>\r\n                                                                    <th style=\"width: 30%  \">Name</th>\r\n                                                                    <th style=\"width: 70% \">Value</th>\r\n                                                                </thead>\r\n                                                                <tbody ws-hole=\"Properties\" ws-children-template=\"Property\">\r\n                                                                    <tr ws-onclick=\"Select\" style=\"margin-bottom: 2px\" class=\"level  \">\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <input ws-var=\"Name\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Property...\">\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <textarea ws-var=\"Value\" class=\"form-control\" id=\"\" placeholder=\"Value...\"></textarea>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div style=\" cursor: pointer \" title=\"remove\">\r\n                                                                                <button ws-onclick=\"Remove\" class=\"delete is-small\">x</button>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </wcomp-tabstrip>\r\n                                            </wcomp-splitter>\r\n                                        </wcomp-splitter>\r\n                                    </First>\r\n                                    <Second>\r\n                                        <div style=\"\r\n                                            overflow: hidden;\r\n                                            display: grid;\r\n                                            grid-template-columns: 100%;\r\n                                            grid-template-rows: repeat(15, calc(100% / 15));\r\n                                            bxackground-color: #eee;\r\n                                            box-sizing: border-box;\r\n                                            padding : 5px;\r\n                                            grid-gap: 5px;\r\n                                            margin-right: 21px;\r\n                                       \"  class=\"absolute\" ws-hole=\"Actions\" >\r\n                                            <button ws-template=\"Action\"         ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\"          >${Name}</button>\r\n                                            <button ws-template=\"ActionDisabled\" ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\" disabled >${Name}</button>\r\n                                        </div>\r\n                                    </Second>\r\n                                </ws-FixedSplitterVer>\r\n                        </Second>\r\n                    </ws-FixedSplitterHor>\r\n                </div>\r\n                <style style=\"display: none\">\r\n                        .Hidden     { display   : none         }\r\n                        table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                        td input.form-control { \r\n                            padding    : 0px; \r\n                            font-family: monospace;\r\n                            font-size  :   small;\r\n                            margin-top :   0px;\r\n                            margin-left: -2px;\r\n                            width      : 100%\r\n                        }\r\n                        td select {\r\n                            font-size : smaller;\r\n                            max-width : 8ch;\r\n                        }\r\n                        xtextarea {\r\n                           resize : none;\r\n                        }\r\n                        .tab-content {\r\n                            overflow: hidden\r\n                        }\r\n                        .tab-children {\r\n                            position:relative;\r\n                        }\r\n                        .tab-children>div>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        .relative {\r\n                            position:relative;\r\n                        }\r\n                        .relative>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                        table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                        table.table-striped    tbody input              { background: transparent; border: none}\r\n                        table.table-striped    tbody select             { background: transparent; border: none}\r\n                        table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                        table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                        table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                        table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                        table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                        table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                                   border-bottom: solid thin blue     ; } \r\n                        table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                        table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                        thead { color: gray }\r\n                        h3 { \r\n                            color: gray;\r\n                            line-height: 1em;\r\n                        }\r\n                        button       { border: solid thin transparent ; border-radius: 3px; }\r\n                        button:hover { border: solid thin blue }\r\n                        .indenter { position  : absolute; \r\n                                    top:0px; bottom:0px; left:0px; \r\n                                    background: white; color:white;\r\n                                    border-right: gray thin dotted;\r\n                                    }\r\n                        body {\r\n                            color      : #333;\r\n                            font-size  : small;\r\n                            font-family: monospace;\r\n                            line-height: 1.2;\r\n                        }\r\n                        .mainTitle {  \r\n                            font-size: 48px;\r\n                            font-weight: 500;\r\n                            color: gray;\r\n                            margin-top: -12px;\r\n                        }\r\n                        .CodeMirror {\r\n                            height: 100%;\r\n                        }\r\n                        \r\n                      \r\n                        body { margin: 0px }     \r\n                             \r\n                        div textarea {\r\n                            font-family     : monospace;\r\n                        }\r\n                        .code-editor-list-tile {\r\n                            white-space     : nowrap; \r\n                            border-style    : solid none none;\r\n                            border-color    : white;\r\n                            border-width    : 1px;\r\n                            background-color: #D8D8D8;\r\n                            display         : flex;\r\n                        }\r\n                        .code-editor-list-text{\r\n                            padding         : 1px 10px 1px 5px;\r\n                            overflow        : hidden;\r\n                            text-overflow   : ellipsis;\r\n                            white-space     : nowrap;\r\n                            flex            : 1;\r\n                        }\r\n                        \r\n                        .code-editor-list-tile span.node.ErrorMsg {\r\n                            background-color: red\r\n                        }\r\n                        .code-editor-list-tile span.node.expanded::before {\r\n                            content: \"-\"\r\n                        }\r\n                        .code-editor-list-tile span.node.collapsed::before {\r\n                            content: \"+\"\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor {\r\n                            font-weight     : bold;\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.indirect-predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.included-predecessor {\r\n                            color           : chocolate;\r\n                        }\r\n                        .code-editor-list-tile.selected {\r\n                            background-color: #77F;\r\n                            color           : white;\r\n                        }\r\n                        .code-editor-list-tile.codeSnippet {\r\n                            text-decoration: underline\r\n                        }\r\n                        .code-editor-list-tile:hover {\r\n                            background      : lightgray;\r\n                        }\r\n                        .code-editor-list-tile.selected:hover {\r\n                            background      : blue;\r\n                        }\r\n                        .code-editor-list-tile>.predecessor {\r\n                            font-weight     : bold;\r\n                            border-style    : inset;\r\n                            border-width    : 1px;\r\n                            text-align      : center;\r\n                            color           : transparent;\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        \r\n                        .CodeMirror { height: 100%; }\r\n                        \r\n                        .node {\r\n                            background-color: white; \r\n                            width           : 2ch; \r\n                            color           : #A03; \r\n                            font-weight     : bold; \r\n                            text-align      : center;\r\n                            font-family     : arial;\r\n                        }\r\n                        .Warning { text-decoration: underline lightblue } \r\n                        .Error   { text-decoration: underline red       } \r\n                        \r\n                    </style>\r\n            </div>\r\n            ";
  SC$1.plugIns=new ListModel$1.New$1(function(plg)
  {
   return plg.plgName;
  });
  SC$1.mainDocV=Var$1.Create$1("AppFramework.AppFwkClient");
  SC$1.TemplateFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\LayoutEngine\\website\\AppFramework.html";
  SC$1.selectionPlugInO=Var$1.Create$1({
   $:1,
   $0:"AppFramework"
  });
  SC$1.currentPlugInW=(x$2=AppFramework.selectionPlugInO().get_View(),View.Map2(function($1,$2)
  {
   return(a$3($1))($2);
  },AppFramework.plugIns().v,x$2));
  SC$1.currentPlugInV=new FromView.New(AppFramework.currentPlugInW(),function(a$4)
  {
   AppFramework.plugIns().Append(a$4);
  });
  SC$1.AppFwkClient=Lazy.Create(function()
  {
   var b$24,Q,A,D,V,V$1,P$2,p$28,i$3;
   return(b$24=(Q=AppFramework.renderQueries(),(A=AppFramework.renderActions(),(D=AppFramework.renderDocs(),(V=AppFramework.renderViews(),(V$1=AppFramework.renderVars(),(P$2=AppFramework.renderPlugIns(),ProviderBuilder.Make().WithHole({
    $:0,
    $0:"plugins",
    $1:P$2
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
   })),(p$28=Handler.CompleteHoles(b$24.k,b$24.h,[]),(i$3=new TemplateInstance.New(p$28[1],testing_Templates.appfwkclient(p$28[0])),(b$24.i=i$3,i$3)))).get_Doc();
  });
  SC$1.plugin=new PlugInBuilder.New();
  SC$1.a11V=Var$1.Create$1(11);
  SC$1.mainX={
   $:0,
   $0:AppFramework.a11V().get_View()
  };
  SC$1.baseView=AppFramework.mainDocV().get_View();
  SC$1.textAtt=function($1)
  {
   return function()
   {
    return $1("textAtt not implemented");
   };
  }(Operators$5.FailWith);
  SC$1.getDocFromReferenceD=Depend.dependByName("getDocFromReference",Extract0.getDocFromReference,Global.id);
  SC$1.getTextActViewFromReferenceD=Depend.dependByName("getTextActViewFromReference",Extract0.getTextActViewFromReference,Global.id);
  SC$1.getDocFromTextTypesD=(b$1=Depend.depend(),b$1.Delay(function()
  {
   return b$1.Bind(Extract0.getDocFromReferenceD(),function(a$4)
   {
    var f$5;
    function m(a$5)
    {
     return a$5.$==1?a$4(a$5.$0):Doc.TextNode(a$5.$0);
    }
    function g$6(a$5)
    {
     var $1;
     return(a$5.$==1?a$5.$1.$==0?($1=a$5.$0,true):($1=a$5,false):($1=a$5,false))?$1:Doc.Concat($1);
    }
    return b$1.Return((f$5=function(l)
    {
     return List.map(m,l);
    },function(x$4)
    {
     return g$6(f$5(x$4));
    }));
   });
  }));
  SC$1.extractDocD=(b$2=Depend.depend(),b$2.Delay(function()
  {
   return b$2.Bind(Extract0.getDocFromTextTypesD(),function(a$4)
   {
    return b$2.Return(function(x$4)
    {
     return a$4(Extract0.getTextData(x$4));
    });
   });
  }));
  SC$1.getTextValFromSeqD=(b$3=Depend.depend(),b$3.Delay(function()
  {
   return b$3.Bind(Extract0.getTextActViewFromReferenceD(),function(a$4)
   {
    var f$5,f$6,g$6,a$5;
    function f$7(a$6)
    {
     return a$6.$==1?View.Map(AppFramework.choiceToString,a$4(a$6.$0)):View.Const(a$6.$0);
    }
    function f$8(s$1)
    {
     return Strings.concat("",s$1);
    }
    function g$7(a$6)
    {
     return{
      $:0,
      $0:a$6
     };
    }
    function g$8(a$6)
    {
     return{
      $:0,
      $0:a$6
     };
    }
    return b$3.Return((f$5=(f$6=function(l)
    {
     return View$1.traverseListApp(f$7,l);
    },(g$6=(a$5=View.Const(function(x$4)
    {
     return g$7(f$8(x$4));
    }),function(a$6)
    {
     return View.Apply(a$5,a$6);
    }),function(x$4)
    {
     return g$6(f$6(x$4));
    })),function(x$4)
    {
     return g$8(f$5(x$4));
    }));
   });
  }));
  SC$1.getTextValFromTextTypesD=(b$4=Depend.depend(),b$4.Delay(function()
  {
   return b$4.Bind(Extract0.getTextActViewFromReferenceD(),function(a$4)
   {
    return b$4.Bind(Extract0.getTextValFromSeqD(),function(a$5)
    {
     return b$4.Return(function(a$6)
     {
      var $1;
      switch(a$6.$==1?a$6.$0.$==1?a$6.$1.$==0?($1=a$6.$0.$0,1):($1=a$6,2):a$6.$1.$==0?($1=a$6.$0.$0,0):($1=a$6,2):($1=a$6,2))
      {
       case 0:
        return{
         $:1,
         $0:{
          $:0,
          $0:$1
         }
        };
       case 1:
        return{
         $:0,
         $0:a$4($1)
        };
       case 2:
        return a$5($1);
      }
     });
    });
   });
  }));
  SC$1.getTextValD=Operators$2.op_GreaterMultiplyGreater(Extract0.getTextData,Extract0.getTextValFromTextTypesD());
  SC$1.extractAtsD=(b$5=Depend.depend(),b$5.Delay(function()
  {
   return b$5.Bind(Extract0.getTextValD(),function(a$4)
   {
    return b$5.Return(function(txt)
    {
     return Seq$1.map(function(t$20)
     {
      var m,sty,m$1,atv;
      m=Strings.SplitChars(t$20,[":"],0);
      return!Unchecked.Equals(m,null)&&m.length===2?(sty=Arrays.get(m,1),AppFramework.valToStyle(Arrays.get(m,0),a$4(sty))):(m$1=Arrays.map(Strings.Trim,Strings.SplitChars(t$20,["="],0)),!Unchecked.Equals(m$1,null)&&m$1.length===2?(atv=Arrays.get(m$1,1),AppFramework.valToAttr(Arrays.get(m$1,0),a$4(atv))):(function($1)
      {
       return function($2)
       {
        return $1("single reference attribute not implemented "+Utils.toSafe($2));
       };
      }(Operators$5.FailWith))(t$20));
     },Seq$1.filter(function(y)
     {
      return""!==y;
     },Seq$1.map(Strings.Trim,Strings.SplitChars(txt,[";"],0))));
    });
   });
  }));
  SC$1.extractTextD=(b$6=Depend.depend(),b$6.Delay(function()
  {
   return b$6.Bind(Extract0.getTextValD(),function(a$4)
   {
    return b$6.Return(function(txt)
    {
     return Val.toView(Val.map(AppFramework.choiceToString,a$4(txt)));
    });
   });
  }));
  SC$1.currentPlugInNameDef=UoM$1.Tag$3("NewLYx");
  SC$1.currentPlugInNameD=Depend.dependByName("currentPlugInName",AppFramework.currentPlugInNameDef(),Global.id);
  SC$1.getDocD=(b$7=Depend.depend(),b$7.Delay(function()
  {
   return b$7.Bind(AppFramework.currentPlugInNameD(),function(a$4)
   {
    return b$7.Return(function(r)
    {
     var p$28,pName,oName;
     p$28=(AppFramework.splitName(UoM$1.Untag$3(a$4)))(r);
     pName=p$28[0];
     oName=p$28[1];
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
      return o==null?Doc.TextView(View.Map(function(o$1)
      {
       return o$1==null?d():o$1.$0;
      },AppFramework.tryGetWoWW(pName,oName))):o.$0;
     },AppFramework.tryGetDocW(pName,oName));
    });
   });
  }));
  SC$1.getTextActViewD=(b$8=Depend.depend(),b$8.Delay(function()
  {
   return b$8.Bind(AppFramework.currentPlugInNameD(),function(a$4)
   {
    return b$8.Return(function(r)
    {
     var p$28,pName,oName;
     p$28=(AppFramework.splitName(UoM$1.Untag$3(a$4)))(r);
     pName=p$28[0];
     oName=p$28[1];
     return View.Bind(function(a$5)
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
      return a$5==null?View.Map(function(a$6)
      {
       return{
        $:0,
        $0:a$6
       };
      },View.Map(function(o)
      {
       return o==null?d():o.$0;
      },AppFramework.tryGetWoWW(pName,oName))):View.Const({
       $:1,
       $0:a$5.$0
      });
     },AppFramework.tryGetActW(pName,oName));
    });
   });
  }));
  SC$1.extractTextD$1=Extract0.extractTextD();
  SC$1.extractDocD$1=Extract0.extractDocD();
  SC$1.extractAtsD$1=Extract0.extractAtsD();
  SC$1.extractAttD=(b$9=Operators$2.depend(),b$9.Delay(function()
  {
   return b$9.Bind(AppFramework.extractAtsD(),function(a$4)
   {
    return b$9.Return(function(p$28)
    {
     return AttrProxy.Concat(a$4(p$28));
    });
   });
  }));
  SC$1.runDef=(p=UoM$1.Tag$3("AppFramework"),function(d)
  {
   return AppFramework.run(p,d);
  });
  a=(b$10=AppFramework.plugin(),b$10.AddAct(b$10.AddAct2(b$10.AddDoc3(b$10.AddDoc3(b$10.AddDoc2(b$10.AddDoc(b$10.AddVar(b$10.Name(b$10.Yield(),"AppFramework"),"mainDocV",AppFramework.mainDocV()),"AppFwkClient",AppFramework.AppFwkClient()),"TrigAction",function(t$20)
  {
   return function(a$4)
   {
    return AppFramework.trigAct(t$20,a$4);
   };
  },"Trigger","Action"),"InputFile",Runtime$1.Curried3(AppFramework.inputFile),"attrs","Label","Action"),"InputLabel",Runtime$1.Curried3(AppFramework.inputLabel),"attrs","Label","Var"),"SetVar",function(v$1)
  {
   return function(v$2)
   {
    return AppFramework.setVar(v$1,v$2);
   };
  },"Var","Value"),"Hello",function()
  {
   self.alert("Hello!");
  }));
  AppFramework.plugIns().Append(a);
  a$1=(b$11=AppFramework.plugin(),b$11.AddQry(b$11.AddAct(b$11.AddAct2(b$11.AddDoc3(b$11.AddDoc3(b$11.AddDoc4(b$11.AddDoc2(b$11.Name(b$11.Yield(),"AF"),"TrigAction",function(t$20)
  {
   return function(a$4)
   {
    return AppFramework.trigAct(t$20,a$4);
   };
  },"Trigger","Action"),"Select",Runtime$1.Curried(AppFramework.select,4),"Attrs","None","Vals","Var"),"InputFile",Runtime$1.Curried3(AppFramework.inputFile),"Attrs","Label","Action"),"InputLabel",Runtime$1.Curried3(AppFramework.inputLabel),"Attrs","Label","Var"),"SetVar",function(v$1)
  {
   return function(v$2)
   {
    return AppFramework.setVar(v$1,v$2);
   };
  },"Var","Value"),"Hello",function()
  {
   self.alert("Hello!");
  }),"getDocNames",function()
  {
   return Arrays.ofSeq(Seq$1.collect(function(plg)
   {
    return Seq$1.map(function(doc)
    {
     return plg.plgName+"."+doc.docName;
    },plg.plgDocs);
   },(AppFramework.plugIns())["var"].Get()));
  }));
  AppFramework.plugIns().Append(a$1);
  SC$1.getMainDoc=Lazy.Create(function()
  {
   WcSplitter.init(Runtime$1.Curried(AppFramework.horizontal,5),Runtime$1.Curried(AppFramework.vertical,5));
   WcTabStrip.init().f();
   return AppFramework.mainDoc();
  });
  SC$1.splitName=AppFramework.splitName;
  SC$1.currentViewTriggger=AppFramework.mainDocV().get_View();
  SC$1.createSplitterM=(p$1=(cache=new Dictionary.New$5(),[[checkO,function($1)
  {
   return function($2)
   {
    return getOrAdd$21($1,$2);
   };
  }],function()
  {
   cache.Clear();
  }]),(getOrAdd=p$1[0][1],[function(p$28)
  {
   return(getOrAdd(p$28))(function($1)
   {
    return LayoutEngineModule.createSplitter($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$1[1]]))[0];
  SC$1.createButtonM=(p$2=(cache$1=new Dictionary.New$5(),[[checkO$1,function($1)
  {
   return function($2)
   {
    return getOrAdd$22($1,$2);
   };
  }],function()
  {
   cache$1.Clear();
  }]),(getOrAdd$1=p$2[0][1],[function(p$28)
  {
   return(getOrAdd$1(p$28))(function($1)
   {
    return LayoutEngineModule.createButton($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$2[1]]))[0];
  SC$1.createInputM=(p$3=(cache$2=new Dictionary.New$5(),[[checkO$2,function($1)
  {
   return function($2)
   {
    return getOrAdd$23($1,$2);
   };
  }],function()
  {
   cache$2.Clear();
  }]),(getOrAdd$2=p$3[0][1],[function(p$28)
  {
   return(getOrAdd$2(p$28))(function($1)
   {
    return LayoutEngineModule.createInput($1[0],$1[1],$1[2],$1[3]);
   });
  },p$3[1]]))[0];
  SC$1.createTextAreaM=(p$4=(cache$3=new Dictionary.New$5(),[[checkO$3,function($1)
  {
   return function($2)
   {
    return getOrAdd$24($1,$2);
   };
  }],function()
  {
   cache$3.Clear();
  }]),(getOrAdd$3=p$4[0][1],[function(p$28)
  {
   return(getOrAdd$3(p$28))(function($1)
   {
    return LayoutEngineModule.createTextArea($1[0],$1[1],$1[2],$1[3]);
   });
  },p$4[1]]))[0];
  SC$1.createElementM=(p$5=(cache$4=new Dictionary.New$5(),[[checkO$4,function($1)
  {
   return function($2)
   {
    return getOrAdd$25($1,$2);
   };
  }],function()
  {
   cache$4.Clear();
  }]),(getOrAdd$4=p$5[0][1],[function(p$28)
  {
   return(getOrAdd$4(p$28))(function($1)
   {
    return LayoutEngineModule.createElement($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$5[1]]))[0];
  SC$1.createDocM=(p$6=(cache$5=new Dictionary.New$5(),[[checkO$5,function($1)
  {
   return function($2)
   {
    return getOrAdd$26($1,$2);
   };
  }],function()
  {
   cache$5.Clear();
  }]),(getOrAdd$5=p$6[0][1],[function(p$28)
  {
   return(getOrAdd$5(p$28))(function($1)
   {
    return LayoutEngineModule.createDoc($1[0],$1[1],$1[2],$1[3]);
   });
  },p$6[1]]))[0];
  SC$1.createTemplateM=(p$7=(cache$6=new Dictionary.New$5(),[[checkO$6,function($1)
  {
   return function($2)
   {
    return getOrAdd$27($1,$2);
   };
  }],function()
  {
   cache$6.Clear();
  }]),(getOrAdd$6=p$7[0][1],[function(p$28)
  {
   return(getOrAdd$6(p$28))(function($1)
   {
    return LayoutEngineModule.createTemplate($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$7[1]]))[0];
  SC$1.createConcatM=(p$8=(cache$7=new Dictionary.New$5(),[[checkO$7,function($1)
  {
   return function($2)
   {
    return getOrAdd$28($1,$2);
   };
  }],function()
  {
   cache$7.Clear();
  }]),(getOrAdd$7=p$8[0][1],[function(p$28)
  {
   return(getOrAdd$7(p$28))(function($1)
   {
    return LayoutEngineModule.createConcat($1[0],$1[1],$1[2]);
   });
  },p$8[1]]))[0];
  SC$1.createVarM=(p$9=(cache$8=new Dictionary.New$5(),[[checkO$8,function($1)
  {
   return function($2)
   {
    return getOrAdd$29($1,$2);
   };
  }],function()
  {
   cache$8.Clear();
  }]),(getOrAdd$8=p$9[0][1],[function(p$28)
  {
   return(getOrAdd$8(p$28))(function($1)
   {
    return LayoutEngineModule.createVar($1[0],$1[1],$1[2]);
   });
  },p$9[1]]))[0];
  SC$1.createViewM=(p$10=(cache$9=new Dictionary.New$5(),[[checkO$9,function($1)
  {
   return function($2)
   {
    return getOrAdd$30($1,$2);
   };
  }],function()
  {
   cache$9.Clear();
  }]),(getOrAdd$9=p$10[0][1],[function(p$28)
  {
   return(getOrAdd$9(p$28))(function($1)
   {
    return LayoutEngineModule.createView($1[0],$1[1],$1[2]);
   });
  },p$10[1]]))[0];
  SC$1.createActionM=(p$11=(cache$10=new Dictionary.New$5(),[[checkO$10,function($1)
  {
   return function($2)
   {
    return getOrAdd$31($1,$2);
   };
  }],function()
  {
   cache$10.Clear();
  }]),(getOrAdd$10=p$11[0][1],[function(p$28)
  {
   return(getOrAdd$10(p$28))(function($1)
   {
    return LayoutEngineModule.createAction($1[0],$1[1],$1[2],$1[3]);
   });
  },p$11[1]]))[0];
  x$3=AppFramework.tryGetPlugIn("AppFramework");
  (Option.iter(function(plg)
  {
   plg.plgActions.Append(AppFramework.newActF("AddLayout",{
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
   }));
  }))(x$3);
  SC$1.htmlD=Depend.dependByName("AppFrameworkTemplate.html",AppFrameworkTemplate.html(),Global.id);
  SC$1.startWithHtmlD=(b$12=Depend.depend(),b$12.Delay(function()
  {
   return b$12.Bind(StartAppFramework.htmlD(),function(a$4)
   {
    return b$12.Return(function()
    {
     var d,x$4,a$5;
     d=self.document.createElement("div");
     self.document.body.appendChild(d);
     d.outerHTML=a$4;
     x$4=AppFramework.getMainDoc().f();
     a$5=self.document.body;
     Templates.LoadLocalTemplates("");
     Doc.RunAppend(a$5,x$4);
    });
   });
  }));
  SC$1.unselectorV=new FromView.New(View.Const(null),Global.ignore);
  SC$1.plugin$1=new PlugInBuilder$1.New();
  SC$1.html$1="\r\n                <div ws-template=\"Snippet\" >\r\n                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                         ws-ondrag=\"Drag\"\r\n                         ws-ondragover=\"DragOver\"\r\n                         ws-ondrop=\"Drop\"\r\n                        >\r\n                        <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                        <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                        <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                    </div>\r\n                </div>\r\n                <style>\r\n                    .Hidden     { display   : none         }\r\n                    table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                    td input.form-control { \r\n                        padding    : 0px; \r\n                        font-family: monospace;\r\n                        font-size  :   small;\r\n                        margin-top :   0px;\r\n                        margin-left: -2px;\r\n                        width      : 100%\r\n                    }\r\n                    td select {\r\n                        font-size : smaller;\r\n                        max-width : 8ch;\r\n                    }\r\n                    textarea {\r\n                       resize : none;\r\n                    }\r\n                    .tab-content {\r\n                        overflow: hidden\r\n                    }\r\n                    .tab-children {\r\n                        position:relative;\r\n                    }\r\n                    .tab-children>div>* {\r\n                        position:absolute;\r\n                        height: 100%;\r\n                        width:  100%;\r\n                        display: grid;\r\n                    }\r\n                    .relative {\r\n                        position:relative;\r\n                    }\r\n                    .relative>* {\r\n                        position:absolute;\r\n                        height: 100%;\r\n                        width:  100%;\r\n                        display: grid;\r\n                    }\r\n                    table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                    table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                    table.table-striped    tbody input              { background: transparent; border: none}\r\n                    table.table-striped    tbody select             { background: transparent; border: none}\r\n                    table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                    table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                    table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                    table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                    table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                    table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                               border-bottom: solid thin blue     ; } \r\n                    table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                    table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                    thead { color: gray }\r\n                    h3 { \r\n                        color: gray;\r\n                        line-height: 1em;\r\n                    }\r\n                    button       { border: solid thin transparent ; border-radius: 3px; }\r\n                    button:hover { border: solid thin blue }\r\n                    .indenter { position  : absolute; \r\n                                top:0px; bottom:0px; left:0px; \r\n                                background: white; color:white;\r\n                                border-right: gray thin dotted;\r\n                                }\r\n                    body {\r\n                        color      : #333;\r\n                        font-size  : small;\r\n                        font-family: monospace;\r\n                        line-height: 1.2;\r\n                    }\r\n                    .mainTitle {  \r\n                        font-size: 48px;\r\n                        font-weight: 500;\r\n                        color: gray;\r\n                        margin-top: -12px;\r\n                    }\r\n                    .CodeMirror {\r\n                        height: 100%;\r\n                    }\r\n                    \r\n                  \r\n                    body { margin: 0px }     \r\n                         \r\n                    div textarea {\r\n                        font-family     : monospace;\r\n                    }\r\n                    .code-editor-list-tile {\r\n                        white-space     : nowrap; \r\n                        border-style    : solid none none;\r\n                        border-color    : white;\r\n                        border-width    : 1px;\r\n                        background-color: #D8D8D8;\r\n                        display         : flex;\r\n                    }\r\n                    .code-editor-list-text{\r\n                        padding         : 1px 10px 1px 5px;\r\n                        overflow        : hidden;\r\n                        text-overflow   : ellipsis;\r\n                        white-space     : nowrap;\r\n                        flex            : 1;\r\n                    }\r\n                    \r\n                    .code-editor-list-tile span.node.ErrorMsg {\r\n                        background-color: red\r\n                    }\r\n                    .code-editor-list-tile span.node.expanded::before {\r\n                        content: \"-\"\r\n                    }\r\n                    .code-editor-list-tile span.node.collapsed::before {\r\n                        content: \"+\"\r\n                    }\r\n                    .code-editor-list-tile.direct-predecessor {\r\n                        font-weight     : bold;\r\n                        color           : blue;\r\n                    }\r\n                    .code-editor-list-tile.indirect-predecessor {\r\n                        color           : blue;\r\n                    }\r\n                    .code-editor-list-tile.included-predecessor {\r\n                        color           : chocolate;\r\n                    }\r\n                    .code-editor-list-tile.selected {\r\n                        background-color: #77F;\r\n                        color           : white;\r\n                    }\r\n                    .code-editor-list-tile.codeSnippet {\r\n                        text-decoration : underline;\r\n                        font-weight     : bold;\r\n                    }\r\n                    .code-editor-list-tile:hover {\r\n                        background      : lightgray;\r\n                    }\r\n                    .code-editor-list-tile.selected:hover {\r\n                        background      : blue;\r\n                    }\r\n                    .code-editor-list-tile>.predecessor {\r\n                        font-weight     : bold;\r\n                        border-style    : inset;\r\n                        border-width    : 1px;\r\n                        text-align      : center;\r\n                        color           : transparent;\r\n                    }\r\n                    .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                        color           : blue;\r\n                    }\r\n                    \r\n                    .CodeMirror { height: 100%; }\r\n                    \r\n                    .node {\r\n                        background-color: white; \r\n                        width           : 2ch; \r\n                        color           : #A03; \r\n                        font-weight     : bold; \r\n                        text-align      : center;\r\n                        font-family     : arial;\r\n                    }\r\n                    .Warning { text-decoration: underline lightblue } \r\n                    .Error   { text-decoration: underline red       } \r\n                    \r\n                </style>\r\n            ";
  SC$1.aV=Var$1.Create$1(4);
  SC$1.pa=NewLY.aV().get_View();
  SC$1.pb=6.2;
  SC$1.currentPlugInNameDef$1=UoM$1.Tag$3("NewLYx");
  SC$1.currentPlugInNameD$1=Depend.dependByName("currentPlugInName",NewLY.currentPlugInNameDef(),Global.id);
  SC$1.name=Var$1.Create$1("World");
  SC$1.enterName=(pf=AppFramework.op_Dereference(NewLY.checkName),(p$12={
   $:0,
   $0:NewLY.name().get_View()
  },P.New(Operators$2.op_BarGreaterGreater(pf.r,function(f$5)
  {
   return Fun.New(f$5,p$12);
  }))));
  SC$1.now=(pf$1=AppFramework.op_Dereference(function()
  {
   var n;
   n=new Date(Date.now());
   return n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)+" "+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+":"+("00"+n.getMilliseconds()).slice(-3);
  }),(p$13={
   $:0,
   $0:NewLY.name().get_View()
  },P.New(Operators$2.op_BarGreaterGreater(pf$1.r,function(f$5)
  {
   return Fun.New(f$5,p$13);
  }))));
  SC$1.sayHello=(sayHello_0=(c=(vf=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(extractDoc)
  {
   var p$28;
   p$28={
    $:1,
    $0:[extractDoc("Hello @{name}!")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf.r,function(f$5)
   {
    return Fun.New(f$5,p$28);
   }));
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{
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
    }),c$14.p));
   },c);
  },NewLY.enterName().r)),(a$2=(vf$1=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(extractDoc)
  {
   var p$28;
   p$28={
    $:1,
    $0:[extractDoc("How are you?")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$1.r,function(f$5)
   {
    return Fun.New(f$5,p$28);
   }));
  },AppFramework.extractDocD())),(c$1=(vf$2=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(aF)
  {
   var p$28;
   p$28={
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
   return P.New(Operators$2.op_BarGreaterGreater(vf$2.r,function(f$5)
   {
    return Fun.New(f$5,p$28);
   }));
  },sayHello_0.r)),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(AppFramework.makeAViewDoc(function()
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
    }),c$14.p));
   },c$1);
  },a$2.r))));
  SC$1.aString=Var$1.Lens(NewLY.aV(),Global.String,function(a$4,v$1)
  {
   return Operators$5.toInt(Global.Number(v$1));
  });
  SC$1.main0=(pc=(pf$2=AppFramework.op_Dereference(function(a$4)
  {
   return function(b$24)
   {
    return NewLY.concat(a$4,b$24);
   };
  }),(p$14={
   $:0,
   $0:NewLY.aV().get_View()
  },P.New(Operators$2.op_BarGreaterGreater(pf$2.r,function(f$5)
  {
   return Fun.New(f$5,p$14);
  })))),(p$15={
   $:1,
   $0:3.2
  },P.New(Operators$2.op_BarGreaterGreater(pc.r,function(c$14)
  {
   return Fun.New(c$14.f.$==0?c$14.p.$==1?{
    $:0,
    $0:View.Apply(c$14.f.$0,View.Const(c$14.p.$0))
   }:{
    $:0,
    $0:View.Apply(c$14.f.$0,c$14.p.$0)
   }:c$14.p.$==0?{
    $:0,
    $0:View.Apply(View.Const(c$14.f.$0),c$14.p.$0)
   }:{
    $:1,
    $0:c$14.f.$0(c$14.p.$0)
   },p$15);
  }))));
  SC$1.main1=(pc$1=(vf$3=AppFramework.op_Dereference((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1("result = "+Utils.toSafe($2)+" "+Utils.toSafe($3));
  }))(Global.id)),AppFramework.bindWrap(function(aF)
  {
   var p$28;
   p$28=aF.f.$==0?aF.p.$==1?{
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
   return P.New(Operators$2.op_BarGreaterGreater(vf$3.r,function(f$5)
   {
    return Fun.New(f$5,p$28);
   }));
  },NewLY.main0().r)),(p$16={
   $:1,
   $0:"main0"
  },P.New(Operators$2.op_BarGreaterGreater(pc$1.r,function(c$14)
  {
   return Fun.New(c$14.f.$==0?c$14.p.$==1?{
    $:0,
    $0:View.Apply(c$14.f.$0,View.Const(c$14.p.$0))
   }:{
    $:0,
    $0:View.Apply(c$14.f.$0,c$14.p.$0)
   }:c$14.p.$==0?{
    $:0,
    $0:View.Apply(View.Const(c$14.f.$0),c$14.p.$0)
   }:{
    $:1,
    $0:c$14.f.$0(c$14.p.$0)
   },p$16);
  }))));
  SC$1.main=(c$2=(c$3=(c$4=(c$5=(c$6=(c$7=(c$8=(c$9=(c$10=(vf$4=AppFramework.op_Dereference((Runtime$1.Curried3(Doc.Element))("h3")),AppFramework.bindWrap(function(extractAts)
  {
   var p$28;
   p$28={
    $:1,
    $0:extractAts("color:@{name}; background:red; click=@{AppFramework.Hello}")
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$4.r,function(f$5)
   {
    return Fun.New(f$5,p$28);
   }));
  },AppFramework.extractAtsD())),AppFramework.bindWrap(function(extractDoc)
  {
   var p$28;
   p$28={
    $:1,
    $0:[extractDoc("MAIN:")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(c$10.r,function(c$14)
   {
    return Fun.New(c$14.f.$==0?c$14.p.$==1?{
     $:0,
     $0:View.Apply(c$14.f.$0,View.Const(c$14.p.$0))
    }:{
     $:0,
     $0:View.Apply(c$14.f.$0,c$14.p.$0)
    }:c$14.p.$==0?{
     $:0,
     $0:View.Apply(View.Const(c$14.f.$0),c$14.p.$0)
    }:{
     $:1,
     $0:c$14.f.$0(c$14.p.$0)
    },p$28);
   }));
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{
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
    }),c$14.p));
   },c$9);
  },NewLY.main1().r)),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{
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
    }),c$14.p));
   },c$8);
  },NewLY.main1().r)),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(extractDoc(":"),c$14.p));
   },c$7);
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(AppFramework.makeAViewDoc(function()
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
    }),c$14.p));
   },c$6);
  },NewLY.sayHello().r)),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(extractDoc(":"),c$14.p));
   },c$5);
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(extractDoc(" Más >> "),c$14.p));
   },c$4);
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(AppFramework.makeAViewDoc(function()
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
    }),c$14.p));
   },c$3);
  },NewLY.sayHello().r)),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$14)
   {
    return Fun.New(c$14.f,Val.addDoc(extractDoc(" <<"),c$14.p));
   },c$2);
  },AppFramework.extractDocD()));
  SC$1.main2=AppFramework.makeAViewDoc(function()
  {
   return Doc.Element("h4",[AttrModule.Dynamic("style",View.Map(function($1)
   {
    return"color:"+$1;
   },NewLY.name().get_View()))],[Doc.TextNode("MAIN2:"),Doc.TextView(NewLY.name().get_View())]);
  });
  SC$1.appFwk=(c$11=(vf$5=AppFramework.op_Dereference((Runtime$1.Curried3(Doc.Element))("div")),AppFramework.bindWrap(function(extractAts)
  {
   var p$28;
   p$28={
    $:1,
    $0:extractAts("color:@{name}")
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$5.r,function(f$5)
   {
    return Fun.New(f$5,p$28);
   }));
  },AppFramework.extractAtsD())),AppFramework.bindWrap(function(extractDoc)
  {
   var p$28;
   p$28={
    $:1,
    $0:[extractDoc("@{AppFramework.AppFwkClient}")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(c$11.r,function(c$14)
   {
    return Fun.New(c$14.f.$==0?c$14.p.$==1?{
     $:0,
     $0:View.Apply(c$14.f.$0,View.Const(c$14.p.$0))
    }:{
     $:0,
     $0:View.Apply(c$14.f.$0,c$14.p.$0)
    }:c$14.p.$==0?{
     $:0,
     $0:View.Apply(View.Const(c$14.f.$0),c$14.p.$0)
    }:{
     $:1,
     $0:c$14.f.$0(c$14.p.$0)
    },p$28);
   }));
  },AppFramework.extractDocD()));
  SC$1.split=(c$12=(vf$6=AppFramework.op_Dereference(Runtime$1.Curried(LayoutEngineModule.variableSplitter,2,[false,0,50,100])),AppFramework.bindWrap(function(aF)
  {
   var p$28;
   p$28={
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
   return P.New(Operators$2.op_BarGreaterGreater(vf$6.r,function(f$5)
   {
    return Fun.New(f$5,p$28);
   }));
  },NewLY.appFwk().r)),AppFramework.bindWrap(function(aF)
  {
   var p$28;
   p$28={
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
   return P.New(Operators$2.op_BarGreaterGreater(c$12.r,function(c$14)
   {
    return Fun.New(c$14.f.$==0?c$14.p.$==1?{
     $:0,
     $0:View.Apply(c$14.f.$0,View.Const(c$14.p.$0))
    }:{
     $:0,
     $0:View.Apply(c$14.f.$0,c$14.p.$0)
    }:c$14.p.$==0?{
     $:0,
     $0:View.Apply(View.Const(c$14.f.$0),c$14.p.$0)
    }:{
     $:1,
     $0:c$14.f.$0(c$14.p.$0)
    },p$28);
   }));
  },NewLY.main().r));
  SC$1.split2=(pc$2=(vf$7=AppFramework.op_Dereference(Runtime$1.Curried(LayoutEngineModule.variableSplitter,2,[false,0,50,100])),AppFramework.bindWrap(function(aF)
  {
   var p$28;
   p$28={
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
   return P.New(Operators$2.op_BarGreaterGreater(vf$7.r,function(f$5)
   {
    return Fun.New(f$5,p$28);
   }));
  },NewLY.appFwk().r)),(p$17={
   $:1,
   $0:NewLY.main2()
  },P.New(Operators$2.op_BarGreaterGreater(pc$2.r,function(c$14)
  {
   return Fun.New(c$14.f.$==0?c$14.p.$==1?{
    $:0,
    $0:View.Apply(c$14.f.$0,View.Const(c$14.p.$0))
   }:{
    $:0,
    $0:View.Apply(c$14.f.$0,c$14.p.$0)
   }:c$14.p.$==0?{
    $:0,
    $0:View.Apply(View.Const(c$14.f.$0),c$14.p.$0)
   }:{
    $:1,
    $0:c$14.f.$0(c$14.p.$0)
   },p$17);
  }))));
  SC$1.pName=UoM$1.Tag$3("NewLY");
  AppFramework.addPlugIn((b$13=AppFramework.plugin(),b$13.AddDoc(b$13.AddDoc(b$13.AddDoc(b$13.AddDoc(b$13.AddDoc(b$13.AddDoc(b$13.AddVar(b$13.AddVar(b$13.Name(b$13.Yield(),UoM$1.Untag$3(NewLY.pName())),"name",NewLY.name()),"a",NewLY.aString()),"split",Lazy.Create(function()
  {
   var p$28;
   p$28=NewLY.split();
   return NewLY.callDocPFn(NewLY.pName(),p$28);
  })),"split2",Lazy.Create(function()
  {
   var p$28;
   p$28=NewLY.split2();
   return NewLY.callDocPFn(NewLY.pName(),p$28);
  })),"main",Lazy.Create(function()
  {
   var p$28;
   p$28=NewLY.main();
   return NewLY.callDocPFn(NewLY.pName(),p$28);
  })),"main2",Lazy.Create(NewLY.main2)),"sayHello",Lazy.Create(function()
  {
   var p$28;
   p$28=NewLY.sayHello();
   return NewLY.callDocPFn(NewLY.pName(),p$28);
  })),"sayHello2",Lazy.Create(function()
  {
   var p$28;
   p$28=NewLY.sayHello();
   return NewLY.callDocPFn(NewLY.pName(),p$28);
  }))));
  SC$1.attrValToAttrD=(b$14=Depend.depend(),b$14.Delay(function()
  {
   return b$14.Bind(Extract0.getTextValFromTextTypesD(),function(a$4)
   {
    return b$14.Bind(Extract0.getTextValD(),function()
    {
     function f$5(a$5)
     {
      var $1,an,an$1;
      return(a$5.$==2?($1=[a$5.$0,NewLY.ActRVs(a$5.$1)],false):a$5.$==1?($1=[a$5.$0,a$5.$1],false):true)?(an=a$5.$0,[a$5.$1,function(a$6)
      {
       return AppFramework.valToStyle(an,a$6);
      }]):(an$1=$1[0],[$1[1],function(a$6)
      {
       return AppFramework.valToAttr(an$1,a$6);
      }]);
     }
     function g$6(vs,f$6)
     {
      return f$6(a$4(List.map(NewLY.textValToTextType,vs)));
     }
     return b$14.Return(function(x$4)
     {
      return g$6.apply(null,f$5(x$4));
     });
    });
   });
  }));
  SC$1.nodeRefToDocD=(b$15=Depend.depend(),b$15.Delay(function()
  {
   return b$15.Bind(Extract0.getDocFromTextTypesD(),function(a$4)
   {
    return b$15.Return(function(a$5)
    {
     var $1;
     return(a$5.$==1?($1=a$5.$0.$0,false):a$5.$==2?($1=a$5.$0.$0,false):a$5.$==3?($1=a$5.$0.$0,false):true)?a$4(List.map(NewLY.textValToTextType,a$5.$0)):a$4(List.ofArray([NewLY.itemRefToTextType($1)]));
    });
   });
  }));
  SC$1.varRefToVarD=(b$16=Depend.depend(),b$16.Delay(function()
  {
   return b$16.Bind(NewLY.currentPlugInNameD(),function(a$4)
   {
    return b$16.Return(function(a$5)
    {
     var r,o,o$1,t$20;
     r=NewLY.itemRefToString(a$5.$0);
     o=(o$1=(t$20=(AppFramework.splitName(UoM$1.Untag$3(a$4)))(r),AppFramework.tryGetVar(t$20[0],t$20[1])),o$1==null?null:{
      $:1,
      $0:o$1.$0.varVar
     });
     return o==null?new FromView.New(View.Const((function($1)
     {
      return function($2)
      {
       return $1("Could not find var "+Utils.toSafe($2));
      };
     }(Global.id))(r)),Global.ignore):o.$0;
    });
   });
  }));
  SC$1.getParamD=(b$17=Depend.depend(),b$17.Delay(function()
  {
   return b$17.Bind(NewLY.currentPlugInNameD(),function(a$4)
   {
    return b$17.Bind(Extract0.getTextValFromSeqD(),function(a$5)
    {
     return b$17.Return(function(p$28)
     {
      var lytN,r,f$5,m,g$6,r$1,f$6,m$1,g$7,g$8,r$2,f$7,m$2,g$9,g$10,r$3,f$8,m$3,g$11;
      function f$9(d$4)
      {
       return d$4.docDoc;
      }
      function d()
      {
       return(function($1)
       {
        return function($2)
        {
         return $1("missing ref Doc "+testing_GeneratedPrintf.p($2));
        };
       }(Global.id))(r);
      }
      function f$10(v$1)
      {
       return v$1.varVar.get_View();
      }
      function d$1()
      {
       return View.Const((function($1)
       {
        return function($2)
        {
         return $1("missing ref Var "+testing_GeneratedPrintf.p($2));
        };
       }(Global.id))(r$1));
      }
      function f$11(v$1)
      {
       return v$1.viwView;
      }
      function d$2()
      {
       return View.Const((function($1)
       {
        return function($2)
        {
         return $1("missing ref View "+testing_GeneratedPrintf.p($2));
        };
       }(Global.id))(r$2));
      }
      function f$12(v$1)
      {
       return v$1.actFunction;
      }
      function d$3()
      {
       return(function($1)
       {
        return function($2)
        {
         return $1("missing ref Action "+testing_GeneratedPrintf.p($2));
        };
       }(Global.id))(r$3);
      }
      lytN=UoM$1.Untag$3(a$4);
      return p$28.$==1?(r=p$28.$0.$0,View.Map((f$5=(m=function(x$4)
      {
       var v$1;
       v$1=f$9(x$4);
       return v$1;
      },function(o)
      {
       return o==null?null:{
        $:1,
        $0:m(o.$0)
       };
      }),(g$6=function(o)
      {
       return o==null?d():o.$0;
      },function(x$4)
      {
       return g$6(f$5(x$4));
      })),AppFramework.tryGetDocW(lytN,NewLY.itemRefToString(r)))):p$28.$==2?(r$1=p$28.$0.$0,View.Bind((f$6=(m$1=(g$7=function(a$6)
      {
       return View.Map(Global.id,a$6);
      },function(x$4)
      {
       return g$7(f$10(x$4));
      }),function(o)
      {
       return o==null?null:{
        $:1,
        $0:m$1(o.$0)
       };
      }),(g$8=function(o)
      {
       return o==null?d$1():o.$0;
      },function(x$4)
      {
       return g$8(f$6(x$4));
      })),AppFramework.tryGetVarW(lytN,NewLY.itemRefToString(r$1)))):p$28.$==3?(r$2=p$28.$0.$0,View.Bind((f$7=(m$2=(g$9=function(a$6)
      {
       return View.Map(Global.id,a$6);
      },function(x$4)
      {
       return g$9(f$11(x$4));
      }),function(o)
      {
       return o==null?null:{
        $:1,
        $0:m$2(o.$0)
       };
      }),(g$10=function(o)
      {
       return o==null?d$2():o.$0;
      },function(x$4)
      {
       return g$10(f$7(x$4));
      })),AppFramework.tryGetViwW(lytN,NewLY.itemRefToString(r$2)))):p$28.$==4?(r$3=p$28.$0.$0,View.Map((f$8=(m$3=function(x$4)
      {
       var v$1;
       v$1=f$12(x$4);
       return v$1;
      },function(o)
      {
       return o==null?null:{
        $:1,
        $0:m$3(o.$0)
       };
      }),(g$11=function(o)
      {
       return o==null?d$3():o.$0;
      },function(x$4)
      {
       return g$11(f$8(x$4));
      })),AppFramework.tryGetActW(lytN,NewLY.itemRefToString(r$3)))):View.Map(Global.id,Val.toView(Val.map(AppFramework.choiceToString,a$5(List.map(NewLY.textValToTextType,p$28.$0)))));
     });
    });
   });
  }));
  SC$1.getParam2D=(b$18=Depend.depend(),b$18.Delay(function()
  {
   return b$18.Bind(NewLY.currentPlugInNameD(),function(a$4)
   {
    return b$18.Bind(Extract0.getTextValFromSeqD(),function()
    {
     return b$18.Return(function(p$28)
     {
      var toAbs,f$5,g$6,$1;
      toAbs=(f$5=NewLY.itemRefToAbsolute(UoM$1.Untag$3(a$4)),(g$6=function($2)
      {
       return function($3)
       {
        return $2("@{"+Utils.toSafe($3)+"}");
       };
      }(Global.id),function(x$4)
      {
       return g$6(f$5(x$4));
      }));
      return(p$28.$==3?($1=p$28.$0.$0,false):p$28.$==1?($1=p$28.$0.$0,false):p$28.$==2?($1=p$28.$0.$0,false):p$28.$==4?($1=p$28.$0.$0,false):true)?Strings.concat("",Seq$1.map(function(a$5)
      {
       var $2;
       return(a$5.$==1?($2=a$5.$0.$0,false):a$5.$==2?($2=a$5.$0.$0,false):true)?a$5.$0:toAbs($2);
      },p$28.$0)):toAbs($1);
     });
    });
   });
  }));
  SC$1.getParamTextD=(b$19=Depend.depend(),b$19.Delay(function()
  {
   return b$19.Bind(NewLY.currentPlugInNameD(),function(a$4)
   {
    return b$19.Bind(Extract0.getTextValFromSeqD(),function(a$5)
    {
     return b$19.Return(function(p$28)
     {
      return function(f$5)
      {
       var lytN,x$4,f$6,x$5,g$6,a$6,x$6,g$7,a$7,x$7,f$7;
       function f$8(d)
       {
        return d.docDoc;
       }
       function f$9(v$1)
       {
        return v$1.varVar.get_View();
       }
       function f$10(v$1)
       {
        return v$1.viwView;
       }
       function f$11(v$1)
       {
        return v$1.actFunction;
       }
       lytN=UoM$1.Untag$3(a$4);
       return p$28.$==1?(x$4=AppFramework.tryGetDoc(lytN,NewLY.itemRefToString(p$28.$0.$0)),(Option.iter((f$6=function(x$8)
       {
        var v$1;
        v$1=f$8(x$8);
        return v$1;
       },function(x$8)
       {
        return f$5(f$6(x$8));
       })))(x$4)):p$28.$==2?(x$5=AppFramework.tryGetVar(lytN,NewLY.itemRefToString(p$28.$0.$0)),(Option.iter((g$6=(a$6=function(x$8)
       {
        return f$5(Global.id(x$8));
       },function(a$8)
       {
        View.Get(a$6,a$8);
       }),function(x$8)
       {
        return g$6(f$9(x$8));
       })))(x$5)):p$28.$==3?(x$6=AppFramework.tryGetViw(lytN,NewLY.itemRefToString(p$28.$0.$0)),(Option.iter((g$7=(a$7=function(x$8)
       {
        return f$5(Global.id(x$8));
       },function(a$8)
       {
        View.Get(a$7,a$8);
       }),function(x$8)
       {
        return g$7(f$10(x$8));
       })))(x$6)):p$28.$==4?(x$7=AppFramework.tryGetAct(lytN,NewLY.itemRefToString(p$28.$0.$0)),(Option.iter((f$7=function(x$8)
       {
        var v$1;
        v$1=f$11(x$8);
        return v$1;
       },function(x$8)
       {
        return f$5(f$7(x$8));
       })))(x$7)):View.Get(function(x$8)
       {
        return f$5(Global.id(x$8));
       },Val.toView(Val.map(AppFramework.choiceToString,a$5(List.map(NewLY.textValToTextType,p$28.$0)))));
      };
     });
    });
   });
  }));
  SC$1.initVal="-<InitValue>-";
  SC$1.defVarM0=(p$18=(cache$11=new Dictionary.New$5(),[[checkO$11,function($1)
  {
   return function($2)
   {
    return getOrAdd$32($1,$2);
   };
  }],function()
  {
   cache$11.Clear();
  }]),(getOrAdd$11=p$18[0][1],[function(p$28)
  {
   return(getOrAdd$11(p$28))(function($1)
   {
    return NewLY.defVar($1[0],$1[1],$1[2]);
   });
  },p$18[1]]))[0];
  SC$1.defDocFM=(p$19=(cache$12=new Dictionary.New$5(),[[checkO$12,function($1)
  {
   return function($2)
   {
    return getOrAdd$33($1,$2);
   };
  }],function()
  {
   cache$12.Clear();
  }]),(getOrAdd$12=p$19[0][1],[function(p$28)
  {
   return(getOrAdd$12(p$28))(function($1)
   {
    return NewLY.defDocF($1[0],$1[1],$1[2],$1[3]);
   });
  },p$19[1]]))[0];
  SC$1.defActionM=(p$20=(cache$13=new Dictionary.New$5(),[[checkO$13,function($1)
  {
   return function($2)
   {
    return getOrAdd$34($1,$2);
   };
  }],function()
  {
   cache$13.Clear();
  }]),(getOrAdd$13=p$20[0][1],[function(p$28)
  {
   return(getOrAdd$13(p$28))(function($1)
   {
    return NewLY.defAction($1[0],$1[1],$1[2],$1[3]);
   });
  },p$20[1]]))[0];
  SC$1.defButtonM=(p$21=(cache$14=new Dictionary.New$5(),[[checkO$14,function($1)
  {
   return function($2)
   {
    return getOrAdd$35($1,$2);
   };
  }],function()
  {
   cache$14.Clear();
  }]),(getOrAdd$14=p$21[0][1],[function(p$28)
  {
   return(getOrAdd$14(p$28))(function($1)
   {
    return NewLY.defButton($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$21[1]]))[0];
  SC$1.defInputM=(p$22=(cache$15=new Dictionary.New$5(),[[checkO$15,function($1)
  {
   return function($2)
   {
    return getOrAdd$36($1,$2);
   };
  }],function()
  {
   cache$15.Clear();
  }]),(getOrAdd$15=p$22[0][1],[function(p$28)
  {
   return(getOrAdd$15(p$28))(function($1)
   {
    return NewLY.defInput($1[0],$1[1],$1[2],$1[3]);
   });
  },p$22[1]]))[0];
  SC$1.defTextAreaM=(p$23=(cache$16=new Dictionary.New$5(),[[checkO$16,function($1)
  {
   return function($2)
   {
    return getOrAdd$37($1,$2);
   };
  }],function()
  {
   cache$16.Clear();
  }]),(getOrAdd$16=p$23[0][1],[function(p$28)
  {
   return(getOrAdd$16(p$28))(function($1)
   {
    return NewLY.defTextArea($1[0],$1[1],$1[2],$1[3]);
   });
  },p$23[1]]))[0];
  SC$1.defElementM=(p$24=(cache$17=new Dictionary.New$5(),[[checkO$17,function($1)
  {
   return function($2)
   {
    return getOrAdd$38($1,$2);
   };
  }],function()
  {
   cache$17.Clear();
  }]),(getOrAdd$17=p$24[0][1],[function(p$28)
  {
   return(getOrAdd$17(p$28))(function($1)
   {
    return NewLY.defElement($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$24[1]]))[0];
  SC$1.defConcatM=(p$25=(cache$18=new Dictionary.New$5(),[[checkO$18,function($1)
  {
   return function($2)
   {
    return getOrAdd$39($1,$2);
   };
  }],function()
  {
   cache$18.Clear();
  }]),(getOrAdd$18=p$25[0][1],[function(p$28)
  {
   return(getOrAdd$18(p$28))(function($1)
   {
    return NewLY.defConcat($1[0],$1[1],$1[2]);
   });
  },p$25[1]]))[0];
  SC$1.defViewJSM=(p$26=(cache$19=new Dictionary.New$5(),[[checkO$19,function($1)
  {
   return function($2)
   {
    return getOrAdd$40($1,$2);
   };
  }],function()
  {
   cache$19.Clear();
  }]),(getOrAdd$19=p$26[0][1],[function(p$28)
  {
   return(getOrAdd$19(p$28))(function($1)
   {
    return NewLY.defViewJS($1[0],$1[1],$1[2]);
   });
  },p$26[1]]))[0];
  SC$1.defSplitterM=(p$27=(cache$20=new Dictionary.New$5(),[[checkO$20,function($1)
  {
   return function($2)
   {
    return getOrAdd$41($1,$2);
   };
  }],function()
  {
   cache$20.Clear();
  }]),(getOrAdd$20=p$27[0][1],[function(p$28)
  {
   return(getOrAdd$20(p$28))(function($1)
   {
    return NewLY.defSplitter($1[0],$1[1],$1[2],$1[3],$1[4],$1[5]);
   });
  },p$27[1]]))[0];
  SC$1.drag=DragInfo.DragNone;
  SC$1.TemplateFileName$1="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\website\\Templates.html";
  SC$1.snippetsLM=ListModel$1.Create(function(e)
  {
   return e.snpId;
  },T.Empty);
  SC$1.collapsedV=Var$1.Create$1(new FSharpSet.New$1(null));
  SC$1.codeSnippetIdV=Var$1.Create$1(null);
  SC$1.searchFor=Var$1.Create$1("");
  SC$1.allPredecessors=function(s$1)
  {
   return SnippetModule.allPredecessors(t$18,s$1);
  };
  SC$1.indPredIds=function(t$20)
  {
   return SnippetModule.indirectPredecessorIds(t$19,t$20[0],t$20[1],t$20[2]);
  };
  SC$1.allCodePredsW=View.Map(function($1)
  {
   var sid,m;
   return $1!=null&&$1.$==1?(sid=$1.$0,(m=SnippetsUI.snippetsLM().TryFindByKey(sid),m!=null&&m.$==1?(SnippetsUI.allPredecessors())(m.$0):new FSharpSet.New$1(null))):new FSharpSet.New$1(null);
  },SnippetsUI.codeSnippetIdV().get_View());
  SC$1.allCodePredIdsW=View.Map(function($1)
  {
   return Seq$1.map(function(snp)
   {
    return snp.snpId;
   },$1);
  },SnippetsUI.allCodePredsW());
  SC$1.shdDef=SnippetHierData.New(0,0,false,true,[],null);
  SC$1.snpIdParentsW=(v=View.Map(function($1)
  {
   return Arrays.ofSeq(Seq$1.map(function(snp)
   {
    return[snp.snpId,snp.snpParentIdO];
   },$1));
  },SnippetsUI.snippetsLM().v),(prior=[Var$1.Create$1(null)],(View.Sink(function(v$1)
  {
   if(!Unchecked.Equals(prior[0].Get(),v$1))
    prior[0].Set(v$1);
  },v),prior[0].get_View())));
  SC$1.processHierW=(b$20=View.get_Do(),View.Bind(function(a$4)
  {
   return View.Bind(function(a$5)
   {
    return View.Const(SnippetsUI.processHier(a$4,a$5));
   },SnippetsUI.collapsedV().get_View());
  },SnippetsUI.snpIdParentsW()));
  SC$1.search=(b$21=View.get_Do(),View.Bind(function(a$4)
  {
   function visibleF(snp)
   {
    var o,o$1,k;
    o=(o$1=(k=snp.snpId,function(d)
    {
     var res;
     res=null;
     return d.TryGetValue(k,{
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
    }(a$4)),o$1==null?null:{
     $:1,
     $0:o$1.$0.visible
    });
    return o==null||o.$0;
   }
   return View.Bind(function(a$5)
   {
    return a$5===""?View.Const(visibleF):View.Bind(function(a$6)
    {
     return View.Bind(function(a$7)
     {
      return a$5==="."?View.Const(function(snp)
      {
       return(Unchecked.Equals(a$7,{
        $:1,
        $0:snp.snpId
       })||Seq$1.contains(snp.snpId,a$6))&&visibleF(snp);
      }):View.Const(function(snp)
      {
       return snp.snpName.indexOf(a$5)!=-1||snp.snpContent.indexOf(a$5)!=-1;
      });
     },SnippetsUI.codeSnippetIdV().get_View());
    },SnippetsUI.allCodePredIdsW());
   },SnippetsUI.searchFor().get_View());
  },SnippetsUI.processHierW()));
  SC$1.snippetList=LM.getDocFor(SnippetsUI.snippetsLM(),SnippetModule.defaultSnippet(),function()
  {
   return SnippetModule.New("","",null);
  },{
   $:1,
   $0:SnippetsUI.search()
  },function(l)
  {
   return SnippetsUI.calcUI(SnippetsUI.wrapNothing,true,l);
  });
  View.Sink(function(a$4)
  {
   var sid;
   if(a$4!=null&&a$4.$==1)
    {
     sid=a$4.$0;
     View.Get(function(allCodePredIds)
     {
      if(!Unchecked.Equals(SnippetsUI.codeSnippetIdV().Get(),{
       $:1,
       $0:sid
      }))
       if(!Seq$1.contains(sid,allCodePredIds))
        SnippetsUI.codeSnippetIdV().Set({
         $:1,
         $0:sid
        });
     },SnippetsUI.allCodePredIdsW());
    }
  },SnippetsUI.snippetList().selV.get_View());
  SC$1.currentSnippetV=Var$1.Lens(SnippetsUI.snippetList().get_CurrentV(),Global.id,function(a$4,x$4)
  {
   return x$4;
  });
  SC$1.currentSnippetNameV=Var$1.Lens(SnippetsUI.currentSnippetV(),function($1)
  {
   return $1.snpName;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$2,$1.snpContent,$1.snpParentIdO,$1.snpPredIds,$1.snpProperties,$1.snpModified);
  });
  SC$1.currentSnippetContentV=Var$1.Lens(SnippetsUI.currentSnippetV(),function($1)
  {
   return $1.snpContent;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$1.snpName,$2,$1.snpParentIdO,$1.snpPredIds,$1.snpProperties,$1.snpModified);
  });
  SC$1.curSnp=(b$22=AF.plugin(),b$22.AddVar(b$22.AddVar(b$22.Yield(),"name",SnippetsUI.currentSnippetNameV()),"content",SnippetsUI.currentSnippetContentV()));
  SC$1.monaco=(i$2=SnippetsUI.monacoNew(Var$1.Lens(SnippetsUI.currentSnippetV(),function($1)
  {
   return $1.snpContent;
  },function($1,$2)
  {
   return Snippet.New($1.snpId,$1.snpName,$2,$1.snpParentIdO,$1.snpPredIds,$1.snpProperties,$1.snpModified);
  })),GenEditor$1.New(i$2["var"],i$2.disabled,View.Const([]),i$2.onChange,i$2.onRender,null,null,null,i$2.editorO,i$2.editorHook));
  SC$1.parseW=View.Map((f$1=(g$1=function(s$1)
  {
   return Seq$1.choose(c$13,s$1);
  },function(x$4)
  {
   return g$1(f$4(x$4));
  }),function(x$4)
  {
   return g$5(f$1(x$4));
  }),SnippetsUI.currentSnippetContentV().get_View());
  SC$1.target2=LayoutEngineModule.newLyt("lytTarget2","");
  NewLY.addLayout(SnippetsUI.target2());
  AF.addPlugIn2((b$23=AppFramework.plugin(),b$23.AddAct(b$23.AddAct(b$23.AddAct(b$23.AddAct(b$23.AddAct(b$23.AddAct(b$23.AddAct(b$23.Merge(b$23.Merge(b$23.AddDoc(b$23.AddViw(b$23.AddVar(b$23.Name(b$23.Yield(),"Snippets"),"searchFor",SnippetsUI.searchFor()),"parseOut",SnippetsUI.parseW()),"editor",Lazy.Create(function()
  {
   return Doc.Element("div",[],[GenEditor.generateDoc(SnippetsUI.monaco())]);
  })),"snippets_",SnippetsUI.snippetList().PlugIn(SnippetsUI.selectorLensGuidId)),"curSnp_",SnippetsUI.curSnp()),"LoadSnippets",function()
  {
   SaveLoad.loadTextFile(self.document.getElementById("LoadSnippets").firstElementChild.firstElementChild.firstElementChild.firstElementChild);
  }),"SaveSnippets",function()
  {
   SaveLoad.saveAs();
  }),"IndentIn",function()
  {
   SnippetsUI.indentIn();
  }),"IndentOut",function()
  {
   SnippetsUI.indentOut();
  }),"AddSnippet",function()
  {
   SnippetsUI.addSnippet();
  }),"DeleteSnippet",function()
  {
   SnippetsUI.deleteSnippet();
  }),"ParseNewLY",function()
  {
   SnippetsUI.parseNewLY();
  })));
  LayoutEngine$1.addLayout0(LayoutEngineModule.newLyt("lytTarget","\r\n            main horizontal 10-50-70 part1 part2\r\n            \r\n            part1 div \"\" \r\n            : h1 \"\" \"Demo123 \" message\r\n            :: div \"\" \"Message:\"\r\n            :: textarea message \"height:200px;width:500px\"\r\n            \r\n            part2 div \"\" lytTarget.Layout\r\n            \r\n            message Var \"Hello\"     \r\n                "));
  LayoutEngine$1.addLayout0(LayoutEngineModule.newLyt("SnippetsLyt","\r\n                    split horizontal 0-50-100 AppFramework.AppFwkClient main\r\n                    main vertical 0-25-100 list snippet\r\n                    SearchFor   Doc InputLabel \"\" \"Search\" Snippets.searchFor\r\n                    File        Doc InputFile  \"id=LoadSnippets\" \"Open File\" Snippets.LoadSnippets \"\"\r\n                    list div \"display: flex;flex-direction: column\" File\r\n                    : button \"click=@{Snippets.AddSnippet}\"    \"Add New Snippet\"\r\n                    : button \"click=@{Snippets.DeleteSnippet}\" \"Delete Snippet\"\r\n                    : button \"click=@{Snippets.IndentIn}\"      \"Indent in\"\r\n                    : button \"click=@{Snippets.IndentOut}\"     \"Indent out\"\r\n                    : div    \"\" SearchFor \r\n                    : div \"overflow:auto;width:100%;max-width:100%\" Snippets.snippets_list\r\n                    snippet div \"display: flex;flex-direction: column\"\r\n                    : div    \"\" Snippets.snippets_sel\r\n                    : Doc    InputLabel \"\" \"Name:\" Snippets.curSnp_name\r\n                    : div \"height:100%;class=relative\" Snippets.editor                \r\n                "));
  NewLY.addLayout(LayoutEngineModule.newLyt("lytDemo","\r\n            AF PlugIn\r\n            : Doc Select\r\n            : Action SetVar\r\n            : Doc TrigAction\r\n            : Doc InputLabel\r\n            \r\n            Snippets PlugIn\r\n            : Var snippets_sel\r\n            : Var curSnp_content\r\n            : Var curSnp_name\r\n            : Var searchFor\r\n            : Action IndentOut\r\n            : Action IndentIn\r\n            : Doc snippets_list\r\n            : Action AddSnippet\r\n            : Action DeleteSnippet\r\n            : Action ParseNewLY\r\n            : Action LoadSnippets\r\n            : Action SaveSnippets\r\n            : Doc editor\r\n            \r\n            lytTarget2 PlugIn\r\n            : Var ParseMsgs\r\n            : Doc main \r\n            \r\n            editorDataSel Var \"\"\r\n            \r\n            target    View \"n => n.includes('main ')?n:'main Concat \"\" \"\"'\" Snippets.curSnp_content\r\n            \r\n            SetTarget Action AF.SetVar     \"lytTarget2.Layout\"        target\r\n            SetMain2  Action AF.SetVar     \"AppFramework.mainDocV\"    \"lytDemo.main2\"\r\n            SetMain   Action AF.SetVar     \"AppFramework.mainDocV\"    \"lytDemo.main\"\r\n            \r\n            Trigger   Doc    AF.TrigAction Snippets.snippets_sel \"lytDemo.SetTarget\"\r\n            \r\n            gotoMain  button \"click=@{SetMain};width:16px\" \"<<\"\r\n            gotoMain2 button \"click=@{SetMain2};width:16px\" \">>\"\r\n            \r\n            SearchFor   Doc AF.InputLabel \"\" \"Search\" Snippets.searchFor\r\n            \r\n            buttons ul \"\"\r\n            : div \"margin:3px\"\r\n            :: button \"click=@{Snippets.IndentOut};title=indent out\"     \"<--\"\r\n            :: button \"click=@{Snippets.IndentIn};title=indent in\"       \"--> \"\r\n            \r\n            File span \"class=input-group;margin:5px;id=LoadSnippets\"\r\n            : div \"class=input-group-btn\"\r\n            :: label \"class=btn btn-info\" \"Load File\"\r\n            ::: div \"\"\r\n            :::: input \"class=form-control;type=file;display: none;change=@{Snippets.LoadSnippets}\" \r\n            :: label \"class=btn btn-primary;click=@{Snippets.SaveSnippets}\" \"Save File\"\r\n            \r\n            list div \"display: flex;flex-direction: column\" gotoMain File\r\n            : div    \"margin:5px\" SearchFor \r\n            : Concat buttons\r\n            : div \"overflow:auto;width:100%;max-width:calc(100% - 10px)\" Snippets.snippets_list\r\n            : ul \"margin:3px\"\r\n            :: button \"click=@{Snippets.AddSnippet}   ;title=Add New Snippet\" \"+\"\r\n            :: button \"margin-left:20px;click=@{Snippets.DeleteSnippet};title=Delete  Snippet\" \"x\"\r\n            \r\n            snippet div \"display: flex;flex-direction: column;flex:1\" Trigger\r\n            : button \"click=@{SetTarget}\"  \"Apply\"\r\n            : button \"click=@{Snippets.ParseNewLY}\" \"Apply NewLY\"\r\n            : div    \"click=@{SetTarget}\" Snippets.snippets_sel\r\n            : Doc    AF.InputLabel \"\" \"Name:\" Snippets.curSnp_name\r\n            : Doc    AF.Select \"\" \"<Content>\" \"Values\" editorDataSel\r\n            : div \"height:100%;class=relative;flex:1\" Snippets.editor\r\n            : textarea   lytTarget2.ParseMsgs \"height:7em\"\r\n            \r\n            Left2 vertical 0-25-100 list snippet\r\n            main2 vertical 0-50-100 Left2 lytTarget2.main            \r\n                \r\n            Left div \"display:flex;flex-direction:column\" gotoMain2 snippet\r\n            main vertical 0-50-100 Left lytTarget2.main\r\n                "));
  AppFramework.mainDocV().Set("lytDemo.main2");
 };
 T=List.T=Runtime$1.Class({
  get_Item:function(x)
  {
   return Seq$1.nth(x,this);
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
 Char.IsUpper=function(c)
 {
  return c>="A"&&c<="Z";
 };
 Char.IsWhiteSpace=function(c)
 {
  return c.match(new Global.RegExp("\\s"))!==null;
 };
 Set.Filter=function(f,s)
 {
  var data;
  return new FSharpSet.New$1((data=Arrays.ofSeq(Seq$1.filter(f,s)),BalancedTree.Build(data,0,data.length-1)));
 };
 FSharpSet=Collections.FSharpSet=Runtime$1.Class({
  get_IsEmpty:function()
  {
   return this.tree==null;
  },
  Remove:function(v)
  {
   return new FSharpSet.New$1(BalancedTree.Remove(v,this.tree));
  },
  Add:function(x)
  {
   return new FSharpSet.New$1(BalancedTree.Add(x,this.tree));
  },
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
   return this.get_Count()===other.get_Count()&&Seq$1.forall2(Unchecked.Equals,this,other);
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
   return Seq$1.compareWith(Unchecked.Compare,this,other);
  },
  GetEnumerator0:function()
  {
   return this.GetEnumerator$1();
  }
 },Obj,FSharpSet);
 FSharpSet.op_Addition=function(x,y)
 {
  return new FSharpSet.New$1(BalancedTree.OfSeq(Seq$1.append(x,y)));
 };
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
 FSharpMap=Collections.FSharpMap=Runtime$1.Class({
  get_Item:function(k)
  {
   var m;
   m=this.TryFind(k);
   return m==null?Operators$5.FailWith("The given key was not present in the dictionary."):m.$0;
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
  GetEnumerator$1:function()
  {
   return Enumerator.Get(Seq$1.map(function(kv)
   {
    return{
     K:kv.Key,
     V:kv.Value
    };
   },BalancedTree.Enumerate(false,this.tree)));
  },
  Equals:function(other)
  {
   return this.get_Count()===other.get_Count()&&Seq$1.forall2(Unchecked.Equals,this,other);
  },
  get_Count:function()
  {
   var tree;
   tree=this.tree;
   return tree==null?0:tree.Count;
  },
  GetHashCode:function()
  {
   return Unchecked.Hash(Arrays.ofSeq(this));
  },
  GetEnumerator:function()
  {
   return this.GetEnumerator$1();
  },
  CompareTo0:function(other)
  {
   return Seq$1.compareWith(Unchecked.Compare,this,other);
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
 attr=HtmlModule.attr=Runtime$1.Class({},Obj,attr);
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
 View.Bind=function(fn,view)
 {
  return View.Join(View.Map(fn,view));
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
 View.get_Do=function()
 {
  return ViewBuilder.B;
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
 View.Join=function(a)
 {
  return View.CreateLazy(function()
  {
   return Snap.Join(a());
  });
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
 View.MapAsync=function(fn,a)
 {
  return View.CreateLazy(function()
  {
   return Snap.MapAsync(fn,a());
  });
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
 View.MapSeqCached=function(conv,view)
 {
  return View.MapSeqCachedBy(Global.id,conv,view);
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
   return Snap.Sequence(Seq$1.map(function(a)
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
 Doc.TextNode=function(v)
 {
  return Doc.Mk({
   $:5,
   $0:DomUtility.CreateText(v)
  },View.Const());
 };
 Doc.get_Empty=function()
 {
  return Doc.Mk(null,View.Const());
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
 Doc.Async=function(a)
 {
  return Doc.EmbedView(View.MapAsync(Global.id,View.Const(a)));
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
 Doc.BindView=function(f,view)
 {
  return Doc.EmbedView(View.Map(f,view));
 };
 Doc.Append=function(a,b)
 {
  return Doc.Mk({
   $:0,
   $0:a.docNode,
   $1:b.docNode
  },View.Map2Unit(a.updates,b.updates));
 };
 Doc.Input=function(attr$1,_var)
 {
  return Doc.InputInternal("input",function()
  {
   return Seq$1.append(attr$1,[AttrModule.Value(_var)]);
  });
 };
 Doc.Mk=function(node,updates)
 {
  return new Doc.New(node,updates);
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
 Doc.Button=function(caption,attrs,action)
 {
  var attrs$1;
  attrs$1=AttrProxy.Concat(attrs);
  return Elt.New(Doc.Clickable("button",action),attrs$1,Doc.TextNode(caption));
 };
 Doc.InputArea=function(attr$1,_var)
 {
  return Doc.InputInternal("textarea",function()
  {
   return Seq$1.append(attr$1,[AttrModule.Value(_var)]);
  });
 };
 Doc.Convert=function(render,view)
 {
  return Doc.Flatten(View.MapSeqCached(render,view));
 };
 Doc.RunAppend=function(parent,doc)
 {
  var rdelim;
  rdelim=self.document.createTextNode("");
  parent.appendChild(rdelim);
  Doc.RunBefore(rdelim,doc);
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
    return Seq$1.mapi(function(i,x)
    {
     return[i,x];
    },l);
   },vOptions));
  },current);
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
 Doc.RunBefore=function(rdelim,doc)
 {
  var ldelim;
  ldelim=self.document.createTextNode("");
  rdelim.parentNode.insertBefore(ldelim,rdelim);
  Doc.RunBetween(ldelim,rdelim,doc);
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
   return Seq$1.findIndex(function(y)
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
 GenEditor.bindVarEditor=function(setEvent,getVal,setVal,onChange,_var)
 {
  var editorChanged,varChanged;
  editorChanged=[0];
  varChanged=[0];
  setEvent(function()
  {
   var v;
   v=getVal();
   !Unchecked.Equals(_var.Get(),v)?(editorChanged[0]=editorChanged[0]+1,_var.Set(v),onChange(v)):void 0;
  });
  View.Sink(function()
  {
   if(editorChanged[0]>varChanged[0])
    varChanged[0]=editorChanged[0];
   else
    if(!Unchecked.Equals(getVal(),_var.Get()))
     setVal(_var.Get());
  },_var.get_View());
 };
 GenEditor.newVar=function(edh,_var)
 {
  return GenEditor$1.New(_var,View.Const(false),View.Const([]),null,Global.ignore,null,null,null,null,edh);
 };
 GenEditor.onRender=function(f,genE)
 {
  return GenEditor$1.New(genE["var"],genE.disabled,genE.annotations,genE.onChange,f,genE.autoCompletion,genE.toolTip,genE.declaration,genE.editorO,genE.editorHook);
 };
 GenEditor.generateDoc=function(genE)
 {
  var onChange,o,o$1;
  onChange=(o=(o$1=genE.onChange,o$1==null?null:{
   $:1,
   $0:o$1.$0(genE)
  }),o==null?Global.ignore:o.$0);
  return(genE.editorHook.generateDoc(genE))(function(ed)
  {
   genE.editorO={
    $:1,
    $0:ed
   };
   GenEditor.bindVarEditor(genE.editorHook.hookOnChange,genE.editorHook.getValue,genE.editorHook.setValue,onChange,genE["var"]);
   View.Sink(genE.editorHook.showAnnotations,genE.annotations);
   View.Sink(genE.editorHook.setDisabled,genE.disabled);
   genE.onRender(genE);
  });
 };
 Position$1.New=function(line,col)
 {
  return{
   line:line,
   col:col
  };
 };
 PromiseM.ofAsyncResultM=function(v)
 {
  return new Global.Promise(function(resolve,reject)
  {
   Concurrency.StartWithContinuations(v,function(a)
   {
    var a$1;
    a$1=Monads.OkM(a);
    a$1.$==1?reject(ResultMessage.summarized(a$1.$0)):resolve(a$1.$0[0]);
   },function(a)
   {
    reject(a);
   },function(a)
   {
    reject(a);
   },null);
  });
 };
 GenEditor$1.New=function(_var,disabled,annotations,onChange,onRender,autoCompletion,toolTip,declaration,editorO,editorHook)
 {
  return{
   "var":_var,
   disabled:disabled,
   annotations:annotations,
   onChange:onChange,
   onRender:onRender,
   autoCompletion:autoCompletion,
   toolTip:toolTip,
   declaration:declaration,
   editorO:editorO,
   editorHook:editorHook
  };
 };
 LibraryJS.REGEX$1=function(expr,opt,value)
 {
  var m;
  return value===null?null:(m=(new Global.String(value)).match(new Global.RegExp(expr,opt)),Unchecked.Equals(m,null)?null:!Unchecked.Equals(m,null)&&m.length===0?null:{
   $:1,
   $0:m
  });
 };
 GenEditorHook.New=function(generateDoc,getValue,setValue,setDisabled,showAnnotations,posFromIndex,indexFromPos,getWordAt,getSelectionText,getUri,setUri,hookOnChange)
 {
  return{
   generateDoc:generateDoc,
   getValue:getValue,
   setValue:setValue,
   setDisabled:setDisabled,
   showAnnotations:showAnnotations,
   posFromIndex:posFromIndex,
   indexFromPos:indexFromPos,
   getWordAt:getWordAt,
   getSelectionText:getSelectionText,
   getUri:getUri,
   setUri:setUri,
   hookOnChange:hookOnChange
  };
 };
 ListModel$1=UI.ListModel=Runtime$1.Class({
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
   this["var"].Set(this.storage.SAppendMany(toAppend,(((Runtime$1.Curried3(Seq$1.fold))(f))(this["var"].Get()))(items)));
  },
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
  ContainsKey:function(key)
  {
   var $this;
   $this=this;
   return Arrays.exists(function(it)
   {
    return Unchecked.Equals($this.key(it),key);
   },this["var"].Get());
  },
  Lens:function(key)
  {
   return this.LensInto(Global.id,function(a,x)
   {
    return x;
   },key);
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
  Set:function(lst)
  {
   this["var"].Set(this.storage.SSet(lst));
   this.ObsoleteAll();
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
  LensInto:function(get,update,key)
  {
   return this["LensInto'"](get,update,key,View.Map(get,this.FindByKeyAsView(key)));
  },
  ObsoleteAll:function()
  {
   Seq$1.iter(function(ksn)
   {
    Snap.Obsolete(ksn.V);
   },this.it);
   this.it.Clear();
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
 },Obj,ListModel$1);
 ListModel$1.New$1=Runtime$1.Ctor(function(key)
 {
  ListModel$1.New$2.call(this,key,[]);
 },ListModel$1);
 ListModel$1.New$2=Runtime$1.Ctor(function(key,init)
 {
  var init$1;
  init$1=Arrays.ofSeq(init);
  ListModel$1.New$3.call(this,key,Var$1.Create$1(init$1),Storage.InMemory(init$1));
 },ListModel$1);
 ListModel$1.New$3=Runtime$1.Ctor(function(key,_var,storage)
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
 },ListModel$1);
 ListModel$1.New=Runtime$1.Ctor(function(key,storage)
 {
  ListModel$1.New$3.call(this,key,Var$1.Create$1(Arrays.ofSeq(Seq$1.distinctBy(key,storage.SInit()))),storage);
 },ListModel$1);
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
  this.allVars=c.$==0?c.$0:Operators$5.FailWith("Should not happen");
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
   },r$2]):Operators$5.FailWith("Invalid value type"),(allVars.set_Item(name,p[1]),{
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
  return[Seq$1.append(filledHoles,Arrays.choose(function($2)
  {
   return c($2[0],$2[1]);
  },vars)),{
   $:0,
   $0:allVars
  }];
 };
 testing_Templates.tile=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"tile"
  },h):void 0;
 };
 testing_Templates.namevalueinput=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"namevalueinput"
  },h):void 0;
 };
 testing_Templates.namevalue=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"namevalue"
  },h):void 0;
 };
 testing_Templates.action=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"action"
  },h):void 0;
 };
 testing_Templates.actiondisabled=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"actiondisabled"
  },h):void 0;
 };
 GeneratedPrintf.p$1=function($1)
 {
  return"{"+("docName = "+Utils.prettyPrint($1.docName))+"; "+("docDoc = "+testing_GeneratedPrintf.p$9($1.docDoc))+"}";
 };
 testing_Templates.appframework=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"appframework"
  },h):void 0;
 };
 testing_Templates.wcompsplitterhor=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"wcompsplitterhor"
  },h):void 0;
 };
 testing_Templates.wcompsplitterver=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"wcompsplitterver"
  },h):void 0;
 };
 testing_GeneratedPrintf.p$6=function($1)
 {
  return $1.$==1?"VConst "+testing_GeneratedPrintf.p$8($1.$0):"VView "+testing_GeneratedPrintf.p$7($1.$0);
 };
 testing_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==1?"VConst "+testing_GeneratedPrintf.p$5($1.$0):"VView "+testing_GeneratedPrintf.p$4($1.$0);
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("actName = "+Utils.prettyPrint($1.actName))+"; "+("actFunction = "+testing_GeneratedPrintf.p$1($1.actFunction))+"; "+("actEnabled = "+testing_GeneratedPrintf.p$2($1.actEnabled))+"}";
 };
 testing_Templates.fixedsplitterver=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"fixedsplitterver"
  },h):void 0;
 };
 testing_Templates.fixedsplitterhor=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"fixedsplitterhor"
  },h):void 0;
 };
 testing_GeneratedPrintf.p$10=function($1)
 {
  return $1.$==1?"UnQuoted "+Utils.prettyPrint($1.$0):"Quoted "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p=function($1)
 {
  return $1.$==1?"FullRef ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":"LocalRef "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$11=function($1)
 {
  return $1.$==4?"PrActRef "+testing_GeneratedPrintf.p$16($1.$0):$1.$==3?"PrViwRef "+testing_GeneratedPrintf.p$14($1.$0):$1.$==2?"PrVarRef "+testing_GeneratedPrintf.p$13($1.$0):$1.$==1?"PrDocRef "+testing_GeneratedPrintf.p$15($1.$0):"PrTextValL "+Utils.printList(function($2)
  {
   return testing_GeneratedPrintf.p$12($2);
  },$1.$0);
 };
 testing_Templates.snippet=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"snippet"
  },h):void 0;
 };
 testing_Templates.appfwkclient=function(h)
 {
  testing_Templates.fixedsplitterhor();
  testing_Templates.fixedsplitterver();
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"appfwkclient"
  },h):void 0;
 };
 testing_GeneratedPrintf.p$9=function($1)
 {
  return $1.$==5?"FunDoc5 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+", "+Utils.prettyPrint($1.$4)+", "+Utils.prettyPrint($1.$5)+")":$1.$==4?"FunDoc4 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+", "+Utils.prettyPrint($1.$4)+")":$1.$==3?"FunDoc3 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+")":$1.$==2?"FunDoc2 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":$1.$==1?"FunDoc1 (<fun>, "+Utils.prettyPrint($1.$1)+")":"LazyDoc "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$8=function($1)
 {
  return $1.$==1?"Choice2Of2 "+Utils.prettyPrint($1.$0):"Choice1Of2 "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$7=function($1)
 {
  return"View <fun>";
 };
 testing_GeneratedPrintf.p$5=function($1)
 {
  return $1.$==1?"Choice2Of2 "+GeneratedPrintf.p($1.$0):"Choice1Of2 "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$4=function($1)
 {
  return"View <fun>";
 };
 testing_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==2?"FunAct2 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":$1.$==1?"FunAct1 (<fun>, "+Utils.prettyPrint($1.$1)+")":"FunAct0 <fun>";
 };
 testing_GeneratedPrintf.p$2=function($1)
 {
  return"View <fun>";
 };
 testing_GeneratedPrintf.p$16=function($1)
 {
  return"ActRef "+testing_GeneratedPrintf.p($1.$0);
 };
 testing_GeneratedPrintf.p$14=function($1)
 {
  return"ViwRef "+testing_GeneratedPrintf.p($1.$0);
 };
 testing_GeneratedPrintf.p$13=function($1)
 {
  return"VarRef "+testing_GeneratedPrintf.p($1.$0);
 };
 testing_GeneratedPrintf.p$15=function($1)
 {
  return"DocRef "+testing_GeneratedPrintf.p($1.$0);
 };
 testing_GeneratedPrintf.p$12=function($1)
 {
  return $1.$==2?"TvViwRef "+testing_GeneratedPrintf.p$14($1.$0):$1.$==1?"TvVarRef "+testing_GeneratedPrintf.p$13($1.$0):"TvConst "+Utils.prettyPrint($1.$0);
 };
 Client.Box=Global.id;
 AttrModule.DynamicCustom=function(set,view)
 {
  return Attrs.Dynamic(view,set);
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
 AttrProxy=UI.AttrProxy=Runtime$1.Class({},null,AttrProxy);
 AttrProxy.Create=function(name,value)
 {
  return Attrs.Static(function(el)
  {
   DomUtility.SetAttr(el,name,value);
  });
 };
 AttrProxy.Concat=function(xs)
 {
  var x;
  x=Array.ofSeqNonCopying(xs);
  return Array.TreeReduce(Attrs.EmptyAttr(),AttrProxy.Append,x);
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
 AttrProxy.OnAfterRenderImpl=function(q)
 {
  return new AttrProxy({
   $:4,
   $0:q
  });
 };
 AttrProxy.Append=function(a,b)
 {
  return Attrs.AppendTree(a,b);
 };
 AttrProxy.Handler=function(event,q)
 {
  return AttrProxy.HandlerImpl(event,q);
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
 View$1.insertWO=function(a)
 {
  return a==null?View.Const(null):View.Map(function(a$1)
  {
   return{
    $:1,
    $0:a$1
   };
  },a.$0);
 };
 View$1.traverseListApp=function(f,list)
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
   return View$1.op_LessMultiplyGreater(View$1.op_LessMultiplyGreater(View$1.rtn(function($1)
   {
    return function($2)
    {
     return cons($1,$2);
    };
   }),f(head)),tail);
  },list,View$1.rtn(T.Empty));
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
 View$1.op_LessMultiplyGreater=function(a,a$1)
 {
  return View.Apply(a,a$1);
 };
 View$1.bind=function(a,a$1)
 {
  return View.Bind(a,a$1);
 };
 MatchFailureException=WebSharper.MatchFailureException=Runtime$1.Class({},Error,MatchFailureException);
 MatchFailureException.New=Runtime$1.Ctor(function(message,line,column)
 {
  this.message=message+" at "+Global.String(line)+":"+Global.String(column);
  Object.setPrototypeOf(this,MatchFailureException.prototype);
 },MatchFailureException);
 ListModel$2.refreshLM=function(lm,elems)
 {
  var keys;
  lm.AppendMany(elems);
  keys=new FSharpSet.New(Seq$1.map(lm.key,elems));
  Seq$1.iter(function(e)
  {
   if(!keys.Contains(lm.key(e)))
    lm.RemoveByKey(lm.key(e));
  },Seq$1.cache(lm));
 };
 ViewBuilder.B={
  $:0
 };
 ListModel$1.Create=function(key,init)
 {
  return ListModel$1.CreateWithStorage(key,Storage.InMemory(Arrays.ofSeq(init)));
 };
 ListModel$1.CreateWithStorage=function(key,storage)
 {
  return new ListModel$1.New(key,storage);
 };
 Serializer$1.deserializeWithDefs=function(s,s$1)
 {
  return Serializer$1.deserialize(function()
  {
   return{
    $:1,
    $0:0
   };
  },function()
  {
   return{
    $:1,
    $0:0
   };
  },function()
  {
   return{
    $:1,
    $0:""
   };
  },function()
  {
   return{
    $:1,
    $0:false
   };
  },function()
  {
   return{
    $:1,
    $0:[]
   };
  },s,s$1);
 };
 Serializer$1.deserialize=function(df,di,ds,db,da,s,s$1)
 {
  var f,g;
  function f$1(a)
  {
   return JSON.parse(a);
  }
  function g$1(o)
  {
   return Serializer$1.getJsonIntermediate(df,di,ds,db,da,o);
  }
  f=function(x)
  {
   return g$1(f$1(x));
  };
  g=[s,s$1][1];
  return function(x)
  {
   return g(f(x));
  };
 };
 Serializer$1.getJsonIntermediate=function(df,di,ds,db,da,o)
 {
  function jsonInt(o$1)
  {
   return Serializer$1.getJsonIntermediate(df,di,ds,db,da,o$1);
  }
  return JsonIntermediate.New(function()
  {
   var o$1;
   o$1=!o?null:typeof o=="number"?{
    $:1,
    $0:o
   }:null;
   return o$1==null?df():o$1;
  },function()
  {
   var o$1;
   o$1=!o?null:typeof o=="number"?{
    $:1,
    $0:o
   }:null;
   return o$1==null?di():o$1;
  },function()
  {
   var o$1;
   o$1=!o?null:typeof o=="string"?{
    $:1,
    $0:o
   }:null;
   return o$1==null?ds():o$1;
  },function()
  {
   var o$1;
   o$1=!o?null:typeof o=="boolean"?{
    $:1,
    $0:o
   }:null;
   return o$1==null?db():o$1;
  },function()
  {
   var o$1;
   o$1=!o?null:o instanceof Global.Array?{
    $:1,
    $0:Arrays.map(jsonInt,o)
   }:null;
   return o$1==null?da(jsonInt):o$1;
  },function(fl)
  {
   var m;
   return!o?null:(m=o[fl],Unchecked.Equals(m,null)?{
    $:1,
    $0:jsonInt(null)
   }:!m?null:{
    $:1,
    $0:jsonInt(m)
   });
  },function()
  {
   return Unchecked.Equals(typeof o,"object")&&!Unchecked.Equals(o,null);
  },function()
  {
   return Unchecked.Equals(o,null);
  },function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(o);
  });
 };
 AppFrameworkTemplate.html=function()
 {
  SC$1.$cctor();
  return SC$1.html;
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
  SC$2.$cctor();
  return SC$2.Zero;
 };
 Concurrency.StartChild=function(r,t)
 {
  return function(c)
  {
   var inTime,cached,queue,tReg;
   inTime=[true];
   cached=[null];
   queue=[];
   tReg=t!=null&&t.$==1?{
    $:1,
    $0:Global.setTimeout(function()
    {
     var err;
     inTime[0]=false;
     err={
      $:1,
      $0:new TimeoutException.New()
     };
     while(queue.length>0)
      (queue.shift())(err);
    },t.$0)
   }:null;
   Concurrency.scheduler().Fork(function()
   {
    if(!c.ct.c)
     r(AsyncBody.New(function(res)
     {
      if(inTime[0])
       {
        cached[0]={
         $:1,
         $0:res
        };
        tReg!=null&&tReg.$==1?Global.clearTimeout(tReg.$0):void 0;
        while(queue.length>0)
         (queue.shift())(res);
       }
     },c.ct));
   });
   c.k({
    $:0,
    $0:function(c2)
    {
     var m;
     if(inTime[0])
      {
       m=cached[0];
       m==null?queue.push(c2.k):c2.k(m.$0);
      }
     else
      c2.k({
       $:1,
       $0:new TimeoutException.New()
      });
    }
   });
  };
 };
 Concurrency.TryWith=function(r,f)
 {
  return function(c)
  {
   r(AsyncBody.New(function(a)
   {
    if(a.$==0)
     c.k({
      $:0,
      $0:a.$0
     });
    else
     if(a.$==1)
      try
      {
       (f(a.$0))(c);
      }
      catch(e)
      {
       c.k(a);
      }
     else
      c.k(a);
   },c.ct));
  };
 };
 Concurrency.TryFinally=function(run,f)
 {
  return function(c)
  {
   run(AsyncBody.New(function(r)
   {
    try
    {
     f();
     c.k(r);
    }
    catch(e)
    {
     c.k({
      $:1,
      $0:e
     });
    }
   },c.ct));
  };
 };
 Concurrency.Using=function(x,f)
 {
  return Concurrency.TryFinally(f(x),function()
  {
   x.Dispose();
  });
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
 Concurrency.defCTS=function()
 {
  SC$2.$cctor();
  return SC$2.defCTS;
 };
 Concurrency.UncaughtAsyncError=function(e)
 {
  console.log("WebSharper: Uncaught asynchronous exception",e);
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
 Concurrency.FromContinuations=function(subscribe)
 {
  return function(c)
  {
   var continued;
   function once(cont)
   {
    if(continued[0])
     Operators$5.FailWith("A continuation provided by Async.FromContinuations was invoked multiple times");
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
 Concurrency.While=function(g,c)
 {
  return g()?Concurrency.Bind(c,function()
  {
   return Concurrency.While(g,c);
  }):Concurrency.Return();
 };
 Concurrency.StartWithContinuations=function(c,s,f,cc,ctOpt)
 {
  var ct,d;
  ct=(d=(Concurrency.defCTS())[0],ctOpt==null?d:ctOpt.$0);
  !ct.c?c(AsyncBody.New(function(a)
  {
   if(a.$==1)
    f(a.$0);
   else
    if(a.$==2)
     cc(a.$0);
    else
     s(a.$0);
  },ct)):void 0;
 };
 Concurrency.scheduler=function()
 {
  SC$2.$cctor();
  return SC$2.scheduler;
 };
 Concurrency.noneCT=function()
 {
  SC$2.$cctor();
  return SC$2.noneCT;
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
 DictionaryUtil.alreadyAdded=function()
 {
  return Operators$5.FailWith("An item with the same key has already been added.");
 };
 DictionaryUtil.notPresent=function()
 {
  return Operators$5.FailWith("The given key was not present in the dictionary.");
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
 Numeric.TryParseInt64=function(s,r)
 {
  return Numeric.TryParse(s,-9223372036854775808,9223372036854775807,r);
 };
 BalancedTree.OfSeq=function(data)
 {
  var a;
  a=Arrays.ofSeq(Seq$1.distinct(data));
  Arrays.sortInPlace(a);
  return BalancedTree.Build(a,0,a.length-1);
 };
 BalancedTree.Remove=function(k,src)
 {
  var p,t,spine,d;
  p=BalancedTree.Lookup(k,src);
  t=p[0];
  spine=p[1];
  return t==null?src:t.Right==null?BalancedTree.Rebuild(spine,t.Left):t.Left==null?BalancedTree.Rebuild(spine,t.Right):BalancedTree.Rebuild(spine,(d=Arrays.ofSeq(Seq$1.append(BalancedTree.Enumerate(false,t.Left),BalancedTree.Enumerate(false,t.Right))),BalancedTree.Build(d,0,d.length-1)));
 };
 BalancedTree.Add=function(x,t)
 {
  return BalancedTree.Put(function($1,$2)
  {
   return $2;
  },x,t);
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
 BalancedTree.Contains=function(v,t)
 {
  return!((BalancedTree.Lookup(v,t))[0]==null);
 };
 BalancedTree.Build=function(data,min,max)
 {
  var center,left,right;
  return max-min+1<=0?null:(center=(min+max)/2>>0,(left=BalancedTree.Build(data,min,center-1),(right=BalancedTree.Build(data,center+1,max),BalancedTree.Branch(Arrays.get(data,center),left,right))));
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
 BalancedTree.Rebuild=function(spine,t)
 {
  var t$1,i,$1,m,x,l,m$1,x$1,r,m$2;
  function h(x$2)
  {
   return x$2==null?0:x$2.Height;
  }
  t$1=t;
  for(i=0,$1=Arrays.length(spine)-1;i<=$1;i++){
   t$1=(m=Arrays.get(spine,i),m[0]?(x=m[1],(l=m[2],h(t$1)>h(l)+1?h(t$1.Left)===h(t$1.Right)+1?(m$1=t$1.Left,BalancedTree.Branch(m$1.Node,BalancedTree.Branch(x,l,m$1.Left),BalancedTree.Branch(t$1.Node,m$1.Right,t$1.Right))):BalancedTree.Branch(t$1.Node,BalancedTree.Branch(x,l,t$1.Left),t$1.Right):BalancedTree.Branch(x,l,t$1))):(x$1=m[1],(r=m[2],h(t$1)>h(r)+1?h(t$1.Right)===h(t$1.Left)+1?(m$2=t$1.Right,BalancedTree.Branch(m$2.Node,BalancedTree.Branch(t$1.Node,t$1.Left,m$2.Left),BalancedTree.Branch(x$1,m$2.Right,r))):BalancedTree.Branch(t$1.Node,t$1.Left,BalancedTree.Branch(x$1,t$1.Right,r)):BalancedTree.Branch(x$1,t$1,r))));
  }
  return t$1;
 };
 BalancedTree.Put=function(combine,k,t)
 {
  var p,t$1;
  p=BalancedTree.Lookup(k,t);
  t$1=p[0];
  return t$1==null?BalancedTree.Rebuild(p[1],BalancedTree.Branch(k,null,null)):BalancedTree.Rebuild(p[1],BalancedTree.Branch(combine(t$1.Node,k),t$1.Left,t$1.Right));
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
  return Seq$1.unfold(function($1)
  {
   return gen($1[0],$1[1]);
  },[t,T.Empty]);
 };
 BalancedTree.Branch=function(node,left,right)
 {
  var a,b;
  return Tree.New(node,left,right,1+(a=left==null?0:left.Height,(b=right==null?0:right.Height,Unchecked.Compare(a,b)===1?a:b)),1+(left==null?0:left.Count)+(right==null?0:right.Count));
 };
 MapUtil.fromSeq=function(s)
 {
  var a;
  a=Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.collect(function(m)
   {
    return[Pair.New(m[0],m[1])];
   },Seq$1.distinctBy(function(t)
   {
    return t[0];
   },s));
  }));
  Arrays.sortInPlace(a);
  return BalancedTree.Build(a,0,a.length-1);
 };
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
 Seq$1.insufficient=function()
 {
  return Operators$5.FailWith("The input sequence has an insufficient number of elements.");
 };
 Seq$1.tryItem=function(i,s)
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
 Seq$1.contains=function(el,s)
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
 Seq$1.tryHead=function(s)
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
 Seq$1.last=function(s)
 {
  var e,$1;
  e=Enumerator.Get(s);
  try
  {
   if(!e.MoveNext())
    $1=Seq$1.insufficient();
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
 Seq$1.nonNegative=function()
 {
  return Operators$5.FailWith("The input must be non-negative.");
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
 Snap.MapAsync=function(fn,snap)
 {
  var res;
  res=Snap.New({
   $:3,
   $0:[],
   $1:[]
  });
  Snap.When(snap,function(v)
  {
   Async$1.StartTo(fn(v),function(v$1)
   {
    Snap.MarkDone(res,snap,v$1);
   });
  },res);
  return res;
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
      return m!=null&&m.$==0?m.$0:m!=null&&m.$==2?m.$0:Operators$5.FailWith("value not found by View.Sequence");
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
 DomUtility.CreateElement=function(name)
 {
  return DomUtility.Doc().createElement(name);
 };
 DomUtility.SetStyle=function(el,name,value)
 {
  DomUtility.SetProperty(el.style,name,value);
 };
 DomUtility.SetAttr=function(el,name,value)
 {
  el.setAttribute(name,value);
 };
 DomUtility.CreateText=function(s)
 {
  return DomUtility.Doc().createTextNode(s);
 };
 DomUtility.Doc=function()
 {
  SC$3.$cctor();
  return SC$3.Doc;
 };
 DomUtility.SetProperty=function(target,name,value)
 {
  return target.setProperty(name,value);
 };
 DomUtility.RemoveAttr=function(el,attrName)
 {
  el.removeAttribute(attrName);
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
  SC$4.$cctor();
  return SC$4.LocalTemplatesLoaded;
 };
 Templates.set_LocalTemplatesLoaded=function($1)
 {
  SC$4.$cctor();
  SC$4.LocalTemplatesLoaded=$1;
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
   prepareTemplate(Seq$1.head(rawTpls.get_Keys()));
 };
 Templates.LoadedTemplates=function()
 {
  SC$4.$cctor();
  return SC$4.LoadedTemplates;
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
  SC$4.$cctor();
  return SC$4.TextHoleRE;
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
  SC$5.$cctor();
  SC$5.counter=$1;
 };
 Fresh.counter=function()
 {
  SC$5.$cctor();
  return SC$5.counter;
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
 Snap.New=function(State$1)
 {
  return{
   s:State$1
  };
 };
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
    Seq$1.iter(function(f)
    {
     f(el);
    },oar);
   }
  });
 };
 Attrs.EmptyAttr=function()
 {
  SC$6.$cctor();
  return SC$6.EmptyAttr;
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
 Attrs.Updates=function(dyn)
 {
  return Array.MapTreeReduce(function(x)
  {
   return x.NChanged();
  },View.Const(),View.Map2Unit,dyn.DynNodes);
 };
 Attrs.Flags=function(a)
 {
  return a!==null&&a.hasOwnProperty("flags")?a.flags:0;
 };
 Attrs.SetFlags=function(a,f)
 {
  a.flags=f;
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
 LazyRecord.New=function(created,evalOrVal,force)
 {
  return{
   c:created,
   v:evalOrVal,
   f:force
  };
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
 Docs.LinkPrevElement=function(el,children)
 {
  Docs.InsertDoc(el.parentNode,children,el);
 };
 Docs.CreateDelimitedRunState=function(ldelim,rdelim,doc)
 {
  return RunState.New(NodeSet.get_Empty(),Docs.CreateDelimitedElemNode(ldelim,rdelim,Attrs.EmptyAttr(),doc));
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
 Async$1.StartTo=function(comp,k)
 {
  Concurrency.StartWithContinuations(comp,k,function(e)
  {
   Async$1.OnError(e);
  },Global.ignore,null);
 };
 Async$1.OnError=function(e)
 {
  return console.log("WebSharper UI: Uncaught asynchronous exception",e);
 };
 Storage.InMemory=function(init)
 {
  return new ArrayStorage.New(init);
 };
 AsyncBody.New=function(k,ct)
 {
  return{
   k:k,
   ct:ct
  };
 };
 CT.New=function(IsCancellationRequested,Registrations)
 {
  return{
   c:IsCancellationRequested,
   r:Registrations
  };
 };
 SC$2.$cctor=function()
 {
  SC$2.$cctor=Global.ignore;
  SC$2.noneCT=CT.New(false,[]);
  SC$2.scheduler=new Scheduler.New();
  SC$2.defCTS=[new CancellationTokenSource.New()];
  SC$2.Zero=Concurrency.Return();
  SC$2.GetCT=function(c)
  {
   c.k({
    $:0,
    $0:c.ct
   });
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
 TimeoutException=WebSharper.TimeoutException=Runtime$1.Class({},Error,TimeoutException);
 TimeoutException.New=Runtime$1.Ctor(function()
 {
  TimeoutException.New$1.call(this,"The operation has timed out.");
 },TimeoutException);
 TimeoutException.New$1=Runtime$1.Ctor(function(message)
 {
  this.message=message;
  Object.setPrototypeOf(this,TimeoutException.prototype);
 },TimeoutException);
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
 Seq$1.enumUsing=function(x,f)
 {
  return{
   GetEnumerator:function()
   {
    var _enum;
    try
    {
     _enum=Enumerator.Get(f(x));
    }
    catch(e)
    {
     x.Dispose();
     throw e;
    }
    return new T$1.New(null,null,function(e$1)
    {
     return _enum.MoveNext()&&(e$1.c=_enum.Current(),true);
    },function()
    {
     _enum.Dispose();
     x.Dispose();
    });
   }
  };
 };
 Seq$1.enumWhile=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    return new T$1.New(null,null,function(en)
    {
     var m;
     while(true)
      {
       m=en.s;
       if(Unchecked.Equals(m,null))
       {
        if(f())
         {
          en.s=Enumerator.Get(s);
          en=en;
         }
        else
         return false;
       }
       else
        if(m.MoveNext())
         {
          en.c=m.Current();
          return true;
         }
        else
         {
          m.Dispose();
          en.s=null;
          en=en;
         }
      }
    },function(en)
    {
     var x;
     x=en.s;
     !Unchecked.Equals(x,null)?x.Dispose():void 0;
    });
   }
  };
 };
 ArrayStorage=Storage.ArrayStorage=Runtime$1.Class({
  SAppendMany:function(is,arr)
  {
   var ps;
   ps=Array.ofSeqNonCopying(is);
   arr.push.apply(arr,ps);
   return arr;
  },
  SSetAt:function(idx,elem,arr)
  {
   Arrays.set(arr,idx,elem);
   return arr;
  },
  SRemoveIf:function(pred,arr)
  {
   return Arrays.filter(function(i)
   {
    return!pred(i);
   },arr);
  },
  SSet:function(coll)
  {
   return Arrays.ofSeq(coll);
  },
  SAppend:function(i,arr)
  {
   arr.push(i);
   return arr;
  },
  SInit:function()
  {
   return this.init;
  }
 },Obj,ArrayStorage);
 ArrayStorage.New=Runtime$1.Ctor(function(init)
 {
  Obj.New.call(this);
  this.init=init;
 },ArrayStorage);
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
 SC$3.$cctor=function()
 {
  SC$3.$cctor=Global.ignore;
  SC$3.Doc=self.document;
 };
 SC$4.$cctor=function()
 {
  SC$4.$cctor=Global.ignore;
  SC$4.LoadedTemplates=new Dictionary.New$5();
  SC$4.LocalTemplatesLoaded=false;
  SC$4.TextHoleRE="\\${([^}]+)}";
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
   $0:AppendList.Concat(Seq$1.map(Anims.List,xs))
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
 SC$5.$cctor=function()
 {
  SC$5.$cctor=Global.ignore;
  SC$5.counter=0;
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
 SC$6.$cctor=function()
 {
  SC$6.$cctor=Global.ignore;
  SC$6.EmptyAttr=null;
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
     a$1=Operators$5.KeyValue(a);
     return s.replace(new Global.RegExp("\\${"+a$1[0]+"}","ig"),"${"+a$1[1]+"}");
    }
    attrName=Arrays.get(holeAttrs,i);
    return e.setAttribute(attrName,(((Runtime$1.Curried3(Seq$1.fold))(f))(e.getAttribute(attrName)))(mappings));
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
   return Enumerator.Get(Seq$1.map(function(kvp)
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
  return m===0?Anims.Const():m===1?Arrays.get(xs$1,0):(dur=Seq$1.max(Seq$1.map(function(anim)
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
 String$1.isBlank=function(s)
 {
  return Strings.forall(Char.IsWhiteSpace,s);
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
 SC$9.$cctor=function()
 {
  SC$9.$cctor=Global.ignore;
  SC$9.Empty={
   $:0
  };
 };
 Runtime$1.OnLoad(function()
 {
  SnippetsUI.main();
 });
}());


if (typeof IntelliFactory !=='undefined') {
  IntelliFactory.Runtime.ScriptBasePath = '/Content/';
  IntelliFactory.Runtime.Start();
}
//# sourceMappingURL=testing.map

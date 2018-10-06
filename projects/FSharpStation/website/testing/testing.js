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
 var Global,FsRoot,LibraryJS,WebComponent,WcTabStrip,WebSharper,Obj,WcTabStripT,WcSplitter,WcSplitterT,SC$1,Operators,UI,HtmlModule,attr,Utils,Seq,Hoverable,Hoverable$1,View,Var,Doc,List,T,Numeric,Var$1,JavaScript,Pervasives,EventTarget,Node,JS,Unchecked,Arrays,Library,Event,UIEvent,Option,ResizeObserver,Monads,Result,Builder,AsyncResultBuilder,AsyncResultBuilderP,ReaderMonads,ReaderMBasic,Builder$1,ReaderMResult,Builder$2,ReaderMAsyncResult,Builder$3,String,Strings,Slice,ParseO,System,Guid,SnippetModule,Snippet,SnippetId,SnippetCollection,Serializer,Json,ClientSideJson,Provider,Lazy,LoadFiles,Monaco,Editor,Library2,WebSockets,Address,FSharpStation,FStation,Remoting,AjaxRemotingProvider,ListModel,Snippets,Operators$1,View$1,TreeReader,DragDrop,DragInfo,Monaco$1,testing_GeneratedPrintf,testing_JsonEncoder,testing_JsonDecoder,GeneratedPrintf,Serializer$1,Model,Importer,Collections,FSharpSet,WindowOrWorkerGlobalScope,WSMessagingClient,Messaging,ResultMessage,AttrProxy,Enumerator,Elt,AttrModule,Snap,T$1,DomUtility,ConcreteVar,Client,Templates,CancellationTokenSource,DateUtil,BalancedTree,LazyExtensionsProxy,LazyRecord,Concurrency,Dictionary,Abbrev,Async,Object,FromView,FsCodeModule,FsAutoComplete,Calls,AsyncResult,MessageType,Hole,MainProgram,Attrs,Array,Docs,Fresh,Error,AggregateException,AsyncBody,SC$2,CT,Storage,Tree,DictionaryUtil,Result$1,ReplyHandler,Handler,Control,MailboxProcessor,MessageGeneric,Mailbox,Owin,WebSocket,Client$1,Replier,Endpoint,JsonEncoding,WebSocketServer,Updates,DynamicAttrNode,DocElemNode,CharacterData,SC$3,SC$4,HashSet,An,Settings,Mailbox$1,Scheduler,ArrayStorage,OperationCanceledException,FSharpEvent,LinkedList,Map,WithEncoding,Attrs$1,Dyn,SC$5,SC$6,Prepare,KeyCollection,Docs$1,RunState,NodeSet,Anims,SC$7,FormatException,PreproDirective,Event$1,Event$2,FSharpMap,TimeoutException,Queue,SC$8,AppendList,SC$9,List$1,Pair,MapUtil,Async$1,Message,Easing,HashSet$1,XhrProvider,LinkedListEnumerator,HashSetUtil,DomNodes,SC$10,IntelliFactory,Runtime,Reflect,console,JSON,Date,Math,location,$;
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
 Option=WebSharper.Option=WebSharper.Option||{};
 ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};
 Monads=Library.Monads=Library.Monads||{};
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 AsyncResultBuilder=Monads.AsyncResultBuilder=Monads.AsyncResultBuilder||{};
 AsyncResultBuilderP=Monads.AsyncResultBuilderP=Monads.AsyncResultBuilderP||{};
 ReaderMonads=Monads.ReaderMonads=Monads.ReaderMonads||{};
 ReaderMBasic=ReaderMonads.ReaderMBasic=ReaderMonads.ReaderMBasic||{};
 Builder$1=ReaderMBasic.Builder=ReaderMBasic.Builder||{};
 ReaderMResult=ReaderMonads.ReaderMResult=ReaderMonads.ReaderMResult||{};
 Builder$2=ReaderMResult.Builder=ReaderMResult.Builder||{};
 ReaderMAsyncResult=ReaderMonads.ReaderMAsyncResult=ReaderMonads.ReaderMAsyncResult||{};
 Builder$3=ReaderMAsyncResult.Builder=ReaderMAsyncResult.Builder||{};
 String=Library.String=Library.String||{};
 Strings=WebSharper.Strings=WebSharper.Strings||{};
 Slice=WebSharper.Slice=WebSharper.Slice||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 System=Global.System=Global.System||{};
 Guid=System.Guid=System.Guid||{};
 SnippetModule=Library.SnippetModule=Library.SnippetModule||{};
 Snippet=Library.Snippet=Library.Snippet||{};
 SnippetId=Library.SnippetId=Library.SnippetId||{};
 SnippetCollection=Library.SnippetCollection=Library.SnippetCollection||{};
 Serializer=LibraryJS.Serializer=LibraryJS.Serializer||{};
 Json=WebSharper.Json=WebSharper.Json||{};
 ClientSideJson=WebSharper.ClientSideJson=WebSharper.ClientSideJson||{};
 Provider=ClientSideJson.Provider=ClientSideJson.Provider||{};
 Lazy=WebSharper.Lazy=WebSharper.Lazy||{};
 LoadFiles=LibraryJS.LoadFiles=LibraryJS.LoadFiles||{};
 Monaco=LibraryJS.Monaco=LibraryJS.Monaco||{};
 Editor=Monaco.Editor=Monaco.Editor||{};
 Library2=FsRoot.Library2=FsRoot.Library2||{};
 WebSockets=Library2.WebSockets=Library2.WebSockets||{};
 Address=WebSockets.Address=WebSockets.Address||{};
 FSharpStation=FsRoot.FSharpStation=FsRoot.FSharpStation||{};
 FStation=FSharpStation.FStation=FSharpStation.FStation||{};
 Remoting=WebSharper.Remoting=WebSharper.Remoting||{};
 AjaxRemotingProvider=Remoting.AjaxRemotingProvider=Remoting.AjaxRemotingProvider||{};
 ListModel=UI.ListModel=UI.ListModel||{};
 Snippets=FSharpStation.Snippets=FSharpStation.Snippets||{};
 Operators$1=ReaderMResult.Operators=ReaderMResult.Operators||{};
 View$1=LibraryJS.View=LibraryJS.View||{};
 TreeReader=Library.TreeReader=Library.TreeReader||{};
 DragDrop=FSharpStation.DragDrop=FSharpStation.DragDrop||{};
 DragInfo=DragDrop.DragInfo=DragDrop.DragInfo||{};
 Monaco$1=FSharpStation.Monaco=FSharpStation.Monaco||{};
 testing_GeneratedPrintf=Global.testing_GeneratedPrintf=Global.testing_GeneratedPrintf||{};
 testing_JsonEncoder=Global.testing_JsonEncoder=Global.testing_JsonEncoder||{};
 testing_JsonDecoder=Global.testing_JsonDecoder=Global.testing_JsonDecoder||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 Serializer$1=FSharpStation.Serializer=FSharpStation.Serializer||{};
 Model=Serializer$1.Model=Serializer$1.Model||{};
 Importer=FSharpStation.Importer=FSharpStation.Importer||{};
 Collections=WebSharper.Collections=WebSharper.Collections||{};
 FSharpSet=Collections.FSharpSet=Collections.FSharpSet||{};
 WindowOrWorkerGlobalScope=Global.WindowOrWorkerGlobalScope;
 WSMessagingClient=WebSockets.WSMessagingClient=WebSockets.WSMessagingClient||{};
 Messaging=FSharpStation.Messaging=FSharpStation.Messaging||{};
 ResultMessage=Library.ResultMessage=Library.ResultMessage||{};
 AttrProxy=UI.AttrProxy=UI.AttrProxy||{};
 Enumerator=WebSharper.Enumerator=WebSharper.Enumerator||{};
 Elt=UI.Elt=UI.Elt||{};
 AttrModule=UI.AttrModule=UI.AttrModule||{};
 Snap=UI.Snap=UI.Snap||{};
 T$1=Enumerator.T=Enumerator.T||{};
 DomUtility=UI.DomUtility=UI.DomUtility||{};
 ConcreteVar=UI.ConcreteVar=UI.ConcreteVar||{};
 Client=UI.Client=UI.Client||{};
 Templates=Client.Templates=Client.Templates||{};
 CancellationTokenSource=WebSharper.CancellationTokenSource=WebSharper.CancellationTokenSource||{};
 DateUtil=WebSharper.DateUtil=WebSharper.DateUtil||{};
 BalancedTree=Collections.BalancedTree=Collections.BalancedTree||{};
 LazyExtensionsProxy=WebSharper.LazyExtensionsProxy=WebSharper.LazyExtensionsProxy||{};
 LazyRecord=LazyExtensionsProxy.LazyRecord=LazyExtensionsProxy.LazyRecord||{};
 Concurrency=WebSharper.Concurrency=WebSharper.Concurrency||{};
 Dictionary=Collections.Dictionary=Collections.Dictionary||{};
 Abbrev=UI.Abbrev=UI.Abbrev||{};
 Async=Abbrev.Async=Abbrev.Async||{};
 Object=Global.Object;
 FromView=UI.FromView=UI.FromView||{};
 FsCodeModule=Library.FsCodeModule=Library.FsCodeModule||{};
 FsAutoComplete=Library2.FsAutoComplete=Library2.FsAutoComplete||{};
 Calls=FsAutoComplete.Calls=FsAutoComplete.Calls||{};
 AsyncResult=Monads.AsyncResult=Monads.AsyncResult||{};
 MessageType=WebSockets.MessageType=WebSockets.MessageType||{};
 Hole=Library.Hole=Library.Hole||{};
 MainProgram=FSharpStation.MainProgram=FSharpStation.MainProgram||{};
 Attrs=UI.Attrs=UI.Attrs||{};
 Array=UI.Array=UI.Array||{};
 Docs=UI.Docs=UI.Docs||{};
 Fresh=Abbrev.Fresh=Abbrev.Fresh||{};
 Error=Global.Error;
 AggregateException=WebSharper.AggregateException=WebSharper.AggregateException||{};
 AsyncBody=Concurrency.AsyncBody=Concurrency.AsyncBody||{};
 SC$2=Global.StartupCode$WebSharper_Main$Concurrency=Global.StartupCode$WebSharper_Main$Concurrency||{};
 CT=Concurrency.CT=Concurrency.CT||{};
 Storage=UI.Storage=UI.Storage||{};
 Tree=BalancedTree.Tree=BalancedTree.Tree||{};
 DictionaryUtil=Collections.DictionaryUtil=Collections.DictionaryUtil||{};
 Result$1=WebSharper.Result=WebSharper.Result||{};
 ReplyHandler=WebSockets.ReplyHandler=WebSockets.ReplyHandler||{};
 Handler=ReplyHandler.Handler=ReplyHandler.Handler||{};
 Control=WebSharper.Control=WebSharper.Control||{};
 MailboxProcessor=Control.MailboxProcessor=Control.MailboxProcessor||{};
 MessageGeneric=WebSockets.MessageGeneric=WebSockets.MessageGeneric||{};
 Mailbox=Library.Mailbox=Library.Mailbox||{};
 Owin=WebSharper.Owin=WebSharper.Owin||{};
 WebSocket=Owin.WebSocket=Owin.WebSocket||{};
 Client$1=WebSocket.Client=WebSocket.Client||{};
 Replier=WebSockets.Replier=WebSockets.Replier||{};
 Endpoint=WebSocket.Endpoint=WebSocket.Endpoint||{};
 JsonEncoding=WebSocket.JsonEncoding=WebSocket.JsonEncoding||{};
 WebSocketServer=Client$1.WebSocketServer=Client$1.WebSocketServer||{};
 Updates=UI.Updates=UI.Updates||{};
 DynamicAttrNode=UI.DynamicAttrNode=UI.DynamicAttrNode||{};
 DocElemNode=UI.DocElemNode=UI.DocElemNode||{};
 CharacterData=Global.CharacterData;
 SC$3=Global.StartupCode$WebSharper_UI$DomUtility=Global.StartupCode$WebSharper_UI$DomUtility||{};
 SC$4=Global.StartupCode$WebSharper_UI$Templates=Global.StartupCode$WebSharper_UI$Templates||{};
 HashSet=Collections.HashSet=Collections.HashSet||{};
 An=UI.An=UI.An||{};
 Settings=Client.Settings=Client.Settings||{};
 Mailbox$1=Abbrev.Mailbox=Abbrev.Mailbox||{};
 Scheduler=Concurrency.Scheduler=Concurrency.Scheduler||{};
 ArrayStorage=Storage.ArrayStorage=Storage.ArrayStorage||{};
 OperationCanceledException=WebSharper.OperationCanceledException=WebSharper.OperationCanceledException||{};
 FSharpEvent=Control.FSharpEvent=Control.FSharpEvent||{};
 LinkedList=Collections.LinkedList=Collections.LinkedList||{};
 Map=Collections.Map=Collections.Map||{};
 WithEncoding=Client$1.WithEncoding=Client$1.WithEncoding||{};
 Attrs$1=Client.Attrs=Client.Attrs||{};
 Dyn=Attrs$1.Dyn=Attrs$1.Dyn||{};
 SC$5=Global.StartupCode$WebSharper_UI$Attr_Client=Global.StartupCode$WebSharper_UI$Attr_Client||{};
 SC$6=Global.StartupCode$WebSharper_UI$Abbrev=Global.StartupCode$WebSharper_UI$Abbrev||{};
 Prepare=Templates.Prepare=Templates.Prepare||{};
 KeyCollection=Collections.KeyCollection=Collections.KeyCollection||{};
 Docs$1=Client.Docs=Client.Docs||{};
 RunState=Docs$1.RunState=Docs$1.RunState||{};
 NodeSet=Docs$1.NodeSet=Docs$1.NodeSet||{};
 Anims=UI.Anims=UI.Anims||{};
 SC$7=Global.StartupCode$WebSharper_UI$Doc_Proxy=Global.StartupCode$WebSharper_UI$Doc_Proxy||{};
 FormatException=WebSharper.FormatException=WebSharper.FormatException||{};
 PreproDirective=FsCodeModule.PreproDirective=FsCodeModule.PreproDirective||{};
 Event$1=Control.Event=Control.Event||{};
 Event$2=Event$1.Event=Event$1.Event||{};
 FSharpMap=Collections.FSharpMap=Collections.FSharpMap||{};
 TimeoutException=WebSharper.TimeoutException=WebSharper.TimeoutException||{};
 Queue=WebSharper.Queue=WebSharper.Queue||{};
 SC$8=Global.StartupCode$WebSharper_UI$Animation=Global.StartupCode$WebSharper_UI$Animation||{};
 AppendList=UI.AppendList=UI.AppendList||{};
 SC$9=Global.StartupCode$WebSharper_Main$Remoting=Global.StartupCode$WebSharper_Main$Remoting||{};
 List$1=Collections.List=Collections.List||{};
 Pair=Collections.Pair=Collections.Pair||{};
 MapUtil=Collections.MapUtil=Collections.MapUtil||{};
 Async$1=WebSocket.Async=WebSocket.Async||{};
 Message=Client$1.Message=Client$1.Message||{};
 Easing=UI.Easing=UI.Easing||{};
 HashSet$1=Abbrev.HashSet=Abbrev.HashSet||{};
 XhrProvider=Remoting.XhrProvider=Remoting.XhrProvider||{};
 LinkedListEnumerator=Collections.LinkedListEnumerator=Collections.LinkedListEnumerator||{};
 HashSetUtil=Collections.HashSetUtil=Collections.HashSetUtil||{};
 DomNodes=Docs$1.DomNodes=Docs$1.DomNodes||{};
 SC$10=Global.StartupCode$WebSharper_UI$AppendList=Global.StartupCode$WebSharper_UI$AppendList||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Reflect=Global.Reflect;
 console=Global.console;
 JSON=Global.JSON;
 Date=Global.Date;
 Math=Global.Math;
 location=Global.location;
 $=Global.jQuery;
 WcTabStrip.css$1=function()
 {
  SC$1.$cctor();
  return SC$1.css;
 };
 WcTabStrip.tabStrip$1=function(selected,top,horizontal,tabs,content)
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
    return[Hoverable$1.New$3().Content(Doc.Element("div",[AttrModule.Dynamic("class",View.Map(function(sel)
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
      return Seq.append([Doc.Element("style",T.Empty,List.ofArray([Doc.TextNode(WcTabStrip.css$1())]))],Seq.delay(function()
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
 WcTabStrip.init$1=function()
 {
  SC$1.$cctor();
  return SC$1.init;
 };
 Obj=WebSharper.Obj=Runtime.Class({
  Equals:function(obj)
  {
   return this===obj;
  },
  GetHashCode:function()
  {
   return -1;
  }
 },null,Obj);
 Obj.New=Runtime.Ctor(function()
 {
 },Obj);
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
    a=WcTabStrip.tabStrip$1($this.selected,top,true,tabs,Doc.Element("slot",T.Empty,T.Empty));
    Templates.LoadLocalTemplates("");
    Doc.Run(elsh,a);
   }
   $this=this;
   !this.added?(el=this,shadowRoot=el.attachShadow({
    mode:"open"
   }),elsh=self.document.createElement("div"),shadowRoot.appendChild(elsh),addTab(),el.addEventListener("DOMSubtreeModified",Library.delayed$1(50,addTab)),this.added=true):void 0;
  }
 },Obj,WcTabStripT);
 WcTabStripT.Constructor$1=function()
 {
  var _this,r;
  _this=(r=Reflect.construct(self.HTMLElement,[],this.__proto__.constructor),r);
  self.FsRoot.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New.call(_this);
  return _this;
 };
 WcTabStripT.New$1=Runtime.Ctor(function()
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
 WcSplitter.set_layoutHorizontal$1=function($1)
 {
  SC$1.$cctor();
  SC$1.layoutHorizontal=$1;
 };
 WcSplitter.layoutHorizontal$1=function()
 {
  SC$1.$cctor();
  return SC$1.layoutHorizontal;
 };
 WcSplitter.set_layoutVertical$1=function($1)
 {
  SC$1.$cctor();
  SC$1.layoutVertical=$1;
 };
 WcSplitter.layoutVertical$1=function()
 {
  SC$1.$cctor();
  return SC$1.layoutVertical;
 };
 WcSplitter.init$1=function(layoutH,layoutV)
 {
  var o,_nm,_c;
  o=new WcSplitterT.New$1();
  WcSplitter.set_layoutHorizontal$1(layoutH);
  WcSplitter.set_layoutVertical$1(layoutV);
  _nm="wcomp-splitter";
  _c=self.FsRoot.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New;
  console.log("defineWebComponent: "+_nm);
  Object.setPrototypeOf(_c.prototype,self.HTMLElement.prototype);
  Object.setPrototypeOf(_c,self.HTMLElement);
  Object.setPrototypeOf(WcSplitterT.Constructor$1.prototype,_c.prototype);
  self.customElements.define(_nm,WcSplitterT.Constructor$1);
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
     a=(((((vertical?WcSplitter.layoutVertical$1():WcSplitter.layoutHorizontal$1())(View.Map(function(spl)
     {
      var x;
      x=partSizes(size[0][0],gap.Get(),padding[0],spl);
      return styleSections.apply(null,x);
     },value.get_View())))(function()
     {
      ResizeObserver.addResizeObserver$1(recalc,el);
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
 WcSplitterT.Constructor$1=function()
 {
  var _this,r;
  _this=(r=Reflect.construct(self.HTMLElement,[],this.__proto__.constructor),r);
  self.FsRoot.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New.call(_this);
  return _this;
 };
 WcSplitterT.New$1=Runtime.Ctor(function()
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
 SC$1.$cctor=function()
 {
  var f,generation,$1,b,b$1,cache,$2,cache$1,$3,cache$2,$4,p,store$3,checkO,v,prior,f$2,f$3,f$4,f$5,x,$5,$6,v$1,s,sQ,x$1,t,t$1,t$2,t$3,t$4,t$5,t$6,t$7,t$8,x$2,t$9,i,x$3,t$10,t$11,t$12,t$13,t$14,i$1,x$4,t$15,t$16,t$17,t$18,t$19,t$20,t$21,i$2,t$22,x$5,b$2;
  SC$1.$cctor=Global.ignore;
  SC$1.rtn=function(v$2)
  {
   return[v$2];
  };
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.asyncResult=new AsyncResultBuilder.New();
  SC$1.asyncResultP=new AsyncResultBuilderP.New();
  SC$1.reader=new Builder$1.New();
  SC$1.reader$1=ReaderMBasic.reader();
  SC$1.reader$2=new Builder$2.New();
  SC$1.reader$3=ReaderMResult.reader();
  SC$1.reader$4=new Builder$3.New();
  SC$1.reader$5=ReaderMAsyncResult.reader();
  function g(s$1)
  {
   return Strings.concat("\n",s$1);
  }
  SC$1.unindentStr=function(x$6)
  {
   return g(String.unindent$1(x$6));
  };
  function f$1(s$1)
  {
   return String.splitByChar$1("\n",s$1);
  }
  function g$1(s$1)
  {
   var a$2,b$3;
   return Slice.array(s$1,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$2=0,(b$3=Arrays.length(s$1)-2,Unchecked.Compare(a$2,b$3)===1?a$2:b$3))
   });
  }
  function g$2(s$1)
  {
   return Strings.concat("\n",s$1);
  }
  SC$1.skipLastLine=(f=function(x$6)
  {
   return g$1(f$1(x$6));
  },function(x$6)
  {
   return g$2(f(x$6));
  });
  SC$1.parseDateO=ParseO.tryParseWith$1(function(a$2)
  {
   var o,m$4;
   o=0;
   return[(m$4=DateUtil.TryParse(a$2),m$4!=null&&m$4.$==1&&(o=m$4.$0,true)),o];
  });
  SC$1.parseIntO=ParseO.tryParseWith$1(function(a$2)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt32(a$2,{
    get:function()
    {
     return o;
    },
    set:function(v$2)
    {
     o=v$2;
    }
   }),o];
  });
  SC$1.parseSingleO=ParseO.tryParseWith$1(function(a$2)
  {
   var o,$7;
   o=0;
   return[($7=Global.Number(a$2),Global.isNaN($7)?false:(o=$7,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith$1(function(a$2)
  {
   var o,$7;
   o=0;
   return[($7=Global.Number(a$2),Global.isNaN($7)?false:(o=$7,true)),o];
  });
  SC$1.parseGuidO=ParseO.tryParseWith$1(function(a$2)
  {
   var o;
   o=null;
   return[Guid.TryParse(a$2,{
    get:function()
    {
     return o;
    },
    set:function(v$2)
    {
     o=v$2;
    }
   }),o];
  });
  SC$1["|Date|_|"]=ParseO.parseDateO$1();
  SC$1["|Int|_|"]=ParseO.parseIntO$1();
  SC$1["|Single|_|"]=ParseO.parseSingleO$1();
  SC$1["|Double|_|"]=ParseO.parseDoubleO$1();
  SC$1["|Guid|_|"]=ParseO.parseGuidO$1();
  $1=(generation=1,[function()
  {
   generation=generation+1;
   return generation;
  },function(n)
  {
   generation=n;
  }]);
  SC$1.setGeneration=$1[1];
  SC$1.getNextGeneration=$1[0];
  SC$1.defaultSnippet=Snippet.New(new SnippetId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  }),"","",null,new FSharpSet.New$1(null),[],0);
  function g$3(c)
  {
   return c.predecesorsCache();
  }
  SC$1.predsLRmMemo=function(p$1)
  {
   return ReaderMResult.memoizeRm(g$3,SnippetModule.predsLRm,p$1);
  };
  function g$4(c)
  {
   return c.reducedCache();
  }
  SC$1.reducedOthersORmMemo=function(p$1)
  {
   return ReaderMResult.memoizeRm(g$4,function($7)
   {
    return SnippetModule.reducedOthersORm($7[0],$7[1],$7[2]);
   },p$1);
  };
  SC$1.deserGuid=function(v$2)
  {
   return Serializer.ifUndef("00000000-0000-0000-0000-000000000000",v$2);
  };
  function g$5(v$2)
  {
   return Serializer.ifUndef(0,v$2);
  }
  SC$1.serFloat=[function(v$2)
  {
   return(function($7)
   {
    return function($8)
    {
     return $7(Utils.prettyPrint($8));
    };
   }(Global.id))(v$2);
  },function(x$6)
  {
   return g$5(Global.id(x$6));
  }];
  function g$6(v$2)
  {
   return Serializer.ifUndef(0,v$2);
  }
  SC$1.serInt=[function(v$2)
  {
   return(function($7)
   {
    return function($8)
    {
     return $7(Utils.prettyPrint($8));
    };
   }(Global.id))(v$2);
  },function(x$6)
  {
   return g$6(Global.id(x$6));
  }];
  function g$7(v$2)
  {
   return Serializer.ifUndef(false,v$2);
  }
  SC$1.serBool=[function(v$2)
  {
   return(function($7)
   {
    return function($8)
    {
     return $7(Utils.prettyPrint($8));
    };
   }(Global.id))(v$2);
  },function(x$6)
  {
   return g$7(Global.id(x$6));
  }];
  function g$8(v$2)
  {
   return Serializer.ifUndef("",v$2);
  }
  SC$1.serString=[function(a$2)
  {
   return JSON.stringify(((Provider.Id())())(a$2));
  },function(x$6)
  {
   return g$8(Global.id(x$6));
  }];
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$1.observers=T.Empty;
  SC$1.css="\r\n                .tab-panel {\r\n                 overflow  : hidden   ;\r\n                 display   : flex     ;\r\n                 flex-flow : column   ;\r\n                 background: lightgray;\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                }\r\n                .tab-content {\r\n                 flex      : 1 1     ;\r\n                 overflow  : auto    ;\r\n                 position  : relative;\r\n                }\r\n                .tab-children {\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                 position  : absolute;\r\n                 display   : grid    ;\r\n                }\r\n                .tab-strip {\r\n                 padding   : 0pt     ;\r\n                 flex      : 0 0     ;\r\n                }\r\n                .tab {\r\n                 border     : 0.2pt solid transparent;\r\n                 padding    : 0pt 4pt;\r\n                 display    : inline-block;\r\n                 font-family: sans-serif;\r\n                 font-weight: 200;\r\n                 font-size  : small;\r\n                 color      : #666;\r\n                 cursor     : pointer;\r\n                }\r\n                .top>.tab {\r\n                 border-radius: 2pt 2pt 0pt 0pt;\r\n                 border-bottom-width: 0pt;\r\n                 vertical-align: bottom;\r\n                }\r\n                .bottom>.tab {\r\n                 border-top-width: 0pt;\r\n                 border-radius: 0pt 0pt 2pt 2pt;\r\n                 vertical-align: top;\r\n                }\r\n                .horizontal>.tab:not(:first-child) {\r\n                 border-left-width: 0pt;\r\n                }\r\n                .tab.hovering {\r\n                 background: red;\r\n                }\r\n                .tab.selected {\r\n                 background: white;\r\n                 border-left-width: 0.2pt;\r\n                 color: black;\r\n                 font-weight: 500;\r\n                 border-color: black;\r\n                }\r\n                .horizontal>.tab.selected {\r\n                 border-left-width: 0.2pt;\r\n                }\r\n                ::slotted(*              ) { \r\n                 width : 100%;\r\n                 height: 100%;\r\n                }\r\n                        ";
  SC$1.init=Lazy.Create(function()
  {
   var o,_nm,_c;
   o=new WcTabStripT.New$1();
   _nm="wcomp-tabstrip";
   _c=self.FsRoot.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New;
   console.log("defineWebComponent: "+_nm);
   Object.setPrototypeOf(_c.prototype,self.HTMLElement.prototype);
   Object.setPrototypeOf(_c,self.HTMLElement);
   Object.setPrototypeOf(WcTabStripT.Constructor$1.prototype,_c.prototype);
   self.customElements.define(_nm,WcTabStripT.Constructor$1);
  });
  SC$1.layoutHorizontal=Runtime.Curried(function($7,$8,$9,$10,$11)
  {
   return Doc.get_Empty();
  },5);
  SC$1.layoutVertical=Runtime.Curried(function($7,$8,$9,$10,$11)
  {
   return Doc.get_Empty();
  },5);
  SC$1.includes=["/EPFileX/monaco/package/min/vs/loader.js"];
  SC$1.loader=(b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(LoadFiles.LoadFilesAsync(Monaco.includes()),function()
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
   });
  }));
  SC$1.MessageBrokerId="<MessageBroker>";
  SC$1.MessageBrokerAddress=new Address({
   $:0,
   $0:WebSockets.MessageBrokerId()
  });
  SC$1.id="FSharpStation"+Global.String(Date.now());
  SC$1.rootDir=".";
  SC$1.srcDir=".";
  Concurrency.Start((b$1=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("testing:FsRoot.FSharpStation+FStation.getRootDir:-447555547",[]),function(a$2)
   {
    FStation.set_rootDir(a$2+"/"+"..");
    FStation.set_srcDir(a$2+"/"+"..\\src");
    (((Runtime.Curried3(function($7,$8,$9)
    {
     return $7("fileName = "+Utils.toSafe($8)+"\\"+Utils.toSafe($9)+".fsx");
    }))(function(s$1)
    {
     console.log(s$1);
    }))(FStation.srcDir()))(FStation.id());
    return Concurrency.Zero();
   });
  })),null);
  SC$1.annotationsV=Var$1.Create$1("");
  SC$1.snippets=new ListModel.New$1(function(s$1)
  {
   return s$1.snpId;
  });
  SC$1.hierarchy=Var$1.Create$1([]);
  SC$1.generation=Var$1.Create$1(5);
  SC$1.currentSnippetIdOV=Var$1.Create$1(null);
  SC$1.codeSnippetIdOV=Var$1.Create$1(null);
  SC$1.collapsedV=Var$1.Create$1(new FSharpSet.New$1(null));
  function store(v$2,res)
  {
   cache.set_Item(v$2,res);
   return res;
  }
  $2=(cache=new Dictionary.New$5(),[[function(v$2)
  {
   var res;
   res=null;
   return cache.TryGetValue(v$2,{
    get:function()
    {
     return res;
    },
    set:function(v$3)
    {
     res=v$3;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($7)
  {
   return function($8)
   {
    return store($7,$8);
   };
  }],function()
  {
   cache.Clear();
  }]);
  SC$1.predsCache=$2[0];
  SC$1.clearPreds=$2[1];
  function store$1(v$2,res)
  {
   cache$1.set_Item(v$2,res);
   return res;
  }
  $3=(cache$1=new Dictionary.New$5(),[[function(v$2)
  {
   var res;
   res=null;
   return cache$1.TryGetValue(v$2,{
    get:function()
    {
     return res;
    },
    set:function(v$3)
    {
     res=v$3;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($7)
  {
   return function($8)
   {
    return store$1($7,$8);
   };
  }],function()
  {
   cache$1.Clear();
  }]);
  SC$1.reducCache=$3[0];
  SC$1.clearReduc=$3[1];
  function store$2(v$2,res)
  {
   cache$2.set_Item(v$2,res);
   return res;
  }
  $4=(cache$2=new Dictionary.New$5(),[[function(v$2)
  {
   var res;
   res=null;
   return cache$2.TryGetValue(v$2,{
    get:function()
    {
     return res;
    },
    set:function(v$3)
    {
     res=v$3;
    }
   })?{
    $:1,
    $0:res
   }:null;
  },function($7)
  {
   return function($8)
   {
    return store$2($7,$8);
   };
  }],function()
  {
   cache$2.Clear();
  }]);
  SC$1.parentCache=$4[0];
  SC$1.clearParent=$4[1];
  SC$1.getParentIdO=(p=Snippets.parentCache(),(store$3=p[1],(checkO=p[0],function(p$1)
  {
   var o,x$6;
   o=checkO(p$1);
   return o==null?(x$6=Snippets.getParentIdONotMemo(p$1),(store$3(p$1))(x$6)):o.$0;
  })));
  View.Sink(function(a$2)
  {
   var curId,m$4;
   if(a$2!=null&&a$2.$==1)
    {
     curId=a$2.$0;
     m$4=Snippets.codeSnippetIdOV().Get();
     m$4!=null&&m$4.$==1?(Snippets.iterReader(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(SnippetModule.snippetORm(m$4.$0),function(o)
     {
      return o==null?null:{
       $:1,
       $0:SnippetModule.uniquePredsRm(o.$0)
      };
     }),ReaderMResult.insertO),Option.toList),function(l)
     {
      return List.collect(Global.id,l);
     }),function(s$1)
     {
      return List.contains(curId,s$1);
     }),function(a$3)
     {
      if(a$3)
       ;
      else
       Snippets.codeSnippetIdOV().Set({
        $:1,
        $0:curId
       });
     })),Snippets.clearPredsCache()):Snippets.codeSnippetIdOV().Set({
      $:1,
      $0:curId
     });
    }
  },Snippets.currentSnippetIdOV().get_View());
  function m(n)
  {
   return n.id();
  }
  View.Sink(function(ids)
  {
   var a$2;
   Snippets.clearPredsCache();
   a$2=Arrays.ofSeq(Seq.delay(function()
   {
    return Seq.collect(function(sid)
    {
     return Seq.append([Snippets.snippets().FindByKey(sid)],Seq.delay(function()
     {
      return Seq.filter(function(snp)
      {
       return Snippets.isDescendantOf(sid,snp.snpId);
      },(Snippets.snippets())["var"].Get());
     }));
    },ids);
   }));
   Snippets.snippets().Set(a$2);
  },(v=View.Map(function(a$2)
  {
   return Arrays.map(m,a$2);
  },Snippets.hierarchy().get_View()),(prior=[Var$1.Create$1(null)],(View.Sink(function(v$2)
  {
   if(!Unchecked.Equals(prior[0].Get(),v$2))
    prior[0].Set(v$2);
  },v),prior[0].get_View()))));
  SC$1.CurrentSnippetIdW=View.Map(function(sidO)
  {
   var v$2;
   v$2=SnippetModule.defaultSnippet().snpId;
   return sidO==null?v$2:sidO.$0;
  },Snippets.currentSnippetIdOV().get_View());
  function g$9(o)
  {
   var v$2;
   v$2=SnippetModule.defaultSnippet();
   return o==null?v$2:o.$0;
  }
  function m$1(a$2)
  {
   return Snippets.snippets().TryFindByKeyAsView(a$2);
  }
  SC$1.currentSnippetW=View.Map((f$2=function(o)
  {
   return o==null?null:Global.id(o.$0);
  },function(x$6)
  {
   return g$9(f$2(x$6));
  }),View.Bind((f$3=function(o)
  {
   return o==null?null:{
    $:1,
    $0:m$1(o.$0)
   };
  },function(x$6)
  {
   return View$1.insertWO(f$3(x$6));
  }),Snippets.currentSnippetIdOV().get_View()));
  function g$10(o)
  {
   var v$2;
   v$2=SnippetModule.defaultSnippet();
   return o==null?v$2:o.$0;
  }
  function m$2(a$2)
  {
   return Snippets.snippets().TryFindByKeyAsView(a$2);
  }
  SC$1.codeSnippetW=View.Map((f$4=function(o)
  {
   return o==null?null:Global.id(o.$0);
  },function(x$6)
  {
   return g$10(f$4(x$6));
  }),View.Bind((f$5=function(o)
  {
   return o==null?null:{
    $:1,
    $0:m$2(o.$0)
   };
  },function(x$6)
  {
   return View$1.insertWO(f$5(x$6));
  }),Snippets.codeSnippetIdOV().get_View()));
  SC$1.currentSnippetV=new FromView.New(Snippets.currentSnippetW(),function(s$1)
  {
   Snippets.setSnippet(s$1);
  });
  function m$3(tn,l)
  {
   return[tn.id(),l];
  }
  function a(a$2)
  {
   function f$6(n)
   {
    return TreeReader.listNodes(0,n);
   }
   function g$11(r)
   {
    return Snippets.runReader(Snippets.handleError,r);
   }
   return function(x$6)
   {
    return g$11(f$6(x$6));
   };
  }
  SC$1.getHierarchyW=View.Map(Arrays.ofSeq,View.Map(function(s$1)
  {
   return Seq.map(function($7)
   {
    return m$3($7[0],$7[1]);
   },s$1);
  },(x=Snippets.hierarchy().get_View(),View.Map2(function($7,$8)
  {
   return(a($7))($8);
  },Snippets.collapsedV().get_View(),x))));
  function a$1(a$2,a$3)
  {
   var b$3;
   b$3=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(350),function()
    {
     return Concurrency.Return(Snippets.runReader(Snippets.handleError,SnippetModule.fastCodeRm(Snippets.currentSnippetIdOV().Get(),Snippets.codeSnippetIdOV().Get())));
    });
   });
  }
  SC$1.codeAndStartsW=($5=Snippets.codeSnippetW(),($6=Snippets.snippets().v,(((Runtime.Curried3(View.MapAsync2))(a$1))($5))($6)));
  SC$1.FsCodeW=View.Map(function(t$23)
  {
   return t$23[0];
  },Snippets.codeAndStartsW());
  SC$1.codeStartsW=View.Map(function(t$23)
  {
   return t$23[1];
  },Snippets.codeAndStartsW());
  SC$1.SaveAsClassW=View.Map2(function(snps,gen)
  {
   return Seq.exists(function(snp)
   {
    return snp.snpGeneration>gen;
   },snps)?"btn-primary":"";
  },Snippets.snippets().v,Snippets.generation().get_View());
  SC$1.drag=DragInfo.DragNone;
  SC$1.rootdir="..\\website";
  SC$1.TemplatesFileName="..\\website"+"\\Templates.html";
  ((function($7)
  {
   return function($8)
   {
    return $7(Utils.toSafe($8));
   };
  }(function(s$1)
  {
   console.log(s$1);
  }))("..\\website\\Templates.html"));
  SC$1.startsV=Var$1.Create$1([]);
  SC$1.defaultStart=(v$1=[[SnippetId.get_Empty(),""],[0,1,0]],function(o)
  {
   return o==null?v$1:o.$0;
  });
  SC$1.fileName="none.fsx";
  SC$1.editorConfigO=null;
  View.Sink(function(sid)
  {
   var o,o$1;
   try
   {
    o=(o$1=Monaco$1.editorConfigO(),o$1==null?null:o$1.$0.editorO);
    o==null?null:(o.$0.setModel(Monaco$1.getSnippetModel(sid)),FStation.annotationsV().Set(FStation.annotationsV().Get()));
   }
   catch(m$4)
   {
    null;
   }
  },Snippets.CurrentSnippetIdW());
  SC$1.rexGuid$1="\\((\\d+)\\,\\s*(\\d+)\\) - \\((\\d+)\\,\\s*(\\d+)\\).*([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  function get(a$2)
  {
   return a$2.$0;
  }
  function set(a$2)
  {
   return new SnippetId({
    $:0,
    $0:a$2
   });
  }
  SC$1.serSnippetId=(s=Arrays.head(Strings.SplitChars((function($7)
  {
   return function($8)
   {
    return $7(testing_GeneratedPrintf.p($8));
   };
  }(Global.id))(set("00000000-0000-0000-0000-000000000000")),[" "],0)),(sQ=(function($7)
  {
   return function($8)
   {
    return $7(Utils.prettyPrint($8));
   };
  }(Global.id))(s),[function(id)
  {
   var x$6;
   x$6=get(id);
   return(((Runtime.Curried3(function($7,$8,$9)
   {
    return $7("{"+Strings.PadLeft(Utils.toSafe($8),10)+" :"+Utils.prettyPrint($9)+"}");
   }))(Global.id))(sQ))(x$6);
  },function(x$6)
  {
   var x$7;
   return set((x$7=x$6[s],(Serializer.deserGuid())(x$7)));
  }]));
  SC$1.serSnippet=(x$1=[(t=Serializer$1.serSnippetId(),Serializer.serField("snpId",function(s$1)
  {
   return s$1.snpId;
  },function(v$2,s$1)
  {
   return Snippet.New(v$2,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t[0],t[1])),(t$1=Serializer.serString(),Serializer.serField("snpName",function(s$1)
  {
   return s$1.snpName;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,v$2,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$1[0],t$1[1])),(t$2=Serializer.serString(),Serializer.serField("snpContent",function(s$1)
  {
   return s$1.snpContent;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,v$2,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$2[0],t$2[1])),(t$3=(t$4=Serializer$1.serSnippetId(),Serializer.serOpt(t$4[0],t$4[1])),Serializer.serField("snpParentIdO",function(s$1)
  {
   return s$1.snpParentIdO;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,v$2,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$3[0],t$3[1])),(t$5=(t$6=Serializer$1.serSnippetId(),Serializer.serSet(t$6[0],t$6[1])),Serializer.serField("snpPredIds",function(s$1)
  {
   return s$1.snpPredIds;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,v$2,s$1.snpProperties,s$1.snpGeneration);
  },t$5[0],t$5[1])),(t$7=(t$8=(x$2=Serializer.serString(),Serializer.serDup((Serializer.serString())[0],(Serializer.serString())[1],x$2[0],x$2[1])),Serializer.serArr(t$8[0],t$8[1])),Serializer.serField("snpProperties",function(s$1)
  {
   return s$1.snpProperties;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,v$2,s$1.snpGeneration);
  },t$7[0],t$7[1])),(t$9=Serializer.serInt(),Serializer.serField("snpGeneration",function(s$1)
  {
   return s$1.snpGeneration;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,v$2);
  },t$9[0],t$9[1]))],(i=SnippetModule.New("","",null),[function(dim)
  {
   var x$6;
   function m$4(n,ser,_deser)
   {
    return(((Runtime.Curried3(function($7,$8,$9)
    {
     return $7(Utils.prettyPrint($8)+": "+Utils.toSafe($9));
    }))(Global.id))(n))(ser(dim));
   }
   x$6=Strings.concat(", ",Seq.map(function($7)
   {
    return m$4($7[0],$7[1],$7[2]);
   },x$1));
   return(function($7)
   {
    return function($8)
    {
     return $7("{"+Utils.toSafe($8)+"}");
    };
   }(Global.id))(x$6);
  },function(o)
  {
   return!o?i:Seq.fold(function(dim,t$23)
   {
    return(t$23[2](dim))(o[t$23[0]]);
   },i,x$1);
  }]));
  SC$1.serModel=(x$3=[(t$10=(t$11=Serializer$1.serSnippet(),Serializer.serArr(t$11[0],t$11[1])),Serializer.serField("snippets",function(m$4)
  {
   return m$4.snippets;
  },function(v$2,m$4)
  {
   return Model.New(v$2,m$4.generation,m$4.collapsed);
  },t$10[0],t$10[1])),(t$12=Serializer.serInt(),Serializer.serField("generation",function(m$4)
  {
   return m$4.generation;
  },function(v$2,m$4)
  {
   return Model.New(m$4.snippets,v$2,m$4.collapsed);
  },t$12[0],t$12[1])),(t$13=(t$14=Serializer$1.serSnippetId(),Serializer.serSet(t$14[0],t$14[1])),Serializer.serField("collapsed",function(m$4)
  {
   return m$4.collapsed;
  },function(v$2,m$4)
  {
   return Model.New(m$4.snippets,m$4.generation,v$2);
  },t$13[0],t$13[1]))],(i$1=Model.New([],0,new FSharpSet.New$1(null)),[function(dim)
  {
   var x$6;
   function m$4(n,ser,_deser)
   {
    return(((Runtime.Curried3(function($7,$8,$9)
    {
     return $7(Utils.prettyPrint($8)+": "+Utils.toSafe($9));
    }))(Global.id))(n))(ser(dim));
   }
   x$6=Strings.concat(", ",Seq.map(function($7)
   {
    return m$4($7[0],$7[1],$7[2]);
   },x$3));
   return(function($7)
   {
    return function($8)
    {
     return $7("{"+Utils.toSafe($8)+"}");
    };
   }(Global.id))(x$6);
  },function(o)
  {
   return!o?i$1:Seq.fold(function(dim,t$23)
   {
    return(t$23[2](dim))(o[t$23[0]]);
   },i$1,x$3);
  }]));
  SC$1.fileName$1=Var$1.Create$1("");
  SC$1.serSnippetId2=[function(v$2)
  {
   return(function($7)
   {
    return function($8)
    {
     return $7(Utils.prettyPrint($8));
    };
   }(Global.id))(v$2);
  },function(x$6)
  {
   var x$7;
   return new SnippetId({
    $:0,
    $0:(x$7=x$6.Item,(Serializer.deserGuid())(x$7))
   });
  }];
  SC$1.serSnippet2=(x$4=[(t$15=Importer.serSnippetId2(),Serializer.serField("id",function(s$1)
  {
   return s$1.snpId;
  },function(v$2,s$1)
  {
   return Snippet.New(Unchecked.Equals(v$2,SnippetId.get_Empty())?new SnippetId({
    $:0,
    $0:Guid.NewGuid()
   }):v$2,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$15[0],t$15[1])),(t$16=Serializer.serString(),Serializer.serField("name",function(s$1)
  {
   return s$1.snpName;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,v$2,s$1.snpContent,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$16[0],t$16[1])),(t$17=Serializer.serString(),Serializer.serField("content",function(s$1)
  {
   return s$1.snpContent;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,v$2,s$1.snpParentIdO,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$17[0],t$17[1])),(t$18=(t$19=Importer.serSnippetId2(),Serializer.serOpt(t$19[0],t$19[1])),Serializer.serField("parent",function(s$1)
  {
   return s$1.snpParentIdO;
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,Unchecked.Equals(v$2,{
    $:1,
    $0:SnippetId.get_Empty()
   })?null:v$2,s$1.snpPredIds,s$1.snpProperties,s$1.snpGeneration);
  },t$18[0],t$18[1])),(t$20=(t$21=Importer.serSnippetId2(),Serializer.serArr(t$21[0],t$21[1])),Serializer.serField("predecessors",function(s$1)
  {
   return Arrays.ofSeq(s$1.snpPredIds);
  },function(v$2,s$1)
  {
   return Snippet.New(s$1.snpId,s$1.snpName,s$1.snpContent,s$1.snpParentIdO,new FSharpSet.New(v$2),s$1.snpProperties,s$1.snpGeneration);
  },t$20[0],t$20[1]))],(i$2=SnippetModule.New("","",null),[function(dim)
  {
   var x$6;
   function m$4(n,ser,_deser)
   {
    return(((Runtime.Curried3(function($7,$8,$9)
    {
     return $7(Utils.prettyPrint($8)+": "+Utils.toSafe($9));
    }))(Global.id))(n))(ser(dim));
   }
   x$6=Strings.concat(", ",Seq.map(function($7)
   {
    return m$4($7[0],$7[1],$7[2]);
   },x$4));
   return(function($7)
   {
    return function($8)
    {
     return $7("{"+Utils.toSafe($8)+"}");
    };
   }(Global.id))(x$6);
  },function(o)
  {
   return!o?i$2:Seq.fold(function(dim,t$23)
   {
    return(t$23[2](dim))(o[t$23[0]]);
   },i$2,x$4);
  }]));
  SC$1.serSnippets=(t$22=Importer.serSnippet2(),Serializer.serArr(t$22[0],t$22[1]));
  SC$1.outputMsgs=Var$1.Create$1("");
  x$5=Snippets.codeAndStartsW();
  View.Sink(Library.delayed(300,function(t$23)
  {
   Monaco$1.parse(t$23[0],t$23[1]);
  }),x$5);
  View.Sink(function(m$4)
  {
   self.onbeforeunload=m$4!==""?function(e)
   {
    e.returnValue="Changes you made may not be saved.";
   }:null;
  },Snippets.SaveAsClassW());
  SC$1.wsStationClient=new WSMessagingClient.New(FStation.id(),null,null);
  Concurrency.Start((b$2=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(1000),function()
   {
    return Concurrency.While(function()
    {
     return true;
    },Concurrency.Delay(function()
    {
     return Concurrency.TryWith(Concurrency.Delay(function()
     {
      var _this,f$6,g$11,f$7,dst,p$1;
      function f$8(a$2)
      {
       return(testing_JsonDecoder.j$4())(JSON.parse(a$2));
      }
      function f$9(a$2)
      {
       return JSON.stringify((testing_JsonEncoder.j$4())(a$2));
      }
      function g$12(v$2)
      {
       return Concurrency.Return(v$2);
      }
      function g$13(m$4)
      {
       Operators.FailWith(m$4);
      }
      _this=Messaging.wsStationClient();
      _this.payloadProcessorO={
       $:1,
       $0:(f$6=function(x$6)
       {
        return Messaging.processMessage(f$8(x$6));
       },(g$11=(f$7=function(x$6)
       {
        return g$12(f$9(x$6));
       },function(v$2)
       {
        return Concurrency.Bind(v$2,f$7);
       }),function(x$6)
       {
        return g$11(f$6(x$6));
       }))
      };
      AsyncResult.iterA(function(x$6)
      {
       return g$13(Global.String(x$6));
      },Global.ignore,_this.sendAndForget(WebSockets.msgType(MessageType.MsgInformation,(dst=WebSockets.MessageBrokerAddress(),(p$1=JSON.stringify(((Provider.Id())())("Registering Processor")),MessageGeneric.New(new Address({
       $:0,
       $0:""
      }),dst,MessageType.MsgRequest,"",Guid.NewGuid(),p$1,Replier.NoReply))))));
      return Concurrency.Bind(Concurrency.Sleep(60000),function()
      {
       return Concurrency.Return(null);
      });
     }),function(a$2)
     {
      ((function($7)
      {
       return function($8)
       {
        return $7(Utils.toSafe($8));
       };
      }(function(s$1)
      {
       console.log(s$1);
      }))(a$2.message));
      return Concurrency.Bind(Concurrency.Sleep(1000),function()
      {
       return Concurrency.Return(null);
      });
     });
    }));
   });
  })),null);
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
 attr=HtmlModule.attr=Runtime.Class({},Obj,attr);
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
 Utils.printArray=function(p,o)
 {
  return o===null?"null":"[|"+Strings.concat("; ",Arrays.map(p,o))+"|]";
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
 Seq.mapi=function(f,s)
 {
  return Seq.map2(f,Seq.initInfinite(Global.id),s);
 };
 Seq.init=function(n,f)
 {
  return Seq.take(n,Seq.initInfinite(f));
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
 Seq.takeWhile=function(f,s)
 {
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator.Get(s),function(e)
   {
    return Seq.enumWhile(function()
    {
     return e.MoveNext()&&f(e.Current());
    },Seq.delay(function()
    {
     return[e.Current()];
    }));
   });
  });
 };
 Seq.skipWhile=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var o;
    o=Enumerator.Get(s);
    return new T$1.New(true,null,function(e)
    {
     var go,empty;
     if(e.s)
      {
       go=true;
       empty=false;
       while(go)
        if(o.MoveNext())
        {
         if(!f(o.Current()))
          go=false;
        }
        else
         {
          go=false;
          empty=true;
         }
       e.s=false;
       return empty?false:(e.c=o.Current(),true);
      }
     else
      return o.MoveNext()&&(e.c=o.Current(),true);
    },function()
    {
     o.Dispose();
    });
   }
  };
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
 Seq.choose=function(f,s)
 {
  return Seq.collect(function(x)
  {
   var m;
   m=f(x);
   return m==null?T.Empty:List.ofArray([m.$0]);
  },s);
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
 Seq.reduce=function(f,source)
 {
  var e,r;
  e=Enumerator.Get(source);
  try
  {
   if(!e.MoveNext())
    Seq.seqEmpty();
   r=e.Current();
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
 Seq.sort=function(s)
 {
  return Seq.sortBy(Global.id,s);
 };
 Seq.mapFold=function(f,zero,s)
 {
  return Arrays.mapFold(f,zero,Arrays.ofSeq(s));
 };
 Seq.distinct=function(s)
 {
  return Seq.distinctBy(Global.id,s);
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
 Seq.forall2=function(p,s1,s2)
 {
  return!Seq.exists2(function($1,$2)
  {
   return!p($1,$2);
  },s1,s2);
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
 Seq.seqEmpty=function()
 {
  return Operators.FailWith("The input sequence was empty.");
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
  }
 },null,Hoverable$1);
 Hoverable$1.New$3=function()
 {
  return Hoverable$1.New$2(Var$1.Create$1(false));
 };
 Hoverable$1.New$2=function(hover)
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
 View.Bind=function(fn,view)
 {
  return View.Join(View.Map(fn,view));
 };
 View.Map2=function(fn,a,a$1)
 {
  return View.CreateLazy(function()
  {
   return Snap.Map2(fn,a(),a$1());
  });
 };
 View.MapAsync2=function(fn,v1,v2)
 {
  return View.MapAsync(Global.id,View.Map2(fn,v1,v2));
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
 View.Join=function(a)
 {
  return View.CreateLazy(function()
  {
   return Snap.Join(a());
  });
 };
 View.MapAsync=function(fn,a)
 {
  return View.CreateLazy(function()
  {
   return Snap.MapAsync(fn,a());
  });
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
 Var=UI.Var=Runtime.Class({},Obj,Var);
 Var.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Var);
 Doc=UI.Doc=Runtime.Class({},Obj,Doc);
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
 Doc.RunInPlace=function(childrenOnly,parent,doc)
 {
  var st;
  st=Docs.CreateRunState(parent,doc.docNode);
  View.Sink(An.get_UseAnimations()||Settings.BatchUpdatesEnabled()?Mailbox$1.StartProcessor(Docs.PerformAnimatedUpdate(childrenOnly,st,doc.docNode)):function()
  {
   Docs.PerformSyncUpdate(childrenOnly,st,doc.docNode);
  },doc.updates);
 };
 Doc.New=Runtime.Ctor(function(docNode,updates)
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
 List.collect=function(f,l)
 {
  return List.ofSeq(Seq.collect(f,l));
 };
 List.contains=function(el,x)
 {
  var c,l;
  c=false;
  l=x;
  while(!c&&l.$==1)
   {
    c=Unchecked.Equals(el,l.$0);
    l=l.$1;
   }
  return c;
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
 List.length=function(l)
 {
  var r,i;
  r=l;
  i=0;
  while(r.$==1)
   {
    r=List.tail(r);
    i=i+1;
   }
  return i;
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
 T=List.T=Runtime.Class({
  get_Length:function()
  {
   return List.length(this);
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
 Numeric.TryParseInt32=function(s,r)
 {
  return Numeric.TryParse(s,-2147483648,2147483647,r);
 };
 Var$1=UI.Var$1=Runtime.Class({},Obj,Var$1);
 Var$1.Create$1=function(v)
 {
  return new ConcreteVar.New(false,Snap.New({
   $:2,
   $0:v,
   $1:[]
  }),v);
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
 Library.delayed$1=function(delay,doF)
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
 Option.toList=function(x)
 {
  return x==null?T.Empty:List.ofArray([x.$0]);
 };
 ResizeObserver.addResizeObserver$1=function(f,el)
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
    ResizeObserver.set_observers$1(new T({
     $:1,
     $0:ro,
     $1:ResizeObserver.observers$1()
    }));
    ro.observe(el);
   }
  else
   {
    changed=ResizeObserver.dimsChanged$1(el);
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
 ResizeObserver.set_observers$1=function($1)
 {
  SC$1.$cctor();
  SC$1.observers=$1;
 };
 ResizeObserver.observers$1=function()
 {
  SC$1.$cctor();
  return SC$1.observers;
 };
 ResizeObserver.dimsChanged$1=function(el)
 {
  var dims;
  dims=[el.getBoundingClientRect()];
  return function()
  {
   var ndims;
   ndims=el.getBoundingClientRect();
   return Unchecked.Equals(ResizeObserver.domRect2Tuple$1(dims[0]),ResizeObserver.domRect2Tuple$1(ndims))?false:(dims[0]=ndims,true);
  };
 };
 ResizeObserver.domRect2Tuple$1=function(r)
 {
  return[r.top,r.left,r.width,r.height];
 };
 Builder=Result.Builder=Runtime.Class({},Obj,Builder);
 Builder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder);
 Result.result=function()
 {
  SC$1.$cctor();
  return SC$1.result;
 };
 Result.defaultWith=function(f,r)
 {
  return r.$==1?f(r.$0):r.$0;
 };
 Result.rtn=function(a)
 {
  return{
   $:0,
   $0:a
  };
 };
 Result.iter=function(fE,f,r)
 {
  Result.defaultWith(fE,Result.mapP(f,r));
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
   return Library.Error$1(f(x));
  }():o.$0;
 };
 Result.mapP=function(f,m)
 {
  return Result.bindP(function(x)
  {
   return Result.rtn(f(x));
  },m);
 };
 Result.bindP=function(f,r)
 {
  if(r.$==1)
   return Library.Error$1(r.$0);
  else
   try
   {
    return f(r.$0);
   }
   catch(e)
   {
    return Library.Error$1(new ResultMessage({
     $:3,
     $0:e.message,
     $1:e.stack
    }));
   }
 };
 AsyncResultBuilder=Monads.AsyncResultBuilder=Runtime.Class({
  Run:function(fRA)
  {
   return fRA();
  },
  Delay:Global.id,
  Bind$1:function(vRA,fRA)
  {
   return AsyncResult.bind(fRA,vRA);
  },
  Zero:function()
  {
   return AsyncResult.rtn();
  },
  Bind:function(vR,fRA)
  {
   return AsyncResult.bind(fRA,AsyncResult.rtnR(vR));
  },
  Return:function(v)
  {
   return AsyncResult.rtn(v);
  }
 },Obj,AsyncResultBuilder);
 AsyncResultBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },AsyncResultBuilder);
 AsyncResultBuilderP=Monads.AsyncResultBuilderP=Runtime.Class({},Obj,AsyncResultBuilderP);
 AsyncResultBuilderP.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },AsyncResultBuilderP);
 Builder$1=ReaderMBasic.Builder=Runtime.Class({},Obj,Builder$1);
 Builder$1.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder$1);
 ReaderMBasic.reader=function()
 {
  SC$1.$cctor();
  return SC$1.reader;
 };
 Builder$2=ReaderMResult.Builder=Runtime.Class({
  Run:function(f)
  {
   return ReaderMResult.delayRun(f);
  },
  Delay:Global.id,
  Combine:function(a,b)
  {
   return ReaderMResult.bind(b,a);
  },
  While:function(guard,body)
  {
   function whileLoop(guard$1,body$1)
   {
    return guard$1()?ReaderMResult.bind(function()
    {
     return whileLoop(guard$1,body$1);
    },body$1()):ReaderMResult.rtn();
   }
   return whileLoop(guard,body);
  },
  Zero:function()
  {
   return ReaderMResult.rtn();
  },
  Bind:function(w,r)
  {
   return ReaderMResult.bind(r,w);
  },
  Return:function(x)
  {
   return ReaderMResult.rtn(x);
  },
  ReturnFrom$1:Global.id
 },Obj,Builder$2);
 Builder$2.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder$2);
 ReaderMResult.reader=function()
 {
  SC$1.$cctor();
  return SC$1.reader$2;
 };
 ReaderMResult.memoizeRm=function(getStore,fRm,p)
 {
  return ReaderMResult.wrap(function(r)
  {
   var p$1,o,o$1,x;
   p$1=getStore(r);
   return ReaderMResult.run(r,(o=(o$1=p$1[0](p),o$1==null?null:{
    $:1,
    $0:ReaderMResult.rtn(o$1.$0)
   }),o==null?(x=fRm(p),ReaderMResult.map(p$1[1](p),x)):o.$0));
  });
 };
 ReaderMResult.insertO=function(vvO)
 {
  var o;
  o=vvO==null?null:{
   $:1,
   $0:ReaderMResult.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vvO.$0)
  };
  return o==null?ReaderMResult.rtn(null):o.$0;
 };
 ReaderMResult.rtn=function(a)
 {
  return ReaderMResult.wrap(function()
  {
   return Result.rtn(a);
  });
 };
 ReaderMResult.map=function(f,m)
 {
  return ReaderMResult.bind(function(x)
  {
   return ReaderMResult.rtn(f(x));
  },m);
 };
 ReaderMResult.run=function(rsrc,a)
 {
  return(ReaderMResult.getFun(a))(rsrc);
 };
 ReaderMResult.wrap=function(f)
 {
  return{
   $:0,
   $0:f
  };
 };
 ReaderMResult.bind=function(f,a)
 {
  return ReaderMResult.wrap(function(m)
  {
   return Result$1.Bind(function(v)
   {
    return(ReaderMResult.getFun(f(v)))(m);
   },(ReaderMResult.getFun(a))(m));
  });
 };
 ReaderMResult.ofFun=function(f)
 {
  return ReaderMResult.wrap(function(x)
  {
   return Result.rtn(f(x));
  });
 };
 ReaderMResult.iter=function(fE,f,t,a)
 {
  Result.iter(fE,f,ReaderMResult.run(t,a));
 };
 ReaderMResult.sequenceSeq=function(sq)
 {
  return ReaderMResult.traverseSeq(Global.id,sq);
 };
 ReaderMResult.traverseSeq=function(f,sq)
 {
  return ReaderMResult.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return ReaderMResult.op_GreaterGreaterEquals(f(head),function(h)
   {
    return ReaderMResult.op_GreaterGreaterEquals(tail,function(t)
    {
     return ReaderMResult.rtn(new T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),ReaderMResult.rtn(T.Empty)));
 };
 ReaderMResult.absorbO=function(f,vORm)
 {
  return ReaderMResult.absorbR(ReaderMResult.map(function(v)
  {
   return Result.ofOption(f,v);
  },vORm));
 };
 ReaderMResult.getFun=function(f)
 {
  return f.$0;
 };
 ReaderMResult.delayRun=function(f)
 {
  return ReaderMResult.wrap(function(m)
  {
   return(ReaderMResult.getFun(f()))(m);
  });
 };
 ReaderMResult.op_GreaterGreaterEquals=function(v,f)
 {
  return ReaderMResult.bind(f,v);
 };
 ReaderMResult.absorbR=function(vvRm)
 {
  return ReaderMResult.bind(ReaderMResult.rtnR,vvRm);
 };
 ReaderMResult.rtnR=function(r)
 {
  return ReaderMResult.wrap(function()
  {
   return r;
  });
 };
 Builder$3=ReaderMAsyncResult.Builder=Runtime.Class({},Obj,Builder$3);
 Builder$3.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder$3);
 ReaderMAsyncResult.reader=function()
 {
  SC$1.$cctor();
  return SC$1.reader$4;
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
 String.splitByChar$1=function(c,s)
 {
  return Strings.SplitChars(s,[c],0);
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
 Strings.concat=function(separator,strings)
 {
  return Arrays.ofSeq(strings).join(separator);
 };
 Strings.PadLeft=function(s,n)
 {
  return Strings.PadLeftWith(s,n," ");
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
 Strings.PadLeftWith=function(s,n,c)
 {
  return n>s.length?Global.Array(n-s.length+1).join(c)+s:s;
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
 Strings.replicate=function(count,s)
 {
  return Arrays.create(count,s).join("");
 };
 Strings.EndsWith=function(x,s)
 {
  return x.substring(x.length-s.length)==s;
 };
 Strings.SplitWith=function(str,pat)
 {
  return str.split(pat);
 };
 Strings.Substring=function(s,ix,ct)
 {
  return s.substr(ix,ct);
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
 Strings.ReplaceOnce=function(string,search,replace)
 {
  return string.replace(search,replace);
 };
 Slice.array=function(source,start,finish)
 {
  return start==null?finish!=null&&finish.$==1?source.slice(0,finish.$0+1):[]:finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);
 };
 Slice.string=function(source,start,finish)
 {
  return start==null?finish!=null&&finish.$==1?source.slice(0,finish.$0+1):"":finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);
 };
 ParseO.tryParseWith$1=function(tryParseFunc)
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
 ParseO.parseDateO$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO;
 };
 ParseO.parseIntO$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseIntO;
 };
 ParseO.parseSingleO$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseSingleO;
 };
 ParseO.parseDoubleO$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseDoubleO;
 };
 ParseO.parseGuidO$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseGuidO;
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
 SnippetModule.predsLRm=function(sid)
 {
  var b;
  b=Operators$1.reader();
  return b.Run(b.Delay(function()
  {
   var ins,outs;
   ins=List.ofArray([sid]);
   outs=T.Empty;
   return b.Combine(b.While(function()
   {
    return!(ins.$==0);
   },b.Delay(function()
   {
    var rest,hd;
    return ins.$==1?(rest=ins.$1,(hd=ins.$0,List.contains(hd,outs)?(ins=rest,b.Zero()):b.Bind(SnippetModule.snippetORm(hd),function(a)
    {
     var o,snp;
     ins=List.append(rest,(o=a==null?null:{
      $:1,
      $0:(snp=a.$0,List.append(List.ofSeq(snp.snpPredIds),Option.toList(snp.snpParentIdO)))
     },o==null?T.Empty:o.$0));
     outs=new T({
      $:1,
      $0:hd,
      $1:outs
     });
     return b.Zero();
    }))):b.Zero();
   })),b.Delay(function()
   {
    return b.Return(outs);
   }));
  }));
 };
 SnippetModule.reducedOthersORm=function(before,snpId,snpIds)
 {
  var b;
  b=Operators$1.reader();
  return b.Run(b.Delay(function()
  {
   function p(snp)
   {
    return!Unchecked.Equals(snp.snpId,snpId)&&snpIds.Contains(snp.snpId);
   }
   return b.Bind(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(SnippetModule.orderedRm(),(before?function(p$1)
   {
    return function(s)
    {
     return Seq.takeWhile(p$1,s);
    };
   }:function(p$1)
   {
    return function(s)
    {
     return Seq.skipWhile(p$1,s);
    };
   })(function(snp)
   {
    return!Unchecked.Equals(snp.snpId,snpId);
   })),function(s)
   {
    return Seq.filter(p,s);
   }),function(a)
   {
    return Seq.isEmpty(a)?b.Return(null):b.Bind(SnippetModule.reducedCodeRm(a),function(a$1)
    {
     return b.Return({
      $:1,
      $0:a$1
     });
    });
   });
  }));
 };
 SnippetModule.snippetORm=function(sid)
 {
  return ReaderMResult.ofFun(function(a)
  {
   return a.fetcher(sid);
  });
 };
 SnippetModule.uniquePredsRm=function(snp)
 {
  return(SnippetModule.predsLRmMemo())(snp.snpId);
 };
 SnippetModule.defaultSnippet=function()
 {
  SC$1.$cctor();
  return SC$1.defaultSnippet;
 };
 SnippetModule.fastCodeRm=function(curIdO,lastIdO)
 {
  var b;
  b=Operators$1.reader();
  return b.Run(b.Delay(function()
  {
   return b.Bind(SnippetModule.fastReducedRm(curIdO,lastIdO),function(a)
   {
    return b.Return(SnippetModule.finishCode(a[0],a[1],a[2],a[3],a[4],a[5],a[6]));
   });
  }));
 };
 SnippetModule.New=function(name,content,parentO)
 {
  return Snippet.New(new SnippetId({
   $:0,
   $0:Guid.NewGuid()
  }),name,content,parentO,new FSharpSet.New$1(null),[],(SnippetModule.getNextGeneration())());
 };
 SnippetModule.orderedRm=function()
 {
  return ReaderMResult.ofFun(function(a)
  {
   return a.ordered;
  });
 };
 SnippetModule.reducedCodeRm=function(snippets)
 {
  var b;
  b=Operators$1.reader();
  return b.Run(b.Delay(function()
  {
   return b.Bind(ReaderMResult.traverseSeq(SnippetModule.separateCodeRm,snippets),function(a)
   {
    var t;
    return b.Return((t=Seq.reduce(function($1,$2)
    {
     return(function(t$1)
     {
      var l,c,a$1,d,p,n,c$1;
      l=t$1[0];
      c=t$1[1];
      a$1=t$1[2];
      d=t$1[3];
      p=t$1[4];
      n=t$1[5];
      c$1=t$1[6];
      return function(t$2)
      {
       return SnippetModule.addSeps(l,c,a$1,d,p,n,c$1,t$2[0],t$2[1],t$2[2],t$2[3],t$2[4],t$2[5],t$2[6]);
      };
     }($1))($2);
    },Seq.isEmpty(a)?[[[],[],[],[],[],[],null]]:a),[t[0],[Strings.concat("\n",t[1])],t[2],t[3],t[4],t[5],t[6]]));
   });
  }));
 };
 SnippetModule.predsLRmMemo=function()
 {
  SC$1.$cctor();
  return SC$1.predsLRmMemo;
 };
 SnippetModule.fastReducedRm=function(curIdO,lastIdO)
 {
  var b;
  b=Operators$1.reader();
  return b.Run(b.Delay(function()
  {
   return b.Bind(ReaderMResult.insertO(curIdO==null?null:{
    $:1,
    $0:SnippetModule.snippetORm(curIdO.$0)
   }),function(a)
   {
    return b.Bind(ReaderMResult.insertO(lastIdO==null?null:{
     $:1,
     $0:SnippetModule.snippetORm(lastIdO.$0)
    }),function(a$1)
    {
     var $1,$2,$3,curSnippet;
     $1=a==null?null:a.$0;
     $2=a$1==null?null:a$1.$0;
     return($2!=null&&$2.$==1?$1!=null&&$1.$==1?($3=[$1.$0,$2.$0],false):true:true)?b.ReturnFrom$1(SnippetModule.reducedCodeRm([])):(curSnippet=$3[0],b.Bind(SnippetModule.uniquePredsRm($3[1]),function(a$2)
     {
      var preds;
      preds=new FSharpSet.New(a$2);
      return b.Bind((SnippetModule.reducedOthersORmMemo())([true,curSnippet.snpId,preds]),function(a$3)
      {
       return b.Bind((SnippetModule.reducedOthersORmMemo())([false,curSnippet.snpId,preds]),function(a$4)
       {
        return b.Bind(SnippetModule.separateCodeRm(curSnippet),function(a$5)
        {
         var part1,o,o$1,t;
         part1=(o=a$3==null?null:{
          $:1,
          $0:(function(t$1)
          {
           var l,c,a$6,d,p,n,c$1;
           l=t$1[0];
           c=t$1[1];
           a$6=t$1[2];
           d=t$1[3];
           p=t$1[4];
           n=t$1[5];
           c$1=t$1[6];
           return function(t$2)
           {
            return SnippetModule.addSeps(l,c,a$6,d,p,n,c$1,t$2[0],t$2[1],t$2[2],t$2[3],t$2[4],t$2[5],t$2[6]);
           };
          }(a$3.$0))(a$5)
         },o==null?a$5:o.$0);
         return b.Return((o$1=a$4==null?null:{
          $:1,
          $0:(t=a$4.$0,SnippetModule.addSeps(part1[0],part1[1],part1[2],part1[3],part1[4],part1[5],part1[6],t[0],t[1],t[2],t[3],t[4],t[5],t[6]))
         },o$1==null?part1:o$1.$0));
        });
       });
      });
     }));
    });
   });
  }));
 };
 SnippetModule.finishCode=function(lines,code,assembs,defines,prepIs,nowarns,cdO)
 {
  var config,part1;
  config=Strings.concat(" ",Seq.map(function(y)
  {
   return"-d:"+y;
  },Seq.sort(defines)));
  part1=List.ofSeq(Seq.delay(function()
  {
   return Seq.append(config!==""?["////"+config]:[],Seq.delay(function()
   {
    return Seq.append(cdO!=null?[(function($1)
    {
     return function($2)
     {
      return $1("////#cd @\""+Utils.toSafe($2)+"\"");
     };
    }(Global.id))(cdO.$0)]:[],Seq.delay(function()
    {
     return Seq.append(Seq.map(function($1)
     {
      return function($2)
      {
       return $1("#I @\""+Utils.toSafe($2)+"\"");
      };
     }(Global.id),prepIs),Seq.delay(function()
     {
      return Seq.append(Seq.map(function($1)
      {
       return function($2)
       {
        return $1("#r @\""+Utils.toSafe($2)+"\"");
       };
      }(Global.id),assembs),Seq.delay(function()
      {
       return Seq.map(function($1)
       {
        return function($2)
        {
         return $1("#nowarn \""+Utils.toSafe($2)+"\"");
        };
       }(Global.id),nowarns);
      }));
     }));
    }));
   }));
  }));
  return[Strings.concat("\n",Seq.append(part1,code)),Arrays.ofSeq((Seq.mapFold(function(firstLine,t)
  {
   var len;
   len=t[2];
   return[[[t[0],t[1]],[t[3],firstLine,firstLine+len]],firstLine+len];
  },part1.get_Length(),lines))[0])];
 };
 SnippetModule.snippetRm=function(sid)
 {
  return ReaderMResult.absorbO(function()
  {
   return new ResultMessage({
    $:0,
    $0:(function($1)
    {
     return function($2)
     {
      return $1("Snippet not found "+testing_GeneratedPrintf.p($2));
     };
    }(Global.id))(sid)
   });
  },SnippetModule.snippetORm(sid));
 };
 SnippetModule.getNextGeneration=function()
 {
  SC$1.$cctor();
  return SC$1.getNextGeneration;
 };
 SnippetModule.snippetFromRefORm=function(a)
 {
  return a.$==1?SnippetModule.snippetFromPathORm(a.$0):SnippetModule.snippetORm(a.$0);
 };
 SnippetModule.separateCodeRm=function(snp)
 {
  var b;
  b=Operators$1.reader();
  return b.Run(b.Delay(function()
  {
   return b.Bind(SnippetModule.indentRm(snp),function(a)
   {
    var indentF;
    function m(l,pr)
    {
     return[Strings.replicate(a," ")+l,pr];
    }
    indentF=(a===0?[Global.id,""]:[function(a$1)
    {
     return Arrays.map(function($1)
     {
      return m($1[0],$1[1]);
     },a$1);
    },(function($1)
    {
     return function($2)
     {
      return $1("("+Global.String($2)+")");
     };
    }(Global.id))(a)])[0];
    return b.Bind(SnippetModule.prepareCodeRm(snp),function(a$1)
    {
     var p,code;
     p=FsCodeModule.separateDirectives(indentF(FsCodeModule.separatePrepros(Strings.SplitChars(a$1,["\n"],0))));
     code=p[0];
     return b.Return([[[snp.snpId,SnippetModule.snippetName(snp.snpName,snp.snpContent),Arrays.length(code),a]],code,p[1],p[2],p[3],p[4],p[5]]);
    });
   });
  }));
 };
 SnippetModule.addSeps=function(lines1,code1,assembs1,defines1,prepIs1,nowarns1,cdO1,lines2,code2,assembs2,defines2,prepIs2,nowarns2,cdO2)
 {
  return[lines1.concat(lines2),code1.concat(code2),Arrays.ofSeq(Seq.distinct(Seq.append(assembs1,assembs2))),Arrays.ofSeq(Seq.distinct(Seq.append(defines1,defines2))),Arrays.ofSeq(Seq.distinct(Seq.append(prepIs1,prepIs2))),Arrays.ofSeq(Seq.distinct(Seq.append(nowarns1,nowarns2))),cdO1==null?cdO2:cdO1];
 };
 SnippetModule.reducedOthersORmMemo=function()
 {
  SC$1.$cctor();
  return SC$1.reducedOthersORmMemo;
 };
 SnippetModule.snippetFromPathORm=function(pth)
 {
  var b;
  b=Operators$1.reader();
  return b.Run(b.Delay(function()
  {
   return b.Bind(SnippetModule.orderedRm(),function(a)
   {
    function m(path,prntO)
    {
     return function(snp)
     {
      return path.length===0?[null,[[],prntO]]:SnippetModule.snippetName(snp.snpName,snp.snpContent)!==Arrays.get(path,0)||!Unchecked.Equals(snp.snpParentIdO,prntO)?[null,[path,prntO]]:path.length>1?[null,[Slice.array(path,{
       $:1,
       $0:1
      },null),{
       $:1,
       $0:snp.snpId
      }]]:[{
       $:1,
       $0:snp
      },[[],prntO]];
     };
    }
    return b.Return(Seq.tryHead(Seq.choose(Global.id,(Seq.mapFold(function($1,$2)
    {
     return(function($3)
     {
      return m($3[0],$3[1]);
     }($1))($2);
    },[pth,null],a))[0])));
   });
  }));
 };
 SnippetModule.indentRm=function(snp)
 {
  function indentMeChildNextRm(snp$1)
  {
   var b;
   b=Operators$1.reader();
   return b.Run(b.Delay(function()
   {
    var p,a,nextO,currO;
    p=(a=SnippetModule.propertyPairO("IndentChildren",snp$1),a!=null&&a.$==1?[(ParseO.parseIntO$1())(a.$0[0]),(ParseO.parseIntO$1())(a.$0[1])]:[null,null]);
    nextO=p[1];
    currO=p[0];
    return b.Bind(SnippetModule.parentORm(snp$1),function(a$1)
    {
     return a$1==null?b.Return([0,[currO==null?4:currO.$0,nextO==null?4:nextO.$0]]):b.Bind(indentMeChildNextRm(a$1.$0),function(a$2)
     {
      var next,me;
      next=a$2[1][1];
      me=a$2[1][0];
      return b.Return([me,[me+(currO==null?next:currO.$0),nextO==null?next:nextO.$0]]);
     });
    });
   }));
  }
  return ReaderMResult.map(function(t)
  {
   return t[0];
  },indentMeChildNextRm(snp));
 };
 SnippetModule.prepareCodeRm=function(snp)
 {
  return ReaderMResult.ofFun(function(a)
  {
   return a.prepCode(snp);
  });
 };
 SnippetModule.snippetName=function(name,content)
 {
  var o;
  return name!==""?name:(o=Seq.tryHead(Seq.filter(function(l)
  {
   return!(Strings.StartsWith(l,"#")||Strings.StartsWith(l,"[<")||Strings.StartsWith(l,"//"));
  },Seq.map(Strings.Trim,Strings.SplitChars(content,["\n"],1)))),o==null?"<empty>":o.$0);
 };
 SnippetModule.propertyPairO=function(n,snp)
 {
  var o,vs,x,v;
  o=SnippetModule.propertyO(n,snp);
  return o==null?null:{
   $:1,
   $0:(vs=Strings.SplitStrings(o.$0,["|-|"],1),[Arrays.get(vs,0),(x=Arrays.tryItem(1,vs),(v=Arrays.get(vs,0),x==null?v:x.$0))])
  };
 };
 SnippetModule.parentORm=function(snp)
 {
  return ReaderMResult.ofFun(function(a)
  {
   var o;
   o=snp.snpParentIdO;
   return o==null?null:a.fetcher(o.$0);
  });
 };
 SnippetModule.propertyO=function(n,snp)
 {
  function c(name,value)
  {
   return name===n?{
    $:1,
    $0:value
   }:null;
  }
  return Arrays.tryPick(function($1)
  {
   return c($1[0],$1[1]);
  },snp.snpProperties);
 };
 Snippet.New=function(snpId,snpName,snpContent,snpParentIdO,snpPredIds,snpProperties,snpGeneration)
 {
  return{
   snpId:snpId,
   snpName:snpName,
   snpContent:snpContent,
   snpParentIdO:snpParentIdO,
   snpPredIds:snpPredIds,
   snpProperties:snpProperties,
   snpGeneration:snpGeneration
  };
 };
 SnippetId=Library.SnippetId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,SnippetId);
 SnippetId.get_Empty=function()
 {
  return new SnippetId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  });
 };
 Arrays.map=function(f,arr)
 {
  var r,i,$1;
  r=new Global.Array(arr.length);
  for(i=0,$1=arr.length-1;i<=$1;i++)r[i]=f(arr[i]);
  return r;
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
 Arrays.find=function(f,arr)
 {
  var m;
  m=Arrays.tryFind(f,arr);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
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
 Arrays.nonEmpty=function(arr)
 {
  if(arr.length===0)
   Operators.FailWith("The input array was empty.");
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
 Arrays.tryItem=function(i,arr)
 {
  return arr.length<=i||i<0?null:{
   $:1,
   $0:arr[i]
  };
 };
 Arrays.foldBack=function(f,arr,zero)
 {
  var acc,$1,len,i,$2;
  acc=zero;
  len=arr.length;
  for(i=1,$2=len;i<=$2;i++)acc=f(arr[len-i],acc);
  return acc;
 };
 Arrays.iter=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)f(arr[i]);
 };
 Arrays.findIndex=function(f,arr)
 {
  var m;
  m=Arrays.tryFindIndex(f,arr);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
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
 Arrays.filter=function(f,arr)
 {
  var r,i,$1;
  r=[];
  for(i=0,$1=arr.length-1;i<=$1;i++)if(f(arr[i]))
   r.push(arr[i]);
  return r;
 };
 Arrays.create=function(size,value)
 {
  var r,i,$1;
  r=new Global.Array(size);
  for(i=0,$1=size-1;i<=$1;i++)r[i]=value;
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
 Arrays.map2=function(f,arr1,arr2)
 {
  var r,i,$1;
  Arrays.checkLength(arr1,arr2);
  r=new Global.Array(arr2.length);
  for(i=0,$1=arr2.length-1;i<=$1;i++)r[i]=f(arr1[i],arr2[i]);
  return r;
 };
 Arrays.concat=function(xs)
 {
  return Global.Array.prototype.concat.apply([],Arrays.ofSeq(xs));
 };
 Arrays.checkLength=function(arr1,arr2)
 {
  if(arr1.length!==arr2.length)
   Operators.FailWith("The arrays have different lengths.");
 };
 Arrays.pick=function(f,arr)
 {
  var m;
  m=Arrays.tryPick(f,arr);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
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
 SnippetCollection.New=function(generation,ordered,fetcher,predecesorsCache,reducedCache,prepCode)
 {
  return{
   generation:generation,
   ordered:ordered,
   fetcher:fetcher,
   predecesorsCache:predecesorsCache,
   reducedCache:reducedCache,
   prepCode:prepCode
  };
 };
 Serializer.ifUndef=function(def,v)
 {
  return!v?def:v;
 };
 Serializer.serField=function(name,get,set,s,s$1)
 {
  return[name,function(x)
  {
   return s(get(x));
  },function(rc)
  {
   return function(o)
   {
    return set(s$1(o),rc);
   };
  }];
 };
 Serializer.serString=function()
 {
  SC$1.$cctor();
  return SC$1.serString;
 };
 Serializer.serOpt=function(s,s$1)
 {
  var ser,f,m,g,f$1,f$2;
  function g$1(o)
  {
   return o==null?"null":o.$0;
  }
  function d(a)
  {
   return null;
  }
  function g$2(a)
  {
   return{
    $:1,
    $0:a
   };
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
   return g$1(f(x));
  }),(g=(f$1=(f$2=ser[1],function(x)
  {
   return g$2(f$2(x));
  }),function(v)
  {
   return Serializer.ifUndefF(d,f$1,v);
  }),function(x)
  {
   return g(Global.id(x));
  })];
 };
 Serializer.serSet=function(s,s$1)
 {
  var ser,f,m,f$1,g,f$2,m$1;
  function d(a)
  {
   return[];
  }
  function g$1(a)
  {
   return new FSharpSet.New(a);
  }
  ser=[s,s$1];
  return[(f=(m=ser[0],function(s$2)
  {
   return new FSharpSet.New$1(BalancedTree.OfSeq(Seq.map(m,s$2)));
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),(f$1=(g=(f$2=(m$1=ser[1],function(s$2)
  {
   return Seq.map(m$1,s$2);
  }),function(v)
  {
   return Serializer.ifUndefF(d,f$2,v);
  }),function(x)
  {
   return g(Global.id(x));
  }),function(x)
  {
   return g$1(f$1(x));
  })];
 };
 Serializer.serDup=function(s,s$1,s$2,s$3)
 {
  var serFst,serSnd,g;
  function d(a)
  {
   return[serFst[1](null),serSnd[1](null)];
  }
  function f(os)
  {
   return[serFst[1](Arrays.get(os,0)),serSnd[1](Arrays.get(os,1))];
  }
  serFst=[s,s$1];
  serSnd=[s$2,s$3];
  return[function(t)
  {
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("["+Utils.toSafe($2)+", "+Utils.toSafe($3)+"]");
   }))(Global.id))(serFst[0](t[0])))(serSnd[0](t[1]));
  },(g=function(v)
  {
   return Serializer.ifUndefF(d,f,v);
  },function(x)
  {
   return g(Global.id(x));
  })];
 };
 Serializer.serArr=function(s,s$1)
 {
  var ser,f,m,f$1,g,f$2,m$1;
  function d(a)
  {
   return[];
  }
  ser=[s,s$1];
  return[(f=(m=ser[0],function(a)
  {
   return Arrays.map(m,a);
  }),function(x)
  {
   return Serializer.sprintA(f(x));
  }),(f$1=(g=(f$2=(m$1=ser[1],function(s$2)
  {
   return Seq.map(m$1,s$2);
  }),function(v)
  {
   return Serializer.ifUndefF(d,f$2,v);
  }),function(x)
  {
   return g(Global.id(x));
  }),function(x)
  {
   return Arrays.ofSeq(f$1(x));
  })];
 };
 Serializer.serInt=function()
 {
  SC$1.$cctor();
  return SC$1.serInt;
 };
 Serializer.deserGuid=function()
 {
  SC$1.$cctor();
  return SC$1.deserGuid;
 };
 Serializer.ifUndefF=function(def,f,v)
 {
  return!v?def(v):f(v);
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
 Json.Activate=function(json)
 {
  var $1,types,i,$2,$3,$4,m;
  function decode(x)
  {
   var o,ti,t,r,k;
   if(Unchecked.Equals(x,null))
    return x;
   else
    if(typeof x=="object")
    {
     if(x instanceof Global.Array)
      return Json.shallowMap(decode,x);
     else
      {
       o=Json.shallowMap(decode,x.$V);
       ti=x.$T;
       if(ti===void 0)
        return o;
       else
        {
         t=Arrays.get(types,ti);
         if(t===1)
          return List.ofArray(o);
         else
          if(t===2)
           return self.WebSharper.Decimal.CreateDecimalBits(o);
          else
           {
            r=new(Arrays.get(types,ti))();
            for(var k$1 in o)if(function(k$2)
            {
             r[k$2]=o[k$2];
             return false;
            }(k$1))
             break;
            return r;
           }
        }
      }
    }
    else
     return x;
  }
  types=json?json.$TYPES:void 0;
  if(types===void 0)
   $1=json;
  else
   {
    for(i=0,$2=Arrays.length(types)-1;i<=$2;i++){
     m=Arrays.get(types,i);
     switch(!Unchecked.Equals(m,null)&&m.length===3?Arrays.get(m,0)==="WebSharper"?Arrays.get(m,1)==="List"?Arrays.get(m,2)==="T"?0:($4=m,2):($4=m,2):($4=m,2):!Unchecked.Equals(m,null)&&m.length===2?Arrays.get(m,0)==="WebSharper"?Arrays.get(m,1)==="Decimal"?1:($4=m,2):($4=m,2):($4=m,2))
     {
      case 0:
       $3=1;
       break;
      case 1:
       $3=2;
       break;
      case 2:
       $3=Json.lookup($4);
       break;
     }
     Arrays.set(types,i,$3);
    }
    $1=json.$DATA;
   }
  return decode($1);
 };
 Json.shallowMap=function(f,x)
 {
  var r,k;
  if(x instanceof Global.Array)
   return Arrays.map(f,x);
  else
   if(typeof x=="object")
    {
     r={};
     for(var k$1 in x)if(function(y)
     {
      r[y]=f(x[y]);
      return false;
     }(k$1))
      break;
     return r;
    }
   else
    return x;
 };
 Json.lookup=function(x)
 {
  var r,i,k,n,rn;
  k=Arrays.length(x);
  r=self;
  i=0;
  while(i<k)
   {
    n=Arrays.get(x,i);
    rn=r[n];
    !Unchecked.Equals(typeof rn,void 0)?(r=rn,i=i+1):Operators.FailWith("Invalid server reply. Failed to find type: "+n);
   }
  return r;
 };
 Provider.Id=Runtime.Curried3(function($1,$2,x)
 {
  return x;
 });
 Provider.EncodeUnion=function(a,discr,cases)
 {
  return function()
  {
   return function(x)
   {
    var o,p;
    function a$1(from,to,enc,kind)
    {
     var record,k,m;
     if(from===null)
      {
       record=(enc(null))(x.$0);
       for(var k$1 in record)if(function(f)
       {
        o[f]=record[f];
        return false;
       }(k$1))
        break;
      }
     else
      if(kind===0)
       o[to]=(enc(null))(x[from]);
      else
       if(kind===1)
        {
         m=x[from];
         m==null?void 0:o[to]=(enc(null))(m.$0);
        }
       else
        Operators.FailWith("Invalid field option kind");
    }
    return typeof x==="object"&&x!=null?(o={},(p=Arrays.get(cases,x.$),(Unchecked.Equals(typeof discr,"string")?o[discr]=p[0]:void 0,Arrays.iter(function($1)
    {
     return a$1($1[0],$1[1],$1[2],$1[3]);
    },p[1]),o))):x;
   };
  };
 };
 Provider.DecodeUnion=function(t,discr,cases)
 {
  return function()
  {
   return function(x)
   {
    var tag,tagName,o,r,k;
    function p(name,a$1)
    {
     return name===tagName;
    }
    function a(from,to,dec,kind)
    {
     var r$1;
     if(from===null)
      {
       r$1=(dec(null))(x);
       to?delete r$1[discr]:void 0;
       o.$0=r$1;
      }
     else
      if(kind===0)
       o[from]=(dec(null))(x[to]);
      else
       if(kind===1)
        o[from]=x.hasOwnProperty(to)?{
         $:1,
         $0:(dec(null))(x[to])
        }:null;
       else
        Operators.FailWith("Invalid field option kind");
    }
    if(typeof x==="object"&&x!=null)
     {
      o=t===void 0?{}:new t();
      if(Unchecked.Equals(typeof discr,"string"))
       tag=(tagName=x[discr],Arrays.findIndex(function($1)
       {
        return p($1[0],$1[1]);
       },cases));
      else
       {
        r=[void 0];
        for(var k$1 in discr)if(function(k$2)
        {
         return x.hasOwnProperty(k$2)&&(r[0]=discr[k$2],true);
        }(k$1))
         break;
        tag=r[0];
       }
      o.$=tag;
      Arrays.iter(function($1)
      {
       return a($1[0],$1[1],$1[2],$1[3]);
      },(Arrays.get(cases,tag))[1]);
      return o;
     }
    else
     return x;
   };
  };
 };
 Provider.DecodeArray=function(decEl)
 {
  return Provider.EncodeArray(decEl);
 };
 Provider.EncodeArray=Runtime.Curried3(function(encEl,$1,a)
 {
  return Arrays.map(encEl(),a);
 });
 Provider.EncodeRecord=function(a,fields)
 {
  return function()
  {
   return function(x)
   {
    var o;
    function a$1(name,enc,kind)
    {
     var m;
     if(kind===0)
      o[name]=(enc(null))(x[name]);
     else
      if(kind===1)
       {
        m=x[name];
        m==null?void 0:o[name]=(enc(null))(m.$0);
       }
      else
       if(kind===2)
       {
        if(x.hasOwnProperty(name))
         o[name]=(enc(null))(x[name]);
       }
       else
        if(kind===3)
        {
         if(x[name]===void 0)
          o[name]=(enc(null))(x[name]);
        }
        else
         Operators.FailWith("Invalid field option kind");
    }
    o={};
    Arrays.iter(function($1)
    {
     return a$1($1[0],$1[1],$1[2]);
    },fields);
    return o;
   };
  };
 };
 Provider.DecodeRecord=function(t,fields)
 {
  return function()
  {
   return function(x)
   {
    var o;
    function a(name,dec,kind)
    {
     if(kind===0)
     {
      if(x.hasOwnProperty(name))
       o[name]=(dec(null))(x[name]);
      else
       Operators.FailWith("Missing mandatory field: "+name);
     }
     else
      if(kind===1)
       o[name]=x.hasOwnProperty(name)?{
        $:1,
        $0:(dec(null))(x[name])
       }:null;
      else
       if(kind===2)
       {
        if(x.hasOwnProperty(name))
         o[name]=(dec(null))(x[name]);
       }
       else
        if(kind===3)
        {
         if(x[name]===void 0)
          o[name]=(dec(null))(x[name]);
        }
        else
         Operators.FailWith("Invalid field option kind");
    }
    o=t===void 0?{}:new t();
    Arrays.iter(function($1)
    {
     return a($1[0],$1[1],$1[2]);
    },fields);
    return o;
   };
  };
 };
 Provider.EncodeSet=Runtime.Curried3(function(encEl,$1,s)
 {
  var a,e;
  a=[];
  e=encEl();
  Seq.iter(function(x)
  {
   a.push(e(x));
  },s);
  return a;
 });
 Provider.EncodeTuple=Runtime.Curried3(function(encs,$1,args)
 {
  return Arrays.map2(function($2,$3)
  {
   return($2(null))($3);
  },encs,args);
 });
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
 LoadFiles.LoadFilesAsync=function(files)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.For(files,function(a)
   {
    return Concurrency.Bind(LoadFiles.LoadFile(a),function()
    {
     return Concurrency.Return(null);
    });
   });
  });
 };
 LoadFiles.LoadFile=function(file)
 {
  var o,o$1,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,ref,b;
  function EndsWith(s,fn)
  {
   return Strings.EndsWith(fn,s)?{
    $:1,
    $0:null
   }:null;
  }
  function a($11,$12)
  {
   try
   {
    ref.onload=$11;
    self.document.head.appendChild(ref);
   }
   catch(e)
   {
    $12(e);
   }
  }
  o=(o$1=(($2=EndsWith(".js",file),$2!=null&&$2.$==1)?!self.document.querySelector("script[src='"+file+"']")||(($3=EndsWith(".fsx",file),$3!=null&&$3.$==1)?!self.document.querySelector("script[src='"+file+"']")||($4=EndsWith(".fs",file),$4!=null&&$4.$==1)&&!self.document.querySelector("script[src='"+file+"']"):($5=EndsWith(".fs",file),$5!=null&&$5.$==1)&&!self.document.querySelector("script[src='"+file+"']")):($6=EndsWith(".fsx",file),$6!=null&&$6.$==1)?!self.document.querySelector("script[src='"+file+"']")||($7=EndsWith(".fs",file),$7!=null&&$7.$==1)&&!self.document.querySelector("script[src='"+file+"']"):($8=EndsWith(".fs",file),$8!=null&&$8.$==1)&&!self.document.querySelector("script[src='"+file+"']"))?{
   $:1,
   $0:LoadFiles.createScript(file)
  }:($9=EndsWith(".css",file),$9!=null&&$9.$==1)?{
   $:1,
   $0:LoadFiles.createCss(file)
  }:($10=EndsWith(".html",file),$10!=null&&$10.$==1)?{
   $:1,
   $0:LoadFiles.createHtml(file)
  }:null,o$1==null?null:{
   $:1,
   $0:(ref=o$1.$0,Concurrency.FromContinuations(function($11,$12,$13)
   {
    return a.apply(null,[$11,$12,$13]);
   }))
  });
  return o==null?(b=null,Concurrency.Delay(function()
  {
   return Concurrency.Return(null);
  })):o.$0;
 };
 LoadFiles.createScript=function(fn)
 {
  var fileRef;
  fileRef=self.document.createElement("script");
  fileRef.setAttribute("type","text/javascript");
  fileRef.setAttribute("src",fn);
  return fileRef;
 };
 LoadFiles.createCss=function(fn)
 {
  var fileRef;
  fileRef=self.document.createElement("link");
  fileRef.setAttribute("rel","stylesheet");
  fileRef.setAttribute("type","text/css");
  fileRef.setAttribute("href",fn);
  return fileRef;
 };
 LoadFiles.createHtml=function(fn)
 {
  var fileRef;
  fileRef=self.document.createElement("link");
  fileRef.setAttribute("rel","import");
  fileRef.setAttribute("type","text/html");
  fileRef.setAttribute("href",fn);
  return fileRef;
 };
 Monaco.includes=function()
 {
  SC$1.$cctor();
  return SC$1.includes;
 };
 Editor=Monaco.Editor=Runtime.Class({},Obj,Editor);
 Address=WebSockets.Address=Runtime.Class({
  get_txt:function()
  {
   return this.$0;
  }
 },null,Address);
 WebSockets.MessageBrokerId=function()
 {
  SC$1.$cctor();
  return SC$1.MessageBrokerId;
 };
 WebSockets.MessageBrokerAddress=function()
 {
  SC$1.$cctor();
  return SC$1.MessageBrokerAddress;
 };
 WebSockets.msgType=function(typ,msg)
 {
  return MessageGeneric.New(msg.from,msg.destination,typ,msg.subtype,msg.id,msg.payload,msg.replier);
 };
 WebSockets.extractEndPoint=function()
 {
  return Arrays.get(Strings.SplitChars(location.href.substring(location.href.indexOf("//")+2),["/"],0),0);
 };
 WebSockets.from=function(frm,msg)
 {
  return MessageGeneric.New(frm,msg.destination,msg.msgType,msg.subtype,msg.id,msg.payload,msg.replier);
 };
 WebSockets.replier=function(rpl,msg)
 {
  return MessageGeneric.New(msg.from,msg.destination,msg.msgType,msg.subtype,msg.id,msg.payload,rpl);
 };
 WebSockets.makeReply=function(msg)
 {
  return WebSockets.replier(Replier.NoReply,WebSockets.msgType(MessageType.MsgReply,msg));
 };
 WebSockets.mapPayload=function(f,msg)
 {
  return MessageGeneric.New(msg.from,msg.destination,msg.msgType,msg.subtype,msg.id,f(msg.payload),msg.replier);
 };
 WebSockets.destination=function(dst,msg)
 {
  return MessageGeneric.New(msg.from,dst,msg.msgType,msg.subtype,msg.id,msg.payload,msg.replier);
 };
 FStation.set_rootDir=function($1)
 {
  SC$1.$cctor();
  SC$1.rootDir=$1;
 };
 FStation.set_srcDir=function($1)
 {
  SC$1.$cctor();
  SC$1.srcDir=$1;
 };
 FStation.srcDir=function()
 {
  SC$1.$cctor();
  return SC$1.srcDir;
 };
 FStation.id=function()
 {
  SC$1.$cctor();
  return SC$1.id;
 };
 FStation.annotationsV=function()
 {
  SC$1.$cctor();
  return SC$1.annotationsV;
 };
 AjaxRemotingProvider=Remoting.AjaxRemotingProvider=Runtime.Class({
  AsyncBase:function(m,data)
  {
   var $this,b;
   $this=this;
   b=null;
   return Concurrency.Delay(function()
   {
    var headers,payload;
    headers=Remoting.makeHeaders(m);
    payload=Remoting.makePayload(data);
    return Concurrency.Bind(Concurrency.GetCT(),function(a)
    {
     return Concurrency.FromContinuations(function(ok,err,cc)
     {
      var waiting,reg,a$1;
      function callback(u)
      {
       return waiting[0]?(waiting[0]=false,cc(new OperationCanceledException.New(a))):null;
      }
      waiting=[true];
      reg=Concurrency.Register(a,function()
      {
       callback();
      });
      a$1=$this.get_EndPoint();
      return Remoting.AjaxProvider().Async(a$1,headers,payload,function(x)
      {
       if(waiting[0])
        {
         waiting[0]=false;
         reg.Dispose();
         ok(Json.Activate(JSON.parse(x)));
        }
      },function(e)
      {
       if(waiting[0])
        {
         waiting[0]=false;
         reg.Dispose();
         err(e);
        }
      });
     });
    });
   });
  },
  get_EndPoint:function()
  {
   return Remoting.EndPoint();
  },
  Async:function(m,data)
  {
   return this.AsyncBase(m,data);
  }
 },Obj,AjaxRemotingProvider);
 AjaxRemotingProvider.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },AjaxRemotingProvider);
 ListModel=UI.ListModel=Runtime.Class({
  FindByKey:function(key)
  {
   var $this;
   $this=this;
   return Arrays.find(function(it)
   {
    return Unchecked.Equals($this.key(it),key);
   },this["var"].Get());
  },
  Set:function(lst)
  {
   this["var"].Set(this.storage.SSet(lst));
   this.ObsoleteAll();
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
  ObsoleteAll:function()
  {
   Seq.iter(function(ksn)
   {
    Snap.Obsolete(ksn.V);
   },this.it);
   this.it.Clear();
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
  GetEnumerator:function()
  {
   return Enumerator.Get(this["var"].Get());
  },
  GetEnumerator0:function()
  {
   return Enumerator.Get0(this["var"].Get());
  }
 },Obj,ListModel);
 ListModel.New$1=Runtime.Ctor(function(key)
 {
  ListModel.New$2.call(this,key,[]);
 },ListModel);
 ListModel.New$2=Runtime.Ctor(function(key,init)
 {
  var init$1;
  init$1=Arrays.ofSeq(init);
  ListModel.New$3.call(this,key,Var$1.Create$1(init$1),Storage.InMemory(init$1));
 },ListModel);
 ListModel.New$3=Runtime.Ctor(function(key,_var,storage)
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
 Snippets.getParentIdONotMemo=function(snpId)
 {
  var o;
  o=Snippets.snippets().TryFindByKey(snpId);
  return o==null?null:o.$0.snpParentIdO;
 };
 Snippets.parentCache=function()
 {
  SC$1.$cctor();
  return SC$1.parentCache;
 };
 Snippets.currentSnippetIdOV=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetIdOV;
 };
 Snippets.codeSnippetIdOV=function()
 {
  SC$1.$cctor();
  return SC$1.codeSnippetIdOV;
 };
 Snippets.iterReader=function(rm)
 {
  ReaderMResult.iter(function(e)
  {
   Snippets.handleError(e);
  },Global.ignore,Snippets.snippetsColl(),rm);
 };
 Snippets.clearPredsCache=function()
 {
  (Snippets.clearPreds())();
  (Snippets.clearReduc())();
  (Snippets.clearParent())();
 };
 Snippets.hierarchy=function()
 {
  SC$1.$cctor();
  return SC$1.hierarchy;
 };
 Snippets.snippets=function()
 {
  SC$1.$cctor();
  return SC$1.snippets;
 };
 Snippets.isDescendantOf=function(ancId,snpId)
 {
  var o,o$1,prnId;
  return Unchecked.Equals(snpId,ancId)?false:(o=(o$1=(Snippets.getParentIdO())(snpId),o$1==null?null:{
   $:1,
   $0:(prnId=o$1.$0,Unchecked.Equals(prnId,ancId)||Snippets.isDescendantOf(ancId,prnId))
  }),o==null?false:o.$0);
 };
 Snippets.setSnippet=function(snp)
 {
  if(!Unchecked.Equals(snp.snpId.get_Id(),"00000000-0000-0000-0000-000000000000"))
   Snippets.snippets().Append(Snippet.New(snp.snpId,snp.snpName,snp.snpContent,snp.snpParentIdO,snp.snpPredIds,snp.snpProperties,Snippets.generation().Get()+1));
 };
 Snippets.currentSnippetW=function()
 {
  SC$1.$cctor();
  return SC$1.currentSnippetW;
 };
 Snippets.collapsedV=function()
 {
  SC$1.$cctor();
  return SC$1.collapsedV;
 };
 Snippets.runReader=function(handle,rm)
 {
  return Result.defaultWith(handle,Snippets.runReaderResult(rm));
 };
 Snippets.handleError=function(er)
 {
  throw new Error(Global.String(er));
 };
 Snippets.codeSnippetW=function()
 {
  SC$1.$cctor();
  return SC$1.codeSnippetW;
 };
 Snippets.codeAndStartsW=function()
 {
  SC$1.$cctor();
  return SC$1.codeAndStartsW;
 };
 Snippets.generation=function()
 {
  SC$1.$cctor();
  return SC$1.generation;
 };
 Snippets.CurrentSnippetIdW=function()
 {
  SC$1.$cctor();
  return SC$1.CurrentSnippetIdW;
 };
 Snippets.SaveAsClassW=function()
 {
  SC$1.$cctor();
  return SC$1.SaveAsClassW;
 };
 Snippets.snippetsColl=function()
 {
  return SnippetCollection.New(Snippets.generation().Get(),(Snippets.snippets())["var"].Get(),function(a)
  {
   return Snippets.snippets().TryFindByKey(a);
  },Snippets.predsCache,Snippets.reducCache,Snippets.prepCode);
 };
 Snippets.clearPreds=function()
 {
  SC$1.$cctor();
  return SC$1.clearPreds;
 };
 Snippets.clearReduc=function()
 {
  SC$1.$cctor();
  return SC$1.clearReduc;
 };
 Snippets.clearParent=function()
 {
  SC$1.$cctor();
  return SC$1.clearParent;
 };
 Snippets.getParentIdO=function()
 {
  SC$1.$cctor();
  return SC$1.getParentIdO;
 };
 Snippets.runReaderResult=function(rm)
 {
  return ReaderMResult.run(Snippets.snippetsColl(),rm);
 };
 Snippets.predsCache=function()
 {
  SC$1.$cctor();
  return SC$1.predsCache;
 };
 Snippets.reducCache=function()
 {
  SC$1.$cctor();
  return SC$1.reducCache;
 };
 Snippets.prepCode=function(snp)
 {
  return Strings.Replace(Strings.Replace(snp.snpContent,"##"+"FSHARPSTATION_ID"+"##",FStation.id()),"##"+"FSHARPSTATION_ENDPOINT"+"##",self.location.href);
 };
 Operators$1.op_BarGreaterGreater=function(v,f)
 {
  return ReaderMResult.map(f,v);
 };
 Operators$1.op_GreaterGreaterEquals=function(v,f)
 {
  return ReaderMResult.bind(f,v);
 };
 Operators$1.reader=function()
 {
  SC$1.$cctor();
  return SC$1.reader$3;
 };
 Operators$1.rtn=function(v)
 {
  return ReaderMResult.rtn(v);
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
 TreeReader.listNodes=function(level,nodes)
 {
  return Operators$1.op_BarGreaterGreater(ReaderMResult.sequenceSeq(Seq.map(function(node)
  {
   return Operators$1.op_BarGreaterGreater(Operators$1.op_GreaterGreaterEquals(node.isExpandedRm(),function(exp)
   {
    var l;
    return exp?Operators$1.op_GreaterGreaterEquals(Operators$1.op_BarGreaterGreater(node.childrenRm(),Arrays.ofSeq),(l=level+1,function(n)
    {
     return TreeReader.listNodes(l,n);
    })):Operators$1.rtn([]);
   }),function(nodes$1)
   {
    return Seq.append([[node,level]],nodes$1);
   });
  },nodes)),function(s)
  {
   return Seq.collect(Global.id,s);
  });
 };
 DragInfo.DragNone={
  $:0
 };
 Monaco$1.editorConfigO=function()
 {
  SC$1.$cctor();
  return SC$1.editorConfigO;
 };
 Monaco$1.getSnippetModel=function(sid)
 {
  var x,_s,c;
  x=(_s="snpId:"+(c=sid.get_Id(),Global.String(c)),self.monaco.Uri.parse(_s));
  return Monaco$1.getModelUri(Snippets.runReader(function(x$1)
  {
   return Operators.FailWith(Global.String(x$1));
  },SnippetModule.snippetRm(sid)).snpContent,x);
 };
 Monaco$1.parse=function(code,starts)
 {
  var b;
  AsyncResult.iterA(function(v)
  {
   Library.print(v);
  },function()
  {
   Library.print();
  },(b=Monads.asyncResult(),b.Run(b.Delay(function()
  {
   var a,lines;
   a="Parsing...\n"+String.skipFirstLine$1(FStation.annotationsV().Get());
   FStation.annotationsV().Set(a);
   Monaco$1.startsV().Set(starts);
   lines=String.splitByChar$1("\n",code);
   Monaco$1.set_fileName(FsCodeModule.getSourceDir(FStation.srcDir(),lines)+"/"+FStation.id()+".fsx");
   return b.Bind$1(Calls.parseCode(Monaco$1.fileName(),lines,true,0),function(a$1)
   {
    var a$2;
    a$2=Strings.concat("\n",Seq.append(List.ofArray(["Parsed!"]),Seq.map(function(v)
    {
     var p,x,indent,first,c;
     function p$1(a$3,a$4)
     {
      return v.StartLine>a$4[1]&&v.StartLine<=a$4[2];
     }
     p=(x=Seq.tryFind(function($1)
     {
      return p$1($1[0],$1[1]);
     },starts),(Monaco$1.defaultStart())(x));
     indent=p[1][0];
     first=p[1][1];
     return((((((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
     {
      return $1(Utils.toSafe($2)+" ("+Global.String($3)+", "+Global.String($4)+") - ("+Global.String($5)+", "+Global.String($6)+") "+Utils.toSafe($7)+"("+Utils.toSafe($8)+") \""+Utils.toSafe($9)+": "+Utils.toSafe($10)+"\".");
     },10))(Global.id))(v.Severity==="Error"?"Err":"Warn"))(v.StartLine-first))(v.StartColumn-indent))(v.EndLine-first))(v.EndColumn-indent))(p[0][1]))((c=p[0][0].get_Id(),Global.String(c))))(v.Subcategory))(v.Message);
    },a$1[0].Errors)));
    FStation.annotationsV().Set(a$2);
    Seq.iter(function(v)
    {
     Library.print(v);
    },a$1[1]);
    return b.Zero();
   });
  }))));
 };
 Monaco$1.getModelUri=function(txt,uri)
 {
  var model,o,model$1;
  model=(o=(model$1=self.monaco.editor.getModel(uri),!model$1?null:{
   $:1,
   $0:model$1
  }),o==null?self.monaco.editor.createModel("","fsharp",uri):o.$0);
  model.getValue()!==txt?model.setValue(txt):void 0;
  return model;
 };
 Monaco$1.startsV=function()
 {
  SC$1.$cctor();
  return SC$1.startsV;
 };
 Monaco$1.set_fileName=function($1)
 {
  SC$1.$cctor();
  SC$1.fileName=$1;
 };
 Monaco$1.fileName=function()
 {
  SC$1.$cctor();
  return SC$1.fileName;
 };
 Monaco$1.defaultStart=function()
 {
  SC$1.$cctor();
  return SC$1.defaultStart;
 };
 testing_GeneratedPrintf.p=function($1)
 {
  return"SnippetId "+Utils.prettyPrint($1.$0);
 };
 testing_JsonEncoder.j$4=function()
 {
  return testing_JsonEncoder._v$4?testing_JsonEncoder._v$4:testing_JsonEncoder._v$4=(Provider.EncodeUnion(void 0,"$",[[0,[["$0","ResultValue",testing_JsonEncoder.j$6,0]]],[1,[["$0","ErrorValue",testing_JsonEncoder.j$5,0]]]]))();
 };
 testing_JsonDecoder.j$4=function()
 {
  return testing_JsonDecoder._v$4?testing_JsonDecoder._v$4:testing_JsonDecoder._v$4=(Provider.DecodeUnion(void 0,"$",[[0,[]],[1,[["$0","Item",Provider.DecodeArray(testing_JsonDecoder.j$5),0]]],[2,[["$0","Item",testing_JsonDecoder.j$5,0]]],[3,[["$0","Item",testing_JsonDecoder.j$5,0]]],[4,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]],[5,[]]]))();
 };
 testing_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==1?"RefSnippetPath "+Utils.printArray(Utils.prettyPrint,$1.$0):"RefSnippetId "+testing_GeneratedPrintf.p($1.$0);
 };
 testing_GeneratedPrintf.p$4=function($1)
 {
  return $1.$==5?"MsgGetUrl":$1.$==4?"MsgAction "+Utils.printArray(Utils.prettyPrint,$1.$0):$1.$==3?"MsgGetPredecessors "+testing_GeneratedPrintf.p$3($1.$0):$1.$==2?"MsgGetCode "+testing_GeneratedPrintf.p$3($1.$0):$1.$==1?"MsgGetSnippets "+Utils.printArray(function($2)
  {
   return testing_GeneratedPrintf.p$3($2);
  },$1.$0):"MsgGetId";
 };
 testing_JsonEncoder.j$6=function()
 {
  return testing_JsonEncoder._v$6?testing_JsonEncoder._v$6:testing_JsonEncoder._v$6=(Provider.EncodeUnion(void 0,"$",[[0,[["$0","Item",Provider.Id(),0]]],[1,[["$0","Item",Provider.EncodeArray(testing_JsonEncoder.j$7),0]]]]))();
 };
 testing_JsonEncoder.j$5=function()
 {
  return testing_JsonEncoder._v$5?testing_JsonEncoder._v$5:testing_JsonEncoder._v$5=(Provider.EncodeUnion(ResultMessage,"$",[[0,[["$0","Item",Provider.Id(),0]]],[1,[["$0","Item",Provider.Id(),0]]],[2,[["$0","Item",Provider.Id(),0]]],[3,[["$0","Item1",Provider.Id(),0],["$1","Item2",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$5=function()
 {
  return testing_JsonDecoder._v$5?testing_JsonDecoder._v$5:testing_JsonDecoder._v$5=(Provider.DecodeUnion(void 0,"$",[[0,[["$0","Item",testing_JsonDecoder.j$6,0]]],[1,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]]]))();
 };
 testing_JsonEncoder.j=function()
 {
  return testing_JsonEncoder._v?testing_JsonEncoder._v:testing_JsonEncoder._v=(Provider.EncodeRecord(void 0,[["from",testing_JsonEncoder.j$1,0],["destination",testing_JsonEncoder.j$1,0],["msgType",testing_JsonEncoder.j$2,0],["subtype",Provider.Id(),0],["id",Provider.Id(),0],["payload",Provider.Id(),0],["replier",testing_JsonEncoder.j$3,0]]))();
 };
 testing_JsonDecoder.j=function()
 {
  return testing_JsonDecoder._v?testing_JsonDecoder._v:testing_JsonDecoder._v=(Provider.DecodeRecord(void 0,[["from",testing_JsonDecoder.j$1,0],["destination",testing_JsonDecoder.j$1,0],["msgType",testing_JsonDecoder.j$2,0],["subtype",Provider.Id(),0],["id",Provider.Id(),0],["payload",Provider.Id(),0],["replier",testing_JsonDecoder.j$3,0]]))();
 };
 testing_JsonEncoder.j$7=function()
 {
  return testing_JsonEncoder._v$7?testing_JsonEncoder._v$7:testing_JsonEncoder._v$7=(Provider.EncodeRecord(void 0,[["snpId",testing_JsonEncoder.j$8,0],["snpName",Provider.Id(),0],["snpContent",Provider.Id(),0],["snpParentIdO",testing_JsonEncoder.j$8,1],["snpPredIds",Provider.EncodeSet(testing_JsonEncoder.j$8),0],["snpProperties",Provider.EncodeArray(Provider.EncodeTuple([Provider.Id(),Provider.Id()])),0],["snpGeneration",Provider.Id(),0]]))();
 };
 testing_JsonDecoder.j$6=function()
 {
  return testing_JsonDecoder._v$6?testing_JsonDecoder._v$6:testing_JsonDecoder._v$6=(Provider.DecodeUnion(SnippetId,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_GeneratedPrintf.p$9=function($1)
 {
  return $1.$==3?"Close":$1.$==2?"Open":$1.$==1?"Error":"Message "+GeneratedPrintf.p($1.$0);
 };
 testing_JsonEncoder.j$1=function()
 {
  return testing_JsonEncoder._v$1?testing_JsonEncoder._v$1:testing_JsonEncoder._v$1=(Provider.EncodeUnion(Address,"$",[[0,[["$0","address",Provider.Id(),0]]]]))();
 };
 testing_JsonEncoder.j$2=function()
 {
  return testing_JsonEncoder._v$2?testing_JsonEncoder._v$2:testing_JsonEncoder._v$2=(Provider.EncodeUnion(void 0,"type",[["MsgInformation",[]],["MsgRequest",[]],["MsgReply",[]],["MsgFromBroker",[]],["MsgRequestForId",[]],["MsgRequestForEcho",[]]]))();
 };
 testing_JsonEncoder.j$3=function()
 {
  return testing_JsonEncoder._v$3?testing_JsonEncoder._v$3:testing_JsonEncoder._v$3=(Provider.EncodeUnion(void 0,"type",[["NoReply",[]],["Broker",[]],["Receiver",[]]]))();
 };
 testing_JsonDecoder.j$1=function()
 {
  return testing_JsonDecoder._v$1?testing_JsonDecoder._v$1:testing_JsonDecoder._v$1=(Provider.DecodeUnion(Address,"$",[[0,[["$0","address",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$2=function()
 {
  return testing_JsonDecoder._v$2?testing_JsonDecoder._v$2:testing_JsonDecoder._v$2=(Provider.DecodeUnion(void 0,"type",[["MsgInformation",[]],["MsgRequest",[]],["MsgReply",[]],["MsgFromBroker",[]],["MsgRequestForId",[]],["MsgRequestForEcho",[]]]))();
 };
 testing_JsonDecoder.j$3=function()
 {
  return testing_JsonDecoder._v$3?testing_JsonDecoder._v$3:testing_JsonDecoder._v$3=(Provider.DecodeUnion(void 0,"type",[["NoReply",[]],["Broker",[]],["Receiver",[]]]))();
 };
 testing_JsonEncoder.j$8=function()
 {
  return testing_JsonEncoder._v$8?testing_JsonEncoder._v$8:testing_JsonEncoder._v$8=(Provider.EncodeUnion(SnippetId,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("from = "+testing_GeneratedPrintf.p$6($1.from))+"; "+("destination = "+testing_GeneratedPrintf.p$6($1.destination))+"; "+("msgType = "+testing_GeneratedPrintf.p$7($1.msgType))+"; "+("subtype = "+Utils.prettyPrint($1.subtype))+"; "+("id = "+Utils.prettyPrint($1.id))+"; "+("payload = "+Utils.prettyPrint($1.payload))+"; "+("replier = "+testing_GeneratedPrintf.p$8($1.replier))+"}";
 };
 testing_GeneratedPrintf.p$6=function($1)
 {
  return"Address "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$7=function($1)
 {
  return $1.$==5?"MsgRequestForEcho":$1.$==4?"MsgRequestForId":$1.$==3?"MsgFromBroker":$1.$==2?"MsgReply":$1.$==1?"MsgRequest":"MsgInformation";
 };
 testing_GeneratedPrintf.p$8=function($1)
 {
  return $1.$==2?"Receiver":$1.$==1?"Broker":"NoReply";
 };
 Serializer$1.serSnippetId=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippetId;
 };
 Serializer$1.serSnippet=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippet;
 };
 Model.New=function(snippets,generation,collapsed)
 {
  return{
   snippets:snippets,
   generation:generation,
   collapsed:collapsed
  };
 };
 Importer.serSnippetId2=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippetId2;
 };
 Importer.serSnippet2=function()
 {
  SC$1.$cctor();
  return SC$1.serSnippet2;
 };
 FSharpSet=Collections.FSharpSet=Runtime.Class({
  Equals:function(other)
  {
   return this.get_Count()===other.get_Count()&&Seq.forall2(Unchecked.Equals,this,other);
  },
  Contains:function(v)
  {
   return BalancedTree.Contains(v,this.tree);
  },
  get_Count:function()
  {
   var tree;
   tree=this.tree;
   return tree==null?0:tree.Count;
  },
  GetEnumerator$1:function()
  {
   return Enumerator.Get(BalancedTree.Enumerate(false,this.tree));
  },
  GetHashCode:function()
  {
   return -1741749453+Unchecked.Hash(Arrays.ofSeq(this));
  },
  CompareTo0:function(other)
  {
   return Seq.compareWith(Unchecked.Compare,this,other);
  },
  GetEnumerator:function()
  {
   return this.GetEnumerator$1();
  },
  GetEnumerator0:function()
  {
   return this.GetEnumerator$1();
  }
 },Obj,FSharpSet);
 FSharpSet.New=Runtime.Ctor(function(s)
 {
  FSharpSet.New$1.call(this,BalancedTree.OfSeq(s));
 },FSharpSet);
 FSharpSet.New$1=Runtime.Ctor(function(tree)
 {
  Obj.New.call(this);
  this.tree=tree;
 },FSharpSet);
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
 WSMessagingClient=WebSockets.WSMessagingClient=Runtime.Class({
  sendAndForget:function(msg)
  {
   var $this,b;
   $this=this;
   b=Monads.asyncResult();
   return b.Run(b.Delay(function()
   {
    return b.Bind$1($this.getServer(),function(a)
    {
     $this.postR(a,Replier.NoReply,msg);
     return b.Zero();
    });
   }));
  },
  connectToWebSocketServer:function()
  {
   var $this,b;
   $this=this;
   (function($1)
   {
    return $1("in connectToWebSocketServer");
   }(function(s)
   {
    console.log(s);
   }));
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind((($this.connectStateful($this.wsEndPoint))($this.clientId))(function(server)
    {
     var b$1;
     b$1=null;
     return Concurrency.Delay(function()
     {
      return Concurrency.Return([0,function(state)
      {
       return function(wsmsg)
       {
        var b$2;
        b$2=null;
        return Concurrency.Delay(function()
        {
         return Concurrency.Combine(Concurrency.TryWith(Concurrency.Delay(function()
         {
          return wsmsg.$==2?((function($1)
          {
           return function($2)
           {
            return $1("WebSocket "+Utils.toSafe($2)+" connection open.");
           };
          }(function(s)
          {
           console.log(s);
          }))($this.clientId),$this.serverO={
           $:1,
           $0:server
          },Concurrency.Zero()):wsmsg.$==3?((function($1)
          {
           return function($2)
           {
            return $1("WebSocket "+Utils.toSafe($2)+" connection closed.");
           };
          }(function(s)
          {
           console.log(s);
          }))($this.clientId),$this.close(),Concurrency.Zero()):wsmsg.$==1?((function($1)
          {
           return function($2)
           {
            return $1("WebSocket "+Utils.toSafe($2)+" connection error!");
           };
          }(function(s)
          {
           console.log(s);
          }))($this.clientId),Concurrency.Zero()):($this.processMessage(wsmsg.$0),Concurrency.Zero());
         }),function(a)
         {
          (((Runtime.Curried3(function($1,$2,$3)
          {
           return $1("msg: "+testing_GeneratedPrintf.p$9($2)+" \nexn:"+Utils.prettyPrint($3));
          }))(function(s)
          {
           console.log(s);
          }))(wsmsg))(a);
          return Concurrency.Zero();
         }),Concurrency.Delay(function()
         {
          return Concurrency.Return(state);
         }));
        });
       };
      }]);
     });
    }),function()
    {
     (function($1)
     {
      return $1("connectToWebSocketServer with server");
     }(function(s)
     {
      console.log(s);
     }));
     return Concurrency.Zero();
    });
   });
  },
  getServer:function()
  {
   return this.checkServer.PostAndAsyncReply(function(reply)
   {
    return[reply,null];
   },null);
  },
  postR:function(server,rpl,msg)
  {
   try
   {
    server.FsRoot_Library2_WebSockets_IServer$Post(WebSockets.replier(rpl,WebSockets.from(this.clientAddress,msg)));
   }
   catch(e)
   {
    this.serverO=null;
    throw e;
   }
  },
  close:function()
  {
   var o;
   o=this.serverO;
   o==null?void 0:(o.$0.FsRoot_Library2_WebSockets_IServer$Close(),this.serverO=null);
  },
  processMessage:function(msg)
  {
   var $1,$this,m,m$1,f,x;
   $this=this;
   m=msg.msgType;
   function g(m$2)
   {
    $this.reply(m$2);
   }
   function g$1(v)
   {
    return Concurrency.Return(v);
   }
   switch(m.$==2?0:m.$==0?1:m.$==1?2:m.$==5?3:m.$==4?4:0)
   {
    case 0:
     this.processReply(msg);
     break;
    case 1:
     (((Runtime.Curried3(function($2,$3,$4)
     {
      return $2("Information from '"+Utils.toSafe($3)+"': "+Utils.toSafe($4));
     }))(function(s)
     {
      console.log(s);
     }))(msg.from.get_txt()))(((Provider.Id())())(JSON.parse(msg.payload)));
     break;
    case 2:
     m$1=this.payloadProcessorO;
     m$1!=null&&m$1.$==1?Concurrency.Start(Concurrency.Bind($this.mapPayloadWrap(m$1.$0,msg),(f=function(x$1)
     {
      return g(WebSockets.makeReply(x$1));
     },function(x$1)
     {
      return g$1(f(x$1));
     })),null):msg.replier.$===2?null:null;
     break;
    case 3:
     $this.reply(WebSockets.msgType(MessageType.MsgInformation,WebSockets.mapPayload(Global.id,msg)));
     break;
    case 4:
     $this.reply(WebSockets.msgType(MessageType.MsgInformation,(x=WebSockets.makeReply(msg),MessageGeneric.New(x.from,x.destination,x.msgType,x.subtype,x.id,JSON.stringify(((Provider.Id())())(this.clientId)),x.replier))));
     break;
   }
  },
  processReply:function(msg)
  {
   this.waiting.Reply(msg.id,msg);
  },
  mapPayloadWrap:function(fW,msg)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(fW(msg.payload),function(a)
    {
     return Concurrency.Return(WebSockets.mapPayload(function()
     {
      return a;
     },msg));
    });
   });
  },
  reply:function(msg)
  {
   var o;
   o=this.serverO;
   o==null?void 0:o.$0.FsRoot_Library2_WebSockets_IServer$Post(WebSockets.destination(msg.from,WebSockets.from(this.clientAddress,msg)));
  },
  Dispose:function()
  {
   this.close();
  }
 },Obj,WSMessagingClient);
 WSMessagingClient.New=Runtime.Ctor(function(clientId,timeout,endPoint)
 {
  WSMessagingClient.New$1.call(this,Runtime.Curried3(function(u,c,f)
  {
   function f$1(v)
   {
   }
   function g(v)
   {
    return Concurrency.Return(v);
   }
   return Concurrency.Bind(WithEncoding.ConnectStateful(function(a)
   {
    return JSON.stringify((testing_JsonEncoder.j())(a));
   },function(a)
   {
    return(testing_JsonDecoder.j())(JSON.parse(a));
   },Endpoint.CreateRemote((((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("ws://"+Utils.toSafe($2)+"?ClientId="+Utils.toSafe($3));
   }))(Global.id))(u))(c),{
    $:1,
    $0:JsonEncoding.Readable
   }),function(serverP)
   {
    var $1;
    return f(($1={
     FsRoot_Library2_WebSockets_IServer$Post:function(v)
     {
      return serverP.Post(v);
     },
     FsRoot_Library2_WebSockets_IServer$Close:function()
     {
      return serverP.get_Connection().close(1000);
     }
    },(Obj.New.call($1),$1)));
   }),function(x)
   {
    return g(f$1(x));
   });
  }),clientId,timeout,endPoint);
 },WSMessagingClient);
 WSMessagingClient.New$1=Runtime.Ctor(function(connectStateful,clientId,timeout,endPoint)
 {
  var $this,d;
  $this=this;
  Obj.New.call(this);
  this.connectStateful=connectStateful;
  this.clientId=clientId;
  this.wsEndPoint=(d=WebSockets.extractEndPoint()+"/ws",endPoint==null?d:endPoint.$0);
  this.clientAddress=new Address({
   $:0,
   $0:this.clientId
  });
  this.wsTimeout=timeout==null?60000:timeout.$0;
  this.out=function($1)
  {
   return function($2)
   {
    return $1(Utils.toSafe($2));
   };
  }(function(s)
  {
   console.log(s);
  });
  this.serverO=null;
  this.payloadProcessorO=null;
  this.waiting=new Handler.New(function(msg)
  {
   (((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Reply from '"+Utils.toSafe($2)+"': "+Utils.toSafe($3));
   }))(function(s)
   {
    console.log(s);
   }))(msg.from.get_txt()))(msg.payload);
  });
  this.checkServer=Mailbox.callA(function(v)
  {
   Library.print(v);
  },function()
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    (function($1)
    {
     return $1("getServer");
    }(function(s)
    {
     console.log(s);
    }));
    return Concurrency.Combine($this.serverO==null?(function($1)
    {
     return $1("getServer Connecting");
    }(function(s)
    {
     console.log(s);
    }),Concurrency.Bind($this.connectToWebSocketServer(),function()
    {
     return Concurrency.Bind(Concurrency.Sleep(200),function()
     {
      return Concurrency.Return(null);
     });
    })):Concurrency.Zero(),Concurrency.Delay(function()
    {
     return Concurrency.Return(Result.ofOption(function()
     {
      return new ResultMessage({
       $:0,
       $0:"could not connect to Server"
      });
     },$this.serverO));
    }));
   });
  });
 },WSMessagingClient);
 Messaging.processMessage=function(msg)
 {
  var b;
  return Concurrency.Return(Snippets.runReaderResult((b=Operators$1.reader(),b.Run(b.Delay(function()
  {
   var $1,t;
   switch(msg.$==1?($1=msg.$0,1):msg.$==2?($1=msg.$0,2):msg.$==3?($1=msg.$0,3):msg.$==4?(t=msg.$0,!Unchecked.Equals(t,null)&&t.length===2?Arrays.get(msg.$0,0)==="AddOutput"?($1=Arrays.get(msg.$0,1),4):6:6):msg.$==5?5:0)
   {
    case 0:
     return b.Return({
      $:0,
      $0:FStation.id()
     });
    case 1:
     return b.Bind(ReaderMResult.traverseSeq(SnippetModule.snippetFromRefORm,$1),function(a)
     {
      return b.Return({
       $:1,
       $0:Arrays.ofSeq(Seq.choose(Global.id,a))
      });
     });
    case 2:
     Snippets.clearPredsCache();
     return b.Bind(ReaderMResult.absorbO(function()
     {
      return new ResultMessage({
       $:0,
       $0:(function($2)
       {
        return function($3)
        {
         return $2("Snippet not found "+testing_GeneratedPrintf.p$3($3));
        };
       }(Global.id))($1)
      });
     },SnippetModule.snippetFromRefORm($1)),function(a)
     {
      return b.ReturnFrom$1(Operators$1.op_BarGreaterGreater(Operators$1.op_BarGreaterGreater(SnippetModule.fastCodeRm({
       $:1,
       $0:a.snpId
      },{
       $:1,
       $0:a.snpId
      }),function(t$1)
      {
       return t$1[0];
      }),function(a$1)
      {
       return{
        $:0,
        $0:a$1
       };
      }));
     });
    case 3:
     Snippets.clearPredsCache();
     return b.Return(Hole.Hole.TODO_GetPredecessors);
    case 4:
     MainProgram.appendMsgs($1);
     return b.Return({
      $:0,
      $0:"Ok"
     });
    case 5:
     return b.Return({
      $:0,
      $0:self.document.baseURI
     });
    case 6:
     return b.Return(Hole.Hole[(function($2)
     {
      return function($3)
      {
       return $2("TODO message: "+testing_GeneratedPrintf.p$4($3));
      };
     }(Global.id))(msg)]);
   }
  })))));
 };
 Messaging.wsStationClient=function()
 {
  SC$1.$cctor();
  return SC$1.wsStationClient;
 };
 ResultMessage=Library.ResultMessage=Runtime.Class({
  toString:function()
  {
   return this.$==1?(function($1)
   {
    return function($2)
    {
     return $1("Warning  : "+Utils.toSafe($2));
    };
   }(Global.id))(this.$0):this.$==2?(function($1)
   {
    return function($2)
    {
     return $1(Global.String($2));
    };
   }(Global.id))(this.$0):this.$==3?(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Exception: "+Utils.toSafe($2)+", "+Utils.toSafe($3));
   }))(Global.id))(this.$0))(this.$1):(function($1)
   {
    return function($2)
    {
     return $1("Error    : "+Utils.toSafe($2));
    };
   }(Global.id))(this.$0);
  }
 },null,ResultMessage);
 AttrProxy=UI.AttrProxy=Runtime.Class({},null,AttrProxy);
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
 Elt=UI.Elt=Runtime.Class({
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
 Elt.New$1=Runtime.Ctor(function(docNode,updates,elt,rvUpdates)
 {
  Doc.New.call(this,docNode,updates);
  this.docNode$1=docNode;
  this.updates$1=updates;
  this.elt=elt;
  this.rvUpdates=rvUpdates;
 },Elt);
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
   Async.StartTo(fn(v),function(v$1)
   {
    Snap.MarkDone(res,snap,v$1);
   });
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
 Snap.TryGet=function(snap)
 {
  var m,$1;
  m=snap.s;
  return(m!=null&&m.$==0?($1=m.$0,true):m!=null&&m.$==2&&($1=m.$0,true))?{
   $:1,
   $0:$1
  }:null;
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
 Snap.WhenObsolete=function(snap,obs)
 {
  var m;
  m=snap.s;
  m==null?Snap.Obsolete(obs):m!=null&&m.$==2?Snap.EnqueueSafe(m.$1,obs):m!=null&&m.$==3?Snap.EnqueueSafe(m.$1,obs):void 0;
 };
 T$1=Enumerator.T=Runtime.Class({
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
 T$1.New=Runtime.Ctor(function(s,c,n,d)
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
 DomUtility.CreateText=function(s)
 {
  return DomUtility.Doc().createTextNode(s);
 };
 DomUtility.Doc=function()
 {
  SC$3.$cctor();
  return SC$3.Doc;
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
 ConcreteVar=UI.ConcreteVar=Runtime.Class({
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
  }
 },Var,ConcreteVar);
 ConcreteVar.New=Runtime.Ctor(function(isConst,initSnap,initValue)
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
   prepareTemplate(Seq.head(rawTpls.get_Keys()));
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
 CancellationTokenSource=WebSharper.CancellationTokenSource=Runtime.Class({
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
 CancellationTokenSource.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.c=false;
  this.pending=null;
  this.r=[];
  this.init=1;
 },CancellationTokenSource);
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
 BalancedTree.OfSeq=function(data)
 {
  var a;
  a=Arrays.ofSeq(Seq.distinct(data));
  Arrays.sortInPlace(a);
  return BalancedTree.Build(a,0,a.length-1);
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
 BalancedTree.Branch=function(node,left,right)
 {
  var a,b;
  return Tree.New(node,left,right,1+(a=left==null?0:left.Height,(b=right==null?0:right.Height,Unchecked.Compare(a,b)===1?a:b)),1+(left==null?0:left.Count)+(right==null?0:right.Count));
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
 BalancedTree.Remove=function(k,src)
 {
  var p,t,spine,d;
  p=BalancedTree.Lookup(k,src);
  t=p[0];
  spine=p[1];
  return t==null?src:t.Right==null?BalancedTree.Rebuild(spine,t.Left):t.Left==null?BalancedTree.Rebuild(spine,t.Right):BalancedTree.Rebuild(spine,(d=Arrays.ofSeq(Seq.append(BalancedTree.Enumerate(false,t.Left),BalancedTree.Enumerate(false,t.Right))),BalancedTree.Build(d,0,d.length-1)));
 };
 BalancedTree.Add=function(x,t)
 {
  return BalancedTree.Put(function($1,$2)
  {
   return $2;
  },x,t);
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
 LazyRecord.New=function(created,evalOrVal,force)
 {
  return{
   c:created,
   v:evalOrVal,
   f:force
  };
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
 Concurrency.Zero=function()
 {
  SC$2.$cctor();
  return SC$2.Zero;
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
 Concurrency.While=function(g,c)
 {
  return g()?Concurrency.Bind(c,function()
  {
   return Concurrency.While(g,c);
  }):Concurrency.Return();
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
 Concurrency.For=function(s,b)
 {
  return Concurrency.Using(Enumerator.Get(s),function(ie)
  {
   return Concurrency.While(function()
   {
    return ie.MoveNext();
   },Concurrency.Delay(function()
   {
    return b(ie.Current());
   }));
  });
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
 Concurrency.scheduler=function()
 {
  SC$2.$cctor();
  return SC$2.scheduler;
 };
 Concurrency.Using=function(x,f)
 {
  return Concurrency.TryFinally(f(x),function()
  {
   x.Dispose();
  });
 };
 Concurrency.noneCT=function()
 {
  SC$2.$cctor();
  return SC$2.noneCT;
 };
 Concurrency.Combine=function(a,b)
 {
  return Concurrency.Bind(a,function()
  {
   return b;
  });
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
 Concurrency.GetCT=function()
 {
  SC$2.$cctor();
  return SC$2.GetCT;
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
 Dictionary=Collections.Dictionary=Runtime.Class({
  Clear:function()
  {
   this.data=[];
   this.count=0;
  },
  set_Item:function(k,v)
  {
   this.set(k,v);
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
  Add:function(k,v)
  {
   this.add(k,v);
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
    return!$this.equals.apply(null,[(Operators.KeyValue(a))[0],k]);
   },d),Arrays.length(r)<d.length&&(this.count=this.count-1,this.data[h]=r,true));
  },
  get_Item:function(k)
  {
   return this.get(k);
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
 Dictionary.New$5=Runtime.Ctor(function()
 {
  Dictionary.New$6.call(this,[],Unchecked.Equals,Unchecked.Hash);
 },Dictionary);
 Dictionary.New$6=Runtime.Ctor(function(init,equals,hash)
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
 Async.StartTo=function(comp,k)
 {
  Concurrency.StartWithContinuations(comp,k,function(e)
  {
   Async.OnError(e);
  },Global.ignore,null);
 };
 Async.OnError=function(e)
 {
  return console.log("WebSharper UI: Uncaught asynchronous exception",e);
 };
 FromView=UI.FromView=Runtime.Class({
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
  }
 },Var,FromView);
 FromView.New=Runtime.Ctor(function(view,set)
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
 View=UI.View=Runtime.Class({},null,View);
 Monads.asyncResult=function()
 {
  SC$1.$cctor();
  return SC$1.asyncResult;
 };
 FsCodeModule.getSourceDir=function(srcDir,lines)
 {
  var $1,$2,$3,a,a$1,a$2,$4,a$3,$5,$6;
  $1=Arrays.get(lines,0);
  $2=Arrays.tryItem(1,lines);
  return(a=String.StartsWith$1("////#cd @\"",$1),a!=null&&a.$==1?($3=a.$0,true):$2!=null&&$2.$==1&&(a$1=String.StartsWith$1("////#cd @\"",$2.$0),a$1!=null&&a$1.$==1&&($3=a$1.$0,true)))?(a$2=Strings.Trim($3),(a$3=String.EndsWith$1("\"",a$2),a$3!=null&&a$3.$==1?$4=a$3.$0:$4=a$2,($5=String.StartsWith$1("\\",$4),$5!=null&&$5.$==1)?$4:($6=String.StartsWith$1("/",$4),$6!=null&&$6.$==1)?$4:Unchecked.Equals(Seq.tryItem(1,$4),{
   $:1,
   $0:":"
  })?$4:srcDir+"/"+$4)):srcDir;
 };
 FsCodeModule.separatePrepros=function(code)
 {
  function quoted(line)
  {
   var o;
   o=Seq.tryLast(Strings.SplitStrings(Strings.Trim(line),["\""],1));
   return o==null?line:o.$0;
  }
  function define(line)
  {
   var o;
   o=Seq.tryHead(Strings.SplitStrings(Strings.Trim(line),["#define "],1));
   return o==null?"":o.$0;
  }
  function comment(y)
  {
   return"//"+y;
  }
  return Arrays.map(function(line)
  {
   var m,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13;
   m=true;
   return m&&Strings.StartsWith(line,"#define")?[comment(line),{
    $:2,
    $0:define(line)
   }]:m&&Strings.StartsWith(line,"#cd")?[comment(line),{
    $:0,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"#r")?[comment(line),{
    $:1,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"#load")?[comment(line),{
    $:3,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"#nowarn")?[comment(line),{
    $:5,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(Strings.Trim(line),"# ")?[comment(line),{
    $:4,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(Strings.Trim(line),"#line")?[comment(line),{
    $:4,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"#I")?[comment(line),{
    $:6,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"#if")?[line,{
    $:7,
    $0:line
   }]:m&&Strings.StartsWith(line,"#else")?[line,PreproDirective.PrepoElse]:m&&Strings.StartsWith(line,"#endif")?[line,PreproDirective.PrepoEndIf]:m&&Strings.StartsWith(line,"#light")?[line,{
    $:10,
    $0:false
   }]:m&&Strings.StartsWith(line,"#")?[comment(line),{
    $:11,
    $0:line
   }]:[line,PreproDirective.NoPrepo];
  },code);
 };
 FsCodeModule.separateDirectives=function(fsNass)
 {
  var assembs,defines,prepoIs,nowarns,cd;
  function f(t)
  {
   return t[1];
  }
  function g(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0
   }:null;
  }
  function f$1(t)
  {
   return t[1];
  }
  function g$1(a)
  {
   return a.$==2?{
    $:1,
    $0:a.$0
   }:null;
  }
  function f$2(t)
  {
   return t[1];
  }
  function g$2(a)
  {
   return a.$==6?{
    $:1,
    $0:a.$0
   }:null;
  }
  function f$3(t)
  {
   return t[1];
  }
  function g$3(a)
  {
   return a.$==5?{
    $:1,
    $0:a.$0
   }:null;
  }
  function f$4(t)
  {
   return t[1];
  }
  function g$4(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  }
  assembs=Arrays.ofSeq(Seq.distinct(Seq.choose(function(x)
  {
   return g(f(x));
  },fsNass)));
  defines=Arrays.ofSeq(Seq.distinct(Seq.choose(function(x)
  {
   return g$1(f$1(x));
  },fsNass)));
  prepoIs=Arrays.ofSeq(Seq.distinct(Seq.choose(function(x)
  {
   return g$2(f$2(x));
  },fsNass)));
  nowarns=Arrays.ofSeq(Seq.distinct(Seq.choose(function(x)
  {
   return g$3(f$3(x));
  },fsNass)));
  cd=Seq.tryHead(Seq.choose(function(x)
  {
   return g$4(f$4(x));
  },fsNass));
  return[Arrays.ofSeq(Seq.map(function(t)
  {
   return t[0];
  },fsNass)),assembs,defines,prepoIs,nowarns,cd];
 };
 Calls.parseCode=function(file,code,asy,ver)
 {
  return Calls.FSAutocompleteCall("parse",function(a)
  {
   return a.$==7?{
    $:1,
    $0:a.$0
   }:null;
  },{
   $:0,
   $0:{
    FileName:file,
    IsAsync:asy,
    Lines:code,
    Version:ver
   }
  });
 };
 Calls.FSAutocompleteCall=function(cmd,f,req)
 {
  var b;
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.Bind$1((new AjaxRemotingProvider.New()).Async("testing:FsRoot.Library2+FsAutoComplete.FSAutocompleteCall0:-923365271",[cmd,req]),function(a)
   {
    var p,others;
    function g(o)
    {
     return o!=null;
    }
    p=Arrays.partition(function(x)
    {
     return g(f(x));
    },a);
    others=p[1];
    return b.Bind(Result.ofOption(function()
    {
     return new ResultMessage({
      $:2,
      $0:others
     });
    },Seq.tryHead(Seq.choose(f,p[0]))),function(a$1)
    {
     return b.Return([a$1,others]);
    });
   });
  }));
 };
 AsyncResult.iterA=function(fE,f,vRA)
 {
  function f$1(r)
  {
   Result.iter(fE,f,r);
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
 AsyncResult.bind=function(fRA,vRA)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(vRA,function(a)
   {
    var m,b$1;
    return a.$==1?(m=a.$0,(b$1=null,Concurrency.Delay(function()
    {
     return Concurrency.Return(Library.Error$1(m));
    }))):fRA(a.$0);
   });
  });
 };
 AsyncResult.rtn=function(v)
 {
  return Concurrency.Return({
   $:0,
   $0:v
  });
 };
 AsyncResult.rtnR=function(vR)
 {
  return Concurrency.Return(vR);
 };
 MessageType.MsgInformation={
  $:0
 };
 MessageType.MsgRequest={
  $:1
 };
 MessageType.MsgReply={
  $:2
 };
 Hole.Hole={
  $:0
 };
 MainProgram.appendMsgs=function(msg)
 {
  MainProgram.appendText(MainProgram.outputMsgs(),msg);
 };
 MainProgram.appendText=function(_var,msg)
 {
  var $1;
  _var.Set(($1=_var.Get(),$1===""?msg:msg===""?$1:$1+"\n"+msg));
 };
 MainProgram.outputMsgs=function()
 {
  SC$1.$cctor();
  return SC$1.outputMsgs;
 };
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
 Docs.CreateElemNode=function(el,attr$1,children)
 {
  var attr$2;
  Docs.LinkElement(el,children);
  attr$2=Attrs.Insert(el,attr$1);
  return DocElemNode.New(attr$2,children,null,el,Fresh.Int(),Runtime.GetOptional(attr$2.OnAfterRender));
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
  m=Runtime.GetOptional(el.Render);
  m!=null&&m.$==1?(m.$0(el.El),Runtime.SetOptional(el,"Render",null)):void 0;
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
  }),DomNodes.Except(DomNodes.DocChildren(el),DomNodes.Children(el.El,Runtime.GetOptional(el.Delimiters))));
  ins(el.Children,(m=Runtime.GetOptional(el.Delimiters),m!=null&&m.$==1?m.$0[1]:null));
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
 AggregateException=WebSharper.AggregateException=Runtime.Class({},Error,AggregateException);
 AggregateException.New$3=Runtime.Ctor(function(innerExceptions)
 {
  AggregateException.New$4.call(this,"One or more errors occurred.",innerExceptions);
 },AggregateException);
 AggregateException.New$4=Runtime.Ctor(function(message,innerExceptions)
 {
  this.message=message;
  Object.setPrototypeOf(this,AggregateException.prototype);
  this.innerExceptions=innerExceptions;
 },AggregateException);
 Seq.enumUsing=function(x,f)
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
 Seq.enumWhile=function(f,s)
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
 AsyncBody.New=function(k,ct)
 {
  return{
   k:k,
   ct:ct
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
 CT.New=function(IsCancellationRequested,Registrations)
 {
  return{
   c:IsCancellationRequested,
   r:Registrations
  };
 };
 Storage.InMemory=function(init)
 {
  return new ArrayStorage.New(init);
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
 DictionaryUtil.alreadyAdded=function()
 {
  return Operators.FailWith("An item with the same key has already been added.");
 };
 DictionaryUtil.notPresent=function()
 {
  return Operators.FailWith("The given key was not present in the dictionary.");
 };
 Result$1.Bind=function(f,r)
 {
  return r.$==1?{
   $:1,
   $0:r.$0
  }:f(r.$0);
 };
 Handler=ReplyHandler.Handler=Runtime.Class({
  Reply:function(key,msg)
  {
   var o;
   o=this.waitingAgent;
   o.mailbox.AddLast({
    $:1,
    $0:key,
    $1:msg
   });
   o.resume();
  }
 },Obj,Handler);
 Handler.New=Runtime.Ctor(function(defProc)
 {
  Obj.New.call(this);
  this.waitingAgent=Mailbox.fold(Mailbox.defHandler,function($1,$2)
  {
   var msg,exn,cnl;
   function exec(key,f,def)
   {
    var o,o$1;
    o=(o$1=Map.TryFind(key,$1),o$1==null?null:{
     $:1,
     $0:f(o$1.$0)
    });
    o==null?def():void 0;
    return $1.Remove(key);
   }
   return $2.$==1?(msg=$2.$1,exec($2.$0,function(t)
   {
    t[0](msg);
   },function()
   {
    defProc(msg);
   })):$2.$==2?(exn=$2.$1,exec($2.$0,function(t)
   {
    t[1](exn);
   },Global.ignore)):$2.$==3?(cnl=$2.$1,exec($2.$0,function(t)
   {
    t[2](cnl);
   },Global.ignore)):$1.Add($2.$0,$2.$1);
  },new FSharpMap.New([]));
 },Handler);
 MailboxProcessor=Control.MailboxProcessor=Runtime.Class({
  PostAndAsyncReply:function(msgf,timeout)
  {
   var $this,b;
   $this=this;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind($this.PostAndTryAsyncReply(msgf,timeout),function(a)
    {
     var $1,$2;
     if(a!=null&&a.$==1)
      $2=a.$0;
     else
      throw new TimeoutException.New();
     return Concurrency.Return($2);
    });
   });
  },
  Receive:function(timeout)
  {
   var $this,b;
   $this=this;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind($this.TryReceive(timeout),function(a)
    {
     var $1,$2;
     if(a!=null&&a.$==1)
      $2=a.$0;
     else
      throw new TimeoutException.New();
     return Concurrency.Return($2);
    });
   });
  },
  PostAndTryAsyncReply:function(msgf,timeout)
  {
   var $this,timeout$1,d;
   function a(ok)
   {
    var waiting;
    function f(a$1)
    {
     return{
      $:1,
      $0:a$1
     };
    }
    if(timeout$1<0)
     {
      $this.mailbox.AddLast(msgf(function(x)
      {
       return ok(f(x));
      }));
      $this.resume();
     }
    else
     {
      waiting=[true];
      $this.mailbox.AddLast(msgf(function(res)
      {
       if(waiting[0])
        {
         waiting[0]=false;
         ok({
          $:1,
          $0:res
         });
        }
      }));
      $this.resume();
      Global.setTimeout(function()
      {
       if(waiting[0])
        {
         waiting[0]=false;
         ok(null);
        }
      },timeout$1);
     }
   }
   $this=this;
   timeout$1=(d=this.get_DefaultTimeout(),timeout==null?d:timeout.$0);
   return Concurrency.FromContinuations(function($1,$2,$3)
   {
    return a.apply(null,[$1,$2,$3]);
   });
  },
  Start:function()
  {
   var $this,b;
   $this=this;
   this.started?Operators.FailWith("The MailboxProcessor has already been started."):(this.started=true,$this.startAsync((b=null,Concurrency.Delay(function()
   {
    return Concurrency.TryWith(Concurrency.Delay(function()
    {
     return Concurrency.Bind($this.initial($this),function()
     {
      return Concurrency.Return(null);
     });
    }),function(a)
    {
     $this.errorEvent.event.Trigger(a);
     return Concurrency.Zero();
    });
   }))));
  },
  TryReceive:function(timeout)
  {
   var $this,timeout$1,d;
   function a(ok)
   {
    var b,waiting,pending,b$1;
    if(Unchecked.Equals($this.mailbox.n,null))
    {
     if(timeout$1<0)
      {
       $this.savedCont={
        $:1,
        $0:(b=null,Concurrency.Delay(function()
        {
         ok({
          $:1,
          $0:$this.dequeue()
         });
         return Concurrency.Zero();
        }))
       };
      }
     else
      {
       waiting=[true];
       pending=Global.setTimeout(function()
       {
        if(waiting[0])
         {
          waiting[0]=false;
          $this.savedCont=null;
          ok(null);
         }
       },timeout$1);
       $this.savedCont={
        $:1,
        $0:(b$1=null,Concurrency.Delay(function()
        {
         return waiting[0]?(waiting[0]=false,Global.clearTimeout(pending),ok({
          $:1,
          $0:$this.dequeue()
         }),Concurrency.Zero()):Concurrency.Zero();
        }))
       };
      }
    }
    else
     ok({
      $:1,
      $0:$this.dequeue()
     });
   }
   $this=this;
   timeout$1=(d=this.get_DefaultTimeout(),timeout==null?d:timeout.$0);
   return Concurrency.FromContinuations(function($1,$2,$3)
   {
    return a.apply(null,[$1,$2,$3]);
   });
  },
  get_DefaultTimeout:function()
  {
   return this.DefaultTimeout;
  },
  resume:function()
  {
   var m;
   m=this.savedCont;
   m!=null&&m.$==1?(this.savedCont=null,this.startAsync(m.$0)):void 0;
  },
  startAsync:function(a)
  {
   Concurrency.Start(a,this.token);
  },
  dequeue:function()
  {
   var f;
   f=this.mailbox.n.v;
   this.mailbox.RemoveFirst();
   return f;
  }
 },Obj,MailboxProcessor);
 MailboxProcessor.Start=function(initial,token)
 {
  var mb;
  mb=new MailboxProcessor.New(initial,token);
  mb.Start();
  return mb;
 };
 MailboxProcessor.New=Runtime.Ctor(function(initial,token)
 {
  var $this,m;
  function callback(u)
  {
   return $this.resume();
  }
  $this=this;
  Obj.New.call(this);
  this.initial=initial;
  this.token=token;
  this.started=false;
  this.errorEvent=new FSharpEvent.New();
  this.mailbox=new LinkedList.New();
  this.savedCont=null;
  m=this.token;
  m==null?void 0:Concurrency.Register(m.$0,function()
  {
   callback();
  });
  this.DefaultTimeout=-1;
 },MailboxProcessor);
 MessageGeneric.New=function(from,destination,msgType,subtype,id,payload,replier)
 {
  return{
   from:from,
   destination:destination,
   msgType:msgType,
   subtype:subtype,
   id:id,
   payload:payload,
   replier:replier
  };
 };
 Mailbox.callA=function(hndl,f)
 {
  return Mailbox.iterA(hndl,function(t)
  {
   var replyChannel,msg,b;
   replyChannel=t[0];
   msg=t[1];
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(f(msg),function(a)
    {
     replyChannel(a);
     return Concurrency.Zero();
    });
   });
  });
 };
 Mailbox.fold=function(hndl,f,initState)
 {
  return Mailbox.foldA(hndl,function($1,$2)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Return(f($1,$2));
   });
  },initState);
 };
 Mailbox.defHandler=function(ex,st)
 {
  Library.print(ex);
  return st;
 };
 Mailbox.iterA=function(hndl,f)
 {
  return MailboxProcessor.Start(function(inbox)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.While(function()
    {
     return true;
    },Concurrency.Delay(function()
    {
     return Concurrency.TryWith(Concurrency.Delay(function()
     {
      return Concurrency.Bind(inbox.Receive(null),function(a)
      {
       return Concurrency.Bind(f(a),function()
       {
        return Concurrency.Return(null);
       });
      });
     }),function(a)
     {
      hndl(a);
      return Concurrency.Zero();
     });
    }));
   });
  },null);
 };
 Mailbox.foldA=function(hndl,f,initState)
 {
  return MailboxProcessor.Start(function(inbox)
  {
   function loop(state)
   {
    var b;
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.TryWith(Concurrency.Delay(function()
     {
      return Concurrency.Bind(inbox.Receive(null),function(a)
      {
       return Concurrency.Bind(f(state,a),function(a$1)
       {
        return loop(a$1);
       });
      });
     }),function(a)
     {
      return loop(hndl(a,state));
     });
    });
   }
   return loop(initState);
  },null);
 };
 Client$1.getEncoding=function(encode,decode,jsonEncoding)
 {
  var p,decode$1;
  function f(a)
  {
   return JSON.parse(a);
  }
  p=jsonEncoding.$==0?[function(a)
  {
   return JSON.stringify(a);
  },function(x)
  {
   return Json.Activate(f(x));
  }]:[encode,decode];
  decode$1=p[1];
  return[p[0],function(msg)
  {
   return decode$1(msg.data);
  }];
 };
 Client$1.cacheSocket=function(socket,decode)
 {
  var cache,isOpen;
  cache=[];
  isOpen=[false];
  socket.onopen=function()
  {
   cache.push(Message.Open);
   isOpen[0]=true;
  };
  socket.onclose=function()
  {
   return cache.push(Message.Close);
  };
  socket.onmessage=function(msg)
  {
   return cache.push({
    $:0,
    $0:decode(msg)
   });
  };
  socket.onerror=function()
  {
   return cache.push(Message.Error);
  };
  return function(post)
  {
   Seq.iter(post,cache);
   return isOpen[0];
  };
 };
 Replier.NoReply={
  $:0
 };
 Endpoint.CreateRemote=function(url,encoding)
 {
  return Endpoint.New(url,"",encoding==null?JsonEncoding.Typed:encoding.$0);
 };
 Endpoint.New=function(URI,Route,JsonEncoding$1)
 {
  return{
   URI:URI,
   Route:Route,
   JsonEncoding:JsonEncoding$1
  };
 };
 JsonEncoding=WebSocket.JsonEncoding=Runtime.Class({},null,JsonEncoding);
 JsonEncoding.Readable=new JsonEncoding({
  $:1
 });
 JsonEncoding.Typed=new JsonEncoding({
  $:0
 });
 WebSocketServer=Client$1.WebSocketServer=Runtime.Class({
  Post:function(msg)
  {
   this.conn.send(this.encode(msg));
  },
  get_Connection:function()
  {
   return this.conn;
  }
 },Obj,WebSocketServer);
 WebSocketServer.New=Runtime.Ctor(function(conn,encode)
 {
  Obj.New.call(this);
  this.conn=conn;
  this.encode=encode;
 },WebSocketServer);
 Updates=UI.Updates=Runtime.Class({},null,Updates);
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
 DynamicAttrNode=UI.DynamicAttrNode=Runtime.Class({
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
 DynamicAttrNode.New=Runtime.Ctor(function(view,push)
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
 DocElemNode=UI.DocElemNode=Runtime.Class({
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
  },(Runtime.SetOptional($1,"Delimiters",Delimiters),Runtime.SetOptional($1,"Render",Render),$1)));
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
 HashSet=Collections.HashSet=Runtime.Class({
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
 HashSet.New$3=Runtime.Ctor(function()
 {
  HashSet.New$4.call(this,[],Unchecked.Equals,Unchecked.Hash);
 },HashSet);
 HashSet.New$4=Runtime.Ctor(function(init,equals,hash)
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
 HashSet.New$2=Runtime.Ctor(function(init)
 {
  HashSet.New$4.call(this,init,Unchecked.Equals,Unchecked.Hash);
 },HashSet);
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
 Mailbox$1.StartProcessor=function(procAsync)
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
 Arrays.mapFold=function(f,zero,arr)
 {
  var acc,r,i,$1,p;
  r=new Global.Array(arr.length);
  acc=zero;
  for(i=0,$1=arr.length-1;i<=$1;i++){
   p=f(acc,arr[i]);
   r[i]=p[0];
   acc=p[1];
  }
  return[r,acc];
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
 Seq.tryLast=function(s)
 {
  var e,$1;
  e=Enumerator.Get(s);
  try
  {
   if(e.MoveNext())
    {
     while(e.MoveNext())
      ;
     $1={
      $:1,
      $0:e.Current()
     };
    }
   else
    $1=null;
   return $1;
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Scheduler=Concurrency.Scheduler=Runtime.Class({
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
 Scheduler.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.idle=true;
  this.robin=[];
 },Scheduler);
 ArrayStorage=Storage.ArrayStorage=Runtime.Class({
  SSet:function(coll)
  {
   return Arrays.ofSeq(coll);
  },
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
 ArrayStorage.New=Runtime.Ctor(function(init)
 {
  Obj.New.call(this);
  this.init=init;
 },ArrayStorage);
 OperationCanceledException=WebSharper.OperationCanceledException=Runtime.Class({},Error,OperationCanceledException);
 OperationCanceledException.New=Runtime.Ctor(function(ct)
 {
  OperationCanceledException.New$1.call(this,"The operation was canceled.",null,ct);
 },OperationCanceledException);
 OperationCanceledException.New$1=Runtime.Ctor(function(message,inner,ct)
 {
  this.message=message;
  this.inner=inner;
  Object.setPrototypeOf(this,OperationCanceledException.prototype);
  this.ct=ct;
 },OperationCanceledException);
 FSharpEvent=Control.FSharpEvent=Runtime.Class({},Obj,FSharpEvent);
 FSharpEvent.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.event=Event$2.New([]);
 },FSharpEvent);
 LinkedList=Collections.LinkedList=Runtime.Class({
  GetEnumerator$1:function()
  {
   return new LinkedListEnumerator.New(this);
  },
  AddLast:function(value)
  {
   var node;
   return this.c===0?(node={
    p:null,
    n:null,
    v:value
   },(this.n=node,this.p=this.n,this.c=1,node)):this.AddAfter(this.p,value);
  },
  RemoveFirst:function()
  {
   this.Remove$1(this.n);
  },
  AddAfter:function(after,value)
  {
   var before,node;
   before=after.n;
   node={
    p:after,
    n:before,
    v:value
   };
   Unchecked.Equals(after.n,null)?this.p=node:void 0;
   after.n=node;
   !Unchecked.Equals(before,null)?before.p=node:void 0;
   this.c=this.c+1;
   return node;
  },
  Remove$1:function(node)
  {
   var before,after;
   before=node.p;
   after=node.n;
   Unchecked.Equals(before,null)?this.n=after:before.n=after;
   Unchecked.Equals(after,null)?this.p=before:after.p=before;
   this.c=this.c-1;
  },
  GetEnumerator:function()
  {
   return this.GetEnumerator$1();
  },
  GetEnumerator0:function()
  {
   return this.GetEnumerator$1();
  }
 },Obj,LinkedList);
 LinkedList.New=Runtime.Ctor(function()
 {
  LinkedList.New$1.call(this,[]);
 },LinkedList);
 LinkedList.New$1=Runtime.Ctor(function(coll)
 {
  var ie,node;
  Obj.New.call(this);
  this.c=0;
  this.n=null;
  this.p=null;
  ie=Enumerator.Get(coll);
  ie.MoveNext()?(this.n={
   p:null,
   n:null,
   v:ie.Current()
  },this.p=this.n,this.c=1):void 0;
  while(ie.MoveNext())
   {
    node={
     p:this.p,
     n:null,
     v:ie.Current()
    };
    this.p.n=node;
    this.p=node;
    this.c=this.c+1;
   }
 },LinkedList);
 Map.TryFind=function(k,m)
 {
  return m.TryFind(k);
 };
 WithEncoding.ConnectStateful=function(encode,decode,endpoint,agent)
 {
  return WithEncoding.FromWebSocketStateful(encode,decode,new Global.WebSocket(endpoint.URI),agent,endpoint.JsonEncoding);
 };
 WithEncoding.FromWebSocketStateful=function(encode,decode,socket,agent,jsonEncoding)
 {
  var p,decode$1,flush,server,b;
  p=Client$1.getEncoding(encode,decode,jsonEncoding);
  decode$1=p[1];
  flush=Client$1.cacheSocket(socket,decode$1);
  server=new WebSocketServer.New(socket,p[0]);
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(agent(server),function(a)
   {
    var func,agent$1;
    function a$1(ok,ko)
    {
     var isOpen;
     isOpen=flush(function(a$2)
     {
      agent$1.mailbox.AddLast(a$2);
      agent$1.resume();
     });
     socket.onopen=function()
     {
      agent$1.mailbox.AddLast(Message.Open);
      agent$1.resume();
      return ok(server);
     };
     socket.onclose=function()
     {
      agent$1.mailbox.AddLast(Message.Close);
      return agent$1.resume();
     };
     socket.onmessage=function(msg)
     {
      agent$1.mailbox.AddLast({
       $:0,
       $0:decode$1(msg)
      });
      return agent$1.resume();
     };
     socket.onerror=function()
     {
      agent$1.mailbox.AddLast(Message.Error);
      agent$1.resume();
      return ko(new Error("Could not connect to the server."));
     };
     isOpen?ok(server):void 0;
    }
    func=a[1];
    agent$1=Async$1.FoldAgent(a[0],function($1,$2)
    {
     return(func($1))($2);
    });
    return Concurrency.FromContinuations(function($1,$2,$3)
    {
     return a$1.apply(null,[$1,$2,$3]);
    });
   });
  });
 };
 Dyn.New=function(DynElem,DynFlags,DynNodes,OnAfterRender)
 {
  var $1;
  $1={
   DynElem:DynElem,
   DynFlags:DynFlags,
   DynNodes:DynNodes
  };
  Runtime.SetOptional($1,"OnAfterRender",OnAfterRender);
  return $1;
 };
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
    return e.setAttribute(attrName,(((Runtime.Curried3(Seq.fold))(f))(e.getAttribute(attrName)))(mappings));
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
 KeyCollection=Collections.KeyCollection=Runtime.Class({
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
 KeyCollection.New=Runtime.Ctor(function(d)
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
 Remoting.AjaxProvider=function()
 {
  SC$9.$cctor();
  return SC$9.AjaxProvider;
 };
 Remoting.makePayload=function(data)
 {
  return JSON.stringify(data);
 };
 Remoting.makeHeaders=function(m)
 {
  return{
   "content-type":"application/json",
   "x-websharper-rpc":m
  };
 };
 Remoting.EndPoint=function()
 {
  SC$9.$cctor();
  return SC$9.EndPoint;
 };
 Remoting.ajax=function(async,url,headers,data,ok,err,csrf)
 {
  var xhr,csrf$1,h;
  xhr=new Global.XMLHttpRequest();
  csrf$1=Global.document.cookie.replace(new Global.RegExp("(?:(?:^|.*;)\\s*csrftoken\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");
  xhr.open("POST",url,async);
  if(async==true)
   xhr.withCredentials=true;
  for(var h$1 in headers)xhr.setRequestHeader(h$1,headers[h$1]);
  if(csrf$1)
   xhr.setRequestHeader("x-csrftoken",csrf$1);
  function k()
  {
   var msg;
   if(xhr.status==200)
    ok(xhr.responseText);
   else
    if(csrf&&xhr.status==403&&xhr.responseText=="CSRF")
     csrf();
    else
     {
      msg="Response status is not 200: ";
      err(new Error(msg+xhr.status));
     }
  }
  if("onload"in xhr)
   xhr.onload=xhr.onerror=xhr.onabort=k;
  else
   xhr.onreadystatechange=function()
   {
    if(xhr.readyState==4)
     k();
   };
  xhr.send(data);
 };
 FormatException=WebSharper.FormatException=Runtime.Class({},Error,FormatException);
 FormatException.New$1=Runtime.Ctor(function(message)
 {
  this.message=message;
  Object.setPrototypeOf(this,FormatException.prototype);
 },FormatException);
 PreproDirective.PrepoElse={
  $:8
 };
 PreproDirective.PrepoEndIf={
  $:9
 };
 PreproDirective.NoPrepo={
  $:12
 };
 Event$2=Event$1.Event=Runtime.Class({
  Trigger:function(x)
  {
   var a,i,$1;
   a=this.Handlers.slice();
   for(i=0,$1=a.length-1;i<=$1;i++)(Arrays.get(a,i))(null,x);
  },
  Dispose:Global.ignore
 },null,Event$2);
 Event$2.New=function(Handlers)
 {
  return new Event$2({
   Handlers:Handlers
  });
 };
 FSharpMap=Collections.FSharpMap=Runtime.Class({
  TryFind:function(k)
  {
   var o;
   o=BalancedTree.TryFind(Pair.New(k,void 0),this.tree);
   return o==null?null:{
    $:1,
    $0:o.$0.Value
   };
  },
  Remove:function(k)
  {
   return new FSharpMap.New$1(BalancedTree.Remove(Pair.New(k,void 0),this.tree));
  },
  Add:function(k,v)
  {
   return new FSharpMap.New$1(BalancedTree.Add(Pair.New(k,v),this.tree));
  },
  Equals:function(other)
  {
   return this.get_Count()===other.get_Count()&&Seq.forall2(Unchecked.Equals,this,other);
  },
  GetHashCode:function()
  {
   return Unchecked.Hash(Arrays.ofSeq(this));
  },
  get_Count:function()
  {
   var tree;
   tree=this.tree;
   return tree==null?0:tree.Count;
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
  CompareTo0:function(other)
  {
   return Seq.compareWith(Unchecked.Compare,this,other);
  },
  GetEnumerator:function()
  {
   return this.GetEnumerator$1();
  },
  GetEnumerator0:function()
  {
   return this.GetEnumerator$1();
  }
 },Obj,FSharpMap);
 FSharpMap.New=Runtime.Ctor(function(s)
 {
  FSharpMap.New$1.call(this,MapUtil.fromSeq(s));
 },FSharpMap);
 FSharpMap.New$1=Runtime.Ctor(function(tree)
 {
  Obj.New.call(this);
  this.tree=tree;
 },FSharpMap);
 TimeoutException=WebSharper.TimeoutException=Runtime.Class({},Error,TimeoutException);
 TimeoutException.New=Runtime.Ctor(function()
 {
  TimeoutException.New$1.call(this,"The operation has timed out.");
 },TimeoutException);
 TimeoutException.New$1=Runtime.Ctor(function(message)
 {
  this.message=message;
  Object.setPrototypeOf(this,TimeoutException.prototype);
 },TimeoutException);
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
  SC$10.$cctor();
  return SC$10.Empty;
 };
 SC$9.$cctor=function()
 {
  SC$9.$cctor=Global.ignore;
  SC$9.EndPoint="?";
  SC$9.AjaxProvider=new XhrProvider.New();
 };
 List$1=Collections.List=Runtime.Class({
  GetEnumerator:function()
  {
   return Enumerator.Get(this);
  },
  GetEnumerator0:function()
  {
   return Enumerator.Get0(this);
  }
 },null,List$1);
 Pair=Collections.Pair=Runtime.Class({
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
 Async$1.FoldAgent=function(initState,f)
 {
  return MailboxProcessor.Start(function(inbox)
  {
   function loop(state)
   {
    var b;
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Bind(inbox.Receive(null),function(a)
     {
      return Concurrency.Bind(f(state,a),function(a$1)
      {
       return loop(a$1);
      });
     });
    });
   }
   return loop(initState);
  },null);
 };
 Message.Open={
  $:2
 };
 Message.Close={
  $:3
 };
 Message.Error={
  $:1
 };
 Easing=UI.Easing=Runtime.Class({},Obj,Easing);
 Easing.Custom=function(f)
 {
  return new Easing.New(f);
 };
 Easing.New=Runtime.Ctor(function(transformTime)
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
 XhrProvider=Remoting.XhrProvider=Runtime.Class({
  Async:function(url,headers,data,ok,err)
  {
   Remoting.ajax(true,url,headers,data,ok,err,function()
   {
    Remoting.ajax(true,url,headers,data,ok,err,void 0);
   });
  }
 },Obj,XhrProvider);
 XhrProvider.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },XhrProvider);
 LinkedListEnumerator=Collections.LinkedListEnumerator=Runtime.Class({
  MoveNext:function()
  {
   this.c=this.c.n;
   return!Unchecked.Equals(this.c,null);
  },
  Current:function()
  {
   return this.c.v;
  },
  Dispose:Global.ignore
 },Obj,LinkedListEnumerator);
 LinkedListEnumerator.New=Runtime.Ctor(function(l)
 {
  Obj.New.call(this);
  this.c=l;
 },LinkedListEnumerator);
 HashSetUtil.concat=function(o)
 {
  var r,k;
  r=[];
  for(var k$1 in o)r.push.apply(r,o[k$1]);
  return r;
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
 SC$10.$cctor=function()
 {
  SC$10.$cctor=Global.ignore;
  SC$10.Empty={
   $:0
  };
 };
}());


if (typeof IntelliFactory !=='undefined') {
  IntelliFactory.Runtime.ScriptBasePath = '/Content/';
  IntelliFactory.Runtime.Start();
}
//# sourceMappingURL=testing.map

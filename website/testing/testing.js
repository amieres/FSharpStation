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
 var Global,FsRoot,Library,Monads,Result,WebSharper,Obj,Builder,Operators,String,ParseO,LibraryJS,WebComponent,WcSplitter,WcSplitterT,AppFramework2,PlgInName,PlgVarName,PlgDocName,PlgViwName,PlgActName,PlugInVar,PlugInView,PlugInDoc,PlugInAction,PlugIn,IdentType,ParmTypeBasic,ParmType,ParmDef,ParmVl,PlugInBuilder,AF,Client,TestingJS,SnippetTemplates,AppFramework2UI,PlugInFuncs,Direct,Operators$1,Utils,Arrays,Result$1,Seq,List,T,SC$1,Char,Slice,Strings,JavaScript,Pervasives,EventTarget,Node,JS,UI,Var$1,Var,Event,UIEvent,View,ResizeObserver,ListModel,testing_GeneratedPrintf,GeneratedPrintf,Doc,Collections,FSharpMap,ViewBuilder,HtmlModule,attr,Unchecked,AttrModule,Lazy,AttrProxy,WindowOrWorkerGlobalScope,AppFrameworkTemplate,Object,Enumerator,Numeric,System,Guid,T$1,ConcreteVar,Snap,Client$1,Templates,Dictionary,Pair,FromView,DomUtility,Array,Attrs,LazyExtensionsProxy,LazyRecord,List$1,DateUtil,Abbrev,Fresh,Concurrency,Docs,DocElemNode,CharacterData,Storage,DynamicAttrNode,BalancedTree,Elt,AsyncBody,SC$2,CT,SC$3,HashSet,An,Settings,Mailbox,Attrs$1,Dyn,ArrayStorage,DictionaryUtil,SC$4,SC$5,Updates,SC$6,Scheduler,Error,OperationCanceledException,CancellationTokenSource,Prepare,KeyCollection,Docs$1,RunState,NodeSet,Anims,SC$7,CheckedInput,FormatException,Queue,SC$8,AppendList,String$1,Easing,HashSet$1,HashSetUtil,DomNodes,SC$9,console,IntelliFactory,Runtime,Reflect,$,Date;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 Monads=Library.Monads=Library.Monads||{};
 Result=Monads.Result=Monads.Result||{};
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 Obj=WebSharper.Obj=WebSharper.Obj||{};
 Builder=Result.Builder=Result.Builder||{};
 Operators=Result.Operators=Result.Operators||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 WebComponent=LibraryJS.WebComponent=LibraryJS.WebComponent||{};
 WcSplitter=WebComponent.WcSplitter=WebComponent.WcSplitter||{};
 WcSplitterT=WcSplitter.WcSplitterT=WcSplitter.WcSplitterT||{};
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
 Operators$1=WebSharper.Operators=WebSharper.Operators||{};
 Utils=WebSharper.Utils=WebSharper.Utils||{};
 Arrays=WebSharper.Arrays=WebSharper.Arrays||{};
 Result$1=WebSharper.Result=WebSharper.Result||{};
 Seq=WebSharper.Seq=WebSharper.Seq||{};
 List=WebSharper.List=WebSharper.List||{};
 T=List.T=List.T||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 Char=WebSharper.Char=WebSharper.Char||{};
 Slice=WebSharper.Slice=WebSharper.Slice||{};
 Strings=WebSharper.Strings=WebSharper.Strings||{};
 JavaScript=WebSharper.JavaScript=WebSharper.JavaScript||{};
 Pervasives=JavaScript.Pervasives=JavaScript.Pervasives||{};
 EventTarget=Global.EventTarget;
 Node=Global.Node;
 JS=JavaScript.JS=JavaScript.JS||{};
 UI=WebSharper.UI=WebSharper.UI||{};
 Var$1=UI.Var$1=UI.Var$1||{};
 Var=UI.Var=UI.Var||{};
 Event=Global.Event;
 UIEvent=Global.UIEvent;
 View=UI.View=UI.View||{};
 ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};
 ListModel=UI.ListModel=UI.ListModel||{};
 testing_GeneratedPrintf=Global.testing_GeneratedPrintf=Global.testing_GeneratedPrintf||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 Doc=UI.Doc=UI.Doc||{};
 Collections=WebSharper.Collections=WebSharper.Collections||{};
 FSharpMap=Collections.FSharpMap=Collections.FSharpMap||{};
 ViewBuilder=UI.ViewBuilder=UI.ViewBuilder||{};
 HtmlModule=UI.HtmlModule=UI.HtmlModule||{};
 attr=HtmlModule.attr=HtmlModule.attr||{};
 Unchecked=WebSharper.Unchecked=WebSharper.Unchecked||{};
 AttrModule=UI.AttrModule=UI.AttrModule||{};
 Lazy=WebSharper.Lazy=WebSharper.Lazy||{};
 AttrProxy=UI.AttrProxy=UI.AttrProxy||{};
 WindowOrWorkerGlobalScope=Global.WindowOrWorkerGlobalScope;
 AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate||{};
 Object=Global.Object;
 Enumerator=WebSharper.Enumerator=WebSharper.Enumerator||{};
 Numeric=WebSharper.Numeric=WebSharper.Numeric||{};
 System=Global.System=Global.System||{};
 Guid=System.Guid=System.Guid||{};
 T$1=Enumerator.T=Enumerator.T||{};
 ConcreteVar=UI.ConcreteVar=UI.ConcreteVar||{};
 Snap=UI.Snap=UI.Snap||{};
 Client$1=UI.Client=UI.Client||{};
 Templates=Client$1.Templates=Client$1.Templates||{};
 Dictionary=Collections.Dictionary=Collections.Dictionary||{};
 Pair=Collections.Pair=Collections.Pair||{};
 FromView=UI.FromView=UI.FromView||{};
 DomUtility=UI.DomUtility=UI.DomUtility||{};
 Array=UI.Array=UI.Array||{};
 Attrs=UI.Attrs=UI.Attrs||{};
 LazyExtensionsProxy=WebSharper.LazyExtensionsProxy=WebSharper.LazyExtensionsProxy||{};
 LazyRecord=LazyExtensionsProxy.LazyRecord=LazyExtensionsProxy.LazyRecord||{};
 List$1=Collections.List=Collections.List||{};
 DateUtil=WebSharper.DateUtil=WebSharper.DateUtil||{};
 Abbrev=UI.Abbrev=UI.Abbrev||{};
 Fresh=Abbrev.Fresh=Abbrev.Fresh||{};
 Concurrency=WebSharper.Concurrency=WebSharper.Concurrency||{};
 Docs=UI.Docs=UI.Docs||{};
 DocElemNode=UI.DocElemNode=UI.DocElemNode||{};
 CharacterData=Global.CharacterData;
 Storage=UI.Storage=UI.Storage||{};
 DynamicAttrNode=UI.DynamicAttrNode=UI.DynamicAttrNode||{};
 BalancedTree=Collections.BalancedTree=Collections.BalancedTree||{};
 Elt=UI.Elt=UI.Elt||{};
 AsyncBody=Concurrency.AsyncBody=Concurrency.AsyncBody||{};
 SC$2=Global.StartupCode$WebSharper_Main$Concurrency=Global.StartupCode$WebSharper_Main$Concurrency||{};
 CT=Concurrency.CT=Concurrency.CT||{};
 SC$3=Global.StartupCode$WebSharper_UI$Templates=Global.StartupCode$WebSharper_UI$Templates||{};
 HashSet=Collections.HashSet=Collections.HashSet||{};
 An=UI.An=UI.An||{};
 Settings=Client$1.Settings=Client$1.Settings||{};
 Mailbox=Abbrev.Mailbox=Abbrev.Mailbox||{};
 Attrs$1=Client$1.Attrs=Client$1.Attrs||{};
 Dyn=Attrs$1.Dyn=Attrs$1.Dyn||{};
 ArrayStorage=Storage.ArrayStorage=Storage.ArrayStorage||{};
 DictionaryUtil=Collections.DictionaryUtil=Collections.DictionaryUtil||{};
 SC$4=Global.StartupCode$WebSharper_UI$DomUtility=Global.StartupCode$WebSharper_UI$DomUtility||{};
 SC$5=Global.StartupCode$WebSharper_UI$Attr_Client=Global.StartupCode$WebSharper_UI$Attr_Client||{};
 Updates=UI.Updates=UI.Updates||{};
 SC$6=Global.StartupCode$WebSharper_UI$Abbrev=Global.StartupCode$WebSharper_UI$Abbrev||{};
 Scheduler=Concurrency.Scheduler=Concurrency.Scheduler||{};
 Error=Global.Error;
 OperationCanceledException=WebSharper.OperationCanceledException=WebSharper.OperationCanceledException||{};
 CancellationTokenSource=WebSharper.CancellationTokenSource=WebSharper.CancellationTokenSource||{};
 Prepare=Templates.Prepare=Templates.Prepare||{};
 KeyCollection=Collections.KeyCollection=Collections.KeyCollection||{};
 Docs$1=Client$1.Docs=Client$1.Docs||{};
 RunState=Docs$1.RunState=Docs$1.RunState||{};
 NodeSet=Docs$1.NodeSet=Docs$1.NodeSet||{};
 Anims=UI.Anims=UI.Anims||{};
 SC$7=Global.StartupCode$WebSharper_UI$Doc_Proxy=Global.StartupCode$WebSharper_UI$Doc_Proxy||{};
 CheckedInput=UI.CheckedInput=UI.CheckedInput||{};
 FormatException=WebSharper.FormatException=WebSharper.FormatException||{};
 Queue=WebSharper.Queue=WebSharper.Queue||{};
 SC$8=Global.StartupCode$WebSharper_UI$Animation=Global.StartupCode$WebSharper_UI$Animation||{};
 AppendList=UI.AppendList=UI.AppendList||{};
 String$1=UI.String=UI.String||{};
 Easing=UI.Easing=UI.Easing||{};
 HashSet$1=Abbrev.HashSet=Abbrev.HashSet||{};
 HashSetUtil=Collections.HashSetUtil=Collections.HashSetUtil||{};
 DomNodes=Docs$1.DomNodes=Docs$1.DomNodes||{};
 SC$9=Global.StartupCode$WebSharper_UI$AppendList=Global.StartupCode$WebSharper_UI$AppendList||{};
 console=Global.console;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Reflect=Global.Reflect;
 $=Global.jQuery;
 Date=Global.Date;
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
  return Arrays.ofSeq(Seq.collect(Global.id,Seq.mapi(function(i,c)
  {
   return i>0&&Char.IsUpper(c)?List.ofArray(["_",c]):List.ofArray([c]);
  },_this))).join("");
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
   return Operators$1.FailWith(Global.String(x));
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
 Builder=Result.Builder=Runtime.Class({
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
 Builder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder);
 Operators.op_BarGreaterGreater=function(v,f)
 {
  return Result$1.Map(f,v);
 };
 Operators.op_GreaterGreaterEquals=function(v,f)
 {
  return Result$1.Bind(f,v);
 };
 Operators.op_RightShift=function(f,g,v)
 {
  return Operators.op_BarGreaterGreater(f(v),g);
 };
 Operators.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators.op_GreaterGreaterEquals(f(v),g);
 };
 Operators.rtn=function(v)
 {
  return Result.rtn(v);
 };
 Operators.result=function()
 {
  SC$1.$cctor();
  return SC$1.result$1;
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
 String.left=function(n,s)
 {
  return Library["String.Left"](s,n);
 };
 String.right=function(n,s)
 {
  return Library["String.Right"](s,n);
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
 String.indent=function(n,s)
 {
  var x,x$1;
  x=Strings.SplitChars(s,["\n"],0);
  return Seq.map((x$1=Strings.replicate(n," "),function(y)
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
 AppFramework2.plugIns=function()
 {
  SC$1.$cctor();
  return SC$1.plugIns;
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
 AppFramework2.errorDoc=function(msg)
 {
  return Doc.Element("div",[AttrProxy.Create("color","red")],[Doc.TextNode(msg)]);
 };
 AppFramework2.errorDocf=function(fmt)
 {
  return fmt(AppFramework2.errorDoc);
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
 AppFramework2.mainDocV=function()
 {
  SC$1.$cctor();
  return SC$1.mainDocV;
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
 AppFramework2.pvAttrs=function(a)
 {
  return a.$==6?AppFramework2.getAttrs(a.$0):a.$==14?T.Empty:(function($1)
  {
   return function($2)
   {
    return $1("Wrong parameter expecting Ident: "+testing_GeneratedPrintf.p$6($2));
   };
  }(Operators$1.FailWith))(a);
 };
 AppFramework2.pvDocs=function(a)
 {
  return a.$==15?Seq.map(AppFramework2.pvDoc,a.$0):[AppFramework2.pvDoc(a)];
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
 AppFramework2.docFuncToF1=function(a)
 {
  return a.$==2?a.$0:((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("expected docFunction with 1 parameters "+testing_GeneratedPrintf.p$5($2));
  }))(Operators$1.FailWith))(a);
 };
 AppFramework2.docFuncToF2=function(a)
 {
  return a.$==3?a.$0:((Runtime.Curried(function($1,$2,$3,$4)
  {
   return $1("expected docFunction with 2 parameters "+testing_GeneratedPrintf.p$5($2));
  },4))(Operators$1.FailWith))(a);
 };
 AppFramework2.docFuncToF3=function(a)
 {
  return a.$==4?a.$0:((Runtime.Curried(function($1,$2,$3,$4,$5)
  {
   return $1("expected docFunction with 3 parameters "+testing_GeneratedPrintf.p$5($2));
  },5))(Operators$1.FailWith))(a);
 };
 AppFramework2.docFuncToF4=function(a)
 {
  return a.$==5?a.$0:((Runtime.Curried(function($1,$2,$3,$4,$5,$6)
  {
   return $1("expected docFunction with 4 parameters "+testing_GeneratedPrintf.p$5($2));
  },6))(Operators$1.FailWith))(a);
 };
 AppFramework2.docFuncToF5=function(a)
 {
  return a.$==6?a.$0:((Runtime.Curried(function($1,$2,$3,$4,$5,$6,$7)
  {
   return $1("expected docFunction with 5 parameters "+testing_GeneratedPrintf.p$5($2));
  },7))(Operators$1.FailWith))(a);
 };
 AppFramework2.docFuncToF6=function(a)
 {
  return a.$==7?a.$0:((Runtime.Curried(function($1,$2,$3,$4,$5,$6,$7,$8)
  {
   return $1("expected docFunction with 6 parameters "+testing_GeneratedPrintf.p$5($2));
  },8))(Operators$1.FailWith))(a);
 };
 AppFramework2.getDocF0=function(dn,plug)
 {
  return AppFramework2.docFuncToF0(AppFramework2.getDocFunc(dn,plug));
 };
 AppFramework2.getDocF1=function(dn,plug)
 {
  return AppFramework2.docFuncToF1(AppFramework2.getDocFunc(dn,plug));
 };
 AppFramework2.getDocF2=function(dn,plug)
 {
  return AppFramework2.docFuncToF2(AppFramework2.getDocFunc(dn,plug));
 };
 AppFramework2.getDocF3=function(dn,plug)
 {
  return AppFramework2.docFuncToF3(AppFramework2.getDocFunc(dn,plug));
 };
 AppFramework2.getDocF4=function(dn,plug)
 {
  return AppFramework2.docFuncToF4(AppFramework2.getDocFunc(dn,plug));
 };
 AppFramework2.getDocF5=function(dn,plug)
 {
  return AppFramework2.docFuncToF5(AppFramework2.getDocFunc(dn,plug));
 };
 AppFramework2.getDocF6=function(dn,plug)
 {
  return AppFramework2.docFuncToF6(AppFramework2.getDocFunc(dn,plug));
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
 AppFramework2.newVar=function(name,_var)
 {
  return PlugInVar.New(name,_var);
 };
 AppFramework2.newViw=function(name,viw)
 {
  return PlugInView.New(name,viw);
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
 AppFramework2.newAct=function(name,fnc)
 {
  return PlugInAction.New(name,{
   $:0,
   $0:fnc
  },View.Const(true));
 };
 AppFramework2.newActF=function(name,fncF)
 {
  return PlugInAction.New(name,fncF,View.Const(true));
 };
 AppFramework2.newDocL=function(name,docL)
 {
  return PlugInDoc.New(name,docL);
 };
 AppFramework2.newDocF=function(name,docF)
 {
  return PlugInDoc.New(name,Lazy.Create(function()
  {
   return docF;
  }));
 };
 AppFramework2.plugin=function()
 {
  SC$1.$cctor();
  return SC$1.plugin;
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
 ParmTypeBasic.ParmText=new ParmTypeBasic({
  $:0
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
 ParmTypeBasic.ParmObject=new ParmTypeBasic({
  $:5
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
  Zero:function()
  {
   var i;
   i=AppFramework2.defaultPlugIn();
   return PlugIn.New(new PlgInName({
    $:0,
    $0:"Main"
   }),i.plgVars,i.plgViews,i.plgDocs,i.plgActions);
  },
  Yield:function()
  {
   return this.Zero();
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
  Name:function(plg,name)
  {
   return PlugIn.New(new PlgInName({
    $:0,
    $0:name
   }),plg.plgVars,plg.plgViews,plg.plgDocs,plg.plgActions);
  },
  AddViw:function(plg,name,viw)
  {
   plg.plgViews.Append(AppFramework2.newViw(new PlgViwName({
    $:0,
    $0:name
   }),viw));
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
  AddDoc:function(plg,name,doc)
  {
   plg.plgDocs.Append(AppFramework2.newDoc(new PlgDocName({
    $:0,
    $0:name
   }),doc));
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
  AddDoc1:function(plg,name,doc,a,b)
  {
   plg.plgDocs.Append(AppFramework2.newDocF(new PlgDocName({
    $:0,
    $0:name
   }),AppFramework2.funDoc1(doc,a[0],a[1])));
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
  AddDoc3:function(plg,name,doc,a,b,c)
  {
   plg.plgDocs.Append(AppFramework2.newDocF(new PlgDocName({
    $:0,
    $0:name
   }),AppFramework2.funDoc3(doc,a[0],a[1],b[0],b[1],c[0],c[1])));
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
  AddDoc5:function(plg,name,doc,a,b,c,d,e)
  {
   plg.plgDocs.Append(AppFramework2.newDocF(new PlgDocName({
    $:0,
    $0:name
   }),AppFramework2.funDoc5(doc,a[0],a[1],b[0],b[1],c[0],c[1],d[0],d[1],e[0],e[1])));
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
  AddAct:function(plg,name,act)
  {
   plg.plgActions.Append(AppFramework2.newAct(new PlgActName({
    $:0,
    $0:name
   }),act));
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
  AddAct2:function(plg,name,act,a,b)
  {
   plg.plgActions.Append(AppFramework2.newActF(new PlgActName({
    $:0,
    $0:name
   }),AppFramework2.funAct2(act,a[0],a[1],b[0],b[1])));
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
  AddAct4:function(plg,name,act,a,b,c,d)
  {
   plg.plgActions.Append(AppFramework2.newActF(new PlgActName({
    $:0,
    $0:name
   }),AppFramework2.funAct4(act,a[0],a[1],b[0],b[1],c[0],c[1],d[0],d[1])));
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
  AddAct6:function(plg,name,act,a,b,c,d,e,f)
  {
   plg.plgActions.Append(AppFramework2.newActF(new PlgActName({
    $:0,
    $0:name
   }),AppFramework2.funAct6(act,a[0],a[1],b[0],b[1],c[0],c[1],d[0],d[1],e[0],e[1],f[0],f[1])));
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
  }
 },Obj,PlugInBuilder);
 PlugInBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },PlugInBuilder);
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
 AF.templateCreate=function(tmpName,attrs,views,docs,vars,actions)
 {
  return AF.templateCreate0(tmpName,attrs,views,docs,vars,actions,[]);
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
 AF.plug=function()
 {
  SC$1.$cctor();
  return SC$1.plug;
 };
 AF.splitterTemplate=function(tmpl,partSizes,afterRender,afterRenderSp,mouseDown,gap)
 {
  return AF.templateCreate0(tmpl,[],[["PartSizes",partSizes],["Gap",gap]],[],[],[["MouseDown",function()
  {
   return mouseDown;
  }]],[["AfterRender",afterRender],["AfterRenderSp",afterRenderSp]]);
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
 Client.selectionPlugInO=function()
 {
  SC$1.$cctor();
  return SC$1.selectionPlugInO;
 };
 Client.currentPlugInW=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInW;
 };
 Client.currentPlugInV=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInV;
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
 Client.AppFwkClient=function()
 {
  return AF.templateCreate("AppFwkClient",[],[["PlugInName",View.Map(function($1)
  {
   return $1.plgName.get_Id();
  },Client.currentPlugInW())]],[["PlugIns",Client.renderPlugIns()],["Vars",Client.renderVars()],["Views",Client.renderViews()],["Docs",Client.renderDocs()],["Actions",Client.renderActions()]],[],[]);
 };
 SnippetTemplates.html=function()
 {
  SC$1.$cctor();
  return SC$1.html$1;
 };
 AppFramework2UI.txtToAttrs=function()
 {
  SC$1.$cctor();
  return SC$1.txtToAttrs;
 };
 AppFramework2UI.percV=function()
 {
  SC$1.$cctor();
  return SC$1.percV;
 };
 AppFramework2UI.gapV=function()
 {
  SC$1.$cctor();
  return SC$1.gapV;
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
 PlugInFuncs.inputDF=function()
 {
  SC$1.$cctor();
  return SC$1.inputDF;
 };
 PlugInFuncs.elementDF=function()
 {
  SC$1.$cctor();
  return SC$1.elementDF;
 };
 PlugInFuncs.splitterDF=function()
 {
  SC$1.$cctor();
  return SC$1.splitterDF;
 };
 PlugInFuncs.inpPer=function()
 {
  return((PlugInFuncs.inputDF())(ParmVl.PvNone))({
   $:4,
   $0:AppFramework2UI.percV()
  });
 };
 PlugInFuncs.inpGap=function()
 {
  return((PlugInFuncs.inputDF())(ParmVl.PvNone))({
   $:4,
   $0:AppFramework2UI.gapV()
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
 Direct.inpPer=function()
 {
  return Doc.Input([],AppFramework2UI.percV());
 };
 Direct.inpGap=function()
 {
  return Doc.Input([],AppFramework2UI.gapV());
 };
 Direct.doc1=function()
 {
  return Doc.Element("div",(AppFramework2UI.txtToAttrs())("height:100%; color:red ; background: lightblue"),[Doc.TextNode("Perc: %"),Direct.inpPer()]);
 };
 Direct.doc2=function()
 {
  return Doc.Element("div",(AppFramework2UI.txtToAttrs())("height:100%; color:blue; background: pink"),[Doc.TextNode("Gap: "),Direct.inpGap()]);
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
 Operators$1.FailWith=function(msg)
 {
  throw new Error(msg);
 };
 Operators$1.range=function(min,max)
 {
  var count;
  count=1+max-min;
  return count<=0?[]:Seq.init(count,function(x)
  {
   return x+min;
  });
 };
 Operators$1.KeyValue=function(kvp)
 {
  return[kvp.K,kvp.V];
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
 Arrays.get=function(arr,n)
 {
  Arrays.checkBounds(arr,n);
  return arr[n];
 };
 Arrays.checkBounds=function(arr,n)
 {
  if(n<0||n>=arr.length)
   Operators$1.FailWith("Index was outside the bounds of the array.");
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
 Arrays.foldBack=function(f,arr,zero)
 {
  var acc,$1,len,i,$2;
  acc=zero;
  len=arr.length;
  for(i=1,$2=len;i<=$2;i++)acc=f(arr[len-i],acc);
  return acc;
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
 Arrays.create=function(size,value)
 {
  var r,i,$1;
  r=new Global.Array(size);
  for(i=0,$1=size-1;i<=$1;i++)r[i]=value;
  return r;
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
 Arrays.concat=function(xs)
 {
  return Global.Array.prototype.concat.apply([],Arrays.ofSeq(xs));
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
 Arrays.iter=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)f(arr[i]);
 };
 Arrays.pick=function(f,arr)
 {
  var m;
  m=Arrays.tryPick(f,arr);
  return m==null?Operators$1.FailWith("KeyNotFoundException"):m.$0;
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
 Arrays.find=function(f,arr)
 {
  var m;
  m=Arrays.tryFind(f,arr);
  return m==null?Operators$1.FailWith("KeyNotFoundException"):m.$0;
 };
 Arrays.init=function(size,f)
 {
  var r,i,$1;
  size<0?Operators$1.FailWith("Negative size given."):null;
  r=new Global.Array(size);
  for(i=0,$1=size-1;i<=$1;i++)r[i]=f(i);
  return r;
 };
 Seq.mapi=function(f,s)
 {
  return Seq.map2(f,Seq.initInfinite(Global.id),s);
 };
 Seq.collect=function(f,s)
 {
  return Seq.concat(Seq.map(f,s));
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
 Seq.choose=function(f,s)
 {
  return Seq.collect(function(x)
  {
   var m;
   m=f(x);
   return m==null?T.Empty:List.ofArray([m.$0]);
  },s);
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
 Seq.seqEmpty=function()
 {
  return Operators$1.FailWith("The input sequence was empty.");
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
  return Operators$1.FailWith("The input list was empty.");
 };
 T=List.T=Runtime.Class({
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
  SC$1.observers=T.Empty;
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
 Char.IsUpper=function(c)
 {
  return c>="A"&&c<="Z";
 };
 Char.IsWhiteSpace=function(c)
 {
  return c.match(new Global.RegExp("\\s"))!==null;
 };
 Slice.string=function(source,start,finish)
 {
  return start==null?finish!=null&&finish.$==1?source.slice(0,finish.$0+1):"":finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);
 };
 Slice.array=function(source,start,finish)
 {
  return start==null?finish!=null&&finish.$==1?source.slice(0,finish.$0+1):[]:finish==null?source.slice(start.$0):source.slice(start.$0,finish.$0+1);
 };
 Strings.replicate=function(count,s)
 {
  return Arrays.create(count,s).join("");
 };
 Strings.concat=function(separator,strings)
 {
  return Arrays.ofSeq(strings).join(separator);
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
 Strings.SplitWith=function(str,pat)
 {
  return str.split(pat);
 };
 Strings.forall=function(f,s)
 {
  return Seq.forall(f,Strings.protect(s));
 };
 Strings.protect=function(s)
 {
  return s===null?"":s;
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
 Var$1=UI.Var$1=Runtime.Class({},Obj,Var$1);
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
 Var=UI.Var=Runtime.Class({},Obj,Var);
 Var.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Var);
 View.Map=function(fn,a)
 {
  return View.CreateLazy(function()
  {
   return Snap.Map(fn,a());
  });
 };
 View.get_Do=function()
 {
  return ViewBuilder.B;
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
 View.Map2=function(fn,a,a$1)
 {
  return View.CreateLazy(function()
  {
   return Snap.Map2(fn,a(),a$1());
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
 View.Join=function(a)
 {
  return View.CreateLazy(function()
  {
   return Snap.Join(a());
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
 View=UI.View=Runtime.Class({},null,View);
 ListModel=UI.ListModel=Runtime.Class({
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
   this["var"].Set(this.storage.SAppendMany(toAppend,(((Runtime.Curried3(Seq.fold))(f))(this["var"].Get()))(items)));
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
 testing_GeneratedPrintf.p=function($1)
 {
  return $1.$==5?"IdentGeneric":$1.$==4?"IdentPlugIn":$1.$==3?"IdentAction":$1.$==2?"IdentDoc":$1.$==1?"IdentView":"IdentVar";
 };
 testing_GeneratedPrintf.p$7=function($1)
 {
  return"PlgInName "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$8=function($1)
 {
  return"PlgVarName "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$9=function($1)
 {
  return"PlgViwName "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$10=function($1)
 {
  return"PlgDocName "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$6=function($1)
 {
  return $1.$==16?"PvMap "+Utils.prettyPrint($1.$0):$1.$==15?"PvList "+Utils.printList(function($2)
  {
   return testing_GeneratedPrintf.p$6($2);
  },$1.$0):$1.$==14?"PvNone":$1.$==13?"PvObject "+Utils.prettyPrint($1.$0):$1.$==12?"PvPlugIn "+GeneratedPrintf.p$1($1.$0):$1.$==11?"PvPlgAct "+GeneratedPrintf.p($1.$0):$1.$==10?"PvAction2 <fun>":$1.$==9?"PvAction1 <fun>":$1.$==8?"PvAction0 <fun>":$1.$==7?"PvDoc "+Utils.prettyPrint($1.$0):$1.$==6?"PvText "+Utils.prettyPrint($1.$0):$1.$==5?"PvView "+testing_GeneratedPrintf.p$12($1.$0):$1.$==4?"PvVar "+Utils.prettyPrint($1.$0):$1.$==3?"PvActRef "+("("+testing_GeneratedPrintf.p$7($1.$0[0])+", "+testing_GeneratedPrintf.p$11($1.$0[1])+")"):$1.$==2?"PvDocRef "+("("+testing_GeneratedPrintf.p$7($1.$0[0])+", "+testing_GeneratedPrintf.p$10($1.$0[1])+")"):$1.$==1?"PvViwRef "+("("+testing_GeneratedPrintf.p$7($1.$0[0])+", "+testing_GeneratedPrintf.p$9($1.$0[1])+")"):"PvVarRef "+("("+testing_GeneratedPrintf.p$7($1.$0[0])+", "+testing_GeneratedPrintf.p$8($1.$0[1])+")");
 };
 testing_GeneratedPrintf.p$5=function($1)
 {
  return $1.$==7?"FunDoc6 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+", "+testing_GeneratedPrintf.p$2($1.$4)+", "+testing_GeneratedPrintf.p$2($1.$5)+", "+testing_GeneratedPrintf.p$2($1.$6)+")":$1.$==6?"FunDoc5 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+", "+testing_GeneratedPrintf.p$2($1.$4)+", "+testing_GeneratedPrintf.p$2($1.$5)+")":$1.$==5?"FunDoc4 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+", "+testing_GeneratedPrintf.p$2($1.$4)+")":$1.$==4?"FunDoc3 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+")":$1.$==3?"FunDoc2 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+")":$1.$==2?"FunDoc1 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+")":$1.$==1?"FunDoc0 <fun>":"JustDoc "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==6?"FunAct6 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+", "+testing_GeneratedPrintf.p$2($1.$4)+", "+testing_GeneratedPrintf.p$2($1.$5)+", "+testing_GeneratedPrintf.p$2($1.$6)+")":$1.$==5?"FunAct5 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+", "+testing_GeneratedPrintf.p$2($1.$4)+", "+testing_GeneratedPrintf.p$2($1.$5)+")":$1.$==4?"FunAct4 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+", "+testing_GeneratedPrintf.p$2($1.$4)+")":$1.$==3?"FunAct3 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+", "+testing_GeneratedPrintf.p$2($1.$3)+")":$1.$==2?"FunAct2 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+", "+testing_GeneratedPrintf.p$2($1.$2)+")":$1.$==1?"FunAct1 (<fun>, "+testing_GeneratedPrintf.p$2($1.$1)+")":"FunAct0 <fun>";
 };
 GeneratedPrintf.p$1=function($1)
 {
  return"{"+("plgName = "+testing_GeneratedPrintf.p$7($1.plgName))+"; "+("plgVars = "+Utils.prettyPrint($1.plgVars))+"; "+("plgViews = "+Utils.prettyPrint($1.plgViews))+"; "+("plgDocs = "+Utils.prettyPrint($1.plgDocs))+"; "+("plgActions = "+Utils.prettyPrint($1.plgActions))+"}";
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("actName = "+testing_GeneratedPrintf.p$11($1.actName))+"; "+("actFunction = "+testing_GeneratedPrintf.p$1($1.actFunction))+"; "+("actEnabled = "+testing_GeneratedPrintf.p$13($1.actEnabled))+"}";
 };
 testing_GeneratedPrintf.p$12=function($1)
 {
  return"View <fun>";
 };
 testing_GeneratedPrintf.p$11=function($1)
 {
  return"PlgActName "+Utils.prettyPrint($1.$0);
 };
 testing_GeneratedPrintf.p$2=function($1)
 {
  return"ParmDef ("+Utils.prettyPrint($1.$0)+", "+testing_GeneratedPrintf.p$3($1.$1)+")";
 };
 testing_GeneratedPrintf.p$13=function($1)
 {
  return"View <fun>";
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
 Doc=UI.Doc=Runtime.Class({},Obj,Doc);
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
 Doc.get_Empty=function()
 {
  return Doc.Mk(null,View.Const());
 };
 Doc.Element=function(name,attr$1,children)
 {
  var a,a$1;
  a=AttrProxy.Concat(attr$1);
  a$1=Doc.Concat(children);
  return Elt.New(DomUtility.CreateElement(name),a,a$1);
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
 Doc.Append=function(a,b)
 {
  return Doc.Mk({
   $:0,
   $0:a.docNode,
   $1:b.docNode
  },View.Map2Unit(a.updates,b.updates));
 };
 Doc.ConvertBy=function(key,render,view)
 {
  return Doc.Flatten(View.MapSeqCachedBy(key,render,view));
 };
 Doc.RunAppend=function(parent,doc)
 {
  var rdelim;
  rdelim=self.document.createTextNode("");
  parent.appendChild(rdelim);
  Doc.RunBefore(rdelim,doc);
 };
 Doc.Input=function(attr$1,_var)
 {
  return Doc.InputInternal("input",function()
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
 Doc.RunBefore=function(rdelim,doc)
 {
  var ldelim;
  ldelim=self.document.createTextNode("");
  rdelim.parentNode.insertBefore(ldelim,rdelim);
  Doc.RunBetween(ldelim,rdelim,doc);
 };
 Doc.InputInternal=function(elemTy,attr$1)
 {
  var el;
  el=DomUtility.CreateElement(elemTy);
  return Elt.New(el,AttrProxy.Concat(attr$1(el)),Doc.get_Empty());
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
 Doc.New=Runtime.Ctor(function(docNode,updates)
 {
  Obj.New.call(this);
  this.docNode=docNode;
  this.updates=updates;
 },Doc);
 FSharpMap=Collections.FSharpMap=Runtime.Class({
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
   return Unchecked.Hash(Arrays.ofSeq(this));
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
 ViewBuilder.B={
  $:0
 };
 attr=HtmlModule.attr=Runtime.Class({},Obj,attr);
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
      return Operators$1.FailWith("Cannot compare function values.");
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
 AttrProxy=UI.AttrProxy=Runtime.Class({},null,AttrProxy);
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
 AttrProxy.Handler=function(event,q)
 {
  return AttrProxy.HandlerImpl(event,q);
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
 AppFrameworkTemplate.html=function()
 {
  SC$1.$cctor();
  return SC$1.html;
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
 ConcreteVar=UI.ConcreteVar=Runtime.Class({
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
  get_View:function()
  {
   return this.view;
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
      return m!=null&&m.$==0?m.$0:m!=null&&m.$==2?m.$0:Operators$1.FailWith("value not found by View.Sequence");
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
 Snap.WhenObsolete=function(snap,obs)
 {
  var m;
  m=snap.s;
  m==null?Snap.Obsolete(obs):m!=null&&m.$==2?Snap.EnqueueSafe(m.$1,obs):m!=null&&m.$==3?Snap.EnqueueSafe(m.$1,obs):void 0;
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
   m=Runtime.GetOptional(attr$2.OnAfterRender);
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
  return[Runtime.DeleteEmptyFields({
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
  SC$3.$cctor();
  return SC$3.TextHoleRE;
 };
 Dictionary=Collections.Dictionary=Runtime.Class({
  TryGetValue:function(k,res)
  {
   var $this,d,v;
   $this=this;
   d=this.data[this.hash(k)];
   return d==null?false:(v=Arrays.tryPick(function(a)
   {
    var a$1;
    a$1=Operators$1.KeyValue(a);
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
    return $this.equals.apply(null,[(Operators$1.KeyValue(a))[0],k]);
   },d)?DictionaryUtil.alreadyAdded():void 0,this.count=this.count+1,d.push({
    K:k,
    V:v
   }));
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
    return $this.equals.apply(null,[(Operators$1.KeyValue(a))[0],k]);
   },d);
  },
  get_Keys:function()
  {
   return new KeyCollection.New(this);
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
    return $this.equals.apply(null,[(Operators$1.KeyValue(a))[0],k]);
   },d),m==null?(this.count=this.count+1,d.push({
    K:k,
    V:v
   })):d[m.$0]={
    K:k,
    V:v
   });
  },
  remove:function(k)
  {
   var $this,h,d,r;
   $this=this;
   h=this.hash(k);
   d=this.data[h];
   return d==null?false:(r=Arrays.filter(function(a)
   {
    return!$this.equals.apply(null,[(Operators$1.KeyValue(a))[0],k]);
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
    a$1=Operators$1.KeyValue(a);
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
 FromView=UI.FromView=Runtime.Class({
  Set:function(x)
  {
   this.set(x);
  },
  get_View:function()
  {
   return this.view;
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
 DomUtility.CreateText=function(s)
 {
  return DomUtility.Doc().createTextNode(s);
 };
 DomUtility.SetStyle=function(el,name,value)
 {
  DomUtility.SetProperty(el.style,name,value);
 };
 DomUtility.SetAttr=function(el,name,value)
 {
  el.setAttribute(name,value);
 };
 DomUtility.RemoveAttr=function(el,attrName)
 {
  el.removeAttribute(attrName);
 };
 DomUtility.CreateElement=function(name)
 {
  return DomUtility.Doc().createElement(name);
 };
 DomUtility.Doc=function()
 {
  SC$4.$cctor();
  return SC$4.Doc;
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
 Attrs.EmptyAttr=function()
 {
  SC$5.$cctor();
  return SC$5.EmptyAttr;
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
 Seq.insufficient=function()
 {
  return Operators$1.FailWith("The input sequence has an insufficient number of elements.");
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
 Seq.nonNegative=function()
 {
  return Operators$1.FailWith("The input must be non-negative.");
 };
 LazyRecord.New=function(created,evalOrVal,force)
 {
  return{
   c:created,
   v:evalOrVal,
   f:force
  };
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
 Concurrency.While=function(g,c)
 {
  return g()?Concurrency.Bind(c,function()
  {
   return Concurrency.While(g,c);
  }):Concurrency.Return();
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
 Concurrency.defCTS=function()
 {
  SC$2.$cctor();
  return SC$2.defCTS;
 };
 Concurrency.UncaughtAsyncError=function(e)
 {
  console.log("WebSharper: Uncaught asynchronous exception",e);
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
 Concurrency.FromContinuations=function(subscribe)
 {
  return function(c)
  {
   var continued;
   function once(cont)
   {
    if(continued[0])
     Operators$1.FailWith("A continuation provided by Async.FromContinuations was invoked multiple times");
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
 Docs.CreateElemNode=function(el,attr$1,children)
 {
  var attr$2;
  Docs.LinkElement(el,children);
  attr$2=Attrs.Insert(el,attr$1);
  return DocElemNode.New(attr$2,children,null,el,Fresh.Int(),Runtime.GetOptional(attr$2.OnAfterRender));
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
  m=Runtime.GetOptional(el.Render);
  m!=null&&m.$==1?(m.$0(el.El),Runtime.SetOptional(el,"Render",null)):void 0;
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
  },el,Fresh.Int(),Runtime.GetOptional(attr$2.OnAfterRender));
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
 Storage.InMemory=function(init)
 {
  return new ArrayStorage.New(init);
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
 Elt=UI.Elt=Runtime.Class({},Doc,Elt);
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
 Elt.New$1=Runtime.Ctor(function(docNode,updates,elt,rvUpdates)
 {
  Doc.New.call(this,docNode,updates);
  this.docNode$1=docNode;
  this.updates$1=updates;
  this.elt=elt;
  this.rvUpdates=rvUpdates;
 },Elt);
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
 SC$3.$cctor=function()
 {
  SC$3.$cctor=Global.ignore;
  SC$3.LoadedTemplates=new Dictionary.New$5();
  SC$3.LocalTemplatesLoaded=false;
  SC$3.TextHoleRE="\\${([^}]+)}";
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
 ArrayStorage=Storage.ArrayStorage=Runtime.Class({
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
 DictionaryUtil.alreadyAdded=function()
 {
  return Operators$1.FailWith("An item with the same key has already been added.");
 };
 DictionaryUtil.notPresent=function()
 {
  return Operators$1.FailWith("The given key was not present in the dictionary.");
 };
 SC$4.$cctor=function()
 {
  SC$4.$cctor=Global.ignore;
  SC$4.Doc=self.document;
 };
 SC$5.$cctor=function()
 {
  SC$5.$cctor=Global.ignore;
  SC$5.EmptyAttr=null;
 };
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
 SC$6.$cctor=function()
 {
  SC$6.$cctor=Global.ignore;
  SC$6.counter=0;
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
 CancellationTokenSource=WebSharper.CancellationTokenSource=Runtime.Class({},Obj,CancellationTokenSource);
 CancellationTokenSource.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.c=false;
  this.pending=null;
  this.r=[];
  this.init=1;
 },CancellationTokenSource);
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
     a$1=Operators$1.KeyValue(a);
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
 CheckedInput=UI.CheckedInput=Runtime.Class({
  get_Input:function()
  {
   return this.$==1?this.$0:this.$==2?this.$0:this.$1;
  }
 },null,CheckedInput);
 FormatException=WebSharper.FormatException=Runtime.Class({},Error,FormatException);
 FormatException.New$1=Runtime.Ctor(function(message)
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
 SC$9.$cctor=function()
 {
  SC$9.$cctor=Global.ignore;
  SC$9.Empty={
   $:0
  };
 };
 Runtime.OnLoad(function()
 {
  AppFramework2UI.main();
 });
}());


if (typeof IntelliFactory !=='undefined') {
  IntelliFactory.Runtime.ScriptBasePath = '/Content/';
  IntelliFactory.Runtime.Start();
}
//# sourceMappingURL=testing.map

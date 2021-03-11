(function (Global) {
  "use strict";
  Global.IntelliFactory = {
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

  Global.IntelliFactory.Runtime.OnLoad(function () {
    if (Global.WebSharper && WebSharper.Activator && WebSharper.Activator.Activate)
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

  Global.ignore = function() { };
  Global.id = function(x) { return x };
  Global.fst = function(x) { return x[0] };
  Global.snd = function(x) { return x[1] };
  Global.trd = function(x) { return x[2] };

  if (!Global.console) {
    Global.console = {
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
  }
}(self));
;
var JSON;JSON||(JSON={}),function(){"use strict";function i(n){return n<10?"0"+n:n}function f(n){return o.lastIndex=0,o.test(n)?'"'+n.replace(o,function(n){var t=s[n];return typeof t=="string"?t:"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+n+'"'}function r(i,e){var s,l,h,a,v=n,c,o=e[i];o&&typeof o=="object"&&typeof o.toJSON=="function"&&(o=o.toJSON(i)),typeof t=="function"&&(o=t.call(e,i,o));switch(typeof o){case"string":return f(o);case"number":return isFinite(o)?String(o):"null";case"boolean":case"null":return String(o);case"object":if(!o)return"null";if(n+=u,c=[],Object.prototype.toString.apply(o)==="[object Array]"){for(a=o.length,s=0;s<a;s+=1)c[s]=r(s,o)||"null";return h=c.length===0?"[]":n?"[\n"+n+c.join(",\n"+n)+"\n"+v+"]":"["+c.join(",")+"]",n=v,h}if(t&&typeof t=="object")for(a=t.length,s=0;s<a;s+=1)typeof t[s]=="string"&&(l=t[s],h=r(l,o),h&&c.push(f(l)+(n?": ":":")+h));else for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(h=r(l,o),h&&c.push(f(l)+(n?": ":":")+h));return h=c.length===0?"{}":n?"{\n"+n+c.join(",\n"+n)+"\n"+v+"}":"{"+c.join(",")+"}",n=v,h}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+i(this.getUTCMonth()+1)+"-"+i(this.getUTCDate())+"T"+i(this.getUTCHours())+":"+i(this.getUTCMinutes())+":"+i(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,o=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,n,u,s={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},t;typeof JSON.stringify!="function"&&(JSON.stringify=function(i,f,e){var o;if(n="",u="",typeof e=="number")for(o=0;o<e;o+=1)u+=" ";else typeof e=="string"&&(u=e);if(t=f,f&&typeof f!="function"&&(typeof f!="object"||typeof f.length!="number"))throw new Error("JSON.stringify");return r("",{"":i})}),typeof JSON.parse!="function"&&(JSON.parse=function(n,t){function r(n,i){var f,e,u=n[i];if(u&&typeof u=="object")for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&(e=r(u,f),e!==undefined?u[f]=e:delete u[f]);return t.call(n,i,u)}var i;if(n=String(n),e.lastIndex=0,e.test(n)&&(n=n.replace(e,function(n){return"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(n.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return i=eval("("+n+")"),typeof t=="function"?r({"":i},""):i;throw new SyntaxError("JSON.parse");})}();;
importScripts(["//cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js"]);
(function(Global)
{
 "use strict";
 var WebSharper,Operators,Obj,UI,Var,FsRoot,LibraryJS,WsTranslatorLoader,View,EventTarget,WindowOrWorkerGlobalScope,WorkerGlobalScope,WWorker,WasmLoad,Dependency,Remoting,IMessagingO,SC$1,Snap,Concurrency,Arrays,Event,WasmStatus,Utils,JavaScript,JS,Pervasives,Unchecked,Seq,Library,String,Strings,Slice,ParseO,Numeric,System,Guid,Var$1,Remoting$1,Collections,Dictionary,ListModel,UI$1,Dependency$1,Log,GenEditor,Position,Json,WsTranslatorLoader_JsonEncoder,AjaxRemotingProvider,ClientSideJson,Provider,CustomXhrProvider,Require,WsTranslator,Pojo,XMLHttpRequestEventTarget,ArrayBufferView,List,DateUtil,ConcreteVar,SC$2,DictionaryUtil,ReturnQueue,Storage,Enumerator,T,SC$3,Object,Scheduler,AsyncBody,SC$4,CT,T$1,Abbrev,Fresh,XhrProvider,ArrayStorage,Error,OperationCanceledException,CancellationTokenSource,HashSet,Async,FormatException,SC$5,Queue,HashSetUtil,IntelliFactory,Runtime,console,JSON,Date;
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 Operators=WebSharper.Operators=WebSharper.Operators||{};
 Obj=WebSharper.Obj=WebSharper.Obj||{};
 UI=WebSharper.UI=WebSharper.UI||{};
 Var=UI.Var=UI.Var||{};
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 WsTranslatorLoader=LibraryJS.WsTranslatorLoader=LibraryJS.WsTranslatorLoader||{};
 View=UI.View=UI.View||{};
 EventTarget=Global.EventTarget;
 WindowOrWorkerGlobalScope=Global.WindowOrWorkerGlobalScope;
 WorkerGlobalScope=Global.WorkerGlobalScope;
 WWorker=WsTranslatorLoader.WWorker=WsTranslatorLoader.WWorker||{};
 WasmLoad=WsTranslatorLoader.WasmLoad=WsTranslatorLoader.WasmLoad||{};
 Dependency=WsTranslatorLoader.Dependency=WsTranslatorLoader.Dependency||{};
 Remoting=WsTranslatorLoader.Remoting=WsTranslatorLoader.Remoting||{};
 IMessagingO=Remoting.IMessagingO=Remoting.IMessagingO||{};
 SC$1=Global.StartupCode$WsTranslatorLoader$WsTranslatorLoader=Global.StartupCode$WsTranslatorLoader$WsTranslatorLoader||{};
 Snap=UI.Snap=UI.Snap||{};
 Concurrency=WebSharper.Concurrency=WebSharper.Concurrency||{};
 Arrays=WebSharper.Arrays=WebSharper.Arrays||{};
 Event=Global.Event;
 WasmStatus=WsTranslatorLoader.WasmStatus=WsTranslatorLoader.WasmStatus||{};
 Utils=WebSharper.Utils=WebSharper.Utils||{};
 JavaScript=WebSharper.JavaScript=WebSharper.JavaScript||{};
 JS=JavaScript.JS=JavaScript.JS||{};
 Pervasives=JavaScript.Pervasives=JavaScript.Pervasives||{};
 Unchecked=WebSharper.Unchecked=WebSharper.Unchecked||{};
 Seq=WebSharper.Seq=WebSharper.Seq||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 String=Library.String=Library.String||{};
 Strings=WebSharper.Strings=WebSharper.Strings||{};
 Slice=WebSharper.Slice=WebSharper.Slice||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 Numeric=WebSharper.Numeric=WebSharper.Numeric||{};
 System=Global.System=Global.System||{};
 Guid=System.Guid=System.Guid||{};
 Var$1=UI.Var$1=UI.Var$1||{};
 Remoting$1=WebSharper.Remoting=WebSharper.Remoting||{};
 Collections=WebSharper.Collections=WebSharper.Collections||{};
 Dictionary=Collections.Dictionary=Collections.Dictionary||{};
 ListModel=UI.ListModel=UI.ListModel||{};
 UI$1=WsTranslatorLoader.UI=WsTranslatorLoader.UI||{};
 Dependency$1=Library.Dependency=Library.Dependency||{};
 Log=Library.Log=Library.Log||{};
 GenEditor=LibraryJS.GenEditor=LibraryJS.GenEditor||{};
 Position=GenEditor.Position=GenEditor.Position||{};
 Json=WebSharper.Json=WebSharper.Json||{};
 WsTranslatorLoader_JsonEncoder=Global.WsTranslatorLoader_JsonEncoder=Global.WsTranslatorLoader_JsonEncoder||{};
 AjaxRemotingProvider=Remoting$1.AjaxRemotingProvider=Remoting$1.AjaxRemotingProvider||{};
 ClientSideJson=WebSharper.ClientSideJson=WebSharper.ClientSideJson||{};
 Provider=ClientSideJson.Provider=ClientSideJson.Provider||{};
 CustomXhrProvider=Remoting.CustomXhrProvider=Remoting.CustomXhrProvider||{};
 Require=WasmLoad.Require=WasmLoad.Require||{};
 WsTranslator=FsRoot.WsTranslator=FsRoot.WsTranslator||{};
 Pojo=LibraryJS.Pojo=LibraryJS.Pojo||{};
 XMLHttpRequestEventTarget=Global.XMLHttpRequestEventTarget;
 ArrayBufferView=Global.ArrayBufferView;
 List=WebSharper.List=WebSharper.List||{};
 DateUtil=WebSharper.DateUtil=WebSharper.DateUtil||{};
 ConcreteVar=UI.ConcreteVar=UI.ConcreteVar||{};
 SC$2=Global.StartupCode$WebSharper_Main$Remoting=Global.StartupCode$WebSharper_Main$Remoting||{};
 DictionaryUtil=Collections.DictionaryUtil=Collections.DictionaryUtil||{};
 ReturnQueue=Remoting.ReturnQueue=Remoting.ReturnQueue||{};
 Storage=UI.Storage=UI.Storage||{};
 Enumerator=WebSharper.Enumerator=WebSharper.Enumerator||{};
 T=Enumerator.T=Enumerator.T||{};
 SC$3=Global.StartupCode$WsTranslator47$WsTranslator47=Global.StartupCode$WsTranslator47$WsTranslator47||{};
 Object=Global.Object;
 Scheduler=Concurrency.Scheduler=Concurrency.Scheduler||{};
 AsyncBody=Concurrency.AsyncBody=Concurrency.AsyncBody||{};
 SC$4=Global.StartupCode$WebSharper_Main$Concurrency=Global.StartupCode$WebSharper_Main$Concurrency||{};
 CT=Concurrency.CT=Concurrency.CT||{};
 T$1=List.T=List.T||{};
 Abbrev=UI.Abbrev=UI.Abbrev||{};
 Fresh=Abbrev.Fresh=Abbrev.Fresh||{};
 XhrProvider=Remoting$1.XhrProvider=Remoting$1.XhrProvider||{};
 ArrayStorage=Storage.ArrayStorage=Storage.ArrayStorage||{};
 Error=Global.Error;
 OperationCanceledException=WebSharper.OperationCanceledException=WebSharper.OperationCanceledException||{};
 CancellationTokenSource=WebSharper.CancellationTokenSource=WebSharper.CancellationTokenSource||{};
 HashSet=Collections.HashSet=Collections.HashSet||{};
 Async=Abbrev.Async=Abbrev.Async||{};
 FormatException=WebSharper.FormatException=WebSharper.FormatException||{};
 SC$5=Global.StartupCode$WebSharper_UI$Abbrev=Global.StartupCode$WebSharper_UI$Abbrev||{};
 Queue=WebSharper.Queue=WebSharper.Queue||{};
 HashSetUtil=Collections.HashSetUtil=Collections.HashSetUtil||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 console=Global.console;
 JSON=Global.JSON;
 Date=Global.Date;
 Operators.FailWith=function(msg)
 {
  throw new Error(msg);
 };
 Operators.KeyValue=function(kvp)
 {
  return[kvp.K,kvp.V];
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
 Var=UI.Var=Runtime.Class({},Obj,Var);
 Var.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Var);
 WsTranslatorLoader.wasmStatusV=function()
 {
  SC$1.$cctor();
  return SC$1.wasmStatusV;
 };
 WsTranslatorLoader.printfnLog=function()
 {
  SC$1.$cctor();
  return SC$1.printfnLog;
 };
 WsTranslatorLoader.getId=function(a$1)
 {
  return a$1.$0;
 };
 WsTranslatorLoader.printfn=function(fmt)
 {
  return fmt(Remoting.messaging().get_D().wprintfn("stdout"));
 };
 WsTranslatorLoader.eprintfn=function(fmt)
 {
  return fmt(Remoting.messaging().get_D().wprintfn("stderr"));
 };
 View.Sink=function(act,a$1)
 {
  function loop()
  {
   Snap.WhenRun(a$1(),act,function()
   {
    Concurrency.scheduler().Fork(loop);
   });
  }
  Concurrency.scheduler().Fork(loop);
 };
 View.Map2=function(fn,a$1,a$2)
 {
  return View.CreateLazy(function()
  {
   return Snap.Map2(fn,a$1(),a$2());
  });
 };
 View.MapAsync=function(fn,a$1)
 {
  return View.CreateLazy(function()
  {
   return Snap.MapAsync(fn,a$1());
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
 View.Map=function(fn,a$1)
 {
  return View.CreateLazy(function()
  {
   return Snap.Map(fn,a$1());
  });
 };
 WWorker.receiveMessage=function(loadInThisThread,evt)
 {
  var m;
  m=evt.data;
  m.$==1?Remoting.callRunRpc(m.$0,m.$1):m.$==2?loadInThisThread(m.$0,m.$1,m.$2):Remoting.callEvalJS(m.$0,m.$1);
 };
 WasmLoad.loadInThisThread=function(publishPath,debug,opts)
 {
  var $1,$2,$3;
  $2=!self.document;
  $3=WsTranslatorLoader.wasmStatusV().Get();
  switch($2?$3[0].$==3?1:$3[0].$==1?2:$3[0].$==2?4:$3[0].$==0?6:0:$3[0].$==1?1:$3[0].$==3?3:$3[0].$==4?5:$3[0].$==0?6:0)
  {
   case 0:
    null;
    break;
   case 1:
    ((WsTranslatorLoader.printfnLog())("WASM"))(function($4)
    {
     return $4("WASM is loading");
    });
    break;
   case 2:
    ((WsTranslatorLoader.printfnLog())("WASM"))(function($4)
    {
     return $4("WASM is loading in the main thread");
    });
    break;
   case 3:
    ((WsTranslatorLoader.printfnLog())("WASM"))(function($4)
    {
     return $4("WASM is loading in a WebWorker");
    });
    break;
   case 4:
    ((WsTranslatorLoader.printfnLog())("WASM"))(function($4)
    {
     return $4("WASM is loaded in the main thread");
    });
    break;
   case 5:
    ((WsTranslatorLoader.printfnLog())("WASM"))(function($4)
    {
     return $4("WASM is loaded in a WebWorker");
    });
    break;
   case 6:
    Concurrency.Start(Concurrency.FromContinuations(function(ok,ko)
    {
     var b;
     function init()
     {
      try
      {
       WasmLoad.bindWasm();
       ((WsTranslatorLoader.printfnLog())("WASM"))(function($4)
       {
        return $4("WASM Initialized!");
       });
       WsTranslatorLoader.wasmStatusV().Set([!self.document?WasmStatus.WasmWorkerLoaded:WasmStatus.WasmLoaded,{
        $:1,
        $0:publishPath
       }]);
       ok();
      }
      catch(e)
      {
       ko(e);
      }
     }
     function initializeRuntime()
     {
      var monoSetEnv,o,config,vfs_prefix,deploy_prefix,enable_debugging,file_list;
      try
      {
       monoSetEnv=(o=self.Module.cwrap("mono_wasm_setenv","void",["string","string"]),function(t)
       {
        o(t[0],t[1]);
       });
       debug?(monoSetEnv(["MONO_LOG_LEVEL","debug"]),monoSetEnv(["MONO_LOG_MASK","all"])):(monoSetEnv(["MONO_LOG_LEVEL",""]),monoSetEnv(["MONO_LOG_MASK",""]));
       monoSetEnv(["PATH","/dlls/;/managed/"]);
       config=self.config;
       vfs_prefix=config.vfs_prefix;
       deploy_prefix=config.deploy_prefix;
       enable_debugging=config.enable_debugging;
       file_list=config.file_list;
       self.MONO.mono_load_runtime_and_bcl(vfs_prefix,deploy_prefix,enable_debugging,file_list,init);
      }
      catch(e)
      {
       ko(e);
      }
     }
     return Concurrency.Start((b=null,Concurrency.Delay(function()
     {
      return Concurrency.TryWith(Concurrency.Delay(function()
      {
       ((WsTranslatorLoader.printfnLog())("WASM"))(function($4)
       {
        return $4("Loading WASM. Hold on, this may take a while...");
       });
       WsTranslatorLoader.wasmStatusV().Set([!self.document?WasmStatus.WasmWorkerLoading:WasmStatus.WasmLoading,{
        $:1,
        $0:publishPath
       }]);
       return Concurrency.Bind(Concurrency.Sleep(50),function()
       {
        return Concurrency.Combine(!(!self.document)?(Remoting.installProvider(),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
        {
         return Concurrency.Bind(WasmLoad.requireJsA([WsTranslatorLoader.getId(publishPath)+"mono-config.js"]),function()
         {
          var a$1,a$2;
          self.Module=self.Module||{};
          self.Module.onRuntimeInitialized=initializeRuntime;
          a$1=WsTranslatorLoader.printfn(function($4)
          {
           return function($5)
           {
            return $4(Utils.toSafe($5));
           };
          });
          self.Module.print=a$1;
          a$2=WsTranslatorLoader.eprintfn(function($4)
          {
           return function($5)
           {
            return $4(Utils.toSafe($5));
           };
          });
          self.Module.printErr=a$2;
          self.Module.preRun=[function()
          {
           WasmLoad.preloadFiles(WasmLoad.filesToPreload(opts));
          }];
          return Concurrency.Bind(WasmLoad.requireJsA([WsTranslatorLoader.getId(publishPath)+"dotnet.js"]),function()
          {
           return Concurrency.Zero();
          });
         });
        }));
       });
      }),function(a$1)
      {
       ko(a$1);
       return Concurrency.Zero();
      });
     })),null);
    }),null);
    break;
  }
 };
 WasmLoad.requireJsA=function(fs)
 {
  return Concurrency.FromContinuations(function(ok)
  {
   return Global.requirejs(Arrays.ofSeq(fs),ok);
  });
 };
 WasmLoad.filesToPreload=function(opts)
 {
  return List.ofSeq(Seq.delay(function()
  {
   return Seq.append(WsTranslator.dlls(),Seq.delay(function()
   {
    return Arrays.choose(function(a$1)
    {
     var a$2;
     a$2=String.StartsWith("-r:",a$1);
     return a$2!=null&&a$2.$==1?{
      $:1,
      $0:a$2.$0
     }:null;
    },Strings.SplitChars(opts,["\n"],0));
   }));
  }));
 };
 WasmLoad.preloadFiles=function(files)
 {
  var dirFiles,e;
  self.Browser=Pojo.newPojo([["init",Global.ignore],["asyncLoad",function(url,onload)
  {
   var xhr;
   xhr=new self.XMLHttpRequest();
   xhr.open("GET",url,true);
   xhr.responseType="arraybuffer";
   xhr.onload=function()
   {
    return xhr.status===200||xhr.status===0&&!Unchecked.Equals(xhr.response,null)?onload(new Global.Uint8Array(xhr.response)):(((WsTranslatorLoader.printfnLog())("WASM"))(function($1)
    {
     return function($2)
     {
      return $1("xhr failed: "+Utils.toSafe($2));
     };
    }))(url);
   };
   xhr.onerror=function(d)
   {
    return(((WsTranslatorLoader.printfnLog())("WASM"))(function($1)
    {
     return function($2)
     {
      return $1(Utils.prettyPrint($2));
     };
    }))(d);
   };
   return xhr.send(null);
  }]]);
  self.Module=self.Module||{};
  self.Module.preloadPlugins=[];
  dirFiles=Seq.cache(Seq.distinct(Seq.map(function(a$1)
  {
   return[Strings.concat("/",Slice.array(a$1,null,{
    $:1,
    $0:Arrays.length(a$1)-2
   })),Seq.last(a$1)];
  },Seq.map(function(a$1)
  {
   return Arrays.map(Strings.Trim,a$1);
  },Seq.map(function(s)
  {
   return Strings.SplitChars(Strings.Replace(s,"\\","/"),["/"],0);
  },files)))));
  Seq.iter(function(dir)
  {
   try
   {
    self.FS.mkdir(dir);
   }
   catch(e$1)
   {
    null;
   }
  },Seq.distinct(Seq.map(function(t)
  {
   return t[0];
  },dirFiles)));
  e=Enumerator.Get(dirFiles);
  try
  {
   while(e.MoveNext())
    (function()
    {
     var f,file,dir,from;
     f=e.Current();
     file=f[1];
     dir=f[0];
     from=Strings.Replace((dir==="/managed"?".":"..")+dir+"/"+file,"//","/");
     (((WsTranslatorLoader.printfnLog())("WASM"))(function($1)
     {
      return function($2)
      {
       return $1("Preloading "+Utils.toSafe($2));
      };
     }))(from);
     return self.FS.createPreloadedFile(dir,file,from,1,1);
    }());
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 WasmLoad.bindWasm=function()
 {
  Seq.iter(function(t)
  {
   WasmLoad.bindStaticMethod(t[0],t[1],t[2]);
  },List.ofArray([["WsTranslator47","FsRoot.WsTranslator","runRpc"]]));
 };
 WasmLoad.bindStaticMethod=function(assmbly,path,methd)
 {
  var m;
  self[((((Runtime.Curried(function($1,$2,$3,$4)
  {
   return $1("WASM_"+Utils.toSafe($2)+"_"+Utils.toSafe($3)+"_"+Utils.toSafe($4));
  },4))(Global.id))(assmbly))(Strings.Replace(path,".","_")))(methd)]=(m=((((Runtime.Curried(function($1,$2,$3,$4)
  {
   return $1("["+Utils.toSafe($2)+"]"+Utils.toSafe($3)+":"+Utils.toSafe($4));
  },4))(Global.id))(assmbly))(path))(methd),self.Module.mono_bind_static_method(m));
 };
 Dependency=WsTranslatorLoader.Dependency=Runtime.Class({
  set_D:function(v)
  {
   this.D=v;
  },
  get_D:function()
  {
   return this.D;
  }
 },Obj,Dependency);
 Dependency.New=Runtime.Ctor(function(def)
 {
  Obj.New.call(this);
  this.D=def;
 },Dependency);
 Remoting.messaging=function()
 {
  SC$1.$cctor();
  return SC$1.messaging;
 };
 Remoting.evalJS0=function(id,js)
 {
  var r;
  try
  {
   r=Global["eval"](js);
   !r?Remoting.returnValue(id,null):Remoting.returnValue(id,(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(r));
  }
  catch(e)
  {
   Remoting.returnExn(id,(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(e));
  }
 };
 Remoting.returnValue=function(header,data)
 {
  Remoting.messaging().get_D().returnValue([header,data]);
 };
 Remoting.returnExn=function(header,e)
 {
  Remoting.messaging().get_D().returnExn([header,e]);
 };
 Remoting.callRunRpc=function(header,data)
 {
  (Remoting.messaging().get_D().runRpc(header))(data);
 };
 Remoting.callEvalJS=function(id,js)
 {
  Remoting.messaging().get_D().evalJS([id,js]);
 };
 Remoting.installProvider=function()
 {
  Remoting$1.set_AjaxProvider(new CustomXhrProvider.New());
 };
 Remoting.returnValue0=function(md,v)
 {
  var o,$1,ok;
  o=ReturnQueue.tryGet(md);
  o==null?void 0:($1=o.$0,ok=$1[0],$1[1],ok(v));
 };
 Remoting.returnExn0=function(md,e)
 {
  Remoting.returnExnExn(md,new Error(e));
 };
 Remoting.logThis=function(channel,txt)
 {
  (Remoting.messaging().get_D().wprintfn(channel))(txt);
 };
 Remoting.printfnLog=function(channel,fmt)
 {
  return fmt(function(txt)
  {
   Remoting.logThis(channel,txt);
  });
 };
 Remoting.returnExnExn=function(md,e)
 {
  var o,$1;
  o=ReturnQueue.tryGet(md);
  o==null?void 0:($1=o.$0,$1[0],$1[1](e));
 };
 Remoting.getHeaderRpc=function(headers)
 {
  return headers["x-websharper-rpc"];
 };
 IMessagingO.New=function(evalJS,runRpc,returnValue,returnExn,wprintfn)
 {
  return{
   evalJS:evalJS,
   runRpc:runRpc,
   returnValue:returnValue,
   returnExn:returnExn,
   wprintfn:wprintfn
  };
 };
 SC$1.$cctor=function()
 {
  var f,g,i,$1,$2;
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
   var a$2,b;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$2=0,(b=Arrays.length(s)-2,Unchecked.Compare(a$2,b)===1?a$2:b))
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
  function w(ch,txt)
  {
   console.log(ch+":: "+txt);
   UI$1.addChannel(ch,txt);
   return ch==="stderr"?UI$1.addChannel("stdout",txt):null;
  }
  function a$1(ers,fn)
  {
   var a$2;
   a$2=Arrays.choose(function(e)
   {
    return e.fileName===fn?{
     $:1,
     $0:e.annotation
    }:null;
   },ers);
   return JSON.stringify(((Provider.EncodeArray(WsTranslatorLoader_JsonEncoder.j$3))())(a$2));
  }
  SC$1.rtn=function(v)
  {
   return[v];
  };
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
  SC$1.parseDateO2=(g=ParseO.tryParseWith(function(a$2)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a$2),m!=null&&m.$==1&&(o=m.$0,true)),o];
  }),function(x)
  {
   return g(f$2(x));
  });
  SC$1.parseDateO=ParseO.tryParseWith(function(a$2)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a$2),m!=null&&m.$==1&&(o=m.$0,true)),o];
  });
  SC$1.parseIntO=ParseO.tryParseWith(function(a$2)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt32(a$2,{
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
  SC$1.parseInt64O=ParseO.tryParseWith(function(a$2)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt64(a$2,{
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
  SC$1.parseSingleO=ParseO.tryParseWith(function(a$2)
  {
   var o,$3;
   o=0;
   return[($3=Global.Number(a$2),Global.isNaN($3)?false:(o=$3,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith(function(a$2)
  {
   var o,$3;
   o=0;
   return[($3=Global.Number(a$2),Global.isNaN($3)?false:(o=$3,true)),o];
  });
  SC$1.parseGuidO=ParseO.tryParseWith(function(a$2)
  {
   var o;
   o=null;
   return[Guid.TryParse(a$2,{
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
  SC$1.WasmLoaderVersion="47";
  SC$1.wasmStatusV=Var$1.Create$1([WasmStatus.WasmNotLoaded,null]);
  SC$1.originalProvider=Remoting$1.AjaxProvider();
  SC$1.queues=new Dictionary.New$5();
  SC$1.messaging=new Dependency.New(IMessagingO.New(function()
  {
   Operators.FailWith("Too early for evalJS");
  },function(h)
  {
   return function(d)
   {
    return self.WASM_WsTranslator47_FsRoot_WsTranslator_runRpc(h,d);
   };
  },function(t)
  {
   Remoting.returnValue0(t[0],t[1]);
  },function(t)
  {
   Remoting.returnExn0(t[0],t[1]);
  },function(ch)
  {
   return function(txt)
   {
    return(((Runtime.Curried3(function($3,$4,$5)
    {
     return $3("EARLY PRINTING! "+Utils.toSafe($4)+":: "+Utils.toSafe($5));
    }))(function(s)
    {
     console.log(s);
    }))(ch))(txt);
   };
  }));
  SC$1.rv=function(t)
  {
   Remoting.returnValue(t[0],t[1]);
  };
  SC$1.re=function(t)
  {
   Remoting.returnExn(t[0],t[1]);
  };
  SC$1.lt=function(t)
  {
   Remoting.logThis(t[0],t[1]);
  };
  SC$1.printfnLog=function(c)
  {
   return function(f$3)
   {
    return Remoting.printfnLog(c,f$3);
   };
  };
  SC$1.workerO=null;
  SC$1.rootPath="/WASM/v47/";
  SC$1.detailsV=ListModel.Create(function(t)
  {
   return t[0];
  },[]);
  SC$1.debugV=Var$1.Create$1(false);
  SC$1.wasmPathV=Var$1.Create$1({
   $:0,
   $0:"/WASM/v47/Interp/"
  });
  SC$1.wasmPathTV=Var$1.Lens(UI$1.wasmPathV(),function(a$2)
  {
   return a$2.$0;
  },function(a$2,a$3)
  {
   return{
    $:0,
    $0:a$3
   };
  });
  SC$1.commandV=Var$1.Create$1("/tmp/bin.exe 1 2 10 20 30 40");
  SC$1.jsV=Var$1.Create$1("");
  SC$1.getPresencesV=Var$1.Create$1("");
  SC$1.curChannel=Var$1.Create$1("WASM");
  SC$1.errorsV=Var$1.Create$1([]);
  SC$1.codeV=Var$1.Create$1("\r\n            //#nowarn \"52\"\r\n            \r\n            let tryParseWith tryParseFunc : string -> _  = tryParseFunc >> function\r\n                    | true, v    -> Some v\r\n                    | false, _   -> None\r\n            let parseIntO = tryParseWith System.Int32   .TryParse\r\n            \r\n            let rec fibo = function\r\n                | 0 | 1 -> 1\r\n                | n -> fibo (n - 1) + fibo (n - 2)\r\n            \r\n            let printFibo n = printfn \"fibo(%d) = %i\" n (fibo n)\r\n            \r\n            let doFibos (args: string []) =\r\n                args\r\n                |> Seq.collect (fun s -> s.Split[| ' ' |])\r\n                |> Seq.choose parseIntO\r\n                |> Seq.iter   printFibo\r\n            \r\n            let nowStamp() = \r\n                let t = System.DateTime.UtcNow // in two steps to avoid Warning: The value has been copied to ensure the original is not mutated\r\n                t.ToString(\"yyyy-MM-dd HH:mm:ss.fff\", System.Globalization.CultureInfo.InvariantCulture)\r\n            \r\n            let inline TimeIt n f p =\r\n                printfn \"%s Starting %s\" (nowStamp()) n\r\n                let start = System.DateTime.UtcNow.Ticks\r\n                f p\r\n                let elapsedSpan = System.TimeSpan(System.DateTime.UtcNow.Ticks - start)\r\n                printfn \"%s Finished %s %0d:%02d:%02d.%03d\" (nowStamp()) n (int elapsedSpan.TotalHours) elapsedSpan.Minutes elapsedSpan.Seconds elapsedSpan.Milliseconds\r\n            \r\n            let [< EntryPoint >] main args =\r\n                TimeIt \"doFibos\" doFibos args\r\n                0\r\n            \r\n                    ");
  SC$1.optsV=Var$1.Create$1(Strings.concat("\n",Seq.map(Strings.Trim,Strings.SplitChars("\r\n                                            /tmp/source.fs\r\n                                            -o:/tmp/bin.exe\r\n                                            -d:WEBSHARPER\r\n                                            --simpleresolution\r\n                                            --nowarn:3186\r\n                                            --optimize-\r\n                                            --noframework\r\n                                            --fullpaths\r\n                                            --warn:3\r\n                                            --target:exe\r\n                                            -r:/dlls/WebSharper.Core.dll\r\n                                            -r:/dlls/WebSharper.Main.dll\r\n                                            -r:/dlls/WebSharper.UI.dll\r\n                                            -r:/dlls/WebSharper.JavaScript.dll\r\n                                            -r:/dlls/WebSharper.Sitelets.dll\r\n                                            -r:/managed/FSharp.Core.dll\r\n                                            -r:/managed/mscorlib.dll\r\n                                            -r:/managed/netstandard.dll\r\n                                            -r:/managed/System.dll\r\n                                            -r:/managed/System.Core.dll\r\n                                            -r:/managed/System.IO.dll\r\n                                            -r:/managed/System.Runtime.dll\r\n                                            -r:/managed/System.Net.Http.dll\r\n                                            -r:/managed/System.Threading.dll\r\n                                            -r:/managed/System.Numerics.dll\r\n                                            -r:/managed/System.Runtime.Numerics.dll\r\n                                        ",["\n"],0))));
  UI$1.cleanChannel("stdout");
  UI$1.cleanChannel("stderr");
  !(!self.document)?Remoting.messaging().set_D((i=Remoting.messaging().get_D(),IMessagingO.New(function(t)
  {
   Remoting.evalJS0(t[0],t[1]);
  },i.runRpc,i.returnValue,i.returnExn,function($3)
  {
   return function($4)
   {
    return w($3,$4);
   };
  }))):void 0;
  Log.printer().set_D(function(txt)
  {
   Remoting.logThis("Timings",txt);
  });
  SC$1.editorCmdV=Var$1.Create$1("");
  SC$1.editorRespW=View.MapAsync(function(inp)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    var a$2,a$3,t,a$4,t$1;
    a$2=UI$1.Coords("declaration",inp);
    return a$2!=null&&a$2.$==1?Concurrency.Return(JSON.stringify((WsTranslatorLoader_JsonEncoder.j())({
     $:1,
     $0:[a$2.$0,"definition"]
    }))):(a$3=UI$1.Coords("tooltip",inp),a$3!=null&&a$3.$==1?Concurrency.Bind((t=UI$1.getParms(),(new AjaxRemotingProvider.New()).Async("WsTranslator47:FsRoot.WsTranslator+Rpc.getTooltip:996654537",[t[0],t[1],t[2],a$3.$0])),function(a$5)
    {
     return Concurrency.Return(JSON.stringify(((Provider.Id())())(a$5==null?"":a$5.$0)));
    }):(a$4=UI$1.Coords("autocompletion",inp),a$4!=null&&a$4.$==1?Concurrency.Bind((t$1=UI$1.getParms(),(new AjaxRemotingProvider.New()).Async("WsTranslator47:FsRoot.WsTranslator+Rpc.getAutoCompletion:501996274",[t$1[0],t$1[1],t$1[2],a$4.$0])),function(a$5)
    {
     return Concurrency.Return(JSON.stringify(((Provider.EncodeArray(WsTranslatorLoader_JsonEncoder.j$2))())(a$5)));
    }):Concurrency.Return("")));
   });
  },UI$1.editorCmdV().get_View());
  SC$1.presencesW=View.MapAsync(function(p)
  {
   return(new AjaxRemotingProvider.New()).Async("WsTranslator47:FsRoot.WsTranslator+Rpc.getPresencesRpc:-1840423385",[p]);
  },UI$1.getPresencesV().get_View());
  SC$1.fileNameV=Var$1.Create$1("");
  SC$1.fileErrorsW=($1=UI$1.errorsV().get_View(),($2=UI$1.fileNameV().get_View(),(((Runtime.Curried3(View.Map2))(a$1))($1))($2)));
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
  function cont(a$1)
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
 Snap.WhenObsoleteRun=function(snap,obs)
 {
  var m;
  m=snap.s;
  m==null?obs():m!=null&&m.$==2?m.$1.push(obs):m!=null&&m.$==3?m.$1.push(obs):void 0;
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
 Snap.When=function(snap,avail,obs)
 {
  var m;
  m=snap.s;
  m==null?Snap.Obsolete(obs):m!=null&&m.$==2?(Snap.EnqueueSafe(m.$1,obs),avail(m.$0)):m!=null&&m.$==3?(m.$0.push(avail),Snap.EnqueueSafe(m.$1,obs)):avail(m.$0);
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
  }),(Snap.When(sn,function(a$1)
  {
   Snap.MarkDone(res,sn,fn(a$1));
  },res),res));
 };
 Snap.MarkDone=function(res,sn,v)
 {
  var $1;
  if($1=sn.s,$1!=null&&$1.$==0)
   Snap.MarkForever(res,v);
  else
   Snap.MarkReady(res,v);
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
   subscribe(function(a$1)
   {
    once(function()
    {
     c.k({
      $:0,
      $0:a$1
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
 Concurrency.TryWith=function(r,f)
 {
  return function(c)
  {
   r(AsyncBody.New(function(a$1)
   {
    if(a$1.$==0)
     c.k({
      $:0,
      $0:a$1.$0
     });
    else
     if(a$1.$==1)
      try
      {
       (f(a$1.$0))(c);
      }
      catch(e)
      {
       c.k(a$1);
      }
     else
      c.k(a$1);
   },c.ct));
  };
 };
 Concurrency.Bind=function(r,f)
 {
  return Concurrency.checkCancel(function(c)
  {
   r(AsyncBody.New(function(a$1)
   {
    var x;
    if(a$1.$==0)
     {
      x=a$1.$0;
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
      c.k(a$1);
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
 Concurrency.Combine=function(a$1,b)
 {
  return Concurrency.Bind(a$1,function()
  {
   return b;
  });
 };
 Concurrency.Zero=function()
 {
  SC$4.$cctor();
  return SC$4.Zero;
 };
 Concurrency.Start=function(c,ctOpt)
 {
  var ct,d;
  ct=(d=(Concurrency.defCTS())[0],ctOpt==null?d:ctOpt.$0);
  Concurrency.scheduler().Fork(function()
  {
   if(!ct.c)
    c(AsyncBody.New(function(a$1)
    {
     if(a$1.$==1)
      Concurrency.UncaughtAsyncError(a$1.$0);
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
 Concurrency.scheduler=function()
 {
  SC$4.$cctor();
  return SC$4.scheduler;
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
  SC$4.$cctor();
  return SC$4.defCTS;
 };
 Concurrency.UncaughtAsyncError=function(e)
 {
  console.log("WebSharper: Uncaught asynchronous exception",e);
 };
 Concurrency.noneCT=function()
 {
  SC$4.$cctor();
  return SC$4.noneCT;
 };
 Concurrency.GetCT=function()
 {
  SC$4.$cctor();
  return SC$4.GetCT;
 };
 Concurrency.StartWithContinuations=function(c,s,f,cc,ctOpt)
 {
  var ct,d;
  ct=(d=(Concurrency.defCTS())[0],ctOpt==null?d:ctOpt.$0);
  !ct.c?c(AsyncBody.New(function(a$1)
  {
   if(a$1.$==1)
    f(a$1.$0);
   else
    if(a$1.$==2)
     cc(a$1.$0);
    else
     s(a$1.$0);
  },ct)):void 0;
 };
 Arrays.length=function(arr)
 {
  return arr.dims===2?arr.length*arr.length:arr.length;
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
 Arrays.set=function(arr,n,x)
 {
  Arrays.checkBounds(arr,n);
  arr[n]=x;
 };
 WasmStatus.WasmWorkerLoading={
  $:3
 };
 WasmStatus.WasmLoading={
  $:1
 };
 WasmStatus.WasmWorkerLoaded={
  $:4
 };
 WasmStatus.WasmLoaded={
  $:2
 };
 WasmStatus.WasmNotLoaded={
  $:0
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
 Unchecked.Equals=function(a$1,b)
 {
  var m,eqR,k,k$1;
  if(a$1===b)
   return true;
  else
   {
    m=typeof a$1;
    if(m=="object")
    {
     if(a$1===null||a$1===void 0||b===null||b===void 0)
      return false;
     else
      if("Equals"in a$1)
       return a$1.Equals(b);
      else
       if(a$1 instanceof Global.Array&&b instanceof Global.Array)
        return Unchecked.arrayEquals(a$1,b);
       else
        if(a$1 instanceof Global.Date&&b instanceof Global.Date)
         return Unchecked.dateEquals(a$1,b);
        else
         {
          eqR=[true];
          for(var k$2 in a$1)if(function(k$3)
          {
           eqR[0]=!a$1.hasOwnProperty(k$3)||b.hasOwnProperty(k$3)&&Unchecked.Equals(a$1[k$3],b[k$3]);
           return!eqR[0];
          }(k$2))
           break;
          if(eqR[0])
           {
            for(var k$3 in b)if(function(k$4)
            {
             eqR[0]=!b.hasOwnProperty(k$4)||a$1.hasOwnProperty(k$4);
             return!eqR[0];
            }(k$3))
             break;
           }
          return eqR[0];
         }
    }
    else
     return m=="function"&&("$Func"in a$1?a$1.$Func===b.$Func&&a$1.$Target===b.$Target:"$Invokes"in a$1&&"$Invokes"in b&&Unchecked.arrayEquals(a$1.$Invokes,b.$Invokes));
   }
 };
 Unchecked.Compare=function(a$1,b)
 {
  var $1,m,$2,cmp,k,k$1;
  if(a$1===b)
   return 0;
  else
   {
    m=typeof a$1;
    switch(m=="function"?1:m=="boolean"?2:m=="number"?2:m=="string"?2:m=="object"?3:0)
    {
     case 0:
      return typeof b=="undefined"?0:-1;
     case 1:
      return Operators.FailWith("Cannot compare function values.");
     case 2:
      return a$1<b?-1:1;
     case 3:
      if(a$1===null)
       $2=-1;
      else
       if(b===null)
        $2=1;
       else
        if("CompareTo"in a$1)
         $2=a$1.CompareTo(b);
        else
         if("CompareTo0"in a$1)
          $2=a$1.CompareTo0(b);
         else
          if(a$1 instanceof Global.Array&&b instanceof Global.Array)
           $2=Unchecked.compareArrays(a$1,b);
          else
           if(a$1 instanceof Global.Date&&b instanceof Global.Date)
            $2=Unchecked.compareDates(a$1,b);
           else
            {
             cmp=[0];
             for(var k$2 in a$1)if(function(k$3)
             {
              return!a$1.hasOwnProperty(k$3)?false:!b.hasOwnProperty(k$3)?(cmp[0]=1,true):(cmp[0]=Unchecked.Compare(a$1[k$3],b[k$3]),cmp[0]!==0);
             }(k$2))
              break;
             if(cmp[0]===0)
              {
               for(var k$3 in b)if(function(k$4)
               {
                return!b.hasOwnProperty(k$4)?false:!a$1.hasOwnProperty(k$4)&&(cmp[0]=-1,true);
               }(k$3))
                break;
              }
             $2=cmp[0];
            }
      return $2;
    }
   }
 };
 Unchecked.arrayEquals=function(a$1,b)
 {
  var eq,i;
  if(Arrays.length(a$1)===Arrays.length(b))
   {
    eq=true;
    i=0;
    while(eq&&i<Arrays.length(a$1))
     {
      !Unchecked.Equals(Arrays.get(a$1,i),Arrays.get(b,i))?eq=false:void 0;
      i=i+1;
     }
    return eq;
   }
  else
   return false;
 };
 Unchecked.dateEquals=function(a$1,b)
 {
  return a$1.getTime()===b.getTime();
 };
 Unchecked.compareArrays=function(a$1,b)
 {
  var cmp,i;
  if(Arrays.length(a$1)<Arrays.length(b))
   return -1;
  else
   if(Arrays.length(a$1)>Arrays.length(b))
    return 1;
   else
    {
     cmp=0;
     i=0;
     while(cmp===0&&i<Arrays.length(a$1))
      {
       cmp=Unchecked.Compare(Arrays.get(a$1,i),Arrays.get(b,i));
       i=i+1;
      }
     return cmp;
    }
 };
 Unchecked.compareDates=function(a$1,b)
 {
  return Unchecked.Compare(a$1.getTime(),b.getTime());
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
 Seq.map=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var en;
    en=Enumerator.Get(s);
    return new T.New(null,null,function(e)
    {
     return en.MoveNext()&&(e.c=f(en.Current()),true);
    },function()
    {
     en.Dispose();
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
    return new T.New(e1,null,function(x)
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
 Seq.distinct=function(s)
 {
  return Seq.distinctBy(Global.id,s);
 };
 Seq.cache=function(s)
 {
  var cache,o;
  cache=[];
  o=[Enumerator.Get(s)];
  return{
   GetEnumerator:function()
   {
    return new T.New(0,null,function(e)
    {
     var en;
     return e.s<cache.length?(e.c=cache[e.s],e.s=e.s+1,true):(en=o[0],Unchecked.Equals(en,null)?false:en.MoveNext()?(e.s=e.s+1,e.c=en.Current(),cache.push(e.c),true):(en.Dispose(),o[0]=null,false));
    },void 0);
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
 Seq.filter=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var o;
    o=Enumerator.Get(s);
    return new T.New(null,null,function(e)
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
 Seq.distinctBy=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    var o,seen;
    o=Enumerator.Get(s);
    seen=new HashSet.New$3();
    return new T.New(null,null,function(e)
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
 Strings.ReplaceOnce=function(string,search,replace)
 {
  return string.replace(search,replace);
 };
 Strings.SplitWith=function(str,pat)
 {
  return str.split(pat);
 };
 Strings.Substring=function(s,ix,ct)
 {
  return s.substr(ix,ct);
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
 ParseO.Int=function()
 {
  SC$1.$cctor();
  return SC$1["|Int|_|"];
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
 Var$1=UI.Var$1=Runtime.Class({},Obj,Var$1);
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
 Remoting$1.AjaxProvider=function()
 {
  SC$2.$cctor();
  return SC$2.AjaxProvider;
 };
 Remoting$1.set_AjaxProvider=function($1)
 {
  SC$2.$cctor();
  SC$2.AjaxProvider=$1;
 };
 Remoting$1.makePayload=function(data)
 {
  return JSON.stringify(data);
 };
 Remoting$1.makeHeaders=function(m)
 {
  return{
   "content-type":"application/json",
   "x-websharper-rpc":m
  };
 };
 Remoting$1.EndPoint=function()
 {
  SC$2.$cctor();
  return SC$2.EndPoint;
 };
 Remoting$1.ajax=function(async,url,headers,data,ok,err,csrf)
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
 Dictionary=Collections.Dictionary=Runtime.Class({
  set:function(k,v)
  {
   var $this,h,d,m;
   $this=this;
   h=this.hash(k);
   d=this.data[h];
   d==null?(this.count=this.count+1,this.data[h]=new Global.Array({
    K:k,
    V:v
   })):(m=Arrays.tryFindIndex(function(a$1)
   {
    return $this.equals.apply(null,[(Operators.KeyValue(a$1))[0],k]);
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
  Add:function(k,v)
  {
   this.add(k,v);
  },
  TryGetValue:function(k,res)
  {
   var $this,d,v;
   $this=this;
   d=this.data[this.hash(k)];
   return d==null?false:(v=Arrays.tryPick(function(a$1)
   {
    var a$2;
    a$2=Operators.KeyValue(a$1);
    return $this.equals.apply(null,[a$2[0],k])?{
     $:1,
     $0:a$2[1]
    }:null;
   },d),v!=null&&v.$==1&&(res.set(v.$0),true));
  },
  remove:function(k)
  {
   var $this,h,d,r;
   $this=this;
   h=this.hash(k);
   d=this.data[h];
   return d==null?false:(r=Arrays.filter(function(a$1)
   {
    return!$this.equals.apply(null,[(Operators.KeyValue(a$1))[0],k]);
   },d),Arrays.length(r)<d.length&&(this.count=this.count-1,this.data[h]=r,true));
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
   })):(Arrays.exists(function(a$1)
   {
    return $this.equals.apply(null,[(Operators.KeyValue(a$1))[0],k]);
   },d)?DictionaryUtil.alreadyAdded():void 0,this.count=this.count+1,d.push({
    K:k,
    V:v
   }));
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
 ListModel.Create=function(key,init)
 {
  return ListModel.CreateWithStorage(key,Storage.InMemory(Arrays.ofSeq(init)));
 };
 ListModel.CreateWithStorage=function(key,storage)
 {
  return new ListModel.New(key,storage);
 };
 UI$1.wasmPathV=function()
 {
  SC$1.$cctor();
  return SC$1.wasmPathV;
 };
 UI$1.cleanChannel=function(ch)
 {
  UI$1.setChannel(ch,"");
 };
 UI$1.addChannel=function(ch,v)
 {
  var pre;
  pre=UI$1.getChannel(ch);
  UI$1.setChannel(ch,pre+(pre===""?"":"\n")+v);
 };
 UI$1.Coords=function(cmd,inp)
 {
  var m,$1,a$1,a$2;
  m=Strings.SplitChars(inp,[" "],0);
  return!Unchecked.Equals(m,null)&&m.length===3&&(a$1=(ParseO.Int())(Arrays.get(m,1)),a$1!=null&&a$1.$==1&&(a$2=(ParseO.Int())(Arrays.get(m,2)),a$2!=null&&a$2.$==1&&(Arrays.get(m,0)===cmd&&($1=[Arrays.get(m,0),a$2.$0,a$1.$0],true))))?{
   $:1,
   $0:Position.New($1[2],$1[1])
  }:null;
 };
 UI$1.getParms=function()
 {
  return["WasmTest",Arrays.filter(function(s)
  {
   return Strings.Trim(s)!=="";
  },Strings.SplitChars("fsc.exe\n"+UI$1.optsV().Get(),["\n"],0)),UI$1.codeV().Get()];
 };
 UI$1.editorCmdV=function()
 {
  SC$1.$cctor();
  return SC$1.editorCmdV;
 };
 UI$1.getPresencesV=function()
 {
  SC$1.$cctor();
  return SC$1.getPresencesV;
 };
 UI$1.errorsV=function()
 {
  SC$1.$cctor();
  return SC$1.errorsV;
 };
 UI$1.fileNameV=function()
 {
  SC$1.$cctor();
  return SC$1.fileNameV;
 };
 UI$1.setChannel=function(ch,v)
 {
  UI$1.detailsV().Append([ch,[v,v!==""]]);
 };
 UI$1.getChannel=function(ch)
 {
  var o,o$1;
  o=(o$1=UI$1.detailsV().TryFindByKey(ch),o$1==null?null:{
   $:1,
   $0:o$1.$0[1][0]
  });
  return o==null?"":o.$0;
 };
 UI$1.optsV=function()
 {
  SC$1.$cctor();
  return SC$1.optsV;
 };
 UI$1.codeV=function()
 {
  SC$1.$cctor();
  return SC$1.codeV;
 };
 UI$1.detailsV=function()
 {
  SC$1.$cctor();
  return SC$1.detailsV;
 };
 Dependency$1=Library.Dependency=Runtime.Class({
  set_D:function(v)
  {
   this.D=v;
  }
 },Obj,Dependency$1);
 Dependency$1.New=Runtime.Ctor(function(def)
 {
  Obj.New.call(this);
  this.D=def;
 },Dependency$1);
 Log.printer=function()
 {
  SC$3.$cctor();
  return SC$3.printer;
 };
 View=UI.View=Runtime.Class({},null,View);
 Position.New=function(line,col)
 {
  return{
   line:line,
   col:col
  };
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
 WsTranslatorLoader_JsonEncoder.j=function()
 {
  return WsTranslatorLoader_JsonEncoder._v?WsTranslatorLoader_JsonEncoder._v:WsTranslatorLoader_JsonEncoder._v=(Provider.EncodeUnion(void 0,"$",[null,[1,[["$0","Value",Provider.EncodeTuple([Provider.Id(),Provider.Id()]),0]]]]))();
 };
 WsTranslatorLoader_JsonEncoder.j$2=function()
 {
  return WsTranslatorLoader_JsonEncoder._v$2?WsTranslatorLoader_JsonEncoder._v$2:WsTranslatorLoader_JsonEncoder._v$2=(Provider.EncodeRecord(void 0,[["kind",Provider.Id(),0],["label",Provider.Id(),0],["detail",Provider.Id(),0],["replace",Provider.EncodeTuple([Provider.Id(),Provider.Id()]),0]]))();
 };
 WsTranslatorLoader_JsonEncoder.j$3=function()
 {
  return WsTranslatorLoader_JsonEncoder._v$3?WsTranslatorLoader_JsonEncoder._v$3:WsTranslatorLoader_JsonEncoder._v$3=(Provider.EncodeRecord(void 0,[["startP",Provider.Id(),0],["endP",Provider.Id(),0],["severity",WsTranslatorLoader_JsonEncoder.j$4,0],["message",Provider.Id(),0]]))();
 };
 WsTranslatorLoader_JsonEncoder.j$4=function()
 {
  return WsTranslatorLoader_JsonEncoder._v$4?WsTranslatorLoader_JsonEncoder._v$4:WsTranslatorLoader_JsonEncoder._v$4=(Provider.EncodeUnion(void 0,"$",[[0,[]],[1,[]],[2,[]],[3,[]],[4,[["$0","Item",Provider.Id(),0]]]]))();
 };
 AjaxRemotingProvider=Remoting$1.AjaxRemotingProvider=Runtime.Class({
  AsyncBase:function(m,data)
  {
   var $this,b;
   $this=this;
   b=null;
   return Concurrency.Delay(function()
   {
    var headers,payload;
    headers=Remoting$1.makeHeaders(m);
    payload=Remoting$1.makePayload(data);
    return Concurrency.Bind(Concurrency.GetCT(),function(a$1)
    {
     return Concurrency.FromContinuations(function(ok,err,cc)
     {
      var waiting,reg,a$2;
      function callback(u)
      {
       return waiting[0]?(waiting[0]=false,cc(new OperationCanceledException.New(a$1))):null;
      }
      waiting=[true];
      reg=Concurrency.Register(a$1,function()
      {
       callback();
      });
      a$2=$this.get_EndPoint();
      return Remoting$1.AjaxProvider().Async(a$2,headers,payload,function(x)
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
   return Remoting$1.EndPoint();
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
 Provider.Id=Runtime.Curried3(function($1,$2,x)
 {
  return x;
 });
 Provider.EncodeArray=Runtime.Curried3(function(encEl,$1,a$1)
 {
  return Arrays.map(encEl(),a$1);
 });
 Provider.EncodeUnion=function(a$1,discr,cases)
 {
  return function()
  {
   return function(x)
   {
    var o,p;
    function a$2(from,to,enc,kind)
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
     return a$2($1[0],$1[1],$1[2],$1[3]);
    },p[1]),o))):x;
   };
  };
 };
 Provider.EncodeTuple=Runtime.Curried3(function(encs,$1,args)
 {
  return Arrays.map2(function($2,$3)
  {
   return($2(null))($3);
  },encs,args);
 });
 Provider.EncodeRecord=function(a$1,fields)
 {
  return function()
  {
   return function(x)
   {
    var o;
    function a$2(name,enc,kind)
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
     return a$2($1[0],$1[1],$1[2]);
    },fields);
    return o;
   };
  };
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
 Arrays.map=function(f,arr)
 {
  var r,i,$1;
  r=new Global.Array(arr.length);
  for(i=0,$1=arr.length-1;i<=$1;i++)r[i]=f(arr[i]);
  return r;
 };
 Arrays.filter=function(f,arr)
 {
  var r,i,$1;
  r=[];
  for(i=0,$1=arr.length-1;i<=$1;i++)if(f(arr[i]))
   r.push(arr[i]);
  return r;
 };
 Arrays.ofSeq=function(xs)
 {
  var q,o;
  if(xs instanceof Global.Array)
   return xs.slice();
  else
   if(xs instanceof T$1)
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
 Arrays.iter=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)f(arr[i]);
 };
 Arrays.map2=function(f,arr1,arr2)
 {
  var r,i,$1;
  Arrays.checkLength(arr1,arr2);
  r=new Global.Array(arr2.length);
  for(i=0,$1=arr2.length-1;i<=$1;i++)r[i]=f(arr1[i],arr2[i]);
  return r;
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
 Arrays.checkLength=function(arr1,arr2)
 {
  if(arr1.length!==arr2.length)
   Operators.FailWith("The arrays have different lengths.");
 };
 Arrays.concat=function(xs)
 {
  return Global.Array.prototype.concat.apply([],Arrays.ofSeq(xs));
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
 CustomXhrProvider=Remoting.CustomXhrProvider=Runtime.Class({
  Async:function(url,headers,data,ok,err)
  {
   var md;
   md=Remoting.getHeaderRpc(headers);
   ReturnQueue.add(md,[ok,err]);
   try
   {
    ((Remoting.printfnLog("Timings",Runtime.Curried3(function($1,$2,$3)
    {
     return $1(Utils.toSafe($2)+" CustomXhrProvider: "+Utils.toSafe($3));
    })))(function(n)
    {
     return n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)+" "+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+"."+("00"+n.getMilliseconds()).slice(-3);
    }(new Global.Date(Date.now()))))(md);
    Remoting.callRunRpc(md,data);
   }
   catch(e)
   {
    Remoting.returnExnExn(md,e);
   }
  }
 },Obj,CustomXhrProvider);
 CustomXhrProvider.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },CustomXhrProvider);
 Require=WasmLoad.Require=Runtime.Class({},Obj,Require);
 WsTranslator.dlls=function()
 {
  return Arrays.ofSeq(List.ofSeq(Seq.delay(function()
  {
   return Seq.map(function(f)
   {
    return f.$0;
   },WsTranslator.justDlls());
  })));
 };
 WsTranslator.justDlls=function()
 {
  SC$3.$cctor();
  return SC$3.justDlls;
 };
 Pojo.newPojo=function(props)
 {
  var pojo,f;
  function f$1(a$1,a$2)
  {
   return function(p)
   {
    return Pojo.addProp(a$1,a$2,p);
   };
  }
  function g(v)
  {
  }
  pojo={};
  Seq.iter((f=function(b)
  {
   return(function($1)
   {
    return f$1($1[0],$1[1]);
   }(b))(pojo);
  },function(x)
  {
   return g(f(x));
  }),props);
  return pojo;
 };
 Pojo.addProp=function(p,p$1,pojo)
 {
  pojo[p]=p$1;
  return pojo;
 };
 List.ofArray=function(arr)
 {
  var r,i,$1;
  r=T$1.Empty;
  for(i=Arrays.length(arr)-1,$1=0;i>=$1;i--)r=new T$1({
   $:1,
   $0:Arrays.get(arr,i),
   $1:r
  });
  return r;
 };
 List.ofSeq=function(s)
 {
  var e,$1,go,r,res,t;
  if(s instanceof T$1)
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
       $1=T$1.Empty;
      else
       {
        res=new T$1({
         $:1
        });
        r=res;
        while(go)
         {
          r.$0=e.Current();
          e.MoveNext()?r=(t=new T$1({
           $:1
          }),r.$1=t,t):go=false;
         }
        r.$1=T$1.Empty;
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
 SC$2.$cctor=function()
 {
  SC$2.$cctor=Global.ignore;
  SC$2.EndPoint="?";
  SC$2.AjaxProvider=new XhrProvider.New();
 };
 DictionaryUtil.alreadyAdded=function()
 {
  return Operators.FailWith("An item with the same key has already been added.");
 };
 ReturnQueue.tryGet=function(md)
 {
  var o,arr,m,narr;
  o=ReturnQueue.tryGetS(md);
  return o==null?null:(arr=o.$0,(m=Seq.tryHead(arr),m!=null&&m.$==1?(narr=Slice.array(arr,{
   $:1,
   $0:1
  },null),(ReturnQueue.queues().Remove(md),ReturnQueue.queues().Add(md,narr),{
   $:1,
   $0:m.$0
  })):null));
 };
 ReturnQueue.tryGetS=function(md)
 {
  return(ParseO.tryParseWith(function(a$1)
  {
   var o;
   o=null;
   return[ReturnQueue.queues().TryGetValue(a$1,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o];
  }))(md);
 };
 ReturnQueue.queues=function()
 {
  SC$1.$cctor();
  return SC$1.queues;
 };
 ReturnQueue.add=function(md,fs)
 {
  var narr,m;
  narr=(m=ReturnQueue.tryGetS(md),m==null?[fs]:(ReturnQueue.queues().Remove(md),m.$0.concat([fs])));
  ReturnQueue.queues().Add(md,narr);
 };
 Storage.InMemory=function(init)
 {
  return new ArrayStorage.New(init);
 };
 Enumerator.Get=function(x)
 {
  return x instanceof Global.Array?Enumerator.ArrayEnumerator(x):Unchecked.Equals(typeof x,"string")?Enumerator.StringEnumerator(x):x.GetEnumerator();
 };
 Enumerator.ArrayEnumerator=function(s)
 {
  return new T.New(0,null,function(e)
  {
   var i;
   i=e.s;
   return i<Arrays.length(s)&&(e.c=Arrays.get(s,i),e.s=i+1,true);
  },void 0);
 };
 Enumerator.StringEnumerator=function(s)
 {
  return new T.New(0,null,function(e)
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
 T=Enumerator.T=Runtime.Class({
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
 },Obj,T);
 T.New=Runtime.Ctor(function(s,c,n,d)
 {
  Obj.New.call(this);
  this.s=s;
  this.c=c;
  this.n=n;
  this.d=d;
 },T);
 SC$3.$cctor=function()
 {
  SC$3.$cctor=Global.ignore;
  SC$3.printer=new Dependency$1.New(function(txt)
  {
   console.log(txt);
  });
  SC$3.justDlls=[{
   $:0,
   $0:"/dlls/WebSharper.Main.dll"
  },{
   $:0,
   $0:"/dlls/WebSharper.JavaScript.dll"
  },{
   $:0,
   $0:"/dlls/WebSharper.Collections.dll"
  },{
   $:0,
   $0:"/dlls/WebSharper.Control.dll"
  },{
   $:0,
   $0:"/dlls/WebSharper.Web.dll"
  },{
   $:0,
   $0:"/dlls/WebSharper.Sitelets.dll"
  },{
   $:0,
   $0:"/dlls/WebSharper.UI.dll"
  },{
   $:0,
   $0:"/dlls/WebSharper.UI.Templating.Runtime.dll"
  },{
   $:0,
   $0:"/dlls/WebSharper.Data.dll"
  }];
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
 Seq.insufficient=function()
 {
  return Operators.FailWith("The input sequence has an insufficient number of elements.");
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
 CT.New=function(IsCancellationRequested,Registrations)
 {
  return{
   c:IsCancellationRequested,
   r:Registrations
  };
 };
 T$1=List.T=Runtime.Class({
  GetEnumerator:function()
  {
   return new T.New(this,null,function(e)
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
 },null,T$1);
 T$1.Empty=new T$1({
  $:0
 });
 Fresh.Int=function()
 {
  Fresh.set_counter(Fresh.counter()+1);
  return Fresh.counter();
 };
 Fresh.Id=function()
 {
  Fresh.set_counter(Fresh.counter()+1);
  return"uid"+Global.String(Fresh.counter());
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
 XhrProvider=Remoting$1.XhrProvider=Runtime.Class({
  Async:function(url,headers,data,ok,err)
  {
   Remoting$1.ajax(true,url,headers,data,ok,err,function()
   {
    Remoting$1.ajax(true,url,headers,data,ok,err,void 0);
   });
  }
 },Obj,XhrProvider);
 XhrProvider.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },XhrProvider);
 ListModel=UI.ListModel=Runtime.Class({
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
  GetEnumerator:function()
  {
   return Enumerator.Get(this["var"].Get());
  },
  GetEnumerator0:function()
  {
   return Enumerator.Get0(this["var"].Get());
  }
 },Obj,ListModel);
 ListModel.New=Runtime.Ctor(function(key,storage)
 {
  ListModel.New$3.call(this,key,Var$1.Create$1(Arrays.ofSeq(Seq.distinctBy(key,storage.SInit()))),storage);
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
 ArrayStorage=Storage.ArrayStorage=Runtime.Class({
  SInit:function()
  {
   return this.init;
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
 CancellationTokenSource=WebSharper.CancellationTokenSource=Runtime.Class({},Obj,CancellationTokenSource);
 CancellationTokenSource.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.c=false;
  this.pending=null;
  this.r=[];
  this.init=1;
 },CancellationTokenSource);
 HashSet=Collections.HashSet=Runtime.Class({
  Add:function(item)
  {
   return this.add(item);
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
 FormatException=WebSharper.FormatException=Runtime.Class({},Error,FormatException);
 FormatException.New$1=Runtime.Ctor(function(message)
 {
  this.message=message;
  Object.setPrototypeOf(this,FormatException.prototype);
 },FormatException);
 SC$5.$cctor=function()
 {
  SC$5.$cctor=Global.ignore;
  SC$5.counter=0;
 };
 Queue.Clear=function(a$1)
 {
  a$1.splice(0,Arrays.length(a$1));
 };
 HashSetUtil.concat=function(o)
 {
  var r,k;
  r=[];
  for(var k$1 in o)r.push.apply(r,o[k$1]);
  return r;
 };
 function a($1,$2)
 {
  Global.postMessage({
   $:3,
   $0:$1,
   $1:$2
  });
 }
 View.Sink(function($1)
 {
  return a($1[0],$1[1]);
 },WsTranslatorLoader.wasmStatusV().get_View());
 Global.onmessage=function(d)
 {
  return WWorker.receiveMessage(WasmLoad.loadInThisThread,d);
 };
 Remoting.messaging().set_D(IMessagingO.New(function(t)
 {
  Remoting.evalJS0(t[0],t[1]);
 },function(h)
 {
  return function(d)
  {
   return self.WASM_WsTranslator47_FsRoot_WsTranslator_runRpc(h,d);
  };
 },function(v)
 {
  Global.postMessage({
   $:0,
   $0:v[0],
   $1:v[1]
  });
 },function(v)
 {
  Global.postMessage({
   $:1,
   $0:v[0],
   $1:v[1]
  });
 },function(ch)
 {
  return function(v)
  {
   return Global.postMessage({
    $:2,
    $0:ch,
    $1:v
   });
  };
 }));
}(self));


if (typeof IntelliFactory !=='undefined') {
  IntelliFactory.Runtime.ScriptSkipAssemblyDir = true;
  IntelliFactory.Runtime.Start();
}
